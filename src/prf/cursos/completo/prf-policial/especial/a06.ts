import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "especial-06",
  resumo: {
    ideia:
      "Quem tem documento civil não passa por identificação criminal, salvo nos casos da Lei 12.037. A Lei 12.850 define organização criminosa, cria o crime de integrá-la e dá à investigação meios especiais, como a colaboração premiada, a ação controlada e a infiltração.",
    itens: [
      {
        termo: "Regra da identificação",
        faz: "O civilmente identificado não é submetido a identificação criminal, salvo nos casos da lei (art. 1º). Valem RG, carteira de trabalho, profissional ou funcional, passaporte, outro documento público e documento militar (art. 2º).",
      },
      {
        termo: "Exceções",
        faz: "Documento rasurado ou com sinal de falsificação, insuficiente, documentos com dados conflitantes, outros nomes nos registros policiais, documento gasto ou antigo, e quando o juiz a considerar essencial à investigação (art. 3º).",
        pista: "Só o caso da investigação (inciso IV) depende de despacho do juiz.",
      },
      {
        termo: "Crimes graves",
        faz: "Desde a Lei 15.295/2025, há identificação criminal com coleta de perfil genético no recebimento da denúncia e no flagrante por crime com grave violência contra a pessoa, crimes sexuais, certos crimes do ECA e organização criminosa armada (arts. 3º, VII, e 5º).",
      },
      {
        termo: "Sigilo e exclusão",
        faz: "A identificação criminal não aparece em atestado de antecedentes antes do trânsito em julgado (art. 6º). O perfil genético sai do banco com a absolvição ou, se houver condenação, a pedido, 20 anos depois do fim da pena (art. 7º-A).",
      },
      {
        termo: "Organização criminosa",
        faz: "Quatro ou mais pessoas, estrutura ordenada, divisão de tarefas e objetivo de vantagem, com infrações de pena máxima acima de 4 anos ou de caráter transnacional (art. 1º, § 1º).",
        pista: "Associação criminosa do CP: 3 ou mais pessoas, sem as demais exigências.",
      },
      {
        termo: "O crime e as penas",
        faz: "Promover, constituir, financiar ou integrar: reclusão de 3 a 8 anos, mais as penas dos outros crimes (art. 2º). Arma de fogo: até a metade a mais. Comando: pena agravada. Criança, funcionário público, exterior, outras organizações ou transnacionalidade: 1/6 a 2/3.",
      },
      {
        termo: "Funcionário público",
        faz: "Pode ser afastado do cargo, com remuneração, durante a investigação. Condenado, perde o cargo e fica 8 anos sem poder exercer cargo público depois de cumprir a pena (art. 2º, §§ 5º e 6º).",
        pista: "Se houver indício de policial envolvido, a Corregedoria instaura inquérito e avisa o Ministério Público (§ 7º).",
      },
      {
        termo: "Colaboração premiada",
        faz: "Perdão judicial, redução de até 2/3 ou troca por pena restritiva, se a colaboração trouxer resultado. Depois da sentença: redução até a metade ou progressão sem os requisitos objetivos (art. 4º).",
        pista: "O Ministério Público só deixa de denunciar se o fato era desconhecido e o colaborador não é o líder e foi o primeiro a colaborar.",
      },
      {
        termo: "Limites da delação",
        faz: "O juiz não negocia o acordo. Só a palavra do colaborador não basta para medida cautelar, recebimento da denúncia ou condenação. O delatado fala depois do delator (art. 4º, §§ 6º, 10-A e 16).",
      },
      {
        termo: "Ação controlada",
        faz: "Retardar a intervenção policial ou administrativa para agir no momento mais eficaz, com aviso prévio ao juiz, que fixa os limites (art. 8º). Se cruzar a fronteira, exige cooperação dos outros países (art. 9º).",
      },
      {
        termo: "Infiltração",
        faz: "De agentes de polícia, com autorização judicial sigilosa, se a prova não puder ser obtida de outro modo, por até 6 meses renováveis (art. 10). O agente responde pelos excessos, mas não pelo crime que não podia evitar (art. 13).",
      },
      {
        termo: "Dados e crimes da lei",
        faz: "Delegado e Ministério Público acessam sem ordem judicial só qualificação, filiação e endereço (art. 15). A lei pune expor o colaborador, delatar falsamente, quebrar sigilo, negar dados requisitados e, desde 2025, obstruir ações contra o crime organizado (arts. 18 a 21-B).",
      },
    ],
    cuidado:
      "Duas mudanças recentes não estão no material: a Lei 15.295/2025 (perfil genético nos crimes graves, arts. 3º, VII, e 5º da Lei 12.037) e a Lei 15.245/2025 (arts. 21-A e 21-B da Lei 12.850, com pena de 4 a 12 anos e início em presídio federal de segurança máxima).",
  },
  questoes: [
    {
      topico: "Identificação criminal",
      subassunto: "Regra",
      dificuldade: 4,
      raciocinio: "A CNH é documento público que identifica; furto simples não está no inciso VII.",
      enunciado:
        "Policiais rodoviários federais prendem em flagrante um motorista por furto simples de combustível. Ele apresenta CNH válida, sem rasura e sem dúvida sobre seus dados, e não há registro de outros nomes. Na delegacia, a identificação criminal:",
      alternativas: [
        "deve ser feita, pois toda prisão em flagrante exige identificação datiloscópica",
        "deve ser feita, com coleta de perfil genético, por ser crime contra o patrimônio",
        "não deve ser feita, pois ele está civilmente identificado e o caso não é exceção",
        "pode ser feita por decisão do delegado, que avalia a conveniência em cada flagrante",
        "não deve ser feita, pois a CNH só vale como identificação se o RG for apresentado",
      ],
      correta: 2,
      explicacao:
        "O civilmente identificado não será submetido a identificação criminal, salvo nos casos da Lei 12.037 (art. 1º, e CF, art. 5º, LVIII). A CNH é documento público que permite a identificação (art. 2º, VI). O furto simples, sem violência, não está entre os crimes do art. 3º, VII, e nenhuma outra exceção aparece.",
      explicacaoErradas:
        "Não existe regra de que “toda prisão em flagrante” exige identificação criminal. O “perfil genético” no flagrante vale para os crimes do art. 3º, VII, não para qualquer crime patrimonial. O delegado não tem poder de decidir “a conveniência”: as hipóteses são as da lei. A CNH vale sozinha, sem depender do RG.",
      pegadinha: "Flagrante não é motivo, por si só, para identificar criminalmente.",
      conhecimento: "Os documentos militares se equiparam aos civis para os fins da lei (art. 2º, parágrafo único).",
    },
    {
      topico: "Identificação criminal",
      subassunto: "Exceções",
      dificuldade: 4,
      raciocinio: "Documentos conflitantes autorizam a identificação criminal sem ordem do juiz.",
      enunciado:
        "Numa abordagem que termina em flagrante, um homem apresenta duas carteiras de identidade, de estados diferentes, com nomes de mãe diferentes. Sobre a identificação criminal dele:",
      alternativas: [
        "é proibida, pois ele apresentou documento de identificação civil válido",
        "depende de despacho do juiz, a pedido do delegado ou do Ministério Público",
        "só pode ocorrer depois de perícia que comprove a falsidade de um dos documentos",
        "só pode ocorrer se ele também constar de registros policiais com outros nomes",
        "pode ocorrer, e as cópias dos documentos devem ser juntadas aos autos",
      ],
      correta: 4,
      explicacao:
        "Mesmo com documento apresentado, pode haver identificação criminal quando o indiciado porta documentos de identidade distintos, com informações conflitantes entre si (art. 3º, III). As cópias dos documentos são juntadas aos autos, ainda que insuficientes (parágrafo único). Só o caso do inciso IV exige despacho judicial.",
      explicacaoErradas:
        "O documento apresentado não impede a identificação nessa hipótese, por isso “é proibida” erra. O “despacho do juiz” só é exigido no inciso IV. A lei não exige perícia de falsidade: basta o conflito de dados. O uso de outros nomes nos registros é outra hipótese, autônoma, e não requisito cumulativo.",
      pegadinha: "As hipóteses do art. 3º são alternativas: basta uma.",
      conhecimento: "A autoridade deve tomar providências para evitar o constrangimento do identificado (art. 4º).",
    },
    {
      topico: "Identificação criminal",
      subassunto: "Ordem judicial",
      dificuldade: 5,
      raciocinio: "O inciso IV é o único que depende do juiz.",
      enunciado:
        "Numa investigação, o delegado entende que a identificação criminal de um indiciado com RG regular é essencial para comparar impressões digitais com as de um local de crime. Pela Lei 12.037/2009, essa identificação:",
      alternativas: [
        "depende de despacho do juiz, que pode agir de ofício ou a pedido, inclusive da defesa",
        "pode ser determinada pelo próprio delegado, que preside o inquérito e conduz a investigação",
        "depende de requisição do Ministério Público, que é o titular da ação penal pública",
        "é proibida, pois o RG regular impede qualquer identificação criminal do indiciado",
        "depende só do consentimento escrito do indiciado, que pode recusar a coleta sem sanção",
      ],
      correta: 0,
      explicacao:
        "Pode haver identificação criminal quando ela for essencial às investigações policiais, segundo despacho da autoridade judiciária competente, que decidirá de ofício ou mediante representação da autoridade policial, do Ministério Público ou da defesa (art. 3º, IV). Nesse caso, ela inclui a coleta de material biológico para o perfil genético (art. 5º, § 1º).",
      explicacaoErradas:
        "O delegado pode representar, mas não decide sozinho, por isso “pelo próprio delegado” erra. O Ministério Público também só pede, sem “requisição” que vincule. O RG regular não impede essa hipótese, que existe justamente para quem tem documento. A lei não condiciona a medida ao “consentimento” do indiciado.",
      pegadinha: "Delegado, Ministério Público e defesa pedem; quem decide é o juiz.",
      conhecimento: "O perfil genético fica em banco de dados sigiloso, gerido por unidade oficial de perícia (art. 5º-A).",
    },
    {
      topico: "Identificação criminal",
      subassunto: "Perfil genético",
      dificuldade: 5,
      raciocinio: "A Lei 15.295/2025 levou o perfil genético ao flagrante dos crimes do inciso VII.",
      enunciado:
        "Policiais rodoviários federais prendem em flagrante o autor de um roubo cometido com grave violência contra o motorista. O preso apresenta RG regular. Pela Lei 12.037/2009, com as mudanças de 2025, a identificação criminal:",
      alternativas: [
        "não será feita, pois o RG regular afasta qualquer identificação",
        "será feita e incluirá a coleta de material biológico para o perfil genético",
        "será feita só pelo processo datiloscópico e fotográfico, sem perfil genético",
        "só será feita após o recebimento da denúncia, e nunca no flagrante",
        "dependerá de despacho do juiz, como em toda coleta de perfil genético",
      ],
      correta: 1,
      explicacao:
        "A Lei 15.295/2025 incluiu o inciso VII no art. 3º (recebimento da denúncia por crime com grave violência contra a pessoa, entre outros) e o § 2º no art. 5º: nos casos de prisão em flagrante por esses crimes, também é feita a identificação criminal, que inclui a coleta de material biológico para o perfil genético.",
      explicacaoErradas:
        "O RG não afasta essa hipótese, por isso “não será feita” erra. “Sem perfil genético” ignora o art. 5º, § 2º. O flagrante foi incluído expressamente, por isso “só após o recebimento da denúncia” erra. O despacho judicial é exigido no inciso IV, não no flagrante dos crimes do inciso VII.",
      pegadinha: "Crime com grave violência: perfil genético já no flagrante.",
      conhecimento: "Também entram no inciso VII os crimes contra a liberdade sexual, crimes sexuais contra vulnerável e a organização criminosa armada.",
    },
    {
      topico: "Identificação criminal",
      subassunto: "Exclusão do perfil",
      dificuldade: 5,
      raciocinio: "O art. 7º-A traz duas hipóteses de exclusão.",
      enunciado:
        "Um condenado teve o perfil genético incluído no banco de dados. Terminou de cumprir a pena há 5 anos e pede a exclusão do perfil. Pelo art. 7º-A da Lei 12.037/2009, o pedido:",
      alternativas: [
        "deve ser aceito, pois a exclusão é automática ao fim do cumprimento da pena",
        "deve ser aceito, pois o perfil só pode ficar no banco até a reabilitação",
        "deve ser aceito, pois o perfil fica no banco pelo prazo da prescrição do crime",
        "deve ser negado, pois só é possível 20 anos após o cumprimento da pena",
        "deve ser negado, pois o perfil de condenado nunca pode ser excluído",
      ],
      correta: 3,
      explicacao:
        "A exclusão dos perfis genéticos dos bancos de dados ocorre no caso de absolvição do acusado ou, no caso de condenação, mediante requerimento, após decorridos 20 anos do cumprimento da pena (art. 7º-A, com redação da Lei 13.964/2019).",
      explicacaoErradas:
        "A exclusão do condenado não é “automática”, depende de requerimento. A lei não usa a “reabilitação” nem a “prescrição” como marcos. O perfil do condenado pode ser excluído, por isso “nunca” erra.",
      pegadinha: "Absolvido: exclusão. Condenado: pedido 20 anos depois de cumprir a pena.",
      conhecimento: "Arquivado o inquérito ou absolvido o réu, ele pode pedir a retirada da identificação fotográfica, provando a identificação civil (art. 7º).",
    },
    {
      topico: "Organização criminosa",
      subassunto: "Conceito",
      dificuldade: 5,
      raciocinio: "Pena máxima de exatamente 4 anos não basta; associação criminosa exige só 3 pessoas.",
      enunciado:
        "Cinco pessoas, com chefe e funções definidas, se unem de forma estável para cometer furtos simples em lojas de conveniência de postos à beira de rodovias federais, sem nenhum caráter transnacional. Em tese, elas cometem:",
      alternativas: [
        "organização criminosa, pois há quatro ou mais pessoas e divisão de tarefas",
        "organização criminosa, pois o furto é cometido em rodovia federal",
        "nenhum crime associativo, pois só respondem pelos furtos praticados",
        "organização criminosa com pena agravada, pois há um chefe que comanda a estrutura",
        "associação criminosa, pois a pena máxima do furto simples não passa de 4 anos",
      ],
      correta: 4,
      explicacao:
        "A organização criminosa exige infrações com pena máxima superior a 4 anos ou de caráter transnacional (art. 1º, § 1º). O furto simples tem pena máxima de 4 anos, que não é superior. Sobra a associação criminosa (CP, art. 288): três ou mais pessoas associadas para o fim específico de cometer crimes.",
      explicacaoErradas:
        "O número de pessoas e a divisão de tarefas não bastam sem o requisito da pena ou da transnacionalidade. O lugar do crime, “em rodovia federal”, não altera o conceito. Há crime associativo, por isso “nenhum crime associativo” erra. Sem organização criminosa, não há o agravamento do comando.",
      pegadinha: "“Superior a 4 anos”: pena máxima de 4 anos não entra.",
      conhecimento: "A associação criminosa (CP, art. 288) tem pena de reclusão de 1 a 3 anos.",
    },
    {
      topico: "Organização criminosa",
      subassunto: "Transnacionalidade",
      dificuldade: 5,
      raciocinio: "A transnacionalidade substitui o requisito da pena.",
      enunciado:
        "Quatro pessoas, com tarefas divididas e estrutura estável, trazem mercadorias do exterior pela fronteira sem pagar os tributos devidos (descaminho, pena de 1 a 4 anos) e as revendem em cidades do interior. Elas cometem:",
      alternativas: [
        "organização criminosa, pois as infrações têm caráter transnacional",
        "associação criminosa, pois a pena máxima do descaminho não passa de 4 anos",
        "só descaminho, pois o crime tributário não admite organização criminosa",
        "organização criminosa só se uma delas for funcionário público",
        "associação criminosa, pois a organização exige cinco ou mais pessoas",
      ],
      correta: 0,
      explicacao:
        "O conceito do art. 1º, § 1º, é alternativo quanto às infrações: pena máxima superior a 4 anos ou caráter transnacional. O descaminho praticado com mercadorias trazidas do exterior tem caráter transnacional, e os demais requisitos estão presentes.",
      explicacaoErradas:
        "“A pena máxima não passa de 4 anos” esquece a alternativa da transnacionalidade. Não há regra que exclua crimes tributários do conceito. O funcionário público é causa de aumento, não requisito. A organização exige quatro pessoas, e não “cinco ou mais”.",
      pegadinha: "Pena baixa, mas transnacional: é organização criminosa.",
      conhecimento: "A transnacionalidade evidente nas circunstâncias também aumenta a pena de 1/6 a 2/3 (art. 2º, § 4º, V).",
    },
    {
      topico: "Organização criminosa",
      subassunto: "Funcionário público",
      dificuldade: 5,
      raciocinio: "O § 6º do art. 2º traz perda do cargo e interdição de 8 anos.",
      enunciado:
        "Um servidor público é condenado definitivamente por integrar organização criminosa que se valia do cargo dele. Sobre os efeitos da condenação, pela Lei 12.850/2013:",
      alternativas: [
        "perde o cargo só se a sentença o declarar de forma motivada e a pena passar de 4 anos",
        "perde o cargo e fica 8 anos sem exercer cargo público depois de cumprir a pena",
        "perde o cargo e fica impedido de exercer cargo público pelo prazo da pena aplicada",
        "fica afastado, sem remuneração, até a reabilitação criminal",
        "perde o cargo só se for reincidente, como no abuso de autoridade",
      ],
      correta: 1,
      explicacao:
        "A condenação com trânsito em julgado acarreta ao funcionário público a perda do cargo, função, emprego ou mandato eletivo e a interdição para o exercício de função ou cargo público pelo prazo de 8 anos subsequentes ao cumprimento da pena (art. 2º, § 6º).",
      explicacaoErradas:
        "O § 6º não exige pena acima de “4 anos” nem fundamentação especial, por isso a primeira erra. A interdição é de 8 anos depois da pena, e não “pelo prazo da pena aplicada”. O afastamento cautelar (§ 5º) é durante a investigação e mantém a remuneração. A “reincidência” é exigência da Lei 13.869, não desta.",
      pegadinha: "Na Lei 12.850, perda do cargo sem exigir reincidência.",
      conhecimento: "O concurso de funcionário público, quando a organização se vale dessa condição, aumenta a pena de 1/6 a 2/3 (art. 2º, § 4º, II).",
    },
    {
      topico: "Colaboração premiada",
      subassunto: "Não oferecimento da denúncia",
      dificuldade: 5,
      raciocinio: "O líder não pode receber o benefício de não ser denunciado.",
      enunciado:
        "O líder de uma organização criminosa é o primeiro a colaborar e revela um crime de que o Ministério Público e a polícia não tinham conhecimento. Ele pede, como benefício, não ser denunciado. Pela Lei 12.850/2013:",
      alternativas: [
        "o Ministério Público pode deixar de denunciá-lo, pois foi o primeiro a colaborar",
        "o benefício é impossível, mas ele pode receber outros, como a redução da pena",
        "o benefício é possível se o juiz participar das negociações do acordo",
        "o benefício é impossível, e o líder não pode receber nenhum benefício",
        "o benefício depende só de o crime revelado ter pena máxima acima de 4 anos",
      ],
      correta: 1,
      explicacao:
        "O Ministério Público pode deixar de oferecer denúncia se a proposta se referir a infração de cuja existência não tinha prévio conhecimento e o colaborador não for o líder da organização e for o primeiro a prestar efetiva colaboração (art. 4º, § 4º). O líder não tem esse benefício, mas pode receber os do caput, como a redução de até 2/3.",
      explicacaoErradas:
        "Ser o primeiro não basta, pois a lei exige também que não seja o líder. O juiz não participa das negociações (art. 4º, § 6º). A lei não proíbe ao líder “nenhum benefício”, só o de não ser denunciado. A pena do crime revelado não é requisito desse benefício.",
      pegadinha: "Primeiro a colaborar, fato desconhecido e não ser o líder: os três juntos.",
      conhecimento: "Considera-se haver conhecimento prévio quando já foi instaurado inquérito ou procedimento sobre os fatos (art. 4º, § 4º-A).",
    },
    {
      topico: "Colaboração premiada",
      subassunto: "Valor da palavra do colaborador",
      dificuldade: 4,
      raciocinio: "O § 16 do art. 4º exige prova além da palavra do colaborador.",
      enunciado:
        "Com base apenas nas declarações de um colaborador, sem nenhuma outra prova, o juiz decreta a prisão preventiva de um delatado e, depois, recebe a denúncia contra ele. Pela Lei 12.850/2013:",
      alternativas: [
        "as duas decisões são válidas, pois o acordo foi homologado pelo juiz",
        "a preventiva é válida, mas o recebimento da denúncia exige outras provas",
        "o recebimento da denúncia é válido, mas a preventiva exige outras provas",
        "as duas são válidas se o colaborador tiver renunciado ao direito ao silêncio",
        "as duas decisões violam a lei, que exige mais que a palavra do colaborador",
      ],
      correta: 4,
      explicacao:
        "Nenhuma destas medidas será decretada ou proferida com fundamento apenas nas declarações do colaborador: medidas cautelares reais ou pessoais, recebimento de denúncia ou queixa-crime e sentença condenatória (art. 4º, § 16, com redação da Lei 13.964/2019).",
      explicacaoErradas:
        "A homologação não dá à palavra do colaborador força para sustentar sozinha as decisões. A lei veda as duas, por isso as respostas que salvam “a preventiva” ou “o recebimento da denúncia” erram. A renúncia ao silêncio não muda o § 16.",
      pegadinha: "Delação é meio de obtenção de prova: precisa ser corroborada.",
      conhecimento: "O acordo é negócio jurídico processual e meio de obtenção de prova (art. 3º-A).",
    },
    {
      topico: "Ação controlada",
      subassunto: "Comunicação ao juiz",
      dificuldade: 5,
      raciocinio: "Na Lei 12.850, a ação controlada exige comunicação prévia, não autorização.",
      enunciado:
        "Policiais rodoviários federais, em investigação conjunta com a Polícia Federal, deixam de abordar um caminhão de uma organização criminosa para acompanhá-lo até o galpão de destino e prender todos os envolvidos. Pela Lei 12.850/2013, esse retardamento:",
      alternativas: [
        "exige autorização judicial prévia, como em toda ação controlada prevista em lei especial",
        "dispensa qualquer comunicação, por ser decisão tática da própria equipe policial",
        "exige só a comunicação posterior ao Ministério Público, feita depois da prisão de todos",
        "exige comunicação prévia ao juiz, que pode fixar limites e avisa o Ministério Público",
        "é proibido, pois a polícia é obrigada a prender quem está em flagrante",
      ],
      correta: 3,
      explicacao:
        "A ação controlada consiste em retardar a intervenção policial ou administrativa, mantida sob observação, para agir no momento mais eficaz (art. 8º). O retardamento é previamente comunicado ao juiz competente, que, se for o caso, estabelece seus limites e comunica ao Ministério Público (§ 1º).",
      explicacaoErradas:
        "A Lei 12.850 fala em comunicação, e não em “autorização judicial prévia”, que é exigida na Lei de Drogas. A lei não “dispensa qualquer comunicação”. O aviso é prévio e ao juiz, e não “posterior ao Ministério Público”. O flagrante retardado é previsto em lei, por isso “é proibido” erra.",
      pegadinha: "Organização criminosa: comunica o juiz. Lei de Drogas: o juiz autoriza.",
      conhecimento: "Se a ação controlada cruzar a fronteira, exige cooperação das autoridades dos países do itinerário ou destino (art. 9º).",
    },
    {
      topico: "Infiltração de agentes",
      subassunto: "Responsabilidade do infiltrado",
      dificuldade: 5,
      raciocinio: "Proporcionalidade (art. 13) e inexigibilidade de conduta diversa (parágrafo único).",
      enunciado:
        "Um agente da Polícia Federal, infiltrado com autorização judicial numa organização criminosa, é obrigado sob a mira de uma arma a dirigir um carro com drogas. Dias depois, por conta própria e sem necessidade, agride gravemente um integrante rival. Pela Lei 12.850/2013, ele:",
      alternativas: [
        "não responde pelo transporte, mas responde pela agressão desproporcional",
        "responde pelos dois fatos, pois a infiltração não autoriza crime algum",
        "não responde por nenhum dos dois, pois a autorização judicial cobre toda a atuação",
        "responde pelo transporte, mas não pela agressão, feita contra outro criminoso",
        "não responde pelos dois, mas a infiltração deve ser encerrada pelo juiz",
      ],
      correta: 0,
      explicacao:
        "Não é punível, no âmbito da infiltração, a prática de crime pelo agente infiltrado quando inexigível conduta diversa (art. 13, parágrafo único), como no transporte sob ameaça. Mas o agente que não guardar a devida proporcionalidade com a finalidade da investigação responde pelos excessos (art. 13), como a agressão gratuita.",
      explicacaoErradas:
        "“Responde pelos dois fatos” ignora a inexigibilidade de conduta diversa. A autorização judicial não “cobre toda a atuação”: os excessos são punidos. “Responde pelo transporte” inverte a solução. Não há regra que isente o agente e só encerre a infiltração.",
      pegadinha: "Crime inevitável na infiltração: não punível. Excesso: punível.",
      conhecimento: "A infiltração é autorizada por até 6 meses, com renovações se comprovada a necessidade (art. 10, § 3º).",
    },
    {
      topico: "Organização criminosa",
      subassunto: "Dados cadastrais",
      dificuldade: 4,
      raciocinio: "Sem ordem judicial, só qualificação, filiação e endereço.",
      enunciado:
        "Numa investigação de organização criminosa, o delegado quer obter de um banco, sem ordem judicial, o endereço cadastrado e os extratos da conta de um investigado. Pela Lei 12.850/2013, ele pode obter sem ordem judicial:",
      alternativas: [
        "os dois, pois a lei libera ao delegado todos os dados em investigação de organização",
        "só os extratos, pois o endereço é protegido pela intimidade",
        "só o endereço, que é dado cadastral, e não os extratos",
        "nenhum dos dois, pois todo dado bancário exige ordem judicial",
        "os dois, desde que o Ministério Público concorde com o pedido",
      ],
      correta: 2,
      explicacao:
        "O delegado e o Ministério Público têm acesso, independentemente de autorização judicial, apenas aos dados cadastrais do investigado que informem exclusivamente a qualificação pessoal, a filiação e o endereço, mantidos por instituições financeiras, entre outras (art. 15). Os extratos estão sob sigilo bancário e dependem de ordem judicial.",
      explicacaoErradas:
        "A lei não libera “todos os dados”, só os cadastrais. O endereço é justamente o que pode ser obtido, por isso “só os extratos” erra. O dado cadastral fica fora da exigência de ordem judicial, por isso “nenhum dos dois” erra. A concordância do Ministério Público não substitui a ordem do juiz.",
      pegadinha: "Cadastro sim; movimentação, não.",
      conhecimento: "Recusar ou omitir dados cadastrais requisitados pelo juiz, Ministério Público ou delegado é crime (art. 21, reclusão de 6 meses a 2 anos).",
    },
    {
      topico: "Organização criminosa",
      subassunto: "Obstrução",
      dificuldade: 5,
      raciocinio: "O art. 21-A, de 2025, pune quem ordena violência ou ameaça contra quem atua no processo.",
      enunciado:
        "Do presídio, o chefe de uma organização criminosa manda um comparsa ameaçar gravemente um policial rodoviário federal que é testemunha no processo contra o grupo, para impedir o depoimento. A ameaça é feita. Pela Lei 12.850/2013, com as mudanças de 2025, o chefe:",
      alternativas: [
        "responde só por coação no curso do processo, do CP, com reclusão de 1 a 4 anos",
        "responde pelo art. 21-A e pela ameaça, com início da pena em presídio federal",
        "não responde, pois quem fez a ameaça foi o comparsa, e não ele",
        "responde só pela ameaça, com a agravante de ser a vítima um agente público em serviço",
        "responde pelo art. 2º, § 1º, por embaraçar investigação, com pena de 3 a 8 anos",
      ],
      correta: 1,
      explicacao:
        "A Lei 15.245/2025 criou o crime de obstrução de ações contra o crime organizado (art. 21-A): ordenar a alguém a prática de violência ou grave ameaça contra agente público, testemunha, colaborador ou perito, entre outros, para impedir, embaraçar ou retaliar processo ou investigação de crimes de organização criminosa. A pena é de 4 a 12 anos e multa; se a ameaça é tentada ou consumada, soma-se a pena do crime correspondente (§ 2º), e o condenado inicia a pena em presídio federal de segurança máxima (§ 3º).",
      explicacaoErradas:
        "A “coação no curso do processo” cede ao tipo especial. Quem ordena responde pelo art. 21-A, por isso “não responde” erra. A ameaça não é o único crime: há o tipo próprio de obstrução. O art. 2º, § 1º, vale “se o fato não constituir crime mais grave”, e aqui há crime mais grave.",
      pegadinha: "Mandar ameaçar testemunha de processo de organização criminosa: art. 21-A.",
      conhecimento: "Ajustarem-se duas ou mais pessoas para praticar essa violência ou ameaça também é crime, com a mesma pena (art. 21-B).",
    },
  ],
};
