import type { ConteudoPrf, MateriaPrfId } from "../../data/prf";
import { CONTEUDO_PRF_PT } from "./pt";

/** Resumos próprios da PRF, um por item do conteúdo programático. */
export const CONTEUDO_PRF_POR_MATERIA: Record<MateriaPrfId, ConteudoPrf[]> = {
  pt: CONTEUDO_PRF_PT,
  etica: [],
  rlm: [],
  con: [],
  adm: [],
  administracao: [],
  arq: [],
  info: [],
  leg: [],
};
