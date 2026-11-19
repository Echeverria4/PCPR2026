import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-05",
  resumo: {
    ideia:
      "A sinalização orienta condutores e pedestres e tem uma ordem de força. Quem responde por ela é o órgão com circunscrição sobre a via, e sinal ruim não gera punição.",
    itens: [
      {
        termo: "Tipos de sinal",
        faz: "Verticais, horizontais, dispositivos auxiliares, luminosos, sonoros e gestos do agente e do condutor.",
      },
      {
        termo: "Prevalência",
        faz: "Ordem do agente vence tudo. Semáforo vence os demais sinais. Sinais vencem as demais normas.",
        pista: "Agente, semáforo, placa, regra geral.",
      },
      {
        termo: "Sinal insuficiente",
        faz: "Sinalização insuficiente ou incorreta não gera sanção. O órgão responde pela falha.",
      },
      {
        termo: "Via nova ou reaberta",
        faz: "Via pavimentada só é entregue ou reaberta com sinalização vertical e horizontal.",
      },
      {
        termo: "Áreas privadas",
        faz: "Em condomínios e estabelecimentos privados de uso coletivo, quem instala é o proprietário.",
      },
      {
        termo: "Retirada",
        faz: "O que prejudica a visibilidade do sinal pode ser retirado, com ônus para quem colocou.",
      },
      {
        termo: "Experimental",
        faz: "O órgão máximo executivo da União autoriza, por período prefixado e a título precário.",
      },
      {
        termo: "Placas verticais",
        faz: "Regulamentação manda ou proíbe. Advertência avisa do perigo. Indicação informa.",
      },
    ],
    cuidado: "A Resolução 973/2022 veda implantar a sinalização experimental antes da autorização.",
  },
  questoes: [
    {
      topico: "Prevalência",
      subassunto: "Ordem do agente",
      dificuldade: 4,
      raciocinio: "O agente está no topo da ordem.",
      enunciado:
        "Em um cruzamento há placa de parada obrigatória e semáforo verde. Um policial rodoviário, no local, faz gesto de parada. Pelo art. 89 do CTB, o condutor deve",
      alternativas: [
        "seguir, pois o semáforo prevalece sobre qualquer outro sinal ou ordem",
        "parar pela placa, pois a sinalização vertical prevalece sobre a luminosa",
        "seguir, desde que reduza a velocidade, por causa da placa de parada",
        "escolher entre o semáforo e a placa, pois o gesto só vale para pedestres",
        "parar, pois a ordem do agente prevalece sobre os demais sinais e normas",
      ],
      correta: 4,
      explicacao: "O art. 89 coloca as ordens do agente acima das normas de circulação e de outros sinais.",
      explicacaoErradas:
        "“semáforo prevalece” esquece o agente. “vertical prevalece” inverte a ordem entre semáforo e placa. “reduza a velocidade” não atende à ordem. “só vale para pedestres” não existe.",
      pegadinha: "Parar no semáforo e esquecer o agente.",
      conhecimento: "Gestos do agente e do condutor também são sinais de trânsito, pelo art. 87.",
    },
    {
      topico: "Prevalência",
      subassunto: "Semáforo, placa e norma",
      dificuldade: 5,
      raciocinio: "Compare dois níveis de cada vez.",
      enunciado:
        "Sem agente no local, um condutor cruza com semáforo verde um ponto que também tem placa de parada obrigatória. Depois, segue a 120 km/h em pista dupla cuja placa autoriza essa velocidade. Pelo art. 89, ele",
      alternativas: [
        "agiu certo nos dois casos, pela ordem de prevalência do art. 89",
        "errou no cruzamento, pois a placa vale mais que o semáforo, e acertou na rodovia",
        "acertou no cruzamento, mas errou na rodovia, pois a lei fixa o teto de 110 km/h",
        "errou nos dois casos, pois a norma geral de circulação prevalece sobre os sinais",
        "errou nos dois casos, pois só o agente pode afastar a placa ou a regra geral",
      ],
      correta: 0,
      explicacao:
        "O semáforo prevalece sobre os demais sinais, e os sinais prevalecem sobre as demais normas de trânsito. O art. 61, § 2º, ainda permite regulamentar velocidade acima da regra geral.",
      explicacaoErradas:
        "“a placa vale mais” inverte a ordem. “teto de 110 km/h” ignora o art. 61, § 2º. “norma geral” fica na base da ordem. “só o agente” esquece os outros níveis.",
      pegadinha: "Achar que os 110 km/h do art. 61 são um limite absoluto.",
      conhecimento: "Os 110 km/h valem quando não há sinalização regulamentadora.",
    },
    {
      topico: "Sinalização insuficiente",
      subassunto: "Art. 90",
      dificuldade: 4,
      raciocinio: "Sinal que não se vê não pode gerar punição.",
      enunciado:
        "Uma placa de proibido estacionar está encoberta por galhos, e um condutor, sem vê-la, estaciona no local. Pelo art. 90 do CTB,",
      alternativas: [
        "mantém-se a multa, pois todo condutor tem o dever de conhecer a sinalização",
        "a multa cai pela metade, pois a falha é dividida entre o condutor e o órgão",
        "a sanção não se aplica, e o órgão responde pela sinalização insuficiente",
        "a sanção só cai se o condutor provar em juízo a culpa de um servidor do órgão",
        "vale a multa sem a pontuação, por se tratar de sinalização prejudicada",
      ],
      correta: 2,
      explicacao:
        "O art. 90 afasta as sanções por inobservância de sinalização insuficiente ou incorreta. O § 1º diz que o órgão com circunscrição responde pela falta, pela insuficiência ou pela colocação incorreta.",
      explicacaoErradas:
        "“dever de conhecer” não supera o art. 90. “pela metade” e “sem a pontuação” não existem. “provar em juízo” cria uma condição fora da lei.",
      pegadinha: "Punir o condutor por um sinal que não dava para ver.",
      conhecimento: "O Contran edita normas complementares sobre interpretação, colocação e uso da sinalização.",
    },
    {
      topico: "Sinalização experimental",
      subassunto: "Autorização",
      dificuldade: 4,
      raciocinio: "Quem autoriza é o órgão máximo executivo, não o Contran.",
      enunciado:
        "Um órgão rodoviário quer testar em um trecho um sinal que não existe no CTB. Pelo art. 80, § 2º, e pela Resolução Contran 973/2022,",
      alternativas: [
        "depende de autorização do órgão máximo executivo, por período prefixado",
        "basta comunicar o Contran depois da implantação, com um relatório técnico anual",
        "o próprio órgão rodoviário autoriza o teste, se houver estudo dos sinistros do trecho",
        "só uma lei federal pode permitir qualquer sinalização fora do texto atual do CTB",
        "o teste pode começar de imediato, e a autorização vem só ao final",
      ],
      correta: 0,
      explicacao:
        "O órgão máximo executivo de trânsito da União pode autorizar, em caráter experimental e por período prefixado. A Resolução 973 veda a implantação antes da autorização.",
      explicacaoErradas:
        "“comunicar o Contran” e “de imediato” contrariam a autorização prévia. “próprio órgão” não é quem autoriza. “lei federal” ignora o art. 80, § 2º.",
      pegadinha: "Trocar órgão máximo executivo por Contran.",
      conhecimento: "O pedido traz projeto, estatística de sinistros, local, período e termo de responsabilidade por danos.",
    },
    {
      topico: "Sinalização experimental",
      subassunto: "Fim do período",
      dificuldade: 5,
      raciocinio: "O teste não vira regra sozinho.",
      enunciado: "Pela Resolução Contran 973/2022, concluído o período de uma sinalização experimental,",
      alternativas: [
        "ela passa a valer em todo o país, por aprovação automática do teste",
        "o órgão local decide sozinho se a mantém por tempo indeterminado na via",
        "o órgão máximo renova o teste de ofício, por igual período, sem novos dados",
        "ela vira norma geral com a publicação do relatório final do órgão local",
        "os resultados vão ao Contran, que avalia o seu uso perene",
      ],
      correta: 4,
      explicacao: "O art. 7º manda encaminhar os resultados ao Contran, para que avalie o uso perene da solução.",
      explicacaoErradas:
        "“aprovação automática” e “vira norma geral” não existem. “decide sozinho” tira do Contran a avaliação. “renova o teste de ofício” não consta da resolução.",
      pegadinha: "Achar que quem autoriza o teste decide o uso definitivo.",
      conhecimento: "A autorização tem título precário e sai em portaria com local e prazo.",
    },
    {
      topico: "Sinalização vertical",
      subassunto: "Classes",
      dificuldade: 4,
      raciocinio: "Proíbe, avisa ou informa?",
      enunciado:
        "Em uma BR há três placas: uma proíbe ultrapassar, outra avisa de curva acentuada adiante e outra informa a distância até a próxima cidade. Elas são, nessa ordem, de",
      alternativas: [
        "advertência, regulamentação e indicação",
        "regulamentação, indicação e advertência",
        "regulamentação, advertência e indicação",
        "indicação, advertência e regulamentação",
        "advertência, indicação e regulamentação, sem outra classe",
      ],
      correta: 2,
      explicacao:
        "A regulamentação impõe proibições e obrigações, a advertência alerta para perigo e a indicação informa. As três têm volumes próprios no manual de sinalização.",
      explicacaoErradas:
        "“advertência, regulamentação” inverte as duas primeiras. “indicação e advertência” inverte as duas últimas. As outras trocam a primeira e a última.",
      pegadinha: "Achar que toda placa de perigo proíbe algo.",
      conhecimento: "O manual também tem volumes para sinalização horizontal, semafórica, temporária e cicloviária.",
    },
    {
      topico: "Implantação",
      subassunto: "Via reaberta",
      dificuldade: 5,
      raciocinio: "O art. 88 pede as duas formas de sinalização.",
      enunciado:
        "Após recapeamento, uma rodovia já recebeu as placas, mas ainda não recebeu a pintura de solo. Pelo art. 88 do CTB, essa via",
      alternativas: [
        "pode reabrir de imediato, pois a placa supre a falta da pintura das faixas",
        "pode reabrir por 30 dias, com aviso à comunidade e velocidade reduzida",
        "pode reabrir se o órgão autorizar, pois a sinalização horizontal é opcional",
        "não pode reabrir sem estar sinalizada vertical e horizontalmente",
        "não pode reabrir, salvo quando a obra tiver sido feita por órgão federal",
      ],
      correta: 3,
      explicacao:
        "O art. 88 proíbe entregar ou reabrir via pavimentada, após obra ou manutenção, enquanto não estiver sinalizada vertical e horizontalmente.",
      explicacaoErradas:
        "“a placa supre” e “é opcional” ignoram a sinalização horizontal. “por 30 dias” cria um prazo fora da lei. “órgão federal” cria uma exceção que não existe.",
      pegadinha: "Achar que placa basta para reabrir.",
      conhecimento: "Nos trechos em obras, o parágrafo único exige sinalização específica e adequada.",
    },
    {
      topico: "Implantação",
      subassunto: "Retirada de obstáculo",
      dificuldade: 4,
      raciocinio: "O custo fica com quem causou o problema.",
      enunciado:
        "Um comerciante instala à beira de uma rodovia um painel que encobre uma placa. Pelo art. 84 do CTB,",
      alternativas: [
        "o órgão só pode retirar o painel depois de decisão judicial",
        "o órgão pode retirá-lo ou mandar retirar, à custa de quem o colocou",
        "o painel fica até o fim do ano, pois a lei protege a atividade comercial",
        "o órgão deve retirá-lo às próprias custas, por ser o responsável pela via",
        "o painel só sai se houver sinistro causado pela falta de visibilidade no trecho",
      ],
      correta: 1,
      explicacao:
        "O órgão com circunscrição pode retirar ou determinar a imediata retirada de elemento que prejudique a visibilidade da sinalização e a segurança, com ônus para quem o colocou.",
      explicacaoErradas:
        "“decisão judicial” não é exigida. “fim do ano” e “sinistro” criam condições fora da lei. “às próprias custas” inverte o ônus.",
      pegadinha: "Colocar o custo no órgão de trânsito.",
      conhecimento: "O art. 81 proíbe luzes, publicidade e vegetação que gerem confusão ou prejudiquem a sinalização.",
    },
    {
      topico: "Regulamento de sinalização",
      subassunto: "Volumes do MBST",
      dificuldade: 4,
      raciocinio: "São nove volumes, e a sinalização vertical ocupa três deles.",
      enunciado:
        "Sobre a estrutura do Manual Brasileiro de Sinalização de Trânsito (MBST), que forma o Regulamento de Sinalização Viária da Resolução Contran 973/2022,",
      alternativas: [
        "a sinalização temporária, usada em obras na pista, fica dentro do volume de sinalização horizontal",
        "a sinalização vertical se divide em três volumes: de regulamentação, de advertência e de indicação",
        "o manual tem oito volumes, e o cruzamento rodoferroviário fica no volume de sinalização de advertência",
        "a sinalização semafórica integra o volume de dispositivos auxiliares, por não ser placa nem pintura",
        "a sinalização cicloviária é só um capítulo do volume de sinalização horizontal, sem volume próprio",
      ],
      correta: 1,
      explicacao:
        "O art. 2º lista nove volumes: I, vertical de regulamentação; II, vertical de advertência; III, vertical de indicação; IV, horizontal; V, semafórica; VI, dispositivos auxiliares; VII, temporária; VIII, cicloviária; e IX, cruzamento rodoferroviário. A vertical ocupa os três primeiros.",
      explicacaoErradas:
        "A sinalização “temporária” tem o volume VII, e a “cicloviária”, o volume VIII, ambos próprios. “oito volumes” erra a conta: são nove, e o “cruzamento rodoferroviário” é o volume IX. A “semafórica” é o volume V, separado dos dispositivos auxiliares, que são o volume VI.",
      pegadinha: "Achar que a sinalização temporária, a semafórica ou a cicloviária são parte de outro volume.",
      conhecimento:
        "O regulamento vale em todo o território nacional, para todos os órgãos e entidades do Sistema Nacional de Trânsito (art. 1º).",
    },
    {
      topico: "Sinalização experimental",
      subassunto: "Conteúdo do pedido",
      dificuldade: 5,
      raciocinio: "A satisfação dos usuários só aparece depois, nos relatórios do teste.",
      enunciado:
        "Um órgão executivo rodoviário vai pedir autorização para testar uma sinalização não prevista no CTB. Pela Resolução Contran 973/2022, o pedido NÃO precisa trazer",
      alternativas: [
        "a estatística dos acidentes ocorridos no local antes da implantação da sinalização",
        "o termo de responsabilidade por eventuais danos causados pela sinalização",
        "o período em que a sinalização será usada em caráter excepcional",
        "a descrição detalhada do projeto, com desenhos ou imagens da sinalização",
        "a pesquisa de satisfação dos usuários do trecho, feita antes do pedido",
      ],
      correta: 4,
      explicacao:
        "O art. 3º exige requerimento com finalidade, aplicabilidade e vantagens, projeto detalhado com desenhos ou imagens, estatística de acidentes antes da implantação, informação do local, período de uso e termo de responsabilidade por danos. A satisfação dos usuários só entra nos relatórios técnicos feitos durante o teste (art. 5º, § 2º).",
      explicacaoErradas:
        "“estatística dos acidentes” (inciso III), “termo de responsabilidade” (inciso VI), “período em que a sinalização será usada” (inciso V) e “descrição detalhada do projeto” (inciso II) são exigências do art. 3º.",
      pegadinha: "Levar para o pedido um item que só aparece nos relatórios do teste.",
      conhecimento:
        "O pedido vai ao órgão máximo executivo de trânsito da União, embora a avaliação final do uso perene seja do Contran (arts. 3º e 7º).",
    },
    {
      topico: "Sinalização experimental",
      subassunto: "Relatórios do teste",
      dificuldade: 5,
      raciocinio: "Quem testa informa, e quem autorizou fixa a frequência.",
      enunciado:
        "Autorizado o teste de uma sinalização experimental em uma rodovia federal, durante o período de experiência, pela Resolução Contran 973/2022,",
      alternativas: [
        "o requerente envia relatórios técnicos ao órgão máximo executivo, na periodicidade que este fixar",
        "o requerente envia um único relatório ao Contran, ao final do teste, com os dados de acidentes do trecho",
        "o órgão máximo executivo envia relatórios mensais ao requerente, com a avaliação de desempenho da via",
        "o requerente envia relatórios semestrais ao órgão máximo, prazo que a própria resolução fixa",
        "o requerente só informa a evolução dos acidentes, pois a satisfação dos usuários fica fora dos relatórios",
      ],
      correta: 0,
      explicacao:
        "O art. 5º, § 2º, manda o requerente fornecer ao órgão máximo executivo de trânsito da União relatórios técnicos, na periodicidade definida por esse órgão, com no mínimo a evolução das estatísticas de acidentes no local, a satisfação dos usuários e a avaliação de desempenho da sinalização.",
      explicacaoErradas:
        "“único relatório ao Contran” confunde com o art. 7º: ao fim do teste, quem remete os resultados ao Contran é o órgão máximo. “relatórios mensais ao requerente” inverte quem informa quem. “prazo que a própria resolução fixa” não existe, pois a periodicidade é definida pelo órgão máximo. “só informa a evolução dos acidentes” deixa de fora a satisfação dos usuários e o desempenho.",
      pegadinha: "Achar que a resolução fixa a periodicidade ou que o relatório vai direto ao Contran.",
      conhecimento:
        "O pedido inicial já traz a estatística de acidentes antes da implantação, que serve de base para comparar com os relatórios (art. 3º, III).",
    },
    {
      topico: "Sinalização experimental",
      subassunto: "Dados extras",
      dificuldade: 4,
      raciocinio: "A resolução deixa ao órgão máximo o critério e o prazo.",
      enunciado:
        "Ao analisar um pedido de sinalização experimental, o órgão máximo executivo de trânsito da União quer mais dados sobre ensaios já feitos com o equipamento proposto. Pela Resolução Contran 973/2022, ele",
      alternativas: [
        "deve arquivar o pedido, pois os dados de ensaio tinham de vir junto com o requerimento inicial",
        "deve mandar o pedido ao Contran, o único que pode exigir dados além dos que vieram no pedido",
        "pode pedir os dados só se o local tiver alta taxa de acidentes, condição prevista na resolução",
        "pode requisitar os dados ao interessado, a seu critério e no prazo que ele mesmo definir",
        "pode pedir os dados, mas o interessado tem o prazo fixo de 30 dias, previsto na própria resolução",
      ],
      correta: 3,
      explicacao:
        "O art. 4º permite ao órgão máximo executivo, a seu critério e no prazo que definir, requisitar ao interessado informações adicionais sobre testes, ensaios, avaliações, instalações experimentais e congêneres.",
      explicacaoErradas:
        "“arquivar o pedido” e “o único que pode exigir dados” contrariam o art. 4º, que deixa o próprio órgão máximo pedir mais informações. “alta taxa de acidentes” não é condição prevista. “prazo fixo de 30 dias” não existe: o prazo é o que o órgão máximo definir.",
      pegadinha: "Inventar prazo fixo ou condição para o pedido de dados extras.",
      conhecimento:
        "O pedido inicial deve trazer, entre outros itens, o termo de responsabilidade por eventuais danos causados pela sinalização (art. 3º, VI).",
    },
    {
      topico: "Regulamento de sinalização",
      subassunto: "Prazo de adequação",
      dificuldade: 5,
      raciocinio: "A data de implantação decide: antes ou depois de 1º de agosto de 2022.",
      enunciado:
        "Em uma rodovia, duas soluções de sinalização estão fora das especificações do MBST: uma foi implantada em maio de 2022 e a outra, em outubro de 2022. Pela Resolução Contran 973/2022,",
      alternativas: [
        "as duas tinham até 31 de julho de 2025 para adequação, prazo que vale para toda sinalização anterior a 2025",
        "a de maio pode continuar como está, pois o regulamento não alcança o que foi implantado antes da sua vigência",
        "a de maio devia ser trocada ou adequada até 31 de julho de 2025, mas a de outubro já devia estar conforme",
        "as duas devem ser retiradas de imediato, porque a resolução não previu nenhum prazo de transição para elas",
        "a de outubro tinha até 31 de julho de 2025 para se adequar, e a de maio fica dispensada por direito adquirido",
      ],
      correta: 2,
      explicacao:
        "O art. 8º aplica o regulamento às soluções implantadas a partir de 1º de agosto de 2022, data em que a resolução entrou em vigor. As implantadas até 31 de julho de 2022 que não atendessem às especificações tinham de ser substituídas ou adequadas até 31 de julho de 2025 (parágrafo único).",
      explicacaoErradas:
        "“toda sinalização anterior a 2025” estende o prazo de transição a quem já nasceu sob o regulamento. “não alcança o que foi implantado antes” ignora o parágrafo único do art. 8º. “retiradas de imediato” ignora o prazo de transição. “direito adquirido” não existe aqui, e o prazo era da sinalização antiga, não da nova.",
      pegadinha: "Dar à sinalização nova o prazo de transição que só valia para a antiga.",
      conhecimento:
        "A resolução revogou 17 resoluções inteiras e trechos da Resolução 585/2016 (art. 10).",
    },
    {
      topico: "Regulamento de sinalização",
      subassunto: "Alcance do regulamento",
      dificuldade: 4,
      raciocinio: "O regulamento é nacional e vale para todo o SNT.",
      enunciado:
        "Um município quer adotar, nas vias urbanas sob sua circunscrição, placas com um padrão visual próprio, diferente do MBST, alegando autonomia local. Pela Resolução Contran 973/2022,",
      alternativas: [
        "o município pode, pois o MBST só obriga os órgãos federais, como a PRF e o DNIT, nas rodovias",
        "o município pode, desde que o Cetran do seu Estado aprove o padrão visual antes da implantação",
        "o município deve apenas registrar o padrão no Contran, já que o MBST serve só de recomendação",
        "o município pode, se o padrão próprio for aprovado em lei municipal e divulgado com antecedência",
        "o município deve seguir o MBST, que vale para todos os órgãos e entidades do SNT no país",
      ],
      correta: 4,
      explicacao:
        "O art. 1º diz que o Regulamento de Sinalização Viária vale em todo o território nacional, para todos os órgãos e entidades do SNT, e o art. 2º diz que ele é formado pelos volumes do MBST. O município, que integra o SNT, tem de seguir o manual.",
      explicacaoErradas:
        "“só obriga os órgãos federais” contraria o art. 1º. “Cetran” e “lei municipal” não aparecem na resolução como forma de mudar o padrão. “serve só de recomendação” contraria o art. 2º: os volumes do MBST formam o próprio regulamento.",
      pegadinha: "Tratar o MBST como recomendação ou como regra só das rodovias federais.",
      conhecimento:
        "Os volumes do MBST são os Anexos I a IX da resolução e ficam no sítio eletrônico do órgão máximo executivo de trânsito da União (art. 9º).",
    },
    {
      topico: "Sinalização experimental",
      subassunto: "Natureza da autorização",
      dificuldade: 5,
      raciocinio: "Precária quer dizer revogável, e a portaria fixa local e prazo.",
      enunciado: "Pela Resolução Contran 973/2022, a autorização para usar uma sinalização experimental é dada",
      alternativas: [
        "a título precário, em portaria específica que indica o local de uso e o prazo determinado",
        "em caráter definitivo, por resolução do Contran, com validade em todo o território nacional",
        "a título precário, por deliberação do Contran, que fixa só o local e deixa o prazo em aberto",
        "por prazo indeterminado, em portaria específica que indica apenas o local de implantação",
        "em caráter irrevogável durante o prazo, por despacho do órgão com circunscrição sobre a via",
      ],
      correta: 0,
      explicacao:
        "O art. 5º, § 1º, diz que a autorização é conferida a título precário, mediante portaria específica com o local de utilização da sinalização e o prazo determinado. Quem a expede é o órgão máximo executivo de trânsito da União.",
      explicacaoErradas:
        "“caráter definitivo” e “prazo indeterminado” contrariam o período prefixado do art. 80, § 2º, do CTB. “deliberação do Contran” troca o autor: é o órgão máximo, por portaria. “irrevogável” contraria o título precário, e “órgão com circunscrição sobre a via” não é quem autoriza.",
      pegadinha: "Trocar a portaria do órgão máximo por ato do Contran, ou esquecer que a autorização é precária.",
      conhecimento:
        "O órgão máximo decide pelo uso, pelos testes ou pela proibição da sinalização experimental (art. 5º, caput).",
    },
  ],
};
