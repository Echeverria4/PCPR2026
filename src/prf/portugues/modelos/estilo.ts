import type { ModeloPt } from "../tipos";

const T_INTERP = "Compreensão e interpretação de textos";
const T_SIGNIF = "Significação das palavras";

export const MODELOS_ESTILO: ModeloPt[] = [
  {
    id: "modalizadores",
    titulo: "Modalizadores: a atitude do autor",
    grupo: "aprofundamento",
    gancho: "**Modalizador** é a marca da atitude do autor diante do que diz: certeza, dúvida, obrigação ou avaliação. Achar o modalizador é achar a opinião escondida no texto.",
    topicosPrf: [T_INTERP, T_SIGNIF],
    blocos: [
      {
        tipo: "chaves",
        titulo: "Tipos de modalização",
        ramos: [
          { rotulo: "Epistêmica", texto: "certeza ou possibilidade", exemplo: "certamente, talvez, provavelmente, é possível que, parece" },
          { rotulo: "Deôntica", texto: "obrigação, permissão ou proibição", exemplo: "deve, é preciso, é proibido, pode (= tem permissão)" },
          { rotulo: "Avaliativa", texto: "juízo de valor", exemplo: "infelizmente, felizmente, lamentavelmente; decisão acertada, medida absurda" },
          { rotulo: "Delimitadora", texto: "restringe o alcance do que se afirma", exemplo: "tecnicamente, do ponto de vista jurídico, em geral" },
        ],
      },
      {
        tipo: "grade",
        titulo: "Recursos que modalizam",
        colunas: ["Exemplo", "Efeito"],
        linhas: [
          { rotulo: "advérbio", valores: ["Infelizmente, a pista fechou.", "avaliação negativa"] },
          { rotulo: "adjetivo", valores: ["Foi uma decisão acertada.", "avaliação positiva"] },
          { rotulo: "verbo auxiliar", valores: ["O motorista pode ter dormido.", "possibilidade"] },
          { rotulo: "futuro do pretérito", valores: ["O acidente teria sido causado por óleo.", "distanciamento: o autor não se compromete"] },
          { rotulo: "expressão impessoal", valores: ["É provável que chova.", "probabilidade"] },
          { rotulo: "aspas", valores: ["A 'solução' anunciada não resolveu nada.", "ironia, distanciamento"] },
        ],
      },
      {
        tipo: "comparativo",
        titulo: "Os dois sentidos de 'pode' e 'deve'",
        colunas: [
          { titulo: "Epistêmico (possibilidade)", itens: ["O motorista **pode** estar alcoolizado (= é possível).", "A obra **deve** terminar em março (= provavelmente)."] },
          { titulo: "Deôntico (permissão, obrigação)", itens: ["O condutor **pode** seguir viagem (= está autorizado).", "A obra **deve** terminar em março (= é obrigatório)."] },
        ],
        sintese: "O contexto decide. Quando a frase admite as duas leituras, a banca costuma explorar essa ambiguidade.",
      },
      {
        tipo: "macete",
        texto: "Pergunte: o autor afirma, duvida, obriga ou avalia?",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "Segundo a polícia, o motorista **estaria** embriagado.", analise: "O futuro do pretérito marca informação não confirmada: o jornal atribui a afirmação à polícia e não se compromete.", concurso: true },
          { frase: "**Lamentavelmente**, o número de mortes cresceu.", analise: "Modalizador avaliativo: o fato é informado com um juízo de valor do autor." },
          { frase: "**Talvez** a nova sinalização reduza os acidentes.", analise: "Modalizador epistêmico: o autor apresenta hipótese, não certeza. Alternativa que diga 'o autor afirma que a sinalização reduzirá' está errada.", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Texto 'neutro' também modaliza", texto: "A escolha de um adjetivo (medida 'tímida', 'corajosa') já revela posição." },
          { titulo: "Hipótese não vira certeza", texto: "Se o texto usa 'pode', 'talvez', 'parece', a alternativa que afirma com certeza extrapola." },
          { titulo: "Aspas nem sempre citam", texto: "Podem marcar ironia ou distanciamento: a 'solução' = algo que o autor não considera solução." },
        ],
      },
    ],
  },
  {
    id: "figuras-linguagem",
    titulo: "Figuras de linguagem",
    grupo: "aprofundamento",
    gancho: "Figura é um **desvio intencional** do uso comum para criar efeito. Ache onde está o desvio: no **sentido da palavra**, na **ideia**, na **construção** da frase ou no **som**.",
    topicosPrf: [T_SIGNIF, T_INTERP],
    blocos: [
      {
        tipo: "chaves",
        titulo: "Figuras de palavra (sentido)",
        ramos: [
          { rotulo: "Metáfora", texto: "comparação implícita, por semelhança", exemplo: "A estrada era uma serpente." },
          { rotulo: "Comparação", texto: "semelhança com conectivo", exemplo: "A estrada serpenteava como uma cobra." },
          { rotulo: "Metonímia", texto: "troca por relação real: autor pela obra, continente pelo conteúdo, parte pelo todo", exemplo: "Leu Machado de Assis. Bebeu dois copos." },
          { rotulo: "Catacrese", texto: "metáfora já fixada, por falta de outro nome", exemplo: "pé da mesa, braço da cadeira, céu da boca" },
          { rotulo: "Sinestesia", texto: "mistura de sentidos", exemplo: "voz áspera, cor gritante" },
          { rotulo: "Perífrase", texto: "expressão no lugar do nome", exemplo: "a Cidade Maravilhosa (o Rio de Janeiro)" },
        ],
      },
      {
        tipo: "chaves",
        titulo: "Figuras de pensamento (ideia)",
        ramos: [
          { rotulo: "Antítese", texto: "ideias opostas lado a lado", exemplo: "entre a vida e a morte" },
          { rotulo: "Paradoxo", texto: "opostos atribuídos ao mesmo ser, ao mesmo tempo", exemplo: "um silêncio ensurdecedor" },
          { rotulo: "Ironia", texto: "diz o contrário do que pensa", exemplo: "Que motorista prudente: 180 km/h!" },
          { rotulo: "Hipérbole", texto: "exagero", exemplo: "Já avisei um milhão de vezes." },
          { rotulo: "Eufemismo", texto: "suaviza uma ideia dura", exemplo: "Ele partiu (= morreu)." },
          { rotulo: "Prosopopeia", texto: "ação ou sentimento humano para o que não é humano", exemplo: "O radar vigia a pista." },
          { rotulo: "Gradação", texto: "sequência crescente ou decrescente", exemplo: "Freou, derrapou, capotou." },
        ],
      },
      {
        tipo: "chaves",
        titulo: "Figuras de construção e de som",
        ramos: [
          { rotulo: "Elipse", texto: "omite termo fácil de recuperar", exemplo: "Na pista, dois carros (= havia)." },
          { rotulo: "Zeugma", texto: "omite termo já dito antes", exemplo: "Eu fiquei no posto; ele, na pista." },
          { rotulo: "Pleonasmo", texto: "repetição para dar ênfase", exemplo: "Vi com meus próprios olhos." },
          { rotulo: "Polissíndeto × assíndeto", texto: "repete o conectivo × elimina o conectivo", exemplo: "E chove, e venta, e alaga. / Vim, vi, venci." },
          { rotulo: "Hipérbato", texto: "inversão da ordem direta", exemplo: "Das estradas cuido eu." },
          { rotulo: "Silepse", texto: "concordância com a ideia, não com a palavra", exemplo: "Os brasileiros somos teimosos (pessoa)." },
          { rotulo: "Aliteração e assonância", texto: "repetição de consoantes / de vogais", exemplo: "O rato roeu a roupa do rei de Roma." },
          { rotulo: "Onomatopeia", texto: "imita sons", exemplo: "o tique-taque, o vrum do motor" },
        ],
      },
      {
        tipo: "comparativo",
        titulo: "Metáfora × metonímia",
        colunas: [
          { titulo: "Metáfora", itens: ["relação de **semelhança**", "'Aquele agente é uma rocha' (firme como uma rocha)"] },
          { titulo: "Metonímia", itens: ["relação **real** de proximidade: contém, produz, faz parte", "'A rodovia inteira parou para ver o resgate' (as pessoas na rodovia)"] },
        ],
        sintese: "A metáfora parece; a metonímia pertence.",
      },
      {
        tipo: "comparativo",
        titulo: "Antítese × paradoxo",
        colunas: [
          { titulo: "Antítese", itens: ["opostos lado a lado, sem contradição lógica", "Uns riem, outros choram."] },
          { titulo: "Paradoxo", itens: ["opostos no mesmo ser e ao mesmo tempo: contradição aparente", "um silêncio ensurdecedor"] },
        ],
      },
      {
        tipo: "macete",
        texto: "A metáfora parece; a metonímia pertence.",
        explicacao: "Se a troca se explica por 'é como', é metáfora. Se se explica por 'está em', 'é parte de', 'foi feito por', é metonímia.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "'Foi uma decisão brilhante', disse ele, depois do acidente causado pela decisão.", analise: "Ironia: o elogio diz o contrário do que se pensa.", concurso: true },
          { frase: "Toda a rodovia parou para ver o resgate.", analise: "Metonímia: o lugar pelas pessoas que estavam nele.", concurso: true },
          { frase: "O asfalto derretia sob o sol do meio-dia.", analise: "Hipérbole: exagero para intensificar o calor." },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Catacrese não é metáfora criativa", texto: "'Pé da mesa' é a única forma de dizer: a metáfora se fixou e perdeu o efeito." },
          { titulo: "Zeugma × elipse", texto: "Na zeugma, o termo omitido já apareceu antes no texto; na elipse, ele não aparece, mas se recupera pelo contexto." },
          { titulo: "Pleonasmo: figura ou vício", texto: "Com ênfase intencional, é figura (vi com meus olhos). Sem efeito, é vício (subir para cima)." },
          { titulo: "Personificação × metáfora", texto: "Toda prosopopeia é uma espécie de metáfora, mas a banca pede a mais específica: se há ação humana atribuída a coisa, marque prosopopeia." },
        ],
      },
    ],
  },
  {
    id: "funcoes-vicios",
    titulo: "Funções da linguagem e vícios de linguagem",
    grupo: "aprofundamento",
    gancho: "Cada função põe o **foco num elemento da comunicação**: emissor, receptor, assunto, mensagem, canal ou código. **Vício** é o desvio que atrapalha a clareza sem criar efeito.",
    topicosPrf: [T_INTERP, "Tipologia textual", T_SIGNIF],
    blocos: [
      {
        tipo: "chaves",
        titulo: "Funções: o elemento em foco",
        ramos: [
          { rotulo: "Referencial", texto: "foco no assunto: informa, 3ª pessoa", exemplo: "notícia, relatório, texto técnico" },
          { rotulo: "Emotiva", texto: "foco no emissor: 1ª pessoa, exclamações", exemplo: "diário, depoimento, desabafo" },
          { rotulo: "Conativa (apelativa)", texto: "foco no receptor: imperativo, vocativo, 2ª pessoa", exemplo: "propaganda, campanha educativa" },
          { rotulo: "Poética", texto: "foco na mensagem: forma trabalhada, ritmo, rima, figuras", exemplo: "poema, slogan" },
          { rotulo: "Fática", texto: "foco no canal: abrir, testar ou manter o contato", exemplo: "Alô? Tá me ouvindo? Entendeu?" },
          { rotulo: "Metalinguística", texto: "foco no código: a linguagem falando dela mesma", exemplo: "verbete, gramática, poema sobre poema" },
        ],
      },
      {
        tipo: "grade",
        titulo: "Qual função predomina?",
        colunas: ["Função"],
        linhas: [
          { rotulo: "'Use o cinto. Sua vida vale mais.'", valores: ["conativa"] },
          { rotulo: "verbete de dicionário", valores: ["metalinguística"] },
          { rotulo: "notícia de acidente na rodovia", valores: ["referencial"] },
          { rotulo: "'Alô, central, está na escuta?'", valores: ["fática"] },
          { rotulo: "'Que saudade da minha cidade!'", valores: ["emotiva"] },
          { rotulo: "slogan com rima e ritmo", valores: ["poética (com a conativa)"] },
        ],
        nota: "Quase todo texto tem mais de uma função: a banca pergunta qual predomina.",
      },
      {
        tipo: "chaves",
        titulo: "Vícios de linguagem",
        ramos: [
          { rotulo: "Ambiguidade", texto: "duplo sentido não intencional", exemplo: "O agente viu o assaltante correndo (quem corria?)." },
          { rotulo: "Pleonasmo vicioso", texto: "repetição inútil", exemplo: "subir para cima, elo de ligação, há anos atrás" },
          { rotulo: "Cacofonia", texto: "som desagradável ou ridículo na junção", exemplo: "por cada, boca dela, vez passada" },
          { rotulo: "Eco", texto: "rimas involuntárias em prosa", exemplo: "A decisão da comissão causou indignação na população." },
          { rotulo: "Barbarismo", texto: "erro na forma da palavra: grafia, pronúncia, flexão", exemplo: "rúbrica (rubrica), previlégio, ele interviu (interveio)" },
          { rotulo: "Solecismo", texto: "erro de sintaxe: concordância, regência, colocação", exemplo: "Haviam muitos carros. Assisti o jogo. Me disseram." },
        ],
      },
      {
        tipo: "comparativo",
        titulo: "Barbarismo × solecismo",
        colunas: [
          { titulo: "Barbarismo", itens: ["erro **na palavra**", "grafia, pronúncia ou flexão", "'ele manteu' (manteve), 'pobrema'"] },
          { titulo: "Solecismo", itens: ["erro **na frase**", "concordância, regência, colocação", "'Fazem dois anos', 'Prefiro mais isso do que aquilo'"] },
        ],
        sintese: "Barbarismo estraga a palavra; solecismo estraga a construção.",
      },
      {
        tipo: "macete",
        texto: "Função: pergunte para quem o texto olha. Vício: pergunte se o desvio tem efeito ou só atrapalha.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "O chefe falou com o agente em sua sala.", analise: "Ambiguidade: a sala é do chefe ou do agente? Reescrita: 'na sala do chefe'.", concurso: true },
          { frase: "Campanha: 'Se beber, não dirija. Sua família espera por você.'", analise: "Predomina a função conativa: imperativo e apelo direto ao leitor (você).", concurso: true },
          { frase: "Vi o acidente com meus próprios olhos.", analise: "Pleonasmo: figura quando a ênfase é intencional (relato pessoal); vício em texto técnico." },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Ambiguidade proposital é recurso", texto: "Em humor e publicidade, o duplo sentido é intencional: não é vício." },
          { titulo: "Fática não é só telefone", texto: "'Né?', 'Entendeu?', 'Pois é' também testam ou mantêm o contato." },
          { titulo: "Metalinguagem em qualquer código", texto: "Um filme sobre cinema ou um poema sobre o ato de escrever também são metalinguagem." },
        ],
      },
    ],
  },
];
