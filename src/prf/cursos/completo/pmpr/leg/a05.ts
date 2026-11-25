import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "leg-a05",
  resumo: {
    ideia:
      "A Lei 12.850/2013 diz o que é organização criminosa, pune quem a integra e traz as ferramentas para investigá-la: colaboração premiada, ação controlada e infiltração de agentes. A prova cobra o conceito, as penas e as regras de cada ferramenta.",
    itens: [
      {
        termo: "Conceito (art. 1º, § 1º)",
        faz: "Associação de 4 ou mais pessoas, estruturalmente ordenada e com divisão de tarefas, ainda que informal, para obter vantagem de qualquer natureza com infrações penais de pena máxima superior a 4 anos ou de caráter transnacional.",
        pista: "Não confundir: associação criminosa do art. 288 do CP = 3 ou mais pessoas para cometer crimes, pena de 1 a 3 anos.",
      },
      {
        termo: "Crime do art. 2º",
        faz: "Promover, constituir, financiar ou integrar organização criminosa, pessoalmente ou por interposta pessoa: reclusão de 3 a 8 anos e multa, somada às penas dos crimes praticados. Na mesma pena, quem impede ou embaraça a investigação, se o fato não for crime mais grave.",
        pista: "Quando a organização é voltada para crime hediondo, o art. 2º também é hediondo.",
      },
      {
        termo: "Agravante e aumentos (art. 2º, §§ 2º a 4º)",
        faz: "Até a metade se houver emprego de arma de fogo. Pena agravada para quem exerce o comando, mesmo sem praticar atos de execução. De 1/6 a 2/3 se houver criança ou adolescente (ou a organização for voltada a crimes do ECA), funcionário público usando o cargo, produto mandado ao exterior, conexão com outras organizações ou transnacionalidade.",
      },
      {
        termo: "Funcionário público e líderes (art. 2º, §§ 5º a 9º)",
        faz: "O juiz pode afastar o funcionário do cargo, sem prejuízo do salário. A condenação definitiva gera perda do cargo e proibição de exercer função pública por 8 anos depois de cumprida a pena. Os líderes de organizações armadas começam a pena em presídio de segurança máxima. Quem mantém o vínculo não progride de regime.",
        pista: "Indício de policial envolvido: a Corregedoria instaura inquérito e avisa o MP.",
      },
      {
        termo: "Meios de prova (art. 3º)",
        faz: "Em qualquer fase: colaboração premiada, captação ambiental, ação controlada, acesso a registros de ligações e dados cadastrais, interceptação telefônica e telemática, quebra de sigilos financeiro, bancário e fiscal, infiltração de policiais e cooperação entre órgãos.",
      },
      {
        termo: "Colaboração premiada: prêmios",
        faz: "O juiz pode dar perdão judicial, reduzir a pena em até 2/3 ou trocá-la por restritiva de direitos, se a colaboração trouxer ao menos um resultado: identificar coautores, revelar a estrutura, prevenir crimes, recuperar o produto do crime ou localizar a vítima com vida. Depois da sentença: redução até a metade ou progressão sem os requisitos objetivos.",
      },
      {
        termo: "Colaboração premiada: limites",
        faz: "O juiz não participa das negociações. O MP pode nem oferecer denúncia se o colaborador não for o líder, for o primeiro a colaborar e o crime revelado for desconhecido (sem inquérito aberto). Nenhuma prisão, medida cautelar, recebimento de denúncia ou sentença condenatória pode se basear só na palavra do colaborador.",
        pista: "O acordo fica em sigilo até o recebimento da denúncia.",
      },
      {
        termo: "Ação controlada (arts. 8º e 9º)",
        faz: "Retardar a prisão ou a intervenção, mantendo a observação, para agir no momento mais útil às provas. Exige só comunicação prévia ao juiz, que pode fixar limites e avisa o MP. Se cruzar fronteira, precisa da cooperação dos outros países.",
        pista: "Na Lei de Drogas é diferente: a ação controlada exige autorização judicial.",
      },
      {
        termo: "Infiltração de agentes (arts. 10 a 14)",
        faz: "Só de policiais, com autorização judicial sigilosa e quando a prova não puder ser obtida de outro modo. Presencial: até 6 meses, renováveis. Virtual, pela internet: até 6 meses, renováveis até 720 dias no total. O agente responde por excessos, mas não por crime cometido quando não se podia exigir outra conduta. Ele pode recusar ou interromper a infiltração.",
      },
      {
        termo: "Dados e registros (arts. 15 a 17)",
        faz: "Delegado e MP acessam, sem autorização judicial, só os dados cadastrais de qualificação, filiação e endereço. Empresas de transporte dão acesso às reservas por 5 anos, e as telefônicas guardam por 5 anos os registros de origem e destino das ligações.",
      },
      {
        termo: "Crimes da investigação (arts. 18 a 21-B)",
        faz: "Revelar a identidade, fotografar ou filmar o colaborador sem autorização escrita: 1 a 3 anos. Delação falsa: 1 a 4 anos. Quebrar o sigilo da ação controlada ou da infiltração: 1 a 4 anos. Recusar dados requisitados: 6 meses a 2 anos. Desde 2025: mandar ou pagar alguém para atacar agente público, testemunha, jurado, perito ou colaborador, ou combinar esse ataque, para atrapalhar a investigação: 4 a 12 anos, em presídio federal de segurança máxima.",
      },
    ],
  },
  questoes: [
    {
      topico: "Conceito",
      subassunto: "Organização × associação criminosa",
      dificuldade: 5,
      raciocinio: "Art. 1º, § 1º: 4 ou mais pessoas, estrutura, divisão de tarefas, infrações com pena máxima SUPERIOR a 4 anos ou transnacionais. Crimes com pena máxima de exatamente 4 anos, sem ligação com o exterior, não servem. Resta o art. 288 do CP (3 ou mais pessoas para cometer crimes).",
      enunciado: "Quatro pessoas se organizam de forma estável, com chefe e tarefas divididas, para praticar crimes cuja pena máxima é de exatamente 4 anos, todos dentro do país e sem nenhuma ligação com o exterior. Elas respondem por",
      alternativas: [
        "organização criminosa (art. 2º da Lei 12.850), porque são quatro pessoas com divisão de tarefas.",
        "nenhum crime de associação, porque esses crimes não admitem a prisão preventiva.",
        "associação criminosa (art. 288 do CP), porque a pena desses crimes não passa de 4 anos.",
        "organização criminosa, com aumento de pena pela estrutura ordenada do grupo.",
        "associação para o tráfico, porque a lei equipara toda união estável para crimes.",
      ],
      correta: 2,
      explicacao:
        "A organização criminosa exige infrações com pena máxima superior a 4 anos ou de caráter transnacional. Aqui a pena máxima é de exatamente 4 anos e não há ligação com o exterior. Como são mais de três pessoas associadas de forma estável para cometer crimes, sobra a associação criminosa do art. 288 do CP.",
      explicacaoErradas:
        "Quatro pessoas e divisão de tarefas não bastam: falta o requisito da pena superior a 4 anos. A associação do art. 288 não depende de prisão preventiva. A estrutura ordenada é requisito do conceito, não aumento de pena. E a associação para o tráfico só vale para crimes da Lei de Drogas.",
      pegadinha: "Ler \"4 anos\" como suficiente: a lei exige pena máxima SUPERIOR a 4 anos.",
      conhecimento: "Se os crimes fossem transnacionais, a pena máxima não importaria.",
    },
    {
      topico: "Crime de organização criminosa",
      subassunto: "Comando e arma de fogo",
      dificuldade: 4,
      raciocinio: "§ 3º: pena agravada para quem exerce o comando, ainda que não pratique atos de execução. § 2º: aumento até a metade se houver emprego de arma de fogo na atuação da organização.",
      enunciado: "Marcos comanda uma organização criminosa que usa armas de fogo nos roubos de carga em rodovias, mas ele nunca participa pessoalmente dos assaltos. Quanto ao crime do art. 2º, Marcos",
      alternativas: [
        "não responde, porque não praticou nenhum ato de execução dos roubos de carga.",
        "responde só como partícipe, com a pena reduzida de 1/6 a 1/3 por não executar.",
        "responde pela pena simples, porque o aumento pela arma só vale para quem a usou.",
        "responde com aumento de 1/6 a 2/3, pela transnacionalidade dos roubos de carga.",
        "responde com pena agravada pelo comando e aumentada até a metade pela arma.",
      ],
      correta: 4,
      explicacao:
        "O § 3º do art. 2º agrava a pena de quem exerce o comando da organização, ainda que não pratique pessoalmente atos de execução. O § 2º aumenta as penas até a metade se, na atuação da organização, houver emprego de arma de fogo.",
      explicacaoErradas:
        "Comandar já é integrar e promover a organização. Não há redução para o chefe; ao contrário, a pena é agravada. O aumento pela arma considera a atuação da organização, não só quem atirou. E nada indica que os roubos tenham caráter transnacional.",
      pegadinha: "Achar que o chefe que \"não suja as mãos\" escapa do crime ou tem pena menor.",
      conhecimento: "As lideranças de organizações armadas começam a cumprir a pena em presídio de segurança máxima.",
    },
    {
      topico: "Colaboração premiada",
      subassunto: "Colaboração depois da sentença",
      dificuldade: 5,
      raciocinio: "Art. 4º, caput: perdão judicial, redução até 2/3 ou substituição por restritiva. § 5º: colaboração posterior à sentença: redução até a metade ou progressão ainda que ausentes os requisitos objetivos.",
      enunciado: "Condenado por integrar organização criminosa, João decide colaborar com a Justiça depois da sentença, ajudando a recuperar parte do dinheiro desviado. Nesse caso, a lei prevê que",
      alternativas: [
        "pode haver redução até a metade, ou progressão sem os requisitos objetivos.",
        "a pena pode ser reduzida em até 2/3, como em qualquer colaboração feita antes da sentença.",
        "o juiz pode conceder perdão judicial, porque o dinheiro foi recuperado em parte.",
        "não cabe benefício algum, porque a colaboração só vale até a sentença do processo.",
        "o Ministério Público pode desistir da ação, desde que João não seja o líder.",
      ],
      correta: 0,
      explicacao:
        "Pelo art. 4º, § 5º, se a colaboração vier depois da sentença, a pena pode ser reduzida até a metade ou pode ser admitida a progressão de regime ainda que faltem os requisitos objetivos, como o tempo mínimo de pena cumprida.",
      explicacaoErradas:
        "A redução de até 2/3 e o perdão judicial são os prêmios da colaboração antes da sentença. A lei aceita colaboração depois da sentença, com prêmios menores. E não há como desistir de uma ação que já terminou em condenação: o não oferecimento da denúncia vale antes do processo.",
      pegadinha: "Aplicar à colaboração depois da sentença os mesmos prêmios da colaboração antes dela.",
      conhecimento: "Recuperar total ou parcialmente o produto do crime é um dos cinco resultados que dão direito ao prêmio.",
    },
    {
      topico: "Colaboração premiada",
      subassunto: "Palavra do colaborador",
      dificuldade: 5,
      raciocinio: "Art. 4º, § 16: nenhuma medida cautelar real ou pessoal, recebimento de denúncia ou queixa ou sentença condenatória será decretada ou proferida com fundamento APENAS nas declarações do colaborador.",
      enunciado: "Um colaborador aponta Paulo como tesoureiro da organização, mas não há nenhuma outra prova contra ele. Com base só nessa declaração,",
      alternativas: [
        "o juiz pode decretar a prisão preventiva de Paulo, se houver risco à ordem pública.",
        "o juiz pode receber a denúncia, deixando a prova das acusações para o processo.",
        "o juiz pode condenar Paulo, porque a colaboração homologada vale como prova plena.",
        "não cabem a prisão de Paulo, o recebimento da denúncia nem a condenação.",
        "só a condenação é proibida; a prisão e o recebimento da denúncia ficam permitidos.",
      ],
      correta: 3,
      explicacao:
        "O art. 4º, § 16, proíbe que medidas cautelares reais ou pessoais, o recebimento da denúncia ou da queixa e a sentença condenatória se baseiem apenas nas declarações do colaborador. A palavra dele precisa de outras provas que a confirmem.",
      explicacaoErradas:
        "A prisão preventiva é medida cautelar pessoal, por isso também é vedada só com a palavra do colaborador. O mesmo vale para o recebimento da denúncia. A homologação do acordo não transforma a declaração em prova plena. E a proibição alcança as três medidas, não só a condenação.",
      pegadinha: "Achar que só a condenação exige outras provas, e não a prisão ou o recebimento da denúncia.",
      conhecimento: "A colaboração é \"meio de obtenção de prova\": ela leva às provas, mas não é a prova em si.",
    },
    {
      topico: "Colaboração premiada",
      subassunto: "Não oferecimento da denúncia",
      dificuldade: 5,
      raciocinio: "Art. 4º, § 4º: o MP pode deixar de oferecer denúncia se a infração era desconhecida (sem inquérito ou procedimento instaurado, § 4º-A) e o colaborador não for o líder e for o primeiro a prestar efetiva colaboração.",
      enunciado: "Um integrante da organização, que não é o líder, é o primeiro a procurar o Ministério Público e revela uma fraude da qual nenhuma autoridade sabia, sem inquérito aberto. Nesse caso,",
      alternativas: [
        "o MP só pode propor redução de pena, porque a denúncia é obrigatória contra todos.",
        "o MP pode deixar de oferecer denúncia contra ele, se a colaboração for efetiva.",
        "o MP pode deixar de denunciar só se ele for o líder, por ter mais informações.",
        "o benefício depende de já existir um inquérito aberto sobre essa mesma fraude.",
        "o juiz deve participar das negociações para garantir a voluntariedade do acordo.",
      ],
      correta: 1,
      explicacao:
        "O art. 4º, § 4º, permite que o MP deixe de oferecer denúncia quando a colaboração se refere a infração de que não tinha conhecimento prévio e o colaborador não é o líder e é o primeiro a prestar efetiva colaboração.",
      explicacaoErradas:
        "A lei abre exceção à obrigatoriedade da denúncia nesse caso. O líder é justamente excluído do benefício. Se já houvesse inquérito, existiria conhecimento prévio e o benefício não caberia. E o juiz não participa das negociações; ele só homologa o acordo.",
      pegadinha: "Inverter o requisito: o benefício é para quem NÃO é o líder.",
      conhecimento: "Há conhecimento prévio quando o MP ou a polícia já instaurou inquérito ou procedimento sobre os fatos.",
    },
    {
      topico: "Meios de prova",
      subassunto: "Ação controlada",
      dificuldade: 5,
      raciocinio: "Lei 12.850, art. 8º, § 1º: retardamento previamente COMUNICADO ao juiz, que fixa limites e avisa o MP (STJ: independe de autorização). Lei de Drogas, art. 53, II: não atuação policial mediante AUTORIZAÇÃO judicial, ouvido o MP.",
      enunciado: "Policiais acompanham um carregamento de uma organização criminosa e decidem retardar a abordagem para prender também os chefes. Sobre essa ação controlada, é correto afirmar que",
      alternativas: [
        "na Lei 12.850 basta comunicar antes ao juiz; na Lei de Drogas, exige-se autorização.",
        "na Lei 12.850 e na Lei de Drogas, a ação controlada exige autorização judicial prévia.",
        "nas duas leis, a polícia pode retardar a ação sem avisar o juiz, porque há flagrante.",
        "na Lei 12.850, o delegado deve pedir autorização ao MP, e não comunicar ao juiz.",
        "se a carga for cruzar a fronteira, basta a comunicação ao juiz, sem outros países.",
      ],
      correta: 0,
      explicacao:
        "Na Lei 12.850, a ação controlada exige só comunicação prévia ao juiz, que pode fixar limites e avisa o MP; o STJ confirma que não é preciso autorização. Na Lei de Drogas (art. 53, II), a não atuação policial depende de autorização judicial, ouvido o MP.",
      explicacaoErradas:
        "As duas leis têm regras diferentes. A comunicação ao juiz é obrigatória na Lei 12.850. O MP não autoriza a medida: ele é avisado pelo juiz. E, se houver transposição de fronteiras, a lei exige a cooperação das autoridades dos países do itinerário ou destino.",
      pegadinha: "Achar que a ação controlada da Lei 12.850 precisa de autorização judicial.",
      conhecimento: "Ao fim da diligência, faz-se um auto circunstanciado sobre a ação controlada.",
    },
    {
      topico: "Meios de prova",
      subassunto: "Infiltração de agentes",
      dificuldade: 4,
      raciocinio: "Art. 10, § 3º: presencial até 6 meses, renováveis. Art. 10-A, § 4º: virtual até 6 meses, renováveis, total até 720 dias. Art. 13: agente responde por excessos; não é punível o crime quando inexigível conduta diversa. Art. 14: pode recusar ou cessar.",
      enunciado: "Sobre a infiltração de agentes prevista na Lei 12.850/2013, é correto afirmar que",
      alternativas: [
        "pode ser feita por qualquer servidor público, desde que treinado pela polícia.",
        "dispensa autorização do juiz se o delegado comunicar a medida ao MP em 24 horas.",
        "obriga o agente a permanecer até o fim, sem poder recusar ou interromper a missão.",
        "na infiltração pela internet, as renovações não passam de 720 dias no total.",
        "torna o agente imune a qualquer punição pelos atos que praticar durante a missão.",
      ],
      correta: 3,
      explicacao:
        "Pelo art. 10-A, § 4º, a infiltração virtual é autorizada por até 6 meses, com renovações, desde que o total não passe de 720 dias e a necessidade seja comprovada.",
      explicacaoErradas:
        "A infiltração é feita por agentes de polícia. Ela sempre depende de autorização judicial, motivada e sigilosa. O agente tem o direito de recusar ou de fazer cessar a infiltração. E ele responde pelos excessos, ficando livre de punição só pelo crime praticado quando não se podia exigir outra conduta.",
      pegadinha: "Aplicar à infiltração presencial o teto de 720 dias, que é só da virtual.",
      conhecimento: "Não comete crime o policial que oculta a identidade na internet para colher provas (art. 10-C).",
    },
    {
      topico: "Meios de prova",
      subassunto: "Dados cadastrais",
      dificuldade: 4,
      raciocinio: "Art. 15: delegado e MP acessam, independentemente de autorização judicial, APENAS dados cadastrais que informem qualificação pessoal, filiação e endereço (Justiça Eleitoral, telefônicas, bancos, provedores, administradoras de cartão).",
      enunciado: "Sem ordem judicial, o delegado que investiga uma organização criminosa pode obter de uma empresa telefônica",
      alternativas: [
        "o conteúdo das conversas gravadas do investigado nos últimos 5 anos.",
        "a lista de ligações feitas e recebidas, com datas e horários de cada uma.",
        "o extrato bancário do investigado, se a conta estiver no nome da empresa.",
        "a localização em tempo real do celular do investigado, por sinal de antena.",
        "o nome, a filiação e o endereço do investigado, que constam no cadastro.",
      ],
      correta: 4,
      explicacao:
        "O art. 15 permite ao delegado e ao MP acessar, sem autorização judicial, apenas os dados cadastrais que informem a qualificação pessoal, a filiação e o endereço do investigado.",
      explicacaoErradas:
        "O conteúdo de conversas depende de interceptação, e a localização em tempo real também exige ordem judicial. A lista de ligações não é dado cadastral, então fica fora do acesso direto do art. 15. E o extrato bancário depende de quebra de sigilo autorizada pelo juiz.",
      pegadinha: "Confundir dados cadastrais (sem juiz) com registros de ligações (com juiz).",
      conhecimento: "As telefônicas guardam por 5 anos os registros de origem e destino das ligações (art. 17).",
    },
    {
      topico: "Crimes da lei",
      subassunto: "Obstrução (2025)",
      dificuldade: 5,
      raciocinio: "Art. 21-A (Lei 15.245/2025): solicitar, mediante vantagem, ou ordenar violência ou grave ameaça contra agente público, advogado, defensor dativo, jurado, testemunha, colaborador ou perito, para impedir, embaraçar ou retaliar investigação ou processo contra orcrim: 4 a 12 anos; pena começa em presídio federal de segurança máxima.",
      enunciado: "Um integrante de facção, preso, manda um comparsa ameaçar de morte uma testemunha para que ela não deponha no processo contra a organização. Pelas regras incluídas em 2025, ele responde por",
      alternativas: [
        "coação no curso do processo (art. 344 do CP), apenas, com pena de 1 a 4 anos.",
        "obstrução de ações contra o crime organizado, com pena de 4 a 12 anos.",
        "nenhum crime novo, porque a ameaça foi feita pelo comparsa e não por ele.",
        "embaraço à investigação (art. 2º, § 1º), com pena de 3 a 8 anos, apenas.",
        "conspiração para obstrução, que exige só uma pessoa e tem pena de 1 a 3 anos.",
      ],
      correta: 1,
      explicacao:
        "A Lei 15.245/2025 criou o art. 21-A: solicitar, com promessa de vantagem, ou ordenar a alguém violência ou grave ameaça contra testemunha, agente público, jurado, perito, advogado ou colaborador, para impedir ou retaliar o processo contra a organização, tem pena de 4 a 12 anos e multa. Quem ordena responde mesmo sem executar.",
      explicacaoErradas:
        "O art. 21-A é regra especial e mais grave que a coação no curso do processo. Ordenar já é a conduta punida. O art. 2º, § 1º, só se aplica se o fato não constituir crime mais grave. E a conspiração (art. 21-B) exige o ajuste de duas ou mais pessoas, com a mesma pena de 4 a 12 anos.",
      pegadinha: "Achar que quem só manda, sem executar a ameaça, fica de fora.",
      conhecimento: "O condenado por esses crimes começa a cumprir a pena em presídio federal de segurança máxima.",
    },
    {
      topico: "Crime de organização criminosa",
      subassunto: "Funcionário público e líderes",
      dificuldade: 4,
      raciocinio: "I: § 5º afastamento sem prejuízo da remuneração. II: § 6º perda do cargo + interdição por 8 anos após cumprir a pena. III: § 8º líderes de organizações armadas começam em segurança máxima. IV: errado, são 4 pessoas.",
      enunciado: "Sobre a Lei 12.850/2013, considere: I. havendo indícios de que um funcionário público integra a organização, o juiz pode afastá-lo do cargo sem prejuízo do salário; II. a condenação definitiva gera a perda do cargo e a proibição de exercer função pública por 8 anos depois de cumprida a pena; III. as lideranças de organizações armadas começam a cumprir a pena em presídio de segurança máxima; IV. a organização criminosa exige no mínimo três pessoas. Estão corretos",
      alternativas: [
        "I e II, apenas.",
        "I e IV, apenas.",
        "I, II e III, apenas.",
        "II, III e IV, apenas.",
        "I, II, III e IV.",
      ],
      correta: 2,
      explicacao:
        "Os itens I (art. 2º, § 5º), II (art. 2º, § 6º) e III (art. 2º, § 8º) reproduzem a lei.",
      explicacaoErradas:
        "O item IV está errado: a organização criminosa exige 4 ou mais pessoas. Três ou mais pessoas é o número da associação criminosa do art. 288 do CP.",
      pegadinha: "Trocar o número de pessoas: organização = 4; associação criminosa = 3; associação para o tráfico = 2.",
      conhecimento: "Se houver indício de policial envolvido, a Corregedoria instaura inquérito e avisa o MP, que acompanha o caso.",
    },
  ],
};
