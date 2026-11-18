import type { Destino } from "../prf/cursos/cronograma/plano";

/**
 * Onde o curso abre quando vem da Central: a aba e, se houver, a aula, a matéria ou o mapa.
 * Vale só na abertura; depois o curso segue com a navegação dele.
 */
export interface EntradaCurso {
  /** Id da aba do próprio curso (treino, aulas, semana, mapas, redacao… ou home e portugues na PRF ADM). */
  aba?: string;
  grupo?: string;
  aula?: string;
  /** Aula do mapa mental que abre direto. */
  mapa?: string;
  /** Botão do cronograma tocado na Central (questões, erradas, mapas…): o curso abre direto nele. */
  ir?: Destino;
  /** Tela interna da aba: "redacao" abre a Redação PMPR no Português Inteligente da PRF ADM. */
  tela?: "redacao";
}

/** A aba pedida, se for uma das que o curso tem; senão, a padrão. */
export function abaDaEntrada<T extends string>(entrada: EntradaCurso | undefined, validas: readonly T[], padrao: T): T {
  const aba = entrada?.aba;
  return aba && (validas as readonly string[]).includes(aba) ? (aba as T) : padrao;
}
