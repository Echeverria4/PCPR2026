import type { MateriaPrfId, QuestaoPrf } from "../../data/prf";
import { QUESTOES_PRF_PT } from "./pt";

/** Banco da PRF: questões próprias, escritas a partir do conteúdo programático e da lei em vigor. */
export const QUESTOES_PRF_POR_MATERIA: Record<MateriaPrfId, QuestaoPrf[]> = {
  pt: QUESTOES_PRF_PT,
  etica: [],
  rlm: [],
  con: [],
  adm: [],
  administracao: [],
  arq: [],
  info: [],
  leg: [],
};

export const BANCO_PRF: QuestaoPrf[] = Object.values(QUESTOES_PRF_POR_MATERIA).flat();
