import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { PRF_MATERIA_MAP, type MateriaPrfId } from "../../data/prf";
import { totalQuestoesPrf, type TentativaPrf } from "../armazenamento";
import { FILTROS_PRF_PADRAO, type FiltrosPrf } from "../sessoes";
import type { TelaAulas } from "../aulas/AulasPrf";
import { curto, diaMes, diasComEstudo, totaisEstudo, useAgora, useEstudo } from "../aulas/estudo";
import GraficoDias from "../aulas/GraficoDias";
import { aulaParaRetomar } from "../aulas/progresso";
import {
  chaveSemana,
  gravarNotas,
  inicioSemana,
  lerNotas,
  maisDias,
  primeiraSemana,
  resumoSemana,
  type LinhaMateria,
  type NotasSemana,
} from "./semana";

interface SemanaPrfProps {
  tentativas: TentativaPrf[];
  /** Segunda-feira da semana aberta; null = esta semana. */
  inicio: number | null;
  onInicio: (inicio: number | null) => void;
  onTreinar: (filtros: FiltrosPrf) => void;
  onAbrirAula: (tela: TelaAulas) => void;
}

const HORA = 60 * 60 * 1000;
const MAX_DIFICULDADES = 4;
/** Matéria com acerto abaixo disso (e pelo menos 5 questões) entra nos ajustes. */
const ACERTO_BOM = 0.7;

const NOME_CURTO: Record<MateriaPrfId, string> = {
  pt: "Português",
  etica: "Ética",
  rlm: "Raciocínio Lógico",
  con: "Dir. Constitucional",
  adm: "Dir. Administrativo",
  administracao: "Administração",
  arq: "Arquivologia",
  info: "Informática",
  leg: "Legislação PRF",
};

const pct = (parte: number, todo: number) => (todo > 0 ? Math.round((parte / todo) * 100) : 0);
const largura = (p: number): CSSProperties => ({ width: `${Math.min(100, p)}%` });
const plural = (n: number, um: string, varios: string) => `${n} ${n === 1 ? um : varios}`;
/** 1.234 */
const milhar = (n: number) => n.toLocaleString("pt-BR");
const nomeAula = (n: string, nome: string) => (n ? `Aula ${n} · ${nome}` : nome);
const emLista = (itens: string[]) =>
  itens.length < 2 ? itens.join("") : `${itens.slice(0, -1).join(", ")} e ${itens[itens.length - 1]}`;
/** Matéria sem tempo, sem bloco e sem questão na semana. */
const parada = (l: LinhaMateria) => l.ms === 0 && l.blocos === 0 && l.questoes === 0;

interface Sugestao {
  chave: string;
  texto: string;
  acao?: { rotulo: string; fazer: () => void };
}

