import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-09",
  resumo: {
    ideia:
      "Pronome troca ou acompanha o nome. Em espanhol, mudam o tratamento, a colocação e a dupla le e lo, que não funciona como no português.",
    itens: [
      {
        termo: "Tú e usted",
        faz: "Tú é informal. Usted é formal e leva o verbo na terceira pessoa: ¿Tiene usted…?",
      },
      {
        termo: "Vosotros e ustedes",
        faz: "Vosotros é o informal da Espanha. Na América, ustedes vale para todos os casos.",
      },
      {
        termo: "Lo, la, los, las",
        faz: "Substituem o objeto direto: lo vi.",
      },
      {
        termo: "Le, les",
        faz: "Substituem o objeto indireto: le di la multa.",
      },
      {
        termo: "Se lo",
        faz: "Le e les viram se antes de lo e la: se la di.",
      },
      {
        termo: "Colocação",
        faz: "Antes do verbo conjugado: lo vi. Depois, junto, no infinitivo, no gerúndio e no imperativo afirmativo: dámelo.",
      },
      {
        termo: "Possessivos",
        faz: "Antes do nome: mi, tu, su. Depois do nome ou sozinho: mío, tuyo, suyo.",
      },
      {
        termo: "Corpo e roupa",
        faz: "Usa-se artigo, e não possessivo: se quitó el casco.",
      },
      {
        termo: "Neutros",
        faz: "Esto, eso e aquello não acompanham substantivo.",
      },
    ],
    cuidado: "Su pode ser dele, dela, seu ou deles. O contexto decide quem é o dono.",
  },
  questoes: [
    {
      topico: "Tratamento",
      subassunto: "Usted",
      dificuldade: 4,
      raciocinio: "Usted conversa com a terceira pessoa.",
      enunciado: "Em abordagem formal, o agente pergunta ao motorista se ele trouxe a carteira. Segue o tratamento correto a frase",
      alternativas: [
        "¿Trajiste usted su licencia de conducir?",
        "¿Trajo tú tu licencia de conducir?",
        "¿Trajo usted su licencia de conducir?",
        "¿Trajo usted tu licencia de conducir?",
        "¿Trajiste tú su licencia de conducir, señor conductor?",
      ],
      correta: 2,
      explicacao: "Usted pede verbo na terceira pessoa, trajo, e possessivo su.",
      explicacaoErradas:
        "“Trajiste usted” mistura segunda e terceira pessoa. “Trajo tú” faz o mesmo ao contrário. “tu licencia” quebra o tratamento formal. “Trajiste tú” é informal.",
      pegadinha: "Trocar usted por tu no meio da frase.",
      conhecimento: "No plural formal, a forma é ustedes.",
    },
    {
      topico: "Objetos",
      subassunto: "Se la",
      dificuldade: 5,
      raciocinio: "Le não fica antes de la.",
      enunciado: "Troque por pronomes os dois objetos de “Di la multa al conductor.” O resultado correto é",
      alternativas: ["Le la di.", "La le di.", "Se le di.", "Lo se di.", "Se la di."],
      correta: 4,
      explicacao: "La multa vira la, e al conductor vira le. Antes de la, le vira se: se la di.",
      explicacaoErradas:
        "“Le la” junta formas que não ficam lado a lado. “La le” inverte a ordem. “Se le” perde o objeto direto. “Lo se” erra o gênero e a ordem.",
      pegadinha: "Manter le antes de la.",
      conhecimento: "O objeto indireto vem antes do direto.",
    },
    {
      topico: "Colocação",
      subassunto: "Imperativo e negação",
      dificuldade: 5,
      raciocinio: "Afirmativo: junto e depois. Negativo: antes.",
      enunciado: "Sobre a colocação dos pronomes, segue a norma a frase",
      alternativas: [
        "Dámelo ahora y no lo pierdas.",
        "Dame lo ahora y no pierdaslo.",
        "Lo dame ahora y no lo pierdas.",
        "Dámelo ahora y no pierdaslo.",
        "Me lo da ahora y pierdaslo no, por favor.",
      ],
      correta: 0,
      explicacao: "No imperativo afirmativo, o pronome vem depois e colado: dámelo. Na negação, vem antes do verbo: no lo pierdas.",
      explicacaoErradas:
        "“Dame lo” separa o que deve vir junto. “pierdaslo” cola o pronome em ordem negativa. “Lo dame” põe o pronome antes do imperativo afirmativo.",
      pegadinha: "Colar o pronome em ordem negativa.",
      conhecimento: "O acento de dámelo mantém a sílaba forte.",
    },
    {
      topico: "Possessivos",
      subassunto: "Átonos e tônicos",
      dificuldade: 4,
      raciocinio: "Antes do nome ou no lugar do nome?",
      enunciado: "Complete: “___ coche está aquí; el ___ está en el taller.”",
      alternativas: ["Mío, tu", "Mi, tuyo", "Mi, tu", "Mío, tuyo", "El mi, tuyo"],
      correta: 1,
      explicacao: "Antes do nome, a forma é mi. Com artigo e sem nome, a forma é el tuyo.",
      explicacaoErradas:
        "“Mío” não vem antes do nome. “tu” exige um nome depois. “El mi” põe artigo antes do possessivo.",
      pegadinha: "Usar a forma curta no lugar do nome.",
      conhecimento: "Taller é a oficina mecânica.",
    },
    {
      topico: "Corpo e roupa",
      subassunto: "Sem possessivo",
      dificuldade: 5,
      raciocinio: "O se já mostra de quem é.",
      enunciado: "Em “El motociclista se quitó el casco y se limpió la cara.”, a ausência de possessivo indica que",
      alternativas: [
        "o capacete foi tirado de outro motociclista da estrada",
        "o motociclista limpou o rosto de um colega de viagem",
        "a frase está errada, pois faltou su antes de casco e de cara",
        "o capacete e o rosto são do próprio motociclista",
        "o capacete foi retirado à força por outra pessoa",
      ],
      correta: 3,
      explicacao: "Com partes do corpo e roupas, o espanhol usa artigo. O se indica que a ação recai sobre a própria pessoa.",
      explicacaoErradas:
        "“outro motociclista”, “um colega” e “outra pessoa” ignoram o se. “faltou su” aplica o hábito do português.",
      pegadinha: "Sentir falta do possessivo.",
      conhecimento: "Me duele la cabeza é a forma normal.",
    },
    {
      topico: "Possessivos",
      subassunto: "Su",
      dificuldade: 5,
      raciocinio: "Su serve para vários donos.",
      enunciado: "Em “El agente habló con la conductora y revisó su coche.”, a palavra “su”",
      alternativas: [
        "só pode indicar o carro da conductora, por ser feminina",
        "só pode indicar o carro do agente, por ser o sujeito",
        "pode ser o carro dele ou o dela, e a frase não define",
        "indica que o carro é de um terceiro, nunca dos dois citados",
        "indica o carro da empresa, pois su só serve para coisas públicas",
      ],
      correta: 2,
      explicacao: "Su serve para dele, dela, seu e deles, e não muda com o dono. Para evitar a dúvida, diz-se el coche de ella.",
      explicacaoErradas:
        "“só pode” cria certeza que a frase não dá. “nunca dos dois” exclui o que é possível. “coisas públicas” inventa a regra.",
      pegadinha: "Fazer su concordar com o dono.",
      conhecimento: "Su concorda com o que é possuído: sus coches.",
    },
    {
      topico: "Demonstrativos",
      subassunto: "Neutros",
      dificuldade: 4,
      raciocinio: "O neutro retoma uma ideia, e não um nome.",
      enunciado: "Complete, sabendo que a segunda lacuna retoma o fato inteiro: “___ camión es nuevo. ___ no cambia el problema.”",
      alternativas: ["Este, Ese", "Esto, Eso", "Esto, Ese", "Eso, Este", "Este, Eso"],
      correta: 4,
      explicacao: "Este acompanha o substantivo camión. Eso é neutro e retoma o fato de o caminhão ser novo.",
      explicacaoErradas:
        "“Esto” e “Eso” não vêm antes de substantivo. “Ese” pede um nome masculino, e não um fato.",
      pegadinha: "Usar esto antes de substantivo.",
      conhecimento: "Aquel indica o que está longe de quem fala e de quem ouve.",
    },
  ],
};
