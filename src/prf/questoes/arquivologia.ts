import type { QuestaoPrf } from "../../data/prf";

export const QUESTOES_PRF_ARQ: QuestaoPrf[] = [
  {
    id: "prf-arq-001",
    materia: "arq",
    topico: "Princípios e conceitos arquivísticos",
    enunciado:
      "Ao organizar o depósito de uma superintendência da PRF, um servidor propõe reunir numa única série, por assunto, todos os papéis sobre segurança viária: relatórios produzidos pela própria superintendência e o acervo de uma associação de motoristas que doou seus documentos ao órgão, desfazendo a organização que cada conjunto tinha. Do ponto de vista arquivístico, a proposta",
    alternativas: [
      "segue o princípio da proveniência, pois agrupa os documentos pelo tema que os originou.",
      "é adequada, pois a cumulatividade autoriza juntar conjuntos que tratem do mesmo assunto.",
      "fere a proveniência, ao misturar produtores distintos, e a ordem original, ao desfazer a organização de cada conjunto.",
      "respeita a ordem original, pois o assunto é o critério que o próprio produtor usaria para organizar os seus papéis.",
      "fere apenas a territorialidade, pois os documentos da associação vieram de outro local.",
    ],
    correta: 2,
    explicacao:
      "O acervo da associação tem outra proveniência e não pode ser misturado aos documentos produzidos pela superintendência; além disso, desfazer a organização dada por cada produtor fere a ordem original. Reunir papéis por assunto, ignorando a origem, é o princípio da pertinência, rejeitado pela arquivística. A cumulatividade descreve a formação natural do arquivo, e a territorialidade trata do lugar de guarda.",
    origem: "banco",
  },
  {
    id: "prf-arq-002",
    materia: "arq",
    topico: "Princípios e conceitos arquivísticos",
    enunciado:
      "Uma superintendência mantém, no mesmo andar, uma sala com manuais técnicos, livros de legislação e revistas comprados pelo órgão e outra com os processos, ofícios e relatórios produzidos e recebidos pelas suas unidades. Sobre os dois acervos, é correto afirmar que",
    alternativas: [
      "o segundo é arquivo, porque os documentos se acumularam naturalmente, no curso das atividades do órgão.",
      "os dois são arquivos, porque pertencem ao órgão e ficam sob sua guarda.",
      "o primeiro é arquivo, porque os livros e as revistas foram adquiridos com recursos públicos.",
      "o segundo deve ser organizado pelo mesmo sistema decimal universal usado nos livros, para padronizar a busca no órgão.",
      "o primeiro forma um fundo, porque as publicações se reúnem pela origem.",
    ],
    correta: 0,
    explicacao:
      "O que define o arquivo é a acumulação natural: processos, ofícios e relatórios nascem das atividades do órgão. Manuais, livros e revistas comprados formam uma biblioteca, com exemplares múltiplos reunidos por assunto, ainda que pertençam ao órgão. Fundo é o conjunto unido pela origem, conceito próprio do arquivo, e a classificação arquivística é feita por cada instituição, e não por um sistema universal como o das bibliotecas.",
    origem: "banco",
  },
  {
    id: "prf-arq-003",
    materia: "arq",
    topico: "Princípios e conceitos arquivísticos",
    enunciado:
      "Um órgão federal foi extinto, sem sucessor, e seu acervo foi recolhido à instituição arquivística pública. Esse conjunto constitui, agora, um fundo",
    alternativas: [
      "aberto, porque a instituição arquivística que passou a custodiá-lo continua recebendo documentos de outros órgãos.",
      "fechado, que pode ser completado com documentos de órgãos de funções semelhantes.",
      "aberto, porque continuará crescendo enquanto houver consulta aos documentos.",
      "fechado, que não recebe novos documentos e deve ser mantido sem mistura com outros fundos.",
      "fechado, que pode ser vendido a particulares, por já não ter valor administrativo.",
    ],
    correta: 3,
    explicacao:
      "Fundo fechado é o de instituição extinta, que não recebe acréscimos; pela proveniência e pela indivisibilidade, ele é mantido íntegro, sem mistura com outros fundos nem adição indevida. A cessação de atividades sem sucessora leva ao recolhimento à instituição arquivística pública (Lei 8.159/1991, art. 7º, § 2º), e documentos de valor permanente são inalienáveis (art. 10).",
    origem: "banco",
  },
  {
    id: "prf-arq-004",
    materia: "arq",
    topico: "Princípios e conceitos arquivísticos",
    enunciado:
      "Os registros de ocorrências de um posto da PRF foram produzidos para cumprir rotinas de serviço, e não para servir de fonte a historiadores. Por isso, um pesquisador confia que eles refletem com fidelidade as ações registradas. A característica dos documentos de arquivo que fundamenta essa confiança é a",
    alternativas: [
      "unicidade.",
      "organicidade.",
      "cumulatividade.",
      "territorialidade.",
      "imparcialidade.",
    ],
    correta: 4,
    explicacao:
      "Imparcialidade é a característica de os documentos de arquivo registrarem as ações com fidelidade, porque foram criados para cumprir uma função, e não para a posteridade. Unicidade é o lugar único de cada documento no conjunto; organicidade, a ligação entre os documentos e as atividades que os geraram; cumulatividade e territorialidade são princípios, e não a garantia de fidelidade.",
    origem: "banco",
  },
  {
    id: "prf-arq-005",
    materia: "arq",
    topico: "Gestão de documentos e ciclo de vida",
    enunciado:
      "Os processos de diárias de uma superintendência da PRF, encerrados há três anos, quase não são consultados, mas precisam ser mantidos até o fim do prazo fixado para eventual fiscalização, depois do qual poderão ser eliminados. Pela teoria das três idades, esses documentos",
    alternativas: [
      "estão na idade corrente, pois ainda têm valor administrativo e podem ser consultados.",
      "estão na idade intermediária, por razões administrativas, aguardando a eliminação.",
      "estão na idade permanente, pois já perderam o uso frequente e devem ser preservados.",
      "devem ser recolhidos ao arquivo permanente, pois a lei proíbe eliminar documentos de despesa.",
      "estão na idade intermediária, cuja guarda deve ficar dentro do próprio setor de diárias.",
    ],
    correta: 1,
    explicacao:
      "Na idade intermediária ficam os documentos que, sem uso corrente, aguardam a eliminação ou o recolhimento por razões de interesse administrativo, como uma eventual fiscalização. O uso é eventual e a guarda é centralizada, podendo ficar longe dos setores. A idade corrente pede uso frequente, e a permanente é reservada aos documentos de valor secundário, que não serão eliminados.",
    origem: "banco",
  },
  {
    id: "prf-arq-006",
    materia: "arq",
    topico: "Gestão de documentos e ciclo de vida",
    enunciado:
      "Uma superintendência criou modelos padronizados de ofício e de formulário, proibiu cópias desnecessárias e passou a controlar quais documentos cada setor pode criar. Na gestão de documentos, essas medidas pertencem à fase de",
    alternativas: [
      "produção.",
      "utilização.",
      "destinação.",
      "avaliação.",
      "recolhimento.",
    ],
    correta: 0,
    explicacao:
      "A fase de produção da gestão de documentos busca criar só os documentos necessários, padronizar modelos e formulários e evitar duplicidades. A utilização cuida de protocolo, tramitação e arquivamento; a destinação reúne a avaliação e a decisão entre eliminar e guardar para sempre; recolhimento é a entrada no arquivo permanente.",
    origem: "banco",
  },
  {
    id: "prf-arq-007",
    materia: "arq",
    topico: "Gestão de documentos e ciclo de vida",
    enunciado:
      "Um colecionador ofereceu-se para comprar fotografias e relatórios da criação de um antigo posto da PRF, guardados no arquivo permanente do órgão por seu valor histórico. Pela Lei 8.159/1991, a venda",
    alternativas: [
      "é permitida, pois esses documentos já não têm valor administrativo para o órgão.",
      "é permitida, desde que o órgão guarde cópias digitalizadas dos originais vendidos.",
      "depende de autorização do superintendente, que é quem responde pelo acervo do órgão.",
      "é proibida, pois documentos de valor permanente são inalienáveis e imprescritíveis.",
      "é proibida apenas enquanto os documentos estiverem na fase intermediária.",
    ],
    correta: 3,
    explicacao:
      "Pela Lei 8.159/1991, art. 10, os documentos de valor permanente são inalienáveis e imprescritíveis: não podem ser vendidos a particulares, ainda que o órgão guarde cópias, e nenhuma autoridade pode autorizar a venda. Quem desfigurar ou destruir esses documentos responde nas esferas penal, civil e administrativa (art. 25).",
    origem: "banco",
  },
  {
    id: "prf-arq-008",
    materia: "arq",
    topico: "Gestão de documentos e ciclo de vida",
    enunciado:
      "O arquivo permanente de uma superintendência preparou um instrumento que apresenta, de forma geral, todos os fundos e coleções sob sua guarda, com histórico, datas e condições de acesso, para orientar o primeiro contato do pesquisador. Esse instrumento de pesquisa é o",
    alternativas: [
      "guia.",
      "inventário.",
      "catálogo.",
      "repertório.",
      "quadro de arranjo.",
    ],
    correta: 0,
    explicacao:
      "O guia dá a visão geral dos fundos e coleções de um arquivo e orienta o primeiro contato do pesquisador. O inventário descreve as unidades de um fundo ou de parte dele; o catálogo descreve documentos por critério temático, cronológico, onomástico ou geográfico; o repertório, ou catálogo seletivo, detalha documentos escolhidos; o quadro de arranjo expressa a organização do acervo.",
    origem: "banco",
  },
  {
    id: "prf-arq-009",
    materia: "arq",
    topico: "Protocolo",
    enunciado:
      "No protocolo de uma superintendência chegam, no mesmo malote, uma carta endereçada pessoalmente a um servidor, um ofício ostensivo dirigido ao órgão e um envelope marcado como “reservado”. Segundo as rotinas de recebimento, o protocolo deve",
    alternativas: [
      "abrir as três correspondências, registrar todas e só depois distribuir cada uma ao destinatário.",
      "abrir o envelope reservado para classificá-lo e devolver os demais sem registro.",
      "encaminhar as três correspondências fechadas, pois o protocolo não abre nenhum documento.",
      "abrir a carta pessoal e o envelope reservado, pois só o ofício ostensivo dispensa conferência.",
      "abrir e registrar o ofício ostensivo e encaminhar fechados a carta pessoal e o envelope reservado.",
    ],
    correta: 4,
    explicacao:
      "No recebimento, o protocolo separa a correspondência oficial da particular e, entre as oficiais, as ostensivas das sigilosas. A particular e a sigilosa seguem fechadas ao destinatário; as ostensivas são abertas, conferidas e registradas, e o registro gera os pontos de acesso para a busca.",
    origem: "banco",
  },
  {
    id: "prf-arq-010",
    materia: "arq",
    topico: "Protocolo",
    enunciado:
      "Um servidor apresentou um pedido de licença e, semanas depois, um novo requerimento sobre o mesmo pedido, que gerou outro processo. A chefia decidiu unir os dois processos de forma definitiva, para que tramitem como um só. Esse procedimento é a",
    alternativas: [
      "juntada por apensação, em que cada processo mantém a própria numeração.",
      "juntada por anexação, em que prevalece o número do processo mais antigo.",
      "juntada por anexação, em que prevalece o número do processo mais recente.",
      "juntada por apensação, que une de forma definitiva processos do mesmo assunto.",
      "desapensação, que reúne de forma definitiva processos do mesmo interessado.",
    ],
    correta: 1,
    explicacao:
      "Anexação é a união definitiva de processos do mesmo interessado e do mesmo assunto; prevalece o número do mais antigo, e as folhas seguem numeração única. Na apensação, a união é temporária, para estudo e tratamento uniforme, e cada processo conserva identidade e numeração; desapensação é a separação física dos processos apensados.",
    origem: "banco",
  },
  {
    id: "prf-arq-011",
    materia: "arq",
    topico: "Protocolo",
    enunciado:
      "Num processo sobre a manutenção da frota de uma superintendência, parte das folhas trata, na verdade, de um pedido de compra de pneus, que precisa seguir rito próprio. A chefia determinou retirar essas folhas, com justificativa, para formar com elas um processo novo. Esse procedimento chama-se",
    alternativas: [
      "desentranhamento.",
      "desapensação.",
      "desmembramento.",
      "reconstituição.",
      "anexação.",
    ],
    correta: 2,
    explicacao:
      "Desmembramento é a separação de folhas de um processo para formar um processo novo, com justificativa e termo. No desentranhamento, as folhas são retiradas de forma definitiva, sem formar outro processo; a desapensação separa processos apensados; a reconstituição refaz um processo perdido; a anexação une processos de forma definitiva.",
    origem: "banco",
  },
  {
    id: "prf-arq-012",
    materia: "arq",
    topico: "Protocolo",
    enunciado:
      "Na reorganização das tarefas de uma superintendência, ficou definido o que cabe ao setor de protocolo. Está dentro das atribuições desse setor",
    alternativas: [
      "eliminar os documentos que já cumpriram o prazo previsto na tabela de temporalidade.",
      "controlar a tramitação dos documentos, para informar onde cada um se encontra.",
      "fazer o arranjo e a descrição dos documentos recolhidos ao arquivo permanente.",
      "decidir o mérito dos requerimentos recebidos, para agilizar a resposta ao cidadão.",
      "avaliar sozinho quais documentos têm valor histórico e devem ser preservados.",
    ],
    correta: 1,
    explicacao:
      "O protocolo controla a entrada, o registro, a tramitação e a saída dos documentos, para informar onde cada um está. Ele atua na fase corrente: não elimina, não avalia nem faz arranjo e descrição, que cabem à comissão de avaliação e ao arquivo permanente, e não decide o mérito dos pedidos, tarefa dos setores competentes.",
    origem: "banco",
  },
  {
    id: "prf-arq-013",
    materia: "arq",
    topico: "Classificação de documentos",
    enunciado:
      "No arquivo permanente de uma superintendência da PRF há fitas cassete com entrevistas gravadas em áudio, rolos de filme de uma campanha educativa dos anos 1980 e fotografias em papel de veículos apreendidos. Quanto ao gênero, esses documentos são, respectivamente,",
    alternativas: [
      "sonoros, iconográficos e filmográficos.",
      "informáticos, cartográficos e iconográficos.",
      "sonoros, filmográficos e iconográficos.",
      "textuais, filmográficos e micrográficos.",
      "sonoros, filmográficos e cartográficos.",
    ],
    correta: 2,
    explicacao:
      "Pelo gênero, registros em áudio são sonoros, filmes e vídeos são filmográficos, e fotografias e desenhos são iconográficos. Cartográficos são mapas e plantas; micrográficos, os microfilmes; informáticos, os documentos em meio digital; textuais, os documentos escritos.",
    origem: "banco",
  },
  {
    id: "prf-arq-014",
    materia: "arq",
    topico: "Classificação de documentos",
    enunciado:
      "Num levantamento documental, um servidor listou quatro denominações: “certidão de tempo de contribuição”, “ofício”, “relatório de fiscalização de contrato” e “requerimento”. Das quatro, as que indicam tipos documentais, e não apenas espécies, são",
    alternativas: [
      "o ofício e o requerimento, porque indicam o modelo do documento e a atividade que o gerou.",
      "as quatro, já que cada uma tem forma e função próprias.",
      "a certidão de tempo de contribuição e o requerimento, porque ambos têm valor de prova.",
      "a certidão de tempo de contribuição e o relatório de fiscalização de contrato.",
      "o ofício e o relatório de fiscalização de contrato, porque ambos circulam entre órgãos.",
    ],
    correta: 3,
    explicacao:
      "Espécie é o modelo do documento, como certidão, ofício, relatório e requerimento; tipo é a espécie somada à atividade que a gerou. “Certidão de tempo de contribuição” e “relatório de fiscalização de contrato” trazem a atividade; “ofício” e “requerimento”, sozinhos, indicam só a espécie.",
    origem: "banco",
  },
  {
    id: "prf-arq-015",
    materia: "arq",
    topico: "Classificação de documentos",
    enunciado:
      "Ao montar o plano de classificação das atividades-fim da PRF, a equipe discute se deve partir do organograma ou das funções e atividades do órgão. A recomendação da arquivologia é usar",
    alternativas: [
      "o organograma, porque cada setor precisa ter no plano uma classe própria, identificada pelo nome da unidade.",
      "os assuntos tratados, como numa biblioteca, porque facilitam a busca por tema.",
      "o organograma, porque a estrutura dos setores raramente muda no serviço público.",
      "a ordem alfabética dos interessados, porque é o método mais simples de busca.",
      "as funções e atividades, que mudam menos que a estrutura e refletem a origem dos documentos.",
    ],
    correta: 4,
    explicacao:
      "O plano de classificação é montado a partir das funções e atividades do órgão, que mudam menos que o organograma e mostram por que os documentos foram produzidos. Classificar pelo assunto, como numa biblioteca, ou pelos nomes dos interessados não reflete a origem dos documentos, e o organograma muda com frequência.",
    origem: "banco",
  },
  {
    id: "prf-arq-016",
    materia: "arq",
    topico: "Classificação de documentos",
    enunciado:
      "Ao receber o recolhimento de documentos de várias delegacias, o arquivo permanente de uma superintendência organizou os conjuntos em grupos e subgrupos que refletem os órgãos produtores. Essa operação e o instrumento que a expressa são",
    alternativas: [
      "o arranjo, expresso num quadro de arranjo de tipo estrutural.",
      "a classificação, expressa num plano de classificação de tipo funcional.",
      "o arranjo, expresso num quadro de arranjo de tipo funcional.",
      "a descrição, expressa num inventário de tipo estrutural.",
      "a avaliação, expressa num plano de destinação.",
    ],
    correta: 0,
    explicacao:
      "No arquivo permanente, a organização dos conjuntos chama-se arranjo, e seu instrumento é o quadro de arranjo, que pode ser estrutural, quando segue os órgãos produtores, ou funcional, quando segue as funções. A classificação, com o plano de classificação, é das fases corrente e intermediária; o inventário é instrumento de descrição; o plano de destinação resulta da avaliação.",
    origem: "banco",
  },
  {
    id: "prf-arq-017",
    materia: "arq",
    topico: "Arquivamento e ordenação",
    enunciado:
      "Pelas regras de alfabetação, o nome “Desembargador Paulo Henrique de Albuquerque Castro Neto” deve ser arquivado como",
    alternativas: [
      "Neto, Paulo Henrique de Albuquerque Castro (Desembargador).",
      "Castro Neto, Paulo Henrique de Albuquerque (Desembargador).",
      "Desembargador Castro Neto, Paulo Henrique de Albuquerque.",
      "Albuquerque Castro Neto, Paulo Henrique de (Desembargador).",
      "Castro, Paulo Henrique de Albuquerque Neto (Desembargador).",
    ],
    correta: 1,
    explicacao:
      "Nomes de pessoas são arquivados pelo último sobrenome, seguido do prenome; Neto acompanha o sobrenome a que se liga, e títulos vão para o fim, entre parênteses. Assim, a entrada fica “Castro Neto, Paulo Henrique de Albuquerque (Desembargador)”: o título não abre a entrada, e Neto não é tratado como sobrenome autônomo.",
    origem: "banco",
  },
  {
    id: "prf-arq-018",
    materia: "arq",
    topico: "Arquivamento e ordenação",
    enunciado:
      "Uma superintendência passou a arquivar as pastas dos veículos recolhidos ao pátio por um número sequencial atribuído na entrada, e não pelo nome do proprietário. Para localizar a pasta de um proprietário conhecido só pelo nome, o servidor precisa",
    alternativas: [
      "ir direto à gaveta da letra inicial do nome, pois o método numérico é de busca direta.",
      "usar o soundex, pois o método numérico não admite nenhum índice auxiliar.",
      "consultar a tabela de temporalidade, que indica a localização de cada pasta.",
      "consultar antes um índice alfabético, pois o método numérico é de busca indireta.",
      "consultar o quadro de arranjo, que relaciona os nomes aos números.",
    ],
    correta: 3,
    explicacao:
      "Os métodos numéricos são de busca indireta: para achar um documento pelo nome, é preciso consultar antes um índice alfabético que remete ao número. O alfabético e o geográfico são de busca direta; a tabela de temporalidade trata de prazos e destinação, e o quadro de arranjo organiza o arquivo permanente.",
    origem: "banco",
  },
  {
    id: "prf-arq-019",
    materia: "arq",
    topico: "Arquivamento e ordenação",
    enunciado:
      "Num cadastro de interessados, aparecem grafias como “Souza” e “Sousa” ou “Mello” e “Melo”, que dificultam a busca alfabética. O método padronizado que reúne nomes de som semelhante, mas grafias diferentes, é o",
    alternativas: [
      "soundex.",
      "variadex.",
      "mnemônico.",
      "dígito-terminal.",
      "rôneo.",
    ],
    correta: 0,
    explicacao:
      "O soundex é um método padronizado que agrupa nomes de mesmo som e grafias diferentes, conservando a inicial do nome e codificando as consoantes seguintes. O variadex usa cores conforme a segunda letra do nome; o dígito-terminal lê o número em pares, da direita para a esquerda; mnemônico e rôneo são outros métodos padronizados.",
    origem: "banco",
  },
  {
    id: "prf-arq-020",
    materia: "arq",
    topico: "Arquivamento e ordenação",
    enunciado:
      "Antes de guardar um ofício no arquivo, uma servidora o lê para decidir sob que nome ou assunto ele será arquivado e verifica se já existem documentos anteriores sobre o mesmo caso, que exijam referência cruzada. Essa etapa do arquivamento chama-se",
    alternativas: [
      "inspeção.",
      "codificação.",
      "estudo.",
      "ordenação.",
      "guarda.",
    ],
    correta: 2,
    explicacao:
      "Na sequência do arquivamento, o estudo é a leitura do documento para escolher a entrada e verificar se há antecedentes ou necessidade de referências cruzadas. A inspeção vem antes e confere, pelo último despacho, se o documento vai mesmo para o arquivo; a codificação anota os símbolos do método; a ordenação agrupa os documentos antes da guarda.",
    origem: "banco",
  },
  {
    id: "prf-arq-021",
    materia: "arq",
    topico: "Tabela de temporalidade",
    enunciado:
      "A PRF vai elaborar o instrumento que define por quanto tempo guardar cada conjunto de documentos das suas atividades-fim e qual será o destino de cada um. Sobre esse instrumento, é correto afirmar que ele",
    alternativas: [
      "é feito pelo setor de protocolo, que é quem conhece o volume e o tipo de documentos recebidos pelo órgão.",
      "dispensa aprovação de qualquer autoridade, porque se trata de rotina interna e exclusiva do órgão.",
      "fixa os prazos conforme a falta de espaço no depósito, sem relação com a legislação.",
      "torna-se dispensável quando o órgão digitaliza todos os seus documentos.",
      "é elaborado pela comissão permanente de avaliação e, no Executivo federal, aprovado pelo Arquivo Nacional.",
    ],
    correta: 4,
    explicacao:
      "A tabela de temporalidade é trabalho multidisciplinar da Comissão Permanente de Avaliação de Documentos (CPAD), baseado na legislação e nas necessidades administrativas, e precisa de aprovação; no Executivo federal, a tabela das atividades-fim é aprovada pelo Arquivo Nacional. A digitalização muda o suporte, mas não dispensa a tabela, e a falta de espaço não é critério de prazo.",
    origem: "banco",
  },
  {
    id: "prf-arq-022",
    materia: "arq",
    topico: "Tabela de temporalidade",
    enunciado:
      "Cumpridos os prazos da tabela de temporalidade, um órgão federal vai eliminar caixas de processos de compra de material de expediente. Antes de fragmentar os papéis, ele deve",
    alternativas: [
      "apenas registrar no sistema a quantidade de caixas eliminadas, já que a tabela de temporalidade dispensa outras formalidades.",
      "obter a autorização da instituição arquivística e cumprir a rotina de listagem, edital de ciência e termo de eliminação.",
      "doar os papéis a uma cooperativa de reciclagem, sem descaracterizá-los, para gerar renda social.",
      "microfilmar todos os documentos antes, porque nenhum documento público pode ser destruído sem que se guarde cópia.",
      "comunicar a eliminação apenas ao setor que produziu os documentos, sem publicar edital algum.",
    ],
    correta: 1,
    explicacao:
      "A eliminação depende de autorização da instituição arquivística pública (Lei 8.159/1991, art. 9º) e segue a rotina do Conarq: listagem de eliminação, edital de ciência publicado em periódico oficial antes do ato e termo de eliminação. Os papéis precisam ser descaracterizados, para impedir a reconstituição; não se exige microfilmagem prévia, e só o documento de guarda permanente é que nunca é eliminado.",
    origem: "banco",
  },
  {
    id: "prf-arq-023",
    materia: "arq",
    topico: "Tabela de temporalidade",
    enunciado:
      "Durante um levantamento, a comissão de avaliação de documentos da PRF encontrou, numa superintendência, documentos de uma atividade extinta que não constam da tabela de temporalidade do órgão. Para definir o destino desses documentos, a comissão deve",
    alternativas: [
      "eliminá-los de imediato, pois o documento que não consta da tabela não tem valor algum para o órgão.",
      "recolhê-los ao arquivo permanente sem nenhuma avaliação, apenas por precaução.",
      "aplicar por analogia o prazo do documento mais parecido, sem registro formal.",
      "elaborar um plano de destinação, instrumento próprio para documentos não previstos na tabela.",
      "transferi-los ao protocolo, que decide a destinação dos documentos sem código.",
    ],
    correta: 3,
    explicacao:
      "Documentos que não constam da tabela de temporalidade recebem um plano de destinação, também elaborado pela comissão de avaliação. Eliminar sem avaliar, recolher tudo por precaução ou aplicar prazos sem registro formal contraria a avaliação, e o protocolo atua na fase corrente, sem decidir a destinação de documentos.",
    origem: "banco",
  },
  {
    id: "prf-arq-024",
    materia: "arq",
    topico: "Tabela de temporalidade",
    enunciado:
      "Na eliminação de documentos gravados em discos rígidos e fitas magnéticas, cumpridos os prazos e os trâmites, o método adequado é",
    alternativas: [
      "o envio das mídias ao lixo comum, já que dados digitais não exigem descaracterização.",
      "a simples exclusão dos arquivos pela lixeira, que já basta para os documentos digitais.",
      "a desmagnetização ou a reformatação, com garantia de que os dados não possam ser recuperados.",
      "a pulverização, que é o único método aceito para qualquer suporte de documento.",
      "a guarda das mídias por tempo indeterminado, porque nenhum documento digital pode ser eliminado pelo órgão.",
    ],
    correta: 2,
    explicacao:
      "A eliminação usa métodos que impedem a reconstituição: fragmentação manual ou mecânica, pulverização, desmagnetização ou reformatação; para discos e fitas magnéticas, desmagnetização e reformatação são as saídas típicas. Apagar arquivos pela lixeira ou jogar mídias no lixo comum permite recuperar os dados, a pulverização não é o único método e documentos digitais também seguem a tabela de temporalidade.",
    origem: "banco",
  },
  {
    id: "prf-arq-025",
    materia: "arq",
    topico: "Acondicionamento e armazenamento",
    enunciado:
      "No relatório de uma visita técnica ao depósito de uma superintendência, constam duas recomendações: trocar as pastas de papelão ácido por caixas de polipropileno e substituir as estantes de madeira por estantes de aço. Na terminologia arquivística, essas recomendações tratam, respectivamente, de",
    alternativas: [
      "acondicionamento e armazenamento.",
      "armazenamento e acondicionamento.",
      "arquivamento e ordenação.",
      "conservação e restauração.",
      "acondicionamento e arranjo.",
    ],
    correta: 0,
    explicacao:
      "Acondicionamento é guardar os documentos em invólucros adequados, como pastas, envelopes e caixas; armazenamento é colocar essas embalagens em mobiliário e áreas próprias, como estantes e mapotecas. Trocar papelão ácido por polipropileno é acondicionamento; trocar estantes de madeira por estantes de aço é armazenamento.",
    origem: "banco",
  },
  {
    id: "prf-arq-026",
    materia: "arq",
    topico: "Acondicionamento e armazenamento",
    enunciado:
      "Uma superintendência pretende guardar, na mesma sala e nas mesmas condições de clima, processos em papel, fotografias coloridas e fitas magnéticas de vídeo, para economizar espaço. A medida é",
    alternativas: [
      "adequada, pois manter tudo junto facilita a consulta e reduz o custo de climatização.",
      "adequada, desde que a temperatura fique acima de 25 °C, que protege todos os suportes.",
      "inadequada apenas para o papel, já que fotos e fitas suportam qualquer ambiente.",
      "adequada, pois o gênero documental não interfere nas condições de armazenamento do acervo.",
      "inadequada, pois cada suporte exige temperatura e umidade próprias, em espaços separados.",
    ],
    correta: 4,
    explicacao:
      "Cada suporte exige clima próprio: pelas recomendações do Conarq, o papel fica bem perto de 20 °C e de 45% a 55% de umidade relativa, as fotografias coloridas perto de 5 °C e 35%, e os registros magnéticos perto de 18 °C e 40%. Por isso os documentos são separados por gênero e suporte, e temperaturas altas aceleram a deterioração de todos eles.",
    origem: "banco",
  },
  {
    id: "prf-arq-027",
    materia: "arq",
    topico: "Acondicionamento e armazenamento",
    enunciado:
      "Na montagem de um novo depósito para documentos em papel, uma das recomendações técnicas é prever",
    alternativas: [
      "estantes de madeira encostadas nas paredes, que isolam o acervo da umidade.",
      "estantes de aço afastadas das paredes, com a prateleira mais baixa acima do nível do piso.",
      "janelas amplas voltadas para o sol, que mantêm o ambiente seco e iluminado.",
      "caixas empilhadas direto no piso, que costuma ser o ponto mais fresco e protege o acervo do calor.",
      "climatização ligada só no horário de expediente, quando há manuseio dos documentos.",
    ],
    correta: 1,
    explicacao:
      "Estantes de aço não atraem insetos nem alimentam o fogo, e o afastamento das paredes e do piso permite a circulação do ar e protege o acervo de infiltrações e alagamentos. Luz solar direta degrada o papel, caixas no chão ficam expostas à água, e o clima precisa ser estável dia e noite, porque oscilações fazem o papel dilatar e contrair.",
    origem: "banco",
  },
  {
    id: "prf-arq-028",
    materia: "arq",
    topico: "Preservação e conservação",
    enunciado:
      "Durante a higienização de processos antigos que ficaram anos num depósito empoeirado, um servidor sugere usar pano úmido para limpar as folhas mais rápido. A técnica recomendada para a limpeza do papel é",
    alternativas: [
      "a lavagem das folhas em água corrente, seguida de secagem ao sol.",
      "a limpeza com pano levemente úmido, que retira a poeira sem espalhá-la pelo restante do acervo.",
      "a limpeza a seco, com trincha ou pincel macio, aspirador de baixa potência ou pó de borracha.",
      "a laminação imediata, que dispensa a retirada da poeira.",
      "a fumigação, que remove a poeira por meio de vapores químicos.",
    ],
    correta: 2,
    explicacao:
      "A higienização do papel é feita a seco, com trincha ou pincel macio, aspirador de baixa potência ou pó de borracha; pano úmido, lavagem e sol danificam as folhas. A fumigação é técnica de desinfestação, contra insetos e microrganismos, e a laminação é uma intervenção de reforço, difícil de reverter, que não substitui a limpeza.",
    origem: "banco",
  },
  {
    id: "prf-arq-029",
    materia: "arq",
    topico: "Preservação e conservação",
    enunciado:
      "Um mapa histórico de rodovias, frágil e rasgado nas bordas, precisa de proteção para ser manuseado em exposições. A equipe quer uma técnica que possa ser desfeita no futuro sem dano ao documento. A mais indicada é a",
    alternativas: [
      "laminação, em que o mapa recebe acetato de celulose aplicado sob calor e pressão.",
      "fumigação, em que o mapa é exposto a vapores químicos dentro de uma câmara.",
      "plastificação comum, em que o mapa é selado com filme adesivo numa máquina de uso doméstico.",
      "encapsulação, em que o mapa fica entre lâminas de poliéster seladas nas bordas, sem adesivo.",
      "higienização com pano úmido, seguida de dobra do mapa para caber numa caixa.",
    ],
    correta: 3,
    explicacao:
      "Na encapsulação, o documento fica entre duas lâminas de poliéster seladas nas bordas, sem adesivo, e pode ser retirado sem dano: é reversível, como pede o princípio da reversibilidade. A laminação, com acetato de celulose sob calor e pressão, é difícil de reverter; a plastificação com adesivo agride o papel; a fumigação é técnica de desinfestação.",
    origem: "banco",
  },
  {
    id: "prf-arq-030",
    materia: "arq",
    topico: "Preservação e conservação",
    enunciado:
      "Uma superintendência digitalizou, conforme o regulamento, processos de capacitação de servidores já encerrados e um álbum de fotografias da inauguração da sua primeira sede, considerado de valor histórico. Pela Lei 12.682/2012, quanto aos originais em papel, é correto afirmar que",
    alternativas: [
      "todos os originais podem ser destruídos, pois o documento digitalizado conforme o regulamento substitui o original em qualquer caso.",
      "nenhum original pode ser destruído, pois a lei só admite a substituição de originais por microfilme.",
      "o álbum pode ser destruído, desde que a imagem digital seja assinada com certificado da ICP-Brasil.",
      "os processos devem ser microfilmados antes do descarte, porque a digitalização sozinha não tem valor legal.",
      "os processos podem ser descartados, observadas as normas, mas o álbum, de valor histórico, deve ser preservado.",
    ],
    correta: 4,
    explicacao:
      "A Lei 12.682/2012, art. 2º-A, § 1º, permite destruir o original depois da digitalização feita conforme o regulamento, constatada a integridade do documento digital, ressalvados os documentos de valor histórico, que seguem a legislação específica. Assim, o álbum é preservado; a lei da microfilmagem continua em vigor, mas o microfilme não é a única forma de substituição.",
    origem: "banco",
  },
  {
    id: "prf-arq-031",
    materia: "arq",
    topico: "Preservação e conservação",
    enunciado:
      "Para consultar uma base de dados antiga, gerada por um sistema que só roda num equipamento já descontinuado, a equipe passou a usar um programa que reproduz, num computador atual, o funcionamento daquele equipamento, sem converter os arquivos. Essa estratégia de preservação digital é a",
    alternativas: [
      "emulação.",
      "migração.",
      "digitalização.",
      "microfilmagem.",
      "reformatação.",
    ],
    correta: 0,
    explicacao:
      "A emulação reproduz, num equipamento atual, o ambiente de hardware ou software antigo, para acessar os arquivos sem convertê-los. Na migração, os arquivos passam para suporte, formato ou plataforma atual; digitalização, microfilmagem e reformatação mudam o suporte ou o formato, justamente o que a equipe evitou.",
    origem: "banco",
  },
  {
    id: "prf-arq-032",
    materia: "arq",
    topico: "Preservação e conservação",
    enunciado:
      "Uma superintendência passou a imprimir, já na origem, os documentos de guarda permanente em papel alcalino e com tinta estável. Essa medida é",
    alternativas: [
      "de restauração, porque corrige danos que já se instalaram no papel.",
      "de preservação, que começa já na produção do documento, e não só no arquivo permanente.",
      "desnecessária, porque a preservação só começa quando o documento chega ao arquivo permanente.",
      "de higienização, porque elimina a poeira acumulada nos documentos.",
      "de desinfestação, porque impede a ação de insetos e fungos.",
    ],
    correta: 1,
    explicacao:
      "Preservação é o conjunto amplo de políticas e ações para manter os documentos íntegros e acessíveis, e começa na produção, com a escolha de papel, tinta e formato. Restauração intervém em documentos já danificados; higienização retira poeira e resíduos; desinfestação combate insetos e microrganismos.",
    origem: "banco",
  },
];
