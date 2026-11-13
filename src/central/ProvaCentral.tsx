import { useEffect, useRef, useState, type ReactNode } from "react";
import Alternativa from "../components/Alternativa";
import { shuffle } from "../lib/quizEngine";
import type { AttemptRecord, Question } from "../lib/types";

/**
 * Simulado PRF em modo prova (13/11/26): como no dia da prova, o gabarito só aparece depois de entregar. Dá para
 * marcar, trocar ou deixar em branco, andar entre as questões e ver o cartão-resposta. O andamento fica salvo no
 * aparelho (sai e continua depois). Ao entregar, as respondidas gravam no progresso; as em branco contam como erro
 * só na nota da prova. Nota por item (Certo/Errado com desconto) fica para perto do concurso, a pedido.
 */

export interface BlocoProva {
  nome: string;
  total: number;
}

/** O que fica salvo: só ids, ordem das alternativas e respostas; o texto vem do banco ao continuar. */
export interface ProvaSalva {
  v: 1;
  iniciadaEm: string;
  itens: { id: string; bloco: number; ordem: number[] }[];
  respostas: (number | null)[];
  respondidaEm: (string | null)[];
  tempoMs: number[];
  riscadas: number[][];
  atual: number;
  decorridoMs: number;
}

const CHAVE = "cx:prova:andamento:v1";
const LETRAS = ["A", "B", "C", "D", "E"];
const LETRAS_CE = ["C", "E"];

export function lerProvaSalva(): ProvaSalva | null {
  try {
    const bruto = localStorage.getItem(CHAVE);
    if (!bruto) return null;
    const p = JSON.parse(bruto) as ProvaSalva;
    const n = p?.itens?.length ?? 0;
    if (p?.v !== 1 || n === 0 || p.respostas?.length !== n || p.tempoMs?.length !== n) return null;
    return p;
  } catch {
    return null;
  }
}

function gravarProva(p: ProvaSalva | null) {
  try {
    if (p) localStorage.setItem(CHAVE, JSON.stringify(p));
    else localStorage.removeItem(CHAVE);
  } catch {
    /* sem armazenamento: a prova vale só enquanto a tela estiver aberta */
  }
}

export function descartarProvaSalva() {
  gravarProva(null);
}

/** Prova nova: cada questão com o bloco e a ordem sorteada das alternativas (as de caderno ficam como estão). */
export function novaProva(lista: { q: Question<string>; bloco: number }[]): ProvaSalva {
  const n = lista.length;
  return {
    v: 1,
    iniciadaEm: new Date().toISOString(),
    itens: lista.map(({ q, bloco }) => {
      const base = q.alternativas.map((_, i) => i);
      return { id: q.id, bloco, ordem: q.ordemFixa ? base : shuffle(base) };
    }),
    respostas: Array(n).fill(null),
    respondidaEm: Array(n).fill(null),
    tempoMs: Array(n).fill(0),
    riscadas: Array.from({ length: n }, () => []),
    atual: 0,
    decorridoMs: 0,
  };
}

/** Monta as questões na ordem salva; se alguma saiu do banco, a prova salva não serve mais. */
export function questoesDaProva(p: ProvaSalva, porId: Map<string, Question<string>>): Question<string>[] | null {
  const qs: Question<string>[] = [];
  for (const it of p.itens) {
    const q = porId.get(it.id);
    if (!q || it.ordem.length !== q.alternativas.length) return null;
    const alternativas = it.ordem.map((i) => q.alternativas[i]) as Question<string>["alternativas"];
    const correta = it.ordem.indexOf(q.correta) as Question<string>["correta"];
    qs.push({ ...q, alternativas, correta });
  }
  return qs;
}

export function relogio(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const seg = s % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(seg).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
}

const letrasDe = (q: Question<string>) => (q.alternativas.length === 2 ? LETRAS_CE : LETRAS);

function paraOTopo() {
  window.scrollTo(0, 0);
  document.querySelector(".cx-conteudo")?.scrollTo?.(0, 0);
}

