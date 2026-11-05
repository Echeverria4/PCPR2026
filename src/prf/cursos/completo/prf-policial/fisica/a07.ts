import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "fisica-07",
  resumo: {
    ideia:
      "Trabalho é a energia transferida por uma força. Potência mede a rapidez dessa transferência. Sem atrito, a energia mecânica se conserva.",
    itens: [
      {
        termo: "Trabalho",
        faz: "τ = F·d·cos θ. Força perpendicular ao deslocamento não realiza trabalho.",
      },
      {
        termo: "Energia cinética",
        faz: "Ec = m·v²/2. Velocidade 2 vezes maior dá energia 4 vezes maior.",
      },
      {
        termo: "Teorema da energia cinética",
        faz: "O trabalho da resultante é igual à variação da energia cinética.",
      },
      {
        termo: "Energia potencial gravitacional",
        faz: "Ep = m·g·h.",
      },
      {
        termo: "Potência",
        faz: "P = τ ÷ Δt = F·v. A unidade é o watt.",
      },
      {
        termo: "Rendimento",
        faz: "η = potência útil ÷ potência total. O resto é perda.",
      },
      {
        termo: "Conservação",
        faz: "Sem atrito, Ec + Ep é constante.",
      },
      {
        termo: "Sistema dissipativo",
        faz: "Parte da energia mecânica vira calor, por exemplo.",
      },
    ],
    cuidado:
      "Energia cinética depende do quadrado da velocidade. Comparar velocidades sem elevar ao quadrado é o erro mais comum.",
  },
  questoes: [
    {
      topico: "Trabalho",
      subassunto: "Força perpendicular",
      dificuldade: 4,
      raciocinio: "Com ângulo de 90°, cos θ = 0.",
      enunciado: "Uma viatura anda em pista plana e reta. Durante esse percurso, o trabalho da força peso sobre ela é",
      alternativas: [
        "positivo, pois o peso ajuda a manter a viatura no chão",
        "negativo, pois o peso se opõe ao avanço da viatura",
        "igual ao peso multiplicado pela distância percorrida",
        "igual ao trabalho do motor, com o sinal trocado",
        "nulo, pois o peso é perpendicular ao deslocamento",
      ],
      correta: 4,
      explicacao: "O peso é vertical, e o deslocamento é horizontal. Logo, cos 90° = 0.",
      explicacaoErradas:
        "“positivo” e “negativo” exigiriam componente na direção do movimento. “igual ao peso multiplicado” esquece o ângulo. “igual ao trabalho do motor” confunde o peso com as resistências.",
      pegadinha: "Multiplicar força por distância sem olhar a direção.",
      conhecimento: "A normal também tem trabalho nulo nesse caso.",
    },
    {
      topico: "Energia cinética",
      subassunto: "Comparação de velocidades",
      dificuldade: 5,
      raciocinio: "Razão das velocidades ao quadrado.",
      enunciado: "Um veículo passa de 40 km/h para 120 km/h. A energia cinética dele fica",
      alternativas: ["3 vezes maior", "6 vezes maior", "9 vezes maior", "27 vezes maior", "igual"],
      correta: 2,
      explicacao: "A velocidade fica 3 vezes maior. Logo, a energia fica 3² = 9 vezes maior.",
      explicacaoErradas:
        "“3 vezes maior” esquece o quadrado. “6 vezes maior” multiplica por 2. “27 vezes maior” usa o cubo. “igual” supõe que a energia não depende da velocidade.",
      pegadinha: "Aplicar a razão direta das velocidades.",
      conhecimento: "É por isso que batidas em alta velocidade são tão graves.",
    },
    {
      topico: "Teorema da energia cinética",
      subassunto: "Força média de frenagem",
      dificuldade: 5,
      raciocinio: "O trabalho da frenagem é igual à energia cinética perdida.",
      enunciado: "Um carro de 1.000 kg a 20 m/s para em 40 m. A força média de frenagem é de",
      alternativas: ["5.000 N", "500 N", "10.000 N", "200.000 N", "250 N"],
      correta: 0,
      explicacao: "Ec = 1.000 · 400 ÷ 2 = 200.000 J. Logo, F = 200.000 ÷ 40 = 5.000 N.",
      explicacaoErradas:
        "“10.000 N” esquece a metade da fórmula. “500 N” erra uma casa decimal. “200.000 N” não divide pela distância. “250 N” esquece o quadrado.",
      pegadinha: "Esquecer o 2 da energia cinética.",
      conhecimento: "O trabalho da força de frenagem é negativo.",
    },
    {
      topico: "Potência",
      subassunto: "Força e velocidade",
      dificuldade: 5,
      raciocinio: "P = F·v, com v em m/s.",
      enunciado: "Para manter 108 km/h constantes, um veículo precisa vencer 2.000 N de resistências. A potência necessária é de",
      alternativas: ["216 kW", "66,7 W", "60 W", "60 kW", "2 kW"],
      correta: 3,
      explicacao: "108 km/h são 30 m/s. Logo, 2.000 · 30 = 60.000 W, ou 60 kW.",
      explicacaoErradas:
        "“216 kW” usa 108 sem converter. “66,7 W” divide a força pela velocidade. “60 W” erra o prefixo. “2 kW” repete o valor da força.",
      pegadinha: "Multiplicar por km/h.",
      conhecimento: "Quilo vale mil. Logo, 60.000 W são 60 kW.",
    },
    {
      topico: "Rendimento",
      subassunto: "Potência útil e perdas",
      dificuldade: 4,
      raciocinio: "Rendimento é útil dividido por total. Perda é a diferença.",
      enunciado: "Um motor consome 80 kW e entrega 60 kW às rodas. O rendimento e a potência perdida são",
      alternativas: ["80% e 20 kW", "133% e 20 kW", "75% e 60 kW", "25% e 20 kW", "75% e 20 kW"],
      correta: 4,
      explicacao: "60 ÷ 80 = 75%. A perda é 80 − 60 = 20 kW.",
      explicacaoErradas:
        "“80% e 20 kW” repete a potência total. “133% e 20 kW” inverte a divisão. “75% e 60 kW” confunde perda com útil. “25% e 20 kW” dá a parte perdida.",
      pegadinha: "Inverter a razão e passar de 100%.",
      conhecimento: "O rendimento nunca passa de 100%.",
    },
    {
      topico: "Conservação da energia",
      subassunto: "Rampa de escape",
      dificuldade: 5,
      raciocinio: "Iguale a energia cinética à potencial. A massa se cancela.",
      enunciado:
        "Um caminhão desgovernado entra a 72 km/h em uma rampa de escape. Sem atrito e com g = 10 m/s², a altura máxima alcançada é de",
      alternativas: ["40 m", "20 m", "10 m", "2 m", "259 m"],
      correta: 1,
      explicacao: "72 km/h são 20 m/s. Logo, h = v² ÷ 2g = 400 ÷ 20 = 20 m.",
      explicacaoErradas:
        "“40 m” esquece o 2. “10 m” divide por 4g, e não por 2g. “2 m” usa v ÷ g, que dá um tempo. “259 m” usa 72 sem converter.",
      pegadinha: "Procurar a massa do caminhão.",
      conhecimento: "A altura não depende da massa nem da inclinação.",
    },
  ],
};
