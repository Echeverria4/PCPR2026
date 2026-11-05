import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-02",
  resumo: {
    ideia:
      "Os conjuntos numéricos se encaixam: naturais dentro dos inteiros, inteiros dentro dos racionais, e racionais e irracionais formam os reais. A prova cobra classificar um número, as regras de par e ímpar e a passagem de dízima para fração.",
    itens: [
      {
        termo: "Naturais (ℕ)",
        faz: "0, 1, 2, 3… O zero é o único natural sem antecessor natural.",
        pista: "O asterisco tira o zero: ℕ* começa em 1.",
      },
      {
        termo: "Inteiros (ℤ)",
        faz: "Os naturais mais os negativos. Todo natural é inteiro, mas nem todo inteiro é natural.",
      },
      {
        termo: "Par e ímpar",
        faz: "Par é 2n; ímpar é 2n + 1. Par ± par = par; ímpar ± ímpar = par; ímpar ± par = ímpar.",
        pista: "Em um produto, basta um fator par para o resultado ser par.",
      },
      {
        termo: "Racionais (ℚ)",
        faz: "Podem ser escritos como fração de inteiros, com denominador diferente de zero.",
      },
      {
        termo: "Dízima periódica",
        faz: "Decimal infinito com repetição. É racional, porque vira fração.",
      },
      {
        termo: "Fração geratriz",
        faz: "É a fração que gera a dízima. Na dízima simples, o denominador tem um 9 por algarismo do período.",
        pista: "Na composta, cada algarismo antes do período acrescenta um 0 depois dos noves.",
      },
      {
        termo: "Irracionais",
        faz: "Decimal infinito e não periódico: √2, π, e. Não viram fração de inteiros.",
      },
      {
        termo: "Reais (ℝ)",
        faz: "Racionais e irracionais juntos. Raiz quadrada de negativo fica fora.",
      },
      {
        termo: "Intervalos",
        faz: "Colchete fechado inclui o extremo; parêntese ou colchete aberto não inclui.",
      },
    ],
    cuidado:
      "Parecer irracional não basta: faça a conta antes. √2 · √8 = 4 e √0,04 = 0,2, e os dois resultados são racionais.",
  },
  questoes: [
    {
      topico: "Números irracionais",
      subassunto: "Operações entre racionais e irracionais",
      dificuldade: 5,
      raciocinio: "Procurar um contraexemplo para cada “sempre” e “nunca”.",
      enunciado: "Sobre as operações com números reais, assinale a afirmação verdadeira.",
      alternativas: [
        "A soma de dois números irracionais é sempre um número irracional.",
        "O produto de dois números irracionais é sempre um número irracional.",
        "A soma de um número racional com um irracional é sempre irracional.",
        "O produto de um número racional por um irracional é sempre irracional.",
        "O quociente de dois números irracionais nunca resulta em número inteiro.",
      ],
      correta: 2,
      explicacao:
        "Se a soma de um racional com um irracional fosse racional, o irracional seria a diferença de dois racionais, e isso daria um racional. Logo, a soma é irracional.",
      explicacaoErradas:
        "√2 + (−√2) = 0 derruba a soma de dois irracionais. √2 · √2 = 2 derruba o produto. 0 · √2 = 0 derruba o produto por racional. √8 ÷ √2 = 2 derruba o quociente.",
      pegadinha:
        "Esquecer o zero. Multiplicar um irracional por racional diferente de zero dá irracional, mas multiplicar por zero dá zero.",
      conhecimento:
        "Em afirmações com “sempre” e “nunca”, um único contraexemplo basta para mostrar que são falsas.",
    },
    {
      topico: "Números racionais",
      subassunto: "Fração geratriz de dízima composta",
      dificuldade: 4,
      raciocinio: "Separar o que se repete do que vem antes dele e eliminar o período por subtração.",
      enunciado: "A fração irredutível que representa a dízima periódica 1,2333… é",
      alternativas: ["37/30", "37/33", "11/9", "122/99", "123/100"],
      correta: 0,
      explicacao:
        "Com x = 1,2333…, temos 100x = 123,33… e 10x = 12,33…. Subtraindo, 90x = 111, logo x = 111/90 = 37/30.",
      explicacaoErradas:
        "“37/33” usa 99 no lugar de 90. “11/9” vale 1,222…, e “122/99” vale 1,2323…. “123/100” corta a dízima e vale exatamente 1,23.",
      pegadinha:
        "Tratar o 2 como parte do período. Só o 3 se repete, então a dízima é composta, e o denominador é 90.",
      conhecimento:
        "Dízima composta: o número inteiro até o período menos a parte que não se repete, sobre noves e zeros.",
    },
    {
      topico: "Par e ímpar",
      subassunto: "Paridade de expressões",
      dificuldade: 5,
      raciocinio: "Fatorar a expressão e olhar para dois inteiros consecutivos.",
      enunciado: "Para qualquer número inteiro n, é correto afirmar que",
      alternativas: [
        "n² + 1 é sempre ímpar",
        "n² + n é sempre par",
        "n³ − n é sempre ímpar",
        "2n + 1 é sempre primo",
        "n² + n + 1 é sempre par",
      ],
      correta: 1,
      explicacao:
        "n² + n = n(n + 1). Entre dois inteiros consecutivos, um é par, e por isso o produto é par.",
      explicacaoErradas:
        "Com n = 1, n² + 1 = 2, que é par. n³ − n = (n − 1)n(n + 1) é sempre par. Com n = 4, 2n + 1 = 9, que não é primo. n² + n + 1 é um par mais 1, ou seja, sempre ímpar.",
      pegadinha:
        "Testar só um valor e generalizar. Teste um par e um ímpar, ou fatore a expressão.",
      conhecimento: "O produto de dois inteiros consecutivos é sempre par.",
    },
    {
      topico: "Classificação dos números",
      subassunto: "Resultado que muda a classificação",
      dificuldade: 4,
      raciocinio: "Calcular cada valor antes de classificar.",
      enunciado:
        "Considere os números √2 · √8, 0,999…, √0,04, π + 1 e −√16. Assinale a afirmação correta.",
      alternativas: [
        "√2 · √8 é irracional, pois os dois fatores são irracionais.",
        "0,999… é menor que 1 e, por isso, não representa um inteiro.",
        "√0,04 é irracional, pois 0,04 não é um quadrado perfeito.",
        "−√16 é um número inteiro, mas não é um número natural.",
        "π + 1 é racional, pois resulta da soma de dois números reais.",
      ],
      correta: 3,
      explicacao: "−√16 = −4. É inteiro e negativo, portanto não é natural.",
      explicacaoErradas:
        "√2 · √8 = √16 = 4. 0,999… é exatamente 1. √0,04 = 0,2, que é racional. π + 1 é a soma de um irracional com um racional, logo é irracional.",
      pegadinha:
        "Ver um radical e concluir que o número é irracional. A raiz pode ser exata.",
      conhecimento: "0,999… = 9/9 = 1. Uma dízima pode representar um número inteiro.",
    },
    {
      topico: "Intervalos reais",
      subassunto: "Diferença de intervalos",
      dificuldade: 5,
      raciocinio: "Marcar os dois intervalos na reta e ver o que sobra de A depois de retirar B.",
      enunciado:
        "Sejam A = [−2, 3[ e B = ]1, 5]. O número de valores inteiros que pertencem a A − B é",
      alternativas: ["1", "3", "4", "5", "8"],
      correta: 2,
      explicacao:
        "Retirando de A os números maiores que 1, sobra [−2, 1]. Como 1 não está em B, ele continua em A − B. Os inteiros são −2, −1, 0 e 1: quatro valores.",
      explicacaoErradas:
        "“1” conta os inteiros de A ∩ B, só o 2. “3” exclui o 1 por engano. “5” conta os inteiros do próprio A. “8” conta os inteiros de A ∪ B.",
      pegadinha:
        "Ver o 1 como extremo aberto e retirá-lo. Ele é aberto em B, justamente por isso não sai de A.",
      conhecimento:
        "Extremo aberto em B significa que aquele valor não pertence a B, então ele não é retirado na diferença.",
    },
    {
      topico: "Números racionais",
      subassunto: "Posição de um algarismo na dízima",
      dificuldade: 5,
      raciocinio: "Achar o período e usar o resto da divisão da posição pelo tamanho do período.",
      enunciado:
        "A fração 1/7 tem a representação decimal 0,142857142857…. O algarismo que ocupa a 100ª casa depois da vírgula é",
      alternativas: ["1", "2", "4", "7", "8"],
      correta: 4,
      explicacao:
        "O período tem 6 algarismos. Como 100 = 6 · 16 + 4, a 100ª casa é o 4º algarismo do período: 8.",
      explicacaoErradas:
        "“1” seria resto 1, “4” seria resto 2, “2” seria resto 3 e “7” seria resto 0. O resto correto é 4.",
      pegadinha:
        "Usar o quociente 16 em vez do resto. Quem indica a posição dentro do período é o resto.",
      conhecimento:
        "Em uma sequência que se repete, a posição é dada pelo resto. Resto zero indica o último termo do período.",
    },
  ],
};
