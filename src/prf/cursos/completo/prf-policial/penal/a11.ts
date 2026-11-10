import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-11",
  resumo: {
    ideia:
      "Aqui o autor é o particular que ataca a administração: resiste, desobedece, ofende, corrompe ou burla a alfândega. Na rotina da PRF, resistência, desobediência, desacato, descaminho e contrabando são os mais comuns.",
    itens: [
      {
        termo: "Resistência",
        faz: "Art. 329: opor-se a ato legal com violência ou ameaça. Detenção de 2 meses a 2 anos. Se o ato não se executa: reclusão de 1 a 3 anos.",
        pista: "A pena da violência é somada.",
      },
      {
        termo: "Desobediência",
        faz: "Art. 330: desobedecer ordem legal. Detenção de 15 dias a 6 meses e multa. Não há violência.",
      },
      {
        termo: "Desacato",
        faz: "Art. 331: ofender funcionário no exercício da função ou em razão dela. Detenção de 6 meses a 2 anos, ou multa.",
      },
      {
        termo: "Tráfico de influência",
        faz: "Art. 332: pedir vantagem a pretexto de influir em funcionário. Reclusão de 2 a 5 anos e multa. Aumenta de metade se insinua que o dinheiro também é dele.",
      },
      {
        termo: "Corrupção ativa",
        faz: "Art. 333: oferecer ou prometer vantagem. Reclusão de 2 a 12 anos e multa. Consuma-se com a oferta.",
        pista: "Os verbos são oferecer e prometer.",
      },
      {
        termo: "Descaminho",
        faz: "Art. 334: mercadoria permitida, sem pagar o imposto. Reclusão de 1 a 4 anos. Crime formal.",
      },
      {
        termo: "Contrabando",
        faz: "Art. 334-A: mercadoria proibida. Reclusão de 2 a 5 anos.",
      },
      {
        termo: "Aumento em dobro",
        faz: "Transporte aéreo, marítimo ou fluvial, mesmo em voo ou embarcação regular.",
      },
      {
        termo: "Facilitação",
        faz: "Art. 318: funcionário que facilita, com infração de dever funcional. Reclusão de 3 a 8 anos e multa. O STJ alcança o policial rodoviário.",
      },
      {
        termo: "Insignificância",
        faz: "Cabe no descaminho, como exceção à Súmula 599 do STJ. No contrabando, a regra é não caber.",
      },
      {
        termo: "Competência",
        faz: "Súmula 151 do STJ: prevenção do juízo federal do lugar da apreensão dos bens.",
      },
    ],
    cuidado:
      "Quem só paga o que o agente pediu não comete corrupção ativa, porque o art. 333 fala em oferecer ou prometer.",
  },
  questoes: [
    {
      topico: "Descaminho e contrabando",
      subassunto: "Mercadoria permitida x proibida",
      dificuldade: 4,
      raciocinio: "A mercadoria podia entrar no país?",
      enunciado:
        "Na rodovia, a PRF apreende com um motorista perfumes importados de venda permitida, sem o imposto pago. Com outro, apreende cigarros de importação proibida. Os crimes são, nessa ordem,",
      alternativas: [
        "contrabando e descaminho",
        "os dois são descaminho, de 1 a 4 anos",
        "os dois são contrabando, de 2 a 5 anos",
        "receptação e contrabando",
        "descaminho e contrabando",
      ],
      correta: 4,
      explicacao:
        "O descaminho (art. 334) ilude o imposto de mercadoria permitida. O contrabando (art. 334-A) é a entrada ou saída de mercadoria proibida.",
      explicacaoErradas:
        "“Contrabando e descaminho” inverte os casos. “Os dois são descaminho” ignora a proibição. “Os dois são contrabando” ignora que o perfume é permitido. “Receptação” cede ao tipo próprio.",
      pegadinha: "Descaminho é questão de imposto. Contrabando é questão de proibição.",
      conhecimento:
        "Pela Súmula 151 do STJ, a competência é do juízo federal do lugar da apreensão, por prevenção.",
    },
    {
      topico: "Descaminho e contrabando",
      subassunto: "Insignificância",
      dificuldade: 5,
      raciocinio: "Toda súmula tem o seu alcance na prática.",
      enunciado:
        "A defesa de um réu por descaminho pede a insignificância, e o MP responde com a Súmula 599 do STJ, que nega o princípio nos crimes contra a administração pública. Para a jurisprudência,",
      alternativas: [
        "o descaminho é exceção, e o princípio pode ser aplicado",
        "a súmula vale para todos os crimes do Título XI",
        "o princípio só cabe no contrabando, que é mais leve",
        "o princípio cabe sem limite de valor do tributo",
        "o princípio cabe só se o réu devolver toda a mercadoria",
      ],
      correta: 0,
      explicacao:
        "O descaminho tem natureza tributária, e os tribunais admitem a insignificância nele, até o valor fixado para a execução fiscal, apesar de estar entre os crimes contra a administração.",
      explicacaoErradas:
        "“Todos os crimes” ignora a exceção. “Só no contrabando” inverte a regra, e o contrabando tem pena maior. “Sem limite” erra, pois há teto. “Devolver a mercadoria” não é requisito.",
      pegadinha: "A exceção da súmula é o descaminho.",
      conhecimento:
        "O STJ, no Tema 1.218, entende que a reiteração em regra impede o princípio.",
    },
    {
      topico: "Descaminho e contrabando",
      subassunto: "Art. 318 e PRF",
      dificuldade: 5,
      raciocinio: "O CP criou tipos separados para cada um.",
      enunciado:
        "Um policial rodoviário em serviço, com infração de dever funcional, deixa passar de propósito um caminhão com mercadoria em descaminho, ajudando o motorista. Pelo CP e pelo STJ,",
      alternativas: [
        "os dois respondem pelo art. 334, pela teoria monista",
        "o policial não comete crime, pois não é de órgão fazendário",
        "o policial responde por prevaricação, e o motorista, pelo art. 334",
        "o policial responde pelo art. 318, e o motorista, pelo art. 334",
        "só o motorista responde, pois o policial foi omisso",
      ],
      correta: 3,
      explicacao:
        "O art. 318 é exceção pluralista à teoria monista: o funcionário responde por ele, e o particular, pelo art. 334. O STJ admite o crime para policial rodoviário, mesmo fora de órgão fazendário.",
      explicacaoErradas:
        "“Teoria monista” ignora a exceção. “Não é de órgão fazendário” contraria o STJ. “Prevaricação” cede ao tipo específico. “Foi omisso” esquece que ele facilitou.",
      pegadinha: "O agente não precisa ser da Receita Federal.",
      conhecimento:
        "A pena do art. 318 é de reclusão de 3 a 8 anos, e multa.",
    },
    {
      topico: "Descaminho e contrabando",
      subassunto: "Falso como crime-meio",
      dificuldade: 5,
      raciocinio: "O falso serviu só para aquele fim?",
      enunciado:
        "Para entrar com mercadoria sem pagar imposto, um importador usa nota fiscal falsa apenas para iludir a fiscalização daquela carga. A jurisprudência entende que",
      alternativas: [
        "há concurso material entre o falso e o descaminho",
        "o falso é crime-meio, absorvido pelo descaminho",
        "o falso absorve o descaminho, por ter pena maior",
        "o importador só responde pelo uso de documento falso",
        "há concurso formal, pela unidade de conduta",
      ],
      correta: 1,
      explicacao:
        "Quando o falso é usado só para o descaminho e nele se esgota, é absorvido, ainda que tenha pena maior. É a aplicação da consunção.",
      explicacaoErradas:
        "“Concurso material” e “concurso formal” somam o que é só um meio. “Absorve o descaminho” e “só responde pelo uso” invertem a relação entre os crimes.",
      pegadinha: "Crime-meio pode ter pena maior que o crime-fim.",
      conhecimento:
        "Se o falso mantém potencial para outros fins, a absorção não se aplica.",
    },
    {
      topico: "Descaminho e contrabando",
      subassunto: "Aumento em dobro",
      dificuldade: 4,
      raciocinio: "O texto não distingue voo regular de clandestino.",
      enunciado:
        "Um passageiro traz, em voo comercial regular, mercadoria permitida sem pagar o imposto devido. Pelo art. 334, § 3º, do CP, a pena",
      alternativas: [
        "não muda, pois o aumento é só para voo clandestino",
        "é aumentada de um terço, pelo transporte aéreo",
        "aplica-se em dobro, ainda que o voo seja regular",
        "não muda, pois o voo era regular e fiscalizado",
        "aumenta de metade, e só em voo internacional",
      ],
      correta: 2,
      explicacao:
        "O § 3º manda aplicar em dobro a pena do descaminho em transporte aéreo, marítimo ou fluvial. A jurisprudência aplica o aumento mesmo em voo regular.",
      explicacaoErradas:
        "“Só para voo clandestino” e “regular e fiscalizado” criam limite que a lei não tem. “Um terço” e “metade” erram a fração.",
      pegadinha: "Transporte terrestre não está no § 3º.",
      conhecimento:
        "O art. 334-A, § 3º, traz o mesmo aumento em dobro para o contrabando.",
    },
    {
      topico: "Resistência",
      subassunto: "Forma qualificada e violência",
      dificuldade: 4,
      raciocinio: "O ato chegou a ser executado? E a violência?",
      enunciado:
        "Ao receber voz de prisão, um homem agride o policial que cumpria o ato, causando lesão leve, e foge, de modo que a prisão não se executa. Pelo art. 329 do CP,",
      alternativas: [
        "responde só pelo caput, com detenção de 2 meses a 2 anos",
        "responde só por lesão corporal, que absorve a resistência",
        "responde só por desacato, pelo ataque ao funcionário",
        "responde por desobediência, pois não cumpriu a ordem",
        "responde pelo § 1º, de 1 a 3 anos, somado à pena da lesão",
      ],
      correta: 4,
      explicacao:
        "O § 1º prevê reclusão de 1 a 3 anos se o ato, por causa da resistência, não se executa. O § 2º diz que as penas se aplicam sem prejuízo das correspondentes à violência.",
      explicacaoErradas:
        "“Só pelo caput” ignora o § 1º. “Absorve a resistência” contraria o § 2º. “Desacato” e “desobediência” não descrevem quem usa violência para impedir o ato.",
      pegadinha: "A resistência exige ato legal e funcionário competente.",
      conhecimento:
        "A violência pode ser contra quem presta auxílio ao funcionário.",
    },
    {
      topico: "Desobediência",
      subassunto: "Ordem de parada",
      dificuldade: 5,
      raciocinio: "O contexto da ordem é o policiamento.",
      enunciado:
        "Em policiamento ostensivo, a PRF dá ordem de parada a um motorista, que acelera e foge, sem violência. Pelo STJ, em recurso repetitivo, a conduta",
      alternativas: [
        "é típica, como desobediência do art. 330 do CP",
        "é atípica, pois há só sanção administrativa no CTB",
        "é resistência, pela oposição ao ato legal",
        "é atípica, por ser exercício da autodefesa",
        "é desacato, pelo desprezo à ordem do policial",
      ],
      correta: 0,
      explicacao:
        "No Tema 1.060, o STJ fixou que desobedecer a ordem legal de parada, dada em policiamento ostensivo para prevenir e reprimir crimes, é conduta típica do art. 330.",
      explicacaoErradas:
        "“Só sanção administrativa” é a regra geral que o tema afastou para esse contexto. “Resistência” exige violência ou ameaça. “Autodefesa” não alcança a fuga da ordem. “Desacato” exige ofensa.",
      pegadinha: "Não confunda com a ordem dada só em fiscalização de trânsito.",
      conhecimento:
        "A pena do art. 330 é de detenção de 15 dias a 6 meses, e multa.",
    },
    {
      topico: "Desacato",
      subassunto: "Constitucionalidade",
      dificuldade: 4,
      raciocinio: "O STF já decidiu esse ponto.",
      enunciado:
        "Um motorista autuado xinga o policial na frente dele, em serviço, para humilhá-lo. A defesa alega que o desacato viola a liberdade de expressão. Pela posição do STF,",
      alternativas: [
        "o desacato não foi recepcionado pela Constituição",
        "o fato é só injúria, com aumento pela função",
        "o desacato é constitucional, e o fato é típico",
        "o desacato foi revogado pelo Pacto de São José",
        "o fato exige representação do policial",
      ],
      correta: 2,
      explicacao:
        "Na ADPF 496, o STF julgou que o art. 331 foi recepcionado. A liberdade de expressão não protege a ofensa dirigida ao funcionário no exercício da função.",
      explicacaoErradas:
        "“Não foi recepcionado” e “revogado” contrariam o STF. “Só injúria” ignora o tipo específico. “Exige representação” erra, pois a ação é pública incondicionada.",
      pegadinha: "O desacato exige a presença do funcionário.",
      conhecimento:
        "A pena é de detenção de 6 meses a 2 anos, ou multa.",
    },
    {
      topico: "Corrupção ativa",
      subassunto: "Solicitação e pagamento",
      dificuldade: 5,
      raciocinio: "Leia os verbos do art. 333.",
      enunciado:
        "Um agente solicita R$ 200 para não autuar um motorista, que paga sem nada ter oferecido antes. Quanto aos crimes,",
      alternativas: [
        "o agente comete concussão, e o motorista é vítima",
        "os dois cometem corrupção, pela teoria monista",
        "o motorista comete corrupção ativa, por ter pago",
        "só o agente responde, por corrupção passiva do art. 317",
        "os dois respondem, e o motorista, por favorecimento real",
      ],
      correta: 3,
      explicacao:
        "O art. 317 tem o verbo solicitar. O art. 333 pune oferecer ou prometer. Quem só atende ao pedido não pratica nenhum dos dois verbos, e a corrupção não é necessariamente bilateral.",
      explicacaoErradas:
        "“Concussão” exige exigência. “Teoria monista” não se aplica, pois há tipos separados. “Por ter pago” ignora os verbos do art. 333. “Favorecimento real” não descreve a conduta.",
      pegadinha: "Dar depois de pedido não é oferecer.",
      conhecimento:
        "Se o motorista oferece primeiro, a corrupção ativa se consuma mesmo com a recusa do agente.",
    },
    {
      topico: "Tráfico de influência",
      subassunto: "Art. 332",
      dificuldade: 4,
      raciocinio: "Ele vende influência e insinua algo mais.",
      enunciado:
        "Um despachante cobra R$ 1.000 de um motorista a pretexto de influir no agente que analisa a liberação do veículo, insinuando que parte do dinheiro é do agente. Pelo CP, ele responde",
      alternativas: [
        "por exploração de prestígio, com a pena do art. 357",
        "por tráfico de influência, com aumento de metade",
        "por corrupção ativa, pois citou o agente",
        "por estelionato, pois o agente nada sabia",
        "por tráfico de influência, com aumento de um terço",
      ],
      correta: 1,
      explicacao:
        "O art. 332 pune cobrar vantagem a pretexto de influir em ato de funcionário público. O parágrafo único aumenta a pena de metade se o agente alega ou insinua que a vantagem também é do funcionário.",
      explicacaoErradas:
        "“Exploração de prestígio” trata de juiz, jurado e outros da Justiça. “Corrupção ativa” exige oferta ao funcionário. “Estelionato” cede ao tipo próprio. “Um terço” erra a fração.",
      pegadinha: "O aumento é de metade, e não de um terço.",
      conhecimento:
        "A pena é de reclusão de 2 a 5 anos, e multa.",
    },
  ],
};
