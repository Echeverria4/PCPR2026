import type { Question } from "../lib/types";
import { QUESTOES_PT as PT_PCPR } from "../data/questions/pt";
import { QUESTOES_PRF_POR_MATERIA } from "../prf/questoes";
import type { QuestaoCurso } from "../prf/cursos/completo/tipos";
import {
  AULA_POL_DO_TEMA,
  TEMA_QUESTAO_ADM,
  TEMA_QUESTAO_PCPR,
  TEMA_TOPICO_ADM,
  TEMA_TOPICO_PCPR,
  TEMAS_PT,
  type TemaPt,
} from "./temasPt";

const NOME_TEMA = new Map(TEMAS_PT.map((t) => [t.id, t.nome]));

/**
 * Banco por tema: cada curso que tem questões entra aqui como fonte, e cada questão ganha um tema. Um curso que
 * recebe questões pega, de todas as outras fontes, as do mesmo tema, na aula dele que cobre esse tema.
 * Fonte nova (ex.: PF) = uma entrada em FONTES_PT; a questão aparece sozinha em todos os cursos com o mesmo tema.
 */
export type CursoFonte = "prf-adm" | "pcpr2026";

interface FonteBanco {
  curso: CursoFonte;
  /** Prefixo do id: o progresso da questão não troca quando a fonte cresce. */
  prefixo: string;
  /** Selo mostrado na questão, antes da resposta. */
  selo: string;
  questoes: () => Question<string>[];
  tema: (q: Question<string>) => TemaPt | null;
}

function temaPor(porQuestao: Record<string, TemaPt | null>, porTopico: Record<string, TemaPt | null>) {
  return (q: Question<string>): TemaPt | null => (q.id in porQuestao ? porQuestao[q.id] : (porTopico[q.topico] ?? null));
}

const FONTES_PT: FonteBanco[] = [
  {
    curso: "prf-adm",
    prefixo: "cmp-adm",
    selo: "Do curso PRF ADM",
    questoes: () => QUESTOES_PRF_POR_MATERIA.pt,
    tema: temaPor(TEMA_QUESTAO_ADM, TEMA_TOPICO_ADM),
  },
  {
    curso: "pcpr2026",
    prefixo: "cmp-pcpr",
    selo: "Do curso PCPR 2026",
    questoes: () => PT_PCPR,
    tema: temaPor(TEMA_QUESTAO_PCPR, TEMA_TOPICO_PCPR),
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
 * Questões de Português das outras fontes para a PRF Policial, já na aula certa, com o tema como tópico e selo de origem.
 * Ficam fora: as do mesmo enunciado que uma questão do curso, as inéditas (o selo delas fala de outra prova),
 * as com Paraná ou Polícia Civil e as de tema que a PRF Policial não tem.
 */
export function compartilhadasPtPol(proprias: QuestaoCurso[]): QuestaoCurso[] {
  const vistos = new Set(proprias.map((q) => normalizar(q.enunciado)));
  const saida: QuestaoCurso[] = [];
  for (const f of FONTES_PT) {
    for (const q of f.questoes()) {
      const tema = f.tema(q);
      if (!tema || q.origem === "inedita" || FORA.test(textoDa(q))) continue;
      const chave = normalizar(q.enunciado);
      if (vistos.has(chave)) continue;
      vistos.add(chave);
      // O tópico vira o nome do tema: o filtro de assuntos do treino ganha um chip por tema, não os tópicos do outro curso.
      saida.push({
        ...q,
        id: `${f.prefixo}-${q.id}`,
        materia: "pt",
        topico: NOME_TEMA.get(tema) ?? q.topico,
        aula: AULA_POL_DO_TEMA[tema],
        compartilhada: f.selo,
      });
    }
  }
  return saida;
}
