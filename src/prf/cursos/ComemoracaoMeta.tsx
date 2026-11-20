import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CHAVE_SOM, Particulas, Som } from "../../components/FimDoSimulado";
import { Emoji } from "../../icones/Emoji";
import { idCatalogoAtual } from "../aulas/catalogo";
import { curto, useAgora, useEstudo } from "../aulas/estudo";
import { metaDeHoje, useMeta, type MetaHoje } from "../aulas/meta";

/** Dia (meia-noite, em ms) da última meta comemorada em cada curso. */
const chaveComemorada = (curso: string) => `curso:${curso}:metaComemorada:v1`;
/** Sem localStorage, a comemoração vale uma vez por dia nesta aba. */
const jaNestaAba = new Set<string>();

function jaComemorou(curso: string, dia: number): boolean {
  if (jaNestaAba.has(`${curso}:${dia}`)) return true;
  try {
    return localStorage.getItem(chaveComemorada(curso)) === String(dia);
  } catch {
    return false;
  }
}

function marcarComemorada(curso: string, dia: number) {
  jaNestaAba.add(`${curso}:${dia}`);
  try {
    localStorage.setItem(chaveComemorada(curso), String(dia));
  } catch {
    // armazenamento indisponível: vale o registro desta aba
  }
}

/** Fica de olho na meta do curso aberto: no momento em que ela é batida, comemora uma vez no dia. */
export default function ComemoracaoMeta() {
  const estudo = useEstudo();
  const meta = useMeta();
  const a = estudo.ativo;
  const agora = useAgora(a !== null && a.desde !== null);
  // Lidos juntos na renderização: o curso e o estado dele são sempre do mesmo catálogo.
  const curso = idCatalogoAtual();
  const hoje = metaDeHoje(estudo, meta, agora);
  const [festa, setFesta] = useState<MetaHoje | null>(null);

  useEffect(() => {
    if (!curso || festa || !hoje.batida || jaComemorou(curso, hoje.dia)) return;
    marcarComemorada(curso, hoje.dia);
    setFesta(hoje);
  }, [curso, festa, hoje]);

  return festa ? <FestaDaMeta hoje={festa} onFechar={() => setFesta(null)} /> : null;
}

function FestaDaMeta({ hoje, onFechar }: { hoje: MetaHoje; onFechar: () => void }) {
  const [reduzido] = useState(
    () => typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [mudo, setMudo] = useState(() => {
    try {
      return localStorage.getItem(CHAVE_SOM) === "0";
    } catch {
      return false;
    }
  });
  const somRef = useRef<Som | null>(null);
  if (somRef.current === null) somRef.current = new Som(mudo);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const botaoRef = useRef<HTMLButtonElement>(null);
  const fecharRef = useRef(onFechar);
  fecharRef.current = onFechar;

  // Fanfarra, canhões de confete, chuva e fogos: a mesma festa do simulado aprovado.
  useEffect(() => {
    const som = somRef.current!;
    const fx = canvasRef.current && !reduzido ? new Particulas(canvasRef.current) : null;
    const medir = () => fx?.medir();
    window.addEventListener("resize", medir);
    const timers: number[] = [];
    const em = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));
    em(120, () => {
      som.tocar("fanfarra");
      fx?.canhoes();
      fx?.chuva(3800);
    });
    if (fx) [550, 1200, 1950, 2800, 3700].forEach((ms) => em(ms, () => fx.fogos()));

    const anterior = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    botaoRef.current?.focus({ preventScroll: true });
    const tecla = (e: KeyboardEvent) => {
      som.destravar();
      if (e.key === "Escape") {
        e.preventDefault();
        fecharRef.current();
      } else if (e.key === "Tab") {
        // Só dois botões no diálogo: o foco não sai dele.
        const itens = Array.from(document.querySelectorAll<HTMLButtonElement>(".cm-overlay button"));
        const i = itens.indexOf(document.activeElement as HTMLButtonElement);
        e.preventDefault();
        itens[(i + (e.shiftKey ? itens.length - 1 : 1)) % itens.length]?.focus();
      }
    };
    document.addEventListener("keydown", tecla);

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("resize", medir);
      document.removeEventListener("keydown", tecla);
      document.body.style.overflow = overflow;
      fx?.parar();
      som.fechar();
      if (anterior && document.contains(anterior)) anterior.focus({ preventScroll: true });
    };
  }, [reduzido]);

  const alternarSom = () => {
    const novo = !mudo;
    setMudo(novo);
    somRef.current?.setMudo(novo);
    if (!novo) somRef.current?.destravar();
    try {
      localStorage.setItem(CHAVE_SOM, novo ? "0" : "1");
    } catch {
      /* armazenamento indisponível: só não lembra a escolha */
    }
  };

  return createPortal(
    <div
      className="fds-overlay fds-ok cm-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cm-titulo"
      aria-describedby="cm-sub"
      onPointerDown={() => somRef.current?.destravar()}
    >
      <div className="fds-fundo" aria-hidden="true" />
      <div className="cm-brilho" aria-hidden="true" />
      <canvas ref={canvasRef} className="fds-canvas" aria-hidden="true" />

      <div className="fds-topo">
        <button
          type="button"
          className="fds-icone"
          onClick={alternarSom}
          aria-pressed={!mudo}
          aria-label={mudo ? "Ligar o som" : "Desligar o som"}
          title={mudo ? "Ligar o som" : "Desligar o som"}
        >
          {mudo ? "🔇" : "🔊"}
        </button>
      </div>

      <div className="cm-conteudo">
        <div className="cm-alvo" aria-hidden="true">
          <Emoji e="🎯" />
        </div>
        <p className="cm-kicker">Meta de hoje</p>
        <h2 id="cm-titulo" className="cm-titulo">
          Meta batida!
        </h2>
        <p id="cm-sub" className="cm-sub">
          Você estudou <b>{curto(hoje.ms)}</b> hoje.
          <br />A meta era <b>{curto(hoje.meta)}</b>.
        </p>
        <p className="cm-frase">Constância é o que aprova. Amanhã tem mais.</p>
        <button ref={botaoRef} type="button" className="cm-botao" onClick={onFechar}>
          Continuar estudando
        </button>
      </div>
    </div>,
    document.body,
  );
}
