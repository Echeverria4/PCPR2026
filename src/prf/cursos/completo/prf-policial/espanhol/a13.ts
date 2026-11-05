import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-13",
  resumo: {
    ideia:
      "O espanhol tem um só acento gráfico, a tilde. Ela depende da sílaba forte e da letra final, e também separa palavras iguais.",
    itens: [
      {
        termo: "Agudas",
        faz: "Forte na última. Têm tilde se terminam em n, s ou vogal: café, cortés, camión.",
      },
      {
        termo: "Llanas",
        faz: "Forte na penúltima. Têm tilde se não terminam em n, s ou vogal: fácil, árbol, álbum.",
      },
      {
        termo: "Esdrújulas",
        faz: "Forte na antepenúltima. Sempre têm tilde: médico, teléfono.",
      },
      {
        termo: "Sobresdrújulas",
        faz: "Forte antes da antepenúltima. Sempre têm tilde: cómpramelo.",
      },
      {
        termo: "Hiato",
        faz: "I ou u tônicos ao lado de outra vogal levam tilde, mesmo contra a regra: policía, país, día.",
      },
      {
        termo: "Tilde diacrítica",
        faz: "Separa palavras iguais: tú e tu, él e el, mí e mi, sí e si, sé e se, más e mas.",
      },
      {
        termo: "Perguntas",
        faz: "Qué, cuándo, dónde e cómo têm tilde também na pergunta indireta: no sé cuándo llega.",
      },
      {
        termo: "Monossílabos",
        faz: "Em regra, sem tilde: fue, dio, vio, ti.",
      },
    ],
    cuidado: "Examen não tem tilde, mas exámenes tem. Camión tem, mas camiones não.",
  },
  questoes: [
    {
      topico: "Classificação",
      subassunto: "Sílaba forte",
      dificuldade: 4,
      raciocinio: "Conte as sílabas a partir do fim.",
      enunciado: "Pela posição da sílaba forte, “cortés”, “fácil”, “médico” e “cómpramelo” são, nessa ordem,",
      alternativas: [
        "llana, aguda, esdrújula e sobresdrújula",
        "aguda, llana, esdrújula e sobresdrújula",
        "aguda, esdrújula, llana e sobresdrújula",
        "aguda, llana, sobresdrújula e esdrújula",
        "llana, llana, esdrújula e esdrújula, sem outra classe",
      ],
      correta: 1,
      explicacao: "Cor-TÉS é aguda, FÁ-cil é llana, MÉ-di-co é esdrújula e CÓM-pra-me-lo é sobresdrújula.",
      explicacaoErradas:
        "“llana, aguda” inverte as duas primeiras. “esdrújula, llana” inverte as do meio. “sobresdrújula e esdrújula” inverte as últimas. “sem outra classe” erra cortés e cómpramelo.",
      pegadinha: "Contar as sílabas a partir do início.",
      conhecimento: "Esdrújula é ela mesma uma esdrújula.",
    },
    {
      topico: "Agudas e llanas",
      subassunto: "Examen e jóvenes",
      dificuldade: 5,
      raciocinio: "No plural, a sílaba forte fica onde estava, mas a posição muda.",
      enunciado: "Sobre o acento no singular e no plural, segue a norma a frase",
      alternativas: [
        "El exámen de los jóvenes fue difícil.",
        "El examen de los jovenes fue difícil.",
        "El exámen de los jovenes fue difícil.",
        "El examen de los jóvenes fue difícil.",
        "El exámen de los jóvenes fue dificil.",
      ],
      correta: 3,
      explicacao: "Examen é llana terminada em n, sem tilde. Jóvenes é esdrújula e sempre leva. Difícil é llana terminada em l.",
      explicacaoErradas:
        "“exámen” coloca tilde em llana terminada em n. “jovenes” tira a tilde de esdrújula. “dificil” tira a tilde de llana terminada em l.",
      pegadinha: "Levar a tilde de exámenes para o singular.",
      conhecimento: "Joven e origen seguem o mesmo padrão: jóvenes, orígenes.",
    },
    {
      topico: "Tilde diacrítica",
      subassunto: "Él, el e mí",
      dificuldade: 4,
      raciocinio: "Pronome tem tilde. Artigo e possessivo, não.",
      enunciado: "Complete: “___ dijo que ___ coche es para ___.”",
      alternativas: ["Él, el, mí", "El, él, mi", "Él, él, mi", "El, el, mí", "Él, el, mi"],
      correta: 0,
      explicacao: "Él é pronome sujeito. El é artigo antes de coche. Mí é pronome depois de preposição.",
      explicacaoErradas:
        "“El” no início seria artigo sem substantivo. “él coche” põe pronome antes do nome. “para mi” usa o possessivo sem nome depois.",
      pegadinha: "Confundir mí, pronome, com mi, possessivo.",
      conhecimento: "Ti nunca leva tilde: para ti.",
    },
    {
      topico: "Tilde diacrítica",
      subassunto: "Cuándo e cuando",
      dificuldade: 5,
      raciocinio: "Há pergunta, mesmo sem ponto de interrogação?",
      enunciado: "Sobre a tilde em palavras como cuando e donde, segue a norma a frase",
      alternativas: [
        "No sé cuando llega, pero avisaré cuándo llegue al puesto.",
        "No sé cuando llega, pero avisaré cuando llegue.",
        "No sé cuándo llega, pero avisaré cuándo llegue.",
        "¿Cuando llega? No lo sé, pero avisaré cuando llegue.",
        "No sé cuándo llega, pero avisaré cuando llegue.",
      ],
      correta: 4,
      explicacao: "No sé cuándo é pergunta indireta e leva tilde. Cuando llegue indica tempo e não leva.",
      explicacaoErradas:
        "“No sé cuando” tira a tilde da pergunta indireta. “avisaré cuándo llegue” põe tilde onde não há pergunta. “¿Cuando llega?” tira a tilde da pergunta direta.",
      pegadinha: "Achar que a tilde depende do ponto de interrogação.",
      conhecimento: "O mesmo vale para qué, quién, dónde e cómo.",
    },
    {
      topico: "Hiato",
      subassunto: "Policía",
      dificuldade: 5,
      raciocinio: "Pela regra das llanas, não teria tilde.",
      enunciado: "“Policía” é palavra llana terminada em vogal e, mesmo assim, tem tilde porque",
      alternativas: [
        "toda palavra de origem estrangeira recebe tilde no espanhol",
        "a tilde marca o hiato da vogal fraca tônica",
        "as palavras llanas terminadas em vogal sempre têm tilde",
        "a tilde distingue policía de outra palavra igual, como em tú e tu",
        "a sílaba forte é a antepenúltima, como ocorre nas esdrújulas",
      ],
      correta: 1,
      explicacao: "O i é vogal fraca e é a sílaba forte. A tilde separa i e a em duas sílabas: po-li-cí-a.",
      explicacaoErradas:
        "“origem estrangeira” inventa a regra. “sempre têm tilde” inverte a regra das llanas. “distingue” é papel da tilde diacrítica. “antepenúltima” erra a sílaba forte.",
      pegadinha: "Aplicar a regra das llanas sem olhar o hiato.",
      conhecimento: "Día, país e baúl seguem o mesmo motivo.",
    },
    {
      topico: "Monossílabos",
      subassunto: "Fue, vio e dio",
      dificuldade: 4,
      raciocinio: "Palavras de uma sílaba não levam tilde, salvo a diacrítica.",
      enunciado: "Quanto à tilde dos verbos no passado, está correta a frase",
      alternativas: [
        "El agente fue al puesto, vio el camión y dio el aviso.",
        "El agente fué al puesto, vió el camión y dió el aviso.",
        "El agente fue al puesto, vió el camión y dió el aviso.",
        "El agente fué al puesto, vio el camión y dio el aviso.",
        "El agente fué al puesto, vió el camión y dio el aviso.",
      ],
      correta: 0,
      explicacao: "Fue, vio e dio são monossílabos e não têm tilde. Camión é aguda em n e tem.",
      explicacaoErradas:
        "“fué”, “vió” e “dió” aplicam a essas formas a tilde que a norma atual não aceita.",
      pegadinha: "Pensar no acento de formas como habló.",
      conhecimento: "Habló e salió têm duas sílabas ou mais, e por isso têm tilde.",
    },
  ],
};
