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
  getTreinosEmAndamento,
  getWrongQueue,
  recordAttempts,
  removerTreinoEmAndamento,
  resetAttemptsMateria,
  salvarSimuladoAtivo,
  salvarSimuladoResultado,
  salvarTreinoEmAndamento,
  syncRemoteAttempts,
} from "./lib/storage";
import {
  buildSessaoMateria,
  buildSessaoProva,
  buildSessaoRevisao,
  buildSessaoTreinoAlvo,
  chaveTreino,
  respostasDeHoje,
  retomarTreino,
  treinoRestantesHoje,
} from "./lib/quizEngine";
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
  TreinoEmAndamento,
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
  /** Registro salvo a cada resposta, para continuar depois de Encerrar ou recarregar. */
  treino: TreinoEmAndamento;
  /** Respostas de antes da retomada (o quiz começa da questão seguinte). */
  respostasIniciais: AttemptRecord[];
}

interface AppProps {
  /** Volta para a central de cursos. */
  onTrocarCurso?: () => void;
}

export default function App({ onTrocarCurso }: AppProps) {
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
  const [treinos, setTreinos] = useState<Record<string, TreinoEmAndamento>>(() => getTreinosEmAndamento());

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

  // Questões de cada matéria já respondidas hoje no treino: base do "continuar as que faltam hoje".
  const feitasHoje = useMemo(() => {
    const contagem: Partial<Record<SubjectId, number>> = {};
    for (const m of Object.keys(SUBJECT_WEIGHTS) as SubjectId[]) {
      const n = respostasDeHoje(attempts, m).length;
      if (n > 0) contagem[m] = n;
    }
    return contagem;
  }, [attempts]);

  const materiaFoco: SubjectId | null = useMemo(() => {
    const recomendadas = focoRecomendado(stats, SUBJECT_WEIGHTS);
    return recomendadas.length > 0 ? recomendadas[0].materia : null;
  }, [stats]);

  /** Recarrega do armazenamento o que o quiz gravou direto nele (respostas, fila de erros, treinos salvos). */
  function atualizarDoArmazenamento() {
    setAttempts(getLocalAttempts());
    setWrongCount(getWrongQueue().length);
    setTreinos(getTreinosEmAndamento());
  }

  /** Começar outro treino na mesma vaga descarta o andamento salvo: confirma antes se havia algo pela metade. */
  function podeSubstituir(chave: string): boolean {
    const t = getTreinosEmAndamento()[chave];
    if (!t || t.respostas.length === 0 || t.respostas.length >= t.ids.length) return true;
    return window.confirm(
      `Você tem um treino pela metade aqui: ${t.respostas.length} de ${t.ids.length} respondidas. ` +
        "Começar outro descarta esse andamento (as respostas já dadas continuam no histórico). Começar outro mesmo assim?",
    );
  }

  function abrirSessao(mode: QuizMode, questions: Question[], materia?: SubjectId) {
    const agora = new Date().toISOString();
    const treino: TreinoEmAndamento = {
      chave: chaveTreino(mode, materia),
      mode,
      materia,
      iniciadoEm: agora,
      atualizadoEm: agora,
      ids: questions.map((q) => q.id),
      respostas: [],
    };
    salvarTreinoEmAndamento(treino);
    setSessao({ mode, questions, iniciadoEm: agora, treino, respostasIniciais: [] });
    setView("quiz");
  }

  function retomar(treino: TreinoEmAndamento) {
    const { questions, respostas } = retomarTreino(treino);
    if (questions.length === 0) {
      removerTreinoEmAndamento(treino.chave);
      setTreinos(getTreinosEmAndamento());
      return;
    }
    // Todas já respondidas (recarregou antes de "Ver resultado"): vai direto ao resultado.
    if (respostas.length >= questions.length) {
      mostrarResultado(treino.mode, treino.iniciadoEm, respostas, treino.chave);
      return;
    }
    const salvo = { ...treino, respostas };
    salvarTreinoEmAndamento(salvo);
    setSessao({ mode: treino.mode, questions, iniciadoEm: treino.iniciadoEm, treino: salvo, respostasIniciais: respostas });
    setView("quiz");
  }

  function continuarTreino(chave: string) {
    const t = getTreinosEmAndamento()[chave];
    if (t) retomar(t);
  }

  function continuarHoje(materia: SubjectId) {
    retomar(treinoRestantesHoje(getLocalAttempts(), materia));
  }

  function descartarTreino(chave: string) {
    removerTreinoEmAndamento(chave);
    setTreinos(getTreinosEmAndamento());
  }

  function registrarProgresso(respostas: AttemptRecord[]) {
    if (!sessao) return;
    salvarTreinoEmAndamento({ ...sessao.treino, respostas, atualizadoEm: new Date().toISOString() });
  }

  function iniciarQuiz(mode: QuizMode, materia?: SubjectId, quantidade?: number) {
    if (!podeSubstituir(chaveTreino(mode, materia))) return;
    let questions: Question[] = [];
    if (mode === "materia" && materia) questions = buildSessaoMateria(materia, quantidade);
    else if (mode === "prova") questions = buildSessaoProva();
    else if (mode === "revisao") questions = buildSessaoRevisao();
    else if (mode === "treino-alvo" && materia) questions = buildSessaoTreinoAlvo(materia);

    if (questions.length === 0) return;

    abrirSessao(mode, questions, materia);
  }

  function mostrarResultado(mode: QuizMode, iniciadoEm: string, respostas: AttemptRecord[], chave: string) {
    removerTreinoEmAndamento(chave);
    const sessaoResultado: QuizSessionResult = {
      mode,
      total: respostas.length,
      acertos: respostas.filter((r) => r.acertou).length,
      respostas,
      iniciadoEm,
      finalizadoEm: new Date().toISOString(),
    };
    setResultado(sessaoResultado);
    atualizarDoArmazenamento();
    setSessao(null);
    setView("result");
  }

  function finalizarQuiz(respostas: AttemptRecord[]) {
    if (!sessao) return;
    mostrarResultado(sessao.mode, sessao.iniciadoEm, respostas, sessao.treino.chave);
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
    if (!podeSubstituir(chaveTreino("reforco"))) return;
    const questions = buildSessaoReforco(blocoIds, getLocalAttempts(), quantidade);
    if (questions.length === 0) return;
    abrirSessao("reforco", questions);
  }

  function irParaReta(ancora: AncoraReta | null = null) {
    atualizarDoArmazenamento();
    setSessao(null);
    setResultado(null);
    setAncoraReta(ancora);
    setView("reta-final");
  }

  async function resetarMateria(materia: SubjectId) {
    const restantes = await resetAttemptsMateria(materia);
    removerTreinoEmAndamento(chaveTreino("materia", materia));
    removerTreinoEmAndamento(chaveTreino("treino-alvo", materia));
    setAttempts(restantes);
    setWrongCount(getWrongQueue().length);
    setTreinos(getTreinosEmAndamento());
  }

  function voltarHome() {
    atualizarDoArmazenamento();
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
      onTrocarCurso={onTrocarCurso}
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
          treinos={Object.values(treinos)}
          feitasHoje={feitasHoje}
          onContinuar={continuarTreino}
          onContinuarHoje={continuarHoje}
          onDescartar={descartarTreino}
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
          key={`${sessao.treino.chave}|${sessao.iniciadoEm}|${sessao.respostasIniciais.length}`}
          questions={sessao.questions}
          modo={sessao.mode}
          respostasIniciais={sessao.respostasIniciais}
          onProgresso={registrarProgresso}
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
