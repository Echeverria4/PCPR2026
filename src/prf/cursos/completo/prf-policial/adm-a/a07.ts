import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-07",
  resumo: {
    ideia:
      "A Lei 14.133/2021 é a norma geral de licitações. A aula mostra o conceito e quem pode legislar, quem a lei alcança e o que fica de fora, a transição da lei antiga, todos os princípios e objetivos, a defesa do servidor pela advocacia pública, quem conduz a disputa, as cinco modalidades, os seis critérios de julgamento e os valores atualizados.",
    itens: [
      {
        parte: "1. Conceito e quem pode legislar",
        termo: "Conceito de licitação",
        faz: "É o procedimento administrativo, feito no exercício da função administrativa, aberto a todos os interessados que cumpram as condições do edital. Os interessados apresentam propostas, e a Administração escolhe a mais vantajosa para celebrar o contrato.",
        pista: "Duas finalidades: garantir a isonomia (tratar todos de forma igual e impessoal) e selecionar, de forma objetiva, a proposta mais vantajosa.",
      },
      {
        termo: "Licitar é a regra (CF, art. 37, XXI)",
        faz: "Ressalvados os casos especificados na legislação, obras, serviços, compras e alienações são contratados por licitação pública que assegure igualdade de condições a todos os concorrentes. Só se permitem as exigências de qualificação técnica e econômica indispensáveis à garantia do cumprimento das obrigações.",
        pista: "As exceções (dispensa e inexigibilidade) precisam estar na lei.",
      },
      {
        termo: "Competência para legislar (CF, art. 22, XXVII)",
        faz: "Cabe à União, de forma privativa, editar normas gerais de licitação e contratação, em todas as modalidades, para a Administração direta, autárquica e fundacional de todos os entes. Para as estatais, vale o art. 173, § 1º, III. Estados, DF e municípios editam normas específicas próprias, sem precisar de lei complementar que delegue (diferente do parágrafo único do art. 22).",
        pista: "São normas gerais: as modalidades, as hipóteses de contratação direta, os critérios de julgamento e os requisitos de habilitação. Quando a União edita norma específica, ela vale só para a União. Estado ou município não cria modalidade nem nova dispensa.",
      },
      {
        termo: "Duas leis gerais",
        faz: "A Lei 14.133/2021 vale para a Administração direta, autárquica e fundacional. A Lei 13.303/2016 vale para empresas públicas, sociedades de economia mista e subsidiárias. A lei das estatais veio da EC 19/1998, que mudou o art. 173, § 1º, da CF para prever estatuto próprio para elas.",
      },
      {
        termo: "Norma geral × norma especial",
        faz: "Pela abrangência, a Lei 14.133 é norma geral: vale para todos os entes, e a lei de cada ente é norma específica. Pelo conteúdo, a comparação muda: no âmbito federal, a Lei 9.784/1999 é a lei geral de processo administrativo, e a Lei 14.133 (processo licitatório) e a Lei 8.112/1990 (processo disciplinar) são leis especiais.",
        pista: "Se a questão perguntar apenas se a Lei 14.133 é norma geral, sem outro contexto, a resposta é sim. A relação geral × especial depende do que se compara: diante da lei de concessões, por exemplo, a 14.133 é a geral.",
      },
      {
        termo: "STF: estado não cria exigência geral de habilitação",
        faz: "Lei estadual que exigia certidão de violação aos direitos do consumidor para habilitação foi julgada inconstitucional (ADI 3.735). Só a lei federal pode, em âmbito geral, criar diferenças entre concorrentes e restringir a participação em igualdade de condições.",
        pista: "Estado ou município só pode inovar para fixar condições específicas, ligadas a uma classe de objetos ou a peculiaridades de interesse local.",
      },
      {
        termo: "STF: estado não amplia dispensa",
        faz: "Os estados têm competência suplementar sobre licitação, desde que respeitem as normas gerais da União. Por isso, lei estadual que ampliou hipótese de dispensa, fora do que diz a lei geral, é inconstitucional (ADI 4.658).",
      },
      {
        termo: "STF: estado não obriga a contratar pelo registro de preços",
        faz: "Lei estadual que obrigava o poder público a adquirir pelo menos 65% dos bens e serviços do sistema de registro de preços invadiu a competência da União (ADI 4.748). Pela norma geral, ter preço registrado não obriga a Administração a contratar.",
      },
      {
        termo: "STF: estado não autoriza venda direta de armas",
        faz: "É inconstitucional, por violar a competência privativa da União, a lei estadual que autoriza órgãos de segurança pública a vender armas de fogo diretamente a seus integrantes (ADI 7.004, 2023).",
      },
      {
        parte: "2. Quem a lei alcança",
        termo: "Quem se submete",
        faz: "A Administração direta, autárquica e fundacional da União, dos estados, do DF e dos municípios, incluídas as fundações de direito público e as de direito privado (art. 1º). Também os órgãos do Legislativo e do Judiciário da União, dos estados e do DF e o Legislativo dos municípios, quando no desempenho de função administrativa. Entram ainda os fundos especiais e as demais entidades controladas, direta ou indiretamente, pela Administração.",
        pista: "Só o Legislativo dos municípios aparece porque não existe Judiciário municipal.",
      },
      {
        termo: "Fundos especiais",
        faz: "São recursos definidos em lei para uma finalidade específica, como o Fundeb. Quem licita não é o fundo, e sim quem gere o recurso.",
        pista: "Exemplo: a secretaria municipal de educação licita as compras feitas com dinheiro do Fundeb. Basta lembrar que fundos especiais e demais entidades controladas devem licitar.",
      },
      {
        termo: "Estatais",
        faz: "Empresas públicas, sociedades de economia mista e subsidiárias não seguem, em regra, a Lei 14.133. Seguem a Lei 13.303/2016, mas continuam obrigadas a licitar. A ressalva é o art. 178 (art. 1º, § 1º): os crimes que a lei pôs no Código Penal valem também para elas, e o art. 185 reforça isso.",
        pista: "Erro comum: dizer que estatal não licita. Ela licita, pela própria lei. O pregão das estatais: a Lei 13.303 mandava usar, de preferência, o pregão da Lei 10.520 para bens e serviços comuns. Como essa lei foi revogada, o art. 189 faz a remissão valer para a Lei 14.133.",
      },
      {
        termo: "Repartições no exterior (art. 1º, § 2º)",
        faz: "As licitações das repartições públicas sediadas no exterior seguem regulamento específico, editado por ministro de Estado. Devem observar as peculiaridades locais e os princípios básicos da Lei 14.133.",
        pista: "Exemplo: uma embaixada do Brasil.",
      },
      {
        termo: "Recursos de agência estrangeira (art. 1º, § 3º)",
        faz: "Quando o dinheiro vem de empréstimo ou doação de agência oficial de cooperação estrangeira ou de organismo financeiro de que o Brasil seja parte, podem valer condições especiais. Essas condições podem vir de acordo internacional aprovado pelo Congresso ou de normas do próprio organismo, desde que exigidas para obter o recurso, sem conflito com a Constituição, indicadas no contrato de empréstimo ou doação e com parecer favorável do órgão jurídico.",
        pista: "Exemplo: obra financiada por um banco internacional de desenvolvimento. A Lei 14.133 continua valendo; só se admitem regras específicas do financiador.",
      },
      {
        termo: "Reservas internacionais (art. 1º, § 5º)",
        faz: "As contratações ligadas à gestão, direta e indireta, das reservas internacionais do País, inclusive serviços conexos ou acessórios, seguem ato normativo próprio do Banco Central. Esse ato deve observar os princípios do art. 37, caput, da CF.",
        pista: "Exemplo: as reservas cambiais em dólar.",
      },
      {
        parte: "3. O que a lei rege e o que fica fora",
        termo: "Objetos da lei (art. 2º)",
        faz: "A lei se aplica a: alienação e concessão de direito real de uso de bens; compra, inclusive por encomenda; locação; concessão e permissão de uso de bens públicos; prestação de serviços, inclusive os técnico-profissionais especializados; obras e serviços de arquitetura e engenharia; e contratações de tecnologia da informação e comunicação.",
      },
      {
        termo: "Concessão de uso × concessão de serviço",
        faz: "A concessão e a permissão de uso de bem público (art. 2º, IV) seguem a Lei 14.133 de forma direta. Elas não se confundem com a concessão de serviço público.",
        pista: "Exemplo: autorizar um quiosque num calçadão de praia é uso de bem público, regido diretamente pela Lei 14.133.",
      },
      {
        termo: "Aplicação subsidiária (art. 186)",
        faz: "A Lei 14.133 se aplica de forma subsidiária às concessões e permissões de serviço público (Lei 8.987/1995), às parcerias público-privadas (Lei 11.079/2004) e aos serviços de publicidade por agências (Lei 12.232/2010).",
        pista: "Subsidiária quer dizer: primeiro vale a lei própria; a 14.133 cobre o que ela não tratar.",
      },
      {
        termo: "Convênios (art. 184)",
        faz: "A lei se aplica, no que couber e na falta de norma específica, a convênios, acordos, ajustes e instrumentos parecidos, na forma de regulamento do Poder Executivo federal.",
      },
      {
        termo: "Fora da lei (art. 3º)",
        faz: "Não se subordinam à Lei 14.133: os contratos de operação de crédito, interno ou externo, e de gestão de dívida pública, incluídas a contratação de agente financeiro e a concessão de garantia ligadas a eles; e as contratações sujeitas a normas de legislação própria.",
        pista: "Exemplo de legislação própria: a locação em que a Administração é a inquilina segue a Lei do Inquilinato (Lei 8.245/1991). Na leitura literal, havendo lei própria, não se aplica a 14.133.",
      },
      {
        parte: "4. Vigência e transição",
        termo: "Vigência e transição",
        faz: "A Lei 14.133 vale desde 1º/4/2021. As Leis 8.666 e 10.520 e o RDC (arts. 1º a 47-A da Lei 12.462) deixaram de valer em 30/12/2023 (art. 193). Até lá, a Administração podia escolher a lei antiga ou a nova, indicando a escolha no edital. Os crimes da 8.666 (arts. 89 a 108) foram revogados na hora e hoje estão no Código Penal (arts. 337-E a 337-P).",
      },
      {
        termo: "Proibido misturar as leis (art. 191)",
        faz: "Na transição, era vedada a aplicação combinada da lei nova com a antiga. Cada contratação seguia uma lei só, do começo ao fim.",
      },
      {
        termo: "Contratos antigos (arts. 190 e 191)",
        faz: "O contrato assinado antes da lei nova continua regido pela lei antiga. O contrato que nasceu de licitação feita pela lei antiga também segue essa lei durante toda a sua vigência.",
        pista: "Por isso ainda existem contratos em execução pela Lei 8.666.",
      },
      {
        parte: "5. Princípios: a lista completa",
        termo: "Princípios novos",
        faz: "O art. 5º lista: legalidade, impessoalidade, moralidade, publicidade, eficiência, interesse público, probidade administrativa, igualdade, planejamento, transparência, eficácia, segregação de funções, motivação, vinculação ao edital, julgamento objetivo, segurança jurídica, razoabilidade, competitividade, proporcionalidade, celeridade, economicidade e desenvolvimento nacional sustentável.",
        pista: "A Lei 8.666 já trazia legalidade, impessoalidade, moralidade, igualdade, publicidade, probidade, vinculação ao instrumento convocatório, julgamento objetivo e desenvolvimento nacional sustentável. Os demais são novidade expressa.",
      },
      {
        termo: "LINDB nas licitações",
        faz: "O art. 5º manda observar também a Lei de Introdução às Normas do Direito Brasileiro (Decreto-Lei 4.657/1942). A Lei 13.655/2018 incluiu nela os arts. 20 a 30, sobre segurança jurídica e eficiência na criação e aplicação do direito público.",
        pista: "Exemplo: a decisão não pode se basear só em valores abstratos sem considerar as consequências práticas.",
      },
      {
        termo: "Princípios implícitos",
        faz: "A doutrina reconhece ainda: isonomia, sigilo das propostas, licitação sustentável, adjudicação compulsória, formalismo moderado, vedação à oferta de vantagens e procedimento formal.",
      },
      {
        termo: "Gerais × próprios da licitação",
        faz: "Alguns princípios valem para toda a Administração, como legalidade, moralidade e eficiência. Outros são próprios da licitação, como vinculação ao edital, julgamento objetivo, competitividade, sigilo das propostas e adjudicação compulsória.",
      },
      {
        parte: "6. Legalidade, impessoalidade e moralidade",
        termo: "Legalidade",
        faz: "A licitação segue o devido processo legal: o agente cumpre as etapas e as regras da lei, sem inventar fases nem pular exigências. A contratação sem licitação só cabe nos casos previstos em lei.",
      },
      {
        termo: "Impessoalidade e interesse público",
        faz: "Todos os interessados recebem o mesmo tratamento, sem favoritismo nem perseguição. A licitação busca o interesse público, e não o do agente (princípio da finalidade).",
        pista: "É o oposto do patrimonialismo, em que o gestor trata a coisa pública como se fosse sua.",
      },
      {
        termo: "Moralidade e probidade",
        faz: "Exigem conduta honesta, leal e de boa-fé de agentes e licitantes. Probidade é quase sinônimo de moralidade.",
        pista: "Cuidado: nem toda imoralidade é improbidade administrativa. A improbidade exige enquadramento na Lei 8.429/1992.",
      },
      {
        termo: "Programa de integridade (art. 25, § 4º)",
        faz: "Nas contratações de obras, serviços e fornecimentos de grande vulto, o edital deve exigir que o vencedor implante programa de integridade em até 6 meses, contados da assinatura do contrato.",
      },
      {
        termo: "Nepotismo na terceirização (art. 48, parágrafo único)",
        faz: "Durante a vigência do contrato, o contratado não pode empregar cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o terceiro grau, de dirigente do órgão contratante ou de agente que atue na licitação ou na fiscalização ou gestão do contrato. Essa proibição deve constar do edital.",
      },
      {
        parte: "7. Igualdade, competitividade e vedações ao agente",
        termo: "Igualdade e competitividade",
        faz: "Processo isonômico, sem restrição indevida, atrai mais concorrentes. As exigências de habilitação só são legítimas quando indispensáveis à execução do objeto (CF, art. 37, XXI).",
        pista: "Exemplo: num contrato complexo, é legítimo pedir prova de experiência em projetos parecidos. Exigência sem justificativa, sem relação com o objeto ou exagerada restringe a competição e pode configurar direcionamento, que a lei proíbe.",
      },
      {
        termo: "Indicação de marca (art. 41, I)",
        faz: "A regra é não indicar marca. A indicação de uma ou mais marcas ou modelos só é permitida quando formalmente justificada, como para padronizar o objeto ou manter compatibilidade com o que a Administração já usa.",
      },
      {
        termo: "Vedações ao agente (art. 9º)",
        faz: "Salvo os casos previstos em lei, o agente que atua em licitações não pode: I – admitir, prever, incluir ou tolerar situações que (a) comprometam, restrinjam ou frustrem o caráter competitivo, inclusive na participação de cooperativas; (b) criem preferência ou distinção pela naturalidade, sede ou domicílio dos licitantes; (c) sejam impertinentes ou irrelevantes para o objeto; II – dar tratamento diferente entre empresas brasileiras e estrangeiras (comercial, legal, trabalhista, previdenciário ou outro), inclusive quanto a moeda, modalidade e local de pagamento, mesmo com financiamento internacional; III – resistir sem justificativa ao andamento do processo, retardar ou deixar de praticar ato de ofício, ou praticá-lo contra a lei.",
      },
      {
        termo: "Agente do próprio órgão (art. 9º, §§ 1º e 2º)",
        faz: "Agente público do órgão licitante ou contratante não pode participar, direta ou indiretamente, da licitação nem da execução do contrato, mesmo que trabalhe fora do setor de contratações. Deve-se observar a lei de conflito de interesses, durante e depois do cargo (quarentena). As vedações alcançam também quem auxilia a contratação: equipe de apoio, profissional especializado e funcionário ou representante de empresa de assessoria técnica.",
      },
      {
        parte: "8. Quem não pode disputar (art. 14)",
        termo: "Autor do projeto (art. 14, I e II)",
        faz: "Não pode disputar nem executar o contrato, direta ou indiretamente: I – o autor do anteprojeto, do projeto básico ou do projeto executivo, pessoa física ou jurídica, quando a licitação tratar de obra, serviço ou fornecimento ligado a ele; II – a empresa, sozinha ou em consórcio, que elaborou o projeto básico ou executivo, ou empresa da qual o autor do projeto seja dirigente, gerente, controlador, acionista ou dono de mais de 5% do capital com direito a voto, responsável técnico ou subcontratado.",
        pista: "Empresas do mesmo grupo econômico equiparam-se ao autor do projeto (§ 3º).",
      },
      {
        termo: "Sancionado (art. 14, III)",
        faz: "Não pode disputar a pessoa física ou jurídica que, no tempo da licitação, esteja impedida de participar por sanção que lhe foi aplicada.",
      },
      {
        termo: "Empresa de fachada (art. 14, § 1º)",
        faz: "O impedimento do sancionado alcança também o licitante que atue no lugar dele para burlar a sanção, inclusive a controladora, a controlada ou a coligada, desde que comprovado o ilícito ou o uso fraudulento da personalidade jurídica.",
      },
      {
        termo: "Vínculo com agentes (art. 14, IV)",
        faz: "Não pode disputar quem tenha vínculo técnico, comercial, econômico, financeiro, trabalhista ou civil com dirigente do órgão contratante ou com agente que atue na licitação ou na fiscalização ou gestão do contrato. Também quem seja cônjuge, companheiro ou parente deles em linha reta, colateral ou por afinidade, até o terceiro grau. A proibição deve constar do edital.",
      },
      {
        termo: "Empresas do mesmo grupo (art. 14, V)",
        faz: "Empresas controladoras, controladas ou coligadas (nos termos da Lei 6.404/1976) não podem concorrer entre si na mesma licitação.",
      },
      {
        termo: "Trabalho infantil e escravo (art. 14, VI)",
        faz: "Não pode disputar quem, nos 5 anos anteriores à divulgação do edital, foi condenado judicialmente, com trânsito em julgado, por exploração de trabalho infantil, por submeter trabalhadores a condições análogas às de escravo ou por contratar adolescentes nos casos proibidos pela legislação trabalhista.",
      },
      {
        termo: "Autor do projeto como apoio (art. 14, §§ 2º e 4º)",
        faz: "A critério da Administração e só a serviço dela, o autor do projeto pode apoiar o planejamento, a licitação ou a gestão do contrato, sob supervisão exclusiva de agentes públicos (§ 2º). Os incisos I e II também não impedem contratar obra ou serviço que inclua, como encargo do contratado, o projeto básico e o executivo, na contratação integrada, ou só o executivo, nos demais regimes (§ 4º).",
      },
      {
        termo: "Projetos com financiamento estrangeiro (art. 14, § 5º)",
        faz: "Em projetos financiados, em parte, por agência oficial de cooperação estrangeira ou organismo financeiro internacional, não pode participar quem esteja na lista de sancionados dessas entidades ou tenha sido declarado inidôneo nos termos da Lei 14.133.",
      },
      {
        termo: "STF: município pode proibir parentes (Tema 1001)",
        faz: "É constitucional a norma municipal, editada em competência suplementar, que proíba licitar ou contratar com: agentes eletivos; ocupantes de cargo em comissão ou função de confiança; cônjuge, companheiro ou parente até o terceiro grau de qualquer destes; e os demais servidores municipais (RE 910.552, 2023).",
        pista: "A proibição não pode alcançar parentes de servidores que não tenham cargo em comissão, função de confiança nem mandato eletivo.",
      },
      {
        parte: "9. Quando a lei permite tratar diferente",
        termo: "Exceções à isonomia",
        faz: "A própria lei abre exceções à igualdade, para proteger o interesse nacional e o desenvolvimento: critérios de desempate e preferências, margem de preferência, medidas de compensação, restrição a tecnologia nacional em TIC estratégica, uso de mão de obra e insumos locais e benefícios às microempresas e empresas de pequeno porte.",
      },
      {
        termo: "Desempate (art. 60)",
        faz: "Se duas ou mais propostas empatarem, usa-se, nesta ordem: I – disputa final, com nova proposta dos empatados logo após a classificação; II – avaliação do desempenho contratual anterior, de preferência pelos registros cadastrais; III – ações de equidade entre homens e mulheres no trabalho, conforme regulamento; IV – programa de integridade, conforme orientação dos órgãos de controle.",
      },
      {
        termo: "Preferência após o desempate (art. 60, § 1º)",
        faz: "Se ainda houver empate, prefere-se, nesta ordem, o bem ou serviço de: I – empresa estabelecida no território do estado ou do DF do órgão licitante (se o órgão for municipal, no estado onde fica o município); II – empresa brasileira; III – empresa que invista em pesquisa e desenvolvimento de tecnologia no País; IV – empresa que comprove práticas de mitigação de emissões (Lei 12.187/2009).",
        pista: "Essas regras não prejudicam o empate ficto das microempresas e empresas de pequeno porte (LC 123/2006, art. 44).",
      },
      {
        termo: "Margem de preferência (art. 26)",
        faz: "A licitação pode dar margem de preferência a: I – bens manufaturados e serviços nacionais que atendam a normas técnicas brasileiras; II – bens reciclados, recicláveis ou biodegradáveis, conforme regulamento. A margem é de até 10% sobre o preço dos produtos que não se enquadram. Para bens e serviços nacionais resultantes de desenvolvimento e inovação tecnológica no País, pode chegar a 20%.",
        pista: "No caso do inciso I, a margem é definida em decisão fundamentada do Poder Executivo federal. Pode ser estendida a produtos do Mercosul, se houver reciprocidade em acordo internacional aprovado pelo Congresso.",
      },
      {
        termo: "Medidas de compensação (art. 26, § 6º)",
        faz: "Com justificativa prévia da autoridade, o edital pode exigir que o contratado ofereça à Administração compensação comercial, industrial ou tecnológica, ou acesso a condições vantajosas de financiamento, juntas ou não, na forma definida pelo Poder Executivo federal.",
      },
      {
        termo: "Tecnologia nacional em TIC estratégica (art. 26, § 7º)",
        faz: "Na implantação, manutenção e aperfeiçoamento de sistemas de tecnologia da informação e comunicação considerados estratégicos pelo Poder Executivo federal, a licitação pode ser restrita a bens e serviços com tecnologia desenvolvida no País e produzidos conforme o processo produtivo básico (Lei 10.176/2001).",
      },
      {
        termo: "Mão de obra e insumos locais (art. 25, § 2º)",
        faz: "O edital pode prever o uso de mão de obra, materiais, tecnologias e matérias-primas do local da execução, desde que isso não prejudique a competitividade nem a eficiência do contrato.",
      },
      {
        termo: "Microempresa e empresa de pequeno porte (art. 4º)",
        faz: "Valem nas licitações os benefícios dos arts. 42 a 49 da LC 123/2006. Eles não se aplicam ao item de compra ou serviço, nem à licitação de obra ou serviço de engenharia, cujo valor estimado passe da receita bruta máxima da empresa de pequeno porte.",
        pista: "O benefício também se limita a quem, no ano da licitação, ainda não tenha contratos com a Administração que, somados, passem desse teto.",
      },
      {
        parte: "10. Publicidade, transparência e sigilo",
        termo: "Publicidade × transparência",
        faz: "Publicidade é divulgar os atos. Transparência é mais ampla: a informação deve ser clara, acessível e fácil de entender. Publicar no diário oficial é só um dos instrumentos.",
        pista: "As regras de divulgação do edital estão no art. 54: inteiro teor no PNCP e extrato obrigatório no diário oficial do ente e em jornal diário de grande circulação. O tema volta na aula seguinte.",
      },
      {
        termo: "Portal Nacional de Contratações Públicas (art. 174)",
        faz: "O PNCP é o sítio eletrônico oficial para a divulgação centralizada e obrigatória dos atos exigidos pela lei. Também permite que os órgãos de todos os entes façam ali suas contratações, de forma facultativa.",
        pista: "Divulgar no PNCP é obrigatório; contratar pelo PNCP é facultativo. Os entes podem ter sítio próprio para divulgação complementar e para fazer as contratações (art. 175).",
      },
      {
        termo: "Forma eletrônica e gravação (art. 17, § 2º)",
        faz: "As licitações são feitas, de preferência, na forma eletrônica. A forma presencial é admitida com motivação, e a sessão pública deve ser registrada em ata e gravada em áudio e vídeo.",
      },
      {
        termo: "Edital completo no site (art. 25, § 3º)",
        faz: "Todos os elementos do edital, inclusive minuta do contrato, termo de referência, anteprojeto, projetos e demais anexos, devem ser divulgados em sítio eletrônico oficial na mesma data do edital, sem exigir cadastro ou identificação para acessar.",
      },
      {
        termo: "Arbitragem e obra parada",
        faz: "A arbitragem será sempre de direito e observará a publicidade (art. 152). Obra paralisada por mais de 1 mês exige aviso público em sítio eletrônico oficial e em placa no local da obra, com o motivo, o responsável e a data prevista para retomar (art. 115, § 6º).",
      },
      {
        termo: "Sigilo (art. 13)",
        faz: "Os atos da licitação são públicos, salvo a informação cujo sigilo seja imprescindível à segurança da sociedade e do Estado (CF, art. 5º, XXXIII). A mesma ressalva vale para contratos e aditivos (art. 91).",
      },
      {
        termo: "Publicidade diferida (art. 13, parágrafo único)",
        faz: "A divulgação fica adiada em dois casos: I – o conteúdo das propostas, até a abertura delas; II – o orçamento da Administração, nos termos do art. 24.",
        pista: "Devassar o sigilo de proposta, ou deixar terceiro devassá-lo, é crime: detenção de 2 a 3 anos e multa (CP, art. 337-J).",
      },
      {
        termo: "Orçamento sigiloso (art. 24)",
        faz: "Com justificativa, o orçamento estimado pode ser sigiloso, mas o detalhamento dos quantitativos e as demais informações necessárias às propostas continuam públicos. O sigilo não vale para os órgãos de controle interno e externo.",
        pista: "No critério maior desconto, o preço estimado ou o máximo aceitável deve constar do edital, porque o desconto é calculado sobre ele.",
      },
      {
        parte: "11. Eficiência, eficácia, economicidade e planejamento",
        termo: "Eficiência, eficácia e economicidade",
        faz: "Eficiência é obter bom resultado gastando pouco recurso e pouco tempo. Eficácia é cumprir os objetivos e as metas fixadas. Economicidade é o menor custo para a Administração, numa análise de custo e benefício.",
      },
      {
        termo: "Efetividade não é princípio",
        faz: "A efetividade não está na lista do art. 5º. Ela é um dever da alta administração, que deve promover eficiência, efetividade e eficácia nas contratações (art. 11, parágrafo único). Efetividade é o impacto real que a ação do Estado gera na sociedade.",
        pista: "Exemplo: compra de vacinas contra doença que eleva a mortalidade infantil. Licitação rápida e com bom preço é eficiente (e o preço baixo mostra economicidade). Vacinar a meta da população até a data prevista é eficácia. A queda da mortalidade é a efetividade.",
      },
      {
        termo: "Planejamento",
        faz: "A lei antiga se preocupava sobretudo com a fase externa. A lei nova dá muitas regras à fase interna (antes de divulgar o edital), com foco em planejamento e governança.",
      },
      {
        termo: "Plano de contratações anual (art. 12, VII)",
        faz: "A partir dos documentos de formalização de demandas, os órgãos de planejamento de cada ente podem, na forma de regulamento, elaborar plano de contratações anual. O objetivo é racionalizar as compras, alinhá-las ao planejamento estratégico e subsidiar as leis orçamentárias.",
        pista: "O plano deve ser divulgado em sítio eletrônico oficial e deve ser observado pelo ente nas licitações e na execução dos contratos (art. 12, § 1º).",
      },
      {
        termo: "Estudo técnico preliminar (art. 6º, XX)",
        faz: "É o documento da primeira etapa do planejamento. Mostra o interesse público envolvido e a melhor solução, e serve de base ao anteprojeto, ao termo de referência ou ao projeto básico, se a contratação for viável.",
      },
      {
        parte: "12. Segregação, motivação, edital e julgamento objetivo",
        termo: "Segregação de funções",
        faz: "É vedado designar o mesmo agente para funções simultâneas mais sujeitas a risco, para reduzir a chance de ocultar erros e de haver fraude (art. 7º, § 1º). A regra vale também para a assessoria jurídica e o controle interno (art. 7º, § 2º).",
        pista: "A ideia: um só servidor que pede, licita, fiscaliza, paga e controla poderia cometer e esconder ilícitos. Exemplos: quem faz o pedido não deve dar o parecer jurídico que aprova a minuta do edital; quem conduz a licitação não deve fiscalizar o contrato; a homologação é feita por autoridade diferente de quem conduziu o certame (o TCU adota essa linha, por exemplo no Acórdão 5.615/2008, 2ª Câmara). Há também um sentido externo, que depende de lei: o autor do projeto básico não disputa a execução (art. 14).",
      },
      {
        termo: "Motivação",
        faz: "Os atos da licitação devem indicar seus pressupostos de fato e de direito.",
        pista: "Exemplos na lei: indicar marca só se formalmente justificado (art. 41, I); contratação direta instruída com parecer e justificativa (art. 72); vedar a participação de consórcio só com justificativa.",
      },
      {
        termo: "Vinculação ao edital",
        faz: "O edital é a lei interna da licitação e obriga a Administração e os licitantes. Se a Administração o descumpre, o ato é ilegal e pode ser anulado. Se o licitante o descumpre, é desclassificado ou inabilitado.",
        pista: "Na lei antiga, o nome era vinculação ao instrumento convocatório, porque havia a carta-convite. Como o convite acabou, a lei nova fala em edital.",
      },
      {
        termo: "O que o edital traz (art. 25)",
        faz: "O edital traz o objeto e as regras de convocação, julgamento, habilitação, recursos e penalidades, fiscalização e gestão do contrato, entrega do objeto e condições de pagamento. A minuta do contrato vai como anexo, e o índice de reajuste de preços é obrigatório, qualquer que seja a duração do contrato.",
      },
      {
        termo: "Edital fora das modalidades",
        faz: "O edital também é usado em procedimentos auxiliares: pré-qualificação (art. 6º, XLIV), credenciamento (art. 79, parágrafo único, I), procedimento de manifestação de interesse (art. 81) e sistema de registro de preços (art. 82).",
      },
      {
        termo: "Julgamento objetivo",
        faz: "As propostas são julgadas pelos critérios do art. 33, fixados no edital. Não se admitem critérios reservados, sigilosos ou pessoais, o que limita a subjetividade.",
        pista: "Ligado a ele está a vedação à oferta de vantagens não previstas no edital. Exemplo: na compra de veículos, o licitante não pode ganhar por prometer entregar os carros com tanque cheio, se isso não estava no edital.",
      },
      {
        parte: "13. Segurança jurídica, razoabilidade, celeridade e formalismo moderado",
        termo: "Segurança jurídica",
        faz: "Busca estabilidade nas relações jurídicas. Nas licitações, pede que os órgãos de controle e de assessoria jurídica fixem entendimentos uniformes, por meio de orientações, regulamentos, súmulas e respostas a consultas aos tribunais de contas.",
        pista: "Proteção à confiança: o contratado tem direito de ser indenizado pelo que já executou quando não deu causa à nulidade. O particular não pode ser prejudicado por ilegalidade que não causou.",
      },
      {
        termo: "Razoabilidade e proporcionalidade",
        faz: "Também chamadas de vedação aos excessos. As exigências e limitações devem guardar relação entre meios e fins: devem ser necessárias, sem exagero, para cumprir o contrato. A penalidade deve ser proporcional à falta.",
        pista: "Exemplos: um erro pequeno e sanável não deve levar à desclassificação; objeto complexo pede prazo maior para preparar a proposta.",
      },
      {
        termo: "Celeridade",
        faz: "A licitação deve ser rápida, sem formalidades inúteis. Por isso a lei inverteu as fases: primeiro julga as propostas e só depois habilita, e apenas o vencedor; e há uma fase recursal única.",
        pista: "O licenciamento ambiental de obras e serviços de engenharia licitados tem prioridade de tramitação nos órgãos do Sisnama (art. 25, § 6º).",
      },
      {
        termo: "Formalismo moderado (art. 12)",
        faz: "Cumprem-se as formas, mas sem exagero: I – documentos por escrito, com data, local e assinatura; III – o desatendimento de exigência meramente formal, que não comprometa a qualificação nem a compreensão da proposta, não leva ao afastamento do licitante nem à invalidação do processo; IV – a cópia pode ser autenticada por agente da Administração ou por declaração de advogado, sob sua responsabilidade; V – o reconhecimento de firma só é exigido se houver dúvida sobre a autenticidade; VI – os atos são preferencialmente digitais.",
        pista: "No mesmo sentido: só se desclassifica proposta com vício insanável (art. 59, I), e só se anula por vício insanável, aproveitando os atos não afetados (art. 71, III e § 1º).",
      },
      {
        parte: "14. Desenvolvimento sustentável e adjudicação compulsória",
        termo: "Desenvolvimento nacional sustentável",
        faz: "É ao mesmo tempo princípio (art. 5º) e objetivo (art. 11, IV) da licitação. Une crescimento econômico, inclusão social e proteção ambiental.",
        pista: "Na lei: impacto ambiental no anteprojeto e no projeto básico (art. 6º, XXIV e XXV); estudo técnico preliminar com impactos ambientais, economia de energia e logística reversa (art. 18, § 1º, XII); preferência para quem pratica mitigação de emissões (art. 60, § 1º, IV); margem de preferência para bens recicláveis. É uma das razões que flexibilizam a isonomia.",
      },
      {
        termo: "Adjudicação compulsória",
        faz: "Adjudicar é atribuir o objeto ao vencedor. Pelo princípio, a Administração não pode entregar o objeto a outro que não o vencedor. O ato é declaratório e gera só expectativa: o vencedor não tem direito ao contrato.",
        pista: "Enquanto a adjudicação for válida, a Administração também não pode abrir nova licitação para o mesmo objeto.",
      },
      {
        parte: "15. Objetivos e governança",
        termo: "Objetivos (art. 11)",
        faz: "A licitação tem quatro objetivos: I – assegurar a proposta apta a gerar o resultado de contratação mais vantajoso, inclusive quanto ao ciclo de vida do objeto; II – assegurar tratamento isonômico e justa competição; III – evitar sobrepreço, preços manifestamente inexequíveis e superfaturamento; IV – incentivar a inovação e o desenvolvimento nacional sustentável.",
      },
      {
        termo: "Menor valor nem sempre é o melhor",
        faz: "Proposta mais vantajosa não é, necessariamente, a de menor preço. É preciso olhar o ciclo de vida do objeto: manutenção, consumo, reposição e descarte.",
        pista: "Exemplo: ao comprar um carro, o modelo mais barato pode gastar mais combustível e peças ao longo dos anos e sair mais caro no total.",
      },
      {
        termo: "Sobrepreço (art. 6º, LVI)",
        faz: "É o preço orçado para a licitação, ou contratado, em valor expressivamente superior aos preços de referência do mercado. Pode estar em um só item, se a contratação for por preço unitário, ou no valor global, se for por tarefa ou empreitada (global, integral, semi-integrada ou integrada).",
        pista: "Sobrepreço está no preço (orçamento ou contrato). Ainda não houve, necessariamente, pagamento.",
      },
      {
        termo: "Superfaturamento (art. 6º, LVII)",
        faz: "É o dano efetivo ao patrimônio da Administração. Exemplos da lei: a) medir quantidade maior que a executada ou fornecida; b) deficiência na execução de obra ou serviço de engenharia que reduza qualidade, vida útil ou segurança; c) alterar o orçamento de obra ou serviço de engenharia e desequilibrar o contrato a favor do contratado; d) outras alterações financeiras que gerem pagamento antecipado, distorção do cronograma físico-financeiro, prorrogação injustificada com custo adicional ou reajuste irregular.",
      },
      {
        termo: "Preço inexequível",
        faz: "É o preço tão baixo que não permite executar o contrato. A lei quer evitar tanto o preço alto demais (sobrepreço) quanto o baixo demais, que leva à obra abandonada ou ao serviço malfeito.",
      },
      {
        termo: "Governança das contratações (art. 11, parágrafo único)",
        faz: "A alta administração do órgão é responsável pela governança. Deve implementar processos e estruturas, inclusive gestão de riscos e controles internos, para avaliar, direcionar e monitorar as licitações e os contratos, com o fim de: a) alcançar os objetivos da licitação; b) promover ambiente íntegro e confiável; c) alinhar as contratações ao planejamento estratégico e às leis orçamentárias; d) promover eficiência, efetividade e eficácia nas contratações.",
      },
      {
        parte: "16. Defesa do servidor pela advocacia pública",
        termo: "Defesa pela advocacia pública (art. 10)",
        faz: "Se autoridades e servidores que atuaram na licitação ou no contrato precisarem se defender na esfera administrativa, controladora (tribunal de contas) ou judicial, por ato praticado em estrita observância de parecer jurídico (art. 53, § 1º), a advocacia pública fará sua representação judicial ou extrajudicial.",
        pista: "A defesa é a critério do agente: ele pode preferir um advogado particular.",
      },
      {
        termo: "Limites da defesa (art. 10, §§ 1º e 2º)",
        faz: "Não há defesa pela advocacia pública quando houver nos autos prova de ato ilícito doloso (§ 1º). A defesa vale mesmo que o agente já não ocupe o cargo, emprego ou função em que praticou o ato (§ 2º).",
      },
      {
        parte: "17. Quem conduz a licitação",
        termo: "Agente público para a lei (art. 6º, V)",
        faz: "É quem, por eleição, nomeação, designação, contratação ou qualquer outra forma de investidura ou vínculo, exerce mandato, cargo, emprego ou função em pessoa jurídica integrante da Administração Pública.",
        pista: "É um conceito mais restrito que o da Lei de Improbidade: só alcança quem atua dentro de pessoa jurídica da Administração.",
      },
      {
        termo: "Quem designa e requisitos (art. 7º)",
        faz: "A autoridade máxima do órgão, ou quem as normas de organização indicarem, promove a gestão por competências e designa os agentes. Eles devem: I – ser, de preferência, servidores efetivos ou empregados públicos dos quadros permanentes; II – ter atribuições ligadas a licitações e contratos, ou formação compatível, ou qualificação atestada por certificação de escola de governo; III – não ser cônjuge ou companheiro de licitantes ou contratados habituais, nem ter com eles parentesco (linha reta, colateral ou afinidade) até o terceiro grau, nem vínculo técnico, comercial, econômico, financeiro, trabalhista ou civil.",
        pista: "A autoridade também deve observar a segregação de funções (art. 7º, §§ 1º e 2º).",
      },
      {
        termo: "Agente de contratação",
        faz: "É a pessoa designada pela autoridade, obrigatoriamente entre servidores efetivos ou empregados públicos dos quadros permanentes, para tomar decisões, acompanhar o trâmite, dar impulso ao procedimento e executar o que for preciso ao bom andamento da licitação até a homologação (arts. 6º, LX, e 8º).",
        pista: "Na prática, ele atua até a fase final; a homologação em si é da autoridade superior (art. 71).",
      },
      {
        termo: "Equipe de apoio e pregoeiro (art. 8º, §§ 1º e 5º)",
        faz: "O agente de contratação é auxiliado por equipe de apoio e responde individualmente pelos atos que praticar, salvo se induzido a erro pela equipe. No pregão, o agente que conduz o certame se chama pregoeiro.",
      },
      {
        termo: "Comissão de contratação",
        faz: "É o conjunto de agentes, permanente ou especial, que recebe, examina e julga documentos da licitação e dos procedimentos auxiliares (art. 6º, L). Em bens ou serviços especiais, pode substituir o agente de contratação, com no mínimo 3 membros, de preferência efetivos (art. 8º, § 2º). Os membros respondem de forma solidária por todos os atos da comissão.",
        pista: "Fica livre da responsabilidade o membro que expressar posição divergente fundamentada e registrada em ata na reunião da decisão. A lei também usa o nome comissão de licitação (art. 64, § 1º).",
      },
      {
        termo: "Assessoria contratada (art. 8º, § 4º)",
        faz: "Em bens ou serviços especiais que não sejam contratados de forma rotineira, pode-se contratar, por prazo determinado, empresa ou profissional especializado para assessorar os agentes que conduzem a licitação.",
      },
      {
        termo: "Regulamento e apoio (art. 8º, § 3º)",
        faz: "As regras de atuação do agente de contratação, da equipe de apoio, da comissão e dos fiscais e gestores de contratos são fixadas em regulamento. Deve-se prever o apoio da assessoria jurídica e do controle interno.",
      },
      {
        termo: "Quando a comissão pode ou deve atuar",
        faz: "Pode substituir o agente nas licitações de bens ou serviços especiais (comissão de no mínimo 3 membros). Deve conduzir o diálogo competitivo (comissão de pelo menos 3 servidores efetivos ou empregados permanentes, admitida a contratação de profissionais para assessoria técnica).",
        pista: "Em regra, quem conduz é o agente de contratação; a comissão é exceção.",
      },
      {
        termo: "Quem conduz o leilão (art. 31)",
        faz: "O leilão pode ser conduzido por leiloeiro oficial ou por servidor designado pela autoridade. Se for leiloeiro, ele é escolhido por credenciamento ou por licitação na modalidade pregão, pelo maior desconto sobre a comissão, tendo como teto os percentuais da lei da profissão e considerando o valor dos bens (art. 31, § 1º).",
        pista: "A banca que dá notas às propostas técnicas (art. 37) não conduz a licitação; ela só avalia quesitos técnicos.",
      },
      {
        parte: "18. Modalidades: regras gerais e conceitos",
        termo: "Modalidades",
        faz: "São cinco (art. 28): pregão, concorrência, concurso, leilão e diálogo competitivo. É vedado criar outras modalidades ou combinar as existentes (art. 28, § 2º).",
        pista: "Convite, tomada de preços e RDC não existem mais. O pregão, que tinha lei própria (Lei 10.520), agora está na Lei 14.133.",
      },
      {
        termo: "O que define a modalidade",
        faz: "A modalidade é escolhida pela natureza do objeto, e não pelo valor. O valor só importa para saber se cabe dispensa por baixo valor (art. 75, I e II).",
      },
      {
        termo: "Quem a vedação do § 2º prende",
        faz: "A proibição de criar ou combinar modalidades vale para o agente público e para estados, DF e municípios, porque modalidade é norma geral da União. Ela não impede que uma lei federal futura crie nova modalidade.",
        pista: "Exemplo: a LC 182/2021 (marco das startups) criou, no art. 13, uma modalidade especial para testar soluções inovadoras.",
      },
      {
        termo: "Consulta e procedimentos auxiliares",
        faz: "A consulta é modalidade própria das agências reguladoras federais (Lei 9.472/1997), fora da Lei 14.133. Credenciamento, pré-qualificação, procedimento de manifestação de interesse, sistema de registro de preços e registro cadastral são procedimentos auxiliares, e não modalidades.",
      },
      {
        termo: "Rito comum (art. 17)",
        faz: "Concorrência e pregão seguem o mesmo rito: I – preparatória; II – divulgação do edital; III – apresentação de propostas e lances, quando for o caso; IV – julgamento; V – habilitação; VI – recursal; VII – homologação.",
        pista: "A habilitação pode vir antes do julgamento, por ato motivado que explique os benefícios e com previsão no edital (art. 17, § 1º). Pergunta genérica sobre as fases da licitação se refere a esse rito.",
      },
      {
        termo: "Compra e serviço (art. 6º, X e XI)",
        faz: "Compra é a aquisição remunerada de bens, de uma só vez ou em parcelas. Compra imediata é a que tem entrega em até 30 dias da ordem de fornecimento. Serviço é a atividade, ou conjunto de atividades, para obter uma utilidade intelectual ou material de interesse da Administração.",
      },
      {
        termo: "Bens e serviços comuns e especiais (art. 6º, XIII e XIV)",
        faz: "Comuns são aqueles cujos padrões de desempenho e qualidade podem ser definidos de forma objetiva no edital, por especificações usuais de mercado. Especiais são os que, por alta heterogeneidade ou complexidade, não podem ser descritos assim; exigem justificativa prévia.",
        pista: "O conceito de especial é residual: a regra é tratar como comum, e classificar como especial exige motivação.",
      },
      {
        termo: "Obra (art. 6º, XII)",
        faz: "É a atividade que, por lei, é privativa de arquiteto e engenheiro e que intervém no meio ambiente com um conjunto de ações que inova o espaço físico da natureza ou altera de forma substancial as características originais de um imóvel.",
        pista: "Obra é algo grande. Exemplos: construir um prédio num terreno vazio; transformar um complexo esportivo simples em complexo de padrão olímpico.",
      },
      {
        termo: "Serviço de engenharia (art. 6º, XXI)",
        faz: "Tem três traços: (i) atividade para obter uma utilidade, intelectual ou material, de interesse da Administração; (ii) privativa, por lei, de arquiteto, engenheiro ou técnico especializado; (iii) não se enquadra no conceito de obra. Divide-se em comum e especial.",
      },
      {
        termo: "Serviço comum × especial de engenharia",
        faz: "Serviço comum de engenharia tem ações objetivamente padronizáveis, em desempenho e qualidade, de manutenção, adequação e adaptação de bens móveis e imóveis, preservando suas características originais. Serviço especial de engenharia é o que, por alta heterogeneidade ou complexidade, não cabe nesse conceito.",
        pista: "Exemplo de comum: pintura ou troca de piso cobrada por metro quadrado.",
      },
      {
        parte: "19. Concorrência e pregão",
        termo: "Concorrência",
        faz: "Serve para bens e serviços especiais, obras e serviços comuns e especiais de engenharia (art. 6º, XXXVIII). Admite todos os critérios, menos o maior lance: menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço e maior retorno econômico. Usa o rito comum do art. 17, igual ao pregão.",
        pista: "A concorrência não serve mais para vender bens. Alienação de bens agora é por leilão.",
      },
      {
        termo: "Pregão",
        faz: "É obrigatório para bens e serviços comuns (art. 6º, XLI, e art. 29). Julga só por menor preço ou maior desconto.",
        pista: "Não serve para serviços técnicos especializados de natureza predominantemente intelectual, nem para obras, nem para serviços especiais de engenharia (art. 29, parágrafo único). Exemplos: comprar aparelhos de telefone (bem comum); pintar paredes por metro quadrado (serviço comum de engenharia).",
      },
      {
        termo: "Serviço comum de engenharia: pregão ou concorrência",
        faz: "Pela redação da lei, o serviço comum de engenharia cabe tanto no pregão (art. 29, parágrafo único, só exclui os especiais) quanto na concorrência (art. 6º, XXXVIII). A Administração escolhe.",
        pista: "No âmbito federal, o Decreto 10.024/2019 (pregão eletrônico) já tornava o pregão obrigatório também para serviços comuns de engenharia. O mesmo decreto afasta o pregão de obras, locações imobiliárias, alienações e bens e serviços especiais.",
      },
      {
        termo: "Exemplos de pregão e concorrência",
        faz: "Comprar papel de escritório: pregão (bem comum). Pintar um prédio por metro quadrado: pregão ou concorrência (serviço comum de engenharia). Construir uma ponte: concorrência (obra). Contratar estudo técnico complexo: concorrência (serviço técnico intelectual).",
      },
      {
        parte: "20. Concurso e leilão",
        termo: "Concurso e leilão",
        faz: "Concurso: escolha de trabalho técnico, científico ou artístico, com prêmio ou remuneração ao vencedor. Leilão: alienação de bens, pelo maior lance.",
      },
      {
        termo: "Concurso (arts. 6º, XXXIX, e 30)",
        faz: "Usa o critério melhor técnica ou conteúdo artístico. O edital indica a qualificação exigida dos participantes, as diretrizes e a forma de apresentação do trabalho, as condições de realização e o prêmio ou remuneração.",
        pista: "Prazo mínimo do edital: 35 dias úteis (art. 55, IV). O julgamento tem certa subjetividade (avaliar arte ou técnica), mas não pode ser arbitrário.",
      },
      {
        termo: "Concurso de projeto (art. 30, parágrafo único)",
        faz: "Quando o concurso é para elaborar projeto, o vencedor deve ceder à Administração todos os direitos patrimoniais do projeto e autorizar sua execução conforme o juízo de conveniência e oportunidade das autoridades. As regras dessa cessão estão no art. 93.",
      },
      {
        termo: "Leilão: objeto e critério (art. 6º, XL)",
        faz: "Serve para alienar bens imóveis ou bens móveis inservíveis ou legalmente apreendidos, a quem oferecer o maior lance. Não há limite de valor. As regras de alienação de bens estão no art. 76, e os procedimentos de leilão, em regulamento.",
        pista: "Leilão comum: conduzido por leiloeiro oficial. Leilão administrativo: conduzido por servidor designado. Os leiloeiros oficiais são matriculados nas juntas comerciais.",
      },
      {
        termo: "Divulgação e forma do leilão (art. 31, §§ 2º e 3º)",
        faz: "O edital é obrigatoriamente divulgado em sítio eletrônico oficial e afixado em local de ampla circulação na sede da Administração. Outros meios são facultativos, para ampliar a competição. O leilão é preferencialmente eletrônico; o presencial só cabe por comprovada inviabilidade técnica ou desvantagem para a Administração.",
        pista: "Prazo mínimo do edital: 15 dias úteis, por ser o prazo do critério maior lance (art. 55, III).",
      },
      {
        termo: "Edital do leilão (art. 31, § 2º)",
        faz: "Deve trazer: I – descrição do bem e, se for imóvel, situação, divisas e matrícula; II – valor de avaliação, preço mínimo, condições de pagamento e, se houver, a comissão do leiloeiro; III – onde estão os móveis, veículos e semoventes; IV – o sítio da internet e o período do leilão, ou, se presencial, local, dia e hora; V – eventuais ônus, gravames ou pendências sobre os bens.",
        pista: "Informar os ônus é dever da Administração, e não do arrematante.",
      },
      {
        termo: "Leilão sem habilitação (art. 31, § 4º)",
        faz: "O leilão não exige registro cadastral prévio e não tem fase de habilitação. É homologado assim que terminam os lances, superada a fase recursal e feito o pagamento pelo vencedor, na forma do edital.",
      },
      {
        parte: "21. Diálogo competitivo",
        termo: "Diálogo competitivo",
        faz: "Modalidade para obras, serviços e compras em que a Administração dialoga com licitantes pré-selecionados para desenvolver alternativas que atendam a sua necessidade; depois, eles apresentam proposta final (art. 6º, XLII). É excepcional e exige justificativa.",
        pista: "Exemplo: o órgão precisa levar internet a uma região isolada e não sabe qual tecnologia usar; conversa com o mercado antes de definir a solução.",
      },
      {
        termo: "Quando cabe o diálogo (art. 32)",
        faz: "I – objeto com, ao mesmo tempo: a) inovação tecnológica ou técnica; b) impossibilidade de atender a necessidade sem adaptar soluções do mercado; c) impossibilidade de definir com precisão as especificações técnicas. II – quando for preciso definir e identificar meios e alternativas, com destaque para: a) a solução técnica mais adequada; b) os requisitos técnicos da solução já definida; c) a estrutura jurídica ou financeira do contrato.",
      },
      {
        termo: "Fase de pré-seleção (art. 32, § 1º, I e II)",
        faz: "O edital, divulgado em sítio eletrônico oficial, apresenta as necessidades e as exigências já definidas e dá prazo mínimo de 25 dias úteis para manifestação de interesse. Os critérios de pré-seleção estão no edital, e são admitidos todos os interessados que cumprirem os requisitos objetivos.",
      },
      {
        termo: "Fase de diálogo (art. 32, § 1º, III a VII)",
        faz: "É vedado divulgar informação de modo discriminatório que dê vantagem a algum licitante. A Administração não pode revelar a outros as soluções propostas nem as informações sigilosas de um licitante sem o consentimento dele. O diálogo pode durar até que a Administração, em decisão fundamentada, identifique a solução. As reuniões são registradas em ata e gravadas em áudio e vídeo. O edital pode prever fases sucessivas, que vão restringindo as soluções.",
        pista: "A lei não fixa prazo máximo para a fase de diálogo.",
      },
      {
        termo: "Fase competitiva (art. 32, § 1º, VIII a X)",
        faz: "Concluído o diálogo, a Administração junta aos autos os registros e as gravações, divulga edital com a solução escolhida e os critérios objetivos de seleção e abre prazo mínimo de 60 dias úteis para os pré-selecionados apresentarem propostas. Pode pedir esclarecimentos ou ajustes, desde que não discrimine nem distorça a concorrência. O vencedor é definido pelos critérios divulgados no início da fase competitiva.",
      },
      {
        termo: "Comissão do diálogo (art. 32, § 1º, XI, e § 2º)",
        faz: "O diálogo é conduzido por comissão de pelo menos 3 servidores efetivos ou empregados públicos dos quadros permanentes, admitida a contratação de profissionais para assessoria técnica. Esses profissionais assinam termo de confidencialidade e não podem exercer atividades que gerem conflito de interesses.",
      },
      {
        parte: "22. Critérios: menor preço, maior desconto e melhor técnica",
        termo: "Critérios de julgamento (art. 33)",
        faz: "São seis: I – menor preço; II – maior desconto; III – melhor técnica ou conteúdo artístico; IV – técnica e preço; V – maior lance, no caso de leilão; VI – maior retorno econômico.",
      },
      {
        termo: "Menor preço e maior desconto (art. 34)",
        faz: "São critérios de menor dispêndio para a Administração, desde que atendidos os parâmetros mínimos de qualidade do edital. Menor preço: vence o valor mais baixo. Maior desconto: vence o maior desconto sobre um preço de referência. Qualidade acima do mínimo não dá ponto extra.",
        pista: "São os únicos critérios do pregão e também cabem na concorrência. A regra do menor dispêndio vale também, quando couber, na técnica e preço.",
      },
      {
        termo: "Ciclo de vida no menor dispêndio (art. 34, § 1º)",
        faz: "Os custos indiretos ligados ao ciclo de vida do objeto (manutenção, utilização, reposição, depreciação e impacto ambiental, entre outros) podem entrar no cálculo do menor dispêndio, sempre que puderem ser medidos de forma objetiva, conforme regulamento.",
      },
      {
        termo: "Desconto vale nos aditivos (art. 34, § 2º)",
        faz: "No maior desconto, a referência é o preço global fixado no edital, e o desconto oferecido se estende aos eventuais termos aditivos do contrato.",
      },
      {
        termo: "Melhor técnica ou conteúdo artístico (art. 35)",
        faz: "Considera só as propostas técnicas ou artísticas; o preço não entra. O edital define o prêmio ou a remuneração dos vencedores. Serve para projetos e trabalhos de natureza técnica, científica ou artística.",
        pista: "Cabe no concurso e na concorrência. Nos arts. 37 e 38, a lei fala só em melhor técnica.",
      },
      {
        parte: "23. Técnica e preço e regras da pontuação técnica",
        termo: "Técnica e preço (art. 36)",
        faz: "Pondera as notas da proposta técnica e da proposta de preço, conforme pesos do edital. É escolhido quando o estudo técnico preliminar mostra que a qualidade acima do mínimo é relevante, nas contratações de: I – serviços técnicos especializados de natureza predominantemente intelectual (uso preferencial); II – serviços que dependem de tecnologia sofisticada e de domínio restrito; III – bens e serviços especiais de TIC; IV – obras e serviços especiais de engenharia; V – objetos que admitam soluções alternativas e variações de execução com impacto mensurável na qualidade, produtividade, rendimento e durabilidade.",
        pista: "Peso máximo da técnica: 70% (art. 36, § 2º); para o preço não há limite. O desempenho em contratos anteriores com a Administração deve contar na nota técnica (§ 3º). Modalidade: concorrência.",
      },
      {
        termo: "Como se calcula a técnica e preço",
        faz: "Cada licitante recebe nota técnica e nota de preço, que são multiplicadas pelos pesos do edital e somadas.",
        pista: "Exemplo com técnica 60% e preço 40%: A tem técnica 90 e preço 70: 54 + 28 = 82. B tem técnica 75 e preço 100: 45 + 40 = 85. B vence, mesmo com técnica menor.",
      },
      {
        termo: "Como se pontua a técnica (art. 37)",
        faz: "Na melhor técnica e na técnica e preço, a nota técnica considera: I – capacidade e experiência do licitante, provadas por atestados de obras, produtos ou serviços já realizados; II – notas a quesitos qualitativos dadas por banca, conforme o edital: conhecimento do objeto, metodologia e programa de trabalho, qualificação das equipes e produtos a entregar; III – notas pelo desempenho em contratações anteriores, apurado nos documentos da fiscalização (art. 88, § 3º) e no registro cadastral unificado do PNCP (art. 87).",
      },
      {
        termo: "Banca de avaliação (art. 37, § 1º)",
        faz: "A banca tem no mínimo 3 membros e pode ser formada por: a) servidores efetivos ou empregados públicos dos quadros permanentes; b) profissionais contratados por conhecimento técnico, experiência ou renome, com trabalho supervisionado pelos agentes responsáveis pela licitação.",
        pista: "A banca não é o agente de contratação nem a comissão: só dá notas aos quesitos técnicos.",
      },
      {
        termo: "Quem pontuou executa (art. 38)",
        faz: "Na melhor técnica ou na técnica e preço, se a empresa ganhou pontos pela capacitação de um profissional, ele deve participar de forma direta e pessoal da execução do contrato.",
        pista: "Exemplo: a empresa pontua com um especialista renomado. Ele não pode mandar um auxiliar no lugar dele na hora de executar o serviço.",
      },
      {
        termo: "Serviços técnicos acima de R$ 300 mil (art. 37, § 2º)",
        faz: "Fora da inexigibilidade, nos serviços técnicos especializados de: a) estudos técnicos, planejamentos, projetos básicos e executivos; d) fiscalização, supervisão e gerenciamento de obras e serviços; h) controles de qualidade e tecnológico, análises, testes, ensaios, instrumentação e monitoramento de obras e do meio ambiente — com valor estimado acima de R$ 300 mil, o julgamento é só por melhor técnica ou por técnica e preço na proporção de 70% para a técnica.",
        pista: "Aqui é exatamente 70% para a técnica e 30% para o preço, e não até 70%. As alíneas são do art. 6º, XVIII. O valor é atualizado todo ano (parte 25).",
      },
      {
        parte: "24. Maior retorno econômico, maior lance e quadro geral",
        termo: "Maior retorno econômico (art. 39)",
        faz: "Usado só no contrato de eficiência. Vence quem gerar a maior economia para a Administração. A remuneração é um percentual que incide de forma proporcional à economia efetivamente obtida. Modalidade: concorrência.",
      },
      {
        termo: "Contrato de eficiência (art. 6º, LIII)",
        faz: "É o contrato de prestação de serviços, que pode incluir obras e fornecimento de bens, para gerar economia ao contratante, com redução de despesas correntes. O contratado é pago com base em percentual da economia gerada.",
      },
      {
        termo: "Propostas e cálculo do retorno (art. 39, §§ 1º a 3º)",
        faz: "O licitante apresenta: I – proposta de trabalho, com as obras, serviços ou bens e seus prazos e a economia estimada (em unidade de medida e em dinheiro); II – proposta de preço, que é um percentual sobre a economia estimada, expresso em dinheiro. O edital traz parâmetros objetivos para medir a economia. Retorno econômico = economia estimada menos a proposta de preço.",
        pista: "Exemplo: A promete economia de R$ 200 mil e cobra R$ 60 mil: retorno de R$ 140 mil. B promete R$ 150 mil e cobra R$ 30 mil: retorno de R$ 120 mil. A vence.",
      },
      {
        termo: "Se a economia não vier (art. 39, § 4º)",
        faz: "I – a diferença entre a economia contratada e a efetivamente obtida é descontada da remuneração do contratado; II – se essa diferença passar do limite máximo do contrato, o contratado ainda fica sujeito a outras sanções.",
      },
      {
        termo: "Maior lance",
        faz: "É o critério exclusivo do leilão: o leilão só admite maior lance, e o maior lance só cabe no leilão. Vence quem oferecer o maior valor pelo bem.",
        pista: "Exemplo: no leilão de um carro inservível, fica com o veículo quem der o lance mais alto.",
      },
      {
        termo: "Critério do diálogo competitivo",
        faz: "A lei não fixa um critério para o diálogo competitivo. O vencedor é escolhido pelos critérios divulgados no início da fase competitiva (art. 32, § 1º, X).",
      },
      {
        termo: "Quadro: modalidade × critério",
        faz: "Pregão: menor preço ou maior desconto. Concorrência: menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço e maior retorno econômico. Concurso: melhor técnica ou conteúdo artístico. Leilão: maior lance. Diálogo competitivo: critérios divulgados no início da fase competitiva.",
      },
      {
        parte: "25. Valores da lei e atualização anual",
        termo: "Atualização dos valores (art. 182)",
        faz: "Todo dia 1º de janeiro, o Poder Executivo federal atualiza os valores da lei pelo IPCA-E (ou índice que o substitua), com divulgação no PNCP. Em 2026 vale o Decreto 12.807/2025 (que revogou o Decreto 12.343/2024).",
        pista: "As questões costumam usar o valor escrito na lei. Uma nova tabela deve sair no fim de cada ano; confira a do ano da prova.",
      },
      {
        termo: "Tabela de valores (lei → 2026)",
        faz: "Grande vulto (art. 6º, XXII): acima de R$ 200 milhões → R$ 261.968.421,04. Serviços técnicos com melhor técnica ou técnica e preço 70/30 (art. 37, § 2º): R$ 300 mil → R$ 392.952,63. Dispensa de documentos para produto de pesquisa e desenvolvimento (art. 70, III): R$ 300 mil → R$ 392.952,63. Dispensa para obras, serviços de engenharia e manutenção de veículos (art. 75, I): R$ 100 mil → R$ 130.984,20. Dispensa para outros serviços e compras (art. 75, II): R$ 50 mil → R$ 65.492,11.",
      },
      {
        termo: "Tabela de valores (continuação)",
        faz: "Dispensa para produto de pesquisa e desenvolvimento, em obras e serviços de engenharia (art. 75, IV, c): R$ 300 mil → R$ 392.952,63. Manutenção de veículos fora da regra do § 1º (art. 75, § 7º): R$ 8 mil → R$ 10.478,74. Contrato verbal para pequenas compras ou serviços de pronto pagamento (art. 95, § 2º): R$ 10 mil → R$ 13.098,41. Regime simplificado de convênios da União (art. 184-A): R$ 1,5 milhão → R$ 1.646.430,90.",
        pista: "Em 2025 (Decreto 12.343/2024) os valores eram: R$ 250.902.323,87; R$ 376.353,48; R$ 125.451,15; R$ 62.725,59; R$ 10.036,10; R$ 12.545,11.",
      },
    ],
    cuidado:
      "No art. 7º a escolha de servidor efetivo é preferencial. No agente de contratação (art. 8º) ela é obrigatória. A modalidade se escolhe pelo objeto, não pelo valor. Pregão só julga por menor preço ou maior desconto; leilão só por maior lance. Na técnica e preço, a técnica vale até 70%, mas nos serviços técnicos do art. 37, § 2º, vale exatamente 70%. Estatal licita, mas pela Lei 13.303.",
  },
  questoes: [
    {
      topico: "Âmbito da lei",
      subassunto: "Estatais",
      dificuldade: 4,
      raciocinio: "Estatal tem lei própria. A Lei 14.133 só entra pelo art. 178.",
      enunciado:
        "Uma empresa pública federal abre disputa para comprar pneus para seus veículos. Quanto à norma que rege essa contratação, aplica-se",
      alternativas: [
        "a Lei 13.303/2016, pois as estatais têm regime licitatório próprio",
        "a Lei 14.133/2021, pois ela alcança toda a Administração indireta",
        "a Lei 8.666/1993, ainda em vigor para as empresas estatais",
        "só o regulamento interno, sem nenhuma lei sobre o tema",
        "o direito privado puro, pois a empresa atua no mercado",
      ],
      correta: 0,
      explicacao: "O art. 1º, § 1º, da Lei 14.133 deixa fora as empresas públicas, as sociedades de economia mista e suas subsidiárias, regidas pela Lei 13.303/2016, ressalvado o art. 178 (crimes).",
      explicacaoErradas:
        "“toda a Administração indireta” esquece a exclusão das estatais. “Lei 8.666/1993” foi revogada. “regulamento interno” existe, mas abaixo da lei. “direito privado puro” ignora o art. 173, § 1º, III, da CF.",
      pegadinha: "Ler “Administração indireta” e incluir as estatais.",
      conhecimento: "Pela lei, autarquias e fundações públicas seguem a Lei 14.133.",
    },
    {
      topico: "Princípios",
      subassunto: "Segregação de funções",
      dificuldade: 5,
      raciocinio: "Quem faz não deve ser quem confere, nas funções de risco.",
      enunciado:
        "Em contratação de alto risco, o mesmo servidor faz a pesquisa de preços, julga as propostas e fiscaliza o contrato. A prática afronta diretamente, nos termos da Lei 14.133,",
      alternativas: [
        "o princípio da competitividade, pois restringe os licitantes",
        "o princípio do julgamento objetivo, que afasta a pesquisa",
        "o princípio da celeridade, pois concentra todo o trabalho",
        "o princípio do planejamento, pois falta plano de contratação",
        "a segregação de funções, que impede acumular áreas de risco",
      ],
      correta: 4,
      explicacao: "O art. 7º, § 1º, veda designar o mesmo agente para funções mais suscetíveis a riscos, para reduzir a chance de erro e de fraude.",
      explicacaoErradas:
        "“competitividade” trata da disputa entre licitantes. “julgamento objetivo” trata do critério do edital. “celeridade” liga-se ao tempo, e a concentração nem atrasaria. “planejamento” não é a falha descrita.",
      pegadinha: "Pensar que acumular tarefas é só problema de organização.",
      conhecimento: "A segregação de funções aparece no art. 5º como princípio expresso.",
    },
    {
      topico: "Objetivos",
      subassunto: "Ciclo de vida",
      dificuldade: 4,
      raciocinio: "Menor dispêndio não é só o menor preço de compra.",
      enunciado:
        "Numa licitação de viaturas, o edital considera também consumo, manutenção e reposição, com critérios mensuráveis. Essa previsão, pela Lei 14.133,",
      alternativas: [
        "é vedada, pois o julgamento por menor preço só olha o valor da nota",
        "é admitida, pois o menor dispêndio pode considerar o ciclo de vida",
        "exige o critério de técnica e preço, em qualquer caso",
        "só seria possível em diálogo competitivo, por ser inovação",
        "depende de autorização prévia do Tribunal de Contas",
      ],
      correta: 1,
      explicacao: "O art. 34, § 1º, permite considerar custos indiretos ligados ao ciclo de vida, se forem objetivamente mensuráveis. O art. 11, I, inclui o ciclo de vida no objetivo de contratar melhor.",
      explicacaoErradas:
        "“só olha o valor da nota” contraria o art. 34. “técnica e preço” não é exigência para isso. “diálogo competitivo” não tem relação com o caso. “autorização prévia” não está prevista.",
      pegadinha: "Reduzir o menor preço ao valor nominal da proposta.",
      conhecimento: "Essa consideração depende de regulamento e de critério objetivo.",
    },
    {
      topico: "Agentes",
      subassunto: "Agente de contratação",
      dificuldade: 5,
      raciocinio: "Art. 7º: preferencialmente. Art. 8º: entre efetivos ou empregados dos quadros permanentes.",
      enunciado:
        "A autoridade designa como agente de contratação um servidor ocupante apenas de cargo em comissão, com ótima formação na área. Pela Lei 14.133, a designação é",
      alternativas: [
        "válida, pois a lei só pede servidor efetivo como preferência",
        "válida, desde que ele tenha curso de licitações reconhecido",
        "válida, se a equipe de apoio for formada por servidores efetivos",
        "inválida, pois o cargo em comissão impede toda atuação em licitação",
        "inválida, pois exige servidor efetivo ou empregado permanente",
      ],
      correta: 4,
      explicacao: "O art. 8º diz que o agente de contratação é designado entre servidores efetivos ou empregados públicos dos quadros permanentes.",
      explicacaoErradas:
        "“como preferência” é a regra geral do art. 7º, e não a do agente de contratação. “curso” e “equipe de apoio” não suprem o requisito. “toda atuação” exagera, pois a vedação é só para essa função.",
      pegadinha: "Levar o “preferencialmente” do art. 7º para o art. 8º.",
      conhecimento: "No pregão, o agente responsável pela condução se chama pregoeiro.",
    },
    {
      topico: "Agentes",
      subassunto: "Comissão de contratação",
      dificuldade: 5,
      raciocinio: "Comissão responde junto, salvo quem divergiu e registrou.",
      enunciado:
        "Uma comissão de contratação de três membros aprova por maioria um ato irregular. O membro vencido registrou em ata sua divergência, com fundamentos. Pela Lei 14.133, a responsabilidade é",
      alternativas: [
        "solidária entre os membros, salvo quem divergiu em ata",
        "individual de cada membro, na medida da sua conduta",
        "apenas do presidente, por ser ele quem conduz a sessão",
        "solidária entre todos, sem nenhuma ressalva possível",
        "apenas da autoridade que homologou a licitação irregular",
      ],
      correta: 0,
      explicacao: "Pelo art. 8º, § 2º, os membros da comissão respondem solidariamente, salvo aquele com posição divergente fundamentada e registrada em ata.",
      explicacaoErradas:
        "“individual” é a regra do agente de contratação. “presidente” e “autoridade” não concentram a responsabilidade. “sem nenhuma ressalva” esquece o voto vencido registrado.",
      pegadinha: "Trocar a responsabilidade individual do agente pela solidária da comissão.",
      conhecimento: "A comissão tem no mínimo 3 membros e pode substituir o agente em bens ou serviços especiais.",
    },
    {
      topico: "Modalidades",
      subassunto: "Pregão e concorrência",
      dificuldade: 4,
      raciocinio: "Obra nunca vai a pregão. Serviço comum de engenharia pode ir.",
      enunciado:
        "O órgão quer construir um posto de fiscalização novo e, em outra disputa, contratar manutenção rotineira e padronizada de telhados, classificada como serviço comum de engenharia. Pela Lei 14.133,",
      alternativas: [
        "as duas disputas exigem concorrência, pois há engenharia",
        "as duas disputas admitem pregão, pelo baixo valor",
        "a obra vai a concurso, e a manutenção vai a leilão",
        "a obra exige concorrência, e a manutenção admite pregão",
        "a obra admite pregão, e a manutenção exige diálogo competitivo",
      ],
      correta: 3,
      explicacao: "O art. 29, parágrafo único, afasta o pregão de obras e de serviços de engenharia, exceto os serviços comuns de engenharia do art. 6º, XXI, “a”.",
      explicacaoErradas:
        "“exigem concorrência” esquece a exceção do serviço comum. “baixo valor” não define modalidade. “concurso” e “leilão” têm outro objeto. “obra admite pregão” contraria a lei.",
      pegadinha: "Achar que toda engenharia afasta o pregão.",
      conhecimento: "A modalidade agora depende do objeto, e não do valor.",
    },
    {
      topico: "Modalidades",
      subassunto: "Diálogo competitivo",
      dificuldade: 5,
      raciocinio: "A Administração sabe a necessidade, mas não a solução.",
      enunciado:
        "A PRF precisa de um sistema inovador para detectar cargas ocultas, e nenhuma solução do mercado atende sem adaptação. A especificação precisa ainda não é possível. A modalidade indicada e uma regra dela são",
      alternativas: [
        "pregão, com disputa de lances em sessão pública eletrônica",
        "diálogo competitivo, com prazo mínimo de 25 dias úteis",
        "concurso, com prêmio ao autor do melhor trabalho técnico",
        "concorrência, com prazo curto para resposta das empresas",
        "leilão, com seleção da empresa que der o maior lance",
      ],
      correta: 1,
      explicacao: "O art. 32 prevê o diálogo para inovação tecnológica ou técnica, necessidade de adaptar soluções do mercado e impossibilidade de definir especificações com precisão. O § 1º, I, fixa ao menos 25 dias úteis.",
      explicacaoErradas:
        "“pregão” pede padrão definido de forma objetiva. “concurso” escolhe trabalho técnico ou artístico pronto. “concorrência” parte de objeto já especificado. “leilão” serve para alienar.",
      pegadinha: "Usar concorrência só porque o objeto é complexo.",
      conhecimento: "Depois dos diálogos, abre-se fase competitiva com propostas sobre a solução escolhida.",
    },
    {
      topico: "Critérios de julgamento",
      subassunto: "Leilão",
      dificuldade: 5,
      raciocinio: "Quem vende pelo maior lance pode escolher leiloeiro pelo maior desconto na comissão.",
      enunciado:
        "A União vai alienar veículos legalmente apreendidos e opta por usar leiloeiro oficial. Pela Lei 14.133, o leiloeiro será selecionado",
      alternativas: [
        "por sorteio entre os inscritos na junta comercial",
        "por concorrência, com critério de melhor técnica",
        "por credenciamento ou pregão, com o maior desconto",
        "por livre escolha da autoridade, sem nenhum processo",
        "por leilão, com o critério de maior lance pelo serviço",
      ],
      correta: 2,
      explicacao: "O art. 31, § 1º, manda selecionar o leiloeiro por credenciamento ou por pregão, com critério de maior desconto para as comissões.",
      explicacaoErradas:
        "“sorteio” e “livre escolha” não constam da lei. “melhor técnica” não é o critério previsto. “maior lance” é critério do leilão de bens, e não da escolha do leiloeiro.",
      pegadinha: "Levar o maior lance para a seleção do leiloeiro.",
      conhecimento: "O leilão também pode ser feito por servidor designado.",
    },
  ],
};
