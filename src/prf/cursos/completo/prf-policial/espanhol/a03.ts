import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-03",
  resumo: {
    ideia:
      "Preposição liga palavras. Várias parecem as do português, e os erros vêm de por e para, de hacia e hasta, do a antes de pessoa e dos pronomes depois da preposição.",
    itens: [
      {
        termo: "A",
        faz: "Marca direção e também o objeto direto de pessoa: vi a Juan.",
      },
      {
        termo: "Por",
        faz: "Causa, meio, lugar de passagem e agente da passiva.",
      },
      {
        termo: "Para",
        faz: "Finalidade, destino e prazo: el informe es para el lunes.",
      },
      {
        termo: "Hacia e hasta",
        faz: "Hacia é rumo a. Hasta é até, o limite. Hasta também pode ser “até mesmo”.",
      },
      {
        termo: "Desde",
        faz: "Ponto de partida, no tempo ou no espaço.",
      },
      {
        termo: "Pronome depois da preposição",
        faz: "Em geral vem mí e ti: para mí. Com entre e según, fica tú e yo: entre tú y yo.",
      },
      {
        termo: "Locuções",
        faz: "A pesar de é apesar de. A través de é através de. Debajo de é embaixo de.",
      },
    ],
    cuidado: "Bajo é sob. Sobre pode ser em cima de ou a respeito de: a frase decide o sentido.",
  },
  questoes: [
    {
      topico: "Por e para",
      subassunto: "Passagem e finalidade",
      dificuldade: 4,
      raciocinio: "Por onde passou e para quê?",
      enunciado: "Em “El agente pasó por la aduana para revisar los papeles.”, “por” e “para” indicam, nessa ordem,",
      alternativas: [
        "lugar de passagem e finalidade",
        "finalidade e lugar de passagem",
        "causa da viagem e prazo de entrega",
        "meio de transporte e agente da ação",
        "direção aproximada e tempo de duração",
      ],
      correta: 0,
      explicacao: "Pasó por indica o lugar por onde ele passou. Para revisar indica o objetivo da ida.",
      explicacaoErradas:
        "“finalidade e lugar” inverte a ordem. “prazo de entrega” não cabe, pois não há data. “agente da ação” exigiria voz passiva. “direção aproximada” seria hacia.",
      pegadinha: "Trocar por e para pelo costume do português.",
      conhecimento: "Papeles, aqui, são os documentos.",
    },
    {
      topico: "Hacia e hasta",
      subassunto: "Rumo e limite",
      dificuldade: 4,
      raciocinio: "Quem vai hacia ainda não chegou.",
      enunciado: "Em “El camión iba hacia Corumbá, pero solo llegó hasta Campo Grande.”, conclui-se que o caminhão",
      alternativas: [
        "chegou a Corumbá e depois voltou para Campo Grande",
        "saiu de Corumbá e passou por Campo Grande sem parar",
        "seguia rumo a Corumbá, mas parou em Campo Grande",
        "foi de Campo Grande a Corumbá em uma só viagem",
        "nunca esteve em Campo Grande nem perto de Corumbá",
      ],
      correta: 2,
      explicacao: "Hacia dá a direção, sem garantir a chegada. Hasta marca o ponto em que o trajeto terminou.",
      explicacaoErradas:
        "“chegou a Corumbá” contraria solo llegó. “saiu de Corumbá” inverte o sentido. “foi de Campo Grande a Corumbá” ignora o limite. “nunca esteve” contraria hasta.",
      pegadinha: "Ler hacia como chegada.",
      conhecimento: "Solo, aqui, é somente.",
    },
    {
      topico: "Preposição a",
      subassunto: "Objeto direto de pessoa",
      dificuldade: 5,
      raciocinio: "Pessoa ou coisa?",
      enunciado: "Complete: “La policía detuvo ___ conductor y ___ camión.”",
      alternativas: ["el, al", "al, el", "al, al", "el, el", "a el, el"],
      correta: 1,
      explicacao: "Objeto direto de pessoa pede a: al conductor. Objeto direto de coisa não pede: el camión.",
      explicacaoErradas:
        "“el, al” inverte a regra. “al, al” põe a antes de coisa. “el, el” tira o a da pessoa. “a el” deixa de fazer a contração.",
      pegadinha: "Seguir o português, que não usa esse a.",
      conhecimento: "Detuvo é o passado de detener, deter.",
    },
    {
      topico: "Pronomes com preposição",
      subassunto: "Entre e para",
      dificuldade: 5,
      raciocinio: "Entre é exceção. Para segue a regra.",
      enunciado: "Está correta, quanto aos pronomes depois da preposição, a frase",
      alternativas: [
        "Entre ti y mí no hay problema, y el informe es para yo.",
        "Entre tú y yo no hay problema, y el informe es para yo.",
        "Entre ti y mí no hay problema, y el informe es para mí.",
        "Entre tú y yo no hay problema, y el informe es para mí.",
        "Entre tú y mí no hay problema, pero el informe es para tú.",
      ],
      correta: 3,
      explicacao: "Depois de entre, ficam tú e yo. Depois de para, ficam mí e ti.",
      explicacaoErradas:
        "“Entre ti y mí” aplica a regra geral à exceção. “para yo” e “para tú” usam a forma de sujeito. “Entre tú y mí” mistura as duas formas.",
      pegadinha: "Tratar entre como as outras preposições.",
      conhecimento: "Com a preposição con, as formas são conmigo e contigo.",
    },
    {
      topico: "Hacia e hasta",
      subassunto: "Hasta como “até mesmo”",
      dificuldade: 5,
      raciocinio: "Não há lugar nem tempo na frase.",
      enunciado: "Em “Hasta el jefe aceptó la multa sin protestar.”, a palavra “hasta” indica",
      alternativas: [
        "limite de lugar, pois o chefe só foi até a multa",
        "o momento final da aceitação feita pelo chefe do posto",
        "causa, porque a multa foi aplicada por culpa do chefe",
        "finalidade, já que o chefe queria evitar o protesto",
        "inclusão de alguém inesperado: até mesmo o chefe",
      ],
      correta: 4,
      explicacao: "Antes de nome, hasta pode valer como incluso: até mesmo. A frase mostra que nem o chefe protestou.",
      explicacaoErradas:
        "“limite de lugar” e “momento final” são os usos comuns, que não cabem aqui. “causa” e “finalidade” não têm base na frase.",
      pegadinha: "Ler hasta sempre como limite.",
      conhecimento: "Incluso e aun têm esse mesmo sentido.",
    },
    {
      topico: "Locuções",
      subassunto: "A pesar de e a través de",
      dificuldade: 4,
      raciocinio: "Uma locução admite o obstáculo, e a outra indica passagem.",
      enunciado: "Em “A pesar de la lluvia, los agentes siguieron a través del puente.”, as locuções indicam, nessa ordem,",
      alternativas: [
        "causa da chuva e parada junto à ponte",
        "finalidade e limite antes da ponte",
        "concessão e passagem pela ponte",
        "tempo da chuva e saída por baixo da ponte",
        "oposição e volta pelo mesmo caminho da ponte",
      ],
      correta: 2,
      explicacao: "A pesar de admite um obstáculo que não impediu o fato. A través de indica passagem.",
      explicacaoErradas:
        "“causa” e “finalidade” não cabem em a pesar de. “por baixo” seria debajo de. “volta pelo mesmo caminho” não está na frase.",
      pegadinha: "Ler pesar como peso.",
      conhecimento: "Puente é masculino: el puente.",
    },
    {
      topico: "Por e para",
      subassunto: "Prazo e agente",
      dificuldade: 5,
      raciocinio: "Firmado por quem? Pronto para quando?",
      enunciado: "Em “El informe es para el lunes y fue firmado por el jefe.”, “para” e “por” indicam, nessa ordem,",
      alternativas: [
        "prazo e agente da ação",
        "agente da ação e prazo",
        "finalidade e meio de transporte",
        "lugar de passagem e causa da firma",
        "destino da viagem e troca de valor",
      ],
      correta: 0,
      explicacao: "Para el lunes marca o prazo. Por el jefe é o agente da voz passiva: quem assinou.",
      explicacaoErradas:
        "“agente da ação e prazo” inverte a ordem. “meio de transporte”, “lugar de passagem” e “troca de valor” são outros usos, sem base aqui. “destino da viagem” ignora que lunes é uma data.",
      pegadinha: "Ler firmado como firmado em português, e não como assinado.",
      conhecimento: "Firma é assinatura, e firmar é assinar.",
    },
  ],
};
