import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "ingles-04",
  resumo: {
    ideia:
      "Verbos pequenos mudam muito o sentido da frase. A aula trata dos verbos frasais, dos auxiliares e dos modais, que mostram a atitude de quem fala.",
    itens: [
      {
        termo: "Verbo frasal",
        faz: "Verbo com in, on, out, up, off ou down, que ganha sentido novo.",
        pista: "Look into é investigar. Turn down é recusar. Put up with é tolerar.",
      },
      {
        termo: "Do, does, did",
        faz: "Auxiliares de pergunta e negativa. Depois deles, o verbo volta à forma base.",
      },
      {
        termo: "Can e could",
        faz: "Habilidade, possibilidade, pedido e permissão.",
      },
      {
        termo: "Must",
        faz: "Obrigação ou dedução segura. Must have + particípio é dedução sobre o passado.",
      },
      {
        termo: "Must not e don't have to",
        faz: "O primeiro proíbe. O segundo diz que não é preciso.",
      },
      {
        termo: "Should e ought to",
        faz: "Conselho: “deveria”. Should have + particípio mostra o que não foi feito.",
      },
      {
        termo: "May e might",
        faz: "Possibilidade. May também pede ou dá permissão.",
      },
      {
        termo: "Would",
        faz: "Forma o “-ia” do português e, para hábitos passados, equivale a used to.",
      },
    ],
    cuidado: "Modal não leva to nem -s: he can drive, e nunca he cans to drive.",
  },
  questoes: [
    {
      topico: "Verbos frasais",
      subassunto: "Turn down e put up with",
      dificuldade: 4,
      raciocinio: "Um verbo frasal vale pelo conjunto, e não pelas partes.",
      enunciado: "A frase “The officer turned down the bribe and put up with the insults.” informa que o policial",
      alternativas: [
        "recusou o suborno e suportou os insultos",
        "aceitou o suborno e rebateu os insultos",
        "abaixou o suborno e guardou os insultos",
        "denunciou o suborno e devolveu os insultos do motorista",
        "recusou o suborno e respondeu com insultos ao motorista",
      ],
      correta: 0,
      explicacao: "Turn down é recusar. Put up with é tolerar, suportar. Bribe é suborno.",
      explicacaoErradas:
        "“aceitou” inverte turn down. “abaixou” traduz palavra por palavra. “devolveu os insultos” e “respondeu com insultos” erram put up with.",
      pegadinha: "Traduzir turn down como “virar para baixo”.",
      conhecimento: "Look into é investigar, e think over é pensar a respeito.",
    },
    {
      topico: "Modais",
      subassunto: "Must com dedução",
      dificuldade: 5,
      raciocinio: "Must have + particípio olha para o passado.",
      enunciado: "Em “The engine is still hot. The truck must have arrived a few minutes ago.”, “must have arrived” expressa",
      alternativas: [
        "obrigação que o motorista tinha de chegar antes do prazo",
        "permissão dada ao caminhão para chegar ao posto fiscal",
        "previsão de chegada do caminhão nos próximos minutos",
        "dedução sobre um fato passado, com base em um indício",
        "hábito antigo do motorista, que repete o trajeto sempre",
      ],
      correta: 3,
      explicacao: "O motor quente é o indício. Quem fala conclui, com boa certeza, que o caminhão chegou há pouco.",
      explicacaoErradas:
        "“obrigação” seria o outro uso de must, sem indício. “permissão” caberia a may. “previsão” olha para o futuro. “hábito” caberia a used to.",
      pegadinha: "Ler todo must como obrigação.",
      conhecimento: "Can't have + particípio é a dedução negativa: não pode ter acontecido.",
    },
    {
      topico: "Modais",
      subassunto: "Must not e don't have to",
      dificuldade: 5,
      raciocinio: "Só um dos dois proíbe.",
      enunciado:
        "Em “You mustn't drive without a seat belt.” e “You don't have to carry the paper document if you have the digital one.”, as formas destacam, nessa ordem,",
      alternativas: [
        "falta de obrigação e proibição",
        "proibição e proibição",
        "obrigação e permissão de fazer",
        "proibição e falta de obrigação",
        "conselho e dever de apresentar o papel",
      ],
      correta: 3,
      explicacao: "Must not proíbe. Don't have to diz que não é preciso, mas que a pessoa pode fazer se quiser.",
      explicacaoErradas:
        "“falta de obrigação e proibição” inverte a ordem. “proibição e proibição” iguala as duas formas. “obrigação” e “conselho” não cabem em mustn't.",
      pegadinha: "Achar que a negativa de must equivale à de have to.",
      conhecimento: "Must e have to só se equivalem nas frases afirmativas.",
    },
    {
      topico: "Modais",
      subassunto: "Would para hábito",
      dificuldade: 5,
      raciocinio: "O contexto mostra repetição no passado.",
      enunciado: "Em “When he worked on the border, he would patrol the road at dawn.”, entende-se que ele",
      alternativas: [
        "costumava patrulhar a estrada de madrugada",
        "deveria patrulhar a estrada ao amanhecer, mas não fez isso",
        "patrulharia a estrada se morasse perto da fronteira do país",
        "quer patrulhar a estrada de madrugada no próximo turno",
        "poderia patrulhar a estrada, caso recebesse uma ordem",
      ],
      correta: 0,
      explicacao: "Com uma situação passada como referência, would indica hábito e equivale a used to.",
      explicacaoErradas:
        "“patrulharia” e “poderia patrulhar” tratam a frase como hipótese. “deveria” pediria should. “quer patrulhar” olha para o futuro.",
      pegadinha: "Traduzir todo would com “-ia”.",
      conhecimento: "Used to serve para hábitos e estados passados. Would, só para ações repetidas.",
    },
    {
      topico: "Verbos auxiliares",
      subassunto: "Do, does e did",
      dificuldade: 4,
      raciocinio: "O auxiliar leva a marca de pessoa e tempo.",
      enunciado: "Está correta a pergunta",
      alternativas: [
        "Does the driver has a valid license?",
        "Do the driver have a valid license?",
        "Did the driver had a valid license?",
        "Does the driver have a valid license?",
        "Is the driver have a valid license on him?",
      ],
      correta: 3,
      explicacao: "Does vale para he, she e it, e o verbo principal volta à forma base: have.",
      explicacaoErradas:
        "“Does the driver has” e “Did the driver had” flexionam o verbo duas vezes. “Do the driver” erra a pessoa. “Is the driver have” mistura be e have.",
      pegadinha: "Manter has depois de does.",
      conhecimento: "Did serve a todas as pessoas no passado: Did they stop?",
    },
    {
      topico: "Modais",
      subassunto: "Should have",
      dificuldade: 5,
      raciocinio: "Should have + particípio mostra o que não aconteceu.",
      enunciado: "Da frase “The driver should have stopped at the checkpoint.” é correto concluir que",
      alternativas: [
        "o motorista parou no posto, como devia fazer",
        "o motorista não parou, embora devesse ter parado",
        "o motorista vai parar, porque recebeu uma ordem",
        "o motorista talvez tenha parado, mas ninguém viu",
        "o motorista não pôde parar, pois estava sem freios na via",
      ],
      correta: 1,
      explicacao: "A forma critica o que não foi feito no passado: ele devia ter parado, e não parou.",
      explicacaoErradas:
        "“parou no posto” contraria o sentido da forma. “vai parar” olha para o futuro. “talvez tenha parado” pediria might have. “não pôde parar” pediria couldn't.",
      pegadinha: "Concluir que a ação aconteceu.",
      conhecimento: "Ought to have + particípio tem o mesmo sentido.",
    },
  ],
};
