import { comExemplos, comFormulas, type AulaEscrita } from "../../tipos";
import { EXEMPLOS_RLM_1 } from "./exemplos1";
import { EXEMPLOS_RLM_2 } from "./exemplos2";
import { EXEMPLOS_RLM_3 } from "./exemplos3";
import { FORMULAS_RLM } from "./formulas";
import { AULA as a01 } from "./a01";
import { AULA as a02 } from "./a02";
import { AULA as a03 } from "./a03";
import { AULA as a04 } from "./a04";
import { AULA as a05 } from "./a05";
import { AULA as a06 } from "./a06";
import { AULA as a07 } from "./a07";
import { AULA as a08 } from "./a08";
import { AULA as a09 } from "./a09";
import { AULA as a10 } from "./a10";
import { AULA as a11 } from "./a11";
import { AULA as a12 } from "./a12";
import { AULA as a13 } from "./a13";
import { AULA as a14 } from "./a14";
import { AULA as a15 } from "./a15";
import { AULA as a16 } from "./a16";
import { AULA as a17 } from "./a17";
import { AULA as a18 } from "./a18";
import { AULA as a19 } from "./a19";
import { AULA as a20 } from "./a20";
import { AULA as a21 } from "./a21";
import { AULA as a22 } from "./a22";
import { AULA as a23 } from "./a23";
import { AULA as a24 } from "./a24";
import { AULA as a25 } from "./a25";

export const AULAS_RLM: AulaEscrita[] = comFormulas(
  comExemplos([a01, a02, a03, a04, a05, a06, a07, a08, a09, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25], {
    ...EXEMPLOS_RLM_1,
    ...EXEMPLOS_RLM_2,
    ...EXEMPLOS_RLM_3,
  }),
  FORMULAS_RLM,
);
