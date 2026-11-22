/**
 * Matérias em comum entre os concursos previstos para 2027 (pedido de 22/11/26): o que se estuda pela PRF Policial e
 * cai também na PMPR, na Polícia Penal Federal e na Polícia Penal do Paraná. Tudo tirado do último edital de cada
 * concurso; quando sair o edital novo, conferir de novo.
 *
 * Fontes: Edital PRF nº 1/2021 (Cebraspe), Edital nº 1 – DEPEN/2020 (Cebraspe, cargo de Agente Federal de Execução
 * Penal), Edital nº 15/2024 do DEPPEN-PR (Instituto AOCP) e Edital nº 01 – Soldado PMPR-2025 (IBFC).
 */
import type { CursoId } from "../data/cursos";
import type { EntradaCurso } from "./entrada";

export type ConcursoId = "prf" | "pmpr" | "ppf" | "pppr";

export interface Concurso {
  id: ConcursoId;
  /** Sigla curta: coluna do quadro. */
  curto: string;
  nome: string;
  edital: string;
  prova: string;
  previsao: string;
  /** O que ajuda no treino de questões. */
  dica: string;
}

export const CONCURSOS: Concurso[] = [
  {
    id: "prf",
    curto: "PRF",
    nome: "PRF Policial",
    edital: "Último edital: 2021 · Cebraspe",
    prova: "120 itens de certo ou errado + discursiva",
    previsao: "Pode sair no 1º semestre de 2027",
    dica: "É o curso que você estuda: tudo do quadro vem daqui.",
  },
  {
    id: "pmpr",
    curto: "PMPR",
    nome: "PM do Paraná · Soldado",
    edital: "Último edital: 2025 · IBFC",
    prova: "60 questões de A a E (40 gerais e 20 específicas, que valem o dobro) + redação",
    previsao: "Deve ser o primeiro de 2027",
    dica: "Questões de A a E: as provas de outras bancas no treino ajudam a pegar o jeito.",
  },
  {
    id: "ppf",
    curto: "PPF",
    nome: "Polícia Penal Federal",
    edital: "Último edital: 2020 · Cebraspe (cargo de Agente Federal de Execução Penal)",
    prova: "120 itens de certo ou errado (30 básicos, 50 específicos e 40 complementares) + discursiva",
    previsao: "Previsto para o início de 2027",
    dica: "Mesma banca e mesmo tipo de prova da PRF: o treino da PRF serve direto.",
  },
  {
    id: "pppr",
    curto: "PPPR",
    nome: "Polícia Penal do Paraná",
    edital: "Último edital: 2024 · Instituto AOCP",
    prova: "75 questões de A a E (10 de Português, 10 de RLM, 5 de Informática e 50 específicas)",
    previsao: "Previsto para o início de 2027",
    dica: "Questões de A a E: as provas de outras bancas no treino ajudam a pegar o jeito.",
  },
];

/** "sim": a matéria cai; "parte": cai uma matéria parecida (só uma parte vem da PRF); "nao": não cai. */
export type Cobre = "sim" | "parte" | "nao";

export interface MateriaComum {
  id: string;
  nome: string;
  /** Nome curto para o quadro. */
  curto: string;
  icone: string;
  /** Matérias da PRF Policial (aulas) onde se estuda isso. */
  grupos: string[];
  em: Record<ConcursoId, Cobre>;
  /** O que cai em todos os concursos que cobram a matéria. */
  nucleo?: string;
  /** O que o edital de cada concurso pede. */
  pede: Record<ConcursoId, string>;
  /** O que esse concurso cobra e a PRF não cobre: estudar à parte. */
  falta?: Partial<Record<ConcursoId, string>>;
}

