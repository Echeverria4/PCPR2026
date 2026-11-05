import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-02",
  resumo: {
    ideia:
      "O artigo espanhol parece o português, mas tem três diferenças: a forma neutra lo, o el antes de feminino com a tônico e a ausência de artigo antes de mi, tu e su.",
    itens: [
      {
        termo: "Determinados",
        faz: "El, la, los, las. Apontam um ser já conhecido.",
      },
      {
        termo: "Indeterminados",
        faz: "Un, una, unos, unas. Antes de número, unos dá ideia de cerca de: unos cien.",
      },
      {
        termo: "Neutro lo",
        faz: "Nunca vem antes de substantivo. Antes de adjetivo ou advérbio, cria ideia geral: lo mejor.",
      },
      {
        termo: "Lo + adjetivo + que",
        faz: "Mostra intensidade: lo difícil que fue é “como foi difícil”.",
      },
      {
        termo: "El antes de a tônico",
        faz: "Feminino singular com a- ou ha- tônico usa el: el agua, el hacha. A palavra segue feminina.",
      },
      {
        termo: "Limites da regra",
        faz: "Vale para o artigo colado à palavra. Fica esta agua e la fría agua. O nome da letra fica la hache.",
      },
      {
        termo: "Com possessivo",
        faz: "O espanhol não usa artigo antes de mi, tu, su: mi coche.",
      },
    ],
    cuidado: "“El agua” não vira masculina. Diga el agua fría, e o plural é las aguas.",
  },
  questoes: [
    {
      topico: "Artigo feminino",
      subassunto: "El agua",
      dificuldade: 4,
      raciocinio: "O artigo muda. O gênero da palavra, não.",
      enunciado: "Está correta a frase",
      alternativas: [
        "La agua del río está fría.",
        "El agua del río está frío.",
        "Lo agua del río está fría.",
        "El agua del río está fría.",
        "Las agua del río están fríos en esta época.",
      ],
      correta: 3,
      explicacao: "Agua começa por a tônico e pede el no singular, mas é feminina. Por isso o adjetivo fica fría.",
      explicacaoErradas:
        "“La agua” ignora a troca do artigo. “está frío” trata a palavra como masculina. “Lo agua” põe o neutro antes de substantivo. “Las agua” mistura plural e singular.",
      pegadinha: "Pensar que el torna a palavra masculina.",
      conhecimento: "O mesmo ocorre com el águila, el alma e el hacha.",
    },
    {
      topico: "Artigo feminino",
      subassunto: "Plural",
      dificuldade: 4,
      raciocinio: "No plural, o som não se choca e o la volta.",
      enunciado: "O plural de “el hacha afilada” é",
      alternativas: [
        "las hachas afiladas",
        "los hachas afilados",
        "los hachas afiladas",
        "las hachas afilados",
        "unos hachas afilados",
      ],
      correta: 0,
      explicacao: "Hacha é feminina. No plural, o artigo é las, e o adjetivo concorda: afiladas.",
      explicacaoErradas:
        "“los hachas” trata a palavra como masculina. “afilados” erra o adjetivo, em qualquer das formas. “unos hachas” erra o gênero do artigo.",
      pegadinha: "Levar o el para o plural como los.",
      conhecimento: "Hacha é machado. Afilada é afiada.",
    },
    {
      topico: "Artigo neutro",
      subassunto: "Lo e el",
      dificuldade: 4,
      raciocinio: "Adjetivo ou substantivo depois da lacuna?",
      enunciado: "Complete: “___ importante es frenar a tiempo.” e “___ conductor frenó a tiempo.”",
      alternativas: ["El, Lo", "La, El", "Lo, El", "Lo, Lo", "El, El"],
      correta: 2,
      explicacao: "Lo vem antes de adjetivo para criar ideia geral. Antes de substantivo masculino, o artigo é el.",
      explicacaoErradas:
        "“El, Lo” inverte os usos. “La, El” usa feminino sem substantivo. “Lo, Lo” põe o neutro antes de conductor. “El, El” perde a ideia geral.",
      pegadinha: "Usar lo antes de substantivo.",
      conhecimento: "Lo não tem plural e não acompanha substantivo.",
    },
    {
      topico: "Artigo feminino",
      subassunto: "Limites da regra",
      dificuldade: 5,
      raciocinio: "A troca vale só para o artigo colado à palavra.",
      enunciado: "A regra do el antes de a tônico tem limites. Está correta a frase",
      alternativas: [
        "Este agua no es potable y el fría agua tampoco.",
        "Esta agua no es potable y el fría agua tampoco.",
        "Este agua no es potable y la fría agua tampoco.",
        "Estos aguas no son potables y la fría agua tampoco.",
        "Esta agua no es potable y la fría agua tampoco.",
      ],
      correta: 4,
      explicacao: "O demonstrativo fica feminino: esta agua. Com adjetivo entre o artigo e a palavra, volta o la: la fría agua.",
      explicacaoErradas:
        "“Este agua” estende a regra ao demonstrativo. “el fría agua” mantém o el sem a palavra colada. “Estos aguas” erra gênero e número.",
      pegadinha: "Aplicar a troca a toda palavra que vem antes.",
      conhecimento: "Potable é própria para beber.",
    },
    {
      topico: "Artigo neutro",
      subassunto: "Lo + adjetivo + que",
      dificuldade: 5,
      raciocinio: "A forma destaca o grau da qualidade.",
      enunciado: "Em “No sabes lo peligrosa que es esta curva.”, a frase quer dizer:",
      alternativas: [
        "Você não sabe o que é uma curva perigosa na rodovia.",
        "Você não sabe como esta curva é perigosa.",
        "Você não sabe qual é a curva mais perigosa.",
        "Você não sabe que esta curva deixou de ser perigosa.",
        "Ele não é perigoso, mas você não conhece esta curva.",
      ],
      correta: 1,
      explicacao: "Lo + adjetivo + que destaca a intensidade. O adjetivo concorda com curva, por isso fica peligrosa.",
      explicacaoErradas:
        "“o que é uma curva perigosa” troca a ideia por definição. “qual é a curva” cria uma comparação. “deixou de ser” inventa uma mudança. “Ele não é perigoso” lê lo como pronome.",
      pegadinha: "Achar que lo não pode vir com adjetivo feminino.",
      conhecimento: "Nessa forma, o adjetivo concorda, mas o lo não muda.",
    },
    {
      topico: "Uso do artigo",
      subassunto: "Com possessivo",
      dificuldade: 4,
      raciocinio: "O português aceita “a minha”. O espanhol, não.",
      enunciado: "A tradução correta de “A minha carteira ficou no carro.” é",
      alternativas: [
        "La mi licencia se quedó en el coche.",
        "Mi licencia se quedó no coche.",
        "La licencia mía se quedó no coche de él.",
        "Mi licencia se quedó en el coche.",
        "El mi licencia se quedó en lo coche.",
      ],
      correta: 3,
      explicacao: "Mi dispensa artigo. “No carro” vira en el coche, com preposição e artigo separados.",
      explicacaoErradas:
        "“La mi” e “El mi” põem artigo antes do possessivo. “no coche” traz a contração do português. “lo coche” usa o neutro antes de substantivo.",
      pegadinha: "Copiar “a minha” do português.",
      conhecimento: "Licencia de conducir é a carteira de habilitação.",
    },
    {
      topico: "Artigo indeterminado",
      subassunto: "Unos antes de número",
      dificuldade: 4,
      raciocinio: "Unos, aqui, não é plural de um.",
      enunciado: "Em “Pasaron unos cien camiones por el puesto.”, entende-se que passaram",
      alternativas: [
        "exatamente cem caminhões",
        "uns poucos caminhões, menos de dez",
        "cerca de cem caminhões",
        "mais de mil caminhões, sem contagem",
        "cem caminhões de uma só empresa",
      ],
      correta: 2,
      explicacao: "Unos antes de número indica aproximação: cerca de cem.",
      explicacaoErradas:
        "“exatamente” elimina a ideia de aproximação. “menos de dez” e “mais de mil” ignoram o número. “uma só empresa” não está na frase.",
      pegadinha: "Ler unos como “uns poucos”.",
      conhecimento: "Unas funciona da mesma forma: unas veinte motos.",
    },
  ],
};
