import { useEffect, useMemo, useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Conteudo from "./components/Conteudo";
import Videos from "./components/Videos";
import ProvasReais from "./components/ProvasReais";
import Apostas from "./components/Apostas";
import Concurso from "./components/Concurso";
import Tempos from "./components/Tempos";
import ModelosMentais from "./components/ModelosMentais";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Auth from "./components/Auth";
import RetaFinal, { type AncoraReta } from "./components/RetaFinal";
import Simulado from "./components/Simulado";
import SimuladoResultadoView from "./components/SimuladoResultado";
import { supabase, isSupabaseConfigured } from "./lib/supabase";
import {
  computeStats,
  focoRecomendado,
  getLocalAttempts,
  getSimuladoAtivo,
  getSimulados,
  getWrongQueue,
  recordAttempts,
  resetAttemptsMateria,
  salvarSimuladoAtivo,
  salvarSimuladoResultado,
  syncRemoteAttempts,
} from "./lib/storage";
import { buildSessaoMateria, buildSessaoProva, buildSessaoRevisao, buildSessaoTreinoAlvo } from "./lib/quizEngine";
import { buildSessaoReforco, buildSimulado, carregarSimuladoAtivo, corrigirSimulado, restanteMs } from "./lib/retaFinal";
import { SUBJECT_WEIGHTS } from "./data/subjects";
import type {
  AttemptRecord,
  Question,
  QuizMode,
  QuizSessionResult,
  SimuladoAtivo,
  SimuladoResultado,
  SubjectId,
  SubjectStats,
} from "./lib/types";

type View =
  | "home"
  | "conteudo"
  | "videos"
  | "provas"
  | "apostas"
  | "concurso"
  | "tempos"
  | "modelos-mentais"
  | "reta-final"
  | "simulado"
  | "simulado-resultado"
  | "quiz"
  | "result"
  | "auth";

const ABAS_PRINCIPAIS: View[] = [
  "home",
  "reta-final",
  "conteudo",
  "videos",
  "provas",
  "apostas",
  "concurso",
  "tempos",
  "modelos-mentais",
];

interface SessaoAtiva {
  mode: QuizMode;
  questions: Question[];
  iniciadoEm: string;
}

export default function App() {
  const [view, setView] = useState<View>("home");
  const [attempts, setAttempts] = useState<AttemptRecord[]>(() => getLocalAttempts());
  const [wrongCount, setWrongCount] = useState(() => getWrongQueue().length);
  const [sessao, setSessao] = useState<SessaoAtiva | null>(null);
  const [resultado, setResultado] = useState<QuizSessionResult | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [simuladoAtivo, setSimuladoAtivo] = useState<SimuladoAtivo | null>(() => carregarSimuladoAtivo());
  const [simulados, setSimulados] = useState<SimuladoResultado[]>(() => getSimulados());
  const [simuladoVisto, setSimuladoVisto] = useState<SimuladoResultado | null>(null);
  const [ancoraReta, setAncoraReta] = useState<AncoraReta | null>(null);
  const [nomeExterna, setNomeExterna] = useState<string | null>(null);
  // Resultado recém-entregue abre com a tela animada de fim do simulado; aberto pelo histórico, não.
  const [animarFinal, setAnimarFinal] = useState(false);

  // Simulado cujo prazo de 5h acabou com o app fechado: corrige como se tivesse sido entregue no fim do tempo.
  useEffect(() => {
    const s = carregarSimuladoAtivo();
    if (s && restanteMs(s) <= 0) entregarSimulado(s, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Toda troca de tela começa do topo; a Reta final aberta com âncora rola sozinha até a seção.
  useEffect(() => {
    if (view === "reta-final" && ancoraReta) return;
    window.scrollTo({ top: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  useEffect(() => {
    syncRemoteAttempts().then((remoto) => {
      setAttempts(remoto);
      setWrongCount(getWrongQueue().length);
    });

    if (!isSupabaseConfigured || !supabase) return;

    supabase.auth.getUser().then(({ data }) => {
      setUserEmail(data.user?.email ?? null);
    });

    const { data: assinatura } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email ?? null);
    });

    return () => assinatura.subscription.unsubscribe();
  }, []);

  const stats: SubjectStats[] = useMemo(() => computeStats(attempts), [attempts]);

  const materiaFoco: SubjectId | null = useMemo(() => {
    const recomendadas = focoRecomendado(stats, SUBJECT_WEIGHTS);
    return recomendadas.length > 0 ? recomendadas[0].materia : null;
  }, [stats]);

  function iniciarQuiz(mode: QuizMode, materia?: SubjectId) {
    let questions: Question[] = [];
    if (mode === "materia" && materia) questions = buildSessaoMateria(materia);
    else if (mode === "prova") questions = buildSessaoProva();
    else if (mode === "revisao") questions = buildSessaoRevisao();
    else if (mode === "treino-alvo" && materia) questions = buildSessaoTreinoAlvo(materia);

    if (questions.length === 0) return;

    setSessao({ mode, questions, iniciadoEm: new Date().toISOString() });
    setView("quiz");
  }

  function finalizarQuiz(respostas: AttemptRecord[]) {
    if (!sessao) return;
    const sessaoResultado: QuizSessionResult = {
      mode: sessao.mode,
      total: respostas.length,
      acertos: respostas.filter((r) => r.acertou).length,
      respostas,
      iniciadoEm: sessao.iniciadoEm,
      finalizadoEm: new Date().toISOString(),
    };
    setResultado(sessaoResultado);
    setAttempts(getLocalAttempts());
    setWrongCount(getWrongQueue().length);
    setSessao(null);
    setView("result");
  }

  function iniciarSimulado() {
    const existente = carregarSimuladoAtivo();
    const s = existente ?? buildSimulado(getLocalAttempts());
    if (!existente) salvarSimuladoAtivo(s);
    setSimuladoAtivo(s);
    setView("simulado");
  }

  function entregarSimulado(s: SimuladoAtivo, porTempo: boolean) {
    // Só corrige o simulado que ainda está salvo como ativo: evita gravar a mesma entrega duas vezes.
    if (getSimuladoAtivo()?.id !== s.id) return;
    const { resultado: corrigido, tentativas } = corrigirSimulado(s, porTempo);
    salvarSimuladoAtivo(null);
    const lista = salvarSimuladoResultado(corrigido);
    void recordAttempts(tentativas);
    setSimuladoAtivo(null);
    setSimulados(lista);
    setAttempts(getLocalAttempts());
    setWrongCount(getWrongQueue().length);
    setSimuladoVisto(corrigido);
    setAnimarFinal(true);
    setView("simulado-resultado");
  }

  function sairSimulado() {
    setSimuladoAtivo(carregarSimuladoAtivo());
    setView("reta-final");
  }

  function descartarSimulado() {
    salvarSimuladoAtivo(null);
    setSimuladoAtivo(null);
    setView("reta-final");
  }

  function iniciarReforco(blocoIds: string[], quantidade: number) {
    const questions = buildSessaoReforco(blocoIds, getLocalAttempts(), quantidade);
    if (questions.length === 0) return;
    setSessao({ mode: "reforco", questions, iniciadoEm: new Date().toISOString() });
    setView("quiz");
  }

  function irParaReta(ancora: AncoraReta | null = null) {
    setSessao(null);
    setResultado(null);
    setAncoraReta(ancora);
    setView("reta-final");
  }

  async function resetarMateria(materia: SubjectId) {
    const restantes = await resetAttemptsMateria(materia);
    setAttempts(restantes);
    setWrongCount(getWrongQueue().length);
  }

  function voltarHome() {
    setSessao(null);
    setResultado(null);
    setView("home");
  }

  // Telas abertas pela Reta final voltam para ela; o reforço volta ao mapa, como o "Encerrar" do quiz.
  const voltaParaReta =
    view === "simulado" ||
    view === "simulado-resultado" ||
    (view === "quiz" && sessao?.mode === "reforco") ||
    (view === "result" && resultado?.mode === "reforco");

  function voltar() {
    if (view === "simulado") sairSimulado();
    else if (view === "simulado-resultado") irParaReta();
    else if (voltaParaReta) irParaReta("mapa");
    else voltarHome();
  }

  async function logout() {
    if (supabase) await supabase.auth.signOut();
    setUserEmail(null);
    voltarHome();
  }

  return (
    <Layout
      userEmail={userEmail}
      mostrarVoltar={!ABAS_PRINCIPAIS.includes(view)}
      rotuloVoltar={voltaParaReta ? "← Reta final" : undefined}
      onVoltar={voltar}
      onIrParaAuth={() => setView("auth")}
      onLogout={logout}
      abaAtiva={
        view === "reta-final" ||
        view === "conteudo" ||
        view === "videos" ||
        view === "provas" ||
        view === "apostas" ||
        view === "concurso" ||
        view === "tempos" ||
        view === "modelos-mentais"
          ? view
          : "home"
      }
      onTrocarAba={(aba) => setView(aba)}
    >
      {view === "home" && (
        <Home
          stats={stats}
          wrongCount={wrongCount}
          materiaFoco={materiaFoco}
          onIniciar={iniciarQuiz}
          onResetarMateria={resetarMateria}
          onAbrirRetaFinal={() => irParaReta("simulado")}
        />
      )}
      {view === "reta-final" && (
        <RetaFinal
          attempts={attempts}
          wrongCount={wrongCount}
          simuladoAtivo={simuladoAtivo}
          simulados={simulados}
          ancora={ancoraReta}
          nomeExterna={nomeExterna}
          onAncoraUsada={() => {
            setAncoraReta(null);
            setNomeExterna(null);
          }}
          onIniciarSimulado={iniciarSimulado}
          onDescartarSimulado={descartarSimulado}
          onVerResultado={(r) => {
            setSimuladoVisto(r);
            setAnimarFinal(false);
            setView("simulado-resultado");
          }}
          onReforco={iniciarReforco}
          onRevisao={() => iniciarQuiz("revisao")}
          onIrPara={(aba) => setView(aba)}
        />
      )}
      {view === "simulado" && simuladoAtivo && (
        <Simulado
          key={simuladoAtivo.id}
          simulado={simuladoAtivo}
          onEntregar={entregarSimulado}
          onSair={sairSimulado}
          onDescartar={descartarSimulado}
        />
      )}
      {view === "simulado-resultado" && simuladoVisto && (
        <SimuladoResultadoView
          key={simuladoVisto.id}
          resultado={simuladoVisto}
          animar={animarFinal}
          simuladoEmAndamento={simuladoAtivo !== null}
          onReiniciar={iniciarSimulado}
          onVoltar={() => irParaReta("simulado")}
          onReforco={iniciarReforco}
          onAbrirCaderno={() => irParaReta("caderno")}
        />
      )}
      {view === "conteudo" && <Conteudo />}
      {view === "videos" && <Videos />}
      {view === "provas" && (
        <ProvasReais
          onLancarErros={(nome) => {
            setNomeExterna(nome);
            irParaReta("externa");
          }}
        />
      )}
      {view === "apostas" && <Apostas />}
      {view === "concurso" && <Concurso />}
      {view === "tempos" && <Tempos attempts={attempts} />}
      {view === "modelos-mentais" && <ModelosMentais />}
      {view === "quiz" && sessao && (
        <Quiz
          questions={sessao.questions}
          modo={sessao.mode}
          onFinalizar={finalizarQuiz}
          onSair={sessao.mode === "reforco" ? () => irParaReta("mapa") : voltarHome}
        />
      )}
      {view === "result" && resultado && (
        <Result
          resultado={resultado}
          onVoltarHome={resultado.mode === "reforco" ? () => irParaReta("mapa") : voltarHome}
          onRevisarErros={() => iniciarQuiz("revisao")}
        />
      )}
      {view === "auth" && <Auth onAutenticado={voltarHome} />}
    </Layout>
  );
}