interface Props {
  salva: ProvaSalva;
  questoes: Question<string>[];
  blocos: BlocoProva[];
  nomes: Record<string, string>;
  registrar: (r: AttemptRecord<string>) => void | Promise<void>;
  envolver?: (questaoId: string, conteudo: ReactNode) => ReactNode;
  /** Sai sem entregar: a prova continua salva. */
  onPausar: () => void;
  /** Depois de entregar. */
  onVoltar: () => void;
  onRefazer: (ids: string[]) => void;
}

export default function ProvaCentral(props: Props) {
  const [prova, setProva] = useState<ProvaSalva>(props.salva);
  const [entregue, setEntregue] = useState<{ fimMs: number } | null>(null);
  const [confirmando, setConfirmando] = useState(false);
  const [cartaoAberto, setCartaoAberto] = useState(false);
  const [agora, setAgora] = useState(() => Date.now());
  const desde = useRef(Date.now());
  const provaRef = useRef(prova);
  provaRef.current = prova;

  const { questoes, blocos, nomes } = props;
  const total = questoes.length;
  const i = prova.atual;
  const q = questoes[i];
  const letras = letrasDe(q);
  const respondidas = prova.respostas.filter((r) => r !== null).length;
  const emBranco = total - respondidas;
  const decorrido = prova.decorridoMs + (entregue ? 0 : Math.max(0, agora - desde.current));

  /** Soma o tempo desde a última marcação na questão aberta e no total. */
  function fecharTempo(p: ProvaSalva): ProvaSalva {
    const t = Date.now();
    const passou = Math.max(0, t - desde.current);
    desde.current = t;
    const tempoMs = [...p.tempoMs];
    tempoMs[p.atual] += passou;
    return { ...p, tempoMs, decorridoMs: p.decorridoMs + passou };
  }

  function atualizar(f: (p: ProvaSalva) => ProvaSalva) {
    const nova = f(fecharTempo(provaRef.current));
    provaRef.current = nova;
    setProva(nova);
    gravarProva(nova);
  }

  // Grava já ao abrir, para "continuar depois" valer mesmo sem marcar nada.
  useEffect(() => {
    gravarProva(provaRef.current);
  }, []);

  // Relógio da prova; com a aba escondida o tempo para e o andamento fica gravado.
  useEffect(() => {
    if (entregue) return;
    const id = window.setInterval(() => setAgora(Date.now()), 1000);
    const mudou = () => {
      if (document.visibilityState === "hidden") {
        const p = fecharTempo(provaRef.current);
        provaRef.current = p;
        setProva(p);
        gravarProva(p);
      } else {
        desde.current = Date.now();
      }
    };
    document.addEventListener("visibilitychange", mudou);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", mudou);
    };
  }, [entregue]);

  function marcar(idx: number) {
    atualizar((p) => {
      const respostas = [...p.respostas];
      const respondidaEm = [...p.respondidaEm];
      respostas[p.atual] = respostas[p.atual] === idx ? null : idx;
      respondidaEm[p.atual] = respostas[p.atual] === null ? null : new Date().toISOString();
      return { ...p, respostas, respondidaEm };
    });
  }

  function riscar(idx: number) {
    atualizar((p) => {
      const riscadas = p.riscadas.map((r) => [...r]);
      const atual = riscadas[p.atual] ?? [];
      riscadas[p.atual] = atual.includes(idx) ? atual.filter((x) => x !== idx) : [...atual, idx];
      return { ...p, riscadas };
    });
  }

  function irPara(n: number) {
    if (n < 0 || n >= total) return;
    atualizar((p) => ({ ...p, atual: n }));
    setConfirmando(false);
    paraOTopo();
  }

  function pausar() {
    gravarProva(fecharTempo(provaRef.current));
    props.onPausar();
  }

  function entregar() {
    const p = fecharTempo(provaRef.current);
    p.itens.forEach((it, k) => {
      const r = p.respostas[k];
      if (r === null) return;
      void props.registrar({
        questionId: it.id,
        materia: questoes[k].materia,
        acertou: r === questoes[k].correta,
        respondidaEm: p.respondidaEm[k] ?? new Date().toISOString(),
        tempoMs: p.tempoMs[k],
        modo: "simulado",
      });
    });
    gravarProva(null);
    provaRef.current = p;
    setProva(p);
    setEntregue({ fimMs: p.decorridoMs });
    setConfirmando(false);
    paraOTopo();
  }

  if (entregue) {
    return (
      <ResultadoProva
        prova={prova}
        questoes={questoes}
        blocos={blocos}
        nomes={nomes}
        onVoltar={props.onVoltar}
        onRefazer={props.onRefazer}
      />
    );
  }

  const bloco = blocos[prova.itens[i].bloco];
  const marcada = prova.respostas[i];
  const riscadas = prova.riscadas[i] ?? [];
  const envolver = props.envolver ?? ((_: string, c: ReactNode) => c);

  return (
    <div className="cx-prova">
      <div className="quiz-header">
        <span>Simulado PRF · modo prova</span>
        <span className="quiz-cronometro" aria-label="Tempo de prova">
          ⏱ {relogio(decorrido)}
        </span>
        <span>
          Questão {i + 1} de {total}
        </span>
      </div>
      <div className="progresso-barra" aria-hidden="true">
        <div className="progresso-fill" style={{ width: `${(respondidas / total) * 100}%` }} />
      </div>
      <p className="cx-prova-status">
        {respondidas} de {total} marcadas · {emBranco} em branco · o gabarito sai só quando você entregar
      </p>

      <div className="questao-card">
        <div className="questao-tags">
          <span className="questao-tag">{bloco?.nome}</span>
          <span className="questao-tag">{nomes[q.materia] ?? q.materia}</span>
        </div>
        {envolver(
          q.id,
          <>
            <p className="questao-enunciado">{q.enunciado}</p>
            <div className="alternativas">
              {q.alternativas.map((alt, idx) => (
                <Alternativa
                  key={idx}
                  letra={letras[idx]}
                  texto={alt}
                  classe={marcada === idx ? "cx-marcada" : ""}
                  eliminada={riscadas.includes(idx)}
                  onEscolher={() => marcar(idx)}
                  onRiscar={() => riscar(idx)}
                />
              ))}
            </div>
          </>,
        )}
        <p className="cx-prova-dica">
          {marcada === null
            ? "Toque numa alternativa para marcar. Pode trocar depois ou deixar em branco."
            : `Marcada: ${letras[marcada]}. Toque nela de novo para apagar.`}
        </p>

        <div className="cx-prova-nav">
          <button type="button" className="botao" onClick={() => irPara(i - 1)} disabled={i === 0}>
            ← Anterior
          </button>
          <button
            type="button"
            className="botao"
            aria-expanded={cartaoAberto}
            onClick={() => setCartaoAberto((v) => !v)}
          >
            Cartão-resposta
          </button>
          <button type="button" className="botao" onClick={() => irPara(i + 1)} disabled={i === total - 1}>
            Próxima →
          </button>
        </div>
      </div>

      {cartaoAberto && (
        <section className="cx-card cx-prova-cartao" aria-label="Cartão-resposta">
          {blocos.map((b, bi) => (
            <div key={b.nome} className="cx-prova-cartao-bloco">
              <h3 className="cx-dist-titulo">
                <span>{b.nome}</span>
                <span>
                  {prova.itens.filter((it, k) => it.bloco === bi && prova.respostas[k] !== null).length}/{b.total}
                </span>
              </h3>
              <ol className="cx-prova-grade">
                {prova.itens.map((it, k) =>
                  it.bloco !== bi ? null : (
                    <li key={k}>
                      <button
                        type="button"
                        className={`${prova.respostas[k] !== null ? "cx-feita" : ""} ${k === i ? "cx-atual" : ""}`}
                        aria-current={k === i ? "true" : undefined}
                        aria-label={`Questão ${k + 1}${prova.respostas[k] !== null ? ", marcada" : ", em branco"}`}
                        onClick={() => irPara(k)}
                      >
                        <span>{k + 1}</span>
                        <small>{prova.respostas[k] !== null ? letrasDe(questoes[k])[prova.respostas[k]!] : " "}</small>
                      </button>
                    </li>
                  ),
                )}
              </ol>
            </div>
          ))}
        </section>
      )}

      {confirmando ? (
        <section className="cx-card cx-prova-confirma" role="alertdialog" aria-label="Entregar a prova">
          <p>
            {emBranco > 0
              ? `Você deixou ${emBranco} ${emBranco === 1 ? "questão" : "questões"} em branco. Elas contam como erro. Entregar mesmo assim?`
              : "Entregar a prova? Depois de entregar não dá para mudar as respostas."}
          </p>
          <div className="cx-card-acoes">
            <button type="button" className="botao botao-ouro" onClick={entregar}>
              Entregar
            </button>
            <button type="button" className="botao" onClick={() => setConfirmando(false)}>
              Voltar à prova
            </button>
          </div>
        </section>
      ) : (
        <div className="cx-prova-fim">
          <button type="button" className="botao botao-ouro" onClick={() => setConfirmando(true)}>
            Entregar prova
          </button>
          <button type="button" className="botao" onClick={pausar}>
            Sair e continuar depois
          </button>
        </div>
      )}
    </div>
  );
}

