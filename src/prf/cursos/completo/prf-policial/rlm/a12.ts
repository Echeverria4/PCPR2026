import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-12",
  resumo: {
    ideia:
      "Na função exponencial, a variável está no expoente: f(x) = aˣ, com a > 0 e a diferente de 1. A equação exponencial se resolve igualando as bases.",
    itens: [
      {
        termo: "Igualar as bases",
        faz: "Escreva tudo na mesma base. Aí os expoentes são iguais: 2ˣ = 2⁵ dá x = 5.",
      },
      {
        termo: "Substituição",
        faz: "Se 2ˣ aparece várias vezes, chame 2ˣ de y e resolva a equação do 2º grau. Depois, volte para x.",
      },
      {
        termo: "Base maior que 1",
        faz: "A função é crescente. Na inequação, o sinal se mantém.",
      },
      {
        termo: "Base entre 0 e 1",
        faz: "A função é decrescente. Na inequação, o sinal se inverte.",
      },
      {
        termo: "Gráfico",
        faz: "f(x) = aˣ corta o eixo y em (0, 1) e nunca toca o eixo x. Imagem: (0, +∞).",
      },
      {
        termo: "Número de Euler",
        faz: "e ≈ 2,718. Como a base é maior que 1, a função eˣ é crescente.",
      },
      {
        termo: "Crescimento e queda",
        faz: "Em f(t) = C · aᵗ, C é o valor inicial, e a diz quanto o valor muda a cada período.",
      },
    ],
    cuidado:
      "Na volta da substituição, 2ˣ não pode ser negativo nem zero. Descarte esses valores de y.",
  },
  questoes: [
    {
      topico: "Equação exponencial",
      subassunto: "Igualar as bases",
      dificuldade: 4,
      raciocinio: "Escrever 4 e 8 como potências de 2 e igualar os expoentes.",
      enunciado: "A solução da equação 4ˣ⁺¹ = 8ˣ⁻¹ é",
      alternativas: ["−1", "5", "2", "3", "−5"],
      correta: 1,
      explicacao: "2^(2x + 2) = 2^(3x − 3). Logo, 2x + 2 = 3x − 3 e x = 5.",
      explicacaoErradas:
        "“2” multiplica só o x: 2x + 1 = 3x − 1. “3” faz isso só no lado direito: 2x + 2 = 3x − 1. “−1” erra o sinal: 2x + 2 = 3x + 3. “−5” troca o sinal da resposta.",
      pegadinha:
        "Multiplicar só o x pelo novo expoente. A multiplicação alcança o expoente inteiro, com o número junto.",
      conhecimento: "(aᵐ)ⁿ = aᵐⁿ: o expoente de fora multiplica todo o expoente de dentro.",
    },
    {
      topico: "Equação exponencial",
      subassunto: "Substituição por y",
      dificuldade: 5,
      raciocinio: "Chamar 2ˣ de y, resolver e voltar para x.",
      enunciado: "A soma das soluções da equação 4ˣ − 6 · 2ˣ + 8 = 0 é",
      alternativas: ["3", "1", "2", "6", "8"],
      correta: 0,
      explicacao: "Com y = 2ˣ: y² − 6y + 8 = 0, com y = 2 e y = 4. Então, x = 1 e x = 2. A soma é 3.",
      explicacaoErradas:
        "“6” soma os valores de y, e “8” multiplica esses valores. “2” multiplica as soluções. “1” fica só com a menor solução.",
      pegadinha:
        "Parar em y. A pergunta é sobre x, e falta voltar pela igualdade 2ˣ = y.",
      conhecimento: "4ˣ = (2ˣ)².",
    },
    {
      topico: "Função exponencial",
      subassunto: "Valor que cai pela metade",
      dificuldade: 5,
      raciocinio: "Dividir os dois lados por 80.000 e igualar as bases.",
      enunciado:
        "O valor de uma viatura, em reais, é dado por V(t) = 80.000 · (1/2) elevado a t/4, com t em anos. O valor cairá para R$ 10.000,00 em quantos anos?",
      alternativas: ["3", "8", "16", "32", "12"],
      correta: 4,
      explicacao: "10.000 ÷ 80.000 = 1/8 = (1/2)³. Logo, t/4 = 3 e t = 12.",
      explicacaoErradas:
        "“3” para no expoente. “8” usa a razão entre os valores. “32” multiplica 8 por 4. “16” toma 8 como 2⁴.",
      pegadinha:
        "Parar em t/4 = 3. O resultado é o expoente, e ainda falta achar t.",
      conhecimento: "Se o valor cai à metade a cada 4 anos, três metades levam 12 anos.",
    },
    {
      topico: "Inequação exponencial",
      subassunto: "Base entre 0 e 1",
      dificuldade: 5,
      raciocinio: "Escrever 1/27 na base 1/3 e inverter o sinal.",
      enunciado: "A solução da inequação (1/3) elevado a (2x − 1) ≥ 1/27 é",
      alternativas: ["x ≥ 2", "x ≤ 2", "x ≥ −1", "x ≤ −1", "x ≤ 1/2"],
      correta: 1,
      explicacao: "1/27 = (1/3)³. Como a base está entre 0 e 1, o sinal inverte: 2x − 1 ≤ 3 e x ≤ 2.",
      explicacaoErradas:
        "“x ≥ 2” não inverte o sinal. “x ≥ −1” e “x ≤ −1” usam o expoente −3 com a base 1/3. “x ≤ 1/2” iguala o expoente a zero.",
      pegadinha:
        "Manter o sinal. Com base entre 0 e 1, a função é decrescente.",
      conhecimento: "Base maior que 1: sinal mantido. Base entre 0 e 1: sinal invertido.",
    },
    {
      topico: "Função exponencial",
      subassunto: "Lei da função a partir de dois pontos",
      dificuldade: 4,
      raciocinio: "f(0) dá o k. f(2) dá a base.",
      enunciado: "Uma função da forma f(x) = k · aˣ, com a > 0, tem f(0) = 3 e f(2) = 12. O valor de f(3) é",
      alternativas: ["24", "16,5", "18", "36", "48"],
      correta: 0,
      explicacao: "f(0) = k = 3. f(2) = 3a² = 12, então a = 2. Logo, f(3) = 3 · 8 = 24.",
      explicacaoErradas:
        "“16,5” trata o crescimento como reta. “18” usa regra de três a partir de f(2). “36” multiplica 3 por 12. “48” multiplica 12 por 4, em vez de 2.",
      pegadinha:
        "Usar a como 4, porque 12 ÷ 3 = 4. O 4 é o crescimento em dois passos.",
      conhecimento: "Na exponencial, cada passo multiplica o valor pela base.",
    },
    {
      topico: "Função exponencial",
      subassunto: "Condição na base",
      dificuldade: 5,
      raciocinio: "A base inteira, k − 3, tem de estar entre 0 e 1.",
      enunciado: "A função f(x) = (k − 3)ˣ é decrescente para",
      alternativas: ["k < 4", "k > 4", "k < 3", "0 < k < 1", "3 < k < 4"],
      correta: 4,
      explicacao: "A condição é 0 < k − 3 < 1. Somando 3 a tudo: 3 < k < 4.",
      explicacaoErradas:
        "“k < 4” aceita base negativa ou zero. “k > 4” dá base maior que 1, e a função cresce. “k < 3” deixa a base negativa. “0 < k < 1” aplica a regra em k, e não em k − 3.",
      pegadinha:
        "Esquecer que a base tem de ser positiva. Exigir só k − 3 < 1 não basta.",
      conhecimento: "Base da exponencial: positiva e diferente de 1.",
    },
  ],
};
