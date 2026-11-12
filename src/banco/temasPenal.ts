/**
 * Temas de Direito Penal: um por aula da PRF Policial (penal-01 a penal-13). Aplicação da pena (dosimetria), concurso
 * de pessoas e de crimes não têm aula de Penal na PRF Policial. As leis penais especiais (Maria da Penha, drogas,
 * armas, organizações criminosas, hediondos, trânsito, execução penal, ordem tributária) ficam para Legislação Penal
 * Especial. Os nomes não começam igual a um assunto do próprio curso; "Crimes em licitações" é igual e se junta.
 */
export type TemaPenal =
  | "penal.principios"
  | "penal.lei"
  | "penal.crime"
  | "penal.culpabilidade"
  | "penal.punibilidade"
  | "penal.pessoa"
  | "penal.patrimonio"
  | "penal.sexual"
  | "penal.fe"
  | "penal.funcionais"
  | "penal.particular"
  | "penal.justica"
  | "penal.licitacoes";

export const TEMAS_PENAL: { id: TemaPenal; nome: string }[] = [
  { id: "penal.principios", nome: "Princípios do Direito Penal" },
  { id: "penal.lei", nome: "Aplicação da lei penal" },
  { id: "penal.crime", nome: "Teoria do crime e ilicitude" },
  { id: "penal.culpabilidade", nome: "Culpabilidade e erro" },
  { id: "penal.punibilidade", nome: "Extinção da punibilidade" },
  { id: "penal.pessoa", nome: "Crimes contra a pessoa" },
  { id: "penal.patrimonio", nome: "Crimes contra o patrimônio" },
  { id: "penal.sexual", nome: "Dignidade sexual e incolumidade pública" },
  { id: "penal.fe", nome: "Crimes contra a fé pública" },
  { id: "penal.funcionais", nome: "Crimes funcionais" },
  { id: "penal.particular", nome: "Crimes de particular contra a administração" },
  { id: "penal.justica", nome: "Justiça e finanças públicas" },
  { id: "penal.licitacoes", nome: "Crimes em licitações" },
];

/** PRF Policial: a aula de cada tema, na ordem do curso (penal-01 a penal-13). */
export const AULA_POL_DO_TEMA_PENAL = Object.fromEntries(
  TEMAS_PENAL.map((t, i) => [t.id, `penal-${String(i + 1).padStart(2, "0")}`]),
) as Record<TemaPenal, string>;

/** PCPR: os tópicos misturam temas, então tudo vai questão por questão. */
export const TEMA_TOPICO_PCPR_PENAL: Record<string, TemaPenal | null> = {};

export const TEMA_QUESTAO_PCPR_PENAL: Record<string, TemaPenal | null> = {
  "pen-008": "penal.lei",
  // Teoria do crime, tentativa, arrependimento posterior, dolo e culpa, excludentes
  "pen-001": "penal.crime",
  "pen-005": "penal.crime",
  "pen-007": "penal.crime",
  "pen-025": "penal.crime",
  "pen-026": "penal.crime",
  "pen-037": "penal.crime",
  "pen-069": "penal.crime",
  "pen-073": "penal.crime",
  // Erro na execução (com nexo causal, visto na aula anterior)
  "pen-070": "penal.culpabilidade",
  "pen-033": "penal.punibilidade",
  "pen-034": "penal.punibilidade",
  // Vida, periclitação, rixa, honra e inviolabilidade dos segredos (art. 154-A)
  "pen-004": "penal.pessoa",
  "pen-016": "penal.pessoa",
  "pen-021": "penal.pessoa",
  "pen-023": "penal.pessoa",
  "pen-024": "penal.pessoa",
  "pen-048": "penal.pessoa",
  "pen-049": "penal.pessoa",
  "pen-050": "penal.pessoa",
  "pen-051": "penal.pessoa",
  "pen-052": "penal.pessoa",
  "pen-054": "penal.pessoa",
  "pen-055": "penal.pessoa",
  "pen-056": "penal.pessoa",
  "pen-057": "penal.pessoa",
  "pen-058": "penal.pessoa",
  "pen-059": "penal.pessoa",
  "pen-071": "penal.pessoa",
  "pen-072": "penal.pessoa",
  // Ameaça (art. 147), com a mudança da Lei 14.994/2024
  "pen-047": "penal.pessoa",
  "pen-003": "penal.patrimonio",
  "pen-009": "penal.patrimonio",
  "pen-010": "penal.patrimonio",
  "pen-074": "penal.patrimonio",
  "pen-075": "penal.patrimonio",
  "pen-076": "penal.patrimonio",
  "pen-077": "penal.patrimonio",
  "pen-078": "penal.patrimonio",
  "pen-079": "penal.patrimonio",
  "pen-080": "penal.patrimonio",
  "pen-081": "penal.patrimonio",
  "pen-082": "penal.patrimonio",
  // Dignidade sexual e saúde pública
  "pen-038": "penal.sexual",
  "pen-039": "penal.sexual",
  "pen-040": "penal.sexual",
  "pen-091": "penal.sexual",
  "pen-092": "penal.sexual",
  "pen-041": "penal.fe",
  "pen-006": "penal.funcionais",
  "pen-017": "penal.funcionais",
  "pen-083": "penal.funcionais",
  "pen-084": "penal.funcionais",
  "pen-085": "penal.funcionais",
  "pen-086": "penal.funcionais",
  "pen-087": "penal.funcionais",
  "pen-088": "penal.funcionais",
  "pen-089": "penal.funcionais",
  "pen-090": "penal.funcionais",
  "pen-061": "penal.justica",
  "pen-062": "penal.justica",
  "pen-063": "penal.justica",
  "pen-064": "penal.justica",
  "pen-065": "penal.licitacoes",
  "pen-066": "penal.licitacoes",
  "pen-067": "penal.licitacoes",
  "pen-068": "penal.licitacoes",
};

/**
 * PCPR, crimes cibernéticos (Informática): os do Código Penal. Ficam fora as que misturam artigos de aulas diferentes
 * (ti-304, ti-310) e as de Marco Civil, LGPD, ECA Digital, lavagem e rastreamento, que não têm aula na PRF Policial.
 */
export const TEMA_QUESTAO_PCPR_TI_PENAL: Record<string, TemaPenal | null> = {
  // Invasão de dispositivo (art. 154-A), honra na rede, violência psicológica e perseguição
  "ti-306": "penal.pessoa",
  "ti-307": "penal.pessoa",
  "ti-308": "penal.pessoa",
  "ti-309": "penal.pessoa",
  "ti-311": "penal.pessoa",
  "ti-312": "penal.pessoa",
  "ti-315": "penal.pessoa",
  // Furto e estelionato por fraude eletrônica, conta de passagem e fraude com ativos virtuais (art. 171-A)
  "ti-301": "penal.patrimonio",
  "ti-302": "penal.patrimonio",
  "ti-305": "penal.patrimonio",
  "ti-337": "penal.patrimonio",
  "ti-338": "penal.patrimonio",
  "ti-353": "penal.patrimonio",
  // Exposição da intimidade sexual (arts. 216-B e 218-C)
  "ti-313": "penal.sexual",
  "ti-314": "penal.sexual",
  // Violação de sigilo funcional (art. 325)
  "ti-330": "penal.funcionais",
  "ti-331": "penal.funcionais",
};
