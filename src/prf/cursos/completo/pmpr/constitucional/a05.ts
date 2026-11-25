import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-a05",
  resumo: {
    ideia:
      "Os arts. 37 a 41 da CF trazem as regras da administração pública e dos servidores: princípios, concurso, remuneração, teto, acumulação, improbidade, responsabilidade do Estado, mandato eletivo e estabilidade. O art. 42 trata dos militares dos Estados: policiais e bombeiros militares.",
    itens: [
      {
        termo: "Princípios do art. 37 (LIMPE)",
        faz: "Legalidade, impessoalidade, moralidade, publicidade e eficiência valem para a administração direta e indireta de todos os Poderes e de todos os entes. A eficiência entrou pela EC 19/1998.",
        pista: "Os três Poderes também fazem administração quando cuidam de pessoal, compras e contratos.",
      },
      {
        termo: "Legalidade administrativa",
        faz: "O administrador só age quando a lei manda (ato vinculado) ou autoriza (ato discricionário). É o contrário do particular, que pode fazer tudo o que a lei não proíbe (art. 5º, II).",
      },
      {
        termo: "Impessoalidade e publicidade",
        faz: "Para o cidadão: sem privilégio nem perseguição (concurso, licitação, vedação ao nepotismo). Para o agente: sem promoção pessoal. A publicidade oficial tem caráter educativo, informativo ou de orientação social, sem nomes, símbolos ou imagens de autoridades (§ 1º).",
      },
      {
        termo: "Nepotismo (SV 13)",
        faz: "Viola a CF nomear cônjuge, companheiro ou parente até o terceiro grau da autoridade nomeante ou de servidor da mesma pessoa jurídica em cargo de direção, chefia ou assessoramento, para cargo em comissão, de confiança ou função gratificada, inclusive por designações recíprocas.",
        pista: "Para o STF, cargo político (Ministro, Secretário estadual ou municipal) fica fora da súmula, salvo fraude ou falta de qualificação.",
      },
      {
        termo: "Acesso e concurso (incisos I a IV)",
        faz: "Cargos acessíveis a brasileiros e, na forma da lei, a estrangeiros. Investidura por concurso de provas ou de provas e títulos, salvo cargo em comissão de livre nomeação. Validade de até dois anos, prorrogável uma vez, por igual período. Dentro do prazo, o aprovado tem prioridade sobre novos concursados.",
        pista: "SV 44: exame psicotécnico só se previsto em lei. SV 43: sem concurso, ninguém passa para cargo de outra carreira.",
      },
      {
        termo: "Confiança e comissão (inciso V)",
        faz: "Função de confiança: só para quem ocupa cargo efetivo. Cargo em comissão: preenchido por servidores de carreira nos casos e percentuais mínimos da lei. Os dois servem apenas para direção, chefia e assessoramento.",
      },
      {
        termo: "Sindicato e greve (VI e VII)",
        faz: "O servidor civil tem livre associação sindical. A greve é exercida nos termos e limites de lei específica. Para o STF, policiais civis e demais servidores que atuam diretamente na segurança pública não podem fazer greve.",
        pista: "Militar não pode se sindicalizar nem fazer greve (art. 142, § 3º, IV, aplicado aos militares estaduais).",
      },
      {
        termo: "Deficiência e temporários (VIII e IX)",
        faz: "A lei reserva percentual de cargos e empregos para pessoas com deficiência (na esfera federal, até 20% das vagas). A lei define os casos de contratação por tempo determinado para necessidade temporária de excepcional interesse público.",
      },
      {
        termo: "Remuneração (X, XIII e SV 37)",
        faz: "Fixada ou alterada só por lei específica, com revisão geral anual, sempre na mesma data e sem distinção de índices. É vedado vincular ou equiparar remunerações. O Judiciário não pode aumentar vencimentos com base na isonomia (SV 37).",
      },
      {
        termo: "Teto (inciso XI)",
        faz: "Teto geral: subsídio dos Ministros do STF. Município: subsídio do Prefeito. Estado: Governador no Executivo, Deputados Estaduais no Legislativo e Desembargadores do TJ no Judiciário, limitado a 90,25% do STF, valendo também para MP, Procuradores e Defensores.",
        pista: "Parcelas indenizatórias ficam fora do teto (§ 11). Para o STF, o teto do Procurador do Município é o subsídio do Desembargador.",
      },
      {
        termo: "Efeito cascata e irredutibilidade (XIV e XV)",
        faz: "Um acréscimo não entra na base de cálculo de outro: cada adicional incide sobre o vencimento básico. Subsídios e vencimentos são irredutíveis, mas a garantia é nominal (não dá reajuste pela inflação) e não afasta o teto.",
      },
      {
        termo: "Acumulação de cargos (XVI e XVII)",
        faz: "É vedada, salvo com compatibilidade de horários e respeito ao teto: dois cargos de professor; um de professor com outro de qualquer natureza (EC 138/2025); dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas. A proibição alcança empregos e funções em autarquias, fundações e estatais.",
        pista: "Antes da EC 138/2025, o segundo cargo do professor tinha de ser técnico ou científico.",
      },
      {
        termo: "Improbidade, prescrição e responsabilidade",
        faz: "Improbidade gera suspensão dos direitos políticos, perda da função, indisponibilidade dos bens e ressarcimento ao erário, sem prejuízo da ação penal (§ 4º). Só é imprescritível o ressarcimento por improbidade dolosa. O Estado e as prestadoras de serviço público respondem objetivamente pelos danos de seus agentes, com regresso contra o agente em caso de dolo ou culpa (§ 6º).",
        pista: "Para o STF, a vítima processa o Estado, não o agente (dupla garantia).",
      },
      {
        termo: "Mandato eletivo (art. 38)",
        faz: "Mandato federal, estadual ou distrital: afastado do cargo. Prefeito: afastado, podendo optar pela remuneração. Vereador: com compatibilidade de horários, acumula as vantagens do cargo e a remuneração do mandato; sem compatibilidade, segue a regra do Prefeito.",
        pista: "O tempo de afastamento conta para todos os efeitos legais, menos promoção por merecimento.",
      },
      {
        termo: "Servidores (arts. 39 e 40)",
        faz: "Membros de Poder, detentores de mandato, Ministros e Secretários recebem subsídio em parcela única, sem gratificação ou adicional (art. 39, § 4º). A União, os Estados e o DF mantêm escolas de governo. Aposentadoria compulsória aos 75 anos (LC 152/2015). Readaptação para cargo compatível com a limitação, mantida a remuneração do cargo de origem (art. 37, § 13).",
      },
      {
        termo: "Estabilidade (art. 41)",
        faz: "Estável após três anos de efetivo exercício em cargo efetivo, por concurso, com avaliação especial de desempenho por comissão. Perde o cargo por sentença transitada em julgado, processo administrativo com ampla defesa ou avaliação periódica de desempenho, na forma de lei complementar.",
        pista: "Demissão anulada: reintegração. Cargo extinto: disponibilidade com remuneração proporcional ao tempo de serviço.",
      },
      {
        termo: "Militares dos Estados (art. 42)",
        faz: "Policiais e bombeiros militares são militares dos Estados, do DF e dos Territórios, organizados com base na hierarquia e na disciplina. As patentes dos oficiais são conferidas pelos Governadores. Aplica-se a eles a acumulação do art. 37, XVI, com prevalência da atividade militar (EC 101/2019).",
      },
    ],
  },
  questoes: [
    {
      topico: "Acumulação de cargos",
      subassunto: "Art. 37, XVI (EC 138/2025)",
      dificuldade: 5,
      raciocinio: "Hoje o professor pode acumular com cargo de qualquer natureza. Três cargos, nunca. Fora das três hipóteses, nem em estatais.",
      enunciado:
        "Considere a redação atual do art. 37, XVI, da Constituição Federal. Havendo compatibilidade de horários e respeitado o teto, é permitida a acumulação remunerada de",
      alternativas: [
        "dois cargos de assistente administrativo, em entes federativos diferentes.",
        "um cargo de médico, um de professor e um de enfermeiro, em hospitais públicos.",
        "um cargo de professor com um cargo de assistente administrativo, de nível médio.",
        "um cargo de engenheiro com outro de médico, por serem cargos técnicos ou científicos.",
        "dois empregos de analista em sociedades de economia mista, por não serem cargos públicos.",
      ],
      correta: 2,
      explicacao:
        "Pela EC 138/2025, o inciso XVI permite \"a de um cargo de professor com outro de qualquer natureza\". O cargo administrativo de nível médio passou a ser aceito ao lado do cargo de professor.",
      explicacaoErradas:
        "Dois cargos administrativos não estão nas exceções, nem em entes diferentes. Três cargos nunca se acumulam. Engenheiro e médico não formam par de professor nem de saúde. A vedação alcança empregos em estatais (inciso XVII).",
      pegadinha: "\"Técnico ou científico\" era a redação antiga; hoje o outro cargo do professor pode ser de qualquer natureza.",
      conhecimento: "Pelo art. 42, § 3º, a regra de acumulação vale para os militares dos Estados, com prevalência da atividade militar.",
    },
    {
      topico: "Teto remuneratório",
      subassunto: "Art. 37, XI",
      dificuldade: 4,
      raciocinio: "Estado sem limite único: cada Poder tem seu subteto. Município: Prefeito. Procurador municipal: Desembargador, pelo STF.",
      enunciado:
        "Considere um Estado que não adotou o limite único do art. 37, § 12. Associe cada servidor ao teto da sua remuneração.\n1. Subsídio do Prefeito\n2. Subsídio do Governador\n3. Subsídio dos Deputados Estaduais\n4. Subsídio dos Desembargadores do TJ\n( ) Servidor do Poder Executivo estadual\n( ) Procurador do Município, segundo o STF\n( ) Servidor da Assembleia Legislativa\n( ) Servidor da Prefeitura\nA sequência correta, de cima para baixo, é",
      alternativas: [
        "2, 4, 3, 1.",
        "2, 1, 3, 4.",
        "4, 1, 3, 2.",
        "2, 4, 1, 3.",
        "3, 4, 2, 1.",
      ],
      correta: 0,
      explicacao:
        "No Estado, o subteto do Executivo é o Governador e o do Legislativo, os Deputados Estaduais. No Município, é o Prefeito. O STF decidiu que o Procurador do Município, por exercer função essencial à justiça, tem como teto o subsídio do Desembargador.",
      explicacaoErradas:
        "As outras sequências põem o Procurador do Município sob o teto do Prefeito ou trocam os subtetos do Executivo e do Legislativo estaduais.",
      pegadinha: "Procurador municipal é do Município, mas o seu teto não é o do Prefeito.",
      conhecimento: "O teto do Desembargador é limitado a 90,25% do subsídio dos Ministros do STF.",
    },
    {
      topico: "Estabilidade",
      subassunto: "Art. 41",
      dificuldade: 4,
      raciocinio: "Estabilidade é só de cargo efetivo por concurso. Reintegração e disponibilidade estão nos §§ 2º e 3º.",
      enunciado:
        "Analise as afirmativas sobre a estabilidade do servidor público.\nI. São estáveis após três anos de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público.\nII. O ocupante de cargo em comissão adquire estabilidade após três anos, se aprovado em avaliação especial de desempenho.\nIII. Invalidada por sentença a demissão do servidor estável, ele será reintegrado, e o eventual ocupante da vaga, se estável, reconduzido ao cargo de origem, sem direito a indenização.\nIV. Extinto o cargo, o servidor estável ficará em disponibilidade, com remuneração proporcional ao tempo de serviço, até o seu aproveitamento em outro cargo.\nEstão corretas as afirmativas",
      alternativas: [
        "I e II, apenas.",
        "II, III e IV, apenas.",
        "I, II e IV, apenas.",
        "III e IV, apenas.",
        "I, III e IV, apenas.",
      ],
      correta: 4,
      explicacao:
        "A afirmativa I repete o caput do art. 41. A III está no § 2º e a IV, no § 3º. A avaliação especial de desempenho, feita por comissão, é condição para adquirir a estabilidade (§ 4º).",
      explicacaoErradas:
        "A afirmativa II está errada: cargo em comissão é de livre nomeação e exoneração e nunca gera estabilidade, que é só do cargo efetivo provido por concurso.",
      pegadinha: "Três anos de exercício não bastam: é preciso cargo efetivo, concurso e avaliação especial.",
      conhecimento: "O estável também pode perder o cargo por excesso de despesa com pessoal (art. 169, § 4º), além das três hipóteses do art. 41.",
    },
    {
      topico: "Nepotismo",
      subassunto: "Súmula Vinculante 13",
      dificuldade: 5,
      raciocinio: "Cargo político fica fora da SV 13, salvo fraude ou falta de qualificação. Parente até o 3º grau em cargo comum, designação cruzada e parente de chefe da mesma pessoa jurídica: violam.",
      enunciado:
        "Segundo a Súmula Vinculante 13 e a jurisprudência do STF, NÃO viola a vedação ao nepotismo",
      alternativas: [
        "a nomeação do sobrinho do prefeito para o cargo em comissão de assessor do gabinete.",
        "a nomeação da esposa do prefeito, com formação na área, para Secretária de Educação.",
        "a nomeação cruzada em que o prefeito nomeia o filho de um vereador e este nomeia o filho do prefeito.",
        "a designação do cunhado do secretário de obras para uma função gratificada na mesma prefeitura.",
        "a nomeação do tio de um diretor de departamento da prefeitura para cargo em comissão nela.",
      ],
      correta: 1,
      explicacao:
        "O STF entende que a nomeação de parente para cargo de natureza política, como Secretário Municipal, não viola a SV 13, desde que não haja fraude e o nomeado tenha qualificação para a função.",
      explicacaoErradas:
        "Sobrinho e tio são parentes de terceiro grau; cunhado, por afinidade, de segundo grau. A súmula alcança parentes da autoridade nomeante e de servidor com cargo de chefia na mesma pessoa jurídica, e proíbe as designações recíprocas.",
      pegadinha: "O cargo de Secretário é político: a súmula não se aplica a ele, salvo fraude.",
      conhecimento: "A SV 13 vai até o terceiro grau, inclusive: primo, que é parente de quarto grau, fica fora dela.",
    },
    {
      topico: "Servidor com mandato",
      subassunto: "Art. 38",
      dificuldade: 4,
      raciocinio: "Prefeito: afasta e escolhe a remuneração. Vereador: acumula se houver horário. Deputado: afasta. Tempo conta para tudo, menos merecimento.",
      enunciado:
        "Marque V (verdadeiro) ou F (falso) sobre o servidor público no exercício de mandato eletivo.\n( ) Investido no mandato de Prefeito, será afastado do cargo, sendo-lhe facultado optar pela sua remuneração.\n( ) Investido no mandato de Vereador, havendo compatibilidade de horários, receberá as vantagens do cargo sem prejuízo da remuneração do mandato.\n( ) Investido no mandato de Deputado Estadual, poderá continuar no cargo, se houver compatibilidade de horários.\n( ) O tempo de afastamento para o mandato conta para todos os efeitos legais, inclusive promoção por merecimento.\nA sequência correta, de cima para baixo, é",
      alternativas: [
        "V, V, F, V.",
        "V, F, F, F.",
        "F, V, F, F.",
        "V, V, F, F.",
        "V, V, V, F.",
      ],
      correta: 3,
      explicacao:
        "Os dois primeiros itens repetem os incisos II e III do art. 38. No mandato federal, estadual ou distrital, o servidor fica afastado (inciso I), e o tempo de afastamento não conta para promoção por merecimento (inciso IV).",
      explicacaoErradas:
        "O terceiro item é falso porque só o Vereador pode acumular. O quarto é falso porque a promoção por merecimento é a única exceção na contagem do tempo.",
      pegadinha: "A compatibilidade de horários só ajuda o Vereador; para os outros mandatos, o afastamento é obrigatório.",
      conhecimento: "O Vereador sem compatibilidade de horários segue a regra do Prefeito: afasta-se e escolhe a remuneração.",
    },
    {
      topico: "Greve e sindicalização",
      subassunto: "Art. 37, VI e VII",
      dificuldade: 5,
      raciocinio: "Greve do servidor civil: lei específica. STF: segurança pública não faz greve; a causa vai para a justiça comum. Militar: nem sindicato nem greve.",
      enunciado: "Segundo a Constituição Federal e a jurisprudência do STF, é correto afirmar que",
      alternativas: [
        "o direito de greve do servidor civil será exercido nos termos de lei complementar.",
        "o policial militar pode se filiar a sindicato, embora não possa fazer greve.",
        "o policial civil não pode fazer greve, por atuar diretamente na segurança pública.",
        "a greve de servidor celetista da administração direta é julgada pela Justiça do Trabalho.",
        "o servidor público civil não tem o direito à livre associação sindical.",
      ],
      correta: 2,
      explicacao:
        "O STF fixou que o direito de greve é vedado aos policiais civis e a todos os servidores públicos que atuam diretamente na área de segurança pública, pela importância da atividade.",
      explicacaoErradas:
        "Desde a EC 19/1998, a greve é exercida nos termos de lei específica, não de lei complementar. O militar não pode se sindicalizar nem fazer greve. Para o STF, a greve de servidor da administração direta, mesmo celetista, é julgada pela justiça comum. O servidor civil tem livre associação sindical.",
      pegadinha: "A proibição de greve vale também para a polícia civil, que não é militar.",
      conhecimento: "Enquanto não vem a lei específica, o STF manda aplicar, no que couber, a lei de greve do setor privado.",
    },
    {
      topico: "Concurso público",
      subassunto: "Art. 37, III, e súmulas",
      dificuldade: 4,
      raciocinio: "Validade: até dois anos, uma prorrogação igual. Psicotécnico só por lei. Sem concurso, nada de mudar de carreira. Veto sem motivo é inconstitucional.",
      enunciado:
        "Analise as afirmativas sobre o concurso público.\nI. O prazo de validade do concurso será de até dois anos, prorrogável uma vez, por igual período.\nII. Só por lei se pode sujeitar a exame psicotécnico a habilitação de candidato a cargo público.\nIII. O servidor pode passar, sem novo concurso, para cargo de outra carreira, se tiver a escolaridade exigida.\nIV. É inconstitucional o veto não motivado à participação de candidato a concurso público.\nEstão corretas as afirmativas",
      alternativas: [
        "I e IV, apenas.",
        "II e III, apenas.",
        "I, II e III, apenas.",
        "II, III e IV, apenas.",
        "I, II e IV, apenas.",
      ],
      correta: 4,
      explicacao:
        "A afirmativa I repete o inciso III do art. 37. A II é a Súmula Vinculante 44. A IV é a Súmula 684 do STF.",
      explicacaoErradas:
        "A afirmativa III contraria a Súmula Vinculante 43: é inconstitucional o provimento que leve o servidor, sem concurso, a cargo que não integra a carreira em que foi investido.",
      pegadinha: "Ter a escolaridade exigida não substitui o concurso para outra carreira.",
      conhecimento: "Dentro do prazo de validade, o aprovado tem prioridade sobre novos concursados (inciso IV).",
    },
    {
      topico: "Remuneração",
      subassunto: "Art. 37, XIV",
      dificuldade: 4,
      raciocinio: "Cada acréscimo incide só sobre o vencimento básico: 4.000 + 400 + 800 = 5.200. Calcular um sobre o outro (5.280) é o efeito cascata vedado.",
      enunciado:
        "Um servidor tem vencimento básico de R$ 4.000,00 e dois adicionais previstos em lei: 10% por qualificação e 20% por tempo de serviço. A lei manda calcular o segundo adicional sobre o valor já somado ao primeiro. Aplicando o art. 37, XIV, da Constituição, o servidor deve receber",
      alternativas: [
        "R$ 5.200,00.",
        "R$ 5.280,00.",
        "R$ 4.800,00.",
        "R$ 4.400,00.",
        "R$ 5.320,00.",
      ],
      correta: 0,
      explicacao:
        "O inciso XIV veda que acréscimos pecuniários sejam computados ou acumulados para a concessão de acréscimos seguintes. Cada adicional incide sobre os R$ 4.000,00: R$ 400,00 mais R$ 800,00, total de R$ 5.200,00.",
      explicacaoErradas:
        "R$ 5.280,00 é o resultado da cascata que a lei previa e a Constituição proíbe. R$ 4.800,00 e R$ 4.400,00 esquecem um dos adicionais. R$ 5.320,00 não sai de nenhum cálculo correto.",
      pegadinha: "A lei não pode criar efeito cascata: a Constituição prevalece.",
      conhecimento: "A irredutibilidade dos vencimentos (inciso XV) não protege valores pagos acima do teto ou com efeito cascata.",
    },
    {
      topico: "Responsabilidade do Estado",
      subassunto: "Art. 37, § 6º",
      dificuldade: 5,
      raciocinio: "Responsabilidade objetiva: dano e nexo bastam. A vítima processa o Estado (dupla garantia). Regresso contra o agente só com dolo ou culpa.",
      enunciado:
        "Durante uma perseguição, uma viatura da polícia militar bate no carro de um particular, que estava estacionado. Segundo o art. 37, § 6º, da Constituição Federal e o STF,",
      alternativas: [
        "a vítima precisa provar que o policial agiu com culpa para que o Estado tenha de indenizar.",
        "a vítima pode processar só o policial, escolhendo não incluir o Estado na ação.",
        "o Estado só tem de indenizar se o policial for condenado na esfera criminal pelo acidente.",
        "o Estado responde provados dano e nexo, e cobra do policial se ele agiu com dolo ou culpa.",
        "o Estado pode cobrar do policial tudo o que pagou, mesmo que ele não tenha agido com culpa.",
      ],
      correta: 3,
      explicacao:
        "A responsabilidade do Estado é objetiva: basta provar o dano e o nexo com a atuação do agente. O direito de regresso contra o policial depende de dolo ou culpa. Para o STF, a ação deve ser proposta contra o Estado, e o agente é parte ilegítima.",
      explicacaoErradas:
        "A vítima não precisa provar culpa. Ela não pode escolher processar só o policial (tese da dupla garantia). A indenização não depende de condenação criminal. Sem dolo ou culpa, o Estado não tem regresso contra o agente.",
      pegadinha: "Objetiva é a responsabilidade do Estado; a do policial, no regresso, é subjetiva.",
      conhecimento: "A regra vale também para empresas privadas que prestam serviço público, como concessionárias de transporte.",
    },
    {
      topico: "Militares dos Estados",
      subassunto: "Art. 42",
      dificuldade: 4,
      raciocinio: "Patentes: Governador. Acumulação do art. 37, XVI, com prevalência da atividade militar. Sem partido na ativa, sem greve, subordinados ao Governador.",
      enunciado: "Sobre os militares dos Estados, segundo a Constituição Federal, é correto afirmar que",
      alternativas: [
        "as patentes dos oficiais da polícia militar são conferidas pelo Presidente da República.",
        "a eles se aplica a acumulação do art. 37, XVI, com prevalência da atividade militar.",
        "o policial militar da ativa pode filiar-se a partido, desde que não exerça cargo de comando.",
        "a polícia militar se subordina ao Comandante do Exército, por ser força auxiliar e reserva.",
        "o policial militar pode fazer greve, desde que mantido o efetivo mínimo nas ruas.",
      ],
      correta: 1,
      explicacao:
        "O art. 42, § 3º, incluído pela EC 101/2019, aplica aos militares dos Estados, do DF e dos Territórios o inciso XVI do art. 37, com prevalência da atividade militar.",
      explicacaoErradas:
        "As patentes dos oficiais são conferidas pelos Governadores (§ 1º). Militar da ativa não pode ser filiado a partido nem fazer greve (art. 142, § 3º). A polícia militar é força auxiliar e reserva do Exército, mas se subordina ao Governador (art. 144, § 6º).",
      pegadinha: "Ser força auxiliar do Exército não tira a polícia militar do comando do Governador.",
      conhecimento: "Policiais e bombeiros militares são organizados com base na hierarquia e na disciplina (art. 42, caput).",
    },
  ],
};
