// Gerado por gera_infracoes.py a partir de livro/ctb.json (texto compilado do Planalto). Não editar à mão.
export type Natureza = "gravissima" | "grave" | "media" | "leve";

export interface ArtigoInf {
  art: string;
  artId: string;
  caput: string;
  /** Parágrafos do fim do artigo, como estão na lei. */
  pars?: string[];
}

export interface Infracao {
  id: string;
  art: string;
  inc?: string;
  texto?: string;
  alineas?: string[];
  nat: Natureza;
  /** Outras listas em que a infração também aparece (natureza que pode variar). */
  tambem?: Natureza[];
  natTexto?: string;
  penalidade: string;
  penAlineas?: string[];
  medida?: string;
  /** Quantas vezes o valor da natureza (0,5 no pedestre). */
  fator: number;
  ateFator?: number;
  fatorReinc?: number;
  multaTexto?: string;
  susp?: "sim" | "reincidencia";
  apreensao?: boolean;
  /** Inciso do art. 259, § 4º, que tira os pontos do condutor. */
  semPontos?: "II" | "III";
  /** Art. 252, V, com o celular na mão (parágrafo único). */
  cel?: boolean;
  obs?: string[];
  liga?: string[];
}

export interface Ligacao {
  id: string;
  tipo: "ctb" | "crime" | "res" | "lei";
  titulo: string;
  sub: string;
  texto: string;
  /** Artigo do CTB no Livro (e o capítulo dele). */
  art?: string;
  cap?: string;
  /** Resolução que está no Livro do CTB. */
  res?: string;
  /** Aula de Legislação de Trânsito que explica a norma. */
  aula?: string;
}

