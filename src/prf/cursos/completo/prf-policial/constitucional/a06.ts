import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-06",
  resumo: {
    ideia:
      "Nacionalidade é o vínculo entre a pessoa e o Estado. O art. 12 diz quem nasce brasileiro, quem se torna brasileiro e como esse vínculo acaba.",
    itens: [
      {
        termo: "Nato pelo solo",
        faz: "Nasceu no Brasil é nato, salvo se os dois pais forem estrangeiros e um deles estiver a serviço do seu país.",
      },
      {
        termo: "Nato pelo sangue",
        faz: "Nasceu fora com pai ou mãe brasileira a serviço do Brasil é nato.",
      },
      {
        termo: "Registro ou opção",
        faz: "Nasceu fora sem esse serviço: é nato se for registrado em repartição brasileira, ou se morar no Brasil e optar depois dos 18.",
        pista: "A opção é feita na Justiça Federal.",
      },
      {
        termo: "Naturalização ordinária",
        faz: "Na forma da lei. Para origem de língua portuguesa, a CF pede 1 ano de residência e idoneidade moral.",
      },
      {
        termo: "Naturalização extraordinária",
        faz: "Mais de 15 anos seguidos no Brasil, sem condenação penal e com pedido do interessado.",
      },
      {
        termo: "Portugueses",
        faz: "Com residência permanente e reciprocidade, recebem direitos de brasileiro, salvo os casos da CF.",
      },
      {
        termo: "Cargos de nato",
        faz: "Presidente e Vice, presidentes da Câmara e do Senado, Ministro do STF, carreira diplomática, oficial das Forças Armadas e Ministro da Defesa.",
      },
      {
        termo: "Perda (EC 131/2023)",
        faz: "Cancelamento da naturalização por sentença, por fraude ou atentado à ordem constitucional, ou pedido expresso, sem gerar apátrida.",
        pista: "Quem renuncia pode readquirir a nacionalidade originária.",
      },
    ],
    cuidado:
      "Depois da EC 131/2023, adquirir outra nacionalidade não faz perder a brasileira. O PDF traz essa mudança, mas questões antigas não.",
  },
  questoes: [
    {
      topico: "Brasileiros natos",
      subassunto: "Critério do solo",
      dificuldade: 5,
      raciocinio:
        "A exceção pede dois requisitos juntos.",
      enunciado:
        "Um diplomata estrangeiro, a serviço do seu país, casou-se no Brasil com uma brasileira, e o filho do casal nasceu em Brasília. Segundo a CF, esse filho",
      alternativas: [
        "é estrangeiro, pois o pai está a serviço de outro país",
        "é naturalizado, depois de morar 15 anos seguidos no Brasil",
        "só será brasileiro se optar na Justiça Federal depois dos 18 anos",
        "é brasileiro nato, pois a exceção exige pai e mãe estrangeiros",
        "fica sem nacionalidade até que o pai deixe a missão diplomática",
      ],
      correta: 3,
      explicacao:
        "Para afastar o critério do solo, os dois pais devem ser estrangeiros, e um deles deve estar a serviço do seu país. Como a mãe é brasileira, a exceção não se aplica.",
      explicacaoErradas:
        "“É estrangeiro” esquece o primeiro requisito. “Naturalizado” e “15 anos” tratam de nacionalidade adquirida. “Optar na Justiça Federal” vale para quem nasce fora. “Fica sem nacionalidade” não existe nesse caso.",
      pegadinha:
        "Basta um dos pais a serviço, mas os dois precisam ser estrangeiros.",
      conhecimento:
        "O território brasileiro abrange também o mar territorial e o espaço aéreo.",
    },
    {
      topico: "Brasileiros natos",
      subassunto: "Nascidos no exterior",
      dificuldade: 5,
      raciocinio:
        "Veja se os pais estavam a serviço do Brasil. Se não, há duas saídas.",
      enunciado:
        "Uma criança nasceu na Alemanha, filha de mãe brasileira que trabalhava numa empresa privada de lá, e não foi registrada em repartição brasileira. Ela veio morar no Brasil aos 10 anos. Segundo a CF,",
      alternativas: [
        "já é brasileira nata em definitivo, sem nenhum outro ato a praticar",
        "só poderá se naturalizar depois de morar 15 anos seguidos no Brasil",
        "poderá optar pela nacionalidade em qualquer tempo depois da maioridade",
        "tinha até os 4 anos para optar, e agora não pode mais ser brasileira",
        "basta a declaração da mãe ao cartório para que seja brasileira nata",
      ],
      correta: 2,
      explicacao:
        "O art. 12, I, “c”, considera nato quem nasce fora, de pai ou mãe brasileira, se for registrado em repartição competente, ou se vier a residir no Brasil e optar, em qualquer tempo, depois de atingida a maioridade.",
      explicacaoErradas:
        "“Em definitivo” ignora a opção. “15 anos seguidos” é a naturalização extraordinária. “Até os 4 anos” inventa um prazo: a opção é em qualquer tempo. “Declaração da mãe ao cartório” não supre a opção perante a Justiça.",
      pegadinha:
        "Sem o registro, a nacionalidade depende de residência e opção, feita depois da maioridade.",
      conhecimento:
        "A opção é uma ação de jurisdição voluntária, de competência da Justiça Federal (art. 109, X).",
    },
    {
      topico: "Naturalização",
      subassunto: "Ordinária e extraordinária",
      dificuldade: 5,
      raciocinio:
        "Compare o tempo e o local de origem do estrangeiro.",
      enunciado:
        "Um angolano mora no Brasil há 2 anos, sem interrupção, e tem idoneidade moral. Uma francesa mora aqui há 16 anos seguidos e não tem condenação penal. Segundo a CF, é certo que",
      alternativas: [
        "os dois podem requerer a nacionalidade, por vias diferentes do art. 12, II",
        "só a francesa pode requerer, pois ele não cumpriu 15 anos de residência",
        "só o angolano pode requerer, pois ela não fala a língua oficial do Brasil",
        "nenhum dos dois pode requerer sem autorização do Congresso Nacional",
        "os dois se tornam brasileiros natos, com efeitos desde o seu nascimento",
      ],
      correta: 0,
      explicacao:
        "O art. 12, II, “a”, pede 1 ano ininterrupto e idoneidade moral a quem vem de país de língua portuguesa. A alínea “b” alcança estrangeiros de qualquer nacionalidade, com mais de 15 anos ininterruptos e sem condenação penal, desde que requeiram.",
      explicacaoErradas:
        "“Ele não cumpriu 15 anos” esquece a regra de língua portuguesa. “Ela não fala a língua” não é requisito da alínea “b”. “Autorização do Congresso” não existe. “Natos” confunde a nacionalidade adquirida com a originária.",
      pegadinha:
        "A CF fala em “países de língua portuguesa”, e não apenas em Portugal.",
      conhecimento:
        "A doutrina vê na naturalização extraordinária um direito de quem cumpre os requisitos.",
    },
    {
      topico: "Naturalização",
      subassunto: "Casamento e estatuto do português",
      dificuldade: 4,
      raciocinio:
        "Quase nacionalidade não é nacionalidade.",
      enunciado:
        "Um português com residência permanente no Brasil pede os direitos de brasileiro, e há reciprocidade em favor dos brasileiros. Sobre a situação dele, a CF prevê que",
      alternativas: [
        "ele se torna brasileiro nato pela simples residência no território",
        "ele perde a nacionalidade portuguesa ao receber os direitos de brasileiro",
        "ele pode ocupar o cargo de Presidente da República pela reciprocidade",
        "o casamento com brasileira é o único meio de obter esse tratamento",
        "ele recebe direitos inerentes ao brasileiro, salvo os casos previstos na CF",
      ],
      correta: 4,
      explicacao:
        "O art. 12, § 1º, atribui aos portugueses com residência permanente, se houver reciprocidade, os direitos inerentes ao brasileiro, salvo os casos previstos na CF. Ele continua sendo português.",
      explicacaoErradas:
        "“Brasileiro nato” não decorre da regra. “Perde a nacionalidade portuguesa” é falso: ele a mantém. “Presidente da República” é cargo de nato. “O casamento” não dá nacionalidade nem esse tratamento.",
      pegadinha:
        "O casamento com brasileiro não gera nacionalidade no Brasil.",
      conhecimento:
        "O tratamento do português equiparado se aproxima do dado ao naturalizado.",
    },
    {
      topico: "Natos e naturalizados",
      subassunto: "Cargos privativos",
      dificuldade: 5,
      raciocinio:
        "A lista é fechada: não aumente por analogia.",
      enunciado:
        "Um brasileiro naturalizado é eleito deputado federal e tem carreira política bem-sucedida. Segundo a CF, ele poderá",
      alternativas: [
        "ser Presidente da Câmara, se for eleito pelos seus pares",
        "assumir o cargo de Ministro de Estado da Defesa no governo",
        "ser Ministro da Justiça ou de outra pasta, salvo a Defesa",
        "virar Ministro do STF, se tiver notável saber jurídico",
        "seguir a carreira diplomática, desde que faça concurso público",
      ],
      correta: 2,
      explicacao:
        "O art. 12, § 3º, reserva ao nato os cargos de Presidente e Vice-Presidente, Presidente da Câmara e do Senado, Ministro do STF, carreira diplomática, oficial das Forças Armadas e Ministro da Defesa. Outros ministérios ficam abertos ao naturalizado.",
      explicacaoErradas:
        "“Presidente da Câmara” é cargo de nato, ainda que ele possa ser deputado. “Ministro de Estado da Defesa”, “Ministro do STF” e “carreira diplomática” também estão na lista.",
      pegadinha:
        "Ele pode ser deputado federal e senador. O limite está na presidência das Casas.",
      conhecimento:
        "No Conselho da República, os seis cidadãos do art. 89, VII, devem ser brasileiros natos.",
    },
    {
      topico: "Natos e naturalizados",
      subassunto: "Outras distinções",
      dificuldade: 5,
      raciocinio:
        "Só a CF pode criar distinção.",
      enunciado:
        "Uma lei ordinária determinou que apenas brasileiros natos podem ser Delegados da Polícia Federal. Sobre essa lei, é certo que",
      alternativas: [
        "é válida, pois a segurança pública justifica qualquer distinção legal",
        "é inconstitucional, pois só a CF distingue natos e naturalizados",
        "é válida, desde que aprovada por maioria absoluta das duas Casas",
        "é inconstitucional só se o naturalizado tiver mais de 10 anos de Brasil",
        "é válida apenas se a PF pedir a medida ao Ministro da Justiça",
      ],
      correta: 1,
      explicacao:
        "O art. 12, § 2º, diz que a lei não poderá estabelecer distinção entre natos e naturalizados, salvo nos casos previstos na CF.",
      explicacaoErradas:
        "“Qualquer distinção legal” contraria o § 2º. “Maioria absoluta” não muda a vedação. “Mais de 10 anos” confunde com a regra das empresas jornalísticas (art. 222). “Pedir ao Ministro” não tem base.",
      pegadinha:
        "A extradição, os cargos, o Conselho da República e a propriedade de empresa jornalística são as distinções da própria CF.",
      conhecimento:
        "Empresa jornalística e de radiodifusão pode ser de naturalizado há mais de 10 anos, conforme o art. 222.",
    },
    {
      topico: "Perda da nacionalidade",
      subassunto: "EC 131/2023",
      dificuldade: 5,
      raciocinio:
        "Depois da emenda, ter outra nacionalidade não leva à perda.",
      enunciado:
        "Uma brasileira nata mora em outro país há anos e adquiriu, por vontade própria, a nacionalidade dele. Ela não fez nenhum pedido às autoridades brasileiras. Segundo a CF atual,",
      alternativas: [
        "perdeu a nacionalidade brasileira, pois aceitou outra de forma voluntária",
        "a perda depende apenas de decisão do Ministro da Justiça",
        "ela mantém a nacionalidade, pois a perda exige pedido expresso",
        "a sua nacionalidade fica suspensa enquanto ela morar fora do Brasil",
        "ela passou à condição de naturalizada, sem perder os seus direitos",
      ],
      correta: 2,
      explicacao:
        "A EC 131/2023 revogou as alíneas que tratavam da aquisição de outra nacionalidade. Hoje, o nato só perde a nacionalidade por pedido expresso perante autoridade brasileira competente, ressalvada a apatridia.",
      explicacaoErradas:
        "“Perdeu a nacionalidade” é a regra antiga. “Ministro da Justiça” não aparece no § 4º. “Fica suspensa” e “passou à condição de naturalizada” não existem na CF.",
      pegadinha:
        "Questões anteriores a 2023 cobram o texto antigo.",
      conhecimento:
        "A CF proíbe atender ao pedido de perda se ele gerar apatridia, ou seja, uma pessoa sem nacionalidade.",
    },
    {
      topico: "Perda da nacionalidade",
      subassunto: "Cancelamento e reaquisição",
      dificuldade: 5,
      raciocinio:
        "Cancelamento exige sentença. Renúncia não impede a volta.",
      enunciado:
        "Sobre o cancelamento da naturalização e a renúncia à nacionalidade, segundo a CF, é correto afirmar que",
      alternativas: [
        "o cancelamento pode ser feito por ato do Presidente da República",
        "o cancelamento ocorre por atividade nociva ao interesse nacional",
        "quem renuncia pode readquirir a condição de nato, nos termos da lei",
        "o nato pode ter a nacionalidade cancelada por sentença judicial",
        "quem renuncia só volta a ser brasileiro como estrangeiro naturalizado",
      ],
      correta: 2,
      explicacao:
        "O art. 12, § 4º, I, trata só da naturalização, cancelada por sentença em caso de fraude no processo ou atentado contra a ordem constitucional e o Estado Democrático. O § 5º diz que a renúncia não impede readquirir a nacionalidade originária, nos termos da lei.",
      explicacaoErradas:
        "“Ato do Presidente” esquece a sentença judicial. “Atividade nociva” é a hipótese antiga. “O nato” não tem naturalização a cancelar. “Como estrangeiro naturalizado” contraria o § 5º.",
      pegadinha:
        "A EC 131/2023 trocou “atividade nociva” por fraude ou atentado à ordem constitucional.",
      conhecimento:
        "O art. 13 define o português como idioma oficial e lista os símbolos: bandeira, hino, armas e selo.",
    },
  ],
};
