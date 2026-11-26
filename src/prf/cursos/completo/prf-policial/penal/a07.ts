import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-07",
  resumo: {
    ideia:
      "Os crimes contra o patrimônio giram em torno de uma pergunta: como o bem saiu da vítima? Sem violência é furto, com violência é roubo, com colaboração forçada é extorsão, com engano é estelionato, e quando o agente já tinha a posse é apropriação indébita. A aula vê também usurpação, dano, outras fraudes, receptação, imunidades e os patrimoniais hediondos. As penas subiram muito em 2026 (Leis 15.358, 15.397 e 15.517).",
    itens: [
      {
        parte: "1. Furto: noções (arts. 155 e 156)",
        termo: "Furto simples e consumação",
        faz: "Subtrair, para si ou para outrem, coisa alheia móvel: reclusão de 1 a 6 anos e multa desde a Lei 15.397/2026. Consuma-se com a inversão da posse, ainda que por pouco tempo e sem posse mansa e pacífica (teoria adotada pelo STJ e pelo STF). Energia elétrica ou outra com valor econômico é equiparada a coisa móvel (§ 3º).",
        pista: "Furto de uso (pegar e devolver logo, sem intenção de ficar) é atípico. Vigilância eletrônica ou de seguranças, por si só, não torna o crime impossível (Súmula 567 do STJ).",
      },
      {
        termo: "Repouso noturno (§ 1º)",
        faz: "A pena aumenta de metade se o furto ocorre durante o repouso noturno. Segundo o STJ, esse aumento não se aplica ao furto qualificado.",
      },
      {
        termo: "Privilégio (§ 2º)",
        faz: "Se o agente é primário e a coisa é de pequeno valor (em regra, até um salário mínimo), o juiz pode trocar reclusão por detenção, reduzir a pena de 1/3 a 2/3 ou aplicar só multa. Vale também no furto qualificado, se a qualificadora for objetiva (Súmula 511 do STJ).",
      },
      {
        termo: "Furto de coisa comum (art. 156)",
        faz: "O condômino, coerdeiro ou sócio subtrai a coisa comum de quem a detém legitimamente: detenção de 6 meses a 2 anos ou multa, mediante representação. Não é punível a subtração de coisa fungível cujo valor não excede a quota do agente.",
      },
      {
        parte: "2. Furto qualificado e formas especiais",
        termo: "Furto qualificado (§ 4º)",
        faz: "Reclusão de 2 a 8 anos e multa: destruição ou rompimento de obstáculo; abuso de confiança, fraude, escalada ou destreza; chave falsa; concurso de duas ou mais pessoas; e, desde 2026, subtração de bens que comprometam o funcionamento de órgãos públicos ou de serviços essenciais (V).",
        pista: "No furto pelo concurso de pessoas não se aplica, por analogia, o aumento do roubo (Súmula 442 do STJ).",
      },
      {
        termo: "Formas de 4 a 10 anos",
        faz: "Explosivo ou artefato análogo que cause perigo comum (§ 4º-A, hediondo); fraude eletrônica por dispositivo eletrônico ou informático (§ 4º-B); veículo automotor levado para outro Estado ou para o exterior (§ 5º); semovente de produção ou animal doméstico, e celular, computador, tablet ou similar (§ 6º); explosivos ou acessórios e arma de fogo (§ 7º); furto por integrante de facção ou milícia (§ 9º, Lei 15.358/2026).",
      },
      {
        termo: "Aumentos da fraude eletrônica (§ 4º-C)",
        faz: "No furto mediante fraude eletrônica, a pena aumenta de 1/3 a 2/3 se usado servidor mantido fora do país, e de 1/3 ao dobro se a vítima é idosa ou vulnerável.",
        pista: "Desde 2026, o furto por fraude eletrônica (4 a 10) tem pena maior que o estelionato por fraude eletrônica (4 a 8).",
      },
      {
        termo: "Fios e cabos (§ 8º)",
        faz: "Subtrair fios, cabos ou equipamentos de energia elétrica, telefonia ou transmissão de dados, ou materiais ferroviários e metroviários: reclusão de 2 a 8 anos e multa, com possibilidade do privilégio do § 2º.",
      },
      {
        termo: "Combustíveis (§§ 10 a 12, Lei 15.517/2026)",
        faz: "Subtrair petróleo e derivados, gás natural, álcool carburante, demais combustíveis e lubrificantes de estabelecimentos de produção, armazenamento ou transporte, inclusive dutos: reclusão de 4 a 10 anos e multa. Aumenta de 1/3 com rompimento de obstáculo, concurso de pessoas, abuso de confiança ou vínculo com a vítima, ou agente que ocupa cargo público; de 2/3 se resulta paralisação, desabastecimento, incêndio, poluição, lesão grave ou morte.",
      },
      {
        termo: "Furto mediante fraude × estelionato",
        faz: "Se o engano serve para distrair a vigilância e o agente subtrai a coisa, é furto mediante fraude. Se a vítima, enganada, entrega o bem por vontade própria, é estelionato.",
      },
      {
        parte: "3. Roubo (art. 157)",
        termo: "Roubo próprio e impróprio",
        faz: "Subtrair coisa alheia móvel mediante grave ameaça ou violência a pessoa, ou depois de reduzir sua capacidade de resistência (violência imprópria, como drogar a vítima): reclusão de 6 a 10 anos e multa desde 2026. Próprio: a violência vem antes ou durante. Impróprio (§ 1º): logo depois de subtraída a coisa, para garantir a posse ou a impunidade.",
        pista: "Consuma-se com a inversão da posse, mesmo breve e logo recuperada (Súmula 582 do STJ). Não se aplica a insignificância.",
      },
      {
        termo: "Bens de serviços essenciais (§ 1º-A)",
        faz: "Desde a Lei 15.397/2026, roubo de bens que comprometam o funcionamento de órgãos públicos ou de estabelecimentos que prestem serviços essenciais: reclusão de 6 a 12 anos e multa.",
      },
      {
        termo: "Aumento de 1/3 até a metade (§ 2º)",
        faz: "Concurso de duas ou mais pessoas; vítima em serviço de transporte de valores, sabendo o agente disso; veículo levado para outro Estado ou para o exterior; vítima mantida em poder do agente, com restrição da liberdade (hediondo); subtração de explosivos ou acessórios; arma branca; e, desde 2026, subtração de celular, computador ou similar (IX), de arma de fogo (X) e de combustíveis (XI).",
        pista: "Várias majorantes não autorizam, sozinhas, aumento maior que o mínimo: o juiz precisa fundamentar no caso concreto (Súmula 443 do STJ).",
      },
      {
        termo: "Aumento de 2/3 e dobro (§§ 2º-A e 2º-B)",
        faz: "Aumenta de 2/3 com emprego de arma de fogo (hediondo), com destruição ou rompimento de obstáculo por explosivo, ou se o roubo de combustível causa paralisação, desabastecimento, incêndio ou poluição. A pena é aplicada em dobro com arma de fogo de uso restrito ou proibido (hediondo).",
        pista: "Simulacro e arma de brinquedo servem como grave ameaça, mas não geram o aumento. A apreensão e a perícia da arma podem ser dispensadas se outras provas mostram que foi usada.",
      },
      {
        termo: "Lesão grave e latrocínio (§ 3º)",
        faz: "Se da violência resulta lesão grave: reclusão de 7 a 18 anos e multa. Se resulta morte (latrocínio): reclusão de 24 a 30 anos e multa desde 2026. Ambos são hediondos. Há latrocínio consumado quando a morte se consuma, ainda que o agente não leve nada (Súmula 610 do STF); se a morte não ocorre, é tentativa de latrocínio.",
        pista: "O julgamento é do juiz singular, não do júri (Súmula 603 do STF). A morte precisa vir da violência; a grave ameaça que causa morte não forma latrocínio.",
      },
      {
        termo: "Roubo por facção ou milícia (§§ 4º e 5º)",
        faz: "Pela Lei 15.358/2026, o roubo cometido por integrante de organização criminosa ultraviolenta, grupo paramilitar ou milícia privada tem a pena do caput aplicada em triplo, desprezadas as outras causas de aumento; com resultado morte, reclusão de 20 a 40 anos e multa.",
      },
      {
        parte: "4. Extorsão (arts. 158 a 160)",
        termo: "Extorsão (art. 158)",
        faz: "Constranger alguém, com violência ou grave ameaça, a fazer, tolerar que se faça ou deixar de fazer algo, para obter vantagem econômica indevida: reclusão de 4 a 10 anos e multa. Aumenta de 1/3 até a metade com duas ou mais pessoas ou arma. Com violência que causa lesão grave ou morte, aplicam-se as penas do roubo do § 3º. Por facção ou milícia, pena em triplo (§ 4º, 2026).",
        pista: "É crime formal: consuma-se com o constrangimento, sem precisar da vantagem (Súmula 96 do STJ). No roubo o agente pega a coisa; na extorsão a colaboração da vítima é indispensável.",
      },
      {
        termo: "Sequestro relâmpago (art. 158, § 3º)",
        faz: "Extorsão com restrição da liberdade da vítima, quando essa condição é necessária para obter a vantagem (ex.: levar a vítima ao caixa eletrônico para sacar): reclusão de 6 a 12 anos e multa; com lesão grave ou morte, as penas da extorsão mediante sequestro (16 a 24 e 24 a 30).",
      },
      {
        termo: "Extorsão mediante sequestro (art. 159)",
        faz: "Sequestrar pessoa para obter qualquer vantagem como condição ou preço do resgate: reclusão de 8 a 15 anos. De 12 a 20 se dura mais de 24 horas, se a vítima é menor de 18 ou maior de 60 anos ou se cometida por associação criminosa; de 16 a 24 com lesão grave; de 24 a 30 com morte. É hediondo em todas as formas. Por facção ou milícia, aumenta de 2/3 (§ 5º, 2026).",
        pista: "Consuma-se com a privação da liberdade; o pagamento do resgate é exaurimento. O concorrente que denuncia à autoridade e facilita a libertação tem a pena reduzida de 1/3 a 2/3 (§ 4º).",
      },
      {
        termo: "Extorsão indireta (art. 160)",
        faz: "Exigir ou receber, como garantia de dívida e abusando da situação de alguém, documento que pode dar causa a procedimento criminal contra a vítima ou terceiro (ex.: cheque sem fundos dado em garantia): reclusão de 1 a 3 anos e multa.",
      },
      {
        parte: "5. Usurpação (arts. 161 e 162)",
        termo: "Alteração de limites, usurpação de águas e esbulho",
        faz: "Suprimir ou deslocar marco ou sinal de divisa para se apropriar de imóvel alheio; desviar ou represar águas alheias; invadir terreno ou edifício alheio com violência, grave ameaça ou mais de duas pessoas, para tomar a posse (esbulho possessório): detenção de 1 a 6 meses e multa, mais a pena da violência. Se a propriedade é particular e não há violência, a ação é privada.",
      },
      {
        termo: "Supressão ou alteração de marca em animais (art. 162)",
        faz: "Suprimir ou alterar, indevidamente, em gado ou rebanho alheio, marca ou sinal de propriedade: detenção de 6 meses a 3 anos e multa.",
      },
      {
        parte: "6. Dano (arts. 163 a 167)",
        termo: "Dano simples e qualificado (art. 163)",
        faz: "Destruir, inutilizar ou deteriorar coisa alheia: detenção de 1 a 6 meses ou multa. Qualificado (6 meses a 3 anos e multa, mais a pena da violência): com violência ou grave ameaça; com substância inflamável ou explosiva, se não for crime mais grave; contra patrimônio da União, Estado, DF, Município, autarquia, fundação, empresa pública, sociedade de economia mista ou concessionária; por motivo egoístico ou com prejuízo considerável.",
        pista: "Não existe dano culposo no CP. O STJ entende que o preso que danifica a cela só para fugir não comete dano, por faltar a intenção de prejudicar.",
      },
      {
        termo: "Outros danos e ação penal (arts. 164 a 167)",
        faz: "Introduzir ou deixar animais em propriedade alheia, com prejuízo (art. 164). Dano em coisa tombada (art. 165) e alteração de local protegido (art. 166): a doutrina entende que foram substituídos pelos arts. 62 e 63 da Lei de Crimes Ambientais (Lei 9.605/1998). A ação é privada no dano simples, no dano por motivo egoístico ou prejuízo considerável e no art. 164 (art. 167); nos demais, pública incondicionada.",
      },
      {
        parte: "7. Apropriação indébita (arts. 168 a 170)",
        termo: "Apropriação indébita (art. 168)",
        faz: "Apropriar-se de coisa alheia móvel de que tem a posse ou a detenção: reclusão de 1 a 4 anos e multa. O agente recebe a coisa de forma legítima e só depois decide ficar com ela. Aumenta de 1/3 no depósito necessário, se o agente é tutor, curador, inventariante, testamenteiro ou depositário judicial, ou em razão de ofício, emprego ou profissão.",
        pista: "Se o dolo de ficar com a coisa já existia antes de recebê-la, o crime é estelionato.",
      },
      {
        termo: "Apropriação indébita previdenciária (art. 168-A)",
        faz: "Deixar de repassar à Previdência as contribuições recolhidas dos contribuintes: reclusão de 2 a 5 anos e multa. Extingue a punibilidade quem declara, confessa e paga antes do início da ação fiscal (§ 2º); o juiz pode dar perdão judicial ou aplicar só multa ao primário de bons antecedentes que paga antes da denúncia ou deve valor pequeno (§ 3º). Pela LC 225/2026, a extinção da punibilidade pelo pagamento não vale para o devedor contumaz inscrito no Cadin.",
        pista: "A jurisprudência também admite a extinção pelo pagamento integral feito antes do trânsito em julgado. O parcelamento só suspende a pretensão punitiva.",
      },
      {
        termo: "Coisa havida por erro, tesouro e coisa achada (art. 169)",
        faz: "Apropriar-se de coisa alheia que chegou às mãos por erro, caso fortuito ou força da natureza; da quota do tesouro que cabe ao dono do terreno; ou de coisa perdida, sem devolvê-la ao dono nem entregá-la à autoridade em 15 dias: detenção de 1 mês a 1 ano ou multa. O privilégio do furto vale para todo o capítulo (art. 170).",
      },
      {
        parte: "8. Estelionato (arts. 171 e 171-A)",
        termo: "Estelionato (art. 171)",
        faz: "Obter vantagem ilícita, em prejuízo alheio, induzindo ou mantendo alguém em erro, por artifício, ardil ou outro meio fraudulento: reclusão de 1 a 5 anos e multa. Exige fraude, erro da vítima, vantagem ilícita e prejuízo. Privilégio (§ 1º): primário e prejuízo de pequeno valor.",
        pista: "Desde a Lei 15.397/2026, o § 5º (representação) foi revogado: o estelionato voltou a ser de ação pública incondicionada.",
      },
      {
        termo: "Figuras equiparadas (§ 2º)",
        faz: "Vender ou dar em garantia coisa alheia como própria; vender ou onerar coisa própria inalienável, gravada ou litigiosa, calando sobre isso; defraudar penhor; fraudar a entrega de coisa; lesar o próprio corpo ou destruir a coisa segurada para receber seguro; emitir cheque sem fundos ou frustrar seu pagamento; e, desde 2026, ceder conta bancária para que nela passem recursos de atividade criminosa (conta laranja, VII).",
        pista: "O pagamento do cheque sem fundos antes do recebimento da denúncia impede a ação penal (Súmula 554 do STF, a contrario). Se o falso se esgota no estelionato, é absorvido (Súmula 17 do STJ).",
      },
      {
        termo: "Fraude eletrônica e aumentos (§§ 2º-A a 4º)",
        faz: "Fraude com informações dadas pela vítima ou por terceiro enganado por redes sociais, telefonema, e-mail fraudulento, duplicação de dispositivo ou meio análogo: reclusão de 4 a 8 anos e multa. Aumenta de 1/3 a 2/3 com servidor fora do país; de 1/3 contra entidade de direito público ou de economia popular, assistência social ou beneficência; de 1/3 ao dobro contra idoso ou vulnerável.",
        pista: "No estelionato por cheque sem fundos, depósito ou transferência (como o Pix), a competência é do domicílio da vítima (art. 70, § 4º, do CPP).",
      },
      {
        termo: "Fraude com ativos virtuais (art. 171-A)",
        faz: "Organizar, gerir, ofertar ou distribuir carteiras, ou intermediar operações com ativos virtuais, valores mobiliários ou outros ativos financeiros, para obter vantagem ilícita enganando alguém: reclusão de 4 a 8 anos e multa (Lei 14.478/2022).",
      },
      {
        parte: "9. Outras fraudes (arts. 172 a 179)",
        termo: "Duplicata simulada, abuso de incapazes e especulação",
        faz: "Emitir fatura, duplicata ou nota que não corresponda à venda ou ao serviço (art. 172, detenção de 2 a 4 anos e multa). Abusar da necessidade, paixão ou inexperiência de menor ou da deficiência mental de alguém para fazê-lo praticar ato que produza efeito jurídico prejudicial (art. 173, reclusão de 2 a 6 anos e multa). Induzir pessoa inexperiente ou simples a jogo, aposta ou especulação que sabe ser ruinosa (art. 174).",
      },
      {
        termo: "Fraude no comércio e calote (arts. 175 e 176)",
        faz: "Enganar o consumidor vendendo mercadoria falsificada ou deteriorada como verdadeira ou perfeita, ou entregando uma por outra (art. 175). Tomar refeição em restaurante, hospedar-se em hotel ou usar transporte sem ter dinheiro para pagar (art. 176): detenção de 15 dias a 2 meses ou multa, mediante representação; o juiz pode deixar de aplicar a pena.",
      },
      {
        termo: "Sociedades, warrant e fraude à execução (arts. 177 a 179)",
        faz: "Fraudes na fundação ou administração de sociedade por ações (art. 177); emitir conhecimento de depósito ou warrant em desacordo com a lei (art. 178); fraudar execução alienando, desviando, destruindo ou danificando bens ou simulando dívidas (art. 179, detenção de 6 meses a 2 anos ou multa, só mediante queixa).",
      },
      {
        parte: "10. Receptação (arts. 180 e 180-A)",
        termo: "Receptação dolosa (caput)",
        faz: "Adquirir, receber, transportar, conduzir ou ocultar coisa que sabe ser produto de crime (própria), ou influir para que terceiro de boa-fé a adquira, receba ou oculte (imprópria): reclusão de 2 a 6 anos e multa desde 2026. É punível mesmo que o autor do crime anterior seja desconhecido ou isento de pena (§ 4º).",
        pista: "Produto de contravenção não gera receptação: a lei fala em produto de crime.",
      },
      {
        termo: "Receptação qualificada (§§ 1º e 2º)",
        faz: "No exercício de atividade comercial ou industrial, com coisa que deve saber ser produto de crime: reclusão de 3 a 8 anos e multa. Equipara-se a atividade comercial o comércio irregular ou clandestino, inclusive na residência.",
      },
      {
        termo: "Receptação culposa (§ 3º)",
        faz: "Adquirir ou receber coisa que, pela natureza, pela desproporção entre valor e preço ou pela condição de quem oferece, deve presumir obtida por meio criminoso: detenção de 1 mês a 1 ano ou multa, ou ambas.",
        pista: "O § 5º, que previa perdão judicial na culposa e o privilégio na dolosa, foi revogado pela Lei 15.358/2026.",
      },
      {
        termo: "Bens públicos, facção e animais",
        faz: "Bens da União, Estado, DF, Município, autarquia, fundação, empresa pública, sociedade de economia mista ou concessionária: pena do caput em dobro (§ 6º). Por integrante de facção ou milícia: aumenta de 2/3 (§ 8º, 2026). Receptação de semovente de produção ou de animal doméstico que sabe ou deve saber ser produto de crime (art. 180-A): reclusão de 3 a 8 anos e multa (Lei 15.397/2026). O estabelecimento usado na receptação pode ter o CNPJ suspenso por 180 dias (art. 92, IV).",
      },
      {
        parte: "11. Disposições gerais e patrimoniais hediondos",
        termo: "Imunidade absoluta (art. 181)",
        faz: "É isento de pena quem comete crime patrimonial contra o cônjuge, durante a sociedade conjugal, ou contra ascendente ou descendente. O fato continua sendo crime; só não há pena.",
      },
      {
        termo: "Imunidade relativa (art. 182)",
        faz: "A ação passa a depender de representação se o crime for contra cônjuge separado judicialmente, irmão, ou tio ou sobrinho com quem o agente more.",
      },
      {
        termo: "Exceções (art. 183)",
        faz: "As imunidades não valem no roubo, na extorsão e em qualquer crime com violência ou grave ameaça à pessoa; para o estranho que participa do crime; e quando a vítima tem 60 anos ou mais.",
      },
      {
        termo: "Instituições financeiras e segurança privada (art. 183-A)",
        faz: "Crimes patrimoniais contra instituições financeiras e prestadores de serviço de segurança privada têm a pena aumentada de 1/3 até o dobro (Lei 14.967/2024).",
      },
      {
        termo: "Patrimoniais hediondos (Lei 8.072/1990)",
        faz: "Roubo com restrição da liberdade da vítima (§ 2º, V), com arma de fogo (§ 2º-A, I), com arma de uso restrito ou proibido (§ 2º-B) e qualificado por lesão grave ou morte (§ 3º); extorsão qualificada pela restrição da liberdade, lesão ou morte; extorsão mediante sequestro em todas as formas; furto com explosivo ou artefato que cause perigo comum (§ 4º-A).",
      },
    ],
    cuidado:
      "O PDF traz penas antigas de furto, roubo, latrocínio, estelionato e receptação e ainda mostra a representação no estelionato. Vale o texto atual do Código, que mudou em 2026: furto 1 a 6, roubo 6 a 10, latrocínio 24 a 30, receptação 2 a 6, estelionato de ação incondicionada e sem perdão judicial na receptação culposa.",
  },
  questoes: [
    {
      topico: "Furto",
      subassunto: "Consumação pela inversão da posse",
      dificuldade: 4,
      raciocinio: "O STJ não exige posse tranquila.",
      enunciado:
        "Um homem pega ferramentas da caçamba de uma caminhonete parada em um posto e corre. Ele é seguido sem interrupção e detido 200 metros depois, com tudo recuperado. Segundo a tese do STJ, o furto está",
      alternativas: [
        "tentado, porque a coisa foi recuperada logo depois",
        "tentado, porque faltou a posse mansa e pacífica",
        "atípico, porque não houve prejuízo à vítima",
        "consumado, pois bastou a inversão da posse",
        "consumado só se a coisa saísse da esfera de vigilância da vítima",
      ],
      correta: 3,
      explicacao:
        "Pela teoria da amotio, adotada pelo STJ, o furto se consuma com a posse de fato da coisa, ainda que por breve tempo e seguida de perseguição, sem precisar de posse mansa e pacífica ou desvigiada.",
      explicacaoErradas:
        "“Recuperada logo depois” e “posse mansa e pacífica” são argumentos rejeitados. “Atípico” ignora a subtração. “Esfera de vigilância” é teoria que o STJ não adota.",
      pegadinha: "A recuperação do bem não volta o crime para a tentativa.",
      conhecimento:
        "A Súmula 582 do STJ traz a mesma regra para o roubo.",
    },
    {
      topico: "Furto",
      subassunto: "Furto privilegiado-qualificado",
      dificuldade: 4,
      raciocinio: "Olhe se a qualificadora é objetiva.",
      enunciado:
        "Um réu primário arromba a janela de um carro e leva uma caixa de ferramentas de pequeno valor. Pela Súmula 511 do STJ, quanto ao privilégio do art. 155, § 2º, do CP,",
      alternativas: [
        "não cabe, porque o furto qualificado exclui sempre o privilégio",
        "cabe, porque a qualificadora do arrombamento é objetiva",
        "cabe, mas só se a vítima concordar com a redução",
        "não cabe, porque o dano à janela afasta o pequeno valor",
        "só cabe o perdão judicial, e não a redução da pena",
      ],
      correta: 1,
      explicacao:
        "A Súmula 511 admite o privilégio no furto qualificado quando há primariedade, pequeno valor da coisa e qualificadora de ordem objetiva. O rompimento de obstáculo é objetivo.",
      explicacaoErradas:
        "“Exclui sempre” contraria a súmula. “Vítima concordar” não é requisito. “Dano à janela” não muda o valor da coisa furtada. “Perdão judicial” não é o efeito do § 2º.",
      pegadinha: "O abuso de confiança é tratado como qualificadora subjetiva.",
      conhecimento:
        "No § 2º, o juiz pode trocar reclusão por detenção, reduzir de um a dois terços ou aplicar só multa.",
    },
    {
      topico: "Furto",
      subassunto: "Furto de celular",
      dificuldade: 5,
      raciocinio: "A lei de 2026 criou pena própria para esse objeto.",
      enunciado:
        "Em um terminal rodoviário, sem violência nem qualquer outra circunstância, um homem subtrai da bolsa de uma passageira um telefone celular. Pelo art. 155 do CP, na redação da Lei 15.397/2026, a pena de reclusão é",
      alternativas: [
        "de 4 a 10 anos",
        "de 1 a 6 anos",
        "de 2 a 8 anos",
        "de 1 a 4 anos",
        "de 3 a 8 anos",
      ],
      correta: 0,
      explicacao:
        "O § 6º, II, prevê reclusão de 4 a 10 anos, e multa, se a subtração for de telefone celular, computador ou dispositivo eletrônico semelhante.",
      explicacaoErradas:
        "“1 a 6 anos” é o caput atual. “2 a 8 anos” é o § 4º. “1 a 4 anos” é a pena antiga do caput. “3 a 8 anos” não é pena do art. 155.",
      pegadinha: "Se fosse destreza, seria § 4º, mas o objeto já leva à pena maior.",
      conhecimento:
        "O mesmo § 6º, I, cuida de semovente domesticável de produção e de animal doméstico.",
    },
    {
      topico: "Furto",
      subassunto: "Combustíveis na Lei 15.517/2026",
      dificuldade: 5,
      raciocinio: "A lei nova mexeu nos dois artigos.",
      enunciado:
        "Um homem, sozinho e sem romper nada, retira óleo diesel de um caminhão-tanque parado em um pátio. Outro, sozinho, com grave ameaça e sem arma, rende um motorista e leva o diesel do caminhão-tanque. Pelos arts. 155 e 157 do CP, com a Lei 15.517/2026, há",
      alternativas: [
        "furto simples de 1 a 6 anos, e roubo simples de 6 a 10 anos",
        "furto de 2 a 8 anos, e roubo com aumento de 2/3",
        "dano qualificado, e roubo de 6 a 12 anos, pelo § 1º-A do artigo",
        "crime ambiental apenas, e roubo com a pena em dobro pelo inflamável",
        "furto de 4 a 10 anos, e roubo aumentado de 1/3 até metade",
      ],
      correta: 4,
      explicacao:
        "O art. 155, § 10, pune com 4 a 10 anos a subtração de petróleo e derivados, entre outros. No roubo, o art. 157, § 2º, XI, traz o aumento de 1/3 até metade para esses bens.",
      explicacaoErradas:
        "“Simples” ignora as regras próprias. “2 a 8 anos” é a pena do § 4º. “§ 1º-A” exige bens que comprometam serviços essenciais. “Em dobro” é a arma de uso restrito.",
      pegadinha: "O § 2º-A, III, traz aumento maior se do crime de combustível resultar o dano nele previsto.",
      conhecimento:
        "Furto de fios e cabos tem regra própria: 2 a 8 anos, com possibilidade do privilégio (§ 8º).",
    },
    {
      topico: "Furto e estelionato",
      subassunto: "Furto mediante fraude x estelionato",
      dificuldade: 5,
      raciocinio: "Pergunte: a vítima entregou ou o bem foi tirado dela?",
      enunciado:
        "Primeiro caso: um falso técnico distrai o funcionário de uma loja e sai com um notebook. Segundo caso: um motorista mostra um comprovante falso de PIX, e o frentista, enganado, libera o combustível e o deixa ir. Quanto à tipificação,",
      alternativas: [
        "os dois casos são estelionato, pois nos dois houve fraude",
        "os dois casos são furto mediante fraude, pela mesma razão",
        "o primeiro é furto mediante fraude, e o segundo é estelionato",
        "o primeiro é estelionato, e o segundo é furto mediante fraude",
        "o primeiro é apropriação indébita, e o segundo é estelionato",
      ],
      correta: 2,
      explicacao:
        "No furto mediante fraude, o engano reduz a vigilância, e o agente subtrai contra a vontade da vítima. No estelionato, o engano faz a própria vítima entregar o bem.",
      explicacaoErradas:
        "“Nos dois houve fraude” olha só o meio. “Pela mesma razão” também. A inversão ignora quem entregou o bem. “Apropriação indébita” exige posse anterior legítima.",
      pegadinha: "Fraude existe nos dois crimes: o que muda é a entrega voluntária.",
      conhecimento:
        "A fraude eletrônica existe nos dois artigos: art. 155, § 4º-B, e art. 171, § 2º-A.",
    },
    {
      topico: "Roubo",
      subassunto: "Roubo impróprio",
      dificuldade: 4,
      raciocinio: "A ordem dos atos define a espécie de roubo.",
      enunciado:
        "Em uma loja de conveniência, um homem pega um perfume sem ser visto e sai. Alcançado logo depois pelo funcionário, no pátio, ele o empurra com força e foge com o produto. Pelo art. 157 do CP, o fato é",
      alternativas: [
        "roubo impróprio, pela violência logo após a subtração",
        "furto em concurso com lesão corporal leve",
        "roubo próprio, pois a violência dispensa ordem de atos",
        "furto consumado, pois a violência veio depois do fim do crime",
        "furto tentado, em concurso material com resistência à prisão",
      ],
      correta: 0,
      explicacao:
        "Pelo § 1º, responde pela mesma pena quem, logo depois de subtraída a coisa, emprega violência ou grave ameaça para assegurar a impunidade ou a detenção da coisa.",
      explicacaoErradas:
        "“Lesão corporal leve” e “furto consumado” separam o que a lei une. “Roubo próprio” exige violência antes ou durante. “Resistência” exige oposição a ato legal de funcionário.",
      pegadinha: "No impróprio, só violência ou grave ameaça servem: não vale o “qualquer meio” do caput.",
      conhecimento:
        "Prevalece que o roubo impróprio se consuma com a violência, sem tentativa.",
    },
    {
      topico: "Roubo",
      subassunto: "Causas de aumento e Súmula 443 do STJ",
      dificuldade: 5,
      raciocinio: "Separe o tipo de arma e lembre da fundamentação.",
      enunciado:
        "Dois homens rendem um caminhoneiro com revólver de uso permitido e o mantêm preso na cabine por horas, enquanto levam a carga. Sobre os aumentos do art. 157 do CP e a Súmula 443 do STJ,",
      alternativas: [
        "o aumento é em dobro, pelo simples uso de arma de fogo",
        "a arma branca e a de fogo têm o mesmo aumento, de 2/3",
        "só se aplica a maior fração, pois a lei proíbe somar aumentos",
        "a arma aumenta 2/3, e o número de majorantes, sozinho, não basta",
        "o concurso de pessoas e a restrição da liberdade somam 2/3 automaticamente",
      ],
      correta: 3,
      explicacao:
        "A arma de fogo aumenta 2/3 (§ 2º-A, I). O dobro é para arma de uso restrito ou proibido (§ 2º-B). A Súmula 443 exige fundamentação concreta: a mera indicação do número de majorantes não basta.",
      explicacaoErradas:
        "“Em dobro” é a arma de uso restrito ou proibido. “Arma branca” aumenta de 1/3 até metade. “A lei proíbe” exagera, pois o art. 68 só autoriza o juiz a limitar-se a um aumento. “Automaticamente” contraria a súmula.",
      pegadinha: "Uso permitido: 2/3. Uso restrito ou proibido: dobro.",
      conhecimento:
        "A Súmula 442 do STJ proíbe levar para o furto o aumento do concurso de pessoas do roubo.",
    },
    {
      topico: "Roubo",
      subassunto: "Latrocínio consumado",
      dificuldade: 4,
      raciocinio: "No latrocínio, a morte define a consumação.",
      enunciado:
        "Um assaltante atira na vítima para levar sua caminhonete. A vítima morre, mas ele foge sem levar nada ao ver uma viatura. Pelas Súmulas 610 e 603 do STF,",
      alternativas: [
        "é latrocínio tentado, com julgamento pelo juiz singular",
        "é latrocínio consumado, com julgamento pelo juiz singular",
        "é homicídio qualificado, com julgamento pelo tribunal do júri",
        "é latrocínio consumado, com julgamento pelo tribunal do júri",
        "é roubo tentado, em concurso com homicídio culposo",
      ],
      correta: 1,
      explicacao:
        "A Súmula 610 diz que há latrocínio quando o homicídio se consuma, ainda que o agente não realize a subtração. A Súmula 603 dá a competência ao juiz singular. A pena atual é de 24 a 30 anos.",
      explicacaoErradas:
        "“Tentado” olha só a subtração. “Tribunal do júri” contraria a Súmula 603, pois é crime contra o patrimônio. “Homicídio culposo” não descreve o tiro proposital.",
      pegadinha: "Morte consumada e subtração tentada dão latrocínio consumado.",
      conhecimento:
        "A pena era de 20 a 30 anos. A Lei 15.397/2026 elevou o mínimo para 24 anos.",
    },
    {
      topico: "Extorsão",
      subassunto: "Sequestro relâmpago",
      dificuldade: 5,
      raciocinio: "Sem a colaboração da vítima, o dinheiro não saía.",
      enunciado:
        "Dois homens rendem um motorista, o mantêm no carro e o obrigam a ir a um caixa eletrônico e digitar a senha para sacar dinheiro, soltando-o em seguida. Segundo a lei e a distinção corrente, o crime é",
      alternativas: [
        "roubo com restrição de liberdade, pois ele foi mantido no carro",
        "extorsão mediante sequestro, com pena mínima de 8 anos",
        "roubo em concurso com sequestro e cárcere privado",
        "estelionato, pois a senha foi obtida da própria vítima",
        "extorsão com restrição da liberdade, art. 158, § 3º",
      ],
      correta: 4,
      explicacao:
        "Na extorsão, a colaboração da vítima é indispensável para a vantagem. Quando ela é cometida mediante restrição da liberdade e essa condição é necessária para obter a vantagem, a pena é de 6 a 12 anos, pelo art. 158, § 3º.",
      explicacaoErradas:
        "“Roubo com restrição” serve quando o agente pode tomar o bem sozinho. “Mediante sequestro” exige a privação para exigir resgate. “Concurso” divide um fato só. “Estelionato” exige engano, não ameaça.",
      pegadinha: "Levar o carro é roubo. Obrigar a digitar a senha é extorsão.",
      conhecimento:
        "A Súmula 96 do STJ diz que a extorsão se consuma independentemente da vantagem.",
    },
    {
      topico: "Extorsão",
      subassunto: "Extorsão mediante sequestro e delação",
      dificuldade: 4,
      raciocinio: "Consumação na privação, e benefício que só reduz a pena.",
      enunciado:
        "Três homens sequestram o filho de 17 anos de um empresário e exigem resgate. Antes do pagamento, um deles, arrependido, conta tudo à polícia, o que facilita a libertação. Pelo art. 159 do CP,",
      alternativas: [
        "o crime só se consuma quando a família paga o resgate exigido",
        "o delator fica isento de pena, por arrependimento eficaz",
        "o crime está consumado, e o delator tem redução de pena",
        "há só tentativa, e o delator tem a extinção da punibilidade",
        "a redução vale para os três, por ser circunstância objetiva",
      ],
      correta: 2,
      explicacao:
        "O crime é formal: consuma-se com a privação da liberdade. Pelo § 4º, o concorrente que denuncia à autoridade, facilitando a libertação, tem a pena reduzida de um a dois terços.",
      explicacaoErradas:
        "“Paga o resgate” é exaurimento. “Isento” e “extinção” trocam redução por isenção. “Vale para os três” ignora que o benefício é só de quem denunciou.",
      pegadinha: "Vítima menor de 18 anos leva ao § 1º: 12 a 20 anos.",
      conhecimento:
        "A Lei 15.358/2026 incluiu aumento de 2/3 no § 5º do art. 159.",
    },
    {
      topico: "Estelionato",
      subassunto: "Ação penal após a Lei 15.397/2026",
      dificuldade: 5,
      raciocinio: "Sem regra especial, volta a valer a regra geral do art. 100.",
      enunciado:
        "Em novembro de 2026, um adulto capaz perde dinheiro em um golpe e não quer representar contra o autor. Sobre a ação penal do estelionato simples, considerando a revogação do art. 171, § 5º, do CP,",
      alternativas: [
        "depende de representação, salvo vítima idosa ou incapaz",
        "é privada, e se procede por queixa do ofendido",
        "depende de representação em todos os casos do artigo",
        "é pública incondicionada, pois o § 5º foi revogado",
        "é pública condicionada à requisição do Ministro da Justiça",
      ],
      correta: 3,
      explicacao:
        "O § 5º, trazido pelo Pacote Anticrime, exigia representação. Ele foi revogado pela Lei 15.397/2026. Sem previsão especial, vale o art. 100: a ação é pública incondicionada.",
      explicacaoErradas:
        "“Salvo vítima idosa” é a regra revogada. “Privada” exigiria declaração expressa da lei. “Em todos os casos” também se apoia no texto revogado. “Requisição” não tem previsão aqui.",
      pegadinha: "O PDF do curso ainda traz a representação, anterior à mudança.",
      conhecimento:
        "A pena do caput também mudou: reclusão de 1 a 5 anos, e multa.",
    },
    {
      topico: "Estelionato",
      subassunto: "Cessão de conta laranja",
      dificuldade: 5,
      raciocinio: "A lei de 2026 criou figura própria no § 2º.",
      enunciado:
        "Uma jovem empresta sua conta bancária a um conhecido, sem cobrar nada, sabendo que por ela passariam valores de golpes praticados por ele. Pelo art. 171, § 2º, do CP, ela",
      alternativas: [
        "responde nas penas do art. 171, mesmo cedendo de graça",
        "só responde se receber dinheiro pela cessão da conta",
        "responde por lavagem, única figura possível no caso",
        "não responde, porque a conta é dela e a cessão é lícita",
        "responde por receptação culposa, com perdão judicial",
      ],
      correta: 0,
      explicacao:
        "O inciso VII, incluído pela Lei 15.397/2026, pune quem cede, gratuita ou onerosamente, conta bancária para que nela transitem recursos destinados ao financiamento de atividade criminosa ou que dela sejam fruto.",
      explicacaoErradas:
        "“Só responde se receber” contraria o “gratuita ou onerosamente”. “Única figura” ignora o novo inciso. “Lícita” não vale, pois ela sabia do uso. “Receptação culposa” não descreve a conduta.",
      pegadinha: "Cobrar ou não cobrar não muda a tipificação.",
      conhecimento:
        "O art. 171-A pune a fraude com ativos virtuais: reclusão de 4 a 8 anos, e multa.",
    },
    {
      topico: "Apropriação indébita",
      subassunto: "Dolo posterior à posse",
      dificuldade: 4,
      raciocinio: "Quando surgiu a intenção de ficar com o bem?",
      enunciado:
        "Um motorista de transportadora recebe de forma regular uma carga de eletrônicos. Dois dias depois, com dívidas, ele decide vendê-la em vez de entregá-la, e o faz. Quanto ao crime,",
      alternativas: [
        "é estelionato, porque houve venda a quem não sabia da origem",
        "é apropriação indébita majorada, pois o dolo veio após a posse",
        "é furto com abuso de confiança, pelo vínculo de emprego com a firma",
        "é receptação, porque ele vendeu coisa que sabia ser alheia",
        "é peculato, porque a carga passou por uma rodovia federal",
      ],
      correta: 1,
      explicacao:
        "Na apropriação indébita, o agente já tem a posse legítima e, depois, passa a agir como dono. O art. 168, § 1º, III, aumenta a pena de um terço se ele recebeu a coisa em razão de ofício, emprego ou profissão.",
      explicacaoErradas:
        "“Estelionato” exigiria dolo antes de receber. “Abuso de confiança” pressupõe subtração, sem posse livre. “Receptação” exige produto de crime de outro. “Peculato” exige funcionário público.",
      pegadinha: "Dolo antes da posse: estelionato. Dolo depois: apropriação.",
      conhecimento:
        "O art. 169 pune a apropriação de coisa vinda por erro, caso fortuito ou força da natureza.",
    },
    {
      topico: "Receptação",
      subassunto: "Fim do perdão judicial",
      dificuldade: 5,
      raciocinio: "Confira se o parágrafo ainda existe.",
      enunciado:
        "Sem saber da origem, mas sem nenhuma cautela, um homem primário compra por um décimo do preço um celular novo de um desconhecido. O aparelho era roubado. Condenado por receptação culposa, ele pede perdão judicial. Pelo texto atual do art. 180 do CP,",
      alternativas: [
        "cabe o perdão, por ser primário e culposo o crime",
        "cabe só a redução de um a dois terços, como no furto",
        "cabe o perdão, porque é regra geral dos crimes culposos",
        "o fato virou atípico, pois a forma culposa foi revogada",
        "não cabe, pois a Lei 15.358/2026 revogou esse parágrafo",
      ],
      correta: 4,
      explicacao:
        "O § 5º do art. 180, que previa o perdão judicial na receptação culposa e a regra do § 2º do art. 155 na dolosa, foi revogado pela Lei 15.358/2026. A forma culposa do § 3º continua.",
      explicacaoErradas:
        "“Por ser primário” e “como no furto” repetem o parágrafo revogado. “Regra geral” não existe, pois o perdão só cabe nos casos previstos. “Atípico” ignora o § 3º.",
      pegadinha: "O PDF do curso ainda ensina o perdão: a lei mudou depois.",
      conhecimento:
        "O § 4º diz que a receptação é punível ainda que desconhecido ou isento de pena o autor do crime de origem.",
    },
    {
      topico: "Imunidades",
      subassunto: "Art. 181 e o estranho",
      dificuldade: 4,
      raciocinio: "A imunidade é pessoal.",
      enunciado:
        "Um filho e um amigo dele furtam, sem violência, o carro do pai do primeiro, que tem 58 anos. Pelos arts. 181 e 183 do CP,",
      alternativas: [
        "os dois são isentos, pois a imunidade se comunica",
        "os dois respondem, porque o furto foi qualificado",
        "o filho é isento, e o amigo responde pelo furto qualificado",
        "o filho responde só se o pai oferecer representação",
        "o amigo é isento, e o filho responde por abuso de confiança",
      ],
      correta: 2,
      explicacao:
        "O art. 181, II, isenta de pena quem comete crime patrimonial sem violência contra ascendente. O art. 183, II, afasta a imunidade para o estranho que participa do crime.",
      explicacaoErradas:
        "“Se comunica” contraria o art. 183, II. “Os dois respondem” ignora o art. 181. “Representação” é o art. 182, para irmão e outros, não para ascendente. “Abuso de confiança” inverte os papéis.",
      pegadinha: "Com vítima de 60 anos ou mais, a imunidade cai (art. 183, III).",
      conhecimento:
        "A imunidade também não vale em roubo, extorsão ou crime com violência ou grave ameaça à pessoa.",
    },
  ],
};
