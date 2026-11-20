import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-06",
  resumo: {
    ideia:
      "A aula junta obras e eventos na via, classificação dos veículos, segurança, identificação e circulação internacional. Muitos pontos são prazos e números.",
    itens: [
      {
        termo: "Polo atrativo",
        faz: "Projeto de edificação precisa de prévia anuência do órgão com circunscrição sobre a via.",
      },
      {
        termo: "Lombada e sonorizador",
        faz: "Proibidos como redutores, salvo casos especiais definidos pelo órgão, nos padrões do Contran.",
      },
      {
        termo: "Obra ou evento",
        faz: "Precisa de permissão prévia. Interdição é avisada com 48 horas, salvo emergência.",
      },
      {
        termo: "Classificação",
        faz: "Tração, espécie e categoria. Categoria: oficial, diplomática, particular, aluguel e aprendizagem.",
      },
      {
        termo: "Inspeção",
        faz: "Novo particular de até 7 passageiros fica isento por 3 anos. Demais novos, por 2 anos.",
      },
      {
        termo: "Registrador",
        faz: "Escolares, passageiros com mais de 10 lugares e carga acima de 4.536 kg.",
      },
      {
        termo: "Carga e passageiros",
        faz: "Sem linha regular, autorização precária para veículo de carga ou misto, por até 12 meses.",
      },
      {
        termo: "Placas",
        faz: "Dianteira e traseira. Veículos de 2 ou 3 rodas dispensam a dianteira. Com tecnologia, sem lacre.",
      },
      {
        termo: "Veículo do exterior",
        faz: "Não sai do país sem pagar ou depositar as multas. Fica retido até regularizar.",
      },
    ],
    cuidado: "A multa do art. 95, § 4º, é diária e recai sobre o servidor responsável.",
  },
  questoes: [
    {
      topico: "Obras e eventos",
      subassunto: "Aviso de interdição",
      dificuldade: 4,
      raciocinio: "Fora de emergência, há prazo de aviso.",
      enunciado:
        "A interdição de uma via para uma obra programada, sem emergência, deve ser avisada à comunidade, pelo art. 95, § 2º, do CTB,",
      alternativas: [
        "com 24 horas de antecedência, por carta aos moradores das vias próximas",
        "com 72 horas de antecedência, somente por placas colocadas no próprio local",
        "com 48 horas de antecedência, com a indicação de caminhos alternativos",
        "no próprio dia da obra, pois o aviso prévio só vale para eventos festivos",
        "com 30 dias de antecedência, depois da publicação em diário oficial",
      ],
      correta: 2,
      explicacao: "Salvo emergência, a autoridade avisa com 48 horas de antecedência, pelos meios de comunicação social, e indica caminhos alternativos.",
      explicacaoErradas:
        "“24 horas”, “72 horas” e “30 dias” erram o prazo. “só vale para eventos” contraria o texto, que cobre qualquer interdição.",
      pegadinha: "Trocar o prazo de aviso.",
      conhecimento: "A sinalização durante a obra cabe ao responsável pela execução ou pela manutenção, pelo § 1º.",
    },
    {
      topico: "Obras e eventos",
      subassunto: "Servidor responsável",
      dificuldade: 5,
      raciocinio: "A multa é diária e proporcional ao dia de vencimento.",
      enunciado:
        "Um servidor responsável deixa de cumprir as normas sobre obstáculo na via, previstas no art. 94. Pelo art. 95, § 4º, ele fica sujeito a",
      alternativas: [
        "multa única de 10% da remuneração mensal, paga ao fim do processo",
        "suspensão de 30 dias, sem multa, por se tratar de falta funcional leve",
        "multa diária de 100% do dia de vencimento, por toda a duração da obra",
        "perda do cargo, sem prévia multa, por ofensa à segurança do trânsito",
        "multa diária de 50% do dia de vencimento, durante a irregularidade",
      ],
      correta: 4,
      explicacao: "O § 4º prevê multa diária de 50% do dia de vencimento ou remuneração, enquanto permanecer a irregularidade, para normas dos arts. 93, 94 e 95.",
      explicacaoErradas:
        "“multa única” e “suspensão de 30 dias” não constam. “100%” erra o percentual. “perda do cargo” não é a sanção desse parágrafo.",
      pegadinha: "Esquecer que a multa é diária.",
      conhecimento: "O § 3º traz multa de R$ 81,35 a R$ 488,10 para quem descumpre o artigo.",
    },
    {
      topico: "Engenharia de tráfego",
      subassunto: "Redutores de velocidade",
      dificuldade: 4,
      raciocinio: "A regra é a proibição, com casos especiais.",
      enunciado: "Sobre ondulações transversais e sonorizadores como redutores de velocidade, o art. 94 do CTB dispõe que",
      alternativas: [
        "são proibidos, salvo em casos especiais definidos pelo órgão competente",
        "são livres em vias urbanas, desde que pintados de amarelo e bem visíveis",
        "só podem ser instalados por ordem direta do Contran, em cada caso concreto",
        "são obrigatórios em toda via que passa em frente a escolas e hospitais",
        "podem ser instalados pelos moradores, desde que com a aprovação do bairro",
      ],
      correta: 0,
      explicacao: "O parágrafo único proíbe esses elementos, salvo em casos especiais definidos pelo órgão ou entidade competente, nos padrões do Contran.",
      explicacaoErradas:
        "“são livres” e “são obrigatórios” invertem a regra. “ordem direta do Contran” erra quem define o caso. “moradores” não têm essa competência.",
      pegadinha: "Achar que lombada é sempre permitida perto de escola.",
      conhecimento: "O caput do art. 94 manda sinalizar de imediato o obstáculo que não possa ser retirado.",
    },
    {
      topico: "Classificação dos veículos",
      subassunto: "Espécie e categoria",
      dificuldade: 5,
      raciocinio: "Espécie diz o que transporta. Categoria diz o uso.",
      enunciado:
        "Um caminhão de centro de formação de condutores é usado nas aulas da categoria C. Pelo art. 96 do CTB, ele é veículo de",
      alternativas: [
        "espécie aprendizagem e categoria carga",
        "espécie especial e categoria particular",
        "espécie tração e categoria aluguel",
        "espécie carga e categoria aprendizagem",
        "espécie misto e categoria aprendizagem, por levar pessoas e carga",
      ],
      correta: 3,
      explicacao: "Quanto à espécie, caminhão é de carga. Quanto à categoria, o veículo usado na formação é de aprendizagem.",
      explicacaoErradas:
        "“espécie aprendizagem” inverte as classes. “espécie especial” e “espécie tração” não descrevem esse caminhão. “espécie misto” exige outra construção do veículo.",
      pegadinha: "Trocar espécie por categoria.",
      conhecimento: "As espécies de passageiros incluem bicicleta, ônibus e automóvel. As categorias tratam do uso do veículo.",
    },
    {
      topico: "Segurança dos veículos",
      subassunto: "Inspeção",
      dificuldade: 5,
      raciocinio: "Até 7 passageiros e particular: 3 anos.",
      enunciado:
        "Dois veículos novos, sem alteração e sem sinistro, são licenciados no mesmo dia: um automóvel particular de 5 lugares e um micro-ônibus de aluguel. Pelo art. 104, a isenção de inspeção dura",
      alternativas: [
        "3 anos para os dois, por serem veículos novos e originais de fábrica",
        "2 anos para os dois, pois a isenção não varia com a categoria do veículo",
        "3 anos para o automóvel e 2 anos para o micro-ônibus",
        "5 anos para o automóvel e 3 anos para o micro-ônibus, por usarem a via",
        "1 ano para o automóvel e nenhum prazo para o micro-ônibus de aluguel",
      ],
      correta: 2,
      explicacao: "O § 6º isenta por 3 anos os novos particulares de até 7 passageiros. O § 7º dá 2 anos aos demais veículos novos.",
      explicacaoErradas:
        "“3 anos para os dois” e “2 anos para os dois” ignoram a diferença. “5 anos” e “1 ano” erram o número.",
      pegadinha: "Dar a todos os veículos novos o mesmo prazo.",
      conhecimento: "A isenção depende de manter as características originais e de não haver sinistro com dano de média ou grande monta.",
    },
    {
      topico: "Segurança dos veículos",
      subassunto: "Registrador de velocidade e tempo",
      dificuldade: 4,
      raciocinio: "Olhe os números do art. 105, II.",
      enunciado: "Pelo art. 105, II, do CTB, o equipamento registrador instantâneo inalterável de velocidade e tempo é obrigatório",
      alternativas: [
        "em veículo de carga acima de 4.536 kg e de passageiros com mais de 10 lugares",
        "em qualquer veículo de carga, sem limite de peso, e também nos automóveis",
        "em veículo de passageiros com mais de 8 lugares, e nos demais só por convênio",
        "só em veículos oficiais, por causa da fiscalização feita pelas polícias",
        "em todo veículo de aluguel, com a exclusão dos veículos de transporte escolar",
      ],
      correta: 0,
      explicacao: "O inciso II alcança veículos de transporte e condução escolar, de passageiros com mais de dez lugares e de carga com peso bruto total acima de 4.536 kg.",
      explicacaoErradas:
        "“sem limite de peso” ignora os 4.536 kg. “mais de 8 lugares” erra o número. “só em veículos oficiais” não consta. “exclusão” dos escolares contraria o inciso.",
      pegadinha: "Usar o limite de 3.500 kg da habilitação.",
      conhecimento: "O art. 136 repete a exigência do registrador para os veículos escolares.",
    },
    {
      topico: "Segurança dos veículos",
      subassunto: "Blindagem",
      dificuldade: 5,
      raciocinio: "O parágrafo único trata da blindagem.",
      enunciado:
        "O dono de um automóvel blindado pede o licenciamento. Pelo art. 106 do CTB, além do certificado de segurança,",
      alternativas: [
        "exige-se autorização do Exército, sempre anexada ao certificado do veículo",
        "exige-se nova vistoria do Contran, que autoriza cada blindagem pessoalmente",
        "exige-se ordem do órgão municipal, por causa da mudança de peso do veículo",
        "exige-se nova nota fiscal do fabricante, pois o veículo perde a identificação",
        "não se exige outro documento ou autorização para o registro ou licenciamento",
      ],
      correta: 4,
      explicacao: "O art. 106 pede certificado de segurança, e o parágrafo único diz que, na blindagem, não se exige outro documento ou autorização.",
      explicacaoErradas:
        "“autorização do Exército”, “nova vistoria do Contran”, “ordem do órgão municipal” e “nova nota fiscal” são exigências que o CTB não faz para o registro ou o licenciamento.",
      pegadinha: "Levar para o CTB regras de outras normas sobre blindagem.",
      conhecimento: "O mesmo certificado vale para fabricação artesanal e modificação de veículo.",
    },
    {
      topico: "Transporte de passageiros",
      subassunto: "Veículo de carga",
      dificuldade: 4,
      raciocinio: "A autorização é precária e tem limite de tempo.",
      enunciado:
        "Em uma região sem linha regular de ônibus, trabalhadores precisam ser levados em veículo misto. Pelo art. 108 do CTB, a autoridade pode dar autorização",
      alternativas: [
        "por tempo indeterminado, até que uma linha regular comece a operar",
        "definitiva, se o veículo passar por inspeção semestral no órgão estadual",
        "por até 6 meses, sem renovação, com velocidade limitada a 60 km/h",
        "a título precário, por no máximo 12 meses",
        "somente para veículo de carga, sendo vedada a autorização a veículo misto",
      ],
      correta: 3,
      explicacao: "Onde não houver linha regular, o art. 108 permite autorização a título precário em veículo de carga ou misto, e o parágrafo único limita a 12 meses.",
      explicacaoErradas:
        "“tempo indeterminado” e “definitiva” contrariam o limite. “6 meses” erra o prazo. “vedada a autorização a veículo misto” contraria o caput.",
      pegadinha: "Esquecer o limite de 12 meses.",
      conhecimento: "O transporte depende de condições fixadas pelo Contran.",
    },
    {
      topico: "Identificação do veículo",
      subassunto: "Placas",
      dificuldade: 5,
      raciocinio: "Confira os §§ 6º e 9º do art. 115.",
      enunciado:
        "A equipe aborda uma motocicleta sem placa dianteira e um automóvel cuja placa traseira tem tecnologia de identificação do veículo e não tem lacre. Pelo art. 115 do CTB,",
      alternativas: [
        "os dois são irregulares, pois todo veículo usa duas placas e lacre traseiro",
        "os dois podem estar regulares, pelas dispensas previstas no próprio artigo",
        "só a motocicleta é irregular, pois a dispensa da placa dianteira foi revogada",
        "só o automóvel é irregular, pois nenhuma placa traseira dispensa o lacre",
        "a motocicleta só é regular se houver um registro especial no órgão estadual",
      ],
      correta: 1,
      explicacao: "O § 6º dispensa veículos de duas ou três rodas da placa dianteira. O § 9º dispensa do lacre as placas com tecnologia de identificação.",
      explicacaoErradas:
        "“os dois são irregulares” ignora os parágrafos. “foi revogada” é falso. “nenhuma placa” contraria o § 9º. “registro especial” não existe nesse caso.",
      pegadinha: "Exigir lacre de placa com tecnologia.",
      conhecimento: "Os caracteres da placa acompanham o veículo até a baixa, vedado o reaproveitamento, pelo § 1º.",
    },
    {
      topico: "Circulação internacional",
      subassunto: "Infrações pendentes",
      dificuldade: 4,
      raciocinio: "Quem deve multa não sai sem pagar ou depositar.",
      enunciado:
        "Um veículo licenciado no exterior foi autuado em rodovia federal e chega à fronteira para sair do país. Pelo art. 119 do CTB, ele",
      alternativas: [
        "sai livremente, pois a multa só vale para veículo nacional",
        "sai e tem a multa cobrada por via diplomática no país de origem do veículo",
        "só sai depois de pagar ou depositar as multas, sob pena de retenção",
        "é leiloado pelo órgão aduaneiro depois de 30 dias de permanência na fronteira",
        "segue viagem, desde que o condutor assine um termo de compromisso na aduana",
      ],
      correta: 2,
      explicacao: "O § 1º veda a saída sem o pagamento ou o depósito dos valores das multas. O § 2º manda reter o veículo até a regularização.",
      explicacaoErradas:
        "“sai livremente” e “via diplomática” ignoram o § 1º. “leiloado” não consta. “termo de compromisso” não substitui pagamento ou depósito.",
      pegadinha: "Achar que o CTB só alcança veículos brasileiros.",
      conhecimento: "O art. 3º já dizia que o CTB alcança veículos e condutores nacionais ou estrangeiros.",
    },
    {
      topico: "Pegadinha Cebraspe",
      subassunto: "Lombadas e sonorizadores (art. 94)",
      dificuldade: 5,
      raciocinio: "Separar quem define os casos especiais de quem fixa os padrões.",
      enunciado:
        "Item no estilo Cebraspe: “É proibida a utilização das ondulações transversais e de sonorizadores como redutores de velocidade, salvo em casos especiais definidos pelo órgão ou entidade competente, nos padrões e critérios estabelecidos pelo Cetran.” Esse item está",
      alternativas: [
        "certo, pois os padrões das lombadas são fixados pelo conselho estadual",
        "errado, pois as lombadas são proibidas em qualquer caso, sem exceção",
        "errado, pois os casos especiais são definidos pelo Contran, não pelo órgão",
        "errado, pois os padrões e os critérios são os estabelecidos pelo Contran",
        "errado, pois o sonorizador pode ser usado à vontade como redutor",
      ],
      correta: 3,
      explicacao:
        "O parágrafo único do art. 94 tem duas partes: o órgão ou entidade competente define os casos especiais, e o Contran estabelece os padrões e critérios. O item trocou Contran por Cetran no fim da frase.",
      explicacaoErradas:
        "O conselho estadual (Cetran) não fixa esses padrões. A proibição tem exceção: os casos especiais. Quem define esses casos é o órgão ou entidade competente, e não o Contran. O sonorizador entra na mesma proibição da lombada.",
      pegadinha: "Palavra trocada: Contran virou Cetran, duas siglas quase iguais.",
      conhecimento: "Contran = regra nacional. Cetran = conselho do Estado. Padrão técnico de lombada é regra nacional.",
    },
    {
      topico: "Pegadinha Cebraspe",
      subassunto: "Aviso de interdição da via (art. 95, § 2º)",
      dificuldade: 5,
      raciocinio: "Conferir o prazo do item com o § 2º do art. 95.",
      enunciado:
        "Item no estilo Cebraspe: “Salvo em casos de emergência, a autoridade de trânsito com circunscrição sobre a via avisará a comunidade, por intermédio dos meios de comunicação social, com vinte e quatro horas de antecedência, de qualquer interdição da via, indicando-se os caminhos alternativos a serem utilizados.” Esse item está",
      alternativas: [
        "errado, pois o aviso deve ser dado com 48 horas de antecedência",
        "certo, pois o prazo de aviso da interdição é de vinte e quatro horas",
        "errado, pois o aviso é dispensado quando houver caminho alternativo",
        "errado, pois quem avisa a comunidade é o responsável pela obra",
        "errado, pois o aviso prévio é exigido até nos casos de emergência",
      ],
      correta: 0,
      explicacao:
        "Todo o resto do item segue o § 2º do art. 95. Só o prazo foi trocado: a lei manda avisar a comunidade com quarenta e oito horas de antecedência.",
      explicacaoErradas:
        "24 horas é o número trocado. Os caminhos alternativos são indicados no próprio aviso, e não o dispensam. O aviso é tarefa da autoridade de trânsito; ao responsável pela obra cabe sinalizar (§ 1º). A emergência é a exceção do próprio parágrafo.",
      pegadinha: "Número trocado: 48 horas virou 24 horas, no meio de uma frase longa e certa.",
      conhecimento: "Obra na via: permissão prévia do órgão, sinalização por quem executa e aviso 48 h antes.",
    },
    {
      topico: "Pegadinha Cebraspe",
      subassunto: "Modificação do veículo (art. 98)",
      dificuldade: 4,
      raciocinio: "Nem todo item tem pegadinha: comparar com o art. 98 antes de marcar errado.",
      enunciado:
        "Item no estilo Cebraspe: “Nenhum proprietário ou responsável poderá, sem prévia autorização da autoridade competente, fazer ou ordenar que sejam feitas no veículo modificações de suas características de fábrica.” Esse item está",
      alternativas: [
        "errado, pois a autorização só é exigida para trocar o motor",
        "errado, pois basta comunicar a mudança ao órgão depois de feita",
        "certo, pois reproduz o caput do art. 98, sem nenhuma troca",
        "errado, pois a regra alcança o proprietário, e não o responsável",
        "errado, pois a autorização prévia é dada pela própria montadora",
      ],
      correta: 2,
      explicacao:
        "O item copia o caput do art. 98: sem prévia autorização da autoridade competente, ninguém pode fazer nem mandar fazer modificações nas características de fábrica do veículo.",
      explicacaoErradas:
        "A lei fala em qualquer modificação de característica de fábrica, não só no motor. A autorização é prévia, e não um aviso depois. O artigo cita o proprietário e o responsável. Quem autoriza é a autoridade competente, e não a montadora.",
      pegadinha: "Achar que todo item longo tem uma palavra trocada. Este está certo.",
      conhecimento: "Primeiro a autorização, depois a mudança. Depois de feita, a característica nova vai para o registro (art. 123, III).",
    },
  ],
};
