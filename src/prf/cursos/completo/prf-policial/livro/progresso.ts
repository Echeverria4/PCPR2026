/** O que a pessoa já leu no Livro do CTB. Fica só neste navegador. */
const CHAVE = "curso:prf-policial:livro:v1";

export interface ProgressoLivro {
  /** Id do capítulo → dia e hora (ISO) em que foi marcado como lido. */
  lidos: Record<string, string>;
  /** Último modo do mapa do capítulo: true = modo memória. */
  memoria: boolean;
  /** Mostrar as notas de alteração ("Redação dada pela Lei nº…") no texto da lei. */
  notas: boolean;
}

function limpar(bruto: unknown): ProgressoLivro {
  const p: ProgressoLivro = { lidos: {}, memoria: false, notas: false };
  if (!bruto || typeof bruto !== "object") return p;
  const o = bruto as { lidos?: unknown; memoria?: unknown; notas?: unknown };
  if (o.lidos && typeof o.lidos === "object") {
    for (const [cap, quando] of Object.entries(o.lidos as Record<string, unknown>)) {
      if (typeof quando === "string" && quando) p.lidos[cap] = quando;
    }
  }
  p.memoria = o.memoria === true;
  p.notas = o.notas === true;
  return p;
}

// Cópia em memória: se o navegador bloquear o armazenamento, a marcação vale até a página fechar.
let memoria: ProgressoLivro | null = null;

export function lerProgresso(): ProgressoLivro {
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

function salvar(p: ProgressoLivro): ProgressoLivro {
  memoria = p;
  try {
    localStorage.setItem(CHAVE, JSON.stringify(p));
  } catch {
    // Sem espaço ou sem permissão: segue com a cópia em memória.
  }
  return p;
}

/** Marca ou desmarca o capítulo como lido. */
export function alternarLido(cap: string): ProgressoLivro {
  const atual = lerProgresso();
  const lidos = { ...atual.lidos };
  if (lidos[cap]) delete lidos[cap];
  else lidos[cap] = new Date().toISOString();
  return salvar({ ...atual, lidos });
}

export function salvarModoMemoria(ligado: boolean): ProgressoLivro {
  return salvar({ ...lerProgresso(), memoria: ligado });
}

export function salvarNotas(ligado: boolean): ProgressoLivro {
  return salvar({ ...lerProgresso(), notas: ligado });
}
