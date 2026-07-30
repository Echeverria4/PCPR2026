export function formatarSegundos(totalSegundos: number): string {
  const s = Math.max(0, Math.round(totalSegundos));
  const min = Math.floor(s / 60);
  const seg = s % 60;
  return `${min}:${String(seg).padStart(2, "0")}`;
}

export function formatarMs(ms: number): string {
  return formatarSegundos(ms / 1000);
}
