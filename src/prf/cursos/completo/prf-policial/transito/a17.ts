import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-17",
  resumo: {
    ideia:
      "A Resolução 970/2022 define quem usa cada luz e quando ela pode ser acionada. A Resolução 909/2022 permite autuar por videomonitoramento, em via sinalizada para isso.",
    itens: [
      {
        termo: "Azul, vermelha ou ambas",
        faz: "Só incêndio e salvamento, salvamento difuso, polícia, fiscalização e operação de trânsito e ambulâncias.",
        pista: "Art. 5º, caput.",
      },
      {
        termo: "Quando acionar",
        faz: "Só em serviço de urgência, policiamento ostensivo ou preservação da ordem pública.",
        pista: "Urgência: sem brevidade, há risco concreto à vida ou grande prejuízo à incolumidade pública.",
      },
      {
        termo: "Sonoro junto",
        faz: "Na livre circulação e na parada, o som é acionado em conjunto com as lanternas.",
        pista: "O livre estacionamento pede a luz rotativa ou intermitente.",
      },
      {
        termo: "Amarelo-âmbar",
        faz: "Utilidade pública: lanterna não removível, com autorização prévia do órgão de registro.",
      },
      {
        termo: "Lista do âmbar",
        faz: "Energia, água, esgoto, gás e comunicações; manutenção viária e lixo a serviço da Administração; guincho; valores; escolta; metroferroviário.",
        pista: "A Resolução 1.024/2026 incluiu a Rede Hidrometeorológica Nacional.",
      },
      {
        termo: "Âmbar em deslocamento",
        faz: "Proibido acionar, salvo guincho e plataforma de socorro, escolta e lixo.",
      },
      {
        termo: "Art. 10",
        faz: "Veda estroboscópica fora de emergência e utilidade pública, adesivo no dispositivo e mais de oito faróis funcionando.",
        pista: "Farol de rodagem diurna fica fora da contagem.",
      },
      {
        termo: "Art. 11",
        faz: "Lâmpada de outra potência ou tecnologia só com previsão no manual ou na literatura do fabricante.",
      },
      {
        termo: "Art. 15",
        faz: "Lanterna sem efetivo serviço: art. 169. Lanterna especial em veículo comum: art. 230, XII. Luz alterada: art. 230, XIII.",
      },
      {
        termo: "Res. 909/2022",
        faz: "Autuação remota de normas gerais de circulação e conduta detectadas online, com a forma de constatação no campo “observação”.",
        pista: "Só em via devidamente sinalizada para esse fim.",
      },
    ],
    cuidado: "Veículo de emergência parado em atendimento mantém a luz ligada: deixar de manter é o art. 222.",
  },
  questoes: [
    {
      topico: "Lanternas",
      subassunto: "Quem usa",
      dificuldade: 4,
      raciocinio: "Vermelho e azul são de emergência. Âmbar é de utilidade pública.",
      enunciado:
        "Em uma blitz, a PRF encontra cinco veículos com lanterna especial vermelha instalada. Pelo art. 5º da Resolução Contran 970/2022, ela é admitida apenas em",
      alternativas: [
        "guincho que remove veículo acidentado da pista",
        "caminhão de manutenção da rede de energia",
        "ambulância em atendimento",
        "carro-forte em transporte de valores",
        "veículo de escolta de carga superdimensionada",
      ],
      correta: 2,
      explicacao: "A lanterna azul, vermelha ou combinada é exclusiva de socorro de incêndio e salvamento, salvamento difuso, polícia, fiscalização e operação de trânsito e ambulâncias.",
      explicacaoErradas:
        "“guincho”, “rede de energia”, “carro-forte” e “escolta” prestam utilidade pública: a lanterna deles é amarelo-âmbar, pelo art. 6º.",
      pegadinha: "Achar que todo serviço importante usa luz vermelha.",
      conhecimento: "Veículo comum equipado com lanterna especial cai no art. 230, XII, do CTB, pelo art. 15, VI, da resolução.",
    },
    {
      topico: "Lanternas",
      subassunto: "Uso indevido",
      dificuldade: 5,
      raciocinio: "O veículo pode ter a luz. O problema é acioná-la sem serviço.",
      enunciado:
        "Uma ambulância volta vazia à base, sem qualquer chamado, e o condutor aciona a lanterna vermelha para vencer um congestionamento. Pelos arts. 5º e 15 da Resolução Contran 970/2022, ele",
      alternativas: [
        "age regularmente, pois a ambulância tem prioridade em todo deslocamento",
        "responde pelo art. 222 do CTB, por usar a luz fora de atendimento",
        "responde pelo art. 230, XII, do CTB, por equipamento proibido no veículo",
        "age regularmente, desde que o alarme sonoro seja ligado em conjunto com a luz",
        "responde pelo art. 169 do CTB, por acionar a lanterna sem efetivo serviço",
      ],
      correta: 4,
      explicacao: "O art. 15, I, “a”, enquadra no art. 169 o condutor de veículo de emergência que aciona a lanterna ou o som sem estar em efetivo serviço, em desacordo com o art. 5º.",
      explicacaoErradas:
        "“todo deslocamento” ignora o § 1º do art. 5º. “art. 222” pune quem deixa de manter a luz ligada no atendimento. “art. 230, XII” vale para veículo que não pode ter o equipamento. “alarme sonoro” não cria urgência.",
      pegadinha: "Confundir o art. 222 com o uso sem serviço.",
      conhecimento: "O art. 169 é infração leve: dirigir sem atenção ou sem os cuidados indispensáveis à segurança.",
    },
    {
      topico: "Lanternas",
      subassunto: "Serviço de urgência",
      dificuldade: 4,
      raciocinio: "A definição do § 4º tem duas saídas: vida ou incolumidade pública.",
      enunciado:
        "Pelo art. 5º, § 4º, da Resolução Contran 970/2022, serviço de urgência é o deslocamento que necessita de brevidade, sem a qual haverá",
      alternativas: [
        "risco concreto à vida de terceiros ou grande prejuízo à incolumidade pública",
        "atraso na escala do plantão ou prejuízo ao patrimônio da instituição",
        "risco abstrato à ordem pública, a critério do condutor da viatura",
        "risco à vida do condutor ou dano à viatura durante a operação policial",
        "prejuízo ao fluxo da via ou descumprimento do horário fixado pelo órgão de origem",
      ],
      correta: 0,
      explicacao: "O § 4º liga a urgência à brevidade necessária para evitar risco concreto à vida de terceiros ou grande prejuízo à incolumidade pública.",
      explicacaoErradas:
        "“escala do plantão” e “horário fixado” são interesses internos. “risco abstrato” troca o concreto. “vida do condutor” e “dano à viatura” mudam quem é protegido.",
      pegadinha: "Trocar “concreto” por “abstrato”.",
      conhecimento: "O § 1º também admite o acionamento em policiamento ostensivo e em preservação da ordem pública.",
    },
    {
      topico: "Lanternas",
      subassunto: "Sonoro e estacionamento",
      dificuldade: 5,
      raciocinio: "Separe circulação e parada do estacionamento.",
      enunciado:
        "Sobre as prerrogativas dos veículos de emergência, os §§ 2º e 3º do art. 5º da Resolução Contran 970/2022 dispõem que",
      alternativas: [
        "a livre circulação dispensa o som, e o livre estacionamento exige alarme sonoro",
        "qualquer prerrogativa depende só do alarme sonoro, sem a lanterna acionada",
        "o livre estacionamento vale mesmo com a lanterna desligada, se houver urgência",
        "circulação e parada pedem som e lanterna, e estacionamento pede só a luz",
        "circulação, parada e estacionamento dispensam dispositivos em serviço policial",
      ],
      correta: 3,
      explicacao: "O § 2º manda acionar os dispositivos sonoros em conjunto com as lanternas na livre circulação e na parada. O § 3º aplica o livre estacionamento só a veículos identificados por iluminação rotativa ou intermitente.",
      explicacaoErradas:
        "“exige alarme sonoro” para estacionar troca os parágrafos. “só do alarme sonoro” e “lanterna desligada” apagam a luz. “dispensam dispositivos” não está na norma.",
      pegadinha: "Exigir som para estacionar.",
      conhecimento: "Pelo art. 222 do CTB, a luz intermitente fica ligada no atendimento de emergência, ainda que o veículo esteja parado.",
    },
    {
      topico: "Utilidade pública",
      subassunto: "Quem usa o âmbar",
      dificuldade: 5,
      raciocinio: "Alguns serviços só contam “a serviço da Administração”.",
      enunciado:
        "Qual destes veículos NÃO se enquadra como prestador de serviço de utilidade pública no art. 6º, § 1º, da Resolução Contran 970/2022?",
      alternativas: [
        "plataforma de socorro que leva veículo em pane",
        "veículo que sinaliza obra particular em condomínio",
        "carro de manutenção das redes de gás canalizado",
        "veículo que atende linhas e estações metroferroviárias",
        "caminhão de lixo a serviço da Administração",
      ],
      correta: 1,
      explicacao: "Conservação, manutenção e sinalização viária só entram quando prestadas a serviço da Administração, o que falta na obra particular.",
      explicacaoErradas:
        "“plataforma de socorro”, “gás canalizado”, “metroferroviárias” e “lixo a serviço da Administração” estão na lista do § 1º.",
      pegadinha: "Ver sinalização viária e não conferir para quem o serviço é feito.",
      conhecimento: "A Resolução 1.024/2026 acrescentou os veículos da operação e manutenção da Rede Hidrometeorológica Nacional.",
    },
    {
      topico: "Utilidade pública",
      subassunto: "Âmbar em deslocamento",
      dificuldade: 5,
      raciocinio: "Só três exceções podem rodar com o âmbar ligado.",
      enunciado:
        "Na mesma rodovia, a PRF vê em deslocamento, com a lanterna âmbar acionada: (I) guincho indo a um socorro; (II) carro-forte; (III) caminhão de manutenção da rede de água. Pelo art. 7º, parágrafo único, da Resolução Contran 970/2022, é regular",
      alternativas: [
        "somente o acionamento do veículo I",
        "somente o acionamento dos veículos II e III",
        "somente o acionamento dos veículos I e III",
        "o acionamento nos três veículos citados",
        "nenhum acionamento, sem qualquer exceção",
      ],
      correta: 0,
      explicacao: "A lanterna âmbar é proibida durante o deslocamento, salvo guindastes, guinchos e plataformas de socorro, escolta de cargas superdimensionadas e recolhimento de lixo.",
      explicacaoErradas:
        "“II e III” e “I e III” incluem veículos fora da exceção. “três veículos” ignora a proibição. “nenhum acionamento” apaga a exceção do inciso III do § 1º do art. 6º.",
      pegadinha: "Achar que todo veículo de utilidade pública roda com a luz ligada.",
      conhecimento: "No local do serviço, a livre parada e o estacionamento exigem efetiva operação e identificação por lanterna e sinalização auxiliar.",
    },
    {
      topico: "Utilidade pública",
      subassunto: "Autorização prévia",
      dificuldade: 4,
      raciocinio: "O serviço existe, mas falta a autorização.",
      enunciado:
        "Uma concessionária de água instala lanterna âmbar não removível em seu caminhão, sem autorização de nenhum órgão. Pelos arts. 6º, § 2º, e 15, VII, da Resolução Contran 970/2022,",
      alternativas: [
        "não há infração, pois a utilidade pública dispensa a autorização prévia",
        "a autorização cabe à PRF, que deve regularizar o caminhão na própria abordagem",
        "a autorização cabe ao Contran, e a falta dela enquadra o caso no art. 230, XII",
        "há infração do art. 230, XIII, pois a autorização cabe ao órgão de registro",
        "há infração do art. 169, pois o caminhão não estava em efetivo serviço na via",
      ],
      correta: 3,
      explicacao: "O § 2º do art. 6º exige prévia autorização do órgão executivo de trânsito do Estado ou do DF de registro. O art. 15, VII, “e”, enquadra a falta dela no art. 230, XIII, do CTB.",
      explicacaoErradas:
        "“dispensa a autorização” contraria o § 2º. “PRF” e “Contran” erram o órgão. “art. 169” trata do acionamento sem serviço, e não da instalação.",
      pegadinha: "Usar o art. 230, XII, para quem tem direito ao âmbar.",
      conhecimento: "O art. 230, XIII, do CTB é infração grave, com multa e retenção para regularização.",
    },
    {
      topico: "Vedações",
      subassunto: "Faróis",
      dificuldade: 5,
      raciocinio: "Tire da conta os faróis de rodagem diurna.",
      enunciado:
        "Um caminhão circula com dez faróis funcionando ao mesmo tempo: dois de rodagem diurna, dois baixos, dois altos, dois de neblina e dois auxiliares. Pelo art. 10, IV, da Resolução Contran 970/2022, a situação é",
      alternativas: [
        "irregular, pois dez faróis passam do limite de oito",
        "irregular, pois farol auxiliar é vedado",
        "regular, pois a contagem vale só para automóveis",
        "regular, pois restam oito faróis na contagem",
        "regular, pois o limite só vale para faróis altos",
      ],
      correta: 3,
      explicacao: "O art. 10, IV, veda mais de oito faróis funcionando juntos, sem contar os de rodagem diurna. Dez menos dois resulta em oito, dentro do limite.",
      explicacaoErradas:
        "“passam do limite” esquece a exclusão. “é vedado” não está no artigo. “só para automóveis” e “só para faróis altos” criam restrições: o inciso fala de faróis de qualquer finalidade.",
      pegadinha: "Contar também os faróis de rodagem diurna.",
      conhecimento: "Se passar de oito, o art. 15, VII, “f”, remete ao art. 230, XIII, do CTB.",
    },
    {
      topico: "Vedações",
      subassunto: "Lâmpadas",
      dificuldade: 4,
      raciocinio: "A referência é o manual do fabricante.",
      enunciado:
        "Um condutor troca as lâmpadas originais do farol por outras de tecnologia diferente, sem previsão no manual nem na literatura do fabricante. Pelos arts. 11 e 15, VII, da Resolução Contran 970/2022,",
      alternativas: [
        "a troca é livre, se a cor da luz emitida for a mesma",
        "a troca é livre, com potência igual à original",
        "a conduta se enquadra no art. 230, XXII, do CTB, por defeito",
        "a troca depende só de nota fiscal da oficina que a fez",
        "a conduta se enquadra no art. 230, XIII, do CTB",
      ],
      correta: 4,
      explicacao: "A substituição por potência ou tecnologia diferente só pode ocorrer com previsão em manual ou literatura oficial do fabricante. Sem isso, o art. 15, VII, “b”, remete ao art. 230, XIII.",
      explicacaoErradas:
        "“mesma” cor e potência “igual” não bastam: a tecnologia mudou. “art. 230, XXII” trata de defeito e lâmpada queimada. “nota fiscal” não supre o manual.",
      pegadinha: "Achar que a luz boa legitima a troca.",
      conhecimento: "O art. 230, XXII, é infração média, sem medida de retenção no próprio texto.",
    },
    {
      topico: "Videomonitoramento",
      subassunto: "Res. 909/2022",
      dificuldade: 4,
      raciocinio: "Fiscalização remota também é autuação do agente.",
      enunciado:
        "Em uma central da PRF, um agente vê online, por câmera, um condutor ultrapassar em local proibido, em trecho sinalizado para videomonitoramento. Pela Resolução Contran 909/2022, ele",
      alternativas: [
        "pode autuar, informando a forma de constatação no campo “observação”",
        "não pode autuar, pois a autuação exige a abordagem do condutor",
        "só pode autuar com a imagem autenticada pelo órgão máximo executivo da União",
        "pode autuar sem nenhum registro no auto, pois a câmera já prova a infração",
        "só pode autuar se a infração for de excesso de velocidade, medida por radar",
      ],
      correta: 0,
      explicacao: "O art. 2º permite autuar por infrações às normas gerais de circulação e conduta detectadas online. O parágrafo único manda informar, no campo “observação”, como a infração foi constatada.",
      explicacaoErradas:
        "“exige a abordagem” contraria o art. 2º. “imagem autenticada” não consta da resolução. “sem nenhum registro” ignora o parágrafo único. “excesso de velocidade” restringe as infrações alcançadas.",
      pegadinha: "Achar que toda autuação exige parar o condutor.",
      conhecimento: "A norma se apoia no art. 280, § 2º, do CTB, que aceita a comprovação por sistema audiovisual.",
    },
    {
      topico: "Videomonitoramento",
      subassunto: "Sinalização",
      dificuldade: 5,
      raciocinio: "O art. 3º traz a condição da via.",
      enunciado:
        "Uma câmera da PRF flagra online um condutor na contramão, em trecho sem qualquer sinalização sobre videomonitoramento. Pelo art. 3º da Resolução Contran 909/2022, a autuação remota",
      alternativas: [
        "é válida, pois a câmera é da própria autoridade da via",
        "é válida, pois a contramão é infração gravíssima na via",
        "é válida, se a imagem ficar arquivada no órgão por um ano",
        "não é admitida, pois a via precisa estar sinalizada para esse fim",
        "não é admitida, pois vídeo só comprova infração de estacionamento",
      ],
      correta: 3,
      explicacao: "O art. 3º só admite a fiscalização por videomonitoramento em vias devidamente sinalizadas para esse fim.",
      explicacaoErradas:
        "“câmera” própria e “gravíssima” não suprem a sinalização. “arquivada” por um ano não consta da norma. “só comprova” restringe sem base.",
      pegadinha: "Olhar a gravidade e esquecer a condição da via.",
      conhecimento: "A resolução revogou as Resoluções 471/2013 e 532/2015.",
    },
  ],
};
