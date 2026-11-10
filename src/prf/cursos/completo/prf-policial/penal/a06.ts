import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-06",
  resumo: {
    ideia:
      "Os crimes contra a pessoa protegem a vida, a integridade física, a honra e a liberdade. Esta parte do Código mudou muito desde 2024: feminicídio virou crime próprio, surgiu o vicaricídio e várias penas subiram.",
    itens: [
      {
        termo: "Homicídio",
        faz: "Simples: 6 a 20 anos. Privilegiado: reduz de um sexto a um terço. Qualificado: 12 a 30 anos. O privilégio convive só com qualificadora objetiva e afasta a hediondez.",
      },
      {
        termo: "Feminicídio",
        faz: "Crime próprio do art. 121-A, com pena de 20 a 40 anos. As circunstâncias pessoais do § 1º se comunicam ao coautor e ao partícipe.",
      },
      {
        termo: "Vicaricídio",
        faz: "Art. 121-B: matar filho, parente ou dependente da mulher para fazê-la sofrer, em contexto de violência doméstica. Pena de 20 a 40 anos.",
      },
      {
        termo: "Art. 122",
        faz: "Induzir, instigar ou auxiliar suicídio ou automutilação. Contra menor de 14 anos ou quem não tem discernimento: lesão gravíssima ou homicídio.",
      },
      {
        termo: "Infanticídio",
        faz: "Mãe, durante o parto ou logo após, sob influência do estado puerperal. Quem colabora responde pelo mesmo crime.",
      },
      {
        termo: "Aborto",
        faz: "Sem consentimento: 3 a 10 anos. Com consentimento: 1 a 4 anos. Gestante de até 14 anos conta como sem consentimento. Médico não é punido nos casos do art. 128.",
      },
      {
        termo: "Lesão corporal",
        faz: "Grave: debilidade permanente, perigo de vida, mais de 30 dias, aceleração de parto. Gravíssima: perda ou inutilização, deformidade, enfermidade incurável, aborto.",
      },
      {
        termo: "Violência doméstica",
        faz: "Lesão: reclusão de 2 a 5 anos. Ação pública incondicionada (Súmula 542 do STJ) e sem transação nem suspensão do processo (Súmula 536).",
      },
      {
        termo: "Periclitação",
        faz: "Abandono de incapaz e maus-tratos subiram em 2025: 2 a 5 anos, 3 a 7 com lesão grave, 8 a 14 com morte. Omissão de socorro: triplica com a morte.",
      },
      {
        termo: "Rixa",
        faz: "Lesão grave ou morte qualificam a pena de todos, só pela participação, inclusive a de quem se feriu.",
      },
      {
        termo: "Honra",
        faz: "Calúnia: fato criminoso falso. Difamação: fato ofensivo. Injúria: xingamento. Nas redes sociais, a pena é aplicada em triplo. A retratação vale só na calúnia e na difamação.",
      },
      {
        termo: "Liberdade",
        faz: "Art. 147-A perseguição, art. 147-B violência psicológica (aumenta de metade com IA), art. 149 condição análoga à de escravo, art. 149-A tráfico de pessoas.",
      },
    ],
    cuidado:
      "Material antigo trata o feminicídio como qualificadora do art. 121: desde a Lei 14.994/2024 ele é o art. 121-A.",
  },
  questoes: [
    {
      topico: "Homicídio",
      subassunto: "Homicídio qualificado-privilegiado",
      dificuldade: 5,
      raciocinio: "O privilégio é subjetivo: só convive com qualificadora objetiva.",
      enunciado:
        "Logo após saber do estupro da filha, um pai, dominado por violenta emoção, mata o autor com um tiro pelas costas, sem chance de defesa. Quanto à tipificação e à hediondez, segundo o entendimento dominante,",
      alternativas: [
        "é homicídio simples, pois o privilégio anula a qualificadora",
        "é homicídio qualificado e hediondo, sem nenhuma redução de pena",
        "cabem o privilégio e a qualificadora objetiva, sem hediondez",
        "o privilégio só seria possível se o motivo fosse de valor social",
        "é homicídio culposo, por causa do domínio de violenta emoção",
      ],
      correta: 2,
      explicacao:
        "O privilégio do § 1º é subjetivo e convive com a qualificadora objetiva do recurso que dificulta a defesa. Prevalece que o homicídio qualificado-privilegiado não é hediondo.",
      explicacaoErradas:
        "O privilégio não “anula a qualificadora”. “Sem nenhuma redução” ignora o § 1º. “Valor social” é só uma das hipóteses do privilégio. A emoção não torna o fato “culposo”, porque a morte foi querida.",
      pegadinha: "Motivo torpe ou fútil não convive com privilégio: os dois são subjetivos.",
      conhecimento:
        "O § 1º exige reação logo em seguida a injusta provocação da vítima, sob o domínio de violenta emoção.",
    },
    {
      topico: "Feminicídio",
      subassunto: "Art. 121-A e comunicação ao coautor",
      dificuldade: 5,
      raciocinio: "A lei resolveu a discussão de modo expresso no § 3º.",
      enunciado:
        "Um homem mata a ex-companheira em contexto de violência doméstica. Um amigo dele, sem vínculo com a vítima, ajuda a planejar e dirige o carro, ciente de tudo. Pelo art. 121-A, § 3º, do CP, o amigo",
      alternativas: [
        "responde também por feminicídio, com pena de 20 a 40 anos",
        "responde por homicídio qualificado, porque a relação é pessoal",
        "responde por homicídio simples, com a agravante do art. 61",
        "responde por feminicídio só se ele próprio tiver relação com a vítima",
        "não responde, pois a participação em crime de gênero é atípica",
      ],
      correta: 0,
      explicacao:
        "O § 3º do art. 121-A diz que se comunicam ao coautor ou partícipe as circunstâncias pessoais elementares do crime previstas no § 1º. O amigo também responde por feminicídio.",
      explicacaoErradas:
        "“Homicídio qualificado” ignora a comunicação expressa. “Homicídio simples” também. “Só se tiver relação” contraria o § 3º. “Atípica” não tem base.",
      pegadinha: "Feminicídio já não é qualificadora do art. 121: é crime autônomo.",
      conhecimento:
        "O inciso VI do § 2º do art. 121 foi revogado pela Lei 14.994/2024.",
    },
    {
      topico: "Feminicídio",
      subassunto: "Vicaricídio",
      dificuldade: 5,
      raciocinio: "Quem morre não é a mulher, mas a finalidade é atingi-la.",
      enunciado:
        "Para punir a ex-companheira, que o deixou, um homem mata, na frente dela, o filho dela de 9 anos, em contexto de violência doméstica e familiar. Pela Lei 15.384/2026, o fato",
      alternativas: [
        "é feminicídio consumado, pois o fim era atingir a mulher",
        "é homicídio qualificado por motivo torpe, pois não há tipo próprio",
        "é homicídio simples, com aumento pela idade da criança",
        "é tentativa de feminicídio em concurso com homicídio culposo",
        "é vicaricídio do art. 121-B, com aumento de um terço até metade",
      ],
      correta: 4,
      explicacao:
        "O art. 121-B pune matar descendente, ascendente, dependente, enteado ou pessoa sob guarda da mulher, com o fim de causar-lhe sofrimento, punição ou controle: 20 a 40 anos. A presença da mulher e a idade da vítima aumentam de um terço até metade.",
      explicacaoErradas:
        "“Feminicídio consumado” exige a morte da mulher. “Não há tipo próprio” é a situação anterior à Lei 15.384/2026. “Simples” ignora o tipo especial. “Tentativa de feminicídio” não descreve o que foi feito.",
      pegadinha: "O nome é novo, e material anterior a abril de 2026 não traz o crime.",
      conhecimento:
        "O descumprimento de medida protetiva também aumenta a pena do art. 121-B.",
    },
    {
      topico: "Art. 122",
      subassunto: "Vítima menor de 14 anos",
      dificuldade: 5,
      raciocinio: "A idade tira a vítima do art. 122 e leva ao homicídio.",
      enunciado:
        "Em um grupo de rede social, o administrador instiga um menino de 13 anos a se mutilar, e o menino morre em consequência disso. Pelos §§ 2º, 5º e 7º do art. 122 do CP, o administrador",
      alternativas: [
        "responde pelo art. 122, com a pena em dobro, pela liderança do grupo",
        "responde por homicídio, porque a vítima tinha menos de 14 anos",
        "responde por lesão gravíssima, com pena aumentada pela rede social",
        "não responde, porque foi a própria vítima que praticou o ato",
        "responde por auxílio ao suicídio, com pena de 2 a 6 anos",
      ],
      correta: 1,
      explicacao:
        "Pelo § 7º, se do crime resulta morte e a vítima é menor de 14 anos, ou não tem discernimento, responde o agente por homicídio, nos termos do art. 121.",
      explicacaoErradas:
        "“Pena em dobro” e “2 a 6 anos” valeriam para vítima sem essa condição. “Lesão gravíssima” é o § 6º, sem morte. “Não responde” ignora o tipo.",
      pegadinha: "Sem morte, a lesão gravíssima nessa vítima leva ao art. 129, § 2º.",
      conhecimento:
        "Induzir cria a ideia na mente da vítima. Instigar reforça ideia que já existe.",
    },
    {
      topico: "Homicídio",
      subassunto: "Qualificadora funcional e parentesco",
      dificuldade: 5,
      raciocinio: "Compare as duas alíneas do inciso VII: uma fala em sangue, outra em afinidade.",
      enunciado:
        "Por vingança contra um policial rodoviário federal, em razão de apreensões feitas em serviço, um homem mata o enteado do policial, que não tem vínculo de sangue com ele. Quanto à qualificadora específica do art. 121, § 2º, VII, “a”, do CP,",
      alternativas: [
        "incide, porque o policial integra o rol do art. 144 da Constituição",
        "incide, porque a lei alcança parentes por afinidade até o terceiro grau",
        "incide, porque basta o crime estar ligado à função pública do agente",
        "não incide, porque a alínea “a” só cita parente consanguíneo",
        "não incide, porque o policial não estava de serviço no dia do crime",
      ],
      correta: 3,
      explicacao:
        "A alínea “a” protege os agentes dos arts. 142 e 144 da CF e outros, além do cônjuge, companheiro ou parente consanguíneo até o terceiro grau. Enteado é parente por afinidade. A alínea “b”, de magistrados e outros, é a que inclui afinidade. Pode incidir outra qualificadora, como o motivo torpe.",
      explicacaoErradas:
        "“Integra o rol” não alcança o enteado. “Afinidade” está na alínea “b”. “Basta o crime” ignora quem são os protegidos. “De serviço” não é o motivo, pois a lei inclui crime em decorrência da função.",
      pegadinha: "As duas alíneas parecem iguais até o trecho do parentesco.",
      conhecimento:
        "O homicídio com arma de fogo de uso restrito ou proibido também qualifica (art. 121, § 2º, VIII).",
    },
    {
      topico: "Aborto",
      subassunto: "Consentimento inválido",
      dificuldade: 4,
      raciocinio: "Consentimento de quem não tem mais de 14 anos não vale.",
      enunciado:
        "Um homem provoca aborto em uma gestante de 13 anos, que concordou com o ato. Não houve lesão nem morte da gestante. Pelo art. 126, parágrafo único, do CP, ele responde",
      alternativas: [
        "como se não houvesse consentimento, com pena de 3 a 10 anos",
        "pelo aborto consentido, com pena de reclusão de 1 a 4 anos",
        "como partícipe do autoaborto, porque ela é a autora",
        "por estupro de vulnerável, que absorve o crime de aborto",
        "pelo aborto consentido, com a pena reduzida pela idade",
      ],
      correta: 0,
      explicacao:
        "O parágrafo único do art. 126 manda aplicar a pena do art. 125 se a gestante não é maior de 14 anos, é alienada ou débil mental, ou se o consentimento foi obtido por fraude, grave ameaça ou violência.",
      explicacaoErradas:
        "“Aborto consentido” não vale sem consentimento válido, e a “idade” não reduz a pena. “Autoaborto” pressupõe que a gestante seja autora. “Estupro de vulnerável” não absorve outro bem jurídico.",
      pegadinha: "A lei diz “não é maior de quatorze anos”: 14 anos completos também entram.",
      conhecimento:
        "Na ADPF 54, o STF afastou a tipificação no caso de feto anencéfalo.",
    },
    {
      topico: "Infanticídio",
      subassunto: "Concurso de pessoas",
      dificuldade: 5,
      raciocinio: "Estado puerperal é elementar do tipo. Elementar se comunica.",
      enunciado:
        "Sob influência do estado puerperal, logo após o parto, uma mulher mata o próprio filho com a ajuda do companheiro, que sabe de tudo. Segundo o entendimento dominante, com base no art. 30 do CP, o companheiro",
      alternativas: [
        "responde por homicídio, porque o puerpério é condição pessoal da mãe",
        "responde por homicídio qualificado, e a mãe, por infanticídio",
        "responde por infanticídio, porque a elementar pessoal se comunica",
        "não responde, porque só a mãe pode ser autora desse crime",
        "responde por omissão de socorro, pela posição de pai da criança",
      ],
      correta: 2,
      explicacao:
        "Pelo art. 30, circunstâncias pessoais não se comunicam, salvo quando elementares. O estado puerperal é elementar do art. 123, e quem colabora ciente disso responde por infanticídio.",
      explicacaoErradas:
        "“Condição pessoal” é verdade, mas é elementar. “Homicídio qualificado” quebra a unidade do crime sem base legal. “Só a mãe” é a autoria, sem afastar a participação. “Omissão de socorro” não descreve quem ajudou a matar.",
      pegadinha: "O resultado é aparentemente injusto, mas é a posição majoritária.",
      conhecimento:
        "Se a mãe mata outro bebê por engano, responde igualmente por infanticídio, pela regra do erro sobre a pessoa.",
    },
    {
      topico: "Lesão corporal",
      subassunto: "Órgão duplo e perda de função",
      dificuldade: 5,
      raciocinio: "Órgão duplo: perder um enfraquece, perder os dois acaba com a função.",
      enunciado:
        "Numa briga em um posto de combustíveis, uma vítima perde um dos rins, e o outro segue funcionando bem. Em outro caso, a vítima perde a visão dos dois olhos. Pelo art. 129, §§ 1º e 2º, do CP, e pela lição corrente,",
      alternativas: [
        "as duas lesões são gravíssimas, pois houve perda de órgão",
        "as duas lesões são graves, porque as vítimas seguem vivas",
        "a primeira é gravíssima, e a segunda é de natureza grave",
        "a primeira é leve, pois a função foi mantida pelo outro rim",
        "a primeira é grave, por debilidade, e a segunda é gravíssima",
      ],
      correta: 4,
      explicacao:
        "Em órgãos duplos, perder um causa debilidade permanente da função (§ 1º, III, lesão grave). Perder os dois é perda ou inutilização da função (§ 2º, III, a chamada lesão gravíssima).",
      explicacaoErradas:
        "“Perda de órgão” não é o critério: a lei fala em função. “Seguem vivas” não define a gravidade. A terceira opção inverte os casos. “Leve” ignora a debilidade permanente.",
      pegadinha: "“Gravíssima” é nome da doutrina: a lei só separa as penas dos §§ 1º e 2º.",
      conhecimento:
        "Aceleração de parto está no § 1º, e aborto, no § 2º. Em ambos, o resultado é culposo.",
    },
    {
      topico: "Lesão corporal",
      subassunto: "Violência doméstica e súmulas do STJ",
      dificuldade: 4,
      raciocinio: "No âmbito da Lei Maria da Penha, nada da Lei 9.099.",
      enunciado:
        "Um homem causa lesão leve na esposa, em casa. Na delegacia, ela diz que não quer ver o marido processado, e a defesa pede transação penal. Pelas Súmulas 536 e 542 do STJ,",
      alternativas: [
        "a ação depende de representação, e cabe a transação penal",
        "a ação é pública incondicionada, e não cabe a transação",
        "a ação é privada, e a retratação extingue a punibilidade",
        "a ação é incondicionada, e cabe a suspensão do processo",
        "a ação depende de representação, sem a transação penal",
      ],
      correta: 1,
      explicacao:
        "A Súmula 542 diz que a ação penal por lesão resultante de violência doméstica contra a mulher é pública incondicionada. A Súmula 536 afasta a transação penal e a suspensão condicional do processo nesses casos.",
      explicacaoErradas:
        "As opções com “representação” contrariam a Súmula 542. “Privada” não é a natureza da ação. “Cabe a suspensão” contraria a Súmula 536.",
      pegadinha: "A vontade da vítima não impede a ação nesse caso.",
      conhecimento:
        "A pena do § 9º subiu para reclusão de 2 a 5 anos, e o § 13 prevê a mesma pena para lesão contra a mulher por razões do sexo feminino.",
    },
    {
      topico: "Periclitação",
      subassunto: "Omissão de socorro e CTB",
      dificuldade: 4,
      raciocinio: "Quem não está envolvido no acidente cai no Código Penal.",
      enunciado:
        "Um caminhoneiro que não participou do acidente vê um motociclista ferido na pista e segue viagem, embora pudesse ajudar sem risco e sem demora. O motociclista morre por falta de socorro. Ele responde",
      alternativas: [
        "pelo art. 304 do CTB, como todo condutor que passa no local",
        "por homicídio culposo de trânsito, com a pena aumentada",
        "por homicídio doloso, por dever de garantidor na estrada",
        "pelo art. 135 do CP, com a pena triplicada pela morte",
        "por nenhum crime, porque não causou o acidente",
      ],
      correta: 3,
      explicacao:
        "A omissão de socorro do art. 135 do CP alcança qualquer pessoa que pode ajudar sem risco. Se a morte resulta, a pena é triplicada. O art. 304 do CTB é para o condutor envolvido no acidente.",
      explicacaoErradas:
        "O “art. 304” não é de quem apenas passa. “Homicídio culposo de trânsito” exige causar a morte na direção. Não existe “garantidor na estrada” para quem passa. “Nenhum crime” ignora o dever geral de solidariedade.",
      pegadinha: "Sem lesão grave ou morte, a pena é de 1 a 6 meses ou multa.",
      conhecimento:
        "O art. 135-A pune exigir cheque-caução ou garantia para atendimento médico de emergência.",
    },
    {
      topico: "Periclitação",
      subassunto: "Maus-tratos com a pena de 2025",
      dificuldade: 5,
      raciocinio: "A pena subiu muito pela Lei 15.163/2025. Não confie em tabela antiga.",
      enunciado:
        "Em um abrigo, um cuidador abusa dos meios de correção contra um adolescente de 15 anos sob sua guarda, que sofre lesão grave. Pelo art. 136, § 1º, do CP, na redação da Lei 15.163/2025, a pena é de",
      alternativas: [
        "detenção, de 1 a 4 anos",
        "reclusão, de 2 a 5 anos",
        "reclusão, de 3 a 7 anos",
        "reclusão, de 8 a 14 anos",
        "detenção, de 2 meses a 1 ano",
      ],
      correta: 2,
      explicacao:
        "A Lei 15.163/2025 elevou as penas do art. 136: reclusão de 2 a 5 anos no caput, 3 a 7 com lesão grave e 8 a 14 com morte. O aumento de um terço do § 3º vale só para menor de 14 anos.",
      explicacaoErradas:
        "“Detenção, de 1 a 4 anos” e “de 2 meses a 1 ano” são as penas antigas. “2 a 5 anos” é o caput, sem lesão grave. “8 a 14 anos” é com morte.",
      pegadinha: "A tabela do art. 133 (abandono de incapaz) passou a ser igual.",
      conhecimento:
        "Se a intenção é causar intenso sofrimento como castigo, a conduta pode ser tortura (Lei 9.455/1997).",
    },
    {
      topico: "Rixa",
      subassunto: "Rixa qualificada",
      dificuldade: 5,
      raciocinio: "A lei pune todos pela simples participação.",
      enunciado:
        "Seis pessoas trocam socos em um pátio de posto, sem lados definidos. Um dos participantes sofre lesão grave, e não se descobre quem a causou. Pelo art. 137, parágrafo único, do CP,",
      alternativas: [
        "todos respondem por rixa qualificada, inclusive o ferido",
        "ninguém responde, porque não se identificou o autor da lesão",
        "todos respondem por lesão grave, em coautoria sucessiva",
        "só respondem os participantes sem ferimentos, pela rixa simples",
        "o ferido fica de fora, por ser ele a vítima da lesão grave",
      ],
      correta: 0,
      explicacao:
        "Se ocorre morte ou lesão grave, aplica-se, pelo fato da participação na rixa, a pena de 6 meses a 2 anos. Isso alcança todos, inclusive quem se feriu. Se o autor da lesão for identificado, ele responde também por ela.",
      explicacaoErradas:
        "“Ninguém responde” ignora o tipo. “Lesão grave em coautoria” exigiria identificar o vínculo. “Só os participantes sem ferimentos” e “o ferido fica de fora” contrariam a lei.",
      pegadinha: "A rixa exige ao menos três pessoas e confusão de agressões.",
      conhecimento:
        "Quem entra para separar os contendores não participa da rixa.",
    },
    {
      topico: "Crimes contra a honra",
      subassunto: "Calúnia em rede social",
      dificuldade: 4,
      raciocinio: "Fato definido como crime e falso: calúnia. Depois olhe o meio.",
      enunciado:
        "Em vídeo nas redes sociais, um motorista afirma, sabendo ser falso, que certo policial rodoviário federal recebeu propina em uma abordagem. Sobre o crime e o art. 141 do CP,",
      alternativas: [
        "é difamação, e a pena é aumentada de um terço",
        "é injúria, e a ação é privada, sem nenhum aumento",
        "é calúnia, e a pena sobe um terço só por causa da função",
        "é difamação, e a pena é aplicada em triplo, pela rede social",
        "é calúnia, e a pena é aplicada em triplo, pela rede social",
      ],
      correta: 4,
      explicacao:
        "Imputar falsamente fato definido como crime é calúnia (art. 138). Receber propina é corrupção passiva. Pelo art. 141, § 2º, se o crime é cometido ou divulgado em redes sociais, a pena é aplicada em triplo.",
      explicacaoErradas:
        "“Difamação” imputa fato ofensivo que não é crime. “Injúria” não imputa fato. “Só por causa da função” ignora o meio usado, previsto no § 2º.",
      pegadinha: "A Súmula 714 do STF dá legitimidade concorrente ao ofendido, por queixa, e ao MP, por representação.",
      conhecimento:
        "Na calúnia, cabe exceção da verdade, salvo nos casos do art. 138, § 3º.",
    },
    {
      topico: "Crimes contra a honra",
      subassunto: "Retratação",
      dificuldade: 4,
      raciocinio: "Retrata-se de fato. Na injúria, não há fato.",
      enunciado:
        "Processado por calúnia e por injúria contra o mesmo ofendido, o querelado se retrata cabalmente, por escrito, antes da sentença. Pelo art. 143 do CP,",
      alternativas: [
        "fica isento de pena nos dois crimes, por ser retratação cabal",
        "fica isento só na calúnia, e a injúria segue no processo",
        "a retratação só vale se o ofendido aceitar expressamente",
        "a retratação só reduz a pena, de um a dois terços",
        "a retratação só seria possível antes do recebimento da queixa",
      ],
      correta: 1,
      explicacao:
        "O art. 143 isenta de pena o querelado que, antes da sentença, se retrata cabalmente da calúnia ou da difamação. A injúria fica fora, porque atinge a honra subjetiva. A retratação é ato unilateral.",
      explicacaoErradas:
        "“Nos dois crimes” inclui a injúria, que a lei deixou de fora. “Aceitar expressamente” é regra do perdão. “Reduz a pena” não é o efeito: há isenção. “Recebimento” não é o marco, que é a sentença.",
      pegadinha: "Se a ofensa foi por meio de comunicação, a retratação segue o mesmo meio, se o ofendido quiser.",
      conhecimento:
        "Injúria com elementos de raça ou cor saiu do art. 140, § 3º, para o art. 2º-A da Lei 7.716/1989.",
    },
    {
      topico: "Liberdade individual",
      subassunto: "Violência psicológica com inteligência artificial",
      dificuldade: 5,
      raciocinio: "A Lei 15.123/2025 trouxe aumento próprio para esse meio.",
      enunciado:
        "Para controlar as decisões da ex-namorada e causar-lhe dano emocional, um homem espalha entre os amigos dela um vídeo falso feito com inteligência artificial. Quanto ao art. 147-B do CP, o uso desse recurso",
      alternativas: [
        "não muda a pena, por ser só um meio de execução",
        "dobra a pena, pelo parágrafo único do art. 147-A",
        "transforma o fato em falsa identidade, que absorve o resto",
        "aumenta a pena de metade, pelo parágrafo único do artigo",
        "só pesa na pena-base, como circunstância judicial do art. 59",
      ],
      correta: 3,
      explicacao:
        "O parágrafo único do art. 147-B, incluído pela Lei 15.123/2025, aumenta a pena de metade se o crime é cometido com uso de inteligência artificial ou de recurso que altere imagem ou som da vítima.",
      explicacaoErradas:
        "“Não muda” ignora a causa de aumento. “Art. 147-A” é a perseguição. “Falsa identidade” não descreve o fato. “Pena-base” é fase anterior e não cabe quando há causa de aumento específica.",
      pegadinha: "Perseguição aumenta de metade por outras razões: são parágrafos diferentes.",
      conhecimento:
        "A perseguição do art. 147-A exige reiteração e depende de representação.",
    },
    {
      topico: "Liberdade individual",
      subassunto: "Redução a condição análoga à de escravo",
      dificuldade: 4,
      raciocinio: "O art. 149 tem condutas alternativas.",
      enunciado:
        "Em fiscalização conjunta, equipes acham trabalhadores de uma fazenda à beira da BR-158 em alojamento sem água potável e em jornada exaustiva, mas livres para sair, sem dívida e sem vigilância. Sobre o art. 149 do CP,",
      alternativas: [
        "não há crime, pois faltou a restrição da liberdade de locomoção",
        "há crime apenas se existir dívida com o empregador",
        "há crime, pois as hipóteses do artigo são alternativas",
        "há só infração trabalhista, sem repercussão penal no caso",
        "há cárcere privado, em razão da condição degradante",
      ],
      correta: 2,
      explicacao:
        "O art. 149 pune submeter a trabalhos forçados ou jornada exaustiva, sujeitar a condições degradantes ou restringir a locomoção por dívida. Basta uma das formas. A restrição de locomoção não é exigida em todas.",
      explicacaoErradas:
        "“Faltou a restrição” e “apenas se existir dívida” transformam uma hipótese em requisito geral. “Só infração trabalhista” ignora o tipo penal. “Cárcere privado” exige privação da liberdade.",
      pegadinha: "Jornada exaustiva e condições degradantes bastam, mesmo sem cerca nem vigia.",
      conhecimento:
        "Cercear meio de transporte ou reter documentos para manter o trabalhador no local também é crime (§ 1º).",
    },
    {
      topico: "Liberdade individual",
      subassunto: "Tráfico de pessoas",
      dificuldade: 5,
      raciocinio: "O crime se consuma na conduta, com a finalidade especial.",
      enunciado:
        "Aliciadores oferecem a mulheres um falso emprego no exterior e as levam de ônibus até o aeroporto, para explorá-las sexualmente lá fora. Eles são detidos antes do embarque. Pelo art. 149-A do CP,",
      alternativas: [
        "o crime já se consumou com o recrutamento mediante fraude",
        "só há crime se a exploração sexual chegar a ocorrer no exterior",
        "o fato é atípico, porque as mulheres aceitaram viajar",
        "só há tentativa, por não ter ocorrido a saída do Brasil",
        "aplica-se o art. 231 do CP, próprio para o tráfico sexual",
      ],
      correta: 0,
      explicacao:
        "O art. 149-A traz condutas como aliciar, recrutar e transportar, mediante fraude, com a finalidade de exploração sexual, entre outras. É crime formal: a exploração é só o fim visado.",
      explicacaoErradas:
        "“Chegar a ocorrer” exige um resultado que a lei não pede. “Atípico” ignora a fraude que viciou a vontade. “Tentativa” ignora as condutas já praticadas. O “art. 231” foi revogado pela Lei 13.344/2016.",
      pegadinha: "Sem violência, grave ameaça, coação, fraude ou abuso, o tipo não se completa.",
      conhecimento:
        "A pena sobe de um terço até metade quando há retirada da vítima do território nacional (art. 149-A, § 1º, IV).",
    },
  ],
};
