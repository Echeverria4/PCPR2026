import { lazy, Suspense, useEffect, useState } from "react";
import App from "./App";
import Central from "./central/Central";
import type { EntradaCurso } from "./central/entrada";
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
  // A entrada (aba, aula, mapa) só vale para o curso aberto pela Central; recarregar abre o curso no início.
  const [{ curso, entrada }, setAberto] = useState<{ curso: CursoId | null; entrada?: EntradaCurso }>(() => ({
    curso: cursoDaUrl(),
  }));

  useEffect(() => {
    const aoNavegar = () => setAberto({ curso: cursoDaUrl() });
    window.addEventListener("popstate", aoNavegar);
    return () => window.removeEventListener("popstate", aoNavegar);
  }, []);

  // Sem curso aberto, o título é da Central (muda com a seção).
  useEffect(() => {
    if (!curso) return;
    document.title = curso === "pcpr2026" ? "Operação PCPR 2026" : (CURSOS.find((c) => c.id === curso)?.nome ?? "Central de Estudos");
  }, [curso]);

  function abrir(id: CursoId, novaEntrada?: EntradaCurso) {
    gravarNaUrl(id);
    setAberto({ curso: id, entrada: novaEntrada });
  }

  function voltarParaCursos() {
    gravarNaUrl(null);
    setAberto({ curso: null });
  }

  if (curso === "pcpr2026") return <App onTrocarCurso={voltarParaCursos} />;
  if (curso === "prf-adm")
    return (
      <Suspense fallback={<div className="vazio">Carregando o curso…</div>}>
        <AppPrf onTrocarCurso={voltarParaCursos} entrada={entrada} />
      </Suspense>
    );
  if (curso)
    return (
      <Suspense fallback={<div className="vazio">Carregando o curso…</div>}>
        <AppCurso key={curso} curso={curso} onTrocarCurso={voltarParaCursos} entrada={entrada} />
      </Suspense>
    );
  return <Central onAbrir={abrir} />;
}
