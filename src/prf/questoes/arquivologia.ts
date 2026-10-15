import type { QuestaoPrf } from "../../data/prf";

export const QUESTOES_PRF_ARQ: QuestaoPrf[] = [
  {
    id: "prf-arq-001",
    materia: "arq",
    topico: "Princípios e conceitos arquivísticos",
    subassunto: "Alcance dos princípios da unicidade, da ordem original, da reversibilidade e da indivisibilidade",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: conferir o alcance exato de cada princípio e separar o que é próprio da ordem original do que é próprio da reversibilidade.",
    enunciado:
      "Durante a organização do acervo de uma superintendência regional da PRF, a equipe do arquivo registrou as afirmativas a seguir sobre os princípios arquivísticos.\n\nI. Uma cópia de portaria arquivada no assentamento funcional de um servidor é única naquele conjunto, ainda que existam outras vias do mesmo ato em outros setores.\nII. A ordem original é desdobramento da proveniência: no interior do fundo, mantém-se a organização que o próprio produtor deu aos documentos.\nIII. Pela reversibilidade, os documentos devem permanecer na sequência em que foram acumulados, sem que o arquivo altere a ordem dada pelo produtor.\nIV. A indivisibilidade protege o fundo contra dispersão, mutilação e destruição não autorizada, mas também contra a adição indevida de documentos estranhos a ele.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II e III, apenas.", "I, II e IV, apenas.", "I, III e IV, apenas.", "II, III e IV, apenas."],
    correta: 2,
    explicacao:
      "A afirmativa I está correta: a unicidade não depende do número de cópias, e sim do lugar único que o documento ocupa no conjunto em que foi acumulado. A II também: a ordem original é tratada como segundo grau da proveniência e preserva a organização interna dada pelo produtor. A IV também: a indivisibilidade (integridade) veda dispersão, mutilação, alienação, destruição não autorizada e adição indevida. Logo, I, II e IV.",
    explicacaoErradas:
      "A afirmativa III está errada: o que ela descreve é a ordem original. A reversibilidade diz que todo tratamento dado ao documento, como uma intervenção de restauração, deve poder ser desfeito. Por isso caem as combinações com III. A que traz só I e II deixa de fora a IV, que também é verdadeira.",
    pegadinha:
      "A afirmativa III empresta à reversibilidade a definição da ordem original; a palavra “reverter” sugere “manter como estava”, mas o princípio trata da possibilidade de desfazer intervenções.",
    conhecimento:
      "Princípios arquivísticos: proveniência, ordem original, unicidade, organicidade, indivisibilidade, cumulatividade, reversibilidade, territorialidade e a rejeição da pertinência.",
    origem: "banco",
  },
  {
    id: "prf-arq-002",
    materia: "arq",
    topico: "Princípios e conceitos arquivísticos",
    subassunto: "Arquivo × biblioteca: o critério da origem e do modo de entrada na custódia",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: identificar o critério que separa documento de arquivo de item de biblioteca e descartar características apenas frequentes.",
    enunciado:
      "A sede regional da PRF mantém, no mesmo andar, a biblioteca técnica e o arquivo central. Um relatório de operação foi impresso em várias vias, e uma delas, juntada ao processo da operação, passou a compor o arquivo. Sobre o critério que distingue os documentos de arquivo dos de biblioteca, é correto afirmar que",
    alternativas: [
      "a distinção está na origem e no modo de entrada sob custódia, e não no suporte nem no número de vias do documento.",
      "documentos impressos pertencem à biblioteca, e manuscritos, ao arquivo, porque o suporte define a natureza do conjunto.",
      "o relatório, por existir em várias vias, perdeu a condição de documento de arquivo e deve seguir para a biblioteca.",
      "o arquivo avalia peça por peça, e a biblioteca avalia o conjunto, o que justifica separar as vias entre os dois acervos.",
      "o arquivo adota sistemas de classificação predeterminados e universais, e a biblioteca, planos próprios de cada instituição.",
    ],
    correta: 0,
    explicacao:
      "Arquivo e biblioteca se distinguem pelo modo como os documentos se originam e pelo modo como entram na custódia: o arquivo acumula naturalmente o que as atividades produzem e recebem; a biblioteca reúne itens por compra, permuta ou doação. A via do relatório juntada ao processo nasceu da atividade da PRF e entrou no arquivo por acumulação natural, ainda que seja impressa e tenha outras vias.",
    explicacaoErradas:
      "O suporte não define a natureza: há documentos de arquivo impressos, e o arquivo também guarda audiovisuais. O número de vias também não, pois a unicidade decorre do contexto, e não da inexistência de cópias. A avaliação está invertida: o arquivo avalia conjuntos, e a biblioteca, peças isoladas. A classificação também está invertida: a biblioteca usa sistemas predeterminados e universais; o arquivo, planos próprios, baseados nas funções e atividades.",
    pegadinha:
      "Arquivo costuma ter exemplares únicos ou poucas vias, mas isso é uma característica frequente, e não o critério que separa os dois conjuntos; o critério é a origem e a forma de entrada.",
    conhecimento:
      "Diferenças entre arquivo e biblioteca (tipo de documento, entrada, conjuntos, objetivos, classificação e avaliação) e o princípio da unicidade.",
    origem: "banco",
  },
  {
    id: "prf-arq-003",
    materia: "arq",
    topico: "Princípios e conceitos arquivísticos",
    subassunto: "Fundo fechado e destino dos documentos de instituição pública extinta (Lei 8.159/1991, art. 7º, § 2º)",
    dificuldade: 5,
    raciocinio: "Caso concreto: aplicar a regra legal sobre instituição extinta e o princípio da proveniência para definir a situação do fundo.",
    enunciado:
      "Uma autarquia federal foi extinta por lei, e suas atribuições passaram a outra entidade federal, para a qual foram transferidos os documentos. À luz da Lei 8.159/1991 e dos princípios arquivísticos, o acervo da autarquia extinta",
    alternativas: [
      "permanece fundo aberto, porque as atribuições da autarquia continuam sendo exercidas pela entidade sucessora.",
      "deveria ter sido recolhido à instituição arquivística pública, pois a lei veda a transferência à entidade sucessora.",
      "passa a integrar o fundo da sucessora, que o reorganiza segundo o próprio plano de classificação de documentos.",
      "forma um fundo fechado, que não recebe novos documentos nem se mistura aos que a sucessora vier a produzir.",
      "torna-se fundo fechado por ter atingido o limite de volume que a instituição custodiadora consegue receber.",
    ],
    correta: 3,
    explicacao:
      "Fundo fechado é o de instituição que deixou de existir: não recebe acréscimos. A Lei 8.159/1991, art. 7º, § 2º, prevê que a cessação de atividades de instituição pública implica o recolhimento dos documentos à instituição arquivística pública ou a transferência à instituição sucessora. Mesmo sob a guarda da sucessora, o acervo conserva a identidade do produtor extinto: pela proveniência, não se mistura com o que a sucessora produzir.",
    explicacaoErradas:
      "O fundo não continua aberto só porque as atribuições seguem com outra entidade: o produtor deixou de existir, e o que a sucessora produzir forma o fundo dela. A lei não veda a transferência à sucessora; ela é uma das duas saídas previstas. Integrar o acervo ao fundo da sucessora e reclassificá-lo pelo plano dela misturaria produtores, contra a proveniência. E o fechamento decorre da extinção do produtor, e não de um limite de volume.",
    pegadinha:
      "A continuidade das funções na sucessora não mantém o fundo aberto: o fundo se liga ao produtor, e não à função; com a extinção, ele se fecha, ainda que mude de custodiador.",
    conhecimento:
      "Fundo aberto e fundo fechado, princípio da proveniência e destino dos documentos de instituição pública extinta (Lei 8.159/1991, art. 7º, § 2º).",
    origem: "banco",
  },
  {
    id: "prf-arq-004",
    materia: "arq",
    topico: "Princípios e conceitos arquivísticos",
    subassunto: "Características dos documentos de arquivo: naturalidade, autenticidade e inter-relacionamento",
    dificuldade: 4,
    raciocinio: "Classificação: reconhecer, em situações do dia a dia do arquivo, a característica do documento que cada uma ilustra.",
    enunciado:
      "Considere as situações a seguir, observadas no arquivo de uma superintendência da PRF.\n\n1. As fichas de atendimento de acidentes de uma unidade operacional foram se somando dia após dia, à medida que os atendimentos ocorriam, sem que alguém as selecionasse ou reunisse por tema.\n2. Para atestar que um termo de cessão de uso é confiável, o arquivo demonstra que ele foi produzido pelo fluxo regular, tramitou no sistema oficial e permaneceu sob custódia ininterrupta.\n3. O termo de recebimento de viaturas só tem sentido completo quando lido com o contrato, a nota de empenho e o atesto que integram o mesmo processo de aquisição.\n\nAs situações ilustram, respectivamente, as características de",
    alternativas: [
      "naturalidade, imparcialidade e unicidade.",
      "imparcialidade, autenticidade e unicidade.",
      "naturalidade, unicidade e inter-relacionamento.",
      "imparcialidade, naturalidade e inter-relacionamento.",
      "naturalidade, autenticidade e inter-relacionamento.",
    ],
    correta: 4,
    explicacao:
      "Na situação 1, os documentos se acumulam no curso das atividades, sem seleção prévia: é a naturalidade. Na 2, a confiança no documento vem de ter sido criado, mantido e custodiado segundo procedimentos regulares e comprováveis: é a autenticidade. Na 3, o termo depende dos demais documentos da mesma ação para fazer sentido: é o inter-relacionamento, também chamado organicidade. Logo, naturalidade, autenticidade e inter-relacionamento.",
    explicacaoErradas:
      "A imparcialidade não descreve nenhuma das três situações: ela diz que os documentos registram as ações com fidelidade porque foram criados para cumprir uma função, e não para a posteridade. A unicidade, lugar único de cada documento no conjunto, também não corresponde à situação 2 nem à 3. Por isso caem as sequências que as trazem, ainda que acertem uma ou duas posições.",
    pegadinha:
      "A situação 2 fala em confiabilidade, o que lembra a imparcialidade; mas a imparcialidade trata da fidelidade do registro à ação, e a autenticidade, dos procedimentos regulares de criação, manutenção e custódia.",
    conhecimento:
      "Características dos documentos de arquivo: naturalidade, imparcialidade, autenticidade, inter-relacionamento (organicidade) e unicidade.",
    origem: "banco",
  },
  {
    id: "prf-arq-005",
    materia: "arq",
    topico: "Gestão de documentos e ciclo de vida",
    subassunto: "Três idades: localização das fases corrente e intermediária e valores primário e secundário",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: aplicar o critério da frequência de uso às fases e distinguir o valor que interessa ao órgão do que interessa à sociedade.",
    enunciado:
      "Ao preparar a transferência de caixas do setor de logística para o arquivo central de uma superintendência da PRF, a equipe registrou as afirmativas a seguir.\n\nI. Os documentos da fase intermediária, de uso eventual, devem ficar nos próprios setores produtores, porque só eles conhecem a ordem em que os documentos foram acumulados.\nII. Os documentos da fase corrente, consultados com frequência, ficam junto aos órgãos produtores e podem ser organizados em arquivos setoriais ou num arquivo central.\nIII. Documento que deixou de ser de uso corrente, mas aguarda a eliminação ou o recolhimento por razões de interesse administrativo, pertence à fase intermediária.\nIV. O valor secundário, de natureza histórica, probatória ou informativa, interessa sobretudo ao próprio órgão produtor e se esgota com o fim do prazo de guarda.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II e III, apenas.", "I, II e IV, apenas.", "II, III e IV, apenas.", "I, II, III e IV."],
    correta: 1,
    explicacao:
      "A afirmativa II está correta: na fase corrente, os documentos são consultados com frequência e ficam perto de quem os produziu, em arquivos setoriais ou num arquivo central. A III também: ela reproduz o art. 8º, § 2º, da Lei 8.159/1991, que define os documentos intermediários pelo interesse administrativo que ainda justifica a guarda até a eliminação ou o recolhimento. Logo, II e III.",
    explicacaoErradas:
      "A afirmativa I está errada: os intermediários, de uso eventual, ficam em guarda centralizada, que pode inclusive estar longe dos setores; quem fica junto ao produtor é o arquivo corrente. A IV também: o valor secundário, histórico, probatório ou informativo, interessa à sociedade e justifica a guarda permanente; temporário é o valor primário, que interessa ao próprio órgão. Por isso caem as combinações com I ou IV.",
    pegadinha:
      "A afirmativa I parece razoável pela lógica da consulta, mas o critério das três idades é a frequência de uso: o uso eventual leva os documentos para fora dos setores, a uma guarda centralizada.",
    conhecimento:
      "Teoria das três idades (Lei 8.159/1991, art. 8º), localização e uso de cada fase e valores primário e secundário dos documentos.",
    origem: "banco",
  },
  {
    id: "prf-arq-006",
    materia: "arq",
    topico: "Gestão de documentos e ciclo de vida",
    subassunto: "Fases da gestão de documentos: produção, utilização e destinação",
    dificuldade: 4,
    raciocinio: "Classificação: enquadrar cada medida de gestão na fase a que pertence, sem se deixar levar pelo lugar onde o documento está guardado.",
    enunciado:
      "Uma comissão da PRF listou medidas para implantar a gestão de documentos numa superintendência:\n\n1. padronizar o formulário de requisição de diárias e suprimir a via que nenhum setor consultava;\n2. fixar normas de acesso e de empréstimo dos processos guardados no arquivo central;\n3. aplicar a tabela de temporalidade aos processos encerrados, decidindo entre eliminação e recolhimento;\n4. controlar, pelo sistema de protocolo, a tramitação dos processos entre os setores.\n\nAs medidas pertencem, respectivamente, às fases de",
    alternativas: [
      "produção, utilização, destinação e utilização.",
      "produção, destinação, destinação e utilização.",
      "utilização, utilização, destinação e produção.",
      "produção, utilização, utilização e destinação.",
      "utilização, destinação, destinação e utilização.",
    ],
    correta: 0,
    explicacao:
      "Padronizar formulários e evitar vias desnecessárias é ação da produção, fase que trata de criar só os documentos necessários. Normas de acesso e de empréstimo e o controle da tramitação pelo protocolo pertencem à utilização, que abrange o fluxo, o uso e o arquivamento nas fases corrente e intermediária. Aplicar a tabela para decidir entre eliminar e recolher é destinação. Logo, produção, utilização, destinação e utilização.",
    explicacaoErradas:
      "As demais sequências erram ao menos uma fase: tratam as normas de acesso como destinação, quando elas regulam o uso dos documentos; põem a padronização de formulários na utilização, quando ela ocorre antes de o documento existir; ou levam o protocolo para a destinação ou a produção, quando ele controla o fluxo de documentos já produzidos.",
    pegadinha:
      "As normas de acesso e de empréstimo valem para documentos guardados no arquivo central, o que leva a pensar em destinação; mas o uso de documentos, em qualquer fase, é utilização, e destinação é a decisão sobre eliminar ou guardar para sempre.",
    conhecimento:
      "Fases da gestão de documentos (produção, utilização e destinação) e o conceito de gestão do art. 3º da Lei 8.159/1991.",
    origem: "banco",
  },
  {
    id: "prf-arq-007",
    materia: "arq",
    topico: "Gestão de documentos e ciclo de vida",
    subassunto: "Lei 8.159/1991: dever do Poder Público, conceito de gestão, documentos permanentes e responsabilização",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: conferir cada enunciado com a redação da Lei 8.159/1991 e localizar a afirmativa que acerta uma parte e erra a outra.",
    enunciado:
      "Num curso interno sobre a Lei 8.159/1991 para servidores da PRF, foram apresentadas as afirmativas a seguir.\n\nI. A gestão de documentos abrange a produção, a tramitação, o uso, a avaliação e o arquivamento nas fases corrente e intermediária, visando à eliminação ou ao recolhimento para guarda permanente.\nII. São permanentes os conjuntos de documentos de valor histórico, probatório e informativo que devem ser definitivamente preservados.\nIII. Responde nas esferas penal, civil e administrativa quem desfigurar ou destruir documento de valor permanente ou considerado de interesse público e social.\nIV. A gestão documental é dever do Poder Público, mas a proteção especial aos documentos de arquivo é faculdade, exercida conforme a disponibilidade de recursos.\n\nEstá correto o que se afirma em",
    alternativas: ["I e III, apenas.", "II e IV, apenas.", "II, III e IV, apenas.", "I, II e III, apenas.", "I, II, III e IV."],
    correta: 3,
    explicacao:
      "A afirmativa I está correta: é o conceito de gestão de documentos do art. 3º da Lei 8.159/1991. A II também: reproduz o art. 8º, § 3º, sobre os documentos permanentes. A III também: o art. 25 sujeita à responsabilidade penal, civil e administrativa quem desfigurar ou destruir documentos de valor permanente ou de interesse público e social. Logo, I, II e III.",
    explicacaoErradas:
      "A afirmativa IV está errada: o art. 1º diz que é dever do Poder Público tanto a gestão documental quanto a proteção especial aos documentos de arquivo, como instrumento de apoio à administração, à cultura e ao desenvolvimento científico e como elementos de prova e informação; as duas obrigações têm a mesma natureza de dever. Por isso caem as combinações com IV, e a que traz só I e III deixa de fora a II.",
    pegadinha:
      "A afirmativa IV acerta a primeira metade, a gestão como dever, e erra a segunda: o art. 1º põe a proteção especial aos documentos de arquivo no mesmo patamar, também como dever do Poder Público.",
    conhecimento:
      "Lei 8.159/1991: dever do Poder Público (art. 1º), conceito de gestão (art. 3º), documentos permanentes (art. 8º, § 3º) e responsabilização de quem os destrói (art. 25).",
    origem: "banco",
  },
  {
    id: "prf-arq-008",
    materia: "arq",
    topico: "Gestão de documentos e ciclo de vida",
    subassunto: "Instrumentos de pesquisa do arquivo permanente: guia, inventário, catálogo e repertório",
    dificuldade: 5,
    raciocinio: "Classificação: reconhecer o instrumento de pesquisa pela abrangência da descrição e distinguir o catálogo do catálogo seletivo.",
    enunciado:
      "No arquivo permanente que guarda documentos ligados à história do policiamento rodoviário federal, três instrumentos de pesquisa foram elaborados:\n\n1. um instrumento que dá ao pesquisador a visão de conjunto de todos os fundos e coleções do arquivo, com informações sobre o acesso a eles;\n2. um instrumento que descreve, série por série, as unidades de arquivamento do fundo de um órgão extinto;\n3. um instrumento que descreve em detalhe documentos previamente selecionados, de vários fundos, sobre um único tema, como os grandes acidentes em rodovias federais.\n\nOs instrumentos são, respectivamente,",
    alternativas: [
      "guia, inventário e repertório.",
      "inventário, guia e repertório.",
      "guia, inventário e catálogo.",
      "inventário, catálogo e guia.",
      "catálogo, inventário e repertório.",
    ],
    correta: 0,
    explicacao:
      "O guia dá a visão de conjunto dos fundos e coleções de um arquivo, com informações sobre o acesso. O inventário descreve as unidades de um fundo ou de parte dele, como as séries do órgão extinto. O catálogo seletivo, ou repertório, descreve em detalhe documentos previamente escolhidos, de um ou mais fundos, em torno de um tema. Logo, guia, inventário e repertório.",
    explicacaoErradas:
      "O inventário não serve à visão geral de todos os fundos, papel do guia. O catálogo comum, embora também possa seguir critério temático, abrange os documentos do conjunto descrito, e não uma seleção prévia descrita em detalhe; por isso não corresponde à situação 3. E o catálogo não é o instrumento que descreve as séries de um único fundo, tarefa do inventário.",
    pegadinha:
      "Catálogo e repertório podem ser temáticos; o que distingue o repertório (catálogo seletivo) é a seleção prévia dos documentos, descritos em detalhe.",
    conhecimento:
      "Atividades do arquivo permanente (arranjo, descrição, publicação, referência e conservação) e os instrumentos de pesquisa: guia, inventário, catálogo e catálogo seletivo (repertório).",
    origem: "banco",
  },
  {
    id: "prf-arq-009",
    materia: "arq",
    topico: "Protocolo",
    subassunto: "Rotinas de recebimento, registro e autuação, inclusive no processo eletrônico",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: separar o tratamento das correspondências ostensivas e sigilosas e conferir o papel do registro e da autuação.",
    enunciado:
      "Na revisão do manual de protocolo de uma superintendência da PRF, a equipe avaliou as afirmativas a seguir.\n\nI. No recebimento, a correspondência oficial é separada da particular e, entre as oficiais, as ostensivas são separadas das sigilosas, que seguem fechadas ao destinatário.\nII. As correspondências ostensivas também seguem fechadas ao setor de destino, sem registro no protocolo, porque o controle delas cabe ao destinatário.\nIII. Os dados lançados no registro, como número, data, remetente e assunto, servem depois como pontos de acesso para localizar o documento.\nIV. Em processo eletrônico, a autuação pode ser feita por usuário autorizado diretamente no sistema, e não apenas pelo setor de protocolo.\n\nEstá correto o que se afirma em",
    alternativas: ["I e III, apenas.", "II e IV, apenas.", "I, II e III, apenas.", "II, III e IV, apenas.", "I, III e IV, apenas."],
    correta: 4,
    explicacao:
      "A afirmativa I está correta: o recebimento separa a correspondência oficial da particular e, entre as oficiais, as ostensivas das sigilosas; a particular e a sigilosa seguem fechadas ao destinatário. A III também: os dados do registro são os pontos de acesso da busca. A IV também: nos processos eletrônicos, a autuação pode ser feita por usuário autorizado, no próprio sistema. Logo, I, III e IV.",
    explicacaoErradas:
      "A afirmativa II está errada: as correspondências ostensivas são abertas, conferidas e registradas pelo protocolo; fechadas seguem só a particular e a sigilosa. Por isso caem as combinações com II. A que traz só I e III deixa de fora a IV, também verdadeira.",
    pegadinha:
      "A afirmativa II estende às ostensivas o tratamento das sigilosas. É o oposto: a separação existe justamente para que as ostensivas sejam abertas e registradas e as sigilosas sigam fechadas.",
    conhecimento:
      "Rotinas do protocolo: recebimento, registro, autuação, classificação, distribuição, expedição e controle da tramitação.",
    origem: "banco",
  },
  {
    id: "prf-arq-010",
    materia: "arq",
    topico: "Protocolo",
    subassunto: "Juntada por anexação: número do processo principal e numeração única das folhas",
    dificuldade: 5,
    raciocinio: "Caso concreto: identificar o tipo de juntada pela natureza da união e aplicar as regras de número e de folhas.",
    enunciado:
      "Um servidor da PRF apresentou, em 2024, um pedido de ressarcimento de despesas de mudança, que gerou um processo com 38 folhas. Em 2025, ele apresentou novo pedido sobre o mesmo ressarcimento, autuado em processo próprio, com 12 folhas. A administração decidiu reunir os dois em definitivo, por tratarem do mesmo interessado e do mesmo assunto. Nesse caso,",
    alternativas: [
      "ocorre apensação, e cada processo conserva o próprio número e a própria numeração de folhas até o arquivamento.",
      "ocorre anexação: prevalece o número do processo de 2024, e as folhas do de 2025 passam a seguir a numeração dele.",
      "ocorre anexação: prevalece o número do processo de 2025, o mais recente, e as folhas do de 2024 seguem a numeração dele.",
      "ocorre anexação, mas cada processo mantém a própria numeração de folhas, já que ambos conservam sua identidade.",
      "ocorre apensação: prevalece o número do processo de 2024, e as folhas do de 2025 são renumeradas na sequência.",
    ],
    correta: 1,
    explicacao:
      "União definitiva de processos do mesmo interessado e do mesmo assunto é juntada por anexação. Nela prevalece o número do processo mais antigo, o principal, e o conjunto passa a ter numeração única de folhas: as do processo de 2025 seguem a numeração do de 2024. A partir daí, os dois tramitam como um só.",
    explicacaoErradas:
      "A apensação é união temporária, para estudo e instrução de matérias semelhantes, do mesmo interessado ou não, e nela cada processo conserva identidade e numeração; por isso não se aplica a uma reunião definitiva, nem mesmo com renumeração. Na anexação não prevalece o número do processo mais recente, e sim o do mais antigo, e as folhas não mantêm numerações separadas.",
    pegadinha:
      "As alternativas de apensação usam vocabulário verdadeiro da anexação (renumeração, número do mais antigo) ou da própria apensação; o dado decisivo do enunciado é a reunião definitiva, do mesmo interessado e do mesmo assunto.",
    conhecimento:
      "Procedimentos com processos: juntada por anexação e por apensação, desapensação, desentranhamento, desmembramento e reconstituição.",
    origem: "banco",
  },
  {
    id: "prf-arq-011",
    materia: "arq",
    topico: "Protocolo",
    subassunto: "Desentranhamento, desmembramento e desapensação",
    dificuldade: 4,
    raciocinio: "Classificação: reconhecer o procedimento pelo efeito sobre o processo: retirar documento, formar processo novo ou desfazer apensação.",
    enunciado:
      "Considere os procedimentos a seguir, realizados no protocolo de uma superintendência da PRF.\n\n1. A pedido do interessado, e com justificativa, um atestado médico original é retirado em definitivo de um processo de licença, e no lugar dele fica um termo.\n2. Folhas de um processo de licitação referentes a um lote fracassado são separadas, com justificativa e termo, para formar um processo novo.\n3. Antes de arquivar um processo de multa, o setor separa fisicamente o processo de recurso que estava juntado a ele apenas para instrução.\n\nOs procedimentos são, respectivamente,",
    alternativas: [
      "desmembramento, desentranhamento e desapensação.",
      "desentranhamento, desapensação e desmembramento.",
      "desentranhamento, desmembramento e desapensação.",
      "reconstituição, desmembramento e desapensação.",
      "desentranhamento, desmembramento e anexação.",
    ],
    correta: 2,
    explicacao:
      "Retirar em definitivo, com justificativa, um documento juntado ao processo, deixando termo no lugar, é desentranhamento, que pode ocorrer por interesse da administração ou a pedido do interessado. Separar folhas para formar processo novo, com justificativa e termo, é desmembramento. Separar fisicamente um processo que estava apensado apenas para instrução, antes do arquivamento, é desapensação. Logo, desentranhamento, desmembramento e desapensação.",
    explicacaoErradas:
      "As sequências que trocam desentranhamento e desmembramento confundem a simples retirada de um documento com a formação de processo novo a partir de folhas separadas. A desapensação não serve para retirar documento nem para criar processo: desfaz uma apensação. A reconstituição só cabe quando o processo se perde ou é extraviado, e a anexação une processos em definitivo, sem separá-los.",
    pegadinha:
      "Na situação 1, o pedido parte do interessado; isso não muda o procedimento, porque o desentranhamento pode ocorrer por interesse da administração ou a pedido do interessado.",
    conhecimento:
      "Procedimentos com processos: anexação, apensação, desapensação, desentranhamento, desmembramento e reconstituição.",
    origem: "banco",
  },
  {
    id: "prf-arq-012",
    materia: "arq",
    topico: "Protocolo",
    subassunto: "Posição do protocolo no ciclo de vida e nas fases da gestão de documentos",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: situar as rotinas do protocolo na idade dos documentos e na fase da gestão a que pertencem.",
    enunciado:
      "Ao redesenhar o fluxo de documentos de uma superintendência da PRF, uma consultoria precisou situar o protocolo no ciclo de vida e nas fases da gestão de documentos. Está correto afirmar que o protocolo",
    alternativas: [
      "acompanha o documento da produção ao arquivo permanente, onde encerra suas rotinas com o registro do recolhimento.",
      "integra a fase de utilização e atua no arquivo corrente, controlando o registro e a tramitação dos documentos.",
      "integra a fase de destinação, porque é no registro que se decide se o documento será eliminado ou recolhido.",
      "atua nas três idades, já que todo documento, inclusive o recolhido ao permanente, precisa de controle de tramitação.",
      "integra a fase de produção, porque o registro e a autuação criam os documentos que darão origem aos processos.",
    ],
    correta: 1,
    explicacao:
      "O protocolo controla o fluxo de documentos já produzidos: recebe, registra, autua, distribui, expede e acompanha a tramitação. Essas rotinas pertencem à fase de utilização da gestão de documentos e se concentram no arquivo corrente, onde estão os documentos em curso. O protocolo não guarda documentos em definitivo, não avalia e não elimina.",
    explicacaoErradas:
      "O protocolo não acompanha o documento até o arquivo permanente nem atua nas três idades: suas rotinas são da fase corrente. A decisão entre eliminar e recolher é da avaliação, com a tabela de temporalidade, na fase de destinação, e não do registro. E a produção trata da criação dos documentos, com padronização de modelos; registrar e autuar organizam documentos que já existem.",
    pegadinha:
      "Autuar dá forma de processo a documentos, o que lembra a criação de algo novo; mas a autuação organiza o que já foi produzido, e a rotina continua sendo de utilização.",
    conhecimento:
      "Protocolo: rotinas, posição no ciclo de vida (fase corrente) e nas fases da gestão de documentos (utilização).",
    origem: "banco",
  },
  {
    id: "prf-arq-013",
    materia: "arq",
    topico: "Classificação de documentos",
    subassunto: "Gêneros documentais: micrográfico, cartográfico, sonoro e iconográfico",
    dificuldade: 4,
    raciocinio: "Classificação: enquadrar cada documento no gênero pela forma de registro da informação, sem se guiar pelo nome do suporte.",
    enunciado:
      "No levantamento do acervo de uma superintendência da PRF, foram listados: rolos de microfilme com antigos processos de pessoal; plantas de engenharia das unidades operacionais; gravações em áudio de comunicações via rádio; e cartazes ilustrados de campanhas educativas de trânsito. Quanto ao gênero, esses documentos são, respectivamente,",
    alternativas: [
      "filmográficos, cartográficos, sonoros e iconográficos.",
      "micrográficos, iconográficos, sonoros e textuais.",
      "micrográficos, cartográficos, sonoros e iconográficos.",
      "micrográficos, cartográficos, filmográficos e iconográficos.",
      "informáticos, cartográficos, sonoros e textuais.",
    ],
    correta: 2,
    explicacao:
      "Microfilme é documento micrográfico, gênero próprio das microformas, ainda que seja um filme. Plantas e mapas são cartográficos. Gravações de áudio são documentos sonoros. Cartazes ilustrados, de imagem estática, são iconográficos. Logo, micrográficos, cartográficos, sonoros e iconográficos.",
    explicacaoErradas:
      "Filmográficos são os documentos de imagem em movimento, como filmes e vídeos; o microfilme reproduz páginas em tamanho reduzido e é micrográfico, e o áudio, sem imagem, é sonoro. Informático é o documento em meio digital, e não o microfilme. E classificar plantas como iconográficas ou cartazes ilustrados como textuais ignora que plantas e mapas formam o gênero cartográfico e que a imagem estática caracteriza o iconográfico.",
    pegadinha:
      "O microfilme é um filme, o que leva ao gênero filmográfico; mas filmográfico é o documento de imagens em movimento, e o microfilme, que reproduz documentos em tamanho reduzido, é micrográfico.",
    conhecimento:
      "Gêneros documentais: textual, cartográfico, iconográfico, filmográfico, sonoro, micrográfico e informático.",
    origem: "banco",
  },
  {
    id: "prf-arq-014",
    materia: "arq",
    topico: "Classificação de documentos",
    subassunto: "Classificação dos arquivos pela entidade mantenedora, pela natureza dos documentos e pela extensão",
    dificuldade: 5,
    raciocinio: "Classificação: aplicar a cada acervo o critério pedido e não confundir o critério do suporte com o da área do conhecimento.",
    enunciado:
      "Considere os acervos a seguir.\n\n1. Documentos produzidos por uma concessionária privada na gestão de uma rodovia federal concedida, relativos ao serviço público concedido.\n2. Arquivo de um hospital com prontuários de pacientes em papel, em filme radiográfico e em meio digital.\n3. Setor que guarda, em mobiliário próprio, os negativos, as fotografias, os discos e as fitas magnéticas produzidos pelas diversas unidades de um órgão.\n4. Arquivo de uma superintendência que reúne os documentos de todos os seus setores.\n\nConsiderando a entidade mantenedora no acervo 1, a natureza dos documentos nos acervos 2 e 3 e a extensão de atuação no acervo 4, os acervos são classificados, respectivamente, como",
    alternativas: [
      "privado, especial, especializado e setorial.",
      "privado, especializado, especial e central.",
      "público, especial, especializado e central.",
      "público, especializado, especial e central.",
      "público, especializado, especial e setorial.",
    ],
    correta: 3,
    explicacao:
      "São públicos também os documentos de entidades privadas encarregadas da gestão de serviços públicos, no exercício dessas atividades (Lei 8.159/1991, art. 7º, § 1º): é o caso da concessionária. O arquivo do hospital é especializado, porque reúne documentos de uma área do conhecimento, qualquer que seja o suporte. O setor que guarda negativos, fotografias, discos e fitas de várias unidades é especial, porque o critério é a diversidade de suportes que pedem tratamento próprio. O arquivo que reúne os documentos de todos os setores é central. Logo, público, especializado, especial e central.",
    explicacaoErradas:
      "Classificar a concessionária como arquivo privado ignora o art. 7º, § 1º, que alcança os documentos produzidos na gestão do serviço público concedido. Inverter especial e especializado confunde o critério do suporte com o da área do conhecimento. E o arquivo que reúne os documentos de todos os setores não é setorial, que é o mantido junto a cada setor.",
    pegadinha:
      "Os prontuários em papel, filme e meio digital sugerem arquivo especial; mas o que define o hospital é a área do conhecimento: arquivo especializado guarda documentos de um campo específico, em qualquer suporte.",
    conhecimento:
      "Classificação dos arquivos: pela entidade mantenedora (públicos e privados, Lei 8.159/1991, art. 7º), pela natureza dos documentos (especial e especializado), pela extensão (setorial e central) e pelo estágio (corrente, intermediário e permanente).",
    origem: "banco",
  },
  {
    id: "prf-arq-015",
    materia: "arq",
    topico: "Classificação de documentos",
    subassunto: "Plano de classificação: critério funcional, padronização das atividades-meio e ligação com a avaliação",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: conferir o critério, o momento e a codificação da classificação e distingui-la do arranjo do arquivo permanente.",
    enunciado:
      "Ao implantar o código de classificação de documentos numa superintendência da PRF, a equipe registrou as afirmativas a seguir.\n\nI. O plano de classificação é montado a partir das funções e atividades do órgão, e não do organograma, que muda com mais frequência.\nII. No Poder Executivo federal, o código das atividades-meio é padronizado e de uso obrigatório, e o das atividades-fim é elaborado por cada órgão.\nIII. A classificação é feita quando os documentos chegam ao arquivo permanente, pois é ali que se conhece o conjunto completo produzido pelo órgão.\nIV. O código costuma seguir o método decimal, e os mesmos códigos são usados na tabela de temporalidade, o que liga a classificação à avaliação.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II e IV, apenas.", "II, III e IV, apenas.", "I, III e IV, apenas.", "I, II e IV, apenas."],
    correta: 4,
    explicacao:
      "A afirmativa I está correta: o plano parte das funções e atividades, critério mais estável que o organograma. A II também: no Executivo federal, o código das atividades-meio é padronizado e obrigatório, e o das atividades-fim é feito por cada órgão. A IV também: o código costuma ser decimal, e a tabela de temporalidade usa os mesmos códigos, o que faz da classificação a base da avaliação. Logo, I, II e IV.",
    explicacaoErradas:
      "A afirmativa III está errada: a classificação ocorre na produção ou no recebimento, ainda na fase corrente; no arquivo permanente, a organização chama-se arranjo e usa o quadro de arranjo. Por isso caem as combinações com III. A que traz só I e II deixa de fora a IV, também verdadeira, e a que traz só II e IV deixa de fora a I.",
    pegadinha:
      "A afirmativa III soa lógica, porque só no fim do ciclo se conhece o conjunto completo; mas classificar depois tiraria do plano sua função de organizar e recuperar os documentos desde a produção.",
    conhecimento:
      "Plano de classificação: critério funcional, padronização das atividades-meio no Executivo federal, método decimal, relação com a tabela de temporalidade e diferença entre classificação e arranjo.",
    origem: "banco",
  },
  {
    id: "prf-arq-016",
    materia: "arq",
    topico: "Classificação de documentos",
    subassunto: "Quadro de arranjo estrutural e funcional no arquivo permanente",
    dificuldade: 4,
    raciocinio: "Caso concreto: identificar o tipo de arranjo de cada proposta e verificar se a organização por funções respeita a proveniência.",
    enunciado:
      "No arquivo permanente que recebeu os documentos de um órgão federal extinto, duas equipes propuseram quadros de arranjo. A primeira dividiu o fundo em grupos correspondentes à diretoria, às coordenações e aos núcleos que existiam no órgão. A segunda dividiu-o em grupos correspondentes à fiscalização, ao atendimento ao público e à gestão de pessoas, conforme o que o órgão fazia. Sobre as propostas, é correto afirmar que",
    alternativas: [
      "a primeira adota o arranjo estrutural e a segunda, o funcional, ambos admitidos no arquivo permanente.",
      "a primeira adota o arranjo funcional e a segunda, o estrutural, pois as unidades administrativas exercem funções.",
      "as duas são planos de classificação, instrumento que, no arquivo permanente, substitui o quadro de arranjo.",
      "a segunda contraria a proveniência, porque agrupar por funções equivale a reorganizar o acervo por assunto.",
      "só a primeira cabe no arquivo permanente, porque o arranjo funcional é exclusivo das fases corrente e intermediária.",
    ],
    correta: 0,
    explicacao:
      "O arranjo é a organização dos documentos no arquivo permanente, e o quadro de arranjo pode ser estrutural, quando segue os órgãos produtores, ou funcional, quando segue as funções. A primeira proposta, por diretoria, coordenações e núcleos, é estrutural; a segunda, por fiscalização, atendimento e gestão de pessoas, é funcional. Nos dois casos, o quadro traduz as relações hierárquicas e orgânicas do fundo.",
    explicacaoErradas:
      "Agrupar por unidades administrativas é arranjo estrutural, ainda que essas unidades exerçam funções; a inversão confunde os critérios. Plano de classificação é o instrumento das fases corrente e intermediária; no permanente, usa-se o quadro de arranjo. O arranjo funcional não fere a proveniência, porque organiza o fundo de um único produtor pelas funções que ele exercia, sem misturá-lo a outros, diferente da pertinência, que reagrupa por assunto. E o funcional é um dos dois tipos de arranjo do arquivo permanente.",
    pegadinha:
      "Funções e assuntos parecem a mesma coisa; mas as funções são do próprio produtor e preservam a organicidade do fundo, enquanto a reorganização por assunto, a pertinência, desfaz a origem dos documentos.",
    conhecimento:
      "Classificação × arranjo, quadro de arranjo estrutural e funcional e o princípio da proveniência.",
    origem: "banco",
  },
  {
    id: "prf-arq-017",
    materia: "arq",
    topico: "Arquivamento e ordenação",
    subassunto: "Alfabetação: iniciais, títulos, grau de parentesco, nomes espanhóis e sobrenomes compostos",
    dificuldade: 5,
    raciocinio: "Aplicação de regras: converter cada nome na forma de entrada e ordenar, atento às exceções que mudam a posição.",
    enunciado:
      "Um servidor da PRF precisa ordenar, pelas regras de alfabetação, as pastas de cinco interessados:\n\n1. Helena Duarte\n2. H. Duarte\n3. Doutor Caio Mendes Filho\n4. Diego Herrera Ruiz (nome espanhol)\n5. Lúcia Monte Alto\n\nA ordem correta das pastas é",
    alternativas: ["5, 2, 1, 4 e 3.", "2, 1, 4, 3 e 5.", "1, 2, 4, 3 e 5.", "2, 1, 3, 5 e 4.", "3, 2, 1, 4 e 5."],
    correta: 1,
    explicacao:
      "Pessoas são alfabetadas pelo último sobrenome, seguido do prenome, com exceções. Iniciais abreviadas vêm antes do nome completo de mesmo sobrenome: Duarte, H. antes de Duarte, Helena. O nome espanhol entra pelo penúltimo sobrenome, o do pai: Herrera Ruiz, Diego. Filho acompanha o sobrenome sem contar na ordenação, e o título vai para o fim, entre parênteses: Mendes Filho, Caio (Doutor). Sobrenome formado por substantivo e adjetivo não se separa: Monte Alto, Lúcia. A ordem fica Duarte, Duarte, Herrera, Mendes e Monte: 2, 1, 4, 3 e 5.",
    explicacaoErradas:
      "Pôr Helena antes de H. Duarte ignora a regra das iniciais. Arquivar o nome espanhol por Ruiz, o último sobrenome, leva-o para depois de Monte Alto. Separar Monte Alto e entrar por Alto põe Lúcia em primeiro lugar. E entrar por Doutor faz do título o primeiro elemento, quando ele vai para o fim, entre parênteses.",
    pegadinha:
      "Cada sequência errada aplica corretamente quase todas as regras e falha em uma só: o título como entrada, o nome espanhol pelo último sobrenome, o sobrenome composto separado ou a inicial depois do nome completo.",
    conhecimento:
      "Regras de alfabetação: último sobrenome, sobrenomes compostos e com grau de parentesco, iniciais, títulos, nomes espanhóis e orientais, empresas e eventos.",
    origem: "banco",
  },
  {
    id: "prf-arq-018",
    materia: "arq",
    topico: "Arquivamento e ordenação",
    subassunto: "Sistemas direto, indireto e semi-indireto, leitura do dígito-terminal e arquivamento horizontal",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: classificar os métodos pelo sistema de busca e fazer a leitura em pares do dígito-terminal, da direita para a esquerda.",
    enunciado:
      "Ao escolher métodos de arquivamento para o arquivo central de uma superintendência da PRF, a equipe registrou as afirmativas a seguir.\n\nI. Os métodos numéricos simples, cronológico e dígito-terminal pertencem ao sistema indireto, porque a busca exige a consulta prévia a um índice.\nII. No dígito-terminal, o processo de número 47-03-82 fica no grupo 82, na guia 03 e na posição 47.\nIII. O método alfanumérico, que combina letras e números, é classificado como semi-indireto.\nIV. O arquivamento horizontal, com documentos deitados e sobrepostos, é o indicado para plantas, mapas e outros documentos de grande formato.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II e III, apenas.", "I, III e IV, apenas.", "I, II, III e IV.", "I, II e IV, apenas."],
    correta: 3,
    explicacao:
      "A afirmativa I está correta: nos métodos numéricos, é preciso consultar um índice antes de ir à pasta, o que define o sistema indireto. A II também: no dígito-terminal, o número é lido em pares, da direita para a esquerda; 82 é o grupo, 03 a guia e 47 a posição. A III também: o alfanumérico, que combina letras e números, é semi-indireto. A IV também: o arquivamento horizontal serve a plantas, mapas e grandes formatos, enquanto o vertical é o indicado para a fase corrente. Logo, I, II, III e IV.",
    explicacaoErradas:
      "As combinações sem a II pressupõem a leitura da esquerda para a direita, que poria o processo no grupo 47; no dígito-terminal, o primeiro par lido é o da direita. As que deixam de fora a I, a III ou a IV descartam afirmativas verdadeiras sobre os sistemas indireto e semi-indireto e sobre o arquivamento horizontal.",
    pegadinha:
      "A afirmativa II parece trocada para quem lê o número da esquerda para a direita; no dígito-terminal, o par final (82) é o grupo primário, e o inicial (47), a posição da pasta.",
    conhecimento:
      "Métodos de arquivamento (básicos e padronizados), sistemas direto, indireto e semi-indireto, dígito-terminal e posições de arquivamento vertical e horizontal.",
    origem: "banco",
  },
  {
    id: "prf-arq-019",
    materia: "arq",
    topico: "Arquivamento e ordenação",
    subassunto: "Métodos padronizados e numéricos: soundex, variadex e dígito-terminal",
    dificuldade: 4,
    raciocinio: "Classificação: reconhecer o método pela técnica descrita (som, cor ou leitura em pares) e descartar métodos vizinhos.",
    enunciado:
      "Considere as práticas a seguir, adotadas em arquivos de unidades da PRF.\n\n1. Para que os registros de um condutor cujo sobrenome aparece grafado como Sousa, Souza e Soza fiquem juntos, os nomes são agrupados por um código baseado no som.\n2. As pastas de um arquivo alfabético recebem cores definidas pela segunda letra do nome de entrada.\n3. Os autos de infração, de numeração extensa, são arquivados pelos números lidos em pares, da direita para a esquerda, o que reduz erros em grandes volumes.\n\nAs práticas correspondem, respectivamente, aos métodos",
    alternativas: [
      "soundex, variadex e dígito-terminal.",
      "mnemônico, variadex e dígito-terminal.",
      "soundex, automático e numérico cronológico.",
      "variadex, soundex e dígito-terminal.",
      "soundex, variadex e numérico simples.",
    ],
    correta: 0,
    explicacao:
      "O soundex agrupa nomes de mesmo som e grafias diferentes por meio de um código, como Sousa, Souza e Soza. O variadex é método padronizado que dá às pastas cores definidas pela segunda letra do nome de entrada. O dígito-terminal lê o número em pares, da direita para a esquerda, e reduz erros de arquivamento em grandes volumes de documentos numerados. Logo, soundex, variadex e dígito-terminal.",
    explicacaoErradas:
      "O mnemônico e o automático são outros métodos padronizados e não agrupam nomes pelo som nem usam cores pela segunda letra. Trocar soundex e variadex confunde o agrupamento fonético com o sistema de cores. O numérico simples atribui números em sequência, sem leitura em pares, e o cronológico combina o número com a data; nenhum deles corresponde à leitura da direita para a esquerda.",
    pegadinha:
      "No variadex, a cor depende da segunda letra do nome de entrada, e não da primeira; no dígito-terminal, a leitura em pares da direita para a esquerda é o traço que o separa dos demais métodos numéricos.",
    conhecimento:
      "Métodos padronizados de arquivamento (variadex, automático, soundex, mnemônico e rôneo) e métodos numéricos (simples, cronológico e dígito-terminal).",
    origem: "banco",
  },
  {
    id: "prf-arq-020",
    materia: "arq",
    topico: "Arquivamento e ordenação",
    subassunto: "Sequência de operações de arquivamento: inspeção, estudo, classificação, codificação, ordenação e guarda",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: conferir a ordem e o conteúdo de cada operação que antecede a guarda.",
    enunciado:
      "Para treinar novos servidores do arquivo de uma superintendência da PRF, foram redigidas as afirmativas a seguir sobre as operações que antecedem a guarda dos documentos.\n\nI. A inspeção vem primeiro: lê-se o último despacho para verificar se o documento vai mesmo para o arquivo ou deve seguir outro trâmite.\nII. A ordenação é a última operação: consiste em colocar o documento na unidade de arquivamento, encerrando a rotina.\nIII. Na codificação, anotam-se no documento os símbolos do método escolhido, como letras, números ou cores.\nIV. No estudo, o servidor lê o documento para definir a entrada, mas a escolha do método fica para a ordenação, quando os documentos já estão agrupados.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II e IV, apenas.", "I e III, apenas.", "I, III e IV, apenas.", "I, II e III, apenas."],
    correta: 2,
    explicacao:
      "A afirmativa I está correta: a inspeção é a primeira operação e verifica, pelo último despacho, se o documento deve mesmo ser arquivado. A III também: na codificação, o documento recebe os símbolos do método, como letras, números ou cores. Logo, I e III.",
    explicacaoErradas:
      "A afirmativa II está errada: a ordenação agrupa os documentos segundo a codificação, antes da guarda; a última operação é a própria guarda. A IV também: o método é definido na classificação, que vem logo depois do estudo, e não na ordenação. Por isso caem as combinações com II ou IV.",
    pegadinha:
      "Ordenar e guardar parecem a mesma coisa, mas são etapas distintas: primeiro se agrupam os documentos conforme a codificação, depois eles são colocados na unidade de arquivamento.",
    conhecimento: "Operações de arquivamento: inspeção, estudo, classificação, codificação, ordenação e guarda.",
    origem: "banco",
  },
  {
    id: "prf-arq-021",
    materia: "arq",
    topico: "Tabela de temporalidade",
    subassunto: "Elaboração, conteúdo e aprovação da tabela de temporalidade e destinação",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: reconhecer quem elabora a tabela, de onde vêm os prazos e o que a coluna de observações pode ou não alterar.",
    enunciado:
      "A PRF vai elaborar a tabela de temporalidade e destinação dos documentos de suas atividades-fim. Sobre a elaboração e o conteúdo desse instrumento, é correto afirmar que ele",
    alternativas: [
      "define só a destinação final dos documentos; os prazos de guarda de cada fase são fixados depois, na transferência.",
      "usa códigos próprios, distintos dos do plano de classificação, para que a avaliação não dependa da classificação.",
      "é elaborado pelo setor de protocolo, que conhece a tramitação dos documentos, e dispensa aprovação por ser interno.",
      "pode prever, em observações, a microfilmagem de um conjunto, que passa então da eliminação à guarda permanente.",
      "resulta da avaliação feita por comissão multidisciplinar, com prazos baseados na legislação, e depende de aprovação.",
    ],
    correta: 4,
    explicacao:
      "A tabela de temporalidade é o resultado prático da avaliação, trabalho multidisciplinar conduzido pela Comissão Permanente de Avaliação de Documentos. Seus prazos de guarda se baseiam na legislação, como prazos de prescrição e de prestação de contas, e nas necessidades administrativas, e o instrumento só vale depois de aprovado pela autoridade competente.",
    explicacaoErradas:
      "A tabela fixa os prazos de guarda nas fases corrente e intermediária e a destinação final; não deixa os prazos para a transferência. Ela usa os mesmos códigos do plano de classificação, o que liga as duas atividades. Não é tarefa do protocolo nem dispensa aprovação. E a alteração de suporte prevista em observações, como microfilmagem ou digitalização, muda o suporte, mas não a destinação final.",
    pegadinha:
      "A coluna de observações pode prever microfilmagem ou digitalização, o que sugere uma mudança de destino; mas trocar o suporte não transforma em permanente um conjunto destinado à eliminação.",
    conhecimento:
      "Tabela de temporalidade e destinação: estrutura (código e assunto, prazos nas fases corrente e intermediária, destinação final e observações), elaboração pela comissão de avaliação e aprovação.",
    origem: "banco",
  },
  {
    id: "prf-arq-022",
    materia: "arq",
    topico: "Tabela de temporalidade",
    subassunto: "Eliminação: autorização, listagem, edital de ciência, termo e métodos de descaracterização",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: conferir a autorização legal, a ordem dos atos da rotina de eliminação e a vedação quanto aos permanentes.",
    enunciado:
      "Uma comissão de avaliação da PRF prepara a eliminação de processos cujo prazo de guarda terminou. Sobre o procedimento, analise as afirmativas a seguir.\n\nI. A eliminação de documentos produzidos por órgão público depende de autorização da instituição arquivística pública, na sua esfera de competência.\nII. O edital de ciência de eliminação é publicado em periódico oficial depois da fragmentação, para dar publicidade ao que foi eliminado.\nIII. Documento de guarda permanente pode ser eliminado depois de microfilmado, porque o microfilme feito conforme a lei preserva o conteúdo.\nIV. A rotina prevê listagem de eliminação, edital de ciência e termo de eliminação, e os métodos usados devem impedir a reconstituição dos documentos.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "I e IV, apenas.", "II e III, apenas.", "I, III e IV, apenas.", "I, II e IV, apenas."],
    correta: 1,
    explicacao:
      "A afirmativa I está correta: pela Lei 8.159/1991, art. 9º, a eliminação de documentos de órgãos e entidades públicos depende de autorização da instituição arquivística pública, na sua esfera de competência. A IV também: a rotina do Conarq passa pela listagem de eliminação, pelo edital de ciência e pelo termo de eliminação, com métodos que impeçam a reconstituição, como fragmentação, pulverização, desmagnetização ou reformatação. Logo, I e IV.",
    explicacaoErradas:
      "A afirmativa II está errada: o edital de ciência de eliminação é publicado em periódico oficial antes da eliminação, para dar publicidade ao ato que será praticado; o registro do que foi feito fica no termo. A III também: documento de guarda permanente nunca é eliminado, nem depois de microfilmado. Por isso caem as combinações com II ou III.",
    pegadinha:
      "A afirmativa II acerta o nome do edital e o veículo de publicação e erra só o momento: a publicidade é prévia, e o registro posterior do que foi eliminado fica no termo de eliminação.",
    conhecimento:
      "Eliminação de documentos: autorização da instituição arquivística (Lei 8.159/1991, art. 9º), listagem, edital de ciência e termo de eliminação, métodos que impedem a reconstituição e vedação de eliminar documentos permanentes.",
    origem: "banco",
  },
  {
    id: "prf-arq-023",
    materia: "arq",
    topico: "Tabela de temporalidade",
    subassunto: "Documentos não previstos na tabela: plano de destinação elaborado pela comissão de avaliação",
    dificuldade: 4,
    raciocinio: "Caso concreto: aplicar a solução prevista para documentos sem código na tabela, sem pular a avaliação e a autorização.",
    enunciado:
      "Na avaliação do acervo de uma unidade da PRF, a comissão encontrou caixas de documentos de um programa já encerrado, cujo assunto não consta da tabela de temporalidade aplicável. Nesse caso, a conduta adequada é",
    alternativas: [
      "eliminar as caixas, pois documento que não consta da tabela não tem valor que justifique a guarda.",
      "recolher todas as caixas ao arquivo permanente, já que a ausência na tabela equivale a guarda permanente.",
      "aplicar por analogia o prazo do código mais parecido da tabela e eliminar ao fim dele, sem outra formalidade.",
      "a comissão elaborar um plano de destinação, e só eliminar depois de aprovado o plano e autorizada a eliminação.",
      "manter as caixas no arquivo corrente até que o protocolo inclua o assunto na tabela e defina os prazos de guarda.",
    ],
    correta: 3,
    explicacao:
      "Documentos que não constam da tabela de temporalidade recebem um plano de destinação, esquema elaborado pela comissão permanente de avaliação que fixa prazos e destinação para eles. Como em toda eliminação de documentos públicos, nada pode ser descartado antes de aprovada a destinação e de autorizada a eliminação pela instituição arquivística competente, com a rotina de listagem, edital e termo.",
    explicacaoErradas:
      "A ausência na tabela não equivale a falta de valor nem a guarda permanente: significa apenas que os documentos ainda não foram avaliados. Aplicar por analogia o prazo de outro código e eliminar sem formalidade dispensa a avaliação e a autorização. E o protocolo não elabora a tabela nem define prazos, tarefa da comissão de avaliação.",
    pegadinha:
      "As saídas automáticas, eliminar tudo ou guardar tudo, parecem prudentes ou econômicas, mas pulam a etapa obrigatória: avaliar os documentos e formalizar a destinação antes de qualquer descarte.",
    conhecimento:
      "Avaliação de documentos, tabela de temporalidade, plano de destinação para documentos não previstos na tabela e rotina de eliminação.",
    origem: "banco",
  },
  {
    id: "prf-arq-024",
    materia: "arq",
    topico: "Tabela de temporalidade",
    subassunto: "Métodos de eliminação por suporte: fragmentação, pulverização, desmagnetização e reformatação",
    dificuldade: 4,
    raciocinio: "Caso concreto: escolher, para cada suporte, um método previsto que impeça a reconstituição da informação.",
    enunciado:
      "Autorizada a eliminação de um lote com processos em papel, fitas magnéticas de backup e discos regraváveis, a comissão de uma superintendência da PRF precisa escolher os métodos. É adequado",
    alternativas: [
      "descartar os processos inteiros na coleta seletiva e as mídias no lixo eletrônico, já que a eliminação foi autorizada.",
      "excluir os arquivos das mídias pelo sistema operacional, como em qualquer apagamento, e fragmentar apenas o papel.",
      "fragmentar o papel e desmagnetizar ou reformatar as mídias, por métodos que impeçam a reconstituição dos dados.",
      "fragmentar o papel e guardar as mídias, porque a desmagnetização não está entre os métodos de eliminação previstos.",
      "pulverizar só os documentos sigilosos e reciclar os ostensivos inteiros, já que estes dispensam descaracterização.",
    ],
    correta: 2,
    explicacao:
      "A eliminação autorizada deve usar métodos que impeçam a reconstituição dos documentos: fragmentação manual ou mecânica e pulverização para o papel; desmagnetização ou reformatação para as mídias. Escolhe-se o método conforme o suporte, sempre com garantia de que a informação não possa ser recuperada.",
    explicacaoErradas:
      "A autorização não dispensa a descaracterização: descartar processos inteiros ou mídias intactas permite recuperar as informações. A exclusão comum pelo sistema operacional também não basta, porque os dados podem ser recuperados. A desmagnetização está entre os métodos previstos para mídias magnéticas. E a exigência de descaracterização vale para todo documento eliminado, e não só para os sigilosos.",
    pegadinha:
      "Apagar arquivos parece eliminar dados, mas a exclusão comum não impede a recuperação; para mídias, os métodos previstos são a desmagnetização e a reformatação.",
    conhecimento:
      "Métodos de eliminação de documentos (fragmentação manual ou mecânica, pulverização, desmagnetização e reformatação) e a exigência de que impeçam a reconstituição.",
    origem: "banco",
  },
  {
    id: "prf-arq-025",
    materia: "arq",
    topico: "Acondicionamento e armazenamento",
    subassunto: "Diferença entre acondicionamento (invólucros) e armazenamento (mobiliário e áreas)",
    dificuldade: 4,
    raciocinio: "Classificação: decidir se a medida trata do invólucro do documento ou do móvel e da área onde ele fica.",
    enunciado:
      "Na reforma do arquivo de uma superintendência da PRF, foram adotadas as medidas a seguir.\n\n1. Substituir as caixas de papelão comum por caixas de papel alcalino.\n2. Guardar as plantas de engenharia, sem dobras, em gavetas de mapoteca.\n3. Envolver as fotografias em envelopes de poliéster.\n4. Manter as fitas magnéticas em armários de aço com pintura antiestática.\n\nAs medidas são, respectivamente, de",
    alternativas: [
      "acondicionamento, armazenamento, acondicionamento e armazenamento.",
      "armazenamento, armazenamento, acondicionamento e armazenamento.",
      "acondicionamento, acondicionamento, acondicionamento e armazenamento.",
      "acondicionamento, armazenamento, armazenamento e armazenamento.",
      "armazenamento, acondicionamento, acondicionamento e armazenamento.",
    ],
    correta: 0,
    explicacao:
      "Acondicionar é embalar os documentos em invólucros adequados, como caixas, pastas e envelopes; armazenar é colocar essas embalagens em mobiliário e áreas próprias. Trocar as caixas e envolver as fotografias em envelopes de poliéster são medidas de acondicionamento; guardar as plantas em gavetas de mapoteca e as fitas em armários de aço com pintura antiestática são medidas de armazenamento.",
    explicacaoErradas:
      "As demais sequências trocam ao menos uma medida de categoria: a mapoteca e o armário de aço são mobiliário, e por isso pertencem ao armazenamento, ainda que a planta deva ficar sem dobras; a caixa de papel alcalino e o envelope de poliéster são invólucros, e por isso pertencem ao acondicionamento.",
    pegadinha:
      "A planta guardada sem dobras lembra cuidado de acondicionamento, mas o que a medida descreve é o móvel em que ela fica, a mapoteca, e isso é armazenamento.",
    conhecimento:
      "Acondicionamento e armazenamento: diferença conceitual, materiais adequados de invólucro e mobiliário por gênero e suporte.",
    origem: "banco",
  },
  {
    id: "prf-arq-026",
    materia: "arq",
    topico: "Acondicionamento e armazenamento",
    subassunto: "Temperatura e umidade relativa recomendadas pelo Conarq para cada suporte",
    dificuldade: 5,
    raciocinio: "Memória técnica: associar a cada suporte os valores de clima recomendados, sem trocar fotografias coloridas e em preto e branco.",
    enunciado:
      "Ao planejar os depósitos de uma superintendência da PRF, a equipe precisa adotar as referências de temperatura e umidade relativa recomendadas pelo Conarq para cada suporte. A associação adequada é",
    alternativas: [
      "papel a cerca de 12 °C e 35%; fotografias coloridas a cerca de 20 °C e 45% a 55%; mídias magnéticas a cerca de 18 °C e 40%.",
      "papel a cerca de 20 °C e 45% a 55%; fotografias coloridas a cerca de 18 °C e 40%; mídias magnéticas a cerca de 5 °C e 35%.",
      "papel a cerca de 20 °C e 65% a 75%; fotografias coloridas a cerca de 5 °C e 35%; mídias magnéticas a cerca de 18 °C e 40%.",
      "papel a cerca de 20 °C e 45% a 55%; fotografias coloridas a cerca de 12 °C e 35%; mídias magnéticas a cerca de 18 °C e 40%.",
      "papel a cerca de 20 °C e 45% a 55%; fotografias coloridas a cerca de 5 °C e 35%; mídias magnéticas a cerca de 18 °C e 40%.",
    ],
    correta: 4,
    explicacao:
      "As referências do Conarq para depósitos são: papel a cerca de 20 °C, com umidade relativa entre 45% e 55%; fotografias em preto e branco a cerca de 12 °C e 35%; fotografias coloridas a cerca de 5 °C e 35%; registros magnéticos a cerca de 18 °C e 40%. Em todos os casos, a variação diária tolerada é pequena, de cerca de 1 °C e 5% de umidade.",
    explicacaoErradas:
      "As demais associações trocam valores entre os suportes: 12 °C e 35% é a referência das fotografias em preto e branco, e não das coloridas, que pedem cerca de 5 °C, nem do papel; 18 °C e 40% é a das mídias magnéticas, e não a das fotografias. E umidade de 65% a 75% fica muito acima da faixa recomendada para o papel e favorece fungos.",
    pegadinha:
      "Uma das associações erradas difere da correta só nas fotografias coloridas: 12 °C e 35% é o valor das fotografias em preto e branco; as coloridas pedem cerca de 5 °C.",
    conhecimento:
      "Condições ambientais recomendadas pelo Conarq para papel, fotografias em preto e branco e coloridas e registros magnéticos, e a variação diária tolerada.",
    origem: "banco",
  },
  {
    id: "prf-arq-027",
    materia: "arq",
    topico: "Acondicionamento e armazenamento",
    subassunto: "Mobiliário e disposição do depósito: aço, afastamento das paredes e do piso, separação por suporte",
    dificuldade: 4,
    raciocinio: "Caso concreto: avaliar propostas de reforma do depósito pelas recomendações de armazenamento para papel e mídias magnéticas.",
    enunciado:
      "Uma superintendência da PRF vai reformar o depósito do arquivo, que guarda processos em papel e fitas magnéticas de backup. Entre as propostas apresentadas, a mais adequada às recomendações de armazenamento é",
    alternativas: [
      "estantes de madeira tratada, que isolam melhor a umidade, encostadas às paredes para ganhar espaço de circulação.",
      "estantes de aço afastadas das paredes, prateleira mais baixa acima do piso e armários antiestáticos para as fitas.",
      "papel e fitas no mesmo mobiliário e sob as mesmas condições, para facilitar o controle de temperatura e umidade.",
      "estantes de aço com a prateleira mais baixa rente ao piso, para aproveitar espaço, e janelas voltadas ao sol da manhã.",
      "climatização ligada só no horário de expediente e desligada à noite e nos fins de semana, para economizar energia.",
    ],
    correta: 1,
    explicacao:
      "O papel deve ficar em estantes de aço com pintura eletrostática, afastadas das paredes e com a prateleira mais baixa acima do piso, para o ar circular e o acervo ficar protegido de infiltrações e alagamentos. As mídias magnéticas pedem mobiliário de aço com pintura de efeito antiestático e condições próprias, separadas das do papel.",
    explicacaoErradas:
      "A madeira atrai insetos e alimenta o fogo, e estantes encostadas às paredes ficam expostas à umidade. Papel e mídias magnéticas exigem condições diferentes, por isso se separam por gênero e suporte. A prateleira rente ao piso expõe o acervo a alagamentos, e a luz solar direta acelera a deterioração. E desligar a climatização à noite provoca oscilações de temperatura e umidade, que fazem o papel dilatar e contrair.",
    pegadinha:
      "Economizar energia desligando a climatização parece razoável, mas a estabilidade importa tanto quanto o valor: as oscilações diárias danificam o papel.",
    conhecimento:
      "Armazenamento: mobiliário de aço, pintura eletrostática e antiestática, afastamento das paredes e do piso, separação por suporte e estabilidade climática.",
    origem: "banco",
  },
  {
    id: "prf-arq-028",
    materia: "arq",
    topico: "Preservação e conservação",
    subassunto: "Técnicas de conservação: higienização, desinfestação e alisamento",
    dificuldade: 4,
    raciocinio: "Classificação: reconhecer a técnica pela finalidade (limpar, combater pragas ou planificar) e descartar técnicas de restauração.",
    enunciado:
      "Considere os tratamentos a seguir, aplicados ao acervo de uma superintendência da PRF.\n\n1. Processos que ficaram anos num depósito recebem limpeza a seco, com trincha e aspirador de baixa potência, e têm os grampos enferrujados retirados.\n2. Caixas atacadas por brocas são levadas a uma câmara onde recebem vapores químicos que eliminam os insetos.\n3. Folhas amassadas passam por umidificação controlada e, depois, por prensagem, para desfazer as dobras.\n\nOs tratamentos são, respectivamente,",
    alternativas: [
      "higienização, laminação e alisamento.",
      "desinfestação, higienização e encapsulação.",
      "higienização, desinfestação e alisamento.",
      "higienização, desinfestação e laminação.",
      "alisamento, desinfestação e higienização.",
    ],
    correta: 2,
    explicacao:
      "Limpeza a seco, com trincha e aspirador de baixa potência, e retirada de metais é higienização. Eliminar insetos em câmara com vapores químicos é desinfestação, no caso por fumigação. Umidificação controlada seguida de prensagem para desfazer dobras é alisamento. Logo, higienização, desinfestação e alisamento.",
    explicacaoErradas:
      "Laminação e encapsulação são técnicas de restauração que envolvem o documento em outros materiais, e não servem para desfazer dobras nem para eliminar insetos. As sequências que invertem a ordem trocam técnicas de finalidades distintas: limpar, combater pragas e planificar.",
    pegadinha:
      "Desinfestar não é limpar: a higienização retira poeira e resíduos, mas não elimina a infestação de insetos, tratada à parte, em câmara.",
    conhecimento:
      "Técnicas de conservação e restauração: higienização, desinfestação, alisamento, encapsulação, laminação, banho de gelatina, enxerto e silking.",
    origem: "banco",
  },
  {
    id: "prf-arq-029",
    materia: "arq",
    topico: "Preservação e conservação",
    subassunto: "Técnicas de restauração: enxerto, banho de gelatina, silking e laminação",
    dificuldade: 4,
    raciocinio: "Classificação: reconhecer a técnica pelo material e pelo modo de aplicação, sem confundir as que usam seda ou umidade.",
    enunciado:
      "Na restauração de documentos danificados do arquivo de uma superintendência da PRF, foram aplicados os tratamentos a seguir.\n\n1. Áreas perdidas de uma folha, destruídas por insetos, são preenchidas com papel de características semelhantes às do original.\n2. Folhas fragilizadas são mergulhadas numa solução que aumenta sua resistência sem prejudicar a legibilidade, embora as deixe mais expostas a insetos e fungos.\n3. Folhas frágeis recebem, nas duas faces, um tecido de seda muito fino, fixado com adesivo à base de amido.\n\nOs tratamentos são, respectivamente,",
    alternativas: [
      "enxerto, banho de gelatina e laminação.",
      "enxerto, alisamento e silking.",
      "laminação, banho de gelatina e silking.",
      "enxerto, banho de gelatina e silking.",
      "enxerto, alisamento e laminação.",
    ],
    correta: 3,
    explicacao:
      "Preencher áreas perdidas com papel de características semelhantes às do original é enxerto. Mergulhar a folha numa solução de gelatina, que aumenta a resistência sem tirar a legibilidade, mas favorece o ataque de insetos e fungos, é o banho de gelatina. Aplicar às duas faces um tecido de seda fino (crepeline), com adesivo à base de amido, é o silking. Logo, enxerto, banho de gelatina e silking.",
    explicacaoErradas:
      "A laminação também envolve seda, mas usa papel de seda e acetato de celulose, aderidos ao documento por calor e pressão, e não tecido com adesivo de amido; tampouco serve para preencher áreas perdidas. O alisamento expõe as folhas à umidade e depois as prensa para desfazer dobras, sem imersão numa solução que as reforce. Por isso caem as sequências que trazem laminação ou alisamento.",
    pegadinha:
      "Silking e laminação usam seda; o que os separa é o material e o modo de aplicação: tecido de seda com adesivo de amido no silking; papel de seda e acetato de celulose, sob calor e pressão, na laminação.",
    conhecimento:
      "Técnicas de conservação e restauração: higienização, desinfestação, alisamento, enxerto, banho de gelatina, silking, laminação e encapsulação.",
    origem: "banco",
  },
  {
    id: "prf-arq-030",
    materia: "arq",
    topico: "Preservação e conservação",
    subassunto: "Digitalização: destruição do original, ressalva dos documentos históricos e requisitos do Decreto 10.278/2020",
    dificuldade: 5,
    raciocinio: "Aplicação da lei: combinar a permissão de destruir o original com a ressalva histórica e com os requisitos do digitalizado.",
    enunciado:
      "Uma superintendência da PRF pretende digitalizar processos administrativos encerrados e um álbum fotográfico de valor histórico sobre a construção de uma rodovia federal, para liberar espaço. Considerando a Lei 12.682/2012 e o Decreto 10.278/2020, é correto afirmar que",
    alternativas: [
      "a digitalização permite destruir também o álbum, desde que as imagens sejam assinadas com certificado ICP-Brasil.",
      "a lei só admite destruir o original depois da microfilmagem, porque a digitalização ainda não substitui o papel.",
      "basta escanear os processos em qualquer resolução e formato para o digitalizado valer como original perante a administração.",
      "com a lei da digitalização, a microfilmagem foi revogada, e os microfilmes antigos perderam o valor de prova.",
      "constatada a integridade do digitalizado nos termos do regulamento, os processos podem ser destruídos, e o álbum, não.",
    ],
    correta: 4,
    explicacao:
      "Pela Lei 12.682/2012, art. 2º-A, § 1º, depois da digitalização e constatada a integridade do documento digital nos termos do regulamento, o original pode ser destruído, ressalvados os de valor histórico, cuja preservação segue a legislação específica. Assim, os processos podem ser destruídos, e o álbum deve ser preservado. Para valer perante a administração pública, o digitalizado precisa de assinatura com certificado ICP-Brasil, dos padrões técnicos mínimos e dos metadados do Decreto 10.278/2020, art. 5º.",
    explicacaoErradas:
      "A assinatura digital não afasta a ressalva dos documentos de valor histórico, que não podem ser destruídos. A lei não exige microfilmagem prévia: a digitalização feita conforme o regulamento já permite a destruição do original, e a Lei 5.433/1968, da microfilmagem, continua em vigor, com o digitalizado produzindo os mesmos efeitos do microfilmado. E não basta escanear de qualquer modo: o decreto fixa resolução, formato e metadados mínimos.",
    pegadinha:
      "A assinatura com certificado ICP-Brasil dá validade ao digitalizado, mas não muda a natureza do original histórico: a ressalva legal impede sua destruição, qualquer que seja a qualidade da digitalização.",
    conhecimento:
      "Digitalização de documentos: Lei 12.682/2012 (art. 2º-A), Decreto 10.278/2020 (assinatura, padrões técnicos e metadados) e a convivência com a microfilmagem (Lei 5.433/1968).",
    origem: "banco",
  },
  {
    id: "prf-arq-031",
    materia: "arq",
    topico: "Preservação e conservação",
    subassunto: "Preservação digital: obsolescência, migração, emulação e RDC-Arq",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: reconhecer as estratégias contra a obsolescência tecnológica e o alcance dos repositórios digitais confiáveis.",
    enunciado:
      "A PRF guarda, há anos, relatórios gerados por um sistema descontinuado, num formato que os programas atuais já não abrem, além de vídeos em mídias que os equipamentos novos não leem. Sobre a preservação desses documentos digitais, é correto afirmar que",
    alternativas: [
      "a migração para formatos e suportes atuais e a emulação do ambiente antigo são estratégias contra a obsolescência.",
      "a obsolescência só afeta os suportes físicos, e por isso basta copiar os arquivos para mídias novas, mantendo o formato.",
      "o repositório arquivístico digital confiável é exigido apenas para documentos permanentes, e não nas fases anteriores.",
      "a emulação converte os arquivos para um formato atual, e a migração reproduz o ambiente antigo num equipamento novo.",
      "a preservação digital começa no recolhimento ao arquivo permanente, já que antes os documentos ainda estão em uso.",
    ],
    correta: 0,
    explicacao:
      "O maior risco dos documentos digitais é a obsolescência de equipamentos, programas e formatos. Contra ela, a migração passa os documentos para suporte, formato ou plataforma atuais, e a emulação reproduz o ambiente antigo num equipamento novo; o uso de formatos abertos e estáveis previne o problema. Os relatórios pedem migração ou emulação, e os vídeos, migração para suportes legíveis.",
    explicacaoErradas:
      "A obsolescência atinge também formatos e programas: copiar arquivos para mídias novas sem mudar o formato não resolve a falta de programa capaz de abri-los. O repositório arquivístico digital confiável (RDC-Arq) atende às três idades, e não só aos permanentes. A inversão entre emulação e migração troca as definições. E a preservação começa na produção, com a escolha de formatos e suportes, e não no recolhimento.",
    pegadinha:
      "Copiar os arquivos para mídias novas parece preservar, mas resolve só a obsolescência do suporte; se o formato ficar ilegível, o documento continua inacessível.",
    conhecimento:
      "Preservação digital: obsolescência, migração, emulação, formatos abertos e repositórios arquivísticos digitais confiáveis (RDC-Arq).",
    origem: "banco",
  },
  {
    id: "prf-arq-032",
    materia: "arq",
    topico: "Preservação e conservação",
    subassunto: "Fatores de deterioração: internos, físicos, químicos e biológicos",
    dificuldade: 4,
    raciocinio: "Classificação: enquadrar cada fator pela origem do dano, sem confundir o processo químico com a categoria do fator.",
    enunciado:
      "No diagnóstico de conservação do arquivo de uma superintendência da PRF, foram identificados: a acidez do papel dos processos antigos; a luz solar que entra pelas janelas do depósito; a poluição atmosférica vinda da rodovia ao lado; e traças e cupins nas caixas. Esses fatores de deterioração classificam-se, respectivamente, como",
    alternativas: [
      "químico, físico, químico e biológico.",
      "interno, físico, químico e biológico.",
      "interno, químico, físico e biológico.",
      "externo, físico, biológico e químico.",
      "interno, físico, químico e humano.",
    ],
    correta: 1,
    explicacao:
      "A acidez do papel é fator interno, porque está na composição do próprio suporte. A luz, sobretudo a ultravioleta, é fator físico, como a temperatura e a umidade. A poluição atmosférica é fator químico. Traças e cupins são agentes biológicos, como fungos e roedores. Logo, interno, físico, químico e biológico.",
    explicacaoErradas:
      "Tratar a acidez como fator químico ou externo ignora que ela vem do próprio papel, o que a torna interna. Inverter luz e poluição troca os fatores físicos pelos químicos. E traças e cupins são agentes biológicos; fatores humanos são o manuseio inadequado e o vandalismo.",
    pegadinha:
      "A acidez é um processo químico, o que leva à resposta “químico”; mas a classificação considera a origem do dano, e a acidez está no próprio suporte, por isso é fator interno.",
    conhecimento:
      "Fatores de deterioração: internos (composição do suporte) e externos (físicos, químicos, biológicos, humanos e catástrofes).",
    origem: "banco",
  },
];
