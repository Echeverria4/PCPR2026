/**
 * Temas de Legislação Penal Especial: um por aula da PRF Policial (especial-01 a especial-11). Maria da Penha, execução
 * penal, ordem tributária, lavagem de dinheiro e interceptação telefônica não têm aula de Especial na PRF Policial.
 * Crimes de trânsito ficam em Legislação de Trânsito. "Crimes do ECA" é igual a um assunto do próprio curso e se junta;
 * os outros nomes não começam igual a um assunto do curso.
 */
export type TemaEspecial =
  | "esp.ambiental"
  | "esp.drogas"
  | "esp.tortura"
  | "esp.armas"
  | "esp.eca"
  | "esp.orcrim"
  | "esp.hediondos"
  | "esp.susp"
  | "esp.pnsp"
  | "esp.prf"
  | "esp.jecrim";

export const TEMAS_ESPECIAL: { id: TemaEspecial; nome: string }[] = [
  { id: "esp.ambiental", nome: "Crimes ambientais" },
  { id: "esp.drogas", nome: "Lei de Drogas" },
  { id: "esp.tortura", nome: "Crimes de abuso e de tortura" },
  { id: "esp.armas", nome: "Armas de fogo e documentos" },
  { id: "esp.eca", nome: "Crimes do ECA" },
  { id: "esp.orcrim", nome: "Crime organizado e identificação criminal" },
  { id: "esp.hediondos", nome: "Crimes hediondos" },
  { id: "esp.susp", nome: "Sistema Único de Segurança Pública" },
  { id: "esp.pnsp", nome: "Política e Plano de Segurança Pública" },
  { id: "esp.prf", nome: "Normas da PRF" },
  { id: "esp.jecrim", nome: "Juizados Especiais Criminais" },
];

/** PRF Policial: a aula de cada tema, na ordem do curso (especial-01 a especial-11). */
export const AULA_POL_DO_TEMA_ESPECIAL = Object.fromEntries(
  TEMAS_ESPECIAL.map((t, i) => [t.id, `especial-${String(i + 1).padStart(2, "0")}`]),
) as Record<TemaEspecial, string>;

/** PRF ADM (Legislação da PRF): art. 20 do CTB e Decreto 1.655/1995. O art. 144 já entra em Constitucional. */
export const TEMA_TOPICO_ADM_LEG_ESPECIAL: Record<string, TemaEspecial | null> = {
  "Art. 20 do Código de Trânsito Brasileiro": "esp.prf",
  "Decreto 1.655/1995": "esp.prf",
  "Estrutura do DPRF (Decreto 6.061/2007, revogado)": null,
};

export const TEMA_QUESTAO_ADM_LEG_ESPECIAL: Record<string, TemaEspecial | null> = {};

/** PCPR: os tópicos misturam temas, então tudo vai questão por questão, em cada arquivo de questões. */
export const TEMA_TOPICO_PCPR_ESPECIAL: Record<string, TemaEspecial | null> = {};

/** PCPR, Direito Penal (leis especiais dentro da matéria). */
export const TEMA_QUESTAO_PCPR_PEN_ESPECIAL: Record<string, TemaEspecial | null> = {
  "pen-012": "esp.drogas",
  "pen-013": "esp.drogas",
  "pen-014": "esp.armas",
  "pen-099": "esp.armas",
  "pen-015": "esp.orcrim",
  "pen-027": "esp.orcrim",
  "pen-028": "esp.orcrim",
  "pen-018": "esp.hediondos",
  "pen-019": "esp.hediondos",
  "pen-020": "esp.hediondos",
};

/** PCPR, Legislação Penal Especial. */
export const TEMA_QUESTAO_PCPR_LEG_ESPECIAL: Record<string, TemaEspecial | null> = {
  "leg-076": "esp.tortura",
  "leg-077": "esp.tortura",
  "leg-078": "esp.tortura",
  "leg-079": "esp.tortura",
  "leg-083": "esp.tortura",
  "leg-085": "esp.tortura",
  "leg-086": "esp.tortura",
  "leg-089": "esp.tortura",
  "leg-006": "esp.orcrim",
  "leg-013": "esp.orcrim",
  "leg-070": "esp.orcrim",
  "leg-074": "esp.orcrim",
  "leg-075": "esp.orcrim",
};

/** PCPR, Processo Penal: colaboração premiada e a lei nova de crime organizado. */
export const TEMA_QUESTAO_PCPR_PP_ESPECIAL: Record<string, TemaEspecial | null> = {
  "pp-020": "esp.orcrim",
  "pp-027": "esp.orcrim",
  "pp-028": "esp.orcrim",
  "pp-007": "esp.orcrim",
  "pp-031": "esp.orcrim",
  "pp-032": "esp.orcrim",
  "pp-033": "esp.orcrim",
  "pp-037": "esp.orcrim",
  "pp-039": "esp.orcrim",
  "pp-046": "esp.orcrim",
};

/** PCPR, Direitos Humanos: a tortura como crime (Lei 9.455/1997). */
export const TEMA_QUESTAO_PCPR_DH_ESPECIAL: Record<string, TemaEspecial | null> = {
  "dh-017": "esp.tortura",
};
