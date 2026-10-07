import type { SubjectId, VideoRecurso } from "../lib/types";

/**
 * Vídeos por tópico do conteúdo. A chave interna é o texto exato de ConteudoTopico.topico.
 * Todos vieram de buscas reais no YouTube (06/10/2026) e foram conferidos no oEmbed
 * (vídeo público e incorporável) antes de entrar aqui. Título e canal são os do próprio
 * YouTube; a duração é a mostrada na busca. Não acrescentar links de memória nem adivinhar IDs.
 */
export const VIDEOS_POR_TOPICO: Partial<Record<SubjectId, Record<string, VideoRecurso[]>>> = {
  for: {
    "Medicina legal: tanatologia, traumatologia, asfixiologia, toxicologia": [
      {
        titulo: "13 Tanatologia Conceito de morte, causas jurídicas, perinecroscopia e lesões peri e post mortem",
        canal: "Acaz Priviat",
        url: "https://www.youtube.com/watch?v=k47mk6SG_HQ",
        duracao: "28:24",
      },
      {
        titulo: "Medicina legal - Traumatologia Forense",
        canal: "Davi Vale",
        url: "https://www.youtube.com/watch?v=QsiNcmLIy9o",
        duracao: "14:13",
      },
      {
        titulo: "Medicina Legal - Asfixiologia Forense - 2020",
        canal: "Professor Alexandre Herculano",
        url: "https://www.youtube.com/watch?v=QrYT0HA0gAU",
        duracao: "1:10:30",
      },
      {
        titulo: "Concurso Polícia Civil PR | Como a FGV Cobra Medicina Legal?",
        canal: "Gran Cursos Online",
        url: "https://www.youtube.com/watch?v=nAYm9CnKZX0",
        duracao: "58:36",
      },
    ],
    "Papiloscopia (Sistema de Vucetich) e identificação humana": [
      {
        titulo: "AULÃO: APRENDA TUDO SOBRE PAPILOSCOPIA!",
        canal: "AMANDA CSI",
        url: "https://www.youtube.com/watch?v=FxMl-NJdGN0",
        duracao: "20:02",
      },
      {
        titulo: "Fórmula dactilóscopica de VUCETICH",
        canal: "Perilover",
        url: "https://www.youtube.com/watch?v=nv2mwH2QSzY",
        duracao: "11:55",
      },
      {
        titulo: "Tipos fundamentais de Vucetich - Resolução de Questões - Papiloscopia",
        canal: "Perilover",
        url: "https://www.youtube.com/watch?v=bkSram4rBeU",
        duracao: "14:41",
      },
    ],
    "Criminalística e documentoscopia": [
      {
        titulo: "AULÃO CRIMINALÍSTICA CIÊNCIAS FORENSES BANCA FGV EDITAL AGENTE PCPR | CONCURSO POLÍCIA CIVIL PARANÁ",
        canal: "Bozzano Concursos",
        url: "https://www.youtube.com/watch?v=pzmPq4NibFw",
        duracao: "13:17",
      },
      {
        titulo: "Concurso Câmara dos Deputados | Noções de Criminalística: Tópicos mais cobrados!",
        canal: "Gran Cursos Online",
        url: "https://www.youtube.com/watch?v=M4VwyZ58Frg",
        duracao: "52:54",
      },
      {
        titulo: "Série Periciando (SmartPol) - Pedro Canezin - Documentoscopia",
        canal: "SmartPol Carreiras Policiais",
        url: "https://www.youtube.com/watch?v=GIkA2s1wjFI",
        duracao: "14:50",
      },
    ],
    "Cadeia de custódia (arts. 158-A a 158-F do CPP)": [
      {
        titulo: "Cadeia de Custódia | Prof.ª Luciana Gazzola",
        canal: "Supremo",
        url: "https://www.youtube.com/watch?v=bDUWf1HkCIo",
        duracao: "34:09",
      },
      {
        titulo: "Cadeia de Custódia: as 10 etapas do art. 158-B | Criminalística para Concursos",
        canal: "Aprova Concursos",
        url: "https://www.youtube.com/watch?v=UKgFP0F5q7Y",
        duracao: "36:30",
      },
    ],
    "Balística forense": [
      {
        titulo: "AULA 28 - REVISÃO BALÍSTICA FORENSE",
        canal: "Medicina Legal",
        url: "https://www.youtube.com/watch?v=WZo1Bs7DQ3k",
        duracao: "18:46",
      },
      {
        titulo: "AULÃO BALÍSTICA FORENSE MEDICINA LEGAL BANCA FGV EDITAL AGENTE PCPR | CONCURSO POLÍCIA CIVIL PARANÁ",
        canal: "Bozzano Concursos",
        url: "https://www.youtube.com/watch?v=5YY-7Lsz-8o",
        duracao: "28:29",
      },
    ],
    "Criminologia e vitimologia": [
      {
        titulo: "Conceito, métodos, objetos e finalidades da Criminologia || Missão PC-SP",
        canal: "Prof. Diego Pureza",
        url: "https://www.youtube.com/watch?v=c9RM51Ig7To",
        duracao: "25:48",
      },
      {
        titulo: "VITIMOLOGIA - O estudo das VÍTIMAS | Conceito, Tipos e Classificação | Criminologia e Psicologia",
        canal: "Me Julga - Cíntia Brunelli",
        url: "https://www.youtube.com/watch?v=n0-yz1T_8hk",
        duracao: "14:44",
      },
      {
        titulo: "AULÃO CRIMINOLOGIA CIÊNCIAS FORENSES BANCA FGV EDITAL AGENTE PCPR | CONCURSO POLÍCIA CIVIL PARANÁ",
        canal: "Bozzano Concursos",
        url: "https://www.youtube.com/watch?v=aIouDVzNTw4",
        duracao: "36:27",
      },
    ],
    "Criminologia digital": [
      {
        titulo: "Criminologia Digital | Prof. Murillo Ribeiro",
        canal: "Supremo",
        url: "https://www.youtube.com/watch?v=gU5gSzZY8MU",
        duracao: "20:20",
      },
      {
        titulo: "Gran Faculdade: Criminologia Digital com Núbia de Paula e Mariana Barreiras",
        canal: "Gran Faculdade",
        url: "https://www.youtube.com/watch?v=_6Rwu4hUcI4",
        duracao: "18:36",
      },
    ],
    "Local de crime: isolamento, preservação e etapas do exame pericial": [
      {
        titulo: "ISOLAMENTO E PRESERVAÇÃO DO LOCAL DO CRIME",
        canal: "RATEIO QCONCURSOS",
        url: "https://www.youtube.com/watch?v=WjjzJuFNr4k",
        duracao: "8:18",
      },
      {
        titulo: "CRIMINALÍSTICA | Vestígios de Local de Crime (Profº Pedro Canezin)",
        canal: "SmartPol Carreiras Policiais",
        url: "https://www.youtube.com/watch?v=in2AN47cM4g",
        duracao: "23:31",
      },
    ],
    "Necropsia x exame de corpo de delito — diferenças e finalidades": [
      {
        titulo: "EXAME DE CORPO DE DELITO: o que é? | Processo Penal | Provas em Espécie | Aula 04",
        canal: "Ana Carolina Aidar",
        url: "https://www.youtube.com/watch?v=0ThmYWXEwSE",
        duracao: "7:32",
      },
      {
        titulo: "Diferença entre Corpo de Delito e Exame de Corpo de Delito - Direito em Desenho",
        canal: "Felipe Soares Macedo",
        url: "https://www.youtube.com/watch?v=6i02n1AmO3A",
        duracao: "6:37",
      },
      {
        titulo: "Necropsia: Incisões e as Técnicas - Explicadas de Forma Simples",
        canal: "Perícia com Luana",
        url: "https://www.youtube.com/watch?v=CEY-FV7OnKw",
        duracao: "20:33",
      },
    ],
    "Perfil genético (DNA) e bancos de dados forenses (RIBPG)": [
      {
        titulo: "Identificação Criminal e Banco de Perfis Genéticos | Pacote Anticrime | Marcelo Lebre | Aula 6",
        canal: "Kultivi",
        url: "https://www.youtube.com/watch?v=cqcbsz6DV9A",
        duracao: "17:14",
      },
      {
        titulo: "Banco de DNA e Rede Integrada de Banco de Perfis Genéticos no Brasil.",
        canal: "Universidade do DNA",
        url: "https://www.youtube.com/watch?v=bWImjZycbtY",
        duracao: "1:42:27",
      },
    ],
    "Balística: percussão, tiro à queima-roupa e curta/média/longa distância": [
      {
        titulo: "VIDEOAULA 17 - Lesões causadas por projéteis de arma de fogo (2)",
        canal: "Estudo com Roberto Blanco",
        url: "https://www.youtube.com/watch?v=DzLcygRx7FY",
        duracao: "42:47",
      },
      {
        titulo: "Universo da balística: conheça os tipos de tiro",
        canal: "AMANDA CSI",
        url: "https://www.youtube.com/watch?v=iuK1ztU06Xo",
        duracao: "3:02",
      },
    ],
  },
  leg: {
    "Constituição do Estado do Paraná": [
      {
        titulo: "(AULA 1) TJPR _ CONSTITUIÇÃO DO ESTADO DO PARANÁ _",
        canal: "Desafiando Concursos",
        url: "https://www.youtube.com/watch?v=iCe8Ngp79lU",
        duracao: "32:56",
      },
      {
        titulo: "CONCURSO PC PR 2026 (LEGISLAÇÃO ESTADUAL E INSTITUCIONAL - CONSTITUIÇÃO )",
        canal: "Concursos com João",
        url: "https://www.youtube.com/watch?v=XX0OxpVAMso",
        duracao: "25:44",
      },
    ],
    "LC Estadual 259/2023 (regime jurídico da PCPR)": [
      {
        titulo: "AULÃO COMPLETO ESTATUTO DA POLÍCIA CIVIL DO PARANÁ | EDITAL CONCURSO AGENTE PCPR",
        canal: "Bozzano Concursos",
        url: "https://www.youtube.com/watch?v=4t4XBklChZU",
        duracao: "29:31",
      },
      {
        titulo: "PCPR 2026 — LC 259/2023 — Aula 01: Disposições Preliminares e Carreiras Policiais | Concurso PCPR",
        canal: "Concurseiros Concurseiro",
        url: "https://www.youtube.com/watch?v=LC7l9RIy6HQ",
        duracao: "16:29",
      },
    ],
    "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR)": [
      {
        titulo: "AULÃO LEI ORGÂNICA DA POLÍCIA CIVIL DO PARANÁ | EDITAL CONCURSO PCPR | PROF. DELEGADO GUILHERME",
        canal: "Bozzano Concursos",
        url: "https://www.youtube.com/watch?v=TC-PQxrQDWU",
        duracao: "30:22",
      },
      {
        titulo: "Legislação Institucional PCPR Lei Orgânica da PCPR",
        canal: "Rafael Rossi",
        url: "https://www.youtube.com/watch?v=53i5a-2hpng",
        duracao: "23:54",
      },
    ],
    "Lei Estadual 21.894/2024 (Código Disciplinar da PCPR)": [
      {
        titulo: "AULÃO CÓDIGO DISCIPLINAR POLÍCIA CIVIL DO PARANÁ | EDITAL CONCURSO PCPR | PROF. DELEGADO GUILHERME",
        canal: "Bozzano Concursos",
        url: "https://www.youtube.com/watch?v=LxkQuSL2bJw",
        duracao: "29:47",
      },
      {
        titulo: "REVISÃO FINAL CÓDIGO DISCIPLINAR PCPR | PROF. DELEGADO GUILHERME CONCURSO POLÍCIA CIVIL DO PARANÁ",
        canal: "Bozzano Concursos",
        url: "https://www.youtube.com/watch?v=n6hCzaknyEs",
        duracao: "32:02",
      },
    ],
    "Lei 12.037/2009 (Identificação Criminal)": [
      {
        titulo: "LEI 12.037/2009 - IDENTIFICAÇÃO CRIMINAL - PARTE 1 | AULA GRATUITA COM O PROFESSOR FÁBIO ROQUE",
        canal: "Decorando a Lei Seca",
        url: "https://www.youtube.com/watch?v=DRZ_BTxuuiM",
        duracao: "26:10",
      },
      {
        titulo: "AULA GRATUITA: Lei de Identificação Criminal (Lei nº 12.037/09) - Legislação Penal Especial",
        canal: "Dedicação Delta",
        url: "https://www.youtube.com/watch?v=1Un-4H4YBdw",
        duracao: "31:32",
      },
    ],
    "Lei 13.869/2019 (Abuso de Autoridade)": [
      {
        titulo: "LEI DE ABUSO DE AUTORIDADE - Lei 13.869/2019 (principais pontos) | c/ Material Gratuito",
        canal: "Prof. Diego Pureza",
        url: "https://www.youtube.com/watch?v=tRaMAOv4gyk",
        duracao: "59:13",
      },
      {
        titulo: "FGV Covarde! Pegadinha Sobre Abuso de Autoridade Que Vai Derrubar Na PC PR",
        canal: "Mais Preparatório | Mais Militar ",
        url: "https://www.youtube.com/watch?v=kfGIO0hODHc",
        duracao: "13:42",
      },
    ],
    "LGPD e Lei de Acesso à Informação (12.527/2011)": [
      {
        titulo: "LEI DE ACESSO À INFORMAÇÃO (Lei 12.527) - RESUMO da LAI - Sigilo 100 anos",
        canal: "Me Julga - Cíntia Brunelli",
        url: "https://www.youtube.com/watch?v=4pmxaESSBKw",
        duracao: "10:39",
      },
      {
        titulo: "Legislação Institucional PCPR - Lei de Acesso à Informação",
        canal: "Rafael Rossi",
        url: "https://www.youtube.com/watch?v=_6tCHyFoN_c",
        duracao: "24:55",
      },
      {
        titulo: "Legislação Institucional PCPR - LGPD",
        canal: "Rafael Rossi",
        url: "https://www.youtube.com/watch?v=fORH37Cq70w",
        duracao: "25:26",
      },
    ],
    "Estrutura organizacional da PCPR (delegacias, carreiras, hierarquia)": [
      {
        titulo: "PCPR 2026 — Lei 23.213/2026 — Aula 45: Estrutura Organizacional | Lei Orgânica da PCPR",
        canal: "Concurseiros Concurseiro",
        url: "https://www.youtube.com/watch?v=iTI7tGv4k5A",
        duracao: "5:20",
      },
      {
        titulo: "REVISÃO FINAL INSTITUCIONAL AGENTE PCPR | PROF. DELEGADO GUILHERME CONCURSO POLÍCIA CIVIL DO PARANÁ",
        canal: "Bozzano Concursos",
        url: "https://www.youtube.com/watch?v=A5Ou1kJ9DMg",
        duracao: "19:49",
      },
    ],
    "Lei Estadual 6.174/1970 (Estatuto dos Servidores do PR)": [
      {
        titulo: "Estatuto dos Servidores do Paraná – Lei n. 6.174/70: Prof. Rodrigo Cardoso",
        canal: "Gran Cursos Online",
        url: "https://www.youtube.com/watch?v=KEqzuPLpx-k",
        duracao: "1:39:38",
      },
    ],
    "Alterações legislativas de 2025/2026 na estrutura da Polícia Civil do PR": [
      {
        titulo: "NOVA LEI ORGÂNICA DA PCPR - Lei 23213/2026",
        canal: "Fábio Verdasca Investigador ",
        url: "https://www.youtube.com/watch?v=cBboW3NfJs4",
        duracao: "12:19",
        dica: "Vídeo sobre a Lei 23.213/2026. Não achamos vídeo específico das LCs 285 e 289/2025 (curso de formação no estágio probatório, laudo investigativo do Agente): revise-as no resumo do app.",
      },
      {
        titulo: "Operação PC PR: Aula de Legislação Institucional | Prof. Vinicius Nascimento!",
        canal: "DSO Concursos",
        url: "https://www.youtube.com/watch?v=eKp6qM14JuU",
        duracao: "37:10",
      },
    ],
    "Lei 14.735/2023 (Lei Orgânica Nacional das Polícias Civis)": [
      {
        titulo: "Concursos para Polícia Civil: Entendendo a Lei Orgânica Nacional das Polícias Civis",
        canal: "Gran Cursos Online",
        url: "https://www.youtube.com/watch?v=s-Pxum8UniY",
        duracao: "54:21",
      },
      {
        titulo: "Lei Orgânica Nacional das Polícias Civis - Lei 14.735/2023 - Parte 1",
        canal: "Gustavo Fregapani",
        url: "https://www.youtube.com/watch?v=YiAIeLvpaCE",
        duracao: "27:10",
      },
    ],
  },
  pen: {
    "Teoria geral do crime, tempo e lugar do crime": [
      {
        titulo: "TEORIA DO CRIME: entenda de uma vez por todas!",
        canal: "Prof. Diego Pureza",
        url: "https://www.youtube.com/watch?v=3TltdLt49rU",
        duracao: "13:23",
      },
      {
        titulo: "Tempo e Lugar do crime (artigos 4º e 6º do CP) ║Teorias, exemplos║Mnemônico LUTA║Direito Penal",
        canal: "Insista // Persista e nunca Desista!",
        url: "https://www.youtube.com/watch?v=LfQMllg3Enk",
        duracao: "5:25",
      },
    ],
    "Aplicação e espécies de pena": [
      {
        titulo: "DOSIMETRIA DA PENA (passo a passo) - Como é feito o cálculo da pena de um crime | Direito Penal",
        canal: "Me Julga - Cíntia Brunelli",
        url: "https://www.youtube.com/watch?v=sZLMWsCYCqo",
        duracao: "13:06",
      },
      {
        titulo: "Quais são os TIPOS DE PENAS no Brasil? | Espécies de Penas | Direito e Execução Penal",
        canal: "Me Julga - Cíntia Brunelli",
        url: "https://www.youtube.com/watch?v=XLV9O1F9eVU",
        duracao: "11:15",
      },
    ],
    "Crimes contra a pessoa e contra o patrimônio": [
      {
        titulo: "Direito Penal: Crimes Contra a Pessoa e o Patrimônio | O que mais cai com Érico Palazzo",
        canal: "Gran Cursos Online",
        url: "https://www.youtube.com/watch?v=a7YwMp0R0jE",
        duracao: "56:01",
        dica: "A Lei 15.397/2026 (em vigor desde 04/05/2026) endureceu as penas de furto, roubo, latrocínio e receptação e tornou o estelionato de ação pública incondicionada — confira as penas atuais no resumo do app.",
      },
      {
        titulo: "CRIMES CONTRA O PATRIMÔNIO | FURTO (ART. 155) | ATUALIZADO 2026",
        canal: "FZ Concursos",
        url: "https://www.youtube.com/watch?v=1iWc9dajQCw",
        duracao: "48:27",
        dica: "Confira as penas atuais do furto no resumo do app (Lei 15.397/2026).",
      },
    ],
    "Crimes contra a administração pública": [
      {
        titulo: "Crimes contra a Administração Pública | Prof. Daniel Buchmüller",
        canal: "Supremo",
        url: "https://www.youtube.com/watch?v=kyIEj6PQu5I",
        duracao: "32:21",
      },
      {
        titulo: "CRIMES contra a Administração Pública - Corrupção, Peculato, Prevaricação e Outros | Direito Penal",
        canal: "Me Julga - Cíntia Brunelli",
        url: "https://www.youtube.com/watch?v=d5P1ODdPj2o",
        duracao: "18:56",
      },
    ],
    "Lei Maria da Penha, Lei de Drogas, Estatuto do Desarmamento": [
      {
        titulo: "LEI MARIA DA PENHA - LEI 11.340/06 | PARA GUARDA MUNICIPAL | ATUALIZADA 2026",
        canal: "FZ Concursos",
        url: "https://www.youtube.com/watch?v=rucJGwqYHhs",
        duracao: "29:49",
      },
      {
        titulo: "NÃO ERRE MAIS LEI DE DROGAS - Lei 11.343/06 | QUESTÕES FGV",
        canal: "VALE CONCURSOS",
        url: "https://www.youtube.com/watch?v=KrUfsHm6C20",
        duracao: "39:39",
        dica: "Vídeo anterior à Lei Antifacção (15.358/2026), que também alterou a Lei de Drogas.",
      },
      {
        titulo: "FGV NA MIRA | Estatuto do Desarmamento (Lei nº 10.826/2003)",
        canal: "Gran Jurídico",
        url: "https://www.youtube.com/watch?v=bKaXLcpKO7c",
        duracao: "58:01",
        dica: "Vídeo anterior à Lei Antifacção (15.358/2026), que também alterou o Estatuto do Desarmamento.",
      },
    ],
    "Lei de Organizações Criminosas (12.850/2013) e Pacote Anticrime (13.964/2019)": [
      {
        titulo: "FGV NA MIRA | Lei de Organização Criminosa (Lei nº 12.850/2013)",
        canal: "Gran Jurídico",
        url: "https://www.youtube.com/watch?v=nyTPiG5W0l4",
        duracao: "59:26",
        dica: "Não confunda com a \"facção criminosa\" (organização criminosa ultraviolenta) criada pela Lei 15.358/2026, que tem tópico próprio em Processo Penal.",
      },
      {
        titulo: "FGV NA MIRA | Pacote Anticrime (Lei nº 13.964/2019)",
        canal: "Gran Jurídico",
        url: "https://www.youtube.com/watch?v=WB020vtNdfY",
        duracao: "59:56",
        dica: "As frações de progressão de regime do Pacote Anticrime foram alteradas em 2026 (Lei Antifacção para os hediondos; Lei 15.402/2026 para os demais crimes) — confira no resumo do app.",
      },
    ],
    "Crimes hediondos (Lei 8.072/90) — rol e efeitos da hediondez": [
      {
        titulo: "Lei dos Crimes Hediondos: Lei 8.072/90 | Missão PCSP 2026",
        canal: "Prof. Diego Pureza",
        url: "https://www.youtube.com/watch?v=qBgAWsFukZA",
        duracao: "1:42:33",
      },
      {
        titulo: "FGV NA MIRA | Lei dos Crimes Hediondos (Lei nº 8.072/1990)",
        canal: "Gran Jurídico",
        url: "https://www.youtube.com/watch?v=SXuyHKQCioE",
        duracao: "57:21",
        dica: "Vídeo anterior às mudanças de 2026 (Lei Antifacção e vicaricídio): o rol atualizado e as novas frações de progressão estão no resumo do app.",
      },
    ],
    "Feminicídio (art. 121-A do CP) e Lei Maria da Penha na prática": [
      {
        titulo: "Lei 14.994/2024 e o Novo Crime de FEMINICÍDIO (Art. 121-A do CP)",
        canal: "Prof. Diego Pureza",
        url: "https://www.youtube.com/watch?v=-f1YqG9qYP4",
        duracao: "9:53",
      },
      {
        titulo: "Feminicídio no Código Penal: Art. 121-A da Lei 14.994/2024 | Aula Completa e Atualizada 2025",
        canal: "Monster Concursos",
        url: "https://www.youtube.com/watch?v=CXahF3lJFaQ",
        duracao: "15:11",
      },
    ],
    "Crimes cibernéticos no Código Penal (invasão de dispositivo — art. 154-A)": [
      {
        titulo: "Crime de Invasão de Dispositivos Informáticos -Artigos 154-A e 154-B do Código Penal Brasileiro",
        canal: "Leticia Steffanne",
        url: "https://www.youtube.com/watch?v=FP-lqZXk8mM",
        duracao: "23:04",
      },
      {
        titulo: "Sexta Extravagante - Crimes Cibernéticos com Diego Fontes",
        canal: "Gran Cursos Online",
        url: "https://www.youtube.com/watch?v=Aalsdny_8Xs",
        duracao: "1:15:10",
      },
    ],
    "Excludentes de ilicitude (legítima defesa, estrito cumprimento do dever legal) aplicadas à atuação policial": [
      {
        titulo: "Legítima Defesa após o pacote anticrime",
        canal: "Prof. Diego Pureza",
        url: "https://www.youtube.com/watch?v=qmtr7eTI7GA",
        duracao: "6:20",
      },
      {
        titulo: "Estrito Cumprimento de Dever Legal e Exercício Regular de Direito | TEORIA DO CRIME - Parte XVI",
        canal: "Ana Carolina Aidar",
        url: "https://www.youtube.com/watch?v=BkQZOLoQUG8",
        duracao: "5:23",
      },
    ],
  },
  pp: {
    "Inquérito policial": [
      {
        titulo: "[ATUALIZADO] Aula Completa de INQUÉRITO POLICIAL para Concursos [Processo Penal]",
        canal: "Professor Rafael Lisbôa - Concursos e OAB",
        url: "https://www.youtube.com/watch?v=MFBv7pOB3hA",
        duracao: "8:47",
      },
      {
        titulo: "FGV NA MIRA | Inquérito Policial",
        canal: "Gran Jurídico",
        url: "https://www.youtube.com/watch?v=LfqHzCR1y0U",
        duracao: "44:51",
      },
    ],
    "Prisão em flagrante e outras prisões": [
      {
        titulo: "Prisão em Flagrante (Processo Penal): Resumo Completo",
        canal: "Direito Desenhado",
        url: "https://www.youtube.com/watch?v=DyHElCvFgGM",
        duracao: "27:52",
      },
      {
        titulo: "PRISÕES E MEDIDAS CAUTELARES - Prisão Preventiva, Temporária, Liberdade Provisória, Medidas Diversas",
        canal: "Me Julga - Cíntia Brunelli",
        url: "https://www.youtube.com/watch?v=uRbaVbpiWfQ",
        duracao: "19:52",
      },
      {
        titulo: "FGV NA MIRA | Lei de Prisão Temporária (Lei nº 7.960/1989)",
        canal: "Gran Jurídico",
        url: "https://www.youtube.com/watch?v=K0zLqCHE29k",
        duracao: "54:48",
      },
    ],
    "Medidas cautelares diversas da prisão": [
      {
        titulo: "Medidas Cautelares Diversas da Prisão | PRISÃO, MEDIDAS CAUTELARES E LIBERDADE PROVISÓRIA - Parte X",
        canal: "Ana Carolina Aidar",
        url: "https://www.youtube.com/watch?v=gI5Lc-opS6k",
        duracao: "6:00",
      },
      {
        titulo: "PRISÃO, MEDIDAS CAUTELARES E LIBERDADE PROVISÓRIA - Parte 1 | Profª. Carolina Máximo",
        canal: "Supremo",
        url: "https://www.youtube.com/watch?v=Jx-ll2bIdJY",
        duracao: "31:41",
      },
    ],
    "Ação penal e prova no processo penal": [
      {
        titulo: "AÇÃO PENAL [aula esquematizada] + RESUMÃO e Questões",
        canal: "Prof. Diego Pureza",
        url: "https://www.youtube.com/watch?v=ftGw2uVK8HI",
        duracao: "33:14",
        dica: "Atenção: a Lei 15.397/2026 revogou o § 5º do art. 171 do CP — o estelionato voltou a ser de ação pública incondicionada (confira no resumo do app).",
      },
      {
        titulo: "TEORIA GERAL DAS PROVAS (RESUMO): Conceito, Objetivo e Principais Regras no Processo Civil e Penal",
        canal: "Me Julga - Cíntia Brunelli",
        url: "https://www.youtube.com/watch?v=4W1urRMCCUE",
        duracao: "11:49",
      },
      {
        titulo: "Sexta Extravagante: Provas no Processo Penal",
        canal: "Gran Cursos Online",
        url: "https://www.youtube.com/watch?v=F5UvggmCpbU",
        duracao: "1:12:40",
      },
    ],
    "Competência jurisdicional": [
      {
        titulo: "Jurisdição e Competência - Aula 6.1 | Curso de Direito Processual Penal",
        canal: "Fábio Roque Araújo",
        url: "https://www.youtube.com/watch?v=LUx_3py7pVE",
        duracao: "27:30",
      },
      {
        titulo: "competência no Processo Penal - parte 01",
        canal: "Canal do Penal - Prof. Rodrigo Vilela Veiga",
        url: "https://www.youtube.com/watch?v=VE9ZzNU2TEw",
        duracao: "12:07",
      },
    ],
    "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)": [
      {
        titulo: "LEI 15.358/2026: MARCO LEGAL DE COMBATE AO CRIME ORGANIZADO | AULA COMPLETA + MATERIAL R$ 9,90",
        canal: "Instante Jurídico",
        url: "https://www.youtube.com/watch?v=WmbNC3AjIXc",
        duracao: "15:33",
      },
    ],
    "Audiência de custódia — prazo, finalidade e consequências da ausência": [
      {
        titulo: "Audiência de Custódia: o que o juiz decide?",
        canal: "Direito Desenhado",
        url: "https://www.youtube.com/watch?v=Ef3OeijLH5I",
        duracao: "12:01",
      },
      {
        titulo: "Audiência de Custódia (art 310 do CPP)",
        canal: "Prof. Diego Pureza",
        url: "https://www.youtube.com/watch?v=dFBqF8BFV3A",
        duracao: "21:06",
        dica: "Vídeo de 2020: pela Lei 15.358/2026, a audiência passou a ser feita por videoconferência em tempo real (a forma presencial ficou excepcional), e para o STF ela é devida em toda modalidade de prisão — confira no resumo do app.",
      },
    ],
    "Provas ilícitas e prova ilícita por derivação (teoria dos frutos da árvore envenenada)": [
      {
        titulo: "Provas Ilícitas no Processo Penal - Art. 157 CPP",
        canal: "Prof. Diego Pureza",
        url: "https://www.youtube.com/watch?v=NO7qCmFzZNA",
        duracao: "22:45",
      },
      {
        titulo: "Provas ilícitas e ilegítimas – com professor Fernando Capez",
        canal: "Fernando Capez",
        url: "https://www.youtube.com/watch?v=3RlReF09ddo",
        duracao: "5:03",
      },
    ],
    "Colaboração premiada — requisitos e benefícios": [
      {
        titulo: "Colaboração Premiada: Como esse tema cai em provas?",
        canal: "Estratégia Carreira Jurídica",
        url: "https://www.youtube.com/watch?v=nF0vVTzhfP8",
        duracao: "13:23",
      },
      {
        titulo: "Sexta Extravagante - Entendendo a Colaboração Premiada (Lei nº 12.850/2013) em 1 hora!",
        canal: "Gran Cursos Online",
        url: "https://www.youtube.com/watch?v=ieGk5ziDCGU",
        duracao: "1:13:11",
      },
    ],
    "Cadeia de custódia da prova (arts. 158-A a 158-F do CPP)": [
      {
        titulo: "Cadeia de Custódia da Prova: o que é? | PROVAS EM PROCESSO PENAL | Pacote Anticrime | Aula 05",
        canal: "Ana Carolina Aidar",
        url: "https://www.youtube.com/watch?v=Kqx5vYQ3OMY",
        duracao: "7:56",
      },
      {
        titulo: "Lei 13.964/19 (pacote anticrime). Vídeo 21: Cadeia de Custódia da Prova",
        canal: "Fábio Roque Araújo",
        url: "https://www.youtube.com/watch?v=uZUbG1BTheY",
        duracao: "11:40",
      },
    ],
  },
  pt: {
    "Interpretação e compreensão de texto": [
      {
        titulo: "INTERPRETAÇÃO de TEXTOS para CONCURSO - Nunca mais erre!",
        canal: "Prof. Álvaro Ferreira",
        url: "https://www.youtube.com/watch?v=22iA3PPjr7c",
        duracao: "45:34",
      },
      {
        titulo: "Interpretação e Compreensão de Textos (Banca FGV 2025) - Professora Pamba",
        canal: "Professora Pamba",
        url: "https://www.youtube.com/watch?v=1rlFlF47qtw",
        duracao: "8:45",
      },
      {
        titulo: "FGV NA PRÁTICA! Questões Comentadas de Português | Foco PCPR",
        canal: "Pablo Jamilk",
        url: "https://www.youtube.com/watch?v=CiyJesi6opY",
        duracao: "1:00:46",
      },
    ],
    "Coesão, coerência e intertextualidade": [
      {
        titulo: "Dissecando a FGV - Coesão e Coerência",
        canal: "Professora Adriana Figueiredo",
        url: "https://www.youtube.com/watch?v=Q1G1I5VyoRw",
        duracao: "12:03",
      },
      {
        titulo: "COESÃO E COERÊNCIA - Anáfora, catáfora e muito mais!",
        canal: "Prof. Álvaro Ferreira",
        url: "https://www.youtube.com/watch?v=f1vCAm294i8",
        duracao: "1:07:40",
      },
      {
        titulo: "INTERTEXTUALIDADE: O QUE É E COMO IDENTIFICAR? - Profa. Pamba",
        canal: "Professora Pamba",
        url: "https://www.youtube.com/watch?v=WUHfO8zx2bI",
        duracao: "15:50",
      },
    ],
    "Modos de organização do discurso (narração, descrição, dissertação, injunção)": [
      {
        titulo: "Domine a Tipologia Textual: questões resolvidas e dicas infalíveis!",
        canal: "Professora Adriana Figueiredo",
        url: "https://www.youtube.com/watch?v=yqUtTx0uoww",
        duracao: "12:58",
      },
      {
        titulo: "Dissecando a FGV - Narração e Descrição",
        canal: "Professora Adriana Figueiredo",
        url: "https://www.youtube.com/watch?v=DXg_lEeBAXg",
        duracao: "9:18",
      },
      {
        titulo: "Português FGV Tipologia textual em questões / PC PR, DATAPREV, SEDUC PA",
        canal: "Décio Terror",
        url: "https://www.youtube.com/watch?v=U83Due3r4ac",
        duracao: "1:52:21",
      },
    ],
    "Tipos de discurso (direto, indireto, indireto livre)": [
      {
        titulo: "Decifrando a banca FGV | Tipos de Discursos",
        canal: "Professora Adriana Figueiredo",
        url: "https://www.youtube.com/watch?v=IKZKKPKoG58",
        duracao: "17:49",
      },
      {
        titulo: "TIPOS DE DISCURSO: discurso direto, discurso indireto e discurso indireto livre |Português do Zero",
        canal: "Português com Letícia",
        url: "https://www.youtube.com/watch?v=Z8v3Js8gfSA",
        duracao: "21:50",
      },
    ],
    "Pontuação": [
      {
        titulo: "Uso da Vírgula - Regras mais cobradas em concurso (Nunca mais erre!)",
        canal: "Prof. Álvaro Ferreira",
        url: "https://www.youtube.com/watch?v=mwesr5YGr9o",
        duracao: "40:20",
      },
      {
        titulo: "FGV - PONTUAÇÂO",
        canal: "Mestre Mário Português",
        url: "https://www.youtube.com/watch?v=D26AfnQ5ylQ",
        duracao: "15:45",
      },
    ],
    "Sintaxe do período simples e composto": [
      {
        titulo: "CNU | Sintaxe do Período Simples - [Professor Noslen]",
        canal: "Professor Noslen",
        url: "https://www.youtube.com/watch?v=pnS0hL063do",
        duracao: "16:40",
      },
      {
        titulo: "Orações COORDENADAS e SUBORDINADAS - Resumão para CONCURSO",
        canal: "Prof. Álvaro Ferreira",
        url: "https://www.youtube.com/watch?v=zRYeauBptu4",
        duracao: "1:19:44",
      },
      {
        titulo: "SINTAXE – FGV 2025 | Questões Comentadas e Análise Completa (Parte 1)",
        canal: "Aprovação Certa",
        url: "https://www.youtube.com/watch?v=h5GhtYoW3Lo",
        duracao: "22:09",
      },
    ],
    "Concordância verbal e nominal": [
      {
        titulo: "É assim que as bancas cobram CONCORDÂNCIA verbal e nominal...",
        canal: "Prof. Álvaro Ferreira",
        url: "https://www.youtube.com/watch?v=_K1up6Hsgvk",
        duracao: "49:10",
      },
      {
        titulo: "RESOLUÇÃO DE QUESTÕES FGV - PORTUGUÊS - CONCORDÂNCIA",
        canal: "Ciência Exata",
        url: "https://www.youtube.com/watch?v=y0EauFLSXmc",
        duracao: "17:32",
      },
    ],
    "Regência verbal e nominal e crase": [
      {
        titulo: "REGÊNCIA VERBAL E NOMINAL - Muitos exemplos e questões",
        canal: "Prof. Álvaro Ferreira",
        url: "https://www.youtube.com/watch?v=1IRO-p95oo0",
        duracao: "43:55",
      },
      {
        titulo: "CRASE - As 6 regras mais cobradas em CONCURSO (Teoria + Questões)",
        canal: "Prof. Álvaro Ferreira",
        url: "https://www.youtube.com/watch?v=5uMooAjtVis",
        duracao: "35:59",
      },
      {
        titulo: "Concurso PC PR Agente Língua Portuguesa: Quando Usar Crase FGV - Prof. Giancarla",
        canal: "AlfaCon",
        url: "https://www.youtube.com/watch?v=OX4b75rALZM",
        duracao: "2:01:49",
      },
    ],
    "Morfologia, classes de palavras e modalizadores": [
      {
        titulo: "MORFOLOGIA: CLASSES DE PALAVRAS (Para Concurso)",
        canal: "Prof. Álvaro Ferreira",
        url: "https://www.youtube.com/watch?v=ltrzPijgKi4",
        duracao: "1:03:04",
      },
      {
        titulo: "O que é elemento MODALIZADOR? | Conceito, exemplos e questões",
        canal: "Dicas de Concurseira",
        url: "https://www.youtube.com/watch?v=TvxNSVeF_hQ",
        duracao: "7:22",
      },
      {
        titulo: "Semana de Língua Portuguesa | Modalizadores Discursivos - FGV com Márcio Wesley",
        canal: "Gran Cursos Online",
        url: "https://www.youtube.com/watch?v=bDW9YpSXXhg",
        duracao: "58:46",
      },
    ],
    "Semântica (sinônimos, antônimos, parônimos, polissemia, ambiguidade)": [
      {
        titulo: "Português para Concursos | Banca FGV | Semântica | Oposição de sentidos | SuperAula",
        canal: "Português com Letícia",
        url: "https://www.youtube.com/watch?v=ZxkWOZvoDL8",
        duracao: "55:23",
      },
      {
        titulo: "SINONÍMIA, ANTONÍMIA, HIPERONÍMIA, HIPONÍMIA, HOMONÍMIA, PARONÍMIA, POLISSEMIA, AMBIGUIDADE",
        canal: "Gramática com Laércio",
        url: "https://www.youtube.com/watch?v=lEAq4Dz26dI",
        duracao: "8:15",
      },
    ],
    "Ortografia e acentuação": [
      {
        titulo: "ACENTUAÇÃO GRÁFICA: Aprenda ACENTUAÇÃO com FACILIDADE! (CONCURSOS E VESTIBULARES)",
        canal: "Português sem Enrolação - Professora Lis",
        url: "https://www.youtube.com/watch?v=Ytw1SjnqEJ8",
        duracao: "11:54",
      },
      {
        titulo: "Português para a banca FGV | Ortografia Aula 1 | Prof. Andresan Machado",
        canal: "Andresan Cursos e Concursos",
        url: "https://www.youtube.com/watch?v=WeQtlt_rIWo",
        duracao: "18:49",
      },
    ],
    "Figuras de linguagem (metáfora, metonímia, ironia, eufemismo, hipérbole)": [
      {
        titulo: "FIGURAS DE LINGUAGEM - As que mais caem em concurso",
        canal: "Prof. Álvaro Ferreira",
        url: "https://www.youtube.com/watch?v=yiNBsB6hfPo",
        duracao: "48:01",
      },
      {
        titulo: "FIGURAS DE LINGUAGEM: Aprenda As Figuras de Linguagem MAIS COBRADAS em Apenas 11 Minutos!",
        canal: "Português sem Enrolação - Professora Lis",
        url: "https://www.youtube.com/watch?v=iJ3yzYMwpPg",
        duracao: "11:51",
      },
    ],
    "Funções da linguagem (referencial, emotiva, conativa, poética, fática, metalinguística)": [
      {
        titulo: "FUNÇÕES da LINGUAGEM – Referencial, Emotiva, Poética, Fática, Conativa e Metalinguística",
        canal: "Português com Letícia",
        url: "https://www.youtube.com/watch?v=c4yBSJzIqmg",
        duracao: "15:57",
      },
      {
        titulo: "Como estudar Português para a FGV com Claiton Natal | Funções da Linguagem",
        canal: "Gran Cursos Online",
        url: "https://www.youtube.com/watch?v=yk9ZWz1bbYU",
        duracao: "52:36",
      },
    ],
    "Vícios de linguagem (ambiguidade involuntária, cacofonia, pleonasmo vicioso, solecismo)": [
      {
        titulo: "VÍCIOS DE LINGUAGEM - AULA COMPLETA - Aula 3 - Profa. Pamba - Curso de Estilística",
        canal: "Professora Pamba",
        url: "https://www.youtube.com/watch?v=UWm9QFtPUCo",
        duracao: "20:59",
      },
      {
        titulo: "VÍCIOS de LINGUAGEM - Resumo para concurso público",
        canal: "Prof. Álvaro Ferreira",
        url: "https://www.youtube.com/watch?v=f9jhgMlAxFY",
        duracao: "1:05:48",
      },
    ],
    "Colocação pronominal (próclise, mesóclise, ênclise)": [
      {
        titulo: "COLOCAÇÃO PRONOMINAL: PRÓCLISE, MESÓCLISE E ÊNCLISE || Português do Zero",
        canal: "Português com Letícia",
        url: "https://www.youtube.com/watch?v=baP8RkBYRNw",
        duracao: "24:20",
      },
      {
        titulo: "COLOCAÇÃO PRONOMINAL - LÍNGUA PORTUGUESA - MPU (BANCA FGV)",
        canal: "Focus Concursos",
        url: "https://www.youtube.com/watch?v=kl24L091tNs",
        duracao: "33:35",
      },
    ],
    "Redação oficial e correspondência administrativa (padrão culto, impessoalidade, concisão)": [
      {
        titulo: "AULA 1 - REDAÇÃO OFICIAL PARA CONCURSOS - Manual de Redação da Presidência da República",
        canal: "JUS POLIS",
        url: "https://www.youtube.com/watch?v=VISNlsOGdxU",
        duracao: "50:07",
      },
      {
        titulo: "REDAÇÃO OFICIAL - Vai cair no concurso dos Correios 2024 (e em outros também!)",
        canal: "Prof. Álvaro Ferreira",
        url: "https://www.youtube.com/watch?v=AYUoW1hd78c",
        duracao: "53:13",
      },
    ],
  },
  ti: {
    "Fundamentos de hardware e software, BIOS/UEFI, backup": [
      {
        titulo: "HARDWARE - Conceitos Iniciais - BIOS, Memória ROM, Hardware e Software",
        canal: "Professor Sylvio Rodrigues - Informática Concursos",
        url: "https://www.youtube.com/watch?v=M3Ypqy-MIEc",
        duracao: "29:16",
      },
      {
        titulo: "Informática concursos - Tipos de Backup: Normal, Incremental, Diferencial | Danilo Vilanova",
        canal: "Professor Danilo Vilanova | Informática Concursos",
        url: "https://www.youtube.com/watch?v=ApEpJMvR1zE",
        duracao: "14:01",
      },
      {
        titulo: "PCPR Informática - Hardware e software",
        canal: "Fernando Nishimura de Aragão (Informática)",
        url: "https://www.youtube.com/watch?v=M4IRysr8IjM",
        duracao: "23:05",
      },
    ],
    "Sistemas operacionais e aplicativos (Windows 11, Office, Android/iOS)": [
      {
        titulo: "Sistemas operacionais e aplicativos: Android, iOS, PCPR - FGV - Set 2026 - Informática com Lourival",
        canal: "Informática com Lourival",
        url: "https://www.youtube.com/watch?v=qhnzs-qhMgs",
        duracao: "1:24:01",
      },
      {
        titulo: "AULA PÓS-EDITAL CONCURSO PCPR - INFORMÁTICA (SISTEMAS OPERACIONAIS)",
        canal: "Projeto Caveira",
        url: "https://www.youtube.com/watch?v=XZbxpCaYZSU",
        duracao: "1:56:24",
      },
    ],
    "Internet, redes, TCP/IP, DNS, VPN, firewall": [
      {
        titulo: "Redes de computadores - Protocolo TCP IP - Informática para concursos - Professor Danilo Vilanova",
        canal: "Professor Danilo Vilanova | Informática Concursos",
        url: "https://www.youtube.com/watch?v=Qmz3PGKT4KY",
        duracao: "26:58",
      },
      {
        titulo: "Informática do Zero Banca FGV: Concurso PCPR REDES como pode cair na sua prova? Prof.João Paulo Orso",
        canal: "AlfaCon",
        url: "https://www.youtube.com/watch?v=Xl-ttWhabx8",
        duracao: "1:08:50",
      },
      {
        titulo: "Questões Internet | Banca FGV | Informática para concursos com professor Danilo Vilanova",
        canal: "Professor Danilo Vilanova | Informática Concursos",
        url: "https://www.youtube.com/watch?v=_tK2_5SX90c",
        duracao: "58:46",
      },
    ],
    "Segurança da informação (CID, criptografia, assinatura digital, hash)": [
      {
        titulo: "INFORMÁTICA IBGE: Segurança da Informação CID (Banca FGV)",
        canal: "Gabarito Certo – Questões",
        url: "https://www.youtube.com/watch?v=K9DMbxirFjk",
        duracao: "12:40",
      },
      {
        titulo: "Informática do Zero Banca FGV: Concurso PCPR Segurança da Informação Prof. João Paulo Orso",
        canal: "AlfaCon",
        url: "https://www.youtube.com/watch?v=R6XZsL1jD70",
        duracao: "1:08:54",
      },
      {
        titulo: "Concurso Polícia Civil PR | Questões Comentadas de Segurança da Informação",
        canal: "Gran Cursos Online",
        url: "https://www.youtube.com/watch?v=5GLpLO5fgng",
        duracao: "49:01",
      },
    ],
    "Crimes cibernéticos e investigação digital": [
      {
        titulo: "Concurso Polícia Civil PR | Como a FGV Cobra Crimes Digitais?",
        canal: "Gran Cursos Online",
        url: "https://www.youtube.com/watch?v=RlOQQn9cWgc",
        duracao: "1:00:30",
      },
      {
        titulo: "REVISÃO FINAL CRIMES DIGITAIS AGENTE PCPR | PROF. DELEGADO QUEIROZ CONCURSO POLÍCIA CIVIL DO PARANÁ",
        canal: "Bozzano Concursos",
        url: "https://www.youtube.com/watch?v=Ud-Ioul7E8g",
        duracao: "19:07",
      },
    ],
    "Legislação digital (Marco Civil, LGPD, art. 154-A do CP)": [
      {
        titulo: "DIREITO DIGITAL e LGPD (Resumo) - LEI GERAL DE PROTEÇÃO DE DADOS PESSOAIS | Privacidade na Internet",
        canal: "Me Julga - Cíntia Brunelli",
        url: "https://www.youtube.com/watch?v=So9Lhgbq2sk",
        duracao: "13:15",
      },
      {
        titulo: "Da LGPD ao Marco Civil: Domine o Direito Digital",
        canal: "Gran Jurídico",
        url: "https://www.youtube.com/watch?v=76CufesQlEY",
        duracao: "52:03",
        dica: "Para o art. 19 do Marco Civil, confira no resumo do app a decisão do STF de jun/2025 (Temas 533 e 987).",
      },
    ],
    "Inteligência artificial aplicada à investigação e riscos (viés algorítmico, deepfake como prova)": [
      {
        titulo: "INTELIGÊNCIA CIBERNÉTICA ARTIFICIAL BANCA FGV EDITAL AGENTE PCPR | CONCURSO POLÍCIA CIVIL PARANÁ",
        canal: "Bozzano Concursos",
        url: "https://www.youtube.com/watch?v=3Nw1zRIkOYM",
        duracao: "24:07",
      },
      {
        titulo: "Inteligência Artificial para Concursos 2026 | Tipos de IA Fraca",
        canal: "ROMILTON JÚNIOR",
        url: "https://www.youtube.com/watch?v=Eb0gjNJxlcI",
        duracao: "24:30",
      },
      {
        titulo: "CLONE VIRTUAL - DEEP FAKE: TÉCNICA SOFISTICADA QUE ENGANA - INVESTIGAÇÃO CRIMINAL DIGITAL",
        canal: "Investigação Criminal",
        url: "https://www.youtube.com/watch?v=1mZm6ff4Zb4",
        duracao: "45:58",
      },
    ],
    "Computação em nuvem (IaaS, PaaS, SaaS) e armazenamento de evidências digitais": [
      {
        titulo: "IaaS, PaaS e SaaS na Computação em Nuvem",
        canal: "Dicionário de Informática",
        url: "https://www.youtube.com/watch?v=5czsMlRc7Wk",
        duracao: "9:41",
      },
      {
        titulo: "Diferença entre IaaS PaaS e SaaS | O que é IaaS PaaS e SaaS | Cloud Computing para concursos",
        canal: "ROMILTON JÚNIOR",
        url: "https://www.youtube.com/watch?v=4QaI6YjBfAQ",
        duracao: "35:04",
      },
    ],
    "OSINT (investigação em fontes abertas) e coleta de evidência em redes sociais": [
      {
        titulo: "4 Segredos para uma Investigação Digital em Fontes Abertas (OSINT) | Aulão 01",
        canal: "Aulão com Bruno Fraga",
        url: "https://www.youtube.com/watch?v=gFT_PdHTgMg",
        duracao: "1:11:43",
      },
      {
        titulo: "Reta Final PCPR - Fontes Abertas (OSINT) e Criminoso Cibernético",
        canal: "Rani Passos",
        url: "https://www.youtube.com/watch?v=q6jdV_btXVE",
        duracao: "1:12:36",
      },
    ],
    "LGPD aplicada ao tratamento de dados em investigação criminal (bases legais, exceções de segurança pública)": [
      {
        titulo: "SIMULADO LGPD TECNOLOGIA DA INFORMAÇÃO BANCA FGV EDITAL AGENTE PCPR | CONCURSO POLÍCIA CIVIL PARANÁ",
        canal: "Bozzano Concursos",
        url: "https://www.youtube.com/watch?v=JZDPD40K_-s",
        duracao: "21:35",
      },
      {
        titulo: "LAPIN Entrevista: Danilo Doneda, sobre a LGPD Penal",
        canal: "LAPIN",
        url: "https://www.youtube.com/watch?v=6yPFE7PQprs",
        duracao: "20:54",
        dica: "Debate sobre a futura \"LGPD Penal\". Para a prova, o ponto é o art. 4º, III e § 1º: tratamento para segurança pública e investigação penal fica fora da LGPD e depende de lei específica.",
      },
    ],
    "Hardware, memórias e armazenamento (RAM, ROM, SSD, NVMe), periféricos, drivers e firmware": [
      {
        titulo: "Hardware: Dispositivos de Armazenamento, Memórias e Periféricos | Noções de Informática",
        canal: "Trajetória Concursos",
        url: "https://www.youtube.com/watch?v=AxaKoUy1lxY",
        duracao: "9:46",
      },
      {
        titulo: "Aula Grátis sobre Hardware: Informática para Concursos Públicos",
        canal: "Estúdio Aulas Concursos",
        url: "https://www.youtube.com/watch?v=LstayS4wZAU",
        duracao: "39:09",
      },
      {
        titulo: "Questões Hardware | Banca FGV | Informática para concursos com professor Danilo Vilanova",
        canal: "Professor Danilo Vilanova | Informática Concursos",
        url: "https://www.youtube.com/watch?v=fGaAgSBafoM",
        duracao: "46:10",
      },
    ],
    "Windows 11: atalhos, Explorador de Arquivos, configurações, contas, segurança e atualização": [
      {
        titulo: "Informática para Concursos 2026 - AULA 1 - Windows 11 - Prof. Alan Souza",
        canal: "Prof. Alan Souza",
        url: "https://www.youtube.com/watch?v=QIB18HYMdok",
        duracao: "25:53",
      },
      {
        titulo: "Questões de Informática para Concursos Atalhos do Windows",
        canal: "Prof. Marcelo Narciso",
        url: "https://www.youtube.com/watch?v=dacRRPvDvU4",
        duracao: "36:14",
      },
      {
        titulo: "SIMULADO WINDOWS TECNOLOGIA DA INFORMAÇÃO BANCA FGV EDITAL AGENTE PCPR CONCURSO POLÍCIA CIVIL PARANÁ",
        canal: "Bozzano Concursos",
        url: "https://www.youtube.com/watch?v=kYzhxfzlgys",
        duracao: "20:29",
      },
    ],
    "Planilhas eletrônicas (Excel e Calc): fórmulas, funções, referências e classificação": [
      {
        titulo: "Concurso IBGE - Aula 07 - EXCEL - Informática para banca FGV | Professor Danilo Vilanova",
        canal: "Professor Danilo Vilanova | Informática Concursos",
        url: "https://www.youtube.com/watch?v=lB5C8gJAxNA",
        duracao: "45:37",
      },
      {
        titulo: "QUESTÕES 2025 EXCEL da FGV: Passo a Passo Para Gabaritar no Concurso IBGE",
        canal: "Concurseiro Nômade",
        url: "https://www.youtube.com/watch?v=jEHfj2U-vnc",
        duracao: "22:33",
      },
      {
        titulo: "SIMULADO EXCEL TECNOLOGIA DA INFORMAÇÃO BANCA FGV EDITAL AGENTE PCPR | CONCURSO POLÍCIA CIVIL PARANÁ",
        canal: "Bozzano Concursos",
        url: "https://www.youtube.com/watch?v=poFP219l0qA",
        duracao: "24:36",
      },
    ],
    "Editores de texto (Word e Writer): formatação, seções, revisão e recursos de edição": [
      {
        titulo: "INFORMÁTICA | MICROSOFT WORD E LIBREOFFICE WRITER | CONCURSO TJ-MG",
        canal: "Bravo Concursos",
        url: "https://www.youtube.com/watch?v=khzp0RPhCuE",
        duracao: "1:15:14",
      },
      {
        titulo: "INFORMÁTICA FGV - WORD",
        canal: "Ciência Exata",
        url: "https://www.youtube.com/watch?v=yNsPUlPuKho",
        duracao: "33:35",
      },
    ],
    "Navegadores e correio eletrônico (cookies, cache, navegação privativa, SMTP, POP3, IMAP, Cc/Cco)": [
      {
        titulo: "Resumo DIRETO AO PONTO - NAVEGADORES(BROWSERS) - Informática Concursos Prof Danilo Vilanova",
        canal: "Professor Danilo Vilanova | Informática Concursos",
        url: "https://www.youtube.com/watch?v=k7vK0JTfTEA",
        duracao: "34:47",
      },
      {
        titulo: "POP, IMAP e SMTP Explicados para Concursos | Informática",
        canal: "Rani Passos",
        url: "https://www.youtube.com/watch?v=gZK_WKVThkM",
        duracao: "28:32",
      },
      {
        titulo: "Para Cc Cco | Correio eletrônico - email | Informática para concursos",
        canal: "Rodrigo Schaeffer",
        url: "https://www.youtube.com/watch?v=qw6xwagCt_Q",
        duracao: "6:14",
      },
    ],
    "Internet, intranet e extranet; IPv4/IPv6, portas e protocolos (HTTP/HTTPS, FTP, SSH, DHCP, NAT, proxy)": [
      {
        titulo: "Internet Intranet Extranet",
        canal: "Dicionário de Informática",
        url: "https://www.youtube.com/watch?v=A9P2WusFQU0",
        duracao: "11:55",
      },
      {
        titulo: "Protocolos de Comunicação TCP, UDP, IPSec, ARP, SSH, SMTP, HTTP, FTP, LDAP, DNS, DHCP, POP, IMAP ..",
        canal: "ROMILTON JÚNIOR",
        url: "https://www.youtube.com/watch?v=DjXDPfyIJP0",
        duracao: "15:43",
      },
      {
        titulo: "Resumo DIRETO AO PONTO - Redes de computadores/Internet/Cloud Informática(Professor Danilo Vilanova)",
        canal: "Professor Danilo Vilanova | Informática Concursos",
        url: "https://www.youtube.com/watch?v=j776calP3EQ",
        duracao: "40:09",
      },
    ],
    "Redes sociais, plataformas digitais, registros eletrônicos (logs) e metadados": [
      {
        titulo: "PCPR 2026: OSINT e Metadados | Questões que VÃO Decidir Sua Vaga - Informática",
        canal: "Professor Deodato Neto",
        url: "https://www.youtube.com/watch?v=zf371F7bQHg",
        duracao: "29:06",
      },
      {
        titulo: "04 METADADOS TEORIA + QUESTÕES | PC DF 2020 | Prof. Fabiano Abreu",
        canal: "Prof. Fabiano Abreu | Noções de Informática",
        url: "https://www.youtube.com/watch?v=zzycp8dDog8",
        duracao: "26:40",
      },
    ],
    "Dispositivos móveis (Android e iOS): permissões, atualizações, backup e localização": [
      {
        titulo: "GUARDA MUNICIPAL PORTO BELO-SC | INFORMÁTICA | SISTEMAS MÓVEIS ANDROID E iOS",
        canal: "Bozzano Concursos",
        url: "https://www.youtube.com/watch?v=nTnv5NUA1w4",
        duracao: "8:35",
      },
      {
        titulo: "Cuidados com os dispositivos Móveis - @Curso em Vídeo Segurança da Informação - Módulo 0",
        canal: "Curso em Vídeo",
        url: "https://www.youtube.com/watch?v=5UQP73MRwAM",
        duracao: "14:26",
      },
    ],
    "Microsoft 365, Google Workspace e compartilhamento de arquivos em nuvem (permissões, links e versões)": [
      {
        titulo: "Google Workspace para Concurso | FERRAMENTAS GOOGLE WORKSPACE | G SUITE | Informática para Concursos",
        canal: "ROMILTON JÚNIOR",
        url: "https://www.youtube.com/watch?v=RWuboNyBADA",
        duracao: "15:38",
      },
      {
        titulo: "Edição de textos, planilhas e apresentações (Microsoft Office 365) | Informática CEBRASPE 2026",
        canal: "ROMILTON JÚNIOR",
        url: "https://www.youtube.com/watch?v=sChr4Yc9j-k",
        duracao: "25:58",
      },
      {
        titulo: "Informática para SES-RS: Questões de Google Drive e One Drive",
        canal: "PGF Concursos",
        url: "https://www.youtube.com/watch?v=_Hnvz4iaBXs",
        duracao: "17:30",
      },
    ],
    "Lógica de programação, aplicações web (HTML, CSS, JavaScript), bancos de dados (SQL) e APIs": [
      {
        titulo: "Informática para Concursos - PCPR - FGV - Web, Lógica, Banco de Dados e APIs - Prof. Lourival",
        canal: "Informática com Lourival",
        url: "https://www.youtube.com/watch?v=48XZXNnpf_I",
        duracao: "56:06",
      },
      {
        titulo: "LÓGICA DE PROGRAMAÇÃO - Tudo que Você Precisa Saber (Do Zero)",
        canal: "Sharpax",
        url: "https://www.youtube.com/watch?v=JaTf3dhx464",
        duracao: "7:27",
      },
      {
        titulo: "SQL Saia do ZERO em APENAS UMA AULA",
        canal: "Jerry Strazzeri",
        url: "https://www.youtube.com/watch?v=OFLMhFuArXQ",
        duracao: "22:56",
      },
    ],
    "Golpes digitais recentes (phishing, engenharia social, golpe do Pix, deepfake em fraude)": [
      {
        titulo: "PHISHING e PHARMING",
        canal: "Dicionário de Informática",
        url: "https://www.youtube.com/watch?v=6OHKRA8T18I",
        duracao: "5:39",
      },
      {
        titulo: "Não Caia Nesse Golpe: Engenharia Social Explicada",
        canal: "Simplifica TI",
        url: "https://www.youtube.com/watch?v=uqKjnF1L-sY",
        duracao: "10:35",
      },
      {
        titulo: "ACABOU A FARRA DOS GOLPES? Entenda as 3 Novas Regras do Pix e do Celular",
        canal: "PapoSec - Renato Cunha",
        url: "https://www.youtube.com/watch?v=uqI8Jt_EjVQ",
        duracao: "4:38",
      },
    ],
    "Pilares da segurança da informação e gestão de riscos (vulnerabilidade, ameaça, risco)": [
      {
        titulo: "Os pilares da Segurança da Informação - @cursoemvideo Segurança da Informação - Módulo 0",
        canal: "Curso em Vídeo",
        url: "https://www.youtube.com/watch?v=Y0beKLRf-fI",
        duracao: "18:03",
      },
      {
        titulo: "[Videoaula] Incidentes de Segurança: Ameaças x Vulnerabilidades x Riscos",
        canal: "Ricardo Kléber IFRN",
        url: "https://www.youtube.com/watch?v=o8BMa5DyOcU",
        duracao: "9:42",
      },
    ],
    "Controle de acesso, autenticação multifator, logs e auditoria": [
      {
        titulo: "AULA SEGURANÇA DA INFORMAÇÃO (aprenda o essencial em 35 Minutos)",
        canal: "Professora Nattane",
        url: "https://www.youtube.com/watch?v=Gfh2bxe3hGU",
        duracao: "41:23",
      },
      {
        titulo: "Informática › Segurança da Informação › Senhas e autenticação",
        canal: "Kultivi",
        url: "https://www.youtube.com/watch?v=LI6pKeYlBkM",
        duracao: "16:07",
      },
      {
        titulo: "Questões Segurança | Banca FGV | Informática para concursos com professor Danilo Vilanova",
        canal: "Professor Danilo Vilanova | Informática Concursos",
        url: "https://www.youtube.com/watch?v=EZTUX1SU-yY",
        duracao: "40:26",
      },
    ],
    "Criptografia, hash e certificado digital ICP-Brasil (A1 e A3)": [
      {
        titulo: "Criptografia Simétrica e Assimétrica",
        canal: "Dicionário de Informática",
        url: "https://www.youtube.com/watch?v=-2vFngNFT4E",
        duracao: "7:23",
      },
      {
        titulo: "ICP-Brasil e certificado digital",
        canal: "Dicionário de Informática",
        url: "https://www.youtube.com/watch?v=sfZ78441w90",
        duracao: "13:57",
      },
      {
        titulo: "Segurança - Noções Básicas de Criptografia e Assinatura Digital",
        canal: "Professor Sylvio Rodrigues - Informática Concursos",
        url: "https://www.youtube.com/watch?v=K7iXNwYjk38",
        duracao: "10:21",
      },
    ],
    "Backup e recuperação de dados como controle de segurança (RPO, RTO, cópia imutável)": [
      {
        titulo: "Disaster Recovery explicado: Backup, RTO, RPO e Continuidade de Negócios | ADENTRO LABS | EP01S02",
        canal: "Adentro",
        url: "https://www.youtube.com/watch?v=QCtqK32B5V4",
        duracao: "32:02",
      },
      {
        titulo: "Qual a diferença entre backup incremental e diferencial?",
        canal: "Platon - Tecnologia em nuvem",
        url: "https://www.youtube.com/watch?v=9BvJY87PSgY",
        duracao: "10:42",
      },
    ],
    "Malware e ransomware: tipos, vetores e técnicas de evasão": [
      {
        titulo: "Resumo DIRETO AO PONTO - Malwares(VírusXWorms) - Informática Concursos (Professor Danilo Vilanova)",
        canal: "Professor Danilo Vilanova | Informática Concursos",
        url: "https://www.youtube.com/watch?v=2hRyJ7mM5Ps",
        duracao: "34:58",
      },
      {
        titulo: "Informática PCMG - Vírus e Malwares | Prof. Rani Passos",
        canal: "Rani Passos",
        url: "https://www.youtube.com/watch?v=wWd9Pq9pi6E",
        duracao: "1:14:52",
      },
      {
        titulo: "Questões Malwares | Banca FGV | Informática para concursos com professor Danilo Vilanova",
        canal: "Professor Danilo Vilanova | Informática Concursos",
        url: "https://www.youtube.com/watch?v=paF56VaBb14",
        duracao: "39:22",
      },
    ],
    "Engenharia social e variantes de phishing (spear phishing, whaling, smishing, vishing, pharming)": [
      {
        titulo: "SEGURANÇA DA INFORMAÇÃO - Ataques Phishing, Pharming, Spam e Hoax, Engenharia social HD 2.5",
        canal: "Foco no Concurso",
        url: "https://www.youtube.com/watch?v=6NOPl30XKdA",
        duracao: "33:15",
      },
      {
        titulo: "O que é engenharia social? Phishing, spear phishing e outras técnicas de invasão? Mente Faminta",
        canal: "Mente Faminta",
        url: "https://www.youtube.com/watch?v=j5Qoi9PgrLY",
        duracao: "9:43",
      },
    ],
    "Segurança em redes, dispositivos móveis e nuvem (responsabilidade compartilhada, zero trust)": [
      {
        titulo: "Segurança em Nuvem: Modelo de Responsabilidade Compartilhada, IaaS, PaaS, SaaS...",
        canal: "Canal dotNET",
        url: "https://www.youtube.com/watch?v=nVxz-Fa1eks",
        duracao: "23:08",
      },
      {
        titulo: "Segurança Cibernética X Segurança da Informação - Principais tópicos",
        canal: "Gran Cursos Online",
        url: "https://www.youtube.com/watch?v=2zkfSYjVf7Y",
        duracao: "1:03:56",
      },
    ],
    "Políticas de segurança e resposta a incidentes (PSI, fases do NIST, art. 48 da LGPD)": [
      {
        titulo: "POLÍTICA DE SEGURANÇA DA INFORMAÇÃO - [Aula Grátis]",
        canal: "Guia Anônima",
        url: "https://www.youtube.com/watch?v=fpWpjvAEjQg",
        duracao: "17:23",
      },
      {
        titulo: "Webinar: Resposta a Incidentes de segurança da informação, Com o Prof. Marcelo Nagy e Prof. Renan",
        canal: "Academia de Forense Digital",
        url: "https://www.youtube.com/watch?v=qgKQPh9sZwk",
        duracao: "1:00:02",
      },
    ],
    "Furto e estelionato por fraude eletrônica (arts. 155, §§4º-B e 4º-C, e 171, §§2º-A e 2º-B, do CP, com as penas da Lei 15.397/2026)": [
      {
        titulo: "FRAUDE ELETRÔNICA: novas figuras criadas pela Lei nº14.155/21. Previna-se!",
        canal: "Prof. Pedro Luciano Ferreira - Advocacia e Cursos",
        url: "https://www.youtube.com/watch?v=6k-W0pMzMPk",
        duracao: "24:34",
        dica: "Vídeo de 2021 (Lei 14.155/2021): a Lei 15.397/2026 elevou a pena do furto mediante fraude eletrônica para 4 a 10 anos e tornou o estelionato de ação pública incondicionada — confira no resumo do app.",
      },
      {
        titulo: "FURTO MEDIANTE FRAUDE X ESTELIONATO",
        canal: "Juliana Menezes",
        url: "https://www.youtube.com/watch?v=lsnhypGfGto",
        duracao: "5:49",
        dica: "Vídeo anterior à Lei 15.397/2026: a distinção entre furto mediante fraude e estelionato continua valendo; as penas atuais estão no resumo do app.",
      },
    ],
    "Invasão de dispositivo informático (arts. 154-A e 154-B do CP) e Lei 12.737/2012": [
      {
        titulo: "CRIMES CIBERNÉTICOS - TUDO SOBRE A LEI CAROLINA DIECKMANN | Lei 12737",
        canal: "Cppem Concursos Públicos",
        url: "https://www.youtube.com/watch?v=OcXYCddOzIA",
        duracao: "28:08",
        dica: "Vídeo de cerca de 2022: confira no resumo do app a redação e a pena atuais do art. 154-A.",
      },
      {
        titulo: "PCPR - 2026 - QUESTÕES FGV - LEI CAROLINA DIECKMANN | PC-PR 2026 | RESOLVENDO O QUE VAI CAIR",
        canal: "Professor Deodato Neto",
        url: "https://www.youtube.com/watch?v=9a6UcY6nnyM",
        duracao: "12:39",
      },
    ],
    "Crimes em redes sociais e na internet (honra online, perseguição, violência psicológica com IA, arts. 216-B e 218-C, ECA e art. 266)": [
      {
        titulo: "Crimes Contra a HONRA - Calúnia, Difamação e Injúria | Direito Penal",
        canal: "Me Julga - Cíntia Brunelli",
        url: "https://www.youtube.com/watch?v=I7K4lZCd7hI",
        duracao: "12:43",
      },
      {
        titulo: "\"Novidade legal\": os novos crimes sexuais digitais (arts. 216-B e 218-C do Código Penal)",
        canal: "ProfessoraGiseleMendes",
        url: "https://www.youtube.com/watch?v=5tSR18MTSbo",
        duracao: "15:36",
      },
      {
        titulo: "Crime de Perseguição (Stalking e Ciberstalking) - art. 147-A do CP",
        canal: "Prof. Diego Pureza",
        url: "https://www.youtube.com/watch?v=8S3f9kD1V4g",
        duracao: "10:45",
      },
    ],
    "Evidência digital: coleta, preservação, hash, imagem forense e cadeia de custódia (arts. 158-A a 158-F do CPP)": [
      {
        titulo: "Cadeia de Custódia na Prova Digital: CPP, Hash, Forense e Jurisprudência do STJ",
        canal: "Professor Eduardo Arcos",
        url: "https://www.youtube.com/watch?v=owYk_1Hub0g",
        duracao: "28:24",
      },
      {
        titulo: "AULÃO CADEIA DE CUSTÓDIA VIRTUAL AGENTE PCPR | PROF. DELEGADO QUEIROZ CONCURSO POLÍCIA CIVIL PARANÁ",
        canal: "Bozzano Concursos",
        url: "https://www.youtube.com/watch?v=M_QlbzajHYE",
        duracao: "35:59",
      },
    ],
    "Rastreamento e recuperação de informações (IP, porta lógica, registros de conexão e de aplicação, dados cadastrais, arquivos apagados)": [
      {
        titulo: "Policial Civil em Foco: Como é a investigação de crimes cibernéticos por policiais civis do DF",
        canal: "Sinpol-DF",
        url: "https://www.youtube.com/watch?v=oZHk9AkPi7k",
        duracao: "10:01",
      },
      {
        titulo: "Guarda de Logs de Conexão - identificação de Usuários pela Polícia e Justiça",
        canal: "Gilson Telecom",
        url: "https://www.youtube.com/watch?v=4raUIF0cNC8",
        duracao: "23:52",
      },
      {
        titulo: "Guarda de Registros no Marco Civil da Internet",
        canal: "Walmar Andrade",
        url: "https://www.youtube.com/watch?v=6fW6xWY9vs0",
        duracao: "4:22",
      },
    ],
    "Inteligência cibernética, deep web e dark web e infiltração virtual de agentes (Lei 12.850, arts. 10-A a 10-D; ECA, art. 190-A)": [
      {
        titulo: "Surface Web, Deep Web e Dark Web: Por onde você surfa? - Estratégia Tech - Prof. Emannuelle Gouveia",
        canal: "Estratégia Concursos",
        url: "https://www.youtube.com/watch?v=kQK-luXGeag",
        duracao: "47:41",
      },
      {
        titulo: "PCPR-2026-Evidências Digitais, Inteligência Cibernética e OSINT Questão Comentada-Prof Deodato Neto",
        canal: "Professor Deodato Neto",
        url: "https://www.youtube.com/watch?v=Ybr1K6cf94Y",
        duracao: "19:04",
      },
      {
        titulo: "Lei 12.850/2013-[Da organização criminosa]-Da Infiltração de Agentes",
        canal: "LQC-Leis e questões comentadas",
        url: "https://www.youtube.com/watch?v=_hEKn70ZS7U",
        duracao: "8:56",
      },
    ],
    "Marco Civil da Internet detalhado (princípios, neutralidade, guarda de registros e arts. 19 e 21 após o STF, Temas 533 e 987)": [
      {
        titulo: "TUDO QUE VOCÊ PRECISA SABER SOBRE O MARCO CIVIL DA INTERNET - CONCURSO DATAPREV",
        canal: "RL CONCURSOS",
        url: "https://www.youtube.com/watch?v=--Bne35RDeg",
        duracao: "16:35",
        dica: "Vídeo anterior à decisão do STF de jun/2025 sobre o art. 19; a parte de princípios, neutralidade e guarda de registros continua valendo.",
      },
      {
        titulo: "Marco Civil da Internet x Moderação das Redes STF, Temas 533 e 987",
        canal: "André Vieira",
        url: "https://www.youtube.com/watch?v=pCg3MUQtsXw",
        duracao: "33:35",
      },
      {
        titulo: "O FIM DO ARTIGO 19? STF Mudou TUDO no Marco Civil da Internet!",
        canal: "Professor Murilo Araújo | Direito e Concursos",
        url: "https://www.youtube.com/watch?v=XGobVvzXlug",
        duracao: "6:37",
      },
    ],
    "LGPD detalhada (princípios, bases legais, dados sensíveis, direitos do titular, agentes de tratamento, ANPD e sanções)": [
      {
        titulo: "RESUMO DA LGPD (Lei Geral de Proteção de Dados) - Informática com Professor Danilo Vilanova",
        canal: "Professor Danilo Vilanova | Informática Concursos",
        url: "https://www.youtube.com/watch?v=crQSwcbKhfA",
        duracao: "52:06",
      },
      {
        titulo: "Concurso DataPrev | Reta Final em Questões da FGV: Legislação da LGPD com Maurício Franceschini",
        canal: "Gran Cursos Online",
        url: "https://www.youtube.com/watch?v=VSowCKfuduA",
        duracao: "43:36",
      },
    ],
    "Sigilo funcional e uso ético da tecnologia e das informações institucionais (arts. 313-A, 313-B e 325 do CP)": [
      {
        titulo: "Art. 313 - A do CP: Inserção de dados falsos em sistema de informações",
        canal: "Canal do Penal - Prof. Rodrigo Vilela Veiga",
        url: "https://www.youtube.com/watch?v=xBCNQnAeIjk",
        duracao: "6:40",
      },
      {
        titulo: "Código Penal - Explicação dos Arts 313-A e 313-B - Direito Penal | Aprendi Mais Essa…",
        canal: "NEAF Concursos",
        url: "https://www.youtube.com/watch?v=aTMXFkJ7XbQ",
        duracao: "8:30",
      },
      {
        titulo: "Violação de Sigilo Funcional - Crimes contra a Administração Pública 16/34",
        canal: "Lac Concursos - Principal",
        url: "https://www.youtube.com/watch?v=oa3iX6n6srk",
        duracao: "23:29",
      },
    ],
    "ECA Digital (Lei 15.211/2025): proteção de crianças e adolescentes em ambientes digitais": [
      {
        titulo: "Estatuto Digital da Criança e do Adolescente (Lei 15.211/2025): entenda a nova proteção online",
        canal: "Professor Felipe Cunha de Almeida",
        url: "https://www.youtube.com/watch?v=hq0t4lEIsEw",
        duracao: "6:31",
      },
      {
        titulo: "ECA Digital (Lei 15.211/2025) para Concursos Públicos e como funciona no dia a dia?",
        canal: "Jessica Pereira",
        url: "https://www.youtube.com/watch?v=XEoj5YwlZZo",
        duracao: "21:40",
      },
    ],
    "Criptoativos e fraudes com ativos virtuais (art. 171-A do CP, Lei 14.478/2022)": [
      {
        titulo: "Crime de fraude com a utilização de ativos virtuais. Lei 14478/2022.",
        canal: "Felipe Martins Professor ",
        url: "https://www.youtube.com/watch?v=mNWykav4wLs",
        duracao: "10:23",
      },
      {
        titulo: "CR1ME QUE DESAFIA A LEI - CRIPTOCRIMES - INVESTIGAÇÃO CRIMINAL DIGITAL",
        canal: "Investigação Criminal",
        url: "https://www.youtube.com/watch?v=jVTqbYlfFHM",
        duracao: "49:16",
      },
    ],
  },
};

