import { useEffect, useMemo, useState } from "react";
import MapasPrf from "../prf/cursos/completo/prf-policial/mapas/MapasPrf";
import type { TelaMapas } from "../prf/cursos/completo/prf-policial/mapas/tipos";
import { GRUPOS } from "../prf/cursos/dados/prf-policial";
import type { AbrirCurso } from "./Central";
import { CartaoMapa, escolherMapas, lerMateriaMemorizar, useMapas } from "./comum";
import { grupoDaAula, montarPainel, nomeMateriaPol } from "./dados";

/**
 * Mapas mentais dentro da Central (12/11/26): matéria → mapa → o mapa aberto, sem entrar no curso. A tela fica na URL
 * (?secao=mapas&materia=… ou &mapa=…), então o voltar do celular volta do mapa para a lista e da lista para as matérias.
 * O revisado e o modo memória são os mesmos do curso.
 */
function telaDaUrl(): TelaMapas {
  const p = new URLSearchParams(window.location.search);
  const mapa = p.get("mapa");
  if (mapa) return { tipo: "mapa", aula: mapa };
  const materia = p.get("materia");
  if (materia) return { tipo: "materia", grupo: materia };
  return { tipo: "inicio" };
}

function gravarTela(t: TelaMapas) {
  const url = new URL(window.location.href);
  url.searchParams.delete("mapa");
  url.searchParams.delete("materia");
  if (t.tipo === "mapa") url.searchParams.set("mapa", t.aula);
  if (t.tipo === "materia") url.searchParams.set("materia", t.grupo);
  window.history.pushState(null, "", url);
}

export default function MapasCentral({ onAbrir }: { onAbrir: AbrirCurso }) {
  const [tela, setTela] = useState<TelaMapas>(telaDaUrl);
  const mapas = useMapas();
  const painel = useMemo(() => montarPainel(Date.now()), []);
  // Mesma escolha de matéria do "Para memorizar hoje" do Início.
  const { doDia } = useMemo(() => escolherMapas(mapas, painel, lerMateriaMemorizar()), [mapas, painel]);

  useEffect(() => {
    const aoNavegar = () => setTela(telaDaUrl());
    window.addEventListener("popstate", aoNavegar);
    return () => window.removeEventListener("popstate", aoNavegar);
  }, []);

  function irPara(t: TelaMapas) {
    gravarTela(t);
    setTela(t);
  }

  return (
    <div className="cx-hubs cx-mapas">
      {tela.tipo === "inicio" && doDia && (
        <CartaoMapa
          mapa={doDia}
          materia={nomeMateriaPol(grupoDaAula(doDia.aula))}
          rotulo="🧠 Mapa do dia"
          completo={false}
          onAbrir={() => irPara({ tipo: "mapa", aula: doDia.aula })}
        />
      )}

      <div className="cx-mapas-curso">
        <MapasPrf
          tela={tela}
          onTela={irPara}
          grupos={GRUPOS}
          onAbrirAula={(t) => onAbrir("prf-policial", { aba: "aulas", grupo: t.grupo, aula: t.aula })}
        />
      </div>
    </div>
  );
}
