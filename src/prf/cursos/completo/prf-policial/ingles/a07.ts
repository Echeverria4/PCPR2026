import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "ingles-07",
  resumo: {
    ideia:
      "Esta aula fecha a gramática: relato de falas, números, quantidades, marcadores, perguntas e condicionais, além do vocabulário policial.",
    itens: [
      {
        termo: "Expressões idiomáticas",
        faz: "O sentido vem do conjunto. Off the hook é livre de culpa ou de obrigação.",
      },
      {
        termo: "Discurso indireto",
        faz: "O tempo recua um passo, e mudam pronomes e advérbios: tomorrow vira the next day.",
      },
      {
        termo: "Numerais",
        faz: "A vírgula separa milhares, e o ponto separa decimais. É o contrário do português.",
      },
      {
        termo: "Few e a few",
        faz: "Few é quase nenhum. A few é alguns. Little e a little têm a mesma lógica com incontáveis.",
      },
      {
        termo: "Marcadores de discurso",
        faz: "Organizam o texto. Moreover soma ideias. By the way muda de assunto.",
      },
      {
        termo: "Question tags",
        faz: "Frase positiva pede tag negativa, e frase negativa pede tag positiva.",
      },
      {
        termo: "Infinitivo e gerúndio",
        faz: "Alguns verbos pedem -ing, e outros pedem to. Stop muda de sentido com cada um.",
      },
      {
        termo: "Condicionais",
        faz: "If + had + particípio, com would have + particípio: hipótese sobre o passado, que não aconteceu.",
      },
      {
        termo: "Vocabulário policial",
        faz: "Abduction é sequestro, blackmail é chantagem, clue é pista, e cold case é caso arquivado.",
      },
    ],
    cuidado: "12,500 em inglês é doze mil e quinhentos. 0.34 é zero vírgula trinta e quatro.",
  },
  questoes: [
    {
      topico: "Discurso indireto",
      subassunto: "Tempo e advérbio",
      dificuldade: 5,
      raciocinio: "Mudam o verbo, o pronome e a palavra de tempo.",
      enunciado: "A agente disse “I will check the truck tomorrow.” O relato correto, em discurso indireto, é",
      alternativas: [
        "She said she would check the truck the next day.",
        "She said I would check the truck the next day.",
        "She said she will check the truck tomorrow.",
        "She said she checks the truck on the following day.",
        "She said she would have checked the truck on that day.",
      ],
      correta: 0,
      explicacao: "Will vira would, I vira she, e tomorrow vira the next day.",
      explicacaoErradas:
        "“she will check” mantém o tempo. “I would check” mantém o pronome. “checks” usa o presente. “would have checked” traz uma hipótese passada.",
      pegadinha: "Mudar o verbo e esquecer o advérbio de tempo.",
      conhecimento: "No indireto, as aspas somem, e that é opcional.",
    },
    {
      topico: "Question tags",
      subassunto: "Sujeito negativo",
      dificuldade: 5,
      raciocinio: "Nobody já torna a frase negativa.",
      enunciado: "Complete: “Nobody stopped at the checkpoint, ___?”",
      alternativas: ["didn't they", "didn't he", "did he", "did they", "do they"],
      correta: 3,
      explicacao: "Nobody dá sentido negativo à frase, então a tag é positiva. O pronome usado para nobody é they.",
      explicacaoErradas:
        "“didn't they” e “didn't he” fazem tag negativa. “did he” erra o pronome. “do they” erra o tempo.",
      pegadinha: "Achar que a frase é positiva porque o verbo não tem not.",
      conhecimento: "Em “You are on duty, aren't you?”, a tag é negativa porque a frase é positiva.",
    },
    {
      topico: "Numerais",
      subassunto: "Vírgula e ponto",
      dificuldade: 4,
      raciocinio: "Em inglês, vírgula e ponto trocam de papel.",
      enunciado:
        "Um relatório diz “The truck carried 12,500 kg of soybeans, and the test showed 0.34 mg/L.” Em português, os valores são",
      alternativas: [
        "12,5 kg e 0,34 mg/L",
        "12.500 kg e 0,34 mg/L",
        "125 mil kg e 0,34 mg/L",
        "12.500 kg e 34 mg/L",
        "125 kg e 0,034 mg/L",
      ],
      correta: 1,
      explicacao: "A vírgula de 12,500 separa o milhar. O ponto de 0.34 separa os decimais.",
      explicacaoErradas:
        "“12,5 kg” lê a vírgula como decimal. “125 mil kg” aumenta o valor. “34 mg/L” ignora o decimal. “125 kg” erra os dois.",
      pegadinha: "Ler a vírgula do inglês como a do português.",
      conhecimento: "Em datas americanas, o mês vem antes do dia: 05/11 pode ser 11 de maio.",
    },
    {
      topico: "Quantificadores",
      subassunto: "Few e a few",
      dificuldade: 5,
      raciocinio: "O artigo muda a ideia de escassez.",
      enunciado:
        "Compare “The team had few clues, so the case stopped.” e “The team had a few clues, so the case moved on.” A diferença é que",
      alternativas: [
        "few mostra escassez, e a few mostra uma quantidade pequena, mas útil",
        "few mostra grande quantidade, e a few mostra falta quase total",
        "as duas formas são iguais, e só o registro da frase muda",
        "few vale para incontáveis, e a few vale só para contáveis",
        "few pede verbo no singular, e a few pede verbo no plural em toda frase",
      ],
      correta: 0,
      explicacao: "Few tem tom negativo: quase nenhum. A few tem tom positivo: alguns. O resultado do caso confirma isso.",
      explicacaoErradas:
        "“grande quantidade” inverte. “são iguais” ignora o artigo. “incontáveis” seria little e a little. “verbo no singular” não é a diferença.",
      pegadinha: "Ignorar o artigo antes de few.",
      conhecimento: "Little e a little fazem a mesma distinção com incontáveis.",
    },
    {
      topico: "Marcadores de discurso",
      subassunto: "By the way",
      dificuldade: 5,
      raciocinio: "É marcador ou é “pelo modo”?",
      enunciado:
        "Leia: I. “By the way, did you check the spare tire?” II. “The inspector was impressed by the way the team worked.” A expressão significa, nessa ordem,",
      alternativas: [
        "pelo modo como e a propósito",
        "pela estrada e a propósito",
        "a propósito e por causa da estrada usada",
        "pelo caminho e pelo caminho da equipe na via",
        "a propósito e pelo modo como",
      ],
      correta: 4,
      explicacao: "Em I, a expressão muda de assunto. Em II, ela vem depois de impressed e significa “pelo modo como”.",
      explicacaoErradas:
        "“pelo modo como e a propósito” inverte a ordem. “pela estrada” e “pelo caminho” traduzem way ao pé da letra. “por causa da estrada” erra II.",
      pegadinha: "Dar o mesmo sentido às duas frases.",
      conhecimento: "Moreover, furthermore e in addition somam ideias.",
    },
    {
      topico: "Infinitivo e gerúndio",
      subassunto: "Stop",
      dificuldade: 5,
      raciocinio: "Stop + -ing é largar. Stop + to é parar para fazer.",
      enunciado: "Compare “Paulo stopped to smoke at the gas station.” e “Rui stopped smoking last year.” Conclui-se que",
      alternativas: [
        "Paulo largou o cigarro, e Rui parou para fumar",
        "os dois largaram o cigarro no ano passado, depois de uma blitz",
        "os dois pararam para fumar em um posto de gasolina da estrada",
        "Paulo parou para fumar, e Rui largou o cigarro",
        "Paulo fuma sem parar, e Rui nunca fumou na vida até aqui",
      ],
      correta: 3,
      explicacao: "Stop to + verbo indica a pausa feita para fazer algo. Stop + -ing indica deixar de fazer.",
      explicacaoErradas:
        "“Paulo largou” inverte os casos. “os dois largaram” e “os dois pararam” igualam as formas. “nunca fumou” contraria stopped smoking.",
      pegadinha: "Ignorar a forma do verbo depois de stop.",
      conhecimento: "Enjoy e avoid pedem -ing. Want e agree pedem to.",
    },
    {
      topico: "Condicionais",
      subassunto: "Hipótese sobre o passado",
      dificuldade: 5,
      raciocinio: "O if + had mostra o contrário do que ocorreu.",
      enunciado: "Da frase “If the driver had worn a seat belt, he would have survived.” conclui-se que o motorista",
      alternativas: [
        "usou o cinto e sobreviveu à batida na pista da rodovia",
        "vai usar o cinto e, assim, vai sobreviver a outra batida",
        "usou o cinto, mas mesmo assim não sobreviveu à batida",
        "não usou o cinto, mas sobreviveu ao acidente mais grave",
        "não usou o cinto e não sobreviveu à batida",
      ],
      correta: 4,
      explicacao: "A forma trata de uma hipótese contrária ao fato: ele não usou o cinto e, por isso, não sobreviveu.",
      explicacaoErradas:
        "“usou o cinto e sobreviveu” toma a hipótese como fato. “vai usar” olha para o futuro. “mesmo assim não sobreviveu” e “mas sobreviveu” quebram a relação de causa da frase.",
      pegadinha: "Ler o if como algo que aconteceu.",
      conhecimento: "If + passado com would + verbo é hipótese sobre o presente.",
    },
    {
      topico: "Vocabulário",
      subassunto: "Termos policiais",
      dificuldade: 4,
      raciocinio: "Blackmail não tem relação com cor. Clue não tem relação com cliente.",
      enunciado:
        "A frase “After the abduction, the gang used blackmail, but a clue led the police to them.” tem a tradução correta em",
      alternativas: [
        "Após a fuga, o bando pintou o carro de preto, e um cliente levou a polícia a ele.",
        "Após o assalto, o bando fez ameaças, e um erro levou a polícia ao endereço dele.",
        "Após o sequestro, o bando fez chantagem, mas uma pista levou a polícia a ele.",
        "Após o sequestro, o bando usou carro preto, e uma chave levou a polícia a ele.",
        "Após o sequestro, o bando fez chantagem, mas a polícia perdeu a pista dele de vez.",
      ],
      correta: 2,
      explicacao: "Abduction é sequestro, blackmail é chantagem, e clue é pista. Led é o passado de lead.",
      explicacaoErradas:
        "“fuga” e “assalto” erram abduction. “pintou o carro de preto” e “carro preto” leem blackmail pela aparência. “cliente” e “chave” erram clue. “perdeu a pista” inverte o fim.",
      pegadinha: "Deduzir blackmail pela palavra black.",
      conhecimento: "Body camera é câmera corporal, e concealment é ocultação.",
    },
    {
      topico: "Expressões idiomáticas",
      subassunto: "Off the hook",
      dificuldade: 5,
      raciocinio: "A expressão vale pelo conjunto.",
      enunciado: "Em “The video showed that the driver was off the hook.”, entende-se que o motorista",
      alternativas: [
        "foi preso depois que a polícia viu o vídeo gravado na via",
        "estava no telefone, que ficou fora do gancho na hora da batida",
        "foi inocentado, pois o vídeo o livrou de culpa",
        "estava cansado demais para seguir dirigindo naquela noite",
        "foi multado por usar o gancho do reboque sem autorização",
      ],
      correta: 2,
      explicacao: "Off the hook quer dizer que a pessoa se livrou da culpa ou de um problema.",
      explicacaoErradas:
        "“foi preso” é o oposto. “fora do gancho” e “gancho do reboque” traduzem palavra por palavra. “cansado demais” não tem base na frase.",
      pegadinha: "Traduzir hook ao pé da letra.",
      conhecimento: "A melhor forma de aprender expressões é vê-las em frases, como nas questões.",
    },
  ],
};
