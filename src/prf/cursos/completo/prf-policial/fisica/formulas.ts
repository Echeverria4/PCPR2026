import type { Formula } from "../../../../aulas/resumos/tipos";

/**
 * Fórmulas de Física, por aula, para consulta rápida. Use g = 10 m/s².
 * A mesma lista aparece no resumo e no mapa mental da aula. Texto próprio do app.
 */
export const FORMULAS_FISICA: Record<string, Formula[]> = {
  "fisica-01": [
    { nome: "Velocidade média", expr: "Vm = ΔS ÷ Δt", obs: "Distância total ÷ tempo total. Não é a média das velocidades." },
    { nome: "Deslocamento", expr: "ΔS = S − S₀", obs: "Posição final menos a inicial: ida e volta se anulam." },
    { nome: "Unidades", expr: "km/h ÷ 3,6 = m/s · m/s × 3,6 = km/h" },
    { nome: "Corpo extenso", expr: "distância = comprimento da ponte + comprimento do veículo" },
  ],
  "fisica-02": [
    { nome: "Equação horária do MRU", expr: "S = S₀ + v · t", obs: "S₀ é a posição inicial, v a velocidade e t o tempo." },
    { nome: "Encontro", expr: "S do primeiro = S do segundo" },
    { nome: "Velocidade relativa", expr: "Mesmo sentido: v₁ − v₂ · sentidos opostos: v₁ + v₂" },
    { nome: "Tempo até o encontro", expr: "t = distância entre eles ÷ velocidade relativa" },
  ],
  "fisica-03": [
    { nome: "Aceleração", expr: "a = Δv ÷ Δt" },
    { nome: "Velocidade no MRUV", expr: "v = v₀ + a · t" },
    { nome: "Posição no MRUV", expr: "S = S₀ + v₀ · t + a · t² ÷ 2" },
    { nome: "Torricelli", expr: "v² = v₀² + 2 · a · ΔS", obs: "Serve quando o tempo não aparece." },
    { nome: "Parada total", expr: "d = v · t de reação + v₀² ÷ (2 · desaceleração)", obs: "Na reação, o carro ainda anda com velocidade constante." },
  ],
  "fisica-04": [
    { nome: "Queda livre", expr: "h = g · t² ÷ 2 · v = g · t", obs: "Parte do repouso. A massa não muda o tempo de queda." },
    { nome: "Lançamento para cima", expr: "t de subida = v₀ ÷ g · altura máxima = v₀² ÷ 2g" },
    { nome: "Lançamento horizontal", expr: "Vertical: h = g · t² ÷ 2 · horizontal: x = v · t" },
    { nome: "Lançamento oblíquo", expr: "vx = v₀ · cos θ · vy = v₀ · sen θ", obs: "O alcance é máximo a 45°." },
  ],
  "fisica-05": [
    { nome: "Frequência e período", expr: "f = 1 ÷ T", obs: "f em hertz (voltas por segundo); T em segundos." },
    { nome: "Velocidade angular", expr: "ω = 2π ÷ T = 2π · f" },
    { nome: "Velocidade linear", expr: "v = ω · R" },
    { nome: "Aceleração centrípeta", expr: "acp = v² ÷ R", obs: "Aponta para o centro da curva." },
    { nome: "Polias com correia", expr: "f₁ · R₁ = f₂ · R₂", obs: "Mesma velocidade linear. No mesmo eixo: mesma velocidade angular." },
  ],
  "fisica-06": [
    { nome: "2ª Lei de Newton", expr: "FR = m · a" },
    { nome: "Peso", expr: "P = m · g" },
    { nome: "Força elástica", expr: "F = k · x", obs: "x é a deformação da mola." },
    { nome: "Atrito", expr: "Fat = μ · N", obs: "Na pista plana, N = P = m · g." },
    { nome: "Resultante centrípeta", expr: "Fcp = m · v² ÷ R" },
    { nome: "Curva plana", expr: "v máxima = √(μ · g · R)", obs: "O atrito faz o papel da força centrípeta." },
  ],
  "fisica-07": [
    { nome: "Trabalho", expr: "τ = F · d · cos θ", obs: "Força perpendicular ao deslocamento não realiza trabalho." },
    { nome: "Energia cinética", expr: "Ec = m · v² ÷ 2", obs: "Velocidade 2 vezes maior: energia 4 vezes maior." },
    { nome: "Energia potencial gravitacional", expr: "Ep = m · g · h" },
    { nome: "Teorema da energia cinética", expr: "τ da resultante = Ec final − Ec inicial" },
    { nome: "Conservação", expr: "Sem atrito: Ec + Ep = constante" },
    { nome: "Potência", expr: "P = τ ÷ Δt = F · v", obs: "A unidade é o watt (J/s)." },
    { nome: "Rendimento", expr: "η = potência útil ÷ potência total" },
  ],
  "fisica-08": [
    { nome: "Impulso", expr: "I = F · Δt" },
    { nome: "Quantidade de movimento", expr: "Q = m · v" },
    { nome: "Teorema do impulso", expr: "I = Q final − Q inicial" },
    { nome: "Sistema isolado", expr: "Q antes = Q depois" },
    {
      nome: "Coeficiente de restituição",
      expr: "e = velocidade relativa depois ÷ velocidade relativa antes",
      obs: "Elástica: e = 1. Parcialmente elástica: entre 0 e 1. Inelástica: e = 0.",
    },
  ],
  "fisica-09": [
    { nome: "Soma de dois vetores", expr: "R² = a² + b² + 2 · a · b · cos θ", obs: "θ é o ângulo entre os dois vetores." },
    { nome: "Casos especiais", expr: "Mesmo sentido: a + b · opostos: a − b · perpendiculares: R² = a² + b²" },
    { nome: "Limites da resultante", expr: "a − b ≤ R ≤ a + b", obs: "Com a maior que b." },
    { nome: "Decomposição", expr: "Fx = F · cos θ · Fy = F · sen θ", obs: "θ medido a partir do eixo x (o chão)." },
    { nome: "Ângulos que mais caem", expr: "cos 60° = sen 30° = 0,5 · cos 90° = 0 · cos 0° = 1" },
  ],
};
