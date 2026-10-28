import type { QuestaoPrf } from "../../data/prf";

export const QUESTOES_PRF_PT: QuestaoPrf[] = [
  {
    id: "prf-pt-001",
    materia: "pt",
    topico: "Compreensão e interpretação de textos",
    subassunto: "Inferência e relação de causa entre períodos",
    dificuldade: 4,
    raciocinio: "Ligar a ressalva sobre a percepção do sono à mudança descrita no último período, separando inferência de extrapolação",
    enunciado:
      "Leia o texto.\n\n“Nas rodovias federais, o cansaço ao volante raramente aparece nos boletins de ocorrência como causa principal de um acidente, porque é difícil comprová-lo depois do fato. Isso não significa que ele seja raro, e sim que é mal medido. Também é mal percebido: quem dirige costuma notar o sono quando a atenção já caiu. Por isso, as campanhas mais recentes deixaram de perguntar ao condutor se ele se sente cansado e passaram a perguntar há quanto tempo ele está dirigindo.”\n\nInfere-se corretamente do texto que",
    alternativas: [
      "a escassez de registros do cansaço nos boletins revela que ele é causa secundária de acidentes.",
      "o texto atribui a subnotificação à falta de empenho das equipes que registram os acidentes.",
      "a nova pergunta das campanhas usa um critério que não depende de o condutor perceber o sono.",
      "as campanhas abandonaram o tema do cansaço por ser difícil comprová-lo depois do acidente.",
      "o risco surge só quando o motorista percebe os sinais de sono, o que explica a nova pergunta.",
    ],
    correta: 2,
    explicacao:
      "O texto diz que o cansaço é “mal percebido”: o motorista costuma notar o sono quando a atenção já caiu. “Por isso”, as campanhas trocaram a pergunta sobre a sensação (“se ele se sente cansado”) pela pergunta sobre o tempo de direção, um dado que não depende de o condutor perceber o próprio sono.",
    explicacaoErradas:
      "Dizer que a escassez de registros revela causa secundária contraria o segundo período: a raridade nos boletins não significa que o cansaço seja raro, só que é mal medido. A falta de empenho das equipes é causa inventada; o texto atribui a subnotificação à dificuldade de comprovar o cansaço depois do fato. As campanhas não abandonaram o tema, apenas mudaram a pergunta. E o risco não surge só com a percepção do sono: o texto diz justamente que ela chega quando a atenção já caiu.",
    pegadinha:
      "A primeira afirmação do texto (o cansaço “raramente aparece” nos boletins) é logo corrigida (“Isso não significa que ele seja raro”). A FGV costuma montar a errada sobre a ideia que o autor apresenta para, em seguida, refutar.",
    conhecimento:
      "Inferência é a conclusão que decorre necessariamente do texto, quase sempre ligando duas informações (aqui, “mal percebido” e “Por isso”). Extrapolação diz mais do que o texto; contradição nega o texto; causa inventada atribui ao autor uma explicação que ele não deu.",
    origem: "banco",
  },
  {
    id: "prf-pt-002",
    materia: "pt",
    topico: "Compreensão e interpretação de textos",
    subassunto: "Alvo da crítica e dado verdadeiro, mas insuficiente",
    dificuldade: 4,
    raciocinio: "Separar o que o autor critica (o indicador escolhido) do que ele reconhece como fato (a queda real em parte dos pedidos)",
    enunciado:
      "Leia o texto.\n\n“O novo sistema de protocolo eletrônico reduziu o tempo médio de tramitação dos pedidos de 40 para 12 dias. A queda, porém, não foi uniforme: os pedidos simples passaram a ser resolvidos em poucas horas, enquanto os que dependem de parecer técnico continuam presos à mesma fila de antes, agora apenas digital. Comemorar a média, nesse caso, é esconder justamente os processos que mais demoravam.”\n\nA crítica feita no último período dirige-se",
    alternativas: [
      "ao uso da média como indicador, que encobre a demora persistente dos pedidos com parecer.",
      "à implantação do sistema, que teria ampliado o prazo dos pedidos que exigem parecer técnico.",
      "à digitalização da fila, que teria gerado atrasos que não existiam na tramitação em papel.",
      "à rapidez dos pedidos simples, que seria apenas aparente diante do novo modelo de tramitação.",
      "ao resultado de 12 dias, que o autor considera falso por desconsiderar os pedidos sem parecer.",
    ],
    correta: 0,
    explicacao:
      "O último período diz que “comemorar a média” esconde “justamente os processos que mais demoravam”. O alvo da crítica é o indicador: a média de 12 dias mistura pedidos simples, agora resolvidos em horas, com os que dependem de parecer, que seguem na mesma fila de antes.",
    explicacaoErradas:
      "O texto não diz que o sistema ampliou o prazo dos pedidos com parecer nem que a digitalização criou atrasos: eles “continuam presos à mesma fila de antes”, ou seja, não pioraram. A rapidez dos pedidos simples é dada como real (“resolvidos em poucas horas”). E o autor não chama a média de falsa: diz que ela esconde parte da realidade — e quem fica escondido são os pedidos com parecer, não os sem parecer.",
    pegadinha:
      "A opção do “resultado falso” troca “esconder” por “falsear” e ainda inverte o grupo prejudicado. A FGV cobra a diferença entre um dado verdadeiro, mas insuficiente, e um dado falso.",
    conhecimento:
      "A média resume, mas pode ocultar a dispersão dos casos. Para identificar o alvo de uma crítica, localize o termo avaliado (“comemorar a média”) e o motivo (“esconder”), sem atribuir ao autor juízos que ele não fez.",
    origem: "banco",
  },
  {
    id: "prf-pt-003",
    materia: "pt",
    topico: "Compreensão e interpretação de textos",
    subassunto: "Função argumentativa de um período: refutação e delimitação",
    dificuldade: 5,
    raciocinio: "Identificar a operação discursiva realizada pelo último período, e não apenas o seu conteúdo",
    enunciado:
      "Leia o texto.\n\n“A fiscalização eletrônica de velocidade é eficaz nos pontos em que está instalada: ali, o número de atropelamentos cai de forma consistente. O efeito, contudo, costuma desaparecer poucos quilômetros depois, quando o motorista volta a acelerar. Daí não se segue que os radares sejam inúteis, mas que, sozinhos, transformam trechos perigosos em trechos vigiados — o que não é a mesma coisa que trechos seguros.”\n\nNo desenvolvimento do argumento, o último período tem a função de",
    alternativas: [
      "reforçar a tese de que os radares deveriam ser retirados dos trechos com poucos acidentes.",
      "apresentar um dado estatístico que contradiz a eficácia afirmada no primeiro período.",
      "concluir que a fiscalização eletrônica perde a eficácia quando é instalada fora das cidades.",
      "exemplificar as causas que levam o motorista a acelerar logo depois de passar pelo radar.",
      "afastar a conclusão que o período anterior poderia sugerir e delimitar o alcance da medida.",
    ],
    correta: 4,
    explicacao:
      "O segundo período mostra que o efeito do radar some poucos quilômetros depois, o que poderia levar o leitor a concluir que ele é inútil. O último período barra essa conclusão (“Daí não se segue que os radares sejam inúteis”) e delimita o que eles de fato fazem: sozinhos, tornam o trecho vigiado, não necessariamente seguro.",
    explicacaoErradas:
      "O autor não propõe retirar radares; diz apenas que, sozinhos, eles não bastam. Não há dado estatístico novo, e o efeito descrito no segundo período não contradiz o primeiro: eficácia local e efeito que se dissipa convivem. A oposição entre cidade e rodovia não está no texto. E o texto não explica por que o motorista acelera; só constata que ele volta a acelerar.",
    pegadinha:
      "A opção do “dado que contradiz a eficácia” parece certa porque o segundo período relativiza o primeiro. Relativizar não é contradizer: o autor mantém que o radar é eficaz “nos pontos em que está instalado”.",
    conhecimento:
      "Concessão com delimitação: reconhece-se um fato (o efeito se dissipa), recusa-se a conclusão extrema (“não se segue que… sejam inúteis”) e propõe-se uma conclusão mais precisa. Perguntas sobre a “função” de um trecho pedem a operação que ele realiza no argumento.",
    origem: "banco",
  },
  {
    id: "prf-pt-004",
    materia: "pt",
    topico: "Compreensão e interpretação de textos",
    subassunto: "Polifonia e aplicação da conclusão do texto",
    dificuldade: 4,
    raciocinio: "Distinguir a tese do autor da voz introduzida por “Há quem” e aplicá-la a uma situação nova",
    enunciado:
      "Leia o texto.\n\n“Há quem veja no aumento das multas a solução para a violência no trânsito. A experiência mostra outra coisa: o valor da multa pesa menos na decisão do motorista do que a chance de ser flagrado. Uma multa alta e improvável assusta pouco; uma multa moderada e quase certa muda comportamentos. Não se trata, portanto, de punir mais, e sim de punir com mais regularidade.”\n\nDas medidas a seguir, a mais coerente com a conclusão do texto é",
    alternativas: [
      "dobrar o valor das multas gravíssimas, mesmo que a fiscalização continue esporádica.",
      "ampliar a fiscalização regular nas rodovias, mantendo os valores atuais das multas.",
      "substituir as multas por campanhas educativas, que dispensam a presença de agentes.",
      "reduzir o valor das multas, para que o pagamento se torne mais frequente que o recurso.",
      "concentrar as penalidades mais altas nos trechos onde o flagrante é menos provável.",
    ],
    correta: 1,
    explicacao:
      "A conclusão do autor é que importa “punir com mais regularidade”, porque a chance de ser flagrado pesa mais do que o valor da multa. Ampliar a fiscalização regular, sem mexer nos valores, aumenta justamente a probabilidade do flagrante — a variável que o texto aponta como decisiva.",
    explicacaoErradas:
      "Dobrar as multas com fiscalização esporádica segue a tese que o autor rejeita: multa alta e improvável “assusta pouco”. Campanhas educativas são proposta que o texto não discute. Reduzir multas para facilitar o pagamento cria objetivo estranho ao texto, que admite multa moderada só se “quase certa”. E concentrar penalidades altas onde o flagrante é improvável é o exemplo do que não funciona.",
    pegadinha:
      "“Há quem veja” apresenta uma opinião alheia que o autor vai contestar. Quem confunde essa voz com a do autor marca a medida de aumentar as multas.",
    conhecimento:
      "Polifonia: “há quem diga”, “alguns defendem” e expressões semelhantes introduzem pontos de vista que o autor pode refutar. Em questões de aplicação, a resposta é a medida que decorre da conclusão do texto (aqui, certeza da punição acima da severidade), e não a que só repete palavras dele.",
    origem: "banco",
  },
  {
    id: "prf-pt-005",
    materia: "pt",
    topico: "Compreensão e interpretação de textos",
    subassunto: "Pressuposto e negação de interpretação alternativa",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: pressuposto de “Desta vez”, função de “Não por descaso” e causa atribuída pelo texto",
    enunciado:
      "Leia o texto.\n\n“Os servidores do setor receberam o novo manual de procedimentos na segunda-feira. Até a sexta, ninguém havia aberto o arquivo. Não por descaso: o manual anterior também tinha sido distribuído com entusiasmo e esquecido em poucas semanas, porque ninguém explicou o que mudava na rotina de cada um. Desta vez, a chefia decidiu reunir as equipes antes de cobrar o cumprimento das novas regras.”\n\nConsidere as afirmações sobre o texto.\n\nI. “Desta vez” pressupõe ocasião anterior em que a chefia agiu de modo diferente.\nII. “Não por descaso” antecipa e rejeita uma interpretação possível do fato narrado no período anterior.\nIII. O texto atribui o esquecimento do manual anterior à falta de interesse dos servidores pelo conteúdo.\n\nEstá correto o que se afirma em",
    alternativas: ["I, apenas.", "II, apenas.", "II e III, apenas.", "I e II, apenas.", "I, II e III."],
    correta: 3,
    explicacao:
      "I está correta: “Desta vez” só faz sentido se houve ocasião anterior, e o texto mostra que, nela, ninguém explicou as mudanças — a chefia agiu de outro modo. II está correta: “Não por descaso” recusa a leitura mais óbvia do fato anterior (ninguém abriu o arquivo) antes de apresentar a explicação verdadeira.",
    explicacaoErradas:
      "III está errada: o texto atribui o esquecimento do manual anterior ao fato de que “ninguém explicou o que mudava na rotina de cada um”, e não à falta de interesse dos servidores — hipótese que o próprio “Não por descaso” afasta. Por isso, as opções que incluem III, ou que deixam de fora I ou II, estão erradas.",
    pegadinha:
      "III repete a explicação que o texto descarta. A estrutura “Não por X: Y” nega X e afirma Y; quem lê com pressa guarda a palavra negada.",
    conhecimento:
      "Pressuposto é a informação que a frase dá como certa e que se mantém mesmo quando ela é negada ou posta em pergunta (“Desta vez a chefia não reuniu as equipes?” continua pressupondo uma vez anterior). Marcadores como “desta vez”, “ainda”, “deixar de”, “voltar a” e “também” costumam gerar pressupostos.",
    origem: "banco",
  },
  {
    id: "prf-pt-006",
    materia: "pt",
    topico: "Tipologia textual",
    subassunto: "Sequência injuntiva e sequência expositiva no mesmo texto",
    dificuldade: 4,
    raciocinio: "Classificar a função de cada período e reconhecer que um texto combina sequências",
    enunciado:
      "Leia o texto.\n\n“Antes de iniciar a viagem, confira a calibragem dos pneus, inclusive a do estepe, sempre com os pneus frios. A pressão recomendada pelo fabricante costuma vir indicada na coluna da porta do motorista ou no manual do veículo. Pneus com pressão abaixo da indicada aquecem mais, desgastam-se de forma irregular e aumentam o consumo de combustível.”\n\nSobre a organização do texto, é correto afirmar que",
    alternativas: [
      "o texto é predominantemente narrativo, pois encadeia ações numa sequência temporal.",
      "o terceiro período é descritivo, pois caracteriza os pneus por meio de adjetivos.",
      "o imperativo do primeiro período dá ao texto caráter argumentativo, por exprimir opinião.",
      "o primeiro período é injuntivo, e os demais dão informações que sustentam a instrução.",
      "o segundo período reformula a instrução inicial, apresentando-a como mera sugestão.",
    ],
    correta: 3,
    explicacao:
      "O primeiro período é injuntivo: o imperativo (“confira”) orienta o comportamento do leitor. O segundo informa onde encontrar a pressão recomendada, e o terceiro expõe as consequências da pressão baixa. Os dois últimos são expositivos e dão o meio e a razão para cumprir a instrução.",
    explicacaoErradas:
      "Não há narração: as ações não são fatos ocorridos numa sequência temporal, mas instruções e informações gerais. O terceiro período não descreve os pneus; expõe relações de causa e consequência (pressão baixa → aquecimento, desgaste, consumo). O imperativo marca instrução, não opinião, e por isso não torna o texto argumentativo. O segundo período não reformula a instrução como sugestão: acrescenta uma informação nova (onde a pressão está indicada).",
    pegadinha:
      "Sequência de ações não é narração. Na injunção, os verbos indicam o que o leitor deve fazer; na narração, o que aconteceu com alguém num tempo.",
    conhecimento:
      "Marcas dos tipos: narração (fatos em progressão temporal, pretérito perfeito), descrição (características, simultaneidade, imperfeito), exposição (informação, presente atemporal, relações de causa), argumentação (tese e defesa) e injunção (imperativo, instrução). Um texto costuma combinar sequências; classifica-se pelo predominante e pela função de cada trecho.",
    origem: "banco",
  },
  {
    id: "prf-pt-007",
    materia: "pt",
    topico: "Tipologia textual",
    subassunto: "Marcas da descrição: pretérito imperfeito e simultaneidade",
    dificuldade: 4,
    raciocinio: "Reconhecer a marca que define a sequência descritiva e descartar falsas pistas de narração",
    enunciado:
      "Leia o trecho.\n\n“A sala do protocolo era estreita e comprida. Pelas duas janelas altas entrava uma luz amarelada, que mal alcançava o balcão. Atrás dele, três servidores se revezavam entre o telefone e as pilhas de pastas, e o relógio da parede, parado havia meses, marcava sempre dez e quinze.”\n\nNo trecho, predomina a sequência descritiva. Comprova essa classificação principalmente",
    alternativas: [
      "a presença de verbos de ação, que indicam a sucessão dos fatos ocorridos na sala.",
      "o pretérito imperfeito, que mostra estados e ações simultâneos, sem avanço no tempo.",
      "a ausência de adjetivos, compensada pela enumeração dos objetos que compõem o ambiente.",
      "o emprego da primeira pessoa, que revela a impressão do narrador sobre o lugar descrito.",
      "a menção ao relógio parado, que introduz um conflito a ser resolvido ao longo do texto.",
    ],
    correta: 1,
    explicacao:
      "Os verbos estão no pretérito imperfeito (“era”, “entrava”, “alcançava”, “se revezavam”, “marcava”), que apresenta estados e ações habituais ou simultâneos, como num quadro. Nada avança no tempo: o trecho mostra como a sala era, e não o que aconteceu nela.",
    explicacaoErradas:
      "O único verbo de ação relevante (“se revezavam”) indica hábito, não sucessão de fatos. Há vários adjetivos (“estreita”, “comprida”, “altas”, “amarelada”). O trecho está em terceira pessoa, sem marca de narrador que fale de si. E o relógio parado é um detalhe descritivo, não um conflito.",
    pegadinha:
      "“Se revezavam” é verbo de ação e leva a pensar em narração. Mas a ação está no imperfeito, com valor de hábito: compõe o retrato do lugar sem fazer a história avançar.",
    conhecimento:
      "Na descrição, o tempo fica suspenso: predominam verbos de estado e o pretérito imperfeito, além de adjetivos e locuções que caracterizam. Na narração, o pretérito perfeito marca fatos sucessivos (“entrou”, “disse”, “saiu”) que alteram a situação inicial.",
    origem: "banco",
  },
  {
    id: "prf-pt-008",
    materia: "pt",
    topico: "Tipologia textual",
    subassunto: "Distinção entre tipo e gênero textual",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas sobre a relação entre sequência tipológica e gênero",
    enunciado:
      "Considere as afirmações sobre tipos e gêneros textuais.\n\nI. Um mesmo gênero pode combinar diferentes sequências tipológicas; num relatório de acidente, por exemplo, convivem narração e descrição.\nII. Tipo e gênero textual são noções equivalentes; o ofício, por exemplo, é um tipo textual.\nIII. Os tipos formam um conjunto limitado de sequências, ao passo que os gêneros são numerosos e variam conforme as práticas sociais.\nIV. A receita culinária e o manual de instruções pertencem ao mesmo gênero, porque em ambos predomina a injunção.\n\nEstá correto o que se afirma em",
    alternativas: ["I e III, apenas.", "I e II, apenas.", "II e IV, apenas.", "I, III e IV, apenas.", "III e IV, apenas."],
    correta: 0,
    explicacao:
      "I está correta: o gênero é a forma concreta de comunicação, e um relatório de acidente narra o que ocorreu e descreve o local e os veículos. III está correta: os tipos são poucas sequências (narração, descrição, exposição, argumentação, injunção), enquanto os gêneros são incontáveis e mudam com as práticas sociais (ofício, e-mail, boletim de ocorrência, receita).",
    explicacaoErradas:
      "II está errada: tipo é a sequência linguística; gênero é o texto concreto, definido pela função social. O ofício é um gênero, que pode combinar exposição, argumentação e injunção. IV está errada: ter o mesmo tipo predominante não faz dois textos pertencerem ao mesmo gênero; a receita e o manual são gêneros distintos, ambos com predomínio da injunção.",
    pegadinha:
      "IV parte de um dado verdadeiro (nos dois predomina a injunção) e tira uma conclusão errada (mesmo gênero). O tipo predominante não define o gênero.",
    conhecimento:
      "Tipo textual: sequência definida por traços linguísticos (tempos verbais, relações lógicas), em número limitado. Gênero textual: texto concreto com função social, estrutura e circulação próprias (ofício, edital, relatório, notícia). Um gênero costuma combinar vários tipos, com um predominante.",
    origem: "banco",
  },
  {
    id: "prf-pt-009",
    materia: "pt",
    topico: "Ortografia oficial",
    subassunto: "Os quatro porquês, inclusive o “por que” relativo",
    dificuldade: 4,
    raciocinio: "Conferir cada emprego da frase, inclusive o “por que” equivalente a “pelo qual”",
    enunciado:
      "Assinale a frase em que todos os empregos de “por que”, “por quê”, “porque” e “porquê” seguem a norma-padrão.",
    alternativas: [
      "Ninguém explicou o porque da mudança, nem por que ela foi feita às pressas.",
      "A equipe quer saber porque o pedido foi negado, e o chefe não disse por quê.",
      "Por quê o sistema saiu do ar? Ninguém sabe, porque não houve aviso prévio.",
      "Foi esse o motivo porque o prazo foi prorrogado, sem reclamação dos usuários.",
      "O motivo por que o prazo mudou é obscuro, e ninguém soube dizer por quê.",
    ],
    correta: 4,
    explicacao:
      "Em “O motivo por que o prazo mudou”, “por que” equivale a “pelo qual” (preposição + pronome relativo) e se escreve separado e sem acento. No fim da frase, “por quê” leva acento, porque o “que” fica tônico em posição final.",
    explicacaoErradas:
      "“O porque da mudança” está errado: substantivado, com artigo, o termo é “porquê”. “Quer saber porque o pedido foi negado” está errado: na interrogativa indireta, escreve-se “por que”. “Por quê o sistema saiu do ar?” erra o acento, que só aparece com o “que” em fim de frase. “O motivo porque o prazo foi prorrogado” está errado: equivalendo a “pelo qual”, escreve-se “por que”.",
    pegadinha:
      "Cada frase errada tem também um emprego certo (“nem por que ela foi feita”, “não disse por quê”, “porque não houve aviso”). É preciso conferir todos os usos, não só o primeiro.",
    conhecimento:
      "“Por que”: pergunta direta ou indireta e equivalente a “pelo qual”/“pela qual”. “Por quê”: o mesmo, em fim de frase. “Porque”: conjunção causal ou explicativa (= pois). “Porquê”: substantivo (= o motivo), com artigo ou outro determinante.",
    origem: "banco",
  },
  {
    id: "prf-pt-010",
    materia: "pt",
    topico: "Ortografia oficial",
    subassunto: "Grafia de -isar/-izar, -ensão e -ção",
    dificuldade: 4,
    raciocinio: "Conferir todas as palavras de cada frase, reconhecendo a regra de formação que define a letra",
    enunciado: "Assinale a frase em que todas as palavras estão grafadas de acordo com a ortografia oficial.",
    alternativas: [
      "A chefia decidiu analizar a pesquisa e paralisar a obra até nova ordem.",
      "O órgão vai fiscalizar as concessões e realisar novas vistorias no trecho.",
      "A obsessão pelo prazo levou à suspensão da análise e à revisão do cálculo.",
      "A ascensão do recurso à instância superior suspendeu a execussão da multa aplicada.",
      "Houve excesso na cobrança, e a empresa requereu a extenção do prazo.",
    ],
    correta: 2,
    explicacao:
      "Todas as palavras estão corretas: “obsessão” (com ss e s), “suspensão” e “revisão” (com s, como “suspenso” e “revisto”), “análise” e “cálculo”.",
    explicacaoErradas:
      "“Analizar” está errado: o verbo vem de “análise”, que tem s, e se escreve “analisar” (como “paralisar”, de “paralisia”, e “pesquisar”, de “pesquisa”). “Realisar” está errado: “realizar” se forma com o sufixo -izar, como “fiscalizar”. “Execussão” está errado: o correto é “execução”, com ç, como em “executar”. “Extenção” está errado: o correto é “extensão”, com s.",
    pegadinha:
      "As frases erradas trazem palavras difíceis grafadas corretamente (“ascensão”, “excesso”, “concessões”, “paralisar”), o que dá a impressão de que a frase toda está certa. O erro está numa palavra só.",
    conhecimento:
      "-isar × -izar: se a palavra primitiva já tem s no radical, mantém-se o s (análise → analisar; pesquisa → pesquisar; paralisia → paralisar); nos demais casos, usa-se o sufixo -izar (real → realizar; fiscal → fiscalizar). Verbos em -ender formam substantivos em -ensão (suspender → suspensão; ascender → ascensão); verbos em -tar costumam formar substantivos em -ção (executar → execução). Atenção: “estender” se escreve com s, mas “extensão” e “extenso” levam x.",
    origem: "banco",
  },
  {
    id: "prf-pt-011",
    materia: "pt",
    topico: "Ortografia oficial",
    subassunto: "Há/a, mal/mau, onde/aonde, acerca de, senão, a fim de",
    dificuldade: 4,
    raciocinio: "Testar cada expressão pela sua equivalência (faz/daqui a, bem/bom, em que/a que, sobre, a não ser, para)",
    enunciado: "Assinale a frase em que todas as expressões estão empregadas de acordo com a norma-padrão.",
    alternativas: [
      "Daqui a duas semanas, o posto completa um ano; há cerca de dez dias, porém, funciona mal.",
      "O motorista não sabia aonde estava o documento, e o agente, de mau humor, não o ajudou.",
      "A reunião tratou a cerca das novas escalas e, se não houver acordo, a chefia decidirá.",
      "O servidor estava afim de concluir o relatório, mas o sistema funcionou mau a tarde inteira.",
      "Não restava outra saída se não aguardar o laudo, que deve chegar há qualquer momento.",
    ],
    correta: 0,
    explicacao:
      "“Daqui a duas semanas” indica tempo futuro e usa a preposição “a”; “há cerca de dez dias” indica tempo decorrido e usa o verbo “haver”; “funciona mal” emprega o advérbio “mal”, oposto de “bem”.",
    explicacaoErradas:
      "“Aonde estava o documento” está errado: “aonde” só se usa com verbos de movimento que pedem a preposição “a” (ir a, chegar a); com “estar”, usa-se “onde”. “Tratou a cerca das novas escalas” está errado: no sentido de “sobre”, a locução é “acerca de”. “Afim de concluir” está errado (a locução de finalidade é “a fim de”), e “funcionou mau” também (o advérbio é “mal”). “Se não aguardar” está errado: no sentido de “a não ser”, escreve-se “senão”; e o futuro pede a preposição: “a qualquer momento”.",
    pegadinha:
      "Nas frases erradas, há empregos certos ao lado do errado (“de mau humor”, “se não houver acordo”). “Se não”, separado, é correto quando equivale a “caso não”.",
    conhecimento:
      "Há (verbo) para tempo decorrido; a (preposição) para tempo futuro ou distância. Mal (advérbio, oposto de bem; ou substantivo) × mau (adjetivo, oposto de bom). Onde (lugar em que) × aonde (lugar a que, com verbos de movimento). Acerca de (sobre) × há cerca de (faz aproximadamente) × a cerca de (a uma distância aproximada). Senão (a não ser; caso contrário) × se não (caso não). A fim de (finalidade) × afim (semelhante).",
    origem: "banco",
  },
  {
    id: "prf-pt-012",
    materia: "pt",
    topico: "Ortografia oficial",
    subassunto: "Hífen com prefixos no Acordo Ortográfico de 1990",
    dificuldade: 5,
    raciocinio: "Aplicar a regra da letra final do prefixo e da inicial do segundo elemento em cada palavra",
    enunciado:
      "Assinale a frase em que todas as palavras seguem as regras de emprego do hífen do Acordo Ortográfico de 1990.",
    alternativas: [
      "A anti-sepsia do local foi concluída antes da chegada do ex-diretor.",
      "O laudo apontou autoestima baixa e comportamento anti-social do condutor.",
      "O micro-ônibus parou no posto recém-inaugurado, de infraestrutura moderna.",
      "O vice-diretor vetou o atendimento extra-oficial prestado ao microempresário.",
      "O exame de ultra-som foi pedido para avaliar o pós-operatório do agente.",
    ],
    correta: 2,
    explicacao:
      "“Micro-ônibus” tem hífen porque o prefixo termina na mesma vogal que inicia o segundo elemento (o + o). “Recém-” sempre se liga por hífen. “Infraestrutura” se escreve junto, porque as vogais são diferentes (a + e).",
    explicacaoErradas:
      "“Anti-sepsia” e “anti-social” estão errados: prefixo terminado em vogal diante de s se junta e dobra o s (antissepsia, antissocial). “Extra-oficial” está errado: vogais diferentes se juntam (extraoficial). “Ultra-som” está errado pelo mesmo motivo de “antissocial” (ultrassom). Nas mesmas frases, “ex-diretor”, “autoestima”, “vice-diretor”, “microempresário” e “pós-operatório” estão corretos.",
    pegadinha:
      "Com prefixo terminado em vogal, o hífen só aparece diante da mesma vogal (micro-ônibus, anti-inflamatório) ou de h. Com vogal diferente, junta-se (autoescola, extraoficial); com r ou s, junta-se e dobra-se a consoante (antirrábico, ultrassom).",
    conhecimento:
      "Prefixos no Acordo de 1990: vogal + mesma vogal → hífen (micro-ônibus, contra-ataque; exceção: co-, que se junta: cooperar, coordenar); vogal + vogal diferente → junto (autoescola, infraestrutura); vogal + r ou s → junto, com a consoante dobrada (contrarregra, autossuficiente); diante de h, em regra, hífen (anti-higiênico, super-homem). Ex-, vice-, recém-, sem-, além- e os tônicos pós-, pré- e pró- sempre pedem hífen.",
    origem: "banco",
  },
  {
    id: "prf-pt-013",
    materia: "pt",
    topico: "Acentuação gráfica",
    subassunto: "Regras de acentuação alteradas pelo Acordo de 1990",
    dificuldade: 5,
    raciocinio: "Separar o que o Acordo eliminou (ditongo aberto em paroxítona, -eem, -oo, diferenciais) do que permaneceu (oxítonas, pôde, têm)",
    enunciado: "Assinale a frase em que todas as palavras estão acentuadas de acordo com o Acordo Ortográfico de 1990.",
    alternativas: [
      "A plateia aplaudiu os heróis, mas a assembléia não votou a nova proposta.",
      "Eles creem que o voo atrasou porque o pára-brisa do avião trincou.",
      "A feiúra do prédio não impediu que a equipe tivesse uma boa ideia.",
      "Ontem ele não pôde vir; hoje os mecânicos veem o defeito nos faróis.",
      "Os fiscais têm dúvidas, mas a jibóia apreendida já pôde ser solta.",
    ],
    correta: 3,
    explicacao:
      "“Pôde” (passado) mantém o acento diferencial em relação a “pode” (presente). “Veem” perdeu o acento com o Acordo, como “creem”, “leem” e “deem”. “Faróis” é oxítona terminada no ditongo aberto “ói”, que continua acentuado nas oxítonas.",
    explicacaoErradas:
      "“Assembléia” e “jibóia” perderam o acento: os ditongos abertos “éi” e “ói” não se acentuam nas paroxítonas (assembleia, jiboia), embora “heróis” continue acentuado por ser oxítona. “Pára-brisa” perdeu o acento diferencial (para-brisa, como para-choque). “Feiúra” perdeu o acento: o i e o u tônicos depois de ditongo, nas paroxítonas, não se acentuam mais (feiura).",
    pegadinha:
      "O Acordo tirou o acento dos ditongos abertos só nas paroxítonas. Nas oxítonas e nos monossílabos tônicos, ele continua: herói, faróis, papéis, dói, céu.",
    conhecimento:
      "Mudanças do Acordo de 1990: sem acento nos ditongos abertos éi e ói das paroxítonas (ideia, heroico), no i e no u tônicos após ditongo em paroxítonas (feiura), em -eem e -oo (creem, voo) e nos diferenciais de para, pelo, polo e pera. Permanecem os diferenciais de pôde/pode, pôr/por e têm/vêm (plural); “fôrma” e “dêmos” são facultativos.",
    origem: "banco",
  },
  {
    id: "prf-pt-014",
    materia: "pt",
    topico: "Acentuação gráfica",
    subassunto: "Paroxítonas, oxítonas, monossílabos, hiato e diferencial",
    dificuldade: 5,
    raciocinio: "Classificar cada palavra pela tonicidade e pela terminação antes de comparar as regras",
    enunciado: "Assinale a opção em que todas as palavras são acentuadas pela mesma regra.",
    alternativas: [
      "saúde, juízes, país e ninguém.",
      "café, você, cipó e três.",
      "lápis, vírus, fórum e herói.",
      "têm, pôde, pôr e órgão.",
      "útil, açúcar, tórax e bíceps.",
    ],
    correta: 4,
    explicacao:
      "“Útil”, “açúcar”, “tórax” e “bíceps” são paroxítonas terminadas em l, r, x e ps — todas acentuadas pela regra das paroxítonas.",
    explicacaoErradas:
      "Em “saúde, juízes, país e ninguém”, as três primeiras seguem a regra do hiato (i ou u tônico sozinho na sílaba ou com s), mas “ninguém” é oxítona terminada em -em. Em “café, você, cipó e três”, “três” é monossílabo tônico, regra própria, embora parecida com a das oxítonas. Em “lápis, vírus, fórum e herói”, “herói” é oxítona com ditongo aberto. Em “têm, pôde, pôr e órgão”, as três primeiras levam acento diferencial, e “órgão” é paroxítona terminada em -ão.",
    pegadinha:
      "Monossílabos tônicos (três, pé, pó) e oxítonas (você, café, cipó) terminam nas mesmas letras, mas são regras distintas. A banca separa as duas.",
    conhecimento:
      "Proparoxítonas: todas acentuadas. Paroxítonas: terminadas em l, n, r, x, ps, ã(s), ão(s), i(s), u(s), um, uns, on(s), ei(s) e ditongo oral. Oxítonas: terminadas em a(s), e(s), o(s), em, ens. Monossílabos tônicos: terminados em a(s), e(s), o(s). Hiato: i e u tônicos sozinhos na sílaba ou com s. Ditongos abertos éi, éu e ói: só nas oxítonas e nos monossílabos. Acentos diferenciais: pôde, pôr, têm, vêm.",
    origem: "banco",
  },
  {
    id: "prf-pt-015",
    materia: "pt",
    topico: "Acentuação gráfica",
    subassunto: "Acento de plural em ter, vir e derivados; pôde × pode",
    dificuldade: 5,
    raciocinio: "Identificar o sujeito e o tempo de cada verbo antes de conferir o acento",
    enunciado: "Assinale a frase em que o acento gráfico de todas as formas verbais está de acordo com a norma-padrão.",
    alternativas: [
      "Os fiscais detém as mercadorias e as mantêm no depósito até a perícia.",
      "Os resultados provêm de registros que os técnicos veem todos os dias.",
      "Os servidores vêem o problema, mas a chefia ainda não interveio nele.",
      "O relatório contêm dados sigilosos, e por isso a chefia o mantém guardado.",
      "Ontem o agente não pode concluir a vistoria, que ainda tem pendências.",
    ],
    correta: 1,
    explicacao:
      "“Provêm” é a terceira pessoa do plural de “provir” (os resultados provêm), com circunflexo; “veem” é o plural de “ver”, sem acento desde o Acordo de 1990.",
    explicacaoErradas:
      "“Os fiscais detém” está errado: no plural, os derivados de “ter” levam circunflexo (detêm), e o agudo fica para o singular (ele detém). “Vêem” perdeu o acento com o Acordo (veem). “O relatório contêm” está errado: com sujeito no singular, a forma é “contém”. “Ontem o agente não pode concluir” está errado: no pretérito perfeito, a forma é “pôde”, com acento diferencial.",
    pegadinha:
      "“Veem” (ver) e “vêm” (vir) convivem: o primeiro perdeu o acento com o Acordo; o segundo mantém o circunflexo de plural. Os derivados de ter e vir alternam agudo no singular e circunflexo no plural.",
    conhecimento:
      "Ter e vir: ele tem/vem; eles têm/vêm. Derivados (deter, manter, conter, obter, provir, intervir): ele detém/provém, com agudo por serem oxítonas em -em; eles detêm/provêm, com circunflexo de plural. Ver, crer, ler e dar: eles veem, creem, leem, deem, sem acento. Pôde (passado) e pode (presente) mantêm o diferencial.",
    origem: "banco",
  },
  {
    id: "prf-pt-016",
    materia: "pt",
    topico: "Emprego das classes de palavras",
    subassunto: "Conjunção concessiva e reescrita com conectivo equivalente",
    dificuldade: 5,
    raciocinio: "Identificar a relação de concessão e testar cada conectivo pelo sentido e pelo modo verbal que exige",
    enunciado:
      "Considere o período: “Embora a rodovia estivesse interditada, a equipe chegou ao local do acidente em vinte minutos.”\n\nA reescrita que preserva o sentido original e segue a norma-padrão é:",
    alternativas: [
      "Porquanto a rodovia estivesse interditada, a equipe chegou ao local do acidente em vinte minutos.",
      "Conquanto a rodovia estava interditada, a equipe chegou ao local do acidente em vinte minutos.",
      "Desde que a rodovia estivesse interditada, a equipe chegaria ao local do acidente em vinte minutos.",
      "A rodovia estava interditada, portanto a equipe chegou ao local do acidente em vinte minutos.",
      "A rodovia estava interditada; a equipe, contudo, chegou ao local do acidente em vinte minutos.",
    ],
    correta: 4,
    explicacao:
      "“Embora” introduz uma concessão: a interdição levaria a esperar um atraso, que não ocorreu. “Contudo”, conjunção adversativa, mantém essa relação de oposição; a oração concessiva passa a coordenada adversativa sem mudança de sentido.",
    explicacaoErradas:
      "“Porquanto” é causal (= porque): apresentaria a interdição como causa da chegada rápida. “Conquanto” é concessiva, mas exige o subjuntivo (“conquanto estivesse”), e não o indicativo “estava”. “Desde que” com subjuntivo é condicional, e o futuro do pretérito transforma o fato em hipótese. “Portanto” é conclusivo: apresentaria a chegada como consequência da interdição.",
    pegadinha:
      "A reescrita com “conquanto” tem o sentido certo; o erro está no modo verbal. As conjunções concessivas pedem subjuntivo.",
    conhecimento:
      "Concessão e adversidade exprimem oposição: na concessiva, a ressalva vem na subordinada (embora, conquanto, ainda que, mesmo que, posto que + subjuntivo); na adversativa, numa coordenada (mas, porém, contudo, todavia, entretanto, no entanto). Na norma-padrão, “posto que” é concessivo, não causal. Causais: porque, porquanto, já que, visto que, uma vez que. Condicionais: se, caso, desde que + subjuntivo.",
    origem: "banco",
  },
  {
    id: "prf-pt-017",
    materia: "pt",
    topico: "Emprego das classes de palavras",
    subassunto: "Meio, bastante, menos e só: advérbio invariável × palavra variável",
    dificuldade: 5,
    raciocinio: "Definir a classe de cada palavra pela função na frase e só então conferir a concordância",
    enunciado:
      "Em “Os documentos chegaram meio rasgados”, “meio” é advérbio e, por isso, não varia. Assinale a frase em que palavras como “meio”, “bastante”, “menos” e “só” estão empregadas de acordo com a norma-padrão.",
    alternativas: [
      "As agentes ficaram meias preocupadas, pois havia bastantes provas contra o motorista.",
      "Havia menas viaturas no pátio, e as duas agentes estavam sós na guarita da base.",
      "Os fiscais estavam bastantes atentos à carga, que pesava cerca de meia tonelada.",
      "Era meio-dia e meia quando as servidoras, já bastante cansadas, encerraram a vistoria.",
      "As provas colhidas já eram bastante, e as testemunhas, meio confusas, foram dispensadas.",
    ],
    correta: 3,
    explicacao:
      "Em “meio-dia e meia”, “meia” é numeral e concorda com “hora”, subentendida. Em “bastante cansadas”, “bastante” é advérbio, pois modifica um adjetivo, e fica invariável.",
    explicacaoErradas:
      "“Meias preocupadas” está errado: antes de adjetivo, “meio” é advérbio (meio preocupadas); “bastantes provas”, na mesma frase, está certo. “Menas” não existe: “menos” é invariável; “sós” (= sozinhas) está certo. “Bastantes atentos” está errado: modificando adjetivo, “bastante” é advérbio (bastante atentos). “Eram bastante” está errado: com o sentido de “suficientes”, “bastante” é adjetivo e concorda (eram bastantes).",
    pegadinha:
      "“Bastante” muda de classe conforme a função: varia ao acompanhar substantivo (bastantes provas) ou ao equivaler a “suficiente” (eram bastantes), e não varia ao modificar adjetivo, verbo ou advérbio.",
    conhecimento:
      "Meio: advérbio (= um pouco), invariável (meio confusas); numeral (= metade), variável (meia tonelada, meio-dia e meia). Bastante: advérbio, invariável (bastante atentos); pronome indefinido ou adjetivo (= suficiente), variável (bastantes provas; eram bastantes). Menos: sempre invariável. Só: adjetivo (= sozinho), variável (estavam sós); advérbio (= somente), invariável (só elas).",
    origem: "banco",
  },
  {
    id: "prf-pt-018",
    materia: "pt",
    topico: "Emprego das classes de palavras",
    subassunto: "Pronomes pessoais, reflexivos e de tratamento",
    dificuldade: 4,
    raciocinio: "Verificar a função de cada pronome (sujeito, objeto, reflexivo) e a pessoa exigida pelo pronome de tratamento",
    enunciado: "Quanto ao emprego dos pronomes, assinale a frase que segue a norma-padrão.",
    alternativas: [
      "O chefe trouxe o relatório para mim assinar antes do fim do expediente.",
      "Não houve desentendimento entre mim e o motorista; o auto, eu o lavrei sem pressa.",
      "Assim que o condutor chegou, o agente abordou ele e lhe pediu os documentos.",
      "Senhor Senador, Vossa Excelência e vossa assessoria estão convidados para a audiência.",
      "O agente, ao perceber a infração, chamou o motorista e conversou consigo sobre a multa.",
    ],
    correta: 1,
    explicacao:
      "Depois de preposição, usa-se o pronome oblíquo tônico (“entre mim e o motorista”). Em “o auto, eu o lavrei”, o pronome “o” retoma o objeto direto deslocado para o início, construção admitida pela norma-padrão (objeto pleonástico).",
    explicacaoErradas:
      "“Para mim assinar” está errado: o pronome é sujeito do infinitivo e deve ser reto (para eu assinar). “Abordou ele” está errado: pronome reto não funciona como objeto direto (abordou-o); “lhe pediu”, na mesma frase, está certo. “Vossa assessoria” está errado: os pronomes de tratamento levam possessivo e verbo na 3ª pessoa (sua assessoria). “Conversou consigo” está errado: “consigo” é reflexivo e só se refere ao sujeito da própria oração; o correto é “com ele”.",
    pegadinha:
      "“Entre mim” parece errado por analogia com “para mim fazer”, mas é a forma correta: o pronome é complemento da preposição, não sujeito de infinitivo.",
    conhecimento:
      "Pronome reto: sujeito (para eu fazer). Oblíquo tônico: depois de preposição (entre mim e ti, para mim). Objeto direto: o, a, os, as (abordou-o); indireto: lhe, lhes (pediu-lhe). Si e consigo: só reflexivos. Pronomes de tratamento: concordância na 3ª pessoa (Vossa Excelência e sua equipe).",
    origem: "banco",
  },
  {
    id: "prf-pt-019",
    materia: "pt",
    topico: "Emprego das classes de palavras",
    subassunto: "Pronome relativo: cujo, o qual e preposição exigida pelo verbo",
    dificuldade: 5,
    raciocinio: "Identificar o antecedente e a função do relativo na oração adjetiva, conferindo preposição e concordância",
    enunciado: "Assinale a frase em que o pronome relativo está empregado de acordo com a norma-padrão.",
    alternativas: [
      "O condutor cujos documentos foram retidos foi ao posto a que se referia a notificação.",
      "A testemunha, o qual presenciou o acidente, foi ouvida pelo agente no mesmo dia.",
      "O motorista cujo o veículo foi apreendido apresentou o recurso dentro do prazo.",
      "O trecho em que o acidente ocorreu nele já tinha sido interditado pela equipe.",
      "Este é o sistema que todos os servidores do posto precisam para emitir a guia de pagamento.",
    ],
    correta: 0,
    explicacao:
      "“Cujos” concorda com o termo possuído (documentos) e não admite artigo depois. Em “a que se referia a notificação”, a preposição exigida por “referir-se a” vem antes do relativo.",
    explicacaoErradas:
      "“A testemunha, o qual” está errado: o relativo concorda com o antecedente (a qual). “Cujo o veículo” está errado: “cujo” não admite artigo depois (cujo veículo). “Em que o acidente ocorreu nele” está errado: o relativo já retoma “o trecho”, e “nele” repete a mesma função. “Que todos os servidores precisam” está errado: “precisar” exige a preposição “de” (de que todos precisam).",
    pegadinha:
      "Na frase correta, “a que se referia a notificação” soa estranho, mas segue a regra: a preposição do verbo da oração adjetiva vem antes do relativo.",
    conhecimento:
      "O pronome relativo retoma o antecedente e exerce função na oração adjetiva. A preposição exigida pelo verbo dessa oração vem antes dele (o sistema de que precisamos; o posto a que se referia). “Cujo” indica posse, concorda com o possuído e não admite artigo depois. “O qual” concorda com o antecedente. “Onde” só se emprega para lugar.",
    origem: "banco",
  },
  {
    id: "prf-pt-020",
    materia: "pt",
    topico: "Emprego do sinal indicativo de crase",
    subassunto: "Crase com relativo e demonstrativo; casos proibidos",
    dificuldade: 5,
    raciocinio: "Verificar em cada “a” se há preposição exigida e artigo ou “a” inicial de pronome",
    enunciado: "Assinale a frase em que o acento indicativo de crase está empregado de acordo com a norma-padrão.",
    alternativas: [
      "O atendimento funciona de segunda à sexta, das 8h às 18h, no posto da rodovia.",
      "O agente entregou à Vossa Senhoria o relatório pedido na semana passada.",
      "A norma à qual o ofício se refere foi aplicada àquele condutor reincidente.",
      "A partir de amanhã, a fiscalização ficará à cargo da nova equipe do posto.",
      "Condutor e agente ficaram frente à frente durante toda a abordagem na rodovia.",
    ],
    correta: 2,
    explicacao:
      "Em “à qual”, há a preposição exigida por “referir-se a” e o “a” do relativo feminino “a qual”. Em “àquele”, a preposição exigida por “aplicar a” se funde com o “a” inicial do demonstrativo.",
    explicacaoErradas:
      "“De segunda à sexta” está errado: sem artigo no primeiro termo, usa-se só a preposição (de segunda a sexta); “das 8h às 18h”, na mesma frase, está certo. “À Vossa Senhoria” está errado: pronomes de tratamento não admitem artigo. “À cargo” está errado: “cargo” é masculino. “Frente à frente” está errado: não há crase entre palavras repetidas (frente a frente, cara a cara).",
    pegadinha:
      "O paralelismo decide: “de… a” (sem artigo) ou “da… à” (com artigo). Por isso, “das 8h às 18h” está certo, e “de segunda à sexta”, não.",
    conhecimento:
      "Crase é a fusão da preposição “a” com o artigo “a(s)”, com o “a” inicial de aquele(s), aquela(s) e aquilo ou com o “a” de “a qual”/“as quais”. Não há crase antes de palavra masculina (salvo “à moda de”), de verbo, de pronome de tratamento (exceto senhora, senhorita e dona), entre palavras repetidas e antes de “uma” (salvo na indicação de hora).",
    origem: "banco",
  },
  {
    id: "prf-pt-021",
    materia: "pt",
    topico: "Emprego do sinal indicativo de crase",
    subassunto: "Locuções femininas; crase antes de numeral, de “uma” e de verbo",
    dificuldade: 5,
    raciocinio: "Conferir cada “a” da frase, não só o primeiro, separando locução feminina de casos proibidos",
    enunciado: "Assinale a frase em que não há erro no emprego do acento indicativo de crase.",
    alternativas: [
      "O pagamento pode ser feito à vista, mas o parcelamento à prazo exige cadastro.",
      "À medida que a fila crescia, os agentes passaram a liberar carros às pressas.",
      "A viatura parou à uma distância segura e, às 3h, a perícia chegou ao local.",
      "O condutor, flagrado à cento e vinte por hora, foi levado à delegacia às 22h.",
      "Os novos formulários serão usados à partir de segunda, conforme a portaria.",
    ],
    correta: 1,
    explicacao:
      "“À medida que” é locução conjuntiva formada com palavra feminina e leva o acento; “às pressas” é locução adverbial feminina. Antes de verbo (“passaram a liberar”), há só a preposição.",
    explicacaoErradas:
      "“À prazo” está errado: “prazo” é masculino (a prazo); “à vista”, na mesma frase, está certo. “À uma distância” está errado: “uma” é artigo indefinido e não se combina com o artigo “a”; antes de “uma”, só há crase na indicação de hora. “À cento e vinte” está errado: não há artigo antes do numeral (a cento e vinte por hora); “à delegacia” e “às 22h” estão certos. “À partir de” está errado: antes de verbo não há crase.",
    pegadinha:
      "As frases erradas misturam crases corretas (à vista, às 3h, à delegacia) com uma indevida. O erro está num único “a”.",
    conhecimento:
      "Locuções formadas com palavra feminina levam acento: à medida que, à proporção que, às pressas, às vezes, à noite, à vista, à custa de. Não há crase antes de palavra masculina (a prazo, a pé), de verbo (a partir de), de numeral sem artigo (a cento e vinte por hora) e de artigo indefinido (a uma distância), salvo na indicação de hora (à uma hora).",
    origem: "banco",
  },
  {
    id: "prf-pt-022",
    materia: "pt",
    topico: "Emprego do sinal indicativo de crase",
    subassunto: "Crase antes de nomes de lugar e das palavras “casa” e “terra”",
    dificuldade: 5,
    raciocinio: "Aplicar o teste da volta (de/da) e verificar se o lugar está determinado por um especificador",
    enunciado: "Assinale a frase em que o acento grave, indicativo de crase, está correto em todas as ocorrências.",
    alternativas: [
      "Depois do plantão, o agente voltou à casa para descansar antes da viagem.",
      "A comitiva chegou à Portugal e, de lá, seguiu para a França de trem.",
      "Os marinheiros desceram à terra depois de dez dias embarcados no navio.",
      "Os fiscais retornaram à Belo Horizonte depois da operação na estrada.",
      "O orador se referiu à Brasília dos anos 1960 e voltou à casa dos pais.",
    ],
    correta: 4,
    explicacao:
      "“Brasília” não admite artigo (vou a Brasília, volto de Brasília), mas passa a admiti-lo quando vem especificada: “à Brasília dos anos 1960”. Também “casa”, quando especificada, admite artigo: “voltou à casa dos pais”.",
    explicacaoErradas:
      "“Voltou à casa para descansar” está errado: “casa”, no sentido de lar e sem especificação, não admite artigo (voltou a casa). “Chegou à Portugal” está errado: volta-se “de Portugal”, sem artigo; “para a França”, na mesma frase, está certo. “Desceram à terra” está errado: “terra”, em oposição a bordo, não admite artigo (desceram a terra). “Retornaram à Belo Horizonte” está errado: volta-se “de Belo Horizonte”.",
    pegadinha:
      "O topônimo que rejeita artigo passa a aceitá-lo quando especificado: “vou a Brasília”, mas “refiro-me à Brasília dos anos 1960”. O mesmo vale para “casa” e “terra”.",
    conhecimento:
      "Teste da volta: se se volta “da”, há crase (vou à Bahia, volto da Bahia); se se volta “de”, não há (vou a Manaus, volto de Manaus). Com especificador, o topônimo passa a ter artigo (à Roma dos césares). “Casa” (lar) e “terra” (chão firme, em oposição a bordo), sem determinação, não levam artigo; determinadas, levam (à casa dos pais, à terra natal).",
    origem: "banco",
  },
  {
    id: "prf-pt-023",
    materia: "pt",
    topico: "Emprego do sinal indicativo de crase",
    subassunto: "Crase facultativa antes de possessivo; possessivo substantivado",
    dificuldade: 5,
    raciocinio: "Distinguir o possessivo que acompanha substantivo (artigo facultativo) do que o substitui (artigo obrigatório)",
    enunciado: "Assinale a frase em que o acento indicativo de crase poderia ser retirado sem desrespeitar a norma-padrão.",
    alternativas: [
      "A proposta da nova equipe é semelhante à sua, mas prevê prazos menores.",
      "A multa foi aplicada à empresa responsável pelo transporte da carga.",
      "O relatório foi entregue à sua chefe imediata no fim do expediente.",
      "O condutor foi abordado às 3h, quando trafegava com os faróis apagados.",
      "O agente se dirigiu àquela viatura estacionada no acostamento da via.",
    ],
    correta: 2,
    explicacao:
      "Antes de pronome possessivo feminino que acompanha substantivo (“sua chefe”), o artigo é facultativo. Por isso, “entregue à sua chefe” e “entregue a sua chefe” estão corretas.",
    explicacaoErradas:
      "Em “semelhante à sua”, o possessivo está no lugar do substantivo (à sua proposta), e nesse caso o artigo é obrigatório. Em “aplicada à empresa”, há a preposição exigida por “aplicar a” e o artigo de “a empresa”. Em “às 3h”, a indicação de hora exata exige o acento. Em “àquela viatura”, a preposição exigida por “dirigir-se a” se funde com o “a” inicial do demonstrativo.",
    pegadinha:
      "As duas frases com “sua” parecem iguais, mas só uma admite as duas formas: o possessivo que acompanha substantivo dispensa o artigo; o que substitui substantivo, não.",
    conhecimento:
      "Crase facultativa: antes de possessivo feminino que acompanha substantivo (à/a sua chefe), antes de nome próprio feminino de pessoa (à/a Maria) e depois de “até” (até à/até a viatura). O possessivo que substitui substantivo exige artigo: “sua proposta é igual à minha”.",
    origem: "banco",
  },
  {
    id: "prf-pt-024",
    materia: "pt",
    topico: "Sintaxe da oração e do período",
    subassunto: "Oração sem sujeito × sujeito indeterminado, posposto e oracional",
    dificuldade: 5,
    raciocinio: "Procurar o sujeito de cada verbo, inclusive posposto ou oracional, antes de classificá-lo como impessoal",
    enunciado: "Assinale a frase que apresenta oração sem sujeito.",
    alternativas: [
      "Precisa-se de motoristas habilitados na categoria D para o novo setor.",
      "Existem dois acidentes registrados no trecho durante o feriado.",
      "Parece que a fila de veículos diminuiu depois do meio-dia.",
      "Deve haver novos radares instalados no trecho até o fim do ano.",
      "Amanheceram cansados os agentes que fizeram o plantão noturno.",
    ],
    correta: 3,
    explicacao:
      "Na locução “deve haver”, o verbo principal “haver” tem sentido de existir e é impessoal; o auxiliar assume essa impessoalidade e fica no singular. A oração não tem sujeito: “novos radares instalados” é objeto direto.",
    explicacaoErradas:
      "“Precisa-se de motoristas” tem sujeito indeterminado: verbo transitivo indireto com “se”. Em “Existem dois acidentes”, o sujeito é “dois acidentes”: “existir” é pessoal, ao contrário de “haver”. Em “Parece que a fila diminuiu”, o sujeito de “parece” é a oração “que a fila de veículos diminuiu” (sujeito oracional). Em “Amanheceram cansados os agentes”, o sujeito é “os agentes”, posposto: “amanhecer” só é impessoal quando indica o fenômeno natural.",
    pegadinha:
      "“Parece que…” e “Amanheceram…” lembram verbos impessoais, mas têm sujeito: no primeiro, uma oração; no segundo, um termo posposto ao verbo.",
    conhecimento:
      "Orações sem sujeito: haver no sentido de existir ou de tempo decorrido; fazer e estar indicando tempo ou clima; ser indicando hora, data ou distância; verbos de fenômenos da natureza em sentido próprio. Em locução, o auxiliar fica no singular (deve haver, vai fazer). Sujeito indeterminado: verbo na 3ª pessoa do plural sem referente, ou verbo não transitivo direto + se. Sujeito oracional: oração substantiva subjetiva (Parece que…, É preciso que…).",
    origem: "banco",
  },
  {
    id: "prf-pt-025",
    materia: "pt",
    topico: "Sintaxe da oração e do período",
    subassunto: "Oração adjetiva restritiva × explicativa",
    dificuldade: 4,
    raciocinio: "Relacionar a presença das vírgulas ao alcance da oração adjetiva sobre o antecedente",
    enunciado:
      "Leia as frases.\n\nI. Os agentes que participaram do curso receberam certificado.\nII. Os agentes, que participaram do curso, receberam certificado.\n\nÉ correto afirmar que",
    alternativas: [
      "em I, a oração adjetiva restringe o grupo de agentes; em II, indica que todos fizeram o curso.",
      "em I, o “que” é conjunção integrante, pois introduz oração que completa o sentido de “agentes”.",
      "em II, a vírgula antes do “que” é obrigatória, mas a vírgula depois de “curso” é facultativa.",
      "em II, retirar a oração entre vírgulas faria a frase referir-se apenas a parte dos agentes.",
      "as duas frases têm o mesmo sentido, e as vírgulas de II marcam apenas uma pausa maior na leitura.",
    ],
    correta: 0,
    explicacao:
      "Em I, a oração adjetiva restritiva delimita quais agentes receberam certificado: os que participaram do curso. Em II, a oração explicativa, entre vírgulas, acrescenta uma informação sobre todos os agentes mencionados: todos participaram do curso.",
    explicacaoErradas:
      "O “que” de I é pronome relativo: retoma “agentes” e é sujeito de “participaram”. A explicativa intercalada exige duas vírgulas (ou travessões, ou parênteses); não se pode manter só a primeira. Retirar a oração de II não restringe o grupo: “Os agentes receberam certificado” continua a referir-se a todos. E as vírgulas de II mudam o sentido, não só a leitura.",
    pegadinha:
      "Aqui a vírgula não é questão de pausa: ela decide se a oração restringe (sem vírgula) ou explica (com vírgula) o antecedente.",
    conhecimento:
      "Adjetiva restritiva: sem vírgula, delimita o antecedente e é essencial ao sentido. Adjetiva explicativa: entre vírgulas, acrescenta informação sobre todo o antecedente e pode ser retirada sem alterar a referência. O relativo “que” equivale a “o qual” e exerce função na oração adjetiva.",
    origem: "banco",
  },
  {
    id: "prf-pt-026",
    materia: "pt",
    topico: "Sintaxe da oração e do período",
    subassunto: "Valores do “se”: partícula apassivadora × índice de indeterminação",
    dificuldade: 5,
    raciocinio: "Identificar a transitividade de cada verbo com “se” e verificar se há sujeito paciente",
    enunciado:
      "Em “Aplicaram-se novas regras de escala ao setor de atendimento”, o pronome “se” tem o mesmo valor que em:",
    alternativas: [
      "Discutiu-se muito, na reunião de ontem, sobre as mudanças no plantão.",
      "O motorista arrependeu-se da manobra feita no acostamento.",
      "Ainda se discutem, na superintendência, as mudanças no plantão.",
      "Os dois agentes cumprimentaram-se antes do início da operação.",
      "O agente feriu-se durante a remoção dos veículos acidentados.",
    ],
    correta: 2,
    explicacao:
      "No modelo, “se” é partícula apassivadora: “aplicar” é transitivo direto e indireto, e “novas regras de escala” é sujeito paciente (= novas regras foram aplicadas ao setor), por isso o verbo vai ao plural. Em “Ainda se discutem as mudanças”, “discutir” é transitivo direto, e “as mudanças no plantão” é sujeito paciente (= as mudanças são discutidas).",
    explicacaoErradas:
      "Em “Discutiu-se sobre as mudanças”, o complemento vem com preposição: o “se” é índice de indeterminação do sujeito, e o verbo fica no singular. Em “arrependeu-se”, o “se” é parte integrante de verbo pronominal. Em “cumprimentaram-se”, é pronome recíproco (um ao outro). Em “feriu-se”, é pronome reflexivo (a si mesmo).",
    pegadinha:
      "As frases com “discutir” têm o mesmo assunto; muda a regência: “discutir as mudanças” (transitivo direto, voz passiva) × “discutir sobre as mudanças” (complemento com preposição, sujeito indeterminado).",
    conhecimento:
      "Partícula apassivadora: verbo transitivo direto (ou direto e indireto) + se; o termo que seria objeto vira sujeito paciente, e o verbo concorda com ele. Índice de indeterminação: verbo transitivo indireto, intransitivo ou de ligação + se, sempre no singular (Precisa-se de agentes). Reflexivo: a si mesmo; recíproco: um ao outro; parte integrante: verbos pronominais (arrepender-se, queixar-se).",
    origem: "banco",
  },
  {
    id: "prf-pt-027",
    materia: "pt",
    topico: "Pontuação",
    subassunto: "Vírgula antes de “e”, intercalação, sujeito e complemento",
    dificuldade: 5,
    raciocinio: "Verificar se alguma vírgula separa termos ligados (sujeito e verbo, verbo e complemento) ou deixa intercalação aberta",
    enunciado: "Assinale a frase pontuada de acordo com a norma-padrão.",
    alternativas: [
      "Os agentes chegaram, e o motorista, que dormia no carro, acordou assustado.",
      "Os agentes que participaram da operação noturna na rodovia, voltaram à base às 22h.",
      "A fiscalização da carga, porém foi suspensa por causa da forte chuva daquela noite.",
      "O motorista estava exausto; porque tinha dirigido a noite toda sem parar.",
      "O agente informou ao condutor, que a rodovia seria interditada às 18h.",
    ],
    correta: 0,
    explicacao:
      "A vírgula antes de “e” é cabível porque as orações têm sujeitos diferentes (“os agentes” e “o motorista”). A oração adjetiva explicativa “que dormia no carro” está isolada por duas vírgulas.",
    explicacaoErradas:
      "Em “Os agentes que participaram da operação noturna na rodovia, voltaram”, a vírgula separa o sujeito do verbo. Em “A fiscalização da carga, porém foi suspensa”, a conjunção intercalada exige vírgula também depois. Em “exausto; porque tinha dirigido”, o ponto e vírgula separa a oração principal da subordinada causal. Em “informou ao condutor, que a rodovia seria interditada”, a vírgula separa o verbo de seu complemento oracional.",
    pegadinha:
      "A vírgula antes de “e” costuma ser vista como erro, mas é adequada quando as orações coordenadas têm sujeitos diferentes. Já o sujeito longo convida à vírgula indevida antes do verbo.",
    conhecimento:
      "Não se separam por vírgula sujeito e verbo, verbo e complemento, nome e complemento nominal. Termos intercalados (conjunção, adjunto, oração explicativa, aposto) ficam entre duas vírgulas. Antes de “e”, a vírgula é cabível com sujeitos diferentes ou com valor adversativo. O ponto e vírgula separa orações coordenadas extensas ou itens de enumeração, não a principal da subordinada.",
    origem: "banco",
  },
  {
    id: "prf-pt-028",
    materia: "pt",
    topico: "Pontuação",
    subassunto: "Vocativo intercalado × aposto e termos deslocados",
    dificuldade: 4,
    raciocinio: "Verificar se o termo isolado exerce função na oração ou apenas chama o interlocutor",
    enunciado: "Assinale a frase em que as vírgulas isolam um vocativo.",
    alternativas: [
      "O superintendente, chefe da regional, encaminhou o relatório da operação.",
      "Encaminhado o relatório, o superintendente convocou a equipe da operação.",
      "O laudo, porém, só chegou depois da vistoria feita no acostamento.",
      "Ontem, na reunião, o diretor aprovou o relatório da operação de feriado.",
      "O relatório da operação, senhor diretor, já está pronto para assinatura.",
    ],
    correta: 4,
    explicacao:
      "“Senhor diretor” chama o interlocutor e não exerce função sintática na oração: é vocativo, intercalado entre vírgulas. O sujeito de “está” é “o relatório da operação”.",
    explicacaoErradas:
      "“Chefe da regional” é aposto: explica “o superintendente”, que é o sujeito. “Encaminhado o relatório” é oração reduzida de particípio, deslocada, com valor de tempo. “Porém” é conjunção adversativa intercalada. “Ontem” e “na reunião” são adjuntos adverbiais deslocados para o início.",
    pegadinha:
      "O vocativo não precisa abrir a frase: pode vir no meio ou no fim. O aposto também fica entre vírgulas; a diferença é que ele se refere a um termo da oração, e o vocativo, ao interlocutor.",
    conhecimento:
      "Vocativo: termo independente que chama o interlocutor; é sempre isolado por vírgula, em qualquer posição. Aposto: explica ou especifica um termo da oração. Também ficam entre vírgulas os adjuntos adverbiais deslocados, as conjunções intercaladas e as orações reduzidas antepostas.",
    origem: "banco",
  },
  {
    id: "prf-pt-029",
    materia: "pt",
    topico: "Pontuação",
    subassunto: "Dois-pontos, ponto e vírgula em enumeração, travessão e vocativo",
    dificuldade: 5,
    raciocinio: "Conferir a função de cada sinal e a coerência dos pares que isolam intercalações",
    enunciado: "Assinale a frase em que os sinais de pontuação estão empregados de acordo com a norma-padrão.",
    alternativas: [
      "O edital exige três documentos; identidade, CPF e comprovante de residência.",
      "Três itens foram vistoriados: os pneus, que estavam gastos; os faróis; e os freios.",
      "O agente perguntou: se o motorista tinha ingerido bebida alcoólica antes de dirigir.",
      "O motorista — que estava sem habilitação, foi autuado e liberado logo depois.",
      "Atenção motoristas: a pista estará interditada das 8h às 18h no trecho da serra.",
    ],
    correta: 1,
    explicacao:
      "Os dois-pontos anunciam a enumeração. O ponto e vírgula separa os itens porque um deles já tem vírgula interna (“os pneus, que estavam gastos”), e o “; e” antes do último item é admitido nesse tipo de enumeração.",
    explicacaoErradas:
      "Em “exige três documentos; identidade…”, o anúncio da enumeração pede dois-pontos, e não ponto e vírgula. Em “perguntou: se o motorista…”, o discurso indireto não se introduz por dois-pontos: o “se” já liga a oração ao verbo. Em “O motorista — que estava sem habilitação, foi autuado”, a intercalação aberta por travessão deve ser fechada por travessão. Em “Atenção motoristas”, falta a vírgula que isola o vocativo (Atenção, motoristas).",
    pegadinha:
      "Na frase correta, vírgula e ponto e vírgula convivem na mesma enumeração. Não é mistura indevida: o ponto e vírgula separa os itens justamente porque um deles tem vírgula interna.",
    conhecimento:
      "Dois-pontos: anunciam enumeração, citação (discurso direto), explicação ou consequência. Ponto e vírgula: separa itens de enumeração (sobretudo com vírgula interna) e orações coordenadas extensas. A intercalação se isola por um par do mesmo sinal (vírgulas, travessões ou parênteses). O discurso indireto dispensa dois-pontos.",
    origem: "banco",
  },
  {
    id: "prf-pt-030",
    materia: "pt",
    topico: "Pontuação",
    subassunto: "Vírgula que marca a omissão do verbo (zeugma)",
    dificuldade: 4,
    raciocinio: "Verificar, em cada frase, se a vírgula está no lugar de um verbo já expresso",
    enunciado:
      "Em “A equipe da manhã fiscalizou trinta caminhões; a da tarde, quarenta”, a vírgula depois de “tarde” marca a omissão de um verbo já expresso. A vírgula tem a mesma função em:",
    alternativas: [
      "Na operação de ontem, a equipe fiscalizou trinta caminhões e dez ônibus.",
      "O motorista, que estava sem cinto, foi autuado pelo agente de plantão.",
      "Os agentes, porém, só chegaram ao local do acidente depois das 22h.",
      "O inspetor preferia o plantão noturno; a colega, o turno da manhã.",
      "Vistoriados os caminhões, a equipe liberou a pista para o tráfego.",
    ],
    correta: 3,
    explicacao:
      "Em “a colega, o turno da manhã”, a vírgula ocupa o lugar do verbo “preferia”, já expresso na primeira oração (a colega preferia o turno da manhã). É a mesma função do modelo, em que a vírgula substitui “fiscalizou”.",
    explicacaoErradas:
      "Em “Na operação de ontem,”, a vírgula isola adjunto adverbial anteposto. Em “O motorista, que estava sem cinto,”, isola oração adjetiva explicativa. Em “Os agentes, porém,”, isola conjunção intercalada. Em “Vistoriados os caminhões,”, separa oração reduzida de particípio anteposta.",
    pegadinha:
      "Todas as frases têm vírgula depois de um termo inicial; só na correta ela está no lugar de um verbo omitido.",
    conhecimento:
      "Zeugma é a omissão de um termo já expresso; quando o termo omitido é o verbo, a vírgula marca a omissão (Uns preferiam o café; outros, o chá). Outras vírgulas comuns isolam adjunto adverbial deslocado, oração explicativa, conjunção intercalada e oração reduzida anteposta.",
    origem: "banco",
  },
  {
    id: "prf-pt-031",
    materia: "pt",
    topico: "Concordância nominal e verbal",
    subassunto: "Verbos impessoais, haver auxiliar, faltar, bater e “mais de um”",
    dificuldade: 5,
    raciocinio: "Separar verbo impessoal de verbo pessoal com sujeito posposto, inclusive “haver” como auxiliar",
    enunciado: "Assinale a frase em que a concordância verbal está de acordo com a norma-padrão.",
    alternativas: [
      "Faltava ainda dez dias para o término do prazo de defesa do condutor.",
      "Bateu dez horas no relógio da base quando a equipe saiu para a ronda.",
      "Fazem três meses que o pedido de remoção aguarda resposta da chefia.",
      "Haviam ocorrido três acidentes no trecho antes da chegada da equipe.",
      "Mais de um agente participaram da operação de ontem na rodovia.",
    ],
    correta: 3,
    explicacao:
      "Em “Haviam ocorrido”, “haver” é auxiliar do tempo composto (= tinham ocorrido), e não o verbo impessoal de existência. Como auxiliar, concorda com o sujeito “três acidentes”.",
    explicacaoErradas:
      "“Faltava ainda dez dias” está errado: “faltar” é pessoal, e o sujeito é “dez dias” (faltavam). “Bateu dez horas” está errado: com o sujeito “dez horas”, o verbo vai ao plural (bateram). “Fazem três meses” está errado: “fazer”, indicando tempo decorrido, é impessoal (faz). “Mais de um agente participaram” está errado: com “mais de um”, o verbo fica no singular (participou).",
    pegadinha:
      "“Haviam” parece erro por associação com “houveram reclamações”, mas aqui “haver” é auxiliar de tempo composto, não verbo de existência, e concorda normalmente com o sujeito.",
    conhecimento:
      "Haver (existir ou tempo decorrido) e fazer (tempo) são impessoais: ficam no singular. Haver auxiliar (haviam ocorrido = tinham ocorrido) concorda com o sujeito. Faltar, bastar, restar, sobrar e bater (horas) são pessoais e concordam com o sujeito, muitas vezes posposto. Mais de um: verbo no singular, salvo ideia de reciprocidade ou repetição da expressão.",
    origem: "banco",
  },
  {
    id: "prf-pt-032",
    materia: "pt",
    topico: "Concordância nominal e verbal",
    subassunto: "É proibido/necessário, anexo, quite e cores compostas",
    dificuldade: 5,
    raciocinio: "Verificar a presença de determinante antes do substantivo e a classe de cada palavra que concorda",
    enunciado: "Quanto à concordância nominal, assinale a frase que segue a norma-padrão.",
    alternativas: [
      "É proibida entrada de pessoas não autorizadas na sala do rádio da base.",
      "Seguem anexo as cópias dos documentos solicitados pela chefia do posto.",
      "É necessária a apresentação do documento, e é proibido entrada de animais.",
      "Os agentes usavam camisas e gravatas azul-marinhos no desfile oficial.",
      "Os condutores ficaram quite com o fisco depois de pagar as multas atrasadas.",
    ],
    correta: 2,
    explicacao:
      "Com o substantivo determinado por artigo, a expressão concorda com ele (“É necessária a apresentação”). Sem determinante, fica no masculino singular (“é proibido entrada”).",
    explicacaoErradas:
      "“É proibida entrada” está errado: sem artigo, a expressão é invariável (é proibido entrada; ou é proibida a entrada). “Seguem anexo as cópias” está errado: “anexo” é adjetivo e concorda (seguem anexas; ou seguem em anexo). “Gravatas azul-marinhos” está errado: “azul-marinho” é invariável. “Ficaram quite” está errado: “quite” é adjetivo e concorda (ficaram quites).",
    pegadinha:
      "A frase correta parece incoerente, com “necessária” no feminino e “proibido” no masculino, mas cada expressão segue a regra: a presença ou a ausência do artigo decide a concordância.",
    conhecimento:
      "É bom, é necessário, é proibido, é preciso: invariáveis com substantivo sem determinante (é proibido entrada); variáveis com determinante (é proibida a entrada). Anexo, incluso, quite, obrigado, mesmo e próprio concordam com o termo a que se referem; “em anexo” é invariável. Azul-marinho e as cores compostas com substantivo (verde-oliva, amarelo-ouro) são invariáveis.",
    origem: "banco",
  },
  {
    id: "prf-pt-033",
    materia: "pt",
    topico: "Concordância nominal e verbal",
    subassunto: "Concordância do verbo com “se”: voz passiva × sujeito indeterminado",
    dificuldade: 5,
    raciocinio: "Definir a transitividade de cada verbo com “se” antes de decidir entre singular e plural",
    enunciado:
      "Assinale a frase em que os verbos acompanhados do pronome “se” estão flexionados de acordo com a norma-padrão.",
    alternativas: [
      "Assistiu-se a cenas de imprudência, e logo se fizeram novas operações.",
      "Precisam-se de agentes administrativos para o setor de protocolo da regional.",
      "Vende-se veículos apreendidos em leilão realizado pela superintendência.",
      "Tratam-se de questões que exigem uma análise mais cuidadosa da chefia.",
      "Consertam-se pneus e faz-se alinhamentos no posto à beira da rodovia.",
    ],
    correta: 0,
    explicacao:
      "“Assistir”, no sentido de ver, é transitivo indireto (assistir a): o “se” é índice de indeterminação do sujeito, e o verbo fica no singular. “Fazer” é transitivo direto: em “se fizeram novas operações”, o “se” é partícula apassivadora, e o verbo concorda com o sujeito “novas operações”.",
    explicacaoErradas:
      "“Precisam-se de agentes” está errado: “precisar de” é transitivo indireto, e o verbo fica no singular (precisa-se de). “Vende-se veículos” está errado: “veículos” é sujeito paciente (vendem-se veículos = veículos são vendidos). “Tratam-se de questões” está errado: “tratar-se de” fica sempre no singular. “Faz-se alinhamentos” está errado: o sujeito paciente “alinhamentos” exige o plural (fazem-se); “consertam-se pneus”, na mesma frase, está certo.",
    pegadinha:
      "Na frase correta, um verbo com “se” fica no singular e o outro vai ao plural. Não é inconsistência: a transitividade de cada verbo decide.",
    conhecimento:
      "Verbo transitivo direto + se: voz passiva sintética, e o verbo concorda com o sujeito paciente (Vendem-se veículos). Verbo transitivo indireto, intransitivo ou de ligação + se: sujeito indeterminado, verbo sempre no singular (Precisa-se de agentes; Assistiu-se a cenas). “Tratar-se de” fica sempre no singular.",
    origem: "banco",
  },
  {
    id: "prf-pt-034",
    materia: "pt",
    topico: "Concordância nominal e verbal",
    subassunto: "Sujeito composto posposto, pessoas gramaticais, “cada um” e coletivo",
    dificuldade: 5,
    raciocinio: "Localizar o núcleo do sujeito e sua posição em relação ao verbo antes de conferir a flexão",
    enunciado: "Assinale a frase em que o verbo concorda com o sujeito de acordo com a norma-padrão.",
    alternativas: [
      "Os Estados Unidos enviou uma delegação ao congresso sobre segurança viária.",
      "Eu e o diretor assinaram o termo de compromisso da equipe de plantão.",
      "Cada um dos agentes receberam um colete novo antes da operação.",
      "O pessoal da base estavam satisfeitos com a nova escala de plantão.",
      "Faltou à reunião o diretor e a secretária, que estavam em viagem.",
    ],
    correta: 4,
    explicacao:
      "Com o verbo antes do sujeito composto, a norma-padrão admite a concordância com o núcleo mais próximo (“Faltou o diretor”) ou o plural (“Faltaram o diretor e a secretária”). Na oração adjetiva, “estavam” concorda com os dois antecedentes.",
    explicacaoErradas:
      "“Os Estados Unidos enviou” está errado: nome próprio no plural com artigo leva o verbo ao plural (enviaram). “Eu e o diretor assinaram” está errado: sujeito composto com a 1ª pessoa leva o verbo à 1ª do plural (assinamos). “Cada um dos agentes receberam” está errado: o núcleo é “cada um”, singular (recebeu). “O pessoal da base estavam” está errado: o coletivo no singular leva o verbo ao singular (estava).",
    pegadinha:
      "O verbo no singular com sujeito composto parece erro, mas é admitido quando o verbo vem antes do sujeito: concorda com o núcleo mais próximo.",
    conhecimento:
      "Sujeito composto anteposto: verbo no plural. Posposto: plural ou concordância com o núcleo mais próximo. Pessoas diferentes: a 1ª prevalece sobre as demais (eu e ele → nós), e a 2ª sobre a 3ª. Nome próprio no plural com artigo: verbo no plural. Cada um, nenhum, qualquer um: singular. Coletivo no singular: verbo no singular.",
    origem: "banco",
  },
  {
    id: "prf-pt-035",
    materia: "pt",
    topico: "Regência nominal e verbal",
    subassunto: "Proceder, assistir, esquecer, implicar, preferir e obedecer",
    dificuldade: 5,
    raciocinio: "Confrontar cada verbo com sua regência na norma-padrão, desconfiando das construções comuns na fala",
    enunciado: "Quanto à regência verbal, assinale a frase que segue a norma-padrão.",
    alternativas: [
      "O agente esqueceu do número da placa e pediu ajuda ao colega de plantão.",
      "O perito procedeu ao exame, e o chefe assistiu à reconstituição do acidente.",
      "A nova escala implica em mudanças no horário de almoço de toda a equipe.",
      "O condutor preferiu pagar a multa do que recorrer da autuação recebida.",
      "Os motoristas obedeceram o sinal do agente na barreira montada na rodovia federal.",
    ],
    correta: 1,
    explicacao:
      "“Proceder”, no sentido de realizar ou dar início, é transitivo indireto e rege a preposição “a” (procedeu ao exame). “Assistir”, no sentido de ver, também rege “a” (assistiu à reconstituição).",
    explicacaoErradas:
      "“Esqueceu do número” está errado: sem pronome, “esquecer” é transitivo direto (esqueceu o número); com pronome, rege “de” (esqueceu-se do número). “Implica em mudanças” está errado: no sentido de acarretar, “implicar” é transitivo direto (implica mudanças). “Preferiu pagar a multa do que recorrer” está errado: prefere-se uma coisa a outra (preferiu pagar a multa a recorrer). “Obedeceram o sinal” está errado: “obedecer” rege “a” (obedeceram ao sinal).",
    pegadinha:
      "As construções erradas são comuns na fala e soam naturais (“implica em”, “preferir do que”, “esqueceu do”). A norma-padrão exige a regência própria de cada verbo.",
    conhecimento:
      "Assistir: rege “a” no sentido de ver ou de caber (direito); é transitivo direto no sentido de ajudar. Proceder: “a” (realizar), “de” (originar-se). Implicar: transitivo direto (acarretar). Preferir: algo a algo, sem “mais” nem “do que”. Obedecer e desobedecer: “a”. Esquecer e lembrar: transitivos diretos sem pronome; com “de” quando pronominais (esquecer-se de, lembrar-se de).",
    origem: "banco",
  },
  {
    id: "prf-pt-036",
    materia: "pt",
    topico: "Regência nominal e verbal",
    subassunto: "Preposição exigida pelo verbo antes do pronome relativo, inclusive “cujo”",
    dificuldade: 5,
    raciocinio: "Desfazer cada oração adjetiva (confio no chefe, obedeci às ordens) para descobrir a preposição exigida",
    enunciado:
      "Assinale a frase em que a preposição exigida pelo verbo aparece corretamente antes do pronome relativo.",
    alternativas: [
      "É o chefe em quem mais confio e a cujas ordens sempre obedeci no plantão.",
      "Este é o cargo que todos os candidatos aspiram desde a publicação do edital.",
      "São regras de que todos devem obedecer sem nenhuma exceção no serviço.",
      "O documento que lhe falei ontem já foi protocolado no setor de pessoal.",
      "A cidade que o agente reside fica a cem quilômetros do posto da rodovia.",
    ],
    correta: 0,
    explicacao:
      "“Confiar” rege “em”: “em quem mais confio”. “Obedecer” rege “a”, e a preposição vem antes do relativo “cujas”: “a cujas ordens sempre obedeci” (obedeci às ordens dele).",
    explicacaoErradas:
      "“O cargo que todos aspiram” está errado: “aspirar”, no sentido de desejar, rege “a” (a que aspiram). “Regras de que todos devem obedecer” está errado: a preposição exigida é “a” (a que devem obedecer). “O documento que lhe falei” está errado: fala-se de algo (de que lhe falei). “A cidade que o agente reside” está errado: “residir” rege “em” (em que reside).",
    pegadinha:
      "A preposição também vem antes de “cujo”: “a cujas ordens obedeci” parece estranho, mas segue a mesma regra dos demais relativos.",
    conhecimento:
      "A preposição exigida pelo verbo da oração adjetiva antecede o relativo: o cargo a que aspiro; a cidade em que resido; o colega em quem confio; as regras a que obedeço; o documento de que falei. Com “cujo”, a preposição vem antes dele: o chefe a cujas ordens obedeço.",
    origem: "banco",
  },
  {
    id: "prf-pt-037",
    materia: "pt",
    topico: "Regência nominal e verbal",
    subassunto: "Regência de nomes: alheio, apto, passível, residente, contrário e alusão",
    dificuldade: 5,
    raciocinio: "Conferir a preposição que cada nome exige, desconfiando de construções de documentos antigos",
    enunciado: "Assinale a frase em que a regência nominal está de acordo com a norma-padrão.",
    alternativas: [
      "O servidor que faltou ao plantão está passível a punição disciplinar.",
      "Os moradores residentes à Rua das Flores foram notificados pela prefeitura.",
      "A medida foi contrária com o parecer da assessoria jurídica do órgão.",
      "O condutor fez alusão sobre a placa que não estava visível no trecho.",
      "O agente, alheio às críticas, mostrou-se apto a assumir a chefia do posto.",
    ],
    correta: 4,
    explicacao:
      "“Alheio” rege “a” (alheio às críticas), e “apto” rege “a” ou “para” (apto a assumir).",
    explicacaoErradas:
      "“Passível a punição” está errado: “passível” rege “de” (passível de punição). “Residentes à Rua das Flores” está errado: “residente” rege “em” (residentes na Rua das Flores). “Contrária com o parecer” está errado: “contrário” rege “a” (contrária ao parecer). “Alusão sobre a placa” está errado: “alusão” rege “a” (alusão à placa).",
    pegadinha:
      "“Residente à rua” imita a linguagem de documentos antigos, mas a norma-padrão pede “residente na rua”, como “situado na” e “sito na”.",
    conhecimento:
      "Regência nominal: alheio a; apto a/para; passível de; residente, situado e sito em; contrário a; alusão a; preferível a; compatível com; favorável a; imune a/de; propenso a; versado em.",
    origem: "banco",
  },
  {
    id: "prf-pt-038",
    materia: "pt",
    topico: "Significação das palavras",
    subassunto: "Parônimos: ratificar, infringir, mandado, surtir e iminente",
    dificuldade: 4,
    raciocinio: "Confrontar o sentido exigido pelo contexto com o sentido próprio de cada parônimo",
    enunciado: "Assinale a frase em que a palavra está empregada com o sentido adequado ao contexto.",
    alternativas: [
      "O condutor foi multado por infligir o limite de velocidade da rodovia.",
      "O juiz expediu o mandato de busca e apreensão durante a madrugada.",
      "A medida não sortiu o efeito esperado na redução de acidentes no trecho.",
      "A chefia ratificou a autuação, confirmando a multa imposta ao condutor.",
      "A chegada da tempestade era eminente, e o trecho foi interditado às pressas.",
    ],
    correta: 3,
    explicacao:
      "“Ratificar” significa confirmar, validar: a chefia confirmou a autuação. Não se confunde com “retificar”, que significa corrigir.",
    explicacaoErradas:
      "“Infligir o limite” está errado: “infligir” é aplicar pena; desrespeitar uma norma é “infringir”. “Mandato de busca” está errado: “mandato” é procuração ou período de um cargo eletivo; a ordem judicial é “mandado”. “Não sortiu o efeito” está errado: “sortir” é abastecer; produzir efeito é “surtir”. “Era eminente” está errado: “eminente” é ilustre; o que está prestes a acontecer é “iminente”.",
    pegadinha:
      "“Ratificou” costuma ser confundido com “retificou”; aqui o contexto (“confirmando a multa”) pede exatamente “ratificar”.",
    conhecimento:
      "Parônimos: ratificar (confirmar) × retificar (corrigir); infligir (aplicar pena) × infringir (violar); mandado (ordem judicial) × mandato (procuração, período eletivo); surtir (produzir efeito) × sortir (abastecer); iminente (prestes a ocorrer) × eminente (ilustre); tráfego (trânsito) × tráfico (comércio ilegal).",
    origem: "banco",
  },
  {
    id: "prf-pt-039",
    materia: "pt",
    topico: "Significação das palavras",
    subassunto: "Homônimos: cessão, sessão, concerto, senso, cela e incipiente",
    dificuldade: 4,
    raciocinio: "Verificar o sentido de cada homônimo no contexto, sem se guiar pelo som",
    enunciado: "Assinale a frase em que os homônimos estão empregados de acordo com o sentido do contexto.",
    alternativas: [
      "O conserto da banda da corporação foi transferido para o auditório.",
      "O diretor pediu bom censo aos servidores durante a mudança de sede.",
      "A cessão da sala foi aprovada ontem na sessão do conselho diretor.",
      "O preso foi conduzido à sela da delegacia logo após o flagrante.",
      "A obra da nova base ainda é insipiente e precisa de mais recursos.",
    ],
    correta: 2,
    explicacao:
      "“Cessão” é o ato de ceder (a cessão da sala), e “sessão” é a reunião de um órgão colegiado (a sessão do conselho). As duas estão empregadas no sentido próprio.",
    explicacaoErradas:
      "“Conserto da banda” está errado: apresentação musical é “concerto”; “conserto” é reparo. “Bom censo” está errado: juízo é “senso”; “censo” é recenseamento. “Sela da delegacia” está errado: o compartimento do preso é “cela”; “sela” é o assento do cavaleiro. “Ainda é insipiente” está errado: o que está no início é “incipiente”; “insipiente” é ignorante.",
    pegadinha:
      "A frase correta reúne duas palavras do grupo cessão/sessão/seção, e ambas estão certas; nas erradas, a troca está em um único homônimo.",
    conhecimento:
      "Homônimos homófonos: cessão (ato de ceder), sessão (reunião), seção ou secção (divisão, setor); concerto (apresentação) × conserto (reparo); senso (juízo) × censo (recenseamento); cela (cômodo) × sela (arreio); incipiente (iniciante) × insipiente (ignorante); acender (pôr fogo) × ascender (subir).",
    origem: "banco",
  },
  {
    id: "prf-pt-040",
    materia: "pt",
    topico: "Significação das palavras",
    subassunto: "Denotação × conotação",
    dificuldade: 4,
    raciocinio: "Verificar se “coração” designa o órgão ou outro referente, sem se deixar levar pelo tom emotivo da frase",
    enunciado: "Assinale a frase em que a palavra “coração” está empregada em sentido conotativo.",
    alternativas: [
      "Ao ouvir a freada, o agente sentiu o coração disparar dentro do peito.",
      "O posto fica no coração do cerrado, longe de qualquer cidade grande.",
      "O motorista que sofreu a parada do coração foi reanimado no acostamento.",
      "O médico disse que o coração do condutor bateu fraco durante o resgate.",
      "O exame mostrou que o coração do agente estava em perfeito estado.",
    ],
    correta: 1,
    explicacao:
      "Em “no coração do cerrado”, a palavra não designa o órgão: significa a parte central, o interior da região. É emprego conotativo (figurado).",
    explicacaoErradas:
      "Nas demais frases, “coração” designa o próprio órgão: o que dispara no peito, o que sofre a parada, o que bate fraco durante o resgate e o que o exame avaliou. Mesmo quando o contexto é emotivo (“sentiu o coração disparar”), a referência é ao órgão, e o sentido é denotativo.",
    pegadinha:
      "O tom emotivo da frase da freada sugere sentido figurado, mas o que dispara é o próprio órgão: o sentido é denotativo.",
    conhecimento:
      "Denotação: sentido literal, de dicionário. Conotação: sentido figurado, que depende do contexto (o coração da cidade = o centro). Metáfora, metonímia e outras figuras produzem sentidos conotativos.",
    origem: "banco",
  },
  {
    id: "prf-pt-041",
    materia: "pt",
    topico: "Redação oficial (Manual de Redação da Presidência da República)",
    subassunto: "Padrão ofício: local e data, identificação do expediente e fim do memorando",
    dificuldade: 5,
    raciocinio: "Confrontar cada detalhe de formatação com as regras do padrão ofício na 3ª edição do MRPR",
    enunciado:
      "De acordo com o Manual de Redação da Presidência da República (3ª edição), no documento em padrão ofício,",
    alternativas: [
      "o memorando continua a ser o expediente próprio entre setores do mesmo órgão.",
      "o local e a data se alinham à esquerda, logo abaixo da identificação do expediente.",
      "o dia de um só algarismo leva zero à esquerda, como em “05 de março de 2026”.",
      "o primeiro dia do mês é escrito em número cardinal, sem o símbolo de ordinal.",
      "o nome do mês se escreve com inicial minúscula, e a data termina com ponto final.",
    ],
    correta: 4,
    explicacao:
      "Pelo MRPR (3ª ed.), a data segue o modelo “Brasília, 2 de outubro de 2026.”: o mês é escrito por extenso com inicial minúscula, e a data termina com ponto final.",
    explicacaoErradas:
      "O memorando deixou de ser tipo próprio: desde a 3ª edição, a comunicação entre unidades do mesmo órgão também segue o padrão ofício. O local e a data alinham-se à direita; a identificação do expediente é que fica à esquerda. O dia não leva zero à esquerda (5 de março). O primeiro dia do mês é escrito em ordinal (1º de março).",
    pegadinha:
      "Duas regras do dia se confundem: sem zero à esquerda (5, e não 05) e ordinal só no primeiro dia do mês (1º); nos demais, cardinal.",
    conhecimento:
      "Padrão ofício (MRPR, 3ª ed.): identificação do expediente (tipo em maiúsculas, número, ano com quatro dígitos e siglas dos setores), alinhada à esquerda; local e data alinhados à direita (Brasília, 1º de outubro de 2026.); endereçamento; assunto; texto; fecho; identificação do signatário. Aviso e memorando deixaram de ser tipos próprios.",
    origem: "banco",
  },
  {
    id: "prf-pt-042",
    materia: "pt",
    topico: "Redação oficial (Manual de Redação da Presidência da República)",
    subassunto: "Vocativo: chefes de Poder × demais autoridades",
    dificuldade: 5,
    raciocinio: "Separar o tratamento (Vossa Excelência) do vocativo, que só leva “Excelentíssimo” para os chefes de Poder",
    enunciado:
      "Segundo o Manual de Redação da Presidência da República (3ª edição), o vocativo está adequado ao destinatário em comunicação dirigida",
    alternativas: [
      "ao senador que preside a comissão: “Excelentíssimo Senhor Senador,”",
      "ao deputado federal autor do requerimento: “Senhor Deputado,”",
      "ao diretor de uma empresa privada: “Ilustríssimo Senhor Diretor,”",
      "ao presidente do Supremo Tribunal Federal: “Senhor Presidente,”",
      "a um juiz federal, em ofício de rotina: “Meritíssimo Senhor Juiz,”",
    ],
    correta: 1,
    explicacao:
      "Pelo MRPR, o vocativo “Excelentíssimo Senhor” é reservado aos chefes de Poder (Presidente da República, Presidente do Congresso Nacional e Presidente do STF). As demais autoridades recebem “Senhor” seguido do cargo: “Senhor Deputado,”.",
    explicacaoErradas:
      "“Excelentíssimo Senhor Senador” está errado: senador não é chefe de Poder, e o vocativo é “Senhor Senador,”. “Ilustríssimo” foi abolido: basta “Senhor Diretor,”. O presidente do STF é chefe de Poder e recebe “Excelentíssimo Senhor Presidente do Supremo Tribunal Federal,”. Para juiz, o vocativo é “Senhor Juiz,”, sem “Meritíssimo”.",
    pegadinha:
      "O senador é tratado por Vossa Excelência, mas isso não leva o “Excelentíssimo” ao vocativo: ele é exclusivo dos três chefes de Poder.",
    conhecimento:
      "Vocativo (MRPR, 3ª ed.): “Excelentíssimo Senhor” + cargo só para os chefes de Poder; demais autoridades, “Senhor” ou “Senhora” + cargo (Senhor Senador, Senhor Juiz, Senhor Ministro). “Digníssimo” e “Ilustríssimo” foram abolidos. No Executivo federal, o Decreto 9.758/2019 adota “senhor” como único tratamento com agentes públicos federais; ele não se aplica quando autoridade de outro Poder exige, por norma própria, tratamento especial.",
    origem: "banco",
  },
  {
    id: "prf-pt-043",
    materia: "pt",
    topico: "Redação oficial (Manual de Redação da Presidência da República)",
    subassunto: "Pronome de tratamento: concordância, possessivo e Vossa × Sua",
    dificuldade: 5,
    raciocinio: "Conferir pessoa do verbo, possessivo, gênero do adjetivo e escolha entre “Vossa” e “Sua”",
    enunciado:
      "Em ofício dirigido a uma senadora, o pronome de tratamento está empregado de acordo com o Manual de Redação da Presidência da República em:",
    alternativas: [
      "Informo a Vossa Excelência que vosso pedido já foi atendido pela superintendência.",
      "Vossa Excelência está convidado para a audiência sobre segurança nas rodovias.",
      "Comunico a Vossa Excelência que o seu requerimento já foi respondido pela PRF.",
      "Encaminho a Sua Excelência, conforme solicitado, a cópia do relatório da operação.",
      "Solicito a Vossa Excelência que confirmeis a presença na audiência do dia 10.",
    ],
    correta: 2,
    explicacao:
      "Com pronome de tratamento, o possessivo fica na 3ª pessoa (“o seu requerimento”), e “Vossa” é usado para falar com a autoridade. Antes do pronome de tratamento não há artigo, por isso “a Vossa Excelência” não leva crase.",
    explicacaoErradas:
      "“Vosso pedido” está errado: o possessivo vai à 3ª pessoa (seu pedido). “Está convidado” está errado: o adjetivo concorda com o sexo da pessoa, e a destinatária é uma senadora (convidada). “Encaminho a Sua Excelência” está errado: para falar com a autoridade usa-se “Vossa”; “Sua” é para falar dela. “Confirmeis” está errado: o verbo vai à 3ª pessoa (confirme).",
    pegadinha:
      "O pronome é de 2ª pessoa só na forma (“Vossa”): verbo e possessivo ficam na 3ª pessoa, e o adjetivo segue o sexo da destinatária.",
    conhecimento:
      "Pronomes de tratamento: verbo e possessivo na 3ª pessoa (Vossa Excelência decidirá; seu pedido); adjetivo concorda com o sexo da pessoa (Vossa Excelência está convidada, para uma senadora). “Vossa” para falar com a autoridade; “Sua” para falar dela. Não há crase antes deles. Para senadores, o MRPR prevê Vossa Excelência; o Decreto 9.758/2019, que adota “senhor” no Executivo federal, não se aplica quando a autoridade de outro Poder exige tratamento especial previsto em norma própria.",
    origem: "banco",
  },
  {
    id: "prf-pt-044",
    materia: "pt",
    topico: "Redação oficial (Manual de Redação da Presidência da República)",
    subassunto: "Fechos, forma direta na introdução e identificação do signatário",
    dificuldade: 5,
    raciocinio: "Conferir cada afirmação com as regras de fecho, introdução e assinatura do padrão ofício",
    enunciado:
      "Segundo o Manual de Redação da Presidência da República (3ª edição), assinale a afirmativa correta sobre a introdução, o fecho e a assinatura das comunicações oficiais.",
    alternativas: [
      "“Respeitosamente” é o fecho para autoridade superior, inclusive o Presidente da República.",
      "“Atenciosamente” é reservado a particulares; entre autoridades, usa-se “Respeitosamente”.",
      "A introdução deve começar por “Tenho a honra de informar”, para marcar a formalidade do texto.",
      "Todas as comunicações, mesmo as do Presidente da República, trazem nome e cargo do signatário.",
      "“Cordialmente” é o fecho indicado nas comunicações entre órgãos de mesma hierarquia.",
    ],
    correta: 0,
    explicacao:
      "O MRPR adota só dois fechos: “Respeitosamente,” para autoridades de hierarquia superior à do remetente, inclusive o Presidente da República, e “Atenciosamente,” para os demais casos.",
    explicacaoErradas:
      "“Atenciosamente” não é exclusivo de particulares: vale também para autoridades de mesma hierarquia ou de hierarquia inferior. O MRPR manda evitar “Tenho a honra de”, “Tenho o prazer de” e “Cumpre-me informar”, preferindo a forma direta (Informo, Solicito, Comunico). As comunicações assinadas pelo Presidente da República são exceção à identificação do signatário. “Cordialmente” não está entre os fechos previstos: entre órgãos de mesma hierarquia, usa-se “Atenciosamente,”.",
    pegadinha:
      "A hierarquia é a do destinatário em relação ao remetente: “Respeitosamente” sobe; “Atenciosamente” vale para a mesma hierarquia, para a inferior e para os demais casos.",
    conhecimento:
      "Fechos (MRPR, 3ª ed.): “Respeitosamente,” (hierarquia superior, inclusive o Presidente da República) e “Atenciosamente,” (mesma hierarquia, inferior e demais casos); comunicações a autoridades estrangeiras seguem rito próprio. Introdução na forma direta (Informo, Solicito, Comunico), sem “Tenho a honra de”. Identificação do signatário (nome e cargo) em todas as comunicações, salvo as assinadas pelo Presidente da República.",
    origem: "banco",
  },
  {
    id: "prf-pt-045",
    materia: "pt",
    topico: "Redação oficial (Manual de Redação da Presidência da República)",
    subassunto: "Impessoalidade: impressões pessoais × forma direta em 1ª pessoa",
    dificuldade: 4,
    raciocinio: "Separar a pessoa gramatical da presença de impressões pessoais na comunicação",
    enunciado:
      "Um chefe de núcleo precisa registrar, em ofício, que a equipe concluiu a operação de fiscalização em duas horas, antes do prazo previsto. Considerando a impessoalidade exigida pelo Manual de Redação da Presidência da República, a redação adequada é:",
    alternativas: [
      "Fiquei satisfeito: a equipe, a melhor da regional, concluiu a operação em duas horas.",
      "A equipe, sem dúvida a melhor da regional, concluiu a operação em duas horas.",
      "Na minha opinião, a equipe foi brilhante e concluiu a operação antes do prazo.",
      "Informo que a equipe concluiu a operação em duas horas, antes do prazo previsto.",
      "Esta chefia, muito orgulhosa, informa que a equipe concluiu a operação em duas horas.",
    ],
    correta: 3,
    explicacao:
      "A redação comunica o fato de forma objetiva, sem impressões pessoais de quem assina. O verbo na 1ª pessoa (“Informo”) não fere a impessoalidade: é a forma direta que o próprio MRPR recomenda para a introdução.",
    explicacaoErradas:
      "“Fiquei satisfeito” e “a melhor da regional” expressam impressões pessoais. “Sem dúvida a melhor da regional” faz um juízo de valor que não é o fato a comunicar. “Na minha opinião” e “brilhante” trazem opinião e elogio pessoal. “Esta chefia, muito orgulhosa” está na 3ª pessoa, mas mantém a impressão pessoal de quem comunica.",
    pegadinha:
      "Impessoalidade não é questão de pessoa gramatical: a 3ª pessoa com “muito orgulhosa” continua pessoal, e a 1ª pessoa em “Informo” é a forma direta recomendada.",
    conhecimento:
      "Impessoalidade (MRPR): quem comunica é sempre o serviço público, sem impressões individuais; o destinatário é concebido de forma homogênea e impessoal; o assunto é de interesse público, sem tom particular. O MRPR recomenda a forma direta na introdução (Informo, Solicito, Comunico).",
    origem: "banco",
  },
  {
    id: "prf-pt-046",
    materia: "pt",
    topico: "Significação das palavras",
    subassunto: "Polissemia: sentido contextual do verbo “ganhar”",
    dificuldade: 4,
    raciocinio: "Substituir “ganhar” por um sinônimo no modelo (receber) e testar a troca em cada frase",
    enunciado:
      "Em “Com a nova portaria, a fiscalização de cargas perigosas ganhou reforço nas rodovias federais”, o verbo “ganhar” está empregado no mesmo sentido que em:",
    alternativas: [
      "A equipe da regional ganhou o campeonato de tiro entre as superintendências.",
      "O posto da serra ganhou duas viaturas novas, enviadas pela sede.",
      "Ao ouvir a sirene, o condutor ganhou o acostamento e parou o caminhão.",
      "Ao pedir novos prazos, a transportadora só queria ganhar tempo.",
      "Antes da posse, ele ganhava a vida como motorista de caminhão.",
    ],
    correta: 1,
    explicacao:
      "No modelo, “ganhar” significa receber, passar a contar com algo: a fiscalização recebeu reforço. É o mesmo sentido de “o posto ganhou duas viaturas”, isto é, recebeu as viaturas.",
    explicacaoErradas:
      "Em “ganhou o campeonato”, “ganhar” significa vencer. Em “ganhou o acostamento”, significa alcançar, chegar a um lugar. “Ganhar tempo” é expressão que significa protelar, conseguir adiamento. “Ganhar a vida” é expressão que significa sustentar-se com o trabalho.",
    pegadinha:
      "“Ganhar tempo” parece “obter algo”, como no modelo, mas é expressão fixa com o sentido de protelar; o que se recebe de fato, como o reforço do modelo, são as viaturas.",
    conhecimento:
      "Polissemia: a mesma palavra assume sentidos diferentes conforme o contexto e os complementos. “Ganhar” pode significar receber (ganhou reforço), vencer (ganhou o campeonato) e alcançar (ganhou a rua); em expressões fixas, protelar (ganhar tempo) e sustentar-se (ganhar a vida).",
    fonte: "Adaptada de FGV — 2026 — TJ-SC — Técnico Judiciário Auxiliar",
    origem: "banco",
  },
  {
    id: "prf-pt-047",
    materia: "pt",
    topico: "Concordância nominal e verbal",
    subassunto: "Substituição de “haver” por verbo pessoal: concordância e sentido",
    dificuldade: 5,
    raciocinio: "Verificar se o novo verbo mantém o sentido de “haver” e se, sendo pessoal, concorda com o sujeito",
    enunciado:
      "Em cada opção, a segunda frase reescreve a primeira trocando o verbo “haver” por outro verbo. Assinale a opção em que a reescrita mantém o sentido original e respeita a norma-padrão.",
    alternativas: [
      "Havia meses que a placa estava caída. / Existiam meses que a placa estava caída.",
      "Houve duas colisões no trecho. / Aconteceu duas colisões no trecho.",
      "Há radares escondidos na serra. / Tem radares escondidos na serra.",
      "Haverá novas operações no feriado. / Ocorrerão novas operações no feriado.",
      "Pode haver erros no relatório. / Pode existir erros no relatório.",
    ],
    correta: 3,
    explicacao:
      "“Haver” no sentido de ocorrer é impessoal e fica no singular; “ocorrer”, que o substitui, é pessoal e concorda com o sujeito posposto: “Ocorrerão novas operações”.",
    explicacaoErradas:
      "“Existiam meses” não mantém o sentido: ali “haver” indica tempo decorrido, e o verbo adequado é “fazer” (Fazia meses). “Aconteceu duas colisões” está errado: “acontecer” é pessoal e concorda com o sujeito posposto (Aconteceram). “Tem radares” usa “ter” como existencial, construção da fala que a norma-padrão não aceita. “Pode existir erros” está errado: com “existir”, o auxiliar concorda com o sujeito (Podem existir erros); só com “haver” a locução fica no singular.",
    pegadinha:
      "Na locução, o auxiliar segue o verbo principal: “pode haver erros” (impessoal), mas “podem existir erros” (pessoal).",
    conhecimento:
      "Haver (existir, ocorrer, tempo decorrido) é impessoal: fica no singular e transmite a impessoalidade ao auxiliar (pode haver, deve haver). Existir, ocorrer e acontecer são pessoais e concordam com o sujeito, inclusive posposto, e o auxiliar acompanha (podem existir). Para tempo decorrido, troca-se “haver” por “fazer” (havia meses → fazia meses). “Ter” existencial (tem radares) é próprio da fala.",
    fonte: "Adaptada de FGV — 2026 — TJ-MS — Analista Judiciário",
    origem: "banco",
  },
  {
    id: "prf-pt-048",
    materia: "pt",
    topico: "Sintaxe da oração e do período",
    subassunto: "Oração substantiva predicativa × subjetiva, objetiva e completiva nominal",
    dificuldade: 5,
    raciocinio: "Localizar o sujeito de cada oração principal e verificar se a oração entre aspas o completa por meio do verbo de ligação",
    enunciado:
      "Em “O objetivo da operação é reduzir as mortes nas rodovias federais durante o feriado”, a oração “reduzir as mortes nas rodovias federais durante o feriado” exerce a mesma função sintática que a oração entre aspas em:",
    alternativas: [
      "A verdade era “que o radar estava desligado naquela noite”.",
      "É necessário “que o condutor apresente o documento original”.",
      "O agente pediu “que o motorista desligasse o motor do carro”.",
      "A equipe saiu cedo “para chegar ao trecho antes da chuva”.",
      "O agente tinha certeza “de que o motorista estava embriagado”.",
    ],
    correta: 0,
    explicacao:
      "No modelo, a oração reduzida de infinitivo é predicativo do sujeito “o objetivo da operação”, ligada a ele pelo verbo “ser”: é oração subordinada substantiva predicativa. Em “A verdade era que o radar estava desligado”, a oração desenvolvida tem a mesma função, e o sujeito é “a verdade”.",
    explicacaoErradas:
      "Em “É necessário que o condutor apresente…”, a oração é o sujeito de “é necessário” (substantiva subjetiva). Em “pediu que o motorista desligasse…”, é objeto direto de “pediu” (objetiva direta). Em “para chegar ao trecho…”, indica finalidade (adverbial final reduzida de infinitivo). Em “tinha certeza de que…”, completa o nome “certeza” (completiva nominal).",
    pegadinha:
      "As duas frases com “ser” parecem iguais, mas em “É necessário que…” a oração é o próprio sujeito; na predicativa, o sujeito é outro termo (“a verdade”, “o objetivo”), e a oração vem depois do verbo de ligação.",
    conhecimento:
      "Substantivas: subjetiva (É necessário que…), objetiva direta (pediu que…), objetiva indireta (precisava de que…), completiva nominal (certeza de que…), predicativa (O objetivo é reduzir…; A verdade é que…) e apositiva (Só quero isto: que…). A forma desenvolvida (que + verbo) ou reduzida (infinitivo) não muda a função.",
    fonte: "Adaptada de FGV — 2026 — PC-PI — Oficial Investigador de Polícia",
    origem: "banco",
  },
  {
    id: "prf-pt-049",
    materia: "pt",
    topico: "Pontuação",
    subassunto: "Vírgula que marca objeto direto antecipado e retomado por pronome",
    dificuldade: 4,
    raciocinio: "Identificar o sujeito de “conferiu” e a função do pronome “os” antes de decidir o papel da vírgula",
    enunciado: "Em “Os documentos do veículo, o agente os conferiu um a um”, a vírgula foi empregada para",
    alternativas: [
      "separar o sujeito “os documentos do veículo”, que é longo, do restante da oração.",
      "isolar um aposto que explica o termo “o agente”, colocado logo depois dela.",
      "marcar o objeto direto antecipado, que o pronome “os” retoma depois.",
      "indicar a omissão do verbo “conferir”, já expresso em outra parte da frase.",
      "isolar um adjunto adverbial deslocado para o início da oração.",
    ],
    correta: 2,
    explicacao:
      "“Os documentos do veículo” é o objeto direto de “conferiu”, deslocado para o início da frase e retomado pelo pronome “os” (objeto direto pleonástico). A vírgula marca esse deslocamento; o sujeito é “o agente”.",
    explicacaoErradas:
      "“Os documentos do veículo” não é o sujeito: quem conferiu foi “o agente”, e a vírgula não separa sujeito de verbo. Não há aposto: “o agente” é o sujeito, e nada o explica. Nenhum verbo foi omitido: “conferiu” está expresso. O termo deslocado não é adjunto adverbial: é o complemento direto do verbo, retomado por “os”.",
    pegadinha:
      "O termo antes da vírgula parece sujeito por abrir a frase, mas o verbo “conferiu” já tem sujeito (“o agente”), e o pronome “os” mostra que o termo deslocado é o objeto direto.",
    conhecimento:
      "Objeto pleonástico: o complemento é antecipado e retomado por pronome oblíquo (Os documentos, o agente os conferiu; Ao motorista, entregou-lhe a notificação). A vírgula marca o deslocamento. A norma-padrão admite a construção como recurso de ênfase.",
    fonte: "Adaptada de FGV — 2026 — TJ-RJ — Técnico de Atividade Judiciária",
    origem: "banco",
  },
  {
    id: "prf-pt-050",
    materia: "pt",
    topico: "Compreensão e interpretação de textos",
    subassunto: "Coesão referencial: relativos e pronomes oblíquos",
    dificuldade: 5,
    raciocinio: "Testar cada referente pela concordância e, quando ela não decide, pelo sentido",
    enunciado:
      "Leia o trecho.\n\n“O motorista parou no posto da PRF pouco antes da meia-noite. Trazia a carteira de habilitação do irmão, que estava vencida havia dois anos, e o documento da carreta, que a transportadora emitira na véspera. O agente examinou-os com atenção e, em seguida, conduziu-o à sala de atendimento.”\n\nNo trecho,",
    alternativas: [
      "“que estava vencida havia dois anos” retoma “o irmão”, dono da habilitação.",
      "“examinou-os” retoma “o motorista” e “o irmão”, mencionados antes.",
      "“conduziu-o” retoma “o documento da carreta”, citado no período anterior.",
      "o sujeito oculto de “Trazia” é “o agente”, nomeado no período seguinte.",
      "“que a transportadora emitira na véspera” retoma “o documento da carreta”.",
    ],
    correta: 4,
    explicacao:
      "O relativo “que” retoma “o documento da carreta”: é o documento que a transportadora emitiu na véspera, e não a carreta. A concordância não ajuda aqui, pois “emitira” concorda com “a transportadora”, seu sujeito; quem decide é o sentido.",
    explicacaoErradas:
      "“Vencida”, no feminino, mostra que o relativo retoma “a carteira de habilitação”, e não “o irmão”. “Examinou-os” retoma os dois documentos (a carteira e o documento da carreta), no masculino plural por serem de gêneros diferentes. “Conduziu-o” retoma “o motorista”, levado à sala de atendimento. O sujeito oculto de “Trazia” é “o motorista”, sujeito do período anterior.",
    pegadinha:
      "No segundo relativo, nada na forma indica o referente: “a carreta” está mais perto, mas só o documento pode ter sido emitido pela transportadora.",
    conhecimento:
      "Coesão referencial: pronomes relativos, pessoais e oblíquos retomam termos já citados. Para achar o referente, use a concordância (gênero e número) e, quando ela não decide, o sentido. Termos de gêneros diferentes são retomados no masculino plural (a carteira e o documento → os).",
    fonte: "Adaptada de FGV — 2026 — TJ-RS — Conciliador Cível",
    origem: "banco",
  },
  {
    id: "prf-pt-051",
    materia: "pt",
    topico: "Emprego das classes de palavras",
    subassunto: "Conectivos: “e” adversativo, “pois” conclusivo e locução aditiva com “mas”",
    dificuldade: 5,
    raciocinio: "Identificar a relação entre as ideias de cada frase antes de olhar a forma do conectivo",
    enunciado: "Assinale a frase em que o conectivo expressa relação de oposição entre as ideias.",
    alternativas: [
      "O condutor não só excedeu a velocidade, mas também ultrapassou pela direita.",
      "A pista estava molhada; o motorista deveria, pois, reduzir a velocidade.",
      "O motorista foi avisado do bloqueio na serra e insistiu em seguir viagem.",
      "O caminhão foi retido, visto que transportava carga acima do peso permitido.",
      "Choveu a noite toda, de modo que a ponte precisou ser interditada.",
    ],
    correta: 2,
    explicacao:
      "A conjunção “e”, normalmente aditiva, tem valor adversativo quando liga ideias que se contrapõem: o motorista foi avisado do bloqueio e, mesmo assim, insistiu em seguir. Equivale a “mas”.",
    explicacaoErradas:
      "“Não só… mas também” é locução aditiva: soma as duas infrações. “Pois”, posposto ao verbo e entre vírgulas, é conclusivo (= portanto). “Visto que” é causal: explica a retenção. “De modo que” é consecutivo: apresenta a interdição como consequência da chuva.",
    pegadinha:
      "A frase com “mas” não expressa oposição: em “não só… mas também”, o “mas” faz parte de locução aditiva. A oposição está no “e”, que é aditivo só na forma.",
    conhecimento:
      "O valor do conectivo depende do contexto: “e” pode ser adversativo (Foi avisado e insistiu = mas insistiu); “pois” é explicativo antes do verbo de sua oração (Parou, pois chovia) e conclusivo depois dele, entre vírgulas (Chovia; devia, pois, parar); “não só… mas também” é aditivo. Adversativas: mas, porém, contudo, todavia, entretanto, no entanto.",
    fonte: "Adaptada de FGV — 2026 — TJ-RS — Conciliador Cível",
    origem: "banco",
  },
  {
    id: "prf-pt-052",
    materia: "pt",
    topico: "Tipologia textual",
    subassunto: "Descrição objetiva × subjetiva: advérbio modalizador em relatório",
    dificuldade: 4,
    raciocinio: "Separar o que se pode verificar no objeto descrito do que exprime a avaliação de quem escreve",
    enunciado:
      "Trecho de um relatório de vistoria:\n\n“O caminhão tinha três eixos e carroceria de madeira. Os pneus dianteiros, lamentavelmente, estavam gastos e apresentavam cortes laterais próximos ao aro, e a lanterna traseira esquerda estava quebrada.”\n\nNum texto que deve ser objetivo, revela a subjetividade de quem escreve",
    alternativas: [
      "o adjetivo “gastos”, que indica o estado de conservação dos pneus.",
      "o advérbio “lamentavelmente”, que traz uma avaliação do redator.",
      "a expressão “próximos ao aro”, que localiza os cortes nos pneus.",
      "o numeral “três”, que informa a quantidade de eixos do caminhão.",
      "o adjetivo “quebrada”, que caracteriza a lanterna traseira esquerda.",
    ],
    correta: 1,
    explicacao:
      "“Lamentavelmente” é um advérbio modalizador: não descreve o caminhão, mas expressa o sentimento de quem escreve diante do fato. Num relatório, que deve ser objetivo, é marca de subjetividade.",
    explicacaoErradas:
      "“Gastos” e “quebrada” são adjetivos, mas indicam estados que se podem verificar: são descritivos, não avaliativos. “Próximos ao aro” localiza os cortes, e “três” quantifica os eixos: ambos são dados objetivos.",
    pegadinha:
      "A subjetividade costuma ser procurada nos adjetivos, mas aqui eles são descritivos; a avaliação está no advérbio, que comenta o fato em vez de descrevê-lo.",
    conhecimento:
      "Descrição objetiva: dados verificáveis (quantidade, forma, localização, estado). Descrição subjetiva: impressões e avaliações de quem descreve, marcadas por adjetivos avaliativos (imundo, assustador) ou por advérbios modalizadores (lamentavelmente, felizmente). Relatórios e laudos pedem descrição objetiva.",
    fonte: "Adaptada de FGV — 2024 — TJ-SC — Oficial de Justiça",
    origem: "banco",
  },
  {
    id: "prf-pt-053",
    materia: "pt",
    topico: "Compreensão e interpretação de textos",
    subassunto: "Estrutura argumentativa: opinião refutada, dados e tese do autor",
    dificuldade: 4,
    raciocinio: "Identificar de quem é cada afirmação e a função dos conectivos “porém” e “Por isso”",
    enunciado:
      "Leia o texto.\n\n“Há quem defenda que multas mais caras bastam para reduzir os acidentes nas rodovias. Os dados de fiscalização, porém, mostram que trechos com multas pesadas e pouca presença policial continuam violentos, e que a chance real de ser flagrado pesa mais na decisão do motorista do que o valor da punição. Por isso, mais do que endurecer as penalidades, é preciso tornar a fiscalização constante e visível.”\n\nO texto se organiza em",
    alternativas: [
      "opinião alheia, dados que a contestam e proposta baseada nesses dados.",
      "tese do autor, dados que a confirmam e conclusão que retoma a mesma tese.",
      "duas posições opostas, expostas sem que o autor adote nenhuma delas.",
      "opinião alheia, dados que a reforçam e defesa de penalidades mais duras.",
      "problema, causa e solução, sem menção a posições contrárias à do autor.",
    ],
    correta: 0,
    explicacao:
      "O texto abre com uma opinião que não é a do autor (“Há quem defenda…”), apresenta dados que a contestam (“porém”) e conclui com a proposta do autor, introduzida por “Por isso”: tornar a fiscalização constante e visível.",
    explicacaoErradas:
      "A primeira frase não é a tese do autor: “Há quem defenda” atribui a ideia a outros, e os dados a contestam. O autor toma partido: a última frase traz sua proposta. Os dados não reforçam a opinião inicial nem levam a defender penalidades mais duras: o texto diz que endurecê-las não basta. E há menção a posição contrária: a de quem defende multas mais caras.",
    pegadinha:
      "O texto começa com uma afirmação, mas ela não é do autor: “Há quem defenda” marca voz alheia, e o “porém” anuncia a contestação.",
    conhecimento:
      "Estratégia argumentativa comum: apresentar a posição contrária (Há quem diga…, Muitos acreditam…), refutá-la com dados ou argumentos (porém, no entanto) e concluir com a tese própria (Por isso, Portanto). Identificar de quem é cada voz no texto evita confundir a opinião refutada com a tese.",
    fonte: "Adaptada de FGV — 2023 — PGM-Niterói — Analista Processual",
    origem: "banco",
  },
  {
    id: "prf-pt-054",
    materia: "pt",
    topico: "Emprego das classes de palavras",
    subassunto: "Colocação pronominal: palavras atrativas, mesóclise e particípio",
    dificuldade: 5,
    raciocinio: "Procurar em cada frase a palavra que atrai o pronome e conferir as formas verbais que não admitem ênclise",
    enunciado: "Assinale a frase em que a colocação pronominal está de acordo com a norma-padrão.",
    alternativas: [
      "Me informaram que o condutor havia deixado o posto antes da vistoria.",
      "O motorista que recusou-se a fazer o teste foi levado à delegacia.",
      "Os agentes tinham entregado-lhe a notificação antes do fim do plantão.",
      "Em se tratando de carga perigosa, nada se libera sem vistoria completa.",
      "Entregarei-lhe a notificação assim que o condutor assinar o auto de infração.",
    ],
    correta: 3,
    explicacao:
      "A preposição “em” antes de gerúndio exige a próclise (em se tratando), e o pronome indefinido “nada” atrai o pronome (nada se libera). As duas colocações seguem a norma-padrão.",
    explicacaoErradas:
      "“Me informaram” está errado: a norma-padrão não admite iniciar a frase com pronome átono (Informaram-me). “Que recusou-se” está errado: o pronome relativo atrai o pronome (que se recusou). “Tinham entregado-lhe” está errado: não se pospõe pronome ao particípio (tinham-lhe entregado). “Entregarei-lhe” está errado: no futuro do presente sem palavra atrativa, usa-se a mesóclise (Entregar-lhe-ei).",
    pegadinha:
      "“Em se tratando” soa estranho, mas é a forma da norma: a preposição “em” antes do gerúndio exige a próclise.",
    conhecimento:
      "Próclise obrigatória com palavras atrativas: negação (não, nunca, ninguém), relativos (que, quem, onde), conjunções subordinativas (quando, se, embora), indefinidos (tudo, nada, alguém), advérbios sem vírgula e “em” + gerúndio. Mesóclise no futuro do presente e do pretérito sem palavra atrativa (Entregar-lhe-ei). Nunca há ênclise ao particípio nem pronome átono no início da frase.",
    origem: "banco",
  },
  {
    id: "prf-pt-055",
    materia: "pt",
    topico: "Sintaxe da oração e do período",
    subassunto: "Complemento nominal × adjunto adnominal: valor passivo × valor ativo",
    dificuldade: 5,
    raciocinio: "Converter cada nome em verbo e verificar se o termo entre aspas pratica ou sofre a ação",
    enunciado: "Assinale a frase em que o termo entre aspas exerce a função de complemento nominal.",
    alternativas: [
      "A chegada “dos agentes” ao posto foi registrada às seis horas da manhã.",
      "A decisão “do superintendente” surpreendeu a equipe do plantão.",
      "A invasão “dos manifestantes” bloqueou a pista federal por duas horas.",
      "A viatura “da regional” passou por revisão no início do mês.",
      "A apreensão “da carga” ocorreu no fim da operação de fiscalização.",
    ],
    correta: 4,
    explicacao:
      "Em “a apreensão da carga”, a carga sofre a ação de apreender (alguém apreendeu a carga): o termo tem valor passivo e completa o sentido do nome abstrato. É complemento nominal.",
    explicacaoErradas:
      "“Dos agentes” pratica a ação de chegar (os agentes chegaram), e “do superintendente”, a de decidir: têm valor ativo e são adjuntos adnominais. “Dos manifestantes” também é agente (os manifestantes invadiram); o complemento nominal seria o alvo da invasão (a invasão da pista). “Da regional” indica a quem pertence a viatura, substantivo concreto: é adjunto adnominal.",
    pegadinha:
      "Todas as frases trazem substantivo seguido de “de” + nome; o que decide é o papel do termo: quem pratica a ação é adjunto adnominal, e quem a sofre é complemento nominal.",
    conhecimento:
      "Com substantivo abstrato de ação, o termo preposicionado de valor ativo (agente) é adjunto adnominal (a decisão do chefe = o chefe decidiu), e o de valor passivo (paciente) é complemento nominal (a apreensão da carga = a carga foi apreendida). Com substantivo concreto ou ideia de posse, é adjunto adnominal (a viatura da regional). O complemento nominal também completa adjetivos e advérbios (útil à investigação; favoravelmente ao réu).",
    origem: "banco",
  },
  {
    id: "prf-pt-056",
    materia: "pt",
    topico: "Sintaxe da oração e do período",
    subassunto: "Transposição para a voz passiva analítica em locução verbal",
    dificuldade: 5,
    raciocinio: "Manter o auxiliar e o tempo da ativa e pôr o verbo “ser” na forma do verbo principal (gerúndio → sendo)",
    enunciado:
      "Assinale a opção que transpõe para a voz passiva analítica, sem alterar o tempo verbal nem o sentido, a frase “A PRF vinha fiscalizando os caminhões de carga desde a madrugada”.",
    alternativas: [
      "Os caminhões de carga vinham sendo fiscalizados pela PRF desde a madrugada.",
      "Os caminhões de carga eram fiscalizados pela PRF desde a madrugada.",
      "Os caminhões de carga estavam sendo fiscalizados pela PRF desde a madrugada.",
      "Os caminhões de carga foram sendo fiscalizados pela PRF desde a madrugada.",
      "Vinham-se fiscalizando os caminhões de carga pela PRF desde a madrugada.",
    ],
    correta: 0,
    explicacao:
      "Na passiva analítica, o auxiliar da ativa se mantém, e o verbo “ser” assume a forma do verbo principal: “vinha fiscalizando” (vir + gerúndio) passa a “vinham sendo fiscalizados”. O objeto “os caminhões de carga” vira sujeito, e “a PRF” vira agente da passiva.",
    explicacaoErradas:
      "“Eram fiscalizados” elimina o auxiliar “vir”: corresponde à ativa “fiscalizava”. “Estavam sendo fiscalizados” troca o auxiliar “vir” por “estar”: corresponde a “estava fiscalizando”. “Foram sendo fiscalizados” põe o auxiliar no pretérito perfeito, e a ativa está no imperfeito (vinha). “Vinham-se fiscalizando” é passiva sintética, e não analítica.",
    pegadinha:
      "As formas com “sendo” parecem equivalentes, mas a transposição conserva o auxiliar e o tempo da ativa: só “vinham sendo” mantém o “vir” no imperfeito.",
    conhecimento:
      "Passiva analítica: o objeto direto vira sujeito, o sujeito vira agente da passiva, e o verbo “ser” assume o tempo e o modo do verbo da ativa, seguido do particípio concordando com o novo sujeito (recolheu → foram recolhidos). Na locução, o auxiliar se mantém, e “ser” toma a forma do verbo principal: vinha fiscalizando → vinham sendo fiscalizados; tinha recolhido → tinham sido recolhidos; vai apreender → vai ser apreendida.",
    origem: "banco",
  },
  {
    id: "prf-pt-057",
    materia: "pt",
    topico: "Emprego das classes de palavras",
    subassunto: "Valores do futuro do pretérito: distanciamento × hipótese, polidez e futuro do passado",
    dificuldade: 4,
    raciocinio: "Verificar se a forma verbal atribui a informação a outra fonte ou se depende de uma condição",
    enunciado:
      "Leia a nota.\n\n“Segundo testemunhas, o motorista do carro teria invadido a contramão pouco antes da colisão.”\n\nA forma “teria invadido” tem o mesmo valor que o futuro do pretérito empregado em:",
    alternativas: [
      "Se tivesse reduzido a velocidade, o motorista teria evitado a colisão.",
      "O agente disse que, no dia seguinte, a pista seria liberada às oito.",
      "Conforme o boletim, o caminhão teria tombado ao desviar de um animal.",
      "Eu gostaria de saber se o relatório já foi entregue à chefia do posto.",
      "Sem a chuva forte, a operação teria terminado antes do meio-dia.",
    ],
    correta: 2,
    explicacao:
      "Na nota, “teria invadido” indica que a informação vem de outra fonte (as testemunhas) e não é confirmada por quem escreve: é o futuro do pretérito de incerteza, ou de distanciamento. É o mesmo valor de “teria tombado”, atribuído ao boletim.",
    explicacaoErradas:
      "“Teria evitado” e “teria terminado” têm a mesma forma, mas expressam hipótese: o que aconteceria se a condição (ter reduzido a velocidade, não haver chuva) se cumprisse. “Seria liberada” indica fato futuro em relação a um momento passado (aquele em que o agente falou). “Gostaria” atenua o pedido: é o futuro do pretérito de polidez.",
    pegadinha:
      "Três frases usam “teria” + particípio, mas só na que atribui o fato a uma fonte (conforme o boletim) quem escreve deixa de confirmá-lo; nas outras duas, a forma expressa hipótese.",
    conhecimento:
      "Valores do futuro do pretérito: hipótese ou condição (Se tivesse freado, teria evitado), futuro em relação ao passado (Disse que a pista seria liberada), polidez (Gostaria de saber) e incerteza ou distanciamento, comum no jornalismo para atribuir a informação a outra fonte sem confirmá-la (Segundo a polícia, o suspeito teria fugido).",
    origem: "banco",
  },
];
