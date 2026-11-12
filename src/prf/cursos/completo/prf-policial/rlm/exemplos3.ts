import type { ExemploResolvido } from "../../../../aulas/resumos/tipos";

/** Exemplos resolvidos de RLM, aulas 20 a 25. Problemas próprios do app, em cenários da PRF. */
export const EXEMPLOS_RLM_3: Record<string, ExemploResolvido[]> = {
  "rlm-20": [
    {
      titulo: "Média ponderada",
      formula: "Média = (valor₁ · peso₁ + valor₂ · peso₂ + …) ÷ (peso₁ + peso₂ + …)",
      problema:
        "Num curso de formação, a prova teórica tem peso 3, a prática tem peso 2 e o teste físico tem peso 1. Um aluno tirou 7, 9 e 6. Qual é a média dele?",
      passos: [
        { faz: "Multiplique cada nota pelo seu peso.", conta: "7 · 3 = 21; 9 · 2 = 18; 6 · 1 = 6" },
        { faz: "Some os resultados.", conta: "21 + 18 + 6 = 45" },
        { faz: "Divida pela soma dos pesos, e não pela quantidade de notas.", conta: "45 ÷ (3 + 2 + 1) = 45 ÷ 6 = 7,5" },
      ],
      resposta: "7,5 (a média simples daria 7,33).",
    },
    {
      titulo: "Média harmônica: velocidade em trechos iguais",
      formula: "MH = n ÷ (1/x₁ + 1/x₂ + …)",
      legenda: "n é a quantidade de valores. Usa-se quando a distância de cada trecho é a mesma.",
      problema:
        "Uma viatura vai de um posto a outro a 60 km/h e volta pelo mesmo caminho a 40 km/h. Qual é a velocidade média na ida e volta?",
      passos: [
        { faz: "Trechos iguais com velocidades diferentes pedem a média harmônica. A pegadinha é responder 50.", conta: "n = 2" },
        { faz: "Some os inversos.", conta: "1/60 + 1/40 = 2/120 + 3/120 = 5/120 = 1/24" },
        { faz: "Divida n pela soma.", conta: "MH = 2 ÷ (1/24) = 2 · 24 = 48" },
        { faz: "Confira com 120 km de distância: ida em 2 h, volta em 3 h.", conta: "240 km ÷ 5 h = 48 km/h ✓" },
      ],
      resposta: "48 km/h.",
    },
  ],
  "rlm-21": [
    {
      titulo: "Mediana de dados em classes",
      formula: "Md = l + (n/2 − F) ÷ f · h",
      legenda:
        "l: início da classe da mediana. F: total acumulado antes dela. f: quantos há nela. h: largura da classe.",
      problema:
        "Um radar mediu a velocidade de 50 veículos: de 60 a 70 km/h, 10; de 70 a 80, 25; de 80 a 90, 10; de 90 a 100, 5. Qual é a mediana?",
      passos: [
        { faz: "Ache a posição do meio.", conta: "n ÷ 2 = 50 ÷ 2 = 25" },
        {
          faz: "Acumule as frequências. A 25ª posição está na primeira classe cujo acumulado chega a 25.",
          conta: "10 → 35 → 45 → 50: a classe é a de 70 a 80",
        },
        { faz: "Leia os valores da fórmula.", conta: "l = 70, F = 10, f = 25, h = 10" },
        { faz: "Aplique a fórmula.", conta: "Md = 70 + (25 − 10) ÷ 25 · 10 = 70 + 0,6 · 10 = 76" },
      ],
      resposta: "76 km/h.",
    },
  ],
  "rlm-22": [
    {
      titulo: "Moda de Czuber",
      formula: "Mo = l + d₁ ÷ (d₁ + d₂) · h",
      legenda:
        "l: início da classe de maior frequência. d₁: frequência dela menos a da classe de antes. d₂: frequência dela menos a da classe de depois. h: largura.",
      problema:
        "Um radar mediu 50 veículos: de 60 a 70 km/h, 8; de 70 a 80, 20; de 80 a 90, 12; de 90 a 100, 10. Qual é a moda de Czuber?",
      passos: [
        { faz: "Ache a classe modal, a de maior frequência.", conta: "De 70 a 80, com 20 veículos: l = 70, h = 10" },
        { faz: "Calcule d₁ e d₂.", conta: "d₁ = 20 − 8 = 12; d₂ = 20 − 12 = 8" },
        { faz: "Aplique a fórmula.", conta: "Mo = 70 + 12 ÷ (12 + 8) · 10 = 70 + 0,6 · 10 = 76" },
        {
          faz: "Veja se faz sentido: a moda passou do meio da classe (75) porque a classe de depois (12) é maior que a de antes (8).",
        },
      ],
      resposta: "76 km/h.",
    },
  ],
  "rlm-23": [
    {
      titulo: "Variância, desvio-padrão e CV",
      formula: "Variância = soma dos (valor − média)² ÷ n. Desvio-padrão = √variância. CV = desvio-padrão ÷ média.",
      legenda: "Se os dados forem uma amostra, divide-se por n − 1 em vez de n.",
      problema:
        "Um posto registrou, em 8 dias, estes números de acidentes: 2, 4, 4, 4, 5, 5, 7 e 9. Calcule a variância, o desvio-padrão e o coeficiente de variação, tratando os 8 dias como a população toda.",
      passos: [
        { faz: "Calcule a média.", conta: "(2 + 4 + 4 + 4 + 5 + 5 + 7 + 9) ÷ 8 = 40 ÷ 8 = 5" },
        { faz: "Calcule os desvios (valor menos média). Eles sempre somam zero.", conta: "−3, −1, −1, −1, 0, 0, 2, 4" },
        { faz: "Eleve cada desvio ao quadrado e some.", conta: "9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32" },
        { faz: "Divida por n e tire a raiz.", conta: "Variância = 32 ÷ 8 = 4; desvio-padrão = √4 = 2" },
        { faz: "Divida o desvio-padrão pela média.", conta: "CV = 2 ÷ 5 = 0,4 = 40%" },
      ],
      resposta: "Variância 4, desvio-padrão 2 acidentes e CV de 40%. Como amostra, a variância seria 32 ÷ 7 ≈ 4,57.",
    },
  ],
  "rlm-24": [
    {
      titulo: "Combinação ou arranjo",
      formula: "Arranjo: A = n! ÷ (n − p)!. Combinação: C = n! ÷ [p! · (n − p)!].",
      legenda: "n é quantos há para escolher e p é quantos se escolhem. Se trocar a ordem muda o resultado, é arranjo.",
      problema:
        "Um posto tem 8 agentes. De quantas formas se escolhe uma equipe de 3 para uma blitz? E se os 3 tiverem funções diferentes: chefe, motorista e operador de rádio?",
      passos: [
        {
          faz: "Teste da ordem: na equipe, trocar a ordem dos três não muda nada, então é combinação. Nas funções, muda quem faz o quê, então é arranjo.",
        },
        { faz: "Arranjo das funções: multiplique 3 números a partir de 8, descendo.", conta: "A = 8 · 7 · 6 = 336" },
        {
          faz: "Combinação da equipe: divida o arranjo por 3!, porque cada equipe aparece em 3! = 6 ordens.",
          conta: "C = 336 ÷ 6 = 56",
        },
      ],
      resposta: "56 equipes; com funções diferentes, 336 formas.",
    },
  ],
  "rlm-25": [
    {
      titulo: "Probabilidade condicional (Bayes)",
      formula: "P(A dado B) = P(A e B) ÷ P(B)",
      legenda: "O “dado que” troca o universo: a conta é feita só dentro de B.",
      problema:
        "Num posto, 10% dos condutores parados beberam. O teste de triagem dá positivo para 90% de quem bebeu e, por erro, para 5% de quem não bebeu. O teste deu positivo. Qual é a chance de o condutor ter bebido?",
      passos: [
        { faz: "Imagine 1.000 condutores e divida em grupos.", conta: "Beberam: 100. Não beberam: 900." },
        {
          faz: "Ache os positivos de cada grupo.",
          conta: "90% de 100 = 90 positivos; 5% de 900 = 45 positivos",
        },
        { faz: "O “dado que deu positivo” deixa só os positivos no universo.", conta: "90 + 45 = 135 positivos" },
        { faz: "Divida os que beberam e deram positivo pelo total de positivos.", conta: "90 ÷ 135 = 2/3 ≈ 66,7%" },
      ],
      resposta:
        "Cerca de 66,7%, e não 90%. Os falsos positivos pesam porque quem não bebeu é a maioria.",
    },
  ],
};
