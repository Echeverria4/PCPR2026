import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-08",
  resumo: {
    ideia:
      "Equação é uma igualdade com um valor desconhecido. Resolver é achar esse valor sem quebrar a igualdade. Sistema é um grupo de equações que precisam valer ao mesmo tempo.",
    itens: [
      {
        termo: "Equação do 1º grau",
        faz: "O maior expoente da incógnita é 1. O que se faz de um lado da igualdade se faz do outro.",
      },
      {
        termo: "Montar a equação",
        faz: "Dê nome ao que é desconhecido e traduza cada frase do problema em uma conta.",
      },
      {
        termo: "Sistema",
        faz: "Duas incógnitas pedem duas equações. Na substituição, isola-se uma incógnita e ela entra na outra equação.",
      },
      {
        termo: "Classificar o sistema",
        faz: "Uma solução: retas que se cruzam. Nenhuma: paralelas. Infinitas: uma equação é múltipla da outra.",
      },
      {
        termo: "Equação do 2º grau",
        faz: "ax² + bx + c = 0, com a diferente de zero. x = (−b ± √Δ) ÷ 2a, com Δ = b² − 4ac.",
      },
      {
        termo: "Delta",
        faz: "Δ > 0: duas raízes reais. Δ = 0: uma raiz dupla. Δ < 0: nenhuma raiz real.",
      },
      {
        termo: "Soma e produto",
        faz: "Soma das raízes = −b/a. Produto das raízes = c/a.",
        pista: "x₁² + x₂² = (x₁ + x₂)² − 2x₁x₂.",
      },
    ],
    cuidado:
      "Depois de resolver, veja se o valor achado zera um denominador. Se zerar, ele não é solução.",
  },
  questoes: [
    {
      topico: "Equação do 1º grau",
      subassunto: "Partes de um total",
      dificuldade: 4,
      raciocinio: "Somar as frações percorridas e ver qual fração os 42 km representam.",
      enunciado:
        "Uma equipe percorreu 1/4 de um trecho de manhã e 2/5 à tarde. Ainda faltam 42 km. O comprimento total do trecho, em km, é",
      alternativas: ["56", "120", "70", "105", "168"],
      correta: 1,
      explicacao:
        "1/4 + 2/5 = 13/20. Faltam 7/20 do trecho, que valem 42 km. Logo, 1/20 vale 6 km e o total é 120 km.",
      explicacaoErradas:
        "“56” ignora a tarde, e “70” ignora a manhã. “105” divide 42 por 2/5. “168” multiplica 42 por 4.",
      pegadinha:
        "Usar só uma das frações. Os 42 km são o que sobra depois das duas etapas.",
      conhecimento: "Equação com x no total: x − x/4 − 2x/5 = 42.",
    },
    {
      topico: "Sistemas lineares",
      subassunto: "Duas quantidades com valores diferentes",
      dificuldade: 5,
      raciocinio: "Escrever uma equação para a quantidade e outra para o valor.",
      enunciado:
        "Em uma operação, foram aplicadas 26 multas, umas de R$ 195,00 e outras de R$ 130,00, somando R$ 4.160,00. O número de multas de R$ 195,00 foi",
      alternativas: ["12", "6", "4", "13", "14"],
      correta: 0,
      explicacao:
        "Com g multas de R$ 195,00: 195g + 130(26 − g) = 4.160. Logo, 65g = 780 e g = 12.",
      explicacaoErradas:
        "“14” é o número de multas de R$ 130,00. “13” divide as 26 ao meio. “6” divide a sobra de R$ 780,00 por 130, e “4” divide por 195, em vez de dividir pela diferença de 65.",
      pegadinha:
        "Dividir a sobra pelo valor de uma das multas. Cada troca de multa muda o total só em R$ 65,00.",
      conhecimento: "Sistema: g + m = 26 e 195g + 130m = 4.160.",
    },
    {
      topico: "Equação do 2º grau",
      subassunto: "Soma dos quadrados das raízes",
      dificuldade: 5,
      raciocinio: "Usar soma e produto sem calcular as raízes.",
      enunciado: "Sendo x₁ e x₂ as raízes da equação x² − 5x + 3 = 0, o valor de x₁² + x₂² é",
      alternativas: ["13", "19", "22", "25", "31"],
      correta: 1,
      explicacao: "Soma = 5 e produto = 3. x₁² + x₂² = 5² − 2 · 3 = 19.",
      explicacaoErradas:
        "“25” eleva a soma ao quadrado e para. “22” subtrai o produto uma vez só. “31” soma 2 · 3 em vez de subtrair. “13” é o delta da equação.",
      pegadinha:
        "Achar que o quadrado da soma é a soma dos quadrados. Falta tirar o termo do meio.",
      conhecimento: "(x₁ + x₂)² = x₁² + 2x₁x₂ + x₂².",
    },
    {
      topico: "Equação do 2º grau",
      subassunto: "Problema de área",
      dificuldade: 4,
      raciocinio: "Chamar a largura de x, montar a equação e descartar a raiz negativa.",
      enunciado:
        "Um terreno retangular para um posto de fiscalização tem 84 m² de área, e o comprimento supera a largura em 5 m. O perímetro do terreno, em metros, é",
      alternativas: ["19", "28", "48", "84", "38"],
      correta: 4,
      explicacao:
        "x(x + 5) = 84 dá x² + 5x − 84 = 0, com x = 7 e x = −12. A largura é 7 m e o comprimento, 12 m. Perímetro: 2 · (7 + 12) = 38 m.",
      explicacaoErradas:
        "“19” soma só um comprimento e uma largura. “28” e “48” calculam o perímetro de quadrados de lado 7 e 12. “84” repete a área.",
      pegadinha:
        "Parar em 7 + 12. O perímetro soma os quatro lados.",
      conhecimento: "Medida de comprimento não pode ser negativa: a raiz −12 é descartada.",
    },
    {
      topico: "Equação do 2º grau",
      subassunto: "Raiz que zera o denominador",
      dificuldade: 5,
      raciocinio: "Simplificar a fração sem esquecer que x não pode zerar o denominador.",
      enunciado:
        "Sobre a equação (x² − 4) ÷ (x − 2) = 4, nos números reais, é correto afirmar:",
      alternativas: ["não há solução", "x = 2", "x = −2", "x = 2 ou x = −2", "x = 4"],
      correta: 0,
      explicacao:
        "Para x ≠ 2, a fração simplifica para x + 2. Então, x + 2 = 4 e x = 2. Esse valor zera o denominador e não pode ser aceito.",
      explicacaoErradas:
        "“x = 2” ignora que o denominador seria zero. “x = −2” dá 0 no lado esquerdo, e não 4. “x = 2 ou x = −2” são as raízes do numerador. “x = 4” confunde o resultado da conta com o valor de x.",
      pegadinha:
        "Simplificar e esquecer a condição inicial. O valor que zera o denominador fica fora desde o começo.",
      conhecimento: "Antes de resolver, anote o que não pode zerar o denominador.",
    },
    {
      topico: "Sistemas lineares",
      subassunto: "Sistema com infinitas soluções",
      dificuldade: 5,
      raciocinio: "Fazer a segunda equação ser múltipla da primeira.",
      enunciado:
        "O sistema formado por x + 2y = 3 e 2x + ay = b tem infinitas soluções. O valor de a + b é",
      alternativas: ["5", "10", "7", "8", "24"],
      correta: 1,
      explicacao:
        "Para haver infinitas soluções, a segunda equação tem de ser múltipla da primeira. Multiplicando a primeira por 2: 2x + 4y = 6. Logo, a = 4, b = 6 e a + b = 10.",
      explicacaoErradas:
        "“5” repete os coeficientes da primeira equação. “7” dobra só o 2, e “8” dobra só o 3. “24” multiplica a por b.",
      pegadinha:
        "Dobrar só os coeficientes. Se o 3 não dobrar também, as retas ficam paralelas e o sistema não tem solução.",
      conhecimento: "Coeficientes e termo independente proporcionais: infinitas soluções.",
    },
  ],
};
