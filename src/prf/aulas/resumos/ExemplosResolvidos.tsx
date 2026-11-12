import { useState } from "react";
import type { ExemploResolvido } from "./tipos";

/** Um exemplo: a fórmula e o problema à vista; os passos abrem um de cada vez, para tentar antes de ver. */
function Exemplo({ exemplo }: { exemplo: ExemploResolvido }) {
  const [vistos, setVistos] = useState(0);
  const total = exemplo.passos.length;
  const fim = vistos > total;
  const proximo = vistos === 0 ? "Ver o 1º passo" : vistos < total ? `Próximo passo (${vistos + 1} de ${total})` : "Ver a resposta";

  return (
    <li className="prf-exemplo">
      <p className="prf-exemplo-nome">{exemplo.titulo}</p>
      <p className="prf-exemplo-formula">{exemplo.formula}</p>
      {exemplo.legenda && <p className="prf-exemplo-legenda">{exemplo.legenda}</p>}
      <p className="prf-exemplo-problema">
        <span className="prf-resumo-rotulo">Exemplo:</span> {exemplo.problema}
      </p>
      {vistos === 0 && <p className="prf-exemplo-dica">Tente no papel antes de abrir os passos.</p>}
      {vistos > 0 && (
        <ol className="prf-exemplo-passos" aria-live="polite">
          {exemplo.passos.slice(0, vistos).map((p, i) => (
            <li key={i} className="prf-exemplo-passo">
              <span>{p.faz}</span>
              {p.conta && <span className="prf-exemplo-conta">{p.conta}</span>}
            </li>
          ))}
        </ol>
      )}
      {fim && (
        <p className="prf-exemplo-resposta" aria-live="polite">
          <span className="prf-resumo-rotulo">Resposta:</span> {exemplo.resposta}
        </p>
      )}
      <div className="prf-exemplo-acoes">
        {fim ? (
          <button type="button" className="prf-exemplo-link" onClick={() => setVistos(0)}>
            Recomeçar
          </button>
        ) : (
          <>
            <button type="button" className="botao prf-exemplo-botao" onClick={() => setVistos((v) => v + 1)}>
              {proximo}
            </button>
            {vistos < total && (
              <button type="button" className="prf-exemplo-link" onClick={() => setVistos(total + 1)}>
                Ver tudo
              </button>
            )}
          </>
        )}
      </div>
    </li>
  );
}

/** Como usar as fórmulas da aula: um exemplo resolvido para cada uma, com o desenvolvimento passo a passo. */
export default function ExemplosResolvidos({ exemplos }: { exemplos: ExemploResolvido[] }) {
  return (
    <section className="prf-exemplos" aria-label="Como usar a fórmula">
      <h4 className="prf-exemplos-titulo">
        <span aria-hidden="true">✍️</span> Como usar {exemplos.length === 1 ? "a fórmula" : "as fórmulas"}
      </h4>
      <ol className="prf-exemplos-lista">
        {exemplos.map((e) => (
          <Exemplo key={e.titulo} exemplo={e} />
        ))}
      </ol>
    </section>
  );
}
