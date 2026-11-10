import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "proc-04",
  resumo: {
    ideia:
      "O inquérito reúne informações para o MP decidir se acusa. A prisão antes da condenação é exceção: em flagrante, com auto e audiência de custódia, ou por ordem do juiz, que não decreta cautelar sem pedido.",
    itens: [
      {
        termo: "Inquérito policial",
        faz: "Escrito, sigiloso, inquisitivo, dispensável e indisponível: o delegado não pode arquivá-lo (art. 17).",
      },
      {
        termo: "Instauração",
        faz: "Na ação pública, de ofício ou por requisição ou requerimento. Na condicionada, só com representação. Na privada, só a requerimento da vítima (art. 5º).",
      },
      {
        termo: "Prazo",
        faz: "10 dias com o investigado preso, contados da prisão; 30 dias se solto (art. 10).",
        pista: "Leis especiais têm prazos próprios, como a de drogas e a da Justiça Federal.",
      },
      {
        termo: "Acesso do defensor",
        faz: "Súmula Vinculante 14: acesso amplo ao que já está documentado, não às diligências em andamento.",
      },
      {
        termo: "Força letal",
        faz: "Policial investigado por uso da força letal em serviço é citado e tem 48 horas para constituir defensor; se não o fizer, a instituição indica um (art. 14-A).",
      },
      {
        termo: "Medidas cautelares",
        faz: "Exigem necessidade e adequação. O juiz só as decreta a pedido das partes, do MP ou por representação policial (art. 282).",
      },
      {
        termo: "Uso da força",
        faz: "Só a indispensável, em caso de resistência ou tentativa de fuga (art. 284).",
      },
      {
        termo: "Algemas",
        faz: "Súmula Vinculante 11: só com resistência, fundado receio de fuga ou perigo, justificadas por escrito. Proibidas no parto e no puerpério imediato (art. 292).",
      },
      {
        termo: "Espécies de flagrante",
        faz: "Próprio: está cometendo ou acabou de cometer. Impróprio: perseguido logo após. Presumido: encontrado logo depois com objetos do crime (art. 302).",
        pista: "No crime permanente, há flagrante enquanto durar a permanência (art. 303).",
      },
      {
        termo: "Esperado x preparado",
        faz: "Esperado: a polícia só aguarda, e é válido. Preparado: a polícia provoca o crime e impede a consumação, e não há crime (Súmula 145 do STF).",
      },
      {
        termo: "Auto de prisão em flagrante",
        faz: "Ouve condutor, testemunhas e preso. Sem testemunhas do fato, assinam duas que viram a apresentação. Em 24 horas, auto ao juiz e nota de culpa ao preso (arts. 304 e 306).",
      },
      {
        termo: "Audiência de custódia",
        faz: "Em até 24 horas, por videoconferência em tempo real, desde a Lei 15.358/2026. O juiz relaxa, converte em preventiva ou concede liberdade provisória (art. 310).",
        pista: "Com excludente de ilicitude aparente, liberdade provisória com termo de comparecimento.",
      },
      {
        termo: "Trânsito e Juizado",
        faz: "Condutor que presta pronto e integral socorro à vítima não é preso em flagrante nem paga fiança (CTB, art. 301). Autor de menor potencial que vai ou se compromete a ir ao Juizado também não (Lei 9.099, art. 69).",
      },
    ],
    cuidado:
      "Muitos materiais ainda descrevem a audiência de custódia presencial. Desde a Lei 15.358/2026, o CPP manda fazê-la por videoconferência em tempo real.",
  },
  questoes: [
    {
      topico: "Inquérito policial",
      subassunto: "Ação condicionada à representação",
      dificuldade: 4,
      raciocinio: "Na ação condicionada, a vontade da vítima vem antes da investigação.",
      enunciado:
        "Um caminhoneiro é ameaçado de morte por outro motorista em um posto de combustível. O caso chega ao delegado, mas o caminhoneiro ainda não decidiu se quer ver o autor processado. Quanto à instauração do inquérito, o delegado",
      alternativas: [
        "não pode instaurá-lo sem a representação do caminhoneiro",
        "pode instaurá-lo de ofício e colher a representação depois",
        "pode instaurá-lo, se o MP requisitar, mesmo sem representação",
        "só pode instaurá-lo se a vítima oferecer queixa-crime",
        "deve instaurá-lo de ofício, por ser crime contra a pessoa",
      ],
      correta: 0,
      explicacao:
        "A ameaça contra a vítima do caso é crime de ação pública condicionada à representação (art. 147 do CP). O art. 5º, § 4º, do CPP diz que, nesses crimes, o inquérito não pode ser iniciado sem a representação.",
      explicacaoErradas:
        "“De ofício e colher depois” contraria o § 4º. “Se o MP requisitar” não supre a falta da representação. “Queixa-crime” é peça da ação privada. “Crime contra a pessoa” não torna a ação incondicionada.",
      pegadinha: "A requisição do MP não substitui a vontade da vítima.",
      conhecimento:
        "Na ameaça contra a mulher por razões da condição do sexo feminino, a ação é pública incondicionada (art. 147, §§ 1º e 2º, do CP).",
    },
    {
      topico: "Medidas cautelares",
      subassunto: "Decretação de ofício",
      dificuldade: 5,
      raciocinio: "Desde 2019, o juiz não age sem provocação nas cautelares.",
      enunciado:
        "Durante o inquérito, sem pedido do MP nem representação do delegado, o juiz proíbe o investigado de se ausentar da comarca, por entender que há risco de fuga. Segundo o CPP, essa decisão",
      alternativas: [
        "é válida, pois o juiz pode decretar cautelares de ofício a qualquer tempo",
        "é válida no inquérito, mas seria inválida no curso da ação penal",
        "passa a ser válida se o MP concordar depois e ratificar o ato",
        "é inválida, pois exige pedido das partes ou representação policial",
        "é inválida só porque a cautelar diversa pressupõe prisão anterior",
      ],
      correta: 3,
      explicacao:
        "O art. 282, § 2º, com a redação da Lei 13.964/2019, diz que as medidas cautelares serão decretadas pelo juiz a requerimento das partes ou, na investigação, por representação da autoridade policial ou requerimento do MP. A lei retirou a possibilidade de decretação de ofício.",
      explicacaoErradas:
        "“De ofício a qualquer tempo” repete uma regra revogada. “Válida no inquérito” inverte até a regra antiga, que só permitia de ofício no processo. “Ratificar depois” não está na lei. “Prisão anterior” não é requisito das cautelares diversas.",
      pegadinha: "A antiga permissão de agir de ofício no processo também caiu em 2019.",
      conhecimento:
        "Salvo urgência ou perigo de ineficácia, o juiz intima a parte contrária para se manifestar em 5 dias antes de decidir (art. 282, § 3º).",
    },
    {
      topico: "Inquérito policial",
      subassunto: "Prazo com investigado preso",
      dificuldade: 5,
      raciocinio: "O termo inicial muda quando a prisão acontece no meio do inquérito.",
      enunciado:
        "Um inquérito tramita com o investigado solto. No 12º dia, ele é preso preventivamente. Pela regra geral do CPP, o prazo para concluir o inquérito passa a ser de",
      alternativas: [
        "30 dias, contados da instauração do inquérito",
        "18 dias, que ainda restavam do prazo inicial de 30 dias",
        "10 dias, contados da instauração do inquérito",
        "15 dias, contados da data da decisão do juiz",
        "10 dias, contados do dia em que a prisão foi feita",
      ],
      correta: 4,
      explicacao:
        "O art. 10 do CPP fixa 10 dias se o indiciado estiver preso em flagrante ou preventivamente, contado o prazo, na preventiva, a partir do dia em que se executar a ordem de prisão. Com o investigado solto, o prazo é de 30 dias.",
      explicacaoErradas:
        "“30 dias” é o prazo do investigado solto. “18 dias que restavam” desconta um prazo que deixou de valer. “Contados da instauração” erra o termo inicial e faria o prazo já ter vencido. “Da decisão do juiz” troca a execução da prisão pela data da ordem.",
      pegadinha: "Conta-se da execução da ordem de prisão, não da decisão.",
      conhecimento:
        "Na Lei de Drogas, o prazo é de 30 dias com o investigado preso e 90 dias se solto, podendo ser duplicado (art. 51 da Lei 11.343/2006).",
    },
    {
      topico: "Inquérito policial",
      subassunto: "Força letal e defensor",
      dificuldade: 5,
      raciocinio: "O CPP tem regra própria para agentes de segurança.",
      enunciado:
        "Um policial rodoviário federal passa a ser investigado por ter usado arma de fogo em serviço, com resultado morte, numa ocorrência em que alega legítima defesa. Segundo o art. 14-A do CPP, ele",
      alternativas: [
        "não tem direito a defensor, pois o inquérito é inquisitivo",
        "é citado e pode constituir defensor em até 48 horas",
        "só pode constituir defensor depois de indiciado",
        "tem 10 dias para constituir defensor, sob pena de revelia",
        "é defendido pela instituição desde a instauração, sem escolha",
      ],
      correta: 1,
      explicacao:
        "O art. 14-A vale para servidores das instituições do art. 144 da CF investigados por uso da força letal no exercício da profissão, inclusive nas excludentes do art. 23 do CP. O investigado é citado da instauração e pode constituir defensor em até 48 horas. Se não o fizer, a instituição é intimada para indicar defensor em 48 horas.",
      explicacaoErradas:
        "“Não tem direito a defensor” contraria o próprio art. 14-A. “Depois de indiciado” atrasa um direito que nasce com a citação da instauração. “10 dias” e “revelia” não existem nesse procedimento. “Sem escolha” erra: a instituição só indica se ele não constituir defensor.",
      pegadinha: "A indicação pela instituição é subsidiária, depois das 48 horas.",
      conhecimento:
        "A PRF está no art. 144 da Constituição, ao lado da PF, da PFF e das polícias civis, militares e penais.",
    },
    {
      topico: "Inquérito policial",
      subassunto: "Acesso do defensor",
      dificuldade: 4,
      raciocinio: "A súmula separa o que já foi documentado do que está em curso.",
      enunciado:
        "Durante um inquérito sob sigilo, o advogado do investigado pede acesso aos autos, inclusive a uma interceptação telefônica ainda em andamento. Segundo a Súmula Vinculante 14, o defensor",
      alternativas: [
        "não tem acesso a nada até o relatório final, por causa do sigilo",
        "tem acesso a tudo, inclusive às diligências ainda em andamento",
        "acessa o que já está documentado, mas não a diligência em curso",
        "só tem acesso se o MP concordar com o pedido de vista",
        "não tem acesso, pois só o investigado pessoalmente pode ver os autos",
      ],
      correta: 2,
      explicacao:
        "A Súmula Vinculante 14 garante ao defensor, no interesse do representado, acesso amplo aos elementos de prova que, já documentados em procedimento investigatório, digam respeito ao exercício do direito de defesa. Diligências em andamento, como uma interceptação em curso, podem ficar fora do acesso até serem documentadas.",
      explicacaoErradas:
        "“Até o relatório final” esvazia a súmula. “Inclusive em andamento” frustraria a própria diligência. “Se o MP concordar” cria condição que a súmula não prevê. “Só o investigado” inverte a súmula, que fala do defensor.",
      pegadinha: "O critério é estar documentado, não o fim do inquérito.",
      conhecimento:
        "O inquérito é sigiloso na medida necessária à elucidação do fato ou exigida pelo interesse da sociedade (art. 20 do CPP).",
    },
    {
      topico: "Prisão",
      subassunto: "Algemas",
      dificuldade: 4,
      raciocinio: "A súmula exige motivo concreto e registro por escrito.",
      enunciado:
        "Na prisão em flagrante de um condutor em uma rodovia, os policiais decidem usar algemas. Segundo a Súmula Vinculante 11, o uso de algemas",
      alternativas: [
        "é sempre lícito na prisão em flagrante, por ser ato de força legítima do Estado",
        "depende de autorização judicial prévia, mesmo na prisão em flagrante",
        "é vedado a quem não tenha oferecido resistência física",
        "é lícito com resistência, receio de fuga ou perigo, justificado por escrito",
        "exige só justificativa verbal no momento da prisão",
      ],
      correta: 3,
      explicacao:
        "A Súmula Vinculante 11 só admite algemas em caso de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, por parte do preso ou de terceiros, com a excepcionalidade justificada por escrito. O descumprimento gera responsabilidade do agente e nulidade da prisão ou do ato.",
      explicacaoErradas:
        "“Sempre lícito” ignora o caráter excepcional. “Autorização judicial prévia” não é exigida. “Vedado sem resistência” esquece o receio de fuga e o perigo, que também autorizam. “Justificativa verbal” contraria a exigência de forma escrita.",
      pegadinha: "Não basta motivo: é preciso registrá-lo por escrito.",
      conhecimento:
        "O CPP proíbe algemas em mulheres grávidas durante os atos preparatórios do parto e o trabalho de parto, e no puerpério imediato (art. 292, parágrafo único).",
    },
    {
      topico: "Prisão em flagrante",
      subassunto: "Flagrante impróprio",
      dificuldade: 5,
      raciocinio: "O que importa é a perseguição começar logo após e não ser interrompida.",
      enunciado:
        "Logo após um roubo a um ônibus, a PRF passa a perseguir o autor, que foge por estradas vicinais. A perseguição dura cinco horas, sem interrupção, e termina com a captura. O autor não leva consigo nenhum objeto do crime. Nesse caso, há",
      alternativas: [
        "flagrante impróprio, pois a perseguição começou logo após e não parou",
        "flagrante presumido, pois o autor foi encontrado logo depois do crime",
        "flagrante próprio, pois o autor tinha acabado de cometer o crime",
        "prisão ilegal, pois o flagrante termina quando a perseguição passa de uma hora",
        "prisão possível só por mandado, pois o autor já não cometia o crime",
      ],
      correta: 0,
      explicacao:
        "O art. 302, III, considera em flagrante quem é perseguido, logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração. A lei não limita a duração da perseguição: basta que comece logo após e não seja interrompida (art. 290, § 1º).",
      explicacaoErradas:
        "“Presumido” exige ser encontrado com instrumentos, armas ou objetos do crime, o que não houve. “Próprio” é o de quem está cometendo ou acabou de cometer, e ele já tinha fugido. “Mais de uma hora” cria limite que não existe. “Só por mandado” ignora o flagrante impróprio.",
      pegadinha: "Não há prazo em horas para a perseguição, desde que ela seja contínua.",
      conhecimento:
        "Se a perseguição passar para outro município, a prisão é feita onde o perseguido for alcançado, e ele é apresentado à autoridade local (art. 290).",
    },
    {
      topico: "Prisão em flagrante",
      subassunto: "Crime permanente",
      dificuldade: 4,
      raciocinio: "Em alguns crimes, a consumação se prolonga no tempo.",
      enunciado:
        "Numa abordagem de rotina, a PRF encontra no porta-malas de um carro uma pessoa sequestrada há três dias, mantida presa pelos ocupantes do veículo. Quanto à prisão dos ocupantes,",
      alternativas: [
        "não cabe flagrante, pois o sequestro começou três dias antes",
        "cabe flagrante presumido, pelo encontro com a vítima",
        "só cabe flagrante se a vítima pedir socorro aos policiais",
        "cabe flagrante esperado, que exige autorização judicial",
        "há flagrante, pois a permanência do crime ainda não cessou",
      ],
      correta: 4,
      explicacao:
        "O sequestro é crime permanente: a consumação se prolonga enquanto a vítima é privada da liberdade. O art. 303 do CPP diz que, nas infrações permanentes, o agente está em flagrante enquanto não cessar a permanência.",
      explicacaoErradas:
        "“Começou três dias antes” ignora que o crime continua acontecendo. “Presumido” é o do inciso IV, que fala em objetos e armas, não é o caso. “Se a vítima pedir socorro” cria condição inexistente. “Flagrante esperado” não exige autorização judicial e não descreve o caso.",
      pegadinha: "No crime permanente, o flagrante dura tanto quanto o crime.",
      conhecimento:
        "Em crime permanente, a CF permite entrar na casa sem mandado, a qualquer hora, porque há flagrante (art. 5º, XI).",
    },
    {
      topico: "Prisão em flagrante",
      subassunto: "Flagrante esperado",
      dificuldade: 4,
      raciocinio: "Pergunte se a polícia provocou o crime ou só o aguardou.",
      enunciado:
        "A PRF recebe informação de que um caminhão com cigarros contrabandeados passará por certo trecho da rodovia. Os policiais montam um ponto de fiscalização, aguardam e prendem o motorista com a carga. Esse flagrante",
      alternativas: [
        "é nulo, pois foi preparado pela polícia, como diz a Súmula 145",
        "é válido, pois a polícia só aguardou, sem provocar o crime",
        "é válido só se houver autorização judicial dada antes da operação",
        "é forjado, pois a polícia sabia do crime antes de ele ocorrer",
        "é ação controlada, que exige comunicação prévia ao juiz",
      ],
      correta: 1,
      explicacao:
        "No flagrante esperado, a polícia sabe do crime e apenas aguarda o momento de agir, sem induzir ninguém. É válido. A Súmula 145 do STF trata do flagrante preparado, em que a polícia provoca o crime e torna impossível a consumação.",
      explicacaoErradas:
        "“Preparado” exigiria que a polícia induzisse o motorista. “Autorização judicial” não é necessária no flagrante esperado. “Forjado” é o flagrante com provas plantadas, crime da própria polícia. “Ação controlada” é retardar a intervenção para colher mais provas, o que não houve.",
      pegadinha: "Saber antes não é provocar.",
      conhecimento:
        "Na Lei de Organizações Criminosas, a ação controlada é comunicada previamente ao juiz (art. 8º, § 1º, da Lei 12.850/2013).",
    },
    {
      topico: "Prisão em flagrante",
      subassunto: "Auto sem testemunhas do fato",
      dificuldade: 4,
      raciocinio: "A lei resolve a falta de testemunhas com outras assinaturas.",
      enunciado:
        "À noite, um policial prende em flagrante, sozinho, um motorista que transportava drogas. Ninguém mais viu o fato. Sobre o auto de prisão em flagrante, segundo o CPP, a falta de testemunhas",
      alternativas: [
        "impede o auto, e o preso deve ser solto de imediato pela autoridade",
        "não o impede, e assinam duas pessoas que viram a apresentação",
        "não o impede, e o condutor assina sozinho como testemunha",
        "impede o auto, salvo se o preso confessar o crime",
        "não o impede, mas só policiais podem assinar como testemunhas",
      ],
      correta: 1,
      explicacao:
        "O art. 304, § 2º, diz que a falta de testemunhas da infração não impede o auto de prisão em flagrante. Nesse caso, com o condutor, devem assiná-lo pelo menos duas pessoas que tenham testemunhado a apresentação do preso à autoridade.",
      explicacaoErradas:
        "“Impede o auto” contraria o § 2º. “O condutor assina sozinho” esquece as duas testemunhas da apresentação. “Se o preso confessar” cria condição inexistente. “Só policiais” restringe o que a lei deixa aberto.",
      pegadinha: "Testemunhas da apresentação substituem as testemunhas do fato.",
      conhecimento:
        "Em até 24 horas, o preso recebe a nota de culpa, com o motivo da prisão e os nomes do condutor e das testemunhas (art. 306, § 2º).",
    },
    {
      topico: "Prisão em flagrante",
      subassunto: "Socorro à vítima no trânsito",
      dificuldade: 4,
      raciocinio: "O CTB premia quem socorre a vítima.",
      enunciado:
        "Um motorista atropela um ciclista na rodovia por imprudência, para logo em seguida, presta pronto e integral socorro e espera a PRF. Não há outro crime além da lesão culposa. Segundo o CTB, o motorista",
      alternativas: [
        "é preso em flagrante, mas é solto sem fiança após o auto",
        "pode ser preso em flagrante, com fiança obrigatória",
        "só fica livre do flagrante se a vítima não tiver lesão grave",
        "não é preso em flagrante, e não se exige fiança dele",
        "pode ser preso, salvo se a vítima não quiser representar",
      ],
      correta: 3,
      explicacao:
        "O art. 301 do CTB diz que, nos sinistros de trânsito com vítima, não se imporá a prisão em flagrante nem se exigirá fiança do condutor que prestar pronto e integral socorro à vítima.",
      explicacaoErradas:
        "“Solto após o auto” e “fiança obrigatória” contrariam a dupla vedação do art. 301. “Lesão grave” cria distinção que a lei não faz. “Se a vítima não quiser representar” mistura a condição da ação com a regra da prisão.",
      pegadinha: "O benefício é duplo: sem flagrante e sem fiança.",
      conhecimento:
        "Na infração de menor potencial ofensivo, quem é levado ao Juizado ou se compromete a comparecer também não é preso em flagrante (art. 69, parágrafo único, da Lei 9.099/1995).",
    },
    {
      topico: "Audiência de custódia",
      subassunto: "Forma e prazo",
      dificuldade: 5,
      raciocinio: "A lei de 2026 mudou o modo de fazer a audiência.",
      enunciado:
        "Após uma prisão em flagrante feita pela PRF, o auto é enviado ao juiz. Pelo texto atual do art. 310 do CPP, com a redação da Lei 15.358/2026, a audiência de custódia",
      alternativas: [
        "ocorre em até 72 horas, presencialmente, diante do juiz competente",
        "só ocorre se a defesa pedir, no prazo de 24 horas",
        "é dispensada quando o preso tiver advogado constituído",
        "ocorre em até 24 horas, só presencialmente, vedado o vídeo",
        "ocorre em até 24 horas, por videoconferência em tempo real",
      ],
      correta: 4,
      explicacao:
        "O caput do art. 310, com a redação da Lei 15.358/2026, manda o juiz promover a audiência de custódia no prazo máximo de 24 horas após a prisão, por meio de videoconferência em tempo real, com o preso, o defensor e o MP. A lei garante a entrevista prévia e reservada com o defensor e a intervenção da defesa e do MP durante a audiência.",
      explicacaoErradas:
        "“72 horas” não é o prazo legal. “Se a defesa pedir” erra: a audiência é obrigatória. “Advogado constituído” não dispensa a audiência. “Vedado o vídeo” era a ideia de muitos materiais antigos, mas o texto atual prevê videoconferência.",
      pegadinha: "Livros e apostilas anteriores a 2026 falam em audiência presencial.",
      conhecimento:
        "Antes da audiência, a serventia confere se há citação pendente em outros processos do preso, para que ele seja citado pessoalmente (art. 310, § 7º).",
    },
    {
      topico: "Audiência de custódia",
      subassunto: "Excludente de ilicitude",
      dificuldade: 5,
      raciocinio: "A lei dá uma saída própria quando o auto mostra excludente.",
      enunciado:
        "Um motorista reage a um assalto na rodovia e mata o assaltante. Pelo auto de prisão em flagrante, o juiz verifica que ele agiu em legítima defesa. Segundo o art. 310, § 1º, do CPP, o juiz",
      alternativas: [
        "pode conceder liberdade provisória com termo de comparecimento",
        "deve relaxar a prisão, pois toda excludente torna o flagrante ilegal",
        "deve converter a prisão em preventiva, por ter havido morte",
        "deve arquivar o inquérito na própria audiência de custódia",
        "deve conceder liberdade provisória mediante fiança obrigatória",
      ],
      correta: 0,
      explicacao:
        "O art. 310, § 1º, permite ao juiz, se o auto mostrar que o agente agiu em estado de necessidade, legítima defesa ou estrito cumprimento do dever legal ou exercício regular de direito, conceder liberdade provisória, mediante termo de comparecimento obrigatório a todos os atos do processo, sob pena de revogação.",
      explicacaoErradas:
        "“Relaxar a prisão” é para prisão ilegal, e o flagrante em si foi legal. “Converter em preventiva” ignora a regra própria das excludentes. “Arquivar na audiência” não cabe ao juiz da custódia. “Fiança obrigatória” troca o termo de comparecimento por fiança.",
      pegadinha: "Legítima defesa aparente não torna o flagrante ilegal; dá liberdade com compromisso.",
      conhecimento:
        "Reincidência, integrar organização criminosa armada ou milícia e portar arma de uso restrito levam o juiz a negar a liberdade provisória (art. 310, § 2º).",
    },
  ],
};
