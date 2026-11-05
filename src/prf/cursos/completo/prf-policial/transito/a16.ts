import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-16",
  resumo: {
    ideia:
      "A aula junta duas normas: a Resolução 525/2015, sobre a fiscalização do tempo de direção e descanso, e a Resolução 508/2014, sobre passageiros em compartimento de carga, o chamado pau de arara.",
    itens: [
      {
        termo: "Limites do CTB",
        faz: "Até 5 h 30 ao volante. Carga: 30 min dentro de cada 6 h. Passageiros: 30 min a cada 4 h.",
      },
      {
        termo: "Meios de prova",
        faz: "Primeiro o registrador. Diário de bordo, papeleta ou ficha só se ele não permitir a comprovação.",
      },
      {
        termo: "Desconto do registrador",
        faz: "Erro máximo de 2 min a cada 24 h e de 10 min a cada 7 dias.",
      },
      {
        termo: "Intervalo de descanso",
        faz: "Não conta interrupção involuntária, como engarrafamento, semáforo e sinalização.",
      },
      {
        termo: "Retenção",
        faz: "30 min pelo intervalo descumprido. 11 h pelo descanso diário descumprido.",
        pista: "Outro condutor descansado evita a retenção.",
      },
      {
        termo: "Art. 6º, § 6º",
        faz: "A critério do agente, sem retenção imediata de coletivo, carga perecível e produtos perigosos, no caso dos 30 min.",
      },
      {
        termo: "Res. 508: quando cabe",
        faz: "Sem linha regular de ônibus, no mesmo município ou entre municípios limítrofes, a título precário.",
        pista: "Prazo máximo de 12 meses, pelo art. 108 do CTB.",
      },
      {
        termo: "Res. 508: espaço",
        faz: "35 dm² de espaço útil por pessoa, contado o encarregado do atendimento.",
      },
      {
        termo: "Res. 508: vedações",
        faz: "Menor de 10 anos, passageiro em pé, carga no mesmo ambiente, basculante, boiadeiro, combinação e partes externas.",
      },
    ],
    cuidado: "O veículo adaptado só circula depois do CSV e da vistoria da autoridade que concede a autorização.",
  },
  questoes: [
    {
      topico: "Res. 525",
      subassunto: "Meios de prova",
      dificuldade: 4,
      raciocinio: "Há uma ordem entre os meios.",
      enunciado:
        "Um motorista empregado tem registrador em pleno funcionamento, mas quer provar seu tempo de direção apenas com o diário de bordo. Pelo art. 2º, § 1º, da Resolução Contran 525/2015,",
      alternativas: [
        "a fiscalização usa o registrador, pois o diário só entra se ele não comprovar",
        "a fiscalização usa o diário, pois a escolha do meio de prova cabe ao motorista",
        "a fiscalização usa os dois meios, e vale sempre o de maior tempo de descanso",
        "a fiscalização usa a ficha do autônomo, que é o meio preferencial nesse caso",
        "a fiscalização fica suspensa, pois motorista empregado responde só ao empregador",
      ],
      correta: 0,
      explicacao: "O § 1º só admite diário, papeleta ou ficha quando não for possível comprovar pelo disco ou pela fita do registrador do próprio veículo.",
      explicacaoErradas:
        "“escolha do meio” e “maior tempo de descanso” não existem. “ficha do autônomo” é para o autônomo, e também é subsidiária. “responde só ao empregador” contraria o art. 5º.",
      pegadinha: "Achar que os meios são equivalentes.",
      conhecimento: "O autônomo deve portar a ficha de trabalho das últimas 24 horas.",
    },
    {
      topico: "Res. 525",
      subassunto: "Intervalo de descanso",
      dificuldade: 4,
      raciocinio: "Descanso é pausa real.",
      enunciado:
        "Um caminhoneiro ficou 30 minutos parado em um engarrafamento e anotou esse tempo como descanso. Pelo art. 1º, parágrafo único, III, da Resolução Contran 525/2015, esse período",
      alternativas: [
        "conta como descanso, pois o veículo ficou imobilizado por mais de 10 minutos",
        "conta como descanso, se estiver registrado no diário de bordo do motorista",
        "não conta como descanso, pois a interrupção foi involuntária",
        "conta pela metade, pois o motorista seguiu ao volante durante todo o tempo",
        "conta como descanso, se a PRF tiver confirmado o engarrafamento naquele dia",
      ],
      correta: 2,
      explicacao: "O inciso III exclui do intervalo de descanso as interrupções involuntárias, como as causadas por engarrafamentos, semáforo e sinalização de trânsito.",
      explicacaoErradas:
        "“imobilizado” e “registrado no diário” não bastam. “pela metade” não existe. “PRF tiver confirmado” não muda a natureza involuntária da parada.",
      pegadinha: "Parado não é o mesmo que descansando.",
      conhecimento: "O motorista profissional responde por controlar e registrar o tempo de condução, pelo art. 67-E do CTB.",
    },
    {
      topico: "Res. 525",
      subassunto: "Erro do registrador",
      dificuldade: 5,
      raciocinio: "Desconte o erro antes de comparar com o limite.",
      enunciado:
        "Ao analisar o registrador em um período de 24 horas, o agente mede 5 h 31 min de direção ininterrupta de um caminhão. Pelo art. 2º, § 4º, da Resolução Contran 525/2015, combinado com o art. 67-C do CTB,",
      alternativas: [
        "há infração, pois a medição não admite desconto e passou de 5 h 30",
        "não há infração, pois o desconto de 2 minutos leva a medição a 5 h 29",
        "há infração, pois o desconto só vale em análises de sete dias seguidos",
        "não há infração, pois o desconto é de 10 minutos e leva a medição a 5 h 21",
        "não há infração, pois o limite de 5 h 30 só alcança o transporte de passageiros",
      ],
      correta: 1,
      explicacao: "Em 24 horas, o desconto é de 2 minutos: 5 h 31 menos 2 minutos dá 5 h 29, dentro do limite de 5 h 30.",
      explicacaoErradas:
        "“não admite desconto” contraria o § 4º. “sete dias” é outra faixa, de 10 minutos, que é a usada por “leva a medição a 5 h 21”. “só alcança o transporte de passageiros” ignora que o limite vale também para cargas.",
      pegadinha: "Comparar a medição bruta com o limite.",
      conhecimento: "O desconto vale para a fiscalização pelo registrador, prevista no inciso I.",
    },
    {
      topico: "Res. 525",
      subassunto: "Outro condutor",
      dificuldade: 5,
      raciocinio: "A retenção protege o descanso, e outro motorista resolve isso.",
      enunciado:
        "Na abordagem, o motorista não cumpriu o descanso de 11 horas. Outro condutor habilitado, que respeitou seus tempos, se apresenta para seguir viagem. Pelo art. 6º, § 3º, da Resolução Contran 525/2015,",
      alternativas: [
        "a retenção se mantém por 11 horas, pois ela acompanha o veículo, e não o condutor",
        "a retenção cai para 30 minutos, por causa da troca de condutor no local",
        "o veículo vai ao depósito, e a troca só cabe depois de um dia inteiro parado",
        "a autuação é cancelada, pois a viagem não seguiu com o condutor infrator",
        "a retenção não se aplica, e a viagem segue com o outro condutor",
      ],
      correta: 4,
      explicacao: "O § 3º afasta os procedimentos de retenção se outro condutor habilitado, que tenha observado o tempo de direção e descanso, continuar a viagem.",
      explicacaoErradas:
        "“acompanha o veículo” e “depósito” ignoram o § 3º. “cai para 30 minutos” mistura os prazos do § 1º. “cancelada” confunde medida administrativa com infração, que continua.",
      pegadinha: "Achar que a troca apaga a infração.",
      conhecimento: "A infração do art. 230, XXIII, do CTB é média, com multa e retenção para cumprimento do descanso.",
    },
    {
      topico: "Res. 525",
      subassunto: "Retenção imediata",
      dificuldade: 5,
      raciocinio: "No caso dos 30 minutos, há espaço para o critério do agente.",
      enunciado:
        "Um ônibus com passageiros é abordado em rodovia sem ter cumprido o intervalo de 30 minutos. Pelo art. 6º da Resolução Contran 525/2015, a retenção do veículo",
      alternativas: [
        "será sempre imediata, pois a lei não abre exceção para os passageiros",
        "será de 11 horas, com o veículo levado ao depósito do órgão fiscalizador",
        "será dispensada, pois o transporte coletivo não se sujeita ao limite do CTB",
        "pode não ser imediata, a critério do agente",
        "só ocorre depois da notificação da empresa e do fim do prazo de defesa",
      ],
      correta: 3,
      explicacao: "O § 6º diz que, no caso do inciso I do § 1º, a critério do agente, não se dará a retenção imediata de coletivo de passageiros, carga perecível e produtos perigosos.",
      explicacaoErradas:
        "“sempre imediata” ignora o § 6º. “11 horas” é pelo descanso diário. “dispensada” contraria o art. 67-C. “prazo de defesa” não condiciona medida administrativa.",
      pegadinha: "Ler a regra como obrigatória em todos os casos.",
      conhecimento: "O § 4º permite liberar o veículo para descansar em local próximo, com recolhimento do documento até o fim do período.",
    },
    {
      topico: "Res. 508",
      subassunto: "Trajeto",
      dificuldade: 5,
      raciocinio: "São dois requisitos: sem ônibus e trajeto curto.",
      enunciado:
        "Uma prefeitura pede autorização para um caminhão adaptado levar trabalhadores até um município vizinho do vizinho, sem divisa com o de origem. Não há linha regular de ônibus. Pelo art. 2º da Resolução Contran 508/2014, o pedido",
      alternativas: [
        "não pode ser autorizado, pois o trajeto exige o mesmo município ou municípios limítrofes",
        "pode ser autorizado, pois a falta de linha regular de ônibus basta para o transporte",
        "pode ser autorizado, se cada autoridade da via aprovar o seu próprio trecho do percurso",
        "pode ser autorizado por 24 meses, por se tratar de transporte de trabalhadores de obra",
        "não pode ser autorizado, pois o transporte só vale para escolares de zona rural do país",
      ],
      correta: 0,
      explicacao: "O art. 2º só admite a circulação no mesmo município ou entre municípios limítrofes, quando não houver linha regular de ônibus. Os requisitos são cumulativos.",
      explicacaoErradas:
        "“basta” ignora o limite do trajeto. “cada autoridade” trata de outra exigência, do art. 1º, § 2º. “24 meses” passa dos 12 meses do art. 108. “escolares” não está na norma.",
      pegadinha: "Parar na falta de ônibus.",
      conhecimento: "A autorização é a título precário e tem porte obrigatório.",
    },
    {
      topico: "Res. 508",
      subassunto: "Lotação",
      dificuldade: 4,
      raciocinio: "Passe tudo para dm²: 1 m² = 100 dm².",
      enunciado:
        "Uma carroceria adaptada tem 7 m² de espaço útil. Pelo art. 4º, § 1º, da Resolução Contran 508/2014, o número máximo de pessoas admitidas no transporte é de",
      alternativas: [
        "14 pessoas, com 50 dm² por pessoa",
        "18 pessoas, descontado o corredor interno",
        "20 pessoas, contado o encarregado do atendimento",
        "21 pessoas, pois o encarregado do atendimento não conta",
        "35 pessoas, com 20 dm² por pessoa",
      ],
      correta: 2,
      explicacao: "7 m² são 700 dm². Dividindo por 35 dm², chega-se a 20 pessoas, incluído o encarregado da cobrança e do atendimento.",
      explicacaoErradas:
        "“50 dm²” e “20 dm²” trocam a base. “corredor interno” não existe na regra. “não conta” contraria o § 1º, que inclui o encarregado.",
      pegadinha: "Excluir o encarregado.",
      conhecimento: "O número de passageiros autorizados consta do documento de autorização.",
    },
    {
      topico: "Res. 508",
      subassunto: "Enquadramento",
      dificuldade: 5,
      raciocinio: "O art. 8º liga cada falha a um artigo do CTB.",
      enunciado:
        "Com autorização válida e veículo adaptado, um caminhão leva, na carroceria, uma criança de 8 anos entre os passageiros. Pelo art. 8º da Resolução Contran 508/2014, a conduta se enquadra no",
      alternativas: [
        "art. 230, II, do CTB, por falta de autorização para o transporte de passageiros",
        "art. 168 do CTB, pela presença de passageiro com menos de 10 anos",
        "art. 231, VII, do CTB, por excesso de passageiros na carroceria adaptada",
        "art. 162, III, do CTB, por habilitação diferente da exigida para o transporte",
        "art. 235 do CTB, por transportar passageiro nas partes externas do veículo",
      ],
      correta: 1,
      explicacao: "O art. 5º, I, proíbe passageiro com idade inferior a 10 anos, e o art. 8º, III, enquadra o caso no art. 168 do CTB.",
      explicacaoErradas:
        "“falta de autorização” contraria o enunciado. “excesso de passageiros”, “habilitação diferente” e “partes externas” são outros incisos do art. 8º.",
      pegadinha: "Enquadrar tudo no art. 230, II.",
      conhecimento: "O proprietário ou o condutor responde conforme o art. 257 do CTB.",
    },
    {
      topico: "Res. 508",
      subassunto: "Habilitação",
      dificuldade: 5,
      raciocinio: "A lotação inclui o compartimento adaptado.",
      enunciado:
        "Um veículo de carga com PBT de 3.000 kg foi adaptado e, somados cabine e compartimento de carga, passou a ter 12 lugares, além do condutor. Pelo art. 6º da Resolução Contran 508/2014, o condutor precisa de",
      alternativas: [
        "categoria B, pois o PBT do veículo não passa de 3.500 kg",
        "categoria C, pois todo veículo de carga exige essa categoria em qualquer situação de transporte",
        "categoria B com curso especializado, pois o PBT do veículo é baixo",
        "categoria C com curso especializado, pois o transporte é excepcional",
        "categoria D e curso especializado, pois a lotação excede oito lugares",
      ],
      correta: 4,
      explicacao: "O inciso III exige categoria D e curso especializado quando a lotação passa de oito lugares, excluído o do condutor. O parágrafo único soma a lotação do compartimento de carga.",
      explicacaoErradas:
        "“categoria B” olha só o PBT. “categoria C” vale para PBT acima de 3.500 kg. “B com curso” e “C com curso” não existem nesse artigo.",
      pegadinha: "Olhar só o peso.",
      conhecimento: "Sem o curso especializado, o art. 8º, V, remete ao art. 232 do CTB.",
    },
  ],
};
