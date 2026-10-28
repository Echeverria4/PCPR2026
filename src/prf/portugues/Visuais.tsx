import { Fragment } from "react";
import { NOME_CLASSE, type Bloco, type ClasseId, type Palavra } from "./tipos";

/** Texto com **destaque**: o trecho entre asteriscos duplos sai marcado. Nada de HTML. */
export function Rico({ texto }: { texto: string }) {
  const partes = texto.split("**");
  return (
    <>
      {partes.map((p, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="pi-destaque">
            {p}
          </mark>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

export function ChipClasse({ classe, rotulo }: { classe: ClasseId; rotulo?: string }) {
  return <span className={`pi-chip pi-c-${classe}`}>{rotulo ?? NOME_CLASSE[classe]}</span>;
}

/** Frase com cada palavra sublinhada na cor da classe e o rótulo embaixo. */
export function FraseAnotada({ palavras, comentario }: { palavras: Palavra[]; comentario?: string }) {
  return (
    <figure className="pi-frase">
      <div className="pi-frase-linha">
        {palavras.map(([t, classe, nota], i) =>
          classe ? (
            <span key={i} className={`pi-palavra pi-c-${classe}`}>
              <span className="pi-palavra-t">{t}</span>
              <span className="pi-palavra-rotulo">{nota ?? NOME_CLASSE[classe]}</span>
            </span>
          ) : (
            <span key={i} className="pi-palavra pi-palavra-neutra">
              <span className="pi-palavra-t">{t}</span>
            </span>
          ),
        )}
      </div>
      {comentario && (
        <figcaption className="pi-frase-comentario">
          <Rico texto={comentario} />
        </figcaption>
      )}
    </figure>
  );
}

function valorGrade(v: string) {
  if (v === "sim") return <span className="pi-sim" aria-label="sim">✓</span>;
  if (v === "não") return <span className="pi-nao" aria-label="não">✗</span>;
  return <Rico texto={v} />;
}

export function BlocoPt({ bloco }: { bloco: Bloco }) {
  switch (bloco.tipo) {
    case "texto":
      return (
        <p className="pi-texto">
          <Rico texto={bloco.texto} />
        </p>
      );
    case "lista":
    case "perguntas":
      return (
        <div className={bloco.tipo === "perguntas" ? "pi-perguntas" : "pi-lista"}>
          {bloco.titulo && <h4 className="pi-mini-titulo">{bloco.titulo}</h4>}
          <ul>
            {bloco.itens.map((it, i) => (
              <li key={i}>
                <Rico texto={it} />
              </li>
            ))}
          </ul>
        </div>
      );
    case "chaves":
      return (
        <div className="pi-chaves">
          <div className="pi-chaves-centro">{bloco.titulo}</div>
          <div className="pi-chaves-ramos">
            {bloco.ramos.map((r, i) => (
              <div key={i} className={`pi-ramo ${r.classe ? `pi-c-${r.classe}` : ""}`}>
                <div className="pi-ramo-rotulo">{r.rotulo}</div>
                {r.texto && (
                  <div className="pi-ramo-texto">
                    <Rico texto={r.texto} />
                  </div>
                )}
                {r.exemplo && (
                  <div className="pi-ramo-exemplo">
                    <Rico texto={r.exemplo} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    case "fluxo":
      return (
        <div className="pi-fluxo">
          {bloco.titulo && <h4 className="pi-mini-titulo">{bloco.titulo}</h4>}
          <ol className="pi-fluxo-passos">
            {bloco.passos.map((p, i) => (
              <li key={i} className="pi-fluxo-passo">
                <div className="pi-fluxo-pergunta">
                  <span className="pi-fluxo-num">{i + 1}</span>
                  <Rico texto={p.pergunta} />
                </div>
                <div className={`pi-fluxo-sim ${p.classe ? `pi-c-${p.classe}` : ""}`}>
                  <span className="pi-fluxo-seta">Sim →</span> <Rico texto={p.sim} />
                </div>
                {i < bloco.passos.length - 1 && <div className="pi-fluxo-nao">Não ↓</div>}
              </li>
            ))}
          </ol>
          {bloco.senao && (
            <div className="pi-fluxo-senao">
              <Rico texto={bloco.senao} />
            </div>
          )}
        </div>
      );
    case "frase":
      return <FraseAnotada palavras={bloco.palavras} comentario={bloco.comentario} />;
    case "comparativo":
      return (
        <div className="pi-comparativo">
          {bloco.titulo && <h4 className="pi-mini-titulo">{bloco.titulo}</h4>}
          <div className="pi-comparativo-colunas" style={{ ["--pi-colunas" as string]: bloco.colunas.length }}>
            {bloco.colunas.map((c, i) => (
              <div key={i} className={`pi-coluna ${c.classe ? `pi-c-${c.classe}` : ""}`}>
                <div className="pi-coluna-titulo">{c.titulo}</div>
                <ul>
                  {c.itens.map((it, j) => (
                    <li key={j}>
                      <Rico texto={it} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {bloco.sintese && (
            <p className="pi-sintese">
              <Rico texto={bloco.sintese} />
            </p>
          )}
        </div>
      );
    case "grade":
      return (
        <div className="pi-grade">
          {bloco.titulo && <h4 className="pi-mini-titulo">{bloco.titulo}</h4>}
          <table>
            <thead>
              <tr>
                <th />
                {bloco.colunas.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bloco.linhas.map((l) => (
                <tr key={l.rotulo}>
                  <th scope="row">
                    <Rico texto={l.rotulo} />
                  </th>
                  {l.valores.map((v, i) => (
                    <td key={i}>{valorGrade(v)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {bloco.nota && (
            <p className="pi-grade-nota">
              <Rico texto={bloco.nota} />
            </p>
          )}
        </div>
      );
    case "macete":
      return (
        <div className="pi-macete">
          <div className="pi-macete-rotulo">Para memorizar</div>
          <p className="pi-macete-texto">
            <Rico texto={bloco.texto} />
          </p>
          {bloco.explicacao && (
            <p className="pi-macete-explicacao">
              <Rico texto={bloco.explicacao} />
            </p>
          )}
        </div>
      );
    case "pegadinhas":
      return (
        <div className="pi-pegadinhas">
          {bloco.itens.map((p, i) => (
            <div key={i} className="pi-pegadinha">
              <strong>
                <Rico texto={p.titulo} />
              </strong>
              <p>
                <Rico texto={p.texto} />
              </p>
            </div>
          ))}
        </div>
      );
    case "passos":
      return (
        <div className="pi-passos">
          <p className="pi-passos-frase">
            <Rico texto={bloco.frase} />
          </p>
          <ol>
            {bloco.passos.map((p, i) => (
              <li key={i}>
                <Rico texto={p} />
              </li>
            ))}
          </ol>
          <p className="pi-passos-conclusao">
            <strong>Conclusão:</strong> <Rico texto={bloco.conclusao} />
          </p>
        </div>
      );
    case "exemplos":
      return (
        <div className="pi-exemplos">
          {bloco.itens.map((e, i) => (
            <div key={i} className={`pi-exemplo ${e.concurso ? "pi-exemplo-concurso" : ""}`}>
              <span className="pi-exemplo-nivel">{e.concurso ? "Nível de prova" : "Exemplo simples"}</span>
              <p className="pi-exemplo-frase">
                <Rico texto={e.frase} />
              </p>
              <p className="pi-exemplo-analise">
                <Rico texto={e.analise} />
              </p>
            </div>
          ))}
        </div>
      );
    case "nota":
      return (
        <p className="pi-nota">
          <strong>Particularidade:</strong> <Rico texto={bloco.texto} />
        </p>
      );
  }
}

export function Blocos({ blocos }: { blocos: Bloco[] }) {
  return (
    <>
      {blocos.map((b, i) => (
        <BlocoPt key={i} bloco={b} />
      ))}
    </>
  );
}
