import type { SubjectId } from "../lib/types";

/**
 * Blocos de estudo da reta final: cada matéria do Anexo I dividida nos grandes itens do
 * conteúdo programático do Agente. "questoesEstimadas" é uma ESTIMATIVA de quantas das
 * questões da matéria tendem a sair de cada bloco (a soma de cada matéria bate com o peso
 * oficial do Anexo I). O edital não traz essa divisão: ela serve só para ordenar o que
 * estudar pelos pontos em jogo, não é promessa de distribuição.
 *
 * "padroes" casa com o tópico da questão do banco (sem acento, minúsculo); vale o primeiro
 * bloco da matéria que casar. Toda questão do banco precisa cair em algum bloco: conferir
 * com o script de cobertura sempre que entrar questão nova com tópico novo.
 */
export interface BlocoEstudo {
  id: string;
  materia: SubjectId;
  nome: string;
  questoesEstimadas: number;
  padroes: RegExp[];
}

export const BLOCOS: BlocoEstudo[] = [
  // Língua Portuguesa (25)
  {
    id: "pt-texto",
    materia: "pt",
    nome: "Texto: interpretação, coesão, coerência, tipos e modos de discurso, redação oficial",
    questoesEstimadas: 10,
    padroes: [/interpreta|compreens|coesao|coerencia|discurso|intertext|conectiv|redacao oficial|textual/],
  },
  {
    id: "pt-frase",
    materia: "pt",
    nome: "Frase: sintaxe, concordância, regência, crase, pontuação e colocação pronominal",
    questoesEstimadas: 8,
    padroes: [/sintaxe|concordanc|regenc|crase|pontuac|colocacao pronominal|frase/],
  },
  {
    id: "pt-sentido",
    materia: "pt",
    nome: "Sentido: semântica, ambiguidade, figuras, funções e vícios de linguagem",
    questoesEstimadas: 4,
    padroes: [/semantic|ambiguid|figuras|funcoes da linguagem|vicios|polissemia|vocabulario/],
  },
  {
    id: "pt-palavra",
    materia: "pt",
    nome: "Palavra: classes, modalizadores, formação, ortografia e acentuação",
    questoesEstimadas: 3,
    padroes: [/morfolog|classes de palavras|modalizador|ortograf|acentua|formacao de palavras/],
  },

  // Tecnologia, Segurança Cibernética e Crimes Digitais (25)
  {
    id: "ti-fund",
    materia: "ti",
    nome: "1.1 Fundamentos: hardware, memórias, armazenamento, BIOS/UEFI, drivers e firmware",
    questoesEstimadas: 3,
    padroes: [/hardware|bios|uefi|memoria/],
  },
  {
    id: "ti-so",
    materia: "ti",
    nome: "1.2 Sistemas e aplicativos: Windows 11, Word/Excel e LibreOffice, Android/iOS, M365 e Workspace",
    questoesEstimadas: 3,
    padroes: [/sistemas operacionais|windows|editores de texto|planilhas|^dispositivos moveis|microsoft 365|google workspace/],
  },
  {
    id: "ti-redes",
    materia: "ti",
    nome: "1.3 Internet e redes: protocolos, DNS, VPN, navegadores, e-mail, nuvem, logs, metadados e web",
    questoesEstimadas: 5,
    padroes: [
      /redes de computadores|^internet|navegador|correio|computacao em nuvem|armazenamento em nuvem|redes sociais, plataformas|logica de programacao|aplicacoes web/,
    ],
  },
  {
    id: "ti-seg",
    materia: "ti",
    nome: "1.4 Segurança: pilares, controle de acesso, criptografia, certificado, backup, políticas e incidentes",
    questoesEstimadas: 4,
    padroes: [/^seguranca|pilares|criptografia|controle de acesso|backup|politicas de/],
  },
  {
    id: "ti-ameacas",
    materia: "ti",
    nome: "1.4 Ameaças: malware, ransomware, phishing, engenharia social e golpes",
    questoesEstimadas: 3,
    padroes: [/malware|ransomware|ataques ciberneticos|engenharia social|phishing|golpes/],
  },
  {
    id: "ti-crimes",
    materia: "ti",
    nome: "1.5 Crimes digitais e investigação: fraudes, invasão, evidência, rastreamento, OSINT",
    questoesEstimadas: 4,
    padroes: [/crimes|furto|invasao de dispositivo|criptoativos|evidencia digital|rastreamento|inteligencia|osint|forense digital/],
  },
  {
    id: "ti-leg",
    materia: "ti",
    nome: "1.6 Legislação e ética digital: Marco Civil, LGPD, ECA Digital e sigilo funcional",
    questoesEstimadas: 3,
    padroes: [/legislacao digital|marco civil|lgpd|eca digital|sigilo funcional/],
  },

  // Ciências Forenses (10)
  {
    id: "for-ml",
    materia: "for",
    nome: "Medicina legal: tanatologia, traumatologia, asfixiologia, toxicologia, necropsia",
    questoesEstimadas: 3,
    padroes: [/medicina legal|tanatolog|traumatolog|asfixiolog|toxicolog|necropsia|sexolog|psicopatolog/],
  },
  {
    id: "for-id",
    materia: "for",
    nome: "Identificação humana e balística: papiloscopia, DNA e bancos genéticos, balística",
    questoesEstimadas: 2,
    padroes: [/papiloscop|genetic|dna|identificacao humana|balistic|odontolog|antropolog/],
  },
  {
    id: "for-crim",
    materia: "for",
    nome: "Criminalística: local de crime, vestígios, cadeia de custódia e documentoscopia",
    questoesEstimadas: 2,
    padroes: [/criminalistic|local de crime|cadeia de custodia|documentoscop|grafoscop|vestigio/],
  },
  {
    id: "for-crimino",
    materia: "for",
    nome: "Criminologia e vitimologia: escolas, teorias, vítimas e controle social",
    questoesEstimadas: 2,
    padroes: [/criminologia(?! digital)|vitimolog/],
  },
  {
    id: "for-digital",
    materia: "for",
    nome: "Criminologia digital e investigação tecnológica",
    questoesEstimadas: 1,
    padroes: [/criminologia digital|investigacao tecnologica/],
  },

  // Raciocínio Lógico-Matemático (5)
  {
    id: "rlm-logica",
    materia: "rlm",
    nome: "Lógica: proposições, tabelas-verdade, equivalências, negações e argumentos",
    questoesEstimadas: 2,
    padroes: [/logica proposicional|equivalenc|negacao|tabela|argumento|silogismo|quantificador/],
  },
  {
    id: "rlm-conjuntos",
    materia: "rlm",
    nome: "Conjuntos, diagramas e sequências",
    questoesEstimadas: 1,
    padroes: [/conjunto|diagrama|venn|sequencia/],
  },
  {
    id: "rlm-mat",
    materia: "rlm",
    nome: "Porcentagem, razão, proporção e problemas aritméticos",
    questoesEstimadas: 1,
    padroes: [/porcentagem|razao|proporc|juros|aritmetic|geometr/],
  },
  {
    id: "rlm-contagem",
    materia: "rlm",
    nome: "Contagem e probabilidade",
    questoesEstimadas: 1,
    padroes: [/contagem|combinat|probabilidade|arranjo|permutac/],
  },

  // Realidade do Paraná (5)
  {
    id: "pr-hist",
    materia: "pr",
    nome: "História, formação territorial, datas e símbolos do Paraná",
    questoesEstimadas: 1.5,
    padroes: [/historia|datas comemorativas|simbolos/],
  },
  {
    id: "pr-geo",
    materia: "pr",
    nome: "Geografia física e humana e divisão político-administrativa",
    questoesEstimadas: 1.5,
    padroes: [/geografia|divisao/],
  },
  {
    id: "pr-atual",
    materia: "pr",
    nome: "Cultura, economia, indicadores e temas atuais (inclusive segurança pública)",
    questoesEstimadas: 2,
    padroes: [/cultura|economia|indicadores|seguranca publica|temas atuais|imigracao/],
  },

  // Contabilidade Geral (5)
  {
    id: "cont-fund",
    materia: "cont",
    nome: "Teoria, princípios, patrimônio, contas e regime de competência",
    questoesEstimadas: 2,
    padroes: [/conceitos basicos|principios|patrimonio|fundamentos|regime de competencia|orcamento publico|prestacao de contas/],
  },
  {
    id: "cont-demo",
    materia: "cont",
    nome: "Demonstrações contábeis, balanço patrimonial e análise de índices",
    questoesEstimadas: 1,
    padroes: [/demonstrac|balanco|indices|analise/],
  },
  {
    id: "cont-custos",
    materia: "cont",
    nome: "Custos e ponto de equilíbrio",
    questoesEstimadas: 1,
    padroes: [/custos|ponto de equilibrio/],
  },
  {
    id: "cont-fraude",
    materia: "cont",
    nome: "Irregularidades, fraudes e ocultação patrimonial (lavagem)",
    questoesEstimadas: 1,
    padroes: [/fraude|lavagem|ocultacao|irregularidade/],
  },

  // Estatística (5)
  {
    id: "est-dados",
    materia: "est",
    nome: "Conceitos, variáveis, tabelas e gráficos",
    questoesEstimadas: 1.5,
    padroes: [/conceitos|variaveis|interpretacao de graficos|tabelas|organizacao e apresentacao/],
  },
  {
    id: "est-medidas",
    materia: "est",
    nome: "Média, mediana, moda e medidas de dispersão",
    questoesEstimadas: 1.5,
    padroes: [/medidas/],
  },
  {
    id: "est-prob",
    materia: "est",
    nome: "Probabilidade, amostragem, curva normal e correlação",
    questoesEstimadas: 1,
    padroes: [/probabilidade|amostragem|normal|correlacao|regressao/],
  },
  {
    id: "est-outliers",
    materia: "est",
    nome: "Padrões, anomalias e outliers (método do IQR)",
    questoesEstimadas: 1,
    padroes: [/outlier|anomalia|iqr|padroes/],
  },

  // Legislação Estadual e Institucional (5)
  {
    id: "leg-pcpr",
    materia: "leg",
    nome: "Leis da PCPR: LC 259/2023, Lei Orgânica 23.213/2026 e estrutura da instituição",
    questoesEstimadas: 2,
    padroes: [/259\/2023|23\.213|estrutura organizacional|alteracoes legislativas/],
  },
  {
    id: "leg-disc",
    materia: "leg",
    nome: "Código Disciplinar (21.894/2024) e Estatuto dos Servidores (6.174/1970)",
    questoesEstimadas: 1,
    padroes: [/21\.894|6\.174/],
  },
  {
    id: "leg-cepr",
    materia: "leg",
    nome: "Constituição do Paraná e Lei Orgânica Nacional das Polícias Civis (14.735/2023)",
    questoesEstimadas: 1,
    padroes: [/constituicao do estado|14\.735/],
  },
  {
    id: "leg-fed",
    materia: "leg",
    nome: "Abuso de autoridade, identificação criminal, LGPD e LAI",
    questoesEstimadas: 1,
    padroes: [/13\.869|abuso de autoridade|12\.037|identificacao criminal|lgpd|acesso a informacao|12\.527/],
  },

  // Direito Penal (3)
  {
    id: "pen-geral",
    materia: "pen",
    nome: "Parte geral: teoria do crime, excludentes, concursos, pena e prescrição",
    questoesEstimadas: 1,
    padroes: [/teoria geral|excludentes|extincao da punibilidade|prescricao|concurso de|aplicacao da pena|especies de pena|tempo e lugar/],
  },
  {
    id: "pen-cp",
    materia: "pen",
    nome: "Crimes do Código Penal: pessoa, patrimônio, dignidade sexual, fé e administração pública",
    questoesEstimadas: 1,
    padroes: [/crimes contra (a pessoa|o patrimonio|a administracao|a dignidade|a saude|a fe)|feminicidio|codigo penal/],
  },
  {
    id: "pen-extra",
    materia: "pen",
    nome: "Leis penais extravagantes: Maria da Penha, Drogas, Desarmamento, Orcrim, Hediondos, LEP, CTB",
    questoesEstimadas: 1,
    padroes: [/lei|estatuto|execucao penal|hediondos|transito|ordem tributaria|pacote anticrime/],
  },

  // Direito Processual Penal (3)
  {
    id: "pp-ip",
    materia: "pp",
    nome: "Inquérito policial, ação penal e competência",
    questoesEstimadas: 1,
    padroes: [/inquerito|acao penal|competencia/],
  },
  {
    id: "pp-prisoes",
    materia: "pp",
    nome: "Prisões, audiência de custódia e medidas cautelares",
    questoesEstimadas: 1,
    padroes: [/prisao|prisoes|cautelar|audiencia de custodia/],
  },
  {
    id: "pp-provas",
    materia: "pp",
    nome: "Provas, cadeia de custódia e leis extravagantes (Marco Legal 15.358, colaboração premiada)",
    questoesEstimadas: 1,
    padroes: [/prova|cadeia de custodia|15\.358|extravagante|colaboracao/],
  },

  // Direito Constitucional (3)
  {
    id: "con-direitos",
    materia: "con",
    nome: "Princípios fundamentais, direitos e garantias e remédios constitucionais",
    questoesEstimadas: 1.5,
    padroes: [/principios fundamentais|direitos e garantias|remedios/],
  },
  {
    id: "con-org",
    materia: "con",
    nome: "Organização do Estado, competências e segurança pública (art. 144)",
    questoesEstimadas: 1,
    padroes: [/organizacao|competencia|seguranca publica/],
  },
  {
    id: "con-controle",
    materia: "con",
    nome: "Controle de constitucionalidade e estados de defesa e de sítio",
    questoesEstimadas: 0.5,
    padroes: [/controle de constitucionalidade|estado de defesa|estado de sitio/],
  },

  // Direito Administrativo (3)
  {
    id: "adm-base",
    materia: "adm",
    nome: "Princípios, LINDB, poderes administrativos e atos administrativos",
    questoesEstimadas: 1,
    padroes: [/principios da administracao|lindb|^poderes|atos administrativos/],
  },
  {
    id: "adm-agentes",
    materia: "adm",
    nome: "Agentes públicos, PAD e responsabilidade civil do Estado",
    questoesEstimadas: 1,
    padroes: [/responsabilidade civil|disciplinar|servidores|agentes publicos/],
  },
  {
    id: "adm-contratos",
    materia: "adm",
    nome: "Licitações e contratos (14.133/2021) e improbidade (8.429/1992)",
    questoesEstimadas: 1,
    padroes: [/licitac|contratos|improbidade/],
  },

  // Direitos Humanos (3)
  {
    id: "dh-teoria",
    materia: "dh",
    nome: "Teoria geral, sistemas global e interamericano e hierarquia dos tratados",
    questoesEstimadas: 1,
    padroes: [/teoria geral|caracteristicas|sistema|tratados/],
  },
  {
    id: "dh-policia",
    materia: "dh",
    nome: "Atuação policial: uso da força, tortura e direitos da pessoa presa",
    questoesEstimadas: 1,
    padroes: [/forca|tortura|presa|atuacao policial|seguranca publica/],
  },
  {
    id: "dh-grupos",
    materia: "dh",
    nome: "Grupos vulneráveis e Agenda 2030 (ODS)",
    questoesEstimadas: 1,
    padroes: [/vulnerave|agenda 2030|\bods\b|desenvolvimento sustentavel/],
  },
];

export const BLOCO_MAP: Record<string, BlocoEstudo> = Object.fromEntries(BLOCOS.map((b) => [b.id, b]));

export function blocosDaMateria(materia: SubjectId): BlocoEstudo[] {
  return BLOCOS.filter((b) => b.materia === materia);
}

const semAcento = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const cacheBloco = new Map<string, BlocoEstudo | null>();

/** Bloco de um tópico do banco; null se nenhum padrão da matéria casar (não deveria acontecer). */
export function blocoDoTopico(materia: SubjectId, topico: string): BlocoEstudo | null {
  const chave = `${materia}|${topico}`;
  const salvo = cacheBloco.get(chave);
  if (salvo !== undefined) return salvo;
  const alvo = semAcento(topico);
  const achado = BLOCOS.find((b) => b.materia === materia && b.padroes.some((p) => p.test(alvo))) ?? null;
  cacheBloco.set(chave, achado);
  return achado;
}
