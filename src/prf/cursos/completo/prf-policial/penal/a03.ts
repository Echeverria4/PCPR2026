import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-03",
  resumo: {
    ideia:
      "A aula monta a teoria do crime: o que é crime e como ele se diferencia da contravenção; os elementos do fato típico (conduta, resultado, nexo causal e tipicidade) e as classificações dos crimes; dolo, culpa e preterdolo; as etapas do crime (iter criminis), a tentativa, o crime impossível, a desistência e os arrependimentos; e a ilicitude com suas excludentes (estado de necessidade, legítima defesa, estrito cumprimento do dever legal, exercício regular de direito, consentimento do ofendido) e o excesso punível.",
    itens: [
      {
        parte: "1. Conceito de crime e contravenção",
        termo: "Três conceitos de crime",
        faz: "Formal (legal): é o que a lei define como crime. Material: conduta que lesa ou expõe a perigo um bem jurídico relevante. Analítico: prevalece o tripartido, em que crime é fato típico, ilícito e culpável.",
      },
      {
        termo: "Crime × contravenção (art. 1º da Lei de Introdução ao CP)",
        faz: "Crime (ou delito) tem pena de reclusão ou detenção, sozinha, alternativa ou junto com multa. Contravenção tem prisão simples ou multa, ou as duas. A diferença é de grau (gravidade), escolhida pelo legislador.",
      },
      {
        termo: "Regras próprias da contravenção",
        faz: "Tentativa de contravenção não é punida; a lei brasileira não alcança contravenção praticada no exterior; a ação penal é pública incondicionada; a prisão simples não passa de 5 anos; e a Justiça Federal não julga contravenção, mesmo contra interesse da União.",
      },
      {
        termo: "Porte de droga para uso pessoal",
        faz: "O art. 28 da Lei de Drogas prevê penas sem prisão (advertência, prestação de serviços, medida educativa). Em 2024, o STF decidiu que o porte de maconha para consumo próprio é ilícito administrativo, não penal, presumindo uso pessoal até 40 g ou 6 plantas fêmeas.",
      },
      {
        parte: "2. Conduta",
        termo: "Teoria finalista",
        faz: "Adotada pelo CP: conduta é a ação ou omissão humana, consciente e voluntária, dirigida a uma finalidade. Por isso dolo e culpa ficam dentro da conduta (no fato típico), e não na culpabilidade.",
      },
      {
        termo: "Comissiva, omissiva e mista",
        faz: "Comissiva: fazer o que a lei proíbe. Omissiva própria: deixar de fazer o que a lei manda, e o próprio tipo descreve a omissão (ex.: omissão de socorro). Mista: o tipo junta ação e omissão (ex.: apropriação de coisa achada, que exige achar e não devolver).",
      },
      {
        termo: "Omissão imprópria (art. 13, § 2º)",
        faz: "Também chamada de crime comissivo por omissão: quem tinha o dever de agir para evitar o resultado e podia agir responde pelo resultado como se o tivesse causado. Tem esse dever (garantidor) quem: tem por lei obrigação de cuidado, proteção ou vigilância (ex.: pais); assumiu de outra forma a responsabilidade de impedir o resultado (ex.: babá, salva-vidas contratado); com o comportamento anterior, criou o risco.",
        pista: "Mãe que deixa o bebê morrer de fome responde por homicídio, não por omissão de socorro.",
      },
      {
        parte: "3. Resultado e nexo causal",
        termo: "Resultado naturalístico × jurídico",
        faz: "Naturalístico é a mudança no mundo real (ex.: a morte). Só os crimes materiais exigem esse resultado; nos formais ele pode ocorrer, mas não é necessário; nos de mera conduta nem existe. Resultado jurídico (normativo) é a lesão ou o perigo ao bem jurídico: está sempre presente.",
      },
      {
        termo: "Equivalência dos antecedentes (art. 13, caput)",
        faz: "Causa é toda ação ou omissão sem a qual o resultado não teria ocorrido. Para saber, elimina-se mentalmente a conduta: se o resultado desaparece, ela é causa. O excesso de causas (até o fabricante da arma) é filtrado pela exigência de dolo ou culpa.",
      },
      {
        termo: "Concausas absolutamente independentes",
        faz: "Causas que produzem o resultado sozinhas, sem relação com a conduta do agente, sejam anteriores, simultâneas ou posteriores (ex.: a vítima, já baleada, morre de envenenamento feito por outra pessoa). O agente responde só pelo que fez (tentativa), nunca pelo resultado.",
      },
      {
        termo: "Concausas relativamente independentes",
        faz: "Somam-se à conduta. Se anteriores ou simultâneas (ex.: doença que a vítima já tinha), o agente responde pelo resultado. Se posteriores e, por si sós, produzirem o resultado, rompem o nexo (art. 13, § 1º): o agente responde só pelos atos praticados (ex.: a ambulância que leva o ferido capota e ele morre do acidente).",
        pista: "Erro médico e infecção hospitalar, para o STJ, não rompem o nexo: estão na linha do risco criado.",
      },
      {
        termo: "Imputação objetiva",
        faz: "Teoria que limita o nexo: só se atribui o resultado a quem criou ou aumentou um risco proibido, se esse risco se realizou no resultado e se ele está dentro do alcance do tipo. Quem cria risco permitido (ex.: vender um carro) não responde.",
      },
      {
        parte: "4. Tipicidade e tipo penal",
        termo: "Tipicidade formal, material e conglobante",
        faz: "Formal: a conduta se encaixa na descrição da lei. Material: a conduta lesa ou ameaça de forma relevante o bem jurídico (é onde atua a insignificância). Conglobante: teoria que exige também que a conduta seja contrária ao ordenamento como um todo; o que o Direito manda ou incentiva (ex.: o oficial de justiça que cumpre penhora) nem chega a ser típico.",
      },
      {
        termo: "Elementos do tipo",
        faz: "Objetivos (descritivos): entendidos só pela leitura, como “matar alguém”. Normativos: exigem juízo de valor jurídico ou cultural, como “documento”, “indevidamente”. Subjetivos: o dolo e as finalidades especiais, como “para si ou para outrem”.",
      },
      {
        termo: "Espécies e funções do tipo",
        faz: "Tipo fundamental (simples) e derivado (qualificado ou privilegiado); fechado (descrição completa) e aberto (o juiz completa, como nos culposos). O tipo tem função de garantia (só é crime o que está descrito) e indiciária: o fato típico faz presumir, até prova em contrário, que também é ilícito.",
      },
      {
        parte: "5. Classificação dos crimes",
        termo: "Pelo resultado e pelo sujeito",
        faz: "Materiais, formais e de mera conduta (ver resultado). Comum: qualquer pessoa pratica. Próprio: exige qualidade especial do agente, mas admite coautoria e participação (ex.: peculato). De mão própria: só o próprio agente pode executar, sem coautoria (ex.: falso testemunho).",
      },
      {
        termo: "Pelo bem jurídico e pelo tempo",
        faz: "De dano: exige lesão. De perigo: basta o risco, que pode ser concreto (precisa ser provado) ou abstrato (a lei presume). Instantâneo: consuma num momento só. Permanente: a consumação se prolonga no tempo (ex.: sequestro; cabe flagrante a qualquer tempo). Instantâneo de efeitos permanentes: consuma num instante, mas o efeito fica (ex.: homicídio).",
      },
      {
        termo: "Pela estrutura e pelos atos",
        faz: "Simples (um tipo só) × complexo (soma de dois tipos, como o roubo, que junta furto e ameaça ou lesão). Unissubsistente (um ato só, não admite tentativa) × plurissubsistente (vários atos). De ação múltipla (tipo misto alternativo): vários verbos, crime único se praticados no mesmo contexto. Habitual: exige reiteração (ex.: curandeirismo).",
      },
      {
        termo: "Outras classificações",
        faz: "Monossubjetivo (pode ser praticado por um) × plurissubjetivo (exige vários, como associação criminosa). De atentado: a tentativa tem a mesma pena da consumação. Vago: o sujeito passivo é a coletividade sem personalidade jurídica. Principal × acessório (depende de crime anterior, como a receptação). De forma livre × vinculada. Multitudinário: praticado por multidão em tumulto.",
      },
      {
        termo: "Nomes que confundem",
        faz: "Putativo: o agente pensa que comete crime, mas o fato não é crime. Falho: é a tentativa perfeita (fez tudo, mas o resultado não veio). Exaurido: depois da consumação, o agente ainda atinge o objetivo (ex.: recebe o resgate no sequestro já consumado). Liliputiano (anão): outro nome da contravenção. À distância: envolve mais de um país; plurilocal: mais de uma cidade no Brasil.",
      },
      {
        parte: "6. Exclusão do fato típico",
        termo: "Hipóteses em que não há conduta ou tipicidade",
        faz: "Coação física irresistível (o agente é usado como instrumento); atos reflexos, sonambulismo e hipnose (não há vontade); força da natureza e caso fortuito; erro de tipo inevitável (afasta dolo e culpa); insignificância e adequação social (afastam a tipicidade material).",
        pista: "Coação física irresistível exclui a conduta. Coação moral irresistível exclui a culpabilidade.",
      },
      {
        parte: "7. Dolo, culpa e preterdolo",
        termo: "Dolo (art. 18, I)",
        faz: "O CP adotou a teoria da vontade (dolo direto: o agente quis o resultado) e a do assentimento (dolo eventual: assumiu o risco de produzi-lo). Dolo direto de 1º grau é o fim desejado; de 2º grau são os efeitos colaterais certos do meio escolhido (ex.: a bomba no avião para matar um passageiro mata todos).",
      },
      {
        termo: "Outras espécies de dolo",
        faz: "Alternativo: o agente aceita um ou outro resultado (ferir ou matar). Genérico × específico: a vontade de praticar o verbo × a finalidade especial exigida pelo tipo. Geral (erro sucessivo): o agente pensa que já consumou e, com nova conduta, é que causa o resultado; responde pelo crime pretendido, consumado.",
      },
      {
        termo: "Culpa (art. 18, II)",
        faz: "Resultado não querido, mas previsível, causado por quebra do dever de cuidado: imprudência (agir sem cuidado, ex.: dirigir em alta velocidade), negligência (deixar de tomar o cuidado devido, ex.: não revisar o freio) ou imperícia (falta de aptidão técnica na profissão). Só há crime culposo quando a lei prevê expressamente (art. 18, parágrafo único).",
      },
      {
        termo: "Culpa consciente × dolo eventual",
        faz: "Na culpa consciente o agente prevê o resultado, mas confia sinceramente que não vai acontecer. No dolo eventual ele prevê e não se importa (“tanto faz”). Na culpa inconsciente, nem chega a prever o que era previsível.",
      },
      {
        termo: "Culpa imprópria, compensação e concorrência",
        faz: "Culpa imprópria: o agente quer o resultado, mas por erro evitável sobre uma situação de fato (descriminante putativa) e responde por crime culposo; é o único caso de culposo que admite tentativa. No Direito Penal não há compensação de culpas: a culpa da vítima não apaga a do agente (só pesa na pena). Se dois agem com culpa sem combinar (concorrência), cada um responde pela sua.",
      },
      {
        termo: "Preterdolo",
        faz: "Dolo na conduta anterior e culpa no resultado mais grave (ex.: lesão corporal seguida de morte, art. 129, § 3º). O resultado agravador só se imputa a quem o causou ao menos culposamente (art. 19). Não admite tentativa.",
      },
      {
        parte: "8. Etapas do crime, tentativa e crime impossível",
        termo: "Iter criminis",
        faz: "Cogitação (pensar: nunca punida) → atos preparatórios (em regra não punidos, salvo quando a lei os torna crime autônomo, como a associação criminosa) → atos executórios (começa a punição) → consumação (art. 14, I: estão reunidos todos os elementos do tipo) → exaurimento (efeitos depois da consumação).",
      },
      {
        termo: "Tentativa (art. 14, II)",
        faz: "Iniciada a execução, o crime não se consuma por circunstâncias alheias à vontade do agente. Pena do consumado reduzida de 1/3 a 2/3 (teoria objetiva); quanto mais perto da consumação, menor a redução. Perfeita (acabada): esgotou os atos e o resultado não veio. Imperfeita: foi interrompido. Branca: a vítima não é atingida. Cruenta: é atingida.",
      },
      {
        termo: "Não admitem tentativa",
        faz: "Crimes culposos (salvo culpa imprópria), preterdolosos, contravenções (tentativa não punida), omissivos próprios, unissubsistentes, habituais e de atentado (a tentativa já é o próprio crime).",
      },
      {
        termo: "Crime impossível (art. 17)",
        faz: "Não se pune a tentativa quando o meio é absolutamente ineficaz (ex.: arma de brinquedo para matar) ou o objeto é absolutamente impróprio (ex.: “matar” quem já está morto). Teoria objetiva temperada: se a ineficácia for só relativa, há tentativa punível.",
        pista: "Câmeras e seguranças na loja não tornam o furto impossível por si sós (Súmula 567 do STJ). Flagrante preparado pela polícia torna o crime impossível (Súmula 145 do STF).",
      },
      {
        parte: "9. Desistência e arrependimentos",
        termo: "Desistência voluntária e arrependimento eficaz (art. 15)",
        faz: "Desistência: o agente podia continuar a execução e para por vontade própria. Arrependimento eficaz: já terminou a execução, mas age e impede o resultado. Nos dois, não responde pela tentativa, só pelos atos já praticados (ex.: desistiu de matar, responde pela lesão já causada).",
        pista: "Na tentativa, “quero, mas não posso”. Na desistência, “posso, mas não quero”. O ato precisa ser voluntário, mas não precisa ser espontâneo.",
      },
      {
        termo: "Arrependimento posterior (art. 16)",
        faz: "Nos crimes sem violência ou grave ameaça à pessoa, se o agente repara o dano ou restitui a coisa, por ato voluntário, até o recebimento da denúncia ou queixa, a pena é reduzida de 1/3 a 2/3. Depois do recebimento e até a sentença, a reparação é só atenuante (art. 65, III, b).",
      },
      {
        parte: "10. Ilicitude e estado de necessidade",
        termo: "Ilicitude (antijuridicidade)",
        faz: "É a contrariedade do fato típico ao ordenamento jurídico. Todo fato típico é, em princípio, ilícito, salvo se houver uma excludente: estado de necessidade, legítima defesa, estrito cumprimento do dever legal, exercício regular de direito (art. 23) e a causa supralegal do consentimento do ofendido. O agente precisa saber que age amparado (elemento subjetivo).",
      },
      {
        termo: "Estado de necessidade (art. 24)",
        faz: "Sacrificar um bem para salvar direito próprio ou alheio de perigo atual, que o agente não provocou por vontade própria e não podia evitar de outro modo, quando não era razoável exigir o sacrifício do bem ameaçado (ex.: arrombar a casa para fugir de um incêndio).",
      },
      {
        termo: "Teoria unitária e dever de enfrentar o perigo",
        faz: "O CP adotou a teoria unitária: se o bem salvo vale o mesmo ou mais que o sacrificado, exclui a ilicitude; se vale menos, há crime, mas a pena pode cair de 1/3 a 2/3 (§ 2º). Quem tem o dever legal de enfrentar o perigo (ex.: bombeiro) não pode alegar estado de necessidade (§ 1º), salvo quando o enfrentamento já é impossível.",
      },
      {
        termo: "Espécies do estado de necessidade",
        faz: "Próprio (salva bem seu) ou de terceiro. Agressivo (sacrifica bem de quem não criou o perigo; deve indenizar) ou defensivo (sacrifica bem de quem causou o perigo). Real (o perigo existe) ou putativo (só existe na cabeça do agente).",
      },
      {
        parte: "11. Legítima defesa",
        termo: "Requisitos (art. 25)",
        faz: "Repelir agressão injusta, atual ou iminente, a direito próprio ou alheio, usando moderadamente os meios necessários. Contra agressão justa (ex.: prisão legal) não há legítima defesa. Agressão de inimputável (ex.: doente mental) é injusta e permite legítima defesa.",
        pista: "Ataque espontâneo de animal = estado de necessidade. Animal atiçado pelo dono = legítima defesa (o animal é a arma).",
      },
      {
        termo: "Agente de segurança e refém (art. 25, parágrafo único)",
        faz: "Incluído pelo Pacote Anticrime (2019): também age em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes, desde que presentes os requisitos do caput.",
      },
      {
        termo: "Legítima defesa recíproca e sucessiva",
        faz: "Não existe legítima defesa real contra legítima defesa real (uma das agressões teria de ser justa). Cabe legítima defesa real contra a putativa, e putativa contra putativa. Legítima defesa sucessiva: quem se defendia se excede, e o agressor original passa a poder se defender do excesso.",
      },
      {
        termo: "Legítima defesa de terceiro e da honra",
        faz: "Bem disponível do terceiro (ex.: patrimônio): é preciso que ele concorde. Bem indisponível (vida): pode-se defender mesmo contra a vontade dele. A tese da “legítima defesa da honra” em feminicídio e agressões contra mulheres é inconstitucional (ADPF 779, STF, 2023) e não pode ser usada em nenhuma fase, inclusive no Júri.",
      },
      {
        parte: "12. Outras excludentes e excesso",
        termo: "Estrito cumprimento do dever legal",
        faz: "Quem cumpre um dever imposto por lei, dentro dos limites, não comete crime (ex.: o policial que cumpre mandado de prisão e usa a força necessária). Fora dos limites, há excesso.",
      },
      {
        termo: "Exercício regular de direito",
        faz: "Quem exerce um direito previsto no ordenamento não comete crime: prisão em flagrante feita por qualquer pessoa do povo (art. 301 do CPP), lesões em esporte dentro das regras, intervenção médica com consentimento. Os ofendículos (cerca elétrica, cacos de vidro no muro) são, para a maioria, exercício regular de direito ao serem instalados.",
      },
      {
        termo: "Consentimento do ofendido",
        faz: "Causa supralegal (não escrita) de exclusão da ilicitude. Exige bem disponível (ex.: patrimônio, nunca a vida), vítima capaz de consentir e consentimento dado antes ou durante o fato. Se o dissenso da vítima é elemento do tipo (ex.: violação de domicílio, “contra a vontade”), o consentimento afasta a própria tipicidade.",
      },
      {
        termo: "Excesso punível (art. 23, parágrafo único)",
        faz: "Em qualquer excludente, o agente responde pelo excesso doloso ou culposo (ex.: o policial que, após prender, agride o preso). A doutrina admite ainda o excesso exculpante, por medo ou susto intensos, que afasta a culpabilidade.",
      },
    ],
    cuidado:
      "Tentativa não cabe em crime culposo, preterdoloso, omissivo próprio nem contravenção. Na desistência e no arrependimento eficaz, o agente responde só pelos atos praticados; no arrependimento posterior, há crime consumado com pena reduzida.",
  },
  questoes: [
    {
      topico: "Fato típico",
      subassunto: "Causa superveniente relativamente independente",
      dificuldade: 5,
      raciocinio: "Pergunte se o evento novo segue a linha do ataque ou abre um risco próprio.",
      enunciado:
        "Dois homens, com intenção de matar, ferem suas vítimas sem matá-las. A primeira morre quando a ambulância que a leva é atingida por um caminhão na rodovia. A segunda morre de infecção no ferimento durante a internação. Pelo art. 13, § 1º, do CP e pelo entendimento que prevalece,",
      alternativas: [
        "os dois respondem por homicídio consumado, pois sem a conduta nada ocorreria",
        "o primeiro responde por tentativa, e o segundo, por homicídio consumado",
        "os dois respondem por tentativa, porque houve causa superveniente",
        "o primeiro responde por homicídio consumado, e o segundo, por tentativa",
        "os dois respondem por lesão culposa, por causa da intervenção de terceiro",
      ],
      correta: 1,
      explicacao:
        "O acidente da ambulância produziu sozinho o resultado, com risco próprio, e exclui a imputação da morte: os fatos anteriores valem, e fica a tentativa. A infecção está na linha de desdobramento do ferimento, e a morte é imputada ao autor.",
      explicacaoErradas:
        "“Sem a conduta nada ocorreria” é a conditio pura, limitada pelo § 1º. “Os dois por tentativa” trata a infecção como evento autônomo. A terceira hipótese inverte os casos. “Lesão culposa” ignora a intenção de matar.",
      pegadinha: "Nem toda causa nova corta o nexo: só a que produz o resultado por si só.",
      conhecimento:
        "Causas absolutamente independentes cortam sempre o nexo, e o agente responde só pelo que fez até ali.",
    },
    {
      topico: "Fato típico",
      subassunto: "Omissão imprópria do garantidor",
      dificuldade: 5,
      raciocinio: "Quem tem dever legal de agir responde pelo resultado se podia evitar e, com dolo, não agiu.",
      enunciado:
        "De serviço e sem nenhum risco pessoal, um policial vê, ao lado do posto, um homem espancar uma mulher até a morte. Podia impedir, mas decide não agir, porque deseja a morte dela. Pelo art. 13, § 2º, do CP, o policial",
      alternativas: [
        "responde por omissão de socorro, com pena triplicada pela morte",
        "responde apenas por prevaricação, porque deixou de praticar ato de ofício",
        "não responde, porque não praticou nenhum ato de agressão",
        "responde como partícipe de menor importância, com pena reduzida",
        "responde pelo resultado, pois devia e podia agir para evitá-lo",
      ],
      correta: 4,
      explicacao:
        "A omissão é penalmente relevante quando o omitente devia e podia agir. O policial tem dever legal de proteção, e a sua omissão equivale a causar o resultado, no crime comissivo por omissão.",
      explicacaoErradas:
        "“Omissão de socorro” é crime de quem não é garantidor. “Prevaricação” não dá conta de um resultado morte querido pelo garantidor. “Não praticou ato” ignora a omissão imprópria. A “menor importância” não se ajusta a quem domina a omissão com dolo.",
      pegadinha: "O dever de agir exige também poder agir: sem possibilidade real, não há imputação.",
      conhecimento:
        "As três fontes do dever são a lei, a assunção de responsabilidade e o comportamento anterior que criou o risco.",
    },
    {
      topico: "Dolo e culpa",
      subassunto: "Dolo eventual e culpa consciente",
      dificuldade: 4,
      raciocinio: "Os dois preveem. A diferença é aceitar ou rejeitar o resultado.",
      enunciado:
        "Para ganhar tempo, dois caminhoneiros ultrapassam em curva, em trechos diferentes da BR-163. O primeiro prevê que pode matar alguém, mas confia sinceramente na própria perícia. O segundo prevê o mesmo e pensa: “se matar, azar”. Ambos matam. Quanto ao elemento subjetivo, há",
      alternativas: [
        "dolo eventual nos dois casos, porque ambos previram o resultado",
        "culpa inconsciente no primeiro e dolo direto no segundo",
        "culpa consciente no primeiro e dolo eventual no segundo",
        "culpa consciente nos dois casos, porque nenhum queria matar",
        "dolo eventual no primeiro e culpa consciente no segundo",
      ],
      correta: 2,
      explicacao:
        "Na culpa consciente, o agente prevê e acredita que o resultado não ocorrerá. No dolo eventual, prevê e aceita: assume o risco (art. 18, I). A previsão é comum aos dois; muda a atitude diante do resultado.",
      explicacaoErradas:
        "“Ambos previram” não basta para o dolo. A “culpa inconsciente” exige falta de previsão, e o “dolo direto” exige querer. “Nenhum queria matar” ignora a aceitação do risco. A última opção troca os dois casos.",
      pegadinha: "Em prova, a chave é a frase mental: “confio que não” contra “tanto faz”.",
      conhecimento:
        "O CP adota as teorias da vontade (dolo direto) e do assentimento (dolo eventual).",
    },
    {
      topico: "Dolo e culpa",
      subassunto: "Preterdolo e art. 19 do CP",
      dificuldade: 5,
      raciocinio: "Sem culpa no resultado agravador, ele simplesmente não entra na conta.",
      enunciado:
        "Numa briga de trânsito, um homem dá um tapa leve no rosto de outro, querendo só humilhá-lo. A vítima, por uma doença rara que ninguém podia prever, tem uma crise e morre. Reconhecida a imprevisibilidade total do resultado, o autor",
      alternativas: [
        "responde só pelo que quis, pois a morte não lhe é atribuível nem por culpa",
        "responde por lesão corporal seguida de morte, pela responsabilidade objetiva",
        "responde por homicídio doloso, porque assumiu o risco ao agredir a vítima",
        "responde por homicídio culposo, que absorve a agressão inicial",
        "fica isento de qualquer pena, porque a doença exclui a conduta anterior",
      ],
      correta: 0,
      explicacao:
        "Pelo art. 19, o resultado que agrava a pena só pesa se causado ao menos culposamente. Sem previsibilidade não há culpa, e a morte sai da imputação. Fica a agressão querida.",
      explicacaoErradas:
        "“Responsabilidade objetiva” é vedada no Direito Penal. “Assumiu o risco” exigiria previsão e aceitação da morte. O “homicídio culposo” pressupõe previsibilidade. “Isento de qualquer pena” apaga também a agressão dolosa.",
      pegadinha: "Preterdolo pede culpa provada no resultado, e não mero nexo físico.",
      conhecimento:
        "Prevalece que o crime preterdoloso não admite tentativa, porque o agente não quer o resultado mais grave.",
    },
    {
      topico: "Iter criminis",
      subassunto: "Tentativa branca e cruenta",
      dificuldade: 4,
      raciocinio: "O critério da redução é a proximidade da consumação.",
      enunciado:
        "Com intenção de matar, um atirador dispara e erra todos os tiros. Outro acerta a vítima em três pontos vitais, e só o socorro rápido a salva. Quanto à redução do art. 14, parágrafo único, do CP, segundo o critério aceito pelos tribunais,",
      alternativas: [
        "os dois recebem a mesma fração, porque a lei fixa dois terços para a tentativa",
        "o primeiro responde só por disparo de arma, sem tentativa de homicídio",
        "o segundo recebe a maior redução, porque a vítima se salvou",
        "a redução tende a ser maior no primeiro, pois ficou mais longe da consumação",
        "a fração depende só dos antecedentes de cada um dos atiradores",
      ],
      correta: 3,
      explicacao:
        "A pena da tentativa é reduzida de um a dois terços, e a fração segue o caminho percorrido no iter criminis: quanto mais perto da consumação, menor a redução. Quem erra todos os tiros pratica a tentativa branca; quem fere, a cruenta.",
      explicacaoErradas:
        "A lei não fixa “dois terços”: dá uma faixa. O “disparo de arma” não absorve a tentativa quando há intenção de matar. A “maior redução” ao segundo inverte o critério. Os “antecedentes” pesam em outra fase da dosimetria.",
      pegadinha: "Antecedentes e gravidade em geral não medem a fração da tentativa.",
      conhecimento:
        "Não admitem tentativa, entre outros, os crimes culposos, os omissivos próprios e as contravenções (art. 4º da LCP).",
    },
    {
      topico: "Iter criminis",
      subassunto: "Arrependimento ineficaz",
      dificuldade: 5,
      raciocinio: "O art. 15 premia quem impede o resultado, e não quem apenas tenta impedir.",
      enunciado:
        "Depois de dar veneno à esposa, um homem se arrepende, confessa e a leva às pressas ao hospital. Os médicos fazem tudo, mas ela morre horas depois em razão do veneno. Pelo art. 15 do CP, ele",
      alternativas: [
        "responde só pelos atos já praticados, pelo arrependimento eficaz",
        "tem a pena reduzida de um a dois terços pelo arrependimento posterior",
        "responde pelo crime consumado, pois não conseguiu impedir o resultado",
        "responde por tentativa, porque a morte ocorreu contra a sua vontade final",
        "responde por culpa, porque a intenção mudou antes da morte da vítima",
      ],
      correta: 2,
      explicacao:
        "O arrependimento eficaz exige que o resultado seja impedido. Se a vítima morre, o arrependimento foi ineficaz, e o agente responde pelo crime consumado. O esforço pode pesar como atenuante.",
      explicacaoErradas:
        "“Atos já praticados” só vale se o resultado for evitado. O “arrependimento posterior” não cabe em crime com violência. A “tentativa” exige não consumação. A mudança de “intenção” depois da ação não transforma dolo em “culpa”.",
      pegadinha: "O nome do instituto já avisa: precisa ser eficaz.",
      conhecimento:
        "Pela fórmula usada na doutrina, na desistência o agente diz “posso, mas não quero”; na tentativa, “quero, mas não posso”.",
    },
    {
      topico: "Iter criminis",
      subassunto: "Arrependimento posterior e atenuante",
      dificuldade: 5,
      raciocinio: "O marco é o recebimento da denúncia: antes, redução; depois, atenuante.",
      enunciado:
        "Um homem furta pneus de um caminhão parado no acostamento, sem violência. Recebida a denúncia, ele devolve tudo por vontade própria e repara o prejuízo antes da sentença. Quanto a essa reparação,",
      alternativas: [
        "reduz a pena de um a dois terços, porque ocorreu antes da sentença",
        "extingue a punibilidade, porque o patrimônio foi recomposto",
        "exclui o crime, porque o furto não tem violência nem grave ameaça",
        "é irrelevante para a pena, porque ocorreu depois da denúncia recebida",
        "serve como atenuante, pois passou do marco do arrependimento posterior",
      ],
      correta: 4,
      explicacao:
        "O art. 16 exige reparação até o recebimento da denúncia ou da queixa. Depois disso, e antes do julgamento, a reparação é atenuante genérica (art. 65, III, “b”).",
      explicacaoErradas:
        "“Antes da sentença” não é o marco do art. 16. A reparação não “extingue a punibilidade” no furto. Não “exclui o crime” já consumado. Dizer “irrelevante” ignora o art. 65.",
      pegadinha: "Dois institutos, um marco: o recebimento, e não o oferecimento da denúncia.",
      conhecimento:
        "Prevalece que, sendo circunstância objetiva, a redução do art. 16 alcança os coautores quando a reparação é integral.",
    },
    {
      topico: "Iter criminis",
      subassunto: "Crime impossível: Súmula 567 do STJ",
      dificuldade: 4,
      raciocinio: "A ineficácia precisa ser absoluta. Vigilância dificulta, mas não impede.",
      enunciado:
        "Na loja de conveniência de um posto na BR-101, um homem esconde produtos na mochila. Câmeras e um segurança acompanham tudo, e ele é detido na saída. A defesa alega crime impossível. Segundo a Súmula 567 do STJ,",
      alternativas: [
        "a vigilância constante torna o meio absolutamente ineficaz",
        "o monitoramento, por si só, não torna impossível o furto",
        "o crime só existiria se o agente tivesse deixado a loja",
        "a segurança privada transforma o furto em ato preparatório",
        "o fato é atípico sempre que a loja tenha câmeras visíveis",
      ],
      correta: 1,
      explicacao:
        "A Súmula 567 do STJ diz que sistema de monitoramento eletrônico ou existência de segurança no interior de estabelecimento comercial, por si só, não torna impossível a configuração do crime de furto. Há, ao menos, tentativa.",
      explicacaoErradas:
        "A ineficácia “absolutamente” exigida pelo art. 17 não ocorre. Não é preciso “deixar a loja” para haver tentativa. Esconder bens já é execução, e não “ato preparatório”. “Câmeras visíveis” não tornam o fato atípico.",
      pegadinha: "“Por si só” é a chave: a súmula não fecha a porta em casos extremos.",
      conhecimento:
        "Pela Súmula 145 do STF, não há crime quando a preparação do flagrante pela polícia torna impossível a consumação.",
    },
    {
      topico: "Excludentes de ilicitude",
      subassunto: "Estado de necessidade e sacrifício desproporcional",
      dificuldade: 5,
      raciocinio: "O CP compara os bens. Se era razoável sacrificar o seu, a ilicitude fica.",
      enunciado:
        "Na enchente, para salvar o carro novo, um motorista empurra um idoso que atrapalhava a passagem, causando-lhe lesão grave. Considerando-se que era razoável exigir o sacrifício do veículo, pelo art. 24 do CP,",
      alternativas: [
        "não há exclusão do crime, mas a pena pode cair de um a dois terços",
        "há estado de necessidade justificante, porque o perigo era atual",
        "há exclusão da culpabilidade, pela teoria diferenciadora do Código",
        "só a tentativa é punível, porque o perigo não foi criado pelo agente",
        "há legítima defesa do patrimônio, porque o idoso impedia a passagem",
      ],
      correta: 0,
      explicacao:
        "O estado de necessidade exige que o sacrifício do bem do agente não fosse razoável. Aqui era razoável, então não há excludente. O § 2º permite apenas reduzir a pena de um a dois terços. O CP adota a teoria unitária.",
      explicacaoErradas:
        "“Perigo atual” não basta: falta a proporção. A “teoria diferenciadora” é a do Código Penal Militar, e não a do CP. “Só a tentativa” não tem base. Na “legítima defesa”, exige-se agressão injusta, e o idoso não agrediu ninguém.",
      pegadinha: "Reduzir a pena não é o mesmo que excluir o crime.",
      conhecimento:
        "Pelo § 1º do art. 24, quem tem o dever legal de enfrentar o perigo não pode alegar estado de necessidade.",
    },
    {
      topico: "Excludentes de ilicitude",
      subassunto: "Legítima defesa do refém",
      dificuldade: 4,
      raciocinio: "O parágrafo único do art. 25 não dispensa os requisitos do caput.",
      enunciado:
        "Um homem mantém um frentista como refém, com faca no pescoço, durante roubo em posto na BR-116. Um policial rodoviário atira no autor e faz cessar a agressão. Pelo art. 25, parágrafo único, do CP, o policial",
      alternativas: [
        "age em exercício regular de direito, sem exame de moderação",
        "fica dispensado de todos os requisitos da legítima defesa",
        "só teria a excludente se o refém fosse outro agente público",
        "age em legítima defesa, observados os requisitos do caput",
        "só poderia agir com ordem do superior que comanda a ocorrência",
      ],
      correta: 3,
      explicacao:
        "A regra diz que, observados os requisitos do caput, considera-se também em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes.",
      explicacaoErradas:
        "Não é “exercício regular de direito”. A lei manda observar os requisitos, o que afasta “dispensado de todos”. O refém não precisa ser “agente público”. “Ordem do superior” não é requisito.",
      pegadinha: "A norma esclarece um caso de legítima defesa; ela não cria licença ampla.",
      conhecimento:
        "O parágrafo foi incluído pelo Pacote Anticrime (Lei 13.964/2019).",
    },
    {
      topico: "Excludentes de ilicitude",
      subassunto: "Excesso na legítima defesa",
      dificuldade: 5,
      raciocinio: "A excludente termina quando a agressão termina.",
      enunciado:
        "Atacado com um pedaço de ferro, um motorista saca a arma e acerta o agressor, que cai desarmado e sem reação. Com raiva, ele dá mais dois tiros, e são estes que matam. Sobre a responsabilidade do motorista,",
      alternativas: [
        "a legítima defesa cobre todos os disparos, por ser uma só ocorrência",
        "o primeiro tiro é crime, e os demais são lícitos, por terem sido defensivos",
        "ele responde pelo excesso doloso, pois cessada a agressão não há defesa",
        "ele fica isento de pena, porque a emoção exclui a imputabilidade penal",
        "ele responde só por lesão culposa, porque a defesa inicial era lícita",
      ],
      correta: 2,
      explicacao:
        "Pelo art. 23, parágrafo único, o agente responde pelo excesso doloso ou culposo. Depois de dominado o agressor, a agressão deixou de ser atual, e os tiros finais, intencionais, são punidos como crime doloso.",
      explicacaoErradas:
        "“Uma só ocorrência” ignora o fim da agressão. A segunda opção inverte os momentos. A “emoção” não exclui a imputabilidade (art. 28, I). “Lesão culposa” não cabe em tiros dados com intenção.",
      pegadinha: "O início lícito da defesa não contamina o restante, nem o protege.",
      conhecimento:
        "Na ADPF 779, o STF declarou inconstitucional a tese da legítima defesa da honra.",
    },
    {
      topico: "Excludentes de ilicitude",
      subassunto: "Ofendículos",
      dificuldade: 4,
      raciocinio: "O aparato é lícito se for proporcional e não atingir inocentes de forma previsível.",
      enunciado:
        "O dono de um sítio à beira da rodovia instala cerca elétrica, com avisos, e um invasor sofre um choque ao pular de madrugada. Sobre a defesa predisposta (ofendículo),",
      alternativas: [
        "é sempre crime doloso, pois ninguém pode fazer justiça pelas próprias mãos",
        "o proprietário fica imune mesmo com aparato letal e oculto ao público",
        "só é lícita se aprovada antes por autoridade policial do município",
        "exclui a culpabilidade, porque o dono estava ausente no momento",
        "exclui a ilicitude se for proporcional, e o excesso é punível",
      ],
      correta: 4,
      explicacao:
        "A doutrina trata os ofendículos como exercício regular de direito ou legítima defesa preordenada. Em ambos os casos, excluem a ilicitude, desde que proporcionais. O excesso segue o art. 23, parágrafo único.",
      explicacaoErradas:
        "“Justiça pelas próprias mãos” descreve o art. 345, que não se ajusta a defesa proporcional. “Aparato letal e oculto” configura excesso. “Autoridade policial” não aprova ofendículo. A questão é de ilicitude, e não de “culpabilidade”.",
      pegadinha: "O aviso e a proporção contam: a lei protege a defesa, e não a armadilha.",
      conhecimento:
        "O consentimento do ofendido é causa supralegal: exige bem disponível, capacidade e manifestação anterior ou simultânea ao fato.",
    },
  ],
};
