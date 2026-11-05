import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-03",
  resumo: {
    ideia:
      "Preposição e conjunção são conectivos: ligam partes da frase. A pergunta que resolve quase tudo é sempre a mesma: que relação de sentido essa ligação cria?",
    itens: [
      {
        termo: "Preposição relacional",
        faz: "Aparece porque outra palavra exige: precisar de, ter medo de, assistir a. Não acrescenta sentido próprio.",
      },
      {
        termo: "Preposição nocional",
        faz: "Traz um sentido: porta de madeira (matéria), carro do João (posse), tremer de frio (causa).",
        pista: "“Para” pode indicar finalidade, direção, tempo, destinatário e ponto de vista: “Para a perícia, ...”.",
      },
      {
        termo: "Coordenativas",
        faz: "Aditivas: e, nem, não só... mas também. Adversativas: mas, porém, contudo, todavia, entretanto. Alternativas: ou, ora... ora. Conclusivas: logo, portanto, destarte. Explicativas: pois, porque, que.",
        pista: "“Pois” depois do verbo, entre vírgulas, conclui. Antes do verbo, explica.",
      },
      {
        termo: "Causa e concessão",
        faz: "Causais: porque, visto que, já que, uma vez que, porquanto, como (no início). Concessivas: embora, conquanto, ainda que, mesmo que, se bem que.",
        pista: "Concessão traz um obstáculo que não impede o fato. Pede subjuntivo: “Embora tenha chovido”.",
      },
      {
        termo: "Condição, conformidade e consequência",
        faz: "Condicionais: se, caso, desde que (com subjuntivo). Conformativas: conforme, segundo, como. Consecutivas: tão... que, tanto... que.",
      },
      {
        termo: "Proporção, tempo e finalidade",
        faz: "Proporcionais: à medida que, à proporção que. Temporais: quando, enquanto, assim que, desde que (com indicativo). Finais: para que, a fim de que.",
        pista: "“À medida que” é proporção; “na medida em que” é causa.",
      },
      {
        termo: "Integrantes",
        faz: "“Que” e “se” abrem oração que completa outro termo: “Informou que a pista cedeu”.",
        pista: "Se a oração troca por “isso”, é integrante.",
      },
      {
        termo: "Mas × embora",
        faz: "O “mas” abre o argumento mais forte. Ao reescrever com “embora”, ele vai para a outra oração, a do argumento mais fraco.",
      },
    ],
    cuidado:
      "A mesma palavra muda de valor: “como” indica causa, comparação ou conformidade; “desde que” indica tempo ou condição; “que” pode ser conjunção ou pronome. Decida pelo sentido da frase, nunca pela lista decorada.",
  },
  questoes: [
    {
      topico: "Preposição",
      subassunto: "Valores semânticos de “para”",
      dificuldade: 4,
      raciocinio: "Trocar “para” por uma expressão de sentido próximo em cada frase.",
      enunciado:
        "“Para os peritos, a marca de frenagem indica velocidade alta.” Assinale a frase em que “para” tem o mesmo valor semântico que no trecho citado.",
      alternativas: [
        "A equipe saiu cedo para evitar a chuva forte na serra.",
        "Para a chefia, a operação alcançou a meta prevista no mês.",
        "O comboio seguiu para o sul logo depois do almoço de sexta.",
        "A audiência ficou para a semana seguinte à do feriado.",
        "O agente trouxe o colete para a colega do plantão noturno.",
      ],
      correta: 1,
      explicacao:
        "Nos dois casos, “para” equivale a “na opinião de”: apresenta o ponto de vista de quem avalia o fato.",
      explicacaoErradas:
        "“para evitar” indica finalidade. “para o sul” indica direção. “para a semana seguinte” indica tempo. “para a colega” indica destinatário.",
      pegadinha:
        "Ver “para” no início da frase e concluir que é finalidade. Finalidade costuma vir antes de verbo; com pessoa ou órgão, no início, costuma ser ponto de vista.",
      conhecimento:
        "“Para” é preposição de muitos valores. Trocar por “a fim de”, “em direção a” ou “na opinião de” mostra qual deles está em uso.",
    },
    {
      topico: "Preposição",
      subassunto: "Valor relacional e nocional",
      dificuldade: 4,
      raciocinio: "Ver se a preposição foi pedida pelo termo anterior ou se traz sentido próprio.",
      enunciado:
        "Assinale a frase em que a preposição “de” é exigida pela regência de um termo anterior, sem acrescentar sentido próprio.",
      alternativas: [
        "A cerca de arame foi retirada do acostamento pela concessionária.",
        "O caminhão de Goiás foi retido na balança no início da tarde.",
        "O motorista tremia de frio enquanto esperava pelo socorro mecânico.",
        "O condutor precisava de ajuda depois da pane ocorrida na rodovia.",
        "A viatura do posto ficou três dias parada na oficina credenciada.",
      ],
      correta: 3,
      explicacao:
        "Quem precisa precisa de algo: a preposição é pedida pelo verbo “precisar”. O valor é relacional, sem sentido próprio.",
      explicacaoErradas:
        "“de arame” indica matéria. “de Goiás” indica origem. “de frio” indica causa. “do posto” indica posse. Nesses casos, a preposição traz um sentido e é nocional.",
      pegadinha:
        "Olhar apenas a palavra “de”. O que decide é a relação com o termo anterior: exigência gramatical ou sentido novo.",
      conhecimento:
        "Preposição relacional resulta da regência. Preposição nocional introduz adjunto e acrescenta matéria, posse, origem, causa ou outro sentido.",
    },
    {
      topico: "Conjunções",
      subassunto: "Conectivos pouco usuais",
      dificuldade: 5,
      raciocinio: "Identificar o valor de cada conectivo antes de procurar os equivalentes.",
      enunciado:
        "“Conquanto a chuva tenha cessado, a pista segue interditada, porquanto há risco de novo deslizamento; destarte, o desvio será mantido.” Assinale a sequência que substitui os três conectivos, na ordem, preservando o sentido.",
      alternativas: [
        "Visto que / a menos que / portanto",
        "Porque / embora / entretanto",
        "Embora / portanto / contudo",
        "Desde que / porque / assim",
        "Embora / visto que / assim",
      ],
      correta: 4,
      explicacao:
        "“Conquanto” é concessivo, como “embora”. “Porquanto” é causal, como “visto que”. “Destarte” é conclusivo, como “assim”.",
      explicacaoErradas:
        "“Visto que” e “porque” são causais e não cabem no lugar de “conquanto”. “Portanto” é conclusivo e não substitui “porquanto”. “Desde que”, com subjuntivo, é condição. “Contudo” e “entretanto” são adversativos e não substituem “destarte”.",
      pegadinha:
        "“Conquanto” e “porquanto” têm forma parecida e sentidos diferentes: o primeiro traz obstáculo, e o segundo, causa.",
      conhecimento:
        "Três palavras de prova: conquanto (concessão), porquanto (causa) e destarte (conclusão). Se a concessiva pede subjuntivo, a substituta também precisa aceitá-lo.",
    },
    {
      topico: "Conjunções",
      subassunto: "Reescrita da adversativa pela concessiva",
      dificuldade: 4,
      raciocinio: "Localizar o argumento mais forte, que vem depois do “mas”, e mantê-lo na oração principal.",
      enunciado:
        "“A frota foi renovada, mas os acidentes continuaram.” Assinale a reescrita que mantém o sentido original e a correção gramatical.",
      alternativas: [
        "Embora os acidentes tenham continuado, a frota da unidade foi renovada.",
        "Embora a frota foi renovada, os acidentes continuaram.",
        "Como a frota foi renovada, os acidentes continuaram.",
        "Desde que a frota fosse renovada, os acidentes continuariam.",
        "Embora a frota tenha sido renovada, os acidentes continuaram.",
      ],
      correta: 4,
      explicacao:
        "A ideia principal é a continuidade dos acidentes. O “embora” entra na oração do fato que não impediu o resultado, com o verbo no subjuntivo.",
      explicacaoErradas:
        "A primeira reescrita inverte os argumentos e passa a destacar a renovação. “Embora ... foi” usa o indicativo. “Como” cria relação de causa. “Desde que” cria condição.",
      pegadinha:
        "Pôr o “embora” no lugar do “mas”. As conjunções ficam em orações opostas: o “mas” abre a ideia forte, e o “embora” abre a fraca.",
      conhecimento:
        "Adversativa com indicativo vira concessiva com subjuntivo, e a oração com “embora” é a do fato que não impede o outro.",
    },
    {
      topico: "Conjunções",
      subassunto: "“Na medida em que” e “à medida que”",
      dificuldade: 5,
      raciocinio: "Separar as duas expressões, que têm forma parecida e valores diferentes.",
      enunciado:
        "“Na medida em que o excesso de peso danifica o pavimento, a fiscalização de cargas foi reforçada.” No período, a expressão “na medida em que” indica",
      alternativas: [
        "proporção, equivalendo a “à medida que”.",
        "condição, equivalendo a “desde que”.",
        "causa, equivalendo a “uma vez que”.",
        "concessão, equivalendo a “ainda que”.",
        "conformidade, equivalendo a “segundo”.",
      ],
      correta: 2,
      explicacao:
        "O dano ao pavimento é o motivo do reforço na fiscalização. “Na medida em que” é locução causal e equivale a “uma vez que”.",
      explicacaoErradas:
        "Proporção seria “à medida que”, com dois fatos que crescem juntos, o que não ocorre aqui. Não há hipótese (condição), obstáculo (concessão) nem referência a uma fonte (conformidade).",
      pegadinha:
        "Confundir as duas locuções. “À medida que” é proporção; “na medida em que” é causa. Formas misturadas, como “à medida em que”, não existem na norma-padrão.",
      conhecimento:
        "Proporção indica dois fatos que variam juntos. A causa indica o motivo de outro fato.",
    },
    {
      topico: "Conjunções",
      subassunto: "Conjunção integrante e outros usos de “que”",
      dificuldade: 4,
      raciocinio: "Aplicar o teste do “isso” e, se ele falhar, ver a relação entre as orações.",
      enunciado: "Assinale a frase em que “que” é conjunção integrante.",
      alternativas: [
        "A barreira que cedeu durante a madrugada fica perto do km 12.",
        "A equipe informou que a barreira cedeu durante a madrugada.",
        "Reduza a marcha, que a barreira cedeu durante a madrugada.",
        "A barreira cedeu tanto que a pista fechou durante a madrugada.",
        "Essa barreira cedeu mais que a outra durante a madrugada.",
      ],
      correta: 1,
      explicacao:
        "A oração “que a barreira cedeu” é o objeto de “informou” e pode ser trocada por “isso”: a equipe informou isso.",
      explicacaoErradas:
        "“A barreira que cedeu” traz pronome relativo, que retoma “barreira”. “Reduza a marcha, que...” é explicativo. “tanto que” é consecutivo. “mais que” é comparativo.",
      pegadinha:
        "Achar que “que” depois de verbo é sempre integrante. Em “Reduza a marcha, que...”, ele vem depois do verbo e explica a ordem.",
      conhecimento:
        "Conjunção integrante inicia oração substantiva. Pronome relativo retoma um termo anterior e pode trocar por “o qual”.",
    },
  ],
};
