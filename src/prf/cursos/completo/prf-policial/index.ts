import { montarBanco, type BancoCurso, type DadosCursoCompleto } from "../tipos";
import { compartilhadasPtPol } from "../../../../banco/compartilhado";
import { AULAS_DISCURSIVAS } from "./discursivas";
import { AULAS_CARREIRA } from "./carreira";
import { AULAS_ECA } from "./eca";
import { AULAS_DH } from "./dh";
import { AULAS_ESPECIAL } from "./especial";
import { AULAS_PROC } from "./proc";
import { AULAS_PENAL } from "./penal";
import { AULAS_CON } from "./constitucional";
import { AULAS_ADM_B } from "./adm-b";
import { AULAS_ADM_A } from "./adm-a";
import { AULAS_TRANSITO } from "./transito";
import { AULAS_ESPANHOL } from "./espanhol";
import { AULAS_INGLES } from "./ingles";
import { AULAS_GEOPOLITICA } from "./geopolitica";
import { AULAS_ETICA } from "./etica";
import { AULAS_FISICA } from "./fisica";
import { AULAS_INFO } from "./info";
import { AULAS_RLM } from "./rlm";
import { AULAS_PT } from "./pt";

/**
 * Aulas com questões escondidas a pedido (12/11/26): as 9 de Redação Oficial (pt-15) e as 41 de Discursivas
 * (técnica da prova escrita) saem do treino e da aula. Os resumos, os mapas e a aba Redação continuam.
 * Para voltar, basta tirar a aula daqui (ela some do treino pelo id da aula, sem tirar o grupo dos Resumos).
 */
const AULAS_ESCONDIDAS = new Set(["pt-15", ...AULAS_DISCURSIVAS.map((a) => a.aula)]);

function semEscondidas(banco: BancoCurso): BancoCurso {
  return { ...banco, questoes: banco.questoes.filter((q) => !AULAS_ESCONDIDAS.has(q.aula ?? "")) };
}

/**
 * Banco por tema (12/11/26): as questões de Português da PRF ADM e da PCPR do mesmo assunto entram na aula certa,
 * com selo de origem. Questão nova numa fonte entra aqui sozinha (src/banco/compartilhado.ts).
 */
function comCompartilhadas(banco: BancoCurso): BancoCurso {
  return { ...banco, questoes: [...banco.questoes, ...compartilhadasPtPol(banco.questoes)] };
}

/** Cada matéria entra aqui quando o lote dela fica pronto. */
export const DADOS: DadosCursoCompleto = {
  banco: semEscondidas(comCompartilhadas(montarBanco("pol", { pt: AULAS_PT, rlm: AULAS_RLM, info: AULAS_INFO, fisica: AULAS_FISICA, etica: AULAS_ETICA, geopolitica: AULAS_GEOPOLITICA, ingles: AULAS_INGLES, espanhol: AULAS_ESPANHOL, transito: AULAS_TRANSITO, "adm-a": AULAS_ADM_A, "adm-b": AULAS_ADM_B, con: AULAS_CON, penal: AULAS_PENAL, proc: AULAS_PROC, especial: AULAS_ESPECIAL, dh: AULAS_DH, eca: AULAS_ECA, carreira: AULAS_CARREIRA, discursivas: AULAS_DISCURSIVAS }))),
  semQuestoes: ["carreira", "bizus", "trilha", "ebooks", "mentoria", ...AULAS_ESCONDIDAS],
  faixa: [
    { forte: "Sem edital", texto: "Novo concurso ainda sem edital nem banca definida" },
    { forte: "Nível 4 e 5", texto: "Questões difíceis, no nível da prova de nível superior" },
  ],
  redacao: () => import("./redacao/RedacaoPrf"),
  mapas: () => import("./mapas/MapasPrf"),
};
