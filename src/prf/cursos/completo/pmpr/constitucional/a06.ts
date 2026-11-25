import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-a06",
  resumo: {
    ideia:
      "O Poder Judiciário (arts. 92 a 126 da CF) tem como função típica julgar, aplicando a lei ao caso concreto. A aula mostra os órgãos, as garantias e vedações dos juízes, o quinto constitucional, os precatórios, a composição e a competência dos tribunais e a Justiça Militar estadual, que julga os policiais militares.",
    itens: [
      {
        termo: "Funções",
        faz: "Típica: julgar (jurisdição). Atípicas: administrar seus órgãos e pessoal e legislar ao elaborar os regimentos internos dos tribunais (art. 96, I).",
      },
      {
        termo: "Órgãos (art. 92)",
        faz: "STF, CNJ, STJ, TST, TRFs e juízes federais, tribunais e juízes do Trabalho, Eleitorais, Militares e dos Estados e do DF. STF, CNJ e Tribunais Superiores têm sede na Capital Federal; o STF e os Tribunais Superiores têm jurisdição em todo o país.",
        pista: "O CNJ integra o Judiciário, mas não exerce jurisdição: é órgão administrativo.",
      },
      {
        termo: "Ingresso na magistratura",
        faz: "Cargo inicial de juiz substituto, por concurso de provas e títulos, com a OAB em todas as fases, exigidos do bacharel em Direito, no mínimo, três anos de atividade jurídica (art. 93, I).",
      },
      {
        termo: "Garantias (art. 95)",
        faz: "Vitaliciedade: no primeiro grau, após dois anos de exercício; antes disso, a perda do cargo depende do tribunal; depois, de sentença transitada em julgado. Inamovibilidade, salvo interesse público. Irredutibilidade do subsídio.",
        pista: "Quem entra direto no tribunal, pelo quinto, é vitalício desde a posse.",
      },
      {
        termo: "Vedações (art. 95, parágrafo único)",
        faz: "O juiz não pode exercer outro cargo ou função, salvo uma de magistério; receber custas ou participação em processo; dedicar-se a atividade político-partidária; receber auxílios de pessoas ou entidades; nem advogar no juízo ou tribunal de que se afastou antes de três anos.",
      },
      {
        termo: "Regras do art. 93",
        faz: "Julgamentos públicos e decisões fundamentadas, sob pena de nulidade. Atividade jurisdicional ininterrupta, com plantão e sem férias coletivas nos juízos e tribunais de segundo grau. Remoção ou disponibilidade por interesse público: maioria absoluta do tribunal ou do CNJ, com ampla defesa.",
      },
      {
        termo: "Quinto constitucional (art. 94)",
        faz: "Um quinto das vagas dos TRFs, dos TJs e do TJDFT vai para membros do MP com mais de dez anos de carreira e advogados com mais de dez anos de atividade, notório saber e reputação ilibada. A classe indica lista sêxtupla, o tribunal forma lista tríplice e o Executivo escolhe em 20 dias.",
        pista: "TJ: escolhe o Governador. TRF e TJDFT: o Presidente da República. O STJ não segue o quinto: usa um terço.",
      },
      {
        termo: "Precatórios (art. 100)",
        faz: "Dívidas da Fazenda por sentença transitada em julgado são pagas em ordem cronológica, sem indicar casos ou pessoas no orçamento. Os créditos alimentícios têm preferência. Entre eles, os de titulares com 60 anos, doença grave ou deficiência vêm primeiro, até o triplo do pequeno valor.",
        pista: "Idade só dá preferência se o crédito for alimentício.",
      },
      {
        termo: "STF",
        faz: "Onze Ministros, brasileiros natos, com mais de 35 e menos de 70 anos, notável saber jurídico e reputação ilibada, nomeados pelo Presidente da República após aprovação por maioria absoluta do Senado (art. 101). Guarda da Constituição: julga ADI e ADC e, nas infrações penais comuns, o Presidente, o Vice, os membros do Congresso, seus Ministros e o PGR.",
      },
      {
        termo: "Súmula vinculante (art. 103-A)",
        faz: "Aprovada pelo STF, de ofício ou por provocação, por dois terços dos membros, após reiteradas decisões sobre matéria constitucional, quando há controvérsia atual que gere grave insegurança jurídica e muitos processos iguais. Vincula os demais órgãos do Judiciário e a administração pública de todas as esferas.",
        pista: "Contra ato que a contraria, cabe reclamação ao STF. O Legislativo, ao fazer leis, não fica vinculado.",
      },
      {
        termo: "CNJ (art. 103-B)",
        faz: "Quinze membros, mandato de dois anos, admitida uma recondução, presidido pelo Presidente do STF; o Ministro do STJ é o Corregedor. Controla a atuação administrativa e financeira do Judiciário e o cumprimento dos deveres dos juízes. Não exerce jurisdição e não tem poder sobre o STF.",
      },
      {
        termo: "STJ (arts. 104 e 105)",
        faz: "No mínimo 33 Ministros (brasileiros, natos ou naturalizados): um terço de juízes dos TRFs, um terço de desembargadores dos TJs e um terço, em partes iguais, de advogados e membros do MP. Julga, nos crimes comuns, os Governadores e, nos comuns e de responsabilidade, os desembargadores.",
      },
      {
        termo: "Justiça Federal (arts. 108 e 109)",
        faz: "Os juízes federais julgam causas da União, autarquias e empresas públicas federais (salvo falência, acidente de trabalho, eleitoral e trabalhista), crimes políticos, infrações contra bens, serviços ou interesse da União, crimes a bordo de navios ou aeronaves e disputas sobre direitos indígenas.",
        pista: "Contravenção penal, mesmo contra a União, é da justiça estadual.",
      },
      {
        termo: "Justiça do Trabalho e Eleitoral",
        faz: "TST com 27 Ministros. A Justiça do Trabalho julga ações da relação de trabalho, mas não tem competência penal. O TSE tem no mínimo sete membros: três do STF, dois do STJ e dois advogados nomeados pelo Presidente. Há um TRE em cada Estado e no DF.",
      },
      {
        termo: "Justiça Militar da União",
        faz: "O STM tem 15 Ministros vitalícios: dez oficiais-generais (três da Marinha, quatro do Exército e três da Aeronáutica) e cinco civis. Julga os crimes militares definidos em lei (art. 124).",
      },
      {
        termo: "Justiça Militar estadual (art. 125, §§ 3º a 5º)",
        faz: "Criada por lei estadual, por proposta do TJ: no primeiro grau, juízes de direito e Conselhos de Justiça; no segundo, o TJ ou um Tribunal de Justiça Militar onde o efetivo militar passar de 20 mil. Julga os militares dos Estados nos crimes militares e as ações contra atos disciplinares, ressalvada a competência do júri quando a vítima for civil.",
        pista: "O juiz de direito julga sozinho crimes militares contra civis e ações contra atos disciplinares; o Conselho de Justiça, os demais crimes militares.",
      },
    ],
  },
  questoes: [
    {
      topico: "Justiça Militar estadual",
      subassunto: "Art. 125, § 4º",
      dificuldade: 4,
      raciocinio: "A Justiça Militar estadual julga os crimes militares, mas a CF ressalva o júri quando a vítima é civil. Homicídio doloso contra civil vai ao júri.",
      enunciado:
        "Um policial militar, em serviço, comete homicídio doloso contra um civil. Segundo a Constituição Federal, o crime será julgado",
      alternativas: [
        "pelo Conselho de Justiça, sob a presidência do juiz de direito do juízo militar.",
        "pelo juiz de direito do juízo militar, sozinho, por ser crime militar contra civil.",
        "pelo Superior Tribunal Militar, por envolver militar em serviço e uso de arma.",
        "pelo Tribunal do Júri, ressalvado pela Constituição quando a vítima é civil.",
        "pela Justiça Federal, por se tratar de crime cometido por agente de segurança.",
      ],
      correta: 3,
      explicacao:
        "O art. 125, § 4º, dá à Justiça Militar estadual os crimes militares dos militares dos Estados, \"ressalvada a competência do júri quando a vítima for civil\". Assim, o homicídio doloso contra civil vai ao Tribunal do Júri.",
      explicacaoErradas:
        "O Conselho de Justiça julga os crimes militares que não sejam contra civis. O juiz de direito, sozinho, julga crimes militares contra civis, mas não os dolosos contra a vida, que são do júri. O STM é da Justiça Militar da União, e a Justiça Federal não julga esse caso.",
      pegadinha: "\"Crime militar contra civil\" vai ao juiz de direito, salvo o crime doloso contra a vida, que vai ao júri.",
      conhecimento: "A Justiça Militar estadual só julga militares dos Estados; civis não são julgados por ela.",
    },
    {
      topico: "Justiça Militar estadual",
      subassunto: "Art. 125, §§ 3º e 5º",
      dificuldade: 5,
      raciocinio: "Juiz de direito sozinho: crimes militares contra civis e ações contra atos disciplinares. Conselho: os demais. TJM só com efetivo acima de 20 mil.",
      enunciado:
        "Marque V (verdadeiro) ou F (falso) sobre a Justiça Militar estadual.\n( ) Os crimes militares cometidos contra civis são julgados, singularmente, pelos juízes de direito do juízo militar.\n( ) Cabe ao Conselho de Justiça, sob a presidência de juiz de direito, julgar os demais crimes militares.\n( ) Pode haver Tribunal de Justiça Militar nos Estados em que o efetivo militar seja superior a vinte mil integrantes.\n( ) As ações judiciais contra atos disciplinares militares são julgadas pela justiça comum cível, e não pela militar.\nA sequência correta, de cima para baixo, é",
      alternativas: [
        "V, V, V, F.",
        "V, F, V, F.",
        "F, V, V, F.",
        "V, V, F, V.",
        "F, V, F, V.",
      ],
      correta: 0,
      explicacao:
        "Os três primeiros itens estão no art. 125: os dois primeiros, no § 5º; o terceiro, no § 3º. Onde o efetivo não passa de 20 mil, o segundo grau é o próprio Tribunal de Justiça.",
      explicacaoErradas:
        "O último item é falso: o § 4º dá à Justiça Militar estadual as ações judiciais contra atos disciplinares militares, julgadas pelo juiz de direito, sozinho (§ 5º).",
      pegadinha: "Punição disciplinar de policial militar é discutida na Justiça Militar estadual, não na vara cível.",
      conhecimento: "Cabe ao tribunal competente decidir sobre a perda do posto e da patente dos oficiais e da graduação das praças.",
    },
    {
      topico: "Garantias e vedações",
      subassunto: "Art. 95",
      dificuldade: 4,
      raciocinio: "Vitaliciedade no 1º grau: dois anos. Uma função de magistério é permitida. Quarentena de saída: três anos. Remoção por interesse público: maioria absoluta.",
      enunciado:
        "Analise as afirmativas sobre os juízes.\nI. No primeiro grau, a vitaliciedade só é adquirida após dois anos de exercício.\nII. O juiz pode exercer, além do cargo, uma função de magistério.\nIII. O juiz aposentado pode advogar, logo após a aposentadoria, no tribunal do qual se afastou.\nIV. A remoção do juiz por interesse público depende do voto da maioria absoluta do tribunal ou do CNJ, assegurada ampla defesa.\nEstão corretas as afirmativas",
      alternativas: [
        "I e III, apenas.",
        "I, II e IV, apenas.",
        "II e III, apenas.",
        "II, III e IV, apenas.",
        "I e IV, apenas.",
      ],
      correta: 1,
      explicacao:
        "A afirmativa I está no art. 95, I; a II, no parágrafo único, I, do mesmo artigo; a IV, no art. 93, VIII. A inamovibilidade cede ao interesse público só por essa decisão qualificada.",
      explicacaoErradas:
        "A afirmativa III está errada: é vedado advogar no juízo ou tribunal do qual se afastou antes de decorridos três anos do afastamento por aposentadoria ou exoneração.",
      pegadinha: "A \"quarentena de saída\" é de três anos e só vale para o juízo ou tribunal de onde o juiz saiu.",
      conhecimento: "Durante os dois primeiros anos, a perda do cargo depende de deliberação do tribunal; depois, de sentença transitada em julgado.",
    },
    {
      topico: "Quinto constitucional",
      subassunto: "Art. 94",
      dificuldade: 4,
      raciocinio: "Lista sêxtupla da classe, lista tríplice do tribunal, escolha do Executivo. No TJ, o Governador. Dez anos de carreira ou de atividade.",
      enunciado:
        "Abriu-se uma vaga do quinto constitucional, destinada à advocacia, no Tribunal de Justiça de um Estado. Segundo a Constituição Federal,",
      alternativas: [
        "o tribunal escolhe diretamente um nome da lista sêxtupla enviada pela OAB, sem participação do Executivo.",
        "o Presidente da República escolhe o novo desembargador a partir da lista tríplice formada pelo tribunal.",
        "a Assembleia Legislativa deve aprovar, por maioria absoluta, o nome escolhido pelo Governador.",
        "o advogado indicado precisa ter mais de cinco anos de atividade profissional e notório saber jurídico.",
        "a OAB indica lista sêxtupla, o tribunal forma lista tríplice e o Governador escolhe um dos nomes.",
      ],
      correta: 4,
      explicacao:
        "O art. 94 prevê que os órgãos de representação da classe indicam lista sêxtupla; o tribunal forma lista tríplice e a envia ao Poder Executivo, que escolhe um dos integrantes nos vinte dias seguintes. No TJ, o Executivo é o Governador.",
      explicacaoErradas:
        "O tribunal não escolhe sozinho: ele reduz a lista para três nomes. O Presidente da República escolhe nos TRFs e no TJDFT, não no TJ. A CF não exige aprovação da Assembleia. O advogado precisa de mais de dez anos de atividade.",
      pegadinha: "Seis nomes da OAB, três do tribunal, um do Governador.",
      conhecimento: "O nomeado pelo quinto adquire vitaliciedade na posse, sem estágio de dois anos.",
    },
    {
      topico: "Composição dos tribunais",
      subassunto: "STF, STJ, TST e CNJ",
      dificuldade: 4,
      raciocinio: "STF 11; STJ no mínimo 33; TST 27; CNJ 15.",
      enunciado:
        "Associe cada órgão ao número de membros previsto na Constituição Federal.\n1. Onze Ministros\n2. No mínimo 33 Ministros\n3. Vinte e sete Ministros\n4. Quinze membros\n( ) Superior Tribunal de Justiça\n( ) Conselho Nacional de Justiça\n( ) Supremo Tribunal Federal\n( ) Tribunal Superior do Trabalho\nA sequência correta, de cima para baixo, é",
      alternativas: [
        "2, 1, 4, 3.",
        "3, 4, 1, 2.",
        "2, 4, 1, 3.",
        "2, 3, 1, 4.",
        "4, 2, 1, 3.",
      ],
      correta: 2,
      explicacao:
        "O STJ tem no mínimo 33 Ministros (art. 104). O CNJ, 15 membros (art. 103-B). O STF, onze Ministros (art. 101). O TST, 27 Ministros (art. 111-A).",
      explicacaoErradas:
        "As outras sequências trocam o CNJ com o TST ou o STF com o CNJ. Só o STJ tem um número mínimo, que pode crescer por lei.",
      pegadinha: "O STM também tem 15 membros, como o CNJ.",
      conhecimento: "O TSE tem no mínimo sete membros: três do STF, dois do STJ e dois advogados.",
    },
    {
      topico: "STF",
      subassunto: "Art. 101",
      dificuldade: 4,
      raciocinio: "Ministro do STF é cargo de brasileiro nato. Idade: mais de 35 e menos de 70 (EC 122/2022). Aprovação: maioria absoluta do Senado.",
      enunciado: "Sobre a nomeação dos Ministros do STF, segundo a Constituição Federal, é correto afirmar que",
      alternativas: [
        "são escolhidos entre brasileiros natos, com mais de 35 e menos de 70 anos, aprovados pela maioria absoluta do Senado.",
        "são escolhidos entre brasileiros natos ou naturalizados, com mais de 35 anos, desde que sejam juízes de carreira.",
        "são escolhidos entre brasileiros natos, com mais de 35 e menos de 65 anos, e aprovados pela maioria simples do Senado.",
        "são indicados pelo próprio STF, em lista tríplice, e nomeados pelo Presidente após aprovação do Congresso Nacional.",
        "são escolhidos entre brasileiros natos, com mais de 30 anos, e aprovados por três quintos da Câmara dos Deputados.",
      ],
      correta: 0,
      explicacao:
        "O art. 101, com a redação da EC 122/2022, exige mais de 35 e menos de 70 anos, notável saber jurídico e reputação ilibada. A nomeação é do Presidente, após aprovação pela maioria absoluta do Senado (parágrafo único). O cargo é privativo de brasileiro nato (art. 12, § 3º, IV).",
      explicacaoErradas:
        "Naturalizado não pode ser Ministro do STF, e a CF não exige que seja juiz de carreira. O limite de idade passou de 65 para 70 anos com a EC 122/2022. Não há lista tríplice do STF, e quem aprova é o Senado, por maioria absoluta.",
      pegadinha: "O limite de 65 anos é a redação antiga; hoje é menos de 70.",
      conhecimento: "No STJ, os Ministros podem ser natos ou naturalizados; no STF, só natos.",
    },
    {
      topico: "Súmula vinculante",
      subassunto: "Art. 103-A",
      dificuldade: 5,
      raciocinio: "Dois terços; vincula Judiciário e administração, não o Legislativo na função de legislar; contra o descumprimento, reclamação.",
      enunciado: "Sobre a súmula vinculante, segundo a Constituição Federal, é correto afirmar que",
      alternativas: [
        "é aprovada pela maioria absoluta dos membros do STF, após uma decisão em controle concentrado.",
        "vincula o Judiciário e a administração pública, mas não o Legislativo ao exercer a função de legislar.",
        "só pode ser editada por provocação dos legitimados, nunca de ofício pelo próprio STF.",
        "contra o ato administrativo que a contrariar, cabe mandado de segurança ao Superior Tribunal de Justiça.",
        "vincula todos os Poderes, inclusive o Legislativo, que fica impedido de aprovar lei em sentido contrário.",
      ],
      correta: 1,
      explicacao:
        "O art. 103-A diz que a súmula tem efeito vinculante para os demais órgãos do Judiciário e para a administração pública direta e indireta, federal, estadual e municipal. O Legislativo não aparece: pode aprovar lei nova sobre o tema.",
      explicacaoErradas:
        "A aprovação exige dois terços dos membros e reiteradas decisões. O STF pode agir de ofício ou por provocação. Contra ato que contrarie a súmula cabe reclamação ao STF (§ 3º). O Legislativo, na função de legislar, não fica vinculado.",
      pegadinha: "Vincula a administração do Legislativo, mas não a sua função de fazer leis.",
      conhecimento: "Dois terços do STF são oito dos onze Ministros.",
    },
    {
      topico: "Justiça Federal",
      subassunto: "Art. 109",
      dificuldade: 5,
      raciocinio: "O inciso IV exclui as contravenções: mesmo contra a União, vão para a justiça estadual (Súmula 38 do STJ).",
      enunciado: "Segundo a Constituição Federal e a jurisprudência do STJ, NÃO compete aos juízes federais julgar",
      alternativas: [
        "os crimes políticos.",
        "o crime cometido a bordo de aeronave, ressalvada a competência da Justiça Militar.",
        "a disputa sobre direitos indígenas.",
        "o crime de furto de bens de uma empresa pública federal.",
        "a contravenção penal praticada contra bens, serviços ou interesse da União.",
      ],
      correta: 4,
      explicacao:
        "O art. 109, IV, dá aos juízes federais as infrações contra bens, serviços ou interesse da União, \"excluídas as contravenções\". A Súmula 38 do STJ confirma: a contravenção, mesmo nesses casos, é julgada pela justiça estadual.",
      explicacaoErradas:
        "Crimes políticos estão no inciso IV; crimes a bordo de navios ou aeronaves, no IX; disputas sobre direitos indígenas, no XI. Furto de bens de empresa pública federal atinge bem de entidade federal, e por isso é da Justiça Federal.",
      pegadinha: "Crime contra a União vai à Justiça Federal; contravenção contra a União, não.",
      conhecimento: "Sociedade de economia mista federal, como o Banco do Brasil, não está no art. 109: crimes contra ela são da justiça estadual.",
    },
    {
      topico: "CNJ",
      subassunto: "Art. 103-B",
      dificuldade: 4,
      raciocinio: "15 membros, dois anos, uma recondução, presidido pelo Presidente do STF. Órgão do Judiciário sem jurisdição. Não controla o STF.",
      enunciado:
        "Marque V (verdadeiro) ou F (falso) sobre o Conselho Nacional de Justiça.\n( ) Compõe-se de quinze membros, com mandato de dois anos, admitida uma recondução.\n( ) É órgão do Poder Judiciário e exerce jurisdição em todo o território nacional.\n( ) É presidido pelo Presidente do Supremo Tribunal Federal.\n( ) Pode rever atos administrativos de membros ou órgãos do Judiciário, mas, segundo o STF, não tem competência sobre o próprio STF.\nA sequência correta, de cima para baixo, é",
      alternativas: [
        "V, V, V, F.",
        "F, F, V, V.",
        "V, F, F, V.",
        "V, F, V, V.",
        "V, V, F, V.",
      ],
      correta: 3,
      explicacao:
        "O primeiro item repete o caput do art. 103-B e o terceiro, o § 1º. O § 4º, II, permite ao CNJ apreciar a legalidade de atos administrativos do Judiciário. O STF decidiu que o CNJ não tem competência sobre o próprio Supremo.",
      explicacaoErradas:
        "O segundo item é falso: o CNJ está no art. 92 como órgão do Judiciário, mas é administrativo e não exerce jurisdição.",
      pegadinha: "Ter sede na Capital Federal não significa ter jurisdição: o CNJ não julga processos.",
      conhecimento: "Os membros do CNJ, salvo o Presidente do STF, são nomeados pelo Presidente da República após aprovação pela maioria absoluta do Senado.",
    },
    {
      topico: "Precatórios",
      subassunto: "Art. 100, §§ 1º e 2º",
      dificuldade: 5,
      raciocinio: "Primeiro: alimentícios de quem tem 60 anos, doença grave ou deficiência, até o triplo do pequeno valor. Depois: os demais alimentícios. Por fim: os comuns, em ordem cronológica.",
      enunciado:
        "Três credores têm precatórios contra o mesmo Estado. Ana, de 65 anos, tem crédito alimentício. Bruno, de 40 anos, também tem crédito alimentício. Carla, de 70 anos, tem crédito de desapropriação, que não é alimentício. Segundo a Constituição Federal, a ordem de preferência é",
      alternativas: [
        "Carla, por ser a mais velha; depois Ana; por fim Bruno.",
        "Ana e Carla juntas, por terem mais de 60 anos; depois Bruno.",
        "Ana, até o triplo do pequeno valor; depois Bruno; por fim Carla.",
        "a ordem cronológica de apresentação, sem preferência para nenhum deles.",
        "Bruno e Ana juntos, por serem alimentícios; depois Carla, se houver verba.",
      ],
      correta: 2,
      explicacao:
        "O § 2º do art. 100 dá a primeira preferência aos créditos alimentícios de titulares com 60 anos, até o triplo do pequeno valor. O § 1º põe os demais créditos alimentícios à frente dos comuns. Carla fica na ordem cronológica dos créditos comuns.",
      explicacaoErradas:
        "A idade de Carla não dá preferência, porque o crédito dela não é alimentício. A ordem cronológica vale dentro de cada grupo. Entre os alimentícios, Ana passa à frente de Bruno pela idade.",
      pegadinha: "A preferência por idade só existe dentro dos créditos alimentícios.",
      conhecimento: "O que passar do triplo do pequeno valor é pago na ordem cronológica de apresentação do precatório.",
    },
  ],
};
