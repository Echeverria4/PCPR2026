import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-12",
  resumo: {
    ideia:
      "Esta aula junta três grupos: corrupção em transação internacional, crimes contra a administração da justiça e crimes contra as finanças públicas. O maior grupo protege o bom andamento da Justiça.",
    itens: [
      {
        termo: "Corrupção internacional",
        faz: "Art. 337-B: prometer, oferecer ou dar vantagem a funcionário estrangeiro. Reclusão de 1 a 8 anos e multa.",
        pista: "Aqui o verbo dar existe. No art. 333, não.",
      },
      {
        termo: "Reingresso de expulso",
        faz: "Art. 338: reclusão de 1 a 4 anos. Exige sair e voltar. Recusar-se a sair não basta.",
      },
      {
        termo: "Medida protetiva",
        faz: "Art. 338-A: descumprir decisão que defere medida protetiva. Reclusão de 2 a 5 anos e multa. No flagrante, só o juiz concede fiança.",
      },
      {
        termo: "Denunciação caluniosa",
        faz: "Art. 339: dar causa a inquérito, processo, PAD ou ação de improbidade contra quem sabe inocente. Reclusão de 2 a 8 anos e multa.",
      },
      {
        termo: "Comunicação falsa",
        faz: "Art. 340: avisa crime que não houve, sem apontar autor. Detenção de 1 a 6 meses, ou multa.",
      },
      {
        termo: "Autoacusação falsa",
        faz: "Art. 341: acusa a si mesmo de crime inexistente ou de outro. Detenção de 3 meses a 2 anos, ou multa.",
      },
      {
        termo: "Falso testemunho",
        faz: "Art. 342: reclusão de 2 a 4 anos e multa. A retratação antes da sentença do processo afasta a punição.",
      },
      {
        termo: "Suborno de testemunha",
        faz: "Art. 343: dar, oferecer ou prometer vantagem. Reclusão de 3 a 4 anos e multa.",
      },
      {
        termo: "Coação no processo",
        faz: "Art. 344: violência ou grave ameaça contra quem atua no processo. Reclusão de 1 a 4 anos e multa, mais a pena da violência.",
      },
      {
        termo: "Exercício arbitrário",
        faz: "Art. 345: fazer justiça pelas próprias mãos, mesmo com razão. Sem violência, só por queixa.",
      },
      {
        termo: "Favorecimento",
        faz: "Art. 348: ajuda o autor a fugir. Art. 349: garante o proveito do crime. Parente do § 2º do art. 348 fica isento.",
      },
      {
        termo: "Fuga de preso",
        faz: "Art. 351: promover ou facilitar. Culpa de quem custodia: § 4º. O preso só comete crime se usar violência contra a pessoa (art. 352).",
      },
      {
        termo: "Finanças públicas",
        faz: "Arts. 359-A a 359-H. Exemplos: despesa sem lei (359-D), obrigação no fim do mandato (359-C), pessoal nos 180 dias finais (359-G).",
      },
    ],
    cuidado:
      "Fugir sem violência não é crime do preso. O art. 352 exige violência contra a pessoa.",
  },
  questoes: [
    {
      topico: "Administração da justiça",
      subassunto: "Descumprimento de medida protetiva",
      dificuldade: 5,
      raciocinio: "O § 1º e o § 2º do art. 338-A resolvem.",
      enunciado:
        "A PRF prende em flagrante um homem que descumpriu medida protetiva deferida por juiz de vara cível em favor da ex-companheira. Pelo CP,",
      alternativas: [
        "não há crime, pois o juiz não era criminal",
        "há só desobediência, do art. 330",
        "há crime do art. 338-A, e o delegado pode arbitrar a fiança",
        "há crime do art. 338-A, e só o juiz pode conceder fiança",
        "há crime do art. 338-A, mas depende de representação da vítima",
      ],
      correta: 3,
      explicacao:
        "O art. 338-A pune descumprir decisão que defere medida protetiva, com reclusão de 2 a 5 anos, e multa. A competência civil ou criminal do juiz não importa (§ 1º), e no flagrante só a autoridade judicial concede fiança (§ 2º).",
      explicacaoErradas:
        "“O juiz não era criminal” contraria o § 1º. “Desobediência” cede ao tipo especial. “Delegado” contraria o § 2º. “Representação” não está no artigo.",
      pegadinha: "A regra da fiança é diferente da regra geral do delegado.",
      conhecimento:
        "O artigo foi incluído pela Lei 15.280/2025.",
    },
    {
      topico: "Administração da justiça",
      subassunto: "Denunciação caluniosa e PAD",
      dificuldade: 5,
      raciocinio: "A redação atual vai além do crime.",
      enunciado:
        "Sabendo que um colega é inocente, um servidor imputa a ele falsa infração disciplinar, e isso dá causa à abertura de processo administrativo disciplinar. O fato é",
      alternativas: [
        "denunciação caluniosa, pela redação atual do art. 339",
        "atípico, pois o art. 339 exige imputação de crime",
        "calúnia, pois houve falsa imputação",
        "comunicação falsa de crime, do art. 340",
        "difamação, pois o fato não é crime, e só ofende a honra do colega",
      ],
      correta: 0,
      explicacao:
        "O art. 339 alcança dar causa a processo administrativo disciplinar, imputando crime, infração ético-disciplinar ou ato ímprobo a quem se sabe inocente.",
      explicacaoErradas:
        "“Exige imputação de crime” usa a redação antiga. “Calúnia” não alcança o dar causa ao processo. “Art. 340” trata de aviso a autoridade sobre fato não ocorrido. “Difamação” cede ao tipo específico.",
      pegadinha: "A lei ampliou o rol de procedimentos e de imputações.",
      conhecimento:
        "A pena aumenta de sexta parte com anonimato ou nome suposto, e cai de metade se a imputação é de contravenção.",
    },
    {
      topico: "Administração da justiça",
      subassunto: "Arts. 339, 340 e 341",
      dificuldade: 4,
      raciocinio: "Há pessoa apontada? Quem é apontado?",
      enunciado:
        "A primeira pessoa, para justificar uma falta ao trabalho, comunica à polícia um roubo que nunca houve, sem apontar autor. A segunda, sabendo-o inocente, aponta um vizinho como autor de um crime e causa um inquérito. A terceira se apresenta à autoridade como autora de um crime que outro praticou. Os crimes são, nessa ordem, dos arts.",
      alternativas: [
        "339, 340 e 341",
        "340, 341 e 339",
        "341, 339 e 340",
        "339, 341 e 340",
        "340, 339 e 341",
      ],
      correta: 4,
      explicacao:
        "O art. 340 pune comunicar crime que não se verificou. O art. 339 pune dar causa a investigação contra inocente. O art. 341 pune acusar-se de crime inexistente ou praticado por outrem.",
      explicacaoErradas:
        "“339, 340 e 341” trocaria os dois primeiros casos. As outras sequências deslocam a autoacusação, que é sempre do art. 341.",
      pegadinha: "Sem pessoa apontada, não é denunciação caluniosa.",
      conhecimento:
        "Os arts. 340 e 341 têm pena de detenção, e o art. 339, de reclusão.",
    },
    {
      topico: "Administração da justiça",
      subassunto: "Retratação no falso testemunho",
      dificuldade: 4,
      raciocinio: "O limite é a sentença, e não o trânsito em julgado.",
      enunciado:
        "Uma testemunha mente em processo penal e, depois da sentença de primeiro grau, com recurso ainda pendente, declara a verdade. Pelo art. 342, § 2º,",
      alternativas: [
        "o fato deixa de ser punível, pois não houve trânsito em julgado",
        "a pena cai de um sexto a um terço",
        "o fato continua punível, pois a sentença já saiu",
        "a retratação só vale no processo do júri",
        "o fato continua punível, pois a retratação nunca tem efeito",
      ],
      correta: 2,
      explicacao:
        "O fato deixa de ser punível se o agente se retrata ou declara a verdade antes da sentença no processo em que ocorreu o ilícito. Depois da sentença, é tarde.",
      explicacaoErradas:
        "“Trânsito em julgado” não é o marco. “Um sexto a um terço” é o aumento do § 1º. “Só no júri” cria limite que o artigo não tem. “Nunca tem efeito” ignora o § 2º.",
      pegadinha: "Compare com o peculato culposo, que usa a sentença irrecorrível.",
      conhecimento:
        "O crime alcança testemunha, perito, contador, tradutor e intérprete.",
    },
    {
      topico: "Administração da justiça",
      subassunto: "Suborno de testemunha",
      dificuldade: 5,
      raciocinio: "Cada um tem seu tipo, e o suborno muda a pena da testemunha.",
      enunciado:
        "Um réu paga R$ 3.000 a uma testemunha para que ela minta no processo penal dele, e ela mente. Quanto aos crimes,",
      alternativas: [
        "os dois respondem pelo art. 342, pela teoria monista",
        "o réu, pelo art. 343, e ela, pelo art. 342, § 1º",
        "o réu, pelo art. 333, e ela, pelo art. 317",
        "só ela responde, pois o réu exerce autodefesa",
        "o réu, pelo art. 344, e ela, pelo art. 342, sem aumento",
      ],
      correta: 1,
      explicacao:
        "O art. 343 pune dar vantagem a testemunha para mentir, com reclusão de 3 a 4 anos, e multa. Quem mente mediante suborno responde pelo art. 342 com aumento de um sexto a um terço.",
      explicacaoErradas:
        "“Teoria monista” ignora os tipos separados. “Art. 333” e “art. 317” tratam de funcionário. “Autodefesa” não cobre comprar testemunha. “Art. 344” exige violência ou grave ameaça.",
      pegadinha: "O suborno é causa de aumento para a testemunha.",
      conhecimento:
        "É outra exceção à teoria monista, como no caso do art. 318.",
    },
    {
      topico: "Administração da justiça",
      subassunto: "Exercício arbitrário",
      dificuldade: 4,
      raciocinio: "Houve violência? Isso define a ação penal.",
      enunciado:
        "Um credor, sem violência e sem ordem judicial, retira da garagem do devedor a moto que este se obrigou a lhe entregar. Como a pretensão é legítima, o fato é",
      alternativas: [
        "furto, de ação penal pública incondicionada",
        "atípico, pois a dívida era verdadeira",
        "roubo impróprio, pela retirada do bem",
        "exercício arbitrário, que só se procede mediante queixa",
        "exercício arbitrário, de ação pública, ainda sem violência alguma",
      ],
      correta: 3,
      explicacao:
        "O art. 345 pune fazer justiça pelas próprias mãos para satisfazer pretensão, embora legítima. Sem emprego de violência, somente se procede mediante queixa.",
      explicacaoErradas:
        "“Furto” e “roubo impróprio” não descrevem quem busca satisfazer um direito. “Atípico” ignora que o crime existe mesmo com razão. “De ação pública” contraria o parágrafo único.",
      pegadinha: "Ter razão não afasta o crime.",
      conhecimento:
        "A pena é de detenção de 15 dias a 1 mês, ou multa, além da pena da violência.",
    },
    {
      topico: "Administração da justiça",
      subassunto: "Favorecimento pessoal",
      dificuldade: 4,
      raciocinio: "Confira o rol do § 2º e a pena do crime anterior.",
      enunciado:
        "Numa perseguição, o autor de um roubo pede ajuda. O irmão dele o leva de carro para outra cidade, e um amigo o esconde em casa. Pelo art. 348 do CP,",
      alternativas: [
        "o irmão é isento de pena, e o amigo responde com detenção de 1 a 6 meses",
        "os dois são isentos, pois agiram por afeto",
        "os dois respondem, com a pena do autor do roubo, como partícipes",
        "o amigo é isento, e o irmão responde com pena aumentada de um terço",
        "o irmão responde por favorecimento real, e o amigo é isento de pena por amizade",
      ],
      correta: 0,
      explicacao:
        "O § 2º isenta de pena ascendente, descendente, cônjuge ou irmão. Como o roubo tem reclusão, o amigo responde pelo caput: detenção de 1 a 6 meses, e multa.",
      explicacaoErradas:
        "“Os dois são isentos” amplia o rol. “Partícipes” ignora que a ajuda veio depois do crime. “O amigo é isento” e “por amizade” invertem a regra.",
      pegadinha: "Amigo não está no rol do § 2º.",
      conhecimento:
        "Se o crime anterior não tem reclusão, a pena é de detenção de 15 dias a 3 meses, e multa.",
    },
    {
      topico: "Administração da justiça",
      subassunto: "Favorecimento real",
      dificuldade: 5,
      raciocinio: "De quem é o proveito que ele protege?",
      enunciado:
        "Depois de um roubo de carga, sem ter ajustado nada antes, um amigo guarda a mercadoria para o autor, sem querer nenhum ganho, só para ajudá-lo a manter o proveito. O crime do amigo é",
      alternativas: [
        "receptação, pois ocultou coisa produto de crime",
        "favorecimento pessoal, pois ajudou o criminoso",
        "coautoria no roubo, pois ajudou o autor do fato",
        "nenhum, pois não teve proveito",
        "favorecimento real, do art. 349 do CP",
      ],
      correta: 4,
      explicacao:
        "O art. 349 pune quem presta a criminoso, fora da coautoria e da receptação, auxílio destinado a tornar seguro o proveito do crime. O proveito aqui é do próprio autor.",
      explicacaoErradas:
        "“Receptação” exige proveito próprio ou de terceiro que não seja o autor do crime. “Favorecimento pessoal” protege a pessoa, e não o proveito. “Coautoria” exige ajuste anterior. “Nenhum” ignora o art. 349.",
      pegadinha: "No favorecimento real, o agente protege o proveito do outro.",
      conhecimento:
        "No favorecimento real, não há isenção para parentes.",
    },
    {
      topico: "Administração da justiça",
      subassunto: "Fuga de preso",
      dificuldade: 4,
      raciocinio: "O preso usou violência? O policial agiu com dolo?",
      enunciado:
        "Por negligência, o policial que escolta um preso deixa a viatura destrancada, e o preso foge sem usar violência contra ninguém. Pelo CP,",
      alternativas: [
        "os dois respondem, o policial pelo art. 319 e o preso pelo art. 352",
        "só o preso responde, pelo art. 352, e o policial é punido na via administrativa",
        "só o policial responde, pela forma culposa do art. 351, § 4º",
        "os dois respondem pelo art. 351, pela fuga",
        "ninguém responde, pois a fuga é direito do preso",
      ],
      correta: 2,
      explicacao:
        "O § 4º do art. 351 pune a culpa do funcionário incumbido da custódia: detenção de 3 meses a 1 ano, ou multa. O preso só comete o art. 352 se usar violência contra a pessoa.",
      explicacaoErradas:
        "“Art. 319” exige interesse ou sentimento pessoal. “Pelo art. 352” exige violência. “Os dois pelo art. 351” trata o preso como quem facilita a própria fuga. “Ninguém responde” ignora o § 4º.",
      pegadinha: "A fuga sem violência não é crime para o preso.",
      conhecimento:
        "O art. 352 pune igualmente evadir-se e tentar evadir-se.",
    },
    {
      topico: "Administração estrangeira",
      subassunto: "Art. 337-B",
      dificuldade: 5,
      raciocinio: "Compare os verbos do art. 337-B com os do art. 333.",
      enunciado:
        "Um empresário brasileiro dá dinheiro a um funcionário público estrangeiro, sem pedido prévio, para que ele retarde um ato de ofício ligado a uma transação comercial internacional. O fato é",
      alternativas: [
        "atípico, pois o verbo dar não está no art. 333",
        "crime do art. 337-B, que também pune quem dá a vantagem",
        "corrupção ativa do art. 333, com aumento de um terço",
        "crime do art. 337-C, pois houve influência em transação",
        "atípico, por faltar extraterritorialidade da lei brasileira ao caso",
      ],
      correta: 1,
      explicacao:
        "O art. 337-B pune prometer, oferecer ou dar vantagem indevida a funcionário público estrangeiro para que ele pratique, omita ou retarde ato ligado a transação comercial internacional.",
      explicacaoErradas:
        "“Não está no art. 333” é verdade, mas o tipo aplicável é outro. “Corrupção ativa” trata de funcionário brasileiro. “Art. 337-C” é o tráfico de influência. “Extraterritorialidade” não afasta o crime.",
      pegadinha: "O verbo dar aparece no art. 337-B, e não no art. 333.",
      conhecimento:
        "A pena é de reclusão de 1 a 8 anos, e multa. O art. 337-D define o funcionário estrangeiro.",
    },
    {
      topico: "Finanças públicas",
      subassunto: "Arts. 359-C, 359-D e 359-G",
      dificuldade: 5,
      raciocinio: "Separe prazo em quadrimestres, prazo em dias e falta de lei.",
      enunciado:
        "Um governador, no último ano do mandato: primeiro, nos dois últimos quadrimestres, assume obrigação que não pode ser paga no exercício, sem caixa para o restante; depois, nos 180 dias finais, pratica ato que aumenta a despesa com pessoal; por fim, ordena despesa não autorizada por lei. Os crimes são, nessa ordem, dos arts.",
      alternativas: [
        "359-G, C e D",
        "359-D, G e C",
        "359-C, D e G",
        "359-C, G e D",
        "359-D, C e G",
      ],
      correta: 3,
      explicacao:
        "O art. 359-C trata da obrigação nos dois últimos quadrimestres. O art. 359-G trata do aumento de despesa com pessoal nos 180 dias anteriores ao fim do mandato. O art. 359-D trata da despesa não autorizada por lei.",
      explicacaoErradas:
        "“359-G, C e D” troca os dois prazos. “359-D, G e C” e “359-D, C e G” começam pela despesa sem lei. “359-C, D e G” troca os dois últimos.",
      pegadinha: "Quadrimestres no 359-C, 180 dias no 359-G.",
      conhecimento:
        "Os três têm pena de reclusão de 1 a 4 anos.",
    },
  ],
};
