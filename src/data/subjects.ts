import type { Subject, SubjectId } from "../lib/types";

/**
 * Pesos e nomes conferidos linha a linha contra o Anexo I do Edital 01/2026 PCPR
 * (banca FGV) — ver C:\PYTHON\PCPR2026\_pesquisa-conteudo-pdfs.md. peso = número
 * oficial de questões da matéria na prova de 100 questões.
 */
export const SUBJECTS: Subject[] = [
  {
    id: "pt",
    nome: "Língua Portuguesa",
    peso: 25,
    cor: "#E8A825",
    topicos: [
      "Interpretação e compreensão de texto",
      "Coesão, coerência e intertextualidade",
      "Modos de organização do discurso (narração, descrição, dissertação, injunção)",
      "Tipos de discurso (direto, indireto, indireto livre)",
      "Pontuação",
      "Sintaxe do período simples e composto",
      "Concordância verbal e nominal",
      "Regência verbal e nominal e crase",
      "Morfologia, classes de palavras e modalizadores",
      "Semântica (sinônimos, antônimos, parônimos, polissemia, ambiguidade)",
      "Ortografia e acentuação",
    ],
  },
  {
    id: "ti",
    nome: "Tecnologia, Segurança Cibernética e Crimes Digitais",
    peso: 25,
    cor: "#4FA3E3",
    topicos: [
      "Fundamentos de hardware e software, BIOS/UEFI, backup",
      "Sistemas operacionais e aplicativos (Windows 11, Office, Android/iOS)",
      "Internet, redes, TCP/IP, DNS, VPN, firewall",
      "Segurança da informação (CID, criptografia, assinatura digital, hash)",
      "Crimes cibernéticos e investigação digital",
      "Legislação digital (Marco Civil, LGPD, art. 154-A do CP)",
    ],
  },
  {
    id: "for",
    nome: "Ciências Forenses",
    peso: 10,
    cor: "#B14FE3",
    topicos: [
      "Medicina legal: tanatologia, traumatologia, asfixiologia, toxicologia",
      "Papiloscopia (Sistema de Vucetich) e identificação humana",
      "Criminalística e documentoscopia",
      "Cadeia de custódia (arts. 158-A a 158-F do CPP)",
      "Balística forense",
      "Criminologia e vitimologia",
      "Criminologia digital",
    ],
  },
  {
    id: "leg",
    nome: "Legislação Estadual e Institucional",
    peso: 5,
    cor: "#E36B4F",
    topicos: [
      "Constituição do Estado do Paraná",
      "LC Estadual 259/2023 (regime jurídico da PCPR)",
      "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR)",
      "Lei Estadual 21.894/2024 e Lei Estadual 6.174/1970",
      "Lei 12.037/2009 (Identificação Criminal)",
      "Lei 13.869/2019 (Abuso de Autoridade)",
      "LGPD e Lei de Acesso à Informação (12.527/2011)",
    ],
  },
  {
    id: "pp",
    nome: "Direito Processual Penal e Legislação Processual Penal Extravagante",
    peso: 3,
    cor: "#2FBF71",
    topicos: [
      "Inquérito policial",
      "Prisão em flagrante e outras prisões",
      "Medidas cautelares diversas da prisão",
      "Ação penal e prova no processo penal",
      "Competência jurisdicional",
      "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)",
    ],
  },
  {
    id: "pen",
    nome: "Direito Penal e Legislação Penal Extravagante",
    peso: 3,
    cor: "#E5484D",
    topicos: [
      "Teoria geral do crime, tempo e lugar do crime",
      "Aplicação e espécies de pena",
      "Crimes contra a pessoa e contra o patrimônio",
      "Crimes contra a administração pública",
      "Lei Maria da Penha, Lei de Drogas, Estatuto do Desarmamento",
      "Lei de Organizações Criminosas (12.850/2013) e Pacote Anticrime (13.964/2019)",
    ],
  },
  {
    id: "con",
    nome: "Direito Constitucional",
    peso: 3,
    cor: "#8a6a1f",
    topicos: [
      "Princípios fundamentais da Constituição",
      "Direitos e garantias fundamentais (art. 5º)",
      "Remédios constitucionais",
      "Organização do Estado e dos Poderes",
      "Segurança pública (art. 144 da CF)",
      "Controle de constitucionalidade",
    ],
  },
  {
    id: "adm",
    nome: "Direito Administrativo",
    peso: 3,
    cor: "#4F7CE3",
    topicos: [
      "Princípios da administração pública e LINDB",
      "Atos administrativos: anulação, revogação e convalidação",
      "Licitações e contratos (Lei 14.133/2021)",
      "Responsabilidade civil do Estado",
      "Improbidade administrativa (Lei 8.429/92, pós Lei 14.230/2021)",
    ],
  },
  {
    id: "dh",
    nome: "Direitos Humanos",
    peso: 3,
    cor: "#E3C24F",
    topicos: [
      "Teoria geral dos direitos humanos",
      "Sistema global e sistema interamericano de proteção",
      "Direitos humanos e atuação policial; uso da força",
      "Proteção de grupos vulneráveis",
      "Segurança pública e direitos humanos",
      "Agenda 2030 e Objetivos de Desenvolvimento Sustentável",
    ],
  },
  {
    id: "pr",
    nome: "Realidade do Paraná",
    peso: 5,
    cor: "#4FE3C2",
    topicos: [
      "História do Paraná (emancipação, ciclos econômicos, Guerra do Contestado)",
      "Geografia física e humana do Paraná",
      "Divisão político-administrativa e regiões",
      "Cultura e imigração paranaense",
      "Economia e indicadores do estado",
      "Temas atuais do Paraná",
    ],
  },
  {
    id: "cont",
    nome: "Contabilidade Geral",
    peso: 5,
    cor: "#E34F9E",
    topicos: [
      "Fundamentos e patrimônio (Ativo = Passivo + PL)",
      "Operações e regime de competência x caixa",
      "Demonstrações contábeis e análise de índices",
      "Custos e ponto de equilíbrio",
      "Fraudes e ocultação patrimonial (lavagem de dinheiro)",
    ],
  },
  {
    id: "est",
    nome: "Estatística",
    peso: 5,
    cor: "#7C4FE3",
    topicos: [
      "Conceitos básicos e tipos de variáveis",
      "Organização e apresentação de dados",
      "Medidas de posição e dispersão",
      "Probabilidade e amostragem",
      "Detecção de outliers (método do IQR)",
    ],
  },
  {
    id: "rlm",
    nome: "Raciocínio Lógico-Matemático",
    peso: 5,
    cor: "#4FE37C",
    topicos: [
      "Lógica proposicional e tabelas-verdade",
      "Equivalências e negação de condicionais e quantificadores",
      "Teoria dos conjuntos",
      "Porcentagem, razão e proporção",
      "Contagem e probabilidade básica",
    ],
  },
];

