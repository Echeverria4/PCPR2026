import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "etica-04",
  resumo: {
    ideia:
      "O Código de Conduta da Alta Administração Federal dá regras para as autoridades do topo do governo, com foco em evitar conflito entre o interesse público e o privado.",
    itens: [
      {
        termo: "Quem se submete",
        faz: "Ministros e Secretários de Estado, cargos de natureza especial, secretários-executivos e equivalentes de nível mais alto, e presidentes e diretores de agências, autarquias, fundações, empresas públicas e sociedades de economia mista.",
      },
      {
        termo: "Patrimônio",
        faz: "Em 10 dias da posse, a autoridade informa à CEP a situação que possa gerar conflito e como vai evitá-lo.",
      },
      {
        termo: "Alterações relevantes",
        faz: "Devem ser comunicadas à CEP imediatamente.",
      },
      {
        termo: "Investimentos",
        faz: "É vedado investir em bens afetados por decisão sobre a qual a autoridade tenha informação privilegiada.",
      },
      {
        termo: "Participação societária",
        faz: "Acima de 5% do capital de certas empresas, o fato se torna público.",
      },
      {
        termo: "Seminários",
        faz: "Permitidos, se a remuneração for pública e o promotor não tiver interesse em decisão da autoridade.",
      },
      {
        termo: "Presentes",
        faz: "Vedados, salvo de autoridades estrangeiras, em casos protocolares com reciprocidade.",
      },
      {
        termo: "Propostas de trabalho",
        faz: "Informadas à CEP de imediato, aceitas ou rejeitadas.",
      },
      {
        termo: "Sanções",
        faz: "Advertência para quem está no cargo e censura ética para quem já saiu. Quem aplica é a CEP.",
        pista: "A CEP pode sugerir a demissão ao superior.",
      },
    ],
    cuidado:
      "Os prazos do processo aqui são de 5 e de 3 dias. Os de 10 dias são do Decreto 6.029/2007.",
  },
  questoes: [
    {
      topico: "Alcance do Código",
      subassunto: "Autoridades submetidas",
      dificuldade: 5,
      raciocinio: "O Código olha o topo, inclusive da administração indireta.",
      enunciado:
        "Pelo Código de Conduta da Alta Administração Federal, entre os agentes abaixo, o submetido às suas normas é",
      alternativas: [
        "o policial rodoviário federal que chefia um posto na rodovia",
        "o diretor de uma sociedade de economia mista federal",
        "o juiz federal que preside uma vara da Justiça Federal",
        "o secretário municipal de um município do interior",
        "o deputado federal que integra a Mesa da Câmara",
      ],
      correta: 1,
      explicacao:
        "O Código alcança presidentes e diretores de agências nacionais, autarquias, fundações, empresas públicas e sociedades de economia mista.",
      explicacaoErradas:
        "“chefia um posto” não é cargo da alta administração. “juiz federal” e “deputado federal” estão em outros Poderes. “secretário municipal” está em outro ente.",
      pegadinha: "Achar que empresa estatal fica fora do Código.",
      conhecimento: "Ministros e Secretários de Estado também estão na lista.",
    },
    {
      topico: "Patrimônio",
      subassunto: "Informação à CEP",
      dificuldade: 4,
      raciocinio: "A regra corre desde a posse.",
      enunciado:
        "Uma autoridade submetida ao Código tem bens que podem gerar conflito com o interesse público. Ela deve informar a CEP",
      alternativas: [
        "em 30 dias da nomeação, apenas se o conflito já tiver ocorrido",
        "em 5 dias da posse, indicando o valor de mercado de cada bem",
        "em 10 dias da posse, indicando o modo pelo qual irá evitar o conflito",
        "em 10 dias da exoneração, por meio da declaração anual de bens e rendas",
        "somente quando a CEP abrir um processo a respeito da situação",
      ],
      correta: 2,
      explicacao:
        "Além da declaração de bens, a autoridade envia à CEP, em 10 dias da posse, as informações sobre a situação que, real ou potencialmente, possa gerar conflito, indicando como irá evitá-lo.",
      explicacaoErradas:
        "“apenas se o conflito já tiver ocorrido” ignora o conflito potencial. “5 dias” e “valor de mercado” fogem da regra. “exoneração” erra o marco. “quando a CEP abrir um processo” retira o caráter preventivo.",
      pegadinha: "Esperar o conflito acontecer para informar.",
      conhecimento: "Alterações relevantes no patrimônio são comunicadas imediatamente.",
    },
    {
      topico: "Patrimônio",
      subassunto: "Participação em empresas",
      dificuldade: 5,
      raciocinio: "A regra é tornar público, não vender.",
      enunciado:
        "Uma autoridade tem 8% do capital de uma empresa que negocia com o Poder Público. Pelo Código de Conduta, ela deve",
      alternativas: [
        "vender a participação antes de tomar posse no cargo",
        "transferir as ações a um parente, para evitar o conflito",
        "pedir exoneração, pois a situação é incompatível com o cargo",
        "tornar público esse fato, pois a participação supera 5%",
        "apenas guardar em sigilo, pois o dado é da sua vida privada",
      ],
      correta: 3,
      explicacao: "A participação superior a 5% em empresa que negocie com o Poder Público deve ser tornada pública.",
      explicacaoErradas:
        "“vender a participação” e “pedir exoneração” exigem mais que a regra. “transferir as ações a um parente” é ato de gestão a comunicar, e não a solução. “guardar em sigilo” é o oposto do que se pede.",
      pegadinha: "Achar que a participação é sempre proibida.",
      conhecimento: "A regra vale também para sociedade de economia mista e instituição financeira.",
    },
    {
      topico: "Favores e presentes",
      subassunto: "Seminários",
      dificuldade: 5,
      raciocinio: "São duas condições, e as duas precisam estar presentes.",
      enunciado:
        "Uma autoridade é convidada a dar palestra paga em um congresso. A empresa promotora tem um pedido em análise, que será decidido por essa mesma autoridade. Pelo Código, a participação",
      alternativas: [
        "não é permitida, porque o promotor tem interesse em decisão dela",
        "é permitida, desde que a remuneração seja tornada pública",
        "é permitida, desde que ela não aceite as despesas de viagem",
        "é permitida, se a CEP for avisada até 10 dias depois do evento",
        "não é permitida, pois autoridades nunca vão a eventos privados",
      ],
      correta: 0,
      explicacao:
        "A participação é permitida se a remuneração for pública e o promotor não tiver interesse em decisão a ser tomada pela autoridade. A segunda condição falha.",
      explicacaoErradas:
        "“tornada pública” atende só a uma das condições. “despesas de viagem” e “avisada até 10 dias” não resolvem o interesse do promotor. “nunca vão a eventos” exagera, pois a regra geral permite.",
      pegadinha: "Parar na primeira condição.",
      conhecimento: "Transporte e hospedagem de particulares não podem gerar dúvida sobre a probidade.",
    },
    {
      topico: "Favores e presentes",
      subassunto: "Presentes",
      dificuldade: 4,
      raciocinio: "A exceção tem três elementos: origem, ocasião e reciprocidade.",
      enunciado: "Pelo Código de Conduta, uma autoridade pode aceitar presente",
      alternativas: [
        "de empresa nacional, se for entregue em evento oficial",
        "de amigo pessoal, se ele tiver contrato com o órgão",
        "de autoridade estrangeira, em caso protocolar com reciprocidade",
        "de autoridade estrangeira, em qualquer caso, se for de pequeno valor",
        "de qualquer pessoa, se ela declarar o bem à CEP depois de um ano",
      ],
      correta: 2,
      explicacao:
        "A aceitação de presentes é vedada, salvo de autoridades estrangeiras nos casos protocolares em que houver reciprocidade.",
      explicacaoErradas:
        "“empresa nacional” e “amigo pessoal” não estão na exceção. “em qualquer caso” retira as condições. “declarar o bem à CEP” não autoriza o recebimento.",
      pegadinha: "Achar que basta ser autoridade estrangeira.",
      conhecimento: "Brindes têm tratamento próprio e não se confundem com presentes.",
    },
    {
      topico: "Conduta no cargo",
      subassunto: "Divergências e opinião pública",
      dificuldade: 5,
      raciocinio: "As divergências ficam dentro da Administração.",
      enunciado:
        "Dois dirigentes federais divergem sobre um programa. Um deles quer criticar em entrevista o desempenho funcional do outro. Pelo Código de Conduta,",
      alternativas: [
        "a crítica é livre, pela liberdade de expressão da autoridade",
        "a crítica é livre, se ela vier com base em dados oficiais",
        "a crítica depende de autorização prévia da CEP para ser feita",
        "a divergência deve ser levada à Justiça antes de ser divulgada na imprensa",
        "a divergência se resolve internamente, e a crítica pública é vedada",
      ],
      correta: 4,
      explicacao:
        "As divergências são resolvidas internamente, por coordenação administrativa. É vedado opinar publicamente sobre a honorabilidade e o desempenho funcional de outra autoridade federal.",
      explicacaoErradas:
        "“liberdade de expressão” e “dados oficiais” não afastam a vedação. “autorização prévia da CEP” não existe para esse caso. “levada à Justiça” foge da coordenação administrativa.",
      pegadinha: "Achar que a crítica vale se for verdadeira.",
      conhecimento: "Também é vedado opinar sobre o mérito de questão que a autoridade vai decidir.",
    },
    {
      topico: "Conduta no cargo",
      subassunto: "Propostas de trabalho",
      dificuldade: 4,
      raciocinio: "O dever nasce com a proposta, não com o aceite.",
      enunciado:
        "Uma diretora de autarquia federal recebe proposta de emprego de uma empresa privada e a recusa no mesmo dia. Pelo Código de Conduta, essa proposta",
      alternativas: [
        "não precisa ser informada, pois foi recusada no mesmo dia",
        "deve ser informada à CEP de imediato, mesmo com a recusa",
        "deve ser informada apenas no momento em que ela deixar o cargo",
        "deve ser informada só ao superior imediato, em caráter pessoal",
        "só precisaria ser informada se a empresa tivesse contrato público",
      ],
      correta: 1,
      explicacao:
        "Propostas de trabalho ou negócio futuro no setor privado são informadas de imediato à CEP, independentemente de aceitação ou rejeição.",
      explicacaoErradas:
        "“recusada no mesmo dia” não afasta o dever. “ao deixar o cargo” erra o momento. “superior imediato” erra o destinatário. “contrato público” cria condição inexistente.",
      pegadinha: "Achar que a recusa elimina o dever.",
      conhecimento: "A CEP informa à autoridade as obrigações ligadas ao trabalho no setor privado depois do cargo.",
    },
    {
      topico: "Sanções",
      subassunto: "Advertência e censura ética",
      dificuldade: 5,
      raciocinio: "A sanção depende de a autoridade estar ou não no cargo.",
      enunciado:
        "A CEP conclui que um ex-diretor de empresa pública, que já saiu do cargo, violou o Código de Conduta quando estava em exercício. A providência cabível é",
      alternativas: [
        "advertência, aplicada pela CEP, com aviso ao superior",
        "advertência, aplicada pela Comissão de Ética da empresa",
        "censura ética, aplicada pela CEP",
        "censura ética, aplicada pelo Ministro da pasta",
        "demissão, aplicada pela própria CEP",
      ],
      correta: 2,
      explicacao:
        "Advertência vale para quem está no cargo. Censura ética vale para quem já saiu. As duas são aplicadas pela CEP, que pode sugerir a demissão à autoridade superior.",
      explicacaoErradas:
        "“advertência” vale para quem segue no cargo. “Comissão de Ética da empresa” e “Ministro da pasta” erram o órgão. “demissão” a CEP apenas sugere.",
      pegadinha: "Trocar a sanção de quem está no cargo pela de quem saiu.",
      conhecimento: "Nesse processo, a autoridade tem 5 dias para se manifestar e, depois das diligências, mais 3 dias.",
    },
  ],
};
