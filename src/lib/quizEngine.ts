import type { AttemptRecord, Question, QuizMode, SubjectId, TreinoEmAndamento } from "./types";
import { BANCO, QUESTOES_POR_MATERIA } from "../data/questions";
import { PROVA_MIX } from "../data/subjects";
import { getWrongQueue } from "./storage";

export function shuffle<T>(arr: T[]): T[] {
  const copia = [...arr];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/**
 * Embaralha a ordem das 5 alternativas de uma questão (e remapeia o índice
 * da correta) sem tocar no banco original. Sem isso, o gabarito do banco
 * fica concentrado nas mesmas letras (ex.: maioria em B), criando um padrão
 * explorável em vez de exigir conhecimento real do conteúdo.
 */
export function embaralharAlternativas<M extends string>(q: Question<M>): Question<M> {
  const indices = shuffle([0, 1, 2, 3, 4]);
  const alternativas = indices.map((i) => q.alternativas[i]) as Question["alternativas"];
  const correta = indices.indexOf(q.correta) as Question["correta"];
  return { ...q, alternativas, correta };
}

export function buildSessaoMateria(materia: SubjectId, quantidade = 10): Question[] {
  const banco = QUESTOES_POR_MATERIA[materia] ?? [];
  return shuffle(banco)
    .slice(0, Math.min(quantidade, banco.length))
    .map(embaralharAlternativas);
}

/**
 * Monta um simulado tentando respeitar a proporção oficial de questões por matéria
 * (PROVA_MIX). Quando o banco de uma matéria ainda não tem questões suficientes,
 * usa todas as disponíveis — a prova fica menor que 100 até o banco crescer.
 */
export function buildSessaoProva(): Question[] {
  const questoes: Question[] = [];
  (Object.keys(PROVA_MIX) as SubjectId[]).forEach((materia) => {
    const banco = QUESTOES_POR_MATERIA[materia] ?? [];
    const alvo = PROVA_MIX[materia];
    questoes.push(...shuffle(banco).slice(0, Math.min(alvo, banco.length)));
  });
  return shuffle(questoes).map(embaralharAlternativas);
}

export function buildSessaoRevisao(): Question[] {
  const idsErrados = getWrongQueue();
  const mapa = new Map(BANCO.map((q) => [q.id, q]));
  return idsErrados
    .map((id) => mapa.get(id))
    .filter((q): q is Question => Boolean(q))
    .map(embaralharAlternativas);
}

export function buildSessaoTreinoAlvo(materiaAlvo: SubjectId, quantidade = 12): Question[] {
  return buildSessaoMateria(materiaAlvo, quantidade);
}

export const ROTULO_MODO: Record<QuizMode, string> = {
  materia: "Treino por matéria",
  prova: "Simulado completo",
  revisao: "Revisão dos errados",
  "treino-alvo": "Foco recomendado",
  simulado: "Simulado modo prova",
  reforco: "Reforço dirigido",
};

const QUESTAO_POR_ID = new Map(BANCO.map((q) => [q.id, q]));

/** Vaga do treino em andamento: uma por modo e matéria. */
export function chaveTreino(mode: QuizMode, materia?: SubjectId): string {
  return `${mode}:${materia ?? "geral"}`;
}

/**
 * Remonta um treino salvo. As já respondidas vêm antes (só contam no "Questão N de M"; não
 * aparecem de novo) e as que faltam seguem na ordem sorteada. Questão que saiu do banco é ignorada.
 */
export function retomarTreino(treino: TreinoEmAndamento): { questions: Question[]; respostas: AttemptRecord[] } {
  const respostas = treino.respostas.filter((r) => QUESTAO_POR_ID.has(r.questionId));
  const feitas = new Set(respostas.map((r) => r.questionId));
  const restantes = treino.ids.filter((id) => !feitas.has(id) && QUESTAO_POR_ID.has(id));
  return {
    questions: [
      ...respostas.map((r) => QUESTAO_POR_ID.get(r.questionId)!),
      ...restantes.map((id) => embaralharAlternativas(QUESTAO_POR_ID.get(id)!)),
    ],
    respostas,
  };
}

/** Modos de treino da matéria que contam para "as que faltam hoje". */
const MODOS_DA_MATERIA: QuizMode[] = ["materia", "treino-alvo"];

/** Respostas de hoje (dia do aparelho) no treino da matéria: a última de cada questão, em ordem. */
export function respostasDeHoje(attempts: AttemptRecord[], materia: SubjectId, agora = new Date()): AttemptRecord[] {
  const hoje = agora.toDateString();
  const ultima = new Map<string, AttemptRecord>();
  for (const a of attempts) {
    if (a.materia !== materia || !a.modo || !MODOS_DA_MATERIA.includes(a.modo)) continue;
    if (!QUESTAO_POR_ID.has(a.questionId) || new Date(a.respondidaEm).toDateString() !== hoje) continue;
    ultima.delete(a.questionId);
    ultima.set(a.questionId, a);
  }
  return [...ultima.values()];
}

/**
 * Continua o banco inteiro da matéria a partir do que já foi respondido hoje no treino:
 * recupera um treino que se perdeu antes de existir o salvamento automático.
 */
export function treinoRestantesHoje(attempts: AttemptRecord[], materia: SubjectId): TreinoEmAndamento {
  const respostas = respostasDeHoje(attempts, materia);
  const feitas = new Set(respostas.map((r) => r.questionId));
  const restantes = shuffle((QUESTOES_POR_MATERIA[materia] ?? []).filter((q) => !feitas.has(q.id)));
  const agora = new Date().toISOString();
  return {
    chave: chaveTreino("materia", materia),
    mode: "materia",
    materia,
    iniciadoEm: respostas[0]?.respondidaEm ?? agora,
    atualizadoEm: agora,
    ids: [...feitas, ...restantes.map((q) => q.id)],
    respostas,
  };
}
