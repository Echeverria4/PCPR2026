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
  ],
};
