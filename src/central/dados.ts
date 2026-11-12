import type { CursoId } from "../data/cursos";
import { PRF_NOMES, type MateriaPrfId } from "../data/prf";
import type { AttemptRecord } from "../lib/types";
// Só leitura do localStorage: nenhum banco de questões entra no pacote da Central.
import { getErradasPrf, getTentativasPrf } from "../prf/armazenamento";
import { progressoDoCurso } from "../prf/cursos/completo/armazenamento";
import { MATERIAS_PRF_POLICIAL } from "../prf/cursos/completo/prf-policial/materias";
import { NUMERO_AULA_POL } from "./numerosAulaPol";

/**
 * Números da Central, lidos direto das chaves de cada curso. Não importa o módulo do cronômetro
 * (prf/aulas/estudo.ts): ele liga um relógio e fecha o dia ao carregar, e isso é só de quem abre o curso.
 */

export type CursoEstudo = "prf-policial" | "prf-adm" | "pf-agente" | "pmpr" | "banco-brasil";

export interface InfoCurso {
  id: CursoEstudo;
  curto: string;
  /** "na PRF Policial", "no Banco do Brasil": para as frases da Central. */
  em: string;
  chaveEstudo: string;
  chaveMeta: string;
  /** Sessões antes disto não contam (na PRF ADM, o tempo de teste antes de 31/10/26). */
  comeco: number;
  /** Tem banco de questões no app. */
  banco: boolean;
}

/** Mesma data de COMECO_ESTUDO e COMECO_META da PRF ADM (prf/aulas/estudo.ts e meta.ts). */
const COMECO_PRF_ADM = new Date(2026, 9, 31).getTime();

const novo = (id: CursoEstudo, curto: string, em: string, banco: boolean): InfoCurso => ({
  id,
  curto,
  em,
  chaveEstudo: `curso:${id}:estudo:v1`,
  chaveMeta: `curso:${id}:meta:v1`,
  comeco: 0,
  banco,
});

export const CURSOS_ESTUDO: InfoCurso[] = [
  novo("prf-policial", "PRF Policial", "na PRF Policial", true),
  {
    id: "prf-adm",
    curto: "PRF ADM",
    em: "na PRF ADM",
    chaveEstudo: "prf:estudo:v1",
    chaveMeta: "prf:meta:v1",
    comeco: COMECO_PRF_ADM,
    banco: true,
  },
  novo("pf-agente", "PF Agente", "na PF Agente", false),
  novo("pmpr", "PMPR", "na PMPR", false),
  novo("banco-brasil", "Banco do Brasil", "no Banco do Brasil", false),
];

export const INFO_CURSO = Object.fromEntries(CURSOS_ESTUDO.map((c) => [c.id, c])) as Record<CursoEstudo, InfoCurso>;

const MINUTO = 60_000;
const HORA = 60 * MINUTO;
const DIA = 24 * HORA;
/** Cronômetro esquecido ligado não vira um dia inteiro de estudo. */
const MAX_TRECHO = 12 * HORA;

// ---------- datas (horário do aparelho, como o resto do app) ----------

const dois = (n: number) => String(n).padStart(2, "0");

export function chaveDia(ms: number): string {
  const d = new Date(ms);
  return `${d.getFullYear()}-${dois(d.getMonth() + 1)}-${dois(d.getDate())}`;
}

export function meiaNoite(ms: number): number {
  const d = new Date(ms);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

/** Dia seguinte à meia-noite dada (sem errar no horário de verão). */
export function maisDias(meia: number, n: number): number {
  const d = new Date(meia);
  d.setDate(d.getDate() + n);
  return d.getTime();
}

/** Segunda-feira 0h da semana do momento dado. */
export function segundaDe(ms: number): number {
  const d = new Date(meiaNoite(ms));
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return d.getTime();
}

// ---------- leitura segura ----------

function lerJson(chave: string): unknown {
  try {
    return JSON.parse(localStorage.getItem(chave) ?? "null");
  } catch {
    return null;
  }
}

const numero = (v: unknown): number | null => (typeof v === "number" && Number.isFinite(v) ? v : null);
const texto = (v: unknown): string | undefined => (typeof v === "string" && v ? v : undefined);
const objeto = (v: unknown): Record<string, unknown> | null =>
  v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, unknown>) : null;

