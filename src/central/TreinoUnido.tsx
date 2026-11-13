import { useMemo, useState, type ReactNode } from "react";
import Quiz from "../components/Quiz";
import Result from "../components/Result";
import { TOTAIS_TEMAS_POL } from "../banco/totaisTemas";
import { embaralharAlternativas, shuffle } from "../lib/quizEngine";
import type { Question, QuizMode, QuizSessionResult } from "../lib/types";
import CanetaPrf from "../prf/caneta/CanetaPrf";
import { progressoDoCurso } from "../prf/cursos/completo/armazenamento";
import { DADOS } from "../prf/cursos/completo/prf-policial/index";
import { ultimaResposta } from "../prf/cursos/completo/sessoes";
import type { QuestaoCurso, TentativaCurso } from "../prf/cursos/completo/tipos";
import { GRUPOS } from "../prf/cursos/dados/prf-policial";
import ProvaCentral, {
  descartarProvaSalva,
  lerProvaSalva,
  novaProva,
  questoesDaProva,
  relogio,
  type BlocoProva,
  type ProvaSalva,
} from "./ProvaCentral";

/**
 * Treino da Central (12/11/26): sem escolher curso. O banco é o da PRF Policial, que já junta as questões da PRF ADM e
 * da PCPR do mesmo assunto (sem as de exemplo regional ou da Polícia Civil). As respostas gravam no progresso da PRF
 * Policial, então contam na semana e no acerto do curso. Quatro jeitos de treinar: por matéria (com conteúdo e
 * quantidade), simulado no formato da prova de 2021, aleatório de todas as matérias e montado matéria por matéria.
 */
const CURSO = "prf-policial";
const progresso = progressoDoCurso(CURSO);

interface Conteudo {
  aula: string;
  nome: string;
  questoes: QuestaoCurso[];
}

interface MateriaTreino {
  id: string;
  nome: string;
  questoes: QuestaoCurso[];
  conteudos: Conteudo[];
}

/** Os dois cursos de Administrativo (A e B) viram uma matéria só. */
const JUNTAR: Record<string, { id: string; nome: string; prefixo: string }> = {
  "adm-a": { id: "adm", nome: "Direito Administrativo", prefixo: "Curso A · " },
  "adm-b": { id: "adm", nome: "Direito Administrativo", prefixo: "Curso B · " },
};

const NOME_TEMA = new Map(TOTAIS_TEMAS_POL.flatMap((m) => m.temas.map((t) => [t.aula, t.nome] as const)));

/** Nome do tema (matérias do banco por tema); senão, o da aula sem as reticências; senão, os assuntos mais comuns. */
function nomeDoConteudo(aula: string, nomeAula: string, questoes: QuestaoCurso[]): string {
  const tema = NOME_TEMA.get(aula);
  if (tema) return tema;
  const limpo = nomeAula.replace(/\s*…\s*$/, "").trim();
  if (limpo && !/^só em pdf$/i.test(limpo)) return limpo;
  const conta = new Map<string, number>();
  for (const q of questoes) conta.set(q.topico, (conta.get(q.topico) ?? 0) + 1);
  return [...conta.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([t]) => t)
    .join(" · ");
}

function montarMaterias(): MateriaTreino[] {
  const porAula = new Map<string, QuestaoCurso[]>();
  for (const q of DADOS.banco.questoes) {
    const a = q.aula ?? "";
    porAula.set(a, [...(porAula.get(a) ?? []), q]);
  }
  const materias: MateriaTreino[] = [];
  for (const g of GRUPOS) {
    const juntar = JUNTAR[g.id];
    const id = juntar?.id ?? g.id;
    let m = materias.find((x) => x.id === id);
    for (const a of g.aulas) {
      const questoes = porAula.get(a.id);
      if (!questoes?.length) continue;
      if (!m) {
        m = { id, nome: juntar?.nome ?? g.nome, questoes: [], conteudos: [] };
        materias.push(m);
      }
      m.questoes.push(...questoes);
      m.conteudos.push({
        aula: a.id,
        nome: `${juntar?.prefixo ?? ""}Aula ${a.n} · ${nomeDoConteudo(a.id, a.nome, questoes)}`,
        questoes,
      });
    }
  }
  return materias;
}

