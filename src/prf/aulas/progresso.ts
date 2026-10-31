import { AULAS_DRIVE, type AulaDrive, type GrupoAulasDrive } from "./aulasDrive";
import type { EstadoEstudo } from "./estudo";

/* Progresso das aulas (blocos vistos) e a aula sugerida para continuar: usados nas Aulas e no acompanhamento semanal. */

/** Vídeos vistos da aula. Aula que ainda não está no Drive (sem vídeos) nunca fica completa. */
export function progresso(a: AulaDrive, vistos: Set<string>) {
  const feitos = a.blocos.filter((b) => vistos.has(b.id)).length;
  return { feitos, total: a.blocos.length, completa: a.blocos.length > 0 && feitos === a.blocos.length };
}

export function videosDoGrupo(g: GrupoAulasDrive, vistos: Set<string>) {
  let feitos = 0;
  let total = 0;
  for (const a of g.aulas) {
    const p = progresso(a, vistos);
    feitos += p.feitos;
    total += p.total;
  }
  return { feitos, total };
}

/** Primeira aula do grupo, da posição `desde` em diante, que já está no Drive e não foi concluída. */
export function pendente(g: GrupoAulasDrive, vistos: Set<string>, desde = 0) {
  return g.aulas.slice(desde).find((a) => a.blocos.length > 0 && !progresso(a, vistos).completa);
}

const AULA_POR_ID = new Map<string, { grupo: GrupoAulasDrive; aula: AulaDrive }>();
for (const grupo of AULAS_DRIVE) {
  for (const aula of grupo.aulas) if (!AULA_POR_ID.has(aula.id)) AULA_POR_ID.set(aula.id, { grupo, aula });
}

export function acharAula(id?: string) {
  if (!id) return null;
  return AULA_POR_ID.get(id) ?? null;
}

export type Motivo = "contando" | "pausado" | "parou" | "proxima" | "comeco";

export interface Retomada {
  grupo: GrupoAulasDrive;
  aula: AulaDrive;
  motivo: Motivo;
}

/** Aula sugerida no topo: a do cronômetro; senão a última estudada (ou a seguinte, se acabou); senão a 1ª pendente. */
export function aulaParaRetomar(estudo: EstadoEstudo, vistos: Set<string>): Retomada | null {
  const ativa = acharAula(estudo.ativo?.aula);
  if (ativa) return { ...ativa, motivo: estudo.ativo?.desde === null ? "pausado" : "contando" };
  for (let i = estudo.sessoes.length - 1; i >= 0; i--) {
    const ultima = acharAula(estudo.sessoes[i].aula);
    if (!ultima) continue;
    if (!progresso(ultima.aula, vistos).completa) return { ...ultima, motivo: "parou" };
    const seguinte = pendente(ultima.grupo, vistos, ultima.grupo.aulas.indexOf(ultima.aula) + 1);
    if (seguinte) return { grupo: ultima.grupo, aula: seguinte, motivo: "proxima" };
    break;
  }
  const comecou = estudo.sessoes.length > 0 || vistos.size > 0;
  for (const grupo of AULAS_DRIVE) {
    const aula = pendente(grupo, vistos);
    if (aula) return { grupo, aula, motivo: comecou ? "proxima" : "comeco" };
  }
  return null;
}
