import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geo-a08",
  resumo: {
    ideia:
      "A agricultura acompanha o Brasil desde a colônia. Esta aula mostra como ela passou da cana e do café, com trabalho escravizado e depois imigrante, à agricultura moderna, com máquinas, pesquisa e exportações enormes, e quais são os principais cultivos, inclusive no Paraná.",
    itens: [
      {
        termo: "Agronegócio",
        faz: "Toda a cadeia ligada ao campo: antes da porteira (sementes, máquinas, adubos, crédito), dentro da porteira (a produção na fazenda) e depois da porteira (indústria, transporte, comércio e exportação).",
      },
      {
        termo: "Plantation colonial",
        faz: "Modelo da colônia: latifúndio, monocultura, mão de obra escravizada e produção voltada à exportação. A cana-de-açúcar no litoral do Nordeste foi o primeiro grande exemplo.",
      },
      {
        termo: "Café no século XIX",
        faz: "O café subiu pelo Vale do Paraíba e chegou ao Oeste Paulista. Com o fim do tráfico e da escravidão, os imigrantes europeus viraram a principal mão de obra, e as ferrovias levavam o café ao porto de Santos.",
      },
      {
        termo: "Revolução Verde",
        faz: "Pacote espalhado a partir dos anos 1960: sementes melhoradas, adubos químicos, agrotóxicos, irrigação e máquinas. Aumentou muito a produção, mas trouxe contaminação, dependência de insumos caros e vantagem para os grandes produtores.",
      },
      {
        termo: "Modernização conservadora",
        faz: "Nos anos 1960 e 1970, o campo ganhou máquinas e crédito rural barato (Sistema Nacional de Crédito Rural, de 1965), sem reforma agrária. A produção cresceu, mas a terra ficou ainda mais concentrada, e muita gente saiu do campo.",
      },
      {
        termo: "Embrapa e o Cerrado",
        faz: "A Embrapa, criada em 1973, ajudou a adaptar a soja e outras culturas ao clima tropical. Com calcário para corrigir a acidez do solo, o Cerrado virou a grande área de grãos do país.",
        pista: "MATOPIBA: Maranhão, Tocantins, Piauí e Bahia, a fronteira agrícola mais recente do Cerrado.",
      },
      {
        termo: "Peso na economia",
        faz: "A agropecuária, sozinha, tem uma parcela pequena do PIB. Somando a indústria e os serviços ligados a ela, o agronegócio pesa bem mais e responde por perto de metade das exportações, garantindo saldo positivo na balança comercial.",
      },
      {
        termo: "Soja",
        faz: "O Brasil é o maior produtor e o maior exportador de soja do mundo. Mato Grosso é o estado que mais produz, e a China é a principal compradora. A soja vira farelo (ração), óleo e biodiesel.",
      },
      {
        termo: "Milho",
        faz: "Grande parte do milho é plantada logo depois da colheita da soja, na segunda safra (a 'safrinha'), que hoje é maior que a primeira. Serve sobretudo de ração para aves e suínos.",
      },
      {
        termo: "Cana-de-açúcar e laranja",
        faz: "O Brasil é o maior produtor mundial de cana; São Paulo produz mais da metade, para açúcar e etanol. O país também lidera a produção de laranja e a exportação de suco, sobretudo de São Paulo e do Triângulo Mineiro.",
      },
      {
        termo: "Café",
        faz: "O Brasil é o maior produtor e exportador de café do mundo. Minas Gerais é o maior produtor, sobretudo de café arábica; o Espírito Santo lidera o café conilon (robusta).",
      },
      {
        termo: "Trigo, arroz e feijão",
        faz: "O país ainda importa boa parte do trigo que consome; Paraná e Rio Grande do Sul são os maiores produtores. O Rio Grande do Sul lidera o arroz, plantado em áreas alagadas. O feijão é colhido em mais de uma safra por ano.",
      },
      {
        termo: "Agricultura no Paraná",
        faz: "O café dominou o Norte do estado até a geada negra de 1975, que destruiu os cafezais. A soja, o milho e o trigo tomaram o lugar, com máquinas e cooperativas fortes. O Paraná está entre os maiores produtores de grãos e lidera a erva-mate.",
      },
    ],
  },
  questoes: [
    {
      topico: "Espaço agrário",
      subassunto: "Agronegócio",
      dificuldade: 4,
      raciocinio: "Agronegócio = cadeia inteira: antes da porteira (insumos, máquinas, crédito), dentro (produção), depois (indústria, logística, comércio, exportação). Não é só a fazenda nem só a grande propriedade.",
      enunciado: "O termo agronegócio é muito usado no noticiário econômico. Sobre o seu significado, assinale a alternativa correta.",
      alternativas: [
        "É só a produção dentro da fazenda, sem incluir as indústrias de máquinas, adubos e alimentos.",
        "Reúne a cadeia toda: insumos e crédito antes da porteira, a produção e, depois, indústria e transporte.",
        "É o nome dado só às grandes fazendas de exportação, e a agricultura familiar nunca faz parte dele.",
        "É o setor de serviços das cidades, sem nenhuma relação com as atividades do campo ou com a pecuária do país.",
        "É só a parte de exportação, sem contar o que é vendido nos supermercados e feiras do próprio país.",
      ],
      correta: 1,
      explicacao:
        "O agronegócio reúne toda a cadeia ligada ao campo: antes da porteira, as sementes, máquinas, adubos e o crédito; dentro da porteira, a produção na fazenda; e depois da porteira, a indústria, o transporte, o comércio e a exportação.",
      explicacaoErradas:
        "Incluir só a produção da fazenda deixa de fora o antes e o depois da porteira. A agricultura familiar também integra cadeias do agronegócio, como as do frango e do leite. O agronegócio nasce no campo. E ele inclui o que é vendido no mercado interno, e não só o exportado.",
      pegadinha: "Reduzir o agronegócio à fazenda: ele inclui a indústria, o transporte e o comércio.",
      conhecimento: "Por incluir indústria e serviços, o agronegócio pesa bem mais no PIB que a agropecuária sozinha.",
    },
    {
      topico: "Espaço agrário",
      subassunto: "Plantation colonial",
      dificuldade: 5,
      raciocinio: "Plantation: latifúndio + monocultura + mão de obra escravizada + exportação. Cana no litoral do NE. Não é policultura nem pequena propriedade nem mercado interno.",
      enunciado: "A economia da colônia foi organizada no modelo de plantation, com a cana-de-açúcar como primeiro grande exemplo. Sobre esse modelo, assinale a alternativa correta.",
      alternativas: [
        "Baseava-se em pequenas propriedades de imigrantes, com muitos cultivos para abastecer as cidades.",
        "A produção era toda consumida na colônia, e Portugal não tinha interesse nos produtos do Brasil.",
        "Usava trabalho assalariado desde o início, com direitos garantidos pelas leis da Coroa portuguesa.",
        "Unia latifúndio, monocultura, trabalho escravizado e produção voltada ao mercado externo europeu.",
        "Começou no interior de Goiás, longe do litoral, por causa dos solos férteis do Cerrado do Brasil.",
      ],
      correta: 3,
      explicacao:
        "A plantation juntava quatro traços: grandes propriedades (latifúndio), um só cultivo (monocultura), trabalho de pessoas escravizadas e produção voltada à exportação. Foi o modelo da cana-de-açúcar no litoral do Nordeste.",
      explicacaoErradas:
        "As pequenas propriedades com imigrantes vieram muito depois, sobretudo no Sul. A produção seguia para a Europa, pelo pacto colonial. A mão de obra era escravizada, e não assalariada. A cana começou no litoral do Nordeste, como em Pernambuco e na Bahia.",
      pegadinha: "Confundir plantation (latifúndio exportador) com a pequena propriedade de policultura.",
      conhecimento: "O solo de massapê, escuro e fértil, favoreceu a cana no litoral do Nordeste.",
    },
    {
      topico: "Espaço agrário",
      subassunto: "Revolução Verde",
      dificuldade: 4,
      raciocinio: "Revolução Verde: sementes melhoradas, adubos, agrotóxicos, irrigação, máquinas. + produtividade; − contaminação, dependência de insumos, favoreceu grandes, concentração de terra. Não acabou com a fome nem com o uso de química.",
      enunciado: "A partir dos anos 1960, a chamada Revolução Verde mudou a agricultura em muitos países, inclusive no Brasil. Sobre ela, assinale a alternativa correta.",
      alternativas: [
        "Elevou a produção com sementes, adubos, agrotóxicos e máquinas, mas gerou contaminação e dependência.",
        "Proibiu o uso de agrotóxicos e de adubos químicos, trocando-os por técnicas de agricultura orgânica.",
        "Acabou com a fome no mundo, pois a comida passou a ser dividida por igual entre todos os países.",
        "Favoreceu sobretudo os pequenos agricultores pobres, que passaram a ter acesso fácil a máquinas caras.",
        "Foi um movimento ambientalista contra o desmatamento, sem nenhuma relação com a produtividade.",
      ],
      correta: 0,
      explicacao:
        "A Revolução Verde espalhou um pacote de sementes melhoradas, adubos químicos, agrotóxicos, irrigação e máquinas. A produção cresceu muito, mas vieram a contaminação do solo e da água e a dependência de insumos caros.",
      explicacaoErradas:
        "A Revolução Verde ampliou o uso de agrotóxicos e adubos químicos. A fome continuou, porque o problema também é de acesso à comida. O pacote era caro e favoreceu os grandes produtores. O nome 'verde' vem da agricultura, e não de um movimento ambientalista.",
      pegadinha: "Ligar o 'verde' do nome a ecologia: a Revolução Verde aumentou o uso de química no campo.",
      conhecimento: "Agricultura orgânica: produção sem agrotóxicos nem adubos químicos, com certificação própria.",
    },
    {
      topico: "Espaço agrário",
      subassunto: "Modernização conservadora",
      dificuldade: 5,
      raciocinio: "Modernização conservadora: técnica (máquinas, crédito rural de 1965) sem mudar a estrutura fundiária (sem reforma agrária) → produção sobe, terra mais concentrada, êxodo rural, boias-frias.",
      enunciado: "A modernização do campo brasileiro nos anos 1960 e 1970 costuma ser chamada de conservadora. Esse nome se explica porque ela:",
      alternativas: [
        "manteve o trabalho escravizado nas fazendas, com a volta do tráfico de pessoas vindas da África.",
        "proibiu as máquinas no campo, para conservar os empregos dos trabalhadores rurais do país.",
        "fez uma ampla reforma agrária, dividindo os latifúndios entre as famílias sem terra do país.",
        "conservou as técnicas antigas, como a enxada e o arado de tração animal, nas grandes fazendas.",
        "trouxe máquinas e crédito, mas sem reforma agrária, e a terra ficou ainda mais concentrada.",
      ],
      correta: 4,
      explicacao:
        "A modernização trouxe máquinas, adubos e crédito rural barato, mas não mexeu na estrutura das terras: não houve reforma agrária. O que se conservou foi a concentração fundiária, que até aumentou, e muitos trabalhadores deixaram o campo.",
      explicacaoErradas:
        "A escravidão foi abolida em 1888 e não voltou. A modernização espalhou as máquinas, que tiraram empregos no campo. Não houve reforma agrária ampla. As técnicas antigas foram trocadas por máquinas: o que se conservou foi a estrutura da posse da terra.",
      pegadinha: "Achar que 'conservadora' fala das técnicas: o que se conservou foi a concentração da terra.",
      conhecimento: "O crédito rural barato do período foi organizado pelo Sistema Nacional de Crédito Rural, de 1965.",
    },
    {
      topico: "Espaço agrário",
      subassunto: "Embrapa e o Cerrado",
      dificuldade: 4,
      raciocinio: "Embrapa (1973): pesquisa, soja adaptada ao clima tropical; calcário corrige a acidez do solo do Cerrado → grande área de grãos. MATOPIBA = MA, TO, PI, BA.",
      enunciado: "Em poucas décadas, o Cerrado virou a principal área de grãos do Brasil. Sobre essa mudança, assinale a alternativa correta.",
      alternativas: [
        "Os solos do Cerrado sempre foram os mais férteis do país e nunca precisaram de nenhuma correção.",
        "A soja só cresce em clima frio, por isso o Cerrado planta apenas arroz e feijão para o mercado interno.",
        "A pesquisa, com a Embrapa, adaptou a soja ao clima tropical, e o calcário corrigiu a acidez do solo.",
        "O MATOPIBA é uma área do Sul do país, formada por Mato Grosso do Sul, Paraná e Santa Catarina.",
        "A expansão foi feita só por pequenos sítios de agricultura familiar, sem uso de máquinas modernas.",
      ],
      correta: 2,
      explicacao:
        "A Embrapa, criada em 1973, desenvolveu variedades de soja e de outras culturas adaptadas ao clima tropical. Com calcário para corrigir a acidez natural do solo e adubação, o Cerrado se tornou a grande área de grãos do país.",
      explicacaoErradas:
        "Os solos do Cerrado são ácidos e pobres, e precisaram de correção. A soja foi adaptada ao clima tropical e domina o Cerrado. O MATOPIBA reúne Maranhão, Tocantins, Piauí e Bahia. A expansão foi feita sobretudo por grandes propriedades, com máquinas modernas.",
      pegadinha: "Achar que o solo do Cerrado é naturalmente fértil: ele é ácido e precisou de calcário.",
      conhecimento: "Calagem: aplicação de calcário para reduzir a acidez do solo.",
    },
    {
      topico: "Espaço agrário",
      subassunto: "Peso do agro na economia",
      dificuldade: 5,
      raciocinio: "Agropecuária (setor primário) = parcela pequena do PIB; agronegócio (com indústria e serviços) = parcela bem maior; ~metade das exportações; saldo positivo da balança. Exporta muitos produtos primários (commodities).",
      enunciado: "O campo tem grande peso na economia brasileira. Sobre a importância da agropecuária e do agronegócio no país, assinale a alternativa correta.",
      alternativas: [
        "A agropecuária, sozinha, é o maior setor do PIB, à frente da indústria e de todos os serviços do país.",
        "O agronegócio responde por uma parcela pequena das exportações, que são quase todas de produtos industriais.",
        "A agropecuária sozinha pesa pouco no PIB, mas o agronegócio todo gera perto de metade das exportações.",
        "A balança comercial do país é sempre negativa por causa do agro, que importa mais do que exporta.",
        "O Brasil exporta sobretudo alimentos já prontos de marcas próprias, e quase nada de produtos primários.",
      ],
      correta: 2,
      explicacao:
        "A agropecuária, como setor primário, tem uma parcela pequena do PIB. Mas o agronegócio inteiro, com a indústria e os serviços ligados ao campo, pesa bem mais e responde por perto de metade das exportações, o que ajuda a manter a balança comercial positiva.",
      explicacaoErradas:
        "O maior setor do PIB são os serviços, e não a agropecuária. O agronegócio responde por perto de metade das exportações. O agro tem grande saldo positivo e ajuda a balança comercial. O país exporta muitos produtos primários, como soja em grão, milho, café e carnes.",
      pegadinha: "Confundir a agropecuária (só o setor primário) com o agronegócio (a cadeia toda).",
      conhecimento: "Commodity: produto primário padronizado, como soja ou minério, com preço definido no mercado mundial.",
    },
    {
      topico: "Principais cultivos",
      subassunto: "Soja e milho",
      dificuldade: 4,
      raciocinio: "Brasil = maior produtor e exportador de soja; MT o maior estado; China principal compradora. Milho: segunda safra (safrinha) após a soja, hoje maior que a primeira; vira ração.",
      enunciado: "A soja e o milho são os principais grãos da agricultura brasileira. Sobre esses cultivos, assinale a alternativa correta.",
      alternativas: [
        "O Brasil importa a maior parte da soja que consome, pois a produção do país não atende ao mercado interno.",
        "A soja brasileira vai quase toda para a Europa, e a China compra só uma parte pequena da produção.",
        "O milho é plantado só uma vez por ano, no verão, e nunca divide a mesma área com a soja na mesma safra.",
        "O Rio Grande do Sul é hoje o maior produtor de soja do país, à frente de Mato Grosso e do Paraná.",
        "O Brasil é o maior exportador de soja, Mato Grosso é o maior produtor, e o milho tem a 'safrinha'.",
      ],
      correta: 4,
      explicacao:
        "O Brasil é o maior produtor e exportador de soja do mundo, e Mato Grosso é o estado que mais produz. Muito milho é plantado logo depois da colheita da soja, na segunda safra, a 'safrinha', que hoje supera a primeira.",
      explicacaoErradas:
        "O Brasil produz muito mais soja do que consome e exporta grande parte. A China é a principal compradora da soja brasileira. O milho tem duas safras, e a segunda é plantada na mesma área, depois da soja. Mato Grosso, e não o Rio Grande do Sul, é o maior produtor.",
      pegadinha: "Achar que a 'safrinha' é pequena: a segunda safra de milho hoje é maior que a primeira.",
      conhecimento: "O farelo de soja e o milho são a base da ração de aves e suínos.",
    },
    {
      topico: "Principais cultivos",
      subassunto: "Café",
      dificuldade: 5,
      raciocinio: "Brasil = maior produtor e exportador mundial de café. MG = maior produtor (arábica). ES = líder do conilon (robusta). SP ainda produz (Mogiana), mas não lidera. Paraná perdeu o café depois da geada de 1975.",
      enunciado: "O café ainda é um dos símbolos da agricultura brasileira. Sobre a produção atual de café no país, assinale a alternativa correta.",
      alternativas: [
        "Minas Gerais lidera a produção, sobretudo de arábica, e o Espírito Santo lidera o café conilon.",
        "O Paraná é hoje o maior produtor de café do país, como já era antes da geada negra dos anos 1970.",
        "O Brasil deixou de exportar café e hoje compra de outros países quase todo o café que consome.",
        "São Paulo produz mais da metade do café brasileiro, e Minas Gerais quase não planta café hoje.",
        "O conilon é produzido só no Sul do país, pois precisa de geadas fortes para dar bons frutos.",
      ],
      correta: 0,
      explicacao:
        "O Brasil é o maior produtor e exportador de café do mundo. Minas Gerais é o estado que mais produz, sobretudo café arábica. O Espírito Santo lidera a produção de conilon, também chamado de robusta, mais resistente ao calor.",
      explicacaoErradas:
        "O Paraná perdeu boa parte dos cafezais com a geada de 1975 e hoje não lidera. O Brasil segue como maior exportador de café do mundo. Minas Gerais, e não São Paulo, lidera a produção. O conilon é cultivado em áreas quentes, como o Espírito Santo e Rondônia, e sofre com a geada.",
      pegadinha: "Trocar os líderes: Minas Gerais no arábica, Espírito Santo no conilon.",
      conhecimento: "Arábica: café de altitude, mais suave; conilon (robusta): de áreas quentes e mais baixas.",
    },
    {
      topico: "Principais cultivos",
      subassunto: "Cana-de-açúcar e laranja",
      dificuldade: 5,
      raciocinio: "Cana: Brasil maior produtor mundial; SP mais da metade; açúcar + etanol + bagaço. Laranja: Brasil lidera produção e exportação de suco; SP e Triângulo Mineiro (cinturão citrícola).",
      enunciado: "Cana-de-açúcar e laranja têm grande peso no agronegócio do Sudeste. Sobre esses cultivos, assinale a alternativa correta.",
      alternativas: [
        "O Nordeste produz hoje a maior parte da cana do país, e São Paulo quase não planta cana para usinas.",
        "A cana serve só para o açúcar, pois o etanol do Brasil é feito todo a partir do milho importado.",
        "O Brasil importa quase todo o suco de laranja que consome, por não ter clima bom para a laranja.",
        "São Paulo produz mais da metade da cana do país, e o Brasil lidera a exportação de suco de laranja.",
        "A laranja do país é plantada sobretudo na Amazônia, e o suco é vendido só para o mercado interno.",
      ],
      correta: 3,
      explicacao:
        "O Brasil é o maior produtor de cana do mundo, e São Paulo responde por mais da metade, para fazer açúcar e etanol. O país também lidera a produção de laranja e a exportação de suco, com o cinturão citrícola de São Paulo e do Triângulo Mineiro.",
      explicacaoErradas:
        "O Nordeste foi o centro da cana na colônia, mas hoje o maior produtor é São Paulo. O etanol brasileiro vem sobretudo da cana, embora o de milho esteja crescendo. O Brasil é o maior exportador de suco de laranja. A laranja se concentra em São Paulo e no Triângulo Mineiro, e o suco vai muito para o exterior.",
      pegadinha: "Pensar no Nordeste colonial: hoje a cana se concentra em São Paulo.",
      conhecimento: "O bagaço da cana é queimado nas usinas e gera eletricidade.",
    },
    {
      topico: "Principais cultivos",
      subassunto: "Agricultura no Paraná",
      dificuldade: 4,
      raciocinio: "Norte do PR: café até a geada negra de 1975 → soja, milho, trigo, mecanização, cooperativas, êxodo rural. PR entre os maiores de grãos; lidera a erva-mate; trigo com RS.",
      enunciado: "A agricultura do Paraná passou por uma grande mudança na segunda metade do século XX. Sobre essa história e a produção atual do estado, assinale a alternativa correta.",
      alternativas: [
        "O Paraná nunca plantou café, pois o clima do estado é frio demais para esse cultivo em qualquer região.",
        "Após a geada de 1975, o café do Norte deu lugar à soja, ao milho e ao trigo, com máquinas e cooperativas.",
        "A soja chegou ao Paraná só depois de 2010 e ainda ocupa uma área pequena nas lavouras do estado.",
        "A mecanização no Paraná aumentou o número de trabalhadores no campo e reduziu as migrações para as cidades.",
        "O Paraná importa todo o trigo que consome, pois nenhum cereal de inverno pode ser plantado no estado.",
      ],
      correta: 1,
      explicacao:
        "O café dominou o Norte do Paraná até a geada negra de 1975, que destruiu os cafezais. Soja, milho e trigo ocuparam essas terras, com máquinas e cooperativas fortes. A mecanização exigiu menos trabalhadores, e muitos foram para as cidades.",
      explicacaoErradas:
        "O Norte do Paraná foi uma grande área de café até os anos 1970. A soja se espalhou pelo estado desde os anos 1970, e o Paraná está entre os maiores produtores. A mecanização tirou trabalhadores do campo e aumentou o êxodo rural. O Paraná é um dos maiores produtores de trigo do país.",
      pegadinha: "Achar que a mecanização gera empregos no campo: ela troca trabalhadores por máquinas.",
      conhecimento: "O Paraná lidera a produção de erva-mate no Brasil, muito ligada às áreas de mata com araucária.",
    },
  ],
};
