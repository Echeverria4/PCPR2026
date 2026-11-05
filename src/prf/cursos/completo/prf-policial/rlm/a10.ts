import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-10",
  resumo: {
    ideia:
      "Função do 1º grau é f(x) = ax + b, com a diferente de zero. O gráfico é uma reta. O a dá a inclinação, e o b diz onde a reta corta o eixo y.",
    itens: [
      {
        termo: "Coeficiente angular (a)",
        faz: "Quanto y muda quando x sobe 1. a = (y₂ − y₁) ÷ (x₂ − x₁).",
      },
      {
        termo: "Coeficiente linear (b)",
        faz: "É f(0): o ponto em que a reta corta o eixo y.",
      },
      {
        termo: "Crescente ou decrescente",
        faz: "a > 0: crescente. a < 0: decrescente.",
      },
      {
        termo: "Raiz",
        faz: "Valor de x que zera a função: x = −b ÷ a.",
      },
      {
        termo: "Estudo do sinal",
        faz: "À direita da raiz, f tem o sinal de a. À esquerda, o sinal contrário.",
      },
      {
        termo: "Função linear",
        faz: "Caso em que b = 0. Só aí x e y são diretamente proporcionais.",
      },
      {
        termo: "Ligação com a PA",
        faz: "f(1), f(2), f(3)... formam uma progressão aritmética de razão a.",
      },
      {
        termo: "Problemas de custo",
        faz: "A taxa fixa é o b, e o valor por unidade é o a.",
      },
      {
        termo: "Domínio e imagem",
        faz: "Sem restrição no enunciado, os dois são todos os reais.",
      },
    ],
    cuidado:
      "Não use regra de três em função com b diferente de zero: a parte fixa quebra a proporção.",
  },
  questoes: [
    {
      topico: "Função do 1º grau",
      subassunto: "Lei da função a partir de dois pontos",
      dificuldade: 5,
      raciocinio: "Calcular a, depois b, depois zerar a função.",
      enunciado:
        "O gráfico de uma função do 1º grau passa pelos pontos (1, 5) e (3, 11). A raiz dessa função é",
      alternativas: ["−2", "−2/3", "2/3", "−3/2", "3/2"],
      correta: 1,
      explicacao:
        "a = (11 − 5) ÷ (3 − 1) = 3. Com o ponto (1, 5): 5 = 3 + b, então b = 2. A raiz vem de 3x + 2 = 0: x = −2/3.",
      explicacaoErradas:
        "“2/3” troca o sinal. “−3/2” e “3/2” invertem a fração. “−2” usa só o b, com o sinal trocado.",
      pegadinha:
        "Fazer b ÷ a sem o sinal. A raiz é −b ÷ a.",
      conhecimento: "Raiz da função afim: x = −b ÷ a.",
    },
    {
      topico: "Função do 1º grau",
      subassunto: "Taxa fixa e valor por unidade",
      dificuldade: 4,
      raciocinio: "Tirar a taxa fixa do total e dividir pelo valor por quilômetro.",
      enunciado:
        "Um guincho cobra taxa fixa de R$ 80,00 mais R$ 6,50 por quilômetro. Um serviço custou R$ 275,00. A distância percorrida, em km, foi de",
      alternativas: ["30", "42,3", "54,6", "12,3", "195"],
      correta: 0,
      explicacao: "80 + 6,5x = 275. Logo, 6,5x = 195 e x = 30 km.",
      explicacaoErradas:
        "“42,3” divide o total sem tirar a taxa. “54,6” soma a taxa em vez de tirar. “12,3” divide a taxa por 6,50. “195” é o valor pago pelos quilômetros, e não a distância.",
      pegadinha:
        "Dividir o total direto. A taxa fixa não depende dos quilômetros.",
      conhecimento: "Custo = parte fixa + valor unitário × quantidade.",
    },
    {
      topico: "Crescimento e decrescimento",
      subassunto: "Coeficiente com parâmetro",
      dificuldade: 5,
      raciocinio: "O coeficiente de x tem de ser negativo.",
      enunciado: "A função f(x) = (3 − 2k)x + 5 é decrescente para",
      alternativas: ["k < 3/2", "k > 2/3", "k < −3/2", "k = 3/2", "k > 3/2"],
      correta: 4,
      explicacao: "Decrescente exige 3 − 2k < 0. Logo, −2k < −3 e k > 3/2.",
      explicacaoErradas:
        "“k < 3/2” deixa o coeficiente positivo: a função cresce. “k > 2/3” inverte a fração. “k < −3/2” troca o sinal do 3/2. “k = 3/2” zera o coeficiente, e a função fica constante.",
      pegadinha:
        "Esquecer de inverter o sinal da desigualdade ao dividir por −2.",
      conhecimento: "Multiplicar ou dividir uma desigualdade por número negativo inverte o sinal.",
    },
    {
      topico: "Função do 1º grau",
      subassunto: "Ponto em que duas retas se encontram",
      dificuldade: 5,
      raciocinio: "Igualar as duas funções, achar x e calcular o valor.",
      enunciado:
        "Duas locadoras cobram: a primeira, R$ 50,00 mais R$ 2,00 por km; a segunda, R$ 20,00 mais R$ 3,50 por km. Na quilometragem em que as duas cobram o mesmo, o valor pago é de",
      alternativas: ["R$ 20,00", "R$ 90,00", "R$ 40,00", "R$ 70,00", "R$ 120,00"],
      correta: 1,
      explicacao: "50 + 2x = 20 + 3,5x dá 30 = 1,5x e x = 20 km. Valor: 50 + 2 · 20 = R$ 90,00.",
      explicacaoErradas:
        "“R$ 20,00” é a quilometragem, e não o valor. “R$ 40,00” e “R$ 70,00” esquecem as taxas fixas. “R$ 120,00” soma a taxa da primeira ao preço por km da segunda.",
      pegadinha:
        "Parar em x = 20. O enunciado pede o valor pago, e não a distância.",
      conhecimento: "O encontro de duas retas é a solução do sistema formado por elas.",
    },
    {
      topico: "Estudo do sinal",
      subassunto: "Coeficiente negativo",
      dificuldade: 4,
      raciocinio: "Montar a inequação e dividir por um número negativo.",
      enunciado: "A função f(x) = 8 − 2x é positiva para",
      alternativas: ["x < 4", "x > 4", "x < −4", "x > −4", "x < 8"],
      correta: 0,
      explicacao: "8 − 2x > 0 dá −2x > −8. Ao dividir por −2, o sinal inverte: x < 4.",
      explicacaoErradas:
        "“x > 4” não inverte o sinal. “x < −4” e “x > −4” trocam o sinal da raiz. “x < 8” toma o b como raiz.",
      pegadinha:
        "Olhar só o “maior que zero” e manter o sinal. Com a negativo, a função é positiva à esquerda da raiz.",
      conhecimento: "À direita da raiz, f tem o sinal de a.",
    },
    {
      topico: "Função do 1º grau",
      subassunto: "Valores da função como progressão",
      dificuldade: 5,
      raciocinio: "Achar quanto a função sobe por unidade e andar até x = 20.",
      enunciado: "Uma função do 1º grau tem f(3) = 11 e f(7) = 23. O valor de f(20) é",
      alternativas: ["59", "62", "60", "65,7", "73,3"],
      correta: 1,
      explicacao:
        "De 3 para 7, a função sobe 12 em 4 passos: a = 3. Então, f(20) = 23 + 13 · 3 = 62.",
      explicacaoErradas:
        "“60” esquece o b e faz 3 · 20. “59” anda 12 passos a partir de 7, em vez de 13. “65,7” e “73,3” usam regra de três com f(7) e com f(3), como se não houvesse parte fixa.",
      pegadinha:
        "Usar regra de três. Só a função linear, com b = 0, é proporcional.",
      conhecimento: "Em f(x) = ax + b, cada passo de 1 em x soma a em y, como a razão de uma PA.",
    },
  ],
};
