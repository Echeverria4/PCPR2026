import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geo-a09",
  resumo: {
    ideia:
      "Esta aula mostra como o campo se organiza: os sistemas de produção, os tipos de agricultura, quem trabalha e quem tem a terra, o que o Brasil exporta e como funciona a pecuária, com destaque para o frango e a agroindústria do Paraná.",
    itens: [
      {
        termo: "Intensivo × extensivo",
        faz: "O sistema intensivo usa muito capital, técnica e insumos em área menor, e produz muito por hectare. O extensivo usa muita terra, pouca técnica e pouco investimento, e produz pouco por hectare.",
        pista: "Intensivo e extensivo falam da produtividade por área, e não do tamanho da fazenda.",
      },
      {
        termo: "Orgânica e agroecologia",
        faz: "A agricultura orgânica não usa adubos químicos nem agrotóxicos sintéticos: usa rotação de culturas, compostagem e controle biológico de pragas. A agroecologia vai além e junta a produção com a conservação da natureza e a diversidade de cultivos.",
      },
      {
        termo: "Agricultura familiar",
        faz: "A Lei 11.326/2006 define o agricultor familiar: área de até 4 módulos fiscais, mão de obra sobretudo da família e direção do estabelecimento pela família. No Censo Agropecuário de 2017, era cerca de 77% dos estabelecimentos, mas só perto de 23% da área.",
        pista: "O Pronaf, de 1996, é o crédito voltado à agricultura familiar.",
      },
      {
        termo: "Agricultura comercial",
        faz: "Também chamada de empresarial ou patronal: produção em grande escala para o mercado, com máquinas, sementes melhoradas e insumos. Domina os grãos do Centro-Oeste, a cana e boa parte do café e do algodão.",
      },
      {
        termo: "Itinerante, jardinagem e coletiva",
        faz: "A itinerante derruba e queima a mata, planta até o solo cansar e muda de lugar. A de jardinagem usa muita mão de obra em áreas pequenas, como o arroz da Ásia de monções. A coletiva divide a terra e o trabalho entre um grupo.",
        pista: "Exemplos de coletiva: kolkhoz (antiga União Soviética), kibutz (Israel), comunas (China), ejido (México) e as cooperativas.",
      },
      {
        termo: "Boia-fria",
        faz: "Trabalhador rural temporário, pago por dia ou por produção, quase sempre sem carteira assinada. O nome vem da marmita que leva e come fria no campo. A mecanização da colheita, como a da cana, reduziu muito esse trabalho.",
      },
      {
        termo: "Arrendatário × parceiro",
        faz: "O arrendatário paga um aluguel pelo uso da terra e fica com toda a produção. O parceiro (ou meeiro, quando a divisão é meio a meio) entrega ao dono uma parte do que produz. As duas formas são reguladas pelo Estatuto da Terra (Lei 4.504/1964).",
      },
      {
        termo: "Posseiro × grileiro",
        faz: "O posseiro ocupa e trabalha a terra sem ter o título; pode virar dono pela usucapião rural (área de até 50 hectares, 5 anos, com moradia e trabalho, art. 191 da Constituição). O grileiro falsifica documentos para tomar terras, muitas vezes públicas.",
        pista: "Terra pública não pode ser adquirida por usucapião.",
      },
      {
        termo: "Agenciador e empreiteiro",
        faz: "O agenciador, chamado de 'gato', recruta trabalhadores, às vezes de outros estados, com promessas que podem esconder dívidas e trabalho análogo ao de escravo (crime do art. 149 do Código Penal). O empreiteiro contrata a mão de obra para uma tarefa da fazenda.",
      },
      {
        termo: "Exportações e mercados",
        faz: "O Brasil exporta sobretudo soja, carnes, açúcar, café, milho, celulose e suco de laranja. A China é a maior compradora da soja e da carne bovina; os Estados Unidos e a Alemanha estão entre os maiores compradores do café.",
      },
      {
        termo: "Bovinos",
        faz: "O Brasil tem o maior rebanho bovino comercial do mundo e é o maior exportador de carne bovina. Mato Grosso tem o maior rebanho, e Minas Gerais lidera o leite. Ainda predomina a criação extensiva, a pasto.",
        pista: "ILPF: integração lavoura-pecuária-floresta, com política nacional na Lei 12.805/2013.",
      },
      {
        termo: "Aves, suínos e agroindústria",
        faz: "Aves e suínos são criados de forma intensiva, sobretudo no sistema de integração: a agroindústria entrega pintinhos ou leitões, ração e assistência, e compra os animais. O Paraná abate cerca de um terço do frango do país; Santa Catarina lidera os suínos.",
        pista: "No Oeste do Paraná, com Cascavel e Toledo, cooperativas ligam soja e milho (ração) aos frigoríficos, e a carne sai pelo porto de Paranaguá.",
      },
      {
        termo: "Ovinos e entraves da pecuária",
        faz: "O Nordeste tem o maior rebanho de ovinos e caprinos, adaptados ao semiárido; o Rio Grande do Sul tem tradição na lã. Os entraves da pecuária incluem pastagens degradadas, desmatamento, doenças, exigência de rastreabilidade e transporte caro.",
        pista: "Febre aftosa: o Paraná foi reconhecido livre sem vacinação em 2021, e o Brasil inteiro em 2025.",
      },
    ],
  },
  questoes: [
    {
      topico: "Espaço agrário",
      subassunto: "Sistemas intensivo e extensivo",
      dificuldade: 4,
      raciocinio: "Intensivo/extensivo = produtividade por área (capital, técnica, insumos), e não tamanho da propriedade. Grande fazenda de soja mecanizada = intensiva; pasto grande com pouco gado e pouca técnica = extensiva.",
      enunciado: "Uma fazenda de soja de 5 mil hectares usa máquinas modernas, sementes melhoradas e adubação precisa. Um pequeno sítio cria poucas cabeças de gado soltas num pasto sem cuidado e sem técnica. Sobre esses casos, assinale a alternativa correta.",
      alternativas: [
        "A fazenda de soja é extensiva, pois todo estabelecimento com mais de mil hectares é extensivo pela lei.",
        "O sítio é intensivo, pois toda pequena propriedade usa a terra de forma intensiva, com muita técnica.",
        "Os dois casos são intensivos, pois a classificação depende só do tipo de produto, e não da técnica.",
        "A fazenda de soja é intensiva, pois intensivo e extensivo medem a técnica e a produção por hectare.",
        "Os dois casos são extensivos, pois só a horta em estufa pode ser chamada de agricultura intensiva.",
      ],
      correta: 3,
      explicacao:
        "Intensivo e extensivo falam do uso de capital, técnica e insumos e da produção por hectare, e não do tamanho. A grande fazenda com máquinas e adubação é intensiva; o pasto sem cuidado e com pouco gado é extensivo, mesmo num sítio pequeno.",
      explicacaoErradas:
        "Não há regra que torne extensiva toda fazenda grande: a soja mecanizada é intensiva. Pequena propriedade pode ser extensiva, como o pasto sem técnica do sítio. A classificação depende da técnica e da produtividade, e não do produto. Estufas são intensivas, mas não são o único caso.",
      pegadinha: "Ligar intensivo a fazenda pequena e extensivo a fazenda grande: o critério é a produtividade.",
      conhecimento: "Produtividade agrícola: quanto se produz por hectare, como sacas de soja por hectare.",
    },
    {
      topico: "Espaço agrário",
      subassunto: "Agricultura familiar",
      dificuldade: 5,
      raciocinio: "Lei 11.326/2006: até 4 módulos fiscais, mão de obra predominantemente familiar, direção pela família, renda mínima do estabelecimento. Censo Agro 2017: ~77% dos estabelecimentos, ~23% da área. Pronaf 1996. Está em todo o país.",
      enunciado: "Sobre a agricultura familiar no Brasil, segundo a Lei 11.326/2006 e o Censo Agropecuário de 2017, assinale a alternativa correta.",
      alternativas: [
        "Exige área de até 4 módulos fiscais e trabalho sobretudo da família; reúne a maioria dos estabelecimentos.",
        "Ocupa a maior parte da área agrícola do país, mas reúne só uma parcela pequena dos estabelecimentos rurais.",
        "Só existe no Norte e no Nordeste, pois no Sul e no Sudeste todas as propriedades rurais são patronais.",
        "Exige que nenhum produto seja vendido, pois todo o alimento deve ser consumido pela própria família.",
        "Pode ter qualquer tamanho e depender só de empregados contratados, desde que o dono more na cidade.",
      ],
      correta: 0,
      explicacao:
        "A Lei 11.326/2006 exige área de até 4 módulos fiscais, mão de obra sobretudo da família e direção pela família. No Censo de 2017, a agricultura familiar era cerca de 77% dos estabelecimentos, mas ocupava só perto de 23% da área.",
      explicacaoErradas:
        "Os números são o contrário: maioria dos estabelecimentos e pequena parte da área. A agricultura familiar existe em todo o país, com grande força também no Sul. Ela vende ao mercado, como leite, frango, feijão e hortaliças. A lei limita a área e exige trabalho e direção da família.",
      pegadinha: "Inverter os números do Censo: a familiar é a maioria dos estabelecimentos, mas tem pouca área.",
      conhecimento: "Módulo fiscal: unidade de área definida por município, que varia de 5 a 110 hectares.",
    },
    {
      topico: "Espaço agrário",
      subassunto: "Tipos de agricultura",
      dificuldade: 5,
      raciocinio: "Itinerante = derruba, queima, planta até esgotar e muda (coivara). Jardinagem = muita mão de obra em área pequena, alta produção por área (arroz da Ásia de monções). Coletiva = kolkhoz (URSS), kibutz (Israel), comunas (China), ejido (México).",
      enunciado: "Os tipos de agricultura variam conforme o lugar e a forma de organização. Sobre esses tipos, assinale a alternativa correta.",
      alternativas: [
        "A itinerante usa sempre a mesma área por séculos, com máquinas modernas e adubação química intensa.",
        "A de jardinagem usa áreas enormes com poucos trabalhadores, como as grandes fazendas de soja do país.",
        "O kibutz é uma forma de agricultura itinerante dos povos da Amazônia, com derrubada e queima da mata.",
        "O kolkhoz era uma fazenda particular de exportação, típica dos Estados Unidos no século XIX.",
        "A itinerante queima a mata e muda de área quando o solo cansa; o kibutz de Israel é coletivo.",
      ],
      correta: 4,
      explicacao:
        "A agricultura itinerante derruba e queima a mata, planta até o solo se esgotar e depois muda de área. O kibutz, de Israel, é um exemplo de agricultura coletiva, assim como o kolkhoz da antiga União Soviética e as comunas da China.",
      explicacaoErradas:
        "A itinerante muda de área e usa técnicas simples, sem máquinas. A de jardinagem usa muita mão de obra em áreas pequenas, como o arroz da Ásia de monções. O kibutz é coletivo e fica em Israel. O kolkhoz era uma fazenda coletiva da antiga União Soviética.",
      pegadinha: "Trocar os exemplos: kibutz e kolkhoz são coletivos; a derrubada e queima é a itinerante.",
      conhecimento: "Coivara: queima dos restos da mata derrubada para limpar o terreno e plantar.",
    },
    {
      topico: "Trabalho no campo",
      subassunto: "Boia-fria",
      dificuldade: 4,
      raciocinio: "Boia-fria = temporário/diarista, sem vínculo formal na maioria, paga por dia ou produção, leva marmita fria. Mecanização (ex.: colheita da cana) reduziu esse trabalho.",
      enunciado: "O boia-fria é uma figura conhecida no campo brasileiro. Sobre esse trabalhador, assinale a alternativa correta.",
      alternativas: [
        "É o dono de uma pequena propriedade que vende a produção numa cooperativa com contrato fixo.",
        "É o trabalhador temporário pago por dia ou produção, quase sempre sem registro formal no emprego.",
        "É o funcionário público que fiscaliza as fazendas e aplica multas por trabalho escravo no campo.",
        "É o trabalhador fixo da fazenda, com carteira assinada, casa e salário mensal garantido o ano todo.",
        "É o grande fazendeiro que aluga as terras e recebe uma parte da colheita como pagamento do aluguel.",
      ],
      correta: 1,
      explicacao:
        "O boia-fria é o trabalhador rural temporário, pago por dia ou por produção, quase sempre sem carteira assinada. O nome vem da marmita que ele leva e come fria no campo. A mecanização da colheita, como a da cana, reduziu muito esse trabalho.",
      explicacaoErradas:
        "O dono de pequena propriedade é agricultor familiar, e não boia-fria. Quem fiscaliza é o auditor-fiscal do trabalho. O boia-fria não tem vínculo fixo nem salário garantido o ano todo. Quem recebe parte da colheita pelo uso da terra é o dono que faz parceria.",
      pegadinha: "Confundir o boia-fria (temporário, sem vínculo) com o trabalhador fixo da fazenda.",
      conhecimento: "A queima da palha da cana foi sendo proibida, o que levou à colheita mecanizada.",
    },
    {
      topico: "Trabalho no campo",
      subassunto: "Arrendatário e parceiro",
      dificuldade: 5,
      raciocinio: "Arrendatário: paga aluguel (valor certo) e fica com a produção; risco é dele. Parceiro: divide a produção (e riscos) com o dono; meeiro = meio a meio. Estatuto da Terra (Lei 4.504/1964).",
      enunciado: "José planta numa terra que não é dele e paga ao dono um valor fixo por ano, ficando com toda a colheita. Pedro planta em outra terra e entrega ao dono metade do que colhe. Assinale a alternativa que classifica corretamente os dois.",
      alternativas: [
        "José é meeiro e Pedro é arrendatário, pois o meeiro é quem paga o aluguel da terra em dinheiro.",
        "Os dois são posseiros, pois nenhum deles tem o título da terra em que planta e trabalha todos os dias.",
        "José é arrendatário e Pedro é parceiro meeiro, dois contratos tratados no Estatuto da Terra de 1964.",
        "Os dois são boias-frias, pois trabalham em terra alheia e recebem por dia de serviço na colheita.",
        "José é grileiro e Pedro é latifundiário, pois os dois usam terras que pertencem a outras pessoas.",
      ],
      correta: 2,
      explicacao:
        "José é arrendatário: paga um aluguel fixo e fica com toda a produção. Pedro é parceiro, e como divide meio a meio, é chamado de meeiro. O Estatuto da Terra, Lei 4.504/1964, trata do arrendamento e da parceria rural.",
      explicacaoErradas:
        "Os papéis estão trocados: o meeiro divide a colheita, e o arrendatário paga o aluguel. Posseiro ocupa a terra sem contrato com o dono, o que não é o caso. Boia-fria trabalha por dia para outra pessoa, sem plantar por conta própria. Grileiro falsifica documentos, e latifundiário é dono de grande área.",
      pegadinha: "Trocar arrendatário (aluguel fixo) e meeiro (divide a colheita).",
      conhecimento: "Na parceria, o dono e o parceiro também dividem os riscos de uma safra ruim.",
    },
    {
      topico: "Trabalho no campo",
      subassunto: "Posseiro e grileiro",
      dificuldade: 4,
      raciocinio: "Posseiro: ocupa e trabalha sem título, de boa-fé; usucapião rural CF 191 (≤ 50 ha, 5 anos, moradia, produtiva); terra pública não usucapível. Grileiro: falsifica documentos (grilo na gaveta) para tomar terras.",
      enunciado: "Os conflitos por terra no Brasil envolvem posseiros e grileiros. Sobre esses dois personagens, assinale a alternativa correta.",
      alternativas: [
        "O grileiro é o trabalhador sem terra que ocupa uma área pública e espera a reforma agrária do governo.",
        "O posseiro é quem falsifica escrituras em cartório para vender a mesma terra a vários compradores.",
        "O posseiro vira dono de terra pública depois de 5 anos de uso, pela usucapião prevista na Constituição.",
        "O grileiro é quem aluga a terra de outra pessoa e paga o aluguel com uma parte fixa da produção obtida.",
        "O posseiro trabalha a terra sem título e pode ter usucapião; o grileiro toma terras com papéis falsos.",
      ],
      correta: 4,
      explicacao:
        "O posseiro ocupa e trabalha a terra sem título e pode virar dono pela usucapião rural, com até 50 hectares, 5 anos, moradia e trabalho (art. 191 da Constituição). O grileiro falsifica documentos para se apossar de terras, muitas vezes públicas.",
      explicacaoErradas:
        "Grileiro não é o sem-terra: é quem frauda documentos. Falsificar escrituras é coisa de grileiro, e não de posseiro. Terra pública não pode ser adquirida por usucapião. Quem aluga a terra é o arrendatário, e não o grileiro.",
      pegadinha: "Esquecer que terra pública não pode ser adquirida por usucapião.",
      conhecimento: "O nome 'grilagem' vem do truque de guardar papel com grilos para parecer antigo.",
    },
    {
      topico: "Comércio agrícola",
      subassunto: "Exportações e mercados",
      dificuldade: 4,
      raciocinio: "Soja: China maior compradora. Carne bovina: China maior compradora. Café: EUA e Alemanha entre os maiores. Brasil exporta muito produto primário (commodities): soja em grão, café, carnes, açúcar, milho, celulose, suco de laranja.",
      enunciado: "O Brasil vende produtos do campo para muitos países. Sobre as exportações e os principais compradores, assinale a alternativa correta.",
      alternativas: [
        "O Brasil quase não exporta soja, pois toda a produção é usada para fazer ração dentro do próprio país.",
        "A China é a maior compradora da soja e da carne bovina, e os EUA estão entre os que mais compram café.",
        "O Japão compra a maior parte da soja brasileira, e a China não compra nenhum tipo de carne do país.",
        "O café brasileiro é vendido só para os vizinhos da América do Sul, por causa do custo do transporte.",
        "O Brasil exporta sobretudo máquinas agrícolas, e quase nada de grãos, carnes ou outros produtos primários.",
      ],
      correta: 1,
      explicacao:
        "A China é a maior compradora da soja e da carne bovina do Brasil. No café, os Estados Unidos e a Alemanha estão entre os maiores compradores. O país exporta sobretudo produtos primários, como soja, carnes, açúcar, café, milho e celulose.",
      explicacaoErradas:
        "O Brasil é o maior exportador de soja do mundo. A China, e não o Japão, compra a maior parte da soja, e compra muita carne. O café brasileiro vai para dezenas de países, como Estados Unidos, Alemanha e Japão. A pauta é dominada por produtos primários, e não por máquinas.",
      pegadinha: "Achar que o Brasil exporta sobretudo produtos industriais: a pauta do agro é de commodities.",
      conhecimento: "Pauta de exportação: lista dos produtos que um país vende ao exterior.",
    },
    {
      topico: "Pecuária",
      subassunto: "Bovinos",
      dificuldade: 5,
      raciocinio: "Brasil: maior rebanho bovino comercial e maior exportador de carne bovina; MT maior rebanho; MG lidera leite; predomina extensiva a pasto; ILPF (Lei 12.805/2013) recupera pastagens; pecuária = vetor de desmatamento.",
      enunciado: "A criação de gado bovino tem grande peso no Brasil. Sobre essa atividade, assinale a alternativa correta.",
      alternativas: [
        "O Rio Grande do Sul tem o maior rebanho bovino do país, e Mato Grosso quase não cria gado de corte.",
        "A criação intensiva, em confinamento, já é a forma usada pela maior parte do rebanho bovino do país.",
        "O Brasil importa a maior parte da carne bovina que consome, pois o rebanho do país é muito pequeno.",
        "O país tem o maior rebanho comercial; Mato Grosso lidera o rebanho e Minas Gerais lidera o leite.",
        "A expansão dos pastos nunca teve relação com o desmatamento da Amazônia nem com o do Cerrado.",
      ],
      correta: 3,
      explicacao:
        "O Brasil tem o maior rebanho bovino comercial do mundo e é o maior exportador de carne bovina. Mato Grosso tem o maior rebanho, e Minas Gerais lidera a produção de leite. Ainda predomina a criação extensiva, a pasto.",
      explicacaoErradas:
        "Mato Grosso, e não o Rio Grande do Sul, tem o maior rebanho. O confinamento cresce, mas a maior parte do gado ainda é criada a pasto. O Brasil é o maior exportador de carne bovina do mundo. A abertura de pastos é uma das principais causas do desmatamento na Amazônia e no Cerrado.",
      pegadinha: "Supor que o confinamento já domina: a maior parte do gado ainda é criada a pasto.",
      conhecimento: "A integração lavoura-pecuária-floresta (ILPF) ajuda a recuperar pastos degradados.",
    },
    {
      topico: "Pecuária",
      subassunto: "Aves, suínos e agroindústria",
      dificuldade: 5,
      raciocinio: "Aves/suínos: intensivo, sistema de integração (indústria fornece animais, ração, assistência e compra; produtor entra com galpão e trabalho). PR ≈ 1/3 do abate de frango (maior produtor e exportador); SC lidera suínos. Oeste do PR (Cascavel, Toledo): cooperativas; soja/milho → ração; saída por Paranaguá.",
      enunciado: "O Oeste do Paraná, com cidades como Cascavel e Toledo, é um grande polo de carnes. Sobre a criação de aves e suínos e a agroindústria da região, assinale a alternativa correta.",
      alternativas: [
        "Os frangos são criados soltos em pastos enormes, sem ração, como o gado extensivo do Centro-Oeste.",
        "O Paraná compra quase todo o frango que consome de outros estados, pois não tem frigoríficos próprios.",
        "Na integração, a indústria dá animais, ração e assistência e então compra a produção do criador.",
        "A soja e o milho do Paraná são exportados todos em grão e nunca viram ração para aves e suínos.",
        "Santa Catarina abate cerca de um terço do frango do país, e o Paraná lidera a criação de suínos.",
      ],
      correta: 2,
      explicacao:
        "Aves e suínos são criados de forma intensiva, sobretudo no sistema de integração: a agroindústria entrega os animais, a ração e a assistência técnica e compra a produção. O Paraná abate cerca de um terço do frango do país; a soja e o milho viram ração, e a carne sai pelo porto de Paranaguá.",
      explicacaoErradas:
        "Os frangos são criados em galpões, com ração balanceada, e não soltos em pastos. O Paraná é o maior produtor e exportador de frango do país. Boa parte da soja e do milho do estado vira farelo e ração para as granjas. Os estados estão trocados: o Paraná lidera o frango, e Santa Catarina lidera os suínos.",
      pegadinha: "Trocar Paraná (frango) e Santa Catarina (suínos).",
      conhecimento: "Agroindústria: indústria que processa produtos do campo, como frigoríficos e esmagadoras de soja.",
    },
    {
      topico: "Pecuária",
      subassunto: "Ovinos e entraves",
      dificuldade: 4,
      raciocinio: "Ovinos e caprinos: Nordeste (semiárido) maior rebanho; RS tradição na lã. Entraves: pastagens degradadas, desmatamento, doenças (aftosa, brucelose), rastreabilidade, logística. Aftosa: PR livre sem vacinação em 2021; Brasil todo em 2025.",
      enunciado: "Sobre a criação de ovinos e os desafios da pecuária brasileira, assinale a alternativa correta.",
      alternativas: [
        "O Nordeste tem o maior rebanho de ovinos e caprinos, e o país todo é livre de aftosa sem vacinação.",
        "Os ovinos só são criados no Rio Grande do Sul, pois o calor impede essa criação em outras regiões.",
        "A febre aftosa ainda obriga a vacinação de todo o rebanho do país, sem nenhuma área livre do vírus.",
        "A rastreabilidade não interessa aos compradores, que nunca exigem saber a origem da carne importada.",
        "A pecuária não enfrenta nenhum entrave, pois as pastagens do país são todas novas e bem cuidadas.",
      ],
      correta: 0,
      explicacao:
        "O Nordeste tem o maior rebanho de ovinos e caprinos, adaptados ao semiárido. Na sanidade, o Paraná foi reconhecido livre de febre aftosa sem vacinação em 2021, e o Brasil inteiro em 2025, o que abre mercados para a carne.",
      explicacaoErradas:
        "O Rio Grande do Sul tem tradição na lã, mas o maior rebanho de ovinos é do Nordeste. Desde 2025 o país inteiro é reconhecido livre de aftosa sem vacinação. Muitos compradores exigem rastreabilidade, ou seja, saber a origem do animal. Há muitas pastagens degradadas, um dos entraves da pecuária.",
      pegadinha: "Ligar ovinos só ao Sul e à lã: o maior rebanho de ovinos fica no Nordeste.",
      conhecimento: "Rastreabilidade: registro que permite seguir o animal do nascimento até o abate.",
    },
  ],
};
