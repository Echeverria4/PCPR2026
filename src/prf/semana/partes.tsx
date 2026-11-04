import type { ReactNode } from "react";

/** Seta das semanas: desenhada, porque o ‹ › da fonte condensada fica miúdo. */
export function Seta({ caminho }: { caminho: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path d={caminho} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface NumeroProps {
  n: number;
  titulo: string;
  valor: string;
  antes: string;
  children?: ReactNode;
}

export function Numero({ n, titulo, valor, antes, children }: NumeroProps) {
  return (
    <section className="prf-acomp-num" aria-label={titulo}>
      <h3 className="prf-acomp-num-titulo">
        <span className="prf-acomp-n" aria-hidden="true">
          {n}
        </span>
        {titulo}
      </h3>
      <p className="prf-acomp-valor">{valor}</p>
      {children}
      <p className="prf-acomp-antes">{antes}</p>
    </section>
  );
}
