import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geo-a17",
  resumo: {
    ideia:
      "Esta aula começa a geografia do Paraná: onde o estado fica, com quem faz divisa, como se divide por dentro, como é o clima e quais são as formações vegetais. A ideia central é que latitude e altitude explicam quase tudo: o frio dos planaltos, as geadas e o lugar de cada floresta.",
    itens: [
      {
        termo: "Localização",
        faz: "O Paraná fica na Região Sul, entre cerca de 22°30' e 26°43' de latitude sul, todo a oeste de Greenwich. O Trópico de Capricórnio corta o norte do estado, perto de Maringá; a maior parte do território fica ao sul do trópico.",
        pista: "Tem cerca de 199 mil km² e cerca de 11,4 milhões de habitantes (Censo 2022).",
      },
      {
        termo: "Divisas e fronteiras",
        faz: "Faz divisa com São Paulo (norte e leste), Santa Catarina (sul) e Mato Grosso do Sul (noroeste, pelo rio Paraná). Faz fronteira com o Paraguai (oeste, pelo rio Paraná) e com a Argentina (sudoeste, pelos rios Iguaçu e Santo Antônio). A leste, tem litoral no Atlântico.",
        pista: "O Paraná não faz divisa com o Rio Grande do Sul: Santa Catarina fica no meio.",
      },
      {
        termo: "Tríplice fronteira",
        faz: "Em Foz do Iguaçu se encontram Brasil, Paraguai e Argentina, no encontro dos rios Iguaçu e Paraná. A Ponte da Amizade liga Foz do Iguaçu a Ciudad del Este, no Paraguai. A região tem muito comércio e turismo, e também contrabando e descaminho.",
      },
      {
        termo: "Divisão interna",
        faz: "O estado tem 399 municípios, com capital em Curitiba. A Região Metropolitana de Curitiba reúne 29 municípios, como São José dos Pinhais, Colombo, Araucária e Pinhais. Londrina e Maringá são polos de outras regiões metropolitanas.",
      },
      {
        termo: "Regiões do IBGE",
        faz: "O IBGE dividia o estado em 10 mesorregiões e 39 microrregiões, só para estatística e planejamento. Em 2017, trocou esse modelo pelas regiões geográficas intermediárias e imediatas, montadas a partir das cidades que polarizam as outras.",
      },
      {
        termo: "Formação do território",
        faz: "Paranaguá, no litoral, virou vila em 1648, ligada ao ouro. Em 1853, a Lei nº 704, de 29 de agosto, separou da Província de São Paulo a sua 5ª Comarca, criando a Província do Paraná, com capital em Curitiba. A instalação ocorreu em 19 de dezembro, data da emancipação.",
      },
      {
        termo: "Símbolos naturais",
        faz: "A árvore-símbolo é o pinheiro-do-paraná (araucária) e a ave-símbolo é a gralha-azul, ligada pela tradição ao plantio do pinhão, pois enterra sementes que depois germinam.",
      },
      {
        termo: "Clima: Cfa e Cfb",
        faz: "Predomina o clima subtropical úmido, com chuva o ano todo (o \"f\" da sigla). Cfa (verões quentes) fica nas áreas mais baixas do norte, do oeste e do sudoeste. Cfb (verões amenos) fica nas áreas mais altas, como Curitiba, Ponta Grossa, Guarapuava e o sul do estado.",
        pista: "O norte e o noroeste fazem a transição para o clima tropical, com inverno mais seco.",
      },
      {
        termo: "O que mexe no clima",
        faz: "Latitude (perto do trópico), altitude (Curitiba, a cerca de 900 m, é uma das capitais mais frias do país) e massas de ar. No inverno, a Massa Polar Atlântica traz frentes frias e geadas. A Serra do Mar segura a umidade do mar e faz o litoral ser muito chuvoso.",
        pista: "A grande geada de julho de 1975 arrasou os cafezais do norte do Paraná.",
      },
      {
        termo: "Floresta Ombrófila Densa",
        faz: "É a Mata Atlântica da Serra do Mar e da planície litorânea. \"Ombrófila\" quer dizer amiga da chuva: é sempre verde, muito úmida, com árvores altas, várias camadas e muitas bromélias e orquídeas. O litoral norte guarda um dos maiores trechos contínuos de Mata Atlântica do país.",
      },
      {
        termo: "Floresta Ombrófila Mista (Mata de Araucária)",
        faz: "Ocupa os planaltos frios do centro-sul. Mistura a araucária com outras árvores, como a imbuia, e a erva-mate no meio da mata. Foi muito derrubada no ciclo da madeira, e hoje restam poucos trechos; a araucária está na lista de espécies ameaçadas.",
      },
      {
        termo: "Floresta Estacional Semidecidual",
        faz: "Fica no norte e no oeste, mais quentes e com inverno mais seco. Parte das árvores perde as folhas na estação seca e fria. Como estava sobre a terra roxa, foi a mais devastada pelo café e depois pela soja. O Parque Nacional do Iguaçu guarda um grande trecho dela.",
      },
      {
        termo: "Campos Gerais e cerrado",
        faz: "Os Campos Gerais, no Segundo Planalto (Ponta Grossa, Castro, Tibagi), têm vegetação baixa de gramíneas, com capões de mata e matas na beira dos rios. Há também campos em Guarapuava e Palmas. Pequenas manchas de cerrado aparecem, como em Jaguariaíva.",
        pista: "Vila Velha, com arenitos esculpidos pela erosão, fica nos Campos Gerais.",
      },
      {
        termo: "Restinga e mangue",
        faz: "No litoral, a restinga cresce sobre solo de areia trazida pelo mar. O mangue fica onde o rio encontra o mar, em solo de lama, salobro e pobre em oxigênio, como nas baías de Paranaguá e Guaratuba; é berçário de peixes, caranguejos e camarões. Os dois fazem parte da Mata Atlântica.",
      },
    ],
  },
  questoes: [
    {
      topico: "Geografia do Paraná",
      subassunto: "Divisas e fronteiras",
      dificuldade: 4,
      raciocinio: "Divisas: SP (N e L), SC (S), MS (NO, rio Paraná). Fronteiras: Paraguai (O, rio Paraná) e Argentina (SO, rios Iguaçu e Santo Antônio). Não toca o RS. Tem litoral.",
      enunciado: "O Paraná tem limites com estados brasileiros e com outros países. Assinale a alternativa correta sobre esses limites.",
      alternativas: [
        "Faz divisa com São Paulo, Santa Catarina e Mato Grosso do Sul, e fronteira com o Paraguai e a Argentina.",
        "Faz divisa com o Rio Grande do Sul ao sul, e com Santa Catarina a oeste, separada dele pelo rio Paraná.",
        "Faz fronteira com a Argentina pelo rio Paraná, e com o Paraguai pelo rio Iguaçu, no extremo sudoeste.",
        "Não tem saída para o mar, pois o litoral da Região Sul fica todo em Santa Catarina e no Rio Grande do Sul.",
        "Faz fronteira com o Paraguai, a Argentina e o Uruguai, e por isso tem duas tríplices fronteiras no oeste.",
      ],
      correta: 0,
      explicacao:
        "O Paraná faz divisa com São Paulo (norte e leste), Santa Catarina (sul) e Mato Grosso do Sul (noroeste). Faz fronteira com o Paraguai, pelo rio Paraná, e com a Argentina, pelos rios Iguaçu e Santo Antônio.",
      explicacaoErradas:
        "O Paraná não faz divisa com o Rio Grande do Sul: Santa Catarina fica no meio, ao sul. As fronteiras estão trocadas: o rio Paraná separa o estado do Paraguai, e o Iguaçu, da Argentina. O Paraná tem litoral no Atlântico. O estado não faz fronteira com o Uruguai.",
      pegadinha: "Achar que o Paraná faz divisa com o Rio Grande do Sul só por estarem na mesma região.",
      conhecimento: "Divisa: limite entre estados do mesmo país. Fronteira: limite entre países.",
    },
    {
      topico: "Geografia do Paraná",
      subassunto: "Localização e latitude",
      dificuldade: 5,
      raciocinio: "Latitude ~22°30'–26°43' S; Trópico de Capricórnio (~23°26') corta o norte, perto de Maringá. Maior parte ao sul do trópico → zona temperada do sul → clima subtropical. Longitude oeste (48°–54°37').",
      enunciado: "A posição do Paraná no globo ajuda a explicar o clima do estado. Assinale a alternativa correta sobre essa posição.",
      alternativas: [
        "A linha do Equador corta o norte do estado, e por isso o norte do Paraná tem clima equatorial e muito úmido.",
        "Todo o estado fica ao norte do Trópico de Capricórnio, na zona tropical, e por isso não registra geadas.",
        "O estado fica a leste do meridiano de Greenwich, e por isso as suas longitudes são medidas em graus leste.",
        "O Trópico de Capricórnio corta o norte do estado; a maior parte fica ao sul dele, na zona temperada do sul.",
        "O Trópico de Capricórnio passa pelo litoral sul, perto de Guaratuba, deixando o estado todo na zona tropical.",
      ],
      correta: 3,
      explicacao:
        "O Paraná fica entre cerca de 22°30' e 26°43' de latitude sul. O Trópico de Capricórnio corta o norte do estado, perto de Maringá. A maior parte do território fica ao sul dele, na zona temperada do sul, o que ajuda a explicar o clima subtropical e as geadas.",
      explicacaoErradas:
        "O Equador passa bem longe, no norte do Brasil. Só uma pequena faixa do norte fica ao norte do trópico, e o estado tem geadas. O Paraná fica a oeste de Greenwich, com longitudes oeste. O trópico corta o norte do estado, e não o litoral sul.",
      pegadinha: "Achar que o Paraná é todo tropical: a maior parte do estado fica ao sul do Trópico de Capricórnio.",
      conhecimento: "Zona temperada do sul: faixa entre o Trópico de Capricórnio e o Círculo Polar Antártico.",
    },
    {
      topico: "Geografia do Paraná",
      subassunto: "Divisão administrativa",
      dificuldade: 4,
      raciocinio: "399 municípios, capital Curitiba; RMC com 29 municípios (São José dos Pinhais, Colombo, Araucária, Pinhais); Londrina fora da RMC. IBGE: 10 meso + 39 micro → em 2017, regiões intermediárias e imediatas; só estatística, sem governo próprio.",
      enunciado: "O Paraná se organiza em municípios e em regiões usadas para planejamento. Assinale a alternativa correta sobre essa organização.",
      alternativas: [
        "O estado tem 299 municípios, e Londrina faz parte da Região Metropolitana de Curitiba, com Colombo e Pinhais.",
        "O estado tem 399 municípios; em 2017, o IBGE trocou as mesorregiões pelas novas regiões intermediárias e imediatas.",
        "As mesorregiões do IBGE têm prefeito e câmara próprios, e por isso funcionam como um governo entre o estado e as cidades.",
        "O IBGE criou as mesorregiões em 2017, no lugar das regiões imediatas, que eram usadas desde o tempo do Império.",
        "Curitiba deixou de ser a capital em 2017, quando o IBGE passou a usar as regiões intermediárias no planejamento.",
      ],
      correta: 1,
      explicacao:
        "O Paraná tem 399 municípios, com capital em Curitiba. O IBGE dividia o estado em 10 mesorregiões e 39 microrregiões e, em 2017, trocou esse modelo pelas regiões geográficas intermediárias e imediatas. Essas regiões servem só para estatística e planejamento.",
      explicacaoErradas:
        "São 399 municípios, e Londrina não faz parte da Região Metropolitana de Curitiba. As regiões do IBGE não têm governo, prefeito nem câmara. Em 2017, as mesorregiões foram trocadas pelas regiões intermediárias, e não o contrário. Curitiba continua sendo a capital.",
      pegadinha: "Achar que as regiões do IBGE são unidades de governo: elas servem só para estatística e planejamento.",
      conhecimento: "Região metropolitana: cidade grande e as cidades em volta dela, ligadas por trabalho, comércio e serviços.",
    },
    {
      topico: "Geografia do Paraná",
      subassunto: "Clima",
      dificuldade: 5,
      raciocinio: "Subtropical úmido, chuva o ano todo (f). Cfa (verão quente): áreas mais baixas do N, O, SO. Cfb (verão ameno): áreas altas — Curitiba, Ponta Grossa, Guarapuava, sul (Palmas, General Carneiro). Norte/noroeste: transição para o tropical.",
      enunciado: "No Paraná, o clima subtropical úmido aparece em dois tipos, Cfa e Cfb. Assinale a alternativa correta sobre a distribuição deles.",
      alternativas: [
        "O tipo Cfa, de verões quentes, ocupa Curitiba e os Campos Gerais, as áreas mais altas e mais frias do estado.",
        "Os dois tipos têm uma estação seca longa no inverno, quando quase não chove em nenhuma parte do Paraná.",
        "O tipo Cfb, de verões amenos, ocupa só o litoral, pois a brisa do mar deixa a planície costeira mais fresca.",
        "A diferença entre os dois tipos está na chuva: o Cfa é seco no verão e o Cfb é seco no inverno, nos planaltos.",
        "O Cfb, de verões amenos, ocupa as áreas mais altas, como Curitiba; o Cfa, de verões quentes, as mais baixas.",
      ],
      correta: 4,
      explicacao:
        "O \"f\" da sigla indica chuva o ano todo, sem estação seca definida. O Cfb, de verões amenos, ocupa as áreas mais altas, como Curitiba, Ponta Grossa, Guarapuava e o sul do estado. O Cfa, de verões quentes, ocupa as áreas mais baixas do norte, do oeste e do sudoeste.",
      explicacaoErradas:
        "Curitiba e os Campos Gerais, mais altos, têm verões amenos: são Cfb. O clima subtropical úmido tem chuva o ano todo. O litoral é baixo e quente, e não Cfb. A diferença entre os dois tipos está no calor do verão, e não na chuva.",
      pegadinha: "Trocar as letras: \"a\" é verão quente (áreas baixas) e \"b\" é verão ameno (áreas altas, como Curitiba).",
      conhecimento: "Clima subtropical: clima de transição entre o tropical e o temperado, com estações bem marcadas.",
    },
    {
      topico: "Geografia do Paraná",
      subassunto: "Fatores do clima",
      dificuldade: 4,
      raciocinio: "Inverno: Massa Polar Atlântica → frentes frias, geadas (mais nas áreas altas). Geada de 1975 arrasou o café do norte. Serra do Mar barra a umidade do mar → chuva de relevo no litoral. Altitude: Curitiba (~900 m) entre as capitais mais frias.",
      enunciado: "Vários fatores agem sobre o clima do Paraná. Assinale a alternativa correta sobre esses fatores.",
      alternativas: [
        "As geadas acontecem só no verão, quando a Massa Equatorial Continental traz o ar frio vindo da Amazônia.",
        "A Serra do Mar deixa o litoral seco, pois barra a umidade do oceano antes que ela chegue às praias do estado.",
        "No inverno, a Massa Polar Atlântica traz frentes frias e geadas, que são mais comuns nas áreas mais altas.",
        "A altitude não interfere no clima, e por isso Curitiba é tão quente quanto as cidades do litoral do estado.",
        "A geada de 1975 não afetou o café, pois os cafezais do Paraná ficavam todos no litoral, longe do frio do sul.",
      ],
      correta: 2,
      explicacao:
        "No inverno, a Massa Polar Atlântica avança sobre o Sul e traz frentes frias e geadas, mais comuns nas áreas altas. A grande geada de julho de 1975 arrasou os cafezais do norte do Paraná. A Serra do Mar segura a umidade do mar e faz o litoral ser muito chuvoso.",
      explicacaoErradas:
        "As geadas acontecem no inverno, com o ar polar, e não com uma massa da Amazônia. A Serra do Mar deixa o litoral muito chuvoso, e não seco. A altitude esfria o clima, e Curitiba é uma das capitais mais frias do país. A geada de 1975 arrasou os cafezais do norte do estado.",
      pegadinha: "Achar que a Serra do Mar seca o litoral: o ar úmido sobe a serra, esfria e vira chuva do lado do mar.",
      conhecimento: "Frente fria: encontro de uma massa de ar frio com uma de ar quente, que traz chuva e queda da temperatura.",
    },
    {
      topico: "Geografia do Paraná",
      subassunto: "Mata de Araucária",
      dificuldade: 5,
      raciocinio: "Floresta Ombrófila Mista = Mata de Araucária (não Densa); planaltos frios do centro-sul; araucária + imbuia + erva-mate; muito explorada no ciclo da madeira; poucos remanescentes; araucária ameaçada. Densa = Serra do Mar e litoral.",
      enunciado: "A Mata de Araucária é a formação vegetal mais ligada à imagem do Paraná. Assinale a alternativa correta sobre ela.",
      alternativas: [
        "É chamada de Floresta Ombrófila Densa, cresce na planície litorânea e é a mais preservada do estado.",
        "Perde todas as folhas no inverno e cresce nas áreas mais quentes e baixas do noroeste, perto do rio Paraná.",
        "É a Floresta Ombrófila Mista, dos planaltos frios do centro-sul; foi muito derrubada no ciclo da madeira.",
        "Tem só araucárias, sem nenhuma outra árvore, e por isso nunca teve importância para a economia do estado.",
        "Foi pouco explorada, pois a madeira da araucária é fraca, e hoje cobre quase todo o território do estado.",
      ],
      correta: 2,
      explicacao:
        "A Mata de Araucária é a Floresta Ombrófila Mista, dos planaltos frios do centro-sul. Mistura a araucária com outras árvores, como a imbuia, e a erva-mate no meio da mata. Foi muito derrubada no ciclo da madeira, restam poucos trechos e a araucária está na lista de espécies ameaçadas.",
      explicacaoErradas:
        "A Ombrófila Densa é a mata da Serra do Mar e do litoral. A araucária é sempre verde e cresce nos planaltos frios, e não no noroeste quente. A mata mistura várias espécies e foi base do ciclo da madeira e da erva-mate. Foi muito explorada e hoje restam poucos trechos.",
      pegadinha: "Trocar \"Mista\" (araucária, planaltos) com \"Densa\" (Serra do Mar e litoral).",
      conhecimento: "Remanescente: trecho de mata original que sobrou depois do desmatamento.",
    },
    {
      topico: "Geografia do Paraná",
      subassunto: "Floresta Ombrófila Densa",
      dificuldade: 4,
      raciocinio: "Ombrófila Densa = Mata Atlântica da Serra do Mar e planície litorânea; sempre verde, muito úmida, vários estratos, epífitas (bromélias, orquídeas); litoral norte (Guaraqueçaba) com grande trecho contínuo.",
      enunciado: "A Floresta Ombrófila Densa cobre parte do leste do Paraná. Assinale a alternativa correta sobre essa formação.",
      alternativas: [
        "Cresce no Segundo Planalto, sobre os campos, e é formada só por gramíneas e pequenos arbustos espalhados.",
        "Perde quase todas as folhas na estação seca, e por isso fica sem cor durante boa parte do inverno.",
        "É uma vegetação de clima seco, com cactos e plantas com espinhos que guardam água nos caules grossos.",
        "Fica no extremo oeste do estado, na beira do rio Paraná, e foi toda coberta pelo lago da usina de Itaipu.",
        "É a Mata Atlântica da Serra do Mar e do litoral: sempre verde, úmida e cheia de bromélias e orquídeas.",
      ],
      correta: 4,
      explicacao:
        "A Floresta Ombrófila Densa é a Mata Atlântica da Serra do Mar e da planície litorânea. \"Ombrófila\" quer dizer amiga da chuva: é sempre verde, muito úmida, com árvores altas, várias camadas e muitas bromélias e orquídeas. O litoral norte guarda um dos maiores trechos contínuos de Mata Atlântica do país.",
      explicacaoErradas:
        "O Segundo Planalto tem os Campos Gerais, de vegetação baixa. A Ombrófila Densa é sempre verde. Cactos e espinhos são da caatinga, de clima seco, e não do Paraná. A Ombrófila Densa fica no leste, na Serra do Mar e no litoral, e não no oeste.",
      pegadinha: "Achar que \"ombrófila\" tem a ver com sombra: quer dizer amiga da chuva.",
      conhecimento: "Epífita: planta que vive apoiada em outra, sem tirar dela o alimento, como bromélias e orquídeas.",
    },
    {
      topico: "Geografia do Paraná",
      subassunto: "Floresta Estacional Semidecidual",
      dificuldade: 5,
      raciocinio: "Norte e oeste, mais quentes, inverno mais seco; parte das árvores perde folhas na estação seca/fria (semidecidual); sobre terra roxa → a mais devastada (café, depois soja); grande trecho no Parque Nacional do Iguaçu.",
      enunciado: "No norte e no oeste do Paraná, a vegetação original era a Floresta Estacional Semidecidual. Assinale a alternativa correta sobre ela.",
      alternativas: [
        "É a floresta mais preservada do estado, pois cresce em solos pobres que nunca interessaram à agricultura.",
        "Parte das árvores perde as folhas na estação seca e fria; sobre a terra roxa, foi a mais derrubada pelo café.",
        "É formada só por araucárias e cresce nos planaltos mais frios do sul, onde as geadas são quase garantidas.",
        "É uma vegetação de mangue, que cresce na lama salobra das baías e protege os filhotes de peixes e caranguejos.",
        "Todas as árvores perdem as folhas ao mesmo tempo no verão, quando chove mais no norte e no oeste do estado.",
      ],
      correta: 1,
      explicacao:
        "Na Floresta Estacional Semidecidual, parte das árvores perde as folhas na estação mais seca e fria. Ela cresce no norte e no oeste, mais quentes. Como estava sobre a terra roxa, foi a mais devastada pelo café e depois pela soja. O Parque Nacional do Iguaçu guarda um grande trecho dela.",
      explicacaoErradas:
        "Ela foi a mais devastada, justamente por estar sobre a terra roxa, muito fértil. A araucária é da Floresta Ombrófila Mista, do centro-sul. O mangue fica no litoral. Só parte das árvores perde as folhas, e isso acontece na estação seca, e não no verão chuvoso.",
      pegadinha: "\"Semidecidual\" quer dizer que só parte das árvores perde as folhas, e não todas.",
      conhecimento: "Terra roxa: solo vermelho e fértil, vindo da rocha basalto, típico do norte e do oeste do Paraná.",
    },
    {
      topico: "Geografia do Paraná",
      subassunto: "Campos Gerais",
      dificuldade: 4,
      raciocinio: "Segundo Planalto (Ponta Grossa, Castro, Tibagi); gramíneas com capões e matas de galeria; Vila Velha (arenitos, erosão); pecuária e tropeirismo. Outros campos: Guarapuava e Palmas. Manchas de cerrado (Jaguariaíva).",
      enunciado: "Os Campos Gerais formam uma paisagem conhecida do Paraná. Assinale a alternativa correta sobre essa paisagem.",
      alternativas: [
        "Ficam na planície litorânea e são cobertos por mangues, por causa da água salgada que entra pelas baías.",
        "São uma floresta fechada de árvores altas, sem nenhuma área aberta, e nunca serviram para criar gado.",
        "Ficam no extremo oeste, na beira do rio Paraná, e foram cobertos pelo lago da usina de Itaipu em 1982.",
        "Ficam no Segundo Planalto, com gramíneas e capões de mata; foram rota de tropas de gado e de pecuária.",
        "São formados só por cactos e arbustos com espinhos, por causa do clima seco do centro do estado do Paraná.",
      ],
      correta: 3,
      explicacao:
        "Os Campos Gerais ficam no Segundo Planalto, na região de Ponta Grossa, Castro e Tibagi. Têm vegetação baixa de gramíneas, com capões de mata e matas na beira dos rios. Foram caminho das tropas de gado e são área de pecuária. Vila Velha, com arenitos esculpidos pela erosão, fica ali.",
      explicacaoErradas:
        "O mangue fica no litoral, e não nos Campos Gerais. Os Campos Gerais são uma paisagem aberta, usada pela pecuária. Eles ficam no centro-leste do estado, e não na beira do rio Paraná. O clima ali é úmido, sem cactos nem vegetação de clima seco.",
      pegadinha: "Achar que campo é sinal de clima seco: os Campos Gerais têm clima úmido e frio.",
      conhecimento: "Capão: pequena mancha de mata no meio do campo.",
    },
    {
      topico: "Geografia do Paraná",
      subassunto: "Restinga e mangue",
      dificuldade: 5,
      raciocinio: "Restinga: solo arenoso de origem marinha, cordões de areia. Mangue: encontro do rio com o mar, solo lodoso, salobro e pobre em oxigênio; raízes aéreas; berçário (peixes, caranguejos, camarões); baías de Paranaguá e Guaratuba. Os dois são ecossistemas da Mata Atlântica.",
      enunciado: "O litoral do Paraná tem restingas e manguezais. Assinale a alternativa correta sobre esses dois ambientes.",
      alternativas: [
        "A restinga cresce em solo de areia trazida pelo mar; o mangue fica em solo de lama salobra, perto das baías.",
        "O mangue cresce em solo de areia seca e dura, longe da água, e não tem nenhuma importância para a pesca.",
        "A restinga e o mangue ficam no Terceiro Planalto, sobre a terra roxa, longe de qualquer influência do oceano.",
        "O mangue é um tipo de campo de altitude, com gramíneas baixas, que cresce nos picos da Serra do Mar.",
        "Os dois ambientes ficam fora da Mata Atlântica, pois pertencem a um bioma próprio, só do litoral do Sul.",
      ],
      correta: 0,
      explicacao:
        "A restinga cresce sobre solo de areia trazida pelo mar. O mangue fica onde o rio encontra o mar, em solo de lama, salobro e pobre em oxigênio, como nas baías de Paranaguá e Guaratuba. O mangue é berçário de peixes, caranguejos e camarões. Os dois fazem parte da Mata Atlântica.",
      explicacaoErradas:
        "O mangue fica na lama, junto da água, e é muito importante para a pesca. Os dois ficam no litoral, e não no Terceiro Planalto. O mangue não é campo de altitude. Restinga e mangue são ambientes ligados à Mata Atlântica.",
      pegadinha: "Trocar os solos: restinga = areia; mangue = lama salobra.",
      conhecimento: "Água salobra: mistura de água doce do rio com água salgada do mar.",
    },
  ],
};
