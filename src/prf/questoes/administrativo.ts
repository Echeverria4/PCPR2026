import type { QuestaoPrf } from "../../data/prf";

export const QUESTOES_PRF_ADM: QuestaoPrf[] = [
  {
    id: "prf-adm-001",
    materia: "adm",
    topico: "Ato administrativo",
    subassunto: "Elementos vinculados e discricionários; controle judicial do mérito",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: elementos do ato discricionário, controle judicial e efeitos da revogação",
    enunciado:
      "O chefe de uma unidade da PRF, com base em norma que lhe permite ceder espaços ociosos sem prejuízo ao serviço, autorizou uma associação de servidores a usar o auditório da unidade num sábado. Sobre esse ato, considere as afirmativas:\n\nI. Competência, finalidade e forma são elementos vinculados, ao passo que motivo e objeto compõem o mérito da autorização.\nII. Por ser discricionária, a autorização escapa ao controle judicial, salvo quanto à competência de quem a expediu.\nIII. O Judiciário pode anular a autorização se ela for desarrazoada ou desproporcional, mas não pode substituir a escolha do chefe pela que considere mais conveniente.\nIV. Se o chefe revogar a autorização por conveniência, a revogação produzirá efeitos retroativos à data em que o ato foi praticado.\n\nEstá correto o que se afirma em",
    alternativas: ["I e III, apenas.", "I e II, apenas.", "I, III e IV, apenas.", "II e IV, apenas.", "I, II e III, apenas."],
    correta: 0,
    explicacao:
      "A afirmativa I está correta: na lição clássica, competência, finalidade e forma são elementos vinculados, e o mérito do ato discricionário está no motivo e no objeto, onde a lei deixa margem de escolha. A III também está: o controle judicial alcança a legalidade em sentido amplo, inclusive a razoabilidade e a proporcionalidade da escolha, mas o juiz não troca o juízo de conveniência do chefe pelo seu. Logo, I e III.",
    explicacaoErradas:
      "A afirmativa II está errada: a discricionariedade não afasta o controle judicial, que alcança os elementos vinculados (competência, finalidade e forma), a existência e a veracidade dos motivos declarados e a razoabilidade da escolha. A IV também: a revogação retira o ato por conveniência e oportunidade e produz efeitos ex nunc, preservando os já produzidos; o efeito retroativo, em regra, é próprio da anulação. Por isso caem as combinações com II ou IV.",
    pegadinha:
      "A afirmativa II parte de uma ideia certa — o Judiciário não revê o mérito do ato discricionário — e chega a uma conclusão errada, como se, fora da competência, nada pudesse ser controlado.",
    conhecimento:
      "Elementos do ato (Lei 4.717/1965, art. 2º): competência, finalidade e forma são vinculados; motivo e objeto, quando a lei dá margem de escolha, formam o mérito. O Judiciário controla a legalidade, inclusive a proporcionalidade, sem substituir o juízo de conveniência. Revogação: por conveniência, ex nunc, só pela Administração; anulação: por ilegalidade, em regra ex tunc (Súmula 473 do STF; Lei 9.784/1999, art. 53).",
    origem: "banco",
  },
  {
    id: "prf-adm-002",
    materia: "adm",
    topico: "Ato administrativo",
    subassunto: "Atributos do ato: presunção de legitimidade, imperatividade e autoexecutoriedade",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: presunção relativa e diferença entre exigibilidade e executoriedade da multa",
    enunciado:
      "Um motorista foi autuado pela PRF por ultrapassar em faixa contínua numa rodovia federal. Apresentou defesa, alegando que não fez a manobra, mas ela foi rejeitada, e a multa continua sem pagamento. À luz dos atributos do ato administrativo e do Código de Trânsito, é correto afirmar que",
    alternativas: [
      "a presunção de legitimidade da multa é absoluta, e por isso a negativa do motorista não poderia ser examinada nem na via administrativa nem na judicial.",
      "a imperatividade da multa depende da assinatura do auto pelo motorista, e, sem ela, a Administração só pode cobrar o valor após condenação judicial transitada em julgado.",
      "a autoexecutoriedade permite à Administração bloquear valores na conta bancária do motorista para quitar a multa, sem processo judicial, desde que antes o notifique da decisão administrativa final.",
      "cabia ao motorista provar que não fez a ultrapassagem, pela presunção de legitimidade, e a cobrança forçada da multa exige execução fiscal, embora o licenciamento dependa do pagamento.",
      "a presunção de veracidade, por ser relativa, obrigava o agente a provar a ultrapassagem com imagens ou testemunhas, e a falta dessa prova torna a autuação nula de pleno direito.",
    ],
    correta: 3,
    explicacao:
      "A presunção de legitimidade e de veracidade do auto de infração é relativa: admite prova em contrário, mas inverte o ônus, e cabia ao motorista demonstrar que não fez a ultrapassagem. A multa é imperativa e exigível — o CTB condiciona o licenciamento à quitação das multas (art. 131, § 2º), meio indireto de coerção —, mas não é executória: a cobrança forçada depende de inscrição em dívida ativa e de execução fiscal.",
    explicacaoErradas:
      "A presunção não é absoluta: a negativa do motorista pode ser examinada na defesa, nos recursos e em juízo. A imperatividade não depende da assinatura do autuado, que o CTB exige apenas “sempre que possível”, valendo como notificação (art. 280, VI); a infração se comprova pela declaração do agente (art. 280, § 2º). Bloquear valores em conta sem processo judicial seria executoriedade que a lei não confere à multa. E a relatividade da presunção não transfere ao agente o ônus da prova: a declaração dele já é meio de prova, e quem a contesta é que deve demonstrar o contrário.",
    pegadinha:
      "Confundir exigibilidade com executoriedade. A multa é exigível — a Administração pressiona o pagamento por meios indiretos, como a exigência de quitação para o licenciamento —, mas não executória, porque a cobrança forçada passa pelo Judiciário. A Súmula 127 do STJ só considera ilegal condicionar a renovação da licença ao pagamento de multa da qual o infrator não foi notificado.",
    conhecimento:
      "Atributos: presunção de legitimidade e veracidade (relativa, inverte o ônus da prova), imperatividade, exigibilidade (coerção indireta) e executoriedade (execução material direta, só com previsão legal ou em urgência). Multa de trânsito: exigível (CTB, art. 131, § 2º), não executória (inscrição em dívida ativa e execução fiscal, Lei 6.830/1980). Súmula 127 do STJ.",
    origem: "banco",
  },
  {
    id: "prf-adm-003",
    materia: "adm",
    topico: "Ato administrativo",
    subassunto: "Teoria dos motivos determinantes na exoneração ad nutum",
    dificuldade: 5,
    raciocinio: "Análise de caso: motivo declarado e inexistente em ato que dispensava motivação",
    enunciado:
      "O diretor de um órgão federal exonerou o ocupante de um cargo em comissão de assessor, declarando no ato que o motivo era a “extinção do cargo em reestruturação administrativa”. Dias depois, o mesmo cargo foi provido por outra pessoa, sem nenhuma alteração na estrutura do órgão. Nessa situação,",
    alternativas: [
      "a exoneração é válida, pois, sendo ad nutum, dispensava motivação, e o motivo declarado, por ser desnecessário, não integra o ato nem condiciona sua validade.",
      "a exoneração é inválida, mas o vício pode ser convalidado pela própria autoridade, desde que ela edite novo ato apontando o motivo verdadeiro, com efeitos retroativos à data da exoneração.",
      "a exoneração é inválida, porque o motivo declarado, embora dispensável, vincula o ato e se revelou inexistente, sem que isso confira ao exonerado estabilidade no cargo.",
      "a exoneração é válida, porque a teoria dos motivos determinantes se aplica apenas aos atos vinculados, e a exoneração de cargo em comissão é ato discricionário.",
      "a exoneração é inválida por desvio de finalidade, e o exonerado tem direito a ser mantido no cargo até o fim da gestão do diretor, como forma de reparação.",
    ],
    correta: 2,
    explicacao:
      "Pela teoria dos motivos determinantes, o motivo declarado passa a integrar o ato e condiciona sua validade, ainda que a lei dispensasse a motivação, como na exoneração ad nutum de cargo em comissão (CF, art. 37, II). Provido o mesmo cargo dias depois, sem reestruturação, o motivo “extinção do cargo” revelou-se inexistente, e o ato é inválido. A invalidação não torna estável o cargo em comissão: a autoridade continua podendo exonerar livremente, desde que não invoque motivo falso.",
    explicacaoErradas:
      "Ser ad nutum não impede que o motivo declarado vincule o ato; é justamente nesses casos que a teoria costuma ser aplicada, e ela vale tanto para atos vinculados quanto para discricionários. O vício de motivo inexistente é insanável, porque não se convalida um fato que não ocorreu — trocar o motivo por outro, retroativamente, fraudaria a teoria. E não há direito de permanecer no cargo em comissão até o fim de uma gestão: a anulação apenas desfaz a exoneração viciada.",
    pegadinha:
      "Achar que, por dispensar motivação, a exoneração ad nutum fica imune ao motivo que a autoridade escolheu declarar. Quem declara o motivo se vincula a ele: se é falso, o ato cai, mas a livre exoneração continua possível com outro ato, sem motivo falso.",
    conhecimento:
      "Teoria dos motivos determinantes: a validade do ato fica vinculada à existência e à veracidade dos motivos declarados, mesmo quando a motivação era dispensável. Cargo em comissão: livre nomeação e exoneração (CF, art. 37, II; Lei 8.112/1990, art. 35, I). Motivo inexistente: vício insanável, que leva à anulação (Lei 4.717/1965, art. 2º, parágrafo único, “d”).",
    origem: "banco",
  },
  {
    id: "prf-adm-004",
    materia: "adm",
    topico: "Ato administrativo",
    subassunto: "Convalidação: vícios sanáveis e insanáveis (art. 55 da Lei 9.784/1999)",
    dificuldade: 4,
    raciocinio: "Classificação: identificar quais vícios admitem convalidação",
    enunciado:
      "Em auditoria interna numa unidade da PRF, foram encontrados os atos a seguir, todos sem lesão ao interesse público nem prejuízo a terceiros:\n\nI. portaria de concessão de diária assinada por servidor sem competência para o ato, em matéria que não é de competência exclusiva;\nII. concessão de férias em que se deixou de observar uma formalidade não essencial prevista em norma interna;\nIII. aplicação a servidor de penalidade disciplinar não prevista em lei;\nIV. indeferimento de pedido baseado em fato que, comprovadamente, não ocorreu.\n\nPelo art. 55 da Lei 9.784/1999 e pela doutrina majoritária, podem ser convalidados os atos descritos em",
    alternativas: ["I, II e IV, apenas.", "II, apenas.", "I, II e III, apenas.", "I e II, apenas.", "II e IV, apenas."],
    correta: 3,
    explicacao:
      "Pelo art. 55 da Lei 9.784/1999, só podem ser convalidados os atos com defeitos sanáveis, quando a decisão evidencie não haver lesão ao interesse público nem prejuízo a terceiros. Para a doutrina majoritária, são sanáveis o vício de competência, salvo quando ela for exclusiva, e o de forma, salvo quando a forma for essencial. O ato I tem vício de competência não exclusiva, que a autoridade competente pode ratificar; o II, vício de forma não essencial. Logo, I e II.",
    explicacaoErradas:
      "O ato III tem vício de objeto: penalidade não prevista em lei tem conteúdo ilícito, e o objeto ilícito não se convalida. O IV tem vício de motivo: o fato que fundamentou o indeferimento não ocorreu, e um motivo inexistente não pode ser sanado. Por isso caem as combinações com III ou IV e a que deixa de fora o ato descrito em I.",
    pegadinha:
      "A ausência de lesão e de prejuízo, dita no enunciado para todos os atos, é condição necessária, mas não suficiente: o art. 55 exige também que o defeito seja sanável. Vícios de motivo, objeto e finalidade continuam insanáveis, ainda que ninguém tenha sido prejudicado.",
    conhecimento:
      "Lei 9.784/1999, art. 55: “Em decisão na qual se evidencie não acarretarem lesão ao interesse público nem prejuízo a terceiros, os atos que apresentarem defeitos sanáveis poderão ser convalidados pela própria Administração.” Sanáveis: competência não exclusiva e forma não essencial. Insanáveis: motivo, objeto e finalidade. A convalidação retroage à data do ato.",
    origem: "banco",
  },
  {
    id: "prf-adm-005",
    materia: "adm",
    topico: "Anulação, revogação e prescrição",
    subassunto: "Limites da revogação: atos irrevogáveis",
    dificuldade: 4,
    raciocinio: "Classificação: identificar o único ato ainda passível de revogação",
    enunciado:
      "A Súmula 473 do STF e a Lei 9.784/1999 permitem à Administração revogar seus atos por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos. Considerando os limites da revogação apontados pela doutrina, a Administração pode revogar",
    alternativas: [
      "a autorização de uso de espaço público concedida a título precário, ainda em vigor, por ter deixado de ser conveniente, respeitados os efeitos já produzidos.",
      "a certidão de tempo de contribuição emitida a pedido de um servidor, por considerar que a informação nela contida deixou de ser conveniente à Administração.",
      "o ato de concessão de férias já integralmente gozadas pelo servidor, com efeitos ex tunc, para que os dias sejam descontados do período seguinte.",
      "a nomeação de um candidato aprovado, já empossado e em exercício, porque a Administração mudou o juízo de conveniência sobre o preenchimento do cargo naquele ano.",
      "uma penalidade disciplinar já aplicada e cumprida, por entender que, diante das circunstâncias, a punição foi exagerada.",
    ],
    correta: 0,
    explicacao:
      "A revogação retira, por conveniência e oportunidade, um ato válido e discricionário que ainda produz efeitos, com eficácia ex nunc. A autorização de uso precária, ainda em vigor, é o exemplo típico: pode ser revogada quando deixar de convir, respeitados os efeitos já produzidos.",
    explicacaoErradas:
      "A doutrina aponta como irrevogáveis os atos enunciativos, como a certidão, que apenas atesta um fato; os exauridos, como as férias já gozadas e a penalidade já cumprida, cujos efeitos se esgotaram — e a revogação, além disso, nunca retroage; e os que geraram direito adquirido, como a nomeação seguida de posse e exercício, que só se desfaz pelas vias legais de vacância. Também são irrevogáveis os atos vinculados.",
    pegadinha:
      "Para a penalidade considerada exagerada, a via não é a revogação: a Lei 8.112/1990 prevê a revisão do processo disciplinar, a qualquer tempo, a pedido ou de ofício, quando surgirem fatos novos ou circunstâncias que justifiquem a inocência do punido ou a inadequação da penalidade (art. 174).",
    conhecimento:
      "Súmula 473 do STF e Lei 9.784/1999, art. 53: a Administração deve anular seus atos ilegais e pode revogá-los por conveniência ou oportunidade, respeitados os direitos adquiridos. Não podem ser revogados: atos vinculados, exauridos, enunciativos (certidões, atestados, pareceres), que geraram direito adquirido, que integram procedimento já superado e os declarados irrevogáveis por lei.",
    origem: "banco",
  },
  {
    id: "prf-adm-006",
    materia: "adm",
    topico: "Anulação, revogação e prescrição",
    subassunto: "Decadência do direito de anular (art. 54, §§ 1º e 2º)",
    dificuldade: 5,
    raciocinio: "Cálculo de prazo: termo inicial com efeitos contínuos e medida de impugnação",
    enunciado:
      "Desde março de 2020, um servidor de boa-fé recebe, por erro de interpretação da lei pela Administração, uma gratificação em valor superior ao devido. Em fevereiro de 2025, o órgão instaurou processo para rever o pagamento e notificou o servidor para se defender. A anulação do ato que fixou o valor foi decidida em outubro de 2026. Pelo art. 54 da Lei 9.784/1999,",
    alternativas: [
      "o direito de anular decaiu em março de 2025, porque a instauração do processo não interfere no prazo, que só se considera exercido com a decisão final de anulação.",
      "o direito de anular nunca decairia nessa hipótese, porque o prazo de cinco anos se aplica apenas a atos praticados com má-fé do beneficiário.",
      "o prazo de decadência começou a correr em fevereiro de 2025, com a instauração do processo, e a anulação poderá ocorrer até fevereiro de 2030.",
      "a anulação é válida, porque, tratando-se de pagamento indevido feito pela própria Administração, o prazo para anular é de dez anos, e não de cinco.",
      "a anulação ainda era possível em outubro de 2026, porque a medida de impugnação adotada em fevereiro de 2025 se considera exercício do direito de anular.",
    ],
    correta: 4,
    explicacao:
      "Pelo art. 54, o direito de anular atos com efeitos favoráveis decai em cinco anos, salvo comprovada má-fé, e, nos efeitos patrimoniais contínuos, o prazo conta da percepção do primeiro pagamento (§ 1º): de março de 2020 a março de 2025. Como “qualquer medida de autoridade administrativa que importe impugnação à validade do ato” já é exercício do direito de anular (§ 2º), a instauração do processo, com notificação do servidor, em fevereiro de 2025, ocorreu dentro do prazo. A decisão de outubro de 2026 é, portanto, tempestiva.",
    explicacaoErradas:
      "O direito não depende da decisão final para se considerar exercido: o § 2º o antecipa para a medida de impugnação. A má-fé não é condição do prazo, mas exceção a ele — sem má-fé, a decadência corre normalmente. A instauração do processo não é termo inicial do prazo, que nos efeitos contínuos começa no primeiro pagamento. E não há prazo de dez anos: a regra federal é a de cinco anos do art. 54.",
    pegadinha:
      "Com efeitos patrimoniais contínuos, o prazo não se renova a cada mês: conta do primeiro pagamento. E ele não precisa terminar com a anulação decidida — basta que, antes de vencer, a autoridade tenha adotado medida que impugne a validade do ato.",
    conhecimento:
      "Lei 9.784/1999, art. 54: “O direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários decai em cinco anos, contados da data em que foram praticados, salvo comprovada má-fé.” § 1º: efeitos patrimoniais contínuos, da percepção do primeiro pagamento. § 2º: considera-se exercício do direito de anular qualquer medida de autoridade administrativa que importe impugnação à validade do ato.",
    origem: "banco",
  },
  {
    id: "prf-adm-007",
    materia: "adm",
    topico: "Anulação, revogação e prescrição",
    subassunto: "Prescrição disciplinar: interrupção e Súmula 635 do STJ",
    dificuldade: 5,
    raciocinio: "Cálculo de prazo: contagem com interrupção limitada a 140 dias",
    enunciado:
      "Em maio de 2022, a autoridade competente tomou conhecimento de falta disciplinar cometida meses antes por um servidor federal, punível com suspensão. O processo administrativo disciplinar só foi instaurado em fevereiro de 2023 e foi julgado em março de 2026. Pela Lei 8.112/1990 e pela jurisprudência do STJ,",
    alternativas: [
      "a pretensão punitiva já estava prescrita, porque o prazo de dois anos, interrompido pela instauração, voltou a correr por inteiro após 140 dias e venceu antes do julgamento.",
      "a pretensão punitiva não estava prescrita, porque a instauração do PAD interrompe a prescrição até a decisão final, sem qualquer limite temporal.",
      "a pretensão punitiva estava prescrita desde maio de 2024, porque a instauração do PAD não interrompe o prazo de dois anos, que corre sem pausa desde o conhecimento do fato pela autoridade.",
      "a pretensão punitiva não estava prescrita, porque o prazo para a suspensão é de cinco anos, igual ao das penalidades expulsivas, contado do conhecimento do fato.",
      "a pretensão punitiva não estava prescrita, porque a prescrição só começa a correr depois de concluído o PAD, com a publicação do relatório da comissão.",
    ],
    correta: 0,
    explicacao:
      "A suspensão prescreve em dois anos (art. 142, II), contados da data em que a autoridade competente toma conhecimento do fato (§ 1º): maio de 2022. A instauração do PAD, em fevereiro de 2023, interrompeu o prazo (§ 3º), mas, pela Súmula 635 do STJ, a interrupção dura no máximo 140 dias — os 60 do inquérito, mais 60 de prorrogação e os 20 do julgamento —, depois dos quais o prazo volta a fluir por inteiro. Ele recomeçou em meados de 2023 e venceu em meados de 2025, antes do julgamento de março de 2026.",
    explicacaoErradas:
      "A interrupção não dura até a decisão final sem limite: a jurisprudência a limita aos 140 dias que a lei dá para concluir e julgar o processo. A instauração interrompe, sim, a prescrição (§ 3º), de modo que não se contam os dois anos direto desde maio de 2022. O prazo de cinco anos é o da demissão, da cassação de aposentadoria ou disponibilidade e da destituição de cargo em comissão (art. 142, I), não o da suspensão. E a prescrição começa com o conhecimento do fato, não com o fim do PAD.",
    pegadinha:
      "Quem conta só a interrupção, sem o limite de 140 dias, conclui que nada prescreveu. Quem ignora a interrupção acerta a palavra “prescrita”, mas erra a data e o fundamento. O caminho é: conhecimento, interrupção na instauração, 140 dias e, então, o prazo inteiro de novo.",
    conhecimento:
      "Lei 8.112/1990, art. 142: cinco anos (demissão, cassação de aposentadoria ou disponibilidade e destituição de cargo em comissão), dois anos (suspensão) e 180 dias (advertência); § 1º — do conhecimento do fato; § 3º — a instauração interrompe; § 4º — “Interrompido o curso da prescrição, o prazo começará a correr a partir do dia em que cessar a interrupção.” Súmula 635 do STJ: volta a fluir por inteiro após 140 dias da interrupção (60 + 60 + 20 dias, arts. 152 e 167).",
    origem: "banco",
  },
  {
    id: "prf-adm-008",
    materia: "adm",
    topico: "Controle da administração pública",
    subassunto: "Competências do TCU (art. 71, I a III e § 3º)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: distinguir apreciar e julgar contas e o alcance do registro de atos de pessoal",
    enunciado:
      "Numa capacitação sobre controle externo para servidores da área de gestão da PRF, discutiram-se as competências do Tribunal de Contas da União previstas no art. 71 da Constituição. Sobre elas, é correto afirmar que o TCU",
    alternativas: [
      "julga as contas anuais do Presidente da República e aprecia, para fins de registro, a legalidade das nomeações para cargos em comissão.",
      "aprecia as contas do Presidente mediante parecer prévio e, para registro, a legalidade das admissões de pessoal, salvo as nomeações para cargo em comissão.",
      "emite parecer prévio sobre as contas dos administradores de recursos federais, que são julgadas pelo Congresso, e julga as contas do Presidente.",
      "julga as contas dos administradores, e suas decisões que imputem débito ou multa dependem de prévia inscrição em dívida ativa para valer como título executivo.",
      "aprecia, para registro, a legalidade das concessões de aposentadoria, assegurando sempre contraditório ao servidor, inclusive no exame da concessão inicial.",
    ],
    correta: 1,
    explicacao:
      "O art. 71 distingue: as contas anuais do Presidente da República são apreciadas pelo TCU mediante parecer prévio (inciso I) e julgadas pelo Congresso Nacional (art. 49, IX); as dos administradores e responsáveis por recursos públicos são julgadas pelo próprio Tribunal (inciso II). O inciso III manda apreciar, para fins de registro, a legalidade dos atos de admissão de pessoal, a qualquer título, “excetuadas as nomeações para cargo de provimento em comissão”, e das concessões de aposentadorias, reformas e pensões.",
    explicacaoErradas:
      "O TCU não julga as contas do Presidente, e as nomeações para cargo em comissão estão justamente fora do registro. Parecer e julgamento aparecem invertidos quando se diz que o Tribunal opina sobre as contas dos administradores e julga as do Presidente. As decisões que imputam débito ou multa têm eficácia de título executivo pela própria Constituição (art. 71, § 3º), sem depender de inscrição em dívida ativa. E, pela Súmula Vinculante 3, o contraditório não é exigido na apreciação da concessão inicial de aposentadoria, reforma e pensão.",
    pegadinha:
      "Trocar “apreciar” por “julgar”. Nas contas do Presidente, o TCU só aprecia e emite parecer prévio; quem julga é o Congresso. Nas admissões, o registro alcança qualquer título, menos os cargos em comissão, cuja nomeação é livre.",
    conhecimento:
      "CF, art. 71: I — apreciar as contas do Presidente, mediante parecer prévio em 60 dias; II — julgar as contas dos administradores; III — apreciar, para registro, admissões (salvo cargos em comissão) e concessões de aposentadorias, reformas e pensões; § 3º — eficácia de título executivo. SV 3: contraditório, salvo na apreciação da concessão inicial. Tema 445 do STF: prazo de cinco anos para julgar a legalidade da concessão inicial, contado da chegada do processo ao tribunal.",
    origem: "banco",
  },
  {
    id: "prf-adm-009",
    materia: "adm",
    topico: "Controle da administração pública",
    subassunto: "Sustação de atos e contratos pelo TCU (art. 71, IX, X e §§ 1º e 2º)",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: sustação de ato, sustação de contrato e omissão em 90 dias",
    enunciado:
      "Ao fiscalizar uma unidade regional da PRF, o Tribunal de Contas da União constatou ilegalidade em um ato de concessão de vantagem a servidores e em um contrato de manutenção de viaturas. Sobre as providências previstas na Constituição e na jurisprudência do STF, considere as afirmativas:\n\nI. Quanto ao ato, o TCU assina prazo para a correção e, se não for atendido, susta ele próprio a execução, comunicando a decisão à Câmara dos Deputados e ao Senado Federal.\nII. Quanto ao contrato, o ato de sustação é adotado diretamente pelo Congresso Nacional, que solicita, de imediato, ao Poder Executivo as medidas cabíveis.\nIII. Se o Congresso Nacional ou o Poder Executivo não efetivar as medidas em 90 dias, o contrato ficará convalidado, sem que o TCU possa decidir a respeito.\nIV. Embora não possa sustar diretamente o contrato, o TCU pode determinar à autoridade administrativa que promova a anulação dele.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II e III, apenas.", "I, II e III, apenas.", "II e IV, apenas.", "I, II e IV, apenas."],
    correta: 4,
    explicacao:
      "A afirmativa I está correta: diante de ato ilegal, o TCU assina prazo para a correção e, não atendido, susta ele próprio a execução, comunicando a decisão à Câmara dos Deputados e ao Senado Federal (art. 71, IX e X). A II também está: no contrato, a sustação é adotada diretamente pelo Congresso Nacional, que solicita de imediato ao Executivo as medidas cabíveis (§ 1º). A IV reproduz o entendimento do STF no MS 23.550: o TCU não susta nem anula o contrato, mas pode determinar à autoridade que promova a anulação. Logo, I, II e IV.",
    explicacaoErradas:
      "A afirmativa III está errada: se o Congresso ou o Executivo não efetivar as medidas em 90 dias, “o Tribunal decidirá a respeito” (art. 71, § 2º); a omissão não convalida o contrato. Por isso caem as combinações com III e as que deixam de fora I ou IV.",
    pegadinha:
      "Misturar o regime do ato com o do contrato. No ato, quem susta é o próprio TCU; no contrato, a sustação é do Congresso, e o Tribunal só decide se, em 90 dias, nada for feito. Mesmo sem sustar o contrato, o TCU pode determinar que a autoridade promova a anulação.",
    conhecimento:
      "CF, art. 71: IX — assinar prazo para a adoção das providências; X — sustar, se não atendido, a execução do ato, comunicando à Câmara e ao Senado; § 1º — no contrato, a sustação é adotada diretamente pelo Congresso, que solicita de imediato ao Executivo as medidas cabíveis; § 2º — se, em 90 dias, o Congresso ou o Executivo não efetivar as medidas, o Tribunal decidirá a respeito. STF, MS 23.550.",
    origem: "banco",
  },
  {
    id: "prf-adm-010",
    materia: "adm",
    topico: "Controle da administração pública",
    subassunto: "Tutela × hierarquia; recurso hierárquico impróprio",
    dificuldade: 4,
    raciocinio: "Análise de caso: cabimento de recurso ao ministério contra decisão de autarquia",
    enunciado:
      "Uma autarquia federal aplicou multa a uma empresa de transporte, que recorreu à própria autarquia e teve o recurso negado pela diretoria colegiada, última instância prevista na lei da entidade. A empresa então dirigiu recurso ao ministro da pasta à qual a autarquia está vinculada, sem que nenhuma lei preveja esse recurso. Segundo a doutrina majoritária,",
    alternativas: [
      "o recurso deve ser conhecido, porque o ministro é superior hierárquico do dirigente da autarquia e pode rever de ofício qualquer decisão dela.",
      "o recurso não deve ser conhecido, porque entre ministério e autarquia há vinculação, e não hierarquia, e o recurso hierárquico impróprio depende de lei.",
      "o recurso deve ser conhecido como recurso hierárquico próprio, que dispensa previsão legal por decorrer diretamente da supervisão ministerial sobre a autarquia.",
      "o recurso não deve ser conhecido, porque as decisões das autarquias são irrecorríveis na via administrativa, restando à empresa apenas recorrer ao Poder Judiciário.",
      "o recurso deve ser conhecido, porque a tutela administrativa autoriza o ministério a substituir a decisão da autarquia por mera discordância de mérito.",
    ],
    correta: 1,
    explicacao:
      "Entre o ministério e a autarquia não há hierarquia, mas vinculação: a autarquia tem personalidade jurídica própria e sofre apenas controle finalístico (tutela ou supervisão ministerial), nos limites da lei. Por isso, o recurso dirigido a autoridade fora da estrutura da entidade — o recurso hierárquico impróprio — só é cabível quando a lei o prevê expressamente. Sem previsão, o recurso ao ministro não deve ser conhecido.",
    explicacaoErradas:
      "O ministro não é superior hierárquico do dirigente da autarquia nem pode rever de ofício as decisões dela fora das hipóteses legais. O recurso hierárquico próprio tramita dentro da mesma pessoa jurídica, entre órgãos hierarquizados, e é ele que dispensa previsão legal; a supervisão ministerial não o transforma em recurso próprio. As decisões das autarquias não são irrecorríveis: a empresa recorreu internamente, como previa a lei da entidade. E a tutela não autoriza substituir decisões por mera discordância de mérito.",
    pegadinha:
      "Achar que a vinculação ao ministério equivale a subordinação. A tutela é controle finalístico, que não se presume: só vale nas formas e nos limites que a lei estabelece. Daí a regra de que o recurso hierárquico impróprio depende de previsão legal expressa.",
    conhecimento:
      "Hierarquia: dentro da mesma pessoa jurídica, entre órgãos; permite rever atos, avocar e delegar. Tutela ou supervisão ministerial: entre a administração direta e a entidade da indireta, nos limites da lei (Decreto-Lei 200/1967, arts. 19 e seguintes). Recurso hierárquico próprio: à autoridade superior na mesma estrutura, independe de lei. Recurso hierárquico impróprio: a autoridade de outra pessoa jurídica, só se a lei o previr.",
    origem: "banco",
  },
  {
    id: "prf-adm-011",
    materia: "adm",
    topico: "Agentes públicos: investidura, direitos e deveres",
    subassunto: "Classificação dos agentes públicos",
    dificuldade: 4,
    raciocinio: "Classificação: enquadrar mesário, notário e temporário nas espécies de agentes públicos",
    enunciado:
      "Na classificação doutrinária que divide os agentes públicos em agentes políticos, servidores públicos, militares e particulares em colaboração com o Poder Público, devem ser enquadrados, respectivamente, o eleitor convocado pelo juiz eleitoral para atuar como mesário, o titular de cartório extrajudicial aprovado em concurso e o contratado por tempo determinado com base no art. 37, IX, da Constituição como",
    alternativas: [
      "agente político, particular em colaboração por delegação e servidor estatutário temporário.",
      "particular em colaboração requisitado, servidor público estatutário e empregado público regido pela CLT.",
      "particular em colaboração requisitado, particular em colaboração por delegação e servidor temporário.",
      "agente honorífico, servidor público estatutário e particular em colaboração contratado.",
      "particular em colaboração voluntário, agente delegado sem vínculo com o Estado e empregado público celetista.",
    ],
    correta: 2,
    explicacao:
      "Nessa classificação, o mesário é particular em colaboração requisitado: presta serviço público relevante por convocação obrigatória, sem vínculo profissional. O notário ou registrador exerce a atividade “em caráter privado, por delegação do Poder Público” (CF, art. 236), ainda que o ingresso dependa de concurso (§ 3º), e é particular em colaboração por delegação. O contratado com base no art. 37, IX, é servidor temporário, espécie de servidor público em sentido amplo, ao lado dos estatutários e dos empregados públicos.",
    explicacaoErradas:
      "O mesário não é agente político, categoria dos que ocupam cargos da estrutura constitucional de poder; nem colabora de forma voluntária, porque a convocação é obrigatória. O aprovado em concurso de cartório não se torna servidor estatutário, porque recebe delegação e atua em caráter privado. O temporário não é empregado celetista nem particular contratado: exerce função pública sob regime especial definido em lei. E “agente honorífico” é termo de outra classificação, que não integra a divisão proposta no enunciado.",
    pegadinha:
      "O concurso público do art. 236, § 3º, faz parecer que o titular do cartório é servidor estatutário. Ele não ocupa cargo público: recebe delegação para exercer a atividade em caráter privado, e por isso é particular em colaboração.",
    conhecimento:
      "Classificação (Di Pietro): agentes políticos; servidores públicos (estatutários, empregados públicos e temporários do art. 37, IX); militares; particulares em colaboração — por delegação (notários, concessionários), por requisição, nomeação ou designação (mesários, jurados) e gestores de negócios. Na terminologia de Hely Lopes Meirelles, o mesário seria agente honorífico, e o notário, agente delegado. CF, art. 236.",
    origem: "banco",
  },
  {
    id: "prf-adm-012",
    materia: "adm",
    topico: "Agentes públicos: investidura, direitos e deveres",
    subassunto: "Criação de cargos em comissão (Tema 1.010 do STF)",
    dificuldade: 5,
    raciocinio: "Subsunção: confrontar a lei de criação com os quatro requisitos fixados pelo STF",
    enunciado:
      "Uma lei federal criou 40 cargos em comissão de “assistente técnico” num órgão que conta com 30 servidores efetivos. As atribuições dos cargos, fixadas depois por decreto, consistem em protocolar documentos e operar sistemas informatizados. À luz da tese fixada pelo STF no Tema 1.010 da repercussão geral,",
    alternativas: [
      "a criação é válida, porque a lei pode criar cargos em comissão para quaisquer atribuições, desde que o provimento recaia sobre servidores de carreira em percentual mínimo.",
      "a criação é válida, porque o art. 37, V, reserva aos ocupantes de cargo efetivo apenas as funções de confiança, e não os cargos em comissão.",
      "a criação é inválida apenas quanto ao número, porque a desproporção é o único vício que o STF admite controlar na criação de cargos em comissão.",
      "a criação é inválida, porque os cargos se destinam a atividades burocráticas, em número desproporcional, com atribuições que a própria lei deveria descrever.",
      "a criação é válida, porque a escolha das atribuições dos cargos em comissão é mérito do legislador, e o decreto pode descrevê-las livremente.",
    ],
    correta: 3,
    explicacao:
      "No Tema 1.010, o STF fixou que os cargos em comissão: só se justificam para direção, chefia e assessoramento, não para atividades burocráticas, técnicas ou operacionais; pressupõem relação de confiança; devem guardar proporcionalidade com a necessidade e com o número de efetivos; e devem ter as atribuições descritas, de forma clara e objetiva, na própria lei que os cria. Protocolar documentos e operar sistemas são tarefas burocráticas; 40 comissionados para 30 efetivos é desproporcional; e as atribuições vieram por decreto. A criação é inválida.",
    explicacaoErradas:
      "Os cargos em comissão não servem a quaisquer atribuições: o art. 37, V, os destina “apenas às atribuições de direção, chefia e assessoramento”, e o percentual reservado a servidores de carreira não supre esse limite. A restrição de atribuições vale para as funções de confiança e também para os cargos em comissão. A desproporção não é o único vício controlável: a tese tem quatro requisitos. E as atribuições não podem ficar a critério do decreto: devem constar da própria lei.",
    pegadinha:
      "A premissa de que só as funções de confiança são reservadas a ocupantes de cargo efetivo está certa, mas não leva à validade: o art. 37, V, também restringe o cargo em comissão a direção, chefia e assessoramento, e o caso traz três vícios ao mesmo tempo.",
    conhecimento:
      "Tema 1.010 do STF: a) cargos em comissão só para direção, chefia e assessoramento, nunca para atividades burocráticas, técnicas ou operacionais; b) relação de confiança entre nomeante e nomeado; c) número proporcional à necessidade e ao número de efetivos do ente; d) atribuições descritas, de forma clara e objetiva, na própria lei. CF, art. 37, V: funções de confiança só para efetivos; cargos em comissão preenchidos por servidores de carreira nos casos, condições e percentuais mínimos previstos em lei.",
    origem: "banco",
  },
  {
    id: "prf-adm-013",
    materia: "adm",
    topico: "Agentes públicos: investidura, direitos e deveres",
    subassunto: "Teto remuneratório na acumulação e parcelas indenizatórias (EC 135/2024)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: incidência do teto por vínculo e exclusão das verbas indenizatórias previstas em lei nacional",
    enunciado:
      "Um agente administrativo da PRF acumula licitamente, com compatibilidade de horários, um cargo de professor numa universidade federal. Sobre a aplicação do teto remuneratório a esse servidor, considerando o art. 37, XI e § 11, da Constituição, na redação da EC 135/2024, e a jurisprudência do STF, é correto afirmar que",
    alternativas: [
      "o teto incide sobre a soma das remunerações dos dois cargos, porque a acumulação lícita não afasta o limite global imposto ao agente público pelo art. 37, XI.",
      "o teto aplicável ao servidor do Executivo federal é o subsídio mensal do Presidente da República, e não o dos Ministros do STF.",
      "as parcelas indenizatórias excluídas do teto são as que lei complementar federal definir, aplicável apenas aos servidores do Poder Executivo.",
      "qualquer parcela que o órgão qualifique como indenizatória em ato próprio fica fora do teto, ainda que tenha natureza de remuneração.",
      "o teto incide sobre cada vínculo isoladamente, e cabe a lei ordinária nacional definir as parcelas indenizatórias que não se computam no limite.",
    ],
    correta: 4,
    explicacao:
      "Pelos Temas 377 e 384 do STF, nas acumulações autorizadas pela Constituição, o teto do art. 37, XI, incide sobre cada vínculo isoladamente, e não sobre a soma dos ganhos. E o § 11 do art. 37, na redação da EC 135/2024, exclui do limite “as parcelas de caráter indenizatório expressamente previstas em lei ordinária, aprovada pelo Congresso Nacional, de caráter nacional, aplicada a todos os Poderes e órgãos constitucionalmente autônomos”. A acumulação do caso é lícita: desde a EC 138/2025, admite-se acumular um cargo de professor com outro de qualquer natureza, havendo compatibilidade de horários.",
    explicacaoErradas:
      "A soma das remunerações não é o parâmetro nas acumulações lícitas, segundo o STF. Na União, o teto é o subsídio dos Ministros do STF. A EC 135/2024 não exige lei complementar nem restringe a regra ao Executivo: a lei é ordinária, nacional e vale para todos os Poderes e órgãos autônomos. E o órgão não pode, por ato próprio, rotular como indenizatória uma parcela remuneratória: mesmo na regra de transição do art. 3º da EC 135, só ficam fora do teto as parcelas indenizatórias “previstas na legislação”, e é a natureza da verba, não o nome, que decide.",
    pegadinha:
      "Confundir o teto por vínculo, que vale nas acumulações lícitas, com um limite sobre a soma dos ganhos. E achar que basta chamar uma verba de indenizatória para tirá-la do teto: a exclusão depende de previsão em lei e da natureza efetivamente indenizatória da parcela.",
    conhecimento:
      "CF, art. 37, XI: teto geral, o subsídio dos Ministros do STF. § 11 (EC 135/2024): fora do teto as parcelas indenizatórias expressamente previstas em lei ordinária, aprovada pelo Congresso, de caráter nacional, aplicada a todos os Poderes e órgãos autônomos. EC 135/2024, art. 3º: “Enquanto não editada a lei ordinária de caráter nacional (...), não serão computadas (...) as parcelas de caráter indenizatório previstas na legislação.” Temas 377 e 384 do STF: teto por vínculo.",
    origem: "banco",
  },
  {
    id: "prf-adm-014",
    materia: "adm",
    topico: "Poderes da administração",
    subassunto: "Autoexecutoriedade e limites do poder de polícia",
    dificuldade: 4,
    raciocinio: "Diagnóstico de situação: natureza e limites da retenção do veículo por excesso de peso",
    enunciado:
      "Numa fiscalização com balança numa rodovia federal, a PRF constatou que um caminhão trafegava com excesso de peso e o reteve até que a carga excedente fosse transbordada para outro veículo, como prevê o Código de Trânsito. Essa retenção",
    alternativas: [
      "é ilegítima, porque toda restrição ao uso da propriedade privada depende de prévia autorização judicial, salvo quando o proprietário do veículo concorda com ela.",
      "decorre do poder disciplinar, porque o transportador, ao usar a rodovia federal, passa a se sujeitar à hierarquia da PRF durante a fiscalização.",
      "decorre do poder de polícia e é autoexecutória, por estar prevista em lei, mas deve ser proporcional, sob pena de abuso que o Judiciário pode coibir depois.",
      "decorre do poder de polícia, mas só é autoexecutória se houver risco iminente de acidente, pois a previsão legal da medida não basta para dispensar o juiz.",
      "decorre do poder de polícia e, por ser autoexecutória, afasta o controle judicial posterior, que só seria possível se a medida dependesse de ordem prévia.",
    ],
    correta: 2,
    explicacao:
      "A retenção do veículo até o transbordo da carga excedente é medida administrativa prevista no CTB para o excesso de peso (art. 231, V, e parágrafo único) e decorre do poder de polícia. É autoexecutória porque a lei a prevê: a Administração a executa diretamente, sem ordem judicial. A autoexecutoriedade não afasta o controle judicial: se a medida for desproporcional ou abusiva, o Judiciário pode corrigi-la depois.",
    explicacaoErradas:
      "Restrições de polícia à propriedade e à liberdade não dependem de autorização judicial prévia quando a lei as prevê ou há urgência. O poder disciplinar alcança quem tem vínculo especial com a Administração, como servidores e contratados; o transportador fiscalizado é administrado em geral, sujeito ao poder de polícia, e não à hierarquia da PRF. A autoexecutoriedade existe com previsão legal ou em urgência — basta uma delas. E o ato autoexecutório continua sujeito a controle judicial posterior (CF, art. 5º, XXXV).",
    pegadinha:
      "Achar que autoexecutoriedade e controle judicial se excluem. Ela só dispensa a ordem judicial prévia; o controle posterior, inclusive da proporcionalidade da medida, permanece.",
    conhecimento:
      "CTB, art. 231, V: transitar com excesso de peso — infração média; multa acrescida a cada 200 kg ou fração de excesso; medida administrativa: retenção do veículo e transbordo da carga excedente. Parágrafo único: o veículo só continua viagem após descarregar o que exceder. Autoexecutoriedade do poder de polícia: quando a lei a prevê ou em situação de urgência; não exclui o controle judicial.",
    origem: "banco",
  },
  {
    id: "prf-adm-015",
    materia: "adm",
    topico: "Poderes da administração",
    subassunto: "Distinção entre poder disciplinar, de polícia e hierárquico",
    dificuldade: 4,
    raciocinio: "Associação: relacionar cada ato ao poder administrativo de que decorre",
    enunciado:
      "Na mesma semana, numa superintendência da PRF, ocorreram os seguintes fatos: (1) o chefe aplicou advertência a um servidor que descumpriu norma interna; (2) foi aplicada multa contratual à empresa contratada para a limpeza, por atraso na execução dos serviços; (3) um motorista foi multado por trafegar sem cinto de segurança; (4) o superintendente avocou, temporariamente, processo da competência de um subordinado. Esses atos decorrem, respectivamente, dos poderes",
    alternativas: ["disciplinar, de polícia, de polícia e hierárquico.", "disciplinar, disciplinar, de polícia e hierárquico.", "hierárquico, disciplinar, de polícia e regulamentar.", "disciplinar, de polícia, disciplinar e hierárquico.", "hierárquico, disciplinar, disciplinar e regulamentar."],
    correta: 1,
    explicacao:
      "A advertência ao servidor e a multa contratual à empresa decorrem do poder disciplinar, que permite apurar infrações e aplicar sanções a quem tem vínculo especial com a Administração — servidores e também particulares contratados. A multa ao motorista sem cinto decorre do poder de polícia, que condiciona a liberdade dos administrados em geral. A avocação temporária de competência de subordinado é manifestação do poder hierárquico (Lei 9.784/1999, art. 15).",
    explicacaoErradas:
      "A multa à contratada não decorre do poder de polícia, porque a empresa é punida pelo vínculo contratual com a Administração, e não como administrada em geral. A punição do servidor é exercício do poder disciplinar, que deriva da hierarquia, mas não se confunde com ela. A multa de trânsito não é disciplinar, porque o motorista não tem vínculo especial com a PRF. E avocar competência não é poder regulamentar, que é o de editar normas para a fiel execução das leis.",
    pegadinha:
      "A multa aplicada à empresa de limpeza parece poder de polícia porque é uma multa a um particular. O que decide é o vínculo: quem é punido por descumprir contrato com a Administração está sujeito ao poder disciplinar.",
    conhecimento:
      "Poder disciplinar: apurar infrações e aplicar penalidades a servidores e a particulares com vínculo especial (contratados, delegatários). Poder de polícia: condicionar e restringir direitos dos administrados em geral (CTN, art. 78). Poder hierárquico: ordenar, coordenar, fiscalizar, rever, delegar e avocar (Lei 9.784/1999, arts. 11 a 15). Poder regulamentar: atos normativos para a fiel execução das leis (CF, art. 84, IV).",
    origem: "banco",
  },
  {
    id: "prf-adm-016",
    materia: "adm",
    topico: "Poderes da administração",
    subassunto: "Abuso de poder: excesso de poder e desvio de finalidade",
    dificuldade: 5,
    raciocinio: "Diagnóstico de situação: identificar a espécie de abuso em cada ato",
    enunciado:
      "O superintendente regional da PRF, competente para remover servidores no interesse da Administração, determinou a remoção de ofício de um servidor de quem é desafeto, com o único propósito de puni-lo. Na mesma semana, o chefe de uma das delegacias da superintendência aplicou a outro servidor suspensão de 45 dias, embora, pela Lei 8.112/1990, o chefe da repartição só possa aplicar suspensão de até 30 dias. Os dois atos configuram, respectivamente,",
    alternativas: ["excesso de poder e desvio de finalidade.", "desvio de finalidade e exercício regular do poder disciplinar.", "exercício regular do poder hierárquico e excesso de poder.", "excesso de poder nos dois casos, por vício de competência.", "desvio de finalidade e excesso de poder."],
    correta: 4,
    explicacao:
      "A remoção de ofício estava na competência do superintendente, mas foi usada com finalidade diversa da prevista em lei, punir um desafeto: é desvio de finalidade (Lei 4.717/1965, art. 2º, parágrafo único, “e”), porque a remoção não é penalidade e só pode atender ao interesse do serviço. O chefe da delegacia foi além da sua competência: pelo art. 141, III, da Lei 8.112/1990, o chefe da repartição aplica suspensão de até 30 dias, e a superior a 30 dias cabe às autoridades do inciso II. É excesso de poder, vício de competência.",
    explicacaoErradas:
      "A remoção não é exercício regular do poder hierárquico: a competência existia, mas o fim foi desviado, e o motivo pessoal contamina o ato. A suspensão de 45 dias não é exercício regular do poder disciplinar, porque excedeu a competência do chefe. E os dois casos não se reduzem a vício de competência: o superintendente era competente para remover; seu vício está na finalidade.",
    pegadinha:
      "Os dois vícios são espécies de abuso de poder, mas atingem elementos diferentes do ato. No excesso, o agente vai além da competência que tem; no desvio, age dentro dela, mas para alcançar fim diverso do previsto em lei. A remoção usada como punição é exemplo clássico de desvio.",
    conhecimento:
      "Abuso de poder: excesso de poder (atuação além da competência, vício de competência) e desvio de finalidade ou de poder (atuação dentro da competência, com fim diverso do previsto em lei, vício de finalidade). Lei 4.717/1965, art. 2º, parágrafo único, “a” e “e”. Lei 8.112/1990, art. 141: suspensão superior a 30 dias, pelas autoridades do inciso II; até 30 dias, pelo chefe da repartição (inciso III).",
    origem: "banco",
  },
  {
    id: "prf-adm-017",
    materia: "adm",
    topico: "Princípios da administração pública",
    subassunto: "Impessoalidade e publicidade oficial (art. 37, § 1º)",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: facetas da impessoalidade e vedação de promoção pessoal",
    enunciado:
      "A assessoria de comunicação de uma superintendência da PRF preparou uma campanha educativa de segurança viária e consultou a área jurídica sobre o princípio da impessoalidade. Considere as afirmativas:\n\nI. Incluir nas peças o nome e a fotografia do superintendente viola o art. 37, § 1º, da Constituição, ainda que o conteúdo da campanha seja educativo.\nII. Pela impessoalidade, os atos dos servidores são imputados ao órgão ou à entidade em nome de quem atuam, e não ao agente que os pratica.\nIII. A impessoalidade impõe igualdade formal absoluta entre os administrados e impede ações afirmativas, ainda que previstas em lei.\nIV. O uso do símbolo oficial da PRF nas peças da campanha já basta para violar o princípio.\n\nEstá correto o que se afirma em",
    alternativas: ["I, II e III, apenas.", "II e IV, apenas.", "I e II, apenas.", "I e IV, apenas.", "I, II e IV, apenas."],
    correta: 2,
    explicacao:
      "A afirmativa I está correta: o art. 37, § 1º, exige que a publicidade oficial tenha caráter educativo, informativo ou de orientação social e proíbe “nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores públicos” — o conteúdo educativo não autoriza o nome e a foto do superintendente. A II também está: numa das facetas da impessoalidade, os atos são imputados ao órgão ou à entidade, e não ao agente que os pratica. Logo, I e II.",
    explicacaoErradas:
      "A afirmativa III está errada: a impessoalidade veda favoritismos e perseguições, mas convive com a igualdade material, que justifica tratamentos diferenciados previstos em lei, como as ações afirmativas. A IV também: o símbolo oficial identifica a autoria institucional da campanha; o que a Constituição proíbe são os símbolos que caracterizem promoção pessoal. Por isso caem as combinações com III ou IV.",
    pegadinha:
      "A afirmativa IV estica a proibição: o § 1º não veda todo símbolo, só os que promovam pessoalmente autoridades ou servidores. O brasão ou a marca institucional da PRF é justamente a forma impessoal de identificar a campanha.",
    conhecimento:
      "Impessoalidade: (1) finalidade — atuação voltada ao interesse público, sem favoritismos nem perseguições; (2) imputação — atos atribuídos ao órgão ou à entidade, não ao agente; (3) vedação de promoção pessoal na publicidade oficial (CF, art. 37, § 1º). Convive com tratamentos diferenciados previstos em lei, como as ações afirmativas.",
    origem: "banco",
  },
  {
    id: "prf-adm-018",
    materia: "adm",
    topico: "Princípios da administração pública",
    subassunto: "Nepotismo e Súmula Vinculante 13: contagem de graus",
    dificuldade: 5,
    raciocinio: "Cálculo de grau de parentesco: identificar a única nomeação fora do alcance da SV 13",
    enunciado:
      "O diretor de um órgão federal estuda nomeações para cargos em comissão e funções de confiança na própria unidade e consultou a área jurídica sobre a Súmula Vinculante 13. NÃO configura nepotismo, à luz da súmula, a nomeação de",
    alternativas: [
      "o sobrinho do diretor, para cargo em comissão de assessor no mesmo órgão.",
      "a sogra do diretor, para função gratificada no mesmo órgão.",
      "o filho de outro dirigente, que, em troca, nomeou a filha do diretor em seu órgão.",
      "o tio-avô do diretor, para cargo em comissão de chefia no mesmo órgão.",
      "o cunhado do diretor, para cargo em comissão de assessoramento no mesmo órgão.",
    ],
    correta: 3,
    explicacao:
      "A Súmula Vinculante 13 alcança cônjuge, companheiro e parentes em linha reta, colateral ou por afinidade até o terceiro grau, inclusive. O tio-avô é colateral de quarto grau: sobe-se do diretor ao ancestral comum — pai, avô e bisavô, três graus — e desce-se ao parente: o tio-avô, filho do bisavô, é o quarto. Está fora do alcance da súmula.",
    explicacaoErradas:
      "O sobrinho é colateral de terceiro grau (diretor, pai, irmão, sobrinho), dentro do limite. A sogra é afim em linha reta de primeiro grau, e a súmula vale também para função gratificada. O cunhado é afim colateral de segundo grau. E a troca de nomeações entre autoridades é o “ajuste mediante designações recíprocas”, o nepotismo cruzado que a súmula veda, ainda que nenhum dos nomeados seja parente de quem o nomeou.",
    pegadinha:
      "Contar os graus colaterais sem passar pelo ancestral comum. O tio-avô parece próximo, mas está no quarto grau, como o primo-irmão; já o sobrinho, aparentemente mais distante, está no terceiro.",
    conhecimento:
      "SV 13: viola a Constituição a nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o terceiro grau, inclusive, da autoridade nomeante ou de servidor da mesma pessoa jurídica investido em cargo de direção, chefia ou assessoramento, para cargo em comissão, de confiança ou função gratificada, compreendido o ajuste mediante designações recíprocas. Colaterais: irmão (2º); tio e sobrinho (3º); primo, tio-avô e sobrinho-neto (4º).",
    origem: "banco",
  },
  {
    id: "prf-adm-019",
    materia: "adm",
    topico: "Princípios da administração pública",
    subassunto: "Indisponibilidade do interesse público e legalidade",
    dificuldade: 4,
    raciocinio: "Análise de caso: renúncia de créditos por ato infralegal",
    enunciado:
      "Para reduzir custos de cobrança, o dirigente de um órgão federal editou portaria perdoando todas as multas administrativas de valor inferior a R$ 100,00 aplicadas pelo órgão, sem que nenhuma lei autorize a remissão. Sobre essa portaria, à luz dos princípios da administração pública,",
    alternativas: [
      "a medida é válida, porque o princípio da eficiência, incluído no art. 37 pela EC 19/1998, autoriza o gestor a dispensar créditos cuja cobrança custe mais do que vale.",
      "a medida viola a indisponibilidade do interesse público, pois a renúncia a créditos da Administração depende de lei, ainda que o gestor a considere eficiente.",
      "a medida viola a supremacia do interesse público, princípio que impõe à Administração sujeições e a impede de dispor de seus bens, ao passo que a indisponibilidade lhe confere prerrogativas.",
      "a medida é válida se a portaria for publicada, porque a publicidade supre a falta de lei, e o controle da renúncia passa a ser feito pelos próprios administrados.",
      "a medida é válida, porque a legalidade administrativa permite ao gestor fazer tudo o que a lei não proíbe, e nenhuma lei proíbe o perdão de multas de pequeno valor.",
    ],
    correta: 1,
    explicacao:
      "Pela indisponibilidade do interesse público, o administrador não é dono dos bens e interesses que gere: não pode renunciar a créditos, perdoar dívidas ou abrir mão de receitas sem autorização legal. A remissão de multas depende de lei, e a portaria, ato infralegal, não pode concedê-la, por mais eficiente que a medida pareça. É também o que decorre da legalidade estrita: a Administração só age quando e como a lei autoriza.",
    explicacaoErradas:
      "A eficiência não autoriza o gestor a agir fora da lei: a dispensa de créditos de pequeno valor pode ser legítima quando uma lei a prevê, não por decisão do próprio gestor. Os papéis dos princípios aparecem trocados quando se diz que a supremacia impõe sujeições e a indisponibilidade confere prerrogativas: é o contrário. A publicidade não supre a falta de lei. E “fazer tudo o que a lei não proíbe” é a legalidade dos particulares; a Administração só pode fazer o que a lei permite.",
    pegadinha:
      "A medida parece racional — gastar mais para cobrar do que se arrecada é ineficiente —, e a eficiência entrou no art. 37 com a EC 19/1998. Mas a eficiência atua dentro da legalidade, nunca contra ela: sem lei, a renúncia a créditos viola a indisponibilidade do interesse público.",
    conhecimento:
      "Supremacia do interesse público: confere prerrogativas à Administração (poderes, cláusulas exorbitantes). Indisponibilidade do interesse público: impõe sujeições — o agente gere bens e interesses alheios e não pode deles dispor sem lei (licitação, concurso, vedação de renúncia de receitas). Legalidade administrativa: a Administração só faz o que a lei autoriza; o particular pode fazer tudo o que a lei não proíbe.",
    origem: "banco",
  },
  {
    id: "prf-adm-020",
    materia: "adm",
    topico: "Responsabilidade civil do Estado",
    subassunto: "Legitimidade passiva, regresso e prescrição (Temas 940, 666 e 553)",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: dupla garantia, regresso e prazos prescricionais",
    enunciado:
      "Durante uma fiscalização numa rodovia federal, um policial rodoviário federal, por imprudência, causou danos ao veículo de um motorista. À luz da jurisprudência do STF e do STJ, considere as afirmativas:\n\nI. A ação de indenização deve ser proposta contra a União, sendo o policial parte ilegítima para figurar no polo passivo.\nII. A União responde independentemente de culpa e terá direito de regresso contra o policial, por ter ele agido com culpa.\nIII. A pretensão indenizatória do motorista contra a União prescreve em cinco anos.\nIV. A ação regressiva da União contra o policial é imprescritível, por se tratar de ressarcimento ao erário, ainda que decorrente de ilícito civil.\n\nEstá correto o que se afirma em",
    alternativas: ["I, II e III, apenas.", "I e II, apenas.", "II, III e IV, apenas.", "I, II e IV, apenas.", "II e III, apenas."],
    correta: 0,
    explicacao:
      "A afirmativa I está correta: pelo Tema 940 do STF, a ação deve ser proposta contra o Estado ou a prestadora de serviço público, sendo o agente parte ilegítima — a chamada dupla garantia. A II também: a União responde objetivamente (art. 37, § 6º) e tem regresso contra o agente que agiu com dolo ou culpa, e a imprudência é modalidade de culpa. A III também: pelo Tema 553 do STJ, a pretensão indenizatória contra a Fazenda Pública prescreve em cinco anos (Decreto 20.910/1932). Logo, I, II e III.",
    explicacaoErradas:
      "A afirmativa IV está errada: pelo Tema 666 do STF, é prescritível a ação de reparação de danos à Fazenda Pública decorrente de ilícito civil, como o dano causado por imprudência. Só são imprescritíveis, pelo Tema 897, as ações de ressarcimento fundadas em ato doloso de improbidade administrativa. Por isso caem as combinações com IV e as que deixam de fora I ou III.",
    pegadinha:
      "O art. 37, § 5º, ressalva as ações de ressarcimento, o que leva a pensar que todo ressarcimento ao erário é imprescritível. O STF restringiu a imprescritibilidade ao ressarcimento por ato doloso de improbidade (Tema 897); a regressiva por ilícito civil prescreve.",
    conhecimento:
      "CF, art. 37, § 6º: responsabilidade objetiva; regresso em caso de dolo ou culpa. Tema 940 do STF: agente é parte ilegítima na ação da vítima. Tema 553 do STJ: cinco anos contra a Fazenda Pública (Decreto 20.910/1932). Tema 666 do STF: prescritível a reparação por ilícito civil. Tema 897 do STF: imprescritível o ressarcimento por ato doloso de improbidade.",
    origem: "banco",
  },
  {
    id: "prf-adm-021",
    materia: "adm",
    topico: "Responsabilidade civil do Estado",
    subassunto: "Culpa concorrente da vítima e risco administrativo",
    dificuldade: 4,
    raciocinio: "Análise de caso: efeito da culpa concorrente na indenização devida pelo Estado",
    enunciado:
      "À noite, numa rodovia federal sem iluminação, um pedestre atravessou fora da faixa e foi atingido por uma viatura da PRF que trafegava acima do limite de velocidade, sem estar em atendimento de urgência. A perícia concluiu que as duas condutas contribuíram para o acidente. Nessa situação,",
    alternativas: [
      "a responsabilidade da União fica excluída, porque a conduta do pedestre, por ter contribuído para o acidente, rompe por inteiro o nexo de causalidade.",
      "a União responde por todo o dano, sem redução, porque o risco administrativo não admite que a conduta da vítima seja considerada no cálculo da indenização.",
      "a responsabilidade passa a ser subjetiva, e o pedestre só será indenizado se provar que o motorista da viatura agiu com dolo ou culpa grave.",
      "a União responde de forma subsidiária, cabendo ao motorista da viatura indenizar o pedestre em primeiro lugar, por ter agido com culpa.",
      "a União responde objetivamente, mas a culpa concorrente do pedestre atenua a responsabilidade e reduz a indenização na proporção de sua participação.",
    ],
    correta: 4,
    explicacao:
      "Pela teoria do risco administrativo (CF, art. 37, § 6º), a União responde objetivamente pelo dano causado pela viatura. A culpa exclusiva da vítima excluiria a responsabilidade, mas a culpa concorrente apenas a atenua: a indenização é fixada considerando-se a gravidade da culpa da vítima em confronto com a do autor do dano (Código Civil, art. 945).",
    explicacaoErradas:
      "A conduta do pedestre só romperia o nexo se fosse a causa exclusiva do acidente; aqui, a perícia apontou as duas condutas. O risco administrativo admite, sim, considerar a conduta da vítima — é o que o distingue do risco integral. A culpa concorrente não torna a responsabilidade subjetiva nem exige prova de dolo ou culpa grave. E a União não responde de forma subsidiária: pelo Tema 940 do STF, a vítima demanda a pessoa jurídica, e o agente responde só em regresso.",
    pegadinha:
      "Confundir culpa concorrente com culpa exclusiva da vítima. Só a exclusiva rompe o nexo e afasta o dever de indenizar; a concorrente mantém a responsabilidade objetiva e reduz o valor.",
    conhecimento:
      "Risco administrativo: responsabilidade objetiva que admite excludentes (culpa exclusiva da vítima, caso fortuito ou força maior, fato exclusivo de terceiro) e atenuantes, como a culpa concorrente. Código Civil, art. 945: “Se a vítima tiver concorrido culposamente para o evento danoso, a sua indenização será fixada tendo-se em conta a gravidade de sua culpa em confronto com a do autor do dano.” Risco integral: sem excludentes.",
    origem: "banco",
  },
  {
    id: "prf-adm-022",
    materia: "adm",
    topico: "Responsabilidade civil do Estado",
    subassunto: "Concessionárias e permissionárias: animais na pista e terceiros não usuários",
    dificuldade: 5,
    raciocinio: "Análise de caso: alcance da responsabilidade objetiva das prestadoras de serviço público",
    enunciado:
      "Numa rodovia federal concedida à iniciativa privada, ocorreram dois acidentes: um automóvel colidiu com um cavalo solto na pista de rolamento; e, no acostamento, um ônibus de empresa permissionária de transporte interestadual atropelou um ciclista que não era passageiro. Considerando a jurisprudência do STF e do STJ,",
    alternativas: [
      "a concessionária da rodovia responde independentemente de culpa pelo acidente com o animal, e a permissionária responde objetivamente perante o ciclista, ainda que não seja usuário.",
      "a concessionária só responde pelo acidente com o animal se a vítima provar falha culposa na fiscalização da pista, e a permissionária responde objetivamente também perante o ciclista.",
      "pelo acidente com o animal responde só o dono do cavalo, porque o fato de terceiro rompe o nexo, e a permissionária responde objetivamente perante o ciclista, ainda que não seja usuário.",
      "a concessionária responde independentemente de culpa pelo acidente com o animal, mas a permissionária só responde objetivamente perante usuários, e o ciclista terá de provar a culpa do motorista.",
      "a concessionária e a permissionária respondem só subsidiariamente, porque a União, como poder concedente, responde em primeiro lugar pelos danos causados na prestação do serviço público.",
    ],
    correta: 0,
    explicacao:
      "Pelo Tema 1.122 do STJ, “as concessionárias de rodovias respondem, independentemente da existência de culpa, pelos danos oriundos de acidentes causados pela presença de animais domésticos nas pistas de rolamento, aplicando-se as regras do Código de Defesa do Consumidor e da Lei das Concessões”. E, pelo Tema 130 do STF (RE 591.874), a responsabilidade objetiva das prestadoras de serviço público vale perante usuários e também perante não usuários, como o ciclista.",
    explicacaoErradas:
      "Pela tese do STJ, a vítima do acidente com o animal não precisa provar culpa da concessionária. O fato de o animal ter dono não afasta a responsabilidade da concessionária, que responde independentemente de culpa. A distinção entre usuário e não usuário foi superada pelo STF: o § 6º do art. 37 fala em danos causados “a terceiros”, sem restringir. E as delegatárias respondem diretamente; a responsabilidade do poder concedente, quando existe, é que é subsidiária.",
    pegadinha:
      "Duas teses diferentes no mesmo caso: para o animal na pista, o Tema 1.122 do STJ (CDC e Lei das Concessões); para o ciclista, o Tema 130 do STF, que estendeu a responsabilidade objetiva das prestadoras aos não usuários. Quem pensa só na relação de consumo tende a negá-la perante o ciclista.",
    conhecimento:
      "CF, art. 37, § 6º: prestadoras de serviço público respondem objetivamente pelos danos causados a terceiros. STF, Tema 130 (RE 591.874): usuários e não usuários. STJ, Tema 1.122: concessionárias de rodovias respondem, independentemente de culpa, por acidentes causados por animais domésticos nas pistas. Responsabilidade do poder concedente: subsidiária.",
    origem: "banco",
  },
  {
    id: "prf-adm-023",
    materia: "adm",
    topico: "Improbidade administrativa",
    subassunto: "Elemento subjetivo: exigência de dolo após a Lei 14.230/2021",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: ausência de dolo e afastamento da improbidade",
    enunciado:
      "O fiscal de um contrato de manutenção de viaturas de um órgão federal atestou, por desatenção, a execução de serviços que não foram realizados, o que levou ao pagamento indevido à empresa. A apuração não encontrou nenhum indício de que ele tenha agido com dolo. Pela Lei 8.429/1992, com a redação da Lei 14.230/2021, o fiscal",
    alternativas: [
      "responde por ato de improbidade que causa lesão ao erário, porque, nessa espécie, a lei ainda admite a modalidade culposa quando a negligência do agente for grave.",
      "não responde por improbidade, porque a lei exige dolo em todas as espécies, sem prejuízo de responder em outras esferas, como a disciplinar, se for o caso.",
      "responde por improbidade que atenta contra os princípios, porque a mera voluntariedade de assinar o atesto basta para caracterizar o dolo exigido pela lei.",
      "responde por improbidade que importa enriquecimento ilícito, porque o pagamento indevido à empresa se presume revertido em favor de quem atestou.",
      "não responde por improbidade, porque a lei passou a exigir, para toda espécie de ato, que o agente tenha obtido vantagem patrimonial para si.",
    ],
    correta: 1,
    explicacao:
      "Desde a Lei 14.230/2021, só há improbidade com dolo, em todas as espécies (art. 1º, §§ 1º a 3º): a ilegalidade sem dolo que a qualifique não configura ato de improbidade (art. 17-C, § 1º), e o STF confirmou o fim da modalidade culposa no Tema 1.199. O atesto por desatenção é conduta culposa e não é improbidade, sem prejuízo de responsabilização disciplinar, civil ou por outras vias, conforme o caso.",
    explicacaoErradas:
      "A modalidade culposa do art. 10 foi revogada; a negligência, mesmo grave, não basta. A mera voluntariedade também não: dolo é “a vontade livre e consciente de alcançar o resultado ilícito”, “não bastando a voluntariedade do agente” (art. 1º, § 2º). O enriquecimento ilícito não se presume em favor de quem atestou. E a lei não exige vantagem patrimonial em toda espécie: os atos contra os princípios independem de dano ao erário e de enriquecimento ilícito (art. 11, § 4º).",
    pegadinha:
      "A desatenção do fiscal causou prejuízo real, e o art. 10 fala em lesão ao erário, o que leva a pensar em improbidade culposa. Desde 2021, essa modalidade não existe mais: prejuízo sem dolo pode gerar responsabilidade disciplinar ou civil, mas não improbidade.",
    conhecimento:
      "Lei 8.429/1992 (Lei 14.230/2021): art. 1º, § 1º — improbidade são as condutas dolosas dos arts. 9º, 10 e 11; § 2º — dolo é a vontade livre e consciente de alcançar o resultado ilícito, não bastando a voluntariedade; § 3º — o mero exercício da função, sem comprovação de ato doloso com fim ilícito, afasta a responsabilidade. Art. 17-C, § 1º: ilegalidade sem dolo não configura improbidade. STF, Tema 1.199.",
    origem: "banco",
  },
  {
    id: "prf-adm-024",
    materia: "adm",
    topico: "Improbidade administrativa",
    subassunto: "Sanções do art. 12, III, para atos contra os princípios",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: sanções cabíveis para o ato do art. 11",
    enunciado:
      "Um servidor federal foi condenado, em ação de improbidade, por ato que atenta contra os princípios da administração pública (art. 11 da Lei 8.429/1992). Na redação dada pela Lei 14.230/2021, considere as sanções a seguir:\n\nI. perda da função pública;\nII. pagamento de multa civil de até 24 vezes o valor da remuneração percebida pelo agente;\nIII. proibição de contratar com o poder público ou de receber benefícios ou incentivos fiscais ou creditícios, pelo prazo não superior a 4 anos;\nIV. suspensão dos direitos políticos.\n\nPodem ser aplicadas ao servidor as sanções descritas em",
    alternativas: ["I, II e III, apenas.", "II, III e IV, apenas.", "II e III, apenas.", "I e IV, apenas.", "III, apenas."],
    correta: 2,
    explicacao:
      "Na redação da Lei 14.230/2021, o art. 12, III, prevê para os atos do art. 11 apenas duas sanções: “pagamento de multa civil de até 24 (vinte e quatro) vezes o valor da remuneração percebida pelo agente” e “proibição de contratar com o poder público ou de receber benefícios ou incentivos fiscais ou creditícios (...), pelo prazo não superior a 4 (quatro) anos”. Logo, II e III.",
    explicacaoErradas:
      "A perda da função pública e a suspensão dos direitos políticos deixaram de ser previstas para os atos contra os princípios: hoje só os atos de enriquecimento ilícito (art. 12, I, suspensão até 14 anos) e de lesão ao erário (art. 12, II, até 12 anos) as admitem. Por isso caem as combinações com I ou IV e a que deixa de fora a sanção descrita em II.",
    pegadinha:
      "O art. 37, § 4º, da Constituição lista suspensão dos direitos políticos, perda da função, indisponibilidade dos bens e ressarcimento para a improbidade em geral. A lei distribui as sanções por espécie, e, desde 2021, o ato contra os princípios só leva a multa e a proibição de contratar.",
    conhecimento:
      "Lei 8.429/1992, art. 12 (Lei 14.230/2021): I — art. 9º: perda dos bens acrescidos, perda da função, suspensão dos direitos políticos até 14 anos, multa igual ao acréscimo e proibição de contratar até 14 anos; II — art. 10: perda dos bens (se houver), perda da função, suspensão até 12 anos, multa igual ao dano e proibição até 12 anos; III — art. 11: multa de até 24 vezes a remuneração e proibição de contratar até 4 anos. Aplicação isolada ou cumulativa, conforme a gravidade.",
    origem: "banco",
  },
  {
    id: "prf-adm-025",
    materia: "adm",
    topico: "Improbidade administrativa",
    subassunto: "Enquadramento: utilizar × permitir o uso de bem público (arts. 9º, IV, e 10, XIII)",
    dificuldade: 5,
    raciocinio: "Classificação: enquadrar cada conduta na espécie de improbidade correspondente",
    enunciado:
      "Num órgão federal, um servidor usou, num fim de semana, uma caminhonete do órgão para fazer a própria mudança. Em outro episódio, o chefe do setor de transportes permitiu que um amigo, que não é servidor, usasse outra caminhonete para levar materiais à obra da casa do próprio amigo. Comprovados o dolo e, no segundo caso, a perda patrimonial efetiva da unidade, as condutas do servidor e do chefe configuram, respectivamente, atos de improbidade que",
    alternativas: [
      "atentam contra os princípios, nos dois casos, porque o uso de bem público em proveito particular não gera vantagem patrimonial a ninguém.",
      "causam lesão ao erário, nos dois casos, porque o desgaste dos veículos é dano patrimonial efetivo suportado pela unidade.",
      "causam lesão ao erário e importam enriquecimento ilícito, respectivamente, porque quem permite o uso é quem se enriquece com o favor que presta ao amigo.",
      "importam enriquecimento ilícito, nos dois casos, porque o amigo do chefe também se enriquece ao usar o bem sem pagar.",
      "importam enriquecimento ilícito e causam lesão ao erário, porque a lei distingue quem utiliza o bem de quem permite o seu uso por outrem.",
    ],
    correta: 4,
    explicacao:
      "A lei distingue o verbo. Quem utiliza, em obra ou serviço particular, bem móvel da entidade comete ato que importa enriquecimento ilícito (art. 9º, IV): o servidor que fez a própria mudança com a caminhonete auferiu vantagem patrimonial indevida. Quem permite que outrem utilize veículos da entidade em obra ou serviço particular comete ato que causa lesão ao erário (art. 10, XIII), desde que haja perda patrimonial efetiva e comprovada (art. 10, caput), como informa o enunciado.",
    explicacaoErradas:
      "O uso do bem público em proveito próprio gera vantagem patrimonial — a economia do frete —, e a lei o tipifica como enriquecimento ilícito, não como mera ofensa aos princípios. Não são os dois casos de lesão ao erário, porque o uso pelo próprio agente está no art. 9º, IV. A correspondência fica invertida quando se atribui o enriquecimento a quem permite o uso. E o proveito do amigo não converte em art. 9º a conduta do chefe, tipificada como permitir (art. 10, XIII); o amigo pode responder se tiver induzido ou concorrido dolosamente para o ato (art. 3º).",
    pegadinha:
      "Os dois casos envolvem caminhonetes do mesmo órgão, mas a lei separa quem usa o bem em proveito próprio (enriquecimento ilícito) de quem deixa outro usá-lo (lesão ao erário). Para a lesão ao erário, desde 2021 é preciso perda patrimonial efetiva e comprovada.",
    conhecimento:
      "Lei 8.429/1992: art. 9º, IV — “utilizar, em obra ou serviço particular, qualquer bem móvel, de propriedade ou à disposição de qualquer das entidades referidas no art. 1º desta Lei” (enriquecimento ilícito); art. 10, XIII — “permitir que se utilize, em obra ou serviço particular, veículos, máquinas, equipamentos ou material de qualquer natureza” (lesão ao erário); art. 10, caput — ação ou omissão dolosa que enseje, efetiva e comprovadamente, perda patrimonial.",
    origem: "banco",
  },
  {
    id: "prf-adm-026",
    materia: "adm",
    topico: "Serviços públicos",
    subassunto: "Rescisão por iniciativa da concessionária (art. 39)",
    dificuldade: 4,
    raciocinio: "Diagnóstico de situação: meio adequado de extinção pedido pela concessionária",
    enunciado:
      "A concessionária de uma rodovia federal alega que a União descumpriu o contrato ao não autorizar o reajuste da tarifa nas datas previstas e quer deixar a concessão. Pela Lei 8.987/1995,",
    alternativas: [
      "a concessionária pode declarar a caducidade da concessão por ato próprio, após notificar a União e conceder-lhe prazo para corrigir as falhas apontadas.",
      "a concessionária pode suspender a cobrança e a prestação dos serviços desde logo, invocando a exceção do contrato não cumprido, até que a União regularize o reajuste.",
      "a concessionária só pode rescindir o contrato por ação judicial, e os serviços não podem ser interrompidos ou paralisados até o trânsito em julgado da decisão.",
      "a concessionária pode obter a encampação da concessão, desde que a requeira à União e comprove o descumprimento contratual em processo administrativo com ampla defesa.",
      "a concessionária pode rescindir o contrato por simples notificação extrajudicial, com prazo mínimo de 90 dias, durante o qual os serviços devem ser mantidos.",
    ],
    correta: 2,
    explicacao:
      "Pelo art. 39 da Lei 8.987/1995, o contrato “poderá ser rescindido por iniciativa da concessionária, no caso de descumprimento das normas contratuais pelo poder concedente, mediante ação judicial especialmente intentada para esse fim”. E, pelo parágrafo único, os serviços “não poderão ser interrompidos ou paralisados, até a decisão judicial transitada em julgado”.",
    explicacaoErradas:
      "A caducidade é a extinção por inexecução da própria concessionária e é declarada pelo poder concedente (art. 38). A suspensão imediata dos serviços contraria o parágrafo único do art. 39 e a continuidade. A encampação é a retomada pelo poder concedente, por interesse público, com lei autorizativa específica e prévia indenização (art. 37), e não depende de pedido da concessionária. E a lei não admite rescisão por notificação extrajudicial: exige ação judicial.",
    pegadinha:
      "A exceção do contrato não cumprido, comum nos contratos privados, não autoriza a concessionária a parar o serviço: a continuidade impõe que ela mantenha a prestação até o trânsito em julgado da ação de rescisão.",
    conhecimento:
      "Lei 8.987/1995, art. 35: extinção por advento do termo, encampação, caducidade, rescisão, anulação e falência ou extinção da empresa. Art. 37: encampação — interesse público, lei autorizativa específica e prévio pagamento da indenização. Art. 38: caducidade — inexecução da concessionária, declarada pelo poder concedente. Art. 39: rescisão pela concessionária, por ação judicial; serviços mantidos até o trânsito em julgado.",
    origem: "banco",
  },
  {
    id: "prf-adm-027",
    materia: "adm",
    topico: "Serviços públicos",
    subassunto: "Continuidade do serviço e hipóteses de interrupção (art. 6º, §§ 3º e 4º)",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: interrupção legítima do serviço e restrições de dia",
    enunciado:
      "Uma concessionária de distribuição de energia elétrica que atende residências e comércios ao longo de uma rodovia federal consultou a área jurídica sobre as hipóteses de interrupção do serviço. À luz da Lei 8.987/1995, considere as afirmativas:\n\nI. Não caracteriza descontinuidade a interrupção por inadimplemento do usuário, após prévio aviso, considerado o interesse da coletividade.\nII. A interrupção em situação de emergência, motivada por razões de ordem técnica ou de segurança das instalações, não caracteriza descontinuidade e dispensa o aviso prévio.\nIII. A interrupção por inadimplemento pode iniciar-se numa sexta-feira, desde que ela não seja dia anterior a feriado.\nIV. Toda interrupção por inadimplemento caracteriza descontinuidade do serviço e só pode ocorrer por decisão judicial.\n\nEstá correto o que se afirma em",
    alternativas: ["I, II e III, apenas.", "I e II, apenas.", "II e IV, apenas.", "I, III e IV, apenas.", "III e IV, apenas."],
    correta: 1,
    explicacao:
      "A afirmativa I está correta: pelo art. 6º, § 3º, II, não é descontinuidade a interrupção, após prévio aviso, por inadimplemento do usuário, considerado o interesse da coletividade. A II também: a interrupção em situação de emergência, motivada por razões técnicas ou de segurança das instalações, não é descontinuidade (§ 3º, I), e o aviso prévio só se exige fora da emergência. Logo, I e II.",
    explicacaoErradas:
      "A afirmativa III está errada: pelo § 4º, incluído pela Lei 14.015/2020, a interrupção por inadimplemento “não poderá iniciar-se na sexta-feira, no sábado ou no domingo, nem em feriado ou no dia anterior a feriado” — a sexta-feira é vedada em qualquer caso. A IV também: a interrupção por inadimplemento, nas condições legais, não é descontinuidade e não depende de decisão judicial. Por isso caem as combinações com III ou IV.",
    pegadinha:
      "A afirmativa III soa razoável porque mistura duas vedações: a do dia anterior a feriado, que existe, e uma suposta liberação da sexta-feira, que não existe.",
    conhecimento:
      "Lei 8.987/1995, art. 6º, § 3º: não é descontinuidade a interrupção em situação de emergência ou após prévio aviso, quando motivada por razões de ordem técnica ou de segurança das instalações (I) ou por inadimplemento do usuário, considerado o interesse da coletividade (II). § 4º (Lei 14.015/2020): a interrupção por inadimplemento não pode iniciar-se na sexta-feira, no sábado ou no domingo, nem em feriado ou no dia anterior a feriado.",
    origem: "banco",
  },
  {
    id: "prf-adm-028",
    materia: "adm",
    topico: "Serviços públicos",
    subassunto: "Concessão × permissão de serviço público",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: requisitos e características da permissão na Lei 8.987/1995",
    enunciado:
      "Numa reunião sobre a delegação do transporte rodoviário interestadual de passageiros, discutiram-se as diferenças entre concessão e permissão de serviço público na Lei 8.987/1995. Sobre o tema, é correto afirmar que",
    alternativas: [
      "a permissão dispensa licitação, por ser ato unilateral e precário, ao passo que a concessão sempre exige licitação prévia.",
      "a concessão pode ser outorgada a pessoa física que demonstre capacidade, ao passo que a permissão só pode ser outorgada a pessoa jurídica ou consórcio de empresas.",
      "a permissão é formalizada por contrato de adesão por prazo determinado, insuscetível de revogação unilateral enquanto o permissionário cumprir suas obrigações.",
      "a permissão admite pessoa física ou jurídica e é formalizada por contrato de adesão, com precariedade e revogabilidade unilateral, mas também exige licitação.",
      "a concessão e a permissão só podem ser outorgadas a pessoas jurídicas, e a diferença entre elas está apenas no prazo, determinado na primeira e indeterminado na segunda.",
    ],
    correta: 3,
    explicacao:
      "Pelo art. 2º, IV, da Lei 8.987/1995, a permissão é a delegação, a título precário, mediante licitação, da prestação de serviços públicos a pessoa física ou jurídica que demonstre capacidade. E, pelo art. 40, é formalizada mediante contrato de adesão, que observará, inclusive, “a precariedade e a revogabilidade unilateral do contrato pelo poder concedente”.",
    explicacaoErradas:
      "As duas formas exigem licitação: a precariedade não dispensa o certame. A concessão é outorgada a pessoa jurídica ou consórcio de empresas, nunca a pessoa física; a permissão é que admite a pessoa física. O contrato de adesão da permissão é revogável unilateralmente, pelo próprio art. 40. E a diferença não se resume ao prazo: envolve os destinatários, a precariedade e a formalização.",
    pegadinha:
      "A permissão é precária e se formaliza por contrato de adesão, o que leva a pensar que dispensa licitação. O art. 2º, IV, diz o contrário: é delegação “mediante licitação”.",
    conhecimento:
      "Lei 8.987/1995: art. 2º, II — concessão: mediante licitação, na modalidade concorrência ou diálogo competitivo, a pessoa jurídica ou consórcio de empresas, por sua conta e risco e por prazo determinado; art. 2º, IV — permissão: a título precário, mediante licitação, a pessoa física ou jurídica; art. 40 — contrato de adesão, com precariedade e revogabilidade unilateral.",
    origem: "banco",
  },
  {
    id: "prf-adm-029",
    materia: "adm",
    topico: "Organização administrativa",
    subassunto: "Desconcentração, outorga e delegação",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: formas de distribuição de competências entre órgãos e entidades",
    enunciado:
      "Num curso de formação, o instrutor comparou três entes que atuam nas rodovias federais: a Polícia Rodoviária Federal, o Departamento Nacional de Infraestrutura de Transportes (DNIT) e a concessionária privada que administra um trecho de rodovia concedido. Considere as afirmativas:\n\nI. A PRF é órgão da administração direta da União, resultado de desconcentração, e não tem personalidade jurídica própria.\nII. O DNIT é autarquia e recebeu, por outorga legal, a titularidade e a execução das competências que exerce.\nIII. A concessionária, por prestar serviço público delegado pela União, passa a integrar a administração indireta federal.\nIV. A concessionária recebeu apenas a execução do serviço, por delegação feita mediante contrato.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "I, II e IV, apenas.", "I, II e III, apenas.", "II e IV, apenas.", "I, III e IV, apenas."],
    correta: 1,
    explicacao:
      "A afirmativa I está correta: a PRF é órgão da União, fruto de desconcentração, sem personalidade jurídica própria. A II também: o DNIT é autarquia federal criada por lei (Lei 10.233/2001, art. 79), e a descentralização por outorga, ou por serviços, transfere à entidade a titularidade e a execução. A IV também: a concessão é descentralização por delegação, ou por colaboração, feita por contrato, que transfere só a execução. Logo, I, II e IV.",
    explicacaoErradas:
      "A afirmativa III está errada: a concessionária é pessoa jurídica de direito privado que colabora com o Estado por contrato e não integra a administração indireta, formada apenas por autarquias, fundações públicas, empresas públicas e sociedades de economia mista. Por isso caem as combinações com III e as que deixam de fora I ou IV.",
    pegadinha:
      "Prestar serviço público não faz da concessionária parte do Estado. Ela recebe só a execução, por contrato, e continua particular; a titularidade permanece com o poder concedente.",
    conhecimento:
      "Desconcentração: distribuição interna de competências entre órgãos da mesma pessoa jurídica. Descentralização por outorga (por serviços): por lei, titularidade e execução à entidade da indireta. Descentralização por delegação (por colaboração): por contrato ou ato unilateral, só a execução ao particular (concessão, permissão, autorização). Administração indireta: Decreto-Lei 200/1967, art. 4º, II.",
    origem: "banco",
  },
  {
    id: "prf-adm-030",
    materia: "adm",
    topico: "Organização administrativa",
    subassunto: "Criação de autarquias, empresas públicas e subsidiárias (art. 37, XIX e XX)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: lei que cria × lei que autoriza e início da personalidade",
    enunciado:
      "Sobre a criação das entidades da administração indireta, à luz do art. 37, XIX e XX, da Constituição e da jurisprudência do STF, é correto afirmar que",
    alternativas: [
      "a autarquia é criada diretamente por lei específica; a empresa pública tem a instituição autorizada por lei e adquire personalidade com o registro dos atos constitutivos.",
      "a autarquia e a empresa pública são criadas diretamente por lei específica, e a personalidade de ambas surge com a publicação da lei, sem registro.",
      "a empresa pública depende de lei complementar que autorize sua instituição, e a autarquia pode ser criada por decreto, se a lei definir sua área de atuação.",
      "a criação de subsidiária de empresa pública exige lei específica para cada subsidiária, sendo insuficiente a autorização genérica prevista na lei que autorizou a instituição da matriz.",
      "a fundação pública, qualquer que seja o regime jurídico, tem a instituição apenas autorizada por lei, e cabe à lei ordinária definir suas áreas de atuação.",
    ],
    correta: 0,
    explicacao:
      "Pelo art. 37, XIX, “somente por lei específica poderá ser criada autarquia e autorizada a instituição de empresa pública, de sociedade de economia mista e de fundação”. A autarquia, pessoa de direito público, nasce com a lei; a empresa pública, pessoa de direito privado, tem a instituição autorizada por lei e adquire personalidade com o registro dos atos constitutivos (Código Civil, art. 45).",
    explicacaoErradas:
      "A empresa pública não é criada diretamente pela lei, e sua personalidade depende do registro. A autorização vem de lei ordinária específica, e a autarquia não pode ser criada por decreto. Para as subsidiárias, o STF decidiu na ADI 1.649 que basta a autorização genérica na lei que autorizou a matriz. E a fundação de direito público é criada diretamente por lei, como as autarquias; a lei complementar — não a ordinária — define as áreas de atuação das fundações.",
    pegadinha:
      "A lei complementar do art. 37, XIX, refere-se só às áreas de atuação das fundações, não à autorização para instituir empresas públicas. E a autorização “em cada caso” para subsidiárias (inciso XX) é atendida, segundo o STF, pela previsão genérica na lei da matriz.",
    conhecimento:
      "CF, art. 37, XIX: lei específica cria autarquia e autoriza a instituição de empresa pública, sociedade de economia mista e fundação; lei complementar define as áreas de atuação das fundações. XX: autorização legislativa, em cada caso, para subsidiárias e participação em empresa privada. STF, ADI 1.649. Código Civil, art. 45: a personalidade das pessoas de direito privado começa com a inscrição do ato constitutivo no registro.",
    origem: "banco",
  },
  {
    id: "prf-adm-031",
    materia: "adm",
    topico: "Organização administrativa",
    subassunto: "Empresa pública e sociedade de economia mista (Lei 13.303/2016)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: composição do capital, forma societária e foro das estatais",
    enunciado:
      "Sobre as empresas públicas e as sociedades de economia mista federais, à luz da Lei 13.303/2016 e da Constituição, é correto afirmar que",
    alternativas: [
      "a empresa pública deve ser constituída sob a forma de sociedade anônima, e a sociedade de economia mista pode adotar qualquer forma societária admitida em direito.",
      "a empresa pública não admite a participação de outras entidades da administração indireta em seu capital, que deve pertencer por inteiro a um único ente federativo.",
      "a sociedade de economia mista federal tem suas causas processadas na Justiça Federal, e a empresa pública federal, na Justiça Estadual, salvo se a União intervier no processo como interessada.",
      "o capital da empresa pública é todo público, e pode haver nele participação de entidades da administração indireta, se o ente mantiver a maioria do capital votante.",
      "a sociedade de economia mista tem a maioria do capital votante em mãos de particulares, cabendo ao ente público apenas ações preferenciais sem direito a voto.",
    ],
    correta: 3,
    explicacao:
      "Pela Lei 13.303/2016, o capital social da empresa pública é integralmente detido pelo poder público (art. 3º), mas o parágrafo único admite a participação de outras pessoas jurídicas de direito público interno e de entidades da administração indireta, “desde que a maioria do capital votante permaneça em propriedade” do ente federativo. O capital continua todo público, ainda que dividido.",
    explicacaoErradas:
      "A forma de sociedade anônima é obrigatória para a sociedade de economia mista (art. 4º); a lei não a impõe à empresa pública. A empresa pública admite, sim, outros sócios públicos (art. 3º, parágrafo único). A competência está invertida: a empresa pública federal litiga na Justiça Federal (CF, art. 109, I), e a sociedade de economia mista, na Justiça comum estadual (Súmula 556 do STF), salvo intervenção da União (Súmula 517). E, na sociedade de economia mista, a maioria das ações com direito a voto pertence ao ente ou a entidade da administração indireta.",
    pegadinha:
      "“Capital integralmente público” não quer dizer capital de um único ente. Várias entidades públicas podem ser sócias da empresa pública, desde que o ente controlador mantenha a maioria do capital votante.",
    conhecimento:
      "Lei 13.303/2016: art. 3º — empresa pública: direito privado, criação autorizada por lei, capital integralmente detido pelo ente; parágrafo único — admite outras pessoas de direito público e entidades da indireta, mantida a maioria do capital votante com o ente; art. 4º — sociedade de economia mista: sociedade anônima, maioria das ações com voto do ente ou de entidade da indireta. CF, art. 109, I; Súmulas 517 e 556 do STF.",
    origem: "banco",
  },
  {
    id: "prf-adm-032",
    materia: "adm",
    topico: "Lei 8.112/1990",
    subassunto: "Reintegração, recondução e aproveitamento em cadeia",
    dificuldade: 5,
    raciocinio: "Análise de caso: efeitos da reintegração sobre o ocupante do cargo e sobre o cargo de origem dele",
    enunciado:
      "Ana, servidora estável, foi demitida, e seu cargo foi provido por Bruno, servidor estável que deixou o cargo que ocupava em outro órgão federal para tomar posse no novo. Anos depois, decisão judicial invalidou a demissão de Ana. Nesse meio-tempo, o antigo cargo de Bruno foi provido por Carla. Pela Lei 8.112/1990,",
    alternativas: [
      "Ana será reintegrada, com ressarcimento de todas as vantagens, e Bruno, sem direito a indenização, será aproveitado em outro cargo, porque o seu cargo de origem já está provido.",
      "Ana será reintegrada, com ressarcimento das vantagens, e Bruno será reconduzido ao cargo de origem, cabendo a Carla, por ser a ocupante mais recente, ser posta em disponibilidade.",
      "Ana será reconduzida ao cargo, sem ressarcimento das vantagens do período, e Bruno permanecerá nele, porque a decisão judicial não alcança quem o ocupou de boa-fé.",
      "Ana será reintegrada, com ressarcimento das vantagens, e Bruno será exonerado, com direito a indenização pelos prejuízos decorrentes da perda do cargo que ocupava.",
      "Ana será aproveitada em outro cargo de atribuições compatíveis, porque o seu já está provido, e Bruno permanecerá no cargo, sem qualquer alteração na sua situação funcional ou remuneratória.",
    ],
    correta: 0,
    explicacao:
      "Invalidada a demissão, Ana é reintegrada no cargo anteriormente ocupado, com ressarcimento de todas as vantagens (art. 28). Bruno, eventual ocupante, seria reconduzido ao cargo de origem, sem direito a indenização (art. 28, § 2º, e art. 29, II); como esse cargo já está provido por Carla, ele será aproveitado em outro (art. 29, parágrafo único), em cargo de atribuições e vencimentos compatíveis (art. 30).",
    explicacaoErradas:
      "Carla não é atingida: quem cede o lugar é Bruno, e, provido o cargo de origem dele, a lei manda aproveitá-lo em outro. Ana não é reconduzida, mas reintegrada, com ressarcimento das vantagens, e a boa-fé de Bruno não impede a reintegração. Bruno não é exonerado nem indenizado: a Constituição e a lei afastam a indenização. E o aproveitamento é solução para o ocupante, não para a reintegrada, que volta ao próprio cargo.",
    pegadinha:
      "A cadeia confunde: a reintegração de Ana desloca Bruno, e não Carla. Para Bruno, a recondução é a primeira solução, mas o parágrafo único do art. 29 manda aproveitá-lo em outro cargo quando o de origem estiver provido.",
    conhecimento:
      "Lei 8.112/1990: art. 28 — reintegração do servidor estável no cargo anteriormente ocupado, ou no resultante de sua transformação, quando invalidada a demissão, com ressarcimento de todas as vantagens; § 2º — o eventual ocupante é reconduzido ao cargo de origem, sem indenização, aproveitado em outro ou posto em disponibilidade; art. 29, II, e parágrafo único; art. 30. CF, art. 41, § 2º.",
    origem: "banco",
  },
  {
    id: "prf-adm-033",
    materia: "adm",
    topico: "Lei 8.112/1990",
    subassunto: "Posse e exercício: prazos e consequências",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: prazos de posse e exercício e efeitos do descumprimento",
    enunciado:
      "Aprovado em concurso para cargo efetivo de um órgão federal, Marcos teve a nomeação publicada enquanto estava em viagem ao exterior. Sobre a posse e o exercício, pela Lei 8.112/1990,",
    alternativas: [
      "a posse deve ocorrer em até 30 dias da publicação, pessoalmente, vedada a representação, e, empossado, o servidor tem 30 dias para entrar em exercício.",
      "se não tomar posse em 30 dias da publicação, será exonerado de ofício; se tomar posse e não entrar em exercício em 15 dias, a nomeação será tornada sem efeito pela autoridade.",
      "a posse independe de inspeção médica, exigida apenas para o exercício, e o prazo para tomar posse conta da data da homologação do resultado do concurso.",
      "a posse ocorre em todas as formas de provimento, inclusive na reintegração e na readaptação, sempre no prazo de 30 dias da publicação do respectivo ato.",
      "a posse pode dar-se por procuração específica; sem posse em 30 dias, o ato de provimento é tornado sem efeito, e o empossado sem exercício em 15 dias é exonerado.",
    ],
    correta: 4,
    explicacao:
      "Pela Lei 8.112/1990, a posse ocorre em 30 dias contados da publicação do ato de provimento (art. 13, § 1º) e pode dar-se mediante procuração específica (§ 3º), o que resolve a situação de quem está no exterior. Sem posse no prazo, o ato de provimento é tornado sem efeito (§ 6º). Empossado, o servidor tem 15 dias para entrar em exercício (art. 15, § 1º), sob pena de exoneração (§ 2º).",
    explicacaoErradas:
      "A posse por procurador é expressamente admitida, e o prazo do exercício é de 15 dias. As consequências estão trocadas quando se diz que a falta de posse leva à exoneração e a falta de exercício torna a nomeação sem efeito: sem posse, não há servidor a exonerar. A posse depende de prévia inspeção médica oficial (art. 14), e o prazo conta da publicação do ato de provimento. E só há posse nos casos de provimento por nomeação (art. 13, § 4º).",
    pegadinha:
      "Inverter as consequências: sem posse, o ato de provimento é tornado sem efeito, porque o vínculo nem chegou a se formar; com posse e sem exercício, há servidor investido, e por isso a lei fala em exoneração.",
    conhecimento:
      "Lei 8.112/1990: art. 13, § 1º — posse em 30 dias da publicação do ato de provimento; § 3º — por procuração específica; § 4º — só há posse nos casos de provimento por nomeação; § 6º — sem posse no prazo, o ato de provimento é tornado sem efeito; art. 14 — prévia inspeção médica oficial; art. 15, § 1º — exercício em 15 dias da posse; § 2º — exoneração se não entrar em exercício.",
    origem: "banco",
  },
  {
    id: "prf-adm-034",
    materia: "adm",
    topico: "Lei 8.112/1990",
    subassunto: "Remoção a pedido: hipóteses que independem do interesse da Administração",
    dificuldade: 4,
    raciocinio: "Classificação: enquadrar cada pedido nas modalidades de remoção do art. 36",
    enunciado:
      "Três servidores de um órgão federal pediram remoção para outra localidade. Ana quer acompanhar o marido, servidor público estadual que foi deslocado de ofício, no interesse da Administração, para aquela cidade. Bruno quer remoção por motivo de saúde do filho, que vive às suas expensas e consta do seu assentamento funcional, comprovada por junta médica oficial. Carla quer apenas morar perto dos pais. Pela Lei 8.112/1990,",
    alternativas: [
      "as três remoções dependem do interesse da Administração, porque toda remoção a pedido é ato discricionário.",
      "as remoções de Ana e Bruno independem do interesse da Administração, ao passo que a de Carla fica a critério da Administração.",
      "apenas a remoção de Bruno independe do interesse da Administração, porque a de Ana exigiria que o marido fosse servidor do mesmo órgão.",
      "as três são hipóteses de redistribuição, porque implicam deslocamento do servidor para outra localidade.",
      "a remoção de Ana independe do interesse da Administração, mas a de Bruno depende, porque a saúde de dependente não está entre as hipóteses legais.",
    ],
    correta: 1,
    explicacao:
      "Pelo art. 36, parágrafo único, III, independe do interesse da Administração a remoção a pedido para acompanhar cônjuge ou companheiro, “também servidor público civil ou militar, de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios, que foi deslocado no interesse da Administração” (alínea a) — caso de Ana —, e a remoção por saúde de dependente que viva às expensas do servidor e conste do assentamento funcional, comprovada por junta médica oficial (alínea b) — caso de Bruno. O pedido de Carla é remoção a pedido a critério da Administração (inciso II).",
    explicacaoErradas:
      "Nem toda remoção a pedido é discricionária: as do inciso III são direito do servidor quando preenchidos os requisitos. O cônjuge não precisa ser do mesmo órgão nem da mesma esfera. Redistribuição é o deslocamento do cargo, ocupado ou vago, para outro órgão ou entidade do mesmo Poder (art. 37), não do servidor. E a saúde de dependente está expressamente na alínea b.",
    pegadinha:
      "O marido de Ana é servidor estadual, e o órgão dela é federal, o que leva a pensar que a remoção não seria obrigatória. A alínea a alcança cônjuge servidor de qualquer Poder e de qualquer ente; exige-se só que ele tenha sido deslocado no interesse da Administração.",
    conhecimento:
      "Lei 8.112/1990, art. 36: “Remoção é o deslocamento do servidor, a pedido ou de ofício, no âmbito do mesmo quadro, com ou sem mudança de sede.” Modalidades: I — de ofício, no interesse da Administração; II — a pedido, a critério da Administração; III — a pedido, independentemente do interesse da Administração: a) acompanhar cônjuge ou companheiro deslocado no interesse da Administração; b) saúde, com junta médica oficial; c) processo seletivo.",
    origem: "banco",
  },
  {
    id: "prf-adm-035",
    materia: "adm",
    topico: "Lei 8.112/1990",
    subassunto: "Licença para capacitação (art. 87)",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: requisitos, duração e acumulação da licença para capacitação",
    enunciado:
      "Um servidor federal completou cinco anos de efetivo exercício sem nunca ter usufruído da licença para capacitação e quer fazer um curso de especialização de seis meses. Pela Lei 8.112/1990, ele",
    alternativas: [
      "tem direito a seis meses de licença remunerada para capacitação, porque os períodos de cada quinquênio se acumulam quando não usufruídos no tempo próprio.",
      "pode obter licença para tratar de interesses particulares por até três anos, com remuneração, desde que a dedique a cursos de capacitação.",
      "pode afastar-se, no interesse da Administração, com remuneração, por até três meses para capacitação, sem acumular períodos de quinquênios distintos.",
      "tem direito subjetivo à licença para capacitação de três meses, que a Administração não pode negar, por ter completado o quinquênio.",
      "só poderá afastar-se para capacitação depois de dez anos de efetivo exercício, quando completar dois quinquênios e somar seis meses de licença.",
    ],
    correta: 2,
    explicacao:
      "Pelo art. 87, após cada quinquênio de efetivo exercício, o servidor “poderá, no interesse da Administração”, afastar-se do cargo efetivo, com a respectiva remuneração, por até três meses, para curso de capacitação profissional. Os períodos não são acumuláveis (parágrafo único): para o curso de seis meses, ele terá no máximo três meses de licença.",
    explicacaoErradas:
      "Os períodos de quinquênios distintos não se somam, e ele só completou um. A licença para tratar de interesses particulares é sem remuneração (art. 91). Não há direito subjetivo: a licença é concedida no interesse da Administração. E não é preciso esperar dois quinquênios: basta um.",
    pegadinha:
      "Ler o parágrafo único ao contrário. Como os períodos não são acumuláveis, quem não usou a licença num quinquênio perde aquele período; ele não se soma ao seguinte.",
    conhecimento:
      "Lei 8.112/1990, art. 87: após cada quinquênio, no interesse da Administração, afastamento remunerado por até três meses para curso de capacitação; parágrafo único: períodos não acumuláveis. Art. 91: licença para o trato de assuntos particulares, a critério da Administração, a ocupante de cargo efetivo fora do estágio probatório, por até três anos consecutivos, sem remuneração.",
    origem: "banco",
  },
  {
    id: "prf-adm-036",
    materia: "adm",
    topico: "Processo administrativo (Lei 9.784/1999)",
    subassunto: "Delegação de competência: revogação e autoridade coatora",
    dificuldade: 5,
    raciocinio: "Análise de caso: efeitos da delegação e legitimidade passiva no mandado de segurança",
    enunciado:
      "Por portaria publicada no Diário Oficial, o diretor de um órgão federal delegou, por seis meses, ao coordenador de uma unidade subordinada a competência para conceder autorizações de uso de espaços do órgão. Durante a vigência da delegação, um pedido de autorização negado pelo coordenador foi impugnado por mandado de segurança. Pela Lei 9.784/1999 e pela jurisprudência do STF,",
    alternativas: [
      "a delegação seria inválida se o coordenador não fosse subordinado ao diretor, porque a lei só admite delegar competência a órgão ou titular hierarquicamente subordinado.",
      "a delegação vincula o diretor até o fim dos seis meses, e as autorizações dadas pelo coordenador se consideram editadas pelo próprio diretor.",
      "o diretor pode revogar a delegação antes do prazo, e o mandado de segurança contra o ato praticado pelo coordenador deve indicá-lo como autoridade coatora.",
      "a mesma portaria poderia delegar ao coordenador a decisão dos recursos interpostos contra as autorizações negadas, desde que o ato fixe prazo certo.",
      "a revogação da delegação dispensa publicação no meio oficial, porque basta comunicar a decisão diretamente ao coordenador.",
    ],
    correta: 2,
    explicacao:
      "O ato de delegação “é revogável a qualquer tempo pela autoridade delegante” (Lei 9.784/1999, art. 14, § 2º), ainda que tenha fixado duração, e as decisões adotadas por delegação “considerar-se-ão editadas pelo delegado” (§ 3º). Por isso, pela Súmula 510 do STF, praticado o ato no exercício de competência delegada, o mandado de segurança é impetrado contra o delegado — aqui, o coordenador.",
    explicacaoErradas:
      "A delegação não exige subordinação: o art. 12 a admite “ainda que estes não lhe sejam hierarquicamente subordinados”. O prazo não impede a revogação, e as decisões do delegado se consideram editadas por ele. A decisão de recursos administrativos é indelegável (art. 13, II), com ou sem prazo. E a delegação e sua revogação devem ser publicadas no meio oficial (art. 14, caput).",
    pegadinha:
      "A delegação por prazo certo parece vincular o delegante até o fim, e as decisões do coordenador parecem continuar sendo do diretor. A lei diz o oposto nos dois pontos: revogação a qualquer tempo e decisões imputadas ao delegado.",
    conhecimento:
      "Lei 9.784/1999: art. 12 — delegação de parte da competência, ainda que sem subordinação; art. 13 — indelegáveis: atos normativos, decisão de recursos e competência exclusiva; art. 14 — delegação e revogação publicadas no meio oficial; § 2º — revogável a qualquer tempo; § 3º — decisões editadas pelo delegado. Súmula 510 do STF.",
    origem: "banco",
  },
  {
    id: "prf-adm-037",
    materia: "adm",
    topico: "Processo administrativo (Lei 9.784/1999)",
    subassunto: "Recurso administrativo: legitimidade, prazo e reconsideração",
    dificuldade: 5,
    raciocinio: "Análise de caso: legitimidade de associação e trâmite do recurso",
    enunciado:
      "Uma decisão administrativa de um órgão federal, proferida em processo do qual participou apenas uma empresa de transporte, afetou interesses coletivos de toda a categoria. Uma associação representativa dos transportadores, que não foi parte no processo, quer recorrer. Pela Lei 9.784/1999,",
    alternativas: [
      "a associação não tem legitimidade para recorrer, porque só os titulares de direitos que foram parte no processo podem interpor recurso administrativo.",
      "a associação pode recorrer em 15 dias, contados da publicação da decisão, e o recurso será dirigido diretamente à autoridade superior à que decidiu.",
      "a associação pode recorrer, mas o recurso só será admitido se ela prestar caução, porque não foi parte no processo e não tem interesse direto.",
      "a associação pode recorrer, e o recurso tramitará por quantas instâncias forem necessárias até que a matéria seja apreciada pela autoridade máxima do órgão.",
      "a associação pode recorrer em 10 dias, e o recurso, dirigido a quem decidiu, poderá ser reconsiderado em 5 dias antes de subir à autoridade superior.",
    ],
    correta: 4,
    explicacao:
      "Pelo art. 58, III, têm legitimidade para recorrer “as organizações e associações representativas, no tocante a direitos e interesses coletivos”, ainda que não tenham sido parte. O prazo é de dez dias, contado da ciência ou divulgação oficial da decisão (art. 59), e o recurso é dirigido à autoridade que decidiu, que, se não reconsiderar em cinco dias, o encaminhará à superior (art. 56, § 1º).",
    explicacaoErradas:
      "A legitimidade não se limita a quem foi parte: inclui terceiros afetados e associações representativas. O prazo geral é de dez dias, e o recurso não vai direto à superior. A interposição independe de caução, salvo exigência legal (art. 56, § 2º), e a Súmula Vinculante 21 veda depósito ou arrolamento prévios. E o recurso tramita por no máximo três instâncias, salvo disposição legal diversa (art. 57).",
    pegadinha:
      "A associação não participou do processo, o que sugere falta de legitimidade. A lei abre o recurso às associações representativas quanto a interesses coletivos, e o trâmite passa primeiro pela autoridade que decidiu, com cinco dias para reconsiderar.",
    conhecimento:
      "Lei 9.784/1999: art. 56, § 1º — recurso a quem decidiu, reconsideração em 5 dias; § 2º — sem caução, salvo exigência legal; art. 57 — até três instâncias; art. 58 — legitimados: partes (I), terceiros afetados (II), organizações e associações representativas, quanto a interesses coletivos (III), cidadãos ou associações, quanto a difusos (IV); art. 59 — 10 dias. SV 21.",
    origem: "banco",
  },
  {
    id: "prf-adm-038",
    materia: "adm",
    topico: "Processo administrativo (Lei 9.784/1999)",
    subassunto: "Impedimento e suspeição (arts. 18 a 21)",
    dificuldade: 5,
    raciocinio: "Classificação: distinguir impedimento e suspeição e as consequências de cada um",
    enunciado:
      "Num processo administrativo federal, foram designados três servidores para atuar na instrução. X tem inimizade notória com a esposa do interessado; Y é casado com a perita que elaborou o laudo juntado aos autos; e Z move ação judicial contra o interessado. Pela Lei 9.784/1999,",
    alternativas: [
      "X, Y e Z estão impedidos, e a omissão de qualquer deles em comunicar o fato à autoridade competente constitui falta grave para efeitos disciplinares.",
      "X está impedido, Y e Z são suspeitos, e a suspeição só pode ser reconhecida se for arguida pelo interessado na primeira oportunidade em que falar nos autos.",
      "apenas Z está impedido, porque a situação de Y diz respeito à esposa, e não a ele, e a inimizade de X com a esposa do interessado não está prevista na lei.",
      "X é suspeito, Y e Z estão impedidos, e a omissão de Y ou Z em comunicar o impedimento é falta grave para efeitos disciplinares.",
      "X e Y são suspeitos, Z está impedido, e o indeferimento da alegação de suspeição admite recurso, que terá efeito suspensivo até a decisão final.",
    ],
    correta: 3,
    explicacao:
      "A inimizade notória com o cônjuge de um interessado é suspeição (art. 20): X é suspeito. Y está impedido porque a esposa atuou como perita (art. 18, II, que alcança essas situações quanto ao cônjuge, companheiro ou parente e afins até o terceiro grau). Z está impedido porque litiga judicialmente com o interessado (art. 18, III). O impedido deve comunicar o fato à autoridade competente, e a omissão “constitui falta grave, para efeitos disciplinares” (art. 19 e parágrafo único).",
    explicacaoErradas:
      "X não está impedido: amizade íntima e inimizade notória são causas de suspeição, que pode ser arguida, e a falta grave se refere ao dever de comunicar o impedimento. Atuação do cônjuge como perito e litígio com o interessado são impedimentos, não suspeição. A lei prevê expressamente a situação de Y, quanto ao cônjuge, e a inimizade com o cônjuge do interessado. E o recurso contra o indeferimento da suspeição não tem efeito suspensivo (art. 21).",
    pegadinha:
      "As duas situações com esposas parecem iguais, mas não são: a esposa de Y atuou como perita (impedimento de Y), enquanto X tem inimizade com a esposa do interessado (suspeição de X).",
    conhecimento:
      "Lei 9.784/1999: art. 18 — impedimento: interesse na matéria (I); atuação como perito, testemunha ou representante, também quanto ao cônjuge, companheiro ou parente e afins até o 3º grau (II); litígio com o interessado ou seu cônjuge ou companheiro (III); art. 19 — dever de comunicar; omissão é falta grave; art. 20 — suspeição: amizade íntima ou inimizade notória com interessados ou seus cônjuges, companheiros, parentes e afins até o 3º grau; art. 21 — recurso sem efeito suspensivo.",
    origem: "banco",
  },
  {
    id: "prf-adm-039",
    materia: "adm",
    topico: "Processo administrativo (Lei 9.784/1999)",
    subassunto: "Intimação: antecedência mínima, nulidade e efeitos da ausência",
    dificuldade: 4,
    raciocinio: "Análise de procedimento: validade da intimação e consequências do não comparecimento",
    enunciado:
      "Num processo administrativo federal, o interessado foi intimado por via postal, com aviso de recebimento, para comparecer a uma audiência marcada para dois dias úteis depois do recebimento da intimação, e não compareceu. Pela Lei 9.784/1999,",
    alternativas: [
      "a ausência importa reconhecimento da verdade dos fatos alegados pela Administração, que pode decidir sem ouvir o interessado.",
      "a intimação é nula, por não respeitar a antecedência mínima de três dias úteis, e a ausência, de todo modo, não importaria reconhecimento dos fatos.",
      "a intimação é válida, porque a lei exige antecedência mínima de dois dias úteis, e a ausência do interessado implica renúncia ao direito de produzir provas.",
      "a intimação é nula, porque a lei admite apenas a intimação pessoal, por servidor do órgão, vedada a via postal em processo administrativo.",
      "a intimação é válida, e a nulidade só poderia ser reconhecida se o interessado tivesse comparecido e alegado o vício na própria audiência.",
    ],
    correta: 1,
    explicacao:
      "A intimação deve observar a antecedência mínima de três dias úteis quanto à data de comparecimento (art. 26, § 2º); com dois dias úteis, ela é nula, porque “as intimações serão nulas quando feitas sem observância das prescrições legais” (§ 5º). A via postal com aviso de recebimento é meio válido (§ 3º), mas não salva o prazo. E, ainda que a intimação fosse regular, “o desatendimento da intimação não importa o reconhecimento da verdade dos fatos, nem a renúncia a direito pelo administrado” (art. 27).",
    explicacaoErradas:
      "No processo administrativo federal não há confissão ficta: a ausência não faz presumir verdadeiros os fatos nem implica renúncia a direito, e a ampla defesa continua garantida no prosseguimento (art. 27, parágrafo único). A antecedência mínima é de três dias úteis. A lei admite a intimação por ciência no processo, via postal com aviso de recebimento, telegrama ou outro meio que assegure a ciência. E o comparecimento é que supre a falta ou irregularidade (§ 5º); a ausência não convalida o vício.",
    pegadinha:
      "O vício está no prazo, não no meio: a via postal com aviso de recebimento é válida, mas a audiência marcada para dois dias úteis depois desrespeita a antecedência mínima. Se o interessado tivesse comparecido, a nulidade estaria suprida.",
    conhecimento:
      "Lei 9.784/1999: art. 26, § 2º — antecedência mínima de três dias úteis; § 3º — ciência no processo, via postal com aviso de recebimento, telegrama ou outro meio que assegure a certeza da ciência; § 5º — nulas sem as prescrições legais, mas o comparecimento supre a falta ou irregularidade; art. 27 — o desatendimento não importa reconhecimento da verdade dos fatos nem renúncia a direito.",
    origem: "banco",
  },
  {
    id: "prf-adm-040",
    materia: "adm",
    topico: "Ato administrativo",
    subassunto: "Forma do ato (atos por gestos) e silêncio administrativo",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: forma não escrita e natureza jurídica do silêncio",
    enunciado:
      "Numa fiscalização, um policial rodoviário federal ordenou, por gestos, que um motorista parasse o veículo no acostamento. No mesmo órgão, um pedido de autorização de uso de espaço está sem resposta há meses, sem que nenhuma lei atribua efeito ao silêncio nesse caso. À luz da teoria do ato administrativo,",
    alternativas: [
      "a ordem por gestos não é ato administrativo, porque a forma escrita é requisito de existência de todo ato, e o silêncio equivale a deferimento tácito do pedido.",
      "a ordem por gestos é ato administrativo válido, e o silêncio equivale a indeferimento tácito, que pode ser impugnado como se fosse decisão motivada.",
      "a ordem por gestos é ato administrativo, embora não escrita, e o silêncio sem efeito legal não é ato, mas o interessado pode exigir em juízo que se decida.",
      "a ordem por gestos só obriga o motorista se for confirmada por escrito no auto de infração, e o silêncio, sem lei que lhe dê efeito, não é ato administrativo.",
      "a ordem por gestos é mero fato administrativo, sem conteúdo de vontade, e o silêncio, por ser omissão, não pode ser objeto de nenhum controle judicial.",
    ],
    correta: 2,
    explicacao:
      "A forma do ato é, em regra, escrita, mas a lei admite outras: no trânsito, os gestos do agente são sinais de trânsito (CTB, art. 87, VI), as ordens do agente prevalecem sobre as normas de circulação e os outros sinais (art. 89, I), e desobedecê-las é infração (art. 195). O silêncio, sem lei que lhe atribua efeito, não é ato, mas fato jurídico: a Administração tem o dever de decidir (Lei 9.784/1999, arts. 48 e 49), e o interessado pode buscar em juízo ordem para que ela o faça.",
    explicacaoErradas:
      "A forma escrita não é requisito de existência de todo ato: ordens verbais, por gestos ou por sinais são válidas quando a lei as admite. O silêncio só vale como deferimento ou indeferimento quando a lei o determina. A ordem do agente obriga por si mesma, sem confirmação no auto. Ela é ato, e não mero fato, porque declara a vontade da Administração e produz efeito jurídico — o dever de parar. E a omissão em decidir pode ser controlada pelo Judiciário.",
    pegadinha:
      "O silêncio não é ato, mas isso não o deixa sem controle. Ele só vale como decisão se a lei disser; fora disso, o interessado aponta a violação do dever de decidir e pede ao juiz que fixe prazo para a decisão.",
    conhecimento:
      "Forma: em regra escrita, admitidas formas verbais e por sinais (CTB, arts. 87, VI, e 89, I). Silêncio administrativo: só produz efeito quando a lei o prevê; sem lei, é fato jurídico. Lei 9.784/1999: art. 48 — dever de decidir; art. 49 — decisão em até 30 dias após a instrução, salvo prorrogação por igual período expressamente motivada.",
    origem: "banco",
  },
  {
    id: "prf-adm-041",
    materia: "adm",
    topico: "Anulação, revogação e prescrição",
    subassunto: "Formas de extinção: cassação, caducidade, contraposição e revogação",
    dificuldade: 5,
    raciocinio: "Associação: relacionar cada caso à forma de extinção do ato",
    enunciado:
      "Considere os seguintes casos de extinção de atos administrativos:\n\n1. a licença de funcionamento de um posto de combustíveis à margem de uma rodovia federal foi extinta porque o titular deixou de cumprir as condições ambientais exigidas para mantê-la;\n2. a licença de outro posto foi extinta porque lei posterior de zoneamento passou a proibir a atividade naquele local;\n3. a nomeação de um servidor para cargo em comissão perdeu efeito com a sua exoneração;\n4. uma autorização de uso de área pública foi retirada por ter deixado de ser conveniente.\n\nOs casos correspondem, respectivamente, a",
    alternativas: ["caducidade, cassação, revogação e contraposição.", "cassação, caducidade, contraposição e revogação.", "cassação, revogação, contraposição e caducidade.", "revogação, caducidade, cassação e contraposição.", "anulação, caducidade, revogação e cassação."],
    correta: 1,
    explicacao:
      "Na classificação de Celso Antônio Bandeira de Mello: a cassação extingue o ato porque o beneficiário deixou de cumprir as condições para mantê-lo (caso 1); a caducidade, porque norma superveniente tornou inadmissível a situação antes permitida (caso 2); a contraposição, ou derrubada, ocorre quando ato posterior, de efeitos contrários, extingue o anterior, como a exoneração em relação à nomeação (caso 3); e a revogação retira o ato válido por conveniência e oportunidade (caso 4).",
    explicacaoErradas:
      "Trocar cassação e caducidade é o erro mais comum: na cassação, a falta é do beneficiário; na caducidade, a mudança vem da lei nova, sem falta do titular. A exoneração não é revogação da nomeação, mas ato de efeitos contrários. E nenhum caso traz ilegalidade originária, o que exclui a anulação.",
    pegadinha:
      "A caducidade do ato administrativo não se confunde com a caducidade da concessão (Lei 8.987/1995, art. 38), que é a extinção do contrato por inexecução da concessionária e, nesse ponto, se parece mais com a cassação.",
    conhecimento:
      "Extinção do ato: cumprimento dos efeitos; desaparecimento do sujeito ou do objeto; renúncia; retirada — revogação (conveniência e oportunidade), anulação (ilegalidade), cassação (descumprimento das condições pelo beneficiário), caducidade (norma superveniente incompatível) e contraposição ou derrubada (ato posterior com efeitos contrários).",
    origem: "banco",
  },
  {
    id: "prf-adm-042",
    materia: "adm",
    topico: "Poderes da administração",
    subassunto: "Delegação do poder de polícia a estatais (Tema 532 do STF)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: requisitos e fases delegáveis do ciclo de polícia",
    enunciado:
      "Uma lei municipal atribuiu a uma sociedade de economia mista, de capital majoritariamente público, que presta exclusivamente serviço público de trânsito em regime não concorrencial, as atividades de fiscalizar o trânsito e de aplicar multas aos infratores. Considerando a tese fixada pelo STF no Tema 532 da repercussão geral,",
    alternativas: [
      "a delegação é inconstitucional, porque o poder de polícia, por envolver prerrogativas de autoridade, só pode ser exercido por pessoas jurídicas de direito público.",
      "a delegação é constitucional apenas quanto à fiscalização e ao consentimento, porque a aplicação de sanções é fase do ciclo de polícia que o STF considera indelegável a pessoas de direito privado.",
      "a delegação é constitucional, e a lei poderia atribuir à mesma entidade a edição de normas gerais sobre infrações de trânsito, porque todas as fases do ciclo de polícia são delegáveis.",
      "a delegação é constitucional, inclusive quanto às multas, por ter sido feita por lei a estatal de capital majoritariamente público, que presta só serviço próprio do Estado, sem concorrência.",
      "a delegação seria constitucional mesmo que a entidade fosse uma empresa privada concessionária, porque o STF admite delegar o poder de polícia a qualquer pessoa jurídica que preste serviço público.",
    ],
    correta: 3,
    explicacao:
      "No Tema 532 (RE 633.782), o STF fixou: “É constitucional a delegação do poder de polícia, por meio de lei, a pessoas jurídicas de direito privado integrantes da Administração Pública indireta de capital social majoritariamente público que prestem exclusivamente serviço público de atuação própria do Estado e em regime não concorrencial.” A entidade do caso preenche os requisitos, e a delegação alcança a fiscalização e a aplicação de multas.",
    explicacaoErradas:
      "A natureza privada, por si só, não impede a delegação, observados os requisitos da tese. A aplicação de sanções foi admitida no julgamento, superando o entendimento anterior do STJ. A ordem de polícia, que cria as normas, continua indelegável. E a tese não alcança empresas privadas concessionárias, que não integram a administração indireta.",
    pegadinha:
      "Quem estudou pelo entendimento antigo do STJ, firmado no caso da empresa de trânsito de Belo Horizonte, aprendeu que a sanção é indelegável a pessoas de direito privado. Em 2020, no RE 633.782, o STF admitiu delegar consentimento, fiscalização e sanção às estatais que cumpram os requisitos; só a ordem de polícia ficou de fora.",
    conhecimento:
      "Ciclo de polícia: ordem (normas, indelegável), consentimento, fiscalização e sanção. STF, Tema 532 (RE 633.782, 2020): delegação por lei a pessoas de direito privado da administração indireta, de capital majoritariamente público, que prestem exclusivamente serviço público de atuação própria do Estado, em regime não concorrencial.",
    origem: "banco",
  },
  {
    id: "prf-adm-043",
    materia: "adm",
    topico: "Poderes da administração",
    subassunto: "Licença × autorização: AET e habilitação",
    dificuldade: 4,
    raciocinio: "Classificação: natureza de dois atos de consentimento de polícia",
    enunciado:
      "Para levar uma carga que excede os limites de peso e dimensões fixados pelo Contran, uma transportadora obteve autorização especial de trânsito (AET) para trafegar por rodovias federais. Já o motorista do veículo é habilitado, com Carteira Nacional de Habilitação expedida após aprovação nos exames exigidos. Quanto à natureza desses atos de consentimento de polícia,",
    alternativas: [
      "a AET e a CNH são licenças, atos vinculados que a Administração deve expedir sempre que o interessado preencha os requisitos legais.",
      "a AET é licença, por depender do cumprimento de requisitos técnicos, e a CNH é autorização, porque pode ser cassada se o condutor cometer infrações.",
      "a AET é autorização, ato discricionário, com prazo certo, válida para cada viagem ou por período, ao passo que a CNH decorre de licença, ato vinculado.",
      "ambas são autorizações, porque o trânsito em vias públicas é atividade que depende sempre de consentimento discricionário do poder público.",
      "a AET é permissão de uso de bem público, formalizada por contrato de adesão, e a CNH é autorização precária, revogável a qualquer tempo pelo órgão de trânsito.",
    ],
    correta: 2,
    explicacao:
      "A AET do art. 101 do CTB “poderá ser concedida” pela autoridade com circunscrição sobre a via, “com prazo certo, válida para cada viagem ou por período”, atendidas as medidas de segurança necessárias: é ato discricionário de consentimento, típico da autorização. A habilitação é licença: ato vinculado, expedido a quem preenche os requisitos legais, como a aprovação nos exames.",
    explicacaoErradas:
      "A AET não é licença: a lei a deixa ao juízo da autoridade, e a exigência de requisitos técnicos não a torna vinculada. A possibilidade de cassação da CNH não a transforma em autorização: atos vinculados também podem ser cassados quando o titular descumpre as condições. O trânsito em geral não depende de consentimento discricionário. E a AET não é permissão de uso formalizada por contrato, nem a CNH é revogável a qualquer tempo.",
    pegadinha:
      "A cassação da CNH engana: parece revogação de ato precário, mas é extinção por descumprimento das condições pelo titular, que alcança também atos vinculados. O que distingue licença de autorização é a existência de direito subjetivo à expedição.",
    conhecimento:
      "Licença: ato vinculado e, em regra, definitivo (habilitação, licença para construir). Autorização: ato discricionário e, em regra, precário. CTB, art. 101, caput: AET “com prazo certo, válida para cada viagem ou por período”; § 2º: “A autorização não exime o beneficiário da responsabilidade por eventuais danos que o veículo ou a combinação de veículos causar à via ou a terceiros.”",
    origem: "banco",
  },
  {
    id: "prf-adm-044",
    materia: "adm",
    topico: "Responsabilidade civil do Estado",
    subassunto: "Segurança pública, custódia de presos e foragidos (Temas 1.237, 592 e 362)",
    dificuldade: 5,
    raciocinio: "Análise de caso: nexo causal e ônus da prova em três situações julgadas pelo STF",
    enunciado:
      "Considere os casos a seguir:\n\n1. durante uma operação policial numa rodovia federal, um motorista que passava pelo local foi atingido por disparo de arma de fogo, e a perícia não conseguiu identificar de qual arma partiu o projétil;\n2. um preso foi morto na cela por outros detentos;\n3. um preso fugiu e, três anos depois, cometeu um roubo contra uma pessoa sem nenhuma relação com a fuga.\n\nConsiderando a jurisprudência do STF, há responsabilidade civil do Estado",
    alternativas: [
      "nos casos 1 e 2, apenas; no caso 1, a perícia inconclusiva não afasta a responsabilidade, e cabe ao Estado provar eventual excludente.",
      "nos três casos, porque o Estado responde pelo risco integral nas atividades de segurança pública e de custódia de presos, sem admitir excludentes.",
      "no caso 2, apenas, porque, no caso 1, cabe à vítima provar que o disparo partiu da arma de um agente público, e, no caso 3, falta nexo causal.",
      "nos casos 2 e 3, apenas, porque o dever de guarda alcança os danos causados por foragidos, e, no caso 1, a perícia inconclusiva afasta o nexo causal.",
      "no caso 1, apenas, porque a morte do preso por outros detentos é fato de terceiro, e o crime do foragido não guarda relação direta com a fuga.",
    ],
    correta: 0,
    explicacao:
      "No caso 1, pelo Tema 1.237 do STF, o Estado responde, pelo risco administrativo, por morte ou ferimento decorrente de operações de segurança pública; cabe a ele provar eventuais excludentes, e a perícia inconclusiva sobre a origem do disparo não basta, por si só, para afastar a responsabilidade. No caso 2, pelo Tema 592, o Estado responde pela morte do detento quando descumpre o dever específico de proteção do art. 5º, XLIX. No caso 3, pelo Tema 362, não há responsabilidade por crime de foragido sem nexo causal direto entre a fuga e a conduta.",
    explicacaoErradas:
      "Não se aplica o risco integral: o risco administrativo admite excludentes, e por isso o caso 3 fica de fora. O ônus da prova, no caso 1, é do Estado, não da vítima. O dever de guarda não alcança automaticamente os crimes de foragidos, e a perícia inconclusiva não afasta o nexo. E a morte do preso por outros detentos não é fato de terceiro capaz de excluir a responsabilidade, pelo dever específico de proteger quem está sob custódia.",
    pegadinha:
      "O caso 1 parece exigir prova de que a bala saiu da arma de um policial. O STF inverteu a lógica: a perícia inconclusiva é indício, e é o Estado que precisa demonstrar uma excludente. No caso 3, o tempo e a falta de relação com a fuga rompem o nexo causal direto.",
    conhecimento:
      "STF: Tema 1.237 — responsabilidade por morte ou ferimento em operações de segurança pública, pelo risco administrativo; ônus do ente provar excludentes; perícia inconclusiva não basta, por si só, para afastá-la. Tema 592 — morte de detento, por inobservância do dever específico de proteção (art. 5º, XLIX). Tema 362 — sem responsabilidade por crime de foragido sem nexo causal direto com a fuga.",
    origem: "banco",
  },
  {
    id: "prf-adm-045",
    materia: "adm",
    topico: "Improbidade administrativa",
    subassunto: "Nepotismo como ato do art. 11 e requisitos dos §§ 1º, 4º e 5º",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: tipo do art. 11, XI, e elementos exigidos após a Lei 14.230/2021",
    enunciado:
      "Um diretor de um órgão federal nomeou o próprio cunhado para cargo em comissão de assessor na sua unidade. Sobre o enquadramento da conduta como ato de improbidade que atenta contra os princípios da administração pública, à luz da Lei 8.429/1992, com a redação da Lei 14.230/2021, considere as afirmativas:\n\nI. A nomeação de parente por afinidade até o terceiro grau para cargo em comissão está tipificada no art. 11, que alcança também o ajuste mediante designações recíprocas.\nII. Só haverá improbidade se for comprovado na conduta do diretor o fim de obter proveito ou benefício indevido para si ou para outra pessoa.\nIII. O ato exige lesividade relevante ao bem jurídico tutelado, mas independe do reconhecimento de dano ao erário e de enriquecimento ilícito.\nIV. Por ser objetivamente vedada, a nomeação basta para configurar a improbidade, dispensada a aferição de dolo com finalidade ilícita.\n\nEstá correto o que se afirma em",
    alternativas: ["I e III, apenas.", "II e IV, apenas.", "I, III e IV, apenas.", "I, II e III, apenas.", "II, III e IV, apenas."],
    correta: 3,
    explicacao:
      "A afirmativa I está correta: o art. 11, XI, tipifica a nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o terceiro grau, inclusive, para cargo em comissão ou de confiança ou função gratificada, “compreendido o ajuste mediante designações recíprocas”; o cunhado é afim colateral de segundo grau. A II também: pelo § 1º do art. 11, só há improbidade quando comprovado o fim de obter proveito ou benefício indevido para si ou para outrem. A III também: pelo § 4º, esses atos exigem lesividade relevante e independem de dano ao erário e de enriquecimento ilícito. Logo, I, II e III.",
    explicacaoErradas:
      "A afirmativa IV está errada: a improbidade exige dolo, a vontade livre e consciente de alcançar o resultado ilícito, não bastando a voluntariedade (art. 1º, § 2º); exige também o fim de obter proveito indevido (art. 11, § 1º), e a ilegalidade sem dolo não configura improbidade (art. 17-C, § 1º). Por isso caem as combinações com IV e a que deixa de fora a afirmativa II.",
    pegadinha:
      "A nomeação do cunhado é nula pela Súmula Vinculante 13 independentemente de dolo, mas nulidade e improbidade são coisas diferentes: para a ação de improbidade, é preciso provar o dolo e o fim de obter proveito ou benefício indevido.",
    conhecimento:
      "Lei 8.429/1992, art. 11, XI: nomear cônjuge, companheiro ou parente até o terceiro grau, inclusive, para cargo em comissão, de confiança ou função gratificada, incluído o ajuste por designações recíprocas. § 1º: fim comprovado de obter proveito indevido; § 3º: demonstração objetiva da ilegalidade, com indicação das normas violadas; § 4º: lesividade relevante; § 5º: não configura improbidade a mera nomeação ou indicação política por detentores de mandatos eletivos, sendo necessária a aferição de dolo com finalidade ilícita.",
    origem: "banco",
  },
  {
    id: "prf-adm-046",
    materia: "adm",
    topico: "Improbidade administrativa",
    subassunto: "Aplicação e dosimetria das sanções (art. 12, §§ 5º e 6º; art. 17-C)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: regras de proporcionalidade na aplicação das sanções de improbidade",
    enunciado:
      "Na sentença de uma ação de improbidade administrativa, o juiz deve observar as regras da Lei 8.429/1992, com a redação da Lei 14.230/2021, sobre a aplicação das sanções. Sobre essas regras, é correto afirmar que",
    alternativas: [
      "no ato de menor ofensa aos bens jurídicos tutelados, a sanção se limita à multa, sem prejuízo do ressarcimento do dano e da perda dos valores obtidos, se for o caso.",
      "as sanções previstas para cada espécie de ato são aplicadas sempre de forma cumulativa, e o juiz não pode escolher entre elas conforme a gravidade do fato.",
      "o ressarcimento já obtido nas esferas civil, criminal ou administrativa pelos mesmos fatos não é deduzido, e o réu deve reparar o dano por inteiro na ação de improbidade.",
      "a dosimetria considera apenas a extensão do dano, e circunstâncias como a atuação do agente para minorar os prejuízos e os seus antecedentes não influem na pena.",
      "no ato de menor ofensa aos bens jurídicos tutelados, o juiz pode deixar de aplicar qualquer sanção, inclusive o ressarcimento do dano, se o réu tiver bons antecedentes.",
    ],
    correta: 0,
    explicacao:
      "Pelo art. 12, § 5º, “no caso de atos de menor ofensa aos bens jurídicos tutelados por esta Lei, a sanção limitar-se-á à aplicação de multa, sem prejuízo do ressarcimento do dano e da perda dos valores obtidos, quando for o caso”. É uma das regras de proporcionalidade introduzidas pela Lei 14.230/2021.",
    explicacaoErradas:
      "As sanções “podem ser aplicadas isolada ou cumulativamente, de acordo com a gravidade do fato” (art. 12, caput). O ressarcimento ocorrido nas instâncias criminal, civil e administrativa pelos mesmos fatos deve ser deduzido (§ 6º). A dosimetria considera, entre outros fatores, a atuação do agente para minorar os prejuízos e os antecedentes (art. 17-C, IV, “f” e “g”). E o ato de menor ofensa não dispensa toda sanção: limita a pena à multa, preservado o ressarcimento.",
    pegadinha:
      "O § 5º reduz as sanções no ato de menor ofensa, mas não perdoa o dano: a multa vem com o ressarcimento e a perda dos valores obtidos, quando houver. Ressarcimento não é sanção propriamente dita, mas recomposição do patrimônio.",
    conhecimento:
      "Lei 8.429/1992: art. 12, caput — sanções isoladas ou cumulativas, conforme a gravidade; § 5º — menor ofensa: só multa, sem prejuízo do ressarcimento e da perda dos valores; § 6º — dedução do ressarcimento já obtido; art. 17-C, IV — proporcionalidade e razoabilidade, natureza, gravidade e impacto, extensão do dano, proveito patrimonial, agravantes e atenuantes, atuação para minorar os prejuízos e antecedentes; V — sanções já aplicadas pelo mesmo fato.",
    origem: "banco",
  },
  {
    id: "prf-adm-047",
    materia: "adm",
    topico: "Lei 8.112/1990",
    subassunto: "PAD: comissão, prazos de defesa, revelia e julgamento",
    dificuldade: 5,
    raciocinio: "Análise de procedimento: regras do inquérito e do julgamento no PAD com dois indiciados",
    enunciado:
      "Um processo administrativo disciplinar foi instaurado para apurar falta atribuída a dois servidores, que, ao final da instrução, foram indiciados. Pela Lei 8.112/1990,",
    alternativas: [
      "a comissão será composta por três servidores, estáveis ou não, e o presidente deverá ocupar cargo de nível superior ao dos indiciados, não bastando escolaridade igual ou superior.",
      "o prazo para a defesa escrita será de 10 dias para cada indiciado, improrrogável, e a comissão deverá concluir os trabalhos em 30 dias, prorrogáveis por igual prazo.",
      "o indiciado que não apresentar defesa no prazo será considerado revel, e o processo seguirá sem defensor, cabendo-lhe apenas recorrer da decisão final.",
      "o prazo para a defesa será comum e de 20 dias, prorrogável pelo dobro para diligências indispensáveis, e o revel terá defensor dativo designado pela autoridade instauradora.",
      "a autoridade julgadora ficará vinculada ao relatório da comissão, e só poderá agravar a penalidade proposta se instaurar novo processo sobre os mesmos fatos.",
    ],
    correta: 3,
    explicacao:
      "Com dois ou mais indiciados, o prazo de defesa “será comum e de 20 (vinte) dias” (art. 161, § 2º) e pode ser “prorrogado pelo dobro, para diligências reputadas indispensáveis” (§ 3º). Para o revel, “a autoridade instauradora do processo designará um servidor como defensor dativo”, ocupante de cargo efetivo superior ou de mesmo nível, ou com escolaridade igual ou superior à do indiciado (art. 164, § 2º).",
    explicacaoErradas:
      "A comissão é de três servidores estáveis, e o presidente pode ter cargo efetivo superior ou de mesmo nível, ou escolaridade igual ou superior à do indiciado (art. 149). O prazo de dez dias vale para um só indiciado e é prorrogável; a conclusão é em 60 dias, prorrogáveis por igual prazo (art. 152). O revel recebe defensor dativo. E a autoridade acata o relatório, salvo quando contrário às provas, caso em que pode, motivadamente, agravar, abrandar ou isentar no próprio processo (art. 168 e parágrafo único).",
    pegadinha:
      "Os números do PAD se confundem: 60 dias para concluir, mais 60 de prorrogação; 10 dias de defesa para um indiciado; 20 dias comuns para dois ou mais, prorrogáveis pelo dobro; e 20 dias para o julgamento. A soma 60 + 60 + 20 é a origem dos 140 dias da Súmula 635 do STJ.",
    conhecimento:
      "Lei 8.112/1990: art. 149 — comissão de três servidores estáveis; art. 152 — conclusão em 60 dias, prorrogáveis por igual prazo; art. 161, § 1º — defesa em 10 dias; § 2º — prazo comum de 20 dias para dois ou mais; § 3º — prorrogável pelo dobro; art. 164, § 2º — defensor dativo; art. 167 — julgamento em 20 dias; art. 168 — o julgamento acata o relatório, salvo se contrário às provas dos autos.",
    origem: "banco",
  },
  {
    id: "prf-adm-048",
    materia: "adm",
    topico: "Lei 8.112/1990",
    subassunto: "Vacância: posse em cargo inacumulável, exoneração de ofício e de cargo em comissão",
    dificuldade: 5,
    raciocinio: "Classificação: forma de vacância de cada servidor e natureza não punitiva",
    enunciado:
      "Três servidores federais deixaram seus cargos: Ana, estável, tomou posse em outro cargo público inacumulável; Bruno, em seu primeiro cargo público, não foi aprovado no estágio probatório; e Carla, que ocupava apenas cargo em comissão, foi dispensada pela autoridade que a nomeou. Pela Lei 8.112/1990,",
    alternativas: [
      "Ana deve pedir exoneração do cargo atual antes de tomar posse no novo, porque a posse em outro cargo inacumulável não está entre as hipóteses legais de vacância.",
      "Bruno será demitido, porque a inabilitação no estágio probatório é falta funcional punida com a perda do cargo após processo disciplinar.",
      "Carla será destituída do cargo em comissão, porque a dispensa pela autoridade que a nomeou tem natureza de penalidade disciplinar.",
      "Ana perde definitivamente o vínculo com o cargo anterior, sem possibilidade de retorno, ainda que seja inabilitada no estágio probatório do novo cargo.",
      "Ana deixa o cargo por posse em outro inacumulável, e Bruno e Carla são exonerados — ele de ofício, ela a juízo da autoridade —, sem caráter punitivo.",
    ],
    correta: 4,
    explicacao:
      "Ana deixa o cargo por posse em outro cargo inacumulável, hipótese própria de vacância (art. 33, VIII). Bruno, sem cargo anterior para onde voltar, é exonerado de ofício por não satisfazer as condições do estágio probatório (art. 34, parágrafo único, I, e art. 20, § 2º). Carla, ocupante só de cargo em comissão, é exonerada a juízo da autoridade competente (art. 35, I). Nenhuma dessas formas é penalidade.",
    explicacaoErradas:
      "A posse em outro cargo inacumulável está entre as causas de vacância, sem exoneração prévia. A inabilitação no estágio não é falta funcional e leva à exoneração, não à demissão. A destituição de cargo em comissão é penalidade (art. 127, V); a dispensa livre é exoneração. E Ana, se inabilitada no estágio do novo cargo, pode ser reconduzida ao anterior, por ser estável (arts. 20, § 2º, e 29, I).",
    pegadinha:
      "Exoneração parece sinônimo de demissão, e a dispensa do comissionado parece destituição. Na Lei 8.112/1990, só a demissão e a destituição são penalidades; a exoneração, de ofício ou a pedido, nunca é punitiva.",
    conhecimento:
      "Lei 8.112/1990: art. 33 — vacância: exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento; art. 34, parágrafo único — exoneração de ofício: estágio probatório não satisfeito (I) ou falta de exercício no prazo (II); art. 35 — cargo em comissão: a juízo da autoridade (I) ou a pedido (II); art. 127, V — destituição de cargo em comissão é penalidade.",
    origem: "banco",
  },
  {
    id: "prf-adm-049",
    materia: "adm",
    topico: "Processo administrativo (Lei 9.784/1999)",
    subassunto: "Instrução: ônus da prova e obtenção de documentos de ofício",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: ônus da prova do interessado e dever de instrução do órgão",
    enunciado:
      "Num processo administrativo federal, o interessado alegou fatos favoráveis ao seu pedido e informou que os documentos que os comprovam estão arquivados em outro órgão da própria Administração federal. Pela Lei 9.784/1999,",
    alternativas: [
      "cabe ao interessado provar o que alegou, sem prejuízo do dever de instrução do órgão, que deve obter de ofício os documentos existentes em outro órgão.",
      "a prova dos fatos cabe exclusivamente à Administração, em razão da oficialidade, e o interessado não tem o ônus de demonstrar o que alegou.",
      "o interessado deve trazer ele próprio os documentos, porque a Administração só obtém de ofício os que estiverem no próprio órgão responsável pelo processo.",
      "o órgão pode obter os documentos no outro órgão, mas as despesas com a obtenção das cópias serão cobradas do interessado, como despesas processuais.",
      "a instrução fica suspensa até que o interessado apresente os documentos, porque a impulsão do processo, depois de iniciado a pedido, cabe ao interessado.",
    ],
    correta: 0,
    explicacao:
      "Pelo art. 36, “cabe ao interessado a prova dos fatos que tenha alegado, sem prejuízo do dever atribuído ao órgão competente para a instrução e do disposto no art. 37”. E o art. 37 manda o órgão prover, de ofício, à obtenção dos documentos ou das cópias quando o interessado declarar que os fatos estão registrados em documentos existentes “na própria Administração responsável pelo processo ou em outro órgão administrativo”.",
    explicacaoErradas:
      "A oficialidade não elimina o ônus do interessado: os dois convivem. O dever de obter documentos de ofício alcança os existentes em outro órgão. A lei proíbe a cobrança de despesas processuais, ressalvadas as previstas em lei (art. 2º, parágrafo único, XI). E a impulsão do processo é de ofício, sem prejuízo da atuação dos interessados (XII), de modo que a instrução não fica parada à espera do interessado.",
    pegadinha:
      "O ônus da prova do interessado parece obrigá-lo a buscar ele mesmo os documentos. Quando eles já estão em poder da Administração, em qualquer órgão, é o órgão instrutor que deve obtê-los de ofício.",
    conhecimento:
      "Lei 9.784/1999: art. 2º, parágrafo único, XI — proibição de cobrança de despesas processuais, ressalvadas as previstas em lei; XII — impulsão de ofício; art. 29 — instrução de ofício ou mediante impulsão do órgão, sem prejuízo do direito dos interessados de propor atuações probatórias; art. 36 — ônus da prova do interessado; art. 37 — obtenção de ofício dos documentos existentes na Administração ou em outro órgão.",
    origem: "banco",
  },
];
