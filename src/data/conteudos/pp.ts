import type { ConteudoTopico } from "../../lib/types";

export const CONTEUDO_PP: ConteudoTopico[] = [
  {
    materia: "pp",
    topico: "Inquérito policial",
    texto: `O inquérito policial é o procedimento administrativo, presidido pela autoridade policial (delegado de polícia), destinado a apurar a materialidade e a autoria de uma infração penal, reunindo elementos de informação que permitam ao titular da ação penal formar sua opinio delicti. Suas características centrais são: oficialidade (instaurado por órgão oficial do Estado), oficiosidade (instauração de ofício, nos crimes de ação pública incondicionada), inquisitividade (não há contraditório pleno nem ampla defesa, embora o indiciado tenha direitos, como o de ser assistido por advogado), discricionariedade relativa (o delegado escolhe as diligências, dentro dos limites legais), indisponibilidade (a autoridade policial não pode determinar o arquivamento; essa decisão cabe ao titular da ação penal) e dispensabilidade (pode ser dispensado quando o titular da ação já dispuser de elementos suficientes para oferecer denúncia ou queixa). O prazo de conclusão, pela regra geral do CPP, é de 10 dias quando o indiciado estiver preso e 30 dias quando solto, este último prorrogável; leis extravagantes, como a de Drogas, fixam prazos próprios. O indiciamento — ato pelo qual a autoridade atribui a alguém a autoria do fato, com base em juízo técnico sobre indícios de autoria e materialidade — é ato privativo do delegado de polícia, devendo ser sempre fundamentado (Lei nº 12.830/2013). Quanto ao arquivamento, a decisão é do titular da ação penal, não podendo ser reaberto o inquérito arquivado sem base em provas novas, nos termos da Súmula 524 do STF.`,
    exemplos: [
      "Um cidadão registra boletim de ocorrência por furto; mesmo sem testemunhas, o delegado instaura inquérito de ofício, pois furto é crime de ação penal pública incondicionada.",
      "Se o Ministério Público já possui prova documental suficiente para oferecer denúncia diretamente, pode dispensar o inquérito policial, dada sua natureza dispensável.",
    ],
  },
  {
    materia: "pp",
    topico: "Prisão em flagrante e outras prisões",
    texto: `A prisão em flagrante (arts. 301 a 310 do CPP) é facultativa para qualquer pessoa e obrigatória para as autoridades policiais e seus agentes. O art. 302 do CPP traz as modalidades:
- próprio: o agente está cometendo ou acaba de cometer a infração;
- impróprio ou quase-flagrante: o agente é perseguido logo após, em situação que faça presumir ser o autor;
- presumido ou ficto: o agente é encontrado logo depois com instrumentos, armas ou objetos que façam presumir ser o autor.
Distinguem-se ainda três situações:
- flagrante esperado (válido): a polícia apenas aguarda a consumação de um crime já planejado, sem induzir a prática;
- flagrante preparado ou provocado (ilegal): um agente provocador induz a prática de um crime que, pela própria armação, jamais se consumaria. É crime impossível (Súmula 145 do STF);
- flagrante forjado: provas são fabricadas para incriminar inocente. É nulo e configura, ele próprio, crime.
Efetuada a prisão, a comunicação é imediata ao juiz, ao MP e à família do preso ou pessoa por ele indicada (CF, art. 5º, LXII, e CPP, art. 306). Em até 24 horas, o auto vai ao juiz e o preso é apresentado na audiência de custódia.

CONVERSÃO EM PREVENTIVA (Lei 15.272/2025, em vigor desde 27/11/2025). O art. 310, §5º, do CPP lista circunstâncias que, sem prejuízo de outras, recomendam converter o flagrante em preventiva:
- I: provas de prática reiterada de infrações penais;
- II: infração cometida com violência ou grave ameaça contra a pessoa;
- III: agente já liberado em audiência de custódia anterior por outra infração, salvo se depois absolvido dela;
- IV: infração praticada na pendência de inquérito ou ação penal;
- V: fuga ou perigo de fuga;
- VI: perigo para o inquérito, para a instrução ou para a coleta, conservação e incolumidade da prova.
A decisão deve ser motivada, e o juiz é obrigado a examinar os §§2º e 5º do art. 310 e os critérios de periculosidade do art. 312, §3º (§6º).

PERICULOSIDADE (art. 312, §§3º e 4º). Na aferição da periculosidade que gera risco à ordem pública, consideram-se:
- I: o modus operandi, inclusive o uso reiterado de violência ou grave ameaça e a premeditação;
- II: a participação em organização criminosa;
- III: a natureza, a quantidade e a variedade de drogas, armas ou munições apreendidas;
- IV: o fundado receio de reiteração, inclusive à vista de outros inquéritos e ações em curso.
É incabível a preventiva baseada na gravidade abstrata do delito: periculosidade e risco devem ser demonstrados concretamente (§4º).

PERFIL GENÉTICO (art. 310-A). Em três situações, o MP ou a autoridade policial deverá requerer ao juiz a coleta de material biológico do custodiado para obter e armazenar o perfil genético, na forma da Lei 12.037:
- flagrante por crime com violência ou grave ameaça, ou contra a dignidade sexual;
- indícios de que o agente integra organização criminosa armada;
- imputação de crime hediondo.
A coleta é feita preferencialmente na própria audiência de custódia ou em até 10 dias. É realizada por agente público treinado, respeitando a cadeia de custódia.

OUTRAS PRISÕES CAUTELARES.
- Preventiva: cabe em qualquer fase da investigação ou do processo, por decisão fundamentada. Nunca é decretada de ofício: exige representação do delegado ou requerimento do MP, do querelante ou do assistente.
- Temporária (Lei 7.960/1989): exclusiva da fase de investigação e cabível só para os crimes listados em lei. O prazo é de 5 dias prorrogáveis por mais 5; nos hediondos, de 30 dias prorrogáveis por mais 30.`,
    exemplos: [
      "Policiais recebem denúncia de tráfico e, após vigilância, prendem o traficante no momento da venda da droga, sem qualquer indução. É flagrante esperado, válido.",
      "Preso em flagrante por roubo com arma, o autuado já havia sido solto em audiência de custódia três meses antes, por outro furto. Esse histórico é circunstância que recomenda a conversão em preventiva (art. 310, §5º, II e III, do CPP, pela Lei 15.272/2025). Mesmo assim, o juiz precisa fundamentar a periculosidade concreta, e não a gravidade abstrata do roubo.",
    ],
  },
  {
    materia: "pp",
    topico: "Medidas cautelares diversas da prisão",
    texto: `A reforma promovida pela Lei nº 12.403/2011 inseriu no Código de Processo Penal um rol de medidas cautelares diversas da prisão (art. 319), aplicáveis isolada ou cumulativamente sempre que se mostrarem adequadas e suficientes para atender às finalidades cautelares do processo, prestigiando a excepcionalidade da prisão antes do trânsito em julgado. Entre as medidas previstas estão: comparecimento periódico em juízo; proibição de acesso ou frequência a determinados lugares; proibição de manter contato com pessoa determinada; proibição de ausentar-se da comarca ou do país; recolhimento domiciliar no período noturno e nos dias de folga; suspensão do exercício de função pública ou de atividade econômica ou financeira, quando houver justo receio de sua utilização para a prática de infrações penais; internação provisória do acusado inimputável ou semi-imputável; fiança; e monitoração eletrônica. A prisão preventiva somente deve ser decretada quando essas medidas se revelarem inadequadas ou insuficientes diante do caso concreto (art. 282, §6º, e art. 312 do CPP), sendo vedada, desde o Pacote Anticrime (Lei nº 13.964/2019), sua decretação de ofício pelo juiz, tanto na investigação quanto no processo — exige-se representação da autoridade policial ou requerimento do Ministério Público, do querelante ou do assistente de acusação. O mesmo diploma passou a exigir que a necessidade de manutenção da prisão preventiva seja revisada, mediante decisão fundamentada, no prazo máximo de 90 dias (art. 316, parágrafo único, do CPP). Atenção: ao julgar as ADIs 6.581 e 6.582, o STF fixou interpretação conforme a Constituição no sentido de que o mero decurso desse prazo não implica a soltura automática do preso — trata-se de dever de fundamentação periódica quanto à persistência dos motivos da prisão, e não de prazo fatal de duração, salvo se o atraso não for justificado e a parte provocar o Judiciário a respeito, reforçando, ainda assim, o caráter provisório e revisável de toda medida cautelar.

A Lei 15.280/2025 criou no CPP medidas protetivas de urgência para vítimas de crimes contra a dignidade sexual (art. 350-A). Havendo indícios do crime, o juiz pode aplicar de imediato ao autor, entre outras, a suspensão da posse ou a restrição do porte de arma, o afastamento do lar, a proibição de aproximação e de contato com a vítima, os familiares e as testemunhas, a restrição de visitas a dependentes menores e alimentos provisionais. A medida é cumulada com monitoração eletrônica do autor, e a vítima recebe dispositivo que alerta sobre a aproximação (§5º). A regra vale também para vítimas vulneráveis, como crianças, adolescentes e pessoas com deficiência, qualquer que seja o crime (§6º). Em qualquer fase, a pedido do delegado, do MP ou da vítima, o juiz pode proibir o autor de exercer atividade com contato direto com pessoa vulnerável (art. 350-B). O investigado por crime sexual preso cautelarmente, e o condenado por esses crimes, passam obrigatoriamente pela identificação do perfil genético ao ingressar no estabelecimento prisional (art. 300-A).`,
    exemplos: [
      "Um réu acusado de crime patrimonial sem violência, com residência fixa e sem risco de fuga, pode responder ao processo em liberdade mediante comparecimento periódico em juízo, dispensando-se a prisão preventiva.",
      "Se o juiz, decorridos mais de 90 dias da última decisão, deixa de reavaliar a necessidade da prisão preventiva, isso não gera, por si só, a soltura automática do preso — segundo o STF (ADIs 6.581 e 6.582), o descumprimento do prazo do art. 316, parágrafo único, do CPP configura falha a ser sanada mediante provocação e fundamentação, e não um prazo fatal que extingue automaticamente a prisão.",
    ],
  },
  {
    materia: "pp",
    topico: "Ação penal e prova no processo penal",
    texto: `A ação penal classifica-se, quanto à titularidade, em pública e privada. A pública incondicionada é promovida pelo Ministério Público independentemente de qualquer manifestação de vontade da vítima, bastando a notícia do crime. A pública condicionada exige representação do ofendido ou requisição do Ministro da Justiça como condição de procedibilidade. Já a ação penal privada é promovida pelo próprio ofendido, mediante queixa-crime, regida pelos princípios da oportunidade e da disponibilidade — ao contrário da pública, regida pela obrigatoriedade e pela indisponibilidade. Existe ainda a ação penal privada subsidiária da pública (art. 5º, LIX, CF), cabível quando o Ministério Público permanece inerte e deixa escoar o prazo para oferecer denúncia. No campo probatório, vigora a vedação constitucional e legal às provas obtidas por meios ilícitos (art. 5º, LVI, CF, e art. 157 do CPP), que devem ser desentranhadas do processo, alcançando também, em regra, as provas delas derivadas — a teoria dos frutos da árvore envenenada —, ressalvadas exceções como a prova obtida por fonte independente e a descoberta inevitável. Merece destaque o procedimento de reconhecimento de pessoas (art. 226 do CPP): a jurisprudência do STJ consolidou que suas formalidades — descrição prévia das características do reconhecido e sua colocação ao lado de outras pessoas semelhantes — não são mera recomendação, mas exigência probatória obrigatória, de modo que o reconhecimento fotográfico isolado, sem posterior confirmação em juízo observando o rito legal, não é apto, isoladamente, a fundamentar uma condenação.`,
    exemplos: [
      "No crime de ameaça comum (art. 147 do CP), a ação é pública condicionada à representação: se a vítima não representar em 6 meses, contados de quando soube quem é o autor, ocorre a decadência e o fato não pode ser processado. Atenção: o estelionato, que o Pacote Anticrime tornara condicionado, voltou a ser de ação incondicionada com a Lei 15.397/2026. Na violência doméstica e familiar contra a mulher, o prazo de decadência é de 12 meses (art. 38, §2º, do CPP, Lei 15.438/2026), e a ameaça contra a mulher por razões da condição do sexo feminino é de ação incondicionada (art. 147, §2º, do CP).",
      "Se a vítima de calúnia, crime de ação privada, não ajuizar queixa-crime no prazo decadencial, extingue-se a punibilidade, pois vigora o princípio da disponibilidade — diferente do que ocorreria numa ação pública incondicionada.",
    ],
  },
  {
    materia: "pp",
    topico: "Competência jurisdicional",
    texto: `A competência jurisdicional em matéria penal é fixada por diversos critérios, que se combinam na definição do juízo competente para processar e julgar cada caso. O critério territorial (ratione loci), previsto no art. 70 do CPP, estabelece como regra geral a competência do lugar em que se consumou a infração ou, no caso de tentativa, do local em que foi praticado o último ato de execução. Ao lado dele, atuam o critério material (ratione materiae), que distribui a competência conforme a natureza do crime — por exemplo, a Justiça Federal para crimes contra bens, serviços ou interesses da União, ou o Tribunal do Júri para os crimes dolosos contra a vida (art. 5º, XXXVIII, CF) —, e o critério funcional/pessoal (ratione personae), que estabelece foro por prerrogativa de função para autoridades específicas. Quando duas ou mais infrações estão relacionadas entre si (conexão) ou quando duas ou mais pessoas são acusadas pela mesma infração (continência), os arts. 76 a 82 do CPP determinam, como regra, a reunião dos processos perante um único juízo, prevalecendo, entre outras regras, a competência do Tribunal do Júri quando há conexão entre crime doloso contra a vida e outra infração de competência diversa. Na ausência de critério legal expresso que defina o juízo prevalente, aplica-se a prevenção — firma-se a competência do juízo que primeiro conheceu da causa ou praticou ato decisório.`,
    exemplos: [
      "Um homicídio tentado em uma cidade, cuja vítima morre dias depois em hospital de outra cidade, é julgado, em regra, pelo juízo do local do último ato de execução, e não pelo local da morte.",
      "Se um réu é acusado de homicídio doloso (competência do Júri) em concurso com um crime de porte ilegal de arma (competência de juiz singular), ambos conexos, os dois crimes serão julgados juntos pelo Tribunal do Júri, por força da regra de conexão.",
    ],
  },
  {
    materia: "pp",
    topico: "Lei nº 15.358/2026 (Marco Legal do Combate ao Crime Organizado)",
    texto: `A Lei nº 15.358, de 24 de março de 2026 (Marco Legal do Combate ao Crime Organizado, apelidada de "Lei Antifacção"), é citada nominalmente no item 7.2 do edital e entrou em vigor na data da publicação, em 25/03/2026 (art. 44). Portanto, cai na prova (item 25.15). Ela cria dois crimes, o domínio social estruturado (art. 2º) e o favorecimento ao domínio social estruturado (art. 3º). Traz também normas processuais próprias, como prazos do inquérito, medidas assecuratórias, intervenção em empresas, ação civil de perdimento e banco nacional de dados. E altera o CP, o CPP, a LEP, a Lei dos Crimes Hediondos, a Lei de Drogas, o Estatuto do Desarmamento, a Lei de Lavagem e o Código Eleitoral.

CONCEITO (art. 2º, §2º). Organização criminosa ultraviolenta, chamada pela lei de "facção criminosa", é o agrupamento de 3 ou mais pessoas que emprega violência, grave ameaça ou coação para impor controle territorial ou social, intimidar populações ou autoridades ou atacar serviços, infraestrutura ou equipamentos essenciais. Também se enquadra o agrupamento que pratica atos destinados à execução dos crimes da lei. Compare com os vizinhos:
- organização criminosa da Lei 12.850 (art. 1º, §1º): 4 ou mais pessoas, estruturalmente ordenada, com divisão de tarefas, para infrações com pena máxima superior a 4 anos ou de caráter transnacional;
- associação criminosa (CP, art. 288): 3 ou mais pessoas para o fim específico de cometer crimes.
Pelo art. 4º, parágrafo único, as condutas da lei e a milícia privada (CP, art. 288-A) são formas especiais de organização criminosa, e aplicam-se a elas, no que couber, as disposições materiais da Lei 12.850. O art. 8º manda aplicar à investigação o Capítulo II da Lei 12.850 (colaboração premiada, ação controlada, infiltração etc.) e a Lei de Lavagem.

DOMÍNIO SOCIAL ESTRUTURADO (art. 2º). Comete o crime o integrante de facção, grupo paramilitar ou milícia privada que, "independentemente de suas razões ou motivações", pratica qualquer destas condutas:
- I: usar violência ou grave ameaça para impor controle, domínio ou influência sobre territórios ou comunidades;
- II: empregar ou ameaçar usar armas de fogo, explosivos, gases tóxicos, venenos ou agentes biológicos, químicos ou nucleares;
- III: barricadas, bloqueios, incêndios e destruição de vias contra a ação policial;
- IV: controle social de atividade econômica, comercial ou de serviços, como a "taxa" cobrada de comerciantes;
- V: explosivos ou armas contra bancos, bases de valores e carros-fortes ("novo cangaço"), ou para interromper o fluxo terrestre, aéreo ou aquaviário;
- VI: ataques a presídios;
- VII: tomar, depredar ou incendiar meios de transporte;
- VIII: apoderar-se de aeronaves ou sabotá-las;
- IX: sabotar portos, aeroportos, hospitais, escolas, estádios, serviços essenciais, energia, petróleo e gás;
- X: interromper ou danificar bancos de dados públicos e serviços informáticos ou telemáticos governamentais ou de interesse coletivo.
A pena é de reclusão de 20 a 40 anos, sem prejuízo das penas da violência, da ameaça e dos demais crimes.
O §1º aumenta a pena de 2/3 ao dobro em várias hipóteses:
- comando ou liderança, ainda que o agente não pratique os atos materiais;
- financiamento;
- violência contra juiz, membro do MP, agente do art. 144 da CF, criança, adolescente, idoso, pessoa com deficiência ou vulnerável;
- conexão com outras facções;
- concurso de funcionário público ou infiltração no setor público;
- arma de uso restrito ou proibido, ou explosivo;
- recrutamento de criança ou adolescente;
- transnacionalidade;
- extração ilegal de minérios ou exploração ambiental;
- uso de drones, criptografia avançada e equipamentos de contrainteligência.

FAVORECIMENTO (art. 3º). É crime:
- promover, fundar, aderir ou apoiar de qualquer forma a facção;
- divulgar material que incite os atos do art. 2º;
- adquirir, produzir ou guardar explosivo ou arma para esses atos;
- ceder local ou bem;
- fornecer informações em apoio;
- alegar falsamente pertencer à facção para obter vantagem ou intimidar terceiros.
A pena é de reclusão de 12 a 20 anos, e multa.

REGIME DOS CRIMES. Os arts. 2º e 3º são hediondos (art. 4º). Os §§4º a 8º do art. 2º valem também para o favorecimento; o §9º não está nessa remissão.
- §4º: insuscetíveis de anistia, graça, indulto, fiança e livramento condicional.
- §5º: atos preparatórios praticados com propósito inequívoco de consumar o crime têm a pena do consumado reduzida de 1/3 até a metade. É exceção à regra de que a preparação não é punível.
- §6º: os dependentes não recebem auxílio-reclusão.
- §7º: líderes e integrantes do núcleo de comando cumprem obrigatoriamente pena ou custódia em presídio federal de segurança máxima.
- §8º: homicídios consumados ou tentados cometidos por membros de facção e conexos a esses crimes são julgados pelas Varas Criminais Colegiadas (Lei 12.694, art. 1º-A). O CPP, art. 78, I, passou a excepcionar a prevalência do júri nesses casos.
- §9º: a prática do crime é causa suficiente para a preventiva. O CPP, art. 313, V, passou a admitir a preventiva para integrante de facção no contexto do art. 2º.

INVESTIGAÇÃO (arts. 5º e 6º).
- Prazos do inquérito: 90 dias com o indiciado preso e 270 dias com ele solto, prorrogáveis por igual período. Compare: no CPP são 10 e 30 dias; na Lei de Drogas, 30 e 90, que podem ser duplicados.
- O juiz decide as representações do delegado e os requerimentos do MP em 15 dias.
- O MP dá parecer sobre a representação do delegado em 5 dias.
- Na urgência, MP e juiz se manifestam no prazo simultâneo de 24 horas.
- Descumprir esses prazos não gera relaxamento automático da prisão (§4º).
- As regras valem, no que couber, para a investigação do MP (§5º).
- Se o juiz indefere a representação do delegado e o MP não recorre, o delegado pode, em 48 horas, levar a matéria à instância superior do MP, que delibera no mesmo prazo (§6º).
- As forças-tarefa integradas (art. 6º) são formalizadas por termo de cooperação e podem contar com os Gaecos. Descumprir esse artigo não gera nulidade das provas.

PATRIMÔNIO (arts. 9º a 29).
- Quem decreta as medidas assecuratórias (art. 9º): o juiz, de ofício, a requerimento do MP ou por representação do delegado, ouvido o MP. Exigem indícios suficientes e cabem na investigação ou na ação penal.
- Medidas possíveis:
  - sequestro, arresto e bloqueio de bens, inclusive ativos digitais;
  - suspensão de atividades econômicas;
  - bloqueio de acesso a sistemas financeiros e plataformas digitais;
  - proibição de Pix e de operações em corretoras de criptoativos;
  - comunicação ao Coaf, ao Banco Central, à CVM, à Susep e à Receita;
  - suspensão de serviços como energia, telecomunicações e hospedagem digital;
  - afastamento do cargo sem prejuízo da remuneração;
  - apreensão do passaporte;
  - inidoneidade cautelar para contratar com o poder público.
- Podem ser decretadas sem ouvir a parte antes, com contraditório diferido (§1º).
- O investigado tem 10 dias, contados da intimação, para provar a origem lícita do bem (§6º).
- Se a origem ilícita ficar clara, o juiz pode decretar o perdimento extraordinário, independentemente de condenação (§8º), ressalvado o terceiro de boa-fé.
- Com a absolvição, o valor é devolvido em até 3 dias úteis (§12).
- Empresa beneficiada pela facção (art. 10): afastamento dos sócios e intervenção judicial por 6 meses, prorrogáveis.
- Os arts. 12 a 27 criam a ação civil autônoma de perdimento.
- O art. 29 cria o Banco Nacional de Dados de facções, com regulamento em 180 dias e bancos estaduais obrigatórios e interoperáveis.

ALTERAÇÕES EM OUTRAS LEIS.
- CP:
  - art. 147-C (novo): ameaça no contexto da facção, com reclusão de 1 a 3 anos;
  - art. 121, §2º-D: homicídio de facção, com 20 a 40 anos;
  - art. 148, §3º: sequestro e cárcere privado, com 12 a 20 anos;
  - art. 157, §4º: roubo de facção com a pena do caput em triplo.
- CPP:
  - audiência de custódia em 24 horas por videoconferência em tempo real (arts. 3º-B, §1º, e 310);
  - art. 313, V;
  - art. 78, I.
- LEP:
  - art. 41-A: monitoramento audiovisual de parlatório e visitas, a pedido do delegado, do MP ou da administração penitenciária;
  - art. 41-B: comunicação monitorada entre advogado e cliente, analisada por juízo de controle distinto do juízo da instrução;
  - art. 112, VI, "b": 75% para o comando de facção, vedado o livramento.
- Lei de Drogas, art. 40-A: penas dos arts. 33 a 37 em dobro para integrante de facção, com concurso material se houver arma de fogo.
- Estatuto do Desarmamento, art. 21-A: arts. 12, 14 e 16 com aumento de 2/3 quando ligados ao tráfico.`,
    exemplos: [
      "Integrantes de uma facção cobram 'taxa de segurança' de comerciantes de um bairro e espancam quem se recusa a pagar. Cometem domínio social estruturado (art. 2º, IV, da Lei 15.358), com pena de 20 a 40 anos. Para quem exerce o comando, mesmo sem ir às ruas, a pena aumenta de 2/3 ao dobro (§1º, I).",
      "Um homem sem vínculo algum com facção liga para um comerciante dizendo ser 'do Comando' para exigir dinheiro. Ele comete favorecimento ao domínio social estruturado na modalidade de alegar falsamente pertencer à facção (art. 3º, VI), com pena de 12 a 20 anos e multa.",
    ],
    curiosidade:
      "A lei pune até quem só finge ser da facção: alegar falsamente pertencer a ela para obter vantagem ou intimidar terceiros é favorecimento ao domínio social estruturado (art. 3º, VI), com pena de 12 a 20 anos — mais alta que a da extorsão simples do CP (4 a 10 anos).",
  },
  {
    materia: "pp",
    topico: "Audiência de custódia — prazo, finalidade e consequências da ausência",
    origem: "aposta",
    texto: `A audiência de custódia é o ato em que a pessoa presa é levada à presença de um juiz, com o Ministério Público e a defesa (advogado ou Defensoria). O ato tem base convencional no Pacto de San José da Costa Rica, art. 7.5 ("toda pessoa detida ou retida deve ser conduzida, sem demora, à presença de um juiz"), e foi regulamentado pela Resolução CNJ nº 213/2015. Hoje está no próprio CPP (art. 310 e art. 3º-B, §1º). Vale para o preso em flagrante e também para o preso por mandado (art. 287 e art. 3º-B, §1º). O STF entende que a audiência é devida em toda modalidade de prisão.

PRAZO E FORMA (Lei 15.358/2026). O juiz deve promover a audiência no prazo máximo de 24 horas após a realização da prisão. Pela nova redação do caput do art. 310, ela é feita por videoconferência em tempo real. A forma presencial ficou excepcional: só em situações de força maior, por decisão justificada do juiz, e é vedada se o ato se revelar demasiadamente custoso ou trouxer risco excessivo à segurança (§13). A lei trouxe garantias para o modelo virtual:
- §7º: antes do ato, a serventia confere os processos do preso e, havendo citação pendente, o juiz faz a citação pessoal;
- §8º: defesa e MP dispõem de todos os mecanismos de intervenção e podem suscitar questões de ordem;
- §9º: entrevista prévia, reservada e inviolável com o defensor, presencial, virtual ou por outro meio;
- §10: o preso fica sozinho na sala durante a oitiva, ressalvada a presença física do defensor;
- §11: falha no sistema atribuível ao tribunal obriga a repetir a audiência inteira, sem aproveitar ato incompleto;
- §12: todos os estabelecimentos prisionais terão salas próprias para isso.
Atenção: a redação antiga do art. 3º-B, §1º, vedava a videoconferência. Essa regra caiu.

FINALIDADE. Na audiência, o juiz, fundamentadamente:
- I: relaxa a prisão ilegal;
- II: converte o flagrante em preventiva, se presentes os requisitos do art. 312 e insuficientes as cautelares diversas;
- III: concede liberdade provisória, com ou sem fiança.
O juiz também verifica se houve tortura ou maus-tratos e manda apurar. Outras regras ligadas à audiência:
- se o fato foi praticado sob excludente de ilicitude, cabe liberdade provisória mediante termo de comparecimento (§1º);
- se o agente é reincidente, integra organização criminosa armada ou milícia, ou porta arma de uso restrito, o juiz deve denegar a liberdade provisória (§2º);
- a audiência não substitui a comunicação imediata da prisão ao juiz, ao MP e à família (art. 306).

CONSEQUÊNCIAS DA FALTA DA AUDIÊNCIA.
- §3º: a autoridade que deu causa, sem motivação idônea, à não realização no prazo responde administrativa, civil e penalmente.
- §4º: passadas 24 horas além do prazo, a falta de audiência sem motivação idônea torna a prisão ilegal, a ser relaxada, sem prejuízo da imediata decretação da preventiva.
- O STF (ADIs 6.298, 6.299, 6.300 e 6.305) deu interpretação conforme ao §4º: o juiz deve avaliar se cabe a prorrogação excepcional do prazo ou a realização por videoconferência. Por isso, a prova costuma dizer que o atraso não gera soltura nem nulidade automáticas.
- Também não há "nulidade da ação penal" pela falta da audiência: o vício atinge a prisão, não o processo.`,
    exemplos: [
      "Um suspeito é preso em flagrante à meia-noite de sexta-feira. O juiz plantonista realiza a audiência por videoconferência antes de completar 24 horas, mesmo no fim de semana, porque o prazo não depende do expediente forense. O preso conversa reservadamente com o defensor antes do ato e fica sozinho na sala do presídio durante a oitiva.",
      "No meio da audiência virtual, a conexão do tribunal cai e o ato fica pela metade. Pelo art. 310, §11, do CPP, a audiência deve ser repetida por completo, e nada do que foi feito pela metade é aproveitado.",
    ],
  },
  {
    materia: "pp",
    topico: "Provas ilícitas e prova ilícita por derivação (teoria dos frutos da árvore envenenada)",
    origem: "aposta",
    texto: `A Constituição Federal (art. 5º, LVI) veda expressamente a admissão, no processo, de provas obtidas por meios ilícitos, regra reproduzida e detalhada pelo art. 157 do CPP, que determina o desentranhamento (a retirada física dos autos) da prova ilícita, com sua posterior destruição, preservado o registro da existência da decisão. A prova ilícita é aquela obtida com violação a norma de direito material — constitucional ou legal — no momento de sua colheita, como uma confissão obtida sob tortura ou uma interceptação telefônica sem autorização judicial; distingue-se da prova ilegítima, que viola norma de direito processual, também inadmissível, mas com regime de nulidade próprio. A teoria dos frutos da árvore envenenada (fruits of the poisonous tree), incorporada pelo §1º do art. 157, estende a ilicitude às provas derivadas da prova ilícita originária, quando entre elas houver nexo de causalidade direto e a prova derivada não puder ser obtida por outra fonte, contaminando toda a cadeia probatória que dela decorre. Existem, porém, exceções que afastam essa contaminação: a fonte independente (§2º), quando a prova derivada poderia ter sido obtida por outros meios de prova, não relacionados à prova ilícita original, e efetivamente o seria; e a descoberta inevitável, quando ficar demonstrado que a prova seria produzida de qualquer modo, independentemente da prova ilícita, por meio de trâmites investigativos já em andamento.`,
    exemplos: [
      "A polícia invade uma residência sem mandado judicial e sem flagrante, encontrando drogas: a prova (droga apreendida) é ilícita por violação ao domicílio (art. 5º, XI, CF), e qualquer prova obtida a partir dela — como a confissão do morador feita logo após a apreensão ilegal — é, em regra, prova ilícita por derivação.",
      "Se, independentemente da confissão obtida sob coação, testemunhas já haviam relatado espontaneamente o mesmo fato à polícia antes da confissão ilícita, a prova testemunhal pode ser considerada válida por fonte independente, não contaminada pela ilicitude da confissão.",
    ],
  },
  {
    materia: "pp",
    topico: "Colaboração premiada — requisitos e benefícios",
    origem: "aposta",
    texto: `A colaboração premiada, disciplinada principalmente pela Lei nº 12.850/2013 (Lei das Organizações Criminosas), é meio de obtenção de prova pelo qual o investigado ou acusado coopera efetiva e voluntariamente com a investigação e o processo criminal, fornecendo informações relevantes, em troca de benefícios processuais ou penais. Para sua validade, exige-se voluntariedade (ausência de coação, embora possa haver negociação de interesses) e efetividade da colaboração, cujo resultado deve gerar ao menos um dos efeitos previstos em lei: identificação dos demais coautores e partícipes da organização criminosa e das infrações por eles praticadas; revelação da estrutura hierárquica e da divisão de tarefas da organização; prevenção de infrações penais decorrentes das atividades da organização; recuperação total ou parcial do produto ou proveito das infrações; ou localização de eventual vítima com sua integridade física preservada. Os benefícios possíveis, a depender da relevância da colaboração e do momento em que é prestada, vão do perdão judicial (extinção da punibilidade) à redução de pena em até 2/3, à substituição da pena privativa de liberdade por restritiva de direitos, ou ao não oferecimento de denúncia, se o colaborador não for líder da organização e for o primeiro a prestar a colaboração efetiva. O acordo de colaboração é formalizado por escrito, negociado entre o colaborador (assistido por defensor) e o Ministério Público ou a autoridade policial, e depende de homologação judicial — o juiz analisa a regularidade, a legalidade e a voluntariedade do acordo, mas não sua conveniência ou oportunidade, que é decisão das partes negociantes.`,
    exemplos: [
      "Um integrante de menor participação em uma organização criminosa, ao revelar aos investigadores toda a estrutura hierárquica do grupo e a localização de bens ocultos, pode obter redução de pena significativa ou até perdão judicial, a depender da relevância prática de sua colaboração para o desfecho do caso.",
      "Um juiz, ao analisar um acordo de colaboração premiada já negociado entre Ministério Público e réu, verifica apenas se ele foi celebrado de forma voluntária e regular, sem impor suas próprias condições sobre os benefícios pactuados — a negociação do conteúdo do acordo é prerrogativa das partes, não do magistrado.",
    ],
  },
  {
    materia: "pp",
    topico: "Cadeia de custódia da prova (arts. 158-A a 158-F do CPP)",
    origem: "aposta",
    texto: `Do ponto de vista processual, a cadeia de custódia (arts. 158-A a 158-F do CPP, introduzidos pelo Pacote Anticrime) é a garantia de que o vestígio material coletado em uma investigação chegou ao processo sem rupturas, adulterações ou substituições, condição para que a prova pericial dele derivada seja considerada válida e confiável pelo juízo. Enquanto o exame técnico da coleta e do rastreamento físico do vestígio é tarefa da perícia (criminalística), o processo penal se ocupa das consequências jurídicas de eventuais falhas nessa cadeia: uma quebra não esclarecida na cadeia de custódia pode ser arguida pela defesa como fundamento para questionar a idoneidade da prova pericial, podendo levar, conforme a gravidade e a repercussão da falha no caso concreto, à sua desconsideração como elemento de convicção. O art. 158-A, §3º, do CPP determina que o agente público que reconhecer, no cenário da investigação, um elemento como possível vestígio, deve preservá-lo até a chegada da equipe pericial — reforçando que a obrigação de cuidado com a cadeia de custódia não é exclusiva do perito, mas se estende a qualquer agente que atue na investigação, incluindo o policial responsável pelo primeiro atendimento à ocorrência. A jurisprudência tem admitido que nem toda irregularidade formal na cadeia de custódia gera, automaticamente, a nulidade da prova — a análise deve considerar se a falha efetivamente comprometeu a confiabilidade do vestígio examinado, prestigiando o princípio da instrumentalidade das formas também nesse contexto.`,
    exemplos: [
      "Em um julgamento, a defesa demonstra que a droga apreendida foi pesada e lacrada apenas dois dias após a apreensão, sem justificativa documentada para o intervalo: essa lacuna na cadeia de custódia pode ser usada para questionar se a substância periciada era realmente a mesma apreendida no momento do flagrante.",
      "Um policial que chega primeiro a um local de crime e identifica uma arma no chão não a manuseia, apenas isola a área e aguarda a perícia: essa conduta cumpre o dever de preservação do vestígio previsto no art. 158-A, §3º, do CPP, evitando qualquer questionamento futuro sobre ruptura da cadeia de custódia.",
    ],
  },
];
