import { useState, type CSSProperties } from "react";
import { SUBJECTS } from "../data/subjects";
import { CONTEUDO_POR_MATERIA } from "../data/conteudos";
import { RAIO_X } from "../data/raioX";
import type { RaioX, SubjectId } from "../lib/types";

function ColunaRaioX({ titulo, classe, itens }: { titulo: string; classe: string; itens: string[] }) {
  if (itens.length === 0) return null;
  return (
    <div className={`raiox-coluna ${classe}`}>
      <h4>{titulo}</h4>
      <ul>
        {itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function CaixaRaioX({ raioX }: { raioX: RaioX }) {
  return (
    <section className="raiox">
      <h3 className="raiox-titulo">🔍 Raio-X FGV</h3>
      <p className="raiox-resumo">{raioX.resumo}</p>
      <div className="raiox-grade">
        <ColunaRaioX titulo="Temas quentes" classe="raiox-quentes" itens={raioX.temasQuentes} />
        <ColunaRaioX titulo="Pegadinhas da banca" classe="raiox-pegadinhas" itens={raioX.pegadinhas} />
        <ColunaRaioX titulo="Reta final" classe="raiox-reta" itens={raioX.dicasRetaFinal} />
      </div>
      {raioX.fontes.length > 0 && (
        <div className="raiox-fontes">
          <span>Fontes:</span>
          {raioX.fontes.map((f) => (
            <a key={f.url} href={f.url} target="_blank" rel="noopener noreferrer">
              {f.label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

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
  const raioX = RAIO_X[materiaSelecionada];

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

      {raioX && <CaixaRaioX raioX={raioX} />}

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
