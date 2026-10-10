import { Fragment, useMemo, useState } from "react";
import type { AttemptRecord, ProvaExterna, SubjectId } from "../lib/types";
import { SUBJECT_MAP } from "../data/subjects";
import { ORDEM_CADERNO } from "../data/retaFinal";
import { errosExternos, itensCaderno, type ItemCaderno, type MotivoCaderno } from "../lib/retaFinal";

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
  externas: ProvaExterna[];
  aberto: boolean;
  onAlternar: (aberto: boolean) => void;
}

export default function CadernoErros({ attempts, externas, aberto, onAlternar }: CadernoErrosProps) {
  const itens = useMemo(() => itensCaderno(attempts), [attempts]);
  const externos = useMemo(() => errosExternos(externas), [externas]);
  const [materia, setMateria] = useState<SubjectId | "todas">("todas");
  const errosFora = externos.reduce((s, e) => s + e.erros, 0);
  // Mesma ordem do caderno: peso da matéria na prova e, no empate, a ordem do Anexo I.
  const materias = [...new Set([...itens.map((i) => i.questao.materia), ...externos.map((e) => e.materia.materia)])].sort(
    (a, b) => (SUBJECT_MAP[b]?.peso ?? 0) - (SUBJECT_MAP[a]?.peso ?? 0) || ORDEM_CADERNO.indexOf(a) - ORDEM_CADERNO.indexOf(b),
  );
  const visiveis = materia === "todas" ? materias : materias.filter((m) => m === materia);
  const conta = (m: MotivoCaderno) => itens.filter((i) => i.motivo === m).length;
  const contaMateria = (m: SubjectId) =>
    itens.filter((i) => i.questao.materia === m).length + externos.filter((e) => e.materia.materia === m).reduce((s, e) => s + e.erros, 0);

  const grupos: { chave: string; materia: SubjectId; titulo: string; itens: ItemCaderno[] }[] = [];
  for (const item of itens) {
    const chave = item.bloco.id;
    const ultimo = grupos[grupos.length - 1];
    if (ultimo && ultimo.chave === chave) ultimo.itens.push(item);
    else
      grupos.push({
        chave,
        materia: item.questao.materia,
        titulo: `${SUBJECT_MAP[item.questao.materia].nome} · ${item.bloco.nome}`,
        itens: [item],
      });
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
        (marcou certeza e errou) vêm primeiro em cada bloco: são os conceitos errados que você levaria para a prova. As provas feitas fora
        do app entram por matéria, com os tópicos e a sua anotação. Ordem pelo peso da matéria na prova.
      </p>
      {itens.length === 0 && externos.length === 0 ? (
        <p className="vazio">
          Ainda vazio. Ele se enche sozinho com os erros do simulado e dos treinos, e com o que você lançar das provas feitas fora do app.
        </p>
      ) : (
        <>
          <p className="caderno-resumo">
            {itens.length > 0 && (
              <>
                <strong>{itens.length}</strong> questão(ões): {conta("convicto")} erro(s) convicto(s), {conta("erro")} erro(s) e{" "}
                {conta("chute")} acerto(s) no chute.
              </>
            )}
            {itens.length > 0 && externos.length > 0 && " "}
            {externos.length > 0 && (
              <>
                <strong>{errosFora}</strong> erro(s) lançado(s) de provas feitas fora do app.
              </>
            )}
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
                  Todas ({itens.length + errosFora})
                </button>
                {materias.map((m) => (
                  <button key={m} className={`confianca-chip ${materia === m ? "confianca-ativa" : ""}`} onClick={() => setMateria(m)}>
                    {SUBJECT_MAP[m].nome} ({contaMateria(m)})
                  </button>
                ))}
              </div>
              {visiveis.map((m) => {
                const deFora = externos.filter((e) => e.materia.materia === m);
                return (
                  <Fragment key={m}>
                    {deFora.length > 0 && (
                      <div className="caderno-grupo">
                        <h3 className="caderno-bloco">{SUBJECT_MAP[m].nome} · provas feitas fora do app</h3>
                        {deFora.map((e) => (
                          <div key={`${e.prova.id}-${m}`} className="caderno-item caderno-externo">
                            <div className="questao-tags">
                              <span className="questao-tag caderno-motivo-externo">Prova de fora</span>
                              <span className="questao-tag">{formatarData(e.prova.lancadaEm)}</span>
                              <span className="questao-tag questao-tag-fonte">{e.prova.nome}</span>
                            </div>
                            <p className="caderno-enunciado">
                              {e.erros} erro(s) em {e.materia.questoes} questão(ões){e.porBloco.length > 0 || e.semTopico > 0 ? ":" : "."}
                            </p>
                            {(e.porBloco.length > 0 || e.semTopico > 0) && (
                              <ul className="caderno-ext-blocos">
                                {e.porBloco.map((b) => (
                                  <li key={b.bloco.id}>
                                    <strong>{b.erros}</strong> em {b.bloco.nome}
                                  </li>
                                ))}
                                {e.semTopico > 0 && (
                                  <li>
                                    <strong>{e.semTopico}</strong> sem tópico marcado
                                  </li>
                                )}
                              </ul>
                            )}
                            {e.materia.nota && (
                              <p className="caderno-nota">
                                <strong>O que errei:</strong> {e.materia.nota}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {grupos
                      .filter((g) => g.materia === m)
                      .map((g) => (
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
                              {questao.explicacaoErradas && (
                                <p className="caderno-explicacao explicacao-erradas">
                                  <strong>Por que as outras estão erradas:</strong> {questao.explicacaoErradas}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                  </Fragment>
                );
              })}
            </>
          )}
        </>
      )}
    </>
  );
}