export const ARTIGOS: Record<string, ArtigoInf> = {
 "161": {
  "art": "161",
  "artId": "art-161",
  "caput": "Constitui infração de trânsito a inobservância de qualquer preceito deste Código ou da legislação complementar, e o infrator sujeita-se às penalidades e às medidas administrativas indicadas em cada artigo deste Capítulo e às punições previstas no Capítulo XIX deste Código"
 },
 "162": {
  "art": "162",
  "artId": "art-162",
  "caput": "Dirigir veículo"
 },
 "163": {
  "art": "163",
  "artId": "art-163",
  "caput": "Entregar a direção do veículo a pessoa nas condições previstas no artigo anterior"
 },
 "164": {
  "art": "164",
  "artId": "art-164",
  "caput": "Permitir que pessoa nas condições referidas nos incisos do art. 162 tome posse do veículo automotor e passe a conduzi-lo na via"
 },
 "165": {
  "art": "165",
  "artId": "art-165",
  "caput": "Dirigir sob a influência de álcool ou de qualquer outra substância psicoativa que determine dependência",
  "pars": [
   "Parágrafo único. Aplica-se em dobro a multa prevista no caput em caso de reincidência no período de até 12 (doze) meses."
  ]
 },
 "165-A": {
  "art": "165-A",
  "artId": "art-165-a",
  "caput": "Recusar-se a ser submetido a teste, exame clínico, perícia ou outro procedimento que permita certificar influência de álcool ou outra substância psicoativa, na forma estabelecida pelo art. 277",
  "pars": [
   "Parágrafo único. Aplica-se em dobro a multa prevista no caput em caso de reincidência no período de até 12 (doze) meses."
  ]
 },
 "165-B": {
  "art": "165-B",
  "artId": "art-165-b",
  "caput": "Dirigir veículo sem realizar o exame toxicológico previsto no art. 148-A deste Código",
  "pars": [
   "Parágrafo único. No caso de não cumprimento do disposto no § 2º do art. 148-A deste Código, configurar-se-á a infração quando o condutor dirigir veículo após o trigésimo dia do vencimento do prazo estabelecido."
  ]
 },
 "165-C": {
  "art": "165-C",
  "artId": "art-165-c",
  "caput": "Dirigir veículo tendo obtido resultado positivo no exame toxicológico previsto no caput do art. 148-A deste Código"
 },
 "165-D": {
  "art": "165-D",
  "artId": "art-165-d",
  "caput": "Deixar de realizar o exame toxicológico previsto no § 2º do art. 148-A deste Código, após 30 (trinta) dias do vencimento do prazo estabelecido",
  "pars": [
   "Parágrafo único. A competência para aplicação da penalidade de que trata este artigo será do órgão ou entidade executivos de trânsito de registro da Carteira Nacional de Habilitação do infrator."
  ]
 },
 "166": {
  "art": "166",
  "artId": "art-166",
  "caput": "Confiar ou entregar a direção de veículo a pessoa que, mesmo habilitada, por seu estado físico ou psíquico, não estiver em condições de dirigi-lo com segurança"
 },
 "167": {
  "art": "167",
  "artId": "art-167",
  "caput": "Deixar o condutor ou passageiro de usar o cinto de segurança, conforme previsto no art. 65"
 },
 "168": {
  "art": "168",
  "artId": "art-168",
  "caput": "Transportar crianças em veículo automotor sem observância das normas de segurança especiais estabelecidas neste Código"
 },
 "169": {
  "art": "169",
  "artId": "art-169",
  "caput": "Dirigir sem atenção ou sem os cuidados indispensáveis à segurança"
 },
 "170": {
  "art": "170",
  "artId": "art-170",
  "caput": "Dirigir ameaçando os pedestres que estejam atravessando a via pública, ou os demais veículos"
 },
 "171": {
  "art": "171",
  "artId": "art-171",
  "caput": "Usar o veículo para arremessar, sobre os pedestres ou veículos, água ou detritos"
 },
 "172": {
  "art": "172",
  "artId": "art-172",
  "caput": "Atirar do veículo ou abandonar na via objetos ou substâncias"
 },
 "173": {
  "art": "173",
  "artId": "art-173",
  "caput": "Disputar corrida",
  "pars": [
   "Parágrafo único. Aplica-se em dobro a multa prevista no caput em caso de reincidência no período de 12 (doze) meses da infração anterior."
  ]
 },
 "174": {
  "art": "174",
  "artId": "art-174",
  "caput": "Promover, na via, competição, eventos organizados, exibição e demonstração de perícia em manobra de veículo, ou deles participar, como condutor, sem permissão da autoridade de trânsito com circunscrição sobre a via",
  "pars": [
   "§ 1º As penalidades são aplicáveis aos promotores e aos condutores participantes.",
   "§ 2º Aplica-se em dobro a multa prevista no caput em caso de reincidência no período de 12 (doze) meses da infração anterior."
  ]
 },
 "175": {
  "art": "175",
  "artId": "art-175",
  "caput": "Utilizar-se de veículo para demonstrar ou exibir manobra perigosa, mediante arrancada brusca, derrapagem ou frenagem com deslizamento ou arrastamento de pneus",
  "pars": [
   "Parágrafo único. Aplica-se em dobro a multa prevista no caput em caso de reincidência no período de 12 (doze) meses da infração anterior."
  ]
 },
 "176": {
  "art": "176",
  "artId": "art-176",
  "caput": "Deixar o condutor envolvido em sinistro com vítima"
 },
 "177": {
  "art": "177",
  "artId": "art-177",
  "caput": "Deixar o condutor de prestar socorro à vítima de sinistro de trânsito quando solicitado pela autoridade e seus agentes"
 },
 "178": {
  "art": "178",
  "artId": "art-178",
  "caput": "Deixar o condutor envolvido em sinistro sem vítima de adotar providências para remover o veículo do local, quando necessária tal medida para assegurar a segurança e a fluidez do trânsito"
 },
 "179": {
  "art": "179",
  "artId": "art-179",
  "caput": "Fazer ou deixar que se faça reparo em veículo na via pública, salvo nos casos de impedimento absoluto de sua remoção e em que o veículo esteja devidamente sinalizado"
 },
 "180": {
  "art": "180",
  "artId": "art-180",
  "caput": "Ter seu veículo imobilizado na via por falta de combustível"
 },
 "181": {
  "art": "181",
  "artId": "art-181",
  "caput": "Estacionar o veículo",
  "pars": [
   "§ 1º Nos casos previstos neste artigo, a autoridade de trânsito aplicará a penalidade preferencialmente após a remoção do veículo.",
   "§ 2º No caso previsto no inciso XVI é proibido abandonar o calço de segurança na via."
  ]
 },
 "182": {
  "art": "182",
  "artId": "art-182",
  "caput": "Parar o veículo"
 },
 "183": {
  "art": "183",
  "artId": "art-183",
  "caput": "Parar o veículo sobre a faixa de pedestres na mudança de sinal luminoso"
 },
 "184": {
  "art": "184",
  "artId": "art-184",
  "caput": "Transitar com o veículo"
 },
 "185": {
  "art": "185",
  "artId": "art-185",
  "caput": "Quando o veículo estiver em movimento, deixar de conservá-lo"
 },
 "186": {
  "art": "186",
  "artId": "art-186",
  "caput": "Transitar pela contramão de direção em"
 },
 "187": {
  "art": "187",
  "artId": "art-187",
  "caput": "Transitar em locais e horários não permitidos pela regulamentação estabelecida pela autoridade competente"
 },
 "188": {
  "art": "188",
  "artId": "art-188",
  "caput": "Transitar ao lado de outro veículo, interrompendo ou perturbando o trânsito"
 },
 "189": {
  "art": "189",
  "artId": "art-189",
  "caput": "Deixar de dar passagem aos veículos precedidos de batedores, de socorro de incêndio e salvamento, de polícia, de operação e fiscalização de trânsito e às ambulâncias, quando em serviço de urgência e devidamente identificados por dispositivos regulamentados de alarme sonoro e iluminação intermitente"
 },
 "190": {
  "art": "190",
  "artId": "art-190",
  "caput": "Seguir veículo em serviço de urgência, estando este com prioridade de passagem devidamente identificada por dispositivos regulamentares de alarme sonoro e iluminação intermitente"
 },
 "191": {
  "art": "191",
  "artId": "art-191",
  "caput": "Forçar passagem entre veículos que, transitando em sentidos opostos, estejam na iminência de passar um pelo outro ao realizar operação de ultrapassagem",
  "pars": [
   "Parágrafo único. Aplica-se em dobro a multa prevista no caput em caso de reincidência no período de até 12 (doze) meses da infração anterior."
  ]
 },
 "192": {
  "art": "192",
  "artId": "art-192",
  "caput": "Deixar de guardar distância de segurança lateral e frontal entre o seu veículo e os demais, bem como em relação ao bordo da pista, considerando-se, no momento, a velocidade, as condições climáticas do local da circulação e do veículo"
 },
 "193": {
  "art": "193",
  "artId": "art-193",
  "caput": "Transitar com o veículo em calçadas, passeios, passarelas, ciclovias, ciclofaixas, ilhas, refúgios, ajardinamentos, canteiros centrais e divisores de pista de rolamento, acostamentos, marcas de canalização, gramados e jardins públicos"
 },
 "194": {
  "art": "194",
  "artId": "art-194",
  "caput": "Transitar em marcha à ré, salvo na distância necessária a pequenas manobras e de forma a não causar riscos à segurança"
 },
 "195": {
  "art": "195",
  "artId": "art-195",
  "caput": "Desobedecer às ordens emanadas da autoridade competente de trânsito ou de seus agentes"
 },
 "196": {
  "art": "196",
  "artId": "art-196",
  "caput": "Deixar de indicar com antecedência, mediante gesto regulamentar de braço ou luz indicadora de direção do veículo, o início da marcha, a realização da manobra de parar o veículo, a mudança de direção ou de faixa de circulação"
 },
 "197": {
  "art": "197",
  "artId": "art-197",
  "caput": "Deixar de deslocar, com antecedência, o veículo para a faixa mais à esquerda ou mais à direita, dentro da respectiva mão de direção, quando for manobrar para um desses lados"
 },
 "198": {
  "art": "198",
  "artId": "art-198",
  "caput": "Deixar de dar passagem pela esquerda, quando solicitado"
 },
 "199": {
  "art": "199",
  "artId": "art-199",
  "caput": "Ultrapassar pela direita, salvo quando o veículo da frente estiver colocado na faixa apropriada e der sinal de que vai entrar à esquerda"
 },
 "200": {
  "art": "200",
  "artId": "art-200",
  "caput": "Ultrapassar pela direita veículo de transporte coletivo ou de escolares, parado para embarque ou desembarque de passageiros, salvo quando houver refúgio de segurança para o pedestre"
 },
 "201": {
  "art": "201",
  "artId": "art-201",
  "caput": "Deixar de guardar a distância lateral de um metro e cinqüenta centímetros ao passar ou ultrapassar bicicleta"
 },
 "202": {
  "art": "202",
  "artId": "art-202",
  "caput": "Ultrapassar outro veículo"
 },
 "203": {
  "art": "203",
  "artId": "art-203",
  "caput": "Ultrapassar pela contramão outro veículo",
  "pars": [
   "Parágrafo único. Aplica-se em dobro a multa prevista no caput em caso de reincidência no período de até 12 (doze) meses da infração anterior."
  ]
 },
 "204": {
  "art": "204",
  "artId": "art-204",
  "caput": "Deixar de parar o veículo no acostamento à direita, para aguardar a oportunidade de cruzar a pista ou entrar à esquerda, onde não houver local apropriado para operação de retorno"
 },
 "205": {
  "art": "205",
  "artId": "art-205",
  "caput": "Ultrapassar veículo em movimento que integre cortejo, préstito, desfile e formações militares, salvo com autorização da autoridade de trânsito ou de seus agentes"
 },
 "206": {
  "art": "206",
  "artId": "art-206",
  "caput": "Executar operação de retorno"
 },
 "207": {
  "art": "207",
  "artId": "art-207",
  "caput": "Executar operação de conversão à direita ou à esquerda em locais proibidos pela sinalização"
 },
 "208": {
  "art": "208",
  "artId": "art-208",
  "caput": "Avançar o sinal vermelho do semáforo ou o de parada obrigatória, exceto onde houver sinalização que permita a livre conversão à direita prevista no art. 44-A deste Código"
 },
 "209": {
  "art": "209",
  "artId": "art-209",
  "caput": "Transpor, sem autorização, bloqueio viário com ou sem sinalização ou dispositivos auxiliares, ou deixar de adentrar as áreas destinadas à pesagem de veículos"
 },
 "209-A": {
  "art": "209-A",
  "artId": "art-209-a",
  "caput": "Evadir-se da cobrança pelo uso de rodovias e vias urbanas para não efetuar o seu pagamento, ou deixar de efetuá-lo na forma estabelecida"
 },
 "210": {
  "art": "210",
  "artId": "art-210",
  "caput": "Transpor, sem autorização, bloqueio viário policial"
 },
 "211": {
  "art": "211",
  "artId": "art-211",
  "caput": "Ultrapassar veículos em fila, parados em razão de sinal luminoso, cancela, bloqueio viário parcial ou qualquer outro obstáculo, com exceção dos veículos não motorizados"
 },
 "212": {
  "art": "212",
  "artId": "art-212",
  "caput": "Deixar de parar o veículo antes de transpor linha férrea"
 },
 "213": {
  "art": "213",
  "artId": "art-213",
  "caput": "Deixar de parar o veículo sempre que a respectiva marcha for interceptada"
 },
 "214": {
  "art": "214",
  "artId": "art-214",
  "caput": "Deixar de dar preferência de passagem a pedestre e a veículo não motorizado"
 },
 "215": {
  "art": "215",
  "artId": "art-215",
  "caput": "Deixar de dar preferência de passagem"
 },
 "216": {
  "art": "216",
  "artId": "art-216",
  "caput": "Entrar ou sair de áreas lindeiras sem estar adequadamente posicionado para ingresso na via e sem as precauções com a segurança de pedestres e de outros veículos"
 },
 "217": {
  "art": "217",
  "artId": "art-217",
  "caput": "Entrar ou sair de fila de veículos estacionados sem dar preferência de passagem a pedestres e a outros veículos"
 },
 "218": {
  "art": "218",
  "artId": "art-218",
  "caput": "Transitar em velocidade superior à máxima permitida para o local, medida por instrumento ou equipamento hábil, em rodovias, vias de trânsito rápido, vias arteriais e demais vias"
 },
 "219": {
  "art": "219",
  "artId": "art-219",
  "caput": "Transitar com o veículo em velocidade inferior à metade da velocidade máxima estabelecida para a via, retardando ou obstruindo o trânsito, a menos que as condições de tráfego e meteorológicas não o permitam, salvo se estiver na faixa da direita"
 },
 "220": {
  "art": "220",
  "artId": "art-220",
  "caput": "Deixar de reduzir a velocidade do veículo de forma compatível com a segurança do trânsito"
 },
 "221": {
  "art": "221",
  "artId": "art-221",
  "caput": "Portar no veículo placas de identificação em desacordo com as especificações e modelos estabelecidos pelo CONTRAN",
  "pars": [
   "Parágrafo único. Incide na mesma penalidade aquele que confecciona, distribui ou coloca, em veículo próprio ou de terceiros, placas de identificação não autorizadas pela regulamentação."
  ]
 },
 "222": {
  "art": "222",
  "artId": "art-222",
  "caput": "Deixar de manter ligado, nas situações de atendimento de emergência, o sistema de iluminação intermitente dos veículos de polícia, de socorro de incêndio e salvamento, de fiscalização de trânsito e das ambulâncias, ainda que parados"
 },
 "223": {
  "art": "223",
  "artId": "art-223",
  "caput": "Transitar com o farol desregulado ou com o facho de luz alta de forma a perturbar a visão de outro condutor"
 },
 "224": {
  "art": "224",
  "artId": "art-224",
  "caput": "Fazer uso do facho de luz alta dos faróis em vias providas de iluminação pública"
 },
 "225": {
  "art": "225",
  "artId": "art-225",
  "caput": "Deixar de sinalizar a via, de forma a prevenir os demais condutores e, à noite, não manter acesas as luzes externas ou omitir-se quanto a providências necessárias para tornar visível o local, quando"
 },
 "226": {
  "art": "226",
  "artId": "art-226",
  "caput": "Deixar de retirar todo e qualquer objeto que tenha sido utilizado para sinalização temporária da via"
 },
 "227": {
  "art": "227",
  "artId": "art-227",
  "caput": "Usar buzina"
 },
 "228": {
  "art": "228",
  "artId": "art-228",
  "caput": "Usar no veículo equipamento com som em volume ou freqüência que não sejam autorizados pelo CONTRAN"
 },
 "229": {
  "art": "229",
  "artId": "art-229",
  "caput": "Usar indevidamente no veículo aparelho de alarme ou que produza sons e ruído que perturbem o sossego público, em desacordo com normas fixadas pelo CONTRAN"
 },
 "230": {
  "art": "230",
  "artId": "art-230",
  "caput": "Conduzir o veículo",
  "pars": [
   "§ 1º Se o condutor cometeu infração igual nos últimos 12 (doze) meses, será convertida, automaticamente, a penalidade disposta no inciso XXIII em infração grave.",
   "§ 2º Em se tratando de condutor estrangeiro, a liberação do veículo fica condicionada ao pagamento ou ao depósito, judicial ou administrativo, da multa."
  ]
 },
 "231": {
  "art": "231",
  "artId": "art-231",
  "caput": "Transitar com o veículo",
  "pars": [
   "Parágrafo único. Sem prejuízo das multas previstas nos incisos V e X, o veículo que transitar com excesso de peso ou excedendo à capacidade máxima de tração, não computado o percentual tolerado na forma do disposto na legislação, somente poderá continuar viagem após descarregar o que exceder, segundo critérios estabelecidos na referida legislação complementar."
  ]
 },
 "232": {
  "art": "232",
  "artId": "art-232",
  "caput": "Conduzir veículo sem os documentos de porte obrigatório referidos neste Código"
 },
 "233": {
  "art": "233",
  "artId": "art-233",
  "caput": "Deixar de efetuar o registro de veículo no prazo de trinta dias, junto ao órgão executivo de trânsito, ocorridas as hipóteses previstas no art. 123"
 },
 "234": {
  "art": "234",
  "artId": "art-234",
  "caput": "Falsificar ou adulterar documento de habilitação e de identificação do veículo"
 },
 "235": {
  "art": "235",
  "artId": "art-235",
  "caput": "Conduzir pessoas, animais ou carga nas partes externas do veículo, salvo nos casos devidamente autorizados"
 },
 "236": {
  "art": "236",
  "artId": "art-236",
  "caput": "Rebocar outro veículo com cabo flexível ou corda, salvo em casos de emergência"
 },
 "237": {
  "art": "237",
  "artId": "art-237",
  "caput": "Transitar com o veículo em desacordo com as especificações, e com falta de inscrição e simbologia necessárias à sua identificação, quando exigidas pela legislação"
 },
 "238": {
  "art": "238",
  "artId": "art-238",
  "caput": "Recusar-se a entregar à autoridade de trânsito ou a seus agentes, mediante recibo, os documentos de habilitação, de registro, de licenciamento de veículo e outros exigidos por lei, para averiguação de sua autenticidade"
 },
 "239": {
  "art": "239",
  "artId": "art-239",
  "caput": "Retirar do local veículo legalmente retido para regularização, sem permissão da autoridade competente ou de seus agentes"
 },
 "240": {
  "art": "240",
  "artId": "art-240",
  "caput": "Deixar o responsável de promover a baixa do registro de veículo irrecuperável ou definitivamente desmontado"
 },
 "241": {
  "art": "241",
  "artId": "art-241",
  "caput": "Deixar de atualizar o cadastro de registro do veículo ou de habilitação do condutor"
 },
 "242": {
  "art": "242",
  "artId": "art-242",
  "caput": "Fazer falsa declaração de domicílio para fins de registro, licenciamento ou habilitação"
 },
 "243": {
  "art": "243",
  "artId": "art-243",
  "caput": "Deixar a empresa seguradora de comunicar ao órgão executivo de trânsito competente a ocorrência de perda total do veículo e de lhe devolver as respectivas placas e documentos"
 },
 "244": {
  "art": "244",
  "artId": "art-244",
  "caput": "Conduzir motocicleta, motoneta ou ciclomotor",
  "pars": [
   "§ 3º A restrição imposta pelo inciso VI do caput deste artigo não se aplica às motocicletas e motonetas que tracionem semi-reboques especialmente projetados para esse fim e devidamente homologados pelo órgão competente."
  ]
 },
 "245": {
  "art": "245",
  "artId": "art-245",
  "caput": "Utilizar a via para depósito de mercadorias, materiais ou equipamentos, sem autorização do órgão ou entidade de trânsito com circunscrição sobre a via",
  "pars": [
   "Parágrafo único. A penalidade e a medida administrativa incidirão sobre a pessoa física ou jurídica responsável."
  ]
 },
 "246": {
  "art": "246",
  "artId": "art-246",
  "caput": "Deixar de sinalizar qualquer obstáculo à livre circulação, à segurança de veículo e pedestres, tanto no leito da via terrestre como na calçada, ou obstaculizar a via indevidamente",
  "pars": [
   "Parágrafo único. A penalidade será aplicada à pessoa física ou jurídica responsável pela obstrução, devendo a autoridade com circunscrição sobre a via providenciar a sinalização de emergência, às expensas do responsável, ou, se possível, promover a desobstrução."
  ]
 },
 "247": {
  "art": "247",
  "artId": "art-247",
  "caput": "Deixar de conduzir pelo bordo da pista de rolamento, em fila única, os veículos de tração ou propulsão humana e os de tração animal, sempre que não houver acostamento ou faixa a eles destinados"
 },
 "248": {
  "art": "248",
  "artId": "art-248",
  "caput": "Transportar em veículo destinado ao transporte de passageiros carga excedente em desacordo com o estabelecido no art. 109"
 },
 "249": {
  "art": "249",
  "artId": "art-249",
  "caput": "Deixar de manter acesas, à noite, as luzes de posição, quando o veículo estiver parado, para fins de embarque ou desembarque de passageiros e carga ou descarga de mercadorias"
 },
 "250": {
  "art": "250",
  "artId": "art-250",
  "caput": "Quando o veículo estiver em movimento"
 },
 "251": {
  "art": "251",
  "artId": "art-251",
  "caput": "Utilizar as luzes do veículo"
 },
 "252": {
  "art": "252",
  "artId": "art-252",
  "caput": "Dirigir o veículo",
  "pars": [
   "Parágrafo único. A hipótese prevista no inciso V caracterizar-se-á como infração gravíssima no caso de o condutor estar segurando ou manuseando telefone celular."
  ]
 },
 "253": {
  "art": "253",
  "artId": "art-253",
  "caput": "Bloquear a via com veículo"
 },
 "253-A": {
  "art": "253-A",
  "artId": "art-253-a",
  "caput": "Usar qualquer veículo para, deliberadamente, interromper, restringir ou perturbar a circulação na via sem autorização do órgão ou entidade de trânsito com circunscrição sobre ela",
  "pars": [
   "§ 1º Aplica-se a multa agravada em 60 (sessenta) vezes aos organizadores da conduta prevista no caput.",
   "§ 2º Aplica-se em dobro a multa em caso de reincidência no período de 12 (doze) meses.",
   "§ 3º As penalidades são aplicáveis a pessoas físicas ou jurídicas que incorram na infração, devendo a autoridade com circunscrição sobre a via restabelecer de imediato, se possível, as condições de normalidade para a circulação na via."
  ]
 },
 "254": {
  "art": "254",
  "artId": "art-254",
  "caput": "É proibido ao pedestre"
 },
 "255": {
  "art": "255",
  "artId": "art-255",
  "caput": "Conduzir bicicleta em passeios onde não seja permitida a circulação desta, ou de forma agressiva, em desacordo com o disposto no parágrafo único do art. 59"
 }
};

