import type { ReactNode } from "react";
import type { DesenhoId } from "./tipos";

/**
 * Pictogramas dos mapas, desenhados aqui mesmo: quadro de 48 × 48, traço de 2,5 com pontas redondas e sem preenchimento.
 * A cor do traço vem do texto em volta (`currentColor`); `prf-mapa-d-acento` pinta o detalhe em dourado.
 */
const DESENHOS: Record<DesenhoId, ReactNode> = {
  viatura: (
    <>
      <path d="M4 32v-5.5c0-1.4 1-2.6 2.4-2.9L12 22.5l4.4-7.9c.5-1 1.6-1.6 2.7-1.6h9.8c1.1 0 2.2.6 2.7 1.6L36 22.5l5.6 1.1c1.4.3 2.4 1.5 2.4 2.9V32" />
      <path d="M4 32h5.5M18.5 32h11M38.5 32H44M13 22.5h22M24 13v9.5" />
      <circle cx="14" cy="32" r="4.5" />
      <circle cx="34" cy="32" r="4.5" />
      <path className="prf-mapa-d-acento" d="M20.5 13V9.5h7V13M16 7.5l-2-2M32 7.5l2-2M24 6V3.5" />
    </>
  ),
  rodovia: (
    <>
      <path d="M8 44L19 5M40 44L29 5" />
      <path className="prf-mapa-d-acento" d="M24 7v4.5M24 17.5V24M24 31v10" />
      <path d="M3 44h10M35 44h10" />
    </>
  ),
  balanca: (
    <>
      <path d="M24 7v34M15 41h18M9 13h30" />
      <path d="M9 13L3.5 27M9 13l5.5 14M39 13l-5.5 14M39 13l5.5 14" />
      <path className="prf-mapa-d-acento" d="M2.5 27h13a6.5 6.5 0 0 1-13 0ZM32.5 27h13a6.5 6.5 0 0 1-13 0Z" />
      <circle cx="24" cy="7" r="2" />
    </>
  ),
  escudo: (
    <>
      <path d="M24 5l15 5v11c0 10-6.5 17.5-15 22C15.5 38.5 9 31 9 21V10Z" />
      <path className="prf-mapa-d-acento" d="M17 23l5 5 9-10" />
    </>
  ),
  documento: (
    <>
      <path d="M12 5h16l9 9v29H12Z" />
      <path d="M28 5v9h9" />
      <path className="prf-mapa-d-acento" d="M17 22h14M17 28h14M17 34h8" />
    </>
  ),
  relogio: (
    <>
      <circle cx="24" cy="26" r="16" />
      <path d="M20.5 4h7M24 4v6M36.5 13l2.5-2.5" />
      <path className="prf-mapa-d-acento" d="M24 16v10l6.5 4" />
    </>
  ),
  algema: (
    <>
      <circle cx="12" cy="29" r="8.5" />
      <circle cx="36" cy="29" r="8.5" />
      <path className="prf-mapa-d-acento" d="M17 21.5c1.5-4 4-6 7-6s5.5 2 7 6" />
      <path className="prf-mapa-d-cheio" d="M12 27.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM36 27.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
    </>
  ),
  semaforo: (
    <>
      <rect x="15" y="4" width="18" height="32" rx="4" />
      <path d="M24 36v8M17.5 44h13" />
      <circle className="prf-mapa-d-luz-para" cx="24" cy="11" r="3.2" />
      <circle className="prf-mapa-d-luz-atencao" cx="24" cy="20" r="3.2" />
      <circle className="prf-mapa-d-luz-siga" cx="24" cy="29" r="3.2" />
    </>
  ),
  placa: (
    <>
      <path d="M18 4h12l8 8v12l-8 8H18l-8-8V12Z" />
      <path d="M24 32v12M18.5 44h11" />
      <path className="prf-mapa-d-acento" d="M16.5 18h15" />
    </>
  ),
  cerebro: (
    <>
      <path d="M24 10c-2-3.5-7-4.5-10-1.5-4 0-7 3.5-6 7.5-3 2.5-3 7.5 0 10-1 4 2 7.5 6 7.5 2 4 8 4 10 0" />
      <path d="M24 10c2-3.5 7-4.5 10-1.5 4 0 7 3.5 6 7.5 3 2.5 3 7.5 0 10 1 4-2 7.5-6 7.5-2 4-8 4-10 0" />
      <path d="M24 10v23.5" />
      <path className="prf-mapa-d-acento" d="M14.5 15.5c2.5 0 4 1.5 4 4M13 25.5c2.5-1 5 .5 5.5 3M33.5 15.5c-2.5 0-4 1.5-4 4M35 25.5c-2.5-1-5 .5-5.5 3" />
    </>
  ),
  alerta: (
    <>
      <path d="M24 6l19.5 34h-39Z" />
      <path className="prf-mapa-d-acento" d="M24 18v11.5M24 34.5v.3" />
    </>
  ),
  pessoas: (
    <>
      <circle cx="10" cy="19" r="4" />
      <path d="M3 37c0-4.5 2.5-8 7-8" />
      <circle cx="38" cy="19" r="4" />
      <path d="M45 37c0-4.5-2.5-8-7-8" />
      <circle className="prf-mapa-d-acento" cx="24" cy="15" r="5.5" />
      <path className="prf-mapa-d-acento" d="M13.5 39c0-6.5 4.5-11 10.5-11s10.5 4.5 10.5 11" />
    </>
  ),
  globo: (
    <>
      <circle cx="24" cy="24" r="18" />
      <ellipse cx="24" cy="24" rx="8" ry="18" />
      <path d="M9.5 14h29M9.5 34h29" />
      <path className="prf-mapa-d-acento" d="M6 24h36" />
    </>
  ),
  livro: (
    <>
      <path d="M24 12c-4-3-10-4-18-4v28c8 0 14 1 18 4 4-3 10-4 18-4V8c-8 0-14 1-18 4Z" />
      <path d="M24 12v28" />
      <path className="prf-mapa-d-acento" d="M11 15.5c3 .2 5.8.8 8 2M11 22.5c3 .2 5.8.8 8 2M37 15.5c-3 .2-5.8.8-8 2M37 22.5c-3 .2-5.8.8-8 2" />
    </>
  ),
  bussola: (
    <>
      <circle cx="24" cy="24" r="18" />
      <path d="M24 6v3M24 39v3M6 24h3M39 24h3" />
      <path className="prf-mapa-d-acento" d="M33 15l-5.5 12.5L15 33l5.5-12.5Z" />
      <path className="prf-mapa-d-cheio" d="M24 22.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
    </>
  ),
};

export const DESENHOS_IDS = Object.keys(DESENHOS) as DesenhoId[];

interface DesenhoProps {
  id: DesenhoId;
  /** Lado do quadro em px. */
  tamanho?: number;
}

/** Sempre decorativo: o sentido está no texto ao lado, então o leitor de tela pula o desenho. */
export function Desenho({ id, tamanho = 48 }: DesenhoProps) {
  return (
    <svg
      className="prf-mapa-desenho"
      viewBox="0 0 48 48"
      width={tamanho}
      height={tamanho}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {DESENHOS[id]}
    </svg>
  );
}
