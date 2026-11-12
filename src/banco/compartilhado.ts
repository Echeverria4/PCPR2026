import type { Question } from "../lib/types";
import { QUESTOES_PT as PT_PCPR } from "../data/questions/pt";
import { QUESTOES_RLM as RLM_PCPR } from "../data/questions/rlm";
import { QUESTOES_ADM as ADM_PCPR } from "../data/questions/adm";
import { QUESTOES_CON as CON_PCPR } from "../data/questions/constitucional";
import { QUESTOES_PEN as PENAL_PCPR } from "../data/questions/pen";
import { QUESTOES_PP as PROC_PCPR } from "../data/questions/pp";
import { QUESTOES_LEG as LEG_PCPR } from "../data/questions/leg";
import { QUESTOES_DH as DH_PCPR } from "../data/questions/dh";
import { QUESTOES_TI_CRIMES } from "../data/questions/ti-crimes";
import { QUESTOES_TI } from "../data/questions/ti";
import { QUESTOES_TI_SEGURANCA } from "../data/questions/ti-seguranca";
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
import {
  AULA_POL_DO_TEMA_INFO,
  TEMA_QUESTAO_ADM_INFO,
  TEMA_QUESTAO_PCPR_INFO,
  TEMA_TOPICO_ADM_INFO,
  TEMA_TOPICO_PCPR_INFO,
  TEMAS_INFO,
} from "./temasInfo";
import {
  AULA_POL_DO_TEMA_ADM,
  TEMA_QUESTAO_ADM_ADM,
  TEMA_QUESTAO_ADM_ETICA_ADM,
  TEMA_QUESTAO_PCPR_ADM,
  TEMA_TOPICO_ADM_ADM,
  TEMA_TOPICO_ADM_ETICA_ADM,
  TEMA_TOPICO_PCPR_ADM,
  TEMAS_ADM,
} from "./temasAdm";
import {
  AULA_POL_DO_TEMA_CON,
  TEMA_QUESTAO_ADM_CON,
  TEMA_QUESTAO_ADM_LEG_CON,
  TEMA_QUESTAO_PCPR_CON,
  TEMA_TOPICO_ADM_CON,
  TEMA_TOPICO_ADM_LEG_CON,
  TEMA_TOPICO_PCPR_CON,
  TEMAS_CON,
  TEMA_QUESTAO_PCPR_PP_CON,
  TEMA_TOPICO_PCPR_PP_CON,
} from "./temasCon";
import { AULA_POL_DO_TEMA_ETICA, TEMA_QUESTAO_ADM_ETICA, TEMA_TOPICO_ADM_ETICA, TEMAS_ETICA } from "./temasEtica";
import {
  AULA_POL_DO_TEMA_PENAL,
  TEMA_QUESTAO_PCPR_PENAL,
  TEMA_QUESTAO_PCPR_TI_PENAL,
  TEMA_TOPICO_PCPR_PENAL,
  TEMAS_PENAL,
} from "./temasPenal";
import { AULA_POL_DO_TEMA_PROC, TEMA_QUESTAO_PCPR_PROC, TEMA_QUESTAO_PCPR_TI_PROC, TEMA_TOPICO_PCPR_PROC, TEMAS_PROC } from "./temasProc";
import {
  AULA_POL_DO_TEMA_ESPECIAL,
  TEMA_QUESTAO_ADM_LEG_ESPECIAL,
  TEMA_QUESTAO_PCPR_DH_ESPECIAL,
  TEMA_QUESTAO_PCPR_LEG_ESPECIAL,
  TEMA_QUESTAO_PCPR_PEN_ESPECIAL,
  TEMA_QUESTAO_PCPR_PP_ESPECIAL,
  TEMA_TOPICO_ADM_LEG_ESPECIAL,
  TEMA_TOPICO_PCPR_ESPECIAL,
  TEMAS_ESPECIAL,
} from "./temasEspecial";
import { AULA_POL_DO_TEMA_TRANSITO, TEMA_QUESTAO_PCPR_TRANSITO, TEMA_TOPICO_PCPR_TRANSITO, TEMAS_TRANSITO } from "./temasTransito";

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
  /** Barra também Polícia Civil (delegado, delegacia, inquérito...): só para a PCPR, cujo contexto é de investigação. */
  barraPoliciaCivil: boolean;
}

type TemaDe = Record<string, string | null>;

function temaPor(porQuestao: TemaDe, porTopico: TemaDe) {
  return (q: Question<string>): string | null => (q.id in porQuestao ? porQuestao[q.id] : (porTopico[q.topico] ?? null));
}

