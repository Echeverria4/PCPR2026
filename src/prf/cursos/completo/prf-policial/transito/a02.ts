import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-02",
  resumo: {
    ideia:
      "O Anexo I define os termos do CTB, e as normas gerais dizem quem passa primeiro, como ultrapassar, como usar as luzes e onde parar. Boa parte das questões troca um termo por outro parecido.",
    itens: [
      {
        termo: "Preferência sem sinal",
        faz: "Primeiro quem vem da rodovia. Depois quem está na rotatória. Nos demais casos, quem vem pela direita.",
      },
      {
        termo: "Veículos de emergência",
        faz: "Livre circulação e parada pedem alarme sonoro e luz intermitente. Livre estacionamento pede só a luz.",
      },
      {
        termo: "Ultrapassagem",
        faz: "Na mesma faixa, saindo e voltando a ela. Em regra, pela esquerda.",
      },
      {
        termo: "Passagem por outro veículo",
        faz: "À frente de outro, no mesmo sentido, mas em faixas distintas.",
      },
      {
        termo: "Parada e estacionamento",
        faz: "Parada é só para embarque ou desembarque. Carga ou descarga é considerada estacionamento.",
      },
      {
        termo: "Luz baixa",
        faz: "À noite e, de dia, em túneis e sob chuva, neblina ou cerração.",
      },
      {
        termo: "Pista simples de dia",
        faz: "Fora do perímetro urbano, faróis acesos para quem não tem luz de rodagem diurna.",
      },
      {
        termo: "Crianças",
        faz: "Menor de 10 anos que não atingiu 1,45 m vai no banco traseiro, com dispositivo de retenção.",
      },
      {
        termo: "Art. 29, § 2º",
        faz: "Maiores pelos menores, motorizados pelos não motorizados e, juntos, pelos pedestres.",
      },
    ],
    cuidado: "Caminhonete leva carga. Camioneta é veículo misto, com passageiros e carga no mesmo compartimento.",
  },
  questoes: [
    {
      topico: "Preferência de passagem",
      subassunto: "Local não sinalizado",
      dificuldade: 4,
      raciocinio: "A regra da direita vem por último.",
      enunciado:
        "Em um cruzamento sem sinalização, um veículo vem de uma rodovia e outro vem de uma via secundária, pela direita do primeiro. Tem preferência",
      alternativas: [
        "o que vem pela direita, regra geral que vale para qualquer cruzamento",
        "o de maior porte, porque responde pela segurança do menor",
        "o que circula pela rodovia, mesmo vindo pela esquerda do outro",
        "o que chegar primeiro ao cruzamento, qualquer que seja o lado",
        "o mais lento, que deve ser protegido pelo condutor mais rápido",
      ],
      correta: 2,
      explicacao:
        "O art. 29, III, dá preferência a quem está na rodovia quando só um fluxo vem dela. A direita só vale nos demais casos.",
      explicacaoErradas:
        "“pela direita” aplica o último critério antes do primeiro. “maior porte” usa o § 2º, que não trata de preferência. “chegar primeiro” e “mais lento” não estão na lei.",
      pegadinha: "Aplicar a regra da direita em toda situação.",
      conhecimento: "Na rotatória, tem preferência quem circula por ela.",
    },
    {
      topico: "Veículos de emergência",
      subassunto: "Estacionamento e alarme",
      dificuldade: 5,
      raciocinio: "O art. 29, VII, separa alínea e de alínea f.",
      enunciado:
        "Em serviço de urgência, uma viatura liga só a iluminação intermitente, sem alarme sonoro, e fica estacionada em local proibido. Pelo art. 29, VII, do CTB, a prerrogativa",
      alternativas: [
        "não se aplica, porque toda prerrogativa exige os dois dispositivos ligados",
        "só vale se o condutor registrar depois a ocorrência no órgão de trânsito",
        "depende de sinalização de advertência antes da parada",
        "alcança qualquer viatura oficial, mesmo fora do serviço de urgência",
        "de estacionar exige só a luz intermitente, e a viatura a usou",
      ],
      correta: 4,
      explicacao:
        "A alínea f exige apenas iluminação intermitente para o livre estacionamento. A alínea e exige os dois dispositivos para a livre circulação e a parada.",
      explicacaoErradas:
        "“toda prerrogativa” apaga a diferença entre as alíneas. “registrar depois” e “sinalização de advertência” não são requisitos. “mesmo fora” contraria o serviço de urgência.",
      pegadinha: "Exigir sirene também para o estacionamento.",
      conhecimento: "O alarme e a luz só podem ser usados na efetiva prestação de serviço de urgência.",
    },
    {
      topico: "Uso de luzes",
      subassunto: "Rodovia de pista simples",
      dificuldade: 5,
      raciocinio: "O § 2º do art. 40 mudou a regra antiga.",
      enunciado:
        "Um carro sem luz de rodagem diurna circula em rodovia de pista simples, fora do perímetro urbano, de dia e com tempo bom. Quanto às luzes, o condutor",
      alternativas: [
        "deve manter os faróis acesos, como exige o art. 40, § 2º",
        "pode trafegar com os faróis apagados, pois a regra vale só à noite",
        "deve usar luz alta, pois a via não tem iluminação",
        "só acende os faróis em túneis e sob chuva, neblina ou cerração",
        "só precisa de faróis acesos nas rodovias de pista dupla e duas faixas",
      ],
      correta: 0,
      explicacao:
        "O art. 40, § 2º, manda quem não tem luz de rodagem diurna manter os faróis acesos nas rodovias de pista simples fora dos perímetros urbanos, mesmo de dia.",
      explicacaoErradas:
        "“só à noite” e “túneis e sob chuva” ignoram o § 2º. “luz alta” se liga às vias não iluminadas à noite. “pista dupla” troca a pista da regra.",
      pegadinha: "Aplicar a regra a toda rodovia ou também aos carros com luz diurna.",
      conhecimento: "Luzes de rodagem diurna são equipamento obrigatório pelo art. 105, VIII.",
    },
    {
      topico: "Parada e estacionamento",
      subassunto: "Carga e descarga",
      dificuldade: 4,
      raciocinio: "Parada só serve a passageiros.",
      enunciado:
        "Em local com estacionamento proibido, um caminhão fica imobilizado dez minutos para descarregar mercadorias. Pelo CTB, essa operação",
      alternativas: [
        "é parada, pois o veículo fica pouco tempo no local",
        "é permitida, porque a parada é livre até dez minutos",
        "é embarque de carga, que a lei equipara a desembarque de passageiros",
        "é considerada estacionamento, e não parada",
        "é regulada pelo Contran, e não pelo órgão com circunscrição sobre a via",
      ],
      correta: 3,
      explicacao:
        "O parágrafo único do art. 47 diz que a operação de carga ou descarga é considerada estacionamento e será regulamentada pelo órgão com circunscrição sobre a via.",
      explicacaoErradas:
        "“é parada” e “livre até dez minutos” desprezam que a parada serve só a passageiros. “embarque de carga” inventa uma equiparação. “regulada pelo Contran” troca o órgão.",
      pegadinha: "Decidir pelo tempo, e não pela finalidade.",
      conhecimento: "Quando proibido o estacionamento, a parada se restringe ao tempo indispensável para embarque ou desembarque.",
    },
    {
      topico: "Ultrapassagem",
      subassunto: "Conceitos do Anexo I",
      dificuldade: 5,
      raciocinio: "Faixa diferente muda o nome do movimento.",
      enunciado:
        "Em via com duas faixas no mesmo sentido, um carro segue em sua faixa e fica à frente de outro, mais lento, que está na faixa ao lado, sem que nenhum deles mude de faixa. Pelo Anexo I, o movimento é",
      alternativas: [
        "ultrapassagem, pois passou à frente de veículo no mesmo sentido",
        "passagem por outro veículo, por ocorrer em faixas distintas",
        "transposição de faixas, por haver passagem de uma faixa para outra",
        "conversão, por haver mudança da direção original do veículo",
        "ultrapassagem pela direita, proibida quando o outro carro é mais lento",
      ],
      correta: 1,
      explicacao:
        "Passagem por outro veículo ocorre no mesmo sentido, em menor velocidade, mas em faixas distintas. Na ultrapassagem, a faixa é a mesma, e o veículo sai e retorna a ela.",
      explicacaoErradas:
        "“ultrapassagem” exige sair e retornar à faixa de origem. “transposição” exige mudar de faixa. “conversão” é movimento em ângulo. “pela direita” repete o erro da ultrapassagem.",
      pegadinha: "Chamar de ultrapassagem todo movimento de passar à frente.",
      conhecimento: "Transposição de faixas é a passagem de uma faixa demarcada para outra.",
    },
    {
      topico: "Transporte de crianças",
      subassunto: "Art. 64",
      dificuldade: 5,
      raciocinio: "A regra pede duas condições juntas.",
      enunciado:
        "Um condutor leva, no banco dianteiro e com o cinto, uma criança de 9 anos e 1,50 m de altura. Pela regra do art. 64, esse transporte",
      alternativas: [
        "é proibido, pois toda criança menor de 10 anos fica no banco traseiro",
        "só é permitido com dispositivo de retenção, qualquer que seja a altura",
        "é proibido, porque a regra considera a idade, e não a altura",
        "é permitido só com autorização escrita dos pais ou do responsável",
        "não viola o art. 64, pois a criança já atingiu 1,45 m",
      ],
      correta: 4,
      explicacao:
        "O art. 64 alcança as crianças com menos de 10 anos que não tenham atingido 1,45 m. Aos 9 anos e com 1,50 m, falta uma das condições.",
      explicacaoErradas:
        "“toda criança” e “considera a idade” ignoram a altura. “qualquer que seja a altura” também. “autorização escrita” não existe na lei.",
      pegadinha: "Olhar só para a idade.",
      conhecimento: "O Contran disciplina o uso excepcional de dispositivos de retenção no banco dianteiro.",
    },
    {
      topico: "Conversão",
      subassunto: "Via com acostamento",
      dificuldade: 4,
      raciocinio: "Quem tem acostamento espera nele.",
      enunciado:
        "Em rodovia com acostamento e sem local apropriado para conversão à esquerda, um condutor quer entrar à esquerda. Pelo art. 37 do CTB, ele deve",
      alternativas: [
        "parar na faixa da esquerda com o pisca-alerta ligado até a pista ficar livre",
        "seguir até a próxima interseção em nível, mesmo longe, sem nunca cruzar a pista",
        "aguardar no acostamento, à direita, para cruzar a pista com segurança",
        "aproximar-se do eixo da pista e executar a manobra no menor espaço possível",
        "entrar no canteiro central e aguardar ali até a abertura do fluxo contrário",
      ],
      correta: 2,
      explicacao: "O art. 37 manda aguardar no acostamento, à direita, onde não houver local apropriado.",
      explicacaoErradas:
        "“parar na faixa” cria perigo na pista. “sem nunca cruzar” contraria a lei. “aproximar-se do eixo” é a regra do art. 38 para quando não há essa situação. “canteiro central” não é local de espera.",
      pegadinha: "Aplicar a regra do art. 38 em via com acostamento.",
      conhecimento: "O mesmo vale para a operação de retorno.",
    },
    {
      topico: "Normas gerais",
      subassunto: "Art. 29, § 2º",
      dificuldade: 4,
      raciocinio: "Quem é maior protege quem é menor.",
      enunciado: "Pelo art. 29, § 2º, respeitadas as normas de circulação e conduta, são responsáveis pela segurança os veículos",
      alternativas: [
        "maiores pelos menores, motorizados pelos não motorizados e, juntos, pelos pedestres",
        "menores pelos maiores, não motorizados pelos motorizados e, juntos, pelos pedestres",
        "maiores pelos menores, não motorizados pelos motorizados e, juntos, pelos pedestres",
        "mais velozes pelos mais lentos, oficiais pelos particulares e, juntos, pelos pedestres da via",
        "maiores pelos menores, e os pedestres respondem pelos ciclistas que usam o mesmo espaço",
      ],
      correta: 0,
      explicacao:
        "A ordem é decrescente: os maiores respondem pelos menores, os motorizados pelos não motorizados e, juntos, pela incolumidade dos pedestres.",
      explicacaoErradas:
        "“menores pelos maiores” inverte a ordem. “não motorizados pelos motorizados” inverte a segunda parte. “oficiais pelos particulares” inventa um critério. “pedestres respondem” contraria a lei.",
      pegadinha: "Inverter só uma parte da ordem.",
      conhecimento: "A regra não elimina as normas de circulação, que seguem valendo para todos.",
    },
  ],
};
