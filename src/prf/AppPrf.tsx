import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import Quiz from "../components/Quiz";
import Result from "../components/Result";
import { computeStats, focoRecomendado } from "../lib/storage";
import type { QuizMode, QuizSessionResult } from "../lib/types";
import { PRF_MATERIAS, PRF_NOMES, type MateriaPrfId, type QuestaoPrf } from "../data/prf";
import LayoutPrf, { type AbaPrf } from "./LayoutPrf";
import InicioPrf from "./InicioPrf";
import ConteudoPrfTela from "./ConteudoPrfTela";
import { getErradasPrf, getTentativasPrf, zerarMateriaPrf, type TentativaPrf } from "./armazenamento";
import { GRAVACAO_PRF } from "./gravacao";
import { QUESTOES_PRF_POR_MATERIA } from "./questoes";
import type { TelaPt } from "./portugues/PortuguesInteligente";
import type { TelaAulas } from "./aulas/AulasPrf";
import type { AulaDrive } from "./aulas/aulasDrive";
import { sessaoFixacao } from "./aulas/fixacao";
import {
  FILTROS_PRF_PADRAO,
  sessaoFocoPrf,
  sessaoMateriaPrf,
  sessaoPersonalizadaPrf,
  sessaoProva2014Prf,
  sessaoProvaPf2025Prf,
  sessaoProvaPrf,
  sessaoRevisaoPrf,
  type FiltrosPrf,
} from "./sessoes";

type View = AbaPrf | "quiz" | "result";

// A aba de português tem muito texto: só baixa quando o aluno abre.
const PortuguesInteligente = lazy(() => import("./portugues/PortuguesInteligente"));
// A lista das aulas do Drive também só baixa quando o aluno abre a aba.
const AulasPrf = lazy(() => import("./aulas/AulasPrf"));
// O acompanhamento semanal também usa a lista das aulas: só baixa quando o aluno abre a aba.
const SemanaPrf = lazy(() => import("./semana/SemanaPrf"));

/** Questões de português do banco por tópico do programa (para os atalhos de treino da aba). */
const QUESTOES_PT_POR_TOPICO = (QUESTOES_PRF_POR_MATERIA.pt ?? []).reduce<Record<string, number>>((acc, q) => {
  acc[q.topico] = (acc[q.topico] ?? 0) + 1;
  return acc;
}, {});

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
  // Aba para onde o quiz volta, e a tela aberta no Português Inteligente (não se perde durante o quiz).
  const [origem, setOrigem] = useState<AbaPrf>("home");
  const [telaPt, setTelaPt] = useState<TelaPt>({ tipo: "geral" });
  const [materiaConteudo, setMateriaConteudo] = useState<MateriaPrfId | undefined>();
  const [telaAulas, setTelaAulas] = useState<TelaAulas>({});
  // Semana aberta no acompanhamento (segunda-feira 0h); null = a semana atual.
  const [semanaAberta, setSemanaAberta] = useState<number | null>(null);

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
    abrirSessao(mode, questions);
  }

  function iniciarProva2014() {
    abrirSessao("prova", sessaoProva2014Prf());
  }

  function iniciarProvaPf2025() {
    abrirSessao("prova", sessaoProvaPf2025Prf());
  }

  function iniciarPersonalizado(filtros: FiltrosPrf) {
    abrirSessao("personalizado", sessaoPersonalizadaPrf(filtros, tentativas));
  }

  function abrirSessao(mode: QuizMode, questions: QuestaoPrf[]) {
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

  function treinarTopicoPt(topico: string) {
    const questions = sessaoPersonalizadaPrf({ ...FILTROS_PRF_PADRAO, materias: ["pt"], topicos: [topico] }, tentativas);
    if (questions.length === 0) return;
    setOrigem("portugues");
    abrirSessao("personalizado", questions);
  }

  /** Fixação no fim da aula: ao terminar, o quiz volta para a mesma aula. */
  function fixarAula(aula: AulaDrive, quantidade: number) {
    const questions = sessaoFixacao(aula.materia, aula.topicos, quantidade, tentativas);
    if (questions.length === 0) return;
    setOrigem("aulas");
    abrirSessao("personalizado", questions);
  }

  /** Treino de um assunto difícil da semana: ao terminar, o quiz volta para o acompanhamento. */
  function treinarDaSemana(filtros: FiltrosPrf) {
    const questions = sessaoPersonalizadaPrf(filtros, tentativas);
    if (questions.length === 0) return;
    setOrigem("semana");
    abrirSessao("personalizado", questions);
  }

  function abrirAula(tela: TelaAulas) {
    setTelaAulas(tela);
    setView("aulas");
  }

  function trocarAba(aba: AbaPrf) {
    setMateriaConteudo(undefined);
    // Tocar de novo na aba das aulas volta para a lista das matérias; na da semana, para a semana atual.
    if (aba === "aulas" && view === "aulas") setTelaAulas({});
    if (aba === "semana" && view === "semana") setSemanaAberta(null);
    setView(aba);
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
    setView(origem);
    setOrigem("home");
  }

  return (
    <LayoutPrf
      mostrarVoltar={view === "quiz" || view === "result"}
      onVoltar={voltarHome}
      onTrocarCurso={onTrocarCurso}
      abaAtiva={view === "quiz" || view === "result" ? "home" : view}
      onTrocarAba={trocarAba}
    >
      {view === "home" && (
        <InicioPrf
          stats={stats}
          tentativas={tentativas}
          wrongCount={erradas}
          materiaFoco={materiaFoco}
          onIniciar={iniciarQuiz}
          onPersonalizado={iniciarPersonalizado}
          onProva2014={iniciarProva2014}
          onProvaPf2025={iniciarProvaPf2025}
          onResetarMateria={resetarMateria}
        />
      )}
      {view === "aulas" && (
        <Suspense fallback={<div className="vazio">Carregando as aulas…</div>}>
          <AulasPrf tela={telaAulas} onTela={setTelaAulas} tentativas={tentativas} onFixar={fixarAula} />
        </Suspense>
      )}
      {view === "semana" && (
        <Suspense fallback={<div className="vazio">Carregando o acompanhamento…</div>}>
          <SemanaPrf
            tentativas={tentativas}
            inicio={semanaAberta}
            onInicio={setSemanaAberta}
            onTreinar={treinarDaSemana}
            onAbrirAula={abrirAula}
          />
        </Suspense>
      )}
      {view === "conteudo" && <ConteudoPrfTela key={materiaConteudo ?? "todas"} materiaInicial={materiaConteudo} />}
      {view === "portugues" && (
        <Suspense fallback={<div className="vazio">Carregando o Português Inteligente…</div>}>
          <PortuguesInteligente
            tela={telaPt}
            onTela={setTelaPt}
            questoesPorTopico={QUESTOES_PT_POR_TOPICO}
            onTreinarTopico={treinarTopicoPt}
            onAbrirResumo={() => {
              setMateriaConteudo("pt");
              setView("conteudo");
            }}
          />
        </Suspense>
      )}
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
