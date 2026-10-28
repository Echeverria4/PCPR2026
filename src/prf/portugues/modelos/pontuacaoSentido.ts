import type { ModeloPt } from "../tipos";

const T_INTERP = "Compreensão e interpretação de textos";

export const MODELOS_PONTUACAO_SENTIDO: ModeloPt[] = [
  {
    id: "pontuacao",
    titulo: "Pontuação",
    grupo: "nucleo",
    gancho: "**Não se separa o que a sintaxe une**: sujeito e verbo, verbo e complemento. A vírgula marca o que está **fora da ordem direta** ou **sobrando** na frase.",
    topicosPrf: ["Pontuação", "Sintaxe da oração e do período"],
    blocos: [
      {
        tipo: "fluxo",
        titulo: "Vai vírgula?",
        passos: [
          { pergunta: "A vírgula separaria sujeito e verbo, ou verbo e complemento?", sim: "**Proibida**: 'Os agentes da equipe, chegaram' está errado." },
          { pergunta: "É aposto explicativo, vocativo, oração adjetiva explicativa ou expressão explicativa (isto é, ou seja, por exemplo)?", sim: "**Obrigatória, isolando** o termo dos dois lados." },
          { pergunta: "Há adjunto adverbial ou oração adverbial deslocada (antes do verbo ou no meio)?", sim: "**Recomendada**; se o adjunto for curto, **facultativa**: Ontem(,) a pista fechou." },
          { pergunta: "Liga orações coordenadas com sujeitos diferentes, ou com mas, porém, pois, logo?", sim: "**Vírgula**: O agente multou, e o condutor recorreu." },
          { pergunta: "Um verbo já dito foi omitido?", sim: "**Vírgula no lugar do verbo**: Eu fiquei no posto; ele, na pista." },
        ],
        senao: "Ordem direta e termos ligados: **sem vírgula**.",
      },
      {
        tipo: "grade",
        titulo: "Usos da vírgula",
        colunas: ["Vírgula?", "Exemplo"],
        linhas: [
          { rotulo: "entre sujeito e verbo", valores: ["não", "Os condutores multados recorreram."] },
          { rotulo: "aposto explicativo", valores: ["sim", "Brasília, a capital, recebeu a equipe."] },
          { rotulo: "vocativo", valores: ["sim", "Agente, confira o documento."] },
          { rotulo: "adjetiva restritiva", valores: ["não", "O carro que foi apreendido era roubado."] },
          { rotulo: "adjetiva explicativa", valores: ["sim", "O sol, que é uma estrela, aquece a pista."] },
          { rotulo: "adverbial antes da principal", valores: ["sim", "Quando chegou, assinou o termo."] },
          { rotulo: "conjunção deslocada", valores: ["sim", "O agente, porém, recusou o pedido."] },
          { rotulo: "enumeração", valores: ["sim", "Vistoriou pneus, faróis e freios."] },
          { rotulo: "oração substantiva", valores: ["não", "É preciso que todos venham."] },
        ],
      },
      {
        tipo: "comparativo",
        titulo: "Outros sinais",
        colunas: [
          { titulo: "Ponto e vírgula", itens: ["separa orações longas que já têm vírgula", "separa itens de enumeração", "antes de adversativa ou conclusiva deslocada: ...; o laudo, porém, atrasou."] },
          { titulo: "Dois-pontos", itens: ["anuncia explicação, enumeração, citação ou conclusão", "Só houve um motivo: a chuva."] },
          { titulo: "Travessão e parênteses", itens: ["isolam intercalação (o travessão dá mais ênfase)", "travessão também marca fala no diálogo", "O chefe — e só ele — decide."] },
        ],
        sintese: "Em reescrita, trocar vírgulas por travessões ou parênteses mantém o sentido; trocar por dois-pontos pode mudá-lo.",
      },
      {
        tipo: "macete",
        texto: "Sujeito, verbo e complemento não se separam; o que entra no meio entra entre duas vírgulas.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "Os condutores multados na operação de feriado, recorreram.", analise: "Errado: a vírgula separa o sujeito (longo) do verbo." },
          { frase: "Ontem à noite**,** a pista foi interditada.", analise: "Adjunto adverbial deslocado para o início: a vírgula é recomendada, sobretudo se ele for longo. Curto, ela é facultativa." },
          { frase: "O agente conferiu os documentos**,** a carga **e** os pneus.", analise: "Enumeração: vírgula entre os termos; antes do 'e' final, não se usa vírgula." },
          { frase: "Só faltava uma coisa**:** o laudo.", analise: "Dois-pontos anunciam explicação, enumeração ou citação: o que vem depois esclarece o que veio antes." },
          { frase: "Os agentes**,** que estavam de plantão**,** atenderam a ocorrência.", analise: "Com vírgulas: todos estavam de plantão (explicativa). Sem vírgulas: só os de plantão atenderam (restritiva). A vírgula muda o sentido.", concurso: true },
          { frase: "Eu fiquei no posto; ele**,** na pista.", analise: "A vírgula marca a omissão do verbo 'ficou' (zeugma).", concurso: true },
          { frase: "Os fiscais chegaram cedo**;** os motoristas**,** porém**,** atrasaram.", analise: "O ponto e vírgula separa orações que já têm vírgulas internas. 'Porém', deslocado para o meio da oração, fica entre vírgulas.", concurso: true },
          { frase: "Não**,** espere. × Não espere.", analise: "A vírgula muda o sentido: 'Não, espere' recusa algo e pede que a pessoa espere; 'Não espere' manda não esperar.", concurso: true },
          { frase: "O agente parou o caminhão**,** e o motorista desceu.", analise: "Vírgula antes de 'e' é aceita quando as orações têm sujeitos diferentes, e é usada quando o 'e' vale 'mas' ('Estudou muito, e não passou').", concurso: true },
          { frase: "A equipe analisou, todos os documentos da carga.", analise: "Errado: a vírgula separa o verbo do objeto direto. Sujeito e verbo, verbo e complemento não se separam por vírgula única.", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Termo intercalado pede vírgula dupla", texto: "'O relatório, aliás chegou tarde' está errado: abriu, tem de fechar — 'O relatório, aliás, chegou tarde'." },
          { titulo: "'E' com vírgula", texto: "Aceita-se quando as orações têm sujeitos diferentes ou na repetição enfática (e chove, e venta, e alaga)." },
          { titulo: "Sujeito longo não autoriza vírgula", texto: "Por maior que seja, o sujeito não se separa do verbo." },
          { titulo: "Adjunto curto deslocado", texto: "A vírgula é facultativa: 'Hoje a pista abriu' e 'Hoje, a pista abriu' estão corretas." },
        ],
      },
    ],
  },
  {
    id: "colocacao-pronominal",
    titulo: "Colocação pronominal",
    grupo: "nucleo",
    gancho: "O pronome átono (me, te, se, o, a, lhe, nos, vos) **fica depois do verbo**, salvo quando uma **palavra atrativa** o puxa para antes. Nunca comece a frase com ele.",
    topicosPrf: ["Emprego das classes de palavras", "Sintaxe da oração e do período"],
    blocos: [
      {
        tipo: "chaves",
        titulo: "As três posições",
        ramos: [
          { rotulo: "Próclise (antes)", texto: "com palavra atrativa: negação, advérbio sem pausa, relativo, indefinido, interrogativo, conjunção subordinativa, frase exclamativa ou de desejo", exemplo: "Não **o** vi. O agente que **se** feriu. Deus **o** proteja." },
          { rotulo: "Ênclise (depois)", texto: "início de frase, depois de pausa, imperativo afirmativo, infinitivo impessoal, gerúndio", exemplo: "Entregaram-**me** o laudo. Faça-**o** já." },
          { rotulo: "Mesóclise (no meio)", texto: "futuro do presente e do pretérito, sem palavra atrativa", exemplo: "Realizar-**se**-á a vistoria. Dir-**lhe**-ia a verdade." },
        ],
      },
      {
        tipo: "fluxo",
        titulo: "Onde vai o pronome?",
        passos: [
          { pergunta: "Há palavra atrativa antes do verbo, sem pausa (não, que, quem, já, sempre, embora, quando, alguém)?", sim: "**Próclise**: Não **se** sabe. Quando **o** viu..." },
          { pergunta: "O verbo está no futuro do presente ou do pretérito e abre a oração?", sim: "**Mesóclise**: Comunicar-**lhe**-emos a decisão." },
          { pergunta: "O verbo inicia a frase ou vem depois de vírgula?", sim: "**Ênclise**: Entregaram-**me** o laudo." },
        ],
        senao: "Sem atrativo e sem futuro, a **ênclise** é a forma da norma-padrão. A próclise é comum no Brasil, mas a banca cobra a norma.",
      },
      {
        tipo: "grade",
        titulo: "Pronome em locução verbal",
        colunas: ["Posições aceitas", "Exemplo"],
        linhas: [
          { rotulo: "auxiliar + infinitivo, sem atrativo", valores: ["depois do auxiliar (com hífen) ou depois do infinitivo", "Quero-lhe falar. Quero falar-lhe."] },
          { rotulo: "auxiliar + infinitivo, com atrativo", valores: ["antes do auxiliar ou depois do infinitivo", "Não lhe quero falar. Não quero falar-lhe."] },
          { rotulo: "auxiliar + particípio", valores: ["junto do auxiliar; nunca depois do particípio", "Tinha-se ferido. Não se tinha ferido."] },
        ],
        nota: "No Brasil se aceita o pronome solto entre os verbos, sem hífen (vou lhe dizer, tinha se ferido). Parte das bancas ainda cobra só as formas com hífen.",
      },
      {
        tipo: "macete",
        texto: "Atrativo puxa para a frente; futuro parte o verbo ao meio; início de frase empurra para trás.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "**Não se** conhecem as causas do acidente.", analise: "A negação atrai o pronome: próclise." },
          { frase: "Ninguém **o** viu, mas todos **o** procuraram.", analise: "'Ninguém' (indefinido) e 'todos' (indefinido) atraem o pronome." },
          { frase: "**Entregue-me** o documento, por favor.", analise: "Imperativo afirmativo no início da frase: ênclise." },
          { frase: "O agente **que me** atendeu foi gentil.", analise: "Pronome relativo atrai o pronome átono: próclise." },
          { frase: "Quando **lhe** perguntaram, ele não respondeu.", analise: "Conjunção subordinativa (quando, se, embora, porque) atrai o pronome: próclise." },
          { frase: "**Comunicar-lhe-emos** a decisão amanhã.", analise: "Futuro do presente no início, sem atrativo: mesóclise.", concurso: true },
          { frase: "**Me** disseram que a pista fechou.", analise: "Errado na norma-padrão: não se inicia frase com pronome átono. Forma correta: 'Disseram-me'.", concurso: true },
          { frase: "**Aqui se** trabalha com seriedade. × Aqui**,** **trabalha-se** com seriedade.", analise: "Advérbio sem vírgula atrai o pronome (próclise). Com a vírgula, a pausa desfaz a atração e vale a ênclise.", concurso: true },
          { frase: "**Far-se-á** a vistoria amanhã. × **Não se fará** a vistoria amanhã.", analise: "Futuro do presente sem atrativo: mesóclise. Com a negação, vence a próclise. Ênclise com futuro ('fará-se') nunca.", concurso: true },
          { frase: "O agente **tinha-se esquecido** do laudo.", analise: "Locução com particípio: o pronome fica junto do auxiliar (tinha-se esquecido ou se tinha esquecido). Depois do particípio, nunca: 'tinha esquecido-se' está errado.", concurso: true },
          { frase: "**Em se tratando** de segurança, nada é exagero.", analise: "Gerúndio precedido de 'em' pede próclise. Sem o 'em', ênclise: 'Tratando-se de segurança'.", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Futuro com atrativo", texto: "O atrativo vence a mesóclise: 'Não se fará', nunca 'Não far-se-á'." },
          { titulo: "Particípio não aceita ênclise", texto: "'Tinha feito-se' é sempre errado." },
          { titulo: "Pausa anula o atrativo", texto: "'Aqui, vendem-se peças': a vírgula corta a atração do advérbio." },
          { titulo: "Forma do pronome depois do verbo", texto: "Verbo em R, S ou Z perde a letra e o pronome vira lo/la: fazê-lo, vimo-lo. Verbo em som nasal: fizeram-no, põe-na." },
        ],
      },
    ],
  },
  {
    id: "significacao-palavras",
    titulo: "Significação das palavras",
    grupo: "nucleo",
    gancho: "A palavra se entende **no contexto**: a banca pergunta o que ela significa **ali**, que relação tem com outra (sinônimo, antônimo, homônimo, parônimo) e se o sentido é literal ou figurado.",
    topicosPrf: ["Significação das palavras"],
    blocos: [
      {
        tipo: "chaves",
        titulo: "Relações de sentido",
        ramos: [
          { rotulo: "Sinônimos", texto: "sentido próximo no contexto", exemplo: "rodovia / estrada; interditar / bloquear" },
          { rotulo: "Antônimos", texto: "sentido oposto", exemplo: "legal × ilegal; deferir × indeferir" },
          { rotulo: "Homônimos", texto: "mesma forma ou mesmo som, sentidos diferentes", exemplo: "cela × sela; concerto × conserto; são (verbo) × são (sadio)" },
          { rotulo: "Parônimos", texto: "formas parecidas, sentidos diferentes", exemplo: "eminente × iminente; descrição × discrição" },
          { rotulo: "Polissemia", texto: "uma palavra, vários sentidos relacionados", exemplo: "o pé do agente, o pé da mesa, o pé da serra" },
          { rotulo: "Hiperônimo × hipônimo", texto: "termo geral × termo específico", exemplo: "veículo > carro, moto, caminhão" },
        ],
      },
      {
        tipo: "grade",
        titulo: "Pares que caem em prova",
        colunas: ["Significa", "Par confundido"],
        linhas: [
          { rotulo: "eminente", valores: ["ilustre, elevado", "iminente: prestes a ocorrer"] },
          { rotulo: "deferir", valores: ["atender, conceder", "diferir: adiar; ser diferente"] },
          { rotulo: "ratificar", valores: ["confirmar", "retificar: corrigir"] },
          { rotulo: "infringir", valores: ["violar (a lei)", "infligir: aplicar (a pena)"] },
          { rotulo: "mandado", valores: ["ordem judicial", "mandato: delegação, cargo eletivo"] },
          { rotulo: "tráfego", valores: ["trânsito de veículos", "tráfico: comércio ilegal"] },
          { rotulo: "flagrante", valores: ["evidente; no ato", "fragrante: perfumado"] },
          { rotulo: "descrição", valores: ["ato de descrever", "discrição: reserva, qualidade de discreto"] },
          { rotulo: "censo", valores: ["recenseamento", "senso: juízo (bom senso)"] },
          { rotulo: "acender", valores: ["pôr fogo, ligar", "ascender: subir"] },
        ],
      },
      {
        tipo: "lista",
        titulo: "Expressões que confundem",
        itens: [
          "**acerca de** (sobre) × **a cerca de** (a uma distância aproximada) × **há cerca de** (faz aproximadamente)",
          "**ao encontro de** (a favor, em harmonia) × **de encontro a** (contra, em choque)",
          "**a princípio** (no início) × **em princípio** (em tese)",
          "**senão** (caso contrário; a não ser) × **se não** (caso não)",
          "**a fim de** (para) × **afim** (semelhante, parente)",
          "**demais** (excessivamente; os outros) × **de mais** (a mais, oposto de 'de menos')",
        ],
      },
      {
        tipo: "comparativo",
        titulo: "Denotação × conotação",
        colunas: [
          { titulo: "Denotação", itens: ["sentido literal, de dicionário", "O caminhão perdeu o **freio**.", "linguagem técnica, notícia, lei"] },
          { titulo: "Conotação", itens: ["sentido figurado, depende do contexto", "A nova lei é um **freio** aos abusos.", "literatura, publicidade, crônica"] },
        ],
      },
      {
        tipo: "macete",
        texto: "Ao encontro, a favor; de encontro, dá de cara.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "Discutiram **acerca do** novo plano.", analise: "= sobre o novo plano." },
          { frase: "O agente mediu o **comprimento** da carga e fez o **cumprimento** do mandado.", analise: "Parônimos: comprimento = extensão; cumprimento = execução (ou saudação)." },
          { frase: "O **tráfego** na rodovia aumentou, e o **tráfico** de drogas também.", analise: "Tráfego = trânsito, fluxo de veículos; tráfico = comércio ilegal." },
          { frase: "Os sócios **concertaram** um acordo, e o mecânico **consertou** o pneu.", analise: "Homônimos homófonos: mesmo som, grafia e sentido diferentes. Concertar = combinar, harmonizar; consertar = reparar." },
          { frase: "A **pedra** rolou da encosta. × Ele tem coração de **pedra**.", analise: "Sentido denotativo (literal) × conotativo (figurado): o contexto decide o sentido da mesma palavra." },
          { frase: "A pena foi **infligida** ao motorista que **infringiu** a lei.", analise: "Inflige-se a pena; infringe-se a lei.", concurso: true },
          { frase: "A medida veio **ao encontro** dos interesses da equipe.", analise: "= favoreceu. 'De encontro aos interesses' diria o contrário.", concurso: true },
          { frase: "O **eminente** jurista alertou para o risco **iminente** de queda da ponte.", analise: "Parônimos: eminente = notável, ilustre; iminente = prestes a acontecer.", concurso: true },
          { frase: "O depoente **ratificou** o depoimento e, dias depois, o **retificou**.", analise: "Ratificar = confirmar; retificar = corrigir. Trocar um pelo outro inverte o sentido da frase.", concurso: true },
          { frase: "O juiz expediu o **mandado** de busca durante o **mandato** do prefeito.", analise: "Mandado = ordem judicial; mandato = período no exercício de um cargo eletivo (ou procuração).", concurso: true },
          { frase: "Foram apreendidas **armas**: dois **revólveres** e uma **pistola**.", analise: "'Armas' é hiperônimo (sentido geral); 'revólver' e 'pistola' são hipônimos (casos específicos). Retomar pelo hiperônimo é recurso de coesão.", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Sinônimo depende do contexto", texto: "'Grave' = sério em 'falha grave'; = baixo em 'som grave'. Teste a troca na frase, não no dicionário." },
          { titulo: "Reescrita com troca de palavra", texto: "A banca pergunta se o sentido se mantém: um parônimo trocado (retificar por ratificar) inverte a ideia." },
          { titulo: "Hiperônimo serve à coesão", texto: "Retomar 'o caminhão' por 'o veículo' evita repetição sem mudar o referente." },
        ],
      },
    ],
  },
  {
    id: "interpretacao",
    titulo: "Compreensão e interpretação de textos",
    grupo: "nucleo",
    gancho: "**Compreender** é achar o que o texto diz; **interpretar** é concluir o que ele permite. Toda alternativa certa tem **prova no texto** — o que vai além é extrapolação.",
    topicosPrf: [T_INTERP],
    blocos: [
      {
        tipo: "comparativo",
        titulo: "Compreensão × interpretação",
        colunas: [
          { titulo: "Compreensão", itens: ["o que está escrito", "localizar informação, reconhecer paráfrase", "comandos: 'segundo o texto', 'de acordo com o autor'"] },
          { titulo: "Interpretação", itens: ["o que se conclui a partir do escrito", "inferência, intenção, ponto de vista", "comandos: 'infere-se', 'depreende-se', 'o texto sugere'"] },
        ],
      },
      {
        tipo: "chaves",
        titulo: "Como a alternativa errada é construída",
        ramos: [
          { rotulo: "Extrapolação", texto: "afirma o que o texto não autoriza ou generaliza", exemplo: "texto: 'acidentes caíram' → alternativa: 'acidentes acabaram'" },
          { rotulo: "Redução", texto: "toma uma parte pelo todo", exemplo: "o texto cita três causas; a alternativa diz que só há uma" },
          { rotulo: "Contradição", texto: "diz o oposto do texto", exemplo: "texto: 'a medida é insuficiente' → alternativa: 'a medida resolve'" },
          { rotulo: "Troca de força", texto: "muda quantificador, modalidade ou tempo", exemplo: "'pode reduzir' vira 'reduz sempre'; 'alguns' vira 'todos'" },
        ],
      },
      {
        tipo: "comparativo",
        titulo: "Pressuposto × subentendido",
        colunas: [
          { titulo: "Pressuposto", itens: ["marcado por uma palavra da frase (ainda, voltou a, parou de, também)", "'O agente parou de fumar' → ele fumava", "o falante não pode negar"] },
          { titulo: "Subentendido", itens: ["depende do contexto: é insinuação", "'Está frio aqui' → feche a janela", "o falante pode negar ('não quis dizer isso')"] },
        ],
      },
      {
        tipo: "passos",
        frase: "Comando: 'Infere-se do texto que...'",
        passos: [
          "Leia o comando antes do texto: 'segundo o texto' pede o que está escrito; 'infere-se' pede conclusão autorizada.",
          "Para cada alternativa, ache no texto o trecho que ela retoma.",
          "Compare palavra por palavra: quantificador (todos, alguns), modalidade (pode, deve), tempo e negação.",
          "Elimine o que extrapola, reduz, contradiz ou muda a força da afirmação.",
        ],
        conclusao: "Fica a alternativa que você consegue provar com um trecho do texto.",
      },
      {
        tipo: "lista",
        titulo: "Palavras perigosas nas alternativas",
        itens: [
          "**sempre, nunca, todos, nenhum, apenas, exclusivamente**: generalizam ou restringem além do texto.",
          "**deve, é necessário, certamente**: endurecem o que o texto apresentou como possibilidade.",
          "**a principal causa, o único fator**: criam hierarquia que o texto não fez.",
        ],
      },
      {
        tipo: "macete",
        texto: "Sem trecho que prove, a alternativa cai.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "Texto: 'O agente voltou a fiscalizar o trecho.'", analise: "Pressuposto marcado por 'voltou a': ele já havia fiscalizado o trecho antes." },
          { frase: "Texto: 'O motorista **deixou de** beber antes de dirigir.'", analise: "Pressuposto: antes, ele bebia antes de dirigir. Deixar de, parar de, continuar a e voltar a carregam informação implícita." },
          { frase: "Texto: '**Até** o diretor compareceu à operação.'", analise: "Implícito marcado por 'até': a presença do diretor não era esperada." },
          { frase: "Texto: 'O número de acidentes caiu nas rodovias que receberam radares.' Alternativa: 'Os radares eliminaram os acidentes nas rodovias.'", analise: "Extrapolação dupla: o texto fala em queda (não em fim) e só nas rodovias com radar (não em todas).", concurso: true },
          { frase: "Texto: 'Alguns condutores ignoram a sinalização.' Alternativa: 'Os condutores ignoram a sinalização.'", analise: "Generalização: 'alguns' virou 'os' (todos).", concurso: true },
          { frase: "Texto: 'A ponte foi reformada, **mas** ainda há buracos.' Alternativa: 'O autor considera a reforma um sucesso.'", analise: "Errada: o 'mas' põe o peso no segundo argumento (ainda há buracos). Para o autor, a reforma não resolveu o problema.", concurso: true },
          { frase: "Texto: 'Poucos motoristas usam o cinto **no banco de trás**.' Alternativa: 'Quase nenhum motorista usa o cinto.'", analise: "Errada: o texto restringe ao banco de trás e a alternativa generaliza para qualquer uso do cinto. Confira o alcance de cada termo.", concurso: true },
          { frase: "Texto: '**Só** os agentes treinados **podem** operar o radar.' Alternativa: 'Os agentes treinados devem operar o radar.'", analise: "Errada: 'só... podem' indica exclusividade de permissão, não obrigação. 'Poder' virou 'dever'.", concurso: true },
          { frase: "Texto: 'Ele **não é um mau** motorista.' Alternativa: 'Ele é um ótimo motorista.'", analise: "Errada: negar 'mau' não equivale a afirmar 'ótimo'. O texto só diz que ele não é ruim (atenuação).", concurso: true },
          { frase: "Texto: 'O agente multou o motorista porque **ele** estava sem cinto.' Alternativa: 'Ele retoma o agente.'", analise: "Errada: o contexto da multa mostra que 'ele' retoma o motorista. Quando a gramática permite duas leituras, o sentido decide.", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Verdade do mundo não basta", texto: "Uma alternativa pode ser verdadeira na realidade e estar errada por não constar no texto." },
          { titulo: "Voz do autor × voz citada", texto: "Se o texto cita um especialista, a opinião é do especialista, não necessariamente do autor." },
          { titulo: "Ideia central × detalhe", texto: "A ideia central percorre o texto todo; a alternativa que traz um exemplo isolado é redução." },
        ],
      },
    ],
  },
  {
    id: "tipologia-generos",
    titulo: "Tipologia textual e gêneros",
    grupo: "nucleo",
    gancho: "**Tipo** é a estrutura (narrar, descrever, expor, argumentar, instruir); **gênero** é o texto da vida real (notícia, editorial, bula). O gênero mistura tipos, mas um predomina.",
    topicosPrf: ["Tipologia textual", T_INTERP],
    blocos: [
      {
        tipo: "chaves",
        titulo: "Os tipos textuais",
        ramos: [
          { rotulo: "Narrativo", texto: "fatos em sequência, com personagens e tempo", exemplo: "O carro saiu, derrapou e capotou." },
          { rotulo: "Descritivo", texto: "caracteriza seres e lugares: um retrato", exemplo: "A pista era estreita, sem acostamento e mal iluminada." },
          { rotulo: "Expositivo", texto: "informa e explica, sem defender tese", exemplo: "O radar mede a velocidade por ondas de rádio." },
          { rotulo: "Argumentativo", texto: "defende uma tese com argumentos", exemplo: "Os radares devem ser ampliados, pois reduzem mortes." },
          { rotulo: "Injuntivo", texto: "instrui, orienta, ordena", exemplo: "Reduza a velocidade e acenda os faróis." },
          { rotulo: "Dialogal", texto: "troca de falas", exemplo: "entrevista, conversa transcrita" },
        ],
      },
      {
        tipo: "grade",
        titulo: "Pistas linguísticas",
        colunas: ["Verbo típico", "Marcas"],
        linhas: [
          { rotulo: "narrativo", valores: ["pretérito perfeito", "sequência temporal: depois, então, de repente"] },
          { rotulo: "descritivo", valores: ["imperfeito ou presente; ser, estar, ter", "adjetivos, enumeração, simultaneidade"] },
          { rotulo: "expositivo", valores: ["presente atemporal", "definições, dados, 3ª pessoa"] },
          { rotulo: "argumentativo", valores: ["presente", "tese, argumentos, conectivos (pois, portanto, no entanto)"] },
          { rotulo: "injuntivo", valores: ["imperativo ou infinitivo", "passo a passo, ordem, orientação"] },
        ],
      },
      {
        tipo: "comparativo",
        titulo: "Expositivo × argumentativo",
        colunas: [
          { titulo: "Expositivo", itens: ["apresenta o tema", "não toma partido", "verbete, aula, relatório técnico"] },
          { titulo: "Argumentativo", itens: ["defende uma posição", "usa argumentos e rebate objeções", "editorial, artigo de opinião, carta do leitor"] },
        ],
        sintese: "Pergunta-chave: o texto quer que eu **saiba** algo (expositivo) ou que eu **concorde** com algo (argumentativo)?",
      },
      {
        tipo: "lista",
        titulo: "Gêneros frequentes em prova",
        itens: [
          "**Notícia**: fato recente, 3ª pessoa, predomínio narrativo-expositivo.",
          "**Reportagem**: aprofunda o fato, com dados, fontes e entrevistas.",
          "**Editorial**: opinião do veículo, sem assinatura, argumentativo.",
          "**Artigo de opinião**: opinião assinada, argumentativo.",
          "**Crônica**: texto curto sobre o cotidiano, tom pessoal, pode narrar ou argumentar.",
          "**Charge e tirinha**: humor crítico, linguagem verbal e não verbal.",
        ],
      },
      {
        tipo: "macete",
        texto: "Narrar conta, descrever pinta, expor ensina, argumentar convence, instruir manda.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "'Recomenda-se reduzir a velocidade e manter distância do veículo à frente.'", analise: "Injuntivo: orienta o leitor, com verbo no infinitivo." },
          { frase: "'A rodovia tem pista dupla, acostamento largo e iluminação fraca.'", analise: "Descritivo: caracteriza o lugar com adjetivos e enumeração." },
          { frase: "'Na madrugada de domingo, um caminhão tombou na serra. O motorista saiu ileso e foi levado ao posto.'", analise: "Narrativo: fatos em sequência temporal, com personagem, tempo e lugar, e verbos no pretérito perfeito." },
          { frase: "'O airbag é uma bolsa que infla em milésimos de segundo e reduz o impacto da batida.'", analise: "Expositivo: explica um conceito de forma objetiva, sem defender uma tese." },
          { frase: "Editorial critica a falta de fiscalização e conta um acidente para ilustrar.", analise: "Gênero editorial; tipo predominante argumentativo; o trecho narrativo serve de argumento (exemplo).", concurso: true },
          { frase: "'Radares não devem servir para arrecadar. Se a meta fosse arrecadar, eles ficariam escondidos, e não sinalizados.'", analise: "Argumentativo: defende uma tese (radar não é arrecadação) e a sustenta com um argumento (a sinalização). Opinião + justificativa definem o tipo.", concurso: true },
          { frase: "A notícia relata o acidente de ontem; a reportagem investiga por que aquele trecho tem tantos acidentes.", analise: "Notícia: fato recente, relato breve e objetivo. Reportagem: aprofunda o tema com dados, entrevistas e contexto.", concurso: true },
          { frase: "Texto curto que parte de um engarrafamento comum para refletir, com humor, sobre a pressa das pessoas.", analise: "Crônica: parte de um fato do cotidiano para uma reflexão pessoal, em linguagem leve, misturando narração e comentário.", concurso: true },
          { frase: "'Pedágio (s.m.): taxa cobrada pelo direito de passar por uma via.'", analise: "Verbete: gênero expositivo que define palavras. Predominam as funções referencial e metalinguística.", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Tipo não é gênero", texto: "'Narrativo' é tipo; 'conto' e 'notícia' são gêneros. Alternativa que mistura os dois termos costuma estar errada." },
          { titulo: "Notícia não opina", texto: "A notícia informa; a opinião fica no editorial e no artigo." },
          { titulo: "Predomínio, não exclusividade", texto: "Quase todo texto mistura tipos: a banca pergunta qual predomina." },
        ],
      },
    ],
  },
];
