export function formatarSegundos(totalSegundos: number): string {
  const s = Math.max(0, Math.round(totalSegundos));
  const min = Math.floor(s / 60);
  const seg = s % 60;
  return `${min}:${String(seg).padStart(2, "0")}`;
}

export function formatarMs(ms: number): string {
  return formatarSegundos(ms / 1000);
}

/** "h:mm:ss" para o relógio regressivo do simulado. */
export function formatarRelogio(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/** "+h:mm" contado do início da prova. */
export function formatarMarco(min: number): string {
  const total = Math.max(0, Math.round(min));
  return `+${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}

/** Horário do relógio no dia da prova (início às 13h). */
export function horarioProva(min: number): string {
  const total = 13 * 60 + Math.round(min);
  return `${Math.floor(total / 60)}h${String(total % 60).padStart(2, "0")}`;
}
