import { supabase, isSupabaseConfigured } from "./supabase";
import type {
  AttemptRecord,
  Confianca,
  ProvaRealResultado,
  SimuladoAtivo,
  SimuladoResultado,
  SubjectId,
  SubjectStats,
} from "./types";

const LS_ATTEMPTS = "pcpr:attempts";
const LS_WRONG = "pcpr:wrongQueue";
const LS_PROVAS_REAIS = "pcpr:provasReais";
const LS_SIMULADO_ATIVO = "pcpr:simuladoAtivo";
const LS_SIMULADOS = "pcpr:simulados";
const LS_RETA_CHECKS = "pcpr:retaFinalChecks";
const MAX_ATTEMPTS_LOCAL = 2000;
const MAX_WRONG_QUEUE = 60;
const MAX_SIMULADOS = 12;

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
  await recordAttempts([attempt]);
}

/** Grava várias respostas de uma vez (o simulado modo prova entrega as 100 juntas). */
export async function recordAttempts(lista: AttemptRecord[]): Promise<void> {
  if (lista.length === 0) return;
  const attempts = getLocalAttempts();
  attempts.push(...lista);
  writeLocal(LS_ATTEMPTS, attempts.slice(-MAX_ATTEMPTS_LOCAL));

  for (const attempt of lista) {
    if (attempt.acertou) {
      removeFromWrongQueue(attempt.questionId);
    } else {
      pushWrongQueue(attempt.questionId);
    }
  }

  if (!isSupabaseConfigured || !supabase) return;

  const userId = await getCurrentUserId();
  if (!userId) return;

  // A tabela remota não tem coluna de confiança: ela fica só no aparelho (ver syncRemoteAttempts).
  await supabase.from("attempts").insert(
    lista.map((attempt) => ({
      user_id: userId,
      question_id: attempt.questionId,
      materia: attempt.materia,
      acertou: attempt.acertou,
      respondida_em: attempt.respondidaEm,
      tempo_ms: attempt.tempoMs ?? null,
      modo: attempt.modo ?? null,
    })),
  );
}

const chaveAttempt = (questionId: string, respondidaEm: string) =>
  `${questionId}|${new Date(respondidaEm).getTime()}`;

/** Troca a confiança de uma resposta já gravada (o candidato pode corrigir a marcação depois de ver o gabarito). */
export function atualizarConfianca(questionId: string, respondidaEm: string, confianca: Confianca | undefined) {
  const attempts = getLocalAttempts();
  const alvo = chaveAttempt(questionId, respondidaEm);
  for (let i = attempts.length - 1; i >= 0; i--) {
    if (chaveAttempt(attempts[i].questionId, attempts[i].respondidaEm) === alvo) {
      attempts[i] = { ...attempts[i], confianca };
      writeLocal(LS_ATTEMPTS, attempts);
      return;
    }
  }
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

  const confiancaLocal = new Map(
    getLocalAttempts()
      .filter((a) => a.confianca)
      .map((a) => [chaveAttempt(a.questionId, a.respondidaEm), a.confianca]),
  );
  const remote: AttemptRecord[] = data.map((row) => ({
    questionId: row.question_id,
    materia: row.materia as SubjectId,
    acertou: row.acertou,
    respondidaEm: row.respondida_em,
    tempoMs: row.tempo_ms ?? undefined,
    modo: (row.modo as AttemptRecord["modo"]) ?? undefined,
    confianca: confiancaLocal.get(chaveAttempt(row.question_id, row.respondida_em)),
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

export function getSimuladoAtivo(): SimuladoAtivo | null {
  return readLocal<SimuladoAtivo | null>(LS_SIMULADO_ATIVO, null);
}

export function salvarSimuladoAtivo(simulado: SimuladoAtivo | null): void {
  if (simulado) writeLocal(LS_SIMULADO_ATIVO, simulado);
  else {
    try {
      localStorage.removeItem(LS_SIMULADO_ATIVO);
    } catch {
      // sem localStorage não há simulado salvo para apagar
    }
  }
}

/** Simulados modo prova já entregues, do mais recente para o mais antigo. */
export function getSimulados(): SimuladoResultado[] {
  return readLocal<SimuladoResultado[]>(LS_SIMULADOS, []);
}

export function salvarSimuladoResultado(resultado: SimuladoResultado): SimuladoResultado[] {
  const lista = [resultado, ...getSimulados().filter((r) => r.id !== resultado.id)].slice(0, MAX_SIMULADOS);
  writeLocal(LS_SIMULADOS, lista);
  return lista;
}

/** Itens do plano da reta final já cumpridos (chave = id do item). */
export function getRetaFinalChecks(): Record<string, boolean> {
  return readLocal<Record<string, boolean>>(LS_RETA_CHECKS, {});
}

export function salvarRetaFinalChecks(checks: Record<string, boolean>): void {
  writeLocal(LS_RETA_CHECKS, checks);
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
