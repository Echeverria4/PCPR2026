import type { MateriaPrfId, QuestaoPrf } from "../../data/prf";
import { QUESTOES_PRF_PT } from "./pt";
import { QUESTOES_PRF_CON } from "./constitucional";
import { QUESTOES_PRF_ADM } from "./administrativo";
import { QUESTOES_PRF_INFO } from "./informatica";
import { QUESTOES_PRF_ADMINISTRACAO } from "./administracao";
import { QUESTOES_PRF_ARQ } from "./arquivologia";
import { QUESTOES_PRF_LEG } from "./legislacao";
import { QUESTOES_PRF_ETICA } from "./etica";
import { QUESTOES_PRF_RLM } from "./raciocinio";
import { QUESTOES_PRF_PROVA_PCPR26 } from "./provaPcpr2026";
import { QUESTOES_PRF_INEDITAS } from "./ineditas";

/** Questões próprias, escritas a partir do conteúdo programático e da lei em vigor (origem "banco"). */
const PROPRIAS: Record<MateriaPrfId, QuestaoPrf[]> = {
  pt: QUESTOES_PRF_PT,
  etica: QUESTOES_PRF_ETICA,
  rlm: QUESTOES_PRF_RLM,
  con: QUESTOES_PRF_CON,
  adm: QUESTOES_PRF_ADM,
  administracao: QUESTOES_PRF_ADMINISTRACAO,
  arq: QUESTOES_PRF_ARQ,
  info: QUESTOES_PRF_INFO,
  leg: QUESTOES_PRF_LEG,
};

/**
 * Banco da PRF por matéria, com três origens:
 * - próprias (origem "banco");
 * - Banco 1: originais da prova PCPR 2026 (FGV) que cobram conteúdo do programa da PRF (origem "prova");
 * - Banco 2: inéditas autorais de nível 4 e 5, no padrão de cobrança daquela prova; não são da FGV (origem "inedita").
 */
export const QUESTOES_PRF_POR_MATERIA = Object.fromEntries(
  (Object.keys(PROPRIAS) as MateriaPrfId[]).map((m) => [
    m,
    [
      ...PROPRIAS[m],
      ...QUESTOES_PRF_PROVA_PCPR26.filter((q) => q.materia === m),
      ...QUESTOES_PRF_INEDITAS.filter((q) => q.materia === m),
    ],
  ]),
) as Record<MateriaPrfId, QuestaoPrf[]>;

export const BANCO_PRF: QuestaoPrf[] = Object.values(QUESTOES_PRF_POR_MATERIA).flat();
