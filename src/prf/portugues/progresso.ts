/**
 * Progresso do Português Inteligente: só neste navegador, numa chave própria, para não misturar
 * as questões de fixação com o desempenho do banco da PRF (prf:attempts).
 */

const CHAVE = "prf:portugues:v1";
/** Respostas guardadas: as mais antigas saem primeiro. */
const LIMITE_RESPOSTAS = 600;

export interface RespostaPt {
  q: string;
  licao: string;
  acertou: boolean;
  em: string;
}

export interface EstadoPagina {
  vistaEm: string;
  concluidaEm?: string;
  /** Tela do passo a passo em que a pessoa parou (0 = abertura). */
  passo?: number;
}

/** Como as lições e os modelos abrem: passo a passo (o padrão) ou a página inteira. */
export type ModoEstudo = "guiado" | "tudo";

export interface ProgressoPt {
  /** Lições e modelos abertos (vistaEm) e marcados como estudados (concluidaEm). */
  paginas: Record<string, EstadoPagina>;
  ultimo?: { id: string; em: string };
  respostas: RespostaPt[];
  modo?: ModoEstudo;
}

const VAZIO: ProgressoPt = { paginas: {}, respostas: [] };

export function lerProgressoPt(): ProgressoPt {
  try {
    const bruto = localStorage.getItem(CHAVE);
    if (!bruto) return { ...VAZIO, paginas: {}, respostas: [] };
    const p = JSON.parse(bruto) as Partial<ProgressoPt>;
    return {
      paginas: p.paginas && typeof p.paginas === "object" ? p.paginas : {},
      ultimo: p.ultimo && typeof p.ultimo.id === "string" ? p.ultimo : undefined,
      respostas: Array.isArray(p.respostas) ? p.respostas.filter((r) => r && typeof r.q === "string") : [],
      modo: p.modo === "guiado" || p.modo === "tudo" ? p.modo : undefined,
    };
  } catch {
    return { paginas: {}, respostas: [] };
  }
}

function salvar(p: ProgressoPt): ProgressoPt {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(p));
  } catch {
    // Sem armazenamento (aba anônima, cota cheia): o progresso vale só nesta visita.
  }
  return p;
}

export function marcarVistaPt(id: string): ProgressoPt {
  const p = lerProgressoPt();
  const agora = new Date().toISOString();
  p.paginas[id] = { ...p.paginas[id], vistaEm: agora };
  p.ultimo = { id, em: agora };
  return salvar(p);
}

export function marcarConcluidaPt(id: string, concluida: boolean): ProgressoPt {
  const p = lerProgressoPt();
  const atual = p.paginas[id] ?? { vistaEm: new Date().toISOString() };
  if (concluida) p.paginas[id] = { ...atual, concluidaEm: new Date().toISOString() };
  else {
    const { concluidaEm: _, ...resto } = atual;
    p.paginas[id] = resto;
  }
  return salvar(p);
}

/** Guarda a tela do passo a passo em que a pessoa está, para retomar dali. */
export function salvarPassoPt(id: string, passo: number): ProgressoPt {
  const p = lerProgressoPt();
  const agora = new Date().toISOString();
  p.paginas[id] = { ...p.paginas[id], vistaEm: p.paginas[id]?.vistaEm ?? agora, passo };
  p.ultimo = { id, em: agora };
  return salvar(p);
}

export function salvarModoPt(modo: ModoEstudo): ProgressoPt {
  const p = lerProgressoPt();
  p.modo = modo;
  return salvar(p);
}

export function registrarRespostaPt(r: RespostaPt): ProgressoPt {
  const p = lerProgressoPt();
  p.respostas = [...p.respostas, r].slice(-LIMITE_RESPOSTAS);
  return salvar(p);
}

/** A resposta mais recente de cada questão. */
export function ultimaPorQuestao(p: ProgressoPt): Map<string, RespostaPt> {
  const mapa = new Map<string, RespostaPt>();
  for (const r of p.respostas) mapa.set(r.q, r);
  return mapa;
}

/** Questões cuja última resposta foi errada: a base da revisão pelos erros. */
export function idsErradosPt(p: ProgressoPt): Set<string> {
  const ids = new Set<string>();
  for (const [q, r] of ultimaPorQuestao(p)) if (!r.acertou) ids.add(q);
  return ids;
}

/** Estudada há uma semana ou mais, sem fixação desde então: hora de retomar. */
export function precisaRetomar(p: ProgressoPt, id: string, agora = Date.now()): boolean {
  const concluida = p.paginas[id]?.concluidaEm;
  if (!concluida) return false;
  const desde = Date.parse(concluida);
  const umaSemana = 7 * 24 * 3600 * 1000;
  if (agora - desde < umaSemana) return false;
  const ultimaFixacao = p.respostas.filter((r) => r.licao === id).map((r) => Date.parse(r.em));
  return !ultimaFixacao.some((t) => agora - t < umaSemana);
}
