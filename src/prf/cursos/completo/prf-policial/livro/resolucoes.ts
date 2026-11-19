import type { MapaAula } from "../mapas/tipos";
import { MAPAS_TRANSITO } from "../mapas/dados/transito";

/**
 * Resoluções do CONTRAN no Livro do CTB (19/11/2026). Cada folha termina com o artigo de onde saiu, conferido no PDF
 * publicado pelo Ministério dos Transportes (gov.br). Os trechos de `pontos` são cópia literal do texto oficial;
 * "[…]" marca um corte. `aula` aqui é o id da resolução no livro (res-1020…).
 */
const MAPAS_RESOLUCOES: MapaAula[] = [
  {
    aula: "res-1020",
    centro: { titulo: "Habilitação", emoji: "🎓", sub: "Resolução Contran 1.020/2025" },
    ramos: [
      { rotulo: "Documentos", emoji: "🆔", cor: "azul", folhas: ["Permissão para Dirigir, **ACC** e **CNH** (art. 4º)", "ACC: autorização para conduzir **ciclomotor** (art. 4º)"] },
      { rotulo: "Etapas", emoji: "🪜", cor: "verde", folhas: ["Requerimento, **curso teórico** e biometria no Renach (art. 12)", "Avaliação **psicológica** e exame de aptidão física e mental (art. 12)", "Exame teórico, aulas práticas e **exame de direção** (art. 12)"] },
      { rotulo: "Requisitos", emoji: "✅", cor: "ouro", folhas: ["Ser penalmente **imputável** e saber ler e escrever (art. 17)", "Documento de identificação e inscrição no **CPF** (art. 17)"] },
      { rotulo: "Teoria", emoji: "📚", cor: "roxo", folhas: ["Curso teórico **sem** carga horária mínima (art. 21)", "Prova objetiva: **quatro** alternativas, só uma correta (art. 31)", "Aprovado recebe a **Licença de Aprendizagem** (art. 35)"] },
      { rotulo: "Aulas práticas", emoji: "🚗", cor: "laranja", folhas: ["Mínimo de **duas horas**, contínuas ou fracionadas (art. 38)", "Instrutor **autônomo**, de autoescola ou de escola pública (art. 36)", "Veículo do instrutor ou do próprio **candidato** (art. 39)"] },
      { rotulo: "Exame de direção", emoji: "🏁", cor: "rosa", folhas: ["Começa com **zero** e soma pontos por infração (art. 45)", "Aprovado com até **dez pontos** (art. 47)", "Tentativas **sem limite**; a segunda sem taxa extra (art. 47)"] },
    ],
    macete: "Teoria sem carga mínima, prática com duas horas e aprovação com até dez pontos no exame de direção.",
    cuidado: "Ela revogou a 789/2020, ainda citada em material antigo. Na regra nova, o curso teórico não tem carga horária mínima.",
  },
  {
    aula: "res-918",
    centro: { titulo: "Multas e notificações", emoji: "🧾", sub: "Resolução Contran 918/2022" },
    ramos: [
      { rotulo: "Autuação", emoji: "📝", cor: "azul", folhas: ["Condutor identificado na hora, **sempre que possível** (art. 3º)", "AIT assinado pelo **proprietário** condutor vale como NA (art. 3º)"] },
      { rotulo: "Notificação", emoji: "📮", cor: "verde", folhas: ["NA expedida em até **30 dias** da infração (art. 4º)", "Sem NA no prazo, o AIT é **arquivado** (art. 4º)", "Defesa com prazo **não inferior** a 30 dias (art. 4º)"] },
      { rotulo: "Responsável", emoji: "👤", cor: "ouro", folhas: ["Sem indicar o condutor, responde o **proprietário** (art. 6º)", "Pessoa jurídica sem indicar: **nova multa** (art. 7º; CTB art. 257, § 8º)"] },
      { rotulo: "Penalidade", emoji: "⚖️", cor: "roxo", folhas: ["Notificação da penalidade em até **180 dias** (art. 9º)", "Com defesa prévia no prazo: **360 dias** (art. 9º)", "Leve ou média: **advertência** por escrito (art. 10)"] },
      { rotulo: "Recursos", emoji: "🏛️", cor: "laranja", folhas: ["Primeira instância: a **JARI** do órgão autuador (art. 15)", "No RENACH só depois de **esgotados** os recursos (art. 18)"] },
      { rotulo: "Pagamento", emoji: "💵", cor: "rosa", folhas: ["Até o vencimento: **80%** do valor (art. 20)", "Notificação eletrônica e sem recorrer: **60%** (art. 21)", "Atraso: juros de **1%** até o fim do mês seguinte (art. 22)"] },
    ],
    macete: "Prazos da multa: 30 dias para a NA, 180 para a penalidade e 360 se houve defesa prévia.",
    cuidado: "Os 360 dias só valem quando a defesa prévia foi apresentada no prazo. Sem ela, o limite é de 180 dias.",
  },
  {
    aula: "res-882",
    centro: { titulo: "Pesos e dimensões", emoji: "📏", sub: "Resolução Contran 882/2021" },
    ramos: [
      { rotulo: "Dimensões", emoji: "📐", cor: "azul", folhas: ["Largura de **2,60 m** e altura de **4,40 m** (art. 4º)", "Não articulado: até **14 m** de comprimento (art. 4º)", "Articulado de passageiros: até **19,80 m** (art. 4º)"] },
      { rotulo: "Pesos", emoji: "🏋️", cor: "verde", folhas: ["Não articulado: PBT de **29 t** (art. 6º)", "Com reboque ou semirreboque, exceto caminhões: **39,5 t** (art. 6º)", "Limites diferentes: vale o **menor** (art. 2º)"] },
      { rotulo: "AET", emoji: "📄", cor: "ouro", folhas: ["CVC de mais de 2 unidades acima de **57 t** (art. 18)", "Ou com mais de **19,80 m** de comprimento (art. 18)", "Do **amanhecer** ao pôr do sol, até 80 km/h (art. 20)"] },
      { rotulo: "Pesagem", emoji: "⚖️", cor: "roxo", folhas: ["**Balança** aferida prevalece sobre o documento fiscal (art. 49)", "Tolerância de **5%** no PBT ou PBTC (art. 50)", "Tolerância de **12,5%** no peso por eixo (art. 50)"] },
      { rotulo: "Até 50 t", emoji: "🚚", cor: "laranja", folhas: ["Fiscaliza só o **PBT** ou PBTC (art. 50)", "Passou da tolerância: confere também o **eixo** (art. 50)"] },
      { rotulo: "Combustível limpo", emoji: "⚡", cor: "rosa", folhas: ["Gás, elétrico ou hidrogênio: eixo dianteiro de **7 t** (art. 6º)", "Mais **1 t** no PBT ou PBTC (art. 6º)"] },
    ],
    macete: "Duas medidas de cabeça: 2,60 m de largura e 4,40 m de altura.",
    cuidado: "A tolerância não pode ser incorporada ao carregamento do veículo. Os 7 t no eixo dianteiro vieram da Resolução 1.015/2024.",
  },
  {
    aula: "res-819",
    centro: { titulo: "Transporte de crianças", emoji: "🧒", sub: "Resolução Contran 819/2021" },
    ramos: [
      { rotulo: "Quem", emoji: "🧒", cor: "azul", folhas: ["Menor de **10 anos** e abaixo de 1,45 m (art. 2º)", "Vai no banco **traseiro**, com cinto ou dispositivo (art. 2º)"] },
      { rotulo: "Dispositivos", emoji: "🛡️", cor: "verde", folhas: ["**Bebê conforto**: até 1 ano ou 13 kg (art. 2º e Anexo)", "**Cadeirinha**: mais de 1 até 4 anos (art. 2º e Anexo)", "**Assento de elevação**: até 7 anos e meio (art. 2º e Anexo)"] },
      { rotulo: "Banco da frente", emoji: "⚠️", cor: "ouro", folhas: ["Veículo **só** com esse banco (art. 3º)", "Crianças **excedem** a lotação do banco traseiro (art. 3º)", "Atrás, só cinto de **dois pontos** de fábrica (art. 3º)", "Criança que já atingiu **1,45 m** (art. 3º)"] },
      { rotulo: "Com airbag", emoji: "🛑", cor: "roxo", folhas: ["Dispositivo de **costas** para a marcha: proibido (art. 4º)", "De frente para a marcha, **sem bandeja** (art. 4º)", "Banco na **última** posição de recuo (art. 4º)"] },
      { rotulo: "Fora da regra", emoji: "🚌", cor: "laranja", folhas: ["Coletivo, de **aluguel** e escolar (art. 2º)", "Veículo com PBT acima de **3,5 t** (art. 2º)"] },
      { rotulo: "Infração", emoji: "🚨", cor: "rosa", folhas: ["Descumprir: infração do **art. 168** do CTB (art. 7º)", "**Gravíssima**, multa e retenção do veículo (art. 7º; CTB art. 168)"] },
    ],
    macete: "Dez anos e 1,45 m: abaixo disso, a criança vai atrás e presa.",
    cuidado: "A dispensa no coletivo, no aluguel e no escolar vale só para o dispositivo de retenção. Com cinto de dois pontos de fábrica atrás, a criança de mais de 4 e menos de 7 anos e meio pode ir sem o assento de elevação.",
  },
  {
    aula: "res-940",
    centro: { titulo: "Capacete", emoji: "🛵", sub: "Resolução Contran 940/2022" },
    ramos: [
      { rotulo: "Quem usa", emoji: "🛵", cor: "azul", folhas: ["Condutor e **passageiro** de moto, ciclomotor, triciclo e quadriciclo (art. 2º)", "Preso pela **cinta jugular** sob o maxilar (art. 2º)", "Certificado pelo **INMETRO** (art. 2º)"] },
      { rotulo: "Fiscalização", emoji: "🔎", cor: "verde", folhas: ["Certificação e **fixação** na cabeça (art. 3º)", "**Refletivos** nas laterais e na traseira (art. 3º)", "Selo ou etiqueta do INMETRO e **estado geral** (art. 3º)"] },
      { rotulo: "Viseira", emoji: "🕶️", cor: "ouro", folhas: ["Viseira ou, sem ela, **óculos de proteção** (art. 4º)", "Óculos de sol ou corretivo **não** substituem (art. 4º)", "À noite, viseira **cristal** (art. 4º)", "**Película** proibida na viseira e nos óculos (art. 4º)"] },
      { rotulo: "Em movimento", emoji: "🔒", cor: "roxo", folhas: ["Viseira erguida só com o veículo **imobilizado** (art. 4º)", "Modular: queixeira **abaixada e travada** (art. 4º)"] },
      { rotulo: "Enquadramento", emoji: "🚨", cor: "laranja", folhas: ["Sem capacete ou capacete indevido: **art. 244**, I ou II (art. 5º)", "Sem afivelar, tamanho errado ou queixeira: **art. 169** (art. 5º)", "Sem viseira ou óculos: **art. 244**, X ou XI (art. 5º)", "Fora das especificações: **art. 230**, X (art. 5º)"] },
      { rotulo: "Exceções", emoji: "🚫", cor: "rosa", folhas: ["Triciclo e quadriciclo de **cabine fechada** (art. 1º)", "Acima do tamanho **64**, comprado no exterior: sem certificação (art. 2º)"] },
    ],
    macete: "Capacete sem afivelar é 169; sem capacete é 244; fora do padrão é 230.",
    cuidado: "Capacete na cabeça, mas sem a cinta presa, cai no 169, não no 244. O 244 fica para quem está sem capacete ou com ele fora da cabeça.",
  },
  {
    aula: "res-973",
    centro: { titulo: "Sinalização viária", emoji: "🚦", sub: "Resolução Contran 973/2022" },
    ramos: [
      { rotulo: "MBST", emoji: "📚", cor: "azul", folhas: ["Manual Brasileiro de Sinalização em **9 volumes** (art. 2º)", "Vertical: **regulamentação**, advertência e indicação (art. 2º)", "Horizontal, **semafórica** e dispositivos auxiliares (art. 2º)", "Temporária, **cicloviária** e cruzamento rodoferroviário (art. 2º)"] },
      { rotulo: "Experimental", emoji: "🧪", cor: "verde", folhas: ["Sinalização **fora do CTB**, por período prefixado (art. 3º)", "Pedido ao órgão máximo executivo da **União** (art. 3º)"] },
      { rotulo: "O pedido", emoji: "📋", cor: "ouro", folhas: ["Finalidade, **projeto** e local da implantação (art. 3º)", "**Estatística** de acidentes antes da implantação (art. 3º)", "Período de uso e termo de **responsabilidade** (art. 3º)"] },
      { rotulo: "Autorização", emoji: "✅", cor: "roxo", folhas: ["**Portaria**, a título precário, com local e prazo (art. 5º)", "Implantar **antes** da autorização: proibido (art. 6º)", "Resultados vão ao **CONTRAN** (art. 7º)"] },
      { rotulo: "Prazos", emoji: "📅", cor: "laranja", folhas: ["Vale para soluções a partir de **1º/08/2022** (art. 8º)", "Antigas fora do padrão: adequar até **31/07/2025** (art. 8º)"] },
    ],
    macete: "Nove volumes: três verticais, depois horizontal, semafórica, auxiliares, temporária, cicloviária e rodoferroviária.",
    cuidado: "Quem autoriza a sinalização experimental é o órgão máximo executivo de trânsito da União, por portaria. O CONTRAN só recebe os resultados no fim.",
  },
  {
    aula: "res-969",
    centro: { titulo: "Placas de identificação", emoji: "🔢", sub: "Resolução Contran 969/2022" },
    ramos: [
      { rotulo: "Onde vai", emoji: "🚗", cor: "azul", folhas: ["Placa **dianteira** e traseira após o registro (art. 2º)", "Moto, reboque e similares: **só traseira** (art. 2º)"] },
      { rotulo: "QR Code", emoji: "🔐", cor: "verde", folhas: ["Toda placa tem **QR Code** (art. 5º)", "QR Code é o **lacre eletrônico** da placa (art. 3º)", "Substitui o lacre do **art. 115** do CTB (art. 3º)"] },
      { rotulo: "Segunda placa", emoji: "🚲", cor: "ouro", folhas: ["**Obrigatória** quando a carga cobre a traseira (art. 4º)", "Engate de reboque, carga ou **bicicleta** externa (art. 4º)"] },
      { rotulo: "Empresas", emoji: "🏭", cor: "roxo", folhas: ["Contrato de **exclusividade** com estampador: vedado (art. 12)", "Credenciamento vale **5 anos**, renovável (art. 19)"] },
      { rotulo: "Perda e clonagem", emoji: "🚨", cor: "laranja", folhas: ["Furto ou extravio: troca em **qualquer UF** (art. 25)", "Clonagem: troca dos **caracteres**, com processo administrativo (art. 50)"] },
      { rotulo: "Placas especiais", emoji: "🎖️", cor: "rosa", folhas: ["**Autoridades** e representação diplomática (arts. 26 e 31)", "PIV-Fab: **testes** de fabricantes (art. 35)", "PIV-Exp: estabelecimentos do **art. 330** do CTB (art. 39)"] },
    ],
    macete: "O QR Code é o lacre; placa furtada se troca em qualquer estado.",
    cuidado: "A segunda placa traseira só é obrigatória quando a carga cobre, total ou parcialmente, a placa de trás.",
  },
];