/** "Português · Aula 03: Crase" → "Português". */
export function materiaDoRotulo(rotulo: string): string {
  const i = rotulo.indexOf(" · ");
  return (i > 0 ? rotulo.slice(0, i) : rotulo) || "Estudo";
}

// ---------- tempo de estudo ----------

export interface Trecho {
  curso: CursoEstudo;
  grupo?: string;
  aula?: string;
  rotulo: string;
  inicio: number;
  fim: number;
  ms: number;
}

export interface CronometroCurso {
  curso: CursoEstudo;
  grupo?: string;
  aula?: string;
  rotulo: string;
  inicio: number;
  ms: number;
  rodando: boolean;
}

export interface EstudoCurso {
  info: InfoCurso;
  /** Sessões fechadas e, no fim, o trecho do cronômetro ligado (se houver). */
  trechos: Trecho[];
  ativo: CronometroCurso | null;
}

export function lerEstudo(info: InfoCurso, agora: number): EstudoCurso {
  const e = objeto(lerJson(info.chaveEstudo));
  const trechos: Trecho[] = [];
  let ativo: CronometroCurso | null = null;
  if (e && Array.isArray(e.sessoes)) {
    for (const bruto of e.sessoes) {
      const s = objeto(bruto);
      const inicio = numero(s?.inicio);
      const ms = numero(s?.ms);
      if (!s || inicio === null || ms === null || ms <= 0 || inicio < info.comeco) continue;
      const curto = Math.min(ms, MAX_TRECHO);
      trechos.push({
        curso: info.id,
        grupo: texto(s.grupo),
        aula: texto(s.aula),
        rotulo: texto(s.rotulo) ?? "Estudo",
        inicio,
        fim: numero(s.fim) ?? inicio + curto,
        ms: curto,
      });
    }
  }
  const a = objeto(e?.ativo);
  const inicio = numero(a?.inicio);
  if (a && inicio !== null && inicio >= info.comeco) {
    const desde = numero(a.desde);
    const ms = Math.min((numero(a.acumulado) ?? 0) + (desde !== null ? Math.max(0, agora - desde) : 0), MAX_TRECHO);
    ativo = {
      curso: info.id,
      grupo: texto(a.grupo),
      aula: texto(a.aula),
      rotulo: texto(a.rotulo) ?? "Estudo",
      inicio,
      ms,
      rodando: desde !== null,
    };
    if (ms > 0) trechos.push({ ...ativo, fim: agora });
  }
  return { info, trechos, ativo };
}

/** Minutos da meta do dia no curso (60 de segunda a sexta, 120 no fim de semana, com os aumentos aceitos). */
export function metaDoDia(info: InfoCurso, dia: number): number {
  const fds = [0, 6].includes(new Date(dia).getDay());
  const tipo = fds ? "fimDeSemana" : "semana";
  let minutos = fds ? 120 : 60;
  const m = objeto(lerJson(info.chaveMeta));
  if (m && Array.isArray(m.respostas)) {
    for (const bruto of m.respostas) {
      const r = objeto(bruto);
      const desde = numero(r?.desde);
      const novos = numero(r?.minutos);
      if (r && (numero(r.aumento) ?? 0) > 0 && r.tipo === tipo && desde !== null && desde <= dia && novos) {
        minutos = novos;
      }
    }
  }
  return minutos;
}

// ---------- questões ----------

type PorDia = Record<string, [number, number]>;

export interface QuestoesCurso {
  info: InfoCurso;
  tentativas: AttemptRecord<string>[];
  porDia: PorDia;
  respondidas: number;
  acertos: number;
  erradas: number;
}

function porDiaDe(chave: string, tentativas: AttemptRecord<string>[]): PorDia {
  const salvo = objeto(lerJson(chave));
  const saida: PorDia = {};
  if (salvo) {
    for (const [dia, v] of Object.entries(salvo)) {
      if (Array.isArray(v) && numero(v[0]) !== null) saida[dia] = [v[0] as number, numero(v[1]) ?? 0];
    }
    return saida;
  }
  for (const t of tentativas) {
    const ms = Date.parse(t.respondidaEm);
    if (Number.isNaN(ms)) continue;
    const dia = chaveDia(ms);
    const [n, a] = saida[dia] ?? [0, 0];
    saida[dia] = [n + 1, a + (t.acertou ? 1 : 0)];
  }
  return saida;
}

