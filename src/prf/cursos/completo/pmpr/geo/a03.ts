import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geo-a03",
  resumo: {
    ideia:
      "Urbanização é o aumento da parcela da população que vive nas cidades. No Brasil, ela foi tardia, rápida e sem planejamento. Esta aula traz as causas e os problemas desse processo, os conceitos de cidade (conurbação, megacidade, cidade global, gentrificação...) e as regras do espaço metropolitano.",
    itens: [
      {
        termo: "Urbanização × crescimento urbano",
        faz: "Urbanização é a população urbana crescer mais rápido que a rural, aumentando a sua parcela no total (taxa de urbanização). Se cidade e campo crescem no mesmo ritmo, as cidades ficam maiores, mas não há urbanização.",
        pista: "Taxa de urbanização = população urbana ÷ população total × 100.",
      },
      {
        termo: "Urbanização no Brasil",
        faz: "Tardia e acelerada: a população urbana passou a ser maioria entre os censos de 1960 e 1970. Em 2010, mais de 84% dos brasileiros viviam em áreas urbanas.",
      },
      {
        termo: "Causas: repulsão e atração",
        faz: "No campo, a mecanização e a concentração de terras expulsaram trabalhadores (fatores de repulsão). Na cidade, a indústria, o comércio e os serviços ofereciam emprego, escola e saúde (fatores de atração).",
      },
      {
        termo: "Problemas urbanos",
        faz: "Favelas e periferias sem infraestrutura, segregação socioespacial (ricos e pobres separados pelo preço da terra), trânsito, violência e enchentes, agravadas pelo asfalto e pelo concreto que impermeabilizam o solo.",
      },
      {
        termo: "Ilha de calor × inversão térmica",
        faz: "Ilha de calor: o centro da cidade fica mais quente que os arredores, por causa do asfalto, do concreto e da falta de verde. Inversão térmica: uma camada de ar frio fica presa perto do solo sob outra mais quente, e a poluição não se dispersa; é mais comum no inverno.",
      },
      {
        termo: "Favelas e comunidades urbanas",
        faz: "Áreas de ocupação irregular, com falta de serviços públicos e de título da terra. Desde 2024, o IBGE usa o nome 'favelas e comunidades urbanas' no lugar do antigo 'aglomerados subnormais'.",
      },
      {
        termo: "Conurbação e megalópole",
        faz: "Conurbação: cidades vizinhas crescem até formar uma só mancha urbana. Megalópole: várias metrópoles ligadas entre si, como a faixa de Boston a Washington (EUA) e a de Tóquio a Osaka. O eixo Rio–São Paulo é apontado como megalópole em formação.",
      },
      {
        termo: "Megacidade × cidade global",
        faz: "Megacidade é a aglomeração com mais de 10 milhões de habitantes: conta o tamanho. Cidade global é a que comanda fluxos da economia mundial (bolsas, sedes de empresas, finanças): conta a função. São Paulo é as duas coisas.",
      },
      {
        termo: "Metrópole, macrocefalia e periurbanização",
        faz: "Metrópole: cidade grande que polariza uma região. Macrocefalia urbana: uma só cidade concentra população e serviços muito acima das outras do país. Periurbanização: a urbanização das áreas rurais em volta das cidades, com usos misturados.",
      },
      {
        termo: "Gentrificação",
        faz: "Um bairro antigo ou degradado recebe investimento e se valoriza; com aluguéis e preços mais altos, os moradores pobres são empurrados para fora e dão lugar a gente de renda maior.",
      },
      {
        termo: "Região metropolitana × RIDE",
        faz: "Região metropolitana: criada por lei complementar estadual (CF, art. 25, § 3º), para funções públicas de interesse comum, como transporte e saneamento. RIDE: criada pela União, quando os municípios ficam em mais de uma unidade da federação, como a do Distrito Federal e Entorno.",
        pista: "As primeiras regiões metropolitanas foram criadas pela União em 1973 e 1974; desde 1988, quem cria são os estados.",
      },
      {
        termo: "Rede e hierarquia urbana",
        faz: "As cidades formam uma rede, com mais e menos influência. No estudo REGIC do IBGE, São Paulo é a grande metrópole nacional; Rio de Janeiro e Brasília são metrópoles nacionais; abaixo vêm metrópoles, capitais regionais, centros sub-regionais, centros de zona e centros locais.",
        pista: "Hoje uma cidade pequena pode se ligar direto a uma metrópole, sem passar pelos níveis do meio.",
      },
      {
        termo: "Estatuto da Cidade e Estatuto da Metrópole",
        faz: "Estatuto da Cidade (Lei 10.257/2001): o plano diretor é obrigatório para cidades com mais de 20 mil habitantes e deve ser revisto pelo menos a cada 10 anos. Estatuto da Metrópole (Lei 13.089/2015): regras para a gestão conjunta das regiões metropolitanas, com um plano de desenvolvimento urbano integrado.",
      },
    ],
  },
  questoes: [
    {
      topico: "Urbanização",
      subassunto: "Taxa de urbanização",
      dificuldade: 5,
      raciocinio: "Antes: 60 ÷ 100 = 60%. Depois: 66 ÷ 110 = 60%. As duas cresceram 10%: as cidades ficaram maiores, mas a taxa não mudou, logo não houve urbanização no sentido técnico.",
      enunciado: "Em um país, a população urbana passou de 60 para 66 milhões em dez anos, e a rural, de 40 para 44 milhões. Sobre a urbanização desse país no período, assinale a alternativa correta.",
      alternativas: [
        "Houve forte urbanização, pois a população das cidades ganhou 6 milhões de pessoas em apenas uma década.",
        "A taxa de urbanização subiu para 66%, pois esse é o número de milhões que agora vive nas áreas urbanas.",
        "A taxa de urbanização ficou em 60%, pois cidade e campo cresceram no mesmo ritmo, de 10% na década.",
        "Houve êxodo rural, pois a população do campo ficou menor que a das cidades durante todo o período.",
        "A taxa de urbanização caiu, pois o campo ganhou 4 milhões de pessoas, mais do que as cidades na década.",
      ],
      correta: 2,
      explicacao:
        "A taxa de urbanização é a parcela urbana do total. No início, 60 de 100 milhões (60%); no fim, 66 de 110 milhões (também 60%). Cidade e campo cresceram 10%: as cidades ficaram maiores, mas a parcela urbana não mudou.",
      explicacaoErradas:
        "Crescer em número não basta: urbanização é aumentar a parcela urbana. Os 66 milhões precisam ser divididos pelo total de 110 milhões. Êxodo rural é a saída do campo, e aqui o campo cresceu. As cidades ganharam 6 milhões, mais que os 4 milhões do campo, e a taxa não caiu.",
      pegadinha: "Confundir crescimento das cidades com urbanização: o que importa é a parcela urbana no total.",
      conhecimento: "Um país pode ter cidades crescendo e, ainda assim, taxa de urbanização parada.",
    },
    {
      topico: "Urbanização",
      subassunto: "Urbanização brasileira",
      dificuldade: 4,
      raciocinio: "Brasil: urbanização tardia (século XX) e acelerada. Censo 1960: cerca de 45% urbano; 1970: cerca de 56%. Causas: êxodo rural + industrialização. Sem planejamento: favelas e periferias.",
      enunciado: "A urbanização brasileira foi tardia e muito rápida quando comparada à dos países que se industrializaram primeiro. Sobre esse processo, assinale a alternativa correta.",
      alternativas: [
        "A população urbana já era maioria no Brasil no fim do século XIX, graças ao trabalho nas grandes fazendas de café.",
        "O processo foi lento e planejado, o que evitou a formação de favelas e de periferias nas grandes cidades.",
        "A urbanização começou pelo Norte e pelo Centro-Oeste, as regiões mais urbanas do país até o ano de 1950.",
        "A população rural cresceu mais que a urbana entre 1950 e 1980, quando a indústria perdeu força no país.",
        "A população urbana passou a ser maioria entre os anos 1960 e 1970, com o êxodo rural e a industrialização.",
      ],
      correta: 4,
      explicacao:
        "Até meados do século XX, a maioria dos brasileiros vivia no campo. Com a industrialização e o êxodo rural, as cidades cresceram depressa, e a população urbana passou a ser maioria entre os censos de 1960 e 1970.",
      explicacaoErradas:
        "No fim do século XIX, o Brasil era rural, e o café empregava gente no campo. O processo foi rápido e sem planejamento, o que gerou favelas e periferias. O Sudeste puxou a urbanização. Entre 1950 e 1980, as cidades cresceram muito mais que o campo, com a indústria em expansão.",
      pegadinha: "Achar que o Brasil já era urbano no século XIX: a virada só ocorreu nos anos 1960.",
      conhecimento: "Em 2010, mais de 84% dos brasileiros viviam em áreas urbanas.",
    },
    {
      topico: "Conceitos urbanos",
      subassunto: "Megacidade, cidade global e megalópole",
      dificuldade: 5,
      raciocinio: "Megacidade = mais de 10 milhões (tamanho). Cidade global = comando na economia mundial (função). Megalópole = várias metrópoles ligadas (Boston–Washington; Rio–SP em formação).",
      enunciado: "Megacidade, cidade global e megalópole são conceitos parecidos, mas medem coisas diferentes. Sobre eles, assinale a alternativa correta.",
      alternativas: [
        "Uma cidade global se define pelo comando que exerce na economia mundial, e não apenas pelo seu tamanho.",
        "Toda megacidade é uma cidade global, pois ter mais de 10 milhões de habitantes garante comando econômico.",
        "Megalópole é uma única cidade com mais de 20 milhões de habitantes, como Tóquio e a capital paulista.",
        "Megacidade é o nome dado à união de várias metrópoles, como a faixa que vai de Boston até Washington.",
        "O eixo entre o Rio de Janeiro e São Paulo não tem relação com o conceito, pois as metrópoles são distantes.",
      ],
      correta: 0,
      explicacao:
        "A cidade global é definida pela função: concentra bolsas de valores, sedes de grandes empresas e serviços financeiros e comanda fluxos da economia mundial. O tamanho da população, sozinho, não basta.",
      explicacaoErradas:
        "Muitas megacidades têm pouco peso na economia mundial, então nem toda megacidade é global. Megalópole não é uma cidade só, e sim várias metrópoles ligadas. A união de metrópoles é a megalópole, e não a megacidade. O eixo Rio–São Paulo é apontado como megalópole em formação.",
      pegadinha: "Trocar megacidade (tamanho, mais de 10 milhões) por megalópole (várias metrópoles ligadas).",
      conhecimento: "Nova York, Londres e Tóquio estão entre as cidades globais de maior influência; São Paulo também aparece nessas listas.",
    },
    {
      topico: "Conceitos urbanos",
      subassunto: "Conurbação, gentrificação e macrocefalia",
      dificuldade: 4,
      raciocinio: "I: cidades vizinhas se unem = conurbação. II: valorização expulsa os pobres = gentrificação. III: uma cidade concentra muito acima das outras = macrocefalia urbana.",
      enunciado: "Considere: I) duas cidades vizinhas crescem até se unirem em uma só mancha urbana; II) um bairro antigo se valoriza e expulsa os moradores pobres; III) uma única cidade concentra população e serviços muito acima das demais do país. Assinale a alternativa correta.",
      alternativas: [
        "I é periurbanização, II é conurbação e III é megalópole, pois todos tratam da expansão física das cidades.",
        "I é gentrificação, II é macrocefalia urbana e III é conurbação, pois todos envolvem a disputa por espaço.",
        "I é megalópole, II é periurbanização e III é cidade global, pois as cidades passam a ter funções novas.",
        "I é conurbação, II é gentrificação e III é macrocefalia urbana, mais típica de países em desenvolvimento.",
        "I é macrocefalia urbana, II é conurbação e III é gentrificação, pois a renda define onde cada um mora.",
      ],
      correta: 3,
      explicacao:
        "Quando cidades vizinhas crescem até se tocarem, há conurbação. Quando um bairro se valoriza e os pobres são empurrados para fora, há gentrificação. Quando uma cidade concentra população e serviços muito acima das outras do país, há macrocefalia urbana.",
      explicacaoErradas:
        "Periurbanização é a urbanização das áreas rurais em volta da cidade, e não a união de duas cidades. Gentrificação trata da troca de moradores, e não da união de cidades. Megalópole exige várias metrópoles ligadas. Macrocefalia é o peso exagerado de uma só cidade, e não a valorização de um bairro.",
      pegadinha: "Confundir conurbação (cidades que se unem) com periurbanização (cidade avançando sobre o campo).",
      conhecimento: "A macrocefalia urbana é comum em países onde a capital concentra a indústria, o governo e os serviços.",
    },
    {
      topico: "Espaço metropolitano",
      subassunto: "Região metropolitana e RIDE",
      dificuldade: 5,
      raciocinio: "RM: lei complementar estadual (CF, art. 25, § 3º), municípios limítrofes de um estado. RIDE: União, quando envolve mais de uma unidade da federação (ex.: DF e Entorno). Primeiras RMs: União, 1973–1974.",
      enunciado: "Para planejar serviços comuns a municípios vizinhos, o Brasil usa a região metropolitana e a Região Integrada de Desenvolvimento (RIDE). Sobre elas, assinale a alternativa correta.",
      alternativas: [
        "Desde 1988, as regiões metropolitanas são criadas por lei ordinária federal, aprovada pelo Congresso Nacional.",
        "A região metropolitana nasce de lei complementar estadual; a RIDE, da União, com mais de uma unidade federada.",
        "A RIDE só pode reunir municípios de um mesmo estado, como a do Distrito Federal, que não inclui outros estados.",
        "As primeiras regiões metropolitanas surgiram depois de 1988, criadas pelos estados com base na nova Constituição.",
        "Região metropolitana e RIDE são o mesmo instituto; a diferença está só no número de municípios de cada uma.",
      ],
      correta: 1,
      explicacao:
        "Pela Constituição (art. 25, § 3º), os estados criam regiões metropolitanas por lei complementar, reunindo municípios vizinhos para funções comuns, como transporte e saneamento. Quando os municípios ficam em mais de uma unidade da federação, a União cria uma RIDE, como a do Distrito Federal e Entorno.",
      explicacaoErradas:
        "Desde 1988, quem cria região metropolitana é o estado, e não a União. A RIDE existe justamente para juntar mais de uma unidade da federação; a do DF inclui municípios de Goiás e de Minas Gerais. As primeiras regiões metropolitanas são de 1973 e 1974, criadas pela União. Os dois institutos diferem em quem cria e em quem participa.",
      pegadinha: "Dizer que a União cria as regiões metropolitanas: isso valia antes de 1988; hoje são os estados.",
      conhecimento: "Há também RIDEs no Nordeste, como a de Petrolina (PE) e Juazeiro (BA).",
    },
    {
      topico: "Espaço metropolitano",
      subassunto: "Rede e hierarquia urbana",
      dificuldade: 5,
      raciocinio: "REGIC (IBGE): Grande Metrópole Nacional = São Paulo; Metrópoles Nacionais = Rio e Brasília; depois metrópoles, capitais regionais, centros sub-regionais, de zona e locais. Critério: influência (gestão, serviços), não só população. Hoje há ligações diretas.",
      enunciado: "O IBGE classifica as cidades pela influência que exercem sobre as outras, no estudo Regiões de Influência das Cidades (REGIC). Sobre essa hierarquia, assinale a alternativa correta.",
      alternativas: [
        "A posição de uma cidade depende só do número de habitantes, sem levar em conta serviços e órgãos de gestão.",
        "Brasília fica no último nível da hierarquia, pois a sua influência se limita aos órgãos do governo federal.",
        "Hoje uma cidade pequena só se liga a uma metrópole passando antes por uma capital regional, sem atalhos.",
        "São Paulo está no topo como grande metrópole nacional; Rio de Janeiro e Brasília são metrópoles nacionais.",
        "Os centros locais ficam no topo da hierarquia, pois atendem a população de modo mais direto e mais próximo.",
      ],
      correta: 3,
      explicacao:
        "No REGIC, São Paulo ocupa sozinha o topo, como grande metrópole nacional. Logo abaixo, como metrópoles nacionais, vêm o Rio de Janeiro e Brasília. Depois aparecem as demais metrópoles, as capitais regionais, os centros sub-regionais, os centros de zona e os centros locais.",
      explicacaoErradas:
        "A classificação mede a influência (serviços, empresas, órgãos de gestão), e não só a população. Brasília é metrópole nacional, por causa do peso do governo federal. Com a internet e os transportes, uma cidade pequena pode se ligar direto a uma metrópole. Os centros locais ficam na base, porque atendem só a própria área.",
      pegadinha: "Achar que a rede urbana é rígida, degrau por degrau: hoje há ligações diretas entre os níveis.",
      conhecimento: "A edição mais recente do REGIC usa dados de 2018 e foi publicada pelo IBGE em 2020.",
    },
    {
      topico: "Problemas urbanos",
      subassunto: "Ilha de calor e inversão térmica",
      dificuldade: 4,
      raciocinio: "Ilha de calor: centro mais quente (asfalto, concreto, pouco verde). Inversão térmica: ar frio preso junto ao solo sob camada quente; poluição não sobe; mais comum no inverno, de madrugada e de manhã.",
      enunciado: "Grandes cidades criam problemas ambientais próprios. Sobre a ilha de calor e a inversão térmica, assinale a alternativa correta.",
      alternativas: [
        "A ilha de calor é mais comum na zona rural, onde a falta de prédios deixa o sol aquecer mais o solo exposto.",
        "Na inversão térmica, o ar frio fica preso perto do solo sob uma camada quente, e a poluição não se espalha.",
        "A inversão térmica é mais comum no verão, quando o calor forte faz o ar subir depressa e leva a poluição.",
        "A ilha de calor surge porque as áreas verdes absorvem muito calor e o devolvem à cidade durante a noite.",
        "A inversão térmica é causada pelo buraco na camada de ozônio, que deixa entrar mais calor sobre as cidades.",
      ],
      correta: 1,
      explicacao:
        "Normalmente, o ar perto do solo é mais quente e sobe, levando a poluição. Na inversão térmica, uma camada de ar frio fica presa embaixo de outra mais quente; o ar não sobe e a poluição se acumula perto do chão. Ela é mais comum no inverno, de madrugada e no começo da manhã.",
      explicacaoErradas:
        "A ilha de calor é típica dos centros urbanos, com asfalto e concreto. No verão, o ar quente sobe com facilidade, o que dificulta a inversão. As áreas verdes refrescam a cidade, e a falta delas é que esquenta o centro. A inversão é um fenômeno da atmosfera perto do solo, sem relação com a camada de ozônio.",
      pegadinha: "Achar que a inversão térmica é coisa do verão: ela é mais comum no inverno.",
      conhecimento: "Em dias de inversão térmica, crescem os casos de problemas respiratórios nas grandes cidades.",
    },
    {
      topico: "Problemas urbanos",
      subassunto: "Favelas e segregação",
      dificuldade: 4,
      raciocinio: "Segregação socioespacial = separação por renda, pelo preço da terra (não por lei). Favelas: antigas (fim do século XIX no Rio). IBGE: 'favelas e comunidades urbanas' desde 2024, no lugar de 'aglomerados subnormais'.",
      enunciado: "O crescimento rápido e sem planejamento das cidades brasileiras deixou marcas na moradia. Sobre favelas e segregação socioespacial, assinale a alternativa correta.",
      alternativas: [
        "A segregação socioespacial é a divisão da cidade em bairros por lei, que proíbe os pobres de morar no centro.",
        "As favelas surgiram só depois dos anos 2000, com a expansão das cidades médias do interior do país.",
        "O IBGE deixou de contar as favelas, pois considera que todas elas foram regularizadas pelo poder público.",
        "A favelização ocorre porque a população pobre prefere morar longe do trabalho, nas periferias das metrópoles.",
        "Desde 2024, o IBGE usa 'favelas e comunidades urbanas' no lugar do antigo termo 'aglomerados subnormais'.",
      ],
      correta: 4,
      explicacao:
        "O IBGE trocou o nome técnico 'aglomerados subnormais', considerado pejorativo, por 'favelas e comunidades urbanas'. O termo designa áreas de ocupação irregular, com falta de serviços públicos e de título da terra.",
      explicacaoErradas:
        "A segregação socioespacial vem do preço da terra e da renda, e não de uma lei. As favelas são antigas no Brasil: no Rio de Janeiro, surgiram no fim do século XIX. O IBGE continua contando essas áreas. A população pobre vai para longe porque não consegue pagar a moradia perto do trabalho, e não por escolha.",
      pegadinha: "Achar que a segregação é imposta por lei: no Brasil, ela vem sobretudo do mercado de terras.",
      conhecimento: "O Censo 2022 foi o primeiro a divulgar os dados com o nome 'favelas e comunidades urbanas'.",
    },
    {
      topico: "Espaço metropolitano",
      subassunto: "Estatuto da Cidade e da Metrópole",
      dificuldade: 5,
      raciocinio: "Estatuto da Cidade (Lei 10.257/2001): plano diretor obrigatório acima de 20 mil habitantes (CF, art. 182, § 1º), revisão ao menos a cada 10 anos. Estatuto da Metrópole (Lei 13.089/2015): governança interfederativa e plano integrado. Estados seguem criando as RMs.",
      enunciado: "A política urbana brasileira tem base na Constituição e em duas leis: o Estatuto da Cidade e o Estatuto da Metrópole. Sobre essas normas, assinale a alternativa correta.",
      alternativas: [
        "O plano diretor é obrigatório para todas as cidades do país, seja qual for o número de habitantes de cada uma.",
        "O Estatuto da Metrópole proibiu os estados de criar regiões metropolitanas, tarefa que passou a ser da União.",
        "O plano diretor é obrigatório nas cidades com mais de 20 mil habitantes e é revisto ao menos a cada 10 anos.",
        "O Estatuto da Cidade criou as regiões metropolitanas do Brasil e acabou com as que existiam antes dele.",
        "O Estatuto da Metrópole, de 2001, trata só do transporte coletivo e não prevê plano integrado para a região.",
      ],
      correta: 2,
      explicacao:
        "A Constituição (art. 182, § 1º) torna o plano diretor obrigatório para cidades com mais de 20 mil habitantes, e o Estatuto da Cidade (Lei 10.257/2001) manda revisá-lo pelo menos a cada 10 anos. É o instrumento básico da política de desenvolvimento e de expansão urbana.",
      explicacaoErradas:
        "O plano diretor não é exigido de toda cidade: a regra parte dos 20 mil habitantes, com outros casos previstos em lei. O Estatuto da Metrópole não tirou dos estados o poder de criar regiões metropolitanas. O Estatuto da Cidade não criou nem extinguiu regiões metropolitanas. O Estatuto da Metrópole é de 2015 e prevê um plano de desenvolvimento urbano integrado.",
      pegadinha: "Trocar as datas: o Estatuto da Cidade é de 2001, e o da Metrópole, de 2015.",
      conhecimento: "O Estatuto da Cidade também exige plano diretor de cidades em regiões metropolitanas e em áreas de interesse turístico.",
    },
    {
      topico: "Urbanização",
      subassunto: "Causas do êxodo rural",
      dificuldade: 4,
      raciocinio: "Repulsão: mecanização, concentração fundiária, baixa renda, secas. Atração: indústria, comércio, serviços, escola, saúde. Não houve reforma agrária ampla; as cidades não tinham moradia planejada.",
      enunciado: "A urbanização acelerada do Brasil resultou de fatores que expulsavam gente do campo e de outros que atraíam para a cidade. Sobre esses fatores, assinale a alternativa correta.",
      alternativas: [
        "A mecanização e a concentração de terras expulsaram trabalhadores, e a indústria e os serviços os atraíram.",
        "A reforma agrária ampla dos anos 1950 deu terra a todos, e por isso as pessoas venderam os lotes e partiram.",
        "A falta de máquinas no campo obrigou os fazendeiros a mandar os trabalhadores para as indústrias da cidade.",
        "As cidades atraíram migrantes por terem moradia barata e planejada, com saneamento em todos os bairros.",
        "O êxodo rural foi causado só pelas secas do Nordeste, sem relação com a modernização da agricultura do país.",
      ],
      correta: 0,
      explicacao:
        "No campo, as máquinas substituíram trabalhadores, e a terra ficou concentrada em grandes propriedades: são os fatores de repulsão. Nas cidades, a indústria, o comércio e os serviços ofereciam emprego, escola e saúde: são os fatores de atração.",
      explicacaoErradas:
        "O Brasil nunca fez uma reforma agrária ampla nos anos 1950. Foi a chegada das máquinas, e não a falta delas, que dispensou mão de obra. As cidades não tinham moradia planejada para todos, e daí surgiram favelas e periferias. A seca pesou no Nordeste, mas a modernização do campo atingiu o país inteiro.",
      pegadinha: "Achar que o êxodo rural foi causado só pela seca: a mecanização e a concentração de terras pesaram muito.",
      conhecimento: "A modernização do campo sem reforma agrária é chamada por muitos autores de modernização conservadora.",
    },
  ],
};
