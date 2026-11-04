import { useEffect, useState, useSyncExternalStore } from "react";

/**
 * Cronômetro de estudo e blocos de aula já vistos na PRF. Ficam só neste aparelho, numa chave
 * própria (não mexe em prf:attempts nem no progresso do Português Inteligente). O cronômetro
 * guarda o horário em que começou, então continua certo depois de recarregar ou fechar a aba.
 */
const CHAVE_PRF = "prf:estudo:v1";
const MAX_SESSOES = 3000;
const DIA = 24 * 60 * 60 * 1000;

/** Meia-noite do dia de `ms`. */
const meiaNoite = (ms: number) => new Date(ms).setHours(0, 0, 0, 0);

/** Meia-noite que encerra o dia de `ms`. */
function fimDoDia(ms: number): number {
  const d = new Date(meiaNoite(ms));
  d.setDate(d.getDate() + 1);
  return d.getTime();
}

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

/** Sessão que a meia-noite fechou sozinha: aparece como aviso até ser dispensada ou até começar outra. */
export interface ViradaDia extends AlvoEstudo {
  /** Meia-noite do dia que foi encerrado. */
  dia: number;
  /** Início da sessão guardada, para achá-la se o tempo for descartado. */
  inicio: number;
  ms: number;
  /** O cronômetro estava contando (não pausado) quando o dia acabou. */
  contando: boolean;
}

export interface EstadoEstudo {
  ativo: CronometroAtivo | null;
  sessoes: SessaoEstudo[];
  /** Ids (do Drive) dos blocos marcados como vistos. */
  vistos: string[];
  /** Quando cada bloco foi marcado (ms). Os marcados antes de a data existir não estão aqui. */
  vistosEm: Record<string, number>;
  /** Última vez (ms) que o PDF de cada aula foi marcado como lido: a leitura vale só no dia. */
  pdfLidoEm: Record<string, number>;
  virada: ViradaDia | null;
}

const VAZIO: EstadoEstudo = { ativo: null, sessoes: [], vistos: [], vistosEm: {}, pdfLidoEm: {}, virada: null };

/** Em 30/10/26 o cronômetro só foi testado; o estudo valendo começou em 31/10/26. */
export const COMECO_ESTUDO = new Date(2026, 9, 31).getTime();

/** Curso aberto: cada curso guarda o estudo na própria chave (a PRF continua em prf:estudo:v1). */
let chave = CHAVE_PRF;
let comecoEstudo = COMECO_ESTUDO;

function ler(): EstadoEstudo {
  try {
    const raw = localStorage.getItem(chave);
    if (!raw) return VAZIO;
    const p = JSON.parse(raw) as Partial<EstadoEstudo>;
    return {
      ativo: p.ativo && p.ativo.inicio >= comecoEstudo ? p.ativo : null,
      sessoes: Array.isArray(p.sessoes) ? p.sessoes.filter((s) => s.inicio >= comecoEstudo) : [],
      vistos: Array.isArray(p.vistos) ? p.vistos : [],
      vistosEm: p.vistosEm && typeof p.vistosEm === "object" ? p.vistosEm : {},
      pdfLidoEm: p.pdfLidoEm && typeof p.pdfLidoEm === "object" ? p.pdfLidoEm : {},
      virada: p.virada && typeof p.virada === "object" ? p.virada : null,
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
    localStorage.setItem(chave, JSON.stringify(novo));
  } catch {
    // localStorage indisponível: o cronômetro funciona nesta aba, só não fica salvo
  }
  avisar();
}

// Outra aba do navegador mexeu no cronômetro: esta acompanha.
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key !== chave) return;
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

/* ---------- Virada do dia: à meia-noite o dia anterior é encerrado ---------- */

/**
 * Sessão aberta que vem de um dia anterior: o tempo até a meia-noite fica naquele dia e o cronômetro para.
 * Devolve true se fechou alguma coisa (uma sessão de vários dias fecha um dia por vez).
 */
function fecharDiaAnterior(agora: number): boolean {
  const a = estado.ativo;
  if (!a || a.inicio >= meiaNoite(agora)) return false;
  const fim = fimDoDia(a.inicio);
  const { aula, grupo, rotulo, inicio, desde } = a;
  const contando = desde !== null && desde < fim;
  const ms = a.acumulado + (contando ? fim - desde : 0);
  const sessoes = ms >= 1000 ? [...estado.sessoes, { aula, grupo, rotulo, inicio, fim, ms }].slice(-MAX_SESSOES) : estado.sessoes;
  // Retomado depois da meia-noite (antes de existir a virada): o trecho que está correndo é do dia novo.
  const ativo = desde !== null && desde >= fim ? { aula, grupo, rotulo, inicio: desde, desde, acumulado: 0 } : null;
  const virada = ms >= 1000 ? { aula, grupo, rotulo, dia: meiaNoite(inicio), inicio, ms, contando } : estado.virada;
  salvar({ ...estado, sessoes, ativo, virada });
  return true;
}

