import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-11",
  resumo: {
    ideia:
      "Função do 2º grau é f(x) = ax² + bx + c, com a diferente de zero. O gráfico é uma parábola. Quase toda questão de prova gira em torno do vértice: o maior ou o menor valor possível.",
    itens: [
      {
        termo: "Coeficiente a",
        faz: "a > 0: concavidade para cima e ponto de mínimo. a < 0: concavidade para baixo e ponto de máximo.",
      },
      {
        termo: "Coeficiente c",
        faz: "Ponto em que a parábola corta o eixo y: f(0) = c.",
      },
      {
        termo: "Coeficiente b",
        faz: "Se a parábola cruza o eixo y subindo, b > 0. Se cruza descendo, b < 0.",
      },
      {
        termo: "Raízes",
        faz: "Δ > 0: duas raízes. Δ = 0: uma raiz dupla. Δ < 0: a parábola não toca o eixo x.",
      },
      {
        termo: "Forma fatorada",
        faz: "f(x) = a(x − x₁)(x − x₂). É útil quando o problema já dá as raízes.",
      },
      {
        termo: "Vértice",
        faz: "xᵥ = −b ÷ 2a e yᵥ = −Δ ÷ 4a.",
        pista: "xᵥ é a média das raízes.",
      },
      {
        termo: "Domínio e imagem",
        faz: "Domínio: todos os reais. Imagem: de yᵥ para cima se a > 0, e de yᵥ para baixo se a < 0.",
      },
      {
        termo: "Sinal constante",
        faz: "Para ser positiva em todo x, é preciso a > 0 e Δ < 0.",
      },
    ],
    cuidado:
      "Leia o que se pede: xᵥ diz onde o máximo acontece, e yᵥ diz quanto ele vale.",
  },
  questoes: [
    {
      topico: "Vértice da parábola",
      subassunto: "Valor máximo",
      dificuldade: 5,
      raciocinio: "Com a < 0, o máximo é o y do vértice.",
      enunciado:
        "A arrecadação diária de um pedágio, em reais, é dada por R(p) = −2p² + 120p, em que p é o preço da tarifa. O maior valor possível de R é",
      alternativas: ["1.800", "30", "60", "3.600", "7.200"],
      correta: 0,
      explicacao: "pᵥ = −120 ÷ (−4) = 30. R(30) = −2 · 900 + 120 · 30 = 1.800.",
      explicacaoErradas:
        "“30” é o preço que dá o máximo, e não o máximo. “60” é a raiz não nula. “3.600” esquece o a em −Δ ÷ 4a, e “7.200” divide Δ por 2.",
      pegadinha:
        "Responder com o x do vértice. A pergunta é sobre o valor de R.",
      conhecimento: "yᵥ = −Δ ÷ 4a.",
    },
    {
      topico: "Coeficientes da parábola",
      subassunto: "Sinais de a, b e c",
      dificuldade: 5,
      raciocinio: "Ler a na concavidade, c no corte com o eixo y e b no sinal de xᵥ.",
      enunciado:
        "Uma parábola f(x) = ax² + bx + c tem a concavidade voltada para baixo, corta o eixo y acima da origem e tem o vértice à direita do eixo y. Sobre os coeficientes, é correto afirmar:",
      alternativas: [
        "a > 0, b > 0, c > 0",
        "a < 0, b > 0, c > 0",
        "a < 0, b < 0, c > 0",
        "a < 0, b > 0, c < 0",
        "a > 0, b < 0, c < 0",
      ],
      correta: 1,
      explicacao:
        "Concavidade para baixo: a < 0. Corte acima da origem: c > 0. Vértice à direita: −b ÷ 2a > 0. Como a é negativo, b tem de ser positivo.",
      explicacaoErradas:
        "“a > 0, b > 0, c > 0” e “a > 0, b < 0, c < 0” erram a concavidade. “a < 0, b < 0, c > 0” deixaria o vértice à esquerda. “a < 0, b > 0, c < 0” faria a parábola cortar o eixo y abaixo da origem.",
      pegadinha:
        "Achar que vértice à direita indica b negativo. Isso só vale com a positivo.",
      conhecimento: "xᵥ = −b ÷ 2a: o sinal de xᵥ depende de a e de b juntos.",
    },
    {
      topico: "Forma fatorada",
      subassunto: "Valor mínimo a partir das raízes",
      dificuldade: 4,
      raciocinio: "Montar a forma fatorada, achar a com o ponto dado e calcular no meio das raízes.",
      enunciado:
        "Uma função do 2º grau tem raízes 1 e 5, e seu gráfico corta o eixo y no ponto (0, 10). O valor mínimo dessa função é",
      alternativas: ["−2", "−4", "10", "8", "−8"],
      correta: 4,
      explicacao:
        "f(x) = a(x − 1)(x − 5). Com f(0) = 10: 5a = 10 e a = 2. O vértice está em x = 3: f(3) = 2 · 2 · (−2) = −8.",
      explicacaoErradas:
        "“−4” usa a = 1. “−2” inverte a divisão e usa a = 1/2. “8” troca o sinal. “10” é o ponto de corte, e não o mínimo.",
      pegadinha:
        "Supor a = 1 só porque as raízes foram dadas. O ponto (0, 10) serve para achar o a.",
      conhecimento: "f(x) = a(x − x₁)(x − x₂) e xᵥ = (x₁ + x₂) ÷ 2.",
    },
    {
      topico: "Domínio e imagem",
      subassunto: "Imagem pelo vértice",
      dificuldade: 5,
      raciocinio: "Achar yᵥ e usar o sinal de a.",
      enunciado: "A imagem da função f(x) = x² − 4x + 7, de ℝ em ℝ, é",
      alternativas: ["[2, +∞)", "[3, +∞)", "(−∞, 3]", "[7, +∞)", "ℝ"],
      correta: 1,
      explicacao: "xᵥ = 2 e yᵥ = 4 − 8 + 7 = 3. Como a > 0, a imagem é de 3 para cima.",
      explicacaoErradas:
        "“[2, +∞)” usa o xᵥ. “(−∞, 3]” valeria com a negativo. “[7, +∞)” usa o c como mínimo. “ℝ” é o domínio, e não a imagem.",
      pegadinha:
        "Usar o x do vértice. A imagem é feita de valores de y.",
      conhecimento: "a > 0: imagem [yᵥ, +∞). a < 0: imagem (−∞, yᵥ].",
    },
    {
      topico: "Estudo do sinal",
      subassunto: "Expressão sempre positiva",
      dificuldade: 5,
      raciocinio: "Com a > 0, a parábola não pode tocar o eixo x.",
      enunciado: "A expressão x² − 2x + k é positiva para todo x real se, e somente se,",
      alternativas: ["k > 1", "k ≥ 1", "k < 1", "k > 0", "k > 4"],
      correta: 0,
      explicacao: "Com a > 0, é preciso Δ < 0: 4 − 4k < 0, ou seja, k > 1.",
      explicacaoErradas:
        "“k ≥ 1” aceita k = 1, em que a expressão vale zero em x = 1. “k < 1” dá duas raízes reais. “k > 0” olha só para o c. “k > 4” esquece de dividir por 4.",
      pegadinha:
        "Aceitar Δ = 0. Nesse caso, a expressão zera em um ponto e deixa de ser positiva ali.",
      conhecimento: "ax² + bx + c > 0 para todo x exige a > 0 e Δ < 0.",
    },
    {
      topico: "Vértice da parábola",
      subassunto: "Área máxima",
      dificuldade: 5,
      raciocinio: "Escrever a área em função de um lado e achar o vértice.",
      enunciado:
        "Com 200 m de tela, vai-se cercar um pátio retangular encostado em um muro reto, que dispensa tela em um dos lados. A maior área possível, em m², é",
      alternativas: ["2.500", "4.444", "10.000", "20.000", "5.000"],
      correta: 4,
      explicacao:
        "Com dois lados x e um lado 200 − 2x, a área é A = x(200 − 2x). As raízes são 0 e 100, então x = 50. O outro lado é 100, e a área é 5.000 m².",
      explicacaoErradas:
        "“2.500” usa um quadrado de lado 50, com tela nos quatro lados. “4.444” usa três lados iguais. “10.000” é um quadrado de lado 100. “20.000” multiplica 200 por 100.",
      pegadinha:
        "Achar que o melhor é sempre um quadrado. Com um lado livre, o lado paralelo ao muro fica com o dobro do outro.",
      conhecimento: "xᵥ é a média das raízes da função da área.",
    },
  ],
};
