import type { SubjectId } from "../lib/types";

/**
 * Leis citadas no curso (aulas, aulões, TAQ e cadernos de lei seca), por matéria.
 * Resumos escritos por nós. Item 25.15 do edital: só cai legislação em vigor até 03/07/2026.
 */
export interface LeiCurso {
  norma: string;
  nome: string;
  /** caderno = lei seca com caderno próprio no curso; aula = estudada nas aulas; novidade = alteração de 2024–2026 */
  fonte: "caderno" | "aula" | "novidade";
  resumo: string;
  alerta?: string;
}

export const LEIS_CURSO: Partial<Record<SubjectId, LeiCurso[]>> = {
  ti: [
    {
      norma: "Lei 12.965/2014",
      nome: "Marco Civil da Internet",
      fonte: "caderno",
      resumo:
        "Neutralidade de rede (art. 9º). O provedor de conexão guarda os registros de conexão por 1 ano e não pode guardar registros de acesso a aplicações (arts. 13 e 14). O provedor de aplicação, pessoa jurídica com fins econômicos, guarda os registros de acesso por 6 meses (art. 15). Delegado e MP podem pedir guarda por prazo maior e têm 60 dias para pedir ao juiz o acesso (art. 13, §§2º e 3º). Conteúdo e registros exigem ordem judicial, mas dados cadastrais (qualificação, filiação, endereço) podem ser requisitados por autoridade com competência legal (art. 10, §3º). Responsabilidade do provedor por conteúdo de terceiro: art. 19 (ordem judicial) e art. 21 (nudez íntima: basta notificação), com a releitura do STF em 2025 (Temas 987 e 533).",
    },
    {
      norma: "Lei 12.737/2012",
      nome: "Lei Carolina Dieckmann (crimes informáticos)",
      fonte: "caderno",
      resumo:
        "Criou a invasão de dispositivo informático (art. 154-A do CP) e a regra de ação penal do art. 154-B: condicionada à representação, salvo crime contra a administração pública direta ou indireta ou contra concessionária de serviço público. Também incluiu o serviço telemático no art. 266 e equiparou cartão de crédito ou débito a documento particular (art. 298, parágrafo único).",
    },
    {
      norma: "Lei 14.155/2021",
      nome: "Crimes cibernéticos (endurecimento)",
      fonte: "caderno",
      resumo:
        "Tirou do art. 154-A a exigência de violar mecanismo de segurança e subiu a pena para reclusão de 1 a 4 anos (qualificada de 2 a 5). Criou o furto mediante fraude eletrônica (art. 155, §§4º-B e 4º-C) e o estelionato por fraude eletrônica (art. 171, §§2º-A e 2º-B), e fixou a competência no domicílio da vítima para o estelionato (CPP, art. 70, §4º).",
    },
    {
      norma: "Lei 13.709/2018",
      nome: "LGPD",
      fonte: "caderno",
      resumo:
        "Não se aplica ao tratamento para fins exclusivos de segurança pública, defesa, segurança do Estado e investigação ou repressão penal (art. 4º, III), que dependem de lei própria. Bases legais no art. 7º; dado sensível inclui origem racial, saúde, vida sexual, dado genético e biométrico (art. 5º, II). Multa de até 2% do faturamento, limitada a R$ 50 milhões por infração, que não se aplica a órgãos públicos (art. 52). Incidente de segurança relevante é comunicado à ANPD e ao titular (art. 48).",
    },
    {
      norma: "Decreto 8.771/2016",
      nome: "Regulamento do Marco Civil",
      fonte: "aula",
      resumo:
        "Diz quando a neutralidade admite exceção (requisitos técnicos e serviços de emergência), fixa padrões de segurança para guardar registros e exige que o pedido de dados cadastrais indique a base legal e a motivação, proibindo pedidos genéricos ou coletivos.",
    },
    {
      norma: "Decreto 12.975/2026",
      nome: "Guarda da porta lógica de origem",
      fonte: "novidade",
      resumo:
        "De 20/05/2026 (cai). Incluiu o art. 15-A no Decreto 8.771/2016: a guarda do endereço IP pelos provedores de conexão e de aplicação abrange a porta lógica de origem sempre que ela for necessária para identificar sem dúvida o terminal de origem.",
    },
    {
      norma: "Código Penal",
      nome: "Crimes do meio digital",
      fonte: "aula",
      resumo:
        "Arts. 154-A e 154-B (invasão), 155, §4º-B (furto mediante fraude eletrônica), 171, §2º-A (estelionato por fraude eletrônica), 171-A (fraude com ativos virtuais), 313-A e 313-B (dados falsos e alteração não autorizada em sistema da administração) e 325, §1º, II (acesso indevido a sistema sigiloso).",
    },
    {
      norma: "ECA (Lei 8.069/1990) e Lei 12.850/2013",
      nome: "Infiltração virtual de agentes",
      fonte: "aula",
      resumo:
        "ECA, arts. 190-A a 190-E: infiltração na internet para crimes sexuais contra criança e adolescente e para o art. 154-A, com ordem judicial, por até 90 dias renováveis até o total de 720. Lei 12.850, arts. 10-A a 10-D: infiltração virtual contra organização criminosa, por até 6 meses renováveis, também com teto de 720 dias.",
    },
    {
      norma: "Lei 15.397/2026",
      nome: "Novas penas do furto e do estelionato",
      fonte: "novidade",
      resumo:
        "Furto mediante fraude eletrônica passou a 4 a 10 anos. Também revogou o §5º do art. 171, e o estelionato passou a ser de ação pública incondicionada. Veja o detalhe em Direito Penal.",
    },
  ],

  for: [
    {
      norma: "Lei 12.037/2009",
      nome: "Identificação criminal",
      fonte: "caderno",
      resumo:
        "Quem é civilmente identificado não passa por identificação criminal, salvo nas hipóteses do art. 3º (documento rasurado, insuficiente ou conflitante, uso de outros nomes, documento antigo ou de local distante, ou decisão judicial que a considere essencial à investigação). Ela inclui processo datiloscópico e fotográfico (art. 5º) e, com ordem judicial, coleta de material biológico para perfil genético. Não pode constar em atestado de antecedentes antes do trânsito em julgado (art. 6º). O perfil é excluído na absolvição ou, a pedido, 20 anos após cumprida a pena (art. 7º-A). O art. 7º-C criou o Banco Nacional Multibiométrico e de Impressões Digitais.",
    },
    {
      norma: "CPP, arts. 158 a 184",
      nome: "Perícias, corpo de delito e cadeia de custódia",
      fonte: "caderno",
      resumo:
        "Infração que deixa vestígio exige exame de corpo de delito, direto ou indireto, e a confissão não o supre (art. 158). Têm prioridade a violência doméstica contra a mulher e a violência contra criança, adolescente, idoso e pessoa com deficiência (Lei 13.721/2018). A cadeia de custódia tem 10 etapas (art. 158-B), e remover vestígio antes da liberação pelo perito é fraude processual (art. 158-C, §2º). Basta um perito oficial com curso superior; na falta, duas pessoas idôneas com curso superior (art. 159). A necropsia é feita ao menos 6 horas após o óbito (art. 162). O exame complementar da lesão grave por incapacidade ocorre após 30 dias (art. 168, §2º). O local do crime é preservado até a chegada dos peritos (arts. 6º, I, e 169).",
    },
    {
      norma: "Lei 12.654/2012",
      nome: "Perfil genético",
      fonte: "aula",
      resumo:
        "Levou a coleta de material genético para dois momentos: na investigação, por ordem judicial (Lei 12.037), e na execução, de forma obrigatória para condenados (LEP, art. 9º-A).",
    },
    {
      norma: "LEP, art. 9º-A",
      nome: "DNA do condenado",
      fonte: "novidade",
      resumo:
        "Desde a Lei 15.295/2025, o condenado à pena de reclusão em regime inicial fechado é submetido obrigatoriamente à identificação do perfil genético ao entrar no presídio, por técnica adequada e indolor. A recusa é falta grave.",
    },
    {
      norma: "Decreto 7.950/2013",
      nome: "Banco Nacional de Perfis Genéticos",
      fonte: "aula",
      resumo: "Instituiu o Banco Nacional de Perfis Genéticos e a Rede Integrada de Bancos de Perfis Genéticos (RIBPG).",
    },
    {
      norma: "Lei 13.964/2019",
      nome: "Pacote Anticrime na perícia",
      fonte: "aula",
      resumo:
        "Trouxe para o CPP a cadeia de custódia (arts. 158-A a 158-F) e a central de custódia, criou o Banco Nacional Multibiométrico (Lei 12.037, art. 7º-C) e a regra de exclusão do perfil genético.",
    },
    {
      norma: "LGPD (Lei 13.709/2018)",
      nome: "Biometria e reconhecimento facial",
      fonte: "aula",
      resumo:
        "Dado biométrico é dado sensível (art. 5º, II). O uso em segurança pública e investigação fica fora da LGPD (art. 4º, III), mas a própria lei manda que a lei específica observe proporcionalidade e os princípios da proteção de dados.",
    },
    {
      norma: "Lei 9.099/1995",
      nome: "Lesão leve e culposa",
      fonte: "aula",
      resumo:
        "Lesão corporal leve e lesão culposa dependem de representação (art. 88). Exceção: em violência doméstica contra a mulher a ação é pública incondicionada (Súmula 542 do STJ).",
    },
  ],

  cont: [
    {
      norma: "Lei 6.404/1976",
      nome: "Lei das Sociedades por Ações",
      fonte: "aula",
      resumo:
        "Demonstrações obrigatórias (art. 176): balanço patrimonial, DLPA (ou DMPL), DRE, DFC e, só para companhia aberta, DVA. A companhia fechada com PL abaixo de R$ 2 milhões fica dispensada da DFC. Ativo: circulante e não circulante (realizável a longo prazo, investimentos, imobilizado, intangível). Passivo: circulante, não circulante e PL (capital social, reservas de capital, ajustes de avaliação patrimonial, reservas de lucros, ações em tesouraria, prejuízos acumulados), conforme o art. 178. Se o ciclo operacional passa de um ano, ele define o circulante (art. 179, parágrafo único). A reserva legal é 5% do lucro líquido até 20% do capital social (art. 193).",
    },
    {
      norma: "Lei 11.638/2007",
      nome: "Convergência às normas internacionais (IFRS)",
      fonte: "aula",
      resumo:
        "Criou o grupo do intangível, trocou a DOAR pela DFC, criou a DVA para companhia aberta, os ajustes de avaliação patrimonial e o ajuste a valor presente, e acabou com a reserva de reavaliação. O ativo diferido foi extinto logo depois (Lei 11.941/2009). Sociedade de grande porte (ativo acima de R$ 240 milhões ou receita acima de R$ 300 milhões) segue as regras de escrituração da Lei 6.404 e tem auditoria independente.",
    },
  ],

  leg: [
    {
      norma: "Constituição do Estado do Paraná (1989)",
      nome: "Constituição Estadual",
      fonte: "caderno",
      resumo:
        "O curso foca nos arts. 27 a 36 (administração pública e servidores) e nos arts. 46 e 47 (segurança pública e Polícia Civil). Veja os tópicos desta matéria.",
    },
    {
      norma: "Lei Estadual 23.213/2026",
      nome: "Lei Orgânica da PCPR",
      fonte: "caderno",
      resumo:
        "Fundamenta-se na CF (arts. 24, XVI, e 144, IV), na Constituição do Estado (arts. 46 e 47) e na Lei 14.735/2023. Entrou em vigor na publicação e revogou a LC 14/1982. É anterior a 03/07/2026, então cai.",
    },
    {
      norma: "LC Estadual 259/2023",
      nome: "Regime jurídico dos policiais civis do PR",
      fonte: "caderno",
      resumo:
        "Em vigor desde 01/08/2023, revogou os arts. 8º a 193 da LC 14/1982 e foi alterada pelas LC 285/2025 e 289/2025 e pela Lei 23.213/2026. No que ela não regula, aplica-se a Lei 6.174/1970 (art. 84). A estabilidade do policial civil vem após 3 anos.",
    },
    {
      norma: "Lei Estadual 21.894/2024",
      nome: "Código Disciplinar da PCPR",
      fonte: "caderno",
      resumo: "Transgressões, sanções e processo disciplinar dos policiais civis, aplicado também aos alunos do curso de formação. Veja o tópico próprio.",
    },
    {
      norma: "Lei Estadual 6.174/1970",
      nome: "Estatuto dos Servidores do PR",
      fonte: "caderno",
      resumo:
        "Aplica-se ao policial civil de forma subsidiária (LC 259, art. 84). Pegadinha: o texto fala em estabilidade em 2 anos, mas para o policial civil valem os 3 anos da CF, da LC 259 e da Lei 14.735.",
    },
    {
      norma: "Lei 14.735/2023",
      nome: "Lei Orgânica Nacional das Polícias Civis",
      fonte: "aula",
      resumo: "Normas gerais nacionais de organização, princípios, competências, cargos e garantias das polícias civis.",
      alerta: "O curso não traz caderno desta lei: o arquivo com esse nome no Drive é a Constituição do PR.",
    },
    {
      norma: "Lei 13.869/2019",
      nome: "Abuso de autoridade",
      fonte: "caderno",
      resumo:
        "Os crimes exigem finalidade específica: prejudicar outrem, beneficiar a si ou a terceiro, ou mero capricho ou satisfação pessoal (art. 1º, §1º). Divergência na interpretação da lei ou na avaliação de fatos e provas não é abuso (§2º). A ação é pública incondicionada, com queixa subsidiária. Perda do cargo e inabilitação só na reincidência e com fundamentação na sentença (art. 4º, parágrafo único).",
    },
    {
      norma: "Lei 12.527/2011",
      nome: "Lei de Acesso à Informação",
      fonte: "caderno",
      resumo:
        "A publicidade é a regra e o pedido não precisa de motivo. Resposta imediata ou em até 20 dias, prorrogáveis por mais 10, e recurso em 10 dias. Sigilo máximo: ultrassecreta 25 anos (prorrogável uma vez), secreta 15 e reservada 5. Informação pessoal tem acesso restrito por até 100 anos.",
    },
    {
      norma: "Lei 12.037/2009 e LGPD",
      nome: "Identificação criminal e proteção de dados",
      fonte: "caderno",
      resumo: "Também estão no edital desta matéria. Os resumos completos estão em Ciências Forenses (identificação criminal) e em Tecnologia (LGPD).",
    },
    {
      norma: "LC Estadual 14/1982",
      nome: "Antigo Estatuto da Polícia Civil do PR",
      fonte: "aula",
      resumo: "Revogada: os arts. 8º a 193 pela LC 259/2023, e o restante pela Lei 23.213/2026.",
    },
    {
      norma: "Lei Estadual 20.996/2022",
      nome: "Gratificação por exercício cumulativo",
      fonte: "aula",
      resumo: "Citada na LC 259 como base da gratificação por exercício cumulativo de atividade. A LC 259 revogou seu art. 2º.",
    },
  ],

  pen: [
    {
      norma: "Código Penal (DL 2.848/1940)",
      nome: "Código Penal",
      fonte: "caderno",
      resumo:
        "O cronograma de lei seca do curso prioriza os arts. 1º a 31 (aplicação da lei e crime), o 107 (extinção da punibilidade), os 121 a 183 (pessoa e patrimônio) e os 312 a 359-H (administração pública e finanças públicas).",
    },
    {
      norma: "Lei 8.072/1990",
      nome: "Crimes hediondos",
      fonte: "caderno",
      resumo:
        "Rol do art. 1º. Hediondos e equiparados (tortura, tráfico, terrorismo) são inafiançáveis e não admitem anistia, graça ou indulto. O regime inicial fechado obrigatório foi derrubado pelo STF, e a progressão segue os percentuais do art. 112 da LEP (40% a 70%). A prisão temporária é de 30 dias, prorrogáveis por mais 30. O tráfico privilegiado não é hediondo.",
    },
    {
      norma: "Lei 11.340/2006",
      nome: "Lei Maria da Penha",
      fonte: "caderno",
      resumo:
        "Violência doméstica e familiar contra a mulher na unidade doméstica, na família ou em relação íntima de afeto, sem exigir coabitação (Súmula 600 do STJ). Formas: física, psicológica, sexual, patrimonial e moral (art. 7º). O juiz decide a medida protetiva em 48 horas. O afastamento do lar pode ser feito pelo delegado em município que não é sede de comarca, ou pelo policial se não houver delegado disponível, comunicando o juiz em 24 horas (art. 12-C). Descumprir medida protetiva é crime (art. 24-A, 2 a 5 anos), e só o juiz concede fiança. A Lei 9.099 não se aplica (art. 41). Renúncia à representação só perante o juiz (art. 16). Proibida pena de cesta básica (art. 17).",
    },
    {
      norma: "Lei 11.343/2006",
      nome: "Lei de Drogas",
      fonte: "caderno",
      resumo:
        "Porte para consumo (art. 28) não tem pena de prisão. O STF (Tema 506, 2024) tratou a maconha para uso como ilícito administrativo, com presunção de usuário até 40 g ou 6 plantas fêmeas. Tráfico (art. 33): 5 a 15 anos; o privilegiado (§4º) reduz de 1/6 a 2/3 e não é hediondo. Associação para o tráfico (art. 35) exige estabilidade. O flagrante exige laudo de constatação (art. 50, §1º). Inquérito: 30 dias com preso, 90 com solto, prazos que podem ser duplicados (art. 51).",
    },
    {
      norma: "Lei 12.850/2013",
      nome: "Organizações criminosas",
      fonte: "caderno",
      resumo:
        "Organização criminosa: 4 ou mais pessoas, estruturalmente ordenadas, com divisão de tarefas, para crimes com pena máxima acima de 4 anos ou de caráter transnacional (art. 1º, §1º). Pena de 3 a 8 anos (art. 2º). Meios de prova do art. 3º: colaboração premiada, captação ambiental, ação controlada, infiltração e outros. A sentença não pode se apoiar só na palavra do colaborador (art. 4º, §16). A ação controlada é comunicada antes ao juiz (art. 8º), e a infiltração depende de autorização judicial (art. 10).",
    },
    {
      norma: "Lei 15.358/2026",
      nome: "Marco Legal do Combate ao Crime Organizado (Lei Antifacção)",
      fonte: "caderno",
      resumo:
        "De 24/03/2026, então cai. Criou os crimes de domínio social estruturado e de favorecimento, tornou hediondos esses crimes e a organização criminosa voltada a crimes hediondos, criou aumentos para crimes patrimoniais de integrantes de facção ou milícia e alterou o CPP e a Lei 12.850.",
    },
    {
      norma: "Lei 10.826/2003",
      nome: "Estatuto do Desarmamento",
      fonte: "caderno",
      resumo:
        "Posse de arma de uso permitido em casa ou no trabalho (art. 12, detenção) não se confunde com porte (art. 14, reclusão de 2 a 4). Omissão de cautela (art. 13), disparo (art. 15), arma de uso restrito (art. 16), comércio ilegal (art. 17) e tráfico internacional (art. 18). São hediondos a posse ou porte de arma de uso proibido, o comércio ilegal e o tráfico internacional.",
    },
    {
      norma: "Lei 7.210/1984",
      nome: "Lei de Execução Penal",
      fonte: "caderno",
      resumo:
        "Progressão por percentuais (art. 112), com exame criminológico obrigatório desde a Lei 14.843/2024. Saída temporária só para estudo (art. 122). Remição: 1 dia a cada 12 horas de estudo ou 3 dias de trabalho (art. 126). Faltas graves (art. 50) e RDD (art. 52). Veja o tópico de penas.",
    },
    {
      norma: "Lei 9.613/1998",
      nome: "Lavagem de dinheiro",
      fonte: "caderno",
      resumo:
        "Fases: colocação, ocultação e integração. Desde a Lei 12.683/2012, qualquer infração penal pode ser antecedente, inclusive contravenção. O processo independe do processo do crime antecedente (art. 2º, II), e o art. 366 do CPP não se aplica. Pena de 3 a 10 anos.",
    },
    {
      norma: "Lei 8.137/1990",
      nome: "Crimes contra a ordem tributária, econômica e as relações de consumo",
      fonte: "caderno",
      resumo:
        "O art. 1º traz crimes materiais e o art. 2º, crimes formais. Pela Súmula Vinculante 24, o crime do art. 1º só se tipifica depois do lançamento definitivo do tributo. O art. 7º trata das relações de consumo.",
    },
    {
      norma: "Lei 9.503/1997",
      nome: "Código de Trânsito (crimes)",
      fonte: "caderno",
      resumo:
        "Arts. 302 a 312: homicídio culposo na direção (detenção de 2 a 4, ou reclusão de 5 a 8 com embriaguez), lesão culposa, omissão de socorro, fuga do local, embriaguez ao volante (art. 306: 6 dg/L de sangue ou 0,3 mg/L de ar alveolar, ou sinais), racha, direção sem habilitação gerando perigo, entrega do veículo a não habilitado (crime de perigo abstrato, Súmula 575 do STJ) e fraude processual. Quem presta pronto socorro à vítima não é preso em flagrante nem paga fiança (art. 301).",
    },
    {
      norma: "Lei 13.964/2019",
      nome: "Pacote Anticrime (parte penal)",
      fonte: "caderno",
      resumo:
        "Limite de cumprimento de pena de 40 anos (art. 75), legítima defesa do agente de segurança que repele agressão a refém (art. 25, parágrafo único), progressão por percentuais e mudanças em hediondos, armas e organização criminosa. A parte processual está em Processo Penal.",
    },
    {
      norma: "Lei 9.099/1995",
      nome: "Juizados Especiais Criminais",
      fonte: "aula",
      resumo:
        "Menor potencial ofensivo: contravenções e crimes com pena máxima de até 2 anos (art. 61). Lavra-se TCO, sem flagrante nem fiança se o autor se compromete a comparecer (art. 69). Composição civil dos danos (art. 74), transação penal (art. 76, vedada a quem a recebeu nos 5 anos anteriores) e suspensão condicional do processo para pena mínima de até 1 ano (art. 89). Não se aplica à violência doméstica contra a mulher nem à Justiça Militar.",
    },
    {
      norma: "DL 3.914/1941",
      nome: "Lei de Introdução ao Código Penal",
      fonte: "aula",
      resumo: "Art. 1º: crime tem pena de reclusão ou detenção; contravenção tem prisão simples ou só multa.",
    },
    {
      norma: "Lei 9.455/1997",
      nome: "Tortura",
      fonte: "aula",
      resumo:
        "Tortura-prova, tortura para provocar crime, tortura discriminatória (racial ou religiosa) e tortura-castigo (contra quem está sob guarda ou autoridade), com pena de 2 a 8 anos. Quem se omite tendo o dever de evitar ou apurar responde com pena de 1 a 4. A perda do cargo é automática. O regime inicial é o fechado, salvo na omissão. A lei vale também para crime fora do Brasil contra brasileiro ou com o agente sob jurisdição brasileira (art. 2º).",
    },
    {
      norma: "Lei 7.716/1989",
      nome: "Crimes de racismo",
      fonte: "aula",
      resumo:
        "Discriminação por raça, cor, etnia, religião ou procedência nacional. Desde a Lei 14.532/2023, a injúria racial está no art. 2º-A (reclusão de 2 a 5) e é imprescritível e inafiançável como o racismo. O STF enquadrou a homotransfobia como racismo (ADO 26).",
    },
    {
      norma: "Lei 9.605/1998",
      nome: "Crimes ambientais",
      fonte: "aula",
      resumo:
        "Responsabilidade penal da pessoa jurídica (art. 3º), que o STF admite sem dupla imputação. Desconsideração da pessoa jurídica (art. 4º). Nos crimes de menor potencial, a transação depende de prévia composição do dano ambiental (art. 27).",
    },
    {
      norma: "Lei 8.069/1990",
      nome: "ECA (crimes)",
      fonte: "aula",
      resumo:
        "Arts. 228 a 244-B. Crimes de pornografia infantil e aliciamento (arts. 240 a 241-E). A corrupção de menores (art. 244-B) é crime formal (Súmula 500 do STJ).",
    },
    {
      norma: "Lei 10.741/2003",
      nome: "Estatuto da Pessoa Idosa",
      fonte: "aula",
      resumo:
        "Pessoa idosa tem 60 anos ou mais, com prioridade especial a partir dos 80. Crimes nos arts. 95 a 108, todos de ação pública incondicionada. Nos crimes com pena máxima de até 4 anos, aplica-se só o rito da Lei 9.099, sem os benefícios despenalizadores (STF, ADI 3.096).",
    },
    {
      norma: "Lei 13.344/2016",
      nome: "Tráfico de pessoas",
      fonte: "aula",
      resumo:
        "Criou o art. 149-A do CP (4 a 8 anos): agenciar, recrutar, transportar ou alojar pessoa, com violência, grave ameaça, fraude ou abuso, para remoção de órgãos, trabalho escravo, servidão, adoção ilegal ou exploração sexual. Também incluiu no CPP os arts. 13-A e 13-B (requisição de dados; veja Processo Penal).",
    },
    {
      norma: "Lei 10.803/2003",
      nome: "Redução a condição análoga à de escravo",
      fonte: "aula",
      resumo: "Deu a redação atual do art. 149: trabalho forçado, jornada exaustiva, condição degradante ou restrição de locomoção por dívida.",
    },
    {
      norma: "Lei 12.015/2009",
      nome: "Reforma dos crimes contra a dignidade sexual",
      fonte: "aula",
      resumo: "Juntou estupro e atentado violento ao pudor no art. 213 e criou o estupro de vulnerável (art. 217-A).",
    },
    {
      norma: "Lei 13.718/2018",
      nome: "Importunação sexual",
      fonte: "aula",
      resumo:
        "Criou a importunação sexual (art. 215-A) e a divulgação de cena de estupro ou de sexo sem consentimento (art. 218-C), criou aumento para estupro coletivo e corretivo, e tornou de ação pública incondicionada todos os crimes contra a dignidade sexual (art. 225).",
    },
    {
      norma: "Lei 14.132/2021",
      nome: "Perseguição (stalking)",
      fonte: "aula",
      resumo:
        "Art. 147-A: perseguir alguém reiteradamente, ameaçando sua integridade ou invadindo sua liberdade ou privacidade. Reclusão de 6 meses a 2 anos, com aumento de metade contra criança, adolescente, idoso, mulher por razão do sexo feminino, com 2 ou mais agentes ou com arma. A ação é condicionada à representação.",
    },
    {
      norma: "Lei 14.188/2021",
      nome: "Violência psicológica contra a mulher",
      fonte: "aula",
      resumo: "Criou o art. 147-B (reclusão de 6 meses a 2 anos, se não for crime mais grave) e o programa Sinal Vermelho.",
    },
    {
      norma: "Lei 14.344/2022",
      nome: "Lei Henry Borel",
      fonte: "aula",
      resumo:
        "Medidas protetivas e crime de descumprimento para a violência doméstica e familiar contra criança e adolescente. Também endureceu o homicídio contra menor de 14 anos.",
    },
    {
      norma: "Lei 13.654/2018",
      nome: "Explosivos e arma de fogo no patrimônio",
      fonte: "aula",
      resumo:
        "Furto com explosivo (art. 155, §4º-A) e furto de explosivos (§7º). Roubo com arma de fogo tem aumento de 2/3 (art. 157, §2º-A). A arma branca voltou como aumento com a Lei 13.964 (§2º, VII).",
    },
    {
      norma: "Lei 13.142/2015",
      nome: "Crimes contra agentes de segurança",
      fonte: "aula",
      resumo:
        "Homicídio contra integrante das forças de segurança (arts. 142 e 144 da CF), no exercício da função ou por causa dela, ou contra seu cônjuge ou parente até o 3º grau, é qualificado e hediondo. A lesão corporal nessas condições tem aumento.",
    },
    {
      norma: "Lei 9.983/2000",
      nome: "Crimes previdenciários e em sistemas",
      fonte: "aula",
      resumo: "Criou a apropriação indébita previdenciária (art. 168-A), a sonegação previdenciária (art. 337-A) e os crimes em sistemas da administração (arts. 313-A e 313-B).",
    },
    {
      norma: "Lei 14.197/2021",
      nome: "Crimes contra o Estado Democrático de Direito",
      fonte: "aula",
      resumo: "Incluiu os arts. 359-I a 359-U no CP e revogou a Lei de Segurança Nacional (7.170/1983).",
    },
    {
      norma: "Lei 13.260/2016",
      nome: "Terrorismo",
      fonte: "aula",
      resumo:
        "Atos por xenofobia ou por discriminação de raça, cor, etnia ou religião, para provocar terror social ou generalizado. Não alcança manifestação política ou movimento social (art. 2º, §2º). Pune atos preparatórios (art. 5º) e é equiparado a hediondo.",
    },
    {
      norma: "Lei 6.538/1978",
      nome: "Serviços postais",
      fonte: "aula",
      resumo: "Traz os crimes contra o serviço postal, inclusive a violação de correspondência (art. 40), que em parte substituiu o art. 151 do CP.",
    },
    {
      norma: "LC 105/2001",
      nome: "Sigilo bancário",
      fonte: "aula",
      resumo: "Regras de quebra do sigilo das instituições financeiras e crime de quebra fora das hipóteses legais (art. 10).",
    },
    {
      norma: "Lei 14.811/2024",
      nome: "Bullying e proteção da criança",
      fonte: "novidade",
      resumo:
        "Criou a intimidação sistemática (bullying, art. 146-A, só multa) e a virtual (cyberbullying, reclusão de 2 a 4 anos). Tornou hediondos, entre outros, o induzimento a suicídio ou automutilação pela internet, o sequestro de menor de 18 anos e o tráfico de criança ou adolescente.",
    },
    {
      norma: "Lei 14.994/2024",
      nome: "Pacote Antifeminicídio",
      fonte: "novidade",
      resumo:
        "Feminicídio virou crime autônomo (art. 121-A, 20 a 40 anos, a maior pena do CP). Lesão contra a mulher por razão do sexo feminino passou a 2 a 5 anos (art. 129, §13), assim como o descumprimento de medida protetiva. Na progressão, o condenado primário por feminicídio cumpre 55%.",
    },
    {
      norma: "Lei 15.035/2024",
      nome: "Publicidade do réu em crimes sexuais",
      fonte: "novidade",
      resumo: "A partir da condenação em primeira instância por estupro e outros crimes sexuais, o nome completo, o CPF e a tipificação do réu ficam públicos na consulta processual.",
    },
    {
      norma: "Lei 15.134/2025",
      nome: "Crimes contra autoridades do sistema de justiça",
      fonte: "novidade",
      resumo: "Qualificou o homicídio contra membro do Judiciário, do MP, da Defensoria ou da Advocacia Pública e contra oficial de justiça, no exercício da função ou por causa dela.",
    },
    {
      norma: "Lei 15.159/2025",
      nome: "Crimes em escolas",
      fonte: "novidade",
      resumo: "Crime cometido nas dependências de instituição de ensino passou a ser agravante (art. 61, II, m) e qualificadora do homicídio (art. 121, §2º, X, 12 a 30 anos).",
    },
    {
      norma: "Lei 15.280/2025",
      nome: "Crimes sexuais contra vulnerável",
      fonte: "novidade",
      resumo:
        "Subiu as penas: estupro de vulnerável passou a 10 a 18 anos (12 a 24 com lesão grave, 20 a 40 com morte). Criou o crime geral de descumprir medida protetiva (art. 338-A, 2 a 5 anos). Na LEP, o condenado por crime sexual só progride ou sai do presídio se o exame criminológico indicar que não voltará a cometer o mesmo tipo de crime (art. 119-A).",
    },
    {
      norma: "Lei 15.384/2026",
      nome: "Vicaricídio",
      fonte: "novidade",
      resumo:
        "Criou o art. 121-B (20 a 40 anos): matar descendente, ascendente, dependente, enteado ou pessoa sob guarda da mulher para causar a ela sofrimento, punição ou controle, no contexto de violência doméstica.",
    },
    {
      norma: "Lei 15.397/2026",
      nome: "Novas penas dos crimes patrimoniais",
      fonte: "novidade",
      resumo:
        "Furto simples de 1 a 6 anos, com aumento de metade no repouso noturno. Roubo de 6 a 10, latrocínio de 24 a 30 e receptação de 2 a 6. Furto mediante fraude eletrônica de 4 a 10. Revogou o §5º do art. 171, e o estelionato passou a ser de ação pública incondicionada.",
    },
    {
      norma: "Lei 15.455/2026",
      nome: "Violência no trabalho doméstico",
      fonte: "novidade",
      resumo:
        "Incluiu a pessoa com relação de trabalho doméstico na lesão corporal em violência doméstica (art. 129, §9º, reclusão de 2 a 5) e mandou comunicar ao Ministério do Trabalho e ao MPT os casos da Lei Maria da Penha ligados a trabalho doméstico.",
      alerta:
        "Sancionada entre 30/06 e 03/07/2026, bem no limite do item 25.15. Leia, mas não é prioridade.",
    },
  ],

  pp: [
    {
      norma: "Código de Processo Penal (DL 3.689/1941)",
      nome: "CPP",
      fonte: "caderno",
      resumo:
        "O cronograma de lei seca do curso prioriza: inquérito (arts. 4º a 23), ação penal (24 a 62), competência (69 a 91), provas (155 a 184) e prisão em flagrante e preventiva (301 a 316).",
    },
    {
      norma: "Lei 13.964/2019",
      nome: "Pacote Anticrime (parte processual)",
      fonte: "caderno",
      resumo:
        "Juiz das garantias (com a releitura do STF nas ADIs 6.298 e seguintes), acordo de não persecução penal (art. 28-A: sem violência ou grave ameaça, pena mínima abaixo de 4 anos, confissão formal), cadeia de custódia, revisão da preventiva a cada 90 dias (art. 316, parágrafo único) e captação ambiental (Lei 9.296, art. 8º-A).",
    },
    {
      norma: "Lei 15.358/2026",
      nome: "Lei Antifacção (parte processual)",
      fonte: "caderno",
      resumo: "De 24/03/2026, então cai. Alterou o CPP (competência e audiência de custódia, entre outros pontos) e a Lei 12.850. Veja o tópico próprio.",
    },
    {
      norma: "Lei 9.296/1996",
      nome: "Interceptação telefônica",
      fonte: "caderno",
      resumo:
        "Proibida sem indícios razoáveis de autoria, quando a prova puder ser feita por outro meio ou quando o crime for punido no máximo com detenção (art. 2º). Depende de ordem judicial, a pedido do delegado (na investigação) ou do MP. O prazo é de 15 dias, renovável enquanto indispensável. A captação ambiental (art. 8º-A) vale para crimes com pena máxima acima de 4 anos. Crimes nos arts. 10 e 10-A.",
    },
    {
      norma: "Lei 8.906/1994",
      nome: "Estatuto da Advocacia",
      fonte: "caderno",
      resumo:
        "O advogado examina autos de flagrante e de investigação mesmo sem procuração, salvo sigilo (art. 7º, XIV), e assiste o cliente investigado sob pena de nulidade do interrogatório (XXI). Veja a Súmula Vinculante 14. Violar prerrogativa do advogado é crime (art. 7º-B).",
    },
    {
      norma: "Lei 7.960/1989",
      nome: "Prisão temporária",
      fonte: "aula",
      resumo:
        "Só no inquérito, decretada pelo juiz a pedido do delegado ou do MP, nunca de ofício. Prazo de 5 dias mais 5 (30 mais 30 nos hediondos). O juiz decide em 24 horas, e terminado o prazo o preso é solto sem precisar de nova ordem.",
    },
    {
      norma: "Lei 12.403/2011",
      nome: "Prisões e cautelares",
      fonte: "aula",
      resumo:
        "Cautelares diversas da prisão (art. 319). Preventiva para crime doloso com pena máxima acima de 4 anos, reincidente em crime doloso, para garantir medida protetiva ou em dúvida sobre a identidade (art. 313). O delegado concede fiança quando a pena máxima não passa de 4 anos (art. 322). Prisão domiciliar (arts. 317 e 318).",
    },
    {
      norma: "Lei 15.272/2025",
      nome: "Conversão do flagrante em preventiva",
      fonte: "novidade",
      resumo:
        "Em vigor desde 27/11/2025. O art. 310, §5º, lista circunstâncias que recomendam converter o flagrante em preventiva, como reiteração criminosa, violência ou grave ameaça e o fato de o agente já ter sido solto em audiência de custódia anterior por outra infração. O juiz continua obrigado a fundamentar no caso concreto.",
    },
    {
      norma: "Lei 11.690/2008",
      nome: "Reforma das provas",
      fonte: "aula",
      resumo:
        "Prova ilícita e derivada (art. 157), com exceção da fonte independente e de quando não há nexo. O juiz não condena só com elementos do inquérito, ressalvadas as provas cautelares, não repetíveis e antecipadas (art. 155). Perito oficial único e assistente técnico (art. 159). Direitos do ofendido (art. 201).",
    },
    {
      norma: "Lei 10.792/2003",
      nome: "Interrogatório",
      fonte: "aula",
      resumo:
        "Interrogatório com defensor. O silêncio não importa confissão nem pode prejudicar a defesa (art. 186, parágrafo único). As partes podem fazer perguntas ao réu (art. 188).",
    },
    {
      norma: "Lei 11.900/2009",
      nome: "Videoconferência",
      fonte: "aula",
      resumo:
        "Interrogatório do preso por videoconferência só excepcionalmente, por decisão fundamentada, para prevenir risco à segurança, viabilizar a participação do réu, impedir influência sobre testemunha ou por gravíssima questão de ordem pública (art. 185, §2º). As partes são intimadas com 10 dias de antecedência.",
    },
    {
      norma: "Lei 13.257/2016 e Lei 13.769/2018",
      nome: "Domiciliar de gestantes e mães",
      fonte: "aula",
      resumo:
        "Art. 318: domiciliar para gestante, para mulher com filho de até 12 anos incompletos e para homem único responsável por filho nessa idade. Art. 318-A: para gestante ou mãe ou responsável por criança ou pessoa com deficiência, a substituição é obrigatória, salvo crime com violência ou grave ameaça ou crime contra o próprio filho ou dependente. O delegado deve registrar a existência de filhos (art. 6º, X).",
    },
    {
      norma: "Lei 13.344/2016",
      nome: "Requisição de dados (CPP, arts. 13-A e 13-B)",
      fonte: "aula",
      resumo:
        "Em crimes como sequestro, tráfico de pessoas e extorsão com restrição da liberdade, o delegado ou o MP requisitam dados cadastrais da vítima ou de suspeitos, a serem entregues em 24 horas. No tráfico de pessoas, os sinais de localização (ERB) dependem de ordem judicial. Se o juiz não decidir em 12 horas, a autoridade pode requisitá-los direto às operadoras, comunicando o juiz, sem acesso ao conteúdo da comunicação.",
    },
    {
      norma: "Lei 12.830/2013",
      nome: "Investigação criminal pelo delegado",
      fonte: "aula",
      resumo:
        "A investigação feita pelo delegado tem natureza jurídica, é essencial e exclusiva de Estado. O indiciamento é privativo do delegado e precisa ser fundamentado (art. 2º, §6º). O inquérito só é avocado ou redistribuído por despacho fundamentado do superior (§4º).",
    },
    {
      norma: "Lei 10.258/2001",
      nome: "Prisão especial",
      fonte: "aula",
      resumo: "A prisão especial é só o recolhimento em local distinto da prisão comum ou em cela separada no mesmo estabelecimento (art. 295, §§1º e 2º).",
    },
    {
      norma: "Lei 11.113/2005",
      nome: "Auto de prisão em flagrante",
      fonte: "aula",
      resumo: "O condutor é ouvido e liberado após assinar e receber o recibo de entrega do preso. Depois vêm as testemunhas e o interrogatório (art. 304).",
    },
    {
      norma: "Lei 8.862/1994 e Lei 5.970/1973",
      nome: "Local do crime",
      fonte: "aula",
      resumo:
        "O delegado preserva o local até a chegada dos peritos e só apreende objetos depois de liberados por eles (arts. 6º, I e II, e 169). Em acidente de trânsito, feridos e veículos que atrapalham o tráfego podem ser removidos sem perícia do local.",
    },
    {
      norma: "Lei 14.836/2024",
      nome: "Empate favorece o réu",
      fonte: "aula",
      resumo: "Em julgamento colegiado de matéria penal ou processual penal, inclusive habeas corpus, o empate resolve-se a favor do réu.",
    },
  ],

  con: [
    {
      norma: "Constituição Federal de 1988",
      nome: "CF",
      fonte: "caderno",
      resumo:
        "O cronograma do curso prioriza os arts. 1º a 16 (princípios, direitos e garantias, direitos sociais, nacionalidade), 44 a 91 (Poder Legislativo e processo legislativo), 144 (segurança pública) e a ordem social (arts. 193 a 230).",
    },
    {
      norma: "Lei 9.868/1999",
      nome: "ADI, ADC e ADO",
      fonte: "aula",
      resumo:
        "A ADC exige controvérsia judicial relevante. Julgamento com 8 ministros presentes, e a decisão precisa de 6 votos. A modulação de efeitos exige 2/3 (art. 27). A decisão tem efeito vinculante e erga omnes, só admite embargos de declaração e não cabe rescisória (art. 26). A ADO foi incluída pela Lei 12.063/2009.",
    },
    {
      norma: "Lei 9.882/1999",
      nome: "ADPF",
      fonte: "aula",
      resumo:
        "Só cabe se não houver outro meio eficaz (subsidiariedade, art. 4º, §1º). Alcança lei municipal e lei anterior à CF. Tem os mesmos legitimados da ADI.",
    },
    {
      norma: "Lei 12.016/2009",
      nome: "Mandado de segurança",
      fonte: "aula",
      resumo:
        "Prazo decadencial de 120 dias (art. 23). Não cabe contra ato de gestão comercial de estatal, contra decisão judicial transitada em julgado nem quando cabe recurso administrativo com efeito suspensivo sem caução. O MS coletivo (art. 21) cabe a partido com representação no Congresso e a sindicato, entidade de classe ou associação com pelo menos 1 ano de funcionamento. Não há honorários (art. 25).",
    },
    {
      norma: "Lei 4.717/1965",
      nome: "Ação popular",
      fonte: "aula",
      resumo:
        "Qualquer cidadão (eleitor) pode propor para anular ato lesivo ao patrimônio público, à moralidade, ao meio ambiente ou ao patrimônio histórico e cultural. O autor fica isento de custas e sucumbência, salvo má-fé. Prescreve em 5 anos.",
    },
    {
      norma: "Lei 9.507/1997",
      nome: "Habeas data",
      fonte: "aula",
      resumo: "Serve para conhecer ou retificar dados pessoais em banco de dados público e exige prova da recusa administrativa (Súmula 2 do STJ). É gratuito.",
    },
    {
      norma: "Lei 13.300/2016",
      nome: "Mandado de injunção",
      fonte: "aula",
      resumo:
        "Cabe na falta de norma que torne inviável um direito. A decisão vale entre as partes, mas pode ter efeito ultra partes ou erga omnes. O coletivo pode ser proposto pelo MP, por partido político, sindicato, entidade ou associação e pela Defensoria.",
    },
    {
      norma: "Lei 9.709/1998",
      nome: "Plebiscito, referendo e iniciativa popular",
      fonte: "aula",
      resumo:
        "Plebiscito é consulta prévia e referendo é posterior, convocados por decreto legislativo. Iniciativa popular: 1% do eleitorado nacional, em pelo menos 5 estados, com no mínimo 0,3% em cada. O projeto não pode ser rejeitado por vício de forma.",
    },
    {
      norma: "Lei 12.562/2011",
      nome: "Representação interventiva",
      fonte: "aula",
      resumo: "ADI interventiva proposta pelo PGR no STF por violação de princípio sensível (art. 34, VII) ou recusa à execução de lei federal.",
    },
    {
      norma: "Lei 9.265/1996",
      nome: "Gratuidade dos atos de cidadania",
      fonte: "aula",
      resumo: "São gratuitos o habeas corpus, o habeas data e outros atos necessários ao exercício da cidadania.",
    },
    {
      norma: "Lei 13.445/2017",
      nome: "Lei de Migração",
      fonte: "aula",
      resumo:
        "Trata de extradição, expulsão, deportação e repatriação. O brasileiro nato nunca é extraditado. O naturalizado pode ser, por crime comum anterior à naturalização ou por tráfico de drogas (CF, art. 5º, LI).",
    },
    {
      norma: "EC 45/2004",
      nome: "Reforma do Judiciário",
      fonte: "aula",
      resumo:
        "Tratado de direitos humanos aprovado em 2 turnos por 3/5 de cada Casa vale como emenda (art. 5º, §3º), e o Brasil se submete ao TPI (§4º). Criou a razoável duração do processo, a súmula vinculante, o CNJ e o CNMP, e o incidente de deslocamento de competência (federalização), suscitado pelo PGR no STJ.",
    },
    {
      norma: "EC 131/2023",
      nome: "Perda da nacionalidade",
      fonte: "aula",
      resumo:
        "O brasileiro só perde a nacionalidade se tiver a naturalização cancelada por sentença (fraude no processo ou atentado contra a ordem constitucional e o Estado Democrático) ou se pedir expressamente, salvo se ficar apátrida. Adquirir outra nacionalidade não faz mais perder a brasileira, e quem renunciou pode readquiri-la.",
    },
    {
      norma: "EC 72/2013",
      nome: "Trabalhadores domésticos",
      fonte: "aula",
      resumo: "Ampliou os direitos trabalhistas dos domésticos (art. 7º, parágrafo único).",
    },
    {
      norma: "EC 111/2021",
      nome: "Reforma eleitoral",
      fonte: "aula",
      resumo:
        "A partir dos eleitos em 2026, a posse do Presidente é em 5 de janeiro e a dos governadores em 6 de janeiro. Criou as consultas populares municipais junto com as eleições.",
    },
    {
      norma: "EC 15/1996 e EC 57/2008",
      nome: "Criação de municípios",
      fonte: "aula",
      resumo:
        "Município é criado por lei estadual, no período fixado em lei complementar federal, após plebiscito e estudo de viabilidade (art. 18, §4º). A EC 57 convalidou os municípios criados até 31/12/2006.",
    },
    {
      norma: "EC 90/2015 e EC 114/2021",
      nome: "Direitos sociais",
      fonte: "aula",
      resumo: "A EC 90 incluiu o transporte como direito social. A EC 114 criou a renda básica familiar (art. 6º, parágrafo único).",
    },
  ],

  adm: [
    {
      norma: "Lei 14.133/2021",
      nome: "Licitações e contratos",
      fonte: "caderno",
      resumo:
        "Modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo; tomada de preços e convite acabaram. Em regra o julgamento vem antes da habilitação. Contratação direta por inexigibilidade (art. 74) ou dispensa (art. 75). Divulgação no PNCP. Os crimes foram levados ao CP (arts. 337-E a 337-P). Os valores são atualizados todo ano por decreto pelo IPCA-E (art. 182): Decretos 10.922/2021, 11.317/2022, 11.871/2023, 12.343/2024 e 12.807/2025.",
    },
    {
      norma: "Lei 8.429/1992 (com a Lei 14.230/2021)",
      nome: "Improbidade administrativa",
      fonte: "caderno",
      resumo:
        "Só existe improbidade dolosa. Três espécies: enriquecimento ilícito (art. 9º), prejuízo ao erário (art. 10) e violação de princípios (art. 11, rol taxativo). Veja o tópico de improbidade.",
    },
    {
      norma: "LINDB (DL 4.657/1942)",
      nome: "Lei de Introdução às Normas do Direito Brasileiro",
      fonte: "caderno",
      resumo:
        "Vacatio de 45 dias no país e 3 meses no exterior (art. 1º). Repristinação só se for expressa (art. 2º, §3º). Ninguém se escusa alegando desconhecer a lei (art. 3º). Nas lacunas: analogia, costumes e princípios gerais (art. 4º). Arts. 20 a 30 (Lei 13.655/2018): decidir considerando as consequências práticas, e o agente só responde por dolo ou erro grosseiro (art. 28).",
    },
    {
      norma: "Decreto 9.830/2019",
      nome: "Regulamento dos arts. 20 a 30 da LINDB",
      fonte: "aula",
      resumo:
        "A motivação deve contextualizar os fatos e indicar as consequências práticas da decisão. Erro grosseiro é o erro manifesto, evidente e inescusável, com culpa grave (art. 12).",
    },
    {
      norma: "Lei 9.784/1999",
      nome: "Processo administrativo federal",
      fonte: "aula",
      resumo:
        "Não se delegam atos normativos, decisão de recurso e competência exclusiva (art. 13). Intimação com 3 dias úteis de antecedência. Decisão em até 30 dias após a instrução, prorrogáveis por mais 30 (art. 49). Recurso em 10 dias: a autoridade reconsidera em 5 ou encaminha, em no máximo 3 instâncias. O recurso pode piorar a situação do recorrente, se ele for avisado para se manifestar (art. 64); a revisão não pode (art. 65). A anulação de ato favorável decai em 5 anos, salvo má-fé (art. 54).",
    },
    {
      norma: "DL 200/1967",
      nome: "Organização da administração federal",
      fonte: "aula",
      resumo:
        "Administração direta e indireta (autarquias, empresas públicas, sociedades de economia mista e fundações públicas). Princípios fundamentais: planejamento, coordenação, descentralização, delegação de competência e controle (art. 6º).",
    },
    {
      norma: "Lei 13.303/2016",
      nome: "Lei das Estatais",
      fonte: "aula",
      resumo: "Estatuto das empresas públicas e sociedades de economia mista: governança, requisitos para dirigentes, função social e regras próprias de licitação e contratos.",
    },
    {
      norma: "LC 123/2006",
      nome: "Microempresa e empresa de pequeno porte",
      fonte: "aula",
      resumo:
        "Na licitação, a regularidade fiscal só é exigida para assinar o contrato, com prazo para regularizar (art. 43). Empate ficto: proposta de ME ou EPP até 10% acima da melhor (5% no pregão) (art. 44). Licitação exclusiva para itens de até R$ 80 mil (art. 48, I).",
    },
    {
      norma: "Lei 8.987/1995",
      nome: "Concessões e permissões",
      fonte: "aula",
      resumo:
        "Concessão: para pessoa jurídica ou consórcio, por concorrência ou diálogo competitivo, com prazo determinado. Permissão: para pessoa física ou jurídica, por contrato de adesão precário. Encampação é a retomada por interesse público, com lei autorizativa e indenização prévia. Caducidade é por inexecução do contrato.",
    },
    {
      norma: "Lei 11.107/2005",
      nome: "Consórcios públicos",
      fonte: "aula",
      resumo:
        "O consórcio é associação pública (direito público, integra a administração indireta de todos os entes) ou pessoa jurídica de direito privado. Nasce de protocolo de intenções ratificado por lei e funciona com contrato de rateio e contrato de programa.",
    },
    {
      norma: "Lei 9.637/1998 e Lei 9.790/1999",
      nome: "OS e OSCIP",
      fonte: "aula",
      resumo:
        "Organização Social: qualificação discricionária, contrato de gestão. OSCIP: qualificação vinculada pelo Ministério da Justiça, termo de parceria.",
      alerta: "O material do curso escreve \"Lei 9.737/98\" para as OS. O número correto é 9.637/1998.",
    },
    {
      norma: "Lei 13.019/2014",
      nome: "Marco das OSC (MROSC)",
      fonte: "aula",
      resumo:
        "Termo de colaboração (proposta da administração, com repasse), termo de fomento (proposta da OSC, com repasse) e acordo de cooperação (sem repasse), em regra precedidos de chamamento público.",
    },
    {
      norma: "Lei 12.846/2013",
      nome: "Lei Anticorrupção",
      fonte: "aula",
      resumo:
        "Responsabilidade objetiva, administrativa e civil, da pessoa jurídica por ato lesivo à administração. Multa de 0,1% a 20% do faturamento bruto. O acordo de leniência reduz a multa em até 2/3 e não dispensa a reparação do dano.",
    },
    {
      norma: "Lei 8.112/1990",
      nome: "Estatuto dos servidores federais",
      fonte: "aula",
      resumo:
        "Posse em até 30 dias da publicação do ato e exercício em 15 dias da posse. Penalidades: advertência, suspensão (até 90 dias), demissão, cassação de aposentadoria e destituição. Prescrição disciplinar: 5 anos (demissão), 2 (suspensão) e 180 dias (advertência). No PR, o estatuto aplicável é a Lei 6.174/1970.",
    },
    {
      norma: "EC 19/1998",
      nome: "Reforma administrativa",
      fonte: "aula",
      resumo:
        "Incluiu a eficiência no art. 37, a estabilidade após 3 anos com avaliação especial de desempenho e o subsídio. O fim do regime jurídico único foi validado pelo STF em 2024 (ADI 2.135), com efeitos para frente.",
    },
    {
      norma: "Lei 8.666/1993",
      nome: "Antiga lei de licitações",
      fonte: "aula",
      resumo: "Revogada. Os crimes saíram em 2021 (foram para o CP) e o restante deixou de valer em 30/12/2023. Não use as regras dela na prova.",
    },
  ],

  dh: [
    {
      norma: "Declaração Universal dos Direitos Humanos (1948)",
      nome: "DUDH",
      fonte: "caderno",
      resumo:
        "Aprovada pela Assembleia Geral da ONU em 10/12/1948, com 30 artigos. É uma resolução, não um tratado, mas é a principal referência de universalidade e indivisibilidade dos direitos.",
    },
    {
      norma: "Convenção Americana (Pacto de San José, 1969; Decreto 678/1992)",
      nome: "Convenção Americana sobre Direitos Humanos",
      fonte: "caderno",
      resumo:
        "Promulgada no Brasil em 1992, tem status supralegal (STF, RE 466.343), daí a Súmula Vinculante 25 (proibida a prisão do depositário infiel). O art. 7.5 fundamenta a audiência de custódia. Órgãos: Comissão Interamericana e Corte Interamericana, cuja competência contenciosa o Brasil reconheceu em 1998.",
    },
    {
      norma: "Decreto 7.037/2009",
      nome: "PNDH-3",
      fonte: "aula",
      resumo:
        "Seis eixos: interação democrática entre Estado e sociedade civil; desenvolvimento e direitos humanos; universalizar direitos num contexto de desigualdades; segurança pública, acesso à justiça e combate à violência; educação e cultura em direitos humanos; direito à memória e à verdade.",
    },
    {
      norma: "EC 45/2004",
      nome: "Tratados e federalização",
      fonte: "aula",
      resumo: "Tratado de direitos humanos com o rito do art. 5º, §3º, vale como emenda. O incidente de deslocamento de competência leva à Justiça Federal grave violação de direitos humanos (art. 109, V-A e §5º).",
    },
    {
      norma: "Lei 13.146/2015",
      nome: "Estatuto da Pessoa com Deficiência",
      fonte: "aula",
      resumo:
        "Pessoa com deficiência tem impedimento de longo prazo (físico, mental, intelectual ou sensorial) que, com as barreiras, obstrui sua participação (art. 2º). A deficiência não afeta a capacidade civil (art. 6º). Crimes nos arts. 88 a 91.",
    },
    {
      norma: "Lei 12.288/2010",
      nome: "Estatuto da Igualdade Racial",
      fonte: "aula",
      resumo: "População negra é a soma de pretos e pardos, por autodeclaração. Prevê ações afirmativas.",
    },
    {
      norma: "Lei 15.142/2025",
      nome: "Cotas em concursos",
      fonte: "novidade",
      resumo: "Reserva 30% das vagas em concursos e seleções públicas para pessoas pretas, pardas, indígenas e quilombolas, no lugar dos 20% da Lei 12.990/2014. O curso pede para saber o percentual.",
    },
    {
      norma: "Lei 14.821/2024",
      nome: "Política para a população em situação de rua (PNTC PopRua)",
      fonte: "novidade",
      resumo: "Primeira lei federal específica para pessoas em situação de rua (trabalho digno e cidadania), na esteira da ADPF 976 do STF.",
    },
    {
      norma: "Leis 11.340/2006, 10.741/2003, 7.716/1989 e 9.455/1997",
      nome: "Maria da Penha, Pessoa Idosa, Racismo e Tortura",
      fonte: "aula",
      resumo: "Também são citadas em Direitos Humanos. Os resumos estão em Direito Penal.",
    },
  ],
};

