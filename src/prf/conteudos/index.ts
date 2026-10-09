import type { ConteudoPrf, MateriaPrfId } from "../../data/prf";
import { CONTEUDO_PRF_PT } from "./pt";
import { CONTEUDO_PRF_CON } from "./constitucional";
import { CONTEUDO_PRF_ADM } from "./administrativo";
import { CONTEUDO_PRF_INFO } from "./informatica";
import { CONTEUDO_PRF_ADMINISTRACAO } from "./administracao";
import { CONTEUDO_PRF_ARQ } from "./arquivologia";

/** Resumos próprios da PRF, um por item do conteúdo programático. */
export const CONTEUDO_PRF_POR_MATERIA: Record<MateriaPrfId, ConteudoPrf[]> = {
  pt: CONTEUDO_PRF_PT,
  etica: [],
  rlm: [],
  con: CONTEUDO_PRF_CON,
  adm: CONTEUDO_PRF_ADM,
  administracao: CONTEUDO_PRF_ADMINISTRACAO,
  arq: CONTEUDO_PRF_ARQ,
  info: CONTEUDO_PRF_INFO,
  leg: [],
};
