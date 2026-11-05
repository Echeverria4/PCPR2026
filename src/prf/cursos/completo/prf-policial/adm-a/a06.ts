import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-06",
  resumo: {
    ideia:
      "Ato administrativo é a manifestação de vontade da Administração, sob regime público. Quem conhece seus elementos e atributos consegue dizer quando ele vale, quando pode ser corrigido e como termina.",
    itens: [
      {
        termo: "Elementos",
        faz: "Competência, finalidade, forma, motivo e objeto.",
      },
      {
        termo: "Atributos",
        faz: "Presunção de legitimidade, imperatividade, autoexecutoriedade e tipicidade.",
        pista: "Nem todo ato tem imperatividade ou autoexecutoriedade.",
      },
      {
        termo: "Motivo e motivação",
        faz: "Motivo é o fato que leva ao ato. Motivação é a explicação escrita dele.",
      },
      {
        termo: "Motivos determinantes",
        faz: "O motivo declarado prende o ato: se for falso, o ato é inválido.",
        pista: "Vale até quando não era preciso motivar.",
      },
      {
        termo: "Mérito",
        faz: "Juízo de conveniência e oportunidade, ligado ao motivo e ao objeto do ato discricionário.",
      },
      {
        termo: "Simples, complexo e composto",
        faz: "Complexo: vontades de órgãos diferentes formam um ato. Composto: um ato principal e um acessório.",
      },
      {
        termo: "Licença e autorização",
        faz: "Licença é vinculada. Autorização é discricionária e precária.",
      },
      {
        termo: "Anulação",
        faz: "Retira ato ilegal, com efeito retroativo. Pode vir da Administração ou do Judiciário.",
        pista: "O art. 54 da Lei 9.784 dá 5 anos, salvo má-fé, se houver efeito favorável.",
      },
      {
        termo: "Revogação",
        faz: "Retira ato válido por conveniência, sem retroagir. Só a Administração que fez o ato pode revogá-lo.",
      },
      {
        termo: "Convalidação",
        faz: "Corrige vício sanável, de competência ou forma, com efeito retroativo.",
      },
      {
        termo: "Cassação e caducidade",
        faz: "Cassação: o beneficiário descumpre as condições. Caducidade: uma nova norma torna o ato incompatível.",
      },
    ],
    cuidado: "Ato vinculado, ato consumado e direito adquirido não admitem revogação.",
  },
  questoes: [
    {
      topico: "Elementos",
      subassunto: "Motivos determinantes",
      dificuldade: 5,
      raciocinio: "Quem declarou o motivo fica preso a ele.",
      enunciado:
        "Um servidor em cargo em comissão é exonerado. Embora não precisasse, a autoridade escreveu como motivo a “falta de verba”. No mês seguinte, outra pessoa é nomeada para o mesmo cargo, e a verba existia. O ato é",
      alternativas: [
        "válido, pois a exoneração é livre e não pede motivo",
        "válido, pois a motivação desnecessária não tem efeito jurídico",
        "válido, se o nomeado tiver mais qualificação técnica",
        "inválido, pois o motivo declarado não era verdadeiro",
        "inválido, pois a exoneração em comissão sempre exige processo",
      ],
      correta: 3,
      explicacao: "Pela teoria dos motivos determinantes, o motivo declarado vincula o ato, mesmo quando não era obrigatório motivar. Sendo falso, o ato é inválido.",
      explicacaoErradas:
        "“livre” esquece que o motivo foi declarado. “não tem efeito jurídico” contraria a teoria. “mais qualificação” não muda o motivo escrito. “sempre exige processo” erra, pois a exoneração é livre.",
      pegadinha: "Achar que a exoneração livre salva qualquer motivo.",
      conhecimento: "A teoria alcança também os atos discricionários.",
    },
    {
      topico: "Vícios",
      subassunto: "Convalidação",
      dificuldade: 5,
      raciocinio: "Competência e forma são os vícios sanáveis, e nem sempre.",
      enunciado:
        "Um ato foi praticado por agente incompetente, em matéria que não era de competência exclusiva, sem lesão ao interesse público nem prejuízo a terceiros. Depois, a autoridade competente o confirma. Essa decisão",
      alternativas: [
        "é convalidação, e os efeitos do ato são preservados desde a origem",
        "é revogação, pois o ato anterior deixa de existir com efeito para o futuro",
        "é conversão, pois um ato se transforma em outro de espécie diferente",
        "é inválida, pois todo vício de competência é insanável",
        "é inválida, pois somente o Judiciário pode corrigir atos",
      ],
      correta: 0,
      explicacao: "O art. 55 da Lei 9.784/1999 permite convalidar defeitos sanáveis nessas condições. A ratificação tem efeito retroativo.",
      explicacaoErradas:
        "“revogação” retira ato válido. “conversão” muda a categoria do ato. “todo vício de competência” erra, pois a incompetência não exclusiva é sanável. “somente o Judiciário” esquece a autotutela.",
      pegadinha: "Dizer que a convalidação vale só para o futuro.",
      conhecimento: "Vícios de motivo, objeto e finalidade são, em regra, insanáveis.",
    },
    {
      topico: "Extinção",
      subassunto: "Decadência",
      dificuldade: 5,
      raciocinio: "Os 5 anos têm uma exceção: a má-fé.",
      enunciado:
        "A Administração descobre, seis anos depois, um ato ilegal que beneficiava um servidor que apresentou documento falso para obtê-lo. Pelo art. 54 da Lei 9.784/1999, o ato",
      alternativas: [
        "não pode ser anulado, pois o prazo decadencial já passou",
        "pode ser anulado, pois a má-fé afasta o prazo de 5 anos",
        "pode ser apenas revogado, por conveniência da Administração",
        "só pode ser anulado pelo Judiciário depois de cinco anos",
        "fica convalidado, pois passou o prazo de um quinquênio",
      ],
      correta: 1,
      explicacao: "O direito de anular atos favoráveis decai em cinco anos, salvo comprovada má-fé. O documento falso mostra má-fé do beneficiário.",
      explicacaoErradas:
        "“prazo decadencial já passou” ignora a ressalva. “revogado” não serve para ato ilegal. “só pelo Judiciário” não está na lei. “convalidado” é outra figura e não cabe na má-fé.",
      pegadinha: "Aplicar os cinco anos sem olhar a má-fé.",
      conhecimento: "O prazo também não alcança situações flagrantemente inconstitucionais, segundo o STF.",
    },
    {
      topico: "Classificação",
      subassunto: "Ato complexo",
      dificuldade: 5,
      raciocinio: "O TCU tem 5 anos, contados da chegada do processo a ele.",
      enunciado:
        "Uma aposentadoria concedida a servidor federal chega ao TCU para registro. Seis anos depois, sem julgamento, a Corte quer negar o registro. Segundo a tese do STF no Tema 445, o tribunal",
      alternativas: [
        "pode negar a qualquer tempo, pois o registro é ato complexo",
        "pode negar, desde que respeite o contraditório e a ampla defesa",
        "pode negar até dez anos depois, por causa do Código Civil",
        "deve primeiro pedir ao órgão de origem a anulação do ato",
        "não pode negar, pois se passou o prazo de cinco anos para julgar",
      ],
      correta: 4,
      explicacao: "A tese submete o Tribunal de Contas ao prazo de cinco anos para julgar a concessão inicial, a contar da chegada do processo à Corte.",
      explicacaoErradas:
        "“qualquer tempo” contraria a tese. “contraditório e a ampla defesa” não resolve o prazo. “dez anos” não existe na tese. “órgão de origem” não muda a perda do prazo.",
      pegadinha: "Contar o prazo da data da aposentadoria.",
      conhecimento: "A Súmula Vinculante 3 ressalva a apreciação da legalidade da concessão inicial.",
    },
    {
      topico: "Espécies",
      subassunto: "Licença e autorização",
      dificuldade: 4,
      raciocinio: "Cumpriu os requisitos, tem direito à licença.",
      enunciado:
        "Uma pessoa preenche todos os requisitos legais para dirigir e pede a habilitação. Em outro caso, um comerciante pede uso temporário de um espaço público para um evento. Em regra, esses atos têm natureza, respectivamente, de",
      alternativas: [
        "autorização e licença, ambas discricionárias",
        "permissão e concessão, ambas contratuais",
        "licença vinculada e autorização discricionária",
        "autorização vinculada e licença discricionária",
        "licença discricionária e admissão vinculada",
      ],
      correta: 2,
      explicacao: "A licença é vinculada e reconhece um direito de quem cumpre os requisitos. A autorização de uso é discricionária e precária.",
      explicacaoErradas:
        "“ambas discricionárias” erra a licença. “contratuais” não descreve o caso. “autorização vinculada” inverte os conceitos. “licença discricionária” contraria a natureza da licença.",
      pegadinha: "Trocar licença por autorização.",
      conhecimento: "A licença para construir é outro exemplo clássico de ato vinculado.",
    },
    {
      topico: "Extinção",
      subassunto: "Cassação e caducidade",
      dificuldade: 5,
      raciocinio: "Se a culpa é do beneficiário, é cassação. Se a causa é a lei nova, é caducidade.",
      enunciado:
        "Uma licença de funcionamento foi extinta porque uma lei nova proibiu aquela atividade no local. Outra foi extinta porque o titular descumpriu as condições impostas. Esses casos são, respectivamente, de",
      alternativas: [
        "cassação e caducidade",
        "caducidade e contraposição",
        "revogação e anulação",
        "caducidade e cassação",
        "anulação e renúncia",
      ],
      correta: 3,
      explicacao: "Caducidade decorre de norma nova que torna o ato incompatível. Cassação decorre do descumprimento das condições pelo beneficiário.",
      explicacaoErradas:
        "“cassação e caducidade” inverte. “contraposição” exige um novo ato de efeitos opostos. “revogação” e “anulação” têm outro fundamento. “renúncia” é a saída voluntária do titular.",
      pegadinha: "Trocar as duas extinções por fato posterior.",
      conhecimento: "A renúncia alcança atos ampliativos de direitos.",
    },
    {
      topico: "Atributos",
      subassunto: "Presunção de legitimidade",
      dificuldade: 4,
      raciocinio: "A presunção é relativa e inverte o ônus de provar.",
      enunciado:
        "Um condutor autuado afirma que a infração não existiu, mas não apresenta nenhuma prova. Quanto ao atributo da presunção de legitimidade e veracidade do auto de infração, é correto afirmar que",
      alternativas: [
        "é presunção absoluta, sem admitir prova em sentido contrário",
        "existe só depois da confirmação pela autoridade superior",
        "é relativa, e quem alega deve provar que o ato é irregular",
        "afasta o direito do condutor de recorrer ao Poder Judiciário",
        "só existe em atos praticados pelo Poder Executivo federal",
      ],
      correta: 2,
      explicacao: "A presunção é relativa, ou seja, admite prova contrária, e transfere ao interessado o ônus de demonstrar o vício.",
      explicacaoErradas:
        "“absoluta” erra a natureza. “depois da confirmação” contraria o atributo, que nasce com o ato. “afasta o direito” esquece o art. 5º, XXXV. “Poder Executivo federal” limita demais.",
      pegadinha: "Tratar a presunção como absoluta.",
      conhecimento: "É o único atributo presente em todos os atos administrativos, para a doutrina tradicional.",
    },
    {
      topico: "Extinção",
      subassunto: "Revogação",
      dificuldade: 5,
      raciocinio: "Revogação não alcança o que já se consumou nem o vinculado.",
      enunciado:
        "Considere uma licença regularmente concedida, ato vinculado, uma certidão já emitida e uma autorização de uso ainda em vigor. Em regra, pode ser revogada por conveniência",
      alternativas: [
        "só a autorização de uso",
        "só a licença, por ser definitiva",
        "as três, pela autotutela",
        "só a certidão, pois é ato simples",
        "a licença e a autorização, por serem negociais",
      ],
      correta: 0,
      explicacao: "A autorização é discricionária e precária. A licença vinculada não se revoga, e a certidão é ato enunciativo, que não admite revogação.",
      explicacaoErradas:
        "“só a licença” e “a licença e a autorização” erram por incluir ato vinculado. “as três” ignora os limites. “só a certidão” esquece que ato enunciativo não produz efeito próprio a revogar.",
      pegadinha: "Achar que autotutela permite revogar qualquer ato.",
      conhecimento: "A revogação produz efeitos só para o futuro e respeita direitos adquiridos.",
    },
  ],
};
