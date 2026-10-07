import type { Question } from "../../lib/types";

export const QUESTOES_PT: Question[] = [
  {
    id: "pt-001",
    materia: "pt",
    topico: "Crase",
    enunciado:
      "Assinale a alternativa em que o uso do acento grave indicativo de crase está CORRETO.",
    alternativas: [
      "Entreguei o relatório à ela pessoalmente, na sala do delegado.",
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
      "A equipe chegou no local do crime antes da perícia.",
      "O delegado assistiu o depoimento da vítima.",
      "As provas obtidas obedecem às exigências legais.",
      "O delegado preferia aguardar o laudo do que confiar no depoimento isolado.",
      "O advogado aspirava ao cargo, e todos simpatizavam ele.",
    ],
    correta: 2,
    explicacao:
      "\"Obedecer\" rege a preposição \"a\" (obedecer a algo), corretamente craseada antes de \"exigências\" (substantivo feminino plural): \"obedecem às exigências\". \"Chegar\", verbo de movimento, pede a preposição \"a\" (chegou ao local), não \"em\"; \"assistir\" no sentido de \"presenciar\" é transitivo indireto (assistiu ao depoimento); \"preferir\" rege \"a\", não \"do que\" (preferia aguardar o laudo A confiar no depoimento, nunca \"do que confiar\"); \"simpatizar\" exige \"com\" (simpatizavam com ele).",
    origem: "banco",
  },
  {
    id: "pt-004",
    materia: "pt",
    topico: "Classes de palavras",
    enunciado:
      "Na frase \"O agente, cautelosamente, aproximou-se do veículo suspeito\", a palavra \"cautelosamente\" classifica-se como:",
    alternativas: [
      "Adjetivo, pois atribui uma qualidade ao substantivo \"agente\".",
      "Advérbio de modo, pois modifica o verbo \"aproximou-se\".",
      "Substantivo abstrato, pois nomeia uma qualidade do agente.",
      "Conjunção subordinativa, pois liga duas orações do período.",
      "Pronome indefinido, pois se refere de modo vago ao agente.",
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
      "Causa/explicação, pois a segunda oração justifica a primeira.",
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
      "Em \"O investigador reuniu diversas provas; entretanto, nenhuma delas era conclusiva\", o conectivo \"entretanto\" estabelece relação de:",
    alternativas: [
      "Adição, somando à primeira ideia outra de mesmo sentido.",
      "Conclusão, apresentando um resultado das provas reunidas.",
      "Oposição, contrastando a quantidade de provas com sua fragilidade.",
      "Finalidade, indicando o objetivo com que as provas foram reunidas.",
      "Proporção, indicando que as duas ideias variam na mesma medida.",
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
      "Em \"Quando a perícia chegou ao local, os vestígios já haviam sido alterados\", a oração \"Quando a perícia chegou ao local\" classifica-se como:",
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
      "Descrição, pois caracteriza o suspeito sem relatar ações no tempo.",
      "Dissertação, pois defende um ponto de vista sobre o suspeito.",
      "Injunção, pois instrui o leitor a agir de determinado modo.",
      "Diálogo, pois reproduz a conversa do narrador com o suspeito.",
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
      "Na oração \"O delegado entregou o mandado ao oficial de justiça\", o termo \"ao oficial de justiça\" exerce a função sintática de:",
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
      "Depoimento e testemunho, como relato prestado à autoridade.",
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
      "Assinale a alternativa em que as palavras estão empregadas com o sentido CORRETO.",
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
      "Não fica claro se o binóculo estava com o policial ou com o suspeito.",
      "A palavra \"binóculo\" está flexionada indevidamente no singular.",
      "Falta uma vírgula obrigatória antes da preposição \"com\".",
      "O verbo \"ver\" está conjugado em tempo verbal incompatível com o contexto.",
      "Há erro de concordância entre o sujeito \"policial\" e o verbo \"viu\".",
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
    enunciado: "Em \"Certamente, o réu será condenado\", a palavra \"certamente\" é um modalizador que expressa:",
    alternativas: [
      "Certeza do falante quanto ao conteúdo do enunciado.",
      "Dúvida do falante quanto ao resultado do julgamento.",
      "Sentimento de tristeza do falante diante da condenação.",
      "Finalidade com que a condenação será aplicada.",
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
      "Proparoxítonas são sempre acentuadas, sem exceção (médico, público, árvore, último). Cuidado: palavras terminadas em \"-ção\", como \"execução\", são oxítonas, não proparoxítonas. Paroxítonas só são acentuadas conforme a terminação (\"casa\" não leva acento); oxítonas terminadas em \"i\"/\"u\", seguidas ou não de \"s\", não recebem acento (caqui, urubus), salvo quando o \"i\"/\"u\" tônico forma hiato com a vogal anterior (açaí, baú, Piauí); monossílabos átonos nunca são acentuados; e o Acordo Ortográfico de 1990 eliminou o acento dos ditongos abertos \"ei\"/\"oi\" em paroxítonas (ideia, heroico, sem acento).",
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
      "Paródia, pois retoma o verso e o reelabora, com sentido crítico, em outro contexto.",
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
      "Em \"Na medida em que não havia provas suficientes, o delegado deixou de pedir a prisão do suspeito\", a locução \"na medida em que\" estabelece relação de:",
    alternativas: [
      "Proporção entre dois processos simultâneos e graduais.",
      "Causa, equivalendo a \"porque\" ou \"uma vez que\".",
      "Concessão, admitindo um fato contrário ao esperado.",
      "Finalidade, indicando o objetivo da ação.",
      "Condição, equivalendo a \"caso\" ou \"se\".",
    ],
    correta: 1,
    explicacao:
      "Apesar da semelhança com \"à medida que\" (que expressa proporção — dois processos simultâneos e graduais, como em \"à medida que a investigação avança, mais provas surgem\"), a locução \"na medida em que\" tem valor CAUSAL na norma culta, equivalendo a \"porque\"/\"uma vez que\": a falta de provas é a causa de o delegado não ter pedido a prisão. É uma das pegadinhas mais cobradas em provas sobre conectivos.",
    origem: "banco",
  },
  {
    id: "pt-023",
    materia: "pt",
    topico: "Pontuação",
    enunciado:
      "Compare: (I) \"Os policiais que estavam armados reagiram à emboscada.\" (II) \"Os policiais, que estavam armados, reagiram à emboscada.\" A diferença de pontuação entre as duas frases indica que:",
    alternativas: [
      "Em (I), só os policiais armados reagiram; em (II), todos reagiram e todos estavam armados.",
      "As duas frases têm exatamente o mesmo sentido, mudando apenas o estilo.",
      "Em (I), nenhum policial armado reagiu; em (II), só os armados reagiram.",
      "A vírgula em (II) é um erro de pontuação, pois orações adjetivas nunca admitem vírgula.",
      "Em (I), a oração adjetiva é explicativa; em (II), ela passa a ser restritiva.",
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
      "Em (I), o \"se\" é partícula apassivadora; em (II), é índice de indeterminação do sujeito.",
      "Em ambas, o \"se\" exerce a mesma função de índice de indeterminação do sujeito.",
      "Em (I), o verbo deveria ficar no singular (\"vende-se armas\"); a forma plural está incorreta.",
      "Em (II), o verbo deveria concordar com \"agentes\" e ir para o plural (\"precisam-se\").",
      "Em ambas as frases, o \"se\" é pronome reflexivo, pois o sujeito pratica e sofre a ação.",
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
      "Metáfora, pois compara implicitamente o delegado a uma raposa.",
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
      "\"O bairro inteiro compareceu ao velório para prestar as últimas homenagens ao policial que partiu.\" O emprego de \"partiu\", em referência ao policial, é exemplo de:",
    alternativas: [
      "Metáfora, por comparar implicitamente a morte a uma viagem.",
      "Hipérbole, por exagerar o número de pessoas presentes no velório.",
      "Eufemismo, por suavizar a menção direta à morte do policial.",
      "Metonímia, por usar o continente (bairro) pelo conteúdo (moradores).",
      "Catacrese, por empregar um termo por falta de outro mais específico.",
    ],
    correta: 2,
    explicacao:
      "\"Partiu\" é eufemismo: suaviza a menção direta e crua à morte (\"morreu\"), amenizando o impacto emocional da informação — recurso comum em textos que tratam de temas sensíveis como óbito. Ainda que a imagem lembre uma viagem, o efeito central é atenuar a ideia de morte. No mesmo período, \"o bairro inteiro\" (o lugar pelos moradores) é metonímia, mas esse não é o recurso presente em \"partiu\"; nesse termo também não há exagero (hipérbole) nem emprego por falta de palavra específica (catacrese).",
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
      "Cacofonia, pela junção sonora desagradável entre duas palavras vizinhas.",
      "Pleonasmo vicioso, pela repetição desnecessária de uma ideia.",
      "Solecismo, por erro de concordância entre o verbo e o sujeito.",
      "Ambiguidade involuntária: \"encontrá-lo\" pode retomar o laudo ou o perito.",
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
      "Solecismo, por erro de regência no emprego do verbo \"fazer\".",
      "Cacofonia, pela junção sonora indesejada de duas palavras.",
      "Pleonasmo vicioso, pois \"resumo\" já é breve e \"elo\" já é ligação.",
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
      "Nunca entreguei-lhe o documento solicitado pelo cartório.",
      "O agente que entregou-me o mandado já deixou o fórum.",
      "Entregarei-lhe o relatório ao fim do expediente.",
      "Ninguém me avisou da mudança no horário do plantão.",
      "Quando chegou-se ao local, o corpo já tinha sido removido.",
    ],
    correta: 3,
    explicacao:
      "\"Ninguém\" é pronome indefinido, palavra atrativa que exige a próclise: \"Ninguém me avisou\". Nas demais, a colocação fere a norma-padrão: o advérbio negativo \"nunca\", o pronome relativo \"que\" e a conjunção subordinativa \"quando\" também atraem o pronome (Nunca lhe entreguei; que me entregou; Quando se chegou); e, com verbo no futuro do presente, não se usa ênclise — sem palavra atrativa, emprega-se a mesóclise (Entregar-lhe-ei o relatório).",
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
      "Seguir o padrão culto da língua, com vocabulário formal e acessível.",
      "Priorizar a clareza e a concisão, evitando rodeios desnecessários.",
      "Adotar linguagem rebuscada e prolixa, pois períodos longos indicam formalidade.",
      "Manter uniformidade de estrutura entre documentos do mesmo tipo.",
    ],
    correta: 3,
    explicacao:
      "É justamente o oposto do que a redação oficial recomenda: prolixidade e rebuscamento desnecessário contrariam o princípio da clareza e concisão, que exige transmitir a informação de forma direta, com o menor número de palavras que preserve o sentido completo — formalidade não se confunde com períodos longos ou vocabulário difícil por si só. As demais alternativas descrevem corretamente princípios da redação oficial: impessoalidade, padrão culto e uniformidade.",
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
      "O despacho, por se tratar de decisão da autoridade sobre o andamento de um processo.",
      "O relatório, por se tratar de exposição descritiva e detalhada de fatos apurados.",
      "A ata, por se tratar de registro de reunião com pauta e deliberações.",
      "A circular, por se tratar de comunicação padronizada a múltiplos destinatários.",
    ],
    correta: 2,
    explicacao:
      "O relatório é o expediente próprio para expor, de forma descritiva, impessoal e detalhada, fatos apurados — é o formato usado, por exemplo, em boletins de ocorrência e relatórios de diligência policial. O ofício é o expediente de comunicação oficial (desde a 3ª edição do Manual de Redação da Presidência da República, de 2018, o memorando e o aviso foram abolidos e toda comunicação no padrão ofício, interna ou externa, se chama ofício); o despacho registra a decisão da autoridade num processo; a ata, ao registro formal de reunião; e a circular, à comunicação padronizada dirigida a múltiplos destinatários simultaneamente — nenhum desses é o formato voltado à exposição detalhada de fatos apurados em diligência.",
    origem: "banco",
  },
  {
    id: "pt-037",
    materia: "pt",
    topico: "Semântica",
    enunciado:
      "Assinale a frase em que um parônimo foi empregado INDEVIDAMENTE, no lugar de outro.",
    alternativas: [
      "O juiz expediu o mandado de prisão, e a equipe o cumpriu na mesma tarde.",
      "O motorista infringiu o Código de Trânsito ao avançar o sinal vermelho.",
      "A delegacia regularizou a situação de vários emigrantes recém-chegados ao país.",
      "O tráfego na rodovia ficou lento por causa da barreira montada pela polícia.",
      "A sessão do júri foi suspensa para o almoço e retomada às 14 horas.",
    ],
    correta: 2,
    explicacao:
      "Emigrante é quem sai do próprio país (visto a partir da origem); imigrante é quem entra em outro país (visto a partir do país que o recebe). Como a frase fala de pessoas \"recém-chegadas ao país\", o termo adequado é \"imigrantes\". As demais empregam corretamente: mandado (ordem judicial) × mandato (procuração; período de exercício de cargo eletivo); infringir (violar, transgredir) × infligir (aplicar pena ou castigo); tráfego (fluxo de veículos) × tráfico (comércio ilegal); sessão (reunião, período de funcionamento) × seção (divisão, departamento) × cessão (ato de ceder).",
    origem: "banco",
    fonte: "FGV · TCE-SC 2026 · Auditor Fiscal de Controle Externo (adaptada)",
  },
  {
    id: "pt-038",
    materia: "pt",
    topico: "Semântica",
    enunciado:
      "\"Durante o desfile, os cavalheiros do Regimento de Polícia Montada passaram em formação impecável; depois, já desmontados, mostraram-se verdadeiros cavaleiros no trato com as crianças.\" No trecho, há troca entre parônimos. A correção adequada é:",
    alternativas: [
      "Trocar só a palavra do desfile por \"cavaleiros\", mantendo \"cavaleiros\" também no trato com as crianças.",
      "Trocar as duas palavras entre si: \"cavaleiros\" no desfile e \"cavalheiros\" no trato com as crianças.",
      "Trocar só a palavra do trato com as crianças por \"cavalheiros\", mantendo \"cavalheiros\" no desfile.",
      "Manter o trecho como está, pois as duas palavras são sinônimas e podem ser alternadas livremente.",
      "Trocar \"cavaleiros\" por \"cavalares\", adjetivo que qualifica quem é gentil e educado com as pessoas.",
    ],
    correta: 1,
    explicacao:
      "Cavaleiro é quem anda a cavalo — os policiais da tropa montada, no desfile; cavalheiro é o homem gentil, educado, cortês — como se mostraram no trato com as crianças. O trecho inverteu os parônimos, por isso as duas palavras devem trocar de lugar. \"Cavalar\" é adjetivo relativo a cavalo (e, em sentido figurado, \"enorme\", como em \"dose cavalar\"), sem relação com gentileza.",
    origem: "banco",
    fonte: "FGV · TJ-RJ 2026 · Analista Judiciário (adaptada)",
  },
  {
    id: "pt-039",
    materia: "pt",
    topico: "Semântica",
    enunciado:
      "Em \"Com a nova lei, o atendimento às vítimas de violência doméstica ganhou reforço nas delegacias do estado\", o verbo \"ganhar\" está empregado no mesmo sentido que em:",
    alternativas: [
      "A equipe da Polícia Civil ganhou o torneio de tiro esportivo.",
      "Assim que ouviu a sirene, o suspeito ganhou a rua pelos fundos.",
      "Ao pedir novas diligências, a defesa só quis ganhar tempo.",
      "A delegacia ganhou novas viaturas do governo estadual.",
      "Antes do concurso, ele ganhava a vida como motorista de aplicativo.",
    ],
    correta: 3,
    explicacao:
      "No enunciado, \"ganhou reforço\" significa \"recebeu reforço\" — o mesmo sentido de \"ganhou novas viaturas do governo\" (recebeu). Nas demais frases, o verbo assume outros sentidos (polissemia): \"ganhou o torneio\" = venceu; \"ganhou a rua\" = alcançou, chegou a; \"ganhar tempo\" = protelar, adiar; \"ganhava a vida\" = sustentava-se, trabalhava.",
    origem: "banco",
    fonte: "FGV · TJ-SC 2026 · Técnico Judiciário Auxiliar (adaptada)",
  },
  {
    id: "pt-040",
    materia: "pt",
    topico: "Semântica",
    enunciado:
      "Em cada opção, a segunda frase reescreve a primeira trocando o verbo \"haver\" por outro verbo. Assinale a opção em que a reescrita mantém o sentido original e respeita a norma-padrão.",
    alternativas: [
      "Houve um tiroteio na saída do estádio. / Ocorreu um tiroteio na saída do estádio.",
      "Havia dez anos que o caso estava arquivado. / Existiam dez anos que o caso estava arquivado.",
      "Há uma câmera de segurança em frente à agência. / Acontece uma câmera de segurança em frente à agência.",
      "Houve várias denúncias contra o suspeito. / Existiu várias denúncias contra o suspeito.",
      "Há suspeitos foragidos na região. / Tem suspeitos foragidos na região.",
    ],
    correta: 0,
    explicacao:
      "Em \"Houve um tiroteio\", \"haver\" indica a ocorrência de um fato, por isso pode ser trocado por \"ocorrer\" (ou \"acontecer\"), que concorda com o sujeito \"um tiroteio\". Nas demais: \"haver\" indicando tempo decorrido equivale a \"fazer\" (Fazia dez anos), não a \"existir\"; uma câmera é um objeto, que \"existe\", não \"acontece\"; ao trocar o impessoal \"haver\" por \"existir\", o verbo passa a concordar com o sujeito (Existiram várias denúncias); e \"ter\" no sentido de \"existir\" (Tem suspeitos) é uso coloquial, não aceito pela norma-padrão.",
    origem: "banco",
    fonte: "FGV · TJ-MS 2026 · Analista Judiciário (adaptada)",
  },
  {
    id: "pt-041",
    materia: "pt",
    topico: "Ortografia",
    enunciado:
      "Assinale a frase que apresenta ERRO de grafia.",
    alternativas: [
      "O coautor do crime cumpre pena no regime semiaberto.",
      "O ex-delegado agora dá aulas numa autoescola do bairro.",
      "A obra de infraestrutura atrasou por falta de verba.",
      "A política de bem estar dos servidores foi aprovada ontem.",
      "O plano antissequestro foi apresentado ao superintendente.",
    ],
    correta: 3,
    explicacao:
      "\"Bem-estar\" se escreve com hífen, como \"bem-vindo\" e \"bem-sucedido\". As demais seguem o Acordo Ortográfico: o prefixo \"co-\" se junta ao segundo elemento (coautor); prefixo terminado em vogal + vogal diferente: grafia junta (semiaberto, autoescola, infraestrutura); \"ex-\", no sentido de \"anterior\", sempre leva hífen (ex-delegado); e, se o segundo elemento começa por \"r\" ou \"s\" depois de prefixo terminado em vogal, a consoante é dobrada (antissequestro).",
    origem: "banco",
    fonte: "FGV · ALERJ 2026 · Especialista Legislativo (adaptada)",
  },
  {
    id: "pt-042",
    materia: "pt",
    topico: "Ortografia",
    enunciado:
      "Assinale a frase em que os símbolos de unidades de medida estão grafados corretamente.",
    alternativas: [
      "A perseguição se estendeu por 12 kms pela rodovia.",
      "A cerca tinha 3 mts de altura e arame farpado.",
      "A balança apreendida pesava até 500 grs por vez.",
      "O radar flagrou o carro a 140 Km/h na BR-277.",
      "O laudo registrou 2,5 kg de maconha e 30 g de cocaína.",
    ],
    correta: 4,
    explicacao:
      "Pelo Sistema Internacional de Unidades, os símbolos são escritos, em regra, com letra minúscula (\"K\" maiúsculo é o símbolo do kelvin), não vão para o plural, não levam ponto de abreviatura e ficam separados do número por um espaço: 2,5 kg, 30 g, 12 km, 3 m, 500 g, 140 km/h. Formas como \"kms\", \"mts\", \"grs\" e \"Km/h\" são incorretas.",
    origem: "banco",
  },
  {
    id: "pt-043",
    materia: "pt",
    topico: "Ortografia",
    enunciado:
      "Algumas palavras do português admitem duas grafias corretas, registradas no Vocabulário Ortográfico da Língua Portuguesa (Volp). Assinale a opção em que os DOIS pares apresentam apenas formas corretas.",
    alternativas: [
      "catorze / quatorze — beneficente / beneficiente",
      "catorze / quatorze — cotidiano / quotidiano",
      "cotidiano / quotidiano — reivindicar / reinvindicar",
      "louro / loiro — cabeleireiro / cabelereiro",
      "assobiar / assoviar — mendigo / mendingo",
    ],
    correta: 1,
    explicacao:
      "Catorze/quatorze e cotidiano/quotidiano são variantes registradas no Volp — o mesmo vale para louro/loiro e assobiar/assoviar. Já \"beneficiente\", \"reinvindicar\", \"cabelereiro\" e \"mendingo\" são erros: o correto é beneficente, reivindicar, cabeleireiro e mendigo.",
    origem: "banco",
  },
  {
    id: "pt-044",
    materia: "pt",
    topico: "Ortografia",
    enunciado:
      "Assinale a frase em que há ERRO no emprego de \"porque\", \"por que\", \"porquê\" ou \"por quê\".",
    alternativas: [
      "O delegado quis saber por que o suspeito mudou a versão dos fatos.",
      "Ninguém entendeu o porquê da soltura do preso naquela noite.",
      "A testemunha não compareceu à audiência por quê?",
      "O agente chegou atrasado por que o pneu da viatura furou.",
      "As razões por que o inquérito foi arquivado não ficaram claras.",
    ],
    correta: 3,
    explicacao:
      "Na frase sobre o agente, a palavra introduz a causa do atraso; a conjunção causal se escreve junta e sem acento: \"porque o pneu da viatura furou\". As demais estão corretas: \"por que\" separado em interrogativa indireta (quis saber por que) e com valor de \"pelo qual/pelas quais\" (as razões por que = pelas quais); \"porquê\" junto e acentuado quando substantivo (o porquê); \"por quê\" separado e acentuado em fim de frase.",
    origem: "banco",
  },
  {
    id: "pt-045",
    materia: "pt",
    topico: "Concordância nominal",
    enunciado:
      "Assinale a frase em que a concordância nominal está de acordo com a norma-padrão.",
    alternativas: [
      "Os agentes estavam bastantes cansados após o plantão.",
      "As duas testemunhas vieram só, sem nenhum acompanhante.",
      "Havia bastantes provas para pedir a prisão preventiva.",
      "Havia menas viaturas disponíveis naquele plantão.",
      "Os agentes cumpriram os mandados o mais rápido possíveis.",
    ],
    correta: 2,
    explicacao:
      "\"Bastante\" varia quando acompanha substantivo, com valor de \"muitos\" (bastantes provas), e fica invariável quando é advérbio, modificando adjetivo, verbo ou advérbio (bastante cansados = muito cansados). \"Só\", no sentido de \"sozinho\", concorda (vieram sós); fica invariável quando significa \"somente\". \"Menos\" é sempre invariável. E, em \"o mais... possível\", o artigo no singular mantém \"possível\" no singular.",
    origem: "banco",
  },
  {
    id: "pt-046",
    materia: "pt",
    topico: "Crase",
    enunciado:
      "Assinale a frase em que houve troca indevida entre \"a\", \"à\" e \"há\".",
    alternativas: [
      "A audiência foi remarcada para daqui a duas semanas.",
      "O inquérito foi instaurado há três meses, sem conclusão.",
      "A equipe viajou à Curitiba para cumprir o mandado.",
      "Os agentes voltaram à Bahia para ouvir a testemunha.",
      "O cativeiro ficava a poucos quilômetros da delegacia.",
    ],
    correta: 2,
    explicacao:
      "Antes de nome de cidade, só há crase se o nome vier determinado (à Curitiba dos anos 1950). O teste é trocar por \"voltar de\": quem volta \"de Curitiba\" vai \"a Curitiba\" — sem crase; quem volta \"da Bahia\" vai \"à Bahia\". Também estão corretos \"há\" indicando tempo passado (há três meses) e \"a\" indicando tempo futuro (daqui a duas semanas) e distância (a poucos quilômetros).",
    origem: "banco",
  },
  {
    id: "pt-047",
    materia: "pt",
    topico: "Crase",
    enunciado:
      "Assinale a frase em que o acento grave indicativo de crase é FACULTATIVO, isto é, a frase também estaria correta sem ele.",
    alternativas: [
      "O agente se referiu às provas colhidas no local do crime.",
      "A equipe de perícia chegou ao local às 14 horas em ponto.",
      "O suspeito agiu à revelia dos demais integrantes do grupo.",
      "A defesa recorreu à instância superior contra a decisão.",
      "O delegado entregou o relatório à sua equipe antes da operação.",
    ],
    correta: 4,
    explicacao:
      "Antes de pronome possessivo feminino no singular (sua, minha, nossa), o artigo é opcional, e por isso a crase é facultativa: \"à sua equipe\" ou \"a sua equipe\". Nas demais, a crase é obrigatória: \"referir-se a\" e \"recorrer a\" + artigo feminino (às provas, à instância superior); hora determinada (às 14 horas); e locução adverbial com palavra feminina (à revelia).",
    origem: "banco",
  },
  {
    id: "pt-048",
    materia: "pt",
    topico: "Crase",
    enunciado:
      "Assinale a frase em que o acento grave indicativo de crase foi empregado INDEVIDAMENTE.",
    alternativas: [
      "Às vezes, o plantão noturno é mais tranquilo do que o diurno.",
      "Sem sala própria, o refeitório fazia às vezes de cartório.",
      "O carro foi apreendido à noite, perto da divisa com Santa Catarina.",
      "O preso foi conduzido à delegacia em uma viatura descaracterizada.",
      "O delegado ficou à espera do laudo durante toda a manhã.",
    ],
    correta: 1,
    explicacao:
      "Em \"fazer as vezes de\" (= substituir, desempenhar a função de), \"as vezes\" é objeto direto de \"fazer\", sem preposição — não há crase: \"fazia as vezes de cartório\". Já a locução adverbial \"às vezes\" (= de vez em quando) leva acento grave, assim como \"à noite\" e \"à espera de\". Em \"conduzido à delegacia\", há a preposição exigida por \"conduzir\" somada ao artigo feminino.",
    origem: "banco",
  },
  {
    id: "pt-049",
    materia: "pt",
    topico: "Sintaxe do período simples",
    enunciado:
      "Compare: (I) \"O réu saiu do fórum aliviado.\" (II) \"O júri julgou o réu inocente.\" Sobre os termos \"aliviado\" e \"inocente\", é correto afirmar que:",
    alternativas: [
      "Em (I), \"aliviado\" é predicativo do sujeito, mesmo sem verbo de ligação; em (II), \"inocente\" é predicativo do objeto.",
      "Em (I), \"aliviado\" é adjunto adverbial de modo; em (II), \"inocente\" é adjunto adnominal do substantivo \"réu\".",
      "Nas duas frases, os termos são predicativos do sujeito, já que o predicativo só ocorre com verbo de ligação.",
      "Em (I), \"aliviado\" é predicativo do objeto; em (II), \"inocente\" é predicativo do sujeito \"o júri\".",
      "Em (I) e em (II), os termos são adjuntos adnominais, pois são adjetivos que acompanham substantivos.",
    ],
    correta: 0,
    explicacao:
      "As duas frases têm predicado verbo-nominal: verbo significativo + predicativo. Em (I), \"aliviado\" atribui uma característica ao sujeito \"o réu\" no momento da ação — predicativo do sujeito, sem verbo de ligação. Em (II), \"inocente\" qualifica o objeto direto \"o réu\": predicativo do objeto. O teste do pronome confirma: \"julgou-o inocente\" — o adjetivo fica fora do pronome; se fosse adjunto adnominal, sairia junto com o substantivo (julgou-o).",
    origem: "banco",
  },
  {
    id: "pt-050",
    materia: "pt",
    topico: "Classes de palavras",
    enunciado:
      "Assinale a frase em que a palavra \"que\" é pronome relativo.",
    alternativas: [
      "O delegado afirmou que o laudo ficaria pronto na sexta.",
      "É fundamental que a cadeia de custódia seja preservada.",
      "O perito que examinou o corpo foi ouvido em juízo.",
      "A testemunha tinha tanto medo que não quis depor.",
      "Espero que a vítima reconheça o suspeito.",
    ],
    correta: 2,
    explicacao:
      "\"Que\" é pronome relativo quando retoma um termo anterior e pode ser substituído por \"o qual\" (e flexões): \"o perito que (o qual) examinou o corpo\". Em \"afirmou que\", \"é fundamental que\" e \"espero que\", é conjunção integrante, que introduz oração substantiva (troca-se a oração por \"isso\"). Em \"tanto medo que\", é conjunção consecutiva.",
    origem: "banco",
  },
  {
    id: "pt-051",
    materia: "pt",
    topico: "Regência verbal e nominal",
    enunciado:
      "Assinale a frase em que o pronome relativo está empregado de acordo com a norma-padrão.",
    alternativas: [
      "O perito que o delegado mais confia assinou o laudo cadavérico.",
      "A testemunha que o advogado se referiu não compareceu à audiência.",
      "O prazo que a defesa dispunha para recorrer terminou na sexta.",
      "O delegado a quem o escrivão entregou o inquérito saiu de férias.",
      "O agente, quem chegou primeiro ao local, isolou a área do crime.",
    ],
    correta: 3,
    explicacao:
      "O pronome relativo vem precedido da preposição exigida pelo verbo da oração que introduz: entrega-se algo \"a alguém\" — \"a quem o escrivão entregou\". Nas demais faltou a preposição: confia-se \"em\" alguém (em quem); refere-se \"a\" algo (a que, ou à qual); dispõe-se \"de\" algo (de que). E o relativo \"quem\", com antecedente, só se usa com preposição; sem ela, emprega-se \"que\" ou \"o qual\" (O agente, que chegou primeiro...).",
    origem: "banco",
    fonte: "FGV · TJ-RJ 2026 · Técnico de Atividade Judiciária (adaptada)",
  },
  {
    id: "pt-052",
    materia: "pt",
    topico: "Sintaxe do período simples",
    enunciado:
      "Assinale a frase em que o termo entre aspas exerce a função de COMPLEMENTO NOMINAL.",
    alternativas: [
      "O agente obedeceu \"às normas\" do protocolo de abordagem.",
      "O respeito \"às normas\" garante a validade da prova.",
      "A viatura \"da delegacia\" foi encaminhada para a oficina.",
      "O suspeito fugiu \"com medo\" da reação dos moradores.",
      "A confiança \"do delegado\" no perito era total.",
    ],
    correta: 1,
    explicacao:
      "O complemento nominal completa o sentido de substantivo abstrato, adjetivo ou advérbio, sempre com preposição, e tem valor passivo — é o alvo da ação: em \"respeito às normas\", as normas são respeitadas. Em \"obedeceu às normas\", o termo completa um verbo: objeto indireto. \"Da delegacia\" (posse) e \"do delegado\" (quem pratica a ação) são adjuntos adnominais. \"Com medo\" é adjunto adverbial, ligado ao verbo \"fugiu\".",
    origem: "banco",
  },
  {
    id: "pt-053",
    materia: "pt",
    topico: "Regência verbal e nominal",
    enunciado:
      "Assinale a frase em que o pronome oblíquo foi empregado de acordo com a regência do verbo, conforme a norma-padrão.",
    alternativas: [
      "O delegado viu o perito no corredor e lhe cumprimentou.",
      "O agente localizou a testemunha e lhe convidou para depor.",
      "O escrivão ouviu a vítima e agradeceu-lhe pela colaboração.",
      "O preso chamou o carcereiro, mas este não o respondeu.",
      "A vítima aguarda notícias, mas o delegado ainda não a telefonou.",
    ],
    correta: 2,
    explicacao:
      "\"Agradecer\" pede objeto indireto de pessoa (agradecer a alguém), representado por \"lhe\". Nas demais, o pronome não corresponde à regência: \"cumprimentar\" e \"convidar\" são transitivos diretos (o cumprimentou, a convidou); \"responder\" (dar resposta a alguém) e \"telefonar\" pedem objeto indireto de pessoa (não lhe respondeu, não lhe telefonou). \"O/a\" substituem objeto direto; \"lhe\", objeto indireto de pessoa.",
    origem: "banco",
  },
  {
    id: "pt-054",
    materia: "pt",
    topico: "Sintaxe do período composto",
    enunciado:
      "Em \"A meta da nova delegacia é reduzir o tempo de resposta às ocorrências\", a oração \"reduzir o tempo de resposta às ocorrências\" classifica-se como:",
    alternativas: [
      "Subordinada substantiva subjetiva, reduzida de infinitivo.",
      "Subordinada substantiva objetiva direta, reduzida de infinitivo.",
      "Subordinada adverbial final, reduzida de infinitivo.",
      "Subordinada adjetiva restritiva, reduzida de infinitivo.",
      "Subordinada substantiva predicativa, reduzida de infinitivo.",
    ],
    correta: 4,
    explicacao:
      "A oração vem depois do verbo de ligação \"é\" e diz o que é o sujeito \"A meta da nova delegacia\": é predicativo do sujeito — substantiva predicativa reduzida de infinitivo (desenvolvida: \"A meta é que se reduza o tempo...\"). Não é subjetiva, porque a principal já tem sujeito; nem objetiva direta, porque \"ser\" não pede objeto; nem final, porque não indica finalidade de uma ação.",
    origem: "banco",
    fonte: "FGV · PC-PI 2026 · Oficial Investigador (adaptada)",
  },
  {
    id: "pt-055",
    materia: "pt",
    topico: "Sintaxe do período composto",
    enunciado:
      "\"Embora o suspeito negasse a autoria, as imagens da câmera, que haviam sido recuperadas pela perícia, mostravam que ele estava no local quando o crime ocorreu.\" Sobre as orações desse período, assinale a afirmativa correta.",
    alternativas: [
      "\"Embora o suspeito negasse a autoria\" é oração subordinada adverbial concessiva.",
      "\"que haviam sido recuperadas pela perícia\" é oração subordinada adjetiva restritiva.",
      "\"que ele estava no local\" é oração subordinada adjetiva, pois retoma \"as imagens\".",
      "\"quando o crime ocorreu\" é oração subordinada adverbial causal.",
      "O período é composto apenas por coordenação, já que não há conjunções subordinativas.",
    ],
    correta: 0,
    explicacao:
      "\"Embora\" é conjunção concessiva: introduz fato contrário ao da principal que não impede sua realização. As outras erram: \"que haviam sido recuperadas pela perícia\", entre vírgulas, é adjetiva explicativa; \"que ele estava no local\" completa \"mostravam\" (mostravam isso) — substantiva objetiva direta, com \"que\" integrante; \"quando o crime ocorreu\" é adverbial temporal; e o período é composto por subordinação.",
    origem: "banco",
  },
  {
    id: "pt-056",
    materia: "pt",
    topico: "Conectivos",
    enunciado:
      "\"Como a ponte estava interditada, a equipe precisou fazer um desvio de 40 km.\" Mantendo-se o sentido original e a correção gramatical, o trecho pode ser reescrito como:",
    alternativas: [
      "Embora a ponte estivesse interditada, a equipe precisou fazer um desvio de 40 km.",
      "Conforme a ponte estava interditada, a equipe precisou fazer um desvio de 40 km.",
      "A ponte estava interditada, contudo a equipe precisou fazer um desvio de 40 km.",
      "A ponte estava interditada, por isso a equipe precisou fazer um desvio de 40 km.",
      "Caso a ponte estivesse interditada, a equipe precisaria fazer um desvio de 40 km.",
    ],
    correta: 3,
    explicacao:
      "Anteposto à principal, \"como\" tem valor causal (= porque, já que): a interdição causou o desvio. A reescrita com \"por isso\" mantém causa e consequência, só invertendo a ordem. \"Embora\" = concessão; \"conforme\" = conformidade ou proporção; \"contudo\" = oposição; \"caso\" transforma o fato em hipótese (condição).",
    origem: "banco",
  },
  {
    id: "pt-057",
    materia: "pt",
    topico: "Pontuação",
    enunciado:
      "Em \"O inquérito, o delegado o concluiu em dez dias\", a vírgula foi empregada para:",
    alternativas: [
      "Separar o sujeito do verbo, como se exige quando o sujeito é composto ou longo.",
      "Marcar a antecipação do objeto direto, que depois é retomado pelo pronome \"o\".",
      "Isolar um vocativo, já que o enunciador se dirige diretamente ao inquérito.",
      "Indicar a omissão de um verbo que já foi expresso anteriormente na frase.",
      "Isolar um aposto explicativo que se refere ao termo \"o delegado\" logo depois.",
    ],
    correta: 1,
    explicacao:
      "\"O inquérito\" é o objeto direto de \"concluiu\", deslocado para o início como tópico e retomado pelo pronome \"o\" (objeto direto pleonástico); a vírgula marca o deslocamento. Não separa sujeito e verbo — o sujeito é \"o delegado\", e a norma não admite vírgula entre sujeito e verbo —, e não há vocativo, zeugma nem aposto.",
    origem: "banco",
    fonte: "FGV · TJ-RJ 2026 · Técnico de Atividade Judiciária (adaptada)",
  },
  {
    id: "pt-058",
    materia: "pt",
    topico: "Pontuação",
    enunciado:
      "Assinale a frase em que a pontuação está de acordo com a norma-padrão.",
    alternativas: [
      "Os agentes que participaram da operação, receberam elogio do secretário.",
      "O delegado, pediu a prisão preventiva do suspeito.",
      "Na madrugada de ontem, a equipe cumpriu três mandados de busca.",
      "A perícia constatou, que a porta não fora arrombada.",
      "O promotor ofereceu a denúncia e, o juiz a recebeu no mesmo dia.",
    ],
    correta: 2,
    explicacao:
      "A vírgula depois de adjunto adverbial deslocado para o início é correta (e recomendada quando ele é longo). Nas demais, a vírgula separa termos que devem ficar juntos: sujeito e verbo (Os agentes que participaram da operação receberam...; O delegado pediu...) e verbo e complemento (constatou que a porta...). Na frase sobre a denúncia, a vírgula entre orações de sujeitos diferentes viria antes do \"e\": \"ofereceu a denúncia, e o juiz a recebeu\".",
    origem: "banco",
  },
  {
    id: "pt-059",
    materia: "pt",
    topico: "Regência verbal e nominal",
    enunciado:
      "Assinale a frase em que o emprego de \"onde\" ou \"aonde\" está de acordo com a norma-padrão.",
    alternativas: [
      "Aonde o suspeito se escondeu durante a madrugada?",
      "A equipe não sabia aonde ficava o cativeiro.",
      "O delegado quis saber aonde a testemunha mora atualmente.",
      "Os agentes seguiram o carro até o bairro aonde ele foi abandonado.",
      "Aonde quer que o foragido vá, a polícia estará atrás dele.",
    ],
    correta: 4,
    explicacao:
      "\"Aonde\" (= a + onde) só se usa com verbos de movimento que pedem \"a\": quem vai, vai \"a\" algum lugar. Com verbos de permanência ou situação (esconder-se, ficar, morar, ser abandonado em algum lugar), usa-se \"onde\": onde se escondeu, onde ficava, onde mora, onde foi abandonado.",
    origem: "banco",
    fonte: "FGV · TJ-RJ 2026 · Analista Judiciário (adaptada)",
  },
  {
    id: "pt-060",
    materia: "pt",
    topico: "Coesão e coerência",
    enunciado:
      "\"A vítima chegou à delegacia logo cedo. Trazia o celular do agressor, que estava com a tela trincada, e a placa da moto, que um vizinho anotou da janela. O escrivão ouviu-a com atenção e, em seguida, encaminhou-a ao exame de corpo de delito.\" No trecho, a identificação do referente está correta em:",
    alternativas: [
      "\"que estava com a tela trincada\" retoma \"o celular\".",
      "\"que um vizinho anotou da janela\" retoma \"a moto\".",
      "\"ouviu-a\" retoma \"a delegacia\", lugar onde a vítima chegou.",
      "\"encaminhou-a\" retoma \"a placa da moto\" anotada pelo vizinho.",
      "O sujeito oculto de \"Trazia\" é \"o agressor\".",
    ],
    correta: 0,
    explicacao:
      "O relativo \"que\", em \"que estava com a tela trincada\", retoma \"o celular\" — é o aparelho que tem tela. Os demais estão trocados: o vizinho anotou \"a placa\", não a moto; \"ouviu-a\" e \"encaminhou-a\" retomam \"a vítima\", que depõe e vai ao exame de corpo de delito; e quem \"trazia\" os objetos era a vítima, sujeito oculto retomado da frase anterior.",
    origem: "banco",
    fonte: "FGV · TJ-RS 2026 · Conciliador Cível (adaptada)",
  },
  {
    id: "pt-061",
    materia: "pt",
    topico: "Coesão e coerência",
    enunciado:
      "\"Os agentes apreenderam um revólver calibre 38 no porta-luvas. A arma estava com a numeração raspada e será periciada.\" A coesão entre as duas frases foi estabelecida principalmente por:",
    alternativas: [
      "Repetição literal do termo \"revólver\" para reforçar a ideia principal.",
      "Uso de conjunção adversativa que opõe as duas frases.",
      "Retomada de \"revólver\" pelo hiperônimo \"arma\", termo de sentido mais geral.",
      "Elipse do sujeito da segunda frase, recuperável pela primeira.",
      "Emprego de um hipônimo de \"porta-luvas\" para evitar repetição.",
    ],
    correta: 2,
    explicacao:
      "\"Arma\" é hiperônimo de \"revólver\" (todo revólver é arma, mas nem toda arma é revólver): o termo mais geral retoma o mais específico e evita a repetição — coesão lexical por hiperonímia. Não há repetição literal nem conjunção, e o sujeito da segunda frase está expresso (\"A arma\").",
    origem: "banco",
  },
  {
    id: "pt-062",
    materia: "pt",
    topico: "Coesão e coerência",
    enunciado:
      "\"Os policiais chegaram ao local do acidente pouco depois das 22h. O motorista estava preso às ferragens, e o para-brisa tinha se partido.\" O emprego do artigo definido em \"o motorista\" e \"o para-brisa\", termos ainda não mencionados no texto, justifica-se porque:",
    alternativas: [
      "Os dois termos retomam literalmente palavras já citadas no período anterior.",
      "O artigo definido indica que se trata de elementos desconhecidos e genéricos.",
      "Os termos são hiperônimos de \"policiais\", retomando-os de forma mais geral.",
      "O contexto de \"acidente\" já torna esses elementos identificáveis pelo leitor.",
      "O artigo definido é obrigatório antes de qualquer substantivo masculino.",
    ],
    correta: 3,
    explicacao:
      "Anáfora associativa (ou indireta): \"o motorista\" e \"o para-brisa\" não foram citados, mas \"acidente\" ativa um conjunto de conhecimentos (veículo, motorista, para-brisa) que os torna identificáveis; por isso vêm com artigo definido, que marca o conhecido ou identificável. É o indefinido que costuma introduzir elementos novos.",
    origem: "banco",
    fonte: "FGV · TJ-RJ 2026 · Analista Judiciário (adaptada)",
  },
  {
    id: "pt-063",
    materia: "pt",
    topico: "Conectivos",
    enunciado:
      "Assinale a opção em que o conectivo expressa relação de OPOSIÇÃO entre as ideias.",
    alternativas: [
      "O suspeito não só furtou o celular, mas também o revendeu.",
      "O preso fugiu porque o portão da carceragem estava aberto.",
      "A vítima reconheceu o agressor; logo, a prisão foi mantida.",
      "A testemunha mentiu, pois as câmeras desmentem seu relato.",
      "O laudo saiu rápido, mas trouxe pouca informação útil.",
    ],
    correta: 4,
    explicacao:
      "Em \"saiu rápido, mas trouxe pouca informação útil\", \"mas\" é adversativa: opõe a rapidez à pouca utilidade. Em \"não só... mas também\", o \"mas\" integra correlação aditiva. \"Porque\" = causa; \"logo\" = conclusão; \"pois\", anteposto ao verbo da oração que introduz, = explicação.",
    origem: "banco",
    fonte: "FGV · TJ-RS 2026 · Conciliador Cível (adaptada)",
  },
  {
    id: "pt-064",
    materia: "pt",
    topico: "Classes de palavras",
    enunciado:
      "\"A partir de segunda-feira, a Delegacia da Mulher funcionará 24 horas e contará com uma sala de acolhimento para crianças.\" O emprego das formas verbais \"funcionará\" e \"contará\" tem a função de:",
    alternativas: [
      "Expressar dúvida do enunciador sobre a realização das mudanças.",
      "Informar ações previstas para ocorrer depois do momento da fala.",
      "Indicar ações habituais, que se repetem desde o passado.",
      "Dar ordens ao leitor, como faria o modo imperativo.",
      "Relatar fatos já concluídos antes do momento da fala.",
    ],
    correta: 1,
    explicacao:
      "\"Funcionará\" e \"contará\" estão no futuro do presente do indicativo, que apresenta como certos fatos posteriores ao momento da fala — mudanças programadas para segunda-feira. Não há dúvida (sugerida, por exemplo, pelo futuro do pretérito: \"funcionaria\"), hábito (presente ou imperfeito), ordem (imperativo) nem fato concluído (pretérito perfeito).",
    origem: "banco",
    fonte: "FGV · TJ-SC 2026 · Analista Jurídico (adaptada)",
  },
  {
    id: "pt-065",
    materia: "pt",
    topico: "Modos de organização do discurso",
    enunciado:
      "Trecho de um relatório: \"O imóvel tinha dois quartos e uma cozinha. As paredes, imundas e repugnantes, exibiam manchas escuras próximas ao rodapé, e a janela dos fundos estava aberta.\" Assinale a opção que aponta um elemento que revela a subjetividade do redator, inadequada a um relatório técnico.",
    alternativas: [
      "Os adjetivos \"imundas\" e \"repugnantes\", de valor avaliativo.",
      "O numeral \"dois\", que quantifica os quartos do imóvel.",
      "A expressão \"próximas ao rodapé\", que localiza as manchas.",
      "O adjetivo \"escuras\", que caracteriza a cor das manchas.",
      "A informação de que \"a janela dos fundos estava aberta\".",
    ],
    correta: 0,
    explicacao:
      "Num relatório técnico, a descrição deve ser objetiva, limitada ao verificável. \"Imundas\" e \"repugnantes\" exprimem a impressão e o sentimento de quem observa — adjetivos avaliativos, marcas de subjetividade. \"Dois\", \"escuras\", \"próximas ao rodapé\" e \"a janela dos fundos estava aberta\" registram dados observáveis: quantidade, cor, localização e estado.",
    origem: "banco",
    fonte: "FGV · TJ-SC 2024 · Oficial de Justiça (adaptada)",
  },
  {
    id: "pt-066",
    materia: "pt",
    topico: "Interpretação de texto",
    enunciado:
      "\"Há quem diga que aumentar as penas é a forma mais eficaz de reduzir a criminalidade. Os dados, no entanto, mostram que estados com penas mais duras não registram, necessariamente, menos crimes, e que a chance real de ser preso pesa mais na decisão do criminoso do que o tamanho da pena. Por isso, investir em investigação e em esclarecimento de crimes tende a ser mais eficaz do que apenas endurecer a lei.\" A organização argumentativa do texto é:",
    alternativas: [
      "Apresentação da tese do autor, seguida de exemplos que a confirmam e de uma conclusão que a repete.",
      "Narração de um caso concreto, seguida de uma avaliação moral sobre o comportamento dos envolvidos.",
      "Apresentação de uma opinião contrária, argumentos que a enfraquecem e, por fim, a tese defendida pelo autor.",
      "Exposição de duas teses opostas, sem que o autor tome partido de qualquer uma delas.",
      "Definição de um conceito jurídico, seguida da enumeração de suas características e de exemplos.",
    ],
    correta: 2,
    explicacao:
      "O texto abre com a opinião de outros (\"Há quem diga que...\"), que o autor contesta; com \"no entanto\", traz dados que a enfraquecem; e fecha, com \"Por isso\", com a própria tese: investir em investigação é mais eficaz do que só endurecer a lei. Não é tese seguida de confirmação, nem narração, nem exposição neutra, nem definição.",
    origem: "banco",
    fonte: "FGV · PGM-Niterói 2023 · Analista Processual (adaptada)",
  },
  {
    id: "pt-067",
    materia: "pt",
    topico: "Interpretação de texto",
    enunciado:
      "\"Às 23h, a equipe estacionou a viatura na esquina da rua. Dali, os agentes viam o portão azul da casa 112, a moto vermelha encostada no muro e, no fundo do quintal, vultos que mal se distinguiam na penumbra.\" Assinale o segmento que indica uma limitação na percepção dos observadores.",
    alternativas: [
      "\"a equipe estacionou a viatura na esquina\"",
      "\"os agentes viam o portão azul da casa 112\"",
      "\"a moto vermelha encostada no muro\"",
      "\"vultos que mal se distinguiam na penumbra\"",
      "\"no fundo do quintal\"",
    ],
    correta: 3,
    explicacao:
      "\"Vultos\" são formas indistintas, e \"mal se distinguiam na penumbra\" reforça que os agentes não viam com clareza o fundo do quintal — o segmento marca o limite da percepção. Os demais registram o que foi visto com nitidez (cor do portão, número da casa, moto vermelha) ou apenas situam a cena.",
    origem: "banco",
    fonte: "FGV · TJ-SC 2024 · Analista Jurídico (adaptada)",
  },
  {
    id: "pt-068",
    materia: "pt",
    topico: "Semântica",
    enunciado:
      "Assinale a frase em que a expressão \"cerca de\", \"acerca de\" ou \"há cerca de\" está empregada corretamente.",
    alternativas: [
      "A operação de ontem mobilizou acerca de cem policiais.",
      "O inquérito foi aberto cerca de dois meses, sem conclusão.",
      "Os agentes conversaram cerca do caso com o promotor.",
      "A perícia concluiu o laudo há cerca de uma semana.",
      "A testemunha mora há cerca de dois quilômetros do fórum.",
    ],
    correta: 3,
    explicacao:
      "\"Há cerca de\" indica tempo decorrido aproximado (= faz aproximadamente). Nas demais: quantidade aproximada = \"cerca de\" (cerca de cem policiais); tempo passado exige o \"há\" (foi aberto há cerca de dois meses); \"acerca de\" = \"a respeito de\" (conversaram acerca do caso); distância aproximada = \"a cerca de\" (mora a cerca de dois quilômetros).",
    origem: "banco",
  },
  {
    id: "pt-069",
    materia: "pt",
    topico: "Figuras de linguagem (metáfora, metonímia, ironia, eufemismo, hipérbole)",
    enunciado:
      "\"Que beleza de investigação: três meses de inquérito e nenhum suspeito ouvido.\" A figura de linguagem predominante é:",
    alternativas: [
      "Eufemismo, pois suaviza uma informação desagradável sobre o inquérito.",
      "Hipérbole, pois exagera a duração real do inquérito policial.",
      "Metonímia, pois \"investigação\" substitui o nome do delegado.",
      "Prosopopeia, pois atribui características humanas ao inquérito.",
      "Ironia, pois \"beleza\" sugere o oposto do que se pensa da investigação.",
    ],
    correta: 4,
    explicacao:
      "Há ironia: o enunciador elogia (\"Que beleza de investigação\") para criticar, já que os dados seguintes — três meses sem nenhum suspeito ouvido — mostram que a investigação vai mal; o sentido pretendido é o oposto do literal. Não há suavização (eufemismo), exagero (hipérbole), substituição por proximidade (metonímia) nem personificação (prosopopeia).",
    origem: "banco",
  },
  {
    id: "pt-070",
    materia: "pt",
    topico: "Figuras de linguagem (metáfora, metonímia, ironia, eufemismo, hipérbole)",
    enunciado:
      "\"Primeiro, o homem resmungou; depois, gritou com os agentes; por fim, partiu para a agressão.\" O recurso expressivo predominante no trecho é:",
    alternativas: [
      "Antítese, pois aproxima ideias de sentidos opostos.",
      "Gradação, pois as ações se sucedem em intensidade crescente.",
      "Metáfora, pois compara implicitamente o homem a um animal.",
      "Eufemismo, pois suaviza a descrição da agressão.",
      "Ironia, pois afirma o contrário do que pretende dizer.",
    ],
    correta: 1,
    explicacao:
      "Há gradação (ou clímax): as ações aparecem em intensidade crescente — resmungar, gritar, agredir —, marcada ainda por \"primeiro\", \"depois\" e \"por fim\". Não há ideias opostas (antítese), comparação implícita (metáfora), suavização (eufemismo) nem inversão de sentido (ironia).",
    origem: "banco",
  },
  {
    id: "pt-071",
    materia: "pt",
    topico: "Sintaxe do período simples",
    enunciado:
      "Transpondo-se para a voz passiva a frase \"A perícia recolheu os projéteis no local do crime\", obtém-se:",
    alternativas: [
      "Os projéteis foram recolhidos pela perícia no local do crime.",
      "Os projéteis recolheram-se pela perícia no local do crime.",
      "Os projéteis eram recolhidos pela perícia no local do crime.",
      "A perícia foi recolhida pelos projéteis no local do crime.",
      "Os projéteis tinham sido recolhidos pela perícia no local do crime.",
    ],
    correta: 0,
    explicacao:
      "Na passiva analítica, o objeto direto (\"os projéteis\") vira sujeito, o sujeito (\"a perícia\") vira agente da passiva e o verbo vira \"ser\" + particípio no mesmo tempo: \"recolheu\" (pretérito perfeito) → \"foram recolhidos\". \"Eram recolhidos\" e \"tinham sido recolhidos\" mudam o tempo; a passiva sintética (recolheram-se) não admite agente expresso na norma-padrão; e trocar sujeito e objeto inverte o sentido.",
    origem: "banco",
  },
  {
    id: "pt-072",
    materia: "pt",
    topico: "Regência verbal e nominal",
    enunciado:
      "Assinale a frase que está de acordo com a regência verbal da norma-padrão.",
    alternativas: [
      "O motorista desobedeceu o sinal de parada da viatura na rodovia.",
      "O defensor desistiu o recurso interposto contra a sentença.",
      "O delegado procedeu à oitiva das testemunhas logo pela manhã.",
      "Na entrevista, o delegado aludiu o caso ocorrido no ano passado.",
      "O agente se esqueceu o nome da testemunha na hora do depoimento.",
    ],
    correta: 2,
    explicacao:
      "\"Proceder\", no sentido de \"realizar, dar início a\", pede \"a\" — e, diante do feminino \"oitiva\", há crase. Nas demais: \"desobedecer\" é transitivo indireto (desobedeceu ao sinal); \"desistir\" pede \"de\" (desistiu do recurso); \"aludir\" é transitivo indireto (aludiu ao caso); \"esquecer\", pronominal, pede \"de\" (esqueceu-se do nome) — sem o pronome, é transitivo direto (esqueceu o nome).",
    origem: "banco",
  },
  {
    id: "pt-073",
    materia: "pt",
    topico: "Modalizadores",
    enunciado:
      "Em uma notícia: \"Segundo a polícia, o suspeito teria fugido para o Paraguai na madrugada de domingo.\" O emprego da forma verbal \"teria fugido\" indica que:",
    alternativas: [
      "O jornal confirma que a fuga ocorreu, com base em provas próprias.",
      "A fuga é apresentada como hábito do suspeito em fins de semana.",
      "A fuga ainda vai acontecer, num momento posterior à publicação.",
      "A informação é falsa, e o jornal pretende desmenti-la a seguir.",
      "O jornal atribui a informação à polícia, sem afirmá-la como fato certo.",
    ],
    correta: 4,
    explicacao:
      "O futuro do pretérito composto (\"teria fugido\"), com \"Segundo a polícia\", é recurso de modalização: o jornal noticia o fato como hipótese, atribui a informação à fonte e não assume a responsabilidade por sua veracidade. Não confirma a fuga, não indica hábito nem ação futura, e não afirma que a informação seja falsa.",
    origem: "banco",
  },
];
