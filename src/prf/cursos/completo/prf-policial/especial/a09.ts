import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "especial-09",
  resumo: {
    ideia:
      "A segunda parte da Lei 13.675/2018 trata do Plano Nacional, da avaliação das políticas, do controle da atividade policial, do Sinesp e da formação e valorização dos profissionais de segurança.",
    itens: [
      {
        termo: "Plano Nacional",
        faz: "Instituído pela União, dura 10 anos. Prioriza a prevenção à criminalidade e as ações preventivas e fiscalizatórias nas divisas, fronteiras, portos e aeroportos (art. 22).",
        pista: "A política de segurança não se restringe ao Susp: envolve educação, saúde, lazer e cultura (art. 22, § 1º).",
      },
      {
        termo: "Planos locais",
        faz: "Estados, DF e Municípios fazem os seus em até 2 anos da publicação do plano nacional, sob pena de não receberem recursos da União para segurança pública (art. 22, § 5º).",
      },
      {
        termo: "Avaliação",
        faz: "A União faz avaliações anuais do plano, com os outros entes (art. 23). O relatório vai aos Conselhos (art. 27, § 2º). Participam Legislativo, Executivo, Judiciário, Ministério Público, Defensoria e Conselhos (art. 29), e o Legislativo de cada ente acompanha (art. 30).",
      },
      {
        termo: "Sinaped",
        faz: "Sistema de acompanhamento e avaliação das políticas. Usa autoavaliação, avaliação externa e análise global, com caráter público de todos os dados e resultados (arts. 26 e 31).",
      },
      {
        termo: "Comissões de avaliação",
        faz: "Uma comissão permanente coordena; comissões temporárias, com no mínimo 3 membros, avaliam. Não pode ser avaliador o servidor do órgão avaliado que seja parente até o 3º grau de quem trabalha lá ou que responda a processo criminal ou administrativo (art. 32).",
      },
      {
        termo: "Correição e ouvidoria",
        faz: "Correição, com autonomia, apura a responsabilidade funcional por sindicância e processo disciplinar (art. 33). Ouvidoria, com autonomia e independência, recebe reclamações, elogios e sugestões de qualquer pessoa, encaminha ao órgão com atribuição e responde a quem reclamou (art. 34).",
      },
      {
        termo: "Sinesp",
        faz: "Banco nacional de dados de segurança, sistema prisional, armas e munições, perfil genético e digitais, drogas e, desde a Lei 14.899/2024, violência doméstica contra a mulher (art. 35). Também produz dados sobre saúde, vitimização (até fora do serviço) e saúde mental dos profissionais (art. 36, Lei 14.531/2023).",
      },
      {
        termo: "Quem não informa",
        faz: "O ente que não fornece ou não atualiza os dados pode ficar sem recursos e parcerias com a União, inclusive do Funpen e do Pronasci. O agente omisso responde administrativamente (arts. 37, 46 e 48).",
      },
      {
        termo: "Sievap",
        faz: "Sistema de educação e valorização profissional. Programas: matriz curricular nacional, Renaesp (rede de instituições de ensino superior, com graduação, extensão e pós), Rede EaD-Senasp (escola virtual) e programa de qualidade de vida (arts. 38 a 41).",
        pista: "A matriz curricular segue os direitos humanos e a andragogia, que é a educação de adultos (art. 39, § 1º).",
      },
      {
        termo: "Pró-Vida",
        faz: "Programa de qualidade de vida: atenção psicossocial, saúde no trabalho e prevenção da violência contra os profissionais. Publica todo ano os dados de saúde e vitimização (art. 42).",
      },
      {
        termo: "Outras regras",
        faz: "A identidade funcional é padronizada, tem fé pública e vale em todo o país (art. 43). Há conferências a cada 5 anos para debater as diretrizes dos planos (art. 45).",
      },
    ],
    cuidado:
      "O texto da lei ainda fala em “Ministério Extraordinário da Segurança Pública”: hoje a área fica no Ministério da Justiça e Segurança Pública. A violência contra a mulher no Sinesp (Lei 14.899/2024) e os dados de saúde e vitimização dos profissionais (Lei 14.531/2023) são acréscimos recentes.",
  },
  questoes: [
    {
      topico: "Plano Nacional",
      subassunto: "Planos locais",
      dificuldade: 4,
      raciocinio: "Art. 22, § 5º: sem plano em 2 anos, o ente não recebe recursos da União.",
      enunciado:
        "O Plano Nacional de Segurança Pública e Defesa Social foi publicado, e um estado deixou passar o prazo legal sem elaborar o seu plano correspondente. Pela Lei 13.675/2018, a consequência prevista é:",
      alternativas: [
        "a exclusão do estado do Susp até a publicação do plano estadual",
        "ficar sem recursos da União para programas e ações de segurança pública",
        "a intervenção federal, por descumprimento de lei federal pelo estado",
        "a perda do mandato do secretário de segurança, após processo no Conselho",
        "nenhuma, pois o plano estadual é facultativo e depende de lei local",
      ],
      correta: 1,
      explicacao:
        "Estados, DF e Municípios devem, com base no plano nacional, elaborar e implantar seus planos em até 2 anos da publicação do documento nacional, sob pena de não poderem receber recursos da União para a execução de programas ou ações de segurança pública e defesa social (art. 22, § 5º).",
      explicacaoErradas:
        "A lei não prevê “exclusão do estado do Susp”. A sanção não é a “intervenção federal”. O Conselho não tem poder para tirar o cargo de ninguém, por isso “perda do mandato” erra. O plano não é “facultativo”: a lei diz que os entes deverão elaborá-lo.",
      pegadinha: "2 anos para o plano local; a sanção é financeira.",
      conhecimento: "O poder público deve dar ampla divulgação às políticas e aos planos de segurança (art. 22, § 6º).",
    },
    {
      topico: "Plano Nacional",
      subassunto: "Prazos",
      dificuldade: 4,
      raciocinio: "Plano de 10 anos, avaliação anual, conferências a cada 5 anos.",
      enunciado:
        "Sobre os prazos da Lei 13.675/2018 para a duração do Plano Nacional de Segurança Pública e Defesa Social, para a sua avaliação e para as conferências que debatem as diretrizes dos planos, é correto afirmar:",
      alternativas: [
        "o plano dura 4 anos, as avaliações são semestrais e as conferências, anuais",
        "o plano dura 10 anos, as avaliações são a cada 5 anos e as conferências, anuais",
        "o plano dura 5 anos, as avaliações são anuais e as conferências ocorrem a cada 10 anos",
        "o plano dura 10 anos, as avaliações são anuais e as conferências, a cada 5 anos",
        "o plano dura 2 anos, as avaliações são bienais e as conferências, a cada 4 anos",
      ],
      correta: 3,
      explicacao:
        "O plano tem duração de 10 anos a contar da publicação (art. 22, § 2º). A União faz avaliações anuais da sua implementação (art. 23). As conferências para debater as diretrizes dos planos nacional, estaduais e municipais são realizadas a cada 5 anos (art. 45).",
      explicacaoErradas:
        "O plano não dura “4 anos”, “5 anos” nem “2 anos”. As avaliações não são “semestrais” nem “bienais”, e a afirmação de que “as avaliações são a cada 5 anos” troca a avaliação pela conferência. As conferências não são anuais nem ocorrem “a cada 10 anos”.",
      pegadinha: "10 de plano, 1 de avaliação, 5 de conferência, 2 para os planos locais.",
      conhecimento: "A primeira avaliação foi prevista para o segundo ano de vigência da lei, acompanhada pelo Legislativo Federal (art. 23, parágrafo único).",
    },
    {
      topico: "Plano Nacional",
      subassunto: "Políticas além do Susp",
      dificuldade: 5,
      raciocinio: "Art. 22, § 1º, e art. 24, II e XII: a política de segurança envolve outras áreas e o planejamento urbano.",
      enunciado:
        "Na elaboração do plano municipal de segurança pública, um gestor propõe retirar as ações de iluminação pública, esporte e cultura, alegando que não são atribuição dos órgãos do Susp. Pela Lei 13.675/2018, a proposta:",
      alternativas: [
        "contraria a lei, que manda integrar áreas como educação, lazer e cultura",
        "está correta, pois as políticas de segurança se restringem aos integrantes do Susp",
        "está correta, pois iluminação pública é tema do plano diretor, alheio à segurança",
        "contraria a lei só quanto ao esporte, pois a iluminação é tarefa da guarda municipal",
        "está correta, pois os municípios só podem atuar na segurança por meio da guarda municipal",
      ],
      correta: 0,
      explicacao:
        "As políticas de segurança não se restringem aos integrantes do Susp: consideram um contexto social amplo, com outras áreas como educação, saúde, lazer e cultura (art. 22, § 1º). Os planos integram ações de saúde, educação, cultura, desporto e lazer (art. 24, II) e estudos de planejamento urbano, para que a prevenção, como o reforço na iluminação pública, faça parte do plano diretor (art. 24, XII).",
      explicacaoErradas:
        "A lei diz o contrário de que as políticas “se restringem aos integrantes do Susp”. A iluminação não é tema “alheio à segurança”: é exemplo expresso de prevenção. O esporte também está na lei, e a iluminação não é “tarefa da guarda municipal”. O município tem plano próprio, por isso “só podem atuar” pela guarda erra.",
      pegadinha: "Prevenção vai além da polícia: escola, lazer, luz na rua.",
      conhecimento: "Os planos também devem ampliar a inserção econômica e social dos egressos do sistema prisional (art. 24, VI).",
    },
    {
      topico: "Controle",
      subassunto: "Ouvidoria",
      dificuldade: 4,
      raciocinio: "Art. 34: a ouvidoria recebe, encaminha e responde; quem apura é a correição.",
      enunciado:
        "Um motorista abordado pela PRF apresenta, na ouvidoria, reclamação contra a conduta de um policial. Pela Lei 13.675/2018, cabe à ouvidoria:",
      alternativas: [
        "instaurar o processo administrativo disciplinar e aplicar a punição cabível",
        "arquivar a reclamação, pois só servidores podem apresentar representação",
        "encaminhar a reclamação ao Ministério Público, único órgão com atribuição",
        "decidir a reclamação, com recurso para o Conselho de Segurança Pública",
        "encaminhá-la ao órgão com atribuição e dar resposta ao requerente",
      ],
      correta: 4,
      explicacao:
        "A ouvidoria, dotada de autonomia e independência, recebe e trata representações, elogios e sugestões de qualquer pessoa sobre a atuação dos integrantes do Susp e as encaminha ao órgão com atribuição para as providências legais e a resposta ao requerente (art. 34). A apuração da responsabilidade funcional, por sindicância e processo disciplinar, cabe aos órgãos de correição (art. 33).",
      explicacaoErradas:
        "“Instaurar o processo administrativo disciplinar” é tarefa da correição. A lei admite reclamação de qualquer pessoa, e não “só servidores”. O Ministério Público não é o “único órgão com atribuição”. A ouvidoria não julga, por isso “decidir a reclamação” erra.",
      pegadinha: "Ouvidoria ouve e encaminha; correição apura.",
      conhecimento: "A União, os Estados, o DF e os Municípios devem instituir ouvidorias (art. 34, caput).",
    },
    {
      topico: "Sinesp",
      subassunto: "Falta de dados",
      dificuldade: 5,
      raciocinio: "Art. 37, §§ 2º e 4º, e arts. 46 e 48: sanção financeira ao ente e responsabilidade administrativa do agente.",
      enunciado:
        "Um estado deixou de atualizar seus dados no Sinesp por meses, por decisão do servidor responsável, sem justificativa. Pela Lei 13.675/2018 e pelas leis que ela alterou:",
      alternativas: [
        "o estado é excluído do Sinesp e do Susp, e o agente omisso responde só pelo crime de prevaricação",
        "não há consequência, pois o envio de dados ao Sinesp é voluntário para os entes federados",
        "o estado pode ficar sem recursos federais, e o agente omisso tem responsabilidade administrativa",
        "só o estado sofre sanção, pois a lei afasta a responsabilidade pessoal do agente público",
        "o estado sofre intervenção federal, e o agente omisso perde o cargo sem processo",
      ],
      correta: 2,
      explicacao:
        "O integrante que deixar de fornecer ou atualizar seus dados poderá não receber recursos nem celebrar parcerias com a União (art. 37, § 2º). A lei também alterou outras normas para impedir repasses do Funpen e do Pronasci a quem não alimenta o sistema (arts. 46 e 48). A omissão no fornecimento das informações implica responsabilidade administrativa do agente público (art. 37, § 4º).",
      explicacaoErradas:
        "A lei não prevê exclusão “do Sinesp e do Susp” e fala em responsabilidade administrativa, e não “só pelo crime de prevaricação”. O envio não é “voluntário”: os dados são fornecidos e atualizados pelos integrantes. A lei não “afasta a responsabilidade pessoal”. Não há “intervenção federal” nem perda do cargo “sem processo”.",
      pegadinha: "Ente: corte de recursos. Agente: responsabilidade administrativa.",
      conhecimento: "Integram o Sinesp todos os entes federados, por órgãos criados ou designados para esse fim (art. 37, caput).",
    },
    {
      topico: "Sinesp",
      subassunto: "Violência contra a mulher",
      dificuldade: 5,
      raciocinio: "Lei 14.899/2024: inciso VI do art. 35 e interoperabilidade com o Registro Unificado.",
      enunciado:
        "Desde 2024, a Lei 13.675/2018 prevê expressamente que o Sinesp também serve às políticas de enfrentamento da violência doméstica e familiar contra a mulher. Sobre essa inclusão, é correto afirmar que ela:",
      alternativas: [
        "prevê interoperabilidade com o registro unificado sobre violência contra as mulheres",
        "torna públicos todos os dados das vítimas, sem nenhuma restrição, para dar transparência",
        "transfere ao Sinesp a gestão das medidas protetivas de urgência, antes feita pelo Judiciário",
        "cria um sistema separado do Sinesp, gerido só pelas delegacias da mulher",
        "vale só para os crimes registrados pela polícia civil, e não pelas outras polícias",
      ],
      correta: 0,
      explicacao:
        "A Lei 14.899/2024 incluiu o inciso VI no art. 35 (enfrentamento da violência doméstica e familiar contra a mulher) e garantiu, no que couber, a interoperabilidade do Sinesp com o Registro Unificado de Dados e Informações sobre Violência contra as Mulheres (Lei 14.232/2021), observadas as restrições de publicidade da legislação (art. 35, parágrafo único).",
      explicacaoErradas:
        "Os dados não ficam públicos “sem nenhuma restrição”: a lei manda respeitar as restrições de publicidade. A lei não trata da gestão das “medidas protetivas de urgência”. Não há “sistema separado”: é o próprio Sinesp. A lei não limita a inclusão aos registros da “polícia civil”.",
      pegadinha: "Integra dados, mas respeita o sigilo das vítimas.",
      conhecimento: "O Sinesp segue padrões de integridade, disponibilidade, confidencialidade, confiabilidade e tempestividade (art. 36, parágrafo único).",
    },
    {
      topico: "Sinesp",
      subassunto: "Dados dos profissionais",
      dificuldade: 5,
      raciocinio: "Art. 36, VI: vitimização inclusive fora do horário de trabalho; art. 42, § 2º: publicação anual.",
      enunciado:
        "Um policial rodoviário federal de folga é baleado num assalto e fica com sequelas graves. Sobre os dados do Sinesp e do Pró-Vida relativos aos profissionais de segurança, pela Lei 13.675/2018, o caso:",
      alternativas: [
        "não entra nos dados, pois a lei só conta a vitimização em serviço",
        "entra só nas estatísticas criminais gerais, sem dado próprio de profissionais",
        "fica em dados sigilosos, que nunca são publicados",
        "entra nos dados de vitimização, que incluem a de folga e são publicados a cada ano",
        "só entra nos dados se o crime tiver relação comprovada com a função policial exercida",
      ],
      correta: 3,
      explicacao:
        "Desde a Lei 14.531/2023, o Sinesp produz dados sobre a vitimização dos profissionais de segurança, inclusive fora do horário de trabalho (art. 36, VI), além de dados sobre qualidade de vida, deficiência por vitimização na atividade, dependência química e saúde mental (incisos V, VII, VIII e IX). O Pró-Vida publica essas informações todo ano (art. 42, § 2º).",
      explicacaoErradas:
        "A lei conta a vitimização “inclusive fora do horário de trabalho”, e não “só” em serviço. Há dado próprio de profissionais, ao contrário de “sem dado próprio”. Os dados são publicados todo ano, e não ficam “sigilosos”. A lei não exige “relação comprovada com a função” para contar a vitimização de folga.",
      pegadinha: "Vitimização de folga também conta.",
      conhecimento: "O Pró-Vida também deve prevenir e enfrentar a violência sofrida pelos profissionais de segurança (art. 42, § 3º).",
    },
    {
      topico: "Valorização",
      subassunto: "Identidade funcional",
      dificuldade: 4,
      raciocinio: "Art. 43: fé pública e validade em todo o território nacional.",
      enunciado:
        "Em viagem a serviço por outro estado, um policial rodoviário federal apresenta sua identidade funcional num órgão estadual, e o servidor exige outro documento, alegando que ela só vale no estado de lotação. Pela Lei 13.675/2018:",
      alternativas: [
        "o servidor está certo, pois a identidade funcional só vale no estado de lotação do policial",
        "a identidade funcional tem fé pública e vale em todo o território nacional",
        "a identidade funcional vale fora do estado só se carimbada pela Polícia Federal",
        "o servidor está certo, pois identidade funcional não é documento de identificação civil",
        "a identidade vale em todo o país, mas só tem fé pública se o policial estiver fardado",
      ],
      correta: 1,
      explicacao:
        "Os documentos de identificação funcional dos profissionais de segurança pública são padronizados por ato do Ministro e têm fé pública e validade em todo o território nacional (art. 43). A carteira de identificação funcional também atesta a identificação civil (Lei 12.037/2009, art. 2º, IV).",
      explicacaoErradas:
        "A identidade não vale “só no estado de lotação”. Não há exigência de ser “carimbada pela Polícia Federal”. A Lei 12.037/2009 aceita a carteira funcional como identificação civil, por isso “não é documento de identificação civil” erra. A fé pública não depende de estar “fardado”.",
      pegadinha: "Identidade funcional: fé pública no país todo.",
      conhecimento: "A identificação civil também pode ser feita por carteira de trabalho, passaporte e documentos militares (Lei 12.037/2009, art. 2º).",
    },
    {
      topico: "Valorização",
      subassunto: "Matriz curricular",
      dificuldade: 5,
      raciocinio: "Art. 39: referencial para todos os cursos, presenciais e a distância, respeitadas as peculiaridades.",
      enunciado:
        "Uma academia de polícia vai montar o curso de formação de novos policiais. Sobre a matriz curricular nacional, prevista na Lei 13.675/2018, é correto afirmar que ela:",
      alternativas: [
        "substitui o currículo próprio de cada instituição, que fica proibido",
        "vale só para os cursos de ingresso, e não para os de atualização e especialização",
        "aplica-se só aos cursos presenciais, pois os cursos a distância têm regras próprias",
        "é pautada na pedagogia militar e na hierarquia, sem referência aos direitos humanos",
        "deve ser observada, respeitadas as peculiaridades de cada instituição",
      ],
      correta: 4,
      explicacao:
        "A matriz curricular nacional é referencial teórico, metodológico e avaliativo e deve ser observada nos cursos de ingresso, aperfeiçoamento, atualização, capacitação e especialização, presenciais e a distância, respeitados o regime jurídico e as peculiaridades de cada instituição (art. 39). É pautada nos direitos humanos, na andragogia e nas teorias de construção do conhecimento (§ 1º).",
      explicacaoErradas:
        "A matriz não “substitui o currículo próprio”: é referencial que respeita as peculiaridades. Não vale “só para os cursos de ingresso” nem “só aos cursos presenciais”. Ela é pautada nos direitos humanos, e não na “pedagogia militar”.",
      pegadinha: "Andragogia é a educação de adultos.",
      conhecimento: "Os programas de educação devem estar em consonância com os princípios da matriz (art. 39, § 2º).",
    },
    {
      topico: "Valorização",
      subassunto: "Sievap",
      dificuldade: 4,
      raciocinio: "Rede EaD-Senasp: escola virtual. Renaesp: instituições de ensino superior, com pós-graduação.",
      enunciado:
        "Um policial lotado num posto distante quer fazer cursos a distância, e outro quer uma pós-graduação em segurança pública oferecida por universidades da rede nacional. Pela Lei 13.675/2018, atendem a esses objetivos, respectivamente:",
      alternativas: [
        "a Renaesp e a Rede EaD-Senasp",
        "o Pró-Vida e a matriz curricular nacional",
        "a Rede EaD-Senasp e a Renaesp",
        "o Sinaped e o Sievap",
        "a Rede EaD-Senasp e o Sinaped",
      ],
      correta: 2,
      explicacao:
        "A Rede EaD-Senasp é a escola virtual que leva a aprendizagem aos profissionais independentemente das limitações geográficas e sociais (art. 41). A Renaesp, integrada por instituições de ensino superior, promove cursos de graduação, extensão e pós-graduação em segurança pública (art. 40). As duas são programas do Sievap (art. 38, § 1º).",
      explicacaoErradas:
        "“A Renaesp e a Rede EaD-Senasp” inverte a ordem. O Pró-Vida cuida da qualidade de vida, e a matriz curricular é referencial dos cursos. O Sinaped avalia as políticas, e o Sievap é o sistema que reúne os programas de educação, sem ser um deles.",
      pegadinha: "EaD: a distância. Renaesp: rede de universidades.",
      conhecimento: "Os órgãos do Susp têm acesso às ações de educação do Sievap conforme a política do Ministério (art. 38, § 2º).",
    },
    {
      topico: "Avaliação",
      subassunto: "Avaliadores",
      dificuldade: 5,
      raciocinio: "Art. 32, parágrafo único: vedação por parentesco até o 3º grau ou por processo.",
      enunciado:
        "Para a avaliação das metas do Plano Nacional, a comissão permanente quer designar como avaliador um servidor do órgão gestor avaliado, sobrinho do titular desse órgão. Pela Lei 13.675/2018:",
      alternativas: [
        "a designação é vedada, pois há parentesco até o terceiro grau",
        "a designação é válida, pois a vedação alcança só parentes até o segundo grau",
        "a designação é válida, pois a lei só veda quem responde a processo criminal",
        "a designação é vedada, pois servidor do órgão avaliado nunca pode ser avaliador",
        "a designação é válida, se a comissão temporária tiver ao menos 5 membros",
      ],
      correta: 0,
      explicacao:
        "É vedado designar como avaliadores titulares ou servidores dos órgãos gestores avaliados que tenham parentesco até o terceiro grau com titulares ou servidores desses órgãos ou que respondam a processo criminal ou administrativo (art. 32, parágrafo único). O sobrinho é parente colateral de terceiro grau.",
      explicacaoErradas:
        "A vedação vai até o terceiro grau, e não “só parentes até o segundo grau”. A lei veda também quem responde a processo administrativo e o parente, e não “só” quem responde a processo criminal. O servidor do órgão avaliado só fica impedido nessas hipóteses, e não “nunca pode ser avaliador”. As comissões temporárias têm no mínimo 3 membros, e o número não afasta a vedação.",
      pegadinha: "Sobrinho e tio: terceiro grau.",
      conhecimento: "A avaliação é coordenada por comissão permanente e realizada por comissões temporárias (art. 32, caput).",
    },
    {
      topico: "Avaliação",
      subassunto: "Relatório e participação",
      dificuldade: 4,
      raciocinio: "Relatório aos Conselhos; participação dos Poderes, do MP, da Defensoria e dos Conselhos; Legislativo acompanha.",
      enunciado:
        "Concluída a avaliação do Plano Nacional de Segurança Pública e Defesa Social, discute-se o destino do relatório e quem participa do processo. Pela Lei 13.675/2018:",
      alternativas: [
        "o relatório é sigiloso e fica restrito ao Ministério, que decide se o divulga",
        "a avaliação é feita só pelo Executivo, sem participação do Judiciário ou do Ministério Público",
        "os órgãos avaliados podem negar acesso a documentos, para preservar a autonomia",
        "o Legislativo não participa, pois a avaliação é tarefa exclusiva dos Conselhos",
        "o relatório vai aos Conselhos, e o Legislativo de cada ente acompanha as avaliações",
      ],
      correta: 4,
      explicacao:
        "O relatório da avaliação é encaminhado aos Conselhos de Segurança Pública e Defesa Social (art. 27, § 2º). A avaliação conta com representantes do Legislativo, do Executivo, do Judiciário, do Ministério Público, da Defensoria e dos Conselhos (art. 29), e o Legislativo acompanha as avaliações do respectivo ente (art. 30).",
      explicacaoErradas:
        "O relatório não é “sigiloso”: procedimentos, dados e resultados da avaliação têm caráter público (art. 31, IV). A avaliação não é feita “só pelo Executivo”. Os órgãos têm o dever de colaborar e facilitar o acesso aos documentos, e não podem “negar acesso” (art. 28). “O Legislativo não participa” erra, pois ele participa e acompanha.",
      pegadinha: "Avaliação pública, com os três Poderes; relatório aos Conselhos.",
      conhecimento: "Os resultados servem para planejar metas, reestruturar programas e ampliar a capacitação dos operadores do Susp (art. 27, § 1º).",
    },
    {
      topico: "Sinesp",
      subassunto: "Convênios",
      dificuldade: 5,
      raciocinio: "Art. 37, § 3º: convênio com Judiciário e MP, ressalvado o sigilo, para prevenir e reprimir a violência.",
      enunciado:
        "O Ministério responsável pela segurança pública quer celebrar convênio com um tribunal de justiça para integrar os sistemas de informação do tribunal aos dados de segurança. Pela Lei 13.675/2018, o convênio:",
      alternativas: [
        "é vedado, pois o Judiciário não integra o Susp e não pode compartilhar dados",
        "é permitido, e o convênio afasta qualquer sigilo previsto na Constituição",
        "é permitido para qualquer fim, inclusive fiscalização tributária dos jurisdicionados",
        "é permitido, ressalvado o sigilo, se o objeto for prevenir e reprimir a violência",
        "depende de lei específica para cada tribunal, pois a Lei 13.675 não trata do tema",
      ],
      correta: 3,
      explicacao:
        "O Ministério é autorizado a celebrar convênios com órgãos do Executivo que não integrem o Susp, com o Judiciário e com o Ministério Público, para compatibilizar sistemas e integrar dados, ressalvadas as vedações constitucionais de sigilo e desde que o objeto fundamental seja a prevenção e a repressão da violência (art. 37, § 3º).",
      explicacaoErradas:
        "O convênio não “é vedado”: a lei o autoriza mesmo com quem não integra o Susp. Ele não “afasta qualquer sigilo” constitucional. Não vale “para qualquer fim”: o objeto deve ser a violência. A lei trata expressamente do tema, por isso “não trata do tema” erra.",
      pegadinha: "Pode integrar dados com o Judiciário, mas sem quebrar sigilo e só contra a violência.",
      conhecimento: "Os dados do Sinesp são padronizados e categorizados, e os integrantes os fornecem e atualizam (art. 37, § 1º).",
    },
    {
      topico: "Plano Nacional",
      subassunto: "Prioridades",
      dificuldade: 4,
      raciocinio: "Art. 22, IV e § 3º: fronteiras, portos e aeroportos; prevenção prioritária.",
      enunciado:
        "Na elaboração do Plano Nacional de Segurança Pública e Defesa Social, discute-se a prioridade a dar às ações de fiscalização nas fronteiras e às ações de prevenção à criminalidade. Pela Lei 13.675/2018:",
      alternativas: [
        "a prevenção é secundária, pois o plano prioriza a repressão qualificada",
        "as fronteiras ficam fora do plano, pois são tema exclusivo da defesa nacional",
        "as duas são prioridades, com destaque para divisas, portos e aeroportos",
        "só as fronteiras são prioridade, e a prevenção fica a cargo dos municípios",
        "a lei não fixa prioridades, que ficam a critério de cada governo eleito",
      ],
      correta: 2,
      explicacao:
        "O plano deve priorizar ações preventivas e fiscalizatórias de segurança interna nas divisas, fronteiras, portos e aeroportos (art. 22, IV), e as ações de prevenção à criminalidade devem ser consideradas prioritárias na sua elaboração (§ 3º).",
      explicacaoErradas:
        "A prevenção não “é secundária”: a lei a declara prioritária. As fronteiras não são “tema exclusivo da defesa nacional” para o plano. A prevenção não fica “a cargo dos municípios”. A lei fixa prioridades, por isso “não fixa prioridades” erra.",
      pegadinha: "Prevenção e fronteira: as duas são prioridade.",
      conhecimento: "A União elabora os objetivos, ações estratégicas, metas, prioridades, indicadores e formas de financiamento das políticas (art. 22, § 4º).",
    },
  ],
};
