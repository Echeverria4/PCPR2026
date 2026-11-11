import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "especial-10",
  resumo: {
    ideia:
      "As competências da PRF vêm de quatro fontes que se somam: o art. 144, § 2º, da Constituição, o art. 20 do CTB, o Decreto 1.655/1995 e o art. 58 do Anexo I do Decreto 11.348/2023, que trata da estrutura do Ministério da Justiça e Segurança Pública.",
    itens: [
      {
        termo: "Constituição",
        faz: "A PRF é órgão permanente, organizado e mantido pela União e estruturado em carreira, destinado ao patrulhamento ostensivo das rodovias federais (art. 144, § 2º).",
      },
      {
        termo: "Decreto 11.348/2023, art. 58",
        faz: "Manda a PRF exercer as competências da Constituição, do art. 20 do CTB e do Decreto 1.655/1995 e lista competências específicas: prevenir e reprimir crimes nas rodovias e estradas federais e nas áreas de interesse da União, exercer a autoridade de trânsito e lavrar o termo circunstanciado da Lei 9.099/1995.",
        pista: "O decreto novo soma competências; não revoga o Decreto 1.655.",
      },
      {
        termo: "Patrulhamento e crimes",
        faz: "Patrulhamento ostensivo para preservar a ordem, a incolumidade das pessoas e o patrimônio da União e de terceiros. A PRF colabora e atua na prevenção e repressão de crimes como roubo de veículos, tráfico, contrabando, descaminho e crimes ambientais (Decreto 1.655, art. 1º, I e X).",
      },
      {
        termo: "Trânsito no CTB",
        faz: "Nas rodovias e estradas federais, a PRF fiscaliza, aplica advertência por escrito e multa, adota medidas administrativas e arrecada multas e valores de estadia, remoção e escolta (art. 20, III).",
      },
      {
        termo: "Suspensão do direito de dirigir",
        faz: "A PRF aplica a suspensão quando ela é prevista de forma específica para a infração e comunica ao órgão máximo executivo de trânsito da União (CTB, art. 20, XII, Lei 14.071/2020).",
      },
      {
        termo: "Sinistros de trânsito",
        faz: "Levantamento dos locais e atendimento, socorro e salvamento de vítimas (IV), estatísticas e estudos sobre as causas, enviados ao órgão rodoviário federal (VII), e perícia administrativa nos locais (XIII).",
        pista: "Desde a Lei 14.599/2023, o CTB fala em “sinistro”, e não mais em “acidente”.",
      },
      {
        termo: "Livre circulação",
        faz: "A PRF assegura a livre circulação, pode pedir ao órgão rodoviário medidas emergenciais e zela pelo direito de vizinhança, promovendo a interdição de construções e instalações não autorizadas (CTB, art. 20, VI).",
      },
      {
        termo: "Escoltas",
        faz: "Credencia os serviços de escolta e fiscaliza a remoção de veículos e o transporte de carga indivisível (CTB, art. 20, V). Também planeja a segurança nos deslocamentos de autoridades, sob a coordenação do órgão competente (Decreto 1.655, art. 1º, VIII).",
      },
      {
        termo: "Menores e meio ambiente",
        faz: "Fiscaliza e controla o tráfico de menores nas rodovias federais, com as providências do ECA (Decreto 1.655, art. 1º, IX). Fiscaliza a emissão de poluentes e ruído dos veículos e apoia os órgãos ambientais quando solicitada (CTB, art. 20, XI).",
      },
      {
        termo: "Identidade funcional",
        faz: "Confere ao policial livre porte de arma e franco acesso aos locais sob fiscalização do órgão e, quando em serviço, prioridade em todos os tipos de transporte e comunicação (Decreto 1.655, art. 2º).",
      },
    ],
    cuidado:
      "O Decreto 11.348/2023 já foi alterado por vários decretos: confira no Planalto se o art. 58 mudou. A PEC 18/2025 (PEC da Segurança Pública) propõe mudanças no art. 144 que alcançam a PRF; se for promulgada, confira o novo texto.",
  },
  questoes: [
    {
      topico: "Fontes",
      subassunto: "Decreto 11.348/2023",
      dificuldade: 4,
      raciocinio: "Art. 58: competências da CF, do CTB e do Decreto 1.655, mais as específicas.",
      enunciado:
        "Sobre a relação entre o art. 58 do Anexo I do Decreto 11.348/2023 e as outras normas que tratam das competências da Polícia Rodoviária Federal, é correto afirmar:",
      alternativas: [
        "o decreto de 2023 revogou o Decreto 1.655/1995, que deixou de ser fonte de competências",
        "o decreto de 2023 substituiu o art. 20 do CTB, que hoje só trata de multas",
        "as competências da PRF estão só na Constituição, e os decretos tratam apenas da estrutura interna do órgão",
        "o art. 58 manda exercer as competências da Constituição, do CTB e do Decreto 1.655, e lista outras",
        "o art. 58 vale só para os servidores administrativos da PRF, e não para os policiais",
      ],
      correta: 3,
      explicacao:
        "O art. 58 do Anexo I do Decreto 11.348/2023 diz que cabe à PRF exercer as competências do § 2º do art. 144 da Constituição, do art. 20 do CTB e do Decreto 1.655/1995 e, especificamente, as que enumera em seguida. As fontes se somam.",
      explicacaoErradas:
        "O decreto não “revogou o Decreto 1.655/1995”: cita-o como fonte. Também não “substituiu o art. 20 do CTB”. As competências não estão “só na Constituição”: o art. 58 lista competências específicas. Ele trata do órgão, e não “só para os servidores administrativos”.",
      pegadinha: "As quatro fontes se somam.",
      conhecimento: "O Decreto 11.348/2023 aprova a estrutura regimental do Ministério da Justiça e Segurança Pública, onde a PRF é órgão específico singular.",
    },
    {
      topico: "Decreto 11.348/2023",
      subassunto: "Termo circunstanciado",
      dificuldade: 5,
      raciocinio: "Art. 58, XII: a PRF lavra o termo circunstanciado do art. 69 da Lei 9.099/1995.",
      enunciado:
        "Numa rodovia federal, uma equipe da PRF flagra uma infração penal de menor potencial ofensivo. Pelo art. 58 do Anexo I do Decreto 11.348/2023, quanto ao termo circunstanciado, a PRF:",
      alternativas: [
        "pode lavrá-lo, pois o decreto lhe atribui o termo previsto no art. 69 da Lei 9.099/1995",
        "deve levar o autor à delegacia, pois só o delegado pode lavrar o termo",
        "deve levar o autor à Polícia Federal, pois toda infração em rodovia federal é crime federal",
        "pode lavrá-lo só se o autor concordar em renunciar ao direito de ficar calado",
        "pode lavrá-lo só nos crimes de trânsito, e não nas outras infrações de menor potencial",
      ],
      correta: 0,
      explicacao:
        "Entre as competências específicas do art. 58 do Anexo I do Decreto 11.348/2023 está lavrar o termo circunstanciado de que trata o art. 69 da Lei 9.099/1995. Ele é a peça das infrações de menor potencial ofensivo, que vai ao Juizado Especial Criminal.",
      explicacaoErradas:
        "O decreto atribui o termo à PRF, por isso “só o delegado” erra. O local da infração não torna o crime federal: “toda infração em rodovia federal é crime federal” erra. O termo não depende de renunciar ao silêncio. O decreto não limita o termo aos “crimes de trânsito”.",
      pegadinha: "Termo circunstanciado: a própria PRF lavra.",
      conhecimento: "Infrações de menor potencial ofensivo são as contravenções e os crimes com pena máxima de até 2 anos (Lei 9.099/1995, art. 61).",
    },
    {
      topico: "Decreto 1.655/1995",
      subassunto: "Identidade funcional",
      dificuldade: 5,
      raciocinio: "Art. 2º: porte e acesso sem condição; prioridade em transporte e comunicação só em serviço.",
      enunciado:
        "Pelo art. 2º do Decreto 1.655/1995, o documento de identidade funcional dos policiais rodoviários federais assegura:",
      alternativas: [
        "porte de arma só em serviço, e prioridade em transportes mesmo de folga",
        "prioridade em todos os transportes e comunicações a qualquer tempo, inclusive nos dias de folga e de férias",
        "livre porte de arma e, quando em serviço, prioridade em todos os tipos de transporte e comunicação",
        "franco acesso a qualquer imóvel particular, sem mandado, quando em serviço",
        "livre porte de arma, mas só dentro dos limites das rodovias federais",
      ],
      correta: 2,
      explicacao:
        "A identidade funcional confere ao portador livre porte de arma e franco acesso aos locais sob fiscalização do órgão, nos termos da legislação, assegurando, quando em serviço, prioridade em todos os tipos de transporte e comunicação (Decreto 1.655/1995, art. 2º).",
      explicacaoErradas:
        "A prioridade é “quando em serviço”, e não “mesmo de folga” ou “a qualquer tempo”. O acesso franco é aos locais sob fiscalização do órgão, e não “a qualquer imóvel particular, sem mandado”. O decreto não limita o porte “só dentro dos limites das rodovias federais”.",
      pegadinha: "Só a prioridade em transporte e comunicação depende de estar em serviço.",
      conhecimento: "A identidade funcional dos profissionais de segurança tem fé pública e vale em todo o país (Lei 13.675/2018, art. 43).",
    },
    {
      topico: "CTB",
      subassunto: "Suspensão do direito de dirigir",
      dificuldade: 5,
      raciocinio: "Art. 20, XII: a PRF aplica a suspensão prevista de forma específica e comunica ao órgão máximo executivo da União.",
      enunciado:
        "Numa rodovia federal, a PRF autua um condutor por infração cuja penalidade prevista no CTB é multa e suspensão do direito de dirigir. Pelo art. 20 do CTB, quanto à suspensão:",
      alternativas: [
        "só o Detran do estado onde o condutor é habilitado pode aplicá-la",
        "a PRF pode aplicar a suspensão e também a cassação da habilitação, por ser autoridade de trânsito na rodovia",
        "a PRF só aplica multa e advertência, e a suspensão depende de decisão judicial",
        "a PRF a aplica e comunica ao Contran, que é quem registra a penalidade no prontuário do condutor",
        "a PRF a aplica, por ser prevista de forma específica, e comunica ao órgão máximo executivo da União",
      ],
      correta: 4,
      explicacao:
        "Compete à PRF aplicar a penalidade de suspensão do direito de dirigir quando prevista de forma específica para a infração cometida e comunicar a aplicação ao órgão máximo executivo de trânsito da União (CTB, art. 20, XII, incluído pela Lei 14.071/2020).",
      explicacaoErradas:
        "A suspensão não é “só o Detran”: o CTB a atribui também à PRF. A lei não dá à PRF a “cassação”. A suspensão administrativa não “depende de decisão judicial”. A comunicação é ao órgão máximo executivo de trânsito da União, e não ao “Contran”, que é o órgão normativo.",
      pegadinha: "Suspensão específica sim; cassação não.",
      conhecimento: "A PRF também aplica advertência por escrito e multa e adota as medidas administrativas cabíveis (CTB, art. 20, III).",
    },
    {
      topico: "CTB",
      subassunto: "Sinistros de trânsito",
      dificuldade: 4,
      raciocinio: "Art. 20, IV, VII e XIII: levantamento, estudos enviados ao órgão rodoviário e perícia administrativa.",
      enunciado:
        "Após um grave sinistro de trânsito numa rodovia federal, discute-se o papel da PRF. Pelo art. 20 do CTB, ela:",
      alternativas: [
        "só socorre as vítimas, pois o levantamento do local cabe sempre ao órgão rodoviário federal",
        "faz o levantamento e a perícia administrativa do local e estuda as causas dos sinistros",
        "faz a perícia criminal oficial, que substitui o laudo do instituto de criminalística",
        "só registra o sinistro, e as estatísticas cabem ao Contran",
        "envia os estudos sobre as causas apenas ao Judiciário, que decide as medidas",
      ],
      correta: 1,
      explicacao:
        "Compete à PRF efetuar o levantamento dos locais de sinistros e os serviços de atendimento, socorro e salvamento (art. 20, IV), coletar dados e elaborar estudos sobre os sinistros e suas causas, encaminhando-os ao órgão rodoviário federal (VII), e realizar perícia administrativa nos locais (XIII).",
      explicacaoErradas:
        "A PRF não “só socorre”: faz também o levantamento do local. A perícia é “administrativa”, e não a “perícia criminal oficial”. As estatísticas também cabem à PRF, e não só ao “Contran”. Os estudos vão ao órgão rodoviário federal, e não “apenas ao Judiciário”.",
      pegadinha: "PRF faz perícia administrativa, não a perícia criminal oficial.",
      conhecimento: "A Lei 14.599/2023 trocou “acidente” por “sinistro” nesses incisos.",
    },
    {
      topico: "CTB",
      subassunto: "Direito de vizinhança",
      dificuldade: 5,
      raciocinio: "Art. 20, VI: a PRF promove a interdição de construções e instalações não autorizadas.",
      enunciado:
        "Um comerciante ergue, sem autorização, um quiosque de alvenaria junto à pista de uma rodovia federal, atrapalhando a visibilidade dos motoristas. Pelo art. 20 do CTB, a PRF:",
      alternativas: [
        "promove a interdição da instalação não autorizada, zelando pelo direito de vizinhança",
        "nada pode fazer, pois só o Judiciário pode interditar construções",
        "pode demolir o quiosque na hora, sem processo, por ser autoridade de trânsito",
        "só pode multar o comerciante, pois a interdição cabe exclusivamente ao município onde fica o quiosque",
        "deve aguardar pedido do órgão rodoviário para fazer qualquer coisa",
      ],
      correta: 0,
      explicacao:
        "Compete à PRF assegurar a livre circulação nas rodovias federais, podendo pedir ao órgão rodoviário medidas emergenciais, e zelar pelas normas do direito de vizinhança, promovendo a interdição de construções e instalações não autorizadas (CTB, art. 20, VI; Decreto 1.655, art. 1º, VII).",
      explicacaoErradas:
        "A interdição não depende do Judiciário, por isso “só o Judiciário” erra. A lei fala em interdição, e não em “demolir o quiosque na hora”. A interdição não cabe “exclusivamente ao município”. A PRF não precisa “aguardar pedido”: é ela quem pode pedir medidas ao órgão rodoviário.",
      pegadinha: "Interditar, sim; demolir por conta própria, não.",
      conhecimento: "O Decreto 1.655/1995 fala em interdição de construções, obras e instalações não autorizadas.",
    },
    {
      topico: "Decreto 1.655/1995",
      subassunto: "Escolta de autoridades",
      dificuldade: 4,
      raciocinio: "Art. 1º, VIII: segurança e escoltas de autoridades, quando necessário e sob a coordenação do órgão competente.",
      enunciado:
        "Um chefe de Estado estrangeiro em visita oficial vai se deslocar por rodovias federais. Pelo Decreto 1.655/1995, quanto às medidas de segurança e às escoltas nesse deslocamento, a PRF:",
      alternativas: [
        "não atua, pois a segurança de chefes de Estado estrangeiros é só das Forças Armadas",
        "coordena sozinha toda a segurança da visita, por ser a polícia das rodovias",
        "atua só se o próprio chefe de Estado pedir por escrito ao Ministério",
        "atua só nas escoltas de ministros brasileiros, e não de autoridades estrangeiras",
        "executa as medidas quando necessário, sob a coordenação do órgão competente",
      ],
      correta: 4,
      explicacao:
        "Compete à PRF executar medidas de segurança, planejamento e escoltas nos deslocamentos do Presidente da República, Ministros de Estado, chefes de Estado e diplomatas estrangeiros e outras autoridades, quando necessário e sob a coordenação do órgão competente (Decreto 1.655/1995, art. 1º, VIII).",
      explicacaoErradas:
        "A PRF atua, por isso “só das Forças Armadas” erra. Ela não “coordena sozinha”: atua sob a coordenação do órgão competente. A atuação não depende de pedido escrito do próprio chefe de Estado. O decreto inclui chefes de Estado e diplomatas estrangeiros, ao contrário de “só nas escoltas de ministros brasileiros”.",
      pegadinha: "Executa, mas quem coordena é o órgão competente.",
      conhecimento: "O Decreto 11.348/2023 também prevê a segurança nos deslocamentos de altas autoridades, quando solicitada.",
    },
    {
      topico: "Decreto 1.655/1995",
      subassunto: "Tráfico de menores",
      dificuldade: 4,
      raciocinio: "Art. 1º, IX: fiscalização e controle do tráfico de menores nas rodovias federais, com o ECA.",
      enunciado:
        "Numa fiscalização de ônibus interestadual, policiais rodoviários federais desconfiam que uma criança viaja com adultos sem vínculo e sem autorização. Pelo Decreto 1.655/1995, a PRF:",
      alternativas: [
        "não pode agir, pois o tema é exclusivo do Conselho Tutelar",
        "só pode agir se houver ordem judicial prévia de busca da criança",
        "fiscaliza e controla o tráfico de menores, adotando as providências do ECA",
        "só pode agir se a criança tiver menos de 12 anos, por regra expressa do próprio decreto",
        "deve liberar o ônibus e só comunicar o fato à Polícia Federal depois",
      ],
      correta: 2,
      explicacao:
        "Compete à PRF efetuar a fiscalização e o controle do tráfico de menores nas rodovias federais, adotando as providências cabíveis do Estatuto da Criança e do Adolescente (Decreto 1.655/1995, art. 1º, IX).",
      explicacaoErradas:
        "O tema não é “exclusivo do Conselho Tutelar”. A fiscalização não depende de “ordem judicial prévia”. O decreto não fixa idade, por isso “menos de 12 anos” erra. A PRF não deve “liberar o ônibus”: deve adotar as providências do ECA.",
      pegadinha: "Fiscalizar viagem de criança na rodovia federal é tarefa expressa da PRF.",
      conhecimento: "Salvo as exceções da lei, o ECA exige autorização judicial para o menor de 16 anos viajar para fora da comarca onde reside sem os pais ou responsável (art. 83).",
    },
    {
      topico: "CTB",
      subassunto: "Escolta e carga indivisível",
      dificuldade: 5,
      raciocinio: "Art. 20, V: a PRF credencia os serviços de escolta e fiscaliza o transporte de carga indivisível; III: arrecada valores de escolta.",
      enunciado:
        "Uma empresa vai transportar uma peça industrial indivisível por rodovias federais, com escolta. Pelo art. 20 do CTB, cabe à PRF:",
      alternativas: [
        "nada, pois escolta de carga é serviço privado sem fiscalização pública",
        "só escoltar com viaturas próprias, pois a escolta privada é proibida",
        "credenciar os serviços de escolta e fiscalizar o transporte da carga",
        "só autorizar a viagem, cabendo ao Contran fiscalizar a escolta",
        "credenciar a escolta só nas cargas perigosas, e não nas indivisíveis",
      ],
      correta: 2,
      explicacao:
        "Compete à PRF credenciar os serviços de escolta, fiscalizar e adotar medidas de segurança relativas aos serviços de remoção de veículos, escolta e transporte de carga indivisível (CTB, art. 20, V). Ela também arrecada os valores de escolta de veículos de cargas superdimensionadas ou perigosas (III).",
      explicacaoErradas:
        "Há fiscalização pública, por isso “sem fiscalização pública” erra. A escolta privada não é “proibida”: a PRF a credencia. O Contran não fiscaliza escoltas na rodovia, ao contrário de “cabendo ao Contran”. O credenciamento vale também para carga indivisível, e não “só nas cargas perigosas”.",
      pegadinha: "PRF credencia a escolta, não a proíbe.",
      conhecimento: "O Decreto 1.655/1995 também prevê o credenciamento dos serviços de escolta e a fiscalização de cargas indivisíveis (art. 1º, VI).",
    },
    {
      topico: "Decreto 1.655/1995",
      subassunto: "Crimes",
      dificuldade: 5,
      raciocinio: "Art. 1º, X: a PRF colabora e atua na prevenção e repressão de crimes, como contrabando e descaminho.",
      enunciado:
        "Numa fiscalização de rotina, a PRF encontra num caminhão grande quantidade de cigarros estrangeiros proibidos no país. Pelo Decreto 1.655/1995, a atuação da PRF nesse caso:",
      alternativas: [
        "é proibida, pois a PRF só fiscaliza o trânsito nas rodovias",
        "é cabível, pois ela colabora e atua na repressão de crimes como o contrabando",
        "é cabível só se a carga for apreendida por ordem judicial anterior",
        "depende de autorização da Receita Federal antes da abordagem",
        "é cabível só nos crimes contra a vida, e não nos crimes contra a ordem tributária",
      ],
      correta: 1,
      explicacao:
        "Compete à PRF colaborar e atuar na prevenção e repressão aos crimes contra a vida, os costumes, o patrimônio, a ecologia, o meio ambiente, os furtos e roubos de veículos e bens, o tráfico de drogas, o contrabando, o descaminho e os demais crimes previstos em lei (Decreto 1.655/1995, art. 1º, X).",
      explicacaoErradas:
        "A PRF não “só fiscaliza o trânsito”. A atuação no flagrante não depende de “ordem judicial anterior” nem de “autorização da Receita Federal”. O decreto alcança o contrabando, o descaminho e os demais crimes, e não “só nos crimes contra a vida”.",
      pegadinha: "Cigarro proibido é contrabando; mercadoria permitida sem imposto é descaminho.",
      conhecimento: "O art. 58 do Decreto 11.348/2023 atribui à PRF prevenir e reprimir crimes nas rodovias e estradas federais e nas áreas de interesse da União.",
    },
    {
      topico: "CTB",
      subassunto: "Meio ambiente",
      dificuldade: 4,
      raciocinio: "Art. 20, XI: fiscalizar poluentes e ruído dos veículos e apoiar os órgãos ambientais quando solicitado.",
      enunciado:
        "Na rodovia federal, um caminhão solta fumaça preta em excesso, e um órgão ambiental pede apoio à PRF numa operação de fiscalização. Pelo art. 20 do CTB:",
      alternativas: [
        "a PRF fiscaliza a emissão de poluentes do caminhão e pode apoiar o órgão ambiental",
        "só o órgão ambiental fiscaliza a fumaça, e a PRF não pode apoiá-lo nessa operação",
        "a PRF fiscaliza a fumaça, mas nunca apoia operações de fiscalização de outros órgãos públicos",
        "a PRF só fiscaliza o ruído, e não os poluentes",
        "a PRF só pode agir se o caminhão estiver com a carga irregular",
      ],
      correta: 0,
      explicacao:
        "Compete à PRF fiscalizar o nível de emissão de poluentes e ruído produzidos pelos veículos automotores ou pela sua carga, além de dar apoio, quando solicitado, às ações específicas dos órgãos ambientais (CTB, art. 20, XI).",
      explicacaoErradas:
        "Não é “só o órgão ambiental”: o CTB dá a fiscalização também à PRF. Ela apoia os órgãos ambientais quando solicitada, por isso “nunca apoia” erra. A PRF fiscaliza poluentes e ruído, e não “só o ruído”. A carga irregular não é condição.",
      pegadinha: "Poluentes e ruído: PRF fiscaliza; órgão ambiental pede apoio.",
      conhecimento: "A PRF também colabora na prevenção e repressão aos crimes contra o meio ambiente (Decreto 1.655/1995, art. 1º, X).",
    },
    {
      topico: "Constituição",
      subassunto: "Art. 144, § 2º",
      dificuldade: 5,
      raciocinio: "A PRF é órgão permanente, organizado e mantido pela União, estruturado em carreira, para o patrulhamento ostensivo das rodovias federais.",
      enunciado:
        "Sobre a Polícia Rodoviária Federal no texto atual do art. 144 da Constituição, é correto afirmar que ela:",
      alternativas: [
        "é órgão temporário, criado por decreto presidencial, e pode ser extinta a qualquer tempo por ato do Executivo",
        "é organizada pela União, mas mantida pelos estados onde atua",
        "exerce, com exclusividade, as funções de polícia judiciária da União",
        "é órgão permanente da União, estruturado em carreira, para o patrulhamento ostensivo das rodovias federais",
        "faz o patrulhamento ostensivo das rodovias, ferrovias e hidrovias federais, por ser órgão permanente da União",
      ],
      correta: 3,
      explicacao:
        "A polícia rodoviária federal, órgão permanente, organizado e mantido pela União e estruturado em carreira, destina-se, na forma da lei, ao patrulhamento ostensivo das rodovias federais (CF, art. 144, § 2º).",
      explicacaoErradas:
        "Ela é órgão permanente, e não “órgão temporário”. É mantida pela União, e não “pelos estados”. A polícia judiciária da União é exercida pela Polícia Federal, e não pela PRF. O texto atual fala só em rodovias, e não em “ferrovias e hidrovias”: as ferrovias federais são da polícia ferroviária federal (§ 3º).",
      pegadinha: "No texto atual, ferrovias são do § 3º, da polícia ferroviária federal.",
      conhecimento: "A PEC 18/2025 propõe mudanças nesse ponto do art. 144; se for promulgada, confira o novo texto.",
    },
    {
      topico: "Decreto 11.348/2023",
      subassunto: "Áreas de interesse da União",
      dificuldade: 5,
      raciocinio: "Art. 58, I: crimes nas rodovias e estradas federais e nas áreas de interesse da União.",
      enunciado:
        "Pelo inciso I do art. 58 do Anexo I do Decreto 11.348/2023, o policiamento, a prevenção e a repressão de crimes pela PRF alcançam:",
      alternativas: [
        "só as rodovias federais pavimentadas, excluídas as estradas federais",
        "as rodovias e estradas federais e as áreas de interesse da União",
        "todas as vias do país, inclusive as municipais, sem outra condição",
        "só os crimes de trânsito, pois os outros crimes cabem à Polícia Civil",
        "só as faixas de fronteira, por serem áreas de segurança nacional",
      ],
      correta: 1,
      explicacao:
        "O art. 58, I, atribui à PRF planejar, coordenar e executar o policiamento, a prevenção e a repressão de crimes nas rodovias e estradas federais e nas áreas de interesse da União.",
      explicacaoErradas:
        "O decreto fala em rodovias e estradas federais, e não “só as rodovias federais pavimentadas”. Ele não alcança “todas as vias do país” sem condição. Não se limita aos “crimes de trânsito”. Não se restringe às “faixas de fronteira”.",
      pegadinha: "Rodovias, estradas federais e áreas de interesse da União.",
      conhecimento: "O CTB fala em competência da PRF “no âmbito das rodovias e estradas federais” (art. 20, caput).",
    },
  ],
};
