import type { Confianca } from "../lib/types";
import type { TentativaCurso } from "../prf/cursos/completo/tipos";
import { Emoji } from "../icones/Emoji";

/**
 * Quanto se acerta quando a resposta foi marcada com Certeza, Dúvida ou Chute. Mostra onde a certeza engana (erro
 * convicto) e onde o acerto veio sem saber (chute ou dúvida que deu certo), com atalho para treinar as duas listas.
 */

const NIVEIS: { id: Confianca; rotulo: string; dica: string }[] = [
  { id: "certeza", rotulo: "Certeza", dica: "deveria ficar perto de 100%" },
  { id: "duvida", rotulo: "Dúvida", dica: "mostra se a sua intuição ajuda" },
  { id: "chute", rotulo: "Chute", dica: "" },
];

interface Contagem {
  feitas: number;
  certas: number;
}

const pct = (c: Contagem) => (c.feitas > 0 ? Math.round((c.certas / c.feitas) * 100) : null);
const n = (v: number) => v.toLocaleString("pt-BR");
const respostasTxt = (v: number) => `${n(v)} ${v === 1 ? "resposta" : "respostas"}`;

function contar(tentativas: TentativaCurso[]) {
  const por: Record<Confianca | "sem", Contagem> = {
    certeza: { feitas: 0, certas: 0 },
    duvida: { feitas: 0, certas: 0 },
    chute: { feitas: 0, certas: 0 },
    sem: { feitas: 0, certas: 0 },
  };
  for (const t of tentativas) {
    const c = por[t.confianca ?? "sem"];
    c.feitas++;
    if (t.acertou) c.certas++;
  }
  return por;
}

