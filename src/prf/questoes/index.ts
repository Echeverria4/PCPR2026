import type { MateriaPrfId, QuestaoPrf } from "../../data/prf";
import { QUESTOES_PRF_PT } from "./pt";
import { QUESTOES_PRF_CON } from "./constitucional";
import { QUESTOES_PRF_ADM } from "./administrativo";
import { QUESTOES_PRF_INFO } from "./informatica";
import { QUESTOES_PRF_ADMINISTRACAO } from "./administracao";
import { QUESTOES_PRF_ARQ } from "./arquivologia";
import { QUESTOES_PRF_LEG } from "./legislacao";

/** Banco da PRF: questões próprias, escritas a partir do conteúdo programático e da lei em vigor. */
export const QUESTOES_PRF_POR_MATERIA: Record<MateriaPrfId, QuestaoPrf[]> = {
  pt: QUESTOES_PRF_PT,
  etica: [],
  rlm: [],
  con: QUESTOES_PRF_CON,
  adm: QUESTOES_PRF_ADM,
  administracao: QUESTOES_PRF_ADMINISTRACAO,
  arq: QUESTOES_PRF_ARQ,
  info: QUESTOES_PRF_INFO,
  leg: QUESTOES_PRF_LEG,
};

export const BANCO_PRF: QuestaoPrf[] = Object.values(QUESTOES_PRF_POR_MATERIA).flat();
