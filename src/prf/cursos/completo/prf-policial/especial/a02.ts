import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "especial-02",
  resumo: {
    ideia:
      "A Lei de Drogas separa quem usa de quem trafica. Uso não leva à prisão em flagrante; tráfico é equiparado a hediondo e tem aumentos, como o do transporte entre estados ou países. Desde 2024, até 40 gramas de maconha para uso não é crime, mas segue proibido.",
    itens: [
      {
        termo: "Uso pessoal",
        faz: "Adquirir, guardar, transportar ou trazer consigo droga para consumo próprio (art. 28). Não se impõe prisão em flagrante: lavra-se termo circunstanciado (art. 48, § 2º).",
        pista: "Para saber se é uso, o juiz olha natureza e quantidade, local, circunstâncias, conduta e antecedentes (art. 28, § 2º).",
      },
      {
        termo: "Maconha (STF, Tema 506)",
        faz: "Até 40 gramas ou 6 plantas-fêmeas, presume-se uso. Não é crime: a droga é apreendida e o autor é notificado a ir a juízo, que aplica advertência ou curso educativo.",
        pista: "A presunção é relativa: porções embaladas, balança e contatos de venda permitem flagrante por tráfico, justificado no auto.",
      },
      {
        termo: "Tráfico",
        faz: "Muitos verbos, como transportar, trazer consigo e guardar, ainda que de graça: reclusão de 5 a 15 anos (art. 33).",
      },
      {
        termo: "Figuras equiparadas",
        faz: "Insumos, plantio, ceder local ou veículo para o tráfico, e vender a policial disfarçado quando já há provas de conduta anterior (art. 33, § 1º).",
      },
      {
        termo: "Uso compartilhado",
        faz: "Oferecer droga de vez em quando, sem lucro, a pessoa do convívio, para usarem juntos: detenção de 6 meses a 1 ano (art. 33, § 3º).",
      },
      {
        termo: "Tráfico privilegiado",
        faz: "Primário, de bons antecedentes, sem dedicação ao crime nem organização criminosa: pena reduzida de 1/6 a 2/3. Não é equiparado a hediondo.",
        pista: "A proibição de converter em pena restritiva de direitos foi suspensa pelo Senado, após decisão do STF.",
      },
      {
        termo: "Associação",
        faz: "Duas ou mais pessoas unidas para traficar (art. 35). O STJ exige vínculo estável e permanente.",
      },
      {
        termo: "Aumentos de 1/6 a 2/3",
        faz: "Tráfico entre países ou entre estados, perto de escola ou presídio, em transporte público, com arma ou envolvendo criança (art. 40).",
        pista: "Basta provar a intenção de cruzar a fronteira ou a divisa (Súmulas 607 e 587 do STJ). Transporte público: só se vender lá dentro.",
      },
      {
        termo: "Em dobro",
        faz: "Para integrante de organização criminosa ultraviolenta, grupo paramilitar ou milícia privada (art. 40-A, Lei 15.358/2026).",
      },
      {
        termo: "Flagrante e laudo",
        faz: "Para o auto de prisão, basta o laudo de constatação, de perito oficial ou, na falta, de pessoa idônea (art. 50, § 1º).",
      },
      {
        termo: "Não atuação policial",
        faz: "Deixar a droga seguir para pegar mais gente exige autorização judicial, ouvido o MP, com itinerário provável e agentes identificados (art. 53, II).",
      },
      {
        termo: "Veículos apreendidos",
        faz: "As polícias judiciária, militar e rodoviária podem usá-los com autorização judicial, ouvido o MP e feita a avaliação (art. 62).",
      },
      {
        termo: "Embarcação e aeronave",
        faz: "Conduzi-las após consumir droga é o crime do art. 39. Carro e moto ficam com o Código de Trânsito.",
      },
    ],
    cuidado:
      "Quem diz que o STF “descriminalizou o porte de drogas” erra: a decisão vale só para a maconha. Para as outras drogas, o art. 28 continua sendo crime.",
  },
  questoes: [
    {
      topico: "Tráfico",
      subassunto: "Aumento do transporte público",
      dificuldade: 5,
      raciocinio: "Os tribunais olham para onde a droga seria vendida.",
      enunciado:
        "Num ônibus intermunicipal de linha regular, a PRF encontra na mala de um passageiro 2 kg de cocaína, destinados à venda na cidade de destino, no mesmo estado. Nada indica venda dentro do ônibus. Quanto ao aumento do art. 40, III, da Lei 11.343/2006 (infração em transportes públicos), segundo o STF e o STJ, ele",
      alternativas: [
        "não incide, pois usar o ônibus só para levar a droga não basta",
        "incide, pois basta que a droga esteja dentro do transporte público",
        "incide em dobro, pois o ônibus leva muitas pessoas ao mesmo tempo",
        "incide só se o ônibus for de empresa pública, e não de concessionária",
        "incide, pois o transporte público é meio de intimidação difusa",
      ],
      correta: 0,
      explicacao:
        "Para o STF e o STJ, a simples utilização do transporte público para carregar a droga não atrai o aumento do art. 40, III. Ele exige que o agente comercialize ou pretenda comercializar a droga dentro do transporte, onde há aglomeração de pessoas.",
      explicacaoErradas:
        "“Basta que a droga esteja dentro” é a leitura literal que os tribunais afastaram. “Em dobro” troca a fração: o art. 40 aumenta de 1/6 a 2/3. “Empresa pública” cria distinção que não existe. “Intimidação difusa” é outra hipótese, do inciso IV.",
      pegadinha: "Levar a droga no ônibus não é vender no ônibus.",
      conhecimento:
        "Os aumentos do art. 40 valem para os crimes dos arts. 33 a 37 e vão de um sexto a dois terços.",
    },
    {
      topico: "Tráfico",
      subassunto: "Tráfico entre estados",
      dificuldade: 4,
      raciocinio: "A súmula dispensa a travessia efetiva.",
      enunciado:
        "Ainda no estado de origem, a poucos quilômetros da divisa, a PRF para um carro com 30 kg de maconha. Mensagens no celular do motorista provam que a carga seria entregue no estado vizinho. Segundo o STJ, o aumento do tráfico entre estados (art. 40, V)",
      alternativas: [
        "não incide, pois a carga não chegou a cruzar a divisa entre os estados",
        "incide só se a droga for entregue no estado vizinho, mesmo depois",
        "não incide, pois esse aumento é só para o tráfico entre países",
        "incide só se o motorista morar no estado vizinho, onde está o comprador",
        "incide, pois basta a prova clara da intenção de cruzar a divisa",
      ],
      correta: 4,
      explicacao:
        "Súmula 587 do STJ: para a incidência da majorante do art. 40, V, é desnecessária a efetiva transposição de fronteiras entre estados da Federação, sendo suficiente a demonstração inequívoca da intenção de realizar o tráfico interestadual.",
      explicacaoErradas:
        "“Não chegou a cruzar” e “só se a droga for entregue” exigem o que a súmula dispensa. “Só para o tráfico entre países” confunde com o inciso I, da transnacionalidade. “Morar no estado vizinho” cria requisito que não existe.",
      pegadinha: "A intenção provada basta; a travessia não é necessária.",
      conhecimento:
        "No tráfico transnacional vale a mesma lógica: basta a prova da destinação internacional, ainda que a fronteira não seja cruzada (Súmula 607 do STJ).",
    },
    {
      topico: "Uso pessoal",
      subassunto: "Maconha para uso próprio",
      dificuldade: 5,
      raciocinio: "A tese do STF diz o que a polícia faz com a droga e com o autor.",
      enunciado:
        "Numa abordagem, a PRF encontra com o motorista 25 gramas de maconha para consumo próprio, sem balança, embalagens ou outro indício de venda. Segundo a tese fixada pelo STF no Tema 506 (RE 635.659), o policial deve",
      alternativas: [
        "prender em flagrante pelo porte, pois o art. 28 continua sendo crime",
        "aplicar ele mesmo a advertência sobre os efeitos da droga",
        "liberar o motorista com a droga, pois a conduta passou a ser lícita",
        "apreender a droga e notificar o autor a comparecer em juízo",
        "prender em flagrante por tráfico, pois a droga estava num veículo",
      ],
      correta: 3,
      explicacao:
        "Pelo Tema 506, não comete infração penal quem porta maconha para consumo pessoal, mas a conduta segue ilícita fora do direito penal: a autoridade policial apreende a droga e notifica o autor para comparecer em juízo, onde o juiz aplica advertência e medida educativa em procedimento não penal.",
      explicacaoErradas:
        "“Prender em flagrante pelo porte” ignora a tese e o art. 48, § 2º. “Aplicar ele mesmo a advertência” erra: quem aplica é o juiz. “Liberar com a droga” erra: a conduta não ficou lícita e a droga é apreendida. “Por tráfico” não tem base: estar num veículo não indica venda.",
      pegadinha: "Não é crime, mas não é permitido: a droga é apreendida.",
      conhecimento:
        "Até que o Congresso legisle, presume-se usuário quem porta até 40 gramas de maconha ou 6 plantas-fêmeas.",
    },
    {
      topico: "Uso pessoal",
      subassunto: "Presunção relativa",
      dificuldade: 5,
      raciocinio: "A quantidade não é o único critério.",
      enunciado:
        "Numa fiscalização, a PRF encontra com um motociclista 30 gramas de maconha divididas em 15 porções embaladas, uma balança de precisão e um celular com mensagens de venda. Segundo o STF (Tema 506),",
      alternativas: [
        "a presunção de uso é relativa, e cabe flagrante por tráfico",
        "a quantidade abaixo de 40 gramas impede qualquer prisão em flagrante",
        "o caso é de uso, pois a quantidade é o único critério fixado pelo STF",
        "o policial deve soltá-lo, e só depois o juiz decide se houve tráfico",
        "a prisão só é possível se a quantidade passar de seis plantas-fêmeas",
      ],
      correta: 0,
      explicacao:
        "A tese diz que a presunção de uso é relativa: a polícia pode prender em flagrante por tráfico, mesmo abaixo de 40 gramas, quando há elementos de mercancia, como acondicionamento, balança e registros de venda. O delegado deve justificar no auto, sem critérios subjetivos, e o juiz avalia na audiência de custódia.",
      explicacaoErradas:
        "“Impede qualquer prisão” e “o único critério” tratam a presunção como absoluta. “Deve soltá-lo” ignora que o flagrante é permitido. “Seis plantas-fêmeas” é o limite para o cultivo, não condição para prender quem tem porções embaladas.",
      pegadinha: "Menos de 40 gramas não garante que seja uso.",
      conhecimento:
        "Também ao contrário: quantidade acima do limite não impede o juiz de concluir que era uso, se houver prova da condição de usuário.",
    },
    {
      topico: "Uso pessoal",
      subassunto: "Outras drogas",
      dificuldade: 4,
      raciocinio: "A decisão do STF não alcança todas as drogas.",
      enunciado:
        "Numa abordagem, um passageiro de carro admite que leva 2 gramas de cocaína para uso próprio, e nada indica venda. Segundo a Lei 11.343/2006 e o entendimento atual do STF,",
      alternativas: [
        "o fato é atípico, pois o STF afastou o crime de porte para qualquer droga",
        "deve haver prisão em flagrante, com fiança arbitrada pelo delegado",
        "o passageiro deve ser preso e levado à audiência de custódia",
        "a conduta é tráfico, pois cocaína não admite porte para uso",
        "não se impõe prisão em flagrante: lavra-se termo circunstanciado",
      ],
      correta: 4,
      explicacao:
        "O Tema 506 do STF trata só da maconha. Para a cocaína, o art. 28 continua sendo crime, e o art. 48, § 2º, manda não impor prisão em flagrante: o autor é levado ao juízo ou assume o compromisso de comparecer, com termo circunstanciado.",
      explicacaoErradas:
        "“Para qualquer droga” estende a decisão do STF além da maconha. “Fiança arbitrada” e “audiência de custódia” supõem uma prisão que a lei proíbe. “Cocaína não admite porte para uso” erra: o art. 28 vale para qualquer droga.",
      pegadinha: "Para a cocaína, continua crime, mas sem prisão.",
      conhecimento:
        "O processo segue a Lei 9.099/1995, salvo se houver concurso com os crimes dos arts. 33 a 37 (art. 48, § 1º).",
    },
    {
      topico: "Tráfico",
      subassunto: "Uso compartilhado",
      dificuldade: 4,
      raciocinio: "O § 3º tem quatro requisitos.",
      enunciado:
        "Durante uma viagem, um motorista oferece, uma única vez e sem cobrar nada, comprimidos de ecstasy ao amigo que viaja com ele, para os dois consumirem juntos. Segundo a Lei 11.343/2006, ele",
      alternativas: [
        "comete tráfico do caput, pois oferecer droga, mesmo de graça, é tráfico",
        "comete só o crime de induzir ao uso indevido, do art. 33, § 2º",
        "não comete crime, pois a droga era para o uso próprio dos dois",
        "comete o crime de oferecer droga para consumo conjunto, mais brando",
        "comete tráfico privilegiado, com a pena reduzida de um sexto a dois terços",
      ],
      correta: 3,
      explicacao:
        "O art. 33, § 3º, pune quem oferece droga, eventualmente e sem objetivo de lucro, a pessoa de seu relacionamento, para juntos a consumirem: detenção de 6 meses a 1 ano e multa, sem prejuízo das penas do art. 28.",
      explicacaoErradas:
        "“Tráfico do caput” ignora a figura especial do § 3º. “Induzir ao uso” é crime diferente, sem a oferta para consumo conjunto. “Não comete crime” esquece o tipo próprio. “Tráfico privilegiado” é redução de pena para quem trafica, não este caso.",
      pegadinha: "Faltando um requisito, como o lucro, volta a ser tráfico.",
      conhecimento:
        "Os requisitos são: oferta eventual, sem lucro, a pessoa do relacionamento, para consumo conjunto.",
    },
    {
      topico: "Tráfico",
      subassunto: "Tráfico privilegiado",
      dificuldade: 5,
      raciocinio: "O texto do § 4º não diz tudo o que vale hoje.",
      enunciado:
        "Sobre a redução de pena do art. 33, § 4º, da Lei 11.343/2006 (tráfico privilegiado), é correto afirmar que ela",
      alternativas: [
        "gera crime que não é tratado como equiparado a hediondo, segundo a lei",
        "exige só a primariedade, ainda que o agente integre organização criminosa",
        "reduz a pena de um terço a dois terços, conforme a quantidade de droga",
        "veda a conversão em pena restritiva de direitos, como diz o texto da lei",
        "alcança também o crime de associação para o tráfico do art. 35",
      ],
      correta: 0,
      explicacao:
        "A Lei de Execução Penal (art. 112, § 5º, incluído pela Lei 13.964/2019) diz que o tráfico do art. 33, § 4º, não se considera hediondo ou equiparado, posição que o STF já adotava. A redução é de 1/6 a 2/3 e exige primário, bons antecedentes, sem dedicação a atividades criminosas nem integração a organização criminosa.",
      explicacaoErradas:
        "“Só a primariedade” esquece os outros requisitos, e integrar organização criminosa impede a redução. “Um terço a dois terços” erra a fração. “Veda a conversão” repete expressão suspensa pelo Senado após o STF julgá-la inconstitucional. “Associação” não está no § 4º, que vale para o caput e o § 1º.",
      pegadinha: "A lei ainda traz a vedação da conversão, mas ela não vale mais.",
      conhecimento:
        "Na fixação da pena, natureza e quantidade da droga preponderam sobre as circunstâncias do art. 59 do Código Penal (art. 42).",
    },
    {
      topico: "Associação",
      subassunto: "Estabilidade",
      dificuldade: 5,
      raciocinio: "“Reiteradamente ou não” se refere aos crimes, não à união.",
      enunciado:
        "Num posto de combustível, dois motoristas que se conheceram naquele dia combinam levar juntos, uma única vez, uma carga de cocaína até outra cidade, e são presos na rodovia. Quanto ao crime de associação para o tráfico (art. 35), segundo o STJ, ele",
      alternativas: [
        "está configurado, pois a lei diz “reiteradamente ou não”",
        "está configurado, pois bastam duas pessoas unidas para o tráfico",
        "absorve o crime de tráfico, que fica como simples fase da associação",
        "está configurado só se um terceiro financiar o transporte da carga",
        "não está configurado, pois exige vínculo estável e permanente",
      ],
      correta: 4,
      explicacao:
        "O STJ exige, para o art. 35, ânimo associativo estável e permanente. A união ocasional para um único transporte é concurso de pessoas no tráfico do art. 33, e não associação.",
      explicacaoErradas:
        "“Reiteradamente ou não” e “bastam duas pessoas” leem o texto sem o requisito da estabilidade. “Absorve o tráfico” erra: quando há associação, os crimes se somam. “Terceiro financiar” descreve outro crime, o do art. 36.",
      pegadinha: "Duas pessoas bastam, mas precisam de vínculo duradouro.",
      conhecimento:
        "A pena do art. 35 é de reclusão de 3 a 10 anos e multa.",
    },
    {
      topico: "Procedimento",
      subassunto: "Laudo de constatação",
      dificuldade: 4,
      raciocinio: "O auto de prisão não espera o laudo definitivo.",
      enunciado:
        "Após apreender pó branco numa abordagem, a PRF apresenta o preso à polícia judiciária. Para lavrar o auto de prisão em flagrante e estabelecer a materialidade, segundo a Lei 11.343/2006,",
      alternativas: [
        "é preciso o laudo definitivo, feito por dois peritos oficiais",
        "basta o laudo de constatação, de perito oficial ou pessoa idônea",
        "basta a confissão do preso de que a substância é cocaína",
        "basta a palavra dos policiais que fizeram a apreensão",
        "é preciso o laudo definitivo, salvo se o próprio preso confessar o crime",
      ],
      correta: 1,
      explicacao:
        "O art. 50, § 1º, diz que, para a lavratura do auto de prisão em flagrante e o estabelecimento da materialidade, é suficiente o laudo de constatação da natureza e quantidade da droga, firmado por perito oficial ou, na falta deste, por pessoa idônea.",
      explicacaoErradas:
        "“Laudo definitivo” é exigido depois, não para o auto. “Confissão” e “palavra dos policiais” não substituem o laudo de constatação. “Salvo se confessar” cria exceção que a lei não prevê.",
      pegadinha: "Laudo de constatação para o flagrante; definitivo para a condenação.",
      conhecimento:
        "O perito que assina o laudo de constatação não fica impedido de fazer o laudo definitivo (art. 50, § 2º).",
    },
    {
      topico: "Procedimento",
      subassunto: "Não atuação policial",
      dificuldade: 5,
      raciocinio: "Na Lei de Drogas, essa medida depende do juiz.",
      enunciado:
        "A PRF descobre que um caminhão com cocaína vai cruzar o país e quer apenas acompanhá-lo, sem abordá-lo, para identificar os compradores. Segundo a Lei 11.343/2006, essa não atuação policial",
      alternativas: [
        "independe de ordem judicial, bastando comunicação posterior ao juiz",
        "depende só de autorização do delegado, ouvido o Ministério Público",
        "é proibida, pois o policial que vê o crime tem o dever de prender",
        "depende de autorização judicial, ouvido o Ministério Público",
        "depende de autorização judicial, ainda que não se saiba o itinerário",
      ],
      correta: 3,
      explicacao:
        "O art. 53, II, permite a não atuação policial sobre os portadores de drogas, para identificar e responsabilizar mais integrantes, mediante autorização judicial e ouvido o Ministério Público. O parágrafo único exige que sejam conhecidos o itinerário provável e a identificação dos agentes ou colaboradores.",
      explicacaoErradas:
        "“Comunicação posterior” e “autorização do delegado” dispensam o juiz, que a lei exige. “É proibida” ignora o art. 53. “Ainda que não se saiba o itinerário” contraria o parágrafo único.",
      pegadinha: "Sem itinerário provável, o juiz não pode autorizar.",
      conhecimento:
        "O mesmo art. 53 permite, também com autorização judicial, a infiltração de agentes de polícia (inciso I).",
    },
    {
      topico: "Procedimento",
      subassunto: "Uso de veículo apreendido",
      dificuldade: 4,
      raciocinio: "O art. 62 cita expressamente a polícia rodoviária.",
      enunciado:
        "Um carro de luxo foi apreendido com 50 kg de maconha numa operação da PRF, que quer usá-lo em serviço enquanto o processo corre. Segundo a Lei 11.343/2006, a PRF",
      alternativas: [
        "pode usá-lo com autorização judicial, ouvido o MP, após avaliação",
        "pode usá-lo de imediato, sem autorização, por ter feito a apreensão",
        "não pode usá-lo, pois só a polícia judiciária usa bens apreendidos",
        "só pode usá-lo depois do trânsito em julgado da sentença condenatória",
        "pode usá-lo se o dono concordar, por escrito, com o uso pela polícia",
      ],
      correta: 0,
      explicacao:
        "O art. 62 permite que os órgãos de polícia judiciária, militar e rodoviária usem os bens apreendidos, sob sua responsabilidade, se comprovado o interesse público, mediante autorização judicial, ouvido o Ministério Público e garantida a prévia avaliação.",
      explicacaoErradas:
        "“De imediato, sem autorização” dispensa o juiz. “Só a polícia judiciária” esquece a polícia rodoviária, citada no artigo. “Trânsito em julgado” não é exigido para o uso provisório. “Se o dono concordar” não é requisito da lei.",
      pegadinha: "A lei cita a polícia rodoviária pelo nome.",
      conhecimento:
        "Têm prioridade os órgãos de segurança pública que participaram da investigação ou da repressão ao crime (art. 62, § 1º-B).",
    },
    {
      topico: "Outros crimes",
      subassunto: "Condução após consumo",
      dificuldade: 4,
      raciocinio: "O art. 39 tem objeto restrito.",
      enunciado:
        "Na rodovia, a PRF aborda um motorista de carro que dirigia em zigue-zague logo após usar cocaína, com a capacidade psicomotora alterada. Esse fato",
      alternativas: [
        "é crime do art. 39 da Lei de Drogas, que pune quem conduz após o consumo",
        "é crime do Código de Trânsito, e não do art. 39 da Lei de Drogas",
        "é atípico, pois só a direção sob efeito de álcool é crime de trânsito",
        "é crime do art. 39, com a pena maior do transporte coletivo de passageiros",
        "é só a conduta do art. 28, pois o motorista tinha acabado de usar a droga",
      ],
      correta: 1,
      explicacao:
        "O art. 39 da Lei 11.343/2006 pune quem conduz embarcação ou aeronave após o consumo de drogas. Para veículo automotor, vale o art. 306 do Código de Trânsito, que alcança a capacidade psicomotora alterada por álcool ou outra substância psicoativa.",
      explicacaoErradas:
        "“Crime do art. 39” e “pena maior do transporte coletivo” esquecem que o artigo é só para embarcação e aeronave. “Só a direção sob efeito de álcool” erra: o art. 306 do CTB inclui outras substâncias. “Só a conduta do art. 28” ignora o crime de trânsito.",
      pegadinha: "Carro e moto não estão no art. 39.",
      conhecimento:
        "No art. 39, a pena sobe para 4 a 6 anos se a embarcação ou aeronave for de transporte coletivo de passageiros.",
    },
    {
      topico: "Tráfico",
      subassunto: "Agente policial disfarçado",
      dificuldade: 5,
      raciocinio: "A Lei 13.964/2019 criou figura própria para a venda ao policial.",
      enunciado:
        "Uma investigação já reunia provas de que um homem vendia drogas num posto de rodovia. Um policial disfarçado, sem induzi-lo, pede para comprar, e o homem lhe entrega a droga. Segundo a Lei 11.343/2006,",
      alternativas: [
        "o crime é impossível, pois o flagrante foi preparado pela polícia",
        "não há crime, pois a venda a policial nunca chega a ser consumada",
        "há crime só se a droga for entregue a usuário, e não ao policial",
        "há só tentativa, pois o policial nunca pretendeu usar a droga",
        "há crime, pois vender a agente disfarçado é conduta equiparada",
      ],
      correta: 4,
      explicacao:
        "O art. 33, § 1º, IV, pune com as penas do caput quem vende ou entrega drogas a agente policial disfarçado, quando presentes elementos probatórios razoáveis de conduta criminal preexistente. Aqui havia provas anteriores e o policial não induziu a venda.",
      explicacaoErradas:
        "“Flagrante preparado” exige que a polícia provoque o crime, o que não ocorreu. “Nunca chega a ser consumada” e “só tentativa” ignoram o inciso IV. “Só se entregue a usuário” cria condição que a lei não prevê.",
      pegadinha: "A figura exige provas de conduta criminal anterior.",
      conhecimento:
        "Ter a droga em depósito ou trazê-la consigo para vender já é tráfico, crime permanente, antes de qualquer venda.",
    },
  ],
};
