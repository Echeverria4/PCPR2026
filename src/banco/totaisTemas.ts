import type { TemaPt } from "./temasPt";

/**
 * Português da PRF Policial por tema, para a Central (que não baixa as questões). Atualizar quando entrar questão
 * de Português em qualquer curso. Redação oficial fica fora: está escondida no treino.
 */
export const TOTAIS_TEMAS_PT_POL: Partial<Record<TemaPt, { proprias: number; "prf-adm": number; pcpr2026: number }>> = {
  "pt.ortografia": { proprias: 6, "prf-adm": 8, pcpr2026: 3 },
  "pt.classes": { proprias: 6, "prf-adm": 3, pcpr2026: 1 },
  "pt.conectivos": { proprias: 6, "prf-adm": 4, pcpr2026: 2 },
  "pt.pronomes": { proprias: 7, "prf-adm": 4, pcpr2026: 1 },
  "pt.verbos": { proprias: 7, "prf-adm": 2, pcpr2026: 0 },
  "pt.vozes": { proprias: 6, "prf-adm": 3, pcpr2026: 1 },
  "pt.periodo-simples": { proprias: 7, "prf-adm": 7, pcpr2026: 1 },
  "pt.periodo-composto": { proprias: 8, "prf-adm": 6, pcpr2026: 2 },
  "pt.pontuacao": { proprias: 8, "prf-adm": 8, pcpr2026: 2 },
  "pt.concordancia": { proprias: 8, "prf-adm": 8, pcpr2026: 3 },
  "pt.regencia-crase": { proprias: 8, "prf-adm": 18, pcpr2026: 1 },
  "pt.coesao": { proprias: 6, "prf-adm": 4, pcpr2026: 2 },
  "pt.semantica": { proprias: 6, "prf-adm": 7, pcpr2026: 3 },
  "pt.tipologia": { proprias: 7, "prf-adm": 9, pcpr2026: 3 },
  "pt.interpretacao": { proprias: 6, "prf-adm": 34, pcpr2026: 6 },
};
