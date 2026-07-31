import type { ModeloMental, SubjectId } from "../../lib/types";
import { MODELOS_MENTAIS_PT } from "./pt";
import { MODELOS_MENTAIS_TI } from "./ti";
import { MODELOS_MENTAIS_FOR } from "./for";
import { MODELOS_MENTAIS_LEG } from "./leg";
import { MODELOS_MENTAIS_PP } from "./pp";
import { MODELOS_MENTAIS_PEN } from "./pen";
import { MODELOS_MENTAIS_CON } from "./constitucional";
import { MODELOS_MENTAIS_ADM } from "./adm";
import { MODELOS_MENTAIS_DH } from "./dh";
import { MODELOS_MENTAIS_PR } from "./pr";
import { MODELOS_MENTAIS_CONT } from "./cont";
import { MODELOS_MENTAIS_EST } from "./est";
import { MODELOS_MENTAIS_RLM } from "./rlm";

export const MODELOS_MENTAIS_POR_MATERIA: Record<SubjectId, ModeloMental[]> = {
  pt: MODELOS_MENTAIS_PT,
  ti: MODELOS_MENTAIS_TI,
  for: MODELOS_MENTAIS_FOR,
  leg: MODELOS_MENTAIS_LEG,
  pp: MODELOS_MENTAIS_PP,
  pen: MODELOS_MENTAIS_PEN,
  con: MODELOS_MENTAIS_CON,
  adm: MODELOS_MENTAIS_ADM,
  dh: MODELOS_MENTAIS_DH,
  pr: MODELOS_MENTAIS_PR,
  cont: MODELOS_MENTAIS_CONT,
  est: MODELOS_MENTAIS_EST,
  rlm: MODELOS_MENTAIS_RLM,
};

export function modelosMentaisPorMateria(materia: SubjectId): ModeloMental[] {
  return MODELOS_MENTAIS_POR_MATERIA[materia] ?? [];
}
