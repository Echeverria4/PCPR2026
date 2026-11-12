import type { MapaAula } from "../tipos";

/** Ética e Cidadania: um mapa por aula, na ordem do curso. */
export const MAPAS_ETICA: MapaAula[] = [
  {
    aula: "etica-01",
    centro: { titulo: "Ética e moral", emoji: "🧭" },
    desenho: "cerebro",
    ramos: [
      {
        rotulo: "Ética",
        emoji: "🤔",
        cor: "azul",
        folhas: [
          "Vem do grego **ethos**",
          "**Reflete** sobre valores e regras",
          "Pergunta se a regra é justa",
        ],
      },
      {
        rotulo: "Moral",
        emoji: "📜",
        cor: "verde",
        folhas: [
          "Vem do latim **mos, mores**: costumes",
          "**Regras** de um grupo em certa época",
          "Muda com o tempo e o lugar",
        ],
      },
      {
        rotulo: "Juízos",
        emoji: "🔍",
        cor: "ouro",
        folhas: [
          "**De fato**: descreve, dá para conferir",
          "Exemplo: “a viatura está parada”",
          "**De valor**: avalia se é bom ou justo",
          "Exemplo: “parar ali foi errado”",
        ],
      },
      {
        rotulo: "Doutrinas",
        emoji: "🏛️",
        cor: "roxo",
        folhas: [
          "**Aristóteles**: virtude é o meio-termo; o fim é a felicidade",
          "**Kant**: vale o dever cumprido, não o resultado",
          "**Utilitarismo**: maior bem para o maior número",
        ],
      },
      {
        rotulo: "Vida pública",
        emoji: "🗳️",
        cor: "laranja",
        folhas: [
          "**Cidadania**: direitos e deveres de quem vive em comunidade",
          "**Pós-verdade**: emoção e crença pesam mais que os fatos",
        ],
      },
    ],
    macete: "Moral começa com M de “mandar”: dita a regra. Ética começa com E de “examinar”: pensa a regra.",
    cuidado:
      "A prova troca os dois conceitos. Uma conduta aceita pelo grupo (moral) ainda pode ser questionada pela ética.",
  },
  {
    aula: "etica-02",
    centro: { titulo: "Código de Ética", emoji: "📜", sub: "Decreto 1.171/1994" },
    desenho: "documento",
    ramos: [
      {
        rotulo: "Alcance",
        emoji: "🎯",
        cor: "azul",
        folhas: [
          "Só o **Poder Executivo Federal**",
          "Serviço permanente, temporário ou excepcional",
          "Vale **mesmo sem remuneração**",
        ],
      },
      {
        rotulo: "Honestidade",
        emoji: "⚖️",
        cor: "verde",
        folhas: [
          "Não basta separar o legal do ilegal",
          "Decide principalmente entre **honesto e desonesto**",
          "A vida privada pesa no **conceito funcional**",
        ],
      },
      {
        rotulo: "Moralidade",
        emoji: "🤝",
        cor: "ouro",
        folhas: ["O fim é sempre o **bem comum**", "Equilíbrio entre **legalidade e finalidade**"],
      },
      {
        rotulo: "Publicidade",
        emoji: "📢",
        cor: "roxo",
        folhas: [
          "Requisito de **eficácia e moralidade** do ato",
          "Exceções: segurança nacional, investigação policial, interesse superior do Estado",
          "Exige processo **previamente declarado sigiloso**",
        ],
      },
      {
        rotulo: "Atendimento",
        emoji: "🙋",
        cor: "laranja",
        folhas: ["Tratar mal causa **dano moral**", "Fila longa e atraso também causam"],
      },
      {
        rotulo: "Comissão de Ética",
        emoji: "👥",
        cor: "rosa",
        folhas: [
          "Orienta, aconselha e examina condutas",
          "Fornece registros para **promoções**",
          "Pena única: **censura**",
          "Parecer com todas as assinaturas e ciência de quem errou",
        ],
      },
    ],
    macete: "1.171 começa com 1: uma pena (censura), um Poder (Executivo), uma esfera (federal).",
    cuidado:
      "Usar o cargo para um fim estranho ao interesse público é falta ética, mesmo cumprindo todas as formalidades da lei.",
  },
  {
    aula: "etica-03",
    centro: { titulo: "Gestão da Ética", emoji: "🧩", sub: "Decreto 6.029/2007" },
    desenho: "pessoas",
    ramos: [
      {
        rotulo: "Quem integra",
        emoji: "🧱",
        cor: "azul",
        folhas: [
          "**CEP**: Comissão de Ética Pública",
          "Comissões de ética dos órgãos (Decreto 1.171)",
          "Comissões equivalentes do Executivo Federal",
        ],
      },
      {
        rotulo: "CEP",
        emoji: "👑",
        cor: "ouro",
        folhas: [
          "**7 integrantes**, de nacionalidade brasileira",
          "Quem designa: a Presidência da República",
          "Mandato de **3 anos**, com uma única recondução",
          "Sem remuneração: é serviço público relevante",
        ],
      },
      {
        rotulo: "Comissão do órgão",
        emoji: "🏢",
        cor: "verde",
        folhas: [
          "**3 titulares e 3 suplentes** do quadro permanente",
          "Quem designa: a direção máxima do órgão",
          "Mandato de 3 anos",
        ],
      },
      {
        rotulo: "Princípios",
        emoji: "🛡️",
        cor: "roxo",
        folhas: [
          "Protege a honra e a imagem de quem é investigado",
          "Identidade de quem denuncia em reserva, **se quiser**",
          "Independência e imparcialidade na apuração",
        ],
      },
      {
        rotulo: "Apuração",
        emoji: "⏱️",
        cor: "laranja",
        folhas: [
          "Provoca: cidadão, agente público, pessoa jurídica privada, associação ou entidade",
          "**10 dias** para a manifestação escrita",
          "Mais **10 dias** se surgir prova nova",
          "“Reservado” até concluir, com vista dos autos",
        ],
      },
      {
        rotulo: "Decisão",
        emoji: "📝",
        cor: "rosa",
        folhas: [
          "Norma omissa: decide por **analogia e princípios**",
          "Sai resumida em **ementa**, sem os nomes",
        ],
      },
    ],
    macete: "7 na CEP, 3 + 3 no órgão, mandato de 3 anos, prazo de 10 + 10 dias.",
    cuidado:
      "A falta ética de integrante da comissão de um órgão é apurada pela CEP, e não pela própria comissão.",
  },
  {
    aula: "etica-04",
    centro: { titulo: "Alta Administração", emoji: "🏛️", sub: "Código de Conduta (2000)" },
    desenho: "balanca",
    ramos: [
      {
        rotulo: "Quem segue",
        emoji: "👔",
        cor: "azul",
        folhas: [
          "Titulares de Ministérios e Secretarias de Estado",
          "Cargos de natureza especial e secretarias-executivas",
          "Presidência e diretoria de agências, autarquias, fundações e estatais",
        ],
      },
      {
        rotulo: "Patrimônio",
        emoji: "💰",
        cor: "verde",
        folhas: [
          "Até **10 dias** da posse: informa a CEP",
          "Aponta o conflito possível e como vai evitar",
          "Mudança relevante: comunica **imediatamente**",
        ],
      },
      {
        rotulo: "Negócios",
        emoji: "📈",
        cor: "ouro",
        folhas: [
          "Vedado investir com **informação privilegiada** do cargo",
          "**Mais de 5%** do capital de certas empresas: torna público",
          "Proposta de trabalho: avisa a CEP, aceite ou não",
        ],
      },
      {
        rotulo: "Presentes e eventos",
        emoji: "🎁",
        cor: "roxo",
        folhas: [
          "Presente é **vedado**",
          "Exceção: autoridade estrangeira, caso protocolar, com reciprocidade",
          "Seminário pode, com a remuneração **tornada pública**",
          "Quem promove não pode ter interesse em decisão da autoridade",
        ],
      },
      {
        rotulo: "Sanções",
        emoji: "🔨",
        cor: "laranja",
        folhas: [
          "**Advertência**: quem ainda está no cargo",
          "**Censura ética**: quem já deixou o cargo",
          "Quem aplica é a **CEP**",
          "A CEP pode sugerir demissão à autoridade superior",
        ],
      },
    ],
    macete: "Advertência = Ainda no cargo. Censura ética = Cargo já deixado.",
    cuidado:
      "No processo deste Código os prazos são de 5 e 3 dias. O prazo de 10 + 10 dias é do Decreto 6.029/2007; aqui, 10 dias é só para informar o patrimônio.",
  },
  {
    aula: "etica-05",
    centro: { titulo: "Governança pública", emoji: "🧭", sub: "Decreto 9.203/2017" },
    desenho: "bussola",
    ramos: [
      {
        rotulo: "Alcance",
        emoji: "🎯",
        cor: "azul",
        folhas: [
          "Administração federal **direta, autárquica e fundacional**",
          "Estatais **não** estão na lista",
        ],
      },
      {
        rotulo: "Governança",
        emoji: "🧭",
        cor: "ouro",
        folhas: [
          "Mecanismos: **liderança, estratégia e controle**",
          "Servem para **avaliar, direcionar e monitorar** a gestão",
          "Meta: políticas e serviços de interesse da sociedade",
        ],
      },
      {
        rotulo: "Valor público",
        emoji: "💎",
        cor: "verde",
        folhas: [
          "Produtos e resultados das atividades do órgão",
          "Respostas **efetivas e úteis** ao interesse público",
        ],
      },
      {
        rotulo: "Gestão de riscos",
        emoji: "🎲",
        cor: "laranja",
        folhas: [
          "Processo **permanente**",
          "Identifica, avalia e gerencia eventos",
          "Dá **segurança razoável** sobre os objetivos",
          "Quem conduz é a **alta administração**",
        ],
      },
      {
        rotulo: "6 princípios",
        emoji: "⭐",
        cor: "roxo",
        folhas: [
          "**C**apacidade de resposta e **I**ntegridade",
          "**C**onfiabilidade e **M**elhoria regulatória",
          "**P**restação de contas e responsabilidade",
          "**T**ransparência",
        ],
      },
      {
        rotulo: "Diretrizes",
        emoji: "🛠️",
        cor: "rosa",
        folhas: [
          "Buscar resultado para a sociedade",
          "Simplificar e decidir com **evidências**",
          "Pesar custos e benefícios das políticas",
          "**Prevenção** antes de processo sancionador",
        ],
      },
    ],
    macete: "Governança faz ADM: Avalia, Direciona, Monitora. Os 6 princípios: CIC-MPT.",
    cuidado: "Gestão de riscos dá segurança razoável, nunca garantia absoluta de que o objetivo será alcançado.",
  },
];
