import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-15",
  resumo: {
    ideia:
      "A Resolução 735/2018 regula as cegonhas: CTV leva veículos e chassis, e CTVP leva veículos acabados e cargas sobre paletes ou racks. O ponto central é quando a AET é exigida.",
    itens: [
      {
        termo: "AET por altura",
        faz: "Até 4,70 m: dispensada. De 4,71 m a 4,95 m: dispensa a critério do órgão rodoviário. Limite: 4,95 m.",
        pista: "A dispensa exige largura e comprimento dentro do art. 3º.",
      },
      {
        termo: "Largura",
        faz: "2,60 m. Até 3,00 m só no transporte de ônibus, chassis de ônibus e de caminhões.",
      },
      {
        termo: "Comprimento",
        faz: "Simples: 14 m. Articulado ou com reboque: até 23 m.",
        pista: "No articulado, entre eixos extremos até 18 m.",
      },
      {
        termo: "Velocidade e horário",
        faz: "Máxima de 80 km/h, do amanhecer ao pôr do sol.",
      },
      {
        termo: "Até 19,80 m",
        faz: "Sem restrição de horário.",
      },
      {
        termo: "Acima de 19,80 m à noite",
        faz: "Só em pista dupla com separador e duas ou mais faixas. Em pista simples, só vazia ou com carga apenas na plataforma inferior.",
      },
      {
        termo: "AET",
        faz: "Validade máxima de 1 ano, com laudo técnico e ART de engenheiro mecânico ou automotivo.",
      },
      {
        termo: "Responsabilidade",
        faz: "O proprietário responde por danos à via, à sinalização e a terceiros.",
      },
      {
        termo: "Ancoragem",
        faz: "Todas as rodas presas com cintas de resistência mínima do dobro do peso do veículo.",
      },
      {
        termo: "CTV com paletes",
        faz: "Pode levar paletes, mas nunca veículos e outra carga ao mesmo tempo.",
      },
    ],
    cuidado: "Passar de 19,80 m não proíbe viajar à noite: depende da pista e da carga.",
  },
  questoes: [
    {
      topico: "AET",
      subassunto: "Altura",
      dificuldade: 5,
      raciocinio: "Há três faixas de altura.",
      enunciado:
        "Uma CTV com 4,80 m de altura, dentro dos limites de largura e comprimento do art. 3º, circula sem AET em rodovia federal. Pela Resolução Contran 735/2018, a situação é",
      alternativas: [
        "regular, pois a dispensa alcança qualquer altura até 4,95 m",
        "regular só se houver deliberação do órgão rodoviário dispensando a AET",
        "irregular em qualquer caso, pois a dispensa termina em 4,70 m",
        "irregular em qualquer caso, pois o limite absoluto da altura é 4,70 m",
        "regular se o laudo do engenheiro atestar a estabilidade do conjunto carregado",
      ],
      correta: 1,
      explicacao: "Até 4,70 m a dispensa é automática. Entre 4,71 m e 4,95 m, ela depende de deliberação e critério dos órgãos executivos rodoviários, pelo art. 1º, § 4º.",
      explicacaoErradas:
        "“qualquer altura até 4,95 m” apaga a deliberação. “irregular em qualquer caso” ignora o § 4º. “limite absoluto” erra: a altura máxima admitida é 4,95 m. “laudo” não substitui a deliberação.",
      pegadinha: "Unir as duas faixas.",
      conhecimento: "A altura de 4,95 m também depende de admissão a critério dos órgãos rodoviários, pelo art. 3º, I.",
    },
    {
      topico: "Horário",
      subassunto: "Noite",
      dificuldade: 5,
      raciocinio: "Olhe comprimento, pista e carga.",
      enunciado:
        "Às 21 h, em rodovia de pista simples, a PRF aborda uma combinação com 22 m, carregada nas plataformas inferior e superior. Pelo art. 4º da Resolução Contran 735/2018, o trânsito",
      alternativas: [
        "é regular, pois a noite só é vedada acima de 23 m",
        "é regular, se toda a sinalização estiver ativada",
        "é regular, pois combinações com AET não têm restrição de horário",
        "é irregular, pois a carga não está apenas na plataforma inferior",
        "é irregular, pois nenhuma combinação pode circular à noite",
      ],
      correta: 3,
      explicacao: "Acima de 19,80 m, em pista simples, a noite só é permitida vazia ou com carga apenas na plataforma inferior, ancorada e com toda a sinalização ativada.",
      explicacaoErradas:
        "“acima de 23 m” erra o marco. “toda a sinalização” é só parte da exigência. “não têm restrição” ignora o caput. “nenhuma combinação” ignora os §§ 1º a 3º.",
      pegadinha: "Lembrar só da sinalização.",
      conhecimento: "O § 4º admite horários distintos em trechos específicos, por proposta da autoridade com circunscrição sobre a via.",
    },
    {
      topico: "Horário",
      subassunto: "Até 19,80 m",
      dificuldade: 4,
      raciocinio: "O marco é 19,80 m.",
      enunciado:
        "Uma combinação com 19 m circula às 23 h em pista simples, carregada nas duas plataformas, a 80 km/h. Pelo art. 4º da Resolução Contran 735/2018, a conduta é",
      alternativas: [
        "regular, pois até 19,80 m não há restrição de horário",
        "irregular, pois a noite só é permitida em pista dupla",
        "irregular, pois a velocidade máxima à noite é de 60 km/h",
        "irregular, pois a combinação carregada só roda até o pôr do sol",
        "regular só com autorização especial própria para o trânsito noturno",
      ],
      correta: 0,
      explicacao: "O § 1º afasta a restrição de horário para combinações de no máximo 19,80 m. A velocidade máxima de 80 km/h foi respeitada.",
      explicacaoErradas:
        "“pista dupla” e “até o pôr do sol” valem para quem passa de 19,80 m. “60 km/h” não está no artigo. “autorização especial” para a noite não existe aqui.",
      pegadinha: "Aplicar a regra dos maiores a quem tem até 19,80 m.",
      conhecimento: "Acima de 19,80 m, o art. 3º, IX, exige sinalização especial na traseira do conjunto.",
    },
    {
      topico: "Limites",
      subassunto: "Largura",
      dificuldade: 4,
      raciocinio: "Os 3 m servem a um transporte específico.",
      enunciado:
        "Uma CTV que transporta automóveis de passeio tem 2,90 m de largura. Pelo art. 3º, II, da Resolução Contran 735/2018,",
      alternativas: [
        "está regular, pois todas as CTV podem ter até 3,00 m",
        "está regular, pois a largura só é medida em carga paletizada",
        "está regular, se a AET tiver sido expedida há menos de um ano",
        "está regular, pois o art. 3º só limita a largura da CTVP",
        "está irregular, pois os 3,00 m não valem para essa CTV",
      ],
      correta: 4,
      explicacao: "A regra geral é 2,60 m. Até 3,00 m só no transporte de ônibus, chassis de ônibus e de caminhões. Automóveis de passeio não entram.",
      explicacaoErradas:
        "“todas as CTV” amplia a exceção. “só é medida” e “só limita” criam restrições inexistentes. “menos de um ano” é a validade da AET, que não muda a largura.",
      pegadinha: "Generalizar os 3 metros.",
      conhecimento: "O art. 8º proíbe conceder AET à combinação que não atenda integralmente à resolução.",
    },
    {
      topico: "Carga",
      subassunto: "Art. 11",
      dificuldade: 5,
      raciocinio: "Pode ser um ou outro, não os dois.",
      enunciado:
        "Uma CTV de caminhão-trator 6x2 e semirreboque novo de dois eixos, construída para automóveis, é abordada levando três automóveis e paletes ao mesmo tempo. Pelo art. 11 da Resolução Contran 735/2018,",
      alternativas: [
        "a carga é regular, pois essa CTV pode levar paletes",
        "a carga é regular, se os paletes estiverem na plataforma inferior",
        "a carga é irregular, pois o espaço não pode ser compartilhado ao mesmo tempo",
        "a carga é irregular, pois nenhuma CTV pode levar palete ou rack em viagem alguma",
        "a carga é regular, se a CTV tiver sido transformada em CTVP antes da viagem",
      ],
      correta: 2,
      explicacao: "O art. 11 permite levar outras cargas paletizadas nessa CTV, mas o § 1º veda o compartilhamento simultâneo de espaço entre veículos e outra carga.",
      explicacaoErradas:
        "“pode levar paletes” esquece o § 1º. “plataforma inferior” é regra da CTVP e do trânsito noturno. “nenhuma CTV” contraria o caput. “transformada” é proibida pelo § 2º.",
      pegadinha: "Parar no caput.",
      conhecimento: "Na CTVP, a carga tem limites próprios: 10 m de comprimento, 2,40 m de largura e 2,25 m de altura.",
    },
    {
      topico: "AET",
      subassunto: "Validade",
      dificuldade: 4,
      raciocinio: "Quem usa a AET responde pelos danos.",
      enunciado:
        "Uma CTV com AET bate em uma passarela de rodovia cujo gabarito não permitia a passagem. Sobre a AET e seus efeitos, a Resolução Contran 735/2018 estabelece que",
      alternativas: [
        "a AET vale 2 anos, e o órgão que a expediu responde pela via escolhida",
        "a AET vale até 1 ano, e o proprietário responde pelos danos e pelo uso indevido da via",
        "a AET vale até 1 ano, e o engenheiro do laudo responde pelos danos causados a terceiros",
        "a AET não tem validade fixa, e o condutor responde sozinho pelos danos à via",
        "a AET vale até 5 anos, e o seguro obrigatório cobre os danos à sinalização",
      ],
      correta: 1,
      explicacao: "O art. 6º fixa validade máxima de 1 ano. O art. 9º faz o proprietário responder pelos danos à via, à sinalização e a terceiros e pelo uso indevido de vias sem gabarito.",
      explicacaoErradas:
        "“2 anos” e “5 anos” erram a validade. “órgão que a expediu” e “engenheiro do laudo” trocam o responsável. “condutor responde sozinho” contraria o art. 9º.",
      pegadinha: "Achar que a autorização transfere a responsabilidade.",
      conhecimento: "O laudo técnico deve vir com ART de engenheiro mecânico ou automotivo.",
    },
    {
      topico: "Pesos e dimensões",
      subassunto: "Tolerância até 50 t",
      dificuldade: 5,
      raciocinio: "Até 50 t de PBTC, a balança só olha o total.",
      enunciado:
        "Uma combinação de caminhão-trator e semirreboque, com PBTC regulamentar de 45 t, é pesada em balança aferida com 46,5 t, e um dos conjuntos de eixos passa 14% do seu limite. Pelo art. 50 da Resolução Contran 882/2021,",
      alternativas: [
        "há multa pelo excesso no eixo, pois ele passou da tolerância de 12,5% prevista no art. 50",
        "há multa pelo PBTC, pois a tolerância de 5% não vale para combinações de veículos",
        "há multa pelo eixo e pelo PBTC, aplicadas cumulativamente, pois os dois passaram do limite",
        "não há multa, pois com PBTC de até 50 t só se fiscaliza o PBTC, que ficou dentro dos 5%",
        "há multa só sobre a parcela do PBTC que passou de 45 t, sem aplicar a tolerância",
      ],
      correta: 3,
      explicacao:
        "Pelo § 1º do art. 50, o veículo com PBT ou PBTC regulamentar de até 50 t é fiscalizado apenas quanto ao PBT ou PBTC, com a tolerância de 5%. Como 45 t + 5% = 47,25 t, as 46,5 t estão dentro da tolerância, e o excesso no eixo não é fiscalizado.",
      explicacaoErradas:
        "“passou da tolerância de 12,5%” ignora que, até 50 t, o eixo só é fiscalizado se o PBTC passar da tolerância (§ 2º). “não vale para combinações de veículos” contraria o inciso I, que vale para PBT e PBTC. “aplicadas cumulativamente” exige que o PBTC passe dos 5%. “sem aplicar a tolerância” ignora os 5%.",
      pegadinha: "Fiscalizar o eixo de um veículo de até 50 t que está dentro da tolerância do PBTC.",
      conhecimento:
        "A tolerância não pode ser usada no carregamento: quem carrega deve respeitar o limite do Contran, sem somar os 5% (art. 50, § 3º).",
    },
    {
      topico: "Pesos e dimensões",
      subassunto: "Excesso no PBT e no eixo",
      dificuldade: 5,
      raciocinio: "Passou dos 5% no total? Então o eixo também entra na conta.",
      enunciado:
        "Um caminhão com PBT regulamentar de 23 t é pesado em balança aferida com 25 t, e o conjunto de eixos traseiros também passa do seu limite além da tolerância de 12,5%. Pelos arts. 50, § 2º, e 53 da Resolução Contran 882/2021,",
      alternativas: [
        "há só a multa pelo PBT, pois veículo de até 50 t nunca é fiscalizado quanto ao peso por eixo",
        "há multa pelo PBT sobre as 2 t de excesso, sem desconto da tolerância, e também pelo eixo",
        "há multa pelo PBT sobre o que passa de 24,15 t e também pelo excesso no eixo, somadas",
        "há só a multa pelo eixo, pois ela absorve a do PBT quando os dois passam do limite",
        "não há multa, desde que o condutor faça o transbordo do excesso no próprio local",
      ],
      correta: 2,
      explicacao:
        "O caminhão passou da tolerância de 5% do PBT (23 t + 5% = 24,15 t). Pelo art. 53, a multa do PBT incide só sobre a parcela acima da tolerância, 0,85 t. Pelo art. 50, § 2º, ao passar dessa tolerância, o veículo de até 50 t também é fiscalizado por eixo, e as penalidades se aplicam cumulativamente.",
      explicacaoErradas:
        "“nunca é fiscalizado quanto ao peso por eixo” ignora o § 2º do art. 50. “sem desconto da tolerância” contraria o art. 53. “ela absorve a do PBT” contraria a regra das penalidades cumulativas. “desde que o condutor faça o transbordo” erra: sanar a irregularidade não impede a multa (art. 54, § 3º).",
      pegadinha: "Multar o excesso inteiro, sem descontar a tolerância.",
      conhecimento:
        "O excesso acima da tolerância do PBT tem de ser transbordado (art. 53, parágrafo único), e o veículo só segue viagem depois de sanada a irregularidade (art. 54).",
    },
    {
      topico: "Pesos e dimensões",
      subassunto: "Peso pela nota fiscal",
      dificuldade: 4,
      raciocinio: "Na nota fiscal não existe margem.",
      enunciado:
        "Em trecho sem balança, o agente da PRF fiscaliza o peso pela nota fiscal: somado à tara, o peso declarado da carga deixa o caminhão 2% acima do PBT regulamentar. Pelo art. 49 da Resolução Contran 882/2021,",
      alternativas: [
        "há excesso de peso, pois na fiscalização pelo documento fiscal não se admite tolerância",
        "não há excesso, pois a tolerância de 5% sobre o PBT vale para qualquer forma de fiscalização",
        "não há como autuar, pois a fiscalização pelo documento só pode ser feita em posto de pesagem",
        "o agente deve levar o caminhão à balança, pois a nota fiscal não serve para autuar excesso",
        "há excesso de peso, mas a multa só cabe se ele passar de 12,5% do PBT regulamentar",
      ],
      correta: 0,
      explicacao:
        "O § 3º do art. 49 permite fiscalizar o peso pela nota fiscal, conhecimento, manifesto ou outro documento, em qualquer tempo ou local, sem nenhuma tolerância sobre o peso declarado. As tolerâncias do art. 50 valem só para a pesagem em equipamento.",
      explicacaoErradas:
        "“vale para qualquer forma de fiscalização” erra: a tolerância é da pesagem em equipamento. “só pode ser feita em posto de pesagem” contraria o § 3º, que permite a fiscalização em qualquer tempo ou local. “não serve para autuar excesso” ignora o mesmo § 3º. “passar de 12,5%” mistura a tolerância por eixo da balança.",
      pegadinha: "Aplicar à nota fiscal a tolerância de 5% da balança.",
      conhecimento:
        "Quando há pesagem em equipamento aferido pelo Inmetro, ela prevalece sobre o peso do documento (§ 2º). Se o documento não traz o peso, o veículo pode ser levado à balança ou apresentar documento substituto (§ 5º).",
    },
    {
      topico: "Pesos e dimensões",
      subassunto: "Seguir sem transbordo",
      dificuldade: 5,
      raciocinio: "A base dos 12,5% é o menor valor entre o Contran e o fabricante.",
      enunciado:
        "Uma CVC com PBTC regulamentar de 57 t está dentro do limite total, mas um conjunto de dois eixos em tandem, com limite de 17 t pelo Contran e capacidade de 16 t indicada pelo fabricante, é pesado com 19,1 t. Pelo art. 55 da Resolução Contran 882/2021, a CVC",
      alternativas: [
        "pode seguir sem remanejamento, pois o excesso sobre 17 t fica abaixo de 12,5% desse limite",
        "pode seguir sem remanejamento, pois excesso por eixo não impede a viagem com o total no limite",
        "pode seguir sem remanejamento, pois a capacidade do fabricante só importa para o registro",
        "não pode seguir e deve ser recolhida ao depósito, ainda que a carga seja remanejada no local",
        "não pode seguir sem remanejamento ou transbordo, pois o excesso passa de 12,5% de 16 t",
      ],
      correta: 4,
      explicacao:
        "O art. 55 só deixa seguir sem remanejamento ou transbordo se os excessos em cada eixo ou conjunto forem, ao mesmo tempo, inferiores a 12,5% do menor valor entre o limite do Contran e a capacidade do fabricante. O menor valor é 16 t, e 12,5% dele são 2 t. Com 19,1 t, o excesso passa desse limite.",
      explicacaoErradas:
        "“abaixo de 12,5% desse limite” usa a base errada: 2,1 t é menos que 12,5% de 17 t, mas a base é o menor valor, 16 t. “não impede a viagem com o total no limite” ignora a regra por eixo. “só importa para o registro” contraria o art. 55, que manda usar a capacidade do fabricante. “ainda que a carga seja remanejada” contraria o art. 54: sanada a irregularidade, o veículo segue.",
      pegadinha: "Calcular os 12,5% sobre o limite do Contran quando o fabricante indica capacidade menor.",
      conhecimento:
        "O CTB proíbe transitar com peso acima do fixado pelo fabricante (art. 100), por isso a conta usa o menor valor. Essa margem para seguir viagem não se soma às tolerâncias do art. 50 (art. 55, parágrafo único).",
    },
    {
      topico: "Pesos e dimensões",
      subassunto: "Carga viva",
      dificuldade: 4,
      raciocinio: "Há cargas em que o transbordo pode ser dispensado, mas a multa fica.",
      enunciado:
        "Um caminhão que leva bois é pesado com excesso que, pela regra geral, exigiria o transbordo antes de seguir viagem. Pelo art. 54 da Resolução Contran 882/2021, o agente",
      alternativas: [
        "deve exigir o transbordo, pois a dispensa só vale para produtos perigosos e passageiros",
        "pode dispensar o transbordo, avaliados riscos e segurança, sem afastar a multa cabível",
        "deve liberar o caminhão sem multa, pois a carga viva afasta a infração por excesso de peso",
        "pode dispensar o transbordo só se o excesso for menor que 5% do PBT do caminhão",
        "deve recolher o caminhão com os animais ao depósito até que outro veículo faça o transbordo",
      ],
      correta: 1,
      explicacao:
        "O § 1º do art. 54 deixa a critério do agente, avaliados os riscos e as condições de segurança, dispensar o remanejamento ou o transbordo de produtos perigosos, produtos perecíveis, cargas vivas e passageiros. A dispensa alcança só o transbordo: a multa pelo excesso continua.",
      explicacaoErradas:
        "“só vale para produtos perigosos e passageiros” esquece as cargas vivas e os perecíveis. “a carga viva afasta a infração” não tem base. “menor que 5% do PBT” cria uma condição que não existe. “recolher o caminhão com os animais ao depósito” ignora a dispensa do § 1º.",
      pegadinha: "Achar que a natureza da carga afasta a multa por excesso de peso.",
      conhecimento:
        "Como regra, o veículo só segue viagem depois de sanada a irregularidade, e o saneamento não impede a multa (art. 54, caput e § 3º).",
    },
    {
      topico: "Pesos e dimensões",
      subassunto: "Embarcador",
      dificuldade: 4,
      raciocinio: "Quem envia a carga é o embarcador, pague ou não o frete.",
      enunciado:
        "Uma siderúrgica é a única remetente de uma carga de aço, com frete a pagar pelo comprador. A nota fiscal declara peso menor que o aferido na balança, e há excesso no PBT. Pelo art. 56 da Resolução Contran 882/2021, para fins do art. 257 do CTB, é considerado embarcador",
      alternativas: [
        "o comprador, pois quem paga o frete a pagar assume a posição de embarcador da carga",
        "a transportadora, pois quem contrata e executa o frete responde como embarcadora",
        "a siderúrgica, que é a remetente da carga, mesmo com o frete a pagar pelo comprador",
        "o condutor do caminhão, pois é ele quem recebe a carga e assina o conhecimento de transporte",
        "a siderúrgica e o comprador, juntos, pois o frete a pagar divide a posição de embarcador",
      ],
      correta: 2,
      explicacao:
        "O art. 56 considera embarcador o remetente ou expedidor da carga, mesmo se o frete for a pagar. Como a siderúrgica é a única remetente e declarou peso menor que o aferido, ela responde pelo excesso, nos termos do art. 257, § 4º, do CTB.",
      explicacaoErradas:
        "“quem paga o frete a pagar” e “o frete a pagar divide a posição de embarcador” contrariam o art. 56, que mantém o remetente como embarcador mesmo com frete a pagar. “responde como embarcadora” confunde a transportadora com o remetente. “o condutor do caminhão” não é o embarcador.",
      pegadinha: "Achar que o comprador vira embarcador por pagar o frete.",
      conhecimento:
        "Se a carga vier de mais de um embarcador e ultrapassar o PBT, quem responde é o transportador (CTB, art. 257, § 5º).",
    },
    {
      topico: "Pesos e dimensões",
      subassunto: "Eixos distanciados",
      dificuldade: 5,
      raciocinio: "Passou de 2,40 m entre os centros das rodas, o tandem deixa de existir.",
      enunciado:
        "Um semirreboque tem dois eixos traseiros com quatro pneus cada, e a distância entre os planos verticais que passam pelos centros das rodas é de 2,60 m. Pelos arts. 6º e 9º da Resolução Contran 882/2021, o limite de peso desses eixos é de",
      alternativas: [
        "17 t para o conjunto, pois são dois eixos em tandem com quatro pneus cada",
        "15 t para o conjunto, pois são dois eixos não em tandem a mais de 1,20 m",
        "12 t para o conjunto, como dois eixos direcionais a pelo menos 1,20 m",
        "6 t para cada eixo, pois o eixo distanciado tem o limite de dois pneumáticos",
        "10 t para cada eixo, pois a mais de 2,40 m cada um é tratado como isolado",
      ],
      correta: 4,
      explicacao:
        "Pelo § 1º do art. 9º, se a distância entre os planos verticais que contêm os centros das rodas passa de 2,40 m, cada eixo é considerado distanciado. Com quatro pneus, cada eixo isolado leva até 10 t (art. 6º, III).",
      explicacaoErradas:
        "“dois eixos em tandem” e “não em tandem a mais de 1,20 m” valem para distâncias de até 2,40 m (art. 6º, V e VI). “dois eixos direcionais” exige dois pneus por eixo. “o limite de dois pneumáticos” erra: esses eixos têm quatro pneus.",
      pegadinha: "Aplicar o limite do tandem a eixos que estão a mais de 2,40 m.",
      conhecimento:
        "Eixos em tandem são os que formam um conjunto integral de suspensão, com distribuição de peso entre eles, sejam ou não motrizes (art. 9º, caput).",
    },
    {
      topico: "Pesos e dimensões",
      subassunto: "Diferença no tandem",
      dificuldade: 5,
      raciocinio: "No tandem, não basta o total: os eixos vizinhos não podem destoar.",
      enunciado:
        "No tandem triplo do semirreboque de uma combinação com PBTC regulamentar de 54,5 t, com quatro pneus em cada eixo, a balança registra 9,2 t, 7,3 t e 8,5 t, do primeiro ao terceiro eixo. O total, de 25 t, cabe no limite de 25,5 t. Pelo art. 9º, § 2º, da Resolução Contran 882/2021, esse conjunto",
      alternativas: [
        "não atende à regra, pois dois eixos vizinhos têm diferença maior que 1,7 t",
        "atende à regra, pois no tandem só se confere o peso total do conjunto de eixos",
        "não atende à regra, pois cada eixo do tandem triplo leva no máximo 8,5 t",
        "atende à regra, pois a diferença entre eixos do tandem pode chegar a 2,5 t",
        "não atende à regra, pois o tandem triplo só é permitido em caminhão, e não em semirreboque",
      ],
      correta: 0,
      explicacao:
        "Pelo § 2º do art. 9º, nos conjuntos de dois ou três eixos em tandem com quatro pneus em cada, a diferença de peso entre os eixos mais próximos não pode passar de 1,7 t. Entre o primeiro e o segundo eixo, a diferença é de 1,9 t.",
      explicacaoErradas:
        "“só se confere o peso total” ignora o § 2º. “no máximo 8,5 t” divide o limite por três, regra que não existe. “pode chegar a 2,5 t” troca o valor de 1,7 t. “só é permitido em caminhão” inverte o art. 6º, VII: o tandem triplo de 25,5 t é aplicável somente a semirreboque.",
      pegadinha: "Olhar só o total do conjunto e esquecer a diferença entre eixos.",
      conhecimento:
        "O limite de 25,5 t do tandem triplo vale quando a distância entre os planos verticais que contêm os centros das rodas é superior a 1,20 m e de até 2,40 m (art. 6º, VII).",
    },
    {
      topico: "Limites",
      subassunto: "Balanço traseiro",
      dificuldade: 5,
      raciocinio: "No caminhão, o balanço é uma porcentagem da distância entre os eixos.",
      enunciado:
        "Um caminhão não articulado de carga tem 5 m de distância entre os eixos extremos, medida de centro a centro das rodas, e balanço traseiro de 3,2 m. Pelo art. 4º, §§ 2º e 3º, da Resolução Contran 882/2021, esse balanço",
      alternativas: [
        "está dentro do limite, pois o balanço traseiro de veículo de carga vai até 3,50 m",
        "está dentro do limite, que é de 71% da distância entre os eixos, ou 3,55 m",
        "passa do limite, pois o balanço traseiro de caminhão não pode passar de 2,50 m",
        "passa do limite, que nesse caso é de 3 m, ou 60% da distância entre os eixos",
        "está dentro do limite, pois só reboques e semirreboques têm limite de balanço traseiro",
      ],
      correta: 3,
      explicacao:
        "Para veículo não articulado de transporte de carga, o § 2º, I, limita o balanço traseiro a 60% da distância entre os eixos, sem passar de 3,50 m. Com 5 m entre os eixos extremos (§ 3º), o limite é de 3 m, e 3,2 m passa dele.",
      explicacaoErradas:
        "“vai até 3,50 m” é o teto geral e a regra dos reboques e semirreboques (inciso II), mas no caminhão vale antes o limite de 60%. “71% da distância entre os eixos” é para veículo de passageiros com motor dianteiro. “2,50 m” não está na resolução. “só reboques e semirreboques” ignora o inciso I.",
      pegadinha: "Usar o teto de 3,50 m sem calcular os 60%.",
      conhecimento:
        "Nos veículos não articulados de transporte de passageiros, o limite depende do motor: 62% da distância entre eixos com motor traseiro, 66% com motor central e 71% com motor dianteiro (art. 4º, § 2º, III).",
    },
    {
      topico: "Horário",
      subassunto: "CVC à noite",
      dificuldade: 5,
      raciocinio: "A pista dupla libera a noite, mas a placa continua mandando na velocidade.",
      enunciado:
        "Uma CVC de três unidades com 25 m, portando AET, trafega às 23 h a 80 km/h por rodovia de pista dupla, com canteiro central e duas faixas por sentido, num trecho em que a placa limita a velocidade a 70 km/h. Pelo art. 20 da Resolução Contran 882/2021, a CVC",
      alternativas: [
        "está regular, pois com AET a CVC pode trafegar a 80 km/h a qualquer hora e em qualquer via",
        "pode trafegar à noite nessa via, mas excede a velocidade, pois vale o limite menor da placa",
        "está irregular só pelo horário, pois a CVC com AET só circula do amanhecer ao pôr do sol",
        "está regular, pois os 80 km/h da AET prevalecem sobre o limite da sinalização da via",
        "está irregular pelo horário e pela velocidade, pois à noite ela precisaria de autorização especial",
      ],
      correta: 1,
      explicacao:
        "O art. 20 limita a CVC que exige AET a 80 km/h, respeitado limite inferior da sinalização, e ao período do amanhecer ao pôr do sol. Mas o § 1º autoriza o trânsito diuturno em pista dupla com separador físico e duas ou mais faixas por sentido. Assim, o horário é permitido, e a velocidade passa dos 70 km/h da placa.",
      explicacaoErradas:
        "“a qualquer hora e em qualquer via” e “prevalecem sobre o limite da sinalização” ignoram o limite inferior da placa e o horário do caput. “só pelo horário” esquece o trânsito diuturno do § 1º. “precisaria de autorização especial” vale para a pista simples (§ 2º), e não para essa via.",
      pegadinha: "Achar que os 80 km/h valem mesmo onde a placa indica menos.",
      conhecimento:
        "A CVC com mais de duas unidades precisa de AET quando tem PBTC acima de 57 t ou comprimento acima de 19,80 m (art. 18). Em pista simples, o trânsito noturno só é autorizado em casos especiais justificados (art. 20, § 2º).",
    },
  ],
};
