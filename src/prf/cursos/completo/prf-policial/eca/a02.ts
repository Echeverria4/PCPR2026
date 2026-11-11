import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "eca-02",
  resumo: {
    ideia:
      "A segunda parte do ECA trata de prevenir violações (diversões, produtos, hospedagem e viagens), organizar a política de atendimento, proteger quem está em risco e responder ao ato infracional. Criança que pratica ato infracional recebe medida de proteção; adolescente recebe medida socioeducativa, sempre com devido processo. O Conselho Tutelar é o órgão municipal que zela por esses direitos no dia a dia.",
    itens: [
      {
        termo: "Diversões e produtos",
        faz: "Menores de 10 anos só entram em espetáculos acompanhados dos pais ou responsável (art. 75). Publicações impróprias vão em embalagem lacrada. É proibido vender a criança ou adolescente armas, munições, explosivos, bebidas alcoólicas, produtos que causem dependência, fogos (salvo os de potencial mínimo), publicações impróprias e bilhetes lotéricos (art. 81).",
      },
      {
        termo: "Hospedagem",
        faz: "Proibida em hotel, motel, pensão ou similar, salvo se autorizada ou acompanhada pelos pais ou responsável (art. 82).",
      },
      {
        termo: "Viagem no Brasil (art. 83)",
        faz: "Menor de 16 anos não viaja para fora da comarca onde mora sem os pais ou responsável e sem autorização judicial. Dispensa: comarca contígua na mesma UF ou mesma região metropolitana; companhia de ascendente ou colateral maior até o 3º grau, com parentesco comprovado; companhia de pessoa maior autorizada expressamente pelo pai, pela mãe ou pelo responsável. O juiz pode dar autorização válida por 2 anos.",
        pista: "Tio é colateral de 3º grau; primo é de 4º grau e não entra.",
      },
      {
        termo: "Viagem ao exterior (arts. 84 e 85)",
        faz: "Vale para qualquer idade até 18 anos. Sem autorização judicial só com ambos os pais (ou responsável) ou com um deles, autorizado pelo outro em documento com firma reconhecida. Com estrangeiro residente no exterior: sempre autorização judicial.",
      },
      {
        termo: "Política de atendimento e entidades",
        faz: "Ações articuladas da União, dos estados, do DF e dos municípios, com municipalização do atendimento. Entidades inscrevem programas no Conselho Municipal dos Direitos (CMDCA), que reavalia a cada 2 anos; o registro vale no máximo 4 anos. O dirigente de acolhimento institucional é equiparado ao guardião. Entidade governamental pode ter dirigentes afastados; a não governamental pode perder verbas ou ter o registro cassado.",
      },
      {
        termo: "Medidas de proteção",
        faz: "Cabem quando o direito é ameaçado ou violado pela sociedade ou pelo Estado, pelos pais ou pela própria conduta da criança ou do adolescente (art. 98). Podem ser isoladas ou cumuladas e trocadas a qualquer tempo. Acolhimento institucional e familiar são provisórios, excepcionais e não privam de liberdade.",
      },
      {
        termo: "Ato infracional",
        faz: "Conduta descrita como crime ou contravenção. Menores de 18 anos são inimputáveis, e vale a idade na data do fato. Criança recebe só medidas de proteção (art. 105); adolescente, medidas socioeducativas e de proteção.",
      },
      {
        termo: "Apreensão do adolescente",
        faz: "Só em flagrante ou por ordem escrita e fundamentada do juiz. Ele tem direito de saber quem o apreendeu e de conhecer seus direitos. Apreensão e local são comunicados de imediato ao juiz e à família ou a quem ele indicar; examina-se logo a liberação. Internação antes da sentença: até 45 dias, com decisão fundamentada. Quem tem identidade civil não passa por identificação compulsória, salvo para confrontação, havendo dúvida fundada.",
      },
      {
        termo: "Medidas socioeducativas",
        faz: "Advertência (basta prova da materialidade e indícios suficientes de autoria); reparação do dano; prestação de serviços à comunidade (até 6 meses, 8 horas semanais, sem prejudicar escola ou trabalho); liberdade assistida (mínimo de 6 meses); semiliberdade (atividades externas sem depender do juiz); internação. Trabalho forçado nunca.",
      },
      {
        termo: "Internação",
        faz: "Breve, excepcional e respeitosa da condição de pessoa em desenvolvimento. Só cabe com violência ou grave ameaça à pessoa, reiteração de infrações graves ou descumprimento reiterado e injustificável de medida anterior (este último, até 3 meses). Sem prazo fixo, reavaliada no máximo a cada 6 meses; teto de 3 anos; liberação compulsória aos 21. Nunca há incomunicabilidade; só o juiz suspende visitas.",
        pista: "Ato análogo ao tráfico, por si só, não leva obrigatoriamente à internação (Súmula 492 do STJ).",
      },
      {
        termo: "Remissão",
        faz: "Antes do processo, o Ministério Público concede como exclusão do processo; depois de iniciado, o juiz concede, com suspensão ou extinção. Não implica reconhecer responsabilidade nem vale para antecedentes. Pode vir com medida, exceto semiliberdade e internação.",
      },
      {
        termo: "Medidas aos pais",
        faz: "Encaminhamentos, tratamento, cursos, advertência, perda da guarda, destituição da tutela e suspensão ou destituição do poder familiar (art. 129). Em maus-tratos, negligência, opressão ou abuso sexual, o juiz pode afastar o agressor da moradia comum como medida cautelar e fixar alimentos provisórios (art. 130).",
      },
      {
        termo: "Conselho Tutelar",
        faz: "Órgão permanente, autônomo e não jurisdicional; pelo menos um por município, com 5 membros escolhidos pela população para 4 anos, com recondução por novos processos. Requisitos: idoneidade moral, mais de 21 anos e residir no município. Escolha unificada no primeiro domingo de outubro do ano seguinte à eleição presidencial; posse em 10 de janeiro. Aplica medidas do art. 101, I a VII, e do art. 129, I a VII. Suas decisões só são revistas pelo juiz, a pedido de quem tenha legítimo interesse.",
      },
    ],
    cuidado:
      "Material antigo diz “serviço social” no art. 136, III, a; desde a Lei 15.268/2025 o texto fala em “assistência social”. O art. 130 também passou a citar a negligência (Lei 15.240/2025).",
  },
  questoes: [
    {
      topico: "Prevenção",
      subassunto: "Diversões e produtos",
      dificuldade: 5,
      raciocinio: "A lista do art. 81 inclui bilhetes lotéricos; o limite dos espetáculos é de 10 anos.",
      enunciado:
        "Sobre a prevenção especial no ECA (diversões, publicações e produtos), é correto afirmar que:",
      alternativas: [
        "a venda de fogos de artifício a adolescentes é permitida a partir dos 16 anos, desde que acompanhados de um adulto",
        "crianças menores de 12 anos só ingressam em espetáculos públicos se acompanhadas dos pais ou responsável",
        "é proibida a venda de bilhetes lotéricos a criança ou adolescente, assim como a de bebidas alcoólicas",
        "revistas com material impróprio podem ser vendidas sem embalagem, desde que fiquem fora do alcance visual",
        "as casas de jogos podem receber adolescentes acompanhados, desde que afixem aviso de orientação ao público",
      ],
      correta: 2,
      explicacao:
        "O art. 81 proíbe vender a criança ou adolescente armas, munições e explosivos, bebidas alcoólicas, produtos que possam causar dependência, fogos (exceto os de reduzido potencial), revistas impróprias e bilhetes lotéricos e equivalentes.",
      explicacaoErradas:
        "Não há regra de “a partir dos 16 anos” para fogos: só se excluem os de potencial mínimo. O limite dos espetáculos é de 10 anos, e não “menores de 12 anos”. Publicações impróprias vão em embalagem lacrada, ao contrário de “vendidas sem embalagem”. Casas de jogos não podem permitir a entrada de crianças e adolescentes, ao contrário de “podem receber adolescentes acompanhados”.",
      pegadinha: "Trocar o limite de 10 anos dos espetáculos por 12.",
      conhecimento: "Vender bebida alcoólica a criança ou adolescente também é crime (art. 243).",
    },
    {
      topico: "Prevenção",
      subassunto: "Hospedagem",
      dificuldade: 4,
      raciocinio: "A regra é a proibição, com exceção pela autorização ou presença dos pais.",
      enunciado:
        "Durante operação em rodovia federal, policiais da PRF encontram em um hotel de beira de estrada um adolescente de 15 anos hospedado sozinho. Pelo ECA, a hospedagem de criança ou adolescente em hotel, motel ou pensão:",
      alternativas: [
        "é proibida, salvo se autorizada pelos pais ou responsável ou se eles o acompanharem",
        "é permitida ao adolescente a partir de 14 anos, que já pode se hospedar sozinho com documento de identidade",
        "só é permitida com autorização judicial, mesmo que os pais estejam presentes no estabelecimento",
        "é livre, cabendo ao hotel apenas comunicar a entrada do adolescente ao Conselho Tutelar em 24 horas",
        "é proibida em qualquer caso, inclusive quando a criança ou o adolescente está acompanhado dos pais",
      ],
      correta: 0,
      explicacao:
        "Pelo art. 82, é proibida a hospedagem de criança ou adolescente em hotel, motel, pensão ou estabelecimento congênere, salvo se autorizado ou acompanhado pelos pais ou responsável.",
      explicacaoErradas:
        "Não há liberação “a partir de 14 anos”. A presença dos pais basta, sem exigir “autorização judicial”. A hospedagem não “é livre” com simples comunicação ao Conselho Tutelar. A presença dos pais afasta a proibição, ao contrário de “inclusive quando a criança ou o adolescente está acompanhado dos pais”.",
      pegadinha: "Achar que o adolescente mais velho pode se hospedar sozinho.",
      conhecimento: "Hospedar criança ou adolescente sem os pais e sem autorização é infração administrativa (art. 250).",
    },
    {
      topico: "Prevenção",
      subassunto: "Viagem no Brasil",
      dificuldade: 5,
      raciocinio: "Teste cada caso: idade (menor de 16), grau de parentesco (até o 3º) e autorização expressa.",
      enunciado:
        "Em fiscalização de ônibus interestadual, a PRF encontra quatro passageiros sem os pais, todos viajando para fora da comarca em que moram e sem autorização judicial: Lia, 15 anos, com o tio, que comprova o parentesco por documento; Davi, 13 anos, com uma vizinha maior de idade, sem autorização dos pais; Rui, 16 anos, sozinho; Bia, 10 anos, com a irmã de 19 anos, que comprova o parentesco. Pelo ECA, viajam regularmente:",
      alternativas: [
        "apenas Rui, porque só o adolescente com 16 anos ou mais pode viajar sem os pais",
        "apenas Lia e Bia, porque Rui, mesmo com 16 anos, precisaria de autorização judicial para viajar sozinho",
        "apenas Lia, Davi e Bia, porque todos estão acompanhados de pessoa maior de idade, o que basta",
        "todos os quatro, porque a autorização só é exigida para viagens ao exterior",
        "Lia, Rui e Bia, mas não Davi, que precisaria de autorização expressa dos pais ou do juiz",
      ],
      correta: 4,
      explicacao:
        "O art. 83 alcança só menores de 16 anos, então Rui viaja livremente. Lia está com o tio (colateral de 3º grau) e Bia com a irmã maior (colateral de 2º grau), ambos com parentesco comprovado. Davi está com pessoa maior sem autorização expressa dos pais ou responsável, o que a lei não dispensa.",
      explicacaoErradas:
        "Não é “apenas Rui”: Lia e Bia estão com parentes até o 3º grau. Rui não precisa de autorização, ao contrário de “mesmo com 16 anos, precisaria de autorização judicial”. Estar com pessoa maior não basta sem autorização dos pais, por isso erra “o que basta”. A regra vale também dentro do País, e não “só é exigida para viagens ao exterior”.",
      pegadinha: "Achar que qualquer adulto acompanhando dispensa a autorização.",
      conhecimento: "A Lei 13.812/2019 elevou de 12 para 16 anos a idade do art. 83.",
    },
    {
      topico: "Prevenção",
      subassunto: "Viagem no Brasil",
      dificuldade: 4,
      raciocinio: "Comarca contígua (mesma UF) e região metropolitana dispensam autorização.",
      enunciado:
        "Sobre a autorização para viajar dentro do território nacional, o ECA prevê que:",
      alternativas: [
        "a autorização judicial, quando concedida a pedido dos pais, vale por um ano e só para o destino informado",
        "não se exige autorização para comarca contígua na mesma unidade da Federação ou na mesma região metropolitana",
        "a criança pode viajar com qualquer parente maior de idade, sem limite de grau, se levar a certidão de nascimento",
        "o adolescente de 14 e 15 anos pode viajar sozinho para outro estado se portar documento de identidade com foto",
        "a autorização judicial é sempre exigida para viagem de ônibus, mesmo com os pais, quando o destino for outro estado",
      ],
      correta: 1,
      explicacao:
        "Pelo art. 83, § 1º, a, a autorização não é exigida para comarca contígua à da residência, se na mesma unidade da Federação, ou incluída na mesma região metropolitana.",
      explicacaoErradas:
        "A autorização judicial a pedido dos pais vale por dois anos, e não “vale por um ano”. O parente precisa ser ascendente ou colateral até o 3º grau, e não “sem limite de grau”. Menor de 16 anos não viaja sozinho só com documento, ao contrário de “pode viajar sozinho para outro estado”. Com os pais não há exigência, ao contrário de “mesmo com os pais”.",
      pegadinha: "Esquecer que a regra de 16 anos tem exceções de proximidade.",
      conhecimento: "A autorização judicial pedida pelos pais vale por dois anos (art. 83, § 2º).",
    },
    {
      topico: "Prevenção",
      subassunto: "Viagem ao exterior",
      dificuldade: 5,
      raciocinio: "Exterior: ambos os pais, ou um deles com autorização do outro com firma reconhecida.",
      enunciado:
        "Uma criança brasileira vai embarcar para o exterior. Segundo o ECA, a autorização judicial:",
      alternativas: [
        "é dispensada se ela viajar com um dos pais, ainda que o outro não tenha dado nenhuma autorização",
        "é dispensada se ela viajar com estrangeiro residente no exterior, desde que os pais autorizem por escrito",
        "é sempre exigida, mesmo que a criança viaje acompanhada de ambos os pais",
        "é dispensada se ela viajar com um dos pais, autorizado pelo outro em documento com firma reconhecida",
        "é dispensada se ela viajar com os avós, que, por serem ascendentes, não precisam apresentar documento algum",
      ],
      correta: 3,
      explicacao:
        "Pelo art. 84, a autorização é dispensável se a criança ou o adolescente estiver com ambos os pais ou responsável, ou viajar com um dos pais, autorizado expressamente pelo outro por documento com firma reconhecida.",
      explicacaoErradas:
        "Com um dos pais, é preciso a autorização do outro, ao contrário de “ainda que o outro não tenha dado nenhuma autorização”. Com estrangeiro residente no exterior, a autorização judicial é sempre exigida (art. 85), e não basta que “os pais autorizem por escrito”. Com ambos os pais não se exige, ao contrário de “é sempre exigida”. A regra dos ascendentes do art. 83 vale só para viagens no Brasil, por isso erra “não precisam apresentar documento algum”.",
      pegadinha: "Levar a exceção dos parentes, que é da viagem nacional, para a viagem ao exterior.",
      conhecimento: "A regra da viagem ao exterior vale para criança e para adolescente de qualquer idade.",
    },
    {
      topico: "Ato infracional",
      subassunto: "Criança autora de ato infracional",
      dificuldade: 4,
      raciocinio: "Criança pratica ato infracional, mas só recebe medida de proteção.",
      enunciado:
        "Num posto de combustível às margens de rodovia federal, policiais da PRF flagram um menino de 11 anos furtando objetos de veículos. Segundo o ECA:",
      alternativas: [
        "ele pratica ato infracional, mas só recebe as medidas de proteção previstas no art. 101",
        "ele não pratica ato infracional, pois só o adolescente pode cometer conduta descrita como crime",
        "ele pode receber medida socioeducativa de advertência, a única cabível a crianças",
        "ele deve ser levado ao juiz para internação provisória por até 45 dias, se houver risco de fuga",
        "ele responde pelo crime de furto como adulto, porque a inimputabilidade cessa aos 10 anos",
      ],
      correta: 0,
      explicacao:
        "Ato infracional é a conduta descrita como crime ou contravenção penal (art. 103), praticada por criança ou adolescente. Ao ato da criança correspondem só as medidas de proteção do art. 101 (art. 105), aplicadas em regra pelo Conselho Tutelar (art. 136, I).",
      explicacaoErradas:
        "A criança também pratica ato infracional, ao contrário de “só o adolescente pode cometer”. Advertência é medida socioeducativa, só para adolescentes, por isso erra “a única cabível a crianças”. Internação provisória não se aplica à criança, ao contrário de “internação provisória por até 45 dias”. A inimputabilidade vai até os 18 anos, e não “cessa aos 10 anos”.",
      pegadinha: "Achar que criança não pratica ato infracional.",
      conhecimento: "Medidas socioeducativas são exclusivas do adolescente.",
    },
    {
      topico: "Ato infracional",
      subassunto: "Idade na data do fato",
      dificuldade: 5,
      raciocinio: "Vale a idade no dia do fato; o limite final é a liberação aos 21 anos.",
      enunciado:
        "Um adolescente pratica, aos 17 anos e 10 meses, roubo com grave ameaça contra um motorista em rodovia federal. A sentença sai quando ele já tem 18 anos e 3 meses. Pelo ECA:",
      alternativas: [
        "ele passa a responder pelo Código Penal, porque já é maior de idade na data da sentença",
        "o processo é extinto, pois o ECA deixa de se aplicar a quem completa 18 anos",
        "aplica-se o ECA, que considera a idade na data do fato, e a liberação é compulsória aos 21 anos",
        "aplica-se o ECA, mas a internação só pode durar até ele completar 19 anos, prazo máximo da medida",
        "aplica-se o ECA só se o Ministério Público pedir, e a medida máxima passa a ser a liberdade assistida",
      ],
      correta: 2,
      explicacao:
        "Para os efeitos do ECA, deve ser considerada a idade do adolescente na data do fato (art. 104, parágrafo único). A medida pode seguir depois dos 18 anos, mas a liberação é compulsória aos 21 (art. 121, § 5º).",
      explicacaoErradas:
        "Não se aplica o Código Penal, ao contrário de “porque já é maior de idade na data da sentença”. O processo não “é extinto” aos 18 anos. O teto da internação é de 3 anos, com liberação aos 21, e não “até ele completar 19 anos”. O ECA se aplica por força da lei, e não “só se o Ministério Público pedir”.",
      pegadinha: "Usar a idade da sentença em vez da idade do fato.",
      conhecimento: "É essa a hipótese, citada no art. 2º, de aplicação excepcional do ECA entre 18 e 21 anos.",
    },
    {
      topico: "Ato infracional",
      subassunto: "Apreensão",
      dificuldade: 4,
      raciocinio: "Comunicação imediata ao juiz e à família; nunca incomunicabilidade.",
      enunciado:
        "A PRF apreende em flagrante um adolescente que transportava objetos roubados. Segundo o ECA, deve-se:",
      alternativas: [
        "manter o adolescente incomunicável até a chegada do delegado de polícia, para não prejudicar a investigação",
        "comunicar a apreensão apenas ao Conselho Tutelar, que decide se avisa a família e o juiz",
        "aguardar 24 horas antes de comunicar a família, prazo para a autoridade concluir o registro",
        "recusar ao adolescente a identificação dos policiais responsáveis pela apreensão, para preservar a equipe",
        "comunicar de imediato a apreensão e o local de recolhimento ao juiz e à família ou a quem ele indicar",
      ],
      correta: 4,
      explicacao:
        "A apreensão e o local de recolhimento são comunicados incontinenti à autoridade judiciária e à família do apreendido ou à pessoa por ele indicada, examinando-se desde logo a liberação imediata (art. 107). Ele tem direito a saber quem o apreendeu (art. 106, parágrafo único).",
      explicacaoErradas:
        "Não existe incomunicabilidade, ao contrário de “manter o adolescente incomunicável”. A comunicação vai ao juiz e à família, e não “apenas ao Conselho Tutelar”. Ela é imediata, sem “aguardar 24 horas”. O adolescente tem direito à identificação dos responsáveis, ao contrário de “recusar ao adolescente a identificação dos policiais”.",
      pegadinha: "Confundir a comunicação ao juiz com comunicação só ao Conselho Tutelar.",
      conhecimento: "Deixar de comunicar a apreensão ao juiz e à família é crime (art. 231).",
    },
    {
      topico: "Ato infracional",
      subassunto: "Internação provisória",
      dificuldade: 4,
      raciocinio: "Antes da sentença: no máximo 45 dias, com decisão fundamentada do juiz.",
      enunciado:
        "A internação do adolescente antes da sentença, segundo o ECA:",
      alternativas: [
        "pode durar até 90 dias, prorrogáveis uma vez se a instrução for complexa",
        "dura no máximo 45 dias e exige decisão fundamentada, com indícios suficientes de autoria",
        "pode ser decretada pelo delegado de polícia, por até 5 dias, quando o ato for grave",
        "dispensa fundamentação quando o ato infracional for praticado com violência ou grave ameaça à pessoa",
        "pode durar até a sentença, qualquer que seja o tempo, desde que reavaliada a cada 6 meses",
      ],
      correta: 1,
      explicacao:
        "A internação antes da sentença pode ser determinada pelo prazo máximo de 45 dias (art. 108). A decisão deve ser fundamentada e basear-se em indícios suficientes de autoria e materialidade, demonstrada a necessidade imperiosa da medida.",
      explicacaoErradas:
        "O prazo não é “até 90 dias”. Só o juiz decreta a internação, e não “o delegado de polícia”. A fundamentação nunca é dispensada, ao contrário de “dispensa fundamentação”. O prazo é improrrogável, e não “até a sentença, qualquer que seja o tempo”.",
      pegadinha: "Confundir o prazo de 45 dias com a reavaliação de 6 meses da internação definitiva.",
      conhecimento: "O procedimento com adolescente internado provisoriamente deve terminar em 45 dias (art. 183).",
    },
    {
      topico: "Ato infracional",
      subassunto: "Identificação",
      dificuldade: 5,
      raciocinio: "Identidade civil afasta a identificação compulsória, salvo confrontação com dúvida fundada.",
      enunciado:
        "Um adolescente apreendido apresenta à PRF sua carteira de identidade civil. Segundo o ECA, a identificação compulsória pelos órgãos policiais:",
      alternativas: [
        "é obrigatória em toda apreensão, com coleta de digitais e fotografia, para formar o cadastro policial",
        "só pode ser feita com autorização expressa dos pais ou do responsável legal presente no local",
        "é vedada em qualquer hipótese, ainda que haja dúvida sobre a autenticidade do documento",
        "não será feita, salvo para efeito de confrontação, havendo dúvida fundada",
        "depende de requisição do Conselho Tutelar, que acompanha a coleta das impressões digitais",
      ],
      correta: 3,
      explicacao:
        "O adolescente civilmente identificado não será submetido a identificação compulsória pelos órgãos policiais, de proteção e judiciais, salvo para efeito de confrontação, havendo dúvida fundada (art. 109).",
      explicacaoErradas:
        "Não é “obrigatória em toda apreensão”. A exceção não depende de “autorização expressa dos pais”. Não é “vedada em qualquer hipótese”: há a exceção da confrontação. A lei não exige “requisição do Conselho Tutelar”.",
      pegadinha: "Transformar a exceção da dúvida fundada em proibição absoluta.",
      conhecimento: "A regra lembra a do art. 5º, LVIII, da Constituição para o civilmente identificado.",
    },
    {
      topico: "Medidas socioeducativas",
      subassunto: "Prova para as medidas",
      dificuldade: 5,
      raciocinio: "Só a advertência se contenta com indícios de autoria.",
      enunciado:
        "Sobre a prova exigida para aplicar medidas socioeducativas, o ECA estabelece que:",
      alternativas: [
        "todas as medidas, inclusive a advertência, exigem provas suficientes da autoria e da materialidade",
        "a internação pode ser aplicada com base só na confissão do adolescente, dispensadas outras provas",
        "a advertência pode ser aplicada com prova da materialidade e indícios suficientes da autoria",
        "a reparação do dano dispensa prova da materialidade quando a vítima confirma o prejuízo",
        "a liberdade assistida pode ser aplicada com simples indícios de autoria, como a advertência",
      ],
      correta: 2,
      explicacao:
        "As medidas dos incisos II a VI do art. 112 pressupõem provas suficientes da autoria e da materialidade, ressalvada a remissão (art. 114). A advertência pode ser aplicada sempre que houver prova da materialidade e indícios suficientes da autoria (parágrafo único).",
      explicacaoErradas:
        "A advertência é a exceção, ao contrário de “inclusive a advertência”. A confissão sozinha não basta, e é nula a desistência de outras provas diante dela (Súmula 342 do STJ), o que afasta “dispensadas outras provas”. A reparação do dano exige prova da materialidade, ao contrário de “dispensa prova da materialidade”. A liberdade assistida exige provas suficientes, e não “simples indícios de autoria”.",
      pegadinha: "Estender a regra da advertência às demais medidas.",
      conhecimento: "A advertência é admoestação verbal, reduzida a termo e assinada (art. 115).",
    },
    {
      topico: "Medidas socioeducativas",
      subassunto: "Meio aberto",
      dificuldade: 4,
      raciocinio: "Serviços à comunidade: até 6 meses, 8 horas por semana. Liberdade assistida: mínimo de 6 meses.",
      enunciado:
        "Sobre as medidas socioeducativas em meio aberto, assinale a alternativa correta:",
      alternativas: [
        "a prestação de serviços à comunidade não passa de 6 meses, com jornada máxima de 8 horas semanais",
        "a liberdade assistida tem prazo máximo de 6 meses, vedada a prorrogação depois de fixada pelo juiz",
        "a advertência é aplicada por escrito pelo delegado e dispensa termo assinado pelo adolescente",
        "a prestação de serviços à comunidade pode ser cumprida em horário escolar, se o adolescente concordar",
        "a obrigação de reparar o dano não pode ser substituída por outra medida, mesmo se impossível o cumprimento",
      ],
      correta: 0,
      explicacao:
        "A prestação de serviços comunitários não excede seis meses e é cumprida em jornada máxima de oito horas semanais, sem prejudicar a frequência à escola ou a jornada normal de trabalho (art. 117).",
      explicacaoErradas:
        "Na liberdade assistida, 6 meses é o prazo mínimo, e ela pode ser prorrogada, ao contrário de “prazo máximo de 6 meses, vedada a prorrogação”. A advertência é verbal, reduzida a termo e assinada, e não “aplicada por escrito pelo delegado”. Os serviços não podem prejudicar a escola, ao contrário de “pode ser cumprida em horário escolar”. Havendo impossibilidade manifesta, a reparação pode ser substituída, ao contrário de “não pode ser substituída”.",
      pegadinha: "Trocar o mínimo da liberdade assistida pelo máximo dos serviços à comunidade.",
      conhecimento: "Na liberdade assistida, o juiz designa um orientador, que apresenta relatório do caso.",
    },
    {
      topico: "Medidas socioeducativas",
      subassunto: "Semiliberdade e internação",
      dificuldade: 5,
      raciocinio: "Semiliberdade: atividades externas sem depender do juiz. Internação: a critério da equipe, salvo ordem judicial.",
      enunciado:
        "Comparando a semiliberdade e a internação no ECA, é correto afirmar que:",
      alternativas: [
        "ambas têm prazo determinado na sentença, que o juiz fixa entre 6 meses e 3 anos, conforme a gravidade",
        "na semiliberdade, as atividades externas dependem sempre de autorização judicial prévia e escrita",
        "na internação, as atividades externas são proibidas, salvo para tratamento de saúde ou audiência",
        "a internação deve ser reavaliada a cada ano, e a liberação passa a ser compulsória quando o jovem completa 18 anos",
        "na semiliberdade, atividades externas independem do juiz; na internação, a equipe técnica decide",
      ],
      correta: 4,
      explicacao:
        "Na semiliberdade, as atividades externas são possíveis independentemente de autorização judicial (art. 120). Na internação, são permitidas a critério da equipe técnica da entidade, salvo expressa determinação judicial em contrário (art. 121, § 1º).",
      explicacaoErradas:
        "Nenhuma das duas tem prazo determinado, ao contrário de “ambas têm prazo determinado na sentença”. Na semiliberdade não se exige autorização, ao contrário de “dependem sempre de autorização judicial”. Na internação as atividades externas são permitidas, ao contrário de “são proibidas”. A reavaliação é no máximo a cada 6 meses, e a liberação compulsória é aos 21 anos, o que afasta “reavaliada a cada ano” e “completa 18 anos”.",
      pegadinha: "Achar que a internação impede qualquer atividade fora da unidade.",
      conhecimento: "Na semiliberdade, escolarização e profissionalização são obrigatórias.",
    },
    {
      topico: "Medidas socioeducativas",
      subassunto: "Hipóteses de internação",
      dificuldade: 5,
      raciocinio: "Sem violência, sem reiteração e sem descumprimento de medida, não há hipótese de internação.",
      enunciado:
        "A PRF apreende um adolescente de 16 anos, sem passagens anteriores, que transportava drogas no porta-malas de um carro, sem violência nem ameaça a ninguém. Sobre a internação, é correto afirmar que:",
      alternativas: [
        "é obrigatória, porque o ato infracional análogo ao tráfico é equiparado a crime hediondo",
        "não decorre obrigatoriamente desse ato, que por si só não autoriza a internação",
        "é cabível pelo prazo mínimo de 3 anos, por se tratar de ato infracional grave",
        "é obrigatória se o juiz entender que o ato causa grave dano à saúde pública",
        "é cabível como internação-sanção por até 3 meses, já que ele não tinha medida anterior",
      ],
      correta: 1,
      explicacao:
        "A internação só cabe nas hipóteses do art. 122: violência ou grave ameaça à pessoa, reiteração de infrações graves ou descumprimento reiterado e injustificável de medida anterior. Pela Súmula 492 do STJ, o ato infracional análogo ao tráfico de drogas, por si só, não conduz obrigatoriamente à internação.",
      explicacaoErradas:
        "A equiparação a crime hediondo não torna a internação “obrigatória”. A internação não tem prazo mínimo, ao contrário de “prazo mínimo de 3 anos”: 3 anos é o máximo. A gravidade abstrata não basta, por isso erra “obrigatória se o juiz entender”. A internação-sanção exige medida anterior descumprida, e não cabe “já que ele não tinha medida anterior”.",
      pegadinha: "Achar que a gravidade abstrata do tráfico basta para internar.",
      conhecimento: "Em nenhuma hipótese se aplica a internação havendo outra medida adequada (art. 122, § 2º).",
    },
    {
      topico: "Medidas socioeducativas",
      subassunto: "Direitos do internado",
      dificuldade: 4,
      raciocinio: "O rol do art. 124 garante contato com promotor e defensor; nunca há incomunicabilidade.",
      enunciado:
        "São direitos do adolescente privado de liberdade, segundo o ECA:",
      alternativas: [
        "receber visitas ao menos uma vez por mês, podendo o diretor da unidade suspendê-las livremente",
        "ficar incomunicável nos primeiros 5 dias, para adaptação ao programa da unidade",
        "ser internado sempre longe do domicílio dos pais, para afastá-lo do meio em que praticou o ato",
        "entrevistar-se pessoalmente com o promotor e avistar-se reservadamente com seu defensor",
        "receber assistência religiosa obrigatória, ainda que não a deseje, como parte da ressocialização",
      ],
      correta: 3,
      explicacao:
        "O art. 124 garante, entre outros, entrevistar-se pessoalmente com o representante do Ministério Público, peticionar a qualquer autoridade, avistar-se reservadamente com o defensor e receber visitas ao menos semanalmente. Em nenhum caso há incomunicabilidade.",
      explicacaoErradas:
        "As visitas são ao menos semanais, e só o juiz pode suspendê-las, o que afasta “uma vez por mês” e “o diretor da unidade suspendê-las livremente”. Não existe período “incomunicável”. A internação é na mesma localidade dos pais ou na mais próxima, ao contrário de “sempre longe do domicílio dos pais”. A assistência religiosa depende da vontade do adolescente, ao contrário de “ainda que não a deseje”.",
      pegadinha: "Dar ao diretor da unidade o poder de suspender visitas, que é do juiz.",
      conhecimento: "O juiz pode suspender temporariamente as visitas, até dos pais, se houver motivos sérios e fundados (art. 124, § 2º).",
    },
    {
      topico: "Medidas socioeducativas",
      subassunto: "Remissão",
      dificuldade: 5,
      raciocinio: "Antes do processo, o MP concede; depois, o juiz. Nunca com semiliberdade ou internação.",
      enunciado:
        "Sobre a remissão no ECA, assinale a alternativa correta:",
      alternativas: [
        "não implica reconhecer a responsabilidade nem vale para antecedentes, e pode incluir medida em meio aberto",
        "pode ser concedida pelo delegado de polícia logo após a apreensão, como forma de exclusão do processo",
        "depois de iniciado o procedimento, é concedida pelo Ministério Público e extingue o processo sem sentença",
        "pode incluir a internação, desde que o adolescente concorde expressamente com a medida",
        "uma vez aplicada a medida por remissão, ela não pode mais ser revista pelo juiz, mesmo a pedido do adolescente",
      ],
      correta: 0,
      explicacao:
        "A remissão não implica necessariamente o reconhecimento ou a comprovação da responsabilidade, nem prevalece para efeito de antecedentes, e pode incluir qualquer medida prevista em lei, exceto a semiliberdade e a internação (art. 127).",
      explicacaoErradas:
        "Antes do processo, quem concede é o Ministério Público, e não “o delegado de polícia”. Depois de iniciado o procedimento, quem concede é o juiz, com suspensão ou extinção, e não “o Ministério Público”. A remissão não pode incluir “a internação”. A medida pode ser revista a qualquer tempo a pedido do adolescente, do representante ou do MP, ao contrário de “não pode mais ser revista”.",
      pegadinha: "Atribuir ao Ministério Público a remissão concedida durante o processo.",
      conhecimento: "A remissão como exclusão do processo, concedida pelo MP, é homologada pelo juiz (art. 181).",
    },
    {
      topico: "Medidas aos pais e Conselho Tutelar",
      subassunto: "Afastamento do agressor",
      dificuldade: 5,
      raciocinio: "O afastamento da moradia é cautelar e judicial; a negligência entrou no art. 130 em 2025.",
      enunciado:
        "Constatada negligência grave do pai contra os filhos, com quem mora, o ECA atual permite que:",
      alternativas: [
        "o Conselho Tutelar determine o afastamento do pai da moradia comum, independentemente de ordem judicial",
        "o juiz afaste o pai da moradia apenas se houver abuso sexual, já que a negligência não autoriza a medida",
        "o juiz determine, como medida cautelar, o afastamento do pai da moradia e fixe alimentos provisórios",
        "o Conselho Tutelar aplique ao pai a suspensão do poder familiar, por ser medida do art. 129",
        "o delegado de polícia determine a perda da guarda, comunicando a decisão ao juiz em 48 horas",
      ],
      correta: 2,
      explicacao:
        "Pelo art. 130, com redação da Lei 15.240/2025, verificada a hipótese de maus-tratos, negligência, opressão ou abuso sexual impostos pelos pais ou responsável, a autoridade judiciária pode determinar, como medida cautelar, o afastamento do agressor da moradia comum, fixando alimentos provisórios.",
      explicacaoErradas:
        "O afastamento da moradia é decisão do juiz, e não do Conselho Tutelar “independentemente de ordem judicial”; o Conselho pode representar pedindo a medida. A negligência hoje está no texto, ao contrário de “a negligência não autoriza a medida”. O Conselho Tutelar só aplica as medidas do art. 129, I a VII, e não “a suspensão do poder familiar”. O delegado não aplica “a perda da guarda”.",
      pegadinha: "Dar ao Conselho Tutelar medidas que só o juiz aplica.",
      conhecimento: "Perda da guarda, destituição da tutela e suspensão ou perda do poder familiar são medidas judiciais.",
    },
    {
      topico: "Medidas aos pais e Conselho Tutelar",
      subassunto: "Composição do Conselho Tutelar",
      dificuldade: 4,
      raciocinio: "Órgão municipal, não jurisdicional, 5 membros eleitos para 4 anos.",
      enunciado:
        "Sobre o Conselho Tutelar, o ECA estabelece que:",
      alternativas: [
        "é órgão jurisdicional do município, que julga os conflitos de guarda entre os pais",
        "é composto de 3 membros nomeados pelo prefeito para mandato de 2 anos, vedada qualquer recondução ao cargo",
        "seus membros devem ter mais de 18 anos e formação superior na área de assistência social",
        "há um Conselho por comarca, ligado ao Poder Judiciário estadual e subordinado ao juiz da infância",
        "é órgão permanente e autônomo, com 5 membros escolhidos pela população para mandato de 4 anos",
      ],
      correta: 4,
      explicacao:
        "O Conselho Tutelar é órgão permanente e autônomo, não jurisdicional (art. 131). Há no mínimo um por município e por região administrativa do DF, com 5 membros escolhidos pela população local para mandato de 4 anos, permitida a recondução por novos processos de escolha (art. 132).",
      explicacaoErradas:
        "O Conselho é “não jurisdicional”, ao contrário de “órgão jurisdicional”. São 5 membros eleitos, com recondução permitida, ao contrário de “3 membros nomeados pelo prefeito” e “vedada qualquer recondução”. Exige-se idade superior a 21 anos, idoneidade moral e residência no município, e não “mais de 18 anos e formação superior”. O Conselho integra a administração municipal, e não “o Poder Judiciário estadual”.",
      pegadinha: "Achar que o Conselho Tutelar julga ou pertence ao Judiciário.",
      conhecimento: "O exercício efetivo da função de conselheiro gera presunção de idoneidade moral (art. 135).",
    },
    {
      topico: "Medidas aos pais e Conselho Tutelar",
      subassunto: "Atribuições do Conselho Tutelar",
      dificuldade: 5,
      raciocinio: "O Conselho não afasta a criança da família por conta própria: comunica ao Ministério Público.",
      enunciado:
        "Sobre as atribuições e as decisões do Conselho Tutelar, é correto afirmar que:",
      alternativas: [
        "suas decisões podem ser revistas pelo prefeito ou pelo Conselho Municipal dos Direitos, de ofício",
        "se entender necessário afastar a criança da família, comunica o fato de imediato ao Ministério Público",
        "pode aplicar aos pais a perda da guarda e a destituição da tutela, sem participação do juiz",
        "pode requisitar serviços públicos de saúde e educação, mas não de assistência social nem de segurança",
        "aplica ao adolescente autor de ato infracional a internação, quando o juiz estiver ausente da comarca",
      ],
      correta: 1,
      explicacao:
        "Se, no exercício de suas atribuições, o Conselho Tutelar entender necessário o afastamento do convívio familiar, comunicará incontinenti o fato ao Ministério Público, com os motivos e as providências tomadas (art. 136, parágrafo único).",
      explicacaoErradas:
        "As decisões só são revistas pelo juiz, a pedido de quem tenha legítimo interesse (art. 137), e não “pelo prefeito ou pelo Conselho Municipal dos Direitos, de ofício”. Perda da guarda e destituição da tutela são judiciais, ao contrário de “sem participação do juiz”. O Conselho requisita serviços de saúde, educação, assistência social, previdência, trabalho e segurança, ao contrário de “mas não de assistência social nem de segurança”. O Conselho nunca aplica “a internação”.",
      pegadinha: "Achar que outro órgão do Executivo pode rever a decisão do Conselho.",
      conhecimento: "Desde a Lei 15.268/2025, o art. 136, III, a, fala em “assistência social”, no lugar de “serviço social”.",
    },
    {
      topico: "Medidas aos pais e Conselho Tutelar",
      subassunto: "Escolha e impedimentos",
      dificuldade: 4,
      raciocinio: "Data unificada, a cada 4 anos, no ano seguinte à eleição presidencial.",
      enunciado:
        "Sobre a escolha dos conselheiros tutelares e os impedimentos, o ECA prevê que:",
      alternativas: [
        "a escolha ocorre em data definida por cada município, a cada 3 anos, sob fiscalização da Defensoria",
        "irmãos e cunhados podem servir no mesmo Conselho, desde que eleitos em votações diferentes",
        "o candidato pode oferecer brindes de pequeno valor ao eleitor, desde que sem propaganda partidária",
        "a escolha é unificada no país, no primeiro domingo de outubro do ano seguinte à eleição presidencial",
        "a posse ocorre no primeiro dia útil depois da escolha, perante o juiz da infância da comarca",
      ],
      correta: 3,
      explicacao:
        "O processo de escolha ocorre em data unificada em todo o território nacional, a cada 4 anos, no primeiro domingo de outubro do ano subsequente ao da eleição presidencial (art. 139, § 1º). A posse é em 10 de janeiro do ano seguinte (§ 2º).",
      explicacaoErradas:
        "A data não é “definida por cada município”, o intervalo não é “a cada 3 anos”, e a fiscalização é do Ministério Público, não “da Defensoria”. Irmãos e cunhados (durante o cunhadio) são impedidos de servir no mesmo Conselho, ao contrário de “podem servir”. É vedado oferecer “brindes de pequeno valor” ao eleitor. A posse é em 10 de janeiro, e não “no primeiro dia útil depois da escolha”.",
      pegadinha: "Trocar o Ministério Público pela Defensoria na fiscalização da escolha.",
      conhecimento: "O impedimento se estende ao juiz e ao promotor da Infância em exercício na comarca (art. 140, parágrafo único).",
    },
    {
      topico: "Política de atendimento",
      subassunto: "Entidades de atendimento",
      dificuldade: 5,
      raciocinio: "Cassação de registro é para entidade não governamental; afastamento de dirigente, para a governamental.",
      enunciado:
        "Sobre as entidades de atendimento no ECA, é correto afirmar que:",
      alternativas: [
        "o registro das entidades não governamentais é feito no Conselho Tutelar e não tem prazo de validade",
        "a cassação do registro é medida aplicável às entidades governamentais que descumprem suas obrigações previstas no Estatuto",
        "o dirigente de entidade de acolhimento institucional é equiparado ao guardião, para todos os efeitos",
        "os programas são reavaliados pelo Conselho Municipal dos Direitos a cada 5 anos, no mínimo",
        "o afastamento definitivo dos dirigentes é medida aplicável apenas às entidades não governamentais",
      ],
      correta: 2,
      explicacao:
        "O dirigente de entidade que desenvolve programa de acolhimento institucional é equiparado ao guardião, para todos os efeitos de direito (art. 92, § 1º).",
      explicacaoErradas:
        "O registro é feito no Conselho Municipal dos Direitos, com validade máxima de 4 anos, e não “no Conselho Tutelar” nem “sem prazo de validade”. A cassação do registro é para entidades não governamentais, e não “às entidades governamentais”. A reavaliação é no máximo a cada 2 anos, e não “a cada 5 anos, no mínimo”. O afastamento definitivo dos dirigentes é para entidades governamentais, e não “apenas às entidades não governamentais”.",
      pegadinha: "Trocar as medidas das entidades governamentais e não governamentais.",
      conhecimento: "As entidades são fiscalizadas pelo Judiciário, pelo Ministério Público e pelos Conselhos Tutelares (art. 95).",
    },
  ],
};
