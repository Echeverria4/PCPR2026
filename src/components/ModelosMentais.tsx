import { useState, type CSSProperties } from "react";
import { SUBJECTS } from "../data/subjects";
import { MODELOS_MENTAIS_POR_MATERIA } from "../data/modelosMentais";
import type { SubjectId } from "../lib/types";

export default function ModelosMentais() {
  const [materiaSelecionada, setMateriaSelecionada] = useState<SubjectId | null>(null);

  if (!materiaSelecionada) {
    return (
      <>
        <h2 className="secao-titulo">Modelos mentais</h2>
        <p className="conteudo-intro">
          Um gancho e uma analogia curta para cada tópico oficial e cada aposta do edital, cobrindo
          todas as 13 matérias. A ideia não é substituir o conteúdo teórico, é dar um jeito mais
          fácil de fixar cada tema na cabeça.
        </p>
        <div className="materias-grid">
          {SUBJECTS.map((s) => {
            const modelos = MODELOS_MENTAIS_POR_MATERIA[s.id] ?? [];
            return (
              <button
                key={s.id}
                className="materia-card"
                style={{ "--cor-materia": s.cor } as CSSProperties}
                onClick={() => setMateriaSelecionada(s.id)}
                disabled={modelos.length === 0}
              >
                <div className="materia-nome">{s.nome}</div>
                <div className="materia-meta">
                  <span>{modelos.length > 0 ? `${modelos.length} modelos` : "em preparação"}</span>
                </div>
              </button>
            );
          })}
        </div>
      </>
    );
  }

  const subject = SUBJECTS.find((s) => s.id === materiaSelecionada)!;
  const modelos = MODELOS_MENTAIS_POR_MATERIA[materiaSelecionada] ?? [];
  const oficiais = modelos.filter((m) => m.origem === "oficial");
  const apostas = modelos.filter((m) => m.origem === "aposta");

  return (
    <>
      <button className="botao" onClick={() => setMateriaSelecionada(null)}>
        ← Matérias
      </button>
      <h2
        className="secao-titulo conteudo-materia-titulo"
        style={{ "--cor-materia": subject.cor } as CSSProperties}
      >
        {subject.nome}
      </h2>

      {oficiais.length > 0 && (
        <>
          <h3 className="aposta-subtitulo">📖 Tópicos oficiais ({oficiais.length})</h3>
          <div className="modelo-mental-lista">
            {oficiais.map((m) => (
              <article key={m.topico} className="modelo-mental-card">
                <h4 className="conteudo-topico-titulo">{m.topico}</h4>
                <p className="modelo-mental-gancho">{m.gancho}</p>
                <p className="conteudo-texto">{m.modelo}</p>
              </article>
            ))}
          </div>
        </>
      )}

      {apostas.length > 0 && (
        <>
          <h3 className="aposta-subtitulo">🎯 Apostas ({apostas.length})</h3>
          <div className="modelo-mental-lista">
            {apostas.map((m) => (
              <article key={m.topico} className="modelo-mental-card">
                <h4 className="conteudo-topico-titulo">{m.topico}</h4>
                <p className="modelo-mental-gancho">{m.gancho}</p>
                <p className="conteudo-texto">{m.modelo}</p>
              </article>
            ))}
          </div>
        </>
      )}

      {modelos.length === 0 && (
        <div className="vazio">Modelos mentais desta matéria ainda em preparação.</div>
      )}
    </>
  );
}
