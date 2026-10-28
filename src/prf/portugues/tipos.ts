/** Tipos da aba Português Inteligente: lições em blocos, modelos mentais visuais e questões de fixação. */

export type ClasseId =
  | "substantivo"
  | "artigo"
  | "adjetivo"
  | "numeral"
  | "pronome"
  | "verbo"
  | "adverbio"
  | "preposicao"
  | "conjuncao"
  | "interjeicao";

/** Palavra de uma frase anotada: [texto, classe, rótulo]. Sem classe, sai sem destaque (pontuação, palavra fora do foco). */
export type Palavra = [string] | [string, ClasseId | null, string?];

/**
 * Peças de conteúdo. O texto aceita **trecho** para destacar uma palavra; o resto é texto puro.
 * Cada peça visual complementa a explicação escrita, não a substitui.
 */
export type Bloco =
  | { tipo: "texto"; texto: string }
  | { tipo: "lista"; titulo?: string; itens: string[] }
  | { tipo: "perguntas"; titulo?: string; itens: string[] }
  /** Caixa central com chaves abrindo os ramos (tipos, categorias). */
  | { tipo: "chaves"; titulo: string; ramos: { rotulo: string; texto?: string; exemplo?: string; classe?: ClasseId }[] }
  /** Perguntas em sequência: "sim" leva à conclusão; "não" desce para a próxima. */
  | { tipo: "fluxo"; titulo?: string; passos: { pergunta: string; sim: string; classe?: ClasseId }[]; senao?: string }
  | { tipo: "frase"; palavras: Palavra[]; comentario?: string }
  /** Quadro X × Y: uma coluna por caso, com a frase-síntese embaixo. */
  | { tipo: "comparativo"; titulo?: string; colunas: { titulo: string; classe?: ClasseId; itens: string[] }[]; sintese?: string }
  /** Tabela curta de decisão; "sim" e "não" viram ✓ e ✗. */
  | { tipo: "grade"; titulo?: string; colunas: string[]; linhas: { rotulo: string; valores: string[] }[]; nota?: string }
  | { tipo: "macete"; texto: string; explicacao?: string }
  | { tipo: "pegadinhas"; itens: { titulo: string; texto: string }[] }
  | { tipo: "passos"; frase: string; passos: string[]; conclusao: string }
  | { tipo: "exemplos"; itens: { frase: string; analise: string; concurso?: boolean }[] }
  /** Particularidade: ponto em que gramáticas ou bancas divergem, ou exceção à regra geral. */
  | { tipo: "nota"; texto: string };

export type LetraBloco = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I";

export const TITULO_BLOCO: Record<LetraBloco, string> = {
  A: "O que é?",
  B: "Como identificar?",
  C: "Qual é a função?",
  D: "Como diferenciar?",
  E: "Exemplos práticos",
  F: "Pegadinhas de concurso",
  G: "Regra de memorização",
  H: "Aplicação passo a passo",
  I: "Revisão rápida",
};

export interface Secao {
  letra: LetraBloco;
  /** Só quando o título padrão do bloco não serve ao assunto. */
  titulo?: string;
  blocos: Bloco[];
}

/** Lição completa do módulo de classes de palavras. */
export interface Licao {
  id: string;
  titulo: string;
  classe?: ClasseId;
  /** Uma linha: aparece no card e no topo da lição. */
  resumo: string;
  /** Modelo mental da lição: o mapa visual que abre a página. */
  modelo: Bloco[];
  secoes: Secao[];
}

export type GrupoPt = "base" | "nucleo" | "aprofundamento";

/** Modelo mental visual de um assunto do programa (os que ainda não têm lição completa). */
export interface ModeloPt {
  id: string;
  titulo: string;
  grupo: GrupoPt;
  /** A ideia que segura o assunto na memória, em uma frase. */
  gancho: string;
  /** Tópicos do programa de português da PRF ligados ao assunto (para o resumo e o treino do banco). */
  topicosPrf: string[];
  blocos: Bloco[];
}

export interface AltFixacao {
  t: string;
  /** Por que a alternativa está certa ou errada. */
  por: string;
}

/** Questão autoral de treinamento (não oficial), separada do banco da PRF. */
export interface QuestaoFixacao {
  id: string;
  licao: string;
  nivel: 1 | 2 | 3 | 4 | 5;
  enunciado: string;
  alternativas: [AltFixacao, AltFixacao, AltFixacao, AltFixacao, AltFixacao];
  correta: 0 | 1 | 2 | 3 | 4;
  /** O raciocínio que leva à correta, passo a passo. */
  raciocinio: string;
}

export const NOME_CLASSE: Record<ClasseId, string> = {
  substantivo: "substantivo",
  artigo: "artigo",
  adjetivo: "adjetivo",
  numeral: "numeral",
  pronome: "pronome",
  verbo: "verbo",
  adverbio: "advérbio",
  preposicao: "preposição",
  conjuncao: "conjunção",
  interjeicao: "interjeição",
};
