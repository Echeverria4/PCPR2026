import { useMemo, useState } from "react";
import type { AbrirCurso } from "./Central";
import { Barras } from "./comum";
import {
  CURSOS_ESTUDO,
  INFO_CURSO,
  chaveDia,
  duracao,
  lerEstudo,
  lerQuestoes,
  maisDias,
  metaDoDia,
  montarPainel,
  pct,
  porMateria,
  segundaDe,
  somaPeriodo,
  type CursoEstudo,
} from "./dados";

const DIAS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
const SEMANAS_HISTORICO = 8;

const dataCurta = (ms: number) => new Date(ms).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });

export default function Tempo({ onAbrir }: { onAbrir: AbrirCurso }) {
  const [agora] = useState(() => Date.now());
  const [semanasAtras, setSemanasAtras] = useState(0);

  const base = useMemo(() => {
    const painel = montarPainel(agora);
    const estudos = CURSOS_ESTUDO.map((c) => lerEstudo(c, agora));
    const questoes = CURSOS_ESTUDO.flatMap((c) => lerQuestoes(c) ?? []);
    return { painel, estudos, questoes, trechos: estudos.flatMap((e) => e.trechos) };
  }, [agora]);

  const segundaAtual = segundaDe(agora);
  const de = maisDias(segundaAtual, -7 * semanasAtras);
  const ate = maisDias(de, 7);
  const hoje = base.painel.hoje;
  const principal = base.painel.principal ?? INFO_CURSO["prf-policial"];

  const semana = useMemo(() => {
    const dias = DIAS.map((rotulo, i) => {
      const inicio = maisDias(de, i);
      const fim = maisDias(de, i + 1);
      return {
        rotulo,
        inicio,
        ms: somaPeriodo(base.trechos, inicio, fim),
        meta: metaDoDia(principal, inicio) * 60_000,
        futuro: inicio > hoje,
        hoje: inicio === hoje,
      };
    });
    const total = dias.reduce((s, d) => s + d.ms, 0);
    const metaSemana = dias.reduce((s, d) => s + d.meta, 0);
    const chaves = new Set(dias.map((d) => chaveDia(d.inicio)));
    let qn = 0;
    let qa = 0;
    for (const q of base.questoes) {
      for (const [dia, [n, a]] of Object.entries(q.porDia)) {
        if (chaves.has(dia)) {
          qn += n;
          qa += a;
        }
      }
    }
    const cursos = base.estudos
      .map((e) => ({ id: e.info.id, curto: e.info.curto, ms: somaPeriodo(e.trechos, de, ate) }))
      .filter((c) => c.ms > 0)
      .sort((a, b) => b.ms - a.ms);
    return {
      dias,
      total,
      metaSemana,
      diasComEstudo: dias.filter((d) => d.ms >= 60_000).length,
      qn,
      qa,
      materias: porMateria(base.trechos, de, ate),
      cursos,
      anterior: somaPeriodo(base.trechos, maisDias(de, -7), de),
    };
  }, [base, de, ate, hoje, principal]);

  const historico = useMemo(
    () =>
      Array.from({ length: SEMANAS_HISTORICO }, (_, i) => {
        const atras = SEMANAS_HISTORICO - 1 - i;
        const s = maisDias(segundaAtual, -7 * atras);
        return { atras, inicio: s, ms: somaPeriodo(base.trechos, s, maisDias(s, 7)) };
      }),
    [base, segundaAtual],
  );

  const maxDia = Math.max(...semana.dias.map((d) => Math.max(d.ms, d.meta)), 60_000);
  const maxSemana = Math.max(...historico.map((h) => h.ms), 60_000);
  const variosCursos = semana.cursos.length > 1;
  const acerto = pct(semana.qa, semana.qn);
  const diferenca = semana.total - semana.anterior;

  return (
    <div className="cx-tempo">
      <div className="cx-semana-nav">
        <button
          type="button"
          className="botao cx-botao-peq"
          onClick={() => setSemanasAtras((s) => s + 1)}
          aria-label="Semana anterior"
        >
          ◀
        </button>
        <div className="cx-semana-rotulo">
          <strong>
            {semanasAtras === 0 ? "Esta semana" : semanasAtras === 1 ? "Semana passada" : `${semanasAtras} semanas atrás`}
          </strong>
          <span>
            {dataCurta(de)} a {dataCurta(maisDias(de, 6))}
          </span>
        </div>
        <button
          type="button"
          className="botao cx-botao-peq"
          onClick={() => setSemanasAtras((s) => Math.max(0, s - 1))}
          disabled={semanasAtras === 0}
          aria-label="Semana seguinte"
        >
          ▶
        </button>
      </div>

      <section className="cx-kpis" aria-label="Resumo da semana">
        <div className="cx-kpi">
          <div className="cx-kpi-rotulo">Tempo na semana</div>
          <div className="cx-kpi-valor">{duracao(semana.total)}</div>
          <div className="cx-kpi-sub">
            {diferenca === 0
              ? "igual à semana anterior"
              : `${diferenca > 0 ? "+" : "−"}${duracao(Math.abs(diferenca))} que a semana anterior`}
          </div>
        </div>
        <div className="cx-kpi">
          <div className="cx-kpi-rotulo">Meta da semana ({principal.curto})</div>
          <div className="cx-kpi-valor">{duracao(semana.metaSemana)}</div>
          <div
            className="cx-kpi-barra"
            role="progressbar"
            aria-label="Meta da semana"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(Math.min(100, (semana.total / semana.metaSemana) * 100))}
          >
            <span style={{ width: `${Math.min(100, (semana.total / semana.metaSemana) * 100)}%` }} />
          </div>
          <div className="cx-kpi-sub">{Math.round((semana.total / semana.metaSemana) * 100)}% cumprido</div>
        </div>
        <div className="cx-kpi">
          <div className="cx-kpi-rotulo">Dias com estudo</div>
          <div className="cx-kpi-valor">{semana.diasComEstudo} de 7</div>
        </div>
        <div className="cx-kpi">
          <div className="cx-kpi-rotulo">Questões</div>
          <div className="cx-kpi-valor">{semana.qn.toLocaleString("pt-BR")}</div>
          <div className="cx-kpi-sub">{acerto === null ? "nenhuma nesta semana" : `${acerto}% de acerto`}</div>
        </div>
      </section>

      <section className="cx-card">
        <div className="cx-card-topo">
          <h2 className="cx-card-titulo">Tempo por dia</h2>
          <span className="cx-legenda">
            <span className="cx-legenda-meta" aria-hidden="true" /> meta do dia
          </span>
        </div>
        <ol className="cx-dias" aria-label="Tempo de estudo por dia">
          {semana.dias.map((d) => (
            <li
              key={d.rotulo}
              className={`${d.hoje ? "cx-dia-hoje" : ""}${d.futuro ? " cx-dia-futuro" : ""}`}
              title={`${d.rotulo} ${dataCurta(d.inicio)}: ${duracao(d.ms)} · meta ${duracao(d.meta)}`}
            >
              <span className="cx-dia-valor">{d.futuro ? "" : duracao(d.ms)}</span>
              <span className="cx-dia-coluna" aria-hidden="true">
                <span className="cx-dia-meta" style={{ bottom: `${(d.meta / maxDia) * 100}%` }} />
                {d.ms > 0 && <span className="cx-dia-barra" style={{ height: `${(d.ms / maxDia) * 100}%` }} />}
              </span>
              <span className="cx-dia-rotulo">
                {d.rotulo}
                <small>{dataCurta(d.inicio)}</small>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <div className="cx-colunas">
        <section className="cx-card">
          <div className="cx-card-topo">
            <h2 className="cx-card-titulo">Por matéria</h2>
          </div>
          <Barras
            vazio="Nenhuma aula estudada nesta semana."
            linhas={semana.materias.map((m) => ({
              chave: m.chave,
              rotulo: m.materia,
              etiqueta: variosCursos ? INFO_CURSO[m.curso].curto : undefined,
              valor: m.ms,
              texto: duracao(m.ms),
            }))}
          />
        </section>

        <section className="cx-card">
          <div className="cx-card-topo">
            <h2 className="cx-card-titulo">Por curso</h2>
          </div>
          {semana.cursos.length === 0 ? (
            <p className="cx-vazio">Nenhum curso estudado nesta semana.</p>
          ) : (
            <ul className="cx-cursos-tempo">
              {semana.cursos.map((c) => (
                <li key={c.id}>
                  <span>
                    <strong>{c.curto}</strong> · {duracao(c.ms)}
                  </span>
                  <button
                    type="button"
                    className="botao cx-botao-peq"
                    onClick={() => onAbrir(c.id as CursoEstudo, { aba: "semana" })}
                  >
                    Semana do curso →
                  </button>
                </li>
              ))}
            </ul>
          )}
          <p className="cx-card-nota">
            A aba Semana de cada curso guarda as dificuldades, os ajustes e as notas de cada semana.
          </p>
        </section>
      </div>

      <section className="cx-card">
        <div className="cx-card-topo">
          <h2 className="cx-card-titulo">Últimas {SEMANAS_HISTORICO} semanas</h2>
        </div>
        <ol className="cx-dias cx-semanas" aria-label="Tempo de estudo por semana">
          {historico.map((h) => (
            <li key={h.inicio} className={h.atras === semanasAtras ? "cx-dia-hoje" : undefined}>
              <button
                type="button"
                onClick={() => setSemanasAtras(h.atras)}
                title={`Semana de ${dataCurta(h.inicio)}: ${duracao(h.ms)}`}
                aria-label={`Semana de ${dataCurta(h.inicio)}: ${duracao(h.ms)}`}
              >
                <span className="cx-dia-valor">{duracao(h.ms)}</span>
                <span className="cx-dia-coluna" aria-hidden="true">
                  {h.ms > 0 && <span className="cx-dia-barra" style={{ height: `${(h.ms / maxSemana) * 100}%` }} />}
                </span>
                <span className="cx-dia-rotulo">{dataCurta(h.inicio)}</span>
              </button>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
