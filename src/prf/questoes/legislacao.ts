import type { QuestaoPrf } from "../../data/prf";

export const QUESTOES_PRF_LEG: QuestaoPrf[] = [
  {
    id: "prf-leg-001",
    materia: "leg",
    topico: "Art. 144 da Constituição: perfil constitucional da PRF",
    subassunto: "Redação literal do § 2º: natureza e destinação da PRF",
    dificuldade: 4,
    raciocinio: "Cobrança literal: comparar cada descrição com o texto do § 2º e achar o elemento trocado.",
    enunciado:
      "Num simulado do curso de formação, pede-se a descrição que reproduz a redação vigente do art. 144, § 2º, da Constituição. Segundo esse dispositivo, a polícia rodoviária federal é órgão",
    alternativas: [
      "permanente, organizado e mantido pela União e estruturado em carreira, destinado, na forma da lei, à polícia ostensiva e à preservação da ordem pública nas rodovias federais.",
      "permanente, organizado e mantido pela União e estruturado em carreira, destinado, na forma da lei, ao patrulhamento ostensivo das rodovias federais e estaduais.",
      "permanente, organizado e mantido pela União e estruturado em carreira, destinado, na forma da lei, ao patrulhamento ostensivo das rodovias federais.",
      "permanente, organizado e mantido pela União e subordinado ao Governador do Estado em que atua, destinado, na forma da lei, ao patrulhamento ostensivo das rodovias federais.",
      "permanente, organizado e mantido pela União e estruturado em carreira, destinado, na forma da lei, à polícia judiciária nas rodovias federais.",
    ],
    correta: 2,
    explicacao:
      "O § 2º do art. 144, com a redação da EC 19/1998, define a PRF como órgão permanente, organizado e mantido pela União e estruturado em carreira, destinado, na forma da lei, ao patrulhamento ostensivo das rodovias federais. A descrição correta reproduz exatamente esses elementos, sem acréscimos.",
    explicacaoErradas:
      "A que fala em polícia ostensiva e preservação da ordem pública usa a fórmula das polícias militares (§ 5º). A que acrescenta as rodovias estaduais amplia o âmbito do § 2º, que se limita às rodovias federais. A que subordina a PRF ao Governador aplica o § 6º, que só alcança polícias militares, bombeiros militares, polícias civis e polícias penais estaduais e distrital. A que fala em polícia judiciária troca o patrulhamento pela função da polícia federal e das polícias civis (§§ 1º, IV, e 4º).",
    pegadinha:
      "Quatro descrições começam com a mesma frase do § 2º e o erro está no fim; a fórmula das polícias militares, polícia ostensiva e preservação da ordem pública, parece sinônimo de patrulhamento ostensivo, mas é de outro parágrafo.",
    conhecimento:
      "Art. 144, § 2º (EC 19/1998): natureza e destinação da PRF; contraste com os §§ 1º, 4º, 5º e 6º.",
    origem: "banco",
  },
  {
    id: "prf-leg-002",
    materia: "leg",
    topico: "Art. 144 da Constituição: perfil constitucional da PRF",
    subassunto: "Polícia judiciária da União, polícias civis e contrabando e descaminho",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: confrontar cada uma com os §§ 1º, 2º e 4º do art. 144 e combinar os resultados.",
    enunciado:
      "Sobre a repartição de funções entre as polícias do art. 144 da Constituição, analise as afirmativas.\n\nI. A exclusividade do § 1º, IV, refere-se às funções de polícia judiciária da União; as polícias civis exercem a polícia judiciária nos Estados, ressalvada a competência da União.\nII. Ao prevenir e reprimir o contrabando e o descaminho, a polícia federal atua sem prejuízo da ação fazendária e de outros órgãos públicos nas respectivas áreas de competência.\nIII. Por ser polícia da União, a PRF exerce, concorrentemente com a polícia federal, a polícia judiciária da União nos crimes cometidos nas rodovias federais.\nIV. Às polícias civis incumbem as funções de polícia judiciária e a apuração das infrações penais, inclusive as militares, ressalvada a competência da União.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II, apenas.", "I, II e IV, apenas.", "II e III, apenas.", "I, II e III, apenas."],
    correta: 0,
    explicacao:
      "A afirmativa I está correta: o § 1º, IV, dá à polícia federal, com exclusividade, as funções de polícia judiciária da União, e o § 4º deixa às polícias civis a polícia judiciária, ressalvada a competência da União. A II reproduz o § 1º, II: a repressão ao contrabando e ao descaminho pela polícia federal se faz sem prejuízo da ação fazendária e de outros órgãos públicos. Estão corretas, portanto, apenas I e II.",
    explicacaoErradas:
      "A afirmativa III está errada: a PRF se destina ao patrulhamento ostensivo das rodovias federais (§ 2º) e não exerce polícia judiciária; a da União é exclusiva da polícia federal. A IV também: o § 4º exclui das polícias civis a apuração das infrações penais militares (“exceto as militares”). Toda combinação com III ou IV está errada, e a que traz só a II deixa de fora a I, que é verdadeira.",
    pegadinha:
      "A afirmativa III soa lógica, pois uma polícia da União faria a polícia judiciária da União; mas o § 1º, IV, dá essa função com exclusividade à polícia federal. E a IV troca o “exceto as militares” do § 4º por “inclusive”.",
    conhecimento:
      "Art. 144, § 1º, II e IV (polícia federal), § 2º (PRF) e § 4º (polícias civis).",
    origem: "banco",
  },
  {
    id: "prf-leg-003",
    materia: "leg",
    topico: "Art. 144 da Constituição: perfil constitucional da PRF",
    subassunto: "Ferrovias federais no texto em vigor (§ 3º) e emendas ao art. 144",
    dificuldade: 4,
    raciocinio: "Aplicação de dispositivo: identificar o órgão que o texto em vigor destina às ferrovias federais e descartar emendas com efeitos trocados.",
    enunciado:
      "Um trecho de ferrovia federal corre paralelo a uma rodovia federal e a cruza em nível em dois pontos. Pelo texto em vigor do art. 144 da Constituição, o patrulhamento ostensivo dessa ferrovia cabe",
    alternativas: [
      "à PRF, porque a EC 19/1998, ao dar nova redação ao § 2º, estendeu o patrulhamento às ferrovias federais.",
      "à polícia federal, porque a ferrovia é bem da União, e o § 1º, I, trata das infrações contra esses bens.",
      "às polícias militares, porque o § 5º lhes atribui a polícia ostensiva em todo o território do Estado.",
      "à polícia ferroviária federal, órgão que o § 3º estrutura no mesmo modelo constitucional usado para a PRF.",
      "à polícia penal federal, que a EC 104/2019 incluiu no caput no lugar da polícia ferroviária federal.",
    ],
    correta: 3,
    explicacao:
      "No texto em vigor, o § 3º do art. 144 destina a polícia ferroviária federal, que continua no inciso III do caput, ao patrulhamento ostensivo das ferrovias federais, no mesmo modelo do § 2º: órgão permanente, organizado e mantido pela União e estruturado em carreira. A PEC 18/2025, em tramitação no Congresso em 2026, propõe estender a atuação da PRF às ferrovias e hidrovias; até ser promulgada, vale o texto atual.",
    explicacaoErradas:
      "A EC 19/1998 deu a redação atual ao § 2º, mas manteve a PRF nas rodovias federais. O § 1º, I, trata da apuração de infrações em detrimento de bens da União, que é investigação, e não patrulhamento ostensivo. A polícia ostensiva das polícias militares (§ 5º) não alcança o que o § 3º reservou a um órgão federal. E a EC 104/2019 acrescentou as polícias penais ao caput, no inciso VI, sem retirar a polícia ferroviária federal do inciso III.",
    pegadinha:
      "As emendas citadas existem de verdade: a EC 19/1998 reescreveu o § 2º e a EC 104/2019 mexeu no caput. O erro está no efeito atribuído a cada uma.",
    conhecimento:
      "Art. 144, caput, III e VI, e §§ 1º, 2º, 3º e 5º; EC 19/1998 e EC 104/2019; PEC 18/2025 ainda não promulgada.",
    origem: "banco",
  },
  {
    id: "prf-leg-004",
    materia: "leg",
    topico: "Art. 144 da Constituição: perfil constitucional da PRF",
    subassunto: "Subordinação aos Governadores (§ 6º) e a posição da PRF",
    dificuldade: 5,
    raciocinio: "Caso concreto: verificar se o § 6º alcança a PRF e separar a conclusão certa das conclusões com fundamento trocado.",
    enunciado:
      "Diante de uma onda de assaltos a ônibus, um Governador edita decreto que põe sob o comando-geral da polícia militar o efetivo da PRF lotado no Estado, enquanto durar a crise. Esse decreto é",
    alternativas: [
      "válido, porque o § 6º subordina aos Governadores os órgãos de segurança pública que atuam no território estadual.",
      "inválido, porque a PRF não figura entre os órgãos que o § 6º subordina aos Governadores dos Estados, do DF e dos Territórios.",
      "válido, porque a PRF, como as polícias militares, é força auxiliar e reserva do Exército e pode ser mobilizada pelo Estado.",
      "válido, desde que fundado na lei do § 7º, que disciplina a organização e o funcionamento dos órgãos de segurança pública.",
      "inválido apenas por vício de forma, porque a subordinação dependeria de lei estadual aprovada pela Assembleia Legislativa.",
    ],
    correta: 1,
    explicacao:
      "O § 6º do art. 144 subordina aos Governadores as polícias militares e os corpos de bombeiros militares, forças auxiliares e reserva do Exército, junto com as polícias civis e as polícias penais estaduais e distrital. A PRF não está nessa lista: é órgão organizado e mantido pela União (§ 2º), na estrutura do Ministério da Justiça e Segurança Pública. Nenhum ato estadual, decreto ou lei, pode colocá-la sob o comando do Governador.",
    explicacaoErradas:
      "O § 6º não alcança todos os órgãos que atuam no território estadual, só os que enumera. A condição de força auxiliar e reserva do Exército é das polícias militares e dos bombeiros militares, e não da PRF. A lei do § 7º organiza o funcionamento dos órgãos de segurança pública e não autoriza transferir ao Estado o comando de um órgão federal. E a tese do vício de forma não salva o ato: nem lei estadual poderia subordinar a PRF ao Governador.",
    pegadinha:
      "Duas alternativas dizem “inválido”; uma delas aponta só um vício de forma, como se lei estadual pudesse fazer a subordinação, e nem lei estadual pode.",
    conhecimento:
      "Art. 144, §§ 2º, 6º e 7º; posição da PRF na estrutura da União.",
    origem: "banco",
  },
  {
    id: "prf-leg-005",
    materia: "leg",
    topico: "Art. 144 da Constituição: perfil constitucional da PRF",
    subassunto: "Subsídio em parcela única (§ 9º e art. 39, § 4º)",
    dificuldade: 4,
    raciocinio: "Aplicação de dispositivo: confrontar a parcela criada pelo projeto com a vedação do art. 39, § 4º, a que o § 9º remete.",
    enunciado:
      "Um projeto de lei federal cria, para os policiais rodoviários federais, uma gratificação mensal por atuação em trechos de alta periculosidade, paga além do subsídio. À luz do art. 144, § 9º, da Constituição, o projeto é",
    alternativas: [
      "compatível, porque o § 9º alcança só os servidores policiais das polícias estaduais e distrital.",
      "compatível, desde que a soma do subsídio com a gratificação respeite o teto do art. 37, XI.",
      "incompatível, porque o subsídio só pode mudar na revisão geral anual, vedado outro reajuste.",
      "compatível, se a parcela for paga como prêmio anual, e não como gratificação mensal.",
      "incompatível, porque o subsídio é parcela única, vedado o acréscimo de gratificação.",
    ],
    correta: 4,
    explicacao:
      "O § 9º do art. 144 manda fixar a remuneração dos servidores policiais dos órgãos ali relacionados na forma do § 4º do art. 39: subsídio em parcela única, vedado o acréscimo de qualquer gratificação, adicional, abono, prêmio, verba de representação ou outra espécie remuneratória. Uma gratificação mensal paga além do subsídio esbarra nessa vedação.",
    explicacaoErradas:
      "O § 9º vale para os servidores policiais de todos os órgãos do art. 144, inclusive a PRF. Respeitar o teto do art. 37, XI, não basta, porque a vedação é ao próprio acréscimo. O subsídio pode ser alterado por lei específica (art. 37, X), e não só na revisão geral anual, de modo que esse fundamento está errado. E o prêmio está expressamente na lista de acréscimos vedados.",
    pegadinha:
      "Chamar a parcela de prêmio anual não resolve: “prêmio” está na própria lista de acréscimos vedados do art. 39, § 4º. E uma das alternativas acerta a conclusão com o fundamento errado.",
    conhecimento:
      "Art. 144, § 9º; art. 39, § 4º (parcela única e acréscimos vedados); art. 37, X e XI (lei específica, revisão geral e teto).",
    origem: "banco",
  },
  {
    id: "prf-leg-006",
    materia: "leg",
    topico: "Art. 144 da Constituição: perfil constitucional da PRF",
    subassunto: "Segurança viária no § 10 (EC 82/2014): finalidade, conteúdo e órgãos",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: conferir cada uma com a redação do § 10 e de seus dois incisos.",
    enunciado:
      "Sobre o § 10 do art. 144 da Constituição, incluído pela EC 82/2014, analise as afirmativas.\n\nI. A segurança viária é exercida para a preservação da ordem pública e da incolumidade das pessoas e do seu patrimônio nas vias públicas.\nII. Ela compreende a educação, a engenharia e a fiscalização de trânsito, além de outras atividades previstas em lei, que assegurem ao cidadão o direito à mobilidade urbana eficiente.\nIII. No âmbito dos Estados, ela compete às polícias militares, por meio de seus batalhões de trânsito, estruturados em carreira.\nIV. O inciso II do § 10 não menciona a PRF: no âmbito dos Estados, do DF e dos Municípios, atribui a segurança viária aos respectivos órgãos ou entidades executivos e a seus agentes de trânsito.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II e IV, apenas.", "I, II e IV, apenas.", "I, II, III e IV.", "II, III e IV, apenas."],
    correta: 2,
    explicacao:
      "As afirmativas I e II reproduzem o § 10: a segurança viária é exercida para a preservação da ordem pública e da incolumidade das pessoas e do seu patrimônio nas vias públicas e compreende a educação, a engenharia e a fiscalização de trânsito, além de outras atividades previstas em lei, que assegurem ao cidadão o direito à mobilidade urbana eficiente (inciso I). A IV também está correta: o inciso II atribui a segurança viária, nos Estados, no DF e nos Municípios, aos respectivos órgãos ou entidades executivos e a seus agentes de trânsito, estruturados em carreira, sem citar a PRF.",
    explicacaoErradas:
      "A afirmativa III está errada: o § 10, II, não atribui a segurança viária às polícias militares, e sim aos órgãos ou entidades executivos de trânsito e a seus agentes. Toda combinação com a III está errada, e as que deixam de fora a I ou a IV omitem afirmativas verdadeiras.",
    pegadinha:
      "A afirmativa III soa natural porque as polícias militares fazem policiamento de trânsito, mas o § 10, II, atribui a segurança viária aos órgãos ou entidades executivos de trânsito e a seus agentes.",
    conhecimento:
      "Art. 144, § 10, I e II (EC 82/2014): finalidade, conteúdo e órgãos da segurança viária.",
    origem: "banco",
  },
  {
    id: "prf-leg-007",
    materia: "leg",
    topico: "Art. 144 da Constituição: perfil constitucional da PRF",
    subassunto: "Competência privativa da União para legislar sobre a PRF (art. 22, XXII)",
    dificuldade: 5,
    raciocinio: "Controle de constitucionalidade: identificar o ente competente e o tipo de vício, separando o fundamento certo dos trocados.",
    enunciado:
      "Uma lei estadual atribui à PRF, nas rodovias federais que cortam o Estado, a fiscalização do recolhimento do ICMS sobre as cargas transportadas. Essa lei é",
    alternativas: [
      "formalmente inconstitucional, porque legislar sobre a competência da PRF é privativo da União.",
      "constitucional, porque o ICMS é tributo estadual e o Estado legisla concorrentemente sobre direito tributário.",
      "constitucional, desde que a execução dependa de convênio entre o Estado e a União.",
      "materialmente inconstitucional, porque a forma de lei estadual é adequada, mas o conteúdo invade funções federais.",
      "formalmente inconstitucional, porque só lei complementar federal pode atribuir funções à PRF.",
    ],
    correta: 0,
    explicacao:
      "O art. 22, XXII, reserva à União legislar sobre a competência da polícia federal e das polícias rodoviária e ferroviária federais. Uma lei estadual que atribui função à PRF invade essa competência privativa, e o vício é formal, de competência (orgânico), qualquer que seja o conteúdo da atribuição.",
    explicacaoErradas:
      "A competência concorrente em direito tributário (art. 24, I) permite ao Estado legislar sobre o seu tributo, e não sobre as funções de um órgão federal. O convênio é instrumento de cooperação administrativa e não convalida lei editada sem competência. O problema não está no conteúdo, e sim no ente que legislou, por isso o vício é formal. E o § 2º do art. 144 fala em “na forma da lei”: a competência da PRF é definida por lei federal ordinária, como o próprio CTB, sem exigência de lei complementar.",
    pegadinha:
      "Uma das alternativas acerta a conclusão, vício formal, com o fundamento errado: a Constituição não exige lei complementar para definir as competências da PRF, basta lei federal.",
    conhecimento:
      "Art. 22, XXII; art. 24, I; art. 144, § 2º (“na forma da lei”); inconstitucionalidade formal orgânica × material.",
    origem: "banco",
  },
  {
    id: "prf-leg-008",
    materia: "leg",
    topico: "Art. 144 da Constituição: perfil constitucional da PRF",
    subassunto: "Rol do caput: polícias penais (EC 104/2019) e caráter taxativo",
    dificuldade: 5,
    raciocinio: "Cobrança do rol do caput: conferir cada órgão citado e o alcance da EC 104/2019, à luz da jurisprudência do STF.",
    enunciado:
      "Sobre o rol de órgãos de segurança pública do caput do art. 144 da Constituição, é correto afirmar que ele",
    alternativas: [
      "inclui o DNIT, já que o § 10 atribui a segurança viária aos órgãos executivos rodoviários.",
      "inclui as guardas municipais, acrescentadas pela EC 104/2019 ao lado das polícias penais.",
      "inclui as polícias penais estaduais e distrital, mas não uma polícia penal federal.",
      "inclui as polícias penais federal, estaduais e distrital, acrescentadas pela EC 104/2019.",
      "é exemplificativo, e os Estados podem criar outros órgãos de segurança pública.",
    ],
    correta: 3,
    explicacao:
      "O caput do art. 144 lista a polícia federal, a polícia rodoviária federal, a polícia ferroviária federal, as polícias civis, as polícias militares e corpos de bombeiros militares e, desde a EC 104/2019, as polícias penais federal, estaduais e distrital (inciso VI).",
    explicacaoErradas:
      "O § 10 trata da segurança viária nos Estados, no DF e nos Municípios e não acrescenta órgãos ao caput; o DNIT é órgão executivo rodoviário do Sistema Nacional de Trânsito. As guardas municipais estão no § 8º, e não no caput; o STF reconhece que elas integram o Sistema de Segurança Pública, mas a EC 104/2019 tratou só das polícias penais. O inciso VI inclui expressamente a polícia penal federal. E o STF tem o rol do caput por taxativo: os Estados não podem criar outros órgãos de segurança pública.",
    pegadinha:
      "A descrição que exclui a polícia penal federal confunde o caput com o § 6º: este só subordina aos Governadores as polícias penais estaduais e distrital, mas o caput lista também a federal.",
    conhecimento:
      "Art. 144, caput, I a VI, e §§ 6º, 8º e 10; EC 104/2019; rol taxativo segundo o STF.",
    origem: "banco",
  },
  {
    id: "prf-leg-009",
    materia: "leg",
    topico: "Art. 20 do Código de Trânsito Brasileiro",
    subassunto: "Art. 20 × art. 21: excesso de peso, dimensões e lotação",
    dificuldade: 5,
    raciocinio: "Comparação de dispositivos: conferir, para cada atribuição, se ela aparece nos dois artigos ou só no art. 21.",
    enunciado:
      "Das atribuições abaixo, a única que o CTB confere expressamente aos órgãos e entidades executivos rodoviários (art. 21), sem inciso equivalente entre as competências da PRF (art. 20), é",
    alternativas: [
      "aplicar a suspensão do direito de dirigir prevista de forma específica para a infração e comunicá-la ao órgão máximo executivo de trânsito da União.",
      "fiscalizar, autuar e aplicar as penalidades e medidas administrativas relativas ao excesso de peso, dimensões e lotação dos veículos.",
      "fiscalizar a emissão de poluentes e ruído dos veículos ou de sua carga e apoiar, quando solicitado, as ações dos órgãos ambientais.",
      "coletar dados e elaborar estudos sobre os sinistros de trânsito e suas causas.",
      "arrecadar os valores de estada e remoção de veículos e objetos e de escolta de veículos de cargas superdimensionadas ou perigosas.",
    ],
    correta: 1,
    explicacao:
      "O art. 21, VIII, atribui aos órgãos e entidades executivos rodoviários fiscalizar, autuar e aplicar as penalidades e medidas administrativas cabíveis por excesso de peso, dimensões e lotação dos veículos, além de notificar e arrecadar as multas que aplicarem. O art. 20, que trata da PRF, não traz previsão expressa equivalente.",
    explicacaoErradas:
      "As outras quatro aparecem nos dois artigos: a suspensão do direito de dirigir (art. 20, XII, e art. 21, XV, ambos incluídos pela Lei 14.071/2020), a fiscalização de poluentes e ruído com apoio aos órgãos ambientais (art. 20, XI, e art. 21, XIII), os dados e estudos sobre sinistros (art. 20, VII, e art. 21, IV) e a arrecadação dos valores de estada, remoção e escolta de cargas superdimensionadas ou perigosas (art. 20, III, e art. 21, VII).",
    pegadinha:
      "Quatro atribuições aparecem nos dois artigos com palavras quase iguais; a de excesso de peso parece rotina de fiscalização de trânsito, mas só o art. 21, VIII, a prevê de forma expressa.",
    conhecimento:
      "CTB, art. 20, III, VII, XI e XII, e art. 21, IV, VII, VIII, XIII e XV; Lei 14.071/2020.",
    origem: "banco",
  },
  {
    id: "prf-leg-010",
    materia: "leg",
    topico: "Art. 20 do Código de Trânsito Brasileiro",
    subassunto: "Estudos sobre sinistros e seu destino (art. 20, VII)",
    dificuldade: 5,
    raciocinio: "Cobrança literal com caso: identificar o que o inciso VII manda fazer com o estudo e o órgão que o recebe.",
    enunciado:
      "Uma equipe da PRF cruza dados de sinistros num trecho de serra de uma rodovia federal e conclui que a maioria ocorre à noite, em curvas sem acostamento. Pelo art. 20, VII, do CTB, na redação da Lei 14.599/2023, a PRF",
    alternativas: [
      "elabora o estudo e o envia ao CONTRAN, a quem cabe determinar as medidas operacionais preventivas no trecho.",
      "elabora o estudo e o envia ao órgão máximo executivo de trânsito da União, para registro nos prontuários dos condutores.",
      "só coleta os dados estatísticos, porque elaborar estudos sobre as causas dos sinistros é tarefa do órgão rodoviário.",
      "elabora o estudo e adota as medidas preventivas, sem enviá-lo a outro órgão, porque a Lei 14.599/2023 suprimiu o envio.",
      "elabora o estudo, adota ou indica medidas operacionais preventivas e o encaminha ao órgão rodoviário federal.",
    ],
    correta: 4,
    explicacao:
      "O art. 20, VII, com a redação da Lei 14.599/2023, manda a PRF coletar dados estatísticos e elaborar estudos sobre sinistros de trânsito e suas causas, adotando ou indicando medidas operacionais preventivas e encaminhando-os ao órgão rodoviário federal, que é quem pode corrigir o traçado ou a sinalização do trecho.",
    explicacaoErradas:
      "O CONTRAN é o órgão normativo e consultivo do sistema e não é o destinatário dos estudos. O órgão máximo executivo de trânsito da União recebe a comunicação da suspensão do direito de dirigir (inciso XII), e não os estudos. Elaborar estudos sobre as causas é tarefa expressa da PRF no próprio inciso VII. E a Lei 14.599/2023 trocou “acidentes” por “sinistros”, mas manteve o encaminhamento ao órgão rodoviário federal.",
    pegadinha:
      "O órgão máximo executivo de trânsito da União aparece no art. 20, mas no inciso XII, para a comunicação da suspensão do direito de dirigir; o estudo do inciso VII vai para o órgão rodoviário federal.",
    conhecimento:
      "CTB, art. 20, VII e XII, e art. 21, IV; Lei 14.599/2023 (“sinistros de trânsito”).",
    origem: "banco",
  },
  {
    id: "prf-leg-011",
    materia: "leg",
    topico: "Art. 20 do Código de Trânsito Brasileiro",
    subassunto: "Suspensão do direito de dirigir: PRF e órgãos rodoviários (Lei 14.071/2020)",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: separar a suspensão prevista de forma específica da suspensão por pontos e comparar os arts. 20, XII, e 21, XV.",
    enunciado:
      "Sobre a penalidade de suspensão do direito de dirigir aplicada nas rodovias federais, analise as afirmativas.\n\nI. A PRF pode aplicá-la sempre que o condutor atingir o limite de pontos previsto no CTB, por infrações cometidas nas rodovias federais.\nII. Ao aplicá-la, a PRF deve comunicar a aplicação da penalidade ao órgão máximo executivo de trânsito da União.\nIII. A Lei 14.071/2020 deu a mesma competência, nos mesmos termos, aos órgãos e entidades executivos rodoviários, no âmbito de sua circunscrição.\nIV. Nas rodovias federais, a competência é exclusiva da PRF, por força do art. 20, XII.\n\nEstá correto o que se afirma em",
    alternativas: ["II, apenas.", "I e II, apenas.", "II e III, apenas.", "I, II e III, apenas.", "II, III e IV, apenas."],
    correta: 2,
    explicacao:
      "A afirmativa II está correta: o art. 20, XII, manda a PRF comunicar a aplicação da suspensão ao órgão máximo executivo de trânsito da União. A III também: a Lei 14.071/2020 incluiu a mesma competência, com a mesma redação, no art. 21, XV, para os órgãos e entidades executivos rodoviários, no âmbito de sua circunscrição.",
    explicacaoErradas:
      "A afirmativa I está errada: a PRF só aplica a suspensão quando ela está prevista de forma específica para a infração cometida; a suspensão por atingir o limite de pontos não está no art. 20, XII. A IV também: como o art. 21, XV, dá a mesma competência ao órgão executivo rodoviário, que nas rodovias federais é o DNIT, a competência não é exclusiva da PRF.",
    pegadinha:
      "A suspensão por pontos parece a mais comum, mas não é a do art. 20, XII; a PRF só aplica a suspensão prevista de forma específica para a infração cometida.",
    conhecimento:
      "CTB, art. 20, XII, e art. 21, XV (Lei 14.071/2020); suspensão por pontos × suspensão prevista para a infração.",
    origem: "banco",
  },
  {
    id: "prf-leg-012",
    materia: "leg",
    topico: "Art. 20 do Código de Trânsito Brasileiro",
    subassunto: "Perícia administrativa nos locais de sinistros (art. 20, XIII)",
    dificuldade: 5,
    raciocinio: "Caso concreto: achar a base legal da atividade e distinguir perícia administrativa de perícia criminal e das competências do órgão rodoviário.",
    enunciado:
      "Após uma colisão entre dois carros e uma moto numa rodovia federal, a equipe da PRF analisa marcas de frenagem, posição final dos veículos e danos. Sobre a base dessa atividade no CTB, é correto afirmar que",
    alternativas: [
      "o art. 20, XIII, dá à PRF a perícia administrativa nos locais de sinistros, sem equivalente no art. 21.",
      "o art. 20, XIII, dá à PRF a perícia criminal oficial do local, e o laudo dispensa o exame do órgão oficial de perícia.",
      "o art. 20, XIII, repete competência do art. 21, e o órgão rodoviário também faz perícia administrativa no local.",
      "o CTB só prevê o levantamento do local, e a perícia feita pela PRF tem base apenas no Decreto 1.655/1995.",
      "o art. 20, XIII, limita a perícia administrativa aos sinistros sem vítimas, porque os demais exigem perícia criminal.",
    ],
    correta: 0,
    explicacao:
      "O art. 20, XIII, com a redação da Lei 14.599/2023, atribui à PRF realizar perícia administrativa nos locais de sinistros de trânsito. O art. 21, que trata dos órgãos executivos rodoviários, fala em coletar dados e elaborar estudos sobre os sinistros (inciso IV), mas não lhes dá perícia nos locais.",
    explicacaoErradas:
      "A perícia do inciso XIII é administrativa: não é perícia criminal oficial nem dispensa o exame do órgão oficial de perícia quando houver crime. O art. 21 não repete essa competência. O CTB prevê, além do levantamento dos locais (art. 20, IV), a própria perícia administrativa (XIII), sem depender do decreto. E o inciso XIII não distingue sinistros com ou sem vítimas.",
    pegadinha:
      "O Decreto 1.655/1995 também fala em perícias, o que faz pensar que o CTB não trata do tema; mas o art. 20, XIII, prevê a perícia administrativa de forma expressa.",
    conhecimento:
      "CTB, art. 20, IV e XIII, e art. 21, IV; Decreto 1.655/1995, art. 1º, V; perícia administrativa × perícia criminal.",
    origem: "banco",
  },
  {
    id: "prf-leg-013",
    materia: "leg",
    topico: "Art. 20 do Código de Trânsito Brasileiro",
    subassunto: "Fiscalização, penalidades e arrecadação (art. 20, III)",
    dificuldade: 4,
    raciocinio: "Julgamento de assertivas: conferir cada uma com a redação literal do inciso III.",
    enunciado:
      "Sobre a fiscalização de trânsito pela PRF no art. 20, III, do CTB, marque V para a afirmativa verdadeira e F para a falsa.\n\n( ) A PRF aplica as penalidades de advertência por escrito e multa e as medidas administrativas cabíveis, com a notificação dos infratores.\n( ) A PRF arrecada as multas que aplica e os valores de estadia e remoção de veículos, objetos e animais.\n( ) Com base no inciso III, a PRF também aplica a cassação do documento de habilitação nas infrações gravíssimas.\n( ) A arrecadação dos valores de escolta alcança só as cargas superdimensionadas, excluídas as perigosas.\n\nAs afirmativas são, respectivamente,",
    alternativas: ["V – F – F – V.", "V – V – V – F.", "F – V – F – F.", "V – V – F – F.", "V – F – V – F."],
    correta: 3,
    explicacao:
      "As duas primeiras afirmativas reproduzem o art. 20, III: a PRF aplica as penalidades de advertência por escrito e multa e as medidas administrativas cabíveis, notifica os infratores e arrecada as multas aplicadas e os valores de estadia e remoção de veículos, objetos e animais e de escolta de veículos de cargas superdimensionadas ou perigosas. A sequência é V – V – F – F.",
    explicacaoErradas:
      "A terceira é falsa: o inciso III só dá à PRF a advertência por escrito e a multa, e a cassação do documento de habilitação não está entre as competências do art. 20. A quarta também: o inciso fala em escolta de cargas “superdimensionadas ou perigosas”, sem excluir as perigosas.",
    pegadinha:
      "Cassação e suspensão são penalidades do CTB, mas o inciso III só lista advertência por escrito e multa; a suspensão chegou em inciso próprio (XII), e a cassação não está no art. 20.",
    conhecimento:
      "CTB, art. 20, III e XII; penalidades do art. 256.",
    origem: "banco",
  },
  {
    id: "prf-leg-014",
    materia: "leg",
    topico: "Art. 20 do Código de Trânsito Brasileiro",
    subassunto: "Livre circulação e medidas emergenciais (art. 20, VI)",
    dificuldade: 5,
    raciocinio: "Caso concreto: identificar o limite da atuação da PRF diante de dano na via e o papel do órgão rodoviário.",
    enunciado:
      "Depois de chuvas fortes, uma erosão compromete o acostamento e parte da pista da BR-101, e o trânsito passa a fluir por uma faixa só. Segundo o art. 20, VI, do CTB, para assegurar a livre circulação, a PRF",
    alternativas: [
      "executa diretamente as obras emergenciais, porque o inciso VI lhe atribui o dever de assegurar a livre circulação.",
      "pode solicitar ao órgão rodoviário a adoção de medidas emergenciais no trecho danificado.",
      "assume a operação do trecho no lugar do órgão rodoviário, com as competências do art. 21, até o fim da obra.",
      "requisita ao órgão rodoviário as medidas emergenciais, que devem ser executadas no prazo que ela fixar.",
      "comunica o fato ao órgão máximo executivo de trânsito da União, a quem cabe determinar as medidas.",
    ],
    correta: 1,
    explicacao:
      "O art. 20, VI, manda a PRF assegurar a livre circulação nas rodovias federais, podendo solicitar ao órgão rodoviário a adoção de medidas emergenciais. O Decreto 1.655/1995 repete a fórmula no art. 1º, VII. A PRF pede; quem executa as medidas e as obras na via é o órgão rodoviário.",
    explicacaoErradas:
      "Assegurar a livre circulação não transforma a PRF em executora de obras, tarefa do órgão rodoviário. Ela também não assume as competências do art. 21, que são do órgão rodoviário. O CTB fala em solicitar, e não em requisitar com prazo vinculante. E o pedido vai ao órgão rodoviário, e não ao órgão máximo executivo de trânsito da União.",
    pegadinha:
      "“Requisitar com prazo” parece só um jeito mais enfático de dizer o mesmo, mas muda o poder: o CTB dá à PRF a faculdade de solicitar, e a execução fica com o órgão rodoviário.",
    conhecimento:
      "CTB, art. 20, VI, e art. 21, II e III; Decreto 1.655/1995, art. 1º, VII.",
    origem: "banco",
  },
  {
    id: "prf-leg-015",
    materia: "leg",
    topico: "Art. 20 do Código de Trânsito Brasileiro",
    subassunto: "Carga indivisível: escolta (art. 20, V) × vistoria e requisitos (art. 21, XIV)",
    dificuldade: 5,
    raciocinio: "Divisão de competências: atribuir cada tarefa ao órgão que o CTB indica, sem trocar os papéis.",
    enunciado:
      "Uma transportadora vai levar uma turbina de grandes dimensões pela BR-381, em veículo que depende de autorização especial para transitar, com escolta credenciada. Na divisão de tarefas entre os arts. 20 e 21 do CTB,",
    alternativas: [
      "a PRF vistoria o veículo e fixa os requisitos técnicos da circulação, e o órgão rodoviário credencia a escolta.",
      "a PRF credencia a escolta, vistoria o veículo e estabelece os requisitos técnicos para a sua circulação.",
      "o órgão rodoviário credencia a escolta e fiscaliza o transporte, e a PRF apenas acompanha o comboio.",
      "o CONTRAN vistoria o veículo e a PRF credencia a escolta, sem participação do órgão rodoviário.",
      "a PRF credencia a escolta, e o órgão rodoviário vistoria o veículo e estabelece os requisitos técnicos.",
    ],
    correta: 4,
    explicacao:
      "O art. 20, V, atribui à PRF credenciar os serviços de escolta, fiscalizar e adotar medidas de segurança relativas à remoção de veículos, à escolta e ao transporte de carga indivisível. O art. 21, XIV, atribui ao órgão executivo rodoviário vistoriar os veículos que necessitem de autorização especial para transitar e estabelecer os requisitos técnicos a serem observados na sua circulação.",
    explicacaoErradas:
      "Trocar os papéis inverte os dois incisos: a vistoria e os requisitos técnicos são do órgão rodoviário (art. 21, XIV), e o credenciamento da escolta é da PRF (art. 20, V). A PRF não acumula a vistoria. O órgão rodoviário não credencia a escolta, e a PRF não se limita a acompanhar o comboio: ela fiscaliza e adota medidas de segurança. E o CONTRAN, órgão normativo, não vistoria veículos.",
    pegadinha:
      "Por credenciar a escolta e fiscalizar o transporte, a PRF parece dona de todo o procedimento; a vistoria e os requisitos técnicos, porém, estão no art. 21, XIV.",
    conhecimento:
      "CTB, art. 20, V, e art. 21, XIV; Decreto 1.655/1995, art. 1º, VI.",
    origem: "banco",
  },
  {
    id: "prf-leg-016",
    materia: "leg",
    topico: "Art. 20 do Código de Trânsito Brasileiro",
    subassunto: "Poluentes, ruído e apoio aos órgãos ambientais (art. 20, XI × art. 21, XIII)",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: comparar a redação do art. 20, XI, com a do art. 21, XIII, e achar a diferença entre elas.",
    enunciado:
      "Sobre a fiscalização ambiental de veículos no CTB, analise as afirmativas.\n\nI. A PRF fiscaliza o nível de emissão de poluentes e ruído produzidos pelos veículos automotores ou pela sua carga, de acordo com o art. 66.\nII. A PRF dá apoio às ações específicas dos órgãos ambientais quando solicitada.\nIII. Os órgãos executivos rodoviários também fiscalizam emissões e ruído, e o art. 21 fala em apoio aos órgãos ambientais locais.\nIV. O apoio da PRF aos órgãos ambientais independe de solicitação, e ela própria lavra os autos das infrações ambientais.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "I, II e IV, apenas.", "I, II e III, apenas.", "I, II, III e IV.", "II, III e IV, apenas."],
    correta: 2,
    explicacao:
      "A afirmativa I reproduz o art. 20, XI: a PRF fiscaliza o nível de emissão de poluentes e ruído produzidos pelos veículos automotores ou pela sua carga, de acordo com o art. 66. A II completa o inciso: apoio, quando solicitado, às ações específicas dos órgãos ambientais. A III também está correta: o art. 21, XIII, dá a mesma fiscalização aos órgãos executivos rodoviários e fala em apoio aos órgãos ambientais “locais”.",
    explicacaoErradas:
      "A afirmativa IV está errada: o apoio da PRF depende de solicitação, e o inciso XI não lhe dá a lavratura de autos de infrações ambientais, que cabe aos órgãos ambientais. Toda combinação com a IV está errada, e a que traz só I e II deixa de fora a III, que é verdadeira.",
    pegadinha:
      "A afirmativa III parece inventar uma restrição, mas ela está no texto: o art. 21, XIII, fala em órgãos ambientais “locais”, palavra que o art. 20, XI, não usa.",
    conhecimento:
      "CTB, art. 20, XI; art. 21, XIII; art. 66.",
    origem: "banco",
  },
  {
    id: "prf-leg-017",
    materia: "leg",
    topico: "Decreto 1.655/1995",
    subassunto: "Escolta e segurança de autoridades (art. 1º, VIII)",
    dificuldade: 4,
    raciocinio: "Cobrança literal com caso: verificar quais autoridades o inciso VIII alcança e o que a PRF executa nesses deslocamentos.",
    enunciado:
      "Uma comitiva com um ministro de Estado e um diplomata estrangeiro vai percorrer de carro um trecho de rodovia federal. Segundo o art. 1º, VIII, do Decreto 1.655/1995, a PRF",
    alternativas: [
      "executa medidas de segurança, planejamento e escoltas nesse deslocamento, quando necessário.",
      "assume a segurança pessoal permanente das duas autoridades enquanto estiverem no território nacional.",
      "só atua nos deslocamentos do Presidente da República e de Ministros de Estado, e não nos de diplomatas.",
      "faz apenas o planejamento, porque as escoltas de autoridades cabem com exclusividade à polícia federal.",
      "só atua se a comitiva cruzar a fronteira, porque o inciso trata de autoridades estrangeiras em trânsito.",
    ],
    correta: 0,
    explicacao:
      "O art. 1º, VIII, do decreto atribui à PRF executar medidas de segurança, planejamento e escoltas nos deslocamentos do Presidente da República, de Ministros de Estado, de Chefes de Estado e diplomatas estrangeiros e de outras autoridades, quando necessário e sob a coordenação do órgão competente. A comitiva do caso reúne duas das autoridades citadas.",
    explicacaoErradas:
      "O inciso trata de deslocamentos, e não de segurança pessoal permanente. Diplomatas estrangeiros estão expressamente na lista. O decreto dá à PRF as três atividades, medidas de segurança, planejamento e escoltas, sem reservar a escolta à polícia federal. E não há exigência de travessia de fronteira: o inciso vale para os deslocamentos pelas rodovias federais.",
    pegadinha:
      "Quem lembra só de Presidente e Ministros de Estado esquece que o inciso VIII alcança também Chefes de Estado e diplomatas estrangeiros e outras autoridades.",
    conhecimento:
      "Decreto 1.655/1995, art. 1º, VIII: autoridades alcançadas e atividades da PRF nos deslocamentos.",
    origem: "banco",
  },
  {
    id: "prf-leg-018",
    materia: "leg",
    topico: "Decreto 1.655/1995",
    subassunto: "Decreto 1.655 × art. 20 do CTB: o que só o decreto prevê",
    dificuldade: 5,
    raciocinio: "Comparação de textos: situar cada competência no decreto, no CTB ou nos dois.",
    enunciado:
      "Ao comparar o art. 1º do Decreto 1.655/1995 com o art. 20 do CTB, um estudante procura a competência da PRF que aparece expressamente só no decreto. Essa competência é",
    alternativas: [
      "a perícia administrativa nos locais de sinistros de trânsito.",
      "a suspensão do direito de dirigir, quando prevista de forma específica para a infração cometida.",
      "o credenciamento dos serviços de escolta e a fiscalização do transporte de carga indivisível.",
      "a fiscalização e o controle do tráfico de menores nas rodovias federais, com as providências do ECA.",
      "a coleta de dados e a elaboração de estudos sobre as causas dos sinistros, enviados ao órgão rodoviário.",
    ],
    correta: 3,
    explicacao:
      "A fiscalização e o controle do tráfico de menores nas rodovias federais, com as providências do Estatuto da Criança e do Adolescente (Lei 8.069/1990), estão no art. 1º, IX, do decreto e não têm correspondente no art. 20 do CTB.",
    explicacaoErradas:
      "As demais não estão só no decreto. O credenciamento de escolta e a segurança no transporte de carga indivisível aparecem nos dois textos (decreto, VI; CTB, V), e o decreto também fala em perícias (V), ao lado da perícia administrativa do CTB (XIII). A suspensão do direito de dirigir (XII) e os estudos sobre sinistros enviados ao órgão rodoviário (VII) estão só no CTB.",
    pegadinha:
      "Perícia e escolta aparecem nos dois textos, e suspensão e estudos só no CTB; quem procura apenas “o que não está no CTB” precisa lembrar do tráfico de menores do inciso IX.",
    conhecimento:
      "Decreto 1.655/1995, art. 1º, V, VI e IX; CTB, art. 20, V, VII, XII e XIII.",
    origem: "banco",
  },
  {
    id: "prf-leg-019",
    materia: "leg",
    topico: "Decreto 1.655/1995",
    subassunto: "Identidade funcional: porte, acesso e prioridade (art. 2º)",
    dificuldade: 5,
    raciocinio: "Cobrança literal: conferir cada pedaço do art. 2º, como porte, alcance do acesso, condição legal e prioridade em serviço.",
    enunciado:
      "Segundo o art. 2º do Decreto 1.655/1995, o documento de identidade funcional dos servidores policiais da PRF confere ao portador",
    alternativas: [
      "livre porte de arma e franco acesso aos locais sob fiscalização do órgão, independentemente da legislação em vigor.",
      "livre porte de arma e franco acesso aos locais sob fiscalização do órgão, nos termos da legislação em vigor.",
      "livre porte de arma e franco acesso a qualquer local público ou privado, nos termos da legislação em vigor.",
      "livre porte de arma e, quando em serviço, gratuidade em todos os tipos de transporte e comunicação.",
      "franco acesso aos locais sob fiscalização do órgão, mas o porte de arma depende de autorização do Diretor-Geral.",
    ],
    correta: 1,
    explicacao:
      "O art. 2º do decreto diz que a identidade funcional confere livre porte de arma e franco acesso aos locais sob fiscalização do órgão, nos termos da legislação em vigor, e assegura, quando em serviço, prioridade em todos os tipos de transporte e comunicação. Hoje, a legislação em vigor sobre o porte inclui o Estatuto do Desarmamento (Lei 10.826/2003).",
    explicacaoErradas:
      "O porte e o acesso valem “nos termos da legislação em vigor”, e não independentemente dela. O acesso se limita aos locais sob fiscalização do órgão, e não a quaisquer locais públicos ou privados. Em serviço, o decreto assegura prioridade, e não gratuidade, no transporte e na comunicação. E o porte decorre da própria identidade funcional, sem autorização do Diretor-Geral.",
    pegadinha:
      "“Gratuidade” e “prioridade” parecem equivalentes à primeira leitura, mas o art. 2º assegura só prioridade, e apenas em serviço.",
    conhecimento:
      "Decreto 1.655/1995, art. 2º; Estatuto do Desarmamento (Lei 10.826/2003).",
    origem: "banco",
  },
  {
    id: "prf-leg-020",
    materia: "leg",
    topico: "Decreto 1.655/1995",
    subassunto: "Procedimentos para elucidar acidentes (art. 1º, V) e polícia judiciária",
    dificuldade: 5,
    raciocinio: "Interpretação de dispositivo: ler “investigações” dentro da finalidade do inciso V e do desenho do art. 144.",
    enunciado:
      "O art. 1º, V, do Decreto 1.655/1995 menciona perícias, levantamentos de locais, boletins de ocorrência, investigações e testes de dosagem alcoólica. Sobre o alcance dessas “investigações”, é correto afirmar que elas",
    alternativas: [
      "autorizam a PRF a instaurar inquérito policial sobre os crimes de trânsito cometidos nas rodovias federais.",
      "fazem da PRF polícia judiciária concorrente da polícia federal nos crimes ocorridos nas rodovias federais.",
      "alcançam qualquer crime constatado na rodovia, desde que o resultado seja comunicado ao Ministério Público.",
      "foram revogadas pelo CTB, que não atribui à PRF nenhum procedimento ligado aos sinistros de trânsito.",
      "servem à elucidação dos acidentes de trânsito, sem fazer da PRF uma polícia judiciária.",
    ],
    correta: 4,
    explicacao:
      "O art. 1º, V, prevê perícias, levantamentos de locais, boletins de ocorrência, investigações, testes de dosagem alcoólica e outros procedimentos estabelecidos em leis e regulamentos, imprescindíveis à elucidação dos acidentes de trânsito. As investigações têm essa finalidade e não fazem da PRF uma polícia judiciária, função da polícia federal e das polícias civis (art. 144, §§ 1º, IV, e 4º).",
    explicacaoErradas:
      "Instaurar inquérito policial é atribuição da polícia judiciária, que a PRF não exerce. A polícia judiciária da União é exclusiva da polícia federal, de modo que não há exercício concorrente pela PRF. O inciso não alcança qualquer crime: ele se amarra à elucidação dos acidentes. E o CTB não revogou o inciso; ao contrário, também atribui à PRF o levantamento dos locais (art. 20, IV) e a perícia administrativa (art. 20, XIII).",
    pegadinha:
      "A palavra “investigações” puxa para o inquérito policial, mas o inciso V a amarra à elucidação dos acidentes de trânsito.",
    conhecimento:
      "Decreto 1.655/1995, art. 1º, V; CF, art. 144, §§ 1º, IV, e 4º; CTB, art. 20, IV e XIII.",
    origem: "banco",
  },
  {
    id: "prf-leg-021",
    materia: "leg",
    topico: "Decreto 1.655/1995",
    subassunto: "Prevenção e repressão a crimes (art. 1º, X)",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: ler os verbos e a cláusula final do inciso X e atualizar a terminologia penal.",
    enunciado:
      "Sobre o art. 1º, X, do Decreto 1.655/1995, que trata da atuação da PRF contra crimes, analise as afirmativas.\n\nI. Ao usar o verbo “colaborar”, o inciso faz da PRF mero órgão de apoio, sem atuação direta na repressão aos crimes.\nII. Os crimes “contra os costumes” citados no inciso correspondem, no Código Penal atual, aos crimes contra a dignidade sexual.\nIII. A lista de crimes do inciso é taxativa, de modo que a PRF não atua contra delitos que nela não estejam nomeados.\nIV. O inciso menciona expressamente o tráfico de entorpecentes e os furtos e roubos de veículos e bens.\n\nEstá correto o que se afirma em",
    alternativas: ["II, apenas.", "I e II, apenas.", "II e IV, apenas.", "II, III e IV, apenas.", "I, III e IV, apenas."],
    correta: 2,
    explicacao:
      "A afirmativa II está correta: a Lei 12.015/2009 trocou, no Código Penal, “crimes contra os costumes” por “crimes contra a dignidade sexual”. A IV também: o inciso X menciona os furtos e roubos de veículos e bens e o tráfico de entorpecentes e drogas afins. Estão corretas, portanto, apenas II e IV.",
    explicacaoErradas:
      "A afirmativa I está errada: o inciso usa “colaborar e atuar”, e o segundo verbo dá à PRF atuação direta na prevenção e na repressão. A III também: a lista termina com “e os demais crimes previstos em leis”, de modo que não é taxativa. Toda combinação com I ou III está errada, e a que traz só a II deixa de fora a IV, que é verdadeira.",
    pegadinha:
      "A afirmativa I pega só o verbo “colaborar” e esquece o “atuar” que vem junto; a III ignora a cláusula final, “e os demais crimes previstos em leis”.",
    conhecimento:
      "Decreto 1.655/1995, art. 1º, X; Lei 12.015/2009 (crimes contra a dignidade sexual).",
    origem: "banco",
  },
  {
    id: "prf-leg-022",
    materia: "leg",
    topico: "Decreto 1.655/1995",
    subassunto: "Direito de vizinhança e interdição de obras (art. 1º, VII)",
    dificuldade: 4,
    raciocinio: "Caso concreto: identificar a providência que o inciso VII dá à PRF diante de construção não autorizada.",
    enunciado:
      "Uma empresa começa a erguer, sem autorização, um galpão rente à pista de uma rodovia federal, tirando a visibilidade de uma curva. Com base no art. 1º, VII, do Decreto 1.655/1995, a PRF",
    alternativas: [
      "zela pelas normas de direito de vizinhança e pode promover a interdição da obra não autorizada.",
      "pode demolir a construção de imediato, por se tratar de risco à livre circulação na rodovia.",
      "pode autorizar a obra, desde que a empresa recue o galpão e sinalize a curva, às suas custas.",
      "só pode interditar instalações que causem dano ambiental, com base no inciso X do decreto.",
      "deve apenas comunicar o fato ao órgão rodoviário, único competente para interditar a obra.",
    ],
    correta: 0,
    explicacao:
      "O art. 1º, VII, do decreto manda a PRF assegurar a livre circulação nas rodovias federais e zelar pelo cumprimento das normas legais relativas ao direito de vizinhança, promovendo a interdição de construções, obras e instalações não autorizadas. O CTB tem regra semelhante no art. 20, VI.",
    explicacaoErradas:
      "Interditar não é demolir: o decreto não autoriza a demolição sumária. A PRF também não autoriza obras: o inciso VII lhe dá o poder de interditar as não autorizadas, e não o de licenciá-las. O inciso alcança qualquer construção, obra ou instalação não autorizada, e não só as que causem dano ambiental. E o próprio inciso VII dá à PRF o poder de promover a interdição, sem depender do órgão rodoviário.",
    pegadinha:
      "Interditar não é demolir nem autorizar: o inciso VII dá à PRF o poder de promover a interdição, sem transformá-la em órgão de licenciamento ou de demolição.",
    conhecimento:
      "Decreto 1.655/1995, art. 1º, VII; CTB, art. 20, VI.",
    origem: "banco",
  },
  {
    id: "prf-leg-023",
    materia: "leg",
    topico: "Decreto 1.655/1995",
    subassunto: "Natureza, base constitucional e vigência do decreto",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: conferir preâmbulo, art. 1º e art. 3º do decreto e situá-lo no tempo em relação ao CTB.",
    enunciado:
      "Sobre o Decreto 1.655/1995, analise as afirmativas.\n\nI. Foi editado pelo Presidente da República no uso das atribuições do art. 84, IV e VI, da Constituição.\nII. É posterior ao CTB e, por isso, já usa a expressão “sinistros de trânsito”.\nIII. Apresenta a PRF como órgão permanente, integrante da estrutura regimental do Ministério da Justiça, no âmbito das rodovias federais.\nIV. Entrou em vigor na data de sua publicação.\n\nEstá correto o que se afirma em",
    alternativas: ["I e III, apenas.", "II e IV, apenas.", "I, II e III, apenas.", "I, III e IV, apenas.", "III e IV, apenas."],
    correta: 3,
    explicacao:
      "A afirmativa I reproduz o preâmbulo: o decreto foi editado pelo Presidente da República no uso das atribuições do art. 84, IV e VI, da Constituição. A III reproduz o caput do art. 1º, que apresenta a PRF como órgão permanente, integrante da estrutura regimental do Ministério da Justiça, no âmbito das rodovias federais. A IV corresponde ao art. 3º: o decreto entrou em vigor na data de sua publicação.",
    explicacaoErradas:
      "A afirmativa II está errada: o decreto é de 3 de outubro de 1995, anterior ao CTB (Lei 9.503/1997), e fala em “acidentes”; a expressão “sinistros de trânsito” só entrou no CTB com a Lei 14.599/2023. Toda combinação com a II está errada, e as que deixam de fora a I ou a IV omitem afirmativas verdadeiras.",
    pegadinha:
      "A afirmativa II parece razoável porque o decreto e o CTB tratam dos mesmos temas, mas a ordem é a inversa: o decreto veio primeiro, e “sinistros” é termo de 2023.",
    conhecimento:
      "Decreto 1.655/1995: preâmbulo, art. 1º, caput, e art. 3º; CF, art. 84, IV e VI; CTB (Lei 9.503/1997); Lei 14.599/2023.",
    origem: "banco",
  },
  {
    id: "prf-leg-024",
    materia: "leg",
    topico: "Decreto 1.655/1995",
    subassunto: "Arrecadação: cargas excepcionais (decreto) × superdimensionadas ou perigosas (CTB)",
    dificuldade: 5,
    raciocinio: "Comparação literal: alinhar os dois incisos III e localizar a única diferença de redação entre eles.",
    enunciado:
      "Comparando o art. 1º, III, do Decreto 1.655/1995 com o art. 20, III, do CTB, quanto aos valores arrecadados pela PRF, é correto afirmar que",
    alternativas: [
      "o decreto fala em escolta de cargas “superdimensionadas ou perigosas”, e o CTB, em cargas “excepcionais”.",
      "o decreto fala em escolta de cargas “excepcionais”, e o CTB, em cargas “superdimensionadas ou perigosas”.",
      "só o decreto prevê valores de estadia e remoção, e o art. 20, III, do CTB se limita à arrecadação das multas.",
      "só o art. 20, III, do CTB autoriza a PRF a aplicar multas, e o decreto lhe dá apenas a arrecadação delas.",
      "só o decreto inclui os animais nos valores de estadia e remoção, omitidos pelo art. 20, III, do CTB.",
    ],
    correta: 1,
    explicacao:
      "Os dois incisos III preveem a arrecadação de valores de escolta: o decreto fala em escolta de veículos de cargas “excepcionais”, e o CTB, em escolta de veículos de cargas “superdimensionadas ou perigosas”. Nos dois, a PRF também arrecada os valores de estadia e remoção de veículos, objetos e animais.",
    explicacaoErradas:
      "A que inverte as expressões troca a fonte de cada uma. O art. 20, III, do CTB também prevê os valores de estadia e remoção, e não só as multas. O decreto dá à PRF aplicar e arrecadar as multas, e não apenas arrecadá-las. E os animais aparecem nos dois textos; quem os omite é o art. 21, VII, do CTB, que trata dos órgãos rodoviários.",
    pegadinha:
      "A afirmação invertida usa as duas expressões verdadeiras, só que nos textos errados; quem lembra das palavras sem lembrar da fonte cai nela.",
    conhecimento:
      "Decreto 1.655/1995, art. 1º, III; CTB, art. 20, III, e art. 21, VII.",
    origem: "banco",
  },
  // Complemento (14/10/2026): questões adaptadas do banco do outro curso do app, nos tópicos do programa da PRF.
  {
    id: "prf-leg-025",
    materia: "leg",
    topico: "Art. 144 da Constituição: perfil constitucional da PRF",
    subassunto: "Polícias penais (§ 5º-A) e forças do DF mantidas pela União (art. 21, XIV)",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: separar quem organiza e mantém de quem comanda, combinando o § 6º com o art. 21, XIV.",
    enunciado:
      "Sobre as polícias penais e as forças de segurança do Distrito Federal, analise as afirmativas à luz da Constituição.\n\nI. Às polícias penais, vinculadas ao órgão administrador do sistema penal da unidade federativa a que pertencem, cabe a segurança dos estabelecimentos penais.\nII. A polícia penal federal, como as estaduais e a distrital, subordina-se ao Governador do Estado onde fica o estabelecimento penal.\nIII. A polícia civil, a polícia penal, a polícia militar e o corpo de bombeiros militar do Distrito Federal são organizados e mantidos pela União, mas se subordinam ao Governador do Distrito Federal.\nIV. Nas rodovias federais que cortam o Distrito Federal, a PRF subordina-se ao Governador distrital, por força do § 6º do art. 144.\n\nEstá correto o que se afirma em",
    alternativas: ["I, II e III, apenas.", "III, apenas.", "I, III e IV, apenas.", "II e III, apenas.", "I e III, apenas."],
    correta: 4,
    explicacao:
      "A afirmativa I reproduz o § 5º-A do art. 144, incluído pela EC 104/2019. A III junta dois dispositivos: o art. 21, XIV, dá à União organizar e manter a polícia civil, a polícia penal, a polícia militar e o corpo de bombeiros militar do Distrito Federal, e o § 6º do art. 144 subordina essas forças ao Governador do Distrito Federal. Estão corretas, portanto, apenas I e III.",
    explicacaoErradas:
      "A afirmativa II está errada: o § 6º só subordina aos Governadores as polícias penais estaduais e distrital; a polícia penal federal, vinculada ao órgão administrador do sistema penal federal, fica na estrutura da União. A IV também: a PRF não está entre os órgãos do § 6º, e isso não muda no Distrito Federal. Toda combinação com II ou IV está errada, e a que traz só a III deixa de fora a I.",
    pegadinha:
      "Ser mantido pela União não define a subordinação: as forças do DF são mantidas pela União e obedecem ao Governador distrital, e a PRF, também mantida pela União, não se subordina a Governador algum.",
    conhecimento:
      "CF, art. 144, caput, VI, e §§ 5º-A e 6º; art. 21, XIV; EC 104/2019.",
    origem: "banco",
  },
  {
    id: "prf-leg-026",
    materia: "leg",
    topico: "Art. 144 da Constituição: perfil constitucional da PRF",
    subassunto: "Trânsito: competência privativa (art. 22, XI) × educação para o trânsito (art. 23, XII)",
    dificuldade: 5,
    raciocinio: "Repartição de competências: separar legislar sobre trânsito, privativo da União, de implantar política de educação para a segurança do trânsito, competência comum.",
    enunciado:
      "Uma lei estadual (i) cria infração de trânsito própria, punida com multa, para quem trafegar com película escura nos vidros pelas rodovias estaduais, e (ii) institui programa estadual de educação para a segurança do trânsito nas escolas. À luz da repartição de competências da Constituição,",
    alternativas: [
      "a parte (i) é válida, porque o Estado legisla sobre trânsito nas suas rodovias, e a parte (ii) invade competência da União.",
      "a parte (i) invade a competência legislativa privativa da União, e a parte (ii) é válida, por ser competência comum.",
      "as duas partes são válidas, porque trânsito é matéria de competência legislativa concorrente da União, dos Estados e do DF.",
      "as duas partes invadem a competência privativa da União, porque qualquer norma estadual sobre trânsito é inválida.",
      "as duas partes são válidas, porque o § 10 do art. 144 atribui a segurança viária, nos Estados, aos órgãos estaduais.",
    ],
    correta: 1,
    explicacao:
      "O art. 22, XI, reserva à União legislar sobre trânsito e transporte; por isso o CTB é lei federal, e o Estado não pode criar infração nem multa de trânsito, nem mesmo para as rodovias estaduais. Já estabelecer e implantar política de educação para a segurança do trânsito é competência comum da União, dos Estados, do DF e dos Municípios (art. 23, XII), e o programa nas escolas se encaixa aí.",
    explicacaoErradas:
      "Ter rodovias próprias não dá ao Estado competência para legislar sobre trânsito, e a educação para o trânsito não é reservada à União. Trânsito não está na competência concorrente do art. 24. Nem toda norma estadual ligada ao trânsito é inválida: políticas de educação para a segurança do trânsito são competência comum. E o § 10 do art. 144 trata dos órgãos que executam a segurança viária, sem dar ao Estado competência para legislar sobre trânsito.",
    pegadinha:
      "As duas partes falam de trânsito, o que leva a tratá-las do mesmo jeito; mas legislar sobre trânsito é privativo da União, e implantar política de educação para a segurança do trânsito é competência comum.",
    conhecimento:
      "CF, art. 22, XI; art. 23, XII; art. 24; art. 144, § 10.",
    origem: "banco",
  },
];
