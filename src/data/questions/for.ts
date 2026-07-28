import type { Question } from "../../lib/types";

export const QUESTOES_FOR: Question[] = [
  {
    id: "for-001",
    materia: "for",
    topico: "Cadeia de custódia",
    enunciado:
      "A cadeia de custódia, conforme disciplinada no Código de Processo Penal (arts. 158-A a 158-F, incluídos pelo Pacote Anticrime), tem como principal finalidade:",
    alternativas: [
      "Definir a pena aplicável ao réu com base na gravidade do crime",
      "Garantir a rastreabilidade e a idoneidade do vestígio, do local do crime até seu descarte, preservando sua integridade probatória",
      "Substituir a necessidade de laudo pericial em crimes de menor potencial ofensivo",
      "Determinar a competência territorial para julgamento do processo",
      "Autorizar a destruição imediata de vestígios após a prisão do suspeito",
    ],
    correta: 1,
    explicacao:
      "A cadeia de custódia é o conjunto de procedimentos que documenta e rastreia o vestígio desde a coleta até seu descarte, assegurando que não houve contaminação, adulteração ou extravio, o que é essencial para a validade da prova pericial em juízo.",
    origem: "banco",
  },
  {
    id: "for-002",
    materia: "for",
    topico: "Tanatologia forense",
    enunciado:
      "O fenômeno cadavérico caracterizado pelo enrijecimento muscular progressivo do corpo após a morte, útil para estimar o intervalo pós-morte (IPM), denomina-se:",
    alternativas: ["Livor mortis", "Rigor mortis", "Algor mortis", "Mumificação", "Saponificação"],
    correta: 1,
    explicacao:
      "Rigor mortis é a rigidez cadavérica decorrente de alterações bioquímicas musculares pós-morte. Livor mortis refere-se às manchas de hipóstase (livores); algor mortis é o resfriamento do corpo; mumificação e saponificação são fenômenos transformativos tardios.",
    origem: "banco",
  },
  {
    id: "for-003",
    materia: "for",
    topico: "Papiloscopia",
    enunciado:
      "Na datiloscopia, o tipo fundamental de desenho papilar caracterizado por linhas que se dirigem de um lado a outro do dedo, sem formar deltas, é denominado:",
    alternativas: ["Presilha", "Verticilo", "Arco", "Composto", "Espiral"],
    correta: 2,
    explicacao:
      "O arco (adelto) é o tipo fundamental sem deltas, em que as linhas atravessam o dedo de um lado a outro. A presilha possui um delta; o verticilo (ou composto/espiral) possui dois ou mais deltas.",
    origem: "banco",
  },
  {
    id: "for-004",
    materia: "for",
    topico: "Balística forense",
    enunciado:
      "O exame pericial que permite associar um projétil a uma arma de fogo específica, a partir das raias e estrias deixadas no cano, é denominado:",
    alternativas: [
      "Exame de resíduo de disparo (GSR)",
      "Confronto balístico",
      "Exame de trajetória",
      "Necropsia",
      "Exame de local mediato",
    ],
    correta: 1,
    explicacao:
      "O confronto balístico compara as marcas de raiamento (estrias) deixadas pelo cano da arma no projétil disparado, permitindo identificar se determinado projétil foi disparado por determinada arma. O exame de resíduo de disparo (GSR) detecta resíduos de pólvora nas mãos/roupas de um atirador.",
    origem: "banco",
  },
  {
    id: "for-005",
    materia: "for",
    topico: "Toxicologia forense",
    enunciado:
      "Em casos de suspeita de envenenamento, o exame toxicológico é realizado prioritariamente sobre amostras como sangue, urina e vísceras, com o objetivo de:",
    alternativas: [
      "Determinar exclusivamente a hora da morte",
      "Identificar e quantificar substâncias tóxicas ou drogas presentes no organismo da vítima",
      "Confirmar a identidade civil da vítima",
      "Substituir o exame necroscópico",
      "Determinar o grupo sanguíneo do suspeito",
    ],
    correta: 1,
    explicacao:
      "A toxicologia forense identifica e quantifica substâncias químicas (venenos, drogas, álcool, medicamentos) no organismo, auxiliando a determinar se a morte ou lesão foi causada ou influenciada por intoxicação.",
    origem: "banco",
  },
  {
    id: "for-006",
    materia: "for",
    topico: "Genética forense",
    enunciado:
      "A técnica de identificação humana baseada na análise do DNA extraído de vestígios biológicos (sangue, saliva, cabelo com bulbo) é fundamentada principalmente na comparação de:",
    alternativas: [
      "Grupos sanguíneos ABO apenas",
      "Impressões digitais dos suspeitos",
      "Regiões de DNA altamente variáveis entre indivíduos (STRs — Short Tandem Repeats)",
      "Padrões de arcada dentária",
      "Características faciais por reconhecimento de imagem",
    ],
    correta: 2,
    explicacao:
      "A identificação por DNA em perícia criminal baseia-se na análise de STRs (sequências curtas repetidas em tandem), regiões do genoma altamente polimórficas entre indivíduos, permitindo comparação estatística de perfis genéticos com elevado grau de certeza.",
    origem: "banco",
  },
  {
    id: "for-007",
    materia: "for",
    topico: "Local de crime",
    enunciado:
      "Ao chegar a um local de crime ainda não isolado, a primeira providência do policial deve ser:",
    alternativas: [
      "Recolher pessoalmente os vestígios visíveis para acelerar a perícia",
      "Preservar e isolar o local, impedindo o acesso de pessoas não autorizadas, até a chegada da perícia",
      "Permitir que a imprensa registre o local para fins de transparência",
      "Realizar buscas extensas no local antes da perícia, em nome da celeridade",
      "Liberar o local assim que o corpo for removido",
    ],
    correta: 1,
    explicacao:
      "A preservação e o isolamento do local de crime são essenciais para evitar contaminação ou alteração dos vestígios antes do exame pericial, garantindo a integridade da prova material.",
    origem: "banco",
  },
  {
    id: "for-008",
    materia: "for",
    topico: "Documentoscopia",
    enunciado:
      "A área da criminalística responsável pelo exame de autenticidade de documentos, assinaturas e detecção de falsificações é a:",
    alternativas: ["Fonética forense", "Documentoscopia", "Odontologia legal", "Antropologia forense", "Entomologia forense"],
    correta: 1,
    explicacao:
      "A documentoscopia examina documentos (manuscritos, assinaturas, impressos) para detectar falsificações, adulterações e verificar autenticidade, sendo distinta da odontologia legal (identificação por arcada dentária), antropologia forense (identificação óssea) e entomologia forense (uso de insetos para estimar IPM).",
    origem: "banco",
  },
  {
    id: "for-009",
    materia: "for",
    topico: "Traumatologia forense",
    enunciado:
      "Uma lesão produzida por instrumento de superfície cortante, com bordas regulares e nítidas, resultante de deslizamento sobre a pele, é classificada como ferimento:",
    alternativas: ["Contuso", "Perfurocontuso", "Corto-contuso", "Cortante (incisocortante)", "Perfurante"],
    correta: 3,
    explicacao:
      "O ferimento incisocortante (cortante) é produzido por instrumento de gume afiado deslizando sobre a pele, gerando bordas regulares e nítidas. O ferimento contuso resulta de impacto por objeto rombo, com bordas irregulares; o corto-contuso combina corte com esmagamento; o perfurante é produzido por instrumento pontiagudo que penetra os tecidos.",
    origem: "banco",
  },
  {
    id: "for-010",
    materia: "for",
    topico: "Papiloscopia",
    enunciado:
      "No Sistema de Vucetich, adotado no Brasil para classificação datiloscópica, os desenhos papilares são classificados em quatro tipos fundamentais: arco, presilha interna, presilha externa e:",
    alternativas: ["Composto", "Verticilo", "Espiral duplo", "Laço misto", "Delta central"],
    correta: 1,
    explicacao:
      "O Sistema de Vucetich classifica os desenhos digitais em quatro tipos fundamentais: arco (sem deltas), presilha interna e presilha externa (um delta cada) e verticilo (dois ou mais deltas). É a base da papiloscopia adotada oficialmente no Brasil.",
    origem: "banco",
  },
  {
    id: "for-011",
    materia: "for",
    topico: "Asfixiologia forense",
    enunciado:
      "Na asfixiologia forense, a diferenciação entre enforcamento, estrangulamento e esganadura considera principalmente o agente causador e as características do sulco cervical. Assinale a alternativa correta:",
    alternativas: [
      "No enforcamento, a constrição é feita pelas mãos do agressor, sendo sempre homicídio",
      "No estrangulamento, o sulco é produzido pelo peso do próprio corpo da vítima, sendo oblíquo e descontínuo",
      "Na esganadura, a constrição é feita pelas mãos do agressor, deixando estigmas ungueais, sendo sempre homicídio",
      "No enforcamento, o sulco é sempre horizontal e contínuo, produzido por força externa",
      "A esganadura é compatível com suicídio, assim como o enforcamento",
    ],
    correta: 2,
    explicacao:
      "Na esganadura, a constrição do pescoço é feita pelas mãos do agressor, deixando estigmas ungueais (marcas de unhas) — por exigir a ação de terceiro, é sempre homicídio. No enforcamento, o peso do próprio corpo produz um sulco oblíquo e descontínuo, geralmente compatível com suicídio ou acidente. No estrangulamento, uma força externa (laço, cordão) produz sulco horizontal e contínuo, sendo compatível com homicídio.",
    origem: "banco",
  },
  {
    id: "for-012",
    materia: "for",
    topico: "Cadeia de custódia",
    enunciado:
      "De acordo com os arts. 158-A a 158-F do CPP, a cadeia de custódia do vestígio segue, na ordem correta, as seguintes etapas, iniciando pelo(a):",
    alternativas: [
      "Coleta, reconhecimento, isolamento, transporte",
      "Reconhecimento, isolamento, fixação, coleta",
      "Fixação, coleta, reconhecimento, acondicionamento",
      "Acondicionamento, transporte, coleta, reconhecimento",
      "Isolamento, reconhecimento, transporte, coleta",
    ],
    correta: 1,
    explicacao:
      "A cadeia de custódia, conforme regulamentada no CPP, segue a sequência: reconhecimento → isolamento → fixação → coleta → acondicionamento → transporte → recebimento → processamento → armazenamento → descarte, garantindo a rastreabilidade do vestígio em todas as etapas.",
    origem: "banco",
  },
  {
    id: "for-013",
    materia: "for",
    topico: "Criminologia",
    enunciado:
      "A Escola Positiva de Criminologia, tendo Cesare Lombroso como um de seus principais expoentes, caracterizou-se por:",
    alternativas: [
      "Defender o livre-arbítrio como fundamento exclusivo da responsabilidade penal, ignorando fatores biológicos.",
      "Adotar o método científico-experimental, buscando explicar o crime a partir de fatores biológicos, psicológicos e sociais do indivíduo delinquente, superando o enfoque puramente jurídico-abstrato da Escola Clássica.",
      "Defender que o crime é resultado exclusivo de escolhas racionais, sem qualquer influência de fatores externos.",
      "Negar qualquer relação entre biologia e comportamento criminoso.",
      "Fundar-se exclusivamente em princípios religiosos e morais, sem base científica.",
    ],
    correta: 1,
    explicacao:
      "A Escola Positiva (Lombroso, Ferri, Garofalo) rompeu com o enfoque abstrato/jurídico da Escola Clássica — que via o crime como ato de livre-arbítrio racional — e passou a estudar o delinquente por métodos científico-experimentais, buscando causas biológicas (Lombroso e o \"criminoso nato\"), psicológicas e sociológicas do comportamento criminoso, inaugurando a Criminologia como disciplina científica.",
    origem: "banco",
  },
  {
    id: "for-014",
    materia: "for",
    topico: "Vitimologia",
    enunciado:
      "Na classificação de Benjamin Mendelsohn, considerado o precursor da Vitimologia, a vítima que provoca deliberadamente o crime, sendo mais culpada do que o próprio agressor (como no caso de quem agride primeiro e acaba sendo morto em legítima defesa), é classificada como:",
    alternativas: [
      "Vítima completamente inocente",
      "Vítima com culpabilidade menor que o agressor",
      "Vítima tão culpada quanto o agressor",
      "Vítima mais culpada que o agressor (\"vítima provocadora\")",
      "Vítima simuladora",
    ],
    correta: 3,
    explicacao:
      "Mendelsohn propôs uma escala de culpabilidade da vítima, indo da vítima completamente inocente até a vítima mais culpada que o agressor (\"vítima provocadora\"), quando ela dá causa direta e preponderante ao evento criminoso — como na situação descrita. Há ainda a vítima simuladora, que forja falsamente ter sido vitimada, e a vítima imaginária, que apenas acredita ter sido vítima sem que o fato tenha ocorrido.",
    origem: "banco",
  },
  {
    id: "for-015",
    materia: "for",
    topico: "Criminologia digital",
    enunciado:
      "A criminologia digital distingue os chamados crimes cibernéticos \"próprios\" dos \"impróprios\". Assinale a alternativa correta sobre essa distinção:",
    alternativas: [
      "Crimes cibernéticos próprios são aqueles que só podem ser praticados por meio de dispositivo informático, atingindo bens jurídicos ligados diretamente à informática (ex.: invasão de dispositivo informático, art. 154-A do CP); impróprios são crimes tradicionais praticados com uso do meio eletrônico apenas como instrumento (ex.: estelionato praticado pela internet).",
      "Não existe distinção relevante entre crimes próprios e impróprios no âmbito digital.",
      "Crimes impróprios só podem ser cometidos por menores de idade.",
      "Crimes próprios são exclusivamente crimes contra a honra praticados em redes sociais.",
      "A distinção se refere apenas ao valor do prejuízo financeiro causado.",
    ],
    correta: 0,
    explicacao:
      "Crimes cibernéticos \"próprios\" (ou puros) só existem em razão da informática, tendo como bem jurídico protegido a própria segurança dos sistemas/dados (ex.: invasão de dispositivo, art. 154-A do CP); crimes \"impróprios\" (ou impuros) são crimes tradicionais (furto, estelionato, ameaça, crimes contra a honra) que já existiam e passaram a ser também praticados com o auxílio de meio eletrônico, sem que este seja elemento essencial do tipo penal.",
    origem: "banco",
  },
  {
    id: "for-016",
    materia: "for",
    topico: "Criminologia",
    enunciado:
      "A Teoria das Janelas Quebradas (Broken Windows Theory), formulada por James Q. Wilson e George Kelling, sustenta que:",
    alternativas: [
      "O crime é exclusivamente resultado de fatores genéticos e biológicos do indivíduo.",
      "Pequenos sinais de desordem urbana não reprimidos (vidros quebrados, pichações, sujeira) geram uma percepção de abandono que tende a atrair criminalidade mais grave, sugerindo que a repressão a pequenas infrações contribui para a prevenção de crimes maiores.",
      "O policiamento ostensivo é sempre ineficaz na prevenção de crimes patrimoniais.",
      "A pobreza é a única causa determinante da criminalidade urbana.",
      "A teoria defende a total abolição de qualquer forma de policiamento comunitário.",
    ],
    correta: 1,
    explicacao:
      "A teoria das janelas quebradas propõe que sinais visíveis de desordem e negligência transmitem uma mensagem de ausência de controle social, favorecendo a escalada de comportamentos antissociais e criminosos mais graves — fundamentando estratégias de policiamento voltadas à repressão de pequenas infrações e à manutenção da ordem urbana, associadas ao policiamento comunitário/de proximidade.",
    origem: "banco",
  },
  {
    id: "for-017",
    materia: "for",
    topico: "Balística forense",
    enunciado:
      "Na perícia balística, a análise da queimadura, do esfumaçamento (tatuagem) e da distribuição dos grãos de pólvora ao redor do orifício de entrada permite estimar a distância do disparo. Um disparo efetuado com a boca do cano encostada na pele (disparo encostado) tipicamente produz:",
    alternativas: [
      "Halo equimótico sem qualquer sinal de queimadura ou fuligem.",
      "Um orifício com bordas em \"boca de mina\" (estelar), com sinais de queimadura, esfumaçamento e, por vezes, a impressão do cano na pele, devido à ação dos gases sob pressão diretamente na derme.",
      "Ausência total de lesão visível, já que a arma não teve tempo de disparar corretamente.",
      "Um ferimento idêntico ao de um disparo a longa distância, sem qualquer diferença perceptível.",
      "Formação de sulco cervical característico de enforcamento.",
    ],
    correta: 1,
    explicacao:
      "No disparo encostado (à queima-roupa), os gases da pólvora são injetados sob pressão diretamente sob a pele, produzindo um orifício de bordas irregulares em forma estelar (\"boca de mina\"), com queimadura, esfumaçamento e, eventualmente, a marca do próprio cano da arma impressa na pele. Em disparos a média/longa distância, esses sinais de proximidade diminuem ou desaparecem, restando apenas o orifício de entrada e o halo de enxugo.",
    origem: "banco",
  },
  {
    id: "for-018",
    materia: "for",
    topico: "Criminalística",
    enunciado: "O Princípio da Troca (ou Princípio de Locard), fundamento teórico da criminalística, estabelece que:",
    alternativas: [
      "Todo criminoso sempre confessa o crime sob pressão psicológica adequada.",
      "Todo contato entre dois objetos ou pessoas deixa vestígios recíprocos — o criminoso leva consigo algo do local e deixa no local algo de si, ainda que em quantidades mínimas.",
      "A perícia deve sempre priorizar a confissão do suspeito em detrimento da prova material.",
      "Vestígios materiais só têm valor probatório se corroborados por testemunhas oculares.",
      "A troca de turno entre peritos invalida automaticamente a cadeia de custódia.",
    ],
    correta: 1,
    explicacao:
      "Formulado por Edmond Locard, o princípio da troca (ou \"princípio da transferência\") é a base teórica da criminalística moderna: todo contato deixa um rastro — o autor do crime leva consigo vestígios do local (fibras, sangue, DNA) e deixa no local vestígios de si mesmo (impressões digitais, pelos, fluidos) —, cabendo à perícia identificar e coletar essas trocas.",
    origem: "banco",
  },
  {
    id: "for-019",
    materia: "for",
    topico: "Medicina legal",
    enunciado: "O exame de corpo de delito, obrigatório nas infrações que deixam vestígios (art. 158, CPP), pode ser:",
    alternativas: [
      "Direto, quando realizado sobre o próprio corpo/objeto da infração; ou indireto, quando os vestígios já desapareceram e a prova é suprida por outros meios, como a prova testemunhal, quando possível.",
      "Sempre substituído pela confissão do acusado, dispensando qualquer perícia.",
      "Realizado exclusivamente pela autoridade policial, nunca por perito oficial.",
      "Aplicável apenas a crimes contra a vida, nunca a lesões corporais.",
      "Dispensável sempre que houver flagrante delito.",
    ],
    correta: 0,
    explicacao:
      "O corpo de delito é o conjunto de vestígios materiais deixados pela infração; o exame pode ser direto (o perito examina diretamente o vestígio/corpo) ou, quando os vestígios desaparecerem sem deixar traços, indireto/supletivo (art. 167, CPP), suprido pela prova testemunhal. Quando a infração deixa vestígios, o exame de corpo de delito é indispensável, não podendo ser suprido apenas pela confissão do acusado (art. 158, CPP).",
    origem: "banco",
  },
  {
    id: "for-020",
    materia: "for",
    topico: "Toxicologia forense",
    enunciado:
      "Do ponto de vista da toxicologia forense, substâncias como cocaína e anfetaminas são classificadas, quanto ao efeito no sistema nervoso central (SNC), como:",
    alternativas: [
      "Depressoras do SNC",
      "Estimulantes (psicoanalépticas) do SNC",
      "Perturbadoras (alucinógenas) do SNC",
      "Anestésicos gerais",
      "Relaxantes musculares periféricos",
    ],
    correta: 1,
    explicacao:
      "Cocaína e anfetaminas são estimulantes (psicoanalépticas) do SNC, aumentando a atividade neural e produzindo euforia, aceleração cardíaca e insônia. Depressoras (álcool, benzodiazepínicos, opioides) reduzem a atividade do SNC; perturbadoras/alucinógenas (LSD, psilocibina) distorcem a percepção sensorial sem deprimir ou estimular de forma linear o SNC.",
    origem: "banco",
  },
  {
    id: "for-021",
    materia: "for",
    topico: "Papiloscopia",
    enunciado:
      "Antes da consagração da datiloscopia como método de identificação humana, Alphonse Bertillon desenvolveu um sistema baseado em medidas antropométricas do corpo humano, conhecido como:",
    alternativas: [
      "Papiloscopia",
      "Antropometria judiciária (Bertillonage)",
      "Odontograma",
      "Reconhecimento fonográfico",
      "Grafoscopia",
    ],
    correta: 1,
    explicacao:
      "O \"Bertillonage\" (antropometria judiciária), criado por Alphonse Bertillon no fim do século XIX, identificava indivíduos por medidas corporais padronizadas (altura, comprimento de membros, crânio etc.). Foi progressivamente substituído pela datiloscopia (impressões digitais), método mais preciso, estável ao longo da vida e de aplicação mais simples, consagrado no Brasil pelo Sistema de Vucetich.",
    origem: "banco",
  },
];
