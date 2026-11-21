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
      {
        termo: "Cidadão (arts. 72 e 73)",
        faz: "Qualquer cidadão ou entidade pode pedir, por escrito, sinalização, fiscalização e equipamentos de segurança, e sugerir mudanças nas normas. O órgão do Sistema Nacional de Trânsito tem o dever de analisar e responder por escrito, dizendo se vai atender e quando.",
      },
      {
        termo: "Pedestres (arts. 68 a 71)",
        faz: "O pedestre usa calçadas e passeios. Sem eles, na cidade anda pelo bordo da pista em fila única; na rodovia, pelo acostamento ou, sem ele, pelo bordo da pista em fila única, no sentido contrário ao dos veículos. Para atravessar, usa a faixa ou a passagem que estiver a até 50 metros.",
        pista: "Ciclista desmontado, empurrando a bicicleta, tem os mesmos direitos e deveres do pedestre.",
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
    {
      topico: "Pegadinha Cebraspe",
      subassunto: "Competências da PRF (art. 20, III)",
      dificuldade: 4,
      raciocinio: "Nem todo item tem pegadinha: comparar com o art. 20, III, antes de marcar errado.",
      enunciado:
        "Item no estilo Cebraspe: “Compete à Polícia Rodoviária Federal, no âmbito das rodovias e estradas federais, executar a fiscalização de trânsito, aplicar as penalidades de advertência por escrito e multa e as medidas administrativas cabíveis, com a notificação dos infratores e a arrecadação das multas aplicadas.” Esse item está",
      alternativas: [
        "errado, pois a advertência por escrito só pode ser aplicada pelo DNIT",
        "errado, pois a PRF autua, mas quem arrecada as multas é o Detran",
        "errado, pois a PRF não aplica medida administrativa, só autua",
        "errado, pois a PRF aplica a multa, mas não notifica o infrator",
        "certo, pois tudo o que o item cita consta do art. 20, III, do CTB",
      ],
      correta: 4,
      explicacao:
        "O item segue o art. 20, III: a PRF fiscaliza, aplica advertência por escrito e multa, aplica as medidas administrativas, notifica os infratores e arrecada as multas, nas rodovias e estradas federais.",
      explicacaoErradas:
        "O DNIT tem competência parecida nas rodovias federais, mas isso não tira a da PRF. O Detran não arrecada as multas da PRF. Medida administrativa e notificação estão no próprio inciso III.",
      pegadinha: "Achar que a PRF só autua e que outro órgão pune, notifica ou arrecada. Este item está certo.",
      conhecimento: "Na rodovia federal, a PRF faz o ciclo inteiro: fiscaliza, pune, notifica e arrecada.",
    },
    {
      topico: "Pegadinha Cebraspe",
      subassunto: "Recurso julgado pelo Cetran (art. 14)",
      dificuldade: 5,
      raciocinio: "O começo repete o art. 14, V. Ler o final com o parágrafo único na cabeça.",
      enunciado:
        "Item no estilo Cebraspe: “Compete aos Cetran julgar os recursos interpostos contra decisões das Jari, e, da decisão do conselho nesses casos, ainda cabe recurso ao Contran na esfera administrativa.” Esse item está",
      alternativas: [
        "certo, pois o Contran revê, por último, as decisões dos Cetran",
        "errado, pois o recurso contra a decisão da Jari vai direto ao Contran",
        "errado, pois da decisão do Cetran não cabe recurso administrativo",
        "errado, pois os Cetran não julgam recursos, só respondem a consultas",
        "errado, pois a decisão da Jari não admite nenhum tipo de recurso",
      ],
      correta: 2,
      explicacao:
        "O começo está certo: o Cetran julga recursos contra decisões das Jari (art. 14, V, a). O final está errado: pelo parágrafo único, dos casos do inciso V julgados pelo órgão, não cabe recurso na esfera administrativa. O caso termina ali, na via administrativa.",
      explicacaoErradas:
        "O CTB não dá ao Contran a tarefa de julgar recurso de multa. Contra a decisão da Jari cabe recurso, e ele vai ao Cetran quando a multa é de órgão estadual ou municipal. Responder a consultas também é tarefa do Cetran (inciso III), ao lado de julgar recursos.",
      pegadinha: "Começo certo, final errado: depois do Cetran, não há mais recurso administrativo.",
      conhecimento: "Caminho do recurso da multa estadual ou municipal: órgão que multou → Jari → Cetran, e fim.",
    },
    {
      topico: "Pegadinha Cebraspe",
      subassunto: "Pedestre no semáforo (art. 70, parágrafo único)",
      dificuldade: 5,
      raciocinio: "Imaginar a cena: o sinal abre para os carros com gente ainda no meio da faixa.",
      enunciado:
        "Item no estilo Cebraspe: “Nos locais em que houver sinalização semafórica de controle de passagem, será dada preferência aos pedestres que não tenham iniciado a travessia, mesmo em caso de mudança do semáforo liberando a passagem dos veículos.” Esse item está",
      alternativas: [
        "certo, pois quem ainda vai atravessar tem a preferência no semáforo",
        "errado, pois a preferência é de quem não tenha concluído a travessia",
        "errado, pois, aberto o sinal para os carros, o pedestre perde a vez",
        "errado, pois a preferência no semáforo vale só para idosos e crianças",
        "errado, pois a preferência só vale onde houver uma faixa elevada",
      ],
      correta: 1,
      explicacao:
        "O parágrafo único do art. 70 protege o pedestre que não tenha concluído a travessia, isto é, quem já está atravessando quando o sinal abre para os carros. Quem ainda não começou deve esperar o próximo sinal.",
      explicacaoErradas:
        "“quem ainda vai atravessar” é o erro do item. Mesmo com o sinal aberto para os carros, quem está no meio da travessia passa primeiro. A regra vale para todos os pedestres e não depende de faixa elevada.",
      pegadinha: "Palavra trocada: “não tenham concluído” virou “não tenham iniciado”.",
      conhecimento: "Quem já está na faixa termina a travessia, mesmo que o sinal mude.",
    },
    {
      topico: "Certo ou Errado (Cebraspe)",
      subassunto: "Registrador de tempo (art. 67-E, § 4º)",
      dificuldade: 4,
      raciocinio: "Veja quem a lei põe como responsável pelos dados do registrador: o dono ou quem dirige?",
      enunciado:
        "Pedro é dono de um caminhão equipado com registrador instantâneo inalterável de velocidade e de tempo, o tacógrafo. João, motorista profissional, dirige esse caminhão.\n\nNessa situação hipotética, a guarda, a preservação e a exatidão das informações do registrador são de responsabilidade de Pedro, por ser o proprietário do caminhão.",
      alternativas: ["Certo", "Errado"],
      correta: 1,
      ordemFixa: true,
      explicacao:
        "O art. 67-E, § 4º, diz que a guarda, a preservação e a exatidão das informações contidas no registrador “são de responsabilidade do condutor”. Aqui, de João.",
      pegadinha: "Trocar o condutor pelo proprietário.",
      conhecimento:
        "O tempo de direção pode ser controlado pelo registrador, por diário de bordo, papeleta ou ficha de trabalho externo, ou por meios eletrônicos instalados no veículo, conforme norma do Contran (art. 67-E, § 2º).",
    },
    {
      topico: "Certo ou Errado (Cebraspe)",
      subassunto: "Situação excepcional (art. 67-C, §§ 2º e 8º)",
      dificuldade: 5,
      raciocinio: "Lembre o que a lei permite quando não dá para parar por um motivo excepcional, justificado e registrado.",
      enunciado:
        "Rita, motorista profissional de transporte de cargas, completou 5 horas e meia de direção ininterrupta. Os pontos de parada da rota estavam com todas as vagas ocupadas, e essa situação excepcional e justificada foi devidamente registrada.\n\nNessa situação hipotética, o tempo de direção de Rita poderá ser elevado pelo período necessário para que ela, o veículo e a carga cheguem a um lugar que ofereça a segurança e o atendimento de que precisam, desde que não haja comprometimento da segurança rodoviária.",
      alternativas: ["Certo", "Errado"],
      correta: 0,
      ordemFixa: true,
      explicacao:
        "É o que diz o art. 67-C, § 2º: em situações excepcionais de inobservância justificada, devidamente registradas, o tempo de direção pode ser elevado pelo período necessário para chegar a um lugar que ofereça “a segurança e o atendimento demandados”, desde que não haja comprometimento da segurança rodoviária. O § 8º cita o “exaurimento das vagas de estacionamento” nos pontos de parada, e cabe ao Contran regulamentar esses casos.",
      pegadinha: "Achar que o limite de 5 horas e meia não tem nenhuma exceção.",
      conhecimento:
        "Quando ocorre a situação excepcional do § 8º do art. 67-C, o motorista de cargas não fica sujeito às penalidades do CTB por não observar os períodos de direção e de descanso (art. 67-E, § 1º-A).",
    },
    {
      topico: "Certo ou Errado (Cebraspe)",
      subassunto: "Intervalo no transporte de passageiros (art. 67-C, § 1º-A)",
      dificuldade: 4,
      raciocinio: "Separe carga e passageiros: o intervalo de 30 minutos tem um prazo diferente para cada um.",
      enunciado:
        "Marcos é motorista profissional de ônibus de transporte rodoviário coletivo de passageiros.\n\nNessa situação hipotética, Marcos deve observar 30 minutos para descanso dentro de cada 6 horas na condução, a mesma regra dos motoristas de transporte de carga.",
      alternativas: ["Certo", "Errado"],
      correta: 1,
      ordemFixa: true,
      explicacao:
        "Os 30 minutos dentro de cada 6 horas são do transporte de carga (art. 67-C, § 1º). No transporte rodoviário de passageiros, o § 1º-A manda observar 30 minutos para descanso “a cada 4 (quatro) horas” na condução.",
      pegadinha: "Aplicar ao ônibus a regra das 6 horas, que é do caminhão.",
      conhecimento:
        "O limite de 5 horas e meia ininterruptas ao volante vale para os dois: ônibus rodoviário e caminhão (art. 67-C, caput).",
    },
    {
      topico: "Certo ou Errado (Cebraspe)",
      subassunto: "O que é tempo de direção (art. 67-C, § 4º)",
      dificuldade: 4,
      raciocinio: "Tempo de direção é só o tempo ao volante, no caminho entre a origem e o destino.",
      enunciado:
        "João, motorista profissional de transporte de cargas, ficou 3 horas fora do caminhão, no pátio de um armazém, esperando a descarga.\n\nNessa situação hipotética, essas 3 horas contam como tempo de direção.",
      alternativas: ["Certo", "Errado"],
      correta: 1,
      ordemFixa: true,
      explicacao:
        "O art. 67-C, § 4º, diz que tempo de direção ou de condução é “apenas o período em que o condutor estiver efetivamente ao volante, em curso entre a origem e o destino”. Fora do caminhão, esperando a descarga, João não está ao volante.",
      pegadinha: "Confundir tempo de direção com tempo de trabalho.",
      conhecimento: "Quem controla e registra o tempo de condução é o próprio motorista profissional (art. 67-E, caput).",
    },
    {
      topico: "Certo ou Errado (Cebraspe)",
      subassunto: "Motorista subcontratado (art. 67-C, §§ 6º e 7º)",
      dificuldade: 5,
      raciocinio: "A proibição de mandar viajar sem o descanso completo vale até para o motorista subcontratado.",
      enunciado:
        "Pedro, dono de uma transportadora, subcontratou João, motorista profissional autônomo, para uma viagem de carga. João acabou de voltar de outra viagem e ainda não cumpriu o descanso obrigatório.\n\nNessa situação hipotética, Pedro não pode ordenar que João comece a nova viagem antes de cumprir integralmente esse descanso, mesmo João sendo subcontratado.",
      alternativas: ["Certo", "Errado"],
      correta: 0,
      ordemFixa: true,
      explicacao:
        "O art. 67-C, § 6º, diz que o condutor só iniciará uma viagem após cumprir integralmente o descanso do § 3º. E o § 7º proíbe o transportador de ordenar a qualquer motorista a seu serviço, “ainda que subcontratado”, que dirija sem observar o § 6º.",
      pegadinha: "Achar que o motorista subcontratado fica fora da regra.",
      conhecimento:
        "A mesma proibição vale para o embarcador, o consignatário de cargas, o operador de terminais de carga, o operador de transporte multimodal de cargas e o agente de cargas (art. 67-C, § 7º).",
    },
    {
      topico: "Certo ou Errado (Cebraspe)",
      subassunto: "Início de viagem (art. 67-C, § 5º)",
      dificuldade: 5,
      raciocinio: "Veja a definição de início de viagem: ela fala em ida e em retorno, com ou sem carga.",
      enunciado:
        "Lúcia, motorista profissional de transporte de cargas, entregou a carga em outra cidade e vai voltar com o caminhão vazio.\n\nNessa situação hipotética, a partida de volta, mesmo sem carga, é considerada início de viagem.",
      alternativas: ["Certo", "Errado"],
      correta: 0,
      ordemFixa: true,
      explicacao:
        "O art. 67-C, § 5º, diz que início de viagem é “a partida do veículo na ida ou no retorno, com ou sem carga”. As partidas nos dias seguintes, até o destino, são continuação da mesma viagem.",
      pegadinha: "Achar que caminhão vazio não está em viagem.",
      conhecimento:
        "O motorista só inicia uma viagem depois de cumprir por inteiro o descanso mínimo de 11 horas dentro de 24 horas (art. 67-C, §§ 3º e 6º).",
    },
    {
      topico: "Certo ou Errado (Cebraspe)",
      subassunto: "Quem tem limite de tempo ao volante (arts. 67-A e 67-C)",
      dificuldade: 4,
      raciocinio: "Veja para quem vale o limite de 5 horas e meia: para todo motorista ou só para alguns?",
      enunciado:
        "Beatriz, de férias, dirigiu o carro da família por 7 horas seguidas, sem parar, numa rodovia federal.\n\nNessa situação hipotética, Beatriz cometeu infração de trânsito por ultrapassar o tempo máximo de 5 horas e meia de direção ininterrupta.",
      alternativas: ["Certo", "Errado"],
      correta: 1,
      ordemFixa: true,
      explicacao:
        "O limite do art. 67-C é para o motorista profissional que dirige veículo de transporte rodoviário coletivo de passageiros ou de transporte rodoviário de cargas. A infração do art. 230, XXIII, também só vale “quando se tratar de veículo de transporte de carga ou coletivo de passageiros”. Beatriz dirigia o carro da família.",
      pegadinha: "Achar que o limite de 5 horas e meia vale para todo motorista.",
      conhecimento:
        "O CTB não fixa limite de horas ao volante para o motorista comum, mas todo condutor deve ter, a todo momento, domínio do veículo (art. 28).",
    },
  ],
};
