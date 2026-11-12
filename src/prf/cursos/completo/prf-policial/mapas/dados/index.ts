import type { MapaAula } from "../tipos";
import { MAPAS_ETICA } from "./etica";
import { MAPAS_FISICA } from "./fisica";
import { MAPAS_INFO } from "./info";
import { MAPAS_PT } from "./pt";
import { MAPAS_RLM } from "./rlm";

/**
 * Cada matéria entra aqui quando o arquivo dela fica pronto. A ordem na tela é a do catálogo do curso,
 * não a desta lista, e a matéria só aparece na aba quando tem pelo menos um mapa.
 */
export const MAPAS: MapaAula[] = [...MAPAS_PT, ...MAPAS_RLM, ...MAPAS_INFO, ...MAPAS_FISICA, ...MAPAS_ETICA];
