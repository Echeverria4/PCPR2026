import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-b-04",
  resumo: {
    ideia:
      "Ato administrativo é a manifestação unilateral da Administração, sob regime de direito público. Para analisá-lo, olhe os cinco elementos, os atributos e em que fase de existência ele está.",
    itens: [
      {
        termo: "Elementos",
        faz: "Competência, finalidade, forma, motivo e objeto.",
        pista: "O mérito fica no motivo e no objeto dos atos discricionários.",
      },
      {
        termo: "Atributos",
        faz: "Presunção de legitimidade, imperatividade, autoexecutoriedade e, para Di Pietro, tipicidade.",
      },
      {
        termo: "Imperatividade",
        faz: "Impõe obrigação sem concordância do particular. Falta nos atos enunciativos e nos que atendem a pedido, como certidão e licença.",
      },
      {
        termo: "Perfeito, válido e eficaz",
        faz: "Perfeito concluiu a formação. Válido respeita a lei. Eficaz pode produzir efeitos. Um ato pode ser perfeito, inválido e eficaz.",
      },
      {
        termo: "Pendente e consumado",
        faz: "Pendente aguarda termo ou condição. Consumado já esgotou seus efeitos.",
      },
      {
        termo: "Geral x individual",
        faz: "Geral tem destinatários indeterminados. Individual tem destinatários certos, mesmo que sejam muitos.",
      },
      {
        termo: "Conceito indeterminado",
        faz: "Abre margem de apreciação só na zona de dúvida. Nas zonas de certeza, o Judiciário pode controlar.",
      },
      {
        termo: "Silêncio",
        faz: "É fato administrativo, e não ato. Só produz efeito se a lei disser qual é.",
      },
      {
        termo: "Ato inexistente",
        faz: "Vem de quem usurpa função pública. Não produz efeito válido nem se convalida.",
      },
    ],
    cuidado:
      "Ato da Administração é gênero: inclui atos privados e materiais. Ato administrativo é só o regido pelo direito público.",
  },
  questoes: [
    {
      topico: "Mérito",
      subassunto: "Onde está a liberdade",
      dificuldade: 4,
      raciocinio: "Competência e finalidade continuam presas à lei mesmo no ato discricionário.",
      enunciado:
        "A Lei 8.112 prevê que, a critério da Administração, poderá ser concedida licença para tratar de interesses particulares. Nesse ato discricionário, a margem de conveniência e oportunidade está nos elementos",
      alternativas: [
        "competência e forma, porque a autoridade escolhe quem assina e de que maneira",
        "motivo e objeto",
        "finalidade e forma, porque a autoridade define qual interesse público pretende alcançar",
        "competência, finalidade, forma, motivo e objeto, porque todos ficam livres quando a lei usa “poderá”",
        "objeto e competência, porque a chefia pode decidir e também repassar a decisão a quem preferir",
      ],
      correta: 1,
      explicacao:
        "O mérito do ato discricionário recai sobre motivo e objeto. Competência, finalidade e, em regra, forma são vinculados.",
      explicacaoErradas:
        "“Competência e forma” e “objeto e competência” tratam a competência como escolha, mas ela vem da lei. “Finalidade e forma” erra porque a finalidade é sempre o interesse público definido em lei. “Todos ficam livres” transforma discricionariedade em arbítrio.",
      pegadinha: "Discricionário não significa todo livre: parte do ato segue vinculada.",
      conhecimento:
        "O ato vinculado não tem mérito, pois a lei já escolheu motivo e objeto.",
    },
    {
      topico: "Imperatividade",
      subassunto: "Atos sem imperatividade",
      dificuldade: 4,
      raciocinio: "Sem obrigação imposta a terceiro, não há imperatividade.",
      enunciado:
        "A imperatividade permite à Administração impor obrigações sem a concordância do destinatário. Esse atributo não está presente na",
      alternativas: [
        "interdição de um estabelecimento que vende produto impróprio ao consumo",
        "aplicação de uma multa por infração administrativa a uma empresa de transporte",
        "ordem para retirar da via uma estrutura que impede a circulação",
        "emissão de certidão a pedido",
        "requisição de um bem particular para enfrentar uma situação de iminente perigo público",
      ],
      correta: 3,
      explicacao:
        "Certidão é ato enunciativo: só atesta um fato e não impõe obrigação. A imperatividade falta também nos atos que atendem a pedido do interessado, como licença e autorização.",
      explicacaoErradas:
        "“Interdição”, “multa”, “ordem para retirar” e “requisição” impõem deveres ou restrições ao particular, sem precisar da concordância dele.",
      pegadinha: "Nem todo ato tem todos os atributos; a presunção de legitimidade é a mais geral.",
      conhecimento:
        "A imperatividade também é chamada de poder extroverso, por atingir a esfera de terceiros.",
    },
    {
      topico: "Existência e eficácia",
      subassunto: "Perfeito, válido e eficaz",
      dificuldade: 5,
      raciocinio: "São três perguntas separadas: terminou? respeita a lei? pode produzir efeitos?",
      enunciado:
        "Uma portaria foi assinada e publicada, cumpriu todas as etapas e já está produzindo efeitos. Depois, descobre-se que quem assinou não tinha competência. Até ser anulada, essa portaria é",
      alternativas: [
        "imperfeita, inválida e ineficaz",
        "perfeita, válida e ineficaz, pois a incompetência só atinge os efeitos futuros do ato",
        "imperfeita, válida e eficaz, porque a formação depende de um agente competente para se completar",
        "perfeita, inválida e eficaz",
        "inexistente, sem qualquer efeito para terceiros de boa-fé, desde o dia em que foi publicada",
      ],
      correta: 3,
      explicacao:
        "O ato concluiu sua formação, então é perfeito. Tem vício de competência, então é inválido. Produz efeitos até ser desfeito, então é eficaz.",
      explicacaoErradas:
        "“Imperfeita” desconsidera que todas as etapas foram cumpridas. “Válida” ignora o vício de competência. “Ineficaz” contraria o enunciado, e o ato inválido produz efeitos até a anulação. “Inexistente” se aplica à usurpação de função, e não a todo agente incompetente.",
      pegadinha: "Inválido não significa sem efeito: enquanto não anulado, o ato vale pela presunção de legitimidade.",
      conhecimento:
        "O ato pendente é perfeito, mas ainda não eficaz, porque aguarda termo ou condição.",
    },
    {
      topico: "Classificação",
      subassunto: "Geral e individual",
      dificuldade: 4,
      raciocinio: "Conte se os destinatários estão identificados, não quantos são.",
      enunciado:
        "Uma portaria nomeia, pelo nome e um a um, 400 candidatos aprovados em concurso. Quanto aos destinatários, esse ato é",
      alternativas: [
        "geral, porque o número de pessoas alcançadas é elevado e isso lhe dá caráter normativo",
        "individual, pois os destinatários são determinados",
        "normativo, porque decorre de edital publicado para todos",
        "geral, porque foi publicado no Diário Oficial e pode ser conhecido por qualquer pessoa",
        "coletivo, categoria própria que não admite impugnação individual por parte dos nomeados",
      ],
      correta: 1,
      explicacao:
        "Ato individual tem destinatários certos, ainda que sejam muitos. Nesse caso, a doutrina fala em ato individual plúrimo. O ato geral alcança pessoas indeterminadas.",
      explicacaoErradas:
        "“Número de pessoas” e “caráter normativo” usam critério errado. “Decorre de edital” não torna normativa a nomeação. “Publicado no Diário Oficial” confunde publicidade com generalidade. “Coletivo” traz uma categoria inventada para o caso.",
      pegadinha: "Quantidade não muda a classificação.",
      conhecimento:
        "O ato geral prevalece sobre o individual e só pode ser impugnado de modo direto em controle concentrado.",
    },
    {
      topico: "Conceito indeterminado",
      subassunto: "Zonas de certeza",
      dificuldade: 5,
      raciocinio: "Margem de escolha só existe na zona de dúvida.",
      enunciado:
        "A lei permite punir “conduta escandalosa”. A autoridade enquadra nesse conceito o fato de um servidor ter usado, em dia de folga, uma camisa de time de futebol em local público. Levado o caso ao Judiciário,",
      alternativas: [
        "o juiz nada pode fazer, porque conceito indeterminado equivale a mérito administrativo",
        "o juiz pode trocar a punição por outra mais leve, se considerá-la mais adequada ao caso",
        "o juiz só pode examinar a competência de quem assinou",
        "o juiz pode anular, porque o fato cai na zona de certeza negativa do conceito",
        "o caso é decidido pelo Tribunal de Contas, a quem cabe controlar o mérito de todos os atos disciplinares",
      ],
      correta: 3,
      explicacao:
        "Conceitos indeterminados têm zona de certeza positiva, zona de certeza negativa e zona de dúvida. A margem de apreciação fica na zona de dúvida. Fora dela, a decisão é controlável como legalidade.",
      explicacaoErradas:
        "“Equivale a mérito” dá à Administração liberdade que ela não tem. “Trocar a punição” põe o juiz no lugar do administrador. “Só pode examinar a competência” limita demais o controle. “Tribunal de Contas” não controla o mérito disciplinar.",
      pegadinha: "Termo vago não blinda o ato contra o Judiciário.",
      conhecimento:
        "A discricionariedade pode nascer de termos como “poderá”, “a critério” ou de conceitos abertos na lei.",
    },
    {
      topico: "Silêncio",
      subassunto: "Silêncio administrativo",
      dificuldade: 5,
      raciocinio: "Sem lei dando sentido ao silêncio, ele não é sim nem não.",
      enunciado:
        "Uma empresa protocolou pedido em órgão federal e, mais de um ano depois, não teve resposta. Não há lei atribuindo efeito à falta de manifestação. Nessa situação,",
      alternativas: [
        "o pedido se considera deferido, pois quem cala consente, regra que vale para toda a Administração",
        "o pedido se considera negado, pois o silêncio é sempre um ato de indeferimento tácito",
        "a omissão não é ato, mas a empresa pode buscar no Judiciário uma ordem para que o órgão decida",
        "o juiz pode sempre substituir o órgão e deferir o pedido, mesmo em matéria discricionária",
        "só resta repetir o pedido, porque o dever de decidir não existe",
      ],
      correta: 2,
      explicacao:
        "O silêncio é fato administrativo e só gera efeito se a lei disser. A Lei 9.784 impõe o dever de decidir (art. 48), em até 30 dias depois de concluída a instrução, prorrogáveis por igual período (art. 49). Havendo omissão, cabe ordem judicial.",
      explicacaoErradas:
        "“Quem cala consente” e “sempre um ato de indeferimento” dão ao silêncio um sentido que só a lei pode dar. “Substituir o órgão” invade o mérito, pois em matéria discricionária o juiz manda decidir, sem decidir pelo órgão. “O dever de decidir não existe” contraria o art. 48.",
      pegadinha: "A lei pode dar efeito ao silêncio, positivo ou negativo. Sem ela, não há efeito.",
      conhecimento:
        "Em ato vinculado, com todos os requisitos cumpridos, parte da doutrina admite que o juiz supra a omissão.",
    },
    {
      topico: "Atos e fatos",
      subassunto: "Ato da Administração e fato administrativo",
      dificuldade: 4,
      raciocinio: "Separe conduta material, negócio privado e ato de direito público.",
      enunciado:
        "Três condutas de um órgão federal: lavar uma viatura, alugar um galpão como locatário em contrato regido pelo direito privado e aplicar sanção a um particular. Pela classificação usual, elas são, nessa ordem,",
      alternativas: [
        "ato administrativo nos três casos, pois todas são praticadas por agente público",
        "fato administrativo, ato de direito privado da Administração e ato administrativo",
        "ato de direito privado, fato administrativo e ato político",
        "fato jurídico, ato político e ato normativo",
        "ato administrativo, ato administrativo e fato jurídico natural, porque a sanção é um mero evento",
      ],
      correta: 1,
      explicacao:
        "Atividade material é fato administrativo. O contrato privado é ato da Administração, mas não ato administrativo em sentido estrito. A sanção é ato administrativo, sob regime de direito público.",
      explicacaoErradas:
        "“Ato administrativo nos três casos” ignora as diferenças. “Ato político” e “ato normativo” não descrevem locação nem sanção. “Mero evento” trata como fato natural uma manifestação de vontade.",
      pegadinha: "Nem todo ato da Administração é ato administrativo.",
      conhecimento:
        "Ato administrativo pode ser praticado também por concessionário no exercício de função delegada.",
    },
    {
      topico: "Vícios",
      subassunto: "Ato inexistente",
      dificuldade: 5,
      raciocinio: "Compare quem nunca foi agente com quem foi investido de forma irregular.",
      enunciado:
        "Uma pessoa sem nenhum vínculo com o Estado veste uniforme falso e lavra autos de infração na estrada. Em outro caso, um servidor com investidura irregular, mas com aparência de legalidade, atende ao público. Quanto aos atos praticados,",
      alternativas: [
        "todos são nulos, com os mesmos efeitos para quem recebeu os atos de boa-fé",
        "todos são válidos, porque a boa-fé do particular supre qualquer defeito de investidura",
        "o primeiro é inexistente, e os do segundo podem valer para terceiros de boa-fé",
        "o primeiro é anulável, e os do segundo são inexistentes, por faltar um agente regular",
        "o primeiro pode ser convalidado pela autoridade, já que tinha aparência de regularidade",
      ],
      correta: 2,
      explicacao:
        "Usurpação de função gera ato inexistente, que não se convalida. O agente de fato tem investidura irregular, e seus atos podem ser mantidos perante terceiros de boa-fé, pela teoria da aparência.",
      explicacaoErradas:
        "“Todos são nulos” e “todos são válidos” apagam a distinção. “Anulável” erra a gravidade dos dois casos, invertendo-os. “Pode ser convalidado” não cabe em ato de quem nunca foi agente.",
      pegadinha: "Usurpador não é agente de fato: o primeiro comete crime; o segundo exerce a função de modo irregular.",
      conhecimento:
        "A usurpação de função pública é crime previsto no art. 328 do Código Penal.",
    },
    {
      topico: "Forma",
      subassunto: "Forma não escrita",
      dificuldade: 4,
      raciocinio: "Regra escrita, com exceção para gestos e sinais.",
      enunciado:
        "Em um bloqueio, o agente faz sinal com o braço e ordena a parada de um veículo. O condutor alega que todo ato administrativo deve ser escrito e que a ordem não valeu. Essa alegação",
      alternativas: [
        "procede, porque a forma escrita é requisito absoluto de existência, sem qualquer exceção legal",
        "procede, salvo se a ordem for confirmada por escrito em até 24 horas",
        "é irrelevante, porque atos de trânsito não são administrativos",
        "não procede, pois a forma escrita é a regra, mas gestos e sinais podem expressar ato válido",
        "não procede, pois os atos administrativos nunca têm forma prevista nem exigida em lei",
      ],
      correta: 3,
      explicacao:
        "Em regra, o ato é escrito, mas há atos por gestos, apitos e sinais luminosos. A Lei 9.784, art. 22, diz que os atos do processo não dependem de forma determinada, salvo exigência legal.",
      explicacaoErradas:
        "“Requisito absoluto” e “em até 24 horas” criam exigências sem base. “Não são administrativos” está errado, pois fiscalização de trânsito é função administrativa. “Nunca têm forma” erra pelo excesso oposto: a lei pode exigir forma.",
      pegadinha: "Informalismo vale para o particular; a forma exigida em lei continua obrigatória.",
      conhecimento:
        "Forma e motivação andam juntas: a motivação integra a formalização do ato.",
    },
  ],
};
