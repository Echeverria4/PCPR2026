import { useEffect, useRef, useState } from "react";
import type { Confianca, SimuladoAtivo, SubjectId } from "../lib/types";
import { SUBJECT_MAP } from "../data/subjects";
import { MARCOS, MINUTOS_CARTAO, ROTULO_CONFIANCA } from "../data/retaFinal";
import { QUESTAO_POR_ID, restanteMs } from "../lib/retaFinal";
import { salvarSimuladoAtivo } from "../lib/storage";
import { formatarMarco, formatarRelogio, formatarSegundos, horarioProva } from "../lib/format";
import Alternativa from "./Alternativa";

const LETRAS = ["A", "B", "C", "D", "E"];

interface SimuladoProps {
  simulado: SimuladoAtivo;
  onEntregar: (simulado: SimuladoAtivo, encerradoPorTempo: boolean) => void;
  onSair: () => void;
  onDescartar: () => void;
}

export default function Simulado({ simulado, onEntregar, onSair, onDescartar }: SimuladoProps) {
  const [sim, setSimEstado] = useState(simulado);
  const [agora, setAgora] = useState(Date.now());
  const [cartaoAberto, setCartaoAberto] = useState(false);
  const [revisando, setRevisando] = useState(false);
  const simRef = useRef(simulado);
  const inicioQuestaoRef = useRef(Date.now());
  /** Entregue ou descartado: a partir daqui o componente não grava mais nada. */
  const encerradoRef = useRef(false);
  const onEntregarRef = useRef(onEntregar);

  useEffect(() => {
    onEntregarRef.current = onEntregar;
  });

  function gravar(novo: SimuladoAtivo) {
    simRef.current = novo;
    setSimEstado(novo);
    salvarSimuladoAtivo(novo);
  }

  /** Soma o tempo corrido na questão aberta antes de qualquer mudança. */
  function comTempo(s: SimuladoAtivo): SimuladoAtivo {
    const instante = Date.now();
    const delta = instante - inicioQuestaoRef.current;
    inicioQuestaoRef.current = instante;
    if (delta <= 0) return s;
    const respostas = s.respostas.slice();
    respostas[s.atual] = { ...respostas[s.atual], tempoMs: respostas[s.atual].tempoMs + delta };
    return { ...s, respostas };
  }

  function mudar(fn: (s: SimuladoAtivo) => SimuladoAtivo) {
    gravar(fn(comTempo(simRef.current)));
  }

  function entregar(porTempo: boolean) {
    if (encerradoRef.current) return;
    encerradoRef.current = true;
    const final = comTempo(simRef.current);
    salvarSimuladoAtivo(final);
    onEntregarRef.current(final, porTempo);
  }

  // Relógio de parede: o prazo é o horário de início + 5h, mesmo que o app tenha sido fechado.
  // A cada 10 s o tempo da questão aberta vai para o armazenamento, para não se perder se a aba fechar.
  useEffect(() => {
    let tique = 0;
    const id = setInterval(() => {
      setAgora(Date.now());
      if (restanteMs(simRef.current) <= 0) {
        entregar(true);
        return;
      }
      if (++tique % 10 === 0) mudar((s) => s);
    }, 1000);
    return () => {
      clearInterval(id);
      // Saiu da tela (Sair, ← Início, outra aba): guarda o tempo da questão aberta.
      if (!encerradoRef.current) salvarSimuladoAtivo(comTempo(simRef.current));
    };
    // entregar/mudar/comTempo só usam refs e funções estáveis
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const total = sim.questoes.length;
  const atual = sim.atual;
  const sq = sim.questoes[atual];
  const questao = QUESTAO_POR_ID.get(sq.id)!;
  const resposta = sim.respostas[atual];
  const restante = restanteMs(sim, agora);
  const decorridoMin = sim.duracaoMin - restante / 60_000;
  const respondidas = sim.respostas.filter((r) => r.escolha !== null).length;
  const brancos = sim.respostas.map((r, i) => (r.escolha === null ? i : -1)).filter((i) => i >= 0);
  const marcadas = sim.respostas.map((r, i) => (r.marcada ? i : -1)).filter((i) => i >= 0);
  const marco = MARCOS.find((m) => m.materia === questao.materia);
  const atrasoMin = marco ? Math.round(decorridoMin - marco.ateMin) : 0;

  const irPara = (i: number) => {
    mudar((s) => ({ ...s, atual: Math.max(0, Math.min(total - 1, i)) }));
    setCartaoAberto(false);
    setRevisando(false);
    window.scrollTo({ top: 0 });
  };

  const escolher = (pos: number) =>
    mudar((s) => {
      const respostas = s.respostas.slice();
      respostas[s.atual] = { ...respostas[s.atual], escolha: pos };
      return { ...s, respostas };
    });

  const limpar = () =>
    mudar((s) => {
      const respostas = s.respostas.slice();
      respostas[s.atual] = { ...respostas[s.atual], escolha: null, confianca: undefined };
      return { ...s, respostas };
    });

  const marcarConfianca = (c: Confianca) =>
    mudar((s) => {
      const respostas = s.respostas.slice();
      const r = respostas[s.atual];
      respostas[s.atual] = { ...r, confianca: r.confianca === c ? undefined : c };
      return { ...s, respostas };
    });

  const alternarRiscada = (pos: number) =>
    mudar((s) => {
      const respostas = s.respostas.slice();
      const r = respostas[s.atual];
      const atuais = r.eliminadas ?? [];
      const eliminadas = atuais.includes(pos) ? atuais.filter((p) => p !== pos) : [...atuais, pos];
      respostas[s.atual] = { ...r, eliminadas };
      return { ...s, respostas };
    });

  const alternarMarcada = () =>
    mudar((s) => {
      const respostas = s.respostas.slice();
      respostas[s.atual] = { ...respostas[s.atual], marcada: !respostas[s.atual].marcada };
      return { ...s, respostas };
    });

  const grupos: { materia: SubjectId; indices: number[] }[] = [];
  sim.questoes.forEach((q, i) => {
    const m = QUESTAO_POR_ID.get(q.id)!.materia;
    const ultimo = grupos[grupos.length - 1];
    if (ultimo && ultimo.materia === m) ultimo.indices.push(i);
    else grupos.push({ materia: m, indices: [i] });
  });

  const listaNumeros = (indices: number[]) => (
    <div className="sim-numeros">
      {indices.map((i) => (
        <button key={i} className="sim-numero" onClick={() => irPara(i)}>
          {i + 1}
        </button>
      ))}
    </div>
  );

  return (
    <div className="simulado">
      <div className="sim-header">
        <span className={`sim-relogio ${restante < MINUTOS_CARTAO * 60_000 ? "sim-relogio-alerta" : ""}`}>
          ⏱ {formatarRelogio(restante)}
        </span>
        <span>
          Respondidas {respondidas}/{total}
        </span>
        <button className="botao sim-botao-cartao" onClick={() => setCartaoAberto((v) => !v)}>
          📋 Cartão
        </button>
      </div>
      <div className="progresso-barra">
        <div className="progresso-fill" style={{ width: `${(respondidas / total) * 100}%` }} />
      </div>

      {marco && (
        <div className={`sim-marco ${atrasoMin > 0 ? "sim-marco-atrasado" : ""}`}>
          Marco de {SUBJECT_MAP[questao.materia].nome}: terminar até {formatarMarco(marco.ateMin)} ({horarioProva(marco.ateMin)} no dia).
          Você está em {formatarMarco(Math.max(0, decorridoMin))}
          {atrasoMin > 0 ? `, ${atrasoMin} min atrasado.` : "."}
        </div>
      )}
      {restante < MINUTOS_CARTAO * 60_000 && (
        <div className="sim-aviso">
          Faltam menos de {MINUTOS_CARTAO} min. No dia, este é o tempo reservado para o cartão: chute o que falta.
        </div>
      )}

      {cartaoAberto && (
        <div className="sim-cartao">
          <div className="sim-cartao-legenda">
            <span className="sim-celula sim-celula-respondida">1</span> respondida
            <span className="sim-celula">1</span> em branco
            <span className="sim-celula sim-celula-marcada">1</span> marcada para revisar
          </div>
          {grupos.map((g) => (
            <div key={g.indices[0]} className="sim-cartao-grupo">
              <div className="sim-cartao-materia">{SUBJECT_MAP[g.materia].nome}</div>
              <div className="sim-cartao-celulas">
                {g.indices.map((i) => {
                  const r = sim.respostas[i];
                  const classe = [
                    "sim-celula",
                    r.escolha !== null ? "sim-celula-respondida" : "",
                    r.marcada ? "sim-celula-marcada" : "",
                    i === atual ? "sim-celula-atual" : "",
                  ].join(" ");
                  return (
                    <button key={i} className={classe} onClick={() => irPara(i)} title={`Questão ${i + 1}`}>
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {revisando ? (
        <div className="questao-card sim-entrega">
          <h3 className="sim-entrega-titulo">Entregar o simulado?</h3>
          <p>
            {respondidas} de {total} respondidas · {brancos.length} em branco · {marcadas.length} marcadas para revisar ·{" "}
            {formatarRelogio(restante)} restantes.
          </p>
          {brancos.length > 0 && (
            <>
              <p className="sim-entrega-alerta">
                Em branco vale zero e errar não desconta: na prova, chute todas antes de entregar. Questões em branco:
              </p>
              {listaNumeros(brancos)}
            </>
          )}
          {marcadas.length > 0 && (
            <>
              <p>Marcadas para revisar:</p>
              {listaNumeros(marcadas)}
            </>
          )}
          <div className="quiz-acoes">
            <button className="botao" onClick={() => setRevisando(false)} style={{ marginRight: "auto" }}>
              Voltar à prova
            </button>
            <button className="botao botao-ouro" onClick={() => entregar(false)}>
              Entregar e ver resultado
            </button>
          </div>
        </div>
      ) : (
        <div className="questao-card">
          <div className="questao-tags">
            <span className="questao-tag">
              Questão {atual + 1} de {total}
            </span>
            <span className="questao-tag">{SUBJECT_MAP[questao.materia].nome}</span>
          </div>
          <p className="questao-enunciado">{questao.enunciado}</p>

          <div className="alternativas">
            {sq.ordem.map((original, pos) => (
              <Alternativa
                key={pos}
                letra={LETRAS[pos]}
                texto={questao.alternativas[original]}
                classe={resposta.escolha === pos ? "selecionada" : ""}
                eliminada={resposta.eliminadas?.includes(pos) ?? false}
                onEscolher={() => escolher(pos)}
                onRiscar={() => alternarRiscada(pos)}
              />
            ))}
          </div>

          <div className="confianca-linha">
            <span className="confianca-rotulo">Confiança:</span>
            {(Object.keys(ROTULO_CONFIANCA) as Confianca[]).map((c) => (
              <button
                key={c}
                className={`confianca-chip confianca-${c} ${resposta.confianca === c ? "confianca-ativa" : ""}`}
                onClick={() => marcarConfianca(c)}
                disabled={resposta.escolha === null}
              >
                {ROTULO_CONFIANCA[c]}
              </button>
            ))}
            <button className={`confianca-chip sim-marcar ${resposta.marcada ? "confianca-ativa" : ""}`} onClick={alternarMarcada}>
              ⚑ {resposta.marcada ? "Marcada" : "Marcar para revisar"}
            </button>
          </div>

          <div className="quiz-acoes">
            <button className="botao" onClick={() => irPara(atual - 1)} disabled={atual === 0}>
              ← Anterior
            </button>
            {resposta.escolha !== null && (
              <button className="botao" onClick={limpar}>
                Limpar
              </button>
            )}
            <span className="sim-tempo-questao">nesta: {formatarSegundos((resposta.tempoMs + Math.max(0, agora - inicioQuestaoRef.current)) / 1000)}</span>
            {atual < total - 1 ? (
              <button className="botao botao-ouro" onClick={() => irPara(atual + 1)}>
                Próxima →
              </button>
            ) : (
              <button
                className="botao botao-ouro"
                onClick={() => {
                  mudar((s) => s);
                  setRevisando(true);
                }}
              >
                Revisar e entregar
              </button>
            )}
          </div>
        </div>
      )}

      <div className="sim-rodape">
        {!revisando && atual < total - 1 && (
          <button className="botao" onClick={() => setRevisando(true)}>
            Entregar…
          </button>
        )}
        <button
          className="botao"
          onClick={() => {
            mudar((s) => s);
            onSair();
          }}
        >
          Sair e continuar depois
        </button>
        <button
          className="botao botao-perigo"
          onClick={() => {
            if (!window.confirm("Descartar este simulado? As respostas dele não serão gravadas.")) return;
            encerradoRef.current = true;
            onDescartar();
          }}
        >
          Descartar
        </button>
      </div>
      <p className="sim-nota">
        O relógio não pausa: ao sair, o tempo continua correndo como na prova. Sem correção até entregar.
      </p>
    </div>
  );
}
