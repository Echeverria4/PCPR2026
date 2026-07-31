import { useState, type CSSProperties } from "react";
import { SUBJECTS } from "../data/subjects";
import { CONTEUDO_POR_MATERIA } from "../data/conteudos";
import type { SubjectId } from "../lib/types";

export default function Conteudo() {
  const [materiaSelecionada, setMateriaSelecionada] = useState<SubjectId | null>(null);

  if (!materiaSelecionada) {
    return (
      <>
        <h2 className="secao-titulo">Conteúdo teórico por matéria</h2>
        <p className="conteudo-intro">
          Resumos estilo aula de cursinho, organizados exatamente pelos tópicos oficiais do
          Anexo I do edital, com exemplos práticos e curiosidades. Use como apoio para revisar
          antes — ou entre — as sessões de treino.
        </p>
        <div className="materias-grid">
          {SUBJECTS.map((s) => {
            const qtd = CONTEUDO_POR_MATERIA[s.id]?.length ?? 0;
            return (
              <button
                key={s.id}
                className="materia-card"
                style={{ "--cor-materia": s.cor } as CSSProperties}
                onClick={() => setMateriaSelecionada(s.id)}
                disabled={qtd === 0}
              >
                <div className="materia-nome">{s.nome}</div>
                <div className="materia-meta">
                  <span>{s.peso} questões na prova</span>
                  <span>{qtd > 0 ? `${qtd} tópicos` : "em preparação"}</span>
                </div>
              </button>
            );
          })}
        </div>
      </>
    );
  }

  const subject = SUBJECTS.find((s) => s.id === materiaSelecionada)!;
  const topicos = CONTEUDO_POR_MATERIA[materiaSelecionada] ?? [];
  const oficiais = topicos.filter((t) => t.origem !== "aposta");
  const apostas = topicos.filter((t) => t.origem === "aposta");

  function renderCard(t: (typeof topicos)[number], i: number) {
    return (
      <article key={i} className="conteudo-card">
        <h3 className="conteudo-topico-titulo">{t.topico}</h3>
        <p className="conteudo-texto">{t.texto}</p>

        {t.exemplos && (
          <div className="conteudo-exemplos">
            <h4>Exemplos</h4>
            <ol>
              {t.exemplos.map((ex, j) => (
                <li key={j}>{ex}</li>
              ))}
            </ol>
          </div>
        )}

        {t.curiosidade && (
          <div className="conteudo-curiosidade">
            <strong>Curiosidade:</strong> {t.curiosidade}
          </div>
        )}
      </article>
    );
  }

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

      {topicos.length === 0 ? (
        <div className="vazio">Conteúdo desta matéria ainda em preparação.</div>
      ) : (
        <>
          {oficiais.length > 0 && (
            <>
              {apostas.length > 0 && (
                <h3 className="aposta-subtitulo">📖 Tópicos oficiais ({oficiais.length})</h3>
              )}
              <div className="conteudo-lista">{oficiais.map((t, i) => renderCard(t, i))}</div>
            </>
          )}

          {apostas.length > 0 && (
            <>
              <h3 className="aposta-subtitulo">🎯 Apostas ({apostas.length})</h3>
              <div className="conteudo-lista">{apostas.map((t, i) => renderCard(t, i))}</div>
            </>
          )}
        </>
      )}
    </>
  );
}
