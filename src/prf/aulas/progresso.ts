import { gruposAtuais } from "./catalogo";
import type { EstadoEstudo } from "./estudo";
import type { AulaCurso, GrupoCurso } from "./tipos";

/* Progresso das aulas (blocos vistos) e a aula sugerida para continuar: usados nas Aulas e no acompanhamento semanal. */

/** Vídeos vistos da aula. Aula que ainda não está no Drive (sem vídeos) nunca fica completa. */
export function progresso(a: AulaCurso, vistos: Set<string>) {
  const feitos = a.blocos.filter((b) => vistos.has(b.id)).length;
  return { feitos, total: a.blocos.length, completa: a.blocos.length > 0 && feitos === a.blocos.length };
}

export function videosDoGrupo(g: GrupoCurso, vistos: Set<string>) {
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
export function pendente(g: GrupoCurso, vistos: Set<string>, desde = 0) {
  return g.aulas.slice(desde).find((a) => a.blocos.length > 0 && !progresso(a, vistos).completa);
}

type LocalAula = { grupo: GrupoCurso; aula: AulaCurso };

/** Índice das aulas do curso aberto; refeito quando o curso muda. */
let indice: { grupos: GrupoCurso[]; porId: Map<string, LocalAula> } | null = null;

function aulasPorId() {
  const grupos = gruposAtuais();
  if (indice?.grupos === grupos) return indice.porId;
  const porId = new Map<string, LocalAula>();
  for (const grupo of grupos) {
    for (const aula of grupo.aulas) if (!porId.has(aula.id)) porId.set(aula.id, { grupo, aula });
  }
  indice = { grupos, porId };
  return porId;
}

export function acharAula(id?: string) {
  if (!id) return null;
  return aulasPorId().get(id) ?? null;
}

export type Motivo = "contando" | "pausado" | "parou" | "proxima" | "comeco";

export interface Retomada {
  grupo: GrupoCurso;
  aula: AulaCurso;
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
  for (const grupo of gruposAtuais()) {
    const aula = pendente(grupo, vistos);
    if (aula) return { grupo, aula, motivo: comecou ? "proxima" : "comeco" };
  }
  return null;
}
