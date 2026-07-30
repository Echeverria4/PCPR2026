import { useState, type CSSProperties } from "react";
import { SUBJECTS, SUBJECT_MAP } from "../data/subjects";
import { BANCO } from "../data/questions";
import { formatarSegundos } from "../lib/format";
import type { AttemptRecord, SubjectId } from "../lib/types";

interface TemposProps {
  attempts: AttemptRecord[];
}

const QUESTAO_POR_ID = new Map(BANCO.map((q) => [q.id, q]));

function somaMs(valores: number[]): number {
  return valores.reduce((a, b) => a + b, 0);
}

function mediaMs(valores: number[]): number {
  return valores.length > 0 ? somaMs(valores) / valores.length : 0;
}

export default function Tempos({ attempts }: TemposProps) {
  const [materiaSelecionada, setMateriaSelecionada] = useState<SubjectId | null>(null);

  const comTempoPorMateria = new Map<SubjectId, AttemptRecord[]>();
  for (const a of attempts) {
    if (a.tempoMs === undefined) continue;
    const lista = comTempoPorMateria.get(a.materia) ?? [];
    lista.push(a);
    comTempoPorMateria.set(a.materia, lista);
  }

  if (!materiaSelecionada) {
    return (
      <>
        <h2 className="secao-titulo">Tempos por matéria</h2>
        <p className="conteudo-intro">
          Cada questão respondida no treino registra quanto tempo você levou para decidir. Escolha
          uma matéria abaixo para focar especificamente nela e ver o histórico completo.
        </p>

        <div className="materias-grid">
          {SUBJECTS.map((s) => {
            const registros = comTempoPorMateria.get(s.id) ?? [];
            const media = mediaMs(registros.map((r) => r.tempoMs!));
            return (
              <button
                key={s.id}
                className="materia-card"
                style={{ "--cor-materia": s.cor } as CSSProperties}
                onClick={() => setMateriaSelecionada(s.id)}
                disabled={registros.length === 0}
              >
                <div className="materia-nome">{s.nome}</div>
                <div className="materia-meta">
                  <span>{registros.length > 0 ? `${registros.length} questão(ões)` : "sem tempos ainda"}</span>
                  <span>{registros.length > 0 ? `média ${formatarSegundos(media / 1000)}` : ""}</span>
                </div>
              </button>
            );
          })}
        </div>
      </>
    );
  }

  const subject = SUBJECT_MAP[materiaSelecionada];
  const registros = (comTempoPorMateria.get(materiaSelecionada) ?? [])
    .slice()
    .sort((a, b) => new Date(b.respondidaEm).getTime() - new Date(a.respondidaEm).getTime());
  const tempos = registros.map((r) => r.tempoMs!);
  const total = somaMs(tempos);
  const media = mediaMs(tempos);
  const maisRapida = tempos.length > 0 ? Math.min(...tempos) : 0;
  const maisLenta = tempos.length > 0 ? Math.max(...tempos) : 0;

  return (
    <>
      <button className="botao" onClick={() => setMateriaSelecionada(null)}>
        ← Matérias
      </button>
      <h2
        className="secao-titulo conteudo-materia-titulo"
        style={{ "--cor-materia": subject.cor } as CSSProperties}
      >
        {subject.nome}
      </h2>

      {registros.length === 0 ? (
        <div className="vazio">Nenhum tempo registrado para esta matéria ainda.</div>
      ) : (
        <>
          <div className="edital-faixa">
            <div className="edital-item">
              <strong>{registros.length}</strong>
              <span>Questões com tempo registrado</span>
            </div>
            <div className="edital-item">
              <strong>{formatarSegundos(total / 1000)}</strong>
              <span>Tempo total na matéria</span>
            </div>
            <div className="edital-item">
              <strong>{formatarSegundos(media / 1000)}</strong>
              <span>Tempo médio por questão</span>
            </div>
            <div className="edital-item">
              <strong>{formatarSegundos(maisRapida / 1000)}</strong>
              <span>Resposta mais rápida</span>
            </div>
            <div className="edital-item">
              <strong>{formatarSegundos(maisLenta / 1000)}</strong>
              <span>Resposta mais lenta</span>
            </div>
          </div>

          <div className="tempos-tabela-scroll">
            <table className="tempos-tabela">
              <thead>
                <tr>
                  <th>Tópico</th>
                  <th>Tempo</th>
                  <th>Resultado</th>
                  <th>Quando</th>
                </tr>
              </thead>
              <tbody>
                {registros.map((r, i) => (
                  <tr key={`${r.questionId}-${r.respondidaEm}-${i}`}>
                    <td>{QUESTAO_POR_ID.get(r.questionId)?.topico ?? "—"}</td>
                    <td className="tempos-valor">{formatarSegundos(r.tempoMs! / 1000)}</td>
                    <td>
                      <span className={r.acertou ? "tempos-acertou" : "tempos-errou"}>
                        {r.acertou ? "✔ Acertou" : "✘ Errou"}
                      </span>
                    </td>
                    <td className="tempos-quando">
                      {new Date(r.respondidaEm).toLocaleString("pt-BR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
