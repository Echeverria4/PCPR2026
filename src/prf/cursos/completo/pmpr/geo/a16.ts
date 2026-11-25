import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geo-a16",
  resumo: {
    ideia:
      "Esta aula fecha a cartografia com três temas: fusos horários (como a hora muda pelo mundo), projeções (como transformar a Terra redonda num mapa plano) e curvas de nível (como mostrar o relevo no papel). A prova cobra muito o cálculo de horas e a diferença entre as projeções.",
    itens: [
      {
        termo: "Fuso horário",
        faz: "A Terra gira 360° em 24 horas, ou seja, 15° por hora. Por isso, o mundo foi dividido em 24 fusos de 15° de longitude, cada um com uma hora de diferença do vizinho. A referência é o meridiano de Greenwich (UTC 0).",
      },
      {
        termo: "Leste adianta, oeste atrasa",
        faz: "A Terra gira de oeste para leste, então o Sol nasce primeiro nos lugares mais a leste. Quem está a leste tem a hora adiantada; quem está a oeste tem a hora atrasada.",
        pista: "UTC+9 (Tóquio) está 12 horas à frente de UTC-3 (Brasília).",
      },
      {
        termo: "Como calcular",
        faz: "Ache a diferença entre os fusos e some, se o destino fica a leste, ou subtraia, se fica a oeste. Em viagens, some também o tempo de viagem e dê a resposta na hora do lugar de chegada.",
      },
      {
        termo: "Fusos do Brasil",
        faz: "O Brasil tem 4 fusos: UTC-2 (Fernando de Noronha e outras ilhas do Atlântico), UTC-3 (hora de Brasília, a maior parte do país), UTC-4 (MS, MT, RO, RR e a maior parte do Amazonas) e UTC-5 (Acre e sudoeste do Amazonas).",
        pista: "O horário de verão não é adotado no Brasil desde 2019.",
      },
      {
        termo: "Linha Internacional de Data",
        faz: "Fica perto do meridiano de 180°, com desvios para não dividir países. Quem a cruza indo para o oeste (da América para a Ásia) ganha um dia no calendário; quem a cruza indo para o leste volta um dia.",
      },
      {
        termo: "Projeção cartográfica",
        faz: "Técnica para passar a superfície curva da Terra para um plano. Toda projeção tem alguma distorção: ou nas formas, ou nas áreas, ou nas distâncias. A escolha depende do uso do mapa.",
      },
      {
        termo: "Cilíndrica, cônica e plana",
        faz: "Cilíndrica: a Terra é projetada num cilindro e aparece inteira, com distorção maior perto dos polos. Cônica: projetada num cone, boa para latitudes médias. Plana (azimutal): projetada num plano a partir de um ponto, boa para os polos.",
        pista: "O símbolo da ONU usa uma projeção plana, centrada no Polo Norte.",
      },
      {
        termo: "Conforme",
        faz: "Mantém os ângulos e as formas dos lugares, mas distorce as áreas. A de Mercator é o exemplo clássico: muito usada na navegação, faz a Groenlândia parecer do tamanho da África, que é cerca de 14 vezes maior.",
      },
      {
        termo: "Equivalente",
        faz: "Mantém as áreas na proporção certa, mas distorce as formas. A de Peters é o exemplo clássico: os países perto do Equador, como os da África e da América do Sul, aparecem alongados, mas com o tamanho certo.",
      },
      {
        termo: "Equidistante e afilática",
        faz: "Equidistante: mantém as distâncias a partir de um ponto. Afilática: não mantém nenhuma propriedade por completo, mas distorce pouco cada uma, como a de Robinson, muito usada em atlas.",
      },
      {
        termo: "Anamorfose",
        faz: "Mapa que muda o tamanho dos países de acordo com um dado, como população ou riqueza. Num mapa de população, por exemplo, a Índia e a China aparecem enormes.",
      },
      {
        termo: "Curvas de nível",
        faz: "Linhas que ligam pontos de mesma altitude. A diferença de altura entre uma curva e a seguinte é sempre a mesma no mapa. As curvas nunca se cruzam.",
      },
      {
        termo: "Leitura das curvas",
        faz: "Curvas bem juntas indicam terreno íngreme, de subida forte. Curvas afastadas indicam terreno suave, quase plano. Curvas fechadas com altitude crescendo para o centro indicam um morro.",
      },
    ],
  },
  questoes: [
    {
      topico: "Cartografia",
      subassunto: "Fusos horários",
      dificuldade: 4,
      raciocinio: "360° / 24 h = 15° por hora → 24 fusos de 15°. Referência: Greenwich (UTC 0). Rotação de oeste para leste → leste adiantado, oeste atrasado.",
      enunciado: "Os fusos horários existem por causa do movimento de rotação da Terra. Sobre eles, assinale a alternativa correta.",
      alternativas: [
        "Cada fuso tem 30° de longitude, e por isso o mundo foi dividido em 12 fusos de duas horas cada um.",
        "Os lugares a oeste de Greenwich têm a hora adiantada, pois o Sol nasce primeiro do lado oeste.",
        "A referência dos fusos é a linha do Equador, e a hora muda conforme o lugar fica mais ao norte ou ao sul.",
        "A hora é a mesma em todos os lugares do mundo, e os fusos servem só para marcar as estações do ano.",
        "São 24 fusos de 15° de longitude, a partir de Greenwich; os lugares a leste têm a hora adiantada.",
      ],
      correta: 4,
      explicacao:
        "A Terra gira 360° em 24 horas, ou 15° por hora. Por isso, há 24 fusos de 15° de longitude, contados a partir do meridiano de Greenwich. Como a Terra gira de oeste para leste, o Sol nasce primeiro nos lugares a leste, que têm a hora adiantada.",
      explicacaoErradas:
        "Cada fuso tem 15°, e não 30°. Os lugares a oeste têm a hora atrasada. A referência é Greenwich, e a hora muda com a longitude (leste e oeste), e não com a latitude. A hora muda de fuso para fuso, e as estações dependem de outro movimento, a translação.",
      pegadinha: "Achar que a hora muda indo para o norte ou para o sul: ela muda com a longitude, para leste ou oeste.",
      conhecimento: "Rotação: giro da Terra em torno de si mesma, que dura cerca de 24 horas e forma os dias e as noites.",
    },
    {
      topico: "Cartografia",
      subassunto: "Cálculo de horas",
      dificuldade: 5,
      raciocinio: "Brasília UTC-3, Tóquio UTC+9: diferença 9 − (−3) = 12 h. Tóquio a leste → soma: 15h + 12h = 27h → 3h do dia seguinte.",
      enunciado: "Em Brasília (UTC-3), são 15h de uma segunda-feira. Assinale a alternativa que indica corretamente a hora em Tóquio (UTC+9).",
      alternativas: [
        "São 3h da terça-feira em Tóquio, pois a diferença é de 12 horas e Tóquio fica a leste de Brasília.",
        "São 3h da segunda-feira em Tóquio, pois Tóquio fica a oeste de Brasília e está 12 horas atrasada.",
        "São 21h da segunda-feira em Tóquio, pois a diferença entre os dois fusos horários é de apenas 6 horas.",
        "São 15h da segunda-feira em Tóquio, pois as duas cidades seguem o mesmo horário oficial mundial.",
        "São 12h da segunda-feira em Tóquio, pois basta subtrair as 3 horas de Brasília da hora em Tóquio.",
      ],
      correta: 0,
      explicacao:
        "A diferença entre UTC+9 e UTC-3 é de 12 horas: 9 − (−3) = 12. Como Tóquio fica a leste, soma-se: 15h + 12h = 27h, ou seja, 3h do dia seguinte. Em Tóquio, já são 3h da terça-feira.",
      explicacaoErradas:
        "Tóquio fica a leste e está adiantada, e não atrasada. A diferença é de 12 horas, e não de 6, pois um fuso é negativo e o outro é positivo. Cada cidade tem a sua hora. Não basta subtrair: é preciso achar a diferença entre os dois fusos.",
      pegadinha: "Subtrair os números dos fusos sem cuidar do sinal: de −3 para +9 são 12 horas, e não 6.",
      conhecimento: "UTC: hora de referência do mundo, a do meridiano de Greenwich; os fusos são contados a partir dela.",
    },
    {
      topico: "Cartografia",
      subassunto: "Fusos do Brasil",
      dificuldade: 4,
      raciocinio: "4 fusos práticos: UTC-2 (Noronha, ilhas oceânicas), UTC-3 (Brasília: S, SE, NE, GO, DF, TO, PA, AP), UTC-4 (MS, MT, RO, RR, maior parte do AM), UTC-5 (AC, sudoeste do AM). Horário de verão não adotado desde 2019.",
      enunciado: "O Brasil é largo de leste a oeste e, por isso, tem mais de um fuso horário. Assinale a alternativa correta sobre os fusos do país.",
      alternativas: [
        "O Brasil tem um só fuso, o de Brasília, que vale em todo o território, inclusive nas ilhas oceânicas.",
        "O Acre está duas horas à frente de Brasília, pois fica mais a leste que a capital do país, no Centro-Oeste.",
        "O país tem 4 fusos horários: Fernando de Noronha fica em UTC-2, Brasília em UTC-3 e o Acre em UTC-5.",
        "O horário de verão é adotado todos os anos em todo o país, e por isso Brasília fica em UTC-2 o ano todo.",
        "Todo o Amazonas fica em UTC-5, e Mato Grosso do Sul fica em UTC-2, junto com as ilhas do Atlântico.",
      ],
      correta: 2,
      explicacao:
        "O Brasil tem 4 fusos: UTC-2 (Fernando de Noronha e outras ilhas do Atlântico), UTC-3 (hora de Brasília, a maior parte do país), UTC-4 (MS, MT, RO, RR e a maior parte do Amazonas) e UTC-5 (Acre e sudoeste do Amazonas).",
      explicacaoErradas:
        "São 4 fusos, e não 1. O Acre fica a oeste e está duas horas atrás de Brasília. O horário de verão não é adotado desde 2019. A maior parte do Amazonas fica em UTC-4, e Mato Grosso do Sul também fica em UTC-4.",
      pegadinha: "Achar que todo o Amazonas segue o fuso do Acre: só o sudoeste do estado fica em UTC-5.",
      conhecimento: "Hora de Brasília: horário oficial do país (UTC-3), que vale para a maior parte do território.",
    },
    {
      topico: "Cartografia",
      subassunto: "Fusos e viagens",
      dificuldade: 5,
      raciocinio: "Sai de Brasília (UTC-3) às 22h, voo de 3h → 1h em Brasília. Rio Branco (UTC-5) = 2h a menos → 23h do mesmo dia, hora local. Pegadinha: responder 1h (hora de Brasília).",
      enunciado: "Um avião sai de Brasília (UTC-3) às 22h e voa 3 horas até Rio Branco, no Acre (UTC-5). Assinale a hora local da chegada.",
      alternativas: [
        "Chega à 1h do dia seguinte, hora local, pois basta somar as 3 horas de voo à hora em que saiu.",
        "Chega às 3h do dia seguinte, hora local, pois o Acre está 2 horas à frente de Brasília no relógio.",
        "Chega às 20h do mesmo dia, hora local, pois o tempo de voo não entra no cálculo da hora de chegada.",
        "Chega às 23h do mesmo dia, hora local: soma-se o voo (1h em Brasília) e tiram-se 2 horas do fuso.",
        "Chega à meia-noite em ponto, hora local, pois a diferença entre os fusos é de 1 hora para o oeste.",
      ],
      correta: 3,
      explicacao:
        "Somando 3 horas de voo, o avião chega à 1h, pela hora de Brasília. Rio Branco fica em UTC-5, 2 horas atrás de Brasília. Então, na hora local, são 23h do mesmo dia em que o avião saiu.",
      explicacaoErradas:
        "1h é a hora de Brasília, e não a de Rio Branco. O Acre fica a oeste e está 2 horas atrás. O tempo de voo entra no cálculo. A diferença entre UTC-3 e UTC-5 é de 2 horas, e não de 1.",
      pegadinha: "Dar a resposta na hora de saída: a pergunta pede a hora do lugar de chegada.",
      conhecimento: "Hora local: a hora do relógio do lugar onde a pessoa está.",
    },
    {
      topico: "Cartografia",
      subassunto: "Linha Internacional de Data",
      dificuldade: 4,
      raciocinio: "LID perto do 180°, com desvios. Cruzar para oeste (América → Ásia) = avança um dia; para leste (Ásia → América) = volta um dia. Não é o Equador nem Greenwich.",
      enunciado: "A Linha Internacional de Data marca onde começa um novo dia no calendário. Assinale a alternativa correta sobre ela.",
      alternativas: [
        "Fica sobre o meridiano de Greenwich, e quem a cruza muda só a hora, sem mudar o dia do calendário.",
        "Fica perto do meridiano de 180°; quem a cruza da América para a Ásia avança um dia no calendário.",
        "É a linha do Equador, e quem passa do hemisfério norte para o sul muda de dia no calendário oficial.",
        "É uma reta perfeita sobre o meridiano de 180°, que divide ao meio vários países do oceano Pacífico.",
        "Quem a cruza indo da Ásia para a América avança dois dias, por causa da diferença das estações.",
      ],
      correta: 1,
      explicacao:
        "A Linha Internacional de Data fica perto do meridiano de 180°, no oceano Pacífico. Quem a cruza indo para o oeste, da América para a Ásia, avança um dia no calendário. Quem a cruza indo para o leste volta um dia.",
      explicacaoErradas:
        "Ela fica perto do 180°, e não sobre Greenwich, e muda o dia. O Equador não muda o dia. A linha faz desvios justamente para não dividir países e ilhas. Da Ásia para a América, volta-se um dia, e as estações não têm relação com isso.",
      pegadinha: "Inverter o sentido: indo para o oeste (rumo à Ásia), o calendário avança um dia.",
      conhecimento: "Antimeridiano: o meridiano de 180°, do lado oposto ao de Greenwich.",
    },
    {
      topico: "Cartografia",
      subassunto: "Projeção conforme",
      dificuldade: 5,
      raciocinio: "Mercator: cilíndrica e conforme (mantém ângulos e formas); distorce áreas, cada vez mais rumo aos polos; Groenlândia parece do tamanho da África (~14× menor); útil na navegação (rumos em linha reta). Visão eurocêntrica (Europa no centro e no alto).",
      enunciado: "A projeção de Mercator é uma das mais conhecidas do mundo. Sobre ela, assinale a alternativa correta.",
      alternativas: [
        "Mantém as áreas certas, e por isso a Groenlândia aparece bem menor que a África, no tamanho exato.",
        "É uma projeção plana, centrada no Polo Sul, e foi feita para mostrar só a Antártida e os mares do sul.",
        "Distorce as formas dos continentes, mas mantém as áreas, e por isso é chamada de projeção equivalente.",
        "É conforme: mantém as formas e ângulos, mas aumenta as áreas perto dos polos, como a da Groenlândia.",
        "Não tem distorção nenhuma, pois é a única projeção que mostra a Terra exatamente como ela é no espaço.",
      ],
      correta: 3,
      explicacao:
        "A projeção de Mercator é cilíndrica e conforme: mantém os ângulos e as formas, o que a torna útil na navegação. Em troca, aumenta as áreas perto dos polos. Nela, a Groenlândia parece do tamanho da África, que na verdade é cerca de 14 vezes maior.",
      explicacaoErradas:
        "Ela não mantém as áreas. É cilíndrica, e não plana, e mostra o mundo todo. Quem mantém as áreas e distorce as formas é a projeção equivalente, como a de Peters. Toda projeção tem alguma distorção.",
      pegadinha: "Trocar Mercator (conforme, formas certas) com Peters (equivalente, áreas certas).",
      conhecimento: "Projeção conforme: a que mantém os ângulos e as formas dos lugares, mas não as áreas.",
    },
    {
      topico: "Cartografia",
      subassunto: "Projeção equivalente",
      dificuldade: 4,
      raciocinio: "Peters: equivalente (áreas proporcionais), formas distorcidas (países perto do Equador alongados). Valoriza países do Sul; crítica à visão eurocêntrica de Mercator.",
      enunciado: "A projeção de Peters ficou famosa por mostrar o mundo de outro jeito. Assinale a alternativa correta sobre ela.",
      alternativas: [
        "Mantém as formas perfeitas dos continentes, mas aumenta muito o tamanho da Europa e dos EUA.",
        "É a projeção usada na navegação, pois mantém os ângulos e permite traçar rumos em linha reta.",
        "Não mostra a América do Sul nem a África, pois é uma projeção cônica feita para as latitudes médias.",
        "Muda o tamanho dos países conforme a população, e por isso a Índia aparece como o maior país do mapa.",
        "É equivalente: mantém as áreas em proporção, mas distorce as formas, e valoriza os países do Sul.",
      ],
      correta: 4,
      explicacao:
        "A projeção de Peters é equivalente: mantém as áreas na proporção certa, mas distorce as formas, deixando os países perto do Equador alongados. Ela mostra o tamanho real da África e da América do Sul e foi vista como crítica à visão que deixava a Europa em destaque.",
      explicacaoErradas:
        "Peters distorce as formas e não aumenta a Europa. A projeção usada na navegação é a de Mercator, que é conforme. Peters mostra o mundo todo. Mapa que muda o tamanho conforme um dado é a anamorfose.",
      pegadinha: "Confundir Peters com anamorfose: Peters mostra as áreas reais; a anamorfose muda as áreas conforme um dado.",
      conhecimento: "Projeção equivalente: a que mantém as áreas na proporção certa, mas não as formas.",
    },
    {
      topico: "Cartografia",
      subassunto: "Tipos de projeção",
      dificuldade: 5,
      raciocinio: "Cilíndrica: mundo inteiro, distorção cresce rumo aos polos. Cônica: latitudes médias (países como EUA, Europa). Plana/azimutal: um ponto central (polos); símbolo da ONU = azimutal centrada no Polo Norte.",
      enunciado: "As projeções também se dividem pela superfície usada para projetar a Terra. Assinale a alternativa correta sobre esses tipos.",
      alternativas: [
        "A projeção cônica é a melhor para mostrar os polos, pois a ponta do cone fica sobre a linha do Equador.",
        "A cilíndrica mostra o mundo todo com mais distorção nos polos; a plana é boa para as áreas polares.",
        "A projeção plana não tem distorção em nenhum ponto, e por isso é usada em todos os mapas-múndi.",
        "A projeção cilíndrica só mostra um hemisfério por vez e não pode ser usada para fazer um mapa-múndi.",
        "O símbolo da ONU usa uma projeção cilíndrica, com a Europa no centro e as Américas nas pontas do mapa.",
      ],
      correta: 1,
      explicacao:
        "Na projeção cilíndrica, a Terra aparece inteira, mas a distorção cresce perto dos polos. A cônica é boa para latitudes médias. A plana, ou azimutal, parte de um ponto central e é boa para os polos: o símbolo da ONU usa uma projeção plana centrada no Polo Norte.",
      explicacaoErradas:
        "A cônica é boa para latitudes médias, e não para os polos. A plana tem distorção, que cresce longe do ponto central. A cilíndrica mostra o mundo todo e é muito usada em mapas-múndi. O símbolo da ONU usa projeção plana, centrada no Polo Norte.",
      pegadinha: "Achar que existe projeção sem distorção: toda projeção deforma alguma coisa.",
      conhecimento: "Projeção azimutal: outro nome da projeção plana, feita a partir de um ponto central.",
    },
    {
      topico: "Cartografia",
      subassunto: "Curvas de nível",
      dificuldade: 4,
      raciocinio: "Curvas de nível: pontos de mesma altitude; equidistância constante; nunca se cruzam. Próximas = íngreme; afastadas = suave. Fechadas com altitude crescente para o centro = morro.",
      enunciado: "Num mapa topográfico, o relevo de uma área foi mostrado com curvas de nível. Assinale a alternativa correta sobre a leitura desse mapa.",
      alternativas: [
        "Cada curva liga pontos de mesma altitude, e curvas bem juntas mostram uma encosta de subida forte.",
        "Curvas bem afastadas umas das outras mostram um terreno muito íngreme, como um paredão de rocha.",
        "As curvas de nível ligam pontos com a mesma temperatura e mostram as áreas mais quentes do terreno.",
        "Duas curvas de nível se cruzam sempre que o terreno muda de altitude, formando um ponto de encontro.",
        "Num mapa, a diferença de altura entre uma curva e a seguinte muda a cada linha, sem nenhum padrão.",
      ],
      correta: 0,
      explicacao:
        "Cada curva de nível liga pontos de mesma altitude. Quando as curvas estão bem juntas, a altitude muda muito numa distância curta: é uma encosta íngreme. Quando estão afastadas, o terreno é suave, quase plano.",
      explicacaoErradas:
        "Curvas afastadas mostram terreno suave, e não íngreme. As curvas ligam pontos de mesma altitude, e não de mesma temperatura. As curvas nunca se cruzam. A diferença de altura entre uma curva e a seguinte é sempre a mesma no mapa.",
      pegadinha: "Inverter a leitura: curvas juntas = terreno íngreme; curvas afastadas = terreno suave.",
      conhecimento: "Mapa topográfico: mapa que mostra o relevo do terreno, com as altitudes de cada ponto.",
    },
    {
      topico: "Cartografia",
      subassunto: "Anamorfose e projeção afilática",
      dificuldade: 5,
      raciocinio: "Anamorfose: áreas deformadas segundo um dado (população, PIB) → Índia e China enormes num mapa de população. Afilática (Robinson): não preserva nenhuma propriedade por completo, mas distorce pouco cada uma; usada em atlas. Equidistante: distâncias a partir de um ponto.",
      enunciado: "Nem todo mapa busca manter áreas ou formas exatas. Sobre a anamorfose e a projeção afilática, assinale a alternativa correta.",
      alternativas: [
        "A anamorfose mantém as áreas e as formas reais, e a afilática mantém os ângulos e as distâncias exatas.",
        "A anamorfose é uma projeção conforme, usada pelos navios, e a afilática é usada só nos mapas dos polos.",
        "A anamorfose muda o tamanho dos países conforme um dado; a afilática distorce um pouco de cada coisa.",
        "A anamorfose só pode mostrar o relevo, e a afilática só pode mostrar a hora de cada país do mundo.",
        "Num mapa de anamorfose da população, o Canadá e a Rússia aparecem como os maiores países do mundo.",
      ],
      correta: 2,
      explicacao:
        "A anamorfose muda o tamanho dos países de acordo com um dado, como população ou riqueza: num mapa de população, Índia e China aparecem enormes. A projeção afilática, como a de Robinson, não mantém nenhuma propriedade por completo, mas distorce pouco cada uma, e por isso é muito usada em atlas.",
      explicacaoErradas:
        "A anamorfose deforma as áreas de propósito, e a afilática não mantém nada por completo. A anamorfose não é projeção de navegação, e a afilática mostra o mundo todo. A anamorfose pode mostrar vários dados, como população e riqueza. Num mapa de população, Canadá e Rússia ficam pequenos, pois têm pouca gente para o tamanho.",
      pegadinha: "Achar que anamorfose mostra o tamanho real: ela muda o tamanho de propósito, para mostrar um dado.",
      conhecimento: "Projeção afilática: a que não mantém áreas, formas nem distâncias por completo, mas equilibra as distorções.",
    },
  ],
};
