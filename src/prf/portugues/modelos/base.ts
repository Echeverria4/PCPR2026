import type { ModeloPt } from "../tipos";

const T_ORTO = "Ortografia oficial";
const T_ACENTO = "Acentuação gráfica";

export const MODELOS_BASE: ModeloPt[] = [
  {
    id: "ortografia-letras",
    titulo: "Ortografia: as letras que se confundem",
    grupo: "base",
    gancho: "A grafia segue a **família** e a **origem** da palavra, não o som: descubra o parente e a letra aparece.",
    topicosPrf: [T_ORTO],
    blocos: [
      {
        tipo: "texto",
        texto:
          "A banca não cobra decoreba de dicionário: cobra **regularidades**. Quase toda dúvida entre S, Z, SS, Ç, G, J, X e CH se resolve olhando a **palavra primitiva** (análise → analisar) ou o **sufixo** (-ez, -esa, -agem).",
      },
      {
        tipo: "chaves",
        titulo: "Pistas que decidem a letra",
        ramos: [
          { rotulo: "-ês / -esa × -ez / -eza", texto: "origem e título com S; substantivo abstrato tirado de adjetivo com Z", exemplo: "português, marquesa × rapidez, beleza, pobreza" },
          { rotulo: "-isar × -izar", texto: "a base já tem S → -isar; não tem → -izar", exemplo: "análise → analisar, pesquisa → pesquisar × real → realizar, útil → utilizar" },
          { rotulo: "-ção × -são × -ssão", texto: "o verbo de origem decide", exemplo: "deter → detenção; expandir → expansão; ceder → cessão; admitir → admissão" },
          { rotulo: "G × J", texto: "-agem, -igem, -ugem com G; verbo em -jar mantém J em todas as formas", exemplo: "a viagem, a garagem × que eles viajem (viajar)" },
          { rotulo: "X × CH", texto: "X depois de ditongo, de 'en-' e de 'me-' iniciais", exemplo: "caixa, peixe; enxada, enxergar; mexer (exceções: encher, encharcar de 'charco', mecha)" },
          { rotulo: "E × I nos verbos", texto: "-uar e -oar → E no subjuntivo; -uir → I no presente", exemplo: "que ele continue, perdoe × ele possui, contribui, atribui" },
          { rotulo: "S depois de ditongo", texto: "som de Z depois de ditongo se escreve com S", exemplo: "coisa, causa, lousa, náusea" },
        ],
      },
      {
        tipo: "grade",
        titulo: "A família decide",
        colunas: ["Derivada", "Por quê"],
        linhas: [
          { rotulo: "pesquisa", valores: ["pesquisar", "a base já tem S"] },
          { rotulo: "real", valores: ["realizar", "base sem S: sufixo -izar"] },
          { rotulo: "deter", valores: ["detenção", "-ter → -tenção"] },
          { rotulo: "ceder", valores: ["cessão", "-ced- → -cess-"] },
          { rotulo: "agredir", valores: ["agressão", "-gred- → -gress-"] },
          { rotulo: "pretender", valores: ["pretensão, pretensioso", "-nd- → -ns-"] },
          { rotulo: "ascender", valores: ["ascensão", "mantém o SC da base e troca -nd- por -ns-"] },
        ],
        nota: "Exceções que a banca adora: catequese → catequizar e hipnose → hipnotizar, com Z apesar do S da base.",
      },
      {
        tipo: "comparativo",
        titulo: "Mal × mau",
        colunas: [
          { titulo: "mal", classe: "adverbio", itens: ["oposto de **bem**", "advérbio (dormiu mal) ou substantivo (o mal)", "conjunção temporal (mal chegou, saiu)"] },
          { titulo: "mau", classe: "adjetivo", itens: ["oposto de **bom**", "adjetivo: acompanha substantivo", "um mau motorista, mau humor"] },
        ],
        sintese: "Troque: se couber 'bem', é mal; se couber 'bom', é mau.",
      },
      {
        tipo: "macete",
        texto: "Na dúvida entre -isar e -izar, procure o S na palavra de origem.",
        explicacao: "Tem S (análise, pesquisa, paralisia)? Fica -isar: analisar, pesquisar, paralisar. Não tem (real, útil, final)? -izar: realizar, utilizar, finalizar.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "Os agentes **analisaram** o caso e **realizaram** a vistoria.", analise: "Analisar vem de 'análise' (com S); realizar vem de 'real' (sem S)." },
          { frase: "A **paralisação** dos caminhoneiros durou dois dias.", analise: "Paralisação vem de paralisar, que vem de 'paralisia' (com S). A forma 'paralização' não existe." },
          { frase: "A pista estava **mal** sinalizada, e o **mau** tempo piorou tudo.", analise: "Mal é o oposto de bem (advérbio: mal sinalizada); mau é o oposto de bom (adjetivo: mau tempo)." },
          { frase: "O motorista **pôs** o cinto, mas não **quis** parar.", analise: "Pôr e querer se escrevem com S em todas as formas: pus, pôs, puser, pusesse; quis, quiser, quisesse." },
          { frase: "Espero que eles **viajem** cedo, porque a **viagem** é longa.", analise: "'Viajem' é o verbo viajar (mantém J); 'viagem' é o substantivo (sufixo -agem, com G).", concurso: true },
          { frase: "A **cessão** do imóvel foi votada na **sessão** de ontem, na **seção** de patrimônio.", analise: "Cessão = ato de ceder; sessão = reunião; seção = divisão, setor. O sentido escolhe a grafia.", concurso: true },
          { frase: "O juiz negou a **pretensão** do autor e a **extensão** do prazo.", analise: "Pretender gera pretensão (com S, como compreender → compreensão). Já estender, com S, gera extensão e extenso, com X: a família nem sempre mantém a letra.", concurso: true },
          { frase: "A **detenção** do suspeito gerou **repercussão** e **discussão** na imprensa.", analise: "Deter → detenção (-ter vira -tenção, com Ç, como reter → retenção). Repercutir → repercussão e discutir → discussão (-tir vira -ssão, com SS).", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Pretensioso, não 'pretencioso'", texto: "Vem de 'pretensão' (pretender: -nd- → -ns-). O C não aparece em nenhum membro da família." },
          { titulo: "Exceção, excesso, excessivo", texto: "O XC soa como S, mas está ali: ex + ceção. Não se escreve 'esceção' nem 'excessão'." },
          { titulo: "Paralisar com S", texto: "Vem de 'paralisia'. 'Paralizar' é erro mesmo sendo a pronúncia igual." },
          { titulo: "Possui com I, continue com E", texto: "Verbo em -uir faz 'possui', 'constitui'; verbo em -uar faz 'continue', 'efetue' no subjuntivo." },
        ],
      },
    ],
  },
  {
    id: "porques",
    titulo: "Os quatro porquês",
    grupo: "base",
    gancho: "**Pergunta ou 'pelo qual' = separado; explicação = junto; no fim da frase ganha acento; com artigo vira nome.**",
    topicosPrf: [T_ORTO],
    blocos: [
      {
        tipo: "texto",
        texto:
          "São quatro formas, e cada uma tem um teste de troca. A pergunta pode ser **direta** (com '?') ou **indireta** (Não sei por que...): nas duas, separado.",
      },
      {
        tipo: "fluxo",
        titulo: "Qual porquê usar?",
        passos: [
          { pergunta: "Tem artigo ou determinante antes (o, um, esse, seus) e equivale a 'motivo'?", sim: "**porquê**, substantivo: Não entendi **o porquê** da multa." },
          { pergunta: "Está no fim da frase, logo antes de ponto, '?' ou '!'?", sim: "**por quê**: Ele faltou **por quê**? Não sei **por quê**." },
          { pergunta: "Dá para trocar por 'por qual motivo' ou 'pelo qual / pela qual'?", sim: "**por que**: **Por que** faltou? A estrada **por que** passamos." },
        ],
        senao: "**porque**, conjunção (= pois, uma vez que): Faltou **porque** estava doente.",
      },
      {
        tipo: "grade",
        titulo: "O teste da troca",
        colunas: ["Troca por", "Exemplo"],
        linhas: [
          { rotulo: "por que", valores: ["por qual motivo / pelo qual", "Por que a pista fechou? O trecho por que passei."] },
          { rotulo: "por quê", valores: ["por qual motivo (no fim)", "A pista fechou por quê?"] },
          { rotulo: "porque", valores: ["pois / uma vez que", "Fechou porque havia óleo."] },
          { rotulo: "porquê", valores: ["o motivo", "Ninguém explicou o porquê."] },
        ],
      },
      {
        tipo: "macete",
        texto: "No fim, o 'quê' ganha chapéu; com artigo, vira nome e se une.",
        explicacao: "Monossílabo tônico em fim de frase é acentuado (por quê?). Com artigo, a palavra vira substantivo e se escreve junto e acentuada (o porquê, os porquês).",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "O condutor não explicou **o porquê** da manobra.", analise: "Com artigo e = o motivo: substantivo." },
          { frase: "A pista foi fechada **porque** havia óleo.", analise: "= pois: conjunção causal, junto e sem acento." },
          { frase: "O motorista parou no acostamento. **Por quê**?", analise: "No fim da frase, antes da pontuação, a pergunta leva 'por quê', separado e com acento." },
          { frase: "O relatório explica os **porquês** da interdição.", analise: "Substantivo (= os motivos): aceita artigo e plural, por isso junto e com acento." },
          { frase: "Não se sabe **por que** o radar falhou.", analise: "Interrogativa indireta (= por qual motivo): separado, mesmo sem ponto de interrogação.", concurso: true },
          { frase: "Eis o motivo **por que** a estrada foi interditada.", analise: "= pelo qual: preposição + pronome relativo, separado.", concurso: true },
          { frase: "Ninguém entendeu **por que** o radar foi desligado, mas todos sabem **por quê**.", analise: "Os dois são interrogativos indiretos (= por qual razão). No meio da frase, sem acento; no fim, antes do ponto, com acento.", concurso: true },
          { frase: "Os moradores **anseiam por que** a ponte seja reconstruída.", analise: "Aqui é a preposição 'por', exigida por 'ansiar por', mais a conjunção integrante 'que'. Teste: 'anseiam por isto: a reconstrução'. Separado e sem acento, sem sentido de causa.", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Pergunta indireta não tem '?'", texto: "'Quero saber por que você saiu' continua separado: é uma pergunta embutida (por qual motivo)." },
          { titulo: "Resposta sempre junto", texto: "'Por que saiu?' — 'Porque choveu.' A resposta explica: conjunção, junto." },
          { titulo: "'Por que' = pelo qual", texto: "'Os perigos por que passamos' = pelos quais passamos. Separado, sem ser pergunta." },
          { titulo: "Plural existe", texto: "'Os porquês da decisão' = os motivos: substantivo no plural." },
        ],
      },
    ],
  },
  {
    id: "hifen",
    titulo: "Hífen depois do Acordo Ortográfico",
    grupo: "base",
    gancho: "**Letras iguais se separam, diferentes se juntam**: micro-ondas, inter-regional; autoescola, superinteressante.",
    topicosPrf: [T_ORTO],
    blocos: [
      {
        tipo: "texto",
        texto:
          "Com prefixo, a regra olha só **duas letras**: a última do prefixo e a primeira da palavra. Por cima disso há os prefixos que **sempre** levam hífen e o caso do **H**.",
      },
      {
        tipo: "fluxo",
        titulo: "Tem hífen?",
        passos: [
          { pergunta: "O primeiro elemento é ex-, vice-, recém-, sem-, além-, aquém- ou pré-, pró-, pós- tônicos?", sim: "**Hífen sempre**: ex-chefe, vice-diretor, recém-chegado, sem-terra, pós-graduação." },
          { pergunta: "A palavra seguinte começa com H?", sim: "**Hífen**: anti-higiênico, super-homem, pré-história (exceções: desumano, inábil, coerdeiro)." },
          { pergunta: "O prefixo termina com a mesma letra que inicia a palavra?", sim: "**Hífen**: micro-ondas, anti-inflamatório, inter-regional, sub-base (exceção: co- e re- se juntam: cooperar, reeleger)." },
          { pergunta: "O prefixo termina em vogal e a palavra começa com R ou S?", sim: "**Junto, dobrando a consoante**: antirrábico, ultrassom, minissaia, contrarregra." },
        ],
        senao: "**Junto**: autoescola, infraestrutura, extraoficial, semianalfabeto, superinteressante, hiperativo.",
      },
      {
        tipo: "grade",
        titulo: "Aplicando a regra",
        colunas: ["Hífen?", "Por quê"],
        linhas: [
          { rotulo: "micro + ondas", valores: ["sim", "vogais iguais (o + o)"] },
          { rotulo: "auto + escola", valores: ["não", "vogais diferentes: autoescola"] },
          { rotulo: "anti + social", valores: ["não", "vogal + S: dobra (antissocial)"] },
          { rotulo: "super + resistente", valores: ["sim", "consoantes iguais (r + r)"] },
          { rotulo: "sub + reitor", valores: ["sim", "sub- antes de R tem hífen"] },
          { rotulo: "co + obrigação", valores: ["não", "co- se junta: coobrigação"] },
          { rotulo: "mal + educado", valores: ["sim", "mal- antes de vogal, H ou L"] },
          { rotulo: "mal + criado", valores: ["não", "nos outros casos, junto: malcriado"] },
        ],
      },
      {
        tipo: "comparativo",
        titulo: "Palavras compostas com elemento de ligação",
        colunas: [
          { titulo: "Regra: sem hífen", itens: ["dia a dia, fim de semana", "mão de obra, pé de moleque (doce)", "cara de pau, ponto e vírgula"] },
          { titulo: "Exceções consagradas", itens: ["cor-de-rosa, água-de-colônia", "mais-que-perfeito, pé-de-meia", "à queima-roupa, ao deus-dará"] },
          { titulo: "Espécies: sempre hífen", itens: ["bem-te-vi, erva-doce", "couve-flor, pimenta-do-reino", "joão-de-barro, ervilha-de-cheiro"] },
        ],
        sintese: "Composto com preposição ou conjunção no meio perdeu o hífen, salvo as exceções fixadas e os nomes de plantas e animais.",
      },
      {
        tipo: "macete",
        texto: "Iguais se repelem, diferentes se atraem.",
        explicacao: "Vogal + mesma vogal ou consoante + mesma consoante: hífen (anti-inflamatório, inter-racial). Letras diferentes: junto (antiaéreo, intermunicipal). Vogal + R ou S: junto e dobrado.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "O **ex-diretor** participou da **autoavaliação**.", analise: "Ex- (= anterior) sempre com hífen; auto + avaliação junta o com a, vogais diferentes: junto." },
          { frase: "O exame **antirrábico** e o **ultrassom** ficaram prontos.", analise: "Prefixo terminado em vogal diante de R ou S: a consoante dobra e não há hífen (antirrábico, ultrassom, minissaia)." },
          { frase: "O **vice-presidente** cumprimentou os **recém-chegados**.", analise: "Ex-, vice-, recém-, sem-, além- e aquém- pedem hífen sempre." },
          { frase: "A operação **inter-regional** contou com equipes **semiautônomas**.", analise: "Inter + r (consoantes iguais) → hífen; semi + a (vogais diferentes) → junto.", concurso: true },
          { frase: "O **contrarregra** chegou ao **micro-ônibus**.", analise: "Contra + r → dobra e junta; micro + o → vogais iguais, hífen.", concurso: true },
          { frase: "O agente fez **pós-graduação** e agora tenta **prever** novos cenários.", analise: "Pré-, pós- e pró- tônicos, pronunciados à parte, levam hífen (pós-graduação, pré-escolar). Átonos se juntam: prever, pospor, promover.", concurso: true },
          { frase: "O **coautor** do relatório defendeu a **reeleição** do **coordenador**.", analise: "Co- e re- se juntam sempre, mesmo diante de vogal igual: coordenar, cooperar, reeleição, reescrever. É a exceção à regra das vogais iguais.", concurso: true },
          { frase: "No **dia a dia** do posto, o **mal-estar** dos agentes era visível.", analise: "Composto com elemento de ligação não leva hífen (dia a dia, fim de semana). Mal- leva hífen antes de vogal, H ou L (mal-estar, mal-humorado), mas não antes de consoante: malcriado, malfeito.", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Co- e re- não se separam", texto: "Cooperar, coordenar, reeleger, reescrever: mesmo com vogais iguais, ficam juntos." },
          { titulo: "Consoante + R não dobra", texto: "O dobro do R e do S é só depois de vogal. Com consoante: hiper-realista, inter-racial (letras iguais, hífen); superinteressante (diferentes, junto)." },
          { titulo: "'Não' como prefixo fica solto", texto: "Não agressão, não fumante, quase delito: sem hífen." },
          { titulo: "Bem- quase sempre com hífen", texto: "Bem-vindo, bem-estar, bem-humorado; mas benfeitor, benquerer, benfazejo já se aglutinaram." },
        ],
      },
    ],
  },
  {
    id: "acentuacao",
    titulo: "Acentuação e encontros vocálicos",
    grupo: "base",
    gancho: "Ache a **sílaba tônica** e olhe **como a palavra termina**: o acento marca a palavra que foge do padrão da língua.",
    topicosPrf: [T_ACENTO, T_ORTO],
    blocos: [
      {
        tipo: "texto",
        texto:
          "Antes de acentuar, separe as sílabas: **ditongo** fica junto (pai-xão), **hiato** se separa (sa-ú-de). Depois classifique a tônica: última (**oxítona**), penúltima (**paroxítona**) ou antepenúltima (**proparoxítona**).",
      },
      {
        tipo: "comparativo",
        titulo: "Ditongo × hiato × tritongo",
        colunas: [
          { titulo: "Ditongo", itens: ["vogal + semivogal na mesma sílaba", "pai-xão, sé-rie, jó-quei", "nunca se separa"] },
          { titulo: "Hiato", itens: ["duas vogais em sílabas diferentes", "sa-ú-de, ru-im, vo-o", "sempre se separa"] },
          { titulo: "Tritongo", itens: ["semivogal + vogal + semivogal", "U-ru-guai, sa-guão", "nunca se separa"] },
        ],
        sintese: "Na divisão silábica, separam-se também rr, ss, sc, sç e xc (car-ro, nas-cer, ex-ce-to); ch, lh, nh, gu e qu ficam juntos.",
      },
      {
        tipo: "fluxo",
        titulo: "Leva acento?",
        passos: [
          { pergunta: "A tônica é a antepenúltima sílaba?", sim: "**Proparoxítona: acento sempre** (código, lâmpada, ônibus)." },
          { pergunta: "É I ou U tônico de hiato, sozinho ou com S na sílaba?", sim: "**Acento** (saída, baú, país, juízes), salvo antes de NH (rainha) e depois de ditongo em paroxítona (feiura)." },
          { pergunta: "Tônica na última: termina em a(s), e(s), o(s), em, ens ou em ditongo aberto éi, éu, ói?", sim: "**Oxítona acentuada**: sofá, café, avô, também, papéis, chapéu, herói." },
          { pergunta: "Tônica na penúltima: termina em algo que NÃO seja a(s), e(s), o(s), em, ens?", sim: "**Paroxítona acentuada**: fácil, táxi, vírus, álbum, órfão, tórax, história." },
        ],
        senao: "**Sem acento**: casa, item, ideia, juiz, voo, creem.",
      },
      {
        tipo: "grade",
        titulo: "Oxítona e paroxítona são espelhos",
        colunas: ["Oxítona", "Paroxítona"],
        linhas: [
          { rotulo: "a(s), e(s), o(s)", valores: ["sim", "não"] },
          { rotulo: "em, ens", valores: ["sim", "não"] },
          { rotulo: "i(s), u(s)", valores: ["não", "sim"] },
          { rotulo: "l, n, r, x, ps", valores: ["não", "sim"] },
          { rotulo: "ã(s), ão(s), um, uns", valores: ["não", "sim"] },
          { rotulo: "ditongo oral", valores: ["só éi, éu, ói abertos", "sim"] },
        ],
        nota: "Monossílabos tônicos seguem as oxítonas: pá, pé, pó, três, dói, céu. Exceção ao espelho: I e U de hiato acentuam também na oxítona (baú, Piauí).",
      },
      {
        tipo: "lista",
        titulo: "Acentos diferenciais que continuam",
        itens: [
          "**pôr** (verbo) × por (preposição)",
          "**pôde** (passado) × pode (presente)",
          "**têm, vêm** (plural) × tem, vem (singular)",
          "derivados: ele detém → eles **detêm**; ele intervém → eles **intervêm**",
          "facultativos: fôrma / forma, dêmos / demos",
          "caíram: para (verbo), pelo, pela, polo, pera",
        ],
      },
      {
        tipo: "macete",
        texto: "Proparoxítona: todas. Oxítona: a-e-o-em. Paroxítona: todo o resto, menos a-e-o-em.",
        explicacao: "O que a oxítona acentua (a, e, o, em) a paroxítona não acentua, e vice-versa. O ditongo aberto só vale na oxítona e no monossílabo.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "Os **hifens** foram corrigidos, mas o **hífen** do título não.", analise: "Hífen termina em N (paroxítona acentuada); hifens termina em ENS (paroxítona sem acento)." },
          { frase: "Eles **têm** razão e **veem** o problema.", analise: "Têm: plural de ter, circunflexo diferencial. Veem: hiato EE, sem acento desde o Acordo." },
          { frase: "O **herói** ganhou um **troféu**, mas a **plateia** achou a cena pouco **heroica**.", analise: "Ditongo aberto ói, éu, éi: acento só na oxítona (herói, troféu, papéis). Na paroxítona não há acento desde 2009: plateia, heroica, assembleia." },
          { frase: "Ele **pôde** sair ontem, mas hoje não **pode**.", analise: "Acento diferencial obrigatório: pôde (pretérito) × pode (presente). Também ficou pôr (verbo) × por (preposição)." },
          { frase: "O **júri** avaliou o **caráter** do **réu**.", analise: "Paroxítonas terminadas em i e r levam acento (júri, caráter). Réu é monossílabo tônico com ditongo aberto éu: acento." },
          { frase: "O **juiz** ouviu os **juízes** auxiliares.", analise: "Ju-iz: o I forma sílaba com Z, sem acento. Ju-í-zes: o I fica sozinho na sílaba, com acento.", concurso: true },
          { frase: "A **ideia** saiu nos **papéis** da **assembleia**.", analise: "Ideia e assembleia são paroxítonas com ditongo aberto: perderam o acento. Papéis é oxítona: manteve.", concurso: true },
          { frase: "Na **saída**, o fiscal viu a **ruína** do posto e a **bainha** da faca.", analise: "Saída e ruína: i tônico em hiato, sozinho na sílaba, leva acento. Bainha não leva: o i vem antes de NH.", concurso: true },
          { frase: "Os passageiros **creem** que o **voo** vai atrasar e pedem que os agentes **deem** informações.", analise: "Sem acento desde 2009: os verbos em -eem (creem, deem, leem, veem) e as palavras em -oo (voo, enjoo). Têm e vêm, plurais de ter e vir, continuam acentuados.", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Item e itens sem acento", texto: "Paroxítonas terminadas em EM e ENS não se acentuam: item, itens, nuvem, jovens." },
          { titulo: "Feiura sem acento; Piauí com", texto: "I tônico depois de ditongo: na paroxítona perdeu o acento (feiura, baiuca); na oxítona manteve (Piauí, tuiuiú)." },
          { titulo: "Voo, enjoo, leem, creem", texto: "Os hiatos OO e EE perderam o circunflexo." },
          { titulo: "Ruim não leva acento", texto: "Ru-im: o I tônico divide a sílaba com M. Mesmo caso de cair, Raul, juiz." },
          { titulo: "Trema só em nome estrangeiro", texto: "Linguiça, frequente, cinquenta; o trema fica só em nomes como Müller e derivados (mülleriano)." },
        ],
      },
    ],
  },
  {
    id: "formacao-palavras",
    titulo: "Estrutura e formação de palavras",
    grupo: "base",
    gancho: "Pergunte **o que foi somado à palavra primitiva**: um afixo (derivação), outra palavra (composição) ou nada, só mudou a classe (imprópria).",
    topicosPrf: ["Emprego das classes de palavras", "Significação das palavras"],
    blocos: [
      {
        tipo: "lista",
        titulo: "Elementos mórficos",
        itens: [
          "**Radical**: a parte que carrega o sentido e se repete na família (estud-o, estud-ar, estud-ante).",
          "**Afixos**: prefixo antes (in-feliz) e sufixo depois (feliz-mente) do radical.",
          "**Vogal temática**: liga o radical às desinências; no verbo indica a conjugação (estud-a-r, vend-e-r, part-i-r).",
          "**Desinências**: nominais (gênero e número: menin-a-s) e verbais (modo-tempo e número-pessoa: estudá-va-mos).",
          "**Vogal e consoante de ligação**: só facilitam a pronúncia (gas-ô-metro, cafe-t-eira).",
        ],
      },
      {
        tipo: "chaves",
        titulo: "Processos de formação",
        ramos: [
          { rotulo: "Derivação prefixal", exemplo: "reler, desfazer, infeliz" },
          { rotulo: "Derivação sufixal", exemplo: "jornaleiro, felizmente" },
          { rotulo: "Prefixal e sufixal", texto: "prefixo e sufixo independentes", exemplo: "infelizmente (existem 'infeliz' e 'felizmente')" },
          { rotulo: "Parassintética", texto: "prefixo e sufixo ao mesmo tempo; sem um deles a palavra não existe", exemplo: "entardecer, emagrecer, envelhecer" },
          { rotulo: "Regressiva", texto: "substantivo de ação tirado do verbo, mais curto que ele", exemplo: "o ataque (atacar), a busca (buscar), o combate (combater)" },
          { rotulo: "Imprópria", texto: "muda a classe, não a forma", exemplo: "o jantar, um sim, o porquê" },
          { rotulo: "Composição por justaposição", texto: "duas palavras sem perda de som", exemplo: "girassol, passatempo, guarda-chuva" },
          { rotulo: "Composição por aglutinação", texto: "duas palavras com perda de som", exemplo: "planalto (plano + alto), embora (em + boa + hora), aguardente" },
          { rotulo: "Outros", texto: "hibridismo, abreviação, sigla, onomatopeia", exemplo: "automóvel (grego + latim), moto, PRF, tique-taque" },
        ],
      },
      {
        tipo: "fluxo",
        titulo: "Qual é o processo?",
        passos: [
          { pergunta: "A palavra junta dois radicais (duas palavras)?", sim: "**Composição**: houve perda de som = aglutinação (planalto); não houve = justaposição (girassol)." },
          { pergunta: "Ganhou prefixo e sufixo juntos, e sem um deles a palavra não existe?", sim: "**Parassintética**: entardecer ('entarde' e 'tardecer' não existem)." },
          { pergunta: "Ganhou prefixo, sufixo ou os dois de forma independente?", sim: "**Derivação prefixal, sufixal ou prefixal e sufixal**." },
          { pergunta: "É substantivo de ação mais curto que o verbo de onde veio?", sim: "**Regressiva**: o ataque, a luta, o choro." },
          { pergunta: "Só mudou de classe, sem mudar a forma?", sim: "**Imprópria**: o jantar, um não." },
        ],
        senao: "Veja hibridismo (automóvel, sociologia), abreviação (foto, pneu), sigla (ONU) ou onomatopeia (zunzum).",
      },
      {
        tipo: "grade",
        titulo: "Teste da parassíntese",
        colunas: ["Sem o prefixo existe?", "Sem o sufixo existe?", "Processo"],
        linhas: [
          { rotulo: "entardecer", valores: ["não", "não", "parassintética"] },
          { rotulo: "emagrecer", valores: ["não", "não", "parassintética"] },
          { rotulo: "infelizmente", valores: ["sim", "sim", "prefixal e sufixal"] },
          { rotulo: "deslealdade", valores: ["sim", "sim", "prefixal e sufixal"] },
        ],
        nota: "Basta que uma das duas formas não exista para ser parassíntese.",
      },
      {
        tipo: "macete",
        texto: "Regressiva é substantivo de ação; se o substantivo é coisa, o verbo é que veio dele.",
        explicacao: "Ataque, luta, busca (ações) vêm dos verbos. Âncora, escova, telefone (objetos) deram origem aos verbos ancorar, escovar, telefonar.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "**Planalto** e **pernalta** são aglutinações.", analise: "Plano + alto e perna + alta: perdem som na junção." },
          { frase: "Comprou um **guarda-chuva** e um vaso de **girassol**.", analise: "Composição por justaposição: os radicais se unem sem perder sons (guarda + chuva, gira + sol)." },
          { frase: "Deixou a **moto** no posto e tirou uma **foto** do acidente.", analise: "Abreviação (redução): a palavra perde uma parte e mantém o sentido: motocicleta → moto, fotografia → foto." },
          { frase: "O **combate** às fraudes exigiu nova **fiscalização**.", analise: "Combate: regressiva (de combater). Fiscalização: sufixal (fiscalizar + -ção).", concurso: true },
          { frase: "O **amanhecer** na **rodovia** foi tranquilo.", analise: "Amanhecer: verbo parassintético (a + manhã + ecer) usado como substantivo, com artigo: aqui houve também derivação imprópria.", concurso: true },
          { frase: "A **deslealdade** do sócio surpreendeu a todos.", analise: "Derivação prefixal e sufixal: existem 'desleal' e 'lealdade', então os afixos podem sair um de cada vez. Na parassíntese, isso não acontece.", concurso: true },
          { frase: "A cidade **anoiteceu** sem energia, e o motorista **emagreceu** de preocupação.", analise: "Parassíntese: prefixo e sufixo entram juntos. Sem um deles a palavra não existe ('anoite', 'noitecer', 'emagro', 'magrecer').", concurso: true },
          { frase: "**Automóvel** e **sociologia** são palavras formadas por hibridismo.", analise: "Hibridismo: elementos de línguas diferentes. Auto (grego) + móvel (latim); socio (latim) + logia (grego).", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Guarda-chuva é justaposição", texto: "O hífen não impede: as duas palavras ficam inteiras." },
          { titulo: "Sociologia e televisão são híbridos", texto: "Juntam elementos de línguas diferentes (latim + grego)." },
          { titulo: "Infelizmente não é parassíntese", texto: "Como 'infeliz' e 'felizmente' existem, os afixos são independentes." },
        ],
      },
    ],
  },
];
