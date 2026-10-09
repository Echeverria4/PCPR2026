import { embaralharAlternativas, shuffle } from "../lib/quizEngine";
import { PRF_MATERIAS, type MateriaPrfId, type QuestaoPrf } from "../data/prf";
import { BANCO_PRF, QUESTOES_PRF_POR_MATERIA } from "./questoes";
import { getErradasPrf } from "./armazenamento";

export function sessaoMateriaPrf(materia: MateriaPrfId, quantidade = 10): QuestaoPrf[] {
  const banco = QUESTOES_PRF_POR_MATERIA[materia] ?? [];
  return shuffle(banco).slice(0, quantidade).map(embaralharAlternativas);
}

/**
 * Simulado na proporção da prova de 2014 (12 de Português e 6 de cada outra matéria).
 * Se o banco de uma matéria ainda tiver menos questões, entram todas as que existem.
 */
export function sessaoProvaPrf(): QuestaoPrf[] {
  const questoes = PRF_MATERIAS.flatMap((m) => shuffle(QUESTOES_PRF_POR_MATERIA[m.id] ?? []).slice(0, m.questoes));
  return shuffle(questoes).map(embaralharAlternativas);
}

export function sessaoRevisaoPrf(): QuestaoPrf[] {
  const mapa = new Map(BANCO_PRF.map((q) => [q.id, q]));
  return getErradasPrf()
    .map((id) => mapa.get(id))
    .filter((q): q is QuestaoPrf => Boolean(q))
    .map(embaralharAlternativas);
}

export function sessaoFocoPrf(materia: MateriaPrfId): QuestaoPrf[] {
  return sessaoMateriaPrf(materia, 12);
}
