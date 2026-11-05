import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-07",
  resumo: {
    ideia:
      "O gênero em espanhol nem sempre acompanha o português. A prova gosta de palavras que trocam de gênero, que mudam de sentido com o artigo e que enganam pela terminação.",
    itens: [
      {
        termo: "Masculinos por grupo",
        faz: "Números, dias, meses, pontos cardeais, rios, lagos e oceanos. Também as palavras em -aje.",
      },
      {
        termo: "Femininos por grupo",
        faz: "Letras do alfabeto, ilhas e cidades em -a. Também as palavras em -ción, -dad e -umbre.",
      },
      {
        termo: "Heterogenéricos",
        faz: "Gênero diferente do português: el color, el viaje, la leche, la sal, la nariz.",
      },
      {
        termo: "Parecem femininos",
        faz: "Terminam em -a e são masculinos: el problema, el mapa, el día.",
      },
      {
        termo: "Parecem masculinos",
        faz: "Terminam em -o e são femininos: la mano, la moto, la foto.",
      },
      {
        termo: "Bigêneros",
        faz: "O artigo muda o sentido: el capital é dinheiro, la capital é a cidade. El orden é sequência, la orden é mandado.",
      },
      {
        termo: "Epicenos",
        faz: "Uma só forma para os dois sexos: el cocodrilo macho, el cocodrilo hembra. La víctima vale para homem e mulher.",
      },
      {
        termo: "Plural",
        faz: "Vogal + s, consoante + es. O z vira c: luz, luces. Lunes e crisis não mudam.",
      },
    ],
    cuidado: "Camiones perde o acento no plural, porque a sílaba forte deixa de ser a última.",
  },
  questoes: [
    {
      topico: "Heterogenéricos",
      subassunto: "Leche, sal e viaje",
      dificuldade: 4,
      raciocinio: "Esqueça o gênero do português.",
      enunciado: "Complete, na ordem: “___ leche, ___ sal y ___ viaje.”",
      alternativas: ["el, el, la", "la, la, el", "la, el, el", "el, la, la", "el, el, el"],
      correta: 1,
      explicacao: "Leche e sal são femininas em espanhol, e viaje é masculina, ao contrário do português.",
      explicacaoErradas:
        "“el, el, la” copia o gênero do português. “la, el, el” acerta leche e erra sal. “el, la, la” erra leche e viaje. “el, el, el” erra as duas femininas.",
      pegadinha: "Traduzir o artigo junto com a palavra.",
      conhecimento: "Sangre, nariz e costumbre também são femininas.",
    },
    {
      topico: "Heterogenéricos",
      subassunto: "Palavras em -aje",
      dificuldade: 4,
      raciocinio: "O final -aje indica masculino.",
      enunciado: "Palavras em -aje costumam ser masculinas em espanhol. Segue essa regra a frase",
      alternativas: [
        "La viaje terminó en la peaje y la paisaje cambió.",
        "El viaje terminó en la peaje y la paisaje cambió.",
        "El viaje terminó en el peaje y la paisaje cambió.",
        "El viaje terminó en el peaje y el paisaje cambió.",
        "Lo viaje terminó en lo peaje y lo paisaje cambió de color.",
      ],
      correta: 3,
      explicacao: "Viaje, peaje e paisaje terminam em -aje e são masculinas. Em português, viagem e paisagem são femininas.",
      explicacaoErradas:
        "“La viaje” e “la paisaje” copiam o gênero do português. “la peaje” erra a palavra que significa pedágio. “Lo viaje” usa o neutro antes de substantivo.",
      pegadinha: "Levar o feminino de viagem e paisagem para o espanhol.",
      conhecimento: "Garaje e equipaje seguem o mesmo padrão.",
    },
    {
      topico: "Bigêneros",
      subassunto: "La orden e el orden",
      dificuldade: 5,
      raciocinio: "O artigo decide o sentido.",
      enunciado: "Em “La orden del juez alteró el orden de la fila.”, as duas palavras significam, nessa ordem,",
      alternativas: [
        "sequência e mandado",
        "pedido de compra e organização religiosa",
        "sequência e sequência, sem diferença",
        "mandado e mandado, apenas repetido na frase",
        "mandado e sequência",
      ],
      correta: 4,
      explicacao: "La orden é o mandado, a determinação. El orden é a sequência, a organização.",
      explicacaoErradas:
        "“sequência e mandado” inverte os sentidos. “pedido de compra” não cabe em uma ordem de juiz. As formas “sem diferença” e “apenas repetido” ignoram o artigo.",
      pegadinha: "Achar que a troca do artigo não muda nada.",
      conhecimento: "O mesmo ocorre com el cura, o padre, e la cura, o tratamento.",
    },
    {
      topico: "Epicenos",
      subassunto: "La víctima",
      dificuldade: 5,
      raciocinio: "A concordância segue a palavra, e não a pessoa.",
      enunciado: "Em “La víctima, un hombre de cuarenta años, fue trasladada al hospital.”, “trasladada” está no feminino porque",
      alternativas: [
        "concorda com víctima, feminina para os dois sexos",
        "o homem citado passou a ser tratado como mulher no texto",
        "o particípio em espanhol fica sempre no feminino singular",
        "a palavra hospital é feminina e exige essa concordância",
        "há erro de concordância, pois o certo seria a forma trasladado",
      ],
      correta: 0,
      explicacao: "Víctima é epiceno: tem um só gênero para homem e mulher. O particípio concorda com a palavra.",
      explicacaoErradas:
        "“tratado como mulher” confunde gênero da palavra e sexo da pessoa. “sempre no feminino” é falso. “hospital” é masculina. “erro de concordância” ignora a regra.",
      pegadinha: "Concordar com hombre.",
      conhecimento: "Persona funciona da mesma forma.",
    },
    {
      topico: "Terminações que enganam",
      subassunto: "Problema, mapa, foto e moto",
      dificuldade: 4,
      raciocinio: "A terminação não garante o gênero.",
      enunciado: "Com substantivos que enganam pela terminação, segue a norma a frase",
      alternativas: [
        "La mapa muestra la problema y el foto del moto.",
        "El mapa muestra el problema y la foto de la moto.",
        "El mapa muestra la problema y la foto de la moto.",
        "La mapa muestra el problema y el foto de la moto.",
        "El mapa muestra el problema y el foto del moto que cayó.",
      ],
      correta: 1,
      explicacao: "Mapa e problema são masculinas, apesar do -a. Foto e moto são femininas, pois encurtam fotografía e motocicleta.",
      explicacaoErradas:
        "“La mapa” e “la problema” seguem a terminação. “el foto” e “del moto” esquecem as palavras de origem.",
      pegadinha: "Achar que -a sempre é feminino e -o, masculino.",
      conhecimento: "Palavras de origem grega em -ma costumam ser masculinas: el sistema, el tema.",
    },
    {
      topico: "Plural",
      subassunto: "Lunes, luz e camión",
      dificuldade: 5,
      raciocinio: "Cada palavra segue uma regra.",
      enunciado: "O plural de “el lunes”, “la luz” e “el camión” é",
      alternativas: [
        "los lunes, las luzes, los camiónes",
        "los luneses, las luces, los camiones",
        "los lunes, las luces, los camiones",
        "los luneses, las luzes, los camiónes",
        "los lunes, las lucez, los camiónes de carga",
      ],
      correta: 2,
      explicacao: "Lunes não muda. O z vira c antes de -es: luces. Camiones perde o acento, porque vira palavra llana terminada em s.",
      explicacaoErradas:
        "“luzes” mantém o z do português. “luneses” acrescenta plural a palavra invariável. “camiónes” conserva um acento que cai. “lucez” inventa a forma.",
      pegadinha: "Manter o acento de camión.",
      conhecimento: "Crisis e análisis também ficam iguais no plural.",
    },
    {
      topico: "Gênero por grupo",
      subassunto: "Nomes próprios e numerais",
      dificuldade: 4,
      raciocinio: "Pense em el lunes, el Amazonas e el cinco.",
      enunciado: "Segundo as regras de gênero por grupo, são masculinos os nomes de",
      alternativas: [
        "letras, ilhas e cidades terminadas em -a",
        "dias, meses, letras e ilhas do Caribe",
        "rios, lagos, letras e cidades em -a",
        "ilhas, rios, oceanos e pontos cardeais",
        "dias, meses, rios e números",
      ],
      correta: 4,
      explicacao: "Dias, meses, rios, lagos, oceanos, números e pontos cardeais são masculinos: el lunes, el Amazonas, el cinco, el sur.",
      explicacaoErradas:
        "“letras”, “ilhas” e “cidades terminadas em -a” são grupos femininos: la be, las Canarias. As demais listas misturam os dois grupos.",
      pegadinha: "Misturar um grupo feminino em uma lista quase certa.",
      conhecimento: "As palavras em -ción e -dad são femininas: la nación, la ciudad.",
    },
  ],
};
