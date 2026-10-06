import type { Question } from "../../lib/types";

/**
 * TI — crimes cibernéticos, investigação digital, evidências eletrônicas e legislação/ética digital
 * (Anexo I, itens 1.5 e 1.6). Arquivo separado para permitir edição em paralelo; o índice junta
 * ti.ts, ti-seguranca.ts e este arquivo na mesma matéria "ti". IDs deste arquivo: ti-301 em diante.
 */
export const QUESTOES_TI_CRIMES: Question[] = [
  {
    id: "ti-301",
    materia: "ti",
    topico: "Furto e estelionato por fraude eletrônica (arts. 155, §§4º-B e 4º-C, e 171, §§2º-A e 2º-B, do CP, com as penas da Lei 15.397/2026)",
    enunciado:
      "Maria, de 52 anos, recebe pelo WhatsApp, de número desconhecido, mensagem com a foto do filho dizendo que ele trocou de celular e precisa pagar uma conta urgente. Convencida, ela mesma faz um Pix de R$ 4.000 para a conta indicada.\n\nConsiderando o Código Penal com a redação das Leis 14.155/2021 e 15.397/2026, a conduta do golpista configura:",
    alternativas: [
      "furto mediante fraude eletrônica (art. 155, §4º-B), porque a fraude foi praticada por aplicação de internet",
      "estelionato simples (art. 171, caput), de ação penal pública condicionada à representação da vítima",
      "estelionato por fraude eletrônica (art. 171, §2º-A), de ação penal pública incondicionada",
      "estelionato por fraude eletrônica (art. 171, §2º-A), com pena aumentada de 1/3 ao dobro por ter sido praticado por rede social",
      "invasão de dispositivo informático (art. 154-A), porque o agente usou indevidamente a imagem do filho",
    ],
    correta: 2,
    explicacao:
      "A própria vítima, induzida a erro por mensagem em aplicação de internet, entregou o valor: é estelionato por fraude eletrônica (art. 171, §2º-A, do CP, reclusão de 4 a 8 anos e multa). No furto mediante fraude (art. 155, §4º-B), a fraude serve para o agente subtrair sem que a vítima perceba. A Lei 15.397/2026 revogou o §5º do art. 171, e o estelionato passou a ser de ação penal pública incondicionada. O aumento de 1/3 ao dobro (art. 171, §4º) é para vítima idosa ou vulnerável, não para o uso de rede social. Não houve invasão de dispositivo.",
    origem: "banco",
  },
  {
    id: "ti-302",
    materia: "ti",
    topico: "Furto e estelionato por fraude eletrônica (arts. 155, §§4º-B e 4º-C, e 171, §§2º-A e 2º-B, do CP, com as penas da Lei 15.397/2026)",
    enunciado:
      "Um criminoso convence uma aposentada de 70 anos a instalar um suposto aplicativo de atualização bancária. Na verdade, trata-se de programa malicioso, com o qual ele assume o controle do aparelho e, sem que ela perceba, transfere todo o saldo da conta para terceiros.\n\nConsiderando o Código Penal com as alterações da Lei 15.397/2026, a conduta se amolda a:",
    alternativas: [
      "estelionato por fraude eletrônica (art. 171, §2º-A), com pena de 4 a 8 anos, aumentada de 1/3 a 2/3",
      "furto mediante fraude eletrônica (art. 155, §4º-B), com pena de 4 a 8 anos e sem causa de aumento, pois a idade da vítima só majora o estelionato",
      "invasão de dispositivo informático qualificada (art. 154-A, §3º), que absorve a subtração dos valores",
      "furto qualificado pela fraude (art. 155, §4º, II), com pena de 2 a 8 anos, porque não houve violação de senha",
      "furto mediante fraude eletrônica (art. 155, §4º-B), com pena de 4 a 10 anos, aumentada de 1/3 ao dobro por ser a vítima idosa (art. 155, §4º-C, II)",
    ],
    correta: 4,
    explicacao:
      "Quem transferiu o dinheiro foi o próprio agente, burlando a vigilância da vítima por meio de dispositivo informático e programa malicioso: é furto mediante fraude eletrônica (art. 155, §4º-B, do CP). A Lei 15.397/2026 elevou a pena para reclusão de 4 a 10 anos e multa (antes, 4 a 8). O §4º-C, II, manda aumentar a pena de 1/3 ao dobro quando a vítima é idosa ou vulnerável, considerada a relevância do resultado gravoso. O §4º-B dispensa a violação de mecanismo de segurança e prevalece sobre o §4º, II, por ser específico.",
    origem: "banco",
  },
  {
    id: "ti-303",
    materia: "ti",
    topico: "Furto e estelionato por fraude eletrônica (arts. 155, §§4º-B e 4º-C, e 171, §§2º-A e 2º-B, do CP, com as penas da Lei 15.397/2026)",
    enunciado:
      "Um mesmo grupo aplica o golpe do falso leilão de veículos em vítimas que moram em Curitiba, Londrina e Maringá. Cada vítima, enganada, transfere por Pix o valor do sinal para uma conta controlada pelo grupo, aberta em agência de São Paulo.\n\nSegundo o art. 70, §4º, do Código de Processo Penal, a competência para processar esses estelionatos é:",
    alternativas: [
      "do domicílio da vítima e, havendo pluralidade de vítimas, fixada pela prevenção",
      "do local da agência bancária em que é mantida a conta que recebeu os valores",
      "do local onde o agente estava quando publicou o anúncio falso, por ser o lugar da ação",
      "da Justiça Federal, porque o Pix é arranjo de pagamento instituído pelo Banco Central",
      "do domicílio do réu, por se tratar de crime praticado pela internet sem lugar certo de consumação",
    ],
    correta: 0,
    explicacao:
      "O art. 70, §4º, do CPP, incluído pela Lei 14.155/2021, dispõe que, nos crimes do art. 171 do CP praticados mediante depósito, emissão de cheque sem fundos ou com pagamento frustrado, ou transferência de valores, a competência é definida pelo local do domicílio da vítima e, em caso de pluralidade de vítimas, firma-se pela prevenção. O uso do Pix, por si só, não atrai a competência da Justiça Federal.",
    origem: "banco",
  },
  {
    id: "ti-304",
    materia: "ti",
    topico: "Furto e estelionato por fraude eletrônica (arts. 155, §§4º-B e 4º-C, e 171, §§2º-A e 2º-B, do CP, com as penas da Lei 15.397/2026)",
    enunciado:
      "Sobre a ação penal em crimes praticados por meio eletrônico, analise as afirmativas.\n\nI. Depois que a Lei 15.397/2026 revogou o §5º do art. 171 do CP, o estelionato passou a ser crime de ação penal pública incondicionada.\n\nII. O furto mediante fraude eletrônica (art. 155, §4º-B, do CP) depende de representação quando a vítima é pessoa física maior e capaz.\n\nIII. A invasão de dispositivo informático (art. 154-A do CP) é, em regra, crime de ação penal pública condicionada à representação.\n\nEstá correto o que se afirma em:",
    alternativas: ["I, apenas", "I e III, apenas", "II e III, apenas", "I e II, apenas", "I, II e III"],
    correta: 1,
    explicacao:
      "I está correta: a Lei 15.397/2026 revogou o §5º do art. 171, que exigia representação, e o estelionato passou a ser de ação pública incondicionada. II está errada: o furto, em qualquer modalidade, é de ação pública incondicionada. III está correta: o art. 154-B do CP exige representação, salvo quando o crime é cometido contra a administração pública direta ou indireta ou contra concessionárias de serviços públicos.",
    origem: "banco",
  },
  {
    id: "ti-305",
    materia: "ti",
    topico: "Furto e estelionato por fraude eletrônica (arts. 155, §§4º-B e 4º-C, e 171, §§2º-A e 2º-B, do CP, com as penas da Lei 15.397/2026)",
    enunciado:
      "Pedro não participa da execução do golpe, mas aceita R$ 300 para ceder a conta bancária aberta em seu nome a um grupo que nela faz transitar valores obtidos com fraudes por telefone.\n\nDe acordo com o Código Penal, com as alterações da Lei 15.397/2026, a conduta de Pedro:",
    alternativas: [
      "é atípica, pois a simples cessão de conta bancária não está descrita em nenhum tipo penal",
      "configura apenas receptação (art. 180), com pena de 2 a 6 anos",
      "configura necessariamente lavagem de dinheiro, único tipo aplicável a quem cede conta para trânsito de recursos ilícitos",
      "se amolda ao art. 171, §2º, VII, que pune com as penas do estelionato a cessão de conta bancária para que nela transitem recursos de atividade criminosa",
      "configura estelionato por fraude eletrônica (art. 171, §2º-A), porque a fraude foi praticada por contato telefônico",
    ],
    correta: 3,
    explicacao:
      "A Lei 15.397/2026 incluiu o inciso VII no §2º do art. 171 do CP, que submete às penas do estelionato quem cede conta bancária para que nela transitem recursos provenientes de atividade criminosa, a chamada conta laranja. A receptação (art. 180) hoje tem pena de 2 a 6 anos e pressupõe adquirir ou ocultar coisa produto de crime. O §2º-A pune quem executa a fraude eletrônica, e não quem apenas empresta a conta.",
    origem: "banco",
  },
  {
    id: "ti-306",
    materia: "ti",
    topico: "Invasão de dispositivo informático (arts. 154-A e 154-B do CP) e Lei 12.737/2012",
    enunciado:
      "Durante uma festa, Lucas pega o celular de um colega, desbloqueado e sem senha, e entra na galeria com o objetivo de copiar fotos pessoais para depois constrangê-lo. Antes de copiar qualquer arquivo, é surpreendido e devolve o aparelho.\n\nÀ luz do art. 154-A do Código Penal, com a redação da Lei 14.155/2021, é correto afirmar que:",
    alternativas: [
      "o fato é atípico, porque o tipo exige a violação indevida de mecanismo de segurança, inexistente no caso",
      "houve apenas tentativa, pois o crime só se consuma com a efetiva obtenção dos dados",
      "o crime está consumado, pois é delito formal, que dispensa a violação de mecanismo de segurança e a efetiva obtenção dos dados",
      "o fato é atípico, porque o tipo protege apenas dispositivos conectados à rede de computadores",
      "incide a forma qualificada do §3º, porque a intenção era obter conteúdo íntimo da vítima",
    ],
    correta: 2,
    explicacao:
      "Desde a Lei 14.155/2021, o art. 154-A pune quem invade dispositivo informático de uso alheio, conectado ou não à rede, com o fim de obter, adulterar ou destruir dados sem autorização do usuário. A exigência de violação de mecanismo de segurança foi suprimida. O crime é formal: consuma-se com a invasão feita com essa finalidade, ainda que nada seja copiado. A qualificadora do §3º exige que da invasão resulte efetivamente a obtenção de comunicações privadas, segredos ou informações sigilosas, ou o controle remoto do aparelho.",
    origem: "banco",
  },
  {
    id: "ti-307",
    materia: "ti",
    topico: "Invasão de dispositivo informático (arts. 154-A e 154-B do CP) e Lei 12.737/2012",
    enunciado:
      "Um hacker invade remotamente o computador de uma empresária, obtém o conteúdo de suas conversas privadas por e-mail e, em seguida, vende o material a um concorrente dela.\n\nNos termos do art. 154-A do Código Penal, a conduta:",
    alternativas: [
      "configura a forma qualificada do §3º (reclusão de 2 a 5 anos e multa), com aumento de um a dois terços pela comercialização dos dados a terceiro (§4º)",
      "configura a forma simples do caput, com aumento de 1/3 a 2/3 apenas por ter havido prejuízo econômico (§2º)",
      "configura a forma qualificada do §3º, com pena aumentada de metade por ter sido praticada contra empresária",
      "configura apenas interceptação telemática ilegal (Lei 9.296/1996), que afasta a aplicação do art. 154-A",
      "configura a forma qualificada do §3º, mas a venda é mero exaurimento, sem reflexo na pena",
    ],
    correta: 0,
    explicacao:
      "Se da invasão resulta a obtenção de conteúdo de comunicações eletrônicas privadas, incide a qualificadora do art. 154-A, §3º, do CP (reclusão de 2 a 5 anos e multa). O §4º manda aumentar a pena de um a dois terços se houver divulgação, comercialização ou transmissão a terceiro, a qualquer título, dos dados obtidos. O §2º (prejuízo econômico) se aplica à forma simples. A interceptação da Lei 9.296/1996 atinge o fluxo das comunicações em curso, e não mensagens já armazenadas obtidas por invasão.",
    origem: "banco",
  },
  {
    id: "ti-308",
    materia: "ti",
    topico: "Invasão de dispositivo informático (arts. 154-A e 154-B do CP) e Lei 12.737/2012",
    enunciado:
      "Um grupo invade os servidores de uma concessionária de distribuição de energia elétrica e apaga registros de faturamento. A empresa não apresenta representação no prazo legal.\n\nConsiderando o art. 154-B do Código Penal, a ação penal pela invasão de dispositivo informático:",
    alternativas: [
      "não pode ser proposta, pois o crime é sempre de ação penal privada",
      "não pode ser proposta, pois a falta de representação gera decadência em qualquer hipótese",
      "depende de requisição do Ministro da Justiça, por envolver serviço público essencial",
      "é pública condicionada, mas a representação pode ser suprida pela agência reguladora do setor",
      "é pública incondicionada, porque o crime foi cometido contra concessionária de serviço público",
    ],
    correta: 4,
    explicacao:
      "O art. 154-B do CP estabelece que, nos crimes do art. 154-A, somente se procede mediante representação, salvo se o crime é cometido contra a administração pública direta ou indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal ou dos Municípios ou contra empresas concessionárias de serviços públicos. Como a vítima é concessionária, a ação é pública incondicionada e independe de representação.",
    origem: "banco",
  },
  {
    id: "ti-309",
    materia: "ti",
    topico: "Invasão de dispositivo informático (arts. 154-A e 154-B do CP) e Lei 12.737/2012",
    enunciado:
      "Um programador desenvolve e vende, em fórum na internet, um aplicativo espião projetado para capturar remotamente as mensagens do celular de terceiros. Não há prova de que ele próprio tenha invadido algum aparelho.\n\nSegundo o Código Penal, o programador:",
    alternativas: [
      "não comete crime, pois o art. 154-A pune apenas quem efetivamente invade o dispositivo",
      "incorre na mesma pena do caput do art. 154-A, prevista para quem produz, oferece, distribui, vende ou difunde programa de computador com o intuito de permitir a invasão",
      "responde apenas como partícipe das invasões futuras, se e quando elas ocorrerem",
      "comete contravenção penal, pois a venda de programa não constitui crime autônomo",
      "responde pela forma qualificada do §3º do art. 154-A, porque o programa permite o controle remoto do aparelho",
    ],
    correta: 1,
    explicacao:
      "O art. 154-A, §1º, do CP determina que incorre na mesma pena do caput (reclusão de 1 a 4 anos e multa) quem produz, oferece, distribui, vende ou difunde dispositivo ou programa de computador com o intuito de permitir a prática da invasão. É crime autônomo, que não depende de invasão posterior. A qualificadora do §3º exige que da invasão resulte, por exemplo, o controle remoto não autorizado do dispositivo, o que não foi demonstrado.",
    origem: "banco",
  },
  {
    id: "ti-310",
    materia: "ti",
    topico: "Invasão de dispositivo informático (arts. 154-A e 154-B do CP) e Lei 12.737/2012",
    enunciado:
      "A Lei 12.737/2012, conhecida como Lei Carolina Dieckmann, alterou o Código Penal. Analise as afirmativas.\n\nI. Incluiu os arts. 154-A e 154-B, que tipificam a invasão de dispositivo informático e disciplinam a ação penal respectiva.\n\nII. Alterou o art. 266 para punir também a interrupção de serviço telemático ou de informação de utilidade pública.\n\nIII. Equiparou o cartão de crédito ou de débito a documento particular, para fins do crime de falsificação de documento particular (art. 298).\n\nIV. Criou o furto mediante fraude eletrônica, com pena de 4 a 8 anos.\n\nEstá correto o que se afirma em:",
    alternativas: ["I e II, apenas", "I e IV, apenas", "II, III e IV, apenas", "I, II e III, apenas", "I, II, III e IV"],
    correta: 3,
    explicacao:
      "A Lei 12.737/2012 incluiu os arts. 154-A e 154-B no CP, acrescentou ao art. 266 a interrupção de serviço telemático ou de informação de utilidade pública (§1º) e incluiu o parágrafo único do art. 298, que equipara o cartão de crédito ou débito a documento particular. A afirmativa IV está errada: o furto mediante fraude eletrônica (art. 155, §4º-B) foi criado pela Lei 14.155/2021, e hoje sua pena é de 4 a 10 anos, por força da Lei 15.397/2026.",
    origem: "banco",
  },
  {
    id: "ti-311",
    materia: "ti",
    topico: "Crimes em redes sociais e na internet (honra online, perseguição, violência psicológica com IA, arts. 216-B e 218-C, ECA e art. 266)",
    enunciado:
      "Rafael publica em seu perfil no Instagram um vídeo em que afirma, sabendo ser falso, que um comerciante do bairro vende produtos roubados. O vídeo é visto por milhares de pessoas.\n\nQuanto à pena do crime contra a honra praticado, o Código Penal determina que ela:",
    alternativas: [
      "seja aumentada de 1/3, apenas, pelo meio que facilitou a divulgação (art. 141, III)",
      "seja aplicada em dobro, por ter sido o crime cometido pela internet",
      "seja aplicada em triplo, por ter sido o crime cometido ou divulgado em rede social da rede mundial de computadores",
      "não sofra aumento, pois as causas de aumento só incidem quando a vítima é funcionário público",
      "seja aumentada de metade, por ter sido o crime praticado contra pessoa determinada por meio digital",
    ],
    correta: 2,
    explicacao:
      "Imputar falsamente a alguém fato definido como crime é calúnia (art. 138 do CP). O art. 141, §2º, determina que, se o crime contra a honra é cometido ou divulgado em quaisquer modalidades das redes sociais da rede mundial de computadores, aplica-se em triplo a pena. O aumento de 1/3 do art. 141, III (meio que facilite a divulgação) é a regra geral, afastada pela norma específica das redes sociais.",
    origem: "banco",
  },
  {
    id: "ti-312",
    materia: "ti",
    topico: "Crimes em redes sociais e na internet (honra online, perseguição, violência psicológica com IA, arts. 216-B e 218-C, ECA e art. 266)",
    enunciado:
      "Inconformado com o fim do relacionamento, Bruno usa um programa de inteligência artificial para produzir áudios falsos com a voz da ex-companheira e os envia a ela, ameaçando divulgá-los, com o objetivo de controlar suas decisões e causar-lhe dano emocional.\n\nConsiderando o crime de violência psicológica contra a mulher (art. 147-B do CP), com a redação da Lei 15.123/2025, é correto afirmar que:",
    alternativas: [
      "a pena é aumentada de metade, porque o crime foi cometido mediante uso de inteligência artificial ou recurso tecnológico que altera imagem ou som da vítima",
      "a pena é aplicada em dobro, porque a violência psicológica foi praticada pela internet",
      "o uso de inteligência artificial não altera a pena, servindo apenas como circunstância judicial",
      "o crime só se configura se os áudios forem efetivamente divulgados a terceiros",
      "o fato configura apenas perseguição (art. 147-A), que absorve a violência psicológica",
    ],
    correta: 0,
    explicacao:
      "O art. 147-B do CP pune com reclusão de 6 meses a 2 anos e multa quem causa dano emocional à mulher para controlar suas ações, comportamentos ou decisões, mediante ameaça, constrangimento, manipulação ou outro meio. O parágrafo único, incluído pela Lei 15.123/2025, aumenta a pena de metade se o crime é cometido mediante uso de inteligência artificial ou de qualquer outro recurso tecnológico que altere imagem ou som da vítima. A divulgação a terceiros não é exigida, e a perseguição pressupõe reiteração.",
    origem: "banco",
  },
  {
    id: "ti-313",
    materia: "ti",
    topico: "Crimes em redes sociais e na internet (honra online, perseguição, violência psicológica com IA, arts. 216-B e 218-C, ECA e art. 266)",
    enunciado:
      "Após o término do namoro, Júlio publica em um grupo de mensagens, por vingança, um vídeo de sexo que gravou com o consentimento da ex-namorada durante o relacionamento, mas sem autorização dela para a divulgação.\n\nNos termos do art. 218-C do Código Penal, é correto afirmar que:",
    alternativas: [
      "o fato é atípico, porque a gravação foi feita com o consentimento da vítima",
      "o fato configura apenas o crime do art. 216-B, que pune o registro não autorizado de cena íntima",
      "o fato configura apenas difamação, com pena em triplo por ter sido praticado em rede social",
      "o crime depende de efetivo prejuízo financeiro à vítima",
      "o crime se configura, e a pena é aumentada de 1/3 a 2/3, porque o agente manteve relação íntima de afeto com a vítima e agiu com fim de vingança",
    ],
    correta: 4,
    explicacao:
      "O art. 218-C do CP pune quem publica ou divulga, por qualquer meio, inclusive sistema de informática ou telemática, cena de sexo, nudez ou pornografia sem o consentimento da vítima; o que importa é a falta de consentimento para a divulgação, e não para a gravação. O §1º aumenta a pena de 1/3 a 2/3 se o crime é praticado por agente que mantém ou manteve relação íntima de afeto com a vítima ou com o fim de vingança ou humilhação. O art. 216-B trata do registro não autorizado, e não é o caso.",
    origem: "banco",
  },
  {
    id: "ti-314",
    materia: "ti",
    topico: "Crimes em redes sociais e na internet (honra online, perseguição, violência psicológica com IA, arts. 216-B e 218-C, ECA e art. 266)",
    enunciado:
      "Um homem utiliza um aplicativo de inteligência artificial para inserir o rosto de uma colega de trabalho, maior de idade, em uma cena de nudez, criando uma montagem realista, que guarda em seu computador sem divulgar.\n\nA conduta de produzir a montagem se amolda:",
    alternativas: [
      "ao art. 218-C do CP, que pune a simples produção de cena de nudez",
      "ao art. 216-B, parágrafo único, do CP, que pune quem realiza montagem para incluir pessoa em cena de nudez ou ato sexual de caráter íntimo",
      "ao art. 241-C do ECA, que pune a simulação de participação em cena de sexo por montagem",
      "a nenhum tipo penal, pois não houve registro de cena real nem divulgação",
      "ao art. 154-A do CP, por ter sido usado dispositivo informático na montagem",
    ],
    correta: 1,
    explicacao:
      "O art. 216-B do CP, incluído pela Lei 13.772/2018, pune o registro não autorizado da intimidade sexual (detenção de 6 meses a 1 ano e multa), e seu parágrafo único estende a mesma pena a quem realiza montagem em fotografia, vídeo, áudio ou outro registro com o fim de incluir pessoa em cena de nudez ou ato sexual ou libidinoso de caráter íntimo. O art. 218-C exige oferecimento, publicação ou divulgação. O art. 241-C do ECA protege criança e adolescente, e a vítima é adulta.",
    origem: "banco",
  },
  {
    id: "ti-315",
    materia: "ti",
    topico: "Crimes em redes sociais e na internet (honra online, perseguição, violência psicológica com IA, arts. 216-B e 218-C, ECA e art. 266)",
    enunciado:
      "Sobre o crime de perseguição (art. 147-A do CP), praticado inclusive por meios digitais, analise as afirmativas.\n\nI. Uma única mensagem ameaçadora enviada por rede social basta para configurar o crime.\n\nII. A pena é aumentada de metade se o crime é cometido contra mulher por razões da condição de sexo feminino.\n\nIII. Somente se procede mediante representação.\n\nEstá correto o que se afirma em:",
    alternativas: ["I, apenas", "I e II, apenas", "I e III, apenas", "II e III, apenas", "I, II e III"],
    correta: 3,
    explicacao:
      "I está errada: o art. 147-A exige perseguição reiterada, por qualquer meio; uma mensagem isolada pode configurar ameaça (art. 147), mas não perseguição. II está correta: o §1º, II, aumenta a pena de metade quando o crime é cometido contra mulher por razões da condição de sexo feminino. III está correta: o §3º determina que somente se procede mediante representação.",
    origem: "banco",
  },
  {
    id: "ti-316",
    materia: "ti",
    topico: "Evidência digital: coleta, preservação, hash, imagem forense e cadeia de custódia (arts. 158-A a 158-F do CPP)",
    enunciado:
      "Na apreensão de um notebook em cumprimento de mandado de busca, a equipe deve observar as etapas da cadeia de custódia do art. 158-B do CPP. Associe as etapas às descrições.\n\n1. Fixação\n\n2. Isolamento\n\n3. Reconhecimento\n\n4. Descarte\n\n5. Processamento\n\n( ) Ato de distinguir um elemento como de potencial interesse para a produção da prova pericial.\n\n( ) Descrição detalhada do vestígio conforme se encontra no local, podendo ser ilustrada por fotografias, filmagens ou croqui.\n\n( ) Exame pericial em si, com manipulação do vestígio de acordo com a metodologia adequada, formalizado em laudo.\n\n( ) Ato de evitar que se altere o estado das coisas, preservando o ambiente imediato, mediato e relacionado aos vestígios.\n\n( ) Liberação do vestígio, respeitada a legislação vigente e, quando pertinente, mediante autorização judicial.\n\nA sequência correta, de cima para baixo, é:",
    alternativas: ["3, 2, 5, 1, 4", "1, 3, 5, 2, 4", "3, 1, 5, 2, 4", "3, 1, 4, 2, 5", "2, 1, 5, 3, 4"],
    correta: 2,
    explicacao:
      "Pelo art. 158-B do CPP: reconhecimento é distinguir o elemento de potencial interesse pericial (inciso I); isolamento é evitar a alteração do estado das coisas (inciso II); fixação é a descrição detalhada do vestígio como encontrado, com fotos, filmagens ou croqui (inciso III); processamento é o exame pericial em si, formalizado em laudo (inciso VIII); e descarte é a liberação do vestígio, quando pertinente com autorização judicial (inciso X). A sequência é 3, 1, 5, 2, 4.",
    origem: "banco",
    fonte: "FGV · PC-MG 2025 · Investigador (adaptada)",
  },
  {
    id: "ti-317",
    materia: "ti",
    topico: "Evidência digital: coleta, preservação, hash, imagem forense e cadeia de custódia (arts. 158-A a 158-F do CPP)",
    enunciado:
      "Ao espelhar o disco rígido apreendido, o perito calcula o hash SHA-256 da mídia original. Meses depois, antes de apresentar o material em juízo, recalcula o hash da imagem forense e obtém exatamente o mesmo valor.\n\nA coincidência dos valores demonstra que:",
    alternativas: [
      "a imagem não foi alterada desde a aquisição, o que preserva a integridade da evidência",
      "o conteúdo da imagem está criptografado e só pode ser lido pelo perito",
      "o autor dos arquivos contidos no disco está identificado",
      "os arquivos apagados do disco foram integralmente recuperados",
      "a cadeia de custódia está completa, o que dispensa o registro de quem manuseou o material",
    ],
    correta: 0,
    explicacao:
      "O hash é um resumo de tamanho fixo calculado sobre os dados; a alteração de um único bit muda o resultado. Valores iguais na aquisição e na conferência provam que a imagem é idêntica à original, ou seja, garantem a integridade. Hash não é criptografia, não identifica autoria nem recupera arquivos. A cadeia de custódia (art. 158-A do CPP) continua exigindo a documentação cronológica de posse e manuseio do vestígio.",
    origem: "banco",
  },
  {
    id: "ti-318",
    materia: "ti",
    topico: "Evidência digital: coleta, preservação, hash, imagem forense e cadeia de custódia (arts. 158-A a 158-F do CPP)",
    enunciado:
      "Ao cumprir mandado de busca, a equipe encontra o computador do investigado ligado, com um volume criptografado aberto e sessões de mensagens ativas. Há perito no local, com equipamento adequado.\n\nSegundo as boas práticas de preservação de evidência digital, a conduta mais adequada é:",
    alternativas: [
      "desligar imediatamente o computador pelo botão, para impedir que o investigado apague dados remotamente",
      "copiar para um pendrive, pelo explorador de arquivos, os documentos que parecerem relevantes",
      "reiniciar a máquina para encerrar os processos e só então espelhar o disco",
      "navegar pelas conversas abertas e fotografar a tela, o que dispensa outras coletas",
      "coletar primeiro os dados mais voláteis, como a memória RAM, antes de desligar o equipamento, documentando cada passo para o posterior espelhamento do disco",
    ],
    correta: 4,
    explicacao:
      "Pela ordem de volatilidade (RFC 3227), coletam-se primeiro os dados que se perdem com mais facilidade, como a memória RAM, que guarda chaves de criptografia, senhas e conexões ativas. Desligar ou reiniciar a máquina destruiria esses dados e poderia fechar o volume criptografado. Copiar arquivos pelo explorador altera metadados e não é imagem forense. Cada passo deve ser registrado, em respeito às etapas de fixação e coleta da cadeia de custódia (art. 158-B, III e IV, do CPP).",
    origem: "banco",
  },
  {
    id: "ti-319",
    materia: "ti",
    topico: "Evidência digital: coleta, preservação, hash, imagem forense e cadeia de custódia (arts. 158-A a 158-F do CPP)",
    enunciado:
      "Durante uma prisão em flagrante por tráfico de drogas, o agente apreende o celular do preso, que continua recebendo mensagens a todo momento.\n\nÀ luz da jurisprudência do STJ e das boas práticas de preservação da prova digital, a conduta correta é:",
    alternativas: [
      "abrir o aplicativo de mensagens e ler as conversas, pois a prisão em flagrante autoriza o acesso imediato aos dados armazenados",
      "isolar o aparelho da rede, por modo avião ou bolsa de Faraday, e aguardar autorização judicial para acessar o conteúdo armazenado",
      "espelhar o WhatsApp do preso no computador da delegacia, pelo WhatsApp Web, para acompanhar as novas conversas",
      "restaurar o aparelho às configurações de fábrica para evitar a destruição remota de provas",
      "entregar o aparelho a um familiar do preso, pois celular não pode ser apreendido sem mandado",
    ],
    correta: 1,
    explicacao:
      "O STJ considera ilícita a prova obtida pelo acesso, sem autorização judicial, às mensagens de celular apreendido em flagrante, e também invalida o espelhamento do WhatsApp Web pela polícia, por falta de previsão legal. O aparelho, que é vestígio (art. 158-A, §3º, do CPP), deve ser isolado da rede para evitar apagamento remoto e alteração de dados, e o acesso ao conteúdo depende de ordem judicial. A apreensão dos objetos relacionados ao fato é dever da autoridade (art. 6º, II, do CPP).",
    origem: "banco",
  },
  {
    id: "ti-320",
    materia: "ti",
    topico: "Evidência digital: coleta, preservação, hash, imagem forense e cadeia de custódia (arts. 158-A a 158-F do CPP)",
    enunciado:
      "Logo após o isolamento do local de um homicídio, um policial que não integra a equipe pericial retira do local um pendrive encontrado sobre a mesa da vítima, antes da liberação pelo perito, para “adiantar” a análise na delegacia.\n\nSegundo o Código de Processo Penal, essa conduta:",
    alternativas: [
      "é regular, pois qualquer policial pode coletar vestígios digitais",
      "é regular, desde que o pendrive seja lacrado ao chegar à delegacia",
      "configura apenas falta disciplinar, sem repercussão penal",
      "é proibida e tipificada como fraude processual, pois é vedada a remoção de vestígios do local antes da liberação pelo perito responsável",
      "é permitida, porque a coleta cabe a quem primeiro reconhecer o vestígio",
    ],
    correta: 3,
    explicacao:
      "O art. 158-C, §2º, do CPP proíbe a entrada em locais isolados e a remoção de quaisquer vestígios antes da liberação pelo perito responsável, e tipifica essa conduta como fraude processual. A coleta deve ser feita preferencialmente por perito oficial (art. 158-C, caput). Quem reconhece o vestígio fica responsável por sua preservação (art. 158-A, §2º), e não autorizado a removê-lo.",
    origem: "banco",
  },
  {
    id: "ti-321",
    materia: "ti",
    topico: "Rastreamento e recuperação de informações (IP, porta lógica, registros de conexão e de aplicação, dados cadastrais, arquivos apagados)",
    enunciado:
      "Para identificar o autor de ameaças feitas por um perfil falso, a polícia obteve da rede social, por ordem judicial, o endereço IP público, a data e a hora do acesso. A operadora informa que, naquele horário, o mesmo IP público era compartilhado por centenas de clientes, em razão do uso de CGNAT.\n\nPara individualizar o assinante, é necessário obter também:",
    alternativas: [
      "a porta lógica de origem da conexão, com o horário exato e o fuso de referência",
      "o endereço MAC do roteador central da operadora",
      "o endereço do servidor DNS utilizado pela rede social",
      "a máscara de sub-rede do provedor de aplicação",
      "apenas a cidade de onde partiu o acesso, informada pela geolocalização do IP",
    ],
    correta: 0,
    explicacao:
      "No CGNAT, vários clientes compartilham o mesmo IP público e são diferenciados pela porta lógica de origem. Por isso, o provedor de aplicação deve informar IP, porta, data e hora, com o fuso (de preferência UTC), e o STJ reconhece o dever de fornecer a porta lógica. Com esses dados e ordem judicial, o provedor de conexão, que guarda os registros por 1 ano (art. 13 da Lei 12.965/2014), aponta o assinante. A geolocalização do IP é imprecisa e não identifica pessoa.",
    origem: "banco",
  },
  {
    id: "ti-322",
    materia: "ti",
    topico: "Rastreamento e recuperação de informações (IP, porta lógica, registros de conexão e de aplicação, dados cadastrais, arquivos apagados)",
    enunciado:
      "O delegado que investiga uma extorsão praticada por e-mail teme que os registros de acesso do suspeito sejam descartados pelo provedor antes que se obtenha autorização judicial.\n\nDe acordo com o Marco Civil da Internet (Lei 12.965/2014), é correto afirmar que:",
    alternativas: [
      "o provedor de aplicação deve guardar os registros de acesso por 1 ano, prazo que não pode ser ampliado",
      "o delegado pode requisitar diretamente ao provedor o fornecimento imediato dos registros, sem ordem judicial",
      "a autoridade policial pode requerer cautelarmente a guarda dos registros por prazo superior ao legal, devendo pedir a autorização judicial de acesso em até 60 dias",
      "o requerimento cautelar de guarda depende de prévia autorização judicial",
      "o provedor de conexão é obrigado a guardar os registros de acesso a aplicações por 6 meses",
    ],
    correta: 2,
    explicacao:
      "O art. 15 da Lei 12.965/2014 obriga o provedor de aplicação a guardar os registros de acesso por 6 meses, e o §2º permite à autoridade policial ou administrativa ou ao Ministério Público requerer cautelarmente a guarda por prazo superior. Pelo art. 13, §3º, aplicável por remissão, o requerente tem 60 dias, contados do requerimento, para pedir a autorização judicial de acesso. O fornecimento depende de ordem judicial (art. 15, §3º), e o provedor de conexão é proibido de guardar registros de acesso a aplicações (art. 14).",
    origem: "banco",
  },
  {
    id: "ti-323",
    materia: "ti",
    topico: "Rastreamento e recuperação de informações (IP, porta lógica, registros de conexão e de aplicação, dados cadastrais, arquivos apagados)",
    enunciado:
      "Analise as afirmativas sobre o acesso a dados na investigação de crimes praticados pela internet, à luz do Marco Civil da Internet.\n\nI. Os dados cadastrais que informem qualificação pessoal, filiação e endereço podem ser requisitados, sem ordem judicial, pelas autoridades administrativas que detenham competência legal para tanto.\n\nII. O fornecimento dos registros de conexão e de acesso a aplicações de internet depende de ordem judicial.\n\nIII. O conteúdo das comunicações privadas armazenadas só pode ser disponibilizado mediante ordem judicial.\n\nEstá correto o que se afirma em:",
    alternativas: ["I, apenas", "II, apenas", "I e II, apenas", "II e III, apenas", "I, II e III"],
    correta: 4,
    explicacao:
      "Todas estão corretas. O art. 10, §3º, da Lei 12.965/2014 ressalva o acesso aos dados cadastrais (qualificação pessoal, filiação e endereço) pelas autoridades administrativas com competência legal para requisitá-los. Os registros de conexão e de acesso a aplicações só são fornecidos por ordem judicial (arts. 10, §1º, e 22). O conteúdo das comunicações privadas também depende de ordem judicial (art. 10, §2º, e art. 7º, III).",
    origem: "banco",
  },
  {
    id: "ti-324",
    materia: "ti",
    topico: "Inteligência cibernética, deep web e dark web e infiltração virtual de agentes (Lei 12.850, arts. 10-A a 10-D; ECA, art. 190-A)",
    enunciado:
      "Em investigação de organização criminosa que vende armas por grupos fechados na internet, o delegado representa pela infiltração virtual de agentes prevista no art. 10-A da Lei 12.850/2013.\n\nSobre a medida, é correto afirmar que:",
    alternativas: [
      "pode ser determinada diretamente pelo delegado, com comunicação posterior ao juiz em 24 horas",
      "depende de autorização judicial, ouvido o Ministério Público, e será autorizada por até 6 meses, renováveis, desde que o total não exceda 720 dias",
      "pode ser autorizada por até 90 dias, renováveis, com limite total de 360 dias",
      "é admitida mesmo que a prova possa ser produzida por outros meios disponíveis, por ser medida pouco invasiva",
      "pode ser executada por particular contratado como colaborador, desde que treinado pela polícia",
    ],
    correta: 1,
    explicacao:
      "O art. 10-A da Lei 12.850/2013 admite a infiltração de agentes de polícia na internet mediante autorização judicial; havendo representação do delegado, o juiz ouve o Ministério Público antes de decidir (§2º). A medida só cabe se a prova não puder ser produzida por outros meios (§3º) e é autorizada por até 6 meses, sem prejuízo de renovações, desde que o total não exceda 720 dias e seja demonstrada sua efetiva necessidade (§4º). O prazo de 90 dias é o da infiltração prevista no ECA (art. 190-A).",
    origem: "banco",
  },
  {
    id: "ti-325",
    materia: "ti",
    topico: "Inteligência cibernética, deep web e dark web e infiltração virtual de agentes (Lei 12.850, arts. 10-A a 10-D; ECA, art. 190-A)",
    enunciado:
      "Sobre as camadas da internet e o rastreamento de ativos, temas relevantes para a inteligência cibernética, analise as afirmativas.\n\nI. A deep web corresponde ao conteúdo não indexado por mecanismos de busca, como webmails, intranets e áreas protegidas por login, e é majoritariamente lícita.\n\nII. A dark web é a parte da internet acessível apenas com software específico, como o Tor, que usa endereços .onion e roteamento em camadas.\n\nIII. Transações com criptomoedas registradas em blockchain são anônimas e irrastreáveis, razão pela qual a investigação deve se limitar à apreensão de equipamentos.\n\nEstá correto o que se afirma em:",
    alternativas: ["I, apenas", "II, apenas", "III, apenas", "I e II, apenas", "I, II e III"],
    correta: 3,
    explicacao:
      "I e II estão corretas: deep web é tudo o que não é indexado (em geral lícito) e dark web é a porção que exige software próprio, como o Tor; deep web não é sinônimo de dark web. III está errada: as transações em blockchain são públicas e pseudônimas, e podem ser rastreadas até prestadoras de serviços de ativos virtuais que identificam clientes, reguladas pela Lei 14.478/2022, a mesma que criou a fraude com ativos virtuais (art. 171-A do CP).",
    origem: "banco",
  },
  {
    id: "ti-326",
    materia: "ti",
    topico: "Marco Civil da Internet detalhado (princípios, neutralidade, guarda de registros e arts. 19 e 21 após o STF, Temas 533 e 987)",
    enunciado:
      "Uma rede social exibe, como anúncio pago e impulsionado, a propaganda de um falso investimento que aplica golpes nos usuários. A plataforma não recebeu notificação prévia nem ordem judicial.\n\nDe acordo com a tese fixada pelo STF em 2025 no julgamento sobre o art. 19 do Marco Civil da Internet (Temas 987 e 533), é correto afirmar que:",
    alternativas: [
      "presume-se a responsabilidade da plataforma pelo conteúdo ilícito veiculado em anúncio ou impulsionamento pago, independentemente de notificação",
      "a plataforma só responde se descumprir ordem judicial específica, pois a redação original do art. 19 foi integralmente mantida",
      "a plataforma nunca responde por conteúdo de terceiros, por força da liberdade de expressão",
      "a responsabilidade depende de notificação feita pelo Ministério Público, único legitimado a pedir a remoção",
      "a tese tem efeitos retroativos e alcança todos os anúncios veiculados desde a vigência da lei, em 2014",
    ],
    correta: 0,
    explicacao:
      "O STF declarou o art. 19 da Lei 12.965/2014 parcialmente inconstitucional. Pela tese, há presunção de responsabilidade dos provedores em caso de conteúdos ilícitos em anúncios e impulsionamentos pagos ou em rede artificial de distribuição (robôs), independentemente de notificação; o provedor pode afastá-la provando que atuou de modo diligente e em tempo razoável. Como regra, passou a valer o modelo do art. 21 (notificação extrajudicial), e os crimes contra a honra seguem o art. 19. Os efeitos foram modulados para o futuro.",
    origem: "banco",
  },
  {
    id: "ti-327",
    materia: "ti",
    topico: "Marco Civil da Internet detalhado (princípios, neutralidade, guarda de registros e arts. 19 e 21 após o STF, Temas 533 e 987)",
    enunciado:
      "Um provedor de conexão passa a reduzir deliberadamente a velocidade de acesso de seus clientes a um serviço de vídeo concorrente do seu próprio, sem qualquer justificativa técnica.\n\nÀ luz da Lei 12.965/2014, a conduta viola:",
    alternativas: [
      "o princípio da finalidade, previsto na Lei Geral de Proteção de Dados",
      "o dever de guarda dos registros de conexão pelo prazo de 1 ano",
      "o dever de tratar de forma isonômica quaisquer pacotes de dados, sem distinção por conteúdo, origem e destino, serviço, terminal ou aplicação",
      "a regra de responsabilidade por conteúdo gerado por terceiros prevista no art. 19",
      "a inviolabilidade e o sigilo do fluxo das comunicações pela internet",
    ],
    correta: 2,
    explicacao:
      "O art. 9º da Lei 12.965/2014 consagra a neutralidade de rede: o responsável pela transmissão, comutação ou roteamento tem o dever de tratar de forma isonômica quaisquer pacotes de dados, sem distinção por conteúdo, origem e destino, serviço, terminal ou aplicação. A discriminação ou degradação do tráfego só é admitida por requisitos técnicos indispensáveis ou para priorizar serviços de emergência (§1º). A preservação da neutralidade também é princípio do uso da internet (art. 3º, IV).",
    origem: "banco",
  },
  {
    id: "ti-328",
    materia: "ti",
    topico: "LGPD detalhada (princípios, bases legais, dados sensíveis, direitos do titular, agentes de tratamento, ANPD e sanções)",
    enunciado:
      "Uma loja virtual instala em seu site cookies de publicidade comportamental, não essenciais ao funcionamento da página, que coletam dados de navegação dos visitantes para formar perfis de consumo.\n\nÀ luz da Lei Geral de Proteção de Dados (Lei 13.709/2018), o fundamento para exigir que o site obtenha o consentimento do titular antes de ativar esses cookies é:",
    alternativas: [
      "o art. 5º, X, que define tratamento e, por si só, impõe o consentimento para toda operação com dados pessoais",
      "o art. 8º, que admite o consentimento genérico, dado uma única vez para quaisquer finalidades futuras",
      "o art. 9º, que impõe o consentimento para qualquer coleta feita por meio eletrônico",
      "o art. 19 do Marco Civil da Internet, que exige a remoção imediata dos cookies ao fim da navegação",
      "o art. 7º, I, que prevê o consentimento do titular como hipótese de tratamento, salvo se presente outra base legal aplicável",
    ],
    correta: 4,
    explicacao:
      "O art. 7º, I, da LGPD prevê o fornecimento de consentimento pelo titular como uma das hipóteses que autorizam o tratamento; para cookies não essenciais de publicidade, em regra não há outra base legal, de modo que o consentimento é exigido. O art. 5º, X, apenas define tratamento. O art. 8º, §4º, declara nulas as autorizações genéricas, pois o consentimento deve referir-se a finalidades determinadas. O art. 9º trata do direito de acesso facilitado às informações sobre o tratamento. O art. 19 do Marco Civil cuida da responsabilidade por conteúdo de terceiros.",
    origem: "banco",
    fonte: "FGV · PC-PI 2025 · Oficial Investigador (adaptada)",
  },
  {
    id: "ti-329",
    materia: "ti",
    topico: "LGPD detalhada (princípios, bases legais, dados sensíveis, direitos do titular, agentes de tratamento, ANPD e sanções)",
    enunciado:
      "Uma empresa privada e uma secretaria estadual sofrem vazamentos de dados pessoais por falhas de segurança, e a ANPD instaura processos sancionadores contra ambas.\n\nConsiderando o art. 52 da LGPD, é correto afirmar que:",
    alternativas: [
      "ambas podem receber multa simples de até 2% do faturamento, sem limite de valor",
      "a empresa pode receber multa simples de até 2% do faturamento no Brasil, limitada a R$ 50 milhões por infração, e a secretaria não se sujeita às multas, mas pode receber sanções como advertência e publicização da infração",
      "a secretaria, por ser órgão público, não pode receber nenhuma sanção da ANPD",
      "a multa simples é limitada a R$ 50 milhões por ano, somadas todas as infrações da empresa",
      "a suspensão do exercício da atividade de tratamento pode ser aplicada por até 2 anos, improrrogáveis",
    ],
    correta: 1,
    explicacao:
      "O art. 52, II, da LGPD prevê multa simples de até 2% do faturamento da pessoa jurídica de direito privado, grupo ou conglomerado no Brasil no último exercício, limitada a R$ 50 milhões por infração. O §3º permite aplicar às entidades e órgãos públicos sanções como advertência, publicização, bloqueio, eliminação e suspensões, mas não as multas. A suspensão parcial do banco de dados e a suspensão da atividade de tratamento são de até 6 meses, prorrogáveis por igual período.",
    origem: "banco",
  },
  {
    id: "ti-330",
    materia: "ti",
    topico: "Sigilo funcional e uso ético da tecnologia e das informações institucionais (arts. 313-A, 313-B e 325 do CP)",
    enunciado:
      "Caio, agente de polícia, conversa com o irmão sobre o trabalho e, por descuido, sem intenção de divulgar, menciona o nome de um investigado em operação sigilosa ainda não deflagrada. O fato não causa prejuízo à Administração nem a terceiros.\n\nQuanto ao crime de violação de sigilo funcional (art. 325 do CP), é correto afirmar que Caio:",
    alternativas: [
      "responde pela forma culposa do art. 325, com pena reduzida de metade",
      "responde pela forma qualificada do §2º, pois a operação era sigilosa",
      "responde pelo art. 325, §1º, II, por ter utilizado indevidamente o acesso restrito",
      "não responde por esse crime, pois o art. 325 só admite a forma dolosa, sem prejuízo de eventual responsabilidade disciplinar",
      "responde por prevaricação (art. 319), por ter agido para satisfazer interesse pessoal",
    ],
    correta: 3,
    explicacao:
      "O art. 325 do CP pune revelar fato de que se tem ciência em razão do cargo e que deva permanecer em segredo, ou facilitar-lhe a revelação, e não prevê modalidade culposa; pelo art. 18, parágrafo único, do CP, só se pune a culpa quando a lei a prevê expressamente. A qualificadora do §2º exige dano à Administração ou a outrem, que não houve. A conduta negligente pode gerar apenas responsabilidade administrativa.",
    origem: "banco",
    fonte: "FGV · PC-PI 2025 · Oficial Investigador (adaptada)",
  },
  {
    id: "ti-331",
    materia: "ti",
    topico: "Sigilo funcional e uso ético da tecnologia e das informações institucionais (arts. 313-A, 313-B e 325 do CP)",
    enunciado:
      "Um agente de polícia usa seu login no sistema de consultas da corporação para pesquisar os antecedentes e o endereço do novo namorado da filha, sem relação com qualquer investigação em curso, e não repassa as informações a ninguém.\n\nEssa conduta se amolda, em tese, ao crime de:",
    alternativas: [
      "inserção de dados falsos em sistema de informações (art. 313-A do CP)",
      "modificação ou alteração não autorizada de sistema de informações (art. 313-B do CP)",
      "invasão de dispositivo informático (art. 154-A do CP), de ação penal condicionada à representação",
      "advocacia administrativa (art. 321 do CP)",
      "violação de sigilo funcional na modalidade de utilizar-se indevidamente do acesso restrito (art. 325, §1º, II, do CP)",
    ],
    correta: 4,
    explicacao:
      "O art. 325, §1º, II, do CP, incluído pela Lei 9.983/2000, pune com as penas do caput quem se utiliza, indevidamente, do acesso restrito a sistemas ou bancos de dados da Administração, ainda que não revele a informação a terceiros. Não houve inserção ou exclusão de dados (art. 313-A) nem alteração do sistema ou programa (art. 313-B). O art. 154-A pressupõe invasão sem autorização, e o agente tinha credencial válida. Advocacia administrativa exige patrocinar interesse privado perante a Administração.",
    origem: "banco",
  },
  {
    id: "ti-332",
    materia: "ti",
    topico: "Sigilo funcional e uso ético da tecnologia e das informações institucionais (arts. 313-A, 313-B e 325 do CP)",
    enunciado:
      "Um escrivão de polícia, autorizado a operar o sistema de mandados de prisão, exclui do banco de dados, em troca de dinheiro, o registro de um mandado de prisão válido expedido contra um conhecido.\n\nQuanto ao crime relacionado à manipulação do sistema, a conduta configura:",
    alternativas: [
      "inserção de dados falsos em sistema de informações (art. 313-A do CP), que pune o funcionário autorizado que exclui indevidamente dados corretos com o fim de obter vantagem indevida",
      "modificação ou alteração não autorizada de sistema de informações (art. 313-B do CP), punida com detenção de 3 meses a 2 anos",
      "violação de sigilo funcional (art. 325 do CP), na forma simples",
      "invasão de dispositivo informático (art. 154-A do CP), por ter apagado dados",
      "dano simples (art. 163 do CP), por ter destruído informação de terceiro",
    ],
    correta: 0,
    explicacao:
      "O art. 313-A do CP pune o funcionário autorizado que insere ou facilita a inserção de dados falsos, ou altera ou exclui indevidamente dados corretos nos sistemas informatizados ou bancos de dados da Administração Pública, com o fim de obter vantagem indevida para si ou para outrem ou para causar dano, com reclusão de 2 a 12 anos e multa. O art. 313-B trata da modificação do próprio sistema ou programa, e não dos dados. O recebimento do dinheiro pode configurar, ainda, corrupção passiva (art. 317).",
    origem: "banco",
  },
  {
    id: "ti-333",
    materia: "ti",
    topico: "ECA Digital (Lei 15.211/2025): proteção de crianças e adolescentes em ambientes digitais",
    enunciado:
      "Uma plataforma digital que hospeda conteúdo pornográfico passou a exibir, na entrada do site, apenas um aviso em que o usuário clica para declarar que tem mais de 18 anos. À luz do Estatuto Digital da Criança e do Adolescente (Lei nº 15.211/2025), essa providência é",
    alternativas: [
      "suficiente, porque a lei admite a autodeclaração de idade desde que o aviso seja exibido a cada acesso.",
      "suficiente, porque a lei só alcança produtos e serviços desenvolvidos especificamente para crianças e adolescentes.",
      "insuficiente, porque a lei exige mecanismos confiáveis de verificação de idade a cada acesso e veda a autodeclaração.",
      "insuficiente, porque a lei proíbe a oferta de conteúdo pornográfico na internet brasileira, inclusive para adultos.",
      "irrelevante, porque a lei só se aplica a fornecedores com sede no território nacional.",
    ],
    correta: 2,
    explicacao:
      "O art. 9º da Lei 15.211/2025 exige que o fornecedor de conteúdo impróprio para menores de 18 anos adote medidas eficazes para impedir o acesso de crianças e adolescentes, e o §1º determina mecanismos confiáveis de verificação de idade a cada acesso, vedada a autodeclaração; o §2º inclui o material pornográfico. A lei não proíbe pornografia para adultos, alcança também serviços de acesso provável por crianças e adolescentes (não só os direcionados a eles) e se aplica independentemente da localização do fornecedor (art. 1º).",
    origem: "banco",
    fonte: "Lei 15.211/2025 (ECA Digital), texto do Planalto",
  },
  {
    id: "ti-334",
    materia: "ti",
    topico: "ECA Digital (Lei 15.211/2025): proteção de crianças e adolescentes em ambientes digitais",
    enunciado:
      "Um jogo eletrônico de classificação indicativa livre vende, por dinheiro real, caixas-surpresa que entregam itens virtuais aleatórios ao jogador. Pelo Estatuto Digital da Criança e do Adolescente (Lei nº 15.211/2025), essa prática",
    alternativas: [
      "é vedada nos jogos eletrônicos direcionados a crianças e adolescentes ou de acesso provável por eles.",
      "é permitida, desde que os responsáveis legais autorizem cada compra feita no aplicativo.",
      "é permitida, desde que o jogo informe a probabilidade de cada item sorteado.",
      "configura crime previsto na própria lei, punido com reclusão.",
      "só é proibida se o jogo for desenvolvido por empresa estrangeira.",
    ],
    correta: 0,
    explicacao:
      "O art. 20 da Lei 15.211/2025 veda as caixas de recompensa (loot boxes) oferecidas em jogos eletrônicos direcionados a crianças e adolescentes ou de acesso provável por eles, nos termos da classificação indicativa. A lei não abre exceção para autorização dos pais nem para a divulgação das probabilidades, e o ECA Digital não cria crimes: o descumprimento gera as sanções administrativas do art. 35 (advertência, multa, suspensão e proibição das atividades).",
    origem: "banco",
    fonte: "Lei 15.211/2025 (ECA Digital), texto do Planalto",
  },
  {
    id: "ti-335",
    materia: "ti",
    topico: "ECA Digital (Lei 15.211/2025): proteção de crianças e adolescentes em ambientes digitais",
    enunciado:
      "Um provedor de rede social descumpriu obrigações do Estatuto Digital da Criança e do Adolescente (Lei nº 15.211/2025). Entre as penalidades previstas no art. 35 da lei está a",
    alternativas: [
      "prisão administrativa dos administradores da empresa, por até 30 dias.",
      "multa simples de até 2% do faturamento, limitada a R$ 5 milhões por infração.",
      "dissolução compulsória da pessoa jurídica, decretada pela autoridade administrativa.",
      "advertência, com prazo de até 90 dias para a adoção de medidas corretivas.",
      "multa simples de até 10% do faturamento do grupo econômico no Brasil no seu último exercício.",
    ],
    correta: 4,
    explicacao:
      "O art. 35 da Lei 15.211/2025 prevê advertência com prazo de até 30 dias para medidas corretivas; multa simples de até 10% do faturamento do grupo econômico no Brasil no último exercício (ou, sem faturamento, de R$ 10 a R$ 1.000 por usuário cadastrado, limitada a R$ 50 milhões por infração); suspensão temporária; e proibição de exercício das atividades. Não há prisão administrativa nem dissolução da empresa, e o percentual de 2% é o da multa da LGPD (art. 52, II).",
    origem: "banco",
    fonte: "Lei 15.211/2025 (ECA Digital), texto do Planalto",
  },
  {
    id: "ti-336",
    materia: "ti",
    topico: "ECA Digital (Lei 15.211/2025): proteção de crianças e adolescentes em ambientes digitais",
    enunciado:
      "Durante a moderação de uma plataforma de mensagens disponível no Brasil, a empresa detecta material de aparente abuso sexual infantil. Segundo o Estatuto Digital da Criança e do Adolescente (Lei nº 15.211/2025), o fornecedor deve",
    alternativas: [
      "apenas bloquear a conta do usuário, aguardando eventual requisição judicial para agir.",
      "remover o conteúdo e comunicá-lo às autoridades nacionais e internacionais competentes, na forma de regulamento.",
      "manter o conteúdo disponível até ordem judicial específica, para não prejudicar a investigação.",
      "comunicar o fato apenas aos responsáveis legais da vítima, que decidirão sobre a notícia do crime.",
      "excluir o conteúdo e todos os registros relacionados, para proteger a intimidade da vítima.",
    ],
    correta: 1,
    explicacao:
      "O art. 27 da Lei 15.211/2025 obriga os fornecedores de produtos ou serviços de tecnologia da informação disponíveis no território nacional a remover e comunicar os conteúdos de aparente exploração, abuso sexual, sequestro e aliciamento detectados em seus produtos ou serviços às autoridades nacionais e internacionais competentes, na forma de regulamento. O dever não depende de ordem judicial nem fica a critério da família, e apagar todos os registros destruiria a prova.",
    origem: "banco",
    fonte: "Lei 15.211/2025 (ECA Digital), texto do Planalto",
  },
  {
    id: "ti-337",
    materia: "ti",
    topico: "Criptoativos e fraudes com ativos virtuais (art. 171-A do CP, Lei 14.478/2022)",
    enunciado:
      "Um grupo cria uma suposta plataforma de investimento em criptomoedas, oferece carteiras digitais com rendimento garantido e, por meio de relatórios falsos de lucro, mantém os clientes em erro enquanto desvia os valores depositados. A conduta se amolda, em tese, ao crime de",
    alternativas: [
      "furto mediante fraude eletrônica (art. 155, §4º-B, do CP).",
      "invasão de dispositivo informático (art. 154-A do CP).",
      "lavagem de dinheiro com aumento de pena pelo uso de ativo virtual (Lei nº 9.613/1998).",
      "fraude com a utilização de ativos virtuais, valores mobiliários ou ativos financeiros (art. 171-A do CP).",
      "apropriação indébita (art. 168 do CP), por se tratar de valores entregues voluntariamente.",
    ],
    correta: 3,
    explicacao:
      "O art. 171-A do CP, incluído pela Lei 14.478/2022, pune quem organiza, gere, oferta ou distribui carteiras ou intermedia operações que envolvam ativos virtuais, valores mobiliários ou quaisquer ativos financeiros com o fim de obter vantagem ilícita, em prejuízo alheio, induzindo ou mantendo alguém em erro, mediante artifício, ardil ou qualquer outro meio fraudulento (reclusão de 4 a 8 anos e multa). Não é furto, porque as vítimas entregam os valores enganadas; não há invasão de dispositivo; não é apropriação indébita, porque a fraude existe desde a captação; e a lavagem pressupõe ocultar ou dissimular bens provenientes de infração penal, conduta diferente da descrita.",
    origem: "banco",
    fonte: "CP, art. 171-A; Leis 14.478/2022, 9.613/1998 e 7.492/1986 (Planalto)",
  },
  {
    id: "ti-338",
    materia: "ti",
    topico: "Criptoativos e fraudes com ativos virtuais (art. 171-A do CP, Lei 14.478/2022)",
    enunciado:
      "Sobre o crime de fraude com a utilização de ativos virtuais, valores mobiliários ou ativos financeiros, previsto no art. 171-A do Código Penal, é correto afirmar que",
    alternativas: [
      "foi incluído pela Lei nº 14.155/2021, junto com a fraude eletrônica do art. 171, §2º-A.",
      "a pena é de reclusão, de 4 a 8 anos, e multa.",
      "a pena é de detenção, de 6 meses a 2 anos, e multa, por se tratar de crime contra a economia popular.",
      "só se configura quando o ativo envolvido for criptomoeda, excluídos os valores mobiliários.",
      "dispensa a indução ou a manutenção da vítima em erro, bastando a gestão irregular da carteira.",
    ],
    correta: 1,
    explicacao:
      "O art. 171-A foi incluído pela Lei 14.478/2022 (marco legal dos criptoativos), e não pela Lei 14.155/2021. A pena é de reclusão, de 4 a 8 anos, e multa. O tipo abrange ativos virtuais, valores mobiliários ou quaisquer ativos financeiros e exige vantagem ilícita em prejuízo alheio, com a vítima induzida ou mantida em erro mediante artifício, ardil ou outro meio fraudulento. A detenção de 6 meses a 2 anos é a pena dos crimes contra a economia popular do art. 2º da Lei 1.521/1951, como a pirâmide financeira.",
    origem: "banco",
    fonte: "CP, art. 171-A; Leis 14.478/2022, 9.613/1998 e 7.492/1986 (Planalto)",
  },
  {
    id: "ti-339",
    materia: "ti",
    topico: "Criptoativos e fraudes com ativos virtuais (art. 171-A do CP, Lei 14.478/2022)",
    enunciado:
      "Na Lei de Lavagem de Dinheiro (Lei nº 9.613/1998), com a redação dada pela Lei nº 14.478/2022, a utilização de ativo virtual para cometer o crime",
    alternativas: [
      "passou a ser elementar de um tipo autônomo, com pena própria de reclusão de 4 a 8 anos.",
      "afasta a lavagem, que exige a movimentação de moeda de curso forçado.",
      "é circunstância que reduz a pena, se o agente colaborar na identificação da carteira.",
      "só é considerada se a corretora utilizada tiver sede no exterior.",
      "é causa de aumento de pena de 1/3 a 2/3, ao lado da reiteração e da atuação por intermédio de organização criminosa.",
    ],
    correta: 4,
    explicacao:
      "O art. 1º, §4º, da Lei 9.613/1998, na redação da Lei 14.478/2022, aumenta a pena de 1/3 a 2/3 se os crimes forem cometidos de forma reiterada, por intermédio de organização criminosa ou por meio da utilização de ativo virtual. A Lei 14.478 não criou tipo autônomo de lavagem (o tipo novo foi o art. 171-A do CP, de fraude), e a lavagem não exige moeda de curso forçado: alcança bens, direitos ou valores provenientes de infração penal.",
    origem: "banco",
    fonte: "CP, art. 171-A; Leis 14.478/2022, 9.613/1998 e 7.492/1986 (Planalto)",
  },
  {
    id: "ti-340",
    materia: "ti",
    topico: "Criptoativos e fraudes com ativos virtuais (art. 171-A do CP, Lei 14.478/2022)",
    enunciado:
      "Em investigação de golpe pago em criptomoeda, a equipe identifica na blockchain o endereço da carteira que recebeu os valores e descobre que eles foram convertidos em reais por uma corretora (exchange) que atua no Brasil. Sobre esse cenário, é correto afirmar que",
    alternativas: [
      "a pessoa jurídica que oferece serviços de intermediação, negociação ou custódia de ativos virtuais é equiparada a instituição financeira para os fins da lei dos crimes contra o Sistema Financeiro Nacional.",
      "o endereço da carteira, por constar em blockchain pública, já identifica o titular pelo nome, dispensando diligências junto à corretora.",
      "as transações registradas na blockchain podem ser apagadas pela corretora a pedido do cliente, razão pela qual a preservação deve ser imediata.",
      "a corretora, por não ser banco, não pode ser obrigada a fornecer informações sobre seus clientes, nem mesmo por ordem judicial.",
      "a conversão dos valores em reais impede o rastreamento, porque a moeda nacional não é ativo virtual.",
    ],
    correta: 0,
    explicacao:
      "A Lei 14.478/2022 incluiu o inciso I-A no parágrafo único do art. 1º da Lei 7.492/1986, equiparando a instituição financeira a pessoa jurídica que ofereça serviços referentes a operações com ativos virtuais, inclusive intermediação, negociação ou custódia. A blockchain é pública e rastreável, mas pseudônima: o endereço não traz o nome do titular, e a identificação costuma vir dos dados mantidos pela corretora, que pode ser obrigada judicialmente a fornecê-los. Os registros da blockchain não podem ser apagados por uma corretora, e a conversão em reais não apaga o rastro das operações anteriores.",
    origem: "banco",
    fonte: "CP, art. 171-A; Leis 14.478/2022, 9.613/1998 e 7.492/1986 (Planalto)",
  },
];
