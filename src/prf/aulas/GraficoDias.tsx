import { curto, diaCurto, diaLongo, diaMes, duracao } from "./estudo";

export type Dia = { dia: number; ms: number };

/** A barra só enche a altura toda a partir de meia hora no dia. */
const ESCALA_MINIMA = 30 * 60 * 1000;
const ALTURA_BARRA = 64;

interface GraficoDiasProps {
  dias: Dia[];
  titulo: string;
  /** Recado no lugar das barras quando nenhum dia tem tempo. */
  vazio: string;
  /** Meia-noite de hoje: marca o dia de hoje; os dias depois dele ainda não chegaram. */
  hoje: number;
  /** Meta de cada dia em ms, na ordem de `dias` (0 = sem meta): vira um traço na coluna. */
  metas?: number[];
}

/** Tempo de estudo por dia, com o valor do maior dia e a dica de cada barra ao passar o mouse ou focar. */
export default function GraficoDias({ dias, titulo, vazio, hoje, metas }: GraficoDiasProps) {
  const maior = Math.max(0, ...dias.map((d) => d.ms));
  const escala = Math.max(maior, ESCALA_MINIMA, ...dias.map((d, i) => (d.dia > hoje ? 0 : (metas?.[i] ?? 0))));
  const altura = (ms: number) => Math.round((ms / escala) * ALTURA_BARRA);
  const comMeta = maior > 0 && dias.some((d, i) => d.dia <= hoje && (metas?.[i] ?? 0) > 0);
  return (
    <figure className="prf-semana">
      <figcaption className="prf-semana-titulo">{titulo}</figcaption>
      <div className="prf-semana-barras">
        {maior === 0 && <p className="prf-semana-vazio">{vazio}</p>}
        {dias.map((d, i) => {
          const eHoje = d.dia === hoje;
          const futuro = d.dia > hoje;
          const meta = futuro ? 0 : (metas?.[i] ?? 0);
          const batida = meta > 0 && d.ms >= meta;
          const tempo = futuro ? "ainda não chegou" : d.ms > 0 ? duracao(d.ms) : "sem estudo";
          const barra = d.ms > 0 ? Math.max(3, altura(d.ms)) : 0;
          const traco = comMeta && meta > 0 ? altura(meta) : -1;
          // O valor do maior dia sobe para cima do traço da meta quando a barra ainda não chegou nele.
          const folga = Math.max(4, traco + 5 - barra);
          return (
            <div
              key={d.dia}
              className={`prf-semana-col${eHoje ? " prf-semana-hoje" : ""}${futuro ? " prf-semana-futuro" : ""}${
                batida ? " prf-semana-batida" : ""
              }`}
              role="img"
              tabIndex={0}
              aria-label={`${eHoje ? "Hoje" : diaLongo(d.dia)}: ${tempo}${
                meta > 0 ? `; meta de ${duracao(meta)}${batida ? ", batida" : ""}` : ""
              }`}
              data-tip={`${eHoje ? "hoje" : diaCurto(d.dia)} ${diaMes(d.dia)} · ${
                futuro ? "ainda não chegou" : d.ms > 0 ? curto(d.ms) : "sem estudo"
              }${meta > 0 ? ` · meta ${curto(meta)}${batida ? " ✓" : ""}` : ""}`}
            >
              <span className="prf-semana-area">
                {maior > 0 && d.ms === maior && (
                  <span className="prf-semana-valor" style={folga !== 4 ? { marginBottom: folga } : undefined}>
                    {curto(d.ms)}
                  </span>
                )}
                {!futuro && (
                  <span
                    className={`prf-semana-barra${d.ms > 0 ? "" : " prf-semana-zero"}`}
                    style={d.ms > 0 ? { height: barra } : undefined}
                  />
                )}
                {traco >= 0 && <span className="prf-semana-meta" style={{ bottom: traco }} aria-hidden="true" />}
              </span>
              <span className="prf-semana-dia" aria-hidden="true">
                {eHoje ? "hoje" : diaCurto(d.dia)}
                {batida && <span className="prf-semana-check"> ✓</span>}
              </span>
            </div>
          );
        })}
      </div>
      {comMeta && (
        <p className="prf-semana-legenda" aria-hidden="true">
          <span className="prf-semana-legenda-meta" /> meta do dia · <b>✓</b> meta batida
        </p>
      )}
    </figure>
  );
}
