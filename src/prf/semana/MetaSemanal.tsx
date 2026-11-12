import { useState } from "react";
import { curto, diaMes } from "../aulas/estudo";
import { NOME_TIPO, amanha, definirMeta, metaDoTipo, type EstadoMeta, type TipoDia } from "../aulas/meta";

const MINUTO = 60 * 1000;
const TIPOS: TipoDia[] = ["semana", "fimDeSemana"];
/** Quantos dias de cada tipo a semana tem. */
const DIAS_DO_TIPO: Record<TipoDia, number> = { semana: 5, fimDeSemana: 2 };
const OPCOES = [15, 30, 45, 60, 75, 90, 105, 120, 150, 180, 210, 240, 300, 360, 420, 480];
const NOME_DIA = ["seg", "ter", "qua", "qui", "sex", "sáb", "dom"];

const pct = (parte: number, todo: number) => (todo > 0 ? Math.min(100, Math.floor((parte / todo) * 100)) : 0);
const emMinutos = (min: number) => curto(min * MINUTO);

interface MetaSemanalProps {
  meta: EstadoMeta;
  /** Os 7 dias da semana aberta (de segunda a domingo), com o tempo de cada um. */
  dias: { dia: number; ms: number }[];
  /** Meta de cada um desses dias, em ms (0 = a meta ainda não valia). */
  metas: number[];
  /** Meta da semana inteira, em ms. */
  total: number;
  /** Tempo líquido da semana, em ms. */
  ms: number;
  agora: number;
  /** Só a semana atual deixa mudar a meta. */
  editavel: boolean;
}

/** Meta da semana: o quanto falta, o ritmo até domingo, os dias batidos e a escolha da meta de cada tipo de dia. */
export default function MetaSemanal({ meta, dias, metas, total, ms, agora, editavel }: MetaSemanalProps) {
  const [editando, setEditando] = useState(false);
  if (total === 0 && !editavel) return null;

  const hoje = new Date(agora).setHours(0, 0, 0, 0);
  const depois = amanha(agora);
  const porTipo = (t: TipoDia) => metaDoTipo(meta, t, depois);
  const semanaCheia = TIPOS.reduce((soma, t) => soma + porTipo(t) * DIAS_DO_TIPO[t], 0);
  const falta = total - ms;
  const p = pct(ms, total);
  const restantes = dias.filter((d) => d.dia >= hoje).length;
  const temDiaria = metas.some((m) => m > 0);
  const contados = dias.filter((d, i) => metas[i] > 0 && (d.dia < hoje || (d.dia === hoje && d.ms >= metas[i])));
  const batidos = contados.filter((d) => d.ms >= metas[dias.indexOf(d)]).length;

  let ritmo: string;
  if (total === 0) ritmo = "Escolha a meta de cada tipo de dia.";
  else if (falta <= 0) ritmo = `✓ Meta da semana batida${-falta >= MINUTO ? `, com ${curto(-falta)} a mais` : ""}.`;
  else if (!editavel) ritmo = `Faltaram ${curto(falta)} para a meta da semana.`;
  else
    ritmo = `Faltam ${curto(falta)} em ${restantes} ${restantes === 1 ? "dia" : "dias"}, contando hoje: cerca de ${curto(
      Math.ceil(falta / restantes / MINUTO) * MINUTO,
    )} por dia.`;

  return (
    <section className={`prf-acomp-bloco prf-msem${falta <= 0 && total > 0 ? " prf-msem-batida" : ""}`} aria-label="Meta da semana">
      <div className="prf-msem-topo">
        <h3 className="prf-acomp-bloco-titulo">
          <span aria-hidden="true">🎯</span> Meta da semana
        </h3>
        {editavel && (
          <button
            type="button"
            className="botao prf-msem-mudar"
            aria-expanded={editando}
            onClick={() => setEditando((v) => !v)}
          >
            {editando ? "Pronto" : "Mudar meta"}
          </button>
        )}
      </div>

      {editavel && editando ? (
        <div className="prf-msem-editor">
          {TIPOS.map((t) => {
            const atual = porTipo(t);
            const opcoes = OPCOES.includes(atual) ? OPCOES : [...OPCOES, atual].sort((a, b) => a - b);
            return (
              <label key={t} className="prf-msem-campo">
                <span className="prf-msem-tipo">{NOME_TIPO[t]}</span>
                <select value={atual} onChange={(e) => definirMeta(t, Number(e.target.value))}>
                  {opcoes.map((m) => (
                    <option key={m} value={m}>
                      {emMinutos(m)}
                    </option>
                  ))}
                </select>
                <span className="prf-msem-por">por dia</span>
              </label>
            );
          })}
          <p className="prf-msem-nota">
            = <b>{emMinutos(semanaCheia)}</b> por semana. Vale a partir de hoje: os dias que já passaram ficam com a
            meta antiga. Quem passa da meta ainda recebe a proposta de aumento na aba Aulas.
          </p>
        </div>
      ) : (
        <p className="prf-msem-tipos">
          {TIPOS.map((t) => (
            <span key={t}>
              {NOME_TIPO[t]} <b>{emMinutos(porTipo(t))}</b> por dia
            </span>
          ))}
          <span>
            Semana <b>{emMinutos(semanaCheia)}</b>
          </span>
        </p>
      )}

      {total > 0 && (
        <>
          <div className="prf-msem-valor">
            <b>{curto(ms)}</b> de {curto(total)}
            <span>{p}%</span>
          </div>
          <div
            className="prf-acomp-barra prf-msem-barra"
            role="progressbar"
            aria-label="Meta da semana"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={p}
            aria-valuetext={`${curto(ms)} de ${curto(total)}`}
          >
            <span style={{ width: `${p}%` }} />
          </div>
        </>
      )}
      <p className="prf-msem-ritmo">{ritmo}</p>

      {temDiaria && (
        <>
          <ol className="prf-msem-dias" aria-label="Meta de cada dia">
            {dias.map((d, i) => {
              const m = metas[i];
              const batida = m > 0 && d.ms >= m;
              const estado =
                d.dia > hoje ? "futuro" : batida ? "batida" : d.dia === hoje ? "hoje" : d.ms > 0 ? "abaixo" : "vazio";
              const simbolo = { futuro: emMinutos(m / MINUTO), batida: "✓", hoje: d.ms > 0 ? curto(d.ms) : "hoje", abaixo: curto(d.ms), vazio: "–" }[
                estado
              ];
              const texto =
                m === 0
                  ? "sem meta"
                  : d.dia > hoje
                    ? `meta de ${curto(m)}`
                    : `${curto(d.ms)} de ${curto(m)}${batida ? ", meta batida" : ""}`;
              return (
                <li
                  key={d.dia}
                  className={`prf-msem-dia prf-msem-d-${estado}${d.dia === hoje ? " prf-msem-dia-hoje" : ""}`}
                  title={`${NOME_DIA[i]}, ${diaMes(d.dia)}: ${texto}`}
                  aria-label={`${NOME_DIA[i]}, ${diaMes(d.dia)}: ${texto}`}
                >
                  <span className="prf-msem-dia-nome">{NOME_DIA[i]}</span>
                  <span className="prf-msem-dia-marca">{simbolo}</span>
                </li>
              );
            })}
          </ol>
          {contados.length > 0 && (
            <p className="prf-acomp-detalhe">
              {batidos} de {contados.length} {contados.length === 1 ? "dia" : "dias"} com a meta batida
            </p>
          )}
        </>
      )}
    </section>
  );
}
