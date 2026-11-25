import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "leg-a07",
  resumo: {
    ideia:
      "A Lei Maria da Penha (Lei 11.340/2006) protege a mulher da violência baseada no gênero dentro de casa, da família ou de uma relação de afeto. Ela traz medidas protetivas rápidas, tira os benefícios da Lei 9.099 e mudou bastante em 2026, com a monitoração eletrônica do agressor.",
    itens: [
      {
        termo: "O que é (arts. 5º e 40-A)",
        faz: "Ação ou omissão baseada no gênero que cause morte, lesão, sofrimento físico, sexual ou psicológico, dano moral ou patrimonial: na unidade doméstica (incluindo quem frequenta a casa de vez em quando), na família ou em qualquer relação íntima de afeto, mesmo sem morar junto. Vale qualquer que seja a orientação sexual, a causa da violência ou a condição de quem agride.",
        pista: "Súmula 600 do STJ: não se exige coabitação. A agressora também pode ser mulher.",
      },
      {
        termo: "Formas de violência (art. 7º)",
        faz: "Física, psicológica, sexual, patrimonial, moral e, desde 2026, vicária: a violência contra filhos, pais, dependentes, parentes ou pessoas da rede de apoio da mulher, feita para atingi-la.",
      },
      {
        termo: "Atendimento policial (arts. 10 a 12)",
        faz: "A polícia age de imediato. A mulher tem atendimento especializado, sem interrupção e de preferência por servidoras, sem contato com o agressor e sem repetir depoimentos à toa. A polícia garante proteção, leva ao hospital e ao IML, dá transporte a local seguro e acompanha a retirada dos pertences. O delegado manda ao juiz, em 48 horas, o pedido de medidas protetivas.",
      },
      {
        termo: "Afastamento imediato do lar (art. 12-C)",
        faz: "Havendo risco atual ou iminente à mulher ou aos dependentes, o agressor é afastado na hora: pelo juiz; pelo delegado, se o município não for sede de comarca; ou pelo policial, se também não houver delegado disponível. Nesses dois últimos casos, o juiz é avisado em até 24 horas e decide em igual prazo.",
        pista: "Se houver risco à mulher ou à medida protetiva, o preso não recebe liberdade provisória.",
      },
      {
        termo: "Monitoração eletrônica (arts. 12-D e 22, VIII, de 2026)",
        faz: "Com risco atual ou iminente, o agressor pode ir na hora para a tornozeleira: pelo juiz ou pelo delegado, se o município não for sede de comarca. A vítima recebe aplicativo ou aparelho que avisa a aproximação. Se o agressor romper a área proibida, o sistema alerta a vítima e a polícia ao mesmo tempo.",
        pista: "Tem prioridade quando já houve descumprimento ou há risco iminente; o juiz que não a aplicar deve explicar por quê.",
      },
      {
        termo: "Medidas protetivas: regras (arts. 18 e 19)",
        faz: "O juiz decide em 48 horas, a pedido da vítima ou do MP, e pode conceder de imediato, sem ouvir as partes nem o MP. Elas não dependem de o fato ser crime, de processo, de inquérito ou de boletim de ocorrência, e valem enquanto durar o risco.",
        pista: "Desde 2026, as medidas cíveis, como os alimentos, já valem como título executivo.",
      },
      {
        termo: "Medidas que obrigam o agressor (art. 22)",
        faz: "Suspender a posse ou restringir o porte de arma; afastar do lar; proibir aproximação e contato com a vítima, familiares e testemunhas, e a ida a certos lugares; restringir visitas aos filhos; pagar alimentos; frequentar programas de reeducação; acompanhamento psicossocial; monitoração eletrônica.",
      },
      {
        termo: "Medidas para a vítima (arts. 23 e 24)",
        faz: "Programa de proteção, volta ao lar depois do afastamento do agressor, saída do lar sem perder direitos, separação de corpos, matrícula dos filhos na escola mais próxima mesmo sem vaga e auxílio-aluguel por até 6 meses. Para os bens: devolução, proibição de vender o que é comum, suspensão de procurações e caução.",
      },
      {
        termo: "Descumprir medida protetiva (art. 24-A)",
        faz: "Reclusão de 2 a 5 anos e multa, seja o juiz da área cível ou criminal. No flagrante, só o juiz pode conceder fiança. Desde 2026, a pena aumenta de 1/3 até a metade se o agressor invadir a área monitorada ou mexer no aparelho sem autorização.",
      },
      {
        termo: "Representação e retratação (arts. 16 e 16-A)",
        faz: "Nos crimes que dependem de representação, a vítima só pode voltar atrás perante o juiz, em audiência própria, antes do recebimento da denúncia e ouvido o MP. Desde 2026, essa audiência só é marcada se a vítima disser que quer se retratar, e o prazo para representar ou oferecer queixa é de 12 meses.",
        pista: "Lesão corporal contra a mulher em violência doméstica: ação pública incondicionada (Súmula 542 do STJ).",
      },
      {
        termo: "O que não cabe (arts. 17 e 41)",
        faz: "A Lei 9.099 não se aplica, qualquer que seja a pena: nada de transação penal nem suspensão condicional do processo (Súmula 536 do STJ). Proibidas pena de cesta básica, prestação em dinheiro e multa isolada. Sem insignificância (Súmula 589). Crime ou contravenção com violência ou grave ameaça: sem troca por restritiva de direitos (Súmula 588).",
      },
      {
        termo: "Processo (arts. 14 a 27)",
        faz: "Juizados de Violência Doméstica com competência cível e criminal; o divórcio pode correr lá, a partilha de bens não. O nome da vítima fica em sigilo, mas não o do autor. Ela é avisada da prisão e da soltura do agressor e nunca entrega intimação a ele. Tem advogado em todos os atos, salvo para pedir medidas protetivas.",
      },
    ],
  },
  questoes: [
    {
      topico: "Conceito",
      subassunto: "Relação íntima de afeto",
      dificuldade: 4,
      raciocinio: "Art. 5º, III: qualquer relação íntima de afeto em que o agressor conviva ou tenha convivido com a ofendida, independentemente de coabitação. Súmula 600 do STJ.",
      enunciado: "Dois meses depois do fim do namoro, o ex-namorado agride Ana por ciúme. Os dois nunca moraram juntos e não têm filhos. Nesse caso,",
      alternativas: [
        "não se aplica a Lei Maria da Penha, porque eles nunca moraram juntos.",
        "não se aplica a lei, porque o namoro já tinha acabado na data da agressão.",
        "a Lei Maria da Penha só se aplicaria se houvesse filhos em comum do casal.",
        "aplica-se a Lei 9.099/1995, porque a agressão foi leve, com transação penal.",
        "aplica-se a Lei Maria da Penha, porque basta a relação íntima de afeto.",
      ],
      correta: 4,
      explicacao:
        "O art. 5º, III, alcança qualquer relação íntima de afeto em que o agressor conviva ou tenha convivido com a vítima, independentemente de coabitação. A Súmula 600 do STJ confirma que não é preciso morar junto. A agressão ligada ao namoro que acabou também entra.",
      explicacaoErradas:
        "A lei dispensa a coabitação. O fim do namoro não afasta a lei, porque basta ter havido a convivência afetiva. Filhos em comum não são exigidos. E a Lei 9.099 nunca se aplica aos crimes com violência doméstica contra a mulher (art. 41).",
      pegadinha: "Exigir que o casal more junto ou que a relação ainda exista.",
      conhecimento: "A relação também vale entre duas mulheres: a lei independe de orientação sexual.",
    },
    {
      topico: "Procedimento",
      subassunto: "Lei 9.099 e ação penal",
      dificuldade: 4,
      raciocinio: "Art. 41: não se aplica a Lei 9.099, qualquer que seja a pena; Súmula 536: sem transação nem suspensão condicional. Súmula 542: lesão corporal é ação pública incondicionada. Art. 17: sem cesta básica. Súmula 589: sem insignificância.",
      enunciado: "Sobre uma lesão corporal leve praticada pelo marido contra a esposa, no ambiente doméstico, é correto afirmar que",
      alternativas: [
        "a ação é pública incondicionada, sem transação nem suspensão do processo.",
        "a vítima pode desistir da ação até a sentença, desde que o faça em audiência.",
        "cabe transação penal, porque se trata de crime de menor potencial ofensivo.",
        "o juiz pode trocar a pena pelo pagamento de cestas básicas a uma instituição.",
        "cabe o princípio da insignificância se a lesão não deixou marcas na vítima.",
      ],
      correta: 0,
      explicacao:
        "A Súmula 542 do STJ diz que a ação penal no crime de lesão corporal com violência doméstica contra a mulher é pública incondicionada. E, pelo art. 41 e pela Súmula 536, não se aplicam os institutos da Lei 9.099, como a transação penal e a suspensão condicional do processo.",
      explicacaoErradas:
        "Por ser incondicionada, a ação não depende da vontade da vítima. A Lei 9.099 não se aplica, qualquer que seja a pena. O art. 17 proíbe pena de cesta básica. E a Súmula 589 afasta a insignificância nesses crimes.",
      pegadinha: "Achar que a lesão leve na violência doméstica depende de representação.",
      conhecimento: "Crime ou contravenção com violência ou grave ameaça contra a mulher em casa impede a troca da pena por restritiva de direitos (Súmula 588).",
    },
    {
      topico: "Procedimento",
      subassunto: "Audiência de retratação",
      dificuldade: 5,
      raciocinio: "Art. 16: renúncia à representação só perante o juiz, em audiência designada para isso, antes do recebimento da denúncia, ouvido o MP. Parágrafo único (Lei 15.380/2026): a audiência confirma a retratação, não a representação, e só é designada se a vítima manifestar o desejo de se retratar.",
      enunciado: "Em um crime da Lei Maria da Penha que depende de representação, o juiz marca, de rotina, uma audiência para perguntar à vítima se ela \"confirma a representação\". Pela redação atual do art. 16,",
      alternativas: [
        "a audiência deve ser marcada em todos os casos, para confirmar a representação.",
        "a retratação pode ser feita na delegacia, até a sentença, sem ouvir o MP.",
        "a retratação é proibida em qualquer crime da Lei Maria da Penha.",
        "a audiência só é marcada se a vítima quiser se retratar, antes da denúncia.",
        "a audiência serve para a vítima renovar a representação a cada 6 meses.",
      ],
      correta: 3,
      explicacao:
        "A Lei 15.380/2026 incluiu o parágrafo único do art. 16: a audiência serve para confirmar a retratação, não a representação, e só é marcada se a vítima manifestar, por escrito ou oralmente, o desejo de se retratar antes do recebimento da denúncia. A audiência de rotina contraria a lei.",
      explicacaoErradas:
        "A lei proíbe a audiência só para confirmar a representação. A retratação é feita perante o juiz, ouvido o MP, e antes do recebimento da denúncia, não até a sentença. Nos crimes condicionados, a retratação é possível. E não existe renovação periódica da representação.",
      pegadinha: "Achar que a audiência do art. 16 serve para a vítima confirmar a representação.",
      conhecimento: "Desde 2026, o prazo da vítima para representar ou oferecer queixa nesses crimes é de 12 meses (art. 16-A).",
    },
    {
      topico: "Atendimento policial",
      subassunto: "Afastamento do lar",
      dificuldade: 5,
      raciocinio: "Art. 12-C: afastamento imediato pelo juiz; pelo delegado se o município não for sede de comarca; pelo policial se não for sede de comarca e não houver delegado disponível. § 1º: juiz comunicado em 24h, decide em 24h e avisa o MP.",
      enunciado: "De madrugada, um policial militar atende uma ocorrência em um município que não é sede de comarca. Há risco iminente à vida da mulher, e não há delegado disponível. Quanto ao afastamento do agressor do lar,",
      alternativas: [
        "o policial deve esperar a decisão do juiz da comarca vizinha para agir.",
        "o próprio policial pode afastá-lo, e o juiz é avisado em até 24 horas.",
        "o policial pode afastá-lo, mas só com autorização prévia do MP local.",
        "só o delegado pode afastá-lo, mesmo que não esteja disponível na hora.",
        "o policial pode afastá-lo por 30 dias sem precisar avisar o juiz do caso.",
      ],
      correta: 1,
      explicacao:
        "O art. 12-C, III, permite que o policial afaste de imediato o agressor quando o município não for sede de comarca e não houver delegado disponível no momento da denúncia. O juiz deve ser comunicado em até 24 horas e decide, em igual prazo, se mantém ou revoga a medida, avisando o MP.",
      explicacaoErradas:
        "A lei existe justamente para não esperar o juiz quando há risco. O MP não autoriza a medida; ele é avisado. O delegado vem antes do policial, mas, se não estiver disponível, o policial age. E a comunicação ao juiz em 24 horas é obrigatória.",
      pegadinha: "Achar que só o juiz ou o delegado podem afastar o agressor do lar.",
      conhecimento: "Desde 2026, o risco pode ser à integridade física, sexual, psicológica, moral ou patrimonial.",
    },
    {
      topico: "Medidas protetivas",
      subassunto: "Descumprimento",
      dificuldade: 5,
      raciocinio: "Art. 24-A: reclusão de 2 a 5 anos e multa (Lei 14.994/2024). § 2º: no flagrante, só o juiz concede fiança. § 4º (Lei 15.383/2026): +1/3 até a metade se violar área de exclusão monitorada ou mexer no dispositivo.",
      enunciado: "Usando tornozeleira por ordem judicial, o agressor entra na área proibida e se aproxima da casa da vítima. Ele é preso em flagrante. Nesse caso, ele",
      alternativas: [
        "comete só desobediência (art. 330 do CP), e o delegado pode dar fiança.",
        "comete descumprimento de medida protetiva, e o delegado pode dar fiança.",
        "comete descumprimento, com pena aumentada, e só o juiz pode dar fiança.",
        "não comete crime, porque a medida foi dada por um juiz da área cível.",
        "comete descumprimento, com pena de 3 meses a 2 anos e transação penal.",
      ],
      correta: 2,
      explicacao:
        "O art. 24-A pune o descumprimento de medida protetiva com reclusão de 2 a 5 anos e multa. Pelo § 4º, incluído em 2026, a pena aumenta de 1/3 até a metade quando o agressor viola a área de exclusão monitorada. E, pelo § 2º, no flagrante só o juiz pode conceder fiança.",
      explicacaoErradas:
        "Há crime específico, que afasta a simples desobediência. O delegado não pode conceder fiança nesse crime. O crime existe seja o juiz da área cível ou criminal (§ 1º). E a pena atual é de 2 a 5 anos, sem a Lei 9.099.",
      pegadinha: "Achar que o delegado pode arbitrar a fiança, como em outros crimes.",
      conhecimento: "Retirar ou alterar o aparelho de monitoração sem autorização também gera o aumento do § 4º.",
    },
    {
      topico: "Medidas protetivas",
      subassunto: "Requisitos",
      dificuldade: 4,
      raciocinio: "Art. 19, § 1º: de imediato, sem audiência das partes nem manifestação do MP. § 5º: independem de tipificação penal, de ação, de inquérito ou de boletim. § 6º: vigoram enquanto persistir o risco. Caput: a pedido da ofendida ou do MP.",
      enunciado: "Sobre as medidas protetivas de urgência da Lei Maria da Penha, é correto afirmar que",
      alternativas: [
        "podem ser dadas sem boletim de ocorrência e valem enquanto durar o risco.",
        "dependem de inquérito aberto e duram no máximo 90 dias, renováveis uma vez.",
        "só podem ser pedidas pelo Ministério Público, e nunca pela própria vítima.",
        "exigem audiência prévia com o agressor, para garantir o contraditório.",
        "só podem ser dadas se a violência também for crime previsto no Código Penal.",
      ],
      correta: 0,
      explicacao:
        "Pelo art. 19, § 5º, as medidas são concedidas independentemente da tipificação penal, de ação penal ou cível, de inquérito ou de boletim de ocorrência. Pelo § 6º, vigoram enquanto persistir o risco à vítima ou aos dependentes.",
      explicacaoErradas:
        "Não há exigência de inquérito nem prazo fixo de 90 dias. A vítima pode pedir diretamente as medidas. O juiz pode concedê-las de imediato, sem ouvir as partes. E elas não dependem de o fato ser crime.",
      pegadinha: "Colocar prazo fixo ou exigir boletim de ocorrência para a medida protetiva.",
      conhecimento: "O juiz decide sobre as medidas em até 48 horas depois de receber o pedido (art. 18).",
    },
    {
      topico: "Conceito",
      subassunto: "Violência vicária",
      dificuldade: 4,
      raciocinio: "Art. 7º, VI (Lei 15.384/2026): violência vicária = qualquer violência contra descendente, ascendente, dependente, enteado, parente, pessoa sob guarda ou da rede de apoio da mulher, com vistas a atingi-la.",
      enunciado: "Para fazer a ex-companheira sofrer, um homem agride o filho dela, de 10 anos. Pela redação atual do art. 7º da Lei Maria da Penha, essa conduta é",
      alternativas: [
        "violência psicológica, apenas, porque a mulher não foi agredida.",
        "estranha à Lei Maria da Penha, porque a vítima direta foi o filho.",
        "violência patrimonial, porque o filho é dependente econômico dela.",
        "violência moral, porque o objetivo era humilhar a mulher perante todos.",
        "violência vicária, forma de violência contra a mulher criada em 2026.",
      ],
      correta: 4,
      explicacao:
        "A Lei 15.384/2026 incluiu o inciso VI no art. 7º: violência vicária é qualquer violência contra filhos, pais, dependentes, enteados, parentes, pessoas sob guarda ou da rede de apoio da mulher, praticada para atingi-la.",
      explicacaoErradas:
        "A lei agora tem uma forma própria para esse caso, além da violência psicológica. A agressão ao filho para atingir a mãe é violência contra a mulher. A violência patrimonial atinge bens e recursos. E a violência moral é a calúnia, a difamação ou a injúria.",
      pegadinha: "Achar que a lei só protege a mulher quando ela é a vítima direta.",
      conhecimento: "As formas do art. 7º são exemplos: a lista diz \"entre outras\".",
    },
    {
      topico: "Procedimento",
      subassunto: "Prazo para representar",
      dificuldade: 5,
      raciocinio: "Art. 16-A (Lei 15.438/2026): a ofendida decai do direito de queixa ou de representação se não o exercer em 12 meses, contados do dia em que soube quem é o autor. Regra geral do CP e do CPP: 6 meses.",
      enunciado: "Vítima de um crime que depende de representação, praticado no contexto de violência doméstica, Joana sabe quem é o autor desde o dia do fato. Oito meses depois, decide representar. Pela regra atual,",
      alternativas: [
        "ela não pode mais, porque o prazo de decadência é sempre de 6 meses.",
        "ela não pode mais, porque a representação deveria ser feita em 30 dias.",
        "ela ainda pode, porque nesses casos o prazo para representar é de 12 meses.",
        "ela ainda pode, porque nos crimes dessa lei não existe prazo para representar.",
        "ela não pode, porque a representação só vale no dia do boletim de ocorrência.",
      ],
      correta: 2,
      explicacao:
        "O art. 16-A, incluído em 2026, dá à vítima de violência doméstica 12 meses para oferecer queixa ou representação, contados do dia em que soube quem é o autor. Com oito meses, ela ainda está no prazo.",
      explicacaoErradas:
        "O prazo de 6 meses é a regra geral do CP e do CPP, afastada aqui pela lei especial. Não existe prazo de 30 dias. Há prazo, de 12 meses, e não ausência de prazo. E a representação não precisa ser feita no dia do boletim.",
      pegadinha: "Aplicar o prazo geral de 6 meses à vítima de violência doméstica.",
      conhecimento: "Na ação privada subsidiária, o prazo de 12 meses conta do fim do prazo para a denúncia.",
    },
    {
      topico: "Procedimento",
      subassunto: "Súmulas e vedações",
      dificuldade: 4,
      raciocinio: "I: Súmula 589. II: Súmula 588. III: art. 17. IV: errado; art. 5º, parágrafo único, e art. 40-A: a lei vale independentemente da orientação sexual e da condição do ofensor; a agressora pode ser mulher.",
      enunciado: "Sobre a Lei Maria da Penha e a jurisprudência do STJ, considere: I. não se aplica o princípio da insignificância aos crimes contra a mulher no âmbito doméstico; II. o crime com violência ou grave ameaça contra a mulher em casa impede a troca da pena por restritiva de direitos; III. é proibida a pena de cesta básica ou de multa isolada; IV. a lei só se aplica se o agressor for homem. Estão corretos",
      alternativas: [
        "I e II, apenas.",
        "I e III, apenas.",
        "II, III e IV, apenas.",
        "I, II e III, apenas.",
        "I, II, III e IV.",
      ],
      correta: 3,
      explicacao:
        "O item I é a Súmula 589 do STJ, o item II é a Súmula 588 e o item III é o art. 17 da lei.",
      explicacaoErradas:
        "O item IV está errado: o que importa é a violência baseada no gênero contra a mulher. A lei vale independentemente da orientação sexual (art. 5º, parágrafo único) e da condição do ofensor (art. 40-A), então a agressora também pode ser mulher.",
      pegadinha: "Achar que o agressor precisa ser homem.",
      conhecimento: "A Súmula 588 alcança também as contravenções penais, como as vias de fato.",
    },
    {
      topico: "Medidas protetivas",
      subassunto: "Monitoração eletrônica",
      dificuldade: 5,
      raciocinio: "Art. 12-D (Lei 15.383/2026): com risco atual ou iminente, monitoração eletrônica imediata pelo juiz ou pelo delegado, quando o município não for sede de comarca; juiz comunicado em 24h, decide em 24h. Diferente do art. 12-C, o policial não aparece.",
      enunciado: "Em um município que não é sede de comarca, o delegado atende uma mulher em risco iminente de ser agredida pelo ex-marido. Quanto à monitoração eletrônica do agressor,",
      alternativas: [
        "só o juiz pode determiná-la, mesmo em município que não é sede de comarca.",
        "o delegado pode determiná-la na hora, e o juiz decide em 24 horas se a mantém.",
        "o policial que atendeu a ocorrência pode instalar o aparelho por conta própria.",
        "ela só é possível depois da condenação definitiva do agressor pelo crime.",
        "o delegado pode determiná-la, mas é o MP que decide em 48 horas se a mantém.",
      ],
      correta: 1,
      explicacao:
        "O art. 12-D, incluído em 2026, permite que o delegado submeta de imediato o agressor à monitoração eletrônica quando o município não for sede de comarca. O juiz é comunicado em até 24 horas e decide, em igual prazo, se mantém ou revoga a medida, avisando o MP.",
      explicacaoErradas:
        "Em município sem comarca, o delegado também pode determinar a medida. O art. 12-D não dá esse poder ao policial, ao contrário do afastamento do lar. A monitoração é medida protetiva, não depende de condenação. E quem decide sobre ela é o juiz, não o MP.",
      pegadinha: "Estender ao policial a monitoração, que o art. 12-D só dá ao juiz e ao delegado.",
      conhecimento: "Se o agressor romper a área de exclusão, o sistema alerta a vítima e a polícia ao mesmo tempo.",
    },
  ],
};
