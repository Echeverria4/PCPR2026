import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-01",
  resumo: {
    ideia:
      "O Direito Penal só pune o que uma lei anterior descreve e só entra quando os outros ramos não bastam. Os princípios limitam o Estado; as fontes dizem quem cria a norma e como ela aparece.",
    itens: [
      {
        termo: "Legalidade",
        faz: "Não há crime sem lei anterior que o defina, nem pena sem prévia cominação (art. 1º do CP e art. 5º, XXXIX, da CF).",
        pista: "A lei precisa ser anterior, escrita, estrita e certa.",
      },
      {
        termo: "Reserva legal",
        faz: "Crime e pena dependem de lei federal em sentido estrito. Medida provisória e lei delegada não criam crime.",
      },
      {
        termo: "Intervenção mínima",
        faz: "Subsidiariedade: o Direito Penal é o último recurso. Fragmentariedade: protege só os bens mais importantes contra os ataques mais graves.",
      },
      {
        termo: "Insignificância",
        faz: "Exclui a tipicidade material quando a ofensa é mínima, sem periculosidade social, com reprovabilidade reduzida e lesão inexpressiva.",
        pista: "O STJ a afasta na violência doméstica contra a mulher (Súmula 589).",
      },
      {
        termo: "Adequação social",
        faz: "Conduta aceita pela sociedade pode deixar de ser típica, mas a tolerância não revoga lei.",
      },
      {
        termo: "Alteridade",
        faz: "Não se pune quem fere apenas a si. Se a conduta atinge terceiro, o princípio não protege.",
      },
      {
        termo: "Intranscendência",
        faz: "A pena não passa do condenado. Reparação do dano e perdimento de bens alcançam os sucessores até o limite do patrimônio transferido.",
      },
      {
        termo: "Humanidade",
        faz: "Proíbe penas de morte (salvo guerra declarada), perpétuas, de trabalhos forçados, de banimento e cruéis.",
      },
      {
        termo: "Fontes",
        faz: "Material: a União, que legisla sobre Direito Penal. Formal imediata: a lei. Formais mediatas: costumes e princípios gerais, que ajudam a interpretar, mas não criam crime.",
      },
      {
        termo: "Analogia e interpretação analógica",
        faz: "Analogia para piorar a situação do réu é proibida; para beneficiar, é aceita. A interpretação analógica segue uma fórmula aberta da própria lei e é válida.",
      },
    ],
    cuidado:
      "Costume não revoga lei penal, e o desuso não apaga a infração: a norma vale até outra lei a modificar ou revogar.",
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
