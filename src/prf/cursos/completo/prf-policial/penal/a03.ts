import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-03",
  resumo: {
    ideia:
      "Crime é fato típico, ilícito e culpável. Esta aula cuida das duas primeiras partes: como a conduta se liga ao resultado, o que é dolo e culpa, até onde o crime chegou e quando a lei autoriza o fato.",
    itens: [
      {
        termo: "Fato típico",
        faz: "Conduta, resultado, nexo causal e tipicidade.",
      },
      {
        termo: "Causa superveniente",
        faz: "Se é relativamente independente e produz sozinha o resultado, corta a imputação, e o agente responde só pelos atos anteriores (art. 13, § 1º).",
        pista: "Acidente da ambulância corta. Infecção do ferimento não corta.",
      },
      {
        termo: "Omissão imprópria",
        faz: "Quem devia e podia agir responde pelo resultado: dever legal, assunção do encargo ou risco criado antes (art. 13, § 2º).",
      },
      {
        termo: "Dolo e culpa",
        faz: "Dolo direto: quis. Eventual: assumiu o risco. Culpa consciente: previu, mas confiou que não ocorreria. Inconsciente: não previu o que era previsível.",
      },
      {
        termo: "Preterdolo",
        faz: "Dolo no antecedente e culpa no consequente. O resultado agravador só pesa se causado ao menos culposamente (art. 19).",
      },
      {
        termo: "Tentativa",
        faz: "Iniciada a execução, não se consuma por circunstâncias alheias à vontade: reduz de um a dois terços, conforme a proximidade da consumação (art. 14).",
      },
      {
        termo: "Desistência e arrependimento eficaz",
        faz: "O agente interrompe a execução ou impede o resultado e responde só pelos atos já praticados (art. 15).",
      },
      {
        termo: "Arrependimento posterior",
        faz: "Sem violência ou grave ameaça, com reparação voluntária até o recebimento da denúncia ou queixa: reduz de um a dois terços (art. 16).",
      },
      {
        termo: "Crime impossível",
        faz: "Ineficácia absoluta do meio ou impropriedade absoluta do objeto (art. 17). Não há tentativa punível.",
      },
      {
        termo: "Estado de necessidade",
        faz: "Salvar direito de perigo atual não provocado por vontade própria, sem outro modo de evitar. Quem tem dever legal de enfrentar o perigo não pode alegar.",
      },
      {
        termo: "Legítima defesa",
        faz: "Repelir agressão injusta, atual ou iminente, com meios necessários e moderação. Inclui o agente de segurança que protege refém (art. 25, parágrafo único).",
      },
    ],
    cuidado:
      "O excesso é punível em todas as excludentes de ilicitude, seja doloso, seja culposo (art. 23, parágrafo único).",
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
