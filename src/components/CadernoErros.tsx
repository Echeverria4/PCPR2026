import { useMemo, useState } from "react";
import type { AttemptRecord, SubjectId } from "../lib/types";
import { SUBJECT_MAP } from "../data/subjects";
import { itensCaderno, type ItemCaderno, type MotivoCaderno } from "../lib/retaFinal";

const ROTULO_MOTIVO: Record<MotivoCaderno, string> = {
  convicto: "Erro convicto",
  erro: "Erro",
  chute: "Acerto no chute",
};

function formatarData(iso: string): string {
  const d = new Date(iso);
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`;
}

interface CadernoErrosProps {
  attempts: AttemptRecord[];
  aberto: boolean;
  onAlternar: (aberto: boolean) => void;
}

export default function CadernoErros({ attempts, aberto, onAlternar }: CadernoErrosProps) {
  const itens = useMemo(() => itensCaderno(attempts), [attempts]);
  const [materia, setMateria] = useState<SubjectId | "todas">("todas");
  const filtrados = materia === "todas" ? itens : itens.filter((i) => i.questao.materia === materia);
  const materias = [...new Set(itens.map((i) => i.questao.materia))];
  const conta = (m: MotivoCaderno) => itens.filter((i) => i.motivo === m).length;

  const grupos: { chave: string; titulo: string; itens: ItemCaderno[] }[] = [];
  for (const item of filtrados) {
    const chave = item.bloco.id;
    const ultimo = grupos[grupos.length - 1];
    if (ultimo && ultimo.chave === chave) ultimo.itens.push(item);
    else grupos.push({ chave, titulo: `${SUBJECT_MAP[item.questao.materia].nome} · ${item.bloco.nome}`, itens: [item] });
  }

  function imprimir() {
    onAlternar(true);
    // Espera o caderno abrir antes de chamar a impressão; a classe esconde o resto da página no papel.
    setTimeout(() => {
      const limpar = () => {
        document.body.classList.remove("print-caderno");
        window.removeEventListener("afterprint", limpar);
      };
      document.body.classList.add("print-caderno");
      window.addEventListener("afterprint", limpar);
      window.print();
    }, 100);
  }

  return (
    <>
      <h2 className="secao-titulo">Caderno de erros</h2>
      <p className="conteudo-intro">
        Toda questão cuja última resposta foi errada, mais as acertadas no chute (o ponto veio, o conhecimento não). Os erros convictos
        (marcou certeza e errou) vêm primeiro em cada bloco: são os conceitos errados que você levaria para a prova. Ordem pelo peso da
        matéria na prova.
      </p>
      {itens.length === 0 ? (
        <p className="vazio">Ainda vazio. Ele se enche sozinho com os erros do simulado e dos treinos.</p>
      ) : (
        <>
          <p className="caderno-resumo">
            <strong>{itens.length}</strong> questão(ões): {conta("convicto")} erro(s) convicto(s), {conta("erro")} erro(s) e {conta("chute")}{" "}
            acerto(s) no chute.
          </p>
          <div className="caderno-acoes">
            <button className="botao botao-ouro" onClick={() => onAlternar(!aberto)}>
              {aberto ? "Fechar caderno" : "Abrir caderno"}
            </button>
            <button className="botao" onClick={imprimir}>
              🖨 Imprimir / salvar PDF
            </button>
          </div>
          {aberto && (
            <>
              <div className="sim-filtros caderno-acoes">
                <button className={`confianca-chip ${materia === "todas" ? "confianca-ativa" : ""}`} onClick={() => setMateria("todas")}>
                  Todas ({itens.length})
                </button>
                {materias.map((m) => (
                  <button key={m} className={`confianca-chip ${materia === m ? "confianca-ativa" : ""}`} onClick={() => setMateria(m)}>
                    {SUBJECT_MAP[m].nome} ({itens.filter((i) => i.questao.materia === m).length})
                  </button>
                ))}
              </div>
              {grupos.map((g) => (
                <div key={g.chave} className="caderno-grupo">
                  <h3 className="caderno-bloco">{g.titulo}</h3>
                  {g.itens.map(({ questao, motivo, quando }) => (
                    <div key={questao.id} className={`caderno-item caderno-${motivo}`}>
                      <div className="questao-tags">
                        <span className={`questao-tag caderno-motivo-${motivo}`}>{ROTULO_MOTIVO[motivo]}</span>
                        <span className="questao-tag">{formatarData(quando)}</span>
                        {questao.fonte && <span className="questao-tag questao-tag-fonte">{questao.fonte}</span>}
                      </div>
                      <p className="caderno-enunciado">{questao.enunciado}</p>
                      <p className="caderno-certa">
                        <strong>Resposta certa:</strong> {questao.alternativas[questao.correta]}
                      </p>
                      <p className="caderno-explicacao">{questao.explicacao}</p>
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
}
