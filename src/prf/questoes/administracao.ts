import type { QuestaoPrf } from "../../data/prf";

export const QUESTOES_PRF_ADMINISTRACAO: QuestaoPrf[] = [
  {
    id: "prf-administracao-001",
    materia: "administracao",
    topico: "Evolução da administração pública e reforma do Estado",
    subassunto: "Marcos da trajetória administrativa brasileira: DASP, administração paralela, Decreto-Lei 200 e Constituição de 1988",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: situar cada marco histórico no modelo de administração correspondente e conferir a leitura de Bresser-Pereira.",
    enunciado:
      "Para uma exposição sobre a história da administração pública federal, um servidor da PRF redigiu as afirmativas a seguir.\n\nI. O DASP, criado em 1938, simbolizou a reforma burocrática da Era Vargas, com concursos, padronização de materiais, proposta orçamentária e formação de servidores.\nII. No governo JK, a administração paralela criou grupos executivos fora da estrutura tradicional para ganhar agilidade diante da rigidez burocrática.\nIII. O Decreto-Lei 200/1967 é visto por Bresser-Pereira como o primeiro ensaio gerencial, embora tenha aberto espaço para contratações sem concurso na administração indireta.\nIV. A Constituição de 1988, ao instituir o regime jurídico único, aprofundou a flexibilização iniciada em 1967, o que Bresser-Pereira chamou de avanço gerencial.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II e IV, apenas.", "I, II e III, apenas.", "I, III e IV, apenas.", "I, II, III e IV."],
    correta: 2,
    explicacao:
      "A afirmativa I está correta: o DASP (Decreto-Lei 579/1938) é o marco da reforma burocrática de Vargas, com concursos, padronização, orçamento e formação de pessoal. A II também: o Plano de Metas de JK recorreu a grupos executivos fora da estrutura tradicional, a chamada administração paralela. A III também: o Decreto-Lei 200 fixou planejamento, coordenação, descentralização, delegação de competência e controle, e Bresser-Pereira o trata como o primeiro ensaio gerencial, com o efeito colateral de permitir contratações sem concurso na indireta. Logo, I, II e III.",
    explicacaoErradas:
      "A afirmativa IV está errada: a Constituição de 1988 tornou o concurso obrigatório e criou o regime jurídico único, o que enrijeceu a máquina; Bresser-Pereira chamou isso de retrocesso burocrático, e não de avanço gerencial. Por isso caem as combinações com IV. A que traz só I e II deixa de fora a III, que também é verdadeira.",
    pegadinha:
      "A afirmativa IV encadeia fatos verdadeiros (regime jurídico único em 1988, flexibilização em 1967) com uma conclusão invertida: para Bresser-Pereira, 1988 foi um passo atrás, de volta ao modelo burocrático.",
    conhecimento:
      "Marcos da evolução administrativa brasileira (DASP, administração paralela, Decreto-Lei 200, Constituição de 1988, PDRAE) e a interpretação de Bresser-Pereira sobre cada um.",
    origem: "banco",
  },
  {
    id: "prf-administracao-002",
    materia: "administracao",
    topico: "Evolução da administração pública e reforma do Estado",
    subassunto: "Estratégias do PDRAE por setor: autonomia com metas nas atividades exclusivas, publicização e privatização",
    dificuldade: 5,
    raciocinio: "Classificação: identificar o setor da atividade no PDRAE e associar a ele a forma de administração e a estratégia de transição previstas.",
    enunciado:
      "No Plano Diretor da Reforma do Aparelho do Estado (1995), cada setor recebeu forma de propriedade, tipo de administração e estratégia próprios. Considerando que o policiamento e a fiscalização do trânsito nas rodovias federais estão entre as atividades exclusivas do Estado, a estratégia que o plano previa para esse setor era",
    alternativas: [
      "ampliar a autonomia de gestão das unidades em troca de metas de desempenho pactuadas, mantendo a atividade sob propriedade estatal.",
      "transferir a execução a entidades públicas não estatais, sob contrato de gestão, por meio da publicização prevista para o setor.",
      "combinar as administrações burocrática e gerencial, pois no setor a efetividade das decisões pesaria mais que a eficiência.",
      "manter o controle prévio dos procedimentos, típico do modelo burocrático, e limitar a gestão gerencial aos serviços não exclusivos.",
      "privatizar as atividades capazes de gerar receita própria, como a cobrança de multas, para liberar recursos ao núcleo estratégico.",
    ],
    correta: 0,
    explicacao:
      "O PDRAE manteve as atividades exclusivas — as que exigem o poder de Estado de regulamentar, fiscalizar e fomentar, como polícia e trânsito — sob propriedade estatal e com administração gerencial. A estratégia era dar mais autonomia às unidades em troca de resultados pactuados, a ideia das agências executivas, depois reforçada pelo contrato do art. 37, § 8º, da Constituição (EC 19/1998), que amplia a autonomia de órgãos e entidades em troca de metas de desempenho.",
    explicacaoErradas:
      "A publicização, com transferência a entidades públicas não estatais sob contrato de gestão, foi pensada para os serviços não exclusivos, como hospitais e universidades, e não para o poder de polícia. A mistura de administração burocrática e gerencial, justificada pela efetividade das decisões, é a do núcleo estratégico. Manter o controle prévio e limitar a gestão gerencial a outro setor contraria o plano, que adotava a administração gerencial nas atividades exclusivas. A privatização era a estratégia da produção para o mercado, isto é, das empresas estatais.",
    pegadinha:
      "Todas as estratégias citadas existem no PDRAE; o erro está em trocar o setor. Publicização (serviços não exclusivos), mistura burocrático-gerencial (núcleo estratégico) e privatização (produção para o mercado) não se aplicam às atividades exclusivas.",
    conhecimento:
      "Os quatro setores do PDRAE, com a forma de propriedade, o tipo de administração e a estratégia de cada um, e o contrato de autonomia por metas do art. 37, § 8º, da Constituição.",
    origem: "banco",
  },
  {
    id: "prf-administracao-003",
    materia: "administracao",
    topico: "Gestão pública e gestão privada",
    subassunto: "Divergências e convergências entre gestão pública e privada: legalidade, isonomia, metas e controle",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: separar o que distingue a gestão pública da privada do que é comum às duas.",
    enunciado:
      "Ao comparar a gestão de uma superintendência da PRF com a de uma transportadora privada, um instrutor fez as afirmativas a seguir.\n\nI. O órgão só age quando a lei autoriza, ao passo que a empresa pode fazer tudo o que a lei não proíbe, liberdade que tem base no art. 5º, II, da Constituição.\nII. A empresa pode segmentar clientes e privilegiar os mais rentáveis; o órgão atende de forma isonômica e só estabelece prioridades previstas em lei.\nIII. Como muitos serviços públicos não têm concorrente, metas e indicadores, ferramentas pensadas para o mercado competitivo, não se aplicam à superintendência.\nIV. O gestor do órgão administra recursos vindos de tributos, sem arriscar capital próprio, e sua gestão é fiscalizada por órgãos de controle e pela sociedade.\n\nEstá correto o que se afirma em",
    alternativas: ["I, II e III, apenas.", "II, III e IV, apenas.", "I, III e IV, apenas.", "II e IV, apenas.", "I, II e IV, apenas."],
    correta: 4,
    explicacao:
      "A afirmativa I está correta: no setor público vale a legalidade estrita, e o particular goza da liberdade do art. 5º, II, da Constituição. A II também: a empresa pode privilegiar clientes rentáveis, mas o órgão deve tratamento isonômico e só dá prioridade nos casos previstos em lei, como idosos, gestantes e pessoas com deficiência. A IV também: o gestor público administra recursos dos tributos, não arrisca capital próprio e é fiscalizado por tribunais de contas, Ministério Público e sociedade. Logo, I, II e IV.",
    explicacaoErradas:
      "A afirmativa III está errada: a falta de concorrência é uma diferença real entre os setores, mas não afasta metas e indicadores; o modelo gerencial importou essas ferramentas do setor privado e as adaptou ao regime público, com foco no resultado para a sociedade. Toda combinação que inclua III está errada, e a que traz só II e IV deixa de fora a I, que é verdadeira.",
    pegadinha:
      "A afirmativa III parte de uma diferença verdadeira — muitos serviços públicos não têm concorrente — para tirar uma conclusão falsa: a ausência de mercado não impede o uso de metas e indicadores.",
    conhecimento:
      "Diferenças entre gestão pública e privada (legalidade, isonomia, finalidade, medida de resultado, concorrência, recursos e controle) e as ferramentas que o modelo gerencial importou do setor privado.",
    origem: "banco",
  },
  {
    id: "prf-administracao-004",
    materia: "administracao",
    topico: "Gestão pública e gestão privada",
    subassunto: "Medida de resultado e isonomia na transposição de práticas privadas para o setor público",
    dificuldade: 4,
    raciocinio: "Análise de propostas: testar cada medida contra as diferenças entre os setores (finalidade, medida de resultado e isonomia).",
    enunciado:
      "Recém-chegado da iniciativa privada, um gestor propõe três mudanças na superintendência da PRF em que passou a atuar:\n\n1. medir o sucesso da fiscalização pelo valor arrecadado em multas;\n2. criar atendimento preferencial para as transportadoras que mais demandam os serviços do órgão;\n3. adotar metas de redução de acidentes por trecho, com acompanhamento mensal.\n\nÀ luz das diferenças entre gestão pública e gestão privada, é correto afirmar que",
    alternativas: [
      "as três propostas são compatíveis com o modelo gerencial, que importou do setor privado o foco no cliente, as metas e a mensuração da receita.",
      "só a terceira é compatível: o resultado do serviço não se mede pela receita, e o órgão não pode privilegiar usuários por critério comercial.",
      "só a primeira é compatível, porque a arrecadação é objetiva, enquanto a redução de acidentes depende de fatores fora do controle do órgão.",
      "a segunda e a terceira são compatíveis, porque dar prioridade aos usuários mais frequentes e fixar metas são formas de foco no cidadão.",
      "as três são incompatíveis, porque metas e indicadores pertencem à gestão privada e ferem a legalidade estrita que rege o setor público.",
    ],
    correta: 1,
    explicacao:
      "Só a terceira proposta é compatível. No setor público, o resultado que importa — segurança viária, menos mortes — é difícil de medir e não se traduz em receita, e o órgão não busca lucro: medir a fiscalização pela arrecadação inverteria a finalidade. O Estado também deve tratamento isonômico e só estabelece prioridades previstas em lei, sem favorecer quem mais usa o serviço. Já as metas de redução de acidentes são ferramenta gerencial adaptada ao regime público, porque medem o resultado para a sociedade.",
    explicacaoErradas:
      "Considerar as três compatíveis ignora que o modelo gerencial não importou a lógica do lucro nem a segmentação de clientes. Aceitar só a arrecadação inverte a avaliação: a receita não é o resultado do serviço, e fatores externos não impedem metas de resultado, apenas pedem cuidado na leitura delas. Aceitar a preferência às transportadoras confunde foco no cidadão com privilégio comercial. Rejeitar as três trata metas e indicadores como exclusivos da gestão privada, quando o modelo gerencial os adotou.",
    pegadinha:
      "A meta por trecho parece “privada demais”, e a arrecadação parece objetiva; na verdade, a meta de redução de acidentes mede o resultado social, enquanto a receita das multas não mede o êxito do serviço.",
    conhecimento:
      "Finalidade e medida de resultado no setor público, isonomia no atendimento e uso de metas e indicadores pelo modelo gerencial.",
    origem: "banco",
  },
  {
    id: "prf-administracao-005",
    materia: "administracao",
    topico: "Excelência nos serviços públicos",
    subassunto: "Trajetória dos programas federais de qualidade e a Carta de Serviços ao Usuário (Lei 13.460/2017)",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas (V/F): conferir a ênfase de cada programa e a situação atual da carta de serviços.",
    enunciado:
      "Sobre a trajetória dos programas federais de qualidade e de excelência na gestão pública, avalie se as afirmativas a seguir são verdadeiras (V) ou falsas (F).\n\n( ) O Programa Brasileiro da Qualidade e Produtividade, do início dos anos 1990, deu ênfase a processos e a ferramentas de qualidade.\n( ) O Programa da Qualidade no Serviço Público pôs no centro a satisfação do usuário e os padrões de atendimento.\n( ) Com a revogação do decreto do GesPública, em 2017, a carta de serviços deixou de ser exigida dos órgãos federais e passou a ser facultativa.\n( ) O modelo de excelência em gestão pública adaptou referências empresariais sem abrir mão da legalidade, da impessoalidade e do interesse coletivo.\n\nAs afirmativas são, respectivamente,",
    alternativas: ["V – F – F – V.", "F – V – V – F.", "V – V – V – F.", "V – V – F – V.", "F – F – V – V."],
    correta: 3,
    explicacao:
      "A primeira é verdadeira: o PBQP, do início dos anos 1990, enfatizou processos e ferramentas de qualidade. A segunda também: o PQSP deslocou o foco para a satisfação do usuário e para padrões de atendimento. A terceira é falsa: o Decreto 5.378/2005 foi revogado em 2017, mas a Carta de Serviços ao Usuário é obrigação legal desde a Lei 13.460/2017 (art. 7º). A quarta é verdadeira: o lema do modelo é ser excelente sem deixar de ser público. Sequência: V – V – F – V.",
    explicacaoErradas:
      "As sequências que marcam a terceira como verdadeira aceitam que a carta de serviços ficou facultativa, quando ela é exigida por lei desde 2017. As que marcam a primeira ou a segunda como falsas trocam a ênfase dos programas, que foi de processos e ferramentas (PBQP) para gestão e resultados (QPAP) e, depois, para a satisfação do usuário (PQSP). As que marcam a quarta como falsa contrariam o lema do modelo, que adapta as referências empresariais à natureza pública.",
    pegadinha:
      "A terceira afirmativa mistura um fato verdadeiro — o decreto do GesPública foi revogado em 2017 — com uma consequência falsa: a carta de serviços sobreviveu e virou obrigação na Lei 13.460/2017.",
    conhecimento:
      "Ênfases do PBQP, do QPAP, do PQSP e do GesPública; lema e premissas do modelo de excelência em gestão pública; Carta de Serviços ao Usuário (Lei 13.460/2017, art. 7º).",
    origem: "banco",
  },
  {
    id: "prf-administracao-006",
    materia: "administracao",
    topico: "Excelência nos serviços públicos",
    subassunto: "Modelo de Excelência em Gestão Pública: oito dimensões, blocos do ciclo PDCA e autoavaliação",
    dificuldade: 4,
    raciocinio: "Aplicação de conceito: conferir cada enunciado contra a estrutura do modelo (dimensões e blocos) e contra a finalidade da autoavaliação.",
    enunciado:
      "Uma divisão administrativa da PRF aplicou a autoavaliação do Modelo de Excelência em Gestão Pública, na versão de oito dimensões. Sobre a estrutura do modelo e o uso da autoavaliação, é correto afirmar que",
    alternativas: [
      "governança, estratégia e planos, público-alvo e interesse público e cidadania formam o bloco de resultados do ciclo PDCA.",
      "a autoavaliação é conduzida por avaliadores externos, que atribuem a pontuação e encerram o ciclo sem plano de melhoria.",
      "a dimensão informação e conhecimento integra o bloco de execução, ao lado das dimensões pessoas, processos e resultados.",
      "o retrato de pontos fortes e de oportunidades de melhoria serve de base a um plano de melhoria da gestão.",
      "o modelo transpõe os critérios empresariais sem adaptação, pois a excelência na gestão independe da natureza pública.",
    ],
    correta: 3,
    explicacao:
      "Na autoavaliação, a própria organização compara suas práticas com o modelo e chega a um retrato de pontos fortes e de oportunidades de melhoria, que se transforma num plano de melhoria da gestão, com ações, responsáveis e prazos. É essa a finalidade do instrumento: orientar a melhoria contínua.",
    explicacaoErradas:
      "Governança, estratégia e planos, público-alvo e interesse público e cidadania formam o bloco de planejamento, e não o de resultados, que corresponde à dimensão resultados. Informação e conhecimento forma um bloco próprio, a inteligência da organização, e o bloco de execução reúne só pessoas e processos. A autoavaliação é feita pela própria organização, e seu produto é justamente o plano de melhoria. E o modelo adapta as referências empresariais à natureza pública — ser excelente sem deixar de ser público —, em vez de transpô-las sem ajuste.",
    pegadinha:
      "Resultados e informação e conhecimento são, ao mesmo tempo, nomes de dimensões e de blocos; as afirmações erradas exploram essa coincidência para misturar dimensões com o bloco errado.",
    conhecimento:
      "As oito dimensões do MEGP, sua organização em quatro blocos segundo o ciclo PDCA (planejamento, execução, resultados e informação e conhecimento) e a lógica da autoavaliação.",
    origem: "banco",
  },
  {
    id: "prf-administracao-007",
    materia: "administracao",
    topico: "Gestão de pessoas e planejamento estratégico de RH",
    subassunto: "Os quatro papéis do RH segundo Ulrich: especialista administrativo e agente de mudança",
    dificuldade: 4,
    raciocinio: "Classificação: enquadrar cada iniciativa no papel de Ulrich, considerando se o foco é o processo ou as pessoas e se é a rotina ou a transformação.",
    enunciado:
      "No mesmo ano, a área de gestão de pessoas de uma superintendência da PRF tomou duas iniciativas:\n\n1. redesenhou o fluxo de concessão de férias e reduziu de 20 para 5 dias o tempo de resposta aos pedidos;\n2. conduziu oficinas para lidar com a resistência dos servidores à adoção do trabalho por equipes integradas e apoiou as chefias durante a transição.\n\nNa tipologia de Dave Ulrich, essas iniciativas correspondem, respectivamente, aos papéis de",
    alternativas: [
      "parceiro estratégico e defensor dos funcionários.",
      "especialista administrativo e agente de mudança.",
      "agente de mudança e parceiro estratégico.",
      "especialista administrativo e defensor dos funcionários.",
      "defensor dos funcionários e agente de mudança.",
    ],
    correta: 1,
    explicacao:
      "Tornar eficiente um processo de pessoal, como o fluxo de férias, é o papel de especialista administrativo, voltado à rotina e aos processos. Conduzir uma transformação, lidar com a resistência e apoiar as chefias na transição é o papel de agente de mudança, voltado ao futuro e às pessoas.",
    explicacaoErradas:
      "O parceiro estratégico alinha as práticas de pessoal à estratégia do órgão, o que o caso não descreve. O defensor dos funcionários ouve as pessoas e cuida do engajamento no dia a dia; as oficinas, porém, servem a uma transformação em curso, marca do agente de mudança. As versões que tiram o redesenho do fluxo de férias do papel de especialista administrativo erram o enquadramento da primeira iniciativa, que é de eficiência de processo.",
    pegadinha:
      "Oficinas com servidores lembram o defensor dos funcionários, mas o objetivo era vencer a resistência a uma mudança: é o papel de agente de mudança.",
    conhecimento:
      "Os quatro papéis do RH de Ulrich (parceiro estratégico, especialista administrativo, defensor dos funcionários e agente de mudança) e o foco de cada um.",
    origem: "banco",
  },
  {
    id: "prf-administracao-008",
    materia: "administracao",
    topico: "Gestão de pessoas e planejamento estratégico de RH",
    subassunto: "Os seis processos de gestão de pessoas de Chiavenato: monitorar, aplicar e manter",
    dificuldade: 4,
    raciocinio: "Classificação: associar cada ação ao processo de Chiavenato, atentando para a avaliação de desempenho, que fica em aplicar pessoas.",
    enunciado:
      "Num semestre, a área de gestão de pessoas de uma superintendência da PRF executou três ações:\n\n1. criou um banco de dados integrado de lotação, frequência e capacitações, com relatórios gerenciais às chefias;\n2. revisou as descrições de cargos e implantou um novo ciclo de avaliação de desempenho;\n3. lançou um programa de ergonomia e de prevenção de acidentes nas salas de atendimento.\n\nNa classificação de Chiavenato, essas ações pertencem, respectivamente, aos processos de",
    alternativas: [
      "monitorar, aplicar e manter pessoas.",
      "monitorar, recompensar e desenvolver pessoas.",
      "aplicar, desenvolver e manter pessoas.",
      "agregar, aplicar e monitorar pessoas.",
      "monitorar, desenvolver e manter pessoas.",
    ],
    correta: 0,
    explicacao:
      "Banco de dados, sistemas de informação gerencial e auditoria pertencem a monitorar pessoas. Desenho e descrição de cargos e avaliação de desempenho pertencem a aplicar pessoas. Higiene, segurança e qualidade de vida pertencem a manter pessoas. Sequência: monitorar, aplicar e manter.",
    explicacaoErradas:
      "A avaliação de desempenho não está em desenvolver (treinamento e aprendizagem) nem em recompensar (remuneração e incentivos), mas em aplicar, junto com o desenho de cargos. A ergonomia e a prevenção de acidentes são manutenção das condições de trabalho, e não monitoramento. E agregar trata de recrutamento e seleção, o que não aparece entre as ações.",
    pegadinha:
      "Avaliar desempenho parece etapa de desenvolver ou de recompensar, mas, em Chiavenato, fica em aplicar pessoas, ao lado do desenho de cargos.",
    conhecimento:
      "Os seis processos de gestão de pessoas de Chiavenato (agregar, aplicar, recompensar, desenvolver, manter e monitorar) e as atividades de cada um.",
    origem: "banco",
  },
  {
    id: "prf-administracao-009",
    materia: "administracao",
    topico: "Gestão de desempenho",
    subassunto: "Erros do avaliador: contraste, efeito horn e tendência central",
    dificuldade: 4,
    raciocinio: "Classificação: identificar, em cada caso, a origem da distorção — comparação com outro avaliado, traço que contamina os demais ou concentração na média.",
    enunciado:
      "Ao revisar as avaliações de desempenho de uma superintendência da PRF, a comissão identificou três situações:\n\n1. uma chefe deu notas medianas a um servidor que cumpriu todas as metas, porque o avaliou logo depois do colega mais produtivo da unidade;\n2. um chefe avaliou mal a cortesia, a pontualidade e a iniciativa de um servidor, influenciado apenas pelos erros frequentes dele no cadastro de processos;\n3. outro chefe atribuiu a nota central da escala a todos os subordinados, para evitar conflitos.\n\nOs erros de avaliação presentes nas situações são, respectivamente,",
    alternativas: [
      "recência, efeito halo e leniência.",
      "contraste, recência e tendência central.",
      "semelhança, efeito horn e rigor.",
      "semelhança, efeito horn e tendência central.",
      "contraste, efeito horn e tendência central.",
    ],
    correta: 4,
    explicacao:
      "Na primeira situação, o servidor foi comparado com o colega avaliado antes, e não com as metas: é o erro de contraste. Na segunda, um traço negativo marcante contaminou a avaliação de fatores sem relação com ele: é o efeito halo na versão negativa, chamada de efeito horn. Na terceira, todos ficaram no centro da escala por conveniência: é a tendência central.",
    explicacaoErradas:
      "Recência é dar peso só aos fatos recentes; na segunda situação, os erros são frequentes, e o problema é um traço contaminar os demais. Semelhança é favorecer quem se parece com o avaliador, o que não explica a primeira situação. Leniência e rigor são notas sempre altas ou sempre baixas; a nota central dada a todos é tendência central. A versão com efeito halo e leniência erra a primeira e a terceira situações.",
    pegadinha:
      "O efeito horn é o halo negativo: quem conhece só o nome “halo” pode estranhar o termo, e quem lê “erros frequentes” pode pensar em recência, que trata de fatos recentes, e não de um traço dominante.",
    conhecimento:
      "Erros do avaliador na gestão de desempenho: halo e horn, leniência e rigor, tendência central, recência, contraste e semelhança.",
    origem: "banco",
  },
  {
    id: "prf-administracao-010",
    materia: "administracao",
    topico: "Gestão de desempenho",
    subassunto: "Problemas no critério de avaliação: deficiência e contaminação",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: distinguir defeitos do critério (deficiente, contaminado) de erros do avaliador.",
    enunciado:
      "O setor de atendimento ao público de uma superintendência da PRF avalia seus servidores apenas pelo número de atendimentos concluídos por dia. Durante o período avaliado, o sistema de agendamento ficou três semanas fora do ar. Sobre esse critério, analise as afirmativas a seguir.\n\nI. O critério é deficiente, pois deixa de fora aspectos essenciais da função, como a correção das informações prestadas e a cortesia com os usuários.\nII. No período, o critério também ficou contaminado, pois o resultado medido foi afetado por um fator fora do controle dos avaliados.\nIII. As falhas apontadas são erros do avaliador, como o efeito halo, e se corrigem com o treinamento das chefias que aplicam a avaliação.\n\nEstá correto o que se afirma em",
    alternativas: ["I, apenas.", "I e III, apenas.", "I e II, apenas.", "II e III, apenas.", "I, II e III."],
    correta: 2,
    explicacao:
      "A afirmativa I está correta: o critério é deficiente porque mede só a quantidade e deixa de fora aspectos essenciais da função, como a correção das informações e a cortesia. A II também: a queda do sistema é um fator fora do controle dos servidores e contaminou o resultado medido no período. Logo, I e II.",
    explicacaoErradas:
      "A afirmativa III está errada: deficiência e contaminação são defeitos do critério, e não do avaliador; treinar as chefias reduz erros como halo, recência e leniência, mas não corrige um critério mal desenhado. Por isso caem as combinações com III, e a que traz só a I deixa de fora a contaminação descrita na II.",
    pegadinha:
      "As duas falhas coexistem: o mesmo critério pode ser deficiente (deixa algo importante de fora) e produzir resultado contaminado (inclui fator externo). Quem acha que uma exclui a outra marca só a I.",
    conhecimento:
      "Critério deficiente e critério contaminado; diferença entre problemas do critério e erros do avaliador; formas de reduzir os erros de avaliação.",
    origem: "banco",
  },
  {
    id: "prf-administracao-011",
    materia: "administracao",
    topico: "Comportamento, clima e cultura organizacional",
    subassunto: "Bases do comprometimento organizacional: afetivo, instrumental e normativo",
    dificuldade: 4,
    raciocinio: "Classificação: identificar o motivo predominante de cada vínculo — querer ficar, precisar ficar ou sentir-se obrigado a ficar.",
    enunciado:
      "Três servidores de uma superintendência da PRF explicaram por que recusaram convites para trabalhar em outros órgãos:\n\n1. Ana: “Não é obrigação nem dinheiro: trabalhar pela segurança nas rodovias tem a ver com quem eu sou.”\n2. Bruno: “Até gosto daqui, mas o que pesa é que, se eu sair, perco a gratificação e anos de contagem para a progressão.”\n3. Carla: “A equipe me apoiou num tratamento de saúde; sair agora seria uma deslealdade, mesmo que lá o trabalho me agrade mais.”\n\nOs vínculos predominantes nos três casos correspondem, respectivamente, aos comprometimentos",
    alternativas: [
      "normativo, instrumental e afetivo.",
      "afetivo, normativo e instrumental.",
      "instrumental, afetivo e normativo.",
      "afetivo, instrumental e calculativo.",
      "afetivo, instrumental e normativo.",
    ],
    correta: 4,
    explicacao:
      "Ana fica porque se identifica com o trabalho e com a missão do órgão: comprometimento afetivo (fica porque quer). Bruno fica, sobretudo, pelo custo de sair — a gratificação e a contagem para a progressão: comprometimento instrumental ou calculativo (fica porque precisa). Carla fica por dever e gratidão à equipe: comprometimento normativo (fica porque se sente obrigada).",
    explicacaoErradas:
      "A versão que termina em calculativo repete o instrumental com outro nome e deixa sem classificação correta o vínculo de Carla, que é normativo. As demais trocam a ordem: a identificação de Ana é afetiva, e não normativa ou instrumental; o custo de sair, no caso de Bruno, é instrumental, e não afetivo, apesar de ele dizer que gosta do lugar; e a lealdade de Carla é normativa.",
    pegadinha:
      "Bruno diz que gosta do lugar, mas o motivo que pesa é o custo de sair; e calculativo é sinônimo de instrumental, por isso não pode classificar um terceiro vínculo, diferente dos outros dois.",
    conhecimento:
      "Comprometimento afetivo, instrumental (calculativo) e normativo e o motivo típico de cada um.",
    origem: "banco",
  },
  {
    id: "prf-administracao-012",
    materia: "administracao",
    topico: "Comportamento, clima e cultura organizacional",
    subassunto: "Clima × cultura e os três níveis de Schein: artefatos, valores declarados e pressupostos básicos",
    dificuldade: 5,
    raciocinio: "Classificação: separar o que mudou no clima do que permanece na cultura e situar cada elemento no nível de Schein.",
    enunciado:
      "Três meses depois da troca de chefia numa unidade da PRF, a pesquisa interna mostrou servidores mais satisfeitos com a comunicação e o reconhecimento. A nova chefia também divulgou uma declaração de valores que exalta a integração entre as áreas. Ainda assim, segue intacta a crença, raramente discutida, de que só o trabalho operacional “é polícia de verdade”, e ela continua orientando decisões informais. Com base em Schein e na distinção entre clima e cultura, é correto afirmar que",
    alternativas: [
      "a pesquisa revelou mudança de cultura, e a crença intacta está no nível dos artefatos, por se manifestar em decisões visíveis.",
      "clima e cultura mudaram juntos, pois são nomes do mesmo fenômeno, e a declaração de valores é um pressuposto básico.",
      "a pesquisa captou mudança de clima; a declaração está nos valores declarados, e a crença intacta, nos pressupostos básicos.",
      "a declaração de valores alterou os pressupostos básicos, e a pesquisa confirmou que a cultura mudou em três meses.",
      "a crença intacta é um valor declarado, e a declaração divulgada pela chefia é um artefato da cultura da unidade.",
    ],
    correta: 2,
    explicacao:
      "A pesquisa de clima mede a percepção coletiva num dado momento; por isso reagiu em três meses à troca de chefia. A declaração de valores divulgada pela chefia está no nível dos valores declarados, como missão, códigos e discursos oficiais. A crença tida como óbvia e raramente discutida, que orienta decisões sem ser dita, é um pressuposto básico — o nível mais profundo da cultura e o mais difícil de mudar.",
    explicacaoErradas:
      "Clima e cultura não são o mesmo fenômeno: o clima é passageiro, a cultura é profunda e estável. Uma pesquisa de satisfação não demonstra mudança de cultura em três meses, e uma declaração de valores não altera, por si, os pressupostos básicos. A crença intacta não é artefato só porque influencia decisões: artefatos são o que se vê, como uniforme, rituais e linguagem. Nem é valor declarado, já que ninguém a afirma oficialmente — ela contradiz, aliás, a declaração divulgada.",
    pegadinha:
      "O fato de a crença orientar decisões “visíveis” leva a classificá-la como artefato; mas o que a caracteriza é ser tida como certa e raramente discutida, marca dos pressupostos básicos.",
    conhecimento:
      "Distinção entre clima e cultura organizacional e os três níveis da cultura em Schein (artefatos, valores declarados e pressupostos básicos).",
    origem: "banco",
  },
  {
    id: "prf-administracao-013",
    materia: "administracao",
    topico: "Gestão por competências e gestão do conhecimento",
    subassunto: "Etapas da gestão por competências, comportamento da lacuna e descrição de competências",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: conferir a ordem das etapas, o destino da lacuna e as regras de descrição de competências.",
    enunciado:
      "Uma superintendência da PRF vai implantar a gestão por competências. Sobre o modelo, analise as afirmativas a seguir.\n\nI. O mapeamento vem depois da formulação da estratégia e começa pela pesquisa documental, seguida de entrevistas, grupos focais ou questionários.\nII. Uma vez identificada, a lacuna tende a diminuir sozinha, à medida que os servidores acumulam experiência, o que dispensa ações de captação.\nIII. Captação e desenvolvimento reduzem a lacuna por caminhos diferentes: a primeira busca competências fora, por seleção; o segundo as constrói internamente.\nIV. A descrição “Conhece a legislação de diárias e passagens” é adequada, pois indica com precisão o conhecimento que se espera do servidor.\n\nEstá correto o que se afirma em",
    alternativas: ["I, apenas.", "I e III, apenas.", "II e IV, apenas.", "I, III e IV, apenas.", "II, III e IV, apenas."],
    correta: 1,
    explicacao:
      "A afirmativa I está correta: a gestão por competências parte da estratégia, e o mapeamento começa pela pesquisa documental (missão, visão, planos), seguida de entrevistas, grupos focais, observação ou questionários. A III também: a captação busca competências externas, por seleção, e o desenvolvimento as constrói internamente, pela aprendizagem. Logo, I e III.",
    explicacaoErradas:
      "A afirmativa II está errada: sem captação ou desenvolvimento, a lacuna tende a crescer, porque as exigências mudam e as competências existentes se desatualizam. A IV também: competência se descreve como comportamento observável, com verbo de ação, objeto, critério e condição, e “conhecer” não se observa; algo como “Concede diárias e passagens observando a legislação e os prazos” seria adequado. Toda combinação que inclua II ou IV está errada, e a que traz só a I deixa de fora a III.",
    pegadinha:
      "A afirmativa IV soa precisa porque nomeia a norma, mas usa um verbo que não se observa (“conhece”); a precisão do objeto não salva a descrição.",
    conhecimento:
      "Etapas da gestão por competências (estratégia, mapeamento, captação e desenvolvimento, acompanhamento e retribuição), comportamento da lacuna e regras de descrição de competências.",
    origem: "banco",
  },
  {
    id: "prf-administracao-014",
    materia: "administracao",
    topico: "Gestão por competências e gestão do conhecimento",
    subassunto: "Espiral do conhecimento de Nonaka e Takeuchi: os quatro modos de conversão",
    dificuldade: 4,
    raciocinio: "Classificação: identificar, em cada medida, a origem e o destino do conhecimento (tácito ou explícito).",
    enunciado:
      "Para preservar o saber de um servidor prestes a se aposentar, que resolve quase por intuição pendências complexas no sistema de diárias, uma superintendência da PRF tomou quatro medidas:\n\n1. reuniu num manual único normas e pareceres sobre diárias que estavam espalhados em várias pastas;\n2. pôs um colega recém-chegado para trabalhar semanas ao lado do servidor, observando e repetindo o que ele fazia;\n3. pediu aos dois que convertessem esse saber num guia com exemplos e analogias, anexado ao manual;\n4. orientou servidores de outras unidades a aplicar o manual no dia a dia até dominarem as rotinas.\n\nNa espiral de Nonaka e Takeuchi, as medidas correspondem, respectivamente, a",
    alternativas: [
      "socialização, combinação, externalização e internalização.",
      "combinação, externalização, socialização e internalização.",
      "combinação, socialização, internalização e externalização.",
      "combinação, socialização, externalização e internalização.",
      "externalização, socialização, combinação e internalização.",
    ],
    correta: 3,
    explicacao:
      "Reunir documentos já registrados num manual é combinação (explícito para explícito). Aprender ao lado de quem sabe, observando e repetindo, é socialização (tácito para tácito). Converter o saber num guia com exemplos e analogias é externalização (tácito para explícito), etapa que os autores consideram a chave da criação de conhecimento. Aplicar o manual na prática até dominar a rotina é internalização (explícito para tácito).",
    explicacaoErradas:
      "As versões erradas trocam a ordem dos modos. Começar por socialização ou por externalização ignora que a primeira medida trabalha só com documentos já explícitos. A sequência com internalização antes de externalização inverte as medidas 3 e 4: o guia com analogias torna explícito um saber tácito, e a prática com o manual faz o caminho inverso. A versão com externalização e socialização trocadas confunde aprender observando (tácito para tácito) com escrever o guia.",
    pegadinha:
      "As medidas não seguem a ordem clássica da espiral (socialização, externalização, combinação, internalização); quem marca pela memória da sequência, e não pelo caso, erra.",
    conhecimento:
      "Conhecimento tácito e explícito e os quatro modos de conversão da espiral de Nonaka e Takeuchi (socialização, externalização, combinação e internalização).",
    origem: "banco",
  },
  {
    id: "prf-administracao-015",
    materia: "administracao",
    topico: "Gestão por competências e gestão do conhecimento",
    subassunto: "Práticas de gestão do conhecimento: páginas amarelas, comunidade de prática e lições aprendidas",
    dificuldade: 4,
    raciocinio: "Classificação: associar cada prática à ferramenta de gestão do conhecimento que ela representa.",
    enunciado:
      "Para preservar e difundir o conhecimento das áreas administrativas, a PRF adotou três práticas:\n\n1. um diretório na intranet que indica quais servidores dominam licitações, gestão de frota e diárias, com o contato de cada um;\n2. um grupo de servidores de várias superintendências que se reúne de forma voluntária e contínua para trocar experiências sobre fiscalização de contratos;\n3. um registro, ao fim de cada projeto, do que deu certo e do que deu errado, para orientar os projetos seguintes.\n\nEssas práticas são conhecidas, respectivamente, como",
    alternativas: [
      "páginas amarelas, comunidade de prática e lições aprendidas.",
      "memória organizacional, comunidade de prática e lições aprendidas.",
      "páginas amarelas, comunidade de prática e memória organizacional.",
      "mentoring, comunidade de prática e lições aprendidas.",
      "páginas amarelas, lições aprendidas e comunidade de prática.",
    ],
    correta: 0,
    explicacao:
      "Um diretório que diz quem sabe o quê e como encontrar essas pessoas é a prática das páginas amarelas. Um grupo que se reúne de forma voluntária e contínua em torno de um tema para trocar experiências é uma comunidade de prática. O registro de acertos e erros ao fim de cada projeto, para orientar os seguintes, são as lições aprendidas.",
    explicacaoErradas:
      "Memória organizacional é o acervo amplo de documentos e experiências da organização, e não o diretório de especialistas nem o registro específico de cada projeto. Mentoring é a orientação de carreira por alguém mais experiente, e não um diretório. A versão que inverte a ordem troca o grupo de troca de experiências (comunidade de prática) pelo registro de projetos (lições aprendidas).",
    pegadinha:
      "Memória organizacional parece servir para tudo o que guarda conhecimento; mas o registro feito ao fim de cada projeto, com acertos e erros, tem nome próprio: lições aprendidas.",
    conhecimento:
      "Práticas de gestão do conhecimento: páginas amarelas, comunidades de prática, lições aprendidas, memória organizacional, mentoring e benchmarking.",
    origem: "banco",
  },
  {
    id: "prf-administracao-016",
    materia: "administracao",
    topico: "Qualidade de vida no trabalho",
    subassunto: "Critérios de Walton: constitucionalismo, trabalho e espaço total de vida e uso e desenvolvimento de capacidades",
    dificuldade: 4,
    raciocinio: "Classificação: enquadrar cada medida no critério de Walton pelo que ela protege ou promove — direitos e regras, equilíbrio com a vida pessoal ou exercício das capacidades.",
    enunciado:
      "Uma superintendência da PRF adotou três medidas de qualidade de vida no trabalho:\n\n1. publicou regras claras para a distribuição das escalas e criou um canal sigiloso para contestar decisões das chefias;\n2. passou a evitar mensagens e convocações fora do expediente, para que o trabalho não invada as folgas e o convívio familiar;\n3. deu às equipes autonomia para organizar as próprias tarefas, com retorno frequente sobre os resultados.\n\nNo modelo de Walton, essas medidas atendem, respectivamente, aos critérios de",
    alternativas: [
      "constitucionalismo; trabalho e espaço total de vida; uso e desenvolvimento de capacidades.",
      "integração social; trabalho e espaço total de vida; oportunidade de crescimento e segurança.",
      "constitucionalismo; condições de trabalho seguras e saudáveis; uso e desenvolvimento de capacidades.",
      "relevância social do trabalho; trabalho e espaço total de vida; integração social.",
      "constitucionalismo; relevância social do trabalho; oportunidade de crescimento e segurança.",
    ],
    correta: 0,
    explicacao:
      "Normas claras, privacidade e a possibilidade de contestar decisões compõem o constitucionalismo, que trata dos direitos do trabalhador dentro da organização. Proteger as folgas e o convívio familiar das demandas do serviço é buscar o equilíbrio entre trabalho, família e lazer, próprio do critério trabalho e espaço total de vida. Autonomia para organizar as tarefas, com retorno sobre os resultados, é uso e desenvolvimento de capacidades.",
    explicacaoErradas:
      "Integração social trata de igualdade de oportunidades e ausência de preconceito, e não de regras e de canal de contestação. Condições de trabalho seguras e saudáveis cuidam do ambiente físico e dos riscos, e não da invasão do trabalho na vida pessoal. Relevância social do trabalho diz respeito ao orgulho e à imagem da instituição. Oportunidade de crescimento e segurança envolve carreira e estabilidade, e não a autonomia no dia a dia.",
    pegadinha:
      "A segunda medida mexe com horários, o que leva a pensar em condições de trabalho; mas o foco é proteger a vida pessoal e familiar, que é o critério trabalho e espaço total de vida.",
    conhecimento:
      "Os oito critérios de qualidade de vida no trabalho de Walton e o conteúdo de cada um.",
    origem: "banco",
  },
  {
    id: "prf-administracao-017",
    materia: "administracao",
    topico: "Qualidade de vida no trabalho",
    subassunto: "Abordagens de QVT segundo Ferreira: assistencialista (efeitos) e preventiva (causas)",
    dificuldade: 4,
    raciocinio: "Aplicação de conceito: verificar se cada programa atua sobre o indivíduo, compensando o desgaste, ou sobre as condições e a organização do trabalho que o produzem.",
    enunciado:
      "Duas superintendências da PRF lançaram programas de qualidade de vida no trabalho. A primeira passou a oferecer ginástica laboral, sessões de massagem e palestras sobre controle do estresse. A segunda revisou com os servidores os prazos e o fluxo dos processos, eliminou etapas que geravam retrabalho e ajustou o número de pessoas por turno. Segundo a abordagem de Mário César Ferreira, é correto afirmar que",
    alternativas: [
      "as duas são preventivas, pois qualquer ação que reduza o estresse do servidor atua sobre as causas do mal-estar no trabalho.",
      "a primeira é preventiva, porque se antecipa ao adoecimento, e a segunda é assistencialista, porque responde a queixas já existentes.",
      "as duas são assistencialistas, pois partiram da administração e cabe ao servidor, em ambos os casos, adaptar-se às mudanças.",
      "a primeira é assistencialista, por atuar nos efeitos do mal-estar, e a segunda é preventiva, por atacar as causas.",
      "a segunda só se justifica depois da primeira, pois a abordagem preventiva exige que o servidor já saiba lidar com o estresse.",
    ],
    correta: 3,
    explicacao:
      "Ginástica laboral, massagem e palestras antiestresse são atividades compensatórias: aliviam o desgaste depois que ele surge e deixam ao servidor a tarefa de se adaptar, o que caracteriza a abordagem assistencialista, a predominante. Revisar prazos e fluxos, eliminar retrabalho e ajustar o efetivo mexe nas condições e na organização do trabalho, isto é, nas causas do mal-estar: é a abordagem preventiva, ou contra-hegemônica.",
    explicacaoErradas:
      "Reduzir o estresse não basta para que a ação seja preventiva: o critério é atuar nas causas, e as atividades compensatórias atuam nos efeitos. Inverter as abordagens confunde antecipar o adoecimento com atacar suas causas. Chamar as duas de assistencialistas ignora que a segunda mudou a organização do trabalho, e com a participação dos servidores. E a abordagem preventiva não depende de uma etapa assistencialista prévia.",
    pegadinha:
      "A primeira iniciativa parece preventiva por acontecer antes do adoecimento; para Ferreira, porém, o que define a abordagem é o alvo — os efeitos do mal-estar ou as suas causas —, e não o momento da ação.",
    conhecimento:
      "Abordagens assistencialista (hegemônica) e preventiva (contra-hegemônica) de qualidade de vida no trabalho segundo Mário César Ferreira.",
    origem: "banco",
  },
  {
    id: "prf-administracao-018",
    materia: "administracao",
    topico: "Estrutura organizacional e departamentalização",
    subassunto: "Critérios de departamentalização: geográfico, funcional e por clientela",
    dificuldade: 4,
    raciocinio: "Classificação: identificar o critério de agrupamento em cada parte da estrutura — território, função ou tipo de usuário atendido.",
    enunciado:
      "A estrutura de uma superintendência da PRF combina três critérios de agrupamento:\n\n1. cada delegacia responde por um conjunto de trechos das rodovias federais do estado;\n2. a área administrativa se divide em seções de licitações, de gestão de pessoas e de orçamento;\n3. o setor de atendimento mantém guichês separados para transportadoras e para cidadãos.\n\nOs critérios de departamentalização adotados são, respectivamente,",
    alternativas: [
      "geográfico, por processo e por clientela.",
      "funcional, geográfico e por clientela.",
      "geográfico, funcional e por clientela.",
      "geográfico, funcional e por serviço.",
      "por clientela, por processo e geográfico.",
    ],
    correta: 2,
    explicacao:
      "Dividir a atuação por trechos de rodovia é agrupar por território: critério geográfico. Seções de licitações, gestão de pessoas e orçamento agrupam atividades pela função que desempenham: critério funcional. Guichês separados para transportadoras e para cidadãos agrupam o atendimento pelo tipo de usuário: critério por clientela.",
    explicacaoErradas:
      "Por processo seria agrupar pelas etapas de um fluxo, como receber, analisar e arquivar, o que não descreve as seções nem os guichês. Por serviço (ou produto) seria separar os guichês pelo tipo de serviço prestado, como emissão de documentos ou recursos de multas, e não por quem é atendido. A versão que começa pelo critério funcional inverte as duas primeiras partes da estrutura.",
    pegadinha:
      "Guichês diferentes lembram a separação por serviço; mas o que distingue os guichês é quem é atendido (transportadoras ou cidadãos), e não o serviço prestado: o critério é por clientela.",
    conhecimento:
      "Critérios de departamentalização: funcional, geográfico, por produto ou serviço, por clientela, por processo, por projeto e matricial.",
    origem: "banco",
  },
  {
    id: "prf-administracao-019",
    materia: "administracao",
    topico: "Estrutura organizacional e departamentalização",
    subassunto: "Amplitude de controle, delegação e descentralização em Administração × no Direito Administrativo",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: aplicar os conceitos de amplitude de controle e delegação e distinguir o sentido de descentralização em Administração e no Direito Administrativo.",
    enunciado:
      "Uma superintendência da PRF eliminou dois níveis de chefia na área administrativa e passou a delegar aos chefes de seção decisões antes reservadas ao superintendente. Sobre essa mudança, analise as afirmativas a seguir.\n\nI. Com menos níveis hierárquicos, cada chefe passa a ter mais subordinados diretos: a amplitude de controle aumenta, e a estrutura fica mais achatada.\nII. Ao delegar, o superintendente transfere tarefas e autoridade aos chefes de seção, mas não deixa de responder pelos resultados da área.\nIII. Uma amplitude de controle maior tende a funcionar melhor com equipes qualificadas, tarefas semelhantes e normas claras.\nIV. No sentido do Direito Administrativo, a mudança é uma descentralização, porque as decisões passaram a ser tomadas em níveis mais baixos da mesma estrutura.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "I, III e IV, apenas.", "II e IV, apenas.", "II, III e IV, apenas.", "I, II e III, apenas."],
    correta: 4,
    explicacao:
      "A afirmativa I está correta: retirar níveis hierárquicos aumenta o número de subordinados por chefe (amplitude de controle) e achata a estrutura. A II também: a delegação transfere tarefas e autoridade, mas não tira a responsabilidade de quem delega. A III também: equipes qualificadas, tarefas semelhantes e normas claras reduzem a necessidade de supervisão direta e permitem amplitude maior. Logo, I, II e III.",
    explicacaoErradas:
      "A afirmativa IV está errada: em Administração, levar decisões a níveis mais baixos é, sim, descentralizar; no Direito Administrativo, porém, descentralização pressupõe transferir a atividade a outra pessoa, e a distribuição de competências dentro da mesma pessoa jurídica é desconcentração. Toda combinação que inclua IV está errada, e a que traz só I e II deixa de fora a III.",
    pegadinha:
      "A palavra descentralização muda de sentido entre as matérias: a mudança é descentralização em Administração, mas, no Direito Administrativo, a redistribuição de competências dentro do mesmo órgão é desconcentração.",
    conhecimento:
      "Amplitude de controle e fatores que a influenciam; delegação de autoridade e responsabilidade; descentralização em Administração; descentralização e desconcentração no Direito Administrativo.",
    origem: "banco",
  },
  {
    id: "prf-administracao-020",
    materia: "administracao",
    topico: "Liderança, motivação e satisfação no trabalho",
    subassunto: "Liderança situacional de Hersey e Blanchard: maturidade M2 (persuadir) e M3 (compartilhar)",
    dificuldade: 4,
    raciocinio: "Classificação: avaliar separadamente a capacidade e a disposição (ou segurança) de cada liderado, definir o nível de maturidade e associar o estilo correspondente.",
    enunciado:
      "Na seção de contratos de uma superintendência da PRF, a chefe precisa orientar dois servidores:\n\n1. Paulo acabou de chegar, ainda não domina a fiscalização de contratos, mas está motivado e confiante para aprender;\n2. Rita fiscaliza contratos há anos com ótimo desempenho, mas ficou insegura para decidir sozinha depois de uma auditoria.\n\nSegundo a liderança situacional de Hersey e Blanchard, os estilos mais adequados para Paulo e para Rita são, respectivamente,",
    alternativas: [
      "determinar e compartilhar.",
      "persuadir e compartilhar.",
      "compartilhar e persuadir.",
      "persuadir e delegar.",
      "determinar e delegar.",
    ],
    correta: 1,
    explicacao:
      "Paulo ainda não tem capacidade, mas está disposto e confiante: maturidade M2, que pede o estilo persuadir, com orientação sobre a tarefa e apoio para manter o empenho. Rita é capaz, mas ficou insegura: maturidade M3, que pede compartilhar, com pouca orientação técnica e muito apoio, envolvendo-a nas decisões até que recupere a confiança.",
    explicacaoErradas:
      "Determinar é o estilo para M1, liderado sem capacidade e sem disposição ou inseguro; Paulo é motivado e confiante. Delegar é para M4, capaz e seguro; a insegurança de Rita afasta esse estilo, apesar do bom desempenho. A versão invertida aplica a Paulo o estilo de quem já domina a tarefa e a Rita o de quem ainda precisa aprender.",
    pegadinha:
      "O histórico de ótimo desempenho leva a delegar para Rita; mas, no modelo, a maturidade combina capacidade e disposição, e a insegurança dela pede o estilo compartilhar.",
    conhecimento:
      "Liderança situacional de Hersey e Blanchard: níveis de maturidade M1 a M4 e estilos determinar, persuadir, compartilhar e delegar.",
    origem: "banco",
  },
  {
    id: "prf-administracao-021",
    materia: "administracao",
    topico: "Liderança, motivação e satisfação no trabalho",
    subassunto: "Teoria dos dois fatores de Herzberg: fatores higiênicos × fatores motivacionais",
    dificuldade: 4,
    raciocinio: "Aplicação de conceito: reconhecer que as medidas tomadas foram higiênicas (reduzem a insatisfação) e escolher a que atua sobre o conteúdo do trabalho.",
    enunciado:
      "Depois da reforma das instalações, da troca do mobiliário e de um reajuste da gratificação aprovado em lei, a chefia de uma unidade administrativa da PRF notou que as reclamações diminuíram, mas o empenho da equipe continuou o mesmo. Segundo a teoria dos dois fatores de Herzberg, a medida com maior potencial para elevar a motivação da equipe seria",
    alternativas: [
      "buscar novo reajuste, maior que o anterior, pois o salário passa a motivar quando supera as expectativas da equipe.",
      "dar à equipe responsabilidade pelos próprios projetos, com reconhecimento pelos resultados alcançados.",
      "ampliar as melhorias físicas, pois os fatores ambientais se somam e, acumulados, acabam por gerar motivação.",
      "reforçar as normas e a supervisão direta, pois, para Herzberg, a motivação nasce do controle sobre o trabalho.",
      "manter as medidas e aguardar, pois a satisfação com o ambiente vira motivação com o tempo.",
    ],
    correta: 1,
    explicacao:
      "Instalações, mobiliário e remuneração são fatores higiênicos: quando adequados, reduzem a insatisfação — por isso as queixas caíram —, mas não geram motivação. Para Herzberg, a motivação vem dos fatores ligados ao conteúdo do trabalho, como responsabilidade, reconhecimento, realização e crescimento. Dar à equipe responsabilidade pelos próprios projetos e reconhecer os resultados atua justamente sobre esses fatores.",
    explicacaoErradas:
      "Salário é fator higiênico em qualquer valor: novo reajuste reduziria a insatisfação, sem produzir motivação duradoura. Melhorias físicas não se acumulam até virar motivação, pois higiene e motivação são dimensões distintas, e não pontos de uma mesma escala. Normas e supervisão também são fatores higiênicos, e a teoria não liga motivação a controle. Esperar não resolve: ausência de insatisfação não é o mesmo que satisfação.",
    pegadinha:
      "A queda das reclamações sugere que as medidas deram certo; para Herzberg, porém, o oposto da insatisfação é a ausência de insatisfação, e não a motivação.",
    conhecimento:
      "Teoria dos dois fatores de Herzberg: fatores higiênicos (extrínsecos) e motivacionais (intrínsecos) e a independência entre satisfação e insatisfação.",
    origem: "banco",
  },
  {
    id: "prf-administracao-022",
    materia: "administracao",
    topico: "Liderança, motivação e satisfação no trabalho",
    subassunto: "Teoria da equidade de Adams: comparação social e reações à percepção de desigualdade",
    dificuldade: 4,
    raciocinio: "Aplicação de conceito: reconhecer a comparação entre contribuições e resultados e as reações que a teoria prevê para restaurar o equilíbrio.",
    enunciado:
      "Um servidor administrativo da PRF percebe que um colega da mesma função, que produz bem menos, foi escolhido pela chefia para uma função comissionada. Ele cogita três reações: diminuir o próprio esforço, passar a se comparar com colegas de outra unidade ou pedir transferência. Essas reações são explicadas pela teoria",
    alternativas: [
      "da expectância de Vroom, segundo a qual o esforço cai quando a recompensa deixa de ter valor para o servidor.",
      "do reforço de Skinner, que explica a redução do esforço como resposta à punição aplicada pela chefia.",
      "das necessidades adquiridas de McClelland, pois as reações revelam uma necessidade de poder frustrada.",
      "do estabelecimento de metas de Locke, já que o servidor passa a ajustar o esforço à meta que fixou para si.",
      "da equidade de Adams, que trata da comparação entre contribuições e resultados próprios e alheios.",
    ],
    correta: 4,
    explicacao:
      "A teoria da equidade de Adams parte da comparação entre a razão contribuições/resultados de quem avalia e a de um referencial. Quando percebe desigualdade, a pessoa tenta restaurar o equilíbrio: altera as próprias contribuições (diminui o esforço), muda o referencial de comparação, distorce a percepção ou deixa a situação (pede transferência). As três reações cogitadas estão nesse rol.",
    explicacaoErradas:
      "Em Vroom, o esforço depende de expectativa, instrumentalidade e valência, e a teoria não prevê a troca do colega usado como referência. Skinner trata do comportamento moldado por consequências, e não houve punição ao servidor. McClelland descreve necessidades de realização, afiliação e poder, sem relação com a comparação feita. Locke liga o desempenho a metas claras e desafiadoras, e o caso não envolve meta alguma.",
    pegadinha:
      "A queda do esforço pode lembrar Vroom ou Skinner; o que denuncia a equidade é a comparação com um colega e a troca de referencial, reação que só a teoria de Adams prevê.",
    conhecimento:
      "Teorias da motivação: equidade (Adams), expectância (Vroom), reforço (Skinner), estabelecimento de metas (Locke) e necessidades adquiridas (McClelland).",
    origem: "banco",
  },
  {
    id: "prf-administracao-023",
    materia: "administracao",
    topico: "Recrutamento e seleção",
    subassunto: "Quociente de seleção e qualidades dos testes: precisão (fidedignidade) × validade",
    dificuldade: 4,
    raciocinio: "Cálculo e classificação: calcular o quociente de seleção e distinguir a consistência dos resultados (precisão) da capacidade de prever o desempenho (validade).",
    enunciado:
      "Para formar uma equipe de análise de contratos, uma superintendência da PRF abriu seleção interna e aplicou um teste a 60 servidores, dos quais 6 foram escolhidos. Ao reaplicar o teste aos mesmos candidatos, obteve resultados quase idênticos; um ano depois, porém, verificou que as notas no teste não guardavam relação com o desempenho dos escolhidos na função. O quociente de seleção e a avaliação do teste são, respectivamente,",
    alternativas: [
      "10%, e o teste é válido e preciso.",
      "90%, e o teste é preciso, mas não é válido.",
      "10%, e o teste é válido, mas não é preciso.",
      "10%, e o teste é preciso, mas não é válido.",
      "6%, e o teste não é preciso nem válido.",
    ],
    correta: 3,
    explicacao:
      "O quociente de seleção é o número de admitidos dividido pelo de examinados, vezes 100: 6 ÷ 60 × 100 = 10%. Resultados quase idênticos na reaplicação indicam precisão (fidedignidade ou consistência). Notas sem relação com o desempenho posterior indicam falta de validade, isto é, o teste não mede o que deveria prever. Logo, 10%, preciso, mas não válido.",
    explicacaoErradas:
      "90% é a proporção de não escolhidos, e 6% confunde o número de escolhidos com o percentual. Repetir resultados prova só a precisão: um teste pode ser consistente e, ainda assim, medir algo sem relação com o trabalho, e por isso não é válido. Inverter as qualidades também erra: a consistência na reaplicação é justamente a marca da precisão.",
    pegadinha:
      "Resultados que se repetem passam a impressão de que o teste é bom; mas a repetição atesta só a precisão, e a validade depende de o teste prever o desempenho na função.",
    conhecimento:
      "Quociente de seleção (admitidos ÷ examinados × 100) e as qualidades das técnicas de seleção: precisão (fidedignidade) e validade.",
    origem: "banco",
  },
  {
    id: "prf-administracao-024",
    materia: "administracao",
    topico: "Recrutamento e seleção",
    subassunto: "Recrutamento interno: vantagens, desvantagens e limite constitucional do concurso público",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: confrontar vantagens e desvantagens do recrutamento interno e o limite que o concurso público impõe no setor público.",
    enunciado:
      "A PRF vai preencher vagas numa nova divisão de gestão de contratos. Sobre o recrutamento para essas vagas, analise as afirmativas a seguir.\n\nI. Buscar candidatos entre os próprios servidores aproveita quem já conhece a organização e motiva pela perspectiva de crescimento, mas tende a reduzir a entrada de ideias novas.\nII. Se as vagas exigirem investidura em cargo efetivo, a seleção não pode ficar restrita aos servidores, pois a Constituição exige concurso público aberto a quem preencha os requisitos legais.\nIII. O recrutamento interno elimina os conflitos entre os servidores, já que todos passam a ter as mesmas chances de ser escolhidos.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "I, apenas.", "II e III, apenas.", "I, II e III.", "III, apenas."],
    correta: 0,
    explicacao:
      "A afirmativa I está correta: o recrutamento interno é mais rápido e barato, aproveita quem conhece a organização e motiva pela perspectiva de crescimento, mas tende a restringir a entrada de ideias novas. A II também: a investidura em cargo efetivo depende de aprovação prévia em concurso público, aberto aos que preencham os requisitos da lei (art. 37, I e II, da Constituição). Logo, I e II.",
    explicacaoErradas:
      "A afirmativa III está errada: o recrutamento interno pode gerar conflitos, como frustração e disputa entre os que não foram escolhidos, e esse é um dos seus inconvenientes clássicos. Por isso caem as combinações com III, e a que traz só a I deixa de fora a regra do concurso.",
    pegadinha:
      "A afirmativa III soa como vantagem — chances iguais para todos —, mas o recrutamento interno costuma gerar disputa e frustração entre os preteridos; e, no setor público, ele não substitui o concurso para cargo efetivo.",
    conhecimento:
      "Recrutamento interno e externo (vantagens e desvantagens) e a exigência de concurso público para a investidura em cargo efetivo (art. 37, II, da Constituição).",
    origem: "banco",
  },
  {
    id: "prf-administracao-025",
    materia: "administracao",
    topico: "Análise e descrição de cargos",
    subassunto: "Descrição × especificação de cargos: requisitos mentais, requisitos físicos e responsabilidades envolvidas",
    dificuldade: 5,
    raciocinio: "Classificação: separar o que o ocupante faz (descrição) do que o cargo exige dele (especificação) e nomear os fatores de especificação.",
    enunciado:
      "O documento de análise do cargo de assistente de almoxarifado de uma superintendência da PRF traz os trechos a seguir.\n\n1. “Recebe, confere e registra os materiais entregues pelos fornecedores e organiza o estoque.”\n2. “Ensino médio completo e um ano de experiência em controle de estoque.”\n3. “Capacidade de levantar volumes de até 20 kg e de permanecer em pé durante a maior parte da jornada.”\n4. “Responsabilidade por materiais e equipamentos de alto valor sob sua guarda.”\n\nÀ luz da distinção entre descrição e especificação de cargos, é correto afirmar que",
    alternativas: [
      "os quatro trechos são descrição, pois todos tratam do que o ocupante precisa fazer ou ter para exercer o cargo.",
      "o trecho 1 é especificação, e os demais são descrição, pois detalham as condições concretas do trabalho no almoxarifado.",
      "o trecho 1 é descrição; os trechos 2, 3 e 4 são especificação, com requisitos mentais, físicos e responsabilidades.",
      "os trechos 1 e 4 são descrição, pois a guarda dos materiais é tarefa do cargo, e os trechos 2 e 3 são especificação.",
      "o trecho 1 é descrição, e os trechos 2, 3 e 4 trazem, nessa ordem, requisitos físicos, mentais e condições de trabalho.",
    ],
    correta: 2,
    explicacao:
      "A descrição de cargo diz o que o ocupante faz, como, quando, onde e por quê: é o trecho 1, com as tarefas do cargo. A especificação diz o que o cargo exige de quem o ocupa e se organiza em requisitos mentais (trecho 2: instrução e experiência), requisitos físicos (trecho 3: esforço e postura), responsabilidades envolvidas (trecho 4: por material e equipamento) e condições de trabalho.",
    explicacaoErradas:
      "Chamar tudo de descrição apaga a distinção: escolaridade, experiência e esforço físico são exigências feitas ao ocupante, e não tarefas. Inverter os papéis faz das tarefas uma especificação. Tratar o trecho 4 como tarefa ignora que a responsabilidade por material e equipamento é fator de especificação. E a ordem física-mental, com condições de trabalho no fim, troca os trechos 2 e 3 e confunde responsabilidade com ambiente de trabalho.",
    pegadinha:
      "“Sob sua guarda” lembra uma tarefa, mas o trecho fala em responsabilidade pelos bens guardados, um dos quatro fatores da especificação; as tarefas de receber e organizar o estoque já estão no trecho 1.",
    conhecimento:
      "Descrição de cargos (conteúdo do cargo) e especificação (requisitos mentais, requisitos físicos, responsabilidades envolvidas e condições de trabalho).",
    origem: "banco",
  },
  {
    id: "prf-administracao-026",
    materia: "administracao",
    topico: "Análise e descrição de cargos",
    subassunto: "Métodos de coleta de dados para análise de cargos: observação direta, questionário, entrevista e diário",
    dificuldade: 4,
    raciocinio: "Aplicação de conceito: escolher o método pela natureza das tarefas, pelo número e pela dispersão dos ocupantes e pelo prazo.",
    enunciado:
      "A área de gestão de pessoas da PRF precisa analisar dois cargos:\n\n1. operador de digitalização, com tarefas simples, manuais e repetitivas, todas executadas à vista numa mesma sala;\n2. agente administrativo, com centenas de ocupantes lotados em unidades de vários estados, habituados a redigir relatórios, e análise a concluir em poucas semanas.\n\nOs métodos de coleta de dados mais indicados para cada caso são, respectivamente,",
    alternativas: [
      "entrevista com o supervisor e observação direta.",
      "questionário e entrevista individual com cada ocupante.",
      "observação direta e questionário aos ocupantes.",
      "diário de atividades e observação direta no local.",
      "observação direta e entrevista com cada ocupante.",
    ],
    correta: 2,
    explicacao:
      "A observação direta é indicada para tarefas simples, manuais e repetitivas, que podem ser vistas enquanto acontecem, como as do operador de digitalização. O questionário é o método mais prático quando há muitos ocupantes, espalhados geograficamente, prazo curto e pessoas capazes de responder por escrito, como no segundo cargo.",
    explicacaoErradas:
      "A entrevista é o método mais completo, mas é lenta e cara para centenas de ocupantes dispersos e um prazo de poucas semanas. Entrevistar só o supervisor deixaria de lado a observação, a forma mais fiel de levantar tarefas visíveis e repetitivas. Observar centenas de ocupantes em vários estados é inviável no prazo, e o diário, em que o ocupante registra o que faz ao longo de um período, não traz vantagem para tarefas que podem ser vistas diretamente.",
    pegadinha:
      "A entrevista individual é o método mais completo e por isso atrai; mas o critério é a adequação ao caso, e com centenas de ocupantes dispersos e prazo curto ela se torna inviável.",
    conhecimento:
      "Métodos de coleta de dados na análise de cargos — observação direta, questionário, entrevista, diário e métodos mistos — e quando usar cada um.",
    origem: "banco",
  },
  {
    id: "prf-administracao-027",
    materia: "administracao",
    topico: "Treinamento, desenvolvimento e educação",
    subassunto: "Níveis de avaliação de Kirkpatrick e o quinto nível de Phillips",
    dificuldade: 4,
    raciocinio: "Classificação: identificar o que cada avaliação mede — o que se aprendeu, o que mudou no trabalho ou o efeito na organização — e separar resultado de retorno financeiro.",
    enunciado:
      "Depois de um curso sobre fiscalização de contratos, uma superintendência da PRF avaliou os participantes de três formas:\n\n1. aplicou uma prova no último dia do curso;\n2. três meses depois, confirmou com as chefias se os servidores passaram a aplicar no trabalho o que aprenderam;\n3. seis meses depois, comparou o índice de falhas nos contratos da unidade com o do ano anterior.\n\nNo modelo de Kirkpatrick, essas avaliações correspondem, respectivamente, aos níveis de",
    alternativas: [
      "aprendizagem, comportamento e resultados.",
      "reação, aprendizagem e comportamento.",
      "aprendizagem, resultados e retorno do investimento.",
      "reação, comportamento e resultados.",
      "aprendizagem, comportamento e retorno do investimento.",
    ],
    correta: 0,
    explicacao:
      "A prova no fim do curso mede o que foi aprendido: nível de aprendizagem. Verificar, meses depois, se o servidor aplica no trabalho o que aprendeu é o nível de comportamento. Comparar o índice de falhas nos contratos da unidade mede o efeito na organização: nível de resultados.",
    explicacaoErradas:
      "Reação é a satisfação do participante com o curso, colhida em geral por questionário; uma prova de conhecimentos mede aprendizagem, ainda que aplicada no último dia. Retorno do investimento é o quinto nível, acrescentado por Phillips, e exige converter os benefícios em valor monetário e compará-los ao custo do curso, o que a simples comparação do índice de falhas não faz.",
    pegadinha:
      "Avaliação feita no último dia lembra o nível de reação, e um indicador da unidade lembra retorno do investimento; o que define o nível é o que se mede — conhecimento, aplicação no trabalho ou efeito organizacional —, e o retorno do investimento pede cálculo financeiro.",
    conhecimento:
      "Os quatro níveis de avaliação de treinamento de Kirkpatrick (reação, aprendizagem, comportamento e resultados) e o quinto nível de Phillips (retorno do investimento).",
    origem: "banco",
  },
  {
    id: "prf-administracao-028",
    materia: "administracao",
    topico: "Treinamento, desenvolvimento e educação",
    subassunto: "Métodos de desenvolvimento: coaching, mentoring e aconselhamento",
    dificuldade: 4,
    raciocinio: "Classificação: diferenciar as práticas por quem orienta, pelo horizonte (tarefa atual ou carreira) e pelo motivo (desempenho, carreira ou problema de conduta).",
    enunciado:
      "Na área administrativa de uma superintendência da PRF, três práticas de desenvolvimento estão em curso:\n\n1. a chefe acompanha semanalmente uma servidora na tarefa atual, com metas de curto prazo e retorno sobre cada entrega;\n2. um servidor conversa periodicamente sobre carreira e escolhas profissionais com um colega experiente de outra área;\n3. diante de faltas repetidas de um servidor, a chefia o chama para conversas reservadas, a fim de entender as causas e combinar mudanças.\n\nEssas práticas correspondem, respectivamente, a",
    alternativas: [
      "mentoring, coaching e aconselhamento.",
      "coaching, aconselhamento e rodízio de cargos.",
      "aconselhamento, mentoring e posições de assessoria.",
      "coaching, mentoring e rodízio de cargos.",
      "coaching, mentoring e aconselhamento.",
    ],
    correta: 4,
    explicacao:
      "Acompanhar a servidora na tarefa atual, com metas de curto prazo e retorno frequente, é coaching: a chefia orienta o desempenho presente. Conversar sobre carreira com alguém mais experiente, de fora da linha de chefia, é mentoring. Chamar o servidor para entender faltas repetidas e combinar mudanças é aconselhamento, usado quando há problema de desempenho ou de disciplina.",
    explicacaoErradas:
      "Inverter coaching e mentoring confunde o foco no desempenho atual, conduzido pela chefia, com a orientação de carreira por alguém experiente. Rodízio de cargos é passar por funções diferentes para ampliar a experiência, e posições de assessoria põem o servidor para assessorar um gestor; ambas são estranhas ao tratamento de faltas repetidas. E chamar a primeira prática de aconselhamento ignora que ela não parte de um problema de conduta.",
    pegadinha:
      "As três práticas são conversas individuais; o que as separa é o propósito — melhorar a tarefa atual, orientar a carreira ou tratar um problema de conduta —, e não o formato do encontro.",
    conhecimento:
      "Métodos de desenvolvimento de pessoas no cargo e fora dele: coaching, mentoring, aconselhamento, rodízio de cargos e posições de assessoria.",
    origem: "banco",
  },
  {
    id: "prf-administracao-029",
    materia: "administracao",
    topico: "Educação corporativa e a distância",
    subassunto: "Do centro de treinamento à universidade corporativa (Meister e Eboli)",
    dificuldade: 4,
    raciocinio: "Aplicação de conceito: distinguir as marcas do centro de treinamento tradicional das da universidade corporativa.",
    enunciado:
      "Uma superintendência da PRF quer transformar seu antigo centro de treinamento numa universidade corporativa, nos moldes descritos por Meister e Eboli. A mudança que melhor caracteriza essa transição é",
    alternativas: [
      "manter os cursos montados a partir das demandas pontuais das chefias, agora oferecidos em ambiente virtual de aprendizagem.",
      "vincular as ações educacionais às competências críticas da estratégia do órgão, abertas a todos os níveis.",
      "ampliar o catálogo de cursos e reservar os programas educacionais mais amplos aos servidores que ocupam cargos de chefia.",
      "migrar toda a capacitação para a educação a distância, condição necessária para que se fale em universidade corporativa.",
      "concentrar a oferta nas habilidades técnicas do cargo atual, com cursos rápidos para corrigir as lacunas já identificadas.",
    ],
    correta: 1,
    explicacao:
      "A universidade corporativa substitui o treinamento reativo e pontual por ações proativas, ligadas às competências críticas da estratégia, e abre a educação a todos os níveis — e até à cadeia de valor —, em formatos presenciais e virtuais. Vincular a oferta à estratégia e ampliar o público é a marca da transição descrita por Meister e Eboli.",
    explicacaoErradas:
      "Cursos montados por demandas pontuais continuam reativos, ainda que virtuais: mudar o meio não muda o modelo. Reservar os programas mais amplos às chefias é traço do antigo centro de treinamento. A educação a distância é um recurso da universidade corporativa (princípio da disponibilidade), e não condição para que ela exista. Concentrar-se em habilidades do cargo atual e em correções pontuais também descreve o modelo antigo.",
    pegadinha:
      "O ambiente virtual e a educação a distância parecem sinais de modernização; mas o que define a universidade corporativa é o vínculo com a estratégia e o público ampliado, e não o meio de oferta.",
    conhecimento:
      "Diferenças entre centro de treinamento e universidade corporativa, forças que impulsionaram o modelo (Meister) e princípios de Eboli.",
    origem: "banco",
  },
  {
    id: "prf-administracao-030",
    materia: "administracao",
    topico: "Educação corporativa e a distância",
    subassunto: "Atividades síncronas e assíncronas, comunicação de mão dupla e ensino semipresencial",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas (V/F): classificar cada atividade pelo critério de tempo e separar comunicação de mão dupla de sincronia e EaD de ensino semipresencial.",
    enunciado:
      "Uma superintendência da PRF ofereceu um curso totalmente a distância sobre gestão de contratos, com encontros ao vivo por videoconferência, aulas gravadas e um fórum de discussão. Sobre esse curso, avalie se as afirmativas a seguir são verdadeiras (V) ou falsas (F).\n\n( ) Os encontros ao vivo são atividades síncronas, pois exigem a participação simultânea de tutor e alunos, ainda que em lugares diferentes.\n( ) O fórum é uma atividade síncrona, porque nele alunos e tutor trocam mensagens entre si.\n( ) Quando o tutor responde às dúvidas no fórum, há comunicação de mão dupla, ainda que assíncrona.\n( ) Por combinar encontros ao vivo e aulas gravadas, o curso passou a ser semipresencial.\n\nAs afirmativas são, respectivamente,",
    alternativas: ["V – V – V – F.", "F – F – V – V.", "V – F – F – V.", "V – F – V – F.", "F – V – V – F."],
    correta: 3,
    explicacao:
      "A primeira é verdadeira: atividade síncrona ocorre ao mesmo tempo para todos, ainda que em lugares diferentes, como a videoconferência. A segunda é falsa: no fórum, cada um participa em momentos diferentes, o que o torna assíncrono, apesar da troca de mensagens. A terceira é verdadeira: a resposta do tutor caracteriza comunicação de mão dupla, que independe de ser em tempo real. A quarta é falsa: o ensino semipresencial combina momentos presenciais e a distância, e o curso continua todo a distância. Sequência: V – F – V – F.",
    explicacaoErradas:
      "As sequências que marcam a segunda como verdadeira confundem interação com simultaneidade: trocar mensagens não torna o fórum síncrono. As que marcam a quarta como verdadeira tratam a mistura de atividades ao vivo e gravadas como ensino semipresencial, que exige momentos presenciais. As que marcam a primeira como falsa ignoram que a sincronia depende do tempo, e não do lugar, e as que marcam a terceira como falsa supõem que só há mão dupla em tempo real.",
    pegadinha:
      "Duas confusões se cruzam: interação não é o mesmo que sincronia (o fórum é interativo e assíncrono), e misturar atividades ao vivo e gravadas não torna o curso semipresencial, porque tudo continua a distância.",
    conhecimento:
      "Atividades síncronas e assíncronas na educação a distância, comunicação de mão dupla na tutoria e diferença entre EaD e ensino semipresencial (híbrido).",
    origem: "banco",
  },
];
