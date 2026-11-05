import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-03",
  resumo: {
    ideia:
      "O Estado atua por órgãos, entidades e agentes. A aula separa o que acontece dentro da mesma pessoa jurídica (desconcentração) do que passa a outra pessoa (descentralização) e detalha as autarquias.",
    itens: [
      {
        termo: "Desconcentração",
        faz: "Distribui competências dentro da mesma pessoa jurídica. Cria órgãos e há hierarquia.",
      },
      {
        termo: "Descentralização",
        faz: "Passa a atividade para outra pessoa. Não há hierarquia, e sim controle finalístico.",
      },
      {
        termo: "Outorga e delegação",
        faz: "Outorga: lei cria entidade e dá a titularidade do serviço. Delegação: contrato ou ato passa só a execução.",
      },
      {
        termo: "Teoria do órgão",
        faz: "A vontade do agente é imputada ao Estado. Substituiu as teorias do mandato e da representação.",
      },
      {
        termo: "Órgão público",
        faz: "É centro de competências sem personalidade jurídica. Em regra, não vai a juízo.",
        pista: "Súmula 525 do STJ: a Câmara de Vereadores tem só personalidade judiciária.",
      },
      {
        termo: "Órgãos pela posição",
        faz: "Independentes, autônomos, superiores e subalternos.",
      },
      {
        termo: "Administração indireta",
        faz: "Autarquias, fundações públicas, empresas públicas e sociedades de economia mista.",
      },
      {
        termo: "Autarquia",
        faz: "Pessoa de direito público criada por lei para atividade típica de Estado.",
        pista: "Tem bens públicos, precatório, imunidade e prazos especiais.",
      },
      {
        termo: "Agências reguladoras",
        faz: "Autarquias de regime especial, com dirigentes de mandato fixo e poder normativo técnico.",
      },
      {
        termo: "Agência executiva",
        faz: "Qualificação dada a autarquia ou fundação com contrato de gestão e plano de reestruturação.",
      },
    ],
    cuidado: "A OAB não integra a Administração indireta e não presta contas ao TCU (ADI 3.026 e Tema 1.024 do STF).",
  },
  questoes: [
    {
      topico: "Organização",
      subassunto: "Desconcentração",
      dificuldade: 4,
      raciocinio: "Mesma pessoa jurídica, então é desconcentração.",
      enunciado:
        "A PRF, órgão da União, cria novas delegacias para dividir o trabalho de uma superintendência. Quanto à organização administrativa, essa medida é",
      alternativas: [
        "descentralização por outorga, com nova pessoa jurídica",
        "descentralização por delegação, com execução transferida",
        "descentralização territorial, própria de Território Federal",
        "desconcentração, pois tudo ocorre dentro da mesma pessoa",
        "centralização, pois a União passa a concentrar a atividade",
      ],
      correta: 3,
      explicacao: "A desconcentração divide competências internamente, dentro da mesma pessoa jurídica, por matéria, hierarquia ou território.",
      explicacaoErradas:
        "“outorga” cria pessoa nova. “delegação” transfere a execução a outra pessoa. “territorial” liga-se a Território Federal. “centralização” descreve quem executa, e não a divisão interna.",
      pegadinha: "Pensar que a divisão geográfica leva à descentralização.",
      conhecimento: "A desconcentração pode ocorrer também dentro de uma entidade da Administração indireta.",
    },
    {
      topico: "Organização",
      subassunto: "Descentralização",
      dificuldade: 5,
      raciocinio: "Na descentralização não há hierarquia, há controle finalístico.",
      enunciado:
        "O ministro supervisor manda uma autarquia federal rever um ato concreto de gestão interna, sem que a lei preveja essa revisão. A autarquia recusa. Pela doutrina dominante, a recusa",
      alternativas: [
        "é ilegal, pois autarquia é subordinada ao ministério",
        "é ilegal, pois a tutela equivale à hierarquia funcional",
        "é legítima, pois a tutela é limitada e depende de previsão legal",
        "é legítima, pois a autarquia fica livre de todo controle externo",
        "só seria legítima com decisão judicial anterior à recusa",
      ],
      correta: 2,
      explicacao: "Entre a Administração direta e a indireta há vinculação, e não subordinação. O controle finalístico só existe nos limites da lei.",
      explicacaoErradas:
        "“subordinada” e “equivale à hierarquia” confundem tutela com hierarquia. “livre de todo controle” exagera, pois o controle existe nos termos da lei. “decisão judicial” não é necessária para a recusa.",
      pegadinha: "Trocar vinculação por subordinação.",
      conhecimento: "A tutela extraordinária é admitida pela doutrina em casos de grave desvio, de forma excepcional.",
    },
    {
      topico: "Órgãos",
      subassunto: "Capacidade processual",
      dificuldade: 4,
      raciocinio: "Órgão não tem personalidade. A pessoa jurídica responde.",
      enunciado:
        "Uma viatura da PRF colide com um carro particular por culpa do policial. A vítima quer ação de indenização. O polo passivo deve ser ocupado",
      alternativas: [
        "pela União, pois a PRF é órgão sem personalidade jurídica",
        "pela PRF, por ser ela quem presta o serviço de patrulha",
        "pelo Ministério da Justiça, órgão ao qual a PRF se liga",
        "somente pelo policial, que causou diretamente o dano",
        "pelo Estado onde o acidente ocorreu, pela localização da via",
      ],
      correta: 0,
      explicacao: "Órgão não tem personalidade jurídica. A PRF integra a União, que responde pelo dano, com ação regressiva contra o agente.",
      explicacaoErradas:
        "“pela PRF” e “Ministério da Justiça” são órgãos, e não pessoas. “somente pelo policial” contraria a tese da dupla garantia (Tema 940 do STF). “pelo Estado” nada tem com o órgão federal.",
      pegadinha: "Processar o órgão, e não a pessoa jurídica.",
      conhecimento: "Pelo Tema 940, a vítima deve acionar o Estado, e não diretamente o agente.",
    },
    {
      topico: "Órgãos",
      subassunto: "Teorias",
      dificuldade: 5,
      raciocinio: "O agente não representa o Estado. O Estado se manifesta por ele.",
      enunciado:
        "A teoria adotada no Brasil para explicar como a vontade do agente se torna vontade do Estado afirma que",
      alternativas: [
        "o agente é mandatário, com procuração outorgada pelo Estado",
        "o agente é tutor ou curador do Estado, que seria incapaz",
        "o Estado responde só quando o agente tiver poderes expressos",
        "a atuação do agente é imputada à pessoa jurídica que integra",
        "o órgão tem personalidade própria, separada da pessoa jurídica",
      ],
      correta: 3,
      explicacao: "Pela teoria do órgão, ou da imputação volitiva, a manifestação do agente é atribuída à pessoa jurídica.",
      explicacaoErradas:
        "“mandatário” é a teoria do mandato: o Estado não teria vontade própria para outorgar. “tutor ou curador” é a da representação. “poderes expressos” não é a regra. “personalidade própria” contraria o conceito de órgão.",
      pegadinha: "Dizer que o agente “representa” o Estado.",
      conhecimento: "A ideia é atribuída ao jurista alemão Otto Gierke.",
    },
    {
      topico: "Autarquias",
      subassunto: "Criação",
      dificuldade: 4,
      raciocinio: "Autarquia nasce da própria lei, sem registro.",
      enunciado:
        "Quanto à criação de autarquia federal, a Constituição (art. 37, XIX) determina que ela",
      alternativas: [
        "seja autorizada por lei e nasça com o registro dos atos",
        "seja criada por decreto presidencial, com previsão em lei",
        "seja criada por lei específica, sem depender de registro",
        "seja criada por lei complementar, em qualquer caso",
        "seja criada por resolução aprovada pelo Congresso Nacional",
      ],
      correta: 2,
      explicacao: "A autarquia é criada diretamente por lei específica. Sua personalidade nasce com a vigência da lei.",
      explicacaoErradas:
        "“autorizada por lei” e “registro” são para empresa pública, sociedade de economia mista e fundação privada. “decreto” e “resolução” não criam autarquia. “lei complementar” é só para definir as áreas de atuação das fundações.",
      pegadinha: "Trocar “criada” por “autorizada”.",
      conhecimento: "A extinção segue o paralelismo: também depende de lei.",
    },
    {
      topico: "Autarquias",
      subassunto: "Prerrogativas",
      dificuldade: 5,
      raciocinio: "Autarquia segue o regime da Fazenda Pública.",
      enunciado:
        "Uma autarquia federal perde uma ação de cobrança e, ao mesmo tempo, tem um imóvel de sua sede indicado à penhora pelo credor. Pelo regime das autarquias,",
      alternativas: [
        "o imóvel pode ser penhorado, por ser bem privado de pessoa pública",
        "a dívida é paga por precatório, e o imóvel não pode ser penhorado",
        "o pagamento depende de o imóvel ser vendido em leilão público",
        "a dívida é paga como a de um particular, pois ela tem autonomia",
        "a União paga a dívida de imediato, como devedora principal",
      ],
      correta: 1,
      explicacao: "Os bens das autarquias são públicos e impenhoráveis. O pagamento de condenações segue o regime de precatórios do art. 100 da CF.",
      explicacaoErradas:
        "“bem privado” contraria o art. 98 do Código Civil. “vendido em leilão” e “como a de um particular” ignoram o art. 100. “devedora principal” erra: a autarquia responde com patrimônio próprio, e a União só subsidiariamente.",
      pegadinha: "Achar que a autonomia afasta o regime público.",
      conhecimento: "Pequenos valores são pagos por RPV, sem precatório.",
    },
    {
      topico: "Autarquias",
      subassunto: "Agências",
      dificuldade: 5,
      raciocinio: "Agência executiva é título. Agência reguladora é regime da lei.",
      enunciado:
        "Uma autarquia federal comum firma contrato de gestão, tem plano de reestruturação e recebe do Presidente da República uma qualificação que amplia sua autonomia. Essa entidade",
      alternativas: [
        "passou a ser agência reguladora, de mandato fixo",
        "deixou de ser autarquia e virou fundação pública",
        "passou a ser organização social, de direito privado",
        "tornou-se agência executiva, sem mudar de natureza",
        "passou a integrar a Administração direta do ministério",
      ],
      correta: 3,
      explicacao: "A agência executiva é autarquia ou fundação que recebe essa qualificação, por decreto, com contrato de gestão e plano de reestruturação, sem nova pessoa jurídica.",
      explicacaoErradas:
        "“agência reguladora” decorre da lei e tem regime especial. “fundação pública” e “Administração direta” mudariam a natureza. “organização social” é entidade privada do terceiro setor.",
      pegadinha: "Trocar agência executiva por reguladora.",
      conhecimento: "A base está na Lei 9.649/1998 e no art. 37, § 8º, da CF.",
    },
    {
      topico: "Autarquias",
      subassunto: "OAB e conselhos",
      dificuldade: 5,
      raciocinio: "A OAB é caso à parte. Os conselhos em geral são autarquias.",
      enunciado:
        "Sobre os conselhos de fiscalização profissional e a OAB, a jurisprudência do STF indica que",
      alternativas: [
        "todos, sem exceção, prestam contas ao Tribunal de Contas da União",
        "a OAB é autarquia comum e deve realizar concurso público",
        "os conselhos são associações privadas, de todo fora do controle",
        "a OAB não presta contas ao TCU, e os conselhos são autárquicos",
        "os conselhos podem delegar a fiscalização a entidades privadas",
      ],
      correta: 3,
      explicacao: "A ADI 3.026 tirou a OAB da Administração indireta, e o Tema 1.024 afastou a prestação de contas. Os demais conselhos exercem poder de polícia e são autárquicos (ADI 1.717).",
      explicacaoErradas:
        "“sem exceção” esquece a OAB. “autarquia comum” contraria a ADI 3.026. “associações privadas” e “delegar a fiscalização” contrariam a ADI 1.717, que veda delegar poder de polícia a entidade privada.",
      pegadinha: "Colocar a OAB no mesmo regime dos conselhos.",
      conhecimento: "O regime de pessoal dos conselhos foi discutido pelo STF na ADC 36 e nas ações relacionadas.",
    },
  ],
};
