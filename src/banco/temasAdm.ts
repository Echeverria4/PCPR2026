/**
 * Temas de Direito Administrativo: um por aula do Curso A da PRF Policial (adm-a-01 a adm-a-15). O Curso B repete os
 * mesmos assuntos, então as questões de fora entram só no Curso A, para não aparecerem duas vezes.
 * Improbidade, serviços públicos e LINDB não têm aula de Administrativo na PRF Policial.
 * Os nomes não começam igual a um assunto do próprio curso (ex.: "Princípios", "Agentes"), para o filtro do treino
 * não parecer repetido; "Empresas estatais" é igual e se junta.
 */
export type TemaAdm =
  | "adm.principios"
  | "adm.nocoes"
  | "adm.organizacao"
  | "adm.estatais"
  | "adm.poderes"
  | "adm.atos"
  | "adm.licitacoes"
  | "adm.contratacao"
  | "adm.controle"
  | "adm.responsabilidade"
  | "adm.agentes"
  | "adm.8112-provimento"
  | "adm.8112-direitos"
  | "adm.8112-disciplinar"
  | "adm.lai";

export const TEMAS_ADM: { id: TemaAdm; nome: string }[] = [
  { id: "adm.principios", nome: "LIMPE e demais princípios" },
  { id: "adm.nocoes", nome: "Noções de Direito Administrativo" },
  { id: "adm.organizacao", nome: "Descentralização e autarquias" },
  { id: "adm.estatais", nome: "Empresas estatais" },
  { id: "adm.poderes", nome: "Poderes administrativos" },
  { id: "adm.atos", nome: "Atos administrativos" },
  { id: "adm.licitacoes", nome: "Licitações: princípios e modalidades" },
  { id: "adm.contratacao", nome: "Licitações: fases e contratação direta" },
  { id: "adm.controle", nome: "Controle e processo administrativo" },
  { id: "adm.responsabilidade", nome: "Responsabilidade civil do Estado" },
  { id: "adm.agentes", nome: "Servidores na Constituição" },
  { id: "adm.8112-provimento", nome: "Lei 8.112: provimento e vacância" },
  { id: "adm.8112-direitos", nome: "Lei 8.112: direitos e vantagens" },
  { id: "adm.8112-disciplinar", nome: "Lei 8.112: regime disciplinar" },
  { id: "adm.lai", nome: "LAI e conflito de interesses" },
];

/** PRF Policial: a aula de cada tema, na ordem do Curso A (adm-a-01 a adm-a-15). */
export const AULA_POL_DO_TEMA_ADM = Object.fromEntries(
  TEMAS_ADM.map((t, i) => [t.id, `adm-a-${String(i + 1).padStart(2, "0")}`]),
) as Record<TemaAdm, string>;

/** PRF ADM (Direito Administrativo), pelo tópico. Os tópicos largos têm exceções questão por questão. */
export const TEMA_TOPICO_ADM_ADM: Record<string, TemaAdm | null> = {
  "Princípios da administração pública": "adm.principios",
  "Organização administrativa": "adm.organizacao",
  "Poderes da administração": "adm.poderes",
  "Ato administrativo": "adm.atos",
  "Anulação, revogação e prescrição": "adm.atos",
  "Controle da administração pública": "adm.controle",
  "Processo administrativo (Lei 9.784/1999)": "adm.controle",
  "Responsabilidade civil do Estado": "adm.responsabilidade",
  "Agentes públicos: investidura, direitos e deveres": "adm.agentes",
  "Lei 8.112/1990": "adm.8112-provimento",
};

export const TEMA_QUESTAO_ADM_ADM: Record<string, TemaAdm | null> = {
  // Estatais e fundações (aula 04)
  "prf-adm-031": "adm.estatais",
  "prf-adm-prf14-q36": "adm.estatais",
  "prf-adm-prf12-i084": "adm.estatais",
  "prf-adm-prf12-i086": "adm.estatais",
  // Decadência do art. 54 da Lei 9.784: prazos extintivos, na aula de controle
  "prf-adm-006": "adm.controle",
  // Prescrição disciplinar e PAD
  "prf-adm-007": "adm.8112-disciplinar",
  "prf-adm-047": "adm.8112-disciplinar",
  // Licença para capacitação
  "prf-adm-035": "adm.8112-direitos",
};

/**
 * PRF ADM (Ética): o regime disciplinar da Lei 8.112, a LAI e o conflito de interesses (Lei 12.813/2013) têm aula em
 * Administrativo. Improbidade fica fora.
 */
export const TEMA_TOPICO_ADM_ETICA_ADM: Record<string, TemaAdm | null> = {
  "Regime disciplinar da Lei 8.112/1990": "adm.8112-disciplinar",
};

export const TEMA_QUESTAO_ADM_ETICA_ADM: Record<string, TemaAdm | null> = {
  "prf-etica-cnu25-q26": "adm.lai",
  "prf-etica-012": "adm.lai",
  "prf-etica-pf25-i036": "adm.lai",
  "prf-etica-pf25-i040": "adm.lai",
};

/** PCPR: poucas questões, todas questão por questão. */
export const TEMA_TOPICO_PCPR_ADM: Record<string, TemaAdm | null> = {};

export const TEMA_QUESTAO_PCPR_ADM: Record<string, TemaAdm | null> = {
  "adm-007": "adm.principios",
  "adm-008": "adm.principios",
  "adm-006": "adm.poderes",
  "adm-015": "adm.poderes",
  "adm-016": "adm.poderes",
  "adm-024": "adm.poderes",
  "adm-025": "adm.poderes",
  "adm-026": "adm.poderes",
  "adm-001": "adm.atos",
  "adm-002": "adm.atos",
  "adm-010": "adm.atos",
  "adm-021": "adm.atos",
  "adm-022": "adm.atos",
  "adm-023": "adm.atos",
  "adm-003": "adm.licitacoes",
  "adm-011": "adm.licitacoes",
  "adm-012": "adm.licitacoes",
  "adm-004": "adm.responsabilidade",
  "adm-014": "adm.responsabilidade",
  "adm-019": "adm.agentes",
  "adm-020": "adm.8112-provimento",
  "adm-017": "adm.8112-disciplinar",
  "adm-018": "adm.8112-disciplinar",
};
