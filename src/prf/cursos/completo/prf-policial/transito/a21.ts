import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-21",
  resumo: {
    ideia:
      "A Resolução 968/2022 regula a identificação de veículos do art. 114 do CTB: o que é gravado, onde, quem pode regravar e como regularizar motores.",
    itens: [
      {
        termo: "VIN",
        faz: "17 caracteres em três seções: WMI (3), VDS (6) e VIS (8).",
        pista: "O VIS é o que aparece nos vidros.",
      },
      {
        termo: "Ano-modelo",
        faz: "É o décimo caractere do VIN. Pode ser o ano anterior, o mesmo ou o seguinte ao de fabricação.",
      },
      {
        termo: "ETA",
        faz: "Etiqueta autocolante que se destrói ao ser removida. Traz pelo menos o VIS.",
      },
      {
        termo: "Regravação",
        faz: "Exige autorização prévia, razão justificada e empresa credenciada. Usa superfície virgem e o caractere “R”.",
      },
      {
        termo: "Anulação",
        faz: "A gravação adulterada ou deteriorada recebe um “A” no início e outro no final.",
      },
      {
        termo: "Erro de fábrica",
        faz: "O fabricante pode corrigir o próprio erro e usa a partícula “RF”.",
      },
      {
        termo: "Troca de motor",
        faz: "60 dias para regularizar a numeração, contados da nota fiscal da instalação ou da declaração da frotista.",
      },
      {
        termo: "Câmbio, eixos, cabine e carroceria",
        faz: "A troca é comunicada ao órgão. A nota fiscal vai em até 30 dias.",
      },
      {
        termo: "Motor adulterado",
        faz: "Vai de imediato à autoridade policial. Regulariza por documento dela (DA/UF) ou decisão judicial (DJ/UF).",
      },
      {
        termo: "Gravação do órgão",
        faz: "9 dígitos: sigla da UF com sequencial de 7 dígitos, em superfície virgem do bloco.",
      },
    ],
    cuidado: "A regravação mantém a identificação anterior, inclusive o ano de fabricação (art. 114, § 2º, do CTB).",
  },
  questoes: [
    {
      topico: "VIN",
      subassunto: "Seções",
      dificuldade: 4,
      raciocinio: "Vidro e etiqueta usam a última seção.",
      enunciado:
        "Na vistoria, o agente confere os caracteres marcados nos vidros de um automóvel. Pelos arts. 3º e 9º da Resolução Contran 968/2022, essa marcação traz",
      alternativas: [
        "o WMI, com 3 caracteres",
        "o VDS, com 6 caracteres",
        "o NIEV, com 17 caracteres",
        "o NICV, com 21 caracteres",
        "o VIS, com 8 caracteres",
      ],
      correta: 4,
      explicacao: "O art. 9º manda marcar o VIS nos vidros. O art. 3º, IV, define o VIS como a última seção do VIN, com 8 caracteres.",
      explicacaoErradas:
        "“WMI” identifica o fabricante e “VDS” descreve o veículo, mas nenhum dos dois vai aos vidros. “NIEV” é de carroceria implementada. “NICV” é de carroceria de ônibus.",
      pegadinha: "Pensar que o vidro traz o VIN completo.",
      conhecimento: "A marcação vai em um para-brisa, em um vidro traseiro e em pelo menos dois vidros de cada lado, quando existentes.",
    },
    {
      topico: "VIN",
      subassunto: "Ano-modelo",
      dificuldade: 4,
      raciocinio: "Uma casa para cada lado do ano de fabricação.",
      enunciado:
        "Um veículo tem 2025 como ano de fabricação. Pelo art. 5º, § 4º, da Resolução Contran 968/2022, o ano-modelo pode ser",
      alternativas: [
        "2024, 2025 ou 2026",
        "somente 2025 ou 2026",
        "somente 2025",
        "2025, 2026 ou 2027",
        "de 2023 a 2027",
      ],
      correta: 0,
      explicacao: "O ano-modelo só pode ser imediatamente anterior, igual ou imediatamente posterior ao ano de fabricação.",
      explicacaoErradas:
        "“somente 2025 ou 2026” esquece o ano anterior, que a norma admite. “somente 2025” iguala os dois. “2027” e “2023” saem do intervalo de um ano para cada lado.",
      pegadinha: "Achar que o ano-modelo nunca pode ser anterior.",
      conhecimento: "O ano-modelo corresponde ao décimo caractere do VIN, que pode ser alfanumérico.",
    },
    {
      topico: "Regravação",
      subassunto: "Erro de fábrica",
      dificuldade: 5,
      raciocinio: "Quem errou corrige, com partícula própria.",
      enunciado:
        "Um fabricante percebe que gravou incorretamente o VIN de um veículo. Pelo art. 15 da Resolução Contran 968/2022, a correção",
      alternativas: [
        "depende de empresa credenciada e usa o caractere “R” depois do VIN",
        "depende de autorização do Detran e usa a partícula “RM” depois do VIN",
        "é feita pelo fabricante, que anula com “A” e remarca com a partícula “RF”",
        "é feita pelo fabricante sobre a gravação errada, sem nenhuma anulação",
        "só pode ser feita por ordem judicial, com o diferencial DJ/UF no cadastro",
      ],
      correta: 2,
      explicacao: "O fabricante está autorizado a corrigir. A gravação errada recebe “A” no início e no fim, e o VIN correto vai em superfície virgem seguido de “RF”.",
      explicacaoErradas:
        "“R” é da regravação do art. 14. “RM” indica motor remanufaturado de fábrica. “sobre a gravação errada” contraria a superfície virgem do § 4º. “DJ/UF” é da regularização de motor.",
      pegadinha: "Confundir as partículas R, RF e RM.",
      conhecimento: "No cadastro, o VIN corrigido consta com a partícula “RF”.",
    },
    {
      topico: "Agregados",
      subassunto: "Prazos",
      dificuldade: 5,
      raciocinio: "Motor tem prazo próprio, maior que o dos demais agregados.",
      enunciado:
        "Um proprietário trocou o motor e a caixa de câmbio na mesma oficina. Pelos arts. 16 e 27 da Resolução Contran 968/2022, contados dos marcos de cada artigo, os prazos para regularizar o motor e para entregar a nota fiscal do câmbio são, respectivamente,",
      alternativas: [
        "30 e 60 dias",
        "60 e 30 dias",
        "30 e 30 dias",
        "60 e 60 dias",
        "90 e 30 dias",
      ],
      correta: 1,
      explicacao: "O art. 27 dá 60 dias para o motor. O art. 16, § 1º, dá no máximo 30 dias para o comprovante do agregado.",
      explicacaoErradas:
        "“30 e 60” inverte os prazos. “30 e 30” e “60 e 60” igualam regras diferentes. “90” não aparece nesses artigos.",
      pegadinha: "Inverter os dois prazos.",
      conhecimento: "O órgão de trânsito tem até 30 dias, contados da comunicação, para registrar a alteração no Renavam.",
    },
    {
      topico: "Motor",
      subassunto: "Adulteração",
      dificuldade: 5,
      raciocinio: "DA é decisão administrativa. DJ é decisão judicial.",
      enunciado:
        "A vistoria constata motor com numeração removida. O veículo é encaminhado à autoridade policial, e depois um juiz determina a regularização. Pelos arts. 31 e 32 da Resolução Contran 968/2022, o cadastro estadual receberá, depois do número do motor,",
      alternativas: [
        "a partícula “RM”, própria de motor remanufaturado",
        "o diferencial DA/UF, mesmo com a decisão judicial",
        "a partícula “REM”, por ser motor regravado",
        "o diferencial DJ/UF, em razão da decisão judicial",
        "a partícula “RF”, própria de correção de fábrica",
      ],
      correta: 3,
      explicacao: "O art. 31, II, manda encaminhar o veículo à autoridade policial. O art. 32, II, regulariza por determinação judicial, com o diferencial DJ/UF.",
      explicacaoErradas:
        "“DA/UF” segue documento da autoridade policial. “RM” e “RF” são marcações do fabricante. “REM” é referência de ocorrências anteriores à Resolução 282/2008, no art. 30.",
      pegadinha: "Trocar DA por DJ.",
      conhecimento: "Adulterar sinal identificador de veículo é crime do art. 311 do Código Penal.",
    },
    {
      topico: "Motor",
      subassunto: "Gravação",
      dificuldade: 5,
      raciocinio: "Numeração removida exige perícia antes da nova gravação.",
      enunciado:
        "Um bloco de motor teve a numeração original removida mecanicamente, e o caso será resolvido com nova gravação fornecida pelo órgão estadual. Pelo art. 34 da Resolução Contran 968/2022, essa gravação",
      alternativas: [
        "tem 17 caracteres, e o proprietário escolhe a oficina que fará o serviço",
        "repete o número antigo com “R”, no mesmo local da gravação original",
        "tem 9 dígitos, e pode ser feita sem perícia se houver nota fiscal do motor",
        "tem 7 dígitos, todos sequenciais, sem indicar a UF que autorizou o serviço",
        "tem 9 dígitos, em superfície virgem, e só é autorizada depois de perícia",
      ],
      correta: 4,
      explicacao: "São 2 dígitos da UF e 7 do sequencial, em superfície virgem do bloco, por empresa autorizada. Com a numeração removida mecanicamente, o § 2º exige perícia da autoridade policial.",
      explicacaoErradas:
        "“17 caracteres” é o VIN. “oficina” e “sem perícia” contrariam os §§ 1º e 2º. “com R” é da regravação do art. 14. “7 dígitos” esquece a sigla da UF.",
      pegadinha: "Dispensar a perícia por causa da nota fiscal.",
      conhecimento: "O sequencial começa em 0000001 e é fornecido pelo órgão estadual ou do DF.",
    },
    {
      topico: "ETA",
      subassunto: "Reposição",
      dificuldade: 4,
      raciocinio: "Vistoria, autorização, concessionária.",
      enunciado:
        "A ETA da coluna da porta de um veículo foi danificada. Pelos arts. 18, 20 e 24 da Resolução Contran 968/2022, a reposição exige",
      alternativas: [
        "vistoria e autorização de 60 dias, com pedido por meio de concessionária",
        "somente a compra em loja de autopeças, com a nota fiscal em nome do dono",
        "autorização judicial, com a etiqueta nova entregue pelo órgão de trânsito",
        "autorização de 30 dias, com pedido feito diretamente ao fabricante da marca",
        "perícia policial, com a nova etiqueta afixada por empresa de regravação",
      ],
      correta: 0,
      explicacao: "A autorização sai depois da vistoria, vale 60 dias e o pedido corre por concessionária autorizada escolhida pelo proprietário.",
      explicacaoErradas:
        "“autopeças” e “judicial” não constam desse procedimento. “30 dias” é o prazo para regularizar depois da nota fiscal. “diretamente ao fabricante” contraria o art. 20. “perícia policial” não é exigência da reposição.",
      pegadinha: "Trocar os 60 dias da autorização pelos 30 dias da regularização.",
      conhecimento: "A instalação cabe ao órgão de trânsito do Estado ou do DF ou à concessionária da marca.",
    },
    {
      topico: "Placas (PIV)",
      subassunto: "Placa só traseira",
      dificuldade: 5,
      raciocinio: "A lista da resolução vai além dos veículos de duas ou três rodas.",
      enunciado:
        "Numa fiscalização, a equipe encontra quatro veículos registrados, todos só com a placa traseira no modelo de PIV: um quadriciclo, um guindaste, um semirreboque e um caminhão-trator. Pela Resolução Contran 969/2022,",
      alternativas: [
        "todos estão regulares, pois a placa dianteira só é exigida de automóveis, camionetas e utilitários",
        "o quadriciclo está irregular, pois só os veículos de duas ou três rodas dispensam a placa dianteira",
        "o semirreboque está irregular, pois reboques e semirreboques também precisam da placa dianteira",
        "só o caminhão-trator está irregular, por não constar da lista dos que usam só a placa traseira",
        "o guindaste e o caminhão-trator estão irregulares, pois veículos de carga e especiais usam duas placas",
      ],
      correta: 3,
      explicacao:
        "O art. 2º, § 1º, lista os veículos identificados apenas pela PIV traseira: reboques, semirreboques, motocicletas, motonetas, ciclomotores, cicloelétricos, triciclos, quadriciclos e guindastes. O caminhão-trator não está na lista e precisa das duas placas, como manda o caput.",
      explicacaoErradas:
        "“só os veículos de duas ou três rodas” é a regra do § 6º do art. 115 do CTB, mas a lista da resolução inclui também o quadriciclo e o guindaste. “também precisam da placa dianteira” erra, pois reboques e semirreboques estão na lista. “veículos de carga e especiais” não é critério da norma. “todos estão regulares” ignora o caminhão-trator.",
      pegadinha: "Aplicar só a dispensa do CTB para duas ou três rodas e esquecer o quadriciclo e o guindaste.",
      conhecimento:
        "Veículo registrado sem qualquer uma das placas comete a infração gravíssima do art. 230, IV, do CTB (art. 60, IV, a, da resolução).",
    },
    {
      topico: "Placas (PIV)",
      subassunto: "QR Code da placa",
      dificuldade: 5,
      raciocinio: "Defeito que impede a leitura é uma coisa; mexer no QR Code de propósito é outra.",
      enunciado:
        "Numa blitz, a equipe confere duas PIV com o aplicativo oficial. Na primeira, o QR Code está desgastado pelo tempo e não é lido. Na segunda, o dono raspou o QR Code de propósito. Pela Resolução Contran 969/2022,",
      alternativas: [
        "o primeiro caso cai no art. 221 do CTB, infração média, e o segundo, no art. 230, I, infração gravíssima",
        "os dois caem no art. 230, I, pois o QR Code é o lacre eletrônico e qualquer dano equivale a violá-lo",
        "os dois caem no art. 221, pois o QR Code não é lacre e só integra as especificações técnicas da placa",
        "o primeiro cai no art. 230, VI, por falta de legibilidade, e o segundo, no art. 230, I, por adulteração",
        "o primeiro não é infração, por falta de dolo do dono, e o segundo cai no art. 230, I, infração gravíssima",
      ],
      correta: 0,
      explicacao:
        "O art. 60, I, b, leva ao art. 221 do CTB (média) a PIV com QR Code arranhado, desgastado ou com defeito que impeça a leitura pelo aplicativo oficial. O art. 60, II, a, leva ao art. 230, I (gravíssima) a PIV com QR Code violado, adulterado de propósito, raspado, suprimido ou falsificado.",
      explicacaoErradas:
        "“qualquer dano equivale a violá-lo” ignora a divisão do art. 60 entre defeito e ato intencional. “não é lacre” contraria o art. 3º. O “art. 230, VI” trata dos caracteres sem visibilidade ou legibilidade, não do QR Code. “por falta de dolo” erra, pois o desgaste também é infração, só que média.",
      pegadinha: "Tratar o desgaste do QR Code como violação do lacre, ou levá-lo ao inciso dos caracteres ilegíveis.",
      conhecimento: "O QR Code é o lacre eletrônico da PIV e substitui o lacre previsto no art. 115 do CTB (art. 3º).",
    },
    {
      topico: "Placas (PIV)",
      subassunto: "Segunda placa traseira",
      dificuldade: 5,
      raciocinio: "A necessidade da segunda placa traseira está entre os casos que obrigam a adotar a PIV.",
      enunciado:
        "Um automóvel ainda com a Placa Nacional Única (PNU), de três letras e quatro números, transporta duas bicicletas num suporte traseiro que encobre parte da placa, e não tem segunda placa. Pela Resolução Contran 969/2022,",
      alternativas: [
        "não há exigência de segunda placa, pois ela vale só para veículo com engate de reboque",
        "há infração do art. 230, IV, do CTB, e instalar a segunda placa obriga o carro a adotar a PIV",
        "há infração média do art. 221 do CTB, por ser placa fixada em desacordo com as especificações",
        "o dono pode instalar uma segunda PNU traseira, igual à primeira, sem trocar o modelo das placas",
        "a segunda placa só é obrigatória na carroceria intercambiável, como a de camper, e não para bicicleta",
      ],
      correta: 1,
      explicacao:
        "O art. 60, IV, b, leva ao art. 230, IV, do CTB o veículo que transporta carga ou bicicleta encobrindo, total ou parcialmente, a PIV traseira sem ter a segunda PIV. O art. 4º, § 1º, II, trata da instalação dessa placa no automóvel com bicicletas, e o art. 56, § 1º, III, exige a PIV quando há necessidade da segunda placa traseira.",
      explicacaoErradas:
        "“só para veículo com engate” esquece as bicicletas do art. 60, IV, b. O “art. 221” não é o enquadramento previsto para esse caso. A “segunda PNU traseira” não cabe, pois a segunda placa obriga a adotar a PIV. “e não para bicicleta” contraria o art. 60, IV, b.",
      pegadinha: "Achar que a segunda placa vale só para engate de reboque ou que pode repetir a placa antiga.",
      conhecimento:
        "Nesse caso, a nova PIV pode ser comprada em outra UF, com intermediação do órgão de trânsito de registro do veículo (art. 56, § 2º).",
    },
    {
      topico: "Placas (PIV)",
      subassunto: "Troca em outra UF",
      dificuldade: 4,
      raciocinio: "A regra facilita a vida de quem está longe do local de registro do veículo.",
      enunciado:
        "Sobre a substituição de PIV extraviada, furtada ou roubada, a Resolução Contran 969/2022 prevê que",
      alternativas: [
        "só o proprietário pode fazer o pedido, no órgão de trânsito do Município de registro do veículo",
        "o pedido fora da UF de registro só é aceito se o veículo estiver retido ou recolhido a depósito",
        "o pedido em outra UF só vale para furto ou roubo comunicados à polícia, não para o simples extravio",
        "o veículo recolhido a depósito em outra UF precisa ser levado à UF de registro para trocar a placa",
        "o proprietário, o possuidor ou o condutor pode pedir a troca em qualquer UF onde o veículo circule",
      ],
      correta: 4,
      explicacao:
        "O art. 25 permite que o proprietário, o possuidor ou o condutor peça a substituição em qualquer UF onde o veículo estiver circulando, não importa onde esteja registrado. O parágrafo único estende a regra ao veículo retido ou recolhido a depósito em outra UF ou Município que precise voltar a circular.",
      explicacaoErradas:
        "“só o proprietário” ignora o possuidor e o condutor. “retido ou recolhido a depósito” é extensão da regra, não condição. “não para o simples extravio” erra, pois o extravio está no art. 25. “precisa ser levado à UF de registro” contraria o parágrafo único.",
      pegadinha: "Achar que a troca só pode ser feita no local de registro ou só pelo dono.",
      conhecimento:
        "Pelo art. 56, § 1º, I, b, o furto, o extravio, o roubo ou o dano da placa também obrigam o veículo que ainda usa a PNU a adotar a PIV.",
    },
    {
      topico: "Placas (PIV)",
      subassunto: "Quando trocar a PNU",
      dificuldade: 5,
      raciocinio: "A troca só é obrigatória nos casos do art. 56, § 1º; fora deles, a PNU vale até o sucateamento.",
      enunciado:
        "Um carro ainda com a Placa Nacional Única (PNU) circula regularmente. Pela Resolução Contran 969/2022, a troca pela PIV passa a ser obrigatória quando o veículo",
      alternativas: [
        "é vendido a outro morador do mesmo Município, com a transferência registrada no órgão de trânsito",
        "tem a cor alterada com autorização, e a mudança é anotada no registro e no CRLV-e do veículo",
        "tem o registro mudado para outro Município, ainda que dentro do mesmo estado em que já estava",
        "passa pelo licenciamento anual e o órgão de trânsito do estado decide exigir o novo modelo",
        "completa dez anos de fabricação, prazo final dado pela resolução para o uso da PNU",
      ],
      correta: 2,
      explicacao:
        "O art. 56, § 1º, exige a PIV do veículo em circulação só em três casos: troca de placa por mudança de categoria ou por furto, extravio, roubo ou dano; mudança de Município ou de UF; e necessidade da segunda placa traseira. Fora disso, a PNU pode circular até o sucateamento (art. 57).",
      explicacaoErradas:
        "A venda com “transferência registrada” no mesmo Município não está na lista. A “cor alterada” também não, pois a lista fala em mudança de categoria. O art. 57, § 2º, proíbe o órgão de trânsito de “exigir o novo modelo” fora dos casos do art. 56. E não há prazo de “dez anos de fabricação”.",
      pegadinha: "Achar que a venda do carro ou o tempo de uso obrigam a trocar a PNU.",
      conhecimento: "No primeiro emplacamento do veículo, a PIV é sempre exigida (art. 56, caput).",
    },
    {
      topico: "PIV-Exp e PIV-Fab",
      subassunto: "Circulação",
      dificuldade: 5,
      raciocinio: "Uma placa fica presa à UF que a expediu; a outra não tem limite de horário nem de lugar.",
      enunciado:
        "Uma revendedora de veículos usa placas de experiência (PIV-Exp), e uma montadora usa placas de fabricante (PIV-Fab) em testes. Pela Resolução Contran 969/2022,",
      alternativas: [
        "a PIV-Exp fica restrita às vias da UF que a expediu, e a PIV-Fab não tem limite de horário nem de lugar",
        "as duas circulam em todo o país, bastando que o condutor leve a autorização emitida pela própria empresa",
        "a PIV-Fab só circula de dia e na UF da fábrica, e a PIV-Exp, em qualquer UF, com o livro de registro",
        "o condutor do veículo com PIV-Exp fica dispensado da categoria de habilitação, por se tratar de um teste",
        "o veículo com PIV-Fab pode ser dirigido por clientes interessados na compra, desde que anotados no registro",
      ],
      correta: 0,
      explicacao:
        "O art. 42 restringe a PIV-Exp às vias da UF de circunscrição do órgão que a expediu, com todas as exigências de circulação, inclusive a categoria de habilitação. Já o art. 36 diz que o uso da PIV-Fab independe de horário, situação geográfica ou restrições de qualquer natureza.",
      explicacaoErradas:
        "“em todo o país” erra quanto à PIV-Exp. “só circula de dia e na UF da fábrica” inverte as regras das duas placas. A “categoria de habilitação” é exigida também na PIV-Exp. E a PIV-Fab só pode ser conduzida e ocupada por técnicos ou engenheiros, não por “clientes interessados na compra”.",
      pegadinha: "Trocar as regras e achar que a PIV-Fab é a placa presa a uma UF.",
      conhecimento:
        "Se o condutor do veículo com PIV-Exp não for identificado em acidente ou infração, o dono do estabelecimento responde administrativamente (art. 44).",
    },
    {
      topico: "Clonagem de placas",
      subassunto: "Fim do processo",
      dificuldade: 5,
      raciocinio: "O carro original ganha registro novo; o registro antigo, marcado com CL, é baixado.",
      enunciado:
        "O dono de um carro prova, em processo administrativo, que um clone circula com a mesma combinação de placa. Concluído o processo, pela Resolução Contran 969/2022,",
      alternativas: [
        "o carro original mantém o número do RENAVAM e só troca as placas, já que o registro continua o mesmo",
        "o VIN do carro original passa a terminar em CL, e o veículo segue circulando com esse VIN no novo registro",
        "a troca de placas só ocorre depois de pagos todos os débitos do registro, inclusive as multas do clone",
        "o original ganha novo registro, com novo RENAVAM e nova placa, e o registro com CL recebe baixa",
        "os pontos das multas do clone ficam no prontuário do dono até o julgamento de cada recurso apresentado",
      ],
      correta: 3,
      explicacao:
        "O art. 53 manda inserir CL ao final do VIN e do número do motor no registro antigo, criar novo registro para o carro original, com novo número de RENAVAM e nova PIV, emplacá-lo de novo e fazer a baixa por clonagem do registro com CL.",
      explicacaoErradas:
        "“mantém o número do RENAVAM” erra, pois o novo registro gera número novo. O CL fica só no registro antigo, que é baixado, e o novo registro não leva “esse VIN” com CL. “inclusive as multas do clone” erra, pois o art. 54 exclui os débitos gerados pelo clone. E os pontos das multas comprovadamente do clone são excluídos do prontuário (art. 55), sem esperar “o julgamento de cada recurso”.",
      pegadinha: "Achar que o carro original passa a usar o VIN com CL ou que paga as multas do clone.",
      conhecimento:
        "As infrações do clone passam a ser registradas no registro com CL ao final do VIN, para apurar a responsabilidade dos infratores (art. 62).",
    },
    {
      topico: "Credenciamento de PIV",
      subassunto: "Sanções e prazos",
      dificuldade: 4,
      raciocinio: "Advertência, suspensão de 30 dias e cassação, nessa ordem; depois da cassação, espera de 2 anos.",
      enunciado:
        "Sobre o credenciamento das empresas que fabricam e estampam PIV, a Resolução Contran 969/2022 prevê que",
      alternativas: [
        "o estampador é credenciado pelo órgão máximo executivo de trânsito da União, e o fabricante, pelo órgão estadual",
        "o credenciamento vale por cinco anos e pode ser renovado uma única vez, por igual período, a pedido",
        "a empresa que tiver o credenciamento cassado só pode pedir outro depois de dois anos da cassação",
        "a advertência não sanada em trinta dias leva direto à cassação, sem passar pela suspensão",
        "o fabricante só pode fornecer placas aos estampadores do estado onde fica a sua fábrica",
      ],
      correta: 2,
      explicacao:
        "O art. 20, § 5º, só permite novo pedido de credenciamento depois de dois anos da cassação, com análise das causas da penalidade. As sanções seguem a gravidade: advertência, suspensão por trinta dias e cassação.",
      explicacaoErradas:
        "“o estampador é credenciado pelo órgão máximo” inverte os papéis: a União credencia o fabricante (art. 7º), e o órgão estadual, o estampador (art. 8º). “uma única vez” erra, pois a renovação não tem limite (art. 19). “leva direto à cassação” pula a suspensão do § 2º do art. 20. E o fabricante pode fornecer para todas as UF (art. 11), sem ficar preso ao “estado onde fica a sua fábrica”.",
      pegadinha: "Inverter quem credencia o fabricante e quem credencia o estampador.",
      conhecimento: "Durante a suspensão, o credenciado não pode produzir, estampar nem vender PIV (art. 20, § 3º).",
    },
    {
      topico: "Placas (PIV)",
      subassunto: "Troca voluntária da PNU",
      dificuldade: 5,
      raciocinio: "Só um caractere muda, e a combinação antiga não some do cadastro.",
      enunciado:
        "O dono de um carro com a Placa Nacional Única (PNU) decide, por vontade própria, passar para o modelo de PIV. Pela Resolução Contran 969/2022,",
      alternativas: [
        "o sistema sorteia uma combinação nova, e a antiga é apagada do cadastro para evitar consultas duplicadas",
        "as três letras mudam para indicar a UF de registro, e os quatro números são mantidos na nova placa",
        "basta trocar a placa traseira, pois a dianteira da PNU continua válida até o sucateamento do veículo",
        "o primeiro caractere numérico é substituído, e a consulta passa a aceitar só a combinação nova",
        "muda só o segundo caractere numérico, e a combinação antiga fica como placa anterior no CRLV-e",
      ],
      correta: 4,
      explicacao:
        "Pelo art. 2º, § 4º, a adoção voluntária troca automaticamente o segundo caractere numérico da PNU, conforme o Anexo II. O art. 57, § 1º, manda manter os caracteres originais no cadastro e no campo placa anterior do CRLV-e, permitindo consultas e transações pelas duas combinações.",
      explicacaoErradas:
        "“o sistema sorteia uma combinação nova” erra, pois a nova combinação vem da troca de um só caractere, e a antiga continua consultável. “as três letras mudam” não tem base na norma. A “dianteira da PNU” não pode ficar, pois o veículo passa a ser identificado por PIV dianteira e traseira (art. 2º). “o primeiro caractere numérico” erra a posição, e a consulta aceita as duas combinações.",
      pegadinha: "Achar que a combinação muda toda ou que a antiga some do cadastro.",
      conhecimento:
        "A troca voluntária pode ser feita a qualquer tempo, e nem o órgão estadual nem o estampador podem exigir a troca da PNU fora dos casos do art. 56, § 1º (art. 57, § 2º).",
    },
    {
      topico: "PIV-Exp e PIV-Fab",
      subassunto: "Livro da PIV-Exp",
      dificuldade: 4,
      raciocinio: "O livro é controle do estabelecimento, mas a fiscalização pode vê-lo sempre que pedir.",
      enunciado:
        "Na fiscalização de uma revendedora que usa placas de experiência (PIV-Exp), o agente pede o controle de uso dessas placas. Pela Resolução Contran 969/2022,",
      alternativas: [
        "o livro de registro precisa ser físico, com páginas numeradas, pois o meio digital não é aceito",
        "faltar com a escrituração, atrasá-la, fraudá-la ou recusar a exibição do livro gera multa gravíssima",
        "o agente pode levar o livro físico para a unidade policial, para conferir os dados com mais calma",
        "o livro só registra a entrada e a saída dos veículos, sem os dados do condutor que saiu com a PIV-Exp",
        "os dados do livro devem ser autenticados pelo órgão de trânsito até o quinto dia útil do mês seguinte",
      ],
      correta: 1,
      explicacao:
        "O art. 49 pune com a multa das infrações gravíssimas a falta de escrituração do livro, o atraso, a fraude ao fazê-lo e a recusa de exibi-lo. O art. 60, VI, enquadra esses casos no art. 238 do CTB.",
      explicacaoErradas:
        "O livro pode ser físico ou digital (art. 41), então “o meio digital não é aceito” erra. As autoridades têm acesso aos registros, mas não podem retirá-los do estabelecimento (art. 48), o que afasta “levar o livro físico”. O livro traz o nome e a habilitação do condutor que saiu com a PIV-Exp, ao contrário de “sem os dados do condutor”. E a autenticação vai até o décimo dia do mês seguinte, não “até o quinto dia útil”.",
      pegadinha: "Achar que o agente pode recolher o livro ou que o livro digital não vale.",
      conhecimento:
        "A PIV-Exp é usada pelos estabelecimentos do art. 330 do CTB, que reformam, recuperam, compram, vendem ou desmontam veículos (art. 39).",
    },
  ],
};
