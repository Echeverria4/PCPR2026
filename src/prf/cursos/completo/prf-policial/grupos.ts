// As aulas da PRF Policial sem a língua estrangeira que o usuário não vai fazer (ver lingua.ts).
import { GRUPOS as TODOS } from "../../dados/prf-policial";
import { semLinguaFora } from "./lingua";

export const GRUPOS = semLinguaFora(TODOS);