/**
 * Revisões de reta final da PCPR 2026 por matéria (mesma origem e conferência dos vídeos acima).
 * Transmissões ainda não realizadas trazem a data e o horário na dica e não têm duração.
 */
export const VIDEOS_RETA_FINAL: Partial<Record<SubjectId, VideoRecurso[]>> = {
  for: [
    {
      titulo: "Hora da Verdade PC PR: Ciências Forenses – Medicina Legal e Criminalística - Prof. Juliana Sganzerla",
      canal: "Estratégia Concursos",
      url: "https://www.youtube.com/watch?v=wT3KDs8s1Rs",
      duracao: "3:50:40",
    },
    {
      titulo: "Concurso PCPR | O que mais cai na FGV: Medicina Legal",
      canal: "Gran Jurídico",
      url: "https://www.youtube.com/watch?v=U7Hyjx1Yu-c",
      duracao: "55:20",
    },
    {
      titulo: "Gabarite Balística e Medicina Legal na PCPR Banca FGV!",
      canal: "Mais Preparatório | Mais Militar ",
      url: "https://www.youtube.com/watch?v=LcN1b8wn0E8",
      duracao: "13:01",
    },
    {
      titulo: "Hora da Verdade PC PR: Criminologia - Prof. Murilo Marques",
      canal: "Estratégia Concursos",
      url: "https://www.youtube.com/watch?v=LhPGzPs_Q2k",
      duracao: "3:15:51",
    },
  ],
  leg: [
    {
      titulo: "Hora da Verdade PC PR: Legislação Estadual e Institucional - Prof. Giulian Salvador",
      canal: "Estratégia Concursos",
      url: "https://www.youtube.com/watch?v=jQatOHckeyw",
      duracao: "1:20:41",
    },
    {
      titulo: "PCPR 2026 - QUESTÕES DE LEGISLAÇÃO ESTATUAL - (Banca FGV) [Profº FRANCO]",
      canal: "JUS POLIS",
      url: "https://www.youtube.com/watch?v=2gICPpGnoEQ",
      duracao: "39:40",
    },
    {
      titulo: "Gabarite Legislação Estadual e Institucional na PCPR 2026: 5 Questões Estilo FGV para Sua Prova",
      canal: "Professor Leandro Campos",
      url: "https://www.youtube.com/watch?v=1VRMTCa3JzA",
      duracao: "22:40",
    },
    {
      titulo: "Concurso PCPR 2026: Não Erre Legislação Estadual! 5 Questões Chave da FGV (Polícia Civil do Paraná)",
      canal: "Professor Leandro Campos",
      url: "https://www.youtube.com/watch?v=K2tjP_mmzwI",
      duracao: "17:16",
    },
  ],
  pen: [
    {
      titulo: "Hora da Verdade PC PR: Direito Penal - Prof. Renan Araujo",
      canal: "Estratégia Concursos",
      url: "https://www.youtube.com/watch?v=Th0ollyrVag",
      dica: "Transmissão ao vivo agendada para 08/10, às 19h (horário de Brasília).",
    },
    {
      titulo: "Hora da Verdade PC PR: Legislação Extravagante - Prof. Antônio Pequeno",
      canal: "Estratégia Concursos",
      url: "https://www.youtube.com/watch?v=Hv0DwCYM6Jk",
      duracao: "3:25:46",
    },
    {
      titulo: "Operação papa charlie: reta final PCPR Agente - Direito Penal Prof Lucas Fávero",
      canal: "AlfaCon",
      url: "https://www.youtube.com/watch?v=vDhXHHSmt0w",
      duracao: "48:30",
    },
    {
      titulo: "Concurso PCPR Delegado | Desvendando a FGV: Resolução de Questões - Direito Penal – Geral",
      canal: "Gran Jurídico",
      url: "https://www.youtube.com/watch?v=aVYfhasLZhM",
      duracao: "49:05",
    },
    {
      titulo: "Concurso PCPR Delegado | Desvendando a FGV: Resolução de Questões - LPE",
      canal: "Gran Jurídico",
      url: "https://www.youtube.com/watch?v=0yeqw18nWFE",
      duracao: "1:07:40",
    },
  ],
  pp: [
    {
      titulo: "Hora da Verdade PC PR: Direito Processual Penal - Prof. Priscila Silveira",
      canal: "Estratégia Concursos",
      url: "https://www.youtube.com/watch?v=-LWgAr22xUw",
      dica: "Transmissão ao vivo agendada para 07/10, às 19h (horário de Brasília).",
    },
    {
      titulo: "Concurso PCPR | O que mais cai na FGV: Direito Processual Penal",
      canal: "Gran Jurídico",
      url: "https://www.youtube.com/watch?v=lwSXwfA1LWk",
      duracao: "56:00",
    },
    {
      titulo: "Principais Julgados para a PCPR: Direito Processual Penal",
      canal: "Gran Jurídico",
      url: "https://www.youtube.com/watch?v=pE6jLvP48ek",
      duracao: "57:55",
    },
    {
      titulo: "Concurso PCPR Delegado | Desvendando a FGV: Resolução de Questões - Direito Processual Penal",
      canal: "Gran Jurídico",
      url: "https://www.youtube.com/watch?v=iXo0mvaQEVE",
      duracao: "53:20",
    },
  ],
  pt: [
    {
      titulo: "Hora da Verdade PC PR: Língua Portuguesa - Prof. Janaína Arruda",
      canal: "Estratégia Concursos",
      url: "https://www.youtube.com/watch?v=mVn02N5SqyY",
      duracao: "3:41:34",
    },
    {
      titulo: "PORTUGUÊS PARA PC PR 2026: PERFIL DA FGV + QUESTÕES COMENTADAS DE CARREIRAS POLICIAIS",
      canal: "Professora Flávia Rita",
      url: "https://www.youtube.com/watch?v=Mwon9pM1zzc",
      duracao: "2:29:02",
    },
    {
      titulo: "Concurso Polícia Civil PR | Como a FGV Cobra Gramática?",
      canal: "Gran Cursos Online",
      url: "https://www.youtube.com/watch?v=OiTEy-M6uOI",
      duracao: "56:25",
    },
    {
      titulo: "Concurso PCPR: O que a FGV vai cobrar em Português e você precisa estar preparado",
      canal: "Qconcursos",
      url: "https://www.youtube.com/watch?v=fyOCkErHy9s",
      duracao: "59:40",
    },
  ],
  ti: [
    {
      titulo: "Hora da Verdade PC PR: Tecnologia e Sistemas de Informação e de Comunicação, Segurança Cibernética",
      canal: "Estratégia Concursos",
      url: "https://www.youtube.com/watch?v=Xj2fO1aXv_s",
      duracao: "3:22:36",
    },
    {
      titulo: "Hora da Verdade PC PR: Tecnologia e Sistemas de Informação e de Comunicação, Segurança Cibernética",
      canal: "Estratégia Concursos",
      url: "https://www.youtube.com/watch?v=8Hso1yR39_8",
      duracao: "1:24:41",
    },
    {
      titulo: "PCPR: Mega Revisão de Informática",
      canal: "Rani Passos",
      url: "https://www.youtube.com/watch?v=0Bmw2zDe53Y",
      duracao: "1:35:41",
    },
    {
      titulo: "PCPR 2026: Questões FGV de Tecnologia e Segurança Cibernética | Deodato Neto",
      canal: "Professor Deodato Neto",
      url: "https://www.youtube.com/watch?v=Y0dHmxfEXsM",
      duracao: "1:17:25",
    },
    {
      titulo: "Concurso Polícia Civil PR: Tecnologia, Comunicação e Crimes Digitais",
      canal: "Gran Cursos Online",
      url: "https://www.youtube.com/watch?v=P-ia6FmDITY",
      duracao: "51:36",
    },
  ],
};

export function videosDoTopico(materia: SubjectId, topico: string): VideoRecurso[] {
  return VIDEOS_POR_TOPICO[materia]?.[topico] ?? [];
}

export function totalVideosTopicos(materia: SubjectId): number {
  return Object.values(VIDEOS_POR_TOPICO[materia] ?? {}).reduce((n, vs) => n + vs.length, 0);
}
