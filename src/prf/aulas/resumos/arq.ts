import type { ResumoAula } from "./tipos";

export const ARQ: Record<string, ResumoAula> = {
  "arq-01": {
    ideia:
      "Arquivo é o conjunto de documentos produzidos e recebidos por uma pessoa ou instituição no exercício das suas atividades, em qualquer suporte.",
    itens: [
      {
        termo: "Arquivo",
        faz: "Reúne os documentos que nascem das atividades de quem os produziu ou recebeu (Lei 8.159/1991, art. 2º).",
        pista: "A palavra também indica o setor, o móvel e a instituição arquivística.",
      },
      {
        termo: "Naturalidade",
        faz: "Os documentos se acumulam naturalmente, no dia a dia do trabalho; ninguém os coleciona.",
      },
      {
        termo: "Organicidade",
        faz: "Os documentos se ligam uns aos outros e às atividades que os geraram.",
        pista: "Um documento fora do seu conjunto perde parte do sentido.",
      },
      {
        termo: "Unicidade",
        faz: "Cada documento tem lugar único no conjunto, mesmo que existam cópias dele.",
      },
      {
        termo: "Imparcialidade e autenticidade",
        faz: "Registram os fatos com fidelidade, porque foram criados para cumprir uma função; são mantidos por procedimentos regulares e comprováveis.",
      },
    ],
    cuidado:
      "Unicidade não quer dizer que não haja cópias: o documento é único pela função que cumpre naquele conjunto.",
  },
  "arq-02": {
    ideia:
      "O arquivo guarda o que nasceu das atividades de um órgão; a biblioteca reúne obras escolhidas para informar e educar.",
    itens: [
      {
        termo: "Como os documentos chegam",
        faz: "Arquivo: produzidos ou recebidos no trabalho. Biblioteca: compra, permuta ou doação.",
      },
      {
        termo: "Exemplares",
        faz: "Arquivo: exemplar único ou em poucas vias. Biblioteca: vários exemplares da mesma obra.",
      },
      {
        termo: "Como se agrupam",
        faz: "Arquivo: pela origem, formando fundos. Biblioteca: por assunto, formando coleções.",
      },
      {
        termo: "Finalidade",
        faz: "Arquivo: primeiro administrativa, depois histórica. Biblioteca: cultural, científica e educativa.",
      },
      {
        termo: "Classificação",
        faz: "Arquivo: plano próprio de cada instituição. Biblioteca: sistemas universais, iguais em qualquer lugar.",
      },
    ],
    cuidado:
      "Fundo é reunido pela origem (quem produziu); coleção de biblioteca é reunida por assunto ou escolha.",
  },
  "arq-03": {
    ideia:
      "Arquivos e documentos são classificados por vários critérios: quem os mantém, a fase em que estão, o suporte, o gênero e o grau de sigilo.",
    itens: [
      {
        termo: "Entidade mantenedora",
        faz: "Públicos ou privados (pessoais, familiares, comerciais, institucionais).",
        pista: "Também são públicos os de entidades privadas que gerem serviços públicos, no exercício dessas atividades.",
      },
      {
        termo: "Estágio de evolução",
        faz: "Corrente, intermediário e permanente, conforme o uso e o valor dos documentos.",
      },
      {
        termo: "Especial × especializado",
        faz: "Especial: suportes diversos (fotos, discos, mapas). Especializado: documentos de uma área do conhecimento, em qualquer suporte.",
      },
      {
        termo: "Gênero",
        faz: "Textual, cartográfico, iconográfico, filmográfico, sonoro, micrográfico e informático.",
        pista: "Foto e desenho são iconográficos; mapa e planta são cartográficos.",
      },
      {
        termo: "Natureza do assunto",
        faz: "Ostensivo ou sigiloso; a informação sigilosa é ultrassecreta (até 25 anos), secreta (até 15) ou reservada (até 5).",
      },
    ],
    cuidado:
      "Especial é pelo suporte; especializado é pelo assunto. Arquivo médico em papel e em meio digital é especializado.",
  },
  "arq-04": {
    ideia:
      "Os princípios arquivísticos garantem que o conjunto continue mostrando quem produziu os documentos e como eles se relacionam.",
    itens: [
      {
        termo: "Proveniência",
        faz: "Documentos de um produtor não se misturam aos de outro (respeito aos fundos).",
        pista: "É o primeiro a ser aplicado e o que forma o fundo.",
      },
      {
        termo: "Ordem original",
        faz: "Mantém a organização que o próprio produtor deu aos documentos.",
      },
      {
        termo: "Indivisibilidade",
        faz: "O fundo fica inteiro: sem dispersão, mutilação, alienação ou destruição não autorizada.",
      },
      {
        termo: "Cumulatividade",
        faz: "O arquivo é uma formação progressiva e natural, que cresce com as atividades.",
      },
      {
        termo: "Reversibilidade",
        faz: "Todo tratamento feito no documento precisa poder ser desfeito.",
        pista: "É a regra de ouro da restauração.",
      },
    ],
    cuidado:
      "Organizar por assunto, ignorando a origem (pertinência), não é princípio aceito: contraria a proveniência.",
  },
  "arq-05": {
    ideia:
      "O documento passa por três fases, conforme a frequência de uso e o valor que tem: corrente, intermediária e permanente (Lei 8.159/1991, art. 8º).",
    itens: [
      {
        termo: "Corrente (1ª idade)",
        faz: "Documentos em curso ou consultados com frequência; ficam perto de quem os produziu.",
      },
      {
        termo: "Intermediária (2ª idade)",
        faz: "Sem uso frequente, aguardam a eliminação ou o recolhimento por razões administrativas.",
        pista: "Uso eventual; a guarda pode ficar longe dos setores.",
      },
      {
        termo: "Permanente (3ª idade)",
        faz: "Documentos de valor histórico, probatório e informativo, guardados para sempre e abertos ao público.",
      },
      {
        termo: "Transferência × recolhimento",
        faz: "Transferência: da fase corrente para a intermediária. Recolhimento: entrada no arquivo permanente.",
      },
      {
        termo: "Valor primário × secundário",
        faz: "Primário: interessa ao próprio órgão e é temporário. Secundário: interessa à sociedade e justifica a guarda permanente.",
      },
    ],
    cuidado: "A banca troca transferência por recolhimento: transferir leva ao intermediário; recolher leva ao permanente.",
  },
  "arq-06": {
    ideia:
      "Dois instrumentos sustentam a gestão: o plano de classificação, que organiza, e a tabela de temporalidade, que define prazos e destino.",
    itens: [
      {
        termo: "Plano de classificação",
        faz: "Organiza os documentos por funções e atividades do órgão, em códigos decimais (classes, subclasses, grupos).",
        pista: "É próprio de cada instituição.",
      },
      {
        termo: "Atividades-meio × atividades-fim",
        faz: "No Executivo federal, o código e a tabela das atividades-meio são padronizados; os das atividades-fim são feitos por cada órgão.",
      },
      {
        termo: "Tabela de temporalidade",
        faz: "Define o prazo de guarda nas fases corrente e intermediária e a destinação final: eliminação ou guarda permanente.",
        pista: "Usa os mesmos códigos do plano de classificação.",
      },
      {
        termo: "Comissão de avaliação",
        faz: "A comissão permanente de avaliação (CPAD), multidisciplinar, analisa os documentos e elabora a tabela.",
      },
      {
        termo: "Eliminação",
        faz: "Só com autorização da instituição arquivística pública (art. 9º), com listagem, edital de ciência publicado antes e termo de eliminação.",
      },
    ],
    cuidado:
      "O plano de classificação segue as funções do órgão, e não o organograma, que muda com frequência.",
  },
  "arq-07": {
    ideia:
      "Protocolo é o setor e o conjunto de rotinas que controla a entrada, o registro, a tramitação e a saída dos documentos.",
    itens: [
      {
        termo: "Recebimento",
        faz: "Separa a correspondência oficial da particular e, entre as oficiais, as ostensivas das sigilosas.",
        pista: "Particular e sigilosa seguem fechadas ao destinatário.",
      },
      {
        termo: "Registro",
        faz: "Lança número, data, remetente e assunto, que depois servem para achar o documento.",
      },
      {
        termo: "Autuação",
        faz: "Dá forma de processo ao documento, com capa e número único.",
      },
      {
        termo: "Distribuição × expedição",
        faz: "Distribuição: encaminha aos setores do próprio órgão. Expedição: envia para fora do órgão.",
      },
      {
        termo: "Controle da tramitação",
        faz: "Acompanha o caminho do documento, para dizer onde ele está a qualquer momento.",
      },
    ],
    cuidado:
      "O protocolo atua na fase corrente: não guarda documentos de forma definitiva, não avalia e não elimina.",
  },
  "arq-08": {
    ideia:
      "Depois de autuados, os processos podem ser unidos, separados ou ter folhas retiradas, sempre com justificativa e registro.",
    itens: [
      {
        termo: "Juntada por anexação",
        faz: "União definitiva de processos do mesmo interessado e do mesmo assunto; prevalece o número do mais antigo.",
      },
      {
        termo: "Juntada por apensação",
        faz: "União temporária, para estudo e decisão uniforme; cada processo mantém o seu número.",
        pista: "Pode reunir interessados diferentes.",
      },
      {
        termo: "Desapensação",
        faz: "Separa os processos que estavam apensados, antes do arquivamento.",
      },
      {
        termo: "Desentranhamento",
        faz: "Retirada definitiva de folhas do processo, com justificativa; no lugar fica um termo.",
      },
      {
        termo: "Desmembramento",
        faz: "Separa folhas de um processo para formar um processo novo.",
      },
    ],
    cuidado:
      "Anexação é definitiva e exige mesmo interessado e mesmo assunto; apensação é temporária.",
  },
  "arq-09": {
    ideia:
      "Antes de guardar, o documento passa por uma sequência de operações que evita erro e garante que ele será encontrado depois.",
    itens: [
      {
        termo: "Inspeção",
        faz: "Lê o último despacho, para ver se o documento vai mesmo para o arquivo ou deve seguir outro caminho.",
      },
      {
        termo: "Estudo",
        faz: "Lê o documento para escolher a entrada e ver se há antecedentes ou necessidade de referência cruzada.",
      },
      {
        termo: "Classificação",
        faz: "Define a entrada e o método sob os quais o documento será arquivado.",
      },
      {
        termo: "Codificação e ordenação",
        faz: "Anota no documento os símbolos do método (letras, números, cores) e agrupa os documentos por eles.",
      },
      {
        termo: "Guarda",
        faz: "Coloca o documento na pasta ou caixa certa.",
        pista: "Pastas em pé (vertical) na fase corrente; plantas e mapas deitados (horizontal).",
      },
    ],
    cuidado:
      "A ordem cai na prova: inspeção, estudo, classificação, codificação, ordenação e guarda. A inspeção vem primeiro.",
  },
  "arq-10": {
    ideia:
      "O método de arquivamento define a ordem em que os documentos ficam guardados: por nome, por lugar, por número ou por assunto.",
    itens: [
      {
        termo: "Alfabético",
        faz: "Ordena pelo nome de pessoas, empresas ou órgãos.",
        pista: "Sistema direto: vai-se direto à pasta, sem índice.",
      },
      {
        termo: "Geográfico",
        faz: "Ordena pelo lugar: país, estado, cidade.",
        pista: "Também é direto.",
      },
      {
        termo: "Numéricos",
        faz: "Simples, cronológico e dígito-terminal; precisam de um índice para achar o número (sistema indireto).",
        pista: "No dígito-terminal, o número é lido em pares, da direita para a esquerda.",
      },
      {
        termo: "Por assunto (ideográfico)",
        faz: "Ordena pelo tema; pode ser alfabético (enciclopédico, dicionário) ou numérico (duplex, decimal, unitermo).",
      },
      {
        termo: "Padronizados",
        faz: "Variadex (cores pela segunda letra do nome), automático, soundex (nomes de mesmo som), mnemônico e rôneo.",
      },
    ],
    cuidado:
      "Direto × indireto: alfabético e geográfico vão direto ao local; os numéricos exigem consultar um índice antes. O alfanumérico é semi-indireto.",
  },
  "arq-11": {
    ideia:
      "Na ordem alfabética, a pessoa entra pelo último sobrenome; as regras de alfabetação resolvem os casos especiais.",
    itens: [
      {
        termo: "Nome de pessoa",
        faz: "Último sobrenome, depois o prenome: Ana Maria Torres fica Torres, Ana Maria.",
      },
      {
        termo: "Sobrenomes que não se separam",
        faz: "Os que formam uma expressão (Vila Nova), os ligados por hífen (Duque-Estrada) e os com Santa, Santo e São (Santo Amaro).",
      },
      {
        termo: "Partículas, iniciais e títulos",
        faz: "Artigos e preposições não contam; iniciais vêm antes do nome completo de mesmo sobrenome; títulos vão para o fim, entre parênteses.",
      },
      {
        termo: "Nomes estrangeiros",
        faz: "Espanhóis: pelo penúltimo sobrenome, que é o do pai. Orientais: como se apresentam.",
      },
      {
        termo: "Empresas, órgãos e eventos",
        faz: "Como se apresentam; o artigo inicial e o número do evento vão para o fim, entre parênteses.",
      },
    ],
    cuidado:
      "Filho, Júnior, Neto e Sobrinho acompanham o sobrenome, mas não contam na ordem: Paulo Lima Filho fica Lima Filho, Paulo.",
  },
  "arq-12": {
    ideia:
      "Gestão de documentos são os procedimentos de produção, tramitação, uso, avaliação e arquivamento nas fases corrente e intermediária, até a eliminação ou o recolhimento (Lei 8.159/1991, art. 3º).",
    itens: [
      {
        termo: "Produção",
        faz: "Criar só os documentos necessários, padronizar modelos e formulários e evitar duplicidades.",
      },
      {
        termo: "Utilização",
        faz: "Protocolo, tramitação, organização e arquivamento nas fases corrente e intermediária, com regras de acesso.",
      },
      {
        termo: "Avaliação e destinação",
        faz: "Analisa o valor dos documentos, define prazos e decide entre eliminar e guardar para sempre.",
      },
      {
        termo: "Tabela de temporalidade",
        faz: "É o resultado prático da avaliação; o prazo de cada fase conta a partir do momento indicado na própria tabela.",
      },
      {
        termo: "Valor permanente",
        faz: "Documentos de valor permanente são inalienáveis e imprescritíveis (art. 10) e nunca são eliminados.",
        pista: "Nem depois de microfilmados ou digitalizados.",
      },
    ],
    cuidado:
      "A gestão de documentos cobre as fases corrente e intermediária; o arquivo permanente tem atividades próprias (arranjo, descrição, referência).",
  },
  "arq-13": {
    ideia:
      "No arquivo permanente, o trabalho é organizar, descrever e abrir ao público os documentos de valor histórico e probatório.",
    itens: [
      {
        termo: "Arranjo",
        faz: "Organiza os documentos no permanente respeitando a proveniência e a ordem original; o instrumento é o quadro de arranjo.",
        pista: "Nas fases corrente e intermediária o nome é classificação.",
      },
      {
        termo: "Descrição",
        faz: "Prepara os instrumentos de pesquisa, que ajudam o público a achar os documentos.",
      },
      {
        termo: "Instrumentos de pesquisa",
        faz: "Guia (visão geral do arquivo), inventário (um fundo ou parte dele), catálogo (por tema, data, nome ou lugar) e repertório (documentos escolhidos por tema).",
      },
      {
        termo: "Publicação",
        faz: "Divulga os instrumentos de pesquisa e os próprios documentos.",
      },
      {
        termo: "Referência",
        faz: "Política de acesso e de uso: atendimento a consultas e ações culturais e educativas.",
      },
    ],
    cuidado:
      "O guia é o instrumento mais geral, sobre o arquivo inteiro; catálogo e repertório descem ao nível do documento.",
  },
  "arq-14": {
    ideia:
      "Preservar é manter os documentos inteiros e acessíveis; acondicionar e armazenar bem evita boa parte dos danos.",
    itens: [
      {
        termo: "Acondicionamento × armazenamento",
        faz: "Acondicionar é embalar (pastas, envelopes, caixas); armazenar é colocar as embalagens no mobiliário e no depósito.",
      },
      {
        termo: "Embalagens",
        faz: "Material estável (papel alcalino, polipropileno), sem clipes e grampos de metal, elásticos e fita adesiva; mapas e plantas planos.",
      },
      {
        termo: "Mobiliário e clima",
        faz: "Estantes de aço, longe da parede e do chão; papel a cerca de 20 °C e umidade de 45% a 55%.",
        pista: "Madeira atrai insetos e alimenta o fogo.",
      },
      {
        termo: "Fatores de deterioração",
        faz: "Internos (papel ácido), físicos (luz, calor, umidade), químicos (poluição, poeira), biológicos (fungos, insetos, roedores) e humanos.",
      },
      {
        termo: "Técnicas",
        faz: "Higienização a seco, desinfestação, alisamento e encapsulação (reversível); a laminação é difícil de reverter.",
      },
    ],
    cuidado:
      "Temperatura e umidade precisam ficar estáveis, dia e noite: a oscilação faz o papel dilatar e contrair. Pano úmido não se usa no papel.",
  },
  "arq-15": {
    ideia:
      "Digitalizar é transformar o documento em papel numa imagem digital; o original só pode ser destruído se a digitalização seguir as regras e o documento não tiver valor histórico.",
    itens: [
      {
        termo: "Base legal",
        faz: "A Lei 12.682/2012 autoriza guardar documentos em meio eletrônico; o Decreto 10.278/2020 define como digitalizar.",
      },
      {
        termo: "Valor perante o poder público",
        faz: "Para valer como o original: assinatura digital no padrão ICP-Brasil, padrões técnicos mínimos e metadados (Decreto 10.278/2020, art. 5º).",
      },
      {
        termo: "Destruição do original",
        faz: "Permitida depois de conferida a integridade do digital, salvo os documentos de valor histórico (Lei 12.682/2012, art. 2º-A, § 1º).",
      },
      {
        termo: "Obsolescência",
        faz: "O maior risco do digital: equipamento, programa e formato ficam velhos.",
        pista: "Saídas: migração, emulação e formatos abertos e estáveis.",
      },
      {
        termo: "Microfilme",
        faz: "Outra forma de mudar o suporte; a lei da microfilmagem (Lei 5.433/1968) continua em vigor.",
      },
    ],
    cuidado:
      "Mudar o suporte não muda a destinação: documento de guarda permanente não é eliminado nem depois de digitalizado ou microfilmado.",
  },
};
