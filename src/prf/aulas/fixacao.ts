import { PRF_MATERIA_MAP, PRF_MATERIAS, type MateriaPrfId, type QuestaoPrf } from "../../data/prf";
import { embaralharAlternativas, shuffle } from "../../lib/quizEngine";
import type { TentativaPrf } from "../armazenamento";
import { BANCO_PRF } from "../questoes";
import { ultimaRespostaPrf } from "../sessoes";

/**
 * Fixação no fim de cada aula, com as questões do banco nos assuntos da aula. A quantidade segue o peso:
 * os pontos da matéria na prova de 2014 (questões × peso) vezes a fatia que os assuntos da aula ocupam na
 * matéria. A fatia é metade pelas questões de provas reais do banco e metade pelo banco todo (a parte do
 * banco segura as matérias com poucas questões de prova, como Arquivologia).
 */
export const PONTOS_PROVA = PRF_MATERIAS.reduce((s, m) => s + m.questoes * m.peso, 0);
const MINIMO = 4;
const MAXIMO = 12;

const TOTAIS = new Map<MateriaPrfId, { banco: number; prova: number }>();
for (const q of BANCO_PRF) {
  const t = TOTAIS.get(q.materia) ?? { banco: 0, prova: 0 };
  t.banco += 1;
  if (q.origem === "prova") t.prova += 1;
  TOTAIS.set(q.materia, t);
}

export interface PesoFixacao {
  /** Questões do banco nos assuntos da aula. */
  disponiveis: number;
  /** Quantas entram na fixação (0 = aula sem questões no banco). */
  quantidade: number;
  /** Pontos da matéria na prova de 2014. */
  pontosMateria: number;
  /** Fatia dos assuntos da aula dentro da matéria (0 a 1). */
  fatia: number;
}

export function questoesDaAula(materia: MateriaPrfId, topicos: string[]): QuestaoPrf[] {
  return BANCO_PRF.filter((q) => q.materia === materia && topicos.includes(q.topico));
}

export function pesoFixacao(materia: MateriaPrfId, topicos: string[]): PesoFixacao {
  const qs = questoesDaAula(materia, topicos);
  const total = TOTAIS.get(materia) ?? { banco: 0, prova: 0 };
  const deProva = qs.filter((q) => q.origem === "prova").length;
  const fatiaBanco = total.banco > 0 ? qs.length / total.banco : 0;
  const fatia = total.prova > 0 ? (fatiaBanco + deProva / total.prova) / 2 : fatiaBanco;
  const m = PRF_MATERIA_MAP[materia];
  const pontosMateria = m.questoes * m.peso;
  // 4 de base + 2,5 por ponto que o conteúdo da aula vale na prova, até 12; nunca mais do que o banco tem.
  const alvo = Math.min(MAXIMO, Math.max(MINIMO, Math.round(MINIMO + 2.5 * pontosMateria * fatia)));
  return { disponiveis: qs.length, quantidade: Math.min(alvo, qs.length), pontosMateria, fatia };
}

/** Primeiro as que nunca foram respondidas, depois as erradas na última vez, por fim as acertadas. */
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
