import { lazy, Suspense, useEffect, useState } from "react";
import Cursos from "../components/Cursos";
import type { CursoId } from "../data/cursos";
import { Icone } from "./comum";
import type { EntradaCurso } from "./entrada";
import Inicio from "./Inicio";
import "./central.css";

// As seções além do Início só baixam quando abertas.
const Questoes = lazy(() => import("./Hubs").then((m) => ({ default: m.Questoes })));
const Mapas = lazy(() => import("./Hubs").then((m) => ({ default: m.Mapas })));
const Redacoes = lazy(() => import("./Hubs").then((m) => ({ default: m.Redacoes })));
const Tempo = lazy(() => import("./Tempo"));
const Provas = lazy(() => import("./ProvasAnteriores"));

export type Secao = "inicio" | "cursos" | "questoes" | "provas" | "mapas" | "redacoes" | "tempo";

const SECOES: { id: Secao; rotulo: string; titulo: string }[] = [
  { id: "inicio", rotulo: "Início", titulo: "Início" },
  { id: "cursos", rotulo: "Meus Cursos", titulo: "Meus Cursos" },
  { id: "questoes", rotulo: "Questões", titulo: "Questões" },
  { id: "provas", rotulo: "Provas anteriores", titulo: "Provas anteriores" },
  { id: "mapas", rotulo: "Mapas Mentais", titulo: "Mapas Mentais" },
  { id: "redacoes", rotulo: "Redações", titulo: "Redações" },
  { id: "tempo", rotulo: "Tempo semanal", titulo: "Tempo semanal" },
];

export type AbrirCurso = (id: CursoId, entrada?: EntradaCurso) => void;

function secaoDaUrl(): Secao {
  const s = new URLSearchParams(window.location.search).get("secao");
  return SECOES.some((x) => x.id === s) ? (s as Secao) : "inicio";
}

/** A seção fica na URL (?secao=…): o voltar do navegador passa pelas seções e o curso volta para a que estava. */
function gravarSecao(secao: Secao, extra?: Record<string, string>) {
  const url = new URL(window.location.href);
  if (secao === "inicio") url.searchParams.delete("secao");
  else url.searchParams.set("secao", secao);
  // Parâmetros de tela interna (o mapa aberto na seção Mapas) não passam para outra seção.
  url.searchParams.delete("mapa");
  url.searchParams.delete("materia");
  for (const [k, v] of Object.entries(extra ?? {})) url.searchParams.set(k, v);
  window.history.pushState(null, "", url);
}

export default function Central({ onAbrir }: { onAbrir: AbrirCurso }) {
  const [secao, setSecao] = useState<Secao>(secaoDaUrl);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoNavegar = () => setSecao(secaoDaUrl());
    window.addEventListener("popstate", aoNavegar);
    return () => window.removeEventListener("popstate", aoNavegar);
  }, []);

  useEffect(() => {
    const titulo = SECOES.find((s) => s.id === secao)?.titulo;
    document.title = secao === "inicio" ? "Central de Estudos" : `${titulo} · Central de Estudos`;
    window.scrollTo({ top: 0 });
  }, [secao]);

  useEffect(() => {
    if (!menuAberto) return;
    const aoTeclar = (e: KeyboardEvent) => e.key === "Escape" && setMenuAberto(false);
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [menuAberto]);

  function ir(nova: Secao, extra?: Record<string, string>) {
    setMenuAberto(false);
    if (nova === secao && !extra) return;
    gravarSecao(nova, extra);
    setSecao(nova);
  }

  const atual = SECOES.find((s) => s.id === secao)!;

  return (
    <div className={`cx${menuAberto ? " cx-menu-aberto" : ""}`}>
      <aside className="cx-lateral" id="cx-menu" aria-label="Menu da Central">
        <div className="cx-marca">
          <span className="cx-marca-icone" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="8" height="8" rx="1.5" />
              <rect x="13" y="3" width="8" height="8" rx="1.5" />
              <rect x="3" y="13" width="8" height="8" rx="1.5" />
              <rect x="13" y="13" width="8" height="8" rx="1.5" />
            </svg>
          </span>
          <div>
            <div className="cx-marca-nome">Central de Estudos</div>
            <div className="cx-marca-sub">Concursos</div>
          </div>
          <button
            type="button"
            className="cx-fechar"
            onClick={() => setMenuAberto(false)}
            aria-label="Fechar o menu"
          >
            <Icone nome="fechar" />
          </button>
        </div>
        <nav className="cx-nav">
          {SECOES.map((s) => (
            <button
              key={s.id}
              type="button"
              aria-current={s.id === secao ? "page" : undefined}
              onClick={() => ir(s.id)}
            >
              <Icone nome={s.id} />
              {s.rotulo}
            </button>
          ))}
        </nav>
        <div className="cx-lateral-pe">
          <p>Progresso guardado neste aparelho.</p>
          <p>Material de estudo não oficial, para fins de treino.</p>
        </div>
      </aside>
      {menuAberto && <div className="cx-veu" onClick={() => setMenuAberto(false)} aria-hidden="true" />}

      <div className="cx-principal">
        <header className="cx-topo-movel">
          <button
            type="button"
            className="cx-botao-menu"
            onClick={() => setMenuAberto(true)}
            aria-label="Abrir o menu"
            aria-expanded={menuAberto}
            aria-controls="cx-menu"
          >
            <Icone nome="menu" />
          </button>
          <span className="cx-topo-titulo">{secao === "inicio" ? "Central de Estudos" : atual.titulo}</span>
        </header>

        <main className="cx-conteudo">
          {secao !== "inicio" && <h1 className="cx-titulo-secao">{atual.titulo}</h1>}
          {secao === "inicio" && <Inicio onAbrir={onAbrir} onIr={ir} />}
          {secao === "cursos" && (
            <div className="cx-cursos">
              <Cursos onAbrir={(id) => onAbrir(id)} />
            </div>
          )}
          <Suspense fallback={<p className="cx-vazio">Carregando…</p>}>
            {secao === "questoes" && <Questoes onAbrir={onAbrir} />}
            {secao === "provas" && <Provas />}
            {secao === "mapas" && <Mapas onAbrir={onAbrir} />}
            {secao === "redacoes" && <Redacoes onAbrir={onAbrir} />}
            {secao === "tempo" && <Tempo onAbrir={onAbrir} />}
          </Suspense>
        </main>
      </div>
    </div>
  );
}
