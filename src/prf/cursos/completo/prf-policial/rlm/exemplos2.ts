import type { ExemploResolvido } from "../../../../aulas/resumos/tipos";

/** Exemplos resolvidos de RLM, aulas 11 a 16. Problemas próprios do app, em cenários da PRF. */
export const EXEMPLOS_RLM_2: Record<string, ExemploResolvido[]> = {
  "rlm-11": [
    {
      titulo: "Máximo pelo vértice da parábola",
      formula: "f(x) = ax² + bx + c → xᵥ = −b ÷ 2a e yᵥ = −Δ ÷ 4a",
      legenda: "Com a negativo, a parábola tem a boca para baixo, e o vértice é o ponto mais alto (o máximo).",
      problema:
        "Com 60 m de fita zebrada, um agente vai isolar uma área retangular encostada num muro. O lado do muro não precisa de fita. Qual é a maior área possível?",
      passos: [
        {
          faz: "Monte a função. Os lados com fita são x, x e 60 − 2x. A área é um lado vezes o outro.",
          conta: "A(x) = x · (60 − 2x) = −2x² + 60x (a = −2, b = 60, c = 0)",
        },
        { faz: "Como a = −2 é negativo, o vértice é o máximo. Ache o x do vértice.", conta: "xᵥ = −60 ÷ (2 · (−2)) = −60 ÷ (−4) = 15" },
        { faz: "Ache a área máxima: ponha x = 15 na função.", conta: "A(15) = 15 · (60 − 30) = 15 · 30 = 450" },
        { faz: "Confira pela outra fórmula.", conta: "Δ = 60² − 0 = 3.600 → yᵥ = −3.600 ÷ (4 · (−2)) = 450 ✓" },
      ],
      resposta: "450 m², com lados de 15 m, 15 m e 30 m.",
    },
  ],
  "rlm-12": [
    {
      titulo: "Equação exponencial: igualar as bases",
      formula: "f(n) = C · aⁿ. Se 2ⁿ = 2ᵐ, então n = m.",
      legenda: "C é o valor do início, a é quanto ele se multiplica a cada período, e n é o número de períodos.",
      problema:
        "Um estado tinha 40 radares, e esse número dobra a cada 3 anos. Em quantos anos ele chega a 320 radares?",
      passos: [
        { faz: "Conte em períodos de 3 anos (n). A cada período, o número dobra.", conta: "f(n) = 40 · 2ⁿ" },
        { faz: "Iguale ao alvo e deixe a potência sozinha.", conta: "40 · 2ⁿ = 320 → 2ⁿ = 320 ÷ 40 = 8" },
        { faz: "Escreva o 8 na base 2 e iguale os expoentes.", conta: "8 = 2³ → 2ⁿ = 2³ → n = 3" },
        { faz: "Volte de períodos para anos.", conta: "3 períodos · 3 anos = 9 anos" },
      ],
      resposta: "9 anos (40 → 80 → 160 → 320).",
    },
  ],
  "rlm-13": [
    {
      titulo: "Logaritmo para achar o expoente",
      formula: "bˣ = a ⇔ x = log a na base b = log a ÷ log b. E log (a · b) = log a + log b.",
      problema:
        "O número de radares de um trecho dobra a cada ano. Em quanto tempo ele fica 6 vezes maior? Use log 2 = 0,30 e log 3 = 0,48.",
      passos: [
        { faz: "Monte: começa com R e dobra por ano, até ficar 6R.", conta: "R · 2ᵗ = 6R → 2ᵗ = 6" },
        { faz: "Pela definição, t é o logaritmo de 6 na base 2.", conta: "t = log₂ 6" },
        { faz: "Mude para a base 10, que é a dos valores dados.", conta: "t = log 6 ÷ log 2" },
        { faz: "6 = 2 · 3, e o log do produto é a soma dos logs.", conta: "log 6 = log 2 + log 3 = 0,30 + 0,48 = 0,78" },
        { faz: "Divida e veja se faz sentido: 2² = 4 e 2³ = 8, então t fica entre 2 e 3.", conta: "t = 0,78 ÷ 0,30 = 2,6" },
      ],
      resposta: "Cerca de 2,6 anos.",
    },
  ],
  "rlm-14": [
    {
      titulo: "Progressão aritmética (PA)",
      formula: "aₙ = a₁ + (n − 1) · r e Sₙ = (a₁ + aₙ) · n ÷ 2",
      legenda: "a₁ é o 1º termo, r é quanto se soma de um termo para o outro, e n é a posição.",
      problema:
        "Numa operação, uma equipe faz 12 abordagens no 1º dia e 3 a mais a cada dia. Quantas faz no 10º dia, e quantas nos 10 dias?",
      passos: [
        { faz: "Identifique os dados.", conta: "a₁ = 12, r = 3, n = 10" },
        { faz: "Use o termo geral para o 10º dia.", conta: "a₁₀ = 12 + (10 − 1) · 3 = 12 + 27 = 39" },
        { faz: "Use a soma: primeiro mais último, vezes n, dividido por 2.", conta: "S₁₀ = (12 + 39) · 10 ÷ 2 = 51 · 5 = 255" },
      ],
      resposta: "39 abordagens no 10º dia e 255 no total.",
    },
    {
      titulo: "Progressão geométrica (PG)",
      formula: "aₙ = a₁ · qⁿ⁻¹ e Sₙ = a₁ · (qⁿ − 1) ÷ (q − 1)",
      legenda: "q é quanto se multiplica de um termo para o outro.",
      problema:
        "Um alerta de interdição da rodovia é repassado por mensagem: 3 pessoas recebem no 1º dia, e o número de quem recebe triplica a cada dia. Quantas recebem no 5º dia, e quantas no total até o 5º dia?",
      passos: [
        { faz: "Identifique os dados.", conta: "a₁ = 3, q = 3, n = 5" },
        { faz: "Termo geral: o expoente é n − 1, e não n.", conta: "a₅ = 3 · 3⁴ = 3 · 81 = 243" },
        { faz: "Use a soma da PG.", conta: "S₅ = 3 · (3⁵ − 1) ÷ (3 − 1) = 3 · 242 ÷ 2 = 363" },
        { faz: "Confira somando os termos.", conta: "3 + 9 + 27 + 81 + 243 = 363 ✓" },
      ],
      resposta: "243 pessoas no 5º dia e 363 no total.",
    },
  ],
  "rlm-15": [
    {
      titulo: "Teorema de Pitágoras",
      formula: "a² = b² + c²",
      legenda: "a é a hipotenusa: o lado maior, em frente ao ângulo reto. b e c são os outros dois lados.",
      problema:
        "Para desviar de um bloqueio, uma viatura segue 12 km para o leste e depois 5 km para o norte. Qual é a distância em linha reta entre o início e o fim?",
      passos: [
        {
          faz: "Desenhe: leste e norte formam um ângulo reto. A linha reta entre o início e o fim é a hipotenusa.",
          conta: "b = 12, c = 5, a = ?",
        },
        { faz: "Aplique a fórmula.", conta: "a² = 12² + 5² = 144 + 25 = 169" },
        { faz: "Tire a raiz.", conta: "a = √169 = 13" },
      ],
      resposta: "13 km (o caminho feito foi de 17 km).",
    },
    {
      titulo: "Comprimento e área do círculo",
      formula: "Comprimento = 2πr. Área = πr².",
      legenda: "r é o raio, do centro até a borda. Se vier o diâmetro, divida por 2.",
      problema:
        "Uma rotatória tem um canteiro circular de 10 m de raio. Qual é o comprimento da volta e a área do canteiro? Use π = 3,14.",
      passos: [
        { faz: "Comprimento da volta.", conta: "C = 2 · 3,14 · 10 = 62,8" },
        { faz: "Área: eleve o raio ao quadrado antes de multiplicar por π.", conta: "A = 3,14 · 10² = 3,14 · 100 = 314" },
      ],
      resposta: "62,8 m de volta e 314 m² de área.",
    },
  ],
  "rlm-16": [
    {
      titulo: "Volume do cilindro em litros",
      formula: "Volume = área da base · altura. No cilindro, a base é um círculo: V = πr² · h.",
      legenda: "1 m³ = 1.000 litros.",
      problema:
        "O tanque de combustível de uma base é um cilindro com 1 m de raio e 2 m de altura. Quantos litros cabem nele? Use π = 3,14.",
      passos: [
        { faz: "Calcule a área da base (o círculo).", conta: "πr² = 3,14 · 1² = 3,14 m²" },
        { faz: "Multiplique pela altura.", conta: "V = 3,14 · 2 = 6,28 m³" },
        { faz: "Passe para litros.", conta: "6,28 · 1.000 = 6.280 litros" },
        { faz: "Se fosse um cone com a mesma base e altura, seria um terço disso.", conta: "6.280 ÷ 3 ≈ 2.093 litros" },
      ],
      resposta: "6.280 litros.",
    },
  ],
};
