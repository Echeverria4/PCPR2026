import type { Question } from "../../lib/types";

export const QUESTOES_LEG: Question[] = [
  {
    id: "leg-001",
    materia: "leg",
    topico: "Lei Estadual 21.894/2024 (Código Disciplinar da PCPR)",
    enunciado:
      "Nos termos da Lei Estadual nº 21.894/2024 (Código Disciplinar da Polícia Civil do Paraná), o Processo Administrativo Disciplinar destinado a apurar transgressão atribuída a policial civil",
    alternativas: [
      "é instaurado por determinação do Conselho Superior de Polícia ou do Governador, tem início por portaria do Corregedor-Geral e é presidido por Delegado de Polícia estável lotado na Corregedoria-Geral.",
      "é instaurado pelo chefe imediato do servidor e presidido por comissão de três servidores estáveis de qualquer cargo.",
      "é instaurado pelo Secretário de Estado da Segurança Pública e presidido por Procurador do Estado.",
      "dispensa contraditório e ampla defesa quando a transgressão for punível apenas com repreensão.",
      "deve ser concluído em 60 dias, vedada qualquer prorrogação.",
    ],
    correta: 0,
    explicacao:
      "Art. 30 da Lei 21.894: o PAD é instaurado por determinação do Conselho Superior de Polícia ou do Governador, conhecidas a autoria e a materialidade. Art. 31: o PAD começa por portaria do Corregedor-Geral, que designa a presidência entre delegados estáveis lotados na Corregedoria-Geral.",
    explicacaoErradas:
      "O prazo é de 120 dias, prorrogáveis por igual período, ou por prazo fixado pelo Corregedor-Geral nos casos de maior complexidade (§1º). Os 60 dias são da Investigação Preliminar (art. 28), usada quando a infração ou a autoria ainda não estão claras.",
    origem: "banco",
    fonte: "Lei Estadual 21.894/2024 (PR)",
  },
  {
    id: "leg-002",
    materia: "leg",
    topico: "Lei Estadual 6.174/1970 (Estatuto dos Servidores do PR)",
    enunciado:
      "O vínculo que se estabelece entre o servidor público estatutário e o Estado, regido por lei específica (estatuto) e não pela CLT, é denominado regime:",
    alternativas: ["Celetista", "Estatutário", "Cooperativado", "Temporário exclusivamente", "Autônomo"],
    correta: 1,
    explicacao:
      "O regime estatutário é o vínculo jurídico-administrativo entre o servidor público efetivo e o ente estatal, disciplinado por lei (estatuto), diferente do regime celetista (regido pela CLT, próprio de empregados públicos).",
    origem: "banco",
  },
  {
    id: "leg-003",
    materia: "leg",
    topico: "Constituição do Estado do Paraná",
    enunciado:
      "A Polícia Civil, no âmbito estadual, tem como função constitucional principal, ressalvada a competência da União,",
    alternativas: [
      "exercer as funções de polícia judiciária e a apuração das infrações penais, exceto as militares.",
      "realizar exclusivamente o policiamento ostensivo e a preservação da ordem pública.",
      "controlar o trânsito nas rodovias estaduais.",
      "fiscalizar exclusivamente os crimes ambientais.",
      "substituir o Ministério Público na promoção da ação penal.",
    ],
    correta: 0,
    explicacao:
      "Art. 144, §4º, da CF: às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, exceto as militares. O art. 47 da Constituição do Estado do Paraná repete a regra: a Polícia Civil é instituição permanente e essencial à função da segurança pública, com incumbência de exercer as funções de polícia judiciária e as apurações das infrações penais, exceto as militares.",
    explicacaoErradas:
      "O policiamento ostensivo é da Polícia Militar (art. 48 da CE-PR), e a ação penal pública é do Ministério Público.",
    origem: "banco",
    fonte: "CF, art. 144, §4º; CE-PR, art. 47",
  },
  {
    id: "leg-004",
    materia: "leg",
    topico: "Lei Estadual 21.894/2024 (Código Disciplinar da PCPR)",
    enunciado:
      "O Código Disciplinar da Polícia Civil do Paraná (Lei Estadual nº 21.894/2024) descreve as transgressões em rol legal, cada uma acompanhada da respectiva penalidade. O princípio segundo o qual o policial não pode ser punido sem que a conduta esteja previamente definida como transgressão em lei é o princípio da",
    alternativas: [
      "legalidade, na vertente da tipicidade disciplinar.",
      "proporcionalidade.",
      "publicidade.",
      "impessoalidade.",
      "eficiência.",
    ],
    correta: 0,
    explicacao:
      "Legalidade, na vertente da tipicidade: na Lei 21.894, o art. 8º enumera as transgressões e já indica a pena de cada uma (por exemplo, o inciso LXIII pune o abandono de cargo com demissão), e o art. 15 lista as 5 penas possíveis.",
    explicacaoErradas:
      "A proporcionalidade também aparece na lei, na dosimetria, com atenuantes (art. 17) e agravantes (art. 18), mas não é o princípio que exige a previsão prévia da conduta.",
    origem: "banco",
    fonte: "Lei Estadual 21.894/2024 (PR)",
  },
  {
    id: "leg-005",
    materia: "leg",
    topico: "Lei Estadual 6.174/1970 (Estatuto dos Servidores do PR)",
    enunciado:
      "Segundo o art. 123 da Lei Estadual nº 6.174/1970 (Estatuto dos Servidores Civis do Paraná), a vacância do cargo decorre, entre outras hipóteses, de",
    alternativas: [
      "exoneração, demissão, promoção e acesso, transferência, readaptação e aposentadoria.",
      "simples mudança de endereço do servidor.",
      "decisão judicial, apenas.",
      "remoção de uma unidade para outra dentro do mesmo órgão.",
      "concessão de licença para trato de interesses particulares.",
    ],
    correta: 0,
    explicacao:
      "O art. 123 da Lei 6.174 lista as causas de vacância: exoneração, demissão, promoção e acesso, transferência, readaptação, aposentadoria e nomeação para outro cargo (com as ressalvas das alíneas, como a acumulação legal).",
    explicacaoErradas:
      "Remoção e licença não deixam o cargo vago: o servidor continua titular dele.",
    origem: "banco",
    fonte: "Lei Estadual 6.174/1970 (PR)",
  },
  {
    id: "leg-006",
    materia: "leg",
    topico: "Lei 12.037/2009 (Identificação Criminal)",
    enunciado:
      "Segundo a Lei nº 12.037/2009, a regra geral é que o civilmente identificado não será submetido à identificação criminal. Constitui EXCEÇÃO legal a essa regra, autorizando a identificação criminal mesmo de quem já possui identificação civil:",
    alternativas: [
      "O fato de o indiciado ser reincidente em contravenções penais de menor gravidade",
      "O documento de identificação civil apresentar rasura ou tiver indício de falsificação",
      "O indiciado se recusar a fornecer seu número de telefone",
      "O crime investigado ser de menor potencial ofensivo",
      "O indiciado ser servidor público estadual",
    ],
    correta: 1,
    explicacao:
      "O art. 3º da Lei 12.037/2009 lista exceções à regra de dispensa da identificação criminal para quem já é civilmente identificado, entre elas: documento apresentar rasura ou indício de falsificação; documento for insuficiente para identificar o indiciado; o indiciado portar documentos de identidade distintos com informações conflitantes; a identificação criminal for essencial às investigações (mediante decisão judicial fundamentada); ou constar, em registros policiais, o uso de outros nomes ou qualificações diferentes por parte do indiciado.",
    origem: "banco",
  },
  {
    id: "leg-007",
    materia: "leg",
    topico: "Lei 13.869/2019 (Abuso de Autoridade)",
    enunciado:
      "Conforme o art. 1º, §2º, da Lei nº 13.869/2019 (Lei de Abuso de Autoridade), a mera divergência na interpretação de lei ou na avaliação de fatos e provas:",
    alternativas: [
      "Configura, por si só, abuso de autoridade, independentemente de dolo",
      "Não configura abuso de autoridade, exigindo-se dolo específico de causar prejuízo, dano ou beneficiar-se indevidamente",
      "É punida apenas com advertência disciplinar, sem repercussão penal",
      "Só é punível se o agente for reincidente",
      "Configura abuso apenas quando praticada por delegado de polícia",
    ],
    correta: 1,
    explicacao:
      "O art. 1º, §2º, da Lei 13.869/2019 estabelece expressamente que a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade. A lei exige, ainda, a finalidade específica de prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou agir por mero capricho ou satisfação pessoal (dolo específico) — considerada \"a pegadinha nº 1\" do tema.",
    origem: "banco",
  },
  {
    id: "leg-008",
    materia: "leg",
    topico: "LGPD e Lei de Acesso à Informação (12.527/2011)",
    enunciado:
      "Segundo a Lei nº 12.527/2011 (Lei de Acesso à Informação), os prazos máximos de restrição de acesso a informações classificadas como ultrassecreta, secreta e reservada são, respectivamente:",
    alternativas: [
      "10, 5 e 2 anos",
      "25, 15 e 5 anos",
      "50, 25 e 10 anos",
      "20, 10 e 5 anos",
      "30, 20 e 10 anos",
    ],
    correta: 1,
    explicacao:
      "A LAI estabelece prazos máximos de classificação de sigilo de 25 anos para informações ultrassecretas, 15 anos para secretas e 5 anos para reservadas, prazos contados a partir da data de produção da informação.",
    origem: "banco",
  },
  {
    id: "leg-009",
    materia: "leg",
    topico: "Constituição do Estado do Paraná",
    enunciado:
      "Sobre a Polícia Científica do Paraná, prevista no art. 50 da Constituição do Estado, o Supremo Tribunal Federal decidiu (ADI 2.575) que ela",
    alternativas: [
      "pode existir como órgão autônomo de perícia, com estrutura própria e separado da Polícia Civil, mas não é órgão de segurança pública, porque o rol do art. 144 da Constituição Federal é taxativo.",
      "é órgão de segurança pública, porque os Estados podem criar livremente outras polícias além das previstas no art. 144 da Constituição Federal.",
      "deve obrigatoriamente integrar a estrutura da Polícia Civil, sendo vedada a perícia oficial autônoma.",
      "foi extinta, e as perícias criminais do Estado passaram a ser feitas pela Polícia Federal.",
      "deve ser dirigida por Delegado de Polícia da classe mais elevada, já que a perícia é atividade de polícia judiciária.",
    ],
    correta: 0,
    explicacao:
      "Na ADI 2.575 (2020), o STF deu interpretação conforme à expressão “Polícia Científica” do art. 50 da Constituição do Paraná para afastar o caráter de órgão de segurança pública. O rol do art. 144 da CF é taxativo, e os Estados não podem criar órgão de segurança pública diferente dos ali previstos (no plano estadual, Polícia Civil, Polícia Militar, Corpo de Bombeiros Militar e Polícia Penal). Isso não impede que a perícia oficial funcione como órgão autônomo, desvinculado da Polícia Civil: no Paraná, a Polícia Científica tem estrutura própria, cuida das perícias de criminalística e médico-legais e é dirigida por perito de carreira da classe mais elevada. Antes, na ADI 2.616, o STF declarou inconstitucional por inteiro, por vício de iniciativa, a EC 10/2001, que tinha incluído a Polícia Científica no rol de órgãos do art. 46.",
    origem: "banco",
    fonte: "CE-PR, art. 50; STF, ADI 2.575 e ADI 2.616",
  },
  {
    id: "leg-010",
    materia: "leg",
    topico: "LC Estadual 259/2023 (regime jurídico da PCPR)",
    enunciado:
      "Segundo a LC Estadual nº 259/2023, que disciplina o regime jurídico do Quadro Próprio da Polícia Civil (QPPC) do Paraná, é vedado ao policial civil o exercício legal de outras atividades remuneradas, ressalvado(a)",
    alternativas: [
      "o magistério.",
      "a atividade comercial autônoma.",
      "o cargo de direção em empresa privada.",
      "a consultoria jurídica remunerada.",
      "qualquer atividade, desde que fora do horário de expediente.",
    ],
    correta: 0,
    explicacao:
      "Art. 3º, §2º, da LC 259: “É vedado aos Policiais Civis o exercício legal de outras atividades remuneradas, ressalvado o magistério.” A ressalva conversa com o art. 37, XVI, da CF, que também excepciona o magistério na acumulação de cargos.",
    explicacaoErradas:
      "Exercer fora do expediente não afasta a vedação.",
    origem: "banco",
    fonte: "LC Estadual 259/2023 (PR)",
  },
  {
    id: "leg-011",
    materia: "leg",
    topico: "LC Estadual 259/2023 (regime jurídico da PCPR)",
    enunciado:
      "Conforme o art. 20 da LC Estadual nº 259/2023, tratando-se de concurso com distribuição de vagas por região, o policial civil deverá permanecer em unidades localizadas dentro da macrorregião para a qual fez o concurso pelo período mínimo de",
    alternativas: [
      "três anos, sob pena de contagem em dobro do prazo para a promoção ao nível III.",
      "dois anos, sob pena de demissão.",
      "três anos, sob pena de perda do cargo e restituição dos valores do curso de formação.",
      "cinco anos, sob pena de suspensão da progressão por igual período.",
      "um ano, após o qual a remoção a pedido passa a ser automática.",
    ],
    correta: 0,
    explicacao:
      "Art. 20 da LC 259: no concurso regionalizado, o servidor deve permanecer pelo período mínimo de 3 anos em unidades da macrorregião para a qual concorreu, “sob pena de contagem em dobro do prazo para a promoção para o nível III”.",
    explicacaoErradas:
      "A consequência é só na carreira (a promoção demora mais), sem punição disciplinar nem perda do cargo.",
    origem: "banco",
    fonte: "LC Estadual 259/2023 (PR)",
  },
  {
    id: "leg-012",
    materia: "leg",
    topico: "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR)",
    enunciado:
      "A Lei Estadual nº 23.213/2026, Lei Orgânica da Polícia Civil do Paraná, organiza a estrutura básica da instituição em níveis. Integram o nível de Direção Superior",
    alternativas: [
      "a Delegacia-Geral, o Conselho Superior de Polícia e a Corregedoria-Geral de Polícia.",
      "a Secretaria de Estado da Segurança Pública, a Delegacia-Geral e o Comando-Geral da Polícia Militar.",
      "a Escola Superior de Polícia Civil, o Departamento de Inteligência Policial e o Instituto de Identificação.",
      "a Chefia de Gabinete, as Assessorias Técnicas e o Departamento de Controle Interno.",
      "o Departamento de Tecnologia da Informação e Inovação e a Coordenadoria de Operações Integradas.",
    ],
    correta: 0,
    explicacao:
      "Art. 10 da Lei 23.213. Direção Superior: Delegacia-Geral, Conselho Superior de Polícia (CSP) e Corregedoria-Geral de Polícia (CGP).",
    explicacaoErradas:
      "Assessoramento: Chefia de Gabinete, Assessorias Técnicas, DIP e DCI. Instrumental: COI, ESPC, DPAF e DTI. Execução: Instituto de Identificação e os departamentos e unidades de polícia judiciária. A SESP e a PM não integram a estrutura da PCPR.",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR)",
  },
  {
    id: "leg-013",
    materia: "leg",
    topico: "Lei 12.037/2009 (Identificação Criminal)",
    enunciado:
      "De acordo com a Lei nº 12.037/2009, com as alterações da Lei nº 15.295/2025, a identificação criminal do civilmente identificado incluirá a coleta de material biológico para a obtenção do perfil genético",
    alternativas: [
      "quando for essencial às investigações, segundo despacho da autoridade judiciária, e quando houver recebimento da denúncia pelos crimes do art. 3º, VII, como o praticado com grave violência contra a pessoa, valendo também na prisão em flagrante por esses crimes.",
      "em todas as hipóteses do art. 3º, inclusive quando o documento apresentado tiver rasura ou for insuficiente para identificar o indiciado.",
      "apenas após o trânsito em julgado de condenação por crime hediondo, vedada a coleta durante a investigação.",
      "somente quando o indiciado consentir por escrito, na presença de advogado.",
      "sempre que o crime investigado for punido com reclusão, independentemente de decisão judicial ou de recebimento da denúncia.",
    ],
    correta: 0,
    explicacao:
      "Art. 5º, §1º, da Lei 12.037 (redação da Lei 15.295/2025): nas hipóteses dos incisos IV e VII do art. 3º, a identificação criminal incluirá a coleta de material biológico para o perfil genético. O inciso IV é a identificação essencial às investigações, por despacho do juiz. O inciso VII é o recebimento da denúncia por crime com grave violência contra a pessoa, crime contra a liberdade sexual ou sexual contra vulnerável, crimes dos arts. 240 a 241-C do ECA ou organização criminosa armada. O §2º estende a coleta à prisão em flagrante por esses crimes.",
    explicacaoErradas:
      "Nas demais hipóteses do art. 3º, como rasura ou documento insuficiente, a identificação é só datiloscópica e fotográfica.",
    origem: "banco",
    fonte: "Lei 12.037/2009, art. 5º, com redação da Lei 15.295/2025",
  },
  {
    id: "leg-014",
    materia: "leg",
    topico: "LGPD e Lei de Acesso à Informação (12.527/2011)",
    enunciado:
      "Segundo a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), o tratamento de dados pessoais realizado para fins exclusivos de segurança pública e de investigação e repressão de infrações penais:",
    alternativas: [
      "Está sujeito a todas as regras da LGPD, sem qualquer distinção",
      "Não é regido pela LGPD (art. 4º, III), embora seus princípios gerais devam orientar essa atividade, dependendo de lei específica para disciplina mais detalhada",
      "É absolutamente vedado no ordenamento jurídico brasileiro",
      "Depende de autorização prévia da ANPD para cada ato de investigação",
      "Só pode ser realizado por autoridade judicial, nunca por autoridade policial",
    ],
    correta: 1,
    explicacao:
      "O art. 4º, III, da LGPD exclui de sua incidência direta o tratamento de dados realizado para fins exclusivos de segurança pública, defesa nacional, segurança do Estado ou investigação e repressão de infrações penais — a disciplina detalhada dessas atividades depende de lei específica, devendo observar, ainda assim, os princípios gerais de proteção de dados.",
    origem: "banco",
  },
  {
    id: "leg-015",
    materia: "leg",
    topico: "LGPD e Lei de Acesso à Informação (12.527/2011)",
    enunciado:
      "Segundo a Lei de Acesso à Informação (Lei nº 12.527/2011), o prazo para que o órgão público responda a um pedido de acesso à informação é de:",
    alternativas: [
      "10 dias, improrrogáveis",
      "20 dias, prorrogáveis por mais 10 dias, mediante justificativa expressa",
      "30 dias, prorrogáveis por mais 30 dias",
      "5 dias úteis, improrrogáveis",
      "60 dias, sem possibilidade de prorrogação",
    ],
    correta: 1,
    explicacao:
      "O art. 11 da LAI estabelece resposta imediata ou, quando não for possível, em até 20 dias, prorrogável por mais 10 dias mediante justificativa expressa comunicada ao solicitante. Além disso, a LAI não exige que o requerente motive o pedido de acesso à informação (art. 10, §3º).",
    origem: "banco",
  },
  {
    id: "leg-016",
    materia: "leg",
    topico: "Estrutura organizacional da PCPR (delegacias, carreiras, hierarquia)",
    enunciado:
      "Sobre as carreiras da Polícia Civil do Paraná, nos termos da LC Estadual nº 259/2023, é correto afirmar que",
    alternativas: [
      "são carreiras da instituição as de Delegado de Polícia, Agente de Polícia Judiciária, Papiloscopista Policial e Agente de Operações Policiais, esta última em extinção.",
      "são carreiras da instituição as de Delegado de Polícia, Escrivão de Polícia, Investigador de Polícia e Papiloscopista Policial.",
      "os cargos de Escrivão e de Investigador foram extintos, e seus ocupantes passaram ao quadro em extinção de Agente de Operações Policiais.",
      "o cargo de Agente de Polícia Judiciária absorveu apenas as atribuições do Investigador, mantendo-se o Escrivão como carreira autônoma.",
      "o Papiloscopista Policial passou a integrar a carreira de Agente de Polícia Judiciária, como classe especial.",
    ],
    correta: 0,
    explicacao:
      "Art. 3º da LC 259: as carreiras são Delegado de Polícia, Agente de Polícia Judiciária, Papiloscopista Policial e Agente de Operações Policiais (em extinção).",
    explicacaoErradas:
      "Pelo art. 76, os cargos de Escrivão e Investigador, vagos e ocupados, foram transformados no cargo de Agente de Polícia Judiciária. Pelo art. 77, o Agente absorveu os direitos, deveres, prerrogativas e atribuições das duas carreiras antigas.",
    origem: "banco",
    fonte: "LC Estadual 259/2023 (PR)",
  },
  {
    id: "leg-017",
    materia: "leg",
    topico: "Estrutura organizacional da PCPR (delegacias, carreiras, hierarquia)",
    enunciado:
      "No topo da estrutura da Polícia Civil do Paraná, como chefe da instituição, encontra-se o(a)",
    alternativas: [
      "Delegado-Geral, nomeado pelo Governador entre os Delegados de Polícia em atividade e da classe mais elevada.",
      "Secretário de Estado da Segurança Pública, escolhido entre os Delegados de Polícia de qualquer classe.",
      "Corregedor-Geral de Polícia, eleito pelos integrantes de todas as carreiras.",
      "Comandante-Geral da Polícia Militar, por se tratar de órgão de segurança pública.",
      "Presidente do Conselho Superior de Polícia, escolhido em lista tríplice pela Assembleia Legislativa.",
    ],
    correta: 0,
    explicacao:
      "Arts. 2º e 11 da Lei 23.213: a PCPR é dirigida por Delegado de Polícia em atividade e da classe mais elevada, nomeado pelo Governador, e tem como chefe o Delegado-Geral. Ele também preside o Conselho Superior de Polícia (art. 17, I), e a Delegacia-Geral integra a Direção Superior (art. 10, I).",
    explicacaoErradas:
      "O Secretário da SESP é autoridade do Executivo e não chefia a carreira policial civil.",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR)",
  },
  {
    id: "leg-018",
    materia: "leg",
    topico: "Lei Estadual 6.174/1970 (Estatuto dos Servidores do PR)",
    enunciado:
      "A Lei Estadual nº 6.174/1970 (Estatuto dos Servidores Civis do Paraná) prevê, em seu art. 291, como penas disciplinares",
    alternativas: [
      "advertência, repreensão, suspensão, multa, destituição de função, demissão e cassação de aposentadoria ou disponibilidade.",
      "apenas advertência, suspensão e demissão.",
      "repreensão, suspensão, demissão, cassação de disponibilidade e cassação de aposentadoria, sem previsão de advertência.",
      "advertência, suspensão, demissão e prisão administrativa de até 30 dias.",
      "advertência, multa e demissão, apenas.",
    ],
    correta: 0,
    explicacao:
      "O art. 291 da Lei 6.174 tem 7 penas: advertência, repreensão, suspensão, multa, destituição de função, demissão e cassação de aposentadoria ou disponibilidade.",
    explicacaoErradas:
      "A alternativa sem advertência descreve o Código Disciplinar da PCPR (Lei 21.894, art. 15), que tem 5 penas: repreensão, suspensão, demissão e as duas cassações. A prisão administrativa do Estatuto (art. 302) não é pena disciplinar: cabe ao responsável por dinheiro público em caso de alcance.",
    origem: "banco",
    fonte: "Lei Estadual 6.174/1970 (PR)",
  },
  {
    id: "leg-019",
    materia: "leg",
    topico: "Lei Estadual 6.174/1970 (Estatuto dos Servidores do PR)",
    enunciado:
      "Entre as condutas proibidas ao funcionário pelo art. 285 da Lei Estadual nº 6.174/1970 (Estatuto dos Servidores Civis do Paraná), inclui-se",
    alternativas: [
      "valer-se do cargo para lograr proveito pessoal em detrimento da dignidade do cargo ou função.",
      "frequentar cursos legalmente instituídos para aperfeiçoamento ou especialização.",
      "levar ao conhecimento de autoridade superior irregularidades de que tiver ciência em razão do cargo.",
      "zelar pela economia e conservação do material que lhe for confiado.",
      "obedecer às ordens superiores, exceto quando manifestamente ilegais.",
    ],
    correta: 0,
    explicacao:
      "Art. 285, IV, da Lei 6.174. Outras proibições muito cobradas: receber propinas, comissões, presentes e vantagens em razão do cargo (X); revelar fato sigiloso, salvo em depoimento em processo judicial, policial ou administrativo (XI); deixar de comparecer ao trabalho sem causa justificada (XV); usar bens do Estado em serviço particular (XVII); incitar greves ou aderir a elas (XIX).",
    explicacaoErradas:
      "As demais alternativas são deveres do art. 279 (incisos XVI, VIII, IX e VII).",
    origem: "banco",
    fonte: "Lei Estadual 6.174/1970 (PR)",
  },
  {
    id: "leg-020",
    materia: "leg",
    topico: "Alterações legislativas de 2025/2026 na estrutura da Polícia Civil do PR",
    enunciado:
      "Um Agente de Polícia Judiciária pede exoneração com dois anos de exercício no cargo para assumir outro emprego. Pela LC nº 259/2023, com a redação da LC nº 289/2025, ele",
    alternativas: [
      "deve ressarcir ao erário estadual os gastos com sua formação técnico-profissional, proporcionalmente ao tempo de serviço, em procedimento com contraditório e ampla defesa que busque solução consensual.",
      "não deve nada, porque a exoneração a pedido é direito do servidor e não gera nenhum ônus.",
      "deve ressarcir integralmente os gastos com a formação, qualquer que seja o tempo de serviço, por desconto automático na última remuneração.",
      "só teria de ressarcir os gastos se tivesse menos de um ano de exercício.",
      "não pode ser exonerado antes de cinco anos de exercício, salvo para assumir outro cargo policial.",
    ],
    correta: 0,
    explicacao:
      "Art. 11-A da LC 259 (incluído pela LC 289/2025): o servidor policial civil que pedir exoneração antes de completar três anos de exercício no cargo para o qual foi nomeado deve ressarcir ao erário estadual os gastos com sua formação técnico-profissional, proporcionalmente ao tempo de serviço, por meio de procedimento que assegure o contraditório e a ampla defesa, visando à solução consensual. Quem sai sem quitar débito com a Fazenda é inscrito em Dívida Ativa (art. 44-A, §6º).",
    origem: "banco",
    fonte: "LC Estadual 259/2023, art. 11-A, com redação da LC 289/2025",
  },
  {
    id: "leg-021",
    materia: "leg",
    topico: "Alterações legislativas de 2025/2026 na estrutura da Polícia Civil do PR",
    enunciado:
      "Pela LC nº 259/2023, com a redação dada pela LC nº 285/2025, o policial civil recém-empossado",
    alternativas: [
      "é matriculado de imediato no curso de formação técnico-profissional e, enquanto não o concluir, não pode exercer ato relacionado à atividade-fim, salvo em estágio supervisionado.",
      "pode exercer todas as atribuições do cargo desde a posse e faz o curso de formação só depois do estágio probatório.",
      "só toma posse depois de aprovado no curso de formação, que é etapa do concurso, sem remuneração.",
      "escolhe a primeira lotação logo após a posse, pela classificação nas provas objetivas do concurso.",
      "fica dispensado do curso de formação se já tiver exercido cargo policial em outro Estado.",
    ],
    correta: 0,
    explicacao:
      "Com a LC 285/2025, o curso de formação deixou de ser etapa do concurso e passou a ocorrer depois da posse. Pelo art. 19, os empossados são convocados e matriculados de imediato no curso, na Escola Superior de Polícia Civil, e pelo art. 26 a matrícula corresponde à data de entrada em exercício. O art. 22, §1º, diz que, enquanto não concluir o curso, o policial não pode exercer qualquer ato relacionado à atividade-fim, salvo em estágio supervisionado.",
    explicacaoErradas:
      "A primeira lotação é escolhida ao final do curso, pela classificação final nele obtida (art. 19, §§1º e 2º).",
    origem: "banco",
    fonte: "LC Estadual 259/2023, arts. 19 e 22, com redação da LC 285/2025",
  },
  {
    id: "leg-022",
    materia: "leg",
    topico: "Lei 14.735/2023 (Lei Orgânica Nacional das Polícias Civis)",
    enunciado:
      "De acordo com a Lei nº 14.735/2023 (Lei Orgânica Nacional das Polícias Civis), o oficial investigador de polícia — cargo ao qual corresponde, no Paraná, o Agente de Polícia Judiciária — exerce atribuições apuratórias, cartorárias, procedimentais, de obtenção de dados, de inteligência e de execução de ações investigativas",
    alternativas: [
      "sob determinação ou coordenação do delegado de polícia, devendo encaminhar a este, para apreciação, o laudo investigativo e as demais peças que produzir.",
      "com autonomia funcional plena, podendo presidir o inquérito policial nas infrações de menor potencial ofensivo.",
      "sob coordenação do Ministério Público, a quem deve remeter diretamente o laudo investigativo.",
      "sob requisição do perito oficial criminal, que detém a prerrogativa de direção técnica das investigações.",
      "de forma independente, sendo vedado ao delegado de polícia rever o laudo investigativo por ele elaborado.",
    ],
    correta: 0,
    explicacao:
      "Art. 27 da Lei 14.735: o oficial investigador atua \"sob determinação ou coordenação do delegado de polícia\", com atuação técnica e científica nos limites de suas atribuições. O parágrafo único manda produzir o laudo investigativo e as demais peças e encaminhá-los ao delegado para apreciação.",
    explicacaoErradas:
      "A presidência do inquérito é do delegado (art. 26, parágrafo único), e o perito é que atua sob requisição do delegado (art. 28).",
    origem: "banco",
    fonte: "Lei 14.735/2023 (Planalto)",
  },
  {
    id: "leg-023",
    materia: "leg",
    topico: "Lei 14.735/2023 (Lei Orgânica Nacional das Polícias Civis)",
    enunciado:
      "Segundo a Lei nº 14.735/2023, a estabilidade do policial civil é adquirida após",
    alternativas: [
      "3 anos de efetivo exercício no cargo.",
      "2 anos de efetivo exercício no cargo.",
      "a conclusão do curso de formação, independentemente de tempo de exercício.",
      "5 anos de efetivo exercício no cargo.",
      "1 ano de efetivo exercício, desde que aprovado em avaliação especial de desempenho.",
    ],
    correta: 0,
    explicacao:
      "Art. 30, §15, da Lei 14.735: \"A estabilidade do policial civil dar-se-á após 3 (três) anos de efetivo exercício no cargo\", em linha com o art. 41 da CF. Outro prazo de 3 anos na mesma lei: quem pede exoneração antes de completar 3 anos de exercício deve ressarcir os gastos com sua formação, de forma proporcional (art. 24, §1º).",
    origem: "banco",
    fonte: "Lei 14.735/2023 (Planalto)",
  },
  {
    id: "leg-024",
    materia: "leg",
    topico: "Lei 14.735/2023 (Lei Orgânica Nacional das Polícias Civis)",
    enunciado:
      "Quanto à Corregedoria-Geral de Polícia Civil, a Lei nº 14.735/2023 estabelece que",
    alternativas: [
      "é garantido o duplo grau de revisão do julgamento nos processos disciplinares que resultem em demissão, mediante recurso ao Conselho Superior de Polícia Civil e, em última instância, ao Chefe do Poder Executivo.",
      "o Corregedor-Geral é eleito pelos integrantes de todos os cargos da instituição, para mandato de dois anos.",
      "a Corregedoria é subordinada à Secretaria de Segurança Pública, sem autonomia em suas atividades.",
      "o Corregedor-Geral é nomeado pelo governador entre delegados de qualquer classe, após lista tríplice.",
      "as decisões disciplinares de demissão são irrecorríveis na esfera administrativa, cabendo apenas a via judicial.",
    ],
    correta: 0,
    explicacao:
      "Na pena de demissão, há duplo grau de revisão, com recurso ao Conselho Superior e, em última instância, ao Chefe do Executivo (§3º). Quem foi lotado na Corregedoria tem facultada lotação subsequente em unidade administrativa por no mínimo 1 ano (§2º).",
    explicacaoErradas:
      "Art. 10 da Lei 14.735: a Corregedoria-Geral é \"dotada de autonomia em suas atividades\". O Corregedor-Geral é designado pelo Delegado-Geral entre os delegados da classe mais elevada (§1º).",
    origem: "banco",
    fonte: "Lei 14.735/2023 (Planalto)",
  },
  {
    id: "leg-025",
    materia: "leg",
    topico: "Lei 14.735/2023 (Lei Orgânica Nacional das Polícias Civis)",
    enunciado:
      "Um policial civil, convidado para uma palestra aberta ao público em uma faculdade, pretende detalhar as técnicas que sua unidade emprega para analisar dados obtidos em interceptação telefônica judicialmente autorizada. À luz da Lei nº 14.735/2023, essa divulgação",
    alternativas: [
      "é vedada, pois a lei proíbe, a qualquer tempo e fora da esfera policial, divulgar técnicas de investigação e dados obtidos por medida cautelar judicial, sujeitando o infrator a responsabilidade civil, administrativa e criminal.",
      "é permitida, desde que o policial obtenha autorização prévia do delegado titular da unidade.",
      "é permitida após o trânsito em julgado da ação penal em que a interceptação foi produzida.",
      "é vedada apenas durante o inquérito policial, tornando-se livre após o oferecimento da denúncia.",
      "é permitida, pois o princípio da publicidade prevalece sobre o sigilo nas atividades de ensino.",
    ],
    correta: 0,
    explicacao:
      "Art. 34 da Lei 14.735: \"É vedada a divulgação, a qualquer tempo e fora da esfera policial, de técnicas de investigação utilizadas pelas polícias civis e de qualquer dado ou informação obtidos por meio de medida cautelar judicial\", ressalvadas as hipóteses legais, e o infrator responde civil, administrativa e criminalmente. A vedação não se aplica aos cursos exclusivamente ministrados aos profissionais dos órgãos do art. 144 da CF (§1º), e não a palestras abertas ao público. Em audiências, o policial deve resguardar ao máximo o sigilo das técnicas (§2º).",
    origem: "banco",
    fonte: "Lei 14.735/2023 (Planalto)",
  },
  {
    id: "leg-026",
    materia: "leg",
    topico: "Lei 14.735/2023 (Lei Orgânica Nacional das Polícias Civis)",
    enunciado:
      "A respeito da custódia de presos em unidades da polícia civil, a Lei nº 14.735/2023 dispõe que",
    alternativas: [
      "é vedada a custódia de preso e de adolescente infrator, ainda que em caráter provisório, em dependências das polícias civis, salvo interesse fundamentado na investigação policial.",
      "é permitida a custódia de presos provisórios em delegacias por até 30 dias, enquanto se aguarda vaga no sistema prisional.",
      "a custódia de adolescente infrator em delegacia é permitida por até 5 dias, em cela separada dos adultos.",
      "compete à polícia civil, privativamente, a custódia de todos os presos provisórios do Estado.",
      "a custódia de presos em delegacias depende apenas de autorização do Delegado-Geral, sem necessidade de fundamentação.",
    ],
    correta: 0,
    explicacao:
      "Art. 40 da Lei 14.735: \"Fica vedada a custódia de preso e de adolescente infrator, ainda que em caráter provisório, em dependências de prédios e unidades das polícias civis, salvo interesse fundamentado na investigação policial.\" Não se confunde com a competência de custodiar o policial civil preso, na falta de unidade exclusiva (art. 6º), nem com o direito do policial preso a recolhimento em unidade prisional da própria instituição (art. 30, IV).",
    origem: "banco",
    fonte: "Lei 14.735/2023 (Planalto)",
  },
  {
    id: "leg-027",
    materia: "leg",
    topico: "Lei 14.735/2023 (Lei Orgânica Nacional das Polícias Civis)",
    enunciado:
      "Considerando os requisitos de ingresso fixados pela Lei nº 14.735/2023 para os cargos das polícias civis, é correto afirmar que",
    alternativas: [
      "o quadro efetivo é composto por cargos de nível superior, exigindo-se para o oficial investigador de polícia diploma de graduação em qualquer área reconhecido pelo MEC.",
      "o cargo de oficial investigador de polícia exige bacharelado em Direito e 3 anos de atividade jurídica ou policial.",
      "o cargo de oficial investigador de polícia admite ingresso com ensino médio completo, desde que aprovado no curso de formação.",
      "a idade mínima para ingresso em qualquer cargo é de 21 anos.",
      "a participação da Ordem dos Advogados do Brasil é obrigatória em todas as fases do concurso de oficial investigador.",
    ],
    correta: 0,
    explicacao:
      "Art. 20 da Lei 14.735: os cargos são de nível superior, e os requisitos gerais são ser brasileiro, ter no mínimo 18 anos, estar quite com as obrigações eleitorais e militares e ter capacidade física e mental. Para o oficial investigador, basta graduação em qualquer área (§1º).",
    explicacaoErradas:
      "O bacharelado em Direito com 3 anos de atividade jurídica ou policial é exigido do delegado (§3º), e é no concurso de delegado que a OAB participa de todas as fases.",
    origem: "banco",
    fonte: "Lei 14.735/2023 (Planalto)",
  },
  {
    id: "leg-028",
    materia: "leg",
    topico: "Lei 14.735/2023 (Lei Orgânica Nacional das Polícias Civis)",
    enunciado:
      "Entre os direitos e garantias assegurados aos policiais civis em atividade pelo art. 30 da Lei nº 14.735/2023, inclui-se",
    alternativas: [
      "o recolhimento em unidade prisional da própria instituição, para cumprimento de prisão provisória ou de sentença condenatória transitada em julgado.",
      "a imunidade à prisão em flagrante, salvo por crime inafiançável.",
      "o foro por prerrogativa de função no Tribunal de Justiça para os crimes comuns.",
      "a jornada de trabalho de, no mínimo, 44 horas semanais, compensada por adicional de risco.",
      "a dispensa de comunicação de sua prisão à chefia, para preservar a intimidade do servidor.",
    ],
    correta: 0,
    explicacao:
      "Art. 30, IV, da Lei 14.735 garante o recolhimento em unidade prisional da própria instituição.",
    explicacaoErradas:
      "O mesmo artigo assegura ainda identidade funcional e porte de arma com validade nacional (I e II), livre trânsito em razão da função (III), pronta comunicação da prisão ao chefe imediato (V), precedência em audiências como testemunha de fato do serviço (IX) e jornada não superior a 40 horas semanais (XIX). A lei não cria imunidade à prisão nem foro especial.",
    origem: "banco",
    fonte: "Lei 14.735/2023 (Planalto)",
  },
  {
    id: "leg-029",
    materia: "leg",
    topico: "Lei 14.735/2023 (Lei Orgânica Nacional das Polícias Civis)",
    enunciado:
      "Sobre a chefia e a organização das polícias civis, nos termos da Lei nº 14.735/2023, assinale a afirmativa correta.",
    alternativas: [
      "A polícia civil é chefiada pelo Delegado-Geral, nomeado pelo governador entre os delegados em atividade da classe mais elevada, que deve apresentar planejamento estratégico de gestão em até 30 dias após a nomeação.",
      "O Delegado-Geral é escolhido pelo Secretário de Segurança Pública entre policiais civis de qualquer cargo com mais de 10 anos de carreira.",
      "O Conselho Superior de Polícia Civil é presidido pelo governador e composto apenas por delegados de polícia.",
      "A lei orgânica de cada polícia civil é de iniciativa privativa da Assembleia Legislativa.",
      "As polícias civis não integram o Sistema Único de Segurança Pública, por terem natureza exclusivamente judiciária.",
    ],
    correta: 0,
    explicacao:
      "Art. 8º da Lei 14.735: o chefe é o Delegado-Geral, nomeado pelo governador entre os delegados em atividade da classe mais elevada. O parágrafo único exige planejamento estratégico em até 30 dias da nomeação.",
    explicacaoErradas:
      "O Conselho Superior é presidido pelo Delegado-Geral e tem representantes de todos os cargos (art. 9º). A lei orgânica estadual é de iniciativa do governador (art. 3º). As polícias civis são integrantes operacionais do Susp (art. 2º).",
    origem: "banco",
    fonte: "Lei 14.735/2023 (Planalto)",
  },
  {
    id: "leg-030",
    materia: "leg",
    topico: "Lei Estadual 21.894/2024 (Código Disciplinar da PCPR)",
    enunciado:
      "Segundo a Lei Estadual nº 21.894/2024 (Código Disciplinar da Polícia Civil do Paraná), são penas disciplinares aplicáveis ao policial civil",
    alternativas: [
      "repreensão, suspensão, demissão, cassação de disponibilidade e cassação de aposentadoria.",
      "advertência, repreensão, suspensão e demissão.",
      "advertência verbal, repreensão escrita, suspensão, multa e demissão.",
      "repreensão, suspensão, multa, destituição de função e demissão.",
      "advertência, suspensão, demissão e cassação de aposentadoria.",
    ],
    correta: 0,
    explicacao:
      "Art. 15 da Lei 21.894: são 5 penas, e não existe advertência. A repreensão é sempre aplicada por escrito, publicada e anotada no assentamento (art. 19).",
    explicacaoErradas:
      "Advertência, multa e destituição de função são penas do Estatuto (Lei 6.174, art. 291), e é aí que a FGV costuma montar a pegadinha.",
    origem: "banco",
    fonte: "Lei Estadual 21.894/2024 (PR)",
  },
  {
    id: "leg-031",
    materia: "leg",
    topico: "Lei Estadual 21.894/2024 (Código Disciplinar da PCPR)",
    enunciado:
      "Um Agente de Polícia Judiciária foi punido com suspensão, nos termos da Lei Estadual nº 21.894/2024. Enquanto durar a pena, ele",
    alternativas: [
      "perde metade do subsídio por dia e tem recolhidos a arma, o conjunto documental e os demais bens e equipamentos acautelados, não podendo a pena exceder 90 dias.",
      "perde a totalidade do subsídio, e a pena pode chegar a 120 dias.",
      "pode ter a suspensão convertida em multa de 50% por dia, permanecendo em serviço.",
      "mantém o subsídio integral, mas fica afastado das atividades por até 30 dias.",
      "perde um terço do subsídio, mantendo o porte da arma funcional.",
    ],
    correta: 0,
    explicacao:
      "Art. 20 da Lei 21.894: a suspensão acarreta a perda de metade do subsídio, por dia, e não pode exceder 90 dias. O parágrafo único manda recolher a arma, o conjunto documental e os bens acautelados enquanto durar a pena.",
    explicacaoErradas:
      "A conversão em multa de 50% é regra do Estatuto (Lei 6.174, art. 293, §5º), e o Código Disciplinar da PCPR não prevê multa.",
    origem: "banco",
    fonte: "Lei Estadual 21.894/2024 (PR)",
  },
  {
    id: "leg-032",
    materia: "leg",
    topico: "Lei Estadual 21.894/2024 (Código Disciplinar da PCPR)",
    enunciado:
      "Pela Lei Estadual nº 21.894/2024, a transgressão disciplinar do policial civil prescreve em",
    alternativas: [
      "2 anos, se punível com repreensão ou suspensão, e 5 anos, se punível com demissão ou cassação, contados do dia em que a transgressão se consumou.",
      "2 anos, se punível com repreensão ou suspensão, e 4 anos, se punível com demissão, contados da data em que a autoridade tomou conhecimento do fato.",
      "180 dias para a repreensão, 2 anos para a suspensão e 5 anos para a demissão, contados da ciência do fato.",
      "5 anos para qualquer penalidade, contados da instauração do Processo Administrativo Disciplinar.",
      "sempre no prazo da lei penal, ainda que a transgressão não constitua crime.",
    ],
    correta: 0,
    explicacao:
      "Art. 62 da Lei 21.894: 2 anos para a transgressão punível com repreensão ou suspensão e 5 anos para a punível com demissão ou cassação. Se a pena prevista vai de suspensão a demissão, o prazo é de 5 anos (§1º), mas cai para 2 anos se a suspensão for a pena aplicada (§2º). Pelo art. 63, o prazo conta do dia da consumação, e, nas transgressões permanentes ou continuadas, do dia em que cessaram.",
    explicacaoErradas:
      "Os 4 anos são do Estatuto (Lei 6.174, art. 301).",
    origem: "banco",
    fonte: "Lei Estadual 21.894/2024 (PR)",
  },
  {
    id: "leg-033",
    materia: "leg",
    topico: "Lei Estadual 21.894/2024 (Código Disciplinar da PCPR)",
    enunciado:
      "Concluído Processo Administrativo Disciplinar com proposta de demissão de um Agente de Polícia Judiciária, a autoridade competente para aplicar a pena, originariamente, segundo a Lei Estadual nº 21.894/2024, é o",
    alternativas: [
      "Governador do Estado.",
      "Conselho Superior de Polícia.",
      "Corregedor-Geral de Polícia.",
      "Delegado-Geral da Polícia Civil.",
      "Secretário de Estado da Segurança Pública.",
    ],
    correta: 0,
    explicacao:
      "Art. 25 da Lei 21.894: o Governador aplica, originariamente, a demissão e a cassação de aposentadoria ou disponibilidade (I).",
    explicacaoErradas:
      "O Conselho Superior de Polícia aplica, originariamente, repreensão e suspensão (III). O Secretário da Segurança Pública atua em grau recursal sobre repreensão e suspensão (II). O Corregedor-Geral instaura e conduz a apuração, mas não aplica pena.",
    origem: "banco",
    fonte: "Lei Estadual 21.894/2024 (PR)",
  },
  {
    id: "leg-034",
    materia: "leg",
    topico: "Lei Estadual 21.894/2024 (Código Disciplinar da PCPR)",
    enunciado:
      "Um Agente de Polícia Judiciária estável, que não firmou nenhum Termo de Ajustamento de Conduta (TAC) anterior e não cumpre pena, praticou transgressão punível, em abstrato, com repreensão, e se comprometeu a ressarcir o pequeno dano causado. Segundo a Lei Estadual nº 21.894/2024, nesse caso",
    alternativas: [
      "o TAC pode ser celebrado pelo Corregedor-Geral e não implica confissão dos fatos, não tem efeitos civis e não constará de certidão de antecedentes disciplinares.",
      "o TAC é incabível, pois só se admite em transgressão punível com advertência.",
      "o TAC pode ser celebrado, mas implica confissão da falta e constará da certidão de antecedentes disciplinares.",
      "o TAC depende de homologação judicial e é proposto pelo Ministério Público.",
      "o TAC só é admitido se o servidor estiver em estágio probatório.",
    ],
    correta: 0,
    explicacao:
      "Art. 65 da Lei 21.894: o Corregedor-Geral pode celebrar TAC na infração de menor potencial ofensivo, que é a punida em abstrato com repreensão ou com suspensão de até 30 dias (§1º). Os requisitos do art. 66 são: não estar cumprindo suspensão, não ter firmado TAC nos últimos 2 anos, ressarcir ou se comprometer a ressarcir o dano e não estar em estágio probatório. O parágrafo único do art. 67 diz que o TAC não implica confissão, não tem efeitos civis e não consta de certidão: é registrado só para impedir novo benefício em 2 anos.",
    origem: "banco",
    fonte: "Lei Estadual 21.894/2024 (PR)",
  },
  {
    id: "leg-035",
    materia: "leg",
    topico: "Lei Estadual 21.894/2024 (Código Disciplinar da PCPR)",
    enunciado:
      "Nos termos da Lei Estadual nº 21.894/2024, o descumprimento do Termo de Ajustamento de Conduta pelo policial civil",
    alternativas: [
      "impede a celebração de novo termo, sobre qualquer objeto, pelo prazo de 5 anos, contados da decisão do Corregedor-Geral que declarar o descumprimento.",
      "impede a celebração de novo termo pelo prazo de 2 anos, apenas quanto ao mesmo objeto.",
      "acarreta a demissão automática do servidor, independentemente de processo.",
      "converte o termo em suspensão de 30 dias, dispensado o procedimento disciplinar.",
      "não gera consequência, desde que o servidor repare o dano até o julgamento.",
    ],
    correta: 0,
    explicacao:
      "Art. 72, §4º, da Lei 21.894: o descumprimento impede novo TAC, sobre qualquer objeto, por 5 anos, contados da decisão do Corregedor-Geral que declarar o descumprimento. Além disso, a chefia comunica o fato ao Corregedor-Geral para instaurar ou retomar o procedimento disciplinar (art. 72, §2º), e a inobservância do TAC sujeita o servidor a procedimento disciplinar autônomo (art. 70, §2º).",
    explicacaoErradas:
      "Não confunda: o prazo de 2 anos é o requisito para quem já firmou TAC (art. 66, II). O TAC dura no máximo 2 anos (art. 70, §1º), e o cumprimento leva ao arquivamento (art. 72, §5º).",
    origem: "banco",
    fonte: "Lei Estadual 21.894/2024 (PR)",
  },
  {
    id: "leg-036",
    materia: "leg",
    topico: "Lei Estadual 21.894/2024 (Código Disciplinar da PCPR)",
    enunciado:
      "Segundo a Lei Estadual nº 21.894/2024, é punida com demissão a conduta do policial civil que",
    alternativas: [
      "se ausentar do serviço, de forma comprovada e sem causa justificada, por mais de 45 dias não consecutivos no período de um ano.",
      "se ausentar do serviço, sem justa causa, por 20 dias consecutivos.",
      "se ausentar do serviço, sem causa justificada, por mais de 30 dias não consecutivos no período de um ano.",
      "chegar atrasado ao serviço em dez ocasiões no mesmo mês.",
      "faltar ao serviço por três dias consecutivos, sem comunicar a chefia.",
    ],
    correta: 0,
    explicacao:
      "Art. 8º da Lei 21.894. Inciso LXIV: ausência comprovada, sem causa justificada, por mais de 45 dias não consecutivos no período de um ano, punida com demissão.",
    explicacaoErradas:
      "Inciso LXIII: abandono de cargo, que é a ausência sem justa causa por 30 dias consecutivos, também punida com demissão. Compare com o Estatuto (Lei 6.174, art. 293, §§1º e 2º): abandono com 30 dias consecutivos e inassiduidade com 60 faltas interpoladas em 12 meses.",
    origem: "banco",
    fonte: "Lei Estadual 21.894/2024 (PR)",
  },
  {
    id: "leg-037",
    materia: "leg",
    topico: "Lei Estadual 21.894/2024 (Código Disciplinar da PCPR)",
    enunciado:
      "Instaurado Processo Administrativo Disciplinar contra policial civil por fato de grande repercussão, o Corregedor-Geral entende que a moralidade administrativa recomenda afastá-lo de suas funções. Segundo a Lei Estadual nº 21.894/2024, ele pode determinar, por despacho fundamentado, o afastamento preventivo",
    alternativas: [
      "por até 90 dias, prorrogável uma única vez por até 60 dias, sem prejuízo do subsídio.",
      "por até 60 dias, prorrogável por igual período, com perda de metade do subsídio.",
      "por até 120 dias, prorrogável enquanto durar o processo, sem prejuízo do subsídio.",
      "por até 30 dias, apenas mediante autorização judicial.",
      "por prazo indeterminado, com suspensão integral do subsídio até o julgamento.",
    ],
    correta: 0,
    explicacao:
      "Art. 32, I, da Lei 21.894: afastamento preventivo de até 90 dias, prorrogável uma única vez por até 60, quando a moralidade administrativa ou a repercussão do fato o recomendarem, sem prejuízo do subsídio. O Corregedor-Geral também pode designar o policial para atividades exclusivamente administrativas, recolher carteira, distintivo, armas e algemas e proibir o porte de armas (II a IV). O Conselho Superior de Polícia reaprecia a decisão na primeira reunião ordinária seguinte (§1º).",
    origem: "banco",
    fonte: "Lei Estadual 21.894/2024 (PR)",
  },
  {
    id: "leg-038",
    materia: "leg",
    topico: "Lei Estadual 21.894/2024 (Código Disciplinar da PCPR)",
    enunciado:
      "Contra a decisão do Conselho Superior de Polícia que aplicou, originariamente, pena de suspensão a um policial civil, a Lei Estadual nº 21.894/2024 prevê recurso",
    alternativas: [
      "ao Secretário de Estado da Segurança Pública, por uma única vez, no prazo de 10 dias úteis, com efeito suspensivo.",
      "ao Governador do Estado, no prazo de 30 dias corridos, sem efeito suspensivo.",
      "ao Corregedor-Geral de Polícia, no prazo de 5 dias úteis, apenas com efeito devolutivo.",
      "ao Delegado-Geral, no prazo de 15 dias, admitidos recursos sucessivos.",
      "ao Tribunal de Justiça, por se tratar de matéria disciplinar.",
    ],
    correta: 0,
    explicacao:
      "Art. 55 da Lei 21.894: cabe recurso por uma única vez, com efeito suspensivo, em 10 dias úteis da intimação, ao Secretário da Segurança Pública, contra as penas aplicadas originariamente pelo Conselho Superior de Polícia. O recurso é protocolado no próprio Conselho, que pode se retratar em matéria de ordem pública (§1º), e o Secretário decide em 30 dias (§4º).",
    explicacaoErradas:
      "No Estatuto (Lei 6.174, art. 264), o recurso não tem efeito suspensivo.",
    origem: "banco",
    fonte: "Lei Estadual 21.894/2024 (PR)",
  },
  {
    id: "leg-039",
    materia: "leg",
    topico: "Lei Estadual 21.894/2024 (Código Disciplinar da PCPR)",
    enunciado:
      "Sobre a revisão do processo disciplinar na Lei Estadual nº 21.894/2024, é correto afirmar que",
    alternativas: [
      "pode ser requerida a qualquer tempo, quando surgirem novas provas da inocência do punido ou de circunstância que permita atenuar a pena, e a pena imposta não poderá ser agravada.",
      "a simples alegação de injustiça da penalidade é fundamento suficiente para o pedido.",
      "a absolvição criminal pelos mesmos fatos, por insuficiência de provas, obriga a revisão.",
      "deve ser requerida no prazo de 2 anos, contados da decisão administrativa definitiva.",
      "pode resultar em agravamento da pena, se surgirem novas provas contra o servidor.",
    ],
    correta: 0,
    explicacao:
      "Art. 58 da Lei 21.894: a revisão cabe a qualquer tempo, diante de novas provas de inocência ou de circunstância que permita atenuar a pena. A pena não pode ser agravada (§4º). O pedido vai ao Presidente do Conselho Superior de Polícia (art. 59), e a revisão procedente pode absolver, mudar a pena ou anular o processo (art. 61).",
    explicacaoErradas:
      "Não servem como fundamento a simples alegação de injustiça, a mera reapreciação da prova e a absolvição criminal por insuficiência de provas (§1º).",
    origem: "banco",
    fonte: "Lei Estadual 21.894/2024 (PR)",
  },
  {
    id: "leg-040",
    materia: "leg",
    topico: "Lei Estadual 6.174/1970 (Estatuto dos Servidores do PR)",
    enunciado:
      "Funcionário estadual demitido teve a demissão invalidada por decisão judicial e retornou ao serviço público com ressarcimento dos vencimentos e vantagens do cargo. Segundo a Lei Estadual nº 6.174/1970, essa forma de provimento é a",
    alternativas: [
      "reintegração.",
      "readmissão.",
      "reversão.",
      "readaptação.",
      "aproveitamento.",
    ],
    correta: 0,
    explicacao:
      "Art. 106 da Lei 6.174: reintegração é o reingresso decorrente de decisão administrativa ou judiciária, com ressarcimento dos vencimentos e vantagens.",
    explicacaoErradas:
      "Readmissão (art. 103) é o reingresso do exonerado ou do demitido sem ressarcimento. Reversão (art. 114) é a volta do aposentado quando os motivos da aposentadoria deixam de existir. Aproveitamento (art. 110) é a volta do servidor em disponibilidade. Readaptação (art. 119) é a passagem para cargo mais compatível com a capacidade física ou intelectual e a vocação.",
    origem: "banco",
    fonte: "Lei Estadual 6.174/1970 (PR)",
  },
  {
    id: "leg-041",
    materia: "leg",
    topico: "Lei Estadual 6.174/1970 (Estatuto dos Servidores do PR)",
    enunciado:
      "Conforme o art. 293 da Lei Estadual nº 6.174/1970, a pena de advertência, aplicada verbalmente, é cabível em caso de",
    alternativas: [
      "mera negligência.",
      "reincidência em falta que resultou em repreensão.",
      "falta grave.",
      "desobediência ou falta de cumprimento dos deveres.",
      "infração às proibições do Estatuto.",
    ],
    correta: 0,
    explicacao:
      "Art. 293 da Lei 6.174: advertência verbal na mera negligência (I). O Código Disciplinar da PCPR (Lei 21.894) não tem advertência.",
    explicacaoErradas:
      "Repreensão por escrito na desobediência, na falta de cumprimento dos deveres e na reincidência em falta punida com advertência (II). Suspensão de até 90 dias na falta grave, na infração às proibições e na reincidência em falta punida com repreensão (III).",
    origem: "banco",
    fonte: "Lei Estadual 6.174/1970 (PR)",
  },
  {
    id: "leg-042",
    materia: "leg",
    topico: "Lei Estadual 6.174/1970 (Estatuto dos Servidores do PR)",
    enunciado:
      "Pela Lei Estadual nº 6.174/1970, além do abandono de cargo, será demitido o funcionário que, durante o período de doze meses, faltar ao serviço sem causa justificada",
    alternativas: [
      "60 dias interpoladamente.",
      "30 dias interpoladamente.",
      "45 dias interpoladamente.",
      "15 dias consecutivos.",
      "20 dias interpoladamente.",
    ],
    correta: 0,
    explicacao:
      "Art. 293, §2º, da Lei 6.174: 60 dias interpolados em 12 meses, sem causa justificada, levam à demissão.",
    explicacaoErradas:
      "O abandono de cargo é a ausência sem justa causa por 30 dias consecutivos (§1º). No Código Disciplinar da PCPR, a regra é mais rígida: mais de 45 dias não consecutivos em um ano já levam à demissão (Lei 21.894, art. 8º, LXIV).",
    origem: "banco",
    fonte: "Lei Estadual 6.174/1970 (PR)",
  },
  {
    id: "leg-043",
    materia: "leg",
    topico: "Lei Estadual 6.174/1970 (Estatuto dos Servidores do PR)",
    enunciado:
      "Pela Lei Estadual nº 6.174/1970, a falta funcional sujeita à pena de demissão, que não esteja prevista na lei penal como crime, prescreve em",
    alternativas: [
      "4 anos.",
      "5 anos.",
      "2 anos.",
      "180 dias.",
      "10 anos.",
    ],
    correta: 0,
    explicacao:
      "Art. 301 da Lei 6.174: prescreve em 2 anos a falta sujeita a repreensão ou suspensão e em 4 anos a sujeita a demissão, destituição de função ou cassação. A falta que também é crime prescreve junto com o crime (parágrafo único).",
    explicacaoErradas:
      "No Código Disciplinar da PCPR, a demissão prescreve em 5 anos (Lei 21.894, art. 62, II).",
    origem: "banco",
    fonte: "Lei Estadual 6.174/1970 (PR)",
  },
  {
    id: "leg-044",
    materia: "leg",
    topico: "Lei Estadual 6.174/1970 (Estatuto dos Servidores do PR)",
    enunciado:
      "Na Lei Estadual nº 6.174/1970, quando houver conveniência para o serviço, a pena de suspensão poderá ser convertida em multa, ficando o funcionário obrigado a permanecer em serviço. Essa multa corresponde a",
    alternativas: [
      "50% por dia de vencimento ou remuneração.",
      "100% por dia de vencimento ou remuneração.",
      "um terço do vencimento mensal.",
      "10% por dia de vencimento ou remuneração.",
      "25% por dia de vencimento ou remuneração.",
    ],
    correta: 0,
    explicacao:
      "Art. 293, §5º, da Lei 6.174: a suspensão pode ser convertida em multa de 50% por dia de vencimento ou remuneração, e o funcionário continua trabalhando. Durante a suspensão propriamente dita, ele perde todas as vantagens do exercício do cargo (§4º). No Código Disciplinar da PCPR não há multa: a suspensão corta metade do subsídio por dia (Lei 21.894, art. 20).",
    origem: "banco",
    fonte: "Lei Estadual 6.174/1970 (PR)",
  },
  {
    id: "leg-045",
    materia: "leg",
    topico: "Lei Estadual 6.174/1970 (Estatuto dos Servidores do PR)",
    enunciado:
      "Segundo a Lei Estadual nº 6.174/1970, a licença para trato de interesses particulares",
    alternativas: [
      "só pode ser obtida depois de estável, é concedida sem vencimento e não pode durar mais de dois anos contínuos, só cabendo nova licença depois de dois anos do término da anterior.",
      "pode ser concedida ao funcionário em estágio probatório, desde que sem vencimento.",
      "é concedida com vencimento integral, por até seis meses.",
      "pode ser concedida ao funcionário recém-nomeado antes de assumir o exercício.",
      "não pode ser cassada pela Administração depois de concedida.",
    ],
    correta: 0,
    explicacao:
      "Art. 240 da Lei 6.174: só o funcionário estável pode obtê-la, sem vencimento. Ele aguarda em exercício a concessão (§1º), e a licença dura no máximo 2 anos contínuos, com intervalo de 2 anos para nova licença (§2º).",
    explicacaoErradas:
      "A licença não é concedida quando for inconveniente para o serviço, nem ao nomeado, removido ou transferido antes de assumir o exercício (art. 241). O funcionário pode desistir a qualquer tempo (art. 242), e a licença pode ser cassada por interesse público, com retorno em 30 dias (art. 243).",
    origem: "banco",
    fonte: "Lei Estadual 6.174/1970 (PR)",
  },
  {
    id: "leg-046",
    materia: "leg",
    topico: "Lei Estadual 6.174/1970 (Estatuto dos Servidores do PR)",
    enunciado:
      "Nos termos da Lei Estadual nº 6.174/1970, o direito de pleitear na esfera administrativa prescreve",
    alternativas: [
      "em 5 anos, quanto aos atos de que decorram demissão, aposentadoria ou sua cassação e disponibilidade, e em 120 dias nos demais casos.",
      "em 2 anos, em qualquer caso.",
      "em 5 anos, em qualquer caso, contados da ciência do interessado.",
      "em 120 dias quanto à demissão e em 5 anos nos demais casos.",
      "em 30 dias, prorrogáveis a critério da autoridade.",
    ],
    correta: 0,
    explicacao:
      "Art. 265 da Lei 6.174: 5 anos para atos de que decorram demissão, aposentadoria ou sua cassação e disponibilidade, e 120 dias nos demais casos. O prazo conta da publicação oficial do ato ou, se o ato for reservado, da ciência do interessado (art. 266).",
    explicacaoErradas:
      "O pedido de reconsideração e o recurso interrompem a prescrição até duas vezes (art. 267), e os prazos são improrrogáveis (art. 268).",
    origem: "banco",
    fonte: "Lei Estadual 6.174/1970 (PR)",
  },
  {
    id: "leg-047",
    materia: "leg",
    topico: "Lei Estadual 6.174/1970 (Estatuto dos Servidores do PR)",
    enunciado:
      "Um funcionário estadual, intimado a depor em processo judicial, é questionado sobre fato sigiloso de que teve ciência em razão do cargo. À luz da Lei Estadual nº 6.174/1970, revelar o fato nesse depoimento",
    alternativas: [
      "não viola a proibição de revelar informação sigilosa, pois a lei ressalva o depoimento em processo judicial, policial ou administrativo.",
      "configura falta punível com demissão, pois o sigilo funcional é absoluto.",
      "só é permitido com autorização escrita do chefe da repartição.",
      "configura falta punível com advertência, por violar o dever de discrição.",
      "só é permitido em processo administrativo, sendo vedado em processo judicial.",
    ],
    correta: 0,
    explicacao:
      "Art. 285, XI, da Lei 6.174: é proibido revelar fato ou informação sigilosa de que se tenha ciência em razão do cargo, “salvo quando se tratar de depoimento em processo judicial, policial ou administrativo”. O dever de guardar sigilo sobre assuntos reservados (art. 279, XII) convive com essa ressalva.",
    origem: "banco",
    fonte: "Lei Estadual 6.174/1970 (PR)",
  },
  {
    id: "leg-048",
    materia: "leg",
    topico: "Lei Estadual 6.174/1970 (Estatuto dos Servidores do PR)",
    enunciado:
      "Na Lei Estadual nº 6.174/1970, o pedido de reconsideração e o recurso",
    alternativas: [
      "não têm efeito suspensivo, e o que for provido retroagirá, nos seus efeitos, à data do ato impugnado.",
      "têm efeito suspensivo automático, e o que for provido produz efeitos a partir da decisão.",
      "têm efeito suspensivo apenas quando a pena for de demissão.",
      "não têm efeito suspensivo, e o provimento só produz efeitos da data da decisão em diante.",
      "suspendem a prescrição indefinidamente, até o julgamento final.",
    ],
    correta: 0,
    explicacao:
      "Art. 264 da Lei 6.174: o pedido de reconsideração e o recurso não têm efeito suspensivo, e o que for provido retroage à data do ato impugnado.",
    explicacaoErradas:
      "O pedido de reconsideração e o recurso interrompem a prescrição até duas vezes (art. 267). No Código Disciplinar da PCPR é o contrário: o recurso contra as penas do Conselho Superior tem efeito suspensivo (Lei 21.894, art. 55).",
    origem: "banco",
    fonte: "Lei Estadual 6.174/1970 (PR)",
  },
  {
    id: "leg-049",
    materia: "leg",
    topico: "Lei Estadual 6.174/1970 (Estatuto dos Servidores do PR)",
    enunciado:
      "Segundo o art. 296 da Lei Estadual nº 6.174/1970, os chefes de unidades administrativas em geral são competentes para aplicar as penas de",
    alternativas: [
      "advertência, repreensão, suspensão até 30 dias e multa correspondente.",
      "demissão e cassação de aposentadoria ou disponibilidade.",
      "suspensão de até 90 dias e destituição de função.",
      "qualquer pena, salvo a advertência, que é privativa do Secretário de Estado.",
      "advertência, apenas.",
    ],
    correta: 0,
    explicacao:
      "Os chefes de unidades aplicam advertência, repreensão, suspensão até 30 dias e multa correspondente (III).",
    explicacaoErradas:
      "Art. 296 da Lei 6.174: o Governador aplica qualquer pena e, de forma privativa, a demissão e a cassação de aposentadoria e disponibilidade (I). Os Secretários de Estado aplicam todas, salvo as privativas do Governador (II). A destituição de função cabe a quem fez a designação (§2º).",
    origem: "banco",
    fonte: "Lei Estadual 6.174/1970 (PR)",
  },
  {
    id: "leg-050",
    materia: "leg",
    topico: "Lei Estadual 21.894/2024 (Código Disciplinar da PCPR)",
    enunciado:
      "Um policial civil do Paraná pratica transgressão disciplinar. Quanto à norma que rege a apuração e a punição, é correto afirmar que",
    alternativas: [
      "se aplica o Código Disciplinar da PCPR (Lei Estadual nº 21.894/2024), com Investigação Preliminar e Processo Administrativo Disciplinar próprios, conduzidos pela Corregedoria-Geral.",
      "se aplica exclusivamente o Estatuto dos Servidores (Lei Estadual nº 6.174/1970), que prevalece sobre a lei posterior.",
      "se aplica a Lei Federal nº 8.112/1990, por se tratar de servidor da segurança pública.",
      "se aplica a LC Estadual nº 14/1982, que continua em vigor quanto à disciplina.",
      "a apuração cabe ao Ministério Público, que instaura e preside o processo disciplinar.",
    ],
    correta: 0,
    explicacao:
      "A Lei 21.894/2024 é o Código Disciplinar da PCPR: prevê Investigação Preliminar e PAD (art. 27), com o PAD presidido por delegados da Corregedoria (art. 31). A Lei 23.213/2026 dá à Corregedoria-Geral, com exclusividade, a apuração das transgressões dos policiais civis (art. 21, I).",
    explicacaoErradas:
      "O Estatuto (Lei 6.174) continua valendo no que a legislação da PCPR não regula, mas seus artigos sobre processo administrativo (arts. 306 a 310) foram revogados pela Lei 20.656/2021. A LC 14/1982 foi revogada pela Lei 23.213. A Lei 8.112 é federal.",
    origem: "banco",
    fonte: "Lei Estadual 21.894/2024 (PR)",
  },
  {
    id: "leg-051",
    materia: "leg",
    topico: "LC Estadual 259/2023 (regime jurídico da PCPR)",
    enunciado:
      "Segundo a LC Estadual nº 259/2023, com a redação dada pela LC nº 285/2025, a reprovação do aluno policial civil em qualquer das disciplinas do curso de formação técnico-profissional",
    alternativas: [
      "acarretará sua imediata demissão, pois o curso é requisito fundamental do estágio probatório.",
      "permite nova matrícula no curso seguinte, sem prejuízo do cargo.",
      "acarreta apenas a recondução ao cargo anteriormente ocupado, se houver.",
      "gera exoneração a pedido, com devolução da bolsa-auxílio.",
      "só produz consequência se ocorrer em mais de duas disciplinas.",
    ],
    correta: 0,
    explicacao:
      "Art. 26-A, §1º, da LC 259 (incluído pela LC 285/2025): o curso de formação é requisito fundamental do estágio probatório, e a reprovação em qualquer disciplina acarreta a imediata demissão. Até o fim do processo administrativo, o aluno reprovado fica, de preferência, lotado na ESPC, só com atividades administrativas (§7º). O empossado é matriculado imediatamente no curso, e essa data é a da entrada em exercício (art. 26).",
    origem: "banco",
    fonte: "LC Estadual 259/2023 (PR)",
  },
  {
    id: "leg-052",
    materia: "leg",
    topico: "LC Estadual 259/2023 (regime jurídico da PCPR)",
    enunciado:
      "Nos termos da LC Estadual nº 259/2023, o estágio probatório do policial civil",
    alternativas: [
      "é de três anos de efetivo exercício, com no mínimo três avaliações de desempenho, ao menos uma por ano, e a estabilidade é declarada por ato do Conselho Superior da Polícia Civil.",
      "é de dois anos, com uma única avaliação ao final, e a estabilidade é declarada pelo Delegado-Geral.",
      "é de três anos, com estabilidade automática, dispensada a avaliação especial de desempenho.",
      "é de três anos, com avaliações semestrais, e a estabilidade é declarada pelo Governador.",
      "é dispensado para quem já era servidor estável em outro cargo público.",
    ],
    correta: 0,
    explicacao:
      "Art. 27 da LC 259: estágio de 3 anos de efetivo exercício, com avaliação especial de desempenho obrigatória (CF, art. 41, §4º) e no mínimo três avaliações, pelo menos uma em cada ano (§2º). Art. 28: a estabilidade é declarada por ato do Conselho Superior da Polícia Civil, com ampla defesa e contraditório se a conclusão for pela inaptidão.",
    origem: "banco",
    fonte: "LC Estadual 259/2023 (PR)",
  },
  {
    id: "leg-053",
    materia: "leg",
    topico: "LC Estadual 259/2023 (regime jurídico da PCPR)",
    enunciado:
      "Pela LC Estadual nº 259/2023, a promoção do Agente de Polícia Judiciária ao nível VI exige, como requisito específico,",
    alternativas: [
      "aprovação no Curso de Técnicas de Investigação Policial e Procedimentos de Polícia Judiciária, com nota mínima 7,0.",
      "aprovação no Curso de Aperfeiçoamento Policial em Planejamento e Gestão de Segurança Pública.",
      "conclusão de mestrado ou doutorado em área afim.",
      "apenas a declaração de estabilidade.",
      "aprovação em concurso interno de provas e títulos.",
    ],
    correta: 0,
    explicacao:
      "Art. 49 da LC 259: o nível VI do Agente e do AOP exige o Curso de Técnicas de Investigação Policial e Procedimentos de Polícia Judiciária, com nota mínima 7,0 (IV, a).",
    explicacaoErradas:
      "A estabilidade é requisito só para o nível II (I). A capacitação, após 2 anos de efetivo exercício em cada nível, leva aos níveis III, IV, V, VII, VIII, IX e XI (II). O nível X exige o Curso de Aperfeiçoamento Policial em Planejamento e Gestão de Segurança Pública (IV, b).",
    origem: "banco",
    fonte: "LC Estadual 259/2023 (PR)",
  },
  {
    id: "leg-054",
    materia: "leg",
    topico: "LC Estadual 259/2023 (regime jurídico da PCPR)",
    enunciado:
      "De acordo com a LC Estadual nº 259/2023, na redação dada pela LC nº 289/2025, é prerrogativa do Agente de Polícia Judiciária",
    alternativas: [
      "produzir, nos limites de suas atribuições, com objetividade, técnica e cientificidade, o laudo investigativo e as demais peças procedimentais, encaminhando-os ao Delegado de Polícia para apreciação.",
      "presidir o inquérito policial nas infrações de menor potencial ofensivo.",
      "requisitar perícias e informações a qualquer órgão, por iniciativa própria, sem determinação do Delegado de Polícia.",
      "arquivar o boletim de ocorrência quando entender inexistente o crime.",
      "decidir sobre a lavratura do auto de prisão em flagrante.",
    ],
    correta: 0,
    explicacao:
      "Art. 72, §3º, da LC 259: o Agente produz o laudo investigativo e as demais peças, que vão ao Delegado para apreciação (IV, incluído pela LC 289/2025). Exerce atribuições apuratórias, cartorárias e investigativas sob determinação ou coordenação do Delegado (III).",
    explicacaoErradas:
      "O Agente pode requisitar auxílio de autoridades e elaborar expedientes requisitando informações e diligências, sempre em cumprimento de determinação do Delegado (I e II). A presidência do inquérito é exclusiva do Delegado (art. 5º).",
    origem: "banco",
    fonte: "LC Estadual 259/2023 (PR)",
  },
  {
    id: "leg-055",
    materia: "leg",
    topico: "LC Estadual 259/2023 (regime jurídico da PCPR)",
    enunciado:
      "Um Agente de Polícia Judiciária, que cumpre o interstício e os demais requisitos de promoção, foi punido com repreensão 60 dias antes da abertura do processo de promoção. Segundo a LC Estadual nº 259/2023, ele",
    alternativas: [
      "não pode ser promovido, pois é vedada a promoção de quem registra repreensão nos 90 dias anteriores à abertura do processo.",
      "pode ser promovido, pois apenas a suspensão impede a promoção.",
      "pode ser promovido, pois só a condenação criminal transitada em julgado impede a promoção.",
      "não pode ser promovido pelos dois anos seguintes à repreensão.",
      "perde definitivamente o direito à promoção ao nível seguinte.",
    ],
    correta: 0,
    explicacao:
      "Art. 60 da LC 259: não será promovido quem, na data de abertura do processo, registre repreensão nos 90 dias anteriores (V, redação da LC 289/2025) ou suspensão nos 2 anos anteriores (VI).",
    explicacaoErradas:
      "Também impedem a promoção: 6 ou mais faltas não abonadas em 12 meses (I); responder a procedimento por fato de excepcional gravidade punível com suspensão de 60 dias ou mais ou com demissão (II); e condenação criminal transitada em julgado e não reabilitada (VII).",
    origem: "banco",
    fonte: "LC Estadual 259/2023 (PR)",
  },
  {
    id: "leg-056",
    materia: "leg",
    topico: "LC Estadual 259/2023 (regime jurídico da PCPR)",
    enunciado:
      "Segundo a LC Estadual nº 259/2023, o afastamento remunerado do policial civil para cursos de pós-graduação",
    alternativas: [
      "é concedido ao policial estável, no interesse e a critério da Administração, pelo Conselho Superior da Polícia Civil, por até seis meses, podendo chegar a dois anos em mestrado, doutorado ou pós-doutorado.",
      "é direito subjetivo do policial, inclusive em estágio probatório, por até três anos.",
      "é concedido pelo Delegado-Geral, por até um ano, em qualquer caso.",
      "é sempre concedido pelo Governador, ainda que o curso seja realizado no Brasil.",
      "pode ser deferido quantas vezes forem necessárias para o mesmo nível de curso.",
    ],
    correta: 0,
    explicacao:
      "Art. 70 da LC 259: o afastamento remunerado é para o policial estável, no interesse e a critério da Administração. Quem concede é o Conselho Superior. O limite é de 6 meses, e mestrado, doutorado e pós-doutorado podem chegar a 2 anos (§2º).",
    explicacaoErradas:
      "Se o curso for no exterior, o pedido segue ao Governador (§1º). O afastamento é deferido uma única vez para cada nível de curso (§4º).",
    origem: "banco",
    fonte: "LC Estadual 259/2023 (PR)",
  },
  {
    id: "leg-057",
    materia: "leg",
    topico: "LC Estadual 259/2023 (regime jurídico da PCPR)",
    enunciado:
      "Após participar de operação policial longa e desgastante, um Agente de Polícia Judiciária necessita de descanso. Pela LC Estadual nº 259/2023, a dispensa do serviço, em circunstâncias excepcionais, pode ser concedida",
    alternativas: [
      "pelo Delegado-Geral, até o limite de oito dias corridos, ou pelo chefe da unidade, até três dias corridos, com anotação no assentamento individual.",
      "pelo Delegado-Geral, até quinze dias úteis, ou pelo chefe da unidade, até cinco dias úteis.",
      "somente pelo Conselho Superior da Polícia Civil, até trinta dias.",
      "pelo chefe da unidade, até oito dias corridos, sem necessidade de anotação.",
      "pelo Secretário de Estado da Segurança Pública, até dez dias.",
    ],
    correta: 0,
    explicacao:
      "Art. 69 da LC 259: o Delegado-Geral pode conceder até 8 dias corridos de dispensa após tarefas árduas. O chefe da unidade, em caso excepcional e fundamentado, pode conceder até 3 dias corridos, com anotação no assentamento (§1º). O Conselho Superior regulamenta a dispensa e fixa dispensas obrigatórias após estresse de confronto policial (§2º).",
    origem: "banco",
    fonte: "LC Estadual 259/2023 (PR)",
  },
  {
    id: "leg-058",
    materia: "leg",
    topico: "LC Estadual 259/2023 (regime jurídico da PCPR)",
    enunciado:
      "Um Agente de Polícia Judiciária foi removido para unidade situada em outro município. Segundo a LC Estadual nº 259/2023, ele terá, para entrar em exercício, o prazo de até",
    alternativas: [
      "oito dias úteis da data da remoção.",
      "três dias úteis da data da remoção.",
      "quinze dias corridos da data da remoção.",
      "trinta dias da publicação da remoção.",
      "quarenta e oito horas da data da remoção.",
    ],
    correta: 0,
    explicacao:
      "Art. 26 da LC 259: o policial removido tem até 3 dias úteis para entrar em exercício em unidade da mesma sede e até 8 dias úteis quando for outro município.",
    explicacaoErradas:
      "Ao fim de licença para interesses particulares e na reintegração e na reversão, o prazo é de até 15 dias, contados do término.",
    origem: "banco",
    fonte: "LC Estadual 259/2023 (PR)",
  },
  {
    id: "leg-059",
    materia: "leg",
    topico: "LC Estadual 259/2023 (regime jurídico da PCPR)",
    enunciado:
      "Nomeado para o cargo de Agente de Polícia Judiciária, o candidato não tomou posse no prazo legal nem requereu prorrogação. Pela LC Estadual nº 259/2023,",
    alternativas: [
      "a nomeação será tornada sem efeito, pois a posse deve ocorrer em 30 dias da publicação do ato de provimento, prorrogáveis uma vez, por igual período, a requerimento do interessado.",
      "ele será demitido, após processo disciplinar, por abandono de cargo.",
      "ele será exonerado de ofício após 60 dias de ausência.",
      "a posse poderá ocorrer a qualquer tempo, enquanto válido o concurso.",
      "o prazo de posse é de 15 dias, prorrogável automaticamente por mais 15.",
    ],
    correta: 0,
    explicacao:
      "Art. 25 da LC 259: a posse ocorre em 30 dias da publicação oficial do ato de provimento, prorrogáveis uma vez por igual período, a requerimento do interessado e a juízo da autoridade. Sem posse no prazo, a nomeação é tornada sem efeito (parágrafo único).",
    explicacaoErradas:
      "Não há demissão nem exoneração, porque ainda não há vínculo: a posse é o ato que completa a investidura (art. 22).",
    origem: "banco",
    fonte: "LC Estadual 259/2023 (PR)",
  },
  {
    id: "leg-060",
    materia: "leg",
    topico: "LC Estadual 259/2023 (regime jurídico da PCPR)",
    enunciado:
      "Sobre a ajuda de custo por remoção prevista na LC Estadual nº 259/2023, é correto afirmar que",
    alternativas: [
      "não é paga ao policial recém-admitido, nomeado para ter exercício em local diferente daquele em que reside.",
      "é paga mesmo quando o Conselho Superior autoriza, a pedido do servidor, que ele continue residindo na origem.",
      "pode ser paga a cada remoção a pedido, sem intervalo mínimo.",
      "corresponde a três remunerações mensais do servidor.",
      "dispensa a comprovação da efetiva mudança de residência.",
    ],
    correta: 0,
    explicacao:
      "Art. 66 da LC 259: a ajuda de custo não é paga ao recém-admitido nomeado para local diferente de onde reside.",
    explicacaoErradas:
      "Pelo art. 65, a ajuda de custo vale uma remuneração mensal (§1º). O servidor deve comprovar a mudança em até 90 dias da portaria (§2º). É paga uma vez a cada 2 anos, salvo remoção por interesse da Administração justificada pelo Delegado-Geral (§3º). E não é paga se o servidor obtiver autorização do Conselho Superior para continuar residindo na origem (§4º).",
    origem: "banco",
    fonte: "LC Estadual 259/2023 (PR)",
  },
  {
    id: "leg-061",
    materia: "leg",
    topico: "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR)",
    enunciado:
      "Pela Lei Estadual nº 23.213/2026, integram o nível de Assessoramento da estrutura organizacional básica da PCPR",
    alternativas: [
      "a Chefia de Gabinete, as Assessorias Técnicas, o Departamento de Inteligência Policial e o Departamento de Controle Interno.",
      "a Delegacia-Geral, o Conselho Superior de Polícia e a Corregedoria-Geral de Polícia.",
      "a Escola Superior de Polícia Civil, a Coordenadoria de Operações Integradas e o Departamento de Tecnologia da Informação e Inovação.",
      "o Instituto de Identificação e as Delegacias de Polícia.",
      "o Departamento de Planejamento, Administração e Finanças e o Departamento de Operações Especiais.",
    ],
    correta: 0,
    explicacao:
      "Art. 10, II, da Lei 23.213: o Assessoramento reúne Chefia de Gabinete, Assessorias Técnicas, DIP e DCI, e presta assessoria direta ao Delegado-Geral (§2º). O DIP e o DCI são subordinados diretamente ao Delegado-Geral (arts. 24 e 25).",
    explicacaoErradas:
      "A ESPC, a COI, o DPAF e o DTI ficam no nível Instrumental. O Instituto de Identificação e as unidades de polícia judiciária, como o DOESP, ficam na Execução.",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR)",
  },
  {
    id: "leg-062",
    materia: "leg",
    topico: "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR)",
    enunciado:
      "O Conselho Superior de Polícia (CSP), na Lei Estadual nº 23.213/2026, conta com um representante das carreiras de base, eleito por seus pares. Em questões disciplinares, esse conselheiro",
    alternativas: [
      "participa exclusivamente dos procedimentos que envolvam Agentes de Polícia Judiciária, Papiloscopistas ou Agentes de Operações.",
      "participa de todos os procedimentos disciplinares, inclusive os que envolvam Delegados de Polícia.",
      "não participa de nenhum procedimento disciplinar, pois tem apenas voz consultiva.",
      "preside os procedimentos disciplinares que envolvam Agentes de Polícia Judiciária.",
      "atua apenas nos recursos dirigidos ao Secretário de Estado da Segurança Pública.",
    ],
    correta: 0,
    explicacao:
      "Art. 17 da Lei 23.213: o CSP tem 11 membros e é presidido pelo Delegado-Geral (I). O inciso XI prevê um representante das carreiras de base, com formação jurídica, do nível mais elevado, eleito por seus pares para mandato de 2 anos. Pelo §3º, em questões disciplinares ele participa exclusivamente dos procedimentos que envolvam Agentes, Papiloscopistas ou Agentes de Operações. Os membros dos incisos I a VI são natos (§1º).",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR)",
  },
  {
    id: "leg-063",
    materia: "leg",
    topico: "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR)",
    enunciado:
      "Segundo a Lei Estadual nº 23.213/2026, compete à Corregedoria-Geral de Polícia (CGP)",
    alternativas: [
      "promover, com exclusividade, a apuração das transgressões disciplinares e, preferencialmente, a das infrações penais atribuídas a servidores policiais civis.",
      "promover, com exclusividade, a apuração das infrações penais e disciplinares de policiais civis e militares.",
      "julgar, em última instância, os recursos contra a pena de demissão.",
      "aplicar originariamente a pena de demissão aos policiais civis.",
      "celebrar Termo de Ajustamento de Conduta em qualquer transgressão, inclusive nas puníveis com demissão.",
    ],
    correta: 0,
    explicacao:
      "Art. 21 da Lei 23.213. Cabe à CGP apurar com exclusividade as transgressões disciplinares (I) e, preferencialmente, as infrações penais atribuídas a policiais civis, podendo designar autoridades de fora da Corregedoria (II).",
    explicacaoErradas:
      "A CGP também designa os presidentes dos procedimentos entre os Delegados nela lotados (III) e celebra TAC só nas infrações de menor potencial ofensivo (XVI). A demissão é aplicada pelo Governador (Lei 21.894, art. 25, I).",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR)",
  },
  {
    id: "leg-064",
    materia: "leg",
    topico: "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR)",
    enunciado:
      "Durante inquérito policial regularmente conduzido por uma delegacia territorial, uma unidade especializada manifesta interesse em assumir a investigação. À luz da Lei Estadual nº 23.213/2026,",
    alternativas: [
      "a avocação é vedada, mas a unidade especializada pode atuar em regime de cooperação com o Delegado responsável, se o interesse público o exigir.",
      "a unidade especializada pode avocar livremente o inquérito, por ser mais qualificada.",
      "a avocação depende de autorização judicial e de manifestação do Ministério Público.",
      "a avocação é vedada em qualquer hipótese, inclusive por despacho fundamentado do superior hierárquico.",
      "a decisão cabe ao Corregedor-Geral, por se tratar de matéria disciplinar.",
    ],
    correta: 0,
    explicacao:
      "Art. 51 da Lei 23.213: é vedada a avocação de inquérito, e a unidade especializada pode atuar em regime de cooperação, se o interesse público o exigir. No caso, a investigação corre regularmente, então vale a regra.",
    explicacaoErradas:
      "A exceção do parágrafo único: se houver inobservância dos procedimentos que prejudique a eficácia e a agilidade da investigação, o superior hierárquico pode avocar ou redistribuir o inquérito, por despacho fundamentado.",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR)",
  },
  {
    id: "leg-065",
    materia: "leg",
    topico: "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR)",
    enunciado:
      "Sobre a criação de Delegacias de Polícia na Lei Estadual nº 23.213/2026, é correto afirmar que",
    alternativas: [
      "todo município sede de comarca terá Delegacia de Polícia, independentemente dos requisitos gerais de criação.",
      "a criação exige população mínima de 50 mil habitantes e mil boletins de ocorrência criminais por ano.",
      "a criação depende exclusivamente de decreto do Governador, dispensada a análise do Conselho Superior de Polícia.",
      "nos municípios com menos de 30 mil habitantes que não sejam sede de comarca, é vedada qualquer estrutura de atendimento policial.",
      "a extinção de unidade é ato livre do Delegado-Geral, sem participação do Conselho Superior de Polícia.",
    ],
    correta: 0,
    explicacao:
      "Art. 54 da Lei 23.213. O CSP analisa as condições (§1º) e pode dispensá-las por distância ou dificuldade de acesso (§3º), e todo município sede de comarca terá DP (§2º).",
    explicacaoErradas:
      "Para criar uma unidade, exigem-se distrito-sede do município, população de pelo menos 30 mil habitantes e no mínimo 500 boletins de ocorrência criminais no ano (I). Para instalá-la, prédio e efetivo (II). A extinção é proposta pelo CSP ao Delegado-Geral (§4º). Em município com menos de 30 mil habitantes que não seja sede de comarca, cabe Posto Policial de Atendimento ao Cidadão (PPAC), com autorização prévia do CSP (art. 55).",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR)",
  },
  {
    id: "leg-066",
    materia: "leg",
    topico: "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR)",
    enunciado:
      "Além dos princípios previstos na Lei Federal nº 14.735/2023, a Lei Estadual nº 23.213/2026 estabelece como princípios institucionais da PCPR",
    alternativas: [
      "a eficiência, a cultura de resultados, a excelência no atendimento ao público e o incentivo à pesquisa e inovação.",
      "a hierarquia militar, a disciplina castrense e a subordinação ao Comando-Geral.",
      "a vitaliciedade, a inamovibilidade e a irredutibilidade de subsídio.",
      "a oficialidade, a indisponibilidade da ação penal e a obrigatoriedade da denúncia.",
      "a autonomia financeira, a independência funcional e a eleição direta do Delegado-Geral.",
    ],
    correta: 0,
    explicacao:
      "Art. 4º da Lei 23.213: os princípios institucionais são eficiência, cultura de resultados, excelência no atendimento ao público e incentivo à pesquisa e inovação, além dos da Lei 14.735. Não confunda com as diretrizes do art. 5º: repressão qualificada a crimes graves, atuação cooperativa no Susp, base de dados unificada, publicidade dos atos com ressalva do sigilo e integração interagências.",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR)",
  },
  {
    id: "leg-067",
    materia: "leg",
    topico: "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR)",
    enunciado:
      "Segundo a Lei Estadual nº 23.213/2026, compete ao Departamento de Operações Especiais (DOESP)",
    alternativas: [
      "empregar recursos e técnicas especiais em situações críticas, operações de alto risco e resgate de reféns, oferecer apoio tático-operacional às demais unidades e investigar sequestros e extorsões mediante sequestro.",
      "investigar, com exclusividade, os crimes cibernéticos praticados no Estado.",
      "promover a apuração das transgressões disciplinares de policiais civis.",
      "realizar perícias criminais em locais de crime.",
      "organizar os serviços de identificação civil e criminal no Estado.",
    ],
    correta: 0,
    explicacao:
      "Art. 40 da Lei 23.213: o DOESP é dirigido por Delegado com curso de Operações Táticas Especiais, designado pelo Delegado-Geral, e cuida de situações críticas e resgate de reféns (I), apoio tático-operacional (II) e investigação de sequestros e extorsões mediante sequestro (III).",
    explicacaoErradas:
      "Os crimes cibernéticos ficam com o DRCC (art. 41), a disciplina com a Corregedoria (art. 21) e a identificação com o Instituto de Identificação. A perícia criminal é da Polícia Científica, fora da PCPR.",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR)",
  },
  {
    id: "leg-068",
    materia: "leg",
    topico: "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR)",
    enunciado:
      "Nos termos da Lei Estadual nº 23.213/2026, a investigação policial",
    alternativas: [
      "tem caráter técnico, científico e jurídico, começa com o conhecimento da notícia da infração penal e termina com o relatório final apresentado ao Poder Judiciário.",
      "tem caráter exclusivamente administrativo e começa com a instauração formal do inquérito.",
      "termina com o oferecimento da denúncia pelo Ministério Público.",
      "deve sempre seguir a ordem cronológica de registro das ocorrências, sem prioridades.",
      "é dirigida pelo Agente de Polícia Judiciária mais antigo da unidade.",
    ],
    correta: 0,
    explicacao:
      "Art. 7º da Lei 23.213: a investigação tem caráter técnico, científico e jurídico, vai da notícia da infração penal ao relatório final apresentado ao Judiciário e inclui a formalização das provas, a pesquisa de autoria e materialidade, o gerenciamento de crises e o encaminhamento à rede de proteção.",
    explicacaoErradas:
      "Quando não for possível investigar várias infrações ao mesmo tempo, o Delegado deve dar prioridade às de maior potencial ofensivo (parágrafo único).",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR)",
  },
  {
    id: "leg-069",
    materia: "leg",
    topico: "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR)",
    enunciado:
      "Quanto aos presos levados às unidades policiais, a Lei Estadual nº 23.213/2026 atribui à PCPR a competência de",
    alternativas: [
      "cadastrar os custodiados recolhidos durante o tempo indispensável à lavratura do flagrante, que devem ser obrigatoriamente encaminhados ao sistema prisional logo após.",
      "custodiar presos provisórios nas delegacias até o julgamento definitivo.",
      "manter adolescentes infratores em celas das delegacias por até 45 dias.",
      "custodiar presos condenados quando faltar vaga no sistema prisional, por prazo indeterminado.",
      "administrar os estabelecimentos penais do Estado.",
    ],
    correta: 0,
    explicacao:
      "Art. 6º, V, da Lei 23.213: a PCPR cadastra os custodiados recolhidos durante o tempo indispensável à lavratura do flagrante, com encaminhamento obrigatório ao sistema prisional logo após o ato.",
    explicacaoErradas:
      "A regra acompanha a Lei 14.735, que veda a custódia de preso e de adolescente infrator nas dependências da polícia civil, salvo interesse fundamentado da investigação (art. 40).",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR)",
  },
  {
    id: "leg-070",
    materia: "leg",
    topico: "Lei 12.037/2009 (Identificação Criminal)",
    enunciado:
      "Com a redação dada pela Lei nº 15.295/2025, o art. 9º-A da Lei de Execução Penal determina que será submetido obrigatoriamente à identificação do perfil genético, mediante extração de DNA, por ocasião do ingresso no estabelecimento prisional, o",
    alternativas: [
      "condenado à pena de reclusão em regime inicial fechado.",
      "condenado por crime hediondo ou por crime doloso praticado com violência de natureza grave contra pessoa, exclusivamente.",
      "preso provisório, qualquer que seja o crime, logo após a audiência de custódia.",
      "condenado a qualquer pena privativa de liberdade, inclusive detenção em regime aberto.",
      "condenado que consentir com a coleta, já que a extração de DNA não pode ser imposta.",
    ],
    correta: 0,
    explicacao:
      "Art. 9º-A da LEP, na redação da Lei 15.295/2025, em vigor desde janeiro de 2026: o critério passou a ser a pena e o regime, e não mais o tipo de crime. Todo condenado à reclusão em regime inicial fechado tem o DNA colhido ao ingressar no estabelecimento prisional, por técnica adequada e indolor.",
    explicacaoErradas:
      "A redação de 2012 falava em crimes hediondos e dolosos com violência grave, e a de 2019 em crimes violentos, contra a vida e sexuais. Quem não foi identificado no ingresso deve sê-lo durante o cumprimento da pena (§4º), e a recusa do condenado constitui falta grave (§8º).",
    origem: "banco",
    fonte: "Lei 7.210/1984 (LEP), art. 9º-A, com redação da Lei 15.295/2025",
  },
  {
    id: "leg-071",
    materia: "leg",
    topico: "Lei 12.037/2009 (Identificação Criminal)",
    enunciado:
      "Segundo a Lei nº 12.037/2009, a menção à identificação criminal do indiciado em atestados de antecedentes",
    alternativas: [
      "é vedada antes do trânsito em julgado da sentença condenatória, assim como em informações não destinadas ao juízo criminal.",
      "é obrigatória desde o indiciamento, para alertar futuros empregadores.",
      "é permitida após o recebimento da denúncia, ainda que não haja trânsito em julgado.",
      "depende apenas de autorização do Delegado de Polícia que presidiu o inquérito.",
      "é livre, porque a identificação criminal é ato público e não sigiloso.",
    ],
    correta: 0,
    explicacao:
      "Art. 6º da Lei 12.037: é vedado mencionar a identificação criminal do indiciado em atestados de antecedentes ou em informações não destinadas ao juízo criminal, antes do trânsito em julgado da sentença condenatória. A regra protege a presunção de inocência.",
    origem: "banco",
    fonte: "Lei 12.037/2009",
  },
  {
    id: "leg-072",
    materia: "leg",
    topico: "Lei 12.037/2009 (Identificação Criminal)",
    enunciado:
      "Nos termos da Lei nº 12.037/2009, com a redação dada pela Lei nº 13.964/2019 (Pacote Anticrime), a exclusão dos perfis genéticos dos bancos de dados ocorrerá",
    alternativas: [
      "no caso de absolvição do acusado ou, no caso de condenação, mediante requerimento, após decorridos 20 anos do cumprimento da pena.",
      "no término do prazo estabelecido em lei para a prescrição do delito, em qualquer caso.",
      "automaticamente, 5 anos após o arquivamento do inquérito ou a extinção da pena.",
      "somente por decisão do Superior Tribunal de Justiça, a pedido da defesa.",
      "em hipótese alguma, porque o perfil genético incluído no banco é permanente.",
    ],
    correta: 0,
    explicacao:
      "Art. 7º-A da Lei 12.037, na redação da Lei 13.964/2019: o perfil é excluído (I) na absolvição do acusado; ou (II) na condenação, mediante requerimento, depois de 20 anos do cumprimento da pena.",
    explicacaoErradas:
      "A redação original, de 2012, ligava a exclusão ao prazo de prescrição do delito, e é justamente essa a pegadinha mais comum.",
    origem: "banco",
    fonte: "Lei 12.037/2009",
  },
  {
    id: "leg-073",
    materia: "leg",
    topico: "Lei 12.037/2009 (Identificação Criminal)",
    enunciado:
      "Um indiciado foi identificado criminalmente durante o inquérito policial, mas o Ministério Público não ofereceu denúncia e o inquérito foi definitivamente arquivado. Pela Lei nº 12.037/2009, ele",
    alternativas: [
      "pode requerer a retirada da identificação fotográfica do inquérito, desde que apresente provas de sua identificação civil.",
      "tem a identificação fotográfica retirada de ofício, sem necessidade de requerimento.",
      "não pode pedir a retirada, porque a identificação criminal é definitiva.",
      "só pode pedir a retirada depois de 5 anos do arquivamento.",
      "precisa ajuizar ação de indenização para obter a destruição das impressões digitais.",
    ],
    correta: 0,
    explicacao:
      "Art. 7º da Lei 12.037: no caso de não oferecimento da denúncia, de sua rejeição ou de absolvição, é facultado ao indiciado ou ao réu, após o arquivamento definitivo do inquérito ou o trânsito em julgado da sentença, requerer a retirada da identificação fotográfica do inquérito ou processo, desde que apresente provas de sua identificação civil.",
    explicacaoErradas:
      "É uma faculdade, que depende de requerimento.",
    origem: "banco",
    fonte: "Lei 12.037/2009",
  },
  {
    id: "leg-074",
    materia: "leg",
    topico: "Lei 12.037/2009 (Identificação Criminal)",
    enunciado:
      "Para os fins da Lei nº 12.037/2009, a identificação civil pode ser atestada por",
    alternativas: [
      "carteira de identidade, carteira de trabalho, carteira profissional, passaporte, carteira de identificação funcional ou outro documento público que permita a identificação, equiparando-se a eles os documentos de identificação militares.",
      "carteira de identidade, exclusivamente, por ser o único documento com a impressão digital do titular.",
      "qualquer documento, inclusive particular, como crachá de empresa ou carteira de estudante.",
      "carteira de identidade ou passaporte, vedada a equiparação dos documentos militares aos civis.",
      "certidão de nascimento acompanhada de declaração de duas testemunhas.",
    ],
    correta: 0,
    explicacao:
      "Art. 2º da Lei 12.037: a identificação civil é atestada por carteira de identidade, carteira de trabalho, carteira profissional, passaporte, carteira de identificação funcional ou outro documento público que permita a identificação do indiciado. O parágrafo único equipara aos documentos civis os documentos de identificação militares.",
    origem: "banco",
    fonte: "Lei 12.037/2009",
  },
  {
    id: "leg-075",
    materia: "leg",
    topico: "Lei 12.037/2009 (Identificação Criminal)",
    enunciado:
      "A Lei nº 15.295/2025 incluiu o inciso VII no art. 3º da Lei nº 12.037/2009, que autoriza a identificação criminal do civilmente identificado quando houver recebimento da denúncia pelo juiz por determinados crimes. Está entre esses crimes o",
    alternativas: [
      "crime previsto no art. 2º da Lei nº 12.850/2013 (organização criminosa), quando a organização utilizar ou tiver à sua disposição armas de fogo.",
      "crime de furto simples, desde que o réu seja reincidente.",
      "crime de menor potencial ofensivo, quando o autor do fato não comparecer ao Juizado.",
      "crime contra a honra praticado pela internet.",
      "crime de tráfico de drogas privilegiado, qualquer que seja a quantidade apreendida.",
    ],
    correta: 0,
    explicacao:
      "Art. 3º, VII, da Lei 12.037 (incluído pela Lei 15.295/2025): cabe a identificação criminal quando houver recebimento da denúncia por (a) crime praticado com grave violência contra a pessoa; (b) crime contra a liberdade sexual ou crime sexual contra vulnerável; (c) crimes contra criança ou adolescente dos arts. 240, 241, 241-A, 241-B e 241-C do ECA; e (d) crime do art. 2º da Lei 12.850 quando a organização criminosa utilizar ou tiver à sua disposição armas de fogo. Nesses casos, a identificação inclui o perfil genético (art. 5º, §1º).",
    origem: "banco",
    fonte: "Lei 12.037/2009, art. 3º, VII, incluído pela Lei 15.295/2025",
  },
  {
    id: "leg-076",
    materia: "leg",
    topico: "Lei 13.869/2019 (Abuso de Autoridade)",
    enunciado:
      "Nos termos da Lei nº 13.869/2019, as condutas nela descritas constituem crime de abuso de autoridade quando praticadas pelo agente",
    alternativas: [
      "com a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal.",
      "com dolo genérico ou culpa grave, bastando a imprudência no exercício da função.",
      "em qualquer hipótese, desde que cause prejuízo material comprovado à vítima.",
      "apenas quando houver obtenção de vantagem econômica para si ou para outrem.",
      "com culpa, nas modalidades de negligência, imprudência ou imperícia.",
    ],
    correta: 0,
    explicacao:
      "Art. 1º, §1º, da Lei 13.869: as condutas só são crime quando praticadas com a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal. É o chamado dolo específico. O §2º completa a ideia: a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso.",
    explicacaoErradas:
      "Não há modalidade culposa.",
    origem: "banco",
    fonte: "Lei 13.869/2019",
  },
  {
    id: "leg-077",
    materia: "leg",
    topico: "Lei 13.869/2019 (Abuso de Autoridade)",
    enunciado:
      "Quanto à ação penal nos crimes de abuso de autoridade, a Lei nº 13.869/2019 estabelece que eles são de ação penal",
    alternativas: [
      "pública incondicionada, admitida a ação privada subsidiária no prazo de 6 meses, contado do fim do prazo para o oferecimento da denúncia.",
      "pública condicionada à representação do ofendido, no prazo decadencial de 6 meses.",
      "privada, cabendo ao ofendido oferecer queixa-crime em até 30 dias.",
      "pública condicionada à requisição do Ministro da Justiça.",
      "pública incondicionada, vedada em qualquer caso a ação privada subsidiária.",
    ],
    correta: 0,
    explicacao:
      "Art. 3º da Lei 13.869: os crimes são de ação penal pública incondicionada. Se o Ministério Público não agir no prazo legal, cabe ação privada subsidiária da pública (§1º), exercida em 6 meses contados do fim do prazo para a denúncia (§2º). O MP pode aditar a queixa, repudiá-la e oferecer denúncia substitutiva.",
    origem: "banco",
    fonte: "Lei 13.869/2019",
  },
  {
    id: "leg-078",
    materia: "leg",
    topico: "Lei 13.869/2019 (Abuso de Autoridade)",
    enunciado:
      "Um policial civil foi condenado, pela primeira vez, por crime de abuso de autoridade. Quanto aos efeitos da condenação de inabilitação para o exercício de cargo e de perda do cargo, a Lei nº 13.869/2019 determina que",
    alternativas: [
      "dependem de reincidência em crime de abuso de autoridade, não são automáticos e devem ser declarados motivadamente na sentença.",
      "são automáticos e decorrem de qualquer condenação, independentemente de fundamentação.",
      "dependem apenas de a pena aplicada ser superior a 4 anos.",
      "só podem ser aplicados em processo administrativo, nunca na sentença penal.",
      "a inabilitação é permanente, e a perda do cargo depende de decisão do Governador.",
    ],
    correta: 0,
    explicacao:
      "Art. 4º da Lei 13.869: são efeitos da condenação (I) tornar certa a obrigação de indenizar; (II) a inabilitação para cargo, mandato ou função pública por 1 a 5 anos; e (III) a perda do cargo, do mandato ou da função. Pelo parágrafo único, os efeitos dos incisos II e III dependem de reincidência em crime de abuso de autoridade, não são automáticos e devem ser declarados motivadamente na sentença. Na primeira condenação, portanto, não há perda do cargo por esse fundamento.",
    origem: "banco",
    fonte: "Lei 13.869/2019",
  },
  {
    id: "leg-079",
    materia: "leg",
    topico: "Lei 13.869/2019 (Abuso de Autoridade)",
    enunciado:
      "Entre as penas restritivas de direitos substitutivas das privativas de liberdade previstas na Lei nº 13.869/2019, está a",
    alternativas: [
      "suspensão do exercício do cargo, da função ou do mandato, de 1 a 6 meses, com perda dos vencimentos e das vantagens.",
      "suspensão do cargo por até 2 anos, mantida a remuneração integral.",
      "proibição definitiva de exercer qualquer função pública.",
      "cassação dos direitos políticos por 8 anos.",
      "transferência compulsória para outro município, sem perda de vencimentos.",
    ],
    correta: 0,
    explicacao:
      "Art. 5º da Lei 13.869: as penas restritivas de direitos são (I) prestação de serviços à comunidade ou a entidades públicas e (II) suspensão do exercício do cargo, da função ou do mandato, de 1 a 6 meses, com perda dos vencimentos e das vantagens. O parágrafo único permite aplicá-las de forma autônoma ou cumulativa.",
    origem: "banco",
    fonte: "Lei 13.869/2019",
  },
  {
    id: "leg-080",
    materia: "leg",
    topico: "Lei 13.869/2019 (Abuso de Autoridade)",
    enunciado:
      "Uma equipe policial, com mandado de busca e apreensão domiciliar válido, ingressa na residência do investigado às 22h, sem situação de flagrante, socorro ou desastre. Pela Lei nº 13.869/2019, a conduta",
    alternativas: [
      "configura crime de abuso de autoridade, porque é crime cumprir mandado de busca domiciliar após as 21h ou antes das 5h.",
      "é lícita, porque o mandado judicial autoriza o cumprimento a qualquer hora.",
      "só seria crime se o ingresso ocorresse depois da meia-noite.",
      "é mera falta disciplinar, sem repercussão penal.",
      "é lícita se o Delegado de Polícia autorizar por escrito a diligência noturna.",
    ],
    correta: 0,
    explicacao:
      "Art. 22, §1º, III, da Lei 13.869: incorre na pena de violação de domicílio quem cumpre mandado de busca e apreensão domiciliar após as 21h ou antes das 5h. Pelo §2º, não há crime se o ingresso for para prestar socorro ou quando houver fundados indícios de flagrante delito ou de desastre. A pena é de detenção de 1 a 4 anos e multa.",
    origem: "banco",
    fonte: "Lei 13.869/2019",
  },
  {
    id: "leg-081",
    materia: "leg",
    topico: "Lei 13.869/2019 (Abuso de Autoridade)",
    enunciado:
      "A Lei nº 13.869/2019 tipifica como abuso de autoridade submeter o preso a interrogatório policial durante o período de repouso noturno. Não há crime, porém,",
    alternativas: [
      "se o preso foi capturado em flagrante delito ou se ele, devidamente assistido, consentir em prestar declarações.",
      "se o interrogatório for gravado em vídeo, ainda que sem o consentimento do preso.",
      "se o Delegado de Polícia justificar a urgência no próprio termo de interrogatório.",
      "se o preso for reincidente ou responder por crime hediondo.",
      "se o interrogatório durar menos de uma hora.",
    ],
    correta: 0,
    explicacao:
      "Art. 18 da Lei 13.869: é crime submeter o preso a interrogatório policial durante o repouso noturno, salvo se capturado em flagrante delito ou se ele, devidamente assistido, consentir em prestar declarações. A pena é de detenção de 6 meses a 2 anos e multa.",
    origem: "banco",
    fonte: "Lei 13.869/2019",
  },
  {
    id: "leg-082",
    materia: "leg",
    topico: "Lei 13.869/2019 (Abuso de Autoridade)",
    enunciado:
      "Durante o interrogatório em delegacia, o preso declara que vai exercer o direito ao silêncio. Mesmo assim, o responsável pelo ato continua a fazer perguntas. Pela Lei nº 13.869/2019, essa conduta",
    alternativas: [
      "configura crime de abuso de autoridade, assim como prosseguir com o interrogatório de quem optou por ser assistido por advogado, sem a presença dele.",
      "é lícita, porque o silêncio só pode ser exercido em juízo.",
      "é lícita, desde que as perguntas sejam registradas no termo.",
      "só é crime se o preso for menor de 21 anos.",
      "configura apenas nulidade processual, sem repercussão penal.",
    ],
    correta: 0,
    explicacao:
      "Art. 15, parágrafo único, da Lei 13.869: incorre na pena do caput quem prossegue com o interrogatório (I) de pessoa que tenha decidido exercer o direito ao silêncio; ou (II) de pessoa que tenha optado por ser assistida por advogado ou defensor público, sem a presença do seu patrono. O caput pune constranger a depor, sob ameaça de prisão, quem deve guardar segredo em razão de função, ministério, ofício ou profissão.",
    origem: "banco",
    fonte: "Lei 13.869/2019",
  },
  {
    id: "leg-083",
    materia: "leg",
    topico: "Lei 13.869/2019 (Abuso de Autoridade)",
    enunciado:
      "O crime de violência institucional (art. 15-A da Lei nº 13.869/2019, incluído pela Lei nº 14.321/2022) consiste em submeter a vítima de infração penal ou a testemunha de crimes violentos a procedimentos desnecessários, repetitivos ou invasivos que a levem a reviver, sem estrita necessidade, a situação de violência. Sobre esse crime, é correto afirmar que",
    alternativas: [
      "a pena é aumentada de 2/3 se o agente público permitir que terceiro intimide a vítima de crimes violentos, e aplicada em dobro se o próprio agente a intimidar.",
      "a pena é aplicada em dobro se o agente permitir que terceiro intimide a vítima, e triplicada se o próprio agente a intimidar.",
      "só pode ser praticado por magistrado, durante audiência judicial.",
      "exige que a vítima seja criança ou adolescente.",
      "é punido apenas com multa, por ser infração de menor potencial ofensivo sem pena de prisão.",
    ],
    correta: 0,
    explicacao:
      "Art. 15-A da Lei 13.869 (incluído pela Lei 14.321/2022): pelo §1º, se o agente público permitir que terceiro intimide a vítima de crimes violentos, gerando revitimização, a pena é aumentada de 2/3. Pelo §2º, se o próprio agente intimidar a vítima, a pena é aplicada em dobro.",
    explicacaoErradas:
      "A pena é de detenção de 3 meses a 1 ano e multa. Qualquer agente público pode praticá-lo, inclusive na fase policial.",
    origem: "banco",
    fonte: "Lei 13.869/2019",
  },
  {
    id: "leg-084",
    materia: "leg",
    topico: "Lei 13.869/2019 (Abuso de Autoridade)",
    enunciado:
      "O advogado de um investigado pede acesso aos autos do inquérito policial. A Lei nº 13.869/2019 tipifica como crime negar ao interessado, ao seu defensor ou advogado acesso aos autos, ou impedir a obtenção de cópias,",
    alternativas: [
      "ressalvado o acesso a peças relativas a diligências em curso, ou que indiquem a realização de diligências futuras, cujo sigilo seja imprescindível.",
      "sem nenhuma ressalva, de modo que todas as peças devem ser franqueadas, inclusive as de diligências em andamento.",
      "apenas depois de concluído o inquérito e oferecida a denúncia.",
      "somente quando o advogado apresentar autorização judicial expressa.",
      "apenas no procedimento administrativo, não se aplicando ao inquérito policial.",
    ],
    correta: 0,
    explicacao:
      "Art. 32 da Lei 13.869: é crime negar ao interessado, ao seu defensor ou advogado acesso aos autos de investigação preliminar, termo circunstanciado, inquérito ou outro procedimento investigatório, assim como impedir a obtenção de cópias, ressalvado o acesso a peças relativas a diligências em curso, ou que indiquem diligências futuras, cujo sigilo seja imprescindível. A regra conversa com a Súmula Vinculante 14 do STF. A pena é de detenção de 6 meses a 2 anos e multa.",
    origem: "banco",
    fonte: "Lei 13.869/2019",
  },
  {
    id: "leg-085",
    materia: "leg",
    topico: "Lei 13.869/2019 (Abuso de Autoridade)",
    enunciado:
      "Logo após cumprir um mandado de prisão, o responsável pelas investigações publica em rede social que o preso “é o autor do homicídio”, antes de concluídas as apurações e de formalizada a acusação. Pela Lei nº 13.869/2019, a conduta",
    alternativas: [
      "configura crime de abuso de autoridade, consistente em antecipar, por meio de comunicação, inclusive rede social, atribuição de culpa.",
      "é lícita, em razão do princípio da publicidade dos atos administrativos.",
      "só seria crime se a publicação mostrasse o rosto do preso.",
      "configura apenas infração ética, sem tipificação penal.",
      "é lícita se o preso confessou informalmente no momento da prisão.",
    ],
    correta: 0,
    explicacao:
      "Art. 38 da Lei 13.869: é crime o responsável pelas investigações antecipar, por meio de comunicação, inclusive rede social, atribuição de culpa, antes de concluídas as apurações e formalizada a acusação. A pena é de detenção de 6 meses a 2 anos e multa.",
    explicacaoErradas:
      "Expor o preso à curiosidade pública mediante violência ou grave ameaça é outro crime (art. 13, I).",
    origem: "banco",
    fonte: "Lei 13.869/2019",
  },
  {
    id: "leg-086",
    materia: "leg",
    topico: "Lei 13.869/2019 (Abuso de Autoridade)",
    enunciado:
      "Segundo a Lei nº 13.869/2019, incorre na mesma pena de quem deixa de comunicar a prisão em flagrante à autoridade judiciária no prazo legal aquele que",
    alternativas: [
      "deixa de entregar ao preso, no prazo de 24 horas, a nota de culpa assinada pela autoridade, com o motivo da prisão e os nomes do condutor e das testemunhas.",
      "deixa de entregar ao preso a nota de culpa no prazo de 72 horas.",
      "deixa de comunicar a prisão à família apenas quando o preso for menor de idade.",
      "deixa de lavrar o boletim de ocorrência no mesmo dia da prisão.",
      "deixa de apresentar o preso à imprensa para identificação.",
    ],
    correta: 0,
    explicacao:
      "Art. 12 da Lei 13.869: é crime deixar injustificadamente de comunicar prisão em flagrante à autoridade judiciária no prazo legal. Pelo parágrafo único, incorre na mesma pena quem deixa de comunicar imediatamente a prisão temporária ou preventiva ao juiz que a decretou; deixa de comunicar imediatamente a prisão e o local onde o preso está à família ou à pessoa por ele indicada; ou deixa de entregar ao preso, em 24 horas, a nota de culpa. A pena é de detenção de 6 meses a 2 anos e multa.",
    origem: "banco",
    fonte: "Lei 13.869/2019",
  },
  {
    id: "leg-087",
    materia: "leg",
    topico: "Lei 13.869/2019 (Abuso de Autoridade)",
    enunciado:
      "A Lei nº 13.869/2019 considera crime requisitar a instauração ou instaurar procedimento investigatório contra alguém à falta de qualquer indício da prática de crime, de ilícito funcional ou de infração administrativa. Segundo a lei, não há crime quando se tratar de",
    alternativas: [
      "sindicância ou investigação preliminar sumária, devidamente justificada.",
      "inquérito policial instaurado por requisição do Ministério Público, em qualquer caso.",
      "procedimento instaurado com base em denúncia anônima, sem nenhuma diligência prévia.",
      "procedimento contra servidor em estágio probatório.",
      "investigação instaurada por Delegado de Polícia com mais de 10 anos de carreira.",
    ],
    correta: 0,
    explicacao:
      "Art. 27 da Lei 13.869: é crime requisitar instauração ou instaurar procedimento investigatório de infração penal ou administrativa à falta de qualquer indício. O parágrafo único afasta o crime quando se tratar de sindicância ou investigação preliminar sumária, devidamente justificada. A pena é de detenção de 6 meses a 2 anos e multa.",
    origem: "banco",
    fonte: "Lei 13.869/2019",
  },
  {
    id: "leg-088",
    materia: "leg",
    topico: "Lei 13.869/2019 (Abuso de Autoridade)",
    enunciado:
      "Um policial civil foi absolvido em ação penal por abuso de autoridade, e a sentença reconheceu que ele agiu em estrito cumprimento de dever legal. Pela Lei nº 13.869/2019, essa sentença",
    alternativas: [
      "faz coisa julgada no âmbito cível e no administrativo-disciplinar.",
      "não produz nenhum efeito fora do processo penal, porque as esferas são totalmente independentes.",
      "só faz coisa julgada no cível, podendo a Corregedoria punir o policial pelo mesmo fato com base na excludente.",
      "vincula apenas o processo administrativo, e não a ação de indenização.",
      "precisa ser homologada pelo Conselho Superior da Polícia Civil para produzir efeitos.",
    ],
    correta: 0,
    explicacao:
      "Art. 8º da Lei 13.869: faz coisa julgada no âmbito cível e no administrativo-disciplinar a sentença penal que reconhecer que o ato foi praticado em estado de necessidade, legítima defesa, estrito cumprimento de dever legal ou exercício regular de direito.",
    explicacaoErradas:
      "A regra geral é a independência das esferas (arts. 6º e 7º), mas não se pode mais discutir a existência ou a autoria do fato quando já decididas no juízo criminal.",
    origem: "banco",
    fonte: "Lei 13.869/2019",
  },
  {
    id: "leg-089",
    materia: "leg",
    topico: "Lei 13.869/2019 (Abuso de Autoridade)",
    enunciado:
      "Para os efeitos da Lei nº 13.869/2019, é agente público, podendo ser sujeito ativo do crime de abuso de autoridade,",
    alternativas: [
      "todo aquele que exerce, ainda que transitoriamente ou sem remuneração, por qualquer forma de investidura ou vínculo, mandato, cargo, emprego ou função em órgão ou entidade abrangidos pela lei.",
      "apenas o servidor público efetivo e estável, excluídos os ocupantes de cargo em comissão.",
      "apenas as autoridades policiais e judiciárias, excluídos os membros do Legislativo.",
      "apenas quem recebe remuneração dos cofres públicos há mais de 1 ano.",
      "apenas o servidor federal, cabendo aos Estados legislar sobre os seus servidores.",
    ],
    correta: 0,
    explicacao:
      "Art. 2º, parágrafo único, da Lei 13.869: agente público é todo aquele que exerce, ainda que transitoriamente ou sem remuneração, mandato, cargo, emprego ou função.",
    explicacaoErradas:
      "É sujeito ativo qualquer agente público, servidor ou não, da administração direta, indireta ou fundacional de qualquer dos Poderes da União, dos Estados, do Distrito Federal, dos Municípios e de Território, incluindo servidores e militares, membros do Legislativo, do Executivo, do Judiciário, do Ministério Público e dos tribunais ou conselhos de contas.",
    origem: "banco",
    fonte: "Lei 13.869/2019",
  },
  {
    id: "leg-090",
    materia: "leg",
    topico: "Constituição do Estado do Paraná",
    enunciado:
      "Com as Emendas Constitucionais nº 50/2021 e nº 53/2022, o art. 46 da Constituição do Estado do Paraná passou a prever que a segurança pública é exercida pelos seguintes órgãos:",
    alternativas: [
      "Polícia Civil, Polícia Militar, Polícia Penal e Corpo de Bombeiros Militar.",
      "Polícia Civil, Polícia Militar, Polícia Científica e Guarda Municipal.",
      "Polícia Civil e Polícia Militar, apenas, com o Corpo de Bombeiros integrando a Polícia Militar.",
      "Polícia Civil, Polícia Militar, Polícia Rodoviária Estadual e Polícia Científica.",
      "Polícia Civil, Polícia Penal e Guarda Municipal, cabendo à Polícia Militar apenas a defesa civil.",
    ],
    correta: 0,
    explicacao:
      "Art. 46 da CE-PR: a segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida pela Polícia Civil (I), pela Polícia Militar (II), pela Polícia Penal (IV, incluída pela EC 50/2021) e pelo Corpo de Bombeiros Militar (V, incluído pela EC 53/2022).",
    explicacaoErradas:
      "O inciso III, Polícia Científica, veio da EC 10/2001, declarada inconstitucional pelo STF na ADI 2.616, e na ADI 2.575 o STF afastou o caráter de órgão de segurança pública da Polícia Científica. Guarda Municipal e polícia rodoviária estadual não constam do rol.",
    origem: "banco",
    fonte: "CE-PR, art. 46, com as EC 50/2021 e 53/2022",
  },
  {
    id: "leg-091",
    materia: "leg",
    topico: "Constituição do Estado do Paraná",
    enunciado:
      "Nos termos do art. 47 da Constituição do Estado do Paraná, a Polícia Civil é dirigida por",
    alternativas: [
      "delegado de polícia, preferencialmente da classe mais elevada da carreira, e é instituição permanente e essencial à função da segurança pública.",
      "delegado de polícia obrigatoriamente da classe mais elevada, escolhido em lista tríplice formada pelo Conselho da Polícia Civil.",
      "Secretário de Estado da Segurança Pública, que deve ser delegado de polícia aposentado.",
      "qualquer policial civil estável, eleito pelos integrantes das carreiras policiais civis.",
      "membro do Ministério Público, que exerce o controle externo da atividade policial.",
    ],
    correta: 0,
    explicacao:
      "Art. 47, caput, da CE-PR: a Polícia Civil, dirigida por delegado de polícia, preferencialmente da classe mais elevada da carreira, é instituição permanente e essencial à função da segurança pública, com incumbência de exercer as funções de polícia judiciária e as apurações das infrações penais, exceto as militares.",
    explicacaoErradas:
      "Atenção à palavra “preferencialmente”: a Constituição não exige a classe mais elevada nem prevê lista tríplice.",
    origem: "banco",
    fonte: "CE-PR, art. 47, caput",
  },
  {
    id: "leg-092",
    materia: "leg",
    topico: "Constituição do Estado do Paraná",
    enunciado:
      "Segundo a Constituição do Estado do Paraná, o Conselho da Polícia Civil é órgão",
    alternativas: [
      "consultivo, normativo e deliberativo, para fins de controle do ingresso, ascensão funcional, hierarquia e regime disciplinar das carreiras policiais civis.",
      "apenas consultivo, sem poder de deliberação, vinculado ao Ministério Público.",
      "de controle externo da atividade policial, composto exclusivamente por representantes da sociedade civil.",
      "jurisdicional, competente para julgar os crimes praticados por policiais civis em serviço.",
      "deliberativo apenas sobre o orçamento da Polícia Civil, sem atribuições sobre ingresso ou disciplina.",
    ],
    correta: 0,
    explicacao:
      "Art. 47, §2º, da CE-PR: o Conselho da Polícia Civil é órgão consultivo, normativo e deliberativo, para fins de controle do ingresso, ascensão funcional, hierarquia e regime disciplinar das carreiras policiais civis.",
    explicacaoErradas:
      "Os três adjetivos e as quatro finalidades costumam ser trocados nas alternativas. O controle externo da atividade policial é do Ministério Público (art. 129, VII, da CF), e julgar crimes é função do Judiciário.",
    origem: "banco",
    fonte: "CE-PR, art. 47, §2º",
  },
  {
    id: "leg-093",
    materia: "leg",
    topico: "Constituição do Estado do Paraná",
    enunciado:
      "A Constituição do Estado do Paraná, no art. 47, estabelece que",
    alternativas: [
      "a função policial civil se fundamenta na hierarquia e na disciplina, e o cargo de Delegado de Polícia integra, para todos os fins, as carreiras jurídicas do Estado.",
      "a função policial civil se fundamenta na hierarquia e na disciplina militares, e o Delegado de Polícia integra a carreira do Ministério Público.",
      "os cargos policiais civis podem ser providos por concurso público ou por indicação do Conselho da Polícia Civil.",
      "o Delegado de Polícia tem as garantias de vitaliciedade e inamovibilidade, como os magistrados.",
      "a função policial civil não se submete a hierarquia, por ser atividade técnica de investigação.",
    ],
    correta: 0,
    explicacao:
      "Art. 47 da CE-PR: a função policial civil fundamenta-se na hierarquia e disciplina (§1º); os cargos policiais civis são providos por concurso público de provas e títulos (§3º); e o cargo de Delegado de Polícia integra, para todos os fins, as carreiras jurídicas do Estado (§4º, incluído pela EC 27/2010).",
    explicacaoErradas:
      "A hierarquia e a disciplina “militares” são próprias da Polícia Militar (art. 48). Integrar as carreiras jurídicas não dá ao Delegado as garantias da magistratura nem o coloca no Ministério Público.",
    origem: "banco",
    fonte: "CE-PR, art. 47, §§1º, 3º e 4º",
  },
  {
    id: "leg-094",
    materia: "leg",
    topico: "Constituição do Estado do Paraná",
    enunciado:
      "Pelo art. 47, §5º, da Constituição do Estado do Paraná, a remuneração dos delegados e policiais civis é fixada",
    alternativas: [
      "na forma de subsídio, em parcela única, conforme o art. 39, §4º, da Constituição Federal.",
      "por vencimento básico acrescido de adicionais por tempo de serviço e de gratificação de risco de vida.",
      "por ato do Delegado-Geral, de acordo com a produtividade de cada unidade policial.",
      "por subsídio, permitido o acréscimo de gratificação de função policial e de adicional de produtividade.",
      "por convenção coletiva negociada entre o Estado e o sindicato da categoria.",
    ],
    correta: 0,
    explicacao:
      "Art. 47, §5º, da CE-PR (redação da EC 30/2012): a remuneração dos delegados e policiais civis é fixada na forma de subsídio, em parcela única, conforme o art. 39, §4º, da CF, em face do art. 144, §9º, da CF. A Polícia Penal também recebe por subsídio (art. 50-A, §5º).",
    explicacaoErradas:
      "Parcela única significa que é vedado acrescentar gratificação, adicional, abono, prêmio ou verba de representação.",
    origem: "banco",
    fonte: "CE-PR, art. 47, §5º",
  },
  {
    id: "leg-095",
    materia: "leg",
    topico: "Constituição do Estado do Paraná",
    enunciado:
      "De acordo com a Constituição do Estado do Paraná, com a redação da EC nº 53/2022, a Polícia Militar e o Corpo de Bombeiros Militar",
    alternativas: [
      "são comandados por oficial da ativa do último posto do quadro de oficiais combatentes da respectiva corporação, são forças auxiliares e reserva do Exército e, como a Polícia Civil e a Polícia Penal, subordinam-se ao Governador do Estado.",
      "são comandados pelo Delegado-Geral da Polícia Civil em situações de calamidade pública.",
      "subordinam-se diretamente ao Comandante do Exército, e não ao Governador do Estado.",
      "são comandados por oficial da reserva remunerada, escolhido pela Assembleia Legislativa.",
      "formam uma única corporação, porque o Corpo de Bombeiros continua integrando a Polícia Militar.",
    ],
    correta: 0,
    explicacao:
      "Art. 49 da CE-PR (redação da EC 53/2022): a Polícia Militar e o Corpo de Bombeiros Militar, comandados por oficial da ativa do último posto do quadro de oficiais combatentes da respectiva corporação, forças auxiliares e reserva do Exército, a Polícia Civil e a Polícia Penal subordinam-se ao Governador do Estado e são regidas por legislação especial. A regra segue o art. 144, §6º, da CF.",
    explicacaoErradas:
      "O Corpo de Bombeiros deixou de integrar a Polícia Militar e virou órgão próprio (art. 46, V).",
    origem: "banco",
    fonte: "CE-PR, art. 49, com a EC 53/2022",
  },
  {
    id: "leg-096",
    materia: "leg",
    topico: "Constituição do Estado do Paraná",
    enunciado:
      "Segundo o art. 48 da Constituição do Estado do Paraná, com a redação da EC nº 53/2022, cabem à Polícia Militar",
    alternativas: [
      "a polícia ostensiva, a preservação da ordem pública e o policiamento de trânsito urbano e rodoviário, de florestas e de mananciais, além de outras funções definidas em lei.",
      "as funções de polícia judiciária e a apuração das infrações penais comuns.",
      "a prevenção e o combate a incêndio, as buscas e os salvamentos, como atribuições exclusivas da corporação.",
      "a guarda e a segurança dos estabelecimentos penais do Estado.",
      "a realização das perícias criminais e médico-legais nos locais de crime.",
    ],
    correta: 0,
    explicacao:
      "Art. 48 da CE-PR (redação da EC 53/2022): à Polícia Militar, força estadual, instituição permanente e regular, organizada com base na hierarquia e disciplina militares, cabem a polícia ostensiva, a preservação da ordem pública, o policiamento de trânsito urbano e rodoviário, de florestas e de mananciais, além de outras formas e funções definidas em lei.",
    explicacaoErradas:
      "A EC 53/2022 tirou do art. 48 a defesa civil, a prevenção e o combate a incêndio, as buscas, os salvamentos e os socorros públicos, porque o Corpo de Bombeiros Militar virou órgão próprio. Polícia judiciária é da Polícia Civil, a segurança dos presídios é da Polícia Penal e a perícia é da Polícia Científica.",
    origem: "banco",
    fonte: "CE-PR, art. 48, com a EC 53/2022",
  },
  {
    id: "leg-097",
    materia: "leg",
    topico: "Constituição do Estado do Paraná",
    enunciado:
      "A Emenda Constitucional nº 50/2021 incluiu na Constituição do Estado do Paraná a Polícia Penal, que",
    alternativas: [
      "é organizada em estrutura administrativa própria, denominada Departamento de Polícia Penal do Estado do Paraná (DEPPEN), com ingresso exclusivamente por concurso público e remuneração por subsídio.",
      "é subordinada à Polícia Civil e dirigida pelo Delegado-Geral.",
      "levou à extinção dos cargos de Agente Penitenciário, com a exoneração dos ocupantes e a realização de novo concurso.",
      "pode admitir servidores por indicação do Diretor do DEPPEN, dispensado o concurso público.",
      "exerce as funções de polícia judiciária nos crimes praticados dentro dos estabelecimentos penais.",
    ],
    correta: 0,
    explicacao:
      "Art. 50-A da CE-PR (EC 50/2021): a Polícia Penal é instituição permanente e essencial à segurança pública, incumbida da segurança dos estabelecimentos penais e de outros setores vinculados à execução penal. Ela se fundamenta na hierarquia e na disciplina (§1º), o ingresso é exclusivamente por concurso público (§2º), os cargos de Agente Penitenciário foram transformados em Policial Penal (§3º), há um Conselho da Polícia Penal (§4º), a remuneração é por subsídio (§5º) e a estrutura própria é o DEPPEN (§6º).",
    explicacaoErradas:
      "A Polícia Penal se subordina ao Governador (art. 49), não à Polícia Civil. A apuração de crimes cometidos nos presídios continua com a Polícia Civil.",
    origem: "banco",
    fonte: "CE-PR, art. 50-A, incluído pela EC 50/2021",
  },
  {
    id: "leg-098",
    materia: "leg",
    topico: "LGPD e Lei de Acesso à Informação (12.527/2011)",
    enunciado:
      "Um cidadão pede, pelo site oficial da Polícia Civil, dados estatísticos sobre ocorrências registradas em uma delegacia. Pela Lei de Acesso à Informação, o órgão",
    alternativas: [
      "não pode exigir que ele informe os motivos do pedido, e as exigências de identificação do requerente não podem inviabilizar a solicitação.",
      "pode negar o pedido se o requerente não justificar o seu interesse pessoal na informação.",
      "só pode receber pedidos apresentados pessoalmente, em papel e com firma reconhecida.",
      "deve exigir que o pedido seja feito por advogado constituído, com procuração.",
      "só pode atender pedidos de quem comprovar residência no Estado do Paraná.",
    ],
    correta: 0,
    explicacao:
      "Art. 10 da LAI: qualquer interessado pode apresentar pedido de acesso, por qualquer meio legítimo, com a identificação do requerente e a especificação da informação. O §1º proíbe exigências de identificação que inviabilizem a solicitação, o §2º manda oferecer alternativa de pedido pelos sítios oficiais na internet e o §3º veda quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público.",
    origem: "banco",
    fonte: "Lei 12.527/2011, art. 10",
  },
  {
    id: "leg-099",
    materia: "leg",
    topico: "LGPD e Lei de Acesso à Informação (12.527/2011)",
    enunciado:
      "Negado o acesso a uma informação, a Lei nº 12.527/2011 assegura ao interessado",
    alternativas: [
      "recurso no prazo de 10 dias a contar da ciência, dirigido à autoridade hierarquicamente superior à que proferiu a decisão, que deve se manifestar em 5 dias.",
      "recurso no prazo de 5 dias, dirigido ao próprio servidor que negou o pedido, que decide em 10 dias.",
      "recurso no prazo de 15 dias, apresentado diretamente ao Poder Judiciário, vedada a via administrativa.",
      "apenas o mandado de segurança, porque a decisão administrativa que nega acesso é irrecorrível.",
      "recurso no prazo de 30 dias ao Ministério Público, que decide em igual prazo.",
    ],
    correta: 0,
    explicacao:
      "Art. 15 da LAI: no caso de indeferimento de acesso a informações ou às razões da negativa, o interessado pode recorrer no prazo de 10 dias a contar da sua ciência. O recurso vai à autoridade hierarquicamente superior à que exarou a decisão impugnada, que deve se manifestar em 5 dias (parágrafo único). O art. 14 garante ao requerente o direito de obter o inteiro teor da decisão de negativa.",
    explicacaoErradas:
      "Não confundir com o prazo de resposta ao pedido, que é de até 20 dias, prorrogáveis por mais 10 (art. 11).",
    origem: "banco",
    fonte: "Lei 12.527/2011, art. 15",
  },
  {
    id: "leg-100",
    materia: "leg",
    topico: "LGPD e Lei de Acesso à Informação (12.527/2011)",
    enunciado:
      "Pela Lei de Acesso à Informação, pode ser classificada como sigilosa, por ser imprescindível à segurança da sociedade ou do Estado, a informação cuja divulgação possa",
    alternativas: [
      "comprometer atividades de inteligência, bem como de investigação ou fiscalização em andamento, relacionadas com a prevenção ou repressão de infrações.",
      "causar constrangimento político ao governante, ainda que sem risco à segurança da sociedade.",
      "revelar condutas de agentes públicos que tenham violado direitos humanos.",
      "expor o órgão a críticas da imprensa sobre o uso de recursos públicos.",
      "revelar o número de inquéritos instaurados pela delegacia no ano anterior.",
    ],
    correta: 0,
    explicacao:
      "Art. 23 da LAI: são passíveis de classificação as informações cuja divulgação possa, entre outras hipóteses, pôr em risco a defesa e a soberania nacionais, a vida, a segurança ou a saúde da população, a segurança de instituições ou de altas autoridades e (inciso VIII) comprometer atividades de inteligência, bem como de investigação ou fiscalização em andamento, relacionadas com a prevenção ou repressão de infrações. Além disso, a LAI não afasta os demais sigilos legais nem o segredo de justiça (art. 22).",
    explicacaoErradas:
      "Constrangimento político ou críticas não justificam sigilo, e as condutas que violam direitos humanos praticadas por agentes públicos não podem ter acesso restrito (art. 21, parágrafo único).",
    origem: "banco",
    fonte: "Lei 12.527/2011, art. 23, VIII",
  },
  {
    id: "leg-101",
    materia: "leg",
    topico: "LGPD e Lei de Acesso à Informação (12.527/2011)",
    enunciado:
      "Segundo a Lei nº 12.527/2011, as informações ou documentos que versem sobre condutas que impliquem violação dos direitos humanos praticada por agentes públicos ou a mando de autoridades públicas",
    alternativas: [
      "não poderão ser objeto de restrição de acesso.",
      "podem ser classificados como ultrassecretos, com sigilo de até 25 anos.",
      "têm acesso restrito por até 100 anos, por conterem informações pessoais dos agentes envolvidos.",
      "só podem ser divulgados após o trânsito em julgado da condenação dos agentes.",
      "dependem de autorização do Ministério Público para serem divulgados.",
    ],
    correta: 0,
    explicacao:
      "Art. 21 da LAI: não pode ser negado acesso à informação necessária à tutela judicial ou administrativa de direitos fundamentais. O parágrafo único vai além: informações ou documentos sobre condutas que impliquem violação dos direitos humanos praticada por agentes públicos ou a mando de autoridades públicas não poderão ser objeto de restrição de acesso. Destruir ou subtrair documentos sobre essas violações é conduta ilícita do agente (art. 32, VII).",
    origem: "banco",
    fonte: "Lei 12.527/2011, art. 21",
  },
  {
    id: "leg-102",
    materia: "leg",
    topico: "LGPD e Lei de Acesso à Informação (12.527/2011)",
    enunciado:
      "As informações pessoais relativas à intimidade, à vida privada, à honra e à imagem, nos termos da Lei de Acesso à Informação,",
    alternativas: [
      "têm acesso restrito, independentemente de classificação de sigilo, pelo prazo máximo de 100 anos a contar da sua produção, a agentes públicos legalmente autorizados e à pessoa a que se referirem.",
      "devem ser classificadas como reservadas, com prazo máximo de sigilo de 5 anos.",
      "tornam-se automaticamente públicas depois de 25 anos da sua produção.",
      "podem ser divulgadas a qualquer interessado, independentemente de consentimento, por estarem em poder de órgão público.",
      "ficam restritas por 50 anos, prorrogáveis uma única vez por igual período.",
    ],
    correta: 0,
    explicacao:
      "Art. 31, §1º, I, da LAI: as informações pessoais relativas à intimidade, vida privada, honra e imagem têm acesso restrito, independentemente de classificação de sigilo e pelo prazo máximo de 100 anos a contar da sua produção, a agentes públicos legalmente autorizados e à pessoa a que se referirem.",
    explicacaoErradas:
      "A divulgação ou o acesso por terceiros depende de previsão legal ou de consentimento expresso da pessoa (inciso II). O consentimento é dispensado, por exemplo, para cumprimento de ordem judicial, para a defesa de direitos humanos e para a proteção do interesse público e geral preponderante (§3º). Os prazos de 25, 15 e 5 anos são das informações classificadas como sigilosas (art. 24), e não das pessoais.",
    origem: "banco",
    fonte: "Lei 12.527/2011, art. 31",
  },
  {
    id: "leg-103",
    materia: "leg",
    topico: "LGPD e Lei de Acesso à Informação (12.527/2011)",
    enunciado:
      "Investigado em processo disciplinar, um servidor alega que informações sobre sua vida privada, juntadas aos autos, não podem ser usadas, porque a Lei de Acesso à Informação protege as informações pessoais. Pela Lei nº 12.527/2011,",
    alternativas: [
      "a restrição de acesso às informações relativas à vida privada, à honra e à imagem não pode ser invocada para prejudicar processo de apuração de irregularidades em que o titular das informações estiver envolvido.",
      "o servidor tem razão, e o processo disciplinar deve ser arquivado.",
      "as informações só podem ser usadas com o consentimento expresso e escrito do servidor.",
      "as informações só poderão ser usadas depois de 100 anos da sua produção.",
      "a proteção só deixa de valer depois que o servidor for condenado criminalmente.",
    ],
    correta: 0,
    explicacao:
      "Art. 31, §4º, da LAI: a restrição de acesso à informação relativa à vida privada, honra e imagem de pessoa não poderá ser invocada com o intuito de prejudicar processo de apuração de irregularidades em que o titular das informações estiver envolvido, bem como em ações voltadas para a recuperação de fatos históricos de maior relevância. Quem obtém acesso a essas informações responde pelo seu uso indevido (§2º).",
    origem: "banco",
    fonte: "Lei 12.527/2011, art. 31, §4º",
  },
  {
    id: "leg-104",
    materia: "leg",
    topico: "LGPD e Lei de Acesso à Informação (12.527/2011)",
    enunciado:
      "Sobre a classificação de informações sigilosas na Lei de Acesso à Informação, é correto afirmar que",
    alternativas: [
      "transcorrido o prazo de classificação ou consumado o evento que defina o seu termo final, a informação se torna automaticamente de acesso público, e na classificação deve ser usado o critério menos restritivo possível.",
      "vencido o prazo, a informação continua sigilosa até que a autoridade publique ato expresso de desclassificação.",
      "o prazo de sigilo é contado da data em que a informação foi pedida pela primeira vez por algum interessado.",
      "em caso de dúvida, deve ser adotado sempre o grau de sigilo mais restritivo, por precaução.",
      "o termo final do sigilo deve ser sempre uma data certa, vedado vinculá-lo a um evento.",
    ],
    correta: 0,
    explicacao:
      "Art. 24 da LAI: transcorrido o prazo ou consumado o evento, a informação torna-se automaticamente de acesso público (§4º). Na classificação, observa-se o interesse público e usa-se o critério menos restritivo possível, considerando a gravidade do risco e o prazo máximo (§5º). As informações que possam pôr em risco a segurança do Presidente, do Vice e de seus cônjuges e filhos são reservadas até o término do mandato em exercício ou do último mandato, em caso de reeleição (§2º).",
    explicacaoErradas:
      "Os prazos máximos são de 25 anos (ultrassecreta), 15 anos (secreta) e 5 anos (reservada), contados da data de produção da informação. O termo final pode ser um evento que ocorra antes do fim do prazo máximo (§3º).",
    origem: "banco",
    fonte: "Lei 12.527/2011, art. 24",
  },
  {
    id: "leg-105",
    materia: "leg",
    topico: "LGPD e Lei de Acesso à Informação (12.527/2011)",
    enunciado:
      "Pela Lei de Acesso à Informação, com a redação da Lei nº 14.129/2021, o serviço de busca e de fornecimento de informação",
    alternativas: [
      "é gratuito, podendo ser cobrado só o valor necessário ao ressarcimento dos custos quando houver reprodução de documentos, com isenção para quem não puder pagar sem prejuízo do próprio sustento ou da família.",
      "é cobrado por taxa fixada pelo órgão, proporcional ao tempo gasto na busca da informação.",
      "é gratuito apenas para quem comprovar renda inferior a um salário mínimo.",
      "é sempre gratuito, inclusive a reprodução de documentos, vedada qualquer cobrança.",
      "depende do pagamento prévio de emolumentos, como nos serviços de cartório.",
    ],
    correta: 0,
    explicacao:
      "Art. 12 da LAI (redação da Lei 14.129/2021): o serviço de busca e de fornecimento de informação é gratuito. O órgão só pode cobrar o valor necessário ao ressarcimento dos custos dos serviços e dos materiais quando houver reprodução de documentos (§1º). Fica isento desse ressarcimento quem não puder pagar sem prejuízo do sustento próprio ou da família, declarando a situação nos termos da Lei 7.115/1983 (§2º).",
    origem: "banco",
    fonte: "Lei 12.527/2011, art. 12, com redação da Lei 14.129/2021",
  },
  {
    id: "leg-106",
    materia: "leg",
    topico: "LGPD e Lei de Acesso à Informação (12.527/2011)",
    enunciado:
      "Para a Lei de Acesso à Informação, constitui conduta ilícita que gera responsabilidade do agente público",
    alternativas: [
      "recusar-se a fornecer informação requerida, retardar deliberadamente o seu fornecimento ou fornecê-la intencionalmente de forma incorreta, incompleta ou imprecisa.",
      "fornecer informação de interesse público a quem não informou os motivos do pedido.",
      "divulgar na internet, sem requerimento, informações de interesse coletivo produzidas pelo órgão.",
      "negar acesso a informação classificada como secreta enquanto não vencido o prazo de sigilo.",
      "permitir que a própria pessoa a que se referem as informações pessoais tenha acesso a elas.",
    ],
    correta: 0,
    explicacao:
      "Art. 32 da LAI: entre as condutas ilícitas estão recusar, retardar ou fornecer intencionalmente de forma incorreta a informação (I); utilizar indevidamente, subtrair, destruir ou ocultar informação (II); agir com dolo ou má-fé na análise dos pedidos (III); divulgar ou permitir acesso indevido a informação sigilosa ou pessoal (IV); impor sigilo para obter proveito pessoal ou ocultar ato ilegal (V); ocultar informação sigilosa da revisão de autoridade superior (VI); e destruir documentos sobre violações de direitos humanos (VII). Para os servidores regidos pela Lei 8.112, a punição mínima é a suspensão (§1º, II), e o agente pode responder também por improbidade administrativa (§2º).",
    explicacaoErradas:
      "Divulgar informação de interesse coletivo sem requerimento não é ilícito: é dever do órgão (art. 8º).",
    origem: "banco",
    fonte: "Lei 12.527/2011, art. 32",
  },
  {
    id: "leg-107",
    materia: "leg",
    topico: "LGPD e Lei de Acesso à Informação (12.527/2011)",
    enunciado:
      "Pela Lei nº 12.527/2011, a divulgação de informações de interesse coletivo ou geral produzidas ou custodiadas pelos órgãos e entidades públicas",
    alternativas: [
      "deve ser promovida independentemente de requerimentos, sendo obrigatória a divulgação em sítios oficiais da internet.",
      "só ocorre mediante pedido formal de algum interessado.",
      "é facultativa, ficando a critério de cada autoridade.",
      "é proibida na internet, por razões de segurança da informação, e deve ser feita apenas em murais físicos.",
      "só é obrigatória para os órgãos da União, sem alcançar Estados e Municípios.",
    ],
    correta: 0,
    explicacao:
      "Art. 8º da LAI (transparência ativa): é dever dos órgãos e entidades públicas promover, independentemente de requerimentos, a divulgação em local de fácil acesso das informações de interesse coletivo ou geral que produzam ou custodiem. O §2º torna obrigatória a divulgação em sítios oficiais da internet, e o §4º dispensa dela os Municípios de até 10.000 habitantes, que continuam obrigados a divulgar em tempo real a execução orçamentária e financeira.",
    explicacaoErradas:
      "A LAI vale para a União, os Estados, o Distrito Federal e os Municípios (art. 1º).",
    origem: "banco",
    fonte: "Lei 12.527/2011, art. 8º",
  },
  {
    id: "leg-108",
    materia: "leg",
    topico: "Alterações legislativas de 2025/2026 na estrutura da Polícia Civil do PR",
    enunciado:
      "Ao final do curso de formação técnico-profissional, a ordem de escolha da primeira unidade de lotação dos novos policiais civis, segundo a LC nº 259/2023 (redação da LC nº 285/2025), leva em conta",
    alternativas: [
      "exclusivamente a classificação final obtida no curso de formação técnico-profissional específico, entre as unidades definidas pelo Conselho Superior como prioritárias e de provimento imediato.",
      "a classificação final no concurso público, somada à nota do curso de formação.",
      "a ordem de inscrição no concurso público.",
      "o local de residência do policial, com preferência para quem mora na comarca da unidade.",
      "sorteio público realizado pela Escola Superior de Polícia Civil.",
    ],
    correta: 0,
    explicacao:
      "Art. 19, §1º, da LC 259 (redação da LC 285/2025): ao final do curso de formação, os policiais civis são convocados para escolher a primeira unidade de lotação, dentre as definidas pelo Conselho Superior da Polícia Civil como prioritárias e de provimento imediato. O §2º diz que a ordem de escolha leva em conta, exclusivamente, a classificação final obtida no curso de formação técnico-profissional específico.",
    explicacaoErradas:
      "A nota da prova não decide a lotação: o desempenho no curso, sim.",
    origem: "banco",
    fonte: "LC Estadual 259/2023, art. 19, §§1º e 2º, com redação da LC 285/2025",
  },
  {
    id: "leg-109",
    materia: "leg",
    topico: "Alterações legislativas de 2025/2026 na estrutura da Polícia Civil do PR",
    enunciado:
      "Sobre o exame pré-admissional nos concursos da Polícia Civil do Paraná, a LC nº 259/2023, com as alterações das LC nº 285/2025 e nº 289/2025, prevê que",
    alternativas: [
      "o candidato deve apresentar exame toxicológico, arcando integralmente com os custos, e o pedido de reclassificação para o final da lista, uma vez deferido, é irrevogável.",
      "o exame toxicológico é custeado pelo Estado e só é exigido no concurso de Delegado.",
      "a convocação para o exame pré-admissional gera direito adquirido à nomeação.",
      "o pedido de reclassificação para o final da lista pode ser desfeito a qualquer tempo, antes da nomeação.",
      "a Administração não pode convocar para o exame candidatos além do número de vagas.",
    ],
    correta: 0,
    explicacao:
      "Art. 15 da LC 259: os aprovados em todas as fases são convocados para a perícia médica (exame pré-admissional). O edital pode permitir pedido de reclassificação para o final da lista de classificados (§2º), e o deferimento é irrevogável, faz perder o direito à nomeação naquela posição e não pode ser revisto (§3º). A LC 289/2025 incluiu o §4º: o candidato apresenta exame toxicológico no pré-admissional e arca integralmente com os custos.",
    explicacaoErradas:
      "A convocação não gera direito adquirido à nomeação, e a Administração pode convocar além do número de vagas para repor o efetivo com rapidez (§1º).",
    origem: "banco",
    fonte: "LC Estadual 259/2023, art. 15, com redação das LC 285/2025 e 289/2025",
  },
  {
    id: "leg-110",
    materia: "leg",
    topico: "Alterações legislativas de 2025/2026 na estrutura da Polícia Civil do PR",
    enunciado:
      "Pelo art. 44-A da LC nº 259/2023, incluído pela LC nº 289/2025, o policial civil",
    alternativas: [
      "perde o subsídio do dia quando faltar ao serviço ou se retirar antes de findar o período de trabalho, salvo motivo previsto em lei, e nas faltas sucessivas são computados os sábados, domingos e feriados intercalados.",
      "perde só metade do subsídio do dia em que faltar, sem cômputo dos fins de semana intercalados.",
      "pode ter até dez faltas por mês relevadas, independentemente de atestado médico.",
      "que falta a um plantão perde apenas as horas de trabalho, sem alcançar o período destinado ao descanso.",
      "pode ter o subsídio penhorado para pagamento de qualquer dívida particular.",
    ],
    correta: 0,
    explicacao:
      "Art. 44-A da LC 259 (LC 289/2025): o policial perde metade do subsídio durante o afastamento por condenação definitiva que não resulte em demissão (I) e o subsídio do dia quando faltar ou sair antes do fim do expediente, salvo motivo legal (II). Nas faltas sucessivas contam-se sábados, domingos e feriados intercalados (§1º).",
    explicacaoErradas:
      "No plantão, a falta abrange também o período de descanso (§3º). Podem ser relevadas até três faltas por mês, se motivadas por doença comprovada por atestado (§4º). O subsídio não sofre descontos nem penhora, salvo pensão alimentícia judicial e reposição ou indenização à Fazenda, em parcelas de até um quinto do subsídio (§5º).",
    origem: "banco",
    fonte: "LC Estadual 259/2023, art. 44-A, com redação da LC 289/2025",
  },
  {
    id: "leg-111",
    materia: "leg",
    topico: "Alterações legislativas de 2025/2026 na estrutura da Polícia Civil do PR",
    enunciado:
      "A LC nº 289/2025 incluiu o art. 47-A na LC nº 259/2023, segundo o qual o policial civil estável lotado em unidade policial de difícil provimento",
    alternativas: [
      "tem o interstício para promoção reduzido pela metade, desde que esteja lotado ali há pelo menos três anos consecutivos e resida em município da comarca da unidade há pelo menos três anos consecutivos, até o limite de três níveis na carreira.",
      "é promovido automaticamente a cada ano, dispensada a avaliação de desempenho.",
      "tem o interstício reduzido pela metade desde o primeiro dia de lotação, sem limite de níveis.",
      "recebe adicional de 50% sobre o subsídio enquanto permanecer na unidade.",
      "tem o interstício reduzido a um terço, desde que resida na capital do Estado.",
    ],
    correta: 0,
    explicacao:
      "Art. 47-A da LC 259 (LC 289/2025): o interstício normal é de dois anos no nível (art. 47, II). Para o estável lotado em unidade de difícil provimento, ele cai pela metade, se o policial estiver lotado nessa unidade há no mínimo três anos consecutivos (I) e residir em município da comarca da unidade há no mínimo três anos consecutivos (II). A contagem reduzida só começa depois de cumpridos esses requisitos (§1º), e o benefício vale no máximo por três níveis (§3º). O Conselho Superior define as unidades de difícil provimento (§2º). A pena de suspensão interrompe a contagem (§4º, I). Pela regra de transição, essa promoção só ocorre a partir da promoção de maio de 2027 (art. 82, §6º).",
    origem: "banco",
    fonte: "LC Estadual 259/2023, art. 47-A, com redação da LC 289/2025",
  },
  {
    id: "leg-112",
    materia: "leg",
    topico: "Alterações legislativas de 2025/2026 na estrutura da Polícia Civil do PR",
    enunciado:
      "A LC nº 259/2023, com a redação da LC nº 289/2025, veda ao servidor policial civil",
    alternativas: [
      "trabalhar sob as ordens do cônjuge, companheiro ou parente até o segundo grau, consanguíneo ou afim, salvo quando não houver no município outra unidade policial.",
      "trabalhar na mesma unidade que parente de qualquer grau, sem exceção.",
      "trabalhar sob as ordens de parente até o quarto grau, ainda que não haja outra unidade policial no município.",
      "ser lotado no município em que reside a sua família.",
      "casar-se com outro policial civil lotado na mesma unidade.",
    ],
    correta: 0,
    explicacao:
      "Art. 64-A da LC 259 (LC 289/2025): é vedado ao servidor policial civil trabalhar sob as ordens do cônjuge, companheiro ou parente até o segundo grau, consanguíneo ou afim, salvo quando não houver no município outra unidade policial.",
    explicacaoErradas:
      "A vedação é de subordinação (trabalhar sob as ordens), não de simples lotação conjunta, e o limite é o segundo grau.",
    origem: "banco",
    fonte: "LC Estadual 259/2023, art. 64-A, com redação da LC 289/2025",
  },
  {
    id: "leg-113",
    materia: "leg",
    topico: "Alterações legislativas de 2025/2026 na estrutura da Polícia Civil do PR",
    enunciado:
      "Entre os direitos e garantias assegurados aos policiais civis em atividade pelo art. 72, §1º, da LC nº 259/2023, com a redação da LC nº 289/2025, está",
    alternativas: [
      "o recolhimento em unidade prisional exclusiva para policiais, para cumprimento de prisão provisória ou de sentença condenatória transitada em julgado, com pronta comunicação da prisão ao chefe imediato.",
      "a imunidade à prisão em flagrante, salvo por crime hediondo.",
      "o porte de arma de fogo apenas em serviço, vedado na inatividade.",
      "a dispensa de comparecer como testemunha em audiências judiciais sobre fatos do serviço.",
      "o direito de só ser preso por ordem escrita do Delegado-Geral.",
    ],
    correta: 0,
    explicacao:
      "Art. 72, §1º, da LC 259 (LC 289/2025): entre outros direitos, o policial civil tem identidade funcional com fé pública e validade nacional (I), porte de arma com validade nacional, salvo impedimento por saúde mental (II), recolhimento em unidade prisional exclusiva para policiais (IV), pronta comunicação da prisão ao chefe imediato e ao representante da categoria (V), precedência nas audiências em que for testemunha de fato do serviço (IX), atuação sem revelar a condição de policial, no interesse do serviço (XII), presença de representante da Polícia Civil na lavratura do flagrante (XIV) e porte de armas mesmo na inatividade (XXIX). Aos aposentados valem os incisos I, II, IV e V (§7º).",
    explicacaoErradas:
      "Não há imunidade à prisão em flagrante.",
    origem: "banco",
    fonte: "LC Estadual 259/2023, art. 72, §1º, com redação da LC 289/2025",
  },
  {
    id: "leg-114",
    materia: "leg",
    topico: "Alterações legislativas de 2025/2026 na estrutura da Polícia Civil do PR",
    enunciado:
      "Pelo art. 3º da LC nº 259/2023, com a redação da LC nº 289/2025, todos os ocupantes de cargos efetivos da Polícia Civil, nos limites de suas atribuições legais e respeitada a hierarquia e a disciplina, devem atuar com",
    alternativas: [
      "imparcialidade, objetividade, tecnicidade e cientificidade.",
      "discricionariedade plena, subordinação ao Ministério Público e sigilo absoluto.",
      "publicidade irrestrita, eficiência e economicidade.",
      "celeridade, informalidade e preferência pela versão da vítima.",
      "autonomia funcional, vitaliciedade e inamovibilidade.",
    ],
    correta: 0,
    explicacao:
      "Art. 3º, §3º, da LC 259 (incluído pela LC 289/2025): todos os ocupantes de cargos efetivos da Polícia Civil, nos limites de suas atribuições legais, respeitada a hierarquia e disciplina, devem atuar com imparcialidade, objetividade, tecnicidade e cientificidade. O §1º, também na redação de 2025, diz que esses cargos são permanentes, típicos de Estado e essenciais, e que suas atividades, com risco à vida, devem ser exercidas exclusivamente pelos ocupantes dos cargos da carreira, sob regime jurídico próprio. O §2º veda outras atividades remuneradas, salvo o magistério.",
    origem: "banco",
    fonte: "LC Estadual 259/2023, art. 3º, §§1º e 3º, com redação da LC 289/2025",
  },
  {
    id: "leg-115",
    materia: "leg",
    topico: "Alterações legislativas de 2025/2026 na estrutura da Polícia Civil do PR",
    enunciado:
      "Um aluno policial civil, durante o curso de formação técnico-profissional, comete transgressão prevista no Código Disciplinar da PCPR (Lei nº 21.894/2024). Pela LC nº 259/2023, com a redação da LC nº 285/2025,",
    alternativas: [
      "a direção da Escola Superior de Polícia Civil encaminha a documentação à Corregedoria-Geral, e a apuração tramita de forma prioritária, porque as normas da Lei nº 21.894/2024 se aplicam aos alunos matriculados.",
      "o Código Disciplinar não se aplica ao aluno, que responde só ao regimento interno da Escola.",
      "a própria Escola julga a transgressão e pode aplicar diretamente a pena de demissão.",
      "a apuração fica suspensa até o fim do curso, para não prejudicar a formação do aluno.",
      "a transgressão só pode ser apurada depois do estágio probatório.",
    ],
    correta: 0,
    explicacao:
      "Art. 26-A da LC 259 (LC 285/2025): aplicam-se aos alunos as normas da Lei 21.894/2024 (§2º). A transgressão leva a direção da Escola Superior a encaminhar a documentação à Corregedoria-Geral, para apurar a responsabilidade (§3º), e essa apuração tramita de forma prioritária do início ao fim (§4º). A reprovação em qualquer disciplina do curso acarreta a imediata demissão (§1º), e o reprovado, até o fim do processo, fica preferencialmente lotado na Escola, em atividades só administrativas e sem ajuda de custo em eventual lotação posterior (§7º). A vida social e interpessoal do aluno é acompanhada e avaliada em disciplina própria (§6º).",
    origem: "banco",
    fonte: "LC Estadual 259/2023, art. 26-A, com redação da LC 285/2025",
  },
  {
    id: "leg-116",
    materia: "leg",
    topico: "Estrutura organizacional da PCPR (delegacias, carreiras, hierarquia)",
    enunciado:
      "Um Delegado de Polícia de classe inferior e um Delegado de classe mais elevada trabalham juntos em uma equipe de investigação, com Agentes de Polícia Judiciária e um Papiloscopista. Segundo a Lei Estadual nº 23.213/2026,",
    alternativas: [
      "o Delegado de classe mais elevada tem precedência hierárquica sobre o de classe inferior no trabalho em equipe, e os Agentes e o Papiloscopista guardam correlação hierárquica ligada à função que desempenham na unidade, fixada por regulamento ou por designação da autoridade policial.",
      "não há hierarquia entre os Delegados, porque todos ocupam o mesmo cargo e têm a mesma independência funcional.",
      "o Agente de Polícia Judiciária mais antigo tem precedência sobre o Delegado de classe inferior.",
      "a hierarquia entre Agentes e Papiloscopista é fixada pela antiguidade no serviço público, sem relação com a função exercida.",
      "o Papiloscopista, por ser perito, tem precedência sobre os Agentes e sobre os Delegados em qualquer situação.",
    ],
    correta: 0,
    explicacao:
      "Art. 8º da Lei 23.213: a hierarquia se alicerça na ordenação da autoridade nos diferentes níveis da estrutura. Art. 9º: dentro do mesmo cargo prevalece a hierarquia da função (caput). Os Delegados de classe mais elevada têm precedência sobre os de classe inferior quando na mesma unidade ou em trabalho em equipe, ressalvada a hierarquia da função (§1º). Agente de Polícia Judiciária, Papiloscopista e Agente de Operações guardam correlação hierárquica pela função que desempenham na unidade, estabelecida por regulamento ou por designação da autoridade policial (§3º).",
    explicacaoErradas:
      "Sempre se observa a precedência da carreira de Delegado sobre as demais (§2º).",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR), art. 9º",
  },
  {
    id: "leg-117",
    materia: "leg",
    topico: "Estrutura organizacional da PCPR (delegacias, carreiras, hierarquia)",
    enunciado:
      "Na estrutura organizacional básica da PCPR definida pela Lei Estadual nº 23.213/2026, a Escola Superior de Polícia Civil (ESPC), o Departamento de Tecnologia da Informação e Inovação (DTI) e o Instituto de Identificação integram, respectivamente, os níveis",
    alternativas: [
      "Instrumental, Instrumental e de Execução.",
      "de Assessoramento, Instrumental e Instrumental.",
      "de Execução, de Assessoramento e de Direção Superior.",
      "Instrumental, de Assessoramento e Instrumental.",
      "de Direção Superior, de Execução e de Assessoramento.",
    ],
    correta: 0,
    explicacao:
      "Art. 10 da Lei 23.213. O Nível Instrumental reúne a Coordenadoria de Operações Integradas (COI), a ESPC, o Departamento de Planejamento, Administração e Finanças (DPAF) e o DTI, e cuida das atividades-meio e técnico-especializadas (§3º). O Nível de Execução reúne o Instituto de Identificação e os Departamentos e Unidades de Polícia Judiciária e Investigação Criminal, e exerce a polícia administrativa e judiciária, a investigação criminal e a identificação humana (§4º).",
    explicacaoErradas:
      "O Assessoramento (Chefia de Gabinete, Assessorias Técnicas, DIP e DCI) assessora diretamente o Delegado-Geral (§2º). A Direção Superior (Delegacia-Geral, CSP e CGP) dirige, coordena, controla, normatiza e supervisiona (§1º). Pegadinha: o Instituto de Identificação não é órgão-meio, é de Execução.",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR), art. 10, III e IV",
  },
  {
    id: "leg-118",
    materia: "leg",
    topico: "Estrutura organizacional da PCPR (delegacias, carreiras, hierarquia)",
    enunciado:
      "Sobre a chefia da Polícia Civil do Paraná na Lei Estadual nº 23.213/2026, é correto afirmar que o Delegado-Geral",
    alternativas: [
      "preside o Conselho Superior de Polícia e designa os Delegados-Gerais Adjuntos Administrativo e Operacional, escolhidos entre os Delegados em atividade da classe mais elevada.",
      "é eleito pelo Conselho Superior de Polícia entre os Delegados de qualquer classe, para mandato de dois anos.",
      "é nomeado pelo Secretário de Estado da Segurança Pública, e os Adjuntos são nomeados pelo Governador.",
      "não integra o Conselho Superior de Polícia, que é presidido pelo Corregedor-Geral.",
      "tem um único Adjunto, que acumula as atividades administrativas e operacionais.",
    ],
    correta: 0,
    explicacao:
      "Entre as atribuições do Delegado-Geral (art. 12 da Lei 23.213) estão presidir o CSP (II), propor ao CSP mensagem ao Governador para criar e extinguir cargos e unidades (IV) e designar autoridades policiais, em caráter especial, para investigações de grande repercussão ou que exijam conhecimento técnico-especializado (IX). O art. 13 prevê um Delegado-Geral Adjunto Administrativo e um Adjunto Operacional, designados pelo Delegado-Geral entre Delegados em atividade da classe mais elevada. O Administrativo cuida da gestão, do orçamento e da avaliação de desempenho (art. 14), e o Operacional, das operações, da investigação e da integração com outros órgãos (art. 15).",
    explicacaoErradas:
      "Art. 11 da Lei 23.213: o Delegado-Geral, chefe da PCPR, é nomeado pelo Governador e escolhido entre os Delegados em atividade e da classe mais elevada.",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR), arts. 11 a 15",
  },
  {
    id: "leg-119",
    materia: "leg",
    topico: "Estrutura organizacional da PCPR (delegacias, carreiras, hierarquia)",
    enunciado:
      "Pela Lei Estadual nº 23.213/2026, o Departamento Estadual de Polícia Especializada (DPE) e o Departamento de Repressão a Crimes Cibernéticos (DRCC) têm competências distintas. É correto afirmar que",
    alternativas: [
      "o DPE cuida das investigações de delitos de trânsito, contra o meio ambiente, contra o consumidor e de crimes informáticos, além da atuação em grandes eventos, da fiscalização de produtos controlados e do registro online de boletins de ocorrência, enquanto o DRCC coordena as investigações de crimes cibernéticos de média e alta complexidade em todo o Estado.",
      "o DRCC é responsável pelo registro online de boletins de ocorrência, e o DPE, pelos crimes cibernéticos de alta complexidade.",
      "o DPE só atua na capital, e o DRCC só no interior do Estado.",
      "o DRCC cuida dos crimes contra o consumidor e o meio ambiente praticados por meio da internet, e o DPE, dos crimes de trânsito.",
      "o DPE foi extinto pela Lei nº 23.213/2026, e suas competências passaram ao DRCC.",
    ],
    correta: 0,
    explicacao:
      "Art. 38 da Lei 23.213: ao DPE cabem as investigações dos delitos de trânsito, contra o meio ambiente, contra o consumidor e dos crimes informáticos (I) e a atuação em grandes eventos, a fiscalização de produtos controlados e o registro online de boletins de ocorrência (II). Art. 41: ao DRCC cabe coordenar investigações de crimes cibernéticos de média e alta complexidade, praticados pela internet ou por dispositivos digitais, com atuação em todo o Estado (I), além de desarticular grupos que usem meios cibernéticos, como fraudes eletrônicas, estelionatos virtuais, invasões de dispositivos, crimes contra a honra na internet, exploração sexual infantojuvenil e crimes de ódio (II).",
    explicacaoErradas:
      "Os dois estão entre os departamentos dos incisos I a IX do art. 32, que atuam em todo o Estado (art. 50).",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR), arts. 38 e 41",
  },
  {
    id: "leg-120",
    materia: "leg",
    topico: "Estrutura organizacional da PCPR (delegacias, carreiras, hierarquia)",
    enunciado:
      "Uma Delegacia de Polícia do interior investiga um homicídio e apreende o celular do suspeito, mas não tem estrutura para analisar os vestígios digitais. À luz da Lei Estadual nº 23.213/2026,",
    alternativas: [
      "o Departamento de Repressão a Crimes Cibernéticos (DRCC) pode apoiar técnica e operacionalmente a investigação, quando solicitado ou por determinação superior, em regime de cooperação e sem avocar o inquérito.",
      "o DRCC deve avocar o inquérito, porque qualquer investigação com vestígio digital passa a ser de sua competência exclusiva.",
      "o DRCC só pode atuar em investigações instauradas na capital do Estado.",
      "a delegacia deve remeter o inquérito à Polícia Federal, porque a análise de celulares é competência da União.",
      "o apoio do DRCC depende de autorização judicial prévia e específica para cada diligência.",
    ],
    correta: 0,
    explicacao:
      "Art. 41, III, da Lei 23.213: compete ao DRCC apoiar técnica e operacionalmente as unidades policiais de todo o Estado nas investigações que envolvam elementos ou vestígios digitais, quando solicitado ou por determinação superior. Pelo art. 51, é vedada a avocação de inquérito: a unidade especializada pode atuar em cooperação com o Delegado responsável, se o interesse público exigir, e a avocação ou redistribuição só ocorre de forma excepcional, por despacho fundamentado do superior hierárquico (parágrafo único).",
    explicacaoErradas:
      "O acesso aos dados do aparelho segue as regras próprias de prova, mas a lei não condiciona o apoio técnico do DRCC a uma ordem judicial.",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR), arts. 41, III, e 51",
  },
  {
    id: "leg-121",
    materia: "leg",
    topico: "Estrutura organizacional da PCPR (delegacias, carreiras, hierarquia)",
    enunciado:
      "Sobre as unidades territoriais da PCPR previstas na Lei Estadual nº 23.213/2026, é correto afirmar que",
    alternativas: [
      "as Subdivisões de Polícia do Interior (SDP) são unidades de atuação regional subordinadas ao Departamento de Polícia do Interior (DPI), e as Centrais Regionais de Flagrante (CRF) exercem as funções cartorárias de formalização dos procedimentos de natureza flagrancial.",
      "o Departamento de Polícia da Região Metropolitana (DPMETRO) coordena as unidades de todo o interior do Estado.",
      "as Subdivisões de Polícia do Interior são subordinadas ao Departamento de Polícia da Capital (DPCAP).",
      "as Centrais Regionais de Flagrante são criadas por lei estadual e atuam só na capital.",
      "os Postos Policiais de Atendimento ao Cidadão (PPAC) presidem inquéritos policiais nos municípios menores.",
    ],
    correta: 0,
    explicacao:
      "As SDP são unidades regionais subordinadas ao DPI (art. 45), e as Delegacias de Polícia executam as investigações e a polícia judiciária em sua circunscrição (art. 46). As CRF são regulamentadas por ato do Conselho Superior de Polícia, têm atribuição em todo o Estado, podem ser estruturadas em macrorregiões e exercem as funções cartorárias dos procedimentos flagranciais (art. 47).",
    explicacaoErradas:
      "Lei 23.213: o DPCAP coordena as atividades na capital (art. 42), o DPMETRO nos municípios da Região Metropolitana de Curitiba (art. 43) e o DPI no interior (art. 44). Aos PPAC cabem só a orientação ao cidadão e o registro de boletins de ocorrência (art. 48).",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR), arts. 42 a 48",
  },
  {
    id: "leg-122",
    materia: "leg",
    topico: "Estrutura organizacional da PCPR (delegacias, carreiras, hierarquia)",
    enunciado:
      "Segundo a Lei Estadual nº 23.213/2026, os Departamentos de Polícia Judiciária e Investigação Criminal (como DHPP, DENARC, DRACO, DPV e DRCC) são dirigidos por",
    alternativas: [
      "Delegados de Polícia em atividade, preferencialmente da classe mais elevada da carreira, escolhidos e designados pelo Delegado-Geral.",
      "Delegados eleitos pelos servidores lotados no respectivo departamento.",
      "Delegados obrigatoriamente da classe mais elevada, nomeados pelo Governador.",
      "Agentes de Polícia Judiciária da classe mais elevada, designados pelo Conselho Superior de Polícia.",
      "Delegados aposentados, contratados em cargo em comissão pelo Secretário de Segurança Pública.",
    ],
    correta: 0,
    explicacao:
      "Art. 49 da Lei 23.213: os Departamentos dos incisos I a XII do art. 32 são dirigidos por Delegados de Polícia em atividade, preferencialmente da classe mais elevada, escolhidos e designados pelo Delegado-Geral. A regra tem um acréscimo para o DOESP (art. 40): seu diretor é Delegado com curso específico de Operações Táticas Especiais, escolhido e designado pelo Delegado-Geral. Note o “preferencialmente”, o mesmo termo que a CE-PR usa para o comando da PC (art. 47).",
    explicacaoErradas:
      "Já o Delegado-Geral deve ser da classe mais elevada, sem a palavra “preferencialmente” (art. 11).",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR), arts. 40 e 49",
  },
  {
    id: "leg-123",
    materia: "leg",
    topico: "Estrutura organizacional da PCPR (delegacias, carreiras, hierarquia)",
    enunciado:
      "Quanto ao funcionamento da PCPR, a Lei Estadual nº 23.213/2026 estabelece que",
    alternativas: [
      "se admite a prestação de serviço voluntário, vedada em qualquer caso a atuação na atividade-fim de polícia judiciária, e a classificação das unidades policiais e a distribuição do efetivo são feitas por resolução do Conselho Superior de Polícia.",
      "o serviço voluntário pode alcançar a atividade-fim de polícia judiciária, desde que sob supervisão de Delegado.",
      "a contratação de terceiros é vedada para quaisquer atividades da Polícia Civil, inclusive as administrativas.",
      "a estrutura organizacional interna e as atribuições específicas das unidades são definidas por resolução do Corregedor-Geral.",
      "as unidades policiais são classificadas exclusivamente pela antiguidade de sua criação.",
    ],
    correta: 0,
    explicacao:
      "Lei 23.213: as unidades são classificadas pela localização geográfica, densidade demográfica, demanda e complexidade e necessidade de habilidades específicas, e a classificação e a distribuição do efetivo são feitas por resolução do CSP (art. 53). O serviço voluntário é admitido, vedada em qualquer caso a atuação na atividade-fim de polícia judiciária (art. 58).",
    explicacaoErradas:
      "A estrutura interna e o detalhamento das atribuições dos órgãos são regulamentados por decreto do Governador (art. 56). As atividades administrativas (auxiliares, instrumentais ou acessórias) admitem execução indireta, por contratação de terceiros (art. 57).",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR), arts. 53, 56, 57 e 58",
  },
  {
    id: "leg-124",
    materia: "leg",
    topico: "Estrutura organizacional da PCPR (delegacias, carreiras, hierarquia)",
    enunciado:
      "Um trabalhador morre em acidente de trabalho em uma obra, e em outro caso uma adolescente é vítima de violência praticada pelo padrasto. Pela distribuição de competências da Lei Estadual nº 23.213/2026, as investigações cabem, respectivamente, às unidades subordinadas ao",
    alternativas: [
      "Departamento Estadual de Homicídios e Proteção à Pessoa (DHPP) e ao Departamento Estadual de Proteção a Vulneráveis (DPV).",
      "Departamento Estadual de Polícia Especializada (DPE) e ao Departamento Estadual de Homicídios e Proteção à Pessoa (DHPP).",
      "Departamento de Operações Especiais (DOESP) e ao Departamento de Polícia da Capital (DPCAP).",
      "Departamento Estadual de Proteção a Vulneráveis (DPV) e ao Departamento Estadual de Combate a Crimes Patrimoniais (DCCP).",
      "Departamento Estadual de Combate à Corrupção (DECCOR) e ao Departamento Estadual de Proteção a Vulneráveis (DPV).",
    ],
    correta: 0,
    explicacao:
      "Art. 33 da Lei 23.213: o DHPP coordena as investigações dos crimes dolosos contra a vida, de pessoas desaparecidas, dos crimes contra a saúde pública e dos acidentes de trabalho. Art. 39: o DPV coordena as investigações dos crimes em que são vítimas crianças, adolescentes e mulheres em contexto de violência doméstica, e a apuração dos atos infracionais de adolescentes.",
    explicacaoErradas:
      "Pegadinha: acidente de trabalho fica com o DHPP, não com o DPE, que cuida de trânsito, meio ambiente, consumidor e crimes informáticos (art. 38).",
    origem: "banco",
    fonte: "Lei Estadual 23.213/2026 (PR), arts. 33 e 39",
  },
  {
    id: "leg-125",
    materia: "leg",
    topico: "Constituição do Estado do Paraná — Princípios da Administração Pública",
    enunciado:
      "Em relação aos princípios que regem a administração pública direta, indireta e fundacional de qualquer dos Poderes do Estado e dos Municípios, a Constituição do Paraná, no art. 27, caput, acrescenta aos princípios do art. 37 da Constituição Federal",
    alternativas: [
      "a razoabilidade, a motivação, a economicidade e a probidade.",
      "a supremacia do interesse público e a subsidiariedade administrativa.",
      "a gratuidade, a uniformidade e a universalidade dos serviços públicos.",
      "a continuidade do serviço público e a autotutela administrativa.",
      "a especialidade e a hierarquia funcional entre os Poderes do Estado.",
    ],
    correta: 0,
    explicacao:
      "O art. 27, caput, da Constituição do Paraná repete os princípios do art. 37 da CF (legalidade, impessoalidade, moralidade, publicidade, eficiência) e acrescenta razoabilidade, motivação, economicidade e probidade, que não constam do rol federal.",
    origem: "banco",
    fonte: "Constituição do Estado do Paraná, art. 27",
  },
  {
    id: "leg-126",
    materia: "leg",
    topico: "Constituição do Estado do Paraná — Validade do concurso público",
    enunciado:
      "Segundo o art. 27, III, da Constituição do Estado do Paraná, o prazo de validade do concurso público é de",
    alternativas: [
      "até dois anos, prorrogável uma única vez, por igual período.",
      "até quatro anos, prorrogável uma única vez, por metade do prazo inicial.",
      "até um ano, prorrogável sucessivamente enquanto houver cargos vagos a prover.",
      "até dois anos, sem possibilidade de qualquer prorrogação.",
      "até três anos, prorrogável duas vezes, por igual período cada uma.",
    ],
    correta: 0,
    explicacao:
      "O art. 27, III, fixa o prazo de validade do concurso público em até dois anos, prorrogável uma única vez por igual período — se o concurso previu 1 ano, a prorrogação é de mais 1 ano, e não de 2.",
    origem: "banco",
    fonte: "Constituição do Estado do Paraná, art. 27, III",
  },
  {
    id: "leg-127",
    materia: "leg",
    topico: "Constituição do Estado do Paraná — Provas em concurso público",
    enunciado:
      "Nos concursos públicos promovidos pela Administração Pública do Paraná, o art. 27, §11, da Constituição do Estado estabelece que",
    alternativas: [
      "não haverá prova oral de caráter eliminatório, ressalvada a prova didática para os cargos do magistério.",
      "é admitida prova oral eliminatória em qualquer concurso, desde que prevista expressamente no edital.",
      "não haverá prova de qualquer natureza, nem classificatória nem eliminatória, em nenhum concurso público.",
      "a prova oral eliminatória é vedada apenas nos concursos para cargos de nível superior.",
      "a vedação à prova oral eliminatória se aplica aos concursos federais, mas não aos estaduais.",
    ],
    correta: 0,
    explicacao:
      "O §11 do art. 27 veda a prova oral de caráter eliminatório nos concursos públicos estaduais, ressalvada apenas a prova didática para os cargos do magistério.",
    origem: "banco",
    fonte: "Constituição do Estado do Paraná, art. 27, §11",
  },
  {
    id: "leg-128",
    materia: "leg",
    topico: "Constituição do Estado do Paraná — Subsídio de agentes políticos",
    enunciado:
      "Pelo art. 33, §4º, da Constituição do Estado do Paraná, o membro de Poder, o detentor de mandato eletivo e os Secretários Estaduais e Municipais",
    alternativas: [
      "são remunerados exclusivamente por subsídio fixado em parcela única, vedado o acréscimo de qualquer gratificação, adicional, abono ou verba de representação.",
      "recebem subsídio em parcela única, mas ainda assim podem acumular gratificação de representação durante o exercício do cargo, por força de lei específica.",
      "podem optar, a qualquer tempo, entre o regime de subsídio e o regime de vencimentos com adicionais, conforme a conveniência do Poder a que pertençam.",
      "recebem remuneração variável, vinculada ao desempenho do órgão em que atuam, somada a uma parcela fixa mensal de subsídio.",
      "têm sua remuneração fixada por decreto do Chefe do Poder Executivo, dispensada a edição de lei específica para tanto.",
    ],
    correta: 0,
    explicacao:
      "O §4º do art. 33 exige subsídio em parcela única para membros de Poder, detentores de mandato eletivo e Secretários, vedado qualquer acréscimo de outra espécie remuneratória.",
    origem: "banco",
    fonte: "Constituição do Estado do Paraná, art. 33, §4º",
  },
  {
    id: "leg-129",
    materia: "leg",
    topico: "Constituição do Estado do Paraná — Direitos sociais dos servidores",
    enunciado:
      "Entre os direitos assegurados aos servidores públicos pelo art. 34 da Constituição do Estado do Paraná, estão",
    alternativas: [
      "a jornada normal de trabalho não superior a oito horas diárias e quarenta horas semanais, e férias anuais remuneradas com pelo menos um terço a mais que a remuneração normal.",
      "a jornada normal de trabalho não superior a seis horas diárias e trinta horas semanais, e férias anuais concedidas sem qualquer acréscimo sobre a remuneração normal do servidor.",
      "a jornada de quarenta e quatro horas semanais e férias anuais remuneradas com acréscimo de metade da remuneração normal do servidor público estadual.",
      "a jornada de oito horas diárias, sem qualquer limite semanal fixado em lei, e férias concedidas de dois em dois anos com acréscimo de um terço.",
      "a jornada de trabalho fixada livremente por cada órgão da administração pública, e férias anuais concedidas sem qualquer remuneração adicional.",
    ],
    correta: 0,
    explicacao:
      "O art. 34 assegura jornada de até 8h diárias e 40h semanais e férias anuais com acréscimo de pelo menos 1/3 sobre a remuneração normal, entre outros direitos sociais do servidor.",
    origem: "banco",
    fonte: "Constituição do Estado do Paraná, art. 34",
  },
  {
    id: "leg-130",
    materia: "leg",
    topico: "Constituição do Estado do Paraná — RPPS e aposentadoria voluntária",
    enunciado:
      "Para a aposentadoria voluntária pelo regime próprio de previdência social, o art. 35, §1º, III, da Constituição do Estado do Paraná exige, cumulativamente,",
    alternativas: [
      "62 anos de idade para mulher e 65 para homem, e 25 anos de tempo de contribuição, com no mínimo 10 anos de efetivo exercício no serviço público e 5 anos no cargo efetivo.",
      "60 anos de idade para mulher e 65 para homem, e 30 anos de tempo de contribuição, com no mínimo 15 anos de efetivo exercício no cargo em que será concedida a aposentadoria.",
      "62 anos de idade para ambos os sexos, e 20 anos de tempo de contribuição, sem qualquer exigência de tempo mínimo de exercício no cargo efetivo ocupado.",
      "65 anos de idade para mulher e 70 para homem, e 25 anos de tempo de contribuição, com 10 anos de exercício no cargo efetivo em que se dará a aposentadoria.",
      "62 anos de idade para mulher e 65 para homem, dispensado qualquer tempo mínimo de contribuição previdenciária ao regime próprio de previdência social.",
    ],
    correta: 0,
    explicacao:
      "O art. 35, §1º, III, exige cumulativamente 62/65 anos de idade (mulher/homem) e 25 anos de contribuição, com 10 anos de serviço público e 5 anos no cargo efetivo em que se dará a aposentadoria.",
    origem: "banco",
    fonte: "Constituição do Estado do Paraná, art. 35, §1º, III",
  },
  {
    id: "leg-131",
    materia: "leg",
    topico: "Constituição do Estado do Paraná — Estabilidade do servidor",
    enunciado:
      "Segundo o art. 36 da Constituição do Estado do Paraná, o servidor nomeado para cargo efetivo em virtude de concurso público torna-se estável após três anos de efetivo exercício e, uma vez estável, só perderá o cargo",
    alternativas: [
      "em virtude de sentença judicial transitada em julgado, mediante processo administrativo com ampla defesa, ou mediante procedimento de avaliação periódica de desempenho, na forma de lei complementar federal.",
      "apenas em virtude de sentença judicial transitada em julgado, sendo vedada em qualquer hipótese a perda do cargo por processo administrativo disciplinar ou por avaliação periódica de desempenho do servidor estável.",
      "por decisão discricionária da chefia imediata, independentemente de processo administrativo disciplinar ou de qualquer outra garantia constitucional assegurada ao servidor estável no exercício do cargo.",
      "em virtude de sentença judicial, ainda que não transitada em julgado, desde que haja indícios suficientes da prática da falta funcional disciplinar atribuída ao servidor efetivo e estável.",
      "mediante processo administrativo disciplinar regularmente instaurado, dispensada a ampla defesa sempre que a autoridade competente entender necessária a urgência da apuração dos fatos.",
    ],
    correta: 0,
    explicacao:
      "O art. 36 prevê estabilidade após três anos de efetivo exercício, e a perda do cargo do servidor estável só pode ocorrer por sentença judicial transitada em julgado, PAD com ampla defesa, ou avaliação periódica de desempenho (lei complementar federal).",
    origem: "banco",
    fonte: "Constituição do Estado do Paraná, art. 36",
  },
  {
    id: "leg-132",
    materia: "leg",
    topico: "Constituição do Estado do Paraná — Vedações ao servidor público",
    enunciado:
      "Pelo art. 29 da Constituição do Estado do Paraná, o servidor público que integrar conselho ou diretoria de empresa fornecedora do Estado, ou que com ele realize qualquer modalidade de contrato,",
    alternativas: [
      "está sujeito à pena de demissão do serviço público.",
      "está sujeito apenas à advertência, por se tratar de conduta de menor gravidade.",
      "pode ser autorizado a continuar, desde que informe a situação ao órgão de controle interno.",
      "responde civilmente pelos prejuízos causados, mas não perde o cargo público.",
      "fica apenas impedido de participar de novas licitações, mantendo o cargo e a função no conselho.",
    ],
    correta: 0,
    explicacao:
      "O art. 29 veda ao servidor integrar conselho ou diretoria de empresa que forneça ou contrate com o Estado, sob pena de demissão do serviço público.",
    origem: "banco",
    fonte: "Constituição do Estado do Paraná, art. 29",
  },
  {
    id: "leg-133",
    materia: "leg",
    topico: "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR) — Disposições gerais",
    enunciado:
      "Para os fins da Lei Estadual nº 23.213/2026, a expressão Polícia Civil do Estado do Paraná equivale, para todos os efeitos legais, à expressão",
    alternativas: [
      "Polícia Judiciária do Estado do Paraná, identificando a mesma instituição, cuja sigla é PCPR.",
      "Polícia Judiciária Federal, por desempenharem funções equivalentes em esferas distintas.",
      "Departamento de Polícia Técnico-Científica, unidade autônoma vinculada à Secretaria de Segurança.",
      "Secretaria de Estado da Segurança Pública, por integrarem a mesma estrutura hierárquica superior.",
      "Comando-Geral da Polícia Militar, no que se refere às atividades de policiamento preventivo.",
    ],
    correta: 0,
    explicacao:
      "O parágrafo único do art. 1º equipara, para os fins da Lei 23.213, as expressões Polícia Civil do Estado do Paraná e Polícia Judiciária do Estado do Paraná, ambas identificando a PCPR.",
    origem: "banco",
    fonte: "Lei Estadual nº 23.213/2026 (Lei Orgânica da PCPR), art. 1º, parágrafo único",
  },
  {
    id: "leg-134",
    materia: "leg",
    topico: "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR) — Competências",
    enunciado:
      "Segundo o parágrafo único do art. 6º da Lei Estadual nº 23.213/2026, as funções e competências da Polícia Civil do Estado do Paraná",
    alternativas: [
      "são irrenunciáveis e indelegáveis, somente podendo ser desempenhadas por ocupantes das carreiras que a integram.",
      "podem ser delegadas a servidores de outros órgãos de segurança pública, mediante convênio.",
      "são irrenunciáveis, mas podem ser delegadas a terceirizados para atividades de apoio administrativo.",
      "podem ser renunciadas pelo Delegado-Geral, mediante ato fundamentado e aprovação do CSP.",
      "são exercidas em caráter concorrente com a Polícia Militar, nos limites da competência desta.",
    ],
    correta: 0,
    explicacao:
      "O parágrafo único do art. 6º torna as funções e competências da PCPR irrenunciáveis e indelegáveis, restritas aos ocupantes das carreiras que a integram.",
    origem: "banco",
    fonte: "Lei Estadual nº 23.213/2026 (Lei Orgânica da PCPR), art. 6º, parágrafo único",
  },
  {
    id: "leg-135",
    materia: "leg",
    topico: "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR) — Conselho Superior de Polícia",
    enunciado:
      "Nos termos do art. 16 da Lei Estadual nº 23.213/2026, o Conselho Superior de Polícia (CSP) é órgão",
    alternativas: [
      "diretivo, consultivo, normativo, deliberativo e sancionador, para fins de controle do ingresso, promoção, hierarquia, disciplina e honrarias da carreira policial.",
      "meramente consultivo, sem qualquer poder deliberativo ou sancionador sobre o ingresso, a promoção ou a disciplina da carreira policial civil.",
      "exclusivamente sancionador, não lhe cabendo qualquer função normativa, deliberativa ou consultiva sobre a carreira policial civil.",
      "vinculado hierarquicamente à Secretaria de Estado da Segurança Pública, sem autonomia deliberativa própria sobre a carreira policial.",
      "de natureza jurisdicional, com competência para processar e julgar crimes praticados por integrantes da carreira policial civil.",
    ],
    correta: 0,
    explicacao:
      "O art. 16 classifica o CSP como órgão diretivo, consultivo, normativo, deliberativo e sancionador, para controle do ingresso, promoção, hierarquia, disciplina e honrarias da carreira policial civil.",
    origem: "banco",
    fonte: "Lei Estadual nº 23.213/2026 (Lei Orgânica da PCPR), art. 16",
  },
  {
    id: "leg-136",
    materia: "leg",
    topico: "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR) — Conselheiros",
    enunciado:
      "Pelo art. 20 da Lei Estadual nº 23.213/2026, somente poderão ser candidatos a Conselheiro da Polícia Civil do Estado do Paraná os policiais que",
    alternativas: [
      "não respondam a procedimentos disciplinares por fatos graves, ações de improbidade administrativa ou ação penal, e não tenham sido condenados em processo disciplinar ou criminal nos últimos cinco anos.",
      "estejam na ativa há pelo menos dez anos na carreira policial civil do Estado, independentemente de antecedentes disciplinares, administrativos ou criminais pregressos de qualquer natureza.",
      "tenham sido indicados pessoalmente pelo Delegado-Geral da Polícia Civil, ainda que respondam a procedimento disciplinar em curso por fato considerado grave.",
      "pertençam à classe mais elevada da carreira de Delegado de Polícia, ainda que tenham sido condenados administrativamente nos últimos dez anos de carreira.",
      "não tenham sido condenados criminalmente em nenhuma hipótese, independentemente de procedimentos disciplinares que ainda estejam em curso na corregedoria.",
    ],
    correta: 0,
    explicacao:
      "O art. 20 exige que o candidato a Conselheiro não responda a procedimento disciplinar por fatos graves, improbidade ou ação penal, e não tenha sido condenado administrativa ou criminalmente nos últimos cinco anos.",
    origem: "banco",
    fonte: "Lei Estadual nº 23.213/2026 (Lei Orgânica da PCPR), art. 20",
  },
  {
    id: "leg-137",
    materia: "leg",
    topico: "Lei Estadual 23.213/2026 (Lei Orgânica da PCPR) — Diretrizes",
    enunciado:
      "Entre as diretrizes a serem observadas pela Polícia Civil do Estado do Paraná, nos termos do art. 5º da Lei Estadual nº 23.213/2026, estão",
    alternativas: [
      "a atuação cooperativa, sistêmica e harmônica junto aos demais órgãos do Sistema Único de Segurança Pública, e a publicidade dos atos de polícia judiciária, ressalvados os casos em que o sigilo seja imprescindível.",
      "a atuação isolada e autônoma da Polícia Civil em relação aos demais órgãos de segurança pública, para preservar a especialização técnica da investigação policial civil estadual.",
      "o sigilo absoluto de todos os atos de polícia judiciária e investigativa, vedada em qualquer hipótese a publicidade desses atos perante o público em geral, os órgãos de controle e o Poder Judiciário.",
      "a subordinação operacional plena da Polícia Civil aos demais órgãos do Sistema Único de Segurança Pública, inclusive à Polícia Militar e ao Corpo de Bombeiros do Estado.",
      "a vedação à criação de base de dados própria pela Polícia Civil, em razão da obrigatoriedade legal de uso exclusivo de sistemas federais de informação criminal.",
    ],
    correta: 0,
    explicacao:
      "O art. 5º fixa como diretrizes, entre outras, a atuação cooperativa, sistêmica e harmônica com os órgãos do SUSP e a publicidade dos atos de polícia judiciária e investigativa, ressalvado o sigilo imprescindível à segurança.",
    origem: "banco",
    fonte: "Lei Estadual nº 23.213/2026 (Lei Orgânica da PCPR), art. 5º",
  },
];
