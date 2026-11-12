/**
 * Temas de Direitos Humanos: as aulas de conteúdo da PRF Policial (dh-06 é revisão e dh-07 é resolução de questões).
 * Os nomes são iguais aos assuntos do próprio curso e se juntam. Uso da força, grupos vulneráveis, execução penal,
 * Agenda 2030, PNDH e o sistema global da ONU não têm aula de DH na PRF Policial.
 */
export type TemaDh = "dh.teoria" | "dh.cf" | "dh.tratados" | "dh.dudh" | "dh.interamericano" | "dh.pactos";

export const TEMAS_DH: { id: TemaDh; nome: string }[] = [
  { id: "dh.teoria", nome: "Teoria Geral" },
  { id: "dh.cf", nome: "Direitos Humanos na CF" },
  { id: "dh.tratados", nome: "Tratados Internacionais" },
  { id: "dh.dudh", nome: "Declaração Universal" },
  { id: "dh.interamericano", nome: "Sistema Interamericano" },
  { id: "dh.pactos", nome: "Pactos Internacionais" },
];

export const AULA_POL_DO_TEMA_DH: Record<TemaDh, string> = {
  "dh.teoria": "dh-01",
  "dh.cf": "dh-02",
  "dh.tratados": "dh-03",
  "dh.dudh": "dh-04",
  "dh.interamericano": "dh-05",
  "dh.pactos": "dh-08",
};

/** PCPR: os tópicos misturam temas, então tudo vai questão por questão. */
export const TEMA_TOPICO_PCPR_DH: Record<string, TemaDh | null> = {};

export const TEMA_QUESTAO_PCPR_DH: Record<string, TemaDh | null> = {
  // Direitos humanos e direitos fundamentais (terminologia)
  "dh-021": "dh.teoria",
  // Características, eficácia, art. 4º, art. 5º §§ 2º a 4º, cláusulas pétreas e tratados com status de emenda
  "dh-003": "dh.cf",
  "dh-006": "dh.cf",
  "dh-010": "dh.cf",
  "dh-022": "dh.cf",
  "dh-023": "dh.cf",
  "dh-024": "dh.cf",
  "dh-025": "dh.cf",
  "dh-027": "dh.cf",
  "dh-028": "dh.cf",
  // Jus cogens (Convenção de Viena sobre tratados)
  "dh-005": "dh.tratados",
  "dh-002": "dh.dudh",
  "dh-001": "dh.interamericano",
  "dh-007": "dh.pactos",
};
