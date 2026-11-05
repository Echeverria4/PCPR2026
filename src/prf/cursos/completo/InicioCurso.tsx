import type { CSSProperties } from "react";
import type { QuizMode, SubjectStats } from "../../../lib/types";
import type { GrupoCurso } from "../../aulas/tipos";
import { TAMANHO_SIMULADO, questoesDaMateria, type FiltrosCurso } from "./sessoes";
import type { DadosCursoCompleto, TentativaCurso } from "./tipos";
import TreinoPersonalizadoCurso from "./TreinoPersonalizadoCurso";

interface InicioCursoProps {
  dados: DadosCursoCompleto;
  /** As matérias com aulas de estudo, na ordem do curso. */
  materias: GrupoCurso[];
  stats: SubjectStats<string>[];
  tentativas: TentativaCurso[];
  erradas: string[];
  materiaFoco: string | null;
  onIniciar: (mode: QuizMode, materia?: string) => void;
  onPersonalizado: (filtros: FiltrosCurso) => void;
  onResetarMateria: (materia: string) => void;
}

/** A aba Treino de um curso completo: modos de treino, treino personalizado e treino por matéria. */
export default function InicioCurso({
  dados,
  materias,
  stats,
  tentativas,
  erradas,
  materiaFoco,
  onIniciar,
  onPersonalizado,
  onResetarMateria,
}: InicioCursoProps) {
  const { banco, faixa } = dados;
  const statsPorMateria = new Map(stats.map((s) => [s.materia, s]));
  const nomeFoco = materias.find((m) => m.id === materiaFoco)?.nome ?? null;
  const comQuestoes = materias.filter((m) => banco.questoes.some((q) => q.materia === m.id));
  const nSimulado = Math.min(TAMANHO_SIMULADO, banco.questoes.length);

  return (
    <>
      <div className="edital-faixa">
        {faixa.map((item) => (
          <div key={item.forte} className="edital-item">
            <strong>{item.forte}</strong>
            <span>{item.texto}</span>
          </div>
        ))}
        <div className="edital-item">
          <strong>{banco.questoes.length.toLocaleString("pt-BR")} questões</strong>
          <span>Disponíveis no banco de treino agora</span>
        </div>
        <div className="edital-item">
          <strong>{Object.keys(banco.resumos).length} resumos</strong>
          <span>Um por aula, na aba Resumos e no fim da aula</span>
        </div>
      </div>

      <h2 className="secao-titulo">Modos de treino</h2>
      <div className="modos-grid">
        <button
          className="modo-card modo-card-destaque"
          onClick={() => onIniciar("prova")}
          disabled={banco.questoes.length === 0}
        >
          <h3>Simulado misto</h3>
          <p>
            {nSimulado} questões sorteadas, a mesma parte de cada matéria que já tem banco, com a correção a cada
            questão.
          </p>
        </button>
        <button className="modo-card" onClick={() => onIniciar("revisao")} disabled={erradas.length === 0}>
          <h3>Revisão dos errados</h3>
          <p>
            {erradas.length > 0
              ? `${erradas.length} questão(ões) que você errou recentemente, para reforço direcionado.`
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
              ? `A matéria com pior desempenho até agora: ${nomeFoco}.`
              : "Responda pelo menos 4 questões de uma matéria para liberar uma recomendação."}
          </p>
        </button>
      </div>

      <TreinoPersonalizadoCurso
        banco={banco}
        materias={comQuestoes}
        tentativas={tentativas}
        erradas={erradas}
        onIniciar={onPersonalizado}
      />

      <h2 className="secao-titulo">Treinar por matéria</h2>
      <div className="materias-grid">
        {materias.map((m) => {
          const st = statsPorMateria.get(m.id);
          const acuracia = st ? Math.round(st.acuracia * 100) : null;
          const disponiveis = questoesDaMateria(banco, m.id).length;
          return (
            <div key={m.id} className="materia-card" style={{ "--cor-materia": m.cor } as CSSProperties}>
              <button className="materia-play" onClick={() => onIniciar("materia", m.id)} disabled={disponiveis === 0}>
                <div className="materia-nome">{m.nome}</div>
                <div className="materia-meta">
                  <span>{m.aulas.length} aulas</span>
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
