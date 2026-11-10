import type { CursoId } from "../../../data/cursos";

/**
 * Números do banco para o cartão da central, que não baixa as questões. Atualizar a cada lote: o teste do banco
 * confere estes números com o que está nos arquivos das aulas.
 */
export const TOTAIS_BANCO: Partial<Record<CursoId, { questoes: number; resumos: number }>> = {
  "prf-policial": { questoes: 1407, resumos: 178 },
};
