import { useEffect, useState } from "react";
import App from "./App";
import Cursos from "./components/Cursos";
import { cursoAbrivel, type CursoId } from "./data/cursos";

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
    document.title = curso === "pcpr2026" ? "Operação PCPR 2026" : "Central de Estudos";
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
  return <Cursos onAbrir={abrir} />;
}
