import type { ReactNode } from "react";
import { isSupabaseConfigured } from "../lib/supabase";
import pcprBrasao from "../assets/pcpr-brasao.png";

type AbaPrincipal =
  | "home"
  | "conteudo"
  | "videos"
  | "provas"
  | "apostas"
  | "concurso"
  | "tempos"
  | "modelos-mentais";

interface LayoutProps {
  children: ReactNode;
  userEmail: string | null;
  mostrarVoltar: boolean;
  onVoltar: () => void;
  onIrParaAuth: () => void;
  onLogout: () => void;
  abaAtiva?: AbaPrincipal;
  onTrocarAba?: (aba: AbaPrincipal) => void;
}

export default function Layout({
  children,
  userEmail,
  mostrarVoltar,
  onVoltar,
  onIrParaAuth,
  onLogout,
  abaAtiva,
  onTrocarAba,
}: LayoutProps) {
  return (
    <div className="app-shell">
      <div className="topo-fixo">
        <header className="topbar">
          <div className="topbar-titulo" onClick={onVoltar}>
            <img src={pcprBrasao} alt="Brasão da Polícia Civil do Paraná" className="brasao" />
            <div>
              <h1>Operação PCPR 2026</h1>
              <div className="topbar-sub">Agente de Polícia Judiciária · Banca FGV</div>
            </div>
          </div>
          <div className="topbar-acoes">
            {mostrarVoltar && (
              <button className="botao" onClick={onVoltar}>
                ← Início
              </button>
            )}
            {isSupabaseConfigured ? (
              userEmail ? (
                <>
                  <span className="topbar-email">{userEmail}</span>
                  <button className="botao" onClick={onLogout}>
                    Sair
                  </button>
                </>
              ) : (
                <button className="botao" onClick={onIrParaAuth}>
                  Entrar / sincronizar
                </button>
              )
            ) : (
              <span title="Configure VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY para sincronizar entre dispositivos">
                Modo local
              </span>
            )}
          </div>
        </header>
        {!mostrarVoltar && abaAtiva && onTrocarAba && (
          <nav className="tabs">
            <button
              className={`tab ${abaAtiva === "home" ? "tab-ativa" : ""}`}
              onClick={() => onTrocarAba("home")}
            >
              Treino
            </button>
            <button
              className={`tab ${abaAtiva === "conteudo" ? "tab-ativa" : ""}`}
              onClick={() => onTrocarAba("conteudo")}
            >
              📚 Conteúdo
            </button>
            <button
              className={`tab ${abaAtiva === "videos" ? "tab-ativa" : ""}`}
              onClick={() => onTrocarAba("videos")}
            >
              ▶ Vídeos
            </button>
            <button
              className={`tab ${abaAtiva === "provas" ? "tab-ativa" : ""}`}
              onClick={() => onTrocarAba("provas")}
            >
              📄 Provas reais
            </button>
            <button
              className={`tab ${abaAtiva === "apostas" ? "tab-ativa" : ""}`}
              onClick={() => onTrocarAba("apostas")}
            >
              🎯 Apostas
            </button>
            <button
              className={`tab ${abaAtiva === "concurso" ? "tab-ativa" : ""}`}
              onClick={() => onTrocarAba("concurso")}
            >
              📋 Concurso
            </button>
            <button
              className={`tab ${abaAtiva === "tempos" ? "tab-ativa" : ""}`}
              onClick={() => onTrocarAba("tempos")}
            >
              ⏱ Tempos
            </button>
            <button
              className={`tab ${abaAtiva === "modelos-mentais" ? "tab-ativa" : ""}`}
              onClick={() => onTrocarAba("modelos-mentais")}
            >
              🧠 Modelos Mentais
            </button>
          </nav>
        )}
      </div>
      <main className="conteudo">{children}</main>
      <footer className="rodape">
        Material de estudo não oficial, produzido a partir do Edital 01/2026 PCPR (FGV) para fins de treino.
      </footer>
    </div>
  );
}
