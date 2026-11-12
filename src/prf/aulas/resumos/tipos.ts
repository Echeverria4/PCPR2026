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
  /** Matérias de exatas: como usar as fórmulas da aula, com exemplo e passo a passo. */
  exemplos?: ExemploResolvido[];
  /** Matérias de exatas: a lista das fórmulas da aula, para consulta rápida (também aparece no mapa mental). */
  formulas?: Formula[];
}

/** Uma fórmula da aula: o nome, a expressão e, quando ajuda, o que as letras querem dizer. Texto próprio do app. */
export interface Formula {
  nome: string;
  expr: string;
  obs?: string;
}

/** Um passo do exemplo resolvido: o que fazer e, quando há, a conta desse passo. */
export interface PassoExemplo {
  faz: string;
  conta?: string;
}

/** Exemplo resolvido de uma fórmula: o problema, os passos (abertos um de cada vez) e a resposta. Texto próprio do app. */
export interface ExemploResolvido {
  titulo: string;
  formula: string;
  /** O que cada letra da fórmula quer dizer. */
  legenda?: string;
  problema: string;
  passos: PassoExemplo[];
  resposta: string;
}
