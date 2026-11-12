import type { ExemploResolvido } from "../../../../aulas/resumos/tipos";

/** Exemplos resolvidos de Física, aulas 01 a 05. Problemas próprios do app, em cenários da PRF. Use g = 10 m/s². */
export const EXEMPLOS_FISICA_1: Record<string, ExemploResolvido[]> = {
  "fisica-01": [
    {
      titulo: "Velocidade média em trechos diferentes",
      formula: "Vm = distância total ÷ tempo total. Cada trecho: t = d ÷ v.",
      problema:
        "Uma viatura anda 90 km a 90 km/h e depois mais 30 km a 60 km/h. Qual é a velocidade média no percurso todo?",
      passos: [
        { faz: "Ache o tempo do 1º trecho.", conta: "t₁ = 90 ÷ 90 = 1 h" },
        { faz: "Ache o tempo do 2º trecho.", conta: "t₂ = 30 ÷ 60 = 0,5 h" },
        {
          faz: "Divida a distância total pelo tempo total. Não faça a média das velocidades.",
          conta: "Vm = (90 + 30) ÷ (1 + 0,5) = 120 ÷ 1,5 = 80",
        },
        { faz: "Se pedirem em m/s, divida por 3,6.", conta: "80 ÷ 3,6 ≈ 22,2 m/s" },
      ],
      resposta: "80 km/h. A média das velocidades daria 75 km/h, o que está errado.",
    },
    {
      titulo: "Corpo extenso atravessando uma ponte",
      formula: "t = (comprimento da ponte + comprimento do veículo) ÷ v",
      legenda: "O veículo só termina a travessia quando a traseira sai da ponte.",
      problema: "Um caminhão de 20 m, a 36 km/h, atravessa uma ponte de 180 m. Quanto tempo leva a travessia?",
      passos: [
        { faz: "Passe a velocidade para m/s, porque as distâncias estão em metros.", conta: "36 ÷ 3,6 = 10 m/s" },
        { faz: "Some a ponte e o caminhão.", conta: "180 + 20 = 200 m" },
        { faz: "Divida pela velocidade.", conta: "t = 200 ÷ 10 = 20 s" },
      ],
      resposta: "20 segundos.",
    },
  ],
  "fisica-02": [
    {
      titulo: "Encontro de dois móveis no MRU",
      formula: "S = S₀ + v · t para cada um. No encontro, as posições são iguais.",
      legenda: "S₀ é a posição no início, v é a velocidade e t é o tempo.",
      problema:
        "Uma viatura no km 0, a 100 km/h, segue um carro que está no km 20, a 80 km/h, no mesmo sentido. Quando e em que km a viatura alcança o carro?",
      passos: [
        { faz: "Escreva a equação de cada um.", conta: "Viatura: S = 0 + 100t. Carro: S = 20 + 80t." },
        { faz: "Iguale as posições.", conta: "100t = 20 + 80t" },
        { faz: "Resolva.", conta: "20t = 20 → t = 1 h" },
        { faz: "Ponha o tempo numa das equações para achar o local.", conta: "S = 100 · 1 = 100 → km 100" },
        {
          faz: "Atalho: no mesmo sentido, as velocidades se subtraem. A viatura tira 20 km/h de diferença por hora.",
          conta: "20 km ÷ (100 − 80) km/h = 1 h ✓",
        },
      ],
      resposta: "Depois de 1 hora, no km 100.",
    },
  ],
  "fisica-03": [
    {
      titulo: "Distância de parada: reação + frenagem",
      formula: "Reação: d = v · t. Frenagem (Torricelli): v² = v₀² + 2 · a · ΔS.",
      legenda: "Na reação, o carro ainda anda com velocidade constante. Na frenagem, a aceleração é negativa.",
      problema:
        "Um carro está a 72 km/h. O motorista leva 1 s para reagir, e o freio dá uma desaceleração de 5 m/s². Qual é a distância total até parar?",
      passos: [
        { faz: "Passe para m/s.", conta: "72 ÷ 3,6 = 20 m/s" },
        { faz: "Distância durante a reação, ainda a 20 m/s.", conta: "d₁ = 20 · 1 = 20 m" },
        {
          faz: "Frenagem: o tempo não foi dado, então use Torricelli. No fim, v = 0.",
          conta: "0 = 20² + 2 · (−5) · d₂ → 10 · d₂ = 400 → d₂ = 40 m",
        },
        { faz: "Some as duas partes.", conta: "20 + 40 = 60 m" },
        {
          faz: "Veja o efeito da velocidade: a 40 m/s, a frenagem fica 4 vezes maior, porque v entra ao quadrado.",
          conta: "40² ÷ 10 = 160 m",
        },
      ],
      resposta: "60 metros.",
    },
  ],
  "fisica-04": [
    {
      titulo: "Queda livre",
      formula: "h = g · t² ÷ 2 e v = g · t",
      legenda: "Parte do repouso. Use g = 10 m/s².",
      problema:
        "Um objeto é solto de um viaduto de 20 m de altura sobre a rodovia. Em quanto tempo chega à pista, e com que velocidade?",
      passos: [
        { faz: "Use a altura para achar o tempo.", conta: "20 = 10 · t² ÷ 2 → 20 = 5t² → t² = 4 → t = 2 s" },
        { faz: "Use o tempo para achar a velocidade.", conta: "v = 10 · 2 = 20 m/s" },
        { faz: "Passe para km/h.", conta: "20 · 3,6 = 72 km/h" },
      ],
      resposta: "2 segundos, chegando a 20 m/s (72 km/h). A massa do objeto não muda o resultado.",
    },
    {
      titulo: "Lançamento horizontal",
      formula: "Vertical: h = g · t² ÷ 2 (queda livre). Horizontal: x = v · t (velocidade constante).",
      problema:
        "Um veículo sai de um barranco de 5 m de altura a 20 m/s, na horizontal. A que distância da base do barranco ele toca o chão?",
      passos: [
        { faz: "Trate a vertical sozinha: é uma queda livre de 5 m.", conta: "5 = 5t² → t = 1 s" },
        { faz: "Na horizontal, a velocidade não muda durante esse tempo.", conta: "x = 20 · 1 = 20 m" },
      ],
      resposta: "20 metros da base.",
    },
  ],
  "fisica-05": [
    {
      titulo: "Movimento circular: roda do veículo",
      formula: "v = ω · R e ω = 2π · f. Período: T = 1 ÷ f.",
      legenda: "v é a velocidade linear, ω a angular, R o raio e f as voltas por segundo (Hz).",
      problema:
        "A roda de uma viatura tem 0,3 m de raio, e o carro anda a 18 m/s sem derrapar. Quantas voltas por segundo a roda dá? Use π = 3.",
      passos: [
        { faz: "Ache a velocidade angular.", conta: "ω = v ÷ R = 18 ÷ 0,3 = 60 rad/s" },
        { faz: "Passe para frequência.", conta: "f = ω ÷ 2π = 60 ÷ (2 · 3) = 10 Hz" },
        { faz: "Período: o tempo de uma volta.", conta: "T = 1 ÷ 10 = 0,1 s" },
      ],
      resposta: "10 voltas por segundo (600 por minuto).",
    },
  ],
};
