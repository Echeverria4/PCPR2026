import { montarBanco, type DadosCursoCompleto } from "../tipos";
import { AULAS_RLM } from "./rlm";
import { AULAS_PT } from "./pt";

/** Cada matéria entra aqui quando o lote dela fica pronto. */
export const DADOS: DadosCursoCompleto = {
  banco: montarBanco("pol", { pt: AULAS_PT, rlm: AULAS_RLM }),
  semQuestoes: ["carreira", "bizus", "trilha", "ebooks", "mentoria", "pt-15"],
  faixa: [
    { forte: "Sem edital", texto: "Novo concurso ainda sem edital nem banca definida" },
    { forte: "Nível 4 e 5", texto: "Questões difíceis, no nível da prova de nível superior" },
  ],
};
