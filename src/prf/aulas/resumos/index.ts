import type { ResumoAula } from "./tipos";
import { PT } from "./pt";
import { ETICA } from "./etica";
import { RLM } from "./rlm";
import { CON } from "./constitucional";
import { ADM } from "./adm";
import { ADMINISTRACAO } from "./administracao";
import { ARQ } from "./arq";
import { INFO } from "./info";
import { LEG } from "./leg";

export type { ItemResumo, ResumoAula } from "./tipos";

/** Resumo de cada aula das matérias, pelo id da aula (o Nivelamento não tem). */
export const RESUMOS: Record<string, ResumoAula> = {
  ...PT,
  ...ETICA,
  ...RLM,
  ...CON,
  ...ADM,
  ...ADMINISTRACAO,
  ...ARQ,
  ...INFO,
  ...LEG,
};
