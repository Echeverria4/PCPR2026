import { useEffect, useMemo, useState } from "react";
import type { GrupoCurso } from "../prf/aulas/tipos";
import { aulaCompleta } from "../prf/cursos/cronograma/plano";
import {
  CONCURSOS,
  MATERIAS_COMUNS,
  MATERIAS_OUTRAS,
  contagem,
  emQuantos,
  totalNoQuadro,
  type Cobre,
  type ConcursoId,
} from "./concursos2027";
import { INFO_CURSO, lerVistos } from "./dados";

/*
 * Quadro de ✓ das matérias da PRF Policial nos concursos de 2027 (pedido de 22/11/26): fica na Início e na aba
 * Concursos 2027. Embaixo de cada matéria, as aulas da PRF Policial já vistas, para acompanhar. Desde 23/11/26 a aba
 * mostra também as matérias que a PRF não cobra (História, Geografia, Execução Penal...), para ver cada concurso inteiro.
 */

export const SIMBOLO: Record<Cobre, string> = { sim: "✓", parte: "◐", nao: "–" };
export const TEXTO_COBRE: Record<Cobre, string> = { sim: "cai", parte: "cai em parte", nao: "não cai" };

export interface Avanco {
  feitas: number;
  total: number;
}

/** Aulas vistas da PRF Policial em cada matéria do quadro. As aulas só baixam quando o quadro aparece. */
export function useAvancoPrf(): Record<string, Avanco> | null {
  const [grupos, setGrupos] = useState<GrupoCurso[] | null>(null);
  useEffect(() => {
    let vivo = true;
    import("../prf/cursos/completo/prf-policial/grupos")
      .then((m) => vivo && setGrupos(m.GRUPOS))
      .catch(() => {
        // sem as aulas o quadro aparece sem o progresso
      });
    return () => {
      vivo = false;
    };
  }, []);
  return useMemo(() => {
    if (!grupos) return null;
    const vistos = new Set(lerVistos(INFO_CURSO["prf-policial"]).vistos);
    const porId = new Map(grupos.map((g) => [g.id, g]));
    const r: Record<string, Avanco> = {};
    for (const m of MATERIAS_COMUNS) {
      let feitas = 0;
      let total = 0;
      for (const id of m.grupos) {
        for (const a of porId.get(id)?.aulas ?? []) {
          if (a.blocos.length === 0) continue;
          total++;
          if (aulaCompleta(a, vistos)) feitas++;
        }
      }
      r[m.id] = { feitas, total };
    }
    return r;
  }, [grupos]);
}

export function BarraAvanco({ a }: { a: Avanco | undefined }) {
  if (!a || a.total === 0) return null;
  const pct = Math.round((a.feitas / a.total) * 100);
  return (
    <span className="cq-avanco">
      <span className="cq-barra" aria-hidden="true">
        <span style={{ width: `${pct}%` }} />
      </span>
      <span className="cq-avanco-num">
        {a.feitas}/{a.total} aulas
      </span>
    </span>
  );
}

interface Props {
  /** Na Início: as matérias que só caem na PRF ficam numa linha embaixo, sem as de fora da PRF e sem os totais. */
  resumido?: boolean;
  avanco: Record<string, Avanco> | null;
  onMateria: (id: string) => void;
}

interface Linha {
  id: string;
  curto: string;
  em: Record<ConcursoId, Cobre>;
}

function Celulas({ m }: { m: Linha }) {
  return (
    <>
      {CONCURSOS.map((c) => (
        <td key={c.id} className={`cq-${m.em[c.id]}`}>
          <span aria-hidden="true">{SIMBOLO[m.em[c.id]]}</span>
          <span className="cq-leitor">{`${c.nome}: ${TEXTO_COBRE[m.em[c.id]]}`}</span>
        </td>
      ))}
    </>
  );
}

function Grupo({ titulo }: { titulo: string }) {
  return (
    <tr className="cq-grupo">
      <th scope="colgroup" colSpan={CONCURSOS.length + 1}>
        {titulo}
      </th>
    </tr>
  );
}

const juntar = (nomes: string[]) => nomes.join(", ").replace(/, ([^,]*)$/, " e $1");

export default function QuadroMaterias({ resumido = false, avanco, onMateria }: Props) {
  const linhas = resumido ? MATERIAS_COMUNS.filter((m) => emQuantos(m) > 1) : MATERIAS_COMUNS;
  const soPrf = MATERIAS_COMUNS.filter((m) => emQuantos(m) === 1);
  return (
    <div className="cq-quadro">
      <table className="cq-tabela">
        <colgroup>
          <col />
          {CONCURSOS.map((c) => (
            <col key={c.id} className="cq-col" />
          ))}
        </colgroup>
        <thead>
          <tr>
            <th scope="col">Matéria</th>
            {CONCURSOS.map((c) => (
              <th scope="col" key={c.id} title={c.nome}>
                {c.curto}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!resumido && <Grupo titulo="Matérias da PRF Policial" />}
          {linhas.map((m) => (
            <tr key={m.id} className={emQuantos(m) === CONCURSOS.length ? "cq-em-todos" : undefined}>
              <th scope="row">
                <button type="button" className="cq-nome" onClick={() => onMateria(m.id)}>
                  {m.curto}
                </button>
                <BarraAvanco a={avanco?.[m.id]} />
              </th>
              <Celulas m={m} />
            </tr>
          ))}
        </tbody>
        {!resumido && (
          <tbody>
            <Grupo titulo="Fora da PRF: só nos outros concursos" />
            {MATERIAS_OUTRAS.map((m) => (
              <tr key={m.id}>
                <th scope="row">
                  <button type="button" className="cq-nome" onClick={() => onMateria(m.id)}>
                    {m.curto}
                  </button>
                </th>
                <Celulas m={m} />
              </tr>
            ))}
          </tbody>
        )}
        {!resumido && (
          <tfoot>
            <tr>
              <th scope="row">Matérias da PRF que caem</th>
              {CONCURSOS.map((c) => {
                const n = contagem(c.id);
                return (
                  <td key={c.id}>
                    {n.sim}
                    {n.parte > 0 && <span className="cq-parcial">+{n.parte}◐</span>}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th scope="row">Matérias no quadro todo</th>
              {CONCURSOS.map((c) => (
                <td key={c.id}>{totalNoQuadro(c.id)}</td>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
      <p className="cq-legenda">✓ cai · ◐ cai em parte · – não cai</p>
      {resumido && soPrf.length > 0 && <p className="cq-legenda">Só na PRF: {juntar(soPrf.map((m) => m.curto))}.</p>}
      {resumido && (
        <p className="cq-legenda">Fora da PRF, só nos outros: {juntar(MATERIAS_OUTRAS.map((m) => m.curto))}.</p>
      )}
    </div>
  );
}
