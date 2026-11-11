import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "discursivas-03",
  resumo: {
    ideia:
      "A folha definitiva também é avaliada pela forma. Letra legível, parágrafos com recuo regular, nenhuma identificação, rasura com um traço simples, nada de linhas em branco e regras fixas para siglas, números e citação de leis evitam descontos que nada têm a ver com o conteúdo.",
    itens: [
      {
        termo: "Tipo de letra",
        faz: "Vale cursiva, de forma ou de imprensa, se o edital não disser nada. Na letra de forma, a inicial maiúscula precisa se distinguir das demais. O que se avalia é a legibilidade, não a caligrafia perfeita.",
      },
      {
        termo: "Tamanho da letra e dos períodos",
        faz: "Letra média e legível. Letra miúda parece falta de espaço; letra enorme parece falta de argumento. Período com mais de duas ou três linhas deve ser revisto.",
      },
      {
        termo: "Parágrafos e margens",
        faz: "De 5 a 10 linhas por parágrafo, como estimativa. Recuo regular de 1,5 cm a 2,5 cm na primeira linha de todos os parágrafos; nas demais linhas, distância mínima e regular das margens. A última linha do parágrafo pode terminar antes da margem direita.",
      },
      {
        termo: "Sem identificação",
        faz: "Assinatura, rubrica ou qualquer marca que identifique o candidato anula a redação.",
      },
      {
        termo: "Translineação",
        faz: "Quebra da palavra no fim da linha, com hífen ao final da parte escrita, continuando na linha seguinte.",
      },
      {
        termo: "Rasura",
        faz: "Um traço simples sobre a palavra errada. Nada de escrever por cima, usar parênteses ou escrever “desconsiderar”.",
      },
      {
        termo: "Rascunho",
        faz: "Sempre que possível, fazer. Sem tempo, ao menos o roteiro: tema, tópicos com o que lembrar e a ideia da conclusão. Não escrever a lápis na folha definitiva para cobrir depois.",
      },
      {
        termo: "Título",
        faz: "Só se o edital ou o comando pedir. Quando pedido, frase nominal (sem verbo) e sem ponto final. Título indevido pode ser visto como identificação.",
      },
      {
        termo: "Siglas",
        faz: "Na primeira citação, nome por extenso e depois a sigla entre parênteses ou após hífen. Sem pontos. Até três letras, tudo em maiúsculas; com quatro ou mais, maiúsculas se as letras são lidas uma a uma, ou só a inicial se a sigla se lê como palavra. Plural com “s” minúsculo, só quando a concordância pedir.",
      },
      {
        termo: "Impessoalidade",
        faz: "Texto em terceira pessoa, com distância entre autor e assunto, para dar credibilidade.",
      },
      {
        termo: "Linhas em branco e marcação",
        faz: "Não se pulam linhas, nem entre parágrafos. Não se numeram parágrafos em dissertação; numerar pode gerar descontos.",
      },
      {
        termo: "Citação de dispositivos legais",
        faz: "Do geral para o específico, com vírgulas: art. 144, § 2º, da Constituição Federal de 1988. Do específico para o geral, com a preposição “do”: inciso II do art. 20 do Código de Trânsito Brasileiro.",
      },
      {
        termo: "Números e datas",
        faz: "Número cujo extenso tem uma palavra vai só por extenso (doze). Com duas ou mais palavras, cardinal seguido do extenso entre parênteses: 21 (vinte e um). Datas sem zero à esquerda (3/4/2026), primeiro dia do mês com ordinal (1º/12/2026) e ano sem ponto (1981).",
      },
    ],
    cuidado:
      "Algumas exceções valem só para Redação Oficial e peças técnicas (como numerar parágrafos no padrão ofício). Na dissertação comum, siga as regras gerais. Os exemplos de lei do material citam a antiga Lei 8.666/1993, hoje revogada pela Lei 14.133/2021; o formato da citação é o que importa.",
  },
  questoes: [
    {
      topico: "Cuidados formais",
      subassunto: "Tipo de letra",
      dificuldade: 4,
      raciocinio: "Edital omisso: qualquer tipo de letra, desde que legível e com maiúsculas distintas.",
      enunciado:
        "O edital da prova discursiva não diz nada sobre o tipo de letra. Um candidato quer escrever toda a dissertação em letra de forma. Ele:",
      alternativas: [
        "não pode, porque a letra cursiva é obrigatória em toda prova discursiva quando o edital é omisso",
        "pode, desde que escreva todas as letras em maiúsculas, sem diferença de tamanho entre elas",
        "pode, mas perde pontos de apresentação, porque a banca sempre prefere a letra cursiva",
        "não pode, porque a letra de forma é tratada como tentativa de identificação na folha",
        "pode, desde que a letra seja legível e as iniciais maiúsculas se distingam das demais letras",
      ],
      correta: 4,
      explicacao:
        "Sem regra no edital, vale letra cursiva, de forma ou de imprensa, desde que legível. Na letra de forma, as maiúsculas exigidas pela norma precisam se diferenciar das demais.",
      explicacaoErradas:
        "A cursiva não é “obrigatória” quando o edital é omisso; ela é exigida só em alguns concursos que preveem isso. Escrever tudo “sem diferença de tamanho” impede ver as maiúsculas. Não há desconto automático porque “a banca sempre prefere a letra cursiva”. E letra de forma não é “tentativa de identificação”.",
      pegadinha: "Achar que letra de forma é proibida ou que basta tudo em caixa alta.",
      conhecimento: "O edital é a lei do concurso: se ele exigir cursiva, siga.",
    },
    {
      topico: "Cuidados formais",
      subassunto: "Parágrafos e margens",
      dificuldade: 5,
      raciocinio: "Recuo regular de 1,5 a 2,5 cm; distância mínima das margens; última linha livre.",
      enunciado: "Sobre a indicação de parágrafos e o respeito às margens na folha definitiva, a prática correta é:",
      alternativas: [
        "deixar espaços variados no fim de cada linha, já que a margem direita não é observada pelo corretor",
        "recuar todos os parágrafos de 1,5 cm a 2,5 cm, sempre por igual, e ficar o mais perto possível das margens",
        "recuar só o primeiro parágrafo e começar os demais rente à margem, para economizar espaço na folha",
        "aumentar o recuo a cada novo parágrafo, para que o corretor perceba a progressão das ideias do texto",
        "terminar todas as linhas, inclusive a última de cada parágrafo, exatamente na margem direita da folha, sem exceção",
      ],
      correta: 1,
      explicacao:
        "O recuo de abertura deve ser regular em todos os parágrafos, de 1,5 cm a 2,5 cm. Nas demais linhas, a distância das margens deve ser regular e a menor possível. Só a última linha de cada parágrafo pode parar antes da margem direita.",
      explicacaoErradas:
        "A margem direita também é observada, por isso “deixar espaços variados no fim de cada linha” é erro. O recuo vale para todos os parágrafos, não para o “primeiro parágrafo” apenas. O recuo é regular, e não deve “aumentar o recuo a cada novo parágrafo”. E a última linha do parágrafo não precisa chegar à margem, como sugere “inclusive a última de cada parágrafo”.",
      pegadinha: "Exigir que a última linha do parágrafo vá até a margem.",
      conhecimento: "A regra do recuo segue o Manual de Redação da Presidência da República.",
    },
    {
      topico: "Cuidados formais",
      subassunto: "Rasuras",
      dificuldade: 4,
      raciocinio: "Rasura: um traço simples e seguir em frente.",
      enunciado:
        "Na folha definitiva, o candidato escreve uma palavra errada no meio de uma linha. A forma adequada de corrigir é:",
      alternativas: [
        "pôr a palavra entre parênteses e escrever ao lado “desconsiderar”, para deixar clara a intenção",
        "escrever a palavra certa por cima da errada, reforçando a tinta para que a troca fique legível",
        "passar um único traço simples sobre a palavra errada e seguir escrevendo a forma correta",
        "circular a palavra errada e numerar a correção na margem, para o corretor localizar a troca",
        "riscar a linha inteira várias vezes, para que o corretor não leia nenhuma palavra daquele trecho",
      ],
      correta: 2,
      explicacao:
        "Basta um traço simples sobre a palavra que deve ser desconsiderada. O corretor entende a intenção e o texto continua limpo.",
      explicacaoErradas:
        "A aula condena usar parênteses e escrever “desconsiderar”. Escrever “por cima da errada” suja o texto. Circular e “numerar a correção na margem” cria marcas que não existem na regra. E “riscar a linha inteira várias vezes” vira borrão.",
      pegadinha: "Achar que explicar a rasura por escrito ajuda o corretor.",
      conhecimento: "Rasura limpa é parte da apresentação, que entra na nota.",
    },
    {
      topico: "Cuidados formais",
      subassunto: "Título",
      dificuldade: 4,
      raciocinio: "Sem pedido expresso, sem título.",
      enunciado:
        "Nem o edital nem o comando da questão pedem título. Ao terminar o rascunho, o candidato pensa em pôr um título na folha definitiva. A orientação é:",
      alternativas: [
        "não pôr título, porque sem pedido expresso ele pode até ser visto como sinal de identificação",
        "pôr título com verbo e ponto final, porque o título é parte obrigatória de toda dissertação",
        "pôr qualquer título, já que ele nunca é contado nem avaliado pelo examinador da banca",
        "pôr título só se o texto for argumentativo, pois o expositivo dispensa destacar o tema",
        "pôr título desde que ele ocupe a primeira linha e não passe do limite de cinco palavras",
      ],
      correta: 0,
      explicacao:
        "O título só entra se o edital ou o comando pedirem. Posto sem pedido, pode ser tomado como identificação e levar à anulação. Quando exigido, é frase nominal, sem verbo e sem ponto.",
      explicacaoErradas:
        "Título pedido não leva verbo nem ponto, e ele não é “parte obrigatória de toda dissertação”. Não é seguro pôr “qualquer título”, porque pode ser visto como identificação. A regra não depende de o texto ser argumentativo. E não existe limite de “cinco palavras” na regra estudada.",
      pegadinha: "Pôr título por hábito escolar.",
      conhecimento: "Título exigido: frase nominal, sem verbo e sem ponto final.",
    },
    {
      topico: "Cuidados formais",
      subassunto: "Siglas: primeira citação",
      dificuldade: 5,
      raciocinio: "Primeira vez: extenso e depois a sigla.",
      enunciado:
        "É a primeira vez que o candidato cita a Polícia Rodoviária Federal no texto. Pelas regras de siglas estudadas, ele deve:",
      alternativas: [
        "usar só a sigla com pontos, P.R.F., porque a forma por extenso deixa o texto longo e pouco conciso",
        "escrever primeiro a sigla e, depois, o nome por extenso entre parênteses: PRF (Polícia Rodoviária Federal)",
        "usar a sigla em minúsculas, prf, porque siglas de três letras se escrevem como palavras comuns",
        "escrever o nome por extenso e, em seguida, a sigla entre parênteses ou separada por hífen",
        "criar uma sigla própria mais curta, desde que ela seja usada da mesma forma no resto do texto",
      ],
      correta: 3,
      explicacao:
        "Na primeira menção, vem o nome por extenso e, depois, a sigla entre parênteses ou após hífen: Polícia Rodoviária Federal (PRF). Nas demais, basta a sigla.",
      explicacaoErradas:
        "Siglas não levam pontos, então “P.R.F.” está errado. A ordem é inversa à de “escrever primeiro a sigla”. Siglas de até três letras vão em maiúsculas, ao contrário de “em minúsculas, prf”. E só se usam siglas consagradas, sem “criar uma sigla própria”.",
      pegadinha: "Inverter a ordem: primeiro o nome, depois a sigla.",
      conhecimento: "A sigla e o nome devem seguir a forma oficial do órgão.",
    },
    {
      topico: "Cuidados formais",
      subassunto: "Siglas com quatro letras ou mais",
      dificuldade: 5,
      raciocinio: "Sigla lida como palavra: só inicial maiúscula; letras lidas uma a uma: todas maiúsculas.",
      enunciado:
        "Em um texto sobre trânsito e previdência, o candidato precisa citar o Conselho Nacional de Trânsito e o Instituto Nacional do Seguro Social. Pelas regras de siglas, a grafia adequada é:",
      alternativas: [
        "CONTRAN e INSS, porque toda sigla com quatro letras ou mais vai sempre em maiúsculas",
        "Contran e Inss, porque siglas com quatro letras ou mais têm sempre só a inicial maiúscula",
        "Contran e INSS: a primeira se lê como palavra, e na segunda as letras são lidas uma a uma",
        "C.O.N.T.R.A.N. e I.N.S.S., com pontos entre as letras, para mostrar que são abreviações",
        "contran e inss, em minúsculas, porque as siglas viram substantivos comuns após a primeira citação",
      ],
      correta: 2,
      explicacao:
        "Com quatro letras ou mais, a sigla que se lê como palavra leva só a inicial maiúscula (Contran). A sigla cujas letras são pronunciadas separadamente vai toda em maiúsculas (INSS).",
      explicacaoErradas:
        "Não é regra que “toda sigla com quatro letras ou mais vai sempre em maiúsculas”, nem que tenha “sempre só a inicial maiúscula”: depende da pronúncia. Siglas não levam pontos, como em “C.O.N.T.R.A.N.”. E não viram minúsculas, como em “contran e inss”.",
      pegadinha: "Aplicar uma regra única a todas as siglas longas.",
      conhecimento: "Siglas criadas com mistura de maiúsculas e minúsculas mantêm essa forma original.",
    },
    {
      topico: "Cuidados formais",
      subassunto: "Linhas em branco e marcação de parágrafos",
      dificuldade: 5,
      raciocinio: "Não pular linhas; não numerar parágrafos na dissertação.",
      enunciado:
        "Para deixar o texto “arejado”, um candidato pula uma linha entre a introdução e o desenvolvimento e numera os parágrafos (1, 2, 3 e 4). Essa escolha:",
      alternativas: [
        "está correta, porque a linha em branco facilita a leitura e a numeração mostra a estrutura do texto",
        "está correta só na numeração, que é exigida em toda dissertação para seguir o padrão ofício",
        "está correta só na linha em branco, que não entra na contagem de linhas e por isso não prejudica",
        "é indiferente, porque o corretor só avalia o conteúdo e não observa o aspecto visual da folha",
        "erra nas duas partes: não se pulam linhas na dissertação, e numerar parágrafos pode gerar desconto",
      ],
      correta: 4,
      explicacao:
        "Em dissertação de concurso não se pulam linhas, nem dentro do parágrafo nem entre parágrafos. E a numeração de parágrafos, própria de Redação Oficial, gera descontos no texto dissertativo.",
      explicacaoErradas:
        "A linha em branco não “facilita a leitura” aos olhos da banca; ela custa pontos. A numeração não “é exigida em toda dissertação”; o padrão ofício é de Redação Oficial. A linha em branco prejudica, ao contrário de “não prejudica”. E a forma é avaliada, ao contrário de “não observa o aspecto visual”.",
      pegadinha: "Levar para a dissertação o costume da Redação Oficial.",
      conhecimento: "Qualquer trecho escrito numa linha conta como linha escrita.",
    },
    {
      topico: "Cuidados formais",
      subassunto: "Citação de dispositivos legais",
      dificuldade: 5,
      raciocinio: "Do geral ao específico com vírgulas: art. 20, II, do CTB.",
      enunciado:
        "O candidato quer citar o inciso do Código de Trânsito Brasileiro que dá à PRF o patrulhamento ostensivo (art. 20, inciso II), partindo do mais genérico para o mais específico. A forma correta é:",
      alternativas: [
        "inciso II, art. 20, do Código de Trânsito Brasileiro, partindo do item menor para o maior com vírgulas",
        "art. 20, II, do Código de Trânsito Brasileiro, com vírgulas entre o artigo, o inciso e o diploma",
        "art. 20 do inciso II do Código de Trânsito Brasileiro, com a preposição “do” no lugar das vírgulas",
        "Código de Trânsito Brasileiro, II, art. 20, começando pelo diploma legal e terminando no inciso",
        "art. 20; II; Código de Trânsito Brasileiro, com ponto e vírgula entre cada um dos elementos citados",
      ],
      correta: 1,
      explicacao:
        "Do geral para o específico, usam-se vírgulas: art. 20, II, do Código de Trânsito Brasileiro. A outra forma, do específico para o geral, troca as vírgulas por “do”: inciso II do art. 20 do Código de Trânsito Brasileiro.",
      explicacaoErradas:
        "Começar por “inciso II, art. 20” mistura as duas formas. Escrever “art. 20 do inciso II” inverte a hierarquia, pois o inciso está dentro do artigo. Começar pelo “Código de Trânsito Brasileiro, II” não segue nenhuma das duas formas. E não se usa “ponto e vírgula” entre os elementos do mesmo dispositivo.",
      pegadinha: "Usar a preposição “do” na ordem do geral para o específico.",
      conhecimento: "Vários dispositivos: arts. 5º, III, e 6º, II, da mesma lei.",
    },
    {
      topico: "Cuidados formais",
      subassunto: "Números e datas",
      dificuldade: 5,
      raciocinio: "Uma palavra: só extenso. Duas ou mais: cardinal + extenso. Datas sem zero, 1º com ordinal.",
      enunciado: "Na discursiva, a grafia de prazos e datas que segue as regras estudadas é:",
      alternativas: [
        "21 dias e 3/04/2026, com o cardinal sozinho e o zero antes do número do mês",
        "vinte e um dias e 1/12/2026, por extenso e sem ordinal no primeiro dia do mês",
        "doze (12) meses e 27/11/1.981, com o extenso antes e ponto no milhar do ano",
        "doze meses e 21 (vinte e um) dias, com datas como 1º/12/2026 e 3/4/2026",
        "12 (doze) meses e 21 (vinte e um) dias, com datas como 01/12/2026 e 03/04/2026",
      ],
      correta: 3,
      explicacao:
        "“Doze” tem uma só palavra, então vai por extenso. “Vinte e um” tem várias, então vai 21 (vinte e um). Nas datas, nada de zero à esquerda, o primeiro dia do mês leva ordinal (1º) e o ano não tem ponto.",
      explicacaoErradas:
        "Em “3/04/2026” há zero antes do mês. Em “1/12/2026” falta o ordinal. Em “27/11/1.981” o ano tem ponto. E em “01/12/2026 e 03/04/2026” há zeros à esquerda, além de “12 (doze)”, que deveria ir só por extenso.",
      pegadinha: "Pôr zero à esquerda nas datas por hábito.",
      conhecimento: "Na prática, a banca raramente pune o número de várias palavras escrito só em algarismos, mas a regra completa é cardinal mais extenso.",
    },
    {
      topico: "Cuidados formais",
      subassunto: "Rascunho e identificação",
      dificuldade: 4,
      raciocinio: "Sem tempo: ao menos o roteiro; nunca identificação nem lápis por baixo.",
      enunciado:
        "Faltando pouco tempo de prova, um candidato decide como passar sua dissertação para a folha definitiva. A conduta alinhada às orientações da aula é:",
      alternativas: [
        "fazer ao menos o roteiro no rascunho, com tema, tópicos e a ideia da conclusão, antes de passar a limpo",
        "escrever a lápis na folha definitiva e depois cobrir a caneta, já que o grafite some na correção",
        "assinar a folha definitiva no fim do texto, para que a banca confira a autoria e evite troca de provas",
        "escrever em primeira pessoa, porque a opinião pessoal declarada dá mais credibilidade aos argumentos",
        "abandonar o rascunho e escrever direto na folha definitiva, que é sempre a melhor escolha sob pressão",
      ],
      correta: 0,
      explicacao:
        "Na falta de tempo, a aula recomenda ao menos o roteiro: tema, tópicos com o que lembrar e a ideia da conclusão. Escrever direto na folha definitiva só em raríssimas exceções.",
      explicacaoErradas:
        "O lápis deixa marcas, ao contrário de “o grafite some na correção”. Assinar a folha a identifica e anula a redação, então “assinar a folha definitiva” é erro grave. O texto deve ser impessoal, sem “primeira pessoa”. E escrever direto não é “sempre a melhor escolha”.",
      pegadinha: "Achar que a assinatura no fim do texto é exigida para conferir autoria.",
      conhecimento: "Impessoalidade: terceira pessoa e distância entre autor e assunto.",
    },
  ],
};
