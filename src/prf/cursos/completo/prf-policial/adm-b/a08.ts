import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-b-08",
  resumo: {
    ideia:
      "A Lei 8.112 é o estatuto dos servidores federais. Aqui valem as formas de entrar e sair do cargo, as vantagens, as licenças e o direito de petição, com muitos prazos.",
    itens: [
      {
        termo: "Provimento e vacância",
        faz: "Promoção e readaptação são as duas hipóteses que aparecem nas duas listas.",
      },
      {
        termo: "Substituição",
        faz: "É automática e cumulativa. A retribuição só vem em afastamento acima de 30 dias, pelos dias que excederem.",
      },
      {
        termo: "Gratificação natalina",
        faz: "1/12 da remuneração de dezembro por mês de exercício. Fração de 15 dias ou mais conta como mês inteiro.",
      },
      {
        termo: "Insalubridade e periculosidade",
        faz: "Não se somam: o servidor opta por um. O direito acaba quando o risco é eliminado.",
      },
      {
        termo: "Hora extra e noturno",
        faz: "Extra: 50%, até 2 horas por jornada. Noturno: 22h às 5h, 25%, hora de 52 minutos e 30 segundos.",
        pista: "Na hora extra noturna, os 25% incidem sobre o valor já aumentado em 50%.",
      },
      {
        termo: "Férias",
        faz: "Só se interrompem por calamidade, comoção interna, júri, serviço militar ou eleitoral, ou necessidade declarada pela autoridade máxima.",
      },
      {
        termo: "Doença em família",
        faz: "A cada 12 meses: até 60 dias com remuneração e até 90 dias sem remuneração.",
      },
      {
        termo: "Interesses particulares",
        faz: "Até 3 anos, sem remuneração, a critério da Administração, interrompível a qualquer tempo.",
      },
      {
        termo: "Mandato classista",
        faz: "Sem remuneração, dura o mandato e pode ser renovada na reeleição. Só para eleito em direção ou representação.",
      },
      {
        termo: "Direito de petição",
        faz: "Reconsideração à mesma autoridade, uma só vez. Recurso à superior, pelo chefe imediato. Prazo de 30 dias para os dois.",
      },
      {
        termo: "Prescrição de requerer",
        faz: "5 anos para demissão, cassação e interesse patrimonial. 120 dias nos demais casos.",
      },
    ],
    cuidado:
      "Nenhum desconto incide sobre a remuneração sem lei ou mandado judicial, e a reposição do mês anterior à folha é imediata e em parcela única.",
  },
  questoes: [
    {
      topico: "Substituição",
      subassunto: "Retribuição do substituto",
      dificuldade: 5,
      raciocinio: "O substituto assume na hora, mas só recebe pelo que passar de 30 dias.",
      enunciado:
        "O chefe de uma delegacia da PRF se afasta legalmente por 40 dias consecutivos, e o substituto previsto no regimento passa a responder pela chefia. Pela Lei 8.112, o substituto",
      alternativas: [
        "recebe a retribuição da chefia só pelos 10 dias que passaram de 30",
        "recebe a retribuição da chefia pelos 40 dias, desde o primeiro dia",
        "só assume depois de novo ato de designação, a cada afastamento do titular",
        "passa a exercer só a chefia, deixando o próprio cargo durante o período",
        "não recebe nada pela chefia, pois a substituição é encargo gratuito do cargo",
      ],
      correta: 0,
      explicacao:
        "O art. 38, § 2º, dá retribuição nos afastamentos superiores a 30 dias consecutivos, paga na proporção dos dias de efetiva substituição que excederem esse período. Em 40 dias, são 10 dias pagos.",
      explicacaoErradas:
        "“Pelos 40 dias” esquece o trecho “que excederem”. “Novo ato de designação” contraria o § 1º, em que o substituto assume de forma automática. “Só a chefia” contraria o “cumulativamente, sem prejuízo do cargo que ocupa”. “Encargo gratuito” ignora o § 2º.",
      pegadinha: "Automática é a assunção; o pagamento só vem depois de 30 dias.",
      conhecimento:
        "No período pago, o substituto deve optar pela remuneração de um dos dois cargos, sem somá-las (art. 38, § 1º).",
    },
    {
      topico: "Gratificação natalina",
      subassunto: "Fração de 15 dias",
      dificuldade: 5,
      raciocinio: "Conte os dias do primeiro mês e veja se chegam a 15.",
      enunciado:
        "Servidor entra em exercício em 18 de setembro e permanece no cargo até o fim do ano. Sua remuneração em dezembro é de R$ 6.000,00. A gratificação natalina desse ano será de",
      alternativas: ["R$ 2.000,00", "R$ 1.000,00", "R$ 6.000,00", "R$ 1.750,00", "R$ 1.500,00"],
      correta: 4,
      explicacao:
        "De 18 a 30 de setembro são 13 dias, menos que 15, e esse mês não conta. Restam outubro, novembro e dezembro: 3/12 de R$ 6.000,00 dão R$ 1.500,00 (art. 63 e parágrafo único).",
      explicacaoErradas:
        "“R$ 2.000,00” conta setembro como mês inteiro. “R$ 1.000,00” conta só 2 meses. “R$ 6.000,00” paga o valor cheio, que exige o ano todo. “R$ 1.750,00” conta meio mês, e a lei não trabalha com frações: ou o mês conta, ou não.",
      pegadinha: "Só fração igual ou superior a 15 dias vira mês integral.",
      conhecimento:
        "A gratificação é paga até o dia 20 de dezembro e não entra no cálculo de nenhuma outra vantagem (arts. 64 e 66).",
    },
    {
      topico: "Adicionais",
      subassunto: "Insalubridade e periculosidade",
      dificuldade: 4,
      raciocinio: "Duas regras: não se acumulam, e gestante ou lactante sai do local.",
      enunciado:
        "Laudo reconhece que uma servidora federal faz jus tanto ao adicional de insalubridade quanto ao de periculosidade. Depois, ela engravida. Pela Lei 8.112, ela",
      alternativas: [
        "deve optar por um adicional e, na gestação, passa a local salubre",
        "recebe os dois adicionais, e a gestação não muda o local de trabalho",
        "recebe os dois adicionais até o parto, quando ambos ficam suspensos",
        "deve optar por um adicional, que fica mantido para sempre, mesmo sem o risco",
        "recebe só o maior adicional e fica em licença paga até o fim da lactação",
      ],
      correta: 0,
      explicacao:
        "O art. 68, § 1º, manda optar por um dos adicionais. O art. 69, parágrafo único, afasta a gestante ou lactante desses locais, enquanto durar a gestação e a lactação, para atividades em local salubre e em serviço não penoso e não perigoso.",
      explicacaoErradas:
        "“Recebe os dois adicionais” contraria a opção do § 1º. “Mantido para sempre” contraria o § 2º, que encerra o direito com a eliminação do risco. “Só o maior” tira a escolha da servidora, e “licença paga” não está na regra, que muda o local de trabalho.",
      pegadinha: "A lei manda mudar o local de trabalho, não dar licença.",
      conhecimento:
        "Na mesma linha do art. 68, § 2º, o direito ao adicional cessa com a eliminação das condições ou dos riscos que o justificaram.",
    },
    {
      topico: "Serviço extraordinário",
      subassunto: "Hora extra noturna",
      dificuldade: 5,
      raciocinio: "Primeiro os 50%; depois os 25% sobre o valor já aumentado.",
      enunciado:
        "O valor da hora normal de um servidor é R$ 40,00. Em situação excepcional, ele presta uma hora de serviço extraordinário às 23h. Pelos arts. 73 e 75 da Lei 8.112, essa hora vale",
      alternativas: ["R$ 60,00", "R$ 70,00", "R$ 50,00", "R$ 80,00", "R$ 75,00"],
      correta: 4,
      explicacao:
        "O serviço extraordinário tem acréscimo de 50%: R$ 60,00. O art. 75, parágrafo único, faz os 25% do noturno incidirem sobre esse valor: R$ 60,00 × 1,25 = R$ 75,00.",
      explicacaoErradas:
        "“R$ 60,00” só aplica o extra. “R$ 50,00” só aplica o noturno. “R$ 70,00” soma 50% e 25% sobre a hora normal, sem aplicar um sobre o outro. “R$ 80,00” dobra a hora, sem base na lei.",
      pegadinha: "Os percentuais se multiplicam, não se somam.",
      conhecimento:
        "O serviço extraordinário só atende situação excepcional e temporária, no limite de 2 horas por jornada (art. 74).",
    },
    {
      topico: "Férias",
      subassunto: "Interrupção",
      dificuldade: 4,
      raciocinio: "Necessidade do serviço interrompe férias, mas quem declara é a autoridade máxima.",
      enunciado:
        "Policial federal em férias é chamado de volta pelo chefe imediato por causa de operações comuns no fim de semana. Pela Lei 8.112, a interrupção",
      alternativas: [
        "é válida, pois o chefe imediato pode interromper férias por necessidade do serviço",
        "é inválida, porque férias iniciadas nunca são interrompidas",
        "só vale com necessidade do serviço declarada pela autoridade máxima do órgão",
        "só vale em calamidade pública, e o saldo de férias se perde por falta de previsão",
        "é válida, e o saldo será gozado em até três etapas, a critério do chefe imediato",
      ],
      correta: 2,
      explicacao:
        "O art. 80 limita a interrupção a calamidade pública, comoção interna, convocação para júri, serviço militar ou eleitoral, ou necessidade do serviço declarada pela autoridade máxima do órgão ou entidade.",
      explicacaoErradas:
        "“Chefe imediato” troca a autoridade da lei. “Nunca são interrompidas” ignora a lista do art. 80. “Só em calamidade” corta as demais causas, e o saldo não se perde. “Em até três etapas” contraria o parágrafo único: o restante é gozado de uma só vez.",
      pegadinha: "O saldo das férias interrompidas é gozado de uma só vez.",
      conhecimento:
        "O parcelamento em até três etapas é regra da marcação das férias, a pedido do servidor e no interesse da Administração (art. 77, § 3º).",
    },
    {
      topico: "Licenças",
      subassunto: "Doença em pessoa da família",
      dificuldade: 5,
      raciocinio: "60 com remuneração, 90 sem, a cada 12 meses.",
      enunciado:
        "Servidor precisa cuidar do enteado doente. Perícia oficial confirma que a assistência direta é indispensável e não pode ser conciliada com o trabalho. Pelo art. 83 da Lei 8.112, em cada período de 12 meses, ele",
      alternativas: [
        "pode ter até 60 dias com remuneração e até 90 dias sem remuneração",
        "não tem direito, pois enteado não está no rol da licença por doença em família",
        "pode ter até 30 dias com remuneração e até 60 dias sem remuneração",
        "pode ter até 90 dias com remuneração e até 60 dias sem remuneração",
        "pode ter licença remunerada pelo prazo que a perícia fixar, sem limite de dias",
      ],
      correta: 0,
      explicacao:
        "O art. 83, § 2º, limita a licença, incluídas as prorrogações, a até 60 dias com remuneração e até 90 dias sem remuneração, consecutivos ou não, a cada 12 meses. O enteado está no rol do caput.",
      explicacaoErradas:
        "“Enteado não está no rol” contraria o caput, que cita padrasto, madrasta e enteado. “Até 30 dias” e “até 90 dias com remuneração” trocam os números. “Sem limite de dias” ignora o § 2º.",
      pegadinha: "Inverter os números é a armadilha clássica: 60 pagos e 90 sem pagamento.",
      conhecimento:
        "O rol também inclui cônjuge ou companheiro, pais, filhos e dependente que viva às custas do servidor e conste do assentamento funcional.",
    },
    {
      topico: "Direito de petição",
      subassunto: "Reconsideração e recurso",
      dificuldade: 5,
      raciocinio: "Reconsideração não se repete, e o recurso sobe por meio do chefe imediato.",
      enunciado:
        "Servidor teve negado um pedido de reconsideração dirigido à autoridade que proferiu a primeira decisão. Pela Lei 8.112, o próximo passo é que",
      alternativas: [
        "cabe novo pedido de reconsideração, que pode ser renovado até a decisão final",
        "cabe recurso em 10 dias, dirigido à autoridade que negou a reconsideração",
        "não cabe mais nada, pois a reconsideração esgota a via administrativa",
        "cabe recurso em 30 dias, dirigido direto à autoridade máxima, com efeito suspensivo automático",
        "cabe recurso à autoridade superior, em 30 dias, enviado por meio do chefe imediato",
      ],
      correta: 4,
      explicacao:
        "O art. 107, I, admite recurso contra o indeferimento da reconsideração. Ele vai à autoridade imediatamente superior (§ 1º), por intermédio da autoridade a que o requerente está subordinado (§ 2º), no prazo de 30 dias (art. 108).",
      explicacaoErradas:
        "“Pode ser renovado” contraria o art. 106, que proíbe a renovação. “Em 10 dias” é prazo da Lei 9.784, e a autoridade superior é que recebe o recurso. “Esgota a via” ignora o art. 107. “Autoridade máxima” pula a escala, e o efeito suspensivo fica a juízo da autoridade (art. 109).",
      pegadinha: "Efeito suspensivo não é automático: depende da autoridade competente.",
      conhecimento:
        "Se o pedido ou o recurso for provido, os efeitos retroagem à data do ato impugnado (art. 109, parágrafo único).",
    },
    {
      topico: "Direito de petição",
      subassunto: "Prescrição",
      dificuldade: 4,
      raciocinio: "Demissão, cassação e dinheiro têm 5 anos. O resto, 120 dias.",
      enunciado:
        "Um servidor foi demitido, e outro teve negada, em ato publicado, uma remoção a pedido, sem efeito patrimonial. Pelo art. 110 da Lei 8.112, o direito de requerer prescreve em",
      alternativas: [
        "5 anos para o demitido e 120 dias para quem teve a remoção negada",
        "120 dias para o demitido e 5 anos para quem teve a remoção negada",
        "5 anos para os dois, porque o prazo geral da Administração é quinquenal",
        "120 dias para os dois, contados só da ciência pessoal do interessado",
        "30 dias para os dois, que é o prazo comum do recurso na Lei 8.112",
      ],
      correta: 0,
      explicacao:
        "O art. 110 dá 5 anos para atos de demissão, de cassação de aposentadoria ou disponibilidade e para os que afetem interesse patrimonial ou créditos do trabalho. Nos demais casos, salvo outro prazo em lei, são 120 dias.",
      explicacaoErradas:
        "“120 dias para o demitido” inverte os prazos. “5 anos para os dois” ignora o inciso II. “Ciência pessoal” esquece que, com ato publicado, conta-se da publicação. “30 dias” é o prazo do recurso, não a prescrição do direito.",
      pegadinha: "Prazo para recorrer é uma coisa; prescrição do direito de requerer é outra.",
      conhecimento:
        "A prescrição é de ordem pública, a Administração não pode relevá-la, e o pedido de reconsideração e o recurso cabíveis a interrompem (arts. 111 e 112).",
    },
    {
      topico: "Provimento e vacância",
      subassunto: "Formas nas duas listas",
      dificuldade: 4,
      raciocinio: "Quem muda de cargo ocupa um e deixa outro vago.",
      enunciado:
        "Na Lei 8.112, duas hipóteses aparecem tanto na lista de formas de provimento (art. 8º) quanto na de causas de vacância (art. 33). São elas",
      alternativas: [
        "nomeação e reversão",
        "demissão e exoneração",
        "aproveitamento e recondução",
        "promoção e readaptação",
        "promoção e aposentadoria",
      ],
      correta: 3,
      explicacao:
        "A promoção e a readaptação preenchem um cargo e, ao mesmo tempo, deixam vago aquele que o servidor ocupava. Por isso constam dos dois artigos.",
      explicacaoErradas:
        "“Nomeação e reversão” e “aproveitamento e recondução” são só provimento. “Demissão e exoneração” são só vacância. “Promoção e aposentadoria” acerta a primeira, mas aposentadoria é só vacância.",
      pegadinha: "A posse em outro cargo inacumulável é vacância, não provimento.",
      conhecimento:
        "O art. 33 lista exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento.",
    },
    {
      topico: "Reposição ao erário",
      subassunto: "Mês anterior à folha",
      dificuldade: 5,
      raciocinio: "Mês anterior à folha é a exceção: nada de parcelar.",
      enunciado:
        "Valor indevido foi pago a um servidor em maio, e ficou comprovado o dever de devolver. A folha de junho está em processamento. Pelo art. 46 da Lei 8.112, a reposição",
      alternativas: [
        "será parcelada a pedido do servidor, com parcelas de pelo menos 10% da remuneração",
        "será feita de imediato, em uma só parcela, por se tratar do mês anterior à folha",
        "depende de ordem judicial, pois todo desconto em folha exige decisão do Judiciário",
        "será feita em até 30 parcelas, pois a remuneração é verba protegida",
        "só pode ser feita em dezembro, junto com a gratificação natalina",
      ],
      correta: 1,
      explicacao:
        "O art. 46, § 2º, manda fazer a reposição imediatamente, em uma única parcela, quando o pagamento indevido ocorreu no mês anterior ao do processamento da folha.",
      explicacaoErradas:
        "“Será parcelada” é a regra geral do caput e do § 1º, afastada pelo § 2º. “Ordem judicial” ignora que o art. 45 também admite desconto por imposição legal. “Até 30 parcelas” confunde parcelas com os 30 dias para pagamento. “Em dezembro” não tem base.",
      pegadinha: "O piso de 10% vale para o parcelamento, que aqui não cabe.",
      conhecimento:
        "Fora dessa hipótese, a reposição é comunicada ao servidor para pagamento em até 30 dias, com parcelamento a pedido do interessado.",
    },
    {
      topico: "Licenças",
      subassunto: "Particulares x classista",
      dificuldade: 5,
      raciocinio: "Uma depende da Administração; a outra acompanha o mandato.",
      enunciado:
        "Comparando a licença para tratar de interesses particulares (art. 91) com a licença para mandato classista (art. 92) da Lei 8.112, é correto afirmar que",
      alternativas: [
        "as duas são vedadas em estágio probatório, mas só a primeira é remunerada",
        "a primeira é direito do servidor, e a segunda depende de critério da Administração",
        "a primeira dura até 5 anos, e a segunda é concedida a qualquer filiado da entidade",
        "a primeira não pode ser interrompida, e a segunda conta para promoção por merecimento",
        "a primeira é discricionária e a segunda dura o tempo do mandato, ambas sem remuneração",
      ],
      correta: 4,
      explicacao:
        "A licença do art. 91 é concedida “a critério da Administração”, por até três anos e sem remuneração. A do art. 92 é sem remuneração, tem a duração do mandato e pode ser renovada na reeleição.",
      explicacaoErradas:
        "“Só a primeira é remunerada” erra, pois nenhuma é. “Direito do servidor” inverte a natureza da primeira. “Até 5 anos” troca o prazo de 3 anos, e a segunda é só para eleito em direção ou representação. “Não pode ser interrompida” contraria o parágrafo único do art. 91, e o mandato classista não conta para merecimento.",
      pegadinha: "As duas são sem remuneração, e nenhuma cabe em estágio probatório.",
      conhecimento:
        "A entidade precisa estar cadastrada no órgão competente para que seu dirigente eleito tenha a licença do art. 92 (§ 1º).",
    },
  ],
};
