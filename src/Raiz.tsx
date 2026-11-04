import { lazy, Suspense, useEffect, useState } from "react";
import App from "./App";
import Cursos from "./components/Cursos";
import { CURSOS, cursoAbrivel, type CursoId } from "./data/cursos";

// O curso da PRF só baixa quando é aberto: quem estuda para a PCPR não carrega o banco dele.
const AppPrf = lazy(() => import("./prf/AppPrf"));
// Os outros cursos têm só as aulas: não baixam o banco da PRF.
const AppCurso = lazy(() => import("./prf/cursos/AppCurso"));

/** O curso aberto fica na URL (?curso=…): recarregar mantém o curso e o voltar do navegador leva à central. */
function cursoDaUrl(): CursoId | null {
  return cursoAbrivel(new URLSearchParams(window.location.search).get("curso"));
}

function gravarNaUrl(curso: CursoId | null) {
  const url = new URL(window.location.href);
  if (curso) url.searchParams.set("curso", curso);
  else url.searchParams.delete("curso");
  window.history.pushState(null, "", url);
}

export default function Raiz() {
  const [curso, setCurso] = useState<CursoId | null>(cursoDaUrl);

  useEffect(() => {
    const aoNavegar = () => setCurso(cursoDaUrl());
    window.addEventListener("popstate", aoNavegar);
    return () => window.removeEventListener("popstate", aoNavegar);
  }, []);

  useEffect(() => {
    document.title =
      curso === "pcpr2026"
        ? "Operação PCPR 2026"
        : (CURSOS.find((c) => c.id === curso)?.nome ?? "Central de Estudos");
    if (!curso) window.scrollTo({ top: 0 });
  }, [curso]);

  function abrir(id: CursoId) {
    gravarNaUrl(id);
    setCurso(id);
  }

  function voltarParaCursos() {
    gravarNaUrl(null);
    setCurso(null);
  }

  if (curso === "pcpr2026") return <App onTrocarCurso={voltarParaCursos} />;
  if (curso === "prf-adm")
    return (
      <Suspense fallback={<div className="vazio">Carregando o curso…</div>}>
        <AppPrf onTrocarCurso={voltarParaCursos} />
      </Suspense>
    );
  if (curso)
    return (
      <Suspense fallback={<div className="vazio">Carregando o curso…</div>}>
        <AppCurso key={curso} curso={curso} onTrocarCurso={voltarParaCursos} />
      </Suspense>
    );
  return <Cursos onAbrir={abrir} />;
}
