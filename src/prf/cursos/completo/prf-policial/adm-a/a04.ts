import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-04",
  resumo: {
    ideia:
      "Empresas estatais têm personalidade privada, mas seguem regras públicas. As fundações públicas podem ser de direito público ou privado, e a diferença muda quase todo o regime.",
    itens: [
      {
        termo: "Criação das estatais",
        faz: "A lei autoriza, e a personalidade nasce com o registro dos atos.",
        pista: "Para subsidiárias, basta autorização genérica na lei.",
      },
      {
        termo: "Empresa pública",
        faz: "Capital todo público e forma societária variável.",
      },
      {
        termo: "Sociedade de economia mista",
        faz: "Sempre sociedade anônima, com a maioria das ações com voto em mãos públicas.",
      },
      {
        termo: "Foro",
        faz: "Empresa pública federal: Justiça Federal. Sociedade de economia mista: Justiça estadual.",
        pista: "Súmulas 517 e 556 do STF.",
      },
      {
        termo: "Pessoal",
        faz: "Empregados públicos pela CLT, com concurso e sem a estabilidade do art. 41 da CF.",
        pista: "A dispensa precisa ser motivada, sem processo administrativo (Tema 1.022).",
      },
      {
        termo: "Bens e dívidas",
        faz: "Em regra, bens privados. Quem presta serviço público sem concorrência pode pagar por precatório.",
      },
      {
        termo: "Responsabilidade",
        faz: "Objetiva do art. 37, § 6º, só para quem presta serviço público.",
      },
      {
        termo: "Venda do controle",
        faz: "Matriz: autorização legislativa e licitação. Subsidiária: dispensa as duas, com competitividade.",
        pista: "ADI 5.624.",
      },
      {
        termo: "Fundação de direito público",
        faz: "Criada por lei, é uma espécie de autarquia.",
      },
      {
        termo: "Fundação de direito privado",
        faz: "A lei autoriza, e nasce com o registro. Não exerce poder de polícia.",
      },
    ],
    cuidado: "A lei de falências não se aplica a empresas públicas nem a sociedades de economia mista.",
  },
  questoes: [
    {
      topico: "Empresas estatais",
      subassunto: "Forma societária",
      dificuldade: 4,
      raciocinio: "Capital todo público, com forma que não precisa ser S.A.",
      enunciado:
        "Uma lei autoriza a União a instituir uma entidade empresarial de capital exclusivamente público, organizada como sociedade limitada. Sobre essa entidade, é correto afirmar que",
      alternativas: [
        "é sociedade de economia mista, nome dado a toda estatal federal",
        "deveria ser sociedade anônima, forma obrigatória a qualquer estatal",
        "nasce da própria lei, sem necessidade de registrar seus atos",
        "tem personalidade de direito público, por causa do capital",
        "é empresa pública, que admite forma diversa da sociedade anônima",
      ],
      correta: 4,
      explicacao: "A empresa pública tem capital integralmente público e pode adotar outra forma societária. A sociedade anônima é obrigatória na sociedade de economia mista.",
      explicacaoErradas:
        "“sociedade de economia mista” exige capital também privado. “forma obrigatória” vale só para ela. “nasce da própria lei” descreve a autarquia. “direito público” erra, pois a estatal é pessoa de direito privado.",
      pegadinha: "Exigir sociedade anônima para toda estatal.",
      conhecimento: "No âmbito federal, o Decreto 8.945/2016 prefere a sociedade anônima para a empresa pública.",
    },
    {
      topico: "Empresas estatais",
      subassunto: "Foro",
      dificuldade: 4,
      raciocinio: "A Justiça Federal só recebe a sociedade de economia mista se a União intervier.",
      enunciado:
        "Foram propostas duas ações de indenização: uma contra sociedade de economia mista federal e outra contra empresa pública federal. Sem intervenção da União, serão competentes, respectivamente, a Justiça",
      alternativas: [
        "Federal e estadual",
        "estadual e Federal",
        "Federal nas duas ações",
        "estadual nas duas ações",
        "do Trabalho e Federal",
      ],
      correta: 1,
      explicacao: "O art. 109, I, da CF cita empresa pública federal, mas não a sociedade de economia mista, que fica na Justiça estadual (Súmulas 517 e 556 do STF).",
      explicacaoErradas:
        "“Federal e estadual” inverte a regra. “Federal nas duas ações” esquece as súmulas. “estadual nas duas ações” ignora o art. 109, I. “do Trabalho” cuidaria de relação de emprego, o que não é o caso.",
      pegadinha: "Tratar as duas estatais federais do mesmo modo.",
      conhecimento: "A sociedade de economia mista vai à Justiça Federal se a União intervier como assistente ou opoente.",
    },
    {
      topico: "Empresas estatais",
      subassunto: "Alienação do controle",
      dificuldade: 5,
      raciocinio: "Matriz é uma coisa. Subsidiária é outra.",
      enunciado:
        "A União quer vender o controle acionário de uma sociedade de economia mista, e outra estatal quer vender o controle de sua subsidiária. Pela decisão do STF na ADI 5.624,",
      alternativas: [
        "as duas vendas exigem autorização legislativa específica e licitação pública",
        "nenhuma venda depende de lei, e ambas seguem as regras de mercado",
        "a primeira dispensa a lei, e a segunda exige licitação plena",
        "a primeira exige lei e licitação, e a segunda dispensa as duas",
        "as duas dispensam a lei, se o Tribunal de Contas aprovar a venda",
      ],
      correta: 3,
      explicacao: "Vender o controle da matriz exige autorização legislativa e licitação. Na subsidiária, a venda dispensa as duas, respeitados os princípios da Administração e a competitividade.",
      explicacaoErradas:
        "“as duas vendas” trata igual o que o STF separou. “regras de mercado” esquece a exigência para a matriz. “dispensa a lei” erra a matriz. “Tribunal de Contas” não substitui a autorização legislativa.",
      pegadinha: "Aplicar à subsidiária a regra da empresa-matriz.",
      conhecimento: "A ADI 6.241 aceitou a autorização genérica de uma lei de programa de desestatização.",
    },
    {
      topico: "Empresas estatais",
      subassunto: "Responsabilidade",
      dificuldade: 5,
      raciocinio: "O § 6º olha para o serviço público, e não para a estatal em si.",
      enunciado:
        "Em casos distintos, um caminhão de uma estatal que explora atividade econômica em concorrência e um ônibus de uma estatal que presta transporte coletivo atropelam pedestres. O art. 37, § 6º, da CF alcança",
      alternativas: [
        "só a prestadora de serviço público, pois a norma não trata da outra",
        "as duas, pois toda estatal integra a Administração indireta",
        "nenhuma, pois as duas têm personalidade de direito privado",
        "só a exploradora de atividade, pois ela visa ao lucro",
        "as duas, mas apenas nos casos de dolo do motorista ou de culpa grave",
      ],
      correta: 0,
      explicacao: "O dispositivo fala em pessoas de direito público e de direito privado prestadoras de serviço público. A exploradora de atividade econômica responde pelo regime comum.",
      explicacaoErradas:
        "“toda estatal” amplia o texto. “personalidade de direito privado” não exclui a prestadora. “visa ao lucro” inverte a regra. “dolo” e “culpa grave” dizem respeito ao regresso contra o agente.",
      pegadinha: "Olhar a natureza da entidade em vez da atividade.",
      conhecimento: "No Tema 130, o STF aplicou a responsabilidade objetiva também em favor de quem não é usuário do serviço.",
    },
    {
      topico: "Empresas estatais",
      subassunto: "Precatórios",
      dificuldade: 5,
      raciocinio: "Serviço público, sem concorrência e sem lucro aproximam a estatal da Fazenda Pública.",
      enunciado:
        "Uma empresa pública presta serviço público essencial, sem concorrência e sem distribuir lucros. Condenada em juízo, pede para pagar a dívida por precatório. Segundo a jurisprudência do STF, o pedido",
      alternativas: [
        "deve ser negado, pois precatório é só para pessoa de direito público",
        "pode ser aceito, em razão do serviço e da falta de concorrência",
        "pode ser aceito, pois toda estatal equivale à Fazenda Pública",
        "deve ser negado, pois a estatal paga como empresa particular",
        "depende de lei do ente criador, por haver autonomia financeira",
      ],
      correta: 1,
      explicacao: "O STF aplica o art. 100 da CF às estatais prestadoras de serviço público próprio do Estado, de natureza não concorrencial e sem intuito primário de lucro.",
      explicacaoErradas:
        "“só para pessoa de direito público” e “como empresa particular” ignoram a jurisprudência. “toda estatal” exagera, pois a regra não alcança a exploradora em concorrência. “lei do ente criador” não é a condição.",
      pegadinha: "Aplicar a mesma resposta a toda estatal.",
      conhecimento: "Os Correios são o exemplo clássico, com impenhorabilidade e precatório.",
    },
    {
      topico: "Empresas estatais",
      subassunto: "Dispensa do empregado",
      dificuldade: 5,
      raciocinio: "Motivar é uma coisa. Abrir processo é outra.",
      enunciado:
        "Uma sociedade de economia mista que atua em concorrência dispensa um empregado concursado sem indicar os motivos. Segundo a tese do STF no Tema 1.022,",
      alternativas: [
        "a dispensa é válida, pois a concorrência afasta o dever de motivar",
        "a dispensa depende de processo disciplinar, com contraditório e ampla defesa",
        "a motivação é exigida em ato formal, sem necessidade de processo",
        "o empregado tem a mesma estabilidade dos servidores estatutários",
        "a motivação é devida só por estatais que prestam serviço público",
      ],
      correta: 2,
      explicacao: "As estatais têm o dever de motivar, em ato formal, a dispensa de empregados concursados, sem exigência de processo administrativo.",
      explicacaoErradas:
        "“concorrência afasta” contraria a tese, que inclui o regime concorrencial. “processo disciplinar” é o que a tese dispensa. “estabilidade” não existe aí. “só por estatais” limita o que a tese não limitou.",
      pegadinha: "Confundir motivação com processo administrativo.",
      conhecimento: "A motivação pode indicar razões de fato e de direito de modo simples.",
    },
    {
      topico: "Fundações públicas",
      subassunto: "Regime",
      dificuldade: 5,
      raciocinio: "Autorização e registro indicam direito privado.",
      enunciado:
        "Uma lei autoriza o Poder Executivo federal a instituir uma fundação de pesquisa, sem poder de polícia, e o estatuto é registrado em cartório. Sobre essa entidade, é correto afirmar que",
      alternativas: [
        "é fundação de direito público, por ter sido prevista em lei",
        "é autarquia fundacional, de personalidade nascida com a lei",
        "seus empregados têm a estabilidade especial do art. 19 do ADCT",
        "fica fora da Administração indireta por causa do regime privado",
        "é fundação de direito privado, que nasce com o seu registro",
      ],
      correta: 4,
      explicacao: "A fundação de direito privado depende de lei autorizadora e de registro. No Tema 545, o STF negou a estabilidade do art. 19 do ADCT aos seus empregados.",
      explicacaoErradas:
        "“direito público” e “autarquia fundacional” pedem criação direta por lei. “estabilidade especial” foi afastada pelo STF. “fora da Administração indireta” erra, pois ela integra essa estrutura.",
      pegadinha: "Achar que a simples menção em lei torna a fundação de direito público.",
      conhecimento: "Lei complementar define as áreas de atuação das fundações (art. 37, XIX, da CF).",
    },
    {
      topico: "Empresas estatais",
      subassunto: "Subsidiárias",
      dificuldade: 4,
      raciocinio: "Autorização genérica basta.",
      enunciado:
        "A lei que autorizou a criação de uma estatal prevê, em termos gerais, que ela pode ter subsidiárias. Agora a estatal quer constituir uma subsidiária para um ramo novo de seu objeto. Segundo o STF, ela",
      alternativas: [
        "precisa de uma nova lei para cada subsidiária que for criar",
        "precisa de decreto legislativo aprovado pelo Congresso",
        "não pode, pois subsidiárias são vedadas na Administração indireta",
        "pode, pois basta a autorização genérica prevista na lei",
        "pode, pois a estatal cria subsidiárias sem nenhuma autorização",
      ],
      correta: 3,
      explicacao: "Na ADI 1.649, o STF entendeu que a autorização genérica na lei instituidora atende ao art. 37, XX, da CF.",
      explicacaoErradas:
        "“nova lei” exagera a exigência “em cada caso”. “decreto legislativo” não é o instrumento. “vedadas” contraria o art. 37, XX. “sem nenhuma autorização” dispensa o que a Constituição exige.",
      pegadinha: "Ler “em cada caso” como lei específica para cada subsidiária.",
      conhecimento: "A Lei 13.303/2016 exige que o objeto da subsidiária se relacione com o da estatal controladora.",
    },
  ],
};
