/** Um tema do bloco de redação: a proposta, a redação-modelo e o que ela usa. */
export interface TemaRedacao {
  n: number;
  bloco: 1 | 2 | 3 | 4;
  /** Nome curto do recorte, para a lista ("Apostas on-line e saúde mental"). */
  recorte: string;
  /** Só no bloco 4: a ideia original, antes de virar frase-tema. */
  ideia?: string;
  /** A frase-tema como a banca pode propor. */
  tema: string;
  nota?: string;
  titulo: string;
  /** Introdução, desenvolvimento 1, desenvolvimento 2 e conclusão, com os conectivos entre ** **. */
  paragrafos: [string, string, string, string];
  repertorio: string[];
  conectivos: string[];
}

export type CampoPlano = "tese" | "arg1" | "arg2" | "repertorio" | "proposta";

export type CriterioId = "progressao" | "conteudo" | "coesao" | "norma";

/** Autoavaliação de um critério: sim vale a pontuação toda; em parte, a metade. */
export type Avaliacao = "sim" | "parte" | "nao";
