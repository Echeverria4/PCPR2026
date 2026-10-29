/**
 * Progresso da redação: só neste navegador, numa chave própria, sem mexer no Português Inteligente
 * (prf:portugues:v1) nem no banco da PRF (prf:attempts). Só importa tipos, para o card da visão geral
 * não carregar os textos dos temas.
 */
import type { Avaliacao, CampoPlano, CriterioId } from "./tipos";

const CHAVE = "prf:redacao:v1";
export const TOTAL_TEMAS = 25;

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
  feitaEm?: string;
  /** A nota da autoavaliação, guardada ao marcar como feita. */
  nota?: number;
}

export interface ProgressoRedacao {
  temas: Record<number, EstadoTema>;
  /** O tema começado e ainda não feito: é o tema da semana até ser marcado como feito. */
  atual?: number;
  guiaPasso?: number;
  guiaLido?: boolean;
}

const CAMPOS: CampoPlano[] = ["tese", "arg1", "arg2", "repertorio", "proposta"];
const CRITERIOS: CriterioId[] = ["progressao", "conteudo", "coesao", "norma"];
const AVALIACOES: Avaliacao[] = ["sim", "parte", "nao"];

const inteiro = (v: unknown, min: number, max: number) =>
  typeof v === "number" && Number.isInteger(v) && v >= min && v <= max ? v : undefined;

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
  if (typeof t.feitaEm === "string" && !Number.isNaN(Date.parse(t.feitaEm))) out.feitaEm = t.feitaEm;
  const nota = inteiro(t.nota, 0, 20);
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

export function lerProgressoRedacao(): ProgressoRedacao {
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

/**
 * Troca o estado de um tema sem alterar o objeto antigo (o React ainda o guarda). O tema começado
 * (passo 1 em diante) e não feito passa a ser o atual; ao ser marcado como feito, deixa de ser.
 */
export function atualizarTema(n: number, mudar: (t: EstadoTema) => EstadoTema): ProgressoRedacao {
  const p = lerProgressoRedacao();
  const tema = mudar(p.temas[n] ?? {});
  let atual = p.atual;
  if (tema.feitaEm) atual = atual === n ? undefined : atual;
  else if ((tema.passo ?? 0) >= 1) atual = n;
  return salvar({ ...p, temas: { ...p.temas, [n]: tema }, atual });
}

export function salvarPassoGuia(passo: number, chegouAoFim: boolean): ProgressoRedacao {
  const p = lerProgressoRedacao();
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

/** Os temas marcados como feitos nesta semana, em ordem. */
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

/** O tema começado e não feito; sem ele, o primeiro que falta fazer (indefinido quando os 25 estão feitos). */
export function temaDaSemana(p: ProgressoRedacao): number | undefined {
  if (p.atual && !p.temas[p.atual]?.feitaEm) return p.atual;
  for (let n = 1; n <= TOTAL_TEMAS; n++) if (!p.temas[n]?.feitaEm) return n;
  return undefined;
}

export const contaFeitas = (p: ProgressoRedacao) => Object.values(p.temas).filter((t) => t.feitaEm).length;
