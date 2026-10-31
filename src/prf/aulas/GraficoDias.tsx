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
}

/** Tempo de estudo por dia, com o valor do maior dia e a dica de cada barra ao passar o mouse ou focar. */
export default function GraficoDias({ dias, titulo, vazio, hoje }: GraficoDiasProps) {
  const maior = Math.max(0, ...dias.map((d) => d.ms));
  const escala = Math.max(maior, ESCALA_MINIMA);
  return (
    <figure className="prf-semana">
      <figcaption className="prf-semana-titulo">{titulo}</figcaption>
      <div className="prf-semana-barras">
        {maior === 0 && <p className="prf-semana-vazio">{vazio}</p>}
        {dias.map((d) => {
          const eHoje = d.dia === hoje;
          const futuro = d.dia > hoje;
          const tempo = futuro ? "ainda não chegou" : d.ms > 0 ? duracao(d.ms) : "sem estudo";
          return (
            <div
              key={d.dia}
              className={`prf-semana-col${eHoje ? " prf-semana-hoje" : ""}${futuro ? " prf-semana-futuro" : ""}`}
              role="img"
              tabIndex={0}
              aria-label={`${eHoje ? "Hoje" : diaLongo(d.dia)}: ${tempo}`}
              data-tip={`${eHoje ? "hoje" : diaCurto(d.dia)} ${diaMes(d.dia)} · ${
                futuro ? "ainda não chegou" : d.ms > 0 ? curto(d.ms) : "sem estudo"
              }`}
            >
              <span className="prf-semana-area">
                {maior > 0 && d.ms === maior && <span className="prf-semana-valor">{curto(d.ms)}</span>}
                {!futuro && (
                  <span
                    className={`prf-semana-barra${d.ms > 0 ? "" : " prf-semana-zero"}`}
                    style={d.ms > 0 ? { height: Math.max(3, Math.round((d.ms / escala) * ALTURA_BARRA)) } : undefined}
                  />
                )}
              </span>
              <span className="prf-semana-dia" aria-hidden="true">
                {eHoje ? "hoje" : diaCurto(d.dia)}
              </span>
            </div>
          );
        })}
      </div>
    </figure>
  );
}