/** Leis que o curso só menciona de passagem (alterações antigas e referências), para consulta. */
export const LEIS_DE_PASSAGEM: Partial<Record<SubjectId, string>> = {
  pen:
    "Lei 7.209/1984 (nova Parte Geral do CP); Lei 9.714/1998 (penas alternativas); Lei 11.106/2005 (revogou adultério e rapto); Lei 14.532/2023 (injúria racial para a Lei 7.716); Lei 14.843/2024 (exame criminológico e saída temporária); DL 1.001/1969 (Código Penal Militar); Lei 9.437/1997 (antiga lei de armas); Lei 10.259/2001 (Juizados Federais); Lei 11.313/2006 (conexão no JECRIM); Lei 6.001/1973 (Estatuto do Índio); Lei 7.643/1987 (pesca de cetáceos); Lei 6.766/1979 (parcelamento do solo); Lei 8.617/1993 (mar territorial); Lei 12.529/2011 (defesa da concorrência); Lei 4.117/1962 (telecomunicações); Lei 13.188/2015 (direito de resposta); Lei 11.101/2005 (crimes falimentares); Lei 2.889/1956 (genocídio).",
  pp: "DL 3.931/1941 (Lei de Introdução ao CPP); Lei 6.416/1977 (reforma de fiança e penas); Lei 13.721/2018 (prioridade no corpo de delito); Lei 15.280/2025 (exame criminológico no crime sexual).",
  con: "Lei 12.063/2009 (ADO); EC 16/1997 (reeleição); EC 103/2019 (Previdência); EC 132/2023 (Reforma Tributária).",
};
