import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-11",
  resumo: {
    ideia:
      "Agente público é quem exerce função estatal, mesmo sem salário ou por pouco tempo. A aula separa os tipos de agente e mostra as regras da Constituição para concurso, cargos, acumulação, estabilidade e remuneração.",
    itens: [
      {
        termo: "Tipos de agente",
        faz: "Políticos, administrativos, honoríficos (jurado, mesário), delegados (concessionários) e credenciados.",
      },
      {
        termo: "Cargo, emprego e função",
        faz: "Cargo é estatutário, emprego é regido pela CLT, e função é um conjunto de atribuições sem cargo próprio.",
      },
      {
        termo: "Cargo em comissão",
        faz: "Livre nomeação, mas só para direção, chefia e assessoramento (Tema 1.010 do STF).",
      },
      {
        termo: "Função de confiança",
        faz: "Só para quem já ocupa cargo efetivo (art. 37, V, da CF).",
      },
      {
        termo: "Concurso",
        faz: "Validade de até 2 anos, prorrogável uma vez. Mudar de carreira exige novo concurso (Súmula Vinculante 43).",
      },
      {
        termo: "Direito à nomeação",
        faz: "Aprovado dentro das vagas tem direito, salvo situação excepcional. A extinção dos cargos antes do fim da validade pode afastá-lo (Tema 1.164).",
      },
      {
        termo: "Requisitos do concurso",
        faz: "Psicotécnico só com previsão em lei (Súmula Vinculante 44).",
      },
      {
        termo: "Temporários",
        faz: "Necessidade temporária de excepcional interesse público. Contrato nulo dá direito a saldo de salário e FGTS.",
      },
      {
        termo: "Acumulação",
        faz: "Dois de professor, professor com outro de qualquer natureza (EC 138/2025), dois da saúde. Só importa a compatibilidade de horários (Tema 1.081).",
      },
      {
        termo: "Remuneração",
        faz: "Só por lei específica (Tema 1.427). Juiz não aumenta salário por isonomia (Súmula Vinculante 37).",
      },
    ],
    cuidado: "A Lei 8.112 ainda fala em 2 anos, mas a estabilidade vem após 3 anos, como manda o art. 41 da Constituição.",
  },
  questoes: [
    {
      topico: "Classificação dos agentes",
      subassunto: "Agente honorífico",
      dificuldade: 4,
      raciocinio: "Convocado para serviço cívico e passageiro: honorífico.",
      enunciado:
        "Um cidadão, sem vínculo com o Estado, é convocado para atuar como jurado no tribunal do júri. Na classificação dos agentes públicos, ele é agente",
      alternativas: [
        "político, pois decide em nome do Estado",
        "honorífico, pois presta serviço transitório por convocação",
        "administrativo, pois integra o quadro do Judiciário",
        "delegado, pois recebe do Estado a execução de um serviço público",
        "credenciado, pois representa a Administração em ato específico",
      ],
      correta: 1,
      explicacao: "Agentes honoríficos prestam serviço relevante e passageiro por requisição ou convocação, como jurados e mesários.",
      explicacaoErradas:
        "“político” é quem forma a vontade superior do Estado. “administrativo” tem vínculo profissional. “delegado” executa serviço por delegação, como o concessionário. “credenciado” recebe encargo por contrato ou ato próprio.",
      pegadinha: "Achar que quem não recebe salário não é agente público.",
      conhecimento: "Para fins penais, o jurado é considerado funcionário público (art. 327 do CP).",
    },
    {
      topico: "Concurso público",
      subassunto: "Súmula Vinculante 43",
      dificuldade: 4,
      raciocinio: "Outra carreira, novo concurso.",
      enunciado:
        "Uma lei autoriza servidores de nível médio a passar, por seleção interna, a um cargo de nível superior de outra carreira. Essa norma é",
      alternativas: [
        "válida, pois valoriza quem já é servidor de carreira",
        "válida, desde que a seleção interna seja de provas",
        "válida só para quem for estável há mais de três anos",
        "inconstitucional, pois outra carreira exige novo concurso",
        "inconstitucional só se a mudança gerar aumento de salário",
      ],
      correta: 3,
      explicacao: "A Súmula Vinculante 43 proíbe o provimento em cargo que não integra a carreira em que o servidor foi investido, sem concurso destinado a ele.",
      explicacaoErradas:
        "“valoriza” e “seleção interna” não substituem o concurso. “estável” não muda a regra. “aumento de salário” não é o critério da súmula.",
      pegadinha: "Aceitar a ascensão por ser feita com provas.",
      conhecimento: "A promoção dentro da mesma carreira continua válida.",
    },
    {
      topico: "Concurso público",
      subassunto: "Psicotécnico",
      dificuldade: 4,
      raciocinio: "Edital não cria exigência sozinho.",
      enunciado:
        "Um edital para cargo federal prevê exame psicotécnico eliminatório, mas a lei da carreira não trata do assunto. O candidato reprovado pede a anulação. A exigência",
      alternativas: [
        "é inválida, pois o psicotécnico depende de previsão em lei",
        "é válida, pois o edital é a lei do concurso público",
        "é válida, se o resultado for sigiloso para evitar fraude",
        "é inválida, pois o psicotécnico é proibido em todo concurso",
        "é válida, pois a Administração tem discricionariedade técnica",
      ],
      correta: 0,
      explicacao: "A Súmula Vinculante 44 diz que só por lei se pode sujeitar a exame psicotécnico a habilitação do candidato.",
      explicacaoErradas:
        "“edital é a lei” não supre a falta de lei formal. “sigiloso” contraria os critérios objetivos e o direito de recorrer. “proibido em todo concurso” exagera. “discricionariedade técnica” não dispensa a lei.",
      pegadinha: "Tomar a frase “o edital é a lei do concurso” como regra absoluta.",
      conhecimento: "Previsto em lei, o exame ainda precisa de critérios objetivos e de recurso.",
    },
    {
      topico: "Concurso público",
      subassunto: "Direito à nomeação",
      dificuldade: 5,
      raciocinio: "Olhe se a extinção veio antes ou depois do fim da validade.",
      enunciado:
        "Aprovado dentro das vagas, um candidato aguarda a nomeação. Ainda na validade do concurso, o ente supera o limite prudencial de gastos com pessoal e extingue os cargos do edital, sem contratar ninguém no lugar. Pelo STF, essa extinção",
      alternativas: [
        "nunca afeta o direito à nomeação, que é absoluto",
        "só vale se o candidato concordar com o fim do cargo",
        "vale sempre, mesmo se vier após o fim da validade do concurso",
        "obriga a nomear o candidato em outro cargo disponível",
        "pode afastar a nomeação, se vier antes do fim da validade",
      ],
      correta: 4,
      explicacao: "No Tema 1.164, o STF admitiu afastar a nomeação quando a extinção superveniente dos cargos, por causa do limite de gastos, ocorre antes do fim da validade.",
      explicacaoErradas:
        "“absoluto” ignora as situações excepcionais do RE 598.099. “concordar” não é requisito. “após o fim da validade” é justamente o caso em que o direito fica consolidado. “outro cargo” não é a solução da tese.",
      pegadinha: "Achar que o direito à nomeação nunca cede.",
      conhecimento: "A medida não pode servir de pretexto para abrir espaço a temporários.",
    },
    {
      topico: "Contratação temporária",
      subassunto: "Contrato nulo",
      dificuldade: 5,
      raciocinio: "Contrato nulo: saldo e FGTS.",
      enunciado:
        "O contrato de um temporário é declarado nulo por desvio das regras do art. 37, IX, da Constituição. Pelo STF, ele tem direito",
      alternativas: [
        "a todas as verbas da CLT, em ação proposta em até 2 anos",
        "a estabilidade, pois trabalhou com boa-fé para o Estado",
        "a saldo de salário e FGTS, com 5 anos para cobrar",
        "apenas ao FGTS, com prazo de 2 anos após o fim do contrato",
        "a nada, pois contrato nulo não gera nenhum efeito",
      ],
      correta: 2,
      explicacao: "O STF garante só saldo de salário e FGTS. Pelo Tema 1.189, o prazo bienal do art. 7º, XXIX, não se aplica a esses casos.",
      explicacaoErradas:
        "“todas as verbas” vai além do que a tese dá. “estabilidade” exige concurso. “prazo de 2 anos” é justamente o que o STF afastou. “a nada” ignora o trabalho já prestado.",
      pegadinha: "Aplicar o prazo de dois anos da Justiça do Trabalho.",
      conhecimento: "A contratação temporária exige lei, prazo certo e necessidade excepcional.",
    },
    {
      topico: "Acumulação de cargos",
      subassunto: "Compatibilidade de horários",
      dificuldade: 5,
      raciocinio: "A Constituição só pede horários compatíveis.",
      enunciado:
        "Um profissional de saúde ocupa dois cargos privativos da área, com horários compatíveis no caso concreto, mas a soma passa de 60 horas semanais, limite de uma norma interna. A acumulação",
      alternativas: [
        "é vedada, pois a norma interna fixa o teto de horas",
        "é lícita, pois importa só a compatibilidade de horários",
        "é lícita só se um dos dois cargos for em comissão",
        "é vedada, pois a Constituição limita a jornada somada a 60 horas",
        "é lícita só com a renúncia à remuneração de um dos cargos",
      ],
      correta: 1,
      explicacao: "No Tema 1.081, o STF fixou que a acumulação depende só da compatibilidade de horários no caso concreto, ainda que norma infraconstitucional limite a jornada.",
      explicacaoErradas:
        "“teto de horas” não prevalece sobre a Constituição. “em comissão” não é requisito. “limita a jornada” não está no art. 37, XVI. “renúncia” não é exigida.",
      pegadinha: "Dar à norma interna força para criar um limite que a Constituição não traz.",
      conhecimento: "A proibição de acumular alcança autarquias, fundações, estatais e subsidiárias (art. 37, XVII).",
    },
    {
      topico: "Estabilidade",
      subassunto: "Perda do cargo",
      dificuldade: 4,
      raciocinio: "Quatro hipóteses. A extinção do cargo leva à disponibilidade.",
      enunciado: "Pela Constituição, um servidor federal já estável pode perder o cargo por",
      alternativas: [
        "decisão judicial de 1º grau, PAD e avaliação periódica de desempenho",
        "sentença transitada, PAD, e só nessas duas hipóteses",
        "sentença transitada, PAD e decisão do chefe imediato",
        "sentença transitada, PAD, avaliação e excesso de despesa",
        "sentença transitada, PAD, avaliação e extinção do cargo",
      ],
      correta: 3,
      explicacao: "O art. 41, § 1º, traz sentença transitada em julgado, processo administrativo e avaliação periódica. O art. 169, § 4º, acrescenta o excesso de despesa com pessoal.",
      explicacaoErradas:
        "“1º grau” não basta. “só nessas duas” esquece as outras. “chefe imediato” não pode tirar o cargo. “extinção do cargo” gera disponibilidade, conforme o art. 41, § 3º.",
      pegadinha: "Tratar a extinção do cargo como perda.",
      conhecimento: "A avaliação periódica depende de lei complementar.",
    },
    {
      topico: "Remuneração",
      subassunto: "Reserva de lei",
      dificuldade: 5,
      raciocinio: "Remuneração se fixa por lei. O já recebido fica protegido.",
      enunciado:
        "Uma lei delega ao Poder Executivo a tarefa de fixar e alterar, por decreto, o valor de uma gratificação de servidores. Pela tese do STF, essa delegação",
      alternativas: [
        "é inconstitucional, mas o que foi pago não será devolvido",
        "é válida, pois o decreto só detalha o valor definido",
        "é inconstitucional, e o servidor deve devolver o que recebeu",
        "é válida, desde que o Congresso aprove o decreto depois",
        "é válida, pois gratificação não integra a remuneração do cargo",
      ],
      correta: 0,
      explicacao: "No Tema 1.427, o STF aplicou o art. 37, X: remuneração só por lei específica. Mas a decisão não autoriza decréscimo nem devolução de valores.",
      explicacaoErradas:
        "“só detalha” não descreve o caso, pois o decreto fixava o valor. “deve devolver” contraria a tese. “Congresso aprove” não supre a lei. “não integra” é falso para esse fim.",
      pegadinha: "Concluir que todo valor inconstitucional volta aos cofres.",
      conhecimento: "A diferença pode ser absorvida por reajustes futuros.",
    },
    {
      topico: "Cargos em comissão",
      subassunto: "Tema 1.010",
      dificuldade: 4,
      raciocinio: "Confiança e chefia, e não rotina.",
      enunciado:
        "Uma lei cria cargos em comissão de motorista e de auxiliar de arquivo, com tarefas rotineiras. Pelo STF, esses cargos são",
      alternativas: [
        "válidos, pois a nomeação é livre em qualquer cargo em comissão",
        "válidos, se ocupados só por servidores de carreira",
        "válidos, desde que o número não passe da metade dos efetivos",
        "inválidos, salvo se a lei dispensar a prova de títulos",
        "inválidos, pois servem só a direção, chefia e assessoramento",
      ],
      correta: 4,
      explicacao: "O art. 37, V, e o Tema 1.010 limitam os cargos em comissão a direção, chefia e assessoramento, com relação de confiança e atribuições descritas em lei.",
      explicacaoErradas:
        "“nomeação é livre” não permite criar o cargo para qualquer tarefa. “servidores de carreira” não resolve o desvio. “metade dos efetivos” não existe como regra. “prova de títulos” não tem relação com o caso.",
      pegadinha: "Confundir liberdade de nomear com liberdade de criar.",
      conhecimento: "As atribuições dos cargos em comissão devem constar da própria lei.",
    },
    {
      topico: "Cargos em comissão",
      subassunto: "Função de confiança",
      dificuldade: 4,
      raciocinio: "Função de confiança é só para efetivo. Cargo em comissão pode vir de fora.",
      enunciado:
        "A chefia de um órgão federal quer designar para uma função de confiança uma pessoa sem vínculo com o serviço público. Essa designação",
      alternativas: [
        "é válida, pois a função é de livre escolha da autoridade",
        "é válida, se houver previsão no regimento interno do órgão",
        "é inválida, pois a função é só de quem tem cargo efetivo",
        "é inválida, pois a função exige concurso específico para ela",
        "é válida só para assessoramento, e não para chefia",
      ],
      correta: 2,
      explicacao: "O art. 37, V, reserva as funções de confiança a quem ocupa cargo efetivo. Pessoa sem vínculo só poderia ir para cargo em comissão.",
      explicacaoErradas:
        "“livre escolha” vale para o cargo em comissão. “regimento interno” não afasta a Constituição. “concurso específico” não existe para função. “só para assessoramento” não tem base.",
      pegadinha: "Trocar função de confiança por cargo em comissão.",
      conhecimento: "Parte dos cargos em comissão deve ficar com servidores de carreira, nos percentuais da lei.",
    },
  ],
};
