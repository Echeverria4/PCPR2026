import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "fisica-03",
  resumo: {
    ideia:
      "No MRUV, a trajetória é reta e a aceleração é constante. A velocidade muda sempre no mesmo ritmo.",
    itens: [
      {
        termo: "Velocidade",
        faz: "v = v0 + a·t.",
      },
      {
        termo: "Posição",
        faz: "S = S0 + v0·t + a·t²/2.",
        pista: "O número na frente de t² é a metade da aceleração.",
      },
      {
        termo: "Torricelli",
        faz: "v² = v0² + 2·a·ΔS. Serve quando o tempo não aparece.",
      },
      {
        termo: "Acelerado",
        faz: "Velocidade e aceleração têm o mesmo sinal.",
      },
      {
        termo: "Retardado",
        faz: "Velocidade e aceleração têm sinais opostos.",
      },
      {
        termo: "Gráfico v × t",
        faz: "É uma reta inclinada. A inclinação dá a aceleração e a área dá o deslocamento.",
      },
      {
        termo: "Gráfico S × t",
        faz: "É uma parábola.",
      },
      {
        termo: "Parada total",
        faz: "Tempo de reação em velocidade constante mais a distância de frenagem.",
      },
    ],
    cuidado:
      "A distância de frenagem cresce com o quadrado da velocidade. Dobrou a velocidade, a distância fica quatro vezes maior.",
  },
  questoes: [
    {
      topico: "Torricelli",
      subassunto: "Distância de frenagem",
      dificuldade: 5,
      raciocinio: "Sem tempo no enunciado: Torricelli, com a velocidade em m/s.",
      enunciado: "Um veículo a 72 km/h freia com desaceleração constante de 5 m/s² até parar. A distância de frenagem é de",
      alternativas: ["80 m", "4 m", "518 m", "20 m", "40 m"],
      correta: 4,
      explicacao: "72 km/h são 20 m/s. Com v = 0: 0 = 400 − 10·ΔS. Logo, ΔS = 40 m.",
      explicacaoErradas:
        "“80 m” esquece o 2 da fórmula. “4 m” divide 20 por 5, que dá o tempo em segundos. “518 m” usa 72 sem converter. “20 m” repete o valor da velocidade em m/s.",
      pegadinha: "Usar km/h em uma fórmula com aceleração em m/s².",
      conhecimento: "Converta sempre antes de usar Torricelli.",
    },
    {
      topico: "Torricelli",
      subassunto: "Velocidade dobrada",
      dificuldade: 5,
      raciocinio: "A distância é proporcional ao quadrado da velocidade.",
      enunciado:
        "A 60 km/h, um veículo para em 20 m. Com a mesma desaceleração, a 120 km/h a distância de frenagem será de",
      alternativas: ["80 m", "20 m", "160 m", "40 m", "60 m"],
      correta: 0,
      explicacao: "Velocidade 2 vezes maior gera distância 2² = 4 vezes maior. Logo, 80 m.",
      explicacaoErradas:
        "“40 m” supõe relação direta. “20 m” ignora a velocidade. “160 m” usa 2³. “60 m” soma a velocidade à distância.",
      pegadinha: "Dobrar a distância quando a velocidade dobra.",
      conhecimento: "É por isso que o excesso de velocidade pesa tanto na frenagem.",
    },
    {
      topico: "Classificação",
      subassunto: "Acelerado e retardado",
      dificuldade: 4,
      raciocinio: "Calcule v naquele instante e compare os sinais.",
      enunciado: "Um móvel segue v = 30 − 6t, no SI. No instante t = 7 s, o movimento é",
      alternativas: [
        "progressivo e retardado, pois a velocidade ainda é positiva",
        "retrógrado e acelerado, pois v e a têm o mesmo sinal",
        "progressivo e acelerado, pois o tempo segue aumentando",
        "retrógrado e retardado, pois a aceleração é negativa",
        "uniforme, pois a aceleração tem valor constante",
      ],
      correta: 1,
      explicacao: "v = 30 − 42 = −12 m/s, e a = −6 m/s². Os sinais são iguais.",
      explicacaoErradas:
        "“progressivo e retardado” vale antes de t = 5 s. “progressivo e acelerado” ignora o sinal de v. “retrógrado e retardado” olha só o sinal de a. “uniforme” exigiria aceleração nula.",
      pegadinha: "Olhar só o sinal da aceleração.",
      conhecimento: "Em t = 5 s, o móvel para e muda de sentido.",
    },
    {
      topico: "Gráficos",
      subassunto: "Área e inclinação",
      dificuldade: 5,
      raciocinio: "A área é um trapézio, e a inclinação é Δv ÷ Δt.",
      enunciado:
        "Em um gráfico v × t, a velocidade sobe em linha reta de 10 m/s para 30 m/s em 8 s. O deslocamento e a aceleração são, nessa ordem,",
      alternativas: [
        "240 m e 2,5 m/s²",
        "160 m e 2,5 m/s²",
        "80 m e 2,5 m/s²",
        "160 m e 3,75 m/s²",
        "240 m e 3,75 m/s²",
      ],
      correta: 1,
      explicacao: "Área: (10 + 30) ÷ 2 · 8 = 160 m. Aceleração: 20 ÷ 8 = 2,5 m/s².",
      explicacaoErradas:
        "“240 m” usa 30 · 8, como se a velocidade fosse sempre 30 m/s. “80 m” usa 10 · 8. “3,75 m/s²” divide 30 por 8, sem subtrair a velocidade inicial.",
      pegadinha: "Calcular um retângulo no lugar do trapézio.",
      conhecimento: "No MRUV, a velocidade média é a média das velocidades inicial e final.",
    },
    {
      topico: "Parada total",
      subassunto: "Tempo de reação",
      dificuldade: 5,
      raciocinio: "Some o trecho sem freio ao trecho de frenagem.",
      enunciado:
        "A 90 km/h, um condutor leva 1 s para reagir e então freia a 5 m/s². A distância total até parar é de",
      alternativas: ["87,5 m", "62,5 m", "150 m", "125 m", "37,5 m"],
      correta: 0,
      explicacao: "90 km/h são 25 m/s. Reação: 25 m. Frenagem: 625 ÷ 10 = 62,5 m. Total: 87,5 m.",
      explicacaoErradas:
        "“62,5 m” ignora a reação. “150 m” soma a reação a uma frenagem sem o 2. “125 m” esquece o 2 e a reação. “37,5 m” subtrai a reação.",
      pegadinha: "Esquecer que o veículo anda enquanto o condutor reage.",
      conhecimento: "Durante a reação, a velocidade é constante.",
    },
    {
      topico: "Função horária",
      subassunto: "Leitura dos coeficientes",
      dificuldade: 4,
      raciocinio: "O número junto de t² é a metade da aceleração.",
      enunciado: "Um móvel segue S = 5 + 10t + 2t², no SI. A velocidade inicial e a aceleração são, nessa ordem,",
      alternativas: ["10 m/s e 2 m/s²", "5 m/s e 10 m/s²", "2 m/s e 10 m/s²", "5 m/s e 4 m/s²", "10 m/s e 4 m/s²"],
      correta: 4,
      explicacao: "v0 = 10 m/s. Como a/2 = 2, a = 4 m/s².",
      explicacaoErradas:
        "“10 m/s e 2 m/s²” esquece a metade. “5 m/s e 10 m/s²” lê a posição como velocidade. “2 m/s e 10 m/s²” troca os valores. “5 m/s e 4 m/s²” erra a velocidade inicial.",
      pegadinha: "Ler o 2 de t² como a aceleração.",
      conhecimento: "O termo independente é a posição inicial.",
    },
  ],
};
