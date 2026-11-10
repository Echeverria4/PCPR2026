import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-07",
  resumo: {
    ideia:
      "Os crimes contra o patrimônio giram em torno de uma pergunta: como o bem saiu da vítima? Sem violência é furto, com violência é roubo, com colaboração forçada é extorsão, com engano é estelionato. As penas subiram muito em 2026.",
    itens: [
      {
        termo: "Furto",
        faz: "Reclusão de 1 a 6 anos desde a Lei 15.397/2026. Repouso noturno aumenta de metade. Consuma-se com a inversão da posse, mesmo por pouco tempo.",
      },
      {
        termo: "Furto qualificado",
        faz: "2 a 8 anos. Sobe para 4 a 10 em explosivo, fraude eletrônica, veículo levado a outro Estado, animais, celular e computador, arma de fogo e combustíveis.",
      },
      {
        termo: "Privilégio",
        faz: "Primário e coisa de pequeno valor. Vale também no furto qualificado, se a qualificadora for objetiva (Súmula 511 do STJ).",
      },
      {
        termo: "Fraude",
        faz: "Se o engano distrai a vítima e o agente subtrai, é furto mediante fraude. Se a vítima entrega o bem enganada, é estelionato.",
      },
      {
        termo: "Roubo",
        faz: "Reclusão de 6 a 10 anos. Próprio: a violência vem antes ou durante. Impróprio: vem logo depois, para garantir a coisa ou a impunidade.",
      },
      {
        termo: "Aumentos do roubo",
        faz: "1/3 até metade: concurso, arma branca, celular e outros. 2/3: arma de fogo. Dobro: arma de uso restrito ou proibido.",
      },
      {
        termo: "Latrocínio",
        faz: "Morte: 24 a 30 anos. Com a morte consumada, o crime é consumado, mesmo sem levar nada. O julgamento é do juiz singular.",
      },
      {
        termo: "Extorsão",
        faz: "A vítima precisa colaborar. Consuma-se sem a vantagem (Súmula 96 do STJ). Com restrição da liberdade, é o sequestro relâmpago: 6 a 12 anos.",
      },
      {
        termo: "Extorsão mediante sequestro",
        faz: "8 a 15 anos. Consuma-se com a privação da liberdade. Quem denuncia e facilita a libertação tem redução de um a dois terços.",
      },
      {
        termo: "Estelionato",
        faz: "Reclusão de 1 a 5 anos. A representação caiu em 2026, com a revogação do § 5º. Ceder conta laranja entrou no § 2º, VII.",
      },
      {
        termo: "Apropriação indébita",
        faz: "O agente já tinha a posse legítima, e o dolo vem depois. Se o dolo vem antes de receber, é estelionato.",
      },
      {
        termo: "Receptação",
        faz: "Dolosa: 2 a 6 anos. Comercial: 3 a 8 anos. Culposa: 1 mês a 1 ano. Não existe mais perdão judicial na forma culposa.",
      },
      {
        termo: "Imunidades",
        faz: "Art. 181 isenta de pena entre cônjuges e parentes em linha reta. Não vale com violência, para o estranho nem contra maior de 60 anos.",
      },
    ],
    cuidado:
      "O PDF traz penas antigas de furto, roubo, estelionato e receptação. Vale o texto atual do Código, que mudou em 2026.",
  },
  questoes: [
    {
      topico: "Furto",
      subassunto: "Consumação pela inversão da posse",
      dificuldade: 4,
      raciocinio: "O STJ não exige posse tranquila.",
      enunciado:
        "Um homem pega ferramentas da caçamba de uma caminhonete parada em um posto e corre. Ele é seguido sem interrupção e detido 200 metros depois, com tudo recuperado. Segundo a tese do STJ, o furto está",
      alternativas: [
        "tentado, porque a coisa foi recuperada logo depois",
        "tentado, porque faltou a posse mansa e pacífica",
        "atípico, porque não houve prejuízo à vítima",
        "consumado, pois bastou a inversão da posse",
        "consumado só se a coisa saísse da esfera de vigilância da vítima",
      ],
      correta: 3,
      explicacao:
        "Pela teoria da amotio, adotada pelo STJ, o furto se consuma com a posse de fato da coisa, ainda que por breve tempo e seguida de perseguição, sem precisar de posse mansa e pacífica ou desvigiada.",
      explicacaoErradas:
        "“Recuperada logo depois” e “posse mansa e pacífica” são argumentos rejeitados. “Atípico” ignora a subtração. “Esfera de vigilância” é teoria que o STJ não adota.",
      pegadinha: "A recuperação do bem não volta o crime para a tentativa.",
      conhecimento:
        "A Súmula 582 do STJ traz a mesma regra para o roubo.",
    },
    {
      topico: "Furto",
      subassunto: "Furto privilegiado-qualificado",
      dificuldade: 4,
      raciocinio: "Olhe se a qualificadora é objetiva.",
      enunciado:
        "Um réu primário arromba a janela de um carro e leva uma caixa de ferramentas de pequeno valor. Pela Súmula 511 do STJ, quanto ao privilégio do art. 155, § 2º, do CP,",
      alternativas: [
        "não cabe, porque o furto qualificado exclui sempre o privilégio",
        "cabe, porque a qualificadora do arrombamento é objetiva",
        "cabe, mas só se a vítima concordar com a redução",
        "não cabe, porque o dano à janela afasta o pequeno valor",
        "só cabe o perdão judicial, e não a redução da pena",
      ],
      correta: 1,
      explicacao:
        "A Súmula 511 admite o privilégio no furto qualificado quando há primariedade, pequeno valor da coisa e qualificadora de ordem objetiva. O rompimento de obstáculo é objetivo.",
      explicacaoErradas:
        "“Exclui sempre” contraria a súmula. “Vítima concordar” não é requisito. “Dano à janela” não muda o valor da coisa furtada. “Perdão judicial” não é o efeito do § 2º.",
      pegadinha: "O abuso de confiança é tratado como qualificadora subjetiva.",
      conhecimento:
        "No § 2º, o juiz pode trocar reclusão por detenção, reduzir de um a dois terços ou aplicar só multa.",
    },
    {
      topico: "Furto",
      subassunto: "Furto de celular",
      dificuldade: 5,
      raciocinio: "A lei de 2026 criou pena própria para esse objeto.",
      enunciado:
        "Em um terminal rodoviário, sem violência nem qualquer outra circunstância, um homem subtrai da bolsa de uma passageira um telefone celular. Pelo art. 155 do CP, na redação da Lei 15.397/2026, a pena de reclusão é",
      alternativas: [
        "de 4 a 10 anos",
        "de 1 a 6 anos",
        "de 2 a 8 anos",
        "de 1 a 4 anos",
        "de 3 a 8 anos",
      ],
      correta: 0,
      explicacao:
        "O § 6º, II, prevê reclusão de 4 a 10 anos, e multa, se a subtração for de telefone celular, computador ou dispositivo eletrônico semelhante.",
      explicacaoErradas:
        "“1 a 6 anos” é o caput atual. “2 a 8 anos” é o § 4º. “1 a 4 anos” é a pena antiga do caput. “3 a 8 anos” não é pena do art. 155.",
      pegadinha: "Se fosse destreza, seria § 4º, mas o objeto já leva à pena maior.",
      conhecimento:
        "O mesmo § 6º, I, cuida de semovente domesticável de produção e de animal doméstico.",
    },
    {
      topico: "Furto",
      subassunto: "Combustíveis na Lei 15.517/2026",
      dificuldade: 5,
      raciocinio: "A lei nova mexeu nos dois artigos.",
      enunciado:
        "Um homem, sozinho e sem romper nada, retira óleo diesel de um caminhão-tanque parado em um pátio. Outro, sozinho, com grave ameaça e sem arma, rende um motorista e leva o diesel do caminhão-tanque. Pelos arts. 155 e 157 do CP, com a Lei 15.517/2026, há",
      alternativas: [
        "furto simples de 1 a 6 anos, e roubo simples de 6 a 10 anos",
        "furto de 2 a 8 anos, e roubo com aumento de 2/3",
        "dano qualificado, e roubo de 6 a 12 anos, pelo § 1º-A do artigo",
        "crime ambiental apenas, e roubo com a pena em dobro pelo inflamável",
        "furto de 4 a 10 anos, e roubo aumentado de 1/3 até metade",
      ],
      correta: 4,
      explicacao:
        "O art. 155, § 10, pune com 4 a 10 anos a subtração de petróleo e derivados, entre outros. No roubo, o art. 157, § 2º, XI, traz o aumento de 1/3 até metade para esses bens.",
      explicacaoErradas:
        "“Simples” ignora as regras próprias. “2 a 8 anos” é a pena do § 4º. “§ 1º-A” exige bens que comprometam serviços essenciais. “Em dobro” é a arma de uso restrito.",
      pegadinha: "O § 2º-A, III, traz aumento maior se do crime de combustível resultar o dano nele previsto.",
      conhecimento:
        "Furto de fios e cabos tem regra própria: 2 a 8 anos, com possibilidade do privilégio (§ 8º).",
    },
    {
      topico: "Furto e estelionato",
      subassunto: "Furto mediante fraude x estelionato",
      dificuldade: 5,
      raciocinio: "Pergunte: a vítima entregou ou o bem foi tirado dela?",
      enunciado:
        "Primeiro caso: um falso técnico distrai o funcionário de uma loja e sai com um notebook. Segundo caso: um motorista mostra um comprovante falso de PIX, e o frentista, enganado, libera o combustível e o deixa ir. Quanto à tipificação,",
      alternativas: [
        "os dois casos são estelionato, pois nos dois houve fraude",
        "os dois casos são furto mediante fraude, pela mesma razão",
        "o primeiro é furto mediante fraude, e o segundo é estelionato",
        "o primeiro é estelionato, e o segundo é furto mediante fraude",
        "o primeiro é apropriação indébita, e o segundo é estelionato",
      ],
      correta: 2,
      explicacao:
        "No furto mediante fraude, o engano reduz a vigilância, e o agente subtrai contra a vontade da vítima. No estelionato, o engano faz a própria vítima entregar o bem.",
      explicacaoErradas:
        "“Nos dois houve fraude” olha só o meio. “Pela mesma razão” também. A inversão ignora quem entregou o bem. “Apropriação indébita” exige posse anterior legítima.",
      pegadinha: "Fraude existe nos dois crimes: o que muda é a entrega voluntária.",
      conhecimento:
        "A fraude eletrônica existe nos dois artigos: art. 155, § 4º-B, e art. 171, § 2º-A.",
    },
    {
      topico: "Roubo",
      subassunto: "Roubo impróprio",
      dificuldade: 4,
      raciocinio: "A ordem dos atos define a espécie de roubo.",
      enunciado:
        "Em uma loja de conveniência, um homem pega um perfume sem ser visto e sai. Alcançado logo depois pelo funcionário, no pátio, ele o empurra com força e foge com o produto. Pelo art. 157 do CP, o fato é",
      alternativas: [
        "roubo impróprio, pela violência logo após a subtração",
        "furto em concurso com lesão corporal leve",
        "roubo próprio, pois a violência dispensa ordem de atos",
        "furto consumado, pois a violência veio depois do fim do crime",
        "furto tentado, em concurso material com resistência à prisão",
      ],
      correta: 0,
      explicacao:
        "Pelo § 1º, responde pela mesma pena quem, logo depois de subtraída a coisa, emprega violência ou grave ameaça para assegurar a impunidade ou a detenção da coisa.",
      explicacaoErradas:
        "“Lesão corporal leve” e “furto consumado” separam o que a lei une. “Roubo próprio” exige violência antes ou durante. “Resistência” exige oposição a ato legal de funcionário.",
      pegadinha: "No impróprio, só violência ou grave ameaça servem: não vale o “qualquer meio” do caput.",
      conhecimento:
        "Prevalece que o roubo impróprio se consuma com a violência, sem tentativa.",
    },
    {
      topico: "Roubo",
      subassunto: "Causas de aumento e Súmula 443 do STJ",
      dificuldade: 5,
      raciocinio: "Separe o tipo de arma e lembre da fundamentação.",
      enunciado:
        "Dois homens rendem um caminhoneiro com revólver de uso permitido e o mantêm preso na cabine por horas, enquanto levam a carga. Sobre os aumentos do art. 157 do CP e a Súmula 443 do STJ,",
      alternativas: [
        "o aumento é em dobro, pelo simples uso de arma de fogo",
        "a arma branca e a de fogo têm o mesmo aumento, de 2/3",
        "só se aplica a maior fração, pois a lei proíbe somar aumentos",
        "a arma aumenta 2/3, e o número de majorantes, sozinho, não basta",
        "o concurso de pessoas e a restrição da liberdade somam 2/3 automaticamente",
      ],
      correta: 3,
      explicacao:
        "A arma de fogo aumenta 2/3 (§ 2º-A, I). O dobro é para arma de uso restrito ou proibido (§ 2º-B). A Súmula 443 exige fundamentação concreta: a mera indicação do número de majorantes não basta.",
      explicacaoErradas:
        "“Em dobro” é a arma de uso restrito ou proibido. “Arma branca” aumenta de 1/3 até metade. “A lei proíbe” exagera, pois o art. 68 só autoriza o juiz a limitar-se a um aumento. “Automaticamente” contraria a súmula.",
      pegadinha: "Uso permitido: 2/3. Uso restrito ou proibido: dobro.",
      conhecimento:
        "A Súmula 442 do STJ proíbe levar para o furto o aumento do concurso de pessoas do roubo.",
    },
    {
      topico: "Roubo",
      subassunto: "Latrocínio consumado",
      dificuldade: 4,
      raciocinio: "No latrocínio, a morte define a consumação.",
      enunciado:
        "Um assaltante atira na vítima para levar sua caminhonete. A vítima morre, mas ele foge sem levar nada ao ver uma viatura. Pelas Súmulas 610 e 603 do STF,",
      alternativas: [
        "é latrocínio tentado, com julgamento pelo juiz singular",
        "é latrocínio consumado, com julgamento pelo juiz singular",
        "é homicídio qualificado, com julgamento pelo tribunal do júri",
        "é latrocínio consumado, com julgamento pelo tribunal do júri",
        "é roubo tentado, em concurso com homicídio culposo",
      ],
      correta: 1,
      explicacao:
        "A Súmula 610 diz que há latrocínio quando o homicídio se consuma, ainda que o agente não realize a subtração. A Súmula 603 dá a competência ao juiz singular. A pena atual é de 24 a 30 anos.",
      explicacaoErradas:
        "“Tentado” olha só a subtração. “Tribunal do júri” contraria a Súmula 603, pois é crime contra o patrimônio. “Homicídio culposo” não descreve o tiro proposital.",
      pegadinha: "Morte consumada e subtração tentada dão latrocínio consumado.",
      conhecimento:
        "A pena era de 20 a 30 anos. A Lei 15.397/2026 elevou o mínimo para 24 anos.",
    },
    {
      topico: "Extorsão",
      subassunto: "Sequestro relâmpago",
      dificuldade: 5,
      raciocinio: "Sem a colaboração da vítima, o dinheiro não saía.",
      enunciado:
        "Dois homens rendem um motorista, o mantêm no carro e o obrigam a ir a um caixa eletrônico e digitar a senha para sacar dinheiro, soltando-o em seguida. Segundo a lei e a distinção corrente, o crime é",
      alternativas: [
        "roubo com restrição de liberdade, pois ele foi mantido no carro",
        "extorsão mediante sequestro, com pena mínima de 8 anos",
        "roubo em concurso com sequestro e cárcere privado",
        "estelionato, pois a senha foi obtida da própria vítima",
        "extorsão com restrição da liberdade, art. 158, § 3º",
      ],
      correta: 4,
      explicacao:
        "Na extorsão, a colaboração da vítima é indispensável para a vantagem. Quando ela é cometida mediante restrição da liberdade e essa condição é necessária para obter a vantagem, a pena é de 6 a 12 anos, pelo art. 158, § 3º.",
      explicacaoErradas:
        "“Roubo com restrição” serve quando o agente pode tomar o bem sozinho. “Mediante sequestro” exige a privação para exigir resgate. “Concurso” divide um fato só. “Estelionato” exige engano, não ameaça.",
      pegadinha: "Levar o carro é roubo. Obrigar a digitar a senha é extorsão.",
      conhecimento:
        "A Súmula 96 do STJ diz que a extorsão se consuma independentemente da vantagem.",
    },
    {
      topico: "Extorsão",
      subassunto: "Extorsão mediante sequestro e delação",
      dificuldade: 4,
      raciocinio: "Consumação na privação, e benefício que só reduz a pena.",
      enunciado:
        "Três homens sequestram o filho de 17 anos de um empresário e exigem resgate. Antes do pagamento, um deles, arrependido, conta tudo à polícia, o que facilita a libertação. Pelo art. 159 do CP,",
      alternativas: [
        "o crime só se consuma quando a família paga o resgate exigido",
        "o delator fica isento de pena, por arrependimento eficaz",
        "o crime está consumado, e o delator tem redução de pena",
        "há só tentativa, e o delator tem a extinção da punibilidade",
        "a redução vale para os três, por ser circunstância objetiva",
      ],
      correta: 2,
      explicacao:
        "O crime é formal: consuma-se com a privação da liberdade. Pelo § 4º, o concorrente que denuncia à autoridade, facilitando a libertação, tem a pena reduzida de um a dois terços.",
      explicacaoErradas:
        "“Paga o resgate” é exaurimento. “Isento” e “extinção” trocam redução por isenção. “Vale para os três” ignora que o benefício é só de quem denunciou.",
      pegadinha: "Vítima menor de 18 anos leva ao § 1º: 12 a 20 anos.",
      conhecimento:
        "A Lei 15.358/2026 incluiu aumento de 2/3 no § 5º do art. 159.",
    },
    {
      topico: "Estelionato",
      subassunto: "Ação penal após a Lei 15.397/2026",
      dificuldade: 5,
      raciocinio: "Sem regra especial, volta a valer a regra geral do art. 100.",
      enunciado:
        "Em novembro de 2026, um adulto capaz perde dinheiro em um golpe e não quer representar contra o autor. Sobre a ação penal do estelionato simples, considerando a revogação do art. 171, § 5º, do CP,",
      alternativas: [
        "depende de representação, salvo vítima idosa ou incapaz",
        "é privada, e se procede por queixa do ofendido",
        "depende de representação em todos os casos do artigo",
        "é pública incondicionada, pois o § 5º foi revogado",
        "é pública condicionada à requisição do Ministro da Justiça",
      ],
      correta: 3,
      explicacao:
        "O § 5º, trazido pelo Pacote Anticrime, exigia representação. Ele foi revogado pela Lei 15.397/2026. Sem previsão especial, vale o art. 100: a ação é pública incondicionada.",
      explicacaoErradas:
        "“Salvo vítima idosa” é a regra revogada. “Privada” exigiria declaração expressa da lei. “Em todos os casos” também se apoia no texto revogado. “Requisição” não tem previsão aqui.",
      pegadinha: "O PDF do curso ainda traz a representação, anterior à mudança.",
      conhecimento:
        "A pena do caput também mudou: reclusão de 1 a 5 anos, e multa.",
    },
    {
      topico: "Estelionato",
      subassunto: "Cessão de conta laranja",
      dificuldade: 5,
      raciocinio: "A lei de 2026 criou figura própria no § 2º.",
      enunciado:
        "Uma jovem empresta sua conta bancária a um conhecido, sem cobrar nada, sabendo que por ela passariam valores de golpes praticados por ele. Pelo art. 171, § 2º, do CP, ela",
      alternativas: [
        "responde nas penas do art. 171, mesmo cedendo de graça",
        "só responde se receber dinheiro pela cessão da conta",
        "responde por lavagem, única figura possível no caso",
        "não responde, porque a conta é dela e a cessão é lícita",
        "responde por receptação culposa, com perdão judicial",
      ],
      correta: 0,
      explicacao:
        "O inciso VII, incluído pela Lei 15.397/2026, pune quem cede, gratuita ou onerosamente, conta bancária para que nela transitem recursos destinados ao financiamento de atividade criminosa ou que dela sejam fruto.",
      explicacaoErradas:
        "“Só responde se receber” contraria o “gratuita ou onerosamente”. “Única figura” ignora o novo inciso. “Lícita” não vale, pois ela sabia do uso. “Receptação culposa” não descreve a conduta.",
      pegadinha: "Cobrar ou não cobrar não muda a tipificação.",
      conhecimento:
        "O art. 171-A pune a fraude com ativos virtuais: reclusão de 4 a 8 anos, e multa.",
    },
    {
      topico: "Apropriação indébita",
      subassunto: "Dolo posterior à posse",
      dificuldade: 4,
      raciocinio: "Quando surgiu a intenção de ficar com o bem?",
      enunciado:
        "Um motorista de transportadora recebe de forma regular uma carga de eletrônicos. Dois dias depois, com dívidas, ele decide vendê-la em vez de entregá-la, e o faz. Quanto ao crime,",
      alternativas: [
        "é estelionato, porque houve venda a quem não sabia da origem",
        "é apropriação indébita majorada, pois o dolo veio após a posse",
        "é furto com abuso de confiança, pelo vínculo de emprego com a firma",
        "é receptação, porque ele vendeu coisa que sabia ser alheia",
        "é peculato, porque a carga passou por uma rodovia federal",
      ],
      correta: 1,
      explicacao:
        "Na apropriação indébita, o agente já tem a posse legítima e, depois, passa a agir como dono. O art. 168, § 1º, III, aumenta a pena de um terço se ele recebeu a coisa em razão de ofício, emprego ou profissão.",
      explicacaoErradas:
        "“Estelionato” exigiria dolo antes de receber. “Abuso de confiança” pressupõe subtração, sem posse livre. “Receptação” exige produto de crime de outro. “Peculato” exige funcionário público.",
      pegadinha: "Dolo antes da posse: estelionato. Dolo depois: apropriação.",
      conhecimento:
        "O art. 169 pune a apropriação de coisa vinda por erro, caso fortuito ou força da natureza.",
    },
    {
      topico: "Receptação",
      subassunto: "Fim do perdão judicial",
      dificuldade: 5,
      raciocinio: "Confira se o parágrafo ainda existe.",
      enunciado:
        "Sem saber da origem, mas sem nenhuma cautela, um homem primário compra por um décimo do preço um celular novo de um desconhecido. O aparelho era roubado. Condenado por receptação culposa, ele pede perdão judicial. Pelo texto atual do art. 180 do CP,",
      alternativas: [
        "cabe o perdão, por ser primário e culposo o crime",
        "cabe só a redução de um a dois terços, como no furto",
        "cabe o perdão, porque é regra geral dos crimes culposos",
        "o fato virou atípico, pois a forma culposa foi revogada",
        "não cabe, pois a Lei 15.358/2026 revogou esse parágrafo",
      ],
      correta: 4,
      explicacao:
        "O § 5º do art. 180, que previa o perdão judicial na receptação culposa e a regra do § 2º do art. 155 na dolosa, foi revogado pela Lei 15.358/2026. A forma culposa do § 3º continua.",
      explicacaoErradas:
        "“Por ser primário” e “como no furto” repetem o parágrafo revogado. “Regra geral” não existe, pois o perdão só cabe nos casos previstos. “Atípico” ignora o § 3º.",
      pegadinha: "O PDF do curso ainda ensina o perdão: a lei mudou depois.",
      conhecimento:
        "O § 4º diz que a receptação é punível ainda que desconhecido ou isento de pena o autor do crime de origem.",
    },
    {
      topico: "Imunidades",
      subassunto: "Art. 181 e o estranho",
      dificuldade: 4,
      raciocinio: "A imunidade é pessoal.",
      enunciado:
        "Um filho e um amigo dele furtam, sem violência, o carro do pai do primeiro, que tem 58 anos. Pelos arts. 181 e 183 do CP,",
      alternativas: [
        "os dois são isentos, pois a imunidade se comunica",
        "os dois respondem, porque o furto foi qualificado",
        "o filho é isento, e o amigo responde pelo furto qualificado",
        "o filho responde só se o pai oferecer representação",
        "o amigo é isento, e o filho responde por abuso de confiança",
      ],
      correta: 2,
      explicacao:
        "O art. 181, II, isenta de pena quem comete crime patrimonial sem violência contra ascendente. O art. 183, II, afasta a imunidade para o estranho que participa do crime.",
      explicacaoErradas:
        "“Se comunica” contraria o art. 183, II. “Os dois respondem” ignora o art. 181. “Representação” é o art. 182, para irmão e outros, não para ascendente. “Abuso de confiança” inverte os papéis.",
      pegadinha: "Com vítima de 60 anos ou mais, a imunidade cai (art. 183, III).",
      conhecimento:
        "A imunidade também não vale em roubo, extorsão ou crime com violência ou grave ameaça à pessoa.",
    },
  ],
};
