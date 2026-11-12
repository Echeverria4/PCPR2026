import type { ExemploResolvido } from "../../../../aulas/resumos/tipos";

/** Exemplos resolvidos de Física, aulas 06 a 09. Problemas próprios do app, em cenários da PRF. Use g = 10 m/s². */
export const EXEMPLOS_FISICA_2: Record<string, ExemploResolvido[]> = {
  "fisica-06": [
    {
      titulo: "Frenagem pelo atrito (2ª Lei de Newton)",
      formula: "Fat = μ · N e FR = m · a",
      legenda: "μ é o coeficiente de atrito. Na pista plana, a normal é igual ao peso: N = m · g.",
      problema:
        "Uma viatura de 1.000 kg freia com as rodas travadas numa pista plana com μ = 0,5. Qual é a desaceleração?",
      passos: [
        { faz: "Ache a normal: na pista plana, ela é igual ao peso.", conta: "N = 1.000 · 10 = 10.000 N" },
        { faz: "Calcule o atrito. Ele é a única força que freia.", conta: "Fat = 0,5 · 10.000 = 5.000 N" },
        { faz: "Use a 2ª Lei.", conta: "a = 5.000 ÷ 1.000 = 5 m/s²" },
        { faz: "Repare que a massa some: a desaceleração é sempre μ · g.", conta: "0,5 · 10 = 5 m/s² ✓" },
      ],
      resposta: "5 m/s². Um carro mais pesado, com o mesmo μ, freia igual.",
    },
    {
      titulo: "Velocidade máxima na curva",
      formula: "Na curva plana, o atrito faz a força centrípeta: μ · m · g = m · v² ÷ R",
      problema: "Qual é a maior velocidade para fazer, sem derrapar, uma curva plana de 80 m de raio com μ = 0,5?",
      passos: [
        { faz: "Iguale o atrito máximo à força centrípeta.", conta: "μ · m · g = m · v² ÷ R" },
        { faz: "A massa está dos dois lados: corte. Isole o v².", conta: "v² = μ · g · R = 0,5 · 10 · 80 = 400" },
        { faz: "Tire a raiz e passe para km/h.", conta: "v = 20 m/s → 20 · 3,6 = 72 km/h" },
      ],
      resposta: "72 km/h. Com a pista molhada (μ menor), a velocidade máxima cai.",
    },
  ],
  "fisica-07": [
    {
      titulo: "Energia cinética e potência",
      formula: "Ec = m · v² ÷ 2 e P = trabalho ÷ tempo",
      legenda: "O trabalho da força resultante é igual à variação da energia cinética. Potência em watts (J/s).",
      problema:
        "Um veículo de 1.000 kg vai de 0 a 20 m/s em 10 s. Sem contar as perdas, qual é a potência média do motor?",
      passos: [
        { faz: "Calcule a energia cinética no fim. No início, ela é zero.", conta: "Ec = 1.000 · 20² ÷ 2 = 200.000 J" },
        { faz: "O trabalho do motor é essa variação.", conta: "τ = 200.000 − 0 = 200.000 J" },
        { faz: "Divida pelo tempo.", conta: "P = 200.000 ÷ 10 = 20.000 W = 20 kW" },
      ],
      resposta: "20 kW.",
    },
    {
      titulo: "Conservação da energia mecânica",
      formula: "Sem atrito: m · g · h + m · v₀² ÷ 2 = m · v² ÷ 2",
      problema:
        "Um veículo sem freio está a 10 m/s no alto de uma descida de 15 m de altura. Sem atrito, com que velocidade chega embaixo?",
      passos: [
        { faz: "Escreva a energia no alto (altura + velocidade) igual à energia embaixo (só velocidade).", conta: "m · 10 · 15 + m · 10² ÷ 2 = m · v² ÷ 2" },
        { faz: "Corte a massa e multiplique tudo por 2.", conta: "300 + 100 = v²" },
        { faz: "Tire a raiz.", conta: "v² = 400 → v = 20 m/s (72 km/h)" },
      ],
      resposta: "20 m/s. Na vida real, o atrito e o ar deixam o valor um pouco menor.",
    },
  ],
  "fisica-08": [
    {
      titulo: "Colisão inelástica",
      formula: "Q antes = Q depois, com Q = m · v. Na inelástica, os corpos seguem juntos.",
      problema:
        "Um carro de 1.000 kg a 20 m/s bate na traseira de outro de 1.500 kg parado, e os dois seguem juntos. Qual é a velocidade logo após a batida?",
      passos: [
        { faz: "Some a quantidade de movimento antes. O carro parado tem Q = 0.", conta: "1.000 · 20 + 1.500 · 0 = 20.000 kg·m/s" },
        { faz: "Depois, os dois andam juntos, com a massa somada.", conta: "(1.000 + 1.500) · v = 2.500 · v" },
        { faz: "Iguale e resolva.", conta: "2.500 · v = 20.000 → v = 8 m/s" },
        {
          faz: "Compare a energia: ela não se conserva. A diferença virou deformação e calor.",
          conta: "Antes: 1.000 · 20² ÷ 2 = 200.000 J. Depois: 2.500 · 8² ÷ 2 = 80.000 J.",
        },
      ],
      resposta: "8 m/s (28,8 km/h). Perderam-se 120.000 J de energia cinética.",
    },
    {
      titulo: "Impulso: por que o air bag protege",
      formula: "I = F · Δt = variação de Q",
      problema:
        "Uma pessoa de 60 kg está a 20 m/s e para em 0,1 s ao bater no volante. Qual é a força média? E se o air bag fizer a parada durar 0,3 s?",
      passos: [
        { faz: "Ache a variação da quantidade de movimento (de 20 m/s a 0).", conta: "ΔQ = 60 · 20 = 1.200 kg·m/s" },
        { faz: "Divida pelo tempo da parada.", conta: "F = 1.200 ÷ 0,1 = 12.000 N" },
        { faz: "Com o air bag, o tempo triplica e a força cai para um terço.", conta: "F = 1.200 ÷ 0,3 = 4.000 N" },
      ],
      resposta: "12.000 N sem air bag e 4.000 N com ele. O impulso é o mesmo; o tempo maior reduz a força.",
    },
  ],
  "fisica-09": [
    {
      titulo: "Soma de vetores com ângulo",
      formula: "R² = a² + b² + 2 · a · b · cos θ",
      legenda: "θ é o ângulo entre os dois vetores. cos 60° = 0,5; cos 90° = 0; cos 120° = −0,5.",
      problema:
        "Dois guinchos puxam um caminhão tombado com forças de 3.000 N e 5.000 N, e os cabos formam 60° entre si. Qual é a força resultante?",
      passos: [
        { faz: "Trabalhe em milhares de newtons (kN) para a conta ficar pequena.", conta: "a = 3, b = 5, cos 60° = 0,5" },
        { faz: "Aplique a fórmula.", conta: "R² = 3² + 5² + 2 · 3 · 5 · 0,5 = 9 + 25 + 15 = 49" },
        { faz: "Tire a raiz e volte para newtons.", conta: "R = 7 kN = 7.000 N" },
        { faz: "Confira: a resultante fica entre a diferença e a soma.", conta: "5 − 3 = 2 ≤ 7 ≤ 8 = 5 + 3 ✓" },
      ],
      resposta: "7.000 N.",
    },
    {
      titulo: "Decomposição de uma força",
      formula: "Fx = F · cos θ e Fy = F · sen θ",
      legenda: "θ é medido a partir do chão (eixo x). cos 30° ≈ 0,87 e sen 30° = 0,5.",
      problema:
        "Um cabo puxa um carro com 1.000 N, inclinado 30° em relação ao chão. Quanto da força puxa o carro para a frente, e quanto puxa para cima?",
      passos: [
        { faz: "Para a frente: use o cosseno.", conta: "Fx = 1.000 · 0,87 = 870 N" },
        { faz: "Para cima: use o seno.", conta: "Fy = 1.000 · 0,5 = 500 N" },
        { faz: "Confira com Pitágoras.", conta: "870² + 500² ≈ 756.900 + 250.000 ≈ 1.000² ✓" },
      ],
      resposta: "Cerca de 870 N para a frente e 500 N para cima.",
    },
  ],
};
