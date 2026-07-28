import type { ConteudoTopico, SubjectId } from "../../lib/types";
import { CONTEUDO_PT } from "./pt";
import { CONTEUDO_TI } from "./ti";
import { CONTEUDO_FOR } from "./for";
import { CONTEUDO_LEG } from "./leg";
import { CONTEUDO_PP } from "./pp";
import { CONTEUDO_PEN } from "./pen";
import { CONTEUDO_CON } from "./constitucional";
import { CONTEUDO_ADM } from "./adm";
import { CONTEUDO_DH } from "./dh";
import { CONTEUDO_PR } from "./pr";
import { CONTEUDO_CONT } from "./cont";
import { CONTEUDO_EST } from "./est";
import { CONTEUDO_RLM } from "./rlm";

export const CONTEUDO_POR_MATERIA: Record<SubjectId, ConteudoTopico[]> = {
  pt: CONTEUDO_PT,
  ti: CONTEUDO_TI,
  for: CONTEUDO_FOR,
  leg: CONTEUDO_LEG,
  pp: CONTEUDO_PP,
  pen: CONTEUDO_PEN,
  con: CONTEUDO_CON,
  adm: CONTEUDO_ADM,
  dh: CONTEUDO_DH,
  pr: CONTEUDO_PR,
  cont: CONTEUDO_CONT,
  est: CONTEUDO_EST,
  rlm: CONTEUDO_RLM,
};

export function conteudoPorMateria(materia: SubjectId): ConteudoTopico[] {
  return CONTEUDO_POR_MATERIA[materia] ?? [];
}
