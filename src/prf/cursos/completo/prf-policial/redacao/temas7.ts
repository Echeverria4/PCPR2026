import type { TemaPrf } from "./tipos";

/** Bloco 5: tecnologia, cidade e cidadania (temas pedidos em 20/11/2026). */
export const TEMAS_7: TemaPrf[] = [
  {
    n: 17,
    bloco: 5,
    recorte: "Drones no crime organizado e sistemas antidrones",
    contexto:
      "Drones baratos e fáceis de pilotar passaram a ser usados por organizações criminosas para vigiar viaturas, observar áreas de fronteira e lançar celulares e drogas dentro de presídios. O Ministério da Justiça e Segurança Pública tem entregado drones e sistemas antidrones às forças de segurança dos estados, mas o controle desses aparelhos ainda é um desafio.",
    tema: "O emprego de veículos aéreos não tripulados pelo crime organizado e a modernização tecnológica das forças de segurança.",
    aspectos: [
      "as vantagens que os drones oferecem às organizações criminosas;",
      "os limites da resposta do Estado diante dessa nova tecnologia;",
      "a integração das forças de segurança e o controle sobre a venda e o registro dos drones.",
    ],
    paragrafos: [
      "A popularização dos veículos aéreos não tripulados, conhecidos como drones, transformou atividades civis, **mas também** abriu uma nova frente de atuação para organizações criminosas no Brasil. Hoje, facções empregam esses aparelhos para monitorar viaturas, vigiar áreas de fronteira e lançar objetos ilícitos dentro de presídios. **Esse cenário** exige analisar as vantagens que o crime obtém, os limites da resposta estatal e os caminhos para controlar essa ameaça.",
      "**Em primeiro lugar**, o baixo custo e a facilidade de pilotagem tornaram os drones ferramentas estratégicas para o crime. **Enquanto** as equipes policiais avançam por terra, criminosos acompanham do alto a movimentação das patrulhas e antecipam rotas de fuga. **Nesse sentido**, a vigilância aérea clandestina reduz o fator surpresa das operações e amplia os riscos enfrentados pelos agentes.",
      "**Além disso**, a resposta do Estado precisa acompanhar a velocidade da inovação. A entrega de drones e de sistemas antidrones às forças de segurança pelo Ministério da Justiça e Segurança Pública representa um avanço, **mas** ainda esbarra na extensão das fronteiras e na dificuldade de vigiar o espaço aéreo. **Assim**, sem rastreamento eficaz, aparelhos irregulares circulam sem que se saiba quem os opera.",
      "**Por fim**, enfrentar essa ameaça depende de integração e de regulação. O Sistema Único de Segurança Pública permite compartilhar equipamentos, dados e treinamento entre polícias estaduais e federais, **ao passo que** o controle do espaço aéreo, a cargo do DECEA, e o cadastro das aeronaves, a cargo da ANAC, podem ser reforçados com regras mais rígidas de venda e de registro. **Desse modo**, cada aparelho passa a ter um responsável identificável.",
      "**Portanto**, cabe ao Ministério da Justiça e Segurança Pública ampliar a distribuição de sistemas antidrones e capacitar os policiais para esse enfrentamento. **Paralelamente**, os órgãos reguladores devem endurecer o controle sobre os drones, **para que** a tecnologia sirva à proteção da sociedade, **e não** ao crime.",
    ],
    repertorio: [
      "Art. 144 da Constituição: a segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio.",
      "Lei 13.675/2018: institui o Sistema Único de Segurança Pública (SUSP), com atuação integrada, compartilhamento de informações e operações conjuntas.",
      "DECEA (Departamento de Controle do Espaço Aéreo): define as regras de uso do espaço aéreo pelos drones; a ANAC (Agência Nacional de Aviação Civil) cuida do cadastro das aeronaves não tripuladas.",
      "Art. 349-A do Código Penal: pune quem ingressa, promove, intermedeia, auxilia ou facilita a entrada de celular, rádio ou aparelho similar em estabelecimento prisional, sem autorização legal; detenção de 3 meses a 1 ano.",
      "Ministério da Justiça e Segurança Pública: entrega de drones e de sistemas antidrones às forças de segurança e aos sistemas prisionais dos estados.",
    ],
    conectivos: ["mas também", "Esse cenário", "Em primeiro lugar", "Enquanto", "Nesse sentido", "Além disso", "mas", "Assim", "Por fim", "ao passo que", "Desse modo", "Portanto", "Paralelamente", "para que", "e não"],
  },
  {
    n: 18,
    bloco: 5,
    recorte: "Reconhecimento facial e inteligência artificial no policiamento",
    contexto:
      "Câmeras com reconhecimento facial e sistemas de inteligência artificial passaram a ser usados por polícias de várias cidades e em grandes eventos para localizar foragidos e veículos roubados. Estudos, porém, apontam mais erros na identificação de pessoas negras, e o Congresso discute regras para o uso da inteligência artificial no país.",
    tema: "O uso de inteligência artificial e de reconhecimento facial na segurança pública: eficiência operacional versus garantias fundamentais.",
    aspectos: [
      "os ganhos dessas ferramentas para a prevenção e a investigação;",
      "os riscos de erro e de discriminação produzidos pelos algoritmos;",
      "a supervisão humana e a transparência como condições para o uso dessa tecnologia.",
    ],
    nota: "Situação em 20/11/2026: o PL 2.338/2023, que regula a inteligência artificial, foi aprovado pelo Senado em dezembro de 2024 e segue em análise na Câmara dos Deputados; ainda não é lei. Antes da prova, confira se ele foi aprovado e qual é o texto final.",
    paragrafos: [
      "Câmeras inteligentes ligadas a sistemas de reconhecimento facial passaram a integrar cercos eletrônicos e grandes eventos em diversas cidades brasileiras. **Embora** a inteligência artificial acelere a identificação de foragidos e de veículos roubados, seu uso na segurança pública gera intenso debate jurídico. **Esse dilema** exige analisar os ganhos da tecnologia, os riscos de erro e as condições para usá-la sem violar direitos fundamentais.",
      "**Por um lado**, as ferramentas de análise automatizada ampliam a capacidade preventiva e investigativa das polícias. Ao comparar milhares de imagens em segundos, o sistema otimiza o emprego do efetivo, permite abordagens mais precisas e fortalece o compartilhamento de dados previsto no Sistema Único de Segurança Pública. **Nesse contexto**, a tecnologia funciona como multiplicadora de força no combate à criminalidade.",
      "**Por outro lado**, a confiança cega nos algoritmos pode produzir graves injustiças. Estudos apontam que bases de treinamento pouco diversas elevam os falsos positivos contra pessoas negras, **o que** já resultou em abordagens e prisões indevidas. **Não por acaso**, a Lei Geral de Proteção de Dados classifica a biometria como dado sensível, e o Projeto de Lei 2.338/2023, aprovado pelo Senado, proíbe, como regra, a identificação biométrica à distância e em tempo real em espaços públicos, salvo exceções como a busca de foragidos e de desaparecidos.",
      "**Por isso**, o uso dessas ferramentas depende de supervisão humana e de transparência. Um alerta do sistema deve ser tratado como indício a ser conferido pelo policial, **e não** como prova suficiente para uma detenção. **Além disso**, auditorias periódicas permitem medir os erros e corrigir distorções, **de modo que** o respeito ao devido processo legal acompanhe a inovação.",
      "**Dessa forma**, cabe às secretarias de segurança e às corporações policiais adotar protocolos de auditoria e exigir revisão humana obrigatória antes de qualquer abordagem baseada em alertas digitais. **Somente** com transparência a inovação fortalecerá a segurança sem comprometer a cidadania.",
    ],
    repertorio: [
      "Art. 5º, II, da Lei 13.709/2018 (LGPD): o dado biométrico é dado pessoal sensível.",
      "Art. 4º, III e § 1º, da LGPD: a lei não se aplica ao tratamento de dados feito exclusivamente para segurança pública e investigação de crimes, que será regido por lei específica, com medidas proporcionais e estritamente necessárias e respeito aos princípios da LGPD.",
      "PL 2.338/2023 (texto aprovado pelo Senado): proíbe, como regra, a identificação biométrica à distância e em tempo real em espaços acessíveis ao público, com exceções como a recaptura de foragidos, o cumprimento de mandados de prisão, a busca de pessoas desaparecidas e o flagrante de crimes com pena máxima acima de 2 anos.",
      "Art. 5º, LIV e LXXIX, da Constituição: ninguém será privado da liberdade ou de seus bens sem o devido processo legal; é assegurado o direito à proteção dos dados pessoais, inclusive nos meios digitais.",
      "Lei 13.675/2018: institui o SUSP, com integração e compartilhamento de informações entre os órgãos de segurança.",
    ],
    conectivos: ["Embora", "Esse dilema", "Por um lado", "Nesse contexto", "Por outro lado", "o que", "Não por acaso", "Por isso", "e não", "Além disso", "de modo que", "Dessa forma", "Somente"],
  },
  {
    n: 19,
    bloco: 5,
    recorte: "Patinetes, bicicletas elétricas e ciclomotores no trânsito",
    contexto:
      "Bicicletas elétricas, patinetes e ciclomotores se espalharam pelas cidades e pelos trechos urbanos das rodovias como forma rápida e barata de deslocamento. A Resolução 996/2023 do Contran separou esses veículos em categorias: o ciclomotor precisa de registro, emplacamento e habilitação, e o prazo para regularizar os que já circulavam terminou em 31/12/2025.",
    tema: "A expansão dos veículos elétricos leves e os desafios para a segurança viária e a fiscalização no Brasil.",
    aspectos: [
      "os riscos da convivência desordenada entre veículos elétricos leves, pedestres e automóveis;",
      "os obstáculos à fiscalização desses veículos;",
      "o papel da educação para o trânsito e da infraestrutura adequada.",
    ],
    paragrafos: [
      "Bicicletas elétricas, patinetes e ciclomotores multiplicaram-se nas ruas e nos trechos urbanos das rodovias como alternativas rápidas e econômicas de deslocamento. **Contudo**, esse crescimento não foi acompanhado, na mesma proporção, pela adequação da infraestrutura nem pelo cumprimento das normas de trânsito. **Tal descompasso** compromete a segurança viária e torna necessário discutir os riscos, a fiscalização e a prevenção.",
      "**Em primeiro lugar**, a convivência desordenada entre veículos tão diferentes eleva o risco de sinistros graves. Muitos condutores trafegam em velocidade incompatível por calçadas e ciclovias, colocam pedestres em perigo ou entram em rodovias sem os equipamentos obrigatórios. **Nesse sentido**, a falsa ideia de que veículos silenciosos e compactos dispensam regras amplia a vulnerabilidade de quem conduz e de quem caminha.",
      "**Além disso**, a fiscalização enfrenta obstáculos práticos. **Embora** a Resolução 996/2023 do Contran tenha diferenciado os equipamentos autopropelidos e as bicicletas elétricas dos ciclomotores e reforçado, para estes, a exigência de registro, emplacamento e habilitação, muitos usuários desconhecem as regras ou alteram os limitadores de velocidade. **Assim**, a falta de identificação de muitos veículos dificulta responsabilizar o condutor pelas infrações.",
      "**Por fim**, a fiscalização sozinha não basta. Campanhas nas escolas e nos meios de comunicação ajudam a mostrar que o ciclomotor exige placa e habilitação, **ao passo que** ciclovias contínuas e bem sinalizadas reduzem a disputa por espaço com carros e pedestres. **Dessa maneira**, a mobilidade sustentável deixa de ser sinônimo de risco.",
      "**Portanto**, cabe aos órgãos de trânsito e às polícias intensificar a fiscalização nos corredores urbanos e nas travessias rodoviárias, aplicando as sanções do Código de Trânsito Brasileiro. **Paralelamente**, prefeituras e escolas devem investir em educação e em ciclovias seguras, alinhando a mobilidade sustentável às metas do Plano Nacional de Redução de Mortes e Lesões no Trânsito.",
    ],
    repertorio: [
      "Resolução Contran 996/2023: separa equipamento autopropelido, bicicleta elétrica (até 32 km/h e motor de até 1.000 W) e ciclomotor (até 50 km/h; se elétrico, até 4 kW); o ciclomotor exige registro, licenciamento, emplacamento e ACC ou habilitação na categoria A.",
      "Art. 57 do CTB: o ciclomotor deve circular pela direita da pista, de preferência no centro da faixa mais à direita ou no bordo direito quando não houver acostamento ou faixa própria; é proibido nas vias de trânsito rápido e sobre as calçadas das vias urbanas.",
      "Arts. 162, I, e 230, V, do CTB: dirigir sem habilitação e conduzir veículo sem registro e licenciamento são infrações gravíssimas.",
      "Lei 13.614/2018: cria o Plano Nacional de Redução de Mortes e Lesões no Trânsito (PNATRANS), com metas no art. 326-A do CTB.",
    ],
    conectivos: ["Contudo", "Tal descompasso", "Em primeiro lugar", "Nesse sentido", "Além disso", "Embora", "Assim", "Por fim", "ao passo que", "Dessa maneira", "Portanto", "Paralelamente"],
  },
  {
    n: 20,
    bloco: 5,
    recorte: "Ataques cibernéticos contra infraestruturas críticas",
    contexto:
      "Energia elétrica, bancos, telecomunicações, portos e hospitais dependem de sistemas digitais conectados. Um ataque cibernético contra esses serviços, chamados de infraestruturas críticas, pode paralisar parte do país em minutos. O Brasil tem uma Política Nacional de Cibersegurança desde 2023, mas ainda faltam especialistas e troca rápida de alertas.",
    tema: "A vulnerabilidade das infraestruturas críticas aos ataques cibernéticos e os desafios para a soberania nacional.",
    aspectos: [
      "a relação entre a segurança digital e a soberania do país;",
      "a cooperação entre o poder público e as empresas que operam serviços essenciais;",
      "a formação de policiais e de especialistas em crimes cibernéticos.",
    ],
    paragrafos: [
      "Redes de energia elétrica, sistemas bancários, telecomunicações e corredores logísticos funcionam hoje integrados por plataformas digitais. Essa conexão trouxe eficiência, **mas também** expôs as chamadas infraestruturas críticas a ataques capazes de paralisar serviços essenciais em minutos. **Esse quadro decorre da** sofisticação das ameaças digitais e da falta de prevenção integrada, **o que** exige discutir soberania, cooperação e capacitação.",
      "**Em primeiro lugar**, a sabotagem digital deixou de ser apenas um problema técnico para se tornar questão de soberania nacional. Uma invasão aos sistemas de controle de hidrelétricas, portos ou hospitais compromete a ordem pública e a vida de milhões de pessoas sem que um único disparo seja feito. **Nesse contexto**, a vulnerabilidade cibernética abre caminho para crimes transnacionais e extorsões em larga escala.",
      "**Além disso**, a proteção dessas estruturas exige atuação conjunta do governo e da iniciativa privada, **já que** grande parte dos serviços essenciais é operada por concessionárias. **Embora** o Brasil conte com a Política Nacional de Cibersegurança e com penas mais duras para crimes digitais desde a Lei 14.155/2021, a resposta a incidentes ainda sofre com o compartilhamento tardio de alertas entre órgãos públicos e empresas.",
      "**Por fim**, o enfrentamento depende de gente preparada. A escassez de especialistas atinge também as polícias, que precisam investigar invasões, rastrear o dinheiro das extorsões e preservar provas digitais. **Assim**, investir na formação contínua em perícia e inteligência cibernética é tão importante quanto comprar equipamentos.",
      "**Logo**, é indispensável que o governo federal fortaleça os centros de resposta a incidentes cibernéticos e exija auditorias periódicas das concessionárias de serviços públicos. **Somado a isso**, as polícias devem investir em perícia digital, garantindo que a soberania do país seja protegida **tanto** no território físico **quanto** no espaço digital.",
    ],
    repertorio: [
      "Decreto 11.856/2023: institui a Política Nacional de Cibersegurança (PNCiber) e o Comitê Nacional de Cibersegurança.",
      "Decreto 9.573/2018: Política Nacional de Segurança de Infraestruturas Críticas; define essas infraestruturas como instalações, serviços, bens e sistemas cuja interrupção ou destruição provoque sério impacto social, ambiental, econômico, político, internacional ou à segurança do Estado e da sociedade.",
      "Decreto 10.569/2020: aprova a Estratégia Nacional de Segurança de Infraestruturas Críticas.",
      "Lei 14.155/2021: aumentou a pena da invasão de dispositivo informático (art. 154-A do Código Penal) e criou formas mais graves de furto e de estelionato praticados por meio eletrônico.",
      "Art. 265 do Código Penal: atentar contra a segurança ou o funcionamento de serviço de água, luz, força, calor ou outro de utilidade pública; reclusão de 1 a 5 anos e multa.",
    ],
    conectivos: ["mas também", "Esse quadro decorre da", "o que", "Em primeiro lugar", "Nesse contexto", "Além disso", "já que", "Embora", "Por fim", "Assim", "Logo", "Somado a isso", "tanto... quanto"],
  },
  {
    n: 21,
    bloco: 5,
    recorte: "Justiça climática e adaptação das cidades",
    contexto:
      "Em novembro de 2025, o Brasil sediou em Belém a COP 30, a conferência da ONU sobre mudança do clima. Nas cidades, enchentes, deslizamentos e ondas de calor atingem com mais força as famílias pobres, que muitas vezes moram em encostas e à beira de rios. Justiça climática é a ideia de que quem mais sofre com o clima deve ser protegido primeiro.",
    tema: "Os desafios da justiça climática e da adaptação urbana diante do agravamento dos eventos extremos no Brasil.",
    aspectos: [
      "a relação entre a desigualdade social e a exposição aos desastres;",
      "a falta de prevenção e de planejamento nos municípios;",
      "a atuação integrada do poder público na adaptação das cidades.",
    ],
    paragrafos: [
      "A realização da 30ª Conferência das Nações Unidas sobre Mudança do Clima no Brasil colocou o debate ambiental no centro da agenda pública. **Entretanto**, nas cidades brasileiras, os impactos de enchentes, deslizamentos e ondas de calor continuam recaindo com mais força sobre as populações pobres. **Essa realidade** evidencia a urgência de promover a justiça climática por meio do planejamento urbano e da prevenção.",
      "**Em primeiro lugar**, a crise climática aprofunda desigualdades históricas no acesso à moradia. Sem condições de pagar por áreas com saneamento e drenagem, famílias de baixa renda ocupam encostas íngremes e margens de rios, tornando-se as principais vítimas de desastres anunciados. **Nesse sentido**, o descumprimento da função social da cidade, prevista no Estatuto da Cidade, transforma fenômenos naturais em tragédias sociais.",
      "**Além disso**, muitas administrações locais ainda priorizam ações emergenciais depois do desastre, **em vez de** investir na adaptação preventiva. **Embora** a Política Nacional de Proteção e Defesa Civil atribua aos municípios o dever de mapear as áreas de risco e de promover a evacuação preventiva da população, muitas cidades carecem de equipes técnicas e de planos de contingência atualizados. **Assim**, o poder público age quase sempre depois da tragédia.",
      "**Por fim**, a adaptação exige atuação integrada. Alertas por celular, obras de drenagem e moradias seguras dependem de recursos da União e dos estados, **enquanto** a resposta aos desastres envolve Defesa Civil, bombeiros e polícias, que fazem resgates e mantêm abertas as rotas de socorro, inclusive nas rodovias. **Desse modo**, a prevenção deixa de depender de um único órgão.",
      "**Portanto**, cabe aos governos federal, estaduais e municipais direcionar recursos para drenagem, moradia segura e alertas precoces nas periferias. **Afinal**, assegurar o meio ambiente ecologicamente equilibrado, como determina o art. 225 da Constituição, exige proteger primeiro quem está mais exposto aos efeitos do clima.",
    ],
    repertorio: [
      "COP 30: Conferência das Nações Unidas sobre Mudança do Clima realizada em Belém, em novembro de 2025.",
      "Art. 225 da Constituição: todos têm direito ao meio ambiente ecologicamente equilibrado, e cabe ao poder público e à coletividade defendê-lo e preservá-lo para as presentes e futuras gerações.",
      "Art. 182 da Constituição: a política de desenvolvimento urbano tem por objetivo ordenar o pleno desenvolvimento das funções sociais da cidade e garantir o bem-estar de seus habitantes.",
      "Lei 10.257/2001 (Estatuto da Cidade), art. 2º: a política urbana busca o pleno desenvolvimento das funções sociais da cidade e deve evitar a exposição da população a riscos de desastres (inciso VI, h).",
      "Lei 12.608/2012 (Política Nacional de Proteção e Defesa Civil): é dever da União, dos estados, do Distrito Federal e dos municípios reduzir os riscos de desastre (art. 2º); cabe aos municípios mapear as áreas de risco e promover a evacuação preventiva da população (art. 8º, IV e VII).",
    ],
    conectivos: ["Entretanto", "Essa realidade", "Em primeiro lugar", "Nesse sentido", "Além disso", "em vez de", "Embora", "Assim", "Por fim", "enquanto", "Desse modo", "Portanto", "Afinal"],
  },
  {
    n: 22,
    bloco: 5,
    recorte: "Envelhecimento da população e mobilidade segura",
    contexto:
      "O Censo 2022 do IBGE confirmou que a população brasileira envelhece rapidamente. Calçadas ruins, travessias perigosas e semáforos curtos tornam os idosos vítimas frequentes de atropelamentos, e as denúncias de negligência e de violência contra pessoas idosas continuam altas.",
    tema: "O envelhecimento da população brasileira e os desafios para a garantia de mobilidade segura e proteção social.",
    aspectos: [
      "os riscos que a pessoa idosa enfrenta no trânsito;",
      "a violência e a negligência contra a pessoa idosa;",
      "a responsabilidade da família, da sociedade e do Estado na proteção dos idosos.",
    ],
    paragrafos: [
      "Dados do Instituto Brasileiro de Geografia e Estatística confirmam que o Brasil atravessa uma acelerada transição demográfica, com forte crescimento da população acima de sessenta anos. **Apesar dessa conquista**, cidades e rodovias ainda são planejadas sobretudo para jovens e automóveis, **enquanto** casos de abandono e de violência contra idosos permanecem frequentes. **Esse cenário** exige adaptar a mobilidade e fortalecer a rede de proteção.",
      "**Em primeiro lugar**, a falta de acessibilidade expõe a pessoa idosa a riscos constantes no trânsito. Calçadas irregulares, travessias mal sinalizadas e tempos curtos de semáforo ajudam a explicar por que os idosos estão entre as vítimas mais frequentes de atropelamentos fatais, inclusive nos trechos urbanos das rodovias. **Nesse contexto**, cumprir as metas do Plano Nacional de Redução de Mortes e Lesões no Trânsito exige engenharia viária inclusiva e fiscalização da velocidade.",
      "**Além disso**, o envelhecimento digno esbarra na violação de direitos dentro e fora de casa. O Estatuto da Pessoa Idosa assegura proteção integral e prioridade no atendimento, **mas** as denúncias do Disque 100 revelam negligência, desvio de aposentadorias e maus-tratos praticados, muitas vezes, por familiares. **Assim**, o medo e a dependência dificultam a denúncia e prolongam o sofrimento silencioso.",
      "**Por fim**, a proteção da pessoa idosa é tarefa compartilhada. A Constituição atribui à família, à sociedade e ao Estado o dever de amparar os idosos, **de modo que** vizinhos, serviços de saúde e bancos também podem perceber sinais de abuso e acionar a rede de proteção. **Com isso**, a denúncia deixa de depender apenas da vítima.",
      "**Dessa forma**, cabe às prefeituras e aos órgãos de trânsito investir em travessias seguras, transporte acessível e campanhas de respeito ao pedestre idoso. **Paralelamente**, o poder público deve ampliar as delegacias especializadas e os centros de convivência, efetivando o dever constitucional de amparar quem construiu o país.",
    ],
    repertorio: [
      "Censo 2022 do IBGE: confirmou o envelhecimento acelerado da população brasileira.",
      "Lei 10.741/2003 (Estatuto da Pessoa Idosa): protege as pessoas com 60 anos ou mais; o art. 3º obriga a família, a comunidade, a sociedade e o poder público a assegurar seus direitos com absoluta prioridade.",
      "Art. 102 do Estatuto da Pessoa Idosa: apropriar-se de ou desviar bens, proventos, pensão ou qualquer rendimento da pessoa idosa é crime, com reclusão de 1 a 4 anos e multa.",
      "Art. 230 da Constituição: a família, a sociedade e o Estado têm o dever de amparar as pessoas idosas; o § 2º garante aos maiores de 65 anos a gratuidade dos transportes coletivos urbanos.",
      "Lei 13.614/2018 (PNATRANS): metas de redução de mortes e lesões no trânsito (art. 326-A do CTB).",
      "Disque 100: canal do governo federal que recebe denúncias de violações de direitos humanos, inclusive contra pessoas idosas.",
    ],
    conectivos: ["Apesar dessa conquista", "enquanto", "Esse cenário", "Em primeiro lugar", "Nesse contexto", "Além disso", "mas", "Assim", "Por fim", "de modo que", "Com isso", "Dessa forma", "Paralelamente"],
  },
  {
    n: 23,
    bloco: 5,
    recorte: "Sistema prisional, audiência de custódia e reincidência",
    contexto:
      "Os presídios brasileiros vivem superlotação e condições degradantes, e o STF reconheceu o estado de coisas inconstitucional do sistema carcerário na ADPF 347. Em dezembro de 2024, o STF homologou o Plano Pena Justa, com metas para melhorar as prisões e reduzir a reincidência; em 2026, os planos dos estados também foram homologados.",
    tema: "A crise do sistema carcerário brasileiro e os desafios para conciliar segurança pública e ressocialização.",
    aspectos: [
      "a relação entre as condições das prisões e o fortalecimento das facções;",
      "a falta de ressocialização e o ciclo da reincidência;",
      "o controle da porta de entrada do sistema, com a audiência de custódia e as alternativas penais.",
    ],
    paragrafos: [
      "A Lei de Execução Penal estabelece que a execução da pena deve proporcionar condições para a integração social do condenado. **Na prática, porém**, as prisões brasileiras enfrentam superlotação e condições degradantes, realidade que levou o Supremo Tribunal Federal a reconhecer o estado de coisas inconstitucional do sistema carcerário. **Esse quadro** compromete a segurança pública ao transformar presídios em centros de recrutamento do crime.",
      "**Em primeiro lugar**, a incapacidade do Estado de separar presos provisórios de condenados, e presos primários de lideranças criminosas, fortalece as facções. Sem acesso a trabalho, estudo e assistência básica, o detento torna-se alvo fácil de cooptação dentro das celas. **Nesse sentido**, como advertia o filósofo Michel Foucault na obra Vigiar e Punir, a prisão mal estruturada tende a fabricar delinquentes **em vez de** recuperar cidadãos.",
      "**Além disso**, a falta de ressocialização alimenta a violência nas ruas. **Quando** o egresso deixa a prisão sem qualificação profissional e marcado pelo estigma social, a chance de voltar ao crime aumenta, **o que** sobrecarrega o trabalho das polícias. **Assim**, a pena que apenas isola, sem preparar o retorno, devolve à sociedade um problema maior.",
      "**Por isso**, é preciso qualificar também a porta de entrada do sistema. Na audiência de custódia, realizada em até 24 horas após a prisão em flagrante, o juiz verifica a legalidade da prisão e a necessidade de mantê-la, **de modo que**, em casos menos graves, ela possa ser substituída por medidas cautelares. **Nessa linha**, o Plano Pena Justa, homologado pelo Supremo na ADPF 347, reforça a urgência de gerir melhor as vagas.",
      "**Portanto**, cabe aos governos estaduais e federal executar as metas do Plano Pena Justa, com vagas adequadas, trabalho e educação no cárcere, **bem como** alternativas penais para delitos de menor gravidade. **Somente** com controle estatal efetivo e ressocialização real será possível romper o ciclo da reincidência e proteger a sociedade.",
    ],
    repertorio: [
      "Art. 1º da Lei 7.210/1984 (LEP): a execução penal tem por objetivo efetivar a sentença e proporcionar condições para a harmônica integração social do condenado e do internado.",
      "Art. 84 da LEP: o preso provisório ficará separado do condenado por sentença transitada em julgado.",
      "Art. 126 da LEP: o condenado pode remir parte da pena pelo trabalho ou pelo estudo.",
      "Art. 310 do Código de Processo Penal: em até 24 horas após a prisão em flagrante, o juiz realiza a audiência de custódia e deve relaxar a prisão ilegal, convertê-la em preventiva ou conceder liberdade provisória, com ou sem fiança.",
      "ADPF 347 (STF): reconheceu o estado de coisas inconstitucional do sistema prisional; em dezembro de 2024, o STF homologou o Plano Pena Justa e, em 2026, os planos estaduais.",
      "Michel Foucault, Vigiar e Punir (1975): a prisão, em vez de corrigir, tende a produzir a delinquência.",
    ],
    conectivos: ["Na prática, porém", "Esse quadro", "Em primeiro lugar", "Nesse sentido", "em vez de", "Além disso", "Quando", "o que", "Assim", "Por isso", "de modo que", "Nessa linha", "Portanto", "bem como", "Somente"],
  },
];
