import { gruposAtuais } from "../aulas/catalogo";
import { quandoVisto, tempoAtivo, type EstadoEstudo } from "../aulas/estudo";
import type { Dia } from "../aulas/GraficoDias";
import { acharAula, progresso } from "../aulas/progresso";
import type { AulaCurso, GrupoCurso } from "../aulas/tipos";
import { inicioSemana, maisDias } from "../semana/base";
import type { QuestaoCurso, TentativaCurso } from "./completo/tipos";

/*
 * Acompanhamento semanal dos cursos sem banco de questões: soma, de segunda a domingo, o tempo do cronômetro e os
 * vídeos e PDFs marcados. As linhas são as matérias do curso (os grupos das aulas).
 */

export interface LinhaGrupo {
  grupo: GrupoCurso;
  ms: number;
  blocos: number;
}

export interface AulaConcluida {
  grupo: GrupoCurso;
  aula: AulaCurso;
}

export interface ResumoSemanaCurso {
  /** Horas líquidas: tempo do cronômetro, sem as pausas. */
  ms: number;
  /** Parte do tempo sem aula escolhida (estudo livre). */
  livreMs: number;
  dias: Dia[];
  blocos: number;
  aulas: AulaConcluida[];
  /** Matérias com todas as aulas vistas, a última delas nesta semana. */
  materiasConcluidas: GrupoCurso[];
  /** Uma linha por matéria, na ordem do curso. */
  materias: LinhaGrupo[];
}

/** Bloco → matéria, refeito quando o curso muda. */
let indice: { grupos: GrupoCurso[]; porBloco: Map<string, GrupoCurso> } | null = null;

function grupoDoBloco() {
  const grupos = gruposAtuais();
  if (indice?.grupos === grupos) return indice.porBloco;
  const porBloco = new Map<string, GrupoCurso>();
  for (const grupo of grupos) {
    for (const aula of grupo.aulas) for (const b of aula.blocos) porBloco.set(b.id, grupo);
  }
  indice = { grupos, porBloco };
  return porBloco;
}

export interface DificuldadeCurso {
  materia: string;
  topico: string;
  total: number;
  erros: number;
}

export interface QuestoesSemana {
  questoes: number;
  acertos: number;
  porMateria: Map<string, { questoes: number; acertos: number }>;
  /** Assuntos com acerto de até 70%, do mais errado para o menos. */
  dificuldades: DificuldadeCurso[];
}

const ERRO_MINIMO = 0.3;

/** A parte das questões da semana, nos cursos que têm banco. */
export function questoesDaSemana(
  tentativas: TentativaCurso[],
  questao: Map<string, QuestaoCurso>,
  inicio: number,
): QuestoesSemana {
  const fim = maisDias(inicio, 7);
  const r: QuestoesSemana = { questoes: 0, acertos: 0, porMateria: new Map(), dificuldades: [] };
  const porAssunto = new Map<string, DificuldadeCurso>();
  for (const t of tentativas) {
    const ms = Date.parse(t.respondidaEm);
    if (!(ms >= inicio && ms < fim)) continue;
    r.questoes++;
    if (t.acertou) r.acertos++;
    const linha = r.porMateria.get(t.materia) ?? { questoes: 0, acertos: 0 };
    linha.questoes++;
    if (t.acertou) linha.acertos++;
    r.porMateria.set(t.materia, linha);
    const q = questao.get(t.questionId);
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

export function resumoSemanaCurso(e: EstadoEstudo, inicio: number, agora: number): ResumoSemanaCurso {
  const fim = maisDias(inicio, 7);
  const dentro = (ms: number) => ms >= inicio && ms < fim;
  const grupos = gruposAtuais();
  const linhas = new Map<string, LinhaGrupo>(grupos.map((grupo) => [grupo.id, { grupo, ms: 0, blocos: 0 }]));
  const dias: Dia[] = Array.from({ length: 7 }, (_, i) => ({ dia: maisDias(inicio, i), ms: 0 }));
  const r: ResumoSemanaCurso = {
    ms: 0,
    livreMs: 0,
    dias,
    blocos: 0,
    aulas: [],
    materiasConcluidas: [],
    materias: [...linhas.values()],
  };

  // A sessão conta no dia em que começou, como no cronômetro.
  const somaTempo = (comeco: number, ms: number, aula?: string) => {
    if (!dentro(comeco)) return;
    r.ms += ms;
    let i = dias.length - 1;
    while (i > 0 && comeco < dias[i].dia) i--;
    dias[i].ms += ms;
    const linha = linhas.get(acharAula(aula)?.grupo.id ?? "");
    if (linha) linha.ms += ms;
    else r.livreMs += ms;
  };
  for (const s of e.sessoes) somaTempo(s.inicio, s.ms, s.aula);
  if (e.ativo) somaTempo(e.ativo.inicio, tempoAtivo(e.ativo, agora), e.ativo.aula);

  const vistos = new Set(e.vistos);
  const porBloco = grupoDoBloco();
  for (const id of vistos) {
    const grupo = porBloco.get(id);
    if (!grupo || !dentro(quandoVisto(e, id))) continue;
    r.blocos++;
    const linha = linhas.get(grupo.id);
    if (linha) linha.blocos++;
  }
  for (const grupo of grupos) {
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
      if (dentro(em)) r.aulas.push({ grupo, aula });
    }
    if (todas && dentro(ultima)) r.materiasConcluidas.push(grupo);
  }
  return r;
}

/** Semana do primeiro registro (tempo, bloco ou questão); null quando ainda não há nada. */
export function primeiraSemanaCurso(e: EstadoEstudo, tentativas: TentativaCurso[] = []): number | null {
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

/** Vídeos e PDFs do curso já marcados, de todas as semanas. */
export function blocosDoCurso(e: EstadoEstudo) {
  const porBloco = grupoDoBloco();
  return { feitos: new Set(e.vistos.filter((id) => porBloco.has(id))).size, total: porBloco.size };
}
