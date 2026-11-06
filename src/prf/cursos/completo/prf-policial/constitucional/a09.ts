import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-09",
  resumo: {
    ideia:
      "A CF é rígida: mudar o texto exige um processo mais difícil que o das leis. Hoje, o único caminho formal é a emenda, que obedece aos limites do art. 60.",
    itens: [
      {
        termo: "Quem propõe",
        faz: "1/3 da Câmara ou do Senado, o Presidente, ou mais da metade das Assembleias Legislativas, cada uma pela maioria relativa.",
        pista: "Não há iniciativa popular nem participação dos Municípios.",
      },
      {
        termo: "Votação",
        faz: "Dois turnos em cada Casa, com 3/5 dos votos dos membros. Pode começar em qualquer das Casas.",
      },
      {
        termo: "Promulgação",
        faz: "Pelas Mesas da Câmara e do Senado, com número de ordem. Não há sanção nem veto.",
      },
      {
        termo: "Limite circunstancial",
        faz: "Sem emenda durante intervenção federal, estado de defesa ou estado de sítio.",
      },
      {
        termo: "Sessão legislativa",
        faz: "PEC rejeitada ou prejudicada não volta na mesma sessão legislativa, e aqui não há exceção.",
      },
      {
        termo: "Cláusulas pétreas",
        faz: "Forma federativa, voto direto, secreto, universal e periódico, separação dos Poderes, direitos e garantias individuais.",
        pista: "Só é barrada a proposta tendente a abolir. Mudar sem atingir o núcleo pode.",
      },
      {
        termo: "Limites implícitos",
        faz: "A emenda não pode trocar o titular do poder constituinte nem mexer no processo de reforma ou no próprio § 4º.",
      },
      {
        termo: "Mudança na outra Casa",
        faz: "Só volta à Casa anterior se houver alteração substancial. A parte em consenso pode ser promulgada: é a PEC paralela.",
      },
      {
        termo: "Controle da PEC",
        faz: "Parlamentar pode impetrar mandado de segurança no STF contra a tramitação. Terceiros, não.",
      },
      {
        termo: "Revisão",
        faz: "Art. 3º do ADCT: uma única vez, após 5 anos, por maioria absoluta, em sessão unicameral. Já foi feita.",
      },
    ],
    cuidado:
      "O voto obrigatório não é cláusula pétrea, e a CF de 1988 não tem limite temporal para emendas.",
  },
  questoes: [
    {
      topico: "Reforma constitucional",
      subassunto: "Iniciativa da emenda",
      dificuldade: 4,
      raciocinio:
        "Compare os legitimados do art. 60 com os do art. 61.",
      enunciado:
        "Um grupo de cidadãos juntou assinaturas de 2% do eleitorado nacional e levou à Câmara uma proposta de emenda à Constituição. Segundo o art. 60 da CF, essa proposta",
      alternativas: [
        "não tem base, pois a CF não prevê iniciativa popular para emenda",
        "é válida, pois superou o mínimo exigido para os projetos de lei",
        "é válida, desde que tenha apoio de cinco Estados da Federação",
        "depende de autorização prévia do Presidente da República",
        "só é válida se assinada também por 1/3 das Câmaras Municipais",
      ],
      correta: 0,
      explicacao:
        "O art. 60 lista quem pode propor: 1/3 da Câmara ou do Senado, o Presidente, ou mais da metade das Assembleias Legislativas. Os cidadãos não estão na lista.",
      explicacaoErradas:
        "“Mínimo exigido para os projetos de lei” lembra o art. 61, § 2º, que vale só para leis. “Cinco Estados” também vem dessa regra. “Autorização prévia” não existe. “Câmaras Municipais” não participam da reforma.",
      pegadinha:
        "A iniciativa popular existe para leis, e não para emendas à CF.",
      conhecimento:
        "Nas Assembleias, a manifestação é pela maioria relativa de seus membros.",
    },
    {
      topico: "Reforma constitucional",
      subassunto: "Limites circunstanciais",
      dificuldade: 4,
      raciocinio:
        "Veja se a situação está no § 1º do art. 60.",
      enunciado:
        "Com uma PEC pronta para a promulgação, foi decretada intervenção federal em um Estado. Sobre a promulgação dessa emenda enquanto durar a intervenção, é certo que",
      alternativas: [
        "é possível, pois a intervenção atinge só o Estado que sofreu a medida",
        "é possível, se o Presidente autorizar por meio de decreto específico",
        "é possível, desde que a matéria da emenda não trate daquele Estado",
        "é vedada, pois a CF não pode ser emendada na vigência da intervenção",
        "é vedada só no estado de sítio, e não na intervenção federal",
      ],
      correta: 3,
      explicacao:
        "O art. 60, § 1º, proíbe emendar a CF na vigência de intervenção federal, de estado de defesa ou de estado de sítio. É o limite circunstancial.",
      explicacaoErradas:
        "“Atinge só o Estado” não afasta o § 1º, que protege a reforma de qualquer situação de crise. “Decreto específico” não existe. “Não trate daquele Estado” cria uma exceção sem base. “Só no estado de sítio” esquece as outras duas situações.",
      pegadinha:
        "Isso é limite circunstancial, e não temporal.",
      conhecimento:
        "A intervenção de um Estado em seu Município não está no § 1º, que fala em intervenção federal.",
    },
    {
      topico: "Reforma constitucional",
      subassunto: "Aprovação e promulgação",
      dificuldade: 5,
      raciocinio:
        "Quem aprova, quem promulga e em quantos turnos.",
      enunciado:
        "A PEC foi aprovada em dois turnos na Câmara e no Senado, por 3/5 dos votos dos membros de cada Casa. O Presidente discorda do texto e quer vetá-lo. Nesse caso,",
      alternativas: [
        "o veto é possível, e o Congresso pode derrubá-lo pela maioria absoluta",
        "a emenda será promulgada pelas Mesas, sem passar por sanção nem veto",
        "o Presidente pode vetar só a parte que trate de iniciativa privativa dele",
        "a emenda será promulgada pelo Presidente do Congresso Nacional sozinho",
        "o Presidente pode devolver o texto para um terceiro turno de votação",
      ],
      correta: 1,
      explicacao:
        "O art. 60, § 3º, manda as Mesas da Câmara e do Senado promulgarem a emenda, com o número de ordem. O processo de reforma não tem sanção nem veto.",
      explicacaoErradas:
        "“Derrubá-lo” pressupõe veto, que não existe aqui. “Iniciativa privativa” não existe na reforma. “Presidente do Congresso Nacional sozinho” contraria o § 3º, que fala nas duas Mesas. “Terceiro turno” não existe.",
      pegadinha:
        "Lei: quem promulga é o Presidente. Emenda: as Mesas das duas Casas.",
      conhecimento:
        "A numeração das emendas tem ordem própria, separada da numeração das leis.",
    },
    {
      topico: "Reforma constitucional",
      subassunto: "Cláusulas pétreas",
      dificuldade: 5,
      raciocinio:
        "Pergunte se a proposta tende a abolir a proteção.",
      enunciado:
        "A PEC 1 acrescenta ao art. 5º uma nova garantia individual. A PEC 2 retira do art. 5º o habeas corpus. Quanto ao limite do art. 60, § 4º, é certo que",
      alternativas: [
        "as duas são barradas, pois o art. 5º não pode receber nenhuma mudança",
        "as duas podem tramitar, pois a CF aceita qualquer emenda aprovada por 3/5",
        "só a PEC 1 é barrada, pois os direitos só podem ser criados pelo constituinte",
        "só a PEC 2 pode tramitar, pois a retirada apenas reorganiza as garantias",
        "só a PEC 2 é barrada, pois tende a abolir uma garantia individual",
      ],
      correta: 4,
      explicacao:
        "A CF proíbe a deliberação sobre proposta tendente a abolir direitos e garantias individuais (art. 60, § 4º, IV). Ampliar a proteção não tende a abolir nada.",
      explicacaoErradas:
        "“Nenhuma mudança” erra: o texto das cláusulas pétreas pode mudar. “Qualquer emenda” ignora o § 4º. “Só pelo constituinte” não procede. “Apenas reorganiza” disfarça a supressão da garantia.",
      pegadinha:
        "Cláusula pétrea não é texto intocável: o que se veda é tender a abolir.",
      conhecimento:
        "Os limites materiais podem ser controlados pelo STF, até antes da promulgação.",
    },
    {
      topico: "Reforma constitucional",
      subassunto: "Limites implícitos",
      dificuldade: 5,
      raciocinio:
        "Pense na tática da dupla revisão.",
      enunciado:
        "Uma PEC quer revogar o § 4º do art. 60 para que, em uma segunda etapa, outra emenda possa acabar com a forma federativa. Segundo a doutrina, essa primeira PEC",
      alternativas: [
        "é válida, pois o § 4º não aparece na própria lista das cláusulas pétreas",
        "é válida, pois cada emenda é julgada de forma separada e pela sua matéria",
        "é inválida, pois fere um limite implícito ao poder de reforma",
        "é inválida, pois o tema exige a convocação de uma revisão constitucional",
        "é válida, desde que aprovada por 2/3 dos votos em cada Casa do Congresso",
      ],
      correta: 2,
      explicacao:
        "A doutrina aponta limites implícitos, que dão efetividade às cláusulas expressas: o titular do poder constituinte, o processo de reforma e o próprio art. 60, § 4º. Sem eles, a proteção cairia em duas etapas.",
      explicacaoErradas:
        "“Não aparece na própria lista” ignora o limite implícito. “Julgada de forma separada” aceita a manobra. “Revisão constitucional” já ocorreu e também tinha limites. “2/3 dos votos” não existe no art. 60.",
      pegadinha:
        "O limite pode não estar escrito e, ainda assim, valer.",
      conhecimento:
        "Essa manobra em dois passos é conhecida como dupla revisão.",
    },
    {
      topico: "Reforma constitucional",
      subassunto: "Sessão legislativa",
      dificuldade: 5,
      raciocinio:
        "Compare o art. 60, § 5º, com o art. 67.",
      enunciado:
        "Em abril, uma PEC foi rejeitada. Em agosto do mesmo ano, a maioria absoluta dos Deputados pediu que o mesmo texto fosse apresentado de novo. Isso",
      alternativas: [
        "não é possível na mesma sessão legislativa, mesmo com esse apoio",
        "é possível, pois a exigência da maioria absoluta foi cumprida",
        "só é possível se o Presidente da República também assinar",
        "é possível, pois a nova PEC começa por outra Casa do Congresso",
        "só é possível se o novo texto mudar a ordem dos artigos da proposta",
      ],
      correta: 0,
      explicacao:
        "O art. 60, § 5º, proíbe nova proposta na mesma sessão legislativa, sem exceção. A ressalva da maioria absoluta está no art. 67 e vale só para projetos de lei.",
      explicacaoErradas:
        "“Exigência da maioria absoluta” traz a regra do art. 67 para a PEC. “Presidente da República também assinar” não muda nada. “Outra Casa” não afasta o § 5º. “Mudar a ordem” não torna a matéria nova.",
      pegadinha:
        "A vedação é para a sessão legislativa, e não para a legislatura.",
      conhecimento:
        "A mesma regra alcança a proposta havida por prejudicada.",
    },
    {
      topico: "Reforma constitucional",
      subassunto: "Mudança na outra Casa",
      dificuldade: 5,
      raciocinio:
        "Pergunte se o sentido do texto mudou.",
      enunciado:
        "O Senado aprovou a PEC vinda da Câmara, mas retirou uma expressão, sem mudar o sentido do texto, e dividiu um ponto polêmico em outra PEC. Segundo o STF,",
      alternativas: [
        "a PEC inteira precisa voltar à Câmara, por causa da expressão retirada",
        "a retirada da expressão exige uma votação do Congresso em sessão conjunta",
        "a divisão é inválida, pois a Casa que recebe não pode separar uma PEC",
        "a parte com consenso pode ser promulgada, sem voltar à outra Casa",
        "a parte aprovada depende de sanção, por não ter passado de novo na Câmara",
      ],
      correta: 3,
      explicacao:
        "Só é preciso voltar à outra Casa se houver alteração substancial. O STF aceita promulgar a parte em que há consenso e fazer o ponto polêmico tramitar em separado, na chamada PEC paralela.",
      explicacaoErradas:
        "“A PEC inteira” exige retorno sem alteração substancial. “Sessão conjunta” contraria a votação em cada Casa. “Não pode separar” nega a PEC paralela. “Sanção” não existe na reforma.",
      pegadinha:
        "O texto precisa de acordo entre as duas Casas, mas nem toda mudança de redação faz a PEC voltar.",
      conhecimento:
        "Também não existe Casa revisora obrigatória: a PEC pode começar em qualquer das duas.",
    },
    {
      topico: "Reforma constitucional",
      subassunto: "Controle da PEC",
      dificuldade: 5,
      raciocinio:
        "Quem tem direito a um processo legislativo correto?",
      enunciado:
        "Uma PEC em tramitação tende a abolir a separação dos Poderes. Uma associação de policiais e um Deputado Federal querem impedir a votação no STF. Pode impetrar mandado de segurança",
      alternativas: [
        "a associação, pois representa os direitos dos seus associados",
        "qualquer cidadão, pois a defesa da CF é um direito de todos",
        "o Deputado, pelo direito de não votar proposta inconstitucional",
        "o Deputado, mas só depois de promulgada a emenda pelas duas Mesas",
        "qualquer legitimado para a ADI, em lugar de membros do Congresso",
      ],
      correta: 2,
      explicacao:
        "O STF só admite o controle preventivo da PEC por mandado de segurança impetrado por parlamentar, que tem o direito de participar de um processo legislativo regular. O caso vai direto ao STF.",
      explicacaoErradas:
        "“A associação” e “qualquer cidadão” são terceiros, sem esse direito. “Só depois de promulgada” confunde: nessa fase, o caminho é outro. “Qualquer legitimado para a ADI” descreve o controle da emenda já promulgada.",
      pegadinha:
        "Antes da promulgação: mandado de segurança de parlamentar. Depois: controle comum, por ADI ou em caso concreto.",
      conhecimento:
        "Promulgada, a emenda também pode ser questionada por qualquer prejudicado, em um caso concreto.",
    },
    {
      topico: "Reforma constitucional",
      subassunto: "Revisão constitucional",
      dificuldade: 4,
      raciocinio:
        "Compare os números do ADCT com os do art. 60.",
      enunciado:
        "Parlamentares propõem uma nova revisão constitucional, por maioria absoluta e em sessão unicameral, para facilitar mudanças na CF. Essa proposta",
      alternativas: [
        "é válida, pois o art. 3º do ADCT permite repetir a revisão a cada cinco anos",
        "é inválida, pois a revisão do ADCT se esgotou e já foi realizada",
        "é válida, pois a sessão unicameral dá mais rapidez aos trabalhos",
        "é inválida apenas porque a revisão depende de 3/5 dos votos",
        "é válida, desde que passe antes por um plebiscito nacional",
      ],
      correta: 1,
      explicacao:
        "O art. 3º do ADCT previu uma revisão única, após cinco anos da promulgação, por maioria absoluta e em sessão unicameral. Ela já ocorreu, e hoje o único caminho formal é a emenda do art. 60.",
      explicacaoErradas:
        "“A cada cinco anos” erra: a revisão foi prevista uma só vez. “Mais rapidez” não cria uma base jurídica. “3/5 dos votos” é o quórum da emenda. “Plebiscito nacional” não supre a falta de previsão.",
      pegadinha:
        "Revisão: maioria absoluta, sessão unicameral. Emenda: 3/5, cada Casa, dois turnos.",
      conhecimento:
        "Da revisão de 1993 e 1994 saíram seis Emendas Constitucionais de Revisão.",
    },
  ],
};
