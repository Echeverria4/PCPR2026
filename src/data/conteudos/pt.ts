import type { ConteudoTopico } from "../../lib/types";

export const CONTEUDO_PT: ConteudoTopico[] = [
  {
    materia: "pt",
    topico: "Interpretação e compreensão de texto",
    texto: `Interpretar um texto é reconstituir o sentido que o autor pretendeu comunicar, articulando as informações explícitas (o que está escrito literalmente) com as informações implícitas (o que pode ser inferido a partir do contexto, do conhecimento de mundo do leitor e das relações lógicas entre as partes do texto). Compreensão, por sua vez, é a etapa anterior: entender o que cada palavra, frase e parágrafo significa isoladamente, antes de relacioná-los ao todo.

Nas provas de concurso, a banca costuma testar três habilidades centrais: localizar informação explícita, o que basta reler o trecho indicado; inferir informação implícita, o que exige raciocínio sobre pistas textuais sem extrapolar o que o texto realmente permite concluir; e identificar a tese, os argumentos e a intenção comunicativa do autor (informar, convencer, criticar, instruir).

O maior cuidado do candidato deve ser com armadilhas recorrentes: a extrapolação, quando uma alternativa afirma algo plausível mas que o texto não disse nem permite inferir com segurança; a contradição, quando a alternativa inverte ou nega o que o texto afirma; e a restrição indevida, quando a alternativa reduz um sentido mais amplo do texto a um caso particular. Uma alternativa correta de interpretação é sempre aquela que pode ser comprovada com base no que está escrito, não a que "parece" verdadeira pelo senso comum do leitor.

A estratégia mais eficiente é ler o texto por completo antes de ir às questões, identificar os conectivos que sinalizam mudança de ideia e voltar ao trecho exato indicado por cada alternativa antes de julgá-la certa ou errada.`,
    exemplos: [
      "Texto: 'A perícia técnica é essencial à investigação, pois fornece elementos objetivos.' Interpretação correta: a perícia é apresentada como necessária porque produz provas objetivas — essa afirmação pode ser comprovada diretamente no texto, sem extrapolação.",
      "Texto: 'Muitos policiais relataram dificuldades operacionais durante o plantão.' Alternativa por extrapolação, ERRADA: 'O texto comprova que a corporação está sucateada.' O trecho fala em dificuldades pontuais relatadas por 'muitos', não por 'todos', e não afirma sucateamento — é conclusão que vai além do que está escrito.",
    ],
  },
  {
    materia: "pt",
    topico: "Coesão, coerência e intertextualidade",
    texto: `Coesão e coerência são propriedades diferentes, embora complementares, de um texto bem construído. A coesão é a "amarração" gramatical entre as partes do texto, os mecanismos linguísticos visíveis que ligam frases e parágrafos. Ela se divide em coesão referencial (retomada de termos já mencionados por meio de pronomes, sinônimos, hiperônimos ou elipse, evitando repetição) e coesão sequencial (uso de conectivos — conjunções, advérbios e locuções — que estabelecem relações lógicas explícitas, como causa, consequência, oposição, condição, finalidade e adição entre as orações).

A coerência, por sua vez, é a propriedade do sentido: diz respeito à lógica interna do texto, à ausência de contradições e à possibilidade de o leitor construir uma interpretação unificada, mesmo quando faltam conectivos explícitos. Um texto pode ter poucos elementos coesivos e ainda assim ser coerente, desde que as ideias se encadeiem logicamente; por outro lado, um texto cheio de conectivos pode ser incoerente se contiver contradições internas.

Já a intertextualidade é o diálogo que um texto estabelece com outro(s) texto(s) já existentes, pressupondo que o leitor reconheça essa referência para captar o sentido pleno. Suas formas mais cobradas são: citação (reprodução literal, com indicação de fonte), paráfrase (reformulação de um texto preservando o mesmo sentido original), paródia (retomada de um texto com alteração de sentido, geralmente crítica ou irônica) e alusão (referência indireta, sem reprodução literal). Reconhecer se um trecho retoma outro mantendo ou subvertendo seu sentido é frequentemente cobrado em provas.`,
    exemplos: [
      "'O delegado interrogou o suspeito. Ele negou todas as acusações.' O pronome 'ele' retoma 'o suspeito' por coesão referencial, evitando a repetição do substantivo.",
      "Paráfrase de 'Penso, logo existo' (Descartes): 'Existo porque penso' — mantém o mesmo sentido original. Paródia da mesma frase: 'Erro, logo existo' — retoma a estrutura, mas inverte o sentido para fins irônicos ou críticos.",
    ],
  },
  {
    materia: "pt",
    topico: "Modos de organização do discurso (narração, descrição, dissertação, injunção)",
    texto: `Todo texto organiza a linguagem segundo um ou mais modos de discurso, que definem a finalidade comunicativa predominante de cada trecho.

A narração relata fatos, reais ou fictícios, organizados em uma sequência temporal e, geralmente, causal: há personagens, um enredo com começo, meio e fim, e verbos de ação que marcam a progressão dos acontecimentos, com frequência no pretérito perfeito ou imperfeito. Exemplo típico é o relato de como ocorreu uma prisão em flagrante.

A descrição apresenta as características de um ser, objeto, ambiente ou cena, sem progressão temporal — é como uma "fotografia" verbal. Predominam substantivos concretos, adjetivos e verbos de estado (ser, estar, parecer), como na caracterização física de um suspeito em um boletim de ocorrência.

A dissertação expõe, analisa ou defende um ponto de vista sobre um tema, articulando argumentos, dados e conclusões. Costuma empregar verbos no presente atemporal e conectivos lógicos (portanto, pois, contudo). É o modo predominante em editoriais, artigos de opinião e teses acadêmicas.

A injunção, ou texto instrucional, tem função de orientar, instruir ou ordenar a ação do leitor, com verbos no imperativo ou no infinitivo. É o modo típico de manuais, receitas, bulas de remédio e também de protocolos de procedimento operacional, como uma norma de abordagem policial.

Na prática, um mesmo texto costuma combinar mais de um desses modos — uma reportagem policial pode narrar os fatos, descrever o suspeito e, ao final, tecer uma dissertação sobre segurança pública. A prova pede o modo predominante em cada trecho específico, não do texto inteiro.`,
    exemplos: [
      "'O agente correu, saltou o muro e alcançou o fugitivo em poucos segundos.' — Narração: fatos em sucessão temporal, marcados por verbos de ação.",
      "'Preencha o boletim de ocorrência, assine ao final e entregue uma via ao denunciante.' — Injunção: verbos no imperativo instruindo o leitor sobre um procedimento a seguir.",
    ],
  },
  {
    materia: "pt",
    topico: "Tipos de discurso (direto, indireto, indireto livre)",
    texto: `O discurso é a forma como a fala ou o pensamento de um narrador ou de uma personagem é reproduzido dentro de um texto. Há três modalidades principais.

No discurso direto, a fala é reproduzida literalmente, geralmente introduzida por um verbo de elocução (dizer, perguntar, responder, exclamar) seguido de dois-pontos e travessão, ou marcada por aspas. Preserva-se a pontuação expressiva (exclamações, interrogações) e a primeira pessoa de quem fala, criando um efeito de vivacidade e proximidade com a cena.

No discurso indireto, a fala é reportada pelo narrador por meio de uma oração subordinada, geralmente introduzida por "que" após verbos como dizer, afirmar ou declarar, ou por pronome interrogativo após "perguntar". Não há aspas nem travessão; a pessoa verbal, o tempo verbal e os elementos dêiticos, marcadores de tempo e lugar, são ajustados à perspectiva do narrador — "eu vou agora" torna-se "ele iria naquele momento".

O discurso indireto livre é uma modalidade híbrida, própria da narrativa literária mais elaborada: reproduz o pensamento ou a fala da personagem misturado à voz do narrador, sem verbo de elocução, sem aspas e sem oração subordinada explícita — o narrador "empresta" sua voz à consciência da personagem, criando ambiguidade proposital sobre quem fala. É recurso comum em Machado de Assis e Clarice Lispector, mas pode aparecer também em reportagens mais literárias.

Reconhecer qual modalidade está em jogo depende de observar a presença ou ausência de verbo dicendi, de pontuação de fala direta e de ajustes de pessoa e tempo verbal.`,
    exemplos: [
      "Direto: 'Vou confessar tudo agora', disse o suspeito. Indireto: O suspeito disse que iria confessar tudo naquele momento — houve ajuste de pessoa ('vou' → 'iria') e de tempo/lugar ('agora' → 'naquele momento').",
      "Indireto livre: O suspeito olhou ao redor. Confessaria tudo agora? Não havia mais saída. Não há verbo dicendi nem aspas; o pensamento da personagem se mistura à narração em terceira pessoa.",
    ],
  },
  {
    materia: "pt",
    topico: "Pontuação",
    texto: `A pontuação organiza a leitura e sinaliza relações sintáticas e semânticas entre os termos de uma frase. Os sinais mais cobrados em concursos são a vírgula, o ponto e vírgula e os dois-pontos.

A vírgula tem funções bem definidas: separa itens de uma enumeração; isola aposto e vocativo; isola expressões e orações intercaladas, inclusive orações subordinadas adjetivas explicativas, que trazem uma informação adicional sobre um antecedente já identificado, ao contrário das restritivas, que delimitam esse antecedente e não admitem vírgula; marca a inversão da ordem direta, quando um adjunto adverbial desloca-se para o início da frase; e antecede conjunções coordenativas adversativas, conclusivas e, em geral, explicativas. A regra mais importante, e mais cobrada como erro, é que a vírgula nunca separa sujeito de verbo, nem verbo de complemento, salvo se houver uma intercalação isolada por vírgulas dos dois lados.

O ponto e vírgula separa itens de uma enumeração mais complexa, que já contenha vírgulas internas, e também orações coordenadas de sentido oposto ou pouco relacionadas, funcionando como um ponto "mais fraco" que o ponto final.

Os dois-pontos introduzem uma enumeração, uma citação, inclusive em discurso direto, ou uma explicação/consequência do que foi dito anteriormente.

Um caso clássico de prova é a diferença de sentido entre orações adjetivas restritivas e explicativas conforme a presença da vírgula: sem vírgula, a oração seleciona um subconjunto do antecedente; com vírgula, atribui a característica a todo o antecedente, como um comentário à parte.`,
    exemplos: [
      "'O réu, que confessou o crime, foi condenado.' (vírgulas obrigatórias: oração explicativa, informação adicional sobre o único réu em questão) versus 'O réu que confessou o crime foi condenado.' (sem vírgula: oração restritiva, distingue esse réu de outros que não confessaram).",
      "'Estavam presentes o delegado, o escrivão e o perito; faltaram, no entanto, as testemunhas.' — o ponto e vírgula separa dois blocos de sentido contrastante, mais longos do que uma simples vírgula comportaria.",
    ],
  },
  {
    materia: "pt",
    topico: "Sintaxe do período simples e composto",
    texto: `Período é a frase organizada em torno de um ou mais verbos (ou locuções verbais). O período simples contém apenas uma oração, um único verbo, e nele se distinguem os termos essenciais (sujeito e predicado), os termos integrantes (complementos exigidos pelo verbo ou pelo nome: objeto direto, objeto indireto, complemento nominal, agente da passiva) e os termos acessórios (que enriquecem a informação, mas não são exigidos: adjunto adnominal, adjunto adverbial, aposto, vocativo).

Distinguir objeto direto de objeto indireto depende da transitividade do verbo: verbos transitivos diretos pedem complemento sem preposição obrigatória (comprou o carro); verbos transitivos indiretos exigem uma preposição determinada pelo próprio verbo (obedece às regras, gosta de doces); há ainda verbos transitivos diretos e indiretos simultaneamente, que exigem dois complementos (entregou o mandado ao oficial).

O período composto contém duas ou mais orações e se organiza por coordenação ou subordinação. Na coordenação, as orações são sintaticamente independentes entre si, ligadas por conjunções coordenativas (aditivas: e, nem; adversativas: mas, porém; alternativas: ou...ou; conclusivas: logo, portanto; explicativas: pois, que) ou apenas justapostas por vírgula. Na subordinação, uma oração (subordinada) exerce uma função sintática dentro da outra (principal), classificando-se em substantivas (exercem função de substantivo: sujeito, objeto etc.), adjetivas (funcionam como adjetivo, qualificando um termo antecedente) ou adverbiais (funcionam como advérbio, indicando causa, tempo, condição, concessão, finalidade, consequência, comparação, proporção ou conformidade).

Reconhecer a conjunção introdutória é o caminho mais direto para classificar corretamente a oração subordinada em provas objetivas.`,
    exemplos: [
      "'O delegado entregou o mandado ao oficial de justiça.' — 'o mandado' é objeto direto; 'ao oficial de justiça' é objeto indireto, pois o verbo 'entregar' é transitivo direto e indireto.",
      "'Quando a perícia chegou ao local, os vestígios já haviam sido alterados.' — a oração 'Quando a perícia chegou ao local' é subordinada adverbial temporal, introduzida pela conjunção 'quando'.",
    ],
  },
  {
    materia: "pt",
    topico: "Concordância verbal e nominal",
    texto: `A concordância verbal exige que o verbo se ajuste ao sujeito em número e pessoa. Na maioria dos casos isso é intuitivo, mas alguns pontos são frequentemente cobrados: sujeito composto anteposto ao verbo leva-o ao plural; sujeitos coletivos (a maioria, a turma, o grupo) concordam no singular quando o núcleo do sujeito é o próprio coletivo, mas expressões partitivas seguidas de complemento plural (a maioria dos policiais, grande parte dos casos) admitem tanto a concordância com o núcleo singular quanto com o complemento plural. Verbos impessoais, que não têm sujeito, permanecem sempre na 3ª pessoa do singular: "haver" no sentido de existir ou indicando tempo decorrido ("Havia muitos indícios", "Há dois anos") e "fazer" indicando tempo ("Faz três meses"). Já "existir", ao contrário de "haver", é pessoal e concorda normalmente com o sujeito plural ("Existem indícios"). Na voz passiva sintética, formada com "se" como partícula apassivadora, o verbo concorda com o sujeito paciente ("Vendem-se armas apreendidas"); quando o verbo é transitivo indireto, o "se" torna-se índice de indeterminação do sujeito e o verbo fica invariavelmente no singular ("Precisa-se de agentes").

A concordância nominal exige que artigos, adjetivos, pronomes e numerais concordem em gênero e número com o substantivo a que se referem. Casos notáveis: quando um único adjetivo qualifica vários substantivos, pode concordar com o mais próximo ou ir para o plural; "meio" como advérbio, equivalente a "um pouco", é invariável ("meio cansados"), mas como numeral concorda normalmente ("meia hora"); palavras predicativas como "anexo", "obrigado", "proibido" e "necessário", quando funcionam como predicativos, concordam com o substantivo a que se referem.`,
    exemplos: [
      "'A maioria dos policiais compareceu à convocação' (concordância com o núcleo 'maioria', singular) é tão correta quanto 'A maioria dos policiais compareceram à convocação' (concordância atrativa com 'policiais', plural) — ambas aceitas em expressões partitivas.",
      "'Seguem anexos os documentos solicitados.' — 'anexos' concorda com 'documentos' (masculino plural), diferente do uso incorreto e comum 'segue anexo os documentos', em que 'anexo' fica erradamente invariável.",
    ],
  },
  {
    materia: "pt",
    topico: "Regência verbal e nominal e crase",
    texto: `Regência é a relação de dependência entre um termo regente, verbo ou nome, e seus complementos, que pode ou não exigir preposição. Na regência verbal, o mesmo verbo pode mudar de sentido conforme a preposição, ou a ausência dela: "assistir" significa "presenciar" quando transitivo indireto, regido de "a" (assistiu ao depoimento), mas significa "prestar auxílio" quando transitivo direto; "visar" no sentido de "pretender" pede a preposição "a" (visava a fugir); "obedecer" e "desobedecer" são sempre transitivos indiretos, regidos de "a" (obedecem às normas); "aspirar" pede "a" quando significa "desejar" (aspirava ao cargo), mas é transitivo direto quando significa "sorver o ar" (aspirou o perfume). Na regência nominal, substantivos e adjetivos também exigem preposições fixas, geralmente as mesmas do verbo de que derivam: "obediente a", "necessidade de", "respeito a" ou "por".

A crase é a fusão da preposição "a", exigida pela regência de um verbo ou nome, com o artigo feminino "a(s)" ou com o "a" inicial dos pronomes demonstrativos "aquele(s)/aquela(s)/aquilo". Ela só ocorre, portanto, diante de palavra feminina que admita artigo — daí a proibição de crase antes de verbos no infinitivo, de pronomes pessoais retos ("a ela", nunca "à ela"), da maioria dos pronomes indefinidos e demonstrativos e antes de substantivo masculino. Também é obrigatória em locuções adverbiais femininas de modo, tempo ou lugar formadas com "a" (à noite, às pressas, à moda de) e facultativa antes de nomes próprios femininos e de pronomes possessivos femininos.`,
    exemplos: [
      "'O delegado assistiu ao depoimento da vítima' (assistir = presenciar, transitivo indireto com 'a') é diferente de 'O médico assistiu o paciente' (assistir = prestar socorro, transitivo direto, sem preposição obrigatória).",
      "'As provas obedecem às exigências legais' — crase obrigatória: a preposição 'a', exigida por 'obedecer a', funde-se com o artigo feminino que antecede 'exigências', substantivo feminino plural.",
    ],
  },
  {
    materia: "pt",
    topico: "Morfologia, classes de palavras e modalizadores",
    texto: `A morfologia é o ramo da gramática que estuda a estrutura interna das palavras, como elas se formam (radical, afixos, vogal temática, desinências) e como se flexionam (em gênero, número e grau, para os nomes; em pessoa, número, modo, tempo e voz, para os verbos), sem considerar sua função dentro da frase — isso é objeto da sintaxe.

As palavras da língua portuguesa dividem-se tradicionalmente em dez classes gramaticais. As classes variáveis, que se flexionam, são: substantivo (nomeia seres, objetos, sentimentos), adjetivo (atribui característica ao substantivo), artigo (determina ou indetermina o substantivo), numeral (indica quantidade, ordem, múltiplo ou fração), pronome (substitui ou acompanha o substantivo) e verbo (indica ação, estado ou fenômeno, flexionando-se em tempo, modo, pessoa e número). As classes invariáveis são: advérbio (modifica verbo, adjetivo ou outro advérbio, indicando circunstância), preposição (liga termos, estabelecendo relação de regência), conjunção (liga orações ou termos de mesma função) e interjeição (exprime emoção).

Os modalizadores são palavras ou expressões, frequentemente advérbios, mas também verbos auxiliares modais (dever, poder, parecer) e certos adjetivos, que revelam a atitude do enunciador em relação ao conteúdo enunciado: certeza ou convicção (certamente, sem dúvida), possibilidade ou dúvida (talvez, possivelmente), obrigatoriedade (é preciso que, deve-se) ou avaliação subjetiva (felizmente, infelizmente). Identificar o modalizador e o valor semântico que ele imprime à frase é habilidade frequentemente cobrada em questões de interpretação, pois revela o grau de comprometimento do autor com a informação transmitida — nem sempre um texto afirma algo com plena certeza.`,
    exemplos: [
      "Em 'O agente, cautelosamente, aproximou-se do veículo', 'cautelosamente' é advérbio de modo, formado por adjetivo mais o sufixo -mente, e modifica o verbo 'aproximou-se', indicando como a ação ocorreu.",
      "Em 'Possivelmente, o réu recorrerá da sentença', o modalizador 'possivelmente' expressa dúvida/possibilidade — diferente de 'Certamente, o réu recorrerá', em que 'certamente' expressa convicção do falante.",
    ],
  },
  {
    materia: "pt",
    topico: "Semântica (sinônimos, antônimos, parônimos, polissemia, ambiguidade)",
    texto: `A semântica estuda o significado das palavras e das construções linguísticas. Alguns fenômenos semânticos são frequentemente cobrados em concurso.

Sinônimos são palavras de significado igual ou muito próximo, que podem, em geral, substituir-se em um mesmo contexto sem alteração relevante de sentido (depoimento e testemunho). Antônimos são palavras de sentido oposto (culpado e inocente). Vale notar que sinonímia e antonímia raramente são absolutas: dependem do contexto em que a palavra é empregada.

Parônimos são palavras de grafia e/ou pronúncia semelhantes, mas de significados diferentes — armadilha clássica de prova, pois o candidato tende a confundi-las: flagrante (surpreendido no ato) e fragrante (perfumado); eminente (ilustre, destacado) e iminente (prestes a ocorrer); retificar (corrigir, tornar exato) e ratificar (confirmar, validar); descriminar (retirar o caráter de crime) e discriminar (distinguir, ou tratar de forma preconceituosa); cumprimento (saudação, ou ato de cumprir) e comprimento (extensão).

Polissemia é a propriedade de uma mesma palavra, de uma única origem etimológica, possuir vários sentidos relacionados entre si, normalmente por extensão metafórica ou metonímica, como "cabeça" (parte do corpo que passa a designar também quem lidera um grupo). Isso se distingue da homonímia, em que duas palavras de origens diferentes coincidem apenas na forma, como "manga" (fruta) e "manga" (parte da roupa), sem relação semântica entre si.

Ambiguidade é o duplo sentido não intencional de uma frase, geralmente causado por má construção sintática, pela posição de um pronome, de um adjunto adverbial ou de uma oração que pode se ligar a mais de um termo da frase. Diferente da polissemia, que é um recurso natural da língua, a ambiguidade indesejada costuma ser apontada como um problema de clareza textual a ser corrigido.`,
    exemplos: [
      "Parônimos: 'A perícia constatou que o crime foi flagrante' (flagrante = surpreendido no ato) versus 'A sala exalava um perfume fragrante' (fragrante = perfumado) — grafias parecidas, sentidos totalmente diferentes.",
      "Ambiguidade: 'O policial viu o suspeito com o binóculo' pode significar tanto que o policial usou o binóculo para observar quanto que o suspeito estava portando o binóculo — o termo 'com o binóculo' pode se ligar ao verbo ou ao substantivo.",
    ],
  },
  {
    materia: "pt",
    topico: "Ortografia e acentuação",
    texto: `A ortografia trata da grafia correta das palavras. Alguns pontos são recorrentes em provas: a diferença entre "mau" (adjetivo, antônimo de "bom") e "mal" (advérbio, antônimo de "bem", ou substantivo); entre "mas" (conjunção adversativa) e "mais" (advérbio de intensidade ou quantidade); e entre "porque" (conjunção explicativa/causal, usada em afirmações e respostas), "por que" (usado em perguntas, diretas ou indiretas, ou equivalente a "pelo qual"), "por quê" (final de frase, tônico) e "porquê" (substantivo, precedido de artigo: "o porquê da demissão"). Também merecem atenção pares com grafia próxima, como "excesso"/"exceção", e o uso de S, Z, X, CH e G/J conforme a origem etimológica das palavras.

A acentuação gráfica segue regras conforme a posição da sílaba tônica. As proparoxítonas são sempre acentuadas, sem exceção (público, árvore, sílaba). Cuidado com palavras terminadas em "-ção", como "execução" e "promoção": apesar de parecerem "compridas", são oxítonas (tônica na última sílaba), não proparoxítonas, e por isso seguem a regra das oxítonas. As paroxítonas são acentuadas apenas quando terminam em certas letras ou sons: r, l, n, x, ps, ã(s), ão(s), um/uns, i(s), us, ditongo (fácil, hífen, tórax, órgão, álbum, júri). As oxítonas são acentuadas quando terminam em a(s), e(s), o(s), em, ens (sofá, você, avô, também). Monossílabos tônicos seguem a mesma regra das oxítonas (pá, mês, nós); monossílabos átonos nunca são acentuados. Hiatos formados por "i" ou "u" tônicos, sozinhos na sílaba, sem outra consoante além de "s", recebem acento (saída, baú).

O Acordo Ortográfico de 1990 eliminou o trema em português do Brasil, extinguiu o acento diferencial de "pára/para" e "pêlo/pelo", salvo poucas exceções como "pôde/pode", e retirou o acento dos ditongos abertos "ei" e "oi" em paroxítonas (ideia, heroico, sem acento).`,
    exemplos: [
      "'Ele foi mal no teste, pois estava de mau humor.' — 'mal' (advérbio, opõe-se a 'bem') modifica 'foi'; 'mau' (adjetivo, opõe-se a 'bom') qualifica 'humor'.",
      "'Não sei por que ele confessou; ninguém entendeu o porquê da atitude.' — 'por que' (separado, sem acento) em pergunta indireta; 'porquê' (substantivo, com artigo) equivale a 'motivo'.",
    ],
  },
];
