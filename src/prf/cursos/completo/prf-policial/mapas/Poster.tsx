import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Emoji, TextoEmoji } from "../../../../../icones/Emoji";
import type { MapaAula, RamoMapa } from "./tipos";

/** Peças do pôster dos mapas mentais, usadas na aba Mapas e no Livro do CTB. */

/** A partir daqui o mapa abre para os dois lados, com as linhas curvas; abaixo, vira árvore de cima para baixo. */
const TELA_LARGA = "(min-width: 900px)";

export const plural = (n: number, um: string, varios: string) => `${n} ${n === 1 ? um : varios}`;

/** "19/11" a partir da data ISO guardada no progresso. */
export function diaCurto(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

/** Barra de progresso fina, com o número no rótulo para leitor de tela. */
export function Barra({ feitos, total, rotulo }: { feitos: number; total: number; rotulo: string }) {
  return (
    <div
      className="prf-mapa-barra"
      role="progressbar"
      aria-label={rotulo}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={feitos}
    >
      <div className="prf-mapa-barra-fill" style={{ width: `${total ? (feitos / total) * 100 : 0}%` }} />
    </div>
  );
}

/** `**trecho**` vira destaque: a palavra que a prova cobra. */
export function comDestaque(texto: string): ReactNode {
  const partes = texto.split("**");
  if (partes.length < 3) return texto;
  return partes.map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : p));
}

export interface NotaProps {
  tipo: "macete" | "cuidado";
  titulo: string;
  texto: string;
  escondida: boolean;
  /** Só no modo memória: tocar mostra ou esconde a nota. */
  onAlternar?: () => void;
}

export function Nota({ tipo, titulo, texto, escondida, onAlternar }: NotaProps) {
  return (
    <section className={`prf-mapa-nota prf-mapa-nota-${tipo}`} data-mapa-nota={tipo}>
      <h3>
        {onAlternar ? (
          <button className="prf-mapa-nota-botao" aria-expanded={!escondida} onClick={onAlternar}>
            <span>
              <TextoEmoji texto={titulo} />
            </span>
            <span className="prf-mapa-pista">{escondida ? "toque para ver" : "toque para esconder"}</span>
          </button>
        ) : (
          <TextoEmoji texto={titulo} />
        )}
      </h3>
      {!escondida && <p>{comDestaque(texto)}</p>}
    </section>
  );
}

/** Pé do pôster: um trecho de asfalto com a faixa amarela e um cone, só de enfeite. */
export function Estrada() {
  return (
    <div className="prf-mapa-estrada" aria-hidden="true">
      <svg className="prf-mapa-cone" viewBox="0 0 32 32" focusable="false">
        <path d="M13 4h6l7.5 22h-21Z" fill="#f47b20" />
        <path d="M10.95 10H21.05L22.41 14H9.59Z M8.23 18H23.77L25.14 22H6.86Z" fill="#fff" />
        <rect x="3" y="26" width="26" height="3.5" rx="1.2" fill="#e8650f" />
      </svg>
    </div>
  );
}

/**
 * Ligação em ângulo reto, com as quinas arredondadas: sai do centro na horizontal, desce (ou sobe) no meio do caminho
 * e chega no ramo na horizontal. Como todos os ramos de um lado dividem o mesmo meio, as linhas formam um tronco só.
 */
function cotovelo(x1: number, y1: number, x2: number, y2: number): string {
  const n = (v: number) => Math.round(v * 10) / 10;
  const dx = x2 - x1;
  const dy = y2 - y1;
  if (Math.abs(dy) < 2) return `M${n(x1)} ${n(y1)}H${n(x2)}`;
  const sx = Math.sign(dx);
  const sy = Math.sign(dy);
  const xm = x1 + dx / 2;
  const r = Math.min(12, Math.abs(dy) / 2, Math.abs(dx) / 4);
  return (
    `M${n(x1)} ${n(y1)}H${n(xm - sx * r)}Q${n(xm)} ${n(y1)} ${n(xm)} ${n(y1 + sy * r)}` +
    `V${n(y2 - sy * r)}Q${n(xm)} ${n(y2)} ${n(xm + sx * r)} ${n(y2)}H${n(x2)}`
  );
}

export interface ArvoreProps {
  mapa: MapaAula;
  memoria: boolean;
  abertos: Set<string>;
  onAlternar: (chave: string) => void;
}

/**
 * O mapa em si. No celular é uma árvore de cima para baixo, com o tronco desenhado em CSS saindo da faixa do título.
 * Na tela larga, um quadro de asfalto fica no meio e os ramos dos dois lados, ligados por linhas medidas na página
 * depois de montada.
 */
