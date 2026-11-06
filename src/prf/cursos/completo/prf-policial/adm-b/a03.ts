import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-b-03",
  resumo: {
    ideia:
      "Poderes administrativos são instrumentos para cumprir o interesse público, e não opção do agente. O mais cobrado é o de polícia: saiba a diferença entre polícia administrativa e judiciária e quem tem competência para cada assunto.",
    itens: [
      {
        termo: "Poderes administrativos x políticos",
        faz: "Os administrativos são instrumentais, para executar tarefas. Os políticos (Legislativo, Executivo, Judiciário) são estruturais.",
      },
      {
        termo: "Polícia administrativa",
        faz: "Incide sobre bens, atividades e direitos. Trata de infração administrativa, pode ser preventiva ou repressiva e cabe a vários órgãos.",
      },
      {
        termo: "Polícia judiciária",
        faz: "Incide sobre pessoas, trata de infração penal, é repressiva e cabe a corporações próprias.",
      },
      {
        termo: "Competência",
        faz: "Súmula 19 STJ: horário bancário é com a União. SV 38: horário do comércio é com o município.",
      },
      {
        termo: "Executoriedade x exigibilidade",
        faz: "Executoriedade usa meio direto, como demolir ou apreender. Exigibilidade usa meio indireto, como a multa.",
      },
      {
        termo: "Disciplinar x polícia",
        faz: "O disciplinar exige vínculo específico com a Administração, até de contratado. O de polícia alcança o particular em geral.",
      },
      {
        termo: "Abuso de poder",
        faz: "Excesso de poder é vício de competência. Desvio de poder é vício de finalidade.",
      },
      {
        termo: "Prestar contas",
        faz: "Dever de quem gere dinheiro público, mesmo que seja particular (CF, art. 70, parágrafo único).",
      },
    ],
    cuidado:
      "Hierarquia não existe entre direta e indireta, nem no exercício da função típica de julgar ou de legislar.",
  },
  questoes: [
    {
      topico: "Polícia administrativa",
      subassunto: "Administrativa x judiciária",
      dificuldade: 4,
      raciocinio: "Não olhe o nome do órgão: olhe a infração tratada.",
      enunciado:
        "Na mesma rodovia, um agente apreende carga sem documento fiscal e autua a empresa, e depois prende em flagrante um motorista por crime, encaminhando-o à delegacia. Quanto à classificação do poder exercido,",
      alternativas: [
        "os dois atos são de polícia administrativa, porque o órgão que atuou não mudou",
        "os dois atos são de polícia judiciária, pois toda atuação de policial tem natureza penal",
        "o primeiro é polícia administrativa e o segundo atua no âmbito penal",
        "o primeiro é polícia judiciária, pois atinge carga, e o segundo é administrativo, pois atinge pessoa",
        "a classificação depende só do caráter preventivo ou repressivo da medida tomada",
      ],
      correta: 2,
      explicacao:
        "A polícia administrativa trata de ilícito administrativo e recai sobre bens, atividades e direitos. A atuação voltada a infração penal entra na esfera penal, com encaminhamento à autoridade competente.",
      explicacaoErradas:
        "“O órgão que atuou não mudou” ignora que o mesmo órgão pode atuar nas duas esferas. “Toda atuação de policial” generaliza. “Atinge carga” inverte a regra sobre bens e pessoas. “Preventivo ou repressivo” não é critério seguro: a polícia administrativa também pode ser repressiva.",
      pegadinha: "Polícia administrativa pode ser repressiva, como ao apreender um bem.",
      conhecimento:
        "O critério mais aceito é o da natureza da infração: administrativa ou penal.",
    },
    {
      topico: "Competência de polícia",
      subassunto: "Horários e guarda municipal",
      dificuldade: 5,
      raciocinio: "Separe o interesse: agência bancária é assunto nacional; comércio é local.",
      enunciado:
        "Um município edita lei que fixa o horário de lojas e, na mesma lei, fixa o horário de atendimento das agências bancárias. Também autoriza a guarda municipal a multar por infrações de trânsito, nos limites legais. Pela jurisprudência,",
      alternativas: [
        "é inválido só o horário bancário",
        "são inválidos o horário de lojas e a multa da guarda, porque comércio e trânsito são assuntos federais",
        "são válidos os horários de lojas e de bancos, mas é inválida a multa, porque guarda municipal só protege bens",
        "tudo é inválido, porque município não exerce poder de polícia sem delegação da União ou do estado",
        "tudo é válido, porque o município decide sobre qualquer assunto que tenha efeito no seu território",
      ],
      correta: 0,
      explicacao:
        "A SV 38 dá ao município o horário do comércio. A Súmula 19 do STJ dá à União o horário bancário. No RE 658.570, o STF admitiu que guardas municipais exerçam fiscalização de trânsito, com imposição de sanções previstas em lei.",
      explicacaoErradas:
        "“Comércio e trânsito são assuntos federais” contraria a SV 38 e o RE 658.570. “Só protege bens” repete a tese rejeitada pelo STF. “Sem delegação” nega competência própria do município. “Qualquer assunto” ignora a Súmula 19 do STJ.",
      pegadinha: "Legislar sobre trânsito é da União, mas fiscalizar pode ser também do município.",
      conhecimento:
        "A competência da União para legislar sobre trânsito está no art. 22, XI, da Constituição.",
    },
    {
      topico: "Atributos da polícia",
      subassunto: "Executoriedade e exigibilidade",
      dificuldade: 5,
      raciocinio: "Meio direto mexe na coisa; meio indireto pressiona a pessoa.",
      enunciado:
        "O fiscal notifica o dono de um prédio para instalar corrimão, sob pena de multa. Em outro caso, com risco grave de desabamento, o próprio poder público demole a parte em ruína sem esperar ordem judicial. Os atributos em destaque são, respectivamente,",
      alternativas: [
        "autoexecutoriedade nos dois casos, porque nenhum deles dependeu de ordem do Judiciário",
        "tipicidade e imperatividade, porque as medidas estavam previstas em lei e obrigam o particular",
        "discricionariedade e coercibilidade, porque o fiscal escolhe e o proprietário obedece",
        "exigibilidade, com meio indireto, e executoriedade, com meio direto",
        "executoriedade, com meio indireto, e exigibilidade, com meio direto",
      ],
      correta: 3,
      explicacao:
        "A exigibilidade pressiona por meio indireto, como a multa. A executoriedade permite agir materialmente, por meio direto, como a demolição em caso urgente.",
      explicacaoErradas:
        "“Autoexecutoriedade nos dois casos” apaga a divisão pedida. “Tipicidade e imperatividade” e “discricionariedade e coercibilidade” descrevem outros traços e não os meios. “Executoriedade, com meio indireto” troca os conceitos.",
      pegadinha: "A multa é decidida pela Administração, mas sua cobrança forçada depende de execução judicial.",
      conhecimento:
        "A executoriedade exige previsão em lei ou situação de urgência.",
    },
    {
      topico: "Contraditório diferido",
      subassunto: "Medida urgente de polícia",
      dificuldade: 5,
      raciocinio: "Em risco imediato, primeiro protege, depois ouve.",
      enunciado:
        "Fiscais encontram medicamentos adulterados à venda e interditam a farmácia na hora, sem ouvir o dono. A defesa alega ofensa ao contraditório. A medida",
      alternativas: [
        "é nula, porque toda restrição de direito exige defesa prévia, sem exceção",
        "é nula, salvo se houver ordem judicial expedida antes da atuação dos fiscais no local",
        "é válida, e a defesa pode ser assegurada depois",
        "é válida, porque poder de polícia nunca se sujeita ao contraditório",
        "é válida apenas se o dono renunciar expressamente ao direito de se defender no processo",
      ],
      correta: 2,
      explicacao:
        "Em situações urgentes, admite-se o contraditório diferido: a Administração age para evitar o dano e abre a defesa logo depois.",
      explicacaoErradas:
        "“Sem exceção” ignora a urgência. “Ordem judicial” nega a executoriedade. “Nunca se sujeita” erra pelo excesso oposto: o contraditório existe, só é adiado. “Renunciar expressamente” cria condição sem base.",
      pegadinha: "Contraditório diferido não é ausência de contraditório.",
      conhecimento:
        "Pela Lei 9.784, art. 45, em caso de risco iminente a Administração pode adotar medidas acauteladoras sem a prévia manifestação do interessado.",
    },
    {
      topico: "Poder disciplinar",
      subassunto: "Disciplinar x polícia",
      dificuldade: 4,
      raciocinio: "A pergunta é: existe vínculo específico com a Administração?",
      enunciado:
        "Uma empresa contratada para manutenção de postos descumpre o contrato e recebe sanção do órgão. Em outro caso, um motorista qualquer é multado por infração. Os poderes exercidos são, nessa ordem,",
      alternativas: [
        "de polícia nos dois casos, pois ambos os punidos são particulares",
        "hierárquico e de polícia, porque a empresa contratada se subordina ao gestor do contrato",
        "regulamentar e disciplinar",
        "disciplinar nos dois casos, porque sempre há aplicação de uma penalidade",
        "disciplinar e de polícia",
      ],
      correta: 4,
      explicacao:
        "O disciplinar alcança quem tem vínculo específico com a Administração, como servidores e contratados. O de polícia alcança a generalidade dos particulares.",
      explicacaoErradas:
        "“Ambos os punidos são particulares” ignora o vínculo contratual. “Hierárquico” não cabe, pois contratado não é subordinado. “Regulamentar” trata de editar normas. “Sempre há aplicação de uma penalidade” toma o efeito pela natureza.",
      pegadinha: "Quem tem contrato com a Administração se sujeita a sanção disciplinar sem ser servidor.",
      conhecimento:
        "Alunos de escola pública e usuários de biblioteca pública são exemplos doutrinários de vínculo específico.",
    },
    {
      topico: "Hierarquia",
      subassunto: "Limites do poder hierárquico",
      dificuldade: 5,
      raciocinio: "Hierarquia nasce da estrutura interna de uma mesma pessoa e da função administrativa.",
      enunciado:
        "Aponte a situação em que existe, de fato, relação hierárquica entre as partes.",
      alternativas: [
        "Entre um ministério e a autarquia vinculada a ele por lei",
        "Entre o presidente de um tribunal e o juiz, no ato de julgar uma causa",
        "Entre um senador e o presidente do Senado, na hora de votar um projeto de lei",
        "Entre o chefe de uma unidade e o servidor lotado nela",
        "Entre a União e um município que recebe verba federal por meio de convênio firmado com o ministério",
      ],
      correta: 3,
      explicacao:
        "A hierarquia ocorre dentro da mesma pessoa jurídica, na função administrativa, como entre chefe e subordinado.",
      explicacaoErradas:
        "“Ministério e autarquia” é vinculação. “Juiz” e “senador” exercem função típica com independência. “União e município” são entes autônomos, e o convênio não cria subordinação.",
      pegadinha: "Nos tribunais e nas casas legislativas há hierarquia, mas só na parte administrativa.",
      conhecimento:
        "Delegar, avocar, rever atos e dar ordens são os principais efeitos do poder hierárquico.",
    },
    {
      topico: "Abuso de poder",
      subassunto: "Excesso x desvio",
      dificuldade: 4,
      raciocinio: "Excesso olha o limite da competência; desvio olha o fim buscado.",
      enunciado:
        "Autoridade competente para aplicar suspensão de até 30 dias aplica 60 dias a um subordinado. Em outro caso, um chefe remove um servidor para puni-lo por um desentendimento pessoal, usando ato que só serve ao interesse do serviço. Os vícios são, respectivamente,",
      alternativas: [
        "desvio de poder e excesso de poder",
        "excesso de poder e desvio de poder",
        "desvio de finalidade nos dois casos, porque toda punição indevida foge do interesse público",
        "usurpação de função pública e excesso de poder",
        "excesso de poder nos dois casos, porque as duas autoridades foram além do que deviam",
      ],
      correta: 1,
      explicacao:
        "Passar do limite da competência é excesso de poder. Usar o ato para fim diverso é desvio de poder, ou de finalidade. Os dois são espécies de abuso de poder.",
      explicacaoErradas:
        "“Desvio de poder e excesso de poder” inverte a ordem. “Desvio de finalidade nos dois casos” e “excesso de poder nos dois casos” apagam a diferença. “Usurpação de função pública” é de quem nem é agente público.",
      pegadinha: "No desvio, a autoridade é competente e o ato parece regular.",
      conhecimento:
        "A remoção como castigo é exemplo clássico de desvio de finalidade.",
    },
    {
      topico: "Deveres",
      subassunto: "Dever de prestar contas",
      dificuldade: 4,
      raciocinio: "O critério é o dinheiro, e não o cargo de quem o gere.",
      enunciado:
        "Uma associação privada sem fins lucrativos recebe recursos da União por convênio e, depois, alega não precisar prestar contas por ser pessoa de direito privado. Pela Constituição, a alegação",
      alternativas: [
        "procede, pois o dever atinge só servidores públicos com cargo efetivo",
        "procede, porque convênio transfere a propriedade do dinheiro à associação, que passa a geri-lo livremente",
        "procede apenas se a associação já tiver terminado de gastar o dinheiro recebido",
        "só não procede se a associação for ligada à Administração indireta da União",
        "não procede, porque o dever alcança quem gere recursos públicos",
      ],
      correta: 4,
      explicacao:
        "O art. 70, parágrafo único, da Constituição obriga a prestar contas qualquer pessoa física ou jurídica, pública ou privada, que utilize, arrecade, guarde, gerencie ou administre dinheiros, bens e valores públicos.",
      explicacaoErradas:
        "“Só servidores” e “ligada à Administração indireta” limitam um dever amplo. “Transfere a propriedade” erra sobre a natureza do convênio. “Já tiver terminado de gastar” é o momento em que as contas mais são cobradas.",
      pegadinha: "Pessoa privada também presta contas quando gere recurso público.",
      conhecimento:
        "O dever de eficiência e o dever de probidade são os outros deveres clássicos do administrador.",
    },
    {
      topico: "Poder de polícia e serviço",
      subassunto: "Polícia, serviço público e fomento",
      dificuldade: 5,
      raciocinio: "Polícia limita; serviço presta; fomento incentiva.",
      enunciado:
        "O órgão A fornece água tratada à população. O órgão B limita o uso de uma propriedade para proteger o ambiente. O órgão C concede financiamento subsidiado a empresas de certa região. Essas atividades são, nessa ordem,",
      alternativas: [
        "serviço público, polícia administrativa e fomento",
        "polícia administrativa, fomento e serviço público",
        "fomento, serviço público e polícia administrativa",
        "serviço público nos três casos, porque todos atendem ao interesse coletivo de algum modo",
        "polícia administrativa nos três casos, porque há sempre regra pública a ser seguida",
      ],
      correta: 0,
      explicacao:
        "Serviço público é atividade positiva que oferece comodidade. Polícia limita direitos em prol da coletividade. Fomento incentiva a iniciativa privada de interesse público.",
      explicacaoErradas:
        "“Polícia administrativa, fomento e serviço público” e “fomento, serviço público e polícia administrativa” estão fora de ordem. “Serviço público nos três casos” e “polícia administrativa nos três casos” ignoram a diferença entre prestar, limitar e incentivar.",
      pegadinha: "Atender ao interesse público não define a espécie da atividade.",
      conhecimento:
        "A intervenção no domínio econômico costuma ser estudada como quarta atividade administrativa.",
    },
    {
      topico: "Prescrição",
      subassunto: "Lei 9.873/1999",
      dificuldade: 5,
      raciocinio: "São dois prazos diferentes: para punir e para deixar o processo parado.",
      enunciado:
        "No âmbito federal, a ação punitiva pelo exercício do poder de polícia, em fato que não constitui crime, prescreve em determinado prazo. Além disso, o procedimento parado aguardando julgamento ou despacho também gera prescrição intercorrente. Pela Lei 9.873/1999, os prazos são de",
      alternativas: [
        "2 anos da prática do ato, e 1 ano para o processo parado",
        "5 anos da prática do ato ou do fim da infração continuada, e 3 anos para o processo parado",
        "5 anos do conhecimento do fato pela autoridade, e 5 anos para o processo parado",
        "10 anos da prática do ato, e não há prescrição enquanto o processo estiver aberto no órgão",
        "3 anos da prática do ato, e 2 anos para o processo parado, sem nenhuma exceção em caso de crime",
      ],
      correta: 1,
      explicacao:
        "A Lei 9.873/1999 fixa 5 anos, contados da prática do ato ou, na infração permanente ou continuada, do dia em que cessou. O procedimento parado por mais de 3 anos sofre prescrição intercorrente.",
      explicacaoErradas:
        "“2 anos”, “10 anos” e “3 anos da prática do ato” trazem prazos errados. “Do conhecimento do fato” é o termo inicial da Lei 8.112 para a punição do servidor, e não o da Lei 9.873.",
      pegadinha: "Se o fato também é crime, vale o prazo da lei penal.",
      conhecimento:
        "A lei se aplica à Administração federal direta e indireta. Estados e municípios têm normas próprias.",
    },
  ],
};
