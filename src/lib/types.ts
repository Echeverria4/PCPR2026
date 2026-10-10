export type SubjectId =
  | "pt"
  | "ti"
  | "for"
  | "leg"
  | "pp"
  | "pen"
  | "con"
  | "adm"
  | "dh"
  | "pr"
  | "cont"
  | "est"
  | "rlm";

export interface Subject {
  id: SubjectId;
  nome: string;
  peso: number;
  cor: string;
  topicos: string[];
}

/** M = ids de matéria do curso (padrão: PCPR). */
export interface Question<M extends string = SubjectId> {
  id: string;
  materia: M;
  topico: string;
  enunciado: string;
  alternativas: [string, string, string, string, string];
  correta: 0 | 1 | 2 | 3 | 4;
  explicacao: string;
  origem?: "banco" | "ia";
  /** Prova real em que a questão se baseou (ex.: "FGV · PC-AM 2022 · Investigador (adaptada)"). Só preencher quando a questão veio de fato de uma prova consultada. */
  fonte?: string;
}

export interface ConteudoTopico<M extends string = SubjectId> {
  materia: M;
  topico: string;
  texto: string;
  exemplos?: [string, string];
  curiosidade?: string;
  origem?: "oficial" | "aposta";
}

export interface ModeloMental {
  topico: string;
  origem: "oficial" | "aposta";
  gancho: string;
  modelo: string;
}

export interface VideoRecurso {
  titulo: string;
  canal: string;
  url: string;
  dica?: string;
  /** Duração como o YouTube mostra (ex.: "45:34"). */
  duracao?: string;
}

export interface ProvaLink {
  label: string;
  url: string;
}

export interface ProvaReal {
  id: string;
  nome: string;
  totalQuestoes: number;
  semana: string;
  detalhe: string;
  links: ProvaLink[];
}

/** Como a FGV cobra a matéria: exibido no topo da aba Conteúdo. */
export interface RaioX {
  resumo: string;
  temasQuentes: string[];
  pegadinhas: string[];
  dicasRetaFinal: string[];
  fontes: ProvaLink[];
}

export interface ProvaRealResultado {
  acertos: number;
  total: number;
  quando: string;
}

/** Uma matéria de prova feita fora do app (prova real no papel, outro site), lançada à mão depois de corrigir. */
export interface ProvaExternaMateria {
  materia: SubjectId;
  questoes: number;
  acertos: number;
  /** Erros que o candidato soube atribuir a um bloco (id do bloco → quantidade); o resto fica sem tópico. */
  errosPorBloco: Record<string, number>;
  /** O que errou, em poucas palavras: vai para o caderno de erros. */
  nota?: string;
}

export interface ProvaExterna {
  id: string;
  nome: string;
  lancadaEm: string;
  materias: ProvaExternaMateria[];
}

/** Formulário de prova de fora ainda não salvo (campos como digitados). */
export interface RascunhoProvaExterna {
  nome: string;
  linhas: Partial<Record<SubjectId, { questoes: string; acertos: string; erros: Record<string, number>; nota: string }>>;
}

export interface TafFaixas {
  ate29: string;
  de30a39: string;
  de40a49: string;
  mais50: string;
}

export interface TafExercicio {
  ordem: string;
  nome: string;
  tentativas: string;
  faixas: TafFaixas;
}

export type QuizMode = "materia" | "prova" | "revisao" | "treino-alvo" | "simulado" | "reforco";

/** Quanto o candidato confiava na resposta, marcado na hora de responder. */
export type Confianca = "certeza" | "duvida" | "chute";

export interface AttemptRecord<M extends string = SubjectId> {
  questionId: string;
  materia: M;
  acertou: boolean;
  respondidaEm: string;
  tempoMs?: number;
  modo?: QuizMode;
  confianca?: Confianca;
}

/** Questão sorteada para o simulado modo prova. ordem[i] = índice original da alternativa mostrada na posição i. */
export interface SimuladoQuestao {
  id: string;
  ordem: number[];
}

export interface SimuladoResposta {
  /** Posição marcada, na ordem mostrada; null = em branco. */
  escolha: number | null;
  confianca?: Confianca;
  tempoMs: number;
  /** "Marcar para revisar" antes de entregar. */
  marcada?: boolean;
  /** Posições riscadas pelo usuário (só visual; não entram na correção). */
  eliminadas?: number[];
}

/** Simulado em andamento: o relógio corre pelo horário de início, mesmo com o app fechado. */
export interface SimuladoAtivo {
  id: string;
  iniciadoEm: string;
  duracaoMin: number;
  questoes: SimuladoQuestao[];
  respostas: SimuladoResposta[];
  atual: number;
}

export interface SimuladoQuestaoResultado {
  id: string;
  materia: SubjectId;
  ordem: number[];
  escolha: number | null;
  acertou: boolean;
  confianca?: Confianca;
  tempoMs: number;
}

export interface SimuladoResultado {
  id: string;
  iniciadoEm: string;
  finalizadoEm: string;
  duracaoMin: number;
  usadoMs: number;
  encerradoPorTempo: boolean;
  questoes: SimuladoQuestaoResultado[];
}

export interface SubjectStats<M extends string = SubjectId> {
  materia: M;
  respondidas: number;
  acertos: number;
  acuracia: number;
}

export interface QuizSessionResult<M extends string = SubjectId> {
  mode: QuizMode;
  total: number;
  acertos: number;
  respostas: AttemptRecord<M>[];
  iniciadoEm: string;
  finalizadoEm: string;
}
