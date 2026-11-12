/** O que a pessoa já revisou nos mapas. Fica só neste navegador. */
const CHAVE = "curso:prf-policial:mapas:v1";

export interface ProgressoMapas {
  /** Id da aula → dia e hora (ISO) em que o mapa foi marcado como revisado. */
  revisados: Record<string, string>;
  /** Último modo usado: true = modo memória (folhas escondidas). */
  memoria: boolean;
}

function limpar(bruto: unknown): ProgressoMapas {
  const p: ProgressoMapas = { revisados: {}, memoria: false };
  if (!bruto || typeof bruto !== "object") return p;
  const o = bruto as { revisados?: unknown; memoria?: unknown };
  if (o.revisados && typeof o.revisados === "object") {
    for (const [aula, quando] of Object.entries(o.revisados as Record<string, unknown>)) {
      if (typeof quando === "string" && quando) p.revisados[aula] = quando;
    }
  }
  p.memoria = o.memoria === true;
  return p;
}

// Cópia em memória: se o navegador bloquear o armazenamento, a marcação vale até a página fechar.
let memoria: ProgressoMapas | null = null;

export function lerProgresso(): ProgressoMapas {
  if (memoria) return memoria;
  let lido: unknown = null;
  try {
    const bruto = localStorage.getItem(CHAVE);
    lido = bruto ? JSON.parse(bruto) : null;
  } catch {
    lido = null;
  }
  memoria = limpar(lido);
  return memoria;
}

function salvar(p: ProgressoMapas): ProgressoMapas {
  memoria = p;
  try {
    localStorage.setItem(CHAVE, JSON.stringify(p));
  } catch {
    // Sem espaço ou sem permissão: segue com a cópia em memória.
  }
  return p;
}

/** Marca ou desmarca o mapa da aula como revisado. */
export function alternarRevisado(aula: string): ProgressoMapas {
  const atual = lerProgresso();
  const revisados = { ...atual.revisados };
  if (revisados[aula]) delete revisados[aula];
  else revisados[aula] = new Date().toISOString();
  return salvar({ ...atual, revisados });
}

export function salvarModoMemoria(ligado: boolean): ProgressoMapas {
  return salvar({ ...lerProgresso(), memoria: ligado });
}