/** Dia (meia-noite) que as telas estão mostrando. */
let diaVisto = meiaNoite(Date.now());

/** Confere se o dia virou (meia-noite, aparelho que dormiu, app que voltou do fundo) e encerra o dia anterior. */
function conferirDia() {
  const agora = Date.now();
  while (fecharDiaAnterior(agora)) {
    // um dia por vez
  }
  const dia = meiaNoite(agora);
  if (dia === diaVisto) return;
  diaVisto = dia;
  // Mesmo sem sessão para fechar, as telas refazem as contas de "hoje".
  estado = { ...estado };
  avisar();
}

conferirDia();
if (typeof window !== "undefined") {
  window.setInterval(conferirDia, 30_000);
  window.addEventListener("focus", conferirDia);
  window.addEventListener("pageshow", conferirDia);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") conferirDia();
  });
}

/** Passa a mostrar o estudo de outro curso. */
export function trocarEstudo(novaChave: string, comeco: number) {
  if (novaChave === chave) return;
  chave = novaChave;
  comecoEstudo = comeco;
  estado = ler();
  conferirDia();
  avisar();
}

/** Meia-noite do primeiro dia com estudo cronometrado no curso aberto; null se ainda não houve. */
export function primeiroDiaEstudado(): number | null {
  let menor = estado.ativo?.inicio ?? Infinity;
  for (const s of estado.sessoes) if (s.inicio < menor) menor = s.inicio;
  return menor === Infinity ? null : meiaNoite(menor);
}

/**
 * Só um curso conta de cada vez: ao entrar num curso, o cronômetro que ficou ligado nos outros é pausado
 * (o tempo até aqui fica guardado e dá para retomar quando voltar a esse curso).
 */
export function pausarOutrosCursos(chaveAtual: string) {
  try {
    const agora = Date.now();
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k || k === chaveAtual || !/^(prf|curso:[^:]+):estudo:v1$/.test(k)) continue;
      const raw = localStorage.getItem(k);
      const p = raw ? (JSON.parse(raw) as Partial<EstadoEstudo>) : null;
      const a = p?.ativo;
      if (!a || a.desde === null) continue;
      localStorage.setItem(k, JSON.stringify({ ...p, ativo: { ...a, acumulado: tempoAtivo(a, agora), desde: null } }));
    }
  } catch {
    // localStorage indisponível ou chave estragada: nada a pausar
  }
}

export function useEstudo(): EstadoEstudo {
  return useSyncExternalStore(assinar, () => estado);
}

/** Relógio que anda de segundo em segundo enquanto `ligado`; parado, ainda acompanha a virada do dia. */
export function useAgora(ligado: boolean): number {
  const dia = useSyncExternalStore(assinar, () => diaVisto);
  const [agora, setAgora] = useState(() => Date.now());
  useEffect(() => {
    setAgora(Date.now());
    if (!ligado) return;
    const t = window.setInterval(() => {
      conferirDia(); // contando, a virada acontece no segundo da meia-noite
      setAgora(Date.now());
    }, 1000);
    return () => window.clearInterval(t);
  }, [ligado, dia]);
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
  conferirDia();
  const agora = Date.now();
  salvar({
    ...estado,
    sessoes: fecharAtivo(agora),
    ativo: { ...alvo, inicio: agora, desde: agora, acumulado: 0 },
    virada: null,
  });
}

export function pausarEstudo() {
  conferirDia();
  const a = estado.ativo;
  if (!a || a.desde === null) return;
  salvar({ ...estado, ativo: { ...a, acumulado: tempoAtivo(a, Date.now()), desde: null } });
}

export function continuarEstudo() {
  conferirDia();
  const a = estado.ativo;
  if (!a || a.desde !== null) return;
  salvar({ ...estado, ativo: { ...a, desde: Date.now() } });
}

/** Para e guarda a sessão no histórico. */
export function encerrarEstudo() {
  conferirDia();
  if (!estado.ativo) return;
  salvar({ ...estado, sessoes: fecharAtivo(Date.now()), ativo: null });
}