export function Arvore({ mapa, memoria, abertos, onAlternar }: ArvoreProps) {
  const raiz = useRef<HTMLDivElement>(null);
  const [linhas, setLinhas] = useState<string[]>([]);
  const metade = Math.ceil(mapa.ramos.length / 2);
  const lados = [
    { lado: "esq", ramos: mapa.ramos.slice(0, metade), inicio: 0 },
    { lado: "dir", ramos: mapa.ramos.slice(metade), inicio: metade },
  ];

  useLayoutEffect(() => {
    const el = raiz.current;
    if (!el) return;

    function medir() {
      if (!el) return;
      const novas: string[] = [];
      const centro = el.querySelector<HTMLElement>("[data-mapa-centro]");
      if (centro && window.matchMedia(TELA_LARGA).matches) {
        const base = el.getBoundingClientRect();
        const c = centro.getBoundingClientRect();
        for (const lado of ["esq", "dir"]) {
          const topos = el.querySelectorAll<HTMLElement>(`[data-mapa-lado="${lado}"] [data-mapa-topo]`);
          topos.forEach((topo) => {
            const r = topo.getBoundingClientRect();
            // Sai do meio da lateral do centro e chega na altura da aba do ramo.
            const x1 = (lado === "esq" ? c.left : c.right) - base.left;
            const y1 = c.top - base.top + c.height / 2;
            const x2 = (lado === "esq" ? r.right : r.left) - base.left;
            const y2 = r.top - base.top + r.height / 2;
            novas.push(cotovelo(x1, y1, x2, y2));
          });
        }
      }
      setLinhas((antes) =>
        antes.length === novas.length && antes.every((d, i) => d === novas[i]) ? antes : novas,
      );
    }

    medir();
    if (typeof ResizeObserver === "undefined") return;
    const observador = new ResizeObserver(medir);
    observador.observe(el);
    el.querySelectorAll("[data-mapa-lado]").forEach((lista) => observador.observe(lista));
    return () => observador.disconnect();
  }, [mapa, memoria, abertos]);

  return (
    <div className="prf-mapa-arvore" ref={raiz} role="group" aria-label={`Mapa mental: ${mapa.centro.titulo}`}>
      <svg className="prf-mapa-ligacoes" aria-hidden="true" focusable="false">
        {linhas.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
      {/* O título fica na faixa do pôster; aqui no meio vai só o ícone, sobre o asfalto. */}
      <div className="prf-mapa-centro" data-mapa-centro aria-hidden="true">
        <span className="prf-mapa-centro-emoji">
          <Emoji e={mapa.centro.emoji} />
        </span>
        <span className="prf-mapa-centro-faixa" />
      </div>
      {lados.map(({ lado, ramos, inicio }) => (
        <ul key={lado} className={`prf-mapa-lado prf-mapa-lado-${lado}`} data-mapa-lado={lado}>
          {ramos.map((ramo, i) => {
            const indice = inicio + i;
            return (
              <Ramo
                key={indice}
                ramo={ramo}
                ultimo={indice === mapa.ramos.length - 1}
                memoria={memoria}
                aberto={!memoria || abertos.has(`r${indice}`)}
                onAlternar={() => onAlternar(`r${indice}`)}
              />
            );
          })}
        </ul>
      ))}
    </div>
  );
}

interface RamoProps {
  ramo: RamoMapa;
  ultimo: boolean;
  memoria: boolean;
  aberto: boolean;
  onAlternar: () => void;
}

function Ramo({ ramo, ultimo, memoria, aberto, onAlternar }: RamoProps) {
  const cabeca = (
    <>
      <span className="prf-mapa-ramo-emoji" aria-hidden="true">
        <Emoji e={ramo.emoji} />
      </span>
      <span className="prf-mapa-ramo-nome">
        <span className="prf-mapa-ramo-rotulo">{ramo.rotulo}</span>
        {memoria && (
          <span className="prf-mapa-pista">
            {aberto ? "toque para esconder" : `${plural(ramo.folhas.length, "ideia", "ideias")} · toque para ver`}
          </span>
        )}
      </span>
    </>
  );
  return (
    <li
      className={`prf-mapa-ramo prf-mapa-cor-${ramo.cor} ${ultimo ? "prf-mapa-ramo-ultimo" : ""}`}
      data-mapa-ramo
      data-mapa-aberto={aberto ? "sim" : "nao"}
    >
      <div className="prf-mapa-ramo-caixa">
        <h3 className="prf-mapa-ramo-titulo">
          {memoria ? (
            <button
              className="prf-mapa-ramo-topo"
              data-mapa-topo
              aria-expanded={aberto}
              onClick={onAlternar}
            >
              {cabeca}
            </button>
          ) : (
            <span className="prf-mapa-ramo-topo" data-mapa-topo>
              {cabeca}
            </span>
          )}
        </h3>
        {aberto ? (
          <ul className="prf-mapa-folhas">
            {ramo.folhas.map((folha, i) => (
              <li key={i}>{comDestaque(folha)}</li>
            ))}
          </ul>
        ) : (
          <div className="prf-mapa-vazias" aria-hidden="true">
            {ramo.folhas.map((_, i) => (
              <span key={i} />
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
