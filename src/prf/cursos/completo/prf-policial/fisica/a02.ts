import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "fisica-02",
  resumo: {
    ideia:
      "No MRU, a velocidade é constante e diferente de zero. O móvel anda distâncias iguais em tempos iguais, em linha reta.",
    itens: [
      {
        termo: "Equação horária",
        faz: "S = S0 + v·t. S0 é a posição inicial, v é a velocidade e t é o tempo.",
      },
      {
        termo: "Progressivo",
        faz: "Velocidade positiva: a posição cresce.",
      },
      {
        termo: "Retrógrado",
        faz: "Velocidade negativa: a posição diminui.",
      },
      {
        termo: "Gráfico S × t",
        faz: "É uma reta. A inclinação dá a velocidade.",
      },
      {
        termo: "Gráfico v × t",
        faz: "É uma reta horizontal. A área sob ela dá o deslocamento.",
      },
      {
        termo: "Encontro",
        faz: "Escreva a equação de cada móvel e iguale as duas posições.",
      },
      {
        termo: "Sentidos",
        faz: "Na mesma direção: mesmo sentido subtrai, sentido oposto soma.",
      },
    ],
    cuidado:
      "Sinal negativo na velocidade indica o sentido, e não que o móvel freia.",
  },
  questoes: [
    {
      topico: "Encontro",
      subassunto: "Sentidos opostos",
      dificuldade: 5,
      raciocinio: "Iguale as posições, ache o tempo e volte a uma das equações.",
      enunciado:
        "Uma viatura parte do km 40 a 90 km/h, no sentido crescente. No mesmo instante, um caminhão parte do km 160 a 60 km/h, no sentido decrescente. Eles se cruzam no",
      alternativas: ["km 100", "km 88", "km 72", "km 400", "km 112"],
      correta: 4,
      explicacao: "40 + 90t = 160 − 60t, então t = 0,8 h. Logo, 40 + 90 · 0,8 = 112.",
      explicacaoErradas:
        "“km 100” é o ponto médio, que ignora a diferença de velocidades. “km 88” troca as velocidades. “km 72” esquece o km inicial. “km 400” subtrai as velocidades.",
      pegadinha: "Marcar o ponto médio. Quem anda mais rápido avança mais.",
      conhecimento: "Em sentidos opostos, a distância cai pela soma das velocidades.",
    },
    {
      topico: "Encontro",
      subassunto: "Alcance",
      dificuldade: 5,
      raciocinio: "Mesmo sentido: use a diferença das velocidades.",
      enunciado:
        "Um veículo em fuga, a 100 km/h, tem 2 km de vantagem sobre uma viatura a 140 km/h, no mesmo sentido. Mantidas as velocidades, a viatura o alcança em",
      alternativas: ["3 min", "5 min", "30 s", "1,2 min", "51 s"],
      correta: 0,
      explicacao: "A diferença é 40 km/h. Logo, 2 ÷ 40 = 0,05 h, que são 3 min.",
      explicacaoErradas:
        "“5 min” lê 0,05 h como 5 minutos. “30 s” soma as velocidades. “1,2 min” divide só por 100. “51 s” divide só por 140.",
      pegadinha: "Ler 0,05 h como 5 minutos. Multiplique por 60.",
      conhecimento: "Hora decimal vira minuto multiplicando por 60.",
    },
    {
      topico: "Equação horária",
      subassunto: "Classificação",
      dificuldade: 4,
      raciocinio: "Leia o sinal de v e faça S = 0.",
      enunciado: "Um móvel segue S = 20 − 5t, no SI. Esse movimento",
      alternativas: [
        "é progressivo e o móvel passa pela origem em t = 4 s",
        "é retrógrado e o móvel passa pela origem em t = 15 s",
        "é retrógrado e o móvel passa pela origem em t = 4 s",
        "é progressivo e o móvel passa pela origem em t = 15 s",
        "é variado, pois o sinal negativo indica que o móvel freia",
      ],
      correta: 2,
      explicacao: "A velocidade é −5 m/s, e isso é retrógrado. Com S = 0, t = 20 ÷ 5 = 4 s.",
      explicacaoErradas:
        "“é progressivo” ignora o sinal negativo. “t = 15 s” subtrai 5 de 20, em vez de dividir. “é variado” erra: a velocidade é constante.",
      pegadinha: "Ler o sinal negativo como freada.",
      conhecimento: "Origem é o ponto em que S = 0.",
    },
    {
      topico: "Gráficos",
      subassunto: "Área do gráfico v × t",
      dificuldade: 5,
      raciocinio: "Área acima do eixo soma. Área abaixo desconta no deslocamento.",
      enunciado:
        "Um gráfico v × t mostra 20 m/s durante 30 s e, em seguida, −10 m/s durante 10 s. O deslocamento e o espaço percorrido são, nessa ordem,",
      alternativas: ["700 m e 500 m", "500 m e 500 m", "600 m e 100 m", "500 m e 700 m", "700 m e 700 m"],
      correta: 3,
      explicacao: "Áreas: 600 m e −100 m. Deslocamento: 500 m. Espaço percorrido: 700 m.",
      explicacaoErradas:
        "“700 m e 500 m” inverte os conceitos. “500 m e 500 m” e “700 m e 700 m” tratam os dois como iguais. “600 m e 100 m” apenas lista as áreas.",
      pegadinha: "Somar as áreas sem olhar o sinal.",
      conhecimento: "Para o espaço percorrido, use as áreas sem sinal.",
    },
    {
      topico: "Gráficos",
      subassunto: "Gráfico S × t",
      dificuldade: 4,
      raciocinio: "O ponto em t = 0 dá S0. A inclinação dá v.",
      enunciado: "O gráfico S × t de um móvel é uma reta que passa por (0 s; 10 m) e (5 s; 35 m). A equação horária é",
      alternativas: ["S = 35 + 5t", "S = 10 + 5t", "S = 10 + 7t", "S = 5 + 10t", "S = 10 + 25t"],
      correta: 1,
      explicacao: "S0 = 10 m. A velocidade é (35 − 10) ÷ 5 = 5 m/s.",
      explicacaoErradas:
        "“S = 35 + 5t” usa o ponto final como início. “S = 10 + 7t” divide 35 por 5. “S = 5 + 10t” troca os valores. “S = 10 + 25t” esquece de dividir pelo tempo.",
      pegadinha: "Dividir a posição final pelo tempo, sem subtrair a inicial.",
      conhecimento: "Velocidade é a variação da posição dividida pelo tempo.",
    },
    {
      topico: "Velocidade constante",
      subassunto: "Medição entre sensores",
      dificuldade: 4,
      raciocinio: "Calcule em m/s e converta multiplicando por 3,6.",
      enunciado:
        "Dois sensores na pista, a 400 m um do outro, registram a passagem de um veículo com 16 s de diferença. A velocidade constante dele é de",
      alternativas: ["25 km/h", "6,9 km/h", "90 km/h", "0,025 km/h", "1,5 km/h"],
      correta: 2,
      explicacao: "400 ÷ 16 = 25 m/s. Logo, 25 · 3,6 = 90 km/h.",
      explicacaoErradas:
        "“25 km/h” não converte. “6,9 km/h” divide por 3,6. “0,025 km/h” divide 0,4 km por 16 s sem converter o tempo. “1,5 km/h” lê km/min como km/h.",
      pegadinha: "Trocar a operação da conversão.",
      conhecimento: "Para sair de m/s, multiplique por 3,6.",
    },
  ],
};
