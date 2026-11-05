import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "fisica-08",
  resumo: {
    ideia:
      "Quantidade de movimento mede o “embalo” de um corpo. Em sistema isolado, ela se conserva, mesmo que a energia se perca.",
    itens: [
      {
        termo: "Impulso",
        faz: "I = F·Δt. É uma grandeza vetorial.",
      },
      {
        termo: "Quantidade de movimento",
        faz: "Q = m·v. Também é vetorial.",
      },
      {
        termo: "Teorema do impulso",
        faz: "O impulso da resultante é igual à variação de Q.",
      },
      {
        termo: "Sistema isolado",
        faz: "Sem resultante externa, a soma de Q antes é igual à soma depois.",
      },
      {
        termo: "Coeficiente de restituição",
        faz: "e = velocidade relativa depois ÷ velocidade relativa antes.",
      },
      {
        termo: "Elástica",
        faz: "e = 1. A energia cinética se conserva.",
      },
      {
        termo: "Parcialmente elástica",
        faz: "e entre 0 e 1. Parte da energia cinética se perde.",
      },
      {
        termo: "Inelástica",
        faz: "e = 0. Os corpos seguem juntos, com a maior perda de energia.",
      },
      {
        termo: "Centro de massa",
        faz: "É a média das posições, com peso dado pelas massas.",
      },
    ],
    cuidado:
      "Colisão conserva a quantidade de movimento, mas não necessariamente a energia cinética.",
  },
  questoes: [
    {
      topico: "Impulso",
      subassunto: "Airbag",
      dificuldade: 5,
      raciocinio: "Mesma variação de Q com mais tempo: força menor.",
      enunciado: "O airbag reduz lesões porque, durante a parada do corpo,",
      alternativas: [
        "aumenta o tempo de parada e, assim, reduz a força média sobre o corpo",
        "reduz a variação da quantidade de movimento sofrida pelo corpo na batida",
        "reduz a massa do corpo que está em contato com a bolsa inflada",
        "elimina o impulso, pois a bolsa absorve toda a força da colisão",
        "aumenta a velocidade final do corpo depois do fim da colisão",
      ],
      correta: 0,
      explicacao: "A variação de Q é a mesma. Como F·Δt é fixo, mais tempo significa menos força.",
      explicacaoErradas:
        "“reduz a variação” erra: o corpo para do mesmo jeito. “reduz a massa” não tem sentido físico. “elimina o impulso” é impossível, pois o corpo para. “aumenta a velocidade final” contraria a parada.",
      pegadinha: "Achar que o airbag muda a variação de Q.",
      conhecimento: "A zona de deformação do carro funciona pelo mesmo princípio.",
    },
    {
      topico: "Impulso",
      subassunto: "Força média",
      dificuldade: 4,
      raciocinio: "F = ΔQ ÷ Δt.",
      enunciado: "Um carro de 1.000 kg a 20 m/s para em 0,1 s ao bater em um muro. A força média sobre ele é de",
      alternativas: ["200.000 N", "2.000 N", "2.000.000 N", "100.000 N", "20.000 N"],
      correta: 0,
      explicacao: "ΔQ = 1.000 · 20 = 20.000 kg·m/s. Logo, 20.000 ÷ 0,1 = 200.000 N.",
      explicacaoErradas:
        "“20.000 N” não divide pelo tempo. “2.000 N” multiplica por 0,1. “2.000.000 N” divide a energia cinética pelo tempo. “100.000 N” usa metade do resultado.",
      pegadinha: "Multiplicar por 0,1 em vez de dividir.",
      conhecimento: "Dividir por 0,1 é multiplicar por 10.",
    },
    {
      topico: "Colisões",
      subassunto: "Corpos unidos",
      dificuldade: 5,
      raciocinio: "Conserve Q e depois compare a energia cinética.",
      enunciado:
        "Um carro de 1.000 kg a 20 m/s bate em um veículo de 3.000 kg parado, e eles seguem unidos. A velocidade depois da colisão e a energia cinética perdida são",
      alternativas: ["5 m/s e 0 kJ", "6,7 m/s e 150 kJ", "10 m/s e 50 kJ", "5 m/s e 150 kJ", "20 m/s e 0 kJ"],
      correta: 3,
      explicacao:
        "Q: 20.000 ÷ 4.000 = 5 m/s. Energia antes: 200 kJ. Depois: 4.000 · 25 ÷ 2 = 50 kJ. Perda: 150 kJ.",
      explicacaoErradas:
        "“5 m/s e 0 kJ” supõe colisão elástica. “6,7 m/s e 150 kJ” divide por 3.000. “10 m/s e 50 kJ” divide por 2.000. “20 m/s e 0 kJ” ignora a massa parada.",
      pegadinha: "Achar que a energia cinética também se conserva.",
      conhecimento: "A energia perdida vai para deformação e calor.",
    },
    {
      topico: "Colisões",
      subassunto: "Coeficiente de restituição",
      dificuldade: 5,
      raciocinio: "Velocidade relativa depois dividida pela de antes.",
      enunciado:
        "Em uma colisão frontal, a velocidade relativa entre dois corpos é de 10 m/s antes e 4 m/s depois. A colisão é",
      alternativas: [
        "elástica, com e = 0,4",
        "inelástica, com e = 0,4",
        "parcialmente elástica, com e = 2,5",
        "parcialmente elástica, com e = 0,4",
        "elástica, com e = 1, pois nada se perdeu no choque",
      ],
      correta: 3,
      explicacao: "e = 4 ÷ 10 = 0,4, que fica entre 0 e 1.",
      explicacaoErradas:
        "“elástica, com e = 0,4” erra a classificação, pois elástica é e = 1. “inelástica” exige e = 0. “com e = 2,5” inverte a divisão. “elástica, com e = 1” ignora a perda de velocidade relativa.",
      pegadinha: "Inverter a razão e obter e maior que 1.",
      conhecimento: "Em colisão comum, e fica entre 0 e 1.",
    },
    {
      topico: "Sistema isolado",
      subassunto: "Recuo",
      dificuldade: 5,
      raciocinio: "Q começa em zero. Converta a massa do projétil para kg.",
      enunciado: "Um fuzil de 4 kg dispara um projétil de 10 g a 800 m/s. A velocidade de recuo do fuzil é de",
      alternativas: ["8 m/s", "2 m/s", "200 m/s", "2.000 m/s", "0,5 m/s"],
      correta: 1,
      explicacao: "Q do projétil: 0,01 · 800 = 8 kg·m/s. Logo, v = 8 ÷ 4 = 2 m/s.",
      explicacaoErradas:
        "“8 m/s” para na quantidade de movimento. “200 m/s” divide 800 por 4. “2.000 m/s” usa 10 no lugar de 0,01 kg. “0,5 m/s” inverte a divisão.",
      pegadinha: "Usar a massa em gramas.",
      conhecimento: "O conjunto parte do repouso, então a soma de Q é zero.",
    },
    {
      topico: "Centro de massa",
      subassunto: "Posição",
      dificuldade: 4,
      raciocinio: "Faça a média com peso das massas.",
      enunciado: "Duas massas, de 2 kg em x = 0 e de 6 kg em x = 8 m, estão em uma reta. O centro de massa está em",
      alternativas: ["x = 4 m", "x = 2 m", "x = 6 m", "x = 8 m", "x = 24 m"],
      correta: 2,
      explicacao: "(2 · 0 + 6 · 8) ÷ 8 = 48 ÷ 8 = 6 m.",
      explicacaoErradas:
        "“x = 4 m” é o ponto médio. “x = 2 m” mede a partir da outra massa. “x = 8 m” repete a posição da massa maior. “x = 24 m” divide 48 por 2.",
      pegadinha: "Usar o ponto médio com massas diferentes.",
      conhecimento: "O centro de massa fica mais perto da massa maior.",
    },
  ],
};
