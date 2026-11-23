import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-a02",
  resumo: {
    ideia:
      "Tipo textual é o jeito como o texto se organiza (contar, descrever, explicar, convencer, instruir). Gênero é o texto da vida real (notícia, bula, editorial). Um gênero pode misturar vários tipos: vale o que predomina.",
    itens: [
      {
        termo: "Narrativo",
        faz: "Personagens agindo num tempo e num espaço, com verbos de ação, quase sempre no passado. O narrador pode ser personagem (1ª pessoa) ou observador (3ª pessoa).",
      },
      {
        termo: "Discurso direto, indireto e indireto livre",
        faz: "Direto: a fala aparece como foi dita, com travessão ou aspas. Indireto: o narrador conta a fala com as próprias palavras (“disse que...”). Indireto livre: a fala ou o pensamento da personagem entra no meio da narração, sem “disse que” e sem travessão.",
        pista: "Na passagem do direto para o indireto, mudam o tempo (devolvo → devolveria), a pessoa (eu → ele) e as palavras de lugar e tempo (aqui → ali, amanhã → no dia seguinte, este → aquele).",
      },
      {
        termo: "Descritivo",
        faz: "Mostra as características de um ser, objeto ou lugar, com verbos de ligação e adjetivos. Objetiva: como a coisa é. Subjetiva: com as impressões de quem descreve.",
      },
      {
        termo: "Expositivo",
        faz: "Explica um fato, uma ideia ou um processo, em 3ª pessoa, sem tentar convencer. Pode ter dados e etapas sem deixar de ser expositivo.",
      },
      {
        termo: "Argumentativo",
        faz: "Defende uma tese e tenta convencer o leitor. As provas mais comuns são fatos, exemplos, ilustrações, dados estatísticos e testemunho.",
        pista: "Dado estatístico convence mais com fonte e data. Ilustração é um exemplo que vira pequena narrativa e não deve dominar o texto. Testemunho vale quando vem de especialista no tema.",
      },
      {
        termo: "Dedução × indução",
        faz: "Dedução vai do geral para o particular (regra → caso). Indução vai do particular para o geral (casos → regra).",
        pista: "Indução com poucos casos vira generalização excessiva.",
      },
      {
        termo: "Falácias",
        faz: "Generalização excessiva (poucos casos viram regra), simplificação exagerada (solução simples para problema complexo), apelo à autoridade irrelevante (quem fala não entende do tema), falsa analogia (comparar situações diferentes), contra a pessoa (atacar quem fala, não o argumento) e apelo ao absurdo (tirar uma consequência exagerada).",
      },
      {
        termo: "Injuntivo",
        faz: "Ensina ou orienta a fazer algo: verbos no imperativo ou no infinitivo, passos em ordem. Exemplos: receita, manual, bula, regulamento.",
      },
      {
        termo: "Tipo × gênero",
        faz: "Tipos são poucos e definidos pela estrutura da língua. Gêneros são muitos e ligados a uma situação concreta (assunto, finalidade, quem escreve, suporte, estilo).",
      },
      {
        termo: "Gêneros mais cobrados",
        faz: "Editorial: opinião do próprio jornal, sem assinatura. Artigo de opinião: opinião de quem assina, muitas vezes em 1ª pessoa. Notícia: fato contado de forma curta e objetiva (o quê, quem, quando, onde, como, por quê). Reportagem: o fato tratado com mais profundidade. Crônica: texto breve sobre o dia a dia. Conto: narrativa curta com um só conflito.",
      },
    ],
    cuidado:
      "Sequência de etapas não é narração, e número não é argumento por si só. Pergunte qual é a finalidade do texto: contar, mostrar, explicar, convencer ou instruir.",
  },
  questoes: [
    {
      topico: "Tipologias textuais",
      subassunto: "Expositivo × argumentativo",
      dificuldade: 4,
      raciocinio: "Perguntar qual é a finalidade do texto: explicar um processo ou convencer o leitor de uma tese.",
      enunciado:
        "“O radar fixo mede a velocidade por sensores instalados no asfalto. Quando o veículo passa acima do limite, uma câmera fotografa a placa e a imagem segue para o órgão de trânsito, que confere os dados antes de emitir a notificação. No último ano, segundo o órgão, 4% das imagens foram descartadas por falta de nitidez.” O tipo textual predominante no trecho é o:",
      alternativas: ["dissertativo-expositivo.", "dissertativo-argumentativo.", "narrativo.", "injuntivo.", "descritivo."],
      correta: 0,
      explicacao:
        "O trecho explica como funciona o radar, em 3ª pessoa, sem defender opinião. O dado de 4% informa um resultado; não é usado para provar uma tese. Predomina a exposição.",
      explicacaoErradas:
        "Não há tese a defender, então não é argumentativo. As etapas descrevem um processo, sem personagens nem enredo, o que afasta a narração. Não há ordem dada ao leitor, como no injuntivo. O texto não se concentra em mostrar as características de um objeto, como faria a descrição.",
      pegadinha:
        "Ver um dado estatístico e marcar argumentativo, ou ver uma sequência de ações e marcar narrativo. O dado só informa, e a sequência é de um processo, não de uma história.",
      conhecimento:
        "O texto expositivo explica fatos, ideias e processos em 3ª pessoa, sem tentar convencer. Pode trazer dados e etapas.",
    },
    {
      topico: "Tipologia narrativa",
      subassunto: "Do discurso direto para o indireto",
      dificuldade: 5,
      raciocinio: "Ajustar o tempo do verbo, a pessoa e as palavras de lugar e tempo ao momento em que o narrador conta a fala.",
      enunciado:
        "No pátio, o perito disse ao motorista: “Amanhã eu devolvo este documento a você aqui mesmo.” A passagem para o discurso indireto, com os ajustes necessários, é:",
      alternativas: [
        "No pátio, o perito disse ao motorista que amanhã devolveria este documento a ele aqui mesmo.",
        "No pátio, o perito disse ao motorista que no dia seguinte devolve aquele documento a ele ali mesmo.",
        "No pátio, o perito disse ao motorista que no dia seguinte devolveria aquele documento a ele ali mesmo.",
        "No pátio, o perito disse ao motorista que no dia seguinte devolveria este documento a você aqui mesmo.",
        "No pátio, o perito disse ao motorista que no dia anterior devolvera aquele documento a ele ali mesmo.",
      ],
      correta: 2,
      explicacao:
        "O presente “devolvo” passa ao futuro do pretérito “devolveria”; “amanhã” vira “no dia seguinte”; “este” vira “aquele”; “você” vira “ele”; “aqui” vira “ali”.",
      explicacaoErradas:
        "Manter “amanhã”, “este” e “aqui” deixa as palavras presas ao momento da fala. “Devolve” no presente não acompanha o “disse” no passado. Manter “você” não muda a pessoa. “No dia anterior devolvera” coloca a devolução no passado, invertendo o sentido.",
      pegadinha:
        "Lembrar só do tempo do verbo e esquecer os outros ajustes: pessoa, demonstrativo e palavras de lugar e tempo também mudam.",
      conhecimento:
        "Direto → indireto: presente vira pretérito imperfeito, futuro do presente vira futuro do pretérito, eu e você viram ele, este vira aquele, aqui vira ali, amanhã vira no dia seguinte.",
    },
    {
      topico: "Tipologia narrativa",
      subassunto: "Discurso indireto livre",
      dificuldade: 4,
      raciocinio: "Procurar o pensamento da personagem misturado à voz do narrador, sem travessão e sem “disse que”.",
      enunciado: "Assinale o trecho construído em discurso indireto livre.",
      alternativas: [
        "O sargento perguntou ao recruta se ele já tinha almoçado naquele dia tão corrido.",
        "— Já almoçou, recruta? — perguntou o sargento, ainda parado na porta do alojamento.",
        "O sargento disse ao colega: “Estou cansado de esperar o reforço”.",
        "O sargento contou que estava cansado e que esperava o reforço logo.",
        "O sargento olhou o relógio. Mais duas horas de plantão. E o reforço, viria mesmo?",
      ],
      correta: 4,
      explicacao:
        "Depois da ação contada pelo narrador, entram os pensamentos do sargento (“Mais duas horas de plantão. E o reforço, viria mesmo?”) sem verbo de dizer, sem travessão e sem aspas. É o indireto livre.",
      explicacaoErradas:
        "“Perguntou se” e “contou que” são discurso indireto. O travessão e as aspas marcam discurso direto.",
      pegadinha:
        "Procurar travessão ou “disse que” para achar a fala. No indireto livre não há nenhuma dessas marcas: a voz da personagem se mistura à do narrador.",
      conhecimento:
        "O discurso indireto livre junta traços do direto (a fala ou o pensamento como surgem, com pergunta e exclamação) e do indireto (3ª pessoa, verbo no passado, sem marca de fala).",
    },
    {
      topico: "Tipologia argumentativa",
      subassunto: "Evidência das provas",
      dificuldade: 4,
      raciocinio: "Lembrar o que dá força a cada tipo de prova e o limite de cada uma.",
      enunciado:
        "Sobre as provas usadas no texto argumentativo, analise as afirmativas.\n\nI. O dado estatístico convence mais quando informa a fonte e o período da pesquisa.\nII. A ilustração é um exemplo que se alonga em narrativa e deve ocupar a maior parte do texto, para prender o leitor.\nIII. O testemunho tem alto valor de prova quando vem de alguém especialista no tema discutido.\n\nEstá correto o que se afirma em:",
      alternativas: ["Apenas I.", "Apenas II.", "Apenas I e III.", "Apenas II e III.", "I, II e III."],
      correta: 2,
      explicacao:
        "Dado sem fonte perde força, então I está certa. Testemunho de especialista tem alto valor, então III está certa. A ilustração é recurso de apoio e não deve predominar, o que torna II falsa.",
      explicacaoErradas:
        "Ficar só com I esquece o testemunho de autoridade. Qualquer alternativa com II aceita que a ilustração domine o texto, quando ela só apoia a argumentação.",
      pegadinha:
        "A definição de ilustração em II está certa até a vírgula. O erro está no final: a ilustração não deve ocupar a maior parte do texto.",
      conhecimento:
        "Provas mais comuns: fatos (os que mais provam), exemplos, ilustrações, dados estatísticos e testemunho.",
    },
    {
      topico: "Tipologia argumentativa",
      subassunto: "Dedução e indução",
      dificuldade: 4,
      raciocinio: "Ver de onde o raciocínio parte (casos ou regra) e aonde chega.",
      enunciado:
        "“Em três municípios que instalaram lombadas eletrônicas perto de escolas, os atropelamentos caíram. Portanto, lombadas eletrônicas reduzem atropelamentos em qualquer cidade.” Sobre o raciocínio do trecho, é correto afirmar que:",
      alternativas: [
        "é dedutivo, pois parte de uma regra geral para chegar a um caso particular.",
        "é indutivo, pois parte de casos particulares para chegar a uma conclusão geral.",
        "é dedutivo, pois a conclusão decorre necessariamente das premissas apresentadas.",
        "é indutivo, pois parte de uma lei geral e a aplica aos três municípios citados.",
        "não é argumentativo, pois só expõe dados, sem defender nenhuma conclusão.",
      ],
      correta: 1,
      explicacao:
        "O trecho parte de três casos (os municípios) e tira uma regra para todas as cidades. Ir do particular ao geral é indução.",
      explicacaoErradas:
        "Dedução seria o contrário: partir de uma regra geral para um caso. A conclusão não decorre necessariamente dos três casos; ela vai além deles. “Lei geral aplicada aos municípios” descreve dedução, não indução. O “portanto” mostra que há conclusão defendida.",
      pegadinha:
        "Ver uma conclusão firme, com “portanto”, e pensar em dedução. O que define o método é a direção: de casos para regra é indução.",
      conhecimento:
        "Indução: do particular para o geral. Dedução: do geral para o particular. Indução com poucos casos tende à generalização excessiva.",
    },
    {
      topico: "Tipologia argumentativa",
      subassunto: "Simplificação exagerada",
      dificuldade: 5,
      raciocinio: "Ver se o erro está em tirar regra de poucos casos ou em dar solução simples a um problema complexo.",
      enunciado:
        "“Basta instalar câmeras em todas as esquinas para acabar com a violência nas grandes cidades.” O defeito de argumentação presente no trecho é a:",
      alternativas: [
        "generalização excessiva.",
        "falsa analogia.",
        "redução ao absurdo.",
        "simplificação exagerada.",
        "argumentação contra a pessoa.",
      ],
      correta: 3,
      explicacao:
        "Uma única medida é apresentada como solução completa para um problema de muitas causas. Isso é simplificação exagerada.",
      explicacaoErradas:
        "Generalização excessiva tira uma regra de poucos casos, e o trecho não cita casos. Falsa analogia compara situações diferentes. Redução ao absurdo tira uma consequência exagerada de uma hipótese. Contra a pessoa ataca quem fala, e não há pessoa atacada.",
      pegadinha:
        "Marcar generalização por causa de “todas as esquinas”. O “todas” descreve a medida, não uma conclusão tirada de poucos exemplos; o defeito é a solução simplista.",
      conhecimento:
        "Simplificação exagerada: solução muito simples para um problema complexo. Costuma vir com “basta”, “é só” e “se todos fizessem”.",
    },
    {
      topico: "Tipologia argumentativa",
      subassunto: "Falácias",
      dificuldade: 4,
      raciocinio: "Para cada frase, ver onde está a falha: nos poucos casos, na autoridade, na consequência ou no ataque a quem fala.",
      enunciado:
        "Julgue as classificações como verdadeiras (V) ou falsas (F).\n\n( ) “Conheci dois taxistas desonestos; todo taxista é assim.” – generalização excessiva.\n( ) “Se liberarmos música alta no ônibus, logo haverá shows no corredor e ninguém mais conseguirá viajar.” – apelo ao absurdo.\n( ) “Um ator famoso disse que o chá cura a gripe; logo, cura.” – apelo à autoridade irrelevante.\n( ) “Você critica os gastos do governo, mas nem paga suas contas em dia.” – falsa analogia.\n\nA sequência correta, de cima para baixo, é:",
      alternativas: ["V, F, V, V", "V, V, V, F", "F, V, V, F", "V, V, F, V", "F, V, F, F"],
      correta: 1,
      explicacao:
        "Dois casos viram regra para todos (generalização). Uma hipótese leva a uma consequência exagerada (apelo ao absurdo). Um ator não é especialista em saúde (autoridade irrelevante). A última ataca a pessoa, não o argumento: é contra a pessoa (ad hominem), e não falsa analogia.",
      explicacaoErradas:
        "Marcar F na segunda esquece que a consequência exagerada caracteriza o apelo ao absurdo. Marcar F na terceira esquece que a autoridade precisa entender do tema. Marcar V na última aceita “falsa analogia” para um ataque pessoal.",
      pegadinha:
        "A última frase parece comparar a pessoa com o governo. Não há comparação de situações: há ataque a quem argumenta.",
      conhecimento:
        "Contra a pessoa (ad hominem): desqualifica quem fala em vez de responder ao argumento. Falsa analogia: compara situações diferentes como se fossem iguais.",
    },
    {
      topico: "Gêneros textuais",
      subassunto: "Gêneros jornalísticos",
      dificuldade: 4,
      raciocinio: "Lembrar, para cada gênero, de quem é a opinião e quão aprofundado é o texto.",
      enunciado: "Sobre os gêneros textuais, assinale a alternativa correta.",
      alternativas: [
        "O artigo de opinião expressa a posição do veículo que o publica, e não a de quem o assina.",
        "A reportagem trata o fato de forma mais breve e menos aprofundada que a notícia.",
        "A crônica é um texto técnico, de tipo predominantemente injuntivo e impessoal.",
        "O editorial defende o ponto de vista do próprio jornal e costuma vir sem assinatura.",
        "A notícia tem como marca o uso da primeira pessoa e das opiniões do repórter.",
      ],
      correta: 3,
      explicacao:
        "O editorial é a voz do jornal ou da empresa jornalística sobre um tema; por isso, em geral, não traz assinatura de um autor.",
      explicacaoErradas:
        "O artigo de opinião expressa a posição de quem assina, não a do veículo. A reportagem é mais aprofundada que a notícia. A crônica é literária, breve e tirada do cotidiano. A notícia é objetiva, em 3ª pessoa, sem opinião do repórter.",
      pegadinha:
        "Trocar editorial e artigo de opinião. Os dois são argumentativos; a diferença é de quem é a opinião: do jornal (editorial) ou do autor (artigo).",
      conhecimento:
        "Editorial e artigo de opinião são dissertativo-argumentativos. Notícia e reportagem são relatos de fatos; a reportagem aprofunda.",
    },
    {
      topico: "Gêneros textuais",
      subassunto: "Tipo × gênero",
      dificuldade: 4,
      raciocinio: "Separar a estrutura da língua (tipo) da situação concreta de comunicação (gênero) e lembrar que os tipos se misturam.",
      enunciado:
        "Analise as afirmativas sobre tipos e gêneros textuais.\n\nI. Os tipos textuais são poucos e se definem pela estrutura da língua; os gêneros são numerosos e ligados a situações concretas de comunicação.\nII. Um mesmo gênero pode reunir várias sequências de tipos, e sua classificação segue a que predomina.\nIII. Bula de remédio e manual de instruções são do tipo injuntivo, por isso não podem trazer trechos descritivos.\n\nEstá correto o que se afirma em:",
      alternativas: ["Apenas I e II.", "Apenas I.", "Apenas II e III.", "Apenas III.", "I, II e III."],
      correta: 0,
      explicacao:
        "I e II descrevem bem a diferença: tipo é estrutura, gênero é uso, e os tipos se misturam dentro de um gênero. III erra: a bula é predominantemente injuntiva, mas descreve o remédio (composição, aparência), e o manual descreve o aparelho.",
      explicacaoErradas:
        "Ficar só com I esquece que os tipos se misturam no mesmo gênero. Qualquer alternativa com III aceita que um texto injuntivo não pode ter descrição, o que não é verdade.",
      pegadinha:
        "O “por isso” em III transforma a predominância em exclusividade. Predominar um tipo não impede que outros apareçam.",
      conhecimento:
        "Gênero é identificado por assunto, finalidade, participantes, estrutura, suporte e estilo. Tipo é identificado pela estrutura linguística (tempos verbais, relações lógicas, vocabulário).",
    },
    {
      topico: "Tipologia descritiva",
      subassunto: "Descrição objetiva × subjetiva",
      dificuldade: 4,
      raciocinio: "Ver se o trecho mostra só como a coisa é ou se traz impressões de quem descreve.",
      enunciado:
        "Leia os trechos.\n\nI. “A viatura é branca, tem quatro portas, faixas azuis e um giroflex no teto.”\nII. “A velha viatura, cansada de tantas rondas, parecia gemer a cada buraco da estrada.”\n\nAssinale a análise correta.",
      alternativas: [
        "I é descrição subjetiva, pois quem descreve escolhe as características que quer mostrar.",
        "II é narração, pois o verbo “gemer” indica a ação de uma personagem da história.",
        "I e II são descrições objetivas, pois tratam do mesmo veículo, que é concreto.",
        "II é dissertação argumentativa, pois revela a opinião de quem escreve sobre o carro.",
        "I é descrição objetiva; II é descrição subjetiva, com impressões de quem descreve.",
      ],
      correta: 4,
      explicacao:
        "I lista características que qualquer pessoa veria. II atribui cansaço e gemido ao carro (personificação) e usa “velha” e “parecia”: são impressões de quem descreve, marca da descrição subjetiva.",
      explicacaoErradas:
        "Escolher características não torna a descrição subjetiva; o que a torna subjetiva é a impressão pessoal. “Parecia gemer” é imagem, não ação de personagem num enredo. Descrever algo concreto não garante objetividade. Impressão pessoal não é tese defendida com argumentos.",
      pegadinha:
        "Ver o verbo “gemer” e pensar em narração. Em II não há fatos encadeados no tempo; há uma imagem que caracteriza o carro.",
      conhecimento:
        "Descrição objetiva: o ser como é, sem julgamento. Descrição subjetiva: com impressões, adjetivos avaliativos e figuras de linguagem.",
    },
  ],
};
