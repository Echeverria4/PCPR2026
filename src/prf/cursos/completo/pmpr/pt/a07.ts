import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-a07",
  resumo: {
    ideia:
      "Sintaxe do período simples, parte 1: frase, oração e período; os tipos de sujeito; os três tipos de predicado; e os termos que a prova mais confunde (predicativo, adjunto, aposto e vocativo).",
    itens: [
      {
        termo: "Frase, oração e período",
        faz: "Frase é qualquer enunciado que comunica, com ou sem verbo (“Silêncio!”). Oração tem verbo flexionado. Período é a frase com uma oração (simples) ou mais (composto).",
        pista: "Locução verbal conta como um verbo só: “vai chegar” e “havia tido” formam uma oração só.",
      },
      {
        termo: "Tipos de frase",
        faz: "Declarativa (informa), interrogativa direta (“Você viu?”) ou indireta (“Quero saber quem viu”), exclamativa (emoção), optativa (desejo: “Deus te ajude”) e imperativa (ordem ou pedido).",
      },
      {
        termo: "Ordem dos termos",
        faz: "Mudar uma palavra de lugar pode mudar o sentido. “Apenas a Maria usou o uniforme” (ninguém mais usou) × “A Maria apenas usou o uniforme” (ela só fez isso).",
      },
      {
        termo: "Sujeito simples e composto",
        faz: "Simples: um núcleo, mesmo no plural (“Os amigos do Pedro chegaram”). Composto: dois ou mais núcleos (“O delegado e o escrivão chegaram”).",
        pista: "Plural não é composto. Conte os núcleos, não as palavras.",
      },
      {
        termo: "Sujeito oculto",
        faz: "Não aparece escrito, mas a terminação do verbo mostra quem é: “Ficamos de plantão” (nós).",
      },
      {
        termo: "Sujeito indeterminado",
        faz: "Existe, mas não se sabe ou não se quer dizer quem é. Duas formas: verbo na 3ª do plural sem referente (“Disseram que a ponte vai fechar”) ou verbo intransitivo ou transitivo indireto + se, sempre no singular (“Precisa-se de motoristas”).",
        pista: "Verbo transitivo direto + se é passiva: “Vendem-se carros” tem sujeito (carros).",
      },
      {
        termo: "Oração sem sujeito",
        faz: "Verbo impessoal, sempre na 3ª do singular: fenômenos da natureza (choveu, anoiteceu), “fazer” e “haver” indicando tempo (“Faz dois anos”), “haver” no sentido de existir (“Houve denúncias”) e “bastar” ou “chegar” + de (“Basta de brigas”).",
        pista: "O auxiliar de “haver” impessoal também fica no singular: “Deve haver testemunhas”. Já “existir” concorda: “Existem testemunhas”.",
      },
      {
        termo: "Sujeito oracional",
        faz: "O sujeito pode ser uma oração com infinitivo: “Comer frituras não é saudável”, “Cumpre respeitar os prazos”. Pergunte: o que é que não é saudável?",
      },
      {
        termo: "Predicado nominal",
        faz: "Verbo de ligação + predicativo do sujeito. A informação está no nome: “A testemunha parecia nervosa”.",
      },
      {
        termo: "Predicado verbal",
        faz: "O núcleo é um verbo nocional. Intransitivo: sem complemento (“João dormiu”). Transitivo direto: sem preposição (“tomei o café”). Indireto: com preposição (“obedecia aos superiores”). Direto e indireto: os dois (“entregou a apostila aos alunos”).",
      },
      {
        termo: "Predicado verbo-nominal",
        faz: "Dois núcleos: um verbo nocional e um predicativo. Do sujeito: “Os soldados voltaram exaustos”. Do objeto: “O juiz considerou a prova ilícita”.",
      },
      {
        termo: "Predicativo × adjunto adnominal",
        faz: "Troque o objeto por pronome. Se o termo fica de fora, é predicativo: “tornar a lei mais rigorosa” → “torná-la mais rigorosa”. Se vai junto, é adjunto: “encontrei a viatura nova” → “encontrei-a”.",
        pista: "“Devolvi a revista rasgada” tem duas leituras: rasgada antes (adjunto) ou ao ser devolvida (predicativo).",
      },
      {
        termo: "Aposto e vocativo",
        faz: "Aposto explica ou resume um termo da frase e se refere ao mesmo ser (“Ela, a perita, chegou”). Vocativo é o chamado de quem ouve e fica solto na frase, sem função sintática (“Ouça, cidadão, as orientações”).",
      },
    ],
  },
  questoes: [
    {
      topico: "Sujeito",
      subassunto: "Sujeito indeterminado",
      dificuldade: 5,
      raciocinio: "Ver a transitividade do verbo com “se” e procurar um ser que manda no verbo.",
      enunciado: "Assinale a frase em que o sujeito é indeterminado.",
      alternativas: [
        "Vendem-se viaturas usadas no leilão anual do batalhão.",
        "Precisa-se de motoristas habilitados na categoria D.",
        "Houve várias denúncias anônimas durante a madrugada.",
        "Chegaram ao quartel, enfim, os novos recrutas da turma.",
        "Faz dois anos que a ocorrência foi registrada na delegacia.",
      ],
      correta: 1,
      explicacao: "“Precisar” pede preposição (precisar de alguém). Verbo transitivo indireto + se, no singular, indetermina o sujeito: alguém precisa, mas não se diz quem.",
      explicacaoErradas:
        "“Vendem-se viaturas” é passiva sintética, com o sujeito “viaturas”. “Houve” (existir) e “Faz dois anos” são impessoais, sem sujeito. Em “Chegaram os novos recrutas”, o sujeito é simples e vem depois do verbo.",
      pegadinha: "As duas frases com “se” parecem iguais. Só a de verbo sem preposição (vender algo) é passiva com sujeito.",
      conhecimento: "Verbo intransitivo ou transitivo indireto + se, sempre no singular = sujeito indeterminado (“Vive-se bem aqui”, “Trata-se de casos graves”).",
    },
    {
      topico: "Sujeito",
      subassunto: "Oração sem sujeito",
      dificuldade: 5,
      raciocinio: "Separar os verbos impessoais (que ficam no singular) dos que têm sujeito e precisam concordar.",
      enunciado: "Assinale a frase escrita de acordo com a norma-padrão quanto à concordância do verbo.",
      alternativas: [
        "Fazem três meses que a viatura aguarda o conserto.",
        "Houveram muitas reclamações sobre o atendimento noturno.",
        "Existe, ainda hoje, poucos postos de fiscalização na via.",
        "Deve haver outras testemunhas do acidente na avenida.",
        "Chegou, ontem à tarde, os laudos da perícia criminal.",
      ],
      correta: 3,
      explicacao: "“Haver” no sentido de existir não tem sujeito e fica no singular. O auxiliar ao lado dele também fica: “deve haver testemunhas”.",
      explicacaoErradas:
        "“Fazer” indicando tempo é impessoal: “Faz três meses”. “Haver” = existir não vai ao plural: “Houve reclamações”. “Existir” tem sujeito e concorda: “Existem poucos postos”. “Os laudos” é o sujeito de “chegar”, posto depois do verbo: “Chegaram os laudos”.",
      pegadinha: "“Existir” e “haver” têm o mesmo sentido, mas só “existir” vai ao plural.",
      conhecimento: "Impessoais ficam na 3ª do singular, e o auxiliar acompanha: “Vai fazer dez anos”, “Pode haver falhas”.",
    },
    {
      topico: "Predicativo",
      subassunto: "Predicativo do objeto × adjunto adnominal",
      dificuldade: 5,
      raciocinio: "Trocar o objeto por pronome e ver se o adjetivo fica de fora (predicativo) ou vai junto (adjunto).",
      enunciado:
        "Analise as afirmativas.\nI. Em “Os jurados consideraram o réu culpado”, o termo “culpado” é predicativo do objeto.\nII. Em “O policial encontrou a porta arrombada”, há duas leituras: a porta que já estava arrombada ou a porta encontrada nesse estado.\nIII. Em “Tornaram a lei mais rigorosa”, a troca por “Tornaram-na mais rigorosa” mostra que “mais rigorosa” é adjunto adnominal de “lei”.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I e II.", "Apenas I.", "Apenas II e III.", "Apenas I e III.", "I, II e III."],
      correta: 0,
      explicacao: "Em I, “culpado” fica de fora ao trocar o objeto por pronome (“consideraram-no culpado”): é predicativo. Em II, cabem as duas leituras, adjunto (a porta arrombada foi encontrada) e predicativo (encontrou-a arrombada).",
      explicacaoErradas:
        "III está errada: como “mais rigorosa” sobra fora do pronome (“torná-la mais rigorosa”), é predicativo do objeto, não adjunto. Por isso, as opções que incluem III ou deixam II de fora não servem.",
      pegadinha: "III usa o teste certo e tira a conclusão errada. Quando o termo sobra fora do pronome, ele é predicativo.",
      conhecimento: "Predicativo do objeto aparece com verbos como considerar, julgar, tornar, eleger, nomear e achar.",
    },
    {
      topico: "Predicado",
      subassunto: "Tipos de predicado",
      dificuldade: 4,
      raciocinio: "Achar o núcleo: só o nome (nominal), só o verbo (verbal) ou os dois (verbo-nominal).",
      enunciado:
        "Julgue as afirmativas em verdadeiras (V) ou falsas (F).\n( ) Em “A testemunha parecia nervosa”, o predicado é nominal.\n( ) Em “Os soldados voltaram exaustos da missão”, o predicado é verbo-nominal.\n( ) Em “O juiz considerou a prova ilícita”, o predicado é nominal.\n( ) Em “Os moradores elegeram o vizinho síndico”, o predicado é verbal, pois não há predicativo.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, F, V, F.", "F, V, F, V.", "V, V, F, F.", "V, V, V, F.", "F, F, V, V."],
      correta: 2,
      explicacao: "“Parecer” é verbo de ligação, e a informação está em “nervosa”: predicado nominal. “Voltaram” é verbo nocional e “exaustos” diz como os soldados estavam: verbo-nominal. As duas primeiras são verdadeiras.",
      explicacaoErradas:
        "“Considerou” é nocional e “ilícita” é predicativo do objeto: verbo-nominal, não nominal. Em “elegeram o vizinho síndico”, “síndico” é predicativo do objeto, então o predicado é verbo-nominal e a última é falsa.",
      pegadinha: "Predicativo do objeto não aparece em predicado nominal. Verbo nocional + predicativo é sempre verbo-nominal.",
      conhecimento: "Verbos de ligação: ser, estar, parecer, ficar, permanecer, continuar, andar (no sentido de estar) e tornar-se.",
    },
    {
      topico: "Termos da oração",
      subassunto: "Vocativo × aposto",
      dificuldade: 4,
      raciocinio: "Procurar o termo que chama quem ouve e que fica solto, sem ligação com o verbo.",
      enunciado: "Assinale a frase em que há vocativo.",
      alternativas: [
        "O comandante, oficial com vinte anos de carreira, discursou.",
        "Ofereceram-lhe duas opções: transferência ou licença.",
        "Ela – a perita – chegou antes de todos ao local do crime.",
        "Cidadão de bem também precisa respeitar as leis de trânsito.",
        "Ouça, cidadão, as orientações do agente de trânsito.",
      ],
      correta: 4,
      explicacao: "“Cidadão”, entre vírgulas, é a pessoa a quem se fala. Não é sujeito nem complemento de “ouça”: é vocativo.",
      explicacaoErradas:
        "“Oficial com vinte anos de carreira”, “transferência ou licença” e “a perita” explicam outro termo da frase e se referem ao mesmo ser: são apostos. Em “Cidadão de bem também precisa…”, o termo é o sujeito de “precisa”.",
      pegadinha: "A frase com “Cidadão de bem” no começo parece um chamado, mas é de quem se fala, não com quem se fala.",
      conhecimento: "O vocativo vem sempre separado por vírgula e pode ir no começo, no meio ou no fim da frase.",
    },
    {
      topico: "Sujeito",
      subassunto: "Classificação do sujeito",
      dificuldade: 5,
      raciocinio: "Perguntar ao verbo “quem é que…?” em cada frase e conferir a classificação dada.",
      enunciado: "Assinale a alternativa em que o sujeito está corretamente classificado.",
      alternativas: [
        "Em “Cumpre respeitar os prazos legais”, o sujeito é a oração “respeitar os prazos legais”.",
        "Em “Chegaram as viaturas novas ao pátio”, o sujeito é oculto, pois não aparece antes do verbo.",
        "Em “Ficamos de plantão a noite inteira”, o sujeito é indeterminado, pois não está escrito.",
        "Em “Anoiteceu antes do fim das buscas na mata”, o sujeito é “as buscas”, posto depois do verbo.",
        "Em “Disseram que a ponte vai fechar amanhã”, o sujeito é oculto, pois o verbo indica “eles”.",
      ],
      correta: 0,
      explicacao: "O que é que cumpre? “Respeitar os prazos legais”. O sujeito é uma oração com o verbo no infinitivo: sujeito oracional.",
      explicacaoErradas:
        "“As viaturas novas” é sujeito simples, só que depois do verbo. “Ficamos” mostra o sujeito “nós”: oculto. “Anoiteceu” é fenômeno da natureza, sem sujeito. “Disseram”, sem ninguém a quem se refira, deixa o sujeito indeterminado.",
      pegadinha: "Sujeito oculto e indeterminado se confundem. No oculto, a terminação diz quem é; no indeterminado, ninguém sabe quem foi.",
      conhecimento: "Sujeito oracional: “Importa descobrir a causa”, “Convém chegar cedo”, “É necessário agir”.",
    },
    {
      topico: "Ordem dos termos",
      subassunto: "Posição da palavra e sentido",
      dificuldade: 4,
      raciocinio: "Ver a que termo a palavra “apenas” se liga em cada posição.",
      enunciado:
        "Compare as frases.\nI. Apenas o soldado conferiu o armamento.\nII. O soldado apenas conferiu o armamento.\nAssinale a leitura correta.",
      alternativas: [
        "As duas têm o mesmo sentido, pois mudou só a posição de uma palavra da frase.",
        "Em I, o soldado só conferiu; em II, ninguém além dele conferiu o armamento.",
        "Em I, ninguém além do soldado conferiu; em II, ele só conferiu, sem outra ação.",
        "Em I, o soldado conferiu só o armamento; em II, ninguém além dele o conferiu.",
        "Em II, há erro de colocação, pois “apenas” não pode vir antes do verbo da frase.",
      ],
      correta: 2,
      explicacao: "Em I, “apenas” se liga a “o soldado”: só ele conferiu. Em II, liga-se a “conferiu”: essa foi a única ação dele (não limpou nem guardou, por exemplo).",
      explicacaoErradas:
        "O sentido muda, então as frases não são iguais. Inverter as leituras ou ligar “apenas” a “o armamento” não corresponde a nenhuma das duas. “Apenas” pode vir antes do verbo sem erro nenhum.",
      pegadinha: "Palavras como “apenas”, “só” e “até” mudam o sentido conforme o termo que ficam ao lado.",
      conhecimento: "Questões de reescrita costumam trocar a posição de “apenas”, “só”, “também” e “até” para ver se você nota a mudança de sentido.",
    },
    {
      topico: "Frase",
      subassunto: "Tipos de frase",
      dificuldade: 4,
      raciocinio: "Ligar cada frase à intenção de quem fala: informar, perguntar, desejar ou mandar.",
      enunciado:
        "Associe cada tipo de frase ao exemplo.\n1. Declarativa\n2. Interrogativa indireta\n3. Optativa\n4. Imperativa\n( ) Quero saber quem deixou o portão aberto.\n( ) Bons ventos tragam a tropa de volta em segurança.\n( ) Desliguem os celulares antes da audiência.\n( ) O plantão começa às sete horas.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 3, 4, 2.", "2, 3, 4, 1.", "2, 4, 3, 1.", "1, 4, 3, 2.", "3, 2, 4, 1."],
      correta: 1,
      explicacao: "“Quero saber quem…” é uma pergunta feita sem ponto de interrogação: interrogativa indireta (2). “Bons ventos tragam…” expressa desejo: optativa (3). “Desliguem…” é ordem: imperativa (4). “O plantão começa…” só informa: declarativa (1).",
      explicacaoErradas:
        "Pôr a primeira frase como declarativa ignora que ela pergunta algo. Trocar optativa e imperativa confunde desejo com ordem: “tragam” ali é desejo, não ordem a alguém.",
      pegadinha: "A interrogativa indireta não tem ponto de interrogação, por isso parece declarativa.",
      conhecimento: "Optativa expressa desejo e usa o subjuntivo: “Deus te ajude”, “Que vença o melhor”.",
    },
    {
      topico: "Frase",
      subassunto: "Frase, oração e período",
      dificuldade: 5,
      raciocinio: "Contar os verbos, lembrando que a locução verbal vale como um só.",
      enunciado:
        "Analise as afirmativas.\nI. “Silêncio no plenário!” é frase nominal, pois não tem verbo.\nII. “O réu vai ser ouvido amanhã” tem duas orações, porque há mais de um verbo.\nIII. O período composto tem duas ou mais orações.\nIV. Em “Ele havia tido sorte”, “havia tido” equivale a uma só forma verbal (“tivera”) e forma uma oração só.\nEstá correto o que se afirma em",
      alternativas: ["Apenas II, III e IV.", "Apenas II e IV.", "Apenas I, II e III.", "Apenas III e IV.", "Apenas I, III e IV."],
      correta: 4,
      explicacao: "I, III e IV estão certas. Frase sem verbo é nominal; período composto é o que tem mais de uma oração; e a locução “havia tido” vale como um verbo só (“tivera”).",
      explicacaoErradas:
        "II está errada: “vai ser ouvido” é uma locução verbal, que conta como um verbo só. A frase tem uma oração. As opções com II ou sem IV não servem.",
      pegadinha: "Contar verbo por verbo leva ao erro. Auxiliar + verbo principal formam um núcleo só.",
      conhecimento: "Cada oração tem um verbo ou uma locução verbal. Conte os núcleos, não as palavras que parecem verbo.",
    },
    {
      topico: "Sujeito",
      subassunto: "Sujeito simples × composto",
      dificuldade: 4,
      raciocinio: "Contar quantos núcleos o sujeito tem, sem se guiar pelo plural.",
      enunciado: "Assinale a frase em que o sujeito é composto.",
      alternativas: [
        "Os agentes da guarda e da defesa civil chegaram juntos.",
        "Os peritos do instituto de criminalística chegaram bem cedo.",
        "Chegou a equipe de resgate com dois cães farejadores.",
        "O delegado e o escrivão assinaram o termo de depoimento.",
        "Nós ficamos responsáveis pela guarda dos presos à noite.",
      ],
      correta: 3,
      explicacao: "O sujeito tem dois núcleos, “delegado” e “escrivão”: é composto.",
      explicacaoErradas:
        "Em “Os agentes da guarda e da defesa civil”, o núcleo é só “agentes”; “da guarda e da defesa civil” apenas o especifica. “Os peritos…”, “a equipe de resgate” e “nós” também têm um núcleo só: sujeito simples.",
      pegadinha: "O “e” na primeira frase liga “da guarda” e “da defesa civil”, não dois núcleos do sujeito.",
      conhecimento: "Sujeito simples pode estar no plural (“Os peritos chegaram”). Composto é o que tem mais de um núcleo.",
    },
  ],
};