export function lerQuestoes(info: InfoCurso): QuestoesCurso | null {
  if (!info.banco) return null;
  let tentativas: AttemptRecord<string>[];
  let erradas: string[];
  let chavePorDia: string;
  if (info.id === "prf-adm") {
    tentativas = getTentativasPrf();
    erradas = getErradasPrf();
    chavePorDia = "prf:questoesPorDia:v1";
  } else {
    const p = progressoDoCurso(info.id);
    tentativas = p.tentativas();
    erradas = p.erradas();
    chavePorDia = `curso:${info.id}:questoesPorDia:v1`;
  }
  if (!Array.isArray(tentativas)) tentativas = [];
  const porDia = porDiaDe(chavePorDia, tentativas);
  let respondidas = 0;
  let acertos = 0;
  for (const [n, a] of Object.values(porDia)) {
    respondidas += n;
    acertos += a;
  }
  return { info, tentativas, porDia, respondidas, acertos, erradas: Array.isArray(erradas) ? erradas.length : 0 };
}

// ---------- pontos fracos ----------

export interface PontoFraco {
  curso: CursoEstudo;
  /** Aula (PRF Policial) ou matéria (PRF ADM). */
  chave: string;
  nome: string;
  grupo?: string;
  aula?: string;
  feitas: number;
  certas: number;
  pct: number;
}

const MIN_FEITAS = 5;
const PCT_FRACO = 70;

/** "pol-pt-03-12" → aula "pt-03". */
export const aulaDaQuestao = (id: string) => /^pol-(.+)-\d+$/.exec(id)?.[1] ?? null;
/** "pt-03" → grupo "pt"; "adm-a-02" → "adm-a"; "pt-extra-1" → "pt". */
export const grupoDaAula = (aula: string) => aula.replace(/-extra-\d+$/, "").replace(/-\d+$/, "");
/** O número que o curso mostra (o do Drive); sem ele, o do id. */
const numeroDaAula = (aula: string) => NUMERO_AULA_POL[aula] ?? /-(\d+)$/.exec(aula)?.[1] ?? "";

const NOMES_EXTRAS: Record<string, string> = {
  "adm-a": "Direito Administrativo A",
  "adm-b": "Direito Administrativo B",
  carreira: "Carreira de PRF",
  discursivas: "Discursivas",
};

export const nomeMateriaPol = (grupo: string) => NOMES_EXTRAS[grupo] ?? MATERIAS_PRF_POLICIAL.get(grupo) ?? grupo;

/** Acerto pela última resposta de cada questão (como a página da aula mostra). */
export function pontosFracos(q: QuestoesCurso): PontoFraco[] {
  const ultima = new Map<string, AttemptRecord<string>>();
  for (const t of q.tentativas) if (t && typeof t.questionId === "string") ultima.set(t.questionId, t);
  const soma = new Map<string, { feitas: number; certas: number }>();
  for (const t of ultima.values()) {
    const chave = q.info.id === "prf-policial" ? aulaDaQuestao(t.questionId) : t.materia;
    if (!chave) continue;
    const s = soma.get(chave) ?? { feitas: 0, certas: 0 };
    s.feitas++;
    if (t.acertou) s.certas++;
    soma.set(chave, s);
  }
  const saida: PontoFraco[] = [];
  for (const [chave, s] of soma) {
    if (s.feitas < MIN_FEITAS) continue;
    const pct = Math.round((s.certas / s.feitas) * 100);
    if (pct >= PCT_FRACO) continue;
    if (q.info.id === "prf-policial") {
      const grupo = grupoDaAula(chave);
      const n = numeroDaAula(chave);
      saida.push({
        curso: q.info.id,
        chave,
        nome: `${nomeMateriaPol(grupo)}${n ? ` · Aula ${n}` : ""}`,
        grupo,
        aula: chave,
        ...s,
        pct,
      });
    } else {
      saida.push({ curso: q.info.id, chave, nome: PRF_NOMES[chave as MateriaPrfId] ?? chave, ...s, pct });
    }
  }
  return saida.sort((a, b) => a.pct - b.pct || b.feitas - a.feitas);
}

// ---------- painel ----------

export interface Continuar {
  curso: CursoEstudo;
  tipo: "aula" | "treino";
  grupo?: string;
  aula?: string;
  titulo: string;
  quando: number;
  cronometro?: { ms: number; rodando: boolean };
}

