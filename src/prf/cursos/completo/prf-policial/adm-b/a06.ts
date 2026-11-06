import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-b-06",
  resumo: {
    ideia:
      "A organização administrativa mostra como o Estado distribui tarefas entre órgãos, que não têm personalidade, e entidades, que têm. Órgão se cria por lei, e entidade da indireta depende de lei específica.",
    itens: [
      {
        termo: "Órgão x entidade",
        faz: "Órgão é unidade sem personalidade, na direta ou na indireta. Entidade tem personalidade jurídica própria.",
      },
      {
        termo: "Posição do órgão",
        faz: "Independentes, autônomos, superiores e subalternos, do topo da estrutura à base.",
        pista: "Congresso, Presidência e tribunais são independentes; ministérios, autônomos.",
      },
      {
        termo: "Estrutura e atuação",
        faz: "Simples não tem outro órgão dentro; composto tem. Singular decide por uma pessoa; colegiado, pelo conjunto.",
      },
      {
        termo: "Criação de órgão",
        faz: "Depende de lei (CF, art. 48, XI). Decreto só organiza, sem despesa nova e sem criar ou extinguir órgão.",
      },
      {
        termo: "Iniciativa",
        faz: "No Executivo, a iniciativa da lei é privativa do seu chefe, também nos estados e municípios por simetria.",
      },
      {
        termo: "Contrato do art. 37, § 8º",
        faz: "Amplia a autonomia de órgãos e entidades em troca de metas de desempenho. A lei trata de prazo, controles e remuneração.",
      },
      {
        termo: "Fundações",
        faz: "Lei específica autoriza a criação, e lei complementar define as áreas de atuação.",
      },
      {
        termo: "Agência executiva",
        faz: "É título dado a autarquia ou fundação já existente, com plano de reestruturação e contrato de gestão.",
      },
    ],
    cuidado:
      "CNPJ não dá personalidade jurídica ao órgão: é só um registro para fins fiscais.",
  },
  questoes: [
    {
      topico: "Classificação dos órgãos",
      subassunto: "Posição estatal",
      dificuldade: 4,
      raciocinio: "Do topo para a base: vem da Constituição, dirige, decide e executa.",
      enunciado:
        "Na classificação de Hely Lopes Meirelles quanto à posição estatal, a Câmara dos Deputados, um ministério, um departamento ministerial e uma seção de expediente são, respectivamente, órgãos",
      alternativas: [
        "autônomos, independentes, subalternos e superiores",
        "independentes, superiores, autônomos e subalternos",
        "independentes, autônomos, superiores e subalternos",
        "superiores, autônomos, independentes e subalternos",
        "autônomos, superiores, subalternos e independentes",
      ],
      correta: 2,
      explicacao:
        "Independentes vêm da Constituição, sem subordinação. Autônomos ficam logo abaixo, com autonomia, como os ministérios. Superiores dirigem sem autonomia. Subalternos executam.",
      explicacaoErradas:
        "“Autônomos, independentes” troca as duas primeiras posições. “Independentes, superiores, autônomos” inverte o ministério e o departamento. “Superiores, autônomos, independentes” e “autônomos, superiores, subalternos” deslocam o órgão constitucional do topo.",
      pegadinha: "Autônomo fica abaixo do independente, mesmo com nome forte.",
      conhecimento:
        "Hely também põe entre os independentes o Ministério Público e os Tribunais de Contas, ponto discutido por alguns autores.",
    },
    {
      topico: "Classificação dos órgãos",
      subassunto: "Estrutura e atuação",
      dificuldade: 4,
      raciocinio: "Uma coisa é a estrutura; outra é como a vontade é formada.",
      enunciado:
        "Um conselho federal decide por voto dos seus membros e não possui nenhum outro órgão dentro de si. Uma diretoria, chefiada por uma pessoa que decide sozinha, reúne várias coordenações. Esses órgãos são, respectivamente,",
      alternativas: [
        "singular e simples; colegiado e composto",
        "simples e colegiado; composto e singular",
        "composto e colegiado; simples e singular",
        "colegiado e composto; singular e simples",
        "simples e singular; composto e colegiado",
      ],
      correta: 1,
      explicacao:
        "Sem outros órgãos dentro, é simples; com outros, é composto. Decisão em conjunto caracteriza o colegiado; decisão de uma pessoa, o singular.",
      explicacaoErradas:
        "“Singular e simples; colegiado e composto” erra o modo de decidir do conselho e da diretoria. “Composto e colegiado” diz que o conselho tem órgãos internos. “Colegiado e composto; singular e simples” também inverte a estrutura. “Simples e singular” ignora a votação.",
      pegadinha: "Ter muitos membros não torna o órgão composto: composição se mede em órgãos, não em pessoas.",
      conhecimento:
        "Carvalho Filho fala ainda em órgãos diretivos e subordinados.",
    },
    {
      topico: "Órgãos",
      subassunto: "CNPJ e contrato de desempenho",
      dificuldade: 5,
      raciocinio: "O art. 37, § 8º, é sobre metas, e o CNPJ não muda a natureza do órgão.",
      enunciado:
        "Um órgão da Administração direta tem CNPJ próprio e firma com o poder público contrato que fixa metas de desempenho e amplia sua autonomia gerencial. Sobre o caso, é correto afirmar que",
      alternativas: [
        "o CNPJ transforma o órgão em pessoa jurídica, com patrimônio próprio",
        "o contrato só seria possível se o órgão tivesse sido antes convertido em autarquia por decreto do Presidente",
        "o CNPJ é vedado a qualquer órgão sem personalidade jurídica, por falta de capacidade de ser parte",
        "o contrato é admitido, e cabe à lei tratar de prazo, controles e remuneração",
        "o contrato é vedado, pois a Constituição não prevê metas para a Administração direta, só para a indireta",
      ],
      correta: 3,
      explicacao:
        "O art. 37, § 8º, da Constituição prevê o contrato para órgãos e entidades da direta e da indireta. Cabe à lei dispor sobre prazo, controles e critérios de avaliação e remuneração do pessoal. O CNPJ é registro fiscal, sem dar personalidade.",
      explicacaoErradas:
        "“Transforma o órgão em pessoa jurídica” confunde cadastro com personalidade. “Convertido em autarquia” e “só para a indireta” limitam um texto que fala em órgãos e entidades. “Vedado a qualquer órgão” contraria a prática: órgãos podem ter CNPJ.",
      pegadinha: "A doutrina critica a ideia de contrato entre órgão e a própria pessoa, mas a Constituição a prevê.",
      conhecimento:
        "Esse instrumento veio com a EC 19/1998. A Lei 13.934/2019 o regulamentou com o nome de contrato de desempenho.",
    },
    {
      topico: "Criação de órgãos",
      subassunto: "Lei e decreto",
      dificuldade: 5,
      raciocinio: "Decreto organiza; não cria nem extingue órgão.",
      enunciado:
        "Com a meta de reduzir custos, o Presidente da República pretende, por decreto, extinguir uma secretaria de um ministério, reagrupando suas tarefas. Quanto a essa medida,",
      alternativas: [
        "é válida, pois o Presidente pode extinguir órgãos por decreto se não aumentar a despesa",
        "é válida apenas com autorização do ministro da pasta",
        "é inválida, porque a extinção de órgão exige lei",
        "é inválida, porque só o Congresso pode reorganizar um ministério sem qualquer ato do Presidente",
        "é válida porque, se a lei criou o órgão, o decreto pode extingui-lo por simetria de formas",
      ],
      correta: 2,
      explicacao:
        "Art. 84, VI, “a”: por decreto, o Presidente dispõe sobre organização e funcionamento, quando não houver aumento de despesa nem criação ou extinção de órgãos. Art. 48, XI: a criação e a extinção de ministérios e órgãos cabem à lei.",
      explicacaoErradas:
        "“Se não aumentar a despesa” esquece a segunda condição do art. 84, VI, “a”. “Autorização do ministro” não supre a lei. “Sem qualquer ato do Presidente” erra, pois o Presidente organiza por decreto e tem iniciativa da lei. “Simetria de formas” aponta para a lei, e não para o decreto.",
      pegadinha: "Sem aumento de despesa não é o único requisito: criar ou extinguir órgão continua vedado.",
      conhecimento:
        "O inciso VI, “b”, permite extinguir por decreto função ou cargo vago, o que é diferente de extinguir órgão.",
    },
    {
      topico: "Criação de órgãos",
      subassunto: "Iniciativa e simetria",
      dificuldade: 5,
      raciocinio: "Quem tem a iniciativa é o chefe do Poder que terá o órgão.",
      enunciado:
        "Um deputado apresenta projeto que cria novo órgão na estrutura do Poder Executivo federal. O projeto é aprovado e sancionado. Pela Constituição e pela jurisprudência,",
      alternativas: [
        "não há vício, pois a lei é o instrumento certo e a iniciativa é irrelevante",
        "a sanção supre o vício de iniciativa, por isso a lei é válida",
        "o vício só existiria se o órgão fosse criado em estado ou município, jamais na esfera federal",
        "há vício de iniciativa, reservada ao Presidente",
        "a iniciativa era do Senado, por ser a Casa que representa os estados na Federação brasileira",
      ],
      correta: 3,
      explicacao:
        "O art. 61, § 1º, II, “e”, reserva ao Presidente a iniciativa de leis sobre criação e extinção de ministérios e órgãos da Administração. O vício não é sanado pela sanção, e a regra se aplica por simetria aos estados e municípios.",
      explicacaoErradas:
        "“A iniciativa é irrelevante” contraria o art. 61. “A sanção supre” foi superada: a Súmula 5 do STF, que dizia isso, não é mais aplicada. “Jamais na esfera federal” inverte a regra. “Do Senado” é invenção.",
      pegadinha: "Vício de iniciativa é inconstitucionalidade formal e não se corrige pela sanção.",
      conhecimento:
        "Na ADI 1.275, o STF aplicou a regra por simetria a uma lei estadual.",
    },
    {
      topico: "Órgãos no Legislativo",
      subassunto: "Resolução e lei",
      dificuldade: 5,
      raciocinio: "Cargo da Casa, por resolução; remuneração, por lei.",
      enunciado:
        "A Câmara dos Deputados pretende criar cargos nos seus serviços e fixar a respectiva remuneração. Pela Constituição, os instrumentos são",
      alternativas: [
        "lei de iniciativa do Presidente da República para os dois atos, porque a Casa não dispõe sobre pessoal",
        "decreto legislativo para os dois atos, por tratar-se de matéria interna",
        "resolução para criar os cargos e lei para fixar a remuneração",
        "resolução para os dois atos, inclusive para a remuneração, sem sanção do Presidente",
        "emenda ao regimento interno",
      ],
      correta: 2,
      explicacao:
        "Art. 51, IV: a Câmara dispõe sobre sua organização, funcionamento, polícia e criação, transformação ou extinção de cargos de seus serviços, com iniciativa de lei para fixar a remuneração. O art. 52, XIII, traz regra igual para o Senado.",
      explicacaoErradas:
        "“Iniciativa do Presidente da República” ignora a competência privativa. “Decreto legislativo” não é o ato usado aqui. “Resolução para os dois atos” esquece a lei da remuneração. “Emenda ao regimento” não cria cargos remunerados.",
      pegadinha: "A remuneração sempre exige lei, mesmo dentro do Legislativo.",
      conhecimento:
        "A iniciativa da lei sobre a remuneração é da própria Casa.",
    },
    {
      topico: "Conceitos legais",
      subassunto: "Órgão, entidade e autoridade",
      dificuldade: 4,
      raciocinio: "Lei 9.784: órgão aparece também na indireta.",
      enunciado:
        "Pelos conceitos da Lei 9.784/1999, a diretoria de uma autarquia federal e a própria autarquia são, respectivamente,",
      alternativas: [
        "entidade e órgão, pois a personalidade é da diretoria que decide pela autarquia",
        "órgão e entidade",
        "órgãos, porque toda a Administração indireta é composta só por órgãos sem personalidade",
        "entidades, porque tudo que existe na Administração indireta tem personalidade própria",
        "autoridade e órgão, porque a diretoria é um agente e a autarquia é uma unidade da direta",
      ],
      correta: 1,
      explicacao:
        "O art. 1º, § 2º, define órgão como unidade de atuação da estrutura da direta e da indireta, entidade como unidade com personalidade jurídica e autoridade como agente com poder de decisão.",
      explicacaoErradas:
        "“Entidade e órgão” inverte os conceitos. “Órgãos, porque toda a Administração indireta” nega a personalidade da autarquia. “Entidades, porque tudo” a dá também ao órgão interno. “Autoridade e órgão” erra os dois.",
      pegadinha: "Dentro de uma entidade também há órgãos.",
      conhecimento:
        "A desconcentração ocorre dentro de uma pessoa, inclusive em entidade da indireta.",
    },
    {
      topico: "Fundações",
      subassunto: "Lei específica e lei complementar",
      dificuldade: 5,
      raciocinio: "Art. 37, XIX, exige duas leis, de naturezas diferentes.",
      enunciado:
        "Para instituir uma fundação pública de direito privado, o inciso XIX do art. 37 da Constituição exige",
      alternativas: [
        "só lei complementar, que cria diretamente a fundação e já lhe dá personalidade jurídica",
        "só decreto do chefe do Executivo, depois de aprovação do estatuto pelo Ministério Público",
        "lei específica que crie a entidade, sem necessidade de registro, e lei ordinária sobre suas áreas",
        "lei ordinária qualquer, desde que trate de vários temas do mesmo ministério",
        "lei específica que autorize e lei complementar que defina as áreas de atuação",
      ],
      correta: 4,
      explicacao:
        "Lei específica autoriza a instituição da fundação. Cabe à lei complementar definir as áreas de sua atuação. A de direito privado adquire personalidade com o registro dos atos constitutivos.",
      explicacaoErradas:
        "“Só lei complementar” cria o que depende de lei específica. “Só decreto” dispensa a lei. “Sem necessidade de registro” descreve a fundação de direito público, e “lei ordinária sobre suas áreas” erra a espécie. “Vários temas” contraria a ideia de lei específica.",
      pegadinha: "A fundação de direito público é criada diretamente pela lei, como uma autarquia.",
      conhecimento:
        "A lei complementar do art. 37, XIX, ainda não foi editada.",
    },
    {
      topico: "Agência executiva",
      subassunto: "Qualificação",
      dificuldade: 5,
      raciocinio: "Não é entidade nova: é um título dado a entidade que já existe.",
      enunciado:
        "Uma autarquia federal apresenta plano de reestruturação e desenvolvimento institucional, celebra contrato de gestão com o ministério supervisor e recebe a qualificação de agência executiva. Sobre isso, é correto afirmar que",
      alternativas: [
        "surgiu uma nova pessoa jurídica, que substitui a autarquia e assume suas atribuições",
        "a autarquia passa a ser empresa pública, com regime de direito privado",
        "a qualificação depende de lei específica que crie uma nova entidade reguladora do setor",
        "a qualificação é dada por ato do Executivo e pode alcançar autarquias e fundações",
        "a qualificação só cabe a entidades privadas sem fins lucrativos que recebam verbas federais",
      ],
      correta: 3,
      explicacao:
        "Agência executiva é título conferido por ato do Executivo a autarquia ou fundação que cumpra os requisitos da Lei 9.649/1998. A entidade continua a mesma.",
      explicacaoErradas:
        "“Nova pessoa jurídica” e “passa a ser empresa pública” desconsideram que é só um título. “Nova entidade reguladora” confunde com agência reguladora. “Entidades privadas sem fins lucrativos” descreve OS ou OSCIP.",
      pegadinha: "Agência reguladora nasce da lei; agência executiva é qualificação de entidade já existente.",
      conhecimento:
        "A perda da qualificação também ocorre por ato do Executivo, sem extinguir a entidade.",
    },
  ],
};
