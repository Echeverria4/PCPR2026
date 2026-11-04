// Gerado com os dados dos cursos: só os números da central, para o cartão não baixar a lista das aulas.
export interface MateriaTotal {
  nome: string;
  cor: string;
  videos: number;
  pdfs: number;
}

export interface TotaisCurso {
  materias: MateriaTotal[];
  aulas: number;
  videos: number;
  pdfs: number;
  /** Vídeos e PDFs que contam no progresso. */
  blocos: number;
}

export const TOTAIS_CURSOS: Record<string, TotaisCurso> = {
  "pmpr": {
    "materias": [
      {
        "nome": "Língua Portuguesa",
        "cor": "#E8A825",
        "videos": 62,
        "pdfs": 133
      },
      {
        "nome": "Raciocínio Matemático",
        "cor": "#4FE37C",
        "videos": 106,
        "pdfs": 221
      },
      {
        "nome": "Noções de Informática",
        "cor": "#4FA3E3",
        "videos": 82,
        "pdfs": 150
      },
      {
        "nome": "Constituição Federal",
        "cor": "#8a6a1f",
        "videos": 23,
        "pdfs": 53
      },
      {
        "nome": "Direitos Humanos",
        "cor": "#7CC8E8",
        "videos": 12,
        "pdfs": 26
      },
      {
        "nome": "Geografia",
        "cor": "#4FC3A1",
        "videos": 66,
        "pdfs": 150
      },
      {
        "nome": "História",
        "cor": "#C98F5A",
        "videos": 107,
        "pdfs": 218
      },
      {
        "nome": "Legislação",
        "cor": "#4F7CE3",
        "videos": 73,
        "pdfs": 154
      },
      {
        "nome": "Legislação Institucional",
        "cor": "#E36B4F",
        "videos": 8,
        "pdfs": 21
      },
      {
        "nome": "Prova Discursiva",
        "cor": "#C9A0F0",
        "videos": 6,
        "pdfs": 11
      },
      {
        "nome": "Treinamento Intensivo",
        "cor": "#A8B3C2",
        "videos": 59,
        "pdfs": 113
      }
    ],
    "aulas": 68,
    "videos": 604,
    "pdfs": 1250,
    "blocos": 682
  },
  "prf-policial": {
    "materias": [
      {
        "nome": "Português",
        "cor": "#E8A825",
        "videos": 318,
        "pdfs": 72
      },
      {
        "nome": "Raciocínio Lógico e Matemático",
        "cor": "#4FE37C",
        "videos": 331,
        "pdfs": 124
      },
      {
        "nome": "Informática",
        "cor": "#4FA3E3",
        "videos": 83,
        "pdfs": 75
      },
      {
        "nome": "Física",
        "cor": "#9BE34F",
        "videos": 59,
        "pdfs": 21
      },
      {
        "nome": "Ética e Cidadania",
        "cor": "#B14FE3",
        "videos": 34,
        "pdfs": 21
      },
      {
        "nome": "Geopolítica",
        "cor": "#4FC3A1",
        "videos": 51,
        "pdfs": 15
      },
      {
        "nome": "Inglês",
        "cor": "#7C8CF8",
        "videos": 88,
        "pdfs": 30
      },
      {
        "nome": "Espanhol",
        "cor": "#F2C14E",
        "videos": 60,
        "pdfs": 50
      },
      {
        "nome": "Legislação de Trânsito e CONTRAN",
        "cor": "#E36B4F",
        "videos": 52,
        "pdfs": 55
      },
      {
        "nome": "Direito Administrativo · Curso A",
        "cor": "#4F7CE3",
        "videos": 225,
        "pdfs": 78
      },
      {
        "nome": "Direito Administrativo · Curso B",
        "cor": "#4F7CE3",
        "videos": 184,
        "pdfs": 70
      },
      {
        "nome": "Carreira de PRF",
        "cor": "#4F7CE3",
        "videos": 0,
        "pdfs": 2
      },
      {
        "nome": "Direito Constitucional",
        "cor": "#8a6a1f",
        "videos": 168,
        "pdfs": 61
      },
      {
        "nome": "Direito Penal",
        "cor": "#E35B5B",
        "videos": 308,
        "pdfs": 67
      },
      {
        "nome": "Direito Processual Penal",
        "cor": "#E3924F",
        "videos": 70,
        "pdfs": 20
      },
      {
        "nome": "Legislação Penal Especial",
        "cor": "#D9708F",
        "videos": 80,
        "pdfs": 31
      },
      {
        "nome": "Direitos Humanos",
        "cor": "#7CC8E8",
        "videos": 29,
        "pdfs": 28
      },
      {
        "nome": "Estatuto da Criança e do Adolescente",
        "cor": "#E34F9E",
        "videos": 61,
        "pdfs": 18
      },
      {
        "nome": "Discursivas",
        "cor": "#C9A0F0",
        "videos": 28,
        "pdfs": 20
      },
      {
        "nome": "Bizus",
        "cor": "#A8B3C2",
        "videos": 0,
        "pdfs": 19
      },
      {
        "nome": "Trilha de revisão",
        "cor": "#A8B3C2",
        "videos": 0,
        "pdfs": 33
      },
      {
        "nome": "E-books",
        "cor": "#A8B3C2",
        "videos": 0,
        "pdfs": 1
      },
      {
        "nome": "Mentoria",
        "cor": "#A8B3C2",
        "videos": 4,
        "pdfs": 0
      }
    ],
    "aulas": 221,
    "videos": 2233,
    "pdfs": 911,
    "blocos": 2312
  },
  "pf-agente": {
    "materias": [
      {
        "nome": "Língua Portuguesa",
        "cor": "#E8A825",
        "videos": 332,
        "pdfs": 46
      },
      {
        "nome": "Raciocínio Lógico",
        "cor": "#4FE37C",
        "videos": 221,
        "pdfs": 58
      },
      {
        "nome": "Estatística",
        "cor": "#5AD1B0",
        "videos": 301,
        "pdfs": 108
      },
      {
        "nome": "Noções de Informática",
        "cor": "#4FA3E3",
        "videos": 177,
        "pdfs": 110
      },
      {
        "nome": "Contabilidade Geral · Curso A",
        "cor": "#D8B45A",
        "videos": 92,
        "pdfs": 77
      },
      {
        "nome": "Contabilidade Geral · Curso B",
        "cor": "#D8B45A",
        "videos": 66,
        "pdfs": 49
      },
      {
        "nome": "Direito Administrativo · Curso A",
        "cor": "#4F7CE3",
        "videos": 164,
        "pdfs": 72
      },
      {
        "nome": "Direito Administrativo · Curso B",
        "cor": "#4F7CE3",
        "videos": 162,
        "pdfs": 59
      },
      {
        "nome": "Direito Constitucional",
        "cor": "#8a6a1f",
        "videos": 122,
        "pdfs": 54
      },
      {
        "nome": "Direito Penal",
        "cor": "#E35B5B",
        "videos": 256,
        "pdfs": 53
      },
      {
        "nome": "Direito Processual Penal",
        "cor": "#E3924F",
        "videos": 49,
        "pdfs": 21
      },
      {
        "nome": "Legislação",
        "cor": "#E36B4F",
        "videos": 94,
        "pdfs": 24
      },
      {
        "nome": "Direitos Humanos",
        "cor": "#7CC8E8",
        "videos": 49,
        "pdfs": 29
      },
      {
        "nome": "Discursiva",
        "cor": "#C9A0F0",
        "videos": 26,
        "pdfs": 14
      },
      {
        "nome": "Bizus",
        "cor": "#A8B3C2",
        "videos": 0,
        "pdfs": 10
      },
      {
        "nome": "Bizus (diversos cargos)",
        "cor": "#A8B3C2",
        "videos": 0,
        "pdfs": 2
      }
    ],
    "aulas": 185,
    "videos": 2111,
    "pdfs": 786,
    "blocos": 2133
  },
  "banco-brasil": {
    "materias": [
      {
        "nome": "Língua Portuguesa",
        "cor": "#E8A825",
        "videos": 405,
        "pdfs": 60
      },
      {
        "nome": "Língua Inglesa",
        "cor": "#7C8CF8",
        "videos": 69,
        "pdfs": 29
      },
      {
        "nome": "Matemática",
        "cor": "#4FE37C",
        "videos": 359,
        "pdfs": 102
      },
      {
        "nome": "Matemática Financeira",
        "cor": "#5AD1B0",
        "videos": 65,
        "pdfs": 32
      },
      {
        "nome": "Conhecimentos Bancários",
        "cor": "#E8C14F",
        "videos": 54,
        "pdfs": 59
      },
      {
        "nome": "Atualidades do Mercado Financeiro",
        "cor": "#7CC8E8",
        "videos": 13,
        "pdfs": 6
      },
      {
        "nome": "Informática",
        "cor": "#4FA3E3",
        "videos": 174,
        "pdfs": 109
      },
      {
        "nome": "Vendas e Negociação",
        "cor": "#E34F9E",
        "videos": 68,
        "pdfs": 62
      },
      {
        "nome": "Código de Defesa do Consumidor",
        "cor": "#E3924F",
        "videos": 56,
        "pdfs": 20
      },
      {
        "nome": "Estatuto da Pessoa com Deficiência",
        "cor": "#B14FE3",
        "videos": 42,
        "pdfs": 19
      },
      {
        "nome": "Redação",
        "cor": "#C9A0F0",
        "videos": 26,
        "pdfs": 15
      },
      {
        "nome": "Simulados",
        "cor": "#A8B3C2",
        "videos": 45,
        "pdfs": 13
      },
      {
        "nome": "Trilha de revisão",
        "cor": "#A8B3C2",
        "videos": 0,
        "pdfs": 22
      }
    ],
    "aulas": 139,
    "videos": 1376,
    "pdfs": 548,
    "blocos": 1422
  }
};
