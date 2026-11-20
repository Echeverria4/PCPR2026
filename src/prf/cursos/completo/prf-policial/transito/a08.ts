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
    {
      topico: "Processo administrativo",
      subassunto: "AIT como notificação",
      dificuldade: 5,
      raciocinio: "Não basta assinar: importa quem assina e o que o auto traz.",
      enunciado:
        "Em duas abordagens, o agente lavra o AIT com a data do fim do prazo para a defesa. No primeiro, assina o principal condutor previamente identificado do veículo. No segundo, assina um amigo do proprietário, que pegou o carro emprestado. Pelo art. 3º, § 5º, da Resolução Contran 918/2022, vale como notificação da autuação",
      alternativas: [
        "o AIT dos dois casos, pois a assinatura de quem dirigia sempre vale como notificação da autuação",
        "só o AIT do segundo caso, pois o principal condutor deve receber a notificação pelo correio",
        "só o AIT do primeiro caso, e no segundo a notificação vai ao proprietário em até 30 dias",
        "nenhum dos dois, pois só a assinatura do próprio proprietário transforma o AIT em notificação",
        "o AIT dos dois casos, desde que o proprietário confirme as assinaturas até o fim do prazo de defesa",
      ],
      correta: 2,
      explicacao:
        "O § 5º faz o AIT valer como NA quando assinado pelo condutor que é o proprietário ou o principal condutor previamente identificado, desde que traga a data do fim do prazo da defesa. No segundo caso isso não ocorre, e o art. 4º manda expedir a NA ao proprietário em até 30 dias da infração.",
      explicacaoErradas:
        "“sempre vale como notificação” ignora a condição de ser proprietário ou principal condutor. “o principal condutor deve receber a notificação pelo correio” contraria o § 5º. “só a assinatura do próprio proprietário” esquece o principal condutor previamente identificado. “confirme as assinaturas” não existe na resolução.",
      pegadinha: "Achar que qualquer assinatura de quem dirigia transforma o AIT em notificação.",
      conhecimento:
        "Para indicar o condutor infrator, o principal condutor se equipara ao proprietário (art. 5º, § 8º). Sem a NA no prazo de 30 dias, o AIT é arquivado (art. 4º, § 1º).",
    },
    {
      topico: "Processo administrativo",
      subassunto: "Prazo da defesa",
      dificuldade: 4,
      raciocinio: "Conte os dias a partir da expedição da NA.",
      enunciado:
        "Uma NA foi expedida em 2 de maio e marcou o fim do prazo da defesa da autuação para 20 de maio. Pelo art. 4º, § 2º, da Resolução Contran 918/2022, esse prazo",
      alternativas: [
        "é irregular, pois a defesa não pode ter prazo inferior a 30 dias, contados da expedição da NA",
        "é regular, pois o prazo mínimo da defesa da autuação é de 15 dias, contados da expedição",
        "é regular, pois cada órgão autuador fixa o prazo livremente, desde que a data conste na própria NA",
        "é irregular, pois a defesa não pode ter prazo inferior a 60 dias, contados da infração",
        "é regular, pois os 30 dias de prazo contam da data da infração, e não da expedição da NA",
      ],
      correta: 0,
      explicacao:
        "O § 2º do art. 4º exige que a NA traga a data do fim do prazo da defesa, que não será inferior a 30 dias, contados da expedição da NA ou da publicação por edital. De 2 a 20 de maio são só 18 dias.",
      explicacaoErradas:
        "“15 dias” vale só para as NA expedidas antes de 12 de abril de 2021 (§ 6º). “fixa o prazo livremente” ignora o mínimo de 30 dias. “60 dias” e “contam da data da infração” erram o prazo e o marco inicial, que é a expedição da NA.",
      pegadinha: "Aplicar o prazo antigo de 15 dias.",
      conhecimento:
        "A NA tem de ser expedida em até 30 dias da infração (art. 4º, caput), e o prazo da defesa conta da expedição, e não da infração.",
    },
    {
      topico: "Responsabilidade",
      subassunto: "Indicação de não habilitado",
      dificuldade: 5,
      raciocinio: "Quem entrega o carro a quem não pode dirigir também responde.",
      enunciado:
        "Uma empresa recebe a NA de uma infração de velocidade e indica como condutor um empregado que não tem habilitação. Pelo art. 5º, §§ 2º e 3º, da Resolução Contran 918/2022,",
      alternativas: [
        "a indicação é recusada, e a empresa responde sozinha pela infração de velocidade, sem outro auto",
        "lavra-se só o auto do art. 162 contra o empregado, pois a empresa não pode ser autuada pelo art. 163",
        "lavra-se o auto do art. 163 contra a empresa, mas o prazo dessa nova NA conta da infração de velocidade",
        "a empresa recebe a multa do art. 257, § 8º, por indicar mal, e o empregado não sofre nenhuma autuação",
        "a empresa é autuada pelo art. 163 e o empregado pelo art. 162, com prazo da NA contado do protocolo",
      ],
      correta: 4,
      explicacao:
        "Se o condutor indicado se enquadra no art. 162, o § 2º manda lavrar auto do art. 163 contra o proprietário, salvo se ele mesmo for o condutor, e auto do art. 162 contra o condutor indicado. Pelo § 3º, o prazo de 30 dias para expedir essas NA conta do protocolo do formulário de indicação.",
      explicacaoErradas:
        "“a indicação é recusada” e “responde sozinha” ignoram o § 2º, que aceita a indicação e gera novos autos. “a empresa não pode ser autuada pelo art. 163” contraria o inciso I. “conta da infração de velocidade” erra o marco do § 3º. “multa do art. 257, § 8º” é para quem não indica o condutor.",
      pegadinha: "Esquecer que o proprietário também é autuado por entregar o veículo.",
      conhecimento:
        "O art. 163 do CTB pune quem entrega a direção do veículo a pessoa nas condições do art. 162, como quem não tem habilitação. A exceção do § 2º, I, é o condutor ser o próprio proprietário.",
    },
    {
      topico: "Responsabilidade",
      subassunto: "Possuidor do veículo",
      dificuldade: 5,
      raciocinio: "O possuidor se equipara ao dono, mas a notificação depende da duração do contrato.",
      enunciado:
        "Uma locadora aluga um carro por contrato de 90 dias, e o locatário consta no Detran como possuidor regularmente registrado. Ele comete uma infração. Pelo art. 8º da Resolução Contran 918/2022, as notificações",
      alternativas: [
        "vão ao locatário, pois o possuidor registrado se equipara ao proprietário em qualquer contrato",
        "vão à locadora, pois só seguem ao possuidor em contrato com vigência de 180 dias ou mais",
        "vão ao locatário e à locadora ao mesmo tempo, que respondem juntos por toda a multa",
        "vão à locadora, pois só seguem ao possuidor em contrato com vigência de um ano ou mais",
        "vão ao locatário, pois basta que o contrato de aluguel tenha vigência de 60 dias ou mais",
      ],
      correta: 1,
      explicacao:
        "O art. 8º equipara ao proprietário o possuidor registrado em penhor, arrendamento mercantil, comodato, aluguel ou arrendamento não vinculado a financiamento. Mas o parágrafo único só manda as notificações ao possuidor quando o contrato tem vigência igual ou superior a 180 dias. Com 90 dias, elas vão à locadora.",
      explicacaoErradas:
        "“em qualquer contrato” ignora o parágrafo único. “ao mesmo tempo” e “respondem juntos” criam uma regra que não existe. “um ano ou mais” e “60 dias ou mais” trocam o prazo de 180 dias.",
      pegadinha: "Esquecer o prazo mínimo do contrato para notificar o possuidor.",
      conhecimento:
        "Abaixo de 180 dias, quem recebe a NA é o proprietário, que pode indicar o locatário como condutor infrator até o prazo fixado na NA (art. 5º).",
    },
    {
      topico: "Processo administrativo",
      subassunto: "Prazo da penalidade",
      dificuldade: 5,
      raciocinio: "A defesa prévia dobra o prazo, mas o marco continua o mesmo.",
      enunciado:
        "Um condutor foi autuado em flagrante, na abordagem, em 10 de janeiro. O proprietário apresentou a defesa prévia no prazo, e ela foi indeferida em julho. Pelo art. 9º da Resolução Contran 918/2022, a notificação da penalidade deve ser expedida em até",
      alternativas: [
        "180 dias, contados da data em que a defesa prévia foi indeferida",
        "360 dias, contados da data em que a defesa prévia foi apresentada",
        "180 dias, contados da infração, pois a defesa prévia não muda esse prazo",
        "360 dias, contados da data em que a infração foi cometida",
        "30 dias, contados do indeferimento, como ocorre com a notificação da autuação",
      ],
      correta: 3,
      explicacao:
        "O § 2º dá 180 dias, contados da infração, para expedir a notificação da penalidade quando a defesa não é apresentada ou é indeferida. Se a defesa prévia foi apresentada em tempo hábil, o § 3º aumenta o prazo para 360 dias, com o mesmo marco: a data da infração.",
      explicacaoErradas:
        "“contados da data em que a defesa prévia foi indeferida” e “contados do indeferimento” erram o marco inicial. “foi apresentada” também erra o marco. “não muda esse prazo” ignora o § 3º. “30 dias” é o prazo da notificação da autuação, e não o da penalidade.",
      pegadinha: "Contar o prazo da decisão da defesa, e não da infração.",
      conhecimento:
        "A regra repete o art. 282, § 6º, do CTB. Perdido o prazo, decai o direito de aplicar a penalidade (§ 7º), e, na autuação sem flagrante, o prazo conta do conhecimento da infração pelo órgão (§ 6º-A).",
    },
    {
      topico: "Processo administrativo",
      subassunto: "Restrição no registro",
      dificuldade: 4,
      raciocinio: "Antes do vencimento, a multa não trava o registro do carro.",
      enunciado:
        "Um proprietário recebe a NP de multa e, antes da data de vencimento nela indicada, quer transferir o carro. Pelo art. 13 da Resolução Contran 918/2022, essa multa",
      alternativas: [
        "não gera restrição no registro até o vencimento, inclusive para transferência",
        "impede a transferência desde a expedição da NP, até que seja paga com ou sem desconto",
        "impede o licenciamento desde a lavratura do AIT, mesmo antes de qualquer notificação",
        "impede a transferência, mas não o licenciamento, até a data de vencimento indicada na NP",
        "só deixa de impedir a transferência se o proprietário pagar com o desconto de 20%",
      ],
      correta: 0,
      explicacao:
        "O art. 13 proíbe qualquer restrição nos arquivos do órgão de trânsito responsável pelo registro do veículo, inclusive para licenciamento e transferência, até a data de vencimento da NP de multa ou enquanto durar o efeito suspensivo sobre o AIT.",
      explicacaoErradas:
        "“desde a expedição da NP” e “desde a lavratura do AIT” antecipam uma restrição que o art. 13 proíbe até o vencimento. “mas não o licenciamento” separa o que o art. 13 trata junto. “desconto de 20%” não é condição para transferir.",
      pegadinha: "Achar que a multa trava o carro assim que chega a notificação.",
      conhecimento:
        "O CTB também proíbe restrição e cobrança de mora enquanto não se encerra a instância administrativa de julgamento (art. 284, § 3º). A data para recorrer é a mesma do pagamento indicada na NP (art. 12, IV).",
    },
    {
      topico: "Processo administrativo",
      subassunto: "Multa paga com atraso",
      dificuldade: 5,
      raciocinio: "Até o fim do mês seguinte ao vencimento, só 1% de juros.",
      enunciado:
        "O proprietário não recorreu, e a multa grave, de R$ 195,23, venceu em 10 de março. Ele pagou em 20 de abril do mesmo ano. Pelos arts. 22 e 23 da Resolução Contran 918/2022, o valor pago foi de",
      alternativas: [
        "R$ 156,18, pois quem paga até o fim do mês seguinte ao vencimento ainda tem os 80%",
        "R$ 214,75, pois o atraso gera multa de mora de 10% sobre o valor original",
        "R$ 199,13, pois há juros de 1% pelo mês do vencimento e mais 1% pelo mês do pagamento",
        "R$ 197,18, pois há só juros de 1% sobre o valor original, pelo mês do pagamento",
        "R$ 195,23 mais a Selic acumulada desde o vencimento, sem outros juros",
      ],
      correta: 3,
      explicacao:
        "Pago entre o dia seguinte ao vencimento e o último dia do mês seguinte, o art. 22 cobra o valor original mais 1% de juros do mês do pagamento: 195,23 × 1,01 = R$ 197,18. A Selic só entra depois disso (art. 23).",
      explicacaoErradas:
        "“ainda tem os 80%” erra: o pagamento por 80% vale só até o vencimento (art. 20). “multa de mora de 10%” não existe na resolução. “1% pelo mês do vencimento” cobra um juro a mais. “Selic acumulada desde o vencimento” é a regra do art. 23, para quem paga depois do mês seguinte, e ainda soma 1%.",
      pegadinha: "Manter o desconto depois do vencimento.",
      conhecimento:
        "Depois do mês seguinte ao vencimento, o valor original recebe a Selic do mês seguinte ao vencimento até o mês anterior ao pagamento, mais 1% do mês do pagamento (art. 23). Esse regime vale para autos lavrados a partir de 1º de novembro de 2016 (art. 19).",
    },
    {
      topico: "Processo administrativo",
      subassunto: "Registro no Renach",
      dificuldade: 4,
      raciocinio: "O registro espera o fim de todos os recursos.",
      enunciado:
        "A PRF aplicou multa por infração gravíssima. A JARI negou o recurso, e o condutor ainda está no prazo para recorrer em segunda instância. Pelo art. 18 da Resolução Contran 918/2022, a penalidade",
      alternativas: [
        "já pode ser cadastrada no Renach, pois a decisão da JARI encerra a discussão sobre a pontuação",
        "é cadastrada no Renach desde a lavratura do AIT e sai de lá se algum recurso for provido",
        "só é cadastrada no Renach depois do pagamento da multa, haja ou não recurso pendente",
        "é cadastrada no Renach quando a JARI julga, e a segunda instância só pode mudar o valor",
        "ainda não pode ser cadastrada no Renach, o que só ocorre depois de esgotados os recursos",
      ],
      correta: 4,
      explicacao:
        "O art. 18 só permite cadastrar as penalidades no Renach depois de esgotados os recursos dos arts. 15 (JARI) e 16 (segunda instância). Enquanto houver prazo para a segunda instância, não há cadastro.",
      explicacaoErradas:
        "“a decisão da JARI encerra a discussão” ignora a segunda instância do art. 16. “desde a lavratura do AIT” antecipa o registro. “depois do pagamento da multa” cria uma condição que não existe. “só pode mudar o valor” limita sem base o recurso de segunda instância.",
      pegadinha: "Registrar a penalidade logo depois da decisão da JARI.",
      conhecimento:
        "O CTB traz a mesma regra no art. 290, parágrafo único. A advertência por escrito também só vai ao prontuário depois de encerrada a instância administrativa (art. 10, § 1º).",
    },
    {
      topico: "Processo administrativo",
      subassunto: "Arrecadação da multa",
      dificuldade: 4,
      raciocinio: "A PRF é órgão da União, e a União arrecada pelo Tesouro.",
      enunciado:
        "A PRF arrecada as multas de trânsito da sua competência. Pelo art. 25 da Resolução Contran 918/2022, com a redação dada pela Resolução 991/2023, ela deve usar",
      alternativas: [
        "o documento de arrecadação dos órgãos estaduais, com repasse automático ao Funset",
        "a Guia de Recolhimento da União do tipo Cobrança ou a plataforma digital PagTesouro",
        "boleto de banco privado escolhido pelo próprio órgão, com repasse mensal ao Tesouro",
        "só o pagamento em dinheiro na rede bancária, vedado o uso de cartão em qualquer caso",
        "a guia do Detran do estado onde a infração ocorreu, que depois repassa o valor à União",
      ],
      correta: 1,
      explicacao:
        "Pelo art. 25, os órgãos autuadores da União, como a PRF, arrecadam as multas da sua competência por GRU do tipo Cobrança ou pela plataforma PagTesouro. O documento próprio definido pelo órgão máximo executivo de trânsito da União, com repasse automático ao Funset, é a regra do art. 24 para os órgãos dos Estados, do DF e dos Municípios.",
      explicacaoErradas:
        "“documento de arrecadação dos órgãos estaduais” lembra o art. 24, que vale para os órgãos dos Estados, do DF e dos Municípios, e não para a PRF. “boleto de banco privado” e “guia do Detran do estado” não têm base. “vedado o uso de cartão” contraria o art. 27, que admite cartão de débito ou crédito, à vista ou em parcelas.",
      pegadinha: "Aplicar à PRF a regra dos órgãos estaduais e municipais.",
      conhecimento:
        "Para aceitar cartão, o órgão arrecadador precisa de autorização do órgão máximo executivo de trânsito da União (art. 27, § 1º). Do valor das multas arrecadadas, 5% vão ao fundo nacional de segurança e educação de trânsito (CTB, art. 320, § 1º).",
    },
    {
      topico: "Responsabilidade",
      subassunto: "Indicação sem assinatura",
      dificuldade: 5,
      raciocinio: "Há um caminho para indicar sem a assinatura do condutor.",
      enunciado:
        "Uma locadora recebe a NA e não consegue a assinatura do cliente que dirigia o carro alugado. Pelo art. 5º, § 1º, da Resolução Contran 918/2022, a indicação do condutor",
      alternativas: [
        "é recusada, pois sem a assinatura original do condutor ela nunca produz efeito",
        "só é aceita com ofício do representante legal da locadora, com cópia da CNH do cliente",
        "pode ser aceita com cópia do contrato com cláusula de responsabilidade e prova da posse",
        "pode ser aceita só com boletim de ocorrência que narre a recusa do cliente em assinar",
        "é aceita sem nenhum documento, pois a locadora é pessoa jurídica e responde pela informação",
      ],
      correta: 2,
      explicacao:
        "Na impossibilidade de colher a assinatura, o § 1º, II, aceita, para veículo das demais pessoas jurídicas, fora da administração pública, cópia de documento com cláusula de responsabilidade por infrações que comprove a posse na hora da infração, com identificação do veículo, do proprietário e do condutor e o período da posse.",
      explicacaoErradas:
        "“nunca produz efeito” ignora a exceção do § 1º. “ofício do representante legal” é a regra do inciso I, para veículo de órgão ou entidade da administração pública. “boletim de ocorrência” não está na resolução. “sem nenhum documento” contraria o § 1º, que exige o contrato.",
      pegadinha: "Achar que a falta da assinatura do condutor sempre derruba a indicação.",
      conhecimento:
        "Sem indicação válida no prazo da NA, o proprietário responde pela infração (art. 6º), e a pessoa jurídica ainda recebe a multa do art. 257, § 8º, do CTB (art. 7º).",
    },
    {
      topico: "Pegadinha Cebraspe",
      subassunto: "Advertência por escrito (art. 267)",
      dificuldade: 5,
      raciocinio: "Ver se o verbo do item é o mesmo da lei: “deverá” e “poderá” mudam tudo.",
      enunciado:
        "Item no estilo Cebraspe: “Poderá ser imposta a penalidade de advertência por escrito à infração de natureza leve ou média, passível de ser punida com multa, caso o infrator não tenha cometido nenhuma outra infração nos últimos doze meses.” Esse item está",
      alternativas: [
        "errado, pois, cumpridos os requisitos, a advertência deverá ser imposta",
        "certo, pois a advertência é uma escolha da autoridade de trânsito",
        "errado, pois a advertência alcança também a infração de natureza grave",
        "errado, pois o prazo sem outra infração é de vinte e quatro meses",
        "errado, pois a advertência vale para a infração leve, e não para a média",
      ],
      correta: 0,
      explicacao:
        "Desde a Lei 14.071/2020, o art. 267 diz “Deverá ser imposta”. Se a infração é leve ou média e o infrator não cometeu outra infração nos últimos 12 meses, a advertência por escrito é obrigatória, e não uma escolha.",
      explicacaoErradas:
        "“escolha da autoridade” era a ideia do texto antigo, que dizia “poderá”. A regra vale só para infração leve ou média, nunca para grave. O prazo é de 12 meses.",
      pegadinha: "Palavra trocada: “Deverá” virou “Poderá”, logo na primeira palavra do item.",
      conhecimento: "Leve ou média + 12 meses sem infração = advertência por escrito, obrigatória.",
    },
    {
      topico: "Pegadinha Cebraspe",
      subassunto: "Prazo da notificação da autuação (art. 281)",
      dificuldade: 5,
      raciocinio: "Conferir o prazo do item com o § 1º, II, e lembrar para que serve o § 2º.",
      enunciado:
        "Item no estilo Cebraspe: “O auto de infração será arquivado e seu registro julgado insubsistente se, no prazo máximo de sessenta dias, não for expedida a notificação da autuação.” Esse item está",
      alternativas: [
        "certo, pois o prazo máximo para expedir a notificação é de sessenta dias",
        "errado, pois o prazo de trinta dias conta da instauração do processo",
        "errado, pois o prazo máximo para expedir a notificação é de trinta dias",
        "errado, pois a falta de notificação só reduz o valor da multa",
        "errado, pois o auto só é arquivado se o condutor apresentar defesa",
      ],
      correta: 2,
      explicacao:
        "O art. 281, § 1º, II, manda arquivar o auto se a notificação da autuação não for expedida no prazo máximo de trinta dias. O item trocou o número por sessenta.",
      explicacaoErradas:
        "Sessenta dias é o número trocado. A contagem a partir da instauração do processo vale só para a suspensão do direito de dirigir e a cassação (§ 2º). Sem notificação no prazo, o auto é arquivado, e não só barateado. O arquivamento não depende de defesa.",
      pegadinha: "Número trocado: 30 dias virou 60 dias.",
      conhecimento: "Notificação da autuação fora dos 30 dias = auto arquivado, mesmo sem defesa.",
    },
    {
      topico: "Pegadinha Cebraspe",
      subassunto: "Suspensão por pontos (art. 261)",
      dificuldade: 5,
      raciocinio: "As faixas de pontos estão certas. Conferir o prazo da suspensão no § 1º.",
      enunciado:
        "Item no estilo Cebraspe: “A suspensão do direito de dirigir será aplicada sempre que o infrator atingir, em doze meses, 20 pontos, se constarem duas ou mais infrações gravíssimas, 30 pontos, se constar uma, ou 40 pontos, se não constar nenhuma, e, nesse caso, a suspensão será de dois a oito meses.” Esse item está",
      alternativas: [
        "certo, pois as faixas de pontos e o prazo são os do art. 261",
        "errado, pois o limite é sempre de 20 pontos, sem olhar as gravíssimas",
        "errado, pois com uma só gravíssima o limite é de 40 pontos",
        "errado, pois a contagem dos pontos é feita em vinte e quatro meses",
        "errado, pois, por pontos, a suspensão vai de seis meses a um ano",
      ],
      correta: 4,
      explicacao:
        "As faixas 20, 30 e 40 pontos estão certas (art. 261, I). O erro está no fim: na suspensão por pontos, o prazo é de 6 meses a 1 ano (§ 1º, I). De 2 a 8 meses é o prazo da suspensão por infração específica (§ 1º, II).",
      explicacaoErradas:
        "“certo” ignora o prazo trocado. O limite de 20 pontos vale só com duas ou mais gravíssimas. Com uma gravíssima, o limite é 30. A contagem é em 12 meses.",
      pegadinha: "Começo certo, final errado: o prazo de 2 a 8 meses é o do inciso II, e não o dos pontos.",
      conhecimento: "Pontos: 6 meses a 1 ano. Infração que já prevê suspensão: 2 a 8 meses, salvo prazo próprio.",
    },
  ],
};
