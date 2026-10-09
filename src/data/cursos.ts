/** Cursos da central de estudos. Cada concurso tem banco, progresso e simulados próprios. */
export type CursoId = "pcpr2026" | "prf-adm";

export interface Curso {
  id: CursoId;
  /** Texto da miniatura quando o curso ainda não tem imagem própria. */
  sigla: string;
  nome: string;
  orgao: string;
  disponivel: boolean;
}

export const CURSOS: Curso[] = [
  {
    id: "pcpr2026",
    sigla: "PCPR",
    nome: "PCPR 2026 — Agente de Polícia Judiciária",
    orgao: "Polícia Civil do Paraná · Banca FGV",
    disponivel: true,
  },
  {
    id: "prf-adm",
    sigla: "PRF",
    nome: "PRF — Administrativo",
    orgao: "Polícia Rodoviária Federal · área administrativa",
    disponivel: false,
  },
];

/** Só devolve cursos que já podem ser abertos; qualquer outro valor cai na central. */
export function cursoAbrivel(id: string | null): CursoId | null {
  const curso = CURSOS.find((c) => c.id === id);
  return curso && curso.disponivel ? curso.id : null;
}
