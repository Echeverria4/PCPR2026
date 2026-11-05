import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-13",
  resumo: {
    ideia:
      "Esta parte da Lei 8.112 trata do que o servidor recebe e de quando pode se ausentar. Quase tudo depende de prazos e da pergunta certa: com ou sem remuneração?",
    itens: [
      {
        termo: "Vencimento e remuneração",
        faz: "Vencimento é a base do cargo. Remuneração é o vencimento mais as vantagens permanentes.",
      },
      {
        termo: "Indenizações",
        faz: "Ajuda de custo, diárias, transporte e auxílio-moradia. Não se incorporam ao vencimento.",
      },
      {
        termo: "Ajuda de custo e diárias",
        faz: "Ajuda de custo: mudança permanente de domicílio. Diária: afastamento eventual, pela metade sem pernoite.",
      },
      {
        termo: "Gratificações e adicionais",
        faz: "Natalina, noturno, serviço extraordinário, férias, insalubridade e outros. Incorporam só nos casos da lei.",
      },
      {
        termo: "Reposição ao erário",
        faz: "Pagamento em até 30 dias, com parcelas de no mínimo 10% da remuneração.",
      },
      {
        termo: "Férias",
        faz: "30 dias, com 12 meses para o primeiro período. Acumula até 2 períodos e parcela em até 3 etapas.",
        pista: "Falta não vai para a conta de férias.",
      },
      {
        termo: "Licenças sem remuneração",
        faz: "Acompanhar cônjuge, interesses particulares (até 3 anos) e mandato classista.",
      },
      {
        termo: "Capacitação",
        faz: "Após cada 5 anos de exercício, até 3 meses, com remuneração. Os períodos não se acumulam.",
      },
      {
        termo: "Afastamentos",
        faz: "Mandato eletivo, estudo ou missão no exterior, organismo internacional e pós-graduação no País.",
        pista: "Organismo internacional: perda total da remuneração.",
      },
      {
        termo: "Concessões",
        faz: "1 dia para doar sangue, até 2 para alistamento eleitoral, 8 para casamento ou falecimento na família.",
      },
    ],
    cuidado: "Tempo de serviço em Estado, Município ou DF conta só para aposentadoria e disponibilidade.",
  },
  questoes: [
    {
      topico: "Indenizações",
      subassunto: "Ajuda de custo",
      dificuldade: 5,
      raciocinio: "Casal de servidores na mesma sede: uma só indenização.",
      enunciado:
        "Um servidor é removido de ofício, com mudança definitiva de domicílio, e recebe ajuda de custo. Depois, o cônjuge, também servidor, passa a ter exercício na mesma sede. Uma nova ajuda de custo ao cônjuge",
      alternativas: [
        "é devida, pois cada servidor tem direito próprio à indenização",
        "é devida pela metade, pois já houve pagamento à família",
        "é devida, se o pedido vier no prazo de um ano",
        "é vedada, pois a lei proíbe o duplo pagamento nesse caso",
        "é vedada só se os dois servidores forem do mesmo órgão federal",
      ],
      correta: 3,
      explicacao: "O art. 53 veda o duplo pagamento de indenização, a qualquer tempo, quando o cônjuge que também é servidor vier a ter exercício na mesma sede.",
      explicacaoErradas:
        "“direito próprio” ignora a vedação. “pela metade” e “prazo de um ano” não existem. “mesmo órgão” é um limite que a lei não traz.",
      pegadinha: "Pensar que a vedação depende de os dois mudarem juntos.",
      conhecimento: "Não há ajuda de custo nas remoções a pedido dos incisos II e III do parágrafo único do art. 36 (art. 53, § 3º).",
    },
    {
      topico: "Indenizações",
      subassunto: "Diárias",
      dificuldade: 4,
      raciocinio: "Sem pernoite, metade.",
      enunciado:
        "Um servidor sai da sede a serviço, de forma eventual, para outra cidade fora da região metropolitana, e volta no mesmo dia, sem pernoite. As diárias",
      alternativas: [
        "são devidas pela metade, pois não houve pernoite",
        "não são devidas, pois só o pernoite gera diária",
        "são devidas por inteiro, pois houve deslocamento a serviço",
        "são trocadas por ajuda de custo, pois ele saiu da sede",
        "só são devidas se o deslocamento for exigência permanente do cargo",
      ],
      correta: 0,
      explicacao: "O art. 58, § 1º, diz que a diária é devida pela metade quando o deslocamento não exige pernoite fora da sede.",
      explicacaoErradas:
        "“só o pernoite” contraria o § 1º. “por inteiro” ignora a redução. “ajuda de custo” é para mudança permanente. “exigência permanente” é justamente o caso em que o § 2º nega as diárias.",
      pegadinha: "Inverter a regra da exigência permanente.",
      conhecimento: "Quem recebe diária e não se afasta deve devolvê-la em 5 dias (art. 59).",
    },
    {
      topico: "Reposição ao erário",
      subassunto: "Erro de cálculo",
      dificuldade: 5,
      raciocinio: "Erro de cálculo não é erro de interpretação da lei.",
      enunciado:
        "Por erro de cálculo da folha, um servidor recebeu valor a mais por meses. Nada indicava o erro, e ele não tinha como percebê-lo. Pela tese do STJ, a devolução",
      alternativas: [
        "é sempre obrigatória, pois o dinheiro público é indisponível",
        "nunca é cabível, pois toda verba salarial é alimentar",
        "depende de sentença judicial transitada em julgado",
        "é obrigatória, e o desconto será feito em parcela única",
        "não é exigida, se ele comprovar a boa-fé objetiva no caso",
      ],
      correta: 4,
      explicacao: "No Tema 1.009, o STJ disse que erro operacional ou de cálculo gera devolução, salvo se o servidor comprovar boa-fé objetiva, em especial que não podia notar o erro.",
      explicacaoErradas:
        "“sempre obrigatória” ignora a ressalva. “nunca é cabível” também exagera. “sentença judicial” não é exigida. “parcela única” contraria o art. 46.",
      pegadinha: "Aplicar a toda hipótese o que vale para erro de interpretação da lei.",
      conhecimento: "No erro de interpretação da lei pela Administração, o Tema 531 do STJ afasta a devolução.",
    },
    {
      topico: "Férias",
      subassunto: "Faltas",
      dificuldade: 4,
      raciocinio: "Falta não se paga com férias.",
      enunciado:
        "Um servidor federal faltou 3 dias sem justificativa e pede que esses dias sejam descontados das férias. Esse pedido",
      alternativas: [
        "é possível, pois ele abre mão de dias que são só dele",
        "é vedado, pois a lei proíbe levar faltas à conta de férias",
        "é possível, se houver a concordância da chefia imediata",
        "é vedado só no primeiro período aquisitivo de férias",
        "é possível até o limite de dez dias em cada período de férias",
      ],
      correta: 1,
      explicacao: "O art. 77, § 2º, veda levar à conta de férias qualquer falta ao serviço.",
      explicacaoErradas:
        "“abre mão” não afasta a vedação. “concordância da chefia” não tem base. “primeiro período” limita o que a lei não limita. “dez dias” é um número inventado.",
      pegadinha: "Pensar que o próprio servidor pode abrir mão dos dias.",
      conhecimento: "As férias só se interrompem nos casos do art. 80, como calamidade pública e júri.",
    },
    {
      topico: "Licenças",
      subassunto: "Estágio probatório",
      dificuldade: 5,
      raciocinio: "No estágio, só as licenças dos incisos I a IV do art. 81.",
      enunciado:
        "Durante o estágio probatório, um servidor pede licença por doença em pessoa da família e, depois, licença para capacitação. Pela Lei 8.112,",
      alternativas: [
        "as duas podem ser concedidas, a critério da chefia",
        "nenhuma pode ser concedida, pois o estágio não se interrompe",
        "só a primeira pode, e o estágio fica suspenso durante ela",
        "só a segunda pode, pois ela melhora o desempenho no cargo",
        "as duas podem, mas sem remuneração em todo o período",
      ],
      correta: 2,
      explicacao: "O art. 20, § 4º, permite no estágio as licenças do art. 81, I a IV. A capacitação é o inciso V. O § 5º suspende o estágio na licença do art. 83.",
      explicacaoErradas:
        "“as duas podem” ignora o limite do § 4º. “nenhuma” também erra, pois o inciso I é permitido. “só a segunda” inverte a regra.",
      pegadinha: "Achar que a licença para capacitação combina com o estágio.",
      conhecimento: "Também cabe afastamento para curso de formação de outro cargo federal.",
    },
    {
      topico: "Licenças",
      subassunto: "Capacitação",
      dificuldade: 4,
      raciocinio: "Cada quinquênio dá até 3 meses, e o que não se usa não se soma.",
      enunciado:
        "Com dez anos de efetivo exercício e nunca tendo usado a licença para capacitação, um servidor pede seis meses seguidos. O pedido",
      alternativas: [
        "pode ser atendido, pois completou dois quinquênios",
        "pode ser atendido, sem remuneração no segundo período",
        "pode ser atendido, se o curso for no exterior",
        "não pode ser atendido, pois a licença é só para cargo de chefia",
        "não pode ser atendido, pois os períodos não se acumulam",
      ],
      correta: 4,
      explicacao: "O art. 87 prevê até três meses após cada quinquênio, no interesse da Administração. O parágrafo único diz que os períodos não são acumuláveis.",
      explicacaoErradas:
        "“dois quinquênios” não somam. “sem remuneração” contraria o caput, que garante a remuneração. “no exterior” não é exceção. “cargo de chefia” não é requisito.",
      pegadinha: "Somar quinquênios como se fossem férias.",
      conhecimento: "A licença depende do interesse da Administração.",
    },
    {
      topico: "Licenças",
      subassunto: "Atividade política",
      dificuldade: 5,
      raciocinio: "Antes do registro, sem pagamento. Depois, vencimentos por no máximo 3 meses.",
      enunciado:
        "Na licença para atividade política, o período entre a escolha em convenção e a véspera do registro e o período que vai do registro ao 10º dia após a eleição são, respectivamente,",
      alternativas: [
        "sem remuneração e, depois, com vencimentos por até 3 meses",
        "com remuneração e, depois, sem remuneração por 3 meses",
        "sem remuneração nos dois períodos, por qualquer prazo",
        "com vencimentos nos dois períodos, por até 6 meses no total",
        "sem remuneração e, depois, com vencimentos por todo o prazo",
      ],
      correta: 0,
      explicacao: "O art. 86 prevê licença sem remuneração até a véspera do registro. O § 2º assegura os vencimentos do cargo efetivo somente pelo período de três meses.",
      explicacaoErradas:
        "“com remuneração” no início inverte a regra. “nos dois períodos” ignora a diferença entre as fases. “6 meses” não existe. “todo o prazo” ignora o limite de três meses.",
      pegadinha: "Esquecer o limite de três meses.",
      conhecimento: "Quem exerce fiscalização na localidade é afastado do cargo a partir do dia seguinte ao registro.",
    },
    {
      topico: "Afastamentos",
      subassunto: "Mandato eletivo",
      dificuldade: 4,
      raciocinio: "Prefeito opta. Vereador com horário compatível acumula.",
      enunciado:
        "Dois servidores federais são eleitos: um para prefeito e outro para vereador, este com horários compatíveis. Pela Lei 8.112,",
      alternativas: [
        "os dois ficam afastados e recebem só o subsídio do mandato",
        "os dois acumulam cargo e mandato, pois há compatibilidade",
        "o prefeito acumula as duas remunerações, e o vereador opta",
        "o prefeito se afasta e opta, e o vereador acumula as vantagens",
        "o prefeito perde o cargo, e o vereador fica afastado com opção",
      ],
      correta: 3,
      explicacao: "O art. 94, II, afasta o prefeito e permite optar pela remuneração. O inciso III, “a”, deixa o vereador com as vantagens do cargo, sem prejuízo da remuneração do mandato.",
      explicacaoErradas:
        "“os dois ficam afastados” vale para mandato federal, estadual ou distrital. “acumulam” não serve ao prefeito. “prefeito acumula” inverte a regra. “perde o cargo” não existe.",
      pegadinha: "Dar ao prefeito a acumulação própria do vereador.",
      conhecimento: "Sem compatibilidade, o vereador se afasta e pode optar pela remuneração.",
    },
    {
      topico: "Concessões",
      subassunto: "Ausências",
      dificuldade: 4,
      raciocinio: "1, 2 e 8.",
      enunciado: "Sem qualquer prejuízo, o servidor pode se ausentar do serviço por",
      alternativas: [
        "2 dias para doar sangue e 5 dias para casamento",
        "1 dia para doar sangue e 5 dias por morte do pai",
        "1 dia para doar sangue e 8 dias por morte de irmão",
        "3 dias para alistamento eleitoral e 8 dias para casamento",
        "1 dia para alistamento eleitoral e 5 dias por morte de filho",
      ],
      correta: 2,
      explicacao: "O art. 97 prevê 1 dia para doação de sangue, até 2 dias para alistamento ou recadastramento eleitoral e 8 dias consecutivos por casamento ou falecimento na família, incluídos os irmãos.",
      explicacaoErradas:
        "“2 dias para doar sangue”, “3 dias para alistamento” e “1 dia para alistamento” trocam os números. “5 dias” não existe no art. 97.",
      pegadinha: "Trocar os números 1, 2 e 8.",
      conhecimento: "Horário especial ao estudante exige compensação (art. 98, § 1º).",
    },
    {
      topico: "Tempo de serviço",
      subassunto: "Serviço em outro ente",
      dificuldade: 5,
      raciocinio: "Fora da União: só aposentadoria e disponibilidade.",
      enunciado:
        "Antes de entrar na União, um servidor trabalhou cinco anos como servidor de um município. Pela Lei 8.112, esse tempo conta",
      alternativas: [
        "para todos os efeitos, inclusive promoção e férias",
        "apenas para aposentadoria e disponibilidade",
        "apenas para o estágio probatório do novo cargo",
        "apenas para adicional por tempo de serviço",
        "para nada, pois o vínculo com o município se encerrou",
      ],
      correta: 1,
      explicacao: "O art. 103, I, conta apenas para aposentadoria e disponibilidade o tempo de serviço público prestado a Estados, Municípios e DF.",
      explicacaoErradas:
        "“todos os efeitos” vale para o serviço federal. “estágio probatório” é por cargo. “adicional por tempo de serviço” não é o que a lei prevê. “para nada” ignora o art. 103.",
      pegadinha: "Tratar o tempo municipal como se fosse federal.",
      conhecimento: "O art. 100 conta para todos os efeitos o serviço público federal, inclusive o das Forças Armadas.",
    },
  ],
};