export interface PontoResolucao {
  /** "Art. 4º", "Art. 50, I e II", "Anexo"… */
  r: string;
  /** Texto oficial, sem mudar nada; "[…]" marca um corte. */
  t: string;
}

export interface ResolucaoContran {
  id: string;
  numero: string;
  data: string;
  tema: string;
  emoji: string;
  /** Do que ela trata, em poucas palavras (escrito para o app). */
  resumo: string;
  /** PDF oficial no site do Ministério dos Transportes. */
  link: string;
  /** Aula de Legislação de Trânsito ligada a ela. */
  aula: string;
  revogou?: string;
  alteracoes?: string;
  mapa: MapaAula;
  /** true quando a resolução já é o assunto da aula e o pôster é o mesmo da aba Mapas. */
  mapaDaAula: boolean;
  pontos: PontoResolucao[];
}

const PDF = (nome: string) =>
  `https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/${nome}.pdf/@@display-file/file`;

function mapaPróprio(id: string): MapaAula {
  const m = MAPAS_RESOLUCOES.find((x) => x.aula === id);
  if (!m) throw new Error(`Mapa da resolução ${id} não encontrado`);
  return m;
}

function mapaDaAula(aula: string): MapaAula {
  const m = MAPAS_TRANSITO.find((x) => x.aula === aula);
  if (!m) throw new Error(`Mapa da aula ${aula} não encontrado`);
  return m;
}

