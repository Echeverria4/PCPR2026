import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-01",
  resumo: {
    ideia:
      "Em prova, espanhol é leitura. Esta aula mostra as ferramentas de partida: alfabeto, sinais próprios da língua, dicionário e cuidado com as palavras parecidas com o português.",
    itens: [
      {
        termo: "Alfabeto",
        faz: "Tem 27 letras. A ñ é própria da língua. Ch e ll são dígrafos, sem posto de letra desde 2010.",
      },
      {
        termo: "Nome das letras",
        faz: "É feminino: la be, la hache, la eñe.",
      },
      {
        termo: "Pergunta e exclamação",
        faz: "Os sinais abrem e fecham: ¿Dónde? ¡Alto! Eles ficam só na parte que pergunta ou exclama.",
      },
      {
        termo: "Raya",
        faz: "O travessão abre a fala e marca a entrada do narrador.",
      },
      {
        termo: "Palavras transparentes",
        faz: "Boa parte do vocabulário lembra o português e permite ler sem traduzir palavra por palavra.",
      },
      {
        termo: "Falsos amigos",
        faz: "Algumas palavras parecem iguais, mas mudam de sentido: oficina é escritório.",
      },
      {
        termo: "Dicionário",
        faz: "O da Real Academia Española explica a palavra em espanhol. Serve para conferir sentido e gênero.",
      },
    ],
    cuidado: "Parecer com o português não garante o sentido. Leia a frase inteira antes de fechar a tradução de uma palavra.",
  },
  questoes: [
    {
      topico: "Alfabeto",
      subassunto: "Letras e dígrafos",
      dificuldade: 4,
      raciocinio: "Ch e ll perderam o posto de letra em 2010.",
      enunciado: "Pela Ortografía de 2010 da Real Academia Española, o alfabeto do espanhol tem",
      alternativas: [
        "29 letras, porque ch e ll seguem contadas como letras separadas",
        "27 letras, com a ñ, ficando ch e ll como dígrafos",
        "26 letras, iguais às do português, sem nenhuma letra própria",
        "27 letras, com a ñ e a ç, que são próprias da língua",
        "28 letras, com a ñ e o dígrafo rr, ensinado como letra à parte",
      ],
      correta: 1,
      explicacao: "A Ortografía de 2010 fixou 27 letras. A ñ é letra própria. Ch e ll são dígrafos, ou seja, dois sinais para um som.",
      explicacaoErradas:
        "“29 letras” é a contagem antiga. “26 letras” esquece a ñ. “a ç” não faz parte do alfabeto espanhol. “o dígrafo rr” não entra na conta.",
      pegadinha: "Contar ch e ll como letras, como em livros antigos.",
      conhecimento: "Nos dicionários atuais, chico aparece entre as palavras iniciadas por c.",
    },
    {
      topico: "Pontuação",
      subassunto: "Sinal de abertura",
      dificuldade: 4,
      raciocinio: "A pergunta tem dois sinais, e eles são diferentes.",
      enunciado: "Segue a norma do espanhol a frase",
      alternativas: [
        "Dónde dejó usted el camión?",
        "¿Dónde dejó usted el camión¿",
        "?Dónde dejó usted el camión?",
        "¿Dónde dejó usted el camión?",
        "Dónde dejó usted el camión de la empresa?",
      ],
      correta: 3,
      explicacao: "A pergunta abre com ¿ e fecha com ?. O sinal de abertura é obrigatório, mesmo em frases curtas.",
      explicacaoErradas:
        "“Dónde dejó” sem sinal inicial segue o hábito do português. “camión¿” repete o sinal de abertura no fim. “?Dónde” usa o sinal comum no começo.",
      pegadinha: "Achar que o sinal de abertura é opcional.",
      conhecimento: "O mesmo vale para a exclamação: ¡Alto!",
    },
    {
      topico: "Pontuação",
      subassunto: "Exclamação no meio da frase",
      dificuldade: 5,
      raciocinio: "O sinal abre onde a exclamação começa.",
      enunciado: "Uma frase tem início neutro e fim exclamativo. Segue a norma a forma",
      alternativas: [
        "Si no frena, ¡va a chocar!",
        "Si no frena, va a chocar!",
        "¡Si no frena, va a chocar",
        "¡Si no frena, va a chocar!",
        "Si no frena, ¡va a chocar!.",
      ],
      correta: 0,
      explicacao: "Os sinais ficam onde a exclamação começa e termina. Depois da vírgula, a palavra segue em minúscula, e o sinal de fechamento dispensa o ponto.",
      explicacaoErradas:
        "“va a chocar!” sem abertura imita o português. “¡Si no frena” abre e não fecha. “¡Si no frena, va a chocar!” exclama a frase inteira. “chocar!.” soma ponto ao sinal de fechamento.",
      pegadinha: "Achar que o sinal sempre abre no início da frase.",
      conhecimento: "O mesmo vale para a pergunta: Si llueve, ¿vamos igual?",
    },
    {
      topico: "Pontuação",
      subassunto: "Raya",
      dificuldade: 4,
      raciocinio: "Quem fala e quem narra?",
      enunciado: "Em “—¿Adónde va? —preguntó el agente.”, o sinal “—” serve para",
      alternativas: [
        "separar as sílabas da palavra mais longa da frase",
        "indicar que a frase foi cortada no meio pelo autor do texto",
        "marcar uma palavra de outra língua, citada pelo narrador",
        "mostrar que a pergunta não recebeu nenhuma resposta do motorista",
        "abrir a fala e marcar a entrada do narrador",
      ],
      correta: 4,
      explicacao: "A primeira raya abre a fala do personagem. A segunda marca o trecho em que o narrador entra, com preguntó el agente.",
      explicacaoErradas:
        "“separar as sílabas” seria papel do hífen. “cortada no meio” caberia às reticências. “outra língua” pediria aspas ou itálico. “nenhuma resposta” não depende desse sinal.",
      pegadinha: "Confundir a raya com o hífen.",
      conhecimento: "Adónde indica direção: para onde.",
    },
    {
      topico: "Palavras parecidas",
      subassunto: "Oficina",
      dificuldade: 4,
      raciocinio: "A palavra parece a do português, mas não é.",
      enunciado: "Em “El policía trabaja en una oficina cerca de la aduana.”, entende-se que ele trabalha",
      alternativas: [
        "em uma oficina mecânica perto da alfândega",
        "em um posto longe da alfândega",
        "em um escritório perto da alfândega",
        "em uma oficina mecânica dentro do pátio da alfândega",
        "em uma sala de aula ao lado da aduana do aeroporto",
      ],
      correta: 2,
      explicacao: "Oficina, em espanhol, é escritório. Oficina mecânica é taller. Aduana é alfândega.",
      explicacaoErradas:
        "“oficina mecânica” traduz pela aparência. “posto longe” contraria cerca de. “sala de aula” não tem base na frase.",
      pegadinha: "Traduzir oficina pela semelhança.",
      conhecimento: "Cerca de, sozinho, quer dizer perto de.",
    },
    {
      topico: "Alfabeto",
      subassunto: "Gênero das letras",
      dificuldade: 5,
      raciocinio: "O artigo acompanha o nome da letra, e não uma palavra citada depois.",
      enunciado: "Diz-se “la hache” e “la eñe” porque, em espanhol,",
      alternativas: [
        "toda palavra iniciada por h ou por ñ pede artigo feminino",
        "os nomes das letras do alfabeto são femininos",
        "o artigo masculino não existe diante de vogal ou de h muda",
        "as duas letras mudaram de gênero com a Ortografía de 2010",
        "o gênero varia conforme a palavra citada depois da letra",
      ],
      correta: 1,
      explicacao: "Os nomes das letras são femininos. Por isso se diz la be, la hache, la eñe.",
      explicacaoErradas:
        "“toda palavra” falha em el hombre. “o artigo masculino não existe” falha em el hijo. “mudaram de gênero” inventa uma regra, assim como “varia conforme”.",
      pegadinha: "Generalizar para toda palavra com h.",
      conhecimento: "A letra y tem o nome ye, e a w é uve doble.",
    },
  ],
};
