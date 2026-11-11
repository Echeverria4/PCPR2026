import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "especial-07",
  resumo: {
    ideia:
      "Crime hediondo é só o que a Lei 8.072 lista, consumado ou tentado. A gravidade do caso concreto não basta. Tortura, tráfico de drogas e terrorismo são equiparados pela Constituição e seguem as mesmas restrições.",
    itens: [
      {
        termo: "Rol do art. 1º",
        faz: "Homicídio qualificado ou de grupo de extermínio, feminicídio, latrocínio e outros roubos graves, extorsão qualificada e mediante sequestro, estupro, estupro de vulnerável, epidemia com morte, falsificação de remédio, exploração sexual de vulnerável e furto com explosivo.",
        pista: "Consumados ou tentados: a tentativa também é hedionda.",
      },
      {
        termo: "Agentes de segurança",
        faz: "A lesão corporal gravíssima ou seguida de morte contra policial, militar, agente prisional ou da Força Nacional, em serviço ou por causa da função, é hedionda. Também contra cônjuge, companheiro ou parente até o 3º grau, por essa condição (art. 1º, I-A).",
        pista: "Lesão grave comum (art. 129, § 1º) não entra.",
      },
      {
        termo: "Roubo",
        faz: "Só três hipóteses: com restrição da liberdade da vítima, com emprego de arma de fogo e com resultado lesão grave ou morte (art. 1º, II).",
        pista: "Roubo com arma branca ou só em concurso de pessoas não é hediondo.",
      },
      {
        termo: "Inclusões recentes",
        faz: "Induzimento ao suicídio ou automutilação pela internet, sequestro de menor de 18 anos e tráfico de pessoas contra criança ou adolescente (Lei 14.811/2024), feminicídio (Lei 14.994/2024) e vicaricídio (Lei 15.384/2026).",
      },
      {
        termo: "Parágrafo único",
        faz: "Genocídio, posse ou porte de arma de uso proibido, comércio ilegal e tráfico internacional de arma, organização criminosa voltada a crime hediondo, certos crimes do ECA e o domínio social estruturado (Lei 15.358/2026).",
      },
      {
        termo: "Fora do rol",
        faz: "Homicídio qualificado-privilegiado (STJ), furto qualificado comum, tráfico privilegiado (art. 112, § 5º, da LEP) e associação para o tráfico.",
      },
      {
        termo: "Vedações",
        faz: "Hediondos e equiparados não admitem anistia, graça, indulto nem fiança (art. 2º). A liberdade provisória sem fiança é possível.",
      },
      {
        termo: "Regime inicial",
        faz: "A lei manda começar no fechado (art. 2º, § 1º), mas o STF declarou essa obrigatoriedade inconstitucional. O juiz fixa o regime pelas regras do Código Penal.",
      },
      {
        termo: "Progressão em 2026",
        faz: "Pela Lei 15.358/2026: 70% se primário; 75% se primário com resultado morte, no comando de organização ultraviolenta, na milícia ou no feminicídio de primário; 80% se reincidente; 85% se reincidente com morte (art. 112 da LEP).",
        pista: "Nos casos com resultado morte, não há livramento condicional.",
      },
      {
        termo: "Lei no tempo",
        faz: "A regra de progressão mais grave não alcança crime cometido antes dela. Para esses, valem os percentuais antigos: 40%, 50%, 60% e 70%.",
      },
      {
        termo: "Prisão temporária",
        faz: "Nos hediondos e equiparados, 30 dias, prorrogáveis por mais 30 em caso de extrema e comprovada necessidade (art. 2º, § 4º).",
        pista: "Nos demais crimes da Lei 7.960, 5 + 5 dias.",
      },
      {
        termo: "Associação",
        faz: "A associação criminosa do CP para cometer hediondos, tortura, tráfico ou terrorismo tem pena de 3 a 6 anos. O associado que denuncia o grupo e permite desmontá-lo tem a pena reduzida de 1/3 a 2/3 (art. 8º).",
      },
    ],
    cuidado:
      "O material do curso é anterior às Leis 15.159/2025, 15.384/2026, 15.358/2026 e 15.402/2026. O rol cresceu, e os percentuais de progressão dos hediondos subiram em 2026 (de 40/50/60/70% para 70/75/80/85%). Confira sempre a redação vigente na data da prova.",
  },
  questoes: [
    {
      topico: "Rol dos hediondos",
      subassunto: "Lesão contra policial",
      dificuldade: 5,
      raciocinio: "O inciso I-A abrange a lesão gravíssima e a seguida de morte contra agentes de segurança.",
      enunciado:
        "Para fugir de uma barreira, um motorista lança o carro de propósito contra um policial rodoviário federal em serviço, que perde uma perna. O fato é tipificado como lesão corporal gravíssima (CP, art. 129, § 2º). Esse crime:",
      alternativas: [
        "não é hediondo, pois só o homicídio contra policial entra no rol",
        "é hediondo só se a vítima morrer, como lesão seguida de morte",
        "não é hediondo, pois a lesão corporal nunca foi incluída na Lei 8.072",
        "é hediondo, pela vítima e pelo serviço",
        "é hediondo só se o autor integrar organização criminosa",
      ],
      correta: 3,
      explicacao:
        "São hediondas a lesão corporal dolosa de natureza gravíssima (art. 129, § 2º) e a lesão corporal seguida de morte (art. 129, § 3º), quando praticadas contra autoridade ou agente dos arts. 142 e 144 da CF, no exercício da função ou em decorrência dela (Lei 8.072, art. 1º, I-A). O policial rodoviário federal está no art. 144.",
      explicacaoErradas:
        "A lesão gravíssima está no rol, por isso “só o homicídio” erra. A lesão seguida de morte é uma das hipóteses, mas não a única. A lesão contra agentes de segurança foi incluída no rol, ao contrário do que diz “nunca foi incluída”. A organização criminosa não é requisito.",
      pegadinha: "Gravíssima ou seguida de morte contra agente de segurança: hedionda.",
      conhecimento: "A proteção alcança o cônjuge, companheiro ou parente consanguíneo até o 3º grau do agente, em razão dessa condição.",
    },
    {
      topico: "Rol dos hediondos",
      subassunto: "Lesão grave comum",
      dificuldade: 5,
      raciocinio: "O inciso I-A não inclui o § 1º do art. 129.",
      enunciado:
        "Durante uma fiscalização, um homem agride um policial rodoviário federal, que fica 40 dias sem poder trabalhar. O fato é tipificado como lesão corporal grave (CP, art. 129, § 1º, I). Sobre a hediondez:",
      alternativas: [
        "é hedionda, pois toda lesão dolosa contra policial em serviço ou por causa da função está no rol",
        "não é hedionda, pois o rol só traz a lesão gravíssima e a seguida de morte",
        "é hedionda, pois a incapacidade por mais de 30 dias equivale à gravíssima para a Lei 8.072",
        "não é hedionda, pois a lesão contra policial só é hedionda fora do serviço",
        "é hedionda, se o juiz reconhecer na sentença a especial gravidade do fato",
      ],
      correta: 1,
      explicacao:
        "O art. 1º, I-A, da Lei 8.072 menciona apenas a lesão corporal dolosa de natureza gravíssima (art. 129, § 2º) e a lesão seguida de morte (art. 129, § 3º). A lesão grave do § 1º, como a incapacidade para as ocupações habituais por mais de 30 dias, fica de fora.",
      explicacaoErradas:
        "Nem “toda lesão dolosa” entra: só as dos §§ 2º e 3º. A incapacidade por mais de 30 dias é lesão grave, e não “equivale à gravíssima”. A proteção vale em serviço ou em razão da função, por isso “só fora do serviço” erra. O rol é legal: o juiz não cria hediondez pela “especial gravidade”.",
      pegadinha: "Lesão grave (§ 1º) contra policial não é hedionda.",
      conhecimento: "O sistema adotado é o legal: só é hediondo o que a lei lista.",
    },
    {
      topico: "Rol dos hediondos",
      subassunto: "Roubo",
      dificuldade: 4,
      raciocinio: "Roubo hediondo: restrição da liberdade, arma de fogo ou resultado lesão grave ou morte.",
      enunciado:
        "Dois homens roubam um caminhoneiro numa rodovia federal. Um caso foi cometido com uma faca, em concurso de pessoas. Outro caso, com um revólver. Sem outras circunstâncias, são hediondos:",
      alternativas: [
        "os dois, pois todo roubo circunstanciado está no rol dos hediondos",
        "nenhum dos dois, pois só o latrocínio é roubo hediondo",
        "só o roubo com faca, pelo concurso de pessoas e pela arma branca",
        "os dois, pois a arma branca e a arma de fogo têm o mesmo tratamento",
        "só o roubo com revólver, pelo emprego de arma de fogo",
      ],
      correta: 4,
      explicacao:
        "O roubo é hediondo em três hipóteses: circunstanciado pela restrição de liberdade da vítima, circunstanciado pelo emprego de arma de fogo (inclusive de uso proibido ou restrito) e qualificado pelo resultado lesão grave ou morte (Lei 8.072, art. 1º, II). Arma branca e concurso de pessoas não estão na lista.",
      explicacaoErradas:
        "Nem “todo roubo circunstanciado” é hediondo. O latrocínio não é o único caso. A faca e o concurso de pessoas não tornam o roubo hediondo. A arma branca e a arma de fogo não têm “o mesmo tratamento”: só a de fogo está no rol.",
      pegadinha: "Faca e comparsa: roubo aumentado, mas não hediondo.",
      conhecimento: "O roubo com restrição da liberdade da vítima também é hediondo.",
    },
    {
      topico: "Rol dos hediondos",
      subassunto: "Tentativa",
      dificuldade: 4,
      raciocinio: "O caput do art. 1º diz “consumados ou tentados”.",
      enunciado:
        "Um homem atira num motorista para levar a carga do caminhão. A vítima sobrevive, e ele foge sem levar nada. Ele responde por tentativa de latrocínio. Esse crime:",
      alternativas: [
        "é hediondo, pois o rol inclui também os crimes tentados",
        "não é hediondo, pois só o latrocínio consumado está no rol",
        "não é hediondo, pois não houve morte nem subtração",
        "é hediondo só se a vítima ficar com lesão corporal grave",
        "é hediondo só se o juiz afastar a redução da tentativa",
      ],
      correta: 0,
      explicacao:
        "São considerados hediondos os crimes do rol, “consumados ou tentados” (Lei 8.072, art. 1º, caput). A tentativa de latrocínio (roubo qualificado pelo resultado morte) é hedionda.",
      explicacaoErradas:
        "A lei não exige a consumação, por isso “só o latrocínio consumado” erra. A falta de morte e de subtração explica a tentativa, mas não afasta a hediondez. A lesão grave e a redução da tentativa não são requisitos.",
      pegadinha: "Hediondo tentado continua hediondo.",
      conhecimento: "A tentativa reduz a pena (CP, art. 14, parágrafo único), mas não muda a natureza do crime.",
    },
    {
      topico: "Rol dos hediondos",
      subassunto: "Qualificado-privilegiado",
      dificuldade: 5,
      raciocinio: "Para o STJ, o homicídio qualificado-privilegiado não é hediondo.",
      enunciado:
        "Um homem, dominado por violenta emoção logo após injusta provocação, mata outro com uma emboscada. O juiz reconhece o privilégio (CP, art. 121, § 1º) e a qualificadora objetiva da emboscada. Para o STJ, esse homicídio:",
      alternativas: [
        "é hediondo, pois todo homicídio qualificado está no rol",
        "é hediondo, pois a qualificadora prevalece sobre o privilégio",
        "não pode ser qualificado e privilegiado ao mesmo tempo",
        "não é hediondo, pois essa figura híbrida não está no rol",
        "é hediondo só quando o privilégio for o relevante valor social",
      ],
      correta: 3,
      explicacao:
        "O privilégio, de natureza subjetiva, pode coexistir com qualificadora objetiva, como a emboscada. Para o STJ, o homicídio qualificado-privilegiado não figura no rol dos crimes hediondos, e o regime é fixado pelas regras comuns do Código Penal.",
      explicacaoErradas:
        "“Todo homicídio qualificado” ignora a solução do STJ. A ideia de que “a qualificadora prevalece” não tem base. A coexistência é possível quando a qualificadora é objetiva. A espécie do privilégio não muda a conclusão.",
      pegadinha: "Privilégio subjetivo + qualificadora objetiva: possível, e não hediondo.",
      conhecimento: "O homicídio simples só é hediondo em atividade típica de grupo de extermínio, ainda que cometido por um só agente.",
    },
    {
      topico: "Rol dos hediondos",
      subassunto: "Furto",
      dificuldade: 4,
      raciocinio: "Só o furto qualificado por explosivo (art. 155, § 4º-A) é hediondo.",
      enunciado:
        "Numa madrugada, um grupo explode o caixa eletrônico de um posto de combustível à beira de uma rodovia federal e leva o dinheiro. Em outro posto, um homem arromba a porta e furta as mercadorias. São hediondos:",
      alternativas: [
        "os dois, pois todo furto qualificado está no rol",
        "nenhum, pois o furto, sem violência à pessoa, nunca é hediondo",
        "só o furto com explosivo, por estar no rol desde 2019",
        "só o furto com arrombamento, pela destruição de obstáculo",
        "os dois, se forem cometidos durante o repouso noturno",
      ],
      correta: 2,
      explicacao:
        "O furto qualificado pelo emprego de explosivo ou de artefato análogo que cause perigo comum (art. 155, § 4º-A) é hediondo desde a Lei 13.964/2019 (Lei 8.072, art. 1º, IX). O furto com rompimento de obstáculo (art. 155, § 4º, I) não está no rol.",
      explicacaoErradas:
        "Nem “todo furto qualificado” é hediondo. O furto com explosivo está no rol, por isso “nunca é hediondo” erra. O arrombamento qualifica o furto, mas não o torna hediondo. O “repouso noturno” é causa de aumento e não interfere na hediondez.",
      pegadinha: "Explosivo: furto hediondo. Arrombamento: não.",
      conhecimento: "A Lei 13.964/2019 também incluiu no rol o roubo com restrição da liberdade e com arma de fogo.",
    },
    {
      topico: "Equiparados",
      subassunto: "Tráfico privilegiado",
      dificuldade: 5,
      raciocinio: "O art. 112, § 5º, da LEP tira o tráfico privilegiado dos equiparados.",
      enunciado:
        "Um primário, sem antecedentes e sem ligação com organização criminosa, é condenado por transportar droga num ônibus interestadual, com a redução do art. 33, § 4º, da Lei 11.343. Para a progressão de regime, o crime:",
      alternativas: [
        "é equiparado a hediondo, como todo tráfico de drogas",
        "é hediondo, pois o transporte interestadual agrava o tráfico",
        "é equiparado, mas com percentual reduzido pela causa de diminuição",
        "não é equiparado só se a pena final ficar abaixo de 4 anos",
        "não é hediondo nem equiparado, por expressa previsão da LEP",
      ],
      correta: 4,
      explicacao:
        "Não se considera hediondo ou equiparado, para os fins do art. 112 da LEP, o crime de tráfico de drogas previsto no § 4º do art. 33 da Lei 11.343 (art. 112, § 5º, da LEP). O STF já havia firmado o mesmo entendimento.",
      explicacaoErradas:
        "Nem “todo tráfico” é equiparado: o privilegiado não é. O “transporte interestadual” é causa de aumento e não muda a natureza. Não há “percentual reduzido” de equiparado: o crime simplesmente não é equiparado. A lei não condiciona o efeito à pena final.",
      pegadinha: "Tráfico privilegiado: crime comum para a execução.",
      conhecimento: "Para o STJ, a associação para o tráfico (art. 35) também não é hedionda nem equiparada.",
    },
    {
      topico: "Vedações",
      subassunto: "Fiança e liberdade provisória",
      dificuldade: 4,
      raciocinio: "A lei proíbe fiança, mas não a liberdade provisória sem fiança.",
      enunciado:
        "Um homem é preso em flagrante por extorsão mediante sequestro. Na audiência de custódia, a defesa pede a liberdade provisória. Sobre o pedido:",
      alternativas: [
        "é vedado, pois a Lei 8.072 proíbe toda forma de liberdade provisória",
        "pode ser concedida sem fiança, se ausentes os requisitos da preventiva",
        "pode ser concedida com fiança, fixada no valor máximo pela gravidade do crime",
        "é vedado, pois o crime é insuscetível de graça e anistia, como diz a Constituição",
        "depende de o crime ser tentado, e não consumado",
      ],
      correta: 1,
      explicacao:
        "Os crimes hediondos são insuscetíveis de anistia, graça, indulto e fiança (Lei 8.072, art. 2º). A Lei 11.464/2007 retirou a vedação à liberdade provisória, que pode ser concedida sem fiança, com ou sem cautelares diversas, quando não houver os requisitos da prisão preventiva.",
      explicacaoErradas:
        "A lei não proíbe “toda forma de liberdade provisória”: veda a fiança. Por isso, também não cabe a liberdade “com fiança”. A vedação de “graça e anistia” trata da extinção da punibilidade, não da prisão no processo. Ser tentado ou consumado não muda a regra.",
      pegadinha: "Inafiançável não é sinônimo de sem liberdade provisória.",
      conhecimento: "A Constituição também torna inafiançáveis a tortura, o tráfico e o terrorismo (art. 5º, XLIII).",
    },
    {
      topico: "Processo",
      subassunto: "Prisão temporária",
      dificuldade: 4,
      raciocinio: "Nos hediondos, a temporária é de 30 dias, prorrogáveis por igual período.",
      enunciado:
        "Numa investigação de extorsão mediante sequestro de um motorista de transportadora, o juiz decreta a prisão temporária do suspeito. O prazo máximo da prisão, contando a prorrogação, é de:",
      alternativas: [
        "5 dias, prorrogáveis por mais 5, como em qualquer crime da Lei 7.960",
        "10 dias, prorrogáveis por mais 10, nos hediondos e equiparados",
        "30 dias, sem prorrogação, por ser a temporária medida excepcional",
        "60 dias, somando 30 e a prorrogação por igual período",
        "90 dias, enquanto durar o inquérito policial",
      ],
      correta: 3,
      explicacao:
        "A prisão temporária, nos crimes hediondos e equiparados, terá o prazo de 30 dias, prorrogável por igual período em caso de extrema e comprovada necessidade (Lei 8.072, art. 2º, § 4º). São, no máximo, 60 dias.",
      explicacaoErradas:
        "O prazo de 5 + 5 dias é o da Lei 7.960 para os demais crimes, e não para “qualquer crime”. Não existe o prazo de 10 + 10 dias. Os 30 dias admitem prorrogação, por isso “sem prorrogação” erra. A temporária não dura “enquanto durar o inquérito”.",
      pegadinha: "Hediondo: 30 + 30. Demais crimes: 5 + 5.",
      conhecimento: "A extorsão mediante sequestro é hedionda em todas as formas, simples e qualificadas.",
    },
    {
      topico: "Pena",
      subassunto: "Regime inicial",
      dificuldade: 5,
      raciocinio: "O STF declarou inconstitucional o regime inicial fechado obrigatório.",
      enunciado:
        "Um réu primário é condenado a 6 anos por um crime hediondo, com todas as circunstâncias judiciais favoráveis. O juiz fixa o regime fechado só porque a Lei 8.072 o manda. Pela jurisprudência do STF, essa fundamentação:",
      alternativas: [
        "é válida, pois o art. 2º, § 1º, é norma especial e prevalece sobre o CP",
        "é válida, pois o regime fechado é obrigatório nos hediondos",
        "não basta, pois o regime deve seguir as regras do Código Penal",
        "não basta, pois o crime hediondo de primário deve começar no semiaberto",
        "é válida, se a pena passar de 4 anos",
      ],
      correta: 2,
      explicacao:
        "O STF declarou inconstitucional a obrigatoriedade do regime inicial fechado do art. 2º, § 1º, da Lei 8.072, por ofensa à individualização da pena. O regime é fixado pelo art. 33 do CP e pelas circunstâncias do art. 59. Com 6 anos e circunstâncias favoráveis, o regime cabível seria, em regra, o semiaberto.",
      explicacaoErradas:
        "Ser “norma especial” não salva a regra declarada inconstitucional. O regime fechado deixou de ser “obrigatório”. Não existe regra de que o hediondo “deve começar no semiaberto”: depende do caso. A pena acima de 4 anos não autoriza o fechado sozinha.",
      pegadinha: "O texto da lei ainda diz fechado, mas o STF afastou a obrigatoriedade.",
      conhecimento: "O juiz pode fixar regime mais grave com fundamentação concreta (Súmula 719 do STF).",
    },
    {
      topico: "Execução",
      subassunto: "Progressão em 2026",
      dificuldade: 5,
      raciocinio: "Pela Lei 15.358/2026, reincidente em hediondo progride com 80%, e com 85% se houver morte.",
      enunciado:
        "Um condenado por roubo com arma de fogo cometido depois da Lei 15.358/2026 já tinha condenação definitiva anterior por estupro. Não houve morte. Pela LEP vigente, ele progride de regime após cumprir:",
      alternativas: [
        "70% da pena, como todo condenado por crime hediondo",
        "60% da pena, como reincidente em crime hediondo",
        "85% da pena, sem livramento condicional",
        "75% da pena, como no hediondo com resultado morte",
        "80% da pena, como reincidente em crime hediondo",
      ],
      correta: 4,
      explicacao:
        "Pela redação da Lei 15.358/2026, a progressão exige 80% da pena se o apenado for reincidente na prática de crime hediondo ou equiparado (LEP, art. 112, VII). O roubo com arma de fogo e o estupro são hediondos.",
      explicacaoErradas:
        "Os 70% são do primário. Os 60% eram o percentual antigo do reincidente. Os 85% exigem resultado morte, que não houve. Os 75% são do primário em hediondo com morte, entre outros casos.",
      pegadinha: "Primário 70, morte 75, reincidente 80, reincidente com morte 85.",
      conhecimento: "Desde a Lei 14.843/2024, a progressão exige boa conduta carcerária e resultado do exame criminológico (art. 112, § 1º).",
    },
    {
      topico: "Execução",
      subassunto: "Lei no tempo",
      dificuldade: 5,
      raciocinio: "A lei penal mais grave não retroage, também na progressão de regime.",
      enunciado:
        "Um primário cometeu um latrocínio tentado, sem morte, antes da Lei 15.358/2026, e começou a cumprir a pena depois dela. Ele progride de regime após cumprir:",
      alternativas: [
        "40% da pena, pois a lei nova mais grave não retroage",
        "70% da pena, pois vale a lei da época da execução",
        "75% da pena, pois o latrocínio envolve resultado morte",
        "70% da pena, pois a progressão é norma processual",
        "50% da pena, pela média entre a lei antiga e a nova",
      ],
      correta: 0,
      explicacao:
        "As regras de progressão têm natureza penal material: a lei mais grave não alcança fatos anteriores (CF, art. 5º, XL). Aplica-se a redação dada pela Lei 13.964/2019, que exigia 40% para o primário condenado por crime hediondo sem resultado morte. É a mesma lógica da Súmula 471 do STJ, sobre a Lei 11.464/2007.",
      explicacaoErradas:
        "A lei “da época da execução” só valeria se fosse mais benéfica. A tentativa sem morte não atrai o percentual do hediondo com resultado morte. Tratar a progressão como “norma processual” contraria a jurisprudência. Não existe “média” entre leis: ou retroage a mais benéfica, ou vale a da época do fato.",
      pegadinha: "Lei mais grave: só para fatos posteriores.",
      conhecimento: "A combinação de partes de leis diferentes é vedada (Súmula 501 do STJ, sobre a Lei de Drogas).",
    },
    {
      topico: "Associação",
      subassunto: "Art. 8º",
      dificuldade: 5,
      raciocinio: "Três pessoas: associação criminosa, com a pena especial do art. 8º.",
      enunciado:
        "Três pessoas se associam de forma estável para sequestrar motoristas de transportadoras e exigir resgate. Antes do primeiro crime, uma delas denuncia o grupo à polícia, o que permite desmontá-lo. Pela Lei 8.072/1990:",
      alternativas: [
        "elas respondem por organização criminosa, com pena de 3 a 8 anos e redução para a delatora",
        "elas não respondem por nada, pois nenhum sequestro chegou a acontecer",
        "respondem por associação criminosa, de 3 a 6 anos, e a delatora tem a pena reduzida",
        "respondem por associação criminosa com pena de 1 a 3 anos, e a delatora tem perdão judicial",
        "só a delatora fica isenta de pena, e as outras respondem com 3 a 6 anos",
      ],
      correta: 2,
      explicacao:
        "Nos crimes hediondos, tortura, tráfico e terrorismo, a pena da associação criminosa (CP, art. 288) é de 3 a 6 anos de reclusão (Lei 8.072, art. 8º). O participante que denunciar à autoridade o grupo, possibilitando seu desmantelamento, terá a pena reduzida de 1/3 a 2/3 (parágrafo único).",
      explicacaoErradas:
        "Com três pessoas não há “organização criminosa”, que exige quatro. A associação é crime autônomo e se consuma com a associação estável, por isso “não respondem por nada” erra. A pena de 1 a 3 anos é a comum do CP, e a lei prevê redução, não perdão. Não há “isenta de pena”.",
      pegadinha: "Associação para hediondo: 3 a 6 anos e redução para quem denuncia.",
      conhecimento: "Na associação para o tráfico, vale o tipo especial do art. 35 da Lei 11.343, e não o art. 288 do CP.",
    },
    {
      topico: "Rol dos hediondos",
      subassunto: "Sequestro de menor",
      dificuldade: 4,
      raciocinio: "Desde a Lei 14.811/2024, o sequestro contra menor de 18 anos é hediondo.",
      enunciado:
        "Numa abordagem, policiais rodoviários federais encontram uma adolescente de 16 anos trancada no baú de um caminhão, privada da liberdade há dois dias. Para a Lei 8.072, o sequestro e cárcere privado:",
      alternativas: [
        "não é hediondo, pois só a extorsão mediante sequestro está no rol",
        "é hediondo só se houver pedido de resgate",
        "é hediondo só se a vítima for menor de 14 anos",
        "é hediondo, pois a vítima é menor de 18 anos",
        "não é hediondo, pois a privação durou menos de 15 dias",
      ],
      correta: 3,
      explicacao:
        "A Lei 14.811/2024 incluiu no rol o sequestro e cárcere privado cometido contra menor de 18 anos (CP, art. 148, § 1º, IV), além do tráfico de pessoas contra criança ou adolescente (CP, art. 149-A) e do induzimento ao suicídio ou automutilação pela internet (Lei 8.072, art. 1º, X a XII).",
      explicacaoErradas:
        "A extorsão mediante sequestro não é a única hipótese, por isso “só a extorsão” erra. O “pedido de resgate” transformaria o crime em extorsão mediante sequestro, mas não é requisito aqui. A lei fala em menor de 18, e não de 14 anos. A duração não importa para a hediondez.",
      pegadinha: "Sequestro de adolescente: hediondo desde 2024.",
      conhecimento: "A privação por mais de 15 dias é outra qualificadora do art. 148, mas não está no rol.",
    },
  ],
};
