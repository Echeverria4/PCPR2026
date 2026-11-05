import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-10",
  resumo: {
    ideia:
      "Verbo muda com pessoa, tempo e modo. Para ler bem, basta reconhecer o tempo, separar fato de hipótese e conhecer as perífrases mais comuns.",
    itens: [
      {
        termo: "Formas nominais",
        faz: "Infinitivo em -ar, -er, -ir. Gerúndio em -ando, -iendo. Particípio em -ado, -ido.",
      },
      {
        termo: "Pretérito perfecto",
        faz: "He + particípio. Liga o fato ao presente: hoy he visto. É comum na Espanha.",
      },
      {
        termo: "Pretérito indefinido",
        faz: "Fato acabado: ayer vi. Na América, ocupa boa parte do lugar do perfecto.",
      },
      {
        termo: "Haber",
        faz: "É o auxiliar dos tempos compostos: había visto. Tener não faz esse papel.",
      },
      {
        termo: "Particípios irregulares",
        faz: "Escrito, visto, puesto, hecho, dicho, vuelto, abierto, roto, muerto.",
      },
      {
        termo: "Subjuntivo",
        faz: "Desejo, dúvida, hipótese e futuro depois de cuando: cuando llegues.",
      },
      {
        termo: "Si + imperfecto",
        faz: "Si tuviera, compraría. Depois de si, não se usa condicional.",
      },
      {
        termo: "Perífrases",
        faz: "Ir a é futuro. Acabar de é passado recente. Volver a é de novo. Dejar de é parar. Tener que é obrigação.",
      },
      {
        termo: "Imperativo negativo",
        faz: "Usa o subjuntivo: no pares.",
      },
    ],
    cuidado: "O futuro do subjuntivo, como llegare, quase só aparece em leis. No dia a dia, “quando chegar” vira cuando llegue.",
  },
  questoes: [
    {
      topico: "Subjuntivo",
      subassunto: "Cuando + futuro",
      dificuldade: 5,
      raciocinio: "O “quando chegar” do português não passa para o espanhol.",
      enunciado: "A tradução correta de “Quando chegar ao posto, avise o chefe.” é",
      alternativas: [
        "Cuando llegar al puesto, avisa al jefe.",
        "Cuando llegarás al puesto, avisa al jefe.",
        "Cuando llegues al puesto, avisa al jefe.",
        "Cuando llegas al puesto, avisarás el jefe.",
        "Cuando llegaría al puesto, avisa a lo jefe de la base.",
      ],
      correta: 2,
      explicacao: "Com ideia de futuro, cuando pede presente do subjuntivo: cuando llegues.",
      explicacaoErradas:
        "“llegar” copia o futuro do subjuntivo do português. “llegarás” usa futuro depois de cuando. “llegas” indica hábito, e “el jefe” perde o a de pessoa. “llegaría” usa condicional.",
      pegadinha: "Confundir o infinitivo com o futuro do subjuntivo.",
      conhecimento: "O mesmo vale para mientras e hasta que: hasta que llegues.",
    },
    {
      topico: "Tempos compostos",
      subassunto: "Haber e tener",
      dificuldade: 4,
      raciocinio: "O “tinham” dos tempos compostos vira haber.",
      enunciado: "A tradução correta de “Os agentes tinham visto o caminhão.” é",
      alternativas: [
        "Los agentes tenían visto el camión.",
        "Los agentes habían visto el camión.",
        "Los agentes habían vistos el camión.",
        "Los agentes tenían vistos al camión.",
        "Los agentes han tenido visto el camión.",
      ],
      correta: 1,
      explicacao: "Haber é o auxiliar. O particípio não varia: había, habían visto.",
      explicacaoErradas:
        "“tenían visto” copia o auxiliar do português. “vistos” faz o particípio concordar. “han tenido visto” soma dois auxiliares.",
      pegadinha: "Levar o ter para o espanhol.",
      conhecimento: "Nada separa haber do particípio: ha llegado ya.",
    },
    {
      topico: "Particípios",
      subassunto: "Formas irregulares",
      dificuldade: 4,
      raciocinio: "Três verbos, três formas próprias.",
      enunciado: "Quanto aos particípios, está correta a frase",
      alternativas: [
        "He escribido el informe, he ponido la fecha y he vuelto.",
        "He escrito el informe, he ponido la fecha y he volvido.",
        "He escribido el informe, he puesto la fecha y he volvido.",
        "He escrito el informe, he puesto la fecha y he volvido.",
        "He escrito el informe, he puesto la fecha y he vuelto.",
      ],
      correta: 4,
      explicacao: "Escribir, poner e volver têm particípios irregulares: escrito, puesto, vuelto.",
      explicacaoErradas:
        "“escribido”, “ponido” e “volvido” aplicam a regra dos verbos regulares a verbos que fogem dela.",
      pegadinha: "Olhar só para a primeira forma.",
      conhecimento: "Hacer vira hecho, e decir vira dicho.",
    },
    {
      topico: "Subjuntivo",
      subassunto: "Si + imperfecto",
      dificuldade: 5,
      raciocinio: "Depois de si, nada de condicional.",
      enunciado: "A tradução correta de “Se eu tivesse tempo, revisaria o caminhão.” é",
      alternativas: [
        "Si tuviera tiempo, revisaría el camión.",
        "Si tendría tiempo, revisaría el camión.",
        "Si tenía tiempo, revisaré el camión.",
        "Si tengo tiempo, revisaría el camión.",
        "Si tendría tiempo, revisaré el camión de la empresa.",
      ],
      correta: 0,
      explicacao: "A hipótese usa si + imperfecto de subjuntivo. A consequência usa condicional.",
      explicacaoErradas:
        "“Si tendría” põe condicional depois de si. “tenía” e “revisaré” não formam hipótese. “Si tengo” mistura condição real com condicional.",
      pegadinha: "Usar condicional nas duas partes.",
      conhecimento: "Hubiera e tuviera seguem a mesma forma.",
    },
    {
      topico: "Perífrases",
      subassunto: "Acabar de e volver a",
      dificuldade: 5,
      raciocinio: "Nenhum dos dois verbos está no sentido comum.",
      enunciado: "Em “El camión acaba de salir y el agente vuelve a revisar la lista.”, entende-se que",
      alternativas: [
        "o caminhão terminou a saída, e o agente retornou com a lista",
        "o caminhão vai sair, e o agente volta ao posto para revisar a lista",
        "o caminhão não saiu, e o agente parou de revisar a lista",
        "o caminhão saiu há pouco, e o agente revisa a lista de novo",
        "o caminhão saiu há muito tempo, e o agente revisa a lista pela primeira vez",
      ],
      correta: 3,
      explicacao: "Acabar de + infinitivo é passado recente. Volver a + infinitivo é repetição.",
      explicacaoErradas:
        "“terminou a saída” e “retornou” leem os verbos ao pé da letra. “vai sair” seria ir a. “parou de revisar” seria dejar de. “há muito tempo” contraria acaba de.",
      pegadinha: "Ler volver como voltar a um lugar.",
      conhecimento: "Seguir + gerúndio mostra continuação: sigue lloviendo.",
    },
    {
      topico: "Imperativo",
      subassunto: "Usted",
      dificuldade: 4,
      raciocinio: "Com usted, a forma é a do subjuntivo.",
      enunciado: "Em ordem a motorista tratado por “usted”, segue a norma a frase",
      alternativas: [
        "Para el coche y no bajas.",
        "Pare el coche y no bajes.",
        "Para el coche y no baje de él.",
        "Parás el coche y no baja de él, señor.",
        "Pare el coche y no baje.",
      ],
      correta: 4,
      explicacao: "Para usted, afirmativo e negativo usam a forma do subjuntivo: pare, no baje.",
      explicacaoErradas:
        "“Para” é a forma de tú. “no bajes” e “no bajas” pertencem a tú ou ao indicativo. “Parás” e “baja” não formam ordem para usted.",
      pegadinha: "Misturar tú e usted na mesma frase.",
      conhecimento: "Com tú, fica para el coche, e no negativo, no pares.",
    },
    {
      topico: "Pretéritos",
      subassunto: "Perfecto e indefinido",
      dificuldade: 5,
      raciocinio: "Hoy ainda não acabou. Ayer, sim.",
      enunciado: "No uso da Espanha, complete: “Hoy ___ dos multas, pero ayer ___ cinco.”",
      alternativas: ["he puesto, puse", "puse, he puesto", "pongo, he puesto", "he puesto, he puesto", "puesto, he puse"],
      correta: 0,
      explicacao: "Hoy liga o fato ao presente e pede o perfecto. Ayer é tempo acabado e pede o indefinido.",
      explicacaoErradas:
        "“puse, he puesto” inverte os tempos. “pongo” está no presente. “he puesto, he puesto” ignora ayer. “puesto, he puse” quebra as formas.",
      pegadinha: "Usar o composto com ayer.",
      conhecimento: "Na América, hoy puse também é comum.",
    },
    {
      topico: "Verbos irregulares",
      subassunto: "Conducir",
      dificuldade: 4,
      raciocinio: "Verbos em -ducir têm passado com j.",
      enunciado: "Complete com o pretérito indefinido: “Ayer yo ___ la patrulla.”",
      alternativas: ["conducí", "condují", "conducé", "conduje", "conduzí"],
      correta: 3,
      explicacao: "Conducir é irregular no indefinido: conduje, condujiste, condujo.",
      explicacaoErradas:
        "“conducí” regulariza o verbo. “condují” soma o j com o final regular. “conducé” e “conduzí” não existem.",
      pegadinha: "Regularizar o verbo.",
      conhecimento: "Traducir segue o mesmo modelo: traduje.",
    },
  ],
};