const POR_ID = new Map(DADOS.banco.questoes.map((q) => [q.id, q]));

/** Primeiro as nunca respondidas, depois as erradas na última vez, por fim as acertadas (cada grupo embaralhado). */
function porPrioridade(questoes: QuestaoCurso[], ultima: Map<string, boolean>): QuestaoCurso[] {
  const nunca: QuestaoCurso[] = [];
  const erradas: QuestaoCurso[] = [];
  const certas: QuestaoCurso[] = [];
  for (const q of questoes) {
    const u = ultima.get(q.id);
    (u === undefined ? nunca : u ? certas : erradas).push(q);
  }
  return [...shuffle(nunca), ...shuffle(erradas), ...shuffle(certas)];
}

/** As `quantidade` de maior prioridade, misturadas entre si. */
function escolher(questoes: QuestaoCurso[], quantidade: number | "todas", ultima: Map<string, boolean>): QuestaoCurso[] {
  const lista = porPrioridade(questoes, ultima);
  return quantidade === "todas" ? lista : shuffle(lista.slice(0, quantidade));
}

const paraSessao = (questoes: QuestaoCurso[]): Question<string>[] => questoes.map(embaralharAlternativas);

// ---------- Prova de 2021 ----------

type Lingua = "ingles" | "espanhol";
const LINGUA = "lingua";

/** Itens por matéria na prova de 2021 (Cebraspe, 120 itens): a língua estrangeira é inglês ou espanhol, à escolha. */
const PROVA_2021: { bloco: string; itens: [string, number][] }[] = [
  {
    bloco: "Bloco I · Conhecimentos básicos",
    itens: [
      ["pt", 18],
      [LINGUA, 8],
      ["info", 7],
      ["rlm", 6],
      ["etica", 6],
      ["fisica", 5],
      ["geopolitica", 5],
    ],
  },
  { bloco: "Bloco II · Legislação de trânsito", itens: [["transito", 30]] },
  {
    bloco: "Bloco III · Direito",
    itens: [
      ["adm", 7],
      ["con", 7],
      ["especial", 6],
      ["penal", 5],
      ["proc", 5],
      ["dh", 5],
    ],
  },
];

const TOTAL_2021 = PROVA_2021.reduce((s, b) => s + b.itens.reduce((t, [, q]) => t + q, 0), 0);

const idDaProva = (id: string, lingua: Lingua) => (id === LINGUA ? lingua : id);

const BLOCOS: BlocoProva[] = PROVA_2021.map((b) => ({ nome: b.bloco, total: b.itens.reduce((s, [, q]) => s + q, 0) }));

// ---------- Tela ----------

type Modo = "materia" | "simulado" | "aleatorio" | "montar";

const MODOS: { id: Modo; rotulo: string; dica: string }[] = [
  { id: "materia", rotulo: "📘 Por matéria", dica: "Escolha a matéria, o conteúdo e quantas questões quer fazer." },
  {
    id: "simulado",
    rotulo: "🎯 Simulado PRF",
    dica: `${TOTAL_2021} questões, na mesma quantidade por matéria da última prova (2021, Cebraspe). Modo prova: o gabarito só aparece quando você entregar.`,
  },
  { id: "aleatorio", rotulo: "🎲 Aleatório", dica: "Questões sorteadas de todas as matérias, misturadas." },
  { id: "montar", rotulo: "🧩 Monte o seu", dica: "Você escolhe quantas questões quer de cada matéria." },
];

const CHAVE_MODO = "cx:questoes:modo:v1";

function lerModo(): Modo {
  try {
    const v = localStorage.getItem(CHAVE_MODO);
    if (MODOS.some((m) => m.id === v)) return v as Modo;
  } catch {
    /* sem armazenamento: começa no primeiro */
  }
  return "materia";
}

function gravarModo(m: Modo) {
  try {
    localStorage.setItem(CHAVE_MODO, m);
  } catch {
    /* sem armazenamento: só não lembra */
  }
}

function comCaneta(questaoId: string, conteudo: ReactNode) {
  return <CanetaPrf questaoId={questaoId}>{conteudo}</CanetaPrf>;
}

