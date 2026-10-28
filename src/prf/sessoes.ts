import { embaralharAlternativas, shuffle } from "../lib/quizEngine";
import { PRF_MATERIAS, type MateriaPrfId, type QuestaoPrf } from "../data/prf";
import { BANCO_PRF, QUESTOES_PRF_POR_MATERIA } from "./questoes";
import { QUESTOES_PRF_PROVA_2014 } from "./questoes/provaPrf2014";
import { PROVA_PF2025_COMPLETA } from "./questoes/provaPf2025";
import { getErradasPrf, type TentativaPrf } from "./armazenamento";

export function sessaoMateriaPrf(materia: MateriaPrfId, quantidade = 10): QuestaoPrf[] {
  const banco = QUESTOES_PRF_POR_MATERIA[materia] ?? [];
  return shuffle(banco).slice(0, quantidade).map(embaralharAlternativas);
}

/**
 * Simulado na proporção da prova de 2014 (12 de Português e 6 de cada outra matéria).
 * Se o banco de uma matéria ainda tiver menos questões, entram todas as que existem.
 */
export function sessaoProvaPrf(): QuestaoPrf[] {
  const questoes = PRF_MATERIAS.flatMap((m) => shuffle(QUESTOES_PRF_POR_MATERIA[m.id] ?? []).slice(0, m.questoes));
  return shuffle(questoes).map(embaralharAlternativas);
}

/** A prova de 2014 inteira, como foi aplicada: as 60 questões na ordem do caderno, alternativas na ordem original. */
export function sessaoProva2014Prf(): QuestaoPrf[] {
  return [...QUESTOES_PRF_PROVA_2014];
}

/** A prova da PF 2025 inteira, como foi aplicada: os 118 itens válidos na ordem do caderno (os anulados ficam fora). */
export function sessaoProvaPf2025Prf(): QuestaoPrf[] {
  return [...PROVA_PF2025_COMPLETA];
}

export function sessaoRevisaoPrf(): QuestaoPrf[] {
  const mapa = new Map(BANCO_PRF.map((q) => [q.id, q]));
  return getErradasPrf()
    .map((id) => mapa.get(id))
    .filter((q): q is QuestaoPrf => Boolean(q))
    .map(embaralharAlternativas);
}

export function sessaoFocoPrf(materia: MateriaPrfId): QuestaoPrf[] {
  return sessaoMateriaPrf(materia, 12);
}

/**
 * Origem como o filtro mostra: as próprias antigas não têm o campo e contam como "banco";
 * "prova" são as originais FGV da PCPR 2026, "prf2014", as da prova PRF 2014 (FUNCAB), "prf2012", os itens da
 * prova PRF 2012 (Cespe/UnB), e "pf2025", os itens da prova PF 2025 (Cebraspe).
 */
export type OrigemFiltroPrf = "banco" | "prova" | "prf2014" | "prf2012" | "pf2025" | "inedita";

export function origemFiltroPrf(q: QuestaoPrf): OrigemFiltroPrf {
  if (q.origem === "prova" && q.prova?.banca === "FUNCAB") return "prf2014";
  if (q.origem === "prova" && q.prova?.banca === "Cespe/UnB") return "prf2012";
  if (q.origem === "prova" && q.prova?.banca === "Cebraspe") return "pf2025";
  return q.origem === "prova" || q.origem === "inedita" ? q.origem : "banco";
}

/** Situação pela última resposta dada à questão; "revisao" = está na fila dos errados. */
export type SituacaoFiltroPrf = "nunca" | "errada" | "acertada" | "revisao";

/** "todos"/"todas" = sem filtro; materias vazio = todas as matérias. */
export interface FiltrosPrf {
  materias: MateriaPrfId[];
  topico: string | "todos";
  origem: OrigemFiltroPrf | "todas";
  situacao: SituacaoFiltroPrf | "todas";
  quantidade: number | "todas";
  /** Só o atalho dos erros recorrentes usa; o painel não tem esse filtro. */
  subassunto?: string;
}

export const FILTROS_PRF_PADRAO: FiltrosPrf = {
  materias: [],
  topico: "todos",
  origem: "todas",
  situacao: "todas",
  quantidade: 10,
};

/** Última resposta dada a cada questão (true = acertou). */
export function ultimaRespostaPrf(tentativas: TentativaPrf[]): Map<string, boolean> {
  const ultima = new Map<string, boolean>();
  for (const t of tentativas) ultima.set(t.questionId, t.acertou);
  return ultima;
}

export function filtrarBancoPrf(f: FiltrosPrf, tentativas: TentativaPrf[], revisao: string[]): QuestaoPrf[] {
  const ultima = ultimaRespostaPrf(tentativas);
  const naRevisao = new Set(revisao);
  return BANCO_PRF.filter((q) => {
    if (f.materias.length > 0 && !f.materias.includes(q.materia)) return false;
    if (f.topico !== "todos" && q.topico !== f.topico) return false;
    if (f.subassunto && q.subassunto !== f.subassunto) return false;
    if (f.origem !== "todas" && origemFiltroPrf(q) !== f.origem) return false;
    const u = ultima.get(q.id);
    if (f.situacao === "nunca" && u !== undefined) return false;
    if (f.situacao === "errada" && u !== false) return false;
    if (f.situacao === "acertada" && u !== true) return false;
    if (f.situacao === "revisao" && !naRevisao.has(q.id)) return false;
    return true;
  });
}

export function sessaoPersonalizadaPrf(f: FiltrosPrf, tentativas: TentativaPrf[]): QuestaoPrf[] {
  const lista = shuffle(filtrarBancoPrf(f, tentativas, getErradasPrf()));
  return (f.quantidade === "todas" ? lista : lista.slice(0, f.quantidade)).map(embaralharAlternativas);
}

export interface ErroRecorrentePrf {
  materia: MateriaPrfId;
  topico: string;
  subassunto?: string;
  erros: number;
}

/** Assuntos (tópico › subassunto) errados duas vezes ou mais, do mais errado para o menos. */
export function errosRecorrentesPrf(tentativas: TentativaPrf[], minimo = 2): ErroRecorrentePrf[] {
  const mapa = new Map(BANCO_PRF.map((q) => [q.id, q]));
  const contagem = new Map<string, ErroRecorrentePrf>();
  for (const t of tentativas) {
    const q = mapa.get(t.questionId);
    if (t.acertou || !q) continue;
    const chave = `${q.materia}|${q.topico}|${q.subassunto ?? ""}`;
    const atual = contagem.get(chave) ?? { materia: q.materia, topico: q.topico, subassunto: q.subassunto, erros: 0 };
    atual.erros++;
    contagem.set(chave, atual);
  }
  return [...contagem.values()].filter((e) => e.erros >= minimo).sort((a, b) => b.erros - a.erros);
}
