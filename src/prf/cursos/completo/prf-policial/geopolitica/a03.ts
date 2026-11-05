import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "geopolitica-03",
  resumo: {
    ideia:
      "O Brasil produz de forma desigual entre as regiões. A aula mostra como a economia divide o território, como a indústria avançou por fases e como o país entrou na economia mundial.",
    itens: [
      {
        termo: "Divisão inter-regional do trabalho",
        faz: "Cada região cumpre um papel na produção nacional. Sudeste e Sul concentram o PIB.",
      },
      {
        termo: "Complexos regionais",
        faz: "Amazônia, Nordeste e Centro-Sul. Divisão de Geiger, sem caráter oficial, que corta limites de estados.",
      },
      {
        termo: "Meio técnico-científico-informacional",
        faz: "O conhecimento se incorpora ao território. Milton Santos usa isso para dividir o país.",
      },
      {
        termo: "Até 1930",
        faz: "Surtos pequenos. O capital do café financia as primeiras fábricas de fato.",
      },
      {
        termo: "1930 a 1955",
        faz: "Fase nacionalista: substituição de importações e Estado como agente da indústria.",
      },
      {
        termo: "1956 a 1990",
        faz: "Tripé de capitais estatais, nacionais e transnacionais, a partir de Juscelino Kubitschek.",
        pista: "O Plano de Metas concentrou ainda mais a indústria no Sudeste.",
      },
      {
        termo: "Desde 1990",
        faz: "Globalização: abertura comercial, privatizações e mais competição externa.",
      },
      {
        termo: "Desconcentração",
        faz: "Fábricas saem da Grande São Paulo em busca de incentivos e custos menores. O Sudeste segue na frente.",
      },
    ],
    cuidado:
      "Complexo regional não é região do IBGE. O norte de Minas Gerais fica no Sudeste para o IBGE e no Nordeste geoeconômico.",
  },
  questoes: [
    {
      topico: "Divisão regional",
      subassunto: "Complexos e regiões do IBGE",
      dificuldade: 5,
      raciocinio: "Só os complexos cortam os limites dos estados.",
      enunciado:
        "Uma viatura sai de um município do norte de Minas Gerais, área de semiárido e de baixa renda. Considerando as duas divisões regionais do país, esse município fica",
      alternativas: [
        "no Sudeste do IBGE e no complexo do Centro-Sul, sem diferença",
        "no Nordeste do IBGE e no complexo do Centro-Sul, sem exceção",
        "no Sudeste do IBGE e no complexo do Nordeste, por suas marcas",
        "no Nordeste do IBGE e no complexo do Nordeste, pelo clima",
        "no Centro-Oeste do IBGE e no complexo da Amazônia, pelo relevo",
      ],
      correta: 2,
      explicacao:
        "As regiões do IBGE seguem as divisas dos estados, e Minas Gerais está no Sudeste. Os complexos olham a economia e a história, e o norte de Minas entra no Nordeste geoeconômico.",
      explicacaoErradas:
        "“complexo do Centro-Sul, sem diferença” ignora as marcas da área. “Nordeste do IBGE” erra a região de Minas Gerais. “Centro-Oeste do IBGE” erra as duas divisões.",
      pegadinha: "Aplicar as divisas dos estados aos complexos regionais.",
      conhecimento: "Partes de Mato Grosso e do Maranhão entram no complexo da Amazônia.",
    },
    {
      topico: "Divisão regional",
      subassunto: "Características dos complexos",
      dificuldade: 4,
      raciocinio: "A divisão vem da história e da economia, e não da lei.",
      enunciado: "Sobre a divisão do Brasil em três complexos regionais, é correto dizer que",
      alternativas: [
        "é a divisão oficial adotada hoje pelo IBGE em seus dados",
        "respeita os limites dos estados, para facilitar a estatística oficial",
        "o complexo da Amazônia é o menor e o mais populoso dos três",
        "o Nordeste tem a economia mais forte e mais diversificada",
        "considera a economia e a história, e corta limites de estados",
      ],
      correta: 4,
      explicacao:
        "Os complexos não são oficiais. Agrupam áreas por processos econômicos e históricos e, por isso, não seguem as divisas.",
      explicacaoErradas:
        "“divisão oficial” e “respeita os limites” descrevem as regiões do IBGE. “menor e o mais populoso” inverte, pois a Amazônia é a maior e a menos habitada. “mais forte” cabe ao Centro-Sul.",
      pegadinha: "Achar que os complexos são a divisão oficial do país.",
      conhecimento: "O Centro-Sul reúne a economia mais forte e mais diversificada.",
    },
    {
      topico: "Disparidades regionais",
      subassunto: "Políticas de incentivo",
      dificuldade: 4,
      raciocinio: "Pergunte qual problema regional a medida tenta atacar.",
      enunciado:
        "Para levar indústria a uma área distante dos grandes centros, o governo federal criou em Manaus um polo com incentivos fiscais. Esse caso mostra",
      alternativas: [
        "o fim da concentração da indústria no Centro-Sul do país",
        "uma tentativa de reduzir disparidades regionais com incentivos",
        "a privatização das indústrias de base feita nos anos 1990 no Brasil",
        "a troca do extrativismo por agricultura de exportação",
        "a integração do Nordeste às áreas produtoras de café",
      ],
      correta: 1,
      explicacao: "A Zona Franca de Manaus usa incentivo fiscal para atrair indústria e tentar reduzir a desigualdade entre as regiões.",
      explicacaoErradas:
        "“fim da concentração” exagera, pois o Centro-Sul segue à frente. “privatização” é outro processo. “agricultura de exportação” e “produtoras de café” não têm relação com o polo.",
      pegadinha: "Concluir que o incentivo eliminou a desigualdade.",
      conhecimento: "Norte e Nordeste continuam com as menores parcelas do PIB.",
    },
    {
      topico: "Industrialização",
      subassunto: "Substituição de importações",
      dificuldade: 4,
      raciocinio: "O choque externo abriu espaço para produzir aqui.",
      enunciado:
        "Depois da crise de 1929, a queda das exportações de café reduziu a compra de produtos de fora e abriu espaço à produção interna. Esse modelo é conhecido como",
      alternativas: [
        "abertura comercial, com o corte de tarifas de importação",
        "economia de enclave, ligada só à exportação de minério",
        "reestruturação produtiva, com robôs e fábricas enxutas",
        "substituição de importações, com a indústria voltada ao país",
        "desconcentração industrial, que levou fábricas ao interior do país",
      ],
      correta: 3,
      explicacao: "A substituição de importações marcou a industrialização até a década de 1980, com aumento da produção interna do que antes vinha de fora.",
      explicacaoErradas:
        "“abertura comercial” é dos anos 1990. “economia de enclave” não descreve o caso. “reestruturação produtiva” e “desconcentração industrial” vieram bem depois.",
      pegadinha: "Colocar processos dos anos 1990 no início da indústria.",
      conhecimento: "O capital do café financiou boa parte das primeiras fábricas.",
    },
    {
      topico: "Industrialização",
      subassunto: "Fases",
      dificuldade: 5,
      raciocinio: "Compare quem investia em cada fase.",
      enunciado:
        "A fase iniciada no governo Juscelino Kubitschek diferiu da anterior, de perfil nacionalista, principalmente porque",
      alternativas: [
        "apoiou a indústria em capitais estatais, nacionais e estrangeiros",
        "vetou a entrada de empresas estrangeiras de bens de consumo duráveis",
        "vendeu ao setor privado as grandes siderúrgicas do Estado",
        "levou a maior parte do parque industrial para o Nordeste",
        "retirou o Estado dos setores de energia e de transportes",
      ],
      correta: 0,
      explicacao:
        "A partir de 1956, a indústria se apoiou no tripé de capitais estatais, nacionais e transnacionais, com a chegada de empresas de fora.",
      explicacaoErradas:
        "“vetou a entrada” é o oposto. “vendeu ao setor privado” é dos anos 1990. “para o Nordeste” contraria a concentração no Sudeste. “retirou o Estado” erra, pois o Estado seguiu investindo em base.",
      pegadinha: "Atribuir a JK as privatizações dos anos 1990.",
      conhecimento: "Os governos militares mantiveram esse modelo, com o “milagre” de 1968 a 1973.",
    },
    {
      topico: "Industrialização",
      subassunto: "Efeitos no território",
      dificuldade: 5,
      raciocinio: "A indústria atraiu pessoas para onde já estava.",
      enunciado: "O Plano de Metas acelerou a industrialização. Um efeito territorial dessa política foi",
      alternativas: [
        "a redução imediata das diferenças entre as regiões do país",
        "a queda da migração interna rumo às cidades do Sudeste",
        "a maior concentração industrial no Sudeste e mais migração",
        "o deslocamento das montadoras para a Zona Franca de Manaus",
        "o fim do uso de rodovias no transporte de cargas em todo o Brasil",
      ],
      correta: 2,
      explicacao:
        "O plano acentuou a concentração industrial no Sudeste e agravou os contrastes regionais. As migrações internas cresceram, assim como as metrópoles.",
      explicacaoErradas:
        "“redução imediata” e “queda da migração” invertem o efeito. “Zona Franca de Manaus” não recebeu as montadoras. “fim do uso de rodovias” é o oposto, pois o período favoreceu o modal rodoviário.",
      pegadinha: "Achar que crescer a indústria reduz, por si só, a desigualdade regional.",
      conhecimento: "Migração e crescimento metropolitano andam juntos nessa fase.",
    },
    {
      topico: "Internacionalização",
      subassunto: "Anos 1990",
      dificuldade: 5,
      raciocinio: "A quarta fase é a da globalização.",
      enunciado: "A partir dos anos 1990, a indústria brasileira passou a operar em um cenário marcado por",
      alternativas: [
        "tarifas mais altas, para fechar o mercado a produtos externos",
        "novas estatais, com o Estado à frente da siderurgia nacional",
        "proibição de capitais estrangeiros nos setores de base",
        "reserva de mercado, para proteger produtores de informática",
        "abertura comercial, privatizações e mais competição externa",
      ],
      correta: 4,
      explicacao:
        "Com a globalização, os países emergentes reduziram barreiras ao capital externo. O Brasil abriu o mercado e privatizou grandes indústrias de base, como a CSN.",
      explicacaoErradas:
        "“tarifas mais altas” e “reserva de mercado” descrevem proteção, e não abertura. “novas estatais” e “proibição de capitais” são o contrário das privatizações.",
      pegadinha: "Levar para 1990 a política protecionista das décadas anteriores.",
      conhecimento: "Serviços como transportes, energia e telecomunicações também foram concedidos ao setor privado.",
    },
    {
      topico: "Industrialização",
      subassunto: "Desconcentração",
      dificuldade: 5,
      raciocinio: "A indústria se espalhou, mas o centro continuou forte.",
      enunciado:
        "Uma montadora deixa a Grande São Paulo e abre fábrica em outro estado, atraída por isenção de tributos e mão de obra mais barata. Sobre esse processo, é correto afirmar que",
      alternativas: [
        "acabou com o peso do Sudeste na indústria brasileira",
        "é desconcentração, mas o Sudeste segue como maior polo",
        "é concentração, pois a fábrica segue em uma região rica",
        "é desindustrialização, pois a produção no país acabou",
        "é reserva de mercado, pois a fábrica ainda paga tributos",
      ],
      correta: 1,
      explicacao:
        "A desconcentração leva fábricas para o interior e para outros estados, por incentivos e custos menores, sem retirar do Sudeste o papel de maior polo industrial.",
      explicacaoErradas:
        "“acabou com o peso” exagera. “é concentração” inverte o movimento. “desindustrialização” exigiria perda da indústria no país. “reserva de mercado” não tem relação com o caso.",
      pegadinha: "Ler desconcentração como fim do domínio do Sudeste.",
      conhecimento: "A disputa entre estados por fábricas, com incentivos fiscais, é chamada de guerra fiscal.",
    },
  ],
};