/** Para sem guardar (cronômetro esquecido ligado, por exemplo). */
export function descartarEstudo() {
  conferirDia();
  if (!estado.ativo) return;
  salvar({ ...estado, ativo: null });
}

/** O cronômetro estava contando quando o dia de ontem acabou: dá para seguir contando hoje. */
export function podeContinuarVirada(e: EstadoEstudo, agora: number): boolean {
  return !e.ativo && e.virada !== null && e.virada.contando && meiaNoite(agora) === fimDoDia(e.virada.dia);
}

/** Volta a contar, no dia novo, o que estava sendo estudado na virada. */
export function continuarAposVirada() {
  const v = estado.virada;
  if (v) iniciarEstudo({ aula: v.aula, grupo: v.grupo, rotulo: v.rotulo });
}

/** Tira do histórico o tempo que a virada guardou (cronômetro esquecido ligado). */
export function descartarVirada() {
  const v = estado.virada;
  if (!v) return;
  const i = estado.sessoes.findIndex((s) => s.inicio === v.inicio && s.ms === v.ms);
  const sessoes = i < 0 ? estado.sessoes : [...estado.sessoes.slice(0, i), ...estado.sessoes.slice(i + 1)];
  salvar({ ...estado, sessoes, virada: null });
}

export function dispensarVirada() {
  if (estado.virada) salvar({ ...estado, virada: null });
}

export function alternaVisto(blocoId: string) {
  const vistosEm = { ...estado.vistosEm };
  let vistos: string[];
  if (estado.vistos.includes(blocoId)) {
    vistos = estado.vistos.filter((v) => v !== blocoId);
    delete vistosEm[blocoId];
  } else {
    vistos = [...estado.vistos, blocoId];
    vistosEm[blocoId] = Date.now();
  }
  salvar({ ...estado, vistos, vistosEm });
}

/** Todo dia o estudo da aula começa pelo PDF, mesmo que a aula já tenha sido vista em outro dia. */
export function pdfLidoHoje(e: EstadoEstudo, aulaId: string, agora: number): boolean {
  const em = e.pdfLidoEm[aulaId];
  return em !== undefined && em >= new Date(agora).setHours(0, 0, 0, 0);
}

export function alternaPdfLido(aulaId: string) {
  const pdfLidoEm = { ...estado.pdfLidoEm };
  if (pdfLidoHoje(estado, aulaId, Date.now())) delete pdfLidoEm[aulaId];
  else pdfLidoEm[aulaId] = Date.now();
  salvar({ ...estado, pdfLidoEm });
}

/** A aba das aulas entrou no app em 30/10/26: bloco marcado antes de a data ser guardada conta nesse dia. */
const VISTO_SEM_DATA = new Date(2026, 9, 30, 12).getTime();

/** Quando o bloco foi marcado como visto. */
export function quandoVisto(e: EstadoEstudo, blocoId: string): number {
  return e.vistosEm[blocoId] ?? VISTO_SEM_DATA;
}

export interface TotaisEstudo {
  hoje: number;
  semana: number;
  total: number;
  porGrupo: Map<string, number>;
  porAula: Map<string, number>;
}

/** Somas do histórico mais o trecho que está correndo. A sessão conta no dia em que começou (a meia-noite fecha a sessão aberta). */
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

/** Quantos dias diferentes tiveram estudo cronometrado. */
export function diasComEstudo(e: EstadoEstudo): number {
  const dias = new Set<number>();
  for (const s of e.sessoes) dias.add(new Date(s.inicio).setHours(0, 0, 0, 0));
  if (e.ativo) dias.add(new Date(e.ativo.inicio).setHours(0, 0, 0, 0));
  return dias.size;
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
const maiuscula = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** seg, ter, qua… */
export const diaCurto = (ms: number) => new Date(ms).toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "");
/** 30/10 */
export const diaMes = (ms: number) => new Date(ms).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
/** Quinta-feira, 30/10 */
export const diaLongo = (ms: number) =>
  maiuscula(new Date(ms).toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "2-digit" }));

/** Tempo curto para caber no quadro e na barra: <1min, 25min, 2h05. */
export function curto(ms: number): string {
  const min = Math.floor(ms / 60000);
  if (min < 1) return ms > 0 ? "<1min" : "0min";
  return min < 60 ? `${min}min` : `${Math.floor(min / 60)}h${dois(min % 60)}`;
}

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
