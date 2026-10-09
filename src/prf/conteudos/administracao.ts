import type { ConteudoPrf } from "../../data/prf";

export const CONTEUDO_PRF_ADMINISTRACAO: ConteudoPrf[] = [
  {
    materia: "administracao",
    topico: "Evolução da administração pública e reforma do Estado",
    texto: `A administração pública brasileira passou por três modelos, que ainda convivem em alguma medida: o patrimonialista, o burocrático e o gerencial.

Os três modelos:
• Patrimonialista: o público se confunde com o patrimônio do governante, e cargos viram favores, com nepotismo e clientelismo
• Burocrático: reação ao patrimonialismo, inspirada em Weber, com impessoalidade, mérito, hierarquia, normas escritas e controle prévio dos procedimentos; seu risco é o formalismo, quando a regra vira um fim em si mesma
• Gerencial: foco em resultados e no cidadão, controle a posteriori, descentralização, metas e contratos de gestão

Marcos no Brasil:
• 1938: criação do DASP (Decreto-Lei 579), marco da reforma burocrática da Era Vargas, com concursos, proposta orçamentária, padronização de materiais e formação de servidores
• Anos 1950: no Plano de Metas de JK, a administração paralela criou grupos executivos fora da estrutura tradicional para ganhar agilidade
• 1967: o Decreto-Lei 200 fixou os princípios de planejamento, coordenação, descentralização, delegação de competência e controle e separou a administração direta da indireta; Bresser-Pereira o vê como o primeiro ensaio gerencial, com o efeito colateral de abrir espaço a contratações sem concurso na indireta
• 1988: a Constituição tornou o concurso obrigatório e criou o regime jurídico único, o que Bresser chamou de retrocesso burocrático
• 1995: criação do Ministério da Administração Federal e Reforma do Estado (MARE) e do Plano Diretor da Reforma do Aparelho do Estado (PDRAE)

Os quatro setores do PDRAE:
• Núcleo estratégico: define leis e políticas (Legislativo, Judiciário, Ministério Público, Presidente e ministros)
• Atividades exclusivas: exigem o poder de Estado de regulamentar, fiscalizar e fomentar, como polícia, trânsito, arrecadação e emissão de passaportes; propriedade estatal com gestão gerencial
• Serviços não exclusivos: universidades, hospitais, centros de pesquisa e museus; propriedade pública não estatal, alcançada pela publicização, com organizações sociais
• Produção para o mercado: empresas estatais, destinadas à privatização

Desdobramentos: EC 19/1998 (princípio da eficiência e contrato que amplia a autonomia de órgãos em troca de metas, no art. 37, § 8º), agências reguladoras, organizações sociais (Lei 9.637/1998), OSCIP (Lei 9.790/1999), Lei de Responsabilidade Fiscal (LC 101/2000), parcerias público-privadas (Lei 11.079/2004) e consórcios públicos (Lei 11.107/2005).`,
    exemplos: [
      "Uma universidade federal é, pelo PDRAE, serviço não exclusivo: o plano admitia que atividades como essa fossem publicizadas e geridas por organizações sociais, sob contrato de gestão.",
      "O Decreto-Lei 200/1967 separou a administração direta, formada pela Presidência e pelos ministérios, da indireta, formada por entidades com personalidade jurídica própria, como as autarquias.",
    ],
    curiosidade:
      "O PDRAE chamou de publicização a passagem de serviços não exclusivos para entidades públicas não estatais, justamente para diferenciá-la da privatização, reservada às estatais que produzem para o mercado.",
  },
  {
    materia: "administracao",
    topico: "Gestão pública e gestão privada",
    texto: `Gestão pública e gestão privada usam muitas ferramentas em comum, mas partem de lógicas diferentes. A prova costuma cobrar justamente os pontos em que elas divergem.

Onde divergem:
• Relação com a lei: o gestor público só pode agir quando a lei autoriza (legalidade estrita); o particular pode fazer tudo o que a lei não proíbe
• Tratamento dos usuários: o Estado trata todos de forma isonômica e só diferencia nos casos previstos em lei, como as prioridades de idosos, gestantes e pessoas com deficiência; a empresa pode segmentar clientes e privilegiar os mais rentáveis
• Finalidade: no setor público, o interesse coletivo, com objetivos sociais além dos econômicos; na empresa, o lucro e a sobrevivência no mercado
• Medida de resultado: o resultado do serviço público é difícil de medir (segurança, bem-estar); a empresa mede receita e rentabilidade
• Concorrência: muitos serviços públicos são prestados sem concorrente; a empresa disputa o mercado
• Recursos e risco: o gestor público administra recursos vindos de tributos e não arrisca capital próprio; o empresário arrisca o seu
• Ambiente: no setor público pesam a influência política, a troca frequente de chefias e a fiscalização de órgãos de controle, como os tribunais de contas e o Ministério Público, e da própria sociedade

Onde convergem:
• As duas têm objetivos, estrutura e recursos limitados e precisam planejar
• As duas buscam eficiência (bom uso dos meios), eficácia (alcance das metas) e efetividade (impacto real na sociedade ou no mercado)
• O modelo gerencial importou ferramentas privadas, como metas, indicadores e foco no usuário, adaptando-as ao regime público

Atenção: no setor público, o usuário é mais que um cliente. Ele também é cidadão, titular do poder e financiador do serviço por meio dos tributos.`,
    exemplos: [
      "Uma loja pode criar um caixa exclusivo para clientes de cartão premium; o atendimento de uma superintendência da PRF não pode privilegiar ninguém por critério comercial e só dá prioridade nos casos previstos em lei, como idosos e pessoas com deficiência.",
      "Uma empresa pode lançar um serviço novo por decisão da diretoria; um órgão público precisa de base legal até para cobrar uma taxa ou criar uma exigência ao cidadão.",
    ],
    curiosidade:
      "A ideia de que o particular pode fazer tudo o que a lei não proíbe tem base no art. 5º, II, da Constituição: ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei.",
  },
  {
    materia: "administracao",
    topico: "Excelência nos serviços públicos",
    texto: `A busca pela excelência no setor público nasceu da virada gerencial: em vez de perguntar apenas se o procedimento seguiu as normas, passa-se a perguntar se o resultado atende ao cidadão.

Trajetória dos programas federais:
• Início dos anos 1990: Programa Brasileiro de Qualidade e Produtividade (PBQP), com foco em processos e ferramentas de qualidade
• 1996: Programa da Qualidade e Participação na Administração Pública (QPAP), voltado à gestão e aos resultados
• Depois: Programa da Qualidade no Serviço Público (PQSP), com foco na satisfação do usuário e em padrões de atendimento
• 2005: GesPública (Decreto 5.378), que uniu qualidade e desburocratização e difundiu carta de serviços, pesquisa de satisfação e autoavaliação; o decreto foi revogado em 2017 (Decreto 9.094), mas o modelo de gestão continua como referência de estudo

Modelo de Excelência em Gestão Pública (MEGP), na versão em oito dimensões:
• Lema: ser excelente sem deixar de ser público; adapta os modelos de excelência empresariais à natureza pública, sem abrir mão da legalidade, da impessoalidade e do interesse coletivo
• Oito dimensões: governança; estratégia e planos; público-alvo; interesse público e cidadania; informação e conhecimento; pessoas; processos; resultados
• As dimensões se organizam em quatro blocos que seguem a lógica do ciclo PDCA: planejamento, execução, resultados e informação e conhecimento
• Entre os fundamentos estão o foco no cidadão e na sociedade, o controle social e a gestão participativa

Autoavaliação:
• A própria organização compara suas práticas com o modelo
• O resultado é um retrato de pontos fortes e de oportunidades de melhoria
• Esse retrato vira um plano de melhoria da gestão, com ações, responsáveis e prazos

Hoje, a Carta de Serviços ao Usuário, que nasceu como ferramenta do GesPública, é obrigação legal (Lei 13.460/2017, art. 7º): todo órgão deve informar os serviços que presta, os requisitos, os prazos e as formas de atendimento.`,
    exemplos: [
      "Uma superintendência faz a autoavaliação da gestão, encontra como ponto forte o controle de prazos do protocolo e como oportunidade de melhoria a falta de pesquisa de satisfação, e transforma isso num plano de melhoria.",
      "No modelo burocrático, o atendimento de um pedido de certidão era avaliado por seguir o rito; no gerencial, também importa se o cidadão recebeu a certidão no prazo e saiu satisfeito.",
    ],
    curiosidade:
      "A Fundação Nacional da Qualidade (FNQ) nasceu em 1991 para conceder o Prêmio Nacional da Qualidade, inspirado no prêmio americano Malcolm Baldrige; o modelo público adaptou essa referência empresarial às exigências do Estado.",
  },
  {
    materia: "administracao",
    topico: "Gestão de pessoas e planejamento estratégico de RH",
    texto: `A gestão de pessoas deixou de ser um departamento de controle de folha e ponto para virar área estratégica. As pessoas passaram a ser vistas como parceiras, e não apenas como recursos.

Evolução (Fischer):
• Departamento de pessoal: foco em folha, ponto e legislação
• Gestão do comportamento humano: motivação, liderança e relações interpessoais
• Gestão estratégica: políticas de pessoal alinhadas à estratégia
• Gestão por competências: foco no que as pessoas entregam

Linha e staff: cuidar das pessoas é responsabilidade de linha (cada chefia, no dia a dia, com sua equipe) e função de staff (o órgão de gestão de pessoas assessora, cria políticas e oferece ferramentas).

Os quatro papéis do RH (Ulrich):
• Parceiro estratégico: alinha as práticas de pessoal à estratégia
• Especialista administrativo: torna eficientes os processos de pessoal
• Defensor dos funcionários: ouve as pessoas e cuida do engajamento
• Agente de mudança: conduz transformações e trabalha a cultura

Os seis processos (Chiavenato):
• Agregar: recrutamento e seleção
• Aplicar: desenho de cargos, orientação e avaliação de desempenho
• Recompensar: remuneração, benefícios e incentivos
• Desenvolver: treinamento, desenvolvimento e aprendizagem
• Manter: higiene, segurança, qualidade de vida e relações sindicais
• Monitorar: bancos de dados, sistemas de informação e auditoria

Planejamento estratégico de RH: estima, a partir dos objetivos da organização, quantas pessoas serão necessárias, com que competências e quando. Modelos: procura estimada do serviço, segmentação de cargos, substituição de postos-chave (planos de sucessão), fluxo de pessoal (entradas, saídas, promoções e aposentadorias) e planejamento integrado.

No setor público, a gestão de pessoas tem limites próprios: ingresso por concurso para cargo definido em lei, remuneração fixada em lei e pouco ligada ao desempenho, progressão muito baseada em tempo de serviço e troca frequente de chefias.`,
    exemplos: [
      "Quando o chefe de uma seção dá retorno diário à equipe e o setor de gestão de pessoas cria o formulário de avaliação, o primeiro exerce a responsabilidade de linha e o segundo, a função de staff.",
      "Uma superintendência que levanta quantos servidores devem se aposentar nos próximos três anos, para pedir reposição a tempo, faz planejamento de pessoal pelo fluxo de entradas e saídas.",
    ],
    curiosidade:
      "Dave Ulrich defendeu que o RH deve ser julgado pelo que entrega, e não pelo que faz: menos foco em atividades, como cursos dados e vagas abertas, e mais em resultados para a organização.",
  },
  {
    materia: "administracao",
    topico: "Gestão de desempenho",
    texto: `Gestão de desempenho é um ciclo, e não um formulário preenchido uma vez por ano. O desempenho depende de três fatores: competência (saber fazer), motivação (querer fazer) e condições de trabalho (poder fazer).

O ciclo:
• Planejamento: metas e critérios combinados no início do período
• Acompanhamento: feedback contínuo e correção de rumo
• Avaliação: análise formal dos resultados
• Uso dos resultados: capacitação, reconhecimento e movimentação

Quem avalia: a chefia (responsabilidade de linha, com o RH como staff), o próprio servidor (autoavaliação), comissões, pares, subordinados (avaliação para cima) e usuários. A avaliação 360 graus combina todas essas visões.

Métodos:
• Escala gráfica: fatores avaliados em graus; simples, mas sujeita ao efeito halo
• Escolha forçada: blocos de frases em que o avaliador escolhe a que mais descreve o avaliado; reduz a subjetividade, mas é difícil de montar e dá pouco retorno ao avaliado
• Incidentes críticos: registro de comportamentos muito bons ou muito ruins; ignora o desempenho normal
• Pesquisa de campo: um especialista entrevista a chefia sobre cada subordinado; une linha e staff, mas é lenta e cara
• Outros: administração por objetivos (metas negociadas), escala ancorada em comportamentos (BARS) e distribuição forçada (cotas por faixa)

Problemas no critério:
• Deficiente: deixa de fora aspectos importantes do trabalho
• Contaminado: inclui fatores fora do controle do avaliado

Erros do avaliador:
• Halo: um traço marcante contamina a avaliação dos demais; a versão negativa é chamada de efeito horn
• Leniência e rigor: notas sempre altas ou sempre baixas
• Tendência central: todos ficam na média
• Recência: só os fatos recentes pesam
• Contraste: o avaliado é comparado com o anterior, e não com o padrão
• Semelhança: favorece quem se parece com o avaliador

Para reduzir os erros: treinar os avaliadores, usar mais de um avaliador e registrar fatos ao longo do período. O feedback eficaz é descritivo, específico, dado perto do fato e sobre comportamentos que a pessoa pode mudar.`,
    exemplos: [
      "Um chefe que só se lembra do atraso de um relatório na semana passada e esquece onze meses de bom trabalho comete o erro de recência.",
      "Se o setor ficou três semanas sem sistema e o servidor é avaliado pelo número de processos concluídos no período, o critério está contaminado por um fator fora do controle dele.",
    ],
    curiosidade:
      "O efeito halo foi descrito pelo psicólogo Edward Thorndike em 1920, ao notar que oficiais do exército davam notas parecidas a um mesmo soldado em qualidades sem relação entre si.",
  },
  {
    materia: "administracao",
    topico: "Comportamento, clima e cultura organizacional",
    texto: `Comportamento organizacional estuda como indivíduos, grupos e a própria estrutura influenciam o que acontece dentro das organizações. Os resultados que mais interessam (Robbins) são produtividade, absenteísmo, rotatividade, cidadania organizacional e satisfação no trabalho.

Atitudes e comprometimento:
• Toda atitude tem um componente cognitivo (crença), um afetivo (sentimento) e um comportamental (intenção de agir)
• Dissonância cognitiva: desconforto quando atitudes e comportamento não combinam; a pessoa tende a mudar um dos dois ou a buscar uma justificativa
• Comprometimento afetivo: a pessoa fica porque quer, por identificação com a organização
• Comprometimento instrumental (calculativo): fica porque precisa, pelo custo de sair
• Comprometimento normativo: fica porque se sente obrigada, por dever ou gratidão

Grupos:
• Formais (criados pela estrutura) e informais (nascem das relações)
• Coesão: quanto o grupo se mantém unido
• Folga social: tendência de se esforçar menos quando o trabalho é em grupo
• Contrato psicológico: expectativas mútuas, não escritas, entre a pessoa e a organização

Cultura organizacional: conjunto de pressupostos, valores e normas compartilhados, aprendidos ao longo do tempo e passados aos novos membros. Edgar Schein distingue três níveis:
• Artefatos: o que se vê, como uniforme, rituais, linguagem e arquitetura
• Valores declarados: missão, códigos e discursos oficiais
• Pressupostos básicos: crenças tidas como certas, quase inconscientes; é o nível mais profundo e o mais difícil de mudar

Clima organizacional: percepção coletiva das pessoas sobre o ambiente de trabalho num dado momento. É medido por pesquisa de clima (questionários, em geral anônimos) e por indicadores como rotatividade, absenteísmo e queixas.

Diferença central: a cultura é profunda e estável, o jeito de ser da organização; o clima é mais passageiro, como um estado de ânimo, e reage rápido a mudanças de chefia, de regras ou de condições. A cultura influencia o clima.`,
    exemplos: [
      "Um servidor que só continua no setor porque a mudança de lotação o faria perder uma gratificação mostra comprometimento instrumental; se o motivo fosse a identificação com o trabalho, seria afetivo.",
      "Uniforme, cerimônias e jargão operacional são artefatos da cultura; a convicção, raramente discutida, de que toda decisão deve subir pela hierarquia está no nível dos pressupostos básicos.",
    ],
    curiosidade:
      "A folga social também é chamada de efeito Ringelmann: em estudo publicado em 1913, o engenheiro agrícola francês Max Ringelmann mostrou que, ao puxar uma corda em grupo, a força média de cada pessoa caía à medida que o grupo crescia.",
  },
  {
    materia: "administracao",
    topico: "Gestão por competências e gestão do conhecimento",
    texto: `Gestão por competências alinha o desenvolvimento das pessoas à estratégia da organização. Gestão do conhecimento cuida de criar, compartilhar e reaproveitar o que a organização sabe. As duas andam juntas.

Competência:
• Individual: combinação de conhecimentos (saber), habilidades (saber fazer) e atitudes (querer fazer), o CHA, que se revela na entrega, isto é, no desempenho observável no trabalho
• Organizacional: capacidades da organização; as essenciais (core competences, de Prahalad e Hamel) geram valor para o usuário, são difíceis de imitar e abrem caminho para novos serviços

Etapas da gestão por competências:
• Formulação da estratégia: missão, visão e objetivos
• Mapeamento: identifica a lacuna entre as competências necessárias e as disponíveis; começa pela pesquisa documental e segue com entrevistas, grupos focais, observação e questionários com pessoas-chave
• Captação (busca externa, por seleção) e desenvolvimento (aprendizagem interna)
• Acompanhamento e avaliação
• Retribuição, que reconhece quem demonstra as competências

Sem ações de captação ou desenvolvimento, a lacuna tende a crescer, porque as exigências mudam e as competências existentes se desatualizam.

Como descrever uma competência: comportamento observável, com verbo de ação, objeto, critério e condição. Evitam-se verbos que não se observam (saber, conhecer, acreditar), ambiguidades, obviedades e duplicidades, como pedir que alguém seja "criativo e original".

Trilhas de aprendizagem: caminhos flexíveis em que o servidor combina cursos, leituras, estágios e grupos de discussão, conciliando as necessidades do órgão com suas aspirações.

Gestão do conhecimento (Nonaka e Takeuchi):
• Conhecimento tácito: pessoal, ligado à experiência, difícil de formalizar
• Conhecimento explícito: registrado em manuais, normas e bases de dados
• Socialização: de tácito para tácito, por observação e prática conjunta
• Externalização: de tácito para explícito, por diálogo, metáforas e modelos; é a chave da criação de conhecimento
• Combinação: de explícito para explícito, reunindo e sistematizando documentos
• Internalização: de explícito para tácito, aprendendo na prática
• A espiral sai do indivíduo e alcança o grupo e a organização; o ba é o contexto compartilhado, físico, virtual ou mental, em que isso acontece

Práticas comuns: comunidades de prática, lições aprendidas, mentoring, páginas amarelas (quem sabe o quê), memória organizacional, wikis e benchmarking.`,
    exemplos: [
      "Quando uma equipe reúne normas, pareceres e modelos de documentos espalhados em várias pastas e os organiza num manual único, ocorre combinação: de explícito para explícito.",
      "A descrição \"Instrui processos administrativos com precisão, observando os prazos legais\" é observável; \"Conhece bem os processos administrativos\" não é, porque conhecer não se vê.",
    ],
    curiosidade:
      "Nonaka e Takeuchi contam que, para criar uma máquina doméstica de fazer pão, uma desenvolvedora de software da Matsushita observou o padeiro-chefe de um hotel de Osaka (socialização) e depois traduziu o jeito de sovar a massa em especificações do produto (externalização).",
  },
  {
    materia: "administracao",
    topico: "Qualidade de vida no trabalho",
    texto: `Qualidade de vida no trabalho (QVT) reúne ações que buscam conciliar o bem-estar de quem trabalha com a eficiência da organização. Na classificação de Chiavenato, faz parte dos processos de manter pessoas, ao lado da higiene e da segurança do trabalho. A ideia de saúde vem da OMS: bem-estar físico, mental e social, e não só ausência de doença.

Higiene do trabalho: condições ambientais (iluminação, ruído, temperatura), ergonomia e ambiente psicológico.

Os oito critérios de Walton:
• Compensação justa e adequada
• Condições de trabalho seguras e saudáveis
• Uso e desenvolvimento de capacidades: autonomia, variedade e retorno sobre o trabalho
• Oportunidade de crescimento e segurança
• Integração social: igualdade de oportunidades e ausência de preconceito
• Constitucionalismo: direitos respeitados, normas claras, privacidade, liberdade de expressão e possibilidade de contestar decisões
• Trabalho e espaço total de vida: equilíbrio entre trabalho, família e lazer
• Relevância social do trabalho: orgulho e imagem da instituição

Outros modelos:
• Hackman e Oldham: variedade de habilidades, identidade da tarefa, significado da tarefa, autonomia e feedback
• Nadler e Lawler: participação nas decisões, reestruturação do trabalho, inovação nas recompensas e melhoria do ambiente

Abordagens (Ferreira):
• Assistencialista, a predominante: atividades compensatórias, como ginástica laboral, massagem e palestras antiestresse; atua nos efeitos do mal-estar e deixa ao trabalhador a tarefa de se adaptar
• Preventiva, contra-hegemônica: ataca as causas do mal-estar nas condições, na organização e nas relações de trabalho; a QVT passa a ser tarefa de todos

Visões dos programas: legalista (cumpre o mínimo exigido), paternalista (benefícios soltos, sem ligação com a estratégia) e estratégica (integrada às metas e ao orçamento).`,
    exemplos: [
      "Rever a distribuição de processos entre os servidores e trocar um sistema que trava todos os dias são medidas da abordagem preventiva, porque atacam a causa do desgaste.",
      "Escalas que respeitam o descanso e evitam convocações frequentes fora do horário atendem ao critério de Walton chamado trabalho e espaço total de vida.",
    ],
    curiosidade:
      "A expressão qualidade de vida no trabalho é atribuída a Louis Davis, que a usou nos anos 1970 em projetos de desenho de cargos; o modelo de oito critérios de Richard Walton é de 1973.",
  },
  {
    materia: "administracao",
    topico: "Estrutura organizacional e departamentalização",
    texto: `Estrutura organizacional é o modo como as atividades são divididas, agrupadas e coordenadas. Robbins aponta seis elementos: especialização do trabalho, departamentalização, cadeia de comando, amplitude de controle, centralização e formalização.

Formal e informal: a estrutura formal está no organograma e nas normas; a informal nasce das relações espontâneas entre as pessoas. A informal não é necessariamente ruim: pode agilizar a comunicação e resolver problemas que a formal não alcança.

Tipos de autoridade:
• Linear: cada subordinado tem um só chefe (unidade de comando), como na tradição militar
• Funcional: várias chefias, cada uma na sua especialidade
• Linha-staff: a linha decide e executa; o staff assessora com conhecimento especializado, sem mandar na linha

Amplitude de controle (número de subordinados diretos de cada chefe):
• Estreita: estrutura alta (aguda), com mais níveis, mais controle e comunicação mais lenta
• Ampla: estrutura achatada, com menos níveis, mais autonomia e menos controle direto
• Depende da qualificação da equipe, da semelhança das tarefas, da clareza das normas, da proximidade física e dos sistemas de informação

Centralização e descentralização tratam de onde as decisões são tomadas. A delegação transfere tarefas e autoridade a uma pessoa, mas não tira a responsabilidade de quem delega. Atenção: em Administração, descentralizar é levar decisões a níveis mais baixos; em Direito Administrativo, descentralização é transferir uma atividade a outra pessoa jurídica.

Formalização: grau de padronização por regras escritas. Estruturas mecanicistas (rígidas, para ambientes estáveis) se opõem às orgânicas (flexíveis, para ambientes instáveis).

Critérios de departamentalização:
• Funcional: por área de especialidade, o critério mais usado; economia de escala, mas visão estreita e disputas entre áreas
• Por produto ou serviço
• Geográfico (territorial): adapta o trabalho às condições locais; pode duplicar estruturas e dificultar a coordenação
• Por clientela: organiza o atendimento por tipo de público
• Por processo: segue as etapas sequenciais de uma atividade
• Por projeto: equipes temporárias para entregas únicas
• Matricial: combina funções e projetos; gera dupla subordinação e rompe a unidade de comando
• Misto: combina critérios diferentes em níveis diferentes da estrutura`,
    exemplos: [
      "Separar o atendimento de um órgão em um balcão para empresas e outro para pessoas físicas é departamentalização por clientela.",
      "Um servidor da logística cedido a um projeto de modernização responde ao chefe do setor e ao gerente do projeto: é a dupla subordinação típica da estrutura matricial.",
    ],
    curiosidade:
      "O princípio da unidade de comando, segundo o qual cada subordinado recebe ordens de um só chefe, vem de Henri Fayol; a estrutura matricial é, por definição, uma exceção a ele.",
  },
  {
    materia: "administracao",
    topico: "Liderança, motivação e satisfação no trabalho",
    texto: `Liderança é a capacidade de influenciar pessoas para alcançar objetivos. A chefia vem do cargo; a liderança pode surgir de qualquer pessoa do grupo.

Bases de poder (French e Raven): legítimo (cargo), de recompensa, coercitivo, de perito (conhecimento) e de referência (admiração e identificação).

Teorias de liderança:
• Traços: buscavam características inatas do líder e não se confirmaram
• Comportamentais: Iowa (autocrático, democrático e liberal), Ohio (estrutura de iniciação e consideração), Michigan (foco na produção ou no empregado) e o grid de Blake e Mouton, em que o estilo 9,9 (equipe) é o ideal
• Fiedler: o estilo do líder é estável; o orientado para a tarefa rende mais em situações muito favoráveis ou muito desfavoráveis, e o orientado para o relacionamento, nas intermediárias
• Hersey e Blanchard (situacional): o estilo depende da maturidade do liderado; M1 (sem capacidade e sem disposição ou inseguro) pede determinar; M2 (sem capacidade, mas disposto ou confiante), persuadir; M3 (capaz, mas sem disposição ou inseguro), compartilhar; M4 (capaz e disposto), delegar
• House (caminho-meta): o líder remove obstáculos e escolhe entre os estilos diretivo, apoiador, participativo e orientado para realizações
• Transacional (troca e recompensa contingente) e transformacional (inspira, estimula intelectualmente e dá atenção individual, levando a desempenho além do esperado)

Motivação: processo que explica a direção, a intensidade e a persistência do esforço. Pode ser intrínseca (vem da própria tarefa) ou extrínseca (recompensas externas).

Teorias de conteúdo (o que motiva):
• Maslow: necessidades fisiológicas, de segurança, sociais, de estima e de autorrealização
• Alderfer (ERG): existência, relacionamento e crescimento, sem hierarquia rígida; a frustração numa necessidade superior pode reforçar a busca por uma inferior
• Herzberg: fatores higiênicos (salário, condições, chefia, normas) evitam a insatisfação, mas não motivam; fatores motivacionais (realização, reconhecimento, responsabilidade, crescimento) geram satisfação
• McClelland: necessidades de realização, afiliação e poder, adquiridas ao longo da vida

Teorias de processo (como motiva):
• Vroom: motivação = expectância × instrumentalidade × valência; se um fator for zero, a motivação some
• Adams (equidade): a pessoa compara a razão entre contribuição e recompensa com a de outros; diante da desigualdade, ajusta o esforço, muda a referência ou até sai
• Locke: metas específicas, difíceis e aceitas, com feedback, elevam o desempenho
• Skinner (reforço): reforço positivo, reforço negativo (retirar algo desagradável), punição e extinção

Satisfação no trabalho é a atitude geral da pessoa em relação ao trabalho; depende de tarefas desafiadoras, recompensas justas, boas condições e bons colegas.`,
    exemplos: [
      "Um servidor recém-chegado, que ainda não conhece o sistema e está inseguro, está em M1: o estilo indicado é determinar, com instruções claras e acompanhamento próximo.",
      "Pela teoria de Vroom, se o servidor acredita que bater a meta não muda nada na sua avaliação, a instrumentalidade é zero e a motivação desaparece, por mais que ele valorize o reconhecimento.",
    ],
    curiosidade:
      "Herzberg chegou aos dois fatores entrevistando cerca de 200 engenheiros e contadores sobre momentos em que se sentiram muito bem ou muito mal no trabalho: as causas da satisfação quase nunca eram as mesmas da insatisfação.",
  },
  {
    materia: "administracao",
    topico: "Recrutamento e seleção",
    texto: `Recrutamento atrai candidatos; seleção escolhe entre eles. O recrutamento é comunicação de mão dupla: a organização divulga a vaga e o candidato decide se quer concorrer. A seleção é um filtro de comparação e decisão, responsabilidade de linha e função de staff.

Recrutamento interno: preenche a vaga com quem já está na organização, por promoção (movimento vertical), transferência (horizontal) ou transferência com promoção.
• Vantagens: é mais rápido e barato, motiva o quadro, o candidato já é conhecido e dispensa a integração
• Desvantagens: pode gerar conflitos, limita a entrada de ideias novas e tende a conservar a cultura

Recrutamento externo: busca candidatos fora da organização.
• Vantagens: traz experiência e ideias novas e renova a cultura
• Desvantagens: é mais caro, demorado e incerto e pode frustrar quem esperava a oportunidade

O recrutamento misto combina os dois. No setor público, o ingresso em cargo efetivo exige concurso (art. 37, II, da Constituição), uma forma de recrutamento externo e aberto.

Visão realista do trabalho: mostrar ao candidato também as partes difíceis da função reduz expectativas irreais e a rotatividade depois da contratação.

Modelos de seleção (Chiavenato):
• Colocação: um candidato para uma vaga
• Seleção: vários candidatos para uma vaga
• Classificação: vários candidatos para várias vagas; é o mais amplo
• Agregação de valor: foco nas competências que a pessoa traz

Técnicas:
• Entrevistas: estruturada, semiestruturada ou livre; situacional (cenários hipotéticos: o que você faria se...) e comportamental (fatos reais do passado: conte uma situação em que...)
• Provas de conhecimento e de capacidade
• Testes psicológicos e de personalidade
• Técnicas de simulação: dinâmica de grupo e dramatização

Qualidades de um teste:
• Validade: mede o que se propõe a medir e prevê o desempenho
• Precisão (fidedignidade): dá resultados consistentes em aplicações repetidas

Quociente de seleção: QS = admitidos ÷ examinados × 100. Quanto menor o QS, mais seletivo o processo.`,
    exemplos: [
      "\"Conte uma situação real em que você lidou com um usuário exaltado no balcão\" é pergunta de entrevista comportamental; \"O que você faria se um usuário exaltado gritasse no balcão?\" é situacional.",
      "Se 40 candidatos são examinados e 4 são admitidos, o quociente de seleção é 10%; com 2 admitidos, cai para 5%, sinal de um processo mais seletivo.",
    ],
    curiosidade:
      "A visão realista do trabalho foi estudada por John Wanous nos anos 1970: candidatos que conhecem de antemão as partes difíceis da função tendem a abandonar menos o cargo depois de contratados.",
  },
  {
    materia: "administracao",
    topico: "Análise e descrição de cargos",
    texto: `Cargo é o conjunto de tarefas e responsabilidades com posição definida na estrutura: nível, área, a quem se reporta e quem supervisiona. O desenho do cargo define o conteúdo (o que fazer), os métodos (como fazer) e as relações (com quem).

Descrição e análise:
• Descrição: aspectos intrínsecos, o conteúdo do cargo; diz o que o ocupante faz, como, quando e por quê
• Análise (especificação): aspectos extrínsecos, os requisitos que o ocupante precisa ter
• Requisitos mentais: escolaridade, experiência e aptidões
• Requisitos físicos: esforço, concentração e postura
• Responsabilidades envolvidas: por equipamentos, valores, informações sigilosas ou supervisão de pessoas
• Condições de trabalho: ambiente e riscos

Os fatores de especificação precisam de generalidade (aparecer na maioria dos cargos) e de variedade (variar de um cargo para outro, para permitir a comparação).

Métodos de coleta:
• Entrevista: o mais usado e o mais completo, com o ocupante, com grupos ou com o supervisor
• Questionário: rápido e barato para muitos ocupantes, mas exige que saibam ler e responder por escrito
• Observação direta: indicada para cargos simples, rotineiros e repetitivos
• Diário: o ocupante registra o que faz ao longo de um período
• Métodos mistos: combinam os anteriores

Usos: a descrição e a análise servem de base para recrutamento e seleção, treinamento, avaliação de desempenho, planos de cargos e salários e segurança no trabalho.

Desenho e enriquecimento:
• Enriquecimento horizontal (também chamado de ampliação): acrescenta tarefas do mesmo nível
• Enriquecimento vertical: acrescenta responsabilidades de nível mais alto, como planejar, decidir e avaliar o próprio trabalho
• Tendência atual: o foco migra do cargo, definido pela organização, para as competências, que pertencem às pessoas`,
    exemplos: [
      "\"Organiza as viagens da equipe e presta contas das diárias\" é descrição, o que o cargo faz; \"ensino médio completo e conhecimento do sistema de viagens\" é especificação, o que o ocupante precisa ter.",
      "Para levantar as tarefas de 300 servidores espalhados por vários estados num prazo curto, o questionário é o método de coleta mais prático.",
    ],
    curiosidade:
      "No serviço público federal, cargo é o conjunto de atribuições e responsabilidades previstas na estrutura do órgão, e os cargos são criados por lei (Lei 8.112, art. 3º); a mesma lei proíbe cometer a outro servidor atribuições estranhas ao cargo, salvo em emergências e situações transitórias (art. 117, XVII).",
  },
  {
    materia: "administracao",
    topico: "Treinamento, desenvolvimento e educação",
    texto: `Treinamento, desenvolvimento e educação (TD&E) são formas de aprendizagem no trabalho, isto é, de mudança de comportamento pela incorporação de conhecimentos, habilidades e atitudes. Do conceito mais simples ao mais amplo:
• Informação: conteúdos disponíveis em portais, boletins e bibliotecas
• Instrução: eventos curtos, com objetivos simples, apoiados em cartilhas e manuais
• Treinamento: eventos planejados, de curta ou média duração, para melhorar o desempenho no cargo atual
• Desenvolvimento: oportunidades de crescimento pessoal e profissional, voltadas ao futuro e não presas a um cargo
• Educação: programas de médio e longo prazo de formação contínua, como graduação e pós-graduação

O treinamento olha para o presente e para o cargo atual; o desenvolvimento olha para o futuro, para novos cargos e para a carreira.

Etapas do treinamento:
• Diagnóstico (levantamento de necessidades): mede a lacuna entre o desempenho esperado e o atual. Indicadores a priori anunciam necessidades futuras (novo sistema, novos serviços, admissões); indicadores a posteriori revelam problemas já instalados (erros, retrabalho, acidentes, reclamações)
• Programação: quem, o quê, como, onde, quando e por quem
• Execução: aula expositiva, estudo de caso, dramatização, instrução programada, treinamento no próprio trabalho, rodízio e ensino a distância
• Avaliação

Níveis de avaliação (Kirkpatrick):
• Reação: satisfação com o curso
• Aprendizagem: o que foi absorvido, em geral medido por provas
• Comportamento: aplicação do que se aprendeu no trabalho
• Resultados: impacto nos indicadores da organização
• Jack Phillips acrescentou um quinto nível, o retorno do investimento

Desenvolvimento de pessoas:
• No cargo: rodízio, posições de assessoria, comissões, simulações e coaching, em que a chefia ou um especialista orienta o desempenho atual
• Fora do cargo: mentoring, em que alguém mais experiente orienta a carreira, e aconselhamento, usado quando há problema de desempenho ou de disciplina
• Carreira em Y: o profissional segue pela trilha técnica ou pela gerencial, com remuneração equivalente

No serviço público federal, a Política Nacional de Desenvolvimento de Pessoas (Decreto 9.991/2019) orienta o desenvolvimento por competências, com um Plano de Desenvolvimento de Pessoas em cada órgão.`,
    exemplos: [
      "Um curso sobre o novo sistema eletrônico de processos, programado antes da implantação, nasce de um indicador a priori; um curso montado depois de uma onda de erros de cadastro nasce de um indicador a posteriori.",
      "Um questionário de satisfação respondido no último dia do curso mede só o nível de reação; não mostra se os servidores vão aplicar o conteúdo no trabalho.",
    ],
    curiosidade:
      "Donald Kirkpatrick apresentou os quatro níveis em 1959, numa série de artigos para uma revista de profissionais de treinamento; o modelo ainda é a base da maioria das avaliações de cursos corporativos.",
  },
  {
    materia: "administracao",
    topico: "Educação corporativa e a distância",
    texto: `Educação corporativa é um sistema de formação de pessoas ligado à estratégia de longo prazo da organização. Vai além do treinamento pontual: desenvolve as competências críticas, individuais e organizacionais, numa cultura de aprendizagem contínua.

Do centro de treinamento à universidade corporativa:
• Antes: treinamentos reativos e pontuais, voltados a habilidades do cargo atual e presos à sala de aula; programas educacionais mais amplos ficavam restritos aos gerentes
• Depois: ações proativas, ligadas às competências críticas da estratégia, abertas a todos os níveis e até à cadeia de valor (fornecedores, parceiros, clientes e comunidade), em formatos presenciais e virtuais

Forças que impulsionaram o modelo (Meister): organizações flexíveis, era do conhecimento, rápida obsolescência do conhecimento, foco na empregabilidade e educação para uma estratégia global.

Princípios (Eboli):
• Competitividade: desenvolver as competências que diferenciam a organização
• Perpetuidade: transmitir a herança cultural para perpetuar a organização
• Conectividade: construir conhecimento em rede, com públicos internos e externos
• Disponibilidade: oferecer recursos para aprender a qualquer hora e em qualquer lugar
• Cidadania: formar pessoas críticas, éticas e socialmente responsáveis
• Parceria: alianças internas e externas em torno da educação
• Sustentabilidade: buscar fontes de recursos que tornem o sistema autossustentável

No setor público, esse papel é exercido pelas escolas de governo, como a Escola Nacional de Administração Pública (ENAP), e pelas academias e universidades corporativas dos órgãos.

Educação a distância (EaD): processo de ensino e aprendizagem mediado por tecnologias, em que estudante e professor estão em lugares ou tempos diferentes. O marco regulatório de 2025 (Decreto 12.456/2025) distingue:
• Atividade síncrona: lugares diferentes e mesmo tempo, como numa aula ao vivo por videoconferência
• Atividade assíncrona: lugares e tempos diferentes, como em videoaulas gravadas e fóruns

Elementos da EaD: separação física entre professor e aluno, estudo individualizado e autônomo, materiais e planejamento próprios, apoio de tutoria e comunicação de mão dupla, em que o aluno não é mero receptor. O ensino semipresencial (híbrido) combina momentos presenciais e a distância.

Vantagens: alcance nacional sem deslocamento, flexibilidade e escala. Desafios: exige disciplina e autonomia, tem risco de evasão e pede planejamento didático mais rigoroso.`,
    exemplos: [
      "Um órgão que abre seus cursos também a servidores de instituições parceiras e à comunidade segue a lógica da universidade corporativa de alcançar a cadeia de valor, e não só o público interno.",
      "Um tutor que responde às dúvidas no fórum e comenta as atividades de cada aluno garante a comunicação de mão dupla, que diferencia a EaD do simples envio de apostilas.",
    ],
    curiosidade:
      "A Escola Virtual de Governo (EV.G), mantida pela ENAP, oferece cursos a distância gratuitos e abertos a qualquer cidadão, não só a servidores públicos.",
  },
];