// Na PRF ADM, "delegacia da PRF", "competência delegada", o inquérito do PAD e o art. 144 são conteúdo do curso.
const PRF_ADM = { curso: "prf-adm", prefixo: "cmp-adm", selo: "Do curso PRF ADM", barraPoliciaCivil: false } as const;
const PCPR = { curso: "pcpr2026", prefixo: "cmp-pcpr", selo: "Do curso PCPR 2026", barraPoliciaCivil: true } as const;

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
  {
    materia: "info",
    temas: TEMAS_INFO,
    aula: AULA_POL_DO_TEMA_INFO,
    fontes: [
      { ...PRF_ADM, questoes: () => QUESTOES_PRF_POR_MATERIA.info, tema: temaPor(TEMA_QUESTAO_ADM_INFO, TEMA_TOPICO_ADM_INFO) },
      {
        ...PCPR,
        questoes: () => [...QUESTOES_TI, ...QUESTOES_TI_SEGURANCA],
        tema: temaPor(TEMA_QUESTAO_PCPR_INFO, TEMA_TOPICO_PCPR_INFO),
      },
    ],
  },
  {
    materia: "etica",
    temas: TEMAS_ETICA,
    aula: AULA_POL_DO_TEMA_ETICA,
    // A PCPR não tem Ética.
    fontes: [{ ...PRF_ADM, questoes: () => QUESTOES_PRF_POR_MATERIA.etica, tema: temaPor(TEMA_QUESTAO_ADM_ETICA, TEMA_TOPICO_ADM_ETICA) }],
  },
  {
    materia: "con",
    temas: TEMAS_CON,
    aula: AULA_POL_DO_TEMA_CON,
    fontes: [
      { ...PRF_ADM, questoes: () => QUESTOES_PRF_POR_MATERIA.con, tema: temaPor(TEMA_QUESTAO_ADM_CON, TEMA_TOPICO_ADM_CON) },
      // O art. 144 está em Legislação na PRF ADM.
      { ...PRF_ADM, questoes: () => QUESTOES_PRF_POR_MATERIA.leg, tema: temaPor(TEMA_QUESTAO_ADM_LEG_CON, TEMA_TOPICO_ADM_LEG_CON) },
      { ...PCPR, questoes: () => CON_PCPR, tema: temaPor(TEMA_QUESTAO_PCPR_CON, TEMA_TOPICO_PCPR_CON) },
      { ...PCPR, questoes: () => PROC_PCPR, tema: temaPor(TEMA_QUESTAO_PCPR_PP_CON, TEMA_TOPICO_PCPR_PP_CON) },
    ],
  },
  {
    // Só no Curso A: o Curso B repete os assuntos.
    materia: "adm-a",
    temas: TEMAS_ADM,
    aula: AULA_POL_DO_TEMA_ADM,
    fontes: [
      { ...PRF_ADM, questoes: () => QUESTOES_PRF_POR_MATERIA.adm, tema: temaPor(TEMA_QUESTAO_ADM_ADM, TEMA_TOPICO_ADM_ADM) },
      // Na PRF ADM, o regime disciplinar, a LAI e o conflito de interesses estão em Ética.
      { ...PRF_ADM, questoes: () => QUESTOES_PRF_POR_MATERIA.etica, tema: temaPor(TEMA_QUESTAO_ADM_ETICA_ADM, TEMA_TOPICO_ADM_ETICA_ADM) },
      { ...PCPR, questoes: () => ADM_PCPR, tema: temaPor(TEMA_QUESTAO_PCPR_ADM, TEMA_TOPICO_PCPR_ADM) },
    ],
  },
  {
    // A PRF ADM não tem Direito Penal.
    materia: "penal",
    temas: TEMAS_PENAL,
    aula: AULA_POL_DO_TEMA_PENAL,
    fontes: [
      { ...PCPR, questoes: () => PENAL_PCPR, tema: temaPor(TEMA_QUESTAO_PCPR_PENAL, TEMA_TOPICO_PCPR_PENAL) },
      // Na PCPR, os crimes cibernéticos estão em Informática.
      { ...PCPR, questoes: () => QUESTOES_TI_CRIMES, tema: temaPor(TEMA_QUESTAO_PCPR_TI_PENAL, TEMA_TOPICO_PCPR_PENAL) },
    ],
  },
  {
    // A PRF ADM não tem Processo Penal.
    materia: "proc",
    temas: TEMAS_PROC,
    aula: AULA_POL_DO_TEMA_PROC,
    fontes: [
      { ...PCPR, questoes: () => PROC_PCPR, tema: temaPor(TEMA_QUESTAO_PCPR_PROC, TEMA_TOPICO_PCPR_PROC) },
      { ...PCPR, questoes: () => QUESTOES_TI_CRIMES, tema: temaPor(TEMA_QUESTAO_PCPR_TI_PROC, TEMA_TOPICO_PCPR_PROC) },
    ],
  },
  {
    // Na PCPR, as leis especiais estão espalhadas por Penal, Legislação, Processo Penal e Direitos Humanos.
    materia: "especial",
    temas: TEMAS_ESPECIAL,
    aula: AULA_POL_DO_TEMA_ESPECIAL,
    fontes: [
      { ...PRF_ADM, questoes: () => QUESTOES_PRF_POR_MATERIA.leg, tema: temaPor(TEMA_QUESTAO_ADM_LEG_ESPECIAL, TEMA_TOPICO_ADM_LEG_ESPECIAL) },
      { ...PCPR, questoes: () => PENAL_PCPR, tema: temaPor(TEMA_QUESTAO_PCPR_PEN_ESPECIAL, TEMA_TOPICO_PCPR_ESPECIAL) },
      { ...PCPR, questoes: () => LEG_PCPR, tema: temaPor(TEMA_QUESTAO_PCPR_LEG_ESPECIAL, TEMA_TOPICO_PCPR_ESPECIAL) },
      { ...PCPR, questoes: () => PROC_PCPR, tema: temaPor(TEMA_QUESTAO_PCPR_PP_ESPECIAL, TEMA_TOPICO_PCPR_ESPECIAL) },
      { ...PCPR, questoes: () => DH_PCPR, tema: temaPor(TEMA_QUESTAO_PCPR_DH_ESPECIAL, TEMA_TOPICO_PCPR_ESPECIAL) },
    ],
  },
  {
    // Só os crimes de trânsito: a PCPR os tem em Direito Penal.
    materia: "transito",
    temas: TEMAS_TRANSITO,
    aula: AULA_POL_DO_TEMA_TRANSITO,
    fontes: [{ ...PCPR, questoes: () => PENAL_PCPR, tema: temaPor(TEMA_QUESTAO_PCPR_TRANSITO, TEMA_TOPICO_PCPR_TRANSITO) }],
  },
];

