/*
 * O que o acompanhamento semanal de qualquer curso usa: semana de segunda a domingo e as anotações da semana,
 * numa chave por curso (a da PRF continua prf:semana:v1). Sem nada do banco de questões, que é só da PRF.
 */

/** Segunda-feira 0h da semana de `ms`: a semana vai de segunda a domingo, no fuso do aparelho. */
export function inicioSemana(ms: number): number {
  const d = new Date(ms);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return d.getTime();
}

/** Soma dias de calendário (a meia-noite continua meia-noite). */
export function maisDias(ms: number, dias: number): number {
  const d = new Date(ms);
  d.setDate(d.getDate() + dias);
  return d.getTime();
}

// ---------- Anotações da semana ----------

let chaveNotas = "prf:semana:v1";

/** Passa a usar as anotações de outro curso. */
export function trocarNotas(chave: string) {
  chaveNotas = chave;
}

export interface NotasSemana {
  /** O que travou na semana. */
  dificuldades?: string;
  /** O que mudar na semana seguinte. */
  ajustes?: string;
  /** Meta de horas líquidas para a semana seguinte. */
  metaHoras?: number;
}

/** As notas ficam pela data da segunda-feira da semana (2026-10-26). */
export function chaveSemana(inicio: number): string {
  const d = new Date(inicio);
  const dois = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${dois(d.getMonth() + 1)}-${dois(d.getDate())}`;
}

export function lerNotas(): Record<string, NotasSemana> {
  try {
    const p: unknown = JSON.parse(localStorage.getItem(chaveNotas) ?? "{}");
    return p && typeof p === "object" && !Array.isArray(p) ? (p as Record<string, NotasSemana>) : {};
  } catch {
    return {};
  }
}

export function gravarNotas(todas: Record<string, NotasSemana>) {
  try {
    localStorage.setItem(chaveNotas, JSON.stringify(todas));
  } catch {
    // localStorage indisponível: as anotações valem só enquanto a aba estiver aberta
  }
}
