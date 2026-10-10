import { useEffect, useRef, useState } from "react";
import type { AttemptRecord, Confianca, Question, QuizMode, SubjectId } from "../lib/types";
import type { CursoId } from "../data/cursos";
import { atualizarConfianca, recordAttempt } from "../lib/storage";
import { formatarSegundos } from "../lib/format";
import { ROTULO_CONFIANCA } from "../data/retaFinal";
import { ROTULO_MODO } from "../lib/quizEngine";
import Alternativa from "./Alternativa";

const LETRAS = ["A", "B", "C", "D", "E"];

/** Onde o quiz grava as respostas: cada curso tem o seu armazenamento. */
export interface GravacaoQuiz<M extends string> {
  registrar: (registro: AttemptRecord<M>) => void | Promise<void>;
  atualizarConfianca: (questionId: string, respondidaEm: string, confianca: Confianca | undefined) => void;
}

const GRAVACAO_PCPR: GravacaoQuiz<SubjectId> = { registrar: recordAttempt, atualizarConfianca };

interface QuizProps<M extends string> {
  questions: Question<M>[];
  modo: QuizMode;
  onFinalizar: (respostas: AttemptRecord<M>[]) => void;
  onSair: () => void;
  /** Sem isso, grava no armazenamento da PCPR. */
  gravacao?: GravacaoQuiz<M>;
  /** Curso das questões, para a IA explicar no contexto certo (sem isso, PCPR). */
  curso?: CursoId;
  /** Treino retomado: respostas já dadas, na ordem de questions; o quiz segue da próxima. */
  respostasIniciais?: AttemptRecord<M>[];
  /** Chamado a cada resposta (e troca de confiança), para salvar o andamento. */
  onProgresso?: (respostas: AttemptRecord<M>[]) => void;
}

