import type { ReactNode } from "react";
import prfBrasao from "../assets/prf-brasao.png";
import { PRF_ULTIMO_EDITAL } from "../data/prf";

export type AbaPrf = "home" | "conteudo";

interface LayoutPrfProps {
  children: ReactNode;
  mostrarVoltar: boolean;
  onVoltar: () => void;
  onTrocarCurso?: () => void;
  abaAtiva: AbaPrf;
  onTrocarAba: (aba: AbaPrf) => void;
}

export default function LayoutPrf({
  children,
  mostrarVoltar,
  onVoltar,
  onTrocarCurso,
  abaAtiva,
  onTrocarAba,
}: LayoutPrfProps) {
  return (
    <div className="app-shell">
      <div className="topo-fixo">
        <header className="topbar">
          <div className="topbar-titulo" onClick={onVoltar}>
            <img src={prfBrasao} alt="Brasão da Polícia Rodoviária Federal" className="brasao" />
            <div>
              <h1>PRF — Agente Administrativo</h1>
              <div className="topbar-sub">Pré-edital · base: edital de {PRF_ULTIMO_EDITAL.ano}</div>
            </div>
          </div>
          <div className="topbar-acoes">
            {mostrarVoltar ? (
              <button className="botao" onClick={onVoltar}>
                ← Início
              </button>
            ) : (
              onTrocarCurso && (
                <button className="botao" onClick={onTrocarCurso} title="Voltar para a central de cursos">
                  ⇄ Cursos
                </button>
              )
            )}
            <span title="O progresso da PRF fica só neste navegador e não sincroniza entre aparelhos">
              Progresso neste aparelho
            </span>
          </div>
        </header>
        {!mostrarVoltar && (
          <nav className="tabs">
            <button className={`tab ${abaAtiva === "home" ? "tab-ativa" : ""}`} onClick={() => onTrocarAba("home")}>
              Treino
            </button>
            <button
              className={`tab ${abaAtiva === "conteudo" ? "tab-ativa" : ""}`}
              onClick={() => onTrocarAba("conteudo")}
            >
              📚 Conteúdo
            </button>
          </nav>
        )}
      </div>
      <main className="conteudo">{children}</main>
      <footer className="rodape">
        Material de estudo não oficial, montado sobre o conteúdo programático do edital de {PRF_ULTIMO_EDITAL.ano} da
        PRF para fins de treino. O novo edital pode mudar matérias e formato.
      </footer>
    </div>
  );
}
