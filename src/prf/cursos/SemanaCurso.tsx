import { useMemo, useState, type CSSProperties } from "react";
import type { TelaAulas } from "../aulas/AulasCurso";
import { curto, diaMes, diasComEstudo, totaisEstudo, useAgora, useEstudo } from "../aulas/estudo";
import GraficoDias from "../aulas/GraficoDias";
import { metaDoDia, useMeta } from "../aulas/meta";
import { aulaParaRetomar } from "../aulas/progresso";
import { nomeAula } from "../aulas/rotulos";
import {
  chaveSemana,
  gravarNotas,
  inicioSemana,
  lerNotas,
  maisDias,
  type NotasSemana,
} from "../semana/base";
import { Numero, Seta } from "../semana/partes";
import type { BancoCurso, TentativaCurso } from "./completo/tipos";
import { blocosDoCurso, primeiraSemanaCurso, questoesDaSemana, resumoSemanaCurso } from "./resumoSemana";

interface SemanaCursoProps {
  /** Segunda-feira da semana aberta; null = esta semana. */
  inicio: number | null;
  onInicio: (inicio: number | null) => void;
  onAbrirAula: (tela: TelaAulas) => void;
  /** Só nos cursos com banco: soma as questões ao acompanhamento. */
  questoes?: {
    tentativas: TentativaCurso[];
    banco: BancoCurso;
    total: { respondidas: number; acertos: number };
    onTreinar: (materia: string, topico?: string) => void;
  };
}

const HORA = 60 * 60 * 1000;
const ACERTO_BOM = 0.7;
const MAX_DIFICULDADES = 4;

const pct = (parte: number, todo: number) => (todo > 0 ? Math.round((parte / todo) * 100) : 0);
const largura = (p: number): CSSProperties => ({ width: `${Math.min(100, p)}%` });
const plural = (n: number, um: string, varios: string) => `${n} ${n === 1 ? um : varios}`;
const milhar = (n: number) => n.toLocaleString("pt-BR");
const emLista = (itens: string[]) =>
  itens.length < 2 ? itens.join("") : `${itens.slice(0, -1).join(", ")} e ${itens[itens.length - 1]}`;

interface Sugestao {
  chave: string;
  texto: string;
  acao?: { rotulo: string; fazer: () => void };
}

