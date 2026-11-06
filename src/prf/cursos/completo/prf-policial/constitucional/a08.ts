import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-08",
  resumo: {
    ideia:
      "O Brasil é uma federação: o poder se divide entre União, Estados, DF e Municípios, todos autônomos. A CF diz o que cada um pode fazer.",
    itens: [
      {
        termo: "Federação",
        faz: "União indissolúvel de entes autônomos, baseada numa Constituição. Não existe direito de sair.",
        pista: "Confederação é outra coisa: nasce de tratado, e os membros seguem soberanos.",
      },
      {
        termo: "Autonomia",
        faz: "Quatro capacidades: auto-organização, autolegislação, autoadministração e autogoverno.",
        pista: "Soberania é da República Federativa do Brasil.",
      },
      {
        termo: "Origem do Brasil",
        faz: "Federação por segregação, em movimento centrífugo. Mesmo assim, o poder fica concentrado na União.",
      },
      {
        termo: "Novo Estado",
        faz: "Plebiscito com a população interessada e lei complementar do Congresso, que pode não ser editada.",
      },
      {
        termo: "Novo Município",
        faz: "Lei estadual, no período definido por lei complementar federal, com estudos de viabilidade e plebiscito.",
      },
      {
        termo: "Distrito Federal",
        faz: "Lei Orgânica, sem divisão em Municípios, com competências legislativas de Estado e Município.",
        pista: "A União organiza e mantém as polícias e os bombeiros do DF.",
      },
      {
        termo: "Territórios",
        faz: "Não são entes da federação: integram a União. O Governador é nomeado, e há 4 Deputados Federais e nenhum Senador.",
      },
      {
        termo: "Prefeito e Vereador",
        faz: "Prefeito tem foro no TJ, no TRF ou no TRE, conforme o crime. Vereador só tem imunidade por palavras, no município.",
      },
      {
        termo: "Art. 19",
        faz: "Todos os entes são proibidos de estabelecer cultos, recusar fé a documentos públicos e criar distinções entre brasileiros.",
      },
      {
        termo: "Bens da União",
        faz: "Art. 20: rios que banham mais de um Estado, praias marítimas, terras indígenas e outros. A faixa de fronteira vai até 150 km.",
      },
      {
        termo: "Competências",
        faz: "Art. 21 exclusiva, art. 22 privativa, art. 23 comum, art. 24 concorrente, art. 30 dos Municípios.",
        pista: "Só a privativa pode ser delegada, por lei complementar.",
      },
    ],
    cuidado:
      "Comum é para agir, e concorrente é para legislar. Legislar sobre trânsito é privativo da União, mas a educação para o trânsito é comum.",
  },
  questoes: [
    {
      topico: "Federação",
      subassunto: "Indissolubilidade",
      dificuldade: 4,
      raciocinio:
        "Autonomia não é soberania.",
      enunciado:
        "Deputados de um Estado aprovam a realização de um plebiscito para que o Estado saia da Federação e vire um país independente. Segundo a CF, essa medida",
      alternativas: [
        "é válida, pois os Estados têm soberania e podem deixar a União",
        "depende apenas de lei complementar aprovada pelo Congresso Nacional",
        "é inconstitucional, pois a federação é indissolúvel e não há secessão",
        "é válida, se a maioria da população do Estado aprovar no plebiscito",
        "só é possível com um acordo entre o Estado, a União e os demais Estados da região",
      ],
      correta: 2,
      explicacao:
        "O art. 1º fala em união indissolúvel dos Estados, Municípios e DF. A forma federativa é cláusula pétrea (art. 60, § 4º, I), e a União pode intervir para manter a integridade nacional (art. 34, I).",
      explicacaoErradas:
        "“Têm soberania” confunde com autonomia. “Lei complementar” serve a mudanças internas, e não à saída. “Maioria da população” não muda a regra. “Acordo” lembra uma confederação, que não é o caso do Brasil.",
      pegadinha:
        "Os Estados têm autonomia, mas não têm direito de secessão.",
      conhecimento:
        "Na confederação, a união vem de um tratado, e os membros mantêm a soberania e podem se desligar.",
    },
    {
      topico: "Federação",
      subassunto: "Classificação das federações",
      dificuldade: 5,
      raciocinio:
        "Uma coisa é a origem, e outra é onde o poder está hoje.",
      enunciado:
        "Sobre a classificação da federação brasileira adotada pela doutrina, é certo que ela surgiu",
      alternativas: [
        "por segregação, em movimento centrífugo, mas concentra o poder na União",
        "por agregação, quando Estados soberanos cederam a sua soberania à União",
        "por segregação, em movimento centrípeto, e concentra o poder nos Estados",
        "por agregação, em movimento centrífugo, e reparte o poder de forma dual",
        "por tratado entre as províncias, com o direito de sair quando elas quiserem",
      ],
      correta: 0,
      explicacao:
        "O Brasil era um Estado unitário e dividiu o poder de dentro para fora: federação por segregação, em movimento centrífugo. Mesmo assim, o poder segue concentrado no governo central, o que a doutrina chama de federação centrípeta.",
      explicacaoErradas:
        "“Agregação” descreve a origem dos Estados Unidos. “Movimento centrípeto” é o da agregação, e o poder não se concentra nos Estados. “Forma dual” é a federação clássica. “Tratado” descreve confederação.",
      pegadinha:
        "Movimento centrífugo fala da origem, e federação centrípeta fala da concentração de poder.",
      conhecimento:
        "O Brasil adota o federalismo de cooperação, em que os entes atuam em conjunto em certas áreas.",
    },
    {
      topico: "Federação",
      subassunto: "Autonomia dos entes",
      dificuldade: 4,
      raciocinio:
        "Associe cada capacidade à sua definição.",
      enunciado:
        "A autonomia dos entes federativos se manifesta em quatro capacidades. Sobre elas, é correto afirmar que",
      alternativas: [
        "a auto-organização dos Municípios ocorre por meio de Constituição própria",
        "o autogoverno é a capacidade de editar leis próprias, sem interferir na União",
        "a soberania é atributo da União, que a divide com os Estados e os Municípios",
        "a autoadministração é o poder de eleger os próprios governantes locais",
        "a auto-organização dos Estados se faz por meio das suas Constituições",
      ],
      correta: 4,
      explicacao:
        "Os Estados se organizam por Constituições, e os Municípios e o DF, por Leis Orgânicas. Autolegislação é editar leis, autoadministração é prestar serviços e gerir, e autogoverno é eleger os próprios representantes.",
      explicacaoErradas:
        "“Constituição própria” não serve ao Município, que tem Lei Orgânica. “Editar leis próprias” descreve a autolegislação. “Soberania” é da República Federativa do Brasil. “Eleger” descreve o autogoverno.",
      pegadinha:
        "A União tem autonomia, e a soberania é da República Federativa do Brasil.",
      conhecimento:
        "A União representa o país nas relações internacionais, mas isso não a torna soberana.",
    },
    {
      topico: "Organização do Estado",
      subassunto: "Novos Estados",
      dificuldade: 5,
      raciocinio:
        "O plebiscito é condição, e a lei é decisão política.",
      enunciado:
        "Uma região quer se separar de um Estado para formar um novo Estado. O plebiscito foi feito e o resultado foi favorável. Sobre o que vem depois, é certo que",
      alternativas: [
        "o Congresso é obrigado a editar a lei complementar que cria o Estado",
        "o Congresso pode não editar a lei complementar, pois a decisão é dele",
        "o novo Estado já existe, e basta o registro feito pela Assembleia Legislativa",
        "o resultado vale só se a votação tiver ocorrido apenas na região interessada",
        "a criação depende apenas de lei ordinária sancionada pelo Presidente",
      ],
      correta: 1,
      explicacao:
        "O art. 18, § 3º, exige plebiscito e lei complementar do Congresso. O plebiscito favorável é condição, mas editar a lei é decisão política do Congresso. A população diretamente interessada é toda a do Estado atingido, e não só a da região.",
      explicacaoErradas:
        "“Obrigado a editar” nega a liberdade do Congresso. “Já existe” dispensa a lei. “Apenas na região” contraria o sentido de população diretamente interessada. “Lei ordinária” erra a espécie.",
      pegadinha:
        "Plebiscito contrário encerra o processo. Plebiscito favorável não obriga o Congresso.",
      conhecimento:
        "As Assembleias Legislativas envolvidas são ouvidas (art. 48, VI), mas a opinião delas não obriga o Congresso.",
    },
    {
      topico: "Organização do Estado",
      subassunto: "Novos Municípios",
      dificuldade: 5,
      raciocinio:
        "Liste os quatro requisitos do § 4º.",
      enunciado:
        "Uma lei estadual criou um município depois de plebiscito na região, mas ainda não existe a lei complementar federal que define o período para isso. Essa lei é",
      alternativas: [
        "válida, pois a criação de municípios é tema só do Estado",
        "válida, desde que o Governador a sancione no prazo legal",
        "inválida, pois municípios são criados por lei complementar do Congresso Nacional",
        "inválida, pois falta o período fixado por lei complementar federal",
        "válida, pois o plebiscito favorável dispensa qualquer outro requisito",
      ],
      correta: 3,
      explicacao:
        "O § 4º do art. 18 exige lei estadual, dentro do período fixado por lei complementar federal, plebiscito com as populações dos Municípios envolvidos e Estudos de Viabilidade Municipal divulgados antes.",
      explicacaoErradas:
        "“Tema só do Estado” esquece a lei complementar federal. “Sancione” não supre o período. “Criados por lei complementar do Congresso” troca a regra: a criação é por lei estadual. “Dispensa qualquer outro requisito” contraria o § 4º.",
      pegadinha:
        "Estado novo: lei complementar federal. Município novo: lei estadual.",
      conhecimento:
        "O art. 96 do ADCT convalidou os municípios cuja lei foi publicada até 31 de dezembro de 2006.",
    },
    {
      topico: "Organização do Estado",
      subassunto: "Distrito Federal",
      dificuldade: 5,
      raciocinio:
        "Uma regra está no art. 32, e a outra é súmula vinculante.",
      enunciado:
        "Uma lei do Distrito Federal quis dividir o DF em municípios, e outra fixou os vencimentos da sua polícia militar. Segundo a CF e o STF, as duas leis",
      alternativas: [
        "são válidas, pois o DF tem as mesmas competências dos Estados",
        "são válidas, pois a Lei Orgânica do DF pode tratar desses dois temas",
        "são inválidas, pois a divisão é vedada e os vencimentos cabem à União",
        "só a primeira é inválida, pois a segunda trata de servidor do próprio DF",
        "só a segunda é inválida, pois a divisão depende apenas de plebiscito",
      ],
      correta: 2,
      explicacao:
        "O art. 32 proíbe dividir o DF em Municípios. A SV 39 diz que compete privativamente à União legislar sobre vencimentos das polícias civil e militar e do corpo de bombeiros militar do DF.",
      explicacaoErradas:
        "“As mesmas competências dos Estados” não libera nenhuma das duas leis. “Lei Orgânica” também não pode. “Servidor do próprio DF” esquece a SV 39. “Apenas de plebiscito” contraria o art. 32.",
      pegadinha:
        "A União organiza e mantém essas forças, embora elas sirvam ao DF.",
      conhecimento:
        "O DF acumula as competências legislativas reservadas a Estados e Municípios (art. 32, § 1º).",
    },
    {
      topico: "Organização do Estado",
      subassunto: "Territórios Federais",
      dificuldade: 4,
      raciocinio:
        "Território é parte da União, e não ente da federação.",
      enunciado:
        "Uma lei complementar criou um Território Federal. Sobre esse Território, segundo a CF, é certo que",
      alternativas: [
        "é um ente federativo com autonomia política igual à do DF",
        "o seu Governador é eleito pelo voto direto, como nos Estados",
        "ele elege três Senadores, como os Estados e o Distrito Federal",
        "as contas do seu Governo são julgadas pela sua própria Câmara Territorial",
        "integra a União, e o Governador é nomeado após aprovação do Senado",
      ],
      correta: 4,
      explicacao:
        "O art. 18, § 2º, diz que os Territórios integram a União. O Governador é nomeado pelo Presidente após aprovação do Senado (arts. 52, III, “c”, e 84, XIV), e as contas vão ao Congresso, com parecer prévio do TCU (art. 33, § 2º).",
      explicacaoErradas:
        "“Ente federativo” não cabe, pois Território não tem autonomia política. “Voto direto” ignora a nomeação. “Três Senadores” erra: ele não elege Senadores. “Própria Câmara Territorial” contraria o art. 33, § 2º.",
      pegadinha:
        "Território elege 4 Deputados Federais, mas nenhum Senador.",
      conhecimento:
        "Hoje o Brasil não tem Territórios Federais.",
    },
    {
      topico: "Organização do Estado",
      subassunto: "Foro do Prefeito",
      dificuldade: 5,
      raciocinio:
        "O tribunal muda conforme a Justiça do crime.",
      enunciado:
        "Um prefeito é acusado de desviar verba federal sujeita à prestação de contas perante órgão federal. Segundo a jurisprudência, o julgamento cabe",
      alternativas: [
        "ao Tribunal Regional Federal",
        "à Câmara Municipal do próprio município",
        "ao Tribunal de Justiça do Estado",
        "a um juiz federal de primeira instância",
        "ao Superior Tribunal de Justiça",
      ],
      correta: 0,
      explicacao:
        "A Súmula 208 do STJ leva o caso à Justiça Federal. A Súmula 702 do STF diz que o TJ só julga prefeitos em crimes da Justiça comum estadual. Nos demais casos, a competência é do tribunal de segundo grau respectivo, aqui o TRF.",
      explicacaoErradas:
        "“Câmara Municipal” julga infrações político-administrativas. “Tribunal de Justiça” vale para crimes estaduais. “Juiz federal de primeira instância” esquece o foro. “Superior Tribunal de Justiça” julga Governadores, e não prefeitos.",
      pegadinha:
        "Se a verba já foi incorporada ao patrimônio municipal, a competência é da Justiça estadual (Súmula 209 do STJ).",
      conhecimento:
        "Nos crimes eleitorais, o prefeito responde perante o TRE.",
    },
    {
      topico: "Organização do Estado",
      subassunto: "Imunidade do Vereador",
      dificuldade: 5,
      raciocinio:
        "Dois limites: mandato e município.",
      enunciado:
        "Em sessão da Câmara, um vereador criticou duramente uma empresa por causa de um contrato do município. Depois, em outro Estado, repetiu ofensas em entrevista sem ligação com o mandato. Sobre a imunidade dele,",
      alternativas: [
        "ela o protege nos dois casos, pois vale em todo o território nacional",
        "ela alcança a fala na Câmara, mas não a entrevista feita fora do município",
        "ela não existe, pois vereador só tem a imunidade formal quanto à prisão",
        "ela vale apenas se a Câmara Municipal autorizar o processo criminal contra ele",
        "ela o protege nos dois casos, desde que ele se retrate em até 30 dias",
      ],
      correta: 1,
      explicacao:
        "O art. 29, VIII, dá aos Vereadores inviolabilidade por opiniões, palavras e votos, no exercício do mandato e na circunscrição do Município. É só imunidade material: a CF não dá a eles imunidade formal.",
      explicacaoErradas:
        "“Todo o território nacional” vale para parlamentares federais. “Só a imunidade formal” inverte a regra. “Autorizar o processo” não existe para ele. “Se retrate” não tem base.",
      pegadinha:
        "Deputados e Senadores têm imunidade formal. Vereadores, não.",
      conhecimento:
        "O STF exige pertinência com o mandato, mesmo dentro do município (Tema 469).",
    },
    {
      topico: "Organização do Estado",
      subassunto: "Vedações federativas",
      dificuldade: 4,
      raciocinio:
        "O art. 19 vale para todos os entes.",
      enunciado:
        "Uma lei estadual deu pontos extras em concurso a quem nasceu naquele Estado. Outra, de um município, mandou recusar documentos públicos emitidos em outros Estados. Segundo a CF,",
      alternativas: [
        "as duas valem, pois cada ente cuida dos próprios concursos e serviços",
        "só a estadual é inválida, pois concurso é tema exclusivo da União",
        "só a municipal é inválida, pois o Estado pode proteger os seus nascidos",
        "as duas são inválidas, pois o art. 19 veda distinções e a recusa de fé",
        "as duas dependem de autorização do Senado para produzir efeitos",
      ],
      correta: 3,
      explicacao:
        "O art. 19 veda a todos os entes recusar fé aos documentos públicos (inciso II) e criar distinções entre brasileiros ou preferências entre si (inciso III).",
      explicacaoErradas:
        "“As duas valem” ignora o art. 19. “Tema exclusivo da União” não é o motivo e deixa a outra lei de fora. “Proteger os seus nascidos” é a distinção proibida. “Autorização do Senado” não existe.",
      pegadinha:
        "A proibição alcança União, Estados, DF e Municípios.",
      conhecimento:
        "O inciso I separa o Estado das igrejas, mas permite, na forma da lei, a colaboração de interesse público.",
    },
    {
      topico: "Organização do Estado",
      subassunto: "Bens da União",
      dificuldade: 5,
      raciocinio:
        "Lembre a exceção das ilhas costeiras.",
      enunciado:
        "Sobre os bens da União e a faixa de fronteira no art. 20 da CF, é correto afirmar que",
      alternativas: [
        "todas as ilhas costeiras são da União, mesmo as que têm sede de Município",
        "os rios são sempre dos Estados, mesmo quando banham mais de um deles",
        "a faixa de fronteira tem até 150 km de largura e a ocupação é regulada em lei",
        "as terras ocupadas pelos indígenas pertencem a eles, sem relação com a União",
        "as praias marítimas são bens dos Municípios onde elas estão localizadas",
      ],
      correta: 2,
      explicacao:
        "O § 2º define a faixa de fronteira como a de até 150 km ao longo das fronteiras terrestres, fundamental para a defesa do território, e manda a lei regular a sua ocupação e utilização.",
      explicacaoErradas:
        "“Todas as ilhas costeiras” esquece a exclusão do inciso IV. “Sempre dos Estados” contraria o inciso III. “Sem relação com a União” ignora o inciso XI. “Bens dos Municípios” contraria o inciso IV, que lista as praias marítimas.",
      pegadinha:
        "A faixa de fronteira não é toda da União: só as terras devolutas indispensáveis à defesa estão no inciso II.",
      conhecimento:
        "As vias federais de comunicação também aparecem no inciso II, como razão para que terras devolutas sejam da União.",
    },
    {
      topico: "Repartição de competências",
      subassunto: "Competência privativa",
      dificuldade: 5,
      raciocinio:
        "Trânsito está na lista do art. 22.",
      enunciado:
        "Uma lei estadual mudou, para o seu território, a velocidade máxima das rodovias, sem nenhuma autorização federal. Segundo a CF, essa lei",
      alternativas: [
        "é válida, pois trânsito é assunto de competência comum dos entes",
        "é válida, pois os Estados têm competência suplementar em temas locais",
        "é válida, pois o Estado exerce competência plena em caso de omissão",
        "é inválida, pois trânsito é assunto de competência exclusiva dos Municípios",
        "é inválida, pois legislar sobre trânsito cabe privativamente à União",
      ],
      correta: 4,
      explicacao:
        "O art. 22, XI, dá à União a competência privativa para legislar sobre trânsito e transporte. Só lei complementar poderia autorizar os Estados a legislar sobre questões específicas (art. 22, parágrafo único).",
      explicacaoErradas:
        "“Competência comum” confunde com o art. 23, XII, que trata da educação para a segurança do trânsito. “Suplementar” e “plena” são regras da competência concorrente. “Exclusiva dos Municípios” não tem base.",
      pegadinha:
        "A exclusiva (art. 21) não se delega. A privativa (art. 22) pode ser delegada por lei complementar.",
      conhecimento:
        "A SV 46 usa a mesma lógica: definir crimes de responsabilidade e o seu processo é tema privativo da União.",
    },
    {
      topico: "Repartição de competências",
      subassunto: "Competência comum",
      dificuldade: 4,
      raciocinio:
        "Competência comum é de todos os entes e é para agir.",
      enunciado:
        "A União, um Estado e um município querem fazer juntos uma campanha de educação para a segurança no trânsito. Sobre essa atuação, segundo o art. 23 da CF,",
      alternativas: [
        "só a União pode agir, pois o tema está na lista do art. 21",
        "os três podem agir, e leis complementares fixam normas de cooperação",
        "só o Município pode agir, pois a campanha é de interesse local",
        "os três só podem agir depois de um decreto do Presidente da República",
        "só os Estados podem agir, pois é tema da competência residual deles",
      ],
      correta: 1,
      explicacao:
        "O art. 23 lista competências comuns a todos os entes, como a política de educação para a segurança do trânsito (inciso XII). O parágrafo único prevê leis complementares para a cooperação entre eles.",
      explicacaoErradas:
        "“Só a União” ignora o art. 23. “Só o Município” e “só os Estados” excluem entes da lista. “Decreto do Presidente” não é condição.",
      pegadinha:
        "Comum é para agir. Concorrente é para legislar.",
      conhecimento:
        "O Município não aparece no caput do art. 24, mas pode suplementar a legislação federal e a estadual no que couber (art. 30, II).",
    },
    {
      topico: "Repartição de competências",
      subassunto: "Competência concorrente",
      dificuldade: 5,
      raciocinio:
        "Lembre o verbo do § 4º do art. 24.",
      enunciado:
        "Sem lei federal sobre um tema do art. 24, um Estado editou lei completa sobre ele. Anos depois, veio a lei federal de normas gerais, que contraria parte da lei estadual. Essa parte",
      alternativas: [
        "foi revogada pela lei federal e não volta a valer em nenhuma hipótese",
        "segue valendo, pois a lei estadual é mais antiga que a lei federal",
        "torna a lei federal inconstitucional, por invasão da autonomia do Estado",
        "tem a sua eficácia suspensa, naquilo em que contrariar a lei federal",
        "deixa de valer só depois de uma declaração feita pelo STF em ação direta",
      ],
      correta: 3,
      explicacao:
        "O § 3º dá ao Estado competência legislativa plena se não houver lei federal sobre normas gerais. O § 4º diz que a lei federal posterior suspende a eficácia da lei estadual, no que lhe for contrário.",
      explicacaoErradas:
        "“Revogada” erra o efeito: a lei federal suspende. “Mais antiga” não prevalece. “Inconstitucional” ignora o § 4º. “Declaração feita pelo STF” não é necessária.",
      pegadinha:
        "Suspende, e não revoga: se a lei federal cair, a estadual volta a ter eficácia.",
      conhecimento:
        "O art. 25, § 1º, reserva aos Estados as competências que a CF não lhes veda.",
    },
  ],
};
