import type { Question } from "../../lib/types";

export const QUESTOES_PT: Question[] = [
  {
    id: "pt-001",
    materia: "pt",
    topico: "Crase",
    enunciado:
      "Assinale a alternativa em que o uso do acento grave indicativo de crase está CORRETO.",
    alternativas: [
      "Entreguei o relatório à ela pessoalmente.",
      "O delegado foi à pé até a delegacia mais próxima.",
      "A perícia se refere à colheita de vestígios no local do crime.",
      "Estamos dispostos à ajudar em qualquer investigação.",
      "Cheguei à uma conclusão precipitada sobre o caso.",
    ],
    correta: 2,
    explicacao:
      "Há crase na fusão da preposição \"a\" (exigida pelo verbo \"referir-se a\") com o artigo feminino \"a\" que antecede \"colheita\". Nas demais opções não há artigo feminino cabível: \"ela\" é pronome pessoal (não admite crase), \"pé\" é substantivo masculino, \"ajudar\" é infinitivo verbal, e \"uma\" é numeral/artigo indefinido — nenhum admite o \"a\" craseado.",
    origem: "banco",
  },
  {
    id: "pt-002",
    materia: "pt",
    topico: "Concordância verbal",
    enunciado:
      "Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão.",
    alternativas: [
      "Fazem dois anos que o inquérito foi instaurado.",
      "Devem haver novas provas no processo.",
      "A maioria dos policiais compareceu à convocação.",
      "Houveram diversas ocorrências registradas na madrugada.",
      "Existe, nos autos, indícios suficientes de autoria.",
    ],
    correta: 2,
    explicacao:
      "\"A maioria dos policiais compareceu\" está correta: com expressões partitivas (a maioria de, parte de, grande parte de), o verbo pode concordar com o núcleo \"maioria\" (singular), como ocorre aqui. \"Fazer\" e \"haver\" indicando tempo/existência são impessoais e ficam sempre na 3ª pessoa do singular (\"Faz dois anos\", \"Deve haver\", \"Houve diversas ocorrências\"); \"existir\", diferentemente de \"haver\", concorda normalmente com o sujeito plural (\"Existem indícios\").",
    origem: "banco",
  },
  {
    id: "pt-003",
    materia: "pt",
    topico: "Regência verbal e nominal",
    enunciado:
      "Assinale a alternativa em que a regência verbal está CORRETA, conforme a norma-padrão.",
    alternativas: [
      "O suspeito visava fugir da abordagem policial.",
      "O delegado assistiu o depoimento da vítima.",
      "As provas obtidas obedecem às exigências legais.",
      "O delegado preferia aguardar o laudo do que confiar no depoimento isolado.",
      "O advogado aspirava ao cargo, e todos simpatizavam ele.",
    ],
    correta: 2,
    explicacao:
      "\"Obedecer\" rege a preposição \"a\" (obedecer a algo), corretamente craseada antes de \"exigências\" (substantivo feminino plural): \"obedecem às exigências\". \"Visar\" no sentido de \"pretender\" exige preposição \"a\" (visava a fugir); \"assistir\" no sentido de \"presenciar\" é intransitivo indireto (assistiu ao depoimento); \"preferir\" rege \"a\", não \"do que\" (preferia aguardar o laudo A confiar no depoimento, nunca \"do que confiar\"); \"simpatizar\" exige \"com\" (simpatizavam com ele).",
    origem: "banco",
  },
  {
    id: "pt-004",
    materia: "pt",
    topico: "Classes de palavras",
    enunciado:
      "Na frase \"O agente, cautelosamente, aproximou-se do veículo suspeito\", a palavra destacada classifica-se como:",
    alternativas: [
      "Adjetivo, pois qualifica o agente.",
      "Advérbio de modo, pois modifica o verbo \"aproximou-se\".",
      "Substantivo abstrato.",
      "Conjunção subordinativa.",
      "Pronome indefinido.",
    ],
    correta: 1,
    explicacao:
      "\"Cautelosamente\" é um advérbio de modo formado pelo sufixo \"-mente\" acrescido ao adjetivo \"cautelosa\". Advérbios modificam verbos, adjetivos ou outros advérbios; aqui, indica o modo como o verbo \"aproximou-se\" ocorreu.",
    origem: "banco",
  },
  {
    id: "pt-005",
    materia: "pt",
    topico: "Pontuação",
    enunciado:
      "Assinale a alternativa em que a vírgula foi empregada corretamente para separar oração intercalada.",
    alternativas: [
      "O réu, que confessou o crime durante o interrogatório foi condenado.",
      "O réu que confessou o crime, durante o interrogatório, foi condenado.",
      "O réu, que confessou o crime durante o interrogatório, foi condenado.",
      "O réu que, confessou o crime durante o interrogatório foi, condenado.",
      "O réu que confessou, o crime durante o interrogatório foi condenado.",
    ],
    correta: 2,
    explicacao:
      "A oração subordinada adjetiva explicativa \"que confessou o crime durante o interrogatório\" deve vir isolada por vírgulas em ambos os lados, pois acrescenta uma informação adicional sobre \"o réu\" (já identificado), sem restringir seu sentido.",
    origem: "banco",
  },
  {
    id: "pt-006",
    materia: "pt",
    topico: "Interpretação de texto",
    enunciado:
      "\"A perícia técnica constitui etapa essencial da investigação criminal, pois fornece elementos objetivos que auxiliam na elucidação dos fatos, reduzindo a margem de erro decorrente de depoimentos contraditórios.\" A relação estabelecida entre as duas orações do período é de:",
    alternativas: [
      "Oposição, pois a segunda oração contraria a primeira.",
      "Causa/explicação, pois a segunda oração justifica a afirmação feita na primeira.",
      "Condição, pois a segunda oração impõe uma exigência à primeira.",
      "Comparação entre dois processos investigativos distintos.",
      "Alternância entre duas possibilidades excludentes.",
    ],
    correta: 1,
    explicacao:
      "A conjunção \"pois\", nesse contexto, tem valor explicativo/causal: a oração introduzida por ela justifica por que a perícia técnica é \"etapa essencial\" — porque fornece elementos objetivos que reduzem erros de depoimentos.",
    origem: "banco",
  },
  {
    id: "pt-007",
    materia: "pt",
    topico: "Ortografia",
    enunciado:
      "Assinale a alternativa em que todas as palavras estão grafadas corretamente.",
    alternativas: [
      "Excessão, previlégio, ascensão",
      "Discrição, retificar, beneficente",
      "Advinhação, extase, xuxu",
      "Catividade, adequação, exhausto",
      "Vultuoso, mecher, cumprimento",
    ],
    correta: 1,
    explicacao:
      "\"Discrição\" (qualidade de discreto), \"retificar\" (corrigir) e \"beneficente\" (que beneficia) estão corretas. As demais contêm erros: \"exceção\" (não \"excessão\"), \"privilégio\" (não \"previlégio\"), \"adivinhação\" (não \"advinhação\"), \"êxtase\" (não \"extase\"), \"exausto\" (não \"exhausto\"), \"mexer\" (não \"mecher\").",
    origem: "banco",
  },
  {
    id: "pt-008",
    materia: "pt",
    topico: "Coesão e coerência",
    enunciado:
      "Em \"O investigador reuniu diversas provas; entretanto, nenhuma delas era conclusiva\", o conectivo destacado estabelece relação de:",
    alternativas: [
      "Adição de ideias semelhantes.",
      "Conclusão decorrente das provas reunidas.",
      "Oposição/contraste entre a quantidade de provas e sua falta de força conclusiva.",
      "Finalidade da investigação.",
      "Proporção entre as duas orações.",
    ],
    correta: 2,
    explicacao:
      "\"Entretanto\" é conjunção adversativa e introduz uma ideia que contrasta com a anterior: apesar de haver diversas provas, nenhuma era conclusiva.",
    origem: "banco",
  },
  {
    id: "pt-009",
    materia: "pt",
    topico: "Sintaxe do período composto",
    enunciado:
      "Em \"Quando a perícia chegou ao local, os vestígios já haviam sido alterados\", a oração destacada classifica-se como:",
    alternativas: [
      "Subordinada substantiva objetiva direta.",
      "Subordinada adverbial temporal.",
      "Coordenada sindética aditiva.",
      "Subordinada adjetiva restritiva.",
      "Subordinada adverbial concessiva.",
    ],
    correta: 1,
    explicacao:
      "A oração \"Quando a perícia chegou ao local\" é introduzida pela conjunção subordinativa temporal \"quando\" e indica o momento em que ocorreu a ação da oração principal, caracterizando-se como subordinada adverbial temporal.",
    origem: "banco",
  },
  {
    id: "pt-010",
    materia: "pt",
    topico: "Concordância nominal",
    enunciado:
      "Assinale a alternativa em que a concordância nominal está de acordo com a norma-padrão.",
    alternativas: [
      "Seguem anexo os documentos solicitados pela autoridade policial.",
      "É proibido a entrada de pessoas não autorizadas na cena do crime.",
      "A prova pericial e o depoimento foram considerados relevante para a decisão.",
      "Os policiais, meio cansados, encerraram o plantão ao amanhecer.",
      "Os laudos periciais, bastante técnicos, foram considerados imprescindível para a denúncia.",
    ],
    correta: 3,
    explicacao:
      "\"Meio\", quando usado como advérbio (equivalente a \"um pouco\"), é invariável e não concorda com o adjetivo seguinte — por isso \"meio cansados\" está correto. Nas demais opções há erro de concordância: \"anexo\" deveria concordar com o substantivo a que se refere (\"seguem anexos os documentos\"); \"proibido\" também concorda (\"é proibida a entrada\"); \"relevante\", referindo-se a dois núcleos (\"a prova\" e \"o depoimento\"), deveria ir para o plural (\"relevantes\").",
    origem: "banco",
  },
  {
    id: "pt-011",
    materia: "pt",
    topico: "Modos de organização do discurso",
    enunciado:
      "\"O suspeito tinha estatura mediana, cabelos curtos e uma cicatriz visível na face esquerda.\" Esse trecho caracteriza-se predominantemente como:",
    alternativas: [
      "Narração, pois apresenta fatos em sucessão temporal.",
      "Descrição, pois apresenta características de um ser sem sequência temporal de ações.",
      "Dissertação, pois defende um ponto de vista sobre o suspeito.",
      "Injunção, pois instrui o leitor a agir de determinado modo.",
      "Diálogo direto entre o narrador e o suspeito.",
    ],
    correta: 1,
    explicacao:
      "O trecho apresenta traços físicos do suspeito (estatura, cabelos, cicatriz) sem qualquer sucessão de ações no tempo — é descrição. A narração organiza fatos numa linha temporal (o que aconteceu antes/depois); a dissertação argumenta em defesa de uma tese; a injunção dá ordens/instruções (verbos no imperativo, como \"preencha o boletim e assine\").",
    origem: "banco",
  },
  {
    id: "pt-012",
    materia: "pt",
    topico: "Tipos de discurso",
    enunciado:
      "\"Vou confessar tudo agora\", disse o suspeito. Assinale a alternativa que reproduz essa fala em discurso INDIRETO.",
    alternativas: [
      "O suspeito disse: \"Vou confessar tudo agora.\"",
      "O suspeito disse que iria confessar tudo naquele momento.",
      "\"Eu vou confessar tudo agora\" — pensou o suspeito, hesitante.",
      "\"Vou confessar tudo agora\", murmurou ele, olhando para o chão.",
      "O suspeito, atônito, mal conseguia articular palavras.",
    ],
    correta: 1,
    explicacao:
      "O discurso indireto reproduz a fala de outrem por meio de uma oração subordinada (geralmente iniciada por \"que\"), sem aspas, com ajuste de pessoa e tempo verbal e de expressões dêiticas: \"vou\" → \"iria\", \"agora\" → \"naquele momento\". As demais alternativas mantêm as aspas/marcas do discurso direto (reprodução literal da fala) ou apenas narram sem reportar a fala.",
    origem: "banco",
  },
  {
    id: "pt-013",
    materia: "pt",
    topico: "Sintaxe do período simples",
    enunciado:
      "Na oração \"O delegado entregou o mandado ao oficial de justiça\", o termo destacado \"ao oficial de justiça\" exerce a função sintática de:",
    alternativas: [
      "Objeto direto",
      "Objeto indireto",
      "Adjunto adnominal",
      "Predicativo do sujeito",
      "Complemento nominal",
    ],
    correta: 1,
    explicacao:
      "\"Entregar\" é verbo transitivo direto e indireto: entrega-se algo (objeto direto: \"o mandado\") a alguém (objeto indireto, preposicionado: \"ao oficial de justiça\"). O objeto indireto é o complemento verbal regido de preposição exigida pelo próprio verbo.",
    origem: "banco",
  },
  {
    id: "pt-014",
    materia: "pt",
    topico: "Semântica",
    enunciado:
      "Assinale a alternativa em que o par de palavras forma uma relação de SINONÍMIA no contexto policial.",
    alternativas: [
      "Depoimento e testemunho, referindo-se ao relato prestado perante a autoridade.",
      "Réu e vítima, ambos participantes do processo penal.",
      "Prisão e fiança, ambas relacionadas à liberdade do acusado.",
      "Flagrante e fragrante, por terem grafia semelhante.",
      "Indiciado e absolvido, por designarem a mesma fase processual.",
    ],
    correta: 0,
    explicacao:
      "\"Depoimento\" e \"testemunho\" são sinônimos aproximados nesse contexto: ambos designam o relato prestado por alguém à autoridade. As demais opções unem palavras de sentidos distintos ou opostos: réu/vítima são papéis processuais antagônicos; prisão/fiança são conceitos opostos (a fiança visa evitar ou cessar a prisão); flagrante/fragrante são PARÔNIMOS (grafia parecida, sentidos diferentes), não sinônimos; indiciado/absolvido representam situações processuais opostas.",
    origem: "banco",
  },
  {
    id: "pt-015",
    materia: "pt",
    topico: "Semântica",
    enunciado: "Assinale o par de palavras que forma uma relação de ANTONÍMIA.",
    alternativas: [
      "Culpado e inocente",
      "Crime e delito",
      "Vestígio e indício",
      "Testemunha e depoente",
      "Autoridade e agente",
    ],
    correta: 0,
    explicacao:
      "\"Culpado\" e \"inocente\" têm sentidos opostos (antônimos). As demais formam pares de sinônimos ou de termos apenas relacionados: \"crime\" e \"delito\" são praticamente sinônimos; \"vestígio\" e \"indício\" são próximos no vocabulário pericial/processual; \"testemunha\" e \"depoente\" designam quem presta depoimento; \"autoridade\" e \"agente\" são papéis distintos, mas não opostos.",
    origem: "banco",
  },
  {
    id: "pt-016",
    materia: "pt",
    topico: "Semântica",
    enunciado:
      "Assinale a alternativa em que a palavra destacada está empregada com o sentido CORRETO.",
    alternativas: [
      "O suspeito foi preso em flagrante delito.",
      "A sala exalava um flagrante aroma de café recém-passado.",
      "O delegado precisa retificar o mandado antes de cumpri-lo, ou seja, confirmá-lo como válido.",
      "A perícia chegou eminente, pois o prazo processual estava prestes a vencer.",
      "O policial precisava ratificar a arma apreendida antes de periciá-la, isto é, identificá-la fisicamente.",
    ],
    correta: 0,
    explicacao:
      "\"Flagrante delito\" está correto: flagrante designa o que é surpreendido no exato momento em que ocorre. Nas demais, houve troca por parônimos: \"fragrante\" (que tem fragrância/perfume) foi confundido com \"flagrante\"; \"retificar\" (corrigir, tornar exato) foi definido erroneamente como \"confirmar\" (que é o sentido de \"ratificar\"); \"eminente\" (ilustre, de destaque) foi usado no lugar de \"iminente\" (prestes a acontecer); e \"ratificar\" (confirmar/validar) foi usado no lugar de um verbo de identificação física, sentido que não possui.",
    origem: "banco",
  },
  {
    id: "pt-017",
    materia: "pt",
    topico: "Semântica",
    enunciado:
      "Na frase \"O delegado é a cabeça da investigação, mas machucou a cabeça na viatura\", a palavra \"cabeça\" é empregada em dois sentidos diferentes, porém relacionados entre si (a parte superior do corpo, por extensão de sentido, passa a designar também quem lidera). Esse fenômeno linguístico denomina-se:",
    alternativas: ["Polissemia", "Homonímia", "Paronímia", "Antonímia", "Hiperonímia"],
    correta: 0,
    explicacao:
      "Polissemia ocorre quando uma mesma palavra (uma só origem etimológica) desenvolve vários sentidos relacionados entre si, geralmente por extensão metafórica ou metonímica — como \"cabeça\" (parte do corpo → quem lidera, por estar \"à frente\"). Isso se distingue da homonímia, em que duas palavras de origens diferentes coincidem apenas na forma, sem relação de sentido — como \"manga\" (fruta, de origem malaio-portuguesa) e \"manga\" (parte da roupa, do latim \"manica\").",
    origem: "banco",
  },
  {
    id: "pt-018",
    materia: "pt",
    topico: "Ambiguidade",
    enunciado: "A frase \"O policial viu o suspeito com o binóculo\" é ambígua porque:",
    alternativas: [
      "Pode-se entender tanto que o policial usou o binóculo para ver o suspeito quanto que o suspeito estava portando o binóculo.",
      "A palavra \"binóculo\" está flexionada indevidamente no singular.",
      "Falta uma vírgula obrigatória antes da preposição \"com\".",
      "O verbo \"ver\" está conjugado em tempo verbal incompatível com o contexto.",
      "Há erro de concordância entre \"policial\" e \"viu\".",
    ],
    correta: 0,
    explicacao:
      "A ambiguidade (duplo sentido não intencional) surge porque o termo preposicionado \"com o binóculo\" pode se ligar tanto ao verbo \"viu\" (adjunto adverbial de instrumento: o policial usou o binóculo) quanto ao substantivo \"suspeito\" (adjunto adnominal: o suspeito que estava com o binóculo). É um caso clássico de ambiguidade estrutural por posição do termo na frase.",
    origem: "banco",
  },
  {
    id: "pt-019",
    materia: "pt",
    topico: "Modalizadores",
    enunciado: "Em \"Certamente, o réu será condenado\", a palavra destacada é um modalizador que expressa:",
    alternativas: [
      "Certeza/asserção do falante sobre o conteúdo da frase.",
      "Dúvida quanto ao resultado do julgamento.",
      "Sentimento de tristeza do falante.",
      "Finalidade da condenação.",
      "Comparação entre duas condenações distintas.",
    ],
    correta: 0,
    explicacao:
      "Modalizadores são elementos linguísticos que revelam a atitude ou avaliação do enunciador em relação ao que é dito (certeza, dúvida, possibilidade, obrigação, sentimento). \"Certamente\" expressa alto grau de convicção do falante quanto à condenação — um modalizador epistêmico de certeza.",
    origem: "banco",
  },
  {
    id: "pt-020",
    materia: "pt",
    topico: "Acentuação gráfica",
    enunciado: "Sobre a acentuação gráfica em português, assinale a afirmação CORRETA.",
    alternativas: [
      "Todas as palavras proparoxítonas são acentuadas graficamente, sem exceção.",
      "As palavras paroxítonas são sempre acentuadas, independentemente da terminação.",
      "As oxítonas terminadas em \"i\" e \"u\" recebem acento obrigatoriamente.",
      "Monossílabos átonos, como \"de\" e \"que\", devem ser acentuados.",
      "Os ditongos abertos \"ei\" e \"oi\" em paroxítonas continuam acentuados após o Acordo Ortográfico de 1990.",
    ],
    correta: 0,
    explicacao:
      "Proparoxítonas são sempre acentuadas, sem exceção (médico, público, árvore, último). Cuidado: palavras terminadas em \"-ção\", como \"execução\", são oxítonas, não proparoxítonas. Paroxítonas só são acentuadas conforme a terminação (\"casa\" não leva acento); oxítonas terminadas em \"i\"/\"u\" geralmente não recebem acento (caqui, urubu), salvo seguidas de \"s\"; monossílabos átonos nunca são acentuados; e o Acordo Ortográfico de 1990 eliminou o acento dos ditongos abertos \"ei\"/\"oi\" em paroxítonas (ideia, heroico, sem acento).",
    origem: "banco",
  },
  {
    id: "pt-021",
    materia: "pt",
    topico: "Intertextualidade",
    enunciado:
      "Uma reportagem sobre corrupção policial inicia com a frase \"Ser ou não ser corrupto, eis a questão que assombra a corporação\", em referência ao célebre verso de Hamlet, de Shakespeare. Essa construção é um exemplo de intertextualidade por:",
    alternativas: [
      "Paráfrase, pois reformula o texto original preservando integralmente seu sentido.",
      "Paródia, pois retoma o texto original e o reelabora com novo sentido crítico/irônico aplicado a outro contexto.",
      "Citação direta, pois reproduz literalmente o verso original sem qualquer alteração.",
      "Plágio, pois se apropria do texto alheio sem qualquer transformação.",
      "Epígrafe, pois apenas introduz o texto com uma frase de outro autor, sem reelaboração.",
    ],
    correta: 1,
    explicacao:
      "A paródia retoma uma obra ou frase conhecida (aqui, o verso de Shakespeare) e a reelabora com um sentido novo, geralmente crítico ou irônico, aplicado a outro contexto (a corrupção policial) — diferentemente da paráfrase, que reformula um texto mantendo sua ideia original.",
    origem: "banco",
  },
  {
    id: "pt-022",
    materia: "pt",
    topico: "Conectivos",
    enunciado:
      "Em \"Na medida em que as provas foram reunidas, a certeza da autoria aumentou\", o conectivo destacado estabelece relação de:",
    alternativas: [
      "Proporção entre dois processos simultâneos e graduais.",
      "Causa, equivalendo a \"porque\" ou \"uma vez que\".",
      "Concessão, admitindo um fato contrário ao esperado.",
      "Finalidade, indicando o objetivo da ação.",
      "Consequência, indicando o resultado da reunião de provas.",
    ],
    correta: 1,
    explicacao:
      "Apesar da semelhança com \"à medida que\" (que expressa proporção — dois processos simultâneos e graduais, como em \"à medida que a investigação avança, mais provas surgem\"), a locução \"na medida em que\" tem valor CAUSAL na norma culta, equivalendo a \"porque\"/\"uma vez que\". É uma das pegadinhas mais cobradas em provas sobre conectivos.",
    origem: "banco",
  },
  {
    id: "pt-023",
    materia: "pt",
    topico: "Pontuação",
    enunciado:
      "Compare: (I) \"Os policiais que estavam armados reagiram à emboscada.\" (II) \"Os policiais, que estavam armados, reagiram à emboscada.\" A diferença de pontuação entre as duas frases indica que:",
    alternativas: [
      "Em (I), apenas os policiais armados reagiram; em (II), entende-se que todos os policiais reagiram e todos estavam armados.",
      "As duas frases têm exatamente o mesmo sentido, mudando apenas o estilo.",
      "Em (I), nenhum policial reagiu; em (II), todos reagiram.",
      "A vírgula em (II) é um erro de pontuação, pois orações adjetivas nunca admitem vírgula.",
      "Em (I) a oração é explicativa; em (II), é restritiva.",
    ],
    correta: 0,
    explicacao:
      "A oração adjetiva restritiva (sem vírgulas) delimita o universo do antecedente — em (I), \"que estavam armados\" seleciona um subconjunto dos policiais (só os armados reagiram, supondo que havia outros não armados). A oração adjetiva explicativa (isolada por vírgulas) acrescenta uma informação sobre a totalidade do antecedente, sem restringi-lo — em (II), entende-se que TODOS os policiais reagiram, sendo \"armados\" apenas um comentário adicional sobre todos eles.",
    origem: "banco",
  },
  {
    id: "pt-024",
    materia: "pt",
    topico: "Crase",
    enunciado: "Assinale a alternativa em que o acento grave indicativo de crase foi empregado CORRETAMENTE.",
    alternativas: [
      "O suspeito fugiu correndo, cara à cara com o policial que o perseguia.",
      "O bife foi preparado à milanesa, seguindo a receita tradicional.",
      "Ele se recusou à responder as perguntas da autoridade.",
      "A vítima entregou o documento à ela, ainda trêmula.",
      "Encontrei à duas testemunhas no corredor do fórum.",
    ],
    correta: 1,
    explicacao:
      "\"À milanesa\" é locução adverbial de modo com o substantivo \"moda\" elíptico (\"à moda milanesa\") — expressão consagrada pelo uso, que mantém o acento indicativo de crase mesmo com o termo oculto. As demais violam regras de proibição da crase: antes de palavra repetida (\"cara a cara\"), antes de verbo no infinitivo, antes de pronome pessoal do caso reto (\"ela\") e antes de numeral sem artigo definido subentendido (\"duas testemunhas\", indeterminado).",
    origem: "banco",
  },
  {
    id: "pt-025",
    materia: "pt",
    topico: "Concordância verbal",
    enunciado:
      "Compare: (I) \"Vendem-se armas de fogo apreendidas em leilão.\" (II) \"Precisa-se de agentes qualificados para a diligência.\" Sobre a partícula \"se\" nas duas frases, é CORRETO afirmar que:",
    alternativas: [
      "Em (I), o \"se\" é partícula apassivadora e o verbo concorda com o sujeito paciente (\"armas\"); em (II), o \"se\" é índice de indeterminação do sujeito e o verbo fica sempre no singular.",
      "Em ambas, o \"se\" exerce a mesma função de índice de indeterminação do sujeito.",
      "Em (I), o verbo deveria ficar no singular (\"vende-se armas\"); a forma plural está incorreta.",
      "Em (II), o verbo deveria concordar com \"agentes\" e ir para o plural (\"precisam-se\").",
      "O \"se\" em ambas as frases é um pronome reflexivo.",
    ],
    correta: 0,
    explicacao:
      "Em (I), \"vendem-se armas\" é voz passiva sintética — \"armas\" é sujeito paciente do verbo transitivo direto \"vender\", por isso o verbo concorda normalmente com ele (plural). Em (II), \"precisar\" é transitivo indireto (rege a preposição \"de\"), o que impede a construção de voz passiva sintética; \"se\" é então índice de indeterminação do sujeito, e o verbo permanece sempre na 3ª pessoa do singular (\"precisa-se de agentes\", nunca \"precisam-se\").",
    origem: "banco",
  },
  {
    id: "pt-026",
    materia: "pt",
    topico: "Classes de palavras",
    enunciado: "Assinale a alternativa em que o emprego do pronome relativo está CORRETO.",
    alternativas: [
      "O caso, cujo o desfecho ninguém previa, chocou a cidade.",
      "A delegacia onde o inquérito foi registrado fica no centro da cidade.",
      "Este é o motivo onde o suspeito fugiu do local.",
      "O suspeito, cujo suas digitais foram encontradas, foi indiciado.",
      "A situação onde vivemos exige mais policiamento.",
    ],
    correta: 1,
    explicacao:
      "\"Onde\" deve ser empregado exclusivamente para retomar um antecedente que indique lugar físico (\"a delegacia onde...\"). Para retomar circunstâncias, situações ou motivos abstratos, usa-se \"em que\"/\"no qual\" e variações. O pronome relativo \"cujo\" (e flexões cujo/cuja/cujos/cujas) estabelece relação de posse, concorda em gênero e número com o substantivo que o segue (não com o antecedente) e NUNCA é seguido de artigo definido nem de outro possessivo.",
    origem: "banco",
  },
  {
    id: "pt-027",
    materia: "pt",
    topico: "Figuras de linguagem (metáfora, metonímia, ironia, eufemismo, hipérbole)",
    enunciado:
      "\"O delegado, com décadas de experiência, era uma raposa velha nos interrogatórios.\" A figura de linguagem predominante no trecho é:",
    alternativas: [
      "Metonímia, pois substitui o delegado por outro termo de sentido próximo.",
      "Metáfora, pois compara implicitamente o delegado a uma raposa, sem conectivo comparativo.",
      "Eufemismo, pois suaviza uma característica negativa do delegado.",
      "Ironia, pois afirma o oposto do que se quer comunicar.",
      "Hipérbole, pois exagera propositalmente uma qualidade do delegado.",
    ],
    correta: 1,
    explicacao:
      "Trata-se de metáfora: o delegado é diretamente identificado como \"uma raposa velha\" (astuta, experiente), sem o uso de conectivo comparativo como \"como\" — se houvesse \"como uma raposa\", seria comparação/símile, figura distinta da metáfora. Não há substituição por proximidade lógica (metonímia), suavização de algo negativo (eufemismo), inversão de sentido (ironia) nem exagero numérico ou de intensidade (hipérbole).",
    origem: "banco",
  },
  {
    id: "pt-028",
    materia: "pt",
    topico: "Figuras de linguagem (metáfora, metonímia, ironia, eufemismo, hipérbole)",
    enunciado:
      "\"O bairro inteiro compareceu ao velório para prestar as últimas homenagens ao policial que partiu.\" A expressão sublinhada é exemplo de:",
    alternativas: [
      "Metáfora, por comparar implicitamente a morte a uma viagem.",
      "Hipérbole, por exagerar o número de pessoas presentes no velório.",
      "Eufemismo, por suavizar a menção direta à morte do policial.",
      "Metonímia, por usar o continente (bairro) pelo conteúdo (moradores).",
      "Catacrese, por empregar um termo por falta de outro mais específico.",
    ],
    correta: 2,
    explicacao:
      "\"Partiu\" é eufemismo: suaviza a menção direta e crua à morte (\"morreu\"), amenizando o impacto emocional da informação — recurso comum em textos que tratam de temas sensíveis como óbito. Não há comparação implícita (metáfora), exagero de quantidade (hipérbole) nem substituição do todo pela parte ou de continente por conteúdo (metonímia) na expressão destacada.",
    origem: "banco",
  },
  {
    id: "pt-029",
    materia: "pt",
    topico: "Funções da linguagem (referencial, emotiva, conativa, poética, fática, metalinguística)",
    enunciado:
      "\"Denuncie já! Sua ligação pode salvar uma vida.\" A função da linguagem predominante nesse texto publicitário é:",
    alternativas: [
      "Referencial, por priorizar informações objetivas sobre o contexto.",
      "Emotiva, por expressar os sentimentos do emissor em primeira pessoa.",
      "Fática, por testar se o canal de comunicação está aberto.",
      "Conativa, por usar o imperativo para persuadir o receptor a agir.",
      "Metalinguística, por explicar o funcionamento da própria linguagem.",
    ],
    correta: 3,
    explicacao:
      "A função conativa (ou apelativa) centra-se no receptor, buscando persuadi-lo a uma ação — marca típica é o uso do modo imperativo (\"Denuncie já!\"), como ocorre no trecho. Não há prioridade em informar objetivamente um fato (referencial), expressão de sentimento do emissor (emotiva), teste do canal de comunicação (fática) nem explicação sobre a própria linguagem (metalinguística).",
    origem: "banco",
  },
  {
    id: "pt-030",
    materia: "pt",
    topico: "Funções da linguagem (referencial, emotiva, conativa, poética, fática, metalinguística)",
    enunciado:
      "Em um dicionário, a entrada \"inquérito: procedimento administrativo de investigação preliminar conduzido pela autoridade policial\" exemplifica predominantemente a função da linguagem:",
    alternativas: [
      "Poética, por explorar a forma da mensagem como recurso estético.",
      "Metalinguística, por usar a linguagem para definir/explicar a própria linguagem.",
      "Emotiva, por expressar a opinião pessoal de quem escreveu a definição.",
      "Fática, por manter aberto o canal entre emissor e receptor.",
      "Conativa, por buscar convencer o leitor a adotar determinada conduta.",
    ],
    correta: 1,
    explicacao:
      "A função metalinguística ocorre quando a linguagem é usada para explicar ou definir a própria linguagem — é exatamente o que faz uma entrada de dicionário, que usa palavras para definir o significado de outra palavra (\"inquérito\"). Não há exploração estética da forma (poética), expressão de sentimento (emotiva), teste do canal (fática) nem apelo para uma ação do leitor (conativa).",
    origem: "banco",
  },
  {
    id: "pt-031",
    materia: "pt",
    topico: "Vícios de linguagem (ambiguidade involuntária, cacofonia, pleonasmo vicioso, solecismo)",
    enunciado:
      "\"O escrivão entregou o laudo para o perito depois de encontrá-lo na sala de evidências.\" O vício de linguagem presente na frase é:",
    alternativas: [
      "Cacofonia, pela junção sonora desagradável entre duas palavras.",
      "Pleonasmo vicioso, pela repetição desnecessária de uma ideia.",
      "Solecismo, por erro de concordância verbal.",
      "Ambiguidade involuntária, pois não fica claro se \"encontrá-lo\" refere-se ao laudo ou ao perito.",
      "Barbarismo, pelo emprego de uma palavra fora da norma culta.",
    ],
    correta: 3,
    explicacao:
      "A frase é ambígua de forma não intencional: o pronome \"o\" em \"encontrá-lo\" pode retomar tanto \"o laudo\" quanto \"o perito\", sem que o contexto resolva com clareza qual foi encontrado na sala de evidências — diferente da ambiguidade proposital, usada como recurso estético em textos literários ou publicitários. Não há som desagradável na junção de palavras (cacofonia), repetição de ideia (pleonasmo vicioso) nem erro de concordância (solecismo).",
    origem: "banco",
  },
  {
    id: "pt-032",
    materia: "pt",
    topico: "Vícios de linguagem (ambiguidade involuntária, cacofonia, pleonasmo vicioso, solecismo)",
    enunciado:
      "\"Fizemos um breve resumo e um elo de ligação entre os depoimentos das testemunhas.\" O vício de linguagem presente é:",
    alternativas: [
      "Solecismo, por erro de regência verbal.",
      "Cacofonia, pela junção sonora indesejada de duas palavras.",
      "Pleonasmo vicioso, pela repetição de ideias já implícitas nos termos \"breve\" (que já indica resumo) e \"elo\" (que já indica ligação).",
      "Ambiguidade involuntária, por admitir mais de uma leitura possível.",
      "Neologismo, pela criação de uma palavra inexistente na língua.",
    ],
    correta: 2,
    explicacao:
      "Há pleonasmo vicioso em \"breve resumo\" (resumo já pressupõe brevidade/síntese) e em \"elo de ligação\" (elo já significa ligação), repetições desnecessárias que não acrescentam sentido — diferente do pleonasmo estilístico, usado propositalmente para dar ênfase em textos literários. Não há erro de regência ou concordância (solecismo), som desagradável (cacofonia), duplo sentido (ambiguidade) nem palavra inexistente (neologismo).",
    origem: "banco",
  },
  {
    id: "pt-033",
    materia: "pt",
    topico: "Colocação pronominal (próclise, mesóclise, ênclise)",
    enunciado: "Assinale a alternativa em que a colocação pronominal está de acordo com a norma-padrão.",
    alternativas: [
      "Entregar-lhe-ei o relatório assim que possível.",
      "Nunca lhe entreguei o documento solicitado.",
      "Me entregue o relatório imediatamente.",
      "O delegado entregou-lhe o mandado, e o agente cumpriu-o.",
      "As duas primeiras alternativas estão corretas.",
    ],
    correta: 4,
    explicacao:
      "Estão corretas: \"Entregar-lhe-ei\" emprega mesóclise, exigida com verbo no futuro do presente sem palavra atrativa antes dele; e \"Nunca lhe entreguei\" emprega próclise, exigida após advérbio de sentido negativo (\"nunca\"), palavra atrativa. Já \"Me entregue\" fere a norma culta ao iniciar frase com pronome oblíquo átono em ênclise disfarçada de próclise; a última alternativa (\"cumpriu-o\") está correta isoladamente, mas a opção que reúne as duas primeiras é a mais completa e também correta.",
    origem: "banco",
  },
  {
    id: "pt-034",
    materia: "pt",
    topico: "Colocação pronominal (próclise, mesóclise, ênclise)",
    enunciado:
      "Assinale a alternativa em que a colocação pronominal DESRESPEITA a norma-padrão.",
    alternativas: [
      "Quem o solicitou foi o próprio delegado.",
      "Comunicar-vos-ei o resultado assim que o laudo for concluído.",
      "Me chame assim que o laudo estiver pronto.",
      "Entregar-lhe-ei o mandado pessoalmente.",
      "Devolveu-se o objeto apreendido à vítima após a perícia.",
    ],
    correta: 2,
    explicacao:
      "\"Me chame assim que o laudo estiver pronto\" fere a norma-padrão por iniciar o período com pronome oblíquo átono em próclise sem que haja, antes do verbo, qualquer palavra atrativa (advérbio, pronome relativo/indefinido, conjunção subordinativa ou negação) — a norma culta rejeita começar frase com pronome átono; o correto seria a ênclise \"Chame-me\". Nas demais alternativas a colocação está correta: próclise após pronome relativo (\"quem o solicitou\"), mesóclise em verbo no futuro do presente sem palavra atrativa (\"Comunicar-vos-ei\", \"Entregar-lhe-ei\") e ênclise em início de oração afirmativa (\"Devolveu-se\").",
    origem: "banco",
  },
  {
    id: "pt-035",
    materia: "pt",
    topico: "Redação oficial e correspondência administrativa (padrão culto, impessoalidade, concisão)",
    enunciado:
      "Em conformidade com os princípios da redação oficial, é INCORRETO afirmar que o texto administrativo deve:",
    alternativas: [
      "Ser redigido com impessoalidade, evitando marcas de opinião pessoal do redator.",
      "Seguir o padrão culto da língua, com vocabulário técnico e formal.",
      "Priorizar a clareza e a concisão, evitando rodeios desnecessários.",
      "Adotar linguagem rebuscada e prolixa, valorizando períodos longos como sinal de formalidade.",
      "Manter uniformidade de estrutura entre documentos do mesmo tipo.",
    ],
    correta: 3,
    explicacao:
      "É justamente o oposto do que a redação oficial recomenda: prolixidade e rebuscamento desnecessário contrariam o princípio da clareza e concisão, que exige transmitir a informação de forma direta, com o menor número de palavras que preserve o sentido completo — formalidade não se confunde com period longos ou vocabulário difícil por si só. As demais alternativas descrevem corretamente princípios da redação oficial: impessoalidade, padrão culto e uniformidade.",
    origem: "banco",
  },
  {
    id: "pt-036",
    materia: "pt",
    topico: "Redação oficial e correspondência administrativa (padrão culto, impessoalidade, concisão)",
    enunciado:
      "Um agente policial precisa redigir um documento relatando, de forma descritiva e impessoal, os fatos apurados durante uma diligência. O expediente de redação oficial mais adequado a essa finalidade é:",
    alternativas: [
      "O ofício, por se tratar de comunicação externa entre órgãos distintos.",
      "O memorando, por se tratar de comunicação interna ágil entre setores.",
      "O relatório, por se tratar de exposição descritiva e detalhada de fatos apurados.",
      "A ata, por se tratar de registro de reunião com pauta e deliberações.",
      "A circular, por se tratar de comunicação padronizada a múltiplos destinatários.",
    ],
    correta: 2,
    explicacao:
      "O relatório é o expediente próprio para expor, de forma descritiva, impessoal e detalhada, fatos apurados — é o formato usado, por exemplo, em boletins de ocorrência e relatórios de diligência policial. O ofício destina-se à comunicação externa entre órgãos; o memorando, à comunicação interna ágil; a ata, ao registro formal de reunião; e a circular, à comunicação padronizada dirigida a múltiplos destinatários simultaneamente — nenhum desses é o formato voltado à exposição detalhada de fatos apurados em diligência.",
    origem: "banco",
  },
];
