/**
 * Progresso da redação da PRF Policial: só neste navegador, numa chave própria do curso, sem mexer
 * no bloco de redação da PMPR (prf:redacao:v1) nem nas questões do curso.
 */
import type { Avaliacao, CampoPlano, CriterioId } from "./tipos";

const CHAVE = "curso:prf-policial:redacao:v1";
export const TOTAL_TEMAS = 13;

export interface EstadoTema {
  /** Tela do passo a passo em que a pessoa parou (0 = abertura). */
  passo?: number;
  plano?: Partial<Record<CampoPlano, string>>;
  /** O texto digitado, só para contar as palavras: a redação de verdade é à mão. */
  texto?: string;
  viuModelo?: boolean;
  avaliacao?: Partial<Record<CriterioId, Avaliacao>>;
  /** Respondeu se aconteceu um dos casos de nota zero (sem resposta, indefinido). */
  zerou?: boolean;
  /** Número de erros (NE) e total de linhas (TL) que a pessoa contou no próprio texto. */
  ne?: number;
  tl?: number;
  feitaEm?: string;
  /** A nota da autoavaliação (NPD, de 0 a 20, com duas casas), guardada ao marcar como feita. */
  nota?: number;
}

export interface ProgressoRedacao {
  temas: Record<number, EstadoTema>;
  /** O tema começado e ainda não feito: é o tema da semana até ser marcado como feito. */
  atual?: number;
  guiaPasso?: number;
  guiaLido?: boolean;
}

const CAMPOS: CampoPlano[] = ["intro", "asp1", "asp2", "asp3", "fecho"];
const CRITERIOS: CriterioId[] = ["estrutura", "asp1", "asp2", "asp3"];
const AVALIACOES: Avaliacao[] = ["sim", "parte", "nao"];

const inteiro = (v: unknown, min: number, max: number) =>
  typeof v === "number" && Number.isInteger(v) && v >= min && v <= max ? v : undefined;

const decimal = (v: unknown, min: number, max: number) =>
  typeof v === "number" && Number.isFinite(v) && v >= min && v <= max ? Math.round(v * 100) / 100 : undefined;

const objeto = (v: unknown) => (v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, unknown>) : null);

function limparTema(v: unknown): EstadoTema | null {
  const t = objeto(v);
  if (!t) return null;
  const out: EstadoTema = {};
  const passo = inteiro(t.passo, 0, 999);
  if (passo !== undefined) out.passo = passo;
  const plano = objeto(t.plano);
  if (plano) {
    out.plano = {};
    for (const c of CAMPOS) if (typeof plano[c] === "string") out.plano[c] = plano[c] as string;
  }
  if (typeof t.texto === "string") out.texto = t.texto;
  if (t.viuModelo === true) out.viuModelo = true;
  const avaliacao = objeto(t.avaliacao);
  if (avaliacao) {
    out.avaliacao = {};
    for (const c of CRITERIOS) {
      const a = avaliacao[c];
      if (AVALIACOES.includes(a as Avaliacao)) out.avaliacao[c] = a as Avaliacao;
    }
  }
  if (typeof t.zerou === "boolean") out.zerou = t.zerou;
  const ne = inteiro(t.ne, 0, 999);
  if (ne !== undefined) out.ne = ne;
  const tl = inteiro(t.tl, 1, 30);
  if (tl !== undefined) out.tl = tl;
  if (typeof t.feitaEm === "string" && !Number.isNaN(Date.parse(t.feitaEm))) out.feitaEm = t.feitaEm;
  const nota = decimal(t.nota, 0, 20);
  if (nota !== undefined) out.nota = nota;
  return out;
}

function limpar(bruto: unknown): ProgressoRedacao {
  const p = objeto(bruto);
  const temas: Record<number, EstadoTema> = {};
  for (const [k, v] of Object.entries(objeto(p?.temas) ?? {})) {
    const n = inteiro(Number(k), 1, TOTAL_TEMAS);
    const t = limparTema(v);
    if (n !== undefined && t) temas[n] = t;
  }
  const atual = inteiro(p?.atual, 1, TOTAL_TEMAS);
  return {
    temas,
    atual: atual !== undefined && !temas[atual]?.feitaEm ? atual : undefined,
    guiaPasso: inteiro(p?.guiaPasso, 0, 999),
    guiaLido: p?.guiaLido === true || undefined,
  };
}

// Também na memória: sem armazenamento, o progresso continua valendo enquanto a página estiver aberta.
let memoria: ProgressoRedacao | null = null;

export function lerProgresso(): ProgressoRedacao {
  if (memoria) return memoria;
  let p: ProgressoRedacao = { temas: {} };
  try {
    const bruto = localStorage.getItem(CHAVE);
    if (bruto) p = limpar(JSON.parse(bruto));
  } catch {
    // Sem armazenamento ou com dado estragado: começa do zero.
  }
  memoria = p;
  return p;
}

function salvar(p: ProgressoRedacao): ProgressoRedacao {
  memoria = p;
  try {
    localStorage.setItem(CHAVE, JSON.stringify(p));
  } catch {
    // Sem armazenamento (aba anônima, cota cheia): o progresso vale só nesta visita.
  }
  return p;
}

/** Troca o estado de um tema sem alterar o objeto antigo; o tema começado e não feito passa a ser o atual. */
export function atualizarTema(n: number, mudar: (t: EstadoTema) => EstadoTema): ProgressoRedacao {
  const p = lerProgresso();
  const tema = mudar(p.temas[n] ?? {});
  let atual = p.atual;
  if (tema.feitaEm) atual = atual === n ? undefined : atual;
  else if ((tema.passo ?? 0) >= 1) atual = n;
  return salvar({ ...p, temas: { ...p.temas, [n]: tema }, atual });
}

export function salvarPassoGuia(passo: number, chegouAoFim: boolean): ProgressoRedacao {
  const p = lerProgresso();
  return salvar({ ...p, guiaPasso: passo, guiaLido: p.guiaLido || chegouAoFim || undefined });
}

/** A semana da meta: de segunda-feira, 0h, até a segunda seguinte (exclusive). */
export function semanaDe(d: Date): { inicio: Date; fim: Date } {
  const inicio = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  inicio.setDate(inicio.getDate() - ((inicio.getDay() + 6) % 7));
  const fim = new Date(inicio);
  fim.setDate(fim.getDate() + 7);
  return { inicio, fim };
}

export function feitasNaSemana(p: ProgressoRedacao, hoje = new Date()): number[] {
  const { inicio, fim } = semanaDe(hoje);
  return Object.entries(p.temas)
    .filter(([, t]) => {
      const em = t.feitaEm ? Date.parse(t.feitaEm) : NaN;
      return em >= inicio.getTime() && em < fim.getTime();
    })
    .map(([n]) => Number(n))
    .sort((a, b) => a - b);
}

/** O tema começado e não feito; sem ele, o primeiro que falta fazer. */
export function temaDaSemana(p: ProgressoRedacao): number | undefined {
  if (p.atual && !p.temas[p.atual]?.feitaEm) return p.atual;
  for (let n = 1; n <= TOTAL_TEMAS; n++) if (!p.temas[n]?.feitaEm) return n;
  return undefined;
}

export const contaFeitas = (p: ProgressoRedacao) => Object.values(p.temas).filter((t) => t.feitaEm).length;