export default function SemanaPrf({ tentativas, inicio, onInicio, onTreinar, onAbrirAula }: SemanaPrfProps) {
  const estudo = useEstudo();
  const agora = useAgora(estudo.ativo !== null && estudo.ativo.desde !== null);
  const [notas, setNotas] = useState(lerNotas);

  const atual = inicioSemana(agora);
  const semana = inicio !== null && inicio < atual ? inicio : atual;
  const eAtual = semana === atual;
  const anterior = maisDias(semana, -7);
  const proxima = maisDias(semana, 7);
  const hoje = new Date(agora).setHours(0, 0, 0, 0);
  const r = resumoSemana(estudo, tentativas, semana, agora);
  const antes = resumoSemana(estudo, tentativas, anterior, agora);
  const primeira = primeiraSemana(estudo, tentativas);
  // Totalizador: tudo somado, de todas as semanas.
  const horasTotal = totaisEstudo(estudo, agora).total;
  const diasTotal = diasComEstudo(estudo);
  const qTotal = useMemo(() => totalQuestoesPrf(tentativas), [tentativas]);

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
  const estudadas = r.materias.filter((l) => !parada(l)).length;
  const semNada = r.ms === 0 && r.blocos === 0 && r.questoes === 0;
  const dificuldades = r.dificuldades.slice(0, MAX_DIFICULDADES);

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
  // As matérias mais fracas da semana, as de maior peso na prova primeiro.
  const fracas = r.materias
    .filter((l) => l.questoes >= 5 && l.acertos / l.questoes < ACERTO_BOM)
    .map((l) => ({ l, peso: PRF_MATERIA_MAP[l.materia].peso }))
    .sort((a, b) => b.peso * (1 - b.l.acertos / b.l.questoes) - a.peso * (1 - a.l.acertos / a.l.questoes))
    .slice(0, 2);
  for (const { l, peso } of fracas) {
    sugestoes.push({
      chave: `reforco-${l.materia}`,
      texto: `Reforçar ${PRF_MATERIA_MAP[l.materia].nome}: ${pct(l.acertos, l.questoes)}% de acerto em ${
        l.questoes
      } questões (peso ${peso.toLocaleString("pt-BR")}).`,
      acao: { rotulo: "Treinar", fazer: () => onTreinar({ ...FILTROS_PRF_PADRAO, materias: [l.materia] }) },
    });
  }
  const paradas = r.materias.filter(parada);
  if (paradas.length > 0 && paradas.length < r.materias.length) {
    const quem = emLista(paradas.map((l) => NOME_CURTO[l.materia]));
    sugestoes.push({
      chave: "paradas",
      texto: eAtual
        ? `Ainda sem estudo nesta semana: ${quem}.`
        : `${paradas.length === 1 ? "Ficou" : "Ficaram"} sem estudo: ${quem}. Vale pôr no plano.`,
    });
  }
  const seguir = eAtual ? aulaParaRetomar(estudo, new Set(estudo.vistos)) : null;
  if (seguir) {
    sugestoes.push({
      chave: "aula",
      texto: `Seguir nas aulas: ${seguir.grupo.nome} · ${nomeAula(seguir.aula.n, seguir.aula.nome)}.`,
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
            ? "Nada registrado nesta semana ainda. Ligue o cronômetro nas aulas e resolva questões: tudo aparece aqui."
            : "Nada registrado nesta semana."}
        </p>
      )}

      <div className="prf-acomp-numeros">
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
            {plural(r.aulas.length, "aula concluída", "aulas concluídas")} · {estudadas} de {r.materias.length}{" "}
            matérias estudadas
          </p>
          {r.materiasConcluidas.length > 0 && (
            <p className="prf-acomp-detalhe prf-acomp-destaque">
              🏁 {emLista(r.materiasConcluidas.map((g) => g.nome))}{" "}
              {r.materiasConcluidas.length === 1 ? "concluída" : "concluídas"}
            </p>
          )}
        </Numero>
        <Numero
          n={3}
          titulo="Questões resolvidas"
          valor={String(r.questoes)}
          antes={`Semana anterior: ${antes.questoes}`}
        >
          <p className="prf-acomp-detalhe">
            {r.questoes > 0 ? `${r.acertos} certas · ${r.questoes - r.acertos} erradas` : "Treino, fixação e provas"}
          </p>
        </Numero>
        <Numero
          n={4}
          titulo="% de acertos"
          valor={r.questoes > 0 ? `${pct(r.acertos, r.questoes)}%` : "—"}
          antes={`Semana anterior: ${antes.questoes > 0 ? `${pct(antes.acertos, antes.questoes)}%` : "—"}`}
        >
          <p className="prf-acomp-detalhe">
            {r.questoes > 0 ? `${r.acertos} de ${r.questoes} questões` : "Sem questões nesta semana"}
          </p>
        </Numero>
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
            />
          </section>

          <section className="prf-acomp-bloco" aria-label="Por matéria">
            <h3 className="prf-acomp-bloco-titulo">Por matéria</h3>
            <table className="prf-acomp-tabela">
              <thead>
                <tr>
                  <th scope="col">Matéria</th>
                  <th scope="col">Horas</th>
                  <th scope="col">Blocos</th>
                  <th scope="col">Questões</th>
                  <th scope="col">Acerto</th>
                </tr>
              </thead>
              <tbody>
                {r.materias.map((l) => (
                  <tr key={l.materia} className={parada(l) ? "prf-acomp-parada" : undefined}>
                    <th scope="row">
                      <span
                        className="prf-acomp-cor"
                        style={{ background: PRF_MATERIA_MAP[l.materia].cor }}
                        aria-hidden="true"
                      />
                      {NOME_CURTO[l.materia]}
                    </th>
                    <td>{l.ms > 0 ? curto(l.ms) : "—"}</td>
                    <td>{l.blocos > 0 ? l.blocos : "—"}</td>
                    <td>{l.questoes > 0 ? l.questoes : "—"}</td>
                    <td>{l.questoes > 0 ? `${pct(l.acertos, l.questoes)}%` : "—"}</td>
                  </tr>
                ))}
                {r.livreMs > 0 && (
                  <tr>
                    <th scope="row">
                      <span className="prf-acomp-cor prf-acomp-cor-livre" aria-hidden="true" />
                      Estudo livre
                    </th>
                    <td>{curto(r.livreMs)}</td>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                  </tr>
                )}
              </tbody>
            </table>
            {r.aulas.length > 0 && (
              <details className="prf-acomp-aulas">
                <summary>{plural(r.aulas.length, "aula concluída", "aulas concluídas")} nesta semana</summary>
                <ul>
                  {r.aulas.map(({ grupo, aula }) => (
                    <li key={aula.id}>
                      {grupo.nome} · {nomeAula(aula.n, aula.nome)}
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
                5
              </span>
              Principais dificuldades
            </h3>
            {r.questoes === 0 ? (
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
                      <span className="prf-acomp-dific-materia">{NOME_CURTO[d.materia]}</span>
                      <span className="prf-acomp-dific-topico">{d.topico}</span>
                      <span className="prf-acomp-dific-conta">
                        {plural(d.erros, "erro", "erros")} em {d.total} · {pct(d.total - d.erros, d.total)}% de acerto
                      </span>
                    </div>
                    <button
                      type="button"
                      className="botao"
                      onClick={() => onTreinar({ ...FILTROS_PRF_PADRAO, materias: [d.materia], topicos: [d.topico] })}
                    >
                      Treinar
                    </button>
                  </li>
                ))}
              </ol>
            )}
            <label className="prf-acomp-nota">
              <span>Suas anotações</span>
              <textarea
                rows={3}
                value={minhas.dificuldades ?? ""}
                onChange={(ev) => anota({ dificuldades: ev.target.value })}
                placeholder={
                  "O que travou? Ex.: confundi crase com regência; a aula 3 de Constitucional ficou pela metade."
                }
              />
            </label>
          </section>

          <section className="prf-acomp-bloco" aria-label="Ajustes para a próxima semana">
            <h3 className="prf-acomp-bloco-titulo">
              <span className="prf-acomp-n" aria-hidden="true">
                6
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
              <p className="prf-acomp-vazio">As sugestões aparecem quando houver estudo ou questões na semana.</p>
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
                placeholder="Ex.: Informática na terça e na quinta; 20 questões de Português por dia."
              />
            </label>
            <p className="prf-acomp-salvo">As anotações e a meta ficam salvas neste aparelho.</p>
          </section>
        </div>
      </div>

      <section className="prf-acomp-bloco prf-acomp-total" aria-label="Totalizador">
        <h3 className="prf-acomp-bloco-titulo">Totalizador</h3>
        <p className="prf-acomp-sub">Tudo somado, de todas as semanas.</p>
        <dl className="prf-acomp-total-numeros">
          <div>
            <dt>Horas líquidas</dt>
            <dd className="prf-acomp-valor">{curto(horasTotal)}</dd>
            <dd className="prf-acomp-detalhe">
              {diasTotal > 0 ? `em ${plural(diasTotal, "dia", "dias")} de estudo` : "Sem estudo cronometrado"}
            </dd>
          </div>
          <div>
            <dt>Questões resolvidas</dt>
            <dd className="prf-acomp-valor">{milhar(qTotal.respondidas)}</dd>
            <dd className="prf-acomp-detalhe">
              {qTotal.respondidas > 0
                ? `${milhar(qTotal.acertos)} certas · ${milhar(qTotal.respondidas - qTotal.acertos)} erradas`
                : "Nenhuma ainda"}
            </dd>
          </div>
          <div>
            <dt>% de acertos</dt>
            <dd className="prf-acomp-valor">
              {qTotal.respondidas > 0 ? `${pct(qTotal.acertos, qTotal.respondidas)}%` : "—"}
            </dd>
            <dd className="prf-acomp-detalhe">
              {qTotal.respondidas > 0 ? "Somando todas as questões" : "Aparece com a primeira questão"}
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
}

/** Seta das semanas: desenhada, porque o ‹ › da fonte condensada fica miúdo. */
function Seta({ caminho }: { caminho: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path d={caminho} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface NumeroProps {
  n: number;
  titulo: string;
  valor: string;
  antes: string;
  children?: ReactNode;
}

function Numero({ n, titulo, valor, antes, children }: NumeroProps) {
  return (
    <section className="prf-acomp-num" aria-label={titulo}>
      <h3 className="prf-acomp-num-titulo">
        <span className="prf-acomp-n" aria-hidden="true">
          {n}
        </span>
        {titulo}
      </h3>
      <p className="prf-acomp-valor">{valor}</p>
      {children}
      <p className="prf-acomp-antes">{antes}</p>
    </section>
  );
}
