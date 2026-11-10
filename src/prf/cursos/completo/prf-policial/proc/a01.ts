import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "proc-01",
  resumo: {
    ideia:
      "A ação penal leva o caso ao juiz. Quem acusa depende do crime: o Ministério Público na ação pública, a vítima na ação privada. Antes dela, o MP pode arquivar ou propor o acordo de não persecução penal.",
    itens: [
      {
        termo: "Condições da ação",
        faz: "Legitimidade, interesse e possibilidade do pedido, além da justa causa (indícios de autoria e prova do crime). Sem elas, a denúncia é rejeitada (art. 395).",
      },
      {
        termo: "Rejeição da denúncia",
        faz: "Art. 395: peça manifestamente inepta, falta de pressuposto ou condição da ação, ou falta de justa causa.",
        pista: "Inepta é a peça que não descreve o fato (art. 41).",
      },
      {
        termo: "Pública incondicionada",
        faz: "Regra geral. Só o MP denuncia, sem depender da vontade da vítima, e não pode desistir (art. 42).",
      },
      {
        termo: "Pública condicionada",
        faz: "Depende de representação da vítima ou de requisição do Ministro da Justiça. A representação fica irretratável depois de oferecida a denúncia (art. 25).",
        pista: "Prazo de 6 meses; 12 meses na violência doméstica contra a mulher (art. 38).",
      },
      {
        termo: "Bens públicos",
        faz: "Art. 24, § 2º: crime contra patrimônio ou interesse da União, Estado ou Município é sempre de ação pública.",
      },
      {
        termo: "Arquivamento",
        faz: "O MP decide e comunica vítima, investigado e polícia (art. 28). O STF exige que a manifestação seja submetida ao juiz. A vítima pode pedir revisão em 30 dias.",
      },
      {
        termo: "Súmula 524 do STF",
        faz: "Arquivado o inquérito por falta de provas, a ação só começa com provas novas.",
      },
      {
        termo: "Ação privada",
        faz: "A vítima oferece queixa em 6 meses. A personalíssima só a vítima ajuíza, e hoje só existe no art. 236 do CP.",
      },
      {
        termo: "Subsidiária da pública",
        faz: "Cabe só se o MP ficar inerte no prazo (art. 29). O MP pode aditar, repudiar a queixa e oferecer denúncia substitutiva.",
        pista: "Se a vítima perde os 6 meses, o MP ainda pode denunciar.",
      },
      {
        termo: "Prazo da denúncia",
        faz: "Art. 46: 5 dias com réu preso e 15 dias com réu solto, contados do recebimento do inquérito.",
      },
      {
        termo: "Acordo de não persecução",
        faz: "Art. 28-A: crime sem violência ou grave ameaça, pena mínima inferior a 4 anos e confissão formal. Cumprido, extingue a punibilidade.",
        pista: "Não cabe para reincidente nem na violência doméstica.",
      },
      {
        termo: "Prazos processuais",
        faz: "Contínuos e peremptórios. Exclui-se o dia do começo e inclui-se o do vencimento (art. 798). Intimação na sexta: o prazo começa na segunda (Súmula 310 do STF).",
      },
      {
        termo: "Procedimento comum",
        faz: "Ordinário se a pena máxima for igual ou superior a 4 anos; sumário se inferior; sumaríssimo para menor potencial ofensivo (art. 394).",
      },
    ],
    cuidado:
      "A retratação da representação só vale até o oferecimento da denúncia. O recebimento pelo juiz é o marco da Lei Maria da Penha, não da regra geral.",
  },
  questoes: [
    {
      topico: "Ação penal",
      subassunto: "Rejeição da denúncia inepta",
      dificuldade: 4,
      raciocinio: "Em crime culposo, a denúncia precisa dizer em que consistiu a culpa.",
      enunciado:
        "Recebido o inquérito de um acidente com morte em rodovia federal, o Ministério Público oferece denúncia que só afirma que o acusado causou o acidente, sem descrever em que consistiu a imprudência. Segundo o CPP, o juiz deve",
      alternativas: [
        "receber a denúncia, pois a forma da culpa será esclarecida na instrução",
        "absolver sumariamente o acusado, por falta de prova do dolo",
        "rejeitar a denúncia por inépcia, pois falta a exposição do fato",
        "devolver os autos à autoridade policial para novo relatório",
        "receber a denúncia e mandar o MP aditar a peça em cinco dias",
      ],
      correta: 2,
      explicacao:
        "O art. 41 do CPP exige a exposição do fato criminoso com todas as suas circunstâncias. Em crime culposo, isso inclui a conduta imprudente, negligente ou imperita. Sem essa descrição, a peça é manifestamente inepta, e o art. 395, I, manda rejeitá-la.",
      explicacaoErradas:
        "“Esclarecida na instrução” inverte a lógica: a defesa precisa saber do que se defende desde o início. “Absolver sumariamente” é fase posterior, depois da resposta, e o crime nem é doloso. “Novo relatório” não é solução prevista: o relatório é da polícia, e a falha é da denúncia. “Aditar a peça em cinco dias” lembra o art. 384, que vale depois da instrução, para fato novo provado.",
      pegadinha: "Acidente de trânsito com morte não dispensa a descrição da culpa.",
      conhecimento:
        "Pelo art. 395, a denúncia também é rejeitada quando falta pressuposto processual, condição da ação ou justa causa.",
    },
    {
      topico: "Ação penal",
      subassunto: "Retratação da representação",
      dificuldade: 5,
      raciocinio: "A regra geral usa o oferecimento da denúncia, e não o recebimento.",
      enunciado:
        "Em crime de ação pública condicionada, fora de contexto de violência doméstica, a vítima procura a delegacia para desistir da representação. A denúncia já foi oferecida, mas o juiz ainda não a recebeu. A retratação",
      alternativas: [
        "não produz efeito, pois a representação já é irretratável",
        "vale, pois o limite é o recebimento da denúncia pelo juiz",
        "vale, desde que feita perante o juiz em audiência designada para isso",
        "vale até a sentença, pois o interesse em punir é da vítima",
        "depende da concordância do MP, que pode aceitá-la ou não",
      ],
      correta: 0,
      explicacao:
        "O art. 25 do CPP diz que a representação será irretratável depois de oferecida a denúncia. Como a peça já foi oferecida, a desistência da vítima não impede o processo, mesmo antes do recebimento.",
      explicacaoErradas:
        "“Recebimento da denúncia” é o marco da Lei Maria da Penha, não da regra geral. “Audiência designada para isso” também é regra da Lei Maria da Penha (art. 16), que o enunciado afastou. “Até a sentença” ignora o art. 25. “Concordância do MP” não existe: a lei fixa o momento, e não deixa a escolha ao promotor.",
      pegadinha: "Oferecer a denúncia (ato do MP) é diferente de recebê-la (ato do juiz).",
      conhecimento:
        "Na violência doméstica contra a mulher, o prazo para representar é de 12 meses (art. 38, § 2º, do CPP).",
    },
    {
      topico: "Ação penal",
      subassunto: "Crime contra bem público",
      dificuldade: 4,
      raciocinio: "O art. 24, § 2º, vale para qualquer crime.",
      enunciado:
        "Um crime que, pela regra do Código Penal, só se processa mediante queixa é cometido em detrimento do patrimônio de um município. Nesse caso, a ação penal",
      alternativas: [
        "segue privada, mas o próprio município pode oferecer a queixa",
        "continua privada, e o MP atua apenas como fiscal da ordem jurídica",
        "passa a ser pública condicionada à representação do prefeito",
        "passa a depender de requisição do Ministro da Justiça",
        "será pública, seja qual for o crime, por regra expressa do CPP",
      ],
      correta: 4,
      explicacao:
        "O art. 24, § 2º, do CPP determina que, seja qual for o crime, quando praticado em detrimento do patrimônio ou interesse da União, Estado ou Município, a ação penal será pública.",
      explicacaoErradas:
        "“Segue privada” e “continua privada” contrariam o texto do § 2º. “Representação do prefeito” cria condição que a lei não prevê. “Requisição do Ministro da Justiça” é exigida só nos casos expressos, como crime contra a honra do Presidente da República.",
      pegadinha: "A regra do Código Penal sobre queixa cede ao art. 24, § 2º, do CPP.",
      conhecimento:
        "Quando houver dano a bem público, o dano já é qualificado (art. 163, parágrafo único, III, do CP), e a ação também é pública.",
    },
    {
      topico: "Arquivamento",
      subassunto: "Art. 28 e decisão do STF",
      dificuldade: 5,
      raciocinio: "O STF manteve o controle do juiz sobre o arquivamento.",
      enunciado:
        "Concluído o inquérito, o Ministério Público decide arquivá-lo. Segundo o art. 28 do CPP, lido com a interpretação dada pelo STF em 2023, o membro do MP",
      alternativas: [
        "decide sozinho, e nem o juiz nem a vítima podem provocar revisão do ato",
        "submete a manifestação ao juiz e comunica vítima, investigado e polícia",
        "apenas requer ao juiz, que decide o arquivamento sem revisão ministerial",
        "arquiva e comunica só a vítima, que pode recorrer ao juiz em 30 dias",
        "depende da concordância da autoridade policial que presidiu o inquérito",
      ],
      correta: 1,
      explicacao:
        "O texto do art. 28 manda o MP comunicar a vítima, o investigado e a autoridade policial e enviar os autos à revisão ministerial. No julgamento das ADIs 6.298, 6.299, 6.300 e 6.305, o STF deu interpretação conforme: a manifestação de arquivamento é submetida ao juiz competente, que pode provocar a revisão no MP em caso de ilegalidade patente ou teratologia.",
      explicacaoErradas:
        "“Decide sozinho” ignora a vítima, que pode pedir revisão em 30 dias (§ 1º), e o controle do juiz. “Sem revisão ministerial” volta ao modelo antigo e apaga a instância de revisão. “Só a vítima” esquece investigado e polícia, e o pedido da vítima vai à instância do MP, não ao juiz. “Concordância da autoridade policial” não existe: a polícia não decide sobre a ação penal.",
      pegadinha: "O pedido da vítima vai à revisão do próprio MP, no prazo de 30 dias.",
      conhecimento:
        "Em crimes contra União, Estados e Municípios, a revisão pode ser provocada pela chefia do órgão que os representa em juízo (art. 28, § 2º).",
    },
    {
      topico: "Arquivamento",
      subassunto: "Súmula 524 do STF",
      dificuldade: 4,
      raciocinio: "Arquivamento por falta de provas não impede ação com provas novas.",
      enunciado:
        "Um inquérito sobre receptação de cargas foi arquivado por falta de provas da autoria. Meses depois, a PRF apreende o mesmo carregamento com documentos que ligam o investigado ao fato. Sobre a ação penal, é correto afirmar que",
      alternativas: [
        "está vedada, pois o arquivamento faz coisa julgada material",
        "só cabe se a vítima oferecer queixa subsidiária em seis meses",
        "pode ser proposta com as mesmas provas, por simples reavaliação",
        "pode ser iniciada, pois surgiram provas novas sobre a autoria",
        "só cabe se o arquivamento tiver sido por atipicidade do fato",
      ],
      correta: 3,
      explicacao:
        "Pela Súmula 524 do STF, arquivado o inquérito, a ação penal não pode ser iniciada sem novas provas. Com provas novas, ela pode começar. O art. 18 do CPP também permite novas pesquisas pela polícia se houver notícia de outras provas.",
      explicacaoErradas:
        "“Coisa julgada material” só ocorre em arquivamento por atipicidade ou por extinção da punibilidade, não por falta de provas. “Queixa subsidiária” exige inércia do MP, e arquivar não é inércia. “Mesmas provas” contraria a súmula. “Por atipicidade” inverte a regra: esse é o caso em que a ação fica vedada.",
      pegadinha: "Falta de provas permite reabrir; atipicidade, não.",
      conhecimento:
        "A prova nova precisa alterar o quadro que levou ao arquivamento, e não apenas repetir o que já se sabia.",
    },
    {
      topico: "Ação privada",
      subassunto: "Subsidiária e inércia",
      dificuldade: 5,
      raciocinio: "Requisitar diligências dentro do prazo não é inércia.",
      enunciado:
        "Em crime de ação pública, o MP recebe o inquérito com o investigado solto e, no décimo dia, requisita novas diligências à polícia. A vítima, insatisfeita, quer ajuizar queixa subsidiária. Nesse cenário, a queixa",
      alternativas: [
        "cabe, pois o MP não ofereceu a denúncia no prazo de cinco dias",
        "cabe, pois a vítima pode agir sempre que discordar do MP",
        "não cabe, pois a ação subsidiária pressupõe inércia completa do MP",
        "não cabe, pois só existe ação subsidiária em crime de ação privada",
        "cabe, desde que a vítima aguarde o fim do prazo de quinze dias",
      ],
      correta: 2,
      explicacao:
        "O art. 29 do CPP admite a ação privada subsidiária quando a ação pública não é intentada no prazo legal. Se o MP denuncia, arquiva ou requisita diligências, ele agiu, e não há inércia. Com o réu solto, o prazo é de 15 dias (art. 46), e a devolução do inquérito à polícia reinicia a contagem.",
      explicacaoErradas:
        "“Prazo de cinco dias” vale para réu preso. “Sempre que discordar” transforma a subsidiária em recurso contra o MP, o que ela não é. “Só existe em crime de ação privada” erra o conceito: a subsidiária nasce justamente de crime de ação pública. “Aguarde o fim do prazo” ignora que o prazo recomeça quando os autos voltam ao MP.",
      pegadinha: "Discordar do MP não é o mesmo que o MP ficar parado.",
      conhecimento:
        "O prazo da vítima para a subsidiária é de 6 meses, contados do fim do prazo do MP (art. 38).",
    },
    {
      topico: "Ação privada",
      subassunto: "Decadência imprópria",
      dificuldade: 5,
      raciocinio: "A vítima perde a chance, mas o crime continua sendo de ação pública.",
      enunciado:
        "O MP ficou inerte no prazo legal para denunciar um crime de ação pública. A vítima deixou passar seis meses sem ajuizar a queixa subsidiária. Quanto à punibilidade e à ação penal, é correto afirmar que",
      alternativas: [
        "a punibilidade se extinguiu pela decadência do direito de queixa da vítima",
        "a ação só pode ser proposta se a vítima pedir ao juiz um novo prazo",
        "o MP perde o direito de denunciar, pois o prazo já se esgotou",
        "a vítima ainda pode ajuizar a queixa até a prescrição do crime",
        "o MP ainda pode denunciar, e só a vítima perdeu o direito de agir",
      ],
      correta: 4,
      explicacao:
        "O fim dos 6 meses só retira da vítima a possibilidade da queixa subsidiária. O crime continua de ação pública, e o MP pode denunciar até a prescrição. Por isso se fala em decadência imprópria: não extingue a punibilidade.",
      explicacaoErradas:
        "“A punibilidade se extinguiu” vale para a ação privada exclusiva, não para a subsidiária. “Novo prazo” não existe no CPP. “O MP perde o direito” confunde prazo impróprio com prazo fatal: o atraso do MP não o impede de agir. “Até a prescrição” estende à vítima um prazo que já acabou.",
      pegadinha: "Na subsidiária, a decadência atinge a vítima, não a ação pública.",
      conhecimento:
        "Na ação privada exclusiva, a decadência extingue a punibilidade (art. 107, IV, do CP).",
    },
    {
      topico: "Acordo de não persecução penal",
      subassunto: "Requisitos e contrabando",
      dificuldade: 4,
      raciocinio: "Olhe violência, pena mínima, confissão e vedações.",
      enunciado:
        "A PRF flagra um motorista transportando cigarros contrabandeados (art. 334-A do CP, reclusão de 2 a 5 anos). Ele é primário, não recebeu benefícios antes e confessa formal e circunstanciadamente. Quanto ao acordo de não persecução penal, o MP",
      alternativas: [
        "pode propô-lo: não há violência e a pena mínima é inferior a quatro anos",
        "não pode propô-lo, pois o contrabando ofende interesse da União e exige processo",
        "não pode propô-lo, pois cabe antes a transação penal do Juizado Especial",
        "pode propô-lo só depois de recebida a denúncia, como suspensão do processo",
        "não pode propô-lo, pois a pena máxima do crime é superior a quatro anos",
      ],
      correta: 0,
      explicacao:
        "O art. 28-A exige infração sem violência ou grave ameaça, pena mínima inferior a 4 anos, confissão formal e circunstanciada e que o acordo seja necessário e suficiente. O contrabando tem pena mínima de 2 anos e não envolve violência, e o motorista não cai em nenhuma vedação do § 2º.",
      explicacaoErradas:
        "“Interesse da União” não é vedação ao acordo. “Transação penal” só cabe em menor potencial ofensivo, com pena máxima de até 2 anos, e aqui ela é de 5. “Depois de recebida a denúncia” descreve outro instituto: o acordo é anterior à ação. “Pena máxima” não é o critério: a lei olha a pena mínima.",
      pegadinha: "O acordo usa a pena mínima; a transação penal usa a máxima.",
      conhecimento:
        "O acordo é firmado por escrito pelo MP, pelo investigado e pelo defensor (art. 28-A, § 3º).",
    },
    {
      topico: "Acordo de não persecução penal",
      subassunto: "Causa de diminuição e reincidência",
      dificuldade: 5,
      raciocinio: "Calcule a pena mínima e depois confira as vedações do § 2º.",
      enunciado:
        "Um investigado responde por crime sem violência cuja pena mínima é de 4 anos, mas há uma causa de diminuição de um terço aplicável ao caso. Ele é reincidente por crime anterior que não foi insignificante. O acordo de não persecução penal",
      alternativas: [
        "cabe, porque a diminuição deixa a pena mínima abaixo de quatro anos",
        "não cabe, porque a pena mínima prevista no tipo é de quatro anos",
        "cabe, pois a reincidência só impede a transação penal e o sursis",
        "não cabe, pela reincidência, ainda que a pena fique abaixo do limite",
        "não cabe, pois causas de diminuição ficam fora do cálculo da pena",
      ],
      correta: 3,
      explicacao:
        "Pelo § 1º do art. 28-A, as causas de aumento e de diminuição entram no cálculo da pena mínima. Com a redução de um terço, ela cai abaixo de 4 anos. Mas o § 2º, II, veda o acordo para o reincidente, salvo se as infrações anteriores forem insignificantes.",
      explicacaoErradas:
        "“Cabe, porque a diminuição” acerta o cálculo, mas esquece a reincidência. “Pena mínima prevista no tipo” e “ficam fora do cálculo” contrariam o § 1º. “Só impede a transação penal” ignora a vedação expressa do § 2º, II.",
      pegadinha: "O cálculo da pena pode passar e a vedação, ainda assim, barrar o acordo.",
      conhecimento:
        "Também não cabe o acordo para quem foi beneficiado nos 5 anos anteriores por acordo, transação ou suspensão condicional do processo.",
    },
    {
      topico: "Acordo de não persecução penal",
      subassunto: "Recusa do MP",
      dificuldade: 4,
      raciocinio: "O CPP manda o caso a outra instância do próprio MP.",
      enunciado:
        "O MP se recusa a propor acordo de não persecução penal a um investigado que, segundo a defesa, preenche todos os requisitos. Conforme o CPP, o investigado pode",
      alternativas: [
        "pedir ao juiz que homologue o acordo mesmo sem a proposta do MP",
        "requerer que os autos sigam a órgão superior do Ministério Público",
        "impetrar mandado de segurança para obrigar o MP a firmar o acordo",
        "propor ele mesmo o acordo à vítima, que decide sobre o benefício",
        "recorrer em sentido estrito ao tribunal contra a recusa do promotor",
      ],
      correta: 1,
      explicacao:
        "O art. 28-A, § 14, prevê que, diante da recusa do MP, o investigado pode requerer a remessa dos autos a órgão superior, na forma do art. 28. A decisão continua dentro do Ministério Público.",
      explicacaoErradas:
        "“Homologue mesmo sem a proposta” faria o juiz substituir o MP, o que a lei não permite. “Mandado de segurança” não é o caminho previsto. “Propor à vítima” não tem base: o acordo é entre MP e investigado. “Recurso em sentido estrito” cabe contra decisões do juiz, não contra a recusa do promotor.",
      pegadinha: "O juiz homologa ou recusa o acordo, mas não o propõe.",
      conhecimento:
        "O juiz pode devolver os autos ao MP se achar as condições inadequadas, insuficientes ou abusivas (art. 28-A, § 5º).",
    },
    {
      topico: "Acordo de não persecução penal",
      subassunto: "Efeitos do acordo",
      dificuldade: 4,
      raciocinio: "O acordo cumprido encerra o caso sem condenação.",
      enunciado:
        "Sobre os efeitos do acordo de não persecução penal homologado pelo juiz, é correto afirmar que",
      alternativas: [
        "o seu cumprimento gera reincidência se o agente cometer novo crime",
        "o descumprimento leva o juiz a converter as condições em prisão",
        "cumprido o acordo, o juízo decreta a extinção da punibilidade",
        "a celebração consta da certidão de antecedentes para todos os fins",
        "o descumprimento obriga o MP a oferecer a suspensão do processo",
      ],
      correta: 2,
      explicacao:
        "O § 13 do art. 28-A diz que, cumprido integralmente o acordo, o juízo decreta a extinção da punibilidade. Não há condenação, por isso não há reincidência.",
      explicacaoErradas:
        "“Gera reincidência” é falso: não há sentença condenatória. “Converter em prisão” não existe: descumprido o acordo, o MP comunica o juiz para a rescisão e depois oferece denúncia (§ 10). “Para todos os fins” contraria o § 12, que só registra o acordo para impedir outro em 5 anos. “Obriga o MP” inverte o § 11: o descumprimento pode justificar não oferecer a suspensão.",
      pegadinha: "O registro do acordo serve só para barrar novo benefício em 5 anos.",
      conhecimento:
        "A vítima é intimada da homologação e do descumprimento do acordo (art. 28-A, § 9º).",
    },
    {
      topico: "Atos e prazos processuais",
      subassunto: "Intimação na sexta-feira",
      dificuldade: 5,
      raciocinio: "Exclua o dia do começo e aplique a Súmula 310 do STF.",
      enunciado:
        "A defesa é intimada numa sexta-feira de decisão sujeita a recurso com prazo de 5 dias. Não há feriados no período. Pelo CPP e pela Súmula 310 do STF, o prazo",
      alternativas: [
        "começa no sábado e vence na quarta-feira da semana seguinte",
        "começa na própria sexta e vence na terça-feira da semana seguinte",
        "fica suspenso no fim de semana e vence na quinta-feira seguinte",
        "só começa a correr depois da juntada do mandado aos autos",
        "começa na segunda-feira e vence na sexta-feira da mesma semana",
      ],
      correta: 4,
      explicacao:
        "O art. 798, § 1º, exclui o dia do começo. A Súmula 310 do STF diz que, se a intimação for na sexta, o prazo tem início na segunda-feira seguinte. Contando segunda, terça, quarta, quinta e sexta, os 5 dias vencem na sexta dessa semana.",
      explicacaoErradas:
        "“Começa no sábado” ignora a Súmula 310. “Na própria sexta” conta o dia do começo, vedado pelo § 1º. “Suspenso no fim de semana” contraria a regra de prazos contínuos (art. 798, caput). “Juntada do mandado” contraria a Súmula 710 do STF: no processo penal, o prazo corre da intimação.",
      pegadinha: "No processo penal, o prazo conta da intimação, não da juntada.",
      conhecimento:
        "Prazo que termina em domingo ou feriado é prorrogado até o dia útil seguinte (art. 798, § 3º).",
    },
    {
      topico: "Procedimento",
      subassunto: "Ordinário e sumário",
      dificuldade: 4,
      raciocinio: "Quatro anos de pena máxima já leva ao ordinário.",
      enunciado:
        "Um crime tem pena de reclusão de 1 a 4 anos e não há procedimento especial previsto. Pelo art. 394 do CPP, o processo segue o rito",
      alternativas: [
        "ordinário, já que a pena máxima é de quatro anos",
        "sumário, pois a pena máxima não passa de quatro anos",
        "sumaríssimo, pois a pena mínima é de apenas um ano",
        "sumário, pois a pena mínima é inferior a quatro anos",
        "ordinário só com réu preso; com réu solto, o sumário",
      ],
      correta: 0,
      explicacao:
        "O art. 394, § 1º, I, manda seguir o rito ordinário quando a sanção máxima for igual ou superior a 4 anos. O sumário é para pena máxima inferior a 4 anos, e o sumaríssimo, para menor potencial ofensivo.",
      explicacaoErradas:
        "“Não passa de quatro anos” inclui o próprio 4, que a lei põe no ordinário. “Pena mínima de um ano” e “pena mínima inferior” usam critério errado: vale a pena máxima. “Só com réu preso” cria distinção que o art. 394 não faz.",
      pegadinha: "Quatro anos exatos de pena máxima: rito ordinário.",
      conhecimento:
        "Menor potencial ofensivo é a infração com pena máxima de até 2 anos (Lei 9.099/1995, art. 61).",
    },
  ],
};
