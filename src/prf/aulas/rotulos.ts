import { PRF_MATERIA_MAP, type MateriaPrfId } from "../../data/prf";
import { grupoAtual } from "./catalogo";
import type { AulaCurso } from "./tipos";

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

export const iconeGrupo = (grupo: string) => grupoAtual(grupo)?.icone ?? ICONE_GRUPO[grupo] ?? "🎬";

/** Cor da matéria do grupo; o Nivelamento fica com o dourado do app. */
export const corDoGrupo = (grupo: string) =>
  grupoAtual(grupo)?.cor ?? PRF_MATERIA_MAP[grupo as MateriaPrfId]?.cor ?? "var(--ouro)";

type RotuloAula = Pick<AulaCurso, "n" | "nome" | "tipo">;

/** Nome que aparece como título: a aula sem nome próprio fica com o número ("Tópico 01"). */
export const tituloAula = (a: RotuloAula) => a.nome || `${a.tipo ?? "Aula"} ${a.n}`;

export const nomeAula = (a: RotuloAula) => (a.n && a.nome ? `${a.tipo ?? "Aula"} ${a.n} · ${a.nome}` : tituloAula(a));
