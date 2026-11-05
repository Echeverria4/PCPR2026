import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-06",
  resumo: {
    ideia:
      "Advérbio informa lugar, tempo, modo, quantidade, afirmação, negação ou dúvida. Vários enganam quem lê pelo português, como apenas, luego e todavía.",
    itens: [
      {
        termo: "Muy e mucho",
        faz: "Muy vem antes de adjetivo e advérbio. Mucho vem com verbo, substantivo e com mejor, peor, más, menos.",
      },
      {
        termo: "Lugar",
        faz: "Aquí, ahí, allí, allá, cerca, lejos. Allá é lá, acolá.",
      },
      {
        termo: "Apenas",
        faz: "Quase não: apenas había tráfico. Antes de fato, é “mal”: apenas llegó.",
      },
      {
        termo: "Luego e a menudo",
        faz: "Luego é depois. A menudo é com frequência.",
      },
      {
        termo: "Ya no e todavía",
        faz: "Ya no é não mais. Todavía é ainda, e nunca “porém”.",
      },
      {
        termo: "Aún e aun",
        faz: "Aún é ainda. Aun, sem acento, é até mesmo.",
      },
      {
        termo: "-mente",
        faz: "Em dois advérbios seguidos, só o último leva o sufixo: clara y pausadamente.",
      },
      {
        termo: "Tampoco",
        faz: "É “também não”: él tampoco.",
      },
    ],
    cuidado: "Interrogativos e exclamativos levam acento: ¿cuándo?, ¿dónde? Sem pergunta, cuando e donde ficam sem acento.",
  },
  questoes: [
    {
      topico: "Muy e mucho",
      subassunto: "Uso das formas",
      dificuldade: 5,
      raciocinio: "Olhe a palavra que vem depois de cada lacuna.",
      enunciado: "Complete: “El camión es ___ grande, lleva ___ carga y es ___ mejor que el otro.”",
      alternativas: [
        "mucho, muy, muy",
        "muy, muy, muy",
        "mucho, mucha, mucho",
        "muy, mucha, mucho",
        "muy, mucho, mucho",
      ],
      correta: 3,
      explicacao: "Muy antes do adjetivo grande. Mucha concorda com carga. Mucho antes de mejor, que é exceção.",
      explicacaoErradas:
        "“mucho” antes de grande quebra a regra. “muy” antes de carga ou de mejor também. “mucho” antes de carga erra a concordância com o feminino.",
      pegadinha: "Usar muy antes de mejor.",
      conhecimento: "A exceção vale para mejor, peor, mayor, menor, más, menos, antes e después.",
    },
    {
      topico: "Falsos amigos",
      subassunto: "Apenas",
      dificuldade: 5,
      raciocinio: "Em espanhol, apenas não é “somente”.",
      enunciado: "Em “Apenas había tráfico en la carretera cuando salimos.”, entende-se que",
      alternativas: [
        "quase não havia trânsito na estrada",
        "havia só trânsito na estrada, nada mais",
        "o trânsito na estrada estava muito intenso",
        "saímos logo depois de o trânsito ter começado",
        "havia um único caminhão parado na estrada",
      ],
      correta: 0,
      explicacao: "Apenas, aqui, é quase não. O trânsito estava fraco.",
      explicacaoErradas:
        "“havia só trânsito” lê apenas como em português. “muito intenso” inverte o sentido. “logo depois” usaria o outro valor, com verbo de fato. “um único caminhão” não está na frase.",
      pegadinha: "Traduzir apenas por somente.",
      conhecimento: "Somente é solo ou solamente.",
    },
    {
      topico: "Tempo",
      subassunto: "Ya no e todavía",
      dificuldade: 4,
      raciocinio: "Uma coisa acabou, e a outra continua.",
      enunciado: "Em “El agente ya no trabaja en el puesto, pero todavía vive cerca.”, conclui-se que ele",
      alternativas: [
        "já trabalha no posto e ainda mora perto dele",
        "nunca trabalhou no posto nem morou naquela região",
        "deixou de trabalhar no posto e continua morando perto",
        "vai voltar a trabalhar no posto quando se mudar para longe",
        "trabalha no posto e mudou-se de lá faz pouco tempo",
      ],
      correta: 2,
      explicacao: "Ya no indica que algo deixou de acontecer. Todavía indica que algo continua.",
      explicacaoErradas:
        "“já trabalha” ignora o no. “nunca trabalhou” contraria ya no. “vai voltar” e “mudou-se” não têm base na frase.",
      pegadinha: "Ler ya no como “já”, sem notar que algo acabou.",
      conhecimento: "Todavía, em português, é “porém”. Em espanhol, é “ainda”.",
    },
    {
      topico: "Tempo",
      subassunto: "A menudo e luego",
      dificuldade: 4,
      raciocinio: "Luego não é imediato.",
      enunciado: "Em “Los camiones paran a menudo en este puesto y luego siguen viaje.”, as expressões significam, nessa ordem,",
      alternativas: [
        "em pequenos grupos e imediatamente",
        "com frequência e depois",
        "raramente e em seguida, sem demora",
        "de manhã cedo e por fim, no último dia",
        "com pressa e logo, no mesmo instante",
      ],
      correta: 1,
      explicacao: "A menudo é com frequência. Luego é depois.",
      explicacaoErradas:
        "“pequenos grupos” lê menudo como miúdo. “raramente” inverte a frequência. “imediatamente” e “logo” traduzem luego pela aparência. “de manhã cedo” não tem base.",
      pegadinha: "Traduzir luego por logo.",
      conhecimento: "Hasta luego é até logo, sem hora marcada.",
    },
    {
      topico: "Tempo",
      subassunto: "Aún e aun",
      dificuldade: 5,
      raciocinio: "O acento separa os sentidos.",
      enunciado: "Compare “Aún no llegó el camión.” e “Aun con lluvia, el equipo trabajó.” As formas significam, nessa ordem,",
      alternativas: [
        "até mesmo e ainda",
        "ainda e já",
        "nunca e sem",
        "também e apesar disso, sem exceção",
        "ainda e até mesmo",
      ],
      correta: 4,
      explicacao: "Aún, com acento, equivale a todavía: ainda. Aun, sem acento, equivale a incluso: até mesmo.",
      explicacaoErradas:
        "“até mesmo e ainda” inverte os casos. “ainda e já” erra a segunda forma. “nunca e sem” e “também e apesar disso” não têm relação com as palavras.",
      pegadinha: "Ignorar o acento.",
      conhecimento: "Tente trocar por todavía: se couber, leva acento.",
    },
    {
      topico: "Modo",
      subassunto: "Sufixo -mente",
      dificuldade: 5,
      raciocinio: "O sufixo não se repete.",
      enunciado: "Em “El agente habló clara y pausadamente.”, a palavra “clara” é",
      alternativas: [
        "adjetivo feminino que concorda com agente",
        "substantivo que nomeia a parte branca do ovo",
        "advérbio, pois -mente fica só na última palavra",
        "verbo na terceira pessoa, no presente do indicativo",
        "pronome que retoma a fala do agente no texto",
      ],
      correta: 2,
      explicacao: "Quando dois advérbios em -mente vêm seguidos, o primeiro fica na forma feminina do adjetivo, sem o sufixo.",
      explicacaoErradas:
        "“adjetivo feminino” não cabe, pois o sujeito é el agente. “substantivo” traz outro sentido da palavra. “verbo” e “pronome” não funcionam na frase.",
      pegadinha: "Ler clara como adjetivo solto.",
      conhecimento: "O adjetivo com acento o mantém: rápidamente.",
    },
    {
      topico: "Negação",
      subassunto: "Tampoco",
      dificuldade: 4,
      raciocinio: "A negação se repete para a outra pessoa.",
      enunciado: "Em “No vi la señal y él tampoco.”, entende-se que",
      alternativas: [
        "ele viu a placa, mas eu não vi nada",
        "eu vi a placa, e ele também viu a mesma",
        "ninguém sabe quem deixou de ver a placa",
        "eu não vi a placa, e ele também não",
        "ele não viu a placa, mas eu consegui ver",
      ],
      correta: 3,
      explicacao: "Tampoco é o par negativo de también: também não.",
      explicacaoErradas:
        "“ele viu” e “eu consegui ver” contrariam a negação. “ele também viu” usa o sentido de también. “ninguém sabe” não está na frase.",
      pegadinha: "Ler tampoco como también.",
      conhecimento: "Jamás e nunca também negam.",
    },
  ],
};
