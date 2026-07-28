import { useEffect, useMemo, useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Conteudo from "./components/Conteudo";
import Videos from "./components/Videos";
import ProvasReais from "./components/ProvasReais";
import Apostas from "./components/Apostas";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Auth from "./components/Auth";
import { supabase, isSupabaseConfigured } from "./lib/supabase";
import { computeStats, focoRecomendado, getLocalAttempts, getWrongQueue, syncRemoteAttempts } from "./lib/storage";
import { buildSessaoMateria, buildSessaoProva, buildSessaoRevisao, buildSessaoTreinoAlvo } from "./lib/quizEngine";
import { SUBJECT_WEIGHTS } from "./data/subjects";
import type { AttemptRecord, Question, QuizMode, QuizSessionResult, SubjectId, SubjectStats } from "./lib/types";

type View = "home" | "conteudo" | "videos" | "provas" | "apostas" | "quiz" | "result" | "auth";

const ABAS_PRINCIPAIS: View[] = ["home", "conteudo", "videos", "provas", "apostas"];

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

  function voltarHome() {
    setSessao(null);
    setResultado(null);
    setView("home");
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
      onVoltar={voltarHome}
      onIrParaAuth={() => setView("auth")}
      onLogout={logout}
      abaAtiva={
        view === "conteudo" || view === "videos" || view === "provas" || view === "apostas"
          ? view
          : "home"
      }
      onTrocarAba={(aba) => setView(aba)}
    >
      {view === "home" && (
        <Home stats={stats} wrongCount={wrongCount} materiaFoco={materiaFoco} onIniciar={iniciarQuiz} />
      )}
      {view === "conteudo" && <Conteudo />}
      {view === "videos" && <Videos />}
      {view === "provas" && <ProvasReais />}
      {view === "apostas" && <Apostas />}
      {view === "quiz" && sessao && (
        <Quiz questions={sessao.questions} modo={sessao.mode} onFinalizar={finalizarQuiz} onSair={voltarHome} />
      )}
      {view === "result" && resultado && (
        <Result
          resultado={resultado}
          onVoltarHome={voltarHome}
          onRevisarErros={() => iniciarQuiz("revisao")}
        />
      )}
      {view === "auth" && <Auth onAutenticado={voltarHome} />}
    </Layout>
  );
}
