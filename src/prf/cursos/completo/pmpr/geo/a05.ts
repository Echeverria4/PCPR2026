import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geo-a05",
  resumo: {
    ideia:
      "Energia, transportes e telecomunicações formam a base da produção. Esta aula mostra a matriz energética brasileira, muito renovável, as fontes uma a uma (hidráulica com Itaipu, eólica, solar, biomassa, petróleo, gás e nuclear), quem cuida do setor elétrico e a história das telecomunicações.",
    itens: [
      {
        termo: "Matriz energética × matriz elétrica",
        faz: "A matriz energética reúne toda a energia usada no país: combustíveis do transporte, da indústria, das casas e a eletricidade. A matriz elétrica trata só da geração de eletricidade.",
        pista: "No Brasil, perto de metade da matriz energética é renovável; na elétrica, as renováveis passam de 80%.",
      },
      {
        termo: "Por que o Brasil é tão renovável",
        faz: "Muitos rios com potencial para hidrelétricas, ventos fortes no Nordeste, muito sol e cana-de-açúcar para etanol e bagaço. A matriz energética do mundo, em média, é bem mais fóssil.",
      },
      {
        termo: "Hidrelétricas",
        faz: "A principal fonte de eletricidade do país. Vantagens: renovável e de operação barata. Problemas: a represa alaga florestas e terras, desloca populações (inclusive indígenas e ribeirinhos) e a geração depende das chuvas.",
        pista: "Grandes usinas: Itaipu (rio Paraná), Belo Monte (rio Xingu, PA) e Tucuruí (rio Tocantins, PA).",
      },
      {
        termo: "Itaipu Binacional",
        faz: "Usina do Brasil e do Paraguai no rio Paraná, em Foz do Iguaçu, criada por um tratado de 1973 e em operação desde 1984. É a maior do Brasil em capacidade e uma das maiores do mundo; a chinesa Três Gargantas tem capacidade maior.",
        pista: "A energia é dividida entre os dois países; o Paraguai vende ao Brasil a parte que não usa.",
      },
      {
        termo: "Energia eólica",
        faz: "Gerada pelos ventos, concentra-se no Nordeste (Bahia, Rio Grande do Norte, Piauí, Ceará) e no Rio Grande do Sul. No Nordeste, venta mais na estação seca, quando os reservatórios estão baixos: as fontes se completam.",
      },
      {
        termo: "Energia solar",
        faz: "Cresce sobretudo em telhados de casas e empresas (geração distribuída), com regras na Lei 14.300/2022. O Nordeste e partes do Centro-Oeste e de Minas Gerais têm o maior potencial.",
      },
      {
        termo: "Biomassa e etanol",
        faz: "Energia da matéria orgânica: etanol e bagaço da cana, lenha, resíduos. O Proálcool foi lançado em 1975, depois da alta do petróleo de 1973; os carros flex chegaram em 2003. O bagaço queimado nas usinas também gera eletricidade.",
      },
      {
        termo: "Petróleo e pré-sal",
        faz: "A produção é sobretudo no mar, nas bacias de Santos e de Campos. O pré-sal fica sob uma espessa camada de sal, a grande profundidade, e já responde pela maior parte do petróleo produzido no país.",
        pista: "O primeiro poço com petróleo no Brasil foi em Lobato, na Bahia, em 1939.",
      },
      {
        termo: "Gás natural e termelétricas",
        faz: "As térmicas (a gás, óleo ou carvão) são acionadas sobretudo quando chove pouco. Como geram energia mais cara, a bandeira tarifária da conta de luz passa de verde para amarela ou vermelha.",
      },
      {
        termo: "Energia nuclear",
        faz: "Angra 1 e Angra 2 funcionam em Angra dos Reis (RJ); Angra 3 segue inacabada. A fonte gera uma parcela pequena da eletricidade do país. Não é renovável: usa urânio.",
      },
      {
        termo: "Sistema Interligado Nacional (SIN)",
        faz: "Rede de linhas de transmissão que liga as usinas das várias regiões: a energia gerada em um lugar abastece outro. O ONS (Operador Nacional do Sistema Elétrico) decide, no dia a dia, quais usinas geram.",
        pista: "Em 2001, a falta de chuva e de investimento levou ao racionamento, o 'apagão'.",
      },
      {
        termo: "ANEEL, EPE e MME",
        faz: "MME (Ministério de Minas e Energia): define as políticas. ANEEL (agência reguladora): regula, fiscaliza e define as tarifas. EPE (Empresa de Pesquisa Energética): faz estudos e o planejamento de longo prazo.",
      },
      {
        termo: "Telecomunicações",
        faz: "A Telebrás, estatal, foi criada em 1972. A Lei Geral de Telecomunicações (Lei 9.472/1997) criou a Anatel, e o Sistema Telebrás foi privatizado em 1998. Depois vieram o Marco Civil da Internet (2014) e o leilão do 5G (2021).",
      },
    ],
  },
  questoes: [
    {
      topico: "Matriz energética",
      subassunto: "Matriz energética e matriz elétrica",
      dificuldade: 5,
      raciocinio: "Energética = toda a energia (inclui gasolina, diesel, gás da indústria). Elétrica = só eletricidade (muita hidráulica, eólica, solar). Por isso a elétrica é bem mais renovável. Brasil é mais renovável que a média mundial; nuclear é pequena.",
      enunciado: "No Brasil, perto de metade da matriz energética e bem mais de 80% da matriz elétrica vêm de fontes renováveis. Sobre essa diferença, assinale a alternativa correta.",
      alternativas: [
        "As duas matrizes medem a mesma coisa, e a diferença vem só de erros de cálculo nos balanços oficiais do país.",
        "A matriz elétrica inclui os combustíveis dos carros, e por isso tem mais fontes renováveis que a energética.",
        "A energética inclui os combustíveis do transporte e da indústria, muito fósseis; a elétrica, só eletricidade.",
        "A matriz energética brasileira é menos renovável que a média do mundo, pois o país usa muito carvão mineral.",
        "A matriz elétrica tem mais renováveis porque o país gera a maior parte da sua eletricidade em usinas nucleares.",
      ],
      correta: 2,
      explicacao:
        "A matriz energética soma toda a energia consumida, inclusive a gasolina, o diesel e o gás usados no transporte e na indústria, que são fósseis. A matriz elétrica trata só da eletricidade, gerada sobretudo por hidrelétricas, eólicas e solares; por isso é bem mais renovável.",
      explicacaoErradas:
        "As matrizes medem coisas diferentes: toda a energia e só a eletricidade. Os combustíveis dos carros estão na energética, e não na elétrica. A matriz brasileira é bem mais renovável que a média mundial. A energia nuclear gera uma parcela pequena da eletricidade do país.",
      pegadinha: "Confundir as duas matrizes: a elétrica é só a eletricidade; a energética inclui os combustíveis.",
      conhecimento: "Os dados oficiais das matrizes saem todo ano no Balanço Energético Nacional, da EPE.",
    },
    {
      topico: "Fontes de energia",
      subassunto: "Hidrelétricas",
      dificuldade: 4,
      raciocinio: "Hidrelétrica: renovável, operação barata; impactos: alagamento, deslocamento de povos, dependência das chuvas. Belo Monte = Xingu (PA). A Amazônia tem o maior potencial ainda não usado.",
      enunciado: "As hidrelétricas são a principal fonte de eletricidade do Brasil. Sobre essa fonte de energia, assinale a alternativa correta.",
      alternativas: [
        "Por usar água, a hidrelétrica não causa nenhum impacto ambiental ou social nas áreas onde é construída.",
        "A geração hidrelétrica não depende de chuva, pois os reservatórios mantêm o mesmo nível o ano inteiro.",
        "As maiores usinas do país ficam no Nordeste, como Belo Monte, no rio São Francisco, na divisa com a Bahia.",
        "A Amazônia tem pouco potencial hidráulico, pois os rios da região são curtos e correm sempre em serras.",
        "É renovável e de operação barata, mas a represa alaga florestas e terras e pode deslocar povos inteiros.",
      ],
      correta: 4,
      explicacao:
        "A hidrelétrica usa a força da água, que se renova com as chuvas, e tem custo de operação baixo. Mas a represa alaga florestas, terras de cultivo e cidades, e pode forçar a saída de indígenas, ribeirinhos e agricultores.",
      explicacaoErradas:
        "A hidrelétrica tem impactos fortes, como o alagamento e o deslocamento de pessoas. A geração depende das chuvas: na seca, os reservatórios baixam. Belo Monte fica no rio Xingu, no Pará. A Amazônia tem rios enormes e o maior potencial hidráulico ainda não aproveitado do país.",
      pegadinha: "Achar que fonte renovável não tem impacto: a hidrelétrica é renovável, mas alaga e desloca populações.",
      conhecimento: "Usinas a fio d'água, como Belo Monte, têm reservatório menor e geram menos na seca.",
    },
    {
      topico: "Fontes de energia",
      subassunto: "Itaipu Binacional",
      dificuldade: 5,
      raciocinio: "Itaipu: Brasil + Paraguai, rio Paraná, Foz do Iguaçu, Tratado de 1973, operação desde 1984. Três Gargantas (China) tem capacidade maior. Nada a ver com Angra nem com a Argentina.",
      enunciado: "A Usina de Itaipu é uma das maiores hidrelétricas do mundo e uma das principais fontes de eletricidade do país. Sobre ela, assinale a alternativa correta.",
      alternativas: [
        "É binacional, do Brasil e do Paraguai, fica no rio Paraná e nasceu de um tratado dos dois, de 1973.",
        "É uma usina só brasileira, no rio Iguaçu, e o Paraguai apenas compra uma parte da energia que ela gera.",
        "Fica no rio Uruguai, na fronteira com a Argentina, e foi erguida pelos três países do Mercosul juntos.",
        "É a maior usina do mundo em capacidade, à frente de qualquer usina da China ou de outros países.",
        "Foi construída nos anos 2000 para substituir as usinas nucleares de Angra, desativadas pelo governo.",
      ],
      correta: 0,
      explicacao:
        "Itaipu é uma empresa binacional do Brasil e do Paraguai, criada pelo Tratado de Itaipu, de 1973. A usina fica no rio Paraná, na fronteira entre os dois países, em Foz do Iguaçu, e começou a gerar energia em 1984.",
      explicacaoErradas:
        "A usina pertence aos dois países, e não só ao Brasil, e fica no rio Paraná, e não no Iguaçu. Ela não fica no rio Uruguai nem envolve a Argentina. A chinesa Três Gargantas tem capacidade maior. Itaipu gera desde os anos 1980, e as usinas de Angra seguem funcionando.",
      pegadinha: "Colocar Itaipu no rio Iguaçu, por causa de Foz do Iguaçu: a usina fica no rio Paraná.",
      conhecimento: "O Paraguai usa só uma parte da sua metade da energia e vende o resto ao Brasil.",
    },
    {
      topico: "Fontes de energia",
      subassunto: "Energia eólica",
      dificuldade: 4,
      raciocinio: "Eólica: Nordeste (BA, RN, PI, CE) e RS. No Nordeste venta mais na seca, quando os reservatórios baixam: complementa a hidráulica. Não queima combustível. Varia com o vento; tem impactos (aves, paisagem, comunidades).",
      enunciado: "A energia eólica é uma das fontes que mais cresceram na matriz elétrica brasileira nos últimos anos. Sobre ela, assinale a alternativa correta.",
      alternativas: [
        "A geração eólica se concentra na Amazônia, onde as florestas altas aumentam a força dos ventos no país.",
        "A eólica polui tanto quanto as térmicas, pois queima combustível para girar as pás dos aerogeradores.",
        "A eólica gera o mesmo tanto o tempo todo e, por isso, dispensa as outras fontes no sistema elétrico.",
        "Ela fica sobretudo no Nordeste e no Sul; no Nordeste venta mais na seca, quando os rios estão baixos.",
        "A eólica não tem nenhum impacto, pois os parques não afetam aves, paisagem nem as comunidades vizinhas.",
      ],
      correta: 3,
      explicacao:
        "Os parques eólicos se concentram no Nordeste e no Rio Grande do Sul. No Nordeste, os ventos são mais fortes justamente na estação seca, quando os reservatórios das hidrelétricas estão baixos. Assim, as duas fontes se completam ao longo do ano.",
      explicacaoErradas:
        "A floresta reduz a força do vento, e a Amazônia não é área de destaque na eólica. A eólica não queima combustível: o vento gira as pás. A geração varia com o vento, por isso precisa de outras fontes. Os parques têm impactos, como sobre aves, paisagem e comunidades próximas.",
      pegadinha: "Ver a eólica como fonte constante: ela varia com o vento e precisa de outras fontes junto.",
      conhecimento: "Bahia e Rio Grande do Norte estão entre os estados que mais geram energia eólica no país.",
    },
    {
      topico: "Fontes de energia",
      subassunto: "Biomassa e etanol",
      dificuldade: 4,
      raciocinio: "Proálcool: 1975, resposta ao choque do petróleo de 1973. Carros flex: 2003 (gasolina, etanol ou mistura). Bagaço da cana gera eletricidade. Biomassa é renovável.",
      enunciado: "A cana-de-açúcar tem papel importante na energia do Brasil. Sobre a biomassa e o etanol, assinale a alternativa correta.",
      alternativas: [
        "O Proálcool foi lançado nos anos 2000, depois que os carros flex chegaram ao mercado brasileiro.",
        "O Proálcool surgiu em 1975, após a alta do petróleo, e o bagaço da cana também gera eletricidade.",
        "O etanol é um combustível fóssil, pois é tirado de reservas no subsolo, como o petróleo e o gás.",
        "A biomassa não é renovável, pois a cana leva milhões de anos para se formar, como o carvão mineral.",
        "O carro flex só pode usar etanol puro, pois a mistura com gasolina danifica o motor desses veículos.",
      ],
      correta: 1,
      explicacao:
        "O Proálcool foi criado em 1975, como resposta à alta do petróleo de 1973, para trocar parte da gasolina pelo etanol da cana. Nas usinas, o bagaço que sobra é queimado e gera eletricidade, às vezes vendida à rede.",
      explicacaoErradas:
        "O Proálcool é dos anos 1970; os carros flex vieram em 2003. O etanol vem da cana plantada, e não do subsolo: é renovável. A cana cresce em meses, ao contrário do carvão mineral. O carro flex aceita gasolina, etanol ou qualquer mistura dos dois.",
      pegadinha: "Trocar as datas: Proálcool em 1975, carros flex em 2003.",
      conhecimento: "A gasolina vendida no Brasil já sai das distribuidoras com uma parcela de etanol misturada.",
    },
    {
      topico: "Fontes de energia",
      subassunto: "Petróleo e pré-sal",
      dificuldade: 5,
      raciocinio: "Pré-sal: no mar, sob espessa camada de sal, a grande profundidade; bacias de Santos e Campos; maior parte da produção. Primeiro poço: Lobato (BA), 1939, em terra. Brasil é produtor e exportador de óleo cru.",
      enunciado: "Com o pré-sal, o Brasil passou a estar entre os grandes produtores de petróleo do mundo. Sobre o petróleo no país, assinale a alternativa correta.",
      alternativas: [
        "O pré-sal fica em terra firme, no interior da Bahia, onde começou a extração de petróleo no Brasil.",
        "O Brasil não produz petróleo próprio e importa todo o óleo que consome nas refinarias do seu território.",
        "O pré-sal é uma camada rasa, logo abaixo do fundo do mar, e por isso a extração é simples e barata.",
        "As bacias de Campos e de Santos perderam peso, e hoje quase todo o petróleo do país vem da Amazônia.",
        "O pré-sal fica no mar, sob uma espessa camada de sal, em Santos e Campos, e lidera a produção do país.",
      ],
      correta: 4,
      explicacao:
        "O pré-sal é uma camada de rochas com petróleo que fica abaixo de uma espessa camada de sal, no fundo do mar, a vários quilômetros de profundidade. Está nas bacias de Santos e de Campos e já responde pela maior parte do petróleo produzido no Brasil.",
      explicacaoErradas:
        "O pré-sal fica no mar; na Bahia, em terra, foi o primeiro poço do país, em 1939. O Brasil produz muito petróleo e até exporta óleo cru. A camada é profunda, e a extração exige tecnologia cara. As bacias de Santos e de Campos seguem à frente da produção.",
      pegadinha: "Achar que o pré-sal é raso: ele fica sob o sal, a grande profundidade, o que encarece a extração.",
      conhecimento: "A Petrobras foi criada em 1953, com a campanha 'O petróleo é nosso'.",
    },
    {
      topico: "Fontes de energia",
      subassunto: "Energia nuclear",
      dificuldade: 4,
      raciocinio: "Angra 1 e Angra 2 operam em Angra dos Reis (RJ); Angra 3 inacabada. Parcela pequena da eletricidade. Não renovável (urânio). As usinas ficam no litoral do RJ, perto dos grandes centros.",
      enunciado: "O Brasil tem duas usinas nucleares em operação. Sobre a energia nuclear no país, assinale a alternativa correta.",
      alternativas: [
        "Angra 1 e Angra 2 operam em Angra dos Reis (RJ), Angra 3 segue inacabada, e a fonte gera pouca energia.",
        "A energia nuclear é a principal fonte de eletricidade do país, à frente das hidrelétricas e das eólicas.",
        "As usinas nucleares ficam no Nordeste, perto das minas de urânio, para baratear o transporte do minério.",
        "A energia nuclear é renovável, pois o urânio se renova na natureza a cada ano, como a água dos rios.",
        "O Brasil nunca teve um programa nuclear, e as usinas de Angra são de outros países que as operam aqui.",
      ],
      correta: 0,
      explicacao:
        "As duas usinas em operação, Angra 1 e Angra 2, ficam em Angra dos Reis, no litoral do Rio de Janeiro. A terceira, Angra 3, teve a obra parada várias vezes e segue inacabada. A fonte nuclear responde por uma parcela pequena da eletricidade do país.",
      explicacaoErradas:
        "A principal fonte de eletricidade do país é a hidráulica, e não a nuclear. As usinas ficam no litoral do Rio de Janeiro, entre Rio e São Paulo. O urânio é um minério que não se renova. O Brasil tem programa nuclear, e as usinas são operadas por uma estatal brasileira.",
      pegadinha: "Achar que a nuclear é renovável: o urânio é um recurso que se esgota.",
      conhecimento: "O Brasil tem grandes reservas de urânio e domina o ciclo de enriquecimento do combustível.",
    },
    {
      topico: "Setor elétrico",
      subassunto: "Térmicas e bandeiras tarifárias",
      dificuldade: 5,
      raciocinio: "Pouca chuva → reservatórios baixos → mais térmicas (custo maior) → bandeira amarela/vermelha. SIN interliga as regiões. Bandeiras valem para os consumidores em geral, inclusive casas.",
      enunciado: "Em anos de pouca chuva, a conta de luz costuma ficar mais cara. Sobre essa relação no sistema elétrico brasileiro, assinale a alternativa correta.",
      alternativas: [
        "Com pouca chuva, as hidrelétricas geram mais energia, e o aumento da conta vem só de novos impostos.",
        "A conta sobe porque as usinas eólicas param por completo nos meses de seca, em todas as regiões do país.",
        "As bandeiras tarifárias valem só para as indústrias, sem efeito na conta de luz das residências do país.",
        "Com os reservatórios baixos, ligam-se mais térmicas, de custo maior, e a bandeira tarifária encarece.",
        "Cada estado tem um sistema isolado, e por isso a falta de chuva em uma região não afeta as outras.",
      ],
      correta: 3,
      explicacao:
        "Quando chove pouco, os reservatórios baixam, e o operador do sistema aciona mais termelétricas, que geram energia mais cara. Esse custo extra chega ao consumidor pela bandeira tarifária, que passa de verde para amarela ou vermelha.",
      explicacaoErradas:
        "Com pouca chuva, as hidrelétricas geram menos, e não mais. As eólicas não param na seca; no Nordeste, até ventam mais. As bandeiras aparecem na conta das casas também. O Sistema Interligado Nacional liga as regiões, e a falta de chuva em uma afeta o conjunto.",
      pegadinha: "Achar que a seca afeta só a região onde não choveu: o sistema é interligado.",
      conhecimento: "Em 2001, a falta de chuva e de investimento levou a um racionamento de energia, o 'apagão'.",
    },
    {
      topico: "Setor elétrico",
      subassunto: "ANEEL, EPE, MME e ONS",
      dificuldade: 5,
      raciocinio: "MME: políticas. ANEEL: regula, fiscaliza, tarifas, multas. EPE: estudos e planejamento (criada em 2004). ONS: operação diária do SIN. Distribuidoras vendem e cobram a conta.",
      enunciado: "Vários órgãos dividem as funções do setor elétrico brasileiro. Sobre o papel de cada um, assinale a alternativa correta.",
      alternativas: [
        "A EPE regula e fiscaliza as distribuidoras e aplica multas quando elas falham no serviço prestado ao público.",
        "A ANEEL regula e fiscaliza o setor, a EPE faz os estudos de planejamento, e o MME define as políticas.",
        "O MME opera as usinas no dia a dia e decide, hora a hora, quais delas devem gerar energia no país.",
        "A ANEEL é uma empresa privada que vende energia às famílias e cobra a conta de luz todos os meses.",
        "A EPE substituiu a ANEEL em 2004, e desde então não há mais agência reguladora no setor elétrico.",
      ],
      correta: 1,
      explicacao:
        "O Ministério de Minas e Energia define as políticas do setor. A ANEEL, agência reguladora, regula, fiscaliza, define tarifas e pune as empresas. A EPE faz estudos e o planejamento de longo prazo. A operação diária das usinas cabe ao ONS.",
      explicacaoErradas:
        "Regular, fiscalizar e multar é papel da ANEEL, e não da EPE. A operação diária das usinas cabe ao ONS, e não ao ministério. A ANEEL é uma autarquia, e quem vende e cobra a energia são as distribuidoras. A EPE foi criada em 2004 ao lado da ANEEL, sem substituí-la.",
      pegadinha: "Trocar a ANEEL (regula e fiscaliza) pela EPE (estuda e planeja).",
      conhecimento: "O Conselho Nacional de Política Energética (CNPE) assessora o Presidente da República nas políticas do setor.",
    },
    {
      topico: "Telecomunicações",
      subassunto: "História e marco legal",
      dificuldade: 4,
      raciocinio: "Telebrás: 1972 (estatal). LGT (Lei 9.472/1997) criou a Anatel. Privatização do Sistema Telebrás: 1998. Marco Civil da Internet: 2014. Leilão do 5G: 2021.",
      enunciado: "O setor de telecomunicações brasileiro passou por grandes mudanças desde os anos 1970. Sobre essa história, assinale a alternativa correta.",
      alternativas: [
        "A Telebrás foi criada nos anos 1990 para privatizar a telefonia, e a Anatel surgiu só depois do 5G.",
        "A telefonia sempre foi privada no Brasil, e o Estado nunca teve empresas de telecomunicações no país.",
        "A Lei Geral de Telecomunicações (1997) criou a Anatel, e o Sistema Telebrás foi privatizado em 1998.",
        "O leilão do 5G foi feito em 2010, logo depois da chegada da fibra óptica às casas dos brasileiros.",
        "O Marco Civil da Internet proibiu a privatização das empresas de telefonia que ainda eram do Estado.",
      ],
      correta: 2,
      explicacao:
        "A Lei Geral de Telecomunicações (Lei 9.472/1997) reorganizou o setor e criou a Anatel, a agência reguladora. No ano seguinte, em 1998, o Sistema Telebrás foi dividido e privatizado, o que abriu a telefonia às empresas privadas.",
      explicacaoErradas:
        "A Telebrás é estatal de 1972, e a Anatel é de 1997, bem antes do 5G. Por décadas, a telefonia foi do Estado, pelo Sistema Telebrás. O leilão do 5G ocorreu em 2021. O Marco Civil da Internet (2014) trata de direitos e deveres no uso da internet, e não de privatização.",
      pegadinha: "Trocar as datas: a LGT e a Anatel são de 1997; a privatização, de 1998.",
      conhecimento: "Os cabos submarinos de fibra óptica levam a maior parte do tráfego de internet entre os continentes.",
    },
  ],
};
