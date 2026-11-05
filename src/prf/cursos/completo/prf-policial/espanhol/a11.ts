import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-11",
  resumo: {
    ideia:
      "Número por extenso cai em leitura, e a maior armadilha é o billón, que não é o bilhão brasileiro. O resto é treino de forma e de concordância.",
    itens: [
      {
        termo: "De 16 a 29",
        faz: "Escrevem-se juntos: dieciséis, veintidós.",
      },
      {
        termo: "Com y",
        faz: "A partir de 31, o y fica só entre dezena e unidade: treinta y dos, ciento treinta y dos.",
      },
      {
        termo: "Cien e ciento",
        faz: "Cien vem sozinho, antes de nome e antes de mil: cien camiones, cien mil. Ciento vem antes de outro número: ciento dos.",
      },
      {
        termo: "Uno",
        faz: "Vira un antes de masculino: veintiún camiones, treinta y un agentes.",
      },
      {
        termo: "Centenas",
        faz: "Concordam em gênero: doscientas motos. Irregulares: quinientos, setecientos, novecientos.",
      },
      {
        termo: "Escala longa",
        faz: "Mil millones é o nosso bilhão. Un billón é um milhão de milhões, o nosso trilhão.",
      },
      {
        termo: "Ordinais",
        faz: "Primero, segundo, tercero, cuarto, quinto, sexto, séptimo, octavo, noveno, décimo.",
      },
      {
        termo: "Frações",
        faz: "Medio, la mitad, un tercio, un cuarto, dos tercios.",
      },
      {
        termo: "Multiplicativos",
        faz: "Doble, triple, cuádruple, quíntuple.",
      },
    ],
    cuidado: "Mil não varia e não leva un antes: mil camiones, dos mil camiones.",
  },
  questoes: [
    {
      topico: "Escala longa",
      subassunto: "Mil millones e billón",
      dificuldade: 5,
      raciocinio: "Billón tem doze zeros.",
      enunciado:
        "Texto: “El país destinó mil millones de dólares a las carreteras, y su deuda total ya llega a un billón.” No uso do Brasil, os valores são, nessa ordem,",
      alternativas: [
        "1 milhão e 1 bilhão",
        "1 bilhão e 1 trilhão",
        "1 trilhão e 1 bilhão",
        "1 bilhão e 1 bilhão, com a mesma conta",
        "1 milhão e 1 trilhão de dólares",
      ],
      correta: 1,
      explicacao: "Mil millones é 10 elevado a 9, o nosso bilhão. Billón é 10 elevado a 12, o nosso trilhão.",
      explicacaoErradas:
        "“1 milhão” ignora o mil antes de millones. “1 trilhão e 1 bilhão” inverte os valores. “com a mesma conta” traduz billón pela aparência.",
      pegadinha: "Traduzir billón por bilhão.",
      conhecimento: "Millardo também é mil millones, mas é pouco usado.",
    },
    {
      topico: "Cardinais",
      subassunto: "Uso do y",
      dificuldade: 4,
      raciocinio: "O y fica só entre dezena e unidade.",
      enunciado: "A forma correta de escrever 132 camiones é",
      alternativas: [
        "ciento y treinta y dos camiones",
        "cien treinta y dos camiones",
        "ciento treintaidós camiones",
        "cien y treinta dos camiones",
        "ciento treinta y dos camiones",
      ],
      correta: 4,
      explicacao: "Antes de outro número, a forma é ciento. O y fica só entre treinta e dos.",
      explicacaoErradas:
        "“ciento y treinta” põe y depois da centena, como no português. “cien treinta” usa a forma curta antes de número. “treintaidós” junta o que fica separado.",
      pegadinha: "Levar o “cento e trinta” do português.",
      conhecimento: "Até 29, a escrita é junta: veintidós.",
    },
    {
      topico: "Cardinais",
      subassunto: "Cien e ciento",
      dificuldade: 5,
      raciocinio: "Olhe o que vem depois de cada lacuna.",
      enunciado: "Complete: “___ camiones, ___ cinco motos y ___ mil litros.”",
      alternativas: [
        "Ciento, cien, ciento",
        "Cien, cien, cien",
        "Cien, ciento, cien",
        "Ciento, ciento, cien",
        "Cien, ciento, ciento",
      ],
      correta: 2,
      explicacao: "Cien vem antes de nome e antes de mil. Ciento vem antes de número menor: ciento cinco.",
      explicacaoErradas:
        "“Ciento” antes de camiones não encurta. “cien cinco” encurta antes de número. “ciento mil” não encurta antes de mil.",
      pegadinha: "Achar que cien vale em qualquer caso.",
      conhecimento: "Cien mil vale 100.000.",
    },
    {
      topico: "Cardinais",
      subassunto: "Veintiún e centenas",
      dificuldade: 5,
      raciocinio: "Um número encurta, e o outro concorda.",
      enunciado: "A forma correta de escrever 21 camiones y 500 motos é",
      alternativas: [
        "veintiuno camiones y quinientas motos",
        "veintiún camiones y cincocientas motos",
        "veintiuno camiones y cincocientas motos",
        "veintiún camiones y quinientas motos",
        "veinte y uno camiones y quinientos motos",
      ],
      correta: 3,
      explicacao: "Veintiuno vira veintiún antes de masculino, com acento. Quinientas é irregular e concorda com motos.",
      explicacaoErradas:
        "“veintiuno” não encurta. “cincocientas” regulariza a centena. “veinte y uno” separa o que é junto, e “quinientos” erra o gênero.",
      pegadinha: "Regularizar quinientos.",
      conhecimento: "Veintiuna é a forma feminina: veintiuna motos.",
    },
    {
      topico: "Ordinais",
      subassunto: "Séptimo e noveno",
      dificuldade: 4,
      raciocinio: "O espanhol tem forma própria para 9.º.",
      enunciado: "A tradução correta de “A sétima patrulha chegou em nono lugar.” é",
      alternativas: [
        "La séptima patrulla llegó en noveno lugar.",
        "La setena patrulla llegó en nono lugar.",
        "La sétima patrulla llegó en nono lugar.",
        "La séptima patrulla llegó en nono lugar.",
        "La sétima patrulla llegó en novena lugar, según el informe.",
      ],
      correta: 0,
      explicacao: "As formas são séptima, com p, e noveno.",
      explicacaoErradas:
        "“setena” e “sétima” trazem formas erradas. “nono” copia o português. “novena lugar” erra o gênero.",
      pegadinha: "Copiar nono.",
      conhecimento: "Depois de décimo, o uso comum prefere o cardinal: siglo veintiuno.",
    },
    {
      topico: "Frações",
      subassunto: "Cálculo em texto",
      dificuldade: 5,
      raciocinio: "Tire o primeiro grupo antes de calcular o segundo.",
      enunciado:
        "Texto: “Pasaron ciento veinte camiones. Un cuarto fue revisado, y dos tercios de los demás siguieron sin parar.” Seguiram sem parar",
      alternativas: ["30", "40", "60", "80", "90"],
      correta: 2,
      explicacao: "Um quarto de 120 é 30. Sobram 90, e dois terços de 90 são 60.",
      explicacaoErradas:
        "“30” é o grupo revisado. “40” é um terço do total. “80” aplica dois terços ao total. “90” é o que sobrou depois da revisão.",
      pegadinha: "Calcular dois terços sobre o total, ignorando los demás.",
      conhecimento: "Los demás é “os outros”.",
    },
    {
      topico: "Multiplicativos",
      subassunto: "Doble",
      dificuldade: 4,
      raciocinio: "Primeiro dobre, depois some.",
      enunciado:
        "Texto: “El límite del tramo es de veinte toneladas, y el camión llevaba el doble más cinco.” O caminhão levava, em toneladas,",
      alternativas: ["25", "40", "45", "60", "65"],
      correta: 2,
      explicacao: "O dobro de 20 é 40. Com mais 5, são 45.",
      explicacaoErradas:
        "“25” ignora o dobro. “40” ignora os cinco a mais. “60” e “65” usam o triplo.",
      pegadinha: "Ler doble como duas toneladas a mais.",
      conhecimento: "Doble, triple e cuádruple são invariáveis em gênero.",
    },
  ],
};
