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
      "Rigor mortis é a rigidez cadavérica decorrente de alterações bioquímicas musculares pós-morte.",
    explicacaoErradas:
      "Livor mortis refere-se às manchas de hipóstase (livores); algor mortis é o resfriamento do corpo; mumificação e saponificação são fenômenos transformativos tardios.",
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
      "O arco (adelto) é o tipo fundamental sem deltas, em que as linhas atravessam o dedo de um lado a outro.",
    explicacaoErradas:
      "A presilha possui um delta; o verticilo (ou composto/espiral) possui dois ou mais deltas.",
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
      "O confronto balístico compara as marcas de raiamento (estrias) deixadas pelo cano da arma no projétil disparado, permitindo identificar se determinado projétil foi disparado por determinada arma.",
    explicacaoErradas:
      "O exame de resíduo de disparo (GSR) detecta resíduos de pólvora nas mãos/roupas de um atirador.",
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
      "A documentoscopia examina documentos (manuscritos, assinaturas, impressos) para detectar falsificações, adulterações e verificar autenticidade.",
    explicacaoErradas:
      "Ela é distinta da odontologia legal (identificação por arcada dentária), da antropologia forense (identificação óssea) e da entomologia forense (uso de insetos para estimar IPM).",
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
      "O ferimento incisocortante (cortante) é produzido por instrumento de gume afiado deslizando sobre a pele, gerando bordas regulares e nítidas.",
    explicacaoErradas:
      "O ferimento contuso resulta de impacto por objeto rombo, com bordas irregulares; o corto-contuso combina corte com esmagamento; o perfurante é produzido por instrumento pontiagudo que penetra os tecidos.",
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
      "Na esganadura, a constrição do pescoço é feita pelas mãos do agressor, deixando estigmas ungueais (marcas de unhas) — por exigir a ação de terceiro, é sempre homicídio.",
    explicacaoErradas:
      "No enforcamento, o peso do próprio corpo produz um sulco oblíquo e descontínuo, geralmente compatível com suicídio ou acidente. No estrangulamento, uma força externa (laço, cordão) produz sulco horizontal e contínuo, sendo compatível com homicídio.",
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
      "Mendelsohn propôs uma escala de culpabilidade da vítima, indo da vítima completamente inocente até a vítima mais culpada que o agressor (\"vítima provocadora\"), quando ela dá causa direta e preponderante ao evento criminoso — como na situação descrita.",
    explicacaoErradas:
      "Há ainda a vítima simuladora, que forja falsamente ter sido vitimada, e a vítima imaginária, que apenas acredita ter sido vítima sem que o fato tenha ocorrido.",
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
      "No disparo encostado (à queima-roupa), os gases da pólvora são injetados sob pressão diretamente sob a pele, produzindo um orifício de bordas irregulares em forma estelar (\"boca de mina\"), com queimadura, esfumaçamento e, eventualmente, a marca do próprio cano da arma impressa na pele.",
    explicacaoErradas:
      "Em disparos a média/longa distância, esses sinais de proximidade diminuem ou desaparecem, restando apenas o orifício de entrada e o halo de enxugo.",
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
      "O corpo de delito é o conjunto de vestígios materiais deixados pela infração; o exame pode ser direto (o perito examina diretamente o vestígio/corpo) ou, quando os vestígios desaparecerem sem deixar traços, indireto/supletivo (art. 167, CPP), suprido pela prova testemunhal.",
    explicacaoErradas:
      "Quando a infração deixa vestígios, o exame de corpo de delito é indispensável, não podendo ser suprido apenas pela confissão do acusado (art. 158, CPP).",
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
      "Cocaína e anfetaminas são estimulantes (psicoanalépticas) do SNC, aumentando a atividade neural e produzindo euforia, aceleração cardíaca e insônia.",
    explicacaoErradas:
      "Depressoras (álcool, benzodiazepínicos, opioides) reduzem a atividade do SNC; perturbadoras/alucinógenas (LSD, psilocibina) distorcem a percepção sensorial sem deprimir ou estimular de forma linear o SNC.",
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
  {
    id: "for-022",
    materia: "for",
    topico: "Local de crime: isolamento, preservação e etapas do exame pericial",
    enunciado:
      "Ao chegar primeiro a um local onde acabou de ocorrer um crime, antes mesmo da chegada da equipe pericial, o dever do policial responsável pelo primeiro atendimento é, principalmente:",
    alternativas: [
      "Recolher os principais vestígios visíveis e levá-los à delegacia para agilizar a perícia.",
      "Isolar e preservar o local, impedindo alteração, contaminação ou desaparecimento de vestígios, sem manuseá-los.",
      "Permitir a entrada de familiares da vítima para reconhecimento imediato do corpo.",
      "Aguardar em local afastado, sem qualquer interferência sobre o acesso ao local.",
      "Liberar o local assim que fizer o registro fotográfico com o próprio celular.",
    ],
    correta: 1,
    explicacao:
      "O dever da primeira autoridade a chegar ao local — geralmente o policial que atende a ocorrência — é isolar e preservar a cena, impedindo alteração, contaminação ou desaparecimento de vestígios, sem manusear objetos, até a chegada da perícia especializada.",
    explicacaoErradas:
      "Recolher vestígios, permitir entrada de terceiros ou liberar o local prematuramente compromete a integridade da prova pericial.",
    origem: "banco",
  },
  {
    id: "for-023",
    materia: "for",
    topico: "Local de crime: isolamento, preservação e etapas do exame pericial",
    enunciado:
      "Assinale a sequência que representa corretamente as etapas clássicas do exame pericial em local de crime:",
    alternativas: [
      "Coleta de vestígios, preservação do local, registro fotográfico, laudo pericial, reconhecimento geral.",
      "Preservação do local, reconhecimento geral da cena, registro fotográfico/planimétrico, busca e coleta de vestígios, elaboração do laudo.",
      "Laudo pericial, reconhecimento geral, preservação do local, coleta de vestígios, registro fotográfico.",
      "Registro fotográfico, laudo pericial, preservação do local, reconhecimento geral, coleta de vestígios.",
      "Coleta de vestígios, laudo pericial, preservação do local, registro fotográfico, reconhecimento geral.",
    ],
    correta: 1,
    explicacao:
      "A sequência lógica do exame pericial em local de crime é: preservação do local, reconhecimento geral da cena, registro fotográfico e planimétrico, busca e coleta de vestígios (com uso de luvas, embalagens adequadas e etiquetagem) e, por fim, elaboração do laudo pericial.",
    explicacaoErradas:
      "Alterar essa ordem compromete a integridade da investigação, já que a coleta ou o laudo não podem anteceder a preservação e o reconhecimento inicial da cena.",
    origem: "banco",
  },
  {
    id: "for-024",
    materia: "for",
    topico: "Necropsia x exame de corpo de delito — diferenças e finalidades",
    enunciado:
      "Em relação à distinção entre necropsia e exame de corpo de delito, é correto afirmar que:",
    alternativas: [
      "Os dois termos são sinônimos absolutos, sem qualquer diferença conceitual.",
      "A necropsia é um exame específico realizado em cadáver para determinar a causa mortis, enquanto o exame de corpo de delito é conceito processual mais amplo, cabível também sobre pessoa viva, objetos ou local.",
      "O exame de corpo de delito só pode ser realizado em cadáver, nunca em pessoa viva.",
      "A necropsia é obrigatória em todo processo penal, independentemente de haver ou não vestígios materiais.",
      "O exame de corpo de delito é uma modalidade específica de necropsia, restrita a casos de morte violenta.",
    ],
    correta: 1,
    explicacao:
      "A necropsia (autópsia) é exame pericial específico da tanatologia forense, realizado em cadáver para determinar causa mortis e reconstituir a dinâmica dos fatos. Já o exame de corpo de delito é conceito processual penal mais amplo (art. 158 do CPP): perícia obrigatória sempre que a infração deixar vestígios materiais, podendo recair sobre pessoa viva (lesão corporal), morta, objetos ou o próprio local — a necropsia é, portanto, uma espécie de corpo de delito quando a vítima é cadáver, mas o gênero é mais abrangente.",
    origem: "banco",
  },
  {
    id: "for-025",
    materia: "for",
    topico: "Necropsia x exame de corpo de delito — diferenças e finalidades",
    enunciado:
      "Em um caso de lesão corporal grave em vítima sobrevivente, o exame pericial cabível para comprovar a materialidade do crime é:",
    alternativas: [
      "A necropsia, já que todo crime contra a pessoa exige exame post mortem.",
      "O exame de corpo de delito, realizado em pessoa viva, para atestar a existência e a extensão da lesão.",
      "A antropometria judiciária (Bertillonage).",
      "O exame necroscópico complementar.",
      "A perícia grafotécnica.",
    ],
    correta: 1,
    explicacao:
      "O exame de corpo de delito, previsto no art. 158 do CPP, é a perícia cabível sempre que a infração deixar vestígios materiais, podendo recair sobre pessoa viva — como no caso de lesão corporal — para atestar a existência e a extensão da lesão, comprovando a materialidade do crime.",
    explicacaoErradas:
      "A necropsia é exclusiva de cadáver, e as demais opções (antropometria, exame necroscópico, grafotécnica) não se aplicam à comprovação de lesão corporal em vítima sobrevivente.",
    origem: "banco",
  },
  {
    id: "for-026",
    materia: "for",
    topico: "Perfil genético (DNA) e bancos de dados forenses (RIBPG)",
    enunciado:
      "Após a Lei nº 15.295/2025, o art. 9º-A da Lei de Execução Penal passou a dispor, sobre a identificação do perfil genético do condenado, que",
    alternativas: [
      "a coleta da amostra biológica será realizada por agente público treinado, respeitada a cadeia de custódia, e a elaboração do laudo caberá a perito oficial.",
      "a coleta e o laudo devem ser feitos pelo mesmo perito oficial, sob pena de nulidade da prova.",
      "a coleta pode ser feita por qualquer pessoa indicada pelo diretor do presídio, dispensada a cadeia de custódia.",
      "o laudo pode ser elaborado pelo Delegado de Polícia, desde que acompanhado de duas testemunhas.",
      "a coleta depende do consentimento do condenado, e sua recusa não gera nenhuma consequência disciplinar.",
    ],
    correta: 0,
    explicacao:
      "Art. 9º-A da LEP, na redação da Lei 15.295/2025. O §7º diz que a coleta será realizada por agente público treinado e respeitará os procedimentos de cadeia de custódia definidos em lei e complementados pelo órgão de perícia oficial. O §9º reserva a elaboração do laudo ao perito oficial.",
    explicacaoErradas:
      "Antes, a redação de 2019 exigia perito oficial tanto para a coleta quanto para o laudo. A recusa do condenado em se submeter ao procedimento constitui falta grave (§8º).",
    origem: "banco",
    fonte: "Lei 7.210/1984 (LEP), art. 9º-A, com redação da Lei 15.295/2025",
  },
  {
    id: "for-027",
    materia: "for",
    topico: "Perfil genético (DNA) e bancos de dados forenses (RIBPG)",
    enunciado:
      "O sistema que integra os bancos de perfis genéticos da União, dos Estados e do Distrito Federal, permitindo o compartilhamento e a comparação de perfis para relacionar vestígios de diferentes locais de crime ao mesmo indivíduo, mesmo em investigações de estados diferentes, é a",
    alternativas: [
      "Rede Integrada de Bancos de Perfis Genéticos (RIBPG).",
      "AFIS, sistema automatizado de identificação de impressões digitais.",
      "SINIC, sistema nacional de informações criminais.",
      "INFOSEG, rede de informações de segurança pública.",
      "COAF, conselho de controle de atividades financeiras.",
    ],
    correta: 0,
    explicacao:
      "O Decreto 7.950/2013 instituiu, no âmbito do Ministério da Justiça e Segurança Pública, o Banco Nacional de Perfis Genéticos (BNPG) e a Rede Integrada de Bancos de Perfis Genéticos (RIBPG). O BNPG armazena perfis genéticos para subsidiar a apuração de crimes e é administrado por perito criminal federal. A RIBPG permite o compartilhamento e a comparação de perfis entre os bancos da União, dos Estados e do Distrito Federal, que aderem por acordo de cooperação técnica.",
    explicacaoErradas:
      "O AFIS trata de impressões digitais, não de DNA.",
    origem: "banco",
    fonte: "Decreto 7.950/2013",
  },
  {
    id: "for-028",
    materia: "for",
    topico: "Balística: percussão, tiro à queima-roupa e curta/média/longa distância",
    enunciado:
      "A lesão que apresenta marca de \"boca de mina\" (impressão do cano da arma) e queimadura pelos gases do disparo é característica do tiro:",
    alternativas: [
      "A longa distância.",
      "A média distância.",
      "A curta distância.",
      "À queima-roupa (encostado).",
      "Indireto, por ricochete.",
    ],
    correta: 3,
    explicacao:
      "No tiro à queima-roupa (ou encostado), o cano da arma toca ou quase toca a pele, deixando marca de \"boca de mina\" (impressão do cano) e, por vezes, queimadura pelos gases do disparo — é a distância mais próxima possível entre arma e alvo.",
    explicacaoErradas:
      "Nos tiros a curta e média distância há resíduos de pólvora ao redor do orifício, mas sem a impressão do cano; a longa distância não deixa qualquer resíduo de pólvora.",
    origem: "banco",
  },
  {
    id: "for-029",
    materia: "for",
    topico: "Balística: percussão, tiro à queima-roupa e curta/média/longa distância",
    enunciado:
      "No mecanismo de disparo de uma arma de fogo, a peça que golpeia a espoleta do cartucho, iniciando a ignição da pólvora que impulsiona o projétil, é denominada:",
    alternativas: [
      "Culatra.",
      "Percussor.",
      "Extrator.",
      "Estriamento do cano.",
      "Alma do cano.",
    ],
    correta: 1,
    explicacao:
      "O percussor é a peça que golpeia a espoleta do cartucho, iniciando a ignição da pólvora que impulsiona o projétil — é o mecanismo central da percussão.",
    explicacaoErradas:
      "A culatra é a parte posterior da arma que veda a câmara no momento do disparo; o extrator remove o estojo deflagrado; o estriamento e a alma do cano dizem respeito à trajetória e à identificação balística do projétil, não ao mecanismo de ignição.",
    origem: "banco",
  },
  {
    id: "for-030",
    materia: "for",
    topico: "Perfil genético (DNA) e bancos de dados forenses (RIBPG)",
    enunciado:
      "Segundo o art. 9º-A, §5º, da Lei de Execução Penal, com a redação da Lei nº 15.295/2025, a amostra biológica coletada do condenado",
    alternativas: [
      "só pode ser usada para permitir a identificação pelo perfil genético, vedada a fenotipagem genética.",
      "pode ser usada para fenotipagem, a fim de estimar a cor dos olhos e da pele de suspeitos desconhecidos.",
      "pode ser usada em pesquisas científicas sobre predisposição a doenças, desde que anonimizada.",
      "pode ser compartilhada com laboratórios privados para fins de testes de paternidade.",
      "deve ser guardada integralmente e por tempo indeterminado, vedado qualquer descarte.",
    ],
    correta: 0,
    explicacao:
      "Art. 9º-A, §5º, da LEP (redação da Lei 15.295/2025): a amostra só pode ser utilizada para o único e exclusivo fim de permitir a identificação pelo perfil genético, não estando autorizada a fenotipagem genética. A redação de 2019 também proibia a busca familiar, e a Lei 15.295 retirou essa proibição.",
    explicacaoErradas:
      "Pelo §6º, identificado o perfil, a amostra é descartada, guardando-se material suficiente para eventual nova perícia, vedado qualquer outro uso.",
    origem: "banco",
    fonte: "Lei 7.210/1984 (LEP), art. 9º-A, com redação da Lei 15.295/2025",
  },
  {
    id: "for-031",
    materia: "for",
    topico: "Perfil genético (DNA) e bancos de dados forenses (RIBPG)",
    enunciado:
      "Nos crimes hediondos e equiparados, a Lei de Execução Penal (art. 9º-A, §10, incluído pela Lei nº 15.295/2025) estabelece que o processamento dos vestígios biológicos coletados em locais de crime e corpos de delito e a inclusão dos perfis no banco deverão ser realizados, se possível, em até",
    alternativas: [
      "30 dias, contados da recepção da amostra pelo laboratório de DNA.",
      "10 dias, contados da coleta no local de crime.",
      "60 dias, contados da instauração do inquérito policial.",
      "90 dias, contados do recebimento da denúncia.",
      "1 ano, contado da prisão do suspeito.",
    ],
    correta: 0,
    explicacao:
      "Art. 9º-A, §10, da LEP (incluído pela Lei 15.295/2025): nos crimes hediondos e equiparados, o processamento dos vestígios biológicos coletados em locais de crime e corpos de delito e a inclusão dos perfis genéticos no banco deverão ser realizados, se possível, em até 30 dias contados da recepção da amostra pelo laboratório de DNA.",
    origem: "banco",
    fonte: "Lei 7.210/1984 (LEP), art. 9º-A, com redação da Lei 15.295/2025",
  },
  {
    id: "for-032",
    materia: "for",
    topico: "Perfil genético (DNA) e bancos de dados forenses (RIBPG)",
    enunciado:
      "Um condenado à reclusão em regime inicial fechado se recusa a fornecer material biológico para a identificação do perfil genético ao ingressar no estabelecimento prisional. Pela Lei de Execução Penal, essa recusa",
    alternativas: [
      "constitui falta grave.",
      "é um direito do condenado, sem nenhuma consequência, porque ninguém é obrigado a produzir prova contra si.",
      "constitui crime de desobediência, que deve ser apurado em inquérito próprio.",
      "constitui apenas falta leve, punida com advertência verbal.",
      "torna nula a condenação, que deve ser revista pelo juízo da execução.",
    ],
    correta: 0,
    explicacao:
      "Art. 9º-A, §8º, da LEP: constitui falta grave a recusa do condenado em submeter-se ao procedimento de identificação do perfil genético. Se ele não foi identificado no ingresso, deve ser identificado durante o cumprimento da pena (§4º). O titular tem acesso aos seus dados nos bancos e aos documentos da cadeia de custódia, para que a defesa possa contraditá-los (§3º).",
    origem: "banco",
    fonte: "Lei 7.210/1984 (LEP), art. 9º-A, com redação da Lei 15.295/2025",
  },

  {
    id: "for-033",
    materia: "for",
    topico: "Identificação humana",
    enunciado:
      "Na identificação humana pericial, quando o cadáver apresenta as impressões digitais preservadas (ainda que recuperáveis por reidratação), a ordem de prioridade entre os métodos de identificação, considerando custo, rapidez e complexidade, é:",
    alternativas: [
      "a papiloscopia deve anteceder a odontologia legal e o exame de DNA, que funcionam como métodos complementares e subsidiários, mais custosos e complexos.",
      "o exame de DNA deve sempre ser realizado em primeiro lugar, por ser o método de maior confiabilidade absoluta, independentemente do estado de preservação do corpo.",
      "a odontologia legal deve sempre preceder a papiloscopia, por exigir menor tempo de análise laboratorial do que a comparação de impressões digitais.",
      "a antropologia forense deve ser o primeiro método tentado, reservando-se a papiloscopia apenas para os casos de esqueletização total do cadáver.",
      "DNA, odontologia e papiloscopia devem ser aplicados simultaneamente, sem qualquer prioridade entre eles, por serem igualmente rápidos, baratos e de fácil execução.",
    ],
    correta: 0,
    explicacao:
      "Quando o cadáver preserva as digitais (mesmo exigindo a técnica da luva cadavérica ou reidratação), a papiloscopia é o método primário, por ser rápida, barata e de fácil comparação com bancos de dados. A odontologia legal é outro método primário, útil quando a papiloscopia é inviável (corpos carbonizados ou em putrefação avançada). O exame de DNA, embora altamente confiável, é subsidiário/complementar nesses casos, por seu custo mais alto, maior complexidade técnica e necessidade de amostras de referência.",
    origem: "banco",
  },
  {
    id: "for-034",
    materia: "for",
    topico: "Genética forense",
    enunciado:
      "Em relação ao DNA mitocondrial (mtDNA), utilizado na investigação de vínculos familiares e na identificação de restos humanos degradados, é correto afirmar que:",
    alternativas: [
      "por possuir baixo número de cópias por célula, é de difícil amplificação pela técnica de PCR, o que limita sua aplicação em restos humanos degradados.",
      "por ser transmitido por herança materna, não identifica um único indivíduo com exclusividade, pois parentes da linha materna compartilham o mesmo perfil.",
      "apresenta grau de polimorfismo muito baixo na região controle (D-loop), o que limita sua utilidade para estudos de linhagem e ancestralidade.",
      "não é possível diferenciar o mtDNA humano do mtDNA de outras espécies por meio das técnicas atuais de análise genética forense.",
      "não fornece haplogrupos informativos para estudos de linhagem materna e ancestralidade populacional.",
    ],
    correta: 1,
    explicacao:
      "A principal limitação do mtDNA é não identificar uma pessoa de forma exclusiva: por ser herdado da mãe sem recombinação, todos os parentes da linha materna compartilham o mesmo perfil mitocondrial — ao contrário do DNA nuclear (STRs), exclusivo de cada indivíduo.",
    explicacaoErradas:
      "O mtDNA é vantajoso por sua maior resistência à degradação e alto número de cópias por célula (o que facilita, e não dificulta, a amplificação por PCR), além de alto polimorfismo na região D-loop e grande utilidade para determinar haplogrupos.",
    origem: "banco",
  },
  {
    id: "for-035",
    materia: "for",
    topico: "Medicina legal",
    enunciado:
      "Em exames periciais de crimes sexuais, sobre a pesquisa de vestígios biológicos, assinale a alternativa correta:",
    alternativas: [
      "a coleta de material genético só é possível quando há ejaculação diretamente no canal vaginal da vítima, sendo inviável a partir de outros vestígios biológicos.",
      "a pesquisa de espermatozoides pode resultar negativa mesmo havendo ejaculação, quando o agressor apresenta azoospermia, isto é, ausência de espermatozoides no sêmen.",
      "o PSA e a fosfatase ácida prostática não são marcadores úteis para a identificação de vestígios de sêmen em casos de crimes sexuais.",
      "os espermatozoides só podem ser detectados em até 24 horas após a conjunção carnal, perdendo totalmente sua utilidade probatória após esse prazo.",
      "o material genético da vítima só pode ser extraído em até 48 horas após o fato, sendo descartada qualquer coleta realizada em momento posterior.",
    ],
    correta: 1,
    explicacao:
      "A pesquisa de espermatozoides pode ser negativa mesmo com ejaculação quando o agressor é azoospérmico (ausência de espermatozoides no sêmen) — por isso sua ausência não afasta, por si só, a ocorrência do crime.",
    explicacaoErradas:
      "O PSA e a fosfatase ácida prostática são marcadores bioquímicos válidos para detectar sêmen, mesmo sem espermatozoides. Espermatozoides podem ser detectados por até 72 horas ou mais após o ato, a depender das condições de conservação, e o DNA pode ser recuperado de diversos vestígios (células epiteliais, saliva, pelos, roupas), não exigindo ejaculação vaginal nem se limitando a 48 horas.",
    origem: "banco",
  },
  {
    id: "for-036",
    materia: "for",
    topico: "Tanatologia forense",
    enunciado:
      "Na cronotanatognose, os fenômenos cadavéricos transformativos conservadores — que retardam ou impedem a putrefação — incluem a mumificação e a saponificação (adipocera). Assinale a alternativa que descreve corretamente essa distinção:",
    alternativas: [
      "a mumificação é mais comum em magros e crianças, em solo arenoso e ventilado; a saponificação é mais comum em obesos, em solo argiloso e úmido.",
      "a mumificação é mais comum em indivíduos obesos, enquanto a saponificação ocorre preferencialmente em solos arenosos, secos e bem ventilados.",
      "ambos os fenômenos são classificados como transformativos destrutivos, assim como a putrefação, a maceração e a autólise do corpo.",
      "a saponificação confere ao cadáver aspecto pétreo e rochoso, enquanto a mumificação confere aspecto de cera ou sabão à superfície do corpo.",
      "os dois fenômenos independem das condições ambientais do local onde o corpo se encontra depositado após a morte.",
    ],
    correta: 0,
    explicacao:
      "A mumificação depende de ambiente seco, arenoso e ventilado, sendo mais frequente em indivíduos magros e crianças (ou por embalsamamento); a saponificação depende de ambiente úmido, solo argiloso e pouco oxigenado, iniciando-se a partir da sexta semana após a morte, sendo mais frequente em indivíduos obesos, com aspecto de cera ou sabão.",
    explicacaoErradas:
      "Mumificação e saponificação (adipocera) são fenômenos transformativos conservadores (ao lado da calcificação e da corificação), que se distinguem dos transformativos destrutivos (autólise, maceração e putrefação) por retardarem a destruição do corpo. A calcificação (aspecto pétreo) ocorre em fetos retidos no útero; a corificação é rara, ligada a sepultamento em urnas metálicas herméticas.",
    origem: "banco",
  },
  {
    id: "for-037",
    materia: "for",
    topico: "Tanatologia forense",
    enunciado:
      "Sobre a rigidez cadavérica (rigor mortis) e sua progressão no corpo, segundo a Lei de Nysten-Sommer, é correto afirmar que:",
    alternativas: [
      "a rigidez progride no sentido crânio-caudal na musculatura esquelética, mas o miocárdio e o diafragma tornam-se rígidos antes dos membros superiores.",
      "a rigidez se instala simultaneamente em todos os músculos do corpo, sem qualquer ordem de progressão entre as diferentes regiões corporais.",
      "a rigidez progride exclusivamente no sentido caudo-cranial, iniciando-se nos membros inferiores e terminando na nuca e na mandíbula.",
      "a intensidade e a velocidade de instalação da rigidez não sofrem qualquer influência da temperatura ambiente ou da causa da morte do indivíduo.",
      "uma vez instalada, a rigidez cadavérica é irreversível e permanece inalterada até a esqueletização completa do cadáver.",
    ],
    correta: 0,
    explicacao:
      "A Lei de Nysten-Sommer descreve a progressão crânio-caudal da rigidez cadavérica na musculatura esquelética: nuca e mandíbula primeiro, seguidas por membros superiores, tronco e, por último, membros inferiores. Contudo, na cronologia interna, o miocárdio e o diafragma enrijecem antes mesmo dos membros superiores.",
    explicacaoErradas:
      "A intensidade e a velocidade da instalação variam conforme temperatura ambiente, condição física do cadáver e causa da morte, e a rigidez é temporária: após 12 a 24 horas (podendo estender-se por 2 a 3 dias), cessa com um segundo relaxamento, dando lugar à putrefação.",
    origem: "banco",
  },
  {
    id: "for-038",
    materia: "for",
    topico: "Balística forense",
    enunciado:
      "Na avaliação pericial das lesões por projétil de arma de fogo (PAF) a curta distância, quanto às zonas produzidas pelos efeitos secundários do tiro, é correto afirmar que:",
    alternativas: [
      "a zona de tatuagem, formada por grãos de pólvora que queimam e se aderem à pele, pode ser totalmente removida por simples lavagem do cadáver.",
      "a zona de esfumaçamento, formada por fuligem e gases, pode ser removida pela lavagem; já a zona de tatuagem resulta de queimadura e não é removível.",
      "a zona de chamuscamento é indistinguível da zona de tatuagem, sendo ambas inteiramente removíveis pela lavagem do cadáver.",
      "as zonas de tatuagem, esfumaçamento e chamuscamento estão presentes inclusive nos disparos efetuados a longa distância, sem qualquer atenuação.",
      "a zona de esfumaçamento somente se forma nos disparos encostados, nunca nos disparos a curta distância sem contato direto.",
    ],
    correta: 1,
    explicacao:
      "A zona de esfumaçamento é formada por fuligem e gases depositados superficialmente na pele, podendo ser limpa pela lavagem (por isso também chamada de falsa queimadura). A zona de tatuagem resulta da impregnação de grãos de pólvora incombustos que queimam a pele e nela se fixam, não sendo removível por lavagem.",
    explicacaoErradas:
      "A zona de chamuscamento, por queimar a pele pela chama do disparo, também não é removível. Essas zonas secundárias ocorrem nos disparos a curta distância, desaparecendo a longa distância, e são distintas da boca de mina, exclusiva dos disparos encostados.",
    origem: "banco",
  },
  {
    id: "for-039",
    materia: "for",
    topico: "Traumatologia forense",
    enunciado:
      "Sobre a eletropatologia forense, que estuda as lesões e mortes causadas por energia elétrica, é correto afirmar que:",
    alternativas: [
      "o sinal de Lichtenberg, de aspecto arborescente, é exclusivo da eletricidade natural (raios), desaparecendo em até 48 horas se a vítima sobreviver.",
      "a marca elétrica de Jellinek é característica da eletricidade natural, formando-se exclusivamente após a queda de raios sobre a vítima.",
      "a fulminação designa o acidente elétrico de origem industrial em que a vítima sobrevive apenas com queimaduras superficiais no corpo.",
      "a eletroplessão é, por definição, sempre letal, sendo tratada pela doutrina como sinônimo exato de eletrocussão.",
      "em qualquer faixa de voltagem, a eletrocussão de origem industrial mata exclusivamente por fibrilação ventricular do coração.",
    ],
    correta: 0,
    explicacao:
      "O sinal de Lichtenberg é exclusivo da eletricidade natural (raios): reação vasomotora temporária, de padrão dendrítico avermelhado/arroxeado, que desaparece em até 48 horas se a vítima sobreviver (persistindo até a putrefação, em caso de morte).",
    explicacaoErradas:
      "A marca de Jellinek, por sua vez, é típica da eletricidade industrial (eletroplessão), no ponto de entrada da corrente. Fulguração é a sobrevivência a um raio, e fulminação é a morte imediata por raio — ambos termos da eletricidade natural. A eletroplessão é o gênero (qualquer acidente elétrico industrial), só letal quando configura eletrocussão; o mecanismo de morte varia com a voltagem: fibrilação ventricular (baixa), asfixia mecânica por tetania (média) ou paralisia bulbar/carbonização (alta).",
    origem: "banco",
  },
  {
    id: "for-040",
    materia: "for",
    topico: "Medicina legal",
    enunciado:
      "Segundo o art. 182 do Código de Processo Penal, em relação ao laudo pericial produzido nos autos, é correto afirmar que:",
    alternativas: [
      "o juiz não fica adstrito ao laudo, podendo aceitá-lo ou rejeitá-lo, no todo ou em parte, desde que fundamente sua decisão.",
      "o juiz deve sempre acatar integralmente as conclusões técnicas do perito, sem qualquer margem de discordância fundamentada.",
      "o laudo pericial só pode ser contestado por meio de recurso específico perante o tribunal de justiça competente.",
      "a rejeição do laudo pelo juiz depende de prévia autorização do Ministério Público no curso do processo penal.",
      "o laudo pericial vincula o juiz apenas nos crimes de menor potencial ofensivo, sendo facultativo nos demais casos.",
    ],
    correta: 0,
    explicacao:
      "O art. 182 do CPP consagra o princípio do livre convencimento motivado (sistema liberatório ou do livre convencimento): o juiz não fica adstrito ao laudo pericial, podendo aceitá-lo ou rejeitá-lo, no todo ou em parte, desde que fundamente devidamente sua decisão ao afastar as conclusões técnicas.",
    explicacaoErradas:
      "O perito é auxiliar da Justiça, mas o magistrado é o destinatário final da prova, não havendo vinculação automática, exigência de autorização do Ministério Público ou restrição a recurso específico para contestação.",
    origem: "banco",
  },
  {
    id: "for-041",
    materia: "for",
    topico: "Medicina legal",
    enunciado:
      "Segundo o art. 184 do Código de Processo Penal, a perícia requerida pelas partes pode ser negada pelo juiz ou pela autoridade policial quando não for necessária ao esclarecimento da verdade, excetuada apenas:",
    alternativas: [
      "a perícia grafotécnica, em qualquer crime de falsificação documental.",
      "a perícia contábil, em qualquer crime contra a administração pública.",
      "o exame de corpo de delito, nas infrações que deixam vestígios.",
      "a perícia psiquiátrica do acusado, em qualquer hipótese processual.",
      "a perícia balística, em qualquer crime praticado com arma de fogo.",
    ],
    correta: 2,
    explicacao:
      "O art. 184 do CPP estabelece a regra geral de que a perícia requerida pelas partes pode ser negada pelo juiz ou pela autoridade policial quando dispensável, protelatória ou impertinente ao esclarecimento da verdade. A única exceção absoluta é o exame de corpo de delito (direto ou indireto), cuja realização é obrigatória sempre que a infração deixar vestígios materiais (art. 158 do CPP), não podendo ser negado nem suprido pela simples confissão do acusado.",
    origem: "banco",
  },
  {
    id: "for-042",
    materia: "for",
    topico: "Asfixiologia forense",
    enunciado:
      "Entre os achados necroscópicos internos associados às asfixias mecânicas, as manchas de Paltauf se diferenciam das manchas de Tardieu porque:",
    alternativas: [
      "as de Paltauf são equimoses subpleurais maiores, de tonalidade vermelho-clara, típicas do afogamento por hemodiluição; as de Tardieu são petéquias menores, presentes nas demais asfixias.",
      "as manchas de Paltauf são petéquias puntiformes pequenas e escuras, inespecíficas, encontradas em qualquer asfixia mecânica, inclusive na esganadura e no estrangulamento.",
      "ambas as manchas são achados laboratoriais exclusivos da intoxicação por monóxido de carbono, não ocorrendo em nenhuma outra forma de asfixia mecânica.",
      "as manchas de Tardieu ocorrem apenas na superfície da pele, jamais em superfícies serosas de órgãos internos, como pulmão e coração.",
      "Paltauf e Tardieu são dois nomes diferentes dados ao mesmo achado necroscópico, a depender apenas da nomenclatura adotada por cada perito.",
    ],
    correta: 0,
    explicacao:
      "As manchas de Paltauf são equimoses subpleurais de dimensões variadas, contornos irregulares e tonalidade vermelho-clara, achado patognomônico do afogamento: a penetração do líquido sob pressão nas vias respiratórias rompe septos interalveolares e capilares, e a hemodiluição confere a cor mais clara. Já as manchas de Tardieu são petéquias puntiformes menores e mais escuras, decorrentes de simples hipertensão venosa/capilar, presentes em praticamente todas as demais asfixias mecânicas (enforcamento, estrangulamento, esganadura, sufocação direta).",
    explicacaoErradas:
      "As manchas de Tardieu aparecem em superfícies serosas (pulmão, coração) e também sob a pele. Paltauf e Tardieu não são o mesmo achado, e nenhuma das duas se relaciona à intoxicação por monóxido de carbono.",
    origem: "banco",
  },
  {
    id: "for-043",
    materia: "for",
    topico: "Asfixiologia forense",
    enunciado:
      "Em uma morte por asfixia relacionada à intoxicação por monóxido de carbono (CO), o exame necroscópico tipicamente revela:",
    alternativas: [
      "livores de tonalidade vermelho-viva (vermelho-cereja), pela formação de carboxihemoglobina, com sangue fluido e claro, sem a cianose das demais asfixias.",
      "cianose intensa e coloração arroxeada generalizada da pele e das mucosas, idêntica à observada no enforcamento e na esganadura da vítima.",
      "ausência completa de qualquer alteração de coloração na pele e nas vísceras do cadáver examinado.",
      "coloração amarelada da pele e das mucosas, semelhante à icterícia observada em doenças hepáticas crônicas.",
      "palidez cadavérica acentuada e generalizada, sem qualquer alteração perceptível na tonalidade do sangue.",
    ],
    correta: 0,
    explicacao:
      "A reação do CO com a hemoglobina forma a carboxihemoglobina (COHb), que confere aos livores cadavéricos, à pele e ao sangue uma tonalidade vermelho-viva (vermelho-cereja ou carminada), com o sangue permanecendo fluido e claro — diferentemente das demais asfixias mecânicas (enforcamento, estrangulamento, esganadura), que cursam com cianose e livores arroxeados.",
    explicacaoErradas:
      "Ao contrário do que se imagina intuitivamente, o cadáver intoxicado por monóxido de carbono não fica roxo/cianótico.",
    origem: "banco",
  },
  {
    id: "for-044",
    materia: "for",
    topico: "Asfixiologia forense",
    enunciado:
      "Entre as modalidades de asfixia por obstáculo nas vias aéreas, a distinção entre sufocação direta e sufocação posicional está em que:",
    alternativas: [
      "na direta, um objeto tapa a boca e o nariz da vítima; na posicional, não há obstáculo no rosto, pois a posição do corpo comprime o diafragma.",
      "ambas exigem necessariamente a presença de um laço ou instrumento mecânico ao redor do pescoço da própria vítima.",
      "a sufocação posicional é sempre consequência de ação de terceiro, nunca podendo ocorrer de forma acidental ou sem intenção.",
      "a sufocação direta decorre exclusivamente da compressão do tórax e do abdômen por peso externo, sem qualquer relação com boca ou nariz.",
      "não há distinção relevante entre essas duas modalidades, sendo tratadas pela doutrina médico-legal como sinônimos.",
    ],
    correta: 0,
    explicacao:
      "Na sufocação direta, um obstáculo físico externo (mão, travesseiro, fita adesiva, saco plástico) tapa mecanicamente a boca e o nariz da vítima. Na sufocação posicional, não há nenhum obstáculo tampando o rosto: a vítima morre porque a posição do corpo faz com que seu próprio peso comprima o diafragma ou dobre as vias aéreas, gerando fadiga extrema da musculatura respiratória.",
    explicacaoErradas:
      "Em nenhum dos dois casos há laço cervical envolvido (isso caracterizaria enforcamento ou estrangulamento), e a sufocação indireta (compressão torácica/abdominal por peso externo) é uma terceira modalidade, distinta das duas.",
    origem: "banco",
  },
  {
    id: "for-045",
    materia: "for",
    topico: "Criminologia",
    enunciado:
      "A Escola Clássica de Criminologia, com Cesare Beccaria como principal expoente, caracterizou-se por:",
    alternativas: [
      "basear-se no livre-arbítrio e no contratualismo, defendendo a proporcionalidade entre delito e pena e a humanização das penas.",
      "aplicar o método científico-experimental para identificar causas biológicas do crime, a partir do estudo direto do delinquente.",
      "negar qualquer função retributiva à pena, defendendo exclusivamente sua função ressocializadora perante o condenado.",
      "defender que o comportamento criminoso decorre predominantemente de fatores hereditários e antropológicos do indivíduo.",
      "fundamentar-se em levantamentos estatísticos sobre a distribuição geográfica da criminalidade em determinada região.",
    ],
    correta: 0,
    explicacao:
      "A Escola Clássica (Beccaria, Kant, Feuerbach) via o homem como um ser racional que escolhe livremente entre o crime e a norma (livre-arbítrio), concebendo o delito sob enfoque jurídico-abstrato. Fundada no contratualismo, defendeu a proporcionalidade entre delito e pena e a humanização das penas, em reação aos excessos e à arbitrariedade do sistema penal do Antigo Regime — tese central da obra \"Dos Delitos e das Penas\", de Beccaria.",
    explicacaoErradas:
      "O método científico-experimental e o estudo biológico/antropológico do delinquente são, ao contrário, marcas da Escola Positiva (Lombroso, Ferri, Garofalo).",
    origem: "banco",
  },
  {
    id: "for-046",
    materia: "for",
    topico: "Criminologia",
    enunciado:
      "A Teoria da Associação Diferencial, formulada por Edwin Sutherland para explicar inclusive os chamados crimes de colarinho branco, sustenta que:",
    alternativas: [
      "o comportamento criminoso é aprendido pela interação com outras pessoas, associando-se a padrões e valores favoráveis à prática delitiva.",
      "o comportamento criminoso é determinado geneticamente, sendo transmitido hereditariamente entre gerações de uma mesma família.",
      "o crime decorre exclusivamente da desorganização social de bairros pobres e periféricos, não ocorrendo em classes sociais mais favorecidas.",
      "a criminalidade é resultado direto de transtornos mentais não diagnosticados no agente criminoso.",
      "o comportamento criminoso é determinado unicamente pela ausência de policiamento ostensivo na região afetada.",
    ],
    correta: 0,
    explicacao:
      "Sutherland propôs que o comportamento criminoso, assim como qualquer outro comportamento, é aprendido por meio da interação social — processo de associação diferencial em que o indivíduo absorve, de grupos próximos, técnicas, motivos, racionalizações e atitudes favoráveis à violação da lei.",
    explicacaoErradas:
      "Essa teoria foi formulada justamente para explicar crimes de colarinho branco (praticados por pessoas de posição social elevada, no exercício de suas atividades profissionais), demonstrando que a criminalidade não se limita a fatores genéticos, a classes sociais pobres ou à ausência de policiamento.",
    origem: "banco",
  },
  {
    id: "for-047",
    materia: "for",
    topico: "Criminologia",
    enunciado:
      "O Labelling Approach (Teoria da Rotulação ou da Reação Social), associado a autores como Howard Becker, propõe que:",
    alternativas: [
      "o desvio não é uma qualidade intrínseca do ato, mas o resultado da rotulação de certos indivíduos pelas instâncias de controle social.",
      "o desvio é uma qualidade intrínseca do ato praticado, independentemente de qualquer reação social sobre o seu autor.",
      "a conduta criminosa é sempre resultado de características biológicas inatas do indivíduo rotulado como desviante.",
      "a reincidência criminal está relacionada exclusivamente a fatores econômicos, sem qualquer relação com a reação do meio social.",
      "a pena privativa de liberdade elimina, por definição, qualquer risco de rotulação posterior do indivíduo condenado.",
    ],
    correta: 0,
    explicacao:
      "O Labelling Approach desloca o foco da análise do ato e do autor para a reação social e as instâncias de controle (polícia, justiça, mídia): o desvio não é uma qualidade ontológica do comportamento, mas o produto da rotulação de certos indivíduos como \"criminosos\", o que pode gerar o chamado desvio secundário — o próprio rotulado passa a incorporar e reproduzir o papel social que lhe foi atribuído, dificultando sua reinserção social, inclusive após o cumprimento de pena privativa de liberdade.",
    origem: "banco",
  },
  {
    id: "for-048",
    materia: "for",
    topico: "Criminologia",
    enunciado:
      "Na criminologia, as chamadas \"cifras criminais\" (ou cifras ocultas da criminalidade) referem-se a:",
    alternativas: [
      "a diferença entre a criminalidade real e a registrada nas estatísticas oficiais, já que nem todo crime é notificado ou solucionado.",
      "o percentual de crimes solucionados pela polícia em determinado período, divulgado oficialmente pelas corporações de segurança pública.",
      "o valor financeiro estimado dos prejuízos causados por crimes patrimoniais em determinada região do país.",
      "o número de condenações confirmadas em segunda instância, excluídos os casos ainda em grau de recurso.",
      "a proporção de inquéritos policiais arquivados por falta de provas em determinado exercício anual.",
    ],
    correta: 0,
    explicacao:
      "As cifras criminais (ou cifra negra, cifra dourada e cifra cinzenta, conforme a gradação de subnotificação) representam a defasagem entre a criminalidade real e a criminalidade efetivamente conhecida pelas estatísticas oficiais — muitos crimes não chegam ao conhecimento das autoridades (por não serem denunciados, registrados ou elucidados), o que compromete a fidedignidade dos números oficiais como retrato completo da criminalidade de uma sociedade.",
    origem: "banco",
  },
  {
    id: "for-049",
    materia: "for",
    topico: "Criminologia",
    enunciado:
      "No âmbito da prevenção situacional do crime, a teoria do \"espaço defensável\", de Oscar Newman, sustenta que:",
    alternativas: [
      "o crime pode ser reduzido pelo desenho urbano que favoreça a vigilância natural dos moradores e o senso de territorialidade sobre o espaço comum.",
      "a prevenção criminal depende exclusivamente do aumento do efetivo policial nas ruas, sendo irrelevante o desenho arquitetônico dos espaços urbanos.",
      "ambientes urbanos densamente arborizados e com baixa iluminação são sempre mais seguros, por dificultarem a visualização do agressor.",
      "a criminalidade é determinada unicamente por fatores socioeconômicos, sendo indiferente a configuração física do espaço urbano.",
      "o desenho arquitetônico dos edifícios não produz qualquer efeito sobre as taxas de criminalidade de uma região.",
    ],
    correta: 0,
    explicacao:
      "Oscar Newman propôs o conceito de \"espaço defensável\" (defensible space): o desenho arquitetônico e urbanístico pode reduzir a criminalidade ao favorecer a vigilância natural (visibilidade entre vizinhos), o senso de territorialidade (apropriação do espaço comum pelos moradores) e a redução de áreas de acesso irrestrito e anônimo — integrando as teorias de prevenção situacional do crime, ao lado da teoria das atividades rotineiras (Cohen e Felson) e da escolha racional.",
    explicacaoErradas:
      "A simples ampliação do efetivo policial, a vegetação densa/baixa iluminação (que na verdade favorecem o esconderijo do agressor) e fatores puramente socioeconômicos não esgotam essa abordagem.",
    origem: "banco",
  },
];