export interface TempoMateria {
  curso: CursoEstudo;
  chave: string;
  materia: string;
  ms: number;
}

export interface Esquecida {
  curso: CursoEstudo;
  grupo: string;
  materia: string;
  dias: number;
}

export interface Painel {
  agora: number;
  hoje: number;
  segunda: number;
  estudos: EstudoCurso[];
  questoes: QuestoesCurso[];
  /** Curso com a atividade mais recente: a meta do dia é a dele. */
  principal: InfoCurso | null;
  continuar: Continuar | null;
  msPorDia: Map<string, number>;
  hojeMs: number;
  hojePrincipalMs: number;
  metaMin: number;
  semanaMs: number;
  semanaPassadaMs: number;
  questoesSemana: { n: number; a: number };
  questoesTotal: { n: number; a: number };
  questoesHoje: number;
  sequencia: number;
  porMateriaSemana: TempoMateria[];
  fracos: PontoFraco[];
  esquecidas: Esquecida[];
  erradas: { curso: CursoEstudo; n: number }[];
}

export function somaPorDia(trechos: Trecho[]): Map<string, number> {
  const m = new Map<string, number>();
  for (const t of trechos) {
    const dia = chaveDia(t.inicio);
    m.set(dia, (m.get(dia) ?? 0) + t.ms);
  }
  return m;
}

export function somaPeriodo(trechos: Trecho[], de: number, ate: number): number {
  let total = 0;
  for (const t of trechos) if (t.inicio >= de && t.inicio < ate) total += t.ms;
  return total;
}

export function porMateria(trechos: Trecho[], de: number, ate: number): TempoMateria[] {
  const m = new Map<string, TempoMateria>();
  for (const t of trechos) {
    if (t.inicio < de || t.inicio >= ate) continue;
    const materia = materiaDoRotulo(t.rotulo);
    const chave = `${t.curso}|${t.grupo ?? materia}`;
    const atual = m.get(chave) ?? { curso: t.curso, chave, materia, ms: 0 };
    atual.ms += t.ms;
    m.set(chave, atual);
  }
  return [...m.values()].sort((a, b) => b.ms - a.ms);
}

