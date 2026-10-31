import type { AttemptRecord, Confianca } from "../lib/types";
import type { MateriaPrfId } from "../data/prf";

/**
 * Progresso da PRF: só neste aparelho, com chaves próprias (prf:…). A tabela remota de tentativas
 * é da PCPR (a matéria tem chave estrangeira para as matérias dela), então nada daqui sobe para o Supabase.
 */
export type TentativaPrf = AttemptRecord<MateriaPrfId>;

const LS_TENTATIVAS = "prf:attempts";
const LS_ERRADAS = "prf:wrongQueue";
const LS_POR_DIA = "prf:questoesPorDia:v1";
const MAX_TENTATIVAS = 2000;
const MAX_ERRADAS = 60;

/**
 * Respondidas e acertos de cada dia (aaaa-mm-dd), para o totalizador. A lista de tentativas guarda só as
 * 2000 últimas; esta contagem não perde as antigas. Zerar uma matéria não desconta daqui: as questões
 * foram feitas.
 */
type QuestoesPorDia = Record<string, [respondidas: number, acertos: number]>;

function ler<T>(chave: string, padrao: T): T {
  try {
    const raw = localStorage.getItem(chave);
    return raw ? (JSON.parse(raw) as T) : padrao;
  } catch {
    return padrao;
  }
}

function gravar<T>(chave: string, valor: T): void {
  try {
    localStorage.setItem(chave, JSON.stringify(valor));
  } catch {
    // localStorage indisponível (modo privado, quota etc.): o treino segue, só não fica salvo
  }
}

export function getTentativasPrf(): TentativaPrf[] {
  return ler<TentativaPrf[]>(LS_TENTATIVAS, []);
}

export function getErradasPrf(): string[] {
  return ler<string[]>(LS_ERRADAS, []);
}

const dois = (n: number) => String(n).padStart(2, "0");

function somaNoDia(porDia: QuestoesPorDia, t: TentativaPrf) {
  const d = new Date(t.respondidaEm);
  const dia = `${d.getFullYear()}-${dois(d.getMonth() + 1)}-${dois(d.getDate())}`;
  const [n, a] = porDia[dia] ?? [0, 0];
  porDia[dia] = [n + 1, a + (t.acertou ? 1 : 0)];
}

/** Na primeira leitura, monta a contagem com as tentativas que já estavam guardadas. */
function lerPorDia(guardadas: TentativaPrf[]): QuestoesPorDia {
  const salvo = ler<QuestoesPorDia | null>(LS_POR_DIA, null);
  if (salvo && typeof salvo === "object") return salvo;
  const porDia: QuestoesPorDia = {};
  for (const t of guardadas) somaNoDia(porDia, t);
  gravar(LS_POR_DIA, porDia);
  return porDia;
}

/** Questões respondidas e acertos desde a primeira resposta. */
export function totalQuestoesPrf(guardadas: TentativaPrf[]): { respondidas: number; acertos: number } {
  let respondidas = 0;
  let acertos = 0;
  for (const [n, a] of Object.values(lerPorDia(guardadas))) {
    respondidas += n;
    acertos += a;
  }
  return { respondidas, acertos };
}

export function registrarTentativaPrf(tentativa: TentativaPrf): void {
  const tentativas = getTentativasPrf();
  // A contagem é lida antes de a resposta nova entrar na lista; senão, na primeira vez, ela contaria duas vezes.
  const porDia = lerPorDia(tentativas);
  somaNoDia(porDia, tentativa);
  gravar(LS_POR_DIA, porDia);

  tentativas.push(tentativa);
  gravar(LS_TENTATIVAS, tentativas.slice(-MAX_TENTATIVAS));

  const fila = getErradasPrf().filter((id) => id !== tentativa.questionId);
  if (!tentativa.acertou) fila.unshift(tentativa.questionId);
  gravar(LS_ERRADAS, fila.slice(0, MAX_ERRADAS));
}

const chave = (questionId: string, respondidaEm: string) => `${questionId}|${new Date(respondidaEm).getTime()}`;

/** Troca a confiança de uma resposta já gravada (o candidato pode corrigir a marcação depois de ver o gabarito). */
export function atualizarConfiancaPrf(questionId: string, respondidaEm: string, confianca: Confianca | undefined) {
  const tentativas = getTentativasPrf();
  const alvo = chave(questionId, respondidaEm);
  for (let i = tentativas.length - 1; i >= 0; i--) {
    if (chave(tentativas[i].questionId, tentativas[i].respondidaEm) === alvo) {
      tentativas[i] = { ...tentativas[i], confianca };
      gravar(LS_TENTATIVAS, tentativas);
      return;
    }
  }
}

export function zerarMateriaPrf(materia: MateriaPrfId): TentativaPrf[] {
  const restantes = getTentativasPrf().filter((t) => t.materia !== materia);
  gravar(LS_TENTATIVAS, restantes);
  gravar(
    LS_ERRADAS,
    getErradasPrf().filter((id) => !id.startsWith(`prf-${materia}-`)),
  );
  return restantes;
}
