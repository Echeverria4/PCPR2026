import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "fisica-05",
  resumo: {
    ideia:
      "Velocidade tem direção e sentido, então o resultado depende de como os movimentos se combinam. No movimento circular, a direção muda o tempo todo.",
    itens: [
      {
        termo: "Velocidade relativa",
        faz: "Mesmo sentido: subtraia. Sentidos opostos: some. Perpendiculares: use Pitágoras.",
      },
      {
        termo: "Período",
        faz: "T é o tempo de uma volta, em segundos.",
      },
      {
        termo: "Frequência",
        faz: "f é o número de voltas por segundo, em hertz. f = 1 ÷ T.",
      },
      {
        termo: "Velocidade angular",
        faz: "ω = 2π ÷ T = 2π·f.",
      },
      {
        termo: "Velocidade linear",
        faz: "v = ω·R.",
      },
      {
        termo: "Aceleração centrípeta",
        faz: "acp = v² ÷ R. Aponta para o centro da curva.",
      },
      {
        termo: "Polias com correia",
        faz: "Têm a mesma velocidade linear: f1·R1 = f2·R2.",
      },
      {
        termo: "Polias no mesmo eixo",
        faz: "Têm a mesma velocidade angular.",
      },
    ],
    cuidado:
      "No movimento circular uniforme, o valor da velocidade é constante, mas existe aceleração, porque a direção muda.",
  },
  questoes: [
    {
      topico: "Velocidade relativa",
      subassunto: "Ultrapassagem",
      dificuldade: 5,
      raciocinio: "Mesmo sentido: diferença das velocidades. Some os comprimentos.",
      enunciado:
        "Uma viatura de 5 m, a 100 km/h, ultrapassa um caminhão de 20 m, a 80 km/h, no mesmo sentido. Do início ao fim da ultrapassagem, passam cerca de",
      alternativas: ["1,25 s", "0,5 s", "3,6 s", "0,9 s", "4,5 s"],
      correta: 4,
      explicacao: "A diferença é 20 km/h, cerca de 5,6 m/s. Logo, 25 m ÷ 5,6 m/s ≈ 4,5 s.",
      explicacaoErradas:
        "“1,25 s” divide 25 por 20, sem converter. “0,5 s” soma as velocidades. “3,6 s” ignora o tamanho da viatura. “0,9 s” usa só o tamanho da viatura.",
      pegadinha: "Somar as velocidades em uma ultrapassagem.",
      conhecimento: "Quanto menor a diferença de velocidades, mais longa a ultrapassagem.",
    },
    {
      topico: "Velocidade relativa",
      subassunto: "Direções perpendiculares",
      dificuldade: 5,
      raciocinio: "Vetores perpendiculares: Pitágoras.",
      enunciado:
        "Em um cruzamento, um carro anda a 30 m/s para leste e outro a 40 m/s para o norte. A velocidade de um em relação ao outro tem módulo de",
      alternativas: ["70 m/s", "50 m/s", "10 m/s", "35 m/s", "25 m/s"],
      correta: 1,
      explicacao: "30² + 40² = 2.500. A raiz é 50 m/s.",
      explicacaoErradas:
        "“70 m/s” vale para sentidos opostos. “10 m/s” vale para o mesmo sentido. “35 m/s” é a média. “25 m/s” é a metade do resultado.",
      pegadinha: "Somar ou subtrair direto, sem olhar a direção.",
      conhecimento: "O trio 3, 4 e 5 aparece bastante em provas.",
    },
    {
      topico: "Movimento circular",
      subassunto: "Período e frequência",
      dificuldade: 4,
      raciocinio: "Divida rpm por 60 para chegar a hertz.",
      enunciado: "Uma roda gira a 600 rpm. A frequência e o período são, nessa ordem,",
      alternativas: ["600 Hz e 0,1 s", "10 Hz e 10 s", "10 Hz e 0,1 s", "60 Hz e 0,1 s", "600 Hz e 60 s"],
      correta: 2,
      explicacao: "600 ÷ 60 = 10 Hz. Logo, T = 1 ÷ 10 = 0,1 s.",
      explicacaoErradas:
        "“600 Hz e 0,1 s” não converte. “10 Hz e 10 s” usa f como período. “60 Hz e 0,1 s” divide por 10. “600 Hz e 60 s” mantém as unidades de origem.",
      pegadinha: "Ler rpm como hertz.",
      conhecimento: "Período e frequência são inversos.",
    },
    {
      topico: "Movimento circular",
      subassunto: "Velocidade linear",
      dificuldade: 5,
      raciocinio: "Use v = 2π·f·R.",
      enunciado: "Um pneu de raio 0,30 m gira a 10 Hz sem deslizar. Usando π = 3, a velocidade do veículo é de",
      alternativas: ["3 m/s", "9 m/s", "60 m/s", "18 m/s", "200 m/s"],
      correta: 3,
      explicacao: "v = 2 · 3 · 10 · 0,30 = 18 m/s.",
      explicacaoErradas:
        "“3 m/s” multiplica só f e R. “9 m/s” esquece o 2. “60 m/s” esquece o raio. “200 m/s” divide pelo raio.",
      pegadinha: "Esquecer o 2 de 2π.",
      conhecimento: "Em uma volta, a roda avança uma circunferência.",
    },
    {
      topico: "Movimento circular",
      subassunto: "Aceleração centrípeta",
      dificuldade: 5,
      raciocinio: "Velocidade entra ao quadrado, raio entra dividindo.",
      enunciado:
        "Um veículo faz uma curva. Em outra curva, de raio duas vezes maior, ele anda com o dobro da velocidade. A aceleração centrípeta fica",
      alternativas: ["2 vezes maior", "4 vezes maior", "8 vezes maior", "igual", "pela metade"],
      correta: 0,
      explicacao: "acp = v² ÷ R. Fica 2² ÷ 2 = 2 vezes maior.",
      explicacaoErradas:
        "“4 vezes maior” ignora o raio. “8 vezes maior” multiplica pelo raio. “igual” trata a velocidade sem o quadrado. “pela metade” olha só o raio.",
      pegadinha: "Esquecer o quadrado da velocidade.",
      conhecimento: "Curva fechada e velocidade alta exigem mais aderência.",
    },
    {
      topico: "Transmissão",
      subassunto: "Polias com correia",
      dificuldade: 5,
      raciocinio: "Com correia, f·R é igual nas duas polias.",
      enunciado:
        "Uma polia de raio 10 cm gira a 300 rpm e, por correia, move outra de raio 30 cm. A segunda polia gira a",
      alternativas: ["900 rpm", "300 rpm", "30 rpm", "100 rpm", "3.000 rpm"],
      correta: 3,
      explicacao: "300 · 10 = f · 30. Logo, f = 100 rpm.",
      explicacaoErradas:
        "“900 rpm” inverte a proporção. “300 rpm” confunde correia com mesmo eixo. “30 rpm” divide por 10. “3.000 rpm” multiplica por 10.",
      pegadinha: "Achar que a polia maior gira mais rápido.",
      conhecimento: "Polia maior gira menos vezes.",
    },
  ],
};
