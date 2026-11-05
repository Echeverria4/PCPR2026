import { useState, type CSSProperties } from "react";
import { ResumoRapido, type TelaAulas } from "../../aulas/AulasCurso";
import type { ResumoAula } from "../../aulas/resumos/tipos";
import { nomeAula } from "../../aulas/rotulos";
import type { GrupoCurso } from "../../aulas/tipos";

interface ResumosCursoProps {
  /** As matérias com aulas de estudo, na ordem do curso. */
  materias: GrupoCurso[];
  resumos: Record<string, ResumoAula>;
  onAbrirAula: (tela: TelaAulas) => void;
}

/** A aba Resumos: os mesmos resumos do fim das aulas, por matéria, para revisar sem abrir aula por aula. */
export default function ResumosCurso({ materias, resumos, onAbrirAula }: ResumosCursoProps) {
  const [aberta, setAberta] = useState<string | null>(null);
  const materia = materias.find((m) => m.id === aberta);

  if (!materia) {
    return (
      <>
        <h2 className="secao-titulo">Resumos por matéria</h2>
        <p className="conteudo-intro">
          Um resumo curto de cada aula, escrito para este app. Use para revisar antes ou entre as sessões de treino.
        </p>
        <div className="materias-grid">
          {materias.map((m) => {
            const qtd = m.aulas.filter((a) => resumos[a.id]).length;
            return (
              <button
                key={m.id}
                className="materia-card"
                style={{ "--cor-materia": m.cor } as CSSProperties}
                onClick={() => setAberta(m.id)}
                disabled={qtd === 0}
              >
                <div className="materia-nome">{m.nome}</div>
                <div className="materia-meta">
                  <span>{m.aulas.length} aulas</span>
                  <span>{qtd > 0 ? `${qtd} resumos` : "em preparação"}</span>
                </div>
              </button>
            );
          })}
        </div>
      </>
    );
  }

  const comResumo = materia.aulas.filter((a) => resumos[a.id]);
  return (
    <>
      <button className="botao" onClick={() => setAberta(null)}>
        ← Matérias
      </button>
      <h2 className="secao-titulo conteudo-materia-titulo" style={{ "--cor-materia": materia.cor } as CSSProperties}>
        {materia.nome}
      </h2>
      <div className="prf-resumos-lista">
        {comResumo.map((a) => (
          <details key={a.id} className="prf-resumo-aula">
            <summary>{nomeAula(a)}</summary>
            <ResumoRapido resumo={resumos[a.id]} />
            <button className="botao" onClick={() => onAbrirAula({ grupo: materia.id, aula: a.id })}>
              Abrir a aula
            </button>
          </details>
        ))}
      </div>
    </>
  );
}
