import type { GravacaoQuiz } from "../../../components/Quiz";
import type { Confianca } from "../../../lib/types";
import type { TentativaCurso } from "./tipos";

/**
 * Progresso de um curso completo: só neste aparelho, nas chaves curso:<id>:…, como o resto do curso. Não importa o
 * banco, porque o cartão da central lê daqui sem baixar as questões.
 */
const MAX_TENTATIVAS = 2000;
const MAX_ERRADAS = 60;

/** Respondidas e acertos de cada dia (aaaa-mm-dd): não perde as antigas quando a lista de tentativas passa do limite. */
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

const dois = (n: number) => String(n).padStart(2, "0");

function somaNoDia(porDia: QuestoesPorDia, t: TentativaCurso) {
  const d = new Date(t.respondidaEm);
  const dia = `${d.getFullYear()}-${dois(d.getMonth() + 1)}-${dois(d.getDate())}`;
  const [n, a] = porDia[dia] ?? [0, 0];
  porDia[dia] = [n + 1, a + (t.acertou ? 1 : 0)];
}

const marca = (questionId: string, respondidaEm: string) => `${questionId}|${new Date(respondidaEm).getTime()}`;

export interface ProgressoCurso {
  tentativas: () => TentativaCurso[];
  erradas: () => string[];
  /** Questões respondidas e acertos desde a primeira resposta. */
  total: () => { respondidas: number; acertos: number };
  /** Apaga as respostas da matéria e tira as questões dela da fila dos errados. */
  zerarMateria: (materia: string, idsDaMateria: Set<string>) => TentativaCurso[];
  gravacao: GravacaoQuiz<string>;
}

export function progressoDoCurso(curso: string): ProgressoCurso {
  const lsTentativas = `curso:${curso}:attempts:v1`;
  const lsErradas = `curso:${curso}:wrong:v1`;
  const lsPorDia = `curso:${curso}:questoesPorDia:v1`;

  const tentativas = () => ler<TentativaCurso[]>(lsTentativas, []);
  const erradas = () => ler<string[]>(lsErradas, []);
  const porDia = () => ler<QuestoesPorDia>(lsPorDia, {});

  function registrar(tentativa: TentativaCurso) {
    const contagem = porDia();
    somaNoDia(contagem, tentativa);
    gravar(lsPorDia, contagem);

    const lista = tentativas();
    lista.push(tentativa);
    gravar(lsTentativas, lista.slice(-MAX_TENTATIVAS));

    const fila = erradas().filter((id) => id !== tentativa.questionId);
    if (!tentativa.acertou) fila.unshift(tentativa.questionId);
    gravar(lsErradas, fila.slice(0, MAX_ERRADAS));
  }

  function atualizarConfianca(questionId: string, respondidaEm: string, confianca: Confianca | undefined) {
    const lista = tentativas();
    const alvo = marca(questionId, respondidaEm);
    for (let i = lista.length - 1; i >= 0; i--) {
      if (marca(lista[i].questionId, lista[i].respondidaEm) === alvo) {
        lista[i] = { ...lista[i], confianca };
        gravar(lsTentativas, lista);
        return;
      }
    }
  }

  return {
    tentativas,
    erradas,
    total() {
      let respondidas = 0;
      let acertos = 0;
      for (const [n, a] of Object.values(porDia())) {
        respondidas += n;
        acertos += a;
      }
      return { respondidas, acertos };
    },
    zerarMateria(materia, idsDaMateria) {
      const restantes = tentativas().filter((t) => t.materia !== materia);
      gravar(lsTentativas, restantes);
      gravar(
        lsErradas,
        erradas().filter((id) => !idsDaMateria.has(id)),
      );
      return restantes;
    },
    gravacao: { registrar, atualizarConfianca },
  };
}
