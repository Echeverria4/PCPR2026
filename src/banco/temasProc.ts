/**
 * Temas de Direito Processual Penal: um por aula da PRF Policial (proc-01 a proc-04). Princípios processuais, competência,
 * juiz das garantias e a revisão da preventiva não têm aula de Processo Penal na PRF Policial; colaboração premiada,
 * interceptação e as leis de crime organizado ficam para Legislação Penal Especial.
 * "Ação penal" e "Teoria geral da prova" são iguais a assuntos do próprio curso e se juntam.
 */
export type TemaProc = "proc.acao" | "proc.prova" | "proc.especie" | "proc.prisao";

export const TEMAS_PROC: { id: TemaProc; nome: string }[] = [
  { id: "proc.acao", nome: "Ação penal" },
  { id: "proc.prova", nome: "Teoria geral da prova" },
  { id: "proc.especie", nome: "Provas em espécie" },
  { id: "proc.prisao", nome: "Flagrante, prisão e custódia" },
];

/** PRF Policial: a aula de cada tema, na ordem do curso (proc-01 a proc-04). */
export const AULA_POL_DO_TEMA_PROC = Object.fromEntries(
  TEMAS_PROC.map((t, i) => [t.id, `proc-${String(i + 1).padStart(2, "0")}`]),
) as Record<TemaProc, string>;

/** PCPR: os tópicos misturam temas, então tudo vai questão por questão. */
export const TEMA_TOPICO_PCPR_PROC: Record<string, TemaProc | null> = {};

export const TEMA_QUESTAO_PCPR_PROC: Record<string, TemaProc | null> = {
  "pp-005": "proc.acao",
  "pp-017": "proc.acao",
  // Provas ilícitas e sistemas de apreciação (persuasão racional)
  "pp-004": "proc.prova",
  "pp-025": "proc.prova",
  "pp-026": "proc.prova",
  "pp-053": "proc.prova",
  // Reconhecimento e cadeia de custódia
  "pp-018": "proc.especie",
  "pp-029": "proc.especie",
  "pp-030": "proc.especie",
  // Flagrante, medidas cautelares (introdução) e audiência de custódia
  "pp-002": "proc.prisao",
  "pp-003": "proc.prisao",
  "pp-008": "proc.prisao",
  "pp-009": "proc.prisao",
  "pp-023": "proc.prisao",
  "pp-024": "proc.prisao",
  "pp-042": "proc.prisao",
  "pp-045": "proc.prisao",
};
