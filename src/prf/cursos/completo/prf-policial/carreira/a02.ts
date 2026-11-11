import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "carreira-02",
  resumo: {
    ideia:
      "A Lei 13.712/2018 paga uma indenização, por turno ou escala, ao PRF que abre mão de parte do repouso para trabalhar em operações relevantes, complexas ou emergenciais. O Decreto 8.282/2014 regula como o PRF sobe na carreira: progressão (de um padrão para o seguinte, na mesma classe) e promoção (do último padrão para a classe de cima).",
    itens: [
      {
        termo: "Natureza (Lei 13.712)",
        faz: "Indenização de caráter temporário e emergencial, paga por turno ou escala ao PRF que, voluntariamente, deixa de gozar integralmente do repouso para participar de ações relevantes, complexas ou emergenciais que exijam significativa mobilização.",
      },
      {
        termo: "Valores",
        faz: "Anexo da lei: turno de 6 horas, R$ 420,00; turno de 12 horas, R$ 900,00.",
        pista: "12 horas valem mais que o dobro de 6 horas.",
      },
      {
        termo: "Ato do Ministro",
        faz: "O Ministro (a lei fala em Segurança Pública; hoje é o da Justiça e Segurança Pública) define condições e critérios, pelos princípios da voluntariedade, excepcionalidade, impessoalidade, transitoriedade, eficiência e supremacia do interesse público, e a necessidade quantitativa e qualitativa de servidores. Só a parte da necessidade de servidores pode ser delegada ao Diretor-Geral.",
      },
      {
        termo: "Cumulação",
        faz: "Não se acumula com diárias nem com indenização de campo; paga-se a de maior valor. A mesma lógica vale para a indenização de fronteira da Lei 12.855.",
      },
      {
        termo: "Tributos e incorporação",
        faz: "Não sofre imposto de renda nem contribuição previdenciária; não se incorpora ao subsídio; não serve de base para outras vantagens, nem para aposentadoria ou pensão por morte. A despesa sai das dotações do próprio Departamento.",
      },
      {
        termo: "Progressão x promoção",
        faz: "Progressão: passagem para o padrão seguinte dentro da mesma classe. Promoção: passagem do último padrão de uma classe para o padrão inicial da classe seguinte.",
      },
      {
        termo: "Requisitos",
        faz: "Progressão: 12 meses de efetivo exercício no padrão e avaliação satisfatória. Promoção: 12 meses no último padrão, avaliação satisfatória e capacitação. Para chegar à Segunda Classe, também o estágio probatório homologado.",
      },
      {
        termo: "Metas",
        faz: "Avaliação satisfatória: pelo menos 70% das metas para progressão e 80% para promoção, em ato do dirigente máximo do órgão.",
      },
      {
        termo: "Capacitação",
        faz: "Terceira para Segunda: 120 horas. Segunda para Primeira: 150 horas. Primeira para Especial: 360 horas, em cursos específicos. Valem só cursos compatíveis com o cargo; pós-graduação nacional precisa de reconhecimento do MEC e estrangeira, de revalidação; cada evento conta uma vez.",
      },
      {
        termo: "Interstício",
        faz: "Contado em dias, a partir da entrada em exercício, descontadas as ausências que não são efetivo exercício. Fica suspenso no afastamento sem remuneração e volta a correr no retorno.",
      },
      {
        termo: "Avaliação",
        faz: "Fatores: produtividade, conhecimento de métodos e técnicas e cumprimento de normas. Só produz efeito se o servidor esteve em exercício em pelo menos 2/3 do período. Sem avaliação anterior, não há progressão nem promoção.",
      },
      {
        termo: "Recurso",
        faz: "Pedido de reconsideração em 10 dias, entregue ao RH, que o envia à chefia imediata; decisão em 5 dias e ciência em 5 dias. Depois, recurso em 10 dias à autoridade acima da chefia, em última instância. Resultado no Boletim Interno.",
      },
    ],
    cuidado:
      "A Lei 13.712 fala em “Ministro de Estado da Segurança Pública”; hoje a pasta é o Ministério da Justiça e Segurança Pública. O Decreto 8.282 cita o Decreto 5.707/2006 sobre capacitação, que já foi revogado pelo Decreto 9.991/2019 (hoje, a Política Nacional de Desenvolvimento de Pessoas); na prova, siga a regra do próprio Decreto 8.282.",
  },
  questoes: [
    {
      topico: "Lei 13.712/2018",
      subassunto: "Natureza da indenização",
      dificuldade: 4,
      raciocinio: "Voluntária, temporária e emergencial, paga por turno ou escala.",
      enunciado:
        "Na véspera de um feriado prolongado, um PRF aceita trabalhar parte do seu repouso remunerado em uma grande operação nas rodovias federais. A verba da Lei 13.712/2018 que ele receberá tem natureza de:",
      alternativas: [
        "hora extra comum, devida sempre que o servidor passa da jornada semanal de quarenta horas, mesmo sem operação especial em curso na rodovia",
        "indenização de caráter temporário e emergencial, paga por turno ou escala a quem voluntariamente deixa de gozar parte do repouso",
        "gratificação permanente de operação, incorporada ao subsídio depois de doze participações em ações de significativa mobilização",
        "adicional noturno, devido só quando o turno trabalhado no repouso termina após as 22 horas do dia da operação",
        "indenização obrigatória, que o servidor não pode recusar quando for convocado pela chefia para atuar no período de repouso",
      ],
      correta: 1,
      explicacao:
        "O art. 1º da Lei 13.712/2018 institui indenização de caráter temporário e emergencial para o PRF que, voluntariamente, deixar de gozar integralmente do repouso remunerado. O parágrafo único diz que ela é paga por turno ou escala, para participar de ações relevantes, complexas ou emergenciais que exijam significativa mobilização.",
      explicacaoErradas:
        "Não é “hora extra comum”: depende de operação e de adesão voluntária. Não é “gratificação permanente” nem se incorpora ao subsídio. Não é “adicional noturno”. A adesão é voluntária, por isso é falso que o servidor “não pode recusar”.",
      pegadinha: "Esquecer que a participação é voluntária.",
      conhecimento: "Voluntariedade é o primeiro princípio citado no art. 2º.",
    },
    {
      topico: "Lei 13.712/2018",
      subassunto: "Valores",
      dificuldade: 5,
      raciocinio: "Anexo: 6 horas, R$ 420,00; 12 horas, R$ 900,00.",
      enunciado:
        "Na mesma operação, a PRF Lia trabalha um turno de 12 horas no seu repouso e o PRF Rui trabalha um turno de 6 horas. Pelo Anexo da Lei 13.712/2018, eles recebem, respectivamente:",
      alternativas: [
        "R$ 840,00 e R$ 420,00, porque o turno de 12 horas vale exatamente o dobro do turno de 6 horas",
        "R$ 900,00 e R$ 450,00, porque a lei fixa um valor por hora trabalhada, igual nos dois turnos",
        "R$ 420,00 e R$ 900,00, porque o valor do Anexo diminui à medida que o turno fica mais longo",
        "R$ 91,00 por dia para os dois, já que a lei repete o valor diário da indenização de fronteira",
        "R$ 900,00 e R$ 420,00, conforme os valores fixados no Anexo da lei para cada turno",
      ],
      correta: 4,
      explicacao:
        "O Anexo da Lei 13.712/2018 fixa R$ 420,00 para o turno de 6 horas e R$ 900,00 para o turno de 12 horas. Lia recebe R$ 900,00 e Rui, R$ 420,00. O turno de 12 horas vale mais que o dobro do de 6.",
      explicacaoErradas:
        "O turno de 12 horas não vale “exatamente o dobro”: são R$ 900,00, e não R$ 840,00. Não há valor “por hora trabalhada”, e Rui não recebe “R$ 450,00”. Os valores não estão invertidos: o valor não “diminui” com o turno mais longo. Os R$ 91,00 são da Lei 12.855, e a lei não “repete o valor diário da indenização de fronteira”.",
      pegadinha: "Calcular por proporção, quando a lei fixa dois valores.",
      conhecimento: "6 horas: R$ 420,00. 12 horas: R$ 900,00.",
    },
    {
      topico: "Lei 13.712/2018",
      subassunto: "Ato do Ministro",
      dificuldade: 5,
      raciocinio: "O inciso I (condições e critérios) fica com o Ministro; só o II pode ser delegado.",
      enunciado:
        "Sobre o ato que regulamenta a indenização da Lei 13.712/2018, previsto no seu art. 2º, é correto afirmar que:",
      alternativas: [
        "o Ministro pode delegar ao Diretor-Geral só a definição da necessidade quantitativa e qualitativa de servidores, e não as condições e critérios",
        "o Ministro pode delegar ao Diretor-Geral todo o conteúdo do ato, inclusive as condições, os critérios e os valores do Anexo da lei",
        "o próprio Diretor-Geral define as condições e os critérios, e o Ministro só homologa a escala de cada superintendência regional",
        "as condições são fixadas por decreto do Presidente da República, e a lei não prevê delegação alguma ao Diretor-Geral do Departamento de Polícia Rodoviária Federal",
        "o ato segue os princípios da obrigatoriedade, permanência e antiguidade, sem margem para os critérios de impessoalidade",
      ],
      correta: 0,
      explicacao:
        "O art. 2º manda o Ministro definir em ato: I, as condições e os critérios, pelos princípios da voluntariedade, excepcionalidade, impessoalidade, transitoriedade, eficiência e supremacia do interesse público; II, a necessidade quantitativa e qualitativa de servidores, conforme os calendários de operações e as atividades emergenciais. Só o inciso II pode ser delegado ao Diretor-Geral (parágrafo único).",
      explicacaoErradas:
        "Não se delega “todo o conteúdo do ato”, e os valores estão fixados na própria lei. As condições e critérios não são definidos pelo “próprio Diretor-Geral”. A lei não fala em “decreto do Presidente da República” e prevê, sim, delegação. Os princípios são voluntariedade e transitoriedade, e não “obrigatoriedade, permanência e antiguidade”.",
      pegadinha: "Achar que tudo pode ser delegado ao Diretor-Geral.",
      conhecimento: "Delegável: só a necessidade de servidores (inciso II).",
    },
    {
      topico: "Lei 13.712/2018",
      subassunto: "Cumulação",
      dificuldade: 5,
      raciocinio: "As duas leis usam a mesma regra: não acumula e paga a maior.",
      enunciado:
        "Um PRF é deslocado com diárias para uma operação de feriado e, durante ela, aceita trabalhar parte do repouso. Quanto à indenização da Lei 13.712/2018 nesses dias:",
      alternativas: [
        "ele recebe as diárias e a indenização juntas, porque a Lei 13.712 só proíbe cumular com a indenização de fronteira da Lei 12.855",
        "ele recebe só as diárias, porque a indenização da Lei 13.712 é sempre afastada quando há deslocamento",
        "ele recebe a indenização, e as diárias são descontadas do subsídio do mês seguinte, por compensação",
        "ele não pode acumular a indenização com as diárias, e recebe a verba de maior valor, regra que a Lei 12.855 também adota",
        "ele recebe metade de cada verba, para evitar o pagamento em dobro pelo mesmo período de trabalho na operação",
      ],
      correta: 3,
      explicacao:
        "O art. 3º da Lei 13.712/2018 proíbe pagar a indenização cumulativamente com diárias ou indenização de campo e manda pagar a de maior valor. A Lei 12.855/2013 tem regra parecida no seu art. 3º: veda a cumulação com diárias e outras parcelas indenizatórias e paga a de maior valor.",
      explicacaoErradas:
        "A Lei 13.712 veda a cumulação com diárias, e não “só proíbe cumular com a indenização de fronteira”. A indenização não é “sempre afastada”: paga-se a de maior valor. Diárias não são “descontadas do subsídio”. Não existe divisão em “metade de cada verba”.",
      pegadinha: "Achar que as diárias sempre vencem.",
      conhecimento: "Nas duas leis, cumulação vedada e verba de maior valor.",
    },
    {
      topico: "Lei 13.712/2018",
      subassunto: "Tributos e incorporação",
      dificuldade: 5,
      raciocinio: "Art. 4º: três efeitos negativos.",
      enunciado:
        "Um PRF que participou de muitas operações pela Lei 13.712/2018 pergunta como essa verba entra nos seus direitos futuros. Pelo art. 4º da lei, a indenização:",
      alternativas: [
        "integra o cálculo dos proventos de aposentadoria se o servidor a receber por mais de cinco anos seguidos",
        "sofre contribuição previdenciária, mas não imposto de renda, e por isso entra na base da pensão por morte",
        "não sofre imposto de renda nem contribuição previdenciária, não se incorpora ao subsídio e não é base para aposentadoria ou pensão",
        "incorpora-se ao subsídio pela média dos últimos doze meses, mas não serve de base para outras vantagens",
        "sofre imposto de renda na fonte, mas não contribuição previdenciária, e não integra a aposentadoria do servidor nem a pensão por morte",
      ],
      correta: 2,
      explicacao:
        "O art. 4º diz que a indenização: I, não sofre imposto de renda nem contribuição previdenciária; II, não se incorpora ao subsídio; III, não serve de base de cálculo para benefícios ou vantagens, nem para proventos de aposentadoria ou pensão por morte.",
      explicacaoErradas:
        "Ela não “integra o cálculo dos proventos de aposentadoria” em hipótese alguma. Não “sofre contribuição previdenciária” nem entra na pensão. Não se “incorpora ao subsídio pela média”. Não “sofre imposto de renda na fonte”.",
      pegadinha: "Achar que só um dos tributos é afastado.",
      conhecimento: "Sem imposto de renda, sem contribuição e sem reflexo na aposentadoria.",
    },
    {
      topico: "Lei 13.712/2018",
      subassunto: "Custeio e vigência",
      dificuldade: 4,
      raciocinio: "Art. 5º: dotações do próprio Departamento.",
      enunciado: "Sobre o custeio e a vigência da Lei 13.712/2018, é correto afirmar que:",
      alternativas: [
        "a despesa é custeada pelos Estados onde ocorrem as operações, por meio de convênio celebrado com a União",
        "a despesa corre por remanejamento das dotações do próprio Departamento de Polícia Rodoviária Federal, e a lei vigora desde a publicação",
        "a despesa sai de um fundo especial criado pela lei, abastecido pelas multas aplicadas durante cada operação",
        "a lei só entrou em vigor noventa dias depois de publicada, para que o ministério pudesse editar o regulamento",
        "a despesa é paga pelo Fundo Nacional de Segurança Pública, e a lei vale só para operações em rodovias de fronteira definidas pelo ministério",
      ],
      correta: 1,
      explicacao:
        "O art. 5º prevê que as despesas sejam atendidas por remanejamento das dotações do Departamento de Polícia Rodoviária Federal na lei orçamentária anual, e o art. 6º diz que a lei entra em vigor na data da publicação. A lei veio da conversão da MP 837/2018.",
      explicacaoErradas:
        "A despesa não é “custeada pelos Estados”. A lei não criou “um fundo especial”, nem usa as multas. Não houve prazo de “noventa dias”: a vigência foi imediata. A verba não sai do “Fundo Nacional de Segurança Pública” e não se limita a “rodovias de fronteira”.",
      pegadinha: "Confundir a indenização de repouso com a de fronteira.",
      conhecimento: "Vigência na data da publicação.",
    },
    {
      topico: "Decreto 8.282/2014",
      subassunto: "Progressão e promoção",
      dificuldade: 4,
      raciocinio: "Progressão: padrão a padrão. Promoção: classe a classe.",
      enunciado:
        "Um PRF da Terceira Classe, Padrão III, passa para o Padrão I da Segunda Classe. Pelo Decreto 8.282/2014, esse movimento se chama:",
      alternativas: [
        "progressão, porque toda mudança de padrão, dentro ou fora da classe, recebe esse nome no decreto",
        "remoção, porque o servidor muda de posição na carreira por ato do Ministro da Justiça",
        "enquadramento, porque a passagem de classe só ocorre na reestruturação de carreira feita por lei",
        "progressão funcional, desde que o servidor tenha cumprido 12 meses no padrão e avaliação satisfatória",
        "promoção, que é a passagem do último padrão de uma classe para o padrão inicial da classe seguinte",
      ],
      correta: 4,
      explicacao:
        "O art. 2º do Decreto 8.282/2014 define progressão como a passagem para o padrão seguinte dentro da mesma classe, e promoção como a passagem do último padrão de uma classe para o padrão inicial da classe imediatamente superior. Do Padrão III da Terceira para o Padrão I da Segunda há promoção.",
      explicacaoErradas:
        "Não é toda mudança “dentro ou fora da classe” que é progressão: fora da classe é promoção. “Remoção” é mudança de lotação, e não de posição na carreira. “Enquadramento” foi a reestruturação de 2013. A “progressão funcional” fica dentro da mesma classe.",
      pegadinha: "Chamar de progressão qualquer subida na carreira.",
      conhecimento: "Dentro da classe: progressão. Mudança de classe: promoção.",
    },
    {
      topico: "Decreto 8.282/2014",
      subassunto: "Requisitos da promoção",
      dificuldade: 5,
      raciocinio: "Promoção: 12 meses, avaliação e capacitação; 150 horas da Segunda para a Primeira.",
      enunciado:
        "Uma PRF está há 14 meses no Padrão VI da Segunda Classe, foi bem avaliada e quer ser promovida à Primeira Classe. Pelo Decreto 8.282/2014, ela precisa ainda comprovar:",
      alternativas: [
        "a capacitação exigida no Anexo, de 150 horas em cursos compatíveis com as atribuições do cargo",
        "a capacitação exigida no Anexo, de 360 horas em cursos específicos oferecidos pela própria PRF",
        "o estágio probatório homologado, requisito que só se exige para a promoção à Primeira Classe",
        "nada mais, porque a promoção depende só do tempo de 12 meses e da avaliação de desempenho",
        "24 meses no Padrão VI, porque o interstício da promoção é o dobro do exigido na progressão",
      ],
      correta: 0,
      explicacao:
        "O art. 4º, II, exige para a promoção 12 meses de efetivo exercício no último padrão, avaliação satisfatória e a capacitação do Anexo. Da Segunda para a Primeira Classe são 150 horas em cursos compatíveis com as atribuições do cargo.",
      explicacaoErradas:
        "As 360 horas em cursos específicos valem para a Classe Especial, e não para a Primeira, por isso “360 horas” não serve aqui. O estágio probatório homologado é exigido para a promoção à Segunda Classe, e não “à Primeira Classe”. A capacitação também é requisito, e é falso que não falte “nada mais”. O interstício é de 12 meses, e não “24 meses”.",
      pegadinha: "Esquecer a capacitação, que só a promoção exige.",
      conhecimento: "Progressão: tempo e avaliação. Promoção: tempo, avaliação e capacitação.",
    },
    {
      topico: "Decreto 8.282/2014",
      subassunto: "Metas",
      dificuldade: 5,
      raciocinio: "70% para progressão; 80% para promoção.",
      enunciado:
        "No ciclo de avaliação, um PRF atingiu 75% das metas de desempenho. Considerando o art. 4º, § 3º, do Decreto 8.282/2014:",
      alternativas: [
        "ele não pode progredir nem ser promovido, porque o mínimo para qualquer movimento é 80% das metas",
        "ele pode ser promovido, mas não progredir, já que a progressão exige o percentual mais alto",
        "ele pode progredir e ser promovido, porque o decreto exige só 50% das metas para ambos",
        "o resultado basta para a progressão, que exige 70% das metas, mas não para a promoção, que exige 80%",
        "o percentual de metas não conta, porque o decreto avalia só a assiduidade e a pontualidade do servidor",
      ],
      correta: 3,
      explicacao:
        "O § 3º do art. 4º considera satisfatória a avaliação de quem atinge pelo menos 70% das metas, para a progressão, e 80%, para a promoção, conforme ato do dirigente máximo do órgão. Com 75%, o servidor cumpre o requisito da progressão, mas não o da promoção.",
      explicacaoErradas:
        "O mínimo não é “80% das metas” para qualquer movimento: a progressão pede 70%. A ordem está invertida: a promoção exige o percentual maior, e não que “a progressão exige o percentual mais alto”. Não há regra de “50% das metas”. As metas contam, e o decreto não avalia “só a assiduidade e a pontualidade”.",
      pegadinha: "Inverter os percentuais da progressão e da promoção.",
      conhecimento: "Promoção é o passo maior, por isso exige mais metas.",
    },
    {
      topico: "Decreto 8.282/2014",
      subassunto: "Capacitação",
      dificuldade: 5,
      raciocinio: "120, 150 e 360 horas, de baixo para cima.",
      enunciado: "Pelo Anexo do Decreto 8.282/2014, a carga de capacitação para cada promoção é:",
      alternativas: [
        "360 horas para chegar à Segunda Classe, 150 horas para a Primeira e 120 horas para a Especial, em ordem decrescente",
        "150 horas para cada promoção, sem diferença entre as classes, desde que os cursos sejam compatíveis com o cargo",
        "120 horas para a Segunda Classe e 150 horas para a Primeira, em cursos compatíveis, e 360 horas para a Especial, em cursos específicos",
        "120 horas para a Segunda Classe e 360 horas para a Primeira, e a Classe Especial dispensa capacitação por ser cargo de direção superior na carreira",
        "a carga é definida a cada ano pelo Diretor-Geral, conforme a oferta de cursos da academia nacional da PRF",
      ],
      correta: 2,
      explicacao:
        "O Anexo do Decreto 8.282/2014 exige: da Terceira para a Segunda Classe, 120 horas; da Segunda para a Primeira, 150 horas, ambas em cursos compatíveis com as atribuições do cargo; da Primeira para a Especial, 360 horas, em cursos específicos (art. 4º, § 1º).",
      explicacaoErradas:
        "A ordem não é “decrescente”: a carga cresce rumo ao topo. Não são “150 horas para cada promoção”. A Primeira pede 150, e não 360, e a Especial não “dispensa capacitação”. A carga está no Anexo, e não “definida a cada ano pelo Diretor-Geral”.",
      pegadinha: "Trocar as cargas ou achar que a Especial dispensa cursos.",
      conhecimento: "Especial: 360 horas em cursos específicos.",
    },
    {
      topico: "Decreto 8.282/2014",
      subassunto: "Interstício",
      dificuldade: 5,
      raciocinio: "Afastamento sem remuneração suspende; no retorno, volta a correr.",
      enunciado:
        "Um PRF com 7 meses no padrão tira licença para tratar de interesses particulares, sem remuneração, por 1 ano. Quando ele voltar, pelo art. 5º do Decreto 8.282/2014:",
      alternativas: [
        "a contagem recomeça do zero, porque o afastamento sem remuneração apaga o tempo anterior no padrão",
        "a contagem retoma de onde parou, porque o interstício fica suspenso no afastamento sem remuneração",
        "ele progride logo, porque o tempo de licença conta como efetivo exercício para todos os fins",
        "a contagem continua normalmente durante a licença, e ele volta já com 19 meses no padrão",
        "ele perde o direito à progressão naquele padrão e só pode ser promovido depois de nova avaliação",
      ],
      correta: 1,
      explicacao:
        "O art. 5º conta o interstício em dias, a partir da entrada em exercício, descontadas as ausências que não são efetivo exercício. O parágrafo único diz que, no afastamento sem remuneração, a contagem fica suspensa e é retomada no retorno. O PRF volta com os 7 meses que já tinha.",
      explicacaoErradas:
        "A contagem não “recomeça do zero”: ela é suspensa. A licença sem remuneração não conta “como efetivo exercício”. A contagem não “continua normalmente durante a licença”, e ele não volta com “19 meses”. Ele não “perde o direito à progressão”.",
      pegadinha: "Confundir suspensão com interrupção.",
      conhecimento: "Suspensão: o tempo anterior fica guardado.",
    },
    {
      topico: "Decreto 8.282/2014",
      subassunto: "Avaliação de desempenho",
      dificuldade: 5,
      raciocinio: "Exercício em 2/3 do período; afastamento em efetivo exercício mantém a última nota.",
      enunciado: "Sobre a avaliação de desempenho para progressão e promoção, pelo Decreto 8.282/2014, é correto afirmar que:",
      alternativas: [
        "basta que o servidor esteja em exercício em um terço do período para que a avaliação produza efeitos",
        "o servidor afastado em efetivo exercício recebe nota zero no período, mesmo que tenha sido bem avaliado antes do afastamento",
        "a progressão pode ocorrer sem avaliação anterior quando o servidor completa o tempo exigido no padrão",
        "os fatores avaliados são só a assiduidade e a disciplina, e a produtividade fica de fora da avaliação",
        "a avaliação só produz efeitos se o servidor esteve em exercício em 2/3 do período, e sem avaliação não há progressão",
      ],
      correta: 4,
      explicacao:
        "O art. 7º diz que a avaliação só produz efeito se o servidor esteve em exercício durante pelo menos 2/3 do período. O § 1º manda usar a última pontuação de quem se afastou em efetivo exercício, e o § 4º impede progressão ou promoção sem avaliação anterior. Os fatores são produtividade, conhecimento de métodos e técnicas e cumprimento de normas (art. 6º).",
      explicacaoErradas:
        "Não basta “um terço do período”: são 2/3. O afastado em efetivo exercício mantém a última pontuação, e não recebe “nota zero”. Não há progressão “sem avaliação anterior”. A produtividade é fator, e é falso que ela “fica de fora”.",
      pegadinha: "Trocar 2/3 por 1/3 ou esquecer que a avaliação é indispensável.",
      conhecimento: "Fatores: produtividade, métodos e técnicas, cumprimento de normas.",
    },
    {
      topico: "Decreto 8.282/2014",
      subassunto: "Reconsideração e recurso",
      dificuldade: 5,
      raciocinio: "10 dias para pedir, 5 para decidir, 5 para dar ciência, 10 para recorrer.",
      enunciado: "Um PRF discorda da sua avaliação de desempenho. Pelo art. 9º do Decreto 8.282/2014:",
      alternativas: [
        "ele pode pedir reconsideração em 10 dias à unidade de RH, que a envia à chefia imediata, com decisão em 5 dias, e depois recorrer em 10 dias",
        "ele pode recorrer direto ao Ministro da Justiça em 30 dias, sem passar pela chefia imediata nem pela unidade de RH",
        "ele pode pedir reconsideração em 5 dias à própria chefia, que decide em 10 dias, cabendo recurso ao Diretor-Geral em 30 dias, em última instância administrativa",
        "a avaliação é irrecorrível, e o servidor só pode discutir o resultado na avaliação do ciclo seguinte",
        "ele pode recorrer ao Judiciário em 10 dias, que é a única via prevista no decreto para rever a avaliação",
      ],
      correta: 0,
      explicacao:
        "O art. 9º permite pedido de reconsideração em 10 dias, entregue à unidade de recursos humanos, que o encaminha à chefia imediata. A decisão sai em 5 dias e o servidor é comunicado em 5 dias. Da decisão cabe recurso em 10 dias à autoridade imediatamente superior à chefia, em última instância. O resultado sai no Boletim Interno.",
      explicacaoErradas:
        "O recurso não vai “direto ao Ministro da Justiça em 30 dias”. Os prazos não são “em 5 dias” para pedir e “em 10 dias” para decidir. A avaliação não é “irrecorrível”. O decreto prevê a via administrativa, e não fala em “recorrer ao Judiciário”.",
      pegadinha: "Inverter os prazos de 10 e 5 dias.",
      conhecimento: "Pedir e recorrer: 10 dias. Decidir e comunicar: 5 dias.",
    },
    {
      topico: "Decreto 8.282/2014",
      subassunto: "Cursos válidos",
      dificuldade: 4,
      raciocinio: "Cursos compatíveis; pós-graduação reconhecida; cada evento conta uma vez.",
      enunciado:
        "Para a promoção, um PRF apresenta um mestrado feito no exterior, sem revalidação, e um curso de tiro já usado na promoção anterior. Pelo art. 10 do Decreto 8.282/2014:",
      alternativas: [
        "os dois cursos valem, porque todo curso concluído na carreira pode ser reaproveitado em cada nova promoção",
        "só o mestrado vale, porque cursos de pós-graduação estrangeiros dispensam revalidação para fins de carreira policial",
        "só o curso de tiro vale, porque cursos práticos podem ser usados de novo sempre que forem refeitos",
        "nenhum dos dois vale: o curso estrangeiro precisa de revalidação, e cada evento de capacitação conta uma vez",
        "os dois valem pela metade da carga horária, regra aplicada a cursos repetidos ou sem reconhecimento",
      ],
      correta: 3,
      explicacao:
        "O art. 10 aceita só cursos compatíveis com as atribuições do cargo. Pós-graduação lato sensu, mestrado e doutorado precisam de reconhecimento do MEC, se nacionais, ou de revalidação, se estrangeiros. E cada evento de capacitação só pode ser computado uma vez.",
      explicacaoErradas:
        "Não se pode reaproveitar “em cada nova promoção”: cada evento conta uma vez. O mestrado estrangeiro não dispensa revalidação, e é falso que cursos estrangeiros “dispensam revalidação”. O curso de tiro já usado não pode ser usado “de novo”. Não existe regra de “metade da carga horária”.",
      pegadinha: "Reaproveitar o mesmo curso em duas promoções.",
      conhecimento: "Estrangeiro: revalidação. Nacional: reconhecimento do MEC.",
    },
  ],
};
