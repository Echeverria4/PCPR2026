import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-09",
  resumo: {
    ideia:
      "Função é uma regra que liga cada elemento de um conjunto a um único elemento de outro. Antes dela, a aula trata de pares ordenados, plano cartesiano e produto cartesiano.",
    itens: [
      {
        termo: "Par ordenado",
        faz: "(a, b) é diferente de (b, a), a não ser que a = b.",
      },
      {
        termo: "Quadrantes",
        faz: "Contam-se no sentido anti-horário. 1º (+, +); 2º (−, +); 3º (−, −); 4º (+, −).",
      },
      {
        termo: "Produto cartesiano",
        faz: "A × B reúne todos os pares com o primeiro elemento em A e o segundo em B. Número de pares: n(A) · n(B).",
      },
      {
        termo: "Relação",
        faz: "Qualquer subconjunto de A × B.",
      },
      {
        termo: "Função",
        faz: "Todo elemento de A tem exatamente uma imagem em B.",
        pista: "Sobrou elemento em A, ou um elemento tem duas imagens? Não é função.",
      },
      {
        termo: "Domínio, contradomínio e imagem",
        faz: "Domínio: de onde x sai. Contradomínio: o conjunto de chegada. Imagem: os valores que f atinge de fato.",
      },
      {
        termo: "Restrições do domínio",
        faz: "Denominador diferente de zero. Em raiz de índice par, o radicando não pode ser negativo.",
      },
      {
        termo: "Injetora",
        faz: "Elementos diferentes têm imagens diferentes.",
      },
      {
        termo: "Sobrejetora",
        faz: "A imagem é igual ao contradomínio.",
      },
      {
        termo: "Bijetora",
        faz: "É injetora e sobrejetora ao mesmo tempo. Só ela tem inversa.",
      },
      {
        termo: "Composta",
        faz: "f(g(x)) aplica g primeiro e depois f. A ordem muda o resultado.",
      },
      {
        termo: "Inversa",
        faz: "Troque x por y e isole y.",
      },
    ],
    cuidado:
      "O contradomínio muda a classificação: x² é sobrejetora em [0, +∞), mas não em ℝ.",
  },
  questoes: [
    {
      topico: "Plano cartesiano",
      subassunto: "Sinais das coordenadas",
      dificuldade: 4,
      raciocinio: "Tirar os sinais de a e b e aplicar nas novas coordenadas.",
      enunciado: "Se o ponto (a, b) está no 2º quadrante, então o ponto (−b, a · b) está",
      alternativas: [
        "no 1º quadrante",
        "no 3º quadrante",
        "no 2º quadrante",
        "no 4º quadrante",
        "sobre o eixo y",
      ],
      correta: 1,
      explicacao:
        "No 2º quadrante, a < 0 e b > 0. Logo, −b < 0 e a · b < 0. As duas coordenadas são negativas, o que dá o 3º quadrante.",
      explicacaoErradas:
        "“no 2º quadrante” repete o ponto de origem. “no 4º quadrante” trata −b como positivo. “no 1º quadrante” erra os dois sinais. “sobre o eixo y” exigiria a primeira coordenada igual a zero.",
      pegadinha:
        "Achar que −b é sempre negativo por ter o sinal de menos. Aqui é, porque b é positivo, mas o sinal depende de b.",
      conhecimento: "O sinal de menos troca o sinal do número, seja ele qual for.",
    },
    {
      topico: "Definição de função",
      subassunto: "Reconhecer uma função em pares",
      dificuldade: 4,
      raciocinio: "Ver se cada elemento de A aparece uma única vez como primeiro elemento e se a imagem está em B.",
      enunciado:
        "Sejam A = {1, 2, 3} e B = {4, 5}. O conjunto de pares que define uma função de A em B é",
      alternativas: [
        "{(1, 4), (2, 4), (3, 5)}",
        "{(1, 4), (1, 5), (2, 4), (3, 5)}",
        "{(1, 4), (2, 5)}",
        "{(1, 4), (2, 4), (3, 6)}",
        "{(4, 1), (5, 2), (4, 3)}",
      ],
      correta: 0,
      explicacao:
        "Nesse conjunto, 1, 2 e 3 têm uma imagem cada, e todas as imagens estão em B. Duas imagens iguais não impedem a função.",
      explicacaoErradas:
        "“{(1, 4), (1, 5), (2, 4), (3, 5)}” dá duas imagens ao 1. “{(1, 4), (2, 5)}” deixa o 3 sem imagem. “{(1, 4), (2, 4), (3, 6)}” usa o 6, que não está em B. “{(4, 1), (5, 2), (4, 3)}” sai de B para A.",
      pegadinha:
        "Achar que dois elementos de A não podem ter a mesma imagem. Isso é permitido; a função só deixa de ser injetora.",
      conhecimento: "Função: todo elemento do domínio tem uma, e só uma, imagem.",
    },
    {
      topico: "Domínio",
      subassunto: "Raiz e denominador na mesma função",
      dificuldade: 4,
      raciocinio: "Juntar as duas restrições.",
      enunciado: "O domínio da função real f(x) = √(x − 2) ÷ (x − 5) é dado por",
      alternativas: ["x > 2 e x ≠ 5", "x ≥ 2", "x ≠ 5", "x ≥ 5", "x ≥ 2 e x ≠ 5"],
      correta: 4,
      explicacao:
        "Na raiz, x − 2 ≥ 0, ou seja, x ≥ 2. No denominador, x − 5 ≠ 0, ou seja, x ≠ 5. As duas condições valem juntas.",
      explicacaoErradas:
        "“x > 2 e x ≠ 5” tira o 2, mas √0 existe. “x ≥ 2” esquece o denominador, e “x ≠ 5” esquece a raiz. “x ≥ 5” aceita o 5 e tira valores válidos.",
      pegadinha:
        "Excluir o 2. A raiz de zero existe; o que não pode é o radicando negativo.",
      conhecimento: "Raiz no numerador aceita radicando zero. Raiz no denominador, não.",
    },
    {
      topico: "Valor da função",
      subassunto: "Função dada por uma expressão interna",
      dificuldade: 5,
      raciocinio: "Achar o x que faz a parte de dentro valer 7.",
      enunciado: "Se f(2x + 1) = 6x − 1 para todo x real, o valor de f(7) é",
      alternativas: ["3", "17", "23", "35", "41"],
      correta: 1,
      explicacao: "Para 2x + 1 = 7, x = 3. Logo, f(7) = 6 · 3 − 1 = 17.",
      explicacaoErradas:
        "“41” troca x por 7 em 6x − 1. “3” para no valor de x. “23” usa x = 4, somando 1 em vez de subtrair. “35” usa x = 6, sem dividir por 2.",
      pegadinha:
        "Colocar 7 no lugar de x. O 7 é o valor da expressão 2x + 1, e não de x.",
      conhecimento: "Em f(expressão), iguale a expressão ao valor pedido.",
    },
    {
      topico: "Função composta",
      subassunto: "A ordem da composição",
      dificuldade: 5,
      raciocinio: "Fazer de dentro para fora nas duas ordens.",
      enunciado: "Sendo f(x) = 2x + 1 e g(x) = x² − 3, o valor de g(f(2)) − f(g(2)) é",
      alternativas: ["19", "0", "−19", "22", "25"],
      correta: 0,
      explicacao:
        "f(2) = 5 e g(5) = 22. g(2) = 1 e f(1) = 3. A diferença é 22 − 3 = 19.",
      explicacaoErradas:
        "“0” supõe que a ordem não importa. “−19” faz a subtração ao contrário. “22” calcula só g(f(2)). “25” soma os dois valores.",
      pegadinha:
        "Achar que f(g(x)) e g(f(x)) são iguais. Em geral, são diferentes.",
      conhecimento: "Na composta, começa-se pela função de dentro.",
    },
    {
      topico: "Função inversa",
      subassunto: "Valor da inversa",
      dificuldade: 5,
      raciocinio: "Trocar x por y e isolar y, ou resolver f(x) = 3.",
      enunciado: "Sendo f(x) = (2x − 3) ÷ 5 uma função bijetora de ℝ em ℝ, o valor de f⁻¹(3) é",
      alternativas: ["0,6", "9", "6", "5/3", "7,5"],
      correta: 1,
      explicacao: "f⁻¹(3) é o x tal que f(x) = 3. Então, 2x − 3 = 15, 2x = 18 e x = 9.",
      explicacaoErradas:
        "“0,6” calcula f(3). “5/3” trata a inversa como 1 ÷ f(3). “6” troca o sinal do 3 ao isolar x. “7,5” esquece o 3.",
      pegadinha:
        "Ler f⁻¹ como 1 sobre f. O −1 aqui indica a função inversa, e não um expoente.",
      conhecimento: "f⁻¹(b) = a equivale a f(a) = b.",
    },
    {
      topico: "Classificação de funções",
      subassunto: "O papel do contradomínio",
      dificuldade: 5,
      raciocinio: "Testar a injeção com x e −x, e a sobrejeção com o contradomínio dado.",
      enunciado: "A função f: ℝ → [0, +∞), dada por f(x) = x², é",
      alternativas: [
        "injetora, mas não sobrejetora",
        "bijetora, pois todo real tem imagem",
        "nem injetora nem sobrejetora",
        "constante em cada metade da reta",
        "sobrejetora, mas não injetora",
      ],
      correta: 4,
      explicacao:
        "Todo número y ≥ 0 é atingido, por exemplo por √y: a função é sobrejetora. Mas f(2) = f(−2) = 4: ela não é injetora.",
      explicacaoErradas:
        "“injetora, mas não sobrejetora” inverte os dois conceitos. “bijetora, pois todo real tem imagem” confunde domínio com injeção. “nem injetora nem sobrejetora” valeria com contradomínio ℝ. “constante em cada metade da reta” não descreve a função, pois x² varia nos dois lados.",
      pegadinha:
        "Classificar sem olhar o contradomínio. A mesma regra pode ser sobrejetora ou não, conforme o conjunto de chegada.",
      conhecimento: "Sobrejetora: imagem igual ao contradomínio.",
    },
  ],
};
