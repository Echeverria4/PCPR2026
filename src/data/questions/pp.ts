import type { Question } from "../../lib/types";

export const QUESTOES_PP: Question[] = [
  {
    id: "pp-001",
    materia: "pp",
    topico: "Inquérito policial",
    enunciado:
      "O inquérito policial, conduzido pela autoridade policial (delegado de polícia), tem natureza jurídica de procedimento:",
    alternativas: [
      "Judicial e contraditório, com direito a ampla defesa como no processo penal",
      "Administrativo, inquisitivo e de caráter preparatório, dispensável em determinadas hipóteses",
      "Jurisdicional, imprescindível para toda e qualquer ação penal",
      "Exclusivamente cível",
      "Legislativo",
    ],
    correta: 1,
    explicacao:
      "O inquérito policial é procedimento administrativo, presidido pela autoridade policial, de natureza inquisitiva (sem contraditório pleno) e caráter preparatório da ação penal, sendo dispensável quando o titular da ação já dispuser de elementos suficientes para oferecer a denúncia ou queixa.",
    origem: "banco",
  },
  {
    id: "pp-002",
    materia: "pp",
    topico: "Prisão em flagrante",
    enunciado:
      "Considera-se em flagrante delito quem está cometendo a infração penal, quem acaba de cometê-la, ou quem é perseguido, logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração — trata-se, respectivamente, das modalidades de flagrante:",
    alternativas: [
      "Próprio, impróprio (quase-flagrante) e presumido (ficto)",
      "Preparado, esperado e forjado",
      "Diferido, retardado e postergado",
      "Facultativo, obrigatório e vedado",
      "Simples, qualificado e privilegiado",
    ],
    correta: 0,
    explicacao:
      "O art. 302 do CPP prevê: flagrante próprio (I e II — está cometendo ou acaba de cometer), flagrante impróprio ou quase-flagrante (III — perseguido logo após) e flagrante presumido ou ficto (IV — encontrado logo depois com instrumentos que façam presumir ser o autor).",
    origem: "banco",
  },
  {
    id: "pp-003",
    materia: "pp",
    topico: "Medidas cautelares",
    enunciado:
      "Após a reforma trazida pela Lei nº 12.403/2011, a prisão preventiva deve ser decretada:",
    alternativas: [
      "Como regra geral em qualquer investigação criminal",
      "Como medida excepcional, apenas quando inadequadas ou insuficientes as demais medidas cautelares diversas da prisão",
      "Automaticamente, sempre que houver flagrante delito",
      "Somente a pedido da vítima, nunca de ofício ou por representação da autoridade policial",
      "Exclusivamente em crimes de menor potencial ofensivo",
    ],
    correta: 1,
    explicacao:
      "A prisão preventiva é medida excepcional (art. 282, §6º, e art. 312 do CPP), cabível apenas quando outras medidas cautelares diversas da prisão (art. 319) se mostrarem inadequadas ou insuficientes para a situação concreta, prestigiando-se a excepcionalidade da prisão antes da condenação definitiva.",
    origem: "banco",
  },
  {
    id: "pp-004",
    materia: "pp",
    topico: "Prova no processo penal",
    enunciado:
      "São inadmissíveis no processo, devendo ser desentranhadas, as provas produzidas por meios:",
    alternativas: [
      "Periciais, ainda que corretamente produzidas",
      "Ilícitos, assim como as delas derivadas, ressalvadas exceções legais como a descoberta inevitável",
      "Testemunhais, em qualquer hipótese",
      "Documentais, em qualquer hipótese",
      "Confissões espontâneas do próprio acusado",
    ],
    correta: 1,
    explicacao:
      "O art. 5º, LVI, da CF e o art. 157 do CPP vedam as provas obtidas por meios ilícitos, bem como, em regra, as provas derivadas destas (teoria dos frutos da árvore envenenada), ressalvadas exceções como a fonte independente e a descoberta inevitável.",
    origem: "banco",
  },
  {
    id: "pp-005",
    materia: "pp",
    topico: "Ação penal",
    enunciado:
      "A ação penal que, em regra, é promovida exclusivamente pelo Ministério Público, independentemente de qualquer manifestação de vontade da vítima, é a ação penal:",
    alternativas: [
      "Privada exclusiva",
      "Pública incondicionada",
      "Privada subsidiária da pública",
      "Pública condicionada à representação",
      "Popular",
    ],
    correta: 1,
    explicacao:
      "Na ação penal pública incondicionada, o Ministério Público promove a ação independentemente de representação da vítima ou de requisição, bastando a notícia do crime. Já a pública condicionada exige representação do ofendido ou requisição do Ministro da Justiça; a privada é promovida pelo próprio ofendido, por meio de queixa-crime.",
    origem: "banco",
  },
  {
    id: "pp-006",
    materia: "pp",
    topico: "Competência",
    enunciado:
      "Em regra, a competência para processar e julgar um crime é definida, primordialmente, pelo critério do lugar:",
    alternativas: [
      "Do domicílio da vítima",
      "Onde se consumou a infração, ou, no caso de tentativa, onde foi praticado o último ato de execução",
      "Do domicílio do réu, sempre",
      "Da autoridade policial que presidiu o inquérito",
      "Escolhido livremente pelo Ministério Público",
    ],
    correta: 1,
    explicacao:
      "O art. 70 do CPP fixa a competência, em regra, pelo lugar da consumação da infração; na tentativa, pelo local em que foi praticado o último ato de execução.",
    origem: "banco",
  },
  {
    id: "pp-007",
    materia: "pp",
    topico: "Legislação processual penal extravagante",
    enunciado:
      "A Lei nº 15.358/2026, mencionada no Anexo I do edital como \"Marco Legal do Combate ao Crime Organizado\", integra o conteúdo programático de:",
    alternativas: [
      "Direito Constitucional",
      "Direito Processual Penal e Legislação Processual Penal Extravagante",
      "Direitos Humanos",
      "Contabilidade Geral",
      "Realidade do Paraná",
    ],
    correta: 1,
    explicacao:
      "O item 7 do Anexo I do edital (Direito Processual Penal e Legislação Processual Penal Extravagante) cita nominalmente a Lei nº 15.358/2026. Por ser lei recém-editada em 2026, é apontada pelo material de estudo como tema de alto potencial de cobrança literal na prova, já que ainda não foi amplamente explorada por cursinhos.",
    origem: "banco",
  },
  {
    id: "pp-008",
    materia: "pp",
    topico: "Prisão em flagrante",
    enunciado:
      "Após a prisão em flagrante de uma pessoa, a comunicação da prisão deve ser feita imediatamente, entre outros destinatários, ao juiz competente e:",
    alternativas: [
      "Apenas à imprensa local",
      "À família do preso ou pessoa por ele indicada, e ao Ministério Público",
      "Somente ao Ministério Público, sendo dispensada a comunicação à família",
      "Exclusivamente à Defensoria Pública",
      "Apenas ao superior hierárquico da autoridade policial",
    ],
    correta: 1,
    explicacao:
      "O art. 5º, LXII, da CF e o art. 306 do CPP determinam que a prisão de qualquer pessoa seja imediatamente comunicada ao juiz competente e à família do preso ou à pessoa por ele indicada, remetendo-se cópia do auto de prisão em flagrante, no mesmo prazo, ao Ministério Público.",
    origem: "banco",
  },
  {
    id: "pp-009",
    materia: "pp",
    topico: "Prisão em flagrante",
    enunciado:
      "A polícia, tendo recebido informação de que ocorreria a entrega de drogas em determinado local, posiciona-se e aguarda a chegada dos agentes, efetuando a prisão no momento da entrega, sem qualquer indução à prática do crime. Nessa hipótese, o flagrante é:",
    alternativas: [
      "Preparado, e portanto ilegal, por configurar crime impossível (Súmula 145 do STF)",
      "Esperado, e portanto válido, pois a polícia apenas aguardou a ocorrência do crime já planejado, sem induzir sua prática",
      "Forjado, e portanto nulo de pleno direito",
      "Presumido, dependente de decisão judicial posterior que o convalide",
      "Impróprio, por exigir perseguição imediata ao agente",
    ],
    correta: 1,
    explicacao:
      "No flagrante esperado, a polícia apenas aguarda a ocorrência do crime já planejado pelo agente, sem induzi-lo à prática — é válido. Diferente do flagrante preparado (provocado), em que o agente é induzido por terceiro a cometer crime que, pela própria armação, não se consumaria — hipótese de crime impossível, segundo a Súmula 145 do STF: \"Não há crime, quando a preparação do flagrante pelo policial torna impossível a sua consumação.\"",
    origem: "banco",
  },
  {
    id: "pp-010",
    materia: "pp",
    topico: "Inquérito policial",
    enunciado: "Segundo o art. 10 do CPP, o inquérito policial deverá terminar no prazo de:",
    alternativas: [
      "10 dias, se o indiciado estiver preso, e 30 dias, se solto, sendo este último prorrogável",
      "30 dias, se o indiciado estiver preso, e 10 dias, se solto",
      "15 dias, independentemente de o indiciado estar preso ou solto",
      "10 dias, em qualquer hipótese, sem possibilidade de prorrogação",
      "60 dias, se preso, prorrogável indefinidamente a critério do delegado",
    ],
    correta: 0,
    explicacao:
      "O art. 10 do CPP fixa o prazo de 10 dias para conclusão do inquérito, contados da prisão, quando o indiciado estiver preso (improrrogável, sob pena de relaxamento da prisão), e de 30 dias quando solto, prazo este prorrogável a critério do juiz, mediante pedido fundamentado da autoridade policial.",
    origem: "banco",
  },
  {
    id: "pp-011",
    materia: "pp",
    topico: "Legislação processual penal extravagante",
    enunciado:
      "Na Lei de Drogas (Lei nº 11.343/2006), os prazos para conclusão do inquérito policial, em caso de indiciado preso e solto, respectivamente, são de:",
    alternativas: [
      "10 e 30 dias, como na regra geral do CPP",
      "30 e 90 dias, podendo ambos ser duplicados pelo juiz, ouvido o Ministério Público, mediante pedido justificado da autoridade policial",
      "5 e 15 dias, improrrogáveis",
      "30 e 60 dias, improrrogáveis",
      "90 e 30 dias, respectivamente",
    ],
    correta: 1,
    explicacao:
      "O art. 51 da Lei 11.343/2006 estabelece prazo de 30 dias para conclusão do inquérito se o indiciado estiver preso, e de 90 dias se solto — prazos que podem ser duplicados pelo juiz, ouvido o Ministério Público, mediante pedido justificado da autoridade de polícia.",
    origem: "banco",
  },
  {
    id: "pp-012",
    materia: "pp",
    topico: "Inquérito policial",
    enunciado: "Uma das características do inquérito policial é a indisponibilidade, que significa que:",
    alternativas: [
      "A autoridade policial pode arquivar o inquérito quando entender ausente justa causa",
      "A autoridade policial não pode determinar o arquivamento do inquérito, cabendo essa decisão exclusivamente ao titular da ação penal",
      "O inquérito só pode ser instaurado mediante autorização judicial prévia",
      "O delegado pode suspender indefinidamente as investigações a seu exclusivo critério",
      "O ofendido pode determinar o encerramento do inquérito a qualquer tempo",
    ],
    correta: 1,
    explicacao:
      "A indisponibilidade do inquérito policial significa que a autoridade policial não pode arquivá-lo, ainda que conclua pela ausência de indícios — cabe exclusivamente ao titular da ação penal (o Ministério Público, na ação pública) decidir pelo arquivamento, não podendo o delegado fazê-lo por iniciativa própria.",
    origem: "banco",
  },
  {
    id: "pp-013",
    materia: "pp",
    topico: "Inquérito policial",
    enunciado:
      "O ato de indiciamento, mediante o qual a autoridade policial atribui a alguém a suposta autoria de uma infração penal, com base em juízo de indícios sobre autoria e materialidade, é, segundo a Lei nº 12.830/2013:",
    alternativas: [
      "Ato privativo da autoridade policial, que deve ser fundamentado",
      "Ato privativo do Ministério Público",
      "Ato privativo do juiz, mediante decisão fundamentada",
      "Dispensável de motivação, por se tratar de simples formalidade interna",
      "Ato que pode ser realizado por qualquer servidor da polícia, independentemente do cargo",
    ],
    correta: 0,
    explicacao:
      "O art. 2º, §6º, da Lei 12.830/2013 estabelece que o indiciamento é ato privativo do delegado de polícia, mediante análise técnico-jurídica do fato, devendo ser fundamentado, com indicação da autoria, materialidade e suas circunstâncias.",
    origem: "banco",
  },
  {
    id: "pp-014",
    materia: "pp",
    topico: "Inquérito policial",
    enunciado:
      "Uma vez arquivado o inquérito policial por falta de base para a denúncia, o desarquivamento e ulterior oferecimento de denúncia pelo Ministério Público, segundo a Súmula 524 do STF, somente é possível se:",
    alternativas: [
      "Houver decisão judicial autorizando expressamente, independentemente de novas provas",
      "Surgirem provas novas, não bastando a mera reavaliação das provas já existentes nos autos",
      "O ofendido requerer expressamente, ainda que sem provas novas",
      "Decorrido o prazo de 1 ano do arquivamento",
      "Nunca é possível, por força da coisa julgada material",
    ],
    correta: 1,
    explicacao:
      "A Súmula 524 do STF dispõe que, arquivado o inquérito policial por despacho do juiz, a requerimento do Promotor de Justiça, não pode a ação penal ser iniciada sem novas provas.",
    origem: "banco",
  },
  {
    id: "pp-015",
    materia: "pp",
    topico: "Medidas cautelares",
    enunciado:
      "Após as alterações trazidas pela Lei nº 13.964/2019 (Pacote Anticrime), a prisão preventiva:",
    alternativas: [
      "Pode ser decretada de ofício pelo juiz, tanto na fase de investigação quanto na ação penal",
      "Somente pode ser decretada mediante representação da autoridade policial ou requerimento do Ministério Público, do querelante ou do assistente — nunca de ofício",
      "Pode ser decretada de ofício pelo juiz apenas na fase de inquérito policial",
      "Pode ser decretada de ofício pelo juiz apenas durante a instrução processual",
      "Independe de fundamentação, bastando a existência de flagrante delito",
    ],
    correta: 1,
    explicacao:
      "O art. 311 do CPP, com redação dada pela Lei 13.964/2019, veda expressamente a decretação de ofício da prisão preventiva, tanto na fase investigativa quanto na fase processual, exigindo representação da autoridade policial ou requerimento do Ministério Público, do querelante ou do assistente.",
    origem: "banco",
  },
  {
    id: "pp-016",
    materia: "pp",
    topico: "Medidas cautelares",
    enunciado:
      "Segundo o art. 316, parágrafo único, do CPP (incluído pela Lei nº 13.964/2019), a prisão preventiva deve ter sua necessidade de manutenção revisada pelo órgão jurisdicional competente, mediante decisão fundamentada, no prazo máximo de:",
    alternativas: [
      "30 dias",
      "60 dias",
      "90 dias, sob pena de tornar a prisão ilegal",
      "180 dias",
      "1 ano",
    ],
    correta: 2,
    explicacao:
      "O art. 316, parágrafo único, do CPP exige que o juiz revise a necessidade de manutenção da prisão preventiva a cada 90 dias, mediante decisão fundamentada. Atenção: o STF (ADIs 6.581 e 6.582) fixou interpretação conforme no sentido de que o mero descumprimento desse prazo não gera a soltura automática do preso, tratando-se de dever de fundamentação periódica, e não de prazo fatal de duração da prisão.",
    origem: "banco",
  },
  {
    id: "pp-017",
    materia: "pp",
    topico: "Legislação processual penal extravagante",
    enunciado:
      "O Acordo de Não Persecução Penal (ANPP), previsto no art. 28-A do CPP, pode ser oferecido pelo Ministério Público quando, entre outros requisitos:",
    alternativas: [
      "O crime for cometido com violência ou grave ameaça à pessoa, desde que o investigado confesse formalmente",
      "A infração for cometida sem violência ou grave ameaça à pessoa, com pena mínima inferior a 4 anos, mediante confissão formal e circunstanciada, e o investigado não seja reincidente nem tenha conduta criminal habitual, reiterada ou profissional",
      "O investigado for reincidente específico no mesmo delito",
      "A pena mínima cominada ao delito for igual ou superior a 8 anos",
      "For dispensada qualquer confissão, bastando a mera concordância do investigado",
    ],
    correta: 1,
    explicacao:
      "O art. 28-A do CPP exige, para o ANPP: infração penal cometida sem violência ou grave ameaça, pena mínima inferior a 4 anos, confissão formal e circunstanciada do investigado, e necessidade/suficiência da medida para reprovação do crime — sendo vedado o benefício a reincidentes ou quando houver elementos que indiquem conduta criminal habitual, reiterada ou profissional.",
    origem: "banco",
  },
  {
    id: "pp-018",
    materia: "pp",
    topico: "Prova no processo penal",
    enunciado:
      "Sobre o procedimento de reconhecimento de pessoas previsto no art. 226 do CPP, a jurisprudência recente do STJ tem entendido que:",
    alternativas: [
      "O procedimento legal é mera recomendação, podendo a autoridade dispensá-lo livremente",
      "O reconhecimento fotográfico isolado, sem observância das formalidades legais, é suficiente, por si só, para fundamentar a condenação",
      "A observância das formalidades do art. 226 (descrição prévia da pessoa, colocação ao lado de outras semelhantes) é obrigatória, e o reconhecimento fotográfico isolado, sem posterior confirmação em juízo com observância do rito legal, não é apto, isoladamente, a lastrear a condenação",
      "O reconhecimento deve ser feito exclusivamente por fotografia, sendo vedado o reconhecimento pessoal presencial",
      "O procedimento se aplica apenas quando a testemunha o solicita, nunca de ofício",
    ],
    correta: 2,
    explicacao:
      "O STJ consolidou entendimento (a partir do HC 598.886/SC e julgados posteriores) de que as formalidades do art. 226 do CPP não são mera recomendação, mas procedimento probatório obrigatório, e que o reconhecimento fotográfico isolado, sem posterior confirmação em juízo observando o rito legal, não pode, isoladamente, embasar decreto condenatório — tema de altíssima incidência em provas recentes.",
    origem: "banco",
  },
  {
    id: "pp-019",
    materia: "pp",
    topico: "Legislação processual penal extravagante",
    enunciado:
      "O juiz das garantias, instituído pelos arts. 3º-A a 3º-F do CPP (Pacote Anticrime), tem como principal atribuição:",
    alternativas: [
      "Julgar o mérito da ação penal, substituindo o juiz da instrução",
      "Controlar a legalidade da investigação criminal e salvaguardar os direitos do investigado, atuando até o recebimento da denúncia, ficando impedido de atuar na fase de instrução e julgamento",
      "Presidir o inquérito policial em substituição à autoridade policial",
      "Atuar exclusivamente em segunda instância, revisando decisões do juiz de piso",
      "Ser o mesmo juiz que decreta a prisão preventiva e depois julga o processo, garantindo continuidade decisória",
    ],
    correta: 1,
    explicacao:
      "O juiz das garantias controla a legalidade da investigação criminal e salvaguarda os direitos do investigado, atuando desde a instauração da investigação até o recebimento da denúncia — ficando impedido de atuar na fase de instrução e julgamento, para preservar a imparcialidade do juízo de mérito. O STF (ADIs 6.298 e conexas) reconheceu a constitucionalidade do instituto, determinando sua implementação com adaptações.",
    origem: "banco",
  },
  {
    id: "pp-020",
    materia: "pp",
    topico: "Legislação processual penal extravagante",
    enunciado:
      "Segundo a Lei nº 12.850/2013 (Lei das Organizações Criminosas), a colaboração premiada, como meio de obtenção de prova:",
    alternativas: [
      "Pode, isoladamente, fundamentar decreto condenatório, dispensando outras provas",
      "Não pode ser o único fundamento de uma condenação, exigindo-se corroboração por outros elementos de prova independentes",
      "É vedada em qualquer hipótese no ordenamento jurídico brasileiro",
      "Somente pode ser celebrada após o trânsito em julgado da sentença condenatória",
      "Depende exclusivamente da vontade da autoridade policial, sem qualquer participação do Ministério Público",
    ],
    correta: 1,
    explicacao:
      "O art. 4º, §16, da Lei 12.850/2013 estabelece que nenhuma sentença condenatória será proferida com fundamento apenas nas declarações do agente colaborador, exigindo-se corroboração por outros elementos de prova independentes.",
    origem: "banco",
  },
  {
    id: "pp-021",
    materia: "pp",
    topico: "Legislação processual penal extravagante",
    enunciado:
      "Segundo a Lei nº 9.296/96, a interceptação das comunicações telefônicas, de qualquer natureza, para fins de investigação criminal ou instrução processual penal, depende de:",
    alternativas: [
      "Simples requisição da autoridade policial, sem necessidade de autorização judicial",
      "Ordem do juiz competente, sendo vedada quando o fato investigado constituir infração punida, no máximo, com detenção, com prazo de 15 dias, renovável por iguais períodos, comprovada a indispensabilidade do meio de prova",
      "Autorização do Ministério Público, dispensada qualquer intervenção judicial",
      "Autorização do próprio interceptado, mediante consentimento prévio e expresso",
      "Prazo máximo de 5 dias, improrrogável em qualquer hipótese",
    ],
    correta: 1,
    explicacao:
      "A Lei 9.296/96 exige ordem judicial fundamentada para a interceptação telefônica, vedada quando o fato investigado constituir infração punida, no máximo, com pena de detenção; o prazo é de 15 dias, renovável por iguais períodos, comprovada a indispensabilidade do meio de prova.",
    origem: "banco",
  },
  {
    id: "pp-022",
    materia: "pp",
    topico: "Medidas cautelares",
    enunciado:
      "A prisão temporária, disciplinada pela Lei nº 7.960/89, cabível apenas na fase de investigação e para os crimes taxativamente previstos em lei, tem prazo de duração de:",
    alternativas: [
      "5 dias, prorrogável por igual período em caso de extrema e comprovada necessidade; e de 30 dias, prorrogável por igual período, nos crimes hediondos e equiparados",
      "10 dias, improrrogável, em qualquer hipótese",
      "15 dias, prorrogável indefinidamente a critério do juiz",
      "30 dias, improrrogável",
      "90 dias, duplicável mediante pedido do delegado",
    ],
    correta: 0,
    explicacao:
      "A prisão temporária tem prazo de 5 dias, prorrogável por igual período em caso de extrema e comprovada necessidade (regra geral), e de 30 dias, prorrogável por igual período, nos crimes hediondos e equiparados (Lei 8.072/90). É cabível apenas durante a investigação, mediante representação da autoridade policial ou requerimento do Ministério Público, jamais decretada de ofício pelo juiz.",
    origem: "banco",
  },
];
