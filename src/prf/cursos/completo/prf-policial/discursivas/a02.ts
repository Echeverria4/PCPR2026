import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "discursivas-02",
  resumo: {
    ideia:
      "Uma boa dissertação segue os 5 Cs (clareza, concisão, correção, coerência e coesão), respeita o tipo de texto que o comando pede e tem estrutura clara: introdução com tema e tese, desenvolvimento com um bloco por ideia e fechamento que retoma ou avança. A prova começa na leitura do enunciado.",
    itens: [
      {
        termo: "Os 5 Cs",
        faz: "Clareza (simples é melhor que rebuscado); concisão (economia de palavras, sem repetir ideias); correção (norma culta); coerência (o texto faz sentido); coesão (ligação linguística entre as partes).",
        pista: "Concisão demais vira laconismo, e o texto fica obscuro.",
      },
      {
        termo: "Tipos de coerência",
        faz: "Sintática: palavras e conectores na ordem certa. Semântica: sentido sem contradição. Temática: todas as ideias respondem ao tema pedido; falhar aqui pode zerar a nota por fuga ao tema.",
      },
      {
        termo: "Coesão",
        faz: "A amarração das ideias por pronomes, conectivos, advérbios e sinônimos. Conector mal escolhido quebra também o sentido.",
      },
      {
        termo: "Tipologia",
        faz: "Dissertação argumentativa (convencer, com dados e opiniões), dissertação expositiva (explicar com coerência), questão discursiva e estudo de caso (espécies da expositiva). Quem define o tipo é o comando da questão.",
      },
      {
        termo: "Tipos de argumento",
        faz: "Autoridade (especialista ou instituição reconhecida); consenso (verdade aceita por todos, sem precisar de fonte, mas sem cair no senso comum); comprovação por documentação (leis, doutrina, jurisprudência, dados), o mais usado em concursos; fundamentação lógica (causa e efeito).",
      },
      {
        termo: "Tópico frasal",
        faz: "A primeira frase do parágrafo, que resume em até duas ou três orações a ideia que ele vai desenvolver.",
      },
      {
        termo: "Assunto x tema",
        faz: "Assunto é o campo geral; tema é o recorte pedido. O tema precisa aparecer de forma expressa já na introdução.",
      },
      {
        termo: "Tese x pressuposto orientador",
        faz: "Na argumentativa, a tese é a posição defendida, sem imparcialidade; contra-argumento só entra para ser refutado. Na expositiva, o pressuposto orientador anuncia o rumo da exposição.",
      },
      {
        termo: "Tipos de introdução",
        faz: "Básica (tema e tese); roteiro (lista os tópicos, e todos devem ser desenvolvidos); parafraseada (comum em estudo de caso); conceito; oposição (traz uma ideia contrária para refutá-la); citação de lei, doutrina ou jurisprudência; questionamento (a pergunta precisa ser respondida no texto).",
      },
      {
        termo: "Tipos de desenvolvimento",
        faz: "Explicação ou fundamentação (o mais usado); causa e consequência (em parágrafos separados); ordem cronológica (passado, presente e futuro). O desenvolvimento nasce do que a introdução anunciou.",
      },
      {
        termo: "Tipos de fechamento",
        faz: "Reforço ou retorno (retoma a tese); avanço (propõe solução ligada ao que foi discutido, comum em estudos de caso); expansão (quando falta espaço, liga-se ao último parágrafo e esgota a discussão).",
      },
      {
        termo: "Protótipo de 30 linhas",
        faz: "Quatro parágrafos: introdução (5 a 7 linhas), dois de desenvolvimento (6 a 8 linhas cada) e um último (5 a 7 linhas) que traz o terceiro elemento e fecha o texto.",
      },
      {
        termo: "Brainstorming",
        faz: "Pôr no papel tudo o que vier à cabeça sobre o tema: acalma no “branco” e organiza quando há ideias demais. Depois, escolher o que entra no texto.",
      },
    ],
    cuidado:
      "O material chama de “experiência ou observação” o argumento apoiado em leis, doutrina e jurisprudência; o conteúdo descrito é o de comprovação por documentação. Guarde a função: dados e normas que comprovam a afirmação.",
  },
  questoes: [
    {
      topico: "Estrutura da dissertação",
      subassunto: "Concisão e laconismo",
      dificuldade: 5,
      raciocinio: "Economia verbal extrema = laconismo, que prejudica a clareza.",
      enunciado:
        "Querendo ser conciso, um candidato corta tanto as frases da sua dissertação sobre fiscalização nas rodovias que elas ficam vagas, e o corretor não entende a relação entre as ideias. Pela técnica dos 5 Cs, o problema é o:",
      alternativas: [
        "excesso de clareza, porque frases curtas sempre deixam o texto óbvio demais para o examinador",
        "laconismo, porque a economia verbal levada ao extremo tornou o texto obscuro para o leitor",
        "erro de correção, porque cortar palavras é sempre um desvio da norma culta da língua portuguesa",
        "erro de coesão apenas, já que a concisão nunca interfere no sentido daquilo que o texto comunica",
        "excesso de prolixidade, porque o texto repete a mesma ideia em vários parágrafos com outras palavras",
      ],
      correta: 1,
      explicacao:
        "Concisão é dizer o necessário sem repetir ideias. Levada ao extremo, vira laconismo: o texto fica tão enxuto que perde clareza e o leitor não acompanha o raciocínio.",
      explicacaoErradas:
        "Frases curtas não geram “excesso de clareza”; o problema foi a falta dela. Cortar palavras não é, por si, “um desvio da norma culta”. É falso que “a concisão nunca interfere no sentido”. E a prolixidade é o contrário do que ocorreu, pois o texto “repete a mesma ideia” não descreve o caso.",
      pegadinha: "Pensar que quanto mais curto, melhor; a concisão tem limite na clareza.",
      conhecimento: "Clareza e concisão andam juntas: economia de palavras sem perda de sentido.",
    },
    {
      topico: "Estrutura da dissertação",
      subassunto: "Coerência semântica",
      dificuldade: 5,
      raciocinio: "Contradição de sentido com a realidade = incoerência semântica.",
      enunciado:
        "Em um texto sobre violência no trânsito, o candidato escreve: “Entre as infrações de menor risco nas rodovias, destacam-se a embriaguez ao volante e o excesso de velocidade.” A frase está bem construída, mas apresenta:",
      alternativas: [
        "incoerência sintática, porque as palavras estão fora de ordem e a frase não pode ser lida",
        "incoerência temática, porque falar de embriaguez é fuga ao tema de violência no trânsito",
        "falha só de coesão, porque falta um conector entre as duas infrações citadas no período",
        "incoerência semântica, porque o sentido contradiz a realidade das infrações citadas",
        "falta de concisão, porque o período cita duas infrações quando bastaria mencionar uma delas",
      ],
      correta: 3,
      explicacao:
        "A coerência semântica cuida da relação de sentido. Chamar embriaguez e excesso de velocidade de infrações “de menor risco” contradiz a realidade, embora a frase esteja gramaticalmente bem montada.",
      explicacaoErradas:
        "A ordem das palavras está correta, então não há “incoerência sintática”. Embriaguez ao volante é parte do tema, por isso não há “fuga ao tema”. A ligação entre as infrações já está feita por uma conjunção aditiva, logo não “falta um conector”. Citar duas infrações não fere a concisão.",
      pegadinha: "Achar que frase gramaticalmente correta é sempre coerente.",
      conhecimento: "Os três tipos de coerência se afetam: um erro sintático costuma estragar também o sentido.",
    },
    {
      topico: "Estrutura da dissertação",
      subassunto: "Coerência temática",
      dificuldade: 4,
      raciocinio: "Ideias fora do recorte pedido = incoerência temática, risco de nota zero.",
      enunciado:
        "O tema pedido é “as causas da violência urbana no Brasil”. Um candidato dedica dois dos três parágrafos de desenvolvimento à superlotação dos presídios e à reinserção social do preso. O texto apresenta:",
      alternativas: [
        "incoerência temática, pois as ideias fogem do que foi pedido e podem levar à nota zero",
        "nenhum problema, porque qualquer argumento ligado à segurança pública serve para o tema",
        "incoerência sintática, porque o assunto carcerário exige outra ordem das palavras no período",
        "falta de correção gramatical, já que o tema prisional pede vocabulário jurídico mais formal",
        "erro de tipologia, porque o sistema prisional só pode ser tratado em dissertação expositiva",
      ],
      correta: 0,
      explicacao:
        "Na coerência temática, todas as ideias precisam ser pertinentes ao que foi pedido. Superlotação e reinserção do preso não respondem às causas da violência urbana; o desvio pode gerar nota zero por fuga ao tema.",
      explicacaoErradas:
        "Não basta o argumento estar ligado à área, como diz “qualquer argumento ligado à segurança pública serve”. A ordem das palavras não depende do assunto, então não é “incoerência sintática”. O problema não é de vocabulário. E não existe regra de que o tema prisional “só pode ser tratado em dissertação expositiva”.",
      pegadinha: "Confundir assunto amplo (segurança pública) com o tema delimitado (causas da violência urbana).",
      conhecimento: "Coerência temática: responder exatamente ao recorte que o comando pede.",
    },
    {
      topico: "Estrutura da dissertação",
      subassunto: "Tipologia e comando",
      dificuldade: 4,
      raciocinio: "O comando define o tipo de texto; a avaliação começa no enunciado.",
      enunciado: "Sobre a tipologia cobrada em provas discursivas, está correto afirmar que:",
      alternativas: [
        "o estudo de caso e a questão discursiva são modelos de dissertação argumentativa, que exige tese pessoal",
        "na dissertação expositiva o candidato precisa convencer o examinador com dados e opiniões de autoridade",
        "os textos cobrados são sempre puros, e misturar exposição com argumentação leva à nota zero",
        "a tipologia é escolhida pelo candidato, desde que o texto respeite o número mínimo de linhas",
        "é o comando da questão que define o tipo de texto, e a avaliação começa pela leitura desse comando",
      ],
      correta: 4,
      explicacao:
        "Os textos costumam ser mistos, e quem define o tipo pedido é o comando. Por isso a avaliação começa na interpretação do enunciado.",
      explicacaoErradas:
        "Estudo de caso e questão discursiva pertencem à dissertação expositiva, não “de dissertação argumentativa”. Na expositiva basta explicar com coerência; quem precisa “convencer o examinador” é a argumentativa. Os textos costumam ser mistos, então é falso que “são sempre puros”. E a tipologia não “é escolhida pelo candidato”.",
      pegadinha: "Achar que o candidato escolhe o tipo de texto; quem escolhe é o comando.",
      conhecimento: "Argumentativa: persuadir. Expositiva: explicar.",
    },
    {
      topico: "Estrutura da dissertação",
      subassunto: "Tese e pressuposto orientador",
      dificuldade: 5,
      raciocinio: "Texto expositivo: pressuposto orientador, não tese.",
      enunciado:
        "Uma questão pede que o candidato explique as atribuições da PRF previstas na Constituição e na legislação de trânsito, sem pedir opinião. Na introdução, depois de apresentar o tema, o candidato deve trazer:",
      alternativas: [
        "uma tese pessoal, a favor ou contra, porque toda dissertação exige tomar partido sobre o tema",
        "uma lista de contra-argumentos sem refutação, para mostrar total imparcialidade ao corretor",
        "um pressuposto orientador, que anuncia o rumo da exposição sem precisar defender opinião",
        "uma pergunta retórica, que pode ficar sem resposta ao longo do texto para estimular o leitor",
        "um título em frase nominal, já que o texto expositivo exige o assunto destacado no topo da folha",
      ],
      correta: 2,
      explicacao:
        "Quando o comando pede exposição, a introdução traz o tema e o pressuposto orientador, que indica o caminho que o texto vai seguir. A tese, com posição defendida, é própria da argumentativa.",
      explicacaoErradas:
        "Nem toda dissertação exige “tomar partido”. Contra-argumento só entra para ser refutado, então “sem refutação” está errado. A pergunta da introdução por questionamento precisa ser respondida, ao contrário de “pode ficar sem resposta”. E título só entra se o edital ou o comando pedir.",
      pegadinha: "Achar que toda introdução precisa de tese.",
      conhecimento: "Tese: argumentativa. Pressuposto orientador: expositiva.",
    },
    {
      topico: "Estrutura da dissertação",
      subassunto: "Tópico frasal",
      dificuldade: 4,
      raciocinio: "Tópico frasal: primeira frase que resume a ideia do parágrafo.",
      enunciado:
        "Um parágrafo de desenvolvimento vai mostrar que a fiscalização frequente reduz mortes nas rodovias. Das frases abaixo, a que melhor cumpre a função de tópico frasal desse parágrafo é:",
      alternativas: [
        "A fiscalização constante da alcoolemia é um dos fatores que mais reduzem as mortes nas rodovias federais",
        "Muitas coisas acontecem nas rodovias, e algumas delas, de certo modo, podem ter relação com outras coisas",
        "Em 1997, foi publicado o Código de Trânsito Brasileiro, que trouxe muitas regras sobre vários assuntos",
        "Por outro lado, como já foi dito, e conforme se verá mais adiante, existem diversos pontos de vista",
        "Muitos motoristas talvez não saibam, mas o tema da bebida é antigo e vem sendo discutido há bastante tempo",
      ],
      correta: 0,
      explicacao:
        "O tópico frasal abre o parágrafo e resume, em poucas orações, a ideia que será desenvolvida. A primeira frase anuncia exatamente a relação entre fiscalização e redução de mortes.",
      explicacaoErradas:
        "A frase “Muitas coisas acontecem nas rodovias” é vaga. A que começa por “Em 1997” só dá um dado histórico, sem a ideia do parágrafo. A de “Por outro lado, como já foi dito” é enchimento sem conteúdo. E a que fala que “o tema da bebida é antigo” foge da relação entre fiscalização e mortes.",
      pegadinha: "Escolher a frase com dado histórico achando que ela dá autoridade ao parágrafo.",
      conhecimento: "Tópico frasal com até duas ou três orações; o resto do parágrafo confirma e exemplifica.",
    },
    {
      topico: "Estrutura da dissertação",
      subassunto: "Introdução roteiro",
      dificuldade: 4,
      raciocinio: "Introdução roteiro: tudo o que foi anunciado precisa ser desenvolvido.",
      enunciado:
        "Na introdução, o candidato anuncia que vai analisar “as causas, os efeitos econômicos e as medidas de enfrentamento” da violência nas rodovias. Por falta de linhas, desenvolve apenas causas e efeitos. O risco é:",
      alternativas: [
        "nenhum, porque a introdução roteiro é só um enfeite e o corretor não confere os tópicos anunciados",
        "nenhum, desde que a conclusão repita a lista de tópicos anunciados na abertura do texto",
        "apenas falha de correção gramatical, porque faltará um conector de enumeração no último parágrafo",
        "quebrar a promessa feita, pois na introdução roteiro todo tópico anunciado deve ser desenvolvido",
        "transformar o texto em expositivo, já que a introdução roteiro só é admitida na argumentação",
      ],
      correta: 3,
      explicacao:
        "A introdução roteiro lista os tópicos que o texto vai tratar. Anunciar e não cumprir deixa o texto incompleto e incoerente com a própria abertura.",
      explicacaoErradas:
        "A introdução roteiro não é “só um enfeite”: ela cria um compromisso. Repetir a lista na conclusão não supre o desenvolvimento, como sugere “desde que a conclusão repita a lista”. O problema é de conteúdo, não “de correção gramatical”. E não há regra de que ela “só é admitida na argumentação”.",
      pegadinha: "Achar que basta citar o tópico; ele precisa ser desenvolvido.",
      conhecimento: "Se o espaço é curto, prefira a introdução básica (tema e tese).",
    },
    {
      topico: "Estrutura da dissertação",
      subassunto: "Introdução por oposição",
      dificuldade: 4,
      raciocinio: "Apresentar ideia contrária para refutá-la = introdução por oposição.",
      enunciado:
        "Um candidato abre o texto assim: “Há quem sustente que os radares nas rodovias servem apenas para arrecadar. Essa visão, porém, ignora a queda de acidentes nos trechos fiscalizados.” Trata-se de introdução:",
      alternativas: [
        "por questionamento, que lança uma pergunta ao leitor e pode deixá-la sem resposta até o fim",
        "por oposição, que apresenta uma ideia contrária à do autor para depois refutá-la",
        "básica, que se limita a apresentar o tema e a tese, sem trazer nenhuma ideia contrária",
        "parafraseada, própria de estudo de caso, que reescreve o enunciado com outras palavras",
        "por conceito, que começa definindo o termo principal do tema antes de apresentar a tese",
      ],
      correta: 1,
      explicacao:
        "Na introdução por oposição, o autor apresenta um argumento de que discorda e, em seguida, o refuta. Foi o que ocorreu com a ideia de que radar só serve para arrecadar.",
      explicacaoErradas:
        "Não há pergunta no trecho, e na introdução por questionamento a pergunta não pode ficar “sem resposta até o fim”. A introdução “básica” não traz ideia contrária. A “parafraseada” reescreve o enunciado, o que não ocorreu. E não houve definição de termo, como na introdução “por conceito”.",
      pegadinha: "Achar que trazer a tese contrária enfraquece o texto; ela só entra para ser refutada.",
      conhecimento: "Contra-argumento sem refutação deixa o texto imparcial, o que a argumentativa não admite.",
    },
    {
      topico: "Estrutura da dissertação",
      subassunto: "Desenvolvimento por causa e consequência",
      dificuldade: 4,
      raciocinio: "Causas e consequências em parágrafos separados.",
      enunciado:
        "A proposta pede que o candidato aborde as causas e as consequências da violência no trânsito. Pelo tipo de desenvolvimento por causa e consequência, a melhor organização é:",
      alternativas: [
        "misturar causas e consequências no mesmo parágrafo, para mostrar domínio do raciocínio lógico",
        "tratar só das consequências, porque as causas pertencem à introdução e não ao desenvolvimento",
        "seguir a ordem cronológica obrigatória, com passado, presente e futuro em cada parágrafo",
        "deixar as causas para a conclusão, de modo que o fechamento traga a novidade principal do texto",
        "reservar um parágrafo às causas e outro às consequências, mantendo cada ideia em seu bloco",
      ],
      correta: 4,
      explicacao:
        "No desenvolvimento por causa e consequência, cada ideia ganha seu parágrafo: um para as causas e outro para as consequências. Isso deixa a progressão clara para o corretor.",
      explicacaoErradas:
        "Misturar tudo “no mesmo parágrafo” confunde o leitor. As causas são parte do desenvolvimento, não “pertencem à introdução”. A ordem cronológica é outro tipo de desenvolvimento, não “obrigatória”. E a conclusão não deve trazer “a novidade principal do texto”.",
      pegadinha: "Confundir o desenvolvimento por causa e consequência com o cronológico.",
      conhecimento: "Desenvolvimento mais usado: explicação ou fundamentação.",
    },
    {
      topico: "Estrutura da dissertação",
      subassunto: "Fechamento por avanço",
      dificuldade: 5,
      raciocinio: "Propor solução ligada à discussão = fechamento por avanço.",
      enunciado:
        "Em um estudo de caso sobre um trecho de rodovia federal com muitos acidentes por ultrapassagem proibida, o candidato termina o texto propondo medidas concretas, sem perder a ligação com o que discutiu. Esse fechamento é:",
      alternativas: [
        "por reforço, que apenas retoma a tese da introdução com outras palavras, sem acrescentar nada",
        "por expansão, usado quando sobra espaço e o texto precisa abrir uma discussão inteiramente nova",
        "por avanço, que propõe uma solução coerente com a discussão e é comum em estudos de caso",
        "por questionamento, que encerra o texto com uma pergunta deixada em aberto para o corretor",
        "por citação, que obriga o candidato a terminar com um dispositivo legal transcrito entre aspas",
      ],
      correta: 2,
      explicacao:
        "O fechamento por avanço apresenta proposta de solução mantendo a ligação lógica com o desenvolvimento. É comum em pareceres e estudos de caso.",
      explicacaoErradas:
        "O fechamento “por reforço” só retoma a tese, e o candidato foi além. A expansão é usada quando falta espaço, e não “quando sobra espaço”, nem abre “discussão inteiramente nova”. Não houve pergunta final. E nenhum fechamento “obriga o candidato a terminar com um dispositivo legal”.",
      pegadinha: "Inverter a expansão: ela serve quando falta espaço e precisa ligar-se ao último parágrafo.",
      conhecimento: "Reforço é o fechamento mais elementar; avanço é o que propõe saída.",
    },
    {
      topico: "Estrutura da dissertação",
      subassunto: "Protótipo de 30 linhas",
      dificuldade: 5,
      raciocinio: "Quatro parágrafos: o último traz o terceiro elemento e fecha o texto.",
      enunciado:
        "Uma proposta de até 30 linhas pede três aspectos. Seguindo o protótipo de quatro parágrafos estudado (introdução, dois de desenvolvimento e um último parágrafo), o terceiro aspecto:",
      alternativas: [
        "entra no último parágrafo, que desenvolve o terceiro elemento e, ao mesmo tempo, fecha o texto",
        "fica fora do texto, porque 30 linhas só comportam dois aspectos e o terceiro pode ser dispensado",
        "vai para a introdução, que passa a ter de 10 a 12 linhas para dar conta dos três aspectos pedidos",
        "exige um quinto parágrafo só de conclusão, sempre com mais linhas que a própria introdução",
        "é só citado em uma linha da conclusão, já que o examinador pontua apenas os dois primeiros",
      ],
      correta: 0,
      explicacao:
        "No protótipo, o quarto parágrafo (5 a 7 linhas) traz o terceiro elemento de fundamentação e, com conectores conclusivos, reforça ou avança. Assim os três aspectos cabem nas 30 linhas.",
      explicacaoErradas:
        "Todos os aspectos pedidos são pontuados, então nenhum “pode ser dispensado”. A introdução tem de 5 a 7 linhas, não “de 10 a 12 linhas”. O protótipo não prevê “um quinto parágrafo”. E citar o aspecto “em uma linha” não o desenvolve.",
      pegadinha: "Achar que a conclusão precisa ser sempre um parágrafo separado do último argumento.",
      conhecimento: "Protótipo: 5–7, 6–8, 6–8 e 5–7 linhas.",
    },
    {
      topico: "Estrutura da dissertação",
      subassunto: "Tipos de argumento",
      dificuldade: 5,
      raciocinio: "Encadear causa e efeito = fundamentação lógica.",
      enunciado:
        "Para sustentar que a fiscalização reduz mortes, o candidato escreve: “Se o condutor sabe que pode ser fiscalizado a qualquer momento, tende a não beber antes de dirigir; com menos condutores alcoolizados, caem os acidentes graves.” O argumento usado é de:",
      alternativas: [
        "autoridade, porque o raciocínio depende da opinião de um especialista citado no próprio texto",
        "consenso, porque se apoia em senso comum que dispensa qualquer encadeamento entre as ideias",
        "fundamentação lógica, porque encadeia causa e efeito para chegar à conclusão defendida",
        "comprovação por documentação, porque cita lei, doutrina e jurisprudência para comprovar o que diz",
        "contra-argumento sem refutação, porque traz a posição oposta à tese e não a combate depois",
      ],
      correta: 2,
      explicacao:
        "O trecho liga uma causa (medo da fiscalização) a efeitos em cadeia (menos condutores alcoolizados, menos acidentes). Isso é argumento por fundamentação lógica.",
      explicacaoErradas:
        "Não há especialista citado, logo não é argumento de “autoridade”. O argumento de consenso não deve cair no senso comum, e o trecho tem encadeamento, ao contrário de “dispensa qualquer encadeamento”. Não há lei citada, então não é “comprovação por documentação”. E o trecho defende a tese, sem trazer “a posição oposta”.",
      pegadinha: "Confundir raciocínio de causa e efeito com argumento de consenso.",
      conhecimento: "Em concursos, o argumento apoiado em leis e dados é o mais usado.",
    },
  ],
};
