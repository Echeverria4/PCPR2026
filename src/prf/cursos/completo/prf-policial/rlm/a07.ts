import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-07",
  resumo: {
    ideia:
      "Porcentagem é uma razão com denominador 100. Quase tudo se resolve com um fator: multiplicar o valor por 1 mais ou menos a taxa. Aumentos e descontos seguidos se multiplicam, nunca se somam.",
    itens: [
      {
        termo: "k%",
        faz: "É k/100. A palavra “de” indica multiplicação: 20% de 50 = 0,2 · 50 = 10.",
      },
      {
        termo: "Fator de aumento",
        faz: "Aumento de 15%: multiplicar por 1,15.",
      },
      {
        termo: "Fator de desconto",
        faz: "Desconto de 15%: multiplicar por 0,85.",
      },
      {
        termo: "Voltar ao valor antigo",
        faz: "Para desfazer um aumento, divida pelo fator. Tirar a mesma taxa não devolve o valor.",
      },
      {
        termo: "Aumentos seguidos",
        faz: "Multiplique os fatores: 1,1 · 1,2 = 1,32, ou seja, aumento acumulado de 32%.",
      },
      {
        termo: "Variação percentual",
        faz: "(valor final − valor inicial) ÷ valor inicial.",
      },
      {
        termo: "Pontos percentuais",
        faz: "Diferença entre duas taxas. De 8% para 10% são 2 pontos, mas o aumento é de 25%.",
      },
    ],
    cuidado:
      "A base muda a cada etapa: um aumento de 25% é desfeito por um desconto de 20%, e não de 25%.",
  },
  questoes: [
    {
      topico: "Aumentos e descontos",
      subassunto: "Desconto que desfaz um aumento",
      dificuldade: 4,
      raciocinio: "Multiplicar os fatores e igualar a 1.",
      enunciado:
        "O valor de uma taxa subiu 25%. Para voltar ao valor anterior, o novo valor deve receber um desconto de",
      alternativas: ["15%", "25%", "20%", "80%", "33%"],
      correta: 2,
      explicacao: "1,25 · f = 1, logo f = 0,8. O fator 0,8 representa um desconto de 20%.",
      explicacaoErradas:
        "“25%” aplica a mesma taxa sobre uma base maior e tira demais. “33%” é o aumento que desfaz um desconto de 25%. “80%” lê o fator 0,8 como desconto. “15%” deixa o valor acima do inicial.",
      pegadinha:
        "Repetir a taxa. O desconto incide sobre um valor maior que o inicial.",
      conhecimento: "Para desfazer um aumento, divida 1 pelo fator do aumento.",
    },
    {
      topico: "Variação acumulada",
      subassunto: "Três variações sucessivas",
      dificuldade: 5,
      raciocinio: "Transformar cada variação em fator e multiplicar.",
      enunciado:
        "O número de acidentes em um trecho caiu 10% em um ano, subiu 20% no ano seguinte e caiu 25% no terceiro ano. Ao fim dos três anos, em relação ao início, houve",
      alternativas: ["queda de 15%", "queda de 25%", "aumento de 8%", "queda de 81%", "queda de 19%"],
      correta: 4,
      explicacao: "0,9 · 1,2 · 0,75 = 0,81. O valor final é 81% do inicial, o que dá uma queda de 19%.",
      explicacaoErradas:
        "“queda de 15%” soma as taxas: −10 + 20 − 25. “queda de 81%” confunde o que restou com o que caiu. “aumento de 8%” para no segundo ano, e “queda de 25%” olha só o último.",
      pegadinha:
        "Somar as taxas. Cada uma incide sobre o resultado da anterior.",
      conhecimento: "Variação acumulada = produto dos fatores − 1.",
    },
    {
      topico: "Cálculo de porcentagem",
      subassunto: "Porcentagem de partes de um grupo",
      dificuldade: 4,
      raciocinio: "Calcular a porcentagem de cada grupo em relação ao total e somar.",
      enunciado:
        "Em um lote vistoriado, 60% dos veículos são carros e 40% são motocicletas. Estão irregulares 5% dos carros e 20% das motocicletas. A porcentagem de veículos irregulares no lote é de",
      alternativas: ["8%", "11%", "12,5%", "14%", "25%"],
      correta: 1,
      explicacao: "0,6 · 5% = 3% do lote e 0,4 · 20% = 8% do lote. Somando: 11%.",
      explicacaoErradas:
        "“12,5%” é a média simples de 5% e 20%, sem pesos. “25%” soma as taxas. “8%” conta só as motocicletas. “14%” troca os pesos: 0,4 · 5% + 0,6 · 20%.",
      pegadinha:
        "Fazer a média de 5% e 20%. Os grupos têm tamanhos diferentes e precisam de peso.",
      conhecimento: "Média com grupos diferentes é média ponderada.",
    },
    {
      topico: "Aumentos e descontos",
      subassunto: "Valor anterior a um aumento",
      dificuldade: 4,
      raciocinio: "Dividir pelo fator de aumento.",
      enunciado:
        "Depois de um aumento de 15%, o litro do diesel passou a custar R$ 6,90. O preço antes do aumento era de",
      alternativas: ["R$ 5,75", "R$ 5,87", "R$ 6,75", "R$ 6,00", "R$ 7,94"],
      correta: 3,
      explicacao: "6,90 ÷ 1,15 = 6,00.",
      explicacaoErradas:
        "“R$ 5,87” tira 15% de 6,90, usando o preço novo como base. “R$ 7,94” aumenta 15% de novo. “R$ 5,75” subtrai 1,15, e “R$ 6,75” subtrai 0,15, em vez de dividir pelo fator.",
      pegadinha:
        "Calcular 15% sobre o preço final. A taxa foi aplicada sobre o preço antigo.",
      conhecimento: "Valor antigo = valor novo ÷ fator.",
    },
    {
      topico: "Variação percentual",
      subassunto: "Porcentagem e pontos percentuais",
      dificuldade: 5,
      raciocinio: "Separar a diferença entre as taxas da variação da própria taxa.",
      enunciado:
        "A taxa de veículos autuados em uma rodovia passou de 8% para 10%. Sobre essa mudança, é correto afirmar que a taxa",
      alternativas: [
        "subiu 2%, pois a diferença entre as duas taxas é de dois pontos",
        "subiu 25%, e a diferença é de dois pontos percentuais",
        "subiu 20%, e a diferença é de dois pontos percentuais",
        "subiu 2,5%, e a diferença é de vinte pontos percentuais",
        "subiu 80%, pois a taxa nova é 80% maior que a anterior",
      ],
      correta: 1,
      explicacao: "A diferença é de 10 − 8 = 2 pontos percentuais. A variação é (10 − 8) ÷ 8 = 25%.",
      explicacaoErradas:
        "“subiu 2%” confunde pontos com porcentagem. “subiu 20%” divide por 10, a taxa nova, em vez da antiga. “subiu 2,5%” move a vírgula. “80%” é 8 dividido por 10.",
      pegadinha:
        "Tratar pontos percentuais como porcentagem. A variação sempre se calcula sobre o valor inicial.",
      conhecimento: "Pontos percentuais: subtração das taxas. Variação percentual: divisão pela taxa inicial.",
    },
    {
      topico: "Cálculo de porcentagem",
      subassunto: "Mistura com alteração do total",
      dificuldade: 5,
      raciocinio: "O etanol aumenta, mas o total também. Montar a equação com x nos dois lugares.",
      enunciado:
        "Um tanque tem 200 litros de uma mistura com 25% de etanol. Para que o etanol chegue a 40% da mistura, a quantidade de etanol puro a acrescentar, em litros, é de",
      alternativas: ["50", "30", "133,3", "75", "80"],
      correta: 0,
      explicacao: "(50 + x) ÷ (200 + x) = 0,4. Logo, 50 + x = 80 + 0,4x, 0,6x = 30 e x = 50.",
      explicacaoErradas:
        "“30” usa 40% de 200 menos 50, sem lembrar que o total cresce. “80” é o etanol desejado com o total antigo. “133,3” esquece os 50 litros que já existem. “75” divide 30 por 0,4.",
      pegadinha:
        "Calcular 40% de 200. Ao acrescentar etanol, o total deixa de ser 200.",
      conhecimento: "Em mistura, confira se a substância acrescentada altera também o total.",
    },
  ],
};
