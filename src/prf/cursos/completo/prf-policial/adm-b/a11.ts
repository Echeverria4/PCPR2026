import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-b-11",
  resumo: {
    ideia:
      "O Estado responde pelos danos que seus agentes causam, em regra sem discutir culpa. As dúvidas aparecem nas pontas: obra lícita, lei, decisão de juiz, cartório, multidão e prazo para cobrar.",
    itens: [
      {
        termo: "Evolução",
        faz: "Irresponsabilidade, teorias civilistas (atos de gestão, com culpa), culpa administrativa, risco administrativo (regra atual) e risco integral (exceções).",
        pista: "Do “o rei não erra” até a responsabilidade sem culpa.",
      },
      {
        termo: "Contratual x extracontratual",
        faz: "O art. 37, § 6º, trata do dano fora de contrato. Dano ligado a um contrato segue as regras do próprio contrato.",
      },
      {
        termo: "Ato lícito",
        faz: "Também gera dever de indenizar quando o dano é anormal e atinge pessoa específica.",
        pista: "Prejuízo comum a todos não se indeniza.",
      },
      {
        termo: "Lei",
        faz: "Em regra não gera indenização. Exceções: lei declarada inconstitucional e lei de efeitos concretos.",
      },
      {
        termo: "Ato de juiz",
        faz: "Em regra não gera indenização. A CF garante o caso de erro judiciário e o de prisão além do tempo da sentença.",
        pista: "Absolvição, sozinha, não torna ilegal a prisão preventiva regular.",
      },
      {
        termo: "Tabeliães",
        faz: "O Estado responde de forma objetiva e deve cobrar do tabelião quando houver dolo ou culpa (Tema 777).",
      },
      {
        termo: "Concurso cancelado",
        faz: "Prova anulada por indício de fraude: a banca privada responde, e o Estado só de forma subsidiária (Tema 512).",
      },
      {
        termo: "Multidão",
        faz: "Em regra o Estado não responde. Responde se foi avisado a tempo, podia agir e ficou omisso.",
      },
      {
        termo: "Regresso",
        faz: "O Estado paga a vítima e depois cobra do agente, provando dolo ou culpa.",
      },
      {
        termo: "Prazos",
        faz: "Vítima contra o Estado: 5 anos. Ilícito civil contra o erário prescreve (Tema 666). Ato doloso de improbidade: ressarcimento imprescritível (Tema 897).",
      },
    ],
    cuidado:
      "A vítima aciona o Estado, não o agente. A culpa do agente só importa depois, no regresso.",
  },
  questoes: [
    {
      topico: "Evolução",
      subassunto: "Teorias civilistas",
      dificuldade: 4,
      raciocinio:
        "Procure a etapa que separava atos de império e atos de gestão.",
      enunciado:
        "Em certa etapa da história da responsabilidade estatal, dizia-se que o Estado “responde por atos de gestão quando há culpa do agente, mas não por atos de império”. Essa frase resume",
      alternativas: [
        "a teoria da irresponsabilidade do Estado",
        "as teorias civilistas da responsabilidade",
        "a teoria da culpa do serviço",
        "a teoria do risco administrativo, sem culpa",
        "a teoria do risco integral",
      ],
      correta: 1,
      explicacao:
        "As teorias civilistas aplicaram ao Estado a lógica do direito privado. Nos atos de gestão, em que ele agia como um particular, respondia se houvesse culpa do agente. Nos atos de império, ficava de fora.",
      explicacaoErradas:
        "“Irresponsabilidade” negava o dever em qualquer caso, sem essa divisão. “Culpa do serviço” olha para a falha do serviço, e não para o tipo de ato. “Risco administrativo” dispensa a culpa e aceita excludentes. “Risco integral” nem aceita excludentes.",
      pegadinha:
        "Culpa do serviço e teorias civilistas falam de culpa, mas só a civilista separa gestão e império.",
      conhecimento:
        "A regra atual, o risco administrativo, está no art. 37, § 6º, da CF.",
    },
    {
      topico: "Ato lícito",
      subassunto: "Dano anormal e específico",
      dificuldade: 5,
      raciocinio:
        "Separe o incômodo comum a todos do prejuízo que recaiu sobre um só.",
      enunciado:
        "A duplicação de uma rodovia federal, feita conforme o projeto e sem nenhum erro, elevou o nível da pista. Os comércios do trecho perderam parte do movimento, como é comum em obras assim, mas uma única oficina ficou sem nenhum acesso de veículos e fechou. Sobre o pedido de indenização da oficina à União,",
      alternativas: [
        "não cabe, pois obra lícita feita no interesse público nunca gera dever de indenizar",
        "cabe também a todos os comércios do trecho, pois a obra mudou o movimento",
        "depende de prova de culpa do engenheiro que fez o projeto",
        "só cabe se a oficina provar falha na execução da obra",
        "cabe, pois a licitude não afasta o dever se o dano é anormal e específico",
      ],
      correta: 4,
      explicacao:
        "A responsabilidade objetiva alcança também o ato lícito, por causa da repartição dos encargos públicos. Quando uma só pessoa suporta um peso anormal em favor de todos, a sociedade deve compensá-la. A oficina perdeu todo o acesso, e esse dano é anormal e específico.",
      explicacaoErradas:
        "“Nunca gera dever” ignora a responsabilidade por ato lícito. “Todos os comércios” indeniza um prejuízo comum e normal da obra. “Culpa do engenheiro” e “falha na execução” trazem de volta uma culpa que a responsabilidade objetiva dispensa.",
      pegadinha:
        "Ser lícita não salva a obra. O que decide é a anormalidade e a especificidade do dano.",
      conhecimento:
        "No ato ilícito, basta o dano. No ato lícito, ele precisa ser anormal e específico.",
    },
    {
      topico: "Lei",
      subassunto: "Responsabilidade por ato legislativo",
      dificuldade: 4,
      raciocinio:
        "Lei geral e válida atinge todos por igual. O problema está na lei com vício.",
      enunciado:
        "Duas empresas de transporte pedem indenização à União por prejuízos causados por leis federais. A primeira foi atingida por lei geral e válida, que mudou as regras de todo o setor. A segunda sofreu com lei que o STF depois declarou inconstitucional. Em regra,",
      alternativas: [
        "só a segunda pode ter direito à indenização, pelo vício da lei",
        "as duas têm direito, porque a responsabilidade do Estado é objetiva",
        "nenhuma tem direito, porque a lei é ato soberano do Parlamento",
        "só a primeira pode ter direito, pois a lei válida segue produzindo dano",
        "as duas dependem de prova de dolo de quem votou a lei",
      ],
      correta: 0,
      explicacao:
        "A lei geral e válida não gera indenização, porque atinge todos do mesmo modo. A lei declarada inconstitucional é exceção: o dano vem de um ato que nunca deveria ter valido, e o atingido pode pedir reparação.",
      explicacaoErradas:
        "“Responsabilidade objetiva” não alcança a lei geral e válida. “Ato soberano” negaria também a exceção da lei inconstitucional. “Só a primeira” inverte a regra. “Dolo de quem votou” cria um requisito que não existe.",
      pegadinha:
        "A declaração de inconstitucionalidade é o ponto que abre a porta para indenizar.",
      conhecimento:
        "A lei de efeitos concretos é outra exceção: tem forma de lei, mas atinge pessoas determinadas, como um ato administrativo.",
    },
    {
      topico: "Ato de juiz",
      subassunto: "Prisão e erro judiciário",
      dificuldade: 5,
      raciocinio:
        "A CF cita o erro judiciário e a prisão além do tempo. Prisão regular com absolvição depois é outra coisa.",
      enunciado:
        "Um homem ficou 8 meses em prisão preventiva regularmente decretada e depois foi absolvido por falta de provas. Outro, condenado, cumpriu a pena e seguiu preso por 40 dias além do tempo fixado na sentença. Sobre o dever de indenizar, conforme a CF e a linha do STF,",
      alternativas: [
        "os dois têm direito, porque a liberdade foi retirada sem razão nos dois casos",
        "o primeiro tem direito automático, e o segundo depende de prova de dolo do juiz",
        "nenhum tem direito, porque ato de juiz não gera responsabilidade do Estado",
        "o segundo tem direito, e a simples absolvição do primeiro não gera indenização",
        "só quem for absolvido em revisão criminal tem direito",
      ],
      correta: 3,
      explicacao:
        "O art. 5º, LXXV, garante indenização ao condenado por erro judiciário e a quem fica preso além do tempo fixado na sentença. A prisão preventiva regular, seguida de absolvição, não gera indenização só por isso: é preciso ilegalidade ou erro na prisão.",
      explicacaoErradas:
        "“Os dois têm direito” transforma toda absolvição em erro. “Direito automático” inverte os casos. “Nenhum tem direito” ignora o texto expresso da CF. “Revisão criminal” deixaria de fora quem ficou preso além do tempo.",
      pegadinha:
        "Absolvição por falta de provas não prova que a prisão preventiva foi ilegal.",
      conhecimento:
        "A regra geral é que ato de juiz não gera indenização. O art. 5º, LXXV, é a exceção escrita na CF.",
    },
    {
      topico: "Tabeliães",
      subassunto: "Tema 777",
      dificuldade: 5,
      raciocinio:
        "Lembre quem paga primeiro e quem é cobrado depois.",
      enunciado:
        "Um tabelião reconheceu, por descuido, firma falsa em procuração usada para vender o veículo de um policial, que teve prejuízo. O policial processou o Estado. Segundo a tese do STF,",
      alternativas: [
        "só o tabelião responde, porque exerce a função em caráter privado",
        "o Estado responde só depois de esgotados os bens do tabelião, de forma subsidiária",
        "o Estado responde objetivamente e deve cobrar do tabelião, se houve dolo ou culpa",
        "o Estado só responde se a vítima provar culpa do tabelião",
        "o tabelião e o Estado respondem juntos, de forma solidária",
      ],
      correta: 2,
      explicacao:
        "No Tema 777 (RE 842.846), o STF decidiu que o Estado responde objetivamente pelos atos de tabeliães e registradores que causem dano a terceiros. Ele tem o dever de cobrar do responsável, em caso de dolo ou culpa, sob pena de improbidade.",
      explicacaoErradas:
        "“Só o tabelião” ignora a tese, porque a função é delegada pelo Estado. “De forma subsidiária” é a solução do concurso cancelado, não do cartório. “Provar culpa” torna subjetiva uma responsabilidade objetiva. “Forma solidária” não é o que o STF fixou.",
      pegadinha:
        "A culpa existe nessa história, mas só no regresso contra o tabelião.",
      conhecimento:
        "Pelo art. 22 da Lei 8.935/1994, o tabelião responde de forma pessoal e subjetiva, por dolo ou culpa.",
    },
    {
      topico: "Concurso cancelado",
      subassunto: "Tema 512",
      dificuldade: 5,
      raciocinio:
        "Esse é o caso em que a palavra “subsidiária” aparece na tese.",
      enunciado:
        "A prova de um concurso da PRF, aplicada por uma banca privada contratada, foi cancelada por indícios de fraude, e candidatos perderam os gastos com viagem e hospedagem. Pela tese do STF, quanto a esses danos materiais,",
      alternativas: [
        "só a União responde, porque o concurso é dela",
        "ninguém responde, porque o cancelamento protegeu a lisura do concurso",
        "a banca e a União respondem de forma solidária, à escolha do candidato",
        "a banca só responde com prova de culpa, e a União nunca responde",
        "a banca responde diretamente, e a União responde de forma subsidiária",
      ],
      correta: 4,
      explicacao:
        "No Tema 512 (RE 662.405), o STF fixou que o Estado responde subsidiariamente pelos danos materiais de candidatos em concurso organizado por pessoa jurídica de direito privado, quando a prova é cancelada por indícios de fraude. A banca, que presta o serviço, responde primeiro.",
      explicacaoErradas:
        "“Só a União” apaga a banca. “Ninguém responde” deixa o candidato sem reparação, embora o cancelamento seja legítimo. “Forma solidária” não é o que a tese diz. “União nunca responde” contraria a palavra subsidiária.",
      pegadinha:
        "Compare com o cartório: lá o Estado responde primeiro. Aqui, responde depois da banca.",
      conhecimento:
        "A banca privada que aplica concurso público presta serviço público e também está sob o art. 37, § 6º.",
    },
    {
      topico: "Multidão",
      subassunto: "Omissão do Estado",
      dificuldade: 4,
      raciocinio:
        "Ato de terceiros é a regra. A pergunta é se o Estado sabia e podia agir.",
      enunciado:
        "Um protesto em rodovia federal terminou com caminhões destruídos. Em um trecho, a multidão surgiu de repente, sem nenhum aviso às autoridades. Em outro, a polícia foi avisada horas antes, tinha como agir e nada fez. Sobre a responsabilidade do Estado pelos caminhões,",
      alternativas: [
        "responde nos dois casos, pois a segurança pública é dever do Estado",
        "só o segundo caso pode gerar responsabilidade, por omissão do Estado",
        "só o primeiro caso gera dever, porque o dano foi imprevisível",
        "não responde em nenhum, porque ato de terceiros sempre exclui o dever",
        "responde nos dois, mas só pela teoria do risco integral",
      ],
      correta: 1,
      explicacao:
        "Em regra, o Estado não responde por atos de multidão, pois o dano vem de terceiros. Responde quando foi avisado a tempo, tinha como evitar o dano e ficou omisso.",
      explicacaoErradas:
        "“Nos dois casos” faz do Estado um segurador universal. “Só o primeiro” inverte a lógica. “Sempre exclui” ignora a omissão do Estado avisado. “Risco integral” não se aplica a esse caso.",
      pegadinha:
        "O dever nasce do aviso somado à chance real de agir.",
      conhecimento:
        "Se os próprios agentes do Estado causam o dano ao conter a multidão, a análise é a da ação, não a da omissão.",
    },
    {
      topico: "Prazos",
      subassunto: "Regresso e ressarcimento",
      dificuldade: 5,
      raciocinio:
        "O STF separa o ilícito civil comum do ato doloso de improbidade.",
      enunciado:
        "Em 2014 um servidor causou dano a terceiro por culpa. A União indenizou a vítima em 2015 e só em 2026 entrou com a ação de regresso. Nesse mesmo ano, entrou com outra ação para reaver desvio feito em 2012 por outro servidor, ato doloso de improbidade. Segundo o STF,",
      alternativas: [
        "as duas estão prescritas, porque todo ilícito civil tem prazo",
        "as duas são imprescritíveis, porque o dano é ao erário",
        "a primeira é imprescritível, e a segunda já está prescrita",
        "a primeira está prescrita, e a segunda é imprescritível pelo dolo",
        "as duas seguem o prazo da ação de improbidade, contado do pagamento",
      ],
      correta: 3,
      explicacao:
        "O Tema 666 diz que a reparação à Fazenda por ilícito civil prescreve, e a culpa do primeiro servidor é esse caso. O Tema 897 diz que o ressarcimento por ato doloso de improbidade é imprescritível. Por isso a segunda ação não sofre com o tempo.",
      explicacaoErradas:
        "“As duas estão prescritas” ignora o Tema 897. “As duas são imprescritíveis” ignora o Tema 666. “A primeira é imprescritível” inverte os temas. “Prazo da ação de improbidade” confunde as sanções com o ressarcimento do dano doloso.",
      pegadinha:
        "O art. 37, § 5º, parece dizer que todo dano ao erário é imprescritível, mas o STF restringiu esse efeito.",
      conhecimento:
        "Na ação da vítima contra a Fazenda, o prazo é de 5 anos, pelo Decreto 20.910/1932, e não os 3 anos do Código Civil.",
    },
  ],
};
