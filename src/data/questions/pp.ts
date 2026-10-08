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
    topico: "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)",
    enunciado:
      "Segundo a Lei nº 15.358/2026, considera-se organização criminosa ultraviolenta, denominada facção criminosa, o agrupamento de:",
    alternativas: [
      "3 ou mais pessoas que emprega violência, grave ameaça ou coação para impor controle territorial ou social, intimidar populações ou autoridades ou atacar serviços, infraestrutura ou equipamentos essenciais.",
      "4 ou mais pessoas estruturalmente ordenado e com divisão de tarefas, para a prática de infrações com pena máxima superior a 4 anos.",
      "3 ou mais pessoas associadas para o fim específico de cometer crimes, ainda que sem emprego de violência.",
      "2 ou mais pessoas que pratiquem, reiteradamente ou não, crimes com emprego de arma de fogo de uso restrito.",
      "5 ou mais pessoas com atuação em mais de um Estado da Federação, dispensada a prova de controle territorial.",
    ],
    correta: 0,
    explicacao:
      "Art. 2º, §2º, da Lei 15.358/2026: 3 ou mais pessoas que empregam violência, grave ameaça ou coação para impor controle territorial ou social, intimidar populações ou autoridades ou atacar serviços e infraestrutura essenciais. A definição de 4 ou mais pessoas, estruturalmente ordenada e com divisão de tarefas, é a da organização criminosa da Lei 12.850 (art. 1º, §1º). A de 3 ou mais pessoas para o fim específico de cometer crimes é a da associação criminosa (CP, art. 288).",
    origem: "banco",
    fonte: "Lei 15.358/2026 (Planalto)",
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
  {
    id: "pp-023",
    materia: "pp",
    topico: "Audiência de custódia — prazo, finalidade e consequências da ausência",
    enunciado:
      "Toda pessoa presa em flagrante delito deve ser apresentada a um juiz em audiência de custódia no prazo de:",
    alternativas: [
      "48 horas, prorrogáveis por igual período mediante justificativa da autoridade policial.",
      "24 horas.",
      "5 dias, contados da lavratura do auto de prisão em flagrante.",
      "72 horas, improrrogáveis.",
      "10 dias, salvo em comarcas do interior.",
    ],
    correta: 1,
    explicacao:
      "A audiência de custódia deve ocorrer em até 24 horas da prisão, conforme a Convenção Americana de Direitos Humanos, regulamentação do CNJ e o art. 310 do CPP, permitindo ao juiz verificar a legalidade e a necessidade da prisão, checar eventual tortura ou maus-tratos, e decidir sobre conversão em preventiva, liberdade provisória ou relaxamento.",
    origem: "banco",
  },
  {
    id: "pp-024",
    materia: "pp",
    topico: "Audiência de custódia — prazo, finalidade e consequências da ausência",
    enunciado:
      "Sobre a não realização da audiência de custódia no prazo legal, sem motivação idônea, é correto afirmar, à luz do CPP e da interpretação dada pelo STF:",
    alternativas: [
      "Gera nulidade absoluta da ação penal superveniente, que deve ser anulada desde o recebimento da denúncia.",
      "Não tem consequência alguma, pois a audiência é mera recomendação do CNJ, sem previsão legal.",
      "A autoridade que lhe deu causa responde administrativa, civil e penalmente, e a prisão pode ser reconhecida como ilegal, sem prejuízo da imediata decretação da preventiva, não havendo soltura automática.",
      "Converte automaticamente a prisão em flagrante em prisão preventiva, como sanção à demora.",
      "Impõe a soltura imediata e definitiva do preso, vedada nova prisão pelos mesmos fatos.",
    ],
    correta: 2,
    explicacao:
      "O art. 310, §3º, do CPP responsabiliza administrativa, civil e penalmente quem deu causa à omissão. O §4º diz que, passadas 24 horas além do prazo, a falta de audiência sem motivação idônea torna a prisão ilegal, a ser relaxada, sem prejuízo da imediata decretação da preventiva. O STF (ADI 6.298 e outras) deu interpretação conforme ao §4º, para que o juiz avalie a prorrogação excepcional do prazo ou a videoconferência. Daí a ideia de que não há soltura nem nulidade automáticas. O vício atinge a prisão, e não a ação penal.",
    origem: "banco",
    fonte: "CPP, art. 310, §§3º e 4º; STF, ADI 6.298",
  },
  {
    id: "pp-025",
    materia: "pp",
    topico: "Provas ilícitas e prova ilícita por derivação (teoria dos frutos da árvore envenenada)",
    enunciado:
      "A teoria dos \"frutos da árvore envenenada\", incorporada ao art. 157, §1º, do CPP, estabelece que:",
    alternativas: [
      "Provas lícitas descobertas em razão de uma prova ilícita anterior também são inadmissíveis, por contaminação derivada.",
      "Somente a prova ilícita originária é inadmissível; as provas dela derivadas permanecem sempre válidas.",
      "Toda prova obtida por policial, ainda que lícita, é presumidamente contaminada.",
      "A prova ilícita pode ser utilizada se beneficiar exclusivamente a acusação.",
      "A contaminação da prova só se aplica a interceptações telefônicas.",
    ],
    correta: 0,
    explicacao:
      "Pela teoria dos frutos da árvore envenenada (fruits of the poisonous tree), incorporada ao art. 157, §1º, do CPP, se a prova inicial (árvore) é ilícita, as provas dela derivadas (frutos), ainda que lícitas em si, também são contaminadas e devem ser desentranhadas dos autos — ressalvadas as exceções da fonte independente e da descoberta inevitável.",
    origem: "banco",
  },
  {
    id: "pp-026",
    materia: "pp",
    topico: "Provas ilícitas e prova ilícita por derivação (teoria dos frutos da árvore envenenada)",
    enunciado:
      "São reconhecidas pela jurisprudência como exceções à teoria dos frutos da árvore envenenada, admitindo a prova derivada mesmo havendo ilicitude anterior:",
    alternativas: [
      "A confissão do acusado e o testemunho de terceiros, sempre.",
      "A fonte independente e a descoberta inevitável.",
      "A urgência da investigação e o interesse público, isoladamente considerados.",
      "A autorização posterior do juiz, ainda que informal.",
      "A gravidade do crime investigado, por si só.",
    ],
    correta: 1,
    explicacao:
      "As exceções reconhecidas pela jurisprudência são a fonte independente (quando a prova derivada teria sido obtida de qualquer forma, por outro caminho lícito) e a descoberta inevitável (quando, mesmo sem a ilicitude, a prova seria inevitavelmente descoberta pelos meios investigativos em curso) — mera urgência, gravidade do crime ou autorização informal não afastam a contaminação.",
    origem: "banco",
  },
  {
    id: "pp-027",
    materia: "pp",
    topico: "Colaboração premiada — requisitos e benefícios",
    enunciado:
      "São requisitos centrais para a validade da colaboração premiada prevista na Lei 12.850/2013:",
    alternativas: [
      "Voluntariedade da colaboração e efetividade do resultado, não bastando meras alegações sem comprovação.",
      "Coação do investigado pela autoridade policial e sigilo absoluto até o trânsito em julgado.",
      "Confissão integral de todos os corréus e ausência de participação do Ministério Público.",
      "Homologação automática, independentemente de análise judicial do conteúdo do acordo.",
      "Concordância unânime de todos os corréus delatados.",
    ],
    correta: 0,
    explicacao:
      "A Lei 12.850/2013 exige voluntariedade da colaboração e efetividade do resultado como requisitos centrais — meras alegações sem comprovação não bastam. O acordo deve ser formalizado com participação do Ministério Público e homologado judicialmente, não podendo decorrer de coação, nem depender de concordância dos delatados.",
    origem: "banco",
  },
  {
    id: "pp-028",
    materia: "pp",
    topico: "Colaboração premiada — requisitos e benefícios",
    enunciado:
      "Entre os benefícios possíveis ao colaborador que celebra acordo de colaboração premiada homologado judicialmente, está:",
    alternativas: [
      "Anistia automática, extensível a todos os corréus do processo.",
      "Perdão judicial ou redução de pena em até dois terços, ou substituição da pena privativa de liberdade por restritiva de direitos.",
      "Imunidade penal vitalícia para quaisquer crimes futuros.",
      "Dispensa automática de qualquer forma de ressarcimento do dano causado.",
      "Sigilo processual eterno, mesmo após o trânsito em julgado da sentença.",
    ],
    correta: 1,
    explicacao:
      "Os benefícios possíveis vão do perdão judicial à redução de pena em até dois terços, ou substituição da pena privativa de liberdade por restritiva de direitos, sempre formalizados por acordo homologado judicialmente, com participação do Ministério Público — não há anistia automática extensível a terceiros, nem imunidade vitalícia para crimes futuros.",
    origem: "banco",
  },
  {
    id: "pp-029",
    materia: "pp",
    topico: "Cadeia de custódia da prova (arts. 158-A a 158-F do CPP)",
    enunciado:
      "A cadeia de custódia da prova, introduzida no CPP pelo Pacote Anticrime (Lei 13.964/2019), tem como finalidade principal:",
    alternativas: [
      "Acelerar o trâmite processual, dispensando a produção de laudo pericial formal.",
      "Documentar e preservar a história de um vestígio, desde sua descoberta até seu descarte, garantindo idoneidade e rastreabilidade da prova.",
      "Substituir a perícia oficial por perícia particular contratada pelas partes.",
      "Autorizar o descarte imediato de vestígios não utilizados na denúncia.",
      "Transferir a responsabilidade pela guarda da prova exclusivamente ao Ministério Público.",
    ],
    correta: 1,
    explicacao:
      "A cadeia de custódia é o conjunto de procedimentos que documenta e preserva a história de um vestígio, desde sua descoberta no local de crime até seu descarte, garantindo a idoneidade e a rastreabilidade da prova, com registro de cada pessoa que teve contato com ele — não substitui a perícia oficial nem acelera o processo por si só.",
    origem: "banco",
  },
  {
    id: "pp-030",
    materia: "pp",
    topico: "Cadeia de custódia da prova (arts. 158-A a 158-F do CPP)",
    enunciado:
      "A quebra da cadeia de custódia de um vestígio, mesmo quando o vestígio em si é autêntico, pode comprometer a validade da prova em juízo porque:",
    alternativas: [
      "Toda prova pericial é automaticamente nula após 30 dias de sua coleta.",
      "A perda de rastreabilidade e o manuseio sem registro colocam em dúvida se o vestígio não foi alterado, substituído ou contaminado ao longo do processo.",
      "A legislação exige que o vestígio seja destruído após qualquer falha de registro.",
      "O Ministério Público perde automaticamente a titularidade da ação penal.",
      "A cadeia de custódia só se aplica a provas documentais, não a vestígios materiais.",
    ],
    correta: 1,
    explicacao:
      "A quebra da cadeia de custódia — perda de rastreabilidade, manuseio sem registro, troca de embalagem inadequada — pode comprometer a validade da prova em juízo, ainda que o vestígio em si seja autêntico, por colocar em dúvida se ele não foi alterado, substituído ou contaminado ao longo do processo, e não por qualquer prazo automático de invalidade ou perda de titularidade da ação penal.",
    origem: "banco",
  },
  {
    id: "pp-031",
    materia: "pp",
    topico: "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)",
    enunciado:
      "Integrante de facção criminosa que, para impor domínio sobre uma comunidade, ordena a colocação de barricadas e incêndios em vias para impedir a entrada da polícia comete, segundo a Lei nº 15.358/2026, crime de domínio social estruturado, punido com:",
    alternativas: [
      "reclusão, de 20 a 40 anos, sem prejuízo das sanções correspondentes à violência, à ameaça ou a outros crimes.",
      "reclusão, de 12 a 20 anos, e multa.",
      "reclusão, de 3 a 8 anos, e multa, sem prejuízo das penas das demais infrações praticadas.",
      "reclusão, de 1 a 3 anos.",
      "reclusão, de 6 a 20 anos, absorvidas as penas dos crimes praticados com violência.",
    ],
    correta: 0,
    explicacao:
      "Art. 2º, III, da Lei 15.358/2026: impedir ou dificultar a atuação das forças de segurança por barricadas, bloqueios ou incêndios. A pena é de 20 a 40 anos, sem prejuízo das sanções da violência, da ameaça e de outros crimes. Já 12 a 20 anos e multa é a pena do favorecimento (art. 3º); 3 a 8 anos é a da organização criminosa da Lei 12.850; e 1 a 3 anos é a da ameaça do novo art. 147-C do CP.",
    origem: "banco",
    fonte: "Lei 15.358/2026 (Planalto)",
  },
  {
    id: "pp-032",
    materia: "pp",
    topico: "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)",
    enunciado:
      "De acordo com a Lei nº 15.358/2026, os crimes de domínio social estruturado e de favorecimento ao domínio social estruturado:",
    alternativas: [
      "são insuscetíveis de anistia, graça, indulto, fiança e livramento condicional, além de serem considerados hediondos.",
      "são insuscetíveis apenas de anistia, graça e indulto, admitindo fiança e livramento condicional nos termos gerais.",
      "vedam integralmente a progressão de regime, devendo a pena ser cumprida inteiramente em regime fechado.",
      "são equiparados a hediondos apenas quando praticados com emprego de arma de fogo de uso restrito.",
      "admitem fiança arbitrada pelo juiz, mas vedam a liberdade provisória sem fiança.",
    ],
    correta: 0,
    explicacao:
      "O art. 2º, §4º, torna esses crimes insuscetíveis de anistia, graça, indulto, fiança e livramento condicional. Pelo parágrafo único do art. 3º, isso também vale para o favorecimento. Pelo art. 4º, ambos são hediondos para todos os fins. Não há vedação total da progressão, que o STF já julgou inconstitucional em lei anterior (HC 82.959; Súmula Vinculante 26): a progressão segue as frações da LEP, como os 75% do art. 112, VI, para o comando de facção.",
    origem: "banco",
    fonte: "Lei 15.358/2026 (Planalto)",
  },
  {
    id: "pp-033",
    materia: "pp",
    topico: "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)",
    enunciado:
      "Quanto aos atos preparatórios do crime de domínio social estruturado, a Lei nº 15.358/2026 estabelece que quem os pratica com propósito inequívoco de consumar a conduta:",
    alternativas: [
      "não é punível, pois a fase de preparação do iter criminis é sempre impunível no direito brasileiro.",
      "fica sujeito à pena do crime consumado, reduzida de 1/3 até a metade.",
      "responde pela tentativa, com a pena diminuída de 1/3 a 2/3.",
      "fica sujeito à pena do crime consumado, sem qualquer redução.",
      "fica sujeito à pena do crime consumado, reduzida de 1/4 até a metade, como na Lei Antiterrorismo.",
    ],
    correta: 1,
    explicacao:
      "Art. 2º, §5º: atos preparatórios com propósito inequívoco de consumar levam à pena do consumado reduzida de 1/3 até a metade. É exceção legal à regra de impunidade da preparação. Não confunda: a tentativa do CP (art. 14, parágrafo único) reduz de 1/3 a 2/3, e a Lei Antiterrorismo (Lei 13.260, art. 5º) pune a preparação com a pena do consumado diminuída de 1/4 até a metade.",
    origem: "banco",
    fonte: "Lei 15.358/2026 (Planalto)",
  },
  {
    id: "pp-034",
    materia: "pp",
    topico: "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)",
    enunciado:
      "Nos crimes previstos na Lei nº 15.358/2026, o inquérito policial deve ser concluído no prazo de:",
    alternativas: [
      "10 dias, se o indiciado estiver preso, e 30 dias, se estiver solto.",
      "30 dias, se o indiciado estiver preso, e 90 dias, se estiver solto, podendo ser duplicados.",
      "90 dias, se o indiciado estiver preso, e 270 dias, se estiver solto, prorrogável por igual período.",
      "15 dias, prorrogáveis por mais 15, se o indiciado estiver preso, e 30 dias, se estiver solto.",
      "120 dias, independentemente de o indiciado estar preso ou solto, vedada a prorrogação.",
    ],
    correta: 2,
    explicacao:
      "Art. 5º da Lei 15.358/2026: 90 dias com o indiciado preso e 270 dias com ele solto, prorrogável por igual período. 10 e 30 dias é a regra do CPP (art. 10); 30 e 90 dias, duplicáveis, é a da Lei de Drogas (art. 51); 15 mais 15 dias com preso é o inquérito federal (Lei 5.010/66). O §4º do art. 5º acrescenta que descumprir esses prazos não gera relaxamento automático.",
    origem: "banco",
    fonte: "Lei 15.358/2026 (Planalto)",
  },
  {
    id: "pp-035",
    materia: "pp",
    topico: "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)",
    enunciado:
      "Em inquérito sobre crime da Lei nº 15.358/2026, o delegado de polícia representa por medida cautelar, o juiz a indefere e o Ministério Público não recorre. Nos termos da lei, o delegado:",
    alternativas: [
      "poderá interpor recurso em sentido estrito diretamente ao Tribunal de Justiça, por ter legitimidade recursal própria.",
      "poderá, no prazo de 48 horas, submeter a matéria à revisão da instância superior competente do órgão ministerial, que deliberará no mesmo prazo.",
      "nada poderá fazer, pois a decisão de indeferimento é irrecorrível e faz coisa julgada material.",
      "deverá renovar a representação perante o juiz das garantias de outra comarca.",
      "poderá impetrar habeas corpus em favor da sociedade para obter a medida.",
    ],
    correta: 1,
    explicacao:
      "Art. 5º, §6º, da Lei 15.358/2026: indeferida a representação e sem recurso do MP, o delegado pode, em 48 horas, submeter a matéria à revisão da instância superior competente do MP, conforme a Lei Orgânica, para deliberação no mesmo prazo. Pelo mesmo artigo, o juiz decide as representações em 15 dias (§1º), o MP dá parecer em 5 dias (§2º) e, na urgência, MP e juiz atuam em 24 horas (§3º).",
    origem: "banco",
    fonte: "Lei 15.358/2026 (Planalto)",
  },
  {
    id: "pp-036",
    materia: "pp",
    topico: "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)",
    enunciado:
      "Sobre as medidas assecuratórias previstas na Lei nº 15.358/2026, assinale a alternativa correta.",
    alternativas: [
      "Só podem ser decretadas após o recebimento da denúncia, mediante prévio contraditório.",
      "Dependem sempre de requerimento do Ministério Público, sendo vedadas a decretação de ofício e a representação do delegado.",
      "O perdimento de bens exige, em qualquer caso, sentença penal condenatória transitada em julgado.",
      "Podem ser decretadas sem prévia oitiva da parte, com contraditório diferido, e o investigado pode, em 10 dias da intimação, apresentar provas da origem lícita do bem.",
      "Não alcançam ativos digitais, criptoativos nem transferências via Pix, por falta de previsão legal.",
    ],
    correta: 3,
    explicacao:
      "Art. 9º: o juiz pode decretá-las de ofício, a requerimento do MP ou por representação do delegado, na investigação ou na ação penal. Alcançam ativos digitais (I) e Pix e corretoras de criptoativos (IV). O §1º permite a decretação sem prévia oitiva, com contraditório diferido, e o §6º dá 10 dias da intimação para provar a origem lícita. Se a origem ilícita ficar clara, cabe perdimento extraordinário independentemente de condenação (§8º).",
    origem: "banco",
    fonte: "Lei 15.358/2026 (Planalto)",
  },
  {
    id: "pp-037",
    materia: "pp",
    topico: "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)",
    enunciado:
      "Homicídio doloso cometido por integrante de organização criminosa ultraviolenta, conexo a crime de domínio social estruturado, será julgado, segundo a literalidade da Lei nº 15.358/2026 e do CPP por ela alterado:",
    alternativas: [
      "pelo Tribunal do Júri, que sempre prevalece no concurso com outro órgão da jurisdição comum.",
      "pela Justiça Federal, em razão da natureza de crime organizado.",
      "pelo juiz singular da vara criminal comum, com posterior referendo do Tribunal do Júri.",
      "pela Vara Criminal Colegiada a que se refere o art. 1º-A da Lei nº 12.694/2012.",
      "pelo Tribunal de Justiça, em competência originária.",
    ],
    correta: 3,
    explicacao:
      "Art. 2º, §8º, da Lei 15.358/2026: homicídios, consumados ou tentados, cometidos por membros de facção, grupo paramilitar ou milícia, conexos a esses crimes, são julgados pelas Varas Criminais Colegiadas (Lei 12.694, art. 1º-A). O CPP, art. 78, I, foi alterado para excepcionar a prevalência do júri nesses casos. A questão pede a literalidade: a compatibilidade com o art. 5º, XXXVIII, da CF ainda deve ser debatida no STF.",
    origem: "banco",
    fonte: "Lei 15.358/2026 (Planalto)",
  },
  {
    id: "pp-038",
    materia: "pp",
    topico: "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)",
    enunciado:
      "Integrante de facção criminosa é preso em flagrante pela prática de domínio social estruturado. À luz da Lei nº 15.358/2026 e do CPP, é correto afirmar que:",
    alternativas: [
      "o juiz poderá decretar a preventiva de ofício, dispensada a representação do delegado ou o requerimento do MP.",
      "a prática do crime é causa suficiente para a decretação da preventiva, e o CPP passou a admiti-la para integrante de facção no contexto das condutas do art. 2º da lei.",
      "a preventiva fica vedada, pois o inquérito tem prazo certo de 90 dias e a prisão deve aguardar o seu término.",
      "cabe apenas prisão temporária, por se tratar de crime hediondo.",
      "a liberdade provisória com fiança é direito subjetivo do preso, por ser a primeira infração.",
    ],
    correta: 1,
    explicacao:
      "O art. 2º, §9º, da Lei 15.358/2026 diz que a prática do crime é causa suficiente para a preventiva. A lei também incluiu o inciso V no art. 313 do CPP. Continua vedada a preventiva de ofício (CPP, arts. 282, §2º, e 311). O crime é inafiançável (§4º, II).",
    origem: "banco",
    fonte: "Lei 15.358/2026 (Planalto)",
  },
  {
    id: "pp-039",
    materia: "pp",
    topico: "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)",
    enunciado:
      "A Lei nº 15.358/2026 incluiu no Código Penal o art. 147-C, que pune:",
    alternativas: [
      "a perseguição reiterada que ameaça a integridade física ou psicológica da vítima (stalking), com reclusão de 6 meses a 2 anos.",
      "a violência psicológica contra a mulher, com reclusão de 6 meses a 2 anos.",
      "a ameaça praticada no contexto da atuação ou para a consecução das condutas de domínio social estruturado, com reclusão de 1 a 3 anos.",
      "a ameaça simples, com detenção de 1 a 6 meses ou multa, procedendo-se mediante representação.",
      "a ameaça contra agente de segurança pública no exercício da função, com reclusão de 2 a 4 anos.",
    ],
    correta: 2,
    explicacao:
      "Art. 147-C do CP (Lei 15.358/2026): ameaçar alguém, por qualquer meio, de mal injusto e grave, no contexto da atuação ou para a consecução das condutas do art. 2º do marco legal. A pena é de reclusão de 1 a 3 anos. O 147-A é a perseguição, o 147-B é a violência psicológica contra a mulher, e o 147 (caput) é a ameaça simples.",
    origem: "banco",
    fonte: "Lei 15.358/2026 (Planalto)",
  },
  {
    id: "pp-040",
    materia: "pp",
    topico: "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)",
    enunciado:
      "Com as alterações da Lei nº 15.358/2026 na Lei de Execução Penal, os encontros no parlatório ou por meio virtual entre presos vinculados a organizações criminosas ultraviolentas e seus visitantes:",
    alternativas: [
      "são invioláveis, vedada qualquer forma de captação, em respeito à intimidade do preso.",
      "poderão ser monitorados por captação audiovisual e gravação, a requerimento do delegado de polícia, do Ministério Público ou da administração penitenciária.",
      "só podem ser monitorados mediante autorização do Conselho Penitenciário estadual.",
      "poderão ser gravados apenas em áudio, vedada a captação de imagem.",
      "poderão ser monitorados exclusivamente nos presídios federais, por ato do Ministro da Justiça.",
    ],
    correta: 1,
    explicacao:
      "Art. 41-A da LEP: os encontros no parlatório ou virtuais podem ser monitorados por captação audiovisual e gravação (caput). O pedido cabe ao delegado, ao MP ou à administração penitenciária (§1º). Nos presídios federais valem as regras da Lei 11.671 (§2º). Pelo art. 41-B, o conteúdo de comunicação monitorada entre advogado e cliente, autorizada por conluio criminoso reconhecido judicialmente, vai ao juízo de controle, distinto do juízo da instrução.",
    origem: "banco",
    fonte: "Lei 15.358/2026 (Planalto)",
  },
  {
    id: "pp-041",
    materia: "pp",
    topico: "Audiência de custódia — prazo, finalidade e consequências da ausência",
    enunciado:
      "Com a redação dada pela Lei nº 15.358/2026 ao art. 310 do CPP, a audiência de custódia:",
    alternativas: [
      "deve ser presencial, vedado o emprego de videoconferência.",
      "deve ser realizada em até 72 horas da prisão, por videoconferência ou presencialmente, a critério do delegado.",
      "deve ser promovida em até 24 horas após a prisão, por videoconferência em tempo real, admitindo-se a forma presencial apenas em situações excepcionais de força maior, por decisão justificada do juiz.",
      "dispensa a presença do Ministério Público quando realizada por videoconferência.",
      "será presencial como regra, e virtual apenas com concordância expressa do preso e da defesa.",
    ],
    correta: 2,
    explicacao:
      "Art. 310, caput, do CPP: em até 24 horas após a prisão, o juiz promove a audiência por videoconferência em tempo real, com o preso, a defesa e o MP. Pelo §13, o ato presencial cabe em situações excepcionais de força maior, por decisão justificada, e é vedado se for demasiadamente custoso ou arriscado. A redação antiga do art. 3º-B, §1º, vedava a videoconferência, mas a Lei 15.358 a alterou.",
    origem: "banco",
    fonte: "CPP, art. 310 (Lei 15.358/2026)",
  },
  {
    id: "pp-042",
    materia: "pp",
    topico: "Audiência de custódia — prazo, finalidade e consequências da ausência",
    enunciado:
      "Na audiência de custódia por videoconferência, nos termos do art. 310 do CPP alterado pela Lei nº 15.358/2026:",
    alternativas: [
      "o preso deve permanecer acompanhado de agente penitenciário durante toda a oitiva, para garantir a segurança do ato.",
      "a entrevista prévia com o defensor fica dispensada, podendo ocorrer depois da audiência.",
      "falhas técnicas convalidam-se se a defesa não as impugnar imediatamente.",
      "havendo falha no sistema de comunicações atribuível ao tribunal, é obrigatória a repetição completa da audiência, sem convalescer qualquer ato incompleto.",
      "a defesa técnica e o Ministério Público não podem suscitar questões de ordem, por se tratar de ato virtual.",
    ],
    correta: 3,
    explicacao:
      "Art. 310, §11: falha atribuível ao tribunal obriga a repetir toda a audiência. O §9º garante entrevista prévia, reservada e inviolável com o defensor. O §10 manda que o preso fique sozinho na sala durante a oitiva, ressalvada a presença física do defensor. O §8º assegura à defesa e ao MP todos os mecanismos de intervenção, inclusive questões de ordem.",
    origem: "banco",
    fonte: "CPP, art. 310 (Lei 15.358/2026)",
  },
  {
    id: "pp-043",
    materia: "pp",
    topico: "Prisão em flagrante e outras prisões",
    enunciado:
      "Segundo o art. 310, §5º, do CPP, incluído pela Lei nº 15.272/2025, recomenda a conversão da prisão em flagrante em preventiva, entre outras circunstâncias:",
    alternativas: [
      "a gravidade abstrata do delito, ainda que não demonstrada a periculosidade concreta do agente.",
      "o clamor público e a repercussão do fato na imprensa local.",
      "ter o agente praticado a infração penal na pendência de inquérito ou ação penal.",
      "a circunstância de o agente não comprovar emprego formal no momento da prisão.",
      "ter o agente sido liberado em audiência de custódia anterior, ainda que depois absolvido daquela infração.",
    ],
    correta: 2,
    explicacao:
      "O art. 310, §5º, lista: reiteração (I); violência ou grave ameaça (II); liberação em custódia anterior, salvo absolvição posterior (III); infração na pendência de inquérito ou ação penal (IV); fuga ou perigo de fuga (V); risco à investigação, à instrução ou à prova (VI). O art. 312, §4º, também incluído pela Lei 15.272, veda a preventiva baseada na gravidade abstrata.",
    origem: "banco",
    fonte: "CPP, art. 310, §5º (Lei 15.272/2025)",
  },
  {
    id: "pp-044",
    materia: "pp",
    topico: "Prisão em flagrante e outras prisões",
    enunciado:
      "De acordo com o CPP, com a redação da Lei nº 15.272/2025, devem ser considerados na aferição da periculosidade do agente, geradora de riscos à ordem pública:",
    alternativas: [
      "o modus operandi, a participação em organização criminosa, a natureza, a quantidade e a variedade de drogas, armas ou munições apreendidas e o fundado receio de reiteração delitiva.",
      "apenas os antecedentes criminais transitados em julgado, vedada a consideração de inquéritos em curso.",
      "exclusivamente a pena máxima cominada ao crime, que deve ser superior a 4 anos.",
      "a condição econômica do agente e o seu local de residência.",
      "a gravidade abstrata do tipo penal, dispensada a demonstração concreta do risco.",
    ],
    correta: 0,
    explicacao:
      "O art. 312, §3º, do CPP traz o modus operandi, inclusive a violência reiterada e a premeditação (I), a participação em organização criminosa (II), a natureza, a quantidade e a variedade de drogas, armas ou munições (III) e o fundado receio de reiteração, inclusive à vista de outros inquéritos e ações em curso (IV). O §4º veda a preventiva pela gravidade abstrata.",
    origem: "banco",
    fonte: "CPP, art. 312, §§3º e 4º (Lei 15.272/2025)",
  },
  {
    id: "pp-045",
    materia: "pp",
    topico: "Prisão em flagrante e outras prisões",
    enunciado:
      "Preso em flagrante por crime contra a dignidade sexual, nos termos do art. 310-A do CPP, incluído pela Lei nº 15.272/2025:",
    alternativas: [
      "a coleta de material genético é vedada antes do trânsito em julgado da condenação.",
      "o Ministério Público ou a autoridade policial deverá requerer ao juiz a coleta de material biológico para obtenção e armazenamento do perfil genético, preferencialmente na própria audiência de custódia ou em até 10 dias.",
      "a autoridade policial deve colher o material genético diretamente, independentemente de decisão judicial, em até 48 horas.",
      "a coleta do perfil genético só é possível se o preso consentir por escrito, na presença de advogado.",
      "a coleta deve ser feita pelo próprio juiz na audiência de custódia, dispensada a cadeia de custódia.",
    ],
    correta: 1,
    explicacao:
      "Art. 310-A do CPP: no flagrante por crime com violência ou grave ameaça, contra a dignidade sexual, de integrante de organização criminosa armada ou hediondo, o MP ou a autoridade policial deverá requerer ao juiz a coleta, na forma da Lei 12.037. A coleta ocorre preferencialmente na audiência de custódia ou em até 10 dias (§1º), por agente público treinado e respeitando a cadeia de custódia (§2º).",
    origem: "banco",
    fonte: "CPP, art. 310-A (Lei 15.272/2025)",
  },
  {
    id: "pp-046",
    materia: "pp",
    topico: "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)",
    enunciado:
      "Após a Lei nº 15.358/2026, os crimes previstos nos arts. 33 a 37 da Lei de Drogas, quando praticados por integrante de organização criminosa ultraviolenta no contexto das condutas de domínio social estruturado:",
    alternativas: [
      "têm a pena aumentada de 1/6 a 2/3, como nas demais causas do art. 40 da Lei de Drogas.",
      "têm as penas aplicadas em dobro, aplicando-se o concurso material se praticados com emprego de arma de fogo.",
      "são absorvidos pelo crime de domínio social estruturado.",
      "têm a pena aplicada em triplo, desprezadas as demais causas de aumento.",
      "passam a ser punidos apenas com a pena do art. 35 (associação para o tráfico).",
    ],
    correta: 1,
    explicacao:
      "O art. 40-A da Lei 11.343, incluído pela Lei 15.358, aplica em dobro as penas dos arts. 33 a 37 quando praticados por integrante de facção nesse contexto. Pelo parágrafo único, com arma de fogo aplica-se o concurso material (CP, art. 69). A pena em triplo, desprezadas as demais causas de aumento, é a do novo §4º do art. 157 do CP (roubo de facção).",
    origem: "banco",
    fonte: "Lei 15.358/2026 (Planalto)",
  },
  {
    id: "pp-047",
    materia: "pp",
    topico: "Ação penal",
    enunciado:
      "Em agosto de 2026, uma mulher passa a ser perseguida pelo ex-companheiro (art. 147-A do CP), num contexto de violência doméstica e familiar. Ela descobre no mesmo mês quem é o autor, mas só oferece representação na delegacia dez meses depois. Pelo CPP, com a redação da Lei 15.438/2026, a representação é:",
    alternativas: [
      "tempestiva, porque nos crimes praticados no âmbito da violência doméstica e familiar contra a mulher o prazo de decadência é de 12 meses, contado do dia em que a ofendida soube quem é o autor.",
      "intempestiva, porque o prazo de decadência é de 6 meses para todos os crimes de ação condicionada.",
      "desnecessária, porque a perseguição contra a mulher passou a ser crime de ação pública incondicionada.",
      "intempestiva, porque o prazo de decadência conta da data do fato, e não da ciência da autoria.",
      "tempestiva, mas só porque o prazo de 12 meses vale para a queixa nos crimes de ação privada, e a representação não tem prazo.",
    ],
    correta: 0,
    explicacao:
      "Art. 38 do CPP: a regra é a decadência em 6 meses, contados do dia em que o ofendido souber quem é o autor do crime. A Lei 15.438/2026 (18/6/2026, vigência na publicação) incluiu o §2º: nos crimes praticados no âmbito da violência doméstica e familiar contra a mulher, a ofendida decai do direito de queixa ou de representação em 12 meses, com a mesma forma de contagem. A perseguição continua dependendo de representação (art. 147-A, §3º, do CP). Já a ameaça contra a mulher por razões da condição do sexo feminino é de ação incondicionada desde a Lei 14.994/2024 (art. 147, §2º). Como o prazo maior agrava a situação do autor, a regra só alcança fatos posteriores à lei, como o do enunciado.",
    origem: "banco",
    fonte: "CPP, art. 38, §2º (Lei 15.438/2026); CP, art. 147-A, §3º",
  },
  {
    id: "pp-048",
    materia: "pp",
    topico: "Medidas cautelares",
    enunciado:
      "Durante o inquérito de um crime contra a dignidade sexual, a autoridade policial representa por medidas de proteção à vítima. Pelas regras que a Lei 15.280/2025 incluiu no CPP, é correto afirmar que:",
    alternativas: [
      "havendo indícios do crime, o juiz pode aplicar de imediato medidas protetivas de urgência ao autor, cumuladas com monitoração eletrônica e com um dispositivo de segurança entregue à vítima que alerta sobre a aproximação dele.",
      "as medidas protetivas só podem ser aplicadas se a vítima for mulher e o crime ocorrer no âmbito doméstico, nos termos da Lei Maria da Penha.",
      "o juiz só pode aplicar as medidas após o recebimento da denúncia, e nunca durante o inquérito.",
      "a proibição de o autor exercer atividade com contato direto com pessoa vulnerável só pode ser pedida pelo Ministério Público.",
      "a monitoração eletrônica do autor substitui as demais medidas, que não podem ser aplicadas em conjunto.",
    ],
    correta: 0,
    explicacao:
      "Art. 350-A do CPP (Lei 15.280/2025): constatados indícios de crime contra a dignidade sexual, o juiz pode aplicar de imediato ao autor, em conjunto ou separadamente, medidas como a suspensão da posse ou restrição do porte de arma, o afastamento do lar, a proibição de aproximação e de contato com a vítima, familiares e testemunhas, a restrição de visitas a dependentes menores e alimentos provisionais. Pelo §5º, a medida é cumulada com monitoração eletrônica do autor, e a vítima recebe dispositivo que alerta sobre a aproximação. Pelo §6º, a regra vale também para vítimas vulneráveis (crianças, adolescentes, pessoas com deficiência ou incapazes), qualquer que seja o crime. Pelo art. 350-B, em qualquer fase da investigação ou do processo, a pedido do delegado, do MP ou da vítima, o juiz pode proibir o autor de exercer atividade com contato direto com pessoa vulnerável. O descumprimento é crime (art. 338-A do CP: reclusão de 2 a 5 anos).",
    origem: "banco",
    fonte: "CPP, arts. 350-A e 350-B (Lei 15.280/2025)",
  },
  {
    id: "pp-049",
    materia: "pp",
    topico: "Prova no processo penal",
    enunciado:
      "Um investigado por estupro é preso preventivamente e levado ao estabelecimento prisional. Pelo art. 300-A do CPP, incluído pela Lei 15.280/2025:",
    alternativas: [
      "ele deve ser submetido obrigatoriamente à identificação do perfil genético, por extração de DNA com técnica adequada e indolor, ao ingressar no estabelecimento prisional.",
      "a coleta de DNA só pode ocorrer após o trânsito em julgado da condenação.",
      "a coleta depende do consentimento expresso do preso, por força do direito de não produzir prova contra si.",
      "a identificação genética só alcança condenados por crimes hediondos com resultado morte.",
      "a coleta é facultativa e depende de requerimento do Ministério Público em cada caso.",
    ],
    correta: 0,
    explicacao:
      "Art. 300-A do CPP (Lei 15.280/2025): o investigado por crime contra a dignidade sexual, quando preso cautelarmente, e o condenado pelos mesmos crimes devem ser submetidos obrigatoriamente à identificação do perfil genético, mediante extração de DNA, por técnica adequada e indolor, no ingresso no estabelecimento prisional. A regra antecipa a coleta para a prisão cautelar. Para os condenados em geral, o art. 9º-A da LEP (redação da Lei 15.295/2025, em vigor em janeiro de 2026) manda colher o DNA de todo condenado à reclusão em regime inicial fechado, também no ingresso no estabelecimento prisional.",
    origem: "banco",
    fonte: "CPP, art. 300-A (Lei 15.280/2025)",
  },
  {
    id: "pp-050",
    materia: "pp",
    topico: "Princípios processuais penais",
    enunciado:
      "Em razão do princípio da igualdade processual, também chamado de favor rei, o processo penal brasileiro prevê institutos exclusivos da defesa. Nesse sentido, é correto afirmar que",
    alternativas: [
      "os embargos infringentes e de nulidade (art. 609, parágrafo único, do CPP) e a revisão criminal (art. 621 e seguintes do CPP) são recursos e ações exclusivos da defesa, não podendo ser utilizados pela acusação em benefício do réu.",
      "tanto a defesa quanto a acusação podem utilizar livremente os embargos infringentes e de nulidade e a revisão criminal, desde que o façam em benefício do acusado no processo.",
      "o princípio da igualdade processual veda qualquer tratamento distinto entre acusação e defesa, de modo que não existem institutos processuais privativos de nenhuma das partes no processo penal brasileiro.",
      "a revisão criminal pode ser utilizada tanto pela defesa quanto pelo Ministério Público, ainda que este último a maneje contra o próprio réu já definitivamente condenado.",
      "os embargos infringentes e de nulidade podem ser interpostos pela acusação sempre que o acórdão recorrido for desfavorável aos interesses do Ministério Público no caso concreto.",
    ],
    correta: 0,
    explicacao:
      "O princípio da igualdade processual (favor rei) garante privilégios exclusivos à defesa para compensar a maior força do aparato estatal acusatório. Os embargos infringentes e de nulidade e a revisão criminal só podem ser manejados pela defesa, nunca pela acusação, ainda que em tese beneficiassem o réu.",
    origem: "banco",
  },
  {
    id: "pp-051",
    materia: "pp",
    topico: "Princípios processuais penais",
    enunciado:
      "O princípio da garantia contra a autoincriminação (nemo tenetur se detegere), extraído do art. 5º, LXIII, da Constituição Federal, assegura ao acusado o direito de",
    alternativas: [
      "permanecer em silêncio e de não produzir prova contra si mesmo, de modo que o silêncio do investigado ou réu não pode ser interpretado em seu desfavor nem valorado como confissão implícita.",
      "produzir qualquer prova a seu favor, ainda que falsa, sem que isso configure ilícito penal autônomo, em razão da amplitude do direito de defesa assegurado constitucionalmente ao acusado.",
      "recusar-se a participar de reconhecimento de pessoas ou de reconstituição do crime, hipóteses em que, diversamente do silêncio, a recusa injustificada pode ser livremente valorada como confissão tácita pelo julgador.",
      "ser dispensado de comparecer a atos processuais para os quais tenha sido regularmente intimado, sem qualquer consequência processual, inclusive a decretação de prisão preventiva.",
      "mentir livremente em juízo sobre fatos de terceiros, sem incorrer em qualquer das hipóteses de crime contra a administração da justiça previstas no Código Penal.",
    ],
    correta: 0,
    explicacao:
      "O nemo tenetur se detegere garante o direito ao silêncio e à não autoincriminação, vedando que o silêncio seja interpretado contra o acusado. Ele não autoriza produzir prova falsa, mentir sobre terceiros nem ignorar intimações; a recusa a participar de reconhecimento ou reconstituição também não pode ser usada como confissão tácita, pois a garantia abrange toda forma de colaboração probatória contra si.",
    origem: "banco",
  },
  {
    id: "pp-052",
    materia: "pp",
    topico: "Princípios processuais penais",
    enunciado:
      "O princípio do juiz natural, previsto no art. 5º, XXXVII e LIII, da Constituição Federal, veda a instituição de tribunal de exceção e assegura que",
    alternativas: [
      "ninguém será processado nem julgado senão por autoridade competente, definida por critérios legais objetivos e abstratos fixados anteriormente à ocorrência do fato, sem possibilidade de criação de órgão julgador especial a posteriori para o caso concreto.",
      "o acusado tem o direito de escolher livremente o juízo ou tribunal que irá processá-lo e julgá-lo, desde que a escolha recaia sobre órgão jurisdicional já existente no momento do fato e seja homologada pelo Ministério Público antes do oferecimento da denúncia.",
      "a competência penal pode ser redefinida por lei posterior ao fato, para qualquer finalidade, sempre que o novo critério se mostrar mais consentâneo com a gravidade do delito praticado.",
      "é vedada apenas a criação de tribunais de exceção após o fato, mas permitida a designação casuística, por ato administrativo, de juiz específico para julgar determinado processo já em curso.",
      "aplica-se exclusivamente ao processo penal militar, não se estendendo às demais esferas da jurisdição criminal comum, estadual ou federal.",
    ],
    correta: 0,
    explicacao:
      "O juiz natural exige critérios de competência previamente fixados em lei, de forma objetiva e abstrata, vedando tribunais de exceção e designações casuísticas de julgador para caso específico, inclusive após o fato. O acusado não escolhe seu julgador, e a garantia vale para toda a jurisdição penal, não só a militar.",
    origem: "banco",
  },
  {
    id: "pp-053",
    materia: "pp",
    topico: "Princípios processuais penais",
    enunciado:
      "Sobre o princípio da persuasão racional (convencimento motivado) no processo penal brasileiro, é correto afirmar que",
    alternativas: [
      "constitui a regra geral, segundo a qual o juiz deve fundamentar suas decisões com base nas provas dos autos, admitindo-se como exceção o sistema da íntima convicção no Tribunal do Júri, em que os jurados decidem sem motivar o voto.",
      "é adotado também pelo Tribunal do Júri, de modo que os jurados, assim como o juiz togado, devem fundamentar detalhadamente cada voto proferido em plenário, sob pena de nulidade da decisão e de dissolução do Conselho de Sentença pelo juiz-presidente.",
      "substituiu integralmente, em todo o processo penal brasileiro, o sistema da íntima convicção, que não subsiste em nenhuma hipótese após a Constituição de 1988.",
      "autoriza o juiz a decidir com base em seu conhecimento pessoal dos fatos, obtido fora dos autos do processo, desde que exponha esse conhecimento na motivação da sentença.",
      "impede qualquer valoração de prova indiciária pelo julgador, exigindo sempre prova direta e inequívoca da autoria e da materialidade para a prolação de sentença condenatória.",
    ],
    correta: 0,
    explicacao:
      "A persuasão racional exige fundamentação baseada nas provas dos autos, sendo a regra no processo penal; a exceção é a íntima convicção do Tribunal do Júri, em que os jurados não motivam o voto. O juiz não pode decidir com base em conhecimento extraprocessual, e a prova indiciária é admitida, desde que valorada racionalmente.",
    origem: "banco",
  },
  {
    id: "pp-054",
    materia: "pp",
    topico: "Princípios processuais penais",
    enunciado:
      "O princípio do promotor natural, reconhecido pelo Supremo Tribunal Federal, tem por finalidade",
    alternativas: [
      "vedar a designação casuística de membro do Ministério Público para atuar em caso específico, por ato discricionário da chefia institucional, assegurando a atuação do órgão com atribuição legalmente predefinida.",
      "assegurar ao acusado o direito de escolher, entre os membros do Ministério Público em exercício na comarca, qual deles oferecerá a denúncia em seu desfavor.",
      "impedir qualquer redistribuição de atribuições entre os membros do Ministério Público, ainda que realizada por critérios objetivos e genéricos previstos em lei ou em ato normativo interno.",
      "vincular definitivamente o membro do Ministério Público que primeiro tomar conhecimento do fato, impedindo sua substituição por qualquer outro membro em qualquer hipótese, inclusive de afastamento legal.",
      "autorizar o Procurador-Geral de Justiça a escolher livremente, em qualquer processo, o membro do Ministério Público que atuará, desde que o faça por decisão fundamentada e caso a caso.",
    ],
    correta: 0,
    explicacao:
      "O promotor natural veda a designação casuística de membro do MP por decisão discricionária da chefia, caso a caso, mas não impede redistribuições por critérios objetivos e gerais (como regras de substituição e organização), nem garante ao acusado escolher seu acusador.",
    origem: "banco",
  },
  {
    id: "pp-055",
    materia: "pp",
    topico: "Princípios processuais penais",
    enunciado:
      "O princípio da razoável duração do processo, acrescido ao art. 5º da Constituição Federal pelo inciso LXXVIII (Emenda Constitucional nº 45/2004), assegura a todos, no âmbito judicial e administrativo,",
    alternativas: [
      "a razoável duração do processo e os meios que garantam a celeridade de sua tramitação, sem que a garantia estabeleça, por si só, um prazo máximo fixo e objetivo de duração válido para qualquer processo penal.",
      "um prazo máximo e objetivo de 180 dias para a conclusão de qualquer processo penal, contado da data do recebimento da denúncia pelo juízo competente, prorrogável uma única vez por decisão fundamentada do tribunal de origem.",
      "a extinção automática da punibilidade sempre que o processo penal ultrapassar o prazo médio de duração verificado nas estatísticas do tribunal competente.",
      "a garantia de duração razoável apenas aos processos cujo réu esteja preso preventivamente, não se estendendo às demais hipóteses de persecução penal em curso.",
      "a possibilidade de o próprio acusado requerer, independentemente de qualquer outro requisito, a extinção do processo penal sempre que considerar sua duração excessiva.",
    ],
    correta: 0,
    explicacao:
      "A razoável duração do processo (art. 5º, LXXVIII, CF) não fixa um prazo numérico objetivo e geral, exigindo análise da complexidade do caso, do comportamento das partes e da atuação do Judiciário; não gera extinção automática da punibilidade nem se restringe a réus presos.",
    origem: "banco",
  },
  {
    id: "pp-056",
    materia: "pp",
    topico: "Juízo e juiz de garantias (Lei 13.964/2019 e ADI 6.298/STF)",
    enunciado:
      "O juízo das garantias, instituído pela Lei nº 13.964/2019 (Pacote Anticrime) e disciplinado pelo art. 3º-A do CPP, adota estrutura acusatória, segundo a qual",
    alternativas: [
      "é vedada ao juiz a iniciativa de promover, de ofício, a investigação criminal, bem como substituir a atuação probatória do órgão de acusação, preservando-se a separação entre as funções de investigar/acusar e julgar.",
      "o juiz das garantias pode determinar, de ofício e independentemente de provocação do Ministério Público ou da autoridade policial, a produção de qualquer prova que considere necessária à elucidação do fato investigado.",
      "cabe ao juiz das garantias substituir o órgão de acusação na condução do inquérito sempre que verificar inércia ou lentidão na investigação conduzida pela autoridade policial competente.",
      "a estrutura acusatória se aplica apenas à fase de instrução processual, não alcançando os atos praticados pelo juiz das garantias durante a investigação preliminar.",
      "permite ao juiz, mediante decisão fundamentada, requisitar diretamente diligências investigativas específicas, desde que o faça em substituição apenas parcial, e não total, da atuação do Ministério Público.",
    ],
    correta: 0,
    explicacao:
      "O art. 3º-A consagra a estrutura acusatória: o juiz das garantias não pode investigar de ofício nem substituir o MP na produção de provas, ainda que parcialmente. Essa vedação atua justamente na fase investigatória, que é o âmbito de competência do juiz das garantias.",
    origem: "banco",
    fonte: "CPP, art. 3º-A (Lei 13.964/2019)",
  },
  {
    id: "pp-057",
    materia: "pp",
    topico: "Juízo e juiz de garantias (Lei 13.964/2019 e ADI 6.298/STF)",
    enunciado:
      "Entre as competências do juiz das garantias previstas no art. 3º-B do CPP, inclui-se",
    alternativas: [
      "homologar acordo de não persecução penal ou colaboração premiada celebrados durante a investigação criminal, ainda antes do oferecimento da denúncia pelo Ministério Público.",
      "proferir sentença de mérito na ação penal decorrente dos fatos apurados durante a investigação, aproveitando-se do amplo conhecimento do caso adquirido na fase investigatória.",
      "determinar, de ofício, o arquivamento do inquérito policial sempre que considerar insuficientes os indícios de autoria colhidos pela autoridade policial até aquele momento.",
      "substituir o delegado de polícia na presidência do inquérito, sempre que a investigação envolver crime de maior complexidade ou repercussão social relevante.",
      "fixar, originariamente e sem possibilidade de revisão, o valor da fiança em qualquer hipótese de prisão em flagrante, ainda que a infração não comporte esse benefício.",
    ],
    correta: 0,
    explicacao:
      "O art. 3º-B, XVII, atribui ao juiz das garantias a homologação de ANPP e de colaboração premiada na fase investigatória. Ele não julga o mérito da ação penal (vedação do art. 3º-D), não arquiva inquérito de ofício, não substitui o delegado e a fiança comporta revisão.",
    origem: "banco",
    fonte: "CPP, art. 3º-B (Lei 13.964/2019)",
  },
  {
    id: "pp-058",
    materia: "pp",
    topico: "Juízo e juiz de garantias (Lei 13.964/2019 e ADI 6.298/STF)",
    enunciado:
      "Quanto à audiência de custódia no âmbito do juízo das garantias, o Supremo Tribunal Federal, ao julgar as ADI 6.298, 6.299, 6.300 e 6.305 (Rel. Min. Luiz Fux), decidiu que",
    alternativas: [
      "cabe, excepcionalmente, o emprego de videoconferência na audiência de custódia, mediante decisão fundamentada da autoridade judiciária competente, desde que apto a verificar a integridade física e psicológica do preso.",
      "a videoconferência é absolutamente vedada em qualquer hipótese de audiência de custódia, devendo o preso ser sempre conduzido pessoalmente à presença física do juiz das garantias, sem exceção.",
      "a audiência de custódia deixou de ser obrigatória após a instituição do juízo das garantias, sendo substituída por simples comunicação escrita da prisão ao juízo competente em até 24 horas.",
      "a realização da audiência de custódia passou a depender de requerimento expresso da defesa, não podendo mais ser determinada de ofício pela autoridade judiciária, ainda que o preso permaneça em cárcere.",
      "o prazo para a realização da audiência de custódia foi ampliado de 24 para 72 horas, contado da comunicação da prisão em flagrante ao juízo das garantias competente.",
    ],
    correta: 0,
    explicacao:
      "O STF (ADI 6.298 e correlatas) autorizou, excepcionalmente, a videoconferência na audiência de custódia, mediante decisão fundamentada e desde que possível verificar a integridade do preso — superando a vedação literal do texto original do art. 3º-B, §1º. A audiência permanece obrigatória, pode ser determinada de ofício e o prazo de 24 horas não foi alterado.",
    origem: "banco",
    fonte: "STF, ADI 6.298, 6.299, 6.300 e 6.305/DF, Rel. Min. Luiz Fux, j. 24/08/2023 (Info 1106)",
  },
  {
    id: "pp-059",
    materia: "pp",
    topico: "Juízo e juiz de garantias (Lei 13.964/2019 e ADI 6.298/STF)",
    enunciado:
      "Sobre a prorrogação do prazo do inquérito policial no regime do juízo das garantias, após o julgamento das ADI 6.298 e correlatas pelo STF, é correto afirmar que",
    alternativas: [
      "o juiz pode autorizar, de forma fundamentada, novas prorrogações do prazo de investigação em razão da complexidade do caso, e a simples inobservância do prazo não implica a revogação automática de eventual prisão preventiva decretada.",
      "o prazo de investigação é improrrogável, de modo que seu decurso sem a conclusão do inquérito acarreta, automaticamente e sem necessidade de decisão judicial, o relaxamento da prisão preventiva eventualmente decretada.",
      "a prorrogação do inquérito somente pode ser concedida uma única vez, por quinze dias, não sendo cabível, em nenhuma hipótese, nova prorrogação além desse prazo, ainda que a investigação seja excepcionalmente complexa.",
      "compete exclusivamente ao Ministério Público, sem qualquer participação do juiz das garantias, autorizar ou negar a prorrogação do prazo de investigação em curso perante a autoridade policial.",
      "a prorrogação do inquérito está condicionada à prévia anuência expressa da defesa técnica do investigado, sob pena de nulidade de todos os atos investigativos praticados após o prazo original.",
    ],
    correta: 0,
    explicacao:
      "O STF entendeu que o juiz pode autorizar novas prorrogações fundamentadas conforme a complexidade do caso, superando o limite literal de uma única prorrogação de 15 dias, e que o descumprimento do prazo não gera revogação automática da prisão preventiva, devendo o juízo ser instado a reavaliar a cautelar.",
    origem: "banco",
    fonte: "STF, ADI 6.298, 6.299, 6.300 e 6.305/DF, Rel. Min. Luiz Fux, j. 24/08/2023 (Info 1106)",
  },
  {
    id: "pp-060",
    materia: "pp",
    topico: "Juízo e juiz de garantias (Lei 13.964/2019 e ADI 6.298/STF)",
    enunciado:
      "Segundo a redação literal originária do art. 3º-C, caput, do CPP, a competência do juiz das garantias cessaria com o recebimento da denúncia ou da queixa. Após o julgamento das ADI 6.298 e correlatas pelo STF, esse marco foi",
    alternativas: [
      "alterado para o oferecimento da denúncia ou da queixa, que passa a ser o termo a partir do qual os autos são encaminhados ao juiz da instrução e do julgamento, e não mais o ato de recebimento pelo juízo.",
      "mantido exatamente como previsto na redação literal do dispositivo, tendo o STF apenas reafirmado a constitucionalidade do recebimento da denúncia como marco de cessação da competência do juiz das garantias.",
      "substituído pela publicação da sentença de primeiro grau, de modo que o juiz das garantias permanece competente durante toda a instrução processual, até a prolação da decisão final.",
      "substituído pelo trânsito em julgado da decisão de recebimento da denúncia, o que pressupõe o esgotamento de eventual recurso interposto contra essa decisão interlocutória.",
      "abolido, de modo que, a partir do julgamento das referidas ações diretas de inconstitucionalidade, não existe mais qualquer marco temporal de cessação da competência do juiz das garantias.",
    ],
    correta: 0,
    explicacao:
      "O STF substituiu, em vários dispositivos do art. 3º-C (caput e parágrafos), o termo 'recebimento' por 'oferecimento' da denúncia ou queixa como marco de cessação da competência do juiz das garantias, declarando inconstitucional, por arrastamento, o inciso que usava o termo original.",
    origem: "banco",
    fonte: "STF, ADI 6.298, 6.299, 6.300 e 6.305/DF, Rel. Min. Luiz Fux, j. 24/08/2023 (Info 1106)",
  },
  {
    id: "pp-061",
    materia: "pp",
    topico: "Juízo e juiz de garantias (Lei 13.964/2019 e ADI 6.298/STF)",
    enunciado:
      "Nos termos do art. 3º-D do CPP, o juiz que atuou como juiz das garantias em determinada investigação",
    alternativas: [
      "fica impedido de atuar como juiz da instrução e do julgamento da ação penal decorrente dessa investigação, devendo as comarcas com apenas um juiz adotar sistema de rodízio para viabilizar essa separação.",
      "pode livremente atuar também como juiz da instrução e do julgamento da mesma ação penal, desde que fundamente expressamente as razões de conveniência e oportunidade dessa dupla atuação.",
      "somente fica impedido de julgar a ação penal se a comarca contar com mais de um juiz, ficando dispensada a regra de impedimento nas comarcas de vara única, por impossibilidade material.",
      "pode atuar na instrução e no julgamento da ação penal, desde que a investigação tenha durado menos de noventa dias, prazo a partir do qual se presume o impedimento absoluto.",
      "fica impedido de atuar apenas se tiver decretado prisão preventiva durante a investigação, permanecendo habilitado a julgar a ação penal nos demais casos em que não tenha imposto medida cautelar.",
    ],
    correta: 0,
    explicacao:
      "O art. 3º-D impede o juiz das garantias de atuar como juiz da instrução e julgamento da mesma ação penal, justamente para preservar sua imparcialidade; nas comarcas com apenas um juiz, a lei determina a adoção de rodízio para viabilizar a separação de funções, sem exceção pela ausência de outro juiz ou pela duração da investigação.",
    origem: "banco",
    fonte: "CPP, art. 3º-D (Lei 13.964/2019)",
  },
  {
    id: "pp-062",
    materia: "pp",
    topico: "Juízo e juiz de garantias (Lei 13.964/2019 e ADI 6.298/STF)",
    enunciado:
      "Conforme fixado pelo STF no julgamento das ADI 6.298 e correlatas, o regime do juízo das garantias NÃO se aplica",
    alternativas: [
      "aos processos de competência originária dos tribunais, aos processos de competência do Tribunal do Júri, aos casos de violência doméstica e familiar e às infrações penais de menor potencial ofensivo.",
      "a nenhuma categoria de processo penal, uma vez que o STF determinou a aplicação universal e sem exceções do juízo das garantias a toda e qualquer investigação criminal no território nacional.",
      "apenas aos processos de competência originária dos tribunais superiores, aplicando-se normalmente, sem qualquer ressalva, ao Tribunal do Júri e aos casos de violência doméstica e familiar.",
      "aos crimes de menor potencial ofensivo, aplicando-se integralmente, sem exceção, aos processos de competência originária dos tribunais e às hipóteses de violência doméstica e familiar.",
      "às infrações de menor potencial ofensivo e à violência doméstica, mas aplica-se normalmente aos processos de competência do Tribunal do Júri e dos tribunais em sua competência originária.",
    ],
    correta: 0,
    explicacao:
      "O STF excluiu da aplicação do juízo das garantias: processos de competência originária dos tribunais (regidos pela Lei 8.038/1990), Tribunal do Júri, violência doméstica e familiar, e infrações de menor potencial ofensivo — hipóteses em que as particularidades procedimentais tornam o regime incompatível.",
    origem: "banco",
    fonte: "STF, ADI 6.298, 6.299, 6.300 e 6.305/DF, Rel. Min. Luiz Fux, j. 24/08/2023 (Info 1106)",
  },
  {
    id: "pp-063",
    materia: "pp",
    topico: "Juízo e juiz de garantias (Lei 13.964/2019 e ADI 6.298/STF)",
    enunciado:
      "O art. 20 da Lei nº 13.964/2019 previa o prazo de 30 dias para a implementação do juízo das garantias pelos tribunais. Ao julgar as ADI 6.298 e correlatas, o STF",
    alternativas: [
      "declarou esse prazo inconstitucional por arrastamento, fixando prazo de 12 meses, prorrogável por mais 12 meses, para que os tribunais implementem a estrutura do juízo das garantias.",
      "manteve integralmente o prazo original de 30 dias, declarando improcedentes as ações diretas de inconstitucionalidade no ponto relativo ao prazo de implementação da nova estrutura judicial.",
      "reduziu o prazo de implementação para 15 dias, por entender que a exiguidade do prazo original de 30 dias ainda era incompatível com a urgência da reforma processual penal introduzida pelo Pacote Anticrime.",
      "determinou a implementação imediata e automática do juízo das garantias em todo o território nacional, dispensando qualquer prazo ou ato normativo específico dos tribunais para a estruturação da nova sistemática.",
      "delegou aos próprios tribunais a fixação do prazo de implementação, sem estabelecer qualquer parâmetro temporal mínimo ou máximo a ser observado pelos órgãos do Poder Judiciário.",
    ],
    correta: 0,
    explicacao:
      "O STF declarou inconstitucional, por arrastamento, o prazo de 30 dias do art. 20 da Lei 13.964/2019, fixando prazo de 12 meses, prorrogável por mais 12, para a implementação do juízo das garantias pelos tribunais — reconhecendo a complexidade estrutural da reforma.",
    origem: "banco",
    fonte: "STF, ADI 6.298, 6.299, 6.300 e 6.305/DF, Rel. Min. Luiz Fux, j. 24/08/2023 (Info 1106)",
  },
  {
    id: "pp-064",
    materia: "pp",
    topico: "Funções de polícia (art. 144 da CF)",
    enunciado:
      "Sobre o sistema de ciclo completo de polícia no Brasil, é correto afirmar que",
    alternativas: [
      "a Polícia Federal é a única força policial brasileira que atua em ciclo completo, unindo funções de polícia administrativa e de investigação, de modo que, ao identificar um crime durante atividade administrativa, pode investigá-lo diretamente.",
      "todas as polícias estaduais, tanto a Polícia Militar quanto a Polícia Civil, adotam o ciclo completo, unindo em uma única instituição as funções de prevenção ostensiva e de investigação criminal, nos mesmos moldes já adotados pela Polícia Federal.",
      "o ciclo completo consiste na possibilidade de a Polícia Militar, após efetuar prisão em flagrante, conduzir diretamente a investigação do crime, sem a necessidade de apresentação do preso à Polícia Civil.",
      "nenhuma polícia brasileira adota atualmente o ciclo completo, estando a proposta de unificação das funções policiais ainda em fase de debate exclusivamente legislativo, sem qualquer aplicação prática vigente.",
      "o ciclo completo é adotado pela Polícia Civil, que concentra tanto o policiamento ostensivo preventivo quanto a investigação criminal, diferentemente da Polícia Militar, que atua apenas na fase investigativa.",
    ],
    correta: 0,
    explicacao:
      "No modelo brasileiro de ciclo incompleto, Polícia Militar (ostensiva/preventiva) e Polícia Civil (investigativa) têm atribuições distintas e dependem uma da outra. A Polícia Federal é a exceção, por reunir funções administrativas e investigativas em ciclo completo.",
    origem: "banco",
  },
  {
    id: "pp-065",
    materia: "pp",
    topico: "Funções de polícia (art. 144 da CF)",
    enunciado:
      "Sobre a distinção doutrinária entre polícia judiciária e polícia investigativa, à luz do art. 2º da Lei nº 12.850/2013, é correto afirmar que",
    alternativas: [
      "para a corrente que diferencia as duas funções, a polícia judiciária se limita ao auxílio ao Poder Judiciário no cumprimento de ordens e diligências, enquanto a apuração de infrações penais, função do delegado de polícia, tem natureza jurídica, essencial e exclusiva de Estado, nos termos daquele dispositivo.",
      "a Lei 12.850/2013 unificou definitivamente as duas funções em um único conceito, afastando qualquer distinção doutrinária entre polícia judiciária e polícia investigativa no ordenamento jurídico brasileiro, inclusive para fins de competência constitucional da Polícia Federal e das polícias civis estaduais.",
      "a função de apuração de infrações penais exercida pelo delegado de polícia foi qualificada, pelo art. 2º da Lei 12.850/2013, como atividade de natureza meramente administrativa, não essencial nem exclusiva de Estado.",
      "a distinção entre as duas correntes é unânime na doutrina e na jurisprudência, não havendo posicionamento que considere polícia judiciária e polícia investigativa como sinônimos no direito brasileiro.",
      "a corrente que diferencia as funções fundamenta-se exclusivamente no art. 4º do CPP, dispositivo que, segundo essa própria corrente, teria sido plenamente recepcionado pela Constituição Federal de 1988.",
    ],
    correta: 0,
    explicacao:
      "Há duas visões: uma equipara polícia judiciária e investigativa; outra as distingue, com base na separação constitucional dos incisos I e IV do art. 144, §1º, reforçada pelo art. 2º da Lei 12.850/2013, que qualifica a função de apuração do delegado como jurídica, essencial e exclusiva de Estado — e não na recepção do art. 4º do CPP, que fundamenta a corrente contrária.",
    origem: "banco",
    fonte: "Lei 12.850/2013, art. 2º; CF, art. 144, §1º, I e IV",
  },
  {
    id: "pp-066",
    materia: "pp",
    topico: "Funções de polícia (art. 144 da CF)",
    enunciado:
      "Quanto à exclusividade do exercício da função de polícia judiciária, prevista no art. 144, §1º, IV, da Constituição Federal, é correto afirmar que",
    alternativas: [
      "a exclusividade ali estabelecida refere-se à polícia judiciária da União, atribuída à Polícia Federal, não impedindo que a Polícia Civil também exerça, de forma típica, a função de polícia judiciária no âmbito estadual.",
      "a Polícia Federal detém exclusividade sobre toda e qualquer função de polícia judiciária exercida no território nacional, inclusive aquela desempenhada pelas polícias civis estaduais em suas respectivas unidades federativas.",
      "a Polícia Civil, e não a Polícia Federal, é que detém exclusividade constitucional sobre a função de polícia judiciária, cabendo à Polícia Federal apenas funções de natureza administrativa e de fronteira.",
      "a exclusividade constitucional também abrange a função de polícia judiciária militar, de modo que as polícias militares estaduais ficam impedidas de auxiliar o Poder Judiciário no âmbito da Justiça Militar.",
      "nenhuma polícia brasileira exerce função de polícia judiciária com exclusividade, uma vez que a Constituição Federal distribuiu essa atribuição igualitariamente entre todos os órgãos listados no art. 144.",
    ],
    correta: 0,
    explicacao:
      "A exclusividade do art. 144, §1º, IV, da CF é da Polícia Federal apenas quanto à polícia judiciária da União — a Polícia Civil exerce, tipicamente, a polícia judiciária estadual, sem que isso viole a exclusividade federal. As polícias militares, por sua vez, exercem polícia judiciária militar, auxiliando o Judiciário no âmbito militar.",
    origem: "banco",
    fonte: "CF, art. 144, §1º, IV",
  },
  {
    id: "pp-067",
    materia: "pp",
    topico: "Funções de polícia (art. 144 da CF)",
    enunciado:
      "Sobre a estrutura constitucional da segurança pública após a Emenda Constitucional nº 104/2019, que incluiu as polícias penais no rol do art. 144 da Constituição Federal, é correto afirmar que",
    alternativas: [
      "às polícias penais federal, estaduais e distrital compete a segurança dos estabelecimentos penais, e as polícias penais estaduais e distrital subordinam-se, juntamente com as polícias civis, militares e corpos de bombeiros militares, aos Governadores dos respectivos entes federativos.",
      "as polícias penais substituíram as polícias civis na apuração de infrações penais praticadas no interior dos estabelecimentos prisionais, absorvendo essa competência investigativa de forma exclusiva.",
      "a competência das polícias penais abrange tanto a segurança dos estabelecimentos penais quanto o policiamento ostensivo das vias públicas adjacentes a esses estabelecimentos, em cooperação com a Polícia Militar e sob coordenação direta da Secretaria de Segurança Pública do respectivo ente federativo.",
      "as polícias penais estaduais e distrital subordinam-se diretamente à União, por se tratar de carreira de segurança pública de interesse nacional, independentemente do ente federativo ao qual pertençam administrativamente.",
      "a inclusão das polícias penais no art. 144 da Constituição Federal extinguiu a necessidade de vinculação dessas corporações a qualquer órgão administrador do sistema penal da unidade federativa correspondente.",
    ],
    correta: 0,
    explicacao:
      "A EC 104/2019 incluiu as polícias penais (inciso VI do art. 144) com a competência de segurança dos estabelecimentos penais (§5º-A), vinculadas ao órgão administrador do sistema penal de cada ente e subordinadas aos Governadores (§6º), junto com polícias civis, militares e corpos de bombeiros militares — sem qualquer competência investigativa ou de policiamento ostensivo externo.",
    origem: "banco",
    fonte: "CF, art. 144, VI e §§ 5º-A e 6º (EC 104/2019)",
  },
  {
    id: "pp-068",
    materia: "pp",
    topico: "Funções de polícia (art. 144 da CF)",
    enunciado:
      "Sobre a polícia administrativa, exercida principalmente pela Polícia Militar, é correto afirmar que",
    alternativas: [
      "incide sobre bens, direitos e atividades, e não diretamente sobre pessoas, atuando de forma predominantemente preventiva para garantir a ordem pública, a saúde, a segurança e o bem-estar social por meio de fiscalização e poder de polícia.",
      "incide diretamente sobre pessoas determinadas, suspeitas da prática de infração penal, com o objetivo específico de colher provas de autoria e materialidade para subsidiar eventual ação penal, tal como ocorre na atividade típica da polícia investigativa.",
      "possui natureza predominantemente repressiva, atuando apenas após a consumação do ilícito administrativo, sem qualquer função preventiva voltada a evitar danos à coletividade antes de sua ocorrência.",
      "é exercida com exclusividade absoluta pela Polícia Militar, não podendo ser exercida por nenhum outro órgão da administração pública em qualquer esfera de governo.",
      "limita-se à fiscalização de estabelecimentos comerciais quanto a normas sanitárias, não abrangendo o controle de tráfego de veículos nem a aplicação de outras sanções administrativas.",
    ],
    correta: 0,
    explicacao:
      "A polícia administrativa é predominantemente preventiva, incidindo sobre bens, direitos e atividades (não diretamente sobre pessoas), por meio de poder de polícia e fiscalização — abrangendo trânsito, vigilância sanitária e outras atividades, e exercida por diversos órgãos da administração, não só pela Polícia Militar com exclusividade.",
    origem: "banco",
  },
  {
    id: "pp-069",
    materia: "pp",
    topico: "Funções de polícia (art. 144 da CF)",
    enunciado:
      "Sobre a polícia ostensiva, exercida principalmente pela Polícia Militar e, em certos casos, por Guardas Municipais, é correto afirmar que",
    alternativas: [
      "tem natureza administrativa e preventiva, caracterizando-se pela visibilidade da farda, do equipamento e da viatura, com o objetivo de prevenir a criminalidade pela simples presença ostensiva, não se confundindo com a função investigativa.",
      "tem natureza investigativa, voltada à apuração de infrações penais já consumadas, distinguindo-se do policiamento velado apenas pela visibilidade dos agentes envolvidos na diligência, tal como ocorre tipicamente na atuação da Polícia Civil.",
      "pressupõe, necessariamente, o uso de viaturas motorizadas, não se configurando como policiamento ostensivo o patrulhamento a pé, de bicicleta ou montado realizado em bairros e áreas turísticas.",
      "é exercida com exclusividade pela Polícia Militar, não podendo as Guardas Municipais, em nenhuma hipótese, realizar qualquer modalidade de patrulhamento ostensivo em vias públicas.",
      "é incompatível com a prevenção de infrações de menor gravidade, como contravenções penais, destinando-se exclusivamente à repressão imediata de crimes já em curso ou consumados.",
    ],
    correta: 0,
    explicacao:
      "A polícia ostensiva tem natureza administrativa e preventiva, marcada pela visibilidade (fardas, viaturas) como fator de dissuasão da criminalidade — não se limita a viaturas motorizadas (admite patrulhamento a pé, de bicicleta etc.), não é exclusiva da PM (Guardas Municipais também a exercem) e serve à prevenção de infrações e contravenções, não só repressão de crimes em curso.",
    origem: "banco",
  },
];
