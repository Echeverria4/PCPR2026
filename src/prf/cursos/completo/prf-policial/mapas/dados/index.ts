import type { MapaAula } from "../tipos";
import { MAPAS_ETICA } from "./etica";

/**
 * Cada matéria entra aqui quando o arquivo dela fica pronto. A ordem na tela é a do catálogo do curso,
 * não a desta lista, e a matéria só aparece na aba quando tem pelo menos um mapa.
 */
export const MAPAS: MapaAula[] = [...MAPAS_ETICA];