function Linhas({ tentativas, acaso }: { tentativas: TentativaCurso[]; acaso: number | null }) {
  const por = contar(tentativas);
  return (
    <ul className="cx-conf-linhas">
      {NIVEIS.map((nv) => {
        const c = por[nv.id];
        const p = pct(c);
        const dica = nv.id === "chute" ? (acaso !== null ? `ao acaso, seria ~${acaso}%` : "") : nv.dica;
        return (
          <li key={nv.id} className={`cx-conf-linha cx-conf-${nv.id}`}>
            <span className="cx-conf-nivel">{nv.rotulo}</span>
            <span className="cx-conf-medidor" aria-hidden="true">
              <span style={{ width: `${p ?? 0}%` }} />
            </span>
            <span className="cx-conf-valor">
              {p === null ? (
                "—"
              ) : (
                <>
                  <strong>{p}%</strong> de acerto
                </>
              )}
            </span>
            <span className="cx-conf-sub">
              {respostasTxt(c.feitas)}
              {c.feitas > 0 && dica ? ` · ${dica}` : ""}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

interface PainelProps {
  tentativas: TentativaCurso[];
  /** Nome de cada matéria, para a tabela por matéria. */
  nomes: Record<string, string>;
  /** Chance de acertar ao acaso (de 0 a 1) em cada questão, para comparar com o chute. */
  acasoDe: (questionId: string) => number | null;
  onTreinar: (ids: string[]) => void;
}

export default function PainelConfianca({ tentativas, nomes, acasoDe, onTreinar }: PainelProps) {
  const marcadas = tentativas.filter((t) => t.confianca);
  const sem = tentativas.length - marcadas.length;

  // O chute puro numa questão de 5 alternativas acerta 20%; a média leva em conta as questões de fato chutadas.
  const chances = marcadas.filter((t) => t.confianca === "chute").map((t) => acasoDe(t.questionId));
  const validas = chances.filter((c): c is number => c !== null);
  const acaso = validas.length > 0 ? Math.round((validas.reduce((s, c) => s + c, 0) / validas.length) * 100) : null;

  // As listas usam a última resposta de cada questão: se depois você acertou com certeza, ela sai da lista.
  const ultima = new Map<string, TentativaCurso>();
  for (const t of tentativas) if (acasoDe(t.questionId) !== null) ultima.set(t.questionId, t);
  const convictas: string[] = [];
  const semSaber: string[] = [];
  for (const t of ultima.values()) {
    if (t.confianca === "certeza" && !t.acertou) convictas.push(t.questionId);
    if ((t.confianca === "chute" || t.confianca === "duvida") && t.acertou) semSaber.push(t.questionId);
  }

  // Pelo nome: matérias que o treino junta (as duas línguas, por exemplo) ficam numa linha só.
  const nomeDe = (m: string) => nomes[m] ?? m;
  const materias = [...new Set(marcadas.map((t) => nomeDe(t.materia)))]
    .map((nome) => ({ nome, por: contar(marcadas.filter((t) => nomeDe(t.materia) === nome)) }))
    .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));

  return (
    <section className="cx-card cx-conf" aria-labelledby="cx-conf-titulo">
      <h2 className="cx-conf-titulo" id="cx-conf-titulo">
        <span aria-hidden="true">
          <Emoji e="🎯" />
        </span> Grau de confiança
      </h2>
      <p className="cx-conf-intro">
        Quanto você acerta quando marca <b>Certeza</b>, <b>Dúvida</b> ou <b>Chute</b> antes de responder.
      </p>

      {marcadas.length === 0 ? (
        <p className="cx-conf-vazio">
          Ainda não há respostas marcadas. No treino, toque em Certeza, Dúvida ou Chute antes de escolher a alternativa.
        </p>
      ) : (
        <Linhas tentativas={marcadas} acaso={acaso} />
      )}

      {sem > 0 && (
        <p className="cx-conf-sem">
          {respostasTxt(sem)} sem marcar. Marque sempre: é isso que separa o erro de quem tinha certeza do chute que não
          deu certo.
        </p>
      )}

      {(convictas.length > 0 || semSaber.length > 0) && (
        <ul className="cx-conf-acoes">
          {convictas.length > 0 && (
            <li className="cx-conf-acao cx-conf-acao-perigo">
              <span className="cx-conf-acao-texto">
                <strong>
                  {n(convictas.length)} {convictas.length === 1 ? "erro" : "erros"} com certeza
                </strong>
                O erro mais perigoso: na prova, você marcaria sem desconfiar.
              </span>
              <button type="button" className="botao" onClick={() => onTreinar(convictas)}>
                Treinar {convictas.length === 1 ? "esta" : `as ${n(convictas.length)}`}
              </button>
            </li>
          )}
          {semSaber.length > 0 && (
            <li className="cx-conf-acao">
              <span className="cx-conf-acao-texto">
                <strong>
                  {n(semSaber.length)} {semSaber.length === 1 ? "acerto" : "acertos"} no chute ou na dúvida
                </strong>
                Acertou sem ter certeza: treine de novo para virar conhecimento.
              </span>
              <button type="button" className="botao" onClick={() => onTreinar(semSaber)}>
                Treinar {semSaber.length === 1 ? "esta" : `as ${n(semSaber.length)}`}
              </button>
            </li>
          )}
        </ul>
      )}

      {materias.length > 0 && (
        <details className="cx-conf-materias">
          <summary>Por matéria</summary>
          <div className="cx-conf-tabela-rolagem">
            <table className="cx-conf-tabela">
              <thead>
                <tr>
                  <th scope="col">Matéria</th>
                  {NIVEIS.map((nv) => (
                    <th key={nv.id} scope="col">
                      {nv.rotulo}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {materias.map((m) => (
                  <tr key={m.nome}>
                    <th scope="row">{m.nome}</th>
                    {NIVEIS.map((nv) => {
                      const c = m.por[nv.id];
                      const p = pct(c);
                      return (
                        <td key={nv.id}>
                          {p === null ? (
                            "—"
                          ) : (
                            <>
                              {p}% <span className="cx-conf-de">de {n(c.feitas)}</span>
                            </>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      )}

      <p className="cx-conf-nota">
        Nas provas do Cebraspe (como a PRF 2021), cada item errado anula um certo, e o item em branco vale zero. O seu
        acerto na Dúvida e no Chute ajuda a decidir, perto da prova, o que vale marcar e o que deixar em branco.
      </p>
    </section>
  );
}

/** Versão curta, para o fim de um treino: só as três linhas da rodada. */
export function ConfiancaDaRodada({
  tentativas,
  acasoDe,
}: {
  tentativas: TentativaCurso[];
  acasoDe: (questionId: string) => number | null;
}) {
  const marcadas = tentativas.filter((t) => t.confianca);
  if (marcadas.length === 0) return null;
  const chances = marcadas
    .filter((t) => t.confianca === "chute")
    .map((t) => acasoDe(t.questionId))
    .filter((c): c is number => c !== null);
  const acaso = chances.length > 0 ? Math.round((chances.reduce((s, c) => s + c, 0) / chances.length) * 100) : null;
  const sem = tentativas.length - marcadas.length;
  return (
    <section className="cx-card cx-conf cx-conf-rodada" aria-labelledby="cx-conf-rodada-titulo">
      <h2 className="cx-conf-titulo" id="cx-conf-rodada-titulo">
        <span aria-hidden="true">
          <Emoji e="🎯" />
        </span> Confiança nesta rodada
      </h2>
      <Linhas tentativas={marcadas} acaso={acaso} />
      {sem > 0 && <p className="cx-conf-sem">{respostasTxt(sem)} sem marcar.</p>}
    </section>
  );
}