/** O acompanhamento da PRF: tempo, vídeos e PDFs da semana, por matéria, e as questões quando o curso tem banco. */
export default function SemanaCurso({ inicio, onInicio, onAbrirAula, questoes }: SemanaCursoProps) {
  const estudo = useEstudo();
  const metaDiaria = useMeta();
  const agora = useAgora(estudo.ativo !== null && estudo.ativo.desde !== null);
  const [notas, setNotas] = useState(lerNotas);

  const atual = inicioSemana(agora);
  const semana = inicio !== null && inicio < atual ? inicio : atual;
  const eAtual = semana === atual;
  const anterior = maisDias(semana, -7);
  const proxima = maisDias(semana, 7);
  const hoje = new Date(agora).setHours(0, 0, 0, 0);
  const r = resumoSemanaCurso(estudo, semana, agora);
  const antes = resumoSemanaCurso(estudo, anterior, agora);
  const banco = questoes?.banco;
  const questaoPorId = useMemo(() => new Map((banco?.questoes ?? []).map((q) => [q.id, q])), [banco]);
  const qs = questoes ? questoesDaSemana(questoes.tentativas, questaoPorId, semana) : null;
  const qsAntes = questoes ? questoesDaSemana(questoes.tentativas, questaoPorId, anterior) : null;
  const dificuldades = qs?.dificuldades.slice(0, MAX_DIFICULDADES) ?? [];
  const primeira = primeiraSemanaCurso(estudo, questoes?.tentativas);
  const horasTotal = totaisEstudo(estudo, agora).total;
  const diasTotal = diasComEstudo(estudo);
  const blocosTotal = blocosDoCurso(estudo);

  const chave = chaveSemana(semana);
  const minhas = notas[chave] ?? {};
  // O plano desta semana foi escrito no acompanhamento da semana anterior.
  const combinado = notas[chaveSemana(anterior)] ?? {};
  const meta = combinado.metaHoras;

  function anota(parte: Partial<NotasSemana>) {
    const todas = { ...notas, [chave]: { ...minhas, ...parte } };
    setNotas(todas);
    gravarNotas(todas);
  }

  const titulo = eAtual ? "Esta semana" : semana === maisDias(atual, -7) ? "Semana passada" : "Semana";
  // Há curso com mais de 20 matérias: a tabela mostra só as que tiveram estudo.
  const estudadas = r.materias.filter((l) => l.ms > 0 || l.blocos > 0 || qs?.porMateria.has(l.grupo.id));
  const semNada = r.ms === 0 && r.blocos === 0 && !qs?.questoes;

  const sugestoes: Sugestao[] = [];
  if (meta) {
    const falta = meta * HORA - r.ms;
    sugestoes.push({
      chave: "meta",
      texto:
        falta <= 0
          ? `Meta de ${meta}h batida: ${curto(r.ms)} de estudo líquido.`
          : `${eAtual ? "Faltam" : "Faltaram"} ${curto(falta)} para a meta de ${meta}h.`,
    });
  }
  if (qs && questoes) {
    // As matérias mais fracas da semana. Sem edital não há peso: vale só o desempenho.
    const fracas = r.materias
      .map((l) => ({ grupo: l.grupo, n: qs.porMateria.get(l.grupo.id) }))
      .filter(({ n }) => n && n.questoes >= 5 && n.acertos / n.questoes < ACERTO_BOM)
      .sort((a, b) => a.n!.acertos / a.n!.questoes - b.n!.acertos / b.n!.questoes)
      .slice(0, 2);
    for (const { grupo, n } of fracas) {
      sugestoes.push({
        chave: `reforco-${grupo.id}`,
        texto: `Reforçar ${grupo.nome}: ${pct(n!.acertos, n!.questoes)}% de acerto em ${n!.questoes} questões.`,
        acao: { rotulo: "Treinar", fazer: () => questoes.onTreinar(grupo.id) },
      });
    }
  }
  const seguir = eAtual ? aulaParaRetomar(estudo, new Set(estudo.vistos)) : null;
  if (seguir) {
    sugestoes.push({
      chave: "aula",
      texto: `Seguir nas aulas: ${seguir.grupo.nome} · ${nomeAula(seguir.aula)}.`,
      acao: { rotulo: "Abrir aula", fazer: () => onAbrirAula({ grupo: seguir.grupo.id, aula: seguir.aula.id }) },
    });
  }

  return (
    <div className="prf-acomp">
      <header className="prf-acomp-cabeca">
        <div>
          <p className="prf-acomp-olho">Acompanhamento semanal</p>
          <h2 className="prf-acomp-titulo">
            {titulo}{" "}
            <span>
              {diaMes(semana)} a {diaMes(maisDias(semana, 6))}
            </span>
          </h2>
        </div>
        <nav className="prf-acomp-nav" aria-label="Trocar de semana">
          <button
            type="button"
            className="botao"
            onClick={() => onInicio(anterior)}
            disabled={primeira === null || primeira >= semana}
            aria-label="Semana anterior"
            title="Semana anterior"
          >
            <Seta caminho="M15 5l-7 7 7 7" />
          </button>
          {!eAtual && (
            <button type="button" className="botao" onClick={() => onInicio(null)}>
              Esta semana
            </button>
          )}
          <button
            type="button"
            className="botao"
            onClick={() => onInicio(proxima >= atual ? null : proxima)}
            disabled={eAtual}
            aria-label="Próxima semana"
            title="Próxima semana"
          >
            <Seta caminho="M9 5l7 7-7 7" />
          </button>
        </nav>
      </header>

      {semNada && (
        <p className="prf-acomp-aviso">
          {eAtual
            ? "Nada registrado nesta semana ainda. Ligue o cronômetro nas aulas e marque os vídeos e PDFs: tudo aparece aqui."
            : "Nada registrado nesta semana."}
        </p>
      )}

      <div className={`prf-acomp-numeros${qs ? "" : " prf-acomp-numeros-dois"}`}>
        <Numero n={1} titulo="Horas líquidas" valor={curto(r.ms)} antes={`Semana anterior: ${curto(antes.ms)}`}>
          {meta ? (
            <>
              <div
                className="prf-acomp-barra"
                role="progressbar"
                aria-label={`Meta de ${meta}h`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.min(100, pct(r.ms, meta * HORA))}
              >
                <span style={largura(pct(r.ms, meta * HORA))} />
              </div>
              <p className="prf-acomp-detalhe">
                {pct(r.ms, meta * HORA)}% da meta de {meta}h
              </p>
            </>
          ) : (
            <p className="prf-acomp-detalhe">Tempo do cronômetro, sem as pausas</p>
          )}
        </Numero>
        <Numero n={2} titulo="Blocos concluídos" valor={String(r.blocos)} antes={`Semana anterior: ${antes.blocos}`}>
          <p className="prf-acomp-detalhe">
            {plural(r.aulas.length, "aula concluída", "aulas concluídas")} · {estudadas.length} de {r.materias.length}{" "}
            matérias estudadas
          </p>
          {r.materiasConcluidas.length > 0 && (
            <p className="prf-acomp-detalhe prf-acomp-destaque">
              🏁 {emLista(r.materiasConcluidas.map((g) => g.nome))}{" "}
              {r.materiasConcluidas.length === 1 ? "concluída" : "concluídas"}
            </p>
          )}
        </Numero>
        {qs && qsAntes && (
          <>
            <Numero
              n={3}
              titulo="Questões resolvidas"
              valor={String(qs.questoes)}
              antes={`Semana anterior: ${qsAntes.questoes}`}
            >
              <p className="prf-acomp-detalhe">
                {qs.questoes > 0 ? `${qs.acertos} certas · ${qs.questoes - qs.acertos} erradas` : "Treino e fixação"}
              </p>
            </Numero>
            <Numero
              n={4}
              titulo="% de acertos"
              valor={qs.questoes > 0 ? `${pct(qs.acertos, qs.questoes)}%` : "—"}
              antes={`Semana anterior: ${qsAntes.questoes > 0 ? `${pct(qsAntes.acertos, qsAntes.questoes)}%` : "—"}`}
            >
              <p className="prf-acomp-detalhe">
                {qs.questoes > 0 ? `${qs.acertos} de ${qs.questoes} questões` : "Sem questões nesta semana"}
              </p>
            </Numero>
          </>
        )}
      </div>

      <div className="prf-acomp-grade">
        <div className="prf-acomp-coluna">
          <section className="prf-acomp-bloco" aria-label="Horas por dia">
            <h3 className="prf-acomp-bloco-titulo">Horas por dia</h3>
            <GraficoDias
              dias={r.dias}
              titulo="De segunda a domingo"
              vazio={eAtual ? "O tempo de cada dia aparece aqui." : "Nenhum estudo nesta semana."}
              hoje={hoje}
              metas={r.dias.map((d) => metaDoDia(metaDiaria, d.dia))}
            />
          </section>

          <section className="prf-acomp-bloco" aria-label="Por matéria">
            <h3 className="prf-acomp-bloco-titulo">Por matéria</h3>
            {estudadas.length === 0 && r.livreMs === 0 ? (
              <p className="prf-acomp-vazio">As matérias estudadas na semana aparecem aqui.</p>
            ) : (
              <div className="prf-acomp-rola">
                <table className="prf-acomp-tabela">
                  <thead>
                    <tr>
                      <th scope="col">Matéria</th>
                      <th scope="col">Horas</th>
                      <th scope="col">Blocos</th>
                      {qs && <th scope="col">Questões</th>}
                      {qs && <th scope="col">Acerto</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {estudadas.map((l) => {
                      const n = qs?.porMateria.get(l.grupo.id);
                      return (
                        <tr key={l.grupo.id}>
                          <th scope="row">
                            <span
                              className="prf-acomp-cor"
                              style={{ background: l.grupo.cor ?? "var(--ouro)" }}
                              aria-hidden="true"
                            />
                            {l.grupo.nome}
                          </th>
                          <td>{l.ms > 0 ? curto(l.ms) : "—"}</td>
                          <td>{l.blocos > 0 ? l.blocos : "—"}</td>
                          {qs && <td>{n ? n.questoes : "—"}</td>}
                          {qs && <td>{n ? `${pct(n.acertos, n.questoes)}%` : "—"}</td>}
                        </tr>
                      );
                    })}
                    {r.livreMs > 0 && (
                      <tr>
                        <th scope="row">
                          <span className="prf-acomp-cor prf-acomp-cor-livre" aria-hidden="true" />
                          Estudo livre
                        </th>
                        <td>{curto(r.livreMs)}</td>
                        <td>—</td>
                        {qs && <td>—</td>}
                        {qs && <td>—</td>}
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
            {r.aulas.length > 0 && (
              <details className="prf-acomp-aulas">
                <summary>{plural(r.aulas.length, "aula concluída", "aulas concluídas")} nesta semana</summary>
                <ul>
                  {r.aulas.map(({ grupo, aula }) => (
                    <li key={aula.id}>
                      {grupo.nome} · {nomeAula(aula)}
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </section>
        </div>
        <div className="prf-acomp-coluna">
          <section className="prf-acomp-bloco" aria-label="Principais dificuldades">
            <h3 className="prf-acomp-bloco-titulo">
              <span className="prf-acomp-n" aria-hidden="true">
                {qs ? 5 : 3}
              </span>
              Principais dificuldades
            </h3>
            {qs &&
              (qs.questoes === 0 ? (
                <p className="prf-acomp-vazio">
                  Sem questões nesta semana: os assuntos em que você mais errar aparecem aqui.
                </p>
              ) : dificuldades.length === 0 ? (
                <p className="prf-acomp-vazio">Nenhum assunto com acerto abaixo de 70% nesta semana.</p>
              ) : (
                <ol className="prf-acomp-dific">
                  {dificuldades.map((d) => (
                    <li key={`${d.materia}|${d.topico}`}>
                      <div className="prf-acomp-dific-texto">
                        <span className="prf-acomp-dific-materia">
                          {r.materias.find((l) => l.grupo.id === d.materia)?.grupo.nome ?? d.materia}
                        </span>
                        <span className="prf-acomp-dific-topico">{d.topico}</span>
                        <span className="prf-acomp-dific-conta">
                          {plural(d.erros, "erro", "erros")} em {d.total} · {pct(d.total - d.erros, d.total)}% de acerto
                        </span>
                      </div>
                      <button type="button" className="botao" onClick={() => questoes?.onTreinar(d.materia, d.topico)}>
                        Treinar
                      </button>
                    </li>
                  ))}
                </ol>
              ))}
            <label className="prf-acomp-nota">
              <span>Suas anotações</span>
              <textarea
                rows={3}
                value={minhas.dificuldades ?? ""}
                onChange={(ev) => anota({ dificuldades: ev.target.value })}
                placeholder="O que travou? Ex.: um assunto que ficou confuso; uma aula que ficou pela metade."
              />
            </label>
          </section>

          <section className="prf-acomp-bloco" aria-label="Ajustes para a próxima semana">
            <h3 className="prf-acomp-bloco-titulo">
              <span className="prf-acomp-n" aria-hidden="true">
                {qs ? 6 : 4}
              </span>
              Ajustes para a próxima semana
            </h3>
            <p className="prf-acomp-sub">
              Semana de {diaMes(proxima)} a {diaMes(maisDias(proxima, 6))}
            </p>
            {combinado.ajustes?.trim() && (
              <blockquote className="prf-acomp-combinado">
                <span>Você tinha combinado para {eAtual ? "esta" : "essa"} semana:</span>
                {combinado.ajustes.trim()}
              </blockquote>
            )}
            {sugestoes.length > 0 ? (
              <ul className="prf-acomp-sugestoes">
                {sugestoes.map((s) => (
                  <li key={s.chave}>
                    <span>{s.texto}</span>
                    {s.acao && (
                      <button type="button" className="botao" onClick={s.acao.fazer}>
                        {s.acao.rotulo}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="prf-acomp-vazio">As sugestões aparecem quando houver estudo na semana.</p>
            )}
            <div className="prf-acomp-meta">
              <label htmlFor="prf-acomp-meta">Meta de horas líquidas</label>
              <div className="prf-acomp-meta-campo">
                <input
                  id="prf-acomp-meta"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={99}
                  step={1}
                  value={minhas.metaHoras ?? ""}
                  onChange={(ev) => {
                    const n = Math.round(Number(ev.target.value));
                    anota({ metaHoras: ev.target.value === "" || !(n > 0) ? undefined : Math.min(n, 99) });
                  }}
                />
                <span>horas na semana</span>
              </div>
            </div>
            <label className="prf-acomp-nota">
              <span>O que vai mudar</span>
              <textarea
                rows={3}
                value={minhas.ajustes ?? ""}
                onChange={(ev) => anota({ ajustes: ev.target.value })}
                placeholder="Ex.: reler os PDFs na terça e na quinta; terminar uma matéria até domingo."
              />
            </label>
            <p className="prf-acomp-salvo">As anotações e a meta ficam salvas neste aparelho.</p>
          </section>
        </div>
      </div>

      <section className="prf-acomp-bloco prf-acomp-total" aria-label="Totalizador">
        <h3 className="prf-acomp-bloco-titulo">Totalizador</h3>
        <p className="prf-acomp-sub">Tudo somado, de todas as semanas.</p>
        <dl className={`prf-acomp-total-numeros${questoes ? "" : " prf-acomp-total-dois"}`}>
          <div>
            <dt>Horas líquidas</dt>
            <dd className="prf-acomp-valor">{curto(horasTotal)}</dd>
            <dd className="prf-acomp-detalhe">
              {diasTotal > 0 ? `em ${plural(diasTotal, "dia", "dias")} de estudo` : "Sem estudo cronometrado"}
            </dd>
          </div>
          {questoes ? (
            <>
              <div>
                <dt>Questões resolvidas</dt>
                <dd className="prf-acomp-valor">{milhar(questoes.total.respondidas)}</dd>
                <dd className="prf-acomp-detalhe">
                  {questoes.total.respondidas > 0
                    ? `${milhar(questoes.total.acertos)} certas · ${milhar(
                        questoes.total.respondidas - questoes.total.acertos,
                      )} erradas`
                    : "Nenhuma ainda"}
                </dd>
              </div>
              <div>
                <dt>% de acertos</dt>
                <dd className="prf-acomp-valor">
                  {questoes.total.respondidas > 0 ? `${pct(questoes.total.acertos, questoes.total.respondidas)}%` : "—"}
                </dd>
                <dd className="prf-acomp-detalhe">
                  {questoes.total.respondidas > 0 ? "Somando todas as questões" : "Aparece com a primeira questão"}
                </dd>
              </div>
            </>
          ) : (
            <div>
              <dt>Blocos concluídos</dt>
              <dd className="prf-acomp-valor">{milhar(blocosTotal.feitos)}</dd>
              <dd className="prf-acomp-detalhe">de {milhar(blocosTotal.total)} vídeos e PDFs do curso</dd>
            </div>
          )}
        </dl>
      </section>
    </div>
  );
}
