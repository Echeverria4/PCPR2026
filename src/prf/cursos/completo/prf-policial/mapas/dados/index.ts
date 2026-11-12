import type { MapaAula } from "../tipos";
import { MAPAS_ADM_A } from "./adm-a";
import { MAPAS_ADM_B } from "./adm-b";
import { MAPAS_CONSTITUCIONAL } from "./constitucional";
import { MAPAS_ESPANHOL } from "./espanhol";
import { MAPAS_ESPECIAL } from "./especial";
import { MAPAS_ETICA } from "./etica";
import { MAPAS_FISICA } from "./fisica";
import { MAPAS_GEOPOLITICA } from "./geopolitica";
import { MAPAS_INFO } from "./info";
import { MAPAS_INGLES } from "./ingles";
import { MAPAS_PENAL } from "./penal";
import { MAPAS_PROC } from "./proc";
import { MAPAS_PT } from "./pt";
import { MAPAS_RLM } from "./rlm";
import { MAPAS_TRANSITO } from "./transito";

/**
 * Cada matéria entra aqui quando o arquivo dela fica pronto. A ordem na tela é a do catálogo do curso,
 * não a desta lista, e a matéria só aparece na aba quando tem pelo menos um mapa.
 */
export const MAPAS: MapaAula[] = [...MAPAS_PT, ...MAPAS_RLM, ...MAPAS_INFO, ...MAPAS_FISICA, ...MAPAS_ETICA, ...MAPAS_GEOPOLITICA, ...MAPAS_INGLES, ...MAPAS_ESPANHOL, ...MAPAS_TRANSITO, ...MAPAS_ADM_A, ...MAPAS_ADM_B, ...MAPAS_CONSTITUCIONAL, ...MAPAS_PENAL, ...MAPAS_PROC, ...MAPAS_ESPECIAL];
