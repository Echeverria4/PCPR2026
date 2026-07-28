import type { Question, SubjectId } from "./types";
import { BANCO, QUESTOES_POR_MATERIA } from "../data/questions";
import { PROVA_MIX } from "../data/subjects";
import { getWrongQueue } from "./storage";

export function shuffle<T>(arr: T[]): T[] {
  const copia = [...arr];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/**
 * Embaralha a ordem das 5 alternativas de uma questão (e remapeia o índice
 * da correta) sem tocar no banco original. Sem isso, o gabarito do banco
 * fica concentrado nas mesmas letras (ex.: maioria em B), criando um padrão
 * explorável em vez de exigir conhecimento real do conteúdo.
 */
function embaralharAlternativas(q: Question): Question {
  const indices = shuffle([0, 1, 2, 3, 4]);
  const alternativas = indices.map((i) => q.alternativas[i]) as Question["alternativas"];
  const correta = indices.indexOf(q.correta) as Question["correta"];
  return { ...q, alternativas, correta };
}

export function buildSessaoMateria(materia: SubjectId, quantidade = 10): Question[] {
  const banco = QUESTOES_POR_MATERIA[materia] ?? [];
  return shuffle(banco)
    .slice(0, Math.min(quantidade, banco.length))
    .map(embaralharAlternativas);
}

/**
 * Monta um simulado tentando respeitar a proporção oficial de questões por matéria
 * (PROVA_MIX). Quando o banco de uma matéria ainda não tem questões suficientes,
 * usa todas as disponíveis — a prova fica menor que 100 até o banco crescer.
 */
export function buildSessaoProva(): Question[] {
  const questoes: Question[] = [];
  (Object.keys(PROVA_MIX) as SubjectId[]).forEach((materia) => {
    const banco = QUESTOES_POR_MATERIA[materia] ?? [];
    const alvo = PROVA_MIX[materia];
    questoes.push(...shuffle(banco).slice(0, Math.min(alvo, banco.length)));
  });
  return shuffle(questoes).map(embaralharAlternativas);
}

export function buildSessaoRevisao(): Question[] {
  const idsErrados = getWrongQueue();
  const mapa = new Map(BANCO.map((q) => [q.id, q]));
  return idsErrados
    .map((id) => mapa.get(id))
    .filter((q): q is Question => Boolean(q))
    .map(embaralharAlternativas);
}

export function buildSessaoTreinoAlvo(materiaAlvo: SubjectId, quantidade = 12): Question[] {
  return buildSessaoMateria(materiaAlvo, quantidade);
}
