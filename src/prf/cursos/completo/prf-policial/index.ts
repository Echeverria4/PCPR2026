import { montarBanco, type DadosCursoCompleto } from "../tipos";
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

/** Cada matéria entra aqui quando o lote dela fica pronto. */
export const DADOS: DadosCursoCompleto = {
  banco: montarBanco("pol", { pt: AULAS_PT, rlm: AULAS_RLM, info: AULAS_INFO, fisica: AULAS_FISICA, etica: AULAS_ETICA, geopolitica: AULAS_GEOPOLITICA, ingles: AULAS_INGLES, espanhol: AULAS_ESPANHOL, transito: AULAS_TRANSITO, "adm-a": AULAS_ADM_A }),
  semQuestoes: ["carreira", "bizus", "trilha", "ebooks", "mentoria", "pt-15"],
  faixa: [
    { forte: "Sem edital", texto: "Novo concurso ainda sem edital nem banca definida" },
    { forte: "Nível 4 e 5", texto: "Questões difíceis, no nível da prova de nível superior" },
  ],
};
