import { embaralharAlternativas, shuffle } from "../lib/quizEngine";
import type { Dificuldade } from "../lib/types";
import { PRF_MATERIAS, type MateriaPrfId, type QuestaoPrf } from "../data/prf";
import { BANCO_PRF, QUESTOES_PRF_POR_MATERIA } from "./questoes";
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

/** Origem como o filtro mostra: as próprias antigas não têm o campo e contam como "banco". */
export type OrigemFiltroPrf = "banco" | "prova" | "inedita";

/** Situação pela última resposta dada à questão; "revisao" = está na fila dos errados. */
export type SituacaoFiltroPrf = "nunca" | "errada" | "acertada" | "revisao";

/** "todos" = sem filtro; null no nível = questão ainda sem nível. */
export interface FiltrosPrf {
  materia: MateriaPrfId | "todas";
  topico: string | "todos";
  subassunto: string | "todos";
  origem: OrigemFiltroPrf | "todas";
  dificuldade: Dificuldade | "sem" | "todos";
  situacao: SituacaoFiltroPrf | "todas";
  quantidade: number | "todas";
}

export const FILTROS_PRF_PADRAO: FiltrosPrf = {
  materia: "todas",
  topico: "todos",
  subassunto: "todos",
  origem: "todas",
  dificuldade: "todos",
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
    if (f.materia !== "todas" && q.materia !== f.materia) return false;
    if (f.topico !== "todos" && q.topico !== f.topico) return false;
    if (f.subassunto !== "todos" && q.subassunto !== f.subassunto) return false;
    if (f.origem !== "todas" && (q.origem ?? "banco") !== f.origem) return false;
    if (f.dificuldade === "sem" && q.dificuldade !== undefined) return false;
    if (typeof f.dificuldade === "number" && q.dificuldade !== f.dificuldade) return false;
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
