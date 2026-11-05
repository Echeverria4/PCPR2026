import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-07",
  resumo: {
    ideia:
      "Análise sintática é descobrir a função de cada termo. O caminho é sempre o mesmo: ache o verbo, depois o sujeito, depois o que completa o verbo, e só então o resto.",
    itens: [
      {
        termo: "Ordem direta",
        faz: "Sujeito + verbo + complemento + adjuntos. Coloque a frase nessa ordem antes de analisar.",
        pista: "Sujeito depois do verbo continua sendo sujeito: “Ocorreram dois acidentes”.",
      },
      {
        termo: "Tipos de sujeito",
        faz: "Simples, composto, oculto, oracional e indeterminado. Indeterminado: 3ª do plural sem referência, ou verbo sem objeto direto + “se”.",
      },
      {
        termo: "Oração sem sujeito",
        faz: "Fenômenos da natureza, “haver” no sentido de existir, “haver” e “fazer” de tempo decorrido, “ser” em horas e datas.",
        pista: "“Há vagas” (objeto direto). “Existem vagas” (sujeito).",
      },
      {
        termo: "Objetos",
        faz: "Direto: sem preposição exigida pelo verbo. Indireto: com preposição exigida pelo verbo. Pleonástico: um pronome repete o objeto para dar ênfase.",
      },
      {
        termo: "Objeto direto preposicionado",
        faz: "O verbo não pede preposição, mas ela aparece: com pronome tônico, com “quem”, para evitar ambiguidade ou com sentido de parte (“beber do vinho”).",
      },
      {
        termo: "Complemento nominal",
        faz: "Completa nome abstrato, adjetivo ou advérbio. Com “de” e nome abstrato, tem sentido de alvo: “a fiscalização da carga” (a carga é fiscalizada).",
      },
      {
        termo: "Adjunto adnominal",
        faz: "Acompanha o nome e caracteriza. Com “de” e nome abstrato, tem sentido de agente ou posse: “a fiscalização da equipe” (a equipe fiscaliza).",
        pista: "Com nome concreto, é sempre adjunto adnominal.",
      },
      {
        termo: "Predicativo",
        faz: "Característica atribuída ao sujeito ou ao objeto por meio do verbo: “O agente saiu cansado”, “Julgaram o réu culpado”.",
        pista: "Troque o substantivo por pronome: o predicativo fica, e o adjunto some com o substantivo.",
      },
      {
        termo: "Tipos de predicado",
        faz: "Verbal: núcleo é o verbo. Nominal: verbo de ligação + predicativo. Verbo-nominal: verbo de ação + predicativo.",
      },
      {
        termo: "Aposto e vocativo",
        faz: "Aposto explica ou nomeia um termo (“Ana, a perita, chegou”). Vocativo chama o ouvinte, isolado por vírgula (“Ana, venha”).",
        pista: "“A cidade de Belém” é aposto: Belém é a cidade. “O clima de Belém” é adjunto: Belém tem clima.",
      },
    ],
    cuidado:
      "Palavra na frente do verbo não é sempre sujeito, e palavra com preposição não é sempre objeto indireto: pergunte a quem o verbo se refere e o que ele exige.",
  },
  questoes: [
    {
      topico: "Sujeito",
      subassunto: "Sujeito posposto em oração longa",
      dificuldade: 4,
      raciocinio: "Pôr cada frase na ordem direta e perguntar ao verbo quem pratica ou sofre o processo.",
      enunciado:
        "Assinale a frase em que o termo “os caminhões” exerce a função de sujeito.",
      alternativas: [
        "Na madrugada de domingo, chegaram ao posto os caminhões retidos na serra.",
        "Na madrugada de domingo, a equipe conduziu ao posto os caminhões retidos.",
        "Na madrugada de domingo, havia no posto os caminhões retidos na serra.",
        "Na madrugada de domingo, agentes vistoriaram no posto os caminhões retidos.",
        "Na madrugada de domingo, o fiscal mandou para o posto os caminhões retidos.",
      ],
      correta: 0,
      explicacao:
        "Na ordem direta: “Os caminhões retidos na serra chegaram ao posto”. O verbo concorda com esse termo, que vem depois dele.",
      explicacaoErradas:
        "Em “conduziu”, “vistoriaram” e “mandou”, os sujeitos são “a equipe”, “agentes” e “o fiscal”, e os caminhões são objeto direto. “havia”, com sentido de existir, é impessoal, e o termo é objeto direto.",
      pegadinha:
        "Confiar na posição. Sujeito pode vir depois do verbo, e o teste é a concordância em ordem direta.",
      conhecimento:
        "“Haver” com sentido de existir não tem sujeito, e o termo que o acompanha é objeto direto.",
    },
    {
      topico: "Sujeito",
      subassunto: "Sujeito indeterminado e voz passiva sintética",
      dificuldade: 5,
      raciocinio: "Separar o “se” de verbo transitivo direto, que apassiva, do “se” de verbo com preposição, que indetermina.",
      enunciado: "Assinale a frase em que o sujeito é indeterminado.",
      alternativas: [
        "Apreenderam-se duas cargas sem nota fiscal no pátio do posto.",
        "Choveu muito na região do trevo durante a noite de sábado.",
        "Confia-se nos laudos emitidos pela perícia da corporação.",
        "Há agentes experientes no posto instalado perto do trevo.",
        "Vistoriamos as duas carretas retidas no pátio da balança.",
      ],
      correta: 2,
      explicacao:
        "“Confiar” pede a preposição “em”. Sem objeto direto, o “se” indetermina o sujeito, e o verbo fica na 3ª pessoa do singular.",
      explicacaoErradas:
        "“Apreenderam-se duas cargas” é passiva sintética, com sujeito “duas cargas”. “Choveu” e “Há” formam orações sem sujeito. “Vistoriamos” tem sujeito oculto, “nós”.",
      pegadinha:
        "Dizer que toda frase sem sujeito aparente tem sujeito indeterminado. Sujeito oculto se recupera pela desinência, e oração sem sujeito não tem a quem se atribuir o verbo.",
      conhecimento:
        "Sujeito indeterminado existe, mas não é identificado. Na oração sem sujeito, o verbo é impessoal.",
    },
    {
      topico: "Oração sem sujeito",
      subassunto: "“Haver”, “fazer” e “existir”",
      dificuldade: 4,
      raciocinio: "Verificar quais verbos são impessoais e quais têm sujeito para concordar.",
      enunciado: "Assinale a frase correta quanto à concordância e à impessoalidade do verbo.",
      alternativas: [
        "Fazem três anos que a operação foi instituída na rodovia federal.",
        "Haviam muitos veículos irregulares no pátio da unidade operacional.",
        "Devem haver registros da ocorrência no sistema da unidade da rodovia.",
        "Deve existir registros da ocorrência no sistema da unidade da rodovia federal.",
        "Devem existir registros da ocorrência no sistema da unidade da rodovia.",
      ],
      correta: 4,
      explicacao:
        "“Existir” é pessoal, e “registros” é o sujeito. Na locução, o auxiliar “devem” vai ao plural.",
      explicacaoErradas:
        "“Fazer” de tempo decorrido é impessoal: “Faz três anos”. “Haver” no sentido de existir não vai ao plural: “Havia”. Em locução, o auxiliar herda a impessoalidade: “Deve haver”. “Deve existir” não concorda com o sujeito plural.",
      pegadinha:
        "Pensar que a locução muda a regra. O verbo principal é que manda: “haver” transmite a impessoalidade ao auxiliar, e “existir” transmite a concordância.",
      conhecimento:
        "Haver no sentido de existir e fazer de tempo decorrido ficam no singular, e o auxiliar acompanha.",
    },
    {
      topico: "Complemento nominal e adjunto adnominal",
      subassunto: "Teste do sentido passivo",
      dificuldade: 5,
      raciocinio: "Com nome abstrato e “de”, ver se o termo sofre a ação (complemento) ou a pratica ou possui (adjunto).",
      enunciado:
        "Assinale a frase em que o termo entre aspas é complemento nominal, e não adjunto adnominal.",
      alternativas: [
        "A avaliação “do inspetor” surpreendeu toda a equipe do posto da serra.",
        "O colete “de proteção” foi entregue ao novo agente na sexta-feira.",
        "A recusa “do motorista” foi registrada no boletim logo depois da abordagem.",
        "A fiscalização “da carga” exigiu reforço da equipe durante o feriado.",
        "O relatório “da chefia” foi encaminhado à sede no início do mês.",
      ],
      correta: 3,
      explicacao:
        "“Fiscalização” é nome abstrato de ação, e a carga é o alvo: alguém fiscaliza a carga. O sentido passivo marca o complemento nominal.",
      explicacaoErradas:
        "“do inspetor” e “do motorista” são quem avalia e quem recusa, com sentido de agente. “da chefia” indica autoria, e “de proteção” caracteriza nome concreto. Todos são adjuntos adnominais.",
      pegadinha:
        "Achar que a presença da preposição basta. O mesmo substantivo pode trazer os dois: “a avaliação do inspetor” (ele avalia) e “a avaliação do inspetor pela banca” (ele seria avaliado).",
      conhecimento:
        "Com nome abstrato e preposição “de”, alvo da ação é complemento nominal, e agente ou possuidor é adjunto adnominal.",
    },
    {
      topico: "Predicativo",
      subassunto: "Predicativo e adjunto adnominal",
      dificuldade: 5,
      raciocinio: "Trocar o substantivo por pronome: o predicativo permanece, e o adjunto desaparece com ele.",
      enunciado:
        "Assinale a frase em que “cansado” é predicativo do sujeito.",
      alternativas: [
        "O agente cansado foi substituído na metade do plantão de sexta-feira.",
        "Cansado, o agente foi substituído na metade do plantão de sexta-feira.",
        "O chefe substituiu o agente cansado no meio do plantão de sexta-feira.",
        "O chefe conversou com o agente cansado durante o plantão de sexta-feira.",
        "O chefe entregou ao agente cansado a escala do plantão de sexta-feira.",
      ],
      correta: 1,
      explicacao:
        "Com o sujeito trocado por pronome, o termo continua: “Cansado, ele foi substituído”. Ele mostra o estado do sujeito naquele momento.",
      explicacaoErradas:
        "Nas outras frases, “cansado” vem colado ao nome “agente”, sem pausa, e some com ele na troca por pronome. Em nenhuma delas o termo se refere ao sujeito por meio do verbo.",
      pegadinha:
        "Procurar verbo de ligação. Predicativo do sujeito também aparece com verbo de ação e pode vir separado por vírgula.",
      conhecimento:
        "O predicativo não faz parte do sujeito. O adjunto adnominal faz parte do termo a que se liga.",
    },
    {
      topico: "Objeto direto e indireto",
      subassunto: "Objeto direto preposicionado",
      dificuldade: 5,
      raciocinio: "Ver se o verbo exige preposição; se não exigir, a preposição é um recurso da frase.",
      enunciado: "Assinale a frase em que há objeto direto preposicionado.",
      alternativas: [
        "O agente respondeu ao motorista sobre o prazo da notificação.",
        "O agente confiou ao colega a guarda dos documentos do veículo.",
        "O agente precisou de reforço para concluir toda a vistoria da carga.",
        "O agente encontrou o colega a quem havia substituído no plantão.",
        "O agente obedeceu à ordem de permanecer no posto até as oito.",
      ],
      correta: 3,
      explicacao:
        "Substituir é transitivo direto. Com o pronome “quem”, porém, a preposição “a” é obrigatória: “a quem havia substituído”.",
      explicacaoErradas:
        "“ao motorista”, “ao colega” e “à ordem” são objetos indiretos, com preposição exigida pelos verbos. “de reforço” também é objeto indireto, pedido por “precisar”.",
      pegadinha:
        "Marcar qualquer preposição como objeto indireto. Quem decide é o verbo: se ele não a exige, o objeto é direto, ainda que venha com “a”.",
      conhecimento:
        "Pronome tônico e “quem” fazem surgir preposição em objeto direto, assim como a busca de clareza ou de sentido de parte.",
    },
    {
      topico: "Aposto e vocativo",
      subassunto: "Aposto, adjunto e predicativo",
      dificuldade: 4,
      raciocinio: "Aposto equivale ao termo a que se refere; adjunto só caracteriza; predicativo atribui estado.",
      enunciado:
        "Assinale a frase em que o termo entre aspas é aposto especificativo.",
      alternativas: [
        "O asfalto “de Belém” foi refeito antes do início da estação das chuvas.",
        "O comandante, “irritado”, encerrou a reunião antes do horário previsto.",
        "A cidade “de Belém” recebeu reforço da fiscalização durante o feriado.",
        "“Agentes”, mantenham a calma até a chegada da equipe de resgate à pista.",
        "O trecho, “uma descida íngreme”, exige atenção constante do motorista.",
      ],
      correta: 2,
      explicacao:
        "Belém é a própria cidade: há identidade entre os termos, e o nome individualiza o substantivo comum, sem pausa.",
      explicacaoErradas:
        "“de Belém” junto de “asfalto” é adjunto: o asfalto não é Belém. “irritado” é predicativo. “Agentes” é vocativo. “uma descida íngreme” é aposto explicativo, entre vírgulas.",
      pegadinha:
        "Olhar só a preposição “de”. A mesma expressão muda de função: “cidade de Belém” (aposto) e “asfalto de Belém” (adjunto).",
      conhecimento:
        "Aposto especificativo vem sem pontuação e nomeia o termo. Aposto explicativo vem isolado e detalha o termo.",
    },
  ],
};
