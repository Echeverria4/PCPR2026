import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-b-02",
  resumo: {
    ideia:
      "O Direito Administrativo nasce da necessidade de limitar o Estado. Para entender a matéria, separe Estado, Governo e Administração e veja que os três Poderes exercem funções típicas e atípicas.",
    itens: [
      {
        termo: "Estado",
        faz: "Pessoa jurídica formada por povo, território e governo soberano.",
      },
      {
        termo: "Separação de Poderes",
        faz: "O poder é uno e indivisível. O que se reparte são as funções, de forma flexível, e cada Poder pode exercer função atípica.",
      },
      {
        termo: "Função administrativa",
        faz: "Atuação concreta, direta e de iniciativa própria, sob a lei.",
        pista: "Não forma coisa julgada em sentido próprio.",
      },
      {
        termo: "Função legislativa",
        faz: "Inova a ordem jurídica com atos primários, gerais e abstratos, como os do art. 59 da Constituição.",
      },
      {
        termo: "Função jurisdicional",
        faz: "Resolve conflitos com definitividade e, em regra, só atua quando provocada.",
      },
      {
        termo: "Descentralização política",
        faz: "União, estados, DF e municípios têm autonomia própria e não se subordinam entre si.",
      },
      {
        termo: "Regime jurídico",
        faz: "O regime da Administração é gênero, público ou privado. O regime jurídico-administrativo é o de direito público, com prerrogativas e sujeições.",
      },
      {
        termo: "Sem código único",
        faz: "O Direito Administrativo brasileiro não é codificado: está espalhado em muitas leis.",
      },
    ],
    cuidado:
      "Função atípica não é desvio: é exercício previsto na Constituição, como o Senado julgando o Presidente por crime de responsabilidade.",
  },
  questoes: [
    {
      topico: "Funções atípicas",
      subassunto: "Identificação da função",
      dificuldade: 5,
      raciocinio: "Olhe a natureza da atividade, não o Poder que a pratica.",
      enunciado:
        "Na mesma semana, o Senado Federal julgou o Presidente da República por crime de responsabilidade e reorganizou os serviços administrativos da Casa, enquanto o Presidente editou uma medida provisória. As funções exercidas são, respectivamente,",
      alternativas: [
        "administrativa atípica, legislativa típica e administrativa típica",
        "jurisdicional atípica, administrativa atípica e legislativa atípica",
        "legislativa típica nas duas primeiras e administrativa atípica na terceira, por se tratar de ato do chefe do Executivo",
        "jurisdicional típica, administrativa típica e legislativa típica",
        "política nas três, pois os atos foram praticados por agentes eleitos, sem natureza jurídica definida",
      ],
      correta: 1,
      explicacao:
        "Julgar crime de responsabilidade (CF, art. 52, I) é função jurisdicional atípica do Senado. Organizar seus serviços é administrativa atípica. Editar medida provisória é legislativa atípica do Executivo.",
      explicacaoErradas:
        "“Administrativa atípica, legislativa típica” erra as duas primeiras naturezas. “Legislativa típica nas duas primeiras” ignora que julgar e organizar serviços não são legislar. “Jurisdicional típica” caberia ao Judiciário. “Política nas três” foge da classificação pedida.",
      pegadinha: "Típico ou atípico depende de quem exerce; a natureza depende do que é feito.",
      conhecimento:
        "O Judiciário exerce função legislativa atípica quando elabora seu regimento interno.",
    },
    {
      topico: "Separação de Poderes",
      subassunto: "Poder uno e funções",
      dificuldade: 4,
      raciocinio: "O que se divide é a função, não o poder.",
      enunciado:
        "Sobre a separação de Poderes no Brasil, em leitura compatível com o Direito Administrativo, é correto afirmar que",
      alternativas: [
        "cada Poder exerce só a sua função típica, e qualquer função atípica depende de autorização judicial",
        "o poder estatal é dividido em três partes com soberanias próprias, sem nenhum vínculo entre elas",
        "o poder é uno e o que se reparte são funções, de forma flexível",
        "o Executivo prevalece sobre os demais",
        "a função administrativa pertence apenas ao Executivo, e nos demais Poderes não há ato administrativo",
      ],
      correta: 2,
      explicacao:
        "O poder do Estado é uno e indivisível. A Constituição distribui funções entre órgãos independentes e harmônicos, com interpenetração controlada.",
      explicacaoErradas:
        "“Depende de autorização judicial” inventa requisito: a atipicidade vem da Constituição. “Soberanias próprias” rompe a unidade do Estado. “O Executivo prevalece” contraria o art. 2º da Constituição. “Apenas ao Executivo” ignora os atos administrativos dos demais Poderes, como a nomeação de um servidor pelo tribunal.",
      pegadinha: "Separação rígida não é o modelo brasileiro.",
      conhecimento:
        "Os freios e contrapesos são a face prática dessa harmonia: veto, controle de constitucionalidade e aprovação de autoridades pelo Senado, por exemplo.",
    },
    {
      topico: "Federação",
      subassunto: "Descentralização política",
      dificuldade: 4,
      raciocinio: "Na federação, a repartição é de competências, não de hierarquia.",
      enunciado:
        "Lei federal, sem base em competência constitucional da União, ordena que determinado município reorganize a estrutura interna de suas secretarias, sob pena de sanção imposta por ministro. Essa ordem é",
      alternativas: [
        "válida, porque o município é uma descentralização administrativa da União",
        "válida, porque a União exerce sobre os municípios a mesma tutela que exerce sobre as suas autarquias",
        "válida apenas se o estado-membro concordar",
        "inválida, porque os entes têm autonomia política e não se subordinam",
        "inválida apenas pela falta de um decreto presidencial que regulamente a lei federal",
      ],
      correta: 3,
      explicacao:
        "União, estados, DF e municípios são autônomos, com competências próprias fixadas na Constituição. Isso é descentralização política, que não gera hierarquia nem tutela administrativa.",
      explicacaoErradas:
        "“Descentralização administrativa” e “mesma tutela” confundem ente federativo com entidade da indireta. “Se o estado-membro concordar” não resolve a falta de competência. “Falta de um decreto” aponta um defeito secundário: o vício é de competência, e não de regulamentação.",
      pegadinha: "Município não é autarquia da União.",
      conhecimento:
        "Os municípios têm Executivo e Legislativo próprios, mas não têm Poder Judiciário.",
    },
    {
      topico: "Função administrativa",
      subassunto: "Comparação entre funções",
      dificuldade: 5,
      raciocinio: "Separe três traços: inovar a ordem, agir de ofício e decidir com definitividade.",
      enunciado:
        "Um órgão, por iniciativa própria, interdita um estabelecimento em caso concreto, aplicando lei já existente. A decisão pode ser revista pelo Judiciário. Esses traços apontam para a função",
      alternativas: [
        "jurisdicional, porque há decisão sobre caso concreto e aplicação de lei a uma pessoa determinada",
        "legislativa, porque a decisão cria obrigação nova para o particular atingido por ela",
        "administrativa, concreta e de atuação direta",
        "política",
        "jurisdicional atípica, porque o órgão decide conflito sem que as partes tenham sido ouvidas previamente",
      ],
      correta: 2,
      explicacao:
        "A função administrativa aplica a lei de ofício a casos concretos, sem definitividade própria. A jurisdicional depende de provocação e decide com força de coisa julgada; a legislativa inova com atos gerais e abstratos.",
      explicacaoErradas:
        "“Jurisdicional” não combina com atuar por iniciativa própria nem com a decisão sujeita a revisão judicial. “Cria obrigação nova” confunde aplicar a lei com inovar a ordem jurídica. “Política” trata das grandes decisões de governo. “Jurisdicional atípica” tem o mesmo defeito da primeira, e a falta de oitiva prévia não muda a natureza do ato.",
      pegadinha: "Caso concreto, sozinho, não torna a função jurisdicional.",
      conhecimento:
        "Pelo art. 5º, XXXV, da Constituição, a lei não exclui do Judiciário lesão ou ameaça a direito, e daí vem o sistema de jurisdição una.",
    },
    {
      topico: "Regime jurídico",
      subassunto: "Regime da Administração e regime administrativo",
      dificuldade: 5,
      raciocinio: "Um é gênero, o outro é espécie.",
      enunciado:
        "Uma entidade pública aluga um imóvel como locatária, em contrato regido predominantemente pelo direito privado, e também aplica multa a um particular. Na distinção feita por Maria Sylvia Di Pietro,",
      alternativas: [
        "os dois atos estão sob o regime jurídico da Administração, e só a multa, sob o regime jurídico-administrativo",
        "os dois atos estão sob o regime jurídico-administrativo, porque toda atuação estatal se submete só ao direito público",
        "nenhum dos atos segue o regime jurídico-administrativo, porque ele se aplica apenas aos contratos com cláusula especial",
        "só a locação segue regime jurídico-administrativo, por envolver dinheiro público",
        "as expressões são sinônimas e a distinção é apenas de nomenclatura, sem nenhum efeito prático para a entidade",
      ],
      correta: 0,
      explicacao:
        "“Regime jurídico da Administração” é gênero: abrange regras de direito público e de direito privado. “Regime jurídico-administrativo” designa só o conjunto de direito público, com prerrogativas e sujeições.",
      explicacaoErradas:
        "“Toda atuação estatal” desconsidera o direito privado aplicável. “Apenas aos contratos” limita o regime e esquece a multa. “Só a locação” inverte os casos: o dinheiro público não define o regime. “Sinônimas” nega a distinção da autora.",
      pegadinha: "Atuação regida pelo direito privado nunca é puramente privada: a Administração segue sujeita a controles e a regras públicas.",
      conhecimento:
        "Mesmo em contratos privados, a Administração observa regras de competência, finalidade e forma.",
    },
    {
      topico: "Fontes e formação",
      subassunto: "Sem código e origem francesa",
      dificuldade: 4,
      raciocinio: "No Brasil há leis esparsas, e a origem da disciplina é o Estado de Direito.",
      enunciado:
        "Sobre a formação e as características do Direito Administrativo, assinale a afirmação correta.",
      alternativas: [
        "No Brasil, ele está reunido em um único código federal, aplicável a todos os entes da Federação",
        "Sua origem é anterior ao Estado de Direito, nas regras com que os monarcas absolutos limitavam a si mesmos",
        "No Brasil, ele não é codificado e tem normas em leis esparsas",
        "Só a União legisla sobre a matéria, e os municípios apenas executam",
        "Ele surgiu como ramo do direito privado e só no Brasil passou a ser estudado como ramo do direito público",
      ],
      correta: 2,
      explicacao:
        "Não existe código administrativo brasileiro. A matéria está em muitas leis, como as Leis 8.112, 9.784 e 14.133. Além disso, cada ente legisla sobre sua própria organização e seus servidores.",
      explicacaoErradas:
        "“Único código federal” descreve algo que não existe. “Anterior ao Estado de Direito” contraria a ideia central: a disciplina nasce com a submissão do Estado à lei. “Só a União legisla” ignora a autonomia dos entes. “Ramo do direito privado” também está errado: é ramo do direito público.",
      pegadinha: "Competência privativa da União para normas gerais de licitação não significa competência para toda a matéria administrativa.",
      conhecimento:
        "Na França, a criação do Conselho de Estado e o Caso Blanco, de 1873, são marcos da autonomia da disciplina.",
    },
  ],
};
