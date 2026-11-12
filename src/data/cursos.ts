/** Cursos da central de estudos. Cada concurso tem banco, progresso e simulados próprios. */
export type CursoId = "pcpr2026" | "prf-adm" | "prf-policial" | "pf-agente" | "detran-pr" | "pmpr" | "banco-brasil";

export interface Curso {
  id: CursoId;
  /** Texto da miniatura quando o curso ainda não tem imagem própria. */
  sigla: string;
  nome: string;
  orgao: string;
  disponivel: boolean;
  /** Fora da lista da central; se estiver disponível, ainda abre pelo link (?curso=…). */
  oculto?: boolean;
  /** Prova já feita: o curso fica no bloco dos finalizados, ainda aberto para consulta. */
  finalizado?: boolean;
}

export const CURSOS: Curso[] = [
  {
    id: "pcpr2026",
    sigla: "PCPR",
    nome: "PCPR 2026 — Agente de Polícia Judiciária",
    orgao: "Polícia Civil do Paraná · Banca FGV",
    disponivel: true,
    finalizado: true,
  },
  {
    id: "prf-adm",
    sigla: "PRF",
    nome: "PRF — Agente Administrativo",
    orgao: "Polícia Rodoviária Federal · nível médio · banca a definir",
    disponivel: true,
  },
  // Concursos previstos para 2027. Por enquanto só com as aulas (vídeos e PDFs do Drive), como a aba Aulas da PRF ADM;
  // o que ainda não tem material fica na central como "Em breve".
  {
    id: "prf-policial",
    sigla: "PRF",
    nome: "PRF — Policial Rodoviário Federal",
    orgao: "Polícia Rodoviária Federal · nível superior",
    disponivel: true,
  },
  {
    id: "pf-agente",
    sigla: "PF",
    nome: "PF — Agente de Polícia Federal",
    orgao: "Polícia Federal · nível superior",
    disponivel: true,
  },
  {
    id: "detran-pr",
    sigla: "DETRAN",
    nome: "DETRAN-PR",
    orgao: "Departamento de Trânsito do Paraná · cargo a definir",
    disponivel: false,
  },
  {
    id: "pmpr",
    sigla: "PMPR",
    nome: "PMPR — Soldado",
    orgao: "Polícia Militar do Paraná",
    disponivel: true,
  },
  {
    id: "banco-brasil",
    sigla: "BB",
    nome: "Banco do Brasil — Escriturário",
    orgao: "Banco do Brasil · nível médio · banca a definir",
    disponivel: true,
  },
];

/** Só devolve cursos que já podem ser abertos; qualquer outro valor cai na central. */
export function cursoAbrivel(id: string | null): CursoId | null {
  const curso = CURSOS.find((c) => c.id === id);
  return curso && curso.disponivel ? curso.id : null;
}
