import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "especial-05",
  resumo: {
    ideia:
      "Os crimes do ECA protegem a criança e o adolescente de quem deveria cuidar deles e de quem os explora. Todos são de ação pública incondicionada, e nenhum admite a Lei 9.099, qualquer que seja a pena.",
    itens: [
      {
        termo: "Regras gerais",
        faz: "Valem a Parte Geral do CP e o CPP (art. 226). A ação é pública incondicionada (art. 227). Não se aplica a Lei 9.099, qualquer que seja a pena (art. 226, § 1º).",
      },
      {
        termo: "Violência doméstica",
        faz: "Na violência doméstica e familiar contra criança ou adolescente, não cabem cesta básica, prestação pecuniária nem pena de multa isolada (art. 226, § 2º).",
      },
      {
        termo: "Perda do cargo",
        faz: "Para o servidor que pratica crime do ECA com abuso de autoridade, a perda do cargo depende de reincidência, e aí independe da pena aplicada (art. 227-A).",
      },
      {
        termo: "Apreensão ilegal",
        faz: "Apreender criança ou adolescente sem flagrante de ato infracional e sem ordem escrita do juiz, ou sem as formalidades legais: detenção de 6 meses a 2 anos (art. 230).",
        pista: "A Lei 15.163/2025 repetiu no próprio art. 230 que a Lei 9.099 não se aplica.",
      },
      {
        termo: "Depois da apreensão",
        faz: "A autoridade policial deve comunicar logo o juiz e a família ou a pessoa indicada (art. 231). A autoridade que sabe da ilegalidade deve liberar na hora (art. 234).",
      },
      {
        termo: "Vexame",
        faz: "Submeter a vexame ou constrangimento criança ou adolescente sob sua autoridade, guarda ou vigilância: detenção de 6 meses a 2 anos (art. 232).",
      },
      {
        termo: "Lar substituto e venda de filho",
        faz: "Subtrair de quem tem a guarda para pôr em lar substituto: 2 a 6 anos (art. 237). Prometer ou entregar filho mediante paga: 1 a 4 anos, também para quem paga (art. 238).",
      },
      {
        termo: "Envio ao exterior",
        faz: "Promover ou auxiliar o envio ao exterior sem as formalidades legais ou para lucrar: 4 a 6 anos. Com violência, grave ameaça ou fraude: 6 a 8, mais a pena da violência (art. 239).",
      },
      {
        termo: "Arma, bebida e fogos",
        faz: "Arma a criança ou adolescente: 3 a 6 anos (art. 242), hoje só para arma que não seja de fogo. Bebida alcoólica: 2 a 4 anos, com aumento de 1/3 até a metade se a vítima consumir (art. 243). Fogos: 6 meses a 2 anos (art. 244).",
        pista: "Arma de fogo, munição ou explosivo vão para o Estatuto do Desarmamento (art. 16, § 1º, V).",
      },
      {
        termo: "Exploração sexual",
        faz: "Submeter criança ou adolescente à exploração sexual: 4 a 10 anos. O dono, o gerente ou o responsável pelo local respondem igual, e a licença do estabelecimento é cassada (art. 244-A).",
      },
      {
        termo: "Corrupção de menores",
        faz: "Praticar infração penal com menor de 18 anos ou induzi-lo a praticá-la: 1 a 4 anos (art. 244-B). Aumenta de 1/3 se a infração for hedionda.",
        pista: "É crime formal: não é preciso provar que o menor foi corrompido (Súmula 500 do STJ). Dois adolescentes, dois crimes.",
      },
      {
        termo: "Desaparecimento",
        faz: "Pai, mãe ou responsável que, de propósito, não comunicam à autoridade o desaparecimento da criança ou do adolescente: 2 a 4 anos (art. 244-C).",
      },
    ],
    cuidado:
      "A Lei 15.487/2026 trocou os termos dos arts. 240 a 241-E por “violência sexual contra criança ou adolescente” e incluiu o material feito com inteligência artificial. A Lei 15.234/2025 criou o aumento do art. 243.",
  },
  questoes: [
    {
      topico: "Crimes do ECA",
      subassunto: "Regras gerais",
      dificuldade: 4,
      raciocinio: "O § 1º do art. 226 afasta a Lei 9.099 qualquer que seja a pena.",
      enunciado:
        "Um homem é denunciado por crime do ECA com pena de detenção de 6 meses a 2 anos, praticado contra um adolescente. A defesa pede transação penal e sustenta que a ação depende de representação dos pais. Esses pedidos devem ser:",
      alternativas: [
        "aceitos, pois a pena máxima não passa de 2 anos e a infração é de menor potencial ofensivo",
        "aceito só o primeiro, pois a transação cabe, mas a ação é pública incondicionada",
        "aceito só o segundo, pois a ação depende de representação nos crimes com detenção",
        "rejeitados, pois a Lei 9.099 não se aplica e a ação é pública incondicionada",
        "rejeitados, pois só o juiz da infância pode julgar os crimes do ECA, sem a Lei 9.099",
      ],
      correta: 3,
      explicacao:
        "Aos crimes cometidos contra a criança e o adolescente, independentemente da pena prevista, não se aplica a Lei 9.099 (art. 226, § 1º). E os crimes do ECA são de ação pública incondicionada (art. 227). Não há transação penal nem exigência de representação.",
      explicacaoErradas:
        "A pena baixa não atrai a Lei 9.099, por isso “infração de menor potencial ofensivo” erra. “A transação cabe” contraria o art. 226, § 1º. Nenhum crime do ECA depende de representação. E o ECA não reserva esses crimes “só ao juiz da infância”: a vedação da Lei 9.099 vale em qualquer juízo.",
      pegadinha: "Pena de até 2 anos não basta: o ECA afasta a Lei 9.099 de propósito.",
      conhecimento: "O art. 230 ganhou, pela Lei 15.163/2025, um § 2º que repete a vedação da Lei 9.099.",
    },
    {
      topico: "Crimes do ECA",
      subassunto: "Apreensão ilegal",
      dificuldade: 5,
      raciocinio: "Apreensão sem flagrante e sem ordem judicial escrita é o crime do art. 230.",
      enunciado:
        "Numa operação, um agente apreende um adolescente que caminhava pelo acostamento e o leva à delegacia “para averiguação”, sem flagrante de ato infracional e sem ordem judicial. A conduta configura:",
      alternativas: [
        "o crime do art. 230 do ECA, com detenção de 6 meses a 2 anos",
        "fato atípico, pois a condução de adolescente para averiguação é autorizada pelo ECA",
        "o crime do art. 230 do ECA, que é de menor potencial ofensivo e admite transação",
        "o crime do art. 232 do ECA, por submeter adolescente sob sua guarda a vexame",
        "só infração administrativa, pois o adolescente não foi apresentado ao juiz da infância",
      ],
      correta: 0,
      explicacao:
        "Privar a criança ou o adolescente de sua liberdade, apreendendo-o sem flagrante de ato infracional ou sem ordem escrita da autoridade judiciária competente, é o crime do art. 230 (detenção de 6 meses a 2 anos). Não se aplica a Lei 9.099 (art. 230, § 2º, e art. 226, § 1º).",
      explicacaoErradas:
        "O ECA não autoriza a condução “para averiguação”, por isso “fato atípico” erra. O crime “admite transação” contraria os arts. 226, § 1º, e 230, § 2º. O art. 232 trata de vexame, não da apreensão em si. A conduta é crime, não “só infração administrativa”.",
      pegadinha: "Sem flagrante e sem ordem escrita do juiz, não há apreensão lícita de adolescente.",
      conhecimento: "Também comete o crime quem apreende sem observar as formalidades legais (art. 230, § 1º).",
    },
    {
      topico: "Crimes do ECA",
      subassunto: "Comunicação da apreensão",
      dificuldade: 4,
      raciocinio: "O art. 231 exige comunicação imediata ao juiz e à família.",
      enunciado:
        "Um adolescente é apreendido em flagrante de ato infracional numa rodovia e apresentado à autoridade policial. A autoridade lavra o auto, mas só avisa o juiz no dia seguinte e não comunica a família nem pessoa indicada pelo adolescente. Ela:",
      alternativas: [
        "não comete crime, pois a comunicação ao juiz pode ser feita em até 24 horas",
        "não comete crime, pois o aviso à família cabe ao Conselho Tutelar, não à polícia",
        "comete o crime do art. 231 do ECA, por não comunicar logo juiz e família",
        "comete abuso de autoridade da Lei 13.869, que absorve o crime do ECA",
        "comete o crime do art. 234 do ECA, por deixar de liberar o adolescente",
      ],
      correta: 2,
      explicacao:
        "É crime deixar a autoridade policial responsável pela apreensão de fazer imediata comunicação à autoridade judiciária competente e à família do apreendido ou à pessoa por ele indicada (art. 231, detenção de 6 meses a 2 anos).",
      explicacaoErradas:
        "O ECA exige comunicação “imediata”, sem prazo de “24 horas”. O dever é da autoridade policial, não do Conselho Tutelar. A Lei 13.869 não “absorve” o crime específico do ECA. O art. 234 pune quem não libera diante de apreensão ilegal, e aqui o flagrante era válido.",
      pegadinha: "O dever é duplo: juiz e família, os dois de imediato.",
      conhecimento: "O art. 234 pune a autoridade que, sem justa causa, não ordena a liberação logo que sabe da ilegalidade da apreensão.",
    },
    {
      topico: "Crimes do ECA",
      subassunto: "Perda do cargo",
      dificuldade: 5,
      raciocinio: "O art. 227-A condiciona a perda do cargo à reincidência.",
      enunciado:
        "Um servidor público é condenado pela primeira vez, a 1 ano de detenção, por crime do ECA praticado com abuso de autoridade. Anos depois, já reincidente, é condenado por outro crime do ECA nas mesmas condições, a 8 meses. Pelo art. 227-A, a perda do cargo:",
      alternativas: [
        "cabe já na primeira condenação, pois a pena é de 1 ano e houve abuso de autoridade",
        "cabe na segunda condenação, ainda que a pena seja menor que 1 ano",
        "não cabe em nenhuma, pois as penas não passam de 4 anos",
        "cabe na segunda só se a pena da reincidência for de 1 ano ou mais",
        "não cabe em nenhuma, pois a perda do cargo só existe na Lei 13.869",
      ],
      correta: 1,
      explicacao:
        "Os efeitos da condenação do art. 92, I, do CP (perda do cargo, função ou mandato) nos crimes do ECA praticados por servidor com abuso de autoridade dependem de reincidência (art. 227-A). Na reincidência, a perda independe da pena aplicada (parágrafo único).",
      explicacaoErradas:
        "“Já na primeira condenação” ignora a exigência de reincidência. O art. 227-A afasta a regra comum do CP, por isso o argumento dos “4 anos” erra. “Só se a pena da reincidência for de 1 ano ou mais” contraria o parágrafo único. A perda do cargo não existe “só na Lei 13.869”: o art. 227-A foi incluído no ECA por ela.",
      pegadinha: "Reincidência é condição; a pena da segunda condenação não importa.",
      conhecimento: "A Lei 13.869 adota a mesma lógica: a perda do cargo depende de reincidência em crime de abuso de autoridade (art. 4º, parágrafo único).",
    },
    {
      topico: "Crimes do ECA",
      subassunto: "Arma a adolescente",
      dificuldade: 5,
      raciocinio: "O art. 242 do ECA ficou só para armas que não são de fogo.",
      enunciado:
        "Num posto de combustível à beira da rodovia, um comerciante vende a um adolescente de 16 anos um punhal. Em outra ocasião, entrega ao mesmo adolescente um revólver com munição. Respectivamente, ele responde por:",
      alternativas: [
        "art. 242 do ECA nos dois casos, pois o ECA é especial em relação ao Estatuto",
        "art. 16, § 1º, V, do Estatuto do Desarmamento nos dois casos",
        "fato atípico no primeiro, pois punhal não é arma, e art. 242 do ECA no segundo",
        "art. 242 do ECA no primeiro e art. 16, § 1º, V, do Estatuto no segundo",
        "art. 243 do ECA no primeiro, por produto perigoso, e art. 14 do Estatuto no segundo",
      ],
      correta: 3,
      explicacao:
        "O Estatuto do Desarmamento, posterior, pune quem vende, entrega ou fornece arma de fogo, acessório, munição ou explosivo a criança ou adolescente (art. 16, § 1º, V, reclusão de 3 a 6 anos). O art. 242 do ECA continua valendo para as demais armas, como a arma branca.",
      explicacaoErradas:
        "O ECA cede ao Estatuto quanto à arma de fogo, por isso “nos dois casos” pelo art. 242 erra. O Estatuto não trata de arma branca, por isso também não serve “nos dois casos”. Punhal é arma branca, e não “fato atípico”. O art. 243 trata de bebida e produtos que causam dependência, e o art. 14 não é o tipo da entrega a adolescente.",
      pegadinha: "Arma de fogo: Estatuto. Arma branca: ECA.",
      conhecimento: "As penas dos dois tipos são iguais: reclusão de 3 a 6 anos.",
    },
    {
      topico: "Crimes do ECA",
      subassunto: "Bebida alcoólica",
      dificuldade: 4,
      raciocinio: "O parágrafo único do art. 243 aumenta a pena quando a vítima consome.",
      enunciado:
        "Numa conveniência de posto na rodovia, o atendente vende uma garrafa de vodca a um adolescente de 15 anos, que a bebe ali mesmo. Policiais rodoviários federais presenciam o fato. O atendente responde pelo crime do art. 243 do ECA:",
      alternativas: [
        "com detenção de 2 a 4 anos e multa, aumentada de 1/3 até a metade",
        "com detenção de 2 a 4 anos e multa, sem aumento, pois quem bebeu foi o adolescente",
        "com prisão simples de 2 meses a 1 ano, por ser contravenção de servir bebida",
        "com detenção de 6 meses a 2 anos, com transação penal pela pena baixa",
        "com reclusão de 4 a 10 anos, por ser equiparado a exploração de adolescente",
      ],
      correta: 0,
      explicacao:
        "Vender, fornecer, servir, ministrar ou entregar bebida alcoólica a criança ou adolescente é crime do art. 243 (detenção de 2 a 4 anos e multa, se o fato não constitui crime mais grave). Desde a Lei 15.234/2025, a pena aumenta de 1/3 até a metade se a vítima utilizar ou consumir o produto.",
      explicacaoErradas:
        "“Sem aumento” ignora o parágrafo único, que vale justamente quando o adolescente consome. A contravenção de servir bebida a menor foi revogada pela Lei 13.106/2015, por isso “prisão simples” erra. A pena não é de “6 meses a 2 anos”, e o ECA afasta a transação. A pena de “4 a 10 anos” é da exploração sexual.",
      pegadinha: "Vender já consuma o crime; o consumo pela vítima aumenta a pena.",
      conhecimento: "O mesmo tipo pune a entrega, sem justa causa, de outros produtos que possam causar dependência física ou psíquica.",
    },
    {
      topico: "Crimes do ECA",
      subassunto: "Corrupção de menores",
      dificuldade: 5,
      raciocinio: "Crime formal (Súmula 500) com aumento quando a infração é hedionda.",
      enunciado:
        "Um adulto e um adolescente de 17 anos, que já tinha passagens por atos infracionais, roubam um motorista na rodovia com emprego de arma de fogo. Sobre o crime de corrupção de menores do adulto, é correto afirmar que:",
      alternativas: [
        "não se configura, pois o adolescente já era corrompido antes do roubo",
        "se configura só se houver prova de que o adolescente piorou moralmente",
        "se configura, e a pena aumenta de 1/3, pois o roubo com arma de fogo é hediondo",
        "fica absorvido pelo roubo, pois a participação do adolescente é meio para o crime",
        "se configura, mas sem aumento, pois o aumento vale só para o tráfico de drogas",
      ],
      correta: 2,
      explicacao:
        "A corrupção de menores (art. 244-B) é crime formal e independe de prova da efetiva corrupção (Súmula 500 do STJ), por isso pouco importam as passagens anteriores. A pena aumenta de 1/3 se a infração estiver no rol do art. 1º da Lei 8.072 (art. 244-B, § 2º), e o roubo com emprego de arma de fogo está nele.",
      explicacaoErradas:
        "“Já era corrompido” e “prova de que piorou” contrariam a Súmula 500. A corrupção de menores não é “absorvida” pelo roubo: são crimes autônomos. O aumento depende do rol do art. 1º da Lei 8.072, e não “só para o tráfico de drogas”.",
      pegadinha: "Passagens anteriores do adolescente não afastam o crime.",
      conhecimento: "Pratica o mesmo crime quem usa meios eletrônicos, inclusive salas de bate-papo da internet (art. 244-B, § 1º).",
    },
    {
      topico: "Crimes do ECA",
      subassunto: "Corrupção de menores",
      dificuldade: 5,
      raciocinio: "Cada adolescente envolvido é uma vítima; um só furto, dois crimes de corrupção.",
      enunciado:
        "Um adulto furta cargas de um caminhão parado no acostamento junto com dois adolescentes, de 14 e 16 anos, numa única ação. Segundo o STJ, quanto à corrupção de menores, o adulto responde por:",
      alternativas: [
        "um só crime, pois houve uma única ação criminosa",
        "um só crime, com a pena aumentada pela quantidade de adolescentes",
        "dois crimes, em concurso material, somando as penas",
        "dois crimes, em concurso formal",
        "dois crimes, em continuidade delitiva, pela mesma maneira de execução",
      ],
      correta: 3,
      explicacao:
        "Para o STJ, a prática de crime em concurso com dois adolescentes leva à condenação por dois delitos de corrupção de menores, pois são dois bens jurídicos atingidos. Como resultam de uma só conduta, os crimes ficam em concurso formal.",
      explicacaoErradas:
        "“Um só crime” ignora que cada adolescente é vítima. A lei não prevê aumento “pela quantidade de adolescentes”. Houve uma só ação, por isso não é “concurso material”. A “continuidade delitiva” exige crimes praticados em momentos diferentes.",
      pegadinha: "Uma ação, dois adolescentes: dois crimes em concurso formal.",
      conhecimento: "O adulto também responde pelo furto, em concurso com as corrupções de menores.",
    },
    {
      topico: "Crimes do ECA",
      subassunto: "Envio ao exterior",
      dificuldade: 5,
      raciocinio: "A fraude leva à forma qualificada do art. 239.",
      enunciado:
        "Numa rodovia federal na fronteira, policiais rodoviários federais abordam um homem que leva uma criança para fora do país, a pedido de terceiros que pagaram pela viagem, usando autorização de viagem falsificada em nome dos pais. Pelo ECA, a conduta se enquadra no:",
      alternativas: [
        "art. 238, por entrega de filho a terceiro mediante paga, com pena de 1 a 4 anos",
        "art. 239, parágrafo único, por envio com fraude, com pena de 6 a 8 anos",
        "art. 239, caput, por envio sem as formalidades legais, com pena de 4 a 6 anos",
        "art. 237, por subtração com fim de colocação em lar substituto",
        "art. 230, por privação de liberdade sem ordem judicial escrita",
      ],
      correta: 1,
      explicacao:
        "Promover ou auxiliar ato destinado ao envio de criança ou adolescente ao exterior sem as formalidades legais ou com o fito de lucro é crime do art. 239 (4 a 6 anos). Se há emprego de violência, grave ameaça ou fraude, a pena é de 6 a 8 anos, além da pena da violência (parágrafo único). A autorização falsificada é fraude.",
      explicacaoErradas:
        "O art. 238 pune quem entrega o próprio filho ou pupilo mediante paga, e o homem não é o pai. O “caput, com 4 a 6 anos” esquece a fraude. O art. 237 exige subtração de quem tem a guarda para pôr em lar substituto. O art. 230 trata da apreensão ilegal por agente do Estado.",
      pegadinha: "Sem formalidade: caput. Com fraude, violência ou grave ameaça: parágrafo único.",
      conhecimento: "O uso do documento falso pode ser punido à parte, se não for absorvido pela fraude do art. 239.",
    },
    {
      topico: "Crimes do ECA",
      subassunto: "Lar substituto",
      dificuldade: 4,
      raciocinio: "A finalidade de colocar em lar substituto torna o fato especial.",
      enunciado:
        "Uma mulher tira uma criança de 3 anos da casa da avó, que tem a guarda judicial dela, para entregá-la a um casal que quer criá-la como filha. Policiais rodoviários federais localizam o carro do casal com a criança. A mulher responde por:",
      alternativas: [
        "subtração de incapazes, do art. 249 do CP, com detenção de 2 meses a 2 anos",
        "sequestro, do art. 148 do CP, pela privação de liberdade da criança",
        "entrega de filho mediante paga, do art. 238 do ECA, com pena de 1 a 4 anos",
        "envio ao exterior com inobservância das formalidades, do art. 239 do ECA",
        "subtração com fim de colocação em lar substituto, do art. 237 do ECA",
      ],
      correta: 4,
      explicacao:
        "Subtrair criança ou adolescente ao poder de quem o tem sob sua guarda em virtude de lei ou ordem judicial, com o fim de colocação em lar substituto, é crime do art. 237 do ECA (reclusão de 2 a 6 anos e multa). A finalidade especial afasta o tipo geral do CP.",
      explicacaoErradas:
        "A “subtração de incapazes” do CP é subsidiária e cede ao tipo especial do ECA. O “sequestro” exige a finalidade de privar a liberdade, não de pôr em outro lar. O art. 238 pune quem entrega o próprio filho mediante paga. Não houve “envio ao exterior”.",
      pegadinha: "Subtrair para pôr em lar substituto: art. 237 do ECA, não o CP.",
      conhecimento: "O CP prevê perdão judicial na subtração de incapazes se o menor for restituído sem ter sofrido maus-tratos (art. 249, § 2º).",
    },
    {
      topico: "Crimes do ECA",
      subassunto: "Venda de filho",
      dificuldade: 4,
      raciocinio: "O parágrafo único do art. 238 pune também quem paga.",
      enunciado:
        "Um pai combina entregar o filho recém-nascido a um casal em troca de dinheiro. O casal paga, mas a entrega é impedida antes de acontecer. Pelo art. 238 do ECA:",
      alternativas: [
        "só o pai responde, e só se a entrega se consumar",
        "o pai e o casal respondem, pela promessa e pela paga",
        "só o casal responde, pois o pai desistiu da entrega",
        "ninguém responde, pois não houve entrega efetiva da criança",
        "o pai responde por tentativa, e o casal não comete crime nenhum",
      ],
      correta: 1,
      explicacao:
        "O art. 238 pune quem promete ou efetiva a entrega de filho ou pupilo a terceiro mediante paga ou recompensa (reclusão de 1 a 4 anos e multa). Basta a promessa para o crime se consumar. O parágrafo único aplica as mesmas penas a quem oferece ou efetiva a paga ou recompensa.",
      explicacaoErradas:
        "A promessa já consuma o crime, por isso “só se a entrega se consumar” e “ninguém responde” erram. O pai não desistiu: a entrega foi impedida. Quem paga também responde, por isso “o casal não comete crime nenhum” erra.",
      pegadinha: "Prometer já basta; e quem paga responde igual.",
      conhecimento: "O crime protege o direito da criança de não ser tratada como mercadoria.",
    },
    {
      topico: "Crimes do ECA",
      subassunto: "Violência doméstica",
      dificuldade: 5,
      raciocinio: "O § 2º do art. 226 veda penas pecuniárias na violência doméstica contra criança.",
      enunciado:
        "Um pai é condenado por submeter o filho de 10 anos, sob sua guarda, a vexame e constrangimento em casa, no contexto de violência doméstica e familiar. O juiz pensa em substituir a pena por pagamento de cesta básica ou só por multa. Pelo ECA:",
      alternativas: [
        "a substituição por cesta básica é proibida, mas a pena pode ser trocada só por multa",
        "a substituição por multa é proibida, mas a cesta básica é aceita como prestação social",
        "as duas substituições são proibidas, assim como a prestação pecuniária",
        "as duas substituições são permitidas, pois a pena máxima é de 2 anos",
        "as duas são permitidas, se o juiz ouvir antes o Conselho Tutelar",
      ],
      correta: 2,
      explicacao:
        "Nos casos de violência doméstica e familiar contra a criança e o adolescente, é vedada a aplicação de penas de cesta básica ou de outras de prestação pecuniária, bem como a substituição de pena que implique o pagamento isolado de multa (art. 226, § 2º, incluído pela Lei 14.344/2022).",
      explicacaoErradas:
        "O § 2º proíbe as duas medidas, por isso “pode ser trocada só por multa” e “a cesta básica é aceita” erram. A pena baixa não autoriza as substituições, e a lei não abre exceção com a oitiva do Conselho Tutelar.",
      pegadinha: "A regra é igual à da Lei Maria da Penha, agora para a criança.",
      conhecimento: "O crime de vexame ou constrangimento (art. 232) tem detenção de 6 meses a 2 anos.",
    },
    {
      topico: "Crimes do ECA",
      subassunto: "Exploração sexual",
      dificuldade: 4,
      raciocinio: "O § 1º do art. 244-A alcança quem responde pelo local.",
      enunciado:
        "Numa operação de enfrentamento à exploração sexual de crianças e adolescentes em rodovias, policiais rodoviários federais constatam que o gerente de um estabelecimento à beira da estrada sabia da submissão de adolescentes a essa prática no local. Pelo ECA:",
      alternativas: [
        "o gerente tem as mesmas penas, e a cassação da licença é efeito obrigatório",
        "o gerente só responde se tiver participado de cada ato diretamente",
        "o gerente responde, mas a cassação da licença depende de pedido do Ministério Público",
        "só o dono do estabelecimento responde, e a cassação da licença é facultativa",
        "o gerente responde por crime menor, de 1 a 4 anos, por ser só o responsável pelo local",
      ],
      correta: 0,
      explicacao:
        "Submeter criança ou adolescente à exploração sexual é crime do art. 244-A (reclusão de 4 a 10 anos e multa, com perda de bens). Incorrem nas mesmas penas o proprietário, o gerente ou o responsável pelo local (§ 1º). A cassação da licença de localização e de funcionamento do estabelecimento é efeito obrigatório da condenação (§ 2º).",
      explicacaoErradas:
        "O § 1º não exige participação “em cada ato”. A cassação é efeito obrigatório, sem depender de “pedido do Ministério Público” nem ser “facultativa”. O gerente está expressamente no § 1º, ao lado do dono. O gerente responde com as mesmas penas, e não por “crime menor”.",
      pegadinha: "Dono, gerente ou responsável pelo local: as mesmas penas.",
      conhecimento: "Os bens e valores usados no crime vão para o Fundo dos Direitos da Criança e do Adolescente do estado ou do Distrito Federal.",
    },
    {
      topico: "Crimes do ECA",
      subassunto: "Desaparecimento",
      dificuldade: 4,
      raciocinio: "O art. 244-C pune a omissão dolosa dos pais ou do responsável.",
      enunciado:
        "Policiais rodoviários federais encontram, num ônibus, uma adolescente de 13 anos que tinha sumido de casa havia duas semanas. Apura-se que a mãe sabia do sumiço e, de propósito, nunca o comunicou a nenhuma autoridade. A mãe:",
      alternativas: [
        "não comete crime, pois não existe tipo penal para a falta de comunicação",
        "comete abandono de incapaz, do CP, por ter deixado a filha sem cuidado",
        "só responde se a omissão tiver sido culposa, por negligência",
        "comete só infração administrativa, punida com multa pelo juiz da infância",
        "comete o crime do art. 244-C do ECA, com reclusão de 2 a 4 anos e multa",
      ],
      correta: 4,
      explicacao:
        "Deixar o pai, a mãe ou o responsável legal, de forma dolosa, de comunicar à autoridade pública o desaparecimento de criança ou adolescente é crime do art. 244-C, incluído pela Lei 14.811/2024 (reclusão de 2 a 4 anos e multa).",
      explicacaoErradas:
        "O tipo existe desde 2024, por isso “não existe tipo penal” erra. O “abandono de incapaz” exige abandonar quem está sob cuidado, não deixar de comunicar o sumiço. O crime é doloso, e não “culposo”. A conduta é crime, não “só infração administrativa”.",
      pegadinha: "Só a omissão dolosa é crime: o esquecimento por descuido não entra.",
      conhecimento: "A Lei 14.811/2024 também incluiu o crime de intimidação sistemática (bullying) no CP.",
    },
  ],
};