export const SUBJECT_MAP: Record<SubjectId, Subject> = SUBJECTS.reduce(
  (acc, s) => {
    acc[s.id] = s;
    return acc;
  },
  {} as Record<SubjectId, Subject>,
);

export const SUBJECT_WEIGHTS: Record<SubjectId, number> = SUBJECTS.reduce(
  (acc, s) => {
    acc[s.id] = s.peso;
    return acc;
  },
  {} as Record<SubjectId, number>,
);

export const PDF_MAP: Record<SubjectId, string> = {
  pt: "01-lingua-portuguesa.pdf",
  ti: "02-tecnologia-cyber.pdf",
  for: "03-ciencias-forenses.pdf",
  rlm: "04-rlm.pdf",
  pr: "05-realidade-parana.pdf",
  cont: "06-contabilidade.pdf",
  est: "07-estatistica.pdf",
  leg: "08-legislacao-estadual.pdf",
  pen: "09-direito-penal.pdf",
  pp: "10-processo-penal.pdf",
  con: "11-constitucional.pdf",
  adm: "12-administrativo.pdf",
  dh: "13-direitos-humanos.pdf",
};

/**
 * Composição oficial da prova real: 100 questões, distribuídas exatamente como
 * no Anexo I do edital (Conhecimentos Gerais + Conhecimentos Específicos).
 * Usada pelo "Modo Prova" para montar o simulado; se o banco de uma matéria
 * ainda não tiver questões suficientes, o quiz repete/completa com IA (todo).
 */
export const PROVA_MIX: Record<SubjectId, number> = {
  pt: 25,
  ti: 25,
  for: 10,
  cont: 5,
  est: 5,
  leg: 5,
  pr: 5,
  pen: 3,
  pp: 3,
  con: 3,
  adm: 3,
  dh: 3,
  rlm: 5,
};

export const EDITAL_INFO = {
  cargo: "Agente de Polícia Judiciária",
  banca: "FGV (Fundação Getulio Vargas)",
  inscricoes: "14/07/2026 a 12/08/2026",
  dataProva: "11/10/2026 (domingo), 13h às 18h",
  cidadesProva: ["Curitiba/PR", "Londrina/PR", "Cascavel/PR"],
  totalQuestoes: 100,
  alternativasPorQuestao: 5,
  descontoPorErro: false,
  notaMinimaAprovacao: "50% (50 pontos), cumulativo com limite de vagas por região/cota",
  remuneracaoInicial: "R$ 9.007,67",
} as const;
