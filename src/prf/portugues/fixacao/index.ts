import type { QuestaoFixacao } from "../tipos";
import { FIX_MAPA } from "./mapa";
import { FIX_SUBSTANTIVO } from "./substantivo";
import { FIX_ARTIGO } from "./artigo";
import { FIX_ADJETIVO } from "./adjetivo";
import { FIX_NUMERAL } from "./numeral";
import { FIX_PRONOME } from "./pronome";
import { FIX_VERBO } from "./verbo";
import { FIX_ADVERBIO } from "./adverbio";
import { FIX_PREPOSICAO } from "./preposicao";
import { FIX_CONJUNCAO } from "./conjuncao";
import { FIX_INTERJEICAO } from "./interjeicao";
import { FIX_MESMA_PALAVRA } from "./mesmaPalavra";

/** Questões autorais de treinamento (não oficiais), uma lista por lição. */
export const FIXACAO: QuestaoFixacao[] = [
  ...FIX_MAPA,
  ...FIX_SUBSTANTIVO,
  ...FIX_ARTIGO,
  ...FIX_ADJETIVO,
  ...FIX_NUMERAL,
  ...FIX_PRONOME,
  ...FIX_VERBO,
  ...FIX_ADVERBIO,
  ...FIX_PREPOSICAO,
  ...FIX_CONJUNCAO,
  ...FIX_INTERJEICAO,
  ...FIX_MESMA_PALAVRA,
];
