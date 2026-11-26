import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-10",
  resumo: {
    ideia:
      "Os crimes funcionais (arts. 312 a 326) têm como autor quem exerce função pública, no conceito amplo do art. 327. O verbo decide o crime: apropriar-se ou desviar (peculato), exigir (concussão), solicitar ou receber (corrupção passiva), deixar de agir por interesse pessoal (prevaricação). O particular que participa, sabendo dessa condição, responde pelo mesmo crime, porque a qualidade de funcionário é elementar e se comunica (art. 30).",
    itens: [
      {
        parte: "1. Quem é funcionário público (art. 327)",
        termo: "Conceito penal",
        faz: "É funcionário público, para o Direito Penal, quem exerce cargo, emprego ou função pública, ainda que de forma transitória ou sem remuneração (ex.: jurado, mesário). O conceito é mais amplo que o do Direito Administrativo.",
        pista: "O STJ já tratou como funcionário público o advogado dativo nomeado pelo juiz e o médico de hospital particular quando atende pelo SUS.",
      },
      {
        termo: "Funcionário por equiparação (§ 1º)",
        faz: "Equipara-se a funcionário público quem exerce cargo, emprego ou função em entidade paraestatal e quem trabalha em empresa prestadora de serviço contratada ou conveniada para executar atividade típica da administração pública. O STJ já incluiu os empregados de OSCIP.",
      },
      {
        termo: "Aumento de 1/3 (§ 2º)",
        faz: "A pena aumenta da terça parte quando o autor ocupa cargo em comissão ou função de direção ou assessoramento em órgão da administração direta, sociedade de economia mista, empresa pública ou fundação instituída pelo poder público.",
        pista: "O simples mandato eletivo não basta: é preciso exercer função de direção. O STF aplicou o aumento a governador de estado.",
      },
      {
        termo: "Insignificância (Súmula 599 do STJ)",
        faz: "Como regra, o princípio da insignificância não se aplica aos crimes contra a administração pública, porque o bem protegido é a moralidade administrativa, e não só o patrimônio. O próprio STJ admite afastar a súmula, excepcionalmente, quando a lesão é ínfima.",
      },
      {
        termo: "Perda do cargo (art. 92, I)",
        faz: "É efeito da condenação a perda do cargo, função ou mandato quando a pena de prisão é de 1 ano ou mais em crime com abuso de poder ou violação de dever para com a administração, ou maior que 4 anos nos demais crimes. Não é automática: o juiz precisa declarar e fundamentar na sentença.",
      },
      {
        parte: "2. Peculato (art. 312)",
        termo: "Peculato-apropriação e peculato-desvio",
        faz: "Apropriar-se o funcionário de dinheiro, valor ou outro bem móvel, público ou particular, de que tem a posse em razão do cargo, ou desviá-lo em proveito próprio ou alheio: reclusão de 2 a 12 anos e multa. Na apropriação ele passa a agir como dono; no desvio dá ao bem destino diferente do devido, em benefício próprio ou de outro.",
        pista: "O bem pode ser particular, desde que esteja sob a guarda do funcionário por causa do cargo (ex.: objeto apreendido).",
      },
      {
        termo: "Peculato-furto (§ 1º)",
        faz: "Mesma pena para o funcionário que, sem ter a posse do bem, o subtrai ou ajuda alguém a subtrair, valendo-se da facilidade que o cargo lhe dá (ex.: usa o crachá para entrar no depósito e levar equipamentos).",
      },
      {
        termo: "Peculato de uso",
        faz: "Usar temporariamente bem infungível e não consumível e devolvê-lo intacto (ex.: carro oficial num passeio), sem intenção de ficar com ele, é, em regra, fato atípico para o CP, segundo o STJ. Não existe peculato de uso de dinheiro, que é bem fungível. Pode haver improbidade administrativa.",
        pista: "Se o autor é prefeito, o uso indevido de bens públicos é crime pelo Decreto-Lei 201/1967.",
      },
      {
        termo: "Salário sem trabalhar",
        faz: "O STJ entende que não é peculato o servidor receber o salário sem prestar o serviço correspondente (pode haver outras consequências). Também já considerou atípica a conduta do médico do SUS que recebe ressarcimento pelo uso de equipamento próprio na cirurgia.",
      },
      {
        termo: "Peculato culposo (§§ 2º e 3º)",
        faz: "O funcionário que, por descuido, contribui para que outra pessoa cometa o crime: detenção de 3 meses a 1 ano. A reparação do dano antes da sentença irrecorrível extingue a punibilidade; depois dela, reduz de metade a pena imposta.",
        pista: "Essa regra da reparação só vale no peculato culposo. No doloso cabe, no máximo, arrependimento posterior ou atenuante.",
      },
      {
        parte: "3. Outros peculatos e crimes em sistemas (arts. 313 a 313-B)",
        termo: "Peculato mediante erro de outrem (art. 313)",
        faz: "Apropriar-se de dinheiro ou outra utilidade que, no exercício do cargo, recebeu por erro de outra pessoa: reclusão de 1 a 4 anos e multa. O erro precisa ser espontâneo da vítima.",
        pista: "Se o próprio funcionário provoca o erro para receber, o crime é estelionato.",
      },
      {
        termo: "Inserção de dados falsos (art. 313-A)",
        faz: "O funcionário autorizado que insere ou facilita a inserção de dados falsos, ou altera ou exclui indevidamente dados corretos, nos sistemas informatizados ou bancos de dados da administração, para obter vantagem indevida para si ou para outro ou para causar dano: reclusão de 2 a 12 anos e multa. Crime próprio do funcionário autorizado a operar o sistema.",
      },
      {
        termo: "Modificação não autorizada de sistema (art. 313-B)",
        faz: "O funcionário que modifica ou altera sistema de informações ou programa de informática sem autorização ou pedido da autoridade competente: detenção de 3 meses a 2 anos e multa, aumentada de 1/3 até a metade se resulta dano para a administração ou para o administrado.",
        pista: "313-A: mexe nos dados (pena alta). 313-B: mexe no próprio programa (pena baixa). No 313-B o autor pode ser qualquer funcionário.",
      },
      {
        parte: "4. Documentos e verbas (arts. 314 e 315)",
        termo: "Extravio, sonegação ou inutilização (art. 314)",
        faz: "Extraviar livro oficial ou documento que guarda em razão do cargo, sonegá-lo ou inutilizá-lo, total ou parcialmente: reclusão de 1 a 4 anos, se o fato não for crime mais grave.",
      },
      {
        termo: "Emprego irregular de verbas públicas (art. 315)",
        faz: "Dar às verbas ou rendas públicas aplicação diferente da que a lei estabelece: detenção de 1 a 3 meses ou multa. O dinheiro continua no serviço público, só que usado em finalidade pública diferente da prevista.",
        pista: "Se o funcionário fica com o dinheiro ou o desvia para alguém, é peculato.",
      },
      {
        parte: "5. Concussão e excesso de exação (art. 316)",
        termo: "Concussão",
        faz: "Exigir, para si ou para outro, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida: reclusão de 2 a 12 anos e multa (Lei 13.964/2019). É crime formal: consuma-se com a exigência, e o recebimento é só exaurimento.",
        pista: "Exigiu: concussão. Solicitou ou recebeu: corrupção passiva. Exigiu com violência ou grave ameaça: extorsão.",
      },
      {
        termo: "Excesso de exação (§ 1º)",
        faz: "O funcionário que exige tributo ou contribuição social que sabe ou deveria saber indevido, ou que, sendo devido, cobra por meio vexatório ou gravoso que a lei não autoriza: reclusão de 3 a 8 anos e multa.",
      },
      {
        termo: "Desvio do que recebeu (§ 2º)",
        faz: "Se o funcionário desvia, em proveito próprio ou de outro, o que recebeu indevidamente para recolher aos cofres públicos: reclusão de 2 a 12 anos e multa.",
      },
      {
        parte: "6. Corrupção passiva e facilitação de contrabando (arts. 317 e 318)",
        termo: "Corrupção passiva",
        faz: "Solicitar ou receber, para si ou para outro, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, ou aceitar promessa dessa vantagem: reclusão de 2 a 12 anos e multa. Nas formas solicitar e aceitar promessa, é crime formal.",
        pista: "STF e STJ entendem que não é preciso apontar um ato de ofício específico ligado à vantagem: basta que ela seja recebida em razão da função.",
      },
      {
        termo: "Corrupção passiva majorada e privilegiada",
        faz: "A pena aumenta de 1/3 se, por causa da vantagem ou promessa, o funcionário retarda ou deixa de praticar ato de ofício, ou o pratica violando dever funcional (§ 1º). Se ele faz isso cedendo a pedido ou influência de outra pessoa, sem vantagem nenhuma: detenção de 3 meses a 1 ano ou multa (§ 2º).",
        pista: "A corrupção passiva não depende da ativa: o funcionário pode solicitar e o particular recusar.",
      },
      {
        termo: "Facilitação de contrabando ou descaminho (art. 318)",
        faz: "Facilitar, com infração de dever funcional, a prática de contrabando ou descaminho: reclusão de 3 a 8 anos e multa. Crime próprio do funcionário que tem o dever de reprimir esses crimes; é da Justiça Federal.",
        pista: "Se o funcionário que ajuda não tem esse dever funcional, ele responde como partícipe do contrabando ou do descaminho.",
      },
      {
        parte: "7. Prevaricação e condescendência (arts. 319 a 320)",
        termo: "Prevaricação (art. 319)",
        faz: "Retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal: detenção de 3 meses a 1 ano e multa. Exige essa finalidade especial (dolo específico).",
        pista: "Se deixa de agir porque recebeu vantagem, é corrupção passiva. Se cedeu a pedido, sem vantagem, é corrupção passiva privilegiada.",
      },
      {
        termo: "Prevaricação imprópria (art. 319-A)",
        faz: "O diretor de penitenciária ou agente público que deixa de cumprir o dever de impedir que o preso tenha acesso a aparelho telefônico, de rádio ou similar que permita comunicação com outros presos ou com o ambiente externo: detenção de 3 meses a 1 ano. Aqui não se exige interesse ou sentimento pessoal.",
      },
      {
        termo: "Condescendência criminosa (art. 320)",
        faz: "Deixar o funcionário, por indulgência (tolerância, pena), de responsabilizar subordinado que cometeu infração no cargo ou, quando não tem competência, deixar de levar o fato ao conhecimento da autoridade competente: detenção de 15 dias a 1 mês ou multa. Exige relação de hierarquia.",
        pista: "Se o chefe se omite por outro motivo (medo, interesse, preguiça), pode ser prevaricação.",
      },
      {
        parte: "8. Advocacia administrativa, violência e abandono (arts. 321 a 324)",
        termo: "Advocacia administrativa (art. 321)",
        faz: "Patrocinar, direta ou indiretamente, interesse privado perante a administração pública, valendo-se da condição de funcionário: detenção de 1 a 3 meses ou multa. Se o interesse é ilegítimo: detenção de 3 meses a 1 ano e multa.",
        pista: "O interesse defendido pode ser legítimo: o crime está em usar o cargo para favorecer alguém.",
      },
      {
        termo: "Violência arbitrária (art. 322)",
        faz: "Praticar violência no exercício da função ou a pretexto de exercê-la: detenção de 6 meses a 3 anos, além da pena da violência (ex.: soma com a lesão corporal causada). Há quem defenda que foi revogado pela lei de abuso de autoridade, mas STF e STJ têm decisões reconhecendo que continua em vigor.",
      },
      {
        termo: "Abandono de função (art. 323)",
        faz: "Abandonar cargo público fora dos casos permitidos em lei: detenção de 15 dias a 1 mês ou multa. Se resulta prejuízo público: detenção de 3 meses a 1 ano e multa. Se o fato ocorre em lugar da faixa de fronteira: detenção de 1 a 3 anos e multa.",
        pista: "Na forma simples é detenção ou multa; nas qualificadas, detenção e multa.",
      },
      {
        termo: "Exercício antecipado ou prolongado (art. 324)",
        faz: "Entrar no exercício da função antes de cumpridas as exigências legais (ex.: antes da posse), ou continuar a exercê-la sem autorização depois de saber oficialmente que foi exonerado, removido, substituído ou suspenso: detenção de 15 dias a 1 mês ou multa.",
      },
      {
        parte: "9. Sigilo funcional (arts. 325 e 326)",
        termo: "Violação de sigilo funcional (art. 325)",
        faz: "Revelar fato que conhece em razão do cargo e que deve ficar em segredo, ou facilitar sua revelação: detenção de 6 meses a 2 anos ou multa, se não for crime mais grave. Mesma pena para quem permite ou facilita, inclusive emprestando ou fornecendo senha, o acesso de pessoas não autorizadas a sistemas ou bancos de dados da administração, e para quem usa indevidamente o acesso restrito (§ 1º).",
      },
      {
        termo: "Sigilo funcional qualificado (§ 2º)",
        faz: "Se da ação ou omissão resulta dano à administração pública ou a outra pessoa: reclusão de 2 a 6 anos e multa.",
      },
      {
        termo: "Sigilo de proposta de concorrência (art. 326)",
        faz: "Devassar o sigilo de proposta de concorrência pública, ou dar a outro a oportunidade de devassá-lo, tinha pena de detenção de 3 meses a 1 ano e multa. Hoje a mesma conduta está no art. 337-J (licitações, Lei 14.133/2021), com pena maior: detenção de 2 a 3 anos e multa. Por isso se entende que o art. 326 foi revogado tacitamente.",
      },
    ],
    cuidado:
      "Reparar o dano só extingue a punibilidade no peculato culposo. Exigir é concussão; solicitar ou receber é corrupção passiva; deixar de agir por interesse ou sentimento pessoal é prevaricação. A condição de funcionário se comunica ao particular que sabe dela.",
  },
  questoes: [
    {
      topico: "Peculato",
      subassunto: "Peculato-furto",
      dificuldade: 4,
      raciocinio: "Ele tinha a posse do bem?",
      enunciado:
        "Um servidor, sem nenhuma guarda sobre o almoxarifado, usa o crachá funcional para entrar fora do horário e leva um notebook da repartição. O crime é",
      alternativas: [
        "furto qualificado pelo abuso de confiança do cargo",
        "peculato-furto, do art. 312, § 1º",
        "peculato-apropriação, por ser bem da repartição",
        "peculato de uso, que é fato atípico",
        "peculato por erro de outrem",
      ],
      correta: 1,
      explicacao:
        "O § 1º do art. 312 pune o funcionário que, sem ter a posse, subtrai o bem valendo-se da facilidade que a qualidade de funcionário lhe proporciona.",
      explicacaoErradas:
        "“Furto qualificado” cede ao tipo funcional. “Peculato-apropriação” exige posse em razão do cargo. “Peculato de uso” pressupõe devolução. “Erro de outrem” exige erro de terceiro.",
      pegadinha: "Sem posse, não há apropriação, mas pode haver subtração.",
      conhecimento:
        "O bem pode ser público ou particular.",
    },
    {
      topico: "Peculato",
      subassunto: "Bem particular",
      dificuldade: 4,
      raciocinio: "O caput fala em bem público ou particular.",
      enunciado:
        "Ao atender um acidente, um policial recolhe o relógio de uma vítima desacordada para guardar na viatura e, depois, fica com ele. O crime é",
      alternativas: [
        "apropriação indébita, pois o bem é particular",
        "apropriação de coisa achada, do art. 169",
        "furto simples, pois a vítima estava desacordada",
        "furto com abuso de confiança, pois ele estava em serviço",
        "peculato, pois tinha a posse em razão do cargo",
      ],
      correta: 4,
      explicacao:
        "O art. 312 protege bem móvel público ou particular de que o funcionário tem a posse em razão do cargo. Recolhido no serviço, o relógio ficou sob guarda do policial.",
      explicacaoErradas:
        "“Apropriação indébita” cede ao tipo funcional. “Coisa achada” não descreve quem recolheu o bem em serviço. “Furto simples” e “abuso de confiança” exigem subtração, e a posse foi lícita no início.",
      pegadinha: "Bem particular também pode ser objeto de peculato.",
      conhecimento:
        "A pena é de reclusão de 2 a 12 anos, e multa.",
    },
    {
      topico: "Peculato",
      subassunto: "Peculato culposo",
      dificuldade: 4,
      raciocinio: "Veja o momento da reparação.",
      enunciado:
        "Por negligência, um servidor deixa aberto o depósito de bens apreendidos, e um terceiro furta um motor. O servidor repara o dano antes da sentença irrecorrível. Pelo art. 312,",
      alternativas: [
        "a pena cai de metade, pelo § 3º",
        "a pena é reduzida de um a dois terços, pelo art. 16",
        "a reparação extingue a punibilidade, pelo § 3º",
        "não há efeito, pois o furto foi de um terceiro",
        "só cabe a atenuante de reparar o dano antes do julgamento",
      ],
      correta: 2,
      explicacao:
        "No peculato culposo (§ 2º), a reparação antes da sentença irrecorrível extingue a punibilidade. Se for posterior, reduz de metade a pena imposta (§ 3º).",
      explicacaoErradas:
        "“Cai de metade” vale para a reparação posterior. “Art. 16” e “atenuante” cedem à regra especial. “Não há efeito” ignora o § 3º.",
      pegadinha: "Antes da sentença irrecorrível: extingue. Depois: metade.",
      conhecimento:
        "O culposo tem detenção de 3 meses a 1 ano.",
    },
    {
      topico: "Peculato",
      subassunto: "Reparação no peculato doloso",
      dificuldade: 5,
      raciocinio: "O § 3º só fala do parágrafo anterior.",
      enunciado:
        "Um servidor se apropria dolosamente de dinheiro público e devolve tudo depois do recebimento da denúncia, antes da sentença. Quanto à reparação,",
      alternativas: [
        "cabe só a atenuante do art. 65, III, “b”, do CP",
        "extingue a punibilidade, pelo art. 312, § 3º",
        "reduz a pena de metade, pelo art. 312, § 3º",
        "reduz a pena de um a dois terços, pelo arrependimento posterior",
        "não tem efeito algum, por ser crime doloso",
      ],
      correta: 0,
      explicacao:
        "O § 3º do art. 312 vale só para o culposo. O arrependimento posterior exige reparação até o recebimento da denúncia. Depois disso, sobra a atenuante de reparar o dano antes do julgamento.",
      explicacaoErradas:
        "“Extingue” e “metade” são regras do culposo. “Arrependimento posterior” passou do prazo. “Não tem efeito algum” ignora o art. 65.",
      pegadinha: "O recebimento da denúncia é o limite do art. 16.",
      conhecimento:
        "Se a devolução fosse antes do recebimento, caberia a redução de um a dois terços.",
    },
    {
      topico: "Peculato",
      subassunto: "Erro de outrem x estelionato",
      dificuldade: 5,
      raciocinio: "Quem causou o erro?",
      enunciado:
        "Em leilão de veículos removidos, um arrematante entrega ao servidor, por engano próprio, valor maior que o do lance, e o servidor fica com a diferença. Outro servidor mente sobre o lance e induz um arrematante a pagar a mais. Os crimes são,",
      alternativas: [
        "peculato-furto e concussão",
        "apropriação indébita e estelionato",
        "os dois são peculato por erro de outrem",
        "art. 313 e estelionato, respectivamente",
        "estelionato e art. 313, respectivamente",
      ],
      correta: 3,
      explicacao:
        "O art. 313 pune quem se apropria do que recebeu, no exercício do cargo, por erro de outrem, e esse erro é espontâneo. Se o agente provoca o erro com fraude, o crime é estelionato.",
      explicacaoErradas:
        "“Peculato-furto” exige subtração, e “concussão” exige exigência. “Apropriação indébita” ignora o cargo. “Os dois” ignora a fraude. “Estelionato e art. 313” inverte os casos.",
      pegadinha: "O art. 313 é conhecido como peculato-estelionato, mas o erro não é provocado.",
      conhecimento:
        "A pena do art. 313 é de reclusão de 1 a 4 anos, e multa.",
    },
    {
      topico: "Peculato",
      subassunto: "Arts. 313-A e 313-B",
      dificuldade: 5,
      raciocinio: "Um mexe nos dados, o outro no programa.",
      enunciado:
        "Um servidor autorizado a operar o sistema de um órgão exclui multas corretas do registro de um amigo, para beneficiá-lo. Outro servidor, sem autorização da chefia, altera o programa do sistema. Os crimes são",
      alternativas: [
        "os dois do art. 313-A, por mexerem no sistema",
        "o primeiro do art. 313-A, e o segundo do art. 313-B",
        "os dois do art. 313-B, por falta de autorização",
        "o primeiro do art. 313-B, e o segundo do art. 313-A",
        "corrupção passiva, no primeiro, e nenhum, no segundo caso",
      ],
      correta: 1,
      explicacao:
        "O art. 313-A pune o funcionário autorizado que insere dados falsos ou altera ou exclui dados corretos, com fim de vantagem indevida ou dano. O art. 313-B pune modificar sistema ou programa sem autorização.",
      explicacaoErradas:
        "“Os dois do art. 313-A” e “os dois do art. 313-B” ignoram a diferença de objeto. A troca dos artigos inverte os casos. “Corrupção passiva” exige vantagem, e o art. 313-B descreve o segundo.",
      pegadinha: "O art. 313-A tem pena muito maior que o 313-B.",
      conhecimento:
        "O art. 313-A prevê reclusão de 2 a 12 anos, e multa.",
    },
    {
      topico: "Concussão",
      subassunto: "Exigir e consumação",
      dificuldade: 4,
      raciocinio: "O crime é formal, e o verbo é o que importa.",
      enunciado:
        "Sem violência, um agente diz a um motorista que exige R$ 500 para liberá-lo. O motorista recusa e chama a corregedoria. O crime do agente é",
      alternativas: [
        "corrupção passiva tentada, pois não recebeu nada",
        "extorsão consumada, pela ameaça de reter o veículo",
        "concussão tentada, pois o dinheiro não foi entregue",
        "corrupção passiva consumada",
        "concussão consumada, pois bastou a exigência",
      ],
      correta: 4,
      explicacao:
        "O art. 316 pune exigir vantagem indevida, e o crime é formal: consuma-se com a exigência. O recebimento seria mero exaurimento.",
      explicacaoErradas:
        "“Corrupção passiva” tem os verbos solicitar, receber e aceitar. “Extorsão” exige violência ou grave ameaça. “Tentada” ignora que o crime é formal.",
      pegadinha: "Exigir é mais grave que pedir, e a pena é a mesma.",
      conhecimento:
        "A pena da concussão é de reclusão de 2 a 12 anos, e multa.",
    },
    {
      topico: "Corrupção passiva",
      subassunto: "Forma privilegiada",
      dificuldade: 5,
      raciocinio: "Há pedido de terceiro e não há vantagem.",
      enunciado:
        "A pedido de um vereador amigo, sem nenhuma vantagem, um agente deixa de lavrar uma autuação devida. Pelo CP, a conduta é",
      alternativas: [
        "corrupção passiva, com aumento de um terço",
        "prevaricação, por ter atendido um amigo",
        "corrupção passiva do art. 317, § 2º",
        "condescendência criminosa, por indulgência",
        "atípica, pois não houve vantagem",
      ],
      correta: 2,
      explicacao:
        "O § 2º do art. 317 pune quem deixa de praticar ato de ofício, com infração de dever funcional, cedendo a pedido ou influência de outrem. A pena é de detenção de 3 meses a 1 ano, ou multa.",
      explicacaoErradas:
        "“Aumento de um terço” exige vantagem ou promessa. “Prevaricação” não tem pedido de terceiro. “Condescendência” trata de subordinado. “Atípica” ignora o § 2º.",
      pegadinha: "Atendeu a pedido: corrupção privilegiada. Agiu sozinho: prevaricação.",
      conhecimento:
        "Na forma privilegiada, o crime é material, pois exige o ato ou a omissão.",
    },
    {
      topico: "Prevaricação",
      subassunto: "Prevaricação x condescendência",
      dificuldade: 4,
      raciocinio: "O sentimento é do próprio agente, e o chefe tem outro tipo.",
      enunciado:
        "Sem que ninguém peça, por amizade ao motorista, um agente deixa de lavrar uma autuação devida. O chefe descobre e, por indulgência, não o responsabiliza. Os crimes são, nessa ordem,",
      alternativas: [
        "prevaricação e condescendência criminosa",
        "corrupção passiva e prevaricação",
        "condescendência criminosa e prevaricação",
        "corrupção passiva privilegiada e favorecimento pessoal",
        "prevaricação e corrupção passiva privilegiada",
      ],
      correta: 0,
      explicacao:
        "O art. 319 pune deixar de praticar ato de ofício para satisfazer sentimento pessoal. O art. 320 pune o funcionário que, por indulgência, não responsabiliza subordinado.",
      explicacaoErradas:
        "“Corrupção passiva” exige vantagem ou pedido. A troca da ordem inverte os casos. “Favorecimento pessoal” trata de auxílio a autor de crime para fugir da autoridade.",
      pegadinha: "Se o chefe agisse por outro motivo pessoal, poderia ser prevaricação.",
      conhecimento:
        "A condescendência tem detenção de 15 dias a 1 mês, ou multa.",
    },
    {
      topico: "Violação de sigilo",
      subassunto: "Senha e dano",
      dificuldade: 5,
      raciocinio: "Houve dano? Olhe o § 2º.",
      enunciado:
        "Um servidor empresta sua senha a um despachante, que consulta dados sigilosos do sistema da Administração. Da consulta resulta dano a um cidadão. Pelo art. 325 do CP,",
      alternativas: [
        "a conduta é atípica, pois nenhum segredo foi revelado pelo servidor",
        "há crime do § 1º, I, com detenção de 6 meses a 2 anos",
        "há crime do art. 313-A, pois houve fornecimento de senha",
        "há crime do § 2º, com reclusão de 2 a 6 anos e multa",
        "há crime do art. 313-B, de detenção de 3 meses a 2 anos",
      ],
      correta: 3,
      explicacao:
        "O § 1º, I, pune quem empresta senha a pessoa não autorizada. Se da ação resulta dano à Administração ou a outrem, o § 2º prevê reclusão de 2 a 6 anos, e multa.",
      explicacaoErradas:
        "“Atípica” ignora o § 1º. “§ 1º, I” não considera o dano. “Art. 313-A” trata de dados falsos ou exclusão. “Art. 313-B” trata de mudar o programa.",
      pegadinha: "O dano pode ser a outrem, e não só à Administração.",
      conhecimento:
        "O caput é subsidiário: vale se o fato não constitui crime mais grave.",
    },
    {
      topico: "Concussão",
      subassunto: "Excesso de exação",
      dificuldade: 5,
      raciocinio: "O tributo devido não impede o crime.",
      enunciado:
        "Um fiscal cobra um tributo realmente devido, mas expõe o devedor à humilhação pública diante de clientes, por meio que a lei não autoriza. A conduta é",
      alternativas: [
        "concussão, com reclusão de 2 a 12 anos e multa",
        "abuso de autoridade, e nada mais, pois o tributo era devido",
        "excesso de exação, com reclusão de 3 a 8 anos e multa",
        "atípica, pois o tributo era devido",
        "extorsão, pelo constrangimento causado",
      ],
      correta: 2,
      explicacao:
        "O § 1º do art. 316 pune quem exige tributo indevido ou, quando devido, emprega na cobrança meio vexatório ou gravoso que a lei não autoriza. A pena é de reclusão de 3 a 8 anos, e multa.",
      explicacaoErradas:
        "“Concussão” trata de vantagem indevida. “Abuso de autoridade” e “extorsão” cedem ao tipo específico. “Atípica” esquece a segunda parte do § 1º.",
      pegadinha: "O excesso pode ser na forma de cobrar, e não só no valor.",
      conhecimento:
        "Desviar o que recebeu para recolher aos cofres leva ao § 2º, de 2 a 12 anos.",
    },
  ],
};
