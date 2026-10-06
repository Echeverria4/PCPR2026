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
      "Art. 30 da Lei 21.894: o PAD é instaurado por determinação do Conselho Superior de Polícia ou do Governador, conhecidas a autoria e a materialidade. O prazo é de 120 dias, prorrogáveis por igual período, ou por prazo fixado pelo Corregedor-Geral nos casos de maior complexidade (§1º). Art. 31: o PAD começa por portaria do Corregedor-Geral, que designa a presidência entre delegados estáveis lotados na Corregedoria-Geral. Os 60 dias são da Investigação Preliminar (art. 28), usada quando a infração ou a autoria ainda não estão claras.",
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
      "A Polícia Civil, no âmbito estadual, tem como função constitucional principal, ressalvada a competência da União:",
    alternativas: [
      "Realizar exclusivamente o policiamento ostensivo e a preservação da ordem pública",
      "Exercer as funções de polícia judiciária e a apuração de infrações penais, exceto as militares",
      "Controlar o trânsito em rodovias estaduais",
      "Fiscalizar exclusivamente crimes ambientais",
      "Substituir o Ministério Público na promoção da ação penal",
    ],
    correta: 1,
    explicacao:
      "Conforme o art. 144, §4º, da Constituição Federal, às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, exceto as militares.",
    origem: "banco",
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
      "Legalidade, na vertente da tipicidade: na Lei 21.894, o art. 8º enumera as transgressões e já indica a pena de cada uma (por exemplo, o inciso LXIII pune o abandono de cargo com demissão), e o art. 15 lista as 5 penas possíveis. A proporcionalidade também aparece na lei, na dosimetria, com atenuantes (art. 17) e agravantes (art. 18), mas não é o princípio que exige a previsão prévia da conduta.",
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
      "O art. 123 da Lei 6.174 lista as causas de vacância: exoneração, demissão, promoção e acesso, transferência, readaptação, aposentadoria e nomeação para outro cargo (com as ressalvas das alíneas, como a acumulação legal). Remoção e licença não deixam o cargo vago: o servidor continua titular dele.",
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
      "A Constituição do Estado do Paraná apresenta uma peculiaridade na estruturação de sua segurança pública em relação a diversos outros entes federativos: ela prevê, como órgão próprio integrante do sistema de segurança pública estadual, além da Polícia Civil e da Polícia Militar:",
    alternativas: [
      "A Guarda Municipal, com atribuições de polícia judiciária",
      "A Polícia Científica, como órgão autônomo",
      "A Polícia Rodoviária Estadual, com competência de trânsito federal",
      "A Polícia Penal, subordinada à Polícia Civil",
      "O Corpo de Bombeiros Civil, distinto do Corpo de Bombeiros Militar",
    ],
    correta: 1,
    explicacao:
      "A Constituição do Estado do Paraná prevê a Polícia Científica como órgão próprio da estrutura de segurança pública estadual — peculiaridade paranaense, já que em diversos outros estados a perícia criminal está vinculada organicamente à Polícia Civil, sem autonomia institucional própria.",
    origem: "banco",
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
      "Art. 3º, §2º, da LC 259: “É vedado aos Policiais Civis o exercício legal de outras atividades remuneradas, ressalvado o magistério.” A ressalva conversa com o art. 37, XVI, da CF, que também excepciona o magistério na acumulação de cargos. Exercer fora do expediente não afasta a vedação.",
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
      "Art. 20 da LC 259: no concurso regionalizado, o servidor deve permanecer pelo período mínimo de 3 anos em unidades da macrorregião para a qual concorreu, “sob pena de contagem em dobro do prazo para a promoção para o nível III”. A consequência é só na carreira (a promoção demora mais), sem punição disciplinar nem perda do cargo.",
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
      "Art. 10 da Lei 23.213. Direção Superior: Delegacia-Geral, Conselho Superior de Polícia (CSP) e Corregedoria-Geral de Polícia (CGP). Assessoramento: Chefia de Gabinete, Assessorias Técnicas, DIP e DCI. Instrumental: COI, ESPC, DPAF e DTI. Execução: Instituto de Identificação e os departamentos e unidades de polícia judiciária. A SESP e a PM não integram a estrutura da PCPR.",
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
      "Art. 5º, §1º, da Lei 12.037 (redação da Lei 15.295/2025): nas hipóteses dos incisos IV e VII do art. 3º, a identificação criminal incluirá a coleta de material biológico para o perfil genético. O inciso IV é a identificação essencial às investigações, por despacho do juiz. O inciso VII é o recebimento da denúncia por crime com grave violência contra a pessoa, crime contra a liberdade sexual ou sexual contra vulnerável, crimes dos arts. 240 a 241-C do ECA ou organização criminosa armada. O §2º estende a coleta à prisão em flagrante por esses crimes. Nas demais hipóteses do art. 3º, como rasura ou documento insuficiente, a identificação é só datiloscópica e fotográfica.",
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
      "Art. 3º da LC 259: as carreiras são Delegado de Polícia, Agente de Polícia Judiciária, Papiloscopista Policial e Agente de Operações Policiais (em extinção). Pelo art. 76, os cargos de Escrivão e Investigador, vagos e ocupados, foram transformados no cargo de Agente de Polícia Judiciária. Pelo art. 77, o Agente absorveu os direitos, deveres, prerrogativas e atribuições das duas carreiras antigas.",
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
      "Arts. 2º e 11 da Lei 23.213: a PCPR é dirigida por Delegado de Polícia em atividade e da classe mais elevada, nomeado pelo Governador, e tem como chefe o Delegado-Geral. Ele também preside o Conselho Superior de Polícia (art. 17, I), e a Delegacia-Geral integra a Direção Superior (art. 10, I). O Secretário da SESP é autoridade do Executivo e não chefia a carreira policial civil.",
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
      "O art. 291 da Lei 6.174 tem 7 penas: advertência, repreensão, suspensão, multa, destituição de função, demissão e cassação de aposentadoria ou disponibilidade. A alternativa sem advertência descreve o Código Disciplinar da PCPR (Lei 21.894, art. 15), que tem 5 penas: repreensão, suspensão, demissão e as duas cassações. A prisão administrativa do Estatuto (art. 302) não é pena disciplinar: cabe ao responsável por dinheiro público em caso de alcance.",
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
      "Art. 285, IV, da Lei 6.174. Outras proibições muito cobradas: receber propinas, comissões, presentes e vantagens em razão do cargo (X); revelar fato sigiloso, salvo em depoimento em processo judicial, policial ou administrativo (XI); deixar de comparecer ao trabalho sem causa justificada (XV); usar bens do Estado em serviço particular (XVII); incitar greves ou aderir a elas (XIX). As demais alternativas são deveres do art. 279 (incisos XVI, VIII, IX e VII).",
    origem: "banco",
    fonte: "Lei Estadual 6.174/1970 (PR)",
  },
  {
    id: "leg-020",
    materia: "leg",
    topico: "Alterações legislativas de 2025/2026 na estrutura da Polícia Civil do PR",
    enunciado:
      "A norma que trata do regime jurídico da carreira policial civil do Paraná, com destaque por ser uma das legislações mais recentes listadas no edital, é a:",
    alternativas: [
      "Lei Estadual 6.174/1970.",
      "Lei Complementar Estadual 259/2023.",
      "Constituição Estadual do Paraná de 1989.",
      "Lei Federal 13.964/2019 (Pacote Anticrime).",
      "Decreto-Lei 3.689/1941 (CPP).",
    ],
    correta: 1,
    explicacao:
      "A Lei Complementar Estadual 259/2023 trata do regime jurídico da carreira policial civil do Paraná e é uma das normas mais recentes expressamente listadas no edital, o que a torna alvo preferencial de cobrança, já que bancas como a FGV tendem a testar os dispositivos mais novos, e não apenas a redação original de leis mais antigas como o Estatuto de 1970.",
    origem: "banco",
  },
  {
    id: "leg-021",
    materia: "leg",
    topico: "Alterações legislativas de 2025/2026 na estrutura da Polícia Civil do PR",
    enunciado:
      "Diante da tendência histórica de bancas examinadoras, como a FGV, cobrarem a legislação mais recentemente publicada sobre a estrutura da Polícia Civil do Paraná, a estratégia de estudo mais adequada é:",
    alternativas: [
      "Ignorar normas publicadas após a divulgação do edital, pois não podem ser cobradas.",
      "Revisar, próximo à data da prova, eventuais alterações pontuais publicadas no Diário Oficial do Estado que ainda não constem do material de estudo inicial.",
      "Estudar apenas a redação original das leis mais antigas, sem verificar alterações.",
      "Memorizar exclusivamente o texto da Constituição Federal, que prevalece sobre normas estaduais.",
      "Desconsiderar leis complementares, pois não integram a legislação orgânica.",
    ],
    correta: 1,
    explicacao:
      "Como o próprio edital já lista normas recentes entre os tópicos oficiais (como a LC 259/2023 e a Lei 23.213/2026), a tendência histórica da FGV é cobrar justamente os dispositivos mais novos. Por isso, vale revisar, próximo à data do exame, se houve alguma alteração pontual publicada no Diário Oficial do Estado que ainda não constava do material de estudo inicial — desconsiderar normas recentes ou legais complementares seria estratégia contrária ao próprio padrão de cobrança da banca.",
    origem: "banco",
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
      "Art. 27 da Lei 14.735: o oficial investigador atua \"sob determinação ou coordenação do delegado de polícia\", com atuação técnica e científica nos limites de suas atribuições. O parágrafo único manda produzir o laudo investigativo e as demais peças e encaminhá-los ao delegado para apreciação. A presidência do inquérito é do delegado (art. 26, parágrafo único), e o perito é que atua sob requisição do delegado (art. 28).",
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
      "Art. 10 da Lei 14.735: a Corregedoria-Geral é \"dotada de autonomia em suas atividades\". O Corregedor-Geral é designado pelo Delegado-Geral entre os delegados da classe mais elevada (§1º). Quem foi lotado na Corregedoria tem facultada lotação subsequente em unidade administrativa por no mínimo 1 ano (§2º). Na pena de demissão, há duplo grau de revisão, com recurso ao Conselho Superior e, em última instância, ao Chefe do Executivo (§3º).",
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
      "Art. 20 da Lei 14.735: os cargos são de nível superior, e os requisitos gerais são ser brasileiro, ter no mínimo 18 anos, estar quite com as obrigações eleitorais e militares e ter capacidade física e mental. Para o oficial investigador, basta graduação em qualquer área (§1º). O bacharelado em Direito com 3 anos de atividade jurídica ou policial é exigido do delegado (§3º), e é no concurso de delegado que a OAB participa de todas as fases.",
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
      "Art. 30, IV, da Lei 14.735 garante o recolhimento em unidade prisional da própria instituição. O mesmo artigo assegura ainda identidade funcional e porte de arma com validade nacional (I e II), livre trânsito em razão da função (III), pronta comunicação da prisão ao chefe imediato (V), precedência em audiências como testemunha de fato do serviço (IX) e jornada não superior a 40 horas semanais (XIX). A lei não cria imunidade à prisão nem foro especial.",
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
      "Art. 8º da Lei 14.735: o chefe é o Delegado-Geral, nomeado pelo governador entre os delegados em atividade da classe mais elevada. O parágrafo único exige planejamento estratégico em até 30 dias da nomeação. O Conselho Superior é presidido pelo Delegado-Geral e tem representantes de todos os cargos (art. 9º). A lei orgânica estadual é de iniciativa do governador (art. 3º). As polícias civis são integrantes operacionais do Susp (art. 2º).",
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
      "Art. 15 da Lei 21.894: são 5 penas, e não existe advertência. A repreensão é sempre aplicada por escrito, publicada e anotada no assentamento (art. 19). Advertência, multa e destituição de função são penas do Estatuto (Lei 6.174, art. 291), e é aí que a FGV costuma montar a pegadinha.",
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
      "Art. 20 da Lei 21.894: a suspensão acarreta a perda de metade do subsídio, por dia, e não pode exceder 90 dias. O parágrafo único manda recolher a arma, o conjunto documental e os bens acautelados enquanto durar a pena. A conversão em multa de 50% é regra do Estatuto (Lei 6.174, art. 293, §5º), e o Código Disciplinar da PCPR não prevê multa.",
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
      "Art. 62 da Lei 21.894: 2 anos para a transgressão punível com repreensão ou suspensão e 5 anos para a punível com demissão ou cassação. Se a pena prevista vai de suspensão a demissão, o prazo é de 5 anos (§1º), mas cai para 2 anos se a suspensão for a pena aplicada (§2º). Pelo art. 63, o prazo conta do dia da consumação, e, nas transgressões permanentes ou continuadas, do dia em que cessaram. Os 4 anos são do Estatuto (Lei 6.174, art. 301).",
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
      "Art. 25 da Lei 21.894: o Governador aplica, originariamente, a demissão e a cassação de aposentadoria ou disponibilidade (I). O Conselho Superior de Polícia aplica, originariamente, repreensão e suspensão (III). O Secretário da Segurança Pública atua em grau recursal sobre repreensão e suspensão (II). O Corregedor-Geral instaura e conduz a apuração, mas não aplica pena.",
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
      "Art. 72, §4º, da Lei 21.894: o descumprimento impede novo TAC, sobre qualquer objeto, por 5 anos, contados da decisão do Corregedor-Geral que declarar o descumprimento. Além disso, a chefia comunica o fato ao Corregedor-Geral para instaurar ou retomar o procedimento disciplinar (art. 72, §2º), e a inobservância do TAC sujeita o servidor a procedimento disciplinar autônomo (art. 70, §2º). Não confunda: o prazo de 2 anos é o requisito para quem já firmou TAC (art. 66, II). O TAC dura no máximo 2 anos (art. 70, §1º), e o cumprimento leva ao arquivamento (art. 72, §5º).",
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
      "Art. 8º da Lei 21.894. Inciso LXIV: ausência comprovada, sem causa justificada, por mais de 45 dias não consecutivos no período de um ano, punida com demissão. Inciso LXIII: abandono de cargo, que é a ausência sem justa causa por 30 dias consecutivos, também punida com demissão. Compare com o Estatuto (Lei 6.174, art. 293, §§1º e 2º): abandono com 30 dias consecutivos e inassiduidade com 60 faltas interpoladas em 12 meses.",
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
      "Art. 55 da Lei 21.894: cabe recurso por uma única vez, com efeito suspensivo, em 10 dias úteis da intimação, ao Secretário da Segurança Pública, contra as penas aplicadas originariamente pelo Conselho Superior de Polícia. O recurso é protocolado no próprio Conselho, que pode se retratar em matéria de ordem pública (§1º), e o Secretário decide em 30 dias (§4º). No Estatuto (Lei 6.174, art. 264), o recurso não tem efeito suspensivo.",
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
      "Art. 58 da Lei 21.894: a revisão cabe a qualquer tempo, diante de novas provas de inocência ou de circunstância que permita atenuar a pena. Não servem como fundamento a simples alegação de injustiça, a mera reapreciação da prova e a absolvição criminal por insuficiência de provas (§1º). A pena não pode ser agravada (§4º). O pedido vai ao Presidente do Conselho Superior de Polícia (art. 59), e a revisão procedente pode absolver, mudar a pena ou anular o processo (art. 61).",
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
      "Art. 106 da Lei 6.174: reintegração é o reingresso decorrente de decisão administrativa ou judiciária, com ressarcimento dos vencimentos e vantagens. Readmissão (art. 103) é o reingresso do exonerado ou do demitido sem ressarcimento. Reversão (art. 114) é a volta do aposentado quando os motivos da aposentadoria deixam de existir. Aproveitamento (art. 110) é a volta do servidor em disponibilidade. Readaptação (art. 119) é a passagem para cargo mais compatível com a capacidade física ou intelectual e a vocação.",
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
      "Art. 293 da Lei 6.174: advertência verbal na mera negligência (I). Repreensão por escrito na desobediência, na falta de cumprimento dos deveres e na reincidência em falta punida com advertência (II). Suspensão de até 90 dias na falta grave, na infração às proibições e na reincidência em falta punida com repreensão (III). O Código Disciplinar da PCPR (Lei 21.894) não tem advertência.",
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
      "Art. 293, §2º, da Lei 6.174: 60 dias interpolados em 12 meses, sem causa justificada, levam à demissão. O abandono de cargo é a ausência sem justa causa por 30 dias consecutivos (§1º). No Código Disciplinar da PCPR, a regra é mais rígida: mais de 45 dias não consecutivos em um ano já levam à demissão (Lei 21.894, art. 8º, LXIV).",
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
      "Art. 301 da Lei 6.174: prescreve em 2 anos a falta sujeita a repreensão ou suspensão e em 4 anos a sujeita a demissão, destituição de função ou cassação. A falta que também é crime prescreve junto com o crime (parágrafo único). No Código Disciplinar da PCPR, a demissão prescreve em 5 anos (Lei 21.894, art. 62, II).",
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
      "Art. 240 da Lei 6.174: só o funcionário estável pode obtê-la, sem vencimento. Ele aguarda em exercício a concessão (§1º), e a licença dura no máximo 2 anos contínuos, com intervalo de 2 anos para nova licença (§2º). Ela não é concedida quando for inconveniente para o serviço, nem ao nomeado, removido ou transferido antes de assumir o exercício (art. 241). O funcionário pode desistir a qualquer tempo (art. 242), e a licença pode ser cassada por interesse público, com retorno em 30 dias (art. 243).",
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
      "Art. 265 da Lei 6.174: 5 anos para atos de que decorram demissão, aposentadoria ou sua cassação e disponibilidade, e 120 dias nos demais casos. O prazo conta da publicação oficial do ato ou, se o ato for reservado, da ciência do interessado (art. 266). O pedido de reconsideração e o recurso interrompem a prescrição até duas vezes (art. 267), e os prazos são improrrogáveis (art. 268).",
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
      "Art. 264 da Lei 6.174: o pedido de reconsideração e o recurso não têm efeito suspensivo, e o que for provido retroage à data do ato impugnado. Eles interrompem a prescrição até duas vezes (art. 267). No Código Disciplinar da PCPR é o contrário: o recurso contra as penas do Conselho Superior tem efeito suspensivo (Lei 21.894, art. 55).",
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
      "Art. 296 da Lei 6.174: o Governador aplica qualquer pena e, de forma privativa, a demissão e a cassação de aposentadoria e disponibilidade (I). Os Secretários de Estado aplicam todas, salvo as privativas do Governador (II). Os chefes de unidades aplicam advertência, repreensão, suspensão até 30 dias e multa correspondente (III). A destituição de função cabe a quem fez a designação (§2º).",
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
      "A Lei 21.894/2024 é o Código Disciplinar da PCPR: prevê Investigação Preliminar e PAD (art. 27), com o PAD presidido por delegados da Corregedoria (art. 31). A Lei 23.213/2026 dá à Corregedoria-Geral, com exclusividade, a apuração das transgressões dos policiais civis (art. 21, I). O Estatuto (Lei 6.174) continua valendo no que a legislação da PCPR não regula, mas seus artigos sobre processo administrativo (arts. 306 a 310) foram revogados pela Lei 20.656/2021. A LC 14/1982 foi revogada pela Lei 23.213. A Lei 8.112 é federal.",
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
      "Art. 49 da LC 259. A estabilidade é requisito só para o nível II (I). A capacitação, após 2 anos de efetivo exercício em cada nível, leva aos níveis III, IV, V, VII, VIII, IX e XI (II). O nível VI do Agente e do AOP exige o Curso de Técnicas de Investigação Policial e Procedimentos de Polícia Judiciária, com nota mínima 7,0 (IV, a). O nível X exige o Curso de Aperfeiçoamento Policial em Planejamento e Gestão de Segurança Pública (IV, b).",
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
      "Art. 72, §3º, da LC 259. O Agente pode requisitar auxílio de autoridades e elaborar expedientes requisitando informações e diligências, sempre em cumprimento de determinação do Delegado (I e II). Exerce atribuições apuratórias, cartorárias e investigativas sob determinação ou coordenação do Delegado (III). E produz o laudo investigativo e as demais peças, que vão ao Delegado para apreciação (IV, incluído pela LC 289/2025). A presidência do inquérito é exclusiva do Delegado (art. 5º).",
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
      "Art. 60 da LC 259: não será promovido quem, na data de abertura do processo, registre repreensão nos 90 dias anteriores (V, redação da LC 289/2025) ou suspensão nos 2 anos anteriores (VI). Também impedem a promoção: 6 ou mais faltas não abonadas em 12 meses (I); responder a procedimento por fato de excepcional gravidade punível com suspensão de 60 dias ou mais ou com demissão (II); e condenação criminal transitada em julgado e não reabilitada (VII).",
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
      "Art. 70 da LC 259: o afastamento remunerado é para o policial estável, no interesse e a critério da Administração. Quem concede é o Conselho Superior; se o curso for no exterior, o pedido segue ao Governador (§1º). O limite é de 6 meses, e mestrado, doutorado e pós-doutorado podem chegar a 2 anos (§2º). O afastamento é deferido uma única vez para cada nível de curso (§4º).",
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
      "Art. 26 da LC 259: o policial removido tem até 3 dias úteis para entrar em exercício em unidade da mesma sede e até 8 dias úteis quando for outro município. Ao fim de licença para interesses particulares e na reintegração e na reversão, o prazo é de até 15 dias, contados do término.",
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
      "Art. 25 da LC 259: a posse ocorre em 30 dias da publicação oficial do ato de provimento, prorrogáveis uma vez por igual período, a requerimento do interessado e a juízo da autoridade. Sem posse no prazo, a nomeação é tornada sem efeito (parágrafo único). Não há demissão nem exoneração, porque ainda não há vínculo: a posse é o ato que completa a investidura (art. 22).",
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
      "Art. 66 da LC 259: a ajuda de custo não é paga ao recém-admitido nomeado para local diferente de onde reside. Pelo art. 65, ela vale uma remuneração mensal (§1º). O servidor deve comprovar a mudança em até 90 dias da portaria (§2º). É paga uma vez a cada 2 anos, salvo remoção por interesse da Administração justificada pelo Delegado-Geral (§3º). E não é paga se o servidor obtiver autorização do Conselho Superior para continuar residindo na origem (§4º).",
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
      "Art. 10, II, da Lei 23.213: o Assessoramento reúne Chefia de Gabinete, Assessorias Técnicas, DIP e DCI, e presta assessoria direta ao Delegado-Geral (§2º). O DIP e o DCI são subordinados diretamente ao Delegado-Geral (arts. 24 e 25). A ESPC, a COI, o DPAF e o DTI ficam no nível Instrumental. O Instituto de Identificação e as unidades de polícia judiciária, como o DOESP, ficam na Execução.",
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
      "Art. 21 da Lei 23.213. Cabe à CGP apurar com exclusividade as transgressões disciplinares (I) e, preferencialmente, as infrações penais atribuídas a policiais civis, podendo designar autoridades de fora da Corregedoria (II). Ela também designa os presidentes dos procedimentos entre os Delegados nela lotados (III) e celebra TAC só nas infrações de menor potencial ofensivo (XVI). A demissão é aplicada pelo Governador (Lei 21.894, art. 25, I).",
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
      "Art. 51 da Lei 23.213: é vedada a avocação de inquérito, e a unidade especializada pode atuar em regime de cooperação, se o interesse público o exigir. A exceção do parágrafo único: se houver inobservância dos procedimentos que prejudique a eficácia e a agilidade da investigação, o superior hierárquico pode avocar ou redistribuir o inquérito, por despacho fundamentado. No caso, a investigação corre regularmente, então vale a regra.",
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
      "Art. 54 da Lei 23.213. Para criar uma unidade, exigem-se distrito-sede do município, população de pelo menos 30 mil habitantes e no mínimo 500 boletins de ocorrência criminais no ano (I). Para instalá-la, prédio e efetivo (II). O CSP analisa as condições (§1º) e pode dispensá-las por distância ou dificuldade de acesso (§3º), e todo município sede de comarca terá DP (§2º). A extinção é proposta pelo CSP ao Delegado-Geral (§4º). Em município com menos de 30 mil habitantes que não seja sede de comarca, cabe Posto Policial de Atendimento ao Cidadão (PPAC), com autorização prévia do CSP (art. 55).",
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
      "Art. 40 da Lei 23.213: o DOESP é dirigido por Delegado com curso de Operações Táticas Especiais, designado pelo Delegado-Geral, e cuida de situações críticas e resgate de reféns (I), apoio tático-operacional (II) e investigação de sequestros e extorsões mediante sequestro (III). Os crimes cibernéticos ficam com o DRCC (art. 41), a disciplina com a Corregedoria (art. 21) e a identificação com o Instituto de Identificação. A perícia criminal é da Polícia Científica, fora da PCPR.",
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
      "Art. 7º da Lei 23.213: a investigação tem caráter técnico, científico e jurídico, vai da notícia da infração penal ao relatório final apresentado ao Judiciário e inclui a formalização das provas, a pesquisa de autoria e materialidade, o gerenciamento de crises e o encaminhamento à rede de proteção. Quando não for possível investigar várias infrações ao mesmo tempo, o Delegado deve dar prioridade às de maior potencial ofensivo (parágrafo único).",
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
      "Art. 6º, V, da Lei 23.213: a PCPR cadastra os custodiados recolhidos durante o tempo indispensável à lavratura do flagrante, com encaminhamento obrigatório ao sistema prisional logo após o ato. A regra acompanha a Lei 14.735, que veda a custódia de preso e de adolescente infrator nas dependências da polícia civil, salvo interesse fundamentado da investigação (art. 40).",
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
      "Art. 9º-A da LEP, na redação da Lei 15.295/2025, em vigor desde janeiro de 2026: o critério passou a ser a pena e o regime, e não mais o tipo de crime. Todo condenado à reclusão em regime inicial fechado tem o DNA colhido ao ingressar no estabelecimento prisional, por técnica adequada e indolor. A redação de 2012 falava em crimes hediondos e dolosos com violência grave, e a de 2019 em crimes violentos, contra a vida e sexuais. Quem não foi identificado no ingresso deve sê-lo durante o cumprimento da pena (§4º), e a recusa do condenado constitui falta grave (§8º).",
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
      "Art. 7º-A da Lei 12.037, na redação da Lei 13.964/2019: o perfil é excluído (I) na absolvição do acusado; ou (II) na condenação, mediante requerimento, depois de 20 anos do cumprimento da pena. A redação original, de 2012, ligava a exclusão ao prazo de prescrição do delito, e é justamente essa a pegadinha mais comum.",
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
      "Art. 7º da Lei 12.037: no caso de não oferecimento da denúncia, de sua rejeição ou de absolvição, é facultado ao indiciado ou ao réu, após o arquivamento definitivo do inquérito ou o trânsito em julgado da sentença, requerer a retirada da identificação fotográfica do inquérito ou processo, desde que apresente provas de sua identificação civil. É uma faculdade, que depende de requerimento.",
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
      "Art. 1º, §1º, da Lei 13.869: as condutas só são crime quando praticadas com a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal. É o chamado dolo específico. Não há modalidade culposa. O §2º completa a ideia: a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso.",
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
      "Art. 15-A da Lei 13.869 (incluído pela Lei 14.321/2022): pena de detenção de 3 meses a 1 ano e multa. Pelo §1º, se o agente público permitir que terceiro intimide a vítima de crimes violentos, gerando revitimização, a pena é aumentada de 2/3. Pelo §2º, se o próprio agente intimidar a vítima, a pena é aplicada em dobro. Qualquer agente público pode praticá-lo, inclusive na fase policial.",
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
      "Art. 38 da Lei 13.869: é crime o responsável pelas investigações antecipar, por meio de comunicação, inclusive rede social, atribuição de culpa, antes de concluídas as apurações e formalizada a acusação. A pena é de detenção de 6 meses a 2 anos e multa. Expor o preso à curiosidade pública mediante violência ou grave ameaça é outro crime (art. 13, I).",
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
      "Art. 8º da Lei 13.869: faz coisa julgada no âmbito cível e no administrativo-disciplinar a sentença penal que reconhecer que o ato foi praticado em estado de necessidade, legítima defesa, estrito cumprimento de dever legal ou exercício regular de direito. A regra geral é a independência das esferas (arts. 6º e 7º), mas não se pode mais discutir a existência ou a autoria do fato quando já decididas no juízo criminal.",
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
      "Art. 2º da Lei 13.869: é sujeito ativo qualquer agente público, servidor ou não, da administração direta, indireta ou fundacional de qualquer dos Poderes da União, dos Estados, do Distrito Federal, dos Municípios e de Território, incluindo servidores e militares, membros do Legislativo, do Executivo, do Judiciário, do Ministério Público e dos tribunais ou conselhos de contas. Pelo parágrafo único, agente público é todo aquele que exerce, ainda que transitoriamente ou sem remuneração, mandato, cargo, emprego ou função.",
    origem: "banco",
    fonte: "Lei 13.869/2019",
  },
];