export const INFRACOES: Infracao[] = [
 {
  "id": "162-I",
  "art": "162",
  "inc": "I",
  "texto": "sem possuir Carteira Nacional de Habilitação, Permissão para Dirigir ou Autorização para Conduzir Ciclomotor",
  "nat": "gravissima",
  "penalidade": "multa (três vezes)",
  "medida": "retenção do veículo até a apresentação de condutor habilitado",
  "fator": 3,
  "liga": [
   "crime-309"
  ]
 },
 {
  "id": "162-II",
  "art": "162",
  "inc": "II",
  "texto": "com Carteira Nacional de Habilitação, Permissão para Dirigir ou Autorização para Conduzir Ciclomotor cassada ou com suspensão do direito de dirigir",
  "nat": "gravissima",
  "penalidade": "multa (três vezes)",
  "medida": "recolhimento do documento de habilitação e retenção do veículo até a apresentação de condutor habilitado",
  "fator": 3,
  "liga": [
   "crime-307",
   "crime-309",
   "res-723"
  ]
 },
 {
  "id": "162-III",
  "art": "162",
  "inc": "III",
  "texto": "com Carteira Nacional de Habilitação ou Permissão para Dirigir de categoria diferente da do veículo que esteja conduzindo",
  "nat": "gravissima",
  "penalidade": "multa (duas vezes)",
  "medida": "retenção do veículo até a apresentação de condutor habilitado",
  "fator": 2,
  "liga": [
   "res-508"
  ]
 },
 {
  "id": "162-V",
  "art": "162",
  "inc": "V",
  "texto": "com Carteira Nacional de Habilitação vencida há mais de 30 (trinta) dias",
  "nat": "gravissima",
  "penalidade": "multa",
  "medida": "retenção do veículo até a apresentação de condutor habilitado",
  "fator": 1
 },
 {
  "id": "162-VI",
  "art": "162",
  "inc": "VI",
  "texto": "sem usar lentes corretoras de visão, aparelho auxiliar de audição, de prótese física ou as adaptações do veículo impostas por ocasião da concessão ou da renovação da licença para conduzir",
  "nat": "gravissima",
  "penalidade": "multa",
  "medida": "retenção do veículo até o saneamento da irregularidade ou apresentação de condutor habilitado",
  "fator": 1
 },
 {
  "id": "162-VII",
  "art": "162",
  "inc": "VII",
  "texto": "sem possuir os cursos especializados ou específicos obrigatórios",
  "nat": "gravissima",
  "penalidade": "multa",
  "medida": "retenção do veículo até a apresentação de condutor habilitado",
  "fator": 1
 },
 {
  "id": "163",
  "art": "163",
  "nat": "gravissima",
  "natTexto": "as mesmas previstas no artigo anterior",
  "penalidade": "as mesmas previstas no artigo anterior",
  "medida": "a mesma prevista no inciso III do artigo anterior",
  "fator": 1,
  "multaTexto": "a mesma do inciso do art. 162",
  "obs": [
   "Natureza e multa: as do inciso do art. 162 em que a pessoa se encaixa. Todas são gravíssimas, com multa de 1, 2 ou 3 vezes.",
   "Medida do art. 162, III: retenção do veículo até a apresentação de condutor habilitado."
  ],
  "liga": [
   "crime-310"
  ]
 },
 {
  "id": "164",
  "art": "164",
  "nat": "gravissima",
  "natTexto": "as mesmas previstas nos incisos do art. 162",
  "penalidade": "as mesmas previstas no art. 162",
  "medida": "a mesma prevista no inciso III do art. 162",
  "fator": 1,
  "multaTexto": "a mesma do inciso do art. 162",
  "obs": [
   "Natureza e multa: as do inciso do art. 162 em que a pessoa se encaixa. Todas são gravíssimas, com multa de 1, 2 ou 3 vezes.",
   "Medida do art. 162, III: retenção do veículo até a apresentação de condutor habilitado."
  ],
  "liga": [
   "crime-310"
  ]
 },
 {
  "id": "165",
  "art": "165",
  "nat": "gravissima",
  "penalidade": "multa (dez vezes) e suspensão do direito de dirigir por 12 (doze) meses",
  "medida": "recolhimento do documento de habilitação e retenção do veículo, observado o disposto no § 4º do art. 270 da Lei nº 9.503, de 23 de setembro de 1997 - do Código de Trânsito Brasileiro",
  "fator": 10,
  "susp": "sim",
  "semPontos": "III",
  "liga": [
   "ctb-276-277",
   "res-1031",
   "crime-306"
  ]
 },
 {
  "id": "165-A",
  "art": "165-A",
  "nat": "gravissima",
  "penalidade": "multa (dez vezes) e suspensão do direito de dirigir por 12 (doze) meses",
  "medida": "recolhimento do documento de habilitação e retenção do veículo, observado o disposto no § 4 do art. 270",
  "fator": 10,
  "susp": "sim",
  "semPontos": "III",
  "liga": [
   "ctb-276-277",
   "res-1031"
  ]
 },
 {
  "id": "165-B",
  "art": "165-B",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes) e, em caso de reincidência no período de até 12 (doze) meses, multa (dez vezes) e suspensão do direito de dirigir",
  "fator": 5,
  "fatorReinc": 10,
  "susp": "reincidencia",
  "liga": [
   "ctb-148-a"
  ]
 },
 {
  "id": "165-C",
  "art": "165-C",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes) e, em caso de reincidência no período de até 12 (doze) meses, multa (dez vezes) e suspensão do direito de dirigir",
  "fator": 5,
  "fatorReinc": 10,
  "susp": "reincidencia",
  "liga": [
   "ctb-148-a"
  ]
 },
 {
  "id": "165-D",
  "art": "165-D",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes)",
  "fator": 5,
  "liga": [
   "ctb-148-a"
  ]
 },
 {
  "id": "166",
  "art": "166",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "167",
  "art": "167",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo até colocação do cinto pelo infrator",
  "fator": 1,
  "liga": [
   "ctb-65"
  ]
 },
 {
  "id": "168",
  "art": "168",
  "nat": "gravissima",
  "penalidade": "multa",
  "medida": "retenção do veículo até que a irregularidade seja sanada",
  "fator": 1,
  "liga": [
   "ctb-64",
   "res-819",
   "res-508"
  ]
 },
 {
  "id": "169",
  "art": "169",
  "nat": "leve",
  "penalidade": "multa",
  "fator": 1,
  "liga": [
   "res-940",
   "res-970",
   "res-945"
  ]
 },
 {
  "id": "170",
  "art": "170",
  "nat": "gravissima",
  "penalidade": "multa e suspensão do direito de dirigir",
  "medida": "retenção do veículo e recolhimento do documento de habilitação",
  "fator": 1,
  "susp": "sim",
  "semPontos": "III"
 },
 {
  "id": "171",
  "art": "171",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "172",
  "art": "172",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "173",
  "art": "173",
  "nat": "gravissima",
  "penalidade": "multa (dez vezes), suspensão do direito de dirigir e apreensão do veículo",
  "medida": "recolhimento do documento de habilitação e remoção do veículo",
  "fator": 10,
  "susp": "sim",
  "apreensao": true,
  "semPontos": "III",
  "liga": [
   "crime-308"
  ]
 },
 {
  "id": "174",
  "art": "174",
  "nat": "gravissima",
  "penalidade": "multa (dez vezes), suspensão do direito de dirigir e apreensão do veículo",
  "medida": "recolhimento do documento de habilitação e remoção do veículo",
  "fator": 10,
  "susp": "sim",
  "apreensao": true,
  "semPontos": "III",
  "liga": [
   "crime-308"
  ]
 },
 {
  "id": "175",
  "art": "175",
  "nat": "gravissima",
  "penalidade": "multa (dez vezes), suspensão do direito de dirigir e apreensão do veículo",
  "medida": "recolhimento do documento de habilitação e remoção do veículo",
  "fator": 10,
  "susp": "sim",
  "apreensao": true,
  "semPontos": "III",
  "liga": [
   "crime-308"
  ]
 },
 {
  "id": "176-I",
  "art": "176",
  "inc": "I",
  "texto": "de prestar ou providenciar socorro à vítima, podendo fazê-lo",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes) e suspensão do direito de dirigir",
  "medida": "recolhimento do documento de habilitação",
  "fator": 5,
  "susp": "sim",
  "semPontos": "III",
  "liga": [
   "crime-304-305"
  ]
 },
 {
  "id": "176-II",
  "art": "176",
  "inc": "II",
  "texto": "de adotar providências, podendo fazê-lo, no sentido de evitar perigo para o trânsito no local",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes) e suspensão do direito de dirigir",
  "medida": "recolhimento do documento de habilitação",
  "fator": 5,
  "susp": "sim",
  "semPontos": "III",
  "liga": [
   "crime-304-305"
  ]
 },
 {
  "id": "176-III",
  "art": "176",
  "inc": "III",
  "texto": "de preservar o local, de forma a facilitar os trabalhos da polícia e da perícia",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes) e suspensão do direito de dirigir",
  "medida": "recolhimento do documento de habilitação",
  "fator": 5,
  "susp": "sim",
  "semPontos": "III",
  "liga": [
   "crime-304-305"
  ]
 },
 {
  "id": "176-IV",
  "art": "176",
  "inc": "IV",
  "texto": "de adotar providências para remover o veículo do local, quando determinadas por policial ou agente da autoridade de trânsito",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes) e suspensão do direito de dirigir",
  "medida": "recolhimento do documento de habilitação",
  "fator": 5,
  "susp": "sim",
  "semPontos": "III",
  "liga": [
   "crime-304-305"
  ]
 },
 {
  "id": "176-V",
  "art": "176",
  "inc": "V",
  "texto": "de identificar-se ao policial e de lhe prestar informações necessárias à confecção do boletim de ocorrência",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes) e suspensão do direito de dirigir",
  "medida": "recolhimento do documento de habilitação",
  "fator": 5,
  "susp": "sim",
  "semPontos": "III",
  "liga": [
   "crime-304-305"
  ]
 },
 {
  "id": "177",
  "art": "177",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "178",
  "art": "178",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "179-I",
  "art": "179",
  "inc": "I",
  "texto": "em pista de rolamento de rodovias e vias de trânsito rápido",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "179-II",
  "art": "179",
  "inc": "II",
  "texto": "nas demais vias",
  "nat": "leve",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "180",
  "art": "180",
  "nat": "media",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-I",
  "art": "181",
  "inc": "I",
  "texto": "nas esquinas e a menos de cinco metros do bordo do alinhamento da via transversal",
  "nat": "media",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-II",
  "art": "181",
  "inc": "II",
  "texto": "afastado da guia da calçada (meio-fio) de cinqüenta centímetros a um metro",
  "nat": "leve",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-III",
  "art": "181",
  "inc": "III",
  "texto": "afastado da guia da calçada (meio-fio) a mais de um metro",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-IV",
  "art": "181",
  "inc": "IV",
  "texto": "em desacordo com as posições estabelecidas neste Código",
  "nat": "media",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-V",
  "art": "181",
  "inc": "V",
  "texto": "na pista de rolamento das estradas, das rodovias, das vias de trânsito rápido e das vias dotadas de acostamento",
  "nat": "gravissima",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-VI",
  "art": "181",
  "inc": "VI",
  "texto": "junto ou sobre hidrantes de incêndio, registro de água ou tampas de poços de visita de galerias subterrâneas, desde que devidamente identificados, conforme especificação do CONTRAN",
  "nat": "media",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-VII",
  "art": "181",
  "inc": "VII",
  "texto": "nos acostamentos, salvo motivo de força maior",
  "nat": "leve",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-VIII",
  "art": "181",
  "inc": "VIII",
  "texto": "no passeio ou sobre faixa destinada a pedestre, sobre ciclovia ou ciclofaixa, bem como nas ilhas, refúgios, ao lado ou sobre canteiros centrais, divisores de pista de rolamento, marcas de canalização, gramados ou jardim público",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-IX",
  "art": "181",
  "inc": "IX",
  "texto": "onde houver guia de calçada (meio-fio) rebaixada destinada à entrada ou saída de veículos",
  "nat": "media",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-X",
  "art": "181",
  "inc": "X",
  "texto": "impedindo a movimentação de outro veículo",
  "nat": "media",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-XI",
  "art": "181",
  "inc": "XI",
  "texto": "ao lado de outro veículo em fila dupla",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-XII",
  "art": "181",
  "inc": "XII",
  "texto": "na área de cruzamento de vias, prejudicando a circulação de veículos e pedestres",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-XIII",
  "art": "181",
  "inc": "XIII",
  "texto": "onde houver sinalização horizontal delimitadora de ponto de embarque ou desembarque de passageiros de transporte coletivo ou, na inexistência desta sinalização, no intervalo compreendido entre dez metros antes e depois do marco do ponto",
  "nat": "media",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-XIV",
  "art": "181",
  "inc": "XIV",
  "texto": "nos viadutos, pontes e túneis",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-XV",
  "art": "181",
  "inc": "XV",
  "texto": "na contramão de direção",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "181-XVI",
  "art": "181",
  "inc": "XVI",
  "texto": "em aclive ou declive, não estando devidamente freado e sem calço de segurança, quando se tratar de veículo com peso bruto total superior a três mil e quinhentos quilogramas",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-XVII",
  "art": "181",
  "inc": "XVII",
  "texto": "em desacordo com as condições regulamentadas especificamente pela sinalização (placa - Estacionamento Regulamentado)",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-XVIII",
  "art": "181",
  "inc": "XVIII",
  "texto": "em locais e horários proibidos especificamente pela sinalização (placa - Proibido Estacionar)",
  "nat": "media",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-XIX",
  "art": "181",
  "inc": "XIX",
  "texto": "em locais e horários de estacionamento e parada proibidos pela sinalização (placa - Proibido Parar e Estacionar)",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "181-XX",
  "art": "181",
  "inc": "XX",
  "texto": "nas vagas reservadas às pessoas com deficiência ou idosos, sem credencial que comprove tal condição",
  "nat": "gravissima",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "182-I",
  "art": "182",
  "inc": "I",
  "texto": "nas esquinas e a menos de cinco metros do bordo do alinhamento da via transversal",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "182-II",
  "art": "182",
  "inc": "II",
  "texto": "afastado da guia da calçada (meio-fio) de cinqüenta centímetros a um metro",
  "nat": "leve",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "182-III",
  "art": "182",
  "inc": "III",
  "texto": "afastado da guia da calçada (meio-fio) a mais de um metro",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "182-IV",
  "art": "182",
  "inc": "IV",
  "texto": "em desacordo com as posições estabelecidas neste Código",
  "nat": "leve",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "182-V",
  "art": "182",
  "inc": "V",
  "texto": "na pista de rolamento das estradas, das rodovias, das vias de trânsito rápido e das demais vias dotadas de acostamento",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "182-VI",
  "art": "182",
  "inc": "VI",
  "texto": "no passeio ou sobre faixa destinada a pedestres, nas ilhas, refúgios, canteiros centrais e divisores de pista de rolamento e marcas de canalização",
  "nat": "leve",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "182-VII",
  "art": "182",
  "inc": "VII",
  "texto": "na área de cruzamento de vias, prejudicando a circulação de veículos e pedestres",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "182-VIII",
  "art": "182",
  "inc": "VIII",
  "texto": "nos viadutos, pontes e túneis",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "182-IX",
  "art": "182",
  "inc": "IX",
  "texto": "na contramão de direção",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "182-X",
  "art": "182",
  "inc": "X",
  "texto": "em local e horário proibidos especificamente pela sinalização (placa - Proibido Parar)",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "182-XI",
  "art": "182",
  "inc": "XI",
  "texto": "sobre ciclovia ou ciclofaixa",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "183",
  "art": "183",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "184-I",
  "art": "184",
  "inc": "I",
  "texto": "na faixa ou pista da direita, regulamentada como de circulação exclusiva para determinado tipo de veículo, exceto para acesso a imóveis lindeiros ou conversões à direita",
  "nat": "leve",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "184-II",
  "art": "184",
  "inc": "II",
  "texto": "na faixa ou pista da esquerda regulamentada como de circulação exclusiva para determinado tipo de veículo",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "184-III",
  "art": "184",
  "inc": "III",
  "texto": "na faixa ou via de trânsito exclusivo, regulamentada com circulação destinada aos veículos de transporte público coletivo de passageiros, salvo casos de força maior e com autorização do poder público competente",
  "nat": "gravissima",
  "penalidade": "multa e apreensão do veículo",
  "medida": "remoção do veículo",
  "fator": 1,
  "apreensao": true
 },
 {
  "id": "185-I",
  "art": "185",
  "inc": "I",
  "texto": "na faixa a ele destinada pela sinalização de regulamentação, exceto em situações de emergência",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "185-II",
  "art": "185",
  "inc": "II",
  "texto": "nas faixas da direita, os veículos lentos e de maior porte",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "186-I",
  "art": "186",
  "inc": "I",
  "texto": "vias com duplo sentido de circulação, exceto para ultrapassar outro veículo e apenas pelo tempo necessário, respeitada a preferência do veículo que transitar em sentido contrário",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "186-II",
  "art": "186",
  "inc": "II",
  "texto": "vias com sinalização de regulamentação de sentido único de circulação",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "187-I",
  "art": "187",
  "inc": "I",
  "texto": "para todos os tipos de veículos",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1,
  "liga": [
   "res-911"
  ]
 },
 {
  "id": "188",
  "art": "188",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "189",
  "art": "189",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "190",
  "art": "190",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "191",
  "art": "191",
  "nat": "gravissima",
  "penalidade": "multa (dez vezes) e suspensão do direito de dirigir",
  "fator": 10,
  "susp": "sim",
  "semPontos": "III"
 },
 {
  "id": "192",
  "art": "192",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "193",
  "art": "193",
  "nat": "gravissima",
  "penalidade": "multa (três vezes)",
  "fator": 3
 },
 {
  "id": "194",
  "art": "194",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "195",
  "art": "195",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "196",
  "art": "196",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "197",
  "art": "197",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "198",
  "art": "198",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "199",
  "art": "199",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "200",
  "art": "200",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "201",
  "art": "201",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "202-I",
  "art": "202",
  "inc": "I",
  "texto": "pelo acostamento",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes)",
  "fator": 5
 },
 {
  "id": "202-II",
  "art": "202",
  "inc": "II",
  "texto": "em interseções e passagens de nível",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes)",
  "fator": 5
 },
 {
  "id": "203-I",
  "art": "203",
  "inc": "I",
  "texto": "nas curvas, aclives e declives, sem visibilidade suficiente",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes)",
  "fator": 5
 },
 {
  "id": "203-II",
  "art": "203",
  "inc": "II",
  "texto": "nas faixas de pedestre",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes)",
  "fator": 5
 },
 {
  "id": "203-III",
  "art": "203",
  "inc": "III",
  "texto": "nas pontes, viadutos ou túneis",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes)",
  "fator": 5
 },
 {
  "id": "203-IV",
  "art": "203",
  "inc": "IV",
  "texto": "parado em fila junto a sinais luminosos, porteiras, cancelas, cruzamentos ou qualquer outro impedimento à livre circulação",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes)",
  "fator": 5
 },
 {
  "id": "203-V",
  "art": "203",
  "inc": "V",
  "texto": "onde houver marcação viária longitudinal de divisão de fluxos opostos do tipo linha dupla contínua ou simples contínua amarela",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes)",
  "fator": 5
 },
 {
  "id": "204",
  "art": "204",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "205",
  "art": "205",
  "nat": "leve",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "206-I",
  "art": "206",
  "inc": "I",
  "texto": "em locais proibidos pela sinalização",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "206-II",
  "art": "206",
  "inc": "II",
  "texto": "nas curvas, aclives, declives, pontes, viadutos e túneis",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "206-III",
  "art": "206",
  "inc": "III",
  "texto": "passando por cima de calçada, passeio, ilhas, ajardinamento ou canteiros de divisões de pista de rolamento, refúgios e faixas de pedestres e nas de veículos não motorizados",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "206-IV",
  "art": "206",
  "inc": "IV",
  "texto": "nas interseções, entrando na contramão de direção da via transversal",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "206-V",
  "art": "206",
  "inc": "V",
  "texto": "com prejuízo da livre circulação ou da segurança, ainda que em locais permitidos",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "207",
  "art": "207",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "208",
  "art": "208",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "209",
  "art": "209",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "209-A",
  "art": "209-A",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "210",
  "art": "210",
  "nat": "gravissima",
  "penalidade": "multa, apreensão do veículo e suspensão do direito de dirigir",
  "medida": "remoção do veículo e recolhimento do documento de habilitação",
  "fator": 1,
  "susp": "sim",
  "apreensao": true,
  "semPontos": "III"
 },
 {
  "id": "211",
  "art": "211",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "212",
  "art": "212",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "213-I",
  "art": "213",
  "inc": "I",
  "texto": "por agrupamento de pessoas, como préstitos, passeatas, desfiles e outros",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "213-II",
  "art": "213",
  "inc": "II",
  "texto": "por agrupamento de veículos, como cortejos, formações militares e outros",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "214-I",
  "art": "214",
  "inc": "I",
  "texto": "que se encontre na faixa a ele destinada",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "214-II",
  "art": "214",
  "inc": "II",
  "texto": "que não haja concluído a travessia mesmo que ocorra sinal verde para o veículo",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "214-III",
  "art": "214",
  "inc": "III",
  "texto": "portadores de deficiência física, crianças, idosos e gestantes",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "214-IV",
  "art": "214",
  "inc": "IV",
  "texto": "quando houver iniciado a travessia mesmo que não haja sinalização a ele destinada",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "214-V",
  "art": "214",
  "inc": "V",
  "texto": "que esteja atravessando a via transversal para onde se dirige o veículo",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "215-I",
  "art": "215",
  "inc": "I",
  "texto": "em interseção não sinalizada",
  "alineas": [
   "a) a veículo que estiver circulando por rodovia ou rotatória",
   "b) a veículo que vier da direita"
  ],
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "215-II",
  "art": "215",
  "inc": "II",
  "texto": "nas interseções com sinalização de regulamentação de Dê a Preferência",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "216",
  "art": "216",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "217",
  "art": "217",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "218-I",
  "art": "218",
  "inc": "I",
  "texto": "quando a velocidade for superior à máxima em até 20% (vinte por cento)",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1,
  "liga": [
   "ctb-61"
  ]
 },
 {
  "id": "218-II",
  "art": "218",
  "inc": "II",
  "texto": "quando a velocidade for superior à máxima em mais de 20% (vinte por cento) até 50% (cinqüenta por cento)",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1,
  "liga": [
   "ctb-61"
  ]
 },
 {
  "id": "218-III",
  "art": "218",
  "inc": "III",
  "texto": "quando a velocidade for superior à máxima em mais de 50% (cinqüenta por cento)",
  "nat": "gravissima",
  "penalidade": "multa (três vezes) e suspensão do direito de dirigir",
  "fator": 3,
  "susp": "sim",
  "semPontos": "III",
  "liga": [
   "ctb-61"
  ]
 },
 {
  "id": "219",
  "art": "219",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "220-I",
  "art": "220",
  "inc": "I",
  "texto": "quando se aproximar de passeatas, aglomerações, cortejos, préstitos e desfiles",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "220-II",
  "art": "220",
  "inc": "II",
  "texto": "nos locais onde o trânsito esteja sendo controlado pelo agente da autoridade de trânsito, mediante sinais sonoros ou gestos",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "220-III",
  "art": "220",
  "inc": "III",
  "texto": "ao aproximar-se da guia da calçada (meio-fio) ou acostamento",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "220-IV",
  "art": "220",
  "inc": "IV",
  "texto": "ao aproximar-se de ou passar por interseção não sinalizada",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "220-V",
  "art": "220",
  "inc": "V",
  "texto": "nas vias rurais cuja faixa de domínio não esteja cercada",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "220-VI",
  "art": "220",
  "inc": "VI",
  "texto": "nos trechos em curva de pequeno raio",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "220-VII",
  "art": "220",
  "inc": "VII",
  "texto": "ao aproximar-se de locais sinalizados com advertência de obras ou trabalhadores na pista",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "220-VIII",
  "art": "220",
  "inc": "VIII",
  "texto": "sob chuva, neblina, cerração ou ventos fortes",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "220-IX",
  "art": "220",
  "inc": "IX",
  "texto": "quando houver má visibilidade",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "220-X",
  "art": "220",
  "inc": "X",
  "texto": "quando o pavimento se apresentar escorregadio, defeituoso ou avariado",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "220-XI",
  "art": "220",
  "inc": "XI",
  "texto": "à aproximação de animais na pista",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "220-XII",
  "art": "220",
  "inc": "XII",
  "texto": "em declive",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "220-XIII",
  "art": "220",
  "inc": "XIII",
  "texto": "ao ultrapassar ciclista",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "220-XIV",
  "art": "220",
  "inc": "XIV",
  "texto": "nas proximidades de escolas, hospitais, estações de embarque e desembarque de passageiros ou onde haja intensa movimentação de pedestres",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "221",
  "art": "221",
  "nat": "media",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização e apreensão das placas irregulares",
  "fator": 1,
  "semPontos": "II",
  "liga": [
   "res-969"
  ]
 },
 {
  "id": "222",
  "art": "222",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1,
  "liga": [
   "res-970"
  ]
 },
 {
  "id": "223",
  "art": "223",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1
 },
 {
  "id": "224",
  "art": "224",
  "nat": "leve",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "225-I",
  "art": "225",
  "inc": "I",
  "texto": "tiver de remover o veículo da pista de rolamento ou permanecer no acostamento",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "225-II",
  "art": "225",
  "inc": "II",
  "texto": "a carga for derramada sobre a via e não puder ser retirada imediatamente",
  "nat": "grave",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "226",
  "art": "226",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "227-I",
  "art": "227",
  "inc": "I",
  "texto": "em situação que não a de simples toque breve como advertência ao pedestre ou a condutores de outros veículos",
  "nat": "leve",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "227-II",
  "art": "227",
  "inc": "II",
  "texto": "prolongada e sucessivamente a qualquer pretexto",
  "nat": "leve",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "227-III",
  "art": "227",
  "inc": "III",
  "texto": "entre as vinte e duas e as seis horas",
  "nat": "leve",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "227-IV",
  "art": "227",
  "inc": "IV",
  "texto": "em locais e horários proibidos pela sinalização",
  "nat": "leve",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "227-V",
  "art": "227",
  "inc": "V",
  "texto": "em desacordo com os padrões e freqüências estabelecidas pelo CONTRAN",
  "nat": "leve",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "228",
  "art": "228",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1
 },
 {
  "id": "229",
  "art": "229",
  "nat": "media",
  "penalidade": "multa e apreensão do veículo",
  "medida": "remoção do veículo",
  "fator": 1,
  "apreensao": true
 },
 {
  "id": "230-I",
  "art": "230",
  "inc": "I",
  "texto": "com o lacre, a inscrição do chassi, o selo, a placa ou qualquer outro elemento de identificação do veículo violado ou falsificado",
  "nat": "gravissima",
  "penalidade": "multa e apreensão do veículo",
  "medida": "remoção do veículo",
  "fator": 1,
  "apreensao": true,
  "liga": [
   "res-969"
  ]
 },
 {
  "id": "230-II",
  "art": "230",
  "inc": "II",
  "texto": "transportando passageiros em compartimento de carga, salvo por motivo de força maior, com permissão da autoridade competente e na forma estabelecida pelo CONTRAN",
  "nat": "gravissima",
  "penalidade": "multa e apreensão do veículo",
  "medida": "remoção do veículo",
  "fator": 1,
  "apreensao": true,
  "liga": [
   "res-508"
  ]
 },
 {
  "id": "230-III",
  "art": "230",
  "inc": "III",
  "texto": "com dispositivo anti-radar",
  "nat": "gravissima",
  "penalidade": "multa e apreensão do veículo",
  "medida": "remoção do veículo",
  "fator": 1,
  "apreensao": true
 },
 {
  "id": "230-IV",
  "art": "230",
  "inc": "IV",
  "texto": "sem qualquer uma das placas de identificação",
  "nat": "gravissima",
  "penalidade": "multa e apreensão do veículo",
  "medida": "remoção do veículo",
  "fator": 1,
  "apreensao": true,
  "liga": [
   "res-969"
  ]
 },
 {
  "id": "230-V",
  "art": "230",
  "inc": "V",
  "texto": "que não esteja registrado e devidamente licenciado",
  "nat": "gravissima",
  "penalidade": "multa e apreensão do veículo",
  "medida": "remoção do veículo",
  "fator": 1,
  "apreensao": true,
  "liga": [
   "res-110",
   "res-911"
  ]
 },
 {
  "id": "230-VI",
  "art": "230",
  "inc": "VI",
  "texto": "com qualquer uma das placas de identificação sem condições de legibilidade e visibilidade",
  "nat": "gravissima",
  "penalidade": "multa e apreensão do veículo",
  "medida": "remoção do veículo",
  "fator": 1,
  "apreensao": true,
  "liga": [
   "res-969"
  ]
 },
 {
  "id": "230-VII",
  "art": "230",
  "inc": "VII",
  "texto": "com a cor ou característica alterada",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1,
  "semPontos": "II"
 },
 {
  "id": "230-VIII",
  "art": "230",
  "inc": "VIII",
  "texto": "sem ter sido submetido à inspeção de segurança veicular, quando obrigatória",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1,
  "liga": [
   "res-810"
  ]
 },
 {
  "id": "230-IX",
  "art": "230",
  "inc": "IX",
  "texto": "sem equipamento obrigatório ou estando este ineficiente ou inoperante",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1,
  "liga": [
   "res-993",
   "res-946",
   "res-945"
  ]
 },
 {
  "id": "230-X",
  "art": "230",
  "inc": "X",
  "texto": "com equipamento obrigatório em desacordo com o estabelecido pelo CONTRAN",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1,
  "liga": [
   "res-993",
   "res-940",
   "res-946"
  ]
 },
 {
  "id": "230-XI",
  "art": "230",
  "inc": "XI",
  "texto": "com descarga livre ou silenciador de motor de explosão defeituoso, deficiente ou inoperante",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1
 },
 {
  "id": "230-XII",
  "art": "230",
  "inc": "XII",
  "texto": "com equipamento ou acessório proibido",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1,
  "liga": [
   "res-970"
  ]
 },
 {
  "id": "230-XIII",
  "art": "230",
  "inc": "XIII",
  "texto": "com o equipamento do sistema de iluminação e de sinalização alterados",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1,
  "liga": [
   "res-970"
  ]
 },
 {
  "id": "230-XIV",
  "art": "230",
  "inc": "XIV",
  "texto": "com registrador instantâneo inalterável de velocidade e tempo viciado ou defeituoso, quando houver exigência desse aparelho",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1
 },
 {
  "id": "230-XV",
  "art": "230",
  "inc": "XV",
  "texto": "com inscrições, adesivos, legendas e símbolos de caráter publicitário afixados ou pintados no pára-brisa e em toda a extensão da parte traseira do veículo, excetuadas as hipóteses previstas neste Código",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1
 },
 {
  "id": "230-XVI",
  "art": "230",
  "inc": "XVI",
  "texto": "com vidros total ou parcialmente cobertos por películas refletivas ou não, painéis decorativos ou pinturas",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1,
  "liga": [
   "res-960"
  ]
 },
 {
  "id": "230-XVII",
  "art": "230",
  "inc": "XVII",
  "texto": "com cortinas ou persianas fechadas, não autorizadas pela legislação",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1
 },
 {
  "id": "230-XVIII",
  "art": "230",
  "inc": "XVIII",
  "texto": "em mau estado de conservação, comprometendo a segurança, ou reprovado na avaliação de inspeção de segurança e de emissão de poluentes e ruído, prevista no art. 104",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1,
  "liga": [
   "res-960"
  ]
 },
 {
  "id": "230-XIX",
  "art": "230",
  "inc": "XIX",
  "texto": "sem acionar o limpador de pára-brisa sob chuva",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1
 },
 {
  "id": "230-XX",
  "art": "230",
  "inc": "XX",
  "texto": "sem portar a autorização para condução de escolares, na forma estabelecida no art. 136",
  "nat": "gravissima",
  "penalidade": "multa (cinco vezes)",
  "medida": "remoção do veículo",
  "fator": 5
 },
 {
  "id": "230-XXI",
  "art": "230",
  "inc": "XXI",
  "texto": "de carga, com falta de inscrição da tara e demais inscrições previstas neste Código",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1,
  "semPontos": "II"
 },
 {
  "id": "230-XXII",
  "art": "230",
  "inc": "XXII",
  "texto": "com defeito no sistema de iluminação, de sinalização ou com lâmpadas queimadas",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "230-XXIII",
  "art": "230",
  "inc": "XXIII",
  "texto": "em desacordo com as condições estabelecidas no art. 67-C, relativamente ao tempo de permanência do condutor ao volante e aos intervalos para descanso, quando se tratar de veículo de transporte de carga ou coletivo de passageiros",
  "nat": "media",
  "penalidade": "multa",
  "medida": "retenção do veículo para cumprimento do tempo de descanso aplicável",
  "fator": 1,
  "tambem": [
   "grave"
  ],
  "obs": [
   "§ 1º: quem repete a mesma infração em 12 meses passa para a natureza grave."
  ],
  "liga": [
   "ctb-67-c",
   "res-525"
  ]
 },
 {
  "id": "231-I",
  "art": "231",
  "inc": "I",
  "texto": "danificando a via, suas instalações e equipamentos",
  "nat": "gravissima",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1
 },
 {
  "id": "231-II",
  "art": "231",
  "inc": "II",
  "texto": "derramando, lançando ou arrastando sobre a via",
  "alineas": [
   "a) carga que esteja transportando",
   "b) combustível ou lubrificante que esteja utilizando",
   "c) qualquer objeto que possa acarretar risco de sinistro"
  ],
  "nat": "gravissima",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1,
  "liga": [
   "res-946"
  ]
 },
 {
  "id": "231-III",
  "art": "231",
  "inc": "III",
  "texto": "produzindo fumaça, gases ou partículas em níveis superiores aos fixados pelo CONTRAN",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1
 },
 {
  "id": "231-IV",
  "art": "231",
  "inc": "IV",
  "texto": "com suas dimensões ou de sua carga superiores aos limites estabelecidos legalmente ou pela sinalização, sem autorização",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1,
  "liga": [
   "res-882",
   "res-946"
  ]
 },
 {
  "id": "231-V",
  "art": "231",
  "inc": "V",
  "texto": "com excesso de peso, admitido percentual de tolerância quando aferido por equipamento, na forma a ser estabelecida pelo CONTRAN",
  "nat": "media",
  "penalidade": "multa acrescida a cada duzentos quilogramas ou fração de excesso de peso apurado, constante na seguinte tabela",
  "penAlineas": [
   "a) até 600 kg (seiscentos quilogramas) - R$ 5,32 (cinco reais e trinta e dois centavos)",
   "b) de 601 (seiscentos e um) a 800 kg (oitocentos quilogramas) - R$ 10,64 (dez reais e sessenta e quatro centavos)",
   "c) de 801 (oitocentos e um) a 1.000 kg (mil quilogramas) - R$ 21,28 (vinte e um reais e vinte e oito centavos)",
   "d) de 1.001 (mil e um) a 3.000 kg (três mil quilogramas) - R$ 31,92 (trinta e um reais e noventa e dois centavos)",
   "e) de 3.001 (três mil e um) a 5.000 kg (cinco mil quilogramas) - R$ 42,56 (quarenta e dois reais e cinquenta e seis centavos)",
   "f) acima de 5.001 kg (cinco mil e um quilogramas) - R$ 53,20 (cinquenta e três reais e vinte centavos)"
  ],
  "medida": "retenção do veículo e transbordo da carga excedente",
  "fator": 1,
  "multaTexto": "média + valor a cada 200 kg de excesso",
  "liga": [
   "res-882"
  ]
 },
 {
  "id": "231-VI",
  "art": "231",
  "inc": "VI",
  "texto": "em desacordo com a autorização especial, expedida pela autoridade competente para transitar com dimensões excedentes, ou quando a mesma estiver vencida",
  "nat": "grave",
  "penalidade": "multa e apreensão do veículo",
  "medida": "remoção do veículo",
  "fator": 1,
  "apreensao": true,
  "liga": [
   "res-882"
  ]
 },
 {
  "id": "231-VII",
  "art": "231",
  "inc": "VII",
  "texto": "com lotação excedente",
  "nat": "gravissima",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1,
  "liga": [
   "res-508"
  ]
 },
 {
  "id": "231-VIII",
  "art": "231",
  "inc": "VIII",
  "texto": "efetuando transporte remunerado de pessoas ou bens, quando não for licenciado para esse fim, salvo casos de força maior ou com permissão da autoridade competente",
  "nat": "gravissima",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1
 },
 {
  "id": "231-IX",
  "art": "231",
  "inc": "IX",
  "texto": "desligado ou desengrenado, em declive",
  "nat": "media",
  "penalidade": "multa",
  "medida": "retenção do veículo",
  "fator": 1
 },
 {
  "id": "231-X",
  "art": "231",
  "inc": "X",
  "texto": "excedendo a capacidade máxima de tração",
  "nat": "media",
  "tambem": [
   "grave",
   "gravissima"
  ],
  "natTexto": "de média a gravíssima, a depender da relação entre o excesso de peso apurado e a capacidade máxima de tração, a ser regulamentada pelo CONTRAN",
  "penalidade": "multa",
  "medida": "retenção do veículo e transbordo de carga excedente",
  "fator": 1,
  "multaTexto": "conforme a regulamentação do Contran",
  "liga": [
   "res-882"
  ]
 },
 {
  "id": "232",
  "art": "232",
  "nat": "leve",
  "penalidade": "multa",
  "medida": "retenção do veículo até a apresentação do documento",
  "fator": 1,
  "semPontos": "II",
  "liga": [
   "ctb-133",
   "res-911",
   "res-508"
  ]
 },
 {
  "id": "233",
  "art": "233",
  "nat": "media",
  "penalidade": "multa",
  "medida": "remoção do veículo",
  "fator": 1,
  "semPontos": "II"
 },
 {
  "id": "234",
  "art": "234",
  "nat": "gravissima",
  "penalidade": "multa e apreensão do veículo",
  "medida": "remoção do veículo",
  "fator": 1,
  "apreensao": true
 },
 {
  "id": "235",
  "art": "235",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para transbordo",
  "fator": 1,
  "liga": [
   "res-508",
   "res-946"
  ]
 },
 {
  "id": "236",
  "art": "236",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "237",
  "art": "237",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção do veículo para regularização",
  "fator": 1,
  "liga": [
   "res-960"
  ]
 },
 {
  "id": "238",
  "art": "238",
  "nat": "gravissima",
  "penalidade": "multa e apreensão do veículo",
  "medida": "remoção do veículo",
  "fator": 1,
  "apreensao": true
 },
 {
  "id": "239",
  "art": "239",
  "nat": "gravissima",
  "penalidade": "multa e apreensão do veículo",
  "medida": "remoção do veículo",
  "fator": 1,
  "apreensao": true
 },
 {
  "id": "240",
  "art": "240",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "Recolhimento do Certificado de Registro e do Certificado de Licenciamento Anual",
  "fator": 1,
  "semPontos": "II"
 },
 {
  "id": "241",
  "art": "241",
  "nat": "leve",
  "penalidade": "multa",
  "fator": 1,
  "semPontos": "II"
 },
 {
  "id": "242",
  "art": "242",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "243",
  "art": "243",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "Recolhimento das placas e dos documentos",
  "fator": 1,
  "liga": [
   "res-926"
  ]
 },
 {
  "id": "244-I",
  "art": "244",
  "inc": "I",
  "texto": "sem usar capacete de segurança ou vestuário de acordo com as normas e as especificações aprovadas pelo Contran",
  "nat": "gravissima",
  "penalidade": "multa e suspensão do direito de dirigir",
  "medida": "retenção do veículo até regularização e recolhimento do documento de habilitação",
  "fator": 1,
  "susp": "sim",
  "semPontos": "III",
  "liga": [
   "res-940"
  ]
 },
 {
  "id": "244-II",
  "art": "244",
  "inc": "II",
  "texto": "transportando passageiro sem o capacete de segurança, na forma estabelecida no inciso anterior, ou fora do assento suplementar colocado atrás do condutor ou em carro lateral",
  "nat": "gravissima",
  "penalidade": "multa e suspensão do direito de dirigir",
  "medida": "retenção do veículo até regularização e recolhimento do documento de habilitação",
  "fator": 1,
  "susp": "sim",
  "semPontos": "III",
  "liga": [
   "res-940"
  ]
 },
 {
  "id": "244-III",
  "art": "244",
  "inc": "III",
  "texto": "fazendo malabarismo ou equilibrando-se apenas em uma roda",
  "nat": "gravissima",
  "penalidade": "multa e suspensão do direito de dirigir",
  "medida": "retenção do veículo até regularização e recolhimento do documento de habilitação",
  "fator": 1,
  "susp": "sim",
  "semPontos": "III"
 },
 {
  "id": "244-V",
  "art": "244",
  "inc": "V",
  "texto": "transportando criança menor de 10 (dez) anos de idade ou que não tenha, nas circunstâncias, condições de cuidar da própria segurança",
  "nat": "gravissima",
  "penalidade": "multa e suspensão do direito de dirigir",
  "medida": "retenção do veículo até regularização e recolhimento do documento de habilitação",
  "fator": 1,
  "susp": "sim",
  "semPontos": "III"
 },
 {
  "id": "244-VI",
  "art": "244",
  "inc": "VI",
  "texto": "rebocando outro veículo",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "apreensão do veículo para regularização",
  "fator": 1,
  "apreensao": true
 },
 {
  "id": "244-VII",
  "art": "244",
  "inc": "VII",
  "texto": "sem segurar o guidom com ambas as mãos, salvo eventualmente para indicação de manobras",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "apreensão do veículo para regularização",
  "fator": 1,
  "apreensao": true
 },
 {
  "id": "244-VIII",
  "art": "244",
  "inc": "VIII",
  "texto": "transportando carga incompatível com suas especificações ou em desacordo com o previsto no § 2º do art. 139-A desta Lei",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "apreensão do veículo para regularização",
  "fator": 1,
  "apreensao": true,
  "liga": [
   "ctb-139-a"
  ]
 },
 {
  "id": "244-IX",
  "art": "244",
  "inc": "IX",
  "texto": "efetuando transporte remunerado de mercadorias em desacordo com o previsto no art. 139-A desta Lei ou com as normas que regem a atividade profissional dos mototaxistas",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "apreensão do veículo para regularização",
  "fator": 1,
  "apreensao": true,
  "liga": [
   "ctb-139-a"
  ]
 },
 {
  "id": "244-X",
  "art": "244",
  "inc": "X",
  "texto": "com a utilização de capacete de segurança sem viseira ou óculos de proteção ou com viseira ou óculos de proteção em desacordo com a regulamentação do Contran",
  "nat": "media",
  "penalidade": "multa",
  "medida": "retenção do veículo até regularização",
  "fator": 1,
  "liga": [
   "res-940"
  ]
 },
 {
  "id": "244-XI",
  "art": "244",
  "inc": "XI",
  "texto": "transportando passageiro com o capacete de segurança utilizado na forma prevista no inciso X do caput deste artigo",
  "nat": "media",
  "penalidade": "multa",
  "medida": "retenção do veículo até regularização",
  "fator": 1,
  "liga": [
   "res-940"
  ]
 },
 {
  "id": "244-p1",
  "art": "244",
  "inc": "§ 1º",
  "texto": "Para ciclos aplica-se o disposto nos incisos III, VII e VIII, além de",
  "alineas": [
   "a) conduzir passageiro fora da garupa ou do assento especial a ele destinado",
   "b) transitar em vias de trânsito rápido ou rodovias, salvo onde houver acostamento ou faixas de rolamento próprias",
   "c) transportar crianças que não tenham, nas circunstâncias, condições de cuidar de sua própria segurança"
  ],
  "nat": "media",
  "penalidade": "multa",
  "fator": 1,
  "obs": [
   "No texto da lei, a pena (média e multa) vem logo depois do § 2º."
  ]
 },
 {
  "id": "244-p2",
  "art": "244",
  "inc": "§ 2º",
  "texto": "Aplica-se aos ciclomotores o disposto na alínea b do parágrafo anterior",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1,
  "obs": [
   "No texto da lei, a pena (média e multa) vem logo depois do § 2º."
  ]
 },
 {
  "id": "245",
  "art": "245",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "remoção da mercadoria ou do material",
  "fator": 1,
  "liga": [
   "res-926"
  ]
 },
 {
  "id": "246",
  "art": "246",
  "nat": "gravissima",
  "penalidade": "multa, agravada em até cinco vezes, a critério da autoridade de trânsito, conforme o risco à segurança",
  "fator": 1,
  "ateFator": 5,
  "liga": [
   "res-926"
  ]
 },
 {
  "id": "247",
  "art": "247",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "248",
  "art": "248",
  "nat": "grave",
  "penalidade": "multa",
  "medida": "retenção para o transbordo",
  "fator": 1
 },
 {
  "id": "249",
  "art": "249",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "250-I",
  "art": "250",
  "inc": "I",
  "texto": "deixar de manter acesa a luz baixa",
  "alineas": [
   "a) durante a noite",
   "b) de dia, em túneis e sob chuva, neblina ou cerração",
   "c) de dia, no caso de veículos de transporte coletivo de passageiros em circulação em faixas ou pistas a eles destinadas",
   "d) de dia, no caso de motocicletas, motonetas e ciclomotores",
   "e) de dia, em rodovias de pista simples situadas fora dos perímetros urbanos, no caso de veículos desprovidos de luzes de rodagem diurna"
  ],
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "250-III",
  "art": "250",
  "inc": "III",
  "texto": "deixar de manter a placa traseira iluminada, à noite",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "250-IV",
  "art": "250",
  "inc": "IV",
  "texto": "deixar o veículo de transporte público coletivo de passageiros ou de escolares de manter a porta fechada",
  "nat": "gravissima",
  "penalidade": "multa",
  "medida": "retenção do veículo até a regularização",
  "fator": 1
 },
 {
  "id": "251-I",
  "art": "251",
  "inc": "I",
  "texto": "o pisca-alerta, exceto em imobilizações ou situações de emergência",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "251-II",
  "art": "251",
  "inc": "II",
  "texto": "baixa e alta de forma intermitente, exceto nas seguintes situações",
  "alineas": [
   "a) a curtos intervalos, quando for conveniente advertir a outro condutor que se tem o propósito de ultrapassá-lo",
   "b) em imobilizações ou situação de emergência, como advertência, utilizando pisca-alerta",
   "c) quando a sinalização de regulamentação da via determinar o uso do pisca-alerta"
  ],
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "252-I",
  "art": "252",
  "inc": "I",
  "texto": "com o braço do lado de fora",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "252-II",
  "art": "252",
  "inc": "II",
  "texto": "transportando pessoas, animais ou volume à sua esquerda ou entre os braços e pernas",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "252-III",
  "art": "252",
  "inc": "III",
  "texto": "com incapacidade física ou mental temporária que comprometa a segurança do trânsito",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "252-IV",
  "art": "252",
  "inc": "IV",
  "texto": "usando calçado que não se firme nos pés ou que comprometa a utilização dos pedais",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "252-V",
  "art": "252",
  "inc": "V",
  "texto": "com apenas uma das mãos, exceto quando deva fazer sinais regulamentares de braço, mudar a marcha do veículo, ou acionar equipamentos e acessórios do veículo",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1,
  "obs": [
   "Segurando ou manuseando o celular, vira gravíssima (parágrafo único)."
  ]
 },
 {
  "id": "252-V-cel",
  "art": "252",
  "inc": "V",
  "texto": "com apenas uma das mãos, exceto quando deva fazer sinais regulamentares de braço, mudar a marcha do veículo, ou acionar equipamentos e acessórios do veículo",
  "nat": "gravissima",
  "penalidade": "multa",
  "fator": 1,
  "cel": true,
  "obs": [
   "Parágrafo único: A hipótese prevista no inciso V caracterizar-se-á como infração gravíssima no caso de o condutor estar segurando ou manuseando telefone celular."
  ]
 },
 {
  "id": "252-VI",
  "art": "252",
  "inc": "VI",
  "texto": "utilizando-se de fones nos ouvidos conectados a aparelhagem sonora ou de telefone celular",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "252-VII",
  "art": "252",
  "inc": "VII",
  "texto": "realizando a cobrança de tarifa com o veículo em movimento",
  "nat": "media",
  "penalidade": "multa",
  "fator": 1
 },
 {
  "id": "253",
  "art": "253",
  "nat": "gravissima",
  "penalidade": "multa e apreensão do veículo",
  "medida": "remoção do veículo",
  "fator": 1,
  "apreensao": true
 },
 {
  "id": "253-A",
  "art": "253-A",
  "nat": "gravissima",
  "penalidade": "multa (vinte vezes) e suspensão do direito de dirigir por 12 (doze) meses",
  "medida": "remoção do veículo",
  "fator": 20,
  "susp": "sim",
  "semPontos": "III"
 },
 {
  "id": "254-I",
  "art": "254",
  "inc": "I",
  "texto": "permanecer ou andar nas pistas de rolamento, exceto para cruzá-las onde for permitido",
  "nat": "leve",
  "penalidade": "multa, em 50% (cinqüenta por cento) do valor da infração de natureza leve",
  "fator": 0.5
 },
 {
  "id": "254-II",
  "art": "254",
  "inc": "II",
  "texto": "cruzar pistas de rolamento nos viadutos, pontes, ou túneis, salvo onde exista permissão",
  "nat": "leve",
  "penalidade": "multa, em 50% (cinqüenta por cento) do valor da infração de natureza leve",
  "fator": 0.5
 },
 {
  "id": "254-III",
  "art": "254",
  "inc": "III",
  "texto": "atravessar a via dentro das áreas de cruzamento, salvo quando houver sinalização para esse fim",
  "nat": "leve",
  "penalidade": "multa, em 50% (cinqüenta por cento) do valor da infração de natureza leve",
  "fator": 0.5
 },
 {
  "id": "254-IV",
  "art": "254",
  "inc": "IV",
  "texto": "utilizar-se da via em agrupamentos capazes de perturbar o trânsito, ou para a prática de qualquer folguedo, esporte, desfiles e similares, salvo em casos especiais e com a devida licença da autoridade competente",
  "nat": "leve",
  "penalidade": "multa, em 50% (cinqüenta por cento) do valor da infração de natureza leve",
  "fator": 0.5
 },
 {
  "id": "254-V",
  "art": "254",
  "inc": "V",
  "texto": "andar fora da faixa própria, passarela, passagem aérea ou subterrânea",
  "nat": "leve",
  "penalidade": "multa, em 50% (cinqüenta por cento) do valor da infração de natureza leve",
  "fator": 0.5
 },
 {
  "id": "254-VI",
  "art": "254",
  "inc": "VI",
  "texto": "desobedecer à sinalização de trânsito específica",
  "nat": "leve",
  "penalidade": "multa, em 50% (cinqüenta por cento) do valor da infração de natureza leve",
  "fator": 0.5
 },
 {
  "id": "255",
  "art": "255",
  "nat": "media",
  "penalidade": "multa",
  "medida": "remoção da bicicleta, mediante recibo para o pagamento da multa",
  "fator": 1
 }
];

