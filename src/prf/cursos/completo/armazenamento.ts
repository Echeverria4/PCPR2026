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

/**
 * Limpeza única, pedida em 14/11/26: zera as respostas da PRF Policial dadas até 14h desse dia (eram só duas).
 * Roda uma vez em cada aparelho; respostas depois do corte ficam. Tempo de estudo e blocos vistos não mudam.
 */
export function limpezasUnicas(): void {
  const curso = "prf-policial";
  const feito = `curso:${curso}:zerado:2026-11-14`;
  const corte = Date.parse("2026-11-14T14:00:00-03:00");
  try {
    if (localStorage.getItem(feito)) return;
    const lsTentativas = `curso:${curso}:attempts:v1`;
    const lsErradas = `curso:${curso}:wrong:v1`;
    const lsPorDia = `curso:${curso}:questoesPorDia:v1`;
    const todas = ler<TentativaCurso[]>(lsTentativas, []);
    const lista = Array.isArray(todas) ? todas : [];
    const antes = (t: TentativaCurso) => !(Date.parse(t.respondidaEm) >= corte);
    const ficam = lista.filter((t) => !antes(t));
    const porDia: QuestoesPorDia = {};
    for (const t of ficam) somaNoDia(porDia, t);
    const ids = new Set(ficam.map((t) => t.questionId));
    const fila = ler<string[]>(lsErradas, []);
    gravar(lsTentativas, ficam);
    gravar(lsPorDia, porDia);
    gravar(lsErradas, Array.isArray(fila) ? fila.filter((id) => ids.has(id)) : []);
    localStorage.setItem(feito, "1");
  } catch {
    // sem localStorage não há o que zerar
  }
}

/**
 * Limpeza única, pedida em 21/11/26: zera as respostas de Legislação de Trânsito da PRF Policial dadas até o corte,
 * junto com a fila dos errados e as repetidas da matéria. A contagem por dia (cartão do curso e Semana) é refeita
 * com as respostas que ficam. Roda uma vez em cada aparelho; as outras matérias não mudam.
 */
export function zerarTransitoPrfPolicial(): void {
  const curso = "prf-policial";
  const feito = `curso:${curso}:zerado-transito:2026-11-21`;
  const corte = Date.parse("2026-11-21T18:30:00-03:00");
  try {
    if (localStorage.getItem(feito)) return;
    const lsTentativas = `curso:${curso}:attempts:v1`;
    const lsRepetidas = `curso:${curso}:repetidas:v1`;
    const lsErradas = `curso:${curso}:wrong:v1`;
    const lsPorDia = `curso:${curso}:questoesPorDia:v1`;
    const sai = (t: TentativaCurso) => t.materia === "transito" && !(Date.parse(t.respondidaEm) >= corte);
    const lista = ler<TentativaCurso[]>(lsTentativas, []);
    const tentativas = Array.isArray(lista) ? lista : [];
    const outras = ler<TentativaCurso[]>(lsRepetidas, []);
    const repetidas = Array.isArray(outras) ? outras : [];
    const idsQueSaem = new Set([...tentativas, ...repetidas].filter(sai).map((t) => t.questionId));
    const ficam = tentativas.filter((t) => !sai(t));
    if (tentativas.length < MAX_TENTATIVAS) {
      // A lista ainda tem todas as primeiras respostas: a contagem por dia sai exata dela.
      const porDia: QuestoesPorDia = {};
      for (const t of ficam) somaNoDia(porDia, t);
      gravar(lsPorDia, porDia);
    } else {
      descontarDoDia(lsPorDia, tentativas.filter(sai));
    }
    gravar(lsTentativas, ficam);
    gravar(
      lsRepetidas,
      repetidas.filter((t) => !sai(t)),
    );
    const fila = ler<string[]>(lsErradas, []);
    gravar(lsErradas, Array.isArray(fila) ? fila.filter((id) => !idsQueSaem.has(id)) : []);
    localStorage.setItem(feito, "1");
  } catch {
    // sem localStorage não há o que zerar
  }
}

/** Tira da contagem por dia as primeiras respostas apagadas. */
function descontarDoDia(lsPorDia: string, apagadas: TentativaCurso[]) {
  if (apagadas.length === 0) return;
  const porDia = ler<QuestoesPorDia>(lsPorDia, {});
  for (const t of apagadas) {
    const dia = diaDe(t);
    const [n, a] = porDia[dia] ?? [0, 0];
    porDia[dia] = [Math.max(0, n - 1), Math.max(0, a - (t.acertou ? 1 : 0))];
  }
  gravar(lsPorDia, porDia);
}

function diaDe(t: TentativaCurso): string {
  const d = new Date(t.respondidaEm);
  return `${d.getFullYear()}-${dois(d.getMonth() + 1)}-${dois(d.getDate())}`;
}

