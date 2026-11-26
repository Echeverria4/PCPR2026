import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "proc-01",
  resumo: {
    ideia:
      "O processo é o caminho que o Estado usa para julgar; o procedimento é o rito desse caminho. A ação penal leva o caso ao juiz, e quem acusa depende do crime: o Ministério Público na ação pública, a vítima na ação privada. Antes dela, o MP pode arquivar ou propor o acordo de não persecução penal. Depois, tudo anda por atos processuais com prazos contados de um jeito próprio.",
    itens: [
      {
        parte: "1. Processo, procedimento e relação processual",
        termo: "Processo x procedimento",
        faz: "Processo é o instrumento pelo qual o Estado exerce a jurisdição (diz o direito no caso concreto). Procedimento é o rito, a forma de andar desse processo. No penal, o processo começa por iniciativa do MP (ação pública) ou do ofendido (ação privada).",
      },
      {
        termo: "Sujeitos da relação processual",
        faz: "A relação tem três sujeitos: acusação (MP ou ofendido), juiz e acusado. O objeto é a aplicação da lei penal ao caso, que termina na sentença. Peritos, defensor e outros atuam no processo, mas não integram essa relação.",
        pista: "A pessoa jurídica pode ser autora (art. 37). Como ré, o STF e o STJ só aceitam nos crimes ambientais (art. 225, § 3º, da CF e Lei 9.605/1998).",
      },
      {
        termo: "Pressupostos processuais",
        faz: "Subjetivos, do juiz: investidura (ingresso na magistratura), competência e imparcialidade. Das partes: capacidade de ser parte, capacidade processual e capacidade postulatória (o habeas corpus dispensa advogado). Objetivos: extrínsecos, a falta de fatos impeditivos como litispendência e coisa julgada; intrínsecos, como procedimento adequado, citação válida e ausência de nulidades.",
      },
      {
        termo: "Procedimento comum",
        faz: "Ordinário se a pena máxima for igual ou superior a 4 anos; sumário se inferior a 4 anos; sumaríssimo para menor potencial ofensivo, pena máxima de até 2 anos (art. 394). Lei com procedimento especial prevalece.",
      },
      {
        parte: "2. Condições da ação",
        termo: "Condições da ação",
        faz: "Legitimidade, interesse e possibilidade do pedido, além da justa causa (indícios de autoria e prova do crime). Sem elas, a denúncia é rejeitada (art. 395).",
      },
      {
        termo: "Interesse e possibilidade do pedido",
        faz: "Interesse de agir: no penal a via judicial é obrigatória para punir; o que se exige é usar a via adequada (o MP não oferece queixa em homicídio). Possibilidade jurídica: o fato precisa ser crime e o acusado precisa poder ser condenado (não se acusa alguém por fato que deixou de ser crime nem um menor de 18 anos).",
      },
      {
        termo: "Legitimidade e justa causa",
        faz: "Legitimidade ativa é do titular da ação (MP ou ofendido); a passiva, do suposto autor. Justa causa é o lastro mínimo de autoria e materialidade; parte da doutrina não a trata como condição. O STJ a analisa olhando para trás (o que a investigação reuniu) e também para frente (o que a instrução pode reforçar).",
      },
      {
        termo: "Rejeição da denúncia",
        faz: "Art. 395: peça manifestamente inepta, falta de pressuposto ou condição da ação, ou falta de justa causa.",
        pista: "Inepta é a peça que não descreve o fato (art. 41).",
      },
      {
        parte: "3. Ação pública incondicionada e seus princípios",
        termo: "Espécies de ação penal",
        faz: "Pública incondicionada; pública condicionada à representação do ofendido ou à requisição do Ministro da Justiça; privada exclusiva, personalíssima e subsidiária da pública. Se a lei não diz nada sobre o crime, a ação é pública incondicionada.",
      },
      {
        termo: "Pública incondicionada",
        faz: "Regra geral. Só o MP denuncia, sem depender da vontade da vítima, e não pode desistir (art. 42).",
        pista: "O MP tem a ação de forma privativa (art. 129, I, da CF e art. 257, I, do CPP). Não existe ação penal iniciada de ofício pelo juiz.",
      },
      {
        termo: "Quem pode provocar o MP",
        faz: "Qualquer pessoa do povo pode levar ao MP, por escrito, informações sobre fato e autoria (art. 27), inclusive nos crimes de ação condicionada (aí o MP ainda depende da representação). Juiz ou tribunal que encontra crime de ação pública remete cópias ao MP (art. 40).",
      },
      {
        termo: "Bens públicos",
        faz: "Art. 24, § 2º: crime contra patrimônio ou interesse da União, Estado ou Município é sempre de ação pública.",
      },
      {
        termo: "Obrigatoriedade",
        faz: "Com indícios de autoria e prova da materialidade, o MP deve denunciar; não escolhe por conveniência. O princípio está mitigado pelos instrumentos de não persecução (transação penal e acordo de não persecução). Arquivar quando falta base não viola a obrigatoriedade.",
      },
      {
        termo: "Indisponibilidade e oficialidade",
        faz: "Proposta a ação, o MP não pode desistir (art. 42); pode pedir a absolvição, mas o juiz não fica preso a esse pedido. Oficialidade: a ação pública é movida por órgão oficial, o MP; a exceção é a ação privada subsidiária, quando o MP fica inerte.",
      },
      {
        termo: "Divisibilidade e intranscendência",
        faz: "Na ação pública, o MP pode denunciar só alguns autores e depois aditar a denúncia ou propor outra ação contra os demais; por isso o STJ rejeita o arquivamento implícito. Intranscendência vale para toda ação penal: ela não passa da pessoa do autor (o filho não responde pelo crime do pai).",
      },
      {
        termo: "Prazo da denúncia",
        faz: "Art. 46: 5 dias com réu preso e 15 dias com réu solto, contados do recebimento do inquérito.",
        pista: "São prazos impróprios: a denúncia atrasada vale enquanto não extinta a punibilidade. Com provas suficientes, o MP pode denunciar sem inquérito (art. 39, § 5º).",
      },
      {
        termo: "Arquivamento",
        faz: "O MP decide e comunica vítima, investigado e polícia (art. 28). O STF exige que a manifestação seja submetida ao juiz. A vítima pode pedir revisão em 30 dias.",
        pista: "Quem pede a revisão é a vítima ou seu representante, à instância de revisão do próprio MP (art. 28, § 1º). Crime contra União, Estado ou Município: a revisão pode ser provocada pela chefia do órgão que representa o ente em juízo (§ 2º). O delegado nunca manda arquivar inquérito (art. 17).",
      },
      {
        termo: "Súmula 524 do STF",
        faz: "Arquivado o inquérito por falta de provas, a ação só começa com provas novas.",
        pista: "Art. 18 do CPP: depois do arquivamento por falta de base, a polícia pode fazer novas pesquisas se souber de outras provas. Arquivamento por atipicidade ou extinção da punibilidade faz coisa julgada material e não se reabre.",
      },
      {
        parte: "4. Ação pública condicionada",
        termo: "Pública condicionada",
        faz: "Depende de representação da vítima ou de requisição do Ministro da Justiça. A representação fica irretratável depois de oferecida a denúncia (art. 25).",
        pista: "Prazo de 6 meses; 12 meses na violência doméstica contra a mulher (art. 38).",
      },
      {
        termo: "Representação",
        faz: "É condição de procedibilidade e também de perseguibilidade: sem ela nem o inquérito começa (art. 5º, § 4º). Não tem forma rígida; basta mostrar a vontade de ver o fato apurado. Pode ser feita pessoalmente ou por procurador com poderes especiais, por escrito ou oralmente, ao juiz, ao MP ou à autoridade policial (art. 39). A titularidade da ação continua sendo só do MP.",
        pista: "Exemplos: ameaça (salvo contra a mulher por razões da condição do sexo feminino, que é incondicionada, art. 147 do CP) e, em regra, estelionato (art. 171, § 5º, do CP).",
      },
      {
        termo: "Quem representa",
        faz: "O ofendido maior de 18 anos e capaz; se menor ou incapaz, o representante legal; sem representante ou com interesses em conflito, um curador nomeado pelo juiz (art. 33). Morto ou declarado ausente o ofendido, o direito passa ao cônjuge, ascendente, descendente ou irmão, nessa ordem (art. 24, § 1º).",
        pista: "Súmula 594 do STF: ofendido e representante legal exercem o direito de forma independente.",
      },
      {
        termo: "Prazo da representação",
        faz: "6 meses do dia em que a vítima soube quem é o autor (art. 38). É prazo decadencial, de direito material: conta o dia do começo e não se prorroga. Perdido o prazo, extingue-se a punibilidade. Na morte da vítima, os sucessores têm só o tempo que faltava. Para a vítima menor, o prazo dela corre a partir dos 18 anos, se o representante não agiu antes.",
        pista: "Nos crimes de violência doméstica e familiar contra a mulher, o prazo é de 12 meses (art. 38, § 2º, incluído pela Lei 15.438/2026).",
      },
      {
        termo: "Retratação e falta de representação",
        faz: "A retratação vale até o oferecimento da denúncia, não até o recebimento. Cabe a retratação da retratação (representar de novo), dentro do prazo decadencial. A falta de representação pode ser suprida em juízo, também dentro do prazo. A representação é indivisível: vale contra todos os autores do fato.",
      },
      {
        termo: "Retratação na Lei Maria da Penha",
        faz: "Na ação condicionada da Lei 11.340/2006, a renúncia (retratação) só vale perante o juiz, em audiência própria, antes do recebimento da denúncia e ouvido o MP (art. 16). Para o STJ (Tema 1167), essa audiência só confirma a retratação: o juiz não a marca de ofício nem para confirmar a representação.",
        pista: "Súmula 542 do STJ: a lesão corporal na violência doméstica contra a mulher é de ação pública incondicionada.",
      },
      {
        termo: "Requisição do Ministro da Justiça",
        faz: "Exigida em poucos crimes com juízo político, como o crime contra a honra do Presidente da República (art. 145, parágrafo único, do CP). Não tem prazo decadencial (cabe enquanto não extinta a punibilidade). Para a maioria, não admite retratação. Não obriga o MP a denunciar: é uma autorização.",
      },
      {
        termo: "Súmulas sobre a ação",
        faz: "Súmula 609 do STF: sonegação fiscal é de ação pública incondicionada. Súmula 714 do STF: no crime contra a honra de servidor em razão da função, a legitimidade é concorrente entre o ofendido (queixa) e o MP (com representação).",
      },
      {
        parte: "5. Ação penal privada",
        termo: "Ação privada",
        faz: "A vítima oferece queixa em 6 meses. A personalíssima só a vítima ajuíza, e hoje só existe no art. 236 do CP.",
        pista: "A lei indica a exclusiva com a frase \"somente se procede mediante queixa\" (ex.: exercício arbitrário sem violência, art. 345, parágrafo único, do CP).",
      },
      {
        termo: "Princípios da ação privada",
        faz: "Oportunidade: a vítima decide se ajuíza. Disponibilidade: pode desistir depois (perdão, perempção). Indivisibilidade: se acusar, tem de acusar todos os autores, e o MP vela por isso (art. 48). Intranscendência: a ação não passa do autor.",
        pista: "Para a jurisprudência, a ação privada é indivisível e a pública é divisível.",
      },
      {
        termo: "Quem oferece a queixa",
        faz: "A vítima ou seu representante legal; morta ou ausente a vítima, cônjuge, ascendente, descendente ou irmão, nessa ordem (art. 31). Pode ser por procurador com poderes especiais (art. 44); se a vítima assina a queixa junto com o advogado, a procuração especial é dispensada. Associações e sociedades também podem ser querelantes (art. 37).",
      },
      {
        termo: "Prazo da queixa",
        faz: "6 meses, decadenciais, contados de quando a vítima soube quem é o autor. Queixa ajuizada no prazo, ainda que em juízo incompetente, afasta a decadência. Se a vítima morre antes da queixa, os sucessores têm o tempo que faltava; com a ação em curso, têm 60 dias para assumi-la, sob pena de perempção.",
      },
      {
        termo: "Renúncia",
        faz: "A vítima abre mão da queixa antes de ajuizar a ação. Pode ser expressa ou tácita (ato incompatível com a vontade de processar). É unilateral, sem depender de aceitação. Feita a um dos autores, vale para todos (art. 49). Omitir um autor por esquecimento não é renúncia: o MP pede que a vítima se manifeste.",
      },
      {
        termo: "Perdão do ofendido",
        faz: "Depois de ajuizada a ação, a vítima perdoa o querelado. É bilateral: depende de aceitação. Intimado, o querelado tem 3 dias para dizer se aceita, e o silêncio vale como aceitação (art. 58). Pode ser expresso ou tácito, no processo ou fora dele. Dado a um, aproveita a todos, mas não atinge quem recusar (art. 51).",
      },
      {
        termo: "Perempção",
        faz: "Perda do direito de seguir na ação por inércia do querelante (art. 60): I – deixar o processo parado por 30 dias seguidos; II – morte ou incapacidade sem que os sucessores assumam em 60 dias; III – faltar sem motivo a ato em que deva estar presente ou não pedir a condenação nas alegações finais; IV – extinção da pessoa jurídica querelante sem sucessor.",
        pista: "Renúncia, perdão e perempção só existem na privada exclusiva e na personalíssima, nunca na subsidiária da pública.",
      },
      {
        termo: "Personalíssima e papel do MP",
        faz: "Na personalíssima só a vítima ajuíza; se ela morre, extingue-se a punibilidade. Hoje só no induzimento a erro essencial e ocultação de impedimento ao casamento (art. 236 do CP). Na privada exclusiva, o MP pode aditar a queixa só em pontos acessórios, sem incluir fato ou réu novo, e não oferece denúncia substitutiva (art. 45).",
      },
      {
        parte: "6. Ação privada subsidiária da pública",
        termo: "Subsidiária da pública",
        faz: "Cabe só se o MP ficar inerte no prazo (art. 29). O MP pode aditar, repudiar a queixa e oferecer denúncia substitutiva.",
        pista: "Se a vítima perde os 6 meses, o MP ainda pode denunciar.",
      },
      {
        termo: "Requisitos da subsidiária",
        faz: "Crime de ação pública; inércia total do MP no prazo legal (5 dias com preso, 15 com solto), sem denúncia, arquivamento ou pedido de diligência; queixa em 6 meses contados do fim do prazo do MP. Nesses 6 meses a legitimidade é concorrente; depois, volta a ser só do MP. É a decadência imprópria: o prazo da vítima acaba, mas a punibilidade não se extingue.",
      },
      {
        termo: "MP na subsidiária",
        faz: "Atua como interveniente adesivo obrigatório: adita a queixa (inclusive com réu ou fato novo), repudia a queixa e oferece denúncia substitutiva, intervém em todos os atos, produz prova, recorre e, se o querelante for negligente, retoma a ação como parte principal (art. 29).",
      },
      {
        parte: "7. Requisitos da denúncia e da queixa",
        termo: "Requisitos do art. 41",
        faz: "Exposição do fato criminoso com todas as circunstâncias; qualificação do acusado ou dados que permitam identificá-lo; classificação do crime; e, quando necessário, rol de testemunhas. Faltando o essencial, a peça é inepta e deve ser rejeitada; se recebida, cabe pedir o trancamento da ação.",
      },
      {
        termo: "Fato, qualificação e classificação",
        faz: "A descrição vaga ou genérica impede a defesa, porque o réu se defende dos fatos narrados. Sem nome certo, bastam sinais que identifiquem a pessoa: a falta do nome não atrasa a ação quando certa a identidade física (art. 259). A classificação errada não anula a peça: o juiz corrige depois (emendatio libelli).",
      },
      {
        termo: "Testemunhas e forma da peça",
        faz: "O rol vem com a denúncia ou queixa: até 8 testemunhas no rito ordinário e até 5 no sumário; a defesa arrola as suas na resposta à acusação. A peça é escrita em português, dirigida ao juízo competente (erro de endereçamento é mera irregularidade) e assinada pelo promotor ou pelo advogado do querelante.",
        pista: "Se o MP vê nova definição jurídica do fato, deve aditar a denúncia em 5 dias, reduzindo a termo o aditamento oral (art. 384).",
      },
      {
        parte: "8. Acordo de não persecução penal (art. 28-A)",
        termo: "Acordo de não persecução",
        faz: "Art. 28-A: crime sem violência ou grave ameaça, pena mínima inferior a 4 anos e confissão formal. Cumprido, extingue a punibilidade.",
        pista: "Não cabe para reincidente nem na violência doméstica.",
      },
      {
        termo: "Requisitos do acordo",
        faz: "Não ser caso de arquivamento; confissão formal e circunstanciada; infração (crime ou contravenção) sem violência ou grave ameaça à pessoa; pena mínima inferior a 4 anos (com pena mínima de 4 anos não cabe); acordo necessário e suficiente para reprovar e prevenir o crime. Na pena mínima entram as causas de aumento e de diminuição do caso (§ 1º).",
        pista: "Tentativa reduz a pena mínima pela fração máxima; aumento de metade sobre mínimo de 3 anos já impede o acordo.",
      },
      {
        termo: "Condições do acordo",
        faz: "Ajustadas de forma cumulativa ou alternativa: I – reparar o dano ou restituir a coisa, salvo impossibilidade; II – renunciar a bens e direitos que sejam instrumento, produto ou proveito do crime; III – prestar serviço à comunidade pelo tempo da pena mínima reduzida de 1/3 a 2/3; IV – pagar prestação pecuniária a entidade pública ou de interesse social; V – outra condição proporcional, por prazo determinado. Não há pena de prisão no acordo.",
      },
      {
        termo: "Quando não cabe",
        faz: "§ 2º: se couber transação penal (Juizado); investigado reincidente ou com conduta criminal habitual, reiterada ou profissional, salvo infrações anteriores insignificantes; benefício de acordo, transação ou suspensão condicional do processo nos 5 anos anteriores; violência doméstica ou familiar, ou crime contra a mulher por razões da condição do sexo feminino. STF e STJ também o vedam nos crimes raciais, inclusive a injúria racial.",
      },
      {
        termo: "Recusa, formalização e homologação",
        faz: "Se o MP recusa propor, o investigado pede a remessa ao órgão superior do MP (§ 14). O acordo é escrito e assinado por MP, investigado e defensor (§ 3º). O juiz homologa em audiência, ouvindo o investigado com o defensor para ver a voluntariedade e a legalidade (§ 4º). Condição inadequada, insuficiente ou abusiva: volta ao MP para reformular (§ 5º). Pode recusar a homologação (§ 7º), e dessa decisão cabe recurso em sentido estrito (art. 581, XXV).",
      },
      {
        termo: "Execução e descumprimento",
        faz: "Homologado, o MP inicia a execução no juízo da execução (§ 6º); para o STJ, é competente o juízo que homologou, que pode deprecar a fiscalização para o domicílio do beneficiado. A vítima é intimada da homologação e do descumprimento (§ 9º). O acordo não faz coisa julgada: descumprido, é rescindido e o MP denuncia (§ 10), e pode usar isso para negar a suspensão condicional do processo (§ 11). O STJ dispensa intimar o investigado para justificar antes da rescisão.",
      },
      {
        termo: "Efeitos e jurisprudência",
        faz: "Cumprido, o juiz declara extinta a punibilidade (§ 13). Não gera reincidência nem consta de certidão de antecedentes, salvo para impedir novo acordo em 5 anos (§ 12). STF (HC 185.913, 2024): cabe em processo que já corria quando a Lei 13.964/2019 entrou em vigor, mesmo sem confissão até então, se pedido antes do trânsito em julgado. Quem ficou em silêncio no inquérito pode depois ser informado da chance de confessar.",
      },
      {
        parte: "9. Atos processuais",
        termo: "Atos e seus defeitos",
        faz: "Os atos das partes, do juiz (atos jurisdicionais) e dos auxiliares movem o processo. Ato típico é o praticado na forma da lei. Defeitos, do mais grave ao mais leve: inexistência (ex.: sentença dada por quem não tem jurisdição, como juiz aposentado), nulidade absoluta ou relativa (o ato existe, mas não produz efeitos) e mera irregularidade (não afeta a finalidade; ex.: perito que esquece de rubricar uma folha).",
      },
      {
        termo: "Lugar dos atos",
        faz: "Em regra, públicos e na sede do juízo, em dia e hora certos (art. 792). Em caso de necessidade, podem ser na residência do juiz ou em outro local designado (§ 2º). Algumas autoridades depõem onde indicarem (art. 221). Ato em outra comarca é por carta precatória; em outro país, rogatória; por juiz subordinado ao tribunal, carta de ordem.",
      },
      {
        parte: "10. Prazos processuais",
        termo: "Prazos processuais",
        faz: "Contínuos e peremptórios. Exclui-se o dia do começo e inclui-se o do vencimento (art. 798). Intimação na sexta: o prazo começa na segunda (Súmula 310 do STF).",
        pista: "Prazo que termina em domingo ou feriado vai ao dia útil seguinte (§ 3º). Prazo de direito material (decadência) conta o dia do começo.",
      },
      {
        termo: "Dias dos atos e recesso",
        faz: "Atos podem ocorrer em qualquer dia, mas sessões de julgamento não são marcadas para domingo ou feriado; iniciadas em dia útil, seguem (art. 797). De 20 de dezembro a 20 de janeiro os prazos ficam suspensos e não há audiências nem sessões (art. 798-A), salvo réu preso no próprio processo, Lei Maria da Penha e medidas urgentes.",
      },
      {
        termo: "Início do prazo",
        faz: "Corre da ciência da parte: intimação, audiência em que foi cientificada ou manifestação de ciência nos autos. Súmula 710 do STF: conta-se da data da intimação, e não da juntada do mandado ou da carta precatória.",
      },
      {
        termo: "Prazos do juiz",
        faz: "Contados do termo de conclusão (art. 800): 10 dias para decisão definitiva ou interlocutória mista, 5 dias para interlocutória simples e 1 dia para despacho de expediente. Com motivo justo, podem ser dobrados. Não há preclusão para o juiz: o ato é praticado mesmo atrasado. Juiz ou promotor que retarda perde dias de vencimento (art. 801).",
      },
    ],
    cuidado:
      "A retratação da representação só vale até o oferecimento da denúncia. O recebimento pelo juiz é o marco da Lei Maria da Penha, não da regra geral. Renúncia é antes da ação e unilateral; perdão é depois e precisa ser aceito. No acordo de não persecução, pena mínima igual a 4 anos já não permite o acordo.",
  },
  questoes: [
    {
      topico: "Ação penal",
      subassunto: "Rejeição da denúncia inepta",
      dificuldade: 4,
      raciocinio: "Em crime culposo, a denúncia precisa dizer em que consistiu a culpa.",
      enunciado:
        "Recebido o inquérito de um acidente com morte em rodovia federal, o Ministério Público oferece denúncia que só afirma que o acusado causou o acidente, sem descrever em que consistiu a imprudência. Segundo o CPP, o juiz deve",
      alternativas: [
        "receber a denúncia, pois a forma da culpa será esclarecida na instrução",
        "absolver sumariamente o acusado, por falta de prova do dolo",
        "rejeitar a denúncia por inépcia, pois falta a exposição do fato",
        "devolver os autos à autoridade policial para novo relatório",
        "receber a denúncia e mandar o MP aditar a peça em cinco dias",
      ],
      correta: 2,
      explicacao:
        "O art. 41 do CPP exige a exposição do fato criminoso com todas as suas circunstâncias. Em crime culposo, isso inclui a conduta imprudente, negligente ou imperita. Sem essa descrição, a peça é manifestamente inepta, e o art. 395, I, manda rejeitá-la.",
      explicacaoErradas:
        "“Esclarecida na instrução” inverte a lógica: a defesa precisa saber do que se defende desde o início. “Absolver sumariamente” é fase posterior, depois da resposta, e o crime nem é doloso. “Novo relatório” não é solução prevista: o relatório é da polícia, e a falha é da denúncia. “Aditar a peça em cinco dias” lembra o art. 384, que vale depois da instrução, para fato novo provado.",
      pegadinha: "Acidente de trânsito com morte não dispensa a descrição da culpa.",
      conhecimento:
        "Pelo art. 395, a denúncia também é rejeitada quando falta pressuposto processual, condição da ação ou justa causa.",
    },
    {
      topico: "Ação penal",
      subassunto: "Retratação da representação",
      dificuldade: 5,
      raciocinio: "A regra geral usa o oferecimento da denúncia, e não o recebimento.",
      enunciado:
        "Em crime de ação pública condicionada, fora de contexto de violência doméstica, a vítima procura a delegacia para desistir da representação. A denúncia já foi oferecida, mas o juiz ainda não a recebeu. A retratação",
      alternativas: [
        "não produz efeito, pois a representação já é irretratável",
        "vale, pois o limite é o recebimento da denúncia pelo juiz",
        "vale, desde que feita perante o juiz em audiência designada para isso",
        "vale até a sentença, pois o interesse em punir é da vítima",
        "depende da concordância do MP, que pode aceitá-la ou não",
      ],
      correta: 0,
      explicacao:
        "O art. 25 do CPP diz que a representação será irretratável depois de oferecida a denúncia. Como a peça já foi oferecida, a desistência da vítima não impede o processo, mesmo antes do recebimento.",
      explicacaoErradas:
        "“Recebimento da denúncia” é o marco da Lei Maria da Penha, não da regra geral. “Audiência designada para isso” também é regra da Lei Maria da Penha (art. 16), que o enunciado afastou. “Até a sentença” ignora o art. 25. “Concordância do MP” não existe: a lei fixa o momento, e não deixa a escolha ao promotor.",
      pegadinha: "Oferecer a denúncia (ato do MP) é diferente de recebê-la (ato do juiz).",
      conhecimento:
        "Na violência doméstica contra a mulher, o prazo para representar é de 12 meses (art. 38, § 2º, do CPP).",
    },
    {
      topico: "Ação penal",
      subassunto: "Crime contra bem público",
      dificuldade: 4,
      raciocinio: "O art. 24, § 2º, vale para qualquer crime.",
      enunciado:
        "Um crime que, pela regra do Código Penal, só se processa mediante queixa é cometido em detrimento do patrimônio de um município. Nesse caso, a ação penal",
      alternativas: [
        "segue privada, mas o próprio município pode oferecer a queixa",
        "continua privada, e o MP atua apenas como fiscal da ordem jurídica",
        "passa a ser pública condicionada à representação do prefeito",
        "passa a depender de requisição do Ministro da Justiça",
        "será pública, seja qual for o crime, por regra expressa do CPP",
      ],
      correta: 4,
      explicacao:
        "O art. 24, § 2º, do CPP determina que, seja qual for o crime, quando praticado em detrimento do patrimônio ou interesse da União, Estado ou Município, a ação penal será pública.",
      explicacaoErradas:
        "“Segue privada” e “continua privada” contrariam o texto do § 2º. “Representação do prefeito” cria condição que a lei não prevê. “Requisição do Ministro da Justiça” é exigida só nos casos expressos, como crime contra a honra do Presidente da República.",
      pegadinha: "A regra do Código Penal sobre queixa cede ao art. 24, § 2º, do CPP.",
      conhecimento:
        "Quando houver dano a bem público, o dano já é qualificado (art. 163, parágrafo único, III, do CP), e a ação também é pública.",
    },
    {
      topico: "Arquivamento",
      subassunto: "Art. 28 e decisão do STF",
      dificuldade: 5,
      raciocinio: "O STF manteve o controle do juiz sobre o arquivamento.",
      enunciado:
        "Concluído o inquérito, o Ministério Público decide arquivá-lo. Segundo o art. 28 do CPP, lido com a interpretação dada pelo STF em 2023, o membro do MP",
      alternativas: [
        "decide sozinho, e nem o juiz nem a vítima podem provocar revisão do ato",
        "submete a manifestação ao juiz e comunica vítima, investigado e polícia",
        "apenas requer ao juiz, que decide o arquivamento sem revisão ministerial",
        "arquiva e comunica só a vítima, que pode recorrer ao juiz em 30 dias",
        "depende da concordância da autoridade policial que presidiu o inquérito",
      ],
      correta: 1,
      explicacao:
        "O texto do art. 28 manda o MP comunicar a vítima, o investigado e a autoridade policial e enviar os autos à revisão ministerial. No julgamento das ADIs 6.298, 6.299, 6.300 e 6.305, o STF deu interpretação conforme: a manifestação de arquivamento é submetida ao juiz competente, que pode provocar a revisão no MP em caso de ilegalidade patente ou teratologia.",
      explicacaoErradas:
        "“Decide sozinho” ignora a vítima, que pode pedir revisão em 30 dias (§ 1º), e o controle do juiz. “Sem revisão ministerial” volta ao modelo antigo e apaga a instância de revisão. “Só a vítima” esquece investigado e polícia, e o pedido da vítima vai à instância do MP, não ao juiz. “Concordância da autoridade policial” não existe: a polícia não decide sobre a ação penal.",
      pegadinha: "O pedido da vítima vai à revisão do próprio MP, no prazo de 30 dias.",
      conhecimento:
        "Em crimes contra União, Estados e Municípios, a revisão pode ser provocada pela chefia do órgão que os representa em juízo (art. 28, § 2º).",
    },
    {
      topico: "Arquivamento",
      subassunto: "Súmula 524 do STF",
      dificuldade: 4,
      raciocinio: "Arquivamento por falta de provas não impede ação com provas novas.",
      enunciado:
        "Um inquérito sobre receptação de cargas foi arquivado por falta de provas da autoria. Meses depois, a PRF apreende o mesmo carregamento com documentos que ligam o investigado ao fato. Sobre a ação penal, é correto afirmar que",
      alternativas: [
        "está vedada, pois o arquivamento faz coisa julgada material",
        "só cabe se a vítima oferecer queixa subsidiária em seis meses",
        "pode ser proposta com as mesmas provas, por simples reavaliação",
        "pode ser iniciada, pois surgiram provas novas sobre a autoria",
        "só cabe se o arquivamento tiver sido por atipicidade do fato",
      ],
      correta: 3,
      explicacao:
        "Pela Súmula 524 do STF, arquivado o inquérito, a ação penal não pode ser iniciada sem novas provas. Com provas novas, ela pode começar. O art. 18 do CPP também permite novas pesquisas pela polícia se houver notícia de outras provas.",
      explicacaoErradas:
        "“Coisa julgada material” só ocorre em arquivamento por atipicidade ou por extinção da punibilidade, não por falta de provas. “Queixa subsidiária” exige inércia do MP, e arquivar não é inércia. “Mesmas provas” contraria a súmula. “Por atipicidade” inverte a regra: esse é o caso em que a ação fica vedada.",
      pegadinha: "Falta de provas permite reabrir; atipicidade, não.",
      conhecimento:
        "A prova nova precisa alterar o quadro que levou ao arquivamento, e não apenas repetir o que já se sabia.",
    },
    {
      topico: "Ação privada",
      subassunto: "Subsidiária e inércia",
      dificuldade: 5,
      raciocinio: "Requisitar diligências dentro do prazo não é inércia.",
      enunciado:
        "Em crime de ação pública, o MP recebe o inquérito com o investigado solto e, no décimo dia, requisita novas diligências à polícia. A vítima, insatisfeita, quer ajuizar queixa subsidiária. Nesse cenário, a queixa",
      alternativas: [
        "cabe, pois o MP não ofereceu a denúncia no prazo de cinco dias",
        "cabe, pois a vítima pode agir sempre que discordar do MP",
        "não cabe, pois a ação subsidiária pressupõe inércia completa do MP",
        "não cabe, pois só existe ação subsidiária em crime de ação privada",
        "cabe, desde que a vítima aguarde o fim do prazo de quinze dias",
      ],
      correta: 2,
      explicacao:
        "O art. 29 do CPP admite a ação privada subsidiária quando a ação pública não é intentada no prazo legal. Se o MP denuncia, arquiva ou requisita diligências, ele agiu, e não há inércia. Com o réu solto, o prazo é de 15 dias (art. 46), e a devolução do inquérito à polícia reinicia a contagem.",
      explicacaoErradas:
        "“Prazo de cinco dias” vale para réu preso. “Sempre que discordar” transforma a subsidiária em recurso contra o MP, o que ela não é. “Só existe em crime de ação privada” erra o conceito: a subsidiária nasce justamente de crime de ação pública. “Aguarde o fim do prazo” ignora que o prazo recomeça quando os autos voltam ao MP.",
      pegadinha: "Discordar do MP não é o mesmo que o MP ficar parado.",
      conhecimento:
        "O prazo da vítima para a subsidiária é de 6 meses, contados do fim do prazo do MP (art. 38).",
    },
    {
      topico: "Ação privada",
      subassunto: "Decadência imprópria",
      dificuldade: 5,
      raciocinio: "A vítima perde a chance, mas o crime continua sendo de ação pública.",
      enunciado:
        "O MP ficou inerte no prazo legal para denunciar um crime de ação pública. A vítima deixou passar seis meses sem ajuizar a queixa subsidiária. Quanto à punibilidade e à ação penal, é correto afirmar que",
      alternativas: [
        "a punibilidade se extinguiu pela decadência do direito de queixa da vítima",
        "a ação só pode ser proposta se a vítima pedir ao juiz um novo prazo",
        "o MP perde o direito de denunciar, pois o prazo já se esgotou",
        "a vítima ainda pode ajuizar a queixa até a prescrição do crime",
        "o MP ainda pode denunciar, e só a vítima perdeu o direito de agir",
      ],
      correta: 4,
      explicacao:
        "O fim dos 6 meses só retira da vítima a possibilidade da queixa subsidiária. O crime continua de ação pública, e o MP pode denunciar até a prescrição. Por isso se fala em decadência imprópria: não extingue a punibilidade.",
      explicacaoErradas:
        "“A punibilidade se extinguiu” vale para a ação privada exclusiva, não para a subsidiária. “Novo prazo” não existe no CPP. “O MP perde o direito” confunde prazo impróprio com prazo fatal: o atraso do MP não o impede de agir. “Até a prescrição” estende à vítima um prazo que já acabou.",
      pegadinha: "Na subsidiária, a decadência atinge a vítima, não a ação pública.",
      conhecimento:
        "Na ação privada exclusiva, a decadência extingue a punibilidade (art. 107, IV, do CP).",
    },
    {
      topico: "Acordo de não persecução penal",
      subassunto: "Requisitos e contrabando",
      dificuldade: 4,
      raciocinio: "Olhe violência, pena mínima, confissão e vedações.",
      enunciado:
        "A PRF flagra um motorista transportando cigarros contrabandeados (art. 334-A do CP, reclusão de 2 a 5 anos). Ele é primário, não recebeu benefícios antes e confessa formal e circunstanciadamente. Quanto ao acordo de não persecução penal, o MP",
      alternativas: [
        "pode propô-lo: não há violência e a pena mínima é inferior a quatro anos",
        "não pode propô-lo, pois o contrabando ofende interesse da União e exige processo",
        "não pode propô-lo, pois cabe antes a transação penal do Juizado Especial",
        "pode propô-lo só depois de recebida a denúncia, como suspensão do processo",
        "não pode propô-lo, pois a pena máxima do crime é superior a quatro anos",
      ],
      correta: 0,
      explicacao:
        "O art. 28-A exige infração sem violência ou grave ameaça, pena mínima inferior a 4 anos, confissão formal e circunstanciada e que o acordo seja necessário e suficiente. O contrabando tem pena mínima de 2 anos e não envolve violência, e o motorista não cai em nenhuma vedação do § 2º.",
      explicacaoErradas:
        "“Interesse da União” não é vedação ao acordo. “Transação penal” só cabe em menor potencial ofensivo, com pena máxima de até 2 anos, e aqui ela é de 5. “Depois de recebida a denúncia” descreve outro instituto: o acordo é anterior à ação. “Pena máxima” não é o critério: a lei olha a pena mínima.",
      pegadinha: "O acordo usa a pena mínima; a transação penal usa a máxima.",
      conhecimento:
        "O acordo é firmado por escrito pelo MP, pelo investigado e pelo defensor (art. 28-A, § 3º).",
    },
    {
      topico: "Acordo de não persecução penal",
      subassunto: "Causa de diminuição e reincidência",
      dificuldade: 5,
      raciocinio: "Calcule a pena mínima e depois confira as vedações do § 2º.",
      enunciado:
        "Um investigado responde por crime sem violência cuja pena mínima é de 4 anos, mas há uma causa de diminuição de um terço aplicável ao caso. Ele é reincidente por crime anterior que não foi insignificante. O acordo de não persecução penal",
      alternativas: [
        "cabe, porque a diminuição deixa a pena mínima abaixo de quatro anos",
        "não cabe, porque a pena mínima prevista no tipo é de quatro anos",
        "cabe, pois a reincidência só impede a transação penal e o sursis",
        "não cabe, pela reincidência, ainda que a pena fique abaixo do limite",
        "não cabe, pois causas de diminuição ficam fora do cálculo da pena",
      ],
      correta: 3,
      explicacao:
        "Pelo § 1º do art. 28-A, as causas de aumento e de diminuição entram no cálculo da pena mínima. Com a redução de um terço, ela cai abaixo de 4 anos. Mas o § 2º, II, veda o acordo para o reincidente, salvo se as infrações anteriores forem insignificantes.",
      explicacaoErradas:
        "“Cabe, porque a diminuição” acerta o cálculo, mas esquece a reincidência. “Pena mínima prevista no tipo” e “ficam fora do cálculo” contrariam o § 1º. “Só impede a transação penal” ignora a vedação expressa do § 2º, II.",
      pegadinha: "O cálculo da pena pode passar e a vedação, ainda assim, barrar o acordo.",
      conhecimento:
        "Também não cabe o acordo para quem foi beneficiado nos 5 anos anteriores por acordo, transação ou suspensão condicional do processo.",
    },
    {
      topico: "Acordo de não persecução penal",
      subassunto: "Recusa do MP",
      dificuldade: 4,
      raciocinio: "O CPP manda o caso a outra instância do próprio MP.",
      enunciado:
        "O MP se recusa a propor acordo de não persecução penal a um investigado que, segundo a defesa, preenche todos os requisitos. Conforme o CPP, o investigado pode",
      alternativas: [
        "pedir ao juiz que homologue o acordo mesmo sem a proposta do MP",
        "requerer que os autos sigam a órgão superior do Ministério Público",
        "impetrar mandado de segurança para obrigar o MP a firmar o acordo",
        "propor ele mesmo o acordo à vítima, que decide sobre o benefício",
        "recorrer em sentido estrito ao tribunal contra a recusa do promotor",
      ],
      correta: 1,
      explicacao:
        "O art. 28-A, § 14, prevê que, diante da recusa do MP, o investigado pode requerer a remessa dos autos a órgão superior, na forma do art. 28. A decisão continua dentro do Ministério Público.",
      explicacaoErradas:
        "“Homologue mesmo sem a proposta” faria o juiz substituir o MP, o que a lei não permite. “Mandado de segurança” não é o caminho previsto. “Propor à vítima” não tem base: o acordo é entre MP e investigado. “Recurso em sentido estrito” cabe contra decisões do juiz, não contra a recusa do promotor.",
      pegadinha: "O juiz homologa ou recusa o acordo, mas não o propõe.",
      conhecimento:
        "O juiz pode devolver os autos ao MP se achar as condições inadequadas, insuficientes ou abusivas (art. 28-A, § 5º).",
    },
    {
      topico: "Acordo de não persecução penal",
      subassunto: "Efeitos do acordo",
      dificuldade: 4,
      raciocinio: "O acordo cumprido encerra o caso sem condenação.",
      enunciado:
        "Sobre os efeitos do acordo de não persecução penal homologado pelo juiz, é correto afirmar que",
      alternativas: [
        "o seu cumprimento gera reincidência se o agente cometer novo crime",
        "o descumprimento leva o juiz a converter as condições em prisão",
        "cumprido o acordo, o juízo decreta a extinção da punibilidade",
        "a celebração consta da certidão de antecedentes para todos os fins",
        "o descumprimento obriga o MP a oferecer a suspensão do processo",
      ],
      correta: 2,
      explicacao:
        "O § 13 do art. 28-A diz que, cumprido integralmente o acordo, o juízo decreta a extinção da punibilidade. Não há condenação, por isso não há reincidência.",
      explicacaoErradas:
        "“Gera reincidência” é falso: não há sentença condenatória. “Converter em prisão” não existe: descumprido o acordo, o MP comunica o juiz para a rescisão e depois oferece denúncia (§ 10). “Para todos os fins” contraria o § 12, que só registra o acordo para impedir outro em 5 anos. “Obriga o MP” inverte o § 11: o descumprimento pode justificar não oferecer a suspensão.",
      pegadinha: "O registro do acordo serve só para barrar novo benefício em 5 anos.",
      conhecimento:
        "A vítima é intimada da homologação e do descumprimento do acordo (art. 28-A, § 9º).",
    },
    {
      topico: "Atos e prazos processuais",
      subassunto: "Intimação na sexta-feira",
      dificuldade: 5,
      raciocinio: "Exclua o dia do começo e aplique a Súmula 310 do STF.",
      enunciado:
        "A defesa é intimada numa sexta-feira de decisão sujeita a recurso com prazo de 5 dias. Não há feriados no período. Pelo CPP e pela Súmula 310 do STF, o prazo",
      alternativas: [
        "começa no sábado e vence na quarta-feira da semana seguinte",
        "começa na própria sexta e vence na terça-feira da semana seguinte",
        "fica suspenso no fim de semana e vence na quinta-feira seguinte",
        "só começa a correr depois da juntada do mandado aos autos",
        "começa na segunda-feira e vence na sexta-feira da mesma semana",
      ],
      correta: 4,
      explicacao:
        "O art. 798, § 1º, exclui o dia do começo. A Súmula 310 do STF diz que, se a intimação for na sexta, o prazo tem início na segunda-feira seguinte. Contando segunda, terça, quarta, quinta e sexta, os 5 dias vencem na sexta dessa semana.",
      explicacaoErradas:
        "“Começa no sábado” ignora a Súmula 310. “Na própria sexta” conta o dia do começo, vedado pelo § 1º. “Suspenso no fim de semana” contraria a regra de prazos contínuos (art. 798, caput). “Juntada do mandado” contraria a Súmula 710 do STF: no processo penal, o prazo corre da intimação.",
      pegadinha: "No processo penal, o prazo conta da intimação, não da juntada.",
      conhecimento:
        "Prazo que termina em domingo ou feriado é prorrogado até o dia útil seguinte (art. 798, § 3º).",
    },
    {
      topico: "Procedimento",
      subassunto: "Ordinário e sumário",
      dificuldade: 4,
      raciocinio: "Quatro anos de pena máxima já leva ao ordinário.",
      enunciado:
        "Um crime tem pena de reclusão de 1 a 4 anos e não há procedimento especial previsto. Pelo art. 394 do CPP, o processo segue o rito",
      alternativas: [
        "ordinário, já que a pena máxima é de quatro anos",
        "sumário, pois a pena máxima não passa de quatro anos",
        "sumaríssimo, pois a pena mínima é de apenas um ano",
        "sumário, pois a pena mínima é inferior a quatro anos",
        "ordinário só com réu preso; com réu solto, o sumário",
      ],
      correta: 0,
      explicacao:
        "O art. 394, § 1º, I, manda seguir o rito ordinário quando a sanção máxima for igual ou superior a 4 anos. O sumário é para pena máxima inferior a 4 anos, e o sumaríssimo, para menor potencial ofensivo.",
      explicacaoErradas:
        "“Não passa de quatro anos” inclui o próprio 4, que a lei põe no ordinário. “Pena mínima de um ano” e “pena mínima inferior” usam critério errado: vale a pena máxima. “Só com réu preso” cria distinção que o art. 394 não faz.",
      pegadinha: "Quatro anos exatos de pena máxima: rito ordinário.",
      conhecimento:
        "Menor potencial ofensivo é a infração com pena máxima de até 2 anos (Lei 9.099/1995, art. 61).",
    },
  ],
};
