import { createContext, Fragment, useContext, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { GLOSSARIO, type TermoGlossario } from "./glossario";
import { NOME_CLASSE, type Bloco, type ClasseId, type Palavra } from "./tipos";

/** Abre a explicação de um termo da gramática. Fora da lição e do modelo fica nulo, e o texto sai sem toque. */
export const GlossarioCtx = createContext<((t: TermoGlossario) => void) | null>(null);

// Formas mais longas primeiro, para "sujeito indeterminado" ganhar de "sujeito".
const FORMAS = GLOSSARIO.flatMap((t) => t.formas.map((f) => ({ f, t }))).sort((a, b) => b.f.length - a.f.length);
const RE_TERMOS = new RegExp(`(^|[^\\p{L}])(${FORMAS.map((x) => x.f).join("|")})(?![\\p{L}])`, "giu");
const RE_FORMAS = FORMAS.map(({ f, t }) => ({ re: new RegExp(`^(?:${f})$`, "iu"), t }));

/**
 * Quem ficou com cada termo na tela do passo a passo (o useId do Rico). Pelo id, o mesmo Rico continua com o termo
 * quando renderiza de novo (StrictMode, revelar a frase), e os outros textos da tela não o repetem.
 */
const DonosCtx = createContext<Map<TermoGlossario, string> | null>(null);

/** O cartão de uma tela do passo a passo: lá dentro, cada termo vira toque uma vez só. */
export function TelaComTermos({ className, children }: { className: string; children: ReactNode }) {
  const [donos] = useState(() => new Map<TermoGlossario, string>());
  return (
    <DonosCtx.Provider value={donos}>
      <div className={className}>{children}</div>
    </DonosCtx.Provider>
  );
}

/** Troca os termos do glossário que `pega` liberar por um toque que abre a explicação. */
function comTermos(texto: string, pega: (t: TermoGlossario) => boolean, abrir: (t: TermoGlossario) => void): ReactNode[] {
  const saida: ReactNode[] = [];
  let pos = 0;
  for (const m of texto.matchAll(RE_TERMOS)) {
    const t = RE_FORMAS.find((x) => x.re.test(m[2]))?.t;
    if (!t || !pega(t)) continue;
    const ini = (m.index ?? 0) + m[1].length;
    if (ini > pos) saida.push(texto.slice(pos, ini));
    saida.push(
      <button key={ini} type="button" className="pi-termo" onClick={() => abrir(t)} aria-haspopup="dialog">
        {m[2]}
      </button>,
    );
    pos = ini + m[2].length;
  }
  if (pos < texto.length) saida.push(texto.slice(pos));
  return saida;
}

/**
 * Texto com **destaque**: o trecho entre asteriscos duplos sai marcado. Nada de HTML.
 * Dentro da lição e do modelo, os termos da gramática viram um toque (termos=false nas frases analisadas).
 */
export function Rico({ texto, termos = true }: { texto: string; termos?: boolean }) {
  const abrir = useContext(GlossarioCtx);
  const donos = useContext(DonosCtx);
  const id = useId();
  const vistos = new Set<TermoGlossario>();
  // Só a primeira ocorrência no texto e, dentro de uma tela do passo a passo, só no primeiro texto da tela.
  const pega = (t: TermoGlossario) => {
    const dono = donos?.get(t);
    if (vistos.has(t) || (dono !== undefined && dono !== id)) return false;
    vistos.add(t);
    donos?.set(t, id);
    return true;
  };
  const conteudo = (p: string) => (abrir && termos ? comTermos(p, pega, abrir) : p);
  const partes = texto.split("**");
  // Um span só: num pai flex (pergunta do fluxo), cada pedaço viraria um item e a linha não quebraria.
  return (
    <span className="pi-rico">
      {partes.map((p, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="pi-destaque">
            {conteudo(p)}
          </mark>
        ) : (
          <Fragment key={i}>{conteudo(p)}</Fragment>
        ),
      )}
    </span>
  );
}

/** Explicação simples do termo tocado: painel embaixo da tela, fecha no botão, no fundo ou no Esc. */
export function GlossarioToque({ children }: { children: ReactNode }) {
  const [aberto, setAberto] = useState<TermoGlossario | null>(null);
  const fechar = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!aberto) return;
    const antes = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    fechar.current?.focus({ preventScroll: true });
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(null);
      // O painel só tem o botão de fechar: o foco fica nele.
      else if (e.key === "Tab") {
        e.preventDefault();
        fechar.current?.focus({ preventScroll: true });
      }
    };
    document.addEventListener("keydown", tecla);
    return () => {
      document.removeEventListener("keydown", tecla);
      antes?.focus({ preventScroll: true });
    };
  }, [aberto]);

  return (
    <GlossarioCtx.Provider value={setAberto}>
      {children}
      {aberto &&
        createPortal(
          <GlossarioCtx.Provider value={null}>
            <div className="pi-termo-fundo" onClick={() => setAberto(null)} />
            <aside className="pi-termo-painel" role="dialog" aria-modal="true" aria-labelledby="pi-termo-nome">
              <div className="pi-termo-cabeca">
                <strong id="pi-termo-nome" className="pi-termo-nome">
                  {aberto.termo}
                </strong>
                <button ref={fechar} type="button" className="botao pi-termo-fechar" onClick={() => setAberto(null)}>
                  Fechar
                </button>
              </div>
              <p className="pi-termo-simples">
                <Rico texto={aberto.simples} />
              </p>
              <p className="pi-termo-tecnico">
                <span className="pi-termo-tecnico-rotulo">Na linguagem da gramática:</span> <Rico texto={aberto.definicao} />
              </p>
            </aside>
          </GlossarioCtx.Provider>,
          document.body,
        )}
    </GlossarioCtx.Provider>
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

/** A mesma frase, com as classes escondidas: cada toque revela uma, e o comentário vem no fim. */
export function FraseInterativa({ palavras, comentario }: { palavras: Palavra[]; comentario?: string }) {
  const [vistas, setVistas] = useState<Set<number>>(() => new Set());
  const todas = palavras.every((p, i) => !p[1] || vistas.has(i));
  return (
    <figure className="pi-frase pi-frase-interativa">
      <p className="pi-frase-instrucao">
        {todas ? "Todas as classes à mostra." : "Toque em cada palavra para ver a classe dela. Tente adivinhar antes."}
      </p>
      <div className="pi-frase-linha">
        {palavras.map(([t, classe, nota], i) => {
          if (!classe)
            return (
              <span key={i} className="pi-palavra pi-palavra-neutra">
                <span className="pi-palavra-t">{t}</span>
              </span>
            );
          const vista = vistas.has(i);
          return (
            <button
              key={i}
              type="button"
              className={vista ? `pi-palavra pi-palavra-botao pi-c-${classe}` : "pi-palavra pi-palavra-botao pi-palavra-oculta"}
              onClick={() => setVistas((v) => new Set(v).add(i))}
              aria-label={vista ? undefined : `${t}: mostrar a classe`}
            >
              <span className="pi-palavra-t">{t}</span>
              <span className="pi-palavra-rotulo">{vista ? (nota ?? NOME_CLASSE[classe]) : "?"}</span>
            </button>
          );
        })}
      </div>
      {!todas && (
        <button type="button" className="botao pi-frase-todas" onClick={() => setVistas(new Set(palavras.map((_, i) => i)))}>
          Mostrar todas as classes
        </button>
      )}
      {todas && comentario && (
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
                    <Rico texto={r.exemplo} termos={false} />
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
                  <span className="pi-fluxo-num">{(bloco.inicio ?? 0) + i + 1}</span>
                  <Rico texto={p.pergunta} />
                </div>
                <div className={`pi-fluxo-sim ${p.classe ? `pi-c-${p.classe}` : ""}`}>
                  <span className="pi-fluxo-seta">Sim →</span> <Rico texto={p.sim} />
                </div>
                {(i < bloco.passos.length - 1 || bloco.continua) && <div className="pi-fluxo-nao">Não ↓</div>}
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
            <Rico texto={bloco.frase} termos={false} />
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
                <Rico texto={e.frase} termos={false} />
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
