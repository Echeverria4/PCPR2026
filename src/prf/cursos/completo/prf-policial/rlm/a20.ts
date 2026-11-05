import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-20",
  resumo: {
    ideia:
      "Média é um valor que representa o conjunto. Cada situação pede um tipo: aritmética, ponderada, geométrica ou harmônica.",
    itens: [
      {
        termo: "Somatório",
        faz: "O símbolo Σ manda somar todos os termos.",
      },
      {
        termo: "Média aritmética",
        faz: "Soma dos valores ÷ quantidade de valores.",
        pista: "Soma = média · quantidade. Essa volta resolve muitas questões.",
      },
      {
        termo: "Propriedades",
        faz: "A média fica entre o mínimo e o máximo. Somar uma constante soma à média. Multiplicar multiplica a média.",
      },
      {
        termo: "Desvios",
        faz: "A soma dos desvios em relação à média é zero. A soma dos quadrados dos desvios é mínima na média.",
      },
      {
        termo: "Média ponderada",
        faz: "Cada valor é multiplicado pelo seu peso. Depois, divide-se pela soma dos pesos.",
      },
      {
        termo: "Dados agrupados",
        faz: "Sem classes, a frequência é o peso. Com classes, use o ponto médio de cada classe.",
      },
      {
        termo: "Média geométrica",
        faz: "Raiz n-ésima do produto de n valores. Serve para taxas que se acumulam.",
      },
      {
        termo: "Média harmônica",
        faz: "Quantidade de valores ÷ soma dos inversos. Serve para velocidades em trechos iguais.",
      },
      {
        termo: "Ordem das médias",
        faz: "Para valores positivos: harmônica ≤ geométrica ≤ aritmética.",
      },
    ],
    cuidado:
      "Velocidade média em trechos iguais não é a média aritmética. O tempo gasto no trecho mais lento é maior.",
  },
  questoes: [
    {
      topico: "Média aritmética",
      subassunto: "Retirada de um valor",
      dificuldade: 4,
      raciocinio: "Voltar à soma total, tirar o valor e dividir por 11.",
      enunciado:
        "Uma frota de 12 viaturas tem média de 65.000 km rodados. Uma viatura com 43.000 km sai da frota. A nova média, em km, é",
      alternativas: ["67.000", "65.000", "61.416,67", "54.000", "22.000"],
      correta: 0,
      explicacao: "Soma: 12 · 65.000 = 780.000. Sem a viatura: 737.000. Nova média: 737.000 ÷ 11 = 67.000.",
      explicacaoErradas:
        "“65.000” supõe que a média não muda. “61.416,67” divide por 12, e não por 11. “54.000” faz a média entre 65.000 e 43.000. “22.000” é a diferença entre esses dois valores.",
      pegadinha: "Esquecer de trocar o divisor. Sobram 11 viaturas.",
      conhecimento: "Soma dos valores = média · quantidade.",
    },
    {
      topico: "Média ponderada",
      subassunto: "Achar o valor que falta",
      dificuldade: 5,
      raciocinio: "Montar a média ponderada e isolar x.",
      enunciado:
        "Em um curso, as provas têm pesos 2, 3 e 5. Um aluno tirou 7 e 6 nas duas primeiras. Para fechar com média 7, a nota na terceira prova deve ser",
      alternativas: ["8", "7", "7,6", "38", "6,4"],
      correta: 2,
      explicacao: "(2 · 7 + 3 · 6 + 5x) ÷ 10 = 7. Então, 32 + 5x = 70 e x = 7,6.",
      explicacaoErradas:
        "“8” usa média simples, sem pesos. “7” repete a média desejada. “38” é o valor de 5x, sem dividir por 5. “6,4” divide 32 por 5.",
      pegadinha: "Ignorar os pesos. A terceira prova vale metade da nota.",
      conhecimento: "Média ponderada = soma de valor · peso ÷ soma dos pesos.",
    },
    {
      topico: "Propriedades da média",
      subassunto: "Multiplicar e somar uma constante",
      dificuldade: 4,
      raciocinio: "A média acompanha as duas operações, na mesma ordem.",
      enunciado:
        "A média de um conjunto de valores é 30. Cada valor é multiplicado por 2 e, depois, somado a 5. A nova média é",
      alternativas: ["60", "35", "70", "30", "65"],
      correta: 4,
      explicacao: "A média segue as mesmas operações: 30 · 2 + 5 = 65.",
      explicacaoErradas:
        "“60” só multiplica. “35” só soma. “70” soma antes de multiplicar. “30” supõe que a média não muda.",
      pegadinha: "Trocar a ordem das operações. Primeiro multiplica, depois soma.",
      conhecimento: "A média muda junto com qualquer soma ou multiplicação por constante.",
    },
    {
      topico: "Média harmônica",
      subassunto: "Velocidade em trechos iguais",
      dificuldade: 5,
      raciocinio: "Mesma distância em velocidades diferentes pede a média harmônica.",
      enunciado:
        "Uma viatura vai de um posto a outro a 60 km/h e volta pelo mesmo trecho a 90 km/h. A velocidade média no percurso completo, em km/h, é",
      alternativas: ["75", "73,5", "150", "72", "30"],
      correta: 3,
      explicacao: "2 ÷ (1/60 + 1/90) = 2 · 60 · 90 ÷ 150 = 72 km/h.",
      explicacaoErradas:
        "“75” é a média aritmética. “73,5” é a média geométrica, arredondada. “150” soma as velocidades, e “30” é a diferença entre elas.",
      pegadinha: "Fazer a média aritmética. A viatura passa mais tempo no trecho lento.",
      conhecimento: "Harmônica de dois valores: 2ab ÷ (a + b).",
    },
    {
      topico: "Média geométrica",
      subassunto: "Taxa média de crescimento",
      dificuldade: 5,
      raciocinio: "Multiplicar os fatores e tirar a raiz quadrada.",
      enunciado:
        "O número de autuações cresceu 25% em um ano e 80% no ano seguinte. A taxa média anual de crescimento, que daria o mesmo resultado nos dois anos, é",
      alternativas: ["52,5%", "50%", "125%", "105%", "55%"],
      correta: 1,
      explicacao: "Fatores: 1,25 · 1,8 = 2,25. Raiz quadrada: 1,5. A taxa média é de 50% ao ano.",
      explicacaoErradas:
        "“52,5%” é a média aritmética das taxas. “125%” é o aumento total dos dois anos. “105%” soma as taxas. “55%” é a diferença entre elas.",
      pegadinha: "Fazer a média das taxas. Taxas se acumulam por multiplicação.",
      conhecimento: "Em crescimentos sucessivos, use a média geométrica dos fatores.",
    },
    {
      topico: "Média de dados agrupados",
      subassunto: "Ponto médio de cada classe",
      dificuldade: 5,
      raciocinio: "Multiplicar cada ponto médio pela frequência e dividir pelo total.",
      enunciado:
        "Em uma tabela de tempos de atendimento, em minutos, as classes são 0 ⊢ 10 (4 casos), 10 ⊢ 20 (6), 20 ⊢ 30 (8) e 30 ⊢ 40 (2). A média dos tempos, usando os pontos médios, é",
      alternativas: ["19", "20", "14", "24", "5"],
      correta: 0,
      explicacao: "(5 · 4 + 15 · 6 + 25 · 8 + 35 · 2) ÷ 20 = 380 ÷ 20 = 19 minutos.",
      explicacaoErradas:
        "“20” faz a média dos pontos médios, sem as frequências. “14” usa os limites inferiores, e “24”, os limites superiores. “5” é a média das frequências.",
      pegadinha: "Ignorar as frequências. Cada classe pesa pelo número de casos.",
      conhecimento: "Em dados agrupados, a frequência é o peso.",
    },
  ],
};