/**
 * Fora dos outros cursos: Paraná e facções; da PCPR, também Polícia Civil (delegado, escrivão, delegacia, inquérito).
 * O teste olha o enunciado, as alternativas e as explicações; a fonte da prova (atribuição) não conta.
 */
const TERMOS_PARANA = [
  "Paran[aá]",
  "Curitiba",
  "Londrina",
  "Maring[aá]",
  "Cascavel",
  "Foz do Igua",
  "PCPR",
  "BR-277",
  "BR-369",
  "BR-376",
  "Itaipu",
  "Paranagu",
  "PCC",
  "Comando Vermelho",
];
const TERMOS_POLICIA_CIVIL = ["Pol[ií]cia Civil", "Pol[ií]cia Montada", "delegad", "delegaci", "escriv[aã]", "investigador", "inqu[eé]rito"];
const FORA_PARANA = new RegExp(TERMOS_PARANA.join("|"), "i");
const FORA_PCPR = new RegExp([...TERMOS_PARANA, ...TERMOS_POLICIA_CIVIL].join("|"), "i");

function textoDa(q: Question<string>) {
  return [q.enunciado, ...q.alternativas, q.explicacao, q.explicacaoErradas ?? "", q.pegadinha ?? "", q.conhecimento ?? ""].join(" ");
}

const normalizar = (s: string) => s.toLowerCase().replace(/\W+/g, " ").trim();

/**
 * Questões das outras fontes para a PRF Policial, já na aula certa, com o tema como tópico e selo de origem.
 * Ficam fora: as do mesmo enunciado que uma questão do curso, as inéditas (o selo delas fala de outra prova),
 * as com Paraná (ou, da PCPR, Polícia Civil) e as de tema que a PRF Policial não tem.
 */
export function compartilhadasPol(proprias: QuestaoCurso[]): QuestaoCurso[] {
  const vistos = new Set(proprias.map((q) => normalizar(q.enunciado)));
  const saida: QuestaoCurso[] = [];
  for (const m of MATERIAS_POL) {
    const nome = new Map(m.temas.map((t) => [t.id, t.nome]));
    for (const f of m.fontes) {
      for (const q of f.questoes()) {
        const tema = f.tema(q);
        if (!tema || !(tema in m.aula) || q.origem === "inedita" || (f.barraPoliciaCivil ? FORA_PCPR : FORA_PARANA).test(textoDa(q))) continue;
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
