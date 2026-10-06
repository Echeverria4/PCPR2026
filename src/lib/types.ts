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
  /** Prova real em que a questão se baseou (ex.: "FGV · PC-AM 2022 · Investigador (adaptada)"). Só preencher quando a questão veio de fato de uma prova consultada. */
  fonte?: string;
}

export interface ConteudoTopico {
  materia: SubjectId;
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
  tempoMs?: number;
  modo?: QuizMode;
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
