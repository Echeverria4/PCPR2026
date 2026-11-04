import { useSyncExternalStore } from "react";
import { porDia, primeiroDiaEstudado, type EstadoEstudo } from "./estudo";

/**
 * Meta diária de estudo na PRF: 1h de segunda a sexta e 2h no sábado e no domingo, valendo desde 31/10/26.
 * Quem passa da meta do dia em pelo menos 10% recebe uma proposta de aumento (de 10% a 50%) para aquele tipo
 * de dia; aceita, a meta nova vale a partir do dia seguinte. Uma proposta por dia, respondida ou não. Fica só
 * neste aparelho, numa chave própria (o tempo vem do cronômetro, em prf:estudo:v1).
 */
const CHAVE_PRF = "prf:meta:v1";
const MINUTO = 60 * 1000;
/** Proposta só a partir de 10% além da meta (o menor aumento oferecido): tempo × 10 ≥ meta × 11. */
const PASSOU_PARA_PROPOSTA = 11;
/** Proposta de um dia passado fica valendo por uma semana. */
const DIAS_DA_PROPOSTA = 7;

/** A meta começou a valer em 31/10/26 (sábado). */
export const COMECO_META = new Date(2026, 9, 31).getTime();

export type TipoDia = "semana" | "fimDeSemana";
export const META_INICIAL: Record<TipoDia, number> = { semana: 60, fimDeSemana: 120 };
export const NOME_TIPO: Record<TipoDia, string> = { semana: "Seg a sex", fimDeSemana: "Sáb e dom" };
export const TIPO_POR_EXTENSO: Record<TipoDia, string> = {
  semana: "segunda a sexta",
  fimDeSemana: "sábado e domingo",
};
export const AUMENTOS = [10, 20, 30, 40, 50] as const;

export interface RespostaProposta {
  /** Meia-noite do dia em que a meta foi passada. */
  dia: number;
  /** Quando respondeu. */
  em: number;
  tipo: TipoDia;
  /** Aumento aceito, em %; 0 = recusou. */
  aumento: number;
  /** Meta do tipo de dia antes e depois da resposta, em minutos (iguais quando recusou). */
  antes: number;
  minutos: number;
  /** Meia-noite do primeiro dia em que a meta nova vale. */
  desde: number;
}

export interface EstadoMeta {
  respostas: RespostaProposta[];
}

const VAZIO: EstadoMeta = { respostas: [] };

/** Curso aberto: cada curso tem a própria meta. Nos cursos novos ela começa no primeiro dia de estudo. */
let chave = CHAVE_PRF;
let comecoFixo: number | null = COMECO_META;

function ler(): EstadoMeta {
  try {
    const raw = localStorage.getItem(chave);
    if (!raw) return VAZIO;
    const p = JSON.parse(raw) as Partial<EstadoMeta>;
    return { respostas: Array.isArray(p.respostas) ? p.respostas : [] };
  } catch {
    return VAZIO;
  }
}

let estado = ler();
const ouvintes = new Set<() => void>();

function salvar(novo: EstadoMeta) {
  estado = novo;
  try {
    localStorage.setItem(chave, JSON.stringify(novo));
  } catch {
    // localStorage indisponível: a resposta vale nesta aba, só não fica salva
  }
  ouvintes.forEach((f) => f());
}

// Outra aba do navegador respondeu a proposta: esta acompanha.
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key !== chave) return;
    estado = ler();
    ouvintes.forEach((f) => f());
  });
}

function assinar(f: () => void) {
  ouvintes.add(f);
  return () => {
    ouvintes.delete(f);
  };
}

/** Passa a mostrar a meta de outro curso. `comeco` null = a meta vale desde o primeiro dia de estudo. */
export function trocarMeta(novaChave: string, comeco: number | null) {
  if (novaChave === chave) return;
  chave = novaChave;
  comecoFixo = comeco;
  estado = ler();
  ouvintes.forEach((f) => f());
}

export function useMeta(): EstadoMeta {
  return useSyncExternalStore(assinar, () => estado);
}

const meiaNoite = (ms: number) => new Date(ms).setHours(0, 0, 0, 0);

/** Dia em que a meta do curso aberto começou a valer. */
const comeco = () => comecoFixo ?? primeiroDiaEstudado() ?? meiaNoite(Date.now());

function maisUmDia(dia: number): number {
  const d = new Date(dia);
  d.setDate(d.getDate() + 1);
  return d.setHours(0, 0, 0, 0);
}

/** Meia-noite de amanhã. */
export const amanha = (agora: number) => maisUmDia(meiaNoite(agora));

export function tipoDoDia(dia: number): TipoDia {
  const d = new Date(dia).getDay();
  return d === 0 || d === 6 ? "fimDeSemana" : "semana";
}

/** Primeiro dia do tipo dado a partir de `desde` (meia-noite). */
export function primeiroDiaDoTipo(tipo: TipoDia, desde: number): number {
  let d = meiaNoite(desde);
  while (tipoDoDia(d) !== tipo) d = maisUmDia(d);
  return d;
}

/** Meta (minutos) do tipo de dia que vale no dia dado (meia-noite). */
export function metaDoTipo(m: EstadoMeta, tipo: TipoDia, dia: number): number {
  let minutos = META_INICIAL[tipo];
  for (const r of m.respostas) if (r.aumento > 0 && r.tipo === tipo && r.desde <= dia) minutos = r.minutos;
  return minutos;
}