const NOMES: Record<string, string> = Object.fromEntries(GRUPOS.map((g) => [g.id, JUNTAR[g.id]?.nome ?? g.nome]));

const n = (v: number) => v.toLocaleString("pt-BR");
const questoesTxt = (v: number) => (v === 1 ? "questão" : "questões");

function paraOTopo() {
  window.scrollTo(0, 0);
  document.querySelector(".cx-conteudo")?.scrollTo?.(0, 0);
}

function Quantidades({
  valor,
  opcoes,
  total,
  comTodas,
  onEscolher,
}: {
  valor: number | "todas";
  opcoes: number[];
  total: number;
  comTodas?: boolean;
  onEscolher: (v: number | "todas") => void;
}) {
  const validas = opcoes.filter((o) => o < total);
  return (
    <div className="cx-campo">
      <span className="cx-campo-rotulo" id="cx-qtd-rotulo">
        Quantidade
      </span>
      <ul className="cx-chips cx-qtd" aria-labelledby="cx-qtd-rotulo">
        {validas.map((o) => (
          <li key={o}>
            <button type="button" aria-pressed={valor === o} onClick={() => onEscolher(o)}>
              {o}
            </button>
          </li>
        ))}
        {comTodas !== false && (
          <li>
            <button type="button" aria-pressed={valor === "todas" || (typeof valor === "number" && valor >= total)} onClick={() => onEscolher("todas")}>
              Todas ({n(total)})
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default function TreinoUnido() {
  const materias = useMemo(montarMaterias, []);
  const [modo, setModo] = useState<Modo>(lerModo);
  const [materiaId, setMateriaId] = useState(materias[0]?.id ?? "");
  const [aula, setAula] = useState("");
  const [qtdMateria, setQtdMateria] = useState<number | "todas">(20);
  const [qtdAleatorio, setQtdAleatorio] = useState<number>(20);
  const [lingua, setLingua] = useState<Lingua>("ingles");
  const [cotas, setCotas] = useState<Record<string, number>>({});
  const [sessao, setSessao] = useState<{ questions: Question<string>[]; iniciadoEm: string; modo: QuizMode } | null>(
    null,
  );
  const [resultado, setResultado] = useState<QuizSessionResult<string> | null>(null);
  const [prova, setProva] = useState<{ salva: ProvaSalva; questoes: Question<string>[] } | null>(null);
  const [provaPendente, setProvaPendente] = useState<ProvaSalva | null>(lerProvaSalva);
  const [avisoProva, setAvisoProva] = useState("");
  // Muda a cada treino que termina, para o placar ler o progresso de novo.
  const [rodada, setRodada] = useState(0);

  const ultima = useMemo(() => ultimaResposta(progresso.tentativas()), [rodada]);
  const porMateria = useMemo(() => new Map(materias.map((m) => [m.id, m])), [materias]);
  const todas = DADOS.banco.questoes;

  const materia = porMateria.get(materiaId) ?? materias[0];
  const conteudo = materia?.conteudos.find((c) => c.aula === aula);
  const escolhidas = conteudo?.questoes ?? materia?.questoes ?? [];

  const placar = useMemo(() => {
    let feitas = 0;
    let certas = 0;
    for (const q of escolhidas) {
      const u = ultima.get(q.id);
      if (u === undefined) continue;
      feitas++;
      if (u) certas++;
    }
    return { feitas, certas };
  }, [escolhidas, ultima]);

  const totalCotas = materias.reduce((s, m) => s + Math.min(cotas[m.id] ?? 0, m.questoes.length), 0);

  function trocarModo(m: Modo) {
    setModo(m);
    gravarModo(m);
  }

  function iniciar(questoes: Question<string>[], modoQuiz: QuizMode = "personalizado") {
    if (questoes.length === 0) return;
    setResultado(null);
    setSessao({ questions: questoes, iniciadoEm: new Date().toISOString(), modo: modoQuiz });
    paraOTopo();
  }

  function iniciarMateria() {
    iniciar(paraSessao(escolher(escolhidas, qtdMateria, ultima)));
  }

  function abrirProva(salva: ProvaSalva) {
    const questoes = questoesDaProva(salva, POR_ID);
    if (!questoes) {
      descartarProvaSalva();
      setProvaPendente(null);
      setAvisoProva("O banco mudou desde que você começou, então aquela prova não pôde continuar. Comece outra.");
      return;
    }
    setAvisoProva("");
    setResultado(null);
    setProva({ salva, questoes });
    paraOTopo();
  }

  function iniciarSimulado() {
    const lista = PROVA_2021.flatMap((b, bloco) =>
      b.itens.flatMap(([id, q]) =>
        escolher(porMateria.get(idDaProva(id, lingua))?.questoes ?? [], q, ultima).map((questao) => ({ q: questao, bloco })),
      ),
    );
    if (lista.length > 0) abrirProva(novaProva(lista));
  }

  function descartarProva() {
    descartarProvaSalva();
    setProvaPendente(null);
  }

  function sairDaProva() {
    setProva(null);
    setProvaPendente(lerProvaSalva());
    setRodada((r) => r + 1);
    paraOTopo();
  }

  function refazerDaProva(ids: string[]) {
    setProva(null);
    setProvaPendente(lerProvaSalva());
    setRodada((r) => r + 1);
    const qs = ids.map((id) => POR_ID.get(id)).filter((q): q is QuestaoCurso => Boolean(q));
    iniciar(paraSessao(shuffle(qs)));
  }

  function iniciarAleatorio() {
    iniciar(paraSessao(escolher(todas, qtdAleatorio, ultima)));
  }

  function iniciarMontado() {
    const lista = materias.flatMap((m) => {
      const q = Math.min(cotas[m.id] ?? 0, m.questoes.length);
      return q > 0 ? escolher(m.questoes, q, ultima) : [];
    });
    iniciar(paraSessao(lista));
  }

  function mudarCota(id: string, valor: number, maximo: number) {
    const v = Math.max(0, Math.min(maximo, Math.round(Number.isFinite(valor) ? valor : 0)));
    setCotas((c) => ({ ...c, [id]: v }));
  }

  function cotasDaProva() {
    const c: Record<string, number> = {};
    for (const b of PROVA_2021) for (const [id, q] of b.itens) c[idDaProva(id, lingua)] = q;
    setCotas(c);
  }

  function finalizar(respostas: TentativaCurso[]) {
    if (!sessao) return;
    setResultado({
      mode: sessao.modo,
      total: respostas.length,
      acertos: respostas.filter((r) => r.acertou).length,
      respostas,
      iniciadoEm: sessao.iniciadoEm,
      finalizadoEm: new Date().toISOString(),
    });
    setSessao(null);
    setRodada((r) => r + 1);
    paraOTopo();
  }

  function voltar() {
    setSessao(null);
    setResultado(null);
    setRodada((r) => r + 1);
    paraOTopo();
  }

  function revisarErros() {
    if (!resultado) return;
    const erradas = resultado.respostas
      .filter((r) => !r.acertou)
      .map((r) => POR_ID.get(r.questionId))
      .filter((q): q is QuestaoCurso => Boolean(q));
    iniciar(paraSessao(shuffle(erradas)));
  }

  if (prova) {
    return (
      <div className="cx-treino-quiz">
        <ProvaCentral
          salva={prova.salva}
          questoes={prova.questoes}
          blocos={BLOCOS}
          nomes={NOMES}
          registrar={progresso.gravacao.registrar}
          envolver={comCaneta}
          onPausar={sairDaProva}
          onVoltar={sairDaProva}
          onRefazer={refazerDaProva}
        />
        <div className="prf-caneta-espaco" aria-hidden="true" />
      </div>
    );
  }

  if (sessao) {
    return (
      <div className="cx-treino-quiz">
        <Quiz
          questions={sessao.questions}
          modo={sessao.modo}
          onFinalizar={finalizar}
          onSair={voltar}
          gravacao={progresso.gravacao}
          curso={CURSO}
          envolverQuestao={comCaneta}
        />
        {/* Espaço no fim para a barra da caneta não cobrir os últimos botões. */}
        <div className="prf-caneta-espaco" aria-hidden="true" />
      </div>
    );
  }

  if (resultado) {
    return (
      <div className="cx-treino-quiz">
        <Result resultado={resultado} onVoltarHome={voltar} onRevisarErros={revisarErros} nomes={NOMES} />
      </div>
    );
  }

  if (!materia) return <p className="cx-vazio">Ainda não há questões.</p>;

  const pctAcerto = placar.feitas > 0 ? Math.round((placar.certas / placar.feitas) * 100) : null;
  const dica = MODOS.find((m) => m.id === modo)?.dica;
  const nomeLingua = lingua === "ingles" ? "Inglês" : "Espanhol";
  const nuncaNoBanco = todas.reduce((s, q) => s + (ultima.has(q.id) ? 0 : 1), 0);

  return (
    <div className="cx-hubs">
      <p className="cx-intro">Todas as questões, de todos os cursos, juntas. Escolha como quer treinar.</p>

      <ul className="cx-chips cx-modos" aria-label="Como treinar">
        {MODOS.map((m) => (
          <li key={m.id}>
            <button type="button" aria-pressed={modo === m.id} onClick={() => trocarModo(m.id)}>
              {m.rotulo}
            </button>
          </li>
        ))}
      </ul>

      <section className="cx-card cx-treino" aria-label={MODOS.find((m) => m.id === modo)?.rotulo}>
        <p className="cx-treino-dica">{dica}</p>

        {modo === "materia" && (
          <>
            <label className="cx-campo">
              <span className="cx-campo-rotulo">Matéria</span>
              <select
                value={materia.id}
                onChange={(e) => {
                  setMateriaId(e.target.value);
                  setAula("");
                }}
              >
                {materias.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.nome} ({n(m.questoes.length)})
                  </option>
                ))}
              </select>
            </label>

            <label className="cx-campo">
              <span className="cx-campo-rotulo">Conteúdo</span>
              <select value={conteudo?.aula ?? ""} onChange={(e) => setAula(e.target.value)}>
                <option value="">Todo o conteúdo ({n(materia.questoes.length)})</option>
                {materia.conteudos.map((c) => (
                  <option key={c.aula} value={c.aula}>
                    {c.nome} ({n(c.questoes.length)})
                  </option>
                ))}
              </select>
            </label>

            <Quantidades valor={qtdMateria} opcoes={[10, 20, 30, 50]} total={escolhidas.length} onEscolher={setQtdMateria} />

            <p className="cx-treino-resumo">
              <strong>{n(qtdMateria === "todas" ? escolhidas.length : Math.min(qtdMateria, escolhidas.length))}</strong>{" "}
              de {n(escolhidas.length)} {questoesTxt(escolhidas.length)}
              {placar.feitas > 0 && (
                <>
                  {" "}
                  · {n(placar.feitas)} já respondidas · {pctAcerto}% de acerto
                </>
              )}
            </p>

            <button type="button" className="botao botao-ouro cx-treino-iniciar" onClick={iniciarMateria}>
              Iniciar treino →
            </button>
          </>
        )}

        {modo === "simulado" && (
          <>
            <div className="cx-campo">
              <span className="cx-campo-rotulo" id="cx-lingua-rotulo">
                Língua estrangeira
              </span>
              <ul className="cx-chips cx-qtd" aria-labelledby="cx-lingua-rotulo">
                {(["ingles", "espanhol"] as const).map((l) => (
                  <li key={l}>
                    <button type="button" aria-pressed={lingua === l} onClick={() => setLingua(l)}>
                      {l === "ingles" ? "Inglês" : "Espanhol"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cx-dist">
              {PROVA_2021.map((b) => (
                <div key={b.bloco} className="cx-dist-bloco">
                  <h3 className="cx-dist-titulo">
                    <span>{b.bloco}</span>
                    <span>{b.itens.reduce((s, [, q]) => s + q, 0)}</span>
                  </h3>
                  <ul>
                    {b.itens.map(([id, q]) => (
                      <li key={id}>
                        <span>{id === LINGUA ? `Língua estrangeira (${nomeLingua})` : porMateria.get(id)?.nome ?? id}</span>
                        <span className="cx-chip-n">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="cx-treino-resumo">
              <strong>{TOTAL_2021}</strong> questões · na ordem da prova, bloco por bloco · gabarito só no fim
            </p>

            {avisoProva && <p className="cx-prova-aviso">{avisoProva}</p>}

            {provaPendente ? (
              <div className="cx-prova-pendente">
                <p>
                  Você tem uma prova em andamento:{" "}
                  <strong>
                    {provaPendente.respostas.filter((r) => r !== null).length} de {provaPendente.itens.length}
                  </strong>{" "}
                  marcadas · ⏱ {relogio(provaPendente.decorridoMs)}
                </p>
                <div className="cx-card-acoes">
                  <button type="button" className="botao botao-ouro" onClick={() => abrirProva(provaPendente)}>
                    Continuar prova →
                  </button>
                  <button type="button" className="botao" onClick={descartarProva}>
                    Descartar
                  </button>
                </div>
              </div>
            ) : (
              <button type="button" className="botao botao-ouro cx-treino-iniciar" onClick={iniciarSimulado}>
                Iniciar simulado →
              </button>
            )}
          </>
        )}

        {modo === "aleatorio" && (
          <>
            <Quantidades
              valor={qtdAleatorio}
              opcoes={[10, 20, 30, 50, 100]}
              total={todas.length}
              comTodas={false}
              onEscolher={(v) => setQtdAleatorio(v === "todas" ? todas.length : v)}
            />
            <p className="cx-treino-resumo">
              <strong>{n(qtdAleatorio)}</strong> questões de {materias.length} matérias · {n(nuncaNoBanco)} de{" "}
              {n(todas.length)} você ainda não respondeu
            </p>
            <button type="button" className="botao botao-ouro cx-treino-iniciar" onClick={iniciarAleatorio}>
              Iniciar treino →
            </button>
          </>
        )}

        {modo === "montar" && (
          <>
            <div className="cx-cotas-acoes">
              <button type="button" className="botao" onClick={cotasDaProva}>
                Preencher como a prova
              </button>
              <button type="button" className="botao" onClick={() => setCotas({})} disabled={totalCotas === 0}>
                Zerar
              </button>
            </div>

            <ul className="cx-cotas">
              {materias.map((m) => {
                const v = Math.min(cotas[m.id] ?? 0, m.questoes.length);
                const max = m.questoes.length;
                return (
                  <li key={m.id} className={v > 0 ? "cx-cota-ativa" : undefined}>
                    <span className="cx-cota-nome">
                      {m.nome} <span className="cx-cota-max">de {n(max)}</span>
                    </span>
                    <span className="cx-passo">
                      <button
                        type="button"
                        aria-label={`Menos 5 de ${m.nome}`}
                        onClick={() => mudarCota(m.id, v - 5, max)}
                        disabled={v === 0}
                      >
                        −
                      </button>
                      <input
                        type="number"
                        inputMode="numeric"
                        min={0}
                        max={max}
                        value={v}
                        aria-label={`Questões de ${m.nome}`}
                        onChange={(e) => mudarCota(m.id, e.target.valueAsNumber, max)}
                        onFocus={(e) => e.target.select()}
                      />
                      <button
                        type="button"
                        aria-label={`Mais 5 de ${m.nome}`}
                        onClick={() => mudarCota(m.id, v + 5, max)}
                        disabled={v >= max}
                      >
                        +
                      </button>
                    </span>
                  </li>
                );
              })}
            </ul>

            <p className="cx-treino-resumo" aria-live="polite">
              Total: <strong>{n(totalCotas)}</strong> {questoesTxt(totalCotas)}
            </p>

            <button
              type="button"
              className="botao botao-ouro cx-treino-iniciar"
              onClick={iniciarMontado}
              disabled={totalCotas === 0}
            >
              Iniciar treino →
            </button>
          </>
        )}

        <p className="cx-card-nota">
          {modo === "simulado"
            ? "Na prova de verdade os itens são de Certo ou Errado; aqui vêm as questões do banco, na mesma quantidade por matéria. Primeiro as que você nunca respondeu. Dá para sair e continuar depois."
            : "Primeiro vêm as que você nunca respondeu, depois as que errou. Pode sair quando quiser."}
        </p>
      </section>
    </div>
  );
}
