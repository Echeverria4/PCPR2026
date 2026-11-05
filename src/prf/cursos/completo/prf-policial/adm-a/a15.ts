import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-15",
  resumo: {
    ideia:
      "Três normas de transparência e integridade fecham o curso: a Lei de Acesso à Informação (LAI), a Lei de Conflito de Interesses e o decreto contra o nepotismo no governo federal.",
    itens: [
      {
        termo: "Regra da LAI",
        faz: "Acesso é a regra, sigilo é a exceção. Vale para todos os Poderes e entes.",
      },
      {
        termo: "Pedido",
        faz: "Qualquer interessado pede, com identificação. É vedado exigir os motivos.",
      },
      {
        termo: "Prazo de resposta",
        faz: "Acesso imediato. Se não der, até 20 dias, mais 10 com justificativa expressa.",
      },
      {
        termo: "Recurso",
        faz: "10 dias da ciência. A autoridade superior se manifesta em 5 dias.",
      },
      {
        termo: "Graus de sigilo",
        faz: "Ultrassecreta 25 anos, secreta 15 e reservada 5, contados da produção.",
      },
      {
        termo: "Informação pessoal",
        faz: "Acesso restrito por até 100 anos, sem precisar de classificação.",
      },
      {
        termo: "Sem restrição",
        faz: "Informação sobre violação de direitos humanos por agentes públicos não pode ser restringida.",
      },
      {
        termo: "Conflito de interesses",
        faz: "Independe de dano ou de ganho. Vale também em licença ou afastamento.",
      },
      {
        termo: "Depois do cargo",
        faz: "Impedimentos por 6 meses. Informação privilegiada: a qualquer tempo.",
      },
      {
        termo: "Nepotismo federal",
        faz: "Familiar vai até o 3º grau, incluindo cônjuge e companheiro. Subordinação direta é sempre vedada.",
      },
    ],
    cuidado: "Os prazos de sigilo contam da produção do documento, e não da classificação.",
  },
  questoes: [
    {
      topico: "Lei de Acesso à Informação",
      subassunto: "Pedido de acesso",
      dificuldade: 4,
      raciocinio: "Quem pede informação pública não explica o porquê.",
      enunciado:
        "Um cidadão pede a um órgão federal os gastos com combustível das viaturas. O servidor exige que ele explique por que quer a informação. Pela LAI, essa exigência",
      alternativas: [
        "é válida, pois todo pedido precisa de um interesse comprovado",
        "é válida só se o pedido envolver dinheiro público",
        "é válida, desde que a explicação seja dada por escrito",
        "é vedada só nos pedidos feitos pelos sítios oficiais",
        "é vedada, pois a lei proíbe exigir os motivos do pedido",
      ],
      correta: 4,
      explicacao: "O art. 10, § 3º, veda quaisquer exigências relativas aos motivos do pedido de informações de interesse público.",
      explicacaoErradas:
        "“interesse comprovado” contraria o § 3º. “dinheiro público” e “por escrito” não abrem exceção. “sítios oficiais” limita o que a lei não limita.",
      pegadinha: "Confundir identificação com motivação.",
      conhecimento: "A identificação do requerente é exigida, mas não pode inviabilizar o pedido (art. 10, § 1º).",
    },
    {
      topico: "Lei de Acesso à Informação",
      subassunto: "Prazos",
      dificuldade: 4,
      raciocinio: "20 + 10.",
      enunciado: "Um órgão não pode dar de imediato a informação pedida. Pela LAI, ele tem o prazo de",
      alternativas: [
        "10 dias, prorrogáveis por mais 5, com justificativa",
        "20 dias, prorrogáveis por mais 10, com justificativa",
        "20 dias, sem direito a prorrogação",
        "30 dias, prorrogáveis por mais 15, com aviso ao interessado",
        "30 dias úteis, sem direito a prorrogação",
      ],
      correta: 1,
      explicacao: "O art. 11, § 1º, dá até 20 dias, e o § 2º permite mais 10 dias, mediante justificativa expressa, com ciência ao requerente.",
      explicacaoErradas:
        "“10 dias” é o prazo do recurso. “sem direito a prorrogação” ignora o § 2º. “30 dias” não é o prazo da LAI.",
      pegadinha: "Trocar o prazo de resposta pelo prazo de recurso.",
      conhecimento: "Se o órgão não tiver a informação, deve dizer quem a tem ou remeter o pedido.",
    },
    {
      topico: "Lei de Acesso à Informação",
      subassunto: "Recurso",
      dificuldade: 4,
      raciocinio: "10 para recorrer, 5 para decidir.",
      enunciado: "Negado o acesso a uma informação, o interessado quer recorrer. Pela LAI, o recurso é interposto",
      alternativas: [
        "em 5 dias, e a autoridade que negou decide em 10 dias",
        "em 10 dias, e a autoridade que negou decide em 5 dias",
        "em 15 dias, e a autoridade superior decide em 10 dias",
        "em 10 dias, e a autoridade superior decide em 5 dias",
        "em 30 dias, direto à CGU",
      ],
      correta: 3,
      explicacao: "O art. 15 dá 10 dias da ciência, e o parágrafo único manda a autoridade superior à que decidiu se manifestar em 5 dias.",
      explicacaoErradas:
        "“em 5 dias” inverte os números. “autoridade que negou” erra o destinatário. “15 dias” e “30 dias” não existem nesse recurso.",
      pegadinha: "Mandar o recurso para quem negou.",
      conhecimento: "Na esfera federal, há ainda recurso à CGU e à Comissão Mista de Reavaliação (arts. 16 e 35).",
    },
    {
      topico: "Lei de Acesso à Informação",
      subassunto: "Graus de sigilo",
      dificuldade: 5,
      raciocinio: "Conte da produção, e não da classificação.",
      enunciado:
        "Uma informação produzida em 2020 foi classificada como secreta em 2022, sem evento fixado como termo final. Em regra, o sigilo termina em",
      alternativas: [
        "2035, pois os 15 anos contam da produção",
        "2037, pois os 15 anos contam da classificação",
        "2045, pois os 25 anos contam da produção",
        "2047, pois os 25 anos contam da classificação",
        "2025, pois os 5 anos contam da produção",
      ],
      correta: 0,
      explicacao: "O art. 24, § 1º, fixa 25, 15 e 5 anos e conta o prazo da data de produção. Secreta tem 15 anos, e 2020 + 15 = 2035.",
      explicacaoErradas:
        "“2037” conta da classificação. “2045” e “2047” usam o prazo da ultrassecreta. “2025” usa o prazo da reservada.",
      pegadinha: "Contar da classificação.",
      conhecimento: "Pode-se fixar um evento como termo final, se ocorrer antes do prazo máximo (art. 24, § 3º).",
    },
    {
      topico: "Lei de Acesso à Informação",
      subassunto: "Informação pessoal",
      dificuldade: 5,
      raciocinio: "Informação pessoal não depende de classificação.",
      enunciado:
        "Um pesquisador pede a um órgão federal dados de saúde de um agente, sem consentimento dele nem previsão legal. Pela LAI, essa informação pessoal",
      alternativas: [
        "só fica restrita se for classificada como reservada",
        "fica restrita por 25 anos, contados da data da classificação",
        "fica restrita por até 100 anos, mesmo sem classificação",
        "fica livre após a aposentadoria do agente no órgão",
        "fica livre, pois tudo que o órgão guarda é público",
      ],
      correta: 2,
      explicacao: "O art. 31, § 1º, I, restringe o acesso por até 100 anos da produção, independentemente de classificação de sigilo.",
      explicacaoErradas:
        "“classificada como reservada” não é exigido. “25 anos” é o prazo da ultrassecreta. “após a aposentadoria” e “tudo que o órgão guarda” ignoram o art. 31.",
      pegadinha: "Aplicar à informação pessoal a tabela dos graus de sigilo.",
      conhecimento: "Quem usar essas informações de forma indevida responde pelo uso.",
    },
    {
      topico: "Lei de Acesso à Informação",
      subassunto: "Direitos humanos",
      dificuldade: 4,
      raciocinio: "Direitos humanos violados por agentes públicos não ficam em sigilo.",
      enunciado:
        "Um órgão classifica como secretos documentos sobre tortura praticada por agentes públicos. Pela LAI, essa restrição",
      alternativas: [
        "é válida por 15 anos, pois há risco à segurança do Estado",
        "não cabe, pois esses documentos não admitem restrição",
        "é válida, se autorizada pelo Ministro de Estado da área",
        "é válida só até o fim do processo penal contra os agentes",
        "não cabe, salvo se houver ordem do Presidente",
      ],
      correta: 1,
      explicacao: "O art. 21, parágrafo único, proíbe restrição de acesso a documentos sobre violação de direitos humanos por agentes públicos ou a mando de autoridades.",
      explicacaoErradas:
        "“15 anos”, “Ministro de Estado” e “fim do processo penal” ignoram a proibição. “ordem do Presidente” não é exceção.",
      pegadinha: "Achar que a classificação vence o art. 21.",
      conhecimento: "O caput do art. 21 protege o acesso necessário à tutela de direitos fundamentais.",
    },
    {
      topico: "Lei de Acesso à Informação",
      subassunto: "Segurança do Presidente",
      dificuldade: 5,
      raciocinio: "É reservada, e vai até o fim do mandato.",
      enunciado:
        "Informações que podem pôr em risco a segurança do Presidente da República e de seu cônjuge, em mandato seguido de reeleição, ficam",
      alternativas: [
        "reservadas por 5 anos, contados da produção",
        "secretas por 15 anos, contados da produção",
        "sem sigilo, salvo decisão do STF",
        "reservadas até o fim do primeiro mandato",
        "reservadas até o fim do último mandato",
      ],
      correta: 4,
      explicacao: "O art. 24, § 2º, classifica essas informações como reservadas até o término do mandato em exercício ou do último mandato, em caso de reeleição.",
      explicacaoErradas:
        "“5 anos” é o prazo comum da reservada. “secretas” erra o grau. “salvo decisão do STF” não existe. “primeiro mandato” ignora a reeleição.",
      pegadinha: "Aplicar os 5 anos da reservada.",
      conhecimento: "A regra vale também para o Vice-Presidente, cônjuges e filhos.",
    },
    {
      topico: "Lei de Acesso à Informação",
      subassunto: "Competência para classificar",
      dificuldade: 5,
      raciocinio: "Titular de autarquia não chega ao ultrassecreto.",
      enunciado:
        "O dirigente máximo de uma autarquia federal quer classificar uma informação. Pela LAI, ele pode fazê-lo",
      alternativas: [
        "em qualquer grau, pois é autoridade máxima da entidade",
        "apenas no grau reservado, pois ele não é Ministro de Estado",
        "apenas no grau ultrassecreto, com aval do Ministro",
        "nos graus secreto e reservado, mas não no ultrassecreto",
        "em nenhum grau, pois só o Presidente classifica",
      ],
      correta: 3,
      explicacao: "O art. 27, II, inclui os titulares de autarquias, fundações, empresas públicas e sociedades de economia mista no grau secreto. O inciso III os inclui no reservado.",
      explicacaoErradas:
        "“qualquer grau” ignora o limite do inciso I. “apenas no grau reservado” esquece o secreto. “apenas no grau ultrassecreto” inverte tudo. “só o Presidente” ignora o art. 27.",
      pegadinha: "Dar ao dirigente o grau ultrassecreto.",
      conhecimento: "O ultrassecreto cabe a Presidente, Vice, Ministros, Comandantes e chefes de missões permanentes no exterior.",
    },
    {
      topico: "Lei de Acesso à Informação",
      subassunto: "Serviços sociais autônomos",
      dificuldade: 5,
      raciocinio: "Mudança recente: Lei 15.141/2025.",
      enunciado:
        "Um serviço social autônomo recebe contribuições públicas federais. Pelo art. 8º-A da LAI, incluído em 2025, essa entidade deve",
      alternativas: [
        "divulgar seu plano de cargos e salários, entre outros dados",
        "seguir só o regime de sigilo das pessoas privadas",
        "divulgar o nome e a ficha médica de cada empregado",
        "divulgar só as receitas, sem nenhum dado sobre os empregados",
        "classificar seus dados como secretos por 15 anos",
      ],
      correta: 0,
      explicacao: "A Lei 15.141/2025 incluiu o art. 8º-A, que manda essas entidades divulgarem informações sobre seus empregados, como o plano de cargos e salários e os critérios de evolução na carreira.",
      explicacaoErradas:
        "“regime de sigilo” ignora o novo artigo. “ficha médica” é informação pessoal. “só as receitas” contraria a regra. “secretos” não se aplica.",
      pegadinha: "Achar que a LAI só alcança a Administração.",
      conhecimento: "Entidades privadas sem fins lucrativos com recursos públicos também se sujeitam à LAI, quanto a esses recursos (art. 2º).",
    },
    {
      topico: "Conflito de interesses",
      subassunto: "Depois do cargo",
      dificuldade: 5,
      raciocinio: "Informação privilegiada não tem data de validade.",
      enunciado:
        "Depois de deixar alto cargo no Executivo federal, um agente quer atuar em favor de interesse privado junto ao órgão de origem e usar informação privilegiada obtida no cargo. Pela Lei 12.813, essas vedações duram, respectivamente,",
      alternativas: [
        "6 meses e 6 meses",
        "12 meses e 5 anos",
        "6 meses e a qualquer tempo",
        "4 meses e a qualquer tempo, sem exceção",
        "a qualquer tempo e 6 meses após a saída",
      ],
      correta: 2,
      explicacao: "O art. 6º, I, veda o uso de informação privilegiada a qualquer tempo. O inciso II fixa 6 meses da saída para os demais impedimentos, salvo autorização.",
      explicacaoErradas:
        "“6 meses e 6 meses” limita a informação privilegiada. “12 meses e 5 anos” não existe. “4 meses” não é o prazo da lei. “a qualquer tempo e 6 meses” inverte a regra.",
      pegadinha: "Usar um prazo só para as duas condutas.",
      conhecimento: "A Comissão de Ética Pública ou a CGU podem dispensar o impedimento se não houver conflito.",
    },
    {
      topico: "Conflito de interesses",
      subassunto: "Configuração",
      dificuldade: 4,
      raciocinio: "A lei protege antes do dano. Basta o confronto de interesses.",
      enunciado:
        "Um servidor federal em licença presta, de forma eventual, serviço a empresa fiscalizada pelo seu órgão. Não houve dano ao erário nem ganho para ele. Pela Lei 12.813,",
      alternativas: [
        "não há conflito, pois ele estava em licença do cargo",
        "há conflito, pois ele independe de dano ou de ganho",
        "não há conflito, pois a prestação foi só eventual",
        "não há conflito, pois a lei só vale para alto escalão",
        "há conflito, mas só se a CGU provar prejuízo ao erário",
      ],
      correta: 1,
      explicacao: "O art. 5º, VII, alcança serviços ainda que eventuais, e o parágrafo único vale para licença e afastamento. O art. 4º, § 2º, dispensa dano ou vantagem. O art. 10 estende a regra a todos os agentes.",
      explicacaoErradas:
        "“em licença” contraria o parágrafo único. “só eventual” contraria o inciso VII. “alto escalão” ignora o art. 10. “provar prejuízo” contraria o art. 4º, § 2º.",
      pegadinha: "Achar que a lei só vale para cargos altos.",
      conhecimento: "Em caso de dúvida, o agente consulta a Comissão de Ética Pública ou a CGU.",
    },
    {
      topico: "Nepotismo",
      subassunto: "Decreto 7.203/2010",
      dificuldade: 5,
      raciocinio: "A exceção do servidor efetivo não vence a subordinação direta.",
      enunciado:
        "O diretor de uma entidade federal quer designar para função de confiança, sob sua subordinação direta, a própria irmã, servidora efetiva com qualificação compatível. Pelo Decreto 7.203/2010, ele",
      alternativas: [
        "pode, pois a exceção para servidor efetivo não tem nenhum limite",
        "pode, desde que ela tenha passado por processo seletivo",
        "não pode, pois irmã não é familiar para o decreto",
        "pode, se o cargo for de nível superior ao do diretor",
        "não pode, pois é vedada a subordinação direta a familiar",
      ],
      correta: 4,
      explicacao: "O art. 4º, I, exclui da vedação os servidores efetivos, mas o parágrafo único proíbe, em qualquer caso, manter familiar sob subordinação direta.",
      explicacaoErradas:
        "“nenhum limite” ignora o parágrafo único. “processo seletivo” serve a temporários e estagiários. “irmã não é familiar” erra, pois o decreto vai até o 3º grau. “nível superior” trata de pessoa sem vínculo.",
      pegadinha: "Parar na exceção e não ler o parágrafo único.",
      conhecimento: "Editais de terceirização devem vedar que familiar do agente preste serviço no órgão em que ele atua em cargo comissionado.",
    },
  ],
};
