import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-02",
  resumo: {
    ideia:
      "O Direito Administrativo organiza a função administrativa do Estado. Para entendê-lo, é preciso separar Estado, governo e Administração, e saber de onde vêm suas regras.",
    itens: [
      {
        termo: "Conceito atual",
        faz: "Ramo do direito público que rege a função administrativa, seus órgãos, agentes e atividades.",
      },
      {
        termo: "Fontes",
        faz: "A lei é a fonte principal. Doutrina, jurisprudência e costumes são secundárias.",
        pista: "Súmula vinculante obriga a Administração, por isso a doutrina a trata à parte.",
      },
      {
        termo: "Sistema de jurisdição única",
        faz: "É o modelo brasileiro: o Judiciário dá a palavra final (art. 5º, XXXV, da CF).",
      },
      {
        termo: "Contencioso administrativo",
        faz: "Modelo francês: há uma justiça administrativa separada, com decisão definitiva.",
      },
      {
        termo: "Elementos do Estado",
        faz: "Povo, território e governo soberano.",
      },
      {
        termo: "Governo",
        faz: "Função política: fixa objetivos e planos, com ampla liberdade de decisão.",
      },
      {
        termo: "Administração Pública",
        faz: "Função de execução: aplica as decisões, sob a lei e de forma técnica.",
      },
      {
        termo: "Sentido subjetivo",
        faz: "Olha quem exerce: órgãos, entidades e agentes. Também se diz formal ou orgânico.",
      },
      {
        termo: "Sentido objetivo",
        faz: "Olha a atividade: serviço público, polícia administrativa, fomento e intervenção.",
        pista: "Também se diz material ou funcional.",
      },
      {
        termo: "Funções típicas",
        faz: "Cada Poder tem uma função principal e exerce as outras de forma atípica.",
        pista: "O Judiciário também administra quando faz licitação.",
      },
    ],
    cuidado: "Esgotar a via administrativa não é requisito geral para ir ao Judiciário, salvo exceções como a Justiça Desportiva.",
  },
  questoes: [
    {
      topico: "Sistemas administrativos",
      subassunto: "Jurisdição única",
      dificuldade: 4,
      raciocinio: "No Brasil, a última palavra é do Judiciário.",
      enunciado:
        "Um motorista perde o recurso administrativo contra a multa em última instância e leva a mesma questão ao Judiciário. Quanto ao sistema adotado no Brasil, é correto afirmar que",
      alternativas: [
        "a decisão final do órgão de trânsito faz coisa julgada absoluta",
        "o contencioso administrativo impede a nova análise da matéria",
        "cabe só ação rescisória, pois a matéria já foi decidida",
        "a decisão só pode ser revista por tribunal administrativo",
        "cabe ação, pois o Judiciário pode rever a legalidade da decisão",
      ],
      correta: 4,
      explicacao: "O Brasil adota a jurisdição única. Pelo art. 5º, XXXV, da CF, a lei não exclui do Judiciário lesão ou ameaça a direito.",
      explicacaoErradas:
        "“coisa julgada absoluta” não existe nesse sentido. A chamada coisa julgada administrativa só impede a revisão na própria Administração. “contencioso administrativo” é o modelo francês. “ação rescisória” e “tribunal administrativo” não se aplicam.",
      pegadinha: "Confundir coisa julgada administrativa com coisa julgada judicial.",
      conhecimento: "Tribunais administrativos brasileiros, como as Jaris, não têm jurisdição.",
    },
    {
      topico: "Administração Pública",
      subassunto: "Sentido objetivo",
      dificuldade: 4,
      raciocinio: "Olhe para o que está sendo feito, e não para quem faz.",
      enunciado:
        "A frase “a concessionária presta transporte coletivo, e por isso exerce atividade administrativa” usa a expressão Administração Pública no sentido",
      alternativas: [
        "subjetivo, por olhar a entidade que atua",
        "formal, por olhar o conjunto de órgãos",
        "objetivo, por olhar a atividade exercida",
        "orgânico, por olhar a estrutura do Estado",
        "político, por olhar os planos de governo",
      ],
      correta: 2,
      explicacao: "O sentido objetivo, material ou funcional considera a atividade. A concessionária não integra a Administração, mas presta serviço público.",
      explicacaoErradas:
        "“subjetivo”, “formal” e “orgânico” são sinônimos e olham quem integra a estrutura. “político” é função de governo, e não sentido da expressão Administração Pública.",
      pegadinha: "Pensar que a concessionária integra a Administração no sentido formal.",
      conhecimento: "No sentido subjetivo, o Brasil adota critério formal: só é Administração o que a lei diz que é.",
    },
    {
      topico: "Administração Pública",
      subassunto: "Atividades",
      dificuldade: 5,
      raciocinio: "Fomento incentiva. Polícia limita. Intervenção regula o domínio econômico.",
      enunciado:
        "Uma linha de crédito pública a juros menores para empresas que renovam frotas de transporte de cargas, sem obrigá-las a aderir, é exemplo de atividade administrativa de",
      alternativas: [
        "serviço público, por haver prestação direta de utilidade material",
        "fomento, por incentivar uma atividade privada de interesse público",
        "polícia administrativa, por condicionar uma atividade econômica",
        "intervenção direta, pois o Estado passa a explorar o setor",
        "função política, pois todo incentivo é um ato de governo",
      ],
      correta: 1,
      explicacao: "Fomento é o incentivo ao particular que realiza atividade de interesse público, por exemplo com crédito, subsídio ou isenção.",
      explicacaoErradas:
        "“serviço público” pede prestação de utilidade à coletividade. “polícia administrativa” restringe, e o caso apenas estimula. “explorar o setor” não aconteceu. “ato de governo” não descreve a execução de um programa de crédito.",
      pegadinha: "Ver restrição onde há só incentivo.",
      conhecimento: "As quatro atividades clássicas são fomento, polícia, serviço público e intervenção.",
    },
    {
      topico: "Governo e Administração",
      subassunto: "Distinção",
      dificuldade: 4,
      raciocinio: "Governo decide o rumo. Administração executa.",
      enunciado:
        "Sobre a relação entre governo e Administração Pública, assinale a opção correta.",
      alternativas: [
        "o governo exerce atividade neutra, técnica e subordinada",
        "a Administração escolhe livremente as políticas do Estado",
        "os dois termos têm sentido igual no direito brasileiro",
        "o governo define políticas, e a Administração as executa",
        "a Administração só existe no Poder Executivo, sem exceção",
      ],
      correta: 3,
      explicacao: "O governo fixa objetivos e diretrizes, com independência política. A Administração executa, com neutralidade, hierarquia e submissão à lei.",
      explicacaoErradas:
        "“neutra, técnica e subordinada” descreve a Administração. “escolhe livremente” descreve o governo. “sentido igual” apaga a distinção. “sem exceção” esquece que o Legislativo e o Judiciário também têm função administrativa.",
      pegadinha: "Inverter as características dos dois.",
      conhecimento: "A Administração é instrumento do Estado para pôr em prática as opções políticas do governo.",
    },
    {
      topico: "Fontes",
      subassunto: "Costume e jurisprudência",
      dificuldade: 5,
      raciocinio: "A prática repetida não vence a lei.",
      enunciado:
        "Há anos, um setor administrativo dispensa certo documento exigido por lei, e todos os servidores agem assim. Quanto às fontes do Direito Administrativo, essa prática",
      alternativas: [
        "revogou a exigência, pois o costume é fonte primária",
        "obriga novas decisões, pois já há precedente administrativo",
        "vale apenas se tiver sido registrada em ato interno do setor",
        "não afasta a lei, pois o costume contra a lei não é admitido",
        "vale até uma decisão contrária do Tribunal de Contas da União",
      ],
      correta: 3,
      explicacao: "O costume é fonte secundária e pode ajudar a suprir lacunas, mas não derroga a lei, por causa da legalidade.",
      explicacaoErradas:
        "“fonte primária” é a lei. “precedente administrativo” não vale contra a lei. “ato interno” não afasta exigência legal. “decisão contrária” inverte a ordem, pois a prática já é ilegal.",
      pegadinha: "Dar ao costume força de revogar a lei.",
      conhecimento: "A praxe administrativa é a rotina interna de repartição, e a doutrina a distingue do costume.",
    },
    {
      topico: "Estado",
      subassunto: "Elementos e poderes",
      dificuldade: 4,
      raciocinio: "Função típica de um Poder pode aparecer, de forma atípica, em outro.",
      enunciado:
        "Um tribunal faz licitação para comprar computadores, e o Senado julga o Presidente da República em crime de responsabilidade. Essas situações mostram, respectivamente, exercício de função",
      alternativas: [
        "administrativa e jurisdicional, ambas de modo atípico",
        "típica nos dois casos, pois cada Poder cuida de si mesmo",
        "legislativa e administrativa, ambas de modo atípico",
        "política e judicial, sem nenhum caráter administrativo",
        "administrativa típica e legislativa atípica, nessa ordem",
      ],
      correta: 0,
      explicacao: "A licitação do tribunal é função administrativa atípica do Judiciário. O julgamento pelo Senado é função jurisdicional atípica do Legislativo.",
      explicacaoErradas:
        "“típica nos dois casos” ignora a função principal de cada Poder. “legislativa e administrativa” erra as duas. “sem nenhum caráter administrativo” falha na licitação. “legislativa atípica” erra o segundo caso.",
      pegadinha: "Achar que o Poder define sozinho a natureza do ato.",
      conhecimento: "Por isso o Direito Administrativo alcança atos dos três Poderes.",
    },
    {
      topico: "Conceito",
      subassunto: "Critérios",
      dificuldade: 5,
      raciocinio: "O conceito atual vai além do serviço público e do Poder Executivo.",
      enunciado:
        "O critério que define o Direito Administrativo como o conjunto de normas sobre os serviços públicos foi criticado porque",
      alternativas: [
        "o Estado exerce também outras atividades, como polícia e fomento",
        "o Estado brasileiro não presta serviço público, salvo por concessionárias",
        "só o Poder Judiciário pode prestar serviços públicos essenciais",
        "o serviço público deixou de existir com a Constituição de 1988",
        "toda atividade do Estado já é serviço público em sentido estrito",
      ],
      correta: 0,
      explicacao: "A crítica é que o critério deixa de fora outras atividades administrativas, como polícia administrativa, fomento e intervenção.",
      explicacaoErradas:
        "“salvo por concessionárias” contraria o art. 175 da CF, que admite prestação direta. “só o Poder Judiciário” e “deixou de existir” não têm base. “toda atividade” é o exagero da própria escola, e não a crítica feita a ela.",
      pegadinha: "Tomar a tese da escola pela crítica a ela.",
      conhecimento: "O critério do Poder Executivo também falha, pois os outros Poderes administram.",
    },
  ],
};
