import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-01",
  resumo: {
    ideia:
      "A aula apresenta o Direito Penal e os limites que a Constituição impõe a ele: os princípios (legalidade e seus desdobramentos, individualização, intranscendência, humanidade, presunção de inocência, ofensividade, intervenção mínima, insignificância e outros), o conceito e as fontes do Direito Penal e as regras da Constituição sobre crimes graves, Tribunal do Júri e menoridade penal.",
    itens: [
      {
        parte: "1. Legalidade e seus desdobramentos",
        termo: "Legalidade (art. 1º do CP e art. 5º, XXXIX, da CF)",
        faz: "Não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal. Desdobra-se em reserva legal, anterioridade e taxatividade.",
      },
      {
        termo: "Reserva legal",
        faz: "Só lei em sentido estrito, votada pelo Congresso (em regra, lei ordinária federal), pode criar crime e pena. Decreto, resolução e lei delegada não podem. A Constituição proíbe medida provisória sobre direito penal; há quem admita MP que só beneficie o réu, e o STF já aceitou nesse caso.",
        pista: "MP para criar crime ou agravar pena: sempre proibida, mesmo que a pena só valha depois da conversão em lei.",
      },
      {
        termo: "Anterioridade",
        faz: "A lei penal precisa existir antes do fato. A lei que prejudica o réu não retroage; a que beneficia, retroage (art. 5º, XL, da CF).",
      },
      {
        termo: "Taxatividade",
        faz: "O tipo penal precisa ser claro e preciso. Termos vagos (ex.: “atentar contra os bons costumes”) violam a legalidade, porque o cidadão não sabe o que é proibido.",
      },
      {
        termo: "Analogia × interpretação analógica",
        faz: "Analogia é aplicar a um caso sem lei a regra de um caso parecido: no Direito Penal só é permitida a favor do réu (in bonam partem); contra ele (in malam partem) é proibida. Interpretação analógica é quando a própria lei dá exemplos e fecha com fórmula genérica (“ou outro meio insidioso ou cruel”): é permitida, até contra o réu.",
        pista: "A interpretação extensiva (ampliar o alcance da palavra da lei) divide a doutrina.",
      },
      {
        parte: "2. Princípios ligados à pena",
        termo: "Individualização da pena",
        faz: "A pena é ajustada a cada réu em três fases: na lei (o legislador fixa mínimo e máximo), na sentença (o juiz dosa a pena, art. 59) e na execução (regime, progressão, benefícios).",
      },
      {
        termo: "Intranscendência (pessoalidade)",
        faz: "A pena não passa da pessoa do condenado. A obrigação de reparar o dano e o perdimento de bens podem alcançar os sucessores, até o limite da herança recebida (art. 5º, XLV, da CF).",
        pista: "A pena de multa é pena: morre com o condenado e não passa aos herdeiros.",
      },
      {
        termo: "Humanidade (limitação das penas)",
        faz: "Não haverá penas de morte (salvo guerra declarada), de caráter perpétuo, de trabalhos forçados, de banimento ou cruéis (art. 5º, XLVII). Lei com pena mínima absurda, que na prática vira prisão perpétua, também viola o princípio.",
      },
      {
        termo: "Proporcionalidade",
        faz: "A resposta penal tem de ser proporcional à gravidade do fato: proíbe o excesso (pena exagerada) e também a proteção insuficiente (deixar bem jurídico importante sem proteção).",
      },
      {
        termo: "Culpabilidade",
        faz: "Não há responsabilidade penal objetiva: só se pune quem agiu com dolo ou culpa e pode ser censurado pelo que fez.",
      },
      {
        parte: "3. Presunção de inocência",
        termo: "Presunção de inocência (não culpabilidade)",
        faz: "Ninguém é considerado culpado até o trânsito em julgado da sentença penal condenatória (art. 5º, LVII), isto é, até não caber mais recurso. Na dúvida, absolve-se (in dubio pro reo).",
        pista: "No recebimento da denúncia e na pronúncia vale o in dubio pro societate: na dúvida, o processo segue.",
      },
      {
        termo: "Execução da pena",
        faz: "Depois de admitir a prisão após a 2ª instância, o STF voltou ao entendimento clássico (ADCs 43, 44 e 54): só se executa a pena após o trânsito em julgado; antes disso, só prisão cautelar. Exceção: a condenação pelo Tribunal do Júri pode ser executada logo, pela soberania dos veredictos, seja qual for a pena.",
      },
      {
        termo: "Súmula 444 do STJ",
        faz: "Inquéritos e ações penais em curso não podem ser usados para aumentar a pena-base. É desdobramento da presunção de inocência.",
      },
      {
        parte: "4. Princípios que limitam o poder de punir",
        termo: "Ofensividade (lesividade)",
        faz: "Só há crime se houver lesão ou perigo concreto de lesão a um bem jurídico. Pensamento, intenção não exteriorizada e simples modo de ser não são crime.",
      },
      {
        termo: "Alteridade",
        faz: "Só se pune conduta que atinge bem jurídico de outra pessoa. Quem lesa só a si mesmo (ex.: autolesão, tentativa de suicídio) não comete crime.",
      },
      {
        termo: "Adequação social",
        faz: "Conduta aceita pela sociedade não deve ser crime, mesmo que se encaixe num tipo penal (ex.: furar a orelha de bebê para brinco). O princípio orienta o legislador e o intérprete, mas não revoga lei: costume não revoga crime.",
      },
      {
        termo: "Intervenção mínima (ultima ratio)",
        faz: "O Direito Penal é o último recurso: só deve agir quando os outros ramos do Direito não bastam. Desdobra-se em fragmentariedade e subsidiariedade.",
      },
      {
        termo: "Fragmentariedade × subsidiariedade",
        faz: "Fragmentariedade: o Direito Penal protege só um fragmento dos bens jurídicos, os mais importantes contra os ataques mais graves. Subsidiariedade: ele só entra se os outros meios de controle (civil, administrativo, moral) falharem.",
        pista: "Fragmentário = escolhe o que proteger. Subsidiário = entra por último.",
      },
      {
        termo: "Ne bis in idem",
        faz: "Ninguém pode ser punido, processado ou ter a pena agravada duas vezes pelo mesmo fato. Ex.: absolvido de forma definitiva por legítima defesa na Justiça comum, não pode ser processado de novo pelo mesmo fato em outra Justiça.",
      },
      {
        termo: "Confiança",
        faz: "Quem age corretamente pode esperar que os outros também ajam. Ex.: quem passa no sinal verde e é atingido por quem furou o vermelho não responde pelo acidente.",
      },
      {
        parte: "5. Insignificância e bagatela imprópria",
        termo: "Insignificância (bagatela)",
        faz: "A conduta é formalmente típica, mas a lesão é tão pequena que não há tipicidade material: o fato é atípico. O STF exige 4 vetores: mínima ofensividade da conduta, nenhuma periculosidade social da ação, reduzidíssimo grau de reprovabilidade e inexpressividade da lesão jurídica.",
        pista: "Exclui a tipicidade material. Não é causa de exclusão da ilicitude nem da culpabilidade.",
      },
      {
        termo: "Onde não se aplica",
        faz: "Crimes com violência ou grave ameaça (como roubo), tráfico de drogas, moeda falsa e crimes contra a fé pública, apropriação indébita e sonegação previdenciárias, furto com corrupção de menor, e crimes ou contravenções contra a mulher no âmbito doméstico (Súmula 589 do STJ).",
      },
      {
        termo: "Reincidência e furto qualificado",
        faz: "Reincidência, maus antecedentes, reiteração e furto qualificado em regra afastam a insignificância, mas STJ e STF admitem a aplicação excepcional se o caso concreto mostrar lesão inexpressiva.",
      },
      {
        termo: "Administração pública, descaminho e contrabando",
        faz: "Crimes contra a administração pública: em regra não se aplica (Súmula 599 do STJ), salvo exceção de lesão ínfima. Descaminho e crimes tributários federais: aplica-se se o tributo devido não passar de R$ 20 mil. Contrabando: em regra não se aplica, salvo pequena quantidade de remédio para uso próprio e cigarros até 1.000 maços (sem reiteração).",
      },
      {
        termo: "Bagatela imprópria",
        faz: "O crime existe (fato típico, ilícito e culpável), mas fatos posteriores (ex.: reparação do dano, réu primário, longo tempo) mostram que a pena é desnecessária: o juiz deixa de aplicá-la, com base no art. 59 do CP.",
        pista: "Insignificância: não há crime. Bagatela imprópria: há crime, mas a pena é dispensada.",
      },
      {
        parte: "6. Conceito e fontes",
        termo: "Conceito",
        faz: "Ramo do Direito Público que escolhe os bens jurídicos mais importantes e os protege criando crimes, sob ameaça de pena.",
      },
      {
        termo: "Fonte material (de produção)",
        faz: "Quem produz a norma penal: a União, que legisla privativamente sobre direito penal (art. 22, I, da CF). Lei complementar pode autorizar os Estados a legislar sobre questões específicas.",
      },
      {
        termo: "Fontes formais (de conhecimento)",
        faz: "Imediata: só a lei em sentido estrito, a única que cria crime e pena. Mediatas (secundárias): costumes, princípios gerais do Direito e atos administrativos, que ajudam a interpretar, mas não criam crime.",
      },
      {
        parte: "7. Regras da Constituição",
        termo: "Crimes graves (art. 5º, XLII a XLIV)",
        faz: "Inafiançáveis: racismo; ação de grupos armados contra a ordem constitucional e o Estado Democrático; tortura, tráfico de drogas, terrorismo e hediondos. Imprescritíveis: só racismo e ação de grupos armados. Sem graça nem anistia: só tortura, tráfico, terrorismo e hediondos.",
        pista: "Todos são inafiançáveis; imprescritíveis são só os dois primeiros; os outros quatro não admitem graça nem anistia.",
      },
      {
        termo: "Tribunal do Júri",
        faz: "A Constituição garante a plenitude de defesa, o sigilo das votações, a soberania dos veredictos e a competência para os crimes dolosos contra a vida e os crimes conexos a eles.",
        pista: "Latrocínio não vai a júri: é crime contra o patrimônio, julgado pelo juiz singular (Súmula 603 do STF).",
      },
      {
        termo: "Menoridade penal",
        faz: "Menores de 18 anos são penalmente inimputáveis e ficam sujeitos à legislação especial (art. 228 da CF; ECA). Respondem por ato infracional, com medida socioeducativa, que não é pena.",
      },
    ],
    cuidado:
      "Insignificância afasta a tipicidade material (não há crime); bagatela imprópria dispensa a pena de um crime que existe. E analogia contra o réu é proibida, mas interpretação analógica é permitida.",
  },
  questoes: [
    {
      topico: "Legalidade",
      subassunto: "Medida provisória e norma penal benéfica",
      dificuldade: 5,
      raciocinio: "Separe a norma que cria ou agrava da norma que favorece o réu.",
      enunciado:
        "Durante uma crise, o Presidente edita medida provisória que, sem criar crime, amplia uma causa de extinção da punibilidade em favor dos acusados. Diante do art. 62, § 1º, I, “b”, da Constituição e da posição já adotada pelo STF, a medida provisória",
      alternativas: [
        "é nula de pleno direito, porque toda norma penal exige lei complementar",
        "só vale se o Congresso a converter em lei antes de qualquer aplicação concreta",
        "foi admitida pelo STF em caso benéfico ao réu, embora não possa criar crime",
        "equivale à lei delegada, que a Constituição libera para o Direito Penal benéfico",
        "pode também agravar penas, desde que respeite a anterioridade de um ano",
      ],
      correta: 2,
      explicacao:
        "A Constituição veda medida provisória sobre Direito Penal, e isso impede criar crime ou agravar pena. O STF já aceitou medida provisória não incriminadora, favorável ao réu. O tema tem debate na doutrina, mas a posição do Tribunal é essa.",
      explicacaoErradas:
        "“Lei complementar” não é exigida: basta lei ordinária federal. A tese de “converter em lei antes de qualquer aplicação” não existe. A “lei delegada” não pode tratar de direitos individuais (art. 68, § 1º, II, da CF). “Agravar penas” por medida provisória é vedado sempre.",
      pegadinha: "A vedação do art. 62 é ampla no texto, mas o STF abriu espaço para a norma benéfica.",
      conhecimento:
        "A competência para legislar sobre Direito Penal é privativa da União (art. 22, I, da CF).",
    },
    {
      topico: "Insignificância",
      subassunto: "Reincidência e análise do caso concreto",
      dificuldade: 4,
      raciocinio: "A insignificância olha o fato; a vida pregressa entra na análise, sem veto automático.",
      enunciado:
        "Reincidente em furto, um homem subtrai de um posto de combustíveis à beira da rodovia dois frascos de óleo, avaliados em R$ 40, e é flagrado pela equipe da PRF. Sobre o princípio da insignificância nesse caso, segundo a orientação do Plenário do STF,",
      alternativas: [
        "a reincidência não o afasta por si só: a análise depende do caso concreto",
        "a reincidência o impede sempre, por força de regra expressa do Código Penal",
        "o valor baixo basta, e os antecedentes nunca entram na análise do princípio",
        "o princípio só cabe em crimes culposos, nunca na subtração dolosa",
        "o princípio extingue a punibilidade, mas mantém a tipicidade do fato",
      ],
      correta: 0,
      explicacao:
        "O Plenário do STF decidiu que a reincidência não impede, por si só, o reconhecimento da insignificância: o juiz examina o caso concreto. O princípio exclui a tipicidade material.",
      explicacaoErradas:
        "Não há “regra expressa do Código Penal” sobre isso. Dizer que “os antecedentes nunca entram” também erra, porque eles pesam na análise. A ideia de “crimes culposos” não tem base: o princípio surge sobretudo em crimes dolosos. Ele não “extingue a punibilidade”: atinge a tipicidade.",
      pegadinha: "Nem veto automático, nem aplicação automática: a resposta é a análise do caso.",
      conhecimento:
        "Os vetores do STF são mínima ofensividade, nenhuma periculosidade social, reduzido grau de reprovabilidade e inexpressividade da lesão.",
    },
    {
      topico: "Insignificância",
      subassunto: "Súmula 589 do STJ",
      dificuldade: 4,
      raciocinio: "A súmula cita crimes e também contravenções.",
      enunciado:
        "A equipe da PRF atende ocorrência em que o marido dá um empurrão leve na esposa, sem lesão, durante discussão dentro de casa. A defesa alega que o fato é mínimo, que a vítima o perdoou e que se trata de simples contravenção. À luz da jurisprudência sumulada do STJ, o princípio da insignificância",
      alternativas: [
        "cabe aqui, pois contravenção penal fica fora de qualquer restrição ao princípio",
        "cabe se a vítima desistir da ocorrência até o oferecimento da denúncia",
        "depende apenas de o agente ser primário e ter bons antecedentes",
        "cabe nas vias de fato, porque a vedação alcança só crimes com lesão",
        "é inaplicável nesse âmbito doméstico, inclusive nas contravenções",
      ],
      correta: 4,
      explicacao:
        "A Súmula 589 do STJ diz que é inaplicável o princípio da insignificância nos crimes ou contravenções penais praticados contra a mulher no âmbito das relações domésticas.",
      explicacaoErradas:
        "A “contravenção penal” está citada na súmula. O perdão da vítima, na tese de “desistir da ocorrência”, não muda a vedação. Ser “primário” não abre exceção. A vedação não se limita a “crimes com lesão”.",
      pegadinha: "“Contravenção” parece o caso mais leve, mas a súmula a inclui de propósito.",
      conhecimento:
        "A Súmula 599 do STJ afasta a insignificância nos crimes contra a Administração Pública, com a exceção jurisprudencial do descaminho.",
    },
    {
      topico: "Alteridade",
      subassunto: "Autolesão para receber seguro",
      dificuldade: 5,
      raciocinio: "Pergunte quem foi atingido além do próprio agente.",
      enunciado:
        "Para receber seguro de acidentes, um caminhoneiro corta dois dedos da própria mão e simula um acidente na rodovia. A defesa invoca o princípio da alteridade, pelo qual ninguém é punido por ferir apenas a si. O argumento",
      alternativas: [
        "procede, pois a autolesão é sempre atípica e o Código Penal não a alcança",
        "falha, porque a conduta visa ao patrimônio da seguradora e há crime de fraude",
        "procede em parte: há só lesão corporal leve, sem reflexo patrimonial punível",
        "falha, porque toda autolesão é punida como lesão corporal gravíssima",
        "procede se o seguro não for pago, por se tratar de crime impossível",
      ],
      correta: 1,
      explicacao:
        "A alteridade protege quem atinge apenas a si. Aqui a conduta mira o patrimônio da seguradora: o art. 171, § 2º, V, do CP pune quem lesa o próprio corpo com o intuito de haver indenização ou valor de seguro.",
      explicacaoErradas:
        "A ideia de “sempre atípica” ignora o caso de fraude. Não há “lesão corporal leve” contra si mesmo. “Toda autolesão” não é punida como lesão. O não pagamento não gera “crime impossível”: basta o intuito previsto no tipo.",
      pegadinha: "A autolesão em si é impune; o que se pune é a fraude contra terceiro.",
      conhecimento:
        "O mesmo inciso alcança quem destrói ou oculta coisa própria para receber o seguro.",
    },
    {
      topico: "Intervenção mínima",
      subassunto: "Subsidiariedade e fragmentariedade",
      dificuldade: 4,
      raciocinio: "Última ratio é uma ideia; proteger só o mais importante é outra.",
      enunciado:
        "Um projeto de lei quer punir como crime o atraso de um dia na devolução de bem público de baixo valor, embora a sanção administrativa já resolva o caso. Um parecer afirma que o Direito Penal deve ser o último recurso do Estado e, além disso, que só cuida de ataques relevantes aos bens mais importantes. Essas duas ideias correspondem, nessa ordem, a",
      alternativas: [
        "fragmentariedade e adequação social",
        "taxatividade e legalidade estrita",
        "adequação social e insignificância",
        "subsidiariedade e fragmentariedade",
        "culpabilidade e responsabilidade subjetiva",
      ],
      correta: 3,
      explicacao:
        "Ambas decorrem da intervenção mínima. Subsidiariedade: o Direito Penal só atua se os outros ramos falharem. Fragmentariedade: ele protege apenas uma parte dos bens jurídicos, contra os ataques mais graves.",
      explicacaoErradas:
        "“Adequação social” trata de condutas aceitas pela sociedade. “Taxatividade” exige clareza da lei. “Insignificância” olha o caso concreto já ocorrido. “Culpabilidade” e “responsabilidade subjetiva” tratam do juízo sobre o agente.",
      pegadinha: "As duas ideias são filhas do mesmo princípio e costumam ser trocadas.",
      conhecimento:
        "A subsidiariedade orienta o legislador e também o aplicador da lei, quando outro ramo do Direito já resolve o conflito.",
    },
    {
      topico: "Adequação social",
      subassunto: "Súmula 502 do STJ",
      dificuldade: 4,
      raciocinio: "A tolerância social não basta para apagar a tipicidade quando há súmula em sentido contrário.",
      enunciado:
        "Na fiscalização de um ônibus, a PRF encontra DVDs piratas que um passageiro leva para vender em feira da cidade, onde esse comércio é tolerado por todos. A defesa invoca a adequação social. Segundo a Súmula 502 do STJ,",
      alternativas: [
        "a conduta de expor à venda CDs e DVDs piratas continua típica",
        "a tolerância popular exclui a tipicidade, pois o costume revoga a lei",
        "o fato só é típico se a perícia examinar cada um dos discos apreendidos",
        "a conduta passa a ser contravenção, por seu baixo potencial ofensivo",
        "a adequação social extingue a punibilidade depois da denúncia",
      ],
      correta: 0,
      explicacao:
        "A Súmula 502 do STJ afirma que, presentes materialidade e autoria, é típica, no crime do art. 184, § 2º, do CP, a conduta de expor à venda CDs e DVDs piratas.",
      explicacaoErradas:
        "“O costume revoga a lei” é falso. A perícia não precisa alcançar “cada um dos discos”: a Súmula 574 do STJ aceita a perícia por amostragem. Não há conversão em “contravenção”. A adequação social, quando cabe, atinge a tipicidade, e não “extingue a punibilidade”.",
      pegadinha: "Uma prática comum na rua não é, por isso, socialmente adequada para o Direito.",
      conhecimento:
        "A Súmula 574 do STJ também dispensa identificar os titulares dos direitos autorais violados.",
    },
    {
      topico: "Intranscendência",
      subassunto: "Morte do condenado e reparação do dano",
      dificuldade: 5,
      raciocinio: "Separe a pena, que morre com o condenado, da obrigação de reparar, limitada à herança.",
      enunciado:
        "Condenado por peculato a pena de prisão e multa, e obrigado a reparar o dano, um servidor morre antes de cumprir tudo. Deixa R$ 200 mil aos filhos, e o dano apurado é de R$ 300 mil. Pelo art. 5º, XLV, da Constituição e pelo art. 107, I, do CP,",
      alternativas: [
        "a multa passa aos filhos, por ser dívida de valor, e a reparação se extingue",
        "os filhos respondem pela reparação integral de R$ 300 mil, com bens próprios",
        "as penas se extinguem, e os filhos respondem pela reparação até R$ 200 mil",
        "tudo se extingue com a morte, inclusive o dever de reparar o dano causado",
        "a prisão se extingue, mas multa e reparação passam aos filhos sem limite",
      ],
      correta: 2,
      explicacao:
        "A morte do agente extingue a punibilidade, e a pena não passa do condenado, o que inclui a multa. A obrigação de reparar o dano pode ser estendida aos sucessores, mas só até o limite do patrimônio transferido: aqui, R$ 200 mil.",
      explicacaoErradas:
        "A multa é pena, e não “dívida” que passe aos filhos. A reparação “integral”, com “bens próprios”, ultrapassa o limite da herança. Afirmar que “tudo se extingue” ignora a parte final do art. 5º, XLV. Passar “sem limite” contraria a Constituição.",
      pegadinha: "A multa virou dívida de valor na execução, mas continua sendo pena.",
      conhecimento:
        "A decretação do perdimento de bens segue a mesma regra e alcança os sucessores até o valor do patrimônio transferido.",
    },
    {
      topico: "Legalidade",
      subassunto: "Analogia e interpretação analógica",
      dificuldade: 5,
      raciocinio: "Fórmula aberta da própria lei é interpretação; regra de outro caso, para piorar, é analogia.",
      enunciado:
        "O art. 121, § 2º, I, do CP qualifica o homicídio “mediante paga ou promessa de recompensa, ou por outro motivo torpe”. Um juiz enquadra na cláusula final um motivo torpe não listado. Em outro processo, aplica a um fato sem previsão legal uma regra feita para caso parecido, piorando a situação do réu. Quanto às duas decisões,",
      alternativas: [
        "ambas são válidas, porque o juiz pode integrar lacunas da lei penal",
        "ambas violam a legalidade, pois a lei penal só admite leitura literal",
        "a primeira é analogia proibida, e a segunda é interpretação extensiva, sempre válida",
        "a segunda só valeria se o Ministério Público a pedisse na denúncia",
        "a primeira é interpretação analógica, válida; a segunda é analogia proibida",
      ],
      correta: 4,
      explicacao:
        "Na interpretação analógica, a própria lei dá exemplos e abre uma fórmula genérica, e o juiz segue essa autorização. A analogia preenche lacuna com regra de outro caso e, quando prejudica o réu, viola a legalidade.",
      explicacaoErradas:
        "“Ambas são válidas” libera a analogia contra o réu. “Leitura literal” não é exigida. A “analogia proibida” está na segunda decisão, e não na primeira. O pedido do “Ministério Público” não supre a falta de lei.",
      pegadinha: "Os nomes parecem iguais, mas só a analogia cria regra onde a lei nada disse.",
      conhecimento:
        "A analogia em favor do réu é aceita: é o caso da extensão do perdão judicial do homicídio culposo do CP ao homicídio culposo de trânsito.",
    },
    {
      topico: "Fontes",
      subassunto: "Costume e revogação da lei penal",
      dificuldade: 4,
      raciocinio: "Lei só cai por outra lei.",
      enunciado:
        "Em uma cidade, o jogo do bicho é praticado abertamente há décadas e a polícia local nunca atuou. Preso em flagrante, o banqueiro alega que o costume revogou a contravenção. A respeito das fontes do Direito Penal,",
      alternativas: [
        "o costume é fonte formal imediata e pode criar ou extinguir infrações",
        "o costume não revoga lei penal, que vigora até que outra a revogue",
        "o desuso por mais de vinte anos gera a revogação tácita da norma",
        "a contravenção só vale se lei estadual confirmar a proibição no local",
        "o costume revoga só contravenções, nunca crimes punidos com reclusão",
      ],
      correta: 1,
      explicacao:
        "Pela Lei de Introdução às Normas do Direito Brasileiro, a lei vigora até que outra a modifique ou revogue. O costume é fonte formal mediata: ajuda a interpretar, mas não cria crime nem revoga infração.",
      explicacaoErradas:
        "“Fonte formal imediata” é a lei. O “desuso” não revoga, seja qual for o prazo. A “lei estadual” não entra na questão, porque a competência é da União. A distinção entre “contravenções” e crimes não muda a regra.",
      pegadinha: "A inércia da polícia não é fonte do Direito.",
      conhecimento:
        "A fonte material do Direito Penal é a União. Lei complementar federal pode autorizar os Estados a legislar sobre questões específicas (art. 22, parágrafo único, da CF).",
    },
  ],
};
