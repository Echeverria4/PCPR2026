import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-12",
  resumo: {
    ideia:
      "Coesão é a ligação entre as partes do texto: retomar o que já foi dito e encadear o que vem depois. Coerência é a lógica das ideias. Um texto pode estar ligado e, mesmo assim, não fazer sentido.",
    itens: [
      {
        termo: "Anáfora e catáfora",
        faz: "Anáfora retoma o que veio antes: “isso”. Catáfora anuncia o que vem depois: “isto: ser aprovado”.",
      },
      {
        termo: "Referência fora do texto",
        faz: "“Aqui”, “amanhã” e “nós” podem apontar para o lugar, o tempo e as pessoas da situação, e não para palavras do texto.",
        pista: "O nome técnico é dêitico.",
      },
      {
        termo: "Pronomes",
        faz: "Retomam e substituem nomes, para evitar repetição: o agente chegou, e ele preencheu o auto.",
      },
      {
        termo: "“Este” e “esse” no texto",
        faz: "“Este” anuncia o que virá. “Esse” retoma o que já foi dito.",
        pista: "“Este” também retoma, quando aponta para o termo recém-citado.",
      },
      {
        termo: "“Este” e “aquele”",
        faz: "Entre dois termos citados, “este” é o último, o mais próximo. “Aquele” é o primeiro, o mais distante.",
      },
      {
        termo: "Artigo, numeral e advérbio",
        faz: "O artigo definido marca termo já conhecido. “O primeiro”, “ambos”, “aqui” e “lá” também retomam.",
      },
      {
        termo: "Hiperônimo e hipônimo",
        faz: "Retoma-se o termo específico com um mais amplo: a carreta, depois “o veículo”.",
      },
      {
        termo: "Nominalização",
        faz: "Um verbo volta como substantivo: fiscalizaram a carga; a fiscalização durou uma hora.",
      },
      {
        termo: "Elipse",
        faz: "Omite-se um termo que o leitor recupera: o agente parou o carro e [ele] pediu os documentos.",
      },
      {
        termo: "Redução e sigla",
        faz: "Nome por extenso primeiro, com a sigla entre parênteses. Depois, usa-se só a sigla ou a forma curta.",
      },
      {
        termo: "Coesão sequencial",
        faz: "Os conectivos encadeiam as ideias e mostram a relação entre elas: oposição, causa, conclusão.",
      },
      {
        termo: "Justaposição",
        faz: "Sem conectivo, a relação fica implícita: estou atrasado: tenho que sair. O leitor deduz a causa.",
      },
      {
        termo: "Coerência",
        faz: "Relação lógica entre as ideias e com a realidade. Contradição gera incoerência.",
        pista: "Mudar o sentido não é o mesmo que quebrar a coerência.",
      },
    ],
    cuidado:
      "Em questões de reescrita, leia o comando: “manter o sentido”, “manter a coerência” e “manter a correção” são pedidos diferentes.",
  },
  questoes: [
    {
      topico: "Coesão referencial",
      subassunto: "“Este” e “aquele” retomando dois termos",
      dificuldade: 4,
      raciocinio: "Ligar “este” ao termo citado por último e “aquele” ao citado primeiro.",
      enunciado:
        "“O condutor e o passageiro foram ouvidos no posto; este negou ter visto o radar, e aquele confirmou o excesso de velocidade.” Assinale a leitura correta do período.",
      alternativas: [
        "O passageiro negou ter visto o radar, e o condutor confirmou o excesso.",
        "O condutor negou ter visto o radar, e o passageiro confirmou o excesso.",
        "O condutor e o passageiro negaram ter visto o radar, e outro confirmou o excesso.",
        "O passageiro negou ter visto o radar e, depois, ele mesmo confirmou o excesso.",
        "O condutor negou o radar e o excesso, sem nenhuma confirmação do passageiro.",
      ],
      correta: 0,
      explicacao:
        "“Este” retoma o termo mais próximo, “o passageiro”. “Aquele” retoma o termo mais distante, “o condutor”.",
      explicacaoErradas:
        "A leitura com o condutor negando inverte as referências. As demais fazem os dois pronomes apontarem para a mesma pessoa, ou para alguém que não foi citado.",
      pegadinha:
        "Ler na ordem em que os nomes aparecem. A retomada corre ao contrário: o primeiro pronome pega o último nome.",
      conhecimento:
        "Em retomada de dois termos: “este” é o último citado; “aquele”, o primeiro.",
    },
    {
      topico: "Coesão referencial",
      subassunto: "Anáfora, catáfora e referência externa",
      dificuldade: 4,
      raciocinio: "Perguntar se o termo aponta para trás, para frente ou para fora do texto.",
      enunciado:
        "Assinale a frase em que o termo entre aspas antecipa uma informação que aparece depois dele.",
      alternativas: [
        "O agente conferiu os documentos e “os” devolveu ao condutor.",
        "A carga estava irregular, e “isso” levou à apreensão do caminhão.",
        "Os fiscais querem apenas “isto”: que a pista seja sinalizada.",
        "A equipe chegou à barreira e “lá” encontrou o motorista ferido.",
        "O chefe avisou que “amanhã” a equipe trabalha até mais tarde.",
      ],
      correta: 2,
      explicacao:
        "“Isto” anuncia o que vem depois dos dois-pontos. Esse uso é chamado de catafórico.",
      explicacaoErradas:
        "“os”, “isso” e “lá” retomam, nessa ordem, “documentos”, a informação anterior e “barreira”. “amanhã” depende do dia em que a frase foi dita: aponta para fora do texto.",
      pegadinha:
        "Marcar “amanhã” porque ele fala do futuro. A pergunta trata da posição da informação no texto, não do tempo dos fatos.",
      conhecimento:
        "Anáfora olha para trás, catáfora olha para frente, e a referência externa olha para a situação em que o texto foi produzido.",
    },
    {
      topico: "Coesão referencial",
      subassunto: "Retomada por hiperônimo",
      dificuldade: 4,
      raciocinio: "Comparar o sentido de “carreta” com o de “veículo” e ver qual deles é mais amplo.",
      enunciado:
        "“A carreta tombou na curva da serra. O veículo bloqueou as duas faixas, e o socorro demorou uma hora.” Assinale a opção que descreve o mecanismo de coesão em “O veículo”.",
      alternativas: [
        "Retomada por hipônimo, palavra de sentido mais restrito que “carreta”.",
        "Retomada por elipse, com omissão do termo recuperado pelo contexto.",
        "Retomada por nominalização de um verbo usado antes no mesmo período.",
        "Retomada por hiperônimo, palavra de sentido mais amplo que “carreta”.",
        "Retomada por sigla, forma reduzida do nome que apareceu por extenso.",
      ],
      correta: 3,
      explicacao:
        "Toda carreta é veículo, mas nem todo veículo é carreta. “Veículo” é o termo mais amplo e retoma o específico.",
      explicacaoErradas:
        "O hipônimo é o termo específico, e “carreta” é que tem esse papel. Na elipse, nada aparece no lugar do termo. Não há verbo virando substantivo. “Veículo” não é sigla.",
      pegadinha:
        "Trocar hipônimo por hiperônimo. Memorize assim: hiper é o grupo maior; hipo é o tipo dentro do grupo.",
      conhecimento:
        "Retomar com hiperônimo evita repetição e mantém a referência ao mesmo objeto.",
    },
    {
      topico: "Coesão sequencial",
      subassunto: "Valor do conectivo na reescrita",
      dificuldade: 5,
      raciocinio: "Identificar a relação do original, que é de oposição, e procurar a mesma relação na reescrita.",
      enunciado:
        "“Embora a pista estivesse molhada, o motorista manteve a velocidade.” Assinale a reescrita que preserva o sentido do período.",
      alternativas: [
        "A pista estava molhada, portanto o motorista manteve a velocidade.",
        "O motorista manteve a velocidade porque a pista estava molhada.",
        "A pista estava molhada, mas o motorista manteve a velocidade.",
        "Como a pista estava molhada, o motorista manteve a velocidade.",
        "O motorista manteve a velocidade para que a pista ficasse molhada.",
      ],
      correta: 2,
      explicacao:
        "“Embora” marca concessão: o fato esperado não ocorreu. “Mas” mantém essa oposição, ainda que a estrutura mude.",
      explicacaoErradas:
        "“portanto” indica conclusão, “porque” e “Como” indicam causa, e “para que” indica finalidade. Em todas essas, a pista molhada passa a explicar a conduta do motorista.",
      pegadinha:
        "Exigir que a nova frase tenha outra concessiva. Trocar “embora” por “mas” muda a estrutura e mantém a oposição.",
      conhecimento:
        "Concessão e adversidade expressam a mesma ideia de oposição. A primeira fica na subordinada; a segunda, na coordenada.",
    },
    {
      topico: "Coesão sequencial",
      subassunto: "Relação implícita entre orações justapostas",
      dificuldade: 4,
      raciocinio: "Descobrir qual fato explica o outro e testar os conectivos.",
      enunciado:
        "“A operação foi cancelada: a ponte caiu.” Assinale a opção que explicita, com conectivo, a relação entre as orações.",
      alternativas: [
        "A operação foi cancelada porque a ponte caiu.",
        "A operação foi cancelada, embora a ponte tenha caído.",
        "A operação foi cancelada, portanto a ponte acabou caindo.",
        "A operação foi cancelada para que a ponte caísse.",
        "A operação foi cancelada à medida que a ponte caía.",
      ],
      correta: 0,
      explicacao:
        "Os dois-pontos introduzem o motivo do cancelamento. A queda da ponte é a causa, e “porque” torna isso visível.",
      explicacaoErradas:
        "“embora” trata a causa como obstáculo. “portanto” inverte a relação e transforma a queda em consequência. “para que” indica finalidade, e “à medida que” indica proporção.",
      pegadinha:
        "Escolher “portanto” porque a palavra lembra uma relação de causa. Ele introduz a conclusão, e a queda da ponte não é a conclusão.",
      conhecimento:
        "Sem conectivo também há coesão: a pontuação e a ordem das ideias mostram a relação.",
    },
    {
      topico: "Coerência",
      subassunto: "Contradição entre as ideias",
      dificuldade: 4,
      raciocinio: "Verificar se o conectivo combina com a relação real entre os fatos.",
      enunciado: "Assinale a frase em que há quebra de coerência.",
      alternativas: [
        "Apesar do nevoeiro, a equipe manteve a operação na serra.",
        "Como a pista seguia interditada, o tráfego foi todo desviado.",
        "A pista seguia interditada, mas o tráfego passou ao acostamento.",
        "A pista seguia interditada; logo, o tráfego fluía sem bloqueios.",
        "O tráfego fluía normalmente; por isso, a equipe retirou os cones.",
      ],
      correta: 3,
      explicacao:
        "“Logo” apresenta uma conclusão, mas a pista interditada não leva a um tráfego sem bloqueios. As duas ideias se contradizem.",
      explicacaoErradas:
        "O nevoeiro é um obstáculo vencido, e “Apesar” marca isso. “Como” liga a interdição ao desvio. “mas” opõe a interdição à saída encontrada. “por isso” liga o fluxo normal à retirada dos cones.",
      pegadinha:
        "Considerar incoerente toda frase com oposição. Oposição não é contradição: o problema é o conectivo indicar uma lógica que os fatos negam.",
      conhecimento:
        "A coerência depende da lógica entre as ideias. A frase pode estar certa na gramática e, mesmo assim, ser incoerente.",
    },
  ],
};
