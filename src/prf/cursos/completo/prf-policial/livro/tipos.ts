/**
 * Livro do CTB (19/11/26): a Lei nº 9.503/1997 inteira, capítulo por capítulo, com um mapa mental no começo de cada um.
 * O texto vem da página compilada do Planalto (`ctb.json`), sem resumo nem corte: o trecho revogado ou vetado fica
 * marcado como tal, e as notas de alteração ("Redação dada pela Lei nº…") vão em `n`.
 */

/** Pedaço de um artigo: o caput, um parágrafo, inciso, alínea, item ou a linha de pena da infração. */
export interface ParteArtigo {
  k: "caput" | "par" | "inc" | "ali" | "item" | "pena";
  /** Rótulo como está na lei: "§ 1º", "II-A", "a)", "1 -", "Infração", "Penalidade"… O caput não tem. */
  r?: string;
  t: string;
  n?: string[];
  rev?: boolean;
  vet?: boolean;
}

export type ItemCapitulo =
  | { k: "secao"; t: string }
  | { k: "art"; id: string; r: string; p: ParteArtigo[] }
  /** Definição do Anexo I: o termo em maiúsculas e o que ele quer dizer. */
  | { k: "termo"; r: string; t: string; n?: string[]; rev?: boolean }
  | { k: "txt"; t: string };

export interface CapituloCtb {
  id: string;
  /** "I", "III-A", "Anexo I"… */
  numero: string;
  titulo: string;
  /** Aula de Legislação de Trânsito que trata do capítulo; null quando nenhuma trata (Disposições finais). */
  aula: string | null;
  itens: ItemCapitulo[];
}

/**
 * Tela aberta no livro. `art` é a âncora para rolar: o id do artigo (art-165) ou do termo (termo-acostamento).
 * `secao: "resolucoes"` abre o início já na lista das resoluções do CONTRAN (o voltar de uma resolução).
 */
export type TelaLivro =
  | { tipo: "inicio"; secao?: "resolucoes" }
  | { tipo: "capitulo"; id: string; art?: string }
  | { tipo: "resolucao"; id: string };