export const RESOLUCOES: ResolucaoContran[] = [
  {
    id: "res-1020",
    numero: "1.020/2025",
    data: "1º/12/2025",
    tema: "Habilitação e formação de condutores",
    emoji: "🎓",
    resumo: "Aprendizagem, habilitação, documentos do condutor e o processo de formação até a CNH.",
    link: PDF("Resolucao10202025"),
    aula: "transito-07",
    revogou: "Resoluções 265/2007, 321/2009, 558/2015 e 789/2020, entre outras.",
    mapa: mapaPróprio("res-1020"),
    mapaDaAula: false,
    pontos: [
      { r: "Art. 4º", t: "São documentos de habilitação: I - a Permissão para Dirigir; II - a Autorização para Conduzir Ciclomotor; e III - a Carteira Nacional de Habilitação - CNH." },
      { r: "Art. 17", t: "O condutor deverá preencher os seguintes requisitos, que serão verificados ao longo do processo de formação: I - ser penalmente imputável; II - saber ler e escrever; III - possuir documento de identificação reconhecido por Lei; e IV - estar inscrito no Cadastro de Pessoas Físicas - CPF." },
      { r: "Art. 21", t: "Os cursos teóricos destinados ao processo de obtenção da CNH ou da Autorização para Conduzir Ciclomotor não estão sujeitos à carga horária mínima pré-definida, […]" },
      { r: "Art. 31", t: "Os exames teóricos consistem em provas objetivas, compostas por questões escritas de múltipla escolha, com quatro alternativas de resposta e apenas uma correta." },
      { r: "Art. 38", t: "O curso de aulas práticas de direção veicular deverá observar carga horária mínima de duas horas, podendo ser cumprida de forma contínua ou fracionada, […]" },
      { r: "Art. 47", t: "Para aprovação no exame de direção veicular, o candidato deverá ter nota atribuída não superior a dez pontos. […] § 2º O candidato reprovado poderá submeter-se a novas avaliações, sem limitação de tentativas, até alcançar aprovação, sendo que a segunda tentativa poderá ser agendada sem a cobrança de taxas adicionais." },
      { r: "Art. 49", t: "A Permissão para Dirigir terá validade de um ano, contado da data de expedição do documento. Parágrafo único. Durante o período de que trata o caput, o condutor não poderá cometer infrações de trânsito de natureza grave ou gravíssima ou ser reincidente em infrações de trânsito de natureza média." },
    ],
  },
  {
    id: "res-918",
    numero: "918/2022",
    data: "28/03/2022",
    tema: "Multas: autuação, notificação e pagamento",
    emoji: "🧾",
    resumo: "Procedimentos para aplicar as multas por infração, arrecadar e repassar os valores.",
    link: PDF("Resolucao9182022"),
    aula: "transito-08",
    alteracoes: "Alterada pela Resolução 991/2023 (pagamento por GRU, cartão e parcelamento).",
    mapa: mapaPróprio("res-918"),
    mapaDaAula: false,
    pontos: [
      { r: "Art. 3º, §§ 4º e 5º", t: "§ 4º Sempre que possível, o condutor será identificado no momento da lavratura do AIT. § 5º O AIT valerá como NA quando for assinado pelo condutor e este for o proprietário do veículo ou o principal condutor previamente identificado, desde que conste a data do término do prazo para a apresentação […]" },
      { r: "Art. 4º", t: "[…] o órgão autuador expedirá, no prazo máximo de 30 (trinta) dias contados da data do cometimento da infração, a NA dirigida ao proprietário do veículo, […] § 1º A não expedição da NA no prazo previsto no caput ensejará o arquivamento do AIT." },
      { r: "Art. 6º", t: "O proprietário do veículo será considerado responsável pela infração cometida, respeitado o disposto no § 2º do art. 5º, nas seguintes situações: I - caso não haja identificação do condutor infrator até o término do prazo fixado na NA; II - caso a identificação seja feita em desacordo com o estabelecido no art. 5º; ou III - caso não haja registro de comunicação de venda à época da infração." },
      { r: "Art. 9º, §§ 2º e 3º", t: "§ 2º Caso a defesa prévia seja indeferida ou não seja apresentada no prazo estabelecido, será aplicada a penalidade e expedida notificação ao proprietário do veículo ou ao infrator, no prazo máximo de 180 (cento e oitenta) dias, contado da data do cometimento da infração, […] § 3º Em caso de apresentação da defesa prévia em tempo hábil, o prazo previsto no § 2º será de 360 (trezentos e sessenta) dias." },
      { r: "Art. 10", t: "Em se tratando de infrações de natureza leve ou média, a autoridade de trânsito deverá aplicar a penalidade de advertência por escrito, nos termos do art. 267 do CTB, […]" },
      { r: "Art. 18", t: "Somente depois de esgotados os recursos de que tratam os arts. 15 e 16, as penalidades aplicadas poderão ser cadastradas no RENACH." },
      { r: "Art. 21", t: "Quando o infrator optar pelo recebimento da NP pelo sistema de notificação eletrônica e opte por não apresentar defesa prévia nem recurso, reconhecendo o cometimento da infração, conforme previsto no § 1º do art. 284 do CTB, poderá efetuar o pagamento da multa pelo valor equivalente a 60% (sessenta por cento) do seu valor original, em qualquer fase do processo, até o vencimento da multa, […]" },
    ],
  },
  {
    id: "res-1031",
    numero: "1.031/2026",
    data: "17/08/2026",
    tema: "Álcool e outras substâncias",
    emoji: "🍺",
    resumo: "Como a fiscalização verifica o consumo de álcool ou de outra substância psicoativa.",
    link: PDF("resolucao10312026"),
    aula: "transito-11",
    revogou: "Resolução 432/2013.",
    mapa: mapaDaAula("transito-11"),
    mapaDaAula: true,
    pontos: [],
  },
  {
    id: "res-882",
    numero: "882/2021",
    data: "13/12/2021",
    tema: "Pesos e dimensões dos veículos",
    emoji: "📏",
    resumo: "Limites de peso e de dimensões para veículos nas vias terrestres, AET e fiscalização na balança.",
    link: PDF("Resolucao8822021"),
    aula: "transito-15",
    alteracoes: "Alterada pelas Resoluções 899/2022, 994/2023, 1.005/2024 e 1.015/2024.",
    mapa: mapaPróprio("res-882"),
    mapaDaAula: false,
    pontos: [
      { r: "Art. 2º, parágrafo único", t: "Havendo divergência entre os limites de que trata o caput, deverá ser obedecido o menor deles, considerado limite regulamentar." },
      { r: "Art. 4º", t: "As dimensões regulamentares para veículos, com ou sem carga, que não necessitam de AET ou AE, são as seguintes: I - largura máxima: 2,60 m; e II - altura máxima: 4,40 m; III - comprimento total: a) veículos não-articulados: máximo de 14,00 m; […]" },
      { r: "Art. 6º, I, a", t: "PBT para veículo não articulado: 29 t;" },
      { r: "Art. 18", t: "As CVC, com mais de duas unidades, incluída a unidade tratora, com PBTC acima de 57 t ou com comprimento total acima de 19,80 m, só poderão circular portando AET." },
      { r: "Art. 20", t: "O trânsito de CVC, que exija AET, deve ser do amanhecer ao pôr do sol e sua velocidade máxima de 80 km/h, respeitado limite inferior definido pela sinalização da via." },
      { r: "Art. 49, § 2º", t: "A fiscalização em equipamento de pesagem, devidamente aferida e certificada pelo INMETRO, deverá prevalecer em relação à fiscalização por verificação do peso lançado em documento fiscal ou de transporte." },
      { r: "Art. 50", t: "Na fiscalização de peso dos veículos por equipamento de pesagem serão admitidas as seguintes tolerâncias: I - 5% sobre os limites de PBT ou PBTC; e II - 12,5% sobre os limites de peso bruto transmitido por eixo de veículos à superfície das vias públicas. § 1º Os veículos ou combinação de veículos com PBT ou PBTC regulamentar igual ou inferior a 50 t devem ser fiscalizados apenas quanto aos limites de PBT ou PBTC, observada a tolerância prevista no inciso I do caput." },
    ],
  },
  {
    id: "res-960",
    numero: "960/2022",
    data: "17/05/2022",
    tema: "Vidros e película",
    emoji: "🔆",
    resumo: "Segurança dos vidros, visibilidade, vidros de veículos blindados e medidores de transmitância luminosa.",
    link: PDF("Resolucao9602022"),
    aula: "transito-20",
    alteracoes: "Alterada pela Resolução 989/2022, a partir de 2 de janeiro de 2023.",
    mapa: mapaDaAula("transito-20"),
    mapaDaAula: true,
    pontos: [],
  },
  {
    id: "res-819",
    numero: "819/2021",
    data: "17/03/2021",
    tema: "Transporte de crianças",
    emoji: "🧒",
    resumo: "Transporte de crianças com menos de 10 anos e abaixo de 1,45 m no dispositivo de retenção adequado.",
    link: PDF("Resolucao8192021"),
    aula: "transito-02",
    revogou: "Resolução 277/2008 e as que a alteravam.",
    mapa: mapaPróprio("res-819"),
    mapaDaAula: false,
    pontos: [
      { r: "Art. 2º", t: "Para transitar em veículos automotores, as crianças com idade inferior a dez anos que não tenham atingido 1,45 m (um metro e quarenta e cinco centímetros) de altura devem ser transportados nos bancos traseiros usando individualmente cinto de segurança ou dispositivo de retenção equivalente, na forma prevista no Anexo desta Resolução." },
      { r: "Art. 3º", t: "O transporte de criança com idade inferior a dez anos pode ser realizado no banco dianteiro do veículo, com o uso do dispositivo de retenção adequado ao seu peso e altura, nas seguintes situações: I - quando o veículo for dotado exclusivamente deste banco; II - quando a quantidade de crianças com esta idade exceder a lotação do banco traseiro; ou III - quando o veículo for dotado originalmente (fabricado) de cintos de segurança subabdominais (dois pontos) nos bancos traseiros; ou IV - quando a criança já tiver atingido 1,45m de altura." },
      { r: "Art. 4º, I e II", t: "I - é vedado o transporte de crianças com até sete anos e meio de idade, em dispositivo de retenção posicionado em sentido contrário ao da marcha do veículo; II - é permitido o transporte de crianças com até sete anos e meio de idade, em dispositivo de retenção posicionado no sentido de marcha do veículo, desde que não possua bandeja, ou acessório equivalente, incorporado ao dispositivo de retenção; […]" },
      { r: "Art. 7º", t: "O transporte de crianças em desacordo com o disposto nesta Resolução sujeita os infratores às sanções previstas no art. 168 do CTB." },
      { r: "Anexo", t: "I - “bebê conforto ou conversível” […]: a) crianças com até um ano de idade; ou b) crianças com peso de até 13 kg […]; II - “cadeirinha” […]: a) crianças com idade superior a um ano e inferior ou igual a quatro anos; ou b) crianças com peso entre 9 a 18 kg […]; III - “assento de elevação” […]: a) crianças com idade superior a quatro anos e inferior ou igual a sete anos e meio; ou b) crianças com até 1,45 m de altura e peso entre 15 a 36 kg […]" },
    ],
  },
  {
    id: "res-993",
    numero: "993/2023",
    data: "15/06/2023",
    tema: "Equipamentos obrigatórios",
    emoji: "🧰",
    resumo: "Os equipamentos obrigatórios da frota em circulação e o índice das normas de segurança veicular.",
    link: PDF("Resolucao9932023"),
    aula: "transito-13",
    revogou: "Resolução 912/2022.",
    mapa: mapaDaAula("transito-13"),
    mapaDaAula: true,
    pontos: [],
  },
  {
    id: "res-940",
    numero: "940/2022",
    data: "28/03/2022",
    tema: "Capacete de segurança",
    emoji: "🛵",
    resumo: "Uso do capacete por condutor e passageiro de motocicleta, motoneta, ciclomotor, triciclo e quadriciclo.",
    link: PDF("Resolucao9402022"),
    aula: "transito-02",
    revogou: "Resoluções 453/2013, 680/2017 e 846/2021.",
    mapa: mapaPróprio("res-940"),
    mapaDaAula: false,
    pontos: [
      { r: "Art. 2º", t: "É obrigatório, para circular nas vias públicas, o uso de capacete motociclístico pelo condutor e passageiro de motocicleta, motoneta, ciclomotor, triciclo motorizado e quadriciclo motorizado, devidamente afixado à cabeça pelo conjunto formado pela cinta jugular e engate, por debaixo do maxilar inferior." },
      { r: "Art. 4º, § 2º", t: "Fica proibido o uso de óculos de sol, óculos corretivos ou de segurança do trabalho (EPI) de forma singular, em substituição aos óculos de proteção." },
      { r: "Art. 4º, §§ 4º e 5º", t: "§ 4º No período noturno, é obrigatório o uso de viseira no padrão cristal. § 5º É proibida a aposição de película na viseira do capacete e nos óculos de proteção." },
      { r: "Art. 5º", t: "I - art. 169: quando dirigir ou conduzir passageiro sem o capacete estar devidamente fixado à cabeça pelo conjunto formado pela cinta jugular e engate, por debaixo do maxilar inferior; de tamanho inadequado ou no caso de queixeira não abaixada ou travada. II - art. 230, inciso X: quando dirigir ou conduzir passageiro com o capacete fora das especificações contidas no art. 2º, exceto inciso II, combinado com o Anexo; III - art. 244, inciso I ou II: quando dirigir ou conduzir passageiro sem o uso de capacete motociclístico, capacete não encaixado na cabeça ou uso de capacete indevido, conforme Anexo; e IV - art. 244, inciso X ou XI: quando dirigir ou conduzir passageiro utilizando capacete de segurança sem viseira ou óculos de proteção ou com viseira ou óculos de proteção em desacordo com Anexo." },
    ],
  },
  {
    id: "res-973",
    numero: "973/2022",
    data: "18/07/2022",
    tema: "Regulamento de Sinalização Viária",
    emoji: "🚦",
    resumo: "Regulamento de Sinalização Viária: os volumes do Manual Brasileiro de Sinalização e a sinalização experimental.",
    link: PDF("Resolucao9732022"),
    aula: "transito-05",
    revogou: "17 resoluções de sinalização, como a 31/1998 e a 160/2004.",
    mapa: mapaPróprio("res-973"),
    mapaDaAula: false,
    pontos: [
      { r: "Art. 2º", t: "Este Regulamento é constituído pelos volumes do Manual Brasileiro de Sinalização de Trânsito (MBST), os quais dispõem, especificamente, acerca das seguintes modalidades de sinalização: MBST Volume I - Sinalização Vertical de Regulamentação (Anexo I); MBST Volume II - Sinalização Vertical de Advertência (Anexo II); MBST Volume III - Sinalização Vertical de Indicação (Anexo III); MBST Volume IV - Sinalização Horizontal (Anexo IV); MBST Volume V - Sinalização Semafórica (Anexo V); MBST Volume VI - Dispositivos auxiliares (Anexo VI); MBST Volume VII - Sinalização Temporária (Anexo VII); MBST Volume VIII - Sinalização Cicloviária (Anexo VIII); e MBST Volume IX - Sinalização de cruzamento rodoferroviário (Anexo IX)." },
      { r: "Art. 6º", t: "Não é permitida a implantação de sinalização de trânsito experimental antes da autorização de uso expedida pelo órgão máximo executivo de trânsito da União." },
      { r: "Art. 8º", t: "As disposições contidas no presente Regulamento aplicam-se a todas as soluções de Engenharia de Tráfego e Sinalização implementadas a partir de 1º de agosto de 2022. Parágrafo único. As soluções de Engenharia de Tráfego e Sinalização implementadas até 31 de julho de 2022 que não atenderem às especificações do presente Regulamento deverão ser substituídas ou adequadas até 31 de julho de 2025." },
    ],
  },
  {
    id: "res-969",
    numero: "969/2022",
    data: "20/06/2022",
    tema: "Placas de identificação (PIV)",
    emoji: "🔢",
    resumo: "O sistema de Placas de Identificação de Veículos registrados no país, com o QR Code como lacre.",
    link: PDF("resolucao9692022"),
    aula: "transito-21",
    mapa: mapaPróprio("res-969"),
    mapaDaAula: false,
    pontos: [
      { r: "Art. 2º", t: "Após o registro no respectivo órgão ou entidade executivo de trânsito do Estado ou do Distrito Federal, cada veículo será identificado por PIV dianteira e traseira, de acordo com os requisitos estabelecidos nesta Resolução. § 1º Os reboques, semirreboques, motocicletas, motonetas, ciclomotores, cicloelétricos, triciclos, quadriciclos e guindastes serão identificados apenas pela PIV traseira." },
      { r: "Art. 3º", t: "O código de barras bidimensionais dinâmico (Quick Response Code - QR Code) de que trata o art. 5º é o lacre eletrônico da placa e substituirá o lacre previsto no art. 115 do CTB." },
      { r: "Art. 4º", t: "É obrigatório o uso de segunda PIV traseira nos veículos equipados com engates para reboques ou carroceria intercambiável, transportando eventualmente carga que cobrir, total ou parcialmente, a PIV traseira." },
      { r: "Art. 25", t: "No caso de extravio, furto ou roubo de qualquer das PIV, o proprietário, possuidor ou condutor do veículo poderá requerer a substituição em qualquer Unidade da Federação onde o veículo estiver circulando, independentemente do Município ou Unidade da Federação onde o veículo estiver registrado." },
      { r: "Art. 50", t: "Nos casos em que for comprovada a existência de outro veículo automotor circulando com combinação alfanumérica de PIV igual à do veículo original, a troca das PIV, com a substituição de caracteres alfanuméricos de identificação, será realizada mediante a instauração de processo administrativo pelo órgão ou entidade executivo de trânsito de registro do veículo." },
    ],
  },
];
