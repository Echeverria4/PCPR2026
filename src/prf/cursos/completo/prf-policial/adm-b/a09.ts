import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-b-09",
  resumo: {
    ideia:
      "A Lei 14.133 organiza a licitação em torno de planejamento, transparência e gestão de riscos. Nesta parte entram os objetivos, as vedações, a publicidade, os critérios de julgamento e os procedimentos auxiliares.",
    itens: [
      {
        termo: "Objetivos (art. 11)",
        faz: "Proposta mais vantajosa, isonomia, evitar sobrepreço e preço inexequível, inovação e desenvolvimento sustentável.",
      },
      {
        termo: "Sobrepreço x superfaturamento",
        faz: "Sobrepreço é preço acima do mercado no orçamento ou contrato. Superfaturamento é dano ao patrimônio, por exemplo por medição a maior.",
      },
      {
        termo: "Vedações (art. 9º)",
        faz: "Sem preferência por naturalidade, sede ou domicílio, salvo os casos da lei.",
      },
      {
        termo: "Publicidade diferida",
        faz: "O conteúdo das propostas fica fechado até a abertura. O orçamento pode ser sigiloso, se justificado.",
        pista: "O sigilo não vale para os órgãos de controle nem no critério de maior desconto.",
      },
      {
        termo: "Margem de preferência",
        faz: "Até 10% para nacionais que atendam a normas brasileiras e para bens reciclados, recicláveis ou biodegradáveis. Até 20% quando há inovação feita no País.",
      },
      {
        termo: "Matriz de riscos",
        faz: "Em regra é facultativa. É obrigatória no grande vulto e nas contratações integrada e semi-integrada.",
      },
      {
        termo: "Audiência e consulta públicas",
        faz: "São faculdades. A audiência é convocada com pelo menos 8 dias úteis e pode ser presencial ou a distância.",
      },
      {
        termo: "Maior retorno econômico",
        faz: "Critério exclusivo do contrato de eficiência: o contratado ganha um percentual da economia gerada.",
      },
      {
        termo: "Procedimentos auxiliares",
        faz: "Credenciamento, pré-qualificação, manifestação de interesse, registro de preços e registro cadastral.",
        pista: "Não são modalidades de licitação.",
      },
    ],
    cuidado:
      "Quem faz estudos em manifestação de interesse não ganha preferência, e a remuneração só vem do vencedor da licitação.",
  },
  questoes: [
    {
      topico: "Vedações ao agente",
      subassunto: "Sede e preferência",
      dificuldade: 5,
      raciocinio: "Pontuar pela sede é vedado. Preferência depois do desempate é regra da própria lei.",
      enunciado:
        "Edital de um departamento estadual de trânsito dá pontos extras às empresas com sede no próprio estado e, em regra separada, dá preferência às estabelecidas nesse estado quando os critérios de desempate não resolverem o empate. Pela Lei 14.133,",
      alternativas: [
        "a pontuação é vedada, e a preferência é admitida como passo final do empate",
        "as duas regras são válidas, pois incentivam a economia do próprio estado",
        "as duas regras são vedadas, pois a sede nunca pode influenciar o resultado",
        "a pontuação é válida, e a preferência depende de lei estadual específica sobre o tema",
        "a pontuação é válida quando o objeto tiver execução local, e a preferência é vedada",
      ],
      correta: 0,
      explicacao:
        "O art. 9º, I, “b”, veda preferências ou distinções em razão da naturalidade, da sede ou do domicílio dos licitantes, ressalvados os casos da lei. O art. 60, § 1º, I, é um desses casos: dá preferência às empresas estabelecidas no estado do órgão licitante quando o empate continua.",
      explicacaoErradas:
        "“As duas regras são válidas” ignora o art. 9º. “As duas regras são vedadas” ignora a exceção do art. 60, § 1º. “Depende de lei estadual” cria uma exigência que o art. 60 não traz. “Quando o objeto tiver execução local” inventa uma exceção à vedação.",
      pegadinha: "A preferência do art. 60, § 1º, só entra depois dos quatro critérios de desempate.",
      conhecimento:
        "Essa preferência não serve à licitação federal: o texto cita órgão estadual, distrital e municipal.",
    },
    {
      topico: "Orçamento sigiloso",
      subassunto: "Maior desconto e controle",
      dificuldade: 5,
      raciocinio: "Dois limites do sigilo: órgãos de controle e critério de maior desconto.",
      enunciado:
        "Uma licitação adota o critério de maior desconto, e o gestor, com justificativa, pretende manter o orçamento estimado sigiloso, inclusive perante a controladoria. Pelo art. 24 da Lei 14.133, esse plano",
      alternativas: [
        "é válido, pois o sigilo justificado vale para todos até o fim da licitação",
        "é válido quanto ao órgão de controle, mas o edital deve trazer os quantitativos",
        "só falha por falta de lei específica, que o art. 24 exige para todo sigilo",
        "falha duas vezes: no maior desconto, o preço vai ao edital, e o controle tem acesso",
        "falha só no critério de julgamento, porque o sigilo alcança os órgãos de controle interno",
      ],
      correta: 3,
      explicacao:
        "O sigilo do orçamento, desde que justificado, não prevalece para os órgãos de controle interno e externo (art. 24, I). E, no critério de maior desconto, o preço estimado ou o máximo aceitável consta do edital (parágrafo único).",
      explicacaoErradas:
        "“Vale para todos” e “válido quanto ao órgão de controle” contrariam o inciso I. “Lei específica” não é requisito: basta a justificativa. “Falha só no critério” acerta metade, mas erra ao dizer que o sigilo alcança o controle interno.",
      pegadinha: "Mesmo com orçamento sigiloso, os quantitativos e dados para as propostas são divulgados.",
      conhecimento:
        "O art. 13, parágrafo único, chama isso de publicidade diferida, assim como o conteúdo das propostas antes da abertura.",
    },
    {
      topico: "Matriz de riscos",
      subassunto: "Quando é obrigatória",
      dificuldade: 4,
      raciocinio: "Grande vulto ou regimes integrada e semi-integrada: basta um deles.",
      enunciado:
        "Órgão federal licita uma obra de R$ 60 milhões, abaixo do valor de grande vulto, pelo regime de contratação integrada. Quanto à matriz de alocação de riscos, o edital",
      alternativas: [
        "pode dispensá-la, pois ela só é obrigatória nas contratações de grande vulto",
        "deve contemplá-la pelo regime adotado, mesmo abaixo do grande vulto",
        "pode dispensá-la, pois ela é sempre facultativa, qualquer que seja o objeto",
        "deve contemplá-la, porque toda obra pública exige matriz, seja qual for o regime",
        "não pode contemplá-la, por ser regra só de concessões",
      ],
      correta: 1,
      explicacao:
        "O art. 22, § 3º, torna a matriz obrigatória nas obras e serviços de grande vulto ou quando adotados os regimes de contratação integrada e semi-integrada. Fora disso, ela é facultativa.",
      explicacaoErradas:
        "“Só é obrigatória nas contratações de grande vulto” esquece os regimes. “Sempre facultativa” ignora o § 3º. “Toda obra pública” amplia a regra. “Regra só de concessões” não corresponde à lei, que trata do edital em geral.",
      pegadinha: "O valor não é o único gatilho: o regime de execução também obriga.",
      conhecimento:
        "A matriz é cláusula que divide riscos e responsabilidades entre as partes e fixa o equilíbrio econômico-financeiro do contrato.",
    },
    {
      topico: "Audiência pública",
      subassunto: "Art. 21",
      dificuldade: 4,
      raciocinio: "Na lei nova, “poderá” vale para qualquer valor.",
      enunciado:
        "Para licitar a duplicação de uma rodovia, de valor bilionário, a Administração quer ouvir a sociedade antes do edital. Pelo art. 21 da Lei 14.133, a audiência pública",
      alternativas: [
        "é obrigatória, porque a licitação tem valor superior ao limite de grande vulto",
        "é obrigatória e deve ser presencial, com aviso no mínimo 15 dias úteis antes",
        "não é admitida, pois a consulta pública é a única forma de ouvir interessados",
        "pode ser feita só na forma presencial, e depende de autorização do órgão de controle",
        "é faculdade, presencial ou a distância, convocada ao menos 8 dias úteis antes",
      ],
      correta: 4,
      explicacao:
        "O art. 21 diz que a Administração “poderá” convocar audiência pública, presencial ou a distância, na forma eletrônica, com antecedência mínima de 8 dias úteis e informações disponibilizadas antes.",
      explicacaoErradas:
        "“É obrigatória” repete a lógica da lei antiga. “15 dias úteis” troca o prazo. “Única forma” ignora a audiência, pois a consulta do parágrafo único é um meio a mais. “Só na forma presencial” contraria o texto, e a autorização do controle não existe.",
      pegadinha: "Valor alto não torna a audiência obrigatória na Lei 14.133.",
      conhecimento:
        "A consulta pública do parágrafo único também é facultativa: os interessados mandam sugestões no prazo fixado.",
    },
    {
      topico: "Margem de preferência",
      subassunto: "Percentuais",
      dificuldade: 5,
      raciocinio: "Regra de 10%, que sobe para 20% com inovação feita no País.",
      enunciado:
        "Em licitação de equipamentos, concorrem um produto importado, um nacional comum que atende às normas técnicas brasileiras e um nacional resultante de inovação tecnológica feita no País. Pelo art. 26 da Lei 14.133, a margem de preferência",
      alternativas: [
        "pode chegar a 10% para os dois nacionais, sem nenhuma exceção para a inovação",
        "pode chegar a 25% para os dois nacionais, por decisão do próprio agente de contratação",
        "pode ser de até 10% para o nacional comum e de até 20% para o resultante de inovação",
        "pode chegar a 20% para os dois nacionais, desde que o edital o preveja",
        "é obrigatória para os nacionais, sempre no percentual fixo de 20%",
      ],
      correta: 2,
      explicacao:
        "O art. 26, § 1º, II, admite margem de até 10% sobre o preço dos bens e serviços que não se enquadrem na preferência. O § 2º eleva para até 20% no caso de bens e serviços nacionais resultantes de desenvolvimento e inovação tecnológica no País.",
      explicacaoErradas:
        "“Sem nenhuma exceção” ignora o § 2º. “25%” e “decisão do próprio agente” não têm base: a margem do inciso I depende de decisão fundamentada do Executivo federal. “20% para os dois nacionais” aplica ao produto comum o limite maior. “É obrigatória” contraria o “poderá”.",
      pegadinha: "A margem é possibilidade, nunca obrigação do edital.",
      conhecimento:
        "A margem pode alcançar bens e serviços do Mercosul, se houver reciprocidade em acordo internacional aprovado pelo Congresso e ratificado pelo Presidente.",
    },
    {
      topico: "Pré-qualificação",
      subassunto: "Art. 80",
      dificuldade: 4,
      raciocinio: "É procedimento auxiliar: seleciona antes e deixa a porta aberta.",
      enunciado:
        "Um órgão inicia pré-qualificação de fornecedores e de bens para futuras licitações de equipamentos de sinalização. Pelo art. 80 da Lei 14.133, esse procedimento",
      alternativas: [
        "fica sempre aberto, e a licitação seguinte pode se restringir aos aprovados",
        "fica aberto só por 30 dias, e quem não se inscreve perde o direito de licitar com o órgão",
        "tem validade mínima de 5 anos, sem atualização durante esse período",
        "é modalidade de licitação, e por isso termina com a adjudicação do objeto",
        "vale para licitantes, mas nunca pode ser usado para selecionar bens",
      ],
      correta: 0,
      explicacao:
        "O procedimento fica permanentemente aberto para inscrição (art. 80, § 2º), e a licitação que se segue pode ser restrita a licitantes ou bens pré-qualificados (§ 10).",
      explicacaoErradas:
        "“Só por 30 dias” contraria o § 2º. “Validade mínima de 5 anos” erra, pois a validade é de até 1 ano, atualizável a qualquer tempo. “Modalidade de licitação” confunde com o procedimento auxiliar. “Nunca pode ser usado para selecionar bens” contraria o inciso II.",
      pegadinha: "A validade máxima é de 1 ano e não pode passar a dos documentos apresentados.",
      conhecimento:
        "Na pré-qualificação de licitantes, podem ser dispensados os documentos que já constem do registro cadastral.",
    },
    {
      topico: "Manifestação de interesse",
      subassunto: "Efeitos para o autor dos estudos",
      dificuldade: 5,
      raciocinio: "O § 2º é uma lista de “não”: sem preferência, sem dever de licitar, sem ressarcimento certo.",
      enunciado:
        "Empresa faz, em procedimento de manifestação de interesse aberto por edital de chamamento público, estudos para um novo sistema de pesagem em rodovias. Pelo art. 81, § 2º, da Lei 14.133, ela",
      alternativas: [
        "tem direito de preferência na licitação que vier a ser aberta sobre o mesmo objeto",
        "obriga o poder público a licitar, pois os estudos foram feitos a seu convite",
        "será paga pela Administração, que deve ressarcir os estudos aprovados",
        "recebe a garantia de assinar o contrato, se o preço ficar dentro do orçado",
        "não tem preferência, e eventual remuneração virá só do vencedor da licitação",
      ],
      correta: 4,
      explicacao:
        "Os estudos não dão direito de preferência, não obrigam o poder público a licitar, não geram por si sós ressarcimento e só são remunerados pelo vencedor da licitação, vedada em qualquer hipótese a cobrança do poder público (art. 81, § 2º).",
      explicacaoErradas:
        "“Direito de preferência” contraria o inciso I. “Obriga o poder público” contraria o inciso II. “Será paga pela Administração” contraria o inciso IV. “Garantia de assinar o contrato” não existe em nenhuma regra do artigo.",
      pegadinha: "Quem paga é o vencedor da licitação, nunca o poder público.",
      conhecimento:
        "O procedimento pode ser restrito a startups, conforme o § 4º do art. 81, voltado a soluções inovadoras.",
    },
    {
      topico: "Critérios de julgamento",
      subassunto: "Maior retorno econômico",
      dificuldade: 5,
      raciocinio: "Contrato de eficiência: o contratado responde pela economia prometida.",
      enunciado:
        "A PRF contrata, por maior retorno econômico, empresa que promete reduzir certo valor no gasto de energia de seus postos. A economia obtida fica abaixo da contratada, mas dentro do limite previsto no contrato. Pelo art. 39 da Lei 14.133, a diferença",
      alternativas: [
        "gera a extinção automática do contrato e multa de 30%",
        "é descontada da remuneração, e outras sanções só viriam acima do limite",
        "fica por conta da Administração, que assumiu todo o risco da estimativa",
        "só pode ser cobrada depois de ação judicial de ressarcimento",
        "gera o pagamento em dobro da diferença a título de indenização",
      ],
      correta: 1,
      explicacao:
        "O art. 39, § 4º, manda descontar da remuneração a diferença entre a economia contratada e a efetiva. Se a diferença passar do limite máximo do contrato, o contratado ainda se sujeita a outras sanções cabíveis.",
      explicacaoErradas:
        "“Extinção automática” e “multa de 30%” não têm base no artigo. “Fica por conta da Administração” inverte a lógica do contrato de eficiência. “Ação judicial” não é exigida, pois o desconto é feito na remuneração. “Em dobro” é invenção.",
      pegadinha: "Esse critério é exclusivo do contrato de eficiência.",
      conhecimento:
        "A proposta de preço, nesse critério, é um percentual sobre a economia que se estima gerar em determinado período.",
    },
    {
      topico: "Sobrepreço e superfaturamento",
      subassunto: "Definições do art. 6º",
      dificuldade: 4,
      raciocinio: "Sobrepreço está no preço; superfaturamento está no dano.",
      enunciado:
        "Na planilha de uma licitação, um item foi orçado bem acima dos preços de mercado. Em outro contrato, já em execução, a fiscalização mediu quantidades maiores que as executadas e pagou por elas. Pelas definições da Lei 14.133, há, respectivamente,",
      alternativas: [
        "superfaturamento e sobrepreço",
        "preço inexequível e sobrepreço",
        "sobrepreço e superfaturamento",
        "sobrepreço e preço inexequível",
        "superfaturamento nos dois casos",
      ],
      correta: 2,
      explicacao:
        "Sobrepreço é o preço orçado ou contratado em valor expressivamente superior aos referenciais de mercado (art. 6º, LVI). Superfaturamento é o dano ao patrimônio da Administração, por exemplo pela medição de quantidades superiores às executadas (art. 6º, LVII).",
      explicacaoErradas:
        "“Superfaturamento e sobrepreço” inverte as definições. “Preço inexequível” é o preço baixo demais, o oposto do primeiro caso, e não descreve o segundo. “Superfaturamento nos dois casos” ignora que o primeiro fato ainda é só preço, sem dano consumado.",
      pegadinha: "O sobrepreço aparece no orçamento ou no contrato; o superfaturamento aparece no dano.",
      conhecimento:
        "Evitar sobrepreço, preços manifestamente inexequíveis e superfaturamento é um dos objetivos da licitação (art. 11, III).",
    },
  ],
};