export const LIGACOES: Record<string, Ligacao> = {
 "ctb-276-277": {
  "id": "ctb-276-277",
  "tipo": "ctb",
  "titulo": "CTB, arts. 276 e 277",
  "sub": "Álcool: qualquer quantidade conta",
  "texto": "Art. 276: qualquer concentração de álcool no sangue ou no ar dos pulmões já leva às penalidades do art. 165. Art. 277, § 3º: quem se recusa a fazer teste, exame ou perícia recebe as penalidades do art. 165-A.",
  "art": "art-276",
  "cap": "cap-xvii"
 },
 "res-1031": {
  "id": "res-1031",
  "tipo": "res",
  "titulo": "Resolução Contran 1.031/2026",
  "sub": "Álcool e outras substâncias",
  "texto": "Regula a fiscalização de álcool e de outras substâncias. Revogou a Resolução 432/2013.",
  "res": "res-1031"
 },
 "crime-306": {
  "id": "crime-306",
  "tipo": "crime",
  "titulo": "Crime do art. 306",
  "sub": "Embriaguez ao volante",
  "texto": "Conduzir veículo automotor com a capacidade psicomotora alterada por álcool ou outra substância psicoativa.",
  "art": "art-306",
  "cap": "cap-xix"
 },
 "crime-307": {
  "id": "crime-307",
  "tipo": "crime",
  "titulo": "Crime do art. 307",
  "sub": "Violar a suspensão",
  "texto": "Violar a suspensão ou a proibição de obter a permissão ou a habilitação para dirigir.",
  "art": "art-307",
  "cap": "cap-xix"
 },
 "crime-308": {
  "id": "crime-308",
  "tipo": "crime",
  "titulo": "Crime do art. 308",
  "sub": "Racha e exibição de manobra",
  "texto": "Corrida, disputa ou exibição de manobra não autorizada, na direção de veículo automotor, gerando situação de risco.",
  "art": "art-308",
  "cap": "cap-xix"
 },
 "crime-309": {
  "id": "crime-309",
  "tipo": "crime",
  "titulo": "Crime do art. 309",
  "sub": "Dirigir sem habilitação gerando perigo",
  "texto": "Dirigir sem permissão ou habilitação, ou com o direito de dirigir cassado, gerando perigo de dano.",
  "art": "art-309",
  "cap": "cap-xix"
 },
 "crime-310": {
  "id": "crime-310",
  "tipo": "crime",
  "titulo": "Crime do art. 310",
  "sub": "Entregar a direção",
  "texto": "Permitir, confiar ou entregar a direção a quem não é habilitado, está com a habilitação cassada ou suspensa, ou não tem condições de dirigir com segurança.",
  "art": "art-310",
  "cap": "cap-xix"
 },
 "crime-304-305": {
  "id": "crime-304-305",
  "tipo": "crime",
  "titulo": "Crimes dos arts. 304 e 305",
  "sub": "Omissão de socorro e fuga",
  "texto": "Art. 304: deixar de socorrer a vítima na hora ou, sem poder, de pedir ajuda à autoridade. Art. 305: afastar-se do local do sinistro para fugir da responsabilidade.",
  "art": "art-304",
  "cap": "cap-xix"
 },
 "ctb-65": {
  "id": "ctb-65",
  "tipo": "ctb",
  "titulo": "CTB, art. 65",
  "sub": "Cinto de segurança",
  "texto": "O cinto é obrigatório para condutor e passageiros em todas as vias do país, salvo situações regulamentadas pelo Contran.",
  "art": "art-65",
  "cap": "cap-iii"
 },
 "ctb-64": {
  "id": "ctb-64",
  "tipo": "ctb",
  "titulo": "CTB, art. 64",
  "sub": "Crianças no banco traseiro",
  "texto": "Crianças com menos de 10 anos que não chegaram a 1,45 m vão no banco traseiro, em dispositivo de retenção adequado.",
  "art": "art-64",
  "cap": "cap-iii"
 },
 "res-819": {
  "id": "res-819",
  "tipo": "res",
  "titulo": "Resolução Contran 819/2021",
  "sub": "Transporte de crianças",
  "texto": "Quem descumpre as regras de transporte de crianças comete a infração do art. 168 (art. 7º da resolução).",
  "res": "res-819"
 },
 "ctb-61": {
  "id": "ctb-61",
  "tipo": "ctb",
  "titulo": "CTB, art. 61",
  "sub": "Velocidade máxima",
  "texto": "A velocidade máxima é a indicada pela sinalização. Onde não há sinalização, valem os limites do § 1º.",
  "art": "art-61",
  "cap": "cap-iii"
 },
 "res-940": {
  "id": "res-940",
  "tipo": "res",
  "titulo": "Resolução Contran 940/2022",
  "sub": "Capacete",
  "texto": "Art. 5º: sem capacete ou capacete indevido, art. 244, I ou II. Sem viseira ou óculos, art. 244, X ou XI. Sem afivelar, tamanho errado ou queixeira, art. 169. Fora das especificações, art. 230, X.",
  "res": "res-940"
 },
 "ctb-139-a": {
  "id": "ctb-139-a",
  "tipo": "ctb",
  "titulo": "CTB, art. 139-A",
  "sub": "Moto-frete",
  "texto": "A moto de transporte remunerado de mercadorias só circula com autorização do órgão executivo de trânsito do Estado ou do DF.",
  "art": "art-139-a",
  "cap": "cap-xiii-a"
 },
 "res-882": {
  "id": "res-882",
  "tipo": "res",
  "titulo": "Resolução Contran 882/2021",
  "sub": "Pesos e dimensões",
  "texto": "Limites de peso e de dimensões, AET e balança. Na balança, a tolerância é de 5% no PBT ou PBTC e de 12,5% no peso por eixo (art. 50).",
  "res": "res-882"
 },
 "ctb-133": {
  "id": "ctb-133",
  "tipo": "ctb",
  "titulo": "CTB, art. 133",
  "sub": "Licenciamento no veículo",
  "texto": "É obrigatório o porte do Certificado de Licenciamento Anual.",
  "art": "art-133",
  "cap": "cap-xii"
 },
 "ctb-148-a": {
  "id": "ctb-148-a",
  "tipo": "ctb",
  "titulo": "CTB, art. 148-A",
  "sub": "Exame toxicológico",
  "texto": "Categorias C, D e E: exame com resultado negativo para obter e renovar a CNH e, abaixo de 70 anos, um novo a cada 2 anos e 6 meses (§ 2º). Desde a Lei 15.153/2025, também para a primeira habilitação nas categorias A e B (§ 10). A Lei 14.599/2023 deu a redação do art. 165-B e criou os arts. 165-C e 165-D.",
  "art": "art-148-a",
  "cap": "cap-xiv"
 },
 "ctb-67-c": {
  "id": "ctb-67-c",
  "tipo": "ctb",
  "titulo": "CTB, art. 67-C",
  "sub": "Tempo ao volante",
  "texto": "Motorista profissional de ônibus ou de carga: no máximo 5 horas e meia seguidas ao volante. A cada 24 horas, 11 horas de descanso, que podem ser fracionadas, com 8 horas seguidas no primeiro período (§ 3º). Regras da Lei 13.103/2015.",
  "art": "art-67-c",
  "cap": "cap-iii-a"
 },
 "res-525": {
  "id": "res-525",
  "tipo": "res",
  "titulo": "Resolução Contran 525/2015",
  "sub": "Fiscalização do tempo de direção",
  "texto": "Regula a fiscalização do tempo de direção e de descanso do motorista profissional.",
  "aula": "transito-16"
 },
 "res-508": {
  "id": "res-508",
  "tipo": "res",
  "titulo": "Resolução Contran 508/2014",
  "sub": "Passageiros na carroceria",
  "texto": "Passageiros em compartimento de carga. O art. 8º manda cada falta para um artigo: sem autorização, 230, II; passageiro com menos de 10 anos, 168; habilitação diferente da exigida, 162, III; excesso de passageiros, 231, VII; passageiro nas partes externas, 235; sem o curso especializado, 232. Não enquadre tudo no art. 230, II.",
  "aula": "transito-16"
 },
 "res-993": {
  "id": "res-993",
  "tipo": "res",
  "titulo": "Resolução Contran 993/2023",
  "sub": "Equipamentos obrigatórios",
  "texto": "Lista os equipamentos obrigatórios por tipo de veículo. No CTB: sem o equipamento ou com ele ineficiente ou inoperante, art. 230, IX; em desacordo com o Contran, art. 230, X.",
  "res": "res-993"
 },
 "res-810": {
  "id": "res-810",
  "tipo": "res",
  "titulo": "Resolução Contran 810/2020",
  "sub": "Veículo acidentado",
  "texto": "Classifica o dano do veículo acidentado. Enquanto durar a restrição, o veículo não pode circular, sob pena do art. 230, VIII.",
  "aula": "transito-14"
 },
 "res-110": {
  "id": "res-110",
  "tipo": "res",
  "titulo": "Resolução Contran 110/2000",
  "sub": "Calendário do licenciamento",
  "texto": "Traz o prazo do licenciamento anual pelo final da placa. O veículo não licenciado se enquadra no art. 230, V.",
  "aula": "transito-12"
 },
 "res-970": {
  "id": "res-970",
  "tipo": "res",
  "titulo": "Resolução Contran 970/2022",
  "sub": "Luzes especiais",
  "texto": "Diz quem usa cada luz especial e quando. Lanterna sem efetivo serviço: art. 169. Lanterna especial em veículo comum: art. 230, XII. Luz alterada: art. 230, XIII. Em atendimento de emergência, a luz fica ligada mesmo parado: deixar de manter é o art. 222.",
  "aula": "transito-17"
 },
 "res-960": {
  "id": "res-960",
  "tipo": "res",
  "titulo": "Resolução Contran 960/2022",
  "sub": "Vidros e película",
  "texto": "Película: art. 230, XVI. Dano ou falta de vidro: art. 230, XVIII. Vidro de segurança em desacordo: art. 237.",
  "res": "res-960"
 },
 "res-969": {
  "id": "res-969",
  "tipo": "res",
  "titulo": "Resolução Contran 969/2022",
  "sub": "Placas (PIV)",
  "texto": "Sem qualquer uma das placas: art. 230, IV. Caracteres sem legibilidade: art. 230, VI. Adulteração: art. 230, I. QR Code com defeito ou placa fora das especificações: art. 221.",
  "res": "res-969"
 },
 "res-946": {
  "id": "res-946",
  "tipo": "res",
  "titulo": "Resolução Contran 946/2022",
  "sub": "Carga a granel",
  "texto": "Sem a proteção exigida: art. 230, IX ou X. Carga acima dos limites da carroceria, sem passar das dimensões: art. 235. Passando também das dimensões: art. 231, IV. Derramando na via: art. 231, II.",
  "aula": "transito-22"
 },
 "res-945": {
  "id": "res-945",
  "tipo": "res",
  "titulo": "Resolução Contran 945/2022",
  "sub": "Amarração da carga",
  "texto": "Amarração frouxa: art. 169. Falta do dispositivo ou uso de corda: art. 230, IX.",
  "aula": "transito-22"
 },
 "res-911": {
  "id": "res-911",
  "tipo": "res",
  "titulo": "Resolução Contran 911/2022",
  "sub": "Veículo novo antes do registro",
  "texto": "À noite: art. 187, I. Fora do prazo ou do itinerário: art. 230, V. Sem documento: art. 232.",
  "aula": "transito-23"
 },
 "res-926": {
  "id": "res-926",
  "tipo": "res",
  "titulo": "Resolução Contran 926/2022",
  "sub": "Infração sem veículo",
  "texto": "Padroniza a autuação das infrações cometidas sem uso de veículo, como as dos arts. 95, 243, 245 e 246.",
  "aula": "transito-23"
 },
 "res-723": {
  "id": "res-723",
  "tipo": "res",
  "titulo": "Resolução Contran 723/2018",
  "sub": "Suspensão e cassação",
  "texto": "Com as mudanças da 844/2021, padroniza o processo de suspensão do direito de dirigir e de cassação da habilitação.",
  "aula": "transito-18"
 },
 "res-918": {
  "id": "res-918",
  "tipo": "res",
  "titulo": "Resolução Contran 918/2022",
  "sub": "Processo das multas",
  "texto": "Autuação, notificação, defesa e pagamento das multas.",
  "res": "res-918"
 }
};
