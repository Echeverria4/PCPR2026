import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-07",
  resumo: {
    ideia:
      "Direitos políticos são as regras para participar do governo: votar, ser votado e também as hipóteses que impedem isso. Estão nos arts. 14 a 16.",
    itens: [
      {
        termo: "Sufrágio, voto e escrutínio",
        faz: "Sufrágio é o direito. Voto é o seu exercício. Escrutínio é o modo de votar.",
        pista: "Voto obrigatório não é cláusula pétrea.",
      },
      {
        termo: "Alistamento",
        faz: "Obrigatório dos 18 aos 70. Facultativo para analfabetos, maiores de 70 e quem tem 16 ou 17. Proibido a estrangeiros e conscritos.",
      },
      {
        termo: "Idades mínimas",
        faz: "35: Presidente, Vice e Senador. 30: Governador e Vice. 21: Deputados, Prefeito, Vice e juiz de paz. 18: Vereador.",
      },
      {
        termo: "Inelegibilidade absoluta",
        faz: "Inalistáveis e analfabetos não concorrem a nenhum cargo. Só a CF prevê.",
      },
      {
        termo: "Reeleição e renúncia",
        faz: "Chefe do Executivo pode buscar um único período seguinte sem renunciar. Para outro cargo, renuncia até 6 meses antes.",
      },
      {
        termo: "Inelegibilidade reflexa",
        faz: "Cônjuge e parentes até o 2º grau ou por adoção ficam impedidos no território do titular, salvo se já têm mandato e buscam a reeleição.",
        pista: "Divórcio durante o mandato não afasta (SV 18).",
      },
      {
        termo: "Militar",
        faz: "Menos de 10 anos: afasta-se da atividade. Mais de 10: é agregado e, se eleito, vai para a inatividade na diplomação.",
      },
      {
        termo: "Impugnação de mandato",
        faz: "15 dias da diplomação, na Justiça Eleitoral, com provas de abuso do poder econômico, corrupção ou fraude. Corre em segredo de justiça.",
      },
      {
        termo: "Perda e suspensão",
        faz: "A cassação é proibida. O art. 15 lista os únicos casos, como a condenação criminal definitiva e a improbidade.",
      },
      {
        termo: "Anterioridade eleitoral",
        faz: "Lei que muda o processo eleitoral vale na publicação, mas não se aplica à eleição que ocorra até um ano depois.",
      },
    ],
    cuidado:
      "O analfabeto vota, mas não pode ser votado. O prazo da impugnação corre da diplomação, e não da posse.",
  },
  questoes: [
    {
      topico: "Direitos políticos",
      subassunto: "Voto e cláusulas pétreas",
      dificuldade: 5,
      raciocinio:
        "Compare a lista do art. 14 com a do art. 60, § 4º, II.",
      enunciado:
        "Uma proposta de emenda à Constituição quer tornar o voto facultativo para todos os eleitores. Sobre essa proposta, é certo que",
      alternativas: [
        "é inconstitucional, pois toda característica do voto é cláusula pétrea",
        "só pode ser votada depois de um plebiscito com todos os eleitores",
        "é inconstitucional, pois o voto obrigatório integra a soberania do art. 1º",
        "depende de lei complementar, e não de emenda, por tratar de eleição",
        "pode ser aprovada, pois o voto obrigatório não está no art. 60, § 4º, II",
      ],
      correta: 4,
      explicacao:
        "O art. 60, § 4º, II, protege o voto direto, secreto, universal e periódico. A obrigatoriedade não está nessa lista, por isso uma emenda pode instituir o voto facultativo.",
      explicacaoErradas:
        "“Toda característica” ignora a lista do inciso II. “Plebiscito” não é condição para essa emenda. “Soberania do art. 1º” não impede a mudança. “Lei complementar” não alteraria uma regra que está na própria CF.",
      pegadinha:
        "“Direto, secreto, universal e periódico” é cláusula pétrea. “Obrigatório” não é.",
      conhecimento:
        "Sufrágio é o direito de votar e de ser votado, voto é o exercício desse direito, e escrutínio é o modo como ele é feito.",
    },
    {
      topico: "Direitos políticos",
      subassunto: "Alistamento eleitoral",
      dificuldade: 4,
      raciocinio:
        "Separe os três grupos: obrigatório, facultativo e proibido.",
      enunciado:
        "Um conscrito de 19 anos, em pleno serviço militar obrigatório, a irmã dele, de 17, e o avô analfabeto, de 72, querem tirar o título de eleitor. Segundo a CF,",
      alternativas: [
        "ele não pode se alistar, e o alistamento dela e do avô é facultativo",
        "os três têm alistamento obrigatório, por já terem idade para votar",
        "o alistamento dele é facultativo, e o do avô é proibido por ser analfabeto",
        "só ela não pode, pois o voto só começa aos 18 anos",
        "ele é obrigado a se alistar, e o avô fica proibido por ter mais de 70 anos",
      ],
      correta: 0,
      explicacao:
        "O art. 14, § 2º, proíbe o alistamento de estrangeiros e de conscritos durante o serviço militar obrigatório. O § 1º, II, torna facultativo o alistamento de analfabetos, de maiores de 70 anos e de maiores de 16 e menores de 18.",
      explicacaoErradas:
        "“Os três têm alistamento obrigatório” ignora as duas outras regras. “Proibido por ser analfabeto” confunde votar com ser votado. “Só ela não pode” esquece o voto aos 16. “Proibido por ter mais de 70” transforma em proibição o que é faculdade.",
      pegadinha:
        "Conscrito é quem presta o serviço militar obrigatório, e não todo militar.",
      conhecimento:
        "Quem é inalistável também é inelegível, pois o alistamento é condição de elegibilidade.",
    },
    {
      topico: "Direitos políticos",
      subassunto: "Idades mínimas",
      dificuldade: 5,
      raciocinio:
        "Teste um por um: 35, 30, 21 e 18.",
      enunciado:
        "Quatro amigos terão 34, 29, 21 e 18 anos na data que conta para cada candidatura. Considerando só a idade mínima do art. 14, § 3º, VI, eles poderiam disputar, nessa ordem,",
      alternativas: [
        "Senador, Prefeito, Deputado Federal e Vereador",
        "Deputado Federal, Governador, Prefeito e Vereador",
        "Governador, Deputado Estadual, Vereador e Prefeito",
        "Governador, Prefeito, Deputado Estadual e Vereador",
        "Presidente, Deputado Federal, Prefeito e Vereador",
      ],
      correta: 3,
      explicacao:
        "A CF pede 35 anos para Presidente, Vice e Senador; 30 para Governador e Vice; 21 para Deputado Federal, Estadual ou Distrital, Prefeito, Vice-Prefeito e juiz de paz; e 18 para Vereador.",
      explicacaoErradas:
        "“Senador” e “Presidente” pedem 35 anos, e o primeiro amigo tem 34. “Deputado Federal, Governador” falha porque o segundo tem 29. “Vereador e Prefeito” falha porque quem tem 18 não pode ser Prefeito.",
      pegadinha:
        "Vereador é o único cargo com idade mínima de 18 anos.",
      conhecimento:
        "A lei eleitoral verifica a idade na data da posse, salvo a de 18 anos, aferida na data-limite do pedido de registro.",
    },
    {
      topico: "Inelegibilidades",
      subassunto: "Absoluta e relativa",
      dificuldade: 4,
      raciocinio:
        "Absoluta: todo cargo. Relativa: certos cargos ou situações.",
      enunciado:
        "A doutrina separa as inelegibilidades absolutas das relativas. Segundo essa divisão, é correto afirmar que",
      alternativas: [
        "o analfabeto é inelegível, mas só para cargos do Poder Executivo",
        "a absoluta vem só da CF, e a relativa também pode vir de lei complementar",
        "a absoluta pode ser criada por lei complementar, para proteger a moralidade",
        "a relativa atinge todo cargo eletivo, e a absoluta só atinge alguns",
        "quem tem inelegibilidade relativa perde também o direito de votar",
      ],
      correta: 1,
      explicacao:
        "A inelegibilidade absoluta impede qualquer candidatura e está só na CF: inalistáveis e analfabetos (art. 14, § 4º). A relativa atinge certos cargos ou situações, e o § 9º permite que lei complementar crie outros casos.",
      explicacaoErradas:
        "“Só para cargos do Poder Executivo” limita o § 4º. “Criada por lei complementar” confunde a absoluta com a relativa. “Atinge todo cargo” inverte os conceitos. “Perde também o direito de votar” mistura inelegibilidade com suspensão de direitos políticos.",
      pegadinha:
        "O analfabeto vota, mas não pode ser votado.",
      conhecimento:
        "O § 9º do art. 14 é a base da LC 64/1990, a Lei das Inelegibilidades.",
    },
    {
      topico: "Inelegibilidades",
      subassunto: "Reeleição e renúncia",
      dificuldade: 5,
      raciocinio:
        "Mesmo cargo: fica. Outro cargo: renuncia.",
      enunciado:
        "Uma governadora no primeiro mandato quer tentar a reeleição. Um prefeito, na mesma época, quer disputar uma vaga no Senado. Segundo o art. 14 da CF,",
      alternativas: [
        "os dois devem renunciar até seis meses antes da eleição, em qualquer caso",
        "ela precisa se licenciar por 3 meses, e ele pode seguir no cargo",
        "nenhum dos dois precisa renunciar, pois ambos têm mandato eletivo em curso",
        "ela pode buscar mandatos seguidos sem limite, e ele depende de aval da Câmara Municipal",
        "ela pode seguir no cargo, e ele deve renunciar até seis meses antes do pleito",
      ],
      correta: 4,
      explicacao:
        "O § 5º permite a reeleição para um único período subsequente, sem exigir renúncia. O § 6º manda que, para concorrer a outros cargos, Presidente, Governadores e Prefeitos renunciem até seis meses antes do pleito.",
      explicacaoErradas:
        "“Em qualquer caso” esquece a reeleição. “Licenciar por 3 meses” inventa um prazo. “Nenhum dos dois” ignora o § 6º. “Sem limite” esquece o “único período subsequente”.",
      pegadinha:
        "A renúncia é para disputar outro cargo. A reeleição não exige.",
      conhecimento:
        "O § 5º alcança também quem sucedeu ou substituiu os chefes do Executivo no curso do mandato.",
    },
    {
      topico: "Inelegibilidades",
      subassunto: "Inelegibilidade reflexa",
      dificuldade: 5,
      raciocinio:
        "A regra é territorial: pense na jurisdição do titular.",
      enunciado:
        "O filho de um governador, sem mandato, quer ser candidato a Deputado Federal. O pai está no cargo e não vai renunciar. Segundo a CF, o filho",
      alternativas: [
        "não pode concorrer nesse Estado, mas pode concorrer por outro Estado",
        "pode concorrer em todo o país, pois o cargo é federal, e não estadual",
        "não pode concorrer em nenhum lugar do país enquanto o pai governar",
        "pode concorrer naquele Estado, desde que o pai não apoie a candidatura",
        "só fica impedido se morar na mesma casa que o governador",
      ],
      correta: 0,
      explicacao:
        "O § 7º torna inelegíveis, no território de jurisdição do titular, o cônjuge e os parentes até o segundo grau ou por adoção. Fora desse território não há impedimento. A ressalva só alcança quem já tem mandato e busca a reeleição.",
      explicacaoErradas:
        "“O cargo é federal” não muda a regra: o que importa é o território. “Em nenhum lugar do país” amplia o § 7º. “Não apoie a candidatura” e “mesma casa” não estão no texto.",
      pegadinha:
        "A jurisdição do governador é o Estado, e a do Presidente é todo o país.",
      conhecimento:
        "A SV 18 diz que a dissolução do vínculo conjugal no curso do mandato não afasta essa inelegibilidade. O STF não a aplica se o vínculo acabar pela morte de um dos cônjuges.",
    },
    {
      topico: "Inelegibilidades",
      subassunto: "Militar candidato",
      dificuldade: 4,
      raciocinio:
        "Dez anos é o divisor.",
      enunciado:
        "Dois militares alistáveis, um com 12 anos de serviço e outro com 8, querem ser candidatos. Segundo o art. 14, § 8º, da CF,",
      alternativas: [
        "os dois devem ir para a reserva antes de registrar a candidatura",
        "o de 12 anos se afasta da atividade, e o de 8 anos é agregado pela autoridade superior",
        "os dois são inelegíveis enquanto estiverem no serviço militar ativo",
        "o de 8 anos se afasta da atividade, e o de 12 anos é agregado",
        "o de 12 anos vai para a inatividade com o registro, antes mesmo da eleição",
      ],
      correta: 3,
      explicacao:
        "Com menos de dez anos, o militar deve afastar-se da atividade. Com mais de dez, será agregado pela autoridade superior e, se eleito, passa automaticamente para a inatividade no ato da diplomação.",
      explicacaoErradas:
        "“Ir para a reserva” não é a regra. “O de 12 anos se afasta” inverte as faixas. “Inelegíveis” contraria o § 8º. “Com o registro” erra o momento: a inatividade vem na diplomação.",
      pegadinha:
        "A passagem para a inatividade ocorre na diplomação, e não na posse.",
      conhecimento:
        "O militar em serviço ativo não pode estar filiado a partido político (art. 142, § 3º, V).",
    },
    {
      topico: "Inelegibilidades",
      subassunto: "Impugnação de mandato",
      dificuldade: 4,
      raciocinio:
        "Lembre o marco inicial e o juízo.",
      enunciado:
        "Depois da eleição, um partido quer impugnar o mandato de um deputado por corrupção na campanha. Sobre a ação de impugnação de mandato eletivo, a CF diz que",
      alternativas: [
        "é proposta em até 30 dias da posse e corre de forma pública na Justiça comum",
        "é proposta em 15 dias da diplomação, com provas, e corre em segredo de justiça",
        "é proposta na Justiça Eleitoral a qualquer tempo durante todo o mandato do eleito",
        "cabe só contra abuso de poder político, e o autor nunca responde por ela",
        "depende de autorização da Casa do deputado, pelo voto da maioria absoluta",
      ],
      correta: 1,
      explicacao:
        "O § 10 prevê a impugnação perante a Justiça Eleitoral em 15 dias da diplomação, com provas de abuso do poder econômico, corrupção ou fraude. O § 11 impõe segredo de justiça, e o autor responde se agir de forma temerária ou de má-fé.",
      explicacaoErradas:
        "“30 dias da posse” e “Justiça comum” erram o prazo e o juízo. “A qualquer tempo” ignora os 15 dias. “Abuso de poder político” foge do texto, e o autor pode responder. “Autorização da Casa” não existe.",
      pegadinha:
        "O prazo corre da diplomação, e não da eleição nem da posse.",
      conhecimento:
        "As consultas populares locais aprovadas pela Câmara Municipal ocorrem junto com as eleições municipais (§ 12).",
    },
    {
      topico: "Perda e suspensão",
      subassunto: "Condenação criminal",
      dificuldade: 5,
      raciocinio:
        "O art. 15, III, não distingue o tipo de pena.",
      enunciado:
        "Um motorista foi condenado por crime de trânsito, com trânsito em julgado, e a pena de prisão foi trocada por restritiva de direitos. Sobre os direitos políticos dele, é certo que",
      alternativas: [
        "ficam suspensos enquanto durarem os efeitos da condenação",
        "seguem intactos, pois a pena final não foi de prisão",
        "ficam cassados para sempre, por decisão da Justiça Eleitoral",
        "só ficam suspensos se o crime for doloso e contra a vida",
        "perdem-se de modo definitivo, até que ele obtenha a reabilitação",
      ],
      correta: 0,
      explicacao:
        "O art. 15, III, prevê suspensão por condenação criminal transitada em julgado, enquanto durarem seus efeitos. O STF decidiu que isso vale também quando a pena de prisão é substituída por restritiva de direitos (Tema 370).",
      explicacaoErradas:
        "“Seguem intactos” contraria o Tema 370. “Cassados” usa o que a CF proíbe. “Doloso e contra a vida” restringe o texto. “Reabilitação” não é condição para a volta dos direitos.",
      pegadinha:
        "A CF veda a cassação e só admite perda ou suspensão nos casos do art. 15.",
      conhecimento:
        "A suspensão termina com o cumprimento ou a extinção da pena, sem depender de reabilitação (Súmula 9 do TSE).",
    },
    {
      topico: "Perda e suspensão",
      subassunto: "Anterioridade eleitoral",
      dificuldade: 5,
      raciocinio:
        "Separe a vigência da aplicação e conte o tempo até a eleição.",
      enunciado:
        "Uma lei que altera o processo eleitoral foi publicada em agosto, e a eleição será em outubro do ano seguinte. Segundo o art. 16 da CF, essa lei",
      alternativas: [
        "só entra em vigor um ano depois da data em que foi publicada",
        "vale desde a publicação, mas nunca se aplica à eleição do ano seguinte",
        "não pode mudar o processo eleitoral, pois o tema é reservado à emenda",
        "só entra em vigor depois da eleição, para dar segurança ao pleito",
        "vale desde a publicação e alcança essa eleição, que virá após um ano",
      ],
      correta: 4,
      explicacao:
        "O art. 16 separa vigência e aplicação: a lei vale na data da publicação, mas não se aplica à eleição que ocorra até um ano dessa data. Como essa eleição virá mais de um ano depois, a lei se aplica a ela.",
      explicacaoErradas:
        "“Um ano depois” confunde a vigência com a aplicação. “Nunca se aplica” ignora a contagem. “Reservado à emenda” não está no art. 16. “Depois da eleição” também erra a vigência.",
      pegadinha:
        "A vigência é imediata. O que espera é a aplicação à eleição próxima.",
      conhecimento:
        "Com base nessa regra, o STF afastou a Lei da Ficha Limpa das eleições de 2010 (RE 633.703).",
    },
  ],
};
