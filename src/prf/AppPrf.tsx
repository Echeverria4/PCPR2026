import { useEffect, useMemo, useState } from "react";
import Quiz from "../components/Quiz";
import Result from "../components/Result";
import { computeStats, focoRecomendado } from "../lib/storage";
import type { QuizMode, QuizSessionResult } from "../lib/types";
import { PRF_MATERIAS, PRF_NOMES, type MateriaPrfId, type QuestaoPrf } from "../data/prf";
import LayoutPrf, { type AbaPrf } from "./LayoutPrf";
import InicioPrf from "./InicioPrf";
import ConteudoPrfTela from "./ConteudoPrfTela";
import { GRAVACAO_PRF, getErradasPrf, getTentativasPrf, zerarMateriaPrf, type TentativaPrf } from "./armazenamento";
import { sessaoFocoPrf, sessaoMateriaPrf, sessaoProvaPrf, sessaoRevisaoPrf } from "./sessoes";

type View = AbaPrf | "quiz" | "result";

interface SessaoAtiva {
  mode: QuizMode;
  questions: QuestaoPrf[];
  iniciadoEm: string;
}

/** O foco pondera pelos pontos que a matéria valia na prova de 2014 (questões × peso). */
const PONTOS_POR_MATERIA = Object.fromEntries(PRF_MATERIAS.map((m) => [m.id, m.questoes * m.peso])) as Record<
  MateriaPrfId,
  number
>;

interface AppPrfProps {
  /** Volta para a central de cursos. */
  onTrocarCurso?: () => void;
}

export default function AppPrf({ onTrocarCurso }: AppPrfProps) {
  const [view, setView] = useState<View>("home");
  const [tentativas, setTentativas] = useState<TentativaPrf[]>(() => getTentativasPrf());
  const [erradas, setErradas] = useState(() => getErradasPrf().length);
  const [sessao, setSessao] = useState<SessaoAtiva | null>(null);
  const [resultado, setResultado] = useState<QuizSessionResult<MateriaPrfId> | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view]);

  const stats = useMemo(() => computeStats(tentativas), [tentativas]);
  const materiaFoco = useMemo(() => focoRecomendado(stats, PONTOS_POR_MATERIA)[0]?.materia ?? null, [stats]);

  function iniciarQuiz(mode: QuizMode, materia?: MateriaPrfId) {
    let questions: QuestaoPrf[] = [];
    if (mode === "materia" && materia) questions = sessaoMateriaPrf(materia);
    else if (mode === "prova") questions = sessaoProvaPrf();
    else if (mode === "revisao") questions = sessaoRevisaoPrf();
    else if (mode === "treino-alvo" && materia) questions = sessaoFocoPrf(materia);
    if (questions.length === 0) return;
    setSessao({ mode, questions, iniciadoEm: new Date().toISOString() });
    setView("quiz");
  }

  function finalizarQuiz(respostas: TentativaPrf[]) {
    if (!sessao) return;
    setResultado({
      mode: sessao.mode,
      total: respostas.length,
      acertos: respostas.filter((r) => r.acertou).length,
      respostas,
      iniciadoEm: sessao.iniciadoEm,
      finalizadoEm: new Date().toISOString(),
    });
    setTentativas(getTentativasPrf());
    setErradas(getErradasPrf().length);
    setSessao(null);
    setView("result");
  }

  function resetarMateria(materia: MateriaPrfId) {
    setTentativas(zerarMateriaPrf(materia));
    setErradas(getErradasPrf().length);
  }

  function voltarHome() {
    // Quem sai no meio do quiz já deixou respostas gravadas: o placar da tela inicial precisa delas.
    setTentativas(getTentativasPrf());
    setErradas(getErradasPrf().length);
    setSessao(null);
    setResultado(null);
    setView("home");
  }

  return (
    <LayoutPrf
      mostrarVoltar={view === "quiz" || view === "result"}
      onVoltar={voltarHome}
      onTrocarCurso={onTrocarCurso}
      abaAtiva={view === "conteudo" ? "conteudo" : "home"}
      onTrocarAba={(aba) => setView(aba)}
    >
      {view === "home" && (
        <InicioPrf
          stats={stats}
          wrongCount={erradas}
          materiaFoco={materiaFoco}
          onIniciar={iniciarQuiz}
          onResetarMateria={resetarMateria}
        />
      )}
      {view === "conteudo" && <ConteudoPrfTela />}
      {view === "quiz" && sessao && (
        <Quiz
          questions={sessao.questions}
          modo={sessao.mode}
          onFinalizar={finalizarQuiz}
          onSair={voltarHome}
          gravacao={GRAVACAO_PRF}
          curso="prf-adm"
        />
      )}
      {view === "result" && resultado && (
        <Result
          resultado={resultado}
          onVoltarHome={voltarHome}
          onRevisarErros={() => iniciarQuiz("revisao")}
          nomes={PRF_NOMES}
        />
      )}
    </LayoutPrf>
  );
}
