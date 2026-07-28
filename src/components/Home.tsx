import type { CSSProperties } from "react";
import { SUBJECTS, EDITAL_INFO } from "../data/subjects";
import { QUESTOES_POR_MATERIA } from "../data/questions";
import type { QuizMode, SubjectId, SubjectStats } from "../lib/types";

interface HomeProps {
  stats: SubjectStats[];
  wrongCount: number;
  materiaFoco: SubjectId | null;
  onIniciar: (mode: QuizMode, materia?: SubjectId) => void;
}

export default function Home({ stats, wrongCount, materiaFoco, onIniciar }: HomeProps) {
  const statsPorMateria = new Map(stats.map((s) => [s.materia, s]));
  const totalQuestoes = SUBJECTS.reduce(
    (soma, s) => soma + (QUESTOES_POR_MATERIA[s.id]?.length ?? 0),
    0,
  );
  const materiaFocoNome = materiaFoco
    ? SUBJECTS.find((s) => s.id === materiaFoco)?.nome
    : null;

  return (
    <>
      <div className="edital-faixa">
        <div className="edital-item">
          <strong>{EDITAL_INFO.dataProva}</strong>
          <span>Data da prova</span>
        </div>
        <div className="edital-item">
          <strong>{EDITAL_INFO.totalQuestoes} questões</strong>
          <span>{EDITAL_INFO.alternativasPorQuestao} alternativas, sem desconto por erro</span>
        </div>
        <div className="edital-item">
          <strong>{EDITAL_INFO.notaMinimaAprovacao.split(",")[0]}</strong>
          <span>Nota mínima de aprovação</span>
        </div>
        <div className="edital-item">
          <strong>{totalQuestoes} questões</strong>
          <span>Disponíveis no banco de treino agora</span>
        </div>
      </div>

      <h2 className="secao-titulo">Modos de treino</h2>
      <div className="modos-grid">
        <button className="modo-card" onClick={() => onIniciar("prova")}>
          <h3>Simulado completo</h3>
          <p>Monta uma prova seguindo a proporção oficial de questões por matéria do Anexo I do edital.</p>
        </button>
        <button
          className="modo-card"
          onClick={() => onIniciar("revisao")}
          disabled={wrongCount === 0}
        >
          <h3>Revisão dos errados</h3>
          <p>
            {wrongCount > 0
              ? `${wrongCount} questão(ões) que você errou recentemente, para reforço direcionado.`
              : "Nenhuma questão errada pendente ainda — responda algumas para popular esta fila."}
          </p>
        </button>
        <button
          className="modo-card"
          onClick={() => materiaFoco && onIniciar("treino-alvo", materiaFoco)}
          disabled={!materiaFoco}
        >
          <h3>Foco recomendado</h3>
          <p>
            {materiaFocoNome
              ? `Sua matéria com pior desempenho ponderado pelo peso na prova: ${materiaFocoNome}.`
              : "Responda pelo menos 4 questões de uma matéria para liberar uma recomendação."}
          </p>
        </button>
      </div>

      <h2 className="secao-titulo">Treinar por matéria</h2>
      <div className="materias-grid">
        {SUBJECTS.map((s) => {
          const st = statsPorMateria.get(s.id);
          const acuracia = st ? Math.round(st.acuracia * 100) : null;
          const disponiveis = QUESTOES_POR_MATERIA[s.id]?.length ?? 0;
          return (
            <button
              key={s.id}
              className="materia-card"
              style={{ "--cor-materia": s.cor } as CSSProperties}
              onClick={() => onIniciar("materia", s.id)}
              disabled={disponiveis === 0}
            >
              <div className="materia-nome">{s.nome}</div>
              <div className="materia-meta">
                <span>{s.peso} questões na prova</span>
                <span>{acuracia !== null ? `${acuracia}% de acerto` : `${disponiveis} no banco`}</span>
              </div>
              {st && (
                <div className="materia-barra">
                  <div className="materia-barra-fill" style={{ width: `${acuracia}%` }} />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}
