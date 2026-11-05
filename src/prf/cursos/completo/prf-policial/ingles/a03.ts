import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "ingles-03",
  resumo: {
    ideia:
      "Conectivos e terminações dão a lógica do texto. A aula mostra como ligar ideias, comparar, marcar modo e tempo, e formar palavras novas.",
    itens: [
      {
        termo: "FANBOYS",
        faz: "For, and, nor, but, or, yet, so: as conjunções que ligam orações independentes.",
      },
      {
        termo: "Contraste",
        faz: "But, however, although e though mostram oposição de ideias.",
      },
      {
        termo: "Consequência",
        faz: "So, therefore e consequently indicam resultado do que veio antes.",
      },
      {
        termo: "Correlativas",
        faz: "Both... and, either... or, neither... nor, not only... but also.",
      },
      {
        termo: "Comparação",
        faz: "As... as compara igualdade. -er e more comparam superioridade. The... the é “quanto mais... mais”.",
      },
      {
        termo: "Advérbios",
        faz: "Respondem como, quando e onde. Hard é muito, e hardly é quase não.",
      },
      {
        termo: "Prefixos e sufixos",
        faz: "Inter- é entre. -less é falta de. -ness forma substantivo de estado.",
      },
      {
        termo: "Funções da linguagem",
        faz: "Referencial informa, emotiva expressa sentimento, e conativa tenta influenciar quem recebe.",
      },
    ],
    cuidado: "Every day é “todos os dias”. Everyday, junto, é adjetivo: “cotidiano”.",
  },
  questoes: [
    {
      topico: "Conjunções",
      subassunto: "Sentido dos conectivos",
      dificuldade: 4,
      raciocinio: "O desvio é resultado do bloqueio.",
      enunciado:
        "Em “The road was closed for repairs; therefore, drivers had to take a detour.”, a palavra “therefore” pode ser trocada, sem mudar o sentido, por",
      alternativas: ["however", "although", "consequently", "unless", "meanwhile"],
      correta: 2,
      explicacao: "Therefore marca a consequência do fato anterior, como consequently e as a result.",
      explicacaoErradas:
        "“however” e “although” marcam oposição. “unless” é “a menos que”. “meanwhile” é “enquanto isso”.",
      pegadinha: "Confundir therefore com however só por serem longos e virem depois do ponto e vírgula.",
      conhecimento: "Thus e hence têm uso parecido em textos formais.",
    },
    {
      topico: "Conjunções",
      subassunto: "Correlativas",
      dificuldade: 4,
      raciocinio: "Neither nega os dois lados.",
      enunciado: "Sobre a frase “Neither the driver nor the passenger had a license.”, é correto concluir que",
      alternativas: [
        "só o passageiro tinha habilitação, e o motorista não tinha",
        "os dois estavam sem habilitação naquele momento",
        "só o motorista tinha habilitação, e o passageiro não tinha",
        "os dois tinham habilitação, mas ela estava vencida",
        "pelo menos um dos dois tinha habilitação naquele momento",
      ],
      correta: 1,
      explicacao: "Neither... nor nega as duas pessoas: nem o motorista nem o passageiro.",
      explicacaoErradas:
        "“só o passageiro” e “só o motorista” tratam neither como either. “vencida” não aparece. “pelo menos um” contraria a negação dupla.",
      pegadinha: "Trocar neither... nor por either... or.",
      conhecimento: "Either... or apresenta duas opções: um ou outro.",
    },
    {
      topico: "Adjetivos",
      subassunto: "Comparativo progressivo",
      dificuldade: 5,
      raciocinio: "The... the liga duas coisas que crescem juntas.",
      enunciado: "Uma campanha diz “The faster you drive, the longer it takes to stop.” A frase afirma que",
      alternativas: [
        "quem dirige mais rápido sempre chega antes ao seu destino final",
        "o carro mais rápido é o mais longo e o que mais para na via",
        "quanto menor a velocidade, mais tempo se leva para parar",
        "dirigir depressa demora mais do que parar no meio do caminho",
        "quanto maior a velocidade, mais tempo se leva para parar",
      ],
      correta: 4,
      explicacao: "A construção the + comparativo, the + comparativo é “quanto mais..., mais...”. Mais velocidade pede mais tempo até parar.",
      explicacaoErradas:
        "“chega antes” não está na frase. “mais longo” lê longer como tamanho do carro. “quanto menor” inverte a relação. “demora mais do que parar” compara o que a frase não compara.",
      pegadinha: "Ler longer só como comprimento.",
      conhecimento: "As... as compara igualdade: as fast as, tão rápido quanto.",
    },
    {
      topico: "Advérbios",
      subassunto: "Hard e hardly",
      dificuldade: 5,
      raciocinio: "Hardly tem sentido quase negativo.",
      enunciado:
        "A frase “The officer worked hard all night and hardly slept before the morning shift.” diz que o policial",
      alternativas: [
        "trabalhou pouco à noite e dormiu bem antes do turno da manhã",
        "trabalhou muito à noite e quase não dormiu antes do turno",
        "trabalhou com dificuldade e dormiu muito depois do turno",
        "quase não trabalhou à noite e dormiu pesado antes do turno",
        "trabalhou muito à noite e dormiu bastante antes do turno da manhã",
      ],
      correta: 1,
      explicacao: "Hard é “muito, com esforço”. Hardly é “quase não”. Os dois se parecem, mas têm sentidos opostos.",
      explicacaoErradas:
        "“trabalhou pouco” e “quase não trabalhou” erram hard. “com dificuldade” e “dormiu bastante” erram hardly.",
      pegadinha: "Achar que hardly é o advérbio de hard, com o mesmo sentido.",
      conhecimento: "Scarcely e barely têm sentido próximo ao de hardly.",
    },
    {
      topico: "Sufixos",
      subassunto: "-less e -ness",
      dificuldade: 4,
      raciocinio: "Separe a raiz da terminação.",
      enunciado:
        "Em “The lights of the old truck were useless, and the driver's carelessness caused a crash.”, os sufixos indicam que",
      alternativas: [
        "-less mostra excesso, e -ness forma advérbio de modo",
        "-less forma comparativo, e -ness marca o plural do adjetivo",
        "-less mostra repetição, e -ness forma verbo a partir de adjetivo",
        "-less mostra ausência, e -ness forma adjetivo a partir de verbo",
        "-less mostra ausência, e -ness forma substantivo de estado",
      ],
      correta: 4,
      explicacao: "Useless é sem uso, inútil. Careless é descuidado, e carelessness é o estado de quem é descuidado: o descuido.",
      explicacaoErradas:
        "“excesso” e “repetição” erram -less. “comparativo” é outra terminação. “forma adjetivo a partir de verbo” erra -ness, que parte de adjetivo e gera substantivo.",
      pegadinha: "Ler careless como “cuidadoso”.",
      conhecimento: "O sufixo -ful faz o contrário de -less: useful é útil.",
    },
    {
      topico: "Advérbios",
      subassunto: "Inversão",
      dificuldade: 5,
      raciocinio: "Advérbio negativo no início puxa o auxiliar para antes do sujeito.",
      enunciado: "Está correta, quanto à ordem das palavras, a frase",
      alternativas: [
        "Never have the officers seen so much stolen cargo.",
        "Never the officers have seen so much stolen cargo.",
        "Never the officers saw so much stolen cargo at once.",
        "Never officers have seen so much stolen cargo at once.",
        "Never had seen the officers so much cargo at once.",
      ],
      correta: 0,
      explicacao: "Quando never abre a frase em tempo perfeito, o auxiliar vem antes do sujeito: never have the officers seen.",
      explicacaoErradas:
        "“the officers have seen” e “officers have seen” não fazem a inversão. “the officers saw” também não. “had seen the officers” separa o sujeito do verbo principal.",
      pegadinha: "Manter a ordem normal depois de never.",
      conhecimento: "Seldom e rarely causam a mesma inversão.",
    },
    {
      topico: "Funções comunicativas",
      subassunto: "Funções da linguagem",
      dificuldade: 4,
      raciocinio: "A mensagem quer mudar a atitude de quem lê?",
      enunciado: "Na frase de um painel de estrada “Slow down and save a life.”, a função da linguagem que predomina é a",
      alternativas: [
        "referencial, que só informa um fato sobre a via",
        "metalinguística, que fala sobre a própria língua",
        "fática, que apenas testa o contato com o leitor",
        "emotiva, que expressa o sentimento de quem escreve o texto",
        "conativa, que busca influenciar a conduta de quem lê",
      ],
      correta: 4,
      explicacao: "A frase usa o imperativo para levar o motorista a agir. Influenciar quem recebe é a marca da função conativa.",
      explicacaoErradas:
        "“referencial” só informaria. “metalinguística” trataria da língua. “fática” testaria o canal. “emotiva” traria o sentimento de quem fala.",
      pegadinha: "Achar que toda placa é referencial.",
      conhecimento: "O uso de imperativo e de vocativo é típico da função conativa.",
    },
  ],
};
