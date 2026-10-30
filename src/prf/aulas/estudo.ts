import { useEffect, useState, useSyncExternalStore } from "react";

/**
 * Cronômetro de estudo e blocos de aula já vistos na PRF. Ficam só neste aparelho, numa chave
 * própria (não mexe em prf:attempts nem no progresso do Português Inteligente). O cronômetro
 * guarda o horário em que começou, então continua certo depois de recarregar ou fechar a aba.
 */
const CHAVE = "prf:estudo:v1";
const MAX_SESSOES = 3000;
const DIA = 24 * 60 * 60 * 1000;

/** Sobre o que é o tempo contado: uma aula, ou estudo livre (sem aula). */
export interface AlvoEstudo {
  aula?: string;
  grupo?: string;
  rotulo: string;
}

export interface SessaoEstudo extends AlvoEstudo {
  inicio: number;
  fim: number;
  ms: number;
}

export interface CronometroAtivo extends AlvoEstudo {
  inicio: number;
  /** Início do trecho que está correndo agora; null = pausado. */
  desde: number | null;
  /** Tempo dos trechos anteriores (antes das pausas). */
  acumulado: number;
}

export interface EstadoEstudo {
  ativo: CronometroAtivo | null;
  sessoes: SessaoEstudo[];
  /** Ids (do Drive) dos blocos marcados como vistos. */
  vistos: string[];
}

const VAZIO: EstadoEstudo = { ativo: null, sessoes: [], vistos: [] };

function ler(): EstadoEstudo {
  try {
    const raw = localStorage.getItem(CHAVE);
    if (!raw) return VAZIO;
    const p = JSON.parse(raw) as Partial<EstadoEstudo>;
    return {
      ativo: p.ativo ?? null,
      sessoes: Array.isArray(p.sessoes) ? p.sessoes : [],
      vistos: Array.isArray(p.vistos) ? p.vistos : [],
    };
  } catch {
    return VAZIO;
  }
}

let estado = ler();
const ouvintes = new Set<() => void>();

function avisar() {
  ouvintes.forEach((f) => f());
}

function salvar(novo: EstadoEstudo) {
  estado = novo;
  try {
    localStorage.setItem(CHAVE, JSON.stringify(novo));
  } catch {
    // localStorage indisponível: o cronômetro funciona nesta aba, só não fica salvo
  }
  avisar();
}

// Outra aba do navegador mexeu no cronômetro: esta acompanha.
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key !== CHAVE) return;
    estado = ler();
    avisar();
  });
}

function assinar(f: () => void) {
  ouvintes.add(f);
  return () => {
    ouvintes.delete(f);
  };
}

export function useEstudo(): EstadoEstudo {
  return useSyncExternalStore(assinar, () => estado);
}

/** Relógio que anda de segundo em segundo enquanto `ligado`. */
export function useAgora(ligado: boolean): number {
  const [agora, setAgora] = useState(() => Date.now());
  useEffect(() => {
    setAgora(Date.now());
    if (!ligado) return;
    const t = window.setInterval(() => setAgora(Date.now()), 1000);
    return () => window.clearInterval(t);
  }, [ligado]);
  return agora;
}

export function tempoAtivo(a: CronometroAtivo, agora: number): number {
  return a.acumulado + (a.desde === null ? 0 : Math.max(0, agora - a.desde));
}

function fecharAtivo(agora: number): SessaoEstudo[] {
  const a = estado.ativo;
  if (!a) return estado.sessoes;
  const ms = tempoAtivo(a, agora);
  if (ms < 1000) return estado.sessoes;
  const { aula, grupo, rotulo, inicio } = a;
  return [...estado.sessoes, { aula, grupo, rotulo, inicio, fim: agora, ms }].slice(-MAX_SESSOES);
}

/** Liga o cronômetro para o alvo. Se já estava contando outra coisa, salva aquele tempo antes. */
export function iniciarEstudo(alvo: AlvoEstudo) {
  const agora = Date.now();
  salvar({ ...estado, sessoes: fecharAtivo(agora), ativo: { ...alvo, inicio: agora, desde: agora, acumulado: 0 } });
}

