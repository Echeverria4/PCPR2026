import type { Licao } from "../tipos";
import { MAPA } from "./mapa";
import { SUBSTANTIVO } from "./substantivo";
import { ARTIGO } from "./artigo";
import { ADJETIVO } from "./adjetivo";
import { NUMERAL } from "./numeral";
import { PRONOME } from "./pronome";
import { VERBO } from "./verbo";
import { ADVERBIO } from "./adverbio";
import { PREPOSICAO } from "./preposicao";
import { CONJUNCAO } from "./conjuncao";
import { INTERJEICAO } from "./interjeicao";
import { MESMA_PALAVRA } from "./mesmaPalavra";

export const LICOES: Licao[] = [
  MAPA,
  SUBSTANTIVO,
  ARTIGO,
  ADJETIVO,
  NUMERAL,
  PRONOME,
  VERBO,
  ADVERBIO,
  PREPOSICAO,
  CONJUNCAO,
  INTERJEICAO,
  MESMA_PALAVRA,
];
