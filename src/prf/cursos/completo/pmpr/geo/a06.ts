import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geo-a06",
  resumo: {
    ideia:
      "A indústria mudou o mundo em quatro grandes saltos, as Revoluções Industriais. No Brasil, ela chegou tarde: foi proibida na colônia, nasceu aos poucos no século XIX, ganhou força com o Estado na Era Vargas e com as multinacionais a partir de JK, e depois se espalhou para fora de São Paulo.",
    itens: [
      {
        termo: "Revolução Industrial",
        faz: "Passagem da produção manual, em oficinas (artesanato e manufatura), para a produção com máquinas, em fábricas (maquinofatura). Mudou o trabalho, as cidades e o comércio mundial.",
      },
      {
        termo: "1ª Revolução Industrial",
        faz: "Começou na Inglaterra, na segunda metade do século XVIII. Base: máquina a vapor, carvão mineral, ferro, indústria têxtil e, depois, ferrovias e navios a vapor.",
        pista: "Por que a Inglaterra: capital do comércio, carvão e ferro no próprio território e mão de obra expulsa do campo pelos cercamentos.",
      },
      {
        termo: "2ª Revolução Industrial",
        faz: "Do fim do século XIX a meados do século XX. Base: eletricidade, petróleo, motor a combustão, aço e química. Destaque para EUA, Alemanha e Japão. Surgem o fordismo, os grandes monopólios e a corrida por colônias na África e na Ásia.",
      },
      {
        termo: "3ª Revolução Industrial",
        faz: "Também chamada técnico-científico-informacional, a partir de meados do século XX. Ciência, tecnologia e produção se unem: informática, robótica, biotecnologia e telecomunicações. Espalha-se o toyotismo, e surgem os tecnopolos, como o Vale do Silício (EUA).",
      },
      {
        termo: "4ª Revolução Industrial (Indústria 4.0)",
        faz: "Termo que ganhou força na Alemanha em 2011. Máquinas, sistemas e pessoas ligados em rede: inteligência artificial, internet das coisas, big data, computação em nuvem e impressão 3D.",
      },
      {
        termo: "As 4 fases no Brasil",
        faz: "1) Proibição (1500–1808); 2) Implantação (1808–1930); 3) Revolução industrial brasileira, com o Estado (1930–1956); 4) Internacionalização, com as multinacionais (de 1956 em diante).",
      },
      {
        termo: "Proibição (1500–1808)",
        faz: "Pelo pacto colonial, o Brasil fornecia açúcar, ouro e outros produtos primários e comprava manufaturados de Portugal. Um alvará de 1785 proibiu as manufaturas na colônia, menos os tecidos grossos de algodão.",
      },
      {
        termo: "Implantação (1808–1930)",
        faz: "Com a família real, em 1808, vêm a abertura dos portos, a liberação das fábricas e o Banco do Brasil. O Tratado de 1810 deu tarifa baixa aos produtos ingleses; a Tarifa Alves Branco (1844) elevou os impostos de importação.",
        pista: "O lucro do café, os imigrantes e a Primeira Guerra Mundial (que cortou importações) ajudaram as primeiras fábricas de tecidos e alimentos em São Paulo.",
      },
      {
        termo: "Era Vargas (1930–1956)",
        faz: "A crise de 1929 derrubou o café, e o país passou a substituir importações. O Estado criou a indústria de base: CSN (1941, em Volta Redonda), Vale do Rio Doce (1942), BNDE (1952) e Petrobras (1953).",
      },
      {
        termo: "JK e o tripé",
        faz: "Plano de Metas ('50 anos em 5', 1956–1961). Tripé: o Estado cuida da energia, dos transportes e da indústria de base; as multinacionais, dos bens duráveis, como carros; o capital nacional, das autopeças e dos bens de consumo.",
        pista: "As montadoras se instalaram no ABC paulista, e o país apostou nas rodovias.",
      },
      {
        termo: "Da ditadura aos anos 1990",
        faz: "'Milagre econômico' (1968–1973), com crescimento alto e dívida externa; II PND no governo Geisel; Zona Franca de Manaus com o formato atual em 1967. Depois, a 'década perdida' de 1980 e, nos anos 1990, a abertura comercial e as privatizações.",
      },
      {
        termo: "Concentração e desconcentração",
        faz: "A indústria se concentrou no Sudeste, sobretudo na Grande São Paulo. Desde os anos 1970, parte dela saiu para o interior paulista e outros estados, fugindo de custos altos (deseconomias de aglomeração) e atraída por incentivos fiscais, a 'guerra fiscal'.",
        pista: "Exemplo: no fim dos anos 1990, montadoras se instalaram em São José dos Pinhais, na Região Metropolitana de Curitiba.",
      },
      {
        termo: "ABC paulista",
        faz: "Santo André, São Bernardo do Campo e São Caetano do Sul (ABCDM, com Diadema e Mauá). Polo das montadoras desde os anos 1950 e berço das grandes greves de metalúrgicos de 1978 a 1980.",
      },
    ],
  },
  questoes: [
    {
      topico: "Revoluções Industriais",
      subassunto: "1ª Revolução Industrial",
      dificuldade: 4,
      raciocinio: "Inglaterra pioneira: capital acumulado no comércio, carvão e ferro no território, mão de obra liberada pelos cercamentos, mercado consumidor. Petróleo e eletricidade são da 2ª RI.",
      enunciado: "A Inglaterra foi o primeiro país a passar pela Revolução Industrial, na segunda metade do século XVIII. Entre os fatores que explicam esse pioneirismo, está:",
      alternativas: [
        "a grande produção de petróleo no território inglês, usado para mover as primeiras máquinas das fábricas.",
        "a proibição das fábricas pelo governo inglês, que levou os empresários a investir só nas suas colônias.",
        "a chegada da eletricidade às cidades inglesas, que permitiu manter as fábricas abertas durante a noite toda.",
        "o capital do comércio, o carvão e o ferro do território e a mão de obra expulsa do campo pelos cercamentos.",
        "a falta de capital na Inglaterra, que obrigou o país a pedir empréstimos aos Estados Unidos e ao Japão.",
      ],
      correta: 3,
      explicacao:
        "A Inglaterra tinha capital acumulado com o comércio, reservas de carvão e de ferro no próprio território e muita mão de obra barata: os cercamentos dos campos expulsaram os camponeses, que foram para as cidades trabalhar nas fábricas.",
      explicacaoErradas:
        "O petróleo e a eletricidade só ganharam peso na 2ª Revolução Industrial; a 1ª usou o carvão e o vapor. O governo inglês não proibiu as fábricas. A Inglaterra tinha capital de sobra, vindo do comércio, e os EUA e o Japão ainda não eram potências industriais.",
      pegadinha: "Pôr o petróleo e a eletricidade na 1ª Revolução Industrial: eles são da 2ª.",
      conhecimento: "Cercamentos: os campos de uso comum foram fechados para criar ovelhas, cuja lã abastecia a indústria têxtil.",
    },
    {
      topico: "Revoluções Industriais",
      subassunto: "2ª Revolução Industrial",
      dificuldade: 5,
      raciocinio: "2ª RI: fim do séc. XIX–meados do XX; eletricidade, petróleo, aço, química, motor a combustão; EUA, Alemanha, Japão; fordismo; monopólios, trustes; imperialismo. Vapor = 1ª; informática = 3ª; IA/IoT = 4ª.",
      enunciado: "Cada Revolução Industrial teve as suas fontes de energia, os seus setores e os seus países em destaque. Sobre a Segunda Revolução Industrial, assinale a alternativa correta.",
      alternativas: [
        "Usou a eletricidade e o petróleo, deu destaque ao aço e à química e teve os EUA e a Alemanha bem à frente.",
        "Foi movida sobretudo pelo carvão e pela máquina a vapor, com a Inglaterra como a única potência industrial.",
        "Foi marcada pela informática, pela robótica e pela internet, com centros de pesquisa como o Vale do Silício.",
        "Aconteceu no século XXI e uniu inteligência artificial, internet das coisas e impressão em três dimensões.",
        "Acabou com as grandes empresas e os monopólios, pois cada fábrica passou a produzir só para a sua cidade.",
      ],
      correta: 0,
      explicacao:
        "A Segunda Revolução Industrial, do fim do século XIX a meados do século XX, usou a eletricidade e o petróleo, com o motor a combustão. Cresceram o aço e a química, e os EUA, a Alemanha e o Japão passaram a disputar a liderança com a Inglaterra.",
      explicacaoErradas:
        "O carvão e o vapor, com a Inglaterra sozinha, são marcas da 1ª Revolução. A informática, a robótica e o Vale do Silício são da 3ª. A inteligência artificial e a internet das coisas são da 4ª. Na 2ª, as grandes empresas cresceram e formaram monopólios, trustes e cartéis.",
      pegadinha: "Trocar as fases: vapor na 1ª, eletricidade e petróleo na 2ª, informática na 3ª, rede e IA na 4ª.",
      conhecimento: "Na 2ª Revolução, a busca por matérias-primas e mercados levou as potências a dividir a África e a Ásia.",
    },
    {
      topico: "Revoluções Industriais",
      subassunto: "3ª Revolução Industrial",
      dificuldade: 4,
      raciocinio: "3ª RI = técnico-científico-informacional: ciência + tecnologia + produção; informática, robótica, biotecnologia, telecom; toyotismo (flexível, estoque mínimo); tecnopolos nos países ricos. Vapor = 1ª; fordismo rígido = 2ª.",
      enunciado: "A Terceira Revolução Industrial, iniciada em meados do século XX, também é chamada de técnico-científico-informacional. Sobre ela, assinale a alternativa correta.",
      alternativas: [
        "Teve como base a máquina a vapor e o carvão mineral, que substituíram o trabalho manual nas oficinas.",
        "Reduziu o uso da ciência na produção, pois as fábricas passaram a depender só da força dos operários.",
        "Espalhou a linha de montagem rígida do fordismo, com grandes estoques e produção em massa sem variação.",
        "Concentrou a pesquisa nos países pobres, que passaram a liderar a criação das novas tecnologias do mundo.",
        "Uniu ciência, tecnologia e produção, com informática, robótica e biotecnologia, e espalhou o toyotismo.",
      ],
      correta: 4,
      explicacao:
        "Na Terceira Revolução Industrial, a ciência e a tecnologia passaram a fazer parte da própria produção. Ganharam força a informática, a robótica, a biotecnologia e as telecomunicações, e o toyotismo, com produção flexível e estoque mínimo, se espalhou.",
      explicacaoErradas:
        "O vapor e o carvão são da 1ª Revolução. A 3ª aumentou, e não reduziu, o uso da ciência. O fordismo rígido, com grandes estoques, é típico da 2ª. A pesquisa ficou concentrada nos países ricos, em tecnopolos como o Vale do Silício, nos EUA.",
      pegadinha: "Ligar a 3ª Revolução ao fordismo: o modelo dela é o toyotismo, flexível.",
      conhecimento: "Tecnopolo: área que junta universidades, centros de pesquisa e empresas de alta tecnologia.",
    },
    {
      topico: "Revoluções Industriais",
      subassunto: "4ª Revolução Industrial",
      dificuldade: 5,
      raciocinio: "Indústria 4.0: termo alemão de 2011; integração em rede; IA, IoT, big data, nuvem, impressão 3D, sistemas ciberfísicos. Afeta serviços, saúde, agro. Mais automação, menos tarefas repetitivas.",
      enunciado: "O termo 'Indústria 4.0' ganhou força na Alemanha, em 2011, para nomear a chamada Quarta Revolução Industrial. Sobre ela, assinale a alternativa correta.",
      alternativas: [
        "Marca a volta das máquinas a vapor, agora movidas por energia solar, nas fábricas dos países mais ricos.",
        "Liga máquinas, sistemas e pessoas em rede, com inteligência artificial, internet das coisas e big data.",
        "Dispensa a internet, pois as máquinas novas trabalham isoladas, sem trocar dados entre si nem com a rede.",
        "Afeta só a indústria pesada e não chega aos serviços, ao comércio, à saúde nem à agricultura do país.",
        "Reduziu a automação e aumentou o número de operários em tarefas repetitivas nas linhas de produção.",
      ],
      correta: 1,
      explicacao:
        "Na Quarta Revolução Industrial, máquinas, sistemas e pessoas trocam dados o tempo todo, em rede. Entram a inteligência artificial, a internet das coisas, o big data, a computação em nuvem e a impressão 3D.",
      explicacaoErradas:
        "A 4ª Revolução não traz de volta o vapor; é digital. Ela depende da internet, porque as máquinas trocam dados o tempo todo. Chega também aos serviços, ao comércio, à saúde e à agricultura de precisão. Ela aumenta a automação e corta tarefas repetitivas.",
      pegadinha: "Confundir a 3ª (informática e robôs) com a 4ª (tudo em rede, com IA e internet das coisas).",
      conhecimento: "Internet das coisas: objetos e máquinas ligados à internet, que enviam e recebem dados sozinhos.",
    },
    {
      topico: "Industrialização brasileira",
      subassunto: "Proibição (1500–1808)",
      dificuldade: 4,
      raciocinio: "Pacto colonial: colônia exporta primários, compra manufaturados da metrópole. Alvará de 1785 (D. Maria I) proibiu manufaturas, salvo tecidos grossos de algodão. Revogado em 1808, com a família real.",
      enunciado: "Até o começo do século XIX, o Brasil quase não teve indústrias. Sobre a fase de proibição, entre 1500 e 1808, assinale a alternativa correta.",
      alternativas: [
        "A Coroa portuguesa incentivava as fábricas na colônia, para que o Brasil vendesse tecidos à Inglaterra.",
        "A proibição foi pedida pelos senhores de engenho, que temiam perder os escravizados para as fábricas.",
        "Pelo pacto colonial, o Brasil fornecia produtos primários, e um alvará de 1785 proibiu as manufaturas.",
        "A colônia já tinha muitas fábricas de máquinas, e Portugal só proibiu a venda delas para outros países.",
        "A proibição acabou com a Independência, em 1822, pois antes disso nenhum governo pôde mudar essa regra.",
      ],
      correta: 2,
      explicacao:
        "Pelo pacto colonial, o Brasil vendia produtos primários, como açúcar e ouro, e comprava manufaturados de Portugal. Para manter essa regra, um alvará de 1785 proibiu as manufaturas na colônia, com exceção dos tecidos grossos de algodão.",
      explicacaoErradas:
        "A Coroa queria a colônia sem fábricas, comprando os produtos de Portugal. A proibição foi uma decisão da metrópole, e não um pedido dos senhores de engenho. A colônia não tinha fábricas de máquinas. A proibição caiu em 1808, com a chegada da família real, e não em 1822.",
      pegadinha: "Ligar o fim da proibição à Independência: ela caiu em 1808, com a família real.",
      conhecimento: "Os tecidos grossos de algodão liberados pelo alvará serviam para vestir os escravizados e fazer sacos.",
    },
    {
      topico: "Industrialização brasileira",
      subassunto: "Implantação (1808–1930)",
      dificuldade: 5,
      raciocinio: "Tratado de 1810: produtos ingleses com tarifa de 15% (menor que a dos portugueses) → concorrência atrapalhou a indústria. Alves Branco 1844: aumentou tarifas (efeito protecionista). Café financiou fábricas; 1ª Guerra cortou importações e estimulou a produção interna.",
      enunciado: "Entre 1808 e 1930, a indústria brasileira começou a se formar, com avanços e obstáculos. Sobre essa fase, assinale a alternativa correta.",
      alternativas: [
        "O Tratado de 1810 deu tarifa baixa aos produtos ingleses, e a Tarifa Alves Branco, de 1844, a elevou.",
        "A abertura dos portos, em 1808, proibiu a entrada de produtos ingleses e fez nascer a indústria pesada.",
        "A Tarifa Alves Branco baixou os impostos sobre as importações e facilitou a entrada de produtos ingleses.",
        "O café atrapalhou a indústria, pois o seu lucro foi todo para fora do país, sem nenhum uso aqui dentro.",
        "A Primeira Guerra Mundial aumentou as importações e fechou as poucas fábricas que existiam no país.",
      ],
      correta: 0,
      explicacao:
        "O Tratado de 1810 deu aos produtos ingleses uma tarifa de importação mais baixa até que a dos portugueses, e a concorrência atrapalhou as fábricas locais. Em 1844, a Tarifa Alves Branco elevou os impostos de importação, o que acabou protegendo a produção nacional.",
      explicacaoErradas:
        "A abertura dos portos facilitou a entrada de produtos, sobretudo ingleses; a indústria pesada só veio no século XX. A Tarifa Alves Branco subiu, e não baixou, os impostos. Parte do lucro do café financiou fábricas em São Paulo. A Primeira Guerra cortou as importações e estimulou a produção interna.",
      pegadinha: "Inverter a Tarifa Alves Branco: ela aumentou os impostos de importação.",
      conhecimento: "O fim do tráfico de escravizados, em 1850, liberou capitais que foram usados em ferrovias e fábricas.",
    },
    {
      topico: "Industrialização brasileira",
      subassunto: "Era Vargas",
      dificuldade: 5,
      raciocinio: "I certo (1929 → substituição de importações). II certo (CSN 1941 Volta Redonda; Vale 1942). III certo (Petrobras 1953, 2º governo). IV errado: montadoras multinacionais = JK, anos 1950.",
      enunciado: "Sobre a industrialização na Era Vargas, considere: I) a crise de 1929 derrubou o café e levou o país a substituir importações; II) o Estado criou indústrias de base, como a CSN e a Vale do Rio Doce; III) a Petrobras foi criada em 1953; IV) as montadoras estrangeiras de carros foram o centro da política industrial dos anos 1930. Assinale a alternativa correta.",
      alternativas: [
        "Só as afirmações I e IV estão certas, pois o Estado não criou nenhuma empresa no período de Vargas.",
        "Todas as afirmações estão certas, pois as montadoras chegaram ao Brasil logo após a Revolução de 1930.",
        "Só a afirmação III está certa, pois a crise de 1929 não teve nenhum efeito sobre a economia brasileira.",
        "As afirmações I, II e III estão certas; a IV está errada, pois as montadoras só vieram depois, com JK.",
        "Só as afirmações II e IV estão certas, pois a Petrobras foi criada no governo de Juscelino Kubitschek.",
      ],
      correta: 3,
      explicacao:
        "A crise de 1929 derrubou o preço do café, e o país passou a produzir o que antes importava. O Estado criou a indústria de base: CSN (1941), Vale do Rio Doce (1942) e, no segundo governo Vargas, a Petrobras (1953). As montadoras estrangeiras vieram com JK, nos anos 1950.",
      explicacaoErradas:
        "O Estado criou várias empresas na Era Vargas, como a CSN e a Vale. As montadoras multinacionais chegaram com JK, e não após 1930. A crise de 1929 teve efeito forte no Brasil, pois derrubou o café. A Petrobras foi criada em 1953, no segundo governo de Vargas.",
      pegadinha: "Trocar os papéis: Vargas = indústria de base estatal; JK = multinacionais e bens duráveis.",
      conhecimento: "A CSN, em Volta Redonda (RJ), começou a produzir aço em 1946 e foi a base da indústria pesada do país.",
    },
    {
      topico: "Industrialização brasileira",
      subassunto: "JK e o tripé",
      dificuldade: 4,
      raciocinio: "Tripé de JK: Estado (energia, transportes, base); multinacionais (bens duráveis, carros); capital nacional (autopeças, não duráveis). Plano de Metas; ABC; rodoviarismo; Brasília meta-síntese.",
      enunciado: "O governo de Juscelino Kubitschek (1956–1961) mudou a indústria brasileira com o Plano de Metas. Sobre o chamado tripé desse modelo, assinale a alternativa correta.",
      alternativas: [
        "O Estado vendeu todas as estatais e deixou a indústria inteira nas mãos das empresas estrangeiras.",
        "O Estado ficou com energia e transporte, as multinacionais com os carros e o capital nacional com as peças.",
        "As multinacionais foram proibidas, e só o capital nacional pôde abrir fábricas de carros no país.",
        "O Plano de Metas deu prioridade às ferrovias, e o país deixou de construir estradas por duas décadas.",
        "O tripé juntava Brasil, Argentina e Paraguai em um acordo para produzir carros em conjunto na América do Sul.",
      ],
      correta: 1,
      explicacao:
        "No tripé de JK, o Estado investiu em energia, transportes e indústria de base; as multinacionais produziram bens duráveis, sobretudo carros; e o capital nacional privado ficou com as autopeças e os bens de consumo comuns.",
      explicacaoErradas:
        "JK não vendeu as estatais; o Estado seguiu como um dos pés do modelo. As multinacionais foram atraídas, e não proibidas. O plano apostou nas rodovias, que serviam à indústria de carros. O tripé é a divisão de papéis entre Estado, multinacionais e capital nacional, e não um acordo entre países.",
      pegadinha: "Achar que JK abriu mão do Estado: o Estado era um dos três pés do modelo.",
      conhecimento: "Brasília, inaugurada em 1960, foi chamada de meta-síntese do Plano de Metas.",
    },
    {
      topico: "Industrialização brasileira",
      subassunto: "Desconcentração industrial",
      dificuldade: 5,
      raciocinio: "Desconcentração: desde os anos 1970, saída da Grande SP para interior de SP e outros estados. Causas: deseconomias de aglomeração (terreno, salários, trânsito, sindicatos) + guerra fiscal (incentivos de ICMS). SP segue o maior parque industrial. Ex.: montadoras em São José dos Pinhais (fim dos anos 1990).",
      enunciado: "Desde os anos 1970, parte das indústrias deixou a Grande São Paulo e se instalou em outras áreas. Sobre esse movimento, assinale a alternativa correta.",
      alternativas: [
        "As fábricas saíram porque a Grande São Paulo ficou sem energia elétrica, depois do apagão de 2001.",
        "As indústrias deixaram o Sudeste por completo, e hoje São Paulo não tem mais um parque industrial forte.",
        "O movimento foi proibido pela Constituição de 1988, que obriga as fábricas a ficar no estado onde nasceram.",
        "A guerra fiscal acabou com os incentivos dos estados, e as fábricas passaram a escolher só pela mão de obra.",
        "Custos altos na metrópole e incentivos de outros estados levaram fábricas ao interior e a outras regiões.",
      ],
      correta: 4,
      explicacao:
        "Na Grande São Paulo, terrenos, salários, impostos e trânsito ficaram caros: são as deseconomias de aglomeração. Ao mesmo tempo, outros estados ofereceram descontos de impostos, a guerra fiscal. Assim, fábricas foram para o interior paulista e para outros estados.",
      explicacaoErradas:
        "O movimento começou nos anos 1970, bem antes do apagão de 2001. São Paulo segue com o maior parque industrial do país; a saída foi parcial. A Constituição não proíbe a mudança de fábricas. A guerra fiscal é justamente a disputa entre estados com incentivos de impostos.",
      pegadinha: "Achar que a indústria saiu de São Paulo: houve desconcentração parcial, e o estado segue o maior polo.",
      conhecimento: "No fim dos anos 1990, montadoras se instalaram em São José dos Pinhais, na Região Metropolitana de Curitiba.",
    },
    {
      topico: "Industrialização brasileira",
      subassunto: "Polos industriais",
      dificuldade: 4,
      raciocinio: "ABC: Santo André, São Bernardo, São Caetano (+ Diadema, Mauá); montadoras desde os anos 1950; greves de 1978–1980. Zona Franca de Manaus: incentivos fiscais, formato atual em 1967, eletroeletrônicos e motos.",
      enunciado: "Alguns polos marcaram a geografia da indústria brasileira, como o ABC paulista e a Zona Franca de Manaus. Sobre eles, assinale a alternativa correta.",
      alternativas: [
        "A Zona Franca de Manaus foi criada para proteger a floresta, e nela é proibido instalar qualquer indústria.",
        "O ABC paulista fica no interior de Minas Gerais e é conhecido pela mineração de ferro e pelas siderúrgicas.",
        "O ABC recebeu as montadoras a partir dos anos 1950, e a Zona Franca atrai fábricas com incentivos fiscais.",
        "A Zona Franca de Manaus foi fechada nos anos 1990, quando as fábricas de lá se mudaram para o Nordeste.",
        "O ABC nunca teve sindicatos fortes, pois as montadoras de lá sempre proibiram as greves dos operários.",
      ],
      correta: 2,
      explicacao:
        "O ABC paulista, na Grande São Paulo, recebeu as montadoras a partir dos anos 1950 e virou o símbolo da indústria de carros. Manaus atrai indústrias com descontos de impostos na Zona Franca, que ganhou o formato atual em 1967.",
      explicacaoErradas:
        "A Zona Franca abriga um grande polo industrial, sobretudo de eletroeletrônicos e motos. O ABC fica na Grande São Paulo, e não em Minas Gerais. A Zona Franca segue ativa, e o prazo dos incentivos foi estendido pela Constituição. O ABC foi berço das grandes greves de metalúrgicos de 1978 a 1980.",
      pegadinha: "Achar que a Zona Franca de Manaus é área sem indústria: ela é um grande polo industrial.",
      conhecimento: "ABC vem das iniciais de Santo André, São Bernardo do Campo e São Caetano do Sul.",
    },
  ],
};
