/** Redação da PRF Policial no formato do Cebraspe: até 30 linhas, um tema e três aspectos pedidos. */
export interface TemaPrf {
  n: number;
  bloco: 1 | 2 | 3;
  /** Nome curto do tema, para a lista e o título das telas. */
  recorte: string;
  /** Texto curto de contexto, como o que abre a proposta da prova. */
  contexto: string;
  /** O tema em si, como viria depois de "Redija um texto dissertativo acerca do seguinte tema". */
  tema: string;
  /** Os três aspectos que o texto precisa abordar, na ordem da proposta. */
  aspectos: [string, string, string];
  /** Aviso sobre um ponto que pode mudar até a prova. */
  nota?: string;
  /** Introdução, um parágrafo por aspecto e conclusão; conectivos entre ** **. */
  paragrafos: [string, string, string, string, string];
  repertorio: string[];
  conectivos: string[];
}

export type CampoPlano = "intro" | "asp1" | "asp2" | "asp3" | "fecho";
export type CriterioId = "estrutura" | "asp1" | "asp2" | "asp3";
export type Avaliacao = "sim" | "parte" | "nao";

/** As telas do bloco, guardadas pelo curso para a aba não perder o lugar. */
export type TelaRedacaoPrf = { tipo: "inicio" } | { tipo: "tema"; n: number } | { tipo: "guia" };
