import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-14",
  resumo: {
    ideia:
      "O espanhol parece o português, e é aí que está a armadilha. Esta aula junta a divisão silábica, os sinônimos e as palavras que enganam pela forma ou pela sílaba forte.",
    itens: [
      {
        termo: "Silabeo",
        faz: "Consoante entre vogais fica com a vogal seguinte: ca-mi-no. Ch, ll e rr não se separam: ca-rre-te-ra.",
      },
      {
        termo: "Ditongo",
        faz: "Vogal fraca junto de outra vogal, na mesma sílaba: cie-lo.",
      },
      {
        termo: "Hiato",
        faz: "Duas vogais fortes, ou vogal fraca com tilde, ficam em sílabas diferentes: re-a-li-dad, pa-ís.",
      },
      {
        termo: "Tritongo",
        faz: "Três vogais na mesma sílaba: U-ru-guay.",
      },
      {
        termo: "Sinônimos",
        faz: "Dependem do contexto: detener pode ser parar ou prender.",
      },
      {
        termo: "Heterotônicos",
        faz: "Grafia parecida e sílaba forte diferente: policía, nivel, cerebro, límite.",
      },
      {
        termo: "Heterosemánticos",
        faz: "Falsos amigos: rato é momento, polvo é pó, apellido é sobrenome, cena é jantar, vaso é copo.",
      },
      {
        termo: "Apagar e borrar",
        faz: "Apagar é desligar. Borrar é apagar o que está escrito.",
      },
    ],
    cuidado: "Palavra conhecida não garante sentido conhecido. Confirme pelo contexto.",
  },
  questoes: [
    {
      topico: "Heterosemánticos",
      subassunto: "Rato, apellido e zurdo",
      dificuldade: 5,
      raciocinio: "Três palavras não são o que parecem.",
      enunciado: "A tradução correta de “En un rato, el agente anotó el apellido del conductor zurdo.” é",
      alternativas: [
        "Em um rato, o agente anotou o nome do motorista surdo.",
        "Em pouco tempo, o agente anotou o nome do motorista surdo.",
        "Em um rato, o agente anotou o sobrenome do motorista canhoto.",
        "Em pouco tempo, o agente anotou o sobrenome do motorista canhoto.",
        "Em pouco tempo, o agente anotou o apelido do motorista surdo da empresa.",
      ],
      correta: 3,
      explicacao: "Rato é pouco tempo, apellido é sobrenome e zurdo é canhoto.",
      explicacaoErradas:
        "“rato” mantém a palavra do português, que em espanhol é ratón. “nome” e “apelido” erram apellido. “surdo” erra zurdo, pois surdo é sordo.",
      pegadinha: "Acertar duas palavras e errar a terceira.",
      conhecimento: "Apelido, em espanhol, é apodo.",
    },
    {
      topico: "Heterosemánticos",
      subassunto: "Polvo, largo, vaso e cena",
      dificuldade: 4,
      raciocinio: "A frase fala de sujeira e de refeição.",
      enunciado: "Em “El polvo del largo camino entró en el vaso durante la cena.”, os termos significam, nessa ordem,",
      alternativas: [
        "pó, comprido, copo e jantar",
        "polvo, largo, vaso e cena de filme",
        "pó, largo, vaso e jantar",
        "polvo, comprido, copo e jantar",
        "pó, largo, copo e cena de filme",
      ],
      correta: 0,
      explicacao: "Polvo é pó, largo é comprido, vaso é copo e cena é jantar.",
      explicacaoErradas:
        "“polvo” mantém o animal, que em espanhol é pulpo. “largo” mantém o sentido de largura, que é ancho. “vaso” e “cena de filme” mantêm palavras do português.",
      pegadinha: "Olhar só para o primeiro termo.",
      conhecimento: "Vaso de flores, em espanhol, é florero.",
    },
    {
      topico: "Heterotônicos",
      subassunto: "Sílaba forte",
      dificuldade: 5,
      raciocinio: "Leia cada palavra em voz alta nas duas línguas.",
      enunciado: "Heterotônicas têm grafia parecida e sílaba forte diferente do português. Não se enquadra nesse grupo",
      alternativas: ["policía", "cerebro", "nivel", "límite", "médico"],
      correta: 4,
      explicacao: "Médico tem a mesma sílaba forte nas duas línguas. As outras mudam: po-li-CÍ-a, ce-RE-bro, ni-VEL, LÍ-mi-te.",
      explicacaoErradas:
        "“policía” é forte no cí. “cerebro” é forte no re. “nivel” é forte no vel. “límite” é forte no lí. Todas diferem do português.",
      pegadinha: "Ler as palavras com a pronúncia do português.",
      conhecimento: "Alcohol e fútbol também costumam ser citados nesse grupo.",
    },
    {
      topico: "Silabeo",
      subassunto: "Rr, ll e ch",
      dificuldade: 4,
      raciocinio: "Em espanhol, esses grupos não se dividem.",
      enunciado: "Segue a divisão silábica do espanhol a forma",
      alternativas: [
        "car-re-te-ra, cal-le, coc-he",
        "ca-rre-te-ra, ca-lle, co-che",
        "car-re-te-ra, ca-lle, co-che",
        "ca-rre-te-ra, cal-le, co-che",
        "car-re-te-ra, ca-ll-e, co-ch-e",
      ],
      correta: 1,
      explicacao: "Rr, ll e ch são um só som e ficam juntos na sílaba seguinte.",
      explicacaoErradas:
        "“car-re” separa rr, como faz o português. “cal-le” separa ll. “coc-he” separa ch. “ca-ll-e” e “co-ch-e” deixam consoantes sem vogal.",
      pegadinha: "Separar o rr como em carro no português.",
      conhecimento: "Grupos como bl e br também ficam juntos: ha-blar.",
    },
    {
      topico: "Silabeo",
      subassunto: "Hiato, ditongo e tritongo",
      dificuldade: 5,
      raciocinio: "A tilde na vogal fraca separa as vogais.",
      enunciado: "Os encontros de vogais de “país”, “cielo” e “Uruguay” são, nessa ordem,",
      alternativas: [
        "ditongo, hiato e tritongo",
        "hiato, tritongo e ditongo",
        "tritongo, ditongo e hiato",
        "hiato, ditongo e tritongo",
        "ditongo, ditongo e ditongo, sem diferença",
      ],
      correta: 3,
      explicacao: "Pa-ís separa as vogais, cie-lo as mantém juntas, e U-ru-guay reúne três vogais em uma sílaba.",
      explicacaoErradas:
        "“ditongo, hiato” erra as duas primeiras. “hiato, tritongo” erra cielo. “tritongo, ditongo” erra país. “sem diferença” ignora a tilde de país.",
      pegadinha: "Tratar o y final como consoante.",
      conhecimento: "Ao final da palavra, o y soa como i.",
    },
    {
      topico: "Sinônimos",
      subassunto: "Detener",
      dificuldade: 5,
      raciocinio: "O contexto escolhe o sentido.",
      enunciado: "Em “El camión se detuvo en el puesto, y el agente detuvo al conductor por el robo.”, o verbo detener significa, nessa ordem,",
      alternativas: ["parar e prender", "prender e parar", "parar e demorar", "demorar e parar", "atrasar e soltar"],
      correta: 0,
      explicacao: "Detenerse é parar. Detener a alguien por un delito é prender.",
      explicacaoErradas:
        "“prender e parar” inverte os sentidos. “demorar” não cabe nas frases. “atrasar e soltar” contraria a ideia de um crime.",
      pegadinha: "Dar o mesmo sentido às duas formas.",
      conhecimento: "Quem é preso assim é el detenido.",
    },
    {
      topico: "Heterosemánticos",
      subassunto: "Borrar e apagar",
      dificuldade: 5,
      raciocinio: "Cada verbo tem um alvo diferente.",
      enunciado: "A tradução correta de “El agente borró el dato, apagó la radio y despertó al compañero.” é",
      alternativas: [
        "O agente borrou o dado, desligou o rádio e acordou o colega.",
        "O agente apagou o dado, desligou o rádio e acordou o colega.",
        "O agente apagou o dado, apagou o rádio e combinou com o colega.",
        "O agente borrou o dado, apagou o rádio e combinou com o colega.",
        "O agente manchou o dado, queimou o rádio e dispensou o colega de turno.",
      ],
      correta: 1,
      explicacao: "Borrar é apagar o escrito, apagar é desligar e despertar é acordar.",
      explicacaoErradas:
        "“borrou” usa o sentido do português. “apagou o rádio” copia a palavra. “combinou” é o sentido de acordar em espanhol. “manchou”, “queimou” e “dispensou” não traduzem os verbos.",
      pegadinha: "Ler apagar como no português.",
      conhecimento: "Acordar, em espanhol, é combinar.",
    },
  ],
};
