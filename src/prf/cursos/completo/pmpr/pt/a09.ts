import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-a09",
  resumo: {
    ideia:
      "Período composto: como as orações se ligam. Na coordenação, cada oração é independente; na subordinação, uma oração faz papel de termo da outra (substantivo, adjetivo ou advérbio). A prova cobra o sentido das conjunções e a classificação das orações.",
    itens: [
      {
        termo: "Coordenação × subordinação",
        faz: "Coordenadas são independentes e poderiam virar frases separadas (“Vim. Vi. Venci.”). Subordinadas fazem papel de termo de outra oração: “O réu afirmou isso” → “O réu afirmou que não esteve no local”.",
      },
      {
        termo: "Assindética × sindética",
        faz: "Assindética: ligada só por pontuação (“Vim, vi, venci”). Sindética: ligada por conjunção (“Estavam endividados, mas não se preocuparam”).",
      },
      {
        termo: "Coordenadas sindéticas",
        faz: "Aditiva: soma (e, nem, não só… mas também). Adversativa: oposição (mas, porém, contudo, todavia, entretanto, no entanto). Alternativa: escolha (ou… ou, ora… ora). Conclusiva: conclusão (logo, portanto, por isso). Explicativa: justificativa (porque, pois, que).",
      },
      {
        termo: "O “pois” muda de lugar",
        faz: "Antes do verbo, explica: “Pare, pois o motorista está cansado”. Depois do verbo, entre vírgulas, conclui: “Está cansado; deve, pois, parar”.",
      },
      {
        termo: "Substantivas",
        faz: "Fazem papel de substantivo e podem ser trocadas por “isso”. Subjetiva (sujeito), objetiva direta, objetiva indireta, completiva nominal, predicativa e apositiva.",
        pista: "“A testemunha declarou que não viu nada” → “declarou isso”: objetiva direta.",
      },
      {
        termo: "Subjetiva × predicativa",
        faz: "Subjetiva é o sujeito da principal e costuma vir depois de “É claro”, “Convém”, “Importa”: “É necessário que todos usem colete”. Predicativa vem depois de verbo de ligação que já tem sujeito: “A necessidade é que todos usem colete”.",
      },
      {
        termo: "Objetiva indireta × completiva nominal",
        faz: "As duas têm preposição. Se quem pede a preposição é um verbo, é objetiva indireta (“insistia em que”, “depende de que”). Se é um nome, é completiva nominal (“tinha receio de que”).",
      },
      {
        termo: "Adjetiva restritiva × explicativa",
        faz: "Sem vírgula, restringe: “Os candidatos que faltaram foram eliminados” (só os que faltaram). Entre vírgulas, explica e vale para todos: “Os candidatos, que faltaram, foram eliminados”.",
      },
      {
        termo: "Pronome relativo com preposição",
        faz: "Se o verbo da oração adjetiva pede preposição, ela vem antes do relativo: “O filme a que assisti”, “A operação de que participei”. “Cujo” indica posse, concorda com o possuído e não aceita artigo depois: “a viatura cujo motor foi trocado”.",
      },
      {
        termo: "Adverbiais",
        faz: "Causa (porque, já que, visto que, como), condição (se, caso, desde que), concessão (embora, ainda que, mesmo que), conformidade (conforme, segundo), consequência (tão… que), finalidade (para que, a fim de que), comparação, proporção (à medida que, à proporção que) e tempo (quando, assim que).",
      },
      {
        termo: "Concessiva × adversativa",
        faz: "Têm sentido parecido (oposição que não impede o fato), mas a concessiva pede subjuntivo: “Embora a pista estivesse molhada, ele não reduziu”. Com “mas”, usa-se o indicativo: “A pista estava molhada, mas ele não reduziu”.",
      },
      {
        termo: "Funções do “que”",
        faz: "Pronome relativo (troca por “o qual”: “a ponte que desabou”), conjunção integrante (troca por “isso”: “disse que viria”), conjunção consecutiva (“falou tanto que ficou rouco”), preposição (“tinha que ir”) e palavra de realce (pode sair: “Quem que fez isso?”).",
      },
    ],
  },
  questoes: [
    {
      topico: "Coordenação",
      subassunto: "Valor do “pois”",
      dificuldade: 4,
      raciocinio: "Ver a posição do “pois”: antes do verbo, explica; depois do verbo e entre vírgulas, conclui.",
      enunciado: "Assinale a frase em que “pois” tem valor conclusivo.",
      alternativas: [
        "Pare no próximo posto, pois o motorista está muito cansado hoje.",
        "O asfalto está escorregadio, pois choveu a noite toda.",
        "Reduza a velocidade, pois há obras na pista logo adiante.",
        "O motorista está cansado; deve, pois, parar no próximo posto.",
        "Use o cinto de segurança, pois a fiscalização é constante.",
      ],
      correta: 3,
      explicacao: "Aqui o “pois” vem depois do verbo “deve”, entre vírgulas, e equivale a “portanto”: o cansaço leva à conclusão de que ele deve parar.",
      explicacaoErradas:
        "Nas outras frases, o “pois” abre a oração e equivale a “porque”: dá a explicação ou o motivo do que foi dito antes. É valor explicativo.",
      pegadinha: "A palavra é a mesma em todas. O que muda o valor é a posição.",
      conhecimento: "Teste: se “pois” puder ser trocado por “portanto”, é conclusivo; por “porque”, é explicativo.",
    },
    {
      topico: "Subordinação",
      subassunto: "Orações substantivas",
      dificuldade: 5,
      raciocinio: "Trocar a oração por “isso” e ver que função ela ocupa: objeto, complemento de nome, predicativo ou aposto.",
      enunciado:
        "Associe cada tipo de oração substantiva ao exemplo.\n1. Predicativa\n2. Objetiva direta\n3. Objetiva indireta\n4. Completiva nominal\n5. Apositiva\n( ) O soldado lembrou-se de que a escala tinha mudado.\n( ) O problema é que ninguém registrou a ocorrência.\n( ) Só peço uma coisa: que respeitem o horário.\n( ) Tenho a certeza de que a operação dará certo.\n( ) A testemunha declarou que não viu o atirador.\nA sequência correta, de cima para baixo, é",
      alternativas: ["3, 1, 5, 4, 2.", "4, 1, 5, 3, 2.", "3, 2, 5, 4, 1.", "4, 2, 5, 3, 1.", "3, 1, 4, 5, 2."],
      correta: 0,
      explicacao: "Lembrar-se de algo: verbo com preposição, objetiva indireta (3). “O problema é isso”: predicativa (1). A oração explica “uma coisa”, depois de dois-pontos: apositiva (5). “Certeza de isso”: completa um nome, completiva nominal (4). “Declarou isso”: objetiva direta (2).",
      explicacaoErradas:
        "Trocar 3 e 4 confunde quem pede a preposição: em “lembrou-se de”, é o verbo; em “certeza de”, é o nome. Trocar 1 e 2 ignora que “é” é verbo de ligação, que pede predicativo, e “declarou” pede objeto.",
      pegadinha: "As orações com “de que” parecem iguais. Olhe a palavra antes: verbo (objetiva indireta) ou nome (completiva nominal).",
      conhecimento: "Apositiva costuma vir depois de dois-pontos e explica um termo da principal (“uma coisa”, “isto”, “o seguinte”).",
    },
    {
      topico: "Subordinação",
      subassunto: "Objetiva indireta × completiva nominal",
      dificuldade: 5,
      raciocinio: "Achar a palavra que exige a preposição e ver se é verbo ou nome.",
      enunciado:
        "Analise as afirmativas.\nI. Em “O comandante insistia em que todos usassem colete”, a oração “em que todos usassem colete” é completiva nominal, pois tem preposição.\nII. Em “Ele tinha receio de que o abandonassem”, a oração iniciada por “de que” é completiva nominal.\nIII. Em “O sucesso da operação depende de que todos cumpram as ordens”, a oração iniciada por “de que” é objetiva indireta.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I.", "Apenas II.", "Apenas II e III.", "Apenas I e III.", "I, II e III."],
      correta: 2,
      explicacao: "Em II, a preposição é pedida pelo substantivo “receio” (receio de algo): completiva nominal. Em III, é pedida pelo verbo “depender” (depender de algo): objetiva indireta.",
      explicacaoErradas:
        "I está errada: quem pede “em” é o verbo “insistir” (insistir em algo). Oração que completa verbo com preposição é objetiva indireta. Ter preposição não basta para ser completiva nominal.",
      pegadinha: "I dá um motivo que parece certo (“pois tem preposição”), mas as duas classificações têm preposição.",
      conhecimento: "Objetiva indireta completa verbo; completiva nominal completa substantivo, adjetivo ou advérbio. A diferença é a mesma do período simples.",
    },
    {
      topico: "Subordinação",
      subassunto: "Adjetiva restritiva × explicativa",
      dificuldade: 5,
      raciocinio: "Ver se a oração separa um grupo dentro do todo (sem vírgula) ou fala de todos (com vírgula).",
      enunciado:
        "Compare as frases.\nI. Os candidatos que faltaram ao exame foram eliminados.\nII. Os candidatos, que faltaram ao exame, foram eliminados.\nAssinale a leitura correta.",
      alternativas: [
        "Em I, todos os candidatos faltaram e saíram; em II, só uma parte deles faltou e foi eliminada.",
        "As duas têm o mesmo sentido, e as vírgulas em II são apenas uma opção de estilo de quem escreve.",
        "Em II, as vírgulas estão erradas, pois não se separa a oração adjetiva do termo a que se refere.",
        "Em I, a oração adjetiva é explicativa; em II, é restritiva, por estar entre vírgulas na frase.",
        "Em I, só parte dos candidatos faltou e foi eliminada; em II, todos faltaram e foram eliminados.",
      ],
      correta: 4,
      explicacao: "Sem vírgula, a oração restringe: só os que faltaram foram eliminados. Com vírgulas, ela explica algo que vale para todos: todos faltaram e todos saíram.",
      explicacaoErradas:
        "As vírgulas mudam o sentido, então não são só estilo nem estão erradas. A oração sem vírgula é a restritiva, e a entre vírgulas é a explicativa, não o contrário.",
      pegadinha: "Tirar ou pôr vírgula numa oração adjetiva muda quantas pessoas a frase atinge.",
      conhecimento: "Restritiva: sem vírgula, separa uma parte. Explicativa: entre vírgulas, comenta o todo.",
    },
    {
      topico: "Subordinação",
      subassunto: "Pronome relativo e preposição",
      dificuldade: 5,
      raciocinio: "Montar a oração adjetiva na ordem direta e ver se o verbo pede preposição (“dependem do plano”).",
      enunciado: "Assinale a frase de acordo com a norma-padrão quanto ao emprego do pronome relativo.",
      alternativas: [
        "O cargo que ele sempre aspirava exigia nível superior completo.",
        "Esta é a viatura cujo o motor foi trocado na semana passada.",
        "O plano de que todos dependem foi aprovado pelo comando.",
        "A operação que eu participei durou três dias inteiros na mata.",
        "O sargento, cujo admiro a coragem, foi homenageado ontem.",
      ],
      correta: 2,
      explicacao: "Quem depende, depende de algo: “todos dependem do plano”. Por isso a preposição vem antes do relativo: “de que todos dependem”.",
      explicacaoErradas:
        "“Aspirar” (desejar) pede “a”: “a que ele aspirava”. “Participar” pede “de”: “de que eu participei”. “Cujo” não aceita artigo depois: “cujo motor”. E “cujo” concorda com o possuído e vem junto dele: “cuja coragem admiro”.",
      pegadinha: "Na fala, a preposição antes do relativo some (“a operação que participei”). Na norma-padrão, ela é obrigatória.",
      conhecimento: "Para achar a preposição, troque o relativo pelo antecedente: “participei da operação” → “a operação de que participei”.",
    },
    {
      topico: "Subordinação",
      subassunto: "Orações adverbiais",
      dificuldade: 4,
      raciocinio: "Trocar a conjunção por outra do mesmo grupo e ver se o sentido se mantém.",
      enunciado: "Assinale a alternativa em que a classificação da oração adverbial está correta.",
      alternativas: [
        "“Embora chovesse muito, a operação continuou” – oração causal.",
        "“Conforme diz o edital, a prova terá duas etapas” – conformativa.",
        "“Como estava sem documento, o motorista foi autuado” – comparativa.",
        "“À medida que a tropa avançava, o cerco se fechava” – temporal.",
        "“O tenente falou tão alto que todos acordaram” – oração final.",
      ],
      correta: 1,
      explicacao: "“Conforme” indica acordo, conformidade: a prova terá duas etapas de acordo com o que o edital diz.",
      explicacaoErradas:
        "“Embora” é concessiva: a chuva não impediu a operação. “Como” no início, com sentido de “porque”, é causal. “À medida que” é proporcional. “Tão… que” é consecutiva: todos acordaram por causa do grito.",
      pegadinha: "“Como” pode ser causal, comparativo ou conformativo. No início da frase, antes da principal, costuma ser causal.",
      conhecimento: "Proporcional: dois fatos que crescem juntos (à medida que, à proporção que). Temporal só marca o momento (quando, assim que).",
    },
    {
      topico: "Subordinação",
      subassunto: "Concessiva × adversativa",
      dificuldade: 5,
      raciocinio: "Manter a relação de oposição e trocar o modo do verbo quando a conjunção pede subjuntivo.",
      enunciado: "Mantendo o sentido e a correção, a frase “A pista estava molhada, mas o motorista não reduziu a velocidade” pode ser reescrita assim:",
      alternativas: [
        "Embora a pista estivesse molhada, o motorista não reduziu a velocidade.",
        "Embora a pista estava molhada, o motorista não reduziu a sua velocidade.",
        "Porque a pista estava molhada, o motorista não reduziu a sua velocidade.",
        "Como a pista estivesse molhada, o motorista enfim reduziu a velocidade.",
        "A pista estava molhada, portanto o motorista não reduziu a velocidade.",
      ],
      correta: 0,
      explicacao: "“Mas” marca oposição: a pista molhada pedia cuidado, e ainda assim ele não reduziu. “Embora” mantém essa oposição e pede o verbo no subjuntivo: “estivesse”.",
      explicacaoErradas:
        "“Embora” com o indicativo (“estava”) foge da norma-padrão. “Porque” e “portanto” fazem da pista molhada o motivo de não reduzir, o que muda o sentido. A frase com “como” diz que ele reduziu, o contrário do original.",
      pegadinha: "Duas opções usam “embora”. Só uma põe o verbo no subjuntivo.",
      conhecimento: "Concessivas (embora, ainda que, mesmo que, conquanto, se bem que) pedem subjuntivo.",
    },
    {
      topico: "Subordinação",
      subassunto: "Funções do “que”",
      dificuldade: 5,
      raciocinio: "Trocar o “que” por “o qual” (relativo) ou por “isso” (integrante) e ver qual cabe.",
      enunciado: "Em qual frase o “que” é pronome relativo?",
      alternativas: [
        "Ele tinha que entregar o relatório até o meio-dia de hoje.",
        "O agente disse que a estrada seria liberada ainda hoje.",
        "Que coragem teve o bombeiro naquele incêndio da fábrica!",
        "A ponte que desabou será reconstruída pelo governo.",
        "O delegado falou tanto que ficou rouco no fim da reunião.",
      ],
      correta: 3,
      explicacao: "“Que” retoma “a ponte” e pode virar “a qual”: “a ponte a qual desabou”. É pronome relativo e funciona como sujeito de “desabou”.",
      explicacaoErradas:
        "Em “tinha que entregar”, o “que” funciona como preposição. Em “disse que…”, é conjunção integrante (“disse isso”). Em “Que coragem!”, intensifica o substantivo numa exclamação. Em “tanto que”, é conjunção consecutiva.",
      pegadinha: "Todas as frases têm “que”, mas só uma o usa para retomar um substantivo anterior.",
      conhecimento: "Relativo: troca por “o qual” e tem antecedente. Integrante: troca a oração toda por “isso”.",
    },
    {
      topico: "Coordenação",
      subassunto: "Tipos de coordenadas",
      dificuldade: 4,
      raciocinio: "Ver a ideia que liga as orações: soma, escolha, explicação ou oposição.",
      enunciado:
        "Julgue as afirmativas em verdadeiras (V) ou falsas (F).\n( ) Em “Vim, vi, venci”, as orações são coordenadas assindéticas.\n( ) Em “Ora chorava, ora sorria”, as orações são coordenadas alternativas.\n( ) Em “Estude, que a prova está próxima”, o “que” introduz oração coordenada explicativa.\n( ) Em “Ele não só treinou, mas também venceu”, a oração iniciada por “mas também” é adversativa.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, F, V, F.", "V, V, F, V.", "F, V, V, F.", "V, V, F, F.", "V, V, V, F."],
      correta: 4,
      explicacao: "“Vim, vi, venci” se liga só por vírgulas: assindéticas. “Ora… ora” marca alternância: alternativas. Em “Estude, que a prova está próxima”, o “que” vale “porque” e justifica o pedido: explicativa. As três primeiras são verdadeiras.",
      explicacaoErradas:
        "“Não só… mas também” soma as ações (treinou e venceu): é aditiva, não adversativa. Por isso a última é falsa.",
      pegadinha: "O “mas” de “mas também” não indica oposição. A dupla “não só… mas também” é de soma.",
      conhecimento: "Depois de ordem ou pedido, “que” costuma ser explicativo: “Corra, que o ônibus vai sair”.",
    },
    {
      topico: "Subordinação",
      subassunto: "Subjetiva",
      dificuldade: 5,
      raciocinio: "Perguntar ao verbo da principal “o que é que…?” e ver se a resposta é a oração com “que”.",
      enunciado: "Assinale a frase em que há oração subordinada substantiva subjetiva.",
      alternativas: [
        "A necessidade é que os agentes usem o colete na operação.",
        "É necessário que os agentes usem o colete na operação.",
        "O comando exigiu que os agentes usassem o colete.",
        "Houve a exigência de que os agentes usassem o colete.",
        "Os agentes que usavam colete saíram ilesos da troca de tiros.",
      ],
      correta: 1,
      explicacao: "O que é que é necessário? “Que os agentes usem o colete”. A oração é o sujeito de “é necessário”: subjetiva.",
      explicacaoErradas:
        "Em “A necessidade é que…”, o sujeito já é “a necessidade”, e a oração é predicativa. “Exigiu que…” tem objetiva direta. “Exigência de que…” completa um nome: completiva nominal. “Que usavam colete” se refere a “agentes”: adjetiva restritiva.",
      pegadinha: "As duas primeiras parecem iguais. Se antes do “é” já há um sujeito (“a necessidade”), a oração é predicativa.",
      conhecimento: "Subjetiva costuma vir depois de “É claro”, “É preciso”, “Convém”, “Importa”, “Parece”, “Consta”.",
    },
  ],
};
