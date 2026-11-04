import { lazy, Suspense, type ReactNode } from "react";
import { alternarCaderno, usePainelCaderno } from "../caderno/painel";
import { ChipCronometro } from "../LayoutPrf";

const CadernoPrf = lazy(() => import("../caderno/CadernoPrf"));

export type AbaCurso = "aulas" | "semana";

interface LayoutCursoProps {
  nome: string;
  brasao: string;
  /** Texto alternativo do brasão. */
  brasaoAlt: string;
  abaAtiva: AbaCurso;
  onTrocarAba: (aba: AbaCurso) => void;
  onTrocarCurso?: () => void;
  children: ReactNode;
}

/** A moldura da PRF ADM para os cursos que têm só as aulas: sem Treino, Conteúdo e Português Inteligente. */
export default function LayoutCurso({
  nome,
  brasao,
  brasaoAlt,
  abaAtiva,
  onTrocarAba,
  onTrocarCurso,
  children,
}: LayoutCursoProps) {
  const caderno = usePainelCaderno();
  return (
    <div className="app-shell">
      <div className="topo-fixo">
        <header className="topbar">
          <div className="topbar-titulo" onClick={() => onTrocarAba("aulas")}>
            <img src={brasao} alt={brasaoAlt} className="brasao" />
            <div>
              <h1>{nome}</h1>
              <div className="topbar-sub">Pré-edital · aulas e PDFs</div>
            </div>
          </div>
          <div className="topbar-acoes">
            <ChipCronometro />
            <button className="botao" onClick={alternarCaderno} aria-expanded={caderno.aberto}>
              📝 Caderno
            </button>
            {onTrocarCurso && (
              <button className="botao" onClick={onTrocarCurso} title="Voltar para a central de cursos">
                ⇄ Cursos
              </button>
            )}
            <span title="O progresso deste curso fica só neste navegador e não sincroniza entre aparelhos">
              Progresso neste aparelho
            </span>
          </div>
        </header>
        <nav className="tabs prf-tabs">
          <button className={`tab ${abaAtiva === "aulas" ? "tab-ativa" : ""}`} onClick={() => onTrocarAba("aulas")}>
            🎬 Aulas
          </button>
          <button className={`tab ${abaAtiva === "semana" ? "tab-ativa" : ""}`} onClick={() => onTrocarAba("semana")}>
            📈 Semana
          </button>
        </nav>
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
