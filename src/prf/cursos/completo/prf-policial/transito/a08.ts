import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-08",
  resumo: {
    ideia:
      "Penalidade pune a infração. Medida administrativa protege a segurança no momento e complementa a punição. O processo tem prazos curtos, e perder um deles pode encerrar o direito de punir.",
    itens: [
      {
        termo: "Quem responde",
        faz: "Proprietário: documento e conservação. Condutor: atos ao dirigir. Embarcador e transportador: excesso de peso.",
      },
      {
        termo: "Multas e pontos",
        faz: "Gravíssima R$ 293,47 e 7 pontos. Grave R$ 195,23 e 5. Média R$ 130,16 e 4. Leve R$ 88,38 e 3.",
      },
      {
        termo: "Suspensão",
        faz: "Em 12 meses: 20 pontos com 2 ou mais gravíssimas, 30 com uma, 40 sem nenhuma.",
        pista: "Atividade remunerada: sempre 40.",
      },
      {
        termo: "Cassação",
        faz: "Dirigir suspenso, reincidir em 12 meses em certas infrações ou ser condenado por delito de trânsito. Volta após 2 anos.",
      },
      {
        termo: "Advertência",
        faz: "Deve ser imposta na infração leve ou média, se não houve outra infração nos últimos 12 meses.",
      },
      {
        termo: "Retenção e remoção",
        faz: "Sanou no local: libera. Sem sanar e com segurança: entrega a condutor habilitado, com prazo de 30 dias na retenção e 15 na remoção.",
      },
      {
        termo: "Prazos do processo",
        faz: "Autuação em 30 dias. Defesa prévia de no mínimo 30 dias. Penalidade em 180 dias, ou 360 com defesa prévia.",
      },
      {
        termo: "Desconto",
        faz: "80% do valor até o vencimento. 60% para quem adere ao sistema eletrônico e abre mão de defesa e recurso.",
      },
      {
        termo: "Recursos",
        faz: "Jari, com efeito suspensivo. Depois, 30 dias para o Cetran ou, se a penalidade é da União, para o colegiado especial.",
      },
      {
        termo: "Leilão",
        faz: "Não reclamado em 60 dias, vai a leilão. Conservado sem arrematação em dois leilões vira sucata.",
      },
    ],
    cuidado: "As regras de remoção e leilão agora estão na Res. Contran 1.025/2026, que revogou a 623/2016.",
  },
  questoes: [
    {
      topico: "Responsabilidade",
      subassunto: "Excesso de peso",
      dificuldade: 5,
      raciocinio: "O embarcador responde quando duas condições aparecem juntas.",
      enunciado:
        "Na balança, um caminhão com carga de um único remetente tem peso aferido maior que o declarado na nota fiscal. Pelo art. 257 do CTB, a infração de excesso cabe",
      alternativas: [
        "ao condutor, pois todo ato praticado na direção é de sua responsabilidade",
        "ao proprietário, pois o excesso é uma questão de conservação do veículo",
        "ao transportador, pois a carga é sempre responsabilidade de quem a leva",
        "ao embarcador, pois é o único remetente e declarou peso menor",
        "ao órgão de fiscalização, que deve conferir a carga antes da saída da viagem",
      ],
      correta: 3,
      explicacao:
        "O § 4º faz o embarcador responder quando, ao mesmo tempo, é o único remetente da carga e o peso declarado é inferior ao aferido.",
      explicacaoErradas:
        "“ao condutor” ignora a regra própria da carga. “ao proprietário” trata de conservação. “ao transportador” vale nos §§ 5º e 6º. “órgão de fiscalização” não responde por infração.",
      pegadinha: "Punir sempre quem está dirigindo.",
      conhecimento: "Se o peso declarado superar o limite legal, transportador e embarcador respondem solidariamente, pelo § 6º.",
    },
    {
      topico: "Responsabilidade",
      subassunto: "Indicação do condutor",
      dificuldade: 5,
      raciocinio: "Pessoa jurídica paga uma segunda multa se não indicar.",
      enunciado:
        "Uma empresa, dona do veículo, não indica o condutor infrator em 30 dias e o infrator não é identificado. Pelo art. 257, § 8º, do CTB,",
      alternativas: [
        "a multa original é anulada, pois a infração não tem autor identificado",
        "é lavrada nova multa de 2 vezes a original, que fica mantida",
        "é lavrada nova multa no lugar da original, com o mesmo valor desta",
        "os pontos vão ao sócio com maior cota, salvo prova contrária sua",
        "a empresa perde o registro do veículo até a indicação",
      ],
      correta: 1,
      explicacao:
        "O § 8º manda lavrar nova multa ao proprietário pessoa jurídica, mantida a original, de valor igual a 2 vezes o da multa originária, com defesa prévia e recursos.",
      explicacaoErradas:
        "“anulada” e “no lugar da original” contrariam “mantida a originada pela infração”. “sócio” e “perde o registro” não constam do parágrafo.",
      pegadinha: "Achar que a nova multa substitui a primeira.",
      conhecimento: "O proprietário pode ter um principal condutor cadastrado, pelo § 10.",
    },
    {
      topico: "Suspensão",
      subassunto: "Pontos",
      dificuldade: 4,
      raciocinio: "Conte as gravíssimas antes de olhar os pontos.",
      enunciado:
        "Em 12 meses, um condutor sem atividade remunerada somou 33 pontos, com uma única infração gravíssima. Outro somou 33 pontos sem nenhuma gravíssima. Pelo art. 261 do CTB,",
      alternativas: [
        "os dois sofrem suspensão, pois o limite geral da lei é de 20 pontos",
        "nenhum sofre suspensão, pois o limite geral da lei é de 40 pontos",
        "só o segundo sofre suspensão, pois somou infrações em maior número",
        "os dois escapam, pois só há suspensão com duas ou mais gravíssimas",
        "só o primeiro sofre suspensão, pois com uma gravíssima o limite é 30",
      ],
      correta: 4,
      explicacao: "Com uma gravíssima o limite é 30 pontos. Sem nenhuma, 40. Com duas ou mais, 20.",
      explicacaoErradas:
        "“limite geral” de 20 ou de 40 ignora a escala. “maior número” não é critério. “duas ou mais gravíssimas” é só a primeira faixa.",
      pegadinha: "Decorar um limite único.",
      conhecimento: "Com pontos, a suspensão vai de 6 meses a 1 ano e, na reincidência, de 8 meses a 2 anos.",
    },
    {
      topico: "Suspensão",
      subassunto: "Atividade remunerada",
      dificuldade: 5,
      raciocinio: "Para quem vive de dirigir, a natureza da infração não muda o limite.",
      enunciado:
        "Um motorista profissional, com atividade remunerada anotada, soma 32 pontos em 12 meses, com três infrações gravíssimas. Pelo art. 261, § 5º, do CTB, ele",
      alternativas: [
        "ainda não sofre suspensão por pontos e pode fazer curso preventivo",
        "sofre suspensão, pois com duas ou mais gravíssimas o limite cai a 20",
        "sofre suspensão, pois o limite profissional é de 30 pontos em 12 meses",
        "perde apenas a anotação de atividade remunerada, por 12 meses",
        "tem o direito de dirigir cassado, por causa das três infrações gravíssimas",
      ],
      correta: 0,
      explicacao:
        "A suspensão vem aos 40 pontos, independentemente da natureza das infrações. Ao atingir 30 pontos em 12 meses, ele pode fazer o curso preventivo de reciclagem.",
      explicacaoErradas:
        "“limite cai a 20” aplica a regra geral. “limite profissional é de 30” confunde o ponto do curso com o da suspensão. “perde apenas a anotação” e “cassado” não constam do § 5º.",
      pegadinha: "Trocar os 30 pontos do curso pelos 40 da suspensão.",
      conhecimento: "Quem faz o curso tem os pontos eliminados e só pode repetir a opção depois de 12 meses.",
    },
    {
      topico: "Cassação",
      subassunto: "Hipóteses",
      dificuldade: 4,
      raciocinio: "Separe a primeira infração da reincidência.",
      enunciado:
        "Um condutor foi punido pelo art. 165 do CTB em março e, em novembro do mesmo ano, foi novamente autuado pelo art. 165. Pelo art. 263, II, a consequência da reincidência é",
      alternativas: [
        "advertência por escrito, por ser a segunda infração cometida no ano",
        "nova suspensão com prazo em dobro, por decisão da Jari competente",
        "cassação do documento de habilitação, com reabilitação após 2 anos",
        "suspensão pelo prazo de 12 meses, sem qualquer outra consequência",
        "cassação perpétua, por se tratar de infração ligada ao uso de álcool",
      ],
      correta: 2,
      explicacao:
        "A reincidência em 12 meses nas infrações dos arts. 162, III, 163, 164, 165, 173, 174 e 175 gera cassação. Pelo § 2º, a reabilitação pode ser requerida depois de 2 anos.",
      explicacaoErradas:
        "“advertência” não cabe em gravíssima. “prazo em dobro” e “12 meses” não são o efeito do art. 263. “perpétua” contraria o § 2º.",
      pegadinha: "Parar na suspensão e esquecer a cassação.",
      conhecimento: "Quem é cassado refaz o processo de habilitação depois de 2 anos, por decisão fundamentada e com ampla defesa.",
    },
    {
      topico: "Advertência",
      subassunto: "Art. 267",
      dificuldade: 5,
      raciocinio: "O verbo da lei é “deverá”.",
      enunciado:
        "Um condutor comete infração de natureza média. Ele não cometeu nenhuma outra infração nos últimos 12 meses. Pelo art. 267 do CTB, a advertência por escrito",
      alternativas: [
        "é uma faculdade da autoridade, que pode preferir aplicar a multa",
        "só cabe em infração leve, e a média sempre é punida com multa",
        "exige pedido escrito do condutor, feito no prazo da defesa prévia",
        "vale apenas para condutor que já tem mais de 5 anos de habilitação",
        "deverá ser imposta, pois é infração média sem outra em 12 meses",
      ],
      correta: 4,
      explicacao:
        "O art. 267 usa “deverá”: a advertência é imposta à infração leve ou média, punível com multa, se o infrator não cometeu outra infração nos 12 meses anteriores.",
      explicacaoErradas:
        "“faculdade” era o texto antigo. “só cabe em infração leve” esquece a média. “pedido escrito” e “5 anos de habilitação” não constam do artigo.",
      pegadinha: "Decorar a redação antiga, em que a autoridade “poderia” advertir.",
      conhecimento: "A contagem olha os 12 meses anteriores à infração, e não o ano civil.",
    },
    {
      topico: "Medidas administrativas",
      subassunto: "Retenção e remoção",
      dificuldade: 5,
      raciocinio: "Quando a falha fica sem conserto no local, o prazo depende da medida.",
      enunciado:
        "A equipe da PRF encontra uma irregularidade que não pode ser sanada no local, em veículo seguro para circular, e um condutor habilitado se apresenta. Nos casos de retenção e de remoção, o prazo máximo para regularizar é de, respectivamente,",
      alternativas: ["30 e 15 dias", "15 e 30 dias", "30 e 30 dias", "15 e 15 dias", "60 e 30 dias"],
      correta: 0,
      explicacao:
        "No art. 270, § 2º, o prazo é de até 30 dias. No art. 271, § 9º-A, é de até 15 dias. Nos dois casos, recolhe-se o CLA contra recibo.",
      explicacaoErradas:
        "“15 e 30” inverte os prazos. “30 e 30” e “15 e 15” igualam medidas diferentes. “60 e 30” traz prazo que não existe nesses parágrafos.",
      pegadinha: "Usar um só prazo para as duas medidas.",
      conhecimento: "Sem a regularização, entra restrição administrativa no Renavam, que só sai com a prova de que tudo foi resolvido.",
    },
    {
      topico: "Processo administrativo",
      subassunto: "Prazos",
      dificuldade: 5,
      raciocinio: "Autuação e penalidade têm prazos diferentes.",
      enunciado:
        "Um auto foi lavrado sem abordagem do condutor. A notificação da autuação só foi expedida 40 dias depois. Pelo art. 281, § 1º, II, do CTB, o auto",
      alternativas: [
        "continua válido, pois o prazo da notificação é de 180 dias do cometimento",
        "continua válido, pois a demora só aumenta o prazo da defesa prévia do dono",
        "continua válido se houver defesa prévia, caso em que o prazo sobe a 360 dias",
        "será arquivado e seu registro julgado insubsistente",
        "será enviado à Jari, que decide se aceita o atraso do órgão de trânsito",
      ],
      correta: 3,
      explicacao: "O auto é arquivado e julgado insubsistente se a notificação da autuação não sair em no máximo 30 dias.",
      explicacaoErradas:
        "“180 dias” e “360 dias” são da notificação da penalidade, no art. 282, § 6º. “aumenta o prazo” e “Jari” não têm base no § 1º.",
      pegadinha: "Trocar a notificação da autuação pela da penalidade.",
      conhecimento: "O descumprimento dos prazos do art. 282, § 6º, gera a decadência do direito de aplicar a penalidade.",
    },
    {
      topico: "Processo administrativo",
      subassunto: "Desconto da multa",
      dificuldade: 4,
      raciocinio: "O desconto maior exige abrir mão de defender-se.",
      enunciado:
        "Um condutor aderiu ao sistema de notificação eletrônica antes do envio da notificação da autuação e declarou nele que reconhece a infração, sem defesa nem recurso. Pelo art. 284 do CTB, ele pode pagar a multa por",
      alternativas: [
        "80% do valor, que é o único desconto previsto no código",
        "60% do valor, até o vencimento do prazo de pagamento",
        "50% do valor, até a data da decisão da Jari competente",
        "40% do valor, em qualquer tempo após a notificação",
        "20% do valor, por ter renunciado à defesa e ao recurso",
      ],
      correta: 1,
      explicacao: "O § 1º permite o pagamento por 60% do valor, em qualquer fase do processo, até o vencimento, se a adesão for anterior ao envio da notificação da autuação.",
      explicacaoErradas:
        "“único desconto” esquece o § 1º. “50%” não existe. “40%” e “20%” confundem o valor pago com o desconto.",
      pegadinha: "Confundir desconto de 40% com pagamento de 40%.",
      conhecimento: "Quem paga até o vencimento sem essa adesão paga 80% do valor e mantém o direito de recorrer.",
    },
    {
      topico: "Processo administrativo",
      subassunto: "Recursos",
      dificuldade: 5,
      raciocinio: "Depois da Jari, o julgador muda conforme o ente que aplicou a penalidade.",
      enunciado:
        "A multa foi aplicada pela PRF e a Jari negou provimento ao recurso. O responsável quer recorrer de novo. Pelos arts. 288 e 289 do CTB, o recurso deve ser interposto em 30 dias e julgado",
      alternativas: [
        "pelo Cetran do Estado onde o veículo foi licenciado, em 24 meses",
        "pelo Contran, em sessão plenária, por maioria absoluta de votos",
        "por colegiado especial integrado por presidentes de Junta",
        "pelo Contrandife, em razão da sede do órgão no Distrito Federal",
        "pela mesma Jari, em nova sessão, com outro relator",
      ],
      correta: 2,
      explicacao:
        "Penalidade de órgão da União vai ao colegiado especial: Coordenador-Geral da Jari, Presidente da Junta que apreciou o recurso e mais um Presidente de Junta.",
      explicacaoErradas:
        "“Cetran” e “Contrandife” julgam penalidades estaduais, municipais ou do DF. “Contran” não é a instância do art. 289. “mesma Jari” só cabe quando há uma única Jari.",
      pegadinha: "Mandar tudo ao Cetran.",
      conhecimento: "Da decisão de provimento, quem recorre é a autoridade que impôs a penalidade, pelo art. 288, § 1º.",
    },
    {
      topico: "Medidas administrativas",
      subassunto: "Leilão",
      dificuldade: 5,
      raciocinio: "Sessenta dias levam ao leilão. Dois leilões vazios mudam a classe do veículo.",
      enunciado:
        "Um veículo removido e classificado como conservado não foi reclamado no prazo, passou por dois leilões e não foi arrematado. Pela Res. Contran 1.025/2026, ele",
      alternativas: [
        "é devolvido ao último proprietário, sem cobrança de multas e despesas",
        "continua em novos leilões, até alguém arrematar, sem limite de tentativas",
        "é incorporado à frota do órgão que fez a remoção, sem nenhum custo",
        "volta ao pátio por mais 60 dias, para ser reclamado pelo proprietário",
        "é reclassificado como sucata, vedado seu retorno à circulação",
      ],
      correta: 4,
      explicacao:
        "O art. 30 da resolução reclassifica como sucata o conservado que passa por dois leilões sem arrematação, sem retorno à circulação, como prevê o art. 328, § 3º, do CTB.",
      explicacaoErradas:
        "“devolvido”, “sem limite de tentativas”, “incorporado” e “mais 60 dias” não constam do art. 30.",
      pegadinha: "Achar que o leilão se repete sem fim.",
      conhecimento: "O prazo para reclamar é de 60 dias do recolhimento, e a preparação do leilão pode começar depois de 30 dias.",
    },
  ],
};
