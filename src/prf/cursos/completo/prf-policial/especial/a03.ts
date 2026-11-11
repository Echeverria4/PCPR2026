import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "especial-03",
  resumo: {
    ideia:
      "Abuso de autoridade só existe com uma intenção especial: prejudicar alguém, beneficiar a si ou a outro, ou agir por capricho. Tortura é outra coisa: causa sofrimento físico ou mental intenso, é equiparada a hediondo e faz o agente público perder o cargo automaticamente.",
    itens: [
      {
        termo: "Intenção especial",
        faz: "O crime de abuso exige a finalidade de prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou mero capricho ou satisfação pessoal (art. 1º, § 1º).",
        pista: "Divergência na interpretação da lei ou na avaliação de fatos e provas não é abuso (art. 1º, § 2º).",
      },
      {
        termo: "Quem pratica",
        faz: "Qualquer agente público, servidor ou não, mesmo transitório e sem remuneração (art. 2º). O particular que participa sabendo dessa condição responde junto (CP, art. 30).",
      },
      {
        termo: "Ação penal",
        faz: "Pública incondicionada. Se o MP não agir no prazo, cabe queixa subsidiária do ofendido em 6 meses (art. 3º).",
      },
      {
        termo: "Perder o cargo",
        faz: "Inabilitação de 1 a 5 anos e perda do cargo só com reincidência em abuso e declaração motivada na sentença: não são automáticas (art. 4º, parágrafo único).",
        pista: "Na tortura é o oposto: a perda é automática (Lei 9.455, art. 1º, § 5º).",
      },
      {
        termo: "Penas alternativas",
        faz: "Prestação de serviços ou suspensão do cargo de 1 a 6 meses, com perda dos vencimentos, aplicadas sozinhas ou juntas (art. 5º).",
      },
      {
        termo: "Na captura e na custódia",
        faz: "É crime não se identificar ao preso (art. 16), constrangê-lo a se exibir ou a produzir prova (art. 13) e interrogá-lo à noite, salvo flagrante ou consentimento com advogado (art. 18).",
      },
      {
        termo: "Entrar em casa",
        faz: "É crime entrar sem ordem judicial fora das hipóteses legais e cumprir mandado de busca após as 21h ou antes das 5h (art. 22). Não há crime para socorro ou com fundados indícios de flagrante ou desastre (§ 2º).",
      },
      {
        termo: "Prova ilícita",
        faz: "Obter prova por meio manifestamente ilícito ou usá-la sabendo da ilicitude (art. 25).",
      },
      {
        termo: "Violência institucional",
        faz: "Submeter vítima ou testemunha a procedimentos desnecessários ou repetitivos que a façam reviver a violência (art. 15-A). Pena aumentada de 2/3 se o agente deixa terceiro intimidá-la; em dobro se ele mesmo intimida.",
      },
      {
        termo: "Carteirada",
        faz: "Invocar a condição de agente público para fugir de obrigação legal ou obter vantagem indevida (art. 33, parágrafo único).",
      },
      {
        termo: "Tortura: tipos",
        faz: "Para obter informação ou confissão, para provocar crime ou por discriminação racial ou religiosa (art. 1º, I); como castigo a quem está sob sua guarda (II); contra mulher, de forma reiterada, na violência doméstica (III).",
        pista: "O inciso II é crime próprio: só quem tem a vítima sob guarda, poder ou autoridade.",
      },
      {
        termo: "Omissão",
        faz: "Quem tinha o dever de evitar ou apurar a tortura e se omite: detenção de 1 a 4 anos (art. 1º, § 2º), sem regime inicial fechado obrigatório (§ 7º).",
      },
      {
        termo: "Resultado e aumentos",
        faz: "Lesão grave ou gravíssima: 4 a 10 anos; morte: 8 a 16 anos (§ 3º). Aumento de 1/6 a 1/3 se o autor é agente público, contra vulneráveis ou mediante sequestro (§ 4º).",
        pista: "Lesão leve não qualifica a tortura.",
      },
      {
        termo: "Efeitos da tortura",
        faz: "Perda do cargo e interdição pelo dobro da pena (§ 5º). Inafiançável e sem graça ou anistia (§ 6º), mas prescritível. Vale também para vítima brasileira fora do país (art. 2º).",
      },
    ],
    cuidado:
      "Desde a Lei 15.410/2026, a Lei de Tortura tem o inciso III (mulher, violência doméstica). E o artigo sobre algemas da Lei de Abuso foi vetado: o uso de algemas segue a Súmula Vinculante 11.",
  },
  questoes: [
    {
      topico: "Abuso de autoridade",
      subassunto: "Finalidade específica",
      dificuldade: 4,
      raciocinio: "Sem a intenção especial do art. 1º, § 1º, não há crime de abuso.",
      enunciado:
        "Um policial rodoviário federal entende que certo documento de porte obrigatório pode ser exigido em formato físico e retém o veículo até a apresentação. Depois, a corregedoria conclui que a interpretação era equivocada, mas que o policial agiu de boa-fé, sem intenção de prejudicar o condutor nem de obter vantagem. Pela Lei 13.869/2019, a conduta:",
      alternativas: [
        "configura abuso, pois basta a vontade de praticar o ato fora da lei",
        "configura abuso culposo, com a pena reduzida pela metade",
        "não configura abuso, pois divergir na interpretação da lei não é crime",
        "configura abuso, pois o erro de interpretação do agente público é inescusável",
        "não configura abuso apenas se a chefia ratificar a retenção no mesmo dia",
      ],
      correta: 2,
      explicacao:
        "A lei exige finalidade específica: prejudicar outrem, beneficiar a si ou a terceiro, ou capricho e satisfação pessoal (art. 1º, § 1º). E diz expressamente que a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso (art. 1º, § 2º).",
      explicacaoErradas:
        "“Basta a vontade de praticar o ato” ignora a finalidade específica. Não existe “abuso culposo”: todos os crimes da lei são dolosos. “Erro inescusável” e “ratificação da chefia” não constam da lei.",
      pegadinha: "Ato ilegal não é, por si só, abuso de autoridade.",
      conhecimento:
        "É o fim do chamado “crime de hermenêutica”: o agente não responde por ter interpretado a lei de outro modo.",
    },
    {
      topico: "Abuso de autoridade",
      subassunto: "Sujeito ativo",
      dificuldade: 5,
      raciocinio: "A condição de agente público é elementar e se comunica ao coautor que a conhece.",
      enunciado:
        "Com a finalidade de prejudicar um desafeto, um policial rodoviário federal, de folga, entra à força na casa dele, sem ordem judicial e fora das hipóteses legais. Ele é acompanhado por um amigo, particular, que sabe que o autor é policial e o ajuda a arrombar a porta. Quanto ao amigo, é correto afirmar que ele:",
      alternativas: [
        "responde pelo mesmo abuso, pois a condição de agente público se comunica a quem a conhece",
        "responde só pela violação de domicílio do Código Penal, pois ele não é agente público",
        "não responde por crime algum, pois só o agente público pode violar a Lei 13.869",
        "responde pelo mesmo abuso, mas com a pena reduzida de 1/3 por ser particular",
        "responde só por dano, pelo arrombamento da porta, e o policial responde sozinho pelo abuso",
      ],
      correta: 0,
      explicacao:
        "O crime de abuso é próprio, mas a condição de agente público é elementar do tipo. Pelo art. 30 do Código Penal, as condições de caráter pessoal elementares se comunicam ao particular que participa sabendo delas. Assim, o amigo responde pelo mesmo crime do art. 22 da Lei 13.869.",
      explicacaoErradas:
        "“Só pela violação de domicílio do Código Penal” ignora a comunicação da elementar; além disso, o art. 150, § 2º, do CP foi revogado pela própria Lei 13.869. “Nenhum crime” confunde crime próprio com crime de mão própria. Não há “redução de 1/3” para o particular. “Dano” deixa de lado a participação no abuso.",
      pegadinha: "Crime próprio admite coautoria e participação de particular.",
      conhecimento:
        "Agente público, para a lei, é quem exerce mandato, cargo, emprego ou função, mesmo transitório e sem remuneração (art. 2º, parágrafo único).",
    },
    {
      topico: "Abuso de autoridade",
      subassunto: "Ação penal",
      dificuldade: 4,
      raciocinio: "A regra é ação pública incondicionada, com a válvula da queixa subsidiária.",
      enunciado:
        "Um motorista foi vítima de crime de abuso de autoridade durante uma fiscalização. O inquérito foi concluído e remetido ao Ministério Público, que deixou passar o prazo legal sem denunciar, sem pedir arquivamento e sem requisitar diligências. Sobre a ação penal, é correto afirmar:",
      alternativas: [
        "a ação depende de representação do ofendido, no prazo de 6 meses contados da ciência da autoria",
        "a ação é privada, por queixa em 6 meses a partir de quando se soube da autoria",
        "a ação é pública condicionada à requisição do ministro da Justiça",
        "a ação é pública incondicionada, e o ofendido nunca pode oferecer queixa",
        "a ação é pública incondicionada; com o MP inerte, cabe queixa subsidiária em 6 meses",
      ],
      correta: 4,
      explicacao:
        "Os crimes da Lei 13.869 são de ação penal pública incondicionada (art. 3º). Se a ação pública não for intentada no prazo legal, cabe ação privada subsidiária, em 6 meses contados do fim do prazo para a denúncia (art. 3º, §§ 1º e 2º). O MP pode aditar a queixa, repudiá-la e oferecer denúncia substitutiva.",
      explicacaoErradas:
        "“Representação do ofendido” e “requisição do ministro” criariam condições que a lei não prevê. “Ação privada” inverte a regra. “Nunca pode oferecer queixa” esquece a queixa subsidiária, garantida também pela Constituição (art. 5º, LIX).",
      pegadinha: "O prazo de 6 meses conta do fim do prazo do MP, não da ciência da autoria.",
      conhecimento:
        "A queixa subsidiária só cabe com inércia do MP. Se ele pediu arquivamento, não houve inércia.",
    },
    {
      topico: "Abuso de autoridade",
      subassunto: "Efeitos da condenação",
      dificuldade: 5,
      raciocinio: "Na Lei 13.869, perda do cargo exige reincidência e motivação.",
      enunciado:
        "Um policial rodoviário federal, primário, é condenado pela primeira vez por crime da Lei 13.869/2019 a 8 meses de detenção. O MP pede, na apelação, que se declare a perda do cargo. Pela lei, esse pedido:",
      alternativas: [
        "deve ser acolhido, pois a perda do cargo é automática, como na Lei de Tortura",
        "não deve ser acolhido, pois a perda exige reincidência em abuso e motivação na sentença",
        "deve ser acolhido, com inabilitação por 5 anos, sem necessidade de fundamentação específica",
        "deve ser acolhido, pois a inabilitação de 1 a 5 anos decorre da simples condenação",
        "só pode ser acolhido se a vítima tiver pedido a perda do cargo na queixa-crime",
      ],
      correta: 1,
      explicacao:
        "A inabilitação de 1 a 5 anos e a perda do cargo são efeitos da condenação (art. 4º, II e III), mas ficam condicionadas à reincidência em crime de abuso de autoridade e não são automáticas: devem ser declaradas motivadamente na sentença (art. 4º, parágrafo único). O policial é primário.",
      explicacaoErradas:
        "“Automática, como na Lei de Tortura” usa a regra de outra lei (Lei 9.455, art. 1º, § 5º). “Sem necessidade de fundamentação” e “decorre da simples condenação” contrariam o parágrafo único do art. 4º. O pedido da vítima não é requisito.",
      pegadinha: "Tortura: perda automática. Abuso: só com reincidência e motivação.",
      conhecimento:
        "O efeito de tornar certa a obrigação de indenizar (art. 4º, I) não exige reincidência; o juiz fixa um valor mínimo, a pedido do ofendido.",
    },
    {
      topico: "Abuso de autoridade",
      subassunto: "Penas restritivas",
      dificuldade: 4,
      raciocinio: "A lei traz duas penas restritivas próprias.",
      enunciado:
        "Na sentença por crime da Lei 13.869/2019, o juiz substitui a pena privativa de liberdade de um agente público por penas restritivas de direitos. Entre as penas restritivas próprias dessa lei, está a:",
      alternativas: [
        "suspensão do cargo de 6 meses a 2 anos, com metade dos vencimentos",
        "proibição de exercer qualquer função pública por 3 anos",
        "perda do cargo, aplicada como pena substitutiva desde a primeira condenação",
        "suspensão do cargo de 1 a 6 meses, com perda dos vencimentos e vantagens",
        "suspensão do cargo de 1 a 6 meses, mantidos os vencimentos e vantagens",
      ],
      correta: 3,
      explicacao:
        "O art. 5º prevê como restritivas a prestação de serviços à comunidade ou a entidades públicas (I) e a suspensão do exercício do cargo, função ou mandato, de 1 a 6 meses, com perda dos vencimentos e vantagens (II). Podem ser aplicadas sozinhas ou juntas (parágrafo único).",
      explicacaoErradas:
        "“De 6 meses a 2 anos, com metade dos vencimentos” altera prazo e efeito. “Proibição por 3 anos” não está no art. 5º. A perda do cargo é efeito da condenação, não pena substitutiva. “Mantidos os vencimentos” contraria o texto, que manda perder vencimentos e vantagens.",
      pegadinha: "A suspensão é com perda, não com manutenção, da remuneração.",
      conhecimento: "O inciso III do art. 5º, que previa proibição de exercer funções no município, foi vetado.",
    },
    {
      topico: "Abuso de autoridade",
      subassunto: "Identificação ao preso",
      dificuldade: 4,
      raciocinio: "A lei protege o direito do preso de saber quem o prendeu.",
      enunciado:
        "Durante a captura de um foragido na rodovia, o preso pergunta o nome de um dos policiais rodoviários federais, que se recusa a dizer e cobre a identificação da farda, com a finalidade de prejudicar futura reclamação do preso. A conduta do policial:",
      alternativas: [
        "configura crime da Lei 13.869, por deixar de identificar-se ao preso na captura",
        "não é crime, pois a identificação só é devida no interrogatório formal",
        "é só falta disciplinar, pois a recusa não tem previsão como crime na legislação penal",
        "configura o crime de desobediência, previsto no art. 330 do Código Penal",
        "só seria crime se o policial desse um nome falso, e não se apenas se calasse",
      ],
      correta: 0,
      explicacao:
        "É crime deixar de identificar-se ou identificar-se falsamente ao preso por ocasião de sua captura ou quando deva fazê-lo durante a detenção ou prisão: detenção de 6 meses a 2 anos e multa (art. 16). A Constituição garante ao preso a identificação dos responsáveis pela prisão (art. 5º, LXIV).",
      explicacaoErradas:
        "“Só no interrogatório formal” troca o caput pelo parágrafo único, que trata do responsável pelo interrogatório. “Só falta disciplinar” ignora o art. 16. “Desobediência” exige ordem legal de funcionário dirigida a quem desobedece. O crime ocorre tanto pela omissão quanto pelo nome falso.",
      pegadinha: "Calar o nome já basta: o tipo pune o “deixar de identificar-se”.",
      conhecimento:
        "Pena de até 2 anos: infração de menor potencial ofensivo, com termo circunstanciado e possível transação penal (Lei 13.869, art. 39, e Lei 9.099).",
    },
    {
      topico: "Abuso de autoridade",
      subassunto: "Ingresso em domicílio",
      dificuldade: 5,
      raciocinio: "O § 2º do art. 22 afasta o crime com fundados indícios de flagrante.",
      enunciado:
        "Numa abordagem na rodovia, um suspeito joga uma sacola com tabletes de cocaína no acostamento e corre para uma casa vizinha. Os policiais rodoviários federais, que viram tudo, entram na casa sem mandado e o prendem lá dentro. Sobre o crime do art. 22 da Lei 13.869/2019:",
      alternativas: [
        "há crime, pois só mandado judicial autoriza a entrada em casa alheia",
        "há crime, pois a entrada sem mandado só é permitida durante o dia, entre 5h e 21h",
        "não há crime, pois o ingresso se apoiou em fundados indícios de flagrante",
        "não há crime só se o dono da casa autorizar a entrada por escrito",
        "há crime, mas a prisão do suspeito é válida, pois o tráfico é permanente",
      ],
      correta: 2,
      explicacao:
        "Não há crime se o ingresso for para prestar socorro ou quando houver fundados indícios que indiquem a necessidade do ingresso em razão de flagrante delito ou de desastre (art. 22, § 2º). Os policiais viram o descarte da droga e a fuga: há fundadas razões, como exige também o STF (Tema 280).",
      explicacaoErradas:
        "“Só mandado judicial” esquece as exceções da Constituição (art. 5º, XI) e da própria lei. O limite das 21h vale para cumprir mandado de busca, não para o flagrante, que autoriza a entrada a qualquer hora. Não se exige autorização “por escrito”. Se há fundados indícios, não “há crime”.",
      pegadinha: "Flagrante autoriza entrar de dia ou de noite; o limite das 21h é do mandado.",
      conhecimento:
        "Sem fundadas razões, a entrada é ilegal e a prova obtida pode ser anulada, mesmo que se encontre droga depois.",
    },
    {
      topico: "Abuso de autoridade",
      subassunto: "Mandado de busca",
      dificuldade: 4,
      raciocinio: "Ter mandado não basta: há horário para cumpri-lo.",
      enunciado:
        "Com mandado de busca e apreensão domiciliar expedido pelo juiz, uma equipe policial chega à casa do investigado às 21h40 e cumpre a ordem, contra a vontade do morador, com a finalidade de expô-lo aos vizinhos. Pela Lei 13.869/2019:",
      alternativas: [
        "não há crime, pois havia mandado judicial válido para a busca",
        "não há crime, pois o limite legal para a busca é às 22 horas",
        "há crime apenas se a busca durar mais de duas horas",
        "há só nulidade da prova obtida, sem crime de abuso de autoridade",
        "há crime, pois o mandado de busca foi cumprido após as 21 horas",
      ],
      correta: 4,
      explicacao:
        "Incorre na pena do art. 22 (detenção de 1 a 4 anos e multa) quem cumpre mandado de busca e apreensão domiciliar após as 21h ou antes das 5h (art. 22, § 1º, III). A finalidade de expor o morador completa o tipo.",
      explicacaoErradas:
        "“Havia mandado válido” não afasta o crime, pois o problema é o horário. O limite é 21h, não “22 horas”. A duração da busca não é critério. A prova pode ser anulada, mas isso não impede o crime.",
      pegadinha: "O mandado é válido; o horário de cumprimento é que tornou a conduta crime.",
      conhecimento: "A lei usou horário fixo (21h às 5h) para definir a noite, fugindo da discussão sobre “dia”.",
    },
    {
      topico: "Abuso de autoridade",
      subassunto: "Interrogatório noturno",
      dificuldade: 4,
      raciocinio: "O art. 18 tem duas exceções: flagrante e consentimento assistido.",
      enunciado:
        "Um homem é preso em flagrante por policiais rodoviários federais às 23h e apresentado à autoridade policial, que o interroga às 2h da madrugada, sem consentimento dele. Sobre o crime de interrogatório durante o repouso noturno:",
      alternativas: [
        "há crime, pois o repouso noturno do preso não admite exceção",
        "não há crime, pois o preso foi capturado em flagrante delito",
        "não há crime só se o juiz autorizar o interrogatório por escrito",
        "há crime, salvo se o preso consentir, mesmo sem a presença de advogado",
        "não há crime, pois a lei só protege o preso por mandado de prisão preventiva",
      ],
      correta: 1,
      explicacao:
        "É crime submeter o preso a interrogatório policial durante o repouso noturno, salvo se capturado em flagrante delito ou se ele, devidamente assistido, consentir em prestar declarações (art. 18). Como houve flagrante, não há crime.",
      explicacaoErradas:
        "“Não admite exceção” ignora as duas ressalvas. A lei não exige “autorização do juiz”. O consentimento precisa ser “devidamente assistido”, por isso “mesmo sem advogado” está errado. A proteção não se limita à “prisão preventiva”.",
      pegadinha: "O consentimento só vale se o preso estiver assistido.",
      conhecimento: "Pena do art. 18: detenção de 6 meses a 2 anos e multa.",
    },
    {
      topico: "Abuso de autoridade",
      subassunto: "Violência institucional",
      dificuldade: 5,
      raciocinio: "O art. 15-A tem dois aumentos diferentes, conforme quem intimida.",
      enunciado:
        "Ao registrar um crime violento contra uma motorista, um policial obriga a vítima a contar o fato três vezes, sem necessidade, e permite que o irmão do autor, presente na sala, a intimide, gerando indevida revitimização. O policial responde por:",
      alternativas: [
        "violência institucional, com a pena aplicada em dobro",
        "coação no curso do processo, prevista no art. 344 do Código Penal",
        "nenhum crime, pois quem intimidou a vítima foi um terceiro",
        "violência institucional, com a pena aumentada de 2/3",
        "violência institucional, sem aumento, pois a intimidação veio de terceiro",
      ],
      correta: 3,
      explicacao:
        "Submeter vítima a procedimentos desnecessários ou repetitivos que a levem a reviver a violência é violência institucional (art. 15-A, incluído pela Lei 14.321/2022), com detenção de 3 meses a 1 ano e multa. Se o agente permite que terceiro intimide a vítima, a pena aumenta de 2/3 (§ 1º).",
      explicacaoErradas:
        "“Em dobro” é o aumento do § 2º, quando o próprio agente intimida. “Coação no curso do processo” exige violência ou grave ameaça para favorecer interesse em processo. Permitir a intimidação por terceiro é justamente o que aumenta a pena, por isso “nenhum crime” e “sem aumento” estão errados.",
      pegadinha: "Terceiro intimida: +2/3. O próprio agente intimida: dobro.",
      conhecimento: "O crime também protege testemunhas de crimes violentos.",
    },
    {
      topico: "Abuso de autoridade",
      subassunto: "Carteirada",
      dificuldade: 4,
      raciocinio: "O parágrafo único do art. 33 alcança quem invoca a condição de agente.",
      enunciado:
        "Um policial rodoviário federal, de folga e com carro particular, é parado numa blitz de trânsito municipal sem o licenciamento em dia. Ele mostra a carteira funcional e exige ser liberado sem autuação, dizendo que é “da PRF”. A conduta:",
      alternativas: [
        "é crime da Lei 13.869, por invocar a condição de agente para fugir da obrigação",
        "não é crime, pois o policial estava de folga, fora do exercício da função e sem farda",
        "configura corrupção ativa, prevista no art. 333 do Código Penal",
        "é só infração disciplinar, sem previsão como crime na legislação penal",
        "configura concussão, prevista no art. 316 do Código Penal",
      ],
      correta: 0,
      explicacao:
        "Incorre na pena do art. 33 (detenção de 6 meses a 2 anos e multa) quem se utiliza de cargo ou função pública ou invoca a condição de agente público para se eximir de obrigação legal ou para obter vantagem ou privilégio indevido (art. 33, parágrafo único). É a chamada “carteirada”.",
      explicacaoErradas:
        "“De folga” não afasta o crime: o tipo pune justamente quem invoca a condição de agente. “Corrupção ativa” exige oferecer ou prometer vantagem. “Só disciplinar” ignora o art. 33. “Concussão” exige exigir vantagem indevida para si ou para outro em razão da função.",
      pegadinha: "Folga não tira do agente a condição que ele está usando.",
      conhecimento: "O caput do art. 33 pune exigir informação ou cumprimento de obrigação sem expresso amparo legal.",
    },
    {
      topico: "Tortura",
      subassunto: "Tortura-prova",
      dificuldade: 5,
      raciocinio: "O sofrimento causado para obter informação é tortura, não abuso.",
      enunciado:
        "Após prender um suspeito na rodovia, um policial o asfixia com um saco plástico repetidas vezes, causando-lhe intenso sofrimento físico, para que revele onde está escondida a droga. Não há lesão grave. A conduta configura:",
      alternativas: [
        "abuso de autoridade do art. 13, por constranger o preso a produzir prova",
        "tortura-castigo, pois a vítima estava sob a autoridade do policial",
        "tortura, com aumento de 1/6 a 1/3 por ter sido cometida por agente público",
        "lesão corporal, pois a tortura exige, para se consumar, resultado de lesão grave",
        "tortura, com a pena dobrada por ter sido cometida por agente público",
      ],
      correta: 2,
      explicacao:
        "Constranger alguém com violência ou grave ameaça, causando-lhe sofrimento físico ou mental, para obter informação, declaração ou confissão, é tortura (Lei 9.455, art. 1º, I, a), com reclusão de 2 a 8 anos. Cometida por agente público, a pena aumenta de 1/6 a 1/3 (§ 4º, I).",
      explicacaoErradas:
        "A conduta vai além do abuso do art. 13 da Lei 13.869: o sofrimento intenso para obter informação é tortura, crime mais grave. “Tortura-castigo” exige finalidade de castigo ou medida preventiva, não a de obter informação. A tortura não exige lesão grave, que só a qualifica. O aumento é de 1/6 a 1/3, não “dobrada”.",
      pegadinha: "Finalidade de obter informação é tortura-prova, mesmo com o preso sob custódia.",
      conhecimento: "A tortura é crime material: consuma-se com o sofrimento da vítima e admite tentativa.",
    },
    {
      topico: "Tortura",
      subassunto: "Omissão",
      dificuldade: 5,
      raciocinio: "O § 2º pune a omissão com pena menor e fora da regra do regime fechado.",
      enunciado:
        "Na mesma situação de tortura contra um preso, o chefe da equipe policial, que tinha o dever de impedir a agressão, assiste a tudo sem intervir. Pela Lei 9.455/1997, o chefe da equipe:",
      alternativas: [
        "não responde por crime, pois não praticou a violência",
        "responde por prevaricação, prevista no art. 319 do Código Penal",
        "responde por omissão de socorro, prevista no art. 135 do Código Penal",
        "responde pela omissão, com início obrigatório da pena no regime fechado",
        "responde pela omissão diante da tortura, com detenção de 1 a 4 anos",
      ],
      correta: 4,
      explicacao:
        "Aquele que se omite em face da tortura, quando tinha o dever de evitá-la ou apurá-la, incorre na pena de detenção de 1 a 4 anos (art. 1º, § 2º). A regra do regime inicial fechado não se aplica a essa hipótese (§ 7º).",
      explicacaoErradas:
        "“Não responde” ignora o § 2º. “Prevaricação” e “omissão de socorro” cedem à lei especial, que tipifica a omissão diante da tortura. O § 7º ressalva expressamente o § 2º, por isso o “regime fechado obrigatório” está errado.",
      pegadinha: "A omissão tem pena de detenção, enquanto a tortura tem reclusão.",
      conhecimento:
        "A Constituição manda punir os que, podendo evitar a tortura, se omitirem (art. 5º, XLIII).",
    },
    {
      topico: "Tortura",
      subassunto: "Efeitos da condenação",
      dificuldade: 4,
      raciocinio: "Na tortura, a perda do cargo é automática e a interdição é pelo dobro.",
      enunciado:
        "Um agente público é condenado por tortura a 3 anos de reclusão. A sentença nada diz sobre o cargo. Pela Lei 9.455/1997, ele:",
      alternativas: [
        "perde o cargo só se houver reincidência e motivação na sentença",
        "perde o cargo e fica interditado por 6 anos, efeito automático da condenação",
        "fica interditado por 3 anos, o mesmo prazo da pena aplicada",
        "perde o cargo e fica interditado por 8 anos, que é a pena máxima prevista para o crime",
        "não perde o cargo, pois a pena aplicada não passou de 4 anos",
      ],
      correta: 1,
      explicacao:
        "A condenação acarreta a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada (art. 1º, § 5º). STF e STJ entendem que esse efeito é automático, sem necessidade de fundamentação específica. Dobro de 3 anos: 6 anos.",
      explicacaoErradas:
        "“Reincidência e motivação” é a regra da Lei de Abuso (art. 4º, parágrafo único). A interdição é pelo dobro, não pelo “mesmo prazo”, e se calcula sobre a pena aplicada, não sobre a “pena máxima”. O limite de 4 anos é do Código Penal (art. 92, I, b), que não rege a tortura.",
      pegadinha: "O dobro é da pena aplicada, não da pena máxima prevista.",
      conhecimento:
        "O § 7º manda iniciar a pena no regime fechado, mas o STJ admite regime mais brando conforme o art. 33 do CP, seguindo o STF nos crimes hediondos (HC 111.840).",
    },
    {
      topico: "Tortura",
      subassunto: "Regime constitucional",
      dificuldade: 4,
      raciocinio: "A Constituição tira fiança, graça e anistia, mas não torna a tortura imprescritível.",
      enunciado:
        "Sobre o crime de tortura, considerando a Constituição e a Lei 9.455/1997, é correto afirmar que ele é:",
      alternativas: [
        "inafiançável e imprescritível, como o racismo",
        "afiançável, mas insuscetível de graça ou anistia",
        "inafiançável e imprescritível, mas admite graça e anistia",
        "inafiançável e insuscetível de graça ou anistia, mas prescritível",
        "insuscetível de graça, mas admite anistia concedida pelo Congresso Nacional",
      ],
      correta: 3,
      explicacao:
        "A tortura é inafiançável e insuscetível de graça ou anistia (Constituição, art. 5º, XLIII; Lei 9.455, art. 1º, § 6º). Imprescritíveis são só o racismo e a ação de grupos armados contra a ordem constitucional e o Estado democrático (art. 5º, XLII e XLIV).",
      explicacaoErradas:
        "“Imprescritível, como o racismo” estende à tortura uma regra que ela não tem. “Afiançável” contraria o texto. “Admite graça e anistia” e “admite anistia concedida pelo Congresso” contrariam o art. 5º, XLIII.",
      pegadinha: "Tortura prescreve; racismo e ação de grupos armados não.",
      conhecimento:
        "A lei também se aplica a crime cometido fora do Brasil, se a vítima for brasileira ou o agente estiver em local sob jurisdição brasileira (art. 2º).",
    },
  ],
};
