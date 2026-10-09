import type { AttemptRecord, Confianca } from "../lib/types";
import type { MateriaPrfId } from "../data/prf";
import type { GravacaoQuiz } from "../components/Quiz";

/**
 * Progresso da PRF: só neste aparelho, com chaves próprias (prf:…). A tabela remota de tentativas
 * é da PCPR (a matéria tem chave estrangeira para as matérias dela), então nada daqui sobe para o Supabase.
 */
export type TentativaPrf = AttemptRecord<MateriaPrfId>;

const LS_TENTATIVAS = "prf:attempts";
const LS_ERRADAS = "prf:wrongQueue";
const MAX_TENTATIVAS = 2000;
const MAX_ERRADAS = 60;

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

export function registrarTentativaPrf(tentativa: TentativaPrf): void {
  const tentativas = getTentativasPrf();
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

export const GRAVACAO_PRF: GravacaoQuiz<MateriaPrfId> = {
  registrar: registrarTentativaPrf,
  atualizarConfianca: atualizarConfiancaPrf,
};
