import type { TemaPrf } from "./tipos";
import { TEMAS_1 } from "./temas1";
import { TEMAS_2 } from "./temas2";
import { TEMAS_3 } from "./temas3";
import { TEMAS_4 } from "./temas4";
import { TEMAS_5 } from "./temas5";

export const TEMAS: TemaPrf[] = [...TEMAS_1, ...TEMAS_2, ...TEMAS_3, ...TEMAS_4, ...TEMAS_5];

export const TEMA_POR_N: Record<number, TemaPrf> = Object.fromEntries(TEMAS.map((t) => [t.n, t]));
