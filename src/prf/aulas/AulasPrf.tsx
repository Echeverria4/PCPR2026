import { useMemo } from "react";
import type { TentativaPrf } from "../armazenamento";
import { ultimaRespostaPrf } from "../sessoes";
import AulasCurso, { type ExtrasAula, type TelaAulas } from "./AulasCurso";
import type { AulaDrive } from "./aulasDrive";
import { QUESTOES_POR_AULA, doNivelamento, fixacaoDaAula, questoesDaAula } from "./fixacao";
import { RESUMOS } from "./resumos";

export type { TelaAulas };

interface AulasPrfProps {
  tela: TelaAulas;
  onTela: (tela: TelaAulas) => void;
  tentativas: TentativaPrf[];
  onFixar: (aula: AulaDrive, quantidade: number) => void;
}

/** A aba Aulas da PRF ADM: as telas de qualquer curso, mais o resumo e as questões do banco da PRF. */
export default function AulasPrf({ tela, onTela, tentativas, onFixar }: AulasPrfProps) {
  const extras = useMemo<ExtrasAula>(
    () => ({
      questoesTexto: `${QUESTOES_POR_AULA} questões`,
      fixacao: (a) => fixacaoDaAula(a as AulaDrive),
      doNivelamento: (a) => doNivelamento(a as AulaDrive),
      resumo: (a) => RESUMOS[a.id],
      banco: (a) => {
        const { materia, topicos } = a as AulaDrive;
        const ultima = ultimaRespostaPrf(tentativas);
        const c = { certas: 0, erradas: 0, nunca: 0 };
        for (const q of questoesDaAula(materia, topicos)) {
          const acertou = ultima.get(q.id);
          if (acertou === undefined) c.nunca++;
          else if (acertou) c.certas++;
          else c.erradas++;
        }
        return c;
      },
      onFixar: (a, quantidade) => onFixar(a as AulaDrive, quantidade),
    }),
    [tentativas, onFixar],
  );
  return <AulasCurso tela={tela} onTela={onTela} extras={extras} />;
}
