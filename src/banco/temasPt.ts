/**
 * Temas de Português comuns a todos os cursos. Cada questão de qualquer curso cai num tema; o tema diz em que aula
 * ela entra nos outros cursos. A ordem segue as aulas da PRF Policial, o curso em estudo agora.
 */
export type TemaPt =
  | "pt.ortografia"
  | "pt.classes"
  | "pt.conectivos"
  | "pt.pronomes"
  | "pt.verbos"
  | "pt.vozes"
  | "pt.periodo-simples"
  | "pt.periodo-composto"
  | "pt.pontuacao"
  | "pt.concordancia"
  | "pt.regencia-crase"
  | "pt.coesao"
  | "pt.semantica"
  | "pt.tipologia"
  | "pt.redacao-oficial"
  | "pt.interpretacao";

export const TEMAS_PT: { id: TemaPt; nome: string }[] = [
  { id: "pt.ortografia", nome: "Ortografia e acentuação" },
  { id: "pt.classes", nome: "Classes de palavras" },
  { id: "pt.conectivos", nome: "Preposições e conjunções" },
  { id: "pt.pronomes", nome: "Pronomes e colocação pronominal" },
  { id: "pt.verbos", nome: "Tempos e modos" },
  { id: "pt.vozes", nome: "Vozes verbais" },
  { id: "pt.periodo-simples", nome: "Termos da oração" },
  { id: "pt.periodo-composto", nome: "Período composto" },
  { id: "pt.pontuacao", nome: "Pontuação" },
  { id: "pt.concordancia", nome: "Concordância" },
  { id: "pt.regencia-crase", nome: "Regência e crase" },
  { id: "pt.coesao", nome: "Coesão e coerência" },
  { id: "pt.semantica", nome: "Significação das palavras" },
  { id: "pt.tipologia", nome: "Tipos e gêneros textuais" },
  { id: "pt.redacao-oficial", nome: "Redação oficial" },
  { id: "pt.interpretacao", nome: "Compreensão e interpretação" },
];

/** PRF Policial: o tema de cada aula de Português (a pt-16 é a de interpretação, só em PDF). */
export const AULA_POL_DO_TEMA: Record<TemaPt, string> = {
  "pt.ortografia": "pt-01",
  "pt.classes": "pt-02",
  "pt.conectivos": "pt-03",
  "pt.pronomes": "pt-04",
  "pt.verbos": "pt-05",
  "pt.vozes": "pt-06",
  "pt.periodo-simples": "pt-07",
  "pt.periodo-composto": "pt-08",
  "pt.pontuacao": "pt-09",
  "pt.concordancia": "pt-10",
  "pt.regencia-crase": "pt-11",
  "pt.coesao": "pt-12",
  "pt.semantica": "pt-13",
  "pt.tipologia": "pt-14",
  "pt.redacao-oficial": "pt-15",
  "pt.interpretacao": "pt-16",
};

/**
 * PRF ADM: tema pelo tópico da questão. Tópico novo sem tema fica fora dos outros cursos até entrar aqui.
 * Questão nova num tópico que já está aqui entra sozinha nos outros cursos.
 */
export const TEMA_TOPICO_ADM: Record<string, TemaPt | null> = {
  "Acentuação gráfica": "pt.ortografia",
  "Ortografia oficial": "pt.ortografia",
  "Emprego das classes de palavras": "pt.classes",
  "Sintaxe da oração e do período": "pt.periodo-simples",
  "Pontuação": "pt.pontuacao",
  "Concordância nominal e verbal": "pt.concordancia",
  "Regência nominal e verbal": "pt.regencia-crase",
  "Emprego do sinal indicativo de crase": "pt.regencia-crase",
  "Significação das palavras": "pt.semantica",
  "Tipologia textual": "pt.tipologia",
  "Redação oficial (Manual de Redação da Presidência da República)": "pt.redacao-oficial",
  "Compreensão e interpretação de textos": "pt.interpretacao",
};

/** PRF ADM: exceções por questão, quando o tópico é largo demais (classes, sintaxe, interpretação). */
export const TEMA_QUESTAO_ADM: Record<string, TemaPt | null> = {
  "prf-pt-016": "pt.conectivos",
  "prf-pt-018": "pt.pronomes",
  "prf-pt-019": "pt.pronomes",
  "prf-pt-051": "pt.conectivos",
  "prf-pt-054": "pt.pronomes",
  "prf-pt-057": "pt.verbos",
  "prf-pt-pcpr26-q02": "pt.periodo-composto",
  "prf-pt-pcpr26-q15": "pt.verbos",
  "prf-pt-prf14-q04": "pt.coesao",
  "prf-pt-pf25-i003": "pt.coesao",
  "prf-pt-prf12-i007": "pt.pronomes",
  "prf-pt-prf12-i016": "pt.conectivos",
  "prf-pt-prf12-i017": "pt.conectivos",
  "prf-pt-025": "pt.periodo-composto",
  "prf-pt-026": "pt.vozes",
  "prf-pt-048": "pt.periodo-composto",
  "prf-pt-056": "pt.vozes",
  "prf-pt-prf14-q11": "pt.periodo-composto",
  "prf-pt-pf25-i014": "pt.pronomes",
  "prf-pt-prf12-i005": "pt.vozes",
  "prf-pt-prf12-i015": "pt.periodo-composto",
  "prf-pt-cnu25-q06": "pt.periodo-composto",
  "prf-pt-050": "pt.coesao",
  "prf-pt-prf12-i009": "pt.coesao",
};

/** PCPR (curso finalizado, só fonte): tema pelo tópico. Figuras, funções e vícios de linguagem ficam fora: a PRF não cobra. */
export const TEMA_TOPICO_PCPR: Record<string, TemaPt | null> = {
  "Acentuação gráfica": "pt.ortografia",
  "Ortografia": "pt.ortografia",
  "Classes de palavras": "pt.classes",
  "Conectivos": "pt.conectivos",
  "Colocação pronominal (próclise, mesóclise, ênclise)": "pt.pronomes",
  "Sintaxe do período simples": "pt.periodo-simples",
  "Sintaxe do período composto": "pt.periodo-composto",
  "Pontuação": "pt.pontuacao",
  "Concordância verbal": "pt.concordancia",
  "Concordância nominal": "pt.concordancia",
  "Regência verbal e nominal": "pt.regencia-crase",
  "Crase": "pt.regencia-crase",
  "Coesão e coerência": "pt.coesao",
  "Semântica": "pt.semantica",
  "Ambiguidade": "pt.semantica",
  "Modos de organização do discurso": "pt.tipologia",
  "Tipos de discurso": "pt.tipologia",
  "Redação oficial e correspondência administrativa (padrão culto, impessoalidade, concisão)": "pt.redacao-oficial",
  "Interpretação de texto": "pt.interpretacao",
  "Intertextualidade": "pt.interpretacao",
  "Modalizadores": "pt.interpretacao",
  "Figuras de linguagem (metáfora, metonímia, ironia, eufemismo, hipérbole)": null,
  "Funções da linguagem (referencial, emotiva, conativa, poética, fática, metalinguística)": null,
  "Vícios de linguagem (ambiguidade involuntária, cacofonia, pleonasmo vicioso, solecismo)": null,
};

/** PCPR: exceções por questão. A pt-040 sai porque a PRF ADM já tem a versão adaptada dela (prf-pt-047). */
export const TEMA_QUESTAO_PCPR: Record<string, TemaPt | null> = {
  "pt-026": "pt.pronomes",
  "pt-071": "pt.vozes",
  "pt-068": "pt.ortografia",
  "pt-040": null,
};
