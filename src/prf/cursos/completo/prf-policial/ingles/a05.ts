import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "ingles-05",
  resumo: {
    ideia:
      "Os tempos simples situam a ação: presente para fatos e rotinas, passado para o que acabou, futuro para decisões e planos.",
    itens: [
      {
        termo: "Simple Present",
        faz: "Fatos, hábitos, rotinas, horários e tabelas.",
        pista: "Na 3ª pessoa: -s, -es depois de s, ss, sh, ch e x, e -ies quando o y vem depois de consoante.",
      },
      {
        termo: "Do e does",
        faz: "Formam pergunta e negativa no presente. O verbo principal volta à forma base.",
      },
      {
        termo: "Simple Past",
        faz: "Ação concluída, em geral com marca de tempo: yesterday, last week, ago.",
      },
      {
        termo: "Regulares e irregulares",
        faz: "Regular recebe -ed. Irregular não tem regra, é preciso decorar: go, went.",
      },
      {
        termo: "Did",
        faz: "Pergunta e negativa do passado, em todas as pessoas. O verbo fica na forma base.",
      },
      {
        termo: "Will",
        faz: "Decisão na hora da fala, previsão e promessa. A negativa é won't.",
      },
      {
        termo: "Going to",
        faz: "Plano já definido ou previsão com sinal presente. Forma: am, is, are + going to + verbo.",
      },
    ],
    cuidado: "O Simple Past não depende da duração. “Worked for ten years” é ação que já acabou.",
  },
  questoes: [
    {
      topico: "Simple Present",
      subassunto: "Terceira pessoa",
      dificuldade: 4,
      raciocinio: "Olhe a última letra de cada verbo.",
      enunciado: "Complete: “The officer ___ the cameras and ___ the reports every day.” (watch, study)",
      alternativas: ["watches, studies", "watchs, studys", "watch, study", "watches, studys", "watchs, studies"],
      correta: 0,
      explicacao: "Verbo terminado em ch recebe -es. Verbo com consoante antes do y troca o y por -ies.",
      explicacaoErradas:
        "“watchs” ignora a regra do ch. “studys” ignora a do y. “watch, study” não marca a terceira pessoa.",
      pegadinha: "Colocar só -s em todos os verbos.",
      conhecimento: "Com vogal antes do y, basta -s: he plays.",
    },
    {
      topico: "Simple Present",
      subassunto: "Horários",
      dificuldade: 5,
      raciocinio: "Horário de tabela aceita o presente, mesmo com tomorrow.",
      enunciado: "Em “The bus to the border leaves at 6 a.m. tomorrow.”, o presente simples é usado porque",
      alternativas: [
        "descreve uma ação em andamento no momento da fala",
        "marca uma decisão tomada na hora, sem nenhum planejamento prévio",
        "indica horário fixo de tabela, mesmo tratando do futuro",
        "descreve um fato encerrado, sem ligação com o dia de hoje",
        "expressa uma hipótese pouco provável sobre a viagem até lá",
      ],
      correta: 2,
      explicacao: "Horários e tabelas ficam no presente simples, ainda que o fato vá acontecer depois.",
      explicacaoErradas:
        "“em andamento” pediria o contínuo. “decisão tomada na hora” pediria will. “fato encerrado” pediria o passado. “hipótese” pediria um condicional.",
      pegadinha: "Marcar erro na frase por causa de tomorrow.",
      conhecimento: "O presente também aparece em condicionais do tipo zero: If you heat ice, it melts.",
    },
    {
      topico: "Simple Past",
      subassunto: "Did e verbos irregulares",
      dificuldade: 5,
      raciocinio: "Depois de did, forma base. Sem did, passado.",
      enunciado: "Está correta a frase",
      alternativas: [
        "The driver didn't saw the sign and hit the fence.",
        "The driver didn't see the sign and hitted the fence.",
        "The driver not saw the sign and hit the fence there.",
        "The driver doesn't saw the sign and hit the fence.",
        "The driver didn't see the sign and hit the fence.",
      ],
      correta: 4,
      explicacao: "Depois de didn't, o verbo vai para a forma base: see. Hit é irregular e tem a mesma forma no passado.",
      explicacaoErradas:
        "“didn't saw” e “doesn't saw” marcam o tempo duas vezes ou misturam tempos. “hitted” não existe. “not saw” dispensa o auxiliar.",
      pegadinha: "Manter o verbo no passado depois de didn't.",
      conhecimento: "Cut, put e hit não mudam no passado.",
    },
    {
      topico: "Futuro",
      subassunto: "Will e going to",
      dificuldade: 5,
      raciocinio: "Há sinal presente ou decisão de improviso?",
      enunciado:
        "Em “Look at those clouds! It's going to rain.” e “The radio is calling. I'll answer it.”, as formas de futuro indicam, nessa ordem,",
      alternativas: [
        "previsão com sinal presente e decisão na hora da fala",
        "hábito do passado e ordem dada no momento da fala",
        "decisão na hora da fala e previsão com sinal presente",
        "plano antigo sem sinal algum e promessa feita no passado",
        "fato já concluído e pedido de permissão feito ao superior",
      ],
      correta: 0,
      explicacao: "As nuvens são o sinal da previsão com going to. Atender o rádio é uma decisão tomada no instante, com will.",
      explicacaoErradas:
        "“decisão na hora da fala e previsão” inverte a ordem. “hábito do passado”, “plano antigo” e “fato já concluído” não descrevem o futuro das frases.",
      pegadinha: "Tratar will e going to como iguais em qualquer contexto.",
      conhecimento: "Going to também serve para planos: We are going to inspect the fleet.",
    },
    {
      topico: "Simple Past",
      subassunto: "Marcas de tempo",
      dificuldade: 4,
      raciocinio: "Ago pede passado concluído.",
      enunciado: "Complete: “Two hours ago, the team ___ a stolen truck on BR-163.”",
      alternativas: ["has found", "finds", "will find", "found", "is finding"],
      correta: 3,
      explicacao: "Ago marca momento encerrado do passado e pede Simple Past. Find é irregular: found.",
      explicacaoErradas:
        "“has found” não aceita tempo definido. “finds” e “is finding” estão no presente. “will find” está no futuro.",
      pegadinha: "Usar o Present Perfect com ago.",
      conhecimento: "Yesterday, last week e in 2020 pedem o mesmo tempo.",
    },
    {
      topico: "Simple Past",
      subassunto: "Duração e fim da ação",
      dificuldade: 5,
      raciocinio: "A duração não muda o fato de que a ação acabou.",
      enunciado: "A frase “Carlos worked at the Belém post for ten years.” permite concluir que Carlos",
      alternativas: [
        "continua no posto de Belém há dez anos, sem parar",
        "vai trabalhar no posto de Belém pelos próximos dez anos",
        "foi interrompido por algo enquanto trabalhava no posto",
        "não trabalha mais lá, embora a ação tenha durado anos",
        "trabalha em Belém só dez dias por ano, em escala de plantão",
      ],
      correta: 3,
      explicacao: "O Simple Past mostra ação terminada. For ten years diz quanto durou, e não que ela continua.",
      explicacaoErradas:
        "“continua no posto” pediria has worked. “vai trabalhar” pediria o futuro. “foi interrompido” pediria o Past Continuous. “dez dias por ano” inventa uma escala.",
      pegadinha: "Ler for ten years como “há dez anos, até hoje”.",
      conhecimento: "Para o que continua até hoje, o inglês usa o Present Perfect.",
    },
  ],
};
