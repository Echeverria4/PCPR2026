import { useState } from "react";
import { curto, diaCurto, diaLongo, diaMes, type EstadoEstudo } from "./estudo";
import {
  AUMENTOS,
  NOME_TIPO,
  TIPO_POR_EXTENSO,
  aceitarAumento,
  amanha,
  aproveitamento,
  comAumento,
  metaDeHoje,
  metaDoTipo,
  primeiroDiaDoTipo,
  propostaDeAumento,
  recusarAumento,
  ultimoAumento,
  type EstadoMeta,
  type Proposta,
  type TipoDia,
} from "./meta";

const MINUTO = 60 * 1000;
const TIPOS: TipoDia[] = ["semana", "fimDeSemana"];
const emMinutos = (min: number) => curto(min * MINUTO);
const pct = (parte: number, todo: number) => (todo > 0 ? Math.min(100, Math.floor((parte / todo) * 100)) : 0);
const plural = (n: number, um: string, varios: string) => `${n} ${n === 1 ? um : varios}`;

/** "amanhã" ou "seg, 02/11". */
function quandoVale(dia: number, agora: number): string {
  return dia === amanha(agora) ? "amanhã" : `${diaCurto(dia)}, ${diaMes(dia)}`;
}

interface MetaProps {
  estudo: EstadoEstudo;
  meta: EstadoMeta;
  agora: number;
}

/** Meta de hoje no painel do cronômetro: barra do dia, proposta de aumento, aproveitamento e a meta de cada tipo de dia. */
export function MetaDoDia({ estudo, meta, agora }: MetaProps) {
  const h = metaDeHoje(estudo, meta, agora);
  // Relógio do aparelho antes de 31/10/26: a meta ainda não vale.
  if (h.meta === 0) return null;
  const ap = aproveitamento(estudo, meta, agora);
  const proposta = propostaDeAumento(estudo, meta, agora);
  const p = pct(h.ms, h.meta);
  const depois = amanha(agora);
  // Aumento aceito hoje: a meta nova ainda vai começar.
  const novas = TIPOS.map((t) => ultimoAumento(meta, t)).filter((u) => u !== undefined && u.desde > h.dia);

  return (
    <section className={`prf-meta${h.batida ? " prf-meta-batida" : ""}`} aria-label="Meta de hoje">
      <div className="prf-meta-cabeca">
        <span className="prf-meta-titulo">Meta de hoje</span>
        <span className="prf-meta-valor">
          <b>{curto(h.ms)}</b> de {curto(h.meta)}
        </span>
      </div>
      <div
        className="prf-meta-barra"
        role="progressbar"
        aria-label="Meta de hoje"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={p}
        aria-valuetext={`${curto(h.ms)} de ${curto(h.meta)}`}
      >
        <span style={{ width: `${p}%` }} />
      </div>
      <p className="prf-meta-status">
        {h.batida
          ? `✓ Meta de hoje batida${h.ms - h.meta >= MINUTO ? ` · ${curto(h.ms - h.meta)} além da meta` : ""}`
          : `Faltam ${curto(h.meta - h.ms)} para bater a meta de hoje.`}
      </p>

      {proposta && <PropostaAumento key={proposta.dia} p={proposta} agora={agora} />}

      {novas.map(
        (u) =>
          u && (
            <p key={u.tipo} className="prf-meta-nova">
              <b>Meta atualizada:</b> {TIPO_POR_EXTENSO[u.tipo]} passa de {emMinutos(u.antes)} para{" "}
              <b>{emMinutos(u.minutos)}</b> (+{u.aumento}%) a partir de {quandoVale(primeiroDiaDoTipo(u.tipo, u.desde), agora)}.
            </p>
          ),
      )}

      <dl className="prf-meta-dados">
        <div className="prf-meta-aprov">
          <dt>Aproveitamento</dt>
          <dd className="prf-meta-numero">{ap.dias > 0 ? `${pct(ap.batidos, ap.dias)}%` : "—"}</dd>
          <dd className="prf-meta-sub">
            {ap.dias > 0
              ? `${ap.batidos} de ${plural(ap.dias, "dia", "dias")} com a meta batida`
              : "Conta a partir de hoje, ao bater a meta"}
          </dd>
        </div>
        {TIPOS.map((t) => {
          const u = ultimoAumento(meta, t);
          return (
            <div key={t}>
              <dt>{NOME_TIPO[t]}</dt>
              <dd className="prf-meta-numero">{emMinutos(metaDoTipo(meta, t, depois))}</dd>
              <dd className="prf-meta-sub">
                {u ? (
                  <span className="prf-meta-selo">
                    atualizada em {diaMes(u.em)} · +{u.aumento}%
                  </span>
                ) : (
                  "meta inicial"
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}

/** Passou da meta em 10% ou mais: propõe aumentar a meta daquele tipo de dia, de 10% a 50%. */
function PropostaAumento({ p, agora }: { p: Proposta; agora: number }) {
  const [escolha, setEscolha] = useState(p.sugerido);
  const nova = comAumento(p.base, escolha);
  const vale = quandoVale(primeiroDiaDoTipo(p.tipo, amanha(agora)), agora);
  return (
    <div className="prf-meta-proposta" role="group" aria-label="Proposta de aumento da meta">
      <p className="prf-meta-proposta-titulo">
        <span aria-hidden="true">🎯</span> Proposta: aumentar a meta
      </p>
      <p className="prf-meta-proposta-texto">
        {p.hoje ? "Hoje você estudou" : `${diaLongo(p.dia)}: você estudou`} <b>{curto(p.ms)}</b>,{" "}
        {curto(p.ms - p.meta)} além da meta de {curto(p.meta)}. Para focar cada vez mais, aumente a meta de{" "}
        {TIPO_POR_EXTENSO[p.tipo]}:
      </p>
      <div className="prf-meta-opcoes" aria-label="Quanto aumentar">
        {AUMENTOS.map((a) => (
          <button
            key={a}
            type="button"
            className={`prf-meta-opcao${escolha === a ? " prf-meta-opcao-ativa" : ""}`}
            aria-pressed={escolha === a}
            onClick={() => setEscolha(a)}
          >
            <b>+{a}%</b>
            <span>{emMinutos(comAumento(p.base, a))}</span>
            {a === p.sugerido && <i>sugerido</i>}
          </button>
        ))}
      </div>
      <div className="prf-meta-acoes">
        <button type="button" className="botao botao-ouro" onClick={() => aceitarAumento(p, escolha)}>
          Aceitar +{escolha}% ({emMinutos(nova)})
        </button>
        <button type="button" className="botao" onClick={() => recusarAumento(p)}>
          Agora não
        </button>
      </div>
      <p className="prf-meta-proposta-nota">
        Hoje a meta está em {emMinutos(p.base)} para {TIPO_POR_EXTENSO[p.tipo]}; a nova vale a partir de {vale}.
      </p>
    </div>
  );
}

/** Linha curta da meta de hoje no cronômetro da aula. */
export function MetaMini({ estudo, meta, agora }: MetaProps) {
  const h = metaDeHoje(estudo, meta, agora);
  if (h.meta === 0) return null;
  return (
    <div className={`prf-meta-mini${h.batida ? " prf-meta-batida" : ""}`}>
      <span className="prf-meta-mini-texto">
        {h.batida ? "✓ Meta de hoje batida" : "Meta de hoje"} · <b>{curto(h.ms)}</b> de {curto(h.meta)}
      </span>
      <span className="prf-meta-barra" aria-hidden="true">
        <span style={{ width: `${pct(h.ms, h.meta)}%` }} />
      </span>
    </div>
  );
}
