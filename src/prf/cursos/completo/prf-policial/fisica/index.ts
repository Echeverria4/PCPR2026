import { comExemplos, type AulaEscrita } from "../../tipos";
import { EXEMPLOS_FISICA_1 } from "./exemplos1";
import { EXEMPLOS_FISICA_2 } from "./exemplos2";
import { AULA as a01 } from "./a01";
import { AULA as a02 } from "./a02";
import { AULA as a03 } from "./a03";
import { AULA as a04 } from "./a04";
import { AULA as a05 } from "./a05";
import { AULA as a06 } from "./a06";
import { AULA as a07 } from "./a07";
import { AULA as a08 } from "./a08";
import { AULA as a09 } from "./a09";

export const AULAS_FISICA: AulaEscrita[] = comExemplos([a01, a02, a03, a04, a05, a06, a07, a08, a09], {
  ...EXEMPLOS_FISICA_1,
  ...EXEMPLOS_FISICA_2,
});
