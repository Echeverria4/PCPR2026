import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "rlm-25",
  resumo: {
    ideia:
      "Probabilidade mede a chance de algo acontecer. Na forma mais simples: casos favoráveis ÷ casos possíveis.",
    itens: [
      {
        termo: "Faixa de valores",
        faz: "Fica entre 0 (impossível) e 1 (certo).",
      },
      {
        termo: "Complementar",
        faz: "P(não A) = 1 − P(A).",
        pista: "“Pelo menos um” costuma sair por 1 − P(nenhum).",
      },
      {
        termo: "União",
        faz: "P(A ou B) = P(A) + P(B) − P(A e B).",
      },
      {
        termo: "Condicional",
        faz: "P(B dado A) = P(A e B) ÷ P(A). O “dado que” reduz o universo.",
      },
      {
        termo: "Multiplicação",
        faz: "P(A e B) = P(A) · P(B dado A).",
      },
      {
        termo: "Independentes",
        faz: "Um não muda a chance do outro: P(A e B) = P(A) · P(B).",
      },
      {
        termo: "Mutuamente excludentes",
        faz: "Não acontecem juntos: P(A e B) = 0.",
        pista: "Não confunda com independentes.",
      },
      {
        termo: "Teorema de Bayes",
        faz: "Inverte a condição: parte do resultado e volta à causa.",
        pista: "Calcule cada caminho. Depois, divida o caminho pedido pela soma de todos.",
      },
    ],
    cuidado:
      "P(A dado B) e P(B dado A) são diferentes. Veja qual informação a questão já deu como certa.",
  },
  questoes: [
    {
      topico: "Probabilidade clássica",
      subassunto: "Soma de dois dados",
      dificuldade: 4,
      raciocinio: "Contar os pares entre os 36 possíveis.",
      enunciado: "Dois dados comuns são lançados. A probabilidade de a soma ser 7 ou 11 é",
      alternativas: ["1/6", "1/18", "2/11", "1/108", "2/9"],
      correta: 4,
      explicacao: "Soma 7: 6 pares. Soma 11: 2 pares. Total: 8 ÷ 36 = 2/9.",
      explicacaoErradas:
        "“1/6” conta só a soma 7, e “1/18”, só a soma 11. “2/11” trata as 11 somas como igualmente prováveis. “1/108” multiplica as duas chances, em vez de somar.",
      pegadinha: "Achar que as somas têm a mesma chance. Há 36 pares, e não 11 resultados.",
      conhecimento: "Eventos que não ocorrem juntos: some as probabilidades.",
    },
    {
      topico: "União de eventos",
      subassunto: "Nenhum dos dois",
      dificuldade: 5,
      raciocinio: "Achar a união e tirar do total.",
      enunciado:
        "Em 200 veículos, 60 têm a infração A, 50 têm a infração B e 20 têm as duas. Sorteado um veículo, a probabilidade de ele não ter nenhuma das duas é",
      alternativas: ["45%", "35%", "55%", "10%", "90%"],
      correta: 2,
      explicacao: "União: 60 + 50 − 20 = 90. Sem nenhuma: 110. 110 ÷ 200 = 55%.",
      explicacaoErradas:
        "“45%” é ter pelo menos uma. “35%” é ter exatamente uma. “10%” é ter as duas. “90%” é não ter as duas ao mesmo tempo.",
      pegadinha: "Somar 60 e 50 sem tirar os 20. Eles foram contados duas vezes.",
      conhecimento: "P(nenhum) = 1 − P(A ou B).",
    },
    {
      topico: "Probabilidade condicional",
      subassunto: "Universo reduzido",
      dificuldade: 5,
      raciocinio: "O sorteio é só entre os testes positivos.",
      enunciado:
        "Em uma blitz, 400 condutores de carro e 100 de moto fizeram o teste. Deram positivo 60 de carro e 10 de moto. Sorteado um teste positivo, a probabilidade de ser de condutor de carro é",
      alternativas: ["3/20", "6/7", "3/25", "4/5", "7/50"],
      correta: 1,
      explicacao: "Há 70 testes positivos, e 60 são de carro. 60 ÷ 70 = 6/7.",
      explicacaoErradas:
        "“3/20” inverte a condição: 60 ÷ 400. “3/25” divide 60 pelo total de 500. “4/5” é a proporção de condutores de carro. “7/50” é a chance de um teste ser positivo.",
      pegadinha: "Dividir pelo total. O “dado que” reduz o universo a 70.",
      conhecimento: "P(B dado A) = P(A e B) ÷ P(A).",
    },
    {
      topico: "Eventos independentes",
      subassunto: "Pelo menos um",
      dificuldade: 5,
      raciocinio: "Calcular a chance de nenhum detectar e tirar de 1.",
      enunciado:
        "Três radares independentes detectam um veículo com probabilidades de 90%, 80% e 50%. A probabilidade de pelo menos um detectar é",
      alternativas: ["0,36", "0,73", "0,01", "0,99", "0,14"],
      correta: 3,
      explicacao: "Nenhum detecta: 0,1 · 0,2 · 0,5 = 0,01. Pelo menos um: 1 − 0,01 = 0,99.",
      explicacaoErradas:
        "“0,36” é os três detectarem. “0,73” é a média das chances. “0,01” é nenhum detectar. “0,14” é exatamente um detectar.",
      pegadinha: "Multiplicar as chances de detectar. Isso dá os três juntos.",
      conhecimento: "P(pelo menos um) = 1 − P(nenhum).",
    },
    {
      topico: "Probabilidade sem reposição",
      subassunto: "Um de cada tipo",
      dificuldade: 5,
      raciocinio: "Contar os pares com um bom e um defeituoso entre todos os pares.",
      enunciado:
        "Uma caixa tem 5 etilômetros bons e 3 defeituosos. Retiram-se 2, sem reposição. A probabilidade de sair um de cada tipo é",
      alternativas: ["15/28", "15/56", "15/32", "3/28", "5/14"],
      correta: 0,
      explicacao: "Pares possíveis: C(8, 2) = 28. Pares com um de cada: 5 · 3 = 15. Resposta: 15/28.",
      explicacaoErradas:
        "“15/56” considera só uma ordem. “15/32” supõe reposição. “3/28” é sair dois defeituosos, e “5/14”, dois bons.",
      pegadinha: "Considerar só uma ordem. O bom pode sair primeiro ou depois.",
      conhecimento: "Sem reposição, o total diminui a cada retirada.",
    },
    {
      topico: "Teorema de Bayes",
      subassunto: "Da consequência à causa",
      dificuldade: 5,
      raciocinio: "Calcular os dois caminhos até o erro e dividir o de B pela soma.",
      enunciado:
        "O posto A faz 60% dos registros, com 2% de erro. O posto B faz 40%, com 5% de erro. Sorteado um registro com erro, a probabilidade de ele ser do posto B é",
      alternativas: ["40%", "3,2%", "5%", "37,5%", "62,5%"],
      correta: 4,
      explicacao: "Caminho A: 0,6 · 0,02 = 0,012. Caminho B: 0,4 · 0,05 = 0,02. 0,02 ÷ 0,032 = 62,5%.",
      explicacaoErradas:
        "“40%” é a chance antes de saber do erro. “3,2%” é a chance total de erro. “5%” é a taxa de erro de B. “37,5%” é a chance de o erro ser do posto A.",
      pegadinha: "Usar os 40%. A informação do erro muda a chance.",
      conhecimento: "Bayes = caminho pedido ÷ soma dos caminhos.",
    },
  ],
};
