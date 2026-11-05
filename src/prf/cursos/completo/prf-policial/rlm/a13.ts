import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-13",
  resumo: {
    ideia:
      "Logaritmo responde a uma pergunta: a que expoente devo elevar a base para chegar a este número? log₂ 8 = 3, porque 2³ = 8. Ele é a operação inversa da exponencial.",
    itens: [
      {
        termo: "Definição",
        faz: "Dizer que o logaritmo de a na base b vale x é dizer que bˣ = a.",
      },
      {
        termo: "Condições de existência",
        faz: "O número tem de ser positivo. A base tem de ser positiva e diferente de 1.",
      },
      {
        termo: "Produto e divisão",
        faz: "O log do produto é a soma dos logs. O log da divisão é a diferença.",
      },
      {
        termo: "Potência",
        faz: "O expoente desce multiplicando: log aⁿ = n · log a.",
      },
      {
        termo: "Mudança de base",
        faz: "O log de a na base b é igual a log a ÷ log b, na base que for mais fácil.",
      },
      {
        termo: "Base 10",
        faz: "Quando a base não aparece, ela é 10.",
      },
      {
        termo: "Equação",
        faz: "Resolva e confira cada resultado nas condições de existência.",
      },
      {
        termo: "Inequação",
        faz: "Base maior que 1: o sinal se mantém. Base entre 0 e 1: o sinal se inverte.",
      },
      {
        termo: "Função logarítmica",
        faz: "É a inversa da exponencial. O gráfico corta o eixo x em (1, 0).",
      },
    ],
    cuidado: "log (a + b) não é log a + log b. A soma de logs vem do produto.",
  },
  questoes: [
    {
      topico: "Propriedades dos logaritmos",
      subassunto: "Decompor em fatores",
      dificuldade: 4,
      raciocinio: "Escrever 72 como 2³ · 3² e aplicar as propriedades.",
      enunciado: "Sendo log 2 = 0,30 e log 3 = 0,48, o valor de log 72 é",
      alternativas: ["1,86", "0,78", "0,864", "1,38", "2,04"],
      correta: 0,
      explicacao: "72 = 2³ · 3². Logo, log 72 = 3 · 0,30 + 2 · 0,48 = 0,90 + 0,96 = 1,86.",
      explicacaoErradas:
        "“0,78” soma log 2 e log 3 sem os expoentes. “0,864” multiplica as parcelas. “1,38” esquece o expoente de 3². “2,04” troca os expoentes.",
      pegadinha:
        "Multiplicar os logs. O log do produto é a soma dos logs.",
      conhecimento: "log (a · b) = log a + log b e log aⁿ = n · log a.",
    },
    {
      topico: "Equação logarítmica",
      subassunto: "Raiz fora das condições de existência",
      dificuldade: 5,
      raciocinio: "Juntar os logs, resolver e testar cada raiz.",
      enunciado:
        "Sobre as soluções reais da equação log₂ (x − 1) + log₂ (x + 1) = 3, é correto afirmar:",
      alternativas: [
        "somente x = −3",
        "somente x = 3",
        "x = −3 ou x = 3",
        "somente x = 4",
        "não há solução",
      ],
      correta: 1,
      explicacao:
        "(x − 1)(x + 1) = 2³ dá x² = 9, com x = 3 ou x = −3. Para x = −3, x − 1 é negativo, e o log não existe. Sobra x = 3.",
      explicacaoErradas:
        "“x = −3 ou x = 3” não testa as raízes. “somente x = −3” fica com a raiz inválida. “somente x = 4” soma os logaritmandos, em vez de multiplicar. “não há solução” descarta também o 3, que serve.",
      pegadinha:
        "Parar em x² = 9. Toda raiz de equação logarítmica precisa passar pelas condições de existência.",
      conhecimento: "O logaritmando tem de ser positivo.",
    },
    {
      topico: "Equação exponencial com logaritmo",
      subassunto: "Tempo para dobrar",
      dificuldade: 5,
      raciocinio: "Montar 1,1ᵗ = 2 e aplicar log dos dois lados.",
      enunciado:
        "O número de acidentes em um trecho cresce 10% ao ano. Sendo log 2 = 0,30 e log 1,1 = 0,04, o número de acidentes dobrará em quantos anos?",
      alternativas: ["0,012", "0,13", "3,33", "25", "7,5"],
      correta: 4,
      explicacao: "1,1ᵗ = 2 dá t · log 1,1 = log 2. Logo, t = 0,30 ÷ 0,04 = 7,5 anos.",
      explicacaoErradas:
        "“0,012” multiplica os logs. “0,13” divide ao contrário. “3,33” é 1 ÷ 0,30, e “25” é 1 ÷ 0,04.",
      pegadinha:
        "Dividir 100% por 10% e dizer 10 anos. O crescimento é sobre o valor já aumentado.",
      conhecimento: "Quando a incógnita está no expoente e as bases não se igualam, usa-se log.",
    },
    {
      topico: "Mudança de base",
      subassunto: "Bases que são potências de 2",
      dificuldade: 4,
      raciocinio: "Escrever 4 e 32 como potências de 2.",
      enunciado: "O valor de log₄ 32 é",
      alternativas: ["8", "5/2", "3", "2/5", "5"],
      correta: 1,
      explicacao: "4ˣ = 32 dá 2^(2x) = 2⁵. Logo, 2x = 5 e x = 5/2.",
      explicacaoErradas:
        "“8” divide 32 por 4. “2/5” inverte a fração. “5” é o log de 32 na base 2. “3” arredonda, mas 4³ = 64.",
      pegadinha:
        "Dividir o número pela base. O log é um expoente, e não uma divisão.",
      conhecimento: "Log de a na base b = log a ÷ log b, em qualquer base comum.",
    },
    {
      topico: "Condições de existência",
      subassunto: "Domínio com base variável",
      dificuldade: 5,
      raciocinio: "Exigir número positivo, base positiva e base diferente de 1.",
      enunciado: "O domínio da função f(x) = log de (5 − x) na base (x − 1) é",
      alternativas: [
        "1 < x < 5 e x ≠ 2",
        "1 < x < 5",
        "x > 1, com x ≠ 2 e x ≠ 5",
        "x < 5 e x ≠ 2",
        "2 < x < 5",
      ],
      correta: 0,
      explicacao:
        "5 − x > 0 dá x < 5. x − 1 > 0 dá x > 1. x − 1 ≠ 1 dá x ≠ 2. As três condições valem juntas.",
      explicacaoErradas:
        "“1 < x < 5” aceita x = 2, em que a base vale 1. “x > 1, com x ≠ 2 e x ≠ 5” deixa entrar valores acima de 5. “x < 5 e x ≠ 2” aceita base negativa. “2 < x < 5” exclui sem motivo os valores entre 1 e 2.",
      pegadinha:
        "Esquecer que a base não pode ser 1. Essa é a condição mais esquecida.",
      conhecimento: "Log de a na base b existe com a > 0, b > 0 e b ≠ 1.",
    },
    {
      topico: "Inequação logarítmica",
      subassunto: "Base entre 0 e 1",
      dificuldade: 5,
      raciocinio: "Inverter o sinal e juntar a condição de existência.",
      enunciado: "A solução da inequação log de (x − 1) na base 1/2 > −2 é",
      alternativas: ["x > 5", "1 < x < 5", "x < 5", "x > 1", "1 < x < 5/4"],
      correta: 1,
      explicacao:
        "−2 é o log de 4 na base 1/2, pois (1/2)⁻² = 4. Com base entre 0 e 1, o sinal inverte: x − 1 < 4. Com a condição x − 1 > 0, fica 1 < x < 5.",
      explicacaoErradas:
        "“x > 5” não inverte o sinal. “x < 5” inverte, mas esquece a condição de existência. “x > 1” usa só essa condição. “1 < x < 5/4” usa (1/2)² em vez de (1/2)⁻².",
      pegadinha:
        "Resolver a inequação e parar. O logaritmando também tem de ser positivo.",
      conhecimento: "Inequação logarítmica: resolva e faça a interseção com a condição de existência.",
    },
  ],
};
