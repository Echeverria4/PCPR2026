import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "fisica-09",
  resumo: {
    ideia:
      "Grandeza escalar precisa só de número e unidade. Grandeza vetorial precisa também de direção e sentido, por isso a soma depende do ângulo.",
    itens: [
      {
        termo: "Escalares",
        faz: "Massa, tempo, temperatura, energia e trabalho.",
      },
      {
        termo: "Vetoriais",
        faz: "Força, velocidade, aceleração, impulso e quantidade de movimento.",
      },
      {
        termo: "Resultante",
        faz: "Fica entre a diferença e a soma dos módulos.",
      },
      {
        termo: "Soma com ângulo",
        faz: "R² = a² + b² + 2·a·b·cos θ.",
        pista: "A 90°, vira Pitágoras.",
      },
      {
        termo: "Decomposição",
        faz: "Fx = F·cos θ e Fy = F·sen θ, com θ medido a partir do eixo x.",
      },
      {
        termo: "Análise dimensional",
        faz: "Reduz uma grandeza às unidades de base para conferir fórmulas.",
      },
      {
        termo: "Unidades de base do SI",
        faz: "Metro, quilograma, segundo, ampere, kelvin, mol e candela.",
      },
      {
        termo: "Unidades derivadas",
        faz: "Newton, joule e watt saem da combinação das unidades de base.",
      },
    ],
    cuidado:
      "Dois vetores só se somam direto quando têm a mesma direção. Com ângulo, use a fórmula.",
  },
  questoes: [
    {
      topico: "Grandezas",
      subassunto: "Escalares e vetoriais",
      dificuldade: 4,
      raciocinio: "Pergunte se a grandeza precisa de direção e sentido.",
      enunciado: "Todas as grandezas abaixo são vetoriais em",
      alternativas: [
        "força, velocidade e impulso",
        "energia, trabalho e potência",
        "massa, tempo e temperatura",
        "massa, força e energia cinética",
        "tempo, velocidade e temperatura",
      ],
      correta: 0,
      explicacao: "Força, velocidade e impulso exigem direção e sentido.",
      explicacaoErradas:
        "“massa, tempo e temperatura” e “energia, trabalho e potência” só têm escalares. “massa, força e energia cinética” e “tempo, velocidade e temperatura” misturam os dois tipos.",
      pegadinha: "Achar que trabalho é vetorial por vir de uma força.",
      conhecimento: "Trabalho e energia são escalares.",
    },
    {
      topico: "Soma de vetores",
      subassunto: "Limites da resultante",
      dificuldade: 5,
      raciocinio: "A resultante fica entre a diferença e a soma.",
      enunciado: "Duas forças, de 6 N e de 8 N, agem sobre um corpo. Um valor impossível para a resultante é",
      alternativas: ["2 N", "7 N", "10 N", "14 N", "15 N"],
      correta: 4,
      explicacao: "A resultante vai de 8 − 6 = 2 N até 8 + 6 = 14 N.",
      explicacaoErradas:
        "“2 N” é o caso de sentidos opostos. “14 N” é o caso de mesmo sentido. “10 N” é o caso de forças perpendiculares. “7 N” é um valor intermediário possível.",
      pegadinha: "Achar que os limites não são possíveis.",
      conhecimento: "Os limites valem para ângulos de 180° e de 0°.",
    },
    {
      topico: "Soma de vetores",
      subassunto: "Ângulo de 60°",
      dificuldade: 5,
      raciocinio: "Use a lei dos cossenos, com cos 60° = 0,5.",
      enunciado: "Dois cabos puxam um veículo com 100 N cada um, formando 60° entre si. Usando √3 ≈ 1,73, a resultante é de",
      alternativas: ["200 N", "100 N", "141 N", "173 N", "50 N"],
      correta: 3,
      explicacao: "R² = 10.000 + 10.000 + 2 · 10.000 · 0,5 = 30.000. Logo, R = 100√3 ≈ 173 N.",
      explicacaoErradas:
        "“200 N” soma direto. “100 N” vale para 120°. “141 N” vale para 90°. “50 N” é a metade de uma força.",
      pegadinha: "Somar direto vetores com ângulo.",
      conhecimento: "Forças iguais a 120° dão resultante igual a cada uma.",
    },
    {
      topico: "Decomposição",
      subassunto: "Componentes",
      dificuldade: 4,
      raciocinio: "Cosseno para o eixo junto do ângulo, seno para o outro.",
      enunciado:
        "Um cabo puxa com 200 N, a 30° da horizontal. Com cos 30° = 0,87 e sen 30° = 0,5, as componentes horizontal e vertical são, nessa ordem,",
      alternativas: ["100 N e 174 N", "200 N e 0 N", "174 N e 100 N", "116 N e 100 N", "174 N e 200 N"],
      correta: 2,
      explicacao: "Fx = 200 · 0,87 = 174 N. Fy = 200 · 0,5 = 100 N.",
      explicacaoErradas:
        "“100 N e 174 N” troca as componentes. “200 N e 0 N” ignora o ângulo. “116 N e 100 N” usa a tangente. “174 N e 200 N” mantém a força inteira na vertical.",
      pegadinha: "Trocar seno e cosseno.",
      conhecimento: "A componente junto do ângulo usa o cosseno.",
    },
    {
      topico: "Análise dimensional",
      subassunto: "Potência",
      dificuldade: 5,
      raciocinio: "Potência é força vezes velocidade.",
      enunciado: "Nas unidades de base do SI, o watt corresponde a",
      alternativas: ["kg·m/s²", "kg·m²/s²", "kg·m/s", "kg·m²/s³", "kg/s²"],
      correta: 3,
      explicacao: "Newton é kg·m/s². Vezes m/s, dá kg·m²/s³.",
      explicacaoErradas:
        "“kg·m/s²” é o newton. “kg·m²/s²” é o joule. “kg·m/s” é a quantidade de movimento. “kg/s²” não é nenhuma dessas unidades.",
      pegadinha: "Parar no joule e esquecer de dividir pelo tempo.",
      conhecimento: "Watt é joule por segundo.",
    },
    {
      topico: "Sistema Internacional",
      subassunto: "Unidades derivadas",
      dificuldade: 4,
      raciocinio: "Unidade derivada é combinação de unidades de base.",
      enunciado: "Entre as unidades abaixo, a que é derivada no SI é o",
      alternativas: ["metro", "quilograma", "segundo", "kelvin", "newton"],
      correta: 4,
      explicacao: "O newton vem de kg·m/s². As outras são unidades de base.",
      explicacaoErradas:
        "“metro”, “quilograma”, “segundo” e “kelvin” estão entre as sete unidades de base.",
      pegadinha: "Achar que o quilograma é derivado por causa do prefixo.",
      conhecimento: "O quilograma é a unidade de base de massa, mesmo com prefixo.",
    },
  ],
};