/**
 * Separação única, pedida em 20/11/26: só a primeira resposta de cada questão conta na quantidade e no percentual.
 * As respostas seguintes à mesma questão saem da lista de tentativas, vão para a lista das repetidas e são
 * descontadas da contagem por dia. Roda uma vez em cada aparelho, em todos os cursos que já têm respostas.
 */
export function separarRepetidas(curso: string): void {
  const feito = `curso:${curso}:repetidas-separadas:2026-11-20`;
  try {
    if (localStorage.getItem(feito)) return;
    const lsTentativas = `curso:${curso}:attempts:v1`;
    const lsRepetidas = `curso:${curso}:repetidas:v1`;
    const lsPorDia = `curso:${curso}:questoesPorDia:v1`;
    const todas = ler<TentativaCurso[]>(lsTentativas, []);
    const lista = Array.isArray(todas) ? todas : [];
    const vistas = new Set<string>();
    const primeiras: TentativaCurso[] = [];
    const repetidas: TentativaCurso[] = [];
    for (const t of lista) {
      if (vistas.has(t.questionId)) repetidas.push(t);
      else {
        vistas.add(t.questionId);
        primeiras.push(t);
      }
    }
    if (repetidas.length > 0) {
      const porDia = ler<QuestoesPorDia>(lsPorDia, {});
      for (const t of repetidas) {
        const dia = diaDe(t);
        const [n, a] = porDia[dia] ?? [0, 0];
        porDia[dia] = [Math.max(0, n - 1), Math.max(0, a - (t.acertou ? 1 : 0))];
      }
      const antigas = ler<TentativaCurso[]>(lsRepetidas, []);
      gravar(lsTentativas, primeiras);
      gravar(lsPorDia, porDia);
      gravar(lsRepetidas, [...(Array.isArray(antigas) ? antigas : []), ...repetidas].slice(-MAX_TENTATIVAS));
    }
    localStorage.setItem(feito, "1");
  } catch {
    // sem localStorage não há o que separar
  }
}

export interface ProgressoCurso {
  /** A primeira resposta de cada questão: é o que entra na quantidade e no percentual. */
  tentativas: () => TentativaCurso[];
  /** Primeiras e repetidas juntas, em ordem de tempo: serve para saber a última resposta ao sortear e filtrar. */
  todasAsRespostas: () => TentativaCurso[];
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
  const lsRepetidas = `curso:${curso}:repetidas:v1`;

  const tentativas = () => ler<TentativaCurso[]>(lsTentativas, []);
  const repetidas = () => ler<TentativaCurso[]>(lsRepetidas, []);
  const erradas = () => ler<string[]>(lsErradas, []);
  const porDia = () => ler<QuestoesPorDia>(lsPorDia, {});

  function registrar(tentativa: TentativaCurso) {
    const lista = tentativas();
    if (lista.some((t) => t.questionId === tentativa.questionId)) {
      // Questão já respondida antes: fica guardada à parte e não entra na quantidade nem no percentual.
      const outras = repetidas();
      outras.push(tentativa);
      gravar(lsRepetidas, outras.slice(-MAX_TENTATIVAS));
    } else {
      const contagem = porDia();
      somaNoDia(contagem, tentativa);
      gravar(lsPorDia, contagem);
      lista.push(tentativa);
      gravar(lsTentativas, lista.slice(-MAX_TENTATIVAS));
    }

    // A fila dos errados segue a última resposta: acertar de novo tira a questão dela.
    const fila = erradas().filter((id) => id !== tentativa.questionId);
    if (!tentativa.acertou) fila.unshift(tentativa.questionId);
    gravar(lsErradas, fila.slice(0, MAX_ERRADAS));
  }

  function atualizarConfianca(questionId: string, respondidaEm: string, confianca: Confianca | undefined) {
    const alvo = marca(questionId, respondidaEm);
    for (const [chave, lista] of [
      [lsTentativas, tentativas()],
      [lsRepetidas, repetidas()],
    ] as const) {
      for (let i = lista.length - 1; i >= 0; i--) {
        if (marca(lista[i].questionId, lista[i].respondidaEm) === alvo) {
          lista[i] = { ...lista[i], confianca };
          gravar(chave, lista);
          return;
        }
      }
    }
  }

  return {
    tentativas,
    todasAsRespostas() {
      return [...tentativas(), ...repetidas()].sort((x, y) => Date.parse(x.respondidaEm) - Date.parse(y.respondidaEm));
    },
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
      const lista = tentativas();
      const restantes = lista.filter((t) => t.materia !== materia);
      // O cartão do curso e a Semana somam a contagem por dia: as respostas apagadas saem dela também.
      descontarDoDia(
        lsPorDia,
        lista.filter((t) => t.materia === materia),
      );
      gravar(lsTentativas, restantes);
      gravar(
        lsRepetidas,
        repetidas().filter((t) => t.materia !== materia),
      );
      gravar(
        lsErradas,
        erradas().filter((id) => !idsDaMateria.has(id)),
      );
      return restantes;
    },
    gravacao: { registrar, atualizarConfianca },
  };
}
