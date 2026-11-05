import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "fisica-04",
  resumo: {
    ideia:
      "Sem a resistência do ar, todo corpo sofre a mesma aceleração da gravidade. Nos lançamentos, a vertical e a horizontal são tratadas em separado.",
    itens: [
      {
        termo: "Queda livre",
        faz: "h = g·t²/2 e v = g·t. Parte do repouso.",
      },
      {
        termo: "Massa",
        faz: "No vácuo, não muda o tempo de queda.",
      },
      {
        termo: "Lançamento para cima",
        faz: "Tempo de subida: v0 ÷ g. Altura máxima: v0² ÷ 2g.",
      },
      {
        termo: "Ponto mais alto",
        faz: "A velocidade vertical é zero, mas a aceleração continua igual a g.",
      },
      {
        termo: "Lançamento horizontal",
        faz: "Na vertical, é queda livre. Na horizontal, é velocidade constante.",
      },
      {
        termo: "Lançamento oblíquo",
        faz: "Decomponha v0 em vx = v0·cos θ e vy = v0·sen θ.",
      },
      {
        termo: "Alcance",
        faz: "É máximo a 45°. Ângulos que somam 90° dão o mesmo alcance.",
      },
    ],
    cuidado:
      "Velocidade zero não significa aceleração zero. No topo do lançamento, a gravidade continua agindo.",
  },
  questoes: [
    {
      topico: "Queda livre",
      subassunto: "Tempo e velocidade",
      dificuldade: 4,
      raciocinio: "Use h = g·t²/2 e depois v = g·t, com g = 10 m/s².",
      enunciado:
        "Uma pedra cai, a partir do repouso, de um viaduto de 20 m. Sem resistência do ar e com g = 10 m/s², o tempo de queda e a velocidade final são",
      alternativas: ["1,4 s e 14 m/s", "4 s e 40 m/s", "2 s e 10 m/s", "2 s e 20 m/s", "2 s e 200 m/s"],
      correta: 3,
      explicacao: "20 = 5t², então t = 2 s. Logo, v = 10 · 2 = 20 m/s.",
      explicacaoErradas:
        "“1,4 s e 14 m/s” esquece o 2 da fórmula. “4 s e 40 m/s” não tira a raiz. “2 s e 10 m/s” usa g como velocidade. “2 s e 200 m/s” multiplica g pela altura.",
      pegadinha: "Esquecer a raiz quadrada.",
      conhecimento: "Em queda livre, a velocidade cresce 10 m/s a cada segundo.",
    },
    {
      topico: "Queda livre",
      subassunto: "Massa e tempo de queda",
      dificuldade: 5,
      raciocinio: "No vácuo, a aceleração é a mesma para qualquer massa.",
      enunciado: "Duas esferas, de 1 kg e de 5 kg, são soltas juntas da mesma altura, no vácuo. Nesse caso,",
      alternativas: [
        "as duas chegam juntas, pois a aceleração não depende da massa",
        "a esfera de 5 kg chega antes, pois o peso dela é maior que o da outra",
        "a esfera de 1 kg chega antes, pois ela tem menos inércia",
        "a esfera de 5 kg chega cinco vezes mais rápido que a outra",
        "nenhuma cai, pois no vácuo não há força agindo sobre elas",
      ],
      correta: 0,
      explicacao: "O peso maior é compensado pela inércia maior. A aceleração é g para as duas.",
      explicacaoErradas:
        "“chega antes” e “cinco vezes mais rápido” ligam o tempo à massa. “nenhuma cai” confunde vácuo com falta de gravidade.",
      pegadinha: "Trazer a experiência do ar para o vácuo.",
      conhecimento: "No ar, a diferença vem da resistência do ar.",
    },
    {
      topico: "Lançamento vertical",
      subassunto: "Subida e altura máxima",
      dificuldade: 5,
      raciocinio: "A subida termina quando a velocidade zera.",
      enunciado:
        "Um objeto é lançado para cima a 30 m/s, com g = 10 m/s² e sem resistência do ar. O tempo de subida e a altura máxima são",
      alternativas: ["3 s e 90 m", "6 s e 45 m", "3 s e 45 m", "3 s e 30 m", "1,5 s e 45 m"],
      correta: 2,
      explicacao: "Subida: 30 ÷ 10 = 3 s. Altura: 900 ÷ 20 = 45 m.",
      explicacaoErradas:
        "“3 s e 90 m” esquece o 2 da fórmula. “6 s e 45 m” dá o tempo total. “3 s e 30 m” repete a velocidade. “1,5 s e 45 m” divide o tempo de subida ao meio.",
      pegadinha: "Trocar tempo de subida por tempo total.",
      conhecimento: "O tempo de subida é igual ao de descida.",
    },
    {
      topico: "Lançamento vertical",
      subassunto: "Ponto mais alto",
      dificuldade: 5,
      raciocinio: "Parar por um instante não desliga a gravidade.",
      enunciado: "No ponto mais alto de um lançamento vertical, sem resistência do ar, o objeto tem",
      alternativas: [
        "velocidade nula e aceleração também nula, pois ele para",
        "velocidade máxima e aceleração nula naquele ponto",
        "velocidade igual à inicial e aceleração igual à da gravidade",
        "velocidade nula e aceleração igual à da gravidade",
        "velocidade nula e aceleração menor que a da gravidade",
      ],
      correta: 3,
      explicacao: "A velocidade zera por um instante, mas a gravidade continua agindo.",
      explicacaoErradas:
        "“aceleração também nula” faria o objeto ficar parado no ar. “velocidade máxima” descreve o oposto. “igual à inicial” vale no retorno ao ponto de partida. “menor que a da gravidade” inventa uma variação.",
      pegadinha: "Achar que velocidade zero exige aceleração zero.",
      conhecimento: "A aceleração da gravidade é a mesma em toda a trajetória.",
    },
    {
      topico: "Lançamento horizontal",
      subassunto: "Velocidade de saída",
      dificuldade: 5,
      raciocinio: "A altura dá o tempo. O alcance e o tempo dão a velocidade.",
      enunciado:
        "Um carro sai na horizontal de uma ribanceira de 5 m e toca o solo 20 m à frente. Com g = 10 m/s² e sem resistência do ar, a velocidade de saída era de",
      alternativas: ["20 km/h", "72 km/h", "5,6 km/h", "102 km/h", "36 km/h"],
      correta: 1,
      explicacao: "5 = 5t², então t = 1 s. Logo, 20 m ÷ 1 s = 20 m/s, que são 72 km/h.",
      explicacaoErradas:
        "“20 km/h” não converte. “5,6 km/h” divide por 3,6. “102 km/h” esquece o 2 da fórmula do tempo. “36 km/h” usa t = 2 s.",
      pegadinha: "Parar em 20 e esquecer a unidade pedida.",
      conhecimento: "O tempo de queda depende só da altura.",
    },
    {
      topico: "Lançamento oblíquo",
      subassunto: "Ângulos complementares",
      dificuldade: 5,
      raciocinio: "Ângulos que somam 90° dão o mesmo alcance.",
      enunciado:
        "Sem resistência do ar, um objeto lançado a 30° do solo tem certo alcance. Com a mesma velocidade inicial, o mesmo alcance será obtido com o ângulo de",
      alternativas: ["45°", "90°", "15°", "120°", "60°"],
      correta: 4,
      explicacao: "30° e 60° somam 90°. O alcance depende de sen 2θ, igual nos dois casos.",
      explicacaoErradas:
        "“45°” dá o alcance máximo. “90°” é lançamento vertical, sem alcance. “15°” é a metade de 30°. “120°” é apontar para trás.",
      pegadinha: "Marcar 45° por lembrar do alcance máximo.",
      conhecimento: "Com ângulos complementares, o maior sobe mais e dura mais no ar.",
    },
  ],
};
