import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "ingles-01",
  resumo: {
    ideia:
      "Inglês na prova é leitura. A aula ensina a usar as palavras parecidas com o português, a desconfiar das falsas e a ler sempre com um objetivo.",
    itens: [
      {
        termo: "Cognato verdadeiro",
        faz: "Parece com o português e significa o mesmo. Exemplo: necessity, necessidade.",
      },
      {
        termo: "Falso cognato",
        faz: "Parece, mas significa outra coisa. Pretend é fingir, e fabric é tecido.",
        pista: "Library é biblioteca. Livraria é bookstore.",
      },
      {
        termo: "Actually",
        faz: "Quer dizer “na verdade”. “Atualmente” é currently.",
      },
      {
        termo: "Contexto",
        faz: "A palavra desconhecida se deduz pelo que vem antes e depois. Traffic pode ser tráfego ou tráfico.",
      },
      {
        termo: "Skimming",
        faz: "Leitura rápida, só para pegar a ideia geral.",
      },
      {
        termo: "Scanning",
        faz: "Olhar rápido em busca de um dado: nome, data ou número.",
      },
      {
        termo: "Ordem da frase",
        faz: "Sujeito, verbo e complemento. Ache o verbo e o resto se organiza.",
      },
      {
        termo: "Texto não verbal",
        faz: "Placa, gráfico e charge. Leia imagem e palavra juntas.",
      },
      {
        termo: "Fatores pragmáticos",
        faz: "Paráfrase diz o mesmo com outras palavras. Paródia imita com humor. Citação repete as palavras exatas.",
      },
    ],
    cuidado: "Leia primeiro a pergunta e só depois o texto. Assim você já sabe o que está procurando.",
  },
  questoes: [
    {
      topico: "Cognatos",
      subassunto: "Falsos cognatos",
      dificuldade: 4,
      raciocinio: "Pretend não é pretender.",
      enunciado:
        "Um relatório sobre uma abordagem traz a frase “The driver pretended to be asleep when the officers approached the car.” Ela informa que o motorista",
      alternativas: [
        "pretendia dormir assim que os policiais deixassem o local",
        "fingiu estar dormindo quando os policiais se aproximaram",
        "tinha a intenção de dormir antes de os policiais chegarem ao carro",
        "dormia de verdade quando os policiais chegaram perto do carro",
        "pediu aos policiais que o deixassem dormir no próprio carro",
      ],
      correta: 1,
      explicacao: "Pretend é fingir. A palavra para “pretender” é intend. Approach é aproximar-se.",
      explicacaoErradas:
        "“pretendia dormir” e “tinha a intenção” caem no falso cognato. “dormia de verdade” é o oposto de fingir. “pediu aos policiais” não está na frase.",
      pegadinha: "Traduzir pretend por pretender.",
      conhecimento: "Falsos cognatos também são chamados de false friends.",
    },
    {
      topico: "Cognatos",
      subassunto: "Actually e eventually",
      dificuldade: 5,
      raciocinio: "Há três falsos amigos na mesma frase.",
      enunciado:
        "A frase “Eventually, the officers realized that the truck was actually empty.” tem a tradução correta em",
      alternativas: [
        "Eventualmente, os policiais fizeram a vistoria do caminhão, hoje vazio.",
        "Às vezes, os policiais perceberam que o caminhão estava atualmente vazio.",
        "Por fim, os policiais realizaram que o caminhão atualmente estava vazio.",
        "Às vezes, os policiais esvaziaram o caminhão que hoje estava parado na pista.",
        "Por fim, os policiais perceberam que o caminhão estava, na verdade, vazio.",
      ],
      correta: 4,
      explicacao:
        "Eventually é por fim, realize é perceber, e actually é na verdade. Nenhuma das três palavras tem o sentido que a aparência sugere.",
      explicacaoErradas:
        "“Eventualmente” e “Às vezes” erram eventually. “fizeram a vistoria” e “esvaziaram” mudam o verbo. “realizaram” e “atualmente” caem em dois falsos cognatos.",
      pegadinha: "Ler eventually como eventualmente.",
      conhecimento: "Para dizer “atualmente”, use currently. Para “eventualmente”, use occasionally.",
    },
    {
      topico: "Textos não verbais",
      subassunto: "Placas",
      dificuldade: 4,
      raciocinio: "Fine, em uma placa de estrada, tem a ver com punição.",
      enunciado:
        "Uma placa em rodovia estrangeira diz “ROAD WORK AHEAD. EXPECT DELAYS. FINES DOUBLED IN WORK ZONE.” O motorista deve entender que",
      alternativas: [
        "há obra à frente, com atrasos e multa em dobro no trecho",
        "a estrada à frente foi fechada, e a obra paga o dobro aos motoristas",
        "o trabalho na pista acabou, e as taxas do pedágio caíram pela metade",
        "há bons motoristas à frente, que ganham prêmio em dobro na zona",
        "a obra terminou, e as multas daquele trecho foram perdoadas",
      ],
      correta: 0,
      explicacao: "Ahead é à frente, delay é atraso, e fine é multa. A placa avisa da obra, do atraso e da punição maior no trecho.",
      explicacaoErradas:
        "“paga o dobro aos motoristas” inverte quem paga. “pedágio” e “prêmio” não estão na placa. “a obra terminou” contraria road work ahead.",
      pegadinha: "Ler fine só como “bom” ou “fino”.",
      conhecimento: "Fee é taxa, e fine é multa. As duas palavras aparecem muito em textos sobre orçamento.",
    },
    {
      topico: "Técnicas de leitura",
      subassunto: "Skimming e scanning",
      dificuldade: 4,
      raciocinio: "Ideia geral ou dado pontual?",
      enunciado:
        "Com pouco tempo de prova, o candidato passa os olhos por um texto longo só para achar em que ano uma lei entrou em vigor. A técnica usada é",
      alternativas: [
        "skimming, leitura rápida para pegar só a ideia geral do texto",
        "paráfrase, reescrita do mesmo trecho com outras palavras",
        "leitura intensiva, palavra por palavra, do início ao fim do texto",
        "scanning, busca rápida de um dado específico no texto",
        "inferência, dedução do sentido de um termo pelo contexto",
      ],
      correta: 3,
      explicacao: "No scanning, os olhos procuram um dado certo, como data, nome ou número. Não há interesse no resto do texto.",
      explicacaoErradas:
        "“skimming” serve para a ideia geral. “paráfrase” é reescrita. “leitura intensiva” não combina com a pressa. “inferência” trata do sentido de um termo.",
      pegadinha: "Trocar skimming por scanning.",
      conhecimento: "Ler a pergunta antes do texto já indica o que procurar.",
    },
    {
      topico: "Contexto",
      subassunto: "Sentido pelo contexto",
      dificuldade: 5,
      raciocinio: "A mesma palavra muda conforme a vizinhança.",
      enunciado:
        "Leia: I. “Heavy traffic delayed the ambulance on the bridge.” II. “Police arrested a gang involved in drug traffic near the border.” III. “The website's traffic doubled after the campaign.” A palavra “traffic” significa, nessa ordem,",
      alternativas: [
        "tráfico ilegal, tráfego de veículos e volume de visitantes",
        "tráfego de veículos, tráfego de veículos e volume de vendas",
        "tráfego de veículos, tráfico ilegal e volume de visitantes",
        "trânsito, tráfico ilegal e passagem de mercadorias pela fronteira",
        "volume de visitantes, tráfico ilegal e tráfego de veículos",
      ],
      correta: 2,
      explicacao:
        "Em I, a palavra trata de veículos na ponte. Em II, de drogas. Em III, do número de visitas ao site. Sem o contexto, não há como decidir.",
      explicacaoErradas:
        "“tráfico ilegal, tráfego de veículos” troca I e II. “volume de vendas” não é o que o site mediu. “passagem de mercadorias” erra III. “volume de visitantes” no início erra I.",
      pegadinha: "Fixar um único sentido para traffic.",
      conhecimento: "Quanto mais contexto, mais fácil decidir o sentido de uma palavra com vários usos.",
    },
    {
      topico: "Fatores pragmáticos",
      subassunto: "Paráfrase, citação e paródia",
      dificuldade: 5,
      raciocinio: "Paráfrase mantém a ideia e troca as palavras.",
      enunciado: "Frase original: “The officer said the road was closed.” É uma paráfrase dessa frase:",
      alternativas: [
        "“The road was closed,” said the officer on the radio.",
        "The officer reported that drivers could not use the road.",
        "The officer said the road was open to all drivers again.",
        "The officer closed the road himself and then left the area.",
        "The officer said the toad was closed, and the frog agreed.",
      ],
      correta: 1,
      explicacao: "A paráfrase diz o mesmo com outras palavras. Dizer que a via não podia ser usada mantém a informação.",
      explicacaoErradas:
        "“The road was closed,” repete as palavras, como uma citação. “open to all drivers” inverte o sentido. “closed the road himself” traz outro fato. “the toad was closed” brinca com a frase, como uma paródia.",
      pegadinha: "Achar que a citação direta é uma paráfrase.",
      conhecimento: "Estilização imita o estilo de um autor, sem a intenção de zombar.",
    },
  ],
};
