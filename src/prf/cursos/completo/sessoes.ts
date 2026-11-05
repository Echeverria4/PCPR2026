import { embaralharAlternativas, shuffle } from "../../../lib/quizEngine";
import type { Question } from "../../../lib/types";
import type { BancoCurso, QuestaoCurso, TentativaCurso } from "./tipos";

/** Fixação no fim da aula: 5 questões sorteadas só entre as da própria aula. */
export const QUESTOES_POR_AULA = 5;
export const TAMANHO_SIMULADO = 40;

type Sessao = Question<string>[];

const porAulaCache = new WeakMap<BancoCurso, Map<string, QuestaoCurso[]>>();

export function questoesDaAula(b: BancoCurso, aula: string): QuestaoCurso[] {
  let mapa = porAulaCache.get(b);
  if (!mapa) {
    mapa = new Map();
    for (const q of b.questoes) mapa.set(q.aula, [...(mapa.get(q.aula) ?? []), q]);
    porAulaCache.set(b, mapa);
  }
  return mapa.get(aula) ?? [];
}

export const questoesDaMateria = (b: BancoCurso, materia: string) => b.questoes.filter((q) => q.materia === materia);

export function sessaoMateria(b: BancoCurso, materia: string, quantidade = 10): Sessao {
  return shuffle(questoesDaMateria(b, materia)).slice(0, quantidade).map(embaralharAlternativas);
}

/** Simulado misto: a mesma parte de cada matéria que já tem questões. */
export function sessaoSimulado(b: BancoCurso, quantidade = TAMANHO_SIMULADO): Sessao {
  const materias = [...new Set(b.questoes.map((q) => q.materia))];
  if (materias.length === 0) return [];
  const cota = Math.ceil(quantidade / materias.length);
  const questoes = materias.flatMap((m) => shuffle(questoesDaMateria(b, m)).slice(0, cota));
  return shuffle(questoes).slice(0, quantidade).map(embaralharAlternativas);
}

export function sessaoRevisao(b: BancoCurso, erradas: string[]): Sessao {
  const mapa = new Map(b.questoes.map((q) => [q.id, q]));
  return erradas
    .map((id) => mapa.get(id))
    .filter((q): q is QuestaoCurso => Boolean(q))
    .map(embaralharAlternativas);
}

/** Situação pela última resposta dada à questão; "revisao" = está na fila dos errados. */
export type SituacaoFiltro = "nunca" | "errada" | "acertada" | "revisao";

/** "todas" = sem filtro; materias vazio = todas as matérias. */
export interface FiltrosCurso {
  materias: string[];
  /** Assuntos marcados, com a matéria (`chaveAssunto`); a matéria sem nenhum assunto marcado entra inteira. */
  topicos: string[];
  situacao: SituacaoFiltro | "todas";
  quantidade: number | "todas";
  /** Só o atalho dos erros recorrentes usa; o painel não tem esse filtro. */
  subassunto?: string;
}

export const FILTROS_PADRAO: FiltrosCurso = { materias: [], topicos: [], situacao: "todas", quantidade: 10 };

/** Dois cursos da mesma matéria podem repetir o nome do assunto: a chave leva a matéria junto. */
export const chaveAssunto = (materia: string, topico: string) => `${materia}|${topico}`;
export const materiaDoAssunto = (chave: string) => chave.slice(0, chave.indexOf("|"));

/** Última resposta dada a cada questão (true = acertou). */
export function ultimaResposta(tentativas: TentativaCurso[]): Map<string, boolean> {
  const ultima = new Map<string, boolean>();
  for (const t of tentativas) ultima.set(t.questionId, t.acertou);
  return ultima;
}

export function filtrarBanco(
  b: BancoCurso,
  f: FiltrosCurso,
  tentativas: TentativaCurso[],
  revisao: string[],
): QuestaoCurso[] {
  const ultima = ultimaResposta(tentativas);
  const naRevisao = new Set(revisao);
  const marcados = new Set(f.topicos);
  const materiasComAssunto = new Set(f.topicos.map(materiaDoAssunto));
  return b.questoes.filter((q) => {
    if (f.materias.length > 0 && !f.materias.includes(q.materia)) return false;
    if (materiasComAssunto.has(q.materia) && !marcados.has(chaveAssunto(q.materia, q.topico))) return false;
    if (f.subassunto && q.subassunto !== f.subassunto) return false;
    const u = ultima.get(q.id);
    if (f.situacao === "nunca" && u !== undefined) return false;
    if (f.situacao === "errada" && u !== false) return false;
    if (f.situacao === "acertada" && u !== true) return false;
    if (f.situacao === "revisao" && !naRevisao.has(q.id)) return false;
    return true;
  });
}

export function sessaoPersonalizada(
  b: BancoCurso,
  f: FiltrosCurso,
  tentativas: TentativaCurso[],
  revisao: string[],
): Sessao {
  const lista = shuffle(filtrarBanco(b, f, tentativas, revisao));
  return (f.quantidade === "todas" ? lista : lista.slice(0, f.quantidade)).map(embaralharAlternativas);
}

/** Sorteio dentro da aula: primeiro as nunca respondidas, depois as erradas na última vez, por fim as acertadas. */
export function sessaoFixacao(b: BancoCurso, aula: string, quantidade: number, tentativas: TentativaCurso[]): Sessao {
  const ultima = ultimaResposta(tentativas);
  const ordem = (q: QuestaoCurso) => {
    const u = ultima.get(q.id);
    return u === undefined ? 0 : u ? 2 : 1;
  };
  const lista = shuffle(questoesDaAula(b, aula)).sort((x, y) => ordem(x) - ordem(y));
  return shuffle(lista.slice(0, quantidade)).map(embaralharAlternativas);
}

export interface ErroRecorrente {
  materia: string;
  topico: string;
  subassunto?: string;
  erros: number;
}

/** Assuntos (tópico › subassunto) errados duas vezes ou mais, do mais errado para o menos. */
export function errosRecorrentes(b: BancoCurso, tentativas: TentativaCurso[], minimo = 2): ErroRecorrente[] {
  const mapa = new Map(b.questoes.map((q) => [q.id, q]));
  const contagem = new Map<string, ErroRecorrente>();
  for (const t of tentativas) {
    const q = mapa.get(t.questionId);
    if (t.acertou || !q) continue;
    const chave = `${q.materia}|${q.topico}|${q.subassunto ?? ""}`;
    const atual = contagem.get(chave) ?? { materia: q.materia, topico: q.topico, subassunto: q.subassunto, erros: 0 };
    atual.erros++;
    contagem.set(chave, atual);
  }
  return [...contagem.values()].filter((e) => e.erros >= minimo).sort((x, y) => y.erros - x.erros);
}
