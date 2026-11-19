import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-02",
  resumo: {
    ideia:
      "O Anexo I define os termos do CTB, e as normas gerais dizem quem passa primeiro, como ultrapassar, como usar as luzes e onde parar. Boa parte das questões troca um termo por outro parecido.",
    itens: [
      {
        termo: "Preferência sem sinal",
        faz: "Primeiro quem vem da rodovia. Depois quem está na rotatória. Nos demais casos, quem vem pela direita.",
      },
      {
        termo: "Veículos de emergência",
        faz: "Livre circulação e parada pedem alarme sonoro e luz intermitente. Livre estacionamento pede só a luz.",
      },
      {
        termo: "Ultrapassagem",
        faz: "Na mesma faixa, saindo e voltando a ela. Em regra, pela esquerda.",
      },
      {
        termo: "Passagem por outro veículo",
        faz: "À frente de outro, no mesmo sentido, mas em faixas distintas.",
      },
      {
        termo: "Parada e estacionamento",
        faz: "Parada é só para embarque ou desembarque. Carga ou descarga é considerada estacionamento.",
      },
      {
        termo: "Luz baixa",
        faz: "À noite e, de dia, em túneis e sob chuva, neblina ou cerração.",
      },
      {
        termo: "Pista simples de dia",
        faz: "Fora do perímetro urbano, faróis acesos para quem não tem luz de rodagem diurna.",
      },
      {
        termo: "Crianças",
        faz: "Menor de 10 anos que não atingiu 1,45 m vai no banco traseiro, com dispositivo de retenção.",
      },
      {
        termo: "Art. 29, § 2º",
        faz: "Maiores pelos menores, motorizados pelos não motorizados e, juntos, pelos pedestres.",
      },
    ],
    cuidado: "Caminhonete leva carga. Camioneta é veículo misto, com passageiros e carga no mesmo compartimento.",
  },
  questoes: [
    {
      topico: "Preferência de passagem",
      subassunto: "Local não sinalizado",
      dificuldade: 4,
      raciocinio: "A regra da direita vem por último.",
      enunciado:
        "Em um cruzamento sem sinalização, um veículo vem de uma rodovia e outro vem de uma via secundária, pela direita do primeiro. Tem preferência",
      alternativas: [
        "o que vem pela direita, regra geral que vale para qualquer cruzamento",
        "o de maior porte, porque responde pela segurança do menor",
        "o que circula pela rodovia, mesmo vindo pela esquerda do outro",
        "o que chegar primeiro ao cruzamento, qualquer que seja o lado",
        "o mais lento, que deve ser protegido pelo condutor mais rápido",
      ],
      correta: 2,
      explicacao:
        "O art. 29, III, dá preferência a quem está na rodovia quando só um fluxo vem dela. A direita só vale nos demais casos.",
      explicacaoErradas:
        "“pela direita” aplica o último critério antes do primeiro. “maior porte” usa o § 2º, que não trata de preferência. “chegar primeiro” e “mais lento” não estão na lei.",
      pegadinha: "Aplicar a regra da direita em toda situação.",
      conhecimento: "Na rotatória, tem preferência quem circula por ela.",
    },
    {
      topico: "Veículos de emergência",
      subassunto: "Estacionamento e alarme",
      dificuldade: 5,
      raciocinio: "O art. 29, VII, separa alínea e de alínea f.",
      enunciado:
        "Em serviço de urgência, uma viatura liga só a iluminação intermitente, sem alarme sonoro, e fica estacionada em local proibido. Pelo art. 29, VII, do CTB, a prerrogativa",
      alternativas: [
        "não se aplica, porque toda prerrogativa exige os dois dispositivos ligados",
        "só vale se o condutor registrar depois a ocorrência no órgão de trânsito",
        "depende de sinalização de advertência antes da parada",
        "alcança qualquer viatura oficial, mesmo fora do serviço de urgência",
        "de estacionar exige só a luz intermitente, e a viatura a usou",
      ],
      correta: 4,
      explicacao:
        "A alínea f exige apenas iluminação intermitente para o livre estacionamento. A alínea e exige os dois dispositivos para a livre circulação e a parada.",
      explicacaoErradas:
        "“toda prerrogativa” apaga a diferença entre as alíneas. “registrar depois” e “sinalização de advertência” não são requisitos. “mesmo fora” contraria o serviço de urgência.",
      pegadinha: "Exigir sirene também para o estacionamento.",
      conhecimento: "O alarme e a luz só podem ser usados na efetiva prestação de serviço de urgência.",
    },
    {
      topico: "Uso de luzes",
      subassunto: "Rodovia de pista simples",
      dificuldade: 5,
      raciocinio: "O § 2º do art. 40 mudou a regra antiga.",
      enunciado:
        "Um carro sem luz de rodagem diurna circula em rodovia de pista simples, fora do perímetro urbano, de dia e com tempo bom. Quanto às luzes, o condutor",
      alternativas: [
        "deve manter os faróis acesos, como exige o art. 40, § 2º",
        "pode trafegar com os faróis apagados, pois a regra vale só à noite",
        "deve usar luz alta, pois a via não tem iluminação",
        "só acende os faróis em túneis e sob chuva, neblina ou cerração",
        "só precisa de faróis acesos nas rodovias de pista dupla e duas faixas",
      ],
      correta: 0,
      explicacao:
        "O art. 40, § 2º, manda quem não tem luz de rodagem diurna manter os faróis acesos nas rodovias de pista simples fora dos perímetros urbanos, mesmo de dia.",
      explicacaoErradas:
        "“só à noite” e “túneis e sob chuva” ignoram o § 2º. “luz alta” se liga às vias não iluminadas à noite. “pista dupla” troca a pista da regra.",
      pegadinha: "Aplicar a regra a toda rodovia ou também aos carros com luz diurna.",
      conhecimento: "Luzes de rodagem diurna são equipamento obrigatório pelo art. 105, VIII.",
    },
    {
      topico: "Parada e estacionamento",
      subassunto: "Carga e descarga",
      dificuldade: 4,
      raciocinio: "Parada só serve a passageiros.",
      enunciado:
        "Em local com estacionamento proibido, um caminhão fica imobilizado dez minutos para descarregar mercadorias. Pelo CTB, essa operação",
      alternativas: [
        "é parada, pois o veículo fica pouco tempo no local",
        "é permitida, porque a parada é livre até dez minutos",
        "é embarque de carga, que a lei equipara a desembarque de passageiros",
        "é considerada estacionamento, e não parada",
        "é regulada pelo Contran, e não pelo órgão com circunscrição sobre a via",
      ],
      correta: 3,
      explicacao:
        "O parágrafo único do art. 47 diz que a operação de carga ou descarga é considerada estacionamento e será regulamentada pelo órgão com circunscrição sobre a via.",
      explicacaoErradas:
        "“é parada” e “livre até dez minutos” desprezam que a parada serve só a passageiros. “embarque de carga” inventa uma equiparação. “regulada pelo Contran” troca o órgão.",
      pegadinha: "Decidir pelo tempo, e não pela finalidade.",
      conhecimento: "Quando proibido o estacionamento, a parada se restringe ao tempo indispensável para embarque ou desembarque.",
    },
    {
      topico: "Ultrapassagem",
      subassunto: "Conceitos do Anexo I",
      dificuldade: 5,
      raciocinio: "Faixa diferente muda o nome do movimento.",
      enunciado:
        "Em via com duas faixas no mesmo sentido, um carro segue em sua faixa e fica à frente de outro, mais lento, que está na faixa ao lado, sem que nenhum deles mude de faixa. Pelo Anexo I, o movimento é",
      alternativas: [
        "ultrapassagem, pois passou à frente de veículo no mesmo sentido",
        "passagem por outro veículo, por ocorrer em faixas distintas",
        "transposição de faixas, por haver passagem de uma faixa para outra",
        "conversão, por haver mudança da direção original do veículo",
        "ultrapassagem pela direita, proibida quando o outro carro é mais lento",
      ],
      correta: 1,
      explicacao:
        "Passagem por outro veículo ocorre no mesmo sentido, em menor velocidade, mas em faixas distintas. Na ultrapassagem, a faixa é a mesma, e o veículo sai e retorna a ela.",
      explicacaoErradas:
        "“ultrapassagem” exige sair e retornar à faixa de origem. “transposição” exige mudar de faixa. “conversão” é movimento em ângulo. “pela direita” repete o erro da ultrapassagem.",
      pegadinha: "Chamar de ultrapassagem todo movimento de passar à frente.",
      conhecimento: "Transposição de faixas é a passagem de uma faixa demarcada para outra.",
    },
    {
      topico: "Transporte de crianças",
      subassunto: "Art. 64",
      dificuldade: 5,
      raciocinio: "A regra pede duas condições juntas.",
      enunciado:
        "Um condutor leva, no banco dianteiro e com o cinto, uma criança de 9 anos e 1,50 m de altura. Pela regra do art. 64, esse transporte",
      alternativas: [
        "é proibido, pois toda criança menor de 10 anos fica no banco traseiro",
        "só é permitido com dispositivo de retenção, qualquer que seja a altura",
        "é proibido, porque a regra considera a idade, e não a altura",
        "é permitido só com autorização escrita dos pais ou do responsável",
        "não viola o art. 64, pois a criança já atingiu 1,45 m",
      ],
      correta: 4,
      explicacao:
        "O art. 64 alcança as crianças com menos de 10 anos que não tenham atingido 1,45 m. Aos 9 anos e com 1,50 m, falta uma das condições.",
      explicacaoErradas:
        "“toda criança” e “considera a idade” ignoram a altura. “qualquer que seja a altura” também. “autorização escrita” não existe na lei.",
      pegadinha: "Olhar só para a idade.",
      conhecimento: "O Contran disciplina o uso excepcional de dispositivos de retenção no banco dianteiro.",
    },
    {
      topico: "Conversão",
      subassunto: "Via com acostamento",
      dificuldade: 4,
      raciocinio: "Quem tem acostamento espera nele.",
      enunciado:
        "Em rodovia com acostamento e sem local apropriado para conversão à esquerda, um condutor quer entrar à esquerda. Pelo art. 37 do CTB, ele deve",
      alternativas: [
        "parar na faixa da esquerda com o pisca-alerta ligado até a pista ficar livre",
        "seguir até a próxima interseção em nível, mesmo longe, sem nunca cruzar a pista",
        "aguardar no acostamento, à direita, para cruzar a pista com segurança",
        "aproximar-se do eixo da pista e executar a manobra no menor espaço possível",
        "entrar no canteiro central e aguardar ali até a abertura do fluxo contrário",
      ],
      correta: 2,
      explicacao: "O art. 37 manda aguardar no acostamento, à direita, onde não houver local apropriado.",
      explicacaoErradas:
        "“parar na faixa” cria perigo na pista. “sem nunca cruzar” contraria a lei. “aproximar-se do eixo” é a regra do art. 38 para quando não há essa situação. “canteiro central” não é local de espera.",
      pegadinha: "Aplicar a regra do art. 38 em via com acostamento.",
      conhecimento: "O mesmo vale para a operação de retorno.",
    },
    {
      topico: "Normas gerais",
      subassunto: "Art. 29, § 2º",
      dificuldade: 4,
      raciocinio: "Quem é maior protege quem é menor.",
      enunciado: "Pelo art. 29, § 2º, respeitadas as normas de circulação e conduta, são responsáveis pela segurança os veículos",
      alternativas: [
        "maiores pelos menores, motorizados pelos não motorizados e, juntos, pelos pedestres",
        "menores pelos maiores, não motorizados pelos motorizados e, juntos, pelos pedestres",
        "maiores pelos menores, não motorizados pelos motorizados e, juntos, pelos pedestres",
        "mais velozes pelos mais lentos, oficiais pelos particulares e, juntos, pelos pedestres da via",
        "maiores pelos menores, e os pedestres respondem pelos ciclistas que usam o mesmo espaço",
      ],
      correta: 0,
      explicacao:
        "A ordem é decrescente: os maiores respondem pelos menores, os motorizados pelos não motorizados e, juntos, pela incolumidade dos pedestres.",
      explicacaoErradas:
        "“menores pelos maiores” inverte a ordem. “não motorizados pelos motorizados” inverte a segunda parte. “oficiais pelos particulares” inventa um critério. “pedestres respondem” contraria a lei.",
      pegadinha: "Inverter só uma parte da ordem.",
      conhecimento: "A regra não elimina as normas de circulação, que seguem valendo para todos.",
    },
    {
      topico: "Transporte de crianças",
      subassunto: "Cinto de dois pontos",
      dificuldade: 5,
      raciocinio: "Cinto original de dois pontos atrás abre uma exceção ao assento de elevação.",
      enunciado:
        "Um carro antigo saiu de fábrica com cintos subabdominais, de dois pontos, nos bancos traseiros. O condutor leva ali uma criança de 6 anos presa só por esse cinto, sem assento de elevação. Pela Resolução Contran 819/2021, esse transporte",
      alternativas: [
        "é irregular, pois toda criança de até 7 anos e meio precisa do assento de elevação em carro particular",
        "é irregular, pois a criança deveria passar para o banco dianteiro, como manda o art. 3º nesse caso",
        "é regular só se o carro não tiver airbag para o passageiro do banco dianteiro, como pede o art. 4º",
        "é permitido em caráter excepcional, pois a criança tem entre 4 e 7 anos e meio e o cinto é original",
        "é irregular, pois o cinto de dois pontos só é aceito para criança com mais de 7 anos e meio",
      ],
      correta: 3,
      explicacao:
        "O parágrafo único do art. 3º permite, em caráter excepcional, que crianças com mais de 4 e menos de 7 anos e meio viajem nos bancos traseiros só com o cinto de dois pontos, sem o assento de elevação, quando o veículo saiu de fábrica com esses cintos.",
      explicacaoErradas:
        "“toda criança de até 7 anos e meio precisa do assento de elevação” ignora a exceção do parágrafo único. “como manda o art. 3º” erra: o inciso III só permite levar a criança no banco dianteiro, não obriga. “não tiver airbag” mistura a regra do art. 4º, que é do banco dianteiro. “só é aceito para criança com mais de 7 anos e meio” contraria a exceção, que vale para quem tem mais de 4 e menos de 7 anos e meio.",
      pegadinha: "Exigir o assento de elevação mesmo quando o carro só tem, de fábrica, cinto de dois pontos atrás.",
      conhecimento:
        "Esse mesmo cinto de dois pontos de fábrica nos bancos traseiros também permite levar a criança no banco dianteiro, com o dispositivo adequado ao seu peso e altura (art. 3º, III).",
    },
    {
      topico: "Transporte de crianças",
      subassunto: "Veículos dispensados",
      dificuldade: 5,
      raciocinio: "A dispensa do aplicativo só vale durante a corrida.",
      enunciado:
        "Numa fiscalização, o agente vê crianças de 3 anos viajando sem cadeirinha, presas só ao cinto, em três veículos: um táxi em serviço, um ônibus de linha e o carro de um motorista de aplicativo, que leva o próprio filho a um passeio de domingo, sem corrida. Pelo art. 2º, §§ 2º e 3º, da Resolução Contran 819/2021, há infração",
      alternativas: [
        "nos três veículos, pois a dispensa da cadeirinha só vale para criança com mais de 4 anos",
        "só no táxi e no carro do aplicativo, pois a dispensa alcança só veículos com PBT acima de 3,5 t",
        "em nenhum deles, pois o carro de aplicativo fica dispensado mesmo quando não há corrida",
        "só no ônibus, pois a dispensa do transporte coletivo exige criança com mais de 7 anos e meio",
        "só no carro do aplicativo, cuja dispensa vale só durante a efetiva prestação do serviço",
      ],
      correta: 4,
      explicacao:
        "O § 2º do art. 2º dispensa as exigências do sistema de retenção, para crianças de até 7 anos e meio, nos veículos de transporte coletivo, nos de aluguel, nos de transporte remunerado individual, nos escolares e nos demais com PBT acima de 3,5 t. Mas o § 3º limita a dispensa do transporte remunerado individual à efetiva prestação do serviço. Sem corrida, o carro do aplicativo segue a regra geral.",
      explicacaoErradas:
        "“só vale para criança com mais de 4 anos” inverte a regra: a dispensa é justamente para crianças de até 7 anos e meio. “só veículos com PBT acima de 3,5 t” esquece que o táxi também está na lista do § 2º, como veículo de aluguel. “mesmo quando não há corrida” contraria o § 3º. “exige criança com mais de 7 anos e meio” também inverte a idade.",
      pegadinha: "Achar que o carro de aplicativo está dispensado a qualquer momento.",
      conhecimento:
        "Fora dessas dispensas, levar criança sem o dispositivo adequado é a infração gravíssima do art. 168 do CTB, com multa e retenção do veículo até que a irregularidade seja sanada (art. 7º).",
    },
    {
      topico: "Transporte de crianças",
      subassunto: "Banco único com airbag",
      dificuldade: 5,
      raciocinio: "O banco único libera a frente, mas o airbag traz exigências próprias.",
      enunciado:
        "Uma picape de cabine simples, com airbag para o passageiro, leva no único banco uma criança de 3 anos em cadeirinha voltada para a frente, com bandeja incorporada ao dispositivo, e o banco na última posição de recuo. Pelos arts. 3º e 4º da Resolução Contran 819/2021, esse transporte",
      alternativas: [
        "é regular, pois o veículo só tem esse banco, o que afasta as exigências ligadas ao airbag",
        "é irregular só pela bandeja, já que o banco único permite levar a criança na frente",
        "é irregular, pois criança de até 7 anos e meio nunca pode ser levada em banco com airbag",
        "é irregular, pois com airbag a cadeirinha deveria ficar voltada para trás, contra a marcha",
        "é regular, pois a bandeja só é proibida quando o banco não está na última posição de recuo",
      ],
      correta: 1,
      explicacao:
        "O art. 3º, I, permite levar a criança no banco dianteiro quando o veículo só tem esse banco, com o dispositivo adequado. Como há airbag, vale também o art. 4º: o dispositivo voltado para a frente só é permitido se não tiver bandeja ou acessório equivalente incorporado (inciso II). A bandeja torna o transporte irregular.",
      explicacaoErradas:
        "“afasta as exigências ligadas ao airbag” erra: o art. 4º vale justamente para o transporte no banco dianteiro do art. 3º. “nunca pode ser levada em banco com airbag” contraria o inciso II, que permite o dispositivo voltado para a frente. “deveria ficar voltada para trás” inverte o inciso I, que proíbe o dispositivo contra a marcha quando há airbag. “só é proibida quando o banco não está na última posição” mistura dois requisitos independentes.",
      pegadinha: "Achar que o banco único dispensa as regras do airbag.",
      conhecimento:
        "Salvo instrução específica do fabricante do veículo, o banco do passageiro com airbag deve ficar na última posição de recuo quando leva criança (art. 4º, III).",
    },
    {
      topico: "Transporte de crianças",
      subassunto: "Bebê no banco dianteiro",
      dificuldade: 5,
      raciocinio: "Com airbag na frente, dispositivo contra a marcha nunca.",
      enunciado:
        "Um pai dirige sozinho um carro com airbag para o passageiro e leva quatro filhos menores de 10 anos, todos abaixo de 1,45 m. O banco traseiro, de três lugares, já leva três deles em seus dispositivos, e sobra um bebê de 8 meses, que usa bebê conforto voltado para trás. Pelos arts. 3º e 4º da Resolução Contran 819/2021, o bebê",
      alternativas: [
        "pode ir no banco dianteiro no bebê conforto voltado para trás, pois o banco traseiro está lotado",
        "pode ir no banco dianteiro em qualquer dispositivo, desde que o banco esteja na última posição de recuo",
        "não pode ir na frente nesse bebê conforto, pois com airbag é vedado o dispositivo contra a marcha",
        "não pode ir no banco dianteiro, pois a lotação do banco traseiro não é exceção prevista na resolução",
        "não pode viajar, pois criança de até 1 ano só pode ser levada no banco traseiro, em qualquer veículo",
      ],
      correta: 2,
      explicacao:
        "O art. 3º, II, permite levar no banco dianteiro a criança que excede a lotação do banco traseiro, com o dispositivo adequado. Mas, com airbag para o passageiro, o art. 4º, I, proíbe levar criança de até 7 anos e meio em dispositivo voltado em sentido contrário ao da marcha. O bebê conforto voltado para trás não pode ir nesse banco.",
      explicacaoErradas:
        "“pois o banco traseiro está lotado” só resolve o local: o airbag veda o dispositivo contra a marcha. “em qualquer dispositivo” ignora o inciso I do art. 4º, e a posição de recuo é um requisito a mais, não uma licença. “não é exceção prevista” contraria o art. 3º, II. “só pode ser levada no banco traseiro” também ignora o art. 3º, que admite o banco dianteiro em casos como esse.",
      pegadinha: "Achar que a lotação do banco traseiro libera qualquer dispositivo no banco da frente.",
      conhecimento:
        "O banco dianteiro também é permitido quando o veículo só tem esse banco, quando os bancos traseiros têm de fábrica só cinto de dois pontos ou quando a criança já atingiu 1,45 m (art. 3º, I, III e IV).",
    },
    {
      topico: "Transporte de crianças",
      subassunto: "Instrução do fabricante",
      dificuldade: 5,
      raciocinio: "A última posição de recuo tem uma ressalva.",
      enunciado:
        "Um carro de dois lugares, com airbag para o passageiro, leva no banco da frente uma criança de 5 anos em assento de elevação. O manual do proprietário manda, nesse caso, deixar o banco na posição intermediária, e o condutor segue o manual. Pelos arts. 3º e 4º da Resolução Contran 819/2021, esse transporte",
      alternativas: [
        "é regular, pois a regra da última posição de recuo cede à instrução do fabricante",
        "é irregular, pois o banco com airbag deve ficar sempre na última posição de recuo, sem exceção",
        "é irregular, pois criança de até 7 anos e meio não pode viajar em carro sem banco traseiro",
        "é regular só se o airbag do passageiro for desligado antes da viagem, por oficina autorizada",
        "é irregular, pois o assento de elevação é proibido no banco do passageiro com airbag",
      ],
      correta: 0,
      explicacao:
        "O art. 3º, I, permite o banco dianteiro quando o veículo só tem esse banco. Com airbag, o art. 4º exige dispositivo adequado voltado para a frente, sem bandeja, e manda deixar o banco na última posição de recuo, salvo instruções específicas do fabricante do veículo (inciso III). Seguindo o manual, o condutor está regular.",
      explicacaoErradas:
        "“deve ficar sempre na última posição” esquece a ressalva das instruções do fabricante. “não pode viajar em carro sem banco traseiro” contraria o art. 3º, I. “se o airbag do passageiro for desligado” cria uma condição que a resolução não traz. “é proibido no banco do passageiro com airbag” erra: com airbag, só o dispositivo voltado contra a marcha é vedado.",
      pegadinha: "Ignorar a ressalva das instruções do fabricante.",
      conhecimento:
        "O fabricante ou importador também pode fixar no manual condições ou restrições próprias para o uso do dispositivo de retenção, e deve comunicá-las ao órgão máximo executivo de trânsito da União no pedido do CAT (art. 5º).",
    },
    {
      topico: "Transporte de crianças",
      subassunto: "Dispositivo pela idade",
      dificuldade: 4,
      raciocinio: "As faixas de idade viram em 1 ano, 4 anos e 7 anos e meio.",
      enunciado:
        "Num carro particular, três irmãos de 3, 6 e 8 anos, todos abaixo de 1,45 m, viajam no banco traseiro. Considerando só o critério da idade do Anexo da Resolução Contran 819/2021, eles devem usar, respectivamente,",
      alternativas: [
        "cadeirinha, assento de elevação e assento de elevação",
        "assento de elevação, assento de elevação e cinto do veículo",
        "cadeirinha, cadeirinha e assento de elevação",
        "cadeirinha, assento de elevação e cinto do veículo",
        "bebê conforto, cadeirinha e assento de elevação",
      ],
      correta: 3,
      explicacao:
        "Pela idade, o Anexo indica a cadeirinha para mais de 1 até 4 anos, o assento de elevação para mais de 4 até 7 anos e meio e o cinto do veículo para mais de 7 anos e meio até 10 anos. Assim: cadeirinha aos 3 anos, assento de elevação aos 6 e cinto aos 8.",
      explicacaoErradas:
        "“assento de elevação e assento de elevação” põe no assento a criança de 8 anos, que já passou de 7 anos e meio. “assento de elevação, assento de elevação” adianta o assento para a de 3 anos, que ainda está na faixa da cadeirinha. “cadeirinha, cadeirinha” mantém na cadeirinha a de 6 anos, que já passou de 4. “bebê conforto” é para criança de até 1 ano.",
      pegadinha: "Trocar as faixas de 4 anos e de 7 anos e meio.",
      conhecimento:
        "O Anexo também traz critérios de peso e altura: o assento de elevação, por exemplo, serve para criança de até 1,45 m com peso entre 15 e 36 kg, conforme o limite definido pelo fabricante do dispositivo.",
    },
    {
      topico: "Transporte de crianças",
      subassunto: "Sanções",
      dificuldade: 4,
      raciocinio: "Cada infração cometida tem sua própria pena.",
      enunciado:
        "Num carro particular com o banco traseiro livre, o condutor dirige sem cinto e leva no banco da frente uma criança de 5 anos solta, sem cinto e sem dispositivo de retenção. Pelo art. 7º da Resolução Contran 819/2021 e pelo CTB, o condutor",
      alternativas: [
        "responde pelas infrações dos arts. 168 e 167, gravíssima e grave, com as penalidades somadas",
        "responde só pelo art. 168, que absorve a falta do cinto do próprio condutor, por ser mais grave",
        "responde pelo art. 168, infração grave, com retenção do veículo até ele colocar o cinto",
        "responde pelo art. 168, com multa e suspensão do direito de dirigir, além do art. 167",
        "responde só pelo art. 167, pois a falta de cinto da criança já está incluída nessa infração",
      ],
      correta: 0,
      explicacao:
        "O art. 7º manda aplicar ao transporte de criança em desacordo com a resolução as sanções do art. 168 do CTB: infração gravíssima, multa e retenção do veículo até que a irregularidade seja sanada. O parágrafo único ressalva as demais infrações, nos termos do art. 266, e a falta de cinto do condutor é a infração grave do art. 167. As penalidades se somam.",
      explicacaoErradas:
        "“que absorve a falta do cinto” contraria o art. 266, que manda somar as penalidades. “infração grave” erra a natureza do art. 168, que é gravíssima. “suspensão do direito de dirigir” não está no art. 168, que prevê só multa. “já está incluída nessa infração” erra: para a criança vale o art. 168, que é específico.",
      pegadinha: "Achar que uma infração absorve a outra.",
      conhecimento:
        "A medida administrativa do art. 168 é a retenção do veículo até que a irregularidade seja sanada; a do art. 167 é a retenção até a colocação do cinto pelo infrator.",
    },
    {
      topico: "Transporte de crianças",
      subassunto: "Cinto individual",
      dificuldade: 4,
      raciocinio: "Banco traseiro lotado não autoriza dividir o cinto.",
      enunciado:
        "Um carro particular leva no banco traseiro, de três lugares, quatro crianças de 8 e 9 anos, todas abaixo de 1,45 m, duas delas dividindo o mesmo cinto, enquanto o banco do passageiro da frente está vazio. Pela Resolução Contran 819/2021, esse transporte",
      alternativas: [
        "é regular, pois o banco traseiro é obrigatório e a divisão do cinto é tolerada quando ele está lotado",
        "é irregular, pois cada criança deve usar cinto individual, e a quarta poderia ir no banco da frente",
        "é irregular, e a quarta criança não poderia viajar, pois nenhuma delas pode ir no banco da frente",
        "é regular, pois acima de 7 anos e meio basta que as crianças estejam no banco traseiro",
        "é irregular só se as crianças que dividem o cinto tiverem menos de 7 anos e meio",
      ],
      correta: 1,
      explicacao:
        "O art. 2º exige que cada criança use individualmente o cinto de segurança ou o dispositivo de retenção. Como as crianças excedem a lotação do banco traseiro, o art. 3º, II, permite levar uma delas no banco dianteiro, com o dispositivo adequado ao seu peso e altura.",
      explicacaoErradas:
        "“a divisão do cinto é tolerada” não tem base: o uso é individual. “nenhuma delas pode ir no banco da frente” contraria o art. 3º, II. “basta que as crianças estejam no banco traseiro” ignora o uso individual do cinto. “menos de 7 anos e meio” erra: o art. 2º vale para toda criança menor de 10 anos que não atingiu 1,45 m.",
      pegadinha: "Achar que o banco traseiro lotado autoriza dividir o cinto.",
      conhecimento:
        "As regras de banco traseiro e de dispositivo valem para a criança menor de 10 anos que ainda não atingiu 1,45 m. Atingida essa altura, ela pode ir no banco dianteiro (art. 3º, IV).",
    },
    {
      topico: "Uso do capacete",
      subassunto: "Cinta jugular solta",
      dificuldade: 5,
      raciocinio: "Capacete na cabeça com a cinta solta é uma coisa; capacete fora da cabeça é outra.",
      enunciado:
        "Uma motocicleta passa com o condutor de capacete na cabeça, mas com a cinta jugular solta, e o passageiro com o capacete pendurado no braço. Pelo art. 5º da Resolução Contran 940/2022, o condutor responde",
      alternativas: [
        "pelo art. 244, I, pela cinta solta, e pelo art. 244, II, pelo passageiro, ambas gravíssimas",
        "só pelo art. 244, II, que absorve a infração da cinta solta, por ser a mais grave",
        "pelo art. 169, pela cinta solta, e pelo art. 244, II, pelo passageiro, somadas",
        "pelo art. 230, X, pela cinta solta, e pelo art. 244, XI, pelo passageiro, ambas médias",
        "só pelo art. 169, pois quem responde pela falta de capacete é o próprio passageiro",
      ],
      correta: 2,
      explicacao:
        "O art. 5º, I, leva ao art. 169 do CTB o capacete que não está fixado à cabeça pela cinta jugular e pelo engate, por baixo do maxilar inferior. O passageiro sem o capacete na cabeça cai no inciso III: art. 244, II, do CTB, infração gravíssima de quem conduz. O parágrafo único do art. 5º não afasta outras infrações, e as penalidades se somam (CTB, art. 266).",
      explicacaoErradas:
        "“art. 244, I, pela cinta solta” erra: o capacete na cabeça com a cinta solta vai para o art. 169. “que absorve a infração da cinta solta” contraria o art. 266. “art. 230, X, pela cinta solta” e “art. 244, XI, pelo passageiro” trocam os enquadramentos. “quem responde pela falta de capacete é o próprio passageiro” erra: a infração do art. 244, II, é de quem conduz a motocicleta.",
      pegadinha: "Levar a cinta jugular solta para o art. 244, I.",
      conhecimento:
        "O art. 244, I e II, do CTB é infração gravíssima, com multa e suspensão do direito de dirigir, retenção do veículo até a regularização e recolhimento do documento de habilitação.",
    },
    {
      topico: "Uso do capacete",
      subassunto: "Viseira com a moto parada",
      dificuldade: 4,
      raciocinio: "Parado, pode levantar a viseira; andou, tem de baixar.",
      enunciado:
        "Num congestionamento, um motociclista para atrás de um caminhão e levanta toda a viseira do capacete. Quando o trânsito anda, ele segue alguns metros com a viseira ainda levantada. Pelo art. 4º, § 3º, I, da Resolução Contran 940/2022,",
      alternativas: [
        "ele erra nos dois momentos, pois a viseira deve ficar abaixada sempre que a moto estiver na via",
        "ele acerta nos dois momentos, pois a viseira pode ficar levantada em baixa velocidade",
        "ele só poderia levantar a viseira se a parada fosse por ordem de um agente de trânsito",
        "ele poderia levantar a viseira parado, mas só até a metade, para ventilar o capacete",
        "ele acerta ao levantar a viseira parado, mas erra ao seguir com ela levantada",
      ],
      correta: 4,
      explicacao:
        "Pelo § 3º, I, do art. 4º, com o veículo imobilizado na via, por qualquer motivo, a viseira pode ficar totalmente levantada, mas deve voltar imediatamente à posição frontal aos olhos quando o veículo é colocado em movimento.",
      explicacaoErradas:
        "“deve ficar abaixada sempre que a moto estiver na via” esquece a liberação do veículo imobilizado. “pode ficar levantada em baixa velocidade” não tem base: em movimento, a viseira volta para a frente dos olhos. “por ordem de um agente de trânsito” contraria o texto, que vale qualquer que seja o motivo da parada. “só até a metade” erra: parado, ela pode ficar totalmente levantada.",
      pegadinha: "Achar que a viseira tem de ficar abaixada mesmo com a moto parada.",
      conhecimento:
        "Nos capacetes com queixeira, a viseira abaixada pode ter pequena abertura para a circulação de ar, desde que garanta a proteção total frontal dos olhos (art. 4º, § 3º, II).",
    },
    {
      topico: "Uso do capacete",
      subassunto: "Óculos de sol",
      dificuldade: 4,
      raciocinio: "Óculos de sol não são óculos de proteção.",
      enunciado:
        "Um motociclista circula de dia com capacete certificado e bem preso, mas sem viseira, usando só óculos de sol no lugar dos óculos de proteção. Pela Resolução Contran 940/2022 e pelo CTB, ele",
      alternativas: [
        "não comete infração, pois de dia os óculos de sol protegem os olhos e substituem a viseira",
        "comete a infração gravíssima do art. 244, I, pois capacete sem viseira equivale a não usar capacete",
        "comete a infração média do art. 244, X, pois óculos de sol sozinhos não substituem os de proteção",
        "comete a infração leve do art. 169, pois o capacete sem viseira não está bem ajustado à cabeça",
        "só cometeria infração à noite, quando passa a ser obrigatória a viseira no padrão cristal",
      ],
      correta: 2,
      explicacao:
        "O art. 4º exige capacete com viseira ou, na falta dela, óculos de proteção. O § 2º proíbe usar óculos de sol, corretivos ou de segurança do trabalho sozinhos, no lugar dos óculos de proteção. Pelo art. 5º, IV, circular sem viseira ou óculos de proteção leva ao art. 244, X, do CTB: infração média, com multa e retenção do veículo até a regularização.",
      explicacaoErradas:
        "“substituem a viseira” contraria o § 2º do art. 4º. “equivale a não usar capacete” erra: o art. 244, I, é para quem está sem capacete, e a falta de viseira tem inciso próprio. “não está bem ajustado à cabeça” mistura a regra da cinta jugular. “só cometeria infração à noite” esquece que a viseira ou os óculos de proteção são exigidos a qualquer hora.",
      pegadinha: "Aceitar óculos de sol como óculos de proteção.",
      conhecimento:
        "Óculos de proteção são os que permitem usar, ao mesmo tempo, óculos corretivos ou de sol (art. 4º, § 1º).",
    },
    {
      topico: "Uso do capacete",
      subassunto: "Película e viseira à noite",
      dificuldade: 5,
      raciocinio: "Película nunca; viseira escura à noite, também não.",
      enunciado:
        "De dia, um motociclista usa viseira cristal com película espelhada que ele mesmo aplicou. À noite, outro usa viseira fumê de fábrica, sem película, bem abaixada. Pelo art. 4º, §§ 4º e 5º, da Resolução Contran 940/2022,",
      alternativas: [
        "só o primeiro está irregular, pois a viseira fumê de fábrica é certificada e vale a qualquer hora",
        "só o segundo está irregular, pois a película só é proibida no período noturno",
        "nenhum está irregular, pois nos dois casos a viseira está abaixada e protege os olhos",
        "os dois estão irregulares, pois a película é proibida e à noite a viseira tem de ser cristal",
        "os dois estão irregulares, pois a viseira de qualquer capacete tem de ser cristal a qualquer hora",
      ],
      correta: 3,
      explicacao:
        "O § 5º proíbe película na viseira e nos óculos de proteção, a qualquer hora. O § 4º exige, no período noturno, viseira no padrão cristal. O primeiro erra pela película; o segundo, pela viseira fumê à noite.",
      explicacaoErradas:
        "“vale a qualquer hora” contraria o § 4º, que exige viseira cristal à noite. “só é proibida no período noturno” erra: a proibição da película não tem horário. “a viseira está abaixada” não basta: o tipo de viseira e a película também contam. “cristal a qualquer hora” amplia a regra, que é só do período noturno.",
      pegadinha: "Achar que a película só é proibida à noite.",
      conhecimento:
        "O CTB pune com infração média o capacete com viseira ou óculos de proteção em desacordo com a regulamentação do Contran (art. 244, X), e o inciso XI aplica a mesma regra ao capacete do passageiro.",
    },
    {
      topico: "Uso do capacete",
      subassunto: "Capacete modular",
      dificuldade: 5,
      raciocinio: "No escamoteável, a queixeira pode travar atrás.",
      enunciado:
        "Dois motociclistas usam capacetes modulares com a viseira abaixada. O de A é escamoteável, e a queixeira está rebatida para trás e travada nessa posição. O de B é modular comum, com a queixeira levantada. Pelos arts. 4º e 5º da Resolução Contran 940/2022,",
      alternativas: [
        "só B comete infração, a do art. 169 do CTB, pela queixeira não abaixada",
        "os dois cometem a infração do art. 244, X, pois a queixeira tem de ficar abaixada na frente",
        "só A comete infração, pois a queixeira deve estar sempre travada na posição frontal",
        "só B comete infração, a gravíssima do art. 244, I, pois equivale a capacete sem proteção",
        "nenhum comete infração, pois a queixeira é acessório e não entra na fiscalização do capacete",
      ],
      correta: 0,
      explicacao:
        "O § 3º, III, do art. 4º exige, no capacete modular, a queixeira totalmente abaixada e travada. O inciso IV permite que, no escamoteável, ela fique travada na posição frontal ou na traseira. Assim, só B erra, e o art. 5º, I, leva a queixeira não abaixada ou não travada ao art. 169 do CTB.",
      explicacaoErradas:
        "“art. 244, X” é para viseira ou óculos, e A está regular. “sempre travada na posição frontal” ignora a posição traseira do escamoteável. “gravíssima do art. 244, I” erra: a queixeira não abaixada vai para o art. 169. “a queixeira é acessório” contraria o § 3º, que regula a posição dela.",
      pegadinha: "Achar que a queixeira do escamoteável só pode travar na frente.",
      conhecimento:
        "O art. 169 do CTB é infração leve, com multa. Pelo art. 5º, I, ele também vale para o capacete de tamanho inadequado.",
    },
    {
      topico: "Uso do capacete",
      subassunto: "Certificação do Inmetro",
      dificuldade: 5,
      raciocinio: "A dispensa depende do tamanho e de quem comprou.",
      enunciado:
        "Um motociclista usa capacete de numeração 66, que ele mesmo comprou no exterior, sem certificação do Inmetro. Pelo art. 2º, § 2º, da Resolução Contran 940/2022, o capacete",
      alternativas: [
        "precisa da certificação, pois a dispensa vale só para capacetes de numeração igual ou menor que 64",
        "está dispensado da certificação compulsória, pois passa de 64 e foi comprado por pessoa física",
        "está dispensado da certificação só se tiver sido fabricado antes de 1º de agosto de 2007",
        "está dispensado da certificação, desde que importado por empresa, e não por pessoa física",
        "precisa de autorização do órgão de trânsito para circular sem a certificação do Inmetro",
      ],
      correta: 1,
      explicacao:
        "O § 1º do art. 2º exige capacete certificado por organismo acreditado pelo Inmetro. O § 2º dispensa da certificação compulsória os capacetes com numeração superior a 64, quando adquiridos por pessoa física no exterior. Com numeração 66 e compra feita pelo próprio motociclista lá fora, o capacete está dispensado.",
      explicacaoErradas:
        "“igual ou menor que 64” inverte a regra, que vale acima de 64. “fabricado antes de 1º de agosto de 2007” é o marco do selo e do retrorrefletivo (art. 3º, parágrafo único). “importado por empresa” contraria o § 2º, que fala em pessoa física. “autorização do órgão de trânsito” não está na resolução.",
      pegadinha: "Achar que a dispensa vale para capacete de qualquer tamanho trazido do exterior.",
      conhecimento:
        "A Resolução 940/2022 entrou em vigor em 1º de abril de 2022 e revogou a Resolução 453/2013, que tratava do mesmo tema (arts. 8º e 9º).",
    },
    {
      topico: "Uso do capacete",
      subassunto: "Selo e retrorrefletivo",
      dificuldade: 5,
      raciocinio: "Selo e retrorrefletivo têm data de corte.",
      enunciado:
        "Um capacete fabricado em 2005, em bom estado e bem preso à cabeça, não tem dispositivo retrorrefletivo nem selo do Inmetro. Pelo art. 3º da Resolução Contran 940/2022, quanto à falta desses dois itens,",
      alternativas: [
        "há irregularidade, pois o selo do Inmetro é exigido de todo capacete em circulação",
        "há irregularidade só quanto ao retrorrefletivo, item de segurança exigido de qualquer capacete",
        "não há irregularidade, pois o agente só confere a certificação e a fixação do capacete à cabeça",
        "há irregularidade, pois os dois itens passaram a valer para todos os capacetes em 2022",
        "não há irregularidade, pois esses itens só valem para capacete fabricado desde agosto de 2007",
      ],
      correta: 4,
      explicacao:
        "O art. 3º manda o agente conferir, entre outros itens, o dispositivo retrorrefletivo nas laterais e na traseira (inciso III) e o selo ou a etiqueta interna do Inmetro (inciso IV). Mas o parágrafo único só aplica esses dois requisitos aos capacetes fabricados a partir de 1º de agosto de 2007. O capacete de 2005 não precisa deles.",
      explicacaoErradas:
        "“exigido de todo capacete em circulação” ignora o marco de 2007. “exigido de qualquer capacete” erra pelo mesmo motivo. “o agente só confere a certificação e a fixação” esquece os demais itens do art. 3º, como o estado geral do capacete. “para todos os capacetes em 2022” não tem base: a resolução manteve o marco de 2007.",
      pegadinha: "Exigir selo e retrorrefletivo de capacete fabricado antes de agosto de 2007.",
      conhecimento:
        "O agente também observa se o capacete é certificado pelo Inmetro, se está bem preso à cabeça e se tem avarias ou danos que o tornem inadequado para o uso (art. 3º, I, II e V).",
    },
    {
      topico: "Uso do capacete",
      subassunto: "Veículos alcançados",
      dificuldade: 4,
      raciocinio: "A cabine fechada tira o triciclo e o quadriciclo da regra.",
      enunciado:
        "Numa fiscalização passam um triciclo motorizado com cabine fechada, um quadriciclo motorizado sem cabine e um ciclomotor. Pelos arts. 1º e 2º da Resolução Contran 940/2022, o capacete é obrigatório para os condutores",
      alternativas: [
        "dos três veículos, pois a resolução vale para todo triciclo e quadriciclo motorizado",
        "só do ciclomotor, pois triciclos e quadriciclos ficam fora da resolução",
        "do quadriciclo e do ciclomotor, e não do triciclo com cabine fechada",
        "só do quadriciclo, pois o ciclomotor tem regra própria, fora dessa resolução",
        "do triciclo e do ciclomotor, pois o quadriciclo só circula fora das vias públicas",
      ],
      correta: 2,
      explicacao:
        "A resolução vale para motocicletas, motonetas, ciclomotores, triciclos e quadriciclos motorizados (art. 2º), mas o parágrafo único do art. 1º exclui os triciclos e os quadriciclos com cabine fechada. Só o triciclo com cabine fechada fica fora.",
      explicacaoErradas:
        "“todo triciclo e quadriciclo motorizado” esquece a exclusão das cabines fechadas. “triciclos e quadriciclos ficam fora” erra: só saem os de cabine fechada. “regra própria” contraria o art. 2º, que inclui o ciclomotor. “só circula fora das vias públicas” não tem base na resolução.",
      pegadinha: "Achar que a exclusão vale para todo triciclo e quadriciclo.",
      conhecimento:
        "O capacete é obrigatório para o condutor e para o passageiro, preso à cabeça pela cinta jugular e pelo engate, por baixo do maxilar inferior (art. 2º).",
    },
  ],
};
