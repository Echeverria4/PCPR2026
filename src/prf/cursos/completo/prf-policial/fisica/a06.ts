import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "fisica-06",
  resumo: {
    ideia:
      "Dinâmica explica a causa do movimento. A força resultante muda a velocidade, e cada força sempre tem um par em outro corpo.",
    itens: [
      {
        termo: "1ª Lei (inércia)",
        faz: "Sem força resultante, o corpo mantém repouso ou velocidade constante.",
      },
      {
        termo: "2ª Lei",
        faz: "FR = m·a. A força resultante é a massa vezes a aceleração.",
      },
      {
        termo: "3ª Lei (ação e reação)",
        faz: "Forças de mesmo valor e sentidos opostos, em corpos diferentes.",
        pista: "Por estarem em corpos diferentes, elas não se anulam.",
      },
      {
        termo: "Peso",
        faz: "P = m·g. É a atração da Terra sobre o corpo.",
      },
      {
        termo: "Normal",
        faz: "Força de apoio, perpendicular à superfície.",
      },
      {
        termo: "Tração",
        faz: "Força transmitida por cabos e cordas.",
      },
      {
        termo: "Força elástica",
        faz: "F = k·x. Cresce com a deformação da mola.",
      },
      {
        termo: "Atrito",
        faz: "Fat = μ·N. Opõe-se ao deslizamento.",
      },
      {
        termo: "Resultante centrípeta",
        faz: "Fcp = m·v² ÷ R. Na curva plana, quem faz esse papel é o atrito.",
      },
    ],
    cuidado:
      "Peso e normal não são par de ação e reação: os dois agem no mesmo corpo.",
  },
  questoes: [
    {
      topico: "Leis de Newton",
      subassunto: "Inércia",
      dificuldade: 4,
      raciocinio: "O corpo tende a manter a velocidade que tinha.",
      enunciado: "Em uma freada brusca, o passageiro sem cinto é projetado para a frente. Isso ocorre porque",
      alternativas: [
        "o carro aplica nele uma força para a frente durante a freada",
        "o corpo tende a manter a velocidade que tinha antes da freada",
        "a reação da freada empurra o passageiro para a frente",
        "o peso do passageiro aumenta enquanto o carro desacelera",
        "a força do motor continua agindo sobre o passageiro por inércia",
      ],
      correta: 1,
      explicacao: "Sem força que o freie, o passageiro segue com a velocidade anterior. O carro é que para.",
      explicacaoErradas:
        "“aplica nele uma força para a frente” inventa uma força. “a reação da freada” confunde o par de forças, que age entre pneu e pista. “o peso do passageiro aumenta” não tem relação com a freada. “força do motor” trata inércia como força.",
      pegadinha: "Tratar a inércia como uma força.",
      conhecimento: "O cinto aplica a força que faltava para frear o passageiro.",
    },
    {
      topico: "Leis de Newton",
      subassunto: "Ação e reação",
      dificuldade: 5,
      raciocinio: "Mesma força, massas diferentes, acelerações diferentes.",
      enunciado: "Um carro leve colide com um caminhão pesado. Durante a colisão,",
      alternativas: [
        "o caminhão aplica força maior, pois tem massa maior que a do carro",
        "o carro aplica força maior, pois está mais rápido que o caminhão",
        "as forças têm mesmo valor, mas as acelerações são diferentes",
        "as forças têm mesmo valor e, por isso, as acelerações são iguais",
        "as forças se anulam, pois têm mesmo valor e sentidos opostos",
      ],
      correta: 2,
      explicacao: "Pela 3ª Lei, as forças são iguais. Pela 2ª Lei, a menor massa sofre a maior aceleração.",
      explicacaoErradas:
        "“o caminhão aplica força maior” e “o carro aplica força maior” contrariam a 3ª Lei. “as acelerações são iguais” ignora a diferença de massa. “as forças se anulam” esquece que elas agem em corpos diferentes.",
      pegadinha: "Achar que o corpo maior faz mais força.",
      conhecimento: "Forças de um par nunca se anulam, porque agem em corpos diferentes.",
    },
    {
      topico: "Leis de Newton",
      subassunto: "Força resultante",
      dificuldade: 4,
      raciocinio: "Calcule a resultante antes de dividir pela massa.",
      enunciado:
        "Um carro de 1.200 kg recebe 4.000 N do motor e sofre 1.000 N de resistências, na mesma direção. A aceleração é de",
      alternativas: ["3,3 m/s²", "4,2 m/s²", "0,4 m/s²", "0,25 m/s²", "2,5 m/s²"],
      correta: 4,
      explicacao: "Resultante: 4.000 − 1.000 = 3.000 N. Logo, 3.000 ÷ 1.200 = 2,5 m/s².",
      explicacaoErradas:
        "“3,3 m/s²” ignora as resistências. “4,2 m/s²” soma as forças. “0,4 m/s²” inverte a divisão. “0,25 m/s²” erra a casa decimal.",
      pegadinha: "Usar uma força isolada no lugar da resultante.",
      conhecimento: "A 2ª Lei usa sempre a força resultante.",
    },
    {
      topico: "Atrito",
      subassunto: "Frenagem",
      dificuldade: 5,
      raciocinio: "O atrito dá a desaceleração μ·g, e a massa se cancela.",
      enunciado:
        "Um carro a 72 km/h trava as rodas em pista plana com μ = 0,8 e g = 10 m/s². A distância até parar é de",
      alternativas: ["50 m", "20 m", "25 m", "324 m", "16 m"],
      correta: 2,
      explicacao: "a = 0,8 · 10 = 8 m/s². Com 20 m/s, ΔS = 400 ÷ 16 = 25 m.",
      explicacaoErradas:
        "“50 m” esquece o 2 de Torricelli. “20 m” usa a = 10 m/s², sem μ. “324 m” usa 72 sem converter. “16 m” multiplica μ pela velocidade.",
      pegadinha: "Procurar a massa, que não é dada porque se cancela.",
      conhecimento: "A distância de frenagem no atrito não depende da massa.",
    },
    {
      topico: "Resultante centrípeta",
      subassunto: "Curva plana",
      dificuldade: 5,
      raciocinio: "No limite, o atrito é a força centrípeta: v² = μ·g·R.",
      enunciado:
        "Em uma curva plana de raio 100 m, com μ = 0,4 e g = 10 m/s², a maior velocidade sem derrapar é de",
      alternativas: ["20 km/h", "114 km/h", "72 km/h", "144 km/h", "40 km/h"],
      correta: 2,
      explicacao: "v² = 0,4 · 10 · 100 = 400. Logo, v = 20 m/s, que são 72 km/h.",
      explicacaoErradas:
        "“20 km/h” não converte. “114 km/h” ignora μ. “144 km/h” usa v = μ·R. “40 km/h” usa μ·R sem converter.",
      pegadinha: "Parar em 20 e esquecer de converter.",
      conhecimento: "A massa também se cancela na curva.",
    },
    {
      topico: "Tração",
      subassunto: "Sistema de corpos",
      dificuldade: 5,
      raciocinio: "Ache a aceleração do conjunto e isole o reboque.",
      enunciado:
        "Uma viatura de 1.500 kg puxa um reboque de 500 kg com força total de 4.000 N, sem resistências. A tração no engate é de",
      alternativas: ["4.000 N", "3.000 N", "2.000 N", "1.000 N", "500 N"],
      correta: 3,
      explicacao: "a = 4.000 ÷ 2.000 = 2 m/s². No reboque: T = 500 · 2 = 1.000 N.",
      explicacaoErradas:
        "“4.000 N” usa a força total. “3.000 N” usa a massa da viatura. “2.000 N” repete a massa total. “500 N” repete a massa do reboque.",
      pegadinha: "Achar que o engate transmite toda a força.",
      conhecimento: "O engate só precisa acelerar o que vem atrás dele.",
    },
  ],
};
