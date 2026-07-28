import { useState, type CSSProperties } from "react";
import { SUBJECTS } from "../data/subjects";
import { CONTEUDO_POR_MATERIA } from "../data/conteudos";
import { APOSTAS_POR_MATERIA } from "../data/apostas";
import type { SubjectId } from "../lib/types";

export default function Apostas() {
  const [materiaSelecionada, setMateriaSelecionada] = useState<SubjectId | null>(null);

  if (!materiaSelecionada) {
    return (
      <>
        <h2 className="secao-titulo">Apostas e conteúdo completo</h2>
        <p className="conteudo-intro">
          Visão geral de todos os tópicos já registrados no app para cada matéria, mais uma
          seleção de temas que não são tópico oficial do Anexo I mas têm boa chance de cair, pelo
          padrão da banca FGV ou por atualização legislativa recente.
        </p>
        <div className="materias-grid">
          {SUBJECTS.map((s) => {
            const qtdOficial = s.topicos.length;
            const qtdApostas = APOSTAS_POR_MATERIA[s.id]?.length ?? 0;
            return (
              <button
                key={s.id}
                className="materia-card"
                style={{ "--cor-materia": s.cor } as CSSProperties}
                onClick={() => setMateriaSelecionada(s.id)}
              >
                <div className="materia-nome">{s.nome}</div>
                <div className="materia-meta">
                  <span>{qtdOficial} tópicos oficiais</span>
                  <span>🎯 {qtdApostas} apostas</span>
                </div>
              </button>
            );
          })}
        </div>
      </>
    );
  }

  const subject = SUBJECTS.find((s) => s.id === materiaSelecionada)!;
  const conteudo = CONTEUDO_POR_MATERIA[materiaSelecionada] ?? [];
  const apostas = APOSTAS_POR_MATERIA[materiaSelecionada] ?? [];

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

      <h3 className="aposta-subtitulo">📖 Conteúdo já registrado ({subject.topicos.length})</h3>
      <ul className="aposta-checklist">
        {subject.topicos.map((t) => {
          const disponivel = conteudo.some((c) => c.topico === t);
          return (
            <li key={t} className={disponivel ? "aposta-check-ok" : "aposta-check-pendente"}>
              {t}
            </li>
          );
        })}
      </ul>

      {apostas.length > 0 && (
        <>
          <h3 className="aposta-subtitulo">🎯 Apostas — pode cair além do edital</h3>
          <div className="aposta-lista">
            {apostas.map((a) => (
              <article key={a.tema} className="aposta-card">
                <h4 className="aposta-tema">{a.tema}</h4>
                <p className="aposta-motivo">{a.motivo}</p>
              </article>
            ))}
          </div>
        </>
      )}
    </>
  );
}
