import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-09",
  resumo: {
    ideia:
      "Cada infração tem natureza, penalidade e, às vezes, medida administrativa. As provas cobram os detalhes: o fator da multa, a suspensão e a diferença entre artigos parecidos.",
    itens: [
      {
        termo: "Art. 162",
        faz: "Sem habilitação, ou com ela cassada ou suspensa: multa de 3 vezes. Categoria diferente: 2 vezes. Vencida há mais de 30 dias: multa simples.",
      },
      {
        termo: "Entregar a direção",
        faz: "A quem está no art. 162: arts. 163 e 164. A habilitado sem condições físicas ou psíquicas: art. 166.",
      },
      {
        termo: "Álcool e recusa",
        faz: "Arts. 165 e 165-A: gravíssima, multa de 10 vezes, suspensão por 12 meses. Reincidência em 12 meses: multa em dobro.",
      },
      {
        termo: "Velocidade",
        faz: "Até 20% acima: média. De 20% a 50%: grave. Acima de 50%: gravíssima, 3 vezes e suspensão.",
      },
      {
        termo: "Contramão",
        faz: "Em via de duplo sentido: grave. Em via de sentido único: gravíssima.",
      },
      {
        termo: "Ultrapassagem",
        faz: "Arts. 202 e 203: multa de 5 vezes. Forçar passagem, art. 191: multa de 10 vezes e suspensão.",
      },
      {
        termo: "Bloqueios",
        faz: "Art. 209: grave. Bloqueio policial, art. 210: gravíssima, multa, apreensão e suspensão.",
        pista: "Art. 253-A: 20 vezes, e 60 para organizadores.",
      },
      {
        termo: "Socorro",
        faz: "Envolvido que não socorre, art. 176: gravíssima, 5 vezes e suspensão. Terceiro chamado pelo agente, art. 177: grave.",
      },
      {
        termo: "Art. 252",
        faz: "Segurar ou manusear celular: gravíssima. Fones ligados a aparelho sonoro: média.",
      },
    ],
    cuidado: "Reincidência no tempo de direção do art. 230, XXIII, muda a natureza: de média para grave.",
  },
  questoes: [
    {
      topico: "Habilitação",
      subassunto: "CNH vencida",
      dificuldade: 4,
      raciocinio: "A infração só nasce depois de 30 dias.",
      enunciado:
        "Na abordagem, a equipe constata que a CNH de um condutor venceu há 25 dias e a de outro, há 35 dias. Pelo art. 162, V, do CTB,",
      alternativas: [
        "os dois cometem infração gravíssima, pois CNH vencida não habilita ninguém",
        "os dois cometem infração média, com prazo de 30 dias para a renovação",
        "só o segundo comete a infração, pois ela exige mais de 30 dias",
        "nenhum comete infração, pois o vencimento só pesa depois de 60 dias",
        "só o primeiro comete a infração, pois o segundo já perdeu a habilitação",
      ],
      correta: 2,
      explicacao: "O inciso V pune dirigir com CNH vencida há mais de 30 dias: gravíssima, multa e retenção até a apresentação de condutor habilitado.",
      explicacaoErradas:
        "“os dois cometem” ignora os 30 dias. “infração média” erra a natureza. “60 dias” erra o prazo. “perdeu a habilitação” não é o efeito do vencimento.",
      pegadinha: "Achar que qualquer dia de atraso é infração.",
      conhecimento: "Dirigir com categoria diferente da do veículo é gravíssima com multa de 2 vezes, pelo inciso III.",
    },
    {
      topico: "Habilitação",
      subassunto: "Entrega da direção",
      dificuldade: 5,
      raciocinio: "Veja se quem recebe a direção é habilitado.",
      enunciado:
        "O dono de um carro entrega a direção a um amigo habilitado, que está visivelmente sem condições físicas de dirigir com segurança. A conduta do dono se enquadra",
      alternativas: [
        "no art. 166, que pune confiar a direção a habilitado sem condições",
        "no art. 163, que vale para toda entrega de direção a outra pessoa na via",
        "no art. 164, que pune a posse do veículo por quem não é seu proprietário",
        "no art. 162, pois a infração é só de quem dirige, e não de quem entrega",
        "em nenhum artigo, pois a CNH válida do amigo afasta a infração",
      ],
      correta: 0,
      explicacao: "O art. 166 pune confiar ou entregar a direção a pessoa que, mesmo habilitada, não está em condições de dirigir com segurança. É gravíssima, com multa.",
      explicacaoErradas:
        "“art. 163” e “art. 164” remetem às condições do art. 162, como falta de habilitação. “só de quem dirige” e “CNH válida” contrariam o art. 166.",
      pegadinha: "Parar no art. 163 sem olhar as condições de quem recebe.",
      conhecimento: "Devolver o veículo a quem não pode dirigir também se liga ao crime do art. 310.",
    },
    {
      topico: "Velocidade",
      subassunto: "Art. 218",
      dificuldade: 4,
      raciocinio: "Calcule o excesso em relação à máxima da via.",
      enunciado: "Em trecho com máxima de 80 km/h, a velocidade considerada de um veículo é de 110 km/h. Pelo art. 218 do CTB, a infração é",
      alternativas: [
        "média, pois o excesso não passa de 50% da máxima",
        "gravíssima, com multa de três vezes e suspensão",
        "grave com suspensão, pois o excesso passa de 30%",
        "grave, pois o excesso está entre 20% e 50%",
        "leve, pois a medição foi eletrônica",
      ],
      correta: 3,
      explicacao: "São 30 km/h acima de 80 km/h, ou 37,5%. Mais de 20% até 50% é infração grave, com multa.",
      explicacaoErradas:
        "“média” vale até 20%. “gravíssima” exige mais de 50%. “suspensão” não existe na faixa grave. “leve” não aparece no artigo.",
      pegadinha: "Calcular o excesso sobre 110 km/h, e não sobre 80 km/h.",
      conhecimento: "Acima de 50%, a multa é de 3 vezes e há suspensão do direito de dirigir.",
    },
    {
      topico: "Circulação",
      subassunto: "Contramão",
      dificuldade: 4,
      raciocinio: "A via de sentido único é a hipótese mais grave.",
      enunciado:
        "Um condutor anda pela contramão em via de duplo sentido, sem estar ultrapassando. Outro entra contra o fluxo em via sinalizada de sentido único. Pelo art. 186 do CTB, as infrações são, nessa ordem,",
      alternativas: ["gravíssima e grave", "grave e gravíssima", "grave e grave", "gravíssima e gravíssima", "média e grave"],
      correta: 1,
      explicacao: "O inciso I, duplo sentido, é infração grave. O inciso II, sentido único, é gravíssima.",
      explicacaoErradas:
        "“gravíssima e grave” inverte os incisos. “grave e grave” e “gravíssima e gravíssima” igualam hipóteses diferentes. “média” não aparece no artigo.",
      pegadinha: "Inverter os incisos.",
      conhecimento: "A exceção do inciso I vale só para ultrapassar, pelo tempo necessário e respeitada a preferência de quem vem em sentido contrário.",
    },
    {
      topico: "Circulação",
      subassunto: "Ultrapassagem",
      dificuldade: 5,
      raciocinio: "Separe o art. 203 do art. 191.",
      enunciado:
        "Um condutor ultrapassa pela contramão em trecho de linha dupla contínua amarela, sem forçar passagem entre veículos. A penalidade do art. 203 do CTB é",
      alternativas: [
        "multa de três vezes e suspensão do direito de dirigir",
        "multa de dez vezes e suspensão, regra de toda ultrapassagem proibida",
        "multa simples, pois a infração é de natureza grave",
        "multa de cinco vezes e suspensão do direito de dirigir",
        "multa de cinco vezes, em dobro se reincidir em 12 meses",
      ],
      correta: 4,
      explicacao: "O art. 203 traz infração gravíssima e multa de 5 vezes, sem suspensão. O parágrafo único aplica a multa em dobro na reincidência em 12 meses.",
      explicacaoErradas:
        "“três vezes” erra o fator. “dez vezes e suspensão” é do art. 191. “multa simples” erra a natureza. “cinco vezes e suspensão” acrescenta a suspensão.",
      pegadinha: "Colocar suspensão no art. 203.",
      conhecimento: "Forçar passagem entre veículos que se aproximam em sentidos opostos é a conduta do art. 191.",
    },
    {
      topico: "Circulação",
      subassunto: "Acostamento",
      dificuldade: 5,
      raciocinio: "Os dois casos são gravíssimos, mas o fator muda.",
      enunciado:
        "Na rodovia, um condutor transita pelo acostamento sem emergência. Outro usa o acostamento para ultrapassar um caminhão. Pelos arts. 193 e 202, I, do CTB, as multas são, nessa ordem, de",
      alternativas: ["1 e 5 vezes", "5 e 3 vezes", "5 e 5 vezes", "3 e 5 vezes", "3 e 3 vezes"],
      correta: 3,
      explicacao: "O art. 193 traz multa de 3 vezes. O art. 202, I, traz multa de 5 vezes. Ambas são gravíssimas.",
      explicacaoErradas:
        "“1 e 5” ignora o fator do art. 193. “5 e 3” inverte os fatores. “5 e 5” e “3 e 3” igualam condutas diferentes.",
      pegadinha: "Dar o mesmo fator a duas condutas no acostamento.",
      conhecimento: "O art. 202, II, também pune a ultrapassagem em interseções e passagens de nível.",
    },
    {
      topico: "Fiscalização",
      subassunto: "Bloqueio policial",
      dificuldade: 4,
      raciocinio: "O bloqueio policial tem artigo próprio.",
      enunciado: "Em operação da PRF, um condutor transpõe sem autorização um bloqueio viário policial. Pelo art. 210 do CTB, trata-se de infração",
      alternativas: [
        "gravíssima, com multa, apreensão do veículo e suspensão do direito de dirigir",
        "grave, com multa simples, igual à do bloqueio viário que não é policial na via",
        "grave, com multa e retenção do veículo até a chegada de condutor habilitado",
        "gravíssima, com multa de dez vezes e cassação imediata da CNH do condutor",
        "média, com multa e recolhimento do CLA, pois não houve sinistro nem vítima",
      ],
      correta: 0,
      explicacao: "O art. 210 é gravíssimo, com multa, apreensão do veículo e suspensão, além de remoção e recolhimento do documento de habilitação.",
      explicacaoErradas:
        "“grave” é a natureza do art. 209. “cassação imediata” não consta do art. 210. “média” e “recolhimento do CLA” não constam do artigo.",
      pegadinha: "Trocar o art. 210 pelo art. 209.",
      conhecimento: "Deixar de entrar na área de pesagem é infração do art. 209.",
    },
    {
      topico: "Motocicletas",
      subassunto: "Criança na garupa",
      dificuldade: 4,
      raciocinio: "A idade pesa mesmo com o capacete.",
      enunciado:
        "Uma motocicleta passa com condutor e passageiro de 9 anos, ambos de capacete, com o passageiro no assento suplementar. Pelo art. 244, V, do CTB,",
      alternativas: [
        "não há infração, pois todos os equipamentos de segurança estão em uso",
        "há infração média, com multa simples, por ser passageiro com capacete",
        "há infração gravíssima, com multa e suspensão do direito de dirigir",
        "há infração grave, que só existe se a criança tiver menos de 7 anos",
        "há infração leve, sanada com a troca do passageiro no local da fiscalização",
      ],
      correta: 2,
      explicacao: "O inciso V pune transportar criança menor de 10 anos ou sem condições de cuidar da própria segurança: gravíssima, multa e suspensão.",
      explicacaoErradas:
        "“não há infração” esquece a idade. “infração média”, “menos de 7 anos” e “infração leve” contrariam o inciso V.",
      pegadinha: "Olhar só para o capacete.",
      conhecimento: "Levar passageiro sem capacete, ou fora do assento suplementar, também está no art. 244, inciso II.",
    },
    {
      topico: "Motorista profissional",
      subassunto: "Tempo de direção",
      dificuldade: 5,
      raciocinio: "A reincidência muda a natureza.",
      enunciado:
        "Um motorista de ônibus é flagrado pela segunda vez em 12 meses desrespeitando o tempo de direção e o descanso do art. 67-C. Pelo art. 230, XXIII e § 1º, do CTB, a infração",
      alternativas: [
        "continua média, pois a reincidência aqui só gera multa em dobro",
        "passa a gravíssima, com suspensão do direito de dirigir por 12 meses",
        "passa a leve, com advertência por escrito no lugar da multa",
        "é convertida automaticamente em grave",
        "deixa de ser punida, pois o transporte coletivo é serviço essencial",
      ],
      correta: 3,
      explicacao:
        "A infração é média, com retenção para cumprir o descanso. Se o condutor cometeu infração igual nos últimos 12 meses, ela é convertida automaticamente em grave.",
      explicacaoErradas:
        "“multa em dobro” não é a regra desse parágrafo. “gravíssima” exagera. “passa a leve” e “deixa de ser punida” não constam do artigo.",
      pegadinha: "Aplicar a dobra da multa.",
      conhecimento: "Para condutor estrangeiro, a liberação depende do pagamento ou do depósito da multa, pelo § 2º.",
    },
    {
      topico: "Direção",
      subassunto: "Celular e fones",
      dificuldade: 4,
      raciocinio: "Segurar ou manusear o celular agrava o inciso V.",
      enunciado:
        "Um condutor dirige segurando o telefone celular com uma das mãos. Outro dirige com fones nos ouvidos ligados a aparelho sonoro. Pelo art. 252 do CTB, as infrações são, nessa ordem,",
      alternativas: ["grave e média", "gravíssima e média", "média e média", "gravíssima e grave", "média e leve"],
      correta: 1,
      explicacao: "O parágrafo único faz do uso do celular em mãos infração gravíssima. Os fones, no inciso VI, são infração média.",
      explicacaoErradas:
        "“grave e média” erra a primeira. “média e média” esquece o parágrafo único. “gravíssima e grave” e “média e leve” erram a natureza dos fones.",
      pegadinha: "Tratar os dois como a mesma infração.",
      conhecimento: "Dirigir com o braço do lado de fora também é infração média, pelo inciso I.",
    },
    {
      topico: "Fiscalização",
      subassunto: "Interrupção da via",
      dificuldade: 5,
      raciocinio: "O organizador tem multa própria.",
      enunciado:
        "Um grupo usa caminhões para interromper de propósito, sem autorização, uma rodovia federal. Um dos integrantes organizou o ato. Pelo art. 253-A, § 1º, do CTB, a multa dele",
      alternativas: [
        "é agravada em 60 vezes, pois ele organizou a conduta",
        "é agravada em 20 vezes, igual à de todos os participantes do bloqueio",
        "é agravada em 10 vezes, pois a regra geral da gravíssima não muda aqui",
        "é de 40 vezes, pois quem organiza paga o dobro de quem participa",
        "é aplicada só à pessoa jurídica, que responde pelos seus motoristas",
      ],
      correta: 0,
      explicacao: "A multa do caput é de 20 vezes, com suspensão por 12 meses. O § 1º agrava a multa em 60 vezes para os organizadores.",
      explicacaoErradas:
        "“20 vezes” é a dos participantes. “10 vezes” não é o fator do artigo. “40 vezes” aplica uma dobra que vale para reincidência. “só à pessoa jurídica” contraria o § 3º.",
      pegadinha: "Dobrar a multa do caput.",
      conhecimento: "O § 3º manda a autoridade restabelecer de imediato, se possível, a circulação normal.",
    },
    {
      topico: "Sinistros",
      subassunto: "Socorro",
      dificuldade: 5,
      raciocinio: "O envolvido responde mais do que o terceiro.",
      enunciado:
        "Um condutor envolvido em sinistro com vítima não a socorre, podendo fazê-lo. Outro condutor, que não se envolveu no sinistro, recusa o socorro pedido pelo agente. Pelos arts. 176 e 177 do CTB, as infrações são",
      alternativas: [
        "gravíssima nos dois casos, com suspensão do direito de dirigir para ambos",
        "grave nos dois casos, pois a conduta omissiva é a mesma nas duas situações",
        "grave a do envolvido e gravíssima a do terceiro, chamado pelo próprio agente",
        "gravíssima a do envolvido e média a do terceiro, por ser conduta sem dolo",
        "gravíssima a do envolvido e grave a do terceiro que recusou o pedido",
      ],
      correta: 4,
      explicacao: "O art. 176 é gravíssimo, com multa de 5 vezes e suspensão. O art. 177, para quem foi solicitado pela autoridade ou seus agentes, é grave.",
      explicacaoErradas:
        "“nos dois casos” iguala artigos diferentes. “grave a do envolvido” inverte as naturezas. “média” erra o art. 177.",
      pegadinha: "Inverter os artigos.",
      conhecimento: "O art. 176 também pune não preservar o local e não se identificar ao policial.",
    },
  ],
};
