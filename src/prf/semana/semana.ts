import { PRF_MATERIAS, type MateriaPrfId } from "../../data/prf";
import type { TentativaPrf } from "../armazenamento";
import { BANCO_PRF } from "../questoes";
import { AULAS_DRIVE, type AulaDrive, type GrupoAulasDrive } from "../aulas/aulasDrive";
import { quandoVisto, tempoAtivo, type EstadoEstudo } from "../aulas/estudo";
import type { Dia } from "../aulas/GraficoDias";
import { acharAula, progresso } from "../aulas/progresso";
import { inicioSemana, maisDias } from "./base";

export { chaveSemana, gravarNotas, inicioSemana, lerNotas, maisDias, type NotasSemana } from "./base";

/*
 * Acompanhamento semanal da PRF: soma, de segunda a domingo, o que já fica guardado no aparelho
 * (cronômetro e blocos vistos em prf:estudo:v1, respostas em prf:attempts). As anotações da
 * semana ficam numa chave própria, prf:semana:v1.
 */

export interface LinhaMateria {
  materia: MateriaPrfId;
  ms: number;
  blocos: number;
  aulas: number;
  questoes: number;
  acertos: number;
}

export interface Dificuldade {
  materia: MateriaPrfId;
  topico: string;
  total: number;
  erros: number;
}

export interface AulaConcluida {
  grupo: GrupoAulasDrive;
  aula: AulaDrive;
}

export interface ResumoSemana {
  inicio: number;
  /** Horas líquidas: tempo do cronômetro, sem as pausas. */
  ms: number;
  /** Parte do tempo sem aula escolhida (estudo livre). */
  livreMs: number;
  dias: Dia[];
  blocos: number;
  aulas: AulaConcluida[];
  /** Matérias com todas as aulas vistas, a última delas nesta semana. */
  materiasConcluidas: GrupoAulasDrive[];
  questoes: number;
  acertos: number;
  /** Uma linha por matéria, na ordem do edital. */
  materias: LinhaMateria[];
  /** Assuntos com acerto de até 70%, do mais errado para o menos. */
  dificuldades: Dificuldade[];
}

const AULA_DO_BLOCO = new Map<string, AulaConcluida>();
for (const grupo of AULAS_DRIVE) {
  for (const aula of grupo.aulas) for (const b of aula.blocos) AULA_DO_BLOCO.set(b.id, { grupo, aula });
}
const QUESTAO_POR_ID = new Map(BANCO_PRF.map((q) => [q.id, q]));

/** Assunto entra nas dificuldades com acerto de até 70%. */
const ERRO_MINIMO = 0.3;

export function resumoSemana(e: EstadoEstudo, tentativas: TentativaPrf[], inicio: number, agora: number): ResumoSemana {
  const fim = maisDias(inicio, 7);
  const dentro = (ms: number) => ms >= inicio && ms < fim;
  const linhas = new Map<MateriaPrfId, LinhaMateria>(
    PRF_MATERIAS.map((m) => [m.id, { materia: m.id, ms: 0, blocos: 0, aulas: 0, questoes: 0, acertos: 0 }]),
  );
  const dias: Dia[] = Array.from({ length: 7 }, (_, i) => ({ dia: maisDias(inicio, i), ms: 0 }));
  const r: ResumoSemana = {
    inicio,
    ms: 0,
    livreMs: 0,
    dias,
    blocos: 0,
    aulas: [],
    materiasConcluidas: [],
    questoes: 0,
    acertos: 0,
    materias: [...linhas.values()],
    dificuldades: [],
  };

  // 1. Horas líquidas. A sessão conta no dia em que começou, como no cronômetro.
  const somaTempo = (comeco: number, ms: number, aula?: string) => {
    if (!dentro(comeco)) return;
    r.ms += ms;
    let i = dias.length - 1;
    while (i > 0 && comeco < dias[i].dia) i--;
    dias[i].ms += ms;
    const materia = acharAula(aula)?.aula.materia as MateriaPrfId | undefined;
    const linha = materia && linhas.get(materia);
    if (linha) linha.ms += ms;
    else r.livreMs += ms;
  };
  for (const s of e.sessoes) somaTempo(s.inicio, s.ms, s.aula);
  if (e.ativo) somaTempo(e.ativo.inicio, tempoAtivo(e.ativo, agora), e.ativo.aula);

  // 2. Blocos marcados nesta semana, e aulas e matérias que ficaram completas nela.
  const vistos = new Set(e.vistos);
  for (const id of vistos) {
    const local = AULA_DO_BLOCO.get(id);
    if (!local || !dentro(quandoVisto(e, id))) continue;
    r.blocos++;
    const linha = linhas.get(local.aula.materia);
    if (linha) linha.blocos++;
  }
  for (const grupo of AULAS_DRIVE) {
    let todas = grupo.aulas.length > 0;
    let ultima = 0;
    for (const aula of grupo.aulas) {
      if (!progresso(aula, vistos).completa) {
        todas = false;
        continue;
      }
      // A aula fica completa quando o último bloco dela é marcado.
      const em = Math.max(...aula.blocos.map((b) => quandoVisto(e, b.id)));
      ultima = Math.max(ultima, em);
      if (!dentro(em)) continue;
      r.aulas.push({ grupo, aula });
      const linha = linhas.get(aula.materia);
      if (linha) linha.aulas++;
    }
    if (todas && dentro(ultima)) r.materiasConcluidas.push(grupo);
  }

  // 3, 4 e 5. Questões resolvidas, acertos e os assuntos em que mais errou.
  const porAssunto = new Map<string, Dificuldade>();
  for (const t of tentativas) {
    if (!dentro(Date.parse(t.respondidaEm))) continue;
    r.questoes++;
    if (t.acertou) r.acertos++;
    const linha = linhas.get(t.materia);
    if (linha) {
      linha.questoes++;
      if (t.acertou) linha.acertos++;
    }
    const q = QUESTAO_POR_ID.get(t.questionId);
    if (!q) continue;
    const chave = `${q.materia}|${q.topico}`;
    const d = porAssunto.get(chave) ?? { materia: q.materia, topico: q.topico, total: 0, erros: 0 };
    d.total++;
    if (!t.acertou) d.erros++;
    porAssunto.set(chave, d);
  }
  r.dificuldades = [...porAssunto.values()]
    .filter((d) => d.erros > 0 && d.erros / d.total >= ERRO_MINIMO)
    .sort((a, b) => b.erros - a.erros || b.erros / b.total - a.erros / a.total);
  return r;
}

/** Semana do primeiro registro (tempo, bloco ou questão); null quando ainda não há nada. */
export function primeiraSemana(e: EstadoEstudo, tentativas: TentativaPrf[]): number | null {
  let menor = Infinity;
  for (const s of e.sessoes) menor = Math.min(menor, s.inicio);
  if (e.ativo) menor = Math.min(menor, e.ativo.inicio);
  for (const id of e.vistos) menor = Math.min(menor, quandoVisto(e, id));
  for (const t of tentativas) {
    const ms = Date.parse(t.respondidaEm);
    if (!Number.isNaN(ms)) menor = Math.min(menor, ms);
  }
  return Number.isFinite(menor) ? inicioSemana(menor) : null;
}
