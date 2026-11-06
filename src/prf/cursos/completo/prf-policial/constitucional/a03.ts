import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-03",
  resumo: {
    ideia:
      "O art. 5º é o artigo mais cobrado da CF. Esta aula vai da vida e da igualdade até a propriedade, passando por expressão, crença, casa, sigilo, reunião e associação.",
    itens: [
      {
        termo: "Vida",
        faz: "Direito de continuar vivo e de ter vida digna. Não é absoluto: há pena de morte em guerra declarada.",
      },
      {
        termo: "Igualdade",
        faz: "Formal é a igualdade na lei. Material trata os desiguais de forma desigual, como nas ações afirmativas.",
        pista: "Idade em concurso só vale se o cargo justificar (Súmula 683).",
      },
      {
        termo: "Legalidade e reserva legal",
        faz: "Legalidade é a regra geral do art. 5º, II. Reserva legal é a matéria que a CF entrega só à lei.",
      },
      {
        termo: "Expressão",
        faz: "É livre, e o anonimato é vedado. Quem sofre agravo tem resposta proporcional e também indenização.",
      },
      {
        termo: "Escusa de consciência",
        faz: "A crença não tira direitos, salvo se a pessoa recusar a obrigação geral e também a prestação alternativa.",
      },
      {
        termo: "Casa",
        faz: "A qualquer hora: flagrante, desastre e socorro. Ordem judicial: só de dia.",
        pista: "Sem mandado, é preciso ter fundadas razões, justificadas depois (Tema 280).",
      },
      {
        termo: "Sigilo",
        faz: "Interceptação telefônica exige ordem judicial e serve só a investigação ou processo penal.",
      },
      {
        termo: "Reunião",
        faz: "Pacífica, sem armas, em local aberto. Dispensa autorização, pede aviso e não pode frustrar outra já marcada.",
      },
      {
        termo: "Associação",
        faz: "Fins lícitos, sem caráter paramilitar. Suspensão exige decisão judicial, e dissolução exige trânsito em julgado.",
      },
      {
        termo: "Propriedade",
        faz: "Atende à função social. Desapropriação indeniza antes, requisição indeniza depois se houver dano, e a expropriação do art. 243 não indeniza.",
      },
    ],
    cuidado:
      "Mandado judicial na casa só se cumpre de dia. Flagrante, desastre e socorro valem a qualquer hora.",
  },
  questoes: [
    {
      topico: "Igualdade",
      subassunto: "Limite de idade em concurso",
      dificuldade: 4,
      raciocinio:
        "A distinção só vale quando tem relação com a função.",
      enunciado:
        "O edital de um concurso para cargo administrativo fixou a idade máxima de 30 anos, sem relação com as tarefas do cargo. Um candidato de 35 anos contesta a regra. Segundo o STF, esse tipo de limite",
      alternativas: [
        "é sempre válido, pois o edital é a lei do concurso",
        "só é legítimo quando a natureza das atribuições do cargo o justifica",
        "é sempre inválido, pois a CF proíbe qualquer distinção por idade",
        "só vale para cargos do Executivo, nunca para os de outros Poderes",
        "vale se o candidato assinou o termo de aceite ao se inscrever no certame",
      ],
      correta: 1,
      explicacao:
        "A Súmula 683 do STF diz que o limite de idade na inscrição em concurso só se legitima quando puder ser justificado pela natureza das atribuições do cargo a preencher.",
      explicacaoErradas:
        "“Sempre válido” deixaria o edital acima da igualdade. “Sempre inválido” ignora que a função pode justificar a distinção. “Cargos do Executivo” cria um corte que a súmula não traz. “Termo de aceite” não valida uma regra inconstitucional.",
      pegadinha:
        "A CF não proíbe toda distinção: proíbe a distinção sem justificativa.",
      conhecimento:
        "As ações afirmativas seguem a mesma lógica: tratam os desiguais de forma desigual para buscar a igualdade material.",
    },
    {
      topico: "Legalidade",
      subassunto: "Legalidade e reserva legal",
      dificuldade: 5,
      raciocinio:
        "Regra geral é legalidade. Matéria específica entregue à lei é reserva legal.",
      enunciado:
        "A CF diz que ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei. Diz também que a quebra do sigilo telefônico ocorrerá nas hipóteses e na forma que a lei estabelecer. Comparando os dois comandos, é certo que",
      alternativas: [
        "os dois são reserva legal e aceitam decreto e medida provisória sem diferença",
        "o primeiro é reserva legal, e o segundo é o princípio da legalidade",
        "os dois são legalidade, e só mudam o ramo do direito a que se aplicam",
        "o primeiro exige lei formal, e o segundo aceita qualquer ato normativo",
        "o primeiro é a legalidade, e o segundo é reserva de lei para certa matéria",
      ],
      correta: 4,
      explicacao:
        "A legalidade é ampla e alcança a lei em sentido geral. A reserva legal incide sobre uma matéria que a CF entrega à lei de forma específica, como no art. 5º, XII.",
      explicacaoErradas:
        "“Os dois são reserva legal” apaga a diferença. “O primeiro é reserva legal” inverte os conceitos. “Os dois são legalidade” também apaga a diferença. “Exige lei formal” e “qualquer ato normativo” trocam o rigor dos dois.",
      pegadinha:
        "A reserva legal é mais estreita e mais rigorosa do que a legalidade.",
      conhecimento:
        "Para o particular, tudo o que a lei não proíbe é permitido. Para a Administração, só se faz o que a lei autoriza.",
    },
    {
      topico: "Direito à vida",
      subassunto: "Alcance e limites",
      dificuldade: 4,
      raciocinio:
        "Lembre as decisões do STF e a exceção que está na própria CF.",
      enunciado:
        "Um grupo de estudo debate o direito à vida. Segundo a CF e o STF, é correto afirmar que",
      alternativas: [
        "ele não é absoluto, e a CF admite a pena de morte em guerra declarada",
        "é absoluto, e por isso o STF vedou a pesquisa com células-tronco embrionárias",
        "a interrupção da gestação de feto anencéfalo é crime doloso contra a vida",
        "abrange só a vida fora do útero, e por isso a lei permite o aborto em geral",
        "protege apenas o direito de continuar vivo, sem nada sobre a vida digna",
      ],
      correta: 0,
      explicacao:
        "Nem o direito à vida é absoluto: a CF admite a pena de morte em caso de guerra declarada. A proteção tem dupla acepção: continuar vivo e ter vida digna.",
      explicacaoErradas:
        "“Vedou a pesquisa” é falso: o STF admitiu a pesquisa com células-tronco embrionárias. “Feto anencéfalo” é o caso em que o STF afastou o crime. “Só a vida fora do útero” contraria a proteção à vida intrauterina. “Sem nada sobre a vida digna” ignora a segunda acepção.",
      pegadinha:
        "Pena de morte em guerra declarada é exceção prevista na própria CF.",
      conhecimento:
        "A doutrina aponta que a pena de morte, por se tratar de exceção, só pode ser aplicada nos crimes militares em tempo de guerra declarada.",
    },
    {
      topico: "Liberdade de expressão",
      subassunto: "Denúncia anônima",
      dificuldade: 5,
      raciocinio:
        "A denúncia anônima abre a apuração, mas não sustenta sozinha uma medida grave.",
      enunciado:
        "Uma denúncia anônima aponta um esquema de contrabando num posto de combustíveis à beira da rodovia. Sem nenhuma outra apuração, a autoridade quer pedir de imediato a interceptação telefônica dos suspeitos. Segundo o STF,",
      alternativas: [
        "a denúncia anônima é proibida pela CF, e nada pode ser feito a partir dela",
        "a denúncia anônima basta para a interceptação, por vir de um cidadão",
        "ela pode motivar uma apuração preliminar, mas sozinha não embasa a medida",
        "ela só pode ser usada se o autor da denúncia se identificar em juízo depois",
        "a denúncia anônima equivale a uma prova plena e dispensa a ordem judicial",
      ],
      correta: 2,
      explicacao:
        "A vedação ao anonimato não impede que a autoridade, com base em denúncia anônima, faça diligências preliminares para checar os fatos. A interceptação, porém, exige indícios colhidos por outros meios.",
      explicacaoErradas:
        "“Nada pode ser feito” ignora as diligências preliminares. “Basta para a interceptação” dispensa os indícios. “Se identificar em juízo” cria uma condição sem base. “Prova plena” contraria a própria reserva de jurisdição.",
      pegadinha:
        "Vedar o anonimato não obriga o Estado a ignorar a notícia de um crime.",
      conhecimento:
        "A vedação ao anonimato existe para permitir a responsabilização de quem abusa da liberdade de expressão.",
    },
    {
      topico: "Liberdade de expressão",
      subassunto: "Direito de resposta",
      dificuldade: 4,
      raciocinio:
        "A CF soma: resposta, além da indenização.",
      enunciado:
        "Um site publicou notícia falsa sobre um servidor público e oferece espaço de resposta para encerrar o caso. O servidor quer resposta e indenização. Segundo a CF,",
      alternativas: [
        "a resposta afasta a indenização, pois já repara o dano por inteiro",
        "a indenização só cabe se houver condenação penal do responsável pelo texto",
        "a publicação da resposta depende de exame prévio pela autoridade judicial",
        "o direito de resposta só vale contra jornal impresso, e não contra site",
        "a resposta é proporcional ao agravo, e cabe também indenização pelo dano",
      ],
      correta: 4,
      explicacao:
        "O art. 5º, V, assegura o direito de resposta, proporcional ao agravo, além da indenização por dano material, moral ou à imagem. Os dois se somam.",
      explicacaoErradas:
        "“Afasta a indenização” contraria a palavra “além”. “Condenação penal” não é requisito. “Exame prévio pela autoridade” não está na CF. “Só contra jornal impresso” limita um direito que vale para qualquer meio.",
      pegadinha:
        "O dano moral e o dano material podem ser pedidos juntos.",
      conhecimento:
        "A pessoa jurídica também pode sofrer dano moral, conforme a Súmula 227 do STJ.",
    },
    {
      topico: "Liberdade de crença",
      subassunto: "Escusa de consciência",
      dificuldade: 5,
      raciocinio:
        "Só perde quem recusa as duas coisas: a obrigação e a alternativa.",
      enunciado:
        "Convocado para um serviço obrigatório a todos, um cidadão invoca a sua crença e recusa. A lei prevê prestação alternativa, e ele também a recusa. Segundo a CF,",
      alternativas: [
        "ele nada perde, pois a liberdade de crença é direito absoluto",
        "ele pode ser privado de direitos, pois recusou a obrigação e a alternativa",
        "ele perde a nacionalidade, por descumprir dever imposto a todos",
        "ele deve ser preso, pois a CF trata a recusa como crime inafiançável",
        "ele só sofre sanção se a recusa vier de convicção política, e não de crença",
      ],
      correta: 1,
      explicacao:
        "O art. 5º, VIII, protege a crença, salvo se a pessoa a invocar para fugir de obrigação legal a todos imposta e recusar a prestação alternativa fixada em lei. O art. 15, IV, liga essa recusa à perda ou suspensão dos direitos políticos.",
      explicacaoErradas:
        "“Direito absoluto” contraria a exceção do inciso. “Perde a nacionalidade” confunde a consequência. “Crime inafiançável” não está na CF. “Convicção política, e não de crença” separa o que o inciso trata igual.",
      pegadinha:
        "A recusa de uma só coisa não basta: precisa recusar também a prestação alternativa.",
      conhecimento:
        "A CF também veda a privação de direitos por motivo de convicção filosófica ou política.",
    },
    {
      topico: "Inviolabilidade da casa",
      subassunto: "Ordem judicial e horário",
      dificuldade: 4,
      raciocinio:
        "Ordem judicial é a única hipótese presa ao dia.",
      enunciado:
        "Policiais têm mandado judicial de busca para uma casa. Às 23h, o morador não consente com a entrada, e não há flagrante, desastre nem pedido de socorro. Segundo a CF, eles",
      alternativas: [
        "podem entrar, pois a ordem judicial vale a qualquer hora do dia ou da noite",
        "podem entrar, desde que o delegado autorize a diligência por escrito",
        "podem entrar, mas só se houver duas testemunhas do bairro na diligência",
        "não podem entrar agora, pois a ordem judicial só se cumpre durante o dia",
        "não podem entrar, e o mandado perde a validade no primeiro fim de tarde",
      ],
      correta: 3,
      explicacao:
        "O art. 5º, XI, só permite a entrada por determinação judicial durante o dia. Flagrante, desastre e socorro valem a qualquer hora.",
      explicacaoErradas:
        "“A qualquer hora” mistura a ordem judicial com as outras hipóteses. “O delegado autorize” e “duas testemunhas” não superam o limite do dia. “Perde a validade” inventa uma regra: a diligência só deve esperar o dia.",
      pegadinha:
        "Se a equipe entrou de dia com ordem judicial, a doutrina admite que a diligência se prolongue à noite.",
      conhecimento:
        "A Lei 13.869/2019 pune o cumprimento de mandado de busca domiciliar depois das 21h ou antes das 5h.",
    },
    {
      topico: "Inviolabilidade da casa",
      subassunto: "Fundadas razões (Tema 280)",
      dificuldade: 5,
      raciocinio:
        "A justificativa vem depois, e o resultado da busca não basta.",
      enunciado:
        "À noite e sem mandado, policiais entraram numa casa por suspeita de que havia drogas em depósito. Sobre a licitude da entrada forçada, segundo o STF, ela",
      alternativas: [
        "é lícita se houver fundadas razões de flagrante, justificadas depois do ato",
        "é ilícita por ter ocorrido à noite, ainda que o crime estivesse acontecendo",
        "é lícita em qualquer caso, pois o resultado da busca valida a entrada",
        "é lícita só se a justificativa for apresentada antes de a porta ser aberta",
        "é ilícita por faltar a ordem judicial, exigida em todos os casos de entrada",
      ],
      correta: 0,
      explicacao:
        "No Tema 280 (RE 603.616), o STF fixou que a entrada forçada em domicílio sem mandado só é lícita, mesmo à noite, quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem flagrante delito.",
      explicacaoErradas:
        "“Por ter ocorrido à noite” esquece que o flagrante vale a qualquer hora. “Resultado da busca valida” dispensa as razões prévias. “Antes de a porta ser aberta” troca o momento da justificativa. “Em todos os casos” ignora a exceção do flagrante.",
      pegadinha:
        "As razões precisam existir antes da entrada, mas a justificativa formal vem depois.",
      conhecimento:
        "Crimes permanentes, como ter droga em depósito, mantêm o estado de flagrante enquanto durar a conduta.",
    },
    {
      topico: "Sigilo das comunicações",
      subassunto: "Interceptação telefônica",
      dificuldade: 5,
      raciocinio:
        "Duas condições: ordem judicial e fim penal.",
      enunciado:
        "Uma comissão de processo disciplinar apura falta grave de um servidor, sem investigação criminal em curso, e pede ao juiz a interceptação do telefone dele. Segundo a CF, o pedido",
      alternativas: [
        "pode ser deferido, pois o juiz é a autoridade apontada pela CF",
        "pode ser deferido, desde que a comissão justifique por escrito a necessidade da medida",
        "não pode ser deferido, pois a medida só serve a investigação ou processo penal",
        "não precisa de juiz, pois a própria comissão pode ordenar a medida",
        "pode ser deferido se a falta for punida com demissão do servidor",
      ],
      correta: 2,
      explicacao:
        "O art. 5º, XII, admite a interceptação por ordem judicial, para fins de investigação criminal ou instrução processual penal. Falta o fim penal, então nem o juiz pode autorizá-la.",
      explicacaoErradas:
        "“O juiz é a autoridade” lembra só metade da regra. “Justifique por escrito” e “punida com demissão” não suprem o fim penal. “A própria comissão” ignora a reserva de jurisdição.",
      pegadinha:
        "Prova já colhida num processo penal pode ser emprestada ao processo disciplinar. Decretar a interceptação para ele, não.",
      conhecimento:
        "A CPI pode quebrar o sigilo de dados telefônicos, que são os registros das ligações, mas não pode determinar a interceptação.",
    },
    {
      topico: "Direito de reunião",
      subassunto: "Aviso e autorização",
      dificuldade: 4,
      raciocinio:
        "Aviso não é pedido de licença.",
      enunciado:
        "Um movimento marcou um ato pacífico, sem armas, numa avenida. A autoridade local diz que o ato depende de autorização. Segundo a CF, a reunião",
      alternativas: [
        "depende de autorização da autoridade, que pode negar o ato por conveniência",
        "dispensa autorização, exige aviso e não pode frustrar reunião já marcada",
        "só é válida se avisada com 48 horas de antecedência, como manda a própria CF",
        "dispensa aviso e autorização, e pode ocorrer até com armas de uso permitido",
        "pode ser impedida por decreto do prefeito, por se tratar de via pública",
      ],
      correta: 1,
      explicacao:
        "O art. 5º, XVI, permite a reunião pacífica, sem armas, em locais abertos ao público, independentemente de autorização, desde que não frustre outra anteriormente convocada para o mesmo local. Exige-se apenas prévio aviso à autoridade competente.",
      explicacaoErradas:
        "“Depende de autorização” e “decreto do prefeito” contrariam o inciso. “48 horas” não está na CF, que não fixa prazo. “Dispensa aviso” e “com armas” contrariam duas condições do inciso.",
      pegadinha:
        "O aviso serve para o Estado organizar o local, não para decidir se o ato acontece.",
      conhecimento:
        "Se o direito de reunião for violado, o remédio é o mandado de segurança, e não o habeas corpus, salvo se a liberdade de locomoção estiver em jogo.",
    },
    {
      topico: "Direito de associação",
      subassunto: "Representação dos filiados",
      dificuldade: 5,
      raciocinio:
        "Representar em ação comum exige autorização expressa.",
      enunciado:
        "Uma associação de servidores quer entrar com ação ordinária em nome dos filiados. O estatuto traz só uma autorização geral para defender os associados. Segundo o STF,",
      alternativas: [
        "o estatuto basta em qualquer ação, pois a associação já representa quem se filiou",
        "ela não pode ir a juízo, pois só sindicato defende os seus filiados",
        "a ação depende de autorização prévia do Ministério do Trabalho",
        "a filiação obriga o associado a aceitar a ação, pois ninguém pode deixar a entidade",
        "a autorização genérica do estatuto não basta, e é preciso autorização expressa",
      ],
      correta: 4,
      explicacao:
        "O art. 5º, XXI, exige que as entidades associativas sejam expressamente autorizadas. No RE 573.232, o STF entendeu que a autorização estatutária genérica não basta: é preciso autorização individual ou em assembleia.",
      explicacaoErradas:
        "“O estatuto basta” é a tese rejeitada. “Só sindicato” ignora o art. 5º, XXI. “Ministério do Trabalho” contraria a liberdade de associação. “Ninguém pode deixar a entidade” contraria o inciso XX.",
      pegadinha:
        "No mandado de segurança coletivo, a regra é outra: a entidade age por substituição e dispensa a autorização.",
      conhecimento:
        "Criar associação independe de autorização, e o Estado não pode interferir no seu funcionamento.",
    },
    {
      topico: "Direito de propriedade",
      subassunto: "Requisição e expropriação",
      dificuldade: 5,
      raciocinio:
        "Perigo público usa e paga depois. Cultura ilegal perde sem pagar.",
      enunciado:
        "Numa enchente, a autoridade usou um galpão privado à beira da rodovia para abrigar pessoas. Em outro caso, a polícia achou plantação ilegal de psicotrópicos numa fazenda. Segundo a CF,",
      alternativas: [
        "o primeiro exige indenização prévia, e o segundo, títulos da dívida agrária",
        "os dois casos dependem de ordem judicial prévia e de pagamento em dinheiro",
        "o primeiro é confisco sem pagamento, e o segundo é desapropriação comum",
        "o primeiro gera indenização depois, se houver dano, e o segundo não indeniza",
        "o primeiro é desapropriação, e o segundo só gera multa ao dono da propriedade",
      ],
      correta: 3,
      explicacao:
        "O art. 5º, XXV, permite usar a propriedade em iminente perigo público, com indenização ulterior se houver dano. O art. 243 manda expropriar, sem indenização, as propriedades com culturas ilegais de psicotrópicos ou com trabalho escravo.",
      explicacaoErradas:
        "“Indenização prévia” é a regra da desapropriação. “Títulos da dívida agrária” serve à reforma agrária. “Ordem judicial prévia” não é exigida na requisição. “Confisco sem pagamento” inverte os casos. “Só gera multa” esquece o art. 243.",
      pegadinha:
        "Na requisição, a propriedade continua com o dono, e o Estado só a usa.",
      conhecimento:
        "Na desapropriação comum, a indenização é prévia, justa e em dinheiro, salvo as exceções da própria CF.",
    },
  ],
};
