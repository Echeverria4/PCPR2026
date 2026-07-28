import { useState } from "react";
import type { AttemptRecord, Question, QuizMode } from "../lib/types";
import { recordAttempt } from "../lib/storage";

const LETRAS = ["A", "B", "C", "D", "E"];

interface QuizProps {
  questions: Question[];
  modo: QuizMode;
  onFinalizar: (respostas: AttemptRecord[]) => void;
  onSair: () => void;
}

export default function Quiz({ questions, modo, onFinalizar, onSair }: QuizProps) {
  const [indice, setIndice] = useState(0);
  const [selecionada, setSelecionada] = useState<number | null>(null);
  const [respostas, setRespostas] = useState<AttemptRecord[]>([]);
  const [iaAberto, setIaAberto] = useState(false);
  const [iaCarregando, setIaCarregando] = useState(false);
  const [iaTexto, setIaTexto] = useState("");
  const [iaErro, setIaErro] = useState<string | null>(null);
  const [iaPergunta, setIaPergunta] = useState("");

  const questao = questions[indice];
  const ultimaQuestao = indice === questions.length - 1;

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
    setSelecionada(idx);
    const acertou = idx === questao.correta;
    const registro: AttemptRecord = {
      questionId: questao.id,
      materia: questao.materia,
      acertou,
      respondidaEm: new Date().toISOString(),
    };
    setRespostas((prev) => [...prev, registro]);
    void recordAttempt(registro);
  }

  function avancar() {
    if (ultimaQuestao) {
      onFinalizar(respostas);
      return;
    }
    setIndice((i) => i + 1);
    setSelecionada(null);
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

  const rotuloModo: Record<QuizMode, string> = {
    materia: "Treino por matéria",
    prova: "Simulado completo",
    revisao: "Revisão dos errados",
    "treino-alvo": "Foco recomendado",
  };

  return (
    <div>
      <div className="quiz-header">
        <span>{rotuloModo[modo]}</span>
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
        <span className="questao-tag">{questao.topico}</span>
        <p className="questao-enunciado">{questao.enunciado}</p>

        <div className="alternativas">
          {questao.alternativas.map((alt, idx) => {
            let classe = "alternativa";
            if (selecionada !== null) {
              if (idx === questao.correta) classe += " correta";
              else if (idx === selecionada) classe += " errada";
            }
            return (
              <button
                key={idx}
                className={classe}
                onClick={() => escolher(idx)}
                disabled={selecionada !== null}
              >
                <span className="letra">{LETRAS[idx]}</span>
                <span>{alt}</span>
              </button>
            );
          })}
        </div>

        {selecionada !== null && (
          <div className="explicacao">
            <strong>{selecionada === questao.correta ? "Correto. " : "Incorreto. "}</strong>
            {questao.explicacao}
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
          <button className="botao" onClick={onSair} style={{ marginRight: "auto" }}>
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
