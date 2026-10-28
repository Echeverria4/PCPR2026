import type { ModeloPt } from "../tipos";
import { MODELOS_BASE } from "./base";
import { MODELOS_SINTAXE } from "./sintaxe";
import { MODELOS_CONCORDANCIA_REGENCIA } from "./concordanciaRegencia";
import { MODELOS_PONTUACAO_SENTIDO } from "./pontuacaoSentido";
import { MODELOS_TEXTO } from "./texto";
import { MODELOS_ESTILO } from "./estilo";

/** Modelos mentais de todo o programa de português, na ordem dos grupos. */
export const MODELOS: ModeloPt[] = [
  ...MODELOS_BASE,
  ...MODELOS_SINTAXE,
  ...MODELOS_CONCORDANCIA_REGENCIA,
  ...MODELOS_PONTUACAO_SENTIDO,
  ...MODELOS_TEXTO,
  ...MODELOS_ESTILO,
];
