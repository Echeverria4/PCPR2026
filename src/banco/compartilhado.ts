import type { Question } from "../lib/types";
import { QUESTOES_PT as PT_PCPR } from "../data/questions/pt";
import { QUESTOES_RLM as RLM_PCPR } from "../data/questions/rlm";
import { QUESTOES_PRF_POR_MATERIA } from "../prf/questoes";
import type { QuestaoCurso } from "../prf/cursos/completo/tipos";
import {
  AULA_POL_DO_TEMA,
  TEMA_QUESTAO_ADM,
  TEMA_QUESTAO_PCPR,
  TEMA_TOPICO_ADM,
  TEMA_TOPICO_PCPR,
  TEMAS_PT,
} from "./temasPt";
import {
  AULA_POL_DO_TEMA_RLM,
  TEMA_QUESTAO_ADM_RLM,
  TEMA_QUESTAO_PCPR_RLM,
  TEMA_TOPICO_ADM_RLM,
  TEMA_TOPICO_PCPR_RLM,
  TEMAS_RLM,
} from "./temasRlm";

/**
 * Banco por tema: cada curso que tem questões entra aqui como fonte, e cada questão ganha um tema. Um curso que
 * recebe questões pega, de todas as outras fontes, as do mesmo tema, na aula dele que cobre esse tema.
 * Fonte nova (ex.: PF) = uma entrada em fontes da matéria; a questão aparece sozinha em todos os cursos com o mesmo tema.
 * Matéria nova = uma entrada em MATERIAS_POL, com a tabela de temas dela (src/banco/temas*.ts).
 */
export type CursoFonte = "prf-adm" | "pcpr2026";

interface FonteBanco {
  curso: CursoFonte;
  /** Prefixo do id: o progresso da questão não troca quando a fonte cresce. */
  prefixo: string;
  /** Selo mostrado na questão, antes da resposta. */
  selo: string;
  questoes: () => Question<string>[];
  tema: (q: Question<string>) => string | null;
}

type TemaDe = Record<string, string | null>;

function temaPor(porQuestao: TemaDe, porTopico: TemaDe) {
  return (q: Question<string>): string | null => (q.id in porQuestao ? porQuestao[q.id] : (porTopico[q.topico] ?? null));
}

const PRF_ADM = { curso: "prf-adm", prefixo: "cmp-adm", selo: "Do curso PRF ADM" } as const;
const PCPR = { curso: "pcpr2026", prefixo: "cmp-pcpr", selo: "Do curso PCPR 2026" } as const;

interface MateriaBanco {
  /** Id da matéria na PRF Policial. */
  materia: string;
  temas: { id: string; nome: string }[];
  aula: Record<string, string>;
  fontes: FonteBanco[];
}

/** Matérias da PRF Policial que recebem questões de outros cursos, com as fontes de cada uma. */
const MATERIAS_POL: MateriaBanco[] = [
  {
    materia: "pt",
    temas: TEMAS_PT,
    aula: AULA_POL_DO_TEMA,
    fontes: [
      { ...PRF_ADM, questoes: () => QUESTOES_PRF_POR_MATERIA.pt, tema: temaPor(TEMA_QUESTAO_ADM, TEMA_TOPICO_ADM) },
      { ...PCPR, questoes: () => PT_PCPR, tema: temaPor(TEMA_QUESTAO_PCPR, TEMA_TOPICO_PCPR) },
    ],
  },
  {
    materia: "rlm",
    temas: TEMAS_RLM,
    aula: AULA_POL_DO_TEMA_RLM,
    fontes: [
      { ...PRF_ADM, questoes: () => QUESTOES_PRF_POR_MATERIA.rlm, tema: temaPor(TEMA_QUESTAO_ADM_RLM, TEMA_TOPICO_ADM_RLM) },
      { ...PCPR, questoes: () => RLM_PCPR, tema: temaPor(TEMA_QUESTAO_PCPR_RLM, TEMA_TOPICO_PCPR_RLM) },
    ],
  },
];

/**
 * Fora dos outros cursos: Paraná, Polícia Civil (delegado, escrivão, delegacia, inquérito) e facções. O teste olha
 * o enunciado, as alternativas e as explicações; a fonte da prova (atribuição) não conta.
 */
const FORA = new RegExp(
  [
    "Paran[aá]",
    "Curitiba",
    "Londrina",
    "Maring[aá]",
    "Cascavel",
    "Foz do Igua",
    "PCPR",
    "Pol[ií]cia Civil",
    "Pol[ií]cia Montada",
    "delegad",
    "delegaci",
    "escriv[aã]",
    "investigador",
    "inqu[eé]rito",
    "BR-277",
    "BR-369",
    "BR-376",
    "Itaipu",
    "Paranagu",
    "PCC",
    "Comando Vermelho",
  ].join("|"),
  "i",
);

function textoDa(q: Question<string>) {
  return [q.enunciado, ...q.alternativas, q.explicacao, q.explicacaoErradas ?? "", q.pegadinha ?? "", q.conhecimento ?? ""].join(" ");
}

const normalizar = (s: string) => s.toLowerCase().replace(/\W+/g, " ").trim();

/**
 * Questões das outras fontes para a PRF Policial, já na aula certa, com o tema como tópico e selo de origem.
 * Ficam fora: as do mesmo enunciado que uma questão do curso, as inéditas (o selo delas fala de outra prova),
 * as com Paraná ou Polícia Civil e as de tema que a PRF Policial não tem.
 */
export function compartilhadasPol(proprias: QuestaoCurso[]): QuestaoCurso[] {
  const vistos = new Set(proprias.map((q) => normalizar(q.enunciado)));
  const saida: QuestaoCurso[] = [];
  for (const m of MATERIAS_POL) {
    const nome = new Map(m.temas.map((t) => [t.id, t.nome]));
    for (const f of m.fontes) {
      for (const q of f.questoes()) {
        const tema = f.tema(q);
        if (!tema || !(tema in m.aula) || q.origem === "inedita" || FORA.test(textoDa(q))) continue;
        const chave = normalizar(q.enunciado);
        if (vistos.has(chave)) continue;
        vistos.add(chave);
        // O tópico vira o nome do tema: o filtro de assuntos do treino ganha um chip por tema, não os tópicos do outro curso.
        saida.push({
          ...q,
          id: `${f.prefixo}-${q.id}`,
          materia: m.materia,
          topico: nome.get(tema) ?? q.topico,
          aula: m.aula[tema],
          compartilhada: f.selo,
        });
      }
    }
  }
  return saida;
}
