import type { ConteudoPrf } from "../../data/prf";

export const CONTEUDO_PRF_ARQ: ConteudoPrf[] = [
  {
    materia: "arq",
    topico: "Princípios e conceitos arquivísticos",
    texto: `Arquivo é o conjunto de documentos produzidos e recebidos por órgãos públicos, instituições de caráter público e entidades privadas, no exercício de atividades específicas, e também por pessoas físicas, qualquer que seja o suporte da informação (Lei 8.159/1991, art. 2º). O ponto central é a acumulação natural: os documentos nascem das atividades de quem os acumula, e não de uma coleção montada por assunto.

A palavra também designa o setor que guarda os documentos, o móvel onde eles ficam e a instituição arquivística. A finalidade do arquivo é servir à administração e, depois, à história; sua função é tornar as informações disponíveis.

Características dos documentos de arquivo:
• Naturalidade: acumulam-se naturalmente, no curso das atividades
• Imparcialidade: registram as ações com fidelidade, porque foram criados para cumprir uma função, e não para a posteridade
• Autenticidade: são criados, mantidos e custodiados segundo procedimentos regulares e comprováveis
• Inter-relacionamento (organicidade): ligam-se uns aos outros e às atividades que os geraram
• Unicidade: cada documento tem lugar único no conjunto, mesmo que existam cópias

Arquivo × biblioteca:
• Arquivo: exemplares únicos ou em poucas vias, acumulação natural, conjuntos unidos pela origem (fundos), finalidade inicialmente administrativa e classificação própria de cada instituição
• Biblioteca: exemplares múltiplos, entrada por compra, permuta ou doação, coleções reunidas por assunto, finalidade cultural e científica e classificação por sistemas padronizados
• Fundo aberto: de instituição em funcionamento, ainda recebe documentos; fundo fechado: de instituição extinta, não recebe acréscimos

Princípios:
• Proveniência (respeito aos fundos): documentos de um produtor não se misturam aos de outro; é o primeiro a ser aplicado e o que forma o fundo
• Ordem original: mantém-se a organização dada pelo produtor, desdobramento interno da proveniência
• Indivisibilidade (integridade): o fundo é preservado sem dispersão, mutilação, alienação, destruição não autorizada ou adição indevida
• Cumulatividade: o arquivo é uma formação progressiva e natural
• Reversibilidade: todo tratamento deve poder ser desfeito, regra importante na restauração
• Territorialidade: os arquivos devem ficar no território em que foram produzidos
• Pertinência (temática): reorganizar por assunto, ignorando a origem; é rejeitada, por contrariar a proveniência`,
    exemplos: [
      "A cópia de uma portaria guardada na pasta funcional de um servidor tem função própria naquele conjunto: mesmo havendo outras cópias, ela é única no contexto em que foi acumulada (unicidade).",
      "Em \"o arquivo do setor está cheio\", a palavra pode indicar o móvel; em \"o Arquivo Nacional recebeu os documentos\", indica a instituição arquivística.",
    ],
    curiosidade:
      "O princípio do respeito aos fundos, base da proveniência, foi formulado na França em 1841 pelo arquivista e historiador Natalis de Wailly, para acabar com a prática de reorganizar os documentos por assunto.",
  },
  {
    materia: "arq",
    topico: "Gestão de documentos e ciclo de vida",
    texto: `Gestão de documentos é o conjunto de procedimentos e operações técnicas referentes à produção, tramitação, uso, avaliação e arquivamento em fase corrente e intermediária, visando à eliminação ou ao recolhimento para guarda permanente (Lei 8.159/1991, art. 3º). A mesma lei diz que a gestão documental e a proteção especial aos documentos de arquivo são dever do Poder Público (art. 1º).

Fases da gestão:
• Produção: criar só os documentos necessários, padronizar modelos e formulários, evitar duplicidades
• Utilização: protocolo, tramitação, organização e arquivamento nas fases corrente e intermediária, normas de acesso e de recuperação
• Destinação: avaliação, seleção e decisão entre eliminar e guardar para sempre

Teoria das três idades (art. 8º), baseada na frequência de uso e no valor dos documentos:
• Corrente: documentos em curso ou que, mesmo sem movimentação, são consultados com frequência; ficam perto de quem os produziu, em arquivos setoriais ou num arquivo central
• Intermediária: documentos que, sem uso corrente, aguardam a eliminação ou o recolhimento por razões de interesse administrativo; uso eventual e guarda centralizada, que pode ficar longe dos setores
• Permanente: documentos de valor histórico, probatório e informativo, preservados para sempre e abertos ao público

O valor primário (administrativo, legal, fiscal) interessa ao próprio órgão e é temporário; o valor secundário (histórico, probatório, informativo) interessa à sociedade e justifica a guarda permanente. Transferência é a passagem da fase corrente para a intermediária; recolhimento é a entrada no arquivo permanente.

Documentos de valor permanente são inalienáveis e imprescritíveis (art. 10), e quem os desfigurar ou destruir responde nas esferas penal, civil e administrativa (art. 25).

No arquivo permanente, as atividades são arranjo, descrição, publicação, referência (política de acesso e ações culturais) e conservação. A descrição produz os instrumentos de pesquisa:
• Guia: visão geral dos fundos e coleções de um arquivo
• Inventário: descreve as unidades de um fundo ou de parte dele
• Catálogo: descreve documentos de um ou mais fundos por critério temático, cronológico, onomástico ou geográfico
• Catálogo seletivo (repertório): descreve em detalhe documentos escolhidos por um tema`,
    exemplos: [
      "Caixas de processos que saem do setor de compras para o arquivo central passam por transferência; as que vão do arquivo central para o arquivo permanente passam por recolhimento.",
      "Um contrato de manutenção de viaturas tem valor primário enquanto serve para fiscalizar e pagar o serviço; cumprido o prazo de guarda, se não tiver valor secundário, segue para eliminação conforme a tabela.",
    ],
    curiosidade:
      "A ideia de ciclo de vida dos documentos ganhou força nos Estados Unidos depois da Segunda Guerra Mundial, com a explosão de papéis no governo; a expressão \"três idades\" foi difundida nos anos 1970 pelo arquivista francês Jean-Jacques Valette.",
  },
  {
    materia: "arq",
    topico: "Protocolo",
    texto: `Protocolo é o setor, e o conjunto de rotinas, que controla a entrada, o registro, a tramitação e a saída dos documentos. Atua na fase corrente: não guarda documentos de forma definitiva, não avalia e não elimina.

Rotinas:
• Recebimento: receber a correspondência, separar a oficial da particular e, entre as oficiais, as ostensivas das sigilosas; a particular e a sigilosa seguem fechadas ao destinatário, e as ostensivas são abertas e conferidas
• Registro: lançar os dados do documento (número, data, remetente, assunto), que servirão de pontos de acesso para a busca
• Autuação: dar forma de processo ao conjunto de documentos, com capa e número único; nos processos digitais, pode ser feita por usuário autorizado, direto no sistema
• Classificação: atribuir o código do plano de classificação
• Distribuição e redistribuição: encaminhar os documentos aos setores que vão tratá-los
• Expedição: enviar documentos para fora do órgão
• Controle da tramitação: acompanhar por onde o documento passa, para informar onde ele está a qualquer momento

Procedimentos com processos:
• Juntada por anexação: união definitiva de processos do mesmo interessado e do mesmo assunto; prevalece o número do mais antigo, e as folhas seguem uma numeração única
• Juntada por apensação: união temporária, para estudo, instrução e tratamento uniforme de matérias semelhantes, do mesmo interessado ou não; cada processo conserva identidade e numeração
• Desapensação: separação física dos processos apensados, feita antes do arquivamento
• Desentranhamento: retirada definitiva de folhas, com justificativa, por interesse da administração ou a pedido do interessado, deixando um termo no lugar
• Desmembramento: separação de folhas para formar um processo novo, também com justificativa e termo
• Reconstituição: diante da perda ou do extravio de um processo, a autoridade apura os fatos e o processo é refeito`,
    exemplos: [
      "Um pedido de ressarcimento de despesas que exige análise e decisão recebe capa e número único no protocolo: é a autuação, que dá forma de processo ao documento.",
      "Um documento juntado por engano ao processo de outro servidor é retirado de forma definitiva, com justificativa, e no lugar dele fica um termo de desentranhamento.",
    ],
    curiosidade:
      "A palavra protocolo vem do grego \"protókollon\", a primeira folha colada a um rolo de papiro, onde se anotavam informações sobre a origem e o conteúdo do documento.",
  },
  {
    materia: "arq",
    topico: "Classificação de documentos",
    texto: `Classificar é analisar e identificar o conteúdo dos documentos e enquadrá-los numa classe, com um código, para organizá-los e recuperá-los. Ocorre na produção ou no recebimento, ainda na fase corrente, e serve de base para a avaliação.

Plano (código) de classificação:
• É montado a partir das funções e atividades do órgão, e não do organograma, que muda com frequência; por isso o critério funcional é o preferido
• É próprio de cada instituição, ao contrário das bibliotecas, que usam sistemas universais
• No Poder Executivo federal, o código das atividades-meio é padronizado e de uso obrigatório (a classe 000 reúne a administração geral); o das atividades-fim é feito por cada órgão
• Costuma seguir o método decimal, com classes, subclasses, grupos e subgrupos cada vez mais específicos

Classificação × arranjo: nas fases corrente e intermediária fala-se em classificação, com o plano de classificação; no arquivo permanente, a organização chama-se arranjo, e o instrumento é o quadro de arranjo, estrutural (segue os órgãos produtores) ou funcional (segue as funções).

Outras classificações cobradas:
• Arquivos, pela entidade mantenedora: públicos, inclusive os de instituições de caráter público e de entidades privadas que gerem serviços públicos (Lei 8.159, art. 7º, § 1º), e privados (pessoais, familiares, comerciais, institucionais)
• Arquivos, pela natureza dos documentos: especial (suportes diversos, como fotos, discos e mapas, que pedem tratamento próprio) e especializado (documentos de uma área do conhecimento, em qualquer suporte)
• Documentos, pelo gênero: textual, cartográfico (mapas, plantas), iconográfico (fotos, desenhos), filmográfico (filmes, vídeos), sonoro, micrográfico (microfilme) e informático
• Espécie: o modelo do documento (ata, ofício, certidão); tipo: a espécie somada à atividade que a gerou
• Forma: estágio de preparação (rascunho, original, cópia); formato: configuração física (livro, ficha, mapa, rolo)
• Natureza do assunto: ostensivo ou sigiloso; pela Lei de Acesso à Informação (art. 24), a informação sigilosa é ultrassecreta (até 25 anos), secreta (até 15) ou reservada (até 5)`,
    exemplos: [
      "Uma ata é espécie documental; a ata de reunião da comissão de licitação é tipo documental, porque soma a espécie à atividade que a gerou.",
      "O arquivo de um hospital universitário, com prontuários em papel e em meio digital, é especializado; a fototeca de um jornal, com negativos, filmes e discos, é um arquivo especial.",
    ],
    curiosidade:
      "O método decimal dos códigos de classificação de arquivo se inspira na classificação decimal criada em 1876 pelo bibliotecário americano Melvil Dewey para organizar livros.",
  },
  {
    materia: "arq",
    topico: "Arquivamento e ordenação",
    texto: `Arquivamento é a guarda ordenada dos documentos, para que possam ser encontrados. Antes de guardar, segue-se uma sequência de operações:
• Inspeção: ler o último despacho, para ver se o documento vai mesmo para o arquivo ou deve seguir outro trâmite
• Estudo: ler o documento para escolher a entrada e verificar se há antecedentes ou necessidade de referências cruzadas
• Classificação: definir a entrada e o método sob os quais será arquivado
• Codificação: anotar no documento os símbolos do método (letras, números, cores)
• Ordenação: agrupar os documentos segundo a codificação, antes da guarda
• Guarda: colocar o documento na unidade de arquivamento

Métodos de arquivamento:
• Básicos: alfabético, geográfico, numéricos (simples, cronológico e dígito-terminal) e ideográficos, por assunto, que podem ser alfabéticos (enciclopédico, dicionário) ou numéricos (duplex, decimal, unitermo)
• Padronizados: variadex (cores conforme a segunda letra do nome), automático, soundex (agrupa nomes de mesmo som e grafias diferentes), mnemônico e rôneo
• Sistema direto: a busca vai direto ao local, como no alfabético e no geográfico; indireto: é preciso consultar um índice antes, como nos numéricos; semi-indireto: alfanumérico
• Dígito-terminal: o número é lido em pares, da direita para a esquerda; reduz erros em grandes volumes

O arquivamento vertical, com pastas em pé, uma atrás da outra, facilita a consulta e é o indicado para a fase corrente. O horizontal, com documentos deitados e sobrepostos, serve a plantas, mapas e grandes formatos.

Regras de alfabetação mais cobradas:
• Pessoas: pelo último sobrenome, seguido do prenome (Ana Maria Torres: Torres, Ana Maria)
• Não se separam sobrenomes de substantivo e adjetivo, ligados por hífen ou com Santa, Santo e São (Vila Nova, Duque-Estrada, Santo Amaro); Filho, Júnior, Neto e Sobrinho acompanham o sobrenome, mas não contam na ordenação
• Iniciais abreviadas vêm antes dos nomes completos de mesmo sobrenome (Vieira, J. antes de Vieira, João)
• Artigos e preposições não contam; títulos vão para o fim, entre parênteses (Moura, Helena (Doutora))
• Nomes espanhóis: pelo penúltimo sobrenome, o do pai; orientais (japoneses, chineses, árabes): como se apresentam
• Empresas e órgãos: como se apresentam, com o artigo inicial deslocado (Oficina Central (A)); eventos: números no fim, entre parênteses (Seminário de Segurança Viária (II))`,
    exemplos: [
      "No dígito-terminal, o número 34-52-07 é lido da direita para a esquerda: o documento vai para o grupo 07, na guia 52, na posição 34.",
      "Antes de arquivar um processo, o servidor lê o último despacho e percebe que ele deve voltar ao setor de diárias: a inspeção evitou um arquivamento indevido.",
    ],
    curiosidade:
      "O soundex foi patenteado nos Estados Unidos em 1918 por Robert C. Russell e acabou usado para indexar os nomes dos censos americanos, justamente porque o mesmo sobrenome aparecia escrito de várias formas.",
  },
  {
    materia: "arq",
    topico: "Tabela de temporalidade",
    texto: `Avaliação é a análise dos documentos para definir prazos de guarda e destinação, de acordo com os valores que eles têm. Seu resultado prático é a tabela de temporalidade e destinação de documentos (TTD).

A tabela:
• Define os prazos de guarda na fase corrente e na intermediária, a destinação final (eliminação ou guarda permanente) e, em observações, a eventual alteração de suporte, como a microfilmagem ou a digitalização
• Usa os mesmos códigos do plano de classificação, e seus prazos se baseiam na legislação (prescrição, prestação de contas) e nas necessidades administrativas
• É trabalho multidisciplinar, conduzido pela Comissão Permanente de Avaliação de Documentos (CPAD), e precisa ser aprovada pela autoridade competente
• No Poder Executivo federal, a tabela das atividades-meio é padronizada; a das atividades-fim é feita por cada órgão e aprovada pelo Arquivo Nacional
• Documentos que não constam da tabela recebem um plano de destinação, também elaborado pela CPAD

Eliminação:
• Depende de autorização da instituição arquivística pública, na sua esfera de competência (Lei 8.159/1991, art. 9º)
• Segue a rotina das resoluções do Conarq: listagem de eliminação, edital de ciência de eliminação, publicado em periódico oficial antes do ato, e termo de eliminação
• Usa métodos que impedem a reconstituição: fragmentação manual ou mecânica, pulverização, desmagnetização ou reformatação
• Documento de guarda permanente nunca é eliminado, nem depois de microfilmado

Destinação, portanto, é a decisão tomada na avaliação: eliminar ou recolher ao arquivo permanente. O tempo em cada fase conta a partir do momento indicado na própria tabela, como o fim da vigência de um contrato ou a aprovação de uma prestação de contas.`,
    exemplos: [
      "Um código da tabela com \"5 anos\" na fase corrente, \"5 anos\" na intermediária e \"eliminação\" na destinação final indica dez anos de guarda e, depois, a eliminação, cumprida a rotina prevista.",
      "Na coluna de observações, a tabela pode prever a microfilmagem ou a digitalização de um conjunto: muda o suporte, mas não a destinação final.",
    ],
    curiosidade:
      "Destruir documentos protegidos pode ser crime: a Lei 9.605/1998, no art. 62, pune com reclusão de um a três anos quem destrói, inutiliza ou deteriora arquivo protegido por lei, ato administrativo ou decisão judicial.",
  },
  {
    materia: "arq",
    topico: "Acondicionamento e armazenamento",
    texto: `Acondicionamento é embalar ou guardar os documentos em invólucros adequados, como pastas, envelopes e caixas. Armazenamento é colocar essas embalagens em mobiliário e em áreas próprias, como estantes, arquivos de aço e mapotecas, dentro do depósito.

Boas práticas de acondicionamento:
• Caixas e pastas de material quimicamente estável, como papel alcalino ou polipropileno; o papelão comum é ácido e acelera a deterioração
• Retirar ou evitar clipes e grampos metálicos, elásticos e fitas adesivas, que enferrujam, ressecam ou mancham o papel
• Não dobrar documentos: plantas e mapas ficam planos, em mapotecas, e fotografias, em envelopes de poliéster ou de papel neutro
• Não lotar as caixas, porque documentos apertados se deformam e se rasgam no manuseio

Boas práticas de armazenamento:
• Separar os documentos por gênero e suporte, porque cada um exige condições próprias de temperatura e umidade
• Estantes de aço com pintura eletrostática, e não de madeira, que atrai insetos e alimenta o fogo; para mídias magnéticas, mobiliário de aço com pintura de efeito antiestático
• Estantes afastadas das paredes e prateleira mais baixa acima do piso, para o ar circular e o acervo ficar protegido de infiltrações e alagamentos
• Evitar luz solar direta e manter temperatura e umidade estáveis, dia e noite: oscilações fazem o papel dilatar e contrair

Referências de clima para depósitos (recomendações do Conarq):
• Papel: cerca de 20 °C e umidade relativa entre 45% e 55%
• Fotografias em preto e branco: cerca de 12 °C e 35%; fotografias coloridas: cerca de 5 °C e 35%
• Registros magnéticos: cerca de 18 °C e 40%
• Em todos os casos, a variação diária tolerada é pequena: cerca de 1 °C e 5% de umidade`,
    exemplos: [
      "Ao preparar processos encerrados para a guarda longa, a equipe troca clipes metálicos por clipes de plástico e retira os elásticos, que ressecam e marcam o papel.",
      "As plantas de um posto rodoviário ficam planas, em gavetas de mapoteca, e não dobradas dentro de pastas comuns.",
    ],
    curiosidade:
      "Em condições controladas de temperatura e umidade, o microfilme de poliéster com imagem de prata tem expectativa de vida estimada em cerca de 500 anos, o que explica por que ele ainda é usado na preservação de acervos.",
  },
  {
    materia: "arq",
    topico: "Preservação e conservação",
    texto: `Preservação é o conjunto amplo de políticas e ações para manter os documentos íntegros e acessíveis; começa na produção, com a escolha de papel, tinta e formato, e não só quando o documento chega ao arquivo permanente. Conservação reúne as medidas que retardam a deterioração, como controle ambiental, higienização e acondicionamento. Restauração é a intervenção em documentos já danificados e deve respeitar a reversibilidade.

Fatores de deterioração:
• Internos: a composição do próprio suporte, como papel ácido e tintas ferrogálicas
• Físicos: luz, sobretudo a ultravioleta, temperatura e umidade inadequadas ou instáveis
• Químicos: poluição atmosférica e poeira
• Biológicos: fungos, bactérias, insetos (traças, baratas, cupins, brocas) e roedores
• Humanos e catástrofes: manuseio inadequado, vandalismo, inundações e incêndios

Técnicas:
• Higienização: retirada de poeira e resíduos a seco, com trincha ou pincel macio, aspirador de baixa potência ou pó de borracha; pano úmido não se usa no papel
• Desinfestação: eliminação de insetos e microrganismos, por exemplo por fumigação, com vapores químicos em câmara
• Alisamento: umidificação controlada seguida de prensagem, para desfazer dobras e amassados
• Encapsulação: o documento fica entre duas lâminas de poliéster seladas nas bordas, sem adesivo; é reversível
• Laminação: o documento recebe papel de seda e acetato de celulose sob calor e pressão; é difícil de reverter
• Outras: banho de gelatina, enxertos e silking (reforço com tecido muito fino)

Documentos digitais:
• O maior risco é a obsolescência de equipamentos, programas e formatos
• Estratégias: migração (passar para suporte, formato ou plataforma atual), emulação (reproduzir o ambiente antigo num equipamento novo) e uso de formatos abertos e estáveis
• Repositórios arquivísticos digitais confiáveis (RDC-Arq) guardam documentos digitais nas três idades, protegendo autenticidade, confidencialidade e disponibilidade
• Digitalização: feita conforme o regulamento (Decreto 10.278/2020), permite destruir o original, ressalvados os documentos de valor histórico (Lei 12.682/2012, art. 2º-A, § 1º); a lei da microfilmagem (Lei 5.433/1968) continua em vigor`,
    exemplos: [
      "Ao receber caixas que passaram meses num porão úmido, a equipe isola os documentos com mofo antes de higienizá-los, para que os fungos não se espalhem pelo acervo.",
      "Planilhas gravadas num formato que nenhum programa atual abre são um caso de obsolescência: a saída é migrar os arquivos para um formato atual antes que se percam.",
    ],
    curiosidade:
      "Nos anos 1930, o americano William Barrow criou um método de laminação com acetato de celulose; mais tarde, seus estudos sobre a durabilidade do papel mostraram que a acidez é a grande causa da deterioração. Hoje a laminação perdeu espaço para a encapsulação, que é reversível.",
  },
];
