import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-09",
  resumo: {
    ideia:
      "Os crimes contra a fé pública protegem a confiança nas moedas, nos documentos e nos sinais oficiais. A falsidade precisa ser capaz de enganar: a grosseira não preenche esses tipos.",
    itens: [
      {
        termo: "Moeda falsa",
        faz: "Art. 289: reclusão de 3 a 12 anos e multa. Quem guarda ou põe em circulação tem a mesma pena.",
      },
      {
        termo: "Recebeu de boa-fé",
        faz: "Quem repassa depois de saber da falsidade responde pelo § 2º: detenção de 6 meses a 2 anos e multa.",
      },
      {
        termo: "Cédula grosseira",
        faz: "Se não imita bem, não há moeda falsa. A Súmula 73 do STJ aponta estelionato, em tese, na Justiça Estadual.",
      },
      {
        termo: "Documento público",
        faz: "Art. 297: reclusão de 2 a 6 anos e multa. O § 2º equipara títulos ao portador, ações, livros mercantis e testamento particular.",
      },
      {
        termo: "Documento particular",
        faz: "Art. 298: reclusão de 1 a 5 anos e multa. Cartão de crédito ou débito entra aqui.",
      },
      {
        termo: "Falsidade ideológica",
        faz: "Art. 299: o papel é verdadeiro, e a mentira está no conteúdo. Exige fim de prejudicar direito, criar obrigação ou alterar fato relevante.",
        pista: "Material ataca a forma. Ideológica ataca o conteúdo.",
      },
      {
        termo: "Uso de documento falso",
        faz: "Art. 304: pena da falsificação. Quem falsifica e usa responde só pelo falso, na posição majoritária.",
      },
      {
        termo: "Competência do uso",
        faz: "Súmula 546 do STJ: define-se pelo órgão a quem o documento foi apresentado, e não por quem o expede.",
      },
      {
        termo: "Falso e estelionato",
        faz: "Súmula 17 do STJ: o falso que se esgota no estelionato, sem mais potencial de dano, é absorvido.",
      },
      {
        termo: "Falsa identidade",
        faz: "Art. 307: atribuir-se identidade falsa, sem usar documento. Subsidiário. Súmula 522 do STJ: a autodefesa não afasta o crime.",
      },
      {
        termo: "Documento alheio",
        faz: "Art. 308: usar como próprio documento verdadeiro de outra pessoa, ou cedê-lo para isso. Subsidiário.",
      },
      {
        termo: "Sinal de veículo",
        faz: "Art. 311: reclusão de 3 a 6 anos e multa. O § 2º, III, pune quem conduz veículo que devia saber adulterado ou remarcado.",
      },
      {
        termo: "Fraude em certame",
        faz: "Art. 311-A: reclusão de 1 a 4 anos e multa. Com dano à administração, 2 a 6 anos. Funcionário público: mais 1/3.",
      },
    ],
    cuidado:
      "Documento verdadeiro de outra pessoa é art. 308. Documento falso é art. 304. Sem documento nenhum, é art. 307.",
  },
  questoes: [
    {
      topico: "Moeda falsa",
      subassunto: "Recebimento de boa-fé",
      dificuldade: 4,
      raciocinio: "A boa-fé acaba no momento em que ele descobre.",
      enunciado:
        "Um motorista recebe como troco, de boa-fé, uma cédula falsa de boa qualidade. Dias depois, percebe a falsidade e usa a cédula para pagar um pedágio. Pelo CP, ele responde",
      alternativas: [
        "por estelionato, por ter enganado o caixa do pedágio",
        "pelo art. 289, § 1º, com reclusão de 3 a 12 anos e multa",
        "por nada, pois recebeu a cédula de boa-fé",
        "pelo art. 289, § 2º, com detenção de 6 meses a 2 anos e multa",
        "pelo art. 289, caput, por ter posto em circulação uma cédula que sabia ser falsa",
      ],
      correta: 3,
      explicacao:
        "O § 2º do art. 289 pune quem, tendo recebido de boa-fé moeda falsa, a restitui à circulação depois de conhecer a falsidade. A pena é de detenção de 6 meses a 2 anos, e multa.",
      explicacaoErradas:
        "“Estelionato” cede ao tipo específico. “§ 1º” alcança quem não recebeu de boa-fé. “Por nada” ignora o que ele fez depois de saber. “Caput” pune quem falsifica.",
      pegadinha: "A forma privilegiada existe justamente para esse caso.",
      conhecimento:
        "A competência para moeda falsa de boa qualidade é da Justiça Federal.",
    },
    {
      topico: "Moeda falsa",
      subassunto: "Falsificação grosseira",
      dificuldade: 5,
      raciocinio: "Se a imitação é ruim, o bem protegido muda.",
      enunciado:
        "Um homem paga uma compra com uma cédula grosseiramente falsificada, em papel comum, e engana uma vendedora que tinha a visão muito ruim. Pela Súmula 73 do STJ, o caso configura",
      alternativas: [
        "moeda falsa, na Justiça Federal, pois a cédula imita a moeda nacional",
        "estelionato, em tese, na Justiça Estadual",
        "fato atípico, por ser crime impossível em qualquer hipótese",
        "moeda falsa, na Justiça Estadual, pelo local da entrega",
        "moeda falsa tentada, na Justiça Federal",
      ],
      correta: 1,
      explicacao:
        "A Súmula 73 do STJ diz que o papel-moeda grosseiramente falsificado configura, em tese, estelionato, de competência da Justiça Estadual. Falta à cédula a aptidão para enganar a coletividade.",
      explicacaoErradas:
        "“Moeda falsa” exige imitação capaz de iludir. “Crime impossível em qualquer hipótese” erra, pois uma vítima foi de fato enganada. “Tentada” e “local da entrega” não têm base.",
      pegadinha: "Grosseira para o público, mas capaz de enganar aquela vítima.",
      conhecimento:
        "Se a falsificação não engana ninguém, pode haver crime impossível.",
    },
    {
      topico: "Falsidade documental",
      subassunto: "Material x ideológica",
      dificuldade: 4,
      raciocinio: "Pergunte se o papel é verdadeiro ou se foi mexido.",
      enunciado:
        "Um motorista raspa a data de validade de sua CNH verdadeira e escreve outra. Outro, ao lavrar escritura pública, declara ao tabelião um estado civil que sabe ser falso, para prejudicar um credor. Quanto aos crimes,",
      alternativas: [
        "os dois são falsidade ideológica, pois os documentos são verdadeiros",
        "os dois são falsificação de documento público, pela fé pública",
        "o primeiro é art. 299, e o segundo é art. 297",
        "o primeiro é art. 304, e o segundo é art. 307",
        "o primeiro é art. 297, e o segundo é art. 299",
      ],
      correta: 4,
      explicacao:
        "Alterar documento público verdadeiro é falso material (art. 297), pois a forma foi atacada. Inserir declaração falsa em documento autêntico é falso ideológico (art. 299).",
      explicacaoErradas:
        "“Os dois são falsidade ideológica” ignora a raspagem. “Os dois são falsificação” ignora que a escritura é autêntica. A troca entre “art. 299” e “art. 297” inverte os casos. “Art. 304” é uso, e “art. 307” é identidade.",
      pegadinha: "Alterar documento verdadeiro também é falso material.",
      conhecimento:
        "O art. 299 prevê 1 a 5 anos para documento público e 1 a 3 anos para o particular.",
    },
    {
      topico: "Falsidade documental",
      subassunto: "Documentos equiparados",
      dificuldade: 5,
      raciocinio: "O rol do § 2º é fechado.",
      enunciado:
        "Para os efeitos do art. 297 do CP, equipara-se a documento público",
      alternativas: [
        "o testamento particular",
        "a procuração particular",
        "o contrato de locação",
        "o recibo de compra de veículo",
        "o cartão de crédito",
      ],
      correta: 0,
      explicacao:
        "O § 2º equipara a documento público o emanado de entidade paraestatal, o título ao portador ou transmissível por endosso, as ações de sociedade comercial, os livros mercantis e o testamento particular.",
      explicacaoErradas:
        "“Procuração”, “contrato de locação” e “recibo” são documentos particulares comuns. “Cartão de crédito” foi equiparado a documento particular pelo parágrafo único do art. 298.",
      pegadinha: "O testamento é particular, mas a proteção é de documento público.",
      conhecimento:
        "O cheque entra como título transmissível por endosso.",
    },
    {
      topico: "Falsidade documental",
      subassunto: "Declaração sujeita a verificação",
      dificuldade: 5,
      raciocinio: "A declaração vale sozinha ou será conferida?",
      enunciado:
        "Para obter justiça gratuita, uma pessoa de boa renda assina declaração falsa de pobreza e a junta ao processo. Segundo o entendimento dos tribunais,",
      alternativas: [
        "há falsidade ideológica, pois houve declaração falsa",
        "há uso de documento falso, com a pena do art. 299",
        "não há crime, pois a declaração se sujeita a verificação",
        "há falsidade material, por ter assinado documento particular",
        "há estelionato contra o Estado, pelas custas que deixou de pagar",
      ],
      correta: 2,
      explicacao:
        "Prevalece que a declaração de pobreza tem presunção relativa e pode ser conferida pelo juiz. Por isso não tem a força probatória exigida pelo art. 299.",
      explicacaoErradas:
        "“Falsidade ideológica” exige documento que prove por si só. “Uso de documento falso” depende de falso anterior. “Material” trata de forma, que não foi atacada. “Estelionato” não é o entendimento adotado.",
      pegadinha: "Nem toda mentira escrita é falsidade ideológica.",
      conhecimento:
        "O juiz pode revogar o benefício e aplicar as sanções processuais.",
    },
    {
      topico: "Falsidade documental",
      subassunto: "Súmula 17 do STJ",
      dificuldade: 4,
      raciocinio: "O documento ainda pode causar novo dano?",
      enunciado:
        "Para comprar um pneu, um homem falsifica a assinatura em um cheque de terceiro e o entrega ao vendedor, que fica com a folha. O cheque não serve para nova fraude. Pela Súmula 17 do STJ, ele",
      alternativas: [
        "responde pelos dois crimes, em concurso material",
        "responde só por estelionato, que absorve o falso",
        "responde só pela falsificação, por ter pena maior",
        "responde pelos dois crimes, em concurso formal",
        "responde só por uso de documento falso, como pós-fato",
      ],
      correta: 1,
      explicacao:
        "A Súmula 17 diz que, quando o falso se exaure no estelionato, sem mais potencialidade lesiva, é por este absorvido. Isso vale ainda que a falsificação tenha pena maior.",
      explicacaoErradas:
        "“Concurso material” e “concurso formal” só cabem se o documento mantiver potencial de dano. “Por ter pena maior” ignora a súmula. “Pós-fato” não descreve esse caso.",
      pegadinha: "A pena maior do falso não impede a absorção.",
      conhecimento:
        "Se o documento puder ser usado de novo, a absorção não se aplica.",
    },
    {
      topico: "Uso de documento falso",
      subassunto: "Falsificar e usar",
      dificuldade: 4,
      raciocinio: "O mesmo agente fez as duas coisas.",
      enunciado:
        "Um homem falsifica ele mesmo um certificado de licenciamento e o apresenta à PRF em uma abordagem. Para a posição majoritária, ele responde",
      alternativas: [
        "pelo art. 297 e pelo art. 304, em concurso material",
        "só pelo art. 304, e o falso é crime-meio absorvido",
        "pelo art. 297 e pelo art. 304, em continuidade delitiva",
        "só pelo art. 297, e o uso é pós-fato impune",
        "só pelo art. 299, pois inseriu dado falso",
      ],
      correta: 3,
      explicacao:
        "Para a posição majoritária, o agente que falsifica e depois usa responde apenas pela falsificação. O uso é pós-fato impune. Quem só usa responde pelo art. 304.",
      explicacaoErradas:
        "“Concurso material” e “continuidade delitiva” somam o que é uma só lesão. “Crime-meio” inverte a relação. “Art. 299” não cabe, pois foi criado um documento inteiro.",
      pegadinha: "O art. 304 é para quem usa sem ter falsificado.",
      conhecimento:
        "A pena do art. 304 é a da falsificação do documento usado.",
    },
    {
      topico: "Falsa identidade",
      subassunto: "Súmula 522 do STJ",
      dificuldade: 4,
      raciocinio: "Sem documento, sobra o art. 307.",
      enunciado:
        "Com mandado de prisão em aberto, um homem abordado pela PRF diz, sem mostrar documento, que tem o nome do irmão. Alega que só quis se defender. Pela Súmula 522 do STJ e pelo CP, o fato é",
      alternativas: [
        "falsa identidade, pois a autodefesa não alcança a mentira",
        "atípico, pois ninguém é obrigado a produzir prova contra si",
        "uso de documento falso, por se apresentar como terceiro",
        "uso de documento alheio, do art. 308 do CP",
        "desobediência, por não se identificar corretamente",
      ],
      correta: 0,
      explicacao:
        "A Súmula 522 afirma que a falsa identidade perante autoridade policial é típica, ainda que em alegada autodefesa. O art. 307 é subsidiário.",
      explicacaoErradas:
        "“Atípico” contraria a súmula. “Uso de documento falso” e “documento alheio” exigem um documento. “Desobediência” não descreve a mentira sobre a identidade.",
      pegadinha: "O silêncio é protegido, mas a mentira sobre quem é, não.",
      conhecimento:
        "A pena do art. 307 é de detenção de 3 meses a 1 ano, ou multa.",
    },
    {
      topico: "Uso de documento falso",
      subassunto: "Súmula 546 do STJ",
      dificuldade: 5,
      raciocinio: "Olhe para quem o documento foi mostrado.",
      enunciado:
        "Um motorista apresenta à PRF, em rodovia federal, uma CNH falsa que comprou pronta. A CNH imita documento expedido por órgão estadual. Quanto ao crime e à competência,",
      alternativas: [
        "é uso de documento falso, na Justiça Estadual, pelo órgão que emitiria a CNH",
        "é falsificação de documento público, na Justiça Federal",
        "é falsa identidade, na Justiça Estadual do local",
        "é uso de documento alheio, na Justiça Federal",
        "é uso de documento falso (art. 304), na Justiça Federal",
      ],
      correta: 4,
      explicacao:
        "Quem só usa responde pelo art. 304. A Súmula 546 do STJ fixa a competência pela entidade ou órgão a quem o documento foi apresentado, sem importar o órgão expedidor. A PRF é órgão federal.",
      explicacaoErradas:
        "“Pelo órgão que emitiria” contraria a súmula. “Falsificação” não cabe, pois ele comprou pronta. “Falsa identidade” exige ausência de documento. “Documento alheio” exige documento verdadeiro.",
      pegadinha: "Quem manda na competência é o destinatário do documento.",
      conhecimento:
        "Apresentada à polícia estadual, a mesma CNH leva o caso à Justiça Estadual.",
    },
    {
      topico: "Outras falsidades",
      subassunto: "Art. 311, § 2º, III",
      dificuldade: 5,
      raciocinio: "A lei de 2023 alcançou quem conduz, sem exigir que tenha adulterado.",
      enunciado:
        "Uma pessoa compra e passa a conduzir, para uso próprio, um carro com chassi e placa remarcados, em circunstâncias que mostram que devia saber disso, sem ter feito a remarcação. Pelo art. 311 do CP,",
      alternativas: [
        "só quem remarcou responde, e o comprador não comete crime",
        "responde por receptação culposa, e nada mais",
        "incide no § 2º, III, com reclusão de 3 a 6 anos e multa",
        "responde pelo caput, por ser coautor da remarcação",
        "incide no § 3º, com reclusão de 4 a 8 anos e multa",
      ],
      correta: 2,
      explicacao:
        "O § 2º, III, alcança quem adquire, conduz ou utiliza, em proveito próprio ou alheio, veículo com sinal identificador que devesse saber adulterado ou remarcado, com as penas do caput.",
      explicacaoErradas:
        "“Não comete crime” ignora o inciso III. “Receptação culposa” cede ao tipo próprio. “Coautor” não descreve quem só comprou. “§ 3º” exige atividade comercial ou industrial.",
      pegadinha: "O § 3º, de 4 a 8 anos, só vale para atividade comercial ou industrial.",
      conhecimento:
        "O inciso III fala em sinal adulterado ou remarcado, sem citar o suprimido.",
    },
    {
      topico: "Fraudes em certames",
      subassunto: "Art. 311-A",
      dificuldade: 4,
      raciocinio: "O crime depende de aprovação ou de dano?",
      enunciado:
        "Um servidor da comissão de um concurso repassa a um amigo, antes da prova, o gabarito sigiloso, para beneficiá-lo, e o amigo o utiliza. Pelo art. 311-A do CP,",
      alternativas: [
        "o servidor responde por violação de sigilo funcional, e o amigo não responde",
        "os dois respondem por estelionato, pela vantagem na prova",
        "o crime só se consuma se o amigo for aprovado",
        "há crime, e a pena do servidor aumenta em um terço",
        "só há crime se houver dano à administração pública",
      ],
      correta: 3,
      explicacao:
        "O caput pune utilizar ou divulgar conteúdo sigiloso de concurso, para beneficiar a si ou a outrem. A pena é de 1 a 4 anos, e multa, com aumento de 1/3 se o fato é cometido por funcionário público (§ 3º).",
      explicacaoErradas:
        "“Violação de sigilo funcional” é subsidiária e cede ao tipo próprio. “Estelionato” também. “Se o amigo for aprovado” não é exigido. “Se houver dano” descreve só a forma qualificada do § 2º.",
      pegadinha: "O dano qualifica o crime, mas não é necessário para que exista.",
      conhecimento:
        "Com dano à administração pública, a pena é de reclusão de 2 a 6 anos, e multa.",
    },
  ],
};
