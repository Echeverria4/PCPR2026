import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-12",
  resumo: {
    ideia:
      "Interpretar em espanhol é igual a interpretar em português: achar o tipo de texto, ver o que cada palavra retoma e entender o papel dos conectores.",
    itens: [
      {
        termo: "Tipos de frase",
        faz: "Declarativa informa, interrogativa pergunta, imperativa manda, exclamativa mostra emoção.",
      },
      {
        termo: "Optativa e imprecativa",
        faz: "Optativa expressa desejo: ojalá. Imprecativa lança uma maldição.",
      },
      {
        termo: "Tipos de texto",
        faz: "Narração conta, descrição mostra, dissertação defende, injunção orienta.",
      },
      {
        termo: "Estilo direto",
        faz: "Reproduz a fala de alguém, com as palavras dela.",
      },
      {
        termo: "Estilo indireto",
        faz: "Conta a fala. Mudam o tempo e as referências: mañana vira al día siguiente, este vira ese.",
      },
      {
        termo: "Coesão referencial",
        faz: "Pronomes retomam nomes. Pergunte sempre a quem a palavra se refere.",
      },
      {
        termo: "Coesão sequencial",
        faz: "Conectores ligam ideias: por eso, sin embargo, además.",
      },
      {
        termo: "Coerência",
        faz: "As ideias precisam fazer sentido juntas, e o conector precisa combinar com elas.",
      },
    ],
    cuidado: "A resposta vem do que está escrito, e não do que parece lógico.",
  },
  questoes: [
    {
      topico: "Tipos de frase",
      subassunto: "Optativa",
      dificuldade: 4,
      raciocinio: "Ojalá indica vontade de quem fala.",
      enunciado: "Em “¡Ojalá llegue pronto la ambulancia!”, a frase é",
      alternativas: [
        "imperativa, pois dá uma ordem à equipe de socorro",
        "interrogativa, pois pergunta se a ambulância virá",
        "declarativa, pois informa a chegada da ambulância",
        "optativa, pois expressa um desejo de quem fala",
        "imprecativa, pois lança uma maldição contra a equipe do socorro",
      ],
      correta: 3,
      explicacao: "Ojalá introduz desejo, e por isso a frase é optativa. O verbo fica no subjuntivo: llegue.",
      explicacaoErradas:
        "“imperativa” exigiria uma ordem. “interrogativa” exigiria pergunta. “declarativa” exigiria um fato. “imprecativa” exigiria maldição, e não desejo de ajuda.",
      pegadinha: "Ver o ponto de exclamação e pensar em ordem.",
      conhecimento: "Pronto, nessa frase, significa logo.",
    },
    {
      topico: "Estilo indireto",
      subassunto: "Tempo e referências",
      dificuldade: 5,
      raciocinio: "Mudam o tempo do verbo, o mañana e o este.",
      enunciado:
        "Passe para o estilo indireto, em relato feito dias depois e em outro lugar: El agente dijo: “Mañana volveré a este puesto.”",
      alternativas: [
        "El agente dijo que al día siguiente volvería a ese puesto.",
        "El agente dijo que mañana volveré a este puesto.",
        "El agente dijo que al día siguiente volveré a este puesto.",
        "El agente dijo que mañana volvería a este puesto.",
        "El agente dijo que el día anterior había vuelto a aquel puesto de control.",
      ],
      correta: 0,
      explicacao: "Volveré vira volvería, mañana vira al día siguiente e este vira ese, porque tempo e lugar mudaram.",
      explicacaoErradas:
        "“mañana volveré” repete a fala sem ajuste. “al día siguiente volveré” ajusta só o tempo. “mañana volvería” ajusta só o verbo. “el día anterior” muda o sentido.",
      pegadinha: "Mudar o verbo e esquecer as referências.",
      conhecimento: "Hoy vira aquel día, e ayer vira el día anterior.",
    },
    {
      topico: "Coesão referencial",
      subassunto: "Las e ellos",
      dificuldade: 5,
      raciocinio: "Troque cada pronome pelo nome e leia de novo.",
      enunciado:
        "Texto: “Los conductores pidieron más áreas de descanso. La empresa se las prometió, pero ellos todavía esperan.” As palavras “las” e “ellos” retomam, nessa ordem,",
      alternativas: [
        "os motoristas e as áreas de descanso",
        "as áreas de descanso e os motoristas",
        "as áreas de descanso e a empresa do transporte",
        "a empresa e os motoristas da rodovia",
        "os motoristas e a empresa de transporte de cargas",
      ],
      correta: 1,
      explicacao: "Las é feminino plural e retoma áreas. Ellos é masculino plural e retoma conductores.",
      explicacaoErradas:
        "“os motoristas e as áreas” inverte a ordem. “a empresa do transporte” não é ellos, pois empresa é feminina e singular. “a empresa e os motoristas” erra o las.",
      pegadinha: "Ignorar o gênero e o número do pronome.",
      conhecimento: "Em se las prometió, o se retoma los conductores.",
    },
    {
      topico: "Tipos de texto",
      subassunto: "Injunção",
      dificuldade: 4,
      raciocinio: "Olhe a forma dos verbos.",
      enunciado: "Texto: “Reduzca la velocidad, encienda las luces y mantenga la distancia.” Esse trecho é, principalmente,",
      alternativas: [
        "narrativo, pois conta fatos em sequência no tempo",
        "descritivo, pois mostra como é o trecho da rodovia",
        "dissertativo, pois defende uma tese sobre a direção",
        "exclamativo, pois mostra espanto de quem está na estrada",
        "injuntivo, pois orienta o leitor a agir",
      ],
      correta: 4,
      explicacao: "Os verbos estão no imperativo com usted e dão instruções. Esse é o traço do texto injuntivo.",
      explicacaoErradas:
        "“narrativo” exigiria fatos. “descritivo” exigiria características. “dissertativo” exigiria argumento. “exclamativo” é tipo de frase, e não há emoção no trecho.",
      pegadinha: "Ler reduzca como presente do indicativo.",
      conhecimento: "Manuais, receitas e avisos são injuntivos.",
    },
    {
      topico: "Coerência",
      subassunto: "Causa e conclusão",
      dificuldade: 5,
      raciocinio: "Um caminhão vazio pesa menos.",
      enunciado: "Texto: “El camión estaba vacío. Por eso, superó el límite de peso.” O problema do trecho é que",
      alternativas: [
        "a causa apresentada contraria a conclusão",
        "falta um sujeito na segunda frase, e o verbo superó fica sem dono",
        "vacío significa cheio em espanhol, o que muda o sentido do texto",
        "o verbo superó está no tempo errado para um fato já passado",
        "por eso indica oposição, e o certo seria o uso de sin embargo",
      ],
      correta: 0,
      explicacao: "Por eso liga causa e consequência, mas estar vazio não leva a passar do peso. As ideias não combinam.",
      explicacaoErradas:
        "“falta um sujeito” ignora o sujeito oculto, el camión. “vacío significa cheio” é falso. “tempo errado” erra, pois superó é passado. “por eso indica oposição” é falso.",
      pegadinha: "Procurar erro de gramática em um problema de sentido.",
      conhecimento: "Coesão é a ligação, e coerência é o sentido.",
    },
    {
      topico: "Coesão sequencial",
      subassunto: "Conectores",
      dificuldade: 4,
      raciocinio: "Chuva a noite toda e trecho aberto: a relação é de quebra.",
      enunciado: "Complete de modo coerente: “Llovió toda la noche; ___, el tramo siguió abierto.”",
      alternativas: ["por eso", "así que", "por lo tanto", "sin embargo", "de modo que"],
      correta: 3,
      explicacao: "O esperado seria fechar o trecho. Como isso não ocorreu, a ligação é de oposição: sin embargo.",
      explicacaoErradas:
        "“por eso”, “así que”, “por lo tanto” e “de modo que” indicam consequência, e o trecho aberto não é consequência da chuva.",
      pegadinha: "Ler sin embargo como “sem embargo”, sem valor de oposição.",
      conhecimento: "No obstante também indica oposição.",
    },
    {
      topico: "Tipos de texto",
      subassunto: "Dissertação",
      dificuldade: 4,
      raciocinio: "Há uma ideia e uma prova dela.",
      enunciado:
        "Texto: “La fiscalización reduce los accidentes, pues cambia el comportamiento de los conductores. Prueba de ello son las cifras de los últimos años.” Predomina no trecho a",
      alternativas: [
        "narração, pois relata fatos com personagens e tempo marcado",
        "dissertação, pois defende uma ideia com argumento",
        "descrição, pois retrata as características de uma rodovia",
        "injunção, pois manda o leitor cumprir uma regra de trânsito",
        "conversa, pois reproduz a fala de dois motoristas na estrada",
      ],
      correta: 1,
      explicacao: "O trecho afirma que a fiscalização reduz acidentes, explica o motivo e cita uma prova.",
      explicacaoErradas:
        "“narração” exigiria fatos em sequência. “descrição” exigiria características. “injunção” exigiria ordem. “conversa” exigiria falas.",
      pegadinha: "Confundir citar números com narrar.",
      conhecimento: "Pues, nesse uso, indica causa, como “pois”.",
    },
  ],
};
