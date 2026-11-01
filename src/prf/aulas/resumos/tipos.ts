/** Uma linha do resumo: o termo, o que ele faz e, quando ajuda, como reconhecer na prova. */
export interface ItemResumo {
  termo: string;
  faz: string;
  pista?: string;
}

/** Resumo rápido de uma aula, mostrado antes das questões. Texto próprio do app (não copia o material do curso). */
export interface ResumoAula {
  /** A ideia da aula numa frase. */
  ideia: string;
  itens: ItemResumo[];
  /** A pegadinha mais comum do assunto. */
  cuidado?: string;
}
