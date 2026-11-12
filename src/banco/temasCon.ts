/**
 * Temas de Direito Constitucional: um por aula da PRF Policial (con-01 a con-12). Teoria e classificação da
 * Constituição, princípios fundamentais (arts. 1º a 4º), Poder Legislativo, Poder Judiciário, funções essenciais,
 * partidos, controle de constitucionalidade e administração pública não têm aula de Constitucional na PRF Policial.
 * Onde o nome é igual a um assunto do próprio curso (ex.: "Direitos sociais"), o filtro do treino junta os dois.
 */
export type TemaCon =
  | "con.normas"
  | "con.teoria-df"
  | "con.art5-liberdades"
  | "con.art5-garantias"
  | "con.sociais"
  | "con.nacionalidade"
  | "con.politicos"
  | "con.estado"
  | "con.reforma"
  | "con.executivo"
  | "con.defesa"
  | "con.ordem-social";

export const TEMAS_CON: { id: TemaCon; nome: string }[] = [
  { id: "con.normas", nome: "Normas e poder constituinte" },
  { id: "con.teoria-df", nome: "Teoria dos direitos fundamentais" },
  { id: "con.art5-liberdades", nome: "Art. 5º: vida, igualdade e liberdades" },
  { id: "con.art5-garantias", nome: "Art. 5º: garantias e remédios" },
  { id: "con.sociais", nome: "Direitos sociais" },
  { id: "con.nacionalidade", nome: "Nacionalidade" },
  { id: "con.politicos", nome: "Direitos políticos" },
  { id: "con.estado", nome: "Organização do Estado" },
  { id: "con.reforma", nome: "Reforma constitucional" },
  { id: "con.executivo", nome: "Poder Executivo" },
  { id: "con.defesa", nome: "Defesa do Estado" },
  { id: "con.ordem-social", nome: "Ordem social" },
];

/** PRF Policial: a aula de cada tema, na ordem do curso (con-01 a con-12). */
export const AULA_POL_DO_TEMA_CON = Object.fromEntries(
  TEMAS_CON.map((t, i) => [t.id, `con-${String(i + 1).padStart(2, "0")}`]),
) as Record<TemaCon, string>;

/** PRF ADM (Constitucional), pelo tópico. "Direitos e deveres individuais e coletivos" vai questão por questão. */
export const TEMA_TOPICO_ADM_CON: Record<string, TemaCon | null> = {
  "Direitos sociais": "con.sociais",
  Nacionalidade: "con.nacionalidade",
  "Direitos políticos e partidos políticos": "con.politicos",
  "Organização político-administrativa": "con.estado",
  "Poder Executivo": "con.executivo",
};

export const TEMA_QUESTAO_ADM_CON: Record<string, TemaCon | null> = {
  "prf-con-prf12-i054": "con.teoria-df",
  "prf-con-004": "con.art5-liberdades",
  "prf-con-006": "con.art5-liberdades",
  "prf-con-036": "con.art5-liberdades",
  "prf-con-pcpr26-q98": "con.art5-liberdades",
  "prf-con-pf25-i051": "con.art5-liberdades",
  "prf-con-prf12-i056": "con.art5-liberdades",
  "prf-con-prf12-i058": "con.art5-liberdades",
  "prf-con-cnu25-q25": "con.art5-liberdades",
  "prf-con-cnu25-q29": "con.art5-liberdades",
  "prf-con-005": "con.art5-garantias",
  "prf-con-034": "con.art5-garantias",
  "prf-con-prf14-q29": "con.art5-garantias",
  "prf-con-cnu25-q27": "con.art5-garantias",
  "prf-con-037": "con.reforma",
  // Partidos políticos (art. 17): a aula de direitos políticos não trata deles
  "prf-con-015": null,
};

/** PRF ADM (Legislação): o art. 144 vai para a aula de defesa do Estado e segurança pública. */
export const TEMA_TOPICO_ADM_LEG_CON: Record<string, TemaCon | null> = {
  "Art. 144 da Constituição: perfil constitucional da PRF": "con.defesa",
};

export const TEMA_QUESTAO_ADM_LEG_CON: Record<string, TemaCon | null> = {
  // Repartição de competências (art. 22)
  "prf-leg-007": "con.estado",
  "prf-leg-026": "con.estado",
};

/** PCPR: poucos tópicos e misturados, então tudo vai questão por questão. */
export const TEMA_TOPICO_PCPR_CON: Record<string, TemaCon | null> = {};

export const TEMA_QUESTAO_PCPR_CON: Record<string, TemaCon | null> = {
  "con-014": "con.art5-liberdades",
  "con-023": "con.art5-liberdades",
  "con-027": "con.art5-liberdades",
  "con-004": "con.art5-garantias",
  "con-005": "con.art5-garantias",
  "con-013": "con.art5-garantias",
  "con-028": "con.sociais",
  "con-006": "con.estado",
  "con-021": "con.estado",
  "con-002": "con.defesa",
  "con-015": "con.defesa",
  "con-016": "con.defesa",
};
