import { TEMAS_1 } from "./temas1";
import { TEMAS_2 } from "./temas2";
import { TEMAS_3 } from "./temas3";
import { TEMAS_4 } from "./temas4";
import { TEMAS_5 } from "./temas5";
import type { TemaRedacao } from "./tipos";

/** Os 25 temas, na ordem em que vêm no material: um por semana. */
export const TEMAS: TemaRedacao[] = [...TEMAS_1, ...TEMAS_2, ...TEMAS_3, ...TEMAS_4, ...TEMAS_5];

export const TEMA_POR_N = new Map(TEMAS.map((t) => [t.n, t]));
