import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-05",
  resumo: {
    ideia:
      "Conjunção mostra a relação entre as ideias: soma, oposição, causa, consequência. Em prova, ela costuma decidir o sentido do trecho.",
    itens: [
      {
        termo: "Y e e",
        faz: "Y vira e antes de som de i: padres e hijos. Com hie-, fica y: nieve y hielo.",
      },
      {
        termo: "O e u",
        faz: "O vira u antes de som de o: siete u ocho.",
      },
      {
        termo: "Pero e sino",
        faz: "Pero faz ressalva. Sino corrige algo negado antes: no fue multa, sino advertencia.",
      },
      {
        termo: "Sin embargo",
        faz: "É “no entanto”. Não tem relação com embargo judicial.",
      },
      {
        termo: "Aunque",
        faz: "Com indicativo, é fato. Com subjuntivo, é hipótese ou fato que não importa.",
      },
      {
        termo: "Conque",
        faz: "Mostra consequência: portanto, então.",
      },
      {
        termo: "Es decir",
        faz: "Explica o que veio antes: ou seja.",
      },
      {
        termo: "Porque e por qué",
        faz: "Porque dá a causa. ¿Por qué? faz a pergunta.",
      },
    ],
    cuidado: "A causa de é “por causa de”. Tradução ao pé da letra de conectivo costuma errar o sentido.",
  },
  questoes: [
    {
      topico: "Copulativas",
      subassunto: "Y e e",
      dificuldade: 4,
      raciocinio: "O que conta é o som seguinte.",
      enunciado: "Complete: “policías ___ inspectores” e “nieve ___ hielo”.",
      alternativas: ["y, e", "e, y", "e, e", "y, y", "i, y"],
      correta: 1,
      explicacao: "Y vira e antes de som de i, como em inspectores. Diante de hie-, o som é outro, e fica y.",
      explicacaoErradas:
        "“y, e” inverte os casos. “e, e” ignora o hie-. “y, y” ignora a troca. “i, y” usa uma forma que não existe como conjunção.",
      pegadinha: "Trocar também antes de hie-.",
      conhecimento: "Nieve é neve, e hielo é gelo.",
    },
    {
      topico: "Disjuntivas",
      subassunto: "O e u",
      dificuldade: 4,
      raciocinio: "Só o som de o provoca a troca.",
      enunciado: "Complete: “siete ___ ocho camiones” e “coches ___ camiones”.",
      alternativas: ["o, u", "o, o", "u, u", "e, o", "u, o"],
      correta: 4,
      explicacao: "O vira u antes de som de o: siete u ocho. Em coches o camiones, não há esse encontro.",
      explicacaoErradas:
        "“o, u” inverte os casos. “o, o” ignora a troca. “u, u” troca sem motivo. “e, o” usa a conjunção de soma.",
      pegadinha: "Trocar o por u em qualquer lista.",
      conhecimento: "A troca vale também antes de ho-: mujeres u hombres.",
    },
    {
      topico: "Adversativas",
      subassunto: "Sino",
      dificuldade: 5,
      raciocinio: "Há negação antes e uma correção depois.",
      enunciado: "Complete: “No fue una multa, ___ una advertencia.”",
      alternativas: ["sino", "pero", "si no", "sin embargo", "aunque"],
      correta: 0,
      explicacao: "Sino corrige o termo negado e traz o certo. Pero só acrescentaria uma ressalva.",
      explicacaoErradas:
        "“pero” não troca um termo por outro. “si no” é condição: se não. “sin embargo” e “aunque” não ligam dois nomes corrigindo um deles.",
      pegadinha: "Traduzir “mas” sempre por pero.",
      conhecimento: "Antes de verbo, a forma é sino que.",
    },
    {
      topico: "Adversativas",
      subassunto: "Sin embargo",
      dificuldade: 4,
      raciocinio: "Papéis em ordem, e mesmo assim houve retenção.",
      enunciado: "Em “Los papeles del camión estaban en regla; sin embargo, el agente lo retuvo.”, “sin embargo” indica",
      alternativas: [
        "causa da retenção do caminhão",
        "conclusão do que foi dito antes",
        "ausência de ordem judicial contra a carga",
        "oposição, com o sentido de “no entanto”",
        "tempo, com o sentido de “logo depois de”",
      ],
      correta: 3,
      explicacao: "A expressão opõe os fatos. Era de esperar a liberação, mas o agente reteve o caminhão.",
      explicacaoErradas:
        "“causa” e “conclusão” não cabem, pois a segunda parte contraria a primeira. “ordem judicial” lê embargo ao pé da letra. “tempo” não está na expressão.",
      pegadinha: "Ler embargo como medida judicial.",
      conhecimento: "No obstante tem sentido parecido.",
    },
    {
      topico: "Concessivas",
      subassunto: "Aunque com indicativo e subjuntivo",
      dificuldade: 5,
      raciocinio: "O modo do verbo muda a certeza.",
      enunciado: "Compare “Aunque llueve, saldremos.” e “Aunque llueva, saldremos.” A diferença é que",
      alternativas: [
        "a primeira trata de hipótese, e a segunda, de chuva já presente",
        "as duas têm o mesmo sentido, e só muda a região de quem fala",
        "a primeira trata de fato, e a segunda, de uma hipótese",
        "a primeira nega a saída, e a segunda confirma a saída da equipe",
        "as duas falam do passado, e só a segunda é uma ordem",
      ],
      correta: 2,
      explicacao: "Llueve, no indicativo, é fato: embora esteja chovendo. Llueva, no subjuntivo, é hipótese: mesmo que chova.",
      explicacaoErradas:
        "“a primeira trata de hipótese” inverte os casos. “mesmo sentido” ignora o modo. “nega a saída” contraria saldremos. “falam do passado” erra o tempo.",
      pegadinha: "Achar que aunque sempre pede o mesmo modo.",
      conhecimento: "Pese a que tem o mesmo valor concessivo.",
    },
    {
      topico: "Consecutivas",
      subassunto: "Conque",
      dificuldade: 5,
      raciocinio: "Escrito junto, liga causa e resultado.",
      enunciado: "Em “Ya es tarde, conque saldremos mañana.”, a palavra “conque” expressa",
      alternativas: [
        "instrumento, como em “com que”",
        "consequência, como “portanto”",
        "condição, como “desde que”",
        "adição, como “além disso”, sem relação de sentido",
        "concessão, como “embora”, contra o que veio antes",
      ],
      correta: 1,
      explicacao: "Conque introduz a consequência do que foi dito: é tarde, portanto sairemos amanhã.",
      explicacaoErradas:
        "“instrumento” lê a palavra separada, con que. “condição”, “adição” e “concessão” não dão a relação entre o horário e a decisão.",
      pegadinha: "Ler conque como “com que”.",
      conhecimento: "Por tanto e así que também mostram consequência.",
    },
    {
      topico: "Explicativas",
      subassunto: "Es decir",
      dificuldade: 4,
      raciocinio: "A segunda parte repete a ideia com outras palavras.",
      enunciado: "Em “La carga estaba vencida, es decir, no se podía vender.”, a expressão “es decir” introduz",
      alternativas: [
        "uma oposição ao que foi dito antes",
        "uma ordem do agente ao dono da carga",
        "a fala de outra pessoa, citada no texto",
        "uma causa para a carga ter vencido na estrada",
        "uma explicação, no sentido de “ou seja”",
      ],
      correta: 4,
      explicacao: "Es decir esclarece o trecho anterior, com sentido de “ou seja”.",
      explicacaoErradas:
        "“oposição” pediria pero. “uma ordem” não aparece. “a fala de outra pessoa” lê decir como verbo de citação. “uma causa” inverte a relação.",
      pegadinha: "Traduzir a expressão ao pé da letra.",
      conhecimento: "O sea tem o mesmo sentido.",
    },
  ],
};
