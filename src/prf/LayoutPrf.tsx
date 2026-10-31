import type { ReactNode } from "react";
import prfBrasao from "../assets/prf-brasao.png";
import { PRF_ULTIMO_EDITAL } from "../data/prf";
import { continuarEstudo, pausarEstudo, relogio, tempoAtivo, useAgora, useEstudo } from "./aulas/estudo";

export type AbaPrf = "home" | "aulas" | "semana" | "conteudo" | "portugues";

/** Cronômetro de estudo ligado: fica à vista em todas as telas, inclusive durante as questões. */
function ChipCronometro() {
  const { ativo } = useEstudo();
  const agora = useAgora(ativo !== null && ativo.desde !== null);
  if (!ativo) return null;
  const pausado = ativo.desde === null;
  return (
    <span className={`prf-crono-chip${pausado ? " prf-crono-chip-pausado" : ""}`} title={ativo.rotulo}>
      <span aria-label="Tempo de estudo">⏱ {relogio(tempoAtivo(ativo, agora))}</span>
      <button
        type="button"
        onClick={pausado ? continuarEstudo : pausarEstudo}
        aria-label={pausado ? "Continuar o cronômetro" : "Pausar o cronômetro"}
      >
        {pausado ? "▶" : "⏸"}
      </button>
    </span>
  );
}

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
            <ChipCronometro />
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
          <nav className="tabs prf-tabs">
            <button className={`tab ${abaAtiva === "home" ? "tab-ativa" : ""}`} onClick={() => onTrocarAba("home")}>
              Treino
            </button>
            <button className={`tab ${abaAtiva === "aulas" ? "tab-ativa" : ""}`} onClick={() => onTrocarAba("aulas")}>
              🎬 Aulas
            </button>
            <button className={`tab ${abaAtiva === "semana" ? "tab-ativa" : ""}`} onClick={() => onTrocarAba("semana")}>
              📈 Semana
            </button>
            <button
              className={`tab ${abaAtiva === "conteudo" ? "tab-ativa" : ""}`}
              onClick={() => onTrocarAba("conteudo")}
            >
              📚 Conteúdo
            </button>
            <button
              className={`tab ${abaAtiva === "portugues" ? "tab-ativa" : ""}`}
              onClick={() => onTrocarAba("portugues")}
            >
              ✍️ Português Inteligente
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
