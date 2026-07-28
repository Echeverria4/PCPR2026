import { SUBJECT_MAP } from "../data/subjects";
import type { QuizSessionResult, SubjectId } from "../lib/types";

interface ResultProps {
  resultado: QuizSessionResult;
  onVoltarHome: () => void;
  onRevisarErros: () => void;
}

export default function Result({ resultado, onVoltarHome, onRevisarErros }: ResultProps) {
  const percentual = resultado.total > 0 ? Math.round((resultado.acertos / resultado.total) * 100) : 0;
  const erros = resultado.respostas.filter((r) => !r.acertou).length;

  const porMateria = new Map<SubjectId, { total: number; acertos: number }>();
  for (const r of resultado.respostas) {
    const cur = porMateria.get(r.materia) ?? { total: 0, acertos: 0 };
    cur.total += 1;
    if (r.acertou) cur.acertos += 1;
    porMateria.set(r.materia, cur);
  }

  return (
    <div>
      <div className="resultado-hero">
        <div className="resultado-numero">
          {resultado.acertos} / {resultado.total}
        </div>
        <div className="resultado-legenda">
          {percentual}% de acerto nesta sessão · {erros} questão(ões) para revisar
        </div>
      </div>

      <h2 className="secao-titulo">Desempenho por matéria</h2>
      <table className="resultado-tabela">
        <thead>
          <tr>
            <th>Matéria</th>
            <th>Acertos</th>
            <th>Aproveitamento</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(porMateria.entries()).map(([materia, v]) => (
            <tr key={materia}>
              <td>{SUBJECT_MAP[materia]?.nome ?? materia}</td>
              <td>
                {v.acertos} / {v.total}
              </td>
              <td>{Math.round((v.acertos / v.total) * 100)}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="resultado-acoes">
        <button className="botao botao-ouro" onClick={onVoltarHome}>
          Voltar ao início
        </button>
        {erros > 0 && (
          <button className="botao" onClick={onRevisarErros}>
            Revisar questões erradas agora
          </button>
        )}
      </div>
    </div>
  );
}