export const MATERIAS_COMUNS: MateriaComum[] = [
  {
    id: "pt",
    nome: "Português",
    curto: "Português",
    icone: "📖",
    grupos: ["pt"],
    em: { prf: "sim", pmpr: "sim", ppf: "sim", pppr: "sim" },
    nucleo: "Interpretação de texto, ortografia, classes de palavras e concordância.",
    pede: {
      prf: "Interpretação, tipos de texto, ortografia, coesão, classes de palavras, sintaxe, pontuação, concordância, regência, crase, colocação dos pronomes, reescrita e redação oficial.",
      pmpr: "Interpretação e argumentação (tese, argumentos, ideias implícitas, vozes do texto), tiras, charges e gráficos, coesão, concordância, regência, ortografia, pontuação e variação linguística.",
      ppf: "Quase igual à PRF (mesma banca): interpretação, coesão, classes, sintaxe, pontuação, concordância, regência, crase, reescrita e redação oficial (padrão ofício).",
      pppr: "Interpretação, tipos de texto, significado das palavras, sinônimos, ortografia, classes, concordância, verbos, colocação, sintaxe, divisão silábica, dígrafos, formação de palavras, porquês, mau e mal, e variação linguística.",
    },
    falta: {
      pmpr: "Variação linguística e leitura de tiras, charges e gráficos.",
      pppr: "Porquês, mau e mal, formação de palavras e variação linguística. Sílaba e fonética estão na aula 00 de Português da PRF.",
    },
  },
  {
    id: "rlm",
    nome: "Raciocínio Lógico e Matemático",
    curto: "RLM",
    icone: "🔢",
    grupos: ["rlm"],
    em: { prf: "sim", pmpr: "sim", ppf: "sim", pppr: "sim" },
    nucleo: "Porcentagem, regra de três, conjuntos e contagem.",
    pede: {
      prf: "Equações e sistemas, funções (afim, quadrática, exponencial e logaritmo), razão e proporção, regra de três, porcentagem, sequências, PA e PG, contagem, probabilidade, estatística, conjuntos, escalas, áreas e volumes.",
      pmpr: "Problemas com números, porcentagem, conjuntos, contagem, sistemas, equações, regra de três, área, volume, média, tabelas e gráficos, e lógica (proposições, conectivos, equivalência e implicação).",
      ppf: "Lógica de argumentação, proposições, tabela-verdade, equivalências, leis de De Morgan, diagramas lógicos, lógica de primeira ordem, razão e proporção, regra de três, porcentagem, contagem, probabilidade e conjuntos.",
      pppr: "Lógica, conectivos, proposições, conjuntos, contagem, probabilidade, frações, MMC e MDC, porcentagem, razão e proporção, regra de três, equações do 1º e do 2º grau, medidas, média e geometria (Pitágoras e Tales).",
    },
    falta: {
      pmpr: "Lógica de proposições (conectivos, equivalência e implicação): não está no edital da PRF 2021 nem nas aulas de RLM da PRF.",
      ppf: "Toda a parte de lógica: proposições, tabela-verdade, equivalências, De Morgan, argumentação e lógica de primeira ordem.",
      pppr: "Lógica de proposições e conectivos.",
    },
  },
  {
    id: "info",
    nome: "Informática",
    curto: "Informática",
    icone: "💻",
    grupos: ["info"],
    em: { prf: "sim", pmpr: "sim", ppf: "sim", pppr: "sim" },
    nucleo: "Internet, navegadores, e-mail, Windows e segurança (vírus e phishing).",
    pede: {
      prf: "Internet e intranet, navegadores, e-mail, busca, redes sociais, Windows, acesso remoto, transformação digital (internet das coisas, big data, inteligência artificial), segurança (vírus, phishing, antivírus, firewall, VPN) e nuvem.",
      pmpr: "Arquivos no Windows 10 e 11 e no Linux Ubuntu, navegadores, e-mail, rede interna e impressoras, LibreOffice Writer e Calc, periféricos, celular Android e segurança (vírus, phishing, ransomware, engenharia social).",
      ppf: "Internet e intranet, navegadores, e-mail, Windows, acesso remoto, Word, Excel e LibreOffice, redes, segurança, voz sobre IP, videoconferência, armazenamento, backup, Power BI e banco de dados.",
      pppr: "Conceitos básicos, programas utilitários, arquivos, backup, hardware (placa-mãe, memória, processador, discos), periféricos, Windows 7 e 10, Linux, Word, Excel e PowerPoint, LibreOffice, Outlook, navegadores e segurança.",
    },
    falta: {
      pmpr: "Linux, LibreOffice Writer e Calc, periféricos e celular Android.",
      ppf: "Word, Excel e LibreOffice, voz sobre IP, videoconferência, backup, Power BI e banco de dados.",
      pppr: "Hardware, periféricos, Linux, Word, Excel, PowerPoint, LibreOffice, Outlook e backup.",
    },
  },
  {
    id: "con",
    nome: "Direito Constitucional",
    curto: "Constitucional",
    icone: "⚖️",
    grupos: ["con"],
    em: { prf: "sim", pmpr: "sim", ppf: "sim", pppr: "sim" },
    nucleo: "Direitos e garantias fundamentais (art. 5º), nacionalidade, direitos políticos e segurança pública (art. 144).",
    pede: {
      prf: "Poder constituinte e emendas, direitos e garantias fundamentais, remédios constitucionais, Poder Executivo, bens e competências da União, Forças Armadas, segurança pública e atribuições da PRF, ordem social.",
      pmpr: "Princípios fundamentais, direitos individuais, nacionalidade, direitos políticos, Administração Pública (art. 37 em diante), militares dos estados, Justiça Militar e tribunais dos estados, Forças Armadas e segurança pública.",
      ppf: "Direitos e garantias fundamentais, Poder Executivo e segurança pública.",
      pppr: "Direitos e garantias fundamentais, Poder Legislativo, Poder Executivo e segurança pública.",
    },
    falta: {
      pmpr: "Administração Pública na Constituição, militares dos estados (art. 42), Justiça Militar e tribunais dos estados.",
      pppr: "Poder Legislativo.",
    },
  },
  {
    id: "dh",
    nome: "Direitos Humanos",
    curto: "Direitos Humanos",
    icone: "🕊️",
    grupos: ["dh"],
    em: { prf: "sim", pmpr: "sim", ppf: "sim", pppr: "sim" },
    nucleo: "Declaração Universal dos Direitos Humanos (1948). O Pacto de São José cai em 3 deles.",
    pede: {
      prf: "Direitos humanos na Constituição e os tratados, Declaração Universal (1948) e Pacto de São José da Costa Rica.",
      pmpr: "Declaração Universal (arts. 1 a 30), Pacto de São José (arts. 1 a 32) e Código de Conduta da ONU para os encarregados de aplicar a lei (arts. 1 a 8).",
      ppf: "Declaração Universal, direitos fundamentais na Constituição (arts. 5º a 15), Regras Mínimas da ONU para o tratamento de presos, Programa Nacional de Direitos Humanos, colegiados federais e conselhos da Lei de Execução Penal.",
      pppr: "Teoria geral, sistema da ONU, sistema interamericano (Corte Interamericana), tratados no direito brasileiro, controle de convencionalidade e grupos vulneráveis.",
    },
    falta: {
      pmpr: "Código de Conduta da ONU para os encarregados de aplicar a lei (1979).",
      ppf: "Regras Mínimas da ONU para presos, Programa Nacional de Direitos Humanos (Decreto 7.037/2009), Decreto 9.759/2019 e conselhos da Lei de Execução Penal.",
      pppr: "Teoria geral mais a fundo, órgãos da ONU e da OEA e controle de convencionalidade.",
    },
  },
  {
    id: "especial",
    nome: "Legislação Penal Especial",
    curto: "Leg. Penal Especial",
    icone: "📜",
    grupos: ["especial"],
    em: { prf: "sim", pmpr: "sim", ppf: "sim", pppr: "sim" },
    nucleo: "Tortura, Estatuto do Desarmamento, drogas, organizações criminosas e abuso de autoridade.",
    pede: {
      prf: "Identificação (Leis 5.553/1968 e 12.037/2009), ECA, crimes hediondos, Juizados (Lei 9.099), tortura, crimes ambientais, Estatuto do Desarmamento, drogas, organizações criminosas, SUSP (Lei 13.675) e abuso de autoridade.",
      pmpr: "Crimes hediondos, tortura, Desarmamento, drogas, organizações criminosas, abuso de autoridade, Estatuto da Pessoa Idosa, racismo (Lei 7.716), Estatuto da Igualdade Racial, Maria da Penha (medidas protetivas) e partes do ECA.",
      ppf: "Organizações criminosas, lavagem de dinheiro, tortura, anticorrupção (Lei 12.846), abuso de autoridade, improbidade (Lei 8.429), Desarmamento, drogas e Pacote Anticrime (Lei 13.964).",
      pppr: "Drogas, hediondos, abuso de autoridade, Desarmamento e o decreto dele (11.615/2023), interceptação telefônica (Lei 9.296), organizações criminosas, Maria da Penha, tortura, crimes ambientais, ECA, Estatuto da Pessoa Idosa, Lei de Acesso à Informação, Pacote Anticrime e leis estaduais do Paraná.",
    },
    falta: {
      pmpr: "Estatuto da Pessoa Idosa, Lei 7.716/1989 (racismo), Estatuto da Igualdade Racial e Maria da Penha.",
      ppf: "Lavagem de dinheiro, anticorrupção, improbidade administrativa e Pacote Anticrime.",
      pppr: "Interceptação telefônica, Maria da Penha, Estatuto da Pessoa Idosa, Decreto 11.615/2023, Pacote Anticrime e as leis estaduais. A Lei de Acesso à Informação está em Ética da PRF.",
    },
  },
  {
    id: "penal",
    nome: "Direito Penal",
    curto: "Penal",
    icone: "🔒",
    grupos: ["penal"],
    em: { prf: "sim", pmpr: "nao", ppf: "sim", pppr: "sim" },
    pede: {
      prf: "Princípios, lei penal no tempo e no espaço, dolo e culpa, erro, tentativa, ilicitude, culpabilidade e crimes contra a pessoa, o patrimônio, a dignidade sexual, a incolumidade pública, a fé pública e a Administração Pública.",
      pmpr: "Não cai no edital de 2025. A PMPR cobra só as leis penais especiais (linha Leg. Penal Especial).",
      ppf: "Aplicação da lei penal, fato típico, tentativa, ilicitude e crimes contra a pessoa, o patrimônio, a fé pública e a Administração Pública.",
      pppr: "Aplicação da lei penal, crime, imputabilidade, concurso de pessoas, penas, medidas de segurança, ação penal, extinção da punibilidade e crimes contra a pessoa, o patrimônio, a dignidade sexual, a paz pública, a Administração Pública e o Estado Democrático de Direito.",
    },
    falta: {
      pppr: "Concurso de pessoas, penas, medidas de segurança, ação penal e crimes contra a paz pública e contra o Estado Democrático de Direito.",
    },
  },
  {
    id: "proc",
    nome: "Direito Processual Penal",
    curto: "Processo Penal",
    icone: "🔍",
    grupos: ["proc"],
    em: { prf: "sim", pmpr: "nao", ppf: "sim", pppr: "sim" },
    pede: {
      prf: "Ação penal, termo circunstanciado (Lei 9.099), provas, busca e apreensão, prisão e flagrante, identificação criminal e diligências do inquérito (arts. 6º e 13 do CPP).",
      pmpr: "Não cai no edital de 2025.",
      ppf: "Aplicação da lei processual, inquérito policial, ação penal, prisões, liberdade provisória e fiança, crimes de responsabilidade dos funcionários públicos e habeas corpus.",
      pppr: "Inquérito, ação penal, competência, questões incidentes, provas, acusado e defensor, prisões e medidas cautelares, citações, sentença, processo comum, habeas corpus e execução das penas.",
    },
    falta: {
      ppf: "Inquérito policial completo, liberdade provisória e fiança, processo dos crimes de funcionário público e habeas corpus.",
      pppr: "Competência, incidentes, citações, sentença, processo comum, habeas corpus, execução das penas, graça, indulto e anistia.",
    },
  },
  {
    id: "adm",
    nome: "Direito Administrativo",
    curto: "Administrativo",
    icone: "🏛️",
    grupos: ["adm-a", "adm-b"],
    em: { prf: "sim", pmpr: "nao", ppf: "sim", pppr: "sim" },
    pede: {
      prf: "Organização administrativa, ato administrativo, agentes públicos (Lei 8.112 e carreira de PRF), poderes, licitação, controle, responsabilidade civil do Estado e princípios.",
      pmpr: "Não cai como matéria; só a parte de Administração Pública da Constituição (linha Constitucional).",
      ppf: "Lei 8.112, poderes, licitações, convênios federais (Decreto 6.170/2007 e Portaria 424/2016), responsabilidade civil do Estado e processo administrativo (Lei 9.784/1999).",
      pppr: "Conceito, princípios, organização, atos, poderes, responsabilidade do Estado, agentes, improbidade, bens públicos, intervenção na propriedade, serviços públicos, controle e processo administrativo.",
    },
    falta: {
      ppf: "Convênios federais e a Lei 9.784/1999. O edital de 2020 citava a Lei 8.666, que foi trocada pela Lei 14.133/2021.",
      pppr: "Improbidade, bens públicos, intervenção na propriedade, serviços públicos e processo administrativo.",
    },
  },
  {
    id: "eca",
    nome: "Estatuto da Criança e do Adolescente",
    curto: "ECA",
    icone: "🧒",
    grupos: ["eca"],
    em: { prf: "sim", pmpr: "sim", ppf: "nao", pppr: "sim" },
    pede: {
      prf: "ECA e suas alterações (está em Legislação Especial no edital).",
      pmpr: "Disposições preliminares (arts. 1º a 6º), medidas de proteção (arts. 98 a 102), ato infracional (arts. 103 a 128) e medidas para os pais (arts. 129 e 130).",
      ppf: "Não cai no edital de 2020.",
      pppr: "Disposições preliminares, direitos fundamentais, prevenção e várias partes da parte especial.",
    },
  },
  {
    id: "etica",
    nome: "Ética e Cidadania",
    curto: "Ética",
    icone: "🤝",
    grupos: ["etica"],
    em: { prf: "sim", pmpr: "nao", ppf: "sim", pppr: "nao" },
    pede: {
      prf: "Ética e moral, valores, função pública, Código de Ética do servidor federal (Decreto 1.171/1994), comissões de ética, governança, acesso à informação e conflito de interesses.",
      pmpr: "Não cai como na PRF. A PMPR cobra o Regulamento de Ética dos militares estaduais, em Legislação Institucional.",
      ppf: "Ética e moral, valores, democracia, função pública, Lei 8.112 (sindicância e processo disciplinar) e Lei 12.846/2013 (anticorrupção).",
      pppr: "Não cai como matéria. A Lei de Acesso à Informação aparece em Legislação.",
    },
    falta: {
      ppf: "Sindicância e processo disciplinar da Lei 8.112 em detalhe e a Lei 12.846/2013.",
    },
  },
  {
    id: "geopolitica",
    nome: "Geopolítica",
    curto: "Geopolítica",
    icone: "🌎",
    grupos: ["geopolitica"],
    em: { prf: "sim", pmpr: "parte", ppf: "nao", pppr: "nao" },
    pede: {
      prf: "Brasil político, organização do Estado, divisão do trabalho, cidades e metrópoles, população e migrações, indústria e agricultura, transportes, economia mundial, meio ambiente e biomas.",
      pmpr: "Na PMPR a matéria é Geografia: população, economia, agricultura, indústria, cidades, transportes, fronteiras, globalização e cartografia, no Paraná, no Brasil e no mundo.",
      ppf: "Não cai.",
      pppr: "Não cai.",
    },
    falta: {
      pmpr: "Cartografia (escalas, coordenadas e projeções), Geografia do Paraná, ordem mundial e blocos econômicos.",
    },
  },
  {
    id: "transito",
    nome: "Legislação de Trânsito",
    curto: "Trânsito",
    icone: "🚦",
    grupos: ["transito"],
    em: { prf: "sim", pmpr: "nao", ppf: "nao", pppr: "nao" },
    pede: {
      prf: "Código de Trânsito (com a Lei 14.071/2020), Lei 5.970/1973 e as resoluções do CONTRAN do edital.",
      pmpr: "Não cai.",
      ppf: "Não cai.",
      pppr: "Não cai.",
    },
  },
  {
    id: "fisica",
    nome: "Física",
    curto: "Física",
    icone: "⚙️",
    grupos: ["fisica"],
    em: { prf: "sim", pmpr: "nao", ppf: "nao", pppr: "nao" },
    pede: {
      prf: "Cinemática, movimento circular, leis de Newton, trabalho, potência, energia, atrito, quantidade de movimento e colisões.",
      pmpr: "Não cai.",
      ppf: "Não cai.",
      pppr: "Não cai.",
    },
  },
  {
    id: "espanhol",
    nome: "Espanhol",
    curto: "Espanhol",
    icone: "🗣️",
    grupos: ["espanhol"],
    em: { prf: "sim", pmpr: "nao", ppf: "nao", pppr: "nao" },
    pede: {
      prf: "Leitura de texto em espanhol e a gramática que ajuda a entender o texto.",
      pmpr: "Não cai.",
      ppf: "Não cai.",
      pppr: "Não cai.",
    },
  },
];

