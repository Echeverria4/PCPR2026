import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-15",
  resumo: {
    ideia:
      "Sintaxe mostra a função de cada parte da frase. Em espanhol, vale olhar o a antes de pessoa, o verbo haber e a construção com se.",
    itens: [
      {
        termo: "Frase e oração",
        faz: "Frase é qualquer enunciado com sentido: ¡Alto! Oração tem verbo.",
      },
      {
        termo: "Sujeito",
        faz: "Concorda com o verbo. Pode estar oculto: llegaron tarde.",
      },
      {
        termo: "Complemento direto",
        faz: "Recebe a ação e troca por lo, la, los, las. Com pessoa, leva a: vi al agente.",
      },
      {
        termo: "Complemento indireto",
        faz: "Indica o destinatário e troca por le, les: le di la multa.",
      },
      {
        termo: "Circunstancial",
        faz: "Tempo, lugar, modo, causa, instrumento e companhia.",
      },
      {
        termo: "Predicado",
        faz: "Nominal com ser, estar ou parecer. Verbal com verbo de ação.",
      },
      {
        termo: "Passiva",
        faz: "Ser + particípio + por: fue detenido por la patrulla. O particípio concorda.",
      },
      {
        termo: "Passiva com se",
        faz: "Se venden neumáticos: o verbo concorda com a coisa.",
      },
      {
        termo: "Subordinadas",
        faz: "Substantiva faz papel de nome, adjetiva qualifica, adverbial dá uma circunstância.",
      },
    ],
    cuidado: "Com haber impessoal não há sujeito: había muchos camiones, com o verbo no singular.",
  },
  questoes: [
    {
      topico: "Complementos",
      subassunto: "Direto e indireto",
      dificuldade: 5,
      raciocinio: "Troque por pronome: lo ou le?",
      enunciado: "Em “El agente detuvo al conductor.” e “El agente dio la multa al conductor.”, o termo “al conductor” é, nessa ordem,",
      alternativas: [
        "complemento direto e complemento indireto",
        "complemento indireto e complemento direto",
        "complemento direto nas duas frases, por ser pessoa",
        "complemento indireto nas duas frases, pelo uso do a",
        "sujeito e complemento circunstancial de companhia",
      ],
      correta: 0,
      explicacao: "Na primeira, vira lo detuvo. Na segunda, la multa é o direto, e al conductor vira le.",
      explicacaoErradas:
        "“indireto e direto” inverte as funções. “por ser pessoa” e “pelo uso do a” olham só para a forma. “sujeito” erra, pois quem age é el agente.",
      pegadinha: "Achar que todo a indica complemento indireto.",
      conhecimento: "O a antes de pessoa no complemento direto é típico do espanhol.",
    },
    {
      topico: "Voz passiva",
      subassunto: "Concordância do particípio",
      dificuldade: 4,
      raciocinio: "O particípio concorda com o novo sujeito.",
      enunciado: "A voz passiva de “La patrulla detuvo a las sospechosas.” é",
      alternativas: [
        "Las sospechosas fue detenido por la patrulla.",
        "Las sospechosas fueron detenido por la patrulla.",
        "Las sospechosas estaban detenidas por la patrulla.",
        "La patrulla fue detenida por las sospechosas de la carretera.",
        "Las sospechosas fueron detenidas por la patrulla.",
      ],
      correta: 4,
      explicacao: "O complemento vira sujeito, ser fica no plural e no mesmo tempo, e o particípio concorda: detenidas.",
      explicacaoErradas:
        "“fue detenido” não concorda. “fueron detenido” deixa o particípio sem concordância. “estaban” indica estado. “La patrulla fue detenida” inverte quem age.",
      pegadinha: "Concordar o verbo e esquecer o particípio.",
      conhecimento: "Nos tempos compostos, o particípio não varia: han detenido.",
    },
    {
      topico: "Haber impessoal",
      subassunto: "Había e llegaron",
      dificuldade: 5,
      raciocinio: "Havia não tem sujeito. Chegaram tem.",
      enunciado: "A tradução correta de “Havia muitos caminhões no posto e chegaram dois agentes.” é",
      alternativas: [
        "Habían muchos camiones en el puesto y llegó dos agentes.",
        "Había muchos camiones en el puesto y llegaron dos agentes.",
        "Habían muchos camiones en el puesto y llegaron dos agentes.",
        "Había muchos camiones en el puesto y llegó dos agentes.",
        "Había muchos camiones en el puesto y había llegado dos agentes de la base.",
      ],
      correta: 1,
      explicacao: "Haber impessoal fica no singular, pois camiones é complemento. Dos agentes é sujeito e pede llegaron.",
      explicacaoErradas:
        "“Habían” faz haber concordar com o complemento. “llegó dos agentes” deixa o verbo sem concordância. “había llegado dos agentes” repete o erro no composto.",
      pegadinha: "Pôr haber no plural por causa de camiones.",
      conhecimento: "O presente impessoal é hay: hay muchos camiones.",
    },
    {
      topico: "Passiva com se",
      subassunto: "Concordância",
      dificuldade: 5,
      raciocinio: "A coisa é o sujeito.",
      enunciado: "Sobre a passiva com se, segue a norma a frase",
      alternativas: [
        "Se vende neumáticos y se revisa frenos en la ruta.",
        "Se venden neumáticos y se revisa frenos en la ruta.",
        "Se vende neumáticos y se revisan frenos en la ruta.",
        "Se venden neumáticos y se revisan frenos en la ruta.",
        "Se vende neumáticos usados y se revisa frenos aquí.",
      ],
      correta: 3,
      explicacao: "Neumáticos e frenos são os sujeitos, e os verbos concordam: venden, revisan.",
      explicacaoErradas:
        "“Se vende neumáticos” e “se revisa frenos” deixam o verbo no singular com sujeito no plural.",
      pegadinha: "Acertar a concordância de um verbo e errar a do outro.",
      conhecimento: "Com pessoas, o uso muda: se detuvo a los sospechosos.",
    },
    {
      topico: "Complementos",
      subassunto: "Circunstanciais",
      dificuldade: 4,
      raciocinio: "Pergunte quando e com quê.",
      enunciado: "Em “Por la noche, el agente revisó el camión con una linterna.”, os termos “por la noche” e “con una linterna” indicam, nessa ordem,",
      alternativas: [
        "tempo e instrumento",
        "lugar e companhia",
        "causa e modo",
        "tempo e companhia",
        "causa e companhia de um colega",
      ],
      correta: 0,
      explicacao: "Por la noche indica quando, e con una linterna indica com que objeto a revisão foi feita.",
      explicacaoErradas:
        "“lugar” e “causa” não cabem em por la noche. “companhia” exigiria pessoa, e linterna é objeto. “modo” indicaria como, e não com quê.",
      pegadinha: "Ler todo con como companhia.",
      conhecimento: "Linterna é a lanterna de mão.",
    },
    {
      topico: "Subordinadas",
      subassunto: "Classificação",
      dificuldade: 5,
      raciocinio: "Troque cada oração por uma palavra.",
      enunciado:
        "Em “El camión que volcó llevaba carga; el agente dijo que volvería si llovía.”, as orações “que volcó”, “que volvería” e “si llovía” são, nessa ordem,",
      alternativas: [
        "substantiva, adjetiva e adverbial",
        "adjetiva, substantiva e adverbial",
        "adverbial, substantiva e adjetiva",
        "adjetiva, adverbial e substantiva",
        "adjetiva, adjetiva e adverbial de condição",
      ],
      correta: 1,
      explicacao: "Que volcó qualifica camión. Que volvería completa dijo. Si llovía dá uma condição.",
      explicacaoErradas:
        "“substantiva, adjetiva” inverte as duas primeiras. “adverbial, substantiva” erra a primeira e a última. “adverbial e substantiva” erra as duas últimas. “adjetiva, adjetiva” erra que volvería.",
      pegadinha: "Dar a mesma função a todo que.",
      conhecimento: "Volcar é tombar um veículo.",
    },
    {
      topico: "Frase e oração",
      subassunto: "Frase sem verbo",
      dificuldade: 4,
      raciocinio: "Sentido completo basta para haver frase.",
      enunciado: "Sobre “¡Alto!”, dita por um agente na estrada, é correto afirmar que",
      alternativas: [
        "é oração, porque toda frase tem um verbo, mesmo oculto",
        "é período composto, pois reúne duas orações em uma palavra",
        "é frase, pois tem sentido completo, mesmo sem verbo",
        "não é frase, pois falta o sujeito exigido pela gramática",
        "não é frase nem oração, pois ninguém fala com uma só palavra",
      ],
      correta: 2,
      explicacao: "A frase é um enunciado com sentido completo. Sem verbo, não é oração, mas segue sendo frase.",
      explicacaoErradas:
        "“é oração” exigiria verbo. “período composto” exigiria duas orações. “falta o sujeito” e “ninguém fala” contrariam o conceito de frase.",
      pegadinha: "Exigir verbo para haver frase.",
      conhecimento: "¡Silencio! e ¡Hola! são frases do mesmo tipo.",
    },
  ],
};
