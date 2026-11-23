import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-a10",
  resumo: {
    ideia:
      "A aula fecha a gramática com as relações entre as palavras: concordância (verbo e nome combinam com o núcleo), regência (que preposição cada palavra pede), colocação (onde fica o pronome), crase (quando o “a” ganha acento) e pontuação (quando a vírgula pode ou não entrar).",
    itens: [
      {
        termo: "Concordância verbal: regra geral",
        faz: "O verbo combina em número e pessoa com o núcleo do sujeito. Se o sujeito está depois do verbo ou longe dele, ponha a frase na ordem direta: “Foram publicados ontem os resultados” → “Os resultados foram publicados ontem”.",
        pista: "“Existem falhas”, “Faltam provas”: o sujeito vem depois, mas manda no verbo.",
      },
      {
        termo: "Sujeito depois do verbo",
        faz: "Com sujeito composto depois do verbo, o verbo pode ir ao plural ou combinar com o núcleo mais próximo: “Chegaram o pai e a filha” ou “Chegou o pai e a filha”.",
      },
      {
        termo: "Pronome relativo “que” e “quem”",
        faz: "Com “que”, o verbo combina com a palavra que vem antes: “Fui eu que fiz”, “Fomos nós que pedimos”. Com “quem”, o verbo pode ficar na 3ª pessoa: “Fui eu quem fez”.",
      },
      {
        termo: "Casos especiais do sujeito",
        faz: "“Mais de um” pede singular (“Mais de um agente participou”); “mais de dois”, plural. Nome de lugar com artigo no plural pede plural (“Os Estados Unidos anunciaram”). Com porcentagem ou fração, o verbo pode combinar com o número ou com o termo que vem depois. “Alguns de nós sabem” ou “sabemos”.",
      },
      {
        termo: "Sujeito composto",
        faz: "Pessoas diferentes: a 1ª ganha da 2ª, e a 2ª da 3ª (“Eu e ele iremos”). Ligados por “com”: plural. Com “cada” ou “nenhum” antes de cada núcleo: singular. Dois verbos no infinitivo: singular (“Correr e nadar faz bem”). “Nem… nem”: de preferência plural. “Ou” de exclusão: singular.",
      },
      {
        termo: "Concordância nominal",
        faz: "Artigo, adjetivo e particípio combinam com o substantivo. Adjetivo depois de vários nomes: combina com todos (masculino plural se os gêneros forem diferentes) ou só com o mais próximo. Adjetivo antes dos nomes: com o mais próximo (“conhecidas gramáticas e dicionários”). Predicativo de sujeito composto: plural.",
      },
      {
        termo: "Palavras que mudam e que não mudam",
        faz: "Variam: anexo, incluso, obrigado, mesmo, quite e bastante (quando quer dizer “muitos”): “Seguem anexas as fotos”, “Elas mesmas assinaram”, “bastantes provas”. Não varia: “meio” quando quer dizer “um pouco” (“ficaram meio confusas”).",
        pista: "“É proibido entrada” (sem artigo, não varia) × “É proibida a entrada” (com artigo, varia).",
      },
      {
        termo: "Regência",
        faz: "É a relação entre a palavra que pede o complemento e o complemento. Na norma-padrão: assistir (ver) a; aspirar (desejar) a; visar (pretender) a; obedecer a; chegar e ir a (não “em”); preferir uma coisa a outra, sem “mais” e sem “do que”; implicar (trazer como consequência) sem preposição.",
      },
      {
        termo: "Colocação: próclise",
        faz: "Pronome antes do verbo quando há palavra que atrai: palavra negativa (“Nunca se esqueça”), advérbio sem vírgula (“Agora se negam”), pronome relativo, indefinido ou interrogativo (“Quem lhe disse?”) e conjunção subordinativa (“Disse que nos veria”).",
      },
      {
        termo: "Mesóclise e ênclise",
        faz: "Mesóclise só no futuro do presente e no futuro do pretérito, sem palavra que atrai: “Far-se-á”, “dar-lhe-ia”. Com palavra que atrai, vira próclise: “Não se fará”. Ênclise no início de período, depois de pausa e no imperativo afirmativo: “Chame-me”. Nunca “Entregarei-lhe” nem pronome depois de particípio.",
      },
      {
        termo: "Crase: quando entra",
        faz: "Crase é a junção da preposição “a” com o artigo “a” (“Fui à cidade”) ou com “aquele”, “aquela”, “aquilo” (“Refiro-me àquele caso”). Teste: troque por uma palavra masculina; se virar “ao”, há crase. Nunca antes de palavra masculina, verbo ou pronome pessoal.",
        pista: "Cidades: “Vou a Brasília, volto de Brasília” (sem crase); “Vou à Bahia, volto da Bahia” (com crase).",
      },
      {
        termo: "Crase obrigatória, facultativa e o sentido",
        faz: "Obrigatória nas horas (“às oito”) e nas locuções com palavra feminina (“às pressas”, “à medida que”, “à custa de”). Facultativa antes de pronome possessivo feminino (“à sua casa” ou “a sua casa”), de nome de mulher e depois de “até”. O acento pode mudar o sentido: “Ficou à sombra da árvore” (embaixo dela) × “Ficou a sombra da árvore” (virou a sombra).",
      },
      {
        termo: "Vírgula",
        faz: "Não se separa o sujeito do verbo, o verbo do complemento, o nome do complemento, nem o verbo da passiva do agente (“foi feita pelos agentes”). Separa-se o aposto, o vocativo e o termo intercalado (com duas vírgulas). Adjunto adverbial deslocado: curto, vírgula facultativa; longo, vírgula obrigatória.",
      },
      {
        termo: "Outros sinais",
        faz: "Dois-pontos anunciam fala, citação, enumeração ou esclarecimento. Ponto e vírgula dá pausa maior que a vírgula, em enumerações e entre orações sem conjunção. Parênteses e travessão duplo isolam um comentário. Aspas marcam citação, título, palavra estrangeira ou ironia.",
      },
    ],
  },
  questoes: [
    {
      topico: "Concordância verbal",
      subassunto: "Casos especiais do sujeito",
      dificuldade: 5,
      raciocinio: "Em cada frase, achar o sujeito de verdade (às vezes ele vem depois do verbo) e ver se o verbo combina com ele.",
      enunciado: "Assinale a frase em que a concordância verbal está de acordo com a norma-padrão.",
      alternativas: [
        "Fazem dois anos que o posto foi desativado.",
        "Houveram muitas reclamações sobre o atendimento.",
        "Mais de um policial participou da abordagem.",
        "Os Estados Unidos anunciou novas tarifas de importação.",
        "Existe, segundo o relatório, falhas graves no sistema.",
      ],
      correta: 2,
      explicacao: "Com “mais de um”, o verbo fica no singular, combinando com o numeral “um”: “Mais de um policial participou”. Se fosse “mais de dois”, o verbo iria ao plural.",
      explicacaoErradas:
        "“Fazer” indicando tempo não tem sujeito e fica no singular: “Faz dois anos”. “Haver” no sentido de existir também fica no singular: “Houve muitas reclamações”. Nome de lugar com artigo no plural leva o verbo ao plural: “Os Estados Unidos anunciaram”. Em “Existe… falhas graves”, o sujeito é “falhas graves”, que vem depois: “Existem”.",
      pegadinha: "“Existir” parece igual a “haver”, mas tem sujeito e vai ao plural. Já “haver” e “fazer” de tempo não variam.",
      conhecimento: "Com porcentagem ou fração, o verbo pode combinar com o número ou com o termo seguinte: “40% do grupo votou” ou “votaram”.",
    },
    {
      topico: "Concordância verbal",
      subassunto: "Sujeito composto e pronome relativo",
      dificuldade: 5,
      raciocinio: "Aplicar a regra de cada caso: “cada” antes dos núcleos, ligação com “com”, “nem… nem” e verbo depois do relativo “que”.",
      enunciado:
        "Analise as frases quanto à concordância verbal.\nI. Cada soldado, cada cabo e cada sargento recebeu o novo uniforme.\nII. O comandante com seus oficiais decidiram adiar a operação.\nIII. Nem o motorista nem o passageiro usavam o cinto de segurança.\nIV. Fui eu que fez o registro da ocorrência no sistema.\nEstão de acordo com a norma-padrão",
      alternativas: ["Apenas I, II e III.", "Apenas I e II.", "Apenas II, III e IV.", "Apenas I e III.", "I, II, III e IV."],
      correta: 0,
      explicacao: "Em I, “cada” antes de cada núcleo deixa o verbo no singular. Em II, núcleos ligados por “com” levam o verbo ao plural. Em III, com “nem… nem”, o plural é o preferido. Só IV está errada.",
      explicacaoErradas:
        "Em IV, o relativo “que” retoma “eu”, e o verbo deve combinar com ele: “Fui eu que fiz”. A forma “fez” só caberia com “quem”: “Fui eu quem fez”. Quem marca só I e III pensa que “com” pede singular, mas une os núcleos como se fosse “e”.",
      pegadinha: "“Fui eu que fez” soa natural na fala, mas mistura duas construções. Com “que”, o verbo vai para a pessoa de “eu”.",
      conhecimento: "Infinitivos como sujeito composto deixam o verbo no singular: “Correr e nadar faz bem à saúde”.",
    },
    {
      topico: "Concordância nominal",
      subassunto: "Adjetivo, predicativo e palavras que variam",
      dificuldade: 5,
      raciocinio: "Lembrar a posição do adjetivo (antes ou depois dos nomes) e as palavras que variam, como “anexo”.",
      enunciado:
        "Julgue as afirmações sobre concordância nominal, marcando V para verdadeiro e F para falso.\n( ) Em “Seguem anexo as fotos”, a palavra “anexo” está certa, porque não varia.\n( ) Em “Os carros e as motos caras”, o adjetivo combina com o nome mais próximo, o que a norma aceita.\n( ) Em “O delegado e a escrivã estavam atentos”, o predicativo vai ao masculino plural.\n( ) Em “conhecidas gramáticas e dicionários”, o adjetivo deveria ir para “conhecidos”.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, F, V, F.", "F, F, V, V.", "V, V, F, F.", "F, V, F, V.", "F, V, V, F."],
      correta: 4,
      explicacao: "“Anexo” varia e combina com o nome: “Seguem anexas as fotos” (F). Adjetivo depois de vários nomes pode combinar com o mais próximo (V). Predicativo de sujeito composto com gêneros diferentes vai ao masculino plural (V). Adjetivo antes dos nomes combina com o mais próximo, então “conhecidas” está certo (F).",
      explicacaoErradas:
        "Marcar V na primeira é tratar “anexo” como palavra que não varia, mas ela funciona como adjetivo. Marcar V na última é aplicar ao adjetivo anteposto a regra do adjetivo posposto: antes dos nomes, ele segue só o mais próximo.",
      pegadinha: "A regra muda com a posição: adjetivo antes dos nomes segue o mais próximo; depois deles, pode seguir o mais próximo ou todos.",
      conhecimento: "“Meio” no sentido de “um pouco” não varia (“meio cansadas”); no sentido de “metade”, varia (“meia hora”).",
    },
    {
      topico: "Regência",
      subassunto: "Regência verbal",
      dificuldade: 4,
      raciocinio: "Para cada verbo, lembrar se a norma-padrão pede preposição e qual.",
      enunciado: "Assinale a frase em que a regência verbal segue a norma-padrão.",
      alternativas: [
        "O soldado assistiu o jogo da seleção no quartel.",
        "O candidato aspira ao cargo de soldado.",
        "Prefiro mais trabalhar de dia do que à noite.",
        "Os moradores obedecem as normas do condomínio.",
        "Ele chegou no quartel antes das seis horas.",
      ],
      correta: 1,
      explicacao: "“Aspirar” no sentido de desejar pede a preposição “a”: aspira a + o cargo = “aspira ao cargo”.",
      explicacaoErradas:
        "“Assistir” no sentido de ver pede “a”: “assistiu ao jogo”. “Preferir” pede “a” e não aceita “mais” nem “do que”: “Prefiro trabalhar de dia a trabalhar à noite”. “Obedecer” pede “a”: “obedecem às normas”. Na norma-padrão, quem chega, chega “a” um lugar: “chegou ao quartel”.",
      pegadinha: "Na fala, quase todas as erradas são comuns. A prova cobra a norma-padrão, não o uso do dia a dia.",
      conhecimento: "“Aspirar” no sentido de respirar não pede preposição: “aspirou o ar puro”. “Assistir” no sentido de ajudar também não: “assistiu o ferido”.",
    },
    {
      topico: "Colocação pronominal",
      subassunto: "Próclise, mesóclise e ênclise",
      dificuldade: 4,
      raciocinio: "Procurar palavra que atrai o pronome (negação, advérbio, interrogativo) e ver o tempo do verbo.",
      enunciado: "Assinale a frase em que a colocação do pronome segue a norma-padrão.",
      alternativas: [
        "Nunca esqueça-se de usar o colete.",
        "Me disseram que a escala mudou.",
        "Entregarei-lhe o relatório amanhã.",
        "Quem lhe contou sobre a operação?",
        "Agora negam-se a assinar o termo.",
      ],
      correta: 3,
      explicacao: "O pronome interrogativo “quem” atrai o pronome para antes do verbo: “Quem lhe contou”.",
      explicacaoErradas:
        "“Nunca” é palavra negativa e pede próclise: “Nunca se esqueça”. Na norma-padrão, não se começa período com pronome oblíquo: “Disseram-me”. No futuro do presente sem palavra que atrai, usa-se mesóclise: “Entregar-lhe-ei”. O advérbio “agora”, sem vírgula, atrai o pronome: “Agora se negam”.",
      pegadinha: "“Entregarei-lhe” parece ênclise normal, mas o futuro nunca aceita pronome depois do verbo.",
      conhecimento: "Se houver vírgula depois do advérbio, a atração acaba: “Agora, negam-se a assinar”.",
    },
    {
      topico: "Colocação pronominal",
      subassunto: "Mesóclise e ênclise depois de pausa",
      dificuldade: 5,
      raciocinio: "Ver se o verbo está no futuro, se há palavra que atrai e se há pausa antes do verbo.",
      enunciado:
        "Analise as frases quanto à colocação do pronome.\nI. Far-se-á a vistoria das viaturas na próxima semana.\nII. Não far-se-á a vistoria sem uma ordem escrita.\nIII. Se você precisar de reforço, chame-me pelo rádio.\nEstá de acordo com a norma-padrão o que se afirma em",
      alternativas: ["Apenas I e III.", "Apenas I.", "Apenas II.", "Apenas I e II.", "Apenas II e III."],
      correta: 0,
      explicacao: "Em I, o verbo está no futuro do presente e começa a frase, sem palavra que atrai: mesóclise. Em III, depois da vírgula e com o imperativo afirmativo, a ênclise está certa.",
      explicacaoErradas:
        "Em II, a palavra negativa “não” atrai o pronome e desfaz a mesóclise: “Não se fará a vistoria”. Quem marca II pensa que o futuro sempre exige mesóclise, mas a palavra que atrai tem prioridade.",
      pegadinha: "Mesóclise só entra quando não há nada antes do verbo puxando o pronome.",
      conhecimento: "O mesmo vale para o futuro do pretérito: “Ver-nos-íamos” × “Disse que nos veríamos”.",
    },
    {
      topico: "Crase",
      subassunto: "Quando há crase",
      dificuldade: 5,
      raciocinio: "Ver se a palavra seguinte aceita o artigo “a” e se há preposição antes. Masculino, verbo e pronome pessoal não aceitam artigo.",
      enunciado: "Assinale a frase em que o acento grave indicativo de crase está correto.",
      alternativas: [
        "O motorista começou à correr quando viu a blitz.",
        "Entreguei o relatório à ela no fim do turno.",
        "Ele se referiu àquela ocorrência.",
        "Fomos à Brasília para o curso de formação.",
        "O caso foi resolvido graças à dois agentes.",
      ],
      correta: 2,
      explicacao: "Quem se refere, se refere “a” algo. A preposição “a” se junta ao “a” inicial de “aquela”: “àquela ocorrência”.",
      explicacaoErradas:
        "Não há crase antes de verbo (“começou a correr”), de pronome pessoal (“a ela”) nem de palavra masculina ou numeral masculino (“graças a dois agentes”). “Brasília” não aceita artigo: quem volta, volta “de Brasília”, então se vai “a Brasília”.",
      pegadinha: "Crase pede duas coisas ao mesmo tempo: a preposição “a” e o artigo (ou o “a” de “aquela”). Faltando uma, não há acento.",
      conhecimento: "Teste da volta para nomes de lugar: “volto da” → “vou à”; “volto de” → “vou a”.",
    },
    {
      topico: "Crase",
      subassunto: "Crase facultativa e mudança de sentido",
      dificuldade: 5,
      raciocinio: "Separar os casos em que a crase é obrigatória, facultativa ou muda o sentido da frase.",
      enunciado:
        "Analise as afirmações sobre o acento grave.\nI. Em “Fui à sua casa ontem”, o acento é facultativo, porque o artigo antes de pronome possessivo é opcional.\nII. Em “Vou a festas toda semana”, falta o acento, porque “ir” sempre exige crase antes de palavra feminina.\nIII. “Ficou à sombra da árvore” e “Ficou a sombra da árvore” têm sentidos diferentes.\nIV. Em “Saiu às pressas”, há crase por ser locução adverbial com palavra feminina.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I e III.", "Apenas II e IV.", "Apenas II, III e IV.", "Apenas III e IV.", "Apenas I, III e IV."],
      correta: 4,
      explicacao: "I: antes de possessivo feminino, o artigo é opcional, então o acento também. III: com acento, a pessoa ficou embaixo da sombra; sem acento, ela virou a sombra. IV: locuções adverbiais com palavra feminina levam acento.",
      explicacaoErradas:
        "II está errada: “festas” está no plural e sem artigo, então há só a preposição “a”. Se houvesse artigo, seria “às festas”. Quem descarta I pensa que toda crase é obrigatória, mas antes de possessivo ela é facultativa.",
      pegadinha: "“a” no singular antes de palavra no plural nunca leva acento: é só preposição.",
      conhecimento: "Também é facultativa a crase antes de nome de mulher e depois de “até”: “até à porta” ou “até a porta”.",
    },
    {
      topico: "Pontuação",
      subassunto: "Uso da vírgula",
      dificuldade: 5,
      raciocinio: "Procurar vírgula entre termos que não podem ser separados e vírgula que falta onde é obrigatória.",
      enunciado: "Assinale a frase pontuada de acordo com a norma-padrão.",
      alternativas: [
        "Os policiais do batalhão, chegaram cedo ao local.",
        "Na madrugada de sábado, a equipe saiu.",
        "O sargento entregou, o relatório ao capitão.",
        "A prisão foi feita, pelos agentes da equipe.",
        "Soldado venha até aqui e traga o rádio.",
      ],
      correta: 1,
      explicacao: "“Na madrugada de sábado” é adjunto adverbial deslocado para o início e com várias palavras. Nesse caso, a vírgula é obrigatória.",
      explicacaoErradas:
        "Não se separa o sujeito do verbo (“Os policiais do batalhão chegaram”), o verbo do objeto (“entregou o relatório”) nem o verbo da passiva do agente (“foi feita pelos agentes”). O vocativo deve ser isolado: “Soldado, venha até aqui”.",
      pegadinha: "Sujeito longo dá vontade de pôr vírgula antes do verbo, mas a regra é a mesma do sujeito curto.",
      conhecimento: "Se o adjunto deslocado for curto (“Hoje a equipe saiu”), a vírgula é facultativa.",
    },
    {
      topico: "Pontuação",
      subassunto: "Dois-pontos, ponto e vírgula, travessão e aspas",
      dificuldade: 4,
      raciocinio: "Lembrar a função principal de cada sinal: anunciar, separar com pausa maior, isolar e destacar.",
      enunciado:
        "Associe cada sinal de pontuação ao seu uso.\n1. Dois-pontos\n2. Ponto e vírgula\n3. Travessão duplo\n4. Aspas\n( ) Separar orações não ligadas por conjunção, com pausa maior que a da vírgula.\n( ) Marcar uma citação ou uma palavra estrangeira.\n( ) Anunciar uma enumeração ou um esclarecimento.\n( ) Isolar um comentário no meio da frase, dando destaque a ele.\nA sequência correta, de cima para baixo, é",
      alternativas: ["2, 1, 4, 3.", "4, 2, 1, 3.", "2, 4, 3, 1.", "2, 4, 1, 3.", "1, 4, 2, 3."],
      correta: 3,
      explicacao: "Ponto e vírgula separa orações sem conjunção com pausa maior (2). Aspas marcam citação e palavra estrangeira (4). Dois-pontos anunciam enumeração ou esclarecimento (1). Travessão duplo isola um comentário (3).",
      explicacaoErradas:
        "Trocar 1 e 4 confunde quem anuncia (dois-pontos) com quem destaca (aspas). Trocar 1 e 3 confunde anunciar o que vem depois com isolar algo no meio da frase.",
      pegadinha: "Dois-pontos e travessão podem introduzir explicações, mas o travessão duplo isola no meio; os dois-pontos abrem o que vem depois.",
      conhecimento: "Parênteses isolam de forma mais completa que o travessão duplo, que dá mais destaque ao trecho.",
    },
  ],
};
