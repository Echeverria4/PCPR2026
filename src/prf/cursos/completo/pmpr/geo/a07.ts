import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geo-a07",
  resumo: {
    ideia:
      "O Brasil move a maior parte das suas cargas por rodovias, mesmo com distâncias enormes. Esta aula mostra cada modal (rodoviário, ferroviário, aquaviário e aéreo), as principais rodovias, ferrovias e portos, inclusive os do Paraná, e quem regula o setor.",
    itens: [
      {
        termo: "Matriz de transportes",
        faz: "As rodovias levam mais da metade das cargas do país. Depois vêm as ferrovias (sobretudo minério) e a navegação. O avião leva pouco em peso, mas cargas de alto valor.",
      },
      {
        termo: "Por que tantas rodovias",
        faz: "Desde JK, o país apostou nas estradas, ligadas à indústria de carros. A rodovia é mais barata de construir e leva de porta a porta. Mas, em longas distâncias, o frete por tonelada fica mais caro, e há mais acidentes e poluição.",
      },
      {
        termo: "Números das BRs",
        faz: "O primeiro algarismo diz a direção: 0 = radial (sai de Brasília); 1 = longitudinal (norte–sul); 2 = transversal (leste–oeste); 3 = diagonal; 4 = ligação entre rodovias.",
        pista: "BR-040 (Brasília–Rio) é radial; BR-116, longitudinal; BR-277, transversal; BR-381, diagonal.",
      },
      {
        termo: "Grandes rodovias",
        faz: "BR-116: de Fortaleza (CE) ao extremo sul do RS. BR-101: acompanha o litoral. BR-381: inclui a Fernão Dias (BH–SP). BR-163: leva a soja de Mato Grosso aos portos do Pará. BR-230: a Transamazônica, com longos trechos de terra.",
      },
      {
        termo: "BR-277 no Paraná",
        faz: "Rodovia transversal que liga o Porto de Paranaguá a Foz do Iguaçu, cruzando o estado de leste a oeste. Em Foz, a Ponte da Amizade liga o Brasil ao Paraguai.",
      },
      {
        termo: "Ferrovias: história",
        faz: "A primeira ferrovia, de Mauá, é de 1854. No século XIX, os trilhos levavam o café ao porto. Em 1957 nasceu a estatal RFFSA; nos anos 1990, as linhas foram entregues a empresas privadas por concessão.",
        pista: "Problemas: malha pequena para o tamanho do país, concentrada no Sul e no Sudeste, e bitolas (larguras dos trilhos) diferentes.",
      },
      {
        termo: "Ferrovias do minério",
        faz: "Estrada de Ferro Vitória a Minas: leva minério de Minas Gerais ao porto, em Vitória (ES). Estrada de Ferro Carajás: leva minério da Serra dos Carajás (PA) ao porto de São Luís (MA). As duas têm trem de passageiros.",
      },
      {
        termo: "Outras ferrovias",
        faz: "Norte-Sul: corta o interior do país de norte a sul, ainda com trechos em obras. Transnordestina: deve ligar o interior do Nordeste aos portos de Suape (PE) e Pecém (CE). Malha Sul e Malha Paulista: levam grãos aos portos.",
      },
      {
        termo: "Ferrovias no Paraná",
        faz: "A ferrovia Paranaguá–Curitiba, aberta em 1885, desce a Serra do Mar e é famosa pelas obras de engenharia. A Ferroeste, estatal do Paraná, liga Guarapuava a Cascavel, no oeste.",
      },
      {
        termo: "Navegação",
        faz: "Cabotagem: entre portos do mesmo país, pelo litoral. Longo curso: entre países. Hidrovias: Amazonas e Madeira (Norte), Tietê-Paraná (Sudeste e Sul), Paraguai-Paraná. O programa BR do Mar (Lei 14.301/2022) estimula a cabotagem.",
        pista: "Itaipu não tem eclusa: a hidrovia Tietê-Paraná não passa pela usina.",
      },
      {
        termo: "Portos",
        faz: "Santos (SP) é o maior porto do país. Paranaguá (PR) é um dos maiores portos de grãos, com soja e farelo do Paraná e de outros estados. A Lei dos Portos atual é a Lei 12.815/2013.",
      },
      {
        termo: "Transporte aéreo e intermodalidade",
        faz: "O avião é rápido e caro: leva passageiros e cargas leves, perecíveis ou de alto valor. Guarulhos (SP) é o aeroporto mais movimentado do país. Intermodal: vários modais com contratos separados; multimodal: vários modais com um só contrato (Lei 9.611/1998).",
      },
      {
        termo: "Quem regula",
        faz: "DNIT: obras e manutenção da infraestrutura federal de transportes. ANTT: transporte terrestre (rodovias e ferrovias concedidas). ANTAQ: transporte aquaviário. ANAC: aviação civil. A Lei 10.233/2001 criou DNIT, ANTT e ANTAQ; a ANAC é de 2005.",
      },
    ],
  },
  questoes: [
    {
      topico: "Transportes",
      subassunto: "Matriz de transportes",
      dificuldade: 4,
      raciocinio: "Rodoviário leva mais da metade das cargas. Escolha histórica (JK, montadoras). Para longas distâncias e cargas pesadas, ferrovia e hidrovia são mais baratas por tonelada. Rodovia: mais acidentes, poluição, frete caro.",
      enunciado: "O Brasil tem dimensões continentais, mas move a maior parte das suas cargas por caminhões. Sobre essa escolha, assinale a alternativa correta.",
      alternativas: [
        "As rodovias são o modal mais barato para levar cargas pesadas por longas distâncias, à frente das ferrovias.",
        "A ferrovia leva a maior parte das cargas do país, e as rodovias servem só para o transporte de passageiros.",
        "O peso das rodovias vem da aposta feita desde JK, mas o frete fica caro em longas distâncias pelo Brasil.",
        "O avião leva a maior parte das cargas do país, porque é o modal mais rápido entre as regiões brasileiras.",
        "O transporte por rodovias polui menos que o ferroviário, pois cada caminhão leva mais carga que um trem.",
      ],
      correta: 2,
      explicacao:
        "Desde o governo JK, o país investiu sobretudo em rodovias, ligadas à indústria de carros. Por isso os caminhões levam mais da metade das cargas. Para distâncias longas e cargas pesadas, porém, o frete por tonelada é mais caro que no trem ou no navio.",
      explicacaoErradas:
        "Para cargas pesadas e longas distâncias, a ferrovia e a hidrovia são mais baratas que a rodovia. As rodovias, e não as ferrovias, levam a maior parte das cargas. O avião leva pouco em peso, por ser caro. Um trem leva muito mais carga que um caminhão e polui menos por tonelada.",
      pegadinha: "Achar que a rodovia domina por ser a mais barata em qualquer distância: em trajetos longos, ela é mais cara.",
      conhecimento: "O custo alto do transporte e da logística é uma das partes do chamado 'custo Brasil'.",
    },
    {
      topico: "Transportes",
      subassunto: "Números das rodovias federais",
      dificuldade: 5,
      raciocinio: "1º algarismo: 0 radial (Brasília), 1 longitudinal, 2 transversal, 3 diagonal, 4 ligação. BR-040 radial; BR-116 longitudinal; BR-277 transversal; BR-381 diagonal.",
      enunciado: "O número das rodovias federais indica a sua direção. Considerando a BR-040, a BR-116, a BR-277 e a BR-381, assinale a alternativa correta.",
      alternativas: [
        "A BR-277 é radial, pois sai de Brasília, e a BR-040 é transversal, pois corta todo o país de leste a oeste.",
        "Todas são longitudinais, pois o número da rodovia indica só o tamanho, e não a direção que ela segue.",
        "A BR-116 é diagonal, a BR-381 é de ligação, e só a BR-040 tem o número ligado à direção que ela segue.",
        "A BR-381 é transversal, a BR-277 é longitudinal, e a BR-116 é radial, pois começa no Distrito Federal.",
        "A BR-040 é radial, a BR-116 é longitudinal, a BR-277 é transversal e a BR-381 é uma rodovia em diagonal.",
      ],
      correta: 4,
      explicacao:
        "O primeiro algarismo dá a direção: 0 é radial (sai de Brasília), 1 é longitudinal (norte–sul), 2 é transversal (leste–oeste) e 3 é diagonal. Assim, a BR-040 é radial, a BR-116 é longitudinal, a BR-277 é transversal e a BR-381 é diagonal.",
      explicacaoErradas:
        "A BR-277, com o 2, é transversal; a BR-040, com o 0, é radial. O número indica a direção, e não o tamanho. A BR-116 é longitudinal e a BR-381 é diagonal; ligação é o 4. A BR-381 é diagonal, a BR-277 é transversal e a BR-116 é longitudinal; quem sai de Brasília é a radial.",
      pegadinha: "Trocar o 2 (transversal, leste–oeste) pelo 1 (longitudinal, norte–sul).",
      conhecimento: "A BR-277 liga Paranaguá a Foz do Iguaçu e corta o Paraná de leste a oeste, por isso é transversal.",
    },
    {
      topico: "Transportes",
      subassunto: "Grandes rodovias",
      dificuldade: 4,
      raciocinio: "BR-163: Centro-Oeste aos portos do Pará (Santarém, Miritituba) — soja. BR-230 Transamazônica: transversal, trechos sem asfalto. BR-116: Fortaleza ao RS, interior. BR-101: litoral. Fernão Dias = BR-381 (BH–SP).",
      enunciado: "Algumas rodovias federais são eixos importantes da economia e da integração do país. Sobre elas, assinale a alternativa correta.",
      alternativas: [
        "A BR-163 leva a soja de Mato Grosso aos portos do Pará, e a Transamazônica tem longos trechos sem asfalto.",
        "A Transamazônica é toda asfaltada e liga o Brasil ao Peru, pela fronteira do Acre com o Oceano Pacífico.",
        "A BR-116 segue colada ao litoral do país, enquanto a BR-101 corta só o interior das regiões Sul e Sudeste.",
        "A Rodovia Fernão Dias é um trecho da BR-163, que liga a cidade de Cuiabá ao porto de Santos, em São Paulo.",
        "A BR-163 é uma rodovia só do Sul do país e não tem nenhuma ligação com a produção de grãos do Centro-Oeste.",
      ],
      correta: 0,
      explicacao:
        "A BR-163 virou um corredor da soja: leva a produção de Mato Grosso aos portos do Pará, no chamado Arco Norte. A Transamazônica (BR-230), aberta nos anos 1970, ainda tem muitos trechos sem asfalto, que viram lama na época de chuva.",
      explicacaoErradas:
        "A Transamazônica não é toda asfaltada e liga a Paraíba ao Amazonas, sem chegar ao Peru. A BR-101 é a que segue o litoral; a BR-116 vai pelo interior. A Fernão Dias é um trecho da BR-381, entre Belo Horizonte e São Paulo. A BR-163 é um eixo central de escoamento dos grãos do Centro-Oeste.",
      pegadinha: "Trocar a BR-101 (litorânea) pela BR-116 (mais para o interior).",
      conhecimento: "Arco Norte: conjunto de portos do Norte e do Nordeste que escoa cada vez mais grãos do Centro-Oeste.",
    },
    {
      topico: "Transportes",
      subassunto: "Ferrovias",
      dificuldade: 5,
      raciocinio: "Malha pequena e concentrada no Sul/Sudeste; bitolas diferentes atrapalham a integração; leva sobretudo minério e grãos; RFFSA 1957; concessões nos anos 1990. Mauá 1854.",
      enunciado: "As ferrovias brasileiras levam uma parcela importante das cargas, mas enfrentam limites antigos. Sobre a rede ferroviária do país, assinale a alternativa correta.",
      alternativas: [
        "A malha ferroviária é a maior do mundo, bem distribuída por todas as regiões e com uma só bitola nos trilhos.",
        "As ferrovias levam sobretudo passageiros, e quase nenhuma carga é transportada por trem no Brasil.",
        "As ferrovias seguem nas mãos de uma estatal federal desde 1854, sem nenhuma concessão a empresas privadas.",
        "A malha é pequena e concentrada no Sul e no Sudeste, e as bitolas diferentes atrapalham a integração.",
        "A primeira ferrovia do país foi aberta nos anos 1950, no governo JK, para levar soja ao porto de Santos.",
      ],
      correta: 3,
      explicacao:
        "Para o tamanho do país, a malha ferroviária é pequena e fica concentrada no Sul e no Sudeste. Além disso, há trilhos de larguras diferentes (bitolas), o que impede que um trem siga de uma linha para outra e dificulta a integração.",
      explicacaoErradas:
        "A malha brasileira é pequena para o território, mal distribuída e tem bitolas diferentes. As ferrovias levam sobretudo carga, como minério e grãos; o trem de passageiros é raro. A estatal RFFSA, de 1957, teve as linhas concedidas a empresas privadas nos anos 1990. A primeira ferrovia, de Mauá, é de 1854.",
      pegadinha: "Achar que bitola é só detalhe: trilhos de larguras diferentes impedem a passagem direta do trem.",
      conhecimento: "No século XIX, as ferrovias de São Paulo levavam o café do interior até o porto de Santos.",
    },
    {
      topico: "Transportes",
      subassunto: "Ferrovias do minério",
      dificuldade: 4,
      raciocinio: "EFVM: minério de MG → porto em Vitória (ES). EFC: Serra dos Carajás (PA) → São Luís (MA). As duas têm trem de passageiros. Operadas por empresa de mineração.",
      enunciado: "Duas das ferrovias mais movimentadas do país foram feitas para levar minério de ferro até o mar. Sobre elas, assinale a alternativa correta.",
      alternativas: [
        "A Ferrovia Carajás liga Minas Gerais ao Rio de Janeiro e leva só grãos do Centro-Oeste até o litoral.",
        "A Vitória a Minas leva minério de Minas Gerais a Vitória, e a Carajás leva minério do Pará a São Luís.",
        "As duas ferrovias ficam no Sul do país e levam o minério até o porto de Paranaguá, no litoral do Paraná.",
        "A Vitória a Minas foi desativada nos anos 1980, e hoje o minério de Minas Gerais segue só por caminhões.",
        "As duas ferrovias levam só carga e nunca tiveram trem de passageiros, nem mesmo em trechos menores.",
      ],
      correta: 1,
      explicacao:
        "A Estrada de Ferro Vitória a Minas leva o minério de ferro de Minas Gerais até o porto, em Vitória (ES). A Estrada de Ferro Carajás leva o minério da Serra dos Carajás, no Pará, até o porto de São Luís, no Maranhão.",
      explicacaoErradas:
        "A Carajás liga o Pará ao Maranhão e leva sobretudo minério. Nenhuma das duas fica no Sul nem leva minério a Paranaguá. A Vitória a Minas segue em operação e é uma das mais movimentadas do país. As duas têm trem de passageiros, que atende cidades ao longo dos trilhos.",
      pegadinha: "Trocar os destinos: Vitória a Minas termina no Espírito Santo; Carajás, no Maranhão.",
      conhecimento: "A Serra dos Carajás, no Pará, tem uma das maiores reservas de minério de ferro do mundo.",
    },
    {
      topico: "Transportes",
      subassunto: "Transportes no Paraná",
      dificuldade: 5,
      raciocinio: "Paranaguá–Curitiba: 1885, desce a Serra do Mar. Ferroeste: estatal do PR, Guarapuava–Cascavel. BR-277: Paranaguá–Foz (transversal). Ponte da Amizade: Foz–Paraguai. Itaipu sem eclusa.",
      enunciado: "O Paraná tem rodovias e ferrovias ligadas ao seu porto e à produção do interior. Sobre os transportes no estado, assinale a alternativa correta.",
      alternativas: [
        "A ferrovia Paranaguá–Curitiba foi aberta nos anos 2000, e antes disso não havia trilhos na Serra do Mar.",
        "A BR-277 liga Curitiba a São Paulo pelo litoral e não tem nenhuma ligação com o oeste do estado.",
        "A Ferroeste é uma ferrovia federal que liga o porto de Paranaguá ao porto de Santos, pelo litoral.",
        "A hidrovia Tietê-Paraná passa pela eclusa de Itaipu e leva os barcos direto até o rio da Prata.",
        "A ferrovia Paranaguá–Curitiba, de 1885, desce a Serra do Mar, e a BR-277 liga o porto a Foz do Iguaçu.",
      ],
      correta: 4,
      explicacao:
        "A ferrovia Paranaguá–Curitiba foi aberta em 1885 e desce a Serra do Mar, com pontes e túneis famosos. A BR-277 corta o estado de leste a oeste, do Porto de Paranaguá até Foz do Iguaçu, na fronteira com o Paraguai.",
      explicacaoErradas:
        "A ferrovia da Serra do Mar é do século XIX. A BR-277 vai de Paranaguá a Foz do Iguaçu, cruzando o estado. A Ferroeste é uma estatal do Paraná e liga Guarapuava a Cascavel, no interior. Itaipu não tem eclusa, e por isso a hidrovia não atravessa a usina.",
      pegadinha: "Achar que a hidrovia Tietê-Paraná passa por Itaipu: a usina não tem eclusa.",
      conhecimento: "A Ponte da Amizade, em Foz do Iguaçu, liga a BR-277 a Ciudad del Este, no Paraguai.",
    },
    {
      topico: "Transportes",
      subassunto: "Navegação e hidrovias",
      dificuldade: 4,
      raciocinio: "Cabotagem: entre portos do mesmo país. Longo curso: entre países. Hidrovias: Amazonas, Madeira (soja), Tietê-Paraná. BR do Mar (Lei 14.301/2022) estimula a cabotagem.",
      enunciado: "A navegação ainda é pouco usada no Brasil, apesar do litoral extenso e dos grandes rios. Sobre esse modal, assinale a alternativa correta.",
      alternativas: [
        "A cabotagem é a navegação entre portos de países diferentes, como entre Santos e os portos da Europa.",
        "Os rios da Amazônia não são navegáveis, pois são rasos o ano inteiro e cheios de quedas-d'água altas.",
        "Cabotagem é a navegação entre os portos do mesmo país, e o rio Madeira é uma hidrovia que escoa grãos.",
        "A navegação polui mais que o caminhão por tonelada levada, por isso o país decidiu fechar as hidrovias.",
        "O programa BR do Mar proibiu a cabotagem para proteger as transportadoras que usam as rodovias do país.",
      ],
      correta: 2,
      explicacao:
        "Cabotagem é a navegação entre portos do mesmo país, ao longo do litoral. Nos rios, o Madeira é uma hidrovia importante: barcaças levam soja e milho de Rondônia e de Mato Grosso até portos no rio Amazonas.",
      explicacaoErradas:
        "A navegação entre países é a de longo curso, e não a cabotagem. Os grandes rios da Amazônia são navegáveis e servem de estrada para a região. Por tonelada, o barco polui menos que o caminhão. O BR do Mar, de 2022, foi criado para estimular a cabotagem.",
      pegadinha: "Trocar cabotagem (dentro do país) por longo curso (entre países).",
      conhecimento: "Eclusa: 'elevador de barcos' que permite a navegação onde há uma barragem no rio.",
    },
    {
      topico: "Transportes",
      subassunto: "Portos",
      dificuldade: 5,
      raciocinio: "Santos: maior porto do país. Paranaguá: um dos maiores de grãos (soja, farelo), recebe produção do PR e de outros estados pela BR-277 e ferrovias. Lei dos Portos: 12.815/2013.",
      enunciado: "Os portos são a principal porta de saída das exportações brasileiras. Sobre os portos do país, assinale a alternativa correta.",
      alternativas: [
        "Santos é o maior porto do país, e Paranaguá é um dos maiores em grãos, inclusive os de outros estados.",
        "Paranaguá é um porto fluvial, no rio Paraná, e só recebe barcos vindos do Paraguai e da Argentina.",
        "Os portos brasileiros exportam sobretudo produtos industriais de alta tecnologia, e quase nada de grãos.",
        "A Lei dos Portos em vigor é de 1808, do tempo da abertura dos portos às nações amigas de Portugal.",
        "O Porto de Santos fica no Rio de Janeiro e é usado só para receber navios de turismo e de passageiros.",
      ],
      correta: 0,
      explicacao:
        "Santos, em São Paulo, é o maior porto do país. Paranaguá, no litoral do Paraná, é um dos maiores portos de grãos: recebe soja, farelo e milho do Paraná e de estados vizinhos, por rodovias como a BR-277 e por ferrovias.",
      explicacaoErradas:
        "Paranaguá fica no litoral, na baía de Paranaguá, e recebe navios do mundo todo. Os portos brasileiros exportam muitos produtos primários, como grãos e minério. A Lei dos Portos em vigor é a Lei 12.815, de 2013. O Porto de Santos fica em São Paulo e movimenta sobretudo cargas.",
      pegadinha: "Pôr Paranaguá no rio Paraná, pelo nome: o porto fica no litoral, na baía de Paranaguá.",
      conhecimento: "O Porto de Paranaguá também é chamado de Porto Dom Pedro II.",
    },
    {
      topico: "Transportes",
      subassunto: "Órgãos do setor",
      dificuldade: 5,
      raciocinio: "DNIT: obras e manutenção da infraestrutura federal. ANTT: terrestre (rodovias e ferrovias concedidas). ANTAQ: aquaviário. ANAC: aviação civil (2005). Lei 10.233/2001 criou DNIT, ANTT, ANTAQ.",
      enunciado: "Vários órgãos federais cuidam da infraestrutura e da regulação dos transportes. Sobre as funções de cada um, assinale a alternativa correta.",
      alternativas: [
        "A ANAC regula as ferrovias, e a ANTT cuida dos aeroportos e da aviação civil em todo o território nacional.",
        "O DNIT cuida das obras e da manutenção federal, a ANTT do transporte terrestre e a ANTAQ da navegação.",
        "A ANTAQ cuida das rodovias federais, e o DNIT é a agência que regula só os portos marítimos do país.",
        "Todas as agências foram criadas juntas, em 1957, na mesma lei que fundou a estatal das ferrovias.",
        "As rodovias federais concedidas não têm agência reguladora, pois o contrato fica só com o município.",
      ],
      correta: 1,
      explicacao:
        "O DNIT cuida das obras e da manutenção da infraestrutura federal de transportes. A ANTT regula o transporte terrestre, como as rodovias e ferrovias concedidas, e a ANTAQ regula a navegação e os portos. A ANAC cuida da aviação civil.",
      explicacaoErradas:
        "As ferrovias são reguladas pela ANTT, e a aviação pela ANAC. A ANTAQ cuida da navegação, e o DNIT não é agência reguladora de portos. O DNIT, a ANTT e a ANTAQ são da Lei 10.233, de 2001, e a ANAC é de 2005. As rodovias federais concedidas são reguladas pela ANTT.",
      pegadinha: "Trocar a ANTT (terrestre) pela ANTAQ (aquaviário): o 'AQ' vem de aquaviário.",
      conhecimento: "As rodovias federais com pedágio são exploradas por empresas privadas sob contrato fiscalizado pela ANTT.",
    },
    {
      topico: "Transportes",
      subassunto: "Transporte aéreo e multimodal",
      dificuldade: 4,
      raciocinio: "Aéreo: rápido, caro, cargas leves, perecíveis e de alto valor; Guarulhos o mais movimentado. Multimodal = vários modais com um só contrato (Lei 9.611/1998); intermodal = contratos separados.",
      enunciado: "Cada modal tem vantagens e limites, e às vezes eles são usados em conjunto. Sobre o transporte aéreo e o uso de mais de um modal, assinale a alternativa correta.",
      alternativas: [
        "O avião é o modal mais barato do país e, por isso, leva a maior parte do minério e dos grãos exportados.",
        "No transporte multimodal, cada trecho exige um contrato diferente, assinado com cada transportador.",
        "O transporte aéreo de cargas é proibido no Brasil, e os aeroportos atendem só os voos de passageiros.",
        "O avião leva cargas leves, perecíveis ou caras, e o multimodal usa vários modais com um só contrato.",
        "Usar mais de um modal sempre encarece o frete, por isso as empresas evitam ligar rodovia, trem e navio.",
      ],
      correta: 3,
      explicacao:
        "O avião é rápido, mas caro, e por isso leva cargas leves, perecíveis ou de alto valor, como remédios e eletrônicos. No transporte multimodal, a carga passa por vários modais com um único contrato, assinado com o operador de transporte multimodal.",
      explicacaoErradas:
        "O avião é o modal mais caro e leva pouco em peso; minério e grãos vão por trem e navio. Contratos separados para cada trecho são o intermodal. O transporte aéreo de cargas é permitido e usado. Ligar vários modais pode baratear o frete, usando cada um onde ele é mais eficiente.",
      pegadinha: "Trocar multimodal (um só contrato) por intermodal (contratos separados).",
      conhecimento: "O transporte multimodal de cargas está regulado pela Lei 9.611/1998.",
    },
  ],
};
