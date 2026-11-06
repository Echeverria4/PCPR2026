import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-b-05",
  resumo: {
    ideia:
      "As espécies de atos seguem a sigla N-O-N-E-P: normativos, ordinatórios, negociais, enunciativos e punitivos. A extinção pode vir de anulação, revogação, cassação, caducidade, contraposição, renúncia ou do fim natural do ato.",
    itens: [
      {
        termo: "Normativos",
        faz: "Regras gerais e abstratas, como decretos regulamentares e instruções normativas.",
        pista: "Decreto de efeito concreto não é normativo, mesmo com esse nome.",
      },
      {
        termo: "Ordinatórios",
        faz: "Organizam o serviço interno. Alcançam só os subordinados: portarias, circulares, avisos, ordens de serviço.",
      },
      {
        termo: "Negociais",
        faz: "Atendem a um interesse do particular com o da Administração: licença, autorização, permissão, admissão, aprovação, homologação.",
      },
      {
        termo: "Enunciativos",
        faz: "Atestam ou opinam: certidão, atestado, parecer, apostila.",
      },
      {
        termo: "Punitivos",
        faz: "Aplicam sanção a servidor ou a particular.",
      },
      {
        termo: "Homologação x aprovação",
        faz: "Homologação: legalidade, posterior, vinculada. Aprovação: mérito, prévia ou posterior, discricionária.",
      },
      {
        termo: "Parecer",
        faz: "Pode ser facultativo, obrigatório ou vinculante. No vinculante, a autoridade não decide contra ele.",
      },
      {
        termo: "Contraposição",
        faz: "Um novo ato, com efeito oposto, extingue o anterior, como a exoneração em relação à nomeação.",
      },
      {
        termo: "Anulação com efeitos já produzidos",
        faz: "Exige processo com contraditório antes do desfazimento. Recurso depois não supre a falha.",
      },
    ],
    cuidado:
      "Não se revoga ato vinculado, ato consumado, ato que gerou direito adquirido nem ato enunciativo, como certidão e atestado.",
  },
  questoes: [
    {
      topico: "Espécies",
      subassunto: "N-O-N-E-P",
      dificuldade: 4,
      raciocinio: "Pergunte o que cada ato faz: regula, organiza, consente, atesta ou pune.",
      enunciado:
        "Associe os atos à sua espécie: uma instrução normativa geral; uma ordem de serviço interna; uma licença para construir; uma certidão de tempo de serviço; e uma multa. As espécies são, nessa ordem,",
      alternativas: [
        "ordinatório, normativo, enunciativo, negocial e punitivo",
        "normativo, punitivo, ordinatório, negocial e enunciativo",
        "normativo, ordinatório, enunciativo, punitivo e negocial",
        "normativo, ordinatório, negocial, enunciativo e punitivo",
        "negocial, ordinatório, normativo, enunciativo e punitivo",
      ],
      correta: 3,
      explicacao:
        "Instrução geral regula; ordem de serviço organiza; licença consente; certidão atesta; e multa pune.",
      explicacaoErradas:
        "“Ordinatório, normativo” inverte os dois primeiros. “Normativo, punitivo” põe a ordem de serviço como sanção. “Enunciativo, punitivo e negocial” troca os três últimos. “Negocial, ordinatório, normativo” chama de negocial a instrução geral.",
      pegadinha: "Decore pela função do ato, não pelo nome dado a ele.",
      conhecimento:
        "Essa classificação vem de Hely Lopes Meirelles e é a mais usada em concursos.",
    },
    {
      topico: "Decreto",
      subassunto: "Decreto de efeitos concretos",
      dificuldade: 5,
      raciocinio: "O que define a espécie é o conteúdo, não o nome do veículo.",
      enunciado:
        "O Presidente da República edita decreto que apenas extingue um cargo público vago, identificado. Quanto à natureza, esse decreto",
      alternativas: [
        "é ato normativo por excelência, porque todo decreto é geral e abstrato",
        "é ato de efeitos concretos, ainda que tenha forma de decreto",
        "é inconstitucional, porque cargo vago só se extingue por lei em qualquer hipótese",
        "é decreto regulamentar, porque explica como a lei de criação do cargo será aplicada",
        "é ato enunciativo",
      ],
      correta: 1,
      explicacao:
        "A CF, art. 84, VI, “b”, permite ao Presidente extinguir por decreto cargo vago. Esse decreto se esgota em um caso concreto, logo é de efeitos concretos.",
      explicacaoErradas:
        "“Todo decreto é geral” confunde forma e conteúdo. “Só se extingue por lei” contraria o art. 84, VI, “b”. “Decreto regulamentar” regula a execução da lei, o que aqui não ocorre. “Enunciativo” atesta ou opina, e aqui há extinção.",
      pegadinha: "Decreto autônomo existe em duas hipóteses: organização sem despesa e extinção de cargo vago.",
      conhecimento:
        "A competência do art. 84, VI, pode ser delegada a ministros, ao PGR e ao AGU.",
    },
    {
      topico: "Atos normativos",
      subassunto: "Impugnação de ato geral",
      dificuldade: 5,
      raciocinio: "Regra abstrata sem caso concreto não abre mandado de segurança.",
      enunciado:
        "Um grupo impetra mandado de segurança contra uma instrução normativa geral e abstrata, sem apontar qualquer ato concreto que atinja seu direito. Pela jurisprudência do STF,",
      alternativas: [
        "cabe a ação, porque qualquer norma pode ser questionada a qualquer tempo por esse meio",
        "cabe a ação, se a impetração ocorrer dentro de 120 dias contados da publicação da norma",
        "não cabe a ação contra norma em tese, e a ilegalidade seria discutida no caso concreto",
        "não cabe a ação, porque o ato normativo nunca pode ser levado ao Judiciário",
        "a norma só seria impugnável pelo Tribunal de Contas",
      ],
      correta: 2,
      explicacao:
        "A Súmula 266 do STF diz que não cabe mandado de segurança contra lei em tese. O ato normativo costuma ser atacado de modo incidental, no caso concreto, ou em controle concentrado, quando cabível.",
      explicacaoErradas:
        "“Qualquer norma” e “dentro de 120 dias” ignoram a Súmula 266. “Nunca pode ser levado ao Judiciário” contraria o art. 5º, XXXV. “Tribunal de Contas” não é a via adequada para impugnar norma em tese.",
      pegadinha: "Ato com forma de norma, mas com efeito concreto, admite mandado de segurança.",
      conhecimento:
        "Os atos normativos também não são impugnáveis por recurso administrativo, em regra.",
    },
    {
      topico: "Atos ordinatórios",
      subassunto: "Alcance interno",
      dificuldade: 4,
      raciocinio: "Ordinatório vale dentro de casa.",
      enunciado:
        "Uma circular interna define como os servidores de um setor devem organizar o atendimento. Com base nela, a chefia pretende multar um cidadão que descumpriu um item do texto. Essa multa",
      alternativas: [
        "é válida, pois todo ato da Administração obriga igualmente os particulares",
        "é válida se a circular tiver sido afixada em local visível",
        "é inválida apenas se o cidadão provar que não leu a circular antes da conduta",
        "é inválida, pois ato ordinatório só alcança subordinados",
        "é válida, pois as circulares têm força de lei no âmbito da unidade que as expede",
      ],
      correta: 3,
      explicacao:
        "Atos ordinatórios organizam o serviço e vinculam quem está subordinado à autoridade. Não criam obrigações nem sanções para particulares.",
      explicacaoErradas:
        "“Obriga igualmente os particulares” e “força de lei” superestimam a circular. “Afixada em local visível” e “não leu a circular” tratam de publicidade, e o vício é de falta de base legal.",
      pegadinha: "Sanção a particular exige previsão em lei.",
      conhecimento:
        "Portarias e ordens de serviço são exemplos típicos; despachos internos também entram nessa espécie.",
    },
    {
      topico: "Atos negociais",
      subassunto: "Homologação, aprovação e visto",
      dificuldade: 5,
      raciocinio: "Três perguntas: quando ocorre, o que examina, e se é vinculado.",
      enunciado:
        "A autoridade examina um procedimento já concluído apenas quanto à legalidade e, estando regular, deve confirmá-lo. Em outro caso, outra autoridade avalia a conveniência de um ato, antes ou depois de praticado, com liberdade de decisão. Esses atos são, respectivamente,",
      alternativas: [
        "aprovação e homologação",
        "homologação e aprovação",
        "visto e admissão, pois nos dois casos há mero controle de forma",
        "licença e autorização, pois um é vinculado e o outro é discricionário",
        "homologação e autorização, porque a segunda serve para qualquer exame de mérito",
      ],
      correta: 1,
      explicacao:
        "Homologação é posterior, trata de legalidade e é vinculada. Aprovação pode ser prévia ou posterior, trata de mérito e é discricionária.",
      explicacaoErradas:
        "“Aprovação e homologação” inverte os conceitos. “Visto” é só controle formal, e “admissão” dá acesso a um serviço. “Licença e autorização” liberam atividades do particular. “Autorização” não é exame de ato de outro órgão.",
      pegadinha: "A aprovação tem momento flexível; a homologação sempre vem depois.",
      conhecimento:
        "O visto apenas atesta a regularidade formal, sem entrar no conteúdo.",
    },
    {
      topico: "Admissão",
      subassunto: "Natureza da admissão",
      dificuldade: 4,
      raciocinio: "Cumpriu os requisitos, tem direito ao serviço.",
      enunciado:
        "Um candidato atende a todos os requisitos legais para se matricular em escola pública e o gestor nega a matrícula porque prefere reservar a vaga. Em relação à admissão, ato usado nesse caso, é correto dizer que",
      alternativas: [
        "é ato discricionário e precário, revogável a qualquer tempo pelo gestor, sem indenização",
        "é ato vinculado, e a negativa é ilegal",
        "é ato enunciativo, pois apenas certifica que o aluno existe",
        "é contrato administrativo",
        "depende de licitação, porque a vaga é um bem público e só pode ser disputada em condições iguais",
      ],
      correta: 1,
      explicacao:
        "A admissão é ato unilateral e vinculado pelo qual se reconhece o direito de receber um serviço público. Cumpridos os requisitos, não há escolha.",
      explicacaoErradas:
        "“Discricionário e precário” descreve a autorização. “Enunciativo” não é o caso, pois há consentimento de acesso. “Contrato” exige acordo bilateral. “Depende de licitação” confunde acesso a serviço com contratação.",
      pegadinha: "Admissão aqui não é contratação de pessoal.",
      conhecimento:
        "Internação em hospital público e ingresso em biblioteca pública são exemplos clássicos.",
    },
    {
      topico: "Parecer",
      subassunto: "Espécies de parecer",
      dificuldade: 5,
      raciocinio: "Separe três graus: pedir é opcional, pedir é obrigatório, seguir é obrigatório.",
      enunciado:
        "A lei manda a autoridade pedir um parecer e, ainda, proíbe que ela decida contra as conclusões dele. Segundo o entendimento do STF no MS 24.631, esse parecer é",
      alternativas: [
        "vinculante, e quem o emite partilha o poder de decisão",
        "facultativo, porque a autoridade sempre fica livre para ignorar o que foi opinado",
        "obrigatório, e seu autor nunca responde por nada, mesmo com erro grosseiro ou com dolo",
        "enunciativo puro, sem nenhum efeito, porque parecer não pode influir na decisão",
        "ordinatório, pois é uma ordem de serviço que vem de um superior hierárquico à autoridade",
      ],
      correta: 0,
      explicacao:
        "No parecer vinculante, a lei impõe seguir a conclusão. O STF entendeu que, nesse caso, há partilha do poder de decisão, com possível responsabilidade do parecerista.",
      explicacaoErradas:
        "“Facultativo” é o parecer que nem precisa ser pedido. “Nunca responde” exagera: há responsabilidade por erro grosseiro ou dolo. “Sem nenhum efeito” ignora a vinculação legal. “Ordinatório” trata o parecerista como superior, o que ele não é.",
      pegadinha: "No parecer obrigatório, pedir é dever, mas seguir não é.",
      conhecimento:
        "No parecer obrigatório, a autoridade pode decidir de outro modo, desde que motive.",
    },
    {
      topico: "Extinção",
      subassunto: "Contraposição e renúncia",
      dificuldade: 5,
      raciocinio: "Quem extingue e por qual caminho: novo ato oposto, vontade do beneficiário ou lei nova.",
      enunciado:
        "Um servidor é exonerado do cargo no qual havia sido nomeado. Em outro caso, o titular de uma autorização abre mão dela por interesse próprio. As formas de extinção são, respectivamente,",
      alternativas: [
        "cassação e revogação",
        "caducidade e anulação, porque a lei nova retirou o ato e a Administração o declarou nulo",
        "contraposição e renúncia",
        "revogação e cassação, porque a Administração desfez o ato por vontade própria nos dois casos",
        "anulação e contraposição, porque em ambos os casos houve vício a ser corrigido pelo novo ato",
      ],
      correta: 2,
      explicacao:
        "Na contraposição, ou derrubada, um ato com efeito oposto extingue o anterior. Na renúncia, o beneficiário abre mão de uma situação favorável.",
      explicacaoErradas:
        "“Cassação” pressupõe descumprimento de condições. “Caducidade” vem de norma nova incompatível. “Revogação” é retirada por conveniência. “Anulação” pressupõe vício, e não há vício nos casos narrados.",
      pegadinha: "Cassação pune o descumprimento; caducidade vem de lei nova; contraposição vem de ato oposto.",
      conhecimento:
        "Além disso, o ato se extingue de modo natural, ao cumprir seus efeitos, ou pelo fim do objeto ou do sujeito.",
    },
    {
      topico: "Revogação",
      subassunto: "Atos não revogáveis",
      dificuldade: 4,
      raciocinio: "Revogar é tirar por conveniência, e a certidão só registra um fato.",
      enunciado:
        "Uma repartição emitiu certidão verdadeira sobre o tempo de serviço de um servidor. Meses depois, a chefia quer revogá-la porque considera inconveniente a existência desse documento. Essa revogação",
      alternativas: [
        "é possível a qualquer tempo, porque certidões são atos discricionários por natureza",
        "é possível dentro do prazo de cinco anos da emissão, se houver parecer jurídico favorável",
        "é possível, desde que a repartição indenize o servidor pelos prejuízos que ele sofreu",
        "só é possível depois de autorização expressa do Tribunal de Contas",
        "não é possível, pois ato enunciativo não se revoga",
      ],
      correta: 4,
      explicacao:
        "Certidões e atestados só declaram fatos, sem conveniência a ser avaliada. Além deles, não se revogam atos vinculados, consumados ou que geraram direito adquirido.",
      explicacaoErradas:
        "“Discricionários por natureza” erra a natureza da certidão. “Cinco anos” lembra a decadência da anulação (Lei 9.784, art. 54), que é outra coisa. “Indenize o servidor” e “autorização expressa do Tribunal de Contas” criam condições sem base.",
      pegadinha: "Se a certidão for falsa, o caminho é anular, não revogar.",
      conhecimento:
        "A revogação tem efeitos prospectivos, ou seja, para o futuro.",
    },
    {
      topico: "Anulação",
      subassunto: "Contraditório antes do desfazimento",
      dificuldade: 5,
      raciocinio: "Se já houve efeito concreto, primeiro processo, depois desfazimento.",
      enunciado:
        "A Administração descobre erro em ato que concedeu vantagem a um servidor há dois anos e corta o pagamento no mês seguinte, avisando apenas que cabe recurso. Pelo entendimento do STF em repercussão geral, esse procedimento é",
      alternativas: [
        "correto, porque ato ilegal não gera direitos e dispensa qualquer outra providência",
        "correto, porque a possibilidade de recurso equivale ao contraditório prévio",
        "incorreto, pois o desfazimento exige processo prévio com contraditório",
        "incorreto, porque a anulação só pode ser feita pelo Poder Judiciário",
        "correto, se o valor recebido não ultrapassar a remuneração do servidor",
      ],
      correta: 2,
      explicacao:
        "No RE 594.296, o STF fixou que, se já decorreram efeitos concretos, o desfazimento deve ser precedido de regular processo administrativo. A simples chance de recorrer depois não satisfaz o direito de defesa.",
      explicacaoErradas:
        "“Dispensa qualquer outra providência” esquece o contraditório. “Equivale ao contraditório prévio” repete a tese rejeitada. “Só pelo Poder Judiciário” nega a autotutela. “Não ultrapassar a remuneração” traz critério sem relação com a matéria.",
      pegadinha: "A Súmula 473 do STF deve ser lida junto com o devido processo legal.",
      conhecimento:
        "O art. 50, VIII, da Lei 9.784 exige motivação em atos que anulem, revoguem, suspendam ou convalidem outro ato.",
    },
  ],
};
