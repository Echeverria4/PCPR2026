import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "penal-10",
  resumo: {
    ideia:
      "Os crimes funcionais têm como autor quem exerce função pública. O verbo decide o crime: exigir, solicitar, apropriar-se, deixar de agir. O particular pode responder junto, se souber dessa condição.",
    itens: [
      {
        termo: "Funcionário público",
        faz: "Art. 327: conceito amplo, mesmo sem remuneração ou de forma transitória. Cargo em comissão ou direção aumenta a pena em um terço.",
      },
      {
        termo: "Peculato",
        faz: "Art. 312: reclusão de 2 a 12 anos e multa. Apropriar-se ou desviar bem público ou particular que tem em razão do cargo.",
      },
      {
        termo: "Peculato-furto",
        faz: "§ 1º: sem ter a posse, subtrai ou ajuda a subtrair, valendo-se da facilidade do cargo.",
      },
      {
        termo: "Peculato culposo",
        faz: "§ 2º: detenção de 3 meses a 1 ano. Reparar antes da sentença irrecorrível extingue a punibilidade. Depois, reduz a pena de metade.",
        pista: "Essa regra só vale no culposo.",
      },
      {
        termo: "Peculato por erro",
        faz: "Art. 313: reclusão de 1 a 4 anos e multa. O erro é espontâneo. Se o agente o provoca, é estelionato.",
      },
      {
        termo: "Dados falsos",
        faz: "Art. 313-A: funcionário autorizado mexe nos dados do sistema, com 2 a 12 anos. Art. 313-B: mexe no programa, com detenção de 3 meses a 2 anos.",
      },
      {
        termo: "Concussão",
        faz: "Art. 316: exigir vantagem indevida. Reclusão de 2 a 12 anos e multa. Consuma-se com a exigência.",
        pista: "Exigiu: concussão. Solicitou: corrupção passiva. Violência ou grave ameaça: extorsão.",
      },
      {
        termo: "Excesso de exação",
        faz: "Tributo indevido, ou devido com meio vexatório ou gravoso não autorizado. Reclusão de 3 a 8 anos e multa.",
      },
      {
        termo: "Corrupção passiva",
        faz: "Art. 317: solicitar, receber ou aceitar promessa. Reclusão de 2 a 12 anos e multa. Mais um terço se o ato é afetado.",
      },
      {
        termo: "Forma privilegiada",
        faz: "§ 2º do art. 317: cede a pedido ou influência, sem vantagem. Detenção de 3 meses a 1 ano, ou multa.",
      },
      {
        termo: "Prevaricação",
        faz: "Art. 319: deixar de agir por interesse ou sentimento pessoal. Detenção de 3 meses a 1 ano e multa.",
      },
      {
        termo: "Condescendência criminosa",
        faz: "Art. 320: por indulgência, não responsabiliza subordinado. Detenção de 15 dias a 1 mês, ou multa.",
      },
      {
        termo: "Sigilo funcional",
        faz: "Art. 325: revelar segredo do cargo ou emprestar senha. Detenção de 6 meses a 2 anos, ou multa. Com dano: 2 a 6 anos e multa.",
      },
    ],
    cuidado:
      "Reparar o dano só extingue a punibilidade no peculato culposo. No doloso, cabe no máximo redução ou atenuante.",
  },
  questoes: [
    {
      topico: "Peculato",
      subassunto: "Peculato-furto",
      dificuldade: 4,
      raciocinio: "Ele tinha a posse do bem?",
      enunciado:
        "Um servidor, sem nenhuma guarda sobre o almoxarifado, usa o crachá funcional para entrar fora do horário e leva um notebook da repartição. O crime é",
      alternativas: [
        "furto qualificado pelo abuso de confiança do cargo",
        "peculato-furto, do art. 312, § 1º",
        "peculato-apropriação, por ser bem da repartição",
        "peculato de uso, que é fato atípico",
        "peculato por erro de outrem",
      ],
      correta: 1,
      explicacao:
        "O § 1º do art. 312 pune o funcionário que, sem ter a posse, subtrai o bem valendo-se da facilidade que a qualidade de funcionário lhe proporciona.",
      explicacaoErradas:
        "“Furto qualificado” cede ao tipo funcional. “Peculato-apropriação” exige posse em razão do cargo. “Peculato de uso” pressupõe devolução. “Erro de outrem” exige erro de terceiro.",
      pegadinha: "Sem posse, não há apropriação, mas pode haver subtração.",
      conhecimento:
        "O bem pode ser público ou particular.",
    },
    {
      topico: "Peculato",
      subassunto: "Bem particular",
      dificuldade: 4,
      raciocinio: "O caput fala em bem público ou particular.",
      enunciado:
        "Ao atender um acidente, um policial recolhe o relógio de uma vítima desacordada para guardar na viatura e, depois, fica com ele. O crime é",
      alternativas: [
        "apropriação indébita, pois o bem é particular",
        "apropriação de coisa achada, do art. 169",
        "furto simples, pois a vítima estava desacordada",
        "furto com abuso de confiança, pois ele estava em serviço",
        "peculato, pois tinha a posse em razão do cargo",
      ],
      correta: 4,
      explicacao:
        "O art. 312 protege bem móvel público ou particular de que o funcionário tem a posse em razão do cargo. Recolhido no serviço, o relógio ficou sob guarda do policial.",
      explicacaoErradas:
        "“Apropriação indébita” cede ao tipo funcional. “Coisa achada” não descreve quem recolheu o bem em serviço. “Furto simples” e “abuso de confiança” exigem subtração, e a posse foi lícita no início.",
      pegadinha: "Bem particular também pode ser objeto de peculato.",
      conhecimento:
        "A pena é de reclusão de 2 a 12 anos, e multa.",
    },
    {
      topico: "Peculato",
      subassunto: "Peculato culposo",
      dificuldade: 4,
      raciocinio: "Veja o momento da reparação.",
      enunciado:
        "Por negligência, um servidor deixa aberto o depósito de bens apreendidos, e um terceiro furta um motor. O servidor repara o dano antes da sentença irrecorrível. Pelo art. 312,",
      alternativas: [
        "a pena cai de metade, pelo § 3º",
        "a pena é reduzida de um a dois terços, pelo art. 16",
        "a reparação extingue a punibilidade, pelo § 3º",
        "não há efeito, pois o furto foi de um terceiro",
        "só cabe a atenuante de reparar o dano antes do julgamento",
      ],
      correta: 2,
      explicacao:
        "No peculato culposo (§ 2º), a reparação antes da sentença irrecorrível extingue a punibilidade. Se for posterior, reduz de metade a pena imposta (§ 3º).",
      explicacaoErradas:
        "“Cai de metade” vale para a reparação posterior. “Art. 16” e “atenuante” cedem à regra especial. “Não há efeito” ignora o § 3º.",
      pegadinha: "Antes da sentença irrecorrível: extingue. Depois: metade.",
      conhecimento:
        "O culposo tem detenção de 3 meses a 1 ano.",
    },
    {
      topico: "Peculato",
      subassunto: "Reparação no peculato doloso",
      dificuldade: 5,
      raciocinio: "O § 3º só fala do parágrafo anterior.",
      enunciado:
        "Um servidor se apropria dolosamente de dinheiro público e devolve tudo depois do recebimento da denúncia, antes da sentença. Quanto à reparação,",
      alternativas: [
        "cabe só a atenuante do art. 65, III, “b”, do CP",
        "extingue a punibilidade, pelo art. 312, § 3º",
        "reduz a pena de metade, pelo art. 312, § 3º",
        "reduz a pena de um a dois terços, pelo arrependimento posterior",
        "não tem efeito algum, por ser crime doloso",
      ],
      correta: 0,
      explicacao:
        "O § 3º do art. 312 vale só para o culposo. O arrependimento posterior exige reparação até o recebimento da denúncia. Depois disso, sobra a atenuante de reparar o dano antes do julgamento.",
      explicacaoErradas:
        "“Extingue” e “metade” são regras do culposo. “Arrependimento posterior” passou do prazo. “Não tem efeito algum” ignora o art. 65.",
      pegadinha: "O recebimento da denúncia é o limite do art. 16.",
      conhecimento:
        "Se a devolução fosse antes do recebimento, caberia a redução de um a dois terços.",
    },
    {
      topico: "Peculato",
      subassunto: "Erro de outrem x estelionato",
      dificuldade: 5,
      raciocinio: "Quem causou o erro?",
      enunciado:
        "Em leilão de veículos removidos, um arrematante entrega ao servidor, por engano próprio, valor maior que o do lance, e o servidor fica com a diferença. Outro servidor mente sobre o lance e induz um arrematante a pagar a mais. Os crimes são,",
      alternativas: [
        "peculato-furto e concussão",
        "apropriação indébita e estelionato",
        "os dois são peculato por erro de outrem",
        "art. 313 e estelionato, respectivamente",
        "estelionato e art. 313, respectivamente",
      ],
      correta: 3,
      explicacao:
        "O art. 313 pune quem se apropria do que recebeu, no exercício do cargo, por erro de outrem, e esse erro é espontâneo. Se o agente provoca o erro com fraude, o crime é estelionato.",
      explicacaoErradas:
        "“Peculato-furto” exige subtração, e “concussão” exige exigência. “Apropriação indébita” ignora o cargo. “Os dois” ignora a fraude. “Estelionato e art. 313” inverte os casos.",
      pegadinha: "O art. 313 é conhecido como peculato-estelionato, mas o erro não é provocado.",
      conhecimento:
        "A pena do art. 313 é de reclusão de 1 a 4 anos, e multa.",
    },
    {
      topico: "Peculato",
      subassunto: "Arts. 313-A e 313-B",
      dificuldade: 5,
      raciocinio: "Um mexe nos dados, o outro no programa.",
      enunciado:
        "Um servidor autorizado a operar o sistema de um órgão exclui multas corretas do registro de um amigo, para beneficiá-lo. Outro servidor, sem autorização da chefia, altera o programa do sistema. Os crimes são",
      alternativas: [
        "os dois do art. 313-A, por mexerem no sistema",
        "o primeiro do art. 313-A, e o segundo do art. 313-B",
        "os dois do art. 313-B, por falta de autorização",
        "o primeiro do art. 313-B, e o segundo do art. 313-A",
        "corrupção passiva, no primeiro, e nenhum, no segundo caso",
      ],
      correta: 1,
      explicacao:
        "O art. 313-A pune o funcionário autorizado que insere dados falsos ou altera ou exclui dados corretos, com fim de vantagem indevida ou dano. O art. 313-B pune modificar sistema ou programa sem autorização.",
      explicacaoErradas:
        "“Os dois do art. 313-A” e “os dois do art. 313-B” ignoram a diferença de objeto. A troca dos artigos inverte os casos. “Corrupção passiva” exige vantagem, e o art. 313-B descreve o segundo.",
      pegadinha: "O art. 313-A tem pena muito maior que o 313-B.",
      conhecimento:
        "O art. 313-A prevê reclusão de 2 a 12 anos, e multa.",
    },
    {
      topico: "Concussão",
      subassunto: "Exigir e consumação",
      dificuldade: 4,
      raciocinio: "O crime é formal, e o verbo é o que importa.",
      enunciado:
        "Sem violência, um agente diz a um motorista que exige R$ 500 para liberá-lo. O motorista recusa e chama a corregedoria. O crime do agente é",
      alternativas: [
        "corrupção passiva tentada, pois não recebeu nada",
        "extorsão consumada, pela ameaça de reter o veículo",
        "concussão tentada, pois o dinheiro não foi entregue",
        "corrupção passiva consumada",
        "concussão consumada, pois bastou a exigência",
      ],
      correta: 4,
      explicacao:
        "O art. 316 pune exigir vantagem indevida, e o crime é formal: consuma-se com a exigência. O recebimento seria mero exaurimento.",
      explicacaoErradas:
        "“Corrupção passiva” tem os verbos solicitar, receber e aceitar. “Extorsão” exige violência ou grave ameaça. “Tentada” ignora que o crime é formal.",
      pegadinha: "Exigir é mais grave que pedir, e a pena é a mesma.",
      conhecimento:
        "A pena da concussão é de reclusão de 2 a 12 anos, e multa.",
    },
    {
      topico: "Corrupção passiva",
      subassunto: "Forma privilegiada",
      dificuldade: 5,
      raciocinio: "Há pedido de terceiro e não há vantagem.",
      enunciado:
        "A pedido de um vereador amigo, sem nenhuma vantagem, um agente deixa de lavrar uma autuação devida. Pelo CP, a conduta é",
      alternativas: [
        "corrupção passiva, com aumento de um terço",
        "prevaricação, por ter atendido um amigo",
        "corrupção passiva do art. 317, § 2º",
        "condescendência criminosa, por indulgência",
        "atípica, pois não houve vantagem",
      ],
      correta: 2,
      explicacao:
        "O § 2º do art. 317 pune quem deixa de praticar ato de ofício, com infração de dever funcional, cedendo a pedido ou influência de outrem. A pena é de detenção de 3 meses a 1 ano, ou multa.",
      explicacaoErradas:
        "“Aumento de um terço” exige vantagem ou promessa. “Prevaricação” não tem pedido de terceiro. “Condescendência” trata de subordinado. “Atípica” ignora o § 2º.",
      pegadinha: "Atendeu a pedido: corrupção privilegiada. Agiu sozinho: prevaricação.",
      conhecimento:
        "Na forma privilegiada, o crime é material, pois exige o ato ou a omissão.",
    },
    {
      topico: "Prevaricação",
      subassunto: "Prevaricação x condescendência",
      dificuldade: 4,
      raciocinio: "O sentimento é do próprio agente, e o chefe tem outro tipo.",
      enunciado:
        "Sem que ninguém peça, por amizade ao motorista, um agente deixa de lavrar uma autuação devida. O chefe descobre e, por indulgência, não o responsabiliza. Os crimes são, nessa ordem,",
      alternativas: [
        "prevaricação e condescendência criminosa",
        "corrupção passiva e prevaricação",
        "condescendência criminosa e prevaricação",
        "corrupção passiva privilegiada e favorecimento pessoal",
        "prevaricação e corrupção passiva privilegiada",
      ],
      correta: 0,
      explicacao:
        "O art. 319 pune deixar de praticar ato de ofício para satisfazer sentimento pessoal. O art. 320 pune o funcionário que, por indulgência, não responsabiliza subordinado.",
      explicacaoErradas:
        "“Corrupção passiva” exige vantagem ou pedido. A troca da ordem inverte os casos. “Favorecimento pessoal” trata de auxílio a autor de crime para fugir da autoridade.",
      pegadinha: "Se o chefe agisse por outro motivo pessoal, poderia ser prevaricação.",
      conhecimento:
        "A condescendência tem detenção de 15 dias a 1 mês, ou multa.",
    },
    {
      topico: "Violação de sigilo",
      subassunto: "Senha e dano",
      dificuldade: 5,
      raciocinio: "Houve dano? Olhe o § 2º.",
      enunciado:
        "Um servidor empresta sua senha a um despachante, que consulta dados sigilosos do sistema da Administração. Da consulta resulta dano a um cidadão. Pelo art. 325 do CP,",
      alternativas: [
        "a conduta é atípica, pois nenhum segredo foi revelado pelo servidor",
        "há crime do § 1º, I, com detenção de 6 meses a 2 anos",
        "há crime do art. 313-A, pois houve fornecimento de senha",
        "há crime do § 2º, com reclusão de 2 a 6 anos e multa",
        "há crime do art. 313-B, de detenção de 3 meses a 2 anos",
      ],
      correta: 3,
      explicacao:
        "O § 1º, I, pune quem empresta senha a pessoa não autorizada. Se da ação resulta dano à Administração ou a outrem, o § 2º prevê reclusão de 2 a 6 anos, e multa.",
      explicacaoErradas:
        "“Atípica” ignora o § 1º. “§ 1º, I” não considera o dano. “Art. 313-A” trata de dados falsos ou exclusão. “Art. 313-B” trata de mudar o programa.",
      pegadinha: "O dano pode ser a outrem, e não só à Administração.",
      conhecimento:
        "O caput é subsidiário: vale se o fato não constitui crime mais grave.",
    },
    {
      topico: "Concussão",
      subassunto: "Excesso de exação",
      dificuldade: 5,
      raciocinio: "O tributo devido não impede o crime.",
      enunciado:
        "Um fiscal cobra um tributo realmente devido, mas expõe o devedor à humilhação pública diante de clientes, por meio que a lei não autoriza. A conduta é",
      alternativas: [
        "concussão, com reclusão de 2 a 12 anos e multa",
        "abuso de autoridade, e nada mais, pois o tributo era devido",
        "excesso de exação, com reclusão de 3 a 8 anos e multa",
        "atípica, pois o tributo era devido",
        "extorsão, pelo constrangimento causado",
      ],
      correta: 2,
      explicacao:
        "O § 1º do art. 316 pune quem exige tributo indevido ou, quando devido, emprega na cobrança meio vexatório ou gravoso que a lei não autoriza. A pena é de reclusão de 3 a 8 anos, e multa.",
      explicacaoErradas:
        "“Concussão” trata de vantagem indevida. “Abuso de autoridade” e “extorsão” cedem ao tipo específico. “Atípica” esquece a segunda parte do § 1º.",
      pegadinha: "O excesso pode ser na forma de cobrar, e não só no valor.",
      conhecimento:
        "Desviar o que recebeu para recolher aos cofres leva ao § 2º, de 2 a 12 anos.",
    },
  ],
};
