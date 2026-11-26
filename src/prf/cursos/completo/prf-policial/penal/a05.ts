import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-05",
  resumo: {
    ideia:
      "A aula trata da extinção da punibilidade: quando o Estado perde o direito de punir, mesmo que o crime tenha existido. Vê as causas do art. 107 do CP (morte, anistia, graça, indulto, abolitio criminis, decadência, perempção, renúncia, perdão, retratação e perdão judicial), outras causas espalhadas pela lei e, em detalhe, a prescrição: prazos, redução, início, interrupção, suspensão e as modalidades (punitiva, superveniente, retroativa e executória).",
    itens: [
      {
        parte: "1. Noções de extinção da punibilidade",
        termo: "Conceito e rol do art. 107",
        faz: "Punibilidade é a possibilidade de o Estado aplicar a pena. Certos fatos a extinguem: o crime continua tendo existido, mas não pode mais ser punido. O rol do art. 107 é exemplificativo: há outras causas no CP e em leis especiais.",
      },
      {
        termo: "Art. 108",
        faz: "A extinção da punibilidade de um crime que é pressuposto, elemento ou agravante de outro não se estende a este (ex.: prescrito o furto, a receptação continua punível). Nos crimes conexos, a extinção de um não impede a agravação da pena do outro pela conexão.",
      },
      {
        parte: "2. Morte, clemência do Estado e abolitio criminis",
        termo: "Morte do agente (art. 107, I)",
        faz: "Extingue a punibilidade porque a pena não passa da pessoa do condenado (inclusive a multa). Prova-se com a certidão de óbito. Se a certidão era falsa, o STF admite revogar a decisão e retomar o processo.",
      },
      {
        termo: "Anistia",
        faz: "Concedida por lei do Congresso Nacional, apaga o fato criminoso: alcança fatos (em geral políticos), atinge todos os efeitos penais (inclusive a reincidência) e pode vir antes ou depois da condenação. Os efeitos civis, como o dever de indenizar, permanecem.",
      },
      {
        termo: "Graça e indulto",
        faz: "Concedidos por decreto do Presidente da República (art. 84, XII, da CF; pode delegar a ministros, ao PGR ou ao AGU). Graça (indulto individual) é para uma pessoa determinada; indulto é coletivo, para quem preencher os requisitos do decreto. Extinguem só a pena: os demais efeitos penais e extrapenais continuam (Súmula 631 do STJ), como a reincidência.",
        pista: "Não cabem para tortura, tráfico, terrorismo e hediondos (art. 5º, XLIII, da CF). Comutação é o indulto parcial, que reduz a pena.",
      },
      {
        termo: "Abolitio criminis (art. 107, III)",
        faz: "Lei nova deixa de considerar o fato crime: cessam a execução e os efeitos penais da condenação, mas não os civis.",
      },
      {
        parte: "3. Causas ligadas à ação penal privada",
        termo: "Decadência",
        faz: "Perda do direito de queixa ou de representação por não exercê-lo no prazo: em regra 6 meses, contados do dia em que a vítima soube quem é o autor do crime (art. 103). O prazo é penal: inclui o dia do começo e não se suspende nem se prorroga.",
        pista: "Desde a Lei 15.438/2026, nos crimes de violência doméstica e familiar contra a mulher o prazo é de 12 meses (art. 103, parágrafo único, do CP). Por ser mais longo, só vale para fatos posteriores à lei.",
      },
      {
        termo: "Perempção",
        faz: "Sanção ao querelante que abandona a ação penal privada já iniciada: por exemplo, deixar de dar andamento por 30 dias seguidos, não comparecer sem motivo a ato do processo, não pedir a condenação nas alegações finais ou não haver sucessor em 60 dias após a morte do querelante (art. 60 do CPP). Só existe na ação privada exclusiva.",
      },
      {
        termo: "Renúncia ao direito de queixa",
        faz: "Desistência antes de iniciar a ação privada. É ato unilateral (não precisa ser aceito), pode ser expressa ou tácita (atitude incompatível com a vontade de processar) e, feita a um dos autores, vale para todos. Receber a indenização do dano não é renúncia pelo CP (art. 104, parágrafo único), mas o acordo civil homologado no Juizado Especial é (Lei 9.099/1995, art. 74).",
      },
      {
        termo: "Perdão do ofendido",
        faz: "Desistência depois de iniciada a ação privada, até o trânsito em julgado. É ato bilateral: só produz efeito para o querelado que aceitar. Concedido a um, estende-se a todos, mas não extingue a punibilidade de quem recusar.",
        pista: "Renúncia: antes da ação, unilateral. Perdão do ofendido: durante a ação, bilateral.",
      },
      {
        parte: "4. Retratação, perdão judicial e outras causas",
        termo: "Retratação do agente",
        faz: "O agente volta atrás no que disse, nos casos em que a lei admite: calúnia e difamação, antes da sentença (art. 143; não cabe na injúria); falso testemunho e falsa perícia, antes da sentença no processo em que ocorreu o ilícito (art. 342, § 2º).",
      },
      {
        termo: "Perdão judicial (art. 107, IX, e art. 120)",
        faz: "O juiz deixa de aplicar a pena nos casos previstos em lei, como no homicídio e na lesão culposos quando as consequências atingem o próprio agente de forma tão grave que a pena se torna desnecessária (ex.: pai que causa a morte do filho num acidente). A sentença é declaratória: não gera reincidência nem outros efeitos de condenação (Súmula 18 do STJ).",
      },
      {
        termo: "Causas fora do art. 107",
        faz: "Exemplos: reparação do dano no peculato culposo antes da sentença definitiva (art. 312, § 3º); fim do período de prova do sursis, do livramento condicional ou da suspensão condicional do processo sem revogação; cumprimento do acordo de não persecução penal; pagamento integral do tributo nos crimes tributários.",
        pista: "O casamento da vítima com o agente deixou de extinguir a punibilidade em 2005.",
      },
      {
        parte: "5. Prescrição: noções e prazos",
        termo: "Conceito e espécies",
        faz: "Perda do direito de punir pelo decurso do tempo. Prescrição da pretensão punitiva (PPP): ocorre antes do trânsito em julgado e impede a condenação. Prescrição da pretensão executória (PPE): ocorre depois do trânsito em julgado e impede executar a pena já aplicada.",
      },
      {
        termo: "Imprescritíveis",
        faz: "Só os crimes que a Constituição aponta: racismo e ação de grupos armados contra a ordem constitucional e o Estado Democrático (art. 5º, XLII e XLIV). Prevalece que lei comum não pode criar outros casos. Medidas socioeducativas do ECA também prescrevem (Súmula 338 do STJ).",
      },
      {
        termo: "Tabela do art. 109",
        faz: "Pela pena máxima em abstrato: mais de 12 anos → 20 anos; mais de 8 até 12 → 16; mais de 4 até 8 → 12; mais de 2 até 4 → 8; de 1 até 2 → 4; menos de 1 ano → 3 anos. As penas restritivas de direitos seguem os mesmos prazos.",
        pista: "Ex.: furto simples (máximo de 4 anos) prescreve em 8; homicídio simples (máximo de 20) prescreve em 20.",
      },
      {
        termo: "Multa (art. 114) e penas mais leves (art. 118)",
        faz: "A multa sozinha (cominada ou aplicada isoladamente) prescreve em 2 anos. Se vier junto ou como alternativa à pena de prisão, prescreve no mesmo prazo dela. As penas mais leves prescrevem com as mais graves.",
      },
      {
        parte: "6. Cálculo, redução e início do prazo",
        termo: "O que entra no cálculo",
        faz: "Na pena em abstrato, contam as causas de aumento (pelo máximo) e de diminuição (pelo mínimo), como a tentativa. Agravantes e atenuantes não contam. No concurso de crimes, cada crime prescreve separadamente (art. 119), e no crime continuado não se soma o acréscimo da continuidade (Súmula 497 do STF).",
      },
      {
        termo: "Redução pela metade (art. 115)",
        faz: "Os prazos caem pela metade se o agente tinha menos de 21 anos na data do crime ou mais de 70 na data da sentença. Desde a Lei 15.160/2025, a redução não vale se o crime envolver violência sexual contra a mulher; por ser mais grave, só alcança fatos posteriores a julho de 2025.",
      },
      {
        termo: "Termo inicial da PPP (art. 111)",
        faz: "Do dia da consumação; na tentativa, do dia em que cessou a atividade; nos permanentes, de quando cessou a permanência; na bigamia e na falsificação de registro civil, de quando o fato se tornou conhecido; nos crimes contra a dignidade sexual ou que envolvam violência contra criança e adolescente, da data em que a vítima faz 18 anos, salvo se a ação já tiver começado.",
      },
      {
        parte: "7. Interrupção e suspensão",
        termo: "Interrupção (art. 117)",
        faz: "Zera o prazo, que recomeça do início: recebimento da denúncia ou queixa; pronúncia; decisão que confirma a pronúncia; publicação da sentença ou acórdão condenatório recorrível (o acórdão que confirma a condenação também interrompe, segundo o STF); início ou continuação do cumprimento da pena; reincidência.",
      },
      {
        termo: "Alcance da interrupção",
        faz: "Interrompida para um autor, interrompe para todos; nos crimes conexos julgados no mesmo processo, a interrupção de um vale para os demais. Exceção: o início do cumprimento da pena e a reincidência são pessoais.",
      },
      {
        termo: "Suspensão (art. 116)",
        faz: "O prazo para e depois volta a correr de onde parou. Antes do trânsito em julgado: enquanto não resolvida em outro processo questão de que dependa a existência do crime; enquanto o agente cumpre pena no exterior; na pendência de embargos de declaração ou recursos aos tribunais superiores inadmissíveis; enquanto não cumprido ou rescindido o acordo de não persecução penal. Depois do trânsito: enquanto o condenado está preso por outro motivo.",
        pista: "Interrupção: o prazo recomeça do zero. Suspensão: continua de onde parou.",
      },
      {
        parte: "8. Prescrição pela pena aplicada",
        termo: "Superveniente (intercorrente)",
        faz: "Usa a pena aplicada na sentença, quando já não cabe recurso da acusação (art. 110, § 1º, e Súmula 146 do STF). Conta da sentença para a frente: se o prazo correspondente à pena aplicada passar antes do trânsito em julgado definitivo, a punibilidade se extingue.",
      },
      {
        termo: "Retroativa",
        faz: "Também usa a pena aplicada, mas conta para trás, entre os marcos já passados (recebimento da denúncia → sentença). Desde a Lei 12.234/2010, não pode ter como termo inicial data anterior ao recebimento da denúncia ou queixa; para crimes anteriores a essa lei, ainda vale a contagem desde o fato.",
      },
      {
        termo: "Prescrição virtual (em perspectiva)",
        faz: "Seria reconhecer a prescrição antes da sentença, com base na pena que provavelmente seria aplicada. Não é admitida (Súmula 438 do STJ).",
      },
      {
        termo: "Efeitos da PPP",
        faz: "Como o Estado perdeu o direito de condenar, a decisão não gera nenhum efeito de condenação: não há reincidência, maus antecedentes nem título para cobrar indenização no cível.",
      },
      {
        parte: "9. Prescrição da pretensão executória",
        termo: "Prazo da PPE (art. 110)",
        faz: "Regula-se pela pena aplicada, com os prazos do art. 109, aumentados de 1/3 se o condenado for reincidente. A reincidência não influi na prescrição da pretensão punitiva (Súmula 220 do STJ).",
      },
      {
        termo: "Termo inicial da PPE (art. 112)",
        faz: "A lei fala no trânsito em julgado para a acusação, mas o STF decidiu (Tema 788, 2023) que o prazo só começa com o trânsito em julgado para ambas as partes, quando a pena já pode ser executada. Corre também da revogação do sursis ou do livramento e do dia em que a execução é interrompida (ex.: fuga).",
      },
      {
        termo: "Fuga e revogação (art. 113)",
        faz: "Se o condenado foge ou tem o livramento condicional revogado, a prescrição é calculada pelo tempo que falta da pena.",
      },
      {
        termo: "Efeitos da PPE",
        faz: "Extingue só a pena. Os efeitos secundários da condenação continuam: gera reincidência, vale como maus antecedentes e serve de título para a vítima cobrar indenização.",
        pista: "PPP apaga a condenação; PPE apaga só a execução da pena.",
      },
    ],
    cuidado:
      "Renúncia é antes da ação e não precisa de aceitação; perdão do ofendido é durante a ação e precisa. Interrupção zera o prazo; suspensão só o pausa. E a prescrição virtual não é aceita.",
  },
  questoes: [
    {
      topico: "Prescrição",
      subassunto: "Prazo pela pena em abstrato e art. 115",
      dificuldade: 5,
      raciocinio: "Pena máxima, depois tabela, depois a metade.",
      enunciado:
        "Um rapaz de 20 anos pratica furto simples, com pena de reclusão de 1 a 6 anos, conforme a redação atual do art. 155 do CP. Sem nenhuma causa de interrupção, a prescrição da pretensão punitiva ocorre em",
      alternativas: ["4 anos", "6 anos", "8 anos", "12 anos", "16 anos"],
      correta: 1,
      explicacao:
        "Pena máxima de 6 anos: mais de 4 e até 8 dá 12 anos no art. 109, III. Sendo menor de 21 ao tempo do crime, o art. 115 reduz o prazo pela metade: 6 anos.",
      explicacaoErradas:
        "“12 anos” esquece a redução do art. 115. “8 anos” é a metade de 16, de quem lê a tabela errado. “4 anos” parte de 8 anos, prazo da pena antiga de 1 a 4 anos. “16 anos” vale para penas acima de 8 até 12.",
      pegadinha: "A pena do furto mudou em 2026: o prazo calculado com o máximo antigo fica errado.",
      conhecimento:
        "A idade do art. 115 é a da data do fato (menor de 21) ou a da sentença (maior de 70).",
    },
    {
      topico: "Prescrição",
      subassunto: "Prescrição retroativa e marco inicial",
      dificuldade: 5,
      raciocinio: "Com pena em concreto, conte só para a frente da denúncia.",
      enunciado:
        "O fato ocorreu em 2015, e a denúncia foi recebida em 2021. A sentença de 2024 aplicou 1 ano e 6 meses de reclusão, e só a defesa recorreu. O réu tinha 30 anos na data do fato. Quanto à prescrição retroativa,",
      alternativas: [
        "ocorreu, porque entre o fato e a denúncia passaram mais de 4 anos",
        "não ocorreu, porque essa prescrição usa sempre a pena em abstrato",
        "ocorreu, porque a sentença condenatória não interrompe o prazo",
        "só ocorreria se a acusação tivesse recorrido da decisão",
        "não ocorreu, pois o intervalo de 2021 a 2024 é menor que 4 anos",
      ],
      correta: 4,
      explicacao:
        "Pena de 1 ano e 6 meses prescreve em 4 anos (art. 109, V). A prescrição retroativa não pode ter termo inicial anterior à denúncia ou queixa (art. 110, § 1º). De 2021 a 2024 são cerca de 3 anos: não houve prescrição.",
      explicacaoErradas:
        "“Entre o fato e a denúncia” é o intervalo que a Lei 12.234/2010 afastou. “Pena em abstrato” é o oposto da retroativa. “Não interrompe” contraria o art. 117, IV. “Se a acusação tivesse recorrido” inverte a regra.",
      pegadinha: "Quem estudou a regra antiga conta desde o fato, e isso acabou em 2010.",
      conhecimento:
        "Para fatos anteriores à Lei 12.234/2010, a contagem desde o fato continua possível, porque a lei mais gravosa não retroage.",
    },
    {
      topico: "Prescrição",
      subassunto: "Termo inicial em crimes específicos",
      dificuldade: 4,
      raciocinio: "O art. 111 tem regra para cada situação.",
      enunciado:
        "Sobre o termo inicial da prescrição antes do trânsito em julgado, conforme o art. 111 do CP, é correto afirmar que, no crime permanente, o prazo corre",
      alternativas: [
        "desde o primeiro ato de execução praticado pelo agente",
        "desde a data em que o fato chegou à autoridade policial",
        "desde o dia em que a vítima completou 18 anos de idade",
        "desde o dia em que cessou a permanência da conduta",
        "desde o recebimento da denúncia pelo juízo competente",
      ],
      correta: 3,
      explicacao:
        "O art. 111 traz: consumação (I), fim da atividade na tentativa (II), cessação da permanência (III), data em que o fato se tornou conhecido na bigamia e na falsificação de assentamento de registro civil (IV) e os 18 anos da vítima nos crimes do inciso V.",
      explicacaoErradas:
        "“Primeiro ato” não é regra do art. 111. A data em que “chegou à autoridade” não é marco geral, nem nos crimes do inciso IV. Os “18 anos” são da vítima de crimes sexuais ou de violência contra criança e adolescente. O “recebimento” interrompe, sem iniciar.",
      pegadinha: "Na tentativa, o prazo conta de quando cessou a atividade criminosa.",
      conhecimento:
        "No inciso V, o prazo só corre dos 18 anos da vítima, salvo se a ação penal já tiver sido proposta.",
    },
    {
      topico: "Prescrição",
      subassunto: "Interrupção e comunicação",
      dificuldade: 5,
      raciocinio: "Todos os incisos se comunicam, menos os dois de natureza pessoal.",
      enunciado:
        "Dois réus respondem pelo mesmo crime no mesmo processo. Depois da condenação recorrível dos dois, um deles comete novo crime e é condenado, tornando-se reincidente. Pelo art. 117, § 1º, do CP, a interrupção",
      alternativas: [
        "pela sentença recorrível vale para ambos, mas a reincidência não",
        "pela reincidência alcança os dois réus, porque o processo é o mesmo",
        "pela sentença condenatória só alcança quem tenha apelado da decisão",
        "nunca se comunica entre coautores, por ser sempre pessoal",
        "por qualquer causa do art. 117 se comunica aos demais autores",
      ],
      correta: 0,
      explicacao:
        "O art. 117, § 1º, comunica a interrupção a todos os autores do crime, exceto nas causas dos incisos V (início ou continuação do cumprimento da pena) e VI (reincidência), que são pessoais.",
      explicacaoErradas:
        "“Alcança os dois” contraria a exceção do inciso VI. “Quem tenha apelado” não aparece na lei. “Nunca se comunica” inverte a regra. “Qualquer causa” esquece as duas exceções.",
      pegadinha: "A regra é comunicar. A exceção são apenas os incisos V e VI.",
      conhecimento:
        "Nos crimes conexos julgados no mesmo processo, a interrupção relativa a um se estende aos outros.",
    },
    {
      topico: "Prescrição",
      subassunto: "Súmulas sobre reincidência e pena hipotética",
      dificuldade: 5,
      raciocinio: "Pretensão punitiva não olha reincidência, e pena hipotética não existe.",
      enunciado:
        "Réu reincidente responde a processo por crime com pena máxima de 4 anos. A defesa pede duas coisas: que a prescrição da pretensão punitiva não tenha o aumento de um terço e que se reconheça já a prescrição, pela pena que provavelmente virá. Pelas Súmulas 220 e 438 do STJ,",
      alternativas: [
        "os dois pedidos devem ser rejeitados pelo juiz",
        "o primeiro está correto, e o segundo deve ser negado",
        "o primeiro deve ser negado, e o segundo está correto",
        "os dois pedidos estão corretos, em favor do réu",
        "os dois dependem de parecer favorável do Ministério Público",
      ],
      correta: 1,
      explicacao:
        "A Súmula 220 diz que a reincidência não influi na prescrição da pretensão punitiva. O aumento de um terço do art. 110 vale só para a executória. A Súmula 438 veda a prescrição baseada em pena hipotética.",
      explicacaoErradas:
        "“Rejeitados” esquece a Súmula 220. “O primeiro negado” inverte as súmulas. “Os dois corretos” ignora a Súmula 438. “Parecer favorável” não é condição prevista.",
      pegadinha: "Reincidência pesa na prescrição executória e interrompe prazo, mas não aumenta o da punitiva.",
      conhecimento:
        "Súmula 497 do STF: no crime continuado, a prescrição usa a pena da sentença, sem o acréscimo da continuação.",
    },
    {
      topico: "Decadência e perempção",
      subassunto: "Decadência na violência doméstica",
      dificuldade: 5,
      raciocinio: "O art. 103 ganhou um parágrafo em 2026.",
      enunciado:
        "Vítima de injúria em contexto de violência doméstica e familiar soube desde o início quem era o autor, seu ex-companheiro. Oito meses depois, quer oferecer queixa. Pelo art. 103 do CP, na redação da Lei 15.438/2026,",
      alternativas: [
        "decaiu, porque o prazo é sempre de seis meses",
        "decaiu, porque nesse caso o prazo é de quatro meses",
        "não decaiu, pois a queixa nunca tem prazo",
        "não há prazo, porque a ação é sempre incondicionada",
        "não decaiu, pois nesse caso o prazo é de 12 meses",
      ],
      correta: 4,
      explicacao:
        "O parágrafo único do art. 103, acrescido pela Lei 15.438/2026, fixa em 12 meses o prazo decadencial nos casos de violência doméstica e familiar contra a mulher. O caput continua com seis meses.",
      explicacaoErradas:
        "“Sempre de seis meses” é a regra anterior. “Quatro meses” não existe. “Nunca tem prazo” ignora a decadência. “Sempre incondicionada” não vale para a injúria, que se procede mediante queixa (art. 145).",
      pegadinha: "Material antigo só traz os seis meses.",
      conhecimento:
        "A contagem do prazo decadencial segue o art. 10 do CP e inclui o dia do começo.",
    },
    {
      topico: "Decadência e perempção",
      subassunto: "Perempção na ação privada",
      dificuldade: 4,
      raciocinio: "Perempção pressupõe ação privada em andamento.",
      enunciado:
        "Em ação penal privada por injúria, o querelante deixa de pedir a condenação nas alegações finais. Em ação penal privada subsidiária da pública, outro querelante fica parado por mais de 30 dias. Quanto à perempção,",
      alternativas: [
        "ocorre nos dois casos, pois a inércia é a mesma",
        "ocorre no primeiro, e na subsidiária o MP retoma a ação",
        "não ocorre em nenhum dos casos, salvo decisão do juiz",
        "ocorre no segundo, e no primeiro o juiz supre o pedido da parte",
        "depende da concordância do querelado nos dois casos",
      ],
      correta: 1,
      explicacao:
        "A perempção é sanção à inércia do querelante e só existe na ação privada exclusiva ou personalíssima. Na subsidiária, a ação nunca deixa de ser pública, e o Ministério Público retoma a causa (art. 29 do CPP).",
      explicacaoErradas:
        "“Nos dois casos” ignora a natureza da subsidiária. “Em nenhum” esquece o art. 60, III, do CPP. “O juiz supre” não existe, e inverte os casos. A “concordância do querelado” é do perdão, e não da perempção.",
      pegadinha: "Subsidiária é ação pública com autor provisório.",
      conhecimento:
        "Na subsidiária, também não cabem renúncia nem perdão com efeito extintivo.",
    },
    {
      topico: "Renúncia e perdão",
      subassunto: "Perdão com vários querelados",
      dificuldade: 5,
      raciocinio: "A um aproveita a todos, mas quem recusa fica de fora.",
      enunciado:
        "Em ação penal privada contra três querelados, o querelante concede perdão expresso a um deles. Dois aceitam, e o terceiro recusa, porque quer provar sua inocência. Pelo art. 106 do CP,",
      alternativas: [
        "a ação continua contra todos, porque não houve aceitação unânime",
        "a ação se extingue para os três, pela indivisibilidade",
        "a ação se extingue só para quem recebeu o perdão expresso",
        "a ação se extingue para quem aceitou e segue contra o terceiro",
        "o perdão é nulo, porque foi dirigido a só um dos querelados",
      ],
      correta: 3,
      explicacao:
        "O perdão concedido a qualquer querelado a todos aproveita (art. 106, I), mas não produz efeito para quem o recusa (III). A punibilidade se extingue para os que aceitaram, e a ação segue contra quem recusou.",
      explicacaoErradas:
        "“Aceitação unânime” não é exigida. “Para os três” ignora a recusa. “Só para quem recebeu” nega a extensão. “Nulo” contraria o art. 106, I.",
      pegadinha: "Renúncia é unilateral. O perdão depende da aceitação de cada um.",
      conhecimento:
        "O perdão só é possível até o trânsito em julgado da sentença condenatória (art. 106, § 2º).",
    },
    {
      topico: "Renúncia e perdão",
      subassunto: "Renúncia tácita e indenização",
      dificuldade: 4,
      raciocinio: "No CP a indenização não é renúncia. Nos Juizados, a composição civil é.",
      enunciado:
        "Vítima de crime de ação privada recebe do autor a indenização pelo dano, sem acordo em Juizado. Depois, quer oferecer queixa dentro do prazo. Pelo art. 104, parágrafo único, do CP, o recebimento da indenização",
      alternativas: [
        "implica renúncia tácita, porque é ato incompatível com a queixa",
        "implica decadência imediata do direito de queixa",
        "não implica renúncia tácita ao direito de queixa",
        "equivale a perdão aceito, com extinção da punibilidade",
        "só impede a queixa se o valor reparar todo o dano",
      ],
      correta: 2,
      explicacao:
        "A lei diz que não implica renúncia tácita o fato de receber o ofendido a indenização do dano causado pelo crime. A exceção está na Lei 9.099/1995: a composição civil homologada em infração de menor potencial ofensivo acarreta renúncia.",
      explicacaoErradas:
        "“Ato incompatível” é a regra geral, com exceção expressa para a indenização. “Decadência” é passagem de prazo. “Perdão aceito” pressupõe ação em curso. O “valor” do dano não muda a regra.",
      pegadinha: "A ressalva da lei é literal: indenização não é renúncia.",
      conhecimento:
        "Renúncia concedida a um dos autores se estende a todos (art. 49 do CPP).",
    },
    {
      topico: "Outras causas",
      subassunto: "Anistia, graça e indulto",
      dificuldade: 5,
      raciocinio: "Anistia olha o fato. Graça e indulto olham a pena.",
      enunciado:
        "Condenado por crime comum tem a pena extinta por decreto presidencial de indulto. Anos depois, comete outro crime. Em caso diferente, um condenado é beneficiado por anistia concedida por lei. Quanto à reincidência, na lição corrente,",
      alternativas: [
        "os dois geram reincidência, pois os fatos foram apurados",
        "o indulto não impede a reincidência, e a anistia a afasta",
        "a anistia não impede a reincidência, e o indulto a afasta",
        "nenhum gera reincidência, porque ambos apagam a condenação",
        "depende de novo decreto, sem previsão no Código Penal",
      ],
      correta: 1,
      explicacao:
        "A anistia, por lei do Congresso, apaga os efeitos penais do fato, inclusive a reincidência. O indulto atinge só a execução da pena: a condenação continua valendo para reincidência.",
      explicacaoErradas:
        "“Os dois” ignora o alcance da anistia. A terceira opção troca os efeitos. “Nenhum” atribui ao indulto o efeito da anistia. “Novo decreto” não existe.",
      pegadinha: "Nenhuma das duas apaga os efeitos civis: o dever de indenizar continua.",
      conhecimento:
        "A Súmula 631 do STJ diz que o indulto extingue os efeitos primários da condenação, mas não atinge os secundários, penais ou extrapenais.",
    },
    {
      topico: "Outras causas",
      subassunto: "Crime pressuposto e crime conexo",
      dificuldade: 5,
      raciocinio: "O art. 108 mantém o crime que depende do outro.",
      enunciado:
        "Um homem recebe veículo furtado sabendo da origem. Depois, a punibilidade do autor do furto é extinta por prescrição. O receptador sustenta que esse fato também o beneficia. Pelo art. 108 do CP, a extinção da punibilidade do crime pressuposto",
      alternativas: [
        "não se estende à receptação, que segue punível",
        "estende-se à receptação, por ser crime acessório",
        "torna a receptação atípica, por falta de crime anterior",
        "reduz a pena da receptação de um a dois terços",
        "converte a receptação em crime de menor potencial ofensivo",
      ],
      correta: 0,
      explicacao:
        "O art. 108 diz que a extinção da punibilidade de crime que é pressuposto, elemento constitutivo ou circunstância agravante de outro não se estende a este. O art. 180, § 4º, reforça: a receptação é punível ainda que desconhecido ou isento de pena o autor do crime de origem.",
      explicacaoErradas:
        "“Por ser crime acessório” não muda a regra. “Atípica” confunde crime extinto com crime inexistente. “Reduz a pena” não está na lei. “Menor potencial ofensivo” depende da pena cominada.",
      pegadinha: "Punibilidade extinta não apaga a existência do crime anterior.",
      conhecimento:
        "No concurso de crimes, a extinção incide sobre a pena de cada um, isoladamente (art. 119).",
    },
  ],
};
