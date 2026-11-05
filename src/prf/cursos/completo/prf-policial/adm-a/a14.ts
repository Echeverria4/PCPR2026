import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-14",
  resumo: {
    ideia:
      "O regime disciplinar liga cada proibição a uma pena, e o processo disciplinar é o caminho para aplicá-la. Decore os prazos e a pergunta central: qual pena essa conduta atrai?",
    itens: [
      {
        termo: "Advertência",
        faz: "Art. 117, I a VIII e XIX. É registrada por escrito.",
      },
      {
        termo: "Suspensão",
        faz: "Até 90 dias. Reincidência em falta de advertência e art. 117, XVII e XVIII.",
        pista: "Pode virar multa de 50% por dia, se houver conveniência para o serviço.",
      },
      {
        termo: "Demissão",
        faz: "Casos do art. 132, como corrupção, improbidade, abandono e art. 117, IX a XVI.",
        pista: "Nesses casos não há escolha de pena menor.",
      },
      {
        termo: "Abandono e inassiduidade",
        faz: "Abandono: mais de 30 dias seguidos, de forma intencional. Inassiduidade: 60 dias intercalados em 12 meses.",
      },
      {
        termo: "Três responsabilidades",
        faz: "Civil, penal e administrativa se acumulam. A absolvição penal só afasta a administrativa se negar o fato ou a autoria.",
      },
      {
        termo: "Prescrição",
        faz: "5 anos (demissão), 2 anos (suspensão), 180 dias (advertência), contados da ciência da autoridade.",
        pista: "Interrompida, volta a correr por inteiro após 140 dias.",
      },
      {
        termo: "Sindicância",
        faz: "Até 30 dias, prorrogáveis por igual prazo. Pode gerar arquivamento, advertência, suspensão de até 30 dias ou PAD.",
      },
      {
        termo: "Processo disciplinar",
        faz: "Comissão de 3 servidores estáveis. Prazo de 60 dias, prorrogáveis por igual prazo. Fases: instauração, inquérito e julgamento.",
      },
      {
        termo: "Afastamento preventivo",
        faz: "Até 60 dias, prorrogáveis por igual prazo, sem perda da remuneração.",
      },
      {
        termo: "Revisão",
        faz: "A qualquer tempo, com fatos novos, a pedido ou de ofício. Não pode agravar a pena.",
      },
    ],
    cuidado: "O STF declarou inconstitucional a proibição perpétua de retorno do art. 137, parágrafo único.",
  },
  questoes: [
    {
      topico: "Penalidades",
      subassunto: "Proibições e penas",
      dificuldade: 5,
      raciocinio: "I a VIII e XIX: advertência. XVII e XVIII: suspensão. IX a XVI: demissão.",
      enunciado:
        "Três servidores federais violam o art. 117 da Lei 8.112: o primeiro se recusa a atualizar dados cadastrais quando solicitado, o segundo atribui a colega, sem emergência, tarefas estranhas ao cargo, e o terceiro usa viatura da repartição em mudança particular. As penas são, respectivamente,",
      alternativas: [
        "suspensão, suspensão e demissão",
        "advertência, suspensão e demissão",
        "advertência, advertência e suspensão",
        "advertência, suspensão e suspensão",
        "suspensão, advertência e demissão",
      ],
      correta: 1,
      explicacao: "O art. 129 prevê advertência para o inciso XIX. O art. 130 prevê suspensão para o XVII. O art. 132, XIII, prevê demissão para o XVI.",
      explicacaoErradas:
        "“suspensão, suspensão e demissão” pune demais o primeiro. “advertência, advertência e suspensão” pune de menos os dois últimos. “advertência, suspensão e suspensão” esquece o inciso XVI. “suspensão, advertência e demissão” inverte os dois primeiros.",
      pegadinha: "Achar que usar bem público em assunto particular é falta leve.",
      conhecimento: "A pena considera a natureza, a gravidade, os danos, as agravantes, as atenuantes e os antecedentes (art. 128).",
    },
    {
      topico: "Penalidades",
      subassunto: "Inassiduidade",
      dificuldade: 4,
      raciocinio: "Faltas intercaladas: inassiduidade. Faltas seguidas e intencionais: abandono.",
      enunciado:
        "Em doze meses, um servidor faltou sem causa justificada em 62 dias intercalados, sem nunca passar de 20 dias seguidos. Pela Lei 8.112, há",
      alternativas: [
        "abandono de cargo, pois passou de 30 dias de ausência",
        "abandono de cargo, apurado em procedimento sumário",
        "inassiduidade habitual, punida com suspensão de até 90 dias",
        "inassiduidade habitual, punida com demissão",
        "só desconto em folha, sem pena",
      ],
      correta: 3,
      explicacao: "O art. 139 define a inassiduidade habitual como 60 dias de falta, de forma interpolada, em 12 meses. O art. 132, III, prevê demissão, e o art. 140 usa o rito sumário.",
      explicacaoErradas:
        "“abandono de cargo” exige mais de 30 dias consecutivos e intenção (art. 138). “suspensão de até 90 dias” erra a pena. “desconto em folha” ignora a infração.",
      pegadinha: "Somar faltas intercaladas para chegar a abandono.",
      conhecimento: "O rito sumário do art. 133 também vale para a acumulação ilegal de cargos.",
    },
    {
      topico: "Prescrição",
      subassunto: "Súmula 635 do STJ",
      dificuldade: 5,
      raciocinio: "60 + 60 + 20 = 140 dias.",
      enunciado:
        "Uma infração punível com suspensão chegou à ciência da autoridade competente, e o PAD foi validamente instaurado um ano depois. Pela jurisprudência do STJ, a prescrição",
      alternativas: [
        "volta a correr por inteiro 140 dias depois da instauração",
        "volta a correr de onde parou, assim que o PAD é instaurado",
        "fica suspensa até a decisão final, sem prazo de retomada",
        "corre desde o dia do fato, e não da ciência da autoridade",
        "não é afetada, pois só a decisão final a interrompe",
      ],
      correta: 0,
      explicacao: "A Súmula 635 do STJ diz que o prazo começa na ciência da autoridade competente, é interrompido pelo primeiro ato válido de instauração e volta a fluir por inteiro após 140 dias.",
      explicacaoErradas:
        "“de onde parou” descreve suspensão, e não interrupção. “sem prazo de retomada” tornaria a punição imprescritível. “dia do fato” contraria o art. 142, § 1º. “só a decisão final” contraria o § 3º.",
      pegadinha: "Ler o § 3º sem o limite de 140 dias.",
      conhecimento: "Os 140 dias somam 60 de processo, 60 de prorrogação e 20 de julgamento.",
    },
    {
      topico: "Sindicância",
      subassunto: "Sindicância x PAD",
      dificuldade: 4,
      raciocinio: "Suspensão acima de 30 dias só por processo disciplinar.",
      enunciado:
        "Ao fim de uma sindicância, a autoridade conclui que a pena cabível é de suspensão por 45 dias. Nesse caso, ela",
      alternativas: [
        "aplica a pena ali mesmo, pois a sindicância admite suspensão",
        "aplica a pena ali mesmo, desde que ouça o servidor",
        "arquiva a sindicância, pois ela não admite suspensão",
        "reduz a pena para 30 dias, para poder aplicá-la ali",
        "deve instaurar processo disciplinar, que é obrigatório",
      ],
      correta: 4,
      explicacao: "O art. 145, II, limita a sindicância à advertência ou suspensão de até 30 dias. O art. 146 torna obrigatório o processo disciplinar para suspensão acima de 30 dias.",
      explicacaoErradas:
        "“aplica a pena ali mesmo” passa do limite do art. 145. “arquiva” erra, pois a sindicância admite suspensão de até 30 dias. “reduz a pena” contorna a lei.",
      pegadinha: "Esquecer o limite de 30 dias.",
      conhecimento: "Demissão, cassação e destituição também exigem processo disciplinar.",
    },
    {
      topico: "Processo disciplinar",
      subassunto: "Afastamento preventivo",
      dificuldade: 4,
      raciocinio: "É medida cautelar, e não pena. Por isso mantém a remuneração.",
      enunciado:
        "Para que um servidor não influa na apuração, a autoridade instauradora determina seu afastamento do exercício do cargo. Esse afastamento pode durar",
      alternativas: [
        "até 60 dias, sem remuneração, prorrogáveis por mais 60 dias",
        "até 30 dias, com remuneração, sem prorrogação",
        "até 60 dias, com remuneração, prorrogáveis por igual prazo",
        "até o fim do processo, com metade da remuneração",
        "até 120 dias seguidos, com a perda das vantagens",
      ],
      correta: 2,
      explicacao: "O art. 147 prevê até 60 dias, sem prejuízo da remuneração, com prorrogação por igual prazo. Depois disso, os efeitos cessam, ainda que o processo não tenha terminado.",
      explicacaoErradas:
        "“sem remuneração” trata a cautelar como pena. “até 30 dias” encurta o prazo. “até o fim do processo” ignora o limite. “perda das vantagens” contraria o art. 147.",
      pegadinha: "Achar que o afastamento corta a remuneração.",
      conhecimento: "O afastamento pode ser usado para que o servidor não atrapalhe a prova.",
    },
    {
      topico: "Responsabilidades",
      subassunto: "Independência das instâncias",
      dificuldade: 4,
      raciocinio: "Só negar o fato ou a autoria afasta a falta administrativa.",
      enunciado:
        "Um servidor responde a PAD e a ação penal pelo mesmo fato e é absolvido no juízo criminal por falta de provas. No PAD, a responsabilidade administrativa",
      alternativas: [
        "pode subsistir, pois a absolvição não negou o fato nem a autoria",
        "é afastada, pois toda absolvição criminal vincula a Administração",
        "é afastada, pois a esfera penal prevalece sobre as demais",
        "fica suspensa até o fim do prazo de prescrição penal",
        "só subsiste se a absolvição ocorrer em segundo grau",
      ],
      correta: 0,
      explicacao: "O art. 125 diz que as sanções são independentes. O art. 126 afasta a responsabilidade administrativa só na absolvição que nega a existência do fato ou a autoria.",
      explicacaoErradas:
        "“toda absolvição” e “esfera penal prevalece” ignoram o art. 126. “suspensa” e “segundo grau” não têm base na lei.",
      pegadinha: "Tratar falta de provas como negativa de autoria.",
      conhecimento: "Há ainda a falta residual: o que não foi crime pode ser infração (Súmula 18 do STF).",
    },
    {
      topico: "Processo disciplinar",
      subassunto: "Jurisprudência",
      dificuldade: 5,
      raciocinio: "Quase toda nulidade no PAD exige prejuízo. Procure a que tem requisito próprio.",
      enunciado:
        "Em PAD, a defesa de um servidor apresenta várias teses. Pela jurisprudência do STF e do STJ, está correta a de que",
      alternativas: [
        "a falta de advogado constituído, por si só, torna nulo o processo",
        "a denúncia anônima nunca pode dar início a uma apuração",
        "o excesso de prazo, por si só, anula todo o processo",
        "a prova emprestada exige autorização judicial e contraditório",
        "a portaria de instauração deve detalhar todos os fatos",
      ],
      correta: 3,
      explicacao: "A Súmula 591 do STJ admite a prova emprestada no PAD, se autorizada pelo juízo competente e respeitados o contraditório e a ampla defesa.",
      explicacaoErradas:
        "“falta de advogado” contraria a Súmula Vinculante 5. “denúncia anônima” é aceita com investigação prévia (Súmula 611). “excesso de prazo” exige prejuízo (Súmula 592). “detalhar todos os fatos” contraria a Súmula 641.",
      pegadinha: "Usar a antiga Súmula 343 do STJ, superada pela Súmula Vinculante 5.",
      conhecimento: "A Súmula 665 do STJ limita o controle judicial do PAD à regularidade e à legalidade.",
    },
    {
      topico: "Penalidades",
      subassunto: "Súmula 650 do STJ",
      dificuldade: 5,
      raciocinio: "Na lista do art. 132, a autoridade não escolhe pena.",
      enunciado:
        "A comissão conclui que um servidor de ótimo histórico praticou corrupção, hipótese do art. 132 da Lei 8.112. A autoridade quer aplicar suspensão por causa dos bons antecedentes. Segundo o STJ, ela",
      alternativas: [
        "pode fazê-lo, pois o art. 128 manda considerar os antecedentes",
        "não pode, pois não há discricionariedade nesse caso",
        "pode fazê-lo, desde que motive a decisão nos autos",
        "pode fazê-lo, se o servidor reparar o dano ao erário",
        "não pode, salvo se a comissão propuser a pena menor",
      ],
      correta: 1,
      explicacao: "A Súmula 650 do STJ diz que não há discricionariedade para aplicar pena diversa da demissão quando caracterizada hipótese do art. 132.",
      explicacaoErradas:
        "“art. 128” não abre essa escolha. “motive a decisão” e “reparar o dano” não mudam a pena. “comissão propuser” não existe como exceção.",
      pegadinha: "Aplicar a proporcionalidade para reduzir a demissão.",
      conhecimento: "A demissão por improbidade pode vir do PAD, sem condenação judicial (Súmula 651 do STJ).",
    },
    {
      topico: "Processo disciplinar",
      subassunto: "Julgamento",
      dificuldade: 4,
      raciocinio: "O relatório vincula, salvo se contrariar as provas.",
      enunciado:
        "A comissão propõe advertência, mas as provas dos autos mostram infração punível com demissão. A autoridade julgadora",
      alternativas: [
        "deve acatar o relatório, que a vincula em qualquer caso",
        "deve arquivar o caso e ouvir o servidor",
        "pode agravar a pena, mas só até a suspensão de 30 dias",
        "só pode abrandar a pena, pois a lei proíbe agravá-la",
        "pode agravar a pena, desde que de forma motivada",
      ],
      correta: 4,
      explicacao: "O art. 168 manda acatar o relatório, salvo quando contrário às provas. Nesse caso, a autoridade pode, motivadamente, agravar, abrandar ou isentar.",
      explicacaoErradas:
        "“em qualquer caso” ignora a ressalva. “arquivar” não é a solução da lei. “até a suspensão” cria um limite. “só pode abrandar” contraria o parágrafo único.",
      pegadinha: "Confundir com a revisão, que não agrava.",
      conhecimento: "A alteração da capitulação legal pela autoridade não anula o PAD (Súmula 672 do STJ).",
    },
    {
      topico: "Penalidades",
      subassunto: "Retorno ao serviço público",
      dificuldade: 5,
      raciocinio: "A Constituição não admite pena de caráter perpétuo.",
      enunciado:
        "Um servidor federal foi demitido por corrupção. Anos depois, é aprovado em novo concurso federal. Sobre a regra do art. 137, parágrafo único, da Lei 8.112, o STF decidiu que",
      alternativas: [
        "a proibição perpétua de retorno é válida, pois protege a moralidade",
        "a proibição de retorno só vale por dez anos, por decisão do STF",
        "a proibição perpétua de retorno é inconstitucional",
        "o retorno depende de reabilitação aprovada pela CGU",
        "o retorno é livre no dia seguinte à demissão",
      ],
      correta: 2,
      explicacao: "Na ADI 2.975, o STF declarou inconstitucional o parágrafo único do art. 137, por ser proibição perpétua, e comunicou o Congresso para que trate do prazo, se quiser.",
      explicacaoErradas:
        "“é válida” contraria a ADI 2.975. “dez anos” e “reabilitação aprovada pela CGU” não foram fixados pelo STF. “dia seguinte” não decorre da decisão.",
      pegadinha: "Decorar o artigo sem saber da decisão do STF.",
      conhecimento: "O caput do art. 137 traz incompatibilidade de 5 anos para o art. 117, IX e XI.",
    },
    {
      topico: "Processo disciplinar",
      subassunto: "Revisão",
      dificuldade: 4,
      raciocinio: "Revisão só melhora a situação do punido.",
      enunciado:
        "Cinco anos depois de punido com suspensão, um servidor apresenta fato novo capaz de mostrar sua inocência e pede a revisão do processo. A revisão",
      alternativas: [
        "não cabe, pois já passou o prazo de dois anos",
        "cabe, mas pode agravar a pena, se a prova for contra ele",
        "só cabe de ofício, por ato da autoridade que o puniu",
        "cabe a qualquer tempo, e dela não pode vir pena maior",
        "cabe só se houver decisão judicial que a autorize",
      ],
      correta: 3,
      explicacao: "O art. 174 permite a revisão a qualquer tempo, a pedido ou de ofício, com fatos novos. O art. 182, parágrafo único, proíbe o agravamento.",
      explicacaoErradas:
        "“prazo de dois anos” confunde com a prescrição da suspensão. “pode agravar” contraria o art. 182. “só cabe de ofício” exclui o pedido. “decisão judicial” não é exigida.",
      pegadinha: "Confundir o prazo da revisão com o da prescrição.",
      conhecimento: "Julgada procedente, a destituição de cargo em comissão é convertida em exoneração.",
    },
    {
      topico: "Seguridade social",
      subassunto: "Cargo em comissão",
      dificuldade: 4,
      raciocinio: "O plano é para quem tem vínculo efetivo. Só a saúde escapa.",
      enunciado:
        "Uma pessoa sem cargo efetivo é nomeada apenas para cargo em comissão na União. Quanto ao Plano de Seguridade Social da Lei 8.112, ela",
      alternativas: [
        "tem direito a todos os benefícios, como qualquer servidor",
        "não tem direito aos benefícios, salvo assistência à saúde",
        "tem direito só à aposentadoria e à pensão por morte",
        "não tem direito a nada, nem à assistência à saúde do plano",
        "tem direito a tudo, depois de 5 anos no cargo em comissão",
      ],
      correta: 1,
      explicacao: "O art. 183, § 1º, nega os benefícios ao ocupante só de cargo em comissão, com exceção da assistência à saúde.",
      explicacaoErradas:
        "“todos os benefícios” e “tem direito a tudo” ignoram o § 1º. “aposentadoria” é o que a lei retira. “nem à assistência” esquece a exceção.",
      pegadinha: "Esquecer a exceção da saúde.",
      conhecimento: "Esse agente fica vinculado ao Regime Geral de Previdência Social (art. 40, § 13, da CF).",
    },
  ],
};
