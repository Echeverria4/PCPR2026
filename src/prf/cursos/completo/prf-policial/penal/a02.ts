import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-02",
  resumo: {
    ideia:
      "A aula mostra como a lei penal é aplicada: os tipos de norma penal (incriminadora, permissiva, explicativa e em branco), a lei penal no tempo (quando a lei nova vale para fatos antigos), no espaço (quando a lei brasileira vale para crimes fora do Brasil) e em relação às pessoas (sujeitos do crime e imunidades), além das disposições finais da parte geral (arts. 8º a 12 do CP), da interpretação da lei penal e do conflito aparente de normas.",
    itens: [
      {
        parte: "1. Classificação das normas penais",
        termo: "Incriminadoras × não incriminadoras",
        faz: "Incriminadora é a que descreve o crime e comina a pena (ex.: art. 121, “matar alguém”). Não incriminadora não cria crime: pode ser permissiva (autoriza a conduta, como as excludentes do art. 23) ou explicativa/complementar (esclarece um conceito, como o de funcionário público do art. 327).",
        pista: "Nem toda norma penal cria crime ou pena.",
      },
      {
        termo: "Norma penal em branco",
        faz: "Tem a pena definida, mas a conduta precisa de complemento de outra norma. Homogênea (em sentido amplo): o complemento vem de outra lei. Heterogênea (em sentido estrito): vem de ato de outra natureza, como a portaria da Anvisa que lista as drogas proibidas. Em branco ao revés (inversa): a conduta está completa, mas a pena está em outra lei.",
        pista: "Na em branco ao revés, o complemento da pena tem de vir de lei, nunca de portaria.",
      },
      {
        parte: "2. Lei penal no tempo",
        termo: "Regra: atividade",
        faz: "A lei penal se aplica aos fatos praticados durante a sua vigência. A exceção é a extra-atividade da lei mais benéfica: ela retroage (vale para fatos anteriores) e é ultra-ativa (continua valendo para os fatos da sua época, mesmo depois de revogada por lei pior).",
      },
      {
        termo: "Lei nova pior",
        faz: "A lei que cria crime (novatio legis incriminadora) ou que agrava a situação do réu (novatio legis in pejus) não retroage: só vale para fatos posteriores.",
      },
      {
        termo: "Lei nova melhor (novatio legis in mellius)",
        faz: "A lei que de qualquer modo favorece o réu retroage, mesmo que já exista condenação definitiva (art. 2º, parágrafo único).",
      },
      {
        termo: "Abolitio criminis",
        faz: "Lei nova deixa de considerar o fato crime (art. 2º, caput). Cessam a execução da pena e os efeitos penais da condenação (ex.: deixa de gerar reincidência). Os efeitos civis (extrapenais), como o dever de reparar o dano, continuam.",
      },
      {
        termo: "Continuidade normativo-típica",
        faz: "O artigo é revogado, mas a conduta passa a ser crime em outro artigo: não há abolitio criminis. Ex.: o antigo atentado violento ao pudor foi revogado em 2009, mas a conduta passou a integrar o estupro (art. 213).",
      },
      {
        termo: "Combinação de leis e lei intermediária",
        faz: "Se a lei nova tem partes boas e ruins, prevalece que não se podem juntar as partes boas das duas leis: aplica-se a que, no todo, for melhor (Súmula 501 do STJ, sobre a Lei de Drogas). Se entre o fato e a sentença vigorou uma lei intermediária mais benéfica, ela é aplicada, mesmo já revogada.",
      },
      {
        termo: "Quem aplica a lei mais benéfica",
        faz: "Com o processo em andamento, o juiz ou tribunal da causa. Depois do trânsito em julgado, o juízo da execução (Súmula 611 do STF).",
      },
      {
        termo: "Leis excepcionais e temporárias (art. 3º)",
        faz: "Temporária é a que tem prazo de vigência marcado; excepcional é a feita para uma situação anormal (guerra, calamidade). Ambas continuam valendo para os fatos praticados durante a vigência, mesmo depois de vencido o prazo ou encerrada a situação (ultra-atividade). Só deixam de valer se lei posterior abolir expressamente a conduta.",
      },
      {
        termo: "Tempo do crime (art. 4º)",
        faz: "Teoria da atividade: o crime considera-se praticado no momento da ação ou omissão, ainda que o resultado venha depois. Ex.: a idade do agente (maior ou menor de 18) é vista no dia da conduta.",
      },
      {
        termo: "Crimes permanentes e continuados (Súmula 711 do STF)",
        faz: "Enquanto não cessar a permanência (ex.: sequestro) ou a continuidade, o crime está sendo praticado. Se nesse período surgir lei mais grave, ela se aplica a todo o crime.",
      },
      {
        parte: "3. Lei penal no espaço: território",
        termo: "Territorialidade temperada (art. 5º)",
        faz: "Regra: aplica-se a lei brasileira ao crime cometido no território nacional, ressalvados tratados e convenções internacionais. “Temperada” porque há exceções nos dois sentidos.",
      },
      {
        termo: "Território nacional",
        faz: "Solo, rios, lagos, mar territorial (12 milhas náuticas), subsolo e espaço aéreo correspondente.",
      },
      {
        termo: "Território por extensão (art. 5º, § 1º)",
        faz: "Navios e aeronaves brasileiros públicos ou a serviço do governo, onde quer que estejam; navios e aeronaves brasileiros mercantes ou particulares, quando em alto-mar ou no espaço aéreo correspondente.",
      },
      {
        termo: "Estrangeiros no Brasil (art. 5º, § 2º)",
        faz: "Aplica-se a lei brasileira ao crime cometido a bordo de aeronave ou embarcação estrangeira particular que esteja em pouso no território nacional ou em voo no espaço aéreo brasileiro, ou em porto ou mar territorial do Brasil.",
        pista: "Passagem inocente: navio estrangeiro só atravessando o mar territorial, sem parar, segue a lei da bandeira se o crime não afetar o Brasil.",
      },
      {
        termo: "Embaixadas",
        faz: "Não são extensão do território do país que representam. A embaixada estrangeira no Brasil é território brasileiro; o que existe são imunidades das pessoas e inviolabilidade do local.",
      },
      {
        termo: "Lugar do crime (art. 6º)",
        faz: "Teoria da ubiquidade: considera-se praticado o crime tanto onde ocorreu a ação ou omissão quanto onde se produziu ou deveria produzir-se o resultado. Serve para os crimes à distância, que envolvem mais de um país.",
        pista: "Crime que passa por duas cidades do Brasil é questão de competência, resolvida pelo CPP (em regra, local da consumação), não pelo art. 6º.",
      },
      {
        parte: "4. Extraterritorialidade (art. 7º)",
        termo: "Princípios",
        faz: "Nacionalidade ativa (crime praticado por brasileiro); nacionalidade passiva (crime contra brasileiro); defesa ou real (crime contra bens jurídicos do Brasil); justiça universal (crimes que o Brasil se comprometeu a reprimir por tratado); representação ou bandeira (crime em navio ou aeronave brasileira particular no exterior, quando lá não for julgado).",
      },
      {
        termo: "Incondicionada (art. 7º, I)",
        faz: "Crimes contra a vida ou a liberdade do Presidente da República; contra o patrimônio ou a fé pública da União, do DF, de Estado, Território, Município, empresa pública, sociedade de economia mista, autarquia ou fundação pública; contra a administração pública, por quem está a seu serviço; genocídio, quando o agente for brasileiro ou domiciliado no Brasil.",
        pista: "Basta o crime: o agente é punido no Brasil mesmo que já absolvido ou condenado lá fora (§ 1º).",
      },
      {
        termo: "Condicionada (art. 7º, II)",
        faz: "Crimes que o Brasil se obrigou a reprimir por tratado; praticados por brasileiro; praticados em aeronaves ou embarcações brasileiras mercantes ou particulares em território estrangeiro, quando lá não forem julgados.",
      },
      {
        termo: "Condições (art. 7º, § 2º)",
        faz: "Todas juntas: entrar o agente no território nacional; o fato ser punível também no país onde foi praticado; o crime estar entre os que a lei brasileira permite extraditar; não ter sido absolvido nem ter cumprido pena no estrangeiro; não ter sido perdoado nem estar extinta a punibilidade pela lei mais favorável.",
      },
      {
        termo: "Hipercondicionada (art. 7º, § 3º)",
        faz: "Crime de estrangeiro contra brasileiro fora do Brasil. Além das condições do § 2º, exige que a extradição não tenha sido pedida ou tenha sido negada e que haja requisição do Ministro da Justiça.",
      },
      {
        parte: "5. Lei penal em relação às pessoas",
        termo: "Sujeito ativo",
        faz: "Quem pratica o crime, como autor ou partícipe. A pessoa jurídica pode ser sujeito ativo de crime ambiental (art. 225, § 3º, da CF); STF e STJ não exigem mais que a pessoa física seja processada junto (dupla imputação).",
      },
      {
        termo: "Sujeito passivo",
        faz: "Quem sofre a ofensa. Formal (mediato, constante): sempre o Estado. Material (imediato, eventual): o titular do bem jurídico atingido; o próprio Estado pode ser, como nos crimes contra o patrimônio público. Morto e animal não são sujeito passivo: podem ser objeto material.",
      },
      {
        termo: "Imunidade diplomática",
        faz: "Prevista na Convenção de Viena e baseada na reciprocidade. É dada em razão do cargo, não da pessoa. O agente diplomático e sua família não se submetem à jurisdição penal brasileira: respondem pelas leis do seu país. Só o país de origem pode renunciar a ela.",
        pista: "Cônsul só tem imunidade pelos atos praticados no exercício da função.",
      },
      {
        termo: "Imunidade material (art. 53 da CF)",
        faz: "Deputados e senadores são invioláveis, civil e penalmente, por opiniões, palavras e votos ligados ao mandato, mesmo fora do Congresso (ex.: entrevista). Prevalece que o fato é atípico. Vereadores também têm, mas só na circunscrição do município e com relação com o mandato (art. 29, VIII).",
      },
      {
        termo: "Imunidade formal para a prisão (art. 53, § 2º)",
        faz: "Desde a diplomação, deputados e senadores não podem ser presos, salvo em flagrante de crime inafiançável; os autos vão em 24 horas à Casa, que decide pela maioria absoluta. O STF também admite a prisão por condenação definitiva.",
      },
      {
        termo: "Imunidade formal para o processo (art. 53, § 3º)",
        faz: "Recebida a denúncia por crime ocorrido após a diplomação, o STF avisa a Casa, que, por iniciativa de partido político nela representado e voto da maioria absoluta, pode sustar o andamento da ação até o fim do mandato. A sustação suspende a prescrição.",
      },
      {
        termo: "Alcance das imunidades parlamentares",
        faz: "São irrenunciáveis. Valem para deputados estaduais; vereadores só têm a material. Não alcançam suplentes nem o parlamentar afastado para ser ministro ou secretário. Durante o estado de sítio, só podem ser suspensas pelo voto de 2/3 da Casa.",
      },
      {
        parte: "6. Disposições finais da parte geral (arts. 8º a 12)",
        termo: "Pena cumprida no estrangeiro (art. 8º)",
        faz: "Se a pena lá fora for da mesma natureza, é descontada da pena aplicada no Brasil; se for diferente, atenua a pena brasileira.",
      },
      {
        termo: "Sentença estrangeira (art. 9º)",
        faz: "Pode ser homologada no Brasil (pelo STJ) para obrigar o condenado a reparar o dano e a outros efeitos civis, a pedido da parte interessada, ou para sujeitá-lo a medida de segurança, se houver tratado de extradição ou requisição do Ministro da Justiça. Só se homologa sentença com trânsito em julgado (Súmula 420 do STF).",
        pista: "Para gerar reincidência, a condenação estrangeira não precisa ser homologada (art. 63).",
      },
      {
        termo: "Contagem de prazo (art. 10)",
        faz: "O dia do começo é incluído no prazo; os dias, meses e anos contam-se pelo calendário comum. O prazo penal não se suspende nem se prorroga em feriados, fins de semana ou recesso.",
        pista: "Prazo penal (art. 10 do CP) é diferente do processual (CPP), que exclui o dia do começo.",
      },
      {
        termo: "Frações não computáveis (art. 11)",
        faz: "Desprezam-se as frações de dia nas penas privativas de liberdade e restritivas de direitos, e as frações de moeda (centavos) na pena de multa.",
      },
      {
        termo: "Legislação especial (art. 12)",
        faz: "As regras gerais do Código Penal valem também para os crimes de leis especiais, se estas não dispuserem de modo diferente.",
      },
      {
        parte: "7. Interpretação e conflito aparente de normas",
        termo: "Interpretação quanto ao sujeito",
        faz: "Autêntica: feita pelo próprio legislador, no texto da lei (ex.: art. 327). Doutrinária: feita pelos estudiosos, sem força obrigatória; a exposição de motivos do CP entra aqui, porque não é lei. Judicial: feita pelos juízes nas decisões.",
      },
      {
        termo: "Quanto ao método e ao resultado",
        faz: "Método: literal (gramatical), teleológica (finalidade da lei), sistemática (lei no conjunto do ordenamento), histórica, lógica e progressiva (adapta a lei à realidade atual). Resultado: declaratória (a lei disse o que queria), extensiva (disse menos do que queria) ou restritiva (disse mais).",
        pista: "Analogia não é interpretação: é integração, para suprir a falta de lei.",
      },
      {
        termo: "Conflito aparente de normas",
        faz: "Um só fato parece caber em duas normas, mas só uma se aplica. Resolve-se por especialidade, subsidiariedade, consunção e alternatividade.",
      },
      {
        termo: "Especialidade e subsidiariedade",
        faz: "Especialidade: a norma especial tem todos os elementos da geral e mais algum, e prevalece (ex.: o infanticídio, art. 123, prevalece sobre o homicídio quando a mãe mata o filho sob influência do estado puerperal). Subsidiariedade: a norma primária, mais grave, afasta a subsidiária, que descreve grau menor de violação do mesmo bem; pode ser expressa (“se o fato não constitui crime mais grave”) ou tácita.",
      },
      {
        termo: "Consunção e alternatividade",
        faz: "Consunção (absorção): o crime-fim absorve o crime-meio ou a fase anterior (ex.: falso que se esgota no estelionato, Súmula 17 do STJ); inclui crime progressivo, progressão criminosa e antefato e pós-fato impuníveis. Alternatividade: em tipos com vários verbos (ex.: art. 33 da Lei de Drogas), praticar mais de um verbo no mesmo contexto é crime único.",
      },
    ],
    cuidado:
      "Abolitio criminis apaga os efeitos penais, mas não os civis. Tempo do crime = atividade; lugar do crime = ubiquidade. E o prazo penal inclui o dia do começo.",
  },
  questoes: [
    {
      topico: "Lei penal no tempo",
      subassunto: "Abolitio criminis",
      dificuldade: 4,
      raciocinio: "Separe efeitos penais de efeitos civis.",
      enunciado:
        "Um homem cumpre pena por sentença definitiva, que também fixou indenização à vítima. Lei nova deixa de considerar o fato como crime. Pelo art. 2º do CP,",
      alternativas: [
        "a lei nova só alcança quem ainda não foi julgado, em respeito à coisa julgada",
        "desaparecem a pena e também a obrigação de indenizar fixada na sentença",
        "a lei nova depende de revisão criminal, sem efeito na execução em curso",
        "cessam a execução e os efeitos penais, mas ficam os efeitos civis",
        "a execução acaba, mas a reincidência continua contando contra ele",
      ],
      correta: 3,
      explicacao:
        "O art. 2º manda que ninguém seja punido por fato que lei posterior deixa de considerar crime, e cessam em virtude dela a execução e os efeitos penais da sentença condenatória. A obrigação de indenizar é efeito civil e permanece.",
      explicacaoErradas:
        "“Coisa julgada” não barra a lei mais benéfica (art. 2º, parágrafo único). A “obrigação de indenizar” não se apaga. A “revisão criminal” não é necessária. A “reincidência” é efeito penal e também desaparece.",
      pegadinha: "A abolitio alcança até condenação definitiva, mas não mexe no campo civil.",
      conhecimento:
        "Se a lei nova só muda o lugar da conduta, sem deixar de puni-la, há continuidade típico-normativa, e não abolitio.",
    },
    {
      topico: "Classificação das normas penais",
      subassunto: "Norma penal em branco",
      dificuldade: 4,
      raciocinio: "Olhe quem edita o complemento: o mesmo órgão ou outra instância.",
      enunciado:
        "A PRF apreende carga de substância listada em portaria da Anvisa como droga proibida. O tipo do art. 33 da Lei 11.343/2006 só se completa com essa lista. Em contraste, o art. 237 do CP, que pune quem se casa conhecendo impedimento, busca o complemento no Código Civil. Essas normas são, nessa ordem, em branco",
      alternativas: [
        "homogênea e heterogênea, porque a portaria vem do Legislativo",
        "heterogênea e homogênea, conforme a instância do complemento",
        "às avessas e homogênea, porque nos dois casos falta a pena",
        "heterogênea e às avessas, porque a lei civil aumenta a sanção",
        "homogênea nos dois casos, porque toda norma complementar é lei",
      ],
      correta: 1,
      explicacao:
        "Na heterogênea, o complemento vem de instância diferente da que fez a lei, como a portaria da Anvisa. Na homogênea, vem de outra lei, como o Código Civil no art. 237 do CP.",
      explicacaoErradas:
        "A portaria não vem “do Legislativo”. A norma “às avessas” é a que deixa a pena para outro texto, o que não é o caso. A “lei civil” não aumenta a sanção aqui. Nem “toda norma complementar é lei”: a portaria é ato administrativo.",
      pegadinha: "O nome “homogênea” fala da fonte do complemento, e não do assunto.",
      conhecimento:
        "Na norma em branco às avessas, o preceito está completo e a pena depende de outro texto, que precisa ser lei.",
    },
    {
      topico: "Lei penal no tempo",
      subassunto: "Combinação de leis: Súmula 501 do STJ",
      dificuldade: 5,
      raciocinio: "O juiz escolhe a lei inteira mais favorável; ele não monta uma terceira.",
      enunciado:
        "A lei antiga traz pena-base menor; a lei nova, pena-base maior, mas uma causa de diminuição que a antiga não tinha. A defesa pede a pena da lei antiga com a diminuição da lei nova. Conforme a Súmula 501 do STJ, firmada no confronto das leis de drogas, o juiz",
      alternativas: [
        "deve atender à defesa, porque toda parte benéfica retroage sozinha",
        "aplica sempre a lei nova, que revogou por inteiro a anterior",
        "aplica sempre a lei antiga, por ser a vigente na data do fato",
        "pode combinar as leis, desde que o Ministério Público não se oponha",
        "aplica a lei que, na íntegra, for mais favorável, vedada a combinação",
      ],
      correta: 4,
      explicacao:
        "A Súmula 501 admite a retroação da nova lei de drogas desde que, aplicada na íntegra, seja mais favorável que a lei anterior, sendo vedada a combinação de leis. Juntar partes criaria uma terceira lei, função do Legislativo.",
      explicacaoErradas:
        "“Toda parte benéfica” sozinha é a tese rejeitada. “Sempre a lei nova” e “sempre a lei antiga” ignoram a comparação no caso concreto. A concordância do “Ministério Público” não permite a combinação.",
      pegadinha: "“Mais benéfica” se compara lei contra lei, e não artigo contra artigo.",
      conhecimento:
        "Compete ao juízo da execução aplicar a lei mais benigna depois do trânsito em julgado (Súmula 611 do STF).",
    },
    {
      topico: "Lei penal no tempo",
      subassunto: "Lei temporária",
      dificuldade: 4,
      raciocinio: "Sem a ultra-atividade, bastaria esperar a lei acabar.",
      enunciado:
        "Lei com prazo de vigência de 90 dias pune certa conduta durante calamidade. Um motorista a pratica no 80º dia e só é denunciado depois do fim do prazo, quando a lei já não vigora. Nesse caso, pelo art. 3º do CP,",
      alternativas: [
        "a lei aplica-se ao fato, mesmo decorrido o período de sua duração",
        "houve abolitio criminis, e o processo deve ser extinto de imediato",
        "a lei só se aplica se a denúncia vier antes do fim do prazo legal",
        "a retroatividade benéfica afasta a punição quando a lei perde a vigência",
        "o fato fica impune, porque a Constituição proíbe a ultra-atividade",
      ],
      correta: 0,
      explicacao:
        "A lei excepcional ou temporária, embora decorrido o período de sua duração ou cessadas as circunstâncias que a determinaram, aplica-se ao fato praticado durante sua vigência. É a ultra-atividade.",
      explicacaoErradas:
        "O fim do prazo não é “abolitio criminis”. Não se exige “denúncia” dentro do prazo. A “retroatividade benéfica” não entra, porque a perda de vigência já estava prevista. A “Constituição” não veda essa regra na leitura que prevalece.",
      pegadinha: "O término da lei temporária não equivale a uma lei nova que descriminaliza.",
      conhecimento:
        "A lei temporária tem prazo fixado no próprio texto. A excepcional vale enquanto dura a situação que a motivou.",
    },
    {
      topico: "Tempo do crime",
      subassunto: "Teoria da atividade e menoridade",
      dificuldade: 4,
      raciocinio: "Pergunte a idade na data do disparo, e não na data da morte.",
      enunciado:
        "Faltando três dias para fazer 18 anos, um rapaz atira em outro às margens de uma rodovia federal. A vítima fica internada e morre um mês depois, quando o autor já é maior. Pelo art. 4º do CP, o autor",
      alternativas: [
        "responde pelo homicídio, porque já era maior quando a vítima morreu",
        "responde por tentativa, e o resultado posterior fica fora da imputação",
        "é inimputável, pois vale a idade na data da ação, e não a do resultado",
        "responde pelo homicídio com a pena reduzida pela idade próxima de 18 anos",
        "fica sem resposta estatal, porque a medida do ECA acaba aos 18 anos",
      ],
      correta: 2,
      explicacao:
        "Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado. Na data do disparo ele tinha 17 anos, e o menor de 18 é inimputável (art. 27). Responde pelo ECA.",
      explicacaoErradas:
        "“Maior quando a vítima morreu” aplica a teoria do resultado, que o CP não adotou. A “tentativa” não se ajusta ao fato. A “pena reduzida” é benefício de quem já tem 18 anos e menos de 21. A medida do ECA pode seguir depois dos 18, e por isso “fica sem resposta” também erra.",
      pegadinha: "No tempo, vale a atividade. No lugar, a ubiquidade. A troca derruba muita gente.",
      conhecimento:
        "No ECA, a internação tem liberação compulsória aos 21 anos (art. 121, § 5º).",
    },
    {
      topico: "Tempo do crime",
      subassunto: "Crime permanente: Súmula 711 do STF",
      dificuldade: 5,
      raciocinio: "No crime permanente, a conduta ainda está acontecendo quando a lei muda.",
      enunciado:
        "Uma vítima de extorsão mediante sequestro é levada a cativeiro em março. Em maio, entra em vigor lei que aumenta a pena do crime. A polícia liberta a vítima em junho, com o mesmo grupo no comando do cativeiro. Sobre a lei aplicável,",
      alternativas: [
        "vale a lei de março, pois a lei mais grave nunca retroage",
        "o juiz aplica metade da pena de cada lei, por proporção do tempo",
        "só a lei de março vale, porque o crime se consumou com a captura",
        "aplica-se a lei de maio, vigente antes de cessar a permanência",
        "aplica-se a lei de maio somente se houver nova denúncia pelo período",
      ],
      correta: 3,
      explicacao:
        "A Súmula 711 do STF diz que a lei penal mais grave se aplica ao crime continuado ou permanente, se sua vigência é anterior à cessação da continuidade ou da permanência. Não há retroação: a conduta seguia em curso quando a lei entrou em vigor.",
      explicacaoErradas:
        "“Nunca retroage” é verdade, mas não é o caso, porque não há retroação. A divisão em “metade da pena” não existe. A consumação com a captura não encerra a permanência, e por isso “só a lei de março” erra. “Nova denúncia” não é exigida.",
      pegadinha: "A consumação se prolonga: o fato também ocorreu sob a lei nova.",
      conhecimento:
        "A mesma regra vale para o crime continuado, em que a série de condutas alcança a nova lei.",
    },
    {
      topico: "Lei penal no espaço",
      subassunto: "Lugar do crime: ubiquidade",
      dificuldade: 4,
      raciocinio: "Basta que a ação ou o resultado toque o Brasil.",
      enunciado:
        "Na fronteira seca de Mato Grosso do Sul, um homem atira do lado boliviano contra um desafeto que está do lado brasileiro. A vítima é socorrida e morre em hospital boliviano. Quanto à aplicação da lei brasileira pelo critério do art. 6º do CP,",
      alternativas: [
        "aplica-se, pois parte do resultado ou da execução tocou o Brasil",
        "não se aplica, porque ação e morte ocorreram em solo estrangeiro",
        "não se aplica, porque vale só o lugar da ação, que foi na Bolívia",
        "só se aplica se a Bolívia pedir a cooperação do governo brasileiro",
        "aplica-se somente se o autor for brasileiro e entrar no território",
      ],
      correta: 0,
      explicacao:
        "O art. 6º adota a ubiquidade: o crime se considera praticado onde ocorreu a ação ou omissão, no todo ou em parte, e onde se produziu ou deveria produzir-se o resultado. A lesão que levou à morte atingiu a vítima em solo brasileiro, então o crime tocou o território nacional.",
      explicacaoErradas:
        "Dizer que “ação e morte” ocorreram fora ignora a lesão sofrida no Brasil. “Só o lugar da ação” descreve a teoria da atividade, que o CP usa para o tempo. Pedido de “cooperação” e condição de “autor brasileiro” não são exigidos, porque o caso é de territorialidade.",
      pegadinha: "Ubiquidade resolve crime à distância entre países, e não a competência entre comarcas.",
      conhecimento:
        "Para definir o foro dentro do Brasil, a regra geral do CPP é o lugar da consumação (art. 70).",
    },
    {
      topico: "Lei penal no espaço",
      subassunto: "Extraterritorialidade incondicionada",
      dificuldade: 5,
      raciocinio: "Quem serve à administração brasileira e a lesa no exterior cai no art. 7º, I.",
      enunciado:
        "Em missão oficial no exterior, um servidor federal desvia verba da representação brasileira. Processado lá, é absolvido por falta de provas e volta ao Brasil. Pelo art. 7º do CP, a lei brasileira",
      alternativas: [
        "não se aplica, porque a absolvição estrangeira encerra o caso",
        "só se aplica se o Ministro da Justiça requisitar a ação penal",
        "só se aplica se o desvio também for crime no país da missão",
        "se aplica apenas depois de homologada a sentença estrangeira",
        "se aplica, ainda que ele tenha sido absolvido no estrangeiro",
      ],
      correta: 4,
      explicacao:
        "O crime contra a administração pública por quem está a seu serviço entra no art. 7º, I, “c”. Nesses casos, pelo § 1º, o agente é punido segundo a lei brasileira, ainda que absolvido ou condenado no estrangeiro.",
      explicacaoErradas:
        "A “absolvição estrangeira” só impede a punição na hipótese condicionada. A requisição do “Ministro da Justiça” aparece no § 3º. Exigir crime “no país da missão” é condição do § 2º. A “homologação” não é requisito da punição aqui.",
      pegadinha: "Na hipótese incondicionada, as condições do § 2º simplesmente não existem.",
      conhecimento:
        "Se houver pena cumprida no estrangeiro, ela atenua a imposta no Brasil, quando diversas, ou nela é computada, quando idênticas (art. 8º).",
    },
    {
      topico: "Lei penal no espaço",
      subassunto: "Extraterritorialidade condicionada",
      dificuldade: 5,
      raciocinio: "No art. 7º, II, as condições são cumulativas: uma falha derruba tudo.",
      enunciado:
        "Um brasileiro comete furto em Portugal, é absolvido pela Justiça portuguesa e retorna ao Brasil. O fato também é crime lá e admite extradição. Quanto à aplicação da lei brasileira,",
      alternativas: [
        "aplica-se sem condição, porque o agente é brasileiro",
        "não se aplica, porque falta a condição de não ter sido absolvido lá",
        "aplica-se, porque o retorno ao Brasil supre as demais condições",
        "não se aplica, porque o furto nunca entra na extraterritorialidade",
        "aplica-se se o Ministro da Justiça requisitar, mesmo com a absolvição",
      ],
      correta: 1,
      explicacao:
        "O crime praticado por brasileiro está no art. 7º, II, “b”. O § 2º exige, em conjunto: entrar no território, ser punível também onde foi praticado, estar entre os crimes que admitem extradição, não ter sido absolvido ou cumprido pena lá, e não ter sido perdoado nem extinta a punibilidade. A absolvição barra a aplicação.",
      explicacaoErradas:
        "“Sem condição” descreve o art. 7º, I. O “retorno ao Brasil” é só uma das condições. O “furto” entra, porque o inciso II, “b”, não escolhe crimes. A requisição do “Ministro da Justiça” é do § 3º, sobre crime de estrangeiro contra brasileiro.",
      pegadinha: "Ser brasileiro é o que abre a hipótese, mas não dispensa as condições.",
      conhecimento:
        "Pelo art. 5º, LI, da CF, o brasileiro nato nunca é extraditado: por isso a lei brasileira ganha importância nesses casos.",
    },
    {
      topico: "Lei penal no espaço",
      subassunto: "Embarcações e aeronaves",
      dificuldade: 4,
      raciocinio: "Natureza pública acompanha a bandeira; natureza privada estrangeira cede ao território.",
      enunciado:
        "No porto de Santos, ocorre um homicídio a bordo de um navio mercante estrangeiro, de propriedade privada. Na mesma semana, outro homicídio ocorre em navio de guerra estrangeiro atracado no mesmo porto. Pelo art. 5º do CP e pelas regras do direito internacional, a lei brasileira",
      alternativas: [
        "alcança os dois casos, porque ambos os navios estavam em porto brasileiro",
        "não alcança nenhum dos casos, porque os dois navios são estrangeiros",
        "alcança o navio mercante, mas não o de guerra, que é público",
        "alcança só o de guerra, porque o navio público deve obedecer ao porto",
        "só alcança os dois se a vítima for brasileira e houver representação",
      ],
      correta: 2,
      explicacao:
        "Pelo § 2º do art. 5º, a lei brasileira se aplica a crimes a bordo de embarcações estrangeiras de propriedade privada em porto ou mar territorial do Brasil. O navio público estrangeiro é considerado extensão do Estado de sua bandeira, por reciprocidade com o § 1º.",
      explicacaoErradas:
        "“Alcança os dois casos” ignora a natureza pública do navio de guerra. “Não alcança nenhum” ignora o § 2º. “Só o de guerra” inverte a regra. A condição de “vítima brasileira” não aparece no art. 5º.",
      pegadinha: "O critério não é a bandeira sozinha: é bandeira mais natureza do navio.",
      conhecimento:
        "Em alto-mar, a embarcação privada brasileira é considerada extensão do território nacional (art. 5º, § 1º).",
    },
    {
      topico: "Lei penal em relação às pessoas",
      subassunto: "Imunidade de cônsul e de diplomata",
      dificuldade: 4,
      raciocinio: "Diplomata tem imunidade ampla; cônsul, só nos atos do ofício.",
      enunciado:
        "Em férias e em carro particular, um cônsul estrangeiro causa lesão culposa em acidente em rodovia federal, sem relação com suas funções. Em relação à lei penal brasileira, ele",
      alternativas: [
        "fica sujeito só à lei do seu país, como todo agente consular",
        "só responde se o Itamaraty autorizar a abertura do processo",
        "tem imunidade total enquanto estiver acreditado no Brasil",
        "responde, pois a imunidade consular só cobre atos do ofício",
        "tem imunidade por ser crime culposo, sem dolo contra o Estado",
      ],
      correta: 3,
      explicacao:
        "A Convenção de Viena sobre Relações Consulares protege o cônsul quanto aos atos praticados no exercício da função. Fato particular, em férias, fica sujeito à lei brasileira.",
      explicacaoErradas:
        "“Só à lei do seu país” é a regra do diplomata. Autorização do “Itamaraty” não existe como condição. “Imunidade total” também descreve o diplomata. O fato de ser “crime culposo” não gera imunidade.",
      pegadinha: "Cônsul e diplomata têm regras diferentes, ainda que os dois sejam agentes estrangeiros.",
      conhecimento:
        "A imunidade diplomática alcança os familiares que vivem com o agente e pode ser renunciada pelo Estado acreditante, não pelo próprio agente.",
    },
  ],
};
