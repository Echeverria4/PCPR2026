import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-03",
  resumo: {
    ideia:
      "Esta aula é a base das contas: ordem das operações, potências, raízes e expressões com letras. A maioria dos erros de prova vem de sinal, da ordem errada ou de abrir um produto notável pela metade.",
    itens: [
      {
        termo: "Ordem das operações",
        faz: "Parênteses, colchetes e chaves; depois potência e raiz; depois multiplicação e divisão; por fim, soma e subtração.",
      },
      {
        termo: "Base negativa",
        faz: "(−2)⁴ = 16, porque o sinal está na base. −2⁴ = −16, porque o sinal fica fora da potência.",
      },
      {
        termo: "Propriedades da potência",
        faz: "Mesma base: soma os expoentes no produto e subtrai na divisão. Potência de potência: multiplica os expoentes.",
      },
      {
        termo: "Expoente zero e negativo",
        faz: "a⁰ = 1, com a diferente de zero. Expoente negativo inverte a base: 2⁻³ = 1/8.",
      },
      {
        termo: "Radiciação",
        faz: "Só se somam raízes iguais. Para isso, simplifique antes: √50 = 5√2.",
        pista: "√(a + b) não é igual a √a + √b.",
      },
      {
        termo: "Quadrado da soma e da diferença",
        faz: "(a ± b)² = a² ± 2ab + b². O termo do meio nunca some.",
      },
      {
        termo: "Produto da soma pela diferença",
        faz: "(a + b)(a − b) = a² − b².",
        pista: "Serve para calcular contas grandes de cabeça.",
      },
      {
        termo: "Fatoração",
        faz: "É o caminho inverso: escrever a expressão como produto, para simplificar.",
      },
    ],
    cuidado:
      "Ao elevar (x + 1/x) ao quadrado, o termo do meio vale 2, e não some. Esquecer dele é o erro que a prova costuma oferecer como alternativa.",
  },
  questoes: [
    {
      topico: "Potenciação",
      subassunto: "Sinal em base negativa",
      dificuldade: 4,
      raciocinio: "Ver se o sinal está dentro ou fora dos parênteses em cada potência.",
      enunciado: "O valor de −2⁴ + (−2)⁴ − (−2)³ − 2⁰ é",
      alternativas: ["−9", "7", "8", "9", "39"],
      correta: 1,
      explicacao:
        "−2⁴ = −16; (−2)⁴ = 16; −(−2)³ = −(−8) = 8; −2⁰ = −1. A soma é −16 + 16 + 8 − 1 = 7.",
      explicacaoErradas:
        "“39” lê −2⁴ como 16. “−9” troca o sinal de −(−2)³. “8” toma 2⁰ como zero, e “9” soma 1 em vez de subtrair.",
      pegadinha:
        "Tratar −2⁴ como (−2)⁴. Sem parênteses, a potência vale só para o 2.",
      conhecimento:
        "Base negativa com expoente par dá positivo, com expoente ímpar dá negativo. Sem parênteses, o sinal fica de fora.",
    },
    {
      topico: "Potenciação",
      subassunto: "Propriedades com expoente desconhecido",
      dificuldade: 5,
      raciocinio: "Escrever 4 como 2² e usar o valor dado de 2ˣ.",
      enunciado: "Se 2ˣ = 5, o valor de 4ˣ⁺¹ é",
      alternativas: ["20", "25", "50", "400", "100"],
      correta: 4,
      explicacao: "4ˣ⁺¹ = 4 · 4ˣ = 4 · (2²)ˣ = 4 · (2ˣ)² = 4 · 25 = 100.",
      explicacaoErradas:
        "“20” faz 4 · 5, sem elevar 2ˣ ao quadrado. “25” esquece o fator 4. “50” dobra 25 em vez de multiplicar por 4. “400” multiplica por 16.",
      pegadinha:
        "Trocar 4ˣ por 2ˣ. Quando a base dobra de 2 para 4, a potência vira o quadrado de 2ˣ.",
      conhecimento: "(aᵐ)ⁿ = aᵐⁿ e aᵐ⁺ⁿ = aᵐ · aⁿ.",
    },
    {
      topico: "Produtos notáveis",
      subassunto: "Quadrado da soma com inverso",
      dificuldade: 5,
      raciocinio: "Elevar a igualdade ao quadrado e isolar o que foi pedido.",
      enunciado: "Se x + 1/x = 5, então x² + 1/x² vale",
      alternativas: ["23", "10", "24", "25", "27"],
      correta: 0,
      explicacao:
        "(x + 1/x)² = x² + 2 · x · (1/x) + 1/x² = x² + 2 + 1/x². Logo, 25 = x² + 2 + 1/x², e o valor é 23.",
      explicacaoErradas:
        "“25” esquece o termo do meio. “27” soma 2 em vez de subtrair. “10” dobra o 5 em vez de elevar ao quadrado. “24” subtrai só 1, sem dobrar o produto x · (1/x).",
      pegadinha:
        "Elevar cada parcela ao quadrado e pular o termo do meio. O produto x · (1/x) vale 1, e o termo do meio vale 2.",
      conhecimento: "(a + b)² = a² + 2ab + b².",
    },
    {
      topico: "Produtos notáveis",
      subassunto: "Diferença de quadrados no cálculo",
      dificuldade: 4,
      raciocinio: "Ver a conta como a² − b² e trocar pelo produto da soma pela diferença.",
      enunciado: "O valor de 1.002² − 998² é",
      alternativas: ["16", "2.000", "4.000", "8.000", "16.000"],
      correta: 3,
      explicacao: "a² − b² = (a + b)(a − b) = 2.000 · 4 = 8.000.",
      explicacaoErradas:
        "“16” eleva a diferença ao quadrado, pois (1.002 − 998)² = 16. “2.000” é só a soma. “4.000” usa a diferença como 2, e “16.000” usa a diferença como 8.",
      pegadinha:
        "Fazer (a − b)². Esse é outro produto notável, com um valor bem diferente de a² − b².",
      conhecimento: "a² − b² = (a + b)(a − b).",
    },
    {
      topico: "Expressões numéricas",
      subassunto: "Ordem das operações",
      dificuldade: 4,
      raciocinio: "Resolver de dentro para fora, com potência antes de subtração e divisão antes de subtração.",
      enunciado: "O valor de 2 + 3 · [12 − (8 − 2²) ÷ 2] é",
      alternativas: ["−16", "14", "32", "38", "50"],
      correta: 2,
      explicacao:
        "8 − 4 = 4; 4 ÷ 2 = 2; 12 − 2 = 10; 3 · 10 = 30; 2 + 30 = 32.",
      explicacaoErradas:
        "“50” soma 2 + 3 antes de multiplicar. “14” subtrai antes de dividir, com (12 − 4) ÷ 2. “−16” calcula (8 − 2)² em vez de 8 − 2². “38” ignora tudo o que está nos parênteses e faz 2 + 3 · 12.",
      pegadinha:
        "Ler da esquerda para a direita. A multiplicação vem antes da soma, mesmo aparecendo depois dela.",
      conhecimento:
        "Primeiro parênteses, colchetes e chaves. Dentro deles: potência e raiz, multiplicação e divisão, soma e subtração.",
    },
    {
      topico: "Radiciação",
      subassunto: "Soma de raízes depois de simplificar",
      dificuldade: 4,
      raciocinio: "Tirar da raiz o maior quadrado perfeito de cada número.",
      enunciado: "O valor de √50 − √18 + √8 é",
      alternativas: ["6√2", "0", "2√10", "4√2", "10√2"],
      correta: 3,
      explicacao: "√50 = 5√2, √18 = 3√2 e √8 = 2√2. Logo, 5√2 − 3√2 + 2√2 = 4√2.",
      explicacaoErradas:
        "“2√10” faz a conta dentro de uma só raiz: √(50 − 18 + 8) = √40. “10√2” soma todos os coeficientes. “6√2” inverte os sinais das duas últimas raízes, e “0” troca só o sinal de √8.",
      pegadinha:
        "Operar dentro de uma raiz só. √a + √b não é igual a √(a + b).",
      conhecimento: "Só se somam radicais com o mesmo índice e o mesmo radicando.",
    },
  ],
};
