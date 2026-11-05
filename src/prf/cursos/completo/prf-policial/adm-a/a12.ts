import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-12",
  resumo: {
    ideia:
      "A Lei 8.112/1990 rege os servidores da União, das autarquias e das fundações públicas federais. Esta parte mostra como se entra no cargo, como se volta a ele, como ele fica vago e como o servidor se desloca.",
    itens: [
      {
        termo: "Alcance",
        faz: "Administração direta, autarquias e fundações públicas federais. Empresas estatais seguem a CLT.",
      },
      {
        termo: "Concurso",
        faz: "Validade de até 2 anos, prorrogável uma vez. A lei veda novo concurso enquanto houver aprovado em concurso válido.",
      },
      {
        termo: "Posse e exercício",
        faz: "Posse em 30 dias da publicação. Exercício em 15 dias da posse.",
        pista: "Sem posse: ato sem efeito. Sem exercício: exoneração.",
      },
      {
        termo: "Readaptação",
        faz: "Cargo compatível com a limitação do servidor. Sem vaga, ele atua como excedente.",
      },
      {
        termo: "Reversão",
        faz: "Volta do aposentado. Por invalidez que acabou, ou a pedido, com aposentadoria voluntária nos 5 anos anteriores e cargo vago.",
        pista: "Não cabe aos 70 anos.",
      },
      {
        termo: "Reintegração",
        faz: "Volta do estável demitido de forma inválida, com todas as vantagens.",
      },
      {
        termo: "Recondução",
        faz: "Volta do estável ao cargo anterior, por inabilitação em estágio de outro cargo ou por reintegração do antigo ocupante.",
      },
      {
        termo: "Disponibilidade e aproveitamento",
        faz: "O estável sem cargo aguarda e volta por aproveitamento obrigatório em cargo compatível.",
      },
      {
        termo: "Vacância",
        faz: "Exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento.",
      },
      {
        termo: "Remoção e redistribuição",
        faz: "Na remoção, o servidor muda dentro do mesmo quadro. Na redistribuição, o cargo vai para outro órgão do mesmo Poder.",
      },
    ],
    cuidado: "Exoneração não é punição. Demissão é pena, e só vem depois de processo disciplinar.",
  },
  questoes: [
    {
      topico: "Posse e exercício",
      subassunto: "Prazos",
      dificuldade: 4,
      raciocinio: "Sem posse ainda não há servidor. Com posse, já há o que exonerar.",
      enunciado:
        "Um nomeado para cargo federal não toma posse no prazo. Outro toma posse, mas não entra em exercício no prazo. Pela Lei 8.112, as consequências são, respectivamente,",
      alternativas: [
        "exoneração de ofício para os dois, sem nenhuma exceção prevista",
        "demissão para os dois, depois de processo disciplinar",
        "ato sem efeito para o primeiro e exoneração para o segundo",
        "exoneração para o primeiro e ato sem efeito para o segundo",
        "nova convocação para os dois, com prazo em dobro",
      ],
      correta: 2,
      explicacao: "O art. 13, § 6º, torna sem efeito o ato de provimento sem posse em 30 dias. O art. 15, § 2º, prevê exoneração de quem não entra em exercício em 15 dias.",
      explicacaoErradas:
        "“exoneração de ofício para os dois” esquece que sem posse não há investidura. “demissão” é pena. “exoneração para o primeiro” inverte as consequências. “prazo em dobro” não existe.",
      pegadinha: "Inverter as duas consequências.",
      conhecimento: "A posse pode ocorrer por procuração específica (art. 13, § 3º).",
    },
    {
      topico: "Formas de provimento",
      subassunto: "Recondução",
      dificuldade: 4,
      raciocinio: "Estável que não passou no estágio de outro cargo volta ao anterior.",
      enunciado:
        "Um servidor federal estável toma posse em outro cargo federal inacumulável e é inabilitado no estágio probatório do novo cargo. Pela Lei 8.112, ele",
      alternativas: [
        "será exonerado de ofício e perderá o vínculo com a União",
        "será reintegrado ao cargo anterior, com todas as vantagens",
        "será revertido ao cargo anterior, se houver interesse público",
        "ficará em disponibilidade até a abertura de nova vaga",
        "será reconduzido ao cargo anterior, pois já era estável",
      ],
      correta: 4,
      explicacao: "O art. 29, I, prevê a recondução por inabilitação em estágio probatório relativo a outro cargo. Se o cargo de origem estiver ocupado, ele será aproveitado em outro.",
      explicacaoErradas:
        "“exonerado de ofício” é a saída de quem não tem estabilidade anterior. “reintegrado” exige demissão invalidada. “revertido” é do aposentado. “disponibilidade” não é a primeira solução.",
      pegadinha: "Trocar recondução por reintegração.",
      conhecimento: "O estágio não é dispensado por estabilidade em outro cargo.",
    },
    {
      topico: "Formas de provimento",
      subassunto: "Reintegração",
      dificuldade: 5,
      raciocinio: "Quem foi demitido de forma inválida volta. O ocupante é quem cede.",
      enunciado:
        "A demissão de um servidor estável foi anulada por decisão judicial. Seu cargo está ocupado por outro servidor, também estável. Nesse caso,",
      alternativas: [
        "o demitido volta, e o ocupante é reconduzido sem indenização",
        "o demitido fica em disponibilidade até surgir uma vaga",
        "o ocupante fica no cargo, e o demitido recebe só indenização",
        "o demitido volta, e o ocupante recebe indenização da União",
        "o demitido é readaptado em outro cargo de mesmo nível",
      ],
      correta: 0,
      explicacao: "O art. 28 garante a reintegração com ressarcimento das vantagens. Pelo § 2º, o ocupante é reconduzido sem indenização, aproveitado em outro cargo ou posto em disponibilidade.",
      explicacaoErradas:
        "“disponibilidade” para o demitido só cabe se o cargo foi extinto. “recebe só indenização” nega a reintegração. “recebe indenização” contraria o § 2º. “readaptado” pressupõe limitação física ou mental.",
      pegadinha: "Dar indenização ao ocupante.",
      conhecimento: "A reintegração pode vir de decisão administrativa ou judicial.",
    },
    {
      topico: "Formas de provimento",
      subassunto: "Reversão",
      dificuldade: 5,
      raciocinio: "Confira os requisitos do art. 25, II, um por um.",
      enunciado:
        "Um servidor estável aposentou-se voluntariamente há seis anos, tem 62 anos de idade e pede para voltar a um cargo vago, no interesse da Administração. O pedido",
      alternativas: [
        "pode ser atendido, pois há cargo vago e interesse público",
        "só cabe após laudo de junta médica oficial favorável",
        "é vedado, pois já passou da idade de 60 anos",
        "é vedado, pois já passou o limite de cinco anos",
        "é vedado, pois a reversão só vale para aposentado por invalidez",
      ],
      correta: 3,
      explicacao: "O art. 25, II, “d”, exige que a aposentadoria tenha ocorrido nos cinco anos anteriores à solicitação. Aqui se passaram seis.",
      explicacaoErradas:
        "“há cargo vago” é só um dos requisitos. “junta médica” é da reversão por invalidez. “60 anos” não é o limite, pois o art. 27 fala em 70. “só vale” esquece a reversão a pedido.",
      pegadinha: "Olhar o cargo vago e esquecer o prazo.",
      conhecimento: "A reversão ocorre no mesmo cargo ou no resultante de sua transformação.",
    },
    {
      topico: "Formas de provimento",
      subassunto: "Readaptação",
      dificuldade: 4,
      raciocinio: "Sem vaga, a lei manda atuar como excedente.",
      enunciado:
        "Após um acidente, um servidor sofre limitação física verificada em inspeção médica, mas pode exercer atribuições afins. Não há cargo vago compatível. Ele",
      alternativas: [
        "será aposentado por invalidez, pois falta o cargo vago",
        "atuará como excedente até surgir vaga no cargo compatível",
        "ficará em disponibilidade até a abertura de um cargo compatível",
        "será exonerado de ofício, pois não pode mais exercer o cargo",
        "será reconduzido ao cargo de origem, com nova inspeção",
      ],
      correta: 1,
      explicacao: "O art. 24, § 2º, manda respeitar habilitação, escolaridade e equivalência de vencimentos. Sem vaga, o servidor atua como excedente.",
      explicacaoErradas:
        "“aposentado” só se ele for julgado incapaz para o serviço público. “disponibilidade” liga-se à extinção do cargo. “exonerado” não é a solução legal. “reconduzido” exige outra situação.",
      pegadinha: "Usar a disponibilidade para qualquer falta de vaga.",
      conhecimento: "A readaptação é forma de provimento e também de vacância.",
    },
    {
      topico: "Formas de provimento",
      subassunto: "Aproveitamento",
      dificuldade: 5,
      raciocinio: "Aproveitamento é obrigatório também para o servidor.",
      enunciado:
        "Um servidor em disponibilidade é aproveitado em cargo compatível, mas não entra em exercício no prazo legal, e não há doença comprovada por junta médica. Nesse caso,",
      alternativas: [
        "ele é demitido, após processo administrativo disciplinar",
        "ele recebe novo prazo, igual ao dobro do primeiro",
        "ele continua em disponibilidade, até a próxima vaga",
        "ele é aposentado com proventos proporcionais ao tempo de serviço",
        "o aproveitamento fica sem efeito e a disponibilidade é cassada",
      ],
      correta: 4,
      explicacao: "É a regra do art. 32: fica sem efeito o aproveitamento e é cassada a disponibilidade, salvo doença comprovada por junta médica oficial.",
      explicacaoErradas:
        "“demitido” não é a consequência prevista no art. 32. “novo prazo” não existe. “continua em disponibilidade” ignora a cassação. “aposentado” não tem base.",
      pegadinha: "Achar que a disponibilidade continua sem consequência.",
      conhecimento: "A cassação de disponibilidade também é pena disciplinar (art. 127, IV).",
    },
    {
      topico: "Remoção",
      subassunto: "Cônjuge",
      dificuldade: 5,
      raciocinio: "Para ser direito, o cônjuge precisa ter sido deslocado no interesse da Administração.",
      enunciado:
        "Um servidor federal quer remoção para outra cidade para acompanhar o cônjuge, também servidor, que mudou de lotação a pedido próprio e sem interesse da Administração. Esse pedido",
      alternativas: [
        "é direito do servidor, pois protege a unidade da família",
        "é direito do servidor, se o cônjuge for de outro Poder",
        "fica a critério da Administração, pois houve pedido do cônjuge",
        "é proibido, pois os dois servidores têm o mesmo vínculo",
        "é proibido enquanto o cônjuge estiver em estágio probatório do cargo",
      ],
      correta: 2,
      explicacao: "A remoção independente do interesse da Administração exige cônjuge deslocado no interesse dela (art. 36, parágrafo único, III, “a”). Sem isso, cai no inciso II: a pedido, a critério da Administração.",
      explicacaoErradas:
        "“unidade da família” não dispensa o requisito legal. “outro Poder” não muda nada, pois a lei alcança todos os Poderes. “mesmo vínculo” e “estágio probatório” não proíbem o pedido.",
      pegadinha: "Achar que todo cônjuge dá direito à remoção.",
      conhecimento: "A remoção por saúde depende de comprovação por junta médica oficial.",
    },
    {
      topico: "Redistribuição",
      subassunto: "Remoção x redistribuição",
      dificuldade: 4,
      raciocinio: "Quem muda: o servidor ou o cargo?",
      enunciado:
        "O cargo efetivo ocupado por um servidor passa, com prévia apreciação do órgão central de pessoal, do quadro de um órgão para outro do mesmo Poder. Esse deslocamento é",
      alternativas: [
        "redistribuição, pois quem se desloca é o próprio cargo",
        "remoção, pois o servidor muda de lugar no mesmo quadro",
        "cessão, pois o órgão de origem mantém o vínculo com ele",
        "requisição, que é ato obrigatório do órgão de destino",
        "readaptação, pois o cargo muda de órgão e de atribuições",
      ],
      correta: 0,
      explicacao: "O art. 37 define redistribuição como o deslocamento de cargo efetivo, ocupado ou vago, para outro órgão ou entidade do mesmo Poder.",
      explicacaoErradas:
        "“remoção” ocorre no mesmo quadro. “cessão” é do servidor, e não do cargo. “requisição” não muda o quadro do cargo. “readaptação” exige limitação física ou mental.",
      pegadinha: "Trocar redistribuição por remoção.",
      conhecimento: "A redistribuição exige equivalência de vencimentos e manutenção da essência das atribuições.",
    },
    {
      topico: "Concurso público",
      subassunto: "Novo concurso",
      dificuldade: 5,
      raciocinio: "A lei federal é mais rígida que a Constituição.",
      enunciado:
        "Há aprovados em concurso federal regido pela Lei 8.112, ainda na validade, e o órgão quer abrir novo concurso para o mesmo cargo. Nesse caso,",
      alternativas: [
        "pode abrir, pois a Constituição dá só a prioridade na convocação",
        "pode abrir, desde que o prazo do primeiro já tenha sido prorrogado",
        "pode abrir, se for com outra banca organizadora",
        "não pode abrir, pois a Lei 8.112 veda isso nesse período",
        "não pode abrir, salvo com autorização do Presidente da República",
      ],
      correta: 3,
      explicacao: "O art. 12, § 2º, diz que não se abrirá novo concurso enquanto houver candidato aprovado em concurso anterior com validade não expirada.",
      explicacaoErradas:
        "“só a prioridade” é o texto do art. 37, IV, da CF, mas a lei federal foi além. “prorrogado” e “outra banca” não afastam a vedação. “autorização do Presidente” não é exceção da lei.",
      pegadinha: "Aplicar só a Constituição a um concurso federal.",
      conhecimento: "O art. 11 da Lei 8.112 permite concurso de provas ou de provas e títulos, em até duas etapas.",
    },
  ],
};