export interface MateriaFora {
  id: string;
  nome: string;
  icone: string;
  concursos: ConcursoId[];
  topicos: string;
  /** Onde estudar no app. */
  links?: { rotulo: string; curso: CursoId; entrada: EntradaCurso }[];
}

/** Matérias que a PRF não cobre: só nos outros concursos. */
export const MATERIAS_FORA: MateriaFora[] = [
  {
    id: "lep",
    nome: "Execução Penal (LEP)",
    icone: "⛓️",
    concursos: ["ppf", "pppr"],
    topicos: "Lei de Execução Penal (Lei 7.210/1984). Cai nas duas polícias penais: vale a pena estudar uma vez para as duas.",
  },
  {
    id: "hist",
    nome: "História do Brasil e do Paraná",
    icone: "🏺",
    concursos: ["pmpr"],
    topicos: "Brasil Colônia, Império e República. No Paraná: ocupação do território, tropeirismo, emancipação política, ciclo da erva-mate e Guerra do Contestado. Era Vargas, regime militar, abertura política e Constituição de 1988.",
    links: [{ rotulo: "Aulas no curso PMPR", curso: "pmpr", entrada: { aba: "aulas", grupo: "hist" } }],
  },
  {
    id: "geo",
    nome: "Geografia",
    icone: "🗺️",
    concursos: ["pmpr"],
    topicos: "Uma parte vem da Geopolítica da PRF. Falta cartografia (mapas, escalas, coordenadas, projeções, GPS), Geografia do Paraná, ordem mundial e blocos econômicos.",
    links: [{ rotulo: "Aulas no curso PMPR", curso: "pmpr", entrada: { aba: "aulas", grupo: "geo" } }],
  },
  {
    id: "leginst",
    nome: "Legislação Institucional",
    icone: "🎖️",
    concursos: ["pmpr"],
    topicos: "Lei 14.751/2023 (Lei Orgânica Nacional das Polícias Militares), Código da PM do Paraná (hierarquia, compromisso, deveres e responsabilidades) e Regulamento de Ética dos militares estaduais (Decreto estadual 5.075/1998).",
    links: [{ rotulo: "Aulas no curso PMPR", curso: "pmpr", entrada: { aba: "aulas", grupo: "leginst" } }],
  },
  {
    id: "redacao-pmpr",
    nome: "Redação da PMPR",
    icone: "✍️",
    concursos: ["pmpr"],
    topicos: "Prova discursiva de 0 a 20 pontos; precisa de 10 para passar. Há 25 temas para treinar no Português Inteligente da PRF ADM.",
    links: [
      { rotulo: "Treinar os 25 temas", curso: "prf-adm", entrada: { aba: "portugues", tela: "redacao" } },
      { rotulo: "Aulas no curso PMPR", curso: "pmpr", entrada: { aba: "aulas", grupo: "discursiva" } },
    ],
  },
  {
    id: "penal-federal",
    nome: "Execução Penal e sistema penitenciário federal",
    icone: "🏢",
    concursos: ["ppf"],
    topicos: "Uso da força (Portaria 4.226/2010), visita a presos federais, SUSP (Lei 13.675/2018, que também cai na PRF), Doutrina Nacional de Atuação Integrada, Plano Nacional de Política Criminal, Regulamento Penitenciário Federal (Decreto 6.049/2007), regimento do órgão, carreiras e transferência de presos para presídios federais (Lei 11.671/2008).",
  },
  {
    id: "atualidades-ppf",
    nome: "Atualidades (só na discursiva)",
    icone: "📰",
    concursos: ["ppf"],
    topicos: "Justiça criminal, sistema prisional brasileiro e federal e políticas de segurança pública.",
  },
  {
    id: "penitenciario-pr",
    nome: "Direito Penitenciário e Criminologia",
    icone: "📚",
    concursos: ["pppr"],
    topicos: "Estatuto Penitenciário do Paraná, Lei Complementar 245/2022 (quadro da Polícia Penal do Paraná), Lei 21.404/2023 (Conselho da Polícia Penal) e noções de Criminologia: conceito, objeto, método e histórico.",
  },
];

/** Quantas matérias do quadro caem em cada concurso (a parcial conta à parte). */
export function contagem(c: ConcursoId): { sim: number; parte: number } {
  let sim = 0;
  let parte = 0;
  for (const m of MATERIAS_COMUNS) {
    if (m.em[c] === "sim") sim++;
    else if (m.em[c] === "parte") parte++;
  }
  return { sim, parte };
}

/** Em quantos concursos a matéria cai (parcial conta). */
export const emQuantos = (m: MateriaComum) => CONCURSOS.filter((c) => m.em[c.id] !== "nao").length;
