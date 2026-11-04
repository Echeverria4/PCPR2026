import { PRF_MATERIA_MAP, type MateriaPrfId } from "../../data/prf";
import type { AulaDrive } from "./aulasDrive";

/** Ícone, cor e nome das aulas: os mesmos na aba Aulas e no Caderno. */
const ICONE_GRUPO: Record<string, string> = {
  niv: "🚀",
  pt: "📖",
  etica: "⚖️",
  rlm: "🧩",
  con: "🏛️",
  adm: "📜",
  administracao: "📊",
  arq: "🗂️",
  info: "💻",
  leg: "🚓",
};

export const iconeGrupo = (grupo: string) => ICONE_GRUPO[grupo] ?? "🎬";

/** Cor da matéria do grupo; o Nivelamento fica com o dourado do app. */
export const corDoGrupo = (grupo: string) => PRF_MATERIA_MAP[grupo as MateriaPrfId]?.cor ?? "var(--ouro)";

export const nomeAula = (a: Pick<AulaDrive, "n" | "nome">) => (a.n ? `Aula ${a.n} · ${a.nome}` : a.nome);
