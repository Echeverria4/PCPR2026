import type { CSSProperties } from "react";
import { SUBJECTS, EDITAL_INFO } from "../data/subjects";
import { QUESTOES_POR_MATERIA } from "../data/questions";
import { dicaDoDia } from "../data/dicas";
import { chaveTreino, ROTULO_MODO } from "../lib/quizEngine";
import type { QuizMode, SubjectId, SubjectStats, TreinoEmAndamento } from "../lib/types";

interface HomeProps {
  stats: SubjectStats[];
  wrongCount: number;
  materiaFoco: SubjectId | null;
  onIniciar: (mode: QuizMode, materia?: SubjectId, quantidade?: number) => void;
  /** Treinos salvos pela metade, para continuar de onde parou. */
  treinos: TreinoEmAndamento[];
  /** Questões de cada matéria já respondidas hoje no treino. */
  feitasHoje: Partial<Record<SubjectId, number>>;
  onContinuar: (chave: string) => void;
  onContinuarHoje: (materia: SubjectId) => void;
  onDescartar: (chave: string) => void;
  onResetarMateria: (materia: SubjectId) => void;
  onAbrirRetaFinal: () => void;
}

export default function Home({
  stats,
  wrongCount,
  materiaFoco,
  onIniciar,
  treinos,
  feitasHoje,
  onContinuar,
  onContinuarHoje,
  onDescartar,
  onResetarMateria,
  onAbrirRetaFinal,
}: HomeProps) {
  const statsPorMateria = new Map(stats.map((s) => [s.materia, s]));
  const treinoPorChave = new Map(treinos.map((t) => [t.chave, t]));
  const pendentes = treinos
    .filter((t) => t.respostas.length > 0)
    .sort((a, b) => b.atualizadoEm.localeCompare(a.atualizadoEm));
  const totalQuestoes = SUBJECTS.reduce(
    (soma, s) => soma + (QUESTOES_POR_MATERIA[s.id]?.length ?? 0),
    0,
  );
  const materiaFocoNome = materiaFoco
    ? SUBJECTS.find((s) => s.id === materiaFoco)?.nome
    : null;
  const dica = dicaDoDia();
  const materiaDica = SUBJECTS.find((s) => s.id === dica.materia);

  return (
    <>
      {pendentes.length > 0 && (
        <section className="continuar-faixa">
          <h2 className="secao-titulo">⏯ Continuar de onde parei</h2>
          {pendentes.map((t) => {
            const materia = t.materia ? SUBJECTS.find((s) => s.id === t.materia) : undefined;
            const nome = materia?.nome ?? ROTULO_MODO[t.mode];
            return (
              <div
                key={t.chave}
                className="continuar-item"
                style={{ "--cor-materia": materia?.cor } as CSSProperties}
              >
                <div className="continuar-info">
                  <strong>{nome}</strong>
                  <span>
                    {materia ? `${ROTULO_MODO[t.mode]} · ` : ""}
                    {t.respostas.length} de {t.ids.length} respondidas
                  </span>
                </div>
                <button className="botao botao-ouro" onClick={() => onContinuar(t.chave)}>
                  {t.respostas.length >= t.ids.length ? "Ver resultado" : "Continuar"}
                </button>
                <button
                  className="botao"
                  onClick={() => {
                    if (
                      window.confirm(
                        `Descartar o andamento de ${nome} (${t.respostas.length} de ${t.ids.length})? As respostas já dadas continuam no histórico.`,
                      )
                    ) {
                      onDescartar(t.chave);
                    }
                  }}
                >
                  Descartar
                </button>
              </div>
            );
          })}
        </section>
      )}

      <div className="dica-dia" style={{ "--cor-materia": materiaDica?.cor } as CSSProperties}>
        <span className="dica-dia-tag">💡 Dica do dia · {materiaDica?.nome}</span>
        <p className="dica-dia-texto">{dica.texto}</p>
      </div>

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
        <button className="modo-card modo-card-destaque" onClick={onAbrirRetaFinal}>
          <h3>🏁 Simulado modo prova (5h)</h3>
          <p>100 questões no formato real: relógio de 5h, sem correção até entregar e diagnóstico por bloco no fim. Fica na aba Reta final.</p>
        </button>
        <button className="modo-card" onClick={() => onIniciar("prova")}>
          <h3>Simulado com correção</h3>
          <p>A mesma proporção oficial por matéria do Anexo I, mas com a correção a cada questão.</p>
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
          const salvo = treinoPorChave.get(chaveTreino("materia", s.id));
          const feitas = feitasHoje[s.id] ?? 0;
          return (
            <div
              key={s.id}
              className="materia-card"
              style={{ "--cor-materia": s.cor } as CSSProperties}
            >
              <button
                className="materia-play"
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
              {disponiveis > 10 && (
                <button
                  className="materia-todas"
                  onClick={() => onIniciar("materia", s.id, disponiveis)}
                >
                  📚 Fazer todas as {disponiveis} questões
                </button>
              )}
              {salvo && salvo.respostas.length > 0 ? (
                <button className="materia-continuar" onClick={() => onContinuar(salvo.chave)}>
                  ⏯ Continuar de onde parei · {salvo.respostas.length} de {salvo.ids.length}
                </button>
              ) : feitas > 0 && feitas < disponiveis ? (
                <button
                  className="materia-continuar"
                  onClick={() => onContinuarHoje(s.id)}
                  title="Segue com as questões desta matéria que você ainda não respondeu hoje"
                >
                  ⏯ Continuar as que faltam hoje · {feitas} de {disponiveis} feitas
                </button>
              ) : null}
              {st && st.respondidas > 0 && (
                <button
                  className="materia-reset"
                  title={`Zerar progresso de ${s.nome}`}
                  onClick={() => {
                    if (
                      window.confirm(
                        `Zerar as ${st.respondidas} resposta(s) registradas de ${s.nome}? Essa ação não pode ser desfeita.`,
                      )
                    ) {
                      onResetarMateria(s.id);
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
