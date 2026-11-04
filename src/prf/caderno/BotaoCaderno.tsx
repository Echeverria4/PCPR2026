import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { createPortal } from "react-dom";

/**
 * O 📝 da aula: um clique abre o caderno, e segurar e arrastar leva o botão para onde quiser, até por cima do vídeo.
 * O lugar é uma fração do espaço livre (a conta está em .prf-cad-movido), então o botão não sai da tela nem quando a
 * janela muda de tamanho ou o caderno abre ao lado.
 */

const CHAVE = "prf:caderno:botao:v1";
/** Até aqui a mão só tremeu: ainda é um clique. */
const TREMOR = 6;
/** A mesma margem de .prf-cad-movido. */
const MARGEM = 8;

interface Lugar {
  x: number;
  y: number;
}

const entre0e1 = (n: number) => Math.min(1, Math.max(0, n));

function lerLugar(): Lugar | null {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE) ?? "null");
    return Number.isFinite(v?.x) && Number.isFinite(v?.y) ? { x: entre0e1(v.x), y: entre0e1(v.y) } : null;
  } catch {
    return null;
  }
}

function gravarLugar(lugar: Lugar) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(lugar));
  } catch {
    // Sem espaço no navegador: o lugar vale até recarregar a página.
  }
}

/** A conta de .prf-cad-movido ao contrário: de onde o canto do botão deve ficar para a fração do espaço livre. */
function lugarEm(botao: HTMLElement, esquerda: number, topo: number): Lugar {
  const { width, height } = botao.getBoundingClientRect();
  const { clientWidth, clientHeight } = document.documentElement;
  const painel = document.querySelector(".prf-cad-painel")?.getBoundingClientRect();
  const aoLado = !!painel && painel.left > 0;
  const livreL = painel && aoLado ? painel.left : clientWidth;
  const livreA = painel && !aoLado ? painel.top : clientHeight;
  return {
    x: entre0e1((esquerda - MARGEM) / (livreL - 2 * MARGEM - width)),
    y: entre0e1((topo - MARGEM) / (livreA - 2 * MARGEM - height)),
  };
}

export default function BotaoCaderno({ onAbrir }: { onAbrir: () => void }) {
  const [lugar, setLugar] = useState(lerLugar);
  const [arrastando, setArrastando] = useState(false);
  /** Onde a mão pegou o botão, enquanto segura. */
  const pegada = useRef<{ x: number; y: number; dx: number; dy: number } | null>(null);
  /** O navegador manda um clique ao soltar: depois de arrastar, ele não abre o caderno. */
  const foiArrasto = useRef(false);

  const pegar = (e: PointerEvent<HTMLButtonElement>) => {
    if (e.button !== 0) return;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    pegada.current = { x: e.clientX, y: e.clientY, dx: e.clientX - left, dy: e.clientY - top };
    foiArrasto.current = false;
    // Sem a captura o movimento se perde ao passar por cima do vídeo, que é outra página dentro de um iframe.
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const mover = (e: PointerEvent<HTMLButtonElement>) => {
    const p = pegada.current;
    if (!p) return;
    if (!foiArrasto.current) {
      if (Math.hypot(e.clientX - p.x, e.clientY - p.y) < TREMOR) return;
      foiArrasto.current = true;
      setArrastando(true);
    }
    setLugar(lugarEm(e.currentTarget, e.clientX - p.dx, e.clientY - p.dy));
  };

  const soltar = (e: PointerEvent<HTMLButtonElement>) => {
    const p = pegada.current;
    pegada.current = null;
    setArrastando(false);
    if (!p || !foiArrasto.current) return;
    const novo = lugarEm(e.currentTarget, e.clientX - p.dx, e.clientY - p.dy);
    setLugar(novo);
    gravarLugar(novo);
  };

  const desistir = () => {
    pegada.current = null;
    foiArrasto.current = false;
    setArrastando(false);
  };

  const clicar = () => {
    if (!foiArrasto.current) onAbrir();
    foiArrasto.current = false;
  };

  const classes = ["prf-cad-flutua"];
  if (lugar) classes.push("prf-cad-movido");
  if (arrastando) classes.push("prf-cad-arrastando");

  // Portal: a entrada animada da tela tiraria um botão fixo do lugar.
  return createPortal(
    <button
      type="button"
      className={classes.join(" ")}
      style={lugar ? ({ "--prf-cad-bx": lugar.x, "--prf-cad-by": lugar.y } as CSSProperties) : undefined}
      onPointerDown={pegar}
      onPointerMove={mover}
      onPointerUp={soltar}
      onPointerCancel={desistir}
      onClick={clicar}
      aria-label="Anotar no caderno"
      title="Clique para anotar. Segure e arraste para mudar de lugar."
    >
      <span aria-hidden="true">📝</span>
      <span className="prf-cad-flutua-texto">Anotar</span>
    </button>,
    document.body,
  );
}
