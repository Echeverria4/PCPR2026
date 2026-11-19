import { useEffect, useState } from "react";
import LivroCtb from "../prf/cursos/completo/prf-policial/livro/LivroCtb";
import type { TelaLivro } from "../prf/cursos/completo/prf-policial/livro/tipos";
import type { AbrirCurso, Secao } from "./Central";

/**
 * Livro do CTB dentro da Central (19/11/26): lista de capítulos → capítulo com mapa e texto da lei. A tela fica na URL
 * (?secao=livro&cap=…&art=…), então o voltar do celular volta do capítulo para a lista. O lido e o modo memória são os
 * mesmos da aba do curso.
 */
function telaDaUrl(): TelaLivro {
  const p = new URLSearchParams(window.location.search);
  const res = p.get("res");
  if (res) return { tipo: "resolucao", id: res };
  const cap = p.get("cap");
  if (!cap) return { tipo: "inicio" };
  const art = p.get("art");
  return art ? { tipo: "capitulo", id: cap, art } : { tipo: "capitulo", id: cap };
}

function gravarTela(t: TelaLivro) {
  const url = new URL(window.location.href);
  for (const p of ["cap", "art", "res"]) url.searchParams.delete(p);
  if (t.tipo === "capitulo") {
    url.searchParams.set("cap", t.id);
    if (t.art) url.searchParams.set("art", t.art);
  }
  if (t.tipo === "resolucao") url.searchParams.set("res", t.id);
  window.history.pushState(null, "", url);
}

interface Props {
  onAbrir: AbrirCurso;
  onIr: (secao: Secao, extra?: Record<string, string>) => void;
}

export default function LivroCentral({ onAbrir, onIr }: Props) {
  const [tela, setTela] = useState<TelaLivro>(telaDaUrl);

  useEffect(() => {
    const aoNavegar = () => setTela(telaDaUrl());
    window.addEventListener("popstate", aoNavegar);
    return () => window.removeEventListener("popstate", aoNavegar);
  }, []);

  function irPara(t: TelaLivro) {
    gravarTela(t);
    setTela(t);
  }

  return (
    <div className="cx-hubs cx-livro">
      <div className="cx-mapas-curso cx-livro-curso">
        <LivroCtb
          tela={tela}
          onTela={irPara}
          onAbrirMapa={(aula) => onIr("mapas", { mapa: aula })}
          onAbrirAula={(aula) => onAbrir("prf-policial", { aba: "aulas", grupo: "transito", aula })}
          onQuestoes={(aula) => onAbrir("prf-policial", { aba: "livro", fixar: aula })}
        />
      </div>
    </div>
  );
}
