import type { QuestaoPrf } from "../../data/prf";

export const QUESTOES_PRF_ADM: QuestaoPrf[] = [
  {
    id: "prf-adm-001",
    materia: "adm",
    topico: "Ato administrativo",
    enunciado:
      "O chefe de uma delegacia da PRF autoriza uma associação de servidores a usar, num fim de semana, um auditório ocioso da unidade. Sobre os elementos desse ato discricionário, é correto afirmar que a margem de escolha do chefe",
    alternativas: [
      "se concentra no motivo e no objeto, ao passo que competência, finalidade e forma permanecem vinculadas.",
      "se concentra na competência e na forma, ao passo que motivo, objeto e finalidade permanecem vinculados.",
      "alcança todos os elementos do ato, de modo que nenhum deles pode ser examinado pelo Poder Judiciário.",
      "se concentra na finalidade, de modo que o ato pode atender a interesse particular se houver motivação expressa.",
      "se concentra no motivo e no objeto, e por isso o Judiciário pode trocar a escolha feita por outra que julgue mais conveniente.",
    ],
    correta: 0,
    explicacao:
      "No ato discricionário, o mérito (juízo de conveniência e oportunidade) está no motivo e no objeto; competência, finalidade e forma são sempre vinculadas. O Judiciário controla a legalidade, inclusive a razoabilidade, mas não substitui a escolha do administrador.",
    origem: "banco",
  },
  {
    id: "prf-adm-002",
    materia: "adm",
    topico: "Ato administrativo",
    enunciado:
      "Um motorista é autuado pela PRF por excesso de velocidade numa rodovia federal e, meses depois, a multa continua sem pagamento. À luz dos atributos do ato administrativo, a multa",
    alternativas: [
      "é imperativa e autoexecutória, e a Administração pode retirar o valor diretamente da conta bancária do infrator.",
      "não é imperativa, porque só obriga o infrator depois que ele assina o auto de infração e concorda com a autuação.",
      "presume-se legítima de forma absoluta, de modo que o motorista não pode contestá-la na via administrativa nem na judicial.",
      "é imperativa e presume-se legítima, mas sua cobrança forçada depende de execução judicial, por não ser autoexecutória.",
      "é autoexecutória e dispensa notificação, e o valor pode ser descontado de qualquer crédito que o infrator tenha com a União.",
    ],
    correta: 3,
    explicacao:
      "A multa é imposta unilateralmente (imperatividade) e se presume legítima até prova em contrário (presunção relativa). Mas não é autoexecutória: se o infrator não paga, a Administração precisa da execução judicial para cobrá-la à força.",
    origem: "banco",
  },
  {
    id: "prf-adm-003",
    materia: "adm",
    topico: "Ato administrativo",
    enunciado:
      "Um diretor exonera o ocupante de um cargo em comissão e declara, no próprio ato, que o motivo é a extinção do cargo para cortar gastos. Na semana seguinte, nomeia outra pessoa para o mesmo cargo. A exoneração é",
    alternativas: [
      "válida, porque a exoneração de cargo em comissão é livre e o motivo declarado não tem relevância jurídica.",
      "inválida, porque o ocupante de cargo em comissão tem estabilidade e só pode ser exonerado após processo disciplinar.",
      "inválida, porque o motivo declarado vincula o ato e, sendo falso, compromete sua validade, ainda que a lei dispensasse motivação.",
      "válida, porque a teoria dos motivos determinantes só se aplica a atos vinculados, e a exoneração de ocupante de cargo em comissão é discricionária.",
      "inválida só se o ex-ocupante provar que o diretor agiu com dolo, porque a falsidade do motivo, por si só, não afeta o ato.",
    ],
    correta: 2,
    explicacao:
      "Pela teoria dos motivos determinantes, o motivo declarado passa a integrar a validade do ato, mesmo quando a lei dispensa motivação, como na exoneração ad nutum. Se o cargo continuou existindo, o motivo é falso e a exoneração pode ser anulada.",
    origem: "banco",
  },
  {
    id: "prf-adm-004",
    materia: "adm",
    topico: "Ato administrativo",
    enunciado:
      "Pela Lei 9.784/1999 e pela doutrina majoritária, desde que não haja lesão ao interesse público nem prejuízo a terceiros, pode ser convalidado o ato administrativo que",
    alternativas: [
      "foi assinado por servidor incompetente, em matéria de competência exclusiva da autoridade superior.",
      "teve como objeto uma providência proibida por lei, ainda que praticada pela autoridade competente.",
      "foi editado para perseguir um desafeto do agente, embora tenha observado a forma prevista em lei.",
      "foi praticado com vício de forma não essencial, por autoridade competente e com objeto lícito.",
      "se baseou em fato inexistente, embora a autoridade fosse competente e a forma, regular.",
    ],
    correta: 3,
    explicacao:
      "O art. 55 da Lei 9.784 admite convalidar defeitos sanáveis. São sanáveis, em regra, o vício de competência (salvo competência exclusiva) e o de forma (salvo forma essencial). Vícios de objeto, motivo e finalidade não se convalidam.",
    origem: "banco",
  },
  {
    id: "prf-adm-005",
    materia: "adm",
    topico: "Anulação, revogação e prescrição",
    enunciado:
      "Sobre a anulação e a revogação de atos administrativos, segundo a Súmula 473 do STF e a Lei 9.784/1999, é correto afirmar que",
    alternativas: [
      "a anulação decorre de ilegalidade, tem efeitos ex tunc e cabe à Administração ou ao Judiciário; a revogação, por conveniência e oportunidade, tem efeitos ex nunc e cabe só à Administração.",
      "a anulação decorre de inconveniência, tem efeitos ex nunc e cabe só à Administração; a revogação, por ilegalidade, tem efeitos ex tunc e cabe à Administração ou ao Judiciário.",
      "a anulação decorre de ilegalidade, tem efeitos ex nunc e cabe só ao Judiciário; a revogação, por conveniência e oportunidade, tem efeitos ex tunc e alcança até os direitos adquiridos.",
      "a anulação decorre de ilegalidade, tem efeitos ex tunc e cabe só à Administração; a revogação, por conveniência e oportunidade, pode atingir atos vinculados e direitos adquiridos.",
      "a anulação é mera faculdade da Administração, que pode manter atos ilegais por conveniência; a revogação cabe ao Judiciário, que pode rever o mérito de qualquer ato administrativo.",
    ],
    correta: 0,
    explicacao:
      "A anulação atinge o ato ilegal, retroage (ex tunc) e pode ser feita pela própria Administração (autotutela) ou pelo Judiciário. A revogação atinge ato válido, mas inconveniente, não retroage (ex nunc), cabe só à Administração e respeita direitos adquiridos.",
    origem: "banco",
  },
  {
    id: "prf-adm-006",
    materia: "adm",
    topico: "Anulação, revogação e prescrição",
    enunciado:
      "Por erro de cálculo, um servidor da PRF passou a receber, a partir de março de 2020, um adicional maior que o devido. Ele não concorreu para o erro e recebeu os valores de boa-fé. Em outubro de 2026, a Administração descobre a falha. Pela Lei 9.784/1999,",
    alternativas: [
      "a Administração ainda pode anular o ato a qualquer tempo, porque atos ilegais nunca se estabilizam pelo decurso do prazo.",
      "o direito de anular decaiu, porque o prazo de decadência para anular vantagens pecuniárias é de dois anos do primeiro pagamento.",
      "a Administração pode revogar o ato, com efeitos retroativos, e exigir a devolução de tudo o que foi pago desde 2020.",
      "o prazo para anular o ato só começa a correr em outubro de 2026, quando a Administração tomou conhecimento da falha.",
      "o direito de anular decaiu, porque se passaram mais de cinco anos, contados do primeiro pagamento, sem comprovada má-fé.",
    ],
    correta: 4,
    explicacao:
      "O art. 54 fixa em cinco anos o prazo decadencial para a Administração anular atos que geram efeitos favoráveis ao destinatário, salvo comprovada má-fé. Nos efeitos patrimoniais contínuos, o prazo conta da percepção do primeiro pagamento: de março de 2020 a outubro de 2026, já se passaram mais de cinco anos.",
    origem: "banco",
  },
  {
    id: "prf-adm-007",
    materia: "adm",
    topico: "Anulação, revogação e prescrição",
    enunciado:
      "A autoridade competente para instaurar processo disciplinar toma conhecimento de uma falta, cometida por servidor da PRF, punível com suspensão. Pelo art. 142 da Lei 8.112/1990, a ação disciplinar",
    alternativas: [
      "prescreve em dois anos, contados da data em que o fato se tornou conhecido, e a abertura de sindicância ou de PAD interrompe a prescrição.",
      "prescreve em cinco anos, contados da data em que o fato ocorreu, e a abertura de sindicância ou de PAD apenas suspende a contagem por 140 dias.",
      "prescreve em 180 dias, contados da data em que o fato se tornou conhecido, e nenhum ato do processo interrompe a prescrição.",
      "prescreve em dois anos, contados da data em que o fato ocorreu, e a abertura de sindicância ou de PAD não interfere na contagem.",
      "é imprescritível, porque as faltas disciplinares de servidor federal podem ser punidas a qualquer tempo, enquanto durar o vínculo.",
    ],
    correta: 0,
    explicacao:
      "O art. 142 fixa a prescrição em cinco anos para demissão, cassação e destituição, dois anos para suspensão e 180 dias para advertência, contados da data em que o fato se tornou conhecido. A abertura de sindicância punitiva ou de PAD interrompe a prescrição; pela Súmula 635 do STJ, o prazo volta a correr por inteiro 140 dias depois.",
    origem: "banco",
  },
  {
    id: "prf-adm-008",
    materia: "adm",
    topico: "Controle da administração pública",
    enunciado:
      "Sobre o controle externo exercido pelo Congresso Nacional com o auxílio do Tribunal de Contas da União, é correto afirmar que o TCU",
    alternativas: [
      "julga as contas anuais do Presidente da República e emite parecer prévio sobre as contas dos demais administradores de recursos federais.",
      "emite parecer prévio sobre as contas anuais do Presidente da República, que o Congresso julga, e julga as contas dos demais administradores.",
      "emite parecer prévio sobre as contas anuais do Presidente da República, que depois são julgadas pelo STF, e julga as contas dos demais administradores.",
      "julga as contas anuais do Presidente da República e as dos demais administradores, cabendo ao Congresso apenas homologar as decisões.",
      "apenas emite pareceres opinativos, e todas as contas dos administradores de recursos federais são julgadas pelo Congresso Nacional.",
    ],
    correta: 1,
    explicacao:
      "Pelo art. 71, I e II, da Constituição, o TCU aprecia as contas do Presidente mediante parecer prévio (em 60 dias), e quem as julga é o Congresso (art. 49, IX). Já as contas dos demais administradores e responsáveis por recursos públicos são julgadas pelo próprio TCU.",
    origem: "banco",
  },
  {
    id: "prf-adm-009",
    materia: "adm",
    topico: "Controle da administração pública",
    enunciado:
      "O TCU constata ilegalidade num contrato firmado pela PRF para a manutenção de viaturas. Segundo o art. 71 da Constituição,",
    alternativas: [
      "o próprio TCU susta o contrato de imediato, sem necessidade de comunicar a decisão ao Congresso Nacional.",
      "a sustação cabe ao Presidente da República, e, se ele não adotar as medidas em 30 dias, o Congresso decidirá a respeito.",
      "a sustação cabe ao Poder Judiciário, mediante ação proposta pelo TCU, que não pode adotar nenhuma outra providência por conta própria.",
      "a sustação cabe ao Congresso Nacional, e, se ele não a efetivar em 90 dias, o contrato passa a ser considerado válido.",
      "a sustação cabe ao Congresso Nacional, e, se nem ele nem o Executivo adotarem as medidas em 90 dias, o TCU decidirá a respeito.",
    ],
    correta: 4,
    explicacao:
      "No caso de contrato, a sustação é adotada diretamente pelo Congresso, que pede ao Executivo as medidas cabíveis (art. 71, § 1º). Se o Congresso ou o Executivo não efetivarem as medidas em 90 dias, o TCU decide a respeito (§ 2º). Para atos, o próprio TCU pode sustar, se não atendido.",
    origem: "banco",
  },
  {
    id: "prf-adm-010",
    materia: "adm",
    topico: "Controle da administração pública",
    enunciado:
      "Uma autarquia federal vinculada ao Ministério da Justiça e Segurança Pública toma uma decisão que contraria uma diretriz do ministério. Sobre a relação entre o ministério e a autarquia, é correto afirmar que",
    alternativas: [
      "o ministério exerce poder hierárquico pleno sobre a autarquia e pode rever de ofício qualquer decisão dela, inclusive por mérito.",
      "não há hierarquia, e sim supervisão finalística nos limites da lei; o recurso ao ministério, se previsto em lei, é o recurso hierárquico impróprio.",
      "não há nenhuma forma de controle, porque a autarquia tem personalidade jurídica própria e autonomia absoluta perante a administração direta.",
      "há hierarquia, e o recurso da decisão da autarquia ao ministério é sempre cabível, independentemente de lei, sob o nome de recurso hierárquico próprio.",
      "não há hierarquia, mas o ministério pode anular as decisões da autarquia por mera discordância de mérito, sem necessidade de previsão em lei.",
    ],
    correta: 1,
    explicacao:
      "Entre a administração direta e as entidades da indireta não há hierarquia, mas vinculação: o ministério exerce tutela (supervisão ministerial), controle finalístico limitado ao que a lei prevê. O recurso da decisão da autarquia ao ministério, quando admitido em lei, é chamado de recurso hierárquico impróprio.",
    origem: "banco",
  },
  {
    id: "prf-adm-011",
    materia: "adm",
    topico: "Agentes públicos: investidura, direitos e deveres",
    enunciado:
      "Um cidadão convocado pela Justiça Eleitoral para atuar como mesário no dia da eleição é classificado, segundo a doutrina, como",
    alternativas: [
      "agente político, porque participa diretamente do processo de escolha dos representantes do povo.",
      "servidor estatutário temporário, porque é investido em função pública por ato de nomeação.",
      "particular em colaboração com o Poder Público, na modalidade de agente requisitado.",
      "empregado público, porque presta serviço ao Estado sob subordinação durante a eleição.",
      "agente putativo, porque exerce a função sem nenhum vínculo formal com a Administração.",
    ],
    correta: 2,
    explicacao:
      "Mesários, jurados e conscritos são particulares em colaboração com o Poder Público, na modalidade de requisitados: exercem função pública por convocação, sem perder a condição de particulares e sem vínculo de cargo ou emprego.",
    origem: "banco",
  },
  {
    id: "prf-adm-012",
    materia: "adm",
    topico: "Agentes públicos: investidura, direitos e deveres",
    enunciado:
      "De acordo com o art. 37, V, da Constituição, as funções de confiança e os cargos em comissão",
    alternativas: [
      "podem ser exercidos por qualquer pessoa, mesmo sem vínculo com a Administração, e se destinam a quaisquer atribuições, inclusive técnicas.",
      "destinam-se só a direção, chefia e assessoramento; os cargos cabem só a servidores efetivos, e as funções podem ser exercidas por qualquer pessoa.",
      "destinam-se só a direção, chefia e assessoramento e só podem ser providos após aprovação em concurso público de provas ou de provas e títulos.",
      "destinam-se só a direção, chefia e assessoramento; as funções cabem só a ocupantes de cargo efetivo, e parte dos cargos cabe a servidores de carreira.",
      "destinam-se a quaisquer atribuições, inclusive técnicas e operacionais; as funções cabem só a servidores efetivos, e os cargos, só a servidores de carreira.",
    ],
    correta: 3,
    explicacao:
      "Pelo art. 37, V, as funções de confiança são exercidas exclusivamente por ocupantes de cargo efetivo, e os cargos em comissão são preenchidos por servidores de carreira nos casos, condições e percentuais mínimos da lei. Ambos se destinam apenas a direção, chefia e assessoramento.",
    origem: "banco",
  },
  {
    id: "prf-adm-013",
    materia: "adm",
    topico: "Agentes públicos: investidura, direitos e deveres",
    enunciado:
      "Um agente administrativo da PRF cuja remuneração está próxima do teto constitucional recebe diárias por uma viagem a serviço. Sobre o cálculo do teto, é correto afirmar que",
    alternativas: [
      "as diárias entram no cálculo, e o valor que ultrapassar o subsídio dos Ministros do STF deve ser cortado.",
      "as diárias não entram no cálculo, mas o limite aplicável a servidor federal é o subsídio do Presidente da República.",
      "as diárias entram no cálculo, e o limite aplicável a servidor federal do Executivo é o subsídio do Ministro de Estado ao qual ele se subordina.",
      "não há teto para servidor do Poder Executivo federal, porque o limite se aplica só aos servidores do Judiciário e do Legislativo.",
      "as diárias não entram no cálculo, por terem caráter indenizatório previsto em lei, e o limite geral é o subsídio dos Ministros do STF.",
    ],
    correta: 4,
    explicacao:
      "O teto do art. 37, XI, tem como limite geral o subsídio dos Ministros do STF (no âmbito da União, é o próprio limite). Pelo § 11 do mesmo artigo, não entram no cálculo as parcelas de caráter indenizatório previstas em lei, como as diárias.",
    origem: "banco",
  },
  {
    id: "prf-adm-014",
    materia: "adm",
    topico: "Poderes da administração",
    enunciado:
      "Numa fiscalização, a PRF retém um caminhão com pneus em mau estado até que o problema seja sanado no próprio local. Essa medida é expressão do poder",
    alternativas: [
      "disciplinar, porque o motorista se sujeita à disciplina interna da PRF enquanto trafega por rodovia federal.",
      "hierárquico, porque a PRF ocupa posição superior à do particular na relação estabelecida durante a fiscalização.",
      "de polícia e pode ser executada diretamente pela Administração, sem prévia ordem judicial, por ser autoexecutória.",
      "regulamentar, porque a retenção só vale se estiver prevista em decreto do Presidente da República, independentemente de lei.",
      "de polícia, mas só pode ser executada após autorização judicial, porque restringe o direito de propriedade do motorista.",
    ],
    correta: 2,
    explicacao:
      "Limitar o uso da propriedade em nome da segurança no trânsito é poder de polícia, que tem como atributos a discricionariedade (em regra), a coercibilidade e a autoexecutoriedade. A retenção do veículo é medida administrativa prevista no CTB e não depende de ordem judicial.",
    origem: "banco",
  },
  {
    id: "prf-adm-015",
    materia: "adm",
    topico: "Poderes da administração",
    enunciado:
      "Considere duas multas: uma aplicada a empresa contratada para a limpeza de uma unidade da PRF, por descumprir o contrato; outra aplicada a um motorista flagrado sem cinto de segurança numa rodovia federal. Elas decorrem, respectivamente, do poder",
    alternativas: [
      "de polícia e do poder disciplinar.",
      "disciplinar e do poder de polícia.",
      "hierárquico e do poder de polícia.",
      "disciplinar e do poder hierárquico.",
      "regulamentar e do poder disciplinar.",
    ],
    correta: 1,
    explicacao:
      "O poder disciplinar alcança servidores e particulares ligados à Administração por vínculo específico, como as empresas contratadas. O motorista comum não tem esse vínculo: a multa de trânsito decorre do poder de polícia, que limita a liberdade individual em favor do interesse público.",
    origem: "banco",
  },
  {
    id: "prf-adm-016",
    materia: "adm",
    topico: "Poderes da administração",
    enunciado:
      "Um chefe de seção, competente para determinar remoções, remove de ofício um servidor para uma unidade distante como forma de puni-lo por críticas feitas em reunião. Essa conduta caracteriza",
    alternativas: [
      "excesso de poder, porque o chefe atuou além dos limites da competência que a lei lhe atribui.",
      "exercício regular do poder hierárquico, porque a remoção de ofício dispensa qualquer motivação.",
      "exercício regular do poder disciplinar, porque a remoção é uma das penalidades da Lei 8.112/1990.",
      "excesso de poder, porque toda remoção de ofício depende de prévia concordância, por escrito, do servidor removido.",
      "desvio de finalidade, porque o chefe, embora competente, usou o ato para fim diverso do previsto em lei.",
    ],
    correta: 4,
    explicacao:
      "No desvio de finalidade (ou desvio de poder), o agente age dentro da sua competência, mas busca fim diverso do previsto em lei: a remoção serve à necessidade do serviço, não a punir. Excesso de poder é atuar além da competência. A remoção não está entre as penalidades do art. 127 da Lei 8.112.",
    origem: "banco",
  },
  {
    id: "prf-adm-017",
    materia: "adm",
    topico: "Princípios da administração pública",
    enunciado:
      "A PRF lança uma campanha educativa de trânsito em outdoors pagos com recursos públicos, com a foto e o nome do superintendente regional ao lado do slogan. A campanha",
    alternativas: [
      "é regular, porque a publicidade oficial pode divulgar a imagem da autoridade responsável, desde que tenha caráter educativo.",
      "viola o princípio da eficiência, porque a PRF não pode fazer campanhas de trânsito em meios de comunicação pagos.",
      "viola a impessoalidade, porque a publicidade oficial não pode conter nomes ou imagens que caracterizem promoção pessoal.",
      "é regular, porque o princípio da publicidade exige que a população conheça o nome e o rosto das autoridades que a servem.",
      "viola só a moralidade, e por isso só pode ser questionada se ficar provado que o superintendente pretende se candidatar.",
    ],
    correta: 2,
    explicacao:
      "O art. 37, § 1º, da Constituição exige que a publicidade oficial tenha caráter educativo, informativo ou de orientação social, sem nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores. É aplicação direta da impessoalidade.",
    origem: "banco",
  },
  {
    id: "prf-adm-018",
    materia: "adm",
    topico: "Princípios da administração pública",
    enunciado:
      "O diretor de uma unidade administrativa federal pretende nomear parentes seus para cargos em comissão da mesma unidade. À luz da Súmula Vinculante 13, NÃO é alcançada pela vedação ao nepotismo a nomeação de",
    alternativas: [
      "um sobrinho do diretor, parente colateral em terceiro grau.",
      "um cunhado do diretor, parente por afinidade em segundo grau.",
      "um enteado do diretor, parente por afinidade em linha reta.",
      "um primo do diretor, parente colateral em quarto grau.",
      "um irmão do diretor, parente colateral em segundo grau.",
    ],
    correta: 3,
    explicacao:
      "A Súmula Vinculante 13 veda a nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade até o terceiro grau, inclusive. Sobrinho (3º grau), cunhado (2º grau por afinidade), enteado (afinidade em linha reta) e irmão (2º grau) estão alcançados; o primo é parente de quarto grau e fica fora.",
    origem: "banco",
  },
  {
    id: "prf-adm-019",
    materia: "adm",
    topico: "Princípios da administração pública",
    enunciado:
      "Sobre os princípios que orientam a atuação da Administração Pública, é correto afirmar que, pela",
    alternativas: [
      "legalidade, o administrador pode fazer tudo o que a lei não proíbe, assim como o particular em suas relações privadas.",
      "indisponibilidade do interesse público, o administrador não pode abrir mão de direitos da Administração sem lei que o autorize.",
      "supremacia do interesse público, a Administração pode sacrificar direitos individuais sem previsão legal, se alegar interesse coletivo.",
      "eficiência, presente desde a redação original da Constituição de 1988, o resultado prevalece sobre a legalidade se gerar economia.",
      "publicidade, todos os atos administrativos devem ser divulgados, sem exceção, inclusive os que envolvem a segurança do Estado.",
    ],
    correta: 1,
    explicacao:
      "O administrador gere interesse que não lhe pertence: por isso não pode renunciar a direitos nem dispor de bens públicos sem autorização legal (indisponibilidade). Pela legalidade, só pode fazer o que a lei permite; a eficiência só entrou no art. 37 com a EC 19/1998; e o sigilo é admitido nas hipóteses legais.",
    origem: "banco",
  },
  {
    id: "prf-adm-020",
    materia: "adm",
    topico: "Responsabilidade civil do Estado",
    enunciado:
      "Uma viatura da PRF, em serviço, colide com um carro regularmente estacionado, e o proprietário quer ser indenizado. Segundo o entendimento do STF sobre o art. 37, § 6º, da Constituição,",
    alternativas: [
      "a ação deve ser proposta contra a União, que responde objetivamente e pode cobrar do motorista, em regresso, se houver dolo ou culpa.",
      "a ação pode ser proposta diretamente contra o motorista da viatura, que responde objetivamente pelos danos que causar em serviço.",
      "a ação deve ser proposta contra a PRF, órgão que responde objetivamente, e o motorista só responde em ação regressiva se agiu com dolo.",
      "a ação deve ser proposta contra a União, que só responde se o proprietário provar a culpa do motorista da viatura no acidente.",
      "a ação deve ser proposta contra a União e o motorista em conjunto, que respondem solidária e objetivamente pelos danos causados.",
    ],
    correta: 0,
    explicacao:
      "Pela teoria da dupla garantia (STF, Tema 940), a vítima aciona a pessoa jurídica, e não o agente. A União responde objetivamente pelos danos causados por agente da PRF, órgão sem personalidade jurídica, e tem direito de regresso contra o servidor que agiu com dolo ou culpa.",
    origem: "banco",
  },
  {
    id: "prf-adm-021",
    materia: "adm",
    topico: "Responsabilidade civil do Estado",
    enunciado:
      "Numa ação de indenização contra a União, ficou provado que a vítima entrou na rodovia sem respeitar a placa de parada obrigatória, mas que a viatura da PRF envolvida no acidente trafegava acima da velocidade permitida. Pela teoria do risco administrativo,",
    alternativas: [
      "a responsabilidade da União fica totalmente excluída, porque qualquer participação da vítima rompe o nexo causal.",
      "a conduta da vítima é irrelevante, porque a União responde pelo risco integral e deve indenizar todo o dano sofrido.",
      "a União só responde se a vítima provar que o motorista da viatura agiu com dolo, já que houve culpa de ambas as partes.",
      "a indenização deve ser paga só pelo motorista da viatura, sem participação da União, porque ele agiu com culpa.",
      "a culpa concorrente da vítima não exclui a responsabilidade da União, mas reduz proporcionalmente a indenização.",
    ],
    correta: 4,
    explicacao:
      "No risco administrativo, a culpa exclusiva da vítima rompe o nexo causal e exclui a responsabilidade; a culpa concorrente apenas a atenua, reduzindo a indenização na proporção da participação da vítima. O risco integral, sem excludentes, é exceção.",
    origem: "banco",
  },
  {
    id: "prf-adm-022",
    materia: "adm",
    topico: "Responsabilidade civil do Estado",
    enunciado:
      "Numa rodovia federal, um ônibus de empresa privada prestadora de serviço público de transporte coletivo atinge um ciclista que trafegava pelo acostamento. Sobre a responsabilidade da empresa perante o ciclista, que não era passageiro, segundo o STF, ela",
    alternativas: [
      "é objetiva, porque a responsabilidade das prestadoras de serviço público alcança tanto os usuários quanto os não usuários do serviço.",
      "é subjetiva, porque a responsabilidade objetiva das prestadoras de serviço público só protege os usuários do serviço, isto é, os passageiros.",
      "é objetiva, mas recai exclusivamente sobre a União, que delegou o serviço, e não sobre a empresa prestadora de serviço público.",
      "é subjetiva, porque o art. 37, § 6º, da Constituição só se aplica às pessoas jurídicas de direito público, e não a empresas privadas.",
      "inexiste, porque a vítima assumiu integralmente o risco do acidente ao circular de bicicleta pelo acostamento de uma rodovia.",
    ],
    correta: 0,
    explicacao:
      "No RE 591.874, o STF decidiu que a responsabilidade objetiva das pessoas jurídicas de direito privado prestadoras de serviço público vale perante usuários e não usuários do serviço. A conduta da vítima só afasta ou reduz a indenização se houver culpa exclusiva ou concorrente.",
    origem: "banco",
  },
  {
    id: "prf-adm-023",
    materia: "adm",
    topico: "Improbidade administrativa",
    enunciado:
      "Após a Lei 14.230/2021, sobre o elemento subjetivo exigido para a configuração de ato de improbidade administrativa, é correto afirmar que",
    alternativas: [
      "basta a culpa grave nos atos que causam lesão ao erário, e o dolo é exigido apenas nos que importam enriquecimento ilícito.",
      "exige-se dolo em todas as espécies, isto é, a vontade livre e consciente de alcançar o resultado ilícito, não bastando a voluntariedade.",
      "exige-se dolo em todas as espécies, mas ele se presume sempre que o agente público pratica um ato ilegal no exercício da função.",
      "basta a voluntariedade do agente, isto é, que ele tenha praticado o ato de forma consciente, ainda que sem intenção de obter resultado ilícito.",
      "dispensa-se o elemento subjetivo nos atos que atentam contra os princípios, bastando a demonstração objetiva da ilegalidade praticada.",
    ],
    correta: 1,
    explicacao:
      "Desde a Lei 14.230/2021, só há improbidade com dolo, nas três espécies (art. 1º, § 1º). Dolo é a vontade livre e consciente de alcançar o resultado ilícito, não bastando a voluntariedade (§ 2º), e o mero exercício da função sem prova de ato doloso com fim ilícito afasta a responsabilidade (§ 3º).",
    origem: "banco",
  },
  {
    id: "prf-adm-024",
    materia: "adm",
    topico: "Improbidade administrativa",
    enunciado:
      "Um servidor federal é condenado por ato de improbidade que atenta contra os princípios da administração pública (art. 11 da Lei 8.429/1992). Pelo texto atual da lei, ele está sujeito a",
    alternativas: [
      "perda da função pública, suspensão dos direitos políticos até 14 anos e multa equivalente ao acréscimo patrimonial.",
      "perda da função pública, suspensão dos direitos políticos até 12 anos e multa equivalente ao valor do dano causado.",
      "multa de até 24 vezes a remuneração e proibição de contratar com o poder público pelo prazo de até 4 anos.",
      "multa de até 100 vezes a remuneração, perda da função pública e suspensão dos direitos políticos de 3 a 5 anos.",
      "apenas ressarcimento do dano, porque esse tipo de ato não admite sanções enquanto não houver prejuízo ao erário.",
    ],
    correta: 2,
    explicacao:
      "Pelo art. 12, III, os atos do art. 11 sujeitam o agente a multa civil de até 24 vezes a remuneração e a proibição de contratar com o poder público ou de receber benefícios por até 4 anos. Não há mais perda da função nem suspensão dos direitos políticos para essa espécie (as regras de 100 vezes e de 3 a 5 anos eram do texto anterior a 2021).",
    origem: "banco",
  },
  {
    id: "prf-adm-025",
    materia: "adm",
    topico: "Improbidade administrativa",
    enunciado:
      "Num fim de semana, um servidor usa, por conta própria, a caminhonete da unidade da PRF em que trabalha para fazer a mudança da família. Pela Lei 8.429/1992, comprovado o dolo, a conduta configura",
    alternativas: [
      "ato de improbidade que causa lesão ao erário, pois a lei enquadra nessa espécie o próprio uso do veículo pelo servidor que o dirige.",
      "mera infração disciplinar, pois o uso de veículo oficial em proveito próprio não está previsto em nenhuma das espécies de improbidade administrativa.",
      "ato de improbidade que atenta contra os princípios, pois o uso de bem público em proveito próprio não gera vantagem patrimonial.",
      "crime de peculato, apenas, pois a mesma conduta não pode ser, ao mesmo tempo, ilícito penal e ato de improbidade administrativa.",
      "ato de improbidade que importa enriquecimento ilícito, pois o servidor utilizou em serviço particular veículo à disposição da Administração.",
    ],
    correta: 4,
    explicacao:
      "O art. 9º, IV, enquadra como enriquecimento ilícito utilizar em obra ou serviço particular bem móvel da entidade, ou o trabalho de servidores e terceirizados. Se o servidor apenas permitisse que outra pessoa usasse o veículo, a conduta se enquadraria no art. 10, XIII (lesão ao erário).",
    origem: "banco",
  },
  {
    id: "prf-adm-026",
    materia: "adm",
    topico: "Serviços públicos",
    enunciado:
      "Sobre as formas de extinção da concessão de serviço público previstas na Lei 8.987/1995, é correto afirmar que",
    alternativas: [
      "a encampação decorre de inexecução do contrato pela concessionária e é declarada por decreto, após processo administrativo com ampla defesa.",
      "a caducidade é a retomada do serviço por interesse público, durante o prazo da concessão, mediante lei autorizativa e indenização prévia.",
      "a rescisão por iniciativa da concessionária depende de ação judicial, e o serviço não pode ser paralisado até o trânsito em julgado.",
      "a rescisão por iniciativa da concessionária pode ser feita por simples notificação, e o serviço pode ser interrompido logo em seguida.",
      "a encampação dispensa lei e indenização, porque o poder concedente pode retomar o serviço a qualquer tempo por mera conveniência.",
    ],
    correta: 2,
    explicacao:
      "Pelo art. 39, a concessionária só rescinde o contrato por ação judicial, e o serviço continua até o trânsito em julgado. A encampação é a retomada por interesse público, com lei autorizativa e indenização prévia (art. 37); a caducidade decorre da inexecução pela concessionária e é declarada por decreto após processo com ampla defesa (art. 38).",
    origem: "banco",
  },
  {
    id: "prf-adm-027",
    materia: "adm",
    topico: "Serviços públicos",
    enunciado:
      "Uma concessionária de energia elétrica pretende interromper o fornecimento a um consumidor inadimplente. Pela Lei 8.987/1995, a interrupção",
    alternativas: [
      "é vedada em qualquer hipótese, porque o princípio da continuidade impede a suspensão de serviço essencial por falta de pagamento.",
      "é permitida após aviso prévio, mas não pode começar na sexta-feira, no sábado, no domingo, em feriado ou na véspera de feriado.",
      "é permitida sem aviso prévio, em qualquer dia da semana, porque o inadimplemento do usuário rompe automaticamente o contrato de fornecimento.",
      "é permitida após aviso prévio, mas só pode ocorrer nos fins de semana e feriados, para reduzir o impacto sobre as atividades do consumidor.",
      "depende sempre de autorização judicial prévia, porque a suspensão de serviço público essencial só pode ser determinada por um juiz.",
    ],
    correta: 1,
    explicacao:
      "O art. 6º, § 3º, II, admite a interrupção por inadimplemento do usuário, após aviso prévio e considerado o interesse da coletividade, sem que isso caracterize descontinuidade. O § 4º, incluído em 2020, proíbe que o corte comece na sexta-feira, no sábado, no domingo, em feriado ou no dia anterior a feriado.",
    origem: "banco",
  },
  {
    id: "prf-adm-028",
    materia: "adm",
    topico: "Serviços públicos",
    enunciado:
      "Na comparação entre concessão e permissão de serviço público, segundo a Lei 8.987/1995, é correto afirmar que",
    alternativas: [
      "a concessão pode ser outorgada a pessoa física, e a permissão, só a pessoa jurídica ou consórcio de empresas, por prazo determinado.",
      "a permissão dispensa licitação, por ser ato unilateral e precário, ao passo que a concessão sempre exige licitação prévia.",
      "a concessão é delegada a título precário e revogável a qualquer tempo, ao passo que a permissão tem prazo determinado e é irrevogável.",
      "a permissão é delegada a título precário, a pessoa física ou jurídica, e formalizada por contrato de adesão revogável unilateralmente.",
      "ambas podem ser outorgadas a pessoa física, por prazo indeterminado e sem licitação, quando o serviço delegado for de pequeno valor econômico.",
    ],
    correta: 3,
    explicacao:
      "Pela Lei 8.987, a permissão é delegação a título precário, mediante licitação, a pessoa física ou jurídica (art. 2º, IV), formalizada por contrato de adesão, com precariedade e revogabilidade unilateral (art. 40). A concessão vai só a pessoa jurídica ou consórcio de empresas, por prazo determinado (art. 2º, II).",
    origem: "banco",
  },
  {
    id: "prf-adm-029",
    materia: "adm",
    topico: "Organização administrativa",
    enunciado:
      "A Polícia Rodoviária Federal integra a estrutura do Ministério da Justiça e Segurança Pública. Do ponto de vista da organização administrativa, a PRF",
    alternativas: [
      "é autarquia federal, com personalidade jurídica de direito público, criada por descentralização administrativa.",
      "é órgão da administração direta da União, sem personalidade jurídica, fruto de desconcentração administrativa.",
      "é empresa pública federal, com personalidade jurídica de direito privado, criada mediante autorização legal.",
      "é órgão da administração indireta, com personalidade jurídica própria, vinculado ao ministério por supervisão.",
      "é fundação pública federal, com personalidade jurídica de direito público, criada por descentralização administrativa.",
    ],
    correta: 1,
    explicacao:
      "A PRF é órgão da administração direta da União: centro de competências sem personalidade jurídica, criado por desconcentração dentro da mesma pessoa jurídica. Pela teoria do órgão, sua atuação é imputada à União, que responde pelos atos de seus agentes.",
    origem: "banco",
  },
  {
    id: "prf-adm-030",
    materia: "adm",
    topico: "Organização administrativa",
    enunciado:
      "Segundo o art. 37, XIX, da Constituição, sobre a criação das entidades da administração indireta, é correto afirmar que",
    alternativas: [
      "só a autarquia é criada diretamente por lei específica; a empresa pública, a sociedade de economia mista e a fundação têm a instituição autorizada por lei.",
      "todas as entidades da administração indireta são criadas diretamente por lei específica, dispensado o registro dos atos constitutivos.",
      "a autarquia tem sua instituição apenas autorizada por lei específica, e a empresa pública e a sociedade de economia mista são criadas diretamente pela própria lei.",
      "todas as entidades da administração indireta podem ser criadas por decreto do chefe do Executivo, sem necessidade de lei específica.",
      "a autarquia e a fundação são criadas por lei complementar, e a empresa pública e a sociedade de economia mista, por decreto.",
    ],
    correta: 0,
    explicacao:
      "Pelo art. 37, XIX, somente por lei específica pode ser criada autarquia e autorizada a instituição de empresa pública, sociedade de economia mista e fundação; à lei complementar cabe definir as áreas de atuação das fundações. As entidades de direito privado ganham personalidade com o registro dos atos constitutivos.",
    origem: "banco",
  },
  {
    id: "prf-adm-031",
    materia: "adm",
    topico: "Organização administrativa",
    enunciado:
      "Sobre as empresas públicas e as sociedades de economia mista federais, é correto afirmar que",
    alternativas: [
      "a empresa pública deve adotar a forma de sociedade anônima, e a sociedade de economia mista pode adotar qualquer forma societária.",
      "ambas têm capital integralmente público e se diferenciam só pela atividade: serviço público ou exploração de atividade econômica.",
      "a sociedade de economia mista federal tem suas causas julgadas pela Justiça Federal, e a empresa pública federal, pela Justiça Estadual.",
      "a empresa pública tem capital integralmente público, e as causas da empresa pública federal, em regra, tramitam na Justiça Federal.",
      "a sociedade de economia mista tem a maioria do capital votante em mãos privadas, e o ente público detém só ações sem direito a voto.",
    ],
    correta: 3,
    explicacao:
      "A empresa pública tem capital integralmente público e pode adotar qualquer forma societária; a sociedade de economia mista é sempre sociedade anônima, com a maioria das ações com direito a voto em mãos do ente público. A empresa pública federal litiga na Justiça Federal (art. 109, I); a sociedade de economia mista, na Justiça Estadual (Súmula 556 do STF).",
    origem: "banco",
  },
  {
    id: "prf-adm-032",
    materia: "adm",
    topico: "Lei 8.112/1990",
    enunciado:
      "Um servidor estável da PRF foi demitido, mas a demissão foi anulada por decisão judicial anos depois. Nesse meio-tempo, o cargo dele foi ocupado por outro servidor estável, vindo de outro cargo. Pela Lei 8.112/1990, o servidor demitido retorna por",
    alternativas: [
      "reintegração, com ressarcimento de todas as vantagens, e o ocupante do cargo é reconduzido ao cargo de origem, sem direito a indenização.",
      "reversão, sem ressarcimento das vantagens do período, e o ocupante do cargo é exonerado de ofício, com direito a indenização pelos prejuízos.",
      "recondução, com ressarcimento de todas as vantagens, e o ocupante do cargo é posto em disponibilidade com remuneração integral.",
      "aproveitamento, sem ressarcimento das vantagens, e o ocupante do cargo permanece nele até se aposentar ou ser promovido.",
      "readaptação, com ressarcimento apenas parcial das vantagens, e o ocupante do cargo é demitido para abrir a vaga ao servidor que retorna.",
    ],
    correta: 0,
    explicacao:
      "Reintegração é a reinvestidura do servidor estável cuja demissão foi invalidada, com ressarcimento de todas as vantagens (art. 28). Se o cargo estiver provido, o ocupante é reconduzido ao cargo de origem sem indenização, aproveitado em outro cargo ou posto em disponibilidade (§ 2º).",
    origem: "banco",
  },
  {
    id: "prf-adm-033",
    materia: "adm",
    topico: "Lei 8.112/1990",
    enunciado:
      "Um candidato aprovado em concurso para agente administrativo da PRF é nomeado. Pela Lei 8.112/1990,",
    alternativas: [
      "se não tomar posse em 30 dias da publicação do ato, será exonerado; se tomar posse e não entrar em exercício em 15 dias, a nomeação será tornada sem efeito.",
      "se não tomar posse em 15 dias da publicação do ato, a nomeação será tornada sem efeito; se tomar posse e não entrar em exercício em 30 dias, será exonerado.",
      "a posse deve ser pessoal, vedada a procuração, e o prazo para tomar posse é de 30 dias, contados da data da homologação do concurso.",
      "a posse e o exercício ocorrem no mesmo ato, e o candidato que não comparecer em 30 dias perde a vaga e é demitido do serviço público.",
      "se não tomar posse em 30 dias da publicação do ato, a nomeação será tornada sem efeito; se tomar posse e não entrar em exercício em 15 dias, será exonerado.",
    ],
    correta: 4,
    explicacao:
      "A posse ocorre em até 30 dias da publicação do ato de provimento; se não ocorrer, o ato é tornado sem efeito (art. 13, §§ 1º e 6º). Empossado, o servidor tem 15 dias para entrar em exercício; se não entrar, é exonerado (art. 15, §§ 1º e 2º). A posse pode ser dada por procuração específica.",
    origem: "banco",
  },
  {
    id: "prf-adm-034",
    materia: "adm",
    topico: "Lei 8.112/1990",
    enunciado:
      "Sobre a remoção e a redistribuição na Lei 8.112/1990, é correto afirmar que",
    alternativas: [
      "na remoção, desloca-se o cargo para outro órgão do mesmo Poder; na redistribuição, desloca-se o servidor no âmbito do mesmo quadro.",
      "na remoção, desloca-se o servidor no âmbito do mesmo quadro; na redistribuição, desloca-se o cargo efetivo, ocupado ou vago, para outro órgão do mesmo Poder.",
      "a remoção sempre depende do interesse da Administração, inclusive quando o servidor pede para acompanhar o cônjuge que foi deslocado no interesse do serviço.",
      "a redistribuição só alcança cargos vagos e pode ser feita para órgão de outro Poder, desde que haja concordância do servidor envolvido.",
      "a remoção a pedido por motivo de saúde dispensa comprovação, bastando a declaração do servidor sobre o problema que o acomete.",
    ],
    correta: 1,
    explicacao:
      "Remoção é o deslocamento do servidor, com ou sem mudança de sede, no âmbito do mesmo quadro (art. 36). Redistribuição é o deslocamento do cargo efetivo, ocupado ou vago, para outro órgão ou entidade do mesmo Poder (art. 37). A remoção para acompanhar cônjuge deslocado no interesse da Administração e a por saúde, comprovada por junta médica, independem do interesse da Administração.",
    origem: "banco",
  },
  {
    id: "prf-adm-035",
    materia: "adm",
    topico: "Lei 8.112/1990",
    enunciado:
      "Um agente administrativo da PRF, estável e com seis anos de efetivo exercício, avalia seus direitos na Lei 8.112/1990. É correto afirmar que ele",
    alternativas: [
      "tem direito a licença para tratar de interesses particulares por até três anos, com remuneração integral, a ser concedida quando ele pedir.",
      "pode acumular até três períodos de férias por necessidade do serviço, e as faltas ao serviço podem ser descontadas desses períodos.",
      "pode, no interesse da Administração, afastar-se com remuneração por até três meses para capacitação, mas os períodos não se acumulam.",
      "pode incorporar ao vencimento as diárias recebidas em viagens a serviço, desde que as receba por mais de cinco anos consecutivos.",
      "tem direito a licença para capacitação de seis meses por quinquênio, com remuneração, podendo acumular os períodos não usufruídos.",
    ],
    correta: 2,
    explicacao:
      "Pelo art. 87, após cada quinquênio de efetivo exercício, o servidor pode, no interesse da Administração, afastar-se com remuneração por até três meses para capacitação, e esses períodos não são acumuláveis. A licença para interesses particulares é sem remuneração e a critério da Administração (art. 91); as férias acumulam no máximo dois períodos (art. 77); e as indenizações não se incorporam (art. 49, § 1º).",
    origem: "banco",
  },
  {
    id: "prf-adm-036",
    materia: "adm",
    topico: "Processo administrativo (Lei 9.784/1999)",
    enunciado:
      "De acordo com a Lei 9.784/1999, sobre a delegação e a avocação de competência, é correto afirmar que",
    alternativas: [
      "pode ser delegada a decisão de recursos administrativos, desde que o delegado seja hierarquicamente subordinado ao delegante.",
      "a delegação é irrevogável durante o prazo fixado no ato, e as decisões tomadas por delegação consideram-se editadas pelo delegante.",
      "a delegação pode alcançar órgão não subordinado, é revogável a qualquer tempo, e as decisões se consideram editadas pelo delegado.",
      "a avocação é a regra na Administração e pode ser permanente, dispensando motivação quando o órgão superior estiver sobrecarregado.",
      "podem ser delegados os atos de caráter normativo, desde que a delegação seja publicada no meio oficial e tenha prazo determinado.",
    ],
    correta: 2,
    explicacao:
      "A delegação pode ser feita a órgãos ou titulares não subordinados hierarquicamente (art. 12), é revogável a qualquer tempo, e as decisões adotadas por delegação se consideram editadas pelo delegado (art. 14). Não se delegam atos normativos, decisão de recursos nem matérias de competência exclusiva (art. 13); a avocação é excepcional e temporária (art. 15).",
    origem: "banco",
  },
  {
    id: "prf-adm-037",
    materia: "adm",
    topico: "Processo administrativo (Lei 9.784/1999)",
    enunciado:
      "Uma unidade da PRF indefere o pedido de uma associação que queria realizar uma campanha educativa no pátio da unidade. Não havendo lei específica sobre o processo, pela Lei 9.784/1999,",
    alternativas: [
      "o prazo para recorrer é de 15 dias; o recurso vai direto à autoridade superior, e a sua interposição depende de caução prestada previamente pela associação.",
      "o prazo para recorrer é de 10 dias; o recurso tem sempre efeito suspensivo e pode tramitar por quantas instâncias a associação desejar.",
      "o prazo para recorrer é de 30 dias; o recurso vai à autoridade que decidiu, que não pode reconsiderar, e tramita por no máximo duas instâncias.",
      "o prazo para recorrer é de 5 dias; o recurso só pode tratar de legalidade, e não de mérito, e deve ser decidido em até 10 dias.",
      "o prazo para recorrer é de 10 dias; o recurso vai à autoridade que decidiu, que pode reconsiderar em 5 dias, e em regra não tem efeito suspensivo.",
    ],
    correta: 4,
    explicacao:
      "Pela Lei 9.784, o recurso é interposto em 10 dias (art. 59) e dirigido à autoridade que decidiu, que pode reconsiderar em 5 dias antes de encaminhá-lo à superior (art. 56, § 1º). Tramita por no máximo três instâncias (art. 57), independe de caução (art. 56, § 2º) e, salvo lei em contrário, não tem efeito suspensivo (art. 61).",
    origem: "banco",
  },
  {
    id: "prf-adm-038",
    materia: "adm",
    topico: "Processo administrativo (Lei 9.784/1999)",
    enunciado:
      "Num processo administrativo da PRF, o servidor designado para instruir o caso é amigo íntimo do interessado, e outro servidor da equipe já atuou como testemunha no mesmo processo. Pela Lei 9.784/1999, há",
    alternativas: [
      "impedimento no primeiro caso e suspeição no segundo, e ambos devem se afastar obrigatoriamente, sob pena de nulidade absoluta.",
      "impedimento nos dois casos, e a omissão em comunicá-lo é irrelevante se a decisão final for favorável ao interessado.",
      "suspeição nos dois casos, que só pode ser reconhecida se o interessado a alegar antes do início da instrução do processo.",
      "suspeição no primeiro caso e impedimento no segundo, e o servidor impedido que não comunicar o fato comete falta grave.",
      "suspeição no primeiro caso e nenhum vício no segundo, porque ter sido testemunha não afeta a imparcialidade do servidor.",
    ],
    correta: 3,
    explicacao:
      "Amizade íntima ou inimizade notória geram suspeição (art. 20). Ter participado como perito, testemunha ou representante gera impedimento (art. 18, II), e o servidor impedido deve comunicar o fato à autoridade; a omissão constitui falta grave para efeitos disciplinares (art. 19).",
    origem: "banco",
  },
  {
    id: "prf-adm-039",
    materia: "adm",
    topico: "Processo administrativo (Lei 9.784/1999)",
    enunciado:
      "Sobre a possibilidade de agravamento da situação do interessado nos meios de impugnação previstos na Lei 9.784/1999, é correto afirmar que",
    alternativas: [
      "o agravamento é vedado tanto no recurso quanto na revisão, porque nenhum meio de impugnação pode piorar a situação jurídica de quem o utiliza.",
      "o agravamento é admitido no recurso, desde que o recorrente seja cientificado para se manifestar antes da decisão, mas é vedado na revisão.",
      "o agravamento é admitido tanto no recurso quanto na revisão, desde que a autoridade fundamente a decisão em fatos novos.",
      "o agravamento é vedado no recurso, mas admitido na revisão, que só pode ser pedida no prazo de cinco anos da decisão definitiva.",
      "o agravamento é admitido no recurso sem qualquer formalidade, e a revisão só pode ser feita a pedido, nunca de ofício.",
    ],
    correta: 1,
    explicacao:
      "No recurso, a decisão pode confirmar, modificar, anular ou revogar a decisão recorrida; se puder haver gravame, o recorrente é cientificado para alegar antes (art. 64). A revisão de processos de que resultem sanções cabe a qualquer tempo, a pedido ou de ofício, diante de fatos novos, e dela não pode resultar agravamento da sanção (art. 65).",
    origem: "banco",
  },
];