export function montarPainel(agora: number): Painel {
  const hoje = meiaNoite(agora);
  const segunda = segundaDe(agora);
  const estudos = CURSOS_ESTUDO.map((c) => lerEstudo(c, agora));
  const questoes = CURSOS_ESTUDO.map(lerQuestoes).filter((q): q is QuestoesCurso => q !== null);
  const trechos = estudos.flatMap((e) => e.trechos);

  // O que foi feito por último: cronômetro ligado primeiro; depois a sessão ou a questão mais recente.
  let continuar: Continuar | null = null;
  const ligados = estudos.map((e) => e.ativo).filter((a): a is CronometroCurso => a !== null);
  ligados.sort((a, b) => Number(b.rodando) - Number(a.rodando) || b.inicio - a.inicio);
  if (ligados[0]) {
    const a = ligados[0];
    continuar = {
      curso: a.curso,
      tipo: "aula",
      grupo: a.grupo,
      aula: a.aula,
      titulo: a.rotulo,
      quando: agora,
      cronometro: { ms: a.ms, rodando: a.rodando },
    };
  } else {
    for (const t of trechos) {
      if (!continuar || t.fim > continuar.quando) {
        continuar = { curso: t.curso, tipo: "aula", grupo: t.grupo, aula: t.aula, titulo: t.rotulo, quando: t.fim };
      }
    }
    for (const q of questoes) {
      const ultima = q.tentativas[q.tentativas.length - 1];
      const ms = ultima ? Date.parse(ultima.respondidaEm) : NaN;
      if (!ultima || Number.isNaN(ms) || (continuar && ms <= continuar.quando)) continue;
      const materia =
        q.info.id === "prf-policial"
          ? nomeMateriaPol(grupoDaAula(aulaDaQuestao(ultima.questionId) ?? ultima.materia))
          : (PRF_NOMES[ultima.materia as MateriaPrfId] ?? ultima.materia);
      continuar = { curso: q.info.id, tipo: "treino", titulo: `Treino de questões · ${materia}`, quando: ms };
    }
  }
  const principal = continuar ? INFO_CURSO[continuar.curso] : null;

  const msPorDia = somaPorDia(trechos);
  const amanha = maisDias(hoje, 1);
  const hojeMs = somaPeriodo(trechos, hoje, amanha);
  const hojePrincipalMs = principal
    ? somaPeriodo(estudos.find((e) => e.info.id === principal.id)?.trechos ?? [], hoje, amanha)
    : 0;
  const semanaMs = somaPeriodo(trechos, segunda, maisDias(segunda, 7));
  const semanaPassadaMs = somaPeriodo(trechos, maisDias(segunda, -7), segunda);

  const diasSemana = new Set(Array.from({ length: 7 }, (_, i) => chaveDia(maisDias(segunda, i))));
  const questoesSemana = { n: 0, a: 0 };
  const questoesTotal = { n: 0, a: 0 };
  let questoesHoje = 0;
  const diasComQuestao = new Set<string>();
  const chaveHoje = chaveDia(hoje);
  for (const q of questoes) {
    for (const [dia, [n, a]] of Object.entries(q.porDia)) {
      questoesTotal.n += n;
      questoesTotal.a += a;
      if (diasSemana.has(dia)) {
        questoesSemana.n += n;
        questoesSemana.a += a;
      }
      if (dia === chaveHoje) questoesHoje += n;
      if (n > 0) diasComQuestao.add(dia);
    }
  }

  // Dias seguidos com estudo (1 min de aula ou 1 questão); hoje ainda vazio não quebra a sequência.
  const estudou = (dia: number) => {
    const k = chaveDia(dia);
    return (msPorDia.get(k) ?? 0) >= MINUTO || diasComQuestao.has(k);
  };
  let sequencia = 0;
  let dia = estudou(hoje) ? hoje : maisDias(hoje, -1);
  while (estudou(dia) && sequencia < 3650) {
    sequencia++;
    dia = maisDias(dia, -1);
  }

  const fracos = questoes.flatMap(pontosFracos).sort((a, b) => a.pct - b.pct || b.feitas - a.feitas);

  // Matérias do curso principal que ficaram paradas (estudadas antes, nada há mais de 5 dias).
  const esquecidas: Esquecida[] = [];
  if (principal) {
    const ultimo = new Map<string, { ms: number; materia: string }>();
    for (const t of estudos.find((e) => e.info.id === principal.id)?.trechos ?? []) {
      if (!t.grupo) continue;
      const u = ultimo.get(t.grupo);
      if (!u || t.inicio > u.ms) ultimo.set(t.grupo, { ms: t.inicio, materia: materiaDoRotulo(t.rotulo) });
    }
    for (const [grupo, u] of ultimo) {
      const dias = Math.round((hoje - meiaNoite(u.ms)) / DIA);
      if (dias > 5 && dias <= 60) esquecidas.push({ curso: principal.id, grupo, materia: u.materia, dias });
    }
    esquecidas.sort((a, b) => b.dias - a.dias);
  }

  return {
    agora,
    hoje,
    segunda,
    estudos,
    questoes,
    principal,
    continuar,
    msPorDia,
    hojeMs,
    hojePrincipalMs,
    metaMin: principal ? metaDoDia(principal, hoje) : 60,
    semanaMs,
    semanaPassadaMs,
    questoesSemana,
    questoesTotal,
    questoesHoje,
    sequencia,
    porMateriaSemana: porMateria(trechos, segunda, maisDias(segunda, 7)),
    fracos,
    esquecidas,
    erradas: questoes.filter((q) => q.erradas > 0).map((q) => ({ curso: q.info.id, n: q.erradas })),
  };
}

// ---------- formatos ----------

/** 95 min → "1h35"; 40 min → "40 min"; 0 → "0 min". */
export function duracao(ms: number): string {
  const min = Math.floor(ms / MINUTO);
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const r = min % 60;
  return r ? `${h}h${dois(r)}` : `${h}h`;
}

export const pct = (a: number, n: number) => (n > 0 ? Math.round((a / n) * 100) : null);

export function quando(ms: number, agora: number): string {
  const hora = new Date(ms).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  const dias = Math.round((meiaNoite(agora) - meiaNoite(ms)) / DIA);
  if (dias <= 0) return `hoje, ${hora}`;
  if (dias === 1) return `ontem, ${hora}`;
  return `${new Date(ms).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })}, ${hora}`;
}

/** O curso que a Central abre: só os que têm id de curso do app. */
export const comoCursoId = (c: CursoEstudo): CursoId => c;
