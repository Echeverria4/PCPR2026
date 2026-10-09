import type { ConteudoTopico, Question } from "../lib/types";

/** PRF — Agente Administrativo. O novo concurso ainda não tem edital: a referência é o último, o 01/2014. */
export type MateriaPrfId = "pt" | "etica" | "rlm" | "con" | "adm" | "administracao" | "arq" | "info" | "leg";

export type QuestaoPrf = Question<MateriaPrfId>;
export type ConteudoPrf = ConteudoTopico<MateriaPrfId>;

export interface MateriaPrf {
  id: MateriaPrfId;
  nome: string;
  /** Questões da matéria na prova de 2014. */
  questoes: number;
  /** Valor de cada questão na prova de 2014. */
  peso: number;
  cor: string;
  /** Itens do conteúdo programático (o de 2014, repetido no curso pré-edital). */
  topicos: string[];
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
  {
    id: "pt",
    nome: "Língua Portuguesa",
    questoes: 12,
    peso: 2,
    cor: "#E8A825",
    topicos: [
      "Compreensão e interpretação de textos",
      "Tipologia textual",
      "Ortografia oficial",
      "Acentuação gráfica",
      "Emprego das classes de palavras",
      "Emprego do sinal indicativo de crase",
      "Sintaxe da oração e do período",
      "Pontuação",
      "Concordância nominal e verbal",
      "Regência nominal e verbal",
      "Significação das palavras",
      "Redação oficial (Manual de Redação da Presidência da República)",
    ],
  },
  {
    id: "etica",
    nome: "Ética e Conduta Pública",
    questoes: 6,
    peso: 1,
    cor: "#B14FE3",
    topicos: [
      "Ética e moral",
      "Ética, princípios e valores",
      "Ética e democracia: exercício da cidadania",
      "Ética e função pública",
      "Código de Ética do servidor (Decreto 1.171/1994)",
      "Sistema de Gestão da Ética (Decreto 6.029/2007)",
      "Regime disciplinar da Lei 8.112/1990",
      "Improbidade administrativa (Lei 8.429/1992)",
    ],
  },
  {
    id: "rlm",
    nome: "Raciocínio Lógico",
    questoes: 6,
    peso: 1,
    cor: "#4FE37C",
    topicos: [
      "Estruturas lógicas",
      "Lógica de argumentação",
      "Proposições simples e compostas",
      "Tabelas-verdade",
      "Equivalências lógicas",
      "Leis de De Morgan",
      "Diagramas lógicos",
      "Lógica de primeira ordem",
      "Princípios de contagem e probabilidade",
      "Operações com conjuntos",
      "Problemas aritméticos, geométricos e matriciais",
    ],
  },
  {
    id: "con",
    nome: "Direito Constitucional",
    questoes: 6,
    peso: 1.5,
    cor: "#8a6a1f",
    topicos: [
      "Constituição: conceito, classificações e princípios fundamentais",
      "Direitos e deveres individuais e coletivos",
      "Direitos sociais",
      "Nacionalidade",
      "Direitos políticos e partidos políticos",
      "Organização político-administrativa",
      "Administração pública e servidores públicos",
      "Poder Legislativo",
      "Poder Executivo",
      "Poder Judiciário e CNJ",
      "Funções essenciais à Justiça",
    ],
  },
  {
    id: "adm",
    nome: "Direito Administrativo",
    questoes: 6,
    peso: 1.5,
    cor: "#4F7CE3",
    topicos: [
      "Ato administrativo",
      "Anulação, revogação e prescrição",
      "Controle da administração pública",
      "Agentes públicos: investidura, direitos e deveres",
      "Poderes da administração",
      "Princípios da administração pública",
      "Responsabilidade civil do Estado",
      "Improbidade administrativa",
      "Serviços públicos",
      "Organização administrativa",
      "Lei 8.112/1990",
      "Processo administrativo (Lei 9.784/1999)",
    ],
  },
  {
    id: "administracao",
    nome: "Administração",
    questoes: 6,
    peso: 1.5,
    cor: "#E34F9E",
    topicos: [
      "Evolução da administração pública e reforma do Estado",
      "Gestão pública e gestão privada",
      "Excelência nos serviços públicos",
      "Gestão de pessoas e planejamento estratégico de RH",
      "Gestão de desempenho",
      "Comportamento, clima e cultura organizacional",
      "Gestão por competências e gestão do conhecimento",
      "Qualidade de vida no trabalho",
      "Estrutura organizacional e departamentalização",
      "Liderança, motivação e satisfação no trabalho",
      "Recrutamento e seleção",
      "Análise e descrição de cargos",
      "Treinamento, desenvolvimento e educação",
      "Educação corporativa e a distância",
    ],
  },
  {
    id: "arq",
    nome: "Arquivologia",
    questoes: 6,
    peso: 1.5,
    cor: "#4FE3C2",
    topicos: [
      "Princípios e conceitos arquivísticos",
      "Gestão de documentos e ciclo de vida",
      "Protocolo",
      "Classificação de documentos",
      "Arquivamento e ordenação",
      "Tabela de temporalidade",
      "Acondicionamento e armazenamento",
      "Preservação e conservação",
    ],
  },
  {
    id: "info",
    nome: "Informática",
    questoes: 6,
    peso: 1.5,
    cor: "#4FA3E3",
    topicos: [
      "Editores de texto (Word e Writer)",
      "Planilhas eletrônicas (Excel e Calc)",
      "Apresentações (PowerPoint e Impress)",
      "Internet e intranet: conceitos e protocolos",
      "Navegadores",
      "Correio eletrônico",
      "Busca e pesquisa na web",
      "Grupos de discussão",
      "Sistemas de informação",
      "Segurança da informação",
    ],
  },
  {
    id: "leg",
    nome: "Legislação da PRF",
    questoes: 6,
    peso: 1.5,
    cor: "#E36B4F",
    topicos: [
      "Art. 144 da Constituição: perfil constitucional da PRF",
      "Art. 20 do Código de Trânsito Brasileiro",
      "Decreto 1.655/1995",
    ],
  },
];

export const PRF_MATERIA_MAP = Object.fromEntries(PRF_MATERIAS.map((m) => [m.id, m])) as Record<
  MateriaPrfId,
  MateriaPrf
>;

/** Nome de cada matéria, para as telas que recebem só o id. */
export const PRF_NOMES = Object.fromEntries(PRF_MATERIAS.map((m) => [m.id, m.nome])) as Record<MateriaPrfId, string>;
