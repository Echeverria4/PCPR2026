import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "especial-11",
  resumo: {
    ideia:
      "Os Juizados Especiais Criminais cuidam das infrações de menor potencial ofensivo com um rito rápido e, de preferência, sem prisão: termo circunstanciado, audiência preliminar com composição dos danos e transação penal e, sem acordo, o procedimento sumariíssimo. A Lei 10.259/2001 leva esse modelo à Justiça Federal.",
    itens: [
      {
        termo: "Menor potencial ofensivo",
        faz: "As contravenções penais e os crimes com pena máxima de até 2 anos, cumulada ou não com multa (Lei 9.099/1995, art. 61).",
        pista: "Conta a pena máxima, não a mínima.",
      },
      {
        termo: "Critérios",
        faz: "Oralidade, simplicidade, informalidade, economia processual e celeridade, buscando a reparação do dano e a pena não privativa de liberdade (art. 62).",
      },
      {
        termo: "Termo circunstanciado",
        faz: "A autoridade policial lavra o termo e o envia logo ao Juizado, com o autor e a vítima, sem inquérito (art. 69).",
        pista: "Para a PRF, está no art. 58, XII, do Anexo I do Decreto 11.348/2023.",
      },
      {
        termo: "Sem flagrante nem fiança",
        faz: "Se o autor for encaminhado ao Juizado ou assumir o compromisso de comparecer, não se impõe prisão em flagrante nem se exige fiança (art. 69, parágrafo único).",
      },
      {
        termo: "Composição dos danos",
        faz: "Acordo homologado por sentença irrecorrível, que vale como título a executar no juízo cível. Na ação privada ou pública condicionada, ele acarreta renúncia à queixa ou à representação (art. 74).",
      },
      {
        termo: "Representação",
        faz: "Feita de forma verbal na audiência e reduzida a termo. Se não for oferecida ali, não há decadência: pode vir no prazo legal (art. 75). Lesões corporais leves e culposas dependem de representação (art. 88).",
      },
      {
        termo: "Transação penal",
        faz: "O Ministério Público propõe pena restritiva de direitos ou multa. Não cabe a quem foi condenado por crime a pena privativa de liberdade por sentença definitiva, a quem teve o benefício nos últimos 5 anos ou se as circunstâncias não indicarem. Não gera reincidência nem consta da certidão de antecedentes (art. 76).",
      },
      {
        termo: "Procedimento sumariíssimo",
        faz: "Denúncia oral com base no termo, sem inquérito; o boletim médico pode suprir o exame de corpo de delito (art. 77). Não há citação por edital: o acusado não encontrado vai ao juízo comum (art. 66).",
      },
      {
        termo: "Apelação",
        faz: "Em 10 dias, por petição escrita com as razões e o pedido, podendo ser julgada por turma de 3 juízes de primeiro grau (art. 82).",
      },
      {
        termo: "Suspensão condicional do processo",
        faz: "Nos crimes com pena mínima de até 1 ano, dentro ou fora da lei, o Ministério Público pode propor a suspensão por 2 a 4 anos, com condições. A prescrição não corre nesse período (art. 89).",
        pista: "Vale também para crimes que não são de menor potencial ofensivo.",
      },
      {
        termo: "Onde a lei não se aplica",
        faz: "Na Justiça Militar (art. 90-A) e nos crimes com violência doméstica e familiar contra a mulher, qualquer que seja a pena (Lei 11.340/2006, art. 41).",
      },
      {
        termo: "Juizados Federais",
        faz: "O Juizado Especial Federal Criminal julga as infrações de menor potencial de competência da Justiça Federal. Contravenção vai à Justiça Estadual, mesmo contra a União. O Cível julga causas federais de até 60 salários mínimos (Lei 10.259/2001, arts. 2º e 3º).",
      },
      {
        termo: "Lesão culposa no trânsito",
        faz: "Aplicam-se os arts. 74, 76 e 88 da Lei 9.099, salvo se o motorista estiver sob influência de álcool ou droga, em racha ou a mais de 50 km/h acima do limite; nesses casos, há inquérito (CTB, art. 291).",
      },
    ],
    cuidado:
      "O prazo de 30 dias para representar, do art. 91, valeu só para os processos em curso quando a lei entrou em vigor; a regra geral é o art. 75. Nas exceções do art. 291, § 1º, do CTB, a lesão culposa no trânsito não admite composição, transação nem a exigência de representação.",
  },
  questoes: [
    {
      topico: "Lei 9.099/1995",
      subassunto: "Menor potencial ofensivo",
      dificuldade: 4,
      raciocinio: "Art. 61: contravenções e crimes com pena máxima de até 2 anos.",
      enunciado:
        "Numa fiscalização numa rodovia federal, a PRF registra várias ocorrências. Pela Lei 9.099/1995, é infração de menor potencial ofensivo, sujeita a termo circunstanciado:",
      alternativas: [
        "conduzir veículo com capacidade psicomotora alterada por álcool, punido com detenção de seis meses a três anos",
        "lesão corporal culposa grave na direção sob efeito de álcool, punida com reclusão de dois a cinco anos",
        "receptação de carga roubada, punida com reclusão de um a quatro anos e multa",
        "dirigir sem habilitação gerando perigo de dano, punido com detenção de seis meses a um ano, ou multa",
        "transportar droga para venda, punido com reclusão de cinco a quinze anos e multa",
      ],
      correta: 3,
      explicacao:
        "São de menor potencial ofensivo as contravenções penais e os crimes com pena máxima de até 2 anos, cumulada ou não com multa (Lei 9.099/1995, art. 61). O art. 309 do CTB tem pena máxima de 1 ano.",
      explicacaoErradas:
        "A embriaguez ao volante tem pena máxima de “três anos”. A lesão culposa grave sob álcool tem pena de “dois a cinco anos”. A receptação vai até “quatro anos”. O tráfico vai até “quinze anos”. Todas passam de 2 anos.",
      pegadinha: "Pena mínima baixa não basta: conta a máxima.",
      conhecimento: "Desde a Lei 11.313/2006, crimes com procedimento especial também entram no conceito, se a pena máxima não passar de 2 anos.",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Prisão e fiança",
      dificuldade: 4,
      raciocinio: "Art. 69, parágrafo único: compromisso de comparecer afasta o flagrante e a fiança.",
      enunciado:
        "Na rodovia federal, a PRF flagra um condutor no crime do art. 309 do CTB (dirigir sem habilitação gerando perigo de dano) e lavra o termo circunstanciado. Pelo art. 69 da Lei 9.099/1995, o autor do fato:",
      alternativas: [
        "é liberado sem prisão e sem fiança, se assumir o compromisso de comparecer ao Juizado",
        "fica preso até pagar a fiança, que nas infrações de menor potencial é sempre obrigatória",
        "é levado à delegacia para o auto de prisão em flagrante, pois o termo só vem depois",
        "é liberado só se a vítima concordar, pois a soltura depende da composição dos danos",
        "é liberado sem compromisso nenhum, e o Juizado depois o procura pelo endereço informado",
      ],
      correta: 0,
      explicacao:
        "Ao autor do fato que, após a lavratura do termo, for imediatamente encaminhado ao Juizado ou assumir o compromisso de a ele comparecer, não se impõe prisão em flagrante nem se exige fiança (Lei 9.099/1995, art. 69, parágrafo único).",
      explicacaoErradas:
        "A fiança não é “sempre obrigatória”: a lei diz que não se exige. Com o termo e o compromisso, não se lavra o “auto de prisão em flagrante”. A soltura não depende de a vítima concordar, ao contrário de “só se a vítima concordar”. A lei exige o compromisso, por isso “sem compromisso nenhum” erra.",
      pegadinha: "Se o autor se recusar a assumir o compromisso, o flagrante pode ser lavrado.",
      conhecimento: "O termo circunstanciado substitui o inquérito policial nas infrações de menor potencial ofensivo.",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Composição dos danos",
      dificuldade: 5,
      raciocinio: "CTB, art. 291, § 1º, aplica os arts. 74, 76 e 88; o acordo homologado vale como renúncia à representação.",
      enunciado:
        "Num sinistro numa rodovia federal, um motorista sóbrio e dentro do limite de velocidade causa lesão corporal culposa num pedestre. Na audiência preliminar, os dois fazem acordo de indenização, homologado pelo juiz. Pela Lei 9.099/1995 e pelo art. 291 do CTB:",
      alternativas: [
        "o Ministério Público ainda pode oferecer denúncia, pois a lesão culposa no trânsito é de ação pública incondicionada",
        "a vítima pode recorrer da homologação por apelação, se achar o valor baixo depois",
        "a homologação vale como confissão e gera reincidência para o motorista",
        "o acordo só vale se for aprovado também pela autoridade de trânsito que atendeu o sinistro",
        "o acordo vale como renúncia à representação e, se não for pago, é executado no juízo cível",
      ],
      correta: 4,
      explicacao:
        "À lesão corporal culposa no trânsito, fora das exceções do CTB, aplicam-se os arts. 74, 76 e 88 da Lei 9.099/1995 (CTB, art. 291, § 1º). A ação depende de representação (art. 88), e o acordo homologado por sentença irrecorrível acarreta renúncia ao direito de representação e vale como título a executar no juízo cível (art. 74).",
      explicacaoErradas:
        "A ação não é “pública incondicionada”: depende de representação. A sentença que homologa é irrecorrível, por isso “recorrer da homologação por apelação” erra. Ela não “vale como confissão” nem gera reincidência. Não há aprovação da “autoridade de trânsito”.",
      pegadinha: "Acordo homologado na ação condicionada encerra a via penal.",
      conhecimento: "A pena da lesão corporal culposa na direção de veículo é de detenção de 6 meses a 2 anos, mais a suspensão ou proibição de obter a habilitação (CTB, art. 303).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Lesão culposa no trânsito",
      dificuldade: 5,
      raciocinio: "CTB, art. 291, §§ 1º e 2º: sob álcool, não se aplicam os arts. 74, 76 e 88 e instaura-se inquérito.",
      enunciado:
        "Na rodovia federal, um motorista com capacidade psicomotora alterada por álcool causa lesão corporal culposa numa ciclista. Pelo art. 291 do CTB, quanto às regras da Lei 9.099/1995:",
      alternativas: [
        "aplicam-se normalmente a composição dos danos e a transação penal, pois a pena máxima é de dois anos",
        "não se aplicam a composição, a transação e a exigência de representação, e deve haver inquérito",
        "aplica-se só a composição dos danos, e a transação depende de pedido da vítima ao juiz",
        "não se aplicam, mas o próprio policial pode propor um acordo de reparação à vítima no local",
        "aplicam-se todas, mas o termo circunstanciado deve ser lavrado pelo delegado, e não pela PRF",
      ],
      correta: 1,
      explicacao:
        "Os arts. 74, 76 e 88 da Lei 9.099/1995 (composição, transação e representação) aplicam-se à lesão culposa no trânsito, exceto se o agente estiver sob influência de álcool ou outra substância psicoativa, em racha ou a mais de 50 km/h acima do limite (CTB, art. 291, § 1º). Nesses casos, deve ser instaurado inquérito policial (§ 2º).",
      explicacaoErradas:
        "Sob álcool, a composição e a transação não se aplicam, por isso “aplicam-se normalmente” erra. Também não vale “só a composição dos danos”. O policial não faz acordo, ao contrário de “o próprio policial pode propor um acordo”. Nada se aplica, e o caso pede inquérito, o que afasta “aplicam-se todas”.",
      pegadinha: "Álcool, racha ou mais de 50 km/h acima do limite: sem os benefícios e com inquérito.",
      conhecimento: "Se a lesão for grave ou gravíssima e o motorista estiver sob álcool, a pena é de reclusão de 2 a 5 anos (CTB, art. 303, § 2º).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Representação",
      dificuldade: 5,
      raciocinio: "Art. 75, parágrafo único: não representar na audiência não gera decadência.",
      enunciado:
        "Após lesão corporal culposa no trânsito, sem nenhuma das exceções do CTB, a vítima vai à audiência preliminar, não há composição dos danos e ela não quer representar naquele momento. Pela Lei 9.099/1995:",
      alternativas: [
        "o direito decai na hora, pois a representação só pode ser feita na própria audiência",
        "ela terá trinta dias contados da audiência para representar, sob pena de decadência",
        "não há decadência, e ela pode representar depois, dentro do prazo previsto em lei",
        "o Ministério Público pode oferecer denúncia mesmo sem a representação da vítima",
        "ela só pode representar por escrito, com advogado, em petição dirigida ao juiz",
      ],
      correta: 2,
      explicacao:
        "Não obtida a composição, a vítima pode representar de forma verbal na hora. O não oferecimento da representação na audiência preliminar não implica decadência do direito, que poderá ser exercido no prazo previsto em lei (Lei 9.099/1995, art. 75).",
      explicacaoErradas:
        "O direito não “decai na hora”. Os “trinta dias” do art. 91 valeram só para os processos em curso quando a lei entrou em vigor. Sem representação, o Ministério Público não pode denunciar. A representação pode ser verbal, por isso “só pode representar por escrito” erra.",
      pegadinha: "O prazo de 30 dias do art. 91 é regra de transição.",
      conhecimento: "Em regra, o prazo para representar é de 6 meses, contados do dia em que a vítima sabe quem é o autor do fato (CPP, art. 38).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Transação penal",
      dificuldade: 4,
      raciocinio: "Art. 76, § 2º, II: quem teve o benefício nos últimos 5 anos não recebe outro.",
      enunciado:
        "Um motorista flagrado pela PRF em infração de menor potencial ofensivo aceitou transação penal há três anos, por outro fato, e pagou a multa. Pela Lei 9.099/1995, uma nova transação:",
      alternativas: [
        "cabe, pois a transação anterior não gera reincidência nem consta de antecedentes",
        "cabe, pois o impedimento da lei vale só por um ano depois do cumprimento",
        "não cabe nunca mais, pois quem aceita transação perde o benefício para sempre",
        "cabe, desde que a vítima concorde e o juiz dispense o requisito do prazo",
        "não cabe, pois ele já recebeu o benefício nos últimos cinco anos",
      ],
      correta: 4,
      explicacao:
        "Não se admite a proposta se o agente tiver sido beneficiado anteriormente, no prazo de cinco anos, pela transação (Lei 9.099/1995, art. 76, § 2º, II). A pena é registrada justamente para impedir novo benefício nesse prazo (§ 4º).",
      explicacaoErradas:
        "Ela não gera reincidência, mas fica registrada para impedir o benefício por 5 anos, por isso “cabe, pois a transação anterior” erra. O prazo não é “só por um ano”. O impedimento não é “para sempre”. A vítima e o juiz não dispensam o prazo legal.",
      pegadinha: "Sem reincidência, mas com registro para barrar nova transação em 5 anos.",
      conhecimento: "Também não cabe a transação a quem foi condenado, por crime, a pena privativa de liberdade por sentença definitiva (art. 76, § 2º, I).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Efeitos da transação",
      dificuldade: 5,
      raciocinio: "Art. 76, §§ 4º a 6º: sem reincidência, sem certidão e sem efeitos civis; cabe apelação.",
      enunciado:
        "Sobre os efeitos da sentença que aplica a pena aceita pelo autor do fato na transação penal, a Lei 9.099/1995 estabelece que ela:",
      alternativas: [
        "não gera reincidência, não consta de certidão de antecedentes e não tem efeitos civis",
        "gera reincidência por cinco anos e consta da certidão de antecedentes durante todo esse período",
        "vale como título executivo, e a vítima pode cobrar a indenização no juízo cível",
        "equivale a confissão de culpa e pode ser usada como prova numa ação de indenização",
        "não admite recurso nenhum, pois é homologação de acordo entre o autor e o Ministério Público",
      ],
      correta: 0,
      explicacao:
        "A pena aplicada na transação não importa em reincidência e é registrada só para impedir o mesmo benefício por cinco anos (art. 76, § 4º). Não consta de certidão de antecedentes, salvo para esse fim, e não tem efeitos civis, cabendo aos interessados a ação cível (§ 6º). Dessa sentença cabe apelação (§ 5º).",
      explicacaoErradas:
        "A transação não “gera reincidência”. Ela não tem efeitos civis, por isso não “vale como título executivo”. Não equivale a “confissão de culpa”. Cabe a apelação do art. 82, ao contrário de “não admite recurso nenhum”.",
      pegadinha: "Título executivo é a composição dos danos, não a transação penal.",
      conhecimento: "A composição dos danos civis, homologada, é que vale como título a executar no juízo cível (art. 74).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Procedimento sumariíssimo",
      dificuldade: 4,
      raciocinio: "Art. 77, § 1º: denúncia com base no termo, sem inquérito; boletim médico supre o exame de corpo de delito.",
      enunciado:
        "Depois de um termo circunstanciado lavrado pela PRF, não houve transação penal porque o autor do fato faltou à audiência preliminar. Pela Lei 9.099/1995, a denúncia do Ministério Público:",
      alternativas: [
        "depende de inquérito policial, pois o termo circunstanciado não basta para formar a acusação",
        "exige sempre exame de corpo de delito, mesmo havendo boletim médico sobre a lesão",
        "só pode ser oferecida por escrito, depois de instaurado inquérito pela Polícia Civil ou Federal",
        "pode ser oral, baseada no termo, e o boletim médico pode suprir o exame de corpo de delito",
        "não pode ser oferecida, pois a falta do autor encerra o caso no Juizado",
      ],
      correta: 3,
      explicacao:
        "Sem aplicação de pena pela ausência do autor, o Ministério Público oferece de imediato denúncia oral (art. 77). Ela se baseia no termo de ocorrência, com dispensa do inquérito, e prescinde do exame de corpo de delito quando a materialidade estiver aferida por boletim médico ou prova equivalente (§ 1º).",
      explicacaoErradas:
        "O inquérito é dispensado, por isso “depende de inquérito policial” erra. O exame não é exigido “sempre”. A denúncia pode ser oral, ao contrário de “só pode ser oferecida por escrito”. A ausência do autor leva à denúncia, e não encerra o caso.",
      pegadinha: "Ausência na audiência preliminar não arquiva: leva à denúncia oral.",
      conhecimento: "Se o caso for complexo, o Ministério Público pode pedir o envio das peças ao juízo comum (art. 77, § 2º).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Citação",
      dificuldade: 4,
      raciocinio: "Art. 66: citação pessoal; acusado não encontrado → juízo comum.",
      enunciado:
        "Oferecida a denúncia no Juizado Especial Criminal, o oficial de justiça não encontra o acusado em nenhum dos endereços conhecidos. Pela Lei 9.099/1995:",
      alternativas: [
        "o juiz manda citá-lo por edital, com prazo de quinze dias, e o processo segue no Juizado",
        "o juiz encaminha as peças ao juízo comum, pois no Juizado não há citação por edital",
        "o processo segue à revelia no Juizado, e o acusado é julgado sem ter sido citado",
        "o juiz declara extinta a punibilidade, pois o rito exige a presença do acusado",
        "o Ministério Público passa a propor a transação penal por carta ao último endereço conhecido",
      ],
      correta: 1,
      explicacao:
        "A citação é pessoal, feita no próprio Juizado sempre que possível, ou por mandado. Não encontrado o acusado, o juiz encaminha as peças existentes ao juízo comum para a adoção do procedimento previsto em lei (Lei 9.099/1995, art. 66).",
      explicacaoErradas:
        "O Juizado não faz citação “por edital”. O processo não segue “à revelia” sem citação. Não há extinção da punibilidade por esse motivo. A transação não é proposta “por carta”.",
      pegadinha: "Acusado sumido: o caso sai do Juizado.",
      conhecimento: "A intimação pode ser feita por correspondência com aviso de recebimento ou por qualquer meio idôneo de comunicação (art. 67).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Apelação",
      dificuldade: 5,
      raciocinio: "Art. 82: apelação em 10 dias, com razões, julgada por turma de 3 juízes de primeiro grau.",
      enunciado:
        "O réu é condenado no Juizado Especial Criminal e quer apelar. Pelo art. 82 da Lei 9.099/1995, a apelação:",
      alternativas: [
        "é interposta em cinco dias, e as razões vêm depois, em oito dias, como no rito comum do Código de Processo Penal",
        "vai ao Tribunal de Justiça, em quinze dias, por petição escrita sem necessidade de razões",
        "é interposta em dez dias, com as razões, e pode ser julgada por turma de três juízes de primeiro grau",
        "não cabe, pois as decisões do Juizado são irrecorríveis para garantir a celeridade",
        "cabe só da rejeição da denúncia, e não da sentença que condena o réu",
      ],
      correta: 2,
      explicacao:
        "Da rejeição da denúncia ou queixa e da sentença cabe apelação, que poderá ser julgada por turma de três juízes em exercício no primeiro grau. Ela é interposta em dez dias, por petição escrita com as razões e o pedido, e o recorrido responde em dez dias (Lei 9.099/1995, art. 82).",
      explicacaoErradas:
        "O prazo não é de “cinco dias” com razões depois. A apelação não vai ao “Tribunal de Justiça” e exige razões. Cabe recurso, por isso “irrecorríveis” erra. Cabe também da sentença, e não “só da rejeição da denúncia”.",
      pegadinha: "No Juizado, apelação e razões vêm juntas, em 10 dias.",
      conhecimento: "Se a sentença for confirmada pelos próprios fundamentos, a súmula do julgamento serve de acórdão (art. 82, § 5º).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Suspensão condicional do processo",
      dificuldade: 5,
      raciocinio: "Art. 89: pena mínima de até 1 ano, ainda que o crime não seja de menor potencial.",
      enunciado:
        "A PRF prende em flagrante um motorista com capacidade psicomotora alterada por álcool (art. 306 do CTB: detenção de seis meses a três anos). Ele nunca foi processado nem condenado. Quanto aos institutos da Lei 9.099/1995:",
      alternativas: [
        "cabe transação penal, pois a pena mínima de seis meses basta para torná-lo de menor potencial ofensivo",
        "não cabe nenhum benefício, pois a pena máxima passa de dois anos e o crime é considerado grave",
        "cabe a suspensão do processo por um a dois anos, proposta pelo juiz de ofício",
        "cabe composição dos danos civis, que extingue a punibilidade do motorista",
        "cabe propor a suspensão condicional do processo, pois a pena mínima não passa de um ano",
      ],
      correta: 4,
      explicacao:
        "Nos crimes com pena mínima igual ou inferior a um ano, abrangidos ou não pela lei, o Ministério Público, ao oferecer a denúncia, pode propor a suspensão do processo por dois a quatro anos, presentes os demais requisitos (Lei 9.099/1995, art. 89). O art. 306 não é de menor potencial, pois a pena máxima é de 3 anos.",
      explicacaoErradas:
        "Conta a pena máxima para o menor potencial, por isso “cabe transação penal” erra. O art. 89 alcança crimes fora da lei, ao contrário de “não cabe nenhum benefício”. O prazo é de dois a quatro anos, proposto pelo Ministério Público, e não “um a dois anos”. Não há vítima determinada para a “composição dos danos civis”.",
      pegadinha: "Transação olha a pena máxima; suspensão do processo olha a mínima.",
      conhecimento: "Expirado o prazo sem revogação, o juiz declara extinta a punibilidade, e a prescrição não corre durante a suspensão (art. 89, §§ 5º e 6º).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Revogação da suspensão",
      dificuldade: 5,
      raciocinio: "Art. 89, § 4º: processo por contravenção → revogação facultativa.",
      enunciado:
        "Durante o período de prova da suspensão condicional do processo, o acusado passa a ser processado por uma contravenção penal. Pelo art. 89 da Lei 9.099/1995:",
      alternativas: [
        "a suspensão é revogada obrigatoriamente, como ocorre em qualquer novo processo",
        "o juiz declara extinta a punibilidade, pois contravenção não interfere na suspensão",
        "o prazo de prescrição volta a correr a partir do novo processo, sem revogação",
        "a suspensão pode ser revogada, pois a revogação por contravenção é facultativa",
        "o período de prova é prorrogado automaticamente por mais dois anos, sem revogação",
      ],
      correta: 3,
      explicacao:
        "A suspensão será revogada se o beneficiário vier a ser processado por outro crime ou não reparar o dano sem motivo justificado (§ 3º). Ela poderá ser revogada se ele vier a ser processado por contravenção ou descumprir outra condição (§ 4º).",
      explicacaoErradas:
        "A revogação obrigatória é para novo processo por crime, e não para “qualquer novo processo”. O juiz não declara extinta a punibilidade só por isso. A prescrição não corre durante a suspensão, por isso “o prazo de prescrição volta a correr” erra. A lei não prevê prorrogação “automaticamente por mais dois anos”.",
      pegadinha: "Crime: revogação obrigatória. Contravenção: facultativa.",
      conhecimento: "Entre as condições estão reparar o dano, salvo impossibilidade, e comparecer mensalmente a juízo (art. 89, § 1º).",
    },
    {
      topico: "Lei 9.099/1995",
      subassunto: "Violência doméstica contra a mulher",
      dificuldade: 4,
      raciocinio: "Lei 11.340/2006, art. 41: a Lei 9.099 não se aplica, qualquer que seja a pena.",
      enunciado:
        "Numa fiscalização, a PRF flagra um crime praticado com violência doméstica e familiar contra a mulher, cuja pena máxima não passa de dois anos. Pelo art. 41 da Lei 11.340/2006:",
      alternativas: [
        "não se aplica a Lei 9.099/1995, qualquer que seja a pena prevista",
        "aplica-se a Lei 9.099/1995, pois o que importa é a pena máxima de até dois anos",
        "aplica-se só a transação penal, vedada apenas a composição dos danos civis",
        "aplica-se a Lei 9.099/1995 se a vítima desistir da representação na audiência",
        "aplica-se só a suspensão condicional do processo, que fica a critério do juiz",
      ],
      correta: 0,
      explicacao:
        "Aos crimes praticados com violência doméstica e familiar contra a mulher, independentemente da pena prevista, não se aplica a Lei 9.099/1995 (Lei 11.340/2006, art. 41). Por isso não há termo circunstanciado, transação penal nem suspensão condicional do processo nesses casos.",
      explicacaoErradas:
        "A pena não importa, por isso “o que importa é a pena máxima” erra. Não cabe “só a transação penal” nem “só a suspensão condicional do processo”. A desistência da vítima não traz a Lei 9.099 de volta.",
      pegadinha: "Violência doméstica contra a mulher: nada de Juizado.",
      conhecimento: "Súmula 536 do STJ: a suspensão condicional do processo e a transação penal não se aplicam aos delitos sujeitos ao rito da Lei Maria da Penha.",
    },
    {
      topico: "Lei 10.259/2001",
      subassunto: "Juizado Especial Federal",
      dificuldade: 5,
      raciocinio: "CF, art. 109, IV: a Justiça Federal não julga contravenções, mesmo contra a União.",
      enunciado:
        "A PRF registra uma contravenção penal praticada em detrimento de um serviço da União numa rodovia federal. Quanto ao julgamento:",
      alternativas: [
        "cabe ao Juizado Especial Federal Criminal, pois há interesse da União no fato",
        "cabe à Justiça Estadual, pois a Constituição exclui as contravenções da Justiça Federal",
        "cabe a uma vara federal comum, pois contravenção contra a União não é de menor potencial ofensivo",
        "cabe à Justiça Militar da União, por envolver bem público federal",
        "cabe ao Juizado Especial Federal Cível, que julga causas de até sessenta salários mínimos",
      ],
      correta: 1,
      explicacao:
        "O Juizado Especial Federal Criminal julga as infrações de menor potencial ofensivo de competência da Justiça Federal (Lei 10.259/2001, art. 2º). Mas a Constituição exclui as contravenções da competência federal, mesmo em detrimento de bens, serviços ou interesse da União (CF, art. 109, IV).",
      explicacaoErradas:
        "O interesse da União não leva a contravenção ao “Juizado Especial Federal Criminal”. Toda contravenção é de menor potencial ofensivo, por isso “não é de menor potencial ofensivo” erra. A “Justiça Militar da União” não julga o caso. O “Juizado Especial Federal Cível” trata de causas cíveis.",
      pegadinha: "Contravenção nunca vai à Justiça Federal.",
      conhecimento: "Súmula 38 do STJ: compete à Justiça Estadual comum julgar contravenção, ainda que praticada em detrimento de bens, serviços ou interesse da União ou de suas entidades.",
    },
  ],
};
