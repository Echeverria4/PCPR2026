import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-a06",
  resumo: {
    ideia:
      "Verbo, advérbio, conjunção e preposição. O verbo é a classe que mais varia (pessoa, número, tempo, modo e voz). As outras três não variam: o que a prova cobra nelas é o sentido que dão à frase.",
    itens: [
      {
        termo: "Verbo nocional × de ligação",
        faz: "O nocional traz a informação sobre o sujeito (“José escorregou”). O de ligação (ser, estar, parecer, ficar, permanecer, continuar) só une o sujeito à qualidade, que vem em outra palavra (“José é inteligente”).",
      },
      {
        termo: "Modos",
        faz: "Indicativo: fato tido como certo (“ele saiu”). Subjuntivo: dúvida, hipótese ou desejo (“talvez ele saia”). Imperativo: ordem, pedido ou conselho (“saia agora”).",
      },
      {
        termo: "Tempos do passado",
        faz: "Perfeito: fato concluído (saiu). Imperfeito: fato que durava ou se repetia (saía). Mais-que-perfeito: passado anterior a outro passado (saíra = tinha saído).",
        pista: "“Quando o juiz apitou, a bola já entrara”: a bola entrou antes do apito, que também é passado.",
      },
      {
        termo: "Futuros",
        faz: "Futuro do presente: depois do momento da fala (sairá). Futuro do pretérito: depois de um fato passado ou como hipótese (“disse que sairia”; “se pudesse, sairia”).",
      },
      {
        termo: "Formas nominais",
        faz: "Infinitivo (-r) funciona como substantivo (“Estudar cansa”). Particípio (-do, -to) indica ação concluída e funciona como adjetivo (“documento assinado”). Gerúndio (-ndo) indica ação em andamento.",
      },
      {
        termo: "Locução verbal",
        faz: "Auxiliar + forma nominal. Só o auxiliar varia em tempo, pessoa e número. Com “ter” e “haver”, o particípio fica fixo: “As soldadas haviam terminado o curso”. “Havia terminado” equivale a “terminara”.",
      },
      {
        termo: "Particípio duplo",
        faz: "Alguns verbos têm dois particípios. Regra tradicional: o regular com “ter” e “haver” (tinha prendido, havia elegido) e o irregular com “ser” e “estar” (foi preso, foi eleito).",
      },
      {
        termo: "Vozes",
        faz: "Ativa: o sujeito pratica (“O poeta escreveu a carta”). Passiva analítica: ser + particípio, que concorda com o sujeito; o agente (“pelo poeta”) pode sair. Passiva sintética: verbo + se (“Vendem-se casas”). Reflexiva: o sujeito pratica e sofre (“O cabo se penteou”).",
        pista: "Na passagem para a passiva, o verbo “ser” assume o tempo do verbo original: “têm cometido erros” → “erros têm sido cometidos”.",
      },
      {
        termo: "Correlação dos tempos",
        faz: "“Se” + imperfeito do subjuntivo pede futuro do pretérito (“Se tivesse tempo, viajaria”). “Quando” ou “se” + futuro do subjuntivo pede futuro do presente (“Quando sair o edital, estudarei”). Passado + “que” pede imperfeito do subjuntivo (“Pediu que saíssem”).",
      },
      {
        termo: "Advérbio",
        faz: "Não varia. Modifica verbo (“trabalha bem”), adjetivo (“muito bom”), outro advérbio (“muito bem”) ou a frase toda (“Felizmente, chegou”). “Bastante”, “meio” e “muito” variam antes de substantivo (bastantes motivos, meia hora) e ficam fixos antes de adjetivo (meio cansadas, bastante atentas).",
      },
      {
        termo: "Palavras de realce e denotativas",
        faz: "Não têm função na frase: só mostram a posição de quem fala. Inclusão (até, inclusive), exclusão (só, apenas), realce (“quase que desisti”, “lá se ia”). O realce pode ser retirado sem mudar o sentido.",
      },
      {
        termo: "Conjunção × preposição",
        faz: "As duas ligam e não variam. A conjunção liga termos de mesma função ou orações. A preposição faz o termo seguinte depender do anterior (“anel de ouro”). Trocar a preposição muda o sentido: de ouro × com ouro × sem ouro.",
        pista: "Para achar o valor da preposição, troque por uma expressão: “estudei para passar” = “com a finalidade de passar” (finalidade); “dei o livro para ele” não aceita a troca (destinatário).",
      },
    ],
    cuidado: "Na passagem para a voz passiva, o tempo do verbo não pode mudar. Confira o auxiliar antes de olhar o resto da frase.",
  },
  questoes: [
    {
      topico: "Verbo",
      subassunto: "Passagem da voz ativa para a passiva",
      dificuldade: 5,
      raciocinio: "Montar a passiva com “ser” no mesmo tempo do verbo original e o particípio concordando com o novo sujeito.",
      enunciado:
        "Assinale a transposição correta da frase “Os policiais têm apreendido armas ilegais” para a voz passiva analítica, sem mudar o tempo verbal.",
      alternativas: [
        "Armas ilegais têm apreendido pelos policiais.",
        "Armas ilegais têm sido apreendido pelos policiais.",
        "Armas ilegais têm sido apreendidas pelos policiais.",
        "Armas ilegais foram apreendidas pelos policiais.",
        "Armas ilegais tinham sido apreendidas pelos policiais.",
      ],
      correta: 2,
      explicacao:
        "“Têm apreendido” está no pretérito perfeito composto. O “ser” entra no mesmo tempo (“têm sido”) e o particípio do verbo principal concorda com o novo sujeito, “armas ilegais”: “apreendidas”.",
      explicacaoErradas:
        "Sem o verbo “ser” não há passiva analítica. “Apreendido”, no masculino singular, não concorda com “armas”. “Foram” e “tinham sido” trocam o tempo verbal.",
      pegadinha: "Duas alternativas são passivas bem formadas, mas mudam o tempo. O enunciado pede o mesmo tempo.",
      conhecimento: "Na passiva analítica, o “ser” fica com o tempo do verbo da ativa, e o particípio concorda com o sujeito. O particípio do “sido” não varia.",
    },
    {
      topico: "Verbo",
      subassunto: "Locução verbal e voz passiva",
      dificuldade: 5,
      raciocinio: "Separar a locução com “ter”/“haver” (particípio fixo) da passiva com “ser” (particípio que concorda).",
      enunciado:
        "Analise as afirmativas.\n\nI. Em “As soldadas haviam terminado o curso”, o particípio fica no masculino singular porque, com “ter” e “haver”, ele não varia.\nII. Em “As provas foram corrigidas pela banca”, o particípio concorda com o sujeito porque a frase está na voz passiva.\nIII. Em “A soldada havia terminado o curso”, a locução equivale a “terminou”, no pretérito perfeito.\n\nEstá correto o que se afirma em:",
      alternativas: ["Apenas I e II.", "Apenas I.", "Apenas II.", "Apenas II e III.", "I, II e III."],
      correta: 0,
      explicacao:
        "I e II estão certas. III erra: “havia terminado” é o mais-que-perfeito composto e equivale a “terminara”, um passado anterior a outro passado.",
      explicacaoErradas: "Ficar só com I ou só com II deixa de fora uma afirmativa certa. Toda alternativa com III aceita a troca do mais-que-perfeito pelo perfeito.",
      pegadinha: "III parece só trocar a forma composta pela simples, mas a forma simples certa é “terminara”, e não “terminou”.",
      conhecimento: "Tinha/havia + particípio = mais-que-perfeito (terminara). Tem + particípio = pretérito perfeito composto (fato que se repete até agora).",
    },
    {
      topico: "Verbo",
      subassunto: "Correlação dos tempos verbais",
      dificuldade: 5,
      raciocinio: "Ver qual conjunção abre a frase e que tempo ela pede no outro verbo.",
      enunciado: "Assinale a frase em que a correlação entre os tempos verbais está de acordo com a norma-padrão.",
      alternativas: [
        "Se o comandante autorizasse, a tropa sairá ao amanhecer.",
        "Quando o edital for publicado, os candidatos se inscreveriam.",
        "Era necessário que todos chegam antes das sete horas.",
        "Se tivéssemos saído antes, não perdemos o início da operação.",
        "Caso a ponte cedesse, o trânsito seria desviado pela rodovia.",
      ],
      correta: 4,
      explicacao: "“Caso” + imperfeito do subjuntivo (“cedesse”) pede o futuro do pretérito (“seria desviado”). As duas formas indicam hipótese.",
      explicacaoErradas:
        "“Autorizasse” pede “sairia”. “For publicado” (futuro do subjuntivo) pede “se inscreverão”. “Era necessário que” pede “chegassem”. “Tivéssemos saído” pede “não teríamos perdido”.",
      pegadinha: "Todas as frases são comuns na fala. A diferença está só no par de tempos: hipótese com hipótese, futuro com futuro.",
      conhecimento: "Se/caso + imperfeito do subjuntivo → futuro do pretérito. Quando/se + futuro do subjuntivo → futuro do presente. Verbo no passado + que → imperfeito do subjuntivo.",
    },
    {
      topico: "Verbo",
      subassunto: "Formas nominais e locuções",
      dificuldade: 4,
      raciocinio: "Lembrar o valor de cada forma nominal e qual verbo varia na locução.",
      enunciado:
        "Julgue as afirmativas como verdadeiras (V) ou falsas (F).\n\n( ) O infinitivo, sozinho, não indica tempo nem modo e pode funcionar como substantivo, como em “Estudar exige disciplina”.\n( ) O gerúndio indica ação em andamento, prolongada.\n( ) O particípio indica ação concluída e pode funcionar como adjetivo, como em “documento assinado”.\n( ) Na locução verbal, quem varia em pessoa e número é o verbo principal; o auxiliar fica fixo.\n\nA sequência correta, de cima para baixo, é:",
      alternativas: ["V, F, V, F", "V, V, V, F", "V, V, F, V", "F, V, V, F", "V, V, V, V"],
      correta: 1,
      explicacao: "As três primeiras estão certas. A última inverte a regra: na locução, quem varia é o auxiliar (“eles vão sair”, “nós vamos sair”); o principal fica na forma nominal.",
      explicacaoErradas: "Marcar F no gerúndio ou no particípio nega o valor de cada forma. Marcar V na última aceita a regra ao contrário.",
      pegadinha: "A última afirmativa usa os nomes certos (auxiliar e principal) com os papéis trocados.",
      conhecimento: "Infinitivo: substantivo. Particípio: adjetivo e ação concluída. Gerúndio: ação em curso, advérbio ou adjetivo. Na locução, só o auxiliar varia.",
    },
    {
      topico: "Advérbio",
      subassunto: "Bastante, meio e muito",
      dificuldade: 5,
      raciocinio: "Ver a palavra que vem depois: antes de substantivo, varia; antes de adjetivo, é advérbio e fica fixa.",
      enunciado: "Quanto ao emprego de “meio” e “bastante”, assinale a frase de acordo com a norma-padrão.",
      alternativas: [
        "Ela ficou meia nervosa durante toda a abordagem.",
        "Há bastante motivos para manter a operação até sexta.",
        "As policiais estavam bastantes cansadas após o plantão.",
        "Ao meio-dia e meia, havia bastantes viaturas no pátio.",
        "Elas estavam meias preocupadas com o resultado da prova.",
      ],
      correta: 3,
      explicacao:
        "“Meio-dia e meia” = meio-dia e meia hora, por isso “meia”. “Bastantes viaturas”: antes de substantivo, “bastante” é pronome e vai para o plural.",
      explicacaoErradas:
        "Antes de adjetivo, “meio” e “bastante” são advérbios e não variam: “meio nervosa”, “bastante cansadas”, “meio preocupadas”. Antes de substantivo plural, varia: “bastantes motivos”.",
      pegadinha: "“Meia” aparece certa num lugar (meio-dia e meia) e errada em outro (meia nervosa). Decide a palavra que vem depois.",
      conhecimento: "Bastante/meio/muito + substantivo: variam. + adjetivo ou depois de verbo: advérbio, fixo.",
    },
    {
      topico: "Advérbio",
      subassunto: "Palavras de realce e denotativas",
      dificuldade: 5,
      raciocinio: "Testar se a palavra pode sair sem mudar o sentido e se ela modifica algum termo da frase.",
      enunciado:
        "Analise as afirmativas.\n\nI. Em “Eu quase que desisti do concurso”, o “que” é de realce e pode ser retirado sem mudar o sentido.\nII. Em “Ele já sabia disso, naturalmente”, “naturalmente” indica o modo da ação, como em “A água escorria naturalmente”.\nIII. Em “Lá se iam os recrutas pela estrada”, o “se” é de realce e pode ser retirado.\nIV. Em “Até o comandante aplaudiu”, a palavra “até” indica inclusão.\n\nEstá correto o que se afirma em:",
      alternativas: ["Apenas I e III.", "Apenas II, III e IV.", "Apenas I, II e III.", "Apenas I, III e IV.", "I, II, III e IV."],
      correta: 3,
      explicacao:
        "I, III e IV estão certas. Em II, “naturalmente” não diz como ele sabia: mostra a opinião de quem fala (“é claro que”). Só em “a água escorria naturalmente” é advérbio de modo.",
      explicacaoErradas: "Toda alternativa com II aceita que as duas frases têm o mesmo “naturalmente”. Ficar só com I e III deixa de fora o “até” de inclusão.",
      pegadinha: "A mesma palavra muda de papel. Depois da vírgula, no fim da frase, “naturalmente” comenta a frase inteira.",
      conhecimento: "Palavras denotativas: inclusão (até, inclusive, também), exclusão (só, apenas, senão), realce (que, é que, se). Não exercem função sintática.",
    },
    {
      topico: "Preposição",
      subassunto: "Valor da preposição “para”",
      dificuldade: 4,
      raciocinio: "Trocar “para” por “com a finalidade de” e ver em qual frase a troca funciona.",
      enunciado: "Assinale a frase em que a preposição “para” indica finalidade.",
      alternativas: [
        "Estudou durante anos para ser aprovado no concurso.",
        "Entregou o relatório para o comandante do batalhão.",
        "A viatura seguiu para o litoral logo depois do almoço.",
        "Para um iniciante, ele dirigiu muito bem na prova.",
        "O juiz deixou a audiência para a semana seguinte.",
      ],
      correta: 0,
      explicacao: "“Estudou com a finalidade de ser aprovado”: a troca funciona, então a ideia é de finalidade.",
      explicacaoErradas:
        "“Para o comandante” indica destinatário. “Para o litoral” indica direção. “Para um iniciante” indica comparação (“considerando que é iniciante”). “Para a semana seguinte” indica tempo.",
      pegadinha: "“Para” antes de verbo no infinitivo costuma indicar finalidade; antes de substantivo, quase nunca.",
      conhecimento: "A mesma preposição tem vários sentidos. A troca por uma expressão equivalente (“com a finalidade de”, “em direção a”) mostra qual é.",
    },
    {
      topico: "Preposição",
      subassunto: "Valores da preposição “de”",
      dificuldade: 4,
      raciocinio: "Para cada frase, perguntar o que o termo com “de” informa: de quem é, do que é feito, de onde vem ou por quê.",
      enunciado:
        "Associe cada frase ao valor da preposição “de”.\n\n1. Posse\n2. Matéria\n3. Origem\n4. Causa\n\n( ) Chegou de Brasília ontem à noite.\n( ) Tremia de frio durante a vigília.\n( ) A farda do sargento estava impecável.\n( ) Usava um anel de prata no dedo.\n\nA sequência correta, de cima para baixo, é:",
      alternativas: ["3, 1, 4, 2", "4, 3, 1, 2", "3, 4, 1, 2", "3, 4, 2, 1", "2, 4, 1, 3"],
      correta: 2,
      explicacao: "Vem de Brasília (origem, 3); tremia por causa do frio (causa, 4); a farda é do sargento (posse, 1); o anel é feito de prata (matéria, 2).",
      explicacaoErradas: "As outras sequências trocam origem com posse ou matéria com causa. Basta perguntar o que cada termo responde.",
      pegadinha: "“Do sargento” tem a preposição junta ao artigo (de + o). Continua sendo a preposição “de”.",
      conhecimento: "“De” pode indicar posse, matéria, origem, causa, assunto (falar de política), modo (de pé) e outros valores.",
    },
    {
      topico: "Verbo",
      subassunto: "Vozes verbais",
      dificuldade: 4,
      raciocinio: "Identificar quem pratica e quem sofre a ação em cada frase.",
      enunciado:
        "Analise as afirmativas.\n\nI. Em “O cabo se penteou antes da formatura”, a voz é reflexiva: o sujeito pratica e sofre a ação.\nII. Em “A carta foi escrita pelo comandante”, “pelo comandante” é o agente da passiva e pode ser omitido sem erro.\nIII. Em “Vendem-se viaturas usadas”, o verbo vai para o plural porque “viaturas usadas” é o sujeito.\n\nEstá correto o que se afirma em:",
      alternativas: ["Apenas I.", "Apenas I e II.", "Apenas II e III.", "Apenas I e III.", "I, II e III."],
      correta: 4,
      explicacao:
        "As três estão certas. Em I, o cabo penteia a si mesmo. Em II, “a carta foi escrita” continua correta sem o agente. Em III, a frase equivale a “viaturas usadas são vendidas”, então o verbo concorda com “viaturas”.",
      explicacaoErradas: "As alternativas que deixam de fora alguma afirmativa descartam uma regra que está certa.",
      pegadinha: "Em III, parece que ninguém é sujeito. Na passiva com “se”, o termo que sofre a ação é o sujeito e manda no verbo.",
      conhecimento: "Passiva sintética: verbo transitivo direto + se; o verbo concorda com o sujeito paciente (“Vendem-se casas”, “Aluga-se sala”).",
    },
    {
      topico: "Verbo",
      subassunto: "Tempos do passado",
      dificuldade: 4,
      raciocinio: "Pôr os fatos em ordem: qual aconteceu primeiro e se os dois são passados.",
      enunciado: "Em “Quando a perícia chegou, o suspeito já fugira”, a forma “fugira” está no",
      alternativas: [
        "pretérito perfeito do indicativo, pois indica fato concluído no passado.",
        "mais-que-perfeito do indicativo: fato anterior a outro fato passado.",
        "futuro do pretérito do indicativo, pois indica fato posterior ao passado.",
        "pretérito imperfeito do subjuntivo, pois indica hipótese no passado.",
        "pretérito imperfeito do indicativo, pois indica fato que durava no passado.",
      ],
      correta: 1,
      explicacao: "A fuga aconteceu antes da chegada da perícia, que também é passada. Passado anterior a outro passado é o mais-que-perfeito: “fugira” = “tinha fugido”.",
      explicacaoErradas:
        "O perfeito seria “fugiu”; o futuro do pretérito, “fugiria”; o imperfeito do subjuntivo, “fugisse”; o imperfeito do indicativo, “fugia”.",
      pegadinha: "“Fugira” lembra “fugiria” e “fugirá”, mas não tem nada de futuro. É um passado mais antigo.",
      conhecimento: "Mais-que-perfeito simples (fugira) = composto (tinha fugido). É comum em textos formais e notícias.",
    },
  ],
};
