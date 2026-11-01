import type { MateriaPrfId, QuestaoPrf } from "../../data/prf";
import { embaralharAlternativas, shuffle } from "../../lib/quizEngine";
import type { TentativaPrf } from "../armazenamento";
import { BANCO_PRF } from "../questoes";
import { ultimaRespostaPrf } from "../sessoes";
import type { AulaDrive } from "./aulasDrive";

/**
 * Fixação no fim de cada aula: 5 questões sorteadas só entre os assuntos da própria aula (nunca de outra
 * matéria nem de outro assunto da mesma matéria). O Nivelamento só apresenta as matérias: não tem questões.
 */
export const QUESTOES_POR_AULA = 5;

/** As aulas do grupo "niv" (Nivelamento) têm id "niv-NN". */
export const doNivelamento = (aula: AulaDrive) => aula.id.startsWith("niv-");

export function questoesDaAula(materia: MateriaPrfId, topicos: string[]): QuestaoPrf[] {
  return BANCO_PRF.filter((q) => q.materia === materia && topicos.includes(q.topico));
}

export interface FixacaoAula {
  /** Questões do banco nos assuntos da aula. */
  disponiveis: number;
  /** Quantas entram na fixação (0 = aula sem questões). */
  quantidade: number;
}

export function fixacaoDaAula(aula: AulaDrive): FixacaoAula {
  if (doNivelamento(aula)) return { disponiveis: 0, quantidade: 0 };
  const disponiveis = questoesDaAula(aula.materia, aula.topicos).length;
  return { disponiveis, quantidade: Math.min(QUESTOES_POR_AULA, disponiveis) };
}

/** Sorteio dentro dos assuntos da aula: primeiro as nunca respondidas, depois as erradas na última vez, por fim as acertadas. */
export function sessaoFixacao(
  materia: MateriaPrfId,
  topicos: string[],
  quantidade: number,
  tentativas: TentativaPrf[],
): QuestaoPrf[] {
  const ultima = ultimaRespostaPrf(tentativas);
  const ordem = (q: QuestaoPrf) => {
    const u = ultima.get(q.id);
    return u === undefined ? 0 : u ? 2 : 1;
  };
  const lista = shuffle(questoesDaAula(materia, topicos)).sort((a, b) => ordem(a) - ordem(b));
  return shuffle(lista.slice(0, quantidade)).map(embaralharAlternativas);
}
