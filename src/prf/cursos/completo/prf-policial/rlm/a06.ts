import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-06",
  resumo: {
    ideia:
      "A regra de três resolve problemas em que uma grandeza depende de outra. Antes de montar a conta, descubra se as grandezas andam juntas ou em sentido contrário.",
    itens: [
      {
        termo: "Diretamente proporcionais",
        faz: "Uma dobra, a outra dobra. Mais horas, mais quilômetros.",
        pista: "Multiplica cruzado.",
      },
      {
        termo: "Inversamente proporcionais",
        faz: "Uma dobra, a outra cai pela metade. Mais agentes, menos dias.",
        pista: "O produto das duas fica constante.",
      },
      {
        termo: "Nem toda relação é proporcional",
        faz: "Se o lado do quadrado dobra, a área quadruplica. A relação existe, mas não é proporcional.",
      },
      {
        termo: "Regra de três composta",
        faz: "Compare cada grandeza com a que se quer achar, sempre uma de cada vez, e mantenha as outras fixas.",
      },
      {
        termo: "Montagem da composta",
        faz: "Grandeza direta entra como está; grandeza inversa entra invertida. Depois, multiplique tudo.",
      },
      {
        termo: "Trabalho total",
        faz: "Em problemas de equipe, pense em agentes × dias. Ao mudar a equipe no meio, calcule só o que falta.",
      },
    ],
    cuidado:
      "Horas e minutos não são decimais: 3 h 15 min são 195 minutos, e não 3,15 horas.",
  },
  questoes: [
    {
      topico: "Regra de três simples",
      subassunto: "Mudança da equipe no meio do serviço",
      dificuldade: 5,
      raciocinio: "Calcular o serviço que falta em agentes × dias e dividir pela nova equipe.",
      enunciado:
        "Doze agentes concluiriam um levantamento em 15 dias. Depois de 5 dias de trabalho, 4 agentes foram deslocados para outra missão, e o ritmo individual se manteve. O levantamento inteiro levou, em dias,",
      alternativas: ["15", "27,5", "20", "22,5", "10"],
      correta: 2,
      explicacao:
        "Faltavam 10 dias com 12 agentes: 120 agentes-dia. Com 8 agentes, são 15 dias. Somando os 5 iniciais: 20 dias.",
      explicacaoErradas:
        "“15” conta só os dias finais. “22,5” aplica a nova equipe ao serviço inteiro, e “27,5” ainda soma os 5 dias a esse valor. “10” repete o que faltava sem mudar a equipe.",
      pegadinha:
        "Parar em 15 dias. A pergunta é sobre o levantamento inteiro, e os 5 dias iniciais também contam.",
      conhecimento: "Agentes e dias são inversamente proporcionais quando o serviço é o mesmo.",
    },
    {
      topico: "Regra de três composta",
      subassunto: "Três grandezas com sentidos diferentes",
      dificuldade: 5,
      raciocinio: "Comparar cada grandeza com “dias”, uma de cada vez.",
      enunciado:
        "Oito máquinas, trabalhando 6 horas por dia, pintam 12 km de faixa em 5 dias. Quatro máquinas iguais, trabalhando 10 horas por dia, pintam 18 km de faixa em quantos dias?",
      alternativas: ["6", "6,25", "15", "9", "25"],
      correta: 3,
      explicacao:
        "Menos máquinas pedem mais dias: 8/4. Mais horas pedem menos dias: 6/10. Mais quilômetros pedem mais dias: 18/12. Logo, 5 · 2 · 0,6 · 1,5 = 9 dias.",
      explicacaoErradas:
        "“6,25” trata tudo como direto. “15” ignora as horas, e “6” ignora os quilômetros. “25” inverte a fração das horas.",
      pegadinha:
        "Montar todas as frações na mesma direção. Máquinas e horas são inversas a dias.",
      conhecimento: "Na composta, compare cada grandeza isoladamente com a que se procura.",
    },
    {
      topico: "Regra de três composta",
      subassunto: "Consumo de uma frota",
      dificuldade: 4,
      raciocinio: "Todas as grandezas são diretas em relação ao consumo.",
      enunciado:
        "Doze viaturas, rodando 10 horas por dia, consomem 1.800 litros em 5 dias. Com três viaturas a menos, rodando 12 horas por dia durante 8 dias, no mesmo ritmo, o consumo, em litros, será de",
      alternativas: ["2.592", "1.620", "2.160", "3.456", "4.320"],
      correta: 0,
      explicacao: "1.800 · (9/12) · (12/10) · (8/5) = 1.800 · 0,75 · 1,2 · 1,6 = 2.592 litros.",
      explicacaoErradas:
        "“3.456” não tira as viaturas. “4.320” soma três viaturas, em vez de tirar. “2.160” ignora as horas por dia, e “1.620” ignora os dias.",
      pegadinha:
        "Usar 3 viaturas no cálculo. O enunciado diz “três a menos”, ou seja, nove viaturas.",
      conhecimento: "Se todas as grandezas são diretas, basta multiplicar pelas razões novas sobre as antigas.",
    },
    {
      topico: "Grandezas proporcionais",
      subassunto: "Reconhecer a relação inversa",
      dificuldade: 4,
      raciocinio: "Dobrar uma grandeza e ver o que acontece com a outra.",
      enunciado: "Assinale o par de grandezas inversamente proporcionais.",
      alternativas: [
        "A distância percorrida e o tempo gasto, com velocidade constante.",
        "O lado de um quadrado e a área desse mesmo quadrado.",
        "A idade de um condutor e a quantidade de multas dele.",
        "A velocidade média e o tempo gasto, em um trecho fixo.",
        "A quantidade de agentes e os autos lavrados por dia, em igual ritmo.",
      ],
      correta: 3,
      explicacao:
        "Em um trecho fixo, dobrar a velocidade reduz o tempo à metade. O produto da velocidade pelo tempo é a distância, que não muda.",
      explicacaoErradas:
        "Distância e tempo são diretos, assim como agentes e autos lavrados. Lado e área têm relação quadrática, e não proporcional. Idade e multas não têm relação fixa.",
      pegadinha:
        "Marcar qualquer relação em que uma coisa cresce e a outra muda. A inversa exige que o produto seja constante.",
      conhecimento: "Inversamente proporcionais: x · y é constante.",
    },
    {
      topico: "Regra de três simples",
      subassunto: "Tempo em horas e minutos",
      dificuldade: 5,
      raciocinio: "Converter o tempo para minutos e usar a relação inversa.",
      enunciado:
        "A 80 km/h, um comboio faz um percurso em 3 h 15 min. Mantendo sempre 100 km/h, o mesmo percurso levaria",
      alternativas: ["2 h 26 min 15 s", "2 h 31 min 12 s", "2 h 36 min", "2 h 52 min", "4 h 3 min 45 s"],
      correta: 2,
      explicacao: "3 h 15 min = 195 min. Pela relação inversa: 195 · 80 ÷ 100 = 156 min = 2 h 36 min.",
      explicacaoErradas:
        "“2 h 52 min” e “2 h 31 min 12 s” tratam 3 h 15 min como 3,15 horas. “2 h 26 min 15 s” corta 25% do tempo, porque a velocidade subiu 25%. “4 h 3 min 45 s” usa a relação direta.",
      pegadinha:
        "Achar que 25% a mais de velocidade tira 25% do tempo. O tempo cai 20%, porque 80/100 = 0,8.",
      conhecimento: "Em cálculos de tempo, passe tudo para minutos ou use frações de hora: 15 min = 0,25 h.",
    },
    {
      topico: "Regra de três composta",
      subassunto: "Ritmo individual",
      dificuldade: 5,
      raciocinio: "Achar o ritmo de um fiscal e então escalar para o tempo pedido.",
      enunciado:
        "Cinco fiscais preenchem cinco autos em cinco minutos, no mesmo ritmo. Para preencher cem autos em cem minutos, o número de fiscais necessários é",
      alternativas: ["1", "20", "25", "100", "5"],
      correta: 4,
      explicacao:
        "Cada fiscal preenche 1 auto em 5 minutos, ou seja, 20 autos em 100 minutos. Para 100 autos, são 100 ÷ 20 = 5 fiscais.",
      explicacaoErradas:
        "“100” acompanha os números do enunciado. “20” é a produção de cada fiscal. “1” supõe que um fiscal faz um auto por minuto, e “25” multiplica 5 por 5.",
      pegadinha:
        "Achar que cinco fiscais fazem um auto por minuto cada um. Juntos, eles fazem um por minuto.",
      conhecimento: "Quando autos e tempo crescem na mesma razão, a equipe não muda.",
    },
  ],
};
