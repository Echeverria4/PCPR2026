import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "etica-02",
  resumo: {
    ideia:
      "O Decreto 1.171/1994 é o Código de Ética do servidor do Poder Executivo Federal. Ele pede mais que legalidade: pede honestidade, atenção ao bem comum e respeito a quem usa o serviço.",
    itens: [
      {
        termo: "Alcance",
        faz: "Poder Executivo Federal. Não alcança o Judiciário, o Legislativo, os Estados, o DF nem os Municípios.",
      },
      {
        termo: "Conceito de servidor",
        faz: "Amplo: serviço permanente, temporário ou excepcional, mesmo sem remuneração.",
      },
      {
        termo: "Escolha principal",
        faz: "Além de legal ou ilegal, o servidor decide principalmente entre honesto e desonesto.",
      },
      {
        termo: "Moralidade",
        faz: "O fim é sempre o bem comum. Ela nasce do equilíbrio entre legalidade e finalidade.",
      },
      {
        termo: "Vida privada",
        faz: "Pode aumentar ou diminuir o bom conceito do servidor na vida funcional.",
      },
      {
        termo: "Publicidade",
        faz: "É requisito de eficácia e moralidade, salvo segurança nacional, investigações policiais ou interesse superior do Estado.",
        pista: "A exceção exige processo previamente declarado sigiloso.",
      },
      {
        termo: "Dano moral",
        faz: "Tratar mal o usuário, formar filas e atrasar o serviço causam dano moral.",
      },
      {
        termo: "Comissão de Ética",
        faz: "Orienta, aconselha e examina condutas. Fornece registros para instruir promoções.",
      },
      {
        termo: "Pena",
        faz: "Só censura, em parecer assinado por todos os integrantes e com ciência do faltoso.",
      },
    ],
    cuidado:
      "A finalidade conta: agir com fim estranho ao interesse público é vedado mesmo que todas as formalidades legais tenham sido cumpridas.",
  },
  questoes: [
    {
      topico: "Alcance do Código",
      subassunto: "Conceito de servidor",
      dificuldade: 5,
      raciocinio: "O conceito do Código é mais amplo que o da Lei 8.112.",
      enunciado:
        "Uma estudante faz serviço voluntário, sem remuneração, em um órgão federal, por meio de um termo de adesão, e divulga dado interno a um amigo. Para fins de apuração ética pelo Decreto 1.171/1994, ela",
      alternativas: [
        "fica fora do Código, pois não recebe nenhuma retribuição financeira",
        "fica fora do Código, pois só servidor estável responde por ética",
        "responde apenas na esfera civil, pois não tem cargo público",
        "é alcançada, pois presta serviço ao órgão, mesmo sem remuneração",
        "é alcançada somente depois de assinar contrato de trabalho",
      ],
      correta: 3,
      explicacao:
        "Para o Código, servidor é quem presta serviço permanente, temporário ou excepcional, “ainda que sem retribuição financeira”, por lei, contrato ou qualquer ato jurídico.",
      explicacaoErradas:
        "“não recebe nenhuma retribuição” é justamente o que o Código dispensa. “servidor estável” restringe sem base. “apenas na esfera civil” ignora o conceito amplo. “contrato de trabalho” falha porque basta qualquer ato jurídico.",
      pegadinha: "Usar o conceito de servidor da Lei 8.112.",
      conhecimento: "O conceito alcança também autarquias, fundações, empresas públicas e sociedades de economia mista.",
    },
    {
      topico: "Regras deontológicas",
      subassunto: "Legalidade e finalidade",
      dificuldade: 5,
      raciocinio: "Ato formalmente perfeito ainda pode falhar na finalidade.",
      enunciado:
        "Um chefe, seguindo todas as formalidades, remove de setor um colega só porque ele o criticou em uma reunião. À luz do Decreto 1.171/1994, a conduta",
      alternativas: [
        "é ética, pois nenhuma lei foi expressamente violada no ato",
        "é ética, pois a remoção está entre as atribuições do chefe",
        "fere o Código, pois a finalidade é estranha ao interesse público",
        "só fere o Código se o colega comprovar prejuízo financeiro com a remoção",
        "só pode ser avaliada pela Comissão se for crime funcional",
      ],
      correta: 2,
      explicacao:
        "O servidor deve abster-se de exercer sua função com fim estranho ao interesse público, “mesmo que observando as formalidades legais”.",
      explicacaoErradas:
        "“nenhuma lei foi expressamente violada” e “entre as atribuições do chefe” olham só a forma. “prejuízo financeiro” não é exigido. “crime funcional” confunde ética com esfera penal.",
      pegadinha: "Achar que ato legal é sempre ético.",
      conhecimento: "A moralidade nasce do equilíbrio entre legalidade e finalidade.",
    },
    {
      topico: "Regras deontológicas",
      subassunto: "Vida privada",
      dificuldade: 4,
      raciocinio: "A função pública se integra à vida particular.",
      enunciado:
        "Fora do serviço, um policial se envolve com frequência em confusões em bares, sem que haja processo criminal. Para o Código de Ética, esses fatos",
      alternativas: [
        "podem diminuir o bom conceito dele na vida funcional",
        "não têm relevância, pois ocorrem fora do horário de trabalho",
        "só importam quando há condenação penal transitada em julgado",
        "só importam se ele estava de uniforme nas ocasiões citadas",
        "são protegidos pela intimidade e não podem ser apreciados",
      ],
      correta: 0,
      explicacao:
        "A função pública se integra à vida particular. Os fatos da vida privada podem acrescer ou diminuir o bom conceito funcional.",
      explicacaoErradas:
        "“fora do horário de trabalho” ignora que os valores valem também fora do cargo. “condenação penal” e “de uniforme” criam exigências que não existem. “protegidos pela intimidade” exagera, pois o Código admite esse efeito.",
      pegadinha: "Separar por completo a vida pessoal da função.",
      conhecimento: "Os primados éticos valem “no exercício do cargo ou função, ou fora dele”.",
    },
    {
      topico: "Regras deontológicas",
      subassunto: "Publicidade e verdade",
      dificuldade: 5,
      raciocinio: "Sigilo depende de hipótese e de declaração prévia no processo.",
      enunciado:
        "Um cidadão pede informação sobre um ato administrativo comum, sem processo sigiloso, e o servidor nega porque o dado expõe um erro do setor. Pelo Código de Ética, a negativa",
      alternativas: [
        "é válida, pois o servidor deve preservar a imagem do órgão",
        "é válida, pois o interesse da Administração sempre prevalece",
        "gera comprometimento ético, imputável a quem negou a publicidade",
        "só é irregular quando o erro já tiver causado dano ao cidadão",
        "cabe ao chefe, e por isso não gera nenhum efeito ético para o servidor",
      ],
      correta: 2,
      explicacao:
        "A publicidade é requisito de eficácia e moralidade. Sem hipótese de sigilo, sua omissão é comprometimento ético imputável a quem a negar. O servidor também não pode omitir a verdade, mesmo contrária à Administração.",
      explicacaoErradas:
        "“preservar a imagem do órgão” não autoriza esconder erro. “sempre prevalece” exagera: só o interesse superior, em processo previamente declarado sigiloso. “dano ao cidadão” não é requisito. “cabe ao chefe” afasta uma imputação que o Código faz a quem nega.",
      pegadinha: "Achar que o interesse da Administração autoriza esconder a verdade.",
      conhecimento: "As exceções são segurança nacional, investigações policiais e interesse superior do Estado e da Administração.",
    },
    {
      topico: "Deveres",
      subassunto: "Hierarquia e pressões",
      dificuldade: 5,
      raciocinio: "Respeito à hierarquia não é silêncio.",
      enunciado:
        "Um superior pressiona um policial a alterar o horário de uma autuação para favorecer um conhecido. Segundo o Decreto 1.171/1994, o dever do policial é",
      alternativas: [
        "cumprir a ordem e registrar a própria discordância por escrito",
        "pedir remoção do setor, para evitar conflito com a hierarquia",
        "aguardar um pedido por escrito antes de tomar qualquer atitude",
        "resolver o caso com o colega, por espírito de solidariedade",
        "resistir à pressão e denunciá-la, sem temor de representar",
      ],
      correta: 4,
      explicacao:
        "São deveres resistir às pressões de superiores que busquem vantagens indevidas e denunciá-las. O respeito à hierarquia vem “sem nenhum temor de representar”.",
      explicacaoErradas:
        "“cumprir a ordem” aceita uma ordem imoral. “pedir remoção” foge do dever de denunciar. “pedido por escrito” cria condição inexistente. “espírito de solidariedade” lembra uma conivência vedada.",
      pegadinha: "Achar que hierarquia obriga a cumprir qualquer ordem.",
      conhecimento: "O dever é comunicar ao superior atos contrários ao interesse público, exigindo providências.",
    },
    {
      topico: "Vedações",
      subassunto: "Embriaguez e informação privilegiada",
      dificuldade: 5,
      raciocinio: "Leia a palavra “habitualmente” com atenção.",
      enunciado:
        "De acordo com as vedações do Código de Ética, a conduta vedada entre as abaixo é",
      alternativas: [
        "beber em um único jantar de família, sem relação com o serviço",
        "apresentar-se embriagado fora do serviço de modo habitual",
        "ser filiado a uma associação profissional ligada à carreira",
        "pedir a um colega uma opinião sobre um relatório do setor",
        "levar à chefia um erro cometido por um colega de trabalho",
      ],
      correta: 1,
      explicacao:
        "É vedado apresentar-se embriagado no serviço ou, fora dele, habitualmente. Um fato isolado fora do serviço não entra nessa regra.",
      explicacaoErradas:
        "“único jantar” não tem habitualidade nem relação com o serviço. “associação profissional” é conduta lícita. “opinião sobre um relatório” é colaboração. “levar à chefia um erro” é dever, e a conivência é que é vedada.",
      pegadinha: "Ignorar a palavra “habitualmente”.",
      conhecimento: "No serviço, basta uma vez. Fora dele, é preciso habitualidade.",
    },
    {
      topico: "Atendimento ao usuário",
      subassunto: "Dano moral",
      dificuldade: 4,
      raciocinio: "O Código trata atrasos como algo maior que falta de educação.",
      enunciado:
        "Um servidor deixa formar uma longa fila em um posto de atendimento porque resolveu reorganizar sua mesa. Para o Código de Ética, essa situação caracteriza principalmente",
      alternativas: [
        "mera falha de organização, sem relevância na esfera ética",
        "ato de improbidade, com perda automática do cargo público",
        "crime contra a Administração, a ser levado à Comissão de Ética",
        "grave dano moral aos usuários dos serviços públicos",
        "infração disciplinar punida apenas com advertência escrita",
      ],
      correta: 3,
      explicacao:
        "Permitir longas filas ou atrasos não é só falta ética ou ato de desumanidade, mas “principalmente grave dano moral aos usuários”.",
      explicacaoErradas:
        "“mera falha de organização” minimiza o que o Código condena. “improbidade” e “crime” mudam de esfera sem base no caso. “apenas com advertência” erra, pois a pena aplicada pela Comissão é a censura.",
      pegadinha: "Achar que o Código só trata de corrupção.",
      conhecimento: "Tratar mal quem paga tributos também é dano moral.",
    },
    {
      topico: "Comissão de Ética",
      subassunto: "Pena e registros",
      dificuldade: 5,
      raciocinio: "Só existe uma pena, e ela segue um rito simples.",
      enunciado:
        "A Comissão de Ética de um órgão federal conclui que um servidor violou o Código. Pelo Decreto 1.171/1994, ela aplicará",
      alternativas: [
        "censura, em parecer assinado por todos os integrantes, com ciência do faltoso",
        "advertência ou suspensão, conforme a gravidade da conduta apurada",
        "censura, em parecer assinado só pelo presidente da Comissão, sem ciência do faltoso",
        "demissão, desde que por decisão unânime dos integrantes da Comissão",
        "multa proporcional à remuneração, em parecer enviado ao dirigente",
      ],
      correta: 0,
      explicacao:
        "A pena é a censura. O fundamento fica no parecer, assinado por todos os integrantes, com ciência do faltoso.",
      explicacaoErradas:
        "“advertência ou suspensão” são penas da Lei 8.112. “só pelo presidente” contraria a assinatura de todos. “demissão” não cabe à Comissão. “multa” não existe no Código.",
      pegadinha: "Misturar a censura ética com penas disciplinares.",
      conhecimento: "Os registros da Comissão podem instruir promoções e outros procedimentos da carreira.",
    },
  ],
};
