import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-04",
  resumo: {
    ideia:
      "O Sistema Nacional de Trânsito reúne órgãos normativos, executivos, de fiscalização e de recursos. A aula mostra o que cabe a cada um e os limites de direção do motorista profissional.",
    itens: [
      {
        termo: "Contran",
        faz: "Coordenador do sistema e órgão máximo normativo e consultivo. É presidido por um ministro.",
      },
      {
        termo: "Cetran e Contrandife",
        faz: "Normativos, consultivos e coordenadores. Julgam recursos contra decisões das Jari.",
      },
      {
        termo: "Conflitos",
        faz: "No âmbito dos municípios, Cetran. Entre União, estados e DF, Contran.",
      },
      {
        termo: "Jari",
        faz: "Colegiado que funciona junto a cada órgão e julga recursos contra as penalidades dele.",
      },
      {
        termo: "PRF",
        faz: "Patrulha e fiscaliza rodovias e estradas federais. Aplica advertência por escrito, multa e suspensão prevista de forma específica.",
      },
      {
        termo: "Órgão rodoviário",
        faz: "Fiscaliza excesso de peso, dimensões e lotação em sua circunscrição.",
      },
      {
        termo: "Polícia Militar",
        faz: "Fiscaliza por convênio, como agente do órgão executivo ou rodoviário.",
      },
      {
        termo: "Tempo de direção",
        faz: "Máximo de 5h30 seguidas. Carga: 30 min em cada 6 h. Passageiros: 30 min a cada 4 h.",
      },
      {
        termo: "Descanso",
        faz: "11 horas em cada 24 horas. O STF derrubou o trecho que permitia fracionar.",
      },
    ],
    cuidado: "Cassação da CNH não aparece nas competências da PRF no art. 20.",
  },
  questoes: [
    {
      topico: "Cetran e Contran",
      subassunto: "Conflitos de circunscrição",
      dificuldade: 4,
      raciocinio: "Olhe o nível dos entes em conflito.",
      enunciado:
        "Dois municípios de um mesmo estado disputam a fiscalização de uma avenida que marca a divisa entre eles. Pelo CTB, esse conflito será dirimido pelo",
      alternativas: [
        "Contran, que resolve todo conflito de competência de trânsito no país",
        "órgão executivo de trânsito do estado, por ser o responsável pelo registro",
        "Cetran, competente para os conflitos no âmbito dos municípios",
        "presidente da Jari do município mais populoso, em decisão sem recurso",
        "órgão máximo executivo de trânsito da União, por ato do seu dirigente",
      ],
      correta: 2,
      explicacao: "O art. 14, IX, dá ao Cetran os conflitos no âmbito dos municípios. O art. 12, XIV, dá ao Contran os da União, dos estados e do DF.",
      explicacaoErradas:
        "“todo conflito” amplia o art. 12, XIV. “órgão executivo” não dirime esses conflitos. “presidente da Jari” não tem essa função. “órgão máximo executivo” não aparece nessa regra.",
      pegadinha: "Mandar tudo ao Contran por ser o órgão máximo.",
      conhecimento: "O Contran pode avocar processos sobre conflitos de competência, pelo art. 12, XIII.",
    },
    {
      topico: "Polícia Rodoviária Federal",
      subassunto: "Penalidades",
      dificuldade: 5,
      raciocinio: "O art. 20 lista as penalidades uma a uma.",
      enunciado: "Nas rodovias e estradas federais, pelo art. 20 do CTB, a PRF pode aplicar",
      alternativas: [
        "advertência por escrito, multa e a suspensão prevista de forma específica",
        "apenas multa, pois a advertência é exclusiva do órgão municipal",
        "multa e cassação da CNH, pois esta decorre do patrulhamento ostensivo federal",
        "qualquer penalidade do CTB, inclusive a cassação do documento de habilitação",
        "somente medidas administrativas, pois a multa depende sempre do órgão estadual",
      ],
      correta: 0,
      explicacao:
        "O inciso III traz advertência por escrito e multa, com as medidas cabíveis. O inciso XII traz a suspensão do direito de dirigir, quando prevista de forma específica para a infração.",
      explicacaoErradas:
        "“apenas multa” e “exclusiva do órgão municipal” contrariam o inciso III. “cassação” e “qualquer penalidade” não constam do art. 20. “somente medidas” ignora a multa.",
      pegadinha: "Dar à PRF a cassação.",
      conhecimento: "Depois de aplicar a suspensão, a PRF a comunica ao órgão máximo executivo da União.",
    },
    {
      topico: "Polícia Rodoviária Federal",
      subassunto: "Sinistros",
      dificuldade: 4,
      raciocinio: "Veja o inciso XIII do art. 20.",
      enunciado: "Após um sinistro com vítimas em uma BR, a PRF atua no local. Está entre as competências do art. 20 do CTB",
      alternativas: [
        "julgar o recurso do condutor contra a multa aplicada no local do sinistro",
        "realizar perícia administrativa nos locais de sinistros de trânsito",
        "registrar o veículo sinistrado e expedir novo certificado em regime de urgência",
        "credenciar as clínicas que vão examinar os condutores envolvidos no sinistro",
        "aplicar a cassação ao condutor que causou a morte, depois da perícia oficial",
      ],
      correta: 1,
      explicacao: "O inciso XIII traz a perícia administrativa. O inciso IV traz o levantamento dos locais de sinistros e dos serviços de atendimento, socorro e salvamento.",
      explicacaoErradas:
        "“julgar o recurso” é da Jari. “registrar” é do órgão estadual. “credenciar as clínicas” não é da PRF. “cassação” não está no art. 20.",
      pegadinha: "Confundir fiscalização com registro e julgamento.",
      conhecimento: "A PRF também coleta dados estatísticos sobre sinistros e suas causas.",
    },
    {
      topico: "Polícia Militar",
      subassunto: "Convênio",
      dificuldade: 4,
      raciocinio: "A PM atua como agente de outro órgão.",
      enunciado: "Um policial militar fiscaliza o trânsito em uma via municipal. Pelo art. 23, III, do CTB, essa atividade",
      alternativas: [
        "é competência originária e exclusiva da polícia militar nas vias urbanas",
        "é vedada, pois o CTB reserva a fiscalização às guardas e aos órgãos civis",
        "só vale nas rodovias estaduais, sem atuação em via urbana",
        "exige ordem judicial, salvo se houver sinistro com vítima na mesma via",
        "depende de convênio, com atuação como agente do órgão executivo",
      ],
      correta: 4,
      explicacao:
        "O art. 23, III, permite a fiscalização quando e conforme convênio, como agente do órgão executivo de trânsito ou executivo rodoviário, junto com os demais agentes credenciados.",
      explicacaoErradas:
        "“exclusiva” contraria a atuação conjunta. “é vedada” ignora o convênio. “só vale nas rodovias estaduais” e “ordem judicial” criam limites fora da lei.",
      pegadinha: "Achar que a PM fiscaliza por força própria do CTB.",
      conhecimento: "O art. 25 permite convênios que deleguem atividades entre órgãos do sistema.",
    },
    {
      topico: "Cetran e Jari",
      subassunto: "Recursos",
      dificuldade: 4,
      raciocinio: "Quem revê a Jari é um conselho.",
      enunciado:
        "Um condutor multado por órgão estadual de trânsito tem o recurso negado pela Jari. Pelo art. 14, V, do CTB, o recurso contra essa decisão será julgado pelo",
      alternativas: [
        "Contran, que julga os recursos contra decisões de qualquer Jari do país",
        "próprio órgão estadual, por seu dirigente, em pedido de reconsideração",
        "juízo criminal da comarca, pois a Jari esgotou a via administrativa",
        "Cetran, órgão que julga os recursos contra decisões das Jari",
        "presidente da Jari, que pode rever sozinho a decisão do colegiado",
      ],
      correta: 3,
      explicacao: "O art. 14, V, dá ao Cetran o julgamento dos recursos contra decisões das Jari. No DF, a função é do Contrandife.",
      explicacaoErradas:
        "“qualquer Jari” amplia a função do Contran. “pedido de reconsideração” não é a via prevista. “juízo criminal” não julga multa. “sozinho” contraria o colegiado.",
      pegadinha: "Enviar todo recurso ao Contran.",
      conhecimento: "O Cetran também julga recurso contra inaptidão permanente nos exames de aptidão, pelo art. 14, V.",
    },
    {
      topico: "Contran",
      subassunto: "Deliberação ad referendum",
      dificuldade: 5,
      raciocinio: "Os efeitos passados ficam. A deliberação não volta.",
      enunciado:
        "Em caso de urgência e relevante interesse público, o presidente do Contran edita deliberação ad referendum do Plenário. Se ela não for aprovada em 120 dias,",
      alternativas: [
        "é convertida em resolução, por aprovação tácita do Plenário do Contran",
        "perde a eficácia desde a edição, com a anulação de todos os atos dela decorrentes",
        "segue válida por mais 120 dias, e o presidente pode reeditá-la uma vez",
        "perde a eficácia, mantidos os efeitos dela decorrentes, e não pode ser reeditada",
        "passa por consulta pública de 30 dias antes de qualquer perda de eficácia",
      ],
      correta: 3,
      explicacao: "O art. 12, § 4º, diz que ela perde a eficácia, com manutenção dos efeitos decorrentes, e veda a sua reedição.",
      explicacaoErradas:
        "“aprovação tácita” não existe. “anulação de todos os atos” contraria a manutenção dos efeitos. “reeditá-la” é vedado. “consulta pública” não se aplica à deliberação.",
      pegadinha: "Achar que tudo o que foi feito se desfaz.",
      conhecimento: "As propostas de normas regulamentares passam por consulta pública de no mínimo 30 dias, pelo art. 12, § 1º.",
    },
    {
      topico: "Motorista profissional",
      subassunto: "Tempo de direção",
      dificuldade: 5,
      raciocinio: "O limite do caput vale para carga e para passageiros.",
      enunciado:
        "A fiscalização confere dois motoristas profissionais. O de carga dirigiu 5 horas e 20 minutos sem parar. O de ônibus rodoviário dirigiu 5 horas e 40 minutos sem parar. Pelo art. 67-C,",
      alternativas: [
        "os dois descumprem a lei, pois o limite é de 4 horas para qualquer veículo",
        "só o motorista de ônibus descumpre a lei, pois passou de 5 horas e meia",
        "só o de carga descumpre, pois o limite para ele é de 4 horas de direção",
        "nenhum descumpre, pois o limite de 6 horas vale para os dois transportes",
        "ambos cumprem a lei, pois o tempo de direção só é medido ao fim da viagem",
      ],
      correta: 1,
      explicacao:
        "O caput veda mais de 5 horas e meia ininterruptas nos dois transportes. O de carga ficou abaixo. O de ônibus passou, e já devia ter feito pausa ao chegar às 4 horas.",
      explicacaoErradas:
        "“4 horas para qualquer veículo” e “para ele é de 4 horas” trocam a regra de passageiros. “6 horas” é o período do descanso de carga. “ao fim da viagem” não existe na lei.",
      pegadinha: "Trocar as 6 horas da pausa pelo limite de direção.",
      conhecimento: "Tempo de direção é só o período efetivamente ao volante, entre a origem e o destino.",
    },
    {
      topico: "Motorista profissional",
      subassunto: "Descanso e ADI 5.322",
      dificuldade: 5,
      raciocinio: "O STF manteve as 11 horas e derrubou o que vinha depois.",
      enunciado: "Sobre o descanso do art. 67-C, § 3º, depois da ADI 5.322 do STF, é correto afirmar que",
      alternativas: [
        "continua permitido fracioná-lo, desde que o primeiro período tenha 8 horas seguidas",
        "o mínimo de 11 horas permanece, e caiu a parte que permitia fracionar",
        "o mínimo passou a 8 horas seguidas, pois as outras 3 horas foram invalidadas",
        "ele pode coincidir com os intervalos de 30 minutos do § 1º, como no texto original",
        "ele pode ser gozado dentro do veículo, desde que este esteja em local seguro",
      ],
      correta: 1,
      explicacao:
        "Foi declarada inconstitucional a expressão sobre fracionar, usufruir no veículo, coincidir com os intervalos e observar 8 horas no primeiro período. Ficaram as 11 horas em 24 horas.",
      explicacaoErradas:
        "“fracioná-lo”, “coincidir com os intervalos” e “dentro do veículo” repetem o trecho derrubado. “passou a 8 horas” inverte o efeito da decisão.",
      pegadinha: "Decorar o texto antigo da lei.",
      conhecimento: "A viagem só começa depois de cumprido todo o descanso, pelo § 6º.",
    },
  ],
};
