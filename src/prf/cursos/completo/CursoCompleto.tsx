import { lazy, Suspense, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Quiz from "../../../components/Quiz";
import Result from "../../../components/Result";
import type { CursoId } from "../../../data/cursos";
import { computeStats, focoRecomendado } from "../../../lib/storage";
import type { Question, QuizMode, QuizSessionResult } from "../../../lib/types";
import type { ExtrasAula, ModuloAulas, TelaAulas } from "../../aulas/AulasCurso";
import { gruposAtuais } from "../../aulas/catalogo";
import { abrirCaderno } from "../../caderno/painel";
import CanetaPrf from "../../caneta/CanetaPrf";
import { avisoSemDestino, type Destino } from "../cronograma/plano";
import LayoutCurso, { type AbaCurso } from "../LayoutCurso";
import { progressoDoCurso } from "./armazenamento";
import InicioCurso from "./InicioCurso";
import {
  FILTROS_PADRAO,
  QUESTOES_POR_AULA,
  chaveAssunto,
  questoesDaAula,
  questoesDaMateria,
  sessaoFixacao,
  sessaoMateria,
  sessaoPersonalizada,
  sessaoRevisao,
  sessaoSimulado,
  ultimaResposta,
  type FiltrosCurso,
} from "./sessoes";
import type { DadosCursoCompleto, PropsLivro, PropsMapas, PropsRedacao, TentativaCurso } from "./tipos";
import { abaDaEntrada, type EntradaCurso } from "../../../central/entrada";

const AulasCurso = lazy(() => import("../../aulas/AulasCurso"));
const SemanaCurso = lazy(() => import("../SemanaCurso"));
const ResumosCurso = lazy(() => import("./ResumosCurso"));
const CronogramaCurso = lazy(() => import("../cronograma/CronogramaCurso"));

type View = AbaCurso | "quiz" | "result";

const ABAS: { id: AbaCurso; rotulo: string }[] = [
  { id: "treino", rotulo: "🎯 Treino" },
  { id: "aulas", rotulo: "🎬 Aulas" },
  { id: "semana", rotulo: "📈 Semana" },
  { id: "cronograma", rotulo: "📅 Cronograma" },
  { id: "resumos", rotulo: "📚 Resumos" },
];

const NOTA_SEM_QUESTOES =
  "Esta parte é só de leitura: aqui não tem questões. Elas ficam no fim de cada aula das matérias, só sobre o assunto daquela aula.";

interface SessaoAtiva {
  mode: QuizMode;
  questions: Question<string>[];
  iniciadoEm: string;
  /** Questões que já tinham resposta quando a sessão começou: a nova resposta delas não conta no percentual. */
  jaRespondidas: Set<string>;
}

interface CursoCompletoProps {
  curso: CursoId;
  nome: string;
  brasao: string;
  brasaoAlt: string;
  dados: DadosCursoCompleto;
  onTrocarCurso?: () => void;
  /** Aba (e aula ou mapa) em que o curso abre quando vem da Central. */
  entrada?: EntradaCurso;
}

/** Mapa aberto direto, ou a matéria dos mapas, quando o curso vem da Central. */
function mapasDaEntrada(entrada: EntradaCurso | undefined): PropsMapas["tela"] {
  if (entrada?.mapa) return { tipo: "mapa", aula: entrada.mapa };
  if (entrada?.aba === "mapas" && entrada.grupo) return { tipo: "materia", grupo: entrada.grupo };
  return { tipo: "inicio" };
}

/** Caneta por cima do enunciado e das alternativas, como na PRF ADM. */
function comCaneta(questaoId: string, conteudo: ReactNode) {
  return <CanetaPrf questaoId={questaoId}>{conteudo}</CanetaPrf>;
}

/** Curso com aulas, banco de questões e resumos: a estrutura da PRF ADM para os dados de qualquer curso. */
export default function CursoCompleto({
  curso,
  nome,
  brasao,
  brasaoAlt,
  dados,
  onTrocarCurso,
  entrada,
}: CursoCompletoProps) {
  const { banco } = dados;
  const progresso = useMemo(() => progressoDoCurso(curso), [curso]);
  const [view, setView] = useState<View>(() =>
    abaDaEntrada<AbaCurso>(
      entrada,
      [
        "treino",
        "aulas",
        "semana",
        "cronograma",
        "resumos",
        ...(dados.mapas ? (["mapas"] as const) : []),
        ...(dados.livro ? (["livro"] as const) : []),
        ...(dados.redacao ? (["redacao"] as const) : []),
      ],
      "treino",
    ),
  );
  const [tentativas, setTentativas] = useState<TentativaCurso[]>(() => progresso.tentativas());
  const [erradas, setErradas] = useState<string[]>(() => progresso.erradas());
  const [sessao, setSessao] = useState<SessaoAtiva | null>(null);
  const [resultado, setResultado] = useState<QuizSessionResult<string> | null>(null);
  const [repetidasNoResultado, setRepetidasNoResultado] = useState(0);
  // Aba para onde o quiz volta; a tela aberta nas aulas não se perde durante o quiz.
  const [origem, setOrigem] = useState<AbaCurso>("treino");
  const [telaAulas, setTelaAulas] = useState<TelaAulas>(() =>
    entrada?.aba === "aulas" ? { grupo: entrada.grupo, aula: entrada.aula } : {},
  );
  // Semana aberta no acompanhamento (segunda-feira 0h); null = a semana atual.
  const [semanaAberta, setSemanaAberta] = useState<number | null>(null);
  const [telaRedacao, setTelaRedacao] = useState<PropsRedacao["tela"]>({ tipo: "inicio" });
  // A aba de redação só existe no curso que traz uma; o código dela carrega quando a aba abre.
  const Redacao = useMemo(() => (dados.redacao ? lazy(dados.redacao) : null), [dados.redacao]);
  const [telaMapas, setTelaMapas] = useState<PropsMapas["tela"]>(() => mapasDaEntrada(entrada));
  // Os mapas mentais seguem a mesma regra: só no curso que traz, e só carregam ao abrir a aba.
  const Mapas = useMemo(() => (dados.mapas ? lazy(dados.mapas) : null), [dados.mapas]);
  const [telaLivro, setTelaLivro] = useState<PropsLivro["tela"]>({ tipo: "inicio" });
  // O Livro do CTB também: só no curso que traz, e o texto da lei (uns 400 KB) só baixa ao abrir a aba.
  const Livro = useMemo(() => (dados.livro ? lazy(dados.livro) : null), [dados.livro]);
  // Quem abre o Livro de dentro de um módulo das aulas ganha um botão para voltar a ele (o texto é o nome curto).
  const [retornoLivro, setRetornoLivro] = useState<string | null>(null);
  // Módulos extras das matérias, como o das infrações de trânsito: o código de cada um só baixa ao abrir.
  const modulosCarregados = useMemo(
    () => (dados.modulos ?? []).map((m) => ({ m, Comp: lazy(m.carregar) })),
    [dados.modulos],
  );
  const abas = useMemo(
    () => [
      ...ABAS,
      ...(Mapas ? [{ id: "mapas" as const, rotulo: "🧠 Mapas Mentais" }] : []),
      ...(Livro ? [{ id: "livro" as const, rotulo: "📖 Livro do CTB" }] : []),
      ...(Redacao ? [{ id: "redacao" as const, rotulo: "✍️ Redação" }] : []),
    ],
    [Mapas, Livro, Redacao],
  );

  const grupos = gruposAtuais();
  const destinosCronograma: Destino[] = [
    "aula",
    "questoes",
    "erros",
    "simulado",
    "resumos",
    ...(Mapas ? (["mapas"] as const) : []),
    ...(Redacao ? (["redacao"] as const) : []),
    "caderno",
  ];
  const materias = useMemo(
    () => grupos.filter((g) => !dados.semQuestoes.includes(g.id)),
    [grupos, dados.semQuestoes],
  );
  const nomes = useMemo(() => Object.fromEntries(grupos.map((g) => [g.id, g.nome])), [grupos]);
  const aulasSemQuestoes = useMemo(
    () =>
      new Set([
        ...grupos.filter((g) => dados.semQuestoes.includes(g.id)).flatMap((g) => g.aulas.map((a) => a.id)),
        ...dados.semQuestoes,
      ]),
    [grupos, dados.semQuestoes],
  );
  /**
   * No Treino, some a matéria que ficou sem nenhuma questão porque as aulas dela foram escondidas (ex.: Discursivas).
   * Os Resumos e os Mapas continuam com ela. Matéria sem questão e sem aula escondida segue como "em preparação".
   */
  const materiasTreino = useMemo(
    () =>
      materias.filter(
        (g) => banco.questoes.some((q) => q.materia === g.id) || !g.aulas.some((a) => aulasSemQuestoes.has(a.id)),
      ),
    [materias, aulasSemQuestoes, banco],
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view]);

  const stats = useMemo(() => computeStats(tentativas), [tentativas]);
  // Sem peso por matéria: ainda não há edital, então vale só o desempenho.
  const materiaFoco = useMemo(() => focoRecomendado(stats, {})[0]?.materia ?? null, [stats]);

  function abrirSessao(mode: QuizMode, questions: Question<string>[]) {
    if (questions.length === 0) return false;
    const jaRespondidas = new Set(progresso.tentativas().map((t) => t.questionId));
    setSessao({ mode, questions, iniciadoEm: new Date().toISOString(), jaRespondidas });
    setView("quiz");
    return true;
  }

  function iniciarQuiz(mode: QuizMode, materia?: string) {
    let questions: Question<string>[] = [];
    const ultima = ultimaResposta(progresso.todasAsRespostas());
    if (mode === "materia" && materia) questions = sessaoMateria(banco, materia, 10, ultima);
    else if (mode === "prova") questions = sessaoSimulado(banco, undefined, ultima);
    else if (mode === "revisao") questions = sessaoRevisao(banco, progresso.erradas());
    else if (mode === "treino-alvo" && materia) questions = sessaoMateria(banco, materia, 12, ultima);
    abrirSessao(mode, questions);
  }

  function iniciarPersonalizado(filtros: FiltrosCurso) {
    abrirSessao("personalizado", sessaoPersonalizada(banco, filtros, progresso.todasAsRespostas(), erradas));
  }

  /** Fixação da aula: ao terminar, o quiz volta para a mesma aula (ou para a aba de onde veio, como o Livro do CTB). */
  function fixarAula(aula: string, quantidade: number, volta: AbaCurso = "aulas"): boolean {
    const ok = abrirSessao("personalizado", sessaoFixacao(banco, aula, quantidade, progresso.todasAsRespostas()));
    if (ok) setOrigem(volta);
    return ok;
  }

  /** Treino de um assunto difícil da semana: ao terminar, o quiz volta para o acompanhamento. */
  function treinarDaSemana(materia: string, topico?: string) {
    const filtros: FiltrosCurso = {
      ...FILTROS_PADRAO,
      materias: [materia],
      topicos: topico ? [chaveAssunto(materia, topico)] : [],
    };
    if (abrirSessao("personalizado", sessaoPersonalizada(banco, filtros, progresso.todasAsRespostas(), erradas)))
      setOrigem("semana");
  }

  /** Botões das atividades do cronograma; false = não havia o que abrir. Ao terminar o quiz, volta para o cronograma. */
  function irDoCronograma(destino: Destino, grupo: string | null, aula?: { id: string }): boolean {
    const doCronograma = (ok: boolean) => {
      if (ok) setOrigem("cronograma");
      return ok;
    };
    switch (destino) {
      case "aula":
        abrirAula(grupo ? { grupo, aula: aula?.id } : {});
        return true;
      case "questoes":
        if (!grupo) {
          setView("treino");
          return true;
        }
        return doCronograma(
          abrirSessao(
            "personalizado",
            sessaoPersonalizada(banco, { ...FILTROS_PADRAO, materias: [grupo] }, progresso.todasAsRespostas(), erradas),
          ),
        );
      case "erros":
        return doCronograma(
          grupo
            ? abrirSessao(
                "personalizado",
                sessaoPersonalizada(
                  banco,
                  { ...FILTROS_PADRAO, materias: [grupo], situacao: "revisao", quantidade: "todas" },
                  progresso.todasAsRespostas(),
                  erradas,
                ),
              )
            : abrirSessao("revisao", sessaoRevisao(banco, progresso.erradas())),
        );
      case "simulado":
        setView("treino");
        return true;
      case "mapas":
        if (!Mapas) return false;
        setTelaMapas(grupo ? { tipo: "materia", grupo } : { tipo: "inicio" });
        setView("mapas");
        return true;
      case "resumos":
        setView("resumos");
        return true;
      case "redacao":
        if (!Redacao) return false;
        setTelaRedacao({ tipo: "inicio" });
        setView("redacao");
        return true;
      case "caderno":
        abrirCaderno();
        return true;
      default:
        return false;
    }
  }

  // Botão do cronograma tocado na Central: o curso abre direto no destino, uma vez só (o ref segura o modo estrito).
  const entradaFeita = useRef(false);
  const [avisoEntrada, setAvisoEntrada] = useState<string | null>(null);
  useEffect(() => {
    if (entradaFeita.current || !(entrada?.ir || entrada?.fixar)) return;
    entradaFeita.current = true;
    // "Questões da aula" tocado no Livro do CTB da Central: abre a fixação e, no fim, volta para a aba da entrada.
    if (entrada.fixar) {
      fixarAula(entrada.fixar, QUESTOES_POR_AULA, view === "quiz" || view === "result" ? "treino" : view);
      return;
    }
    if (!entrada.ir) return;
    const grupo = entrada.grupo ?? null;
    // Ao terminar o quiz, volta para a aba em que o curso abriu (o treino, no "Refazer" da Central).
    if (irDoCronograma(entrada.ir, grupo)) {
      if (view !== "quiz" && view !== "result") setOrigem(view);
    } else setAvisoEntrada(avisoSemDestino(entrada.ir, grupo ? (nomes[grupo] ?? grupo) : null));
    // eslint-disable-next-line react-hooks/exhaustive-deps -- só na abertura do curso
  }, []);
  useEffect(() => {
    if (view !== "cronograma") setAvisoEntrada(null);
  }, [view]);

  function finalizarQuiz(respostas: TentativaCurso[]) {
    if (!sessao) return;
    setResultado({
      mode: sessao.mode,
      total: respostas.length,
      acertos: respostas.filter((r) => r.acertou).length,
      respostas,
      iniciadoEm: sessao.iniciadoEm,
      finalizadoEm: new Date().toISOString(),
    });
    setRepetidasNoResultado(respostas.filter((r) => sessao.jaRespondidas.has(r.questionId)).length);
    setTentativas(progresso.tentativas());
    setErradas(progresso.erradas());
    setSessao(null);
    setView("result");
  }

  function abrirAula(tela: TelaAulas) {
    setTelaAulas(tela);
    setView("aulas");
  }

  function trocarAba(aba: AbaCurso) {
    setRetornoLivro(null);
    // Tocar de novo na aba das aulas volta para a lista das matérias; na da semana, para a semana atual.
    if (aba === "aulas" && view === "aulas") setTelaAulas({});
    if (aba === "semana" && view === "semana") setSemanaAberta(null);
    if (aba === "redacao" && view === "redacao") setTelaRedacao({ tipo: "inicio" });
    if (aba === "mapas" && view === "mapas") setTelaMapas({ tipo: "inicio" });
    if (aba === "livro" && view === "livro") setTelaLivro({ tipo: "inicio" });
    setView(aba);
  }

  function resetarMateria(materia: string) {
    const ids = new Set(questoesDaMateria(banco, materia).map((q) => q.id));
    setTentativas(progresso.zerarMateria(materia, ids));
    setErradas(progresso.erradas());
  }

  function voltar() {
    // Quem sai no meio do quiz já deixou respostas gravadas: o placar da tela inicial precisa delas.
    setTentativas(progresso.tentativas());
    setErradas(progresso.erradas());
    setSessao(null);
    setResultado(null);
    setView(origem);
    setOrigem("treino");
  }

  const extras: ExtrasAula = {
    questoesTexto: `${QUESTOES_POR_AULA} questões`,
    fixacao: (a) => {
      const disponiveis = questoesDaAula(banco, a.id).length;
      return { disponiveis, quantidade: Math.min(QUESTOES_POR_AULA, disponiveis) };
    },
    doNivelamento: (a) => aulasSemQuestoes.has(a.id),
    resumo: (a) => banco.resumos[a.id],
    banco: (a) => {
      const ultima = ultimaResposta(tentativas);
      const c = { certas: 0, erradas: 0, nunca: 0 };
      for (const q of questoesDaAula(banco, a.id)) {
        const acertou = ultima.get(q.id);
        if (acertou === undefined) c.nunca++;
        else if (acertou) c.certas++;
        else c.erradas++;
      }
      return c;
    },
    onFixar: (a, quantidade) => fixarAula(a.id, quantidade),
    assuntos: (a) => [...new Set(questoesDaAula(banco, a.id).map((q) => q.topico))],
    notaSemQuestoes: NOTA_SEM_QUESTOES,
    fimSemQuestoes: "Parte concluída.",
  };

  const modulosAulas: ModuloAulas[] = modulosCarregados.map(({ m, Comp }) => ({
    id: m.id,
    grupo: m.grupo,
    emoji: m.emoji,
    titulo: m.titulo,
    descricao: m.descricao,
    render: (voltarDoModulo) => (
      <Suspense fallback={<div className="vazio">Carregando o módulo…</div>}>
        <Comp
          onVoltar={voltarDoModulo}
          onLivro={(t) => {
            if (!Livro) return;
            setTelaLivro(t);
            setRetornoLivro(m.curto);
            setView("livro");
          }}
          onAula={(aula) => abrirAula({ grupo: m.grupo, aula })}
        />
      </Suspense>
    ),
  }));

  const noQuiz = view === "quiz" || view === "result";
  return (
    <LayoutCurso
      nome={nome}
      brasao={brasao}
      brasaoAlt={brasaoAlt}
      abaAtiva={view === "quiz" || view === "result" ? "treino" : view}
      onTrocarAba={trocarAba}
      onTrocarCurso={onTrocarCurso}
      abas={abas}
      sub="Pré-edital · aulas, questões e resumos"
      mostrarVoltar={noQuiz}
      onVoltar={voltar}
    >
      {view === "treino" && (
        <InicioCurso
          dados={dados}
          materias={materiasTreino}
          stats={stats}
          tentativas={tentativas}
          erradas={erradas}
          materiaFoco={materiaFoco}
          onIniciar={iniciarQuiz}
          onPersonalizado={iniciarPersonalizado}
          onResetarMateria={resetarMateria}
        />
      )}
      {view === "aulas" && (
        <Suspense fallback={<div className="vazio">Carregando as aulas…</div>}>
          <AulasCurso tela={telaAulas} onTela={setTelaAulas} extras={extras} modulos={modulosAulas} />
        </Suspense>
      )}
      {view === "semana" && (
        <Suspense fallback={<div className="vazio">Carregando o acompanhamento…</div>}>
          <SemanaCurso
            inicio={semanaAberta}
            onInicio={setSemanaAberta}
            onAbrirAula={abrirAula}
            questoes={{ tentativas, banco, total: progresso.total(), onTreinar: treinarDaSemana }}
          />
        </Suspense>
      )}
      {view === "cronograma" && (
        <Suspense fallback={<div className="vazio">Carregando o cronograma…</div>}>
          <CronogramaCurso
            curso={curso}
            grupos={grupos}
            destinos={destinosCronograma}
            onIr={irDoCronograma}
            avisoInicial={avisoEntrada}
          />
        </Suspense>
      )}
      {view === "resumos" && (
        <Suspense fallback={<div className="vazio">Carregando os resumos…</div>}>
          <ResumosCurso materias={materias} resumos={banco.resumos} onAbrirAula={abrirAula} />
        </Suspense>
      )}
      {view === "mapas" && Mapas && (
        <Suspense fallback={<div className="vazio">Carregando os mapas…</div>}>
          <Mapas tela={telaMapas} onTela={setTelaMapas} grupos={grupos} onAbrirAula={abrirAula} />
        </Suspense>
      )}
      {view === "livro" && Livro && retornoLivro && (
        <button
          className="prf-livro-retorno"
          onClick={() => {
            setRetornoLivro(null);
            setView("aulas");
          }}
        >
          ← Voltar para {retornoLivro}
        </button>
      )}
      {view === "livro" && Livro && (
        <Suspense fallback={<div className="vazio">Carregando o Livro do CTB…</div>}>
          <Livro
            tela={telaLivro}
            onTela={setTelaLivro}
            onAbrirMapa={(aula) => {
              setTelaMapas({ tipo: "mapa", aula });
              setView("mapas");
            }}
            onAbrirAula={(aula) => abrirAula({ grupo: "transito", aula })}
            onQuestoes={(aula) => fixarAula(aula, QUESTOES_POR_AULA, "livro")}
            questoesDaAula={(aula) => questoesDaAula(banco, aula).length}
          />
        </Suspense>
      )}
      {view === "redacao" && Redacao && (
        <Suspense fallback={<div className="vazio">Carregando a redação…</div>}>
          <Redacao tela={telaRedacao} onTela={setTelaRedacao} />
        </Suspense>
      )}
      {view === "quiz" && sessao && (
        <>
          <Quiz
            questions={sessao.questions}
            modo={sessao.mode}
            onFinalizar={finalizarQuiz}
            onSair={voltar}
            gravacao={progresso.gravacao}
            curso={curso}
            envolverQuestao={comCaneta}
            jaRespondidas={sessao.jaRespondidas}
          />
          {/* Espaço no fim para a barra da caneta não cobrir os últimos botões. */}
          <div className="prf-caneta-espaco" aria-hidden="true" />
        </>
      )}
      {view === "result" && resultado && (
        <Result
          resultado={resultado}
          onVoltarHome={voltar}
          onRevisarErros={() => iniciarQuiz("revisao")}
          nomes={nomes}
          repetidas={repetidasNoResultado}
        />
      )}
    </LayoutCurso>
  );
}
