import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-15",
  resumo: {
    ideia:
      "Geometria plana trata de figuras em um plano: ângulos, triângulos, quadriláteros, polígonos e círculos. As provas cobram mais áreas, Pitágoras e semelhança.",
    itens: [
      {
        termo: "Ângulos",
        faz: "Complementares somam 90°. Suplementares somam 180°.",
      },
      {
        termo: "Triângulo",
        faz: "Os ângulos internos somam 180°. Área = base · altura ÷ 2.",
      },
      {
        termo: "Pitágoras",
        faz: "No triângulo retângulo, a² = b² + c², em que a é a hipotenusa.",
        pista: "Triplas comuns: 3-4-5, 6-8-10 e 5-12-13.",
      },
      {
        termo: "Semelhança",
        faz: "Triângulos com os mesmos ângulos têm lados proporcionais.",
      },
      {
        termo: "Quadriláteros",
        faz: "Retângulo: base · altura. Losango: D · d ÷ 2. Trapézio: (B + b) · h ÷ 2.",
      },
      {
        termo: "Polígonos",
        faz: "Soma dos ângulos internos: (n − 2) · 180°. Número de diagonais: n(n − 3) ÷ 2.",
      },
      {
        termo: "Círculo",
        faz: "Comprimento: 2πr. Área: πr².",
      },
      {
        termo: "Coroa circular",
        faz: "Área entre dois círculos com o mesmo centro: π(R² − r²).",
      },
      {
        termo: "Quadrado no círculo",
        faz: "Quadrado inscrito: a diagonal é o diâmetro. Lado = r√2.",
      },
    ],
    cuidado:
      "As diagonais do losango se cortam ao meio. Em Pitágoras, use as metades delas.",
  },
  questoes: [
    {
      topico: "Ângulos",
      subassunto: "Complemento e suplemento",
      dificuldade: 4,
      raciocinio: "Escrever o suplemento e o complemento em função de x.",
      enunciado:
        "O suplemento de um ângulo é igual ao quádruplo do seu complemento. A medida desse ângulo é",
      alternativas: ["30°", "120°", "72°", "60°", "36°"],
      correta: 3,
      explicacao: "180 − x = 4(90 − x) dá 180 − x = 360 − 4x. Logo, 3x = 180 e x = 60°.",
      explicacaoErradas:
        "“30°” é o complemento, e “120°” é o suplemento. “72°” iguala o próprio ângulo ao quádruplo do complemento. “36°” iguala o suplemento ao quádruplo do ângulo.",
      pegadinha: "Parar em um dos valores auxiliares. A pergunta é sobre o ângulo.",
      conhecimento: "Complemento de x: 90° − x. Suplemento de x: 180° − x.",
    },
    {
      topico: "Polígonos",
      subassunto: "Diagonais e soma dos ângulos",
      dificuldade: 5,
      raciocinio: "Achar n pelas diagonais e usar a soma dos ângulos internos.",
      enunciado:
        "Um polígono convexo tem 20 diagonais. A soma dos seus ângulos internos, em graus, é",
      alternativas: ["1.440", "135", "1.080", "1.260", "900"],
      correta: 2,
      explicacao: "n(n − 3) ÷ 2 = 20 dá n² − 3n − 40 = 0 e n = 8. Soma: 6 · 180° = 1.080°.",
      explicacaoErradas:
        "“1.440” faz n · 180°. “1.260” faz (n − 1) · 180°, e “900” faz (n − 3) · 180°, misturando com a fórmula das diagonais. “135” é cada ângulo do octógono regular.",
      pegadinha: "Trocar o n − 2 da soma pelo n − 3 das diagonais.",
      conhecimento: "Soma dos ângulos internos: (n − 2) · 180°.",
    },
    {
      topico: "Triângulos",
      subassunto: "Semelhança com sombras",
      dificuldade: 4,
      raciocinio: "No mesmo instante, altura e sombra são proporcionais.",
      enunciado:
        "No mesmo instante, um poste de 4 m projeta sombra de 2,5 m, e uma torre projeta sombra de 15 m. A altura da torre, em metros, é",
      alternativas: ["9,375", "16,5", "37,5", "24", "60"],
      correta: 3,
      explicacao: "4 ÷ 2,5 = x ÷ 15. Logo, x = 24 m.",
      explicacaoErradas:
        "“9,375” inverte a proporção. “16,5” soma a diferença de 1,5 m. “37,5” multiplica 15 por 2,5, e “60” multiplica 15 por 4.",
      pegadinha: "Somar a diferença. Na semelhança, a relação é de multiplicação.",
      conhecimento: "Triângulos semelhantes têm lados correspondentes proporcionais.",
    },
    {
      topico: "Quadriláteros",
      subassunto: "Perímetro do losango",
      dificuldade: 5,
      raciocinio: "As diagonais se cortam ao meio e formam quatro triângulos retângulos.",
      enunciado: "As diagonais de um losango medem 16 m e 12 m. O perímetro desse losango, em metros, é",
      alternativas: ["80", "40", "96", "56", "192"],
      correta: 1,
      explicacao: "As metades medem 8 e 6. O lado é √(64 + 36) = 10. Perímetro: 4 · 10 = 40 m.",
      explicacaoErradas:
        "“80” usa as diagonais inteiras em Pitágoras. “96” é a área. “192” é a área sem dividir por 2. “56” soma as diagonais como se fossem lados de um retângulo.",
      pegadinha: "Usar as diagonais inteiras. O triângulo retângulo é feito com as metades.",
      conhecimento: "No losango, as diagonais são perpendiculares e se cortam ao meio.",
    },
    {
      topico: "Inscrição e circunscrição",
      subassunto: "Quadrado inscrito no círculo",
      dificuldade: 5,
      raciocinio: "A diagonal do quadrado é o diâmetro do círculo.",
      enunciado:
        "Um quadrado está inscrito em uma circunferência de raio 6 cm. A área do quadrado, em cm², é",
      alternativas: ["36", "24√2", "144", "36π", "72"],
      correta: 4,
      explicacao: "A diagonal vale 12 cm. Como d = L√2, L = 6√2 e a área é L² = 72 cm².",
      explicacaoErradas:
        "“36” toma o raio como lado. “144” toma o diâmetro como lado, o que seria o quadrado circunscrito. “24√2” é o perímetro. “36π” é a área do círculo.",
      pegadinha: "Tomar o diâmetro como lado. No quadrado inscrito, ele é a diagonal.",
      conhecimento: "Área do quadrado pela diagonal: d² ÷ 2.",
    },
    {
      topico: "Círculo",
      subassunto: "Coroa circular",
      dificuldade: 4,
      raciocinio: "Subtrair a área do círculo menor da área do maior.",
      enunciado:
        "A pista de uma rotatória é a região entre dois círculos com o mesmo centro, de raios 14 m e 10 m. A área da pista, em m², é",
      alternativas: ["16π", "296π", "96π", "8π", "48π"],
      correta: 2,
      explicacao: "π · 14² − π · 10² = 196π − 100π = 96π.",
      explicacaoErradas:
        "“16π” eleva ao quadrado a diferença dos raios. “296π” soma as áreas. “8π” é 2π vezes a diferença dos raios. “48π” soma os dois comprimentos.",
      pegadinha: "Fazer (14 − 10)². A subtração é das áreas, e não dos raios.",
      conhecimento: "Coroa circular: π(R² − r²).",
    },
  ],
};
