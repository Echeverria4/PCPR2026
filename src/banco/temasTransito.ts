/**
 * Temas de Legislação de Trânsito que recebem questões de outros cursos: só os crimes de trânsito (transito-10).
 * O nome não começa igual a um assunto do próprio curso.
 */
export type TemaTransito = "transito.crimes";

export const TEMAS_TRANSITO: { id: TemaTransito; nome: string }[] = [{ id: "transito.crimes", nome: "Crimes de trânsito" }];

export const AULA_POL_DO_TEMA_TRANSITO: Record<TemaTransito, string> = { "transito.crimes": "transito-10" };

/** PCPR, Direito Penal: os crimes do CTB ficam questão por questão. */
export const TEMA_TOPICO_PCPR_TRANSITO: Record<string, TemaTransito | null> = {};

export const TEMA_QUESTAO_PCPR_TRANSITO: Record<string, TemaTransito | null> = {
  "pen-042": "transito.crimes",
  "pen-043": "transito.crimes",
};