export default function Quiz<M extends string = SubjectId>({
  questions,
  modo,
  onFinalizar,
  onSair,
  gravacao,
  curso,
  respostasIniciais,
  onProgresso,
}: QuizProps<M>) {
  const grava = gravacao ?? (GRAVACAO_PCPR as unknown as GravacaoQuiz<M>);
  const [indice, setIndice] = useState(() => respostasIniciais?.length ?? 0);
  const [selecionada, setSelecionada] = useState<number | null>(null);
  const [respostas, setRespostas] = useState<AttemptRecord<M>[]>(() => respostasIniciais ?? []);
  const [iaAberto, setIaAberto] = useState(false);
  const [iaCarregando, setIaCarregando] = useState(false);
  const [iaTexto, setIaTexto] = useState("");
  const [iaErro, setIaErro] = useState<string | null>(null);
  const [iaPergunta, setIaPergunta] = useState("");
  const [segundosQuestao, setSegundosQuestao] = useState(0);
  const inicioQuestaoRef = useRef(Date.now());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [tempoRespostaMs, setTempoRespostaMs] = useState<number | null>(null);
  const [confianca, setConfianca] = useState<Confianca | undefined>(undefined);
  /** Alternativas riscadas pelo usuário na questão atual (só visual, some ao responder). */
  const [eliminadas, setEliminadas] = useState<number[]>([]);
  const registroRef = useRef<AttemptRecord<M> | null>(null);
  const onProgressoRef = useRef(onProgresso);

  useEffect(() => {
    onProgressoRef.current = onProgresso;
  });

  useEffect(() => {
    onProgressoRef.current?.(respostas);
  }, [respostas]);

  const questao = questions[indice];
  const ultimaQuestao = indice === questions.length - 1;

  // Cronômetro da questão atual: começa ao entrar na questão, congela ao responder
  // (ver escolher()), reinicia na próxima questão. Sair do quiz (Encerrar, ou o fim
  // natural do simulado) desmonta este componente, o que já limpa o interval sozinho.
  useEffect(() => {
    inicioQuestaoRef.current = Date.now();
    setSegundosQuestao(0);
    intervalRef.current = setInterval(() => {
      setSegundosQuestao(Math.round((Date.now() - inicioQuestaoRef.current) / 1000));
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [indice]);

  if (!questao) {
    return (
      <div className="vazio">
        <p>Nenhuma questão disponível para este modo ainda.</p>
        <button className="botao" onClick={onSair}>
          Voltar ao início
        </button>
      </div>
    );
  }

  function escolher(idx: number) {
    if (selecionada !== null) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    const tempoMs = Date.now() - inicioQuestaoRef.current;
    setTempoRespostaMs(tempoMs);
    setSelecionada(idx);
    const acertou = idx === questao.correta;
    const registro: AttemptRecord<M> = {
      questionId: questao.id,
      materia: questao.materia,
      acertou,
      respondidaEm: new Date().toISOString(),
      tempoMs,
      modo,
      confianca,
    };
    registroRef.current = registro;
    setRespostas((prev) => [...prev, registro]);
    void grava.registrar(registro);
  }

  // A confiança vale mais marcada antes de clicar na resposta, mas pode ser ajustada até a próxima questão.
  function marcarConfianca(c: Confianca) {
    const nova = confianca === c ? undefined : c;
    setConfianca(nova);
    const r = registroRef.current;
    if (selecionada === null || !r) return;
    grava.atualizarConfianca(r.questionId, r.respondidaEm, nova);
    registroRef.current = { ...r, confianca: nova };
    setRespostas((prev) =>
      prev.map((x) => (x.questionId === r.questionId && x.respondidaEm === r.respondidaEm ? { ...x, confianca: nova } : x)),
    );
  }

  function alternarRiscada(idx: number) {
    setEliminadas((prev) => (prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]));
  }

  function avancar() {
    if (ultimaQuestao) {
      onFinalizar(respostas);
      return;
    }
    setIndice((i) => i + 1);
    setSelecionada(null);
    setTempoRespostaMs(null);
    setConfianca(undefined);
    setEliminadas([]);
    registroRef.current = null;
    setIaAberto(false);
    setIaTexto("");
    setIaErro(null);
    setIaPergunta("");
  }

  async function pedirIA(perguntaCustom?: string) {
    setIaAberto(true);
    setIaCarregando(true);
    setIaErro(null);
    setIaTexto("");
    try {
      const resp = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          curso,
          materia: questao.materia,
          topico: questao.topico,
          enunciado: questao.enunciado,
          alternativas: questao.alternativas,
          correta: questao.correta,
          pergunta: perguntaCustom,
        }),
      });

      if (!resp.ok || !resp.body) {
        const dados = await resp.json().catch(() => null);
        throw new Error(dados?.erro ?? "Falha ao consultar a IA.");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        const pedaco = decoder.decode(value, { stream: true });
        setIaTexto((prev) => prev + pedaco);
      }
    } catch (e) {
      setIaErro(e instanceof Error ? e.message : "Falha ao consultar a IA.");
    } finally {
      setIaCarregando(false);
    }
  }

  return (
    <div>
      <div className="quiz-header">
        <span>{ROTULO_MODO[modo]}</span>
        <span className={`quiz-cronometro ${selecionada !== null ? "quiz-cronometro-parado" : ""}`}>
          ⏱ {formatarSegundos(segundosQuestao)}
        </span>
        <span>
          Questão {indice + 1} de {questions.length}
        </span>
      </div>
      <div className="progresso-barra">
        <div
          className="progresso-fill"
          style={{ width: `${((indice + (selecionada !== null ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      <div className="questao-card">
        <div className="questao-tags">
          <span className="questao-tag">{questao.topico}</span>
          {questao.fonte && <span className="questao-tag questao-tag-fonte">{questao.fonte}</span>}
        </div>
        <p className="questao-enunciado">{questao.enunciado}</p>

        <div className="alternativas">
          {questao.alternativas.map((alt, idx) => {
            let classe = "";
            if (selecionada !== null) {
              if (idx === questao.correta) classe = "correta";
              else if (idx === selecionada) classe = "errada";
            }
            return (
              <Alternativa
                key={idx}
                letra={LETRAS[idx]}
                texto={alt}
                classe={classe}
                disabled={selecionada !== null}
                eliminada={eliminadas.includes(idx)}
                onEscolher={() => escolher(idx)}
                onRiscar={selecionada === null ? () => alternarRiscada(idx) : undefined}
              />
            );
          })}
        </div>

        <div className="confianca-linha">
          <span className="confianca-rotulo">
            {selecionada === null ? "Confiança (marque antes de responder):" : "Confiança:"}
          </span>
          {(Object.keys(ROTULO_CONFIANCA) as Confianca[]).map((c) => (
            <button
              key={c}
              className={`confianca-chip confianca-${c} ${confianca === c ? "confianca-ativa" : ""}`}
              onClick={() => marcarConfianca(c)}
            >
              {ROTULO_CONFIANCA[c]}
            </button>
          ))}
        </div>

        {selecionada !== null && (
          <div className="explicacao">
            <strong>{selecionada === questao.correta ? "Correto. " : "Incorreto. "}</strong>
            {questao.explicacao}
            {tempoRespostaMs !== null && (
              <div className="questao-tempo-resposta">
                ⏱ Respondida em {formatarSegundos(tempoRespostaMs / 1000)}
              </div>
            )}
          </div>
        )}

        {selecionada !== null && !iaAberto && (
          <button className="botao botao-ia" onClick={() => void pedirIA()}>
            Aprofundar com IA
          </button>
        )}

        {selecionada !== null && iaAberto && (
          <div className="ia-painel">
            <div className="ia-painel-header">Explicação aprofundada (IA)</div>
            {iaCarregando && iaTexto === "" && <p className="ia-carregando">Consultando a IA…</p>}
            {iaErro && <p className="auth-erro">{iaErro}</p>}
            {iaTexto && <p className="ia-texto">{iaTexto}</p>}
            <form
              className="ia-pergunta-form"
              onSubmit={(e) => {
                e.preventDefault();
                const pergunta = iaPergunta.trim();
                if (!pergunta || iaCarregando) return;
                void pedirIA(pergunta);
              }}
            >
              <input
                className="ia-input"
                placeholder="Tem uma dúvida específica? Pergunte à IA..."
                value={iaPergunta}
                onChange={(e) => setIaPergunta(e.target.value)}
                disabled={iaCarregando}
              />
              <button className="botao" type="submit" disabled={iaCarregando}>
                Perguntar
              </button>
            </form>
          </div>
        )}

        <div className="quiz-acoes">
          <button
            className="botao"
            onClick={onSair}
            style={{ marginRight: "auto" }}
            title={onProgresso ? "Sair; o andamento fica salvo para continuar depois na tela inicial" : undefined}
          >
            Encerrar
          </button>
          {selecionada !== null && (
            <button className="botao botao-ouro" onClick={avancar}>
              {ultimaQuestao ? "Ver resultado" : "Próxima questão →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
