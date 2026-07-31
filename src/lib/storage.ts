import { supabase, isSupabaseConfigured } from "./supabase";
import type { AttemptRecord, ProvaRealResultado, SubjectId, SubjectStats } from "./types";

const LS_ATTEMPTS = "pcpr:attempts";
const LS_WRONG = "pcpr:wrongQueue";
const LS_PROVAS_REAIS = "pcpr:provasReais";
const MAX_ATTEMPTS_LOCAL = 2000;
const MAX_WRONG_QUEUE = 60;

function readLocal<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeLocal<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage indisponível (modo privado, quota etc.) — falha silenciosa, sem sync
  }
}

export async function getCurrentUserId(): Promise<string | null> {
  if (!supabase) return null;
  const { data } = await supabase.auth.getUser();
  return data.user?.id ?? null;
}

export function getLocalAttempts(): AttemptRecord[] {
  return readLocal<AttemptRecord[]>(LS_ATTEMPTS, []);
}

export function getWrongQueue(): string[] {
  return readLocal<string[]>(LS_WRONG, []);
}

function pushWrongQueue(questionId: string) {
  const queue = getWrongQueue().filter((id) => id !== questionId);
  queue.unshift(questionId);
  writeLocal(LS_WRONG, queue.slice(0, MAX_WRONG_QUEUE));
}

export function removeFromWrongQueue(questionId: string) {
  writeLocal(
    LS_WRONG,
    getWrongQueue().filter((id) => id !== questionId),
  );
}

export async function recordAttempt(attempt: AttemptRecord): Promise<void> {
  const attempts = getLocalAttempts();
  attempts.push(attempt);
  writeLocal(LS_ATTEMPTS, attempts.slice(-MAX_ATTEMPTS_LOCAL));

  if (attempt.acertou) {
    removeFromWrongQueue(attempt.questionId);
  } else {
    pushWrongQueue(attempt.questionId);
  }

  if (!isSupabaseConfigured || !supabase) return;

  const userId = await getCurrentUserId();
  if (!userId) return;

  await supabase.from("attempts").insert({
    user_id: userId,
    question_id: attempt.questionId,
    materia: attempt.materia,
    acertou: attempt.acertou,
    respondida_em: attempt.respondidaEm,
    tempo_ms: attempt.tempoMs ?? null,
    modo: attempt.modo ?? null,
  });
}

export async function syncRemoteAttempts(): Promise<AttemptRecord[]> {
  if (!isSupabaseConfigured || !supabase) return getLocalAttempts();

  const userId = await getCurrentUserId();
  if (!userId) return getLocalAttempts();

  const { data, error } = await supabase
    .from("attempts")
    .select("question_id, materia, acertou, respondida_em, tempo_ms, modo")
    .eq("user_id", userId)
    .order("respondida_em", { ascending: true })
    .limit(MAX_ATTEMPTS_LOCAL);

  if (error || !data) return getLocalAttempts();

  const remote: AttemptRecord[] = data.map((row) => ({
    questionId: row.question_id,
    materia: row.materia as SubjectId,
    acertou: row.acertou,
    respondidaEm: row.respondida_em,
    tempoMs: row.tempo_ms ?? undefined,
    modo: (row.modo as AttemptRecord["modo"]) ?? undefined,
  }));

  writeLocal(LS_ATTEMPTS, remote.slice(-MAX_ATTEMPTS_LOCAL));
  return remote;
}

export function computeStats(attempts: AttemptRecord[]): SubjectStats[] {
  const bySubject = new Map<SubjectId, { respondidas: number; acertos: number }>();

  // Tentativas feitas na "Revisão dos errados" partem de questões que já erramos antes —
  // contá-las no % de acerto infla artificialmente o desempenho da matéria, já que o
  // acerto ali é só "acertar de segunda vez", não domínio real do conteúdo.
  const paraStats = attempts.filter((a) => a.modo !== "revisao");

  for (const a of paraStats) {
    const cur = bySubject.get(a.materia) ?? { respondidas: 0, acertos: 0 };
    cur.respondidas += 1;
    if (a.acertou) cur.acertos += 1;
    bySubject.set(a.materia, cur);
  }

  return Array.from(bySubject.entries()).map(([materia, v]) => ({
    materia,
    respondidas: v.respondidas,
    acertos: v.acertos,
    acuracia: v.respondidas > 0 ? v.acertos / v.respondidas : 0,
  }));
}

export function getProvasReaisResultados(): Record<string, ProvaRealResultado> {
  return readLocal<Record<string, ProvaRealResultado>>(LS_PROVAS_REAIS, {});
}

export function salvarProvaRealResultado(
  provaId: string,
  resultado: ProvaRealResultado,
): Record<string, ProvaRealResultado> {
  const atualizado = { ...getProvasReaisResultados(), [provaId]: resultado };
  writeLocal(LS_PROVAS_REAIS, atualizado);
  return atualizado;
}

export async function resetAttemptsMateria(materia: SubjectId): Promise<AttemptRecord[]> {
  const restantes = getLocalAttempts().filter((a) => a.materia !== materia);
  writeLocal(LS_ATTEMPTS, restantes);
  writeLocal(
    LS_WRONG,
    getWrongQueue().filter((id) => !id.startsWith(`${materia}-`)),
  );

  if (isSupabaseConfigured && supabase) {
    const userId = await getCurrentUserId();
    if (userId) {
      await supabase.from("attempts").delete().eq("user_id", userId).eq("materia", materia);
    }
  }

  return restantes;
}

export function focoRecomendado(
  stats: SubjectStats[],
  pesos: Record<SubjectId, number>,
  minRespondidas = 4,
): SubjectStats[] {
  return stats
    .filter((s) => s.respondidas >= minRespondidas)
    .map((s) => ({
      ...s,
      score: (1 - s.acuracia) * Math.sqrt(pesos[s.materia] ?? 1),
    }))
    .sort((a, b) => (b as any).score - (a as any).score);
}
