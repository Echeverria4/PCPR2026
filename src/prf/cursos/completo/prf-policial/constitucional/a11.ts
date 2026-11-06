import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-11",
  resumo: {
    ideia:
      "Em crises graves, a CF permite regimes de exceção com prazo, limite e controle. Fora disso, a defesa do país cabe às Forças Armadas e a segurança pública cabe aos órgãos do art. 144.",
    itens: [
      {
        termo: "Estado de defesa",
        faz: "Decretado pelo Presidente, em locais restritos, por grave instabilidade ou calamidade. Até 30 dias, com uma prorrogação igual.",
        pista: "O Congresso aprova depois, por maioria absoluta, com o ato enviado em 24 horas.",
      },
      {
        termo: "Prisão na defesa",
        faz: "O executor prende por crime contra o Estado e comunica logo ao juiz. Limite de 10 dias, salvo ordem judicial. Nunca incomunicável.",
      },
      {
        termo: "Estado de sítio",
        faz: "Mais grave: o Congresso autoriza antes, por maioria absoluta.",
        pista: "Comoção nacional ou defesa ineficaz: até 30 dias por vez. Guerra: enquanto ela durar.",
      },
      {
        termo: "Medidas do sítio",
        faz: "No sítio por comoção, só as do art. 139, como busca em domicílio e requisição de bens.",
      },
      {
        termo: "Parlamentares",
        faz: "No sítio, as imunidades continuam. Só caem por 2/3 da Casa, por atos fora do Congresso incompatíveis com a medida.",
      },
      {
        termo: "Controle",
        faz: "Comissão de cinco membros acompanha a execução. Depois, o Presidente relata as medidas. O juiz olha a legalidade.",
      },
      {
        termo: "Forças Armadas",
        faz: "Marinha, Exército e Aeronáutica, sob autoridade do Presidente. Defendem a Pátria, os poderes e, por iniciativa de qualquer deles, a lei e a ordem.",
        pista: "O STF nega que sejam poder moderador.",
      },
      {
        termo: "Militares",
        faz: "Sem greve, sem sindicato, e sem filiação partidária na ativa. Habeas corpus cabe só sobre a legalidade da punição.",
      },
      {
        termo: "Órgãos federais",
        faz: "PF: polícia judiciária da União. PRF: patrulhamento ostensivo das rodovias federais. Polícia ferroviária: das ferrovias.",
      },
      {
        termo: "Órgãos estaduais",
        faz: "Polícia civil investiga, polícia militar faz o ostensivo, bombeiros cuidam da defesa civil, polícia penal guarda os presídios.",
        pista: "No DF, a União organiza e mantém.",
      },
      {
        termo: "Guardas municipais",
        faz: "Protegem bens, serviços e instalações do Município. O STF admite ações de segurança urbana, mas nunca investigação.",
      },
    ],
    cuidado:
      "A CF não pode ser emendada na vigência do estado de defesa ou de sítio.",
  },
  questoes: [
    {
      topico: "Estados de exceção",
      subassunto: "Estado de defesa",
      dificuldade: 4,
      raciocinio:
        "Local determinado e calamidade apontam para um regime.",
      enunciado:
        "Uma calamidade de grandes proporções atingiu uma região e ameaça a ordem pública ali. Para adotar a medida adequada, o Presidente da República deve",
      alternativas: [
        "pedir antes ao Congresso autorização para decretar o estado de sítio",
        "decretar o estado de sítio e informar o Congresso em dez dias",
        "ouvir o Senado Federal e decretar a intervenção federal",
        "ouvir os Conselhos, decretar estado de defesa e remeter o ato ao Congresso",
        "decretar o estado de defesa só depois da aprovação do Congresso por dois terços",
      ],
      correta: 3,
      explicacao:
        "O art. 136 prevê estado de defesa em locais restritos, inclusive por calamidade na natureza, depois de ouvidos os Conselhos. Decretado, o ato vai em 24 horas ao Congresso, que decide por maioria absoluta (§ 4º).",
      explicacaoErradas:
        "“Estado de sítio” não é a resposta para uma crise local por calamidade. “Intervenção federal” recai sobre ente federado e não nasce de consulta ao Senado. “Só depois da aprovação” e “dois terços” trocam o momento e o quórum.",
      pegadinha:
        "Na defesa, o controle do Congresso vem depois do decreto. No sítio, vem antes.",
      conhecimento:
        "Se o Congresso rejeitar o decreto, o estado de defesa cessa de imediato (art. 136, § 7º).",
    },
    {
      topico: "Estados de exceção",
      subassunto: "Prazo do estado de defesa",
      dificuldade: 4,
      raciocinio:
        "Só existe uma prorrogação.",
      enunciado:
        "O estado de defesa durou 30 dias e foi prorrogado por mais 30. A crise continuou e as medidas se mostraram ineficazes. A saída prevista na CF é",
      alternativas: [
        "uma segunda prorrogação, por mais trinta dias, com aval do Congresso",
        "o pedido de autorização para decretar o estado de sítio",
        "um novo estado de defesa, com a inclusão de outra área",
        "o uso das Forças Armadas sem nenhuma autorização",
        "a prorrogação do estado de defesa até o fim da crise",
      ],
      correta: 1,
      explicacao:
        "O estado de defesa vai até trinta dias, com uma prorrogação (art. 136, § 2º). Se as medidas forem ineficazes, a CF prevê o estado de sítio (art. 137, I), que depende de autorização do Congresso.",
      explicacaoErradas:
        "“Segunda prorrogação” e “até o fim da crise” contrariam o § 2º. “Novo estado de defesa” contorna o limite. “Sem nenhuma autorização” não é saída prevista para esse caso.",
      pegadinha:
        "O sítio por comoção pode ser prorrogado várias vezes, sempre por até 30 dias. A defesa, só uma vez.",
      conhecimento:
        "O pedido de autorização vem com os motivos determinantes, e o Congresso decide por maioria absoluta.",
    },
    {
      topico: "Estados de exceção",
      subassunto: "Prisão no estado de defesa",
      dificuldade: 5,
      raciocinio:
        "Veja quem prende, a quem comunica e por quanto tempo.",
      enunciado:
        "No estado de defesa, o executor da medida prendeu uma pessoa por crime contra o Estado, sem ordem judicial, e comunicou o fato ao juiz. Sobre essa prisão,",
      alternativas: [
        "é nula, pois nenhuma prisão sem ordem judicial é admitida no estado de defesa",
        "pode durar todo o período do estado de defesa, se o juiz não a relaxar",
        "pode manter o preso incomunicável por dez dias, por razões de segurança",
        "cabe ao Ministério Público relaxá-la, e não ao juiz, enquanto durar a medida",
        "é válida, e só passa de dez dias com autorização do Poder Judiciário",
      ],
      correta: 4,
      explicacao:
        "O art. 136, § 3º, permite a prisão determinada pelo executor, com comunicação imediata ao juiz, que a relaxará se não for legal. A prisão não passa de dez dias, salvo autorização do Judiciário, e o preso não fica incomunicável.",
      explicacaoErradas:
        "“Nenhuma prisão sem ordem judicial” ignora o inciso I. “Todo o período” contraria o inciso III. “Incomunicável” é vedado pelo inciso IV. “Ministério Público” não é quem relaxa a prisão.",
      pegadinha:
        "A incomunicabilidade é vedada mesmo no estado de defesa.",
      conhecimento:
        "A comunicação ao juiz vem com declaração do estado físico e mental do detido.",
    },
    {
      topico: "Estados de exceção",
      subassunto: "Autorização do sítio",
      dificuldade: 5,
      raciocinio:
        "Compare o momento do controle nos dois regimes.",
      enunciado:
        "Uma comoção grave de repercussão nacional ocorreu durante o recesso parlamentar, e o Presidente, depois de ouvir os Conselhos, quer adotar o estado de sítio. Nesse caso,",
      alternativas: [
        "pede autorização, e o Congresso é convocado para reunir-se em cinco dias",
        "decreta o sítio de imediato, e o Congresso o aprecia ao voltar do recesso, em dez dias",
        "decreta o sítio de imediato, pois o recesso dispensa a autorização do Congresso",
        "pede autorização à Comissão Representativa, que decide por dois terços",
        "pede autorização ao Senado, que decide por maioria simples dos presentes",
      ],
      correta: 0,
      explicacao:
        "O sítio depende de autorização prévia do Congresso, por maioria absoluta (art. 137). Se pedida no recesso, o Presidente do Senado convoca o Congresso, de imediato, para se reunir em cinco dias (art. 138, § 2º).",
      explicacaoErradas:
        "“Decreta o sítio de imediato” descreve o caminho da defesa ou dispensa o controle prévio. “Comissão Representativa” e “Senado” trocam o órgão. “Dois terços” e “maioria simples” trocam o quórum.",
      pegadinha:
        "Mesmo com a autorização do Congresso, o Presidente não é obrigado a decretar.",
      conhecimento:
        "O Congresso permanece em funcionamento até o término das medidas coercitivas (art. 138, § 3º).",
    },
    {
      topico: "Estados de exceção",
      subassunto: "Medidas no estado de sítio",
      dificuldade: 5,
      raciocinio:
        "No sítio por comoção, o rol do art. 139 é o limite.",
      enunciado:
        "Durante estado de sítio decretado por comoção grave de repercussão nacional, o executor adotou medidas contra pessoas. Está de acordo com o art. 139 da CF",
      alternativas: [
        "a detenção de suspeitos no presídio comum de sua cidade",
        "a censura do discurso de parlamentar liberado pela Mesa da Casa",
        "a busca e apreensão em domicílio e a requisição de bens",
        "a aplicação da pena de morte aos autores de saques",
        "a proibição de qualquer pessoa sair do território nacional",
      ],
      correta: 2,
      explicacao:
        "O art. 139 lista as medidas contra as pessoas. Entre elas estão a busca e apreensão em domicílio (V) e a requisição de bens (VII).",
      explicacaoErradas:
        "“Presídio comum” contraria o inciso II: o edifício não pode ser destinado a acusados ou condenados por crimes comuns. “Discurso de parlamentar” liberado pela Mesa está fora das restrições. “Pena de morte” só cabe em guerra declarada. “Sair do território” não está no rol.",
      pegadinha:
        "No sítio por guerra, a CF não traz esse rol fechado.",
      conhecimento:
        "No sítio por comoção cabem restrições à liberdade de imprensa, na forma da lei (art. 139, III).",
    },
    {
      topico: "Estados de exceção",
      subassunto: "Imunidades no sítio",
      dificuldade: 5,
      raciocinio:
        "Regra e exceção do art. 53, § 8º.",
      enunciado:
        "No estado de sítio, um Senador praticou, em comício fora do Congresso, atos incompatíveis com a execução da medida. Sobre as imunidades dele,",
      alternativas: [
        "ficam suspensas de forma automática desde o decreto do estado de sítio",
        "só o STF pode suspendê-las, a pedido do Procurador-Geral",
        "não podem ser suspensas em nenhuma hipótese na vigência da medida",
        "podem ser suspensas por dois terços do Senado, por causa desses atos",
        "podem ser suspensas por maioria absoluta do Congresso Nacional",
      ],
      correta: 3,
      explicacao:
        "O art. 53, § 8º, mantém as imunidades no sítio. Elas só podem ser suspensas pelo voto de dois terços dos membros da Casa, por atos fora do recinto do Congresso que sejam incompatíveis com a medida.",
      explicacaoErradas:
        "“De forma automática” contraria a regra de que as imunidades subsistem. “Só o STF” troca o órgão. “Em nenhuma hipótese” esquece a exceção. “Maioria absoluta do Congresso” erra o quórum e o órgão.",
      pegadinha:
        "A exceção é só para atos fora do recinto do Congresso.",
      conhecimento:
        "O art. 53, § 8º, trata só do estado de sítio, e não do estado de defesa.",
    },
    {
      topico: "Estados de exceção",
      subassunto: "Controle das medidas",
      dificuldade: 5,
      raciocinio:
        "Terminar a medida não apaga o que foi feito de errado.",
      enunciado:
        "Terminado o estado de defesa, uma pessoa alegou que sofreu abuso de um agente durante a medida. Sobre o controle desses regimes,",
      alternativas: [
        "o agente responde pelo ilícito, mesmo depois do fim da medida",
        "a responsabilidade do agente termina com o fim da medida",
        "o Judiciário pode rever a conveniência política do decreto",
        "o relatório final do Presidente dispensa o nome dos atingidos",
        "o Judiciário não pode examinar atos praticados durante a medida",
      ],
      correta: 0,
      explicacao:
        "Cessada a medida, cessam seus efeitos, sem prejuízo da responsabilidade por ilícitos dos executores ou agentes (art. 141). O juiz pode examinar a legalidade dos atos, mas não a conveniência do decreto.",
      explicacaoErradas:
        "“Termina com o fim da medida” contraria o art. 141. “Conveniência política” é juízo do Presidente e do Congresso. “Dispensa o nome” contraria a relação nominal do parágrafo único. “Não pode examinar” afasta o controle de legalidade.",
      pegadinha:
        "O controle político tem três momentos: antes ou logo depois do decreto, durante e depois da medida.",
      conhecimento:
        "A Comissão do art. 140 tem cinco membros, designados pela Mesa do Congresso depois de ouvidos os líderes partidários.",
    },
    {
      topico: "Forças Armadas",
      subassunto: "Missão constitucional",
      dificuldade: 5,
      raciocinio:
        "Autoridade suprema não é o mesmo que poder acima dos Poderes.",
      enunciado:
        "Em uma crise entre o Executivo e o STF, um grupo sustentou que as Forças Armadas poderiam arbitrar o conflito com base no art. 142. Sobre o tema,",
      alternativas: [
        "o art. 142 dá às Forças Armadas o poder moderador entre os Poderes",
        "as Forças Armadas só agem na lei e na ordem por ordem do Congresso",
        "só o Presidente pode pedir o emprego na garantia da lei e da ordem",
        "as Forças Armadas podem decidir o conflito se dois Poderes concordarem",
        "o STF rejeita esse poder, e o emprego pode partir de qualquer Poder",
      ],
      correta: 4,
      explicacao:
        "Na ADI 6.457, o STF afastou a ideia de poder moderador das Forças Armadas. O art. 142 prevê a garantia dos poderes e, por iniciativa de qualquer destes, da lei e da ordem.",
      explicacaoErradas:
        "“Poder moderador” foi rejeitado pelo STF. “Por ordem do Congresso” e “só o Presidente” limitam a iniciativa, que é de qualquer Poder. “Se dois Poderes concordarem” cria regra sem base.",
      pegadinha:
        "O Presidente é a autoridade suprema das Forças Armadas, o que não as coloca acima dos Poderes.",
      conhecimento:
        "As normas gerais de organização, preparo e emprego das Forças Armadas vêm de lei complementar (art. 142, § 1º).",
    },
    {
      topico: "Forças Armadas",
      subassunto: "Punição disciplinar",
      dificuldade: 5,
      raciocinio:
        "Separe o mérito da punição da legalidade dela.",
      enunciado:
        "Um militar recebeu punição disciplinar de prisão e alega que a autoridade não tinha competência para aplicá-la. Ele quer impetrar habeas corpus. Segundo o STF,",
      alternativas: [
        "não cabe em nenhum caso, pois o art. 142, § 2º, é absoluto",
        "cabe para discutir a legalidade, mas não o mérito da punição",
        "cabe também para rediscutir o mérito da punição aplicada",
        "cabe só depois do esgotamento da via administrativa militar",
        "não cabe, e a via adequada é só o mandado de injunção",
      ],
      correta: 1,
      explicacao:
        "O art. 142, § 2º, veda habeas corpus quanto às punições disciplinares militares. O STF lê a regra como vedação ao exame do mérito. Pressupostos de legalidade, como a competência e a pena cabível, podem ser examinados.",
      explicacaoErradas:
        "“É absoluto” ignora a leitura do STF. “Rediscutir o mérito” é o que a CF proíbe. “Esgotamento da via administrativa” não é exigido. “Mandado de injunção” não protege a liberdade de locomoção.",
      pegadinha:
        "A vedação alcança o mérito, e não os pressupostos de legalidade.",
      conhecimento:
        "O art. 5º, LXI, admite prisão sem flagrante e sem ordem judicial nos casos de transgressão militar.",
    },
    {
      topico: "Forças Armadas",
      subassunto: "Regime dos militares",
      dificuldade: 5,
      raciocinio:
        "Pena maior que dois anos leva a um julgamento próprio.",
      enunciado:
        "Um oficial do Exército foi condenado na justiça comum, com trânsito em julgado, a três anos de prisão. Sobre o posto e a patente dele, a CF prevê que",
      alternativas: [
        "a perda é automática, como efeito da condenação na justiça comum",
        "a perda depende de ato do Presidente, que confere as patentes",
        "a perda exige decisão de tribunal militar de caráter permanente",
        "a perda só ocorre se o crime tiver relação com a atividade militar",
        "a perda não ocorre, pois a pena deveria passar de quatro anos",
      ],
      correta: 2,
      explicacao:
        "O oficial condenado a pena privativa de liberdade superior a dois anos, com trânsito em julgado, passa pelo julgamento do inciso VI: em tempo de paz, tribunal militar de caráter permanente (art. 142, § 3º, VI e VII).",
      explicacaoErradas:
        "“Automática” contraria o inciso VII. “Ato do Presidente” confunde conferir patente com perdê-la. “Relação com a atividade militar” não é exigida: vale a condenação na justiça comum ou militar. “Quatro anos” erra o limite.",
      pegadinha:
        "Em tempo de guerra, o julgamento é de tribunal especial.",
      conhecimento:
        "Ao militar são proibidas a sindicalização e a greve (art. 142, § 3º, IV).",
    },
    {
      topico: "Segurança pública",
      subassunto: "PRF e PF",
      dificuldade: 4,
      raciocinio:
        "Patrulhar é uma função. Investigar para a Justiça é outra.",
      enunciado:
        "Em patrulha numa rodovia federal, a PRF encontrou uma carga de contrabando. Sobre as funções ligadas a esse fato, segundo o art. 144 da CF,",
      alternativas: [
        "a PRF conduz o inquérito, pois o fato ocorreu em rodovia federal",
        "a PRF exerce a função de polícia judiciária da União nas rodovias",
        "a polícia civil investiga com exclusividade todo crime em rodovia",
        "a PRF faz o patrulhamento, e a PF é a polícia judiciária da União",
        "a PF faz o patrulhamento ostensivo das rodovias e das ferrovias federais",
      ],
      correta: 3,
      explicacao:
        "A PRF se destina, na forma da lei, ao patrulhamento ostensivo das rodovias federais (art. 144, § 2º). A PF exerce com exclusividade as funções de polícia judiciária da União e reprime o contrabando (§ 1º, II e IV).",
      explicacaoErradas:
        "“Conduz o inquérito” e “polícia judiciária da União nas rodovias” dão à PRF função que é da PF. “Polícia civil” não tem exclusividade e ressalva a competência da União. “Ferrovias federais” cabem à polícia ferroviária federal.",
      pegadinha:
        "A prevenção e a repressão do contrabando pela PF não excluem a ação de outros órgãos em suas áreas.",
      conhecimento:
        "A PRF é órgão permanente, organizado e mantido pela União e estruturado em carreira.",
    },
    {
      topico: "Segurança pública",
      subassunto: "Polícias estaduais e do DF",
      dificuldade: 5,
      raciocinio:
        "Quem subordina é uma pergunta. Quem organiza e mantém é outra.",
      enunciado:
        "A EC 104/2019 incluiu as polícias penais no art. 144. Sobre a polícia penal do Distrito Federal e as demais polícias locais, segundo a CF,",
      alternativas: [
        "a União a organiza e mantém, e ela se subordina ao Governador do DF",
        "o DF a organiza e mantém, e ela se subordina ao Presidente da República",
        "ela cuida da segurança dos presídios e da apuração de crimes comuns",
        "a União a organiza e mantém, e ela se subordina ao Ministro da Justiça",
        "ela integra as forças auxiliares e a reserva do Exército brasileiro",
      ],
      correta: 0,
      explicacao:
        "Cabe à União organizar e manter a polícia penal do DF (art. 21, XIV). O art. 144, § 6º, subordina as polícias penais estaduais e distrital aos Governadores.",
      explicacaoErradas:
        "“O DF a organiza” contraria o art. 21, XIV. “Presidente da República” e “Ministro da Justiça” erram a subordinação. “Apuração de crimes comuns” é da polícia civil. “Forças auxiliares” são as polícias militares e os bombeiros.",
      pegadinha:
        "A manutenção pela União não tira a subordinação ao Governador do DF.",
      conhecimento:
        "A polícia penal cuida da segurança dos estabelecimentos penais (art. 144, § 5º-A).",
    },
    {
      topico: "Segurança pública",
      subassunto: "Guardas e segurança viária",
      dificuldade: 5,
      raciocinio:
        "O STF ampliou a atuação das guardas, com um limite claro.",
      enunciado:
        "Uma lei municipal autorizou a guarda a fazer policiamento comunitário e a conduzir investigações criminais. Segundo o STF, essa lei é",
      alternativas: [
        "válida em tudo, pois as guardas integram a segurança pública",
        "válida no policiamento comunitário e inválida nas investigações",
        "inválida em tudo, pois as guardas só protegem bens municipais",
        "válida em tudo, se a guarda for dirigida por um delegado de polícia",
        "inválida no policiamento e válida nas investigações sobre o Município",
      ],
      correta: 1,
      explicacao:
        "O STF admite ações de segurança urbana pelas guardas, inclusive policiamento ostensivo e comunitário, respeitadas as atribuições dos órgãos do art. 144. Fica fora qualquer atividade de polícia judiciária.",
      explicacaoErradas:
        "“Válida em tudo” dá à guarda função de investigar. “Só protegem bens municipais” ignora a ADPF 995 e a tese de repercussão geral. “Delegado de polícia” não muda a conclusão. “Inválida no policiamento” inverte o resultado.",
      pegadinha:
        "A ampliação da atuação das guardas não vai até a investigação criminal.",
      conhecimento:
        "A segurança viária do art. 144, § 10, reúne educação, engenharia e fiscalização de trânsito.",
    },
  ],
};