// ---------- Depois de entregar ----------

type Filtro = "erradas" | "branco" | "todas";

function ResultadoProva({
  prova,
  questoes,
  blocos,
  nomes,
  onVoltar,
  onRefazer,
}: {
  prova: ProvaSalva;
  questoes: Question<string>[];
  blocos: BlocoProva[];
  nomes: Record<string, string>;
  onVoltar: () => void;
  onRefazer: (ids: string[]) => void;
}) {
  const total = questoes.length;
  const situacao = questoes.map((q, k) => {
    const r = prova.respostas[k];
    return r === null ? "branco" : r === q.correta ? "certa" : "errada";
  });
  const acertos = situacao.filter((s) => s === "certa").length;
  const branco = situacao.filter((s) => s === "branco").length;
  const erradas = total - acertos - branco;
  const pct = total > 0 ? Math.round((acertos / total) * 100) : 0;

  const porBloco = blocos.map((b, bi) => {
    let certas = 0;
    let n = 0;
    prova.itens.forEach((it, k) => {
      if (it.bloco !== bi) return;
      n++;
      if (situacao[k] === "certa") certas++;
    });
    return { nome: b.nome, certas, n };
  });

  const contagem = new Map<string, { certas: number; n: number }>();
  questoes.forEach((q, k) => {
    const nome = nomes[q.materia] ?? q.materia;
    const v = contagem.get(nome) ?? { certas: 0, n: 0 };
    v.n++;
    if (situacao[k] === "certa") v.certas++;
    contagem.set(nome, v);
  });
  const porMateria = [...contagem.entries()];

  const [filtro, setFiltro] = useState<Filtro>(erradas > 0 ? "erradas" : branco > 0 ? "branco" : "todas");
  const [verCorrecao, setVerCorrecao] = useState(false);
  const paraRefazer = prova.itens.filter((_, k) => situacao[k] === "errada").map((it) => it.id);
  const lista = questoes
    .map((q, k) => ({ q, k }))
    .filter(({ k }) =>
      filtro === "todas" ? true : filtro === "erradas" ? situacao[k] === "errada" : situacao[k] === "branco",
    );

  return (
    <div className="cx-prova">
      <section className="cx-card cx-prova-nota" aria-label="Resultado do simulado">
        <h2 className="cx-card-titulo">Simulado PRF entregue</h2>
        <p className="cx-prova-placar">
          <strong>{acertos}</strong> de {total} · {pct}%
        </p>
        <ul className="cx-prova-resumo">
          <li>✓ {acertos} certas</li>
          <li>✗ {erradas} erradas</li>
          <li>○ {branco} em branco</li>
          <li>⏱ {relogio(prova.decorridoMs)}</li>
        </ul>

        <div className="cx-dist">
          {porBloco.map((b) => (
            <div key={b.nome} className="cx-dist-bloco">
              <h3 className="cx-dist-titulo">
                <span>{b.nome}</span>
                <span>
                  {b.certas}/{b.n}
                </span>
              </h3>
            </div>
          ))}
        </div>

        <h3 className="cx-prova-sub">Por matéria</h3>
        <ul className="cx-prova-materias">
          {porMateria.map(([nome, v]) => (
            <li key={nome}>
              <span>{nome}</span>
              <span className="cx-chip-n">
                {v.certas}/{v.n}
              </span>
            </li>
          ))}
        </ul>

        <div className="cx-card-acoes">
          <button type="button" className="botao botao-ouro" onClick={() => setVerCorrecao((v) => !v)} aria-expanded={verCorrecao}>
            {verCorrecao ? "Esconder a correção" : "Ver correção"}
          </button>
          {paraRefazer.length > 0 && (
            <button type="button" className="botao" onClick={() => onRefazer(paraRefazer)}>
              Treinar as {paraRefazer.length === 1 ? "1 errada" : `${paraRefazer.length} erradas`}
            </button>
          )}
          <button type="button" className="botao" onClick={onVoltar}>
            Voltar
          </button>
        </div>
        <p className="cx-card-nota">
          As respondidas entraram no seu progresso da PRF Policial (as erradas vão para a revisão). As em branco contam como erro só nesta nota.
        </p>
      </section>

      {verCorrecao && (
        <section className="cx-card cx-prova-correcao" aria-label="Correção">
          <ul className="cx-chips cx-qtd" aria-label="Mostrar">
            {(
              [
                ["erradas", `Erradas (${erradas})`],
                ["branco", `Em branco (${branco})`],
                ["todas", `Todas (${total})`],
              ] as const
            ).map(([f, rot]) => (
              <li key={f}>
                <button type="button" aria-pressed={filtro === f} onClick={() => setFiltro(f)}>
                  {rot}
                </button>
              </li>
            ))}
          </ul>

          {lista.length === 0 && <p className="cx-vazio">Nenhuma questão aqui.</p>}

          <ol className="cx-prova-lista">
            {lista.map(({ q, k }) => (
              <ItemCorrecao key={q.id} q={q} k={k} resposta={prova.respostas[k]} situacao={situacao[k]} nomes={nomes} />
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}

function ItemCorrecao({
  q,
  k,
  resposta,
  situacao,
  nomes,
}: {
  q: Question<string>;
  k: number;
  resposta: number | null;
  situacao: string;
  nomes: Record<string, string>;
}) {
  const letras = letrasDe(q);
  const icone = situacao === "certa" ? "✓" : situacao === "errada" ? "✗" : "○";
  return (
    <li>
      <details className={`cx-prova-item cx-prova-${situacao}`}>
        <summary>
          <span className="cx-prova-icone" aria-hidden="true">
            {icone}
          </span>
          <span>
            Questão {k + 1} · {nomes[q.materia] ?? q.materia}
          </span>
          <span className="cx-prova-gab">
            {resposta === null ? "em branco" : `você: ${letras[resposta]}`} · gabarito: {letras[q.correta]}
          </span>
        </summary>
        <div className="questao-tags">
          <span className="questao-tag">{q.topico}</span>
          {q.fonte && <span className="questao-tag questao-tag-fonte">{q.fonte}</span>}
          {q.compartilhada && <span className="questao-tag questao-tag-fonte">📚 {q.compartilhada}</span>}
        </div>
        <p className="questao-enunciado">{q.enunciado}</p>
        <div className="alternativas">
          {q.alternativas.map((alt, idx) => (
            <Alternativa
              key={idx}
              letra={letras[idx]}
              texto={alt}
              classe={idx === q.correta ? "correta" : idx === resposta ? "errada" : ""}
              disabled
              eliminada={false}
              onEscolher={() => {}}
            />
          ))}
        </div>
        <div className="explicacao">
          <strong>Gabarito: {q.alternativas.length === 2 ? (q.alternativas as string[])[q.correta] : letras[q.correta]}. </strong>
          {q.explicacao}
          {q.explicacaoErradas && (
            <p className="explicacao-erradas">
              <strong>Por que as outras estão erradas:</strong> {q.explicacaoErradas}
            </p>
          )}
          {q.pegadinha && (
            <div className="explicacao-extra">
              <p>
                <strong>Armadilha:</strong> {q.pegadinha}
              </p>
            </div>
          )}
        </div>
      </details>
    </li>
  );
}
