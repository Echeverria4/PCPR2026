import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geopolitica-02",
  resumo: {
    ideia:
      "O Brasil virou um país urbano em poucas décadas. A aula mostra como isso aconteceu, como as cidades se organizam em rede e que problemas vieram com esse crescimento.",
    itens: [
      {
        termo: "Urbanização",
        faz: "A população urbana cresce mais que a rural e passa a ser maioria.",
        pista: "Não é só a cidade ficar maior.",
      },
      {
        termo: "Ritmo brasileiro",
        faz: "Tardio e acelerado, ligado à indústria depois da Segunda Guerra.",
      },
      {
        termo: "Desmetropolização",
        faz: "Desde os anos 1990, as metrópoles crescem menos que outras cidades. Elas não esvaziam.",
      },
      {
        termo: "Conurbação",
        faz: "Cidades vizinhas se unem fisicamente e passam a funcionar juntas.",
      },
      {
        termo: "Região metropolitana",
        faz: "Criada pelo Estado, por lei complementar.",
      },
      {
        termo: "RIDE",
        faz: "Região integrada que envolve mais de uma unidade da Federação e é criada pela União.",
        pista: "Exemplos: DF e Entorno, Petrolina-Juazeiro e Grande Teresina.",
      },
      {
        termo: "Rede urbana",
        faz: "O IBGE ordena as cidades pela influência que exercem, em cinco níveis, da metrópole ao centro local.",
      },
      {
        termo: "Déficit habitacional",
        faz: "Falta de moradia digna. O peso do aluguel é o maior fator, e há imóveis vagos ao mesmo tempo.",
      },
      {
        termo: "Autossegregação",
        faz: "Grupos de alta renda escolhem se isolar em condomínios fechados.",
      },
    ],
    cuidado:
      "Cidade crescer não prova urbanização. É preciso que a fatia urbana no total da população aumente.",
  },
  questoes: [
    {
      topico: "Urbanização",
      subassunto: "Conceito",
      dificuldade: 5,
      raciocinio: "Olhe a fatia urbana no total, e não o número de pessoas.",
      enunciado:
        "Entre dois censos, a população de um país dobra. A população das cidades e a do campo também dobram, de modo que a fatia urbana no total fica igual. Nesse período, houve",
      alternativas: [
        "urbanização, pois toda cidade maior indica esse processo no país",
        "crescimento urbano sem urbanização, pois a fatia não subiu",
        "desmetropolização, pois o campo cresceu igual às cidades",
        "êxodo rural, pois a população urbana dobrou no período",
        "conurbação, pois as cidades ganharam habitantes e área",
      ],
      correta: 1,
      explicacao:
        "Urbanização é o aumento da parcela urbana na população total. Se a parcela fica igual, as cidades cresceram, mas não houve urbanização.",
      explicacaoErradas:
        "“toda cidade maior” confunde crescimento com urbanização. “desmetropolização” trata do ritmo das metrópoles. “êxodo rural” exigiria saída do campo, e o campo dobrou. “conurbação” exigiria união de malhas.",
      pegadinha: "Tratar crescimento urbano e urbanização como a mesma coisa.",
      conhecimento: "Uma sociedade é urbana quando a população das cidades supera a do campo.",
    },
    {
      topico: "Urbanização",
      subassunto: "Características no Brasil",
      dificuldade: 4,
      raciocinio: "Compare com a Europa, que levou muito mais tempo.",
      enunciado:
        "Em comparação com a urbanização dos países pioneiros da indústria, a urbanização brasileira foi",
      alternativas: [
        "gradual, ao longo de dois séculos, sem a formação de periferias pobres",
        "anterior à indústria e concluída no início do século XIX",
        "dispersa por igual entre todas as regiões do território",
        "tardia e acelerada, ligada à indústria depois da Segunda Guerra",
        "lenta e guiada por um plano nacional de moradia popular",
      ],
      correta: 3,
      explicacao:
        "Em 1950 quase dois terços dos brasileiros viviam no campo. Cerca de vinte anos depois, a maioria já era urbana, com forte concentração nas capitais.",
      explicacaoErradas:
        "“gradual” e “lenta” contrariam a rapidez. “anterior à indústria” erra a época. “dispersa por igual” ignora a concentração nas capitais e regiões metropolitanas.",
      pegadinha: "Achar que o país sempre foi urbano.",
      conhecimento: "A rapidez do processo ajuda a explicar a falta de moradia e de serviços nas periferias.",
    },
    {
      topico: "Dinâmica metropolitana",
      subassunto: "Desmetropolização",
      dificuldade: 5,
      raciocinio: "Perder ritmo é diferente de perder moradores.",
      enunciado:
        "Um estudo mostra que, de 2010 a 2022, cidades de 100 mil a 500 mil habitantes cresceram mais que as grandes capitais, embora estas sigam concentrando renda e serviços. O fenômeno é",
      alternativas: [
        "a desmetropolização, que é perda de ritmo, e não esvaziamento",
        "o êxodo urbano, em que as capitais perdem todos os moradores",
        "a conurbação, em que cidades médias se unem às capitais",
        "a metropolização, que é o avanço do peso das grandes capitais",
        "a macrocefalia, com uma só capital acima de todas as outras",
      ],
      correta: 0,
      explicacao:
        "Desde a década de 1990, as metrópoles crescem em ritmo menor, a favor de cidades médias. Elas não deixam de ser os principais centros.",
      explicacaoErradas:
        "“perdem todos os moradores” exagera. “conurbação” pede união física. “metropolização” é o movimento oposto. “macrocefalia” descreve uma cidade dominante, o que não é o caso.",
      pegadinha: "Ler desmetropolização como queda da população da metrópole.",
      conhecimento: "As periferias metropolitanas também passaram a crescer mais que os núcleos.",
    },
    {
      topico: "Dinâmica metropolitana",
      subassunto: "Conurbação",
      dificuldade: 4,
      raciocinio: "Dois sinais: ligação física e relação funcional.",
      enunciado:
        "Dois municípios vizinhos cresceram até suas malhas urbanas se encontrarem. Hoje as pessoas moram em um e trabalham no outro, e os serviços funcionam em conjunto. Esse processo é chamado de",
      alternativas: [
        "segregação socioespacial, pela mistura de classes sociais",
        "periferização, pois um dos municípios deixou de ser cidade",
        "conurbação, por causa da ligação física e funcional",
        "megalópole, pois basta haver dois municípios vizinhos",
        "rede urbana, que exige ligação física entre as cidades",
      ],
      correta: 2,
      explicacao: "Conurbação é a ligação física das malhas urbanas, acompanhada de relação funcional entre as cidades.",
      explicacaoErradas:
        "“segregação socioespacial” é separação, e não mistura. “periferização” trata do avanço para áreas distantes. “megalópole” une grandes metrópoles. “rede urbana” não exige contato físico.",
      pegadinha: "Trocar conurbação por megalópole.",
      conhecimento: "A megalópole brasileira em formação liga São Paulo e Rio de Janeiro.",
    },
    {
      topico: "Dinâmica metropolitana",
      subassunto: "Região metropolitana e RIDE",
      dificuldade: 5,
      raciocinio: "Mais de um estado envolvido pede a União.",
      enunciado:
        "Uma região reúne municípios de dois estados diferentes em torno de um polo, para planejar serviços comuns. A forma jurídica adequada é",
      alternativas: [
        "região metropolitana, por lei complementar de um dos estados",
        "região metropolitana, por decreto do município mais populoso",
        "consórcio de estados, criado por resolução do IBGE",
        "território federal, criado por lei ordinária da União",
        "região integrada de desenvolvimento, criada pela União",
      ],
      correta: 4,
      explicacao:
        "O Estado institui região metropolitana dentro do seu território. Quando há mais de uma unidade da Federação, a figura é a RIDE, criada pela União.",
      explicacaoErradas:
        "“de um dos estados” falha, pois um Estado não legisla sobre o outro. “decreto do município” não cria região. “resolução do IBGE” não existe para isso. “território federal” é outra figura.",
      pegadinha: "Achar que a região metropolitana pode cruzar a divisa estadual.",
      conhecimento: "A RIDE do Distrito Federal e Entorno é a mais conhecida.",
    },
    {
      topico: "Rede urbana",
      subassunto: "Critério da hierarquia",
      dificuldade: 5,
      raciocinio: "O que manda é o alcance dos serviços.",
      enunciado:
        "Uma cidade atrai moradores de poucos municípios vizinhos, mas depende de um centro maior para serviços complexos. Na pesquisa do IBGE sobre a rede urbana, a posição dela é definida pelo critério",
      alternativas: [
        "do número de habitantes apenas, sem olhar outras ligações",
        "da influência que exerce, pela oferta de bens e serviços",
        "da área do município, pois maior área dá maior nível",
        "da data de fundação, que define a antiguidade do centro",
        "da região do IBGE, igual para todas as cidades de uma área",
      ],
      correta: 1,
      explicacao:
        "A rede urbana é organizada pela influência das cidades. O IBGE usa cinco níveis, da metrópole ao centro local, com 15 metrópoles no estudo mais recente.",
      explicacaoErradas:
        "“número de habitantes apenas” ignora os fluxos. “área do município” e “data de fundação” não medem influência. “região do IBGE” não ordena as cidades.",
      pegadinha: "Achar que cidade grande em população é sempre centro de maior nível.",
      conhecimento: "Os cinco níveis são metrópole, capital regional, centro sub-regional, centro de zona e centro local.",
    },
    {
      topico: "Problemas urbanos",
      subassunto: "Déficit habitacional",
      dificuldade: 5,
      raciocinio: "Falta de moradia digna inclui o peso do aluguel.",
      enunciado:
        "Uma família gasta quase toda a renda com aluguel, em uma cidade com muitos imóveis vazios. Sobre esse quadro, é correto dizer que",
      alternativas: [
        "não há déficit habitacional, pois a família tem onde morar",
        "o déficit mede só casas destruídas por desastres naturais",
        "o Brasil não tem imóveis vagos em número relevante no país",
        "o ônus com aluguel entra no déficit, mesmo com casas vazias",
        "imóvel vago e déficit não existem juntos na mesma cidade",
      ],
      correta: 3,
      explicacao:
        "O aluguel caro é o item que mais pesa no cálculo do déficit. O país tem imóveis vagos em número suficiente para cobri-lo, o que mostra um problema de acesso.",
      explicacaoErradas:
        "“tem onde morar” ignora o ônus. “casas destruídas” reduz demais o conceito. “não tem imóveis vagos” contraria os dados do Censo. “não existem juntos” é justamente a contradição do caso brasileiro.",
      pegadinha: "Achar que déficit é só falta física de casas.",
      conhecimento: "O debate sobre direito à cidade fala de acesso de todos a bens e serviços urbanos.",
    },
    {
      topico: "Problemas urbanos",
      subassunto: "Segregação",
      dificuldade: 4,
      raciocinio: "Quem escolhe se separar?",
      enunciado:
        "Famílias de alta renda deixam bairros centrais e passam a viver em condomínios murados, com serviços próprios e acesso controlado. Esse movimento é",
      alternativas: [
        "a autossegregação, em que o grupo escolhe se isolar",
        "a gentrificação, com a saída dos ricos de áreas valorizadas",
        "a periferização, que leva os pobres às áreas distantes",
        "o direito à cidade, que amplia o acesso de todos aos serviços",
        "a favelização, por causa da ocupação desordenada do solo",
      ],
      correta: 0,
      explicacao: "Na autossegregação, pessoas de alto poder aquisitivo se agrupam em áreas fechadas por escolha própria.",
      explicacaoErradas:
        "“gentrificação” é a chegada de moradores de maior renda a uma área, com a saída dos mais pobres. “periferização” e “favelização” atingem os mais pobres. “direito à cidade” é o oposto do fechamento.",
      pegadinha: "Achar que segregação só atinge os mais pobres.",
      conhecimento: "A ocupação de encostas e margens de rios é outro problema ligado à segregação.",
    },
  ],
};
