import type { AttemptRecord, Question } from "../../../lib/types";
import type { ComponentType } from "react";
import type { TelaAulas } from "../../aulas/AulasCurso";
import type { ExemploResolvido, ResumoAula } from "../../aulas/resumos/tipos";
import type { GrupoCurso } from "../../aulas/tipos";
import type { TelaMapas } from "./prf-policial/mapas/tipos";
import type { TelaRedacaoPrf } from "./prf-policial/redacao/tipos";

/**
 * Curso completo: as aulas de `src/prf/cursos/dados/` mais banco de questões e resumos. A matéria da questão é o id
 * do grupo de aulas, e a aula vem do arquivo em que ela foi escrita, então a fixação nunca depende do nome do assunto.
 */
export type QuestaoCurso = Question<string> & { aula: string };

/** Como a questão é escrita no arquivo da aula: id, matéria, origem e aula entram ao montar o banco. */
export type QuestaoEscrita = Omit<QuestaoCurso, "id" | "materia" | "origem" | "aula">;

export interface AulaEscrita {
  /** Id da aula na lista do curso (pt-01, rlm-12…). */
  aula: string;
  resumo: ResumoAula;
  questoes: QuestaoEscrita[];
}

export interface BancoCurso {
  questoes: QuestaoCurso[];
  resumos: Record<string, ResumoAula>;
}

export interface DadosCursoCompleto {
  banco: BancoCurso;
  /** Grupos só de leitura, sem resumo nem questões, como o Nivelamento da PRF ADM. */
  semQuestoes: string[];
  /** Faixa do alto da aba Treino. */
  faixa: { forte: string; texto: string }[];
  /** Aba de redação do curso, carregada só quando aberta; sem ela, o curso não mostra a aba. */
  redacao?: () => Promise<{ default: ComponentType<PropsRedacao> }>;
  /** Aba de mapas mentais, carregada só quando aberta; sem ela, o curso não mostra a aba. */
  mapas?: () => Promise<{ default: ComponentType<PropsMapas> }>;
}

export interface PropsRedacao {
  tela: TelaRedacaoPrf;
  onTela: (t: TelaRedacaoPrf) => void;
}

export interface PropsMapas {
  tela: TelaMapas;
  onTela: (t: TelaMapas) => void;
  /** Os grupos de aulas do curso, na ordem do catálogo: a aba mostra só os que têm mapa. */
  grupos: GrupoCurso[];
  onAbrirAula: (tela: TelaAulas) => void;
}

export type TentativaCurso = AttemptRecord<string>;

/** O id vem da posição da questão no arquivo: questão nova entra sempre no fim, para o progresso não trocar de questão. */
export function montarBanco(prefixo: string, materias: Record<string, AulaEscrita[]>): BancoCurso {
  const questoes: QuestaoCurso[] = [];
  const resumos: Record<string, ResumoAula> = {};
  for (const [materia, aulas] of Object.entries(materias)) {
    for (const a of aulas) {
      resumos[a.aula] = a.resumo;
      a.questoes.forEach((q, i) => {
        const id = `${prefixo}-${a.aula}-${String(i + 1).padStart(2, "0")}`;
        questoes.push({ ...q, id, materia, origem: "banco", aula: a.aula });
      });
    }
  }
  return { questoes, resumos };
}

/** Junta às aulas os exemplos resolvidos das fórmulas, escritos à parte por aula. */
export function comExemplos(aulas: AulaEscrita[], exemplos: Record<string, ExemploResolvido[]>): AulaEscrita[] {
  return aulas.map((a) => (exemplos[a.aula] ? { ...a, resumo: { ...a.resumo, exemplos: exemplos[a.aula] } } : a));
}
