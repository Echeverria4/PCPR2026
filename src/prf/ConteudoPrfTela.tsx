import { useState, type CSSProperties } from "react";
import { PRF_MATERIAS, PRF_MATERIA_MAP, type MateriaPrfId } from "../data/prf";
import { CONTEUDO_PRF_POR_MATERIA } from "./conteudos";

export default function ConteudoPrfTela() {
  const [materia, setMateria] = useState<MateriaPrfId | null>(null);

  if (!materia) {
    return (
      <>
        <h2 className="secao-titulo">Conteúdo teórico por matéria</h2>
        <p className="conteudo-intro">
          Resumos próprios, organizados pelos itens do conteúdo programático do edital de 2014 (o mesmo do curso
          pré-edital), com a legislação na versão em vigor. Use para revisar antes ou entre as sessões de treino.
        </p>
        <div className="materias-grid">
          {PRF_MATERIAS.map((m) => {
            const qtd = CONTEUDO_PRF_POR_MATERIA[m.id]?.length ?? 0;
            return (
              <button
                key={m.id}
                className="materia-card"
                style={{ "--cor-materia": m.cor } as CSSProperties}
                onClick={() => setMateria(m.id)}
                disabled={qtd === 0}
              >
                <div className="materia-nome">{m.nome}</div>
                <div className="materia-meta">
                  <span>{m.topicos.length} itens no programa</span>
                  <span>{qtd > 0 ? `${qtd} tópicos` : "em preparação"}</span>
                </div>
              </button>
            );
          })}
        </div>
      </>
    );
  }

  const info = PRF_MATERIA_MAP[materia];
  const topicos = CONTEUDO_PRF_POR_MATERIA[materia] ?? [];

  return (
    <>
      <button className="botao" onClick={() => setMateria(null)}>
        ← Matérias
      </button>
      <h2 className="secao-titulo conteudo-materia-titulo" style={{ "--cor-materia": info.cor } as CSSProperties}>
        {info.nome}
      </h2>

      {topicos.length === 0 ? (
        <div className="vazio">Conteúdo desta matéria ainda em preparação.</div>
      ) : (
        <div className="conteudo-lista">
          {topicos.map((t) => (
            <article key={t.topico} className="conteudo-card">
              <h3 className="conteudo-topico-titulo">{t.topico}</h3>
              <p className="conteudo-texto">{t.texto}</p>
              {t.exemplos && (
                <div className="conteudo-exemplos">
                  <h4>Exemplos</h4>
                  <ol>
                    {t.exemplos.map((ex) => (
                      <li key={ex}>{ex}</li>
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
          ))}
        </div>
      )}
    </>
  );
}
