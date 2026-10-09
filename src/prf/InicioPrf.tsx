import type { CSSProperties } from "react";
import { PRF_MATERIAS, PRF_MATERIA_MAP, PRF_SITUACAO, PRF_ULTIMO_EDITAL, type MateriaPrfId } from "../data/prf";
import type { QuizMode, SubjectStats } from "../lib/types";
import { BANCO_PRF, QUESTOES_PRF_POR_MATERIA } from "./questoes";

interface InicioPrfProps {
  stats: SubjectStats<MateriaPrfId>[];
  wrongCount: number;
  materiaFoco: MateriaPrfId | null;
  onIniciar: (mode: QuizMode, materia?: MateriaPrfId) => void;
  onResetarMateria: (materia: MateriaPrfId) => void;
}

const pontos = (n: number) => n.toLocaleString("pt-BR");

export default function InicioPrf({ stats, wrongCount, materiaFoco, onIniciar, onResetarMateria }: InicioPrfProps) {
  const statsPorMateria = new Map(stats.map((s) => [s.materia, s]));
  const ed = PRF_ULTIMO_EDITAL;
  const minimo = (ed.pontos * ed.minimoPct) / 100;
  const nomeFoco = materiaFoco ? PRF_MATERIA_MAP[materiaFoco].nome : null;

  return (
    <>
      <div className="edital-faixa">
        <div className="edital-item">
          <strong>Sem edital</strong>
          <span>
            Novo concurso {PRF_SITUACAO.texto} ({PRF_SITUACAO.em})
          </span>
        </div>
        <div className="edital-item">
          <strong>{ed.totalQuestoes} questões</strong>
          <span>
            {ed.alternativas} alternativas na prova de {ed.ano} ({ed.banca})
          </span>
        </div>
        <div className="edital-item">
          <strong>{ed.pontos} pontos</strong>
          <span>
            Em {ed.ano}, eliminava abaixo de {pontos(minimo)} pontos ({ed.minimoPct}%)
          </span>
        </div>
        <div className="edital-item">
          <strong>{BANCO_PRF.length} questões</strong>
          <span>Disponíveis no banco de treino agora</span>
        </div>
      </div>

      <h2 className="secao-titulo">Modos de treino</h2>
      <div className="modos-grid">
        <button className="modo-card modo-card-destaque" onClick={() => onIniciar("prova")} disabled={BANCO_PRF.length === 0}>
          <h3>Simulado no formato de {ed.ano}</h3>
          <p>
            {ed.totalQuestoes} questões na proporção daquela prova: 12 de Português e 6 de cada outra matéria, com a
            correção a cada questão.
          </p>
        </button>
        <button className="modo-card" onClick={() => onIniciar("revisao")} disabled={wrongCount === 0}>
          <h3>Revisão dos errados</h3>
          <p>
            {wrongCount > 0
              ? `${wrongCount} questão(ões) que você errou recentemente, para reforço direcionado.`
              : "Nenhuma questão errada pendente ainda. Responda algumas para formar esta fila."}
          </p>
        </button>
        <button
          className="modo-card"
          onClick={() => materiaFoco && onIniciar("treino-alvo", materiaFoco)}
          disabled={!materiaFoco}
        >
          <h3>Foco recomendado</h3>
          <p>
            {nomeFoco
              ? `A matéria com pior desempenho, ponderado pelos pontos que ela vale na prova: ${nomeFoco}.`
              : "Responda pelo menos 4 questões de uma matéria para liberar uma recomendação."}
          </p>
        </button>
      </div>

      <h2 className="secao-titulo">Treinar por matéria</h2>
      <div className="materias-grid">
        {PRF_MATERIAS.map((m) => {
          const st = statsPorMateria.get(m.id);
          const acuracia = st ? Math.round(st.acuracia * 100) : null;
          const disponiveis = QUESTOES_PRF_POR_MATERIA[m.id]?.length ?? 0;
          return (
            <div key={m.id} className="materia-card" style={{ "--cor-materia": m.cor } as CSSProperties}>
              <button className="materia-play" onClick={() => onIniciar("materia", m.id)} disabled={disponiveis === 0}>
                <div className="materia-nome">{m.nome}</div>
                <div className="materia-meta">
                  <span>
                    {m.questoes} questões × {pontos(m.peso)}
                  </span>
                  <span>
                    {acuracia !== null
                      ? `${acuracia}% de acerto`
                      : disponiveis > 0
                        ? `${disponiveis} no banco`
                        : "em preparação"}
                  </span>
                </div>
                {st && (
                  <div className="materia-barra">
                    <div className="materia-barra-fill" style={{ width: `${acuracia}%` }} />
                  </div>
                )}
              </button>
              {st && st.respondidas > 0 && (
                <button
                  className="materia-reset"
                  title={`Zerar progresso de ${m.nome}`}
                  onClick={() => {
                    if (
                      window.confirm(
                        `Zerar as ${st.respondidas} resposta(s) registradas de ${m.nome}? Essa ação não pode ser desfeita.`,
                      )
                    ) {
                      onResetarMateria(m.id);
                    }
                  }}
                >
                  ↺
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
