import { montarBanco, type DadosCursoCompleto } from "../tipos";
import { AULAS_PT } from "./pt";
import { AULAS_RLM } from "./rlm";
import { AULAS_INFO } from "./info";
import { AULAS_CON } from "./constitucional";

/**
 * Curso completo da PMPR Soldado (pedido de 23/11/26): cada PDF do Drive vira uma aula com resumo e questões no
 * estilo da última banca (IBFC, A a E). Português, RLM, Informática, Constitucional e Direitos Humanos ficam sem
 * Paraná, para servirem também à PRF Policial. Cada matéria entra aqui quando o lote dela fica pronto.
 */
export const DADOS: DadosCursoCompleto = {
  banco: montarBanco("pm", { pt: AULAS_PT, rlm: AULAS_RLM, info: AULAS_INFO, con: AULAS_CON }),
  semQuestoes: ["discursiva", "intensivo"],
  faixa: [
    { forte: "Edital 2025", texto: "Último concurso: IBFC, 60 questões de A a E e redação" },
    { forte: "Nível 4 e 5", texto: "Questões difíceis, feitas a partir dos PDFs do curso" },
  ],
};
