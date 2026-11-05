import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-05",
  resumo: {
    ideia:
      "Os poderes administrativos são meios para cumprir deveres. Quem tem o poder não pode deixar de usá-lo quando a lei exige, nem usá-lo além do limite ou para outro fim.",
    itens: [
      {
        termo: "Poder-dever",
        faz: "O agente não renuncia à competência. Omitir-se pode gerar responsabilidade.",
      },
      {
        termo: "Vinculado e discricionário",
        faz: "No vinculado, a lei fixa tudo. No discricionário, há escolha dentro da lei.",
      },
      {
        termo: "Hierárquico",
        faz: "Ordenar, fiscalizar, rever, delegar e avocar dentro da mesma estrutura.",
      },
      {
        termo: "Disciplinar",
        faz: "Pune servidores e quem tem vínculo especial com a Administração.",
        pista: "Súmula 650 do STJ: nos casos do art. 132 da Lei 8.112, a pena é a demissão.",
      },
      {
        termo: "Regulamentar",
        faz: "Detalha a lei para sua fiel execução, sem inovar.",
        pista: "O Congresso pode sustar o excesso (art. 49, V, da CF).",
      },
      {
        termo: "Decreto autônomo",
        faz: "Organiza a Administração sem aumentar despesa e extingue cargos vagos (art. 84, VI).",
      },
      {
        termo: "Polícia",
        faz: "Limita bens, direitos e atividades em favor do interesse público.",
        pista: "Atributos: discricionariedade, autoexecutoriedade e coercibilidade.",
      },
      {
        termo: "Ciclo de polícia",
        faz: "Ordem, consentimento, fiscalização e sanção.",
        pista: "Tema 532: só a ordem é sempre indelegável.",
      },
      {
        termo: "Excesso de poder",
        faz: "O agente vai além da competência que tem.",
      },
      {
        termo: "Desvio de poder",
        faz: "O agente é competente, mas busca fim diferente do previsto na lei.",
      },
    ],
    cuidado: "Multa aplicada não é autoexecutória: se não for paga, a cobrança depende de execução.",
  },
  questoes: [
    {
      topico: "Abuso de poder",
      subassunto: "Desvio de finalidade",
      dificuldade: 4,
      raciocinio: "Competência existe. O problema é o fim.",
      enunciado:
        "Um chefe, que tem competência para remover servidores no interesse do serviço, remove um subordinado para unidade distante só para puni-lo por uma crítica. Essa remoção é caso de",
      alternativas: [
        "excesso de poder, por faltar competência ao chefe",
        "ato regular, pois a remoção é decisão discricionária",
        "vício de forma, sanável com nova publicação do ato",
        "falta de hierarquia, pois o subordinado é estável",
        "desvio de poder, pois a finalidade é diversa da lei",
      ],
      correta: 4,
      explicacao: "A remoção existe para atender ao serviço. Usá-la como castigo desvia o ato do fim legal, vício que não se convalida.",
      explicacaoErradas:
        "“excesso de poder” pede falta de competência, e o chefe a tem. “discricionária” não livra o ato da finalidade. “vício de forma” não é o defeito. “falta de hierarquia” não descreve o caso.",
      pegadinha: "Chamar de excesso o que é desvio.",
      conhecimento: "A Lei 4.717/1965 define o desvio de finalidade no art. 2º, parágrafo único, “e”.",
    },
    {
      topico: "Poder hierárquico",
      subassunto: "Delegação e avocação",
      dificuldade: 5,
      raciocinio: "O art. 13 da Lei 9.784 lista o que não se delega.",
      enunciado:
        "Na esfera federal, um superintendente pretende delegar a um subordinado a decisão de recursos administrativos e a edição de atos normativos. Pela Lei 9.784/1999, a delegação",
      alternativas: [
        "é válida, se o ato de delegação for publicado no órgão",
        "é vedada nas duas situações, por expressa regra da lei",
        "é válida só para a decisão de recursos administrativos",
        "é válida só para a edição dos atos normativos da unidade",
        "é válida, desde que limitada ao prazo de doze meses",
      ],
      correta: 1,
      explicacao: "O art. 13 proíbe delegar a edição de atos normativos, a decisão de recursos administrativos e as matérias de competência exclusiva.",
      explicacaoErradas:
        "“publicado” é requisito de delegação admitida, mas não salva matéria vedada. “só para a decisão” e “só para a edição” liberam uma das vedações. “doze meses” não existe na lei.",
      pegadinha: "Achar que a publicação basta para delegar qualquer coisa.",
      conhecimento: "A delegação é revogável a qualquer tempo (art. 14, § 2º).",
    },
    {
      topico: "Poder disciplinar",
      subassunto: "Súmula 650 do STJ",
      dificuldade: 5,
      raciocinio: "Enquadrou no art. 132, a pena é a demissão.",
      enunciado:
        "Comprovada em PAD a prática de conduta do art. 132 da Lei 8.112/1990, a autoridade quer aplicar suspensão, por bom histórico do servidor. Segundo a Súmula 650 do STJ, a autoridade",
      alternativas: [
        "pode escolher a pena, pois o poder disciplinar é sempre discricionário",
        "pode aplicar a suspensão, se a comissão tiver sugerido isso",
        "não tem discricionariedade para aplicar pena diversa da demissão",
        "pode converter a demissão em multa, por conveniência do serviço",
        "deve consultar antes o Poder Judiciário sobre a pena cabível",
      ],
      correta: 2,
      explicacao: "A súmula diz que a autoridade não dispõe de discricionariedade para aplicar pena diversa de demissão nas hipóteses do art. 132.",
      explicacaoErradas:
        "“sempre discricionário” contraria a súmula. “a comissão tiver sugerido” não muda o resultado. “converter a demissão em multa” não está previsto. “consultar antes” não é etapa do processo.",
      pegadinha: "Levar o bom histórico para onde a súmula tirou a escolha.",
      conhecimento: "O controle judicial do PAD é tratado na Súmula 665 do STJ.",
    },
    {
      topico: "Poder regulamentar",
      subassunto: "Decreto autônomo",
      dificuldade: 5,
      raciocinio: "O art. 84, VI, tem duas alíneas e limites claros.",
      enunciado:
        "O Presidente da República quer, por decreto, reorganizar um ministério sem aumentar despesa, extinguir um cargo vago e criar um novo órgão. Pelo art. 84, VI, da CF, o decreto pode",
      alternativas: [
        "fazer as três medidas, pois é ato do chefe do Poder Executivo",
        "reorganizar o ministério, mas não extinguir o cargo vago",
        "extinguir o cargo vago, mas não reorganizar o ministério",
        "criar o órgão, desde que sem aumento de despesa pública",
        "reorganizar e extinguir o cargo vago, mas não criar o órgão",
      ],
      correta: 4,
      explicacao: "A CF permite decreto para organizar a Administração sem aumento de despesa e sem criar ou extinguir órgãos, e para extinguir cargos ou funções vagos.",
      explicacaoErradas:
        "“as três medidas” inclui criação de órgão, que depende de lei. “não extinguir” e “não reorganizar” negam uma alínea do art. 84, VI. “criar o órgão” é vedado mesmo sem aumento de despesa.",
      pegadinha: "Achar que a falta de despesa libera a criação de órgão.",
      conhecimento: "As competências do inciso VI podem ser delegadas a Ministros, ao PGR e ao AGU.",
    },
    {
      topico: "Poder de polícia",
      subassunto: "Delegação",
      dificuldade: 5,
      raciocinio: "No Tema 532 há requisitos para a delegação à estatal.",
      enunciado:
        "Um município pretende delegar a fiscalização e a aplicação de multas de trânsito a uma estatal de capital majoritariamente público, que presta só serviço próprio do Estado, sem concorrência. Pelo STF (Tema 532), a delegação",
      alternativas: [
        "é possível por lei, salvo quanto à fase de ordem de polícia",
        "é vedada, pois pessoa de direito privado nunca exerce polícia",
        "é possível, inclusive para a ordem de polícia e por contrato",
        "é vedada, pois a fase de sanção nunca pode ser delegada",
        "é possível, mas apenas a fundações de direito público",
      ],
      correta: 0,
      explicacao: "O STF admitiu delegar por lei o poder de polícia a estatais com esse perfil, exceto a ordem de polícia, que é a fase normativa.",
      explicacaoErradas:
        "“nunca exerce polícia” contraria a tese. “inclusive para a ordem” amplia o que foi vedado. “sanção nunca” esquece que a tese inclui a sanção. “fundações de direito público” não é a condição.",
      pegadinha: "Estender a tese para a empresa em concorrência.",
      conhecimento: "A delegação a associação privada continua sem apoio nessa tese.",
    },
    {
      topico: "Poder de polícia",
      subassunto: "Atributos",
      dificuldade: 4,
      raciocinio: "A Administração executa o ato, mas não cobra sozinha a multa.",
      enunciado:
        "Em uma fiscalização, a autoridade retira de circulação um veículo sem condições de segurança e aplica multa ao proprietário, que se recusa a pagar. Sobre autoexecutoriedade, é correto afirmar que",
      alternativas: [
        "a retirada do veículo e a cobrança da multa dependem do juiz",
        "a retirada é executada de imediato, e a cobrança exige execução",
        "as duas medidas são executadas sem nenhuma atuação do juiz",
        "a retirada depende do juiz, mas a cobrança da multa não",
        "a autoexecutoriedade existe só com autorização da própria vítima",
      ],
      correta: 1,
      explicacao: "A medida de polícia pode ser executada diretamente quando a lei permite ou a urgência exige. A multa não paga depende de cobrança judicial.",
      explicacaoErradas:
        "“dependem do juiz” esquece a autoexecutoriedade. “sem nenhuma atuação” erra na cobrança. “depende do juiz, mas a cobrança” inverte tudo. “autorização da própria vítima” não existe.",
      pegadinha: "Confundir coerção direta com cobrança do valor.",
      conhecimento: "Parte da doutrina divide o atributo em exigibilidade e executoriedade.",
    },
    {
      topico: "Poder de polícia",
      subassunto: "Súmula 127 do STJ",
      dificuldade: 4,
      raciocinio: "Sem notificação, a multa não trava o licenciamento.",
      enunciado:
        "O órgão de trânsito nega o licenciamento porque há uma multa em aberto, da qual o proprietário não foi notificado. Segundo a Súmula 127 do STJ, a recusa é",
      alternativas: [
        "regular, pois basta que a infração exista no sistema",
        "regular, pois o poder de polícia é autoexecutório",
        "ilegal, salvo se o valor da multa for superior ao da taxa",
        "regular, pois quem compra o veículo assume todas as dívidas",
        "ilegal, pois não houve notificação ao infrator",
      ],
      correta: 4,
      explicacao: "É ilegal condicionar a renovação da licença de veículo ao pagamento de multa da qual o infrator não foi notificado.",
      explicacaoErradas:
        "“basta que a infração exista” ignora a notificação. “autoexecutório” não afasta o devido processo. “superior ao da taxa” não tem base. “assume todas as dívidas” não supre a notificação.",
      pegadinha: "Achar que a autoexecutoriedade dispensa a notificação.",
      conhecimento: "A Súmula 312 do STJ exige as notificações da autuação e da aplicação da pena.",
    },
    {
      topico: "Deveres",
      subassunto: "Poder-dever de agir",
      dificuldade: 4,
      raciocinio: "Competência não é favor. É obrigação.",
      enunciado:
        "Um servidor, ciente de irregularidade que a lei manda apurar, decide não agir por achar o assunto pequeno e renuncia à sua competência por escrito. Sobre esse quadro, é correto afirmar que",
      alternativas: [
        "a renúncia é válida se for publicada pelo próprio servidor",
        "a omissão é livre, pois a apuração é sempre discricionária",
        "a competência é irrenunciável, e a omissão pode ser punida",
        "a renúncia passa o assunto para o superior de modo automático",
        "a omissão só tem efeito se houver dano material ao erário",
      ],
      correta: 2,
      explicacao: "A competência é irrenunciável (art. 11 da Lei 9.784/1999), e o poder da Administração é também dever. A omissão indevida pode gerar responsabilização.",
      explicacaoErradas:
        "“renúncia é válida” contraria a lei. “sempre discricionária” ignora o dever legal de apurar. “de modo automático” não existe. “dano material” não é requisito da falta funcional.",
      pegadinha: "Ver o poder como faculdade.",
      conhecimento: "O art. 143 da Lei 8.112 obriga a autoridade a apurar irregularidade de que tiver ciência.",
    },
  ],
};
