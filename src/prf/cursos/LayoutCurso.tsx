import { lazy, Suspense, useEffect, useRef, type ReactNode } from "react";
import { alternarCaderno, usePainelCaderno } from "../caderno/painel";
import { ChipCronometro } from "../LayoutPrf";
import { Emoji, TextoEmoji } from "../../icones/Emoji";

const CadernoPrf = lazy(() => import("../caderno/CadernoPrf"));

export type AbaCurso = "treino" | "aulas" | "semana" | "cronograma" | "resumos" | "redacao" | "mapas" | "livro";

const ABAS_PADRAO: { id: AbaCurso; rotulo: string }[] = [
  { id: "aulas", rotulo: "🎬 Aulas" },
  { id: "semana", rotulo: "📈 Semana" },
  { id: "cronograma", rotulo: "📅 Cronograma" },
];

interface LayoutCursoProps {
  nome: string;
  brasao: string;
  /** Texto alternativo do brasão. */
  brasaoAlt: string;
  abaAtiva: AbaCurso;
  onTrocarAba: (aba: AbaCurso) => void;
  onTrocarCurso?: () => void;
  /** Abas do curso; a primeira é a tela inicial. */
  abas?: { id: AbaCurso; rotulo: string }[];
  sub?: string;
  /** Durante o quiz: esconde as abas e mostra a volta. */
  mostrarVoltar?: boolean;
  onVoltar?: () => void;
  children: ReactNode;
}

/** A moldura da PRF ADM para os outros cursos. Sem `abas`, o curso tem só as aulas e a semana. */
export default function LayoutCurso({
  nome,
  brasao,
  brasaoAlt,
  abaAtiva,
  onTrocarAba,
  onTrocarCurso,
  abas = ABAS_PADRAO,
  sub = "Pré-edital · aulas e PDFs",
  mostrarVoltar = false,
  onVoltar,
  children,
}: LayoutCursoProps) {
  const caderno = usePainelCaderno();
  const irAoInicio = () => (mostrarVoltar && onVoltar ? onVoltar() : onTrocarAba(abas[0].id));
  const topo = useRef<HTMLDivElement>(null);
  // A barra fixa muda de altura com a largura (no celular passa de 170px). O scroll-margin-top dos artigos do Livro e
  // dos itens de infração usa esta medida, para o começo do texto não ficar escondido embaixo dela.
  useEffect(() => {
    const el = topo.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const raiz = document.documentElement.style;
    const medir = () => raiz.setProperty("--topo-fixo", `${Math.round(el.getBoundingClientRect().height)}px`);
    medir();
    const observador = new ResizeObserver(medir);
    observador.observe(el);
    return () => {
      observador.disconnect();
      raiz.removeProperty("--topo-fixo");
    };
  }, []);
  return (
    <div className="app-shell">
      <div className="topo-fixo" ref={topo}>
        <header className="topbar">
          <div className="topbar-titulo" onClick={irAoInicio}>
            <img src={brasao} alt={brasaoAlt} className="brasao" />
            <div>
              <h1>{nome}</h1>
              <div className="topbar-sub">{sub}</div>
            </div>
          </div>
          <div className="topbar-acoes">
            <ChipCronometro />
            <button className="botao" onClick={alternarCaderno} aria-expanded={caderno.aberto}>
              <Emoji e="📝" /> Caderno
            </button>
            {mostrarVoltar ? (
              <button className="botao" onClick={onVoltar}>
                ← Início
              </button>
            ) : (
              onTrocarCurso && (
                <button className="botao" onClick={onTrocarCurso} title="Voltar para a Central de Estudos">
                  <Emoji e="🏠" /> Central
                </button>
              )
            )}
            <span title="O progresso deste curso fica só neste navegador e não sincroniza entre aparelhos">
              Progresso neste aparelho
            </span>
          </div>
        </header>
        {!mostrarVoltar && (
          <nav className="tabs prf-tabs">
            {abas.map((a) => (
              <button
                key={a.id}
                className={`tab ${abaAtiva === a.id ? "tab-ativa" : ""}`}
                onClick={() => onTrocarAba(a.id)}
              >
                <TextoEmoji texto={a.rotulo} />
              </button>
            ))}
          </nav>
        )}
      </div>
      <main className="conteudo">{children}</main>
      <footer className="rodape">Material de estudo não oficial, para fins de treino.</footer>
      {caderno.aberto && (
        <Suspense fallback={null}>
          <CadernoPrf />
        </Suspense>
      )}
    </div>
  );
}
