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

export interface Question {
  id: string;
  materia: SubjectId;
  topico: string;
  enunciado: string;
  alternativas: [string, string, string, string, string];
  correta: 0 | 1 | 2 | 3 | 4;
  explicacao: string;
  origem?: "banco" | "ia";
}

export interface ConteudoTopico {
  materia: SubjectId;
  topico: string;
  texto: string;
  exemplos?: [string, string];
  curiosidade?: string;
}

export interface VideoRecurso {
  titulo: string;
  canal: string;
  url: string;
  dica?: string;
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

export interface ProvaRealResultado {
  acertos: number;
  total: number;
  quando: string;
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

export type QuizMode = "materia" | "prova" | "revisao" | "treino-alvo";

export interface AttemptRecord {
  questionId: string;
  materia: SubjectId;
  acertou: boolean;
  respondidaEm: string;
}

export interface SubjectStats {
  materia: SubjectId;
  respondidas: number;
  acertos: number;
  acuracia: number;
}

export interface QuizSessionResult {
  mode: QuizMode;
  total: number;
  acertos: number;
  respostas: AttemptRecord[];
  iniciadoEm: string;
  finalizadoEm: string;
}
