import type { CursoId } from "../../../data/cursos";

/**
 * Números do banco para o cartão da central, que não baixa as questões. Atualizar a cada lote.
 * questoes = só as do próprio curso; compartilhadas = as que vêm de outros cursos pelo banco por tema.
 */
export const TOTAIS_BANCO: Partial<
  Record<CursoId, { questoes: number; resumos: number; materias: number; compartilhadas?: number }>
> = {
  "prf-policial": { questoes: 2164, resumos: 215, materias: 18, compartilhadas: 985 },
  pmpr: { questoes: 370, resumos: 37, materias: 4, compartilhadas: 0 },
};