/** Meta do dia em ms; 0 antes de a meta começar a valer. */
export function metaDoDia(m: EstadoMeta, dia: number): number {
  return dia < comeco() ? 0 : metaDoTipo(m, tipoDoDia(dia), dia) * MINUTO;
}

/** Meta nova em minutos depois de um aumento de `aumento`%. */
export const comAumento = (minutos: number, aumento: number) => Math.round((minutos * (100 + aumento)) / 100);

/** O último aumento aceito para o tipo de dia. */
export function ultimoAumento(m: EstadoMeta, tipo: TipoDia): RespostaProposta | undefined {
  for (let i = m.respostas.length - 1; i >= 0; i--) {
    const r = m.respostas[i];
    if (r.aumento > 0 && r.tipo === tipo) return r;
  }
  return undefined;
}

/** Dias desde o começo da meta até hoje, com o tempo de cada um. */
function diasDaMeta(e: EstadoEstudo, agora: number) {
  const hoje = meiaNoite(agora);
  const inicio = comeco();
  if (hoje < inicio) return [];
  let n = 1;
  for (let d = inicio; d < hoje; d = maisUmDia(d)) n++;
  return porDia(e, agora, n);
}

export interface MetaHoje {
  dia: number;
  tipo: TipoDia;
  /** Meta de hoje e tempo de hoje, em ms. */
  meta: number;
  ms: number;
  batida: boolean;
}

export function metaDeHoje(e: EstadoEstudo, m: EstadoMeta, agora: number): MetaHoje {
  const dia = meiaNoite(agora);
  const ms = porDia(e, agora, 1)[0].ms;
  const meta = metaDoDia(m, dia);
  return { dia, tipo: tipoDoDia(dia), meta, ms, batida: meta > 0 && ms >= meta };
}

export interface Aproveitamento {
  /** Dias com a meta batida e dias contados (os que já acabaram, mais hoje se a meta de hoje já foi batida). */
  batidos: number;
  dias: number;
}

export function aproveitamento(e: EstadoEstudo, m: EstadoMeta, agora: number): Aproveitamento {
  const hoje = meiaNoite(agora);
  let batidos = 0;
  let dias = 0;
  for (const d of diasDaMeta(e, agora)) {
    const batida = d.ms >= metaDoDia(m, d.dia);
    if (d.dia < hoje) dias++;
    else if (batida) dias++;
    if (batida) batidos++;
  }
  return { batidos, dias };
}

export interface Proposta {
  /** Meia-noite do dia em que a meta foi passada. */
  dia: number;
  hoje: boolean;
  tipo: TipoDia;
  /** Tempo estudado e meta desse dia, em ms. */
  ms: number;
  meta: number;
  /** Meta que vale para esse tipo de dia a partir de amanhã (é ela que aumenta), em minutos. */
  base: number;
  /** Aumento sugerido, em %: o quanto passou da meta, em degraus de 10%, de 10% a 50%. */
  sugerido: number;
}

/**
 * Proposta de aumento: o dia mais recente (até uma semana atrás) em que a meta foi passada em 10% ou mais,
 * depois do último dia já respondido.
 */
export function propostaDeAumento(e: EstadoEstudo, m: EstadoMeta, agora: number): Proposta | null {
  const hoje = meiaNoite(agora);
  const respondido = m.respostas.reduce((maior, r) => Math.max(maior, r.dia), -Infinity);
  const lista = diasDaMeta(e, agora);
  for (let i = lista.length - 1; i >= 0 && i >= lista.length - DIAS_DA_PROPOSTA; i--) {
    const { dia, ms } = lista[i];
    if (dia <= respondido) break;
    const meta = metaDoDia(m, dia);
    if (meta === 0 || ms * 10 < meta * PASSOU_PARA_PROPOSTA) continue;
    const tipo = tipoDoDia(dia);
    const passou = Math.floor(((ms - meta) * 10) / meta) * 10;
    return {
      dia,
      hoje: dia === hoje,
      tipo,
      ms,
      meta,
      base: metaDoTipo(m, tipo, amanha(agora)),
      sugerido: Math.min(50, Math.max(10, passou)),
    };
  }
  return null;
}

/** Aceita o aumento: a meta nova desse tipo de dia vale a partir de amanhã. */
export function aceitarAumento(p: Proposta, aumento: number) {
  const agora = Date.now();
  const resposta: RespostaProposta = {
    dia: p.dia,
    em: agora,
    tipo: p.tipo,
    aumento,
    antes: p.base,
    minutos: comAumento(p.base, aumento),
    desde: amanha(agora),
  };
  salvar({ respostas: [...estado.respostas, resposta] });
}

/** "Agora não": a meta continua a mesma e a proposta desse dia não volta. */
export function recusarAumento(p: Proposta) {
  const agora = Date.now();
  const resposta: RespostaProposta = {
    dia: p.dia,
    em: agora,
    tipo: p.tipo,
    aumento: 0,
    antes: p.base,
    minutos: p.base,
    desde: amanha(agora),
  };
  salvar({ respostas: [...estado.respostas, resposta] });
}
