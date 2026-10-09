/** PRF — Agente Administrativo. O novo concurso ainda não tem edital: a referência é o último, o 01/2014. */
export interface MateriaPrf {
  id: string;
  nome: string;
  /** Questões da matéria na prova de 2014. */
  questoes: number;
  /** Valor de cada questão na prova de 2014. */
  peso: number;
  cor: string;
}

export const PRF_SITUACAO = {
  texto: "sem edital e sem banca definida",
  em: "09/10/2026",
};

export const PRF_ULTIMO_EDITAL = {
  ano: 2014,
  banca: "FUNCAB",
  vagas: 216,
  totalQuestoes: 60,
  alternativas: 5,
  pontos: 90,
  /** Abaixo deste percentual dos pontos, o candidato era eliminado. */
  minimoPct: 30,
};

export const PRF_MATERIAS: MateriaPrf[] = [
  { id: "pt", nome: "Língua Portuguesa", questoes: 12, peso: 2, cor: "#E8A825" },
  { id: "etica", nome: "Ética e Conduta Pública", questoes: 6, peso: 1, cor: "#B14FE3" },
  { id: "rlm", nome: "Raciocínio Lógico", questoes: 6, peso: 1, cor: "#4FE37C" },
  { id: "con", nome: "Direito Constitucional", questoes: 6, peso: 1.5, cor: "#8a6a1f" },
  { id: "adm", nome: "Direito Administrativo", questoes: 6, peso: 1.5, cor: "#4F7CE3" },
  { id: "administracao", nome: "Administração", questoes: 6, peso: 1.5, cor: "#E34F9E" },
  { id: "arq", nome: "Arquivologia", questoes: 6, peso: 1.5, cor: "#4FE3C2" },
  { id: "info", nome: "Informática", questoes: 6, peso: 1.5, cor: "#4FA3E3" },
  { id: "leg", nome: "Legislação da PRF", questoes: 6, peso: 1.5, cor: "#E36B4F" },
];
