import { lazy, Suspense, type ReactNode } from "react";
import { alternarCaderno, usePainelCaderno } from "../caderno/painel";
import { ChipCronometro } from "../LayoutPrf";

const CadernoPrf = lazy(() => import("../caderno/CadernoPrf"));

export type AbaCurso = "treino" | "aulas" | "semana" | "resumos" | "redacao" | "mapas";

const ABAS_PADRAO: { id: AbaCurso; rotulo: string }[] = [
  { id: "aulas", rotulo: "🎬 Aulas" },
  { id: "semana", rotulo: "📈 Semana" },
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
  return (
    <div className="app-shell">
      <div className="topo-fixo">
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
              📝 Caderno
            </button>
            {mostrarVoltar ? (
              <button className="botao" onClick={onVoltar}>
                ← Início
              </button>
            ) : (
              onTrocarCurso && (
                <button className="botao" onClick={onTrocarCurso} title="Voltar para a Central de Estudos">
                  ⌂ Central
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
                {a.rotulo}
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