export function pausarEstudo() {
  const a = estado.ativo;
  if (!a || a.desde === null) return;
  salvar({ ...estado, ativo: { ...a, acumulado: tempoAtivo(a, Date.now()), desde: null } });
}

export function continuarEstudo() {
  const a = estado.ativo;
  if (!a || a.desde !== null) return;
  salvar({ ...estado, ativo: { ...a, desde: Date.now() } });
}

/** Para e guarda a sessão no histórico. */
export function encerrarEstudo() {
  if (!estado.ativo) return;
  salvar({ ...estado, sessoes: fecharAtivo(Date.now()), ativo: null });
}

/** Para sem guardar (cronômetro esquecido ligado, por exemplo). */
export function descartarEstudo() {
  if (!estado.ativo) return;
  salvar({ ...estado, ativo: null });
}

export function alternaVisto(blocoId: string) {
  const vistos = estado.vistos.includes(blocoId)
    ? estado.vistos.filter((v) => v !== blocoId)
    : [...estado.vistos, blocoId];
  salvar({ ...estado, vistos });
}

export interface TotaisEstudo {
  hoje: number;
  semana: number;
  total: number;
  porGrupo: Map<string, number>;
  porAula: Map<string, number>;
}

/** Somas do histórico mais o trecho que está correndo. A sessão conta no dia em que começou. */
export function totaisEstudo(e: EstadoEstudo, agora: number): TotaisEstudo {
  const meiaNoite = new Date(agora);
  meiaNoite.setHours(0, 0, 0, 0);
  const hoje0 = meiaNoite.getTime();
  const semana0 = hoje0 - 6 * DIA;
  const t: TotaisEstudo = { hoje: 0, semana: 0, total: 0, porGrupo: new Map(), porAula: new Map() };
  const conta = (inicio: number, ms: number, grupo?: string, aula?: string) => {
    t.total += ms;
    if (inicio >= hoje0) t.hoje += ms;
    if (inicio >= semana0) t.semana += ms;
    if (grupo) t.porGrupo.set(grupo, (t.porGrupo.get(grupo) ?? 0) + ms);
    if (aula) t.porAula.set(aula, (t.porAula.get(aula) ?? 0) + ms);
  };
  for (const s of e.sessoes) conta(s.inicio, s.ms, s.grupo, s.aula);
  if (e.ativo) conta(e.ativo.inicio, tempoAtivo(e.ativo, agora), e.ativo.grupo, e.ativo.aula);
  return t;
}

/** Tempo de cada um dos últimos `dias` dias, do mais antigo até hoje. A sessão conta no dia em que começou. */
export function porDia(e: EstadoEstudo, agora: number, dias = 7): { dia: number; ms: number }[] {
  const hoje = new Date(agora);
  hoje.setHours(0, 0, 0, 0);
  const lista: { dia: number; ms: number }[] = [];
  for (let i = dias - 1; i >= 0; i--) {
    const d = new Date(hoje);
    d.setDate(hoje.getDate() - i);
    lista.push({ dia: d.getTime(), ms: 0 });
  }
  const conta = (inicio: number, ms: number) => {
    for (let i = lista.length - 1; i >= 0; i--) {
      if (inicio >= lista[i].dia) {
        lista[i].ms += ms;
        return;
      }
    }
  };
  for (const s of e.sessoes) conta(s.inicio, s.ms);
  if (e.ativo) conta(e.ativo.inicio, tempoAtivo(e.ativo, agora));
  return lista;
}

const dois = (n: number) => String(n).padStart(2, "0");

/** 1:05:09 ou 05:09. */
export function relogio(ms: number): string {
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  return h > 0 ? `${h}:${dois(m)}:${dois(s % 60)}` : `${dois(m)}:${dois(s % 60)}`;
}

/** 2h 05min, 12min, menos de 1min. */
export function duracao(ms: number): string {
  const min = Math.floor(ms / 60000);
  if (min < 1) return ms > 0 ? "menos de 1min" : "0min";
  const h = Math.floor(min / 60);
  return h > 0 ? `${h}h ${dois(min % 60)}min` : `${min}min`;
}
