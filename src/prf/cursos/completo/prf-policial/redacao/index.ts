import type { TemaPrf } from "./tipos";
import { TEMAS_1 } from "./temas1";
import { TEMAS_2 } from "./temas2";
import { TEMAS_3 } from "./temas3";
import { TEMAS_4 } from "./temas4";
import { TEMAS_5 } from "./temas5";
import { TEMAS_6 } from "./temas6";

export const TEMAS: TemaPrf[] = [...TEMAS_1, ...TEMAS_2, ...TEMAS_3, ...TEMAS_4, ...TEMAS_5, ...TEMAS_6];

/** A ordem de estudo segue os blocos: o tema 11 está no bloco 4, junto dos outros da PEC 18/2025. */
export const ORDEM_TEMAS: number[] = [...TEMAS].sort((a, b) => a.bloco - b.bloco || a.n - b.n).map((t) => t.n);

export const TEMA_POR_N: Record<number, TemaPrf> = Object.fromEntries(TEMAS.map((t) => [t.n, t]));
