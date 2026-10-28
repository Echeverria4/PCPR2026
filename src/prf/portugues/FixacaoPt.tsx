import { useState } from "react";
import Alternativa from "../../components/Alternativa";
import { ROTULO_NIVEL } from "../../lib/quizEngine";
import { Rico } from "./Visuais";
import type { QuestaoFixacao } from "./tipos";

const LETRAS = ["A", "B", "C", "D", "E"];

interface FixacaoPtProps {
  titulo: string;
  questoes: QuestaoFixacao[];
  onResponder: (q: QuestaoFixacao, acertou: boolean) => void;
  onSair: () => void;
  /** Rever a lição de uma questão errada. */
  onRever?: (licao: string) => void;
  nomeLicao: (licao: string) => string;
}

export default function FixacaoPt({ titulo, questoes, onResponder, onSair, onRever, nomeLicao }: FixacaoPtProps) {
  const [indice, setIndice] = useState(0);
  const [selecionada, setSelecionada] = useState<number | null>(null);
  const [eliminadas, setEliminadas] = useState<number[]>([]);
  const [erradas, setErradas] = useState<QuestaoFixacao[]>([]);
  const [fim, setFim] = useState(false);

  const q = questoes[indice];

  if (fim || !q) {
    const acertos = questoes.length - erradas.length;
    return (
      <div className="pi-fim">
        <h3 className="secao-titulo">Resultado da fixação</h3>
        <p className="pi-fim-placar">
          {acertos} de {questoes.length} certas
        </p>
        {erradas.length === 0 ? (
          <p className="pi-texto">Tudo certo nesta rodada. Volte daqui a alguns dias para fixar de vez.</p>
        ) : (
          <>
            <p className="pi-texto">Estas ficaram para revisar (entram em "Revisar meus erros" na visão geral):</p>
            <ul className="pi-fim-erros">
              {erradas.map((e) => (
                <li key={e.id}>
                  <span>
                    {nomeLicao(e.licao)} · nível {e.nivel}
                  </span>
                  {onRever && (
                    <button className="botao" onClick={() => onRever(e.licao)}>
                      Rever a lição
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
        <div className="quiz-acoes">
          <button className="botao botao-ouro" onClick={onSair}>
            Voltar
          </button>
        </div>
      </div>
    );
  }

  function escolher(idx: number) {
    if (selecionada !== null) return;
    setSelecionada(idx);
    const acertou = idx === q.correta;
    if (!acertou) setErradas((lista) => [...lista, q]);
    onResponder(q, acertou);
  }

  function avancar() {
    if (indice === questoes.length - 1) {
      setFim(true);
      return;
    }
    setIndice(indice + 1);
    setSelecionada(null);
    setEliminadas([]);
    window.scrollTo({ top: 0 });
  }

  const acertou = selecionada === q.correta;

  return (
    <div className="pi-fixacao">
      <div className="quiz-header">
        <span>{titulo}</span>
        <span>
          Questão {indice + 1} de {questoes.length}
        </span>
      </div>
      <div className="progresso-barra">
        <div
          className="progresso-fill"
          style={{ width: `${((indice + (selecionada !== null ? 1 : 0)) / questoes.length) * 100}%` }}
        />
      </div>
      <div className="questao-card">
        <div className="questao-tags">
          <span className="questao-tag">{nomeLicao(q.licao)}</span>
          <span
            className="questao-tag questao-tag-fonte"
            title="Escrita para esta aba como treino. Não é questão de prova nem de banca."
          >
            Questão autoral de treinamento (não oficial)
          </span>
          <span className="questao-tag questao-tag-nivel">
            Nível {q.nivel} · {ROTULO_NIVEL[q.nivel]}
          </span>
        </div>
        <p className="questao-enunciado">{q.enunciado}</p>
        <div className="alternativas">
          {q.alternativas.map((alt, idx) => {
            let classe = "";
            if (selecionada !== null) {
              if (idx === q.correta) classe = "correta";
              else if (idx === selecionada) classe = "errada";
            }
            return (
              <Alternativa
                key={idx}
                letra={LETRAS[idx]}
                texto={alt.t}
                classe={classe}
                disabled={selecionada !== null}
                eliminada={eliminadas.includes(idx)}
                onEscolher={() => escolher(idx)}
                onRiscar={
                  selecionada === null
                    ? () => setEliminadas((l) => (l.includes(idx) ? l.filter((i) => i !== idx) : [...l, idx]))
                    : undefined
                }
              />
            );
          })}
        </div>

        {selecionada !== null && (
          <div className={`explicacao ${acertou ? "explicacao-certa" : "explicacao-errada"}`}>
            <p className="pi-veredito">{acertou ? "Certo!" : `Não foi dessa vez: a correta é a ${LETRAS[q.correta]}.`}</p>
            <p>
              <strong>Raciocínio:</strong> <Rico texto={q.raciocinio} />
            </p>
            <div className="pi-analise">
              <strong>Alternativa por alternativa:</strong>
              <ul>
                {q.alternativas.map((alt, idx) => (
                  <li
                    key={idx}
                    className={`${idx === q.correta ? "pi-analise-certa" : ""} ${
                      idx === selecionada && !acertou ? "pi-analise-marcada" : ""
                    }`}
                  >
                    <span className="pi-analise-letra">{LETRAS[idx]}</span>
                    <span>
                      {idx === q.correta ? "Correta. " : idx === selecionada ? "Sua resposta. " : ""}
                      <Rico texto={alt.por} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="quiz-acoes">
          <button className="botao" onClick={onSair} style={{ marginRight: "auto" }}>
            Encerrar
          </button>
          {selecionada !== null && (
            <button className="botao botao-ouro" onClick={avancar}>
              {indice === questoes.length - 1 ? "Ver resultado" : "Próxima questão →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
