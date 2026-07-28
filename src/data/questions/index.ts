import type { Question, SubjectId } from "../../lib/types";
import { QUESTOES_PT } from "./pt";
import { QUESTOES_TI } from "./ti";
import { QUESTOES_FOR } from "./for";
import { QUESTOES_LEG } from "./leg";
import { QUESTOES_PP } from "./pp";
import { QUESTOES_PEN } from "./pen";
import { QUESTOES_CON } from "./constitucional";
import { QUESTOES_ADM } from "./adm";
import { QUESTOES_DH } from "./dh";
import { QUESTOES_PR } from "./pr";
import { QUESTOES_CONT } from "./cont";
import { QUESTOES_EST } from "./est";
import { QUESTOES_RLM } from "./rlm";

export const QUESTOES_POR_MATERIA: Record<SubjectId, Question[]> = {
  pt: QUESTOES_PT,
  ti: QUESTOES_TI,
  for: QUESTOES_FOR,
  leg: QUESTOES_LEG,
  pp: QUESTOES_PP,
  pen: QUESTOES_PEN,
  con: QUESTOES_CON,
  adm: QUESTOES_ADM,
  dh: QUESTOES_DH,
  pr: QUESTOES_PR,
  cont: QUESTOES_CONT,
  est: QUESTOES_EST,
  rlm: QUESTOES_RLM,
};

export const BANCO: Question[] = Object.values(QUESTOES_POR_MATERIA).flat();

export function questoesPorMateria(materia: SubjectId): Question[] {
  return QUESTOES_POR_MATERIA[materia] ?? [];
}
