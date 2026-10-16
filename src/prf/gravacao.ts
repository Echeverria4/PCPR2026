import type { MateriaPrfId } from "../data/prf";
import type { GravacaoQuiz } from "../components/Quiz";
import { atualizarConfiancaPrf, registrarTentativaPrf } from "./armazenamento";
import { IDS_PF2025_FORA_DO_PROGRAMA } from "./questoes/provaPf2025";

/**
 * Gravação das tentativas do quiz da PRF. Fica fora de armazenamento.ts porque o card da central importa
 * aquele módulo, e o banco da PF 2025 só deve ser carregado junto com o curso (no pacote sob demanda).
 */
export const GRAVACAO_PRF: GravacaoQuiz<MateriaPrfId> = {
  // Os itens da PF 2025 fora do programa da PRF só aparecem na prova completa: não entram no desempenho nem na revisão.
  registrar: (tentativa) => {
    if (!IDS_PF2025_FORA_DO_PROGRAMA.has(tentativa.questionId)) registrarTentativaPrf(tentativa);
  },
  atualizarConfianca: atualizarConfiancaPrf,
};
