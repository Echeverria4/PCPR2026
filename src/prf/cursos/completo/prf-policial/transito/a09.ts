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
    {
      topico: "Pegadinha Cebraspe",
      subassunto: "Dirigir sob influência de álcool (art. 165)",
      dificuldade: 5,
      raciocinio: "Conferir penalidade e medida administrativa do art. 165, até a última palavra.",
      enunciado:
        "Item no estilo Cebraspe: “Dirigir sob a influência de álcool é infração gravíssima, punida com multa multiplicada por dez e suspensão do direito de dirigir por doze meses, com as medidas administrativas de recolhimento do documento de habilitação e remoção do veículo.” Esse item está",
      alternativas: [
        "certo, pois penalidades e medidas são as previstas no art. 165",
        "errado, pois a multa do art. 165 é multiplicada por cinco vezes",
        "errado, pois a suspensão prevista no art. 165 é de seis meses",
        "errado, pois a medida do art. 165 é a retenção do veículo",
        "errado, pois o art. 165 não prevê o recolhimento da habilitação",
      ],
      correta: 3,
      explicacao:
        "Infração gravíssima, multa ×10, suspensão por 12 meses e recolhimento do documento de habilitação estão certos. O erro está na última medida: o art. 165 prevê a retenção do veículo, e não a remoção.",
      explicacaoErradas:
        "“certo” ignora a troca de “retenção” por “remoção”. A multa é multiplicada por dez, e a suspensão é de 12 meses. O recolhimento da habilitação está no próprio artigo.",
      pegadinha: "Palavra trocada: “retenção” virou “remoção”, duas medidas parecidas.",
      conhecimento: "Retenção: o veículo fica no local até aparecer um condutor habilitado. Se ninguém aparecer, aí sim ele é removido (art. 270, § 4º).",
    },
    {
      topico: "Pegadinha Cebraspe",
      subassunto: "Excesso de velocidade (art. 218)",
      dificuldade: 5,
      raciocinio: "As faixas estão certas. Ver se o art. 218 fixa prazo para a suspensão.",
      enunciado:
        "Item no estilo Cebraspe: “Transitar em velocidade superior à máxima permitida em até 20% é infração média; em mais de 20% até 50%, grave; e em mais de 50%, gravíssima, punida com multa multiplicada por três e suspensão do direito de dirigir por doze meses.” Esse item está",
      alternativas: [
        "certo, pois as três faixas e as penalidades são as do art. 218",
        "errado, pois acima de 50% a infração é grave, e não gravíssima",
        "errado, pois a faixa de até 20% acima do limite é infração leve",
        "errado, pois o art. 218 não fixa doze meses para a suspensão",
        "errado, pois acima de 50% a multa é multiplicada por dez vezes",
      ],
      correta: 3,
      explicacao:
        "As faixas estão certas: até 20%, média; de 20% a 50%, grave; acima de 50%, gravíssima com multa ×3 e suspensão. O erro está no fim: o art. 218, III, não fixa prazo para a suspensão. Vale então o art. 261, § 1º, II: de 2 a 8 meses.",
      explicacaoErradas:
        "“certo” ignora os doze meses acrescentados. Acima de 50% é gravíssima. Até 20% é média, e não leve. A multa é ×3, e não ×10.",
      pegadinha: "Começo certo, final errado: os doze meses são do álcool (art. 165), e não da velocidade.",
      conhecimento: "Infração com suspensão sem prazo próprio: 2 a 8 meses (art. 261, § 1º, II).",
    },
    {
      topico: "Pegadinha Cebraspe",
      subassunto: "Recusa ao teste de alcoolemia (art. 165-A)",
      dificuldade: 4,
      raciocinio: "Nem todo item tem pegadinha: comparar com o art. 165-A antes de marcar errado.",
      enunciado:
        "Item no estilo Cebraspe: “Recusar-se a ser submetido a teste, exame clínico, perícia ou outro procedimento que permita certificar influência de álcool é infração gravíssima, com multa multiplicada por dez e suspensão do direito de dirigir por doze meses.” Esse item está",
      alternativas: [
        "certo, pois a recusa tem as mesmas penalidades do art. 165",
        "errado, pois a recusa ao teste do etilômetro é infração grave",
        "errado, pois quem recusa o teste não pode ser punido sem prova",
        "errado, pois a recusa gera só multa, sem suspender o direito",
        "errado, pois a recusa é punida com multa multiplicada por cinco",
      ],
      correta: 0,
      explicacao:
        "O item segue o art. 165-A: a recusa é infração gravíssima, com multa ×10 e suspensão do direito de dirigir por 12 meses, as mesmas penalidades de quem dirige sob influência de álcool.",
      explicacaoErradas:
        "A recusa é gravíssima, e não grave. A própria recusa já é a infração, sem precisar provar o álcool. Há suspensão por 12 meses, e a multa é ×10.",
      pegadinha: "Achar que recusar o teste é mais leve que dirigir alcoolizado. Este item está certo.",
      conhecimento: "Recusar o bafômetro tem a mesma punição administrativa de dirigir alcoolizado.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Faixas exclusivas (art. 184)",
      dificuldade: 5,
      raciocinio: "Cada inciso do art. 184 tem natureza própria: veja qual é a faixa e para quem ela é reservada.",
      enunciado:
        "Em três avenidas, um automóvel anda, sem converter nem entrar em imóvel: na faixa da direita exclusiva para caminhões, na faixa da esquerda exclusiva para motocicletas e na faixa exclusiva do transporte público coletivo de passageiros. Pelo art. 184 do CTB, as infrações são, nessa ordem,",
      alternativas: [
        "grave, leve e gravíssima",
        "leve, grave e gravíssima",
        "leve, leve e gravíssima",
        "média, grave e gravíssima",
        "grave, grave e grave",
      ],
      correta: 1,
      explicacao:
        "A faixa da direita exclusiva para certo tipo de veículo é o inciso I: leve. A faixa da esquerda é o inciso II: grave. A faixa ou via exclusiva do transporte público coletivo é o inciso III: gravíssima, com remoção do veículo.",
      explicacaoErradas:
        "“grave, leve” inverte os incisos I e II. “leve, leve” iguala a direita e a esquerda. “média” não aparece no art. 184. “grave, grave e grave” ignora que cada inciso tem natureza própria.",
      pegadinha: "Achar que toda faixa exclusiva tem a mesma natureza.",
      conhecimento: "Entrar na faixa exclusiva da direita para acessar um imóvel ou para converter à direita não é a infração do inciso I.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Sobre a faixa de pedestres (arts. 181, 182 e 183)",
      dificuldade: 5,
      raciocinio: "Separe estacionar, parar e ficar sobre a faixa por causa do semáforo.",
      enunciado:
        "Três carros ficam sobre a faixa de pedestres. O primeiro fica ali enquanto o motorista faz compras. O segundo, só o tempo de um passageiro descer. O terceiro, no trânsito lento, fica sobre a faixa quando o semáforo muda. Pelo CTB, as infrações são, nessa ordem,",
      alternativas: [
        "grave, média e leve",
        "gravíssima, grave e média",
        "média, leve e grave",
        "grave, leve e média",
        "leve, leve e média",
      ],
      correta: 3,
      explicacao:
        "O primeiro estaciona, pois fica além do tempo de embarque e desembarque: art. 181, VIII, grave, com remoção do veículo. O segundo faz uma parada: art. 182, VI, leve. O terceiro para sobre a faixa na mudança do sinal luminoso: art. 183, média.",
      explicacaoErradas:
        "“grave, média e leve” troca a parada com o art. 183. “gravíssima” não aparece nesses artigos. “média, leve e grave” rebaixa o estacionamento. “leve, leve” iguala estacionar e parar.",
      pegadinha: "Tratar estacionar e parar como a mesma infração.",
      conhecimento: "Parada é ficar imóvel só pelo tempo de embarque ou desembarque. Passou disso, é estacionamento (Anexo I do CTB).",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Estacionamento proibido (art. 181)",
      dificuldade: 4,
      raciocinio: "No art. 181, a natureza muda com o local e com a placa.",
      enunciado: "Das formas de estacionar abaixo, todas do art. 181 do CTB, a única infração gravíssima é estacionar",
      alternativas: [
        "em local e horário proibidos pela placa “Proibido Parar e Estacionar”",
        "ao lado de outro veículo, em fila dupla, numa rua de comércio",
        "sobre a ciclofaixa, mesmo sem nenhum ciclista passando",
        "numa ponte, encostado à guia da calçada",
        "na vaga reservada a idosos, sem a credencial que comprove a condição",
      ],
      correta: 4,
      explicacao: "A vaga reservada a pessoa com deficiência ou a idoso, sem a credencial, é o inciso XX: gravíssima, com remoção do veículo.",
      explicacaoErradas:
        "A placa “Proibido Parar e Estacionar” é o inciso XIX, grave. Fila dupla é o XI, grave. Ciclofaixa entra no VIII, grave. Ponte é o XIV, grave.",
      pegadinha: "Achar que a placa “Proibido Parar e Estacionar” leva à gravíssima.",
      conhecimento: "Sob a placa “Proibido Estacionar”, o inciso XVIII é média. Na pista de rolamento de rodovia, o inciso V é gravíssima.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Infração leve (art. 169)",
      dificuldade: 4,
      raciocinio: "Compare a natureza que a lei dá a cada conduta, sem julgar pelo perigo que ela parece ter.",
      enunciado: "Das condutas abaixo, a única que o CTB classifica como infração leve é",
      alternativas: [
        "usar o veículo para jogar água ou detritos sobre os pedestres",
        "ficar com o veículo parado na via por falta de combustível",
        "dirigir sem atenção ou sem os cuidados indispensáveis à segurança",
        "deixar de guardar distância de segurança do veículo da frente",
        "deixar na via os cones usados na sinalização temporária",
      ],
      correta: 2,
      explicacao: "Dirigir sem atenção ou sem os cuidados indispensáveis à segurança é o art. 169: infração leve, só com multa.",
      explicacaoErradas:
        "Jogar água ou detritos é o art. 171, média. A pane seca é o art. 180, média, com remoção. A distância de segurança é o art. 192, grave. Deixar os cones é o art. 226, média.",
      pegadinha: "Achar que a falta de atenção é grave por causa do risco que traz.",
      conhecimento: "O art. 169 costuma ser usado quando a falta de cuidado não tem um artigo próprio.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Reparo na via (art. 179)",
      dificuldade: 5,
      raciocinio: "A exceção do art. 179 exige duas condições ao mesmo tempo.",
      enunciado:
        "Um motorista troca as pastilhas de freio numa rua de bairro, com o carro bem sinalizado, mas sem nada que impedisse levá-lo dali. Na semana seguinte, faz o mesmo na pista de rolamento de uma rodovia. Pelo art. 179 do CTB,",
      alternativas: [
        "há infração leve na rua e infração grave na rodovia, onde cabe a remoção do veículo",
        "não há infração na rua, pois o carro estava sinalizado, e há infração grave na rodovia",
        "há infração média nos dois casos, a mesma natureza da pane por falta de combustível",
        "há infração grave nos dois casos, pois o reparo foi feito na via pública",
        "há infração leve na rua e infração gravíssima na rodovia, onde cabe a remoção do veículo",
      ],
      correta: 0,
      explicacao:
        "A exceção do art. 179 vale só quando há impedimento absoluto de remover o veículo e ele está sinalizado. Sem o impedimento, há infração: nas demais vias, o inciso II, leve; na pista de rolamento de rodovia, o inciso I, grave, com remoção do veículo.",
      explicacaoErradas:
        "“não há infração na rua” esquece que a sinalização sozinha não basta. “média nos dois casos” confunde com o art. 180. “grave nos dois casos” ignora o inciso II. “gravíssima” não aparece no art. 179.",
      pegadinha: "Achar que sinalizar o veículo já libera o conserto na via.",
      conhecimento: "O inciso I vale também para as vias de trânsito rápido.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Passeatas e cortejos (arts. 205 e 213)",
      dificuldade: 5,
      raciocinio: "O art. 213 separa agrupamento de pessoas e de veículos; o art. 205 trata de ultrapassar.",
      enunciado:
        "Um condutor não para quando uma passeata corta a sua marcha. Outro não para quando uma formação militar de veículos corta a sua. Um terceiro, sem autorização, ultrapassa um veículo em movimento dessa formação. Pelo CTB, as infrações são, nessa ordem,",
      alternativas: [
        "grave, gravíssima e leve",
        "gravíssima, gravíssima e média",
        "gravíssima, grave e leve",
        "grave, grave e leve",
        "gravíssima, grave e grave",
      ],
      correta: 2,
      explicacao:
        "Passeata é agrupamento de pessoas: art. 213, I, gravíssima. Formação militar é agrupamento de veículos: art. 213, II, grave. Ultrapassar veículo da formação sem autorização é o art. 205: leve.",
      explicacaoErradas:
        "“grave, gravíssima” inverte pessoas e veículos. “gravíssima, gravíssima e média” iguala os dois incisos e erra o art. 205. “grave, grave” rebaixa a passeata. “e grave” no fim esquece que o art. 205 é leve.",
      pegadinha: "Achar que ultrapassar o cortejo é tão grave quanto não parar diante dele.",
      conhecimento: "Com autorização da autoridade de trânsito ou de seus agentes, ultrapassar o cortejo não é infração.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Preferência do pedestre (art. 214)",
      dificuldade: 5,
      raciocinio: "Nem todo inciso do art. 214 é gravíssimo: veja quem atravessa e onde.",
      enunciado:
        "Ao entrar numa rua sem faixa de pedestres e sem semáforo, um condutor não dá preferência a um adulto de 30 anos que já atravessava essa rua. Logo atrás, outro condutor faz o mesmo com uma criança que atravessava no mesmo ponto. Pelo art. 214 do CTB, as infrações são, nessa ordem,",
      alternativas: [
        "gravíssima e gravíssima",
        "grave e grave",
        "média e gravíssima",
        "gravíssima e grave",
        "grave e gravíssima",
      ],
      correta: 4,
      explicacao:
        "O adulto que já iniciou a travessia, ou que atravessa a rua para onde o veículo vai, está nos incisos IV e V: grave. Crianças, idosos, gestantes e pessoas com deficiência física estão no inciso III: gravíssima, com ou sem faixa.",
      explicacaoErradas:
        "“gravíssima e gravíssima” trata o adulto como se estivesse na faixa. “grave e grave” esquece a proteção do inciso III. “média” não aparece no art. 214. “gravíssima e grave” inverte os casos.",
      pegadinha: "Achar que toda falta de preferência ao pedestre é gravíssima.",
      conhecimento: "Pedestre na faixa ou que não concluiu a travessia quando o sinal abre para o veículo: incisos I e II, gravíssima.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Luz alta (arts. 223 e 224)",
      dificuldade: 4,
      raciocinio: "Separe o uso da luz alta em via iluminada do ofuscamento de outro condutor.",
      enunciado:
        "À noite, numa avenida com iluminação pública, um motorista usa a luz alta sem ofuscar ninguém. Depois, numa rodovia escura, mantém a luz alta e ofusca quem vem no sentido contrário. Pelo CTB, as infrações são, nessa ordem,",
      alternativas: ["média e grave", "leve e grave", "leve e gravíssima", "grave e grave", "leve e média"],
      correta: 1,
      explicacao:
        "Usar a luz alta em via com iluminação pública é o art. 224: leve. Usar a luz alta de forma a perturbar a visão de outro condutor é o art. 223: grave, com retenção do veículo para regularização.",
      explicacaoErradas:
        "“média” no primeiro caso erra o art. 224. “gravíssima” não aparece no art. 223. “grave e grave” iguala condutas diferentes. “leve e média” rebaixa o ofuscamento.",
      pegadinha: "Achar que a luz alta só é infração quando ofusca alguém.",
      conhecimento:
        "De dia, em rodovia de pista simples fora do perímetro urbano, o carro sem luz de rodagem diurna anda com a luz baixa acesa; sem ela, é o art. 250, I, média.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Iluminação do veículo (art. 230)",
      dificuldade: 5,
      raciocinio: "No art. 230, o defeito e a alteração do sistema de iluminação estão em incisos diferentes.",
      enunciado: "Na abordagem, um carro tem cinco irregularidades, todas do art. 230 do CTB. Delas, a única infração média é a do veículo",
      alternativas: [
        "com a lâmpada de uma das luzes de freio queimada",
        "com faróis trocados por outros, que alteram o sistema de iluminação",
        "com os vidros cobertos por película fora do permitido",
        "com a placa traseira sem condições de legibilidade",
        "com o silenciador do motor inoperante",
      ],
      correta: 0,
      explicacao: "Lâmpada queimada é o inciso XXII do art. 230: média. As outras irregularidades estão em incisos mais pesados.",
      explicacaoErradas:
        "Faróis trocados alteram o sistema de iluminação: inciso XIII, grave. Película fora do permitido é o XVI, grave. Placa ilegível é o VI, gravíssima. Silenciador inoperante é o XI, grave.",
      pegadinha: "Confundir o defeito, que é média, com a alteração do sistema de iluminação, que é grave.",
      conhecimento: "No art. 230, os incisos I a VI e o XX são gravíssimos; do VII ao XIX, graves; o XXI e o XXII, médios.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Ordens e documentos na fiscalização",
      dificuldade: 4,
      raciocinio: "Desobedecer ao agente tem natureza diferente de recusar documentos ou retirar veículo retido.",
      enunciado: "Numa operação da PRF, das condutas abaixo, a única infração grave, e não gravíssima, é",
      alternativas: [
        "recusar-se a entregar ao agente, mediante recibo, o documento do veículo",
        "retirar do local, sem permissão, o veículo retido para regularização",
        "levar antirradar instalado no veículo",
        "desobedecer às ordens dadas pelo agente de trânsito",
        "transpor, sem autorização, o bloqueio viário montado pela polícia",
      ],
      correta: 3,
      explicacao: "Desobedecer às ordens da autoridade de trânsito ou de seus agentes é o art. 195: grave, só com multa.",
      explicacaoErradas:
        "Recusar a entrega dos documentos para conferir a autenticidade é o art. 238, gravíssima. Retirar o veículo retido é o art. 239, gravíssima. Antirradar é o art. 230, III, gravíssima. Transpor bloqueio policial é o art. 210, gravíssima.",
      pegadinha: "Achar que desobedecer ao agente é sempre gravíssima.",
      conhecimento: "Nos arts. 238 e 239, a medida administrativa é a remoção do veículo.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Pontos na CNH (art. 259)",
      dificuldade: 5,
      raciocinio: "Some os pontos pela natureza, mas antes veja as exceções do § 4º do art. 259.",
      enunciado:
        "Na mesma abordagem, o condutor de um automóvel é autuado por dirigir sem atenção (art. 169), por estar sem a CNH, sem como consultar o sistema no local (art. 232), e pela cor do veículo alterada (art. 230, VII). Pelo art. 259 do CTB, ele recebe, ao todo,",
      alternativas: ["11 pontos", "8 pontos", "3 pontos", "6 pontos", "nenhum ponto"],
      correta: 2,
      explicacao:
        "O art. 169 é leve: 3 pontos. O art. 232 e o inciso VII do art. 230 estão no § 4º, II, do art. 259: não geram pontos, embora as multas continuem. Total: 3 pontos.",
      explicacaoErradas:
        "“11 pontos” soma tudo sem as exceções. “8 pontos” tira só o art. 232. “6 pontos” tira só a cor alterada. “nenhum ponto” esquece o art. 169.",
      pegadinha: "Somar os pontos de todas as infrações sem olhar o § 4º do art. 259.",
      conhecimento:
        "Também não geram pontos os arts. 221, 233, 233-A, 240 e 241, o inciso XXI do art. 230 e as infrações punidas de forma específica com suspensão.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Veículos de urgência (arts. 189 e 190)",
      dificuldade: 4,
      raciocinio: "Não dar passagem e seguir o veículo de urgência estão em artigos diferentes.",
      enunciado:
        "Uma ambulância em serviço de urgência, com alarme sonoro e iluminação intermitente ligados, se aproxima. Um condutor não lhe dá passagem. Outro aproveita o caminho aberto e passa a seguir a ambulância. Pelo CTB, as infrações são, nessa ordem,",
      alternativas: ["grave e gravíssima", "gravíssima e gravíssima", "grave e grave", "gravíssima e média", "gravíssima e grave"],
      correta: 4,
      explicacao:
        "Deixar de dar passagem ao veículo de urgência identificado é o art. 189: gravíssima. Seguir veículo em serviço de urgência é o art. 190: grave.",
      explicacaoErradas:
        "“grave e gravíssima” inverte os artigos. “gravíssima e gravíssima” iguala condutas diferentes. “grave e grave” rebaixa o art. 189. “média” no segundo caso erra o art. 190.",
      pegadinha: "Achar que seguir a ambulância é tão grave quanto não dar passagem a ela.",
      conhecimento:
        "Se a própria viatura ou ambulância deixa de manter a iluminação intermitente ligada no atendimento de emergência, ainda que parada, é o art. 222: média.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Motocicleta (art. 244)",
      dificuldade: 4,
      raciocinio: "No art. 244, só os incisos I a V levam à suspensão do direito de dirigir.",
      enunciado:
        "Pelo art. 244 do CTB, a única conduta abaixo que é infração gravíssima, com suspensão do direito de dirigir, é conduzir a motocicleta",
      alternativas: [
        "rebocando outro veículo, ainda que por poucos metros",
        "equilibrando-se apenas em uma roda",
        "sem segurar o guidom com as duas mãos, fora da indicação de manobra",
        "com carga incompatível com as especificações da moto",
        "com o capacete sem viseira e sem óculos de proteção",
      ],
      correta: 1,
      explicacao:
        "Fazer malabarismo ou equilibrar-se em uma roda é o inciso III: gravíssima, com multa e suspensão do direito de dirigir, retenção do veículo e recolhimento do documento de habilitação.",
      explicacaoErradas:
        "Rebocar outro veículo é o inciso VI, grave. Não segurar o guidom com as duas mãos é o VII, grave. Carga incompatível é o VIII, grave. Capacete sem viseira nem óculos é o X, média.",
      pegadinha: "Achar que toda infração com motocicleta leva à suspensão.",
      conhecimento: "Por ser punida de forma específica com suspensão, a infração do inciso III não gera pontos (art. 259, § 4º, III).",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Ultrapassar pela direita (arts. 199 e 200)",
      dificuldade: 5,
      raciocinio: "O art. 200 protege quem embarca ou desembarca do ônibus.",
      enunciado:
        "Um condutor ultrapassa pela direita um caminhão lento, que não sinalizava a entrada à esquerda. Mais adiante, ultrapassa pela direita um ônibus de transporte coletivo parado no ponto para o desembarque, num local sem refúgio para pedestres. Pelo CTB,",
      alternativas: [
        "as duas são infrações médias, pois o art. 200 só repete o art. 199",
        "a primeira é grave e a segunda, gravíssima, pois havia passageiros",
        "só a segunda é infração, pois o caminhão andava devagar",
        "a primeira é média e a segunda, gravíssima, por faltar refúgio",
        "as duas são gravíssimas, pois ultrapassar pela direita é proibido",
      ],
      correta: 3,
      explicacao:
        "Ultrapassar pela direita, fora da exceção do veículo que vai entrar à esquerda, é o art. 199: média. Ultrapassar pela direita ônibus de transporte coletivo ou de escolares parado para embarque ou desembarque, sem refúgio de segurança para o pedestre, é o art. 200: gravíssima.",
      explicacaoErradas:
        "“as duas são infrações médias” ignora o art. 200. “a primeira é grave” erra o art. 199. “só a segunda” esquece que o caminhão lento não autoriza passar pela direita. “as duas são gravíssimas” eleva o art. 199.",
      pegadinha: "Achar que toda ultrapassagem pela direita é gravíssima.",
      conhecimento: "Havendo refúgio de segurança para o pedestre, o art. 200 não se aplica.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Retorno e conversão proibidos (arts. 206 e 207)",
      dificuldade: 5,
      raciocinio: "Com a mesma placa de proibição, o retorno e a conversão têm naturezas diferentes.",
      enunciado:
        "Num cruzamento com placas que proíbem retornar e virar à esquerda, um condutor faz o retorno e outro vira à esquerda. Pelo CTB, as infrações são, nessa ordem,",
      alternativas: ["gravíssima e grave", "grave e grave", "gravíssima e gravíssima", "grave e gravíssima", "grave e média"],
      correta: 0,
      explicacao:
        "Retornar em local proibido pela sinalização é o art. 206, I: gravíssima. Converter à direita ou à esquerda em local proibido pela sinalização é o art. 207: grave.",
      explicacaoErradas:
        "“grave e grave” rebaixa o retorno. “gravíssima e gravíssima” eleva a conversão. “grave e gravíssima” inverte os artigos. “média” não aparece nesses artigos.",
      pegadinha: "Achar que a mesma placa leva à mesma natureza.",
      conhecimento: "Todo o art. 206 é gravíssimo: também o retorno em curva, aclive, declive, ponte, viaduto ou túnel e o retorno por cima do canteiro.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Pedestre infrator (art. 254)",
      dificuldade: 4,
      raciocinio: "Pedestre também comete infração, mas a multa dele tem valor próprio.",
      enunciado: "Um pedestre anda pela pista de rolamento de uma rodovia, sem estar atravessando. Pelo art. 254 do CTB, a conduta",
      alternativas: [
        "não é infração, pois o CTB só aplica multa a condutores",
        "é infração leve, com multa prevista de R$ 88,38",
        "é infração leve, com multa prevista de R$ 44,19",
        "é infração média, com multa prevista de R$ 65,08",
        "é infração grave, com multa prevista de R$ 97,62",
      ],
      correta: 2,
      explicacao:
        "O inciso I do art. 254 proíbe ao pedestre permanecer ou andar nas pistas de rolamento, salvo para cruzá-las onde for permitido. É infração leve, com multa de 50% do valor da leve: metade de R$ 88,38, ou R$ 44,19.",
      explicacaoErradas:
        "“não é infração” contraria o art. 254. “R$ 88,38” é a multa leve cheia. “média” e “grave” erram a natureza, embora os valores sejam metade dessas multas.",
      pegadinha: "Usar o valor cheio da multa leve.",
      conhecimento:
        "Sem outra infração nos últimos 12 meses, a infração leve ou média recebe advertência por escrito no lugar da multa (art. 267).",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Sinalizar a via (arts. 225, 226 e 246)",
      dificuldade: 5,
      raciocinio: "Separe o veículo parado, o obstáculo deixado na via e o material esquecido.",
      enunciado:
        "À noite, um caminhão com defeito fica no acostamento, sem sinalizar com o triângulo e com as luzes apagadas. Numa obra, uma empresa deixa material sobre a pista, sem sinalizar. Terminado um reparo, um motorista vai embora e deixa os cones na via. Pelo CTB, as infrações são, nessa ordem,",
      alternativas: [
        "gravíssima, gravíssima e grave",
        "grave, gravíssima e média",
        "média, grave e leve",
        "grave, grave e média",
        "gravíssima, grave e média",
      ],
      correta: 1,
      explicacao:
        "O caminhão no acostamento sem sinalização é o art. 225, I: grave. O obstáculo na pista sem sinalização é o art. 246: gravíssima, com multa que a autoridade pode agravar em até cinco vezes, conforme o risco. Deixar na via o material da sinalização temporária é o art. 226: média.",
      explicacaoErradas:
        "“gravíssima, gravíssima” eleva o art. 225. “média, grave e leve” rebaixa os três. “grave, grave” rebaixa o art. 246. “gravíssima, grave” inverte os arts. 225 e 246.",
      pegadinha: "Tratar o caminhão parado e o obstáculo na pista como a mesma infração.",
      conhecimento: "No art. 246, a multa recai sobre a pessoa física ou jurídica responsável pela obstrução.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Lentes e adaptações (art. 162, VI)",
      dificuldade: 4,
      raciocinio: "A exigência da CNH descumprida está no art. 162, junto com os casos de habilitação.",
      enunciado: "A CNH de um condutor exige o uso de lentes corretoras, mas ele é abordado dirigindo sem elas. Pelo CTB, a infração é",
      alternativas: [
        "média, com multa e retenção do veículo até a regularização",
        "grave, com multa e recolhimento do documento de habilitação",
        "leve, pois é só uma restrição anotada na CNH",
        "gravíssima, com multa de três vezes e retenção do veículo",
        "gravíssima, com multa simples e retenção do veículo",
      ],
      correta: 4,
      explicacao:
        "Dirigir sem as lentes corretoras, o aparelho de audição, a prótese ou as adaptações exigidas na habilitação é o art. 162, VI: gravíssima, com multa simples e retenção do veículo até o saneamento da irregularidade ou a apresentação de condutor habilitado.",
      explicacaoErradas:
        "“média” e “leve” erram a natureza. “grave, com recolhimento” erra a natureza e a medida. “três vezes” é a multa dos incisos I e II, para quem não tem habilitação ou dirige com ela cassada ou suspensa.",
      pegadinha: "Achar que a restrição da CNH é só uma anotação, sem peso de infração gravíssima.",
      conhecimento: "Dirigir com CNH de categoria diferente da do veículo é gravíssima, com multa de duas vezes (inciso III).",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Reduzir a velocidade (art. 220)",
      dificuldade: 5,
      raciocinio: "No art. 220, só três incisos são gravíssimos; os outros são graves.",
      enunciado:
        "O art. 220 do CTB pune quem deixa de reduzir a velocidade de forma compatível com a segurança. Das situações abaixo, a única em que essa infração é gravíssima é",
      alternativas: [
        "sob chuva forte, neblina ou ventos fortes",
        "num trecho em curva de pequeno raio",
        "ao se aproximar de obras ou trabalhadores na pista, em local sinalizado",
        "nas proximidades de uma escola ou de um hospital",
        "em declive acentuado, com o veículo carregado",
      ],
      correta: 3,
      explicacao:
        "Nas proximidades de escolas, hospitais, estações de embarque e desembarque ou onde haja intensa movimentação de pedestres, o inciso XIV é gravíssimo. Os outros casos da lista estão entre os incisos II e XII: graves.",
      explicacaoErradas:
        "Chuva e ventos fortes é o inciso VIII. Curva de pequeno raio é o VI. Obras ou trabalhadores na pista é o VII. Declive é o XII. Todos graves.",
      pegadinha: "Achar que chuva ou obras na pista pesam mais que a escola.",
      conhecimento: "O inciso I, ao se aproximar de passeatas, aglomerações, cortejos e desfiles, também é gravíssimo.",
    },
    {
      topico: "Natureza da infração",
      subassunto: "Ciclistas (arts. 201, 220 e 255)",
      dificuldade: 5,
      raciocinio: "A distância lateral e a redução da velocidade ao passar pelo ciclista têm naturezas diferentes.",
      enunciado:
        "Um motorista reduz a velocidade, mas ultrapassa um ciclista a menos de 1,50 m dele. Outro mantém a distância, mas não reduz a velocidade ao ultrapassar. Um terceiro anda de bicicleta num passeio onde isso não é permitido. Pelo CTB, as infrações são, nessa ordem,",
      alternativas: [
        "média, gravíssima e média",
        "grave, grave e leve",
        "gravíssima, média e média",
        "média, grave e leve",
        "gravíssima, gravíssima e grave",
      ],
      correta: 0,
      explicacao:
        "Passar ou ultrapassar bicicleta sem a distância lateral de 1,50 m é o art. 201: média. Deixar de reduzir a velocidade ao ultrapassar ciclista é o art. 220, XIII: gravíssima. Bicicleta em passeio onde ela não é permitida é o art. 255: média, com remoção da bicicleta.",
      explicacaoErradas:
        "“grave, grave e leve” erra os três. “gravíssima, média” inverte os dois motoristas. “média, grave e leve” rebaixa o inciso XIII e o art. 255. “gravíssima, gravíssima e grave” eleva o art. 201 e o art. 255.",
      pegadinha: "Achar que a distância de 1,50 m é gravíssima e a velocidade, média.",
      conhecimento: "No art. 255, a bicicleta é removida mediante recibo para o pagamento da multa.",
    },
  ],
};
