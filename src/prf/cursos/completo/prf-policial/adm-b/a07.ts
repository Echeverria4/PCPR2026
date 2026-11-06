import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-b-07",
  resumo: {
    ideia:
      "Agente público é o gênero: alcança todo aquele que exerce função pública, mesmo sem salário ou por pouco tempo. A Constituição fixa as regras de concurso, remuneração, teto e previdência.",
    itens: [
      {
        termo: "Classificação",
        faz: "Políticos, administrativos, honoríficos, delegados e credenciados.",
        pista: "Delegado atua em nome próprio; credenciado representa a Administração em ato certo.",
      },
      {
        termo: "Validade do concurso",
        faz: "Até 2 anos, prorrogável uma vez, por igual período. O prazo do edital é que define a prorrogação.",
      },
      {
        termo: "Subsídio",
        faz: "Parcela única, sem gratificação, adicional, abono, prêmio ou verba de representação.",
        pista: "Os policiais do art. 144 recebem nessa forma; 13º e terço de férias continuam devidos.",
      },
      {
        termo: "Revisão geral anual",
        faz: "Lei específica, sempre na mesma data e sem distinção de índices. A omissão não gera indenização, mas o Executivo deve justificar.",
      },
      {
        termo: "Vinculação e cascata",
        faz: "É vedado vincular ou equiparar remunerações, e acréscimos não se somam para gerar outros acréscimos.",
      },
      {
        termo: "Teto",
        faz: "Na acumulação lícita, vale para cada vínculo. Nas estatais, só alcança as que recebem recursos públicos para pessoal ou custeio.",
      },
      {
        termo: "Previdência",
        faz: "Regime próprio é do cargo efetivo. Comissionado puro, temporário e empregado público ficam no regime geral.",
      },
      {
        termo: "Abono de permanência",
        faz: "Pode chegar, no máximo, ao valor da contribuição, conforme lei do ente, até a idade da compulsória.",
      },
      {
        termo: "Temporário",
        faz: "Exige caso previsto em lei, prazo certo, necessidade temporária e interesse público excepcional.",
      },
    ],
    cuidado:
      "A compulsória aos 75 anos é regra do cargo efetivo: não alcança quem ocupa só cargo em comissão.",
  },
  questoes: [
    {
      topico: "Classificação dos agentes",
      subassunto: "Delegados e credenciados",
      dificuldade: 4,
      raciocinio: "Em nome próprio é delegado; representando a Administração em ato certo é credenciado.",
      enunciado:
        "Um particular é contratado para representar o Brasil em um congresso técnico internacional, e uma concessionária administra rodovia federal por sua conta e risco, sob fiscalização do Estado. Na classificação de Hely Lopes Meirelles, são, respectivamente, agentes",
      alternativas: [
        "honorífico e credenciado",
        "administrativo e delegado",
        "delegado e credenciado",
        "político e honorífico",
        "credenciado e delegado",
      ],
      correta: 4,
      explicacao:
        "Credenciado recebe da Administração a tarefa de representá-la em ato ou atividade específica, mediante remuneração. Delegado é o particular que executa serviço público em nome próprio, por sua conta e risco, sob fiscalização do Estado.",
      explicacaoErradas:
        "“Delegado e credenciado” inverte os dois papéis. “Honorífico” é quem presta serviço transitório por sua condição cívica, como o jurado. “Administrativo” é quem tem vínculo profissional com o Estado. “Político” é quem compõe o primeiro escalão, como os chefes do Executivo.",
      pegadinha: "A concessionária age em nome próprio: por isso é delegada, não credenciada.",
      conhecimento:
        "Todos esses são agentes públicos, porque “agente” é o gênero. “Servidor” é apenas uma das espécies.",
    },
    {
      topico: "Funcionário público penal",
      subassunto: "Art. 327 do CP",
      dificuldade: 4,
      raciocinio: "No direito penal o conceito é amplo, e o § 1º equipara quem faz atividade típica.",
      enunciado:
        "Empregado de empresa privada contratada pela União para executar atividade típica da Administração apropria-se de valores públicos que recebeu em razão do trabalho. Para fins penais, ele",
      alternativas: [
        "é equiparado a funcionário público, ainda que não ocupe cargo nem emprego público",
        "só responde como particular, pois o vínculo é com a empresa, não com o Estado",
        "é agente delegado, e por isso fica fora do conceito penal de funcionário",
        "só é funcionário público para a lei penal se foi aprovado em concurso",
        "responde como funcionário apenas se o fato ocorrer dentro de repartição pública, no horário de serviço e sob ordem de autoridade",
      ],
      correta: 0,
      explicacao:
        "O art. 327, § 1º, do Código Penal equipara a funcionário público quem exerce cargo, emprego ou função em entidade paraestatal e quem trabalha para empresa contratada ou conveniada para executar atividade típica da Administração.",
      explicacaoErradas:
        "“Só responde como particular” ignora a equiparação do § 1º. “Agente delegado” é rótulo da doutrina administrativa e não tira ninguém do conceito penal. “Aprovado em concurso” não é requisito, pois a lei alcança até a função transitória. “Dentro de repartição” cria um limite que a lei não traz.",
      pegadinha: "Não precisa de vínculo direto com o Estado: basta a atividade típica por empresa contratada.",
      conhecimento:
        "O caput do art. 327 alcança quem exerce cargo, emprego ou função pública, ainda que de forma transitória ou sem remuneração.",
    },
    {
      topico: "Validade do concurso",
      subassunto: "Prorrogação",
      dificuldade: 5,
      raciocinio: "O limite de 2 anos é do prazo inicial, e a prorrogação repete esse prazo.",
      enunciado:
        "Edital de concurso federal fixa validade de 18 meses, com prorrogação admitida. Quanto ao prazo, conforme o art. 37, III, da Constituição, esse concurso",
      alternativas: [
        "só pode ser prorrogado por mais 6 meses, pois o total não passa de 2 anos",
        "pode ser prorrogado por 2 anos, que é o prazo máximo previsto na Constituição",
        "não pode ser prorrogado, pois prazo diferente de 2 anos exclui a prorrogação",
        "pode ser prorrogado quantas vezes for preciso, até alcançar o total de 4 anos",
        "pode ser prorrogado uma vez por mais 18 meses, chegando a 36 meses no total",
      ],
      correta: 4,
      explicacao:
        "A validade é de até 2 anos, prorrogável uma vez, por igual período. Fixados 18 meses no edital, a prorrogação é de 18 meses, o que soma 36 meses.",
      explicacaoErradas:
        "“Mais 6 meses” trata 2 anos como limite do total, e ele é limite do prazo inicial. “Por 2 anos” descumpre o “igual período”. “Exclui a prorrogação” inventa uma condição. “Quantas vezes for preciso” contraria o “uma vez”.",
      pegadinha: "Igual período quer dizer igual ao prazo fixado no edital, não igual a 2 anos.",
      conhecimento:
        "Durante o prazo improrrogável do edital, o aprovado tem prioridade sobre novos concursados para assumir o cargo (art. 37, IV).",
    },
    {
      topico: "Subsídio",
      subassunto: "Policiais e parcela única",
      dificuldade: 5,
      raciocinio: "Art. 144, § 9º, leva ao art. 39, § 4º. O que é anual e geral não se confunde com parcela mensal.",
      enunciado:
        "Lei federal institui adicional mensal de desempenho para policiais rodoviários federais remunerados por subsídio. À luz da Constituição e da tese do STF no Tema 484, esse adicional",
      alternativas: [
        "é incompatível com o subsídio, que não impede o 13º nem o terço de férias",
        "é válido, porque a carreira policial pode somar subsídio e adicionais mensais",
        "é válido se vier em lei específica, pois a vedação só alcança membros de Poder",
        "é inválido, e o subsídio exclui também o 13º salário e o terço de férias",
        "é válido desde que não ultrapasse o teto, único limite que o subsídio conhece",
      ],
      correta: 0,
      explicacao:
        "O art. 144, § 9º, manda fixar a remuneração dos policiais na forma do art. 39, § 4º: parcela única, vedado qualquer adicional. No Tema 484, o STF disse que o subsídio é incompatível com parcelas mensais, o que não atinge o 13º e o terço de férias, pagos com periodicidade anual.",
      explicacaoErradas:
        "“Pode somar” contraria o art. 39, § 4º. “Só alcança membros de Poder” ignora a remissão do art. 144, § 9º. “Exclui também o 13º” contraria o Tema 484. “Único limite” esquece que a vedação de parcelas existe mesmo abaixo do teto.",
      pegadinha: "Subsídio veda parcela mensal, mas 13º e terço de férias continuam.",
      conhecimento:
        "Verbas indenizatórias, como diárias, também podem ser pagas a quem recebe subsídio, porque não remuneram o trabalho.",
    },
    {
      topico: "Revisão geral anual",
      subassunto: "Tema 19 do STF",
      dificuldade: 4,
      raciocinio: "Separe o dever de se explicar do direito de receber indenização.",
      enunciado:
        "Durante dois anos, o chefe do Executivo federal não envia ao Congresso projeto de revisão geral anual. Servidores pedem na Justiça indenização pela perda do poder de compra. Segundo o STF, no Tema 19, a omissão",
      alternativas: [
        "gera indenização calculada pelo índice oficial de inflação do período",
        "permite ao juiz fixar o índice da revisão, até que a lei seja aprovada",
        "não gera indenização, mas o Executivo deve justificar por que não propôs",
        "não tem efeito jurídico algum, pois a revisão é só uma faculdade do Executivo",
        "só gera indenização depois de mandado de injunção que reconheça a mora",
      ],
      correta: 2,
      explicacao:
        "A tese do Tema 19 é que o não envio do projeto não gera direito subjetivo a indenização. O Executivo, porém, deve se pronunciar de forma fundamentada sobre as razões de não ter proposto a revisão.",
      explicacaoErradas:
        "“Gera indenização” e “depois de mandado de injunção” contrariam a tese. “Permite ao juiz fixar” invade a reserva de lei do art. 37, X. “Só uma faculdade” ignora o dever de fundamentar a omissão.",
      pegadinha: "Sem indenização não quer dizer sem dever: o Executivo precisa se explicar.",
      conhecimento:
        "O art. 37, X, exige lei específica, com iniciativa própria em cada caso, revisão sempre na mesma data e sem distinção de índices.",
    },
    {
      topico: "Vinculação de remuneração",
      subassunto: "Art. 37, XIII, e SV 42",
      dificuldade: 5,
      raciocinio: "Nada de gatilho automático: nem índice federal, nem percentual de outro cargo.",
      enunciado:
        "Uma lei municipal reajusta os vencimentos locais, todo ano, pelo índice federal de correção monetária. Outra lei fixa que fiscais de tributos receberão sempre 80% do que ganham os auditores. Essas regras",
      alternativas: [
        "são válidas, pois preservam o poder de compra garantido pela irredutibilidade",
        "só a primeira é inválida, pois a CF permite vincular cargos do mesmo Poder",
        "só a segunda é inválida, pois índices federais podem guiar reajustes locais",
        "são válidas, porque a autonomia do município alcança a política remuneratória",
        "são inconstitucionais: há vinculação vedada pelo art. 37, XIII, e pela SV 42",
      ],
      correta: 4,
      explicacao:
        "A Súmula Vinculante 42 proíbe vincular o reajuste de servidores estaduais ou municipais a índices federais de correção monetária. O art. 37, XIII, veda a vinculação ou equiparação de quaisquer espécies remuneratórias, o que atinge o percentual fixo sobre outro cargo.",
      explicacaoErradas:
        "“Preservam o poder de compra” confunde irredutibilidade nominal com correção automática. “Permite vincular cargos do mesmo Poder” contraria o inciso XIII. “Índices federais podem guiar” contraria a SV 42. “Autonomia do município” não afasta as regras do art. 37.",
      pegadinha: "As duas leis são inválidas, por motivos parecidos.",
      conhecimento:
        "O art. 37, XIV, veda o efeito cascata: acréscimos não são computados nem acumulados para gerar acréscimos ulteriores.",
    },
    {
      topico: "Teto remuneratório",
      subassunto: "Acumulação lícita",
      dificuldade: 5,
      raciocinio: "Cada vínculo olha para o teto separadamente.",
      enunciado:
        "Servidor acumula licitamente dois cargos privativos de médico. Cada remuneração fica abaixo do teto, mas a soma passa dele. Segundo a tese fixada pelo STF nos Temas 377 e 384,",
      alternativas: [
        "o teto incide em cada vínculo, separadamente, e não na soma dos ganhos",
        "o teto incide na soma, e o excesso deve ser cortado no cargo mais recente",
        "o teto não se aplica a quem acumula cargos em hipótese permitida pela CF",
        "o servidor deve optar por um dos cargos, pois a soma passou do limite",
        "o teto incide na soma só quando os dois vínculos são com o mesmo ente",
      ],
      correta: 0,
      explicacao:
        "Na acumulação autorizada pela Constituição, o art. 37, XI, considera cada vínculo formalizado, sem aplicar o teto ao somatório dos ganhos.",
      explicacaoErradas:
        "“Incide na soma” e “só quando são com o mesmo ente” contrariam a tese. “Não se aplica” exagera, pois cada vínculo continua sujeito ao teto. “Deve optar” é consequência de acumulação ilícita, que não é o caso.",
      pegadinha: "O teto continua valendo, só que vínculo por vínculo.",
      conhecimento:
        "Remuneração somada a pensão segue outra lógica: no Tema 359, com morte depois da EC 19/1998, o teto incide sobre o somatório.",
    },
    {
      topico: "Teto remuneratório",
      subassunto: "Estatais não dependentes",
      dificuldade: 4,
      raciocinio: "A pergunta que resolve: a estatal recebe dinheiro público para pessoal ou custeio?",
      enunciado:
        "Sociedade de economia mista federal vive de receita própria e não recebe recursos públicos para pessoal nem para custeio em geral. Quanto ao teto do art. 37, XI, da Constituição, seus empregados",
      alternativas: [
        "sujeitam-se a ele, como todo agente que integre a Administração indireta",
        "não se sujeitam a ele, porque a empresa não depende desses recursos",
        "sujeitam-se a ele só quanto aos diretores nomeados pelo Presidente da República",
        "sujeitam-se a ele, salvo se a lei criadora da empresa dispuser de outro modo",
        "não se sujeitam a ele, porque emprego público nunca entra no conceito de teto",
      ],
      correta: 1,
      explicacao:
        "O art. 37, § 9º, aplica o teto às empresas públicas, sociedades de economia mista e subsidiárias que recebem recursos dos entes para pagar pessoal ou custeio em geral. Sem esse recebimento, o teto não as alcança.",
      explicacaoErradas:
        "“Todo agente” ignora o § 9º. “Só quanto aos diretores” cria distinção que não existe. “Salvo se a lei criadora” põe a lei acima da Constituição. “Emprego público nunca entra” contraria o inciso XI, que alcança empregos, e o próprio § 9º, para as dependentes.",
      pegadinha: "O critério é a dependência de recursos, não a natureza do vínculo.",
      conhecimento:
        "O § 12 do art. 37 permite aos estados e ao DF adotar subteto único: o subsídio dos desembargadores, limitado a 90,25% do subsídio mensal dos ministros do STF.",
    },
    {
      topico: "Previdência do servidor",
      subassunto: "Abono de permanência",
      dificuldade: 5,
      raciocinio: "A EC 103/2019 trocou o tom da regra: “poderá” e “no máximo”.",
      enunciado:
        "Servidor efetivo preenche os requisitos da aposentadoria voluntária e decide continuar em atividade. Pelo texto permanente do art. 40, § 19, da Constituição, o abono de permanência",
      alternativas: [
        "é direito automático, sempre igual ao valor integral da contribuição do servidor",
        "substitui a aposentadoria e passa a integrar o cálculo do benefício final",
        "dura até a aposentadoria voluntária seguinte, no limite de cinco anos de atividade",
        "só cabe a quem ingressou no cargo antes da EC 103/2019, sob pena de perda do direito",
        "poderá ser pago, no máximo, no valor da contribuição, conforme lei do ente",
      ],
      correta: 4,
      explicacao:
        "O § 19 diz que, observados critérios da lei do ente, o servidor “poderá fazer jus” a abono equivalente, “no máximo”, ao valor da sua contribuição, até a idade da aposentadoria compulsória.",
      explicacaoErradas:
        "“Direito automático” e “sempre igual” retomam a redação anterior à EC 103/2019. “Substitui a aposentadoria” confunde abono com benefício. “Cinco anos” inventa um limite, pois o marco é a compulsória. “Antes da EC 103/2019” não está no texto do § 19.",
      pegadinha: "O texto permanente fala em “no máximo” e depende de lei do ente.",
      conhecimento:
        "Enquanto não vem a lei do ente, normas de transição da EC 103/2019 cuidam do abono de quem já cumpria os requisitos.",
    },
    {
      topico: "Previdência do servidor",
      subassunto: "Comissionado puro",
      dificuldade: 5,
      raciocinio: "Compulsória e regime próprio são próprios do cargo efetivo.",
      enunciado:
        "Cidadão sem vínculo efetivo com a União é nomeado, aos 76 anos, para cargo em comissão declarado em lei de livre nomeação e exoneração. Quanto à idade e ao regime de previdência, ele",
      alternativas: [
        "pode ser nomeado, pois a compulsória não alcança o comissionado, e fica no RGPS",
        "não pode ser nomeado, pois a compulsória aos 75 anos alcança todo agente público",
        "pode ser nomeado, mas fica no regime próprio dos servidores da União",
        "pode ser nomeado só se houver autorização do Presidente, e fica no RGPS",
        "não pode ser nomeado, pois o regime geral não admite segurado com mais de 75 anos",
      ],
      correta: 0,
      explicacao:
        "No Tema 763, o STF decidiu que quem ocupa exclusivamente cargo em comissão não se submete à compulsória e que não há idade limite para a nomeação. O art. 40, § 13, põe esse agente no Regime Geral de Previdência Social.",
      explicacaoErradas:
        "“Alcança todo agente público” contraria o Tema 763. “Regime próprio” contraria o § 13. “Autorização do Presidente” é exigência inventada. “Regime geral não admite” cria um limite de idade sem base.",
      pegadinha: "Idade da compulsória não é idade limite para nomeação em comissão.",
      conhecimento:
        "O art. 40, § 13, também põe no regime geral quem ocupa cargo temporário, inclusive mandato eletivo, e emprego público.",
    },
    {
      topico: "Contratação temporária",
      subassunto: "Tema 551 do STF",
      dificuldade: 4,
      raciocinio: "Regra: temporário não recebe essas verbas. Exceções: lei, contrato ou desvirtuamento.",
      enunciado:
        "Depois de três prorrogações sucessivas, um contrato temporário de excepcional interesse público (CF, art. 37, IX) passa a cobrir serviço permanente. O contratado pede 13º e férias com terço. Pela tese do STF no Tema 551,",
      alternativas: [
        "ele nunca tem direito, pois o temporário só recebe o que o contrato prevê",
        "ele tem direito de ser efetivado no cargo, além das verbas pedidas",
        "ele só tem direito se a lei local previr as verbas de forma expressa",
        "ele tem direito, pois houve desvirtuamento por renovações sucessivas",
        "ele tem direito desde o primeiro mês de qualquer contrato temporário, mesmo regular",
      ],
      correta: 3,
      explicacao:
        "A regra do Tema 551 é que temporários não têm direito a 13º e férias com terço, salvo previsão expressa em lei ou contrato, ou desvirtuamento da contratação por renovações ou prorrogações sucessivas e reiteradas.",
      explicacaoErradas:
        "“Nunca tem direito” e “só tem direito se a lei local previr” ignoram a exceção do desvirtuamento. “Ser efetivado” contraria a exigência de concurso. “Qualquer contrato temporário” inverte a regra geral.",
      pegadinha: "Desvirtuamento gera verbas, nunca efetivação no cargo.",
      conhecimento:
        "No Tema 612, o STF exigiu caso previsto em lei, prazo predeterminado, necessidade temporária, interesse público excepcional e contratação indispensável.",
    },
  ],
};
