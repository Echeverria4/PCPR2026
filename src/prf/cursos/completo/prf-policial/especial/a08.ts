import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "especial-08",
  resumo: {
    ideia:
      "A Lei 13.675/2018 cria o Susp, sistema que une os órgãos de segurança dos três níveis de governo, e a Política Nacional de Segurança Pública e Defesa Social (PNSPDS). O objetivo é que atuem juntos, de forma coordenada, sem perder cada um a sua competência.",
    itens: [
      {
        termo: "Finalidade",
        faz: "Preservar a ordem pública e a incolumidade das pessoas e do patrimônio, com atuação conjunta, coordenada, sistêmica e integrada, em articulação com a sociedade (art. 1º).",
      },
      {
        termo: "Responsabilidade",
        faz: "A segurança pública é dever do Estado e responsabilidade de todos: União, Estados, DF e Municípios, cada um nas suas competências (art. 2º).",
      },
      {
        termo: "Quem faz a política",
        faz: "A União estabelece a política nacional. Estados, DF e Municípios fazem as suas, observando as diretrizes da nacional (art. 3º).",
      },
      {
        termo: "Princípios, diretrizes e objetivos",
        faz: "Princípios: valores, como o uso comedido e proporcional da força e a proteção dos profissionais (art. 4º). Diretrizes: o modo de agir, como o atendimento imediato ao cidadão e a unidade de registro de ocorrência (art. 5º). Objetivos: os resultados buscados, como reprimir crimes transfronteiriços (art. 6º).",
      },
      {
        termo: "Meios e instrumentos",
        faz: "Planos de segurança, o Sinesp (dados de segurança, prisionais, armas, material genético, digitais e drogas), o Pró-Vida (qualidade de vida dos profissionais), entre outros (art. 8º).",
      },
      {
        termo: "Integrantes estratégicos",
        faz: "União, Estados, DF e Municípios, pelos seus Poderes Executivos, e os Conselhos de Segurança Pública e Defesa Social (art. 9º, § 1º).",
      },
      {
        termo: "Integrantes operacionais",
        faz: "PF, PRF, polícias civis e militares, bombeiros, guardas municipais, sistema penitenciário, institutos de perícia, Senasp, secretarias de segurança, Sedec, Senad, agentes de trânsito, guarda portuária e polícia legislativa (art. 9º, § 2º).",
        pista: "Ministério Público, Judiciário e Defensoria não integram o Susp: só têm representante nos Conselhos.",
      },
      {
        termo: "Funcionamento",
        faz: "Operações integradas, estratégias comuns, aceitação mútua de registro de ocorrência, informações compartilhadas com o Sisbin e o Sinesp (art. 10). Nas operações combinadas, os próprios participantes planejam e coordenam juntos.",
      },
      {
        termo: "Metas",
        faz: "O Ministério fixa metas anuais com indicadores públicos (art. 11). Na polícia judiciária, contam a elucidação, sobretudo de crimes dolosos com morte e de roubo, separando as autorias de flagrante das que vêm de investigação (art. 12).",
      },
      {
        termo: "Onde atuar",
        faz: "Os órgãos do Susp podem atuar em vias, rodovias, terminais, ferrovias, hidrovias, portos e aeroportos de qualquer ente, nas suas competências e integrados ao órgão do local, ressalvado o sigilo das investigações (art. 16).",
      },
      {
        termo: "Conselhos",
        faz: "Criados por proposta do chefe do Executivo enviada ao Legislativo. São colegiados consultivos, sugestivos e de acompanhamento social: podem recomendar providências, não mandar (art. 20).",
        pista: "Mandato de 2 anos, com uma só recondução ou reeleição, e um suplente por conselheiro (art. 21).",
      },
    ],
    cuidado:
      "O texto da lei ainda chama o órgão central de “Ministério Extraordinário da Segurança Pública”, mas hoje a área está no Ministério da Justiça e Segurança Pública. Se a PEC 18/2025 (PEC da Segurança Pública) for promulgada, confira as mudanças no art. 144 da Constituição.",
  },
  questoes: [
    {
      topico: "Susp",
      subassunto: "Integrantes",
      dificuldade: 4,
      raciocinio: "Os Conselhos são integrantes estratégicos; a PRF é operacional.",
      enunciado:
        "Sobre a posição da Polícia Rodoviária Federal e do Conselho Nacional de Segurança Pública e Defesa Social no Susp, pela Lei 13.675/2018:",
      alternativas: [
        "os dois são integrantes operacionais, pois atuam diretamente na segurança",
        "a PRF é integrante estratégica, por ser órgão federal, e o Conselho, operacional",
        "a PRF é integrante operacional, e o Conselho, integrante estratégico",
        "só a PRF integra o Susp, pois os Conselhos são órgãos externos de controle",
        "os dois são integrantes estratégicos, pois têm abrangência nacional",
      ],
      correta: 2,
      explicacao:
        "São integrantes estratégicos a União, os Estados, o DF e os Municípios, por seus Poderes Executivos, e os Conselhos de Segurança Pública e Defesa Social dos três entes (art. 9º, § 1º). A polícia rodoviária federal é integrante operacional (art. 9º, § 2º, II).",
      explicacaoErradas:
        "O Conselho não é operacional, por isso “os dois são integrantes operacionais” erra. Ser “órgão federal” não torna a PRF estratégica. Os Conselhos integram o Susp e não são “órgãos externos”. A “abrangência nacional” não define a categoria.",
      pegadinha: "Estratégicos: entes federados e Conselhos. Operacionais: os órgãos que executam.",
      conhecimento: "O Susp é integrado também pelos agentes penitenciários e pelas guardas municipais (art. 9º, caput).",
    },
    {
      topico: "Susp",
      subassunto: "Quem não integra",
      dificuldade: 5,
      raciocinio: "Ministério Público e Judiciário só têm representantes nos Conselhos.",
      enunciado:
        "Numa operação integrada contra roubo de cargas, atuam PRF, Polícia Civil, guarda municipal, agentes de trânsito e o Ministério Público estadual. Entre esses, não é integrante do Susp, pela Lei 13.675/2018:",
      alternativas: [
        "o Ministério Público, que só tem representante nos Conselhos",
        "a guarda municipal, por não estar no art. 144 da Constituição",
        "os agentes de trânsito, por não exercerem atividade policial",
        "a Polícia Civil, por atuar só na investigação",
        "a PRF, quando atua fora das rodovias federais",
      ],
      correta: 0,
      explicacao:
        "O art. 9º, § 2º, lista entre os integrantes operacionais as polícias civis, a polícia rodoviária federal, as guardas municipais e os agentes de trânsito. O Ministério Público não integra o Susp: tem representante nos Conselhos de Segurança Pública e Defesa Social (art. 21, III).",
      explicacaoErradas:
        "A guarda municipal está expressamente no art. 9º, caput e § 2º, VII. Os agentes de trânsito também são integrantes operacionais (§ 2º, XV). A Polícia Civil integra o Susp mesmo atuando na investigação. A PRF não deixa de integrar o sistema conforme o local da atuação.",
      pegadinha: "Atuar junto na operação não faz do Ministério Público integrante do Susp.",
      conhecimento: "Também têm representante nos Conselhos o Judiciário, a OAB e a Defensoria Pública (art. 21).",
    },
    {
      topico: "Conselhos",
      subassunto: "Competência",
      dificuldade: 5,
      raciocinio: "Os Conselhos são consultivos, sugestivos e de acompanhamento social.",
      enunciado:
        "Um Conselho Estadual de Segurança Pública e Defesa Social aprova uma resolução que obriga a polícia militar a mudar a escala de seus policiais e aplica advertência ao comandante que se recusar. Pela Lei 13.675/2018, a resolução:",
      alternativas: [
        "é válida, pois o Conselho é a instância decisória máxima do Susp no estado",
        "é válida, pois os Conselhos fiscalizam e punem as instituições do art. 9º",
        "é válida só quanto à escala, mas não quanto à advertência",
        "é válida, se aprovada pela maioria absoluta dos conselheiros",
        "excede a competência, pois o Conselho só pode recomendar providências",
      ],
      correta: 4,
      explicacao:
        "Os Conselhos têm natureza de colegiado, com competência consultiva, sugestiva e de acompanhamento social, respeitadas as instâncias decisórias e as normas da Administração (art. 20, § 2º). Acompanham as instituições e podem recomendar providências legais às autoridades competentes (§ 3º), mas não decidem nem punem.",
      explicacaoErradas:
        "O Conselho não é “instância decisória máxima”: a lei manda respeitar as instâncias decisórias. Ele acompanha, mas não “pune”. Nem a parte da escala vale, pois não há poder de mandar. O quórum de aprovação não cria uma competência que a lei não deu.",
      pegadinha: "Conselho recomenda; quem decide é a autoridade competente.",
      conhecimento: "No acompanhamento, os Conselhos consideram as condições de trabalho, as metas, a rapidez das corregedorias e a confiança da população (art. 20, § 4º).",
    },
    {
      topico: "Conselhos",
      subassunto: "Mandato",
      dificuldade: 4,
      raciocinio: "Mandato de 2 anos, com apenas uma recondução ou reeleição.",
      enunciado:
        "O representante de uma entidade de profissionais de segurança pública foi eleito duas vezes seguidas para um Conselho de Segurança Pública e Defesa Social e quer concorrer a um terceiro mandato seguido. Pela Lei 13.675/2018:",
      alternativas: [
        "pode, pois a lei permite reeleições sem limite enquanto a entidade o indicar",
        "não pode, pois o mandato é de 2 anos, com uma só reeleição",
        "pode, pois o limite de uma recondução vale só para os membros designados",
        "não pode, pois o mandato é de 4 anos e não admite reeleição",
        "pode, desde que o suplente dele concorde com a nova candidatura",
      ],
      correta: 1,
      explicacao:
        "Os mandatos eletivos dos representantes de entidades da sociedade e de profissionais de segurança pública, e a designação dos demais membros, duram 2 anos, permitida apenas uma recondução ou reeleição (art. 21, § 3º). Duas eleições seguidas esgotam o limite.",
      explicacaoErradas:
        "A lei limita a uma reeleição, por isso “sem limite” erra. O limite vale para eleitos e designados, e não “só para os membros designados”. O mandato não é de “4 anos”. A concordância do suplente não tem relevância: ele só substitui o titular nas ausências.",
      pegadinha: "2 anos, uma recondução: no máximo 4 anos seguidos.",
      conhecimento: "Os representantes das entidades são eleitos em processo aberto, com convocação pública e critérios objetivos (art. 21, § 1º).",
    },
    {
      topico: "Susp",
      subassunto: "Local de atuação",
      dificuldade: 5,
      raciocinio: "Art. 16: atuação em vias de qualquer ente, nas competências e em integração com o órgão local.",
      enunciado:
        "Em operação do Susp, uma equipe da PRF atua num terminal rodoviário municipal e numa via urbana próxima de uma rodovia federal. Pela Lei 13.675/2018, essa atuação:",
      alternativas: [
        "é proibida, pois a PRF só pode atuar nas rodovias e estradas federais",
        "depende de autorização do prefeito, que é o responsável pelo terminal municipal",
        "é livre, sem necessidade de integração com outros órgãos do Susp",
        "é possível nas suas competências, integrada ao órgão local",
        "é possível só se a Polícia Militar estiver ausente do local",
      ],
      correta: 3,
      explicacao:
        "Os órgãos do Susp podem atuar em vias urbanas, rodovias, terminais rodoviários, ferrovias e hidrovias federais, estaduais, distritais ou municipais, portos e aeroportos, no âmbito das respectivas competências, em efetiva integração com o órgão cujo local de atuação esteja sob sua circunscrição, ressalvado o sigilo das investigações policiais (art. 16).",
      explicacaoErradas:
        "A lei não limita a atuação “só” às rodovias federais. Não há exigência de “autorização do prefeito”. A atuação não é “livre”: exige integração com o órgão local. A ausência da Polícia Militar não é condição.",
      pegadinha: "Pode atuar fora da rodovia federal, mas nas suas competências e integrada.",
      conhecimento: "A integração também se dá por operações com planejamento e execução integrados (art. 10, I).",
    },
    {
      topico: "Funcionamento",
      subassunto: "Registro de ocorrência",
      dificuldade: 4,
      raciocinio: "Art. 10, III: aceitação mútua de registro de ocorrência policial.",
      enunciado:
        "Uma vítima de furto registra a ocorrência num posto da PRF. Na delegacia, o servidor da Polícia Civil se recusa a aceitar o registro e exige que ela faça um novo boletim. Pela Lei 13.675/2018, a recusa:",
      alternativas: [
        "contraria a lei, que prevê a aceitação mútua de registro de ocorrência",
        "é correta, pois só a Polícia Civil pode registrar a ocorrência de crime estadual",
        "é correta, pois a PRF só registra ocorrência de trânsito nas rodovias federais",
        "é correta, se o furto não tiver ocorrido na rodovia federal",
        "contraria a lei, que obriga a PRF a investigar o furto",
      ],
      correta: 0,
      explicacao:
        "A integração e a coordenação dos órgãos do Susp se dão, entre outros meios, pela aceitação mútua de registro de ocorrência policial (art. 10, III). A lei também prevê como diretriz a unidade de registro de ocorrência policial (art. 5º, XXII).",
      explicacaoErradas:
        "A lei não diz que “só a Polícia Civil pode registrar”, nem que a PRF “só registra ocorrência de trânsito”. O local do crime não afasta a aceitação mútua. A lei não transfere à PRF a investigação do furto: a recusa erra porque o registro deve ser aceito.",
      pegadinha: "Registro feito por um órgão do Susp vale para os outros.",
      conhecimento: "O compartilhamento de informações é feito preferencialmente por meio eletrônico, com acesso recíproco aos bancos de dados (art. 10, § 4º).",
    },
    {
      topico: "Funcionamento",
      subassunto: "Metas",
      dificuldade: 5,
      raciocinio: "Art. 12, § 2º: a aferição separa as autorias de flagrante das autorias de investigação.",
      enunciado:
        "Na aferição anual das metas da polícia judiciária, um estado soma num só número todas as autorias de homicídios esclarecidos, sem distinguir como foram obtidas. Pela Lei 13.675/2018, essa forma de aferir:",
      alternativas: [
        "é correta, pois a lei só exige o número total de crimes esclarecidos",
        "é correta, pois as metas são fixadas por cada estado, sem critérios legais",
        "é incorreta, pois deve separar as autorias de flagrante das obtidas por investigação",
        "é incorreta, pois a aferição deve contar só as condenações definitivas da Justiça",
        "é incorreta, pois a polícia judiciária é aferida só pela recuperação de bens e valores",
      ],
      correta: 2,
      explicacao:
        "As atividades de polícia judiciária são aferidas, entre outros fatores, pelos índices de elucidação dos delitos, sobretudo dos crimes dolosos com resultado morte e de roubo (art. 12, I). A aferição deve distinguir as autorias definidas em razão de prisão em flagrante das resultantes de diligências investigatórias (§ 2º).",
      explicacaoErradas:
        "A lei não se contenta com o “número total”. As metas são fixadas anualmente pelo Ministério, com indicadores públicos (art. 11), e não “sem critérios legais”. A lei fala em elucidação, e não em “condenações definitivas”. A recuperação de bens é só um dos fatores.",
      pegadinha: "Flagrante e investigação contam em separado.",
      conhecimento: "A polícia ostensiva é aferida pela maior ou menor incidência de infrações em determinada área (art. 12, III).",
    },
    {
      topico: "PNSPDS",
      subassunto: "Princípios e diretrizes",
      dificuldade: 5,
      raciocinio: "Uso comedido e proporcional da força: princípio. Atendimento imediato ao cidadão: diretriz.",
      enunciado:
        "Um manual de uma polícia classifica os elementos da Política Nacional de Segurança Pública e Defesa Social. Está de acordo com a Lei 13.675/2018 a classificação:",
      alternativas: [
        "a unidade de registro de ocorrência policial é princípio, e o atendimento imediato ao cidadão, objetivo",
        "o uso comedido e proporcional da força é objetivo, e a resolução pacífica de conflitos, diretriz",
        "a proteção dos profissionais de segurança é diretriz, e a participação e controle social, objetivo",
        "a repressão aos crimes transfronteiriços é princípio, e o planejamento estratégico, objetivo",
        "o uso comedido e proporcional da força é princípio, e o atendimento imediato ao cidadão, diretriz",
      ],
      correta: 4,
      explicacao:
        "O uso comedido e proporcional da força, pautado nos documentos internacionais de direitos humanos, é princípio (art. 4º, IX, com redação da Lei 14.751/2023). O atendimento imediato ao cidadão é diretriz (art. 5º, I).",
      explicacaoErradas:
        "A unidade de registro de ocorrência é diretriz (art. 5º, XXII). A resolução pacífica de conflitos é princípio (art. 4º, VIII). A proteção dos profissionais e a participação e controle social são princípios (art. 4º, II e VII). A repressão aos crimes transfronteiriços é objetivo (art. 6º, VIII), e o planejamento estratégico, diretriz (art. 5º, II).",
      pegadinha: "Princípio é valor; diretriz é modo de agir; objetivo é resultado.",
      conhecimento: "Os objetivos orientam o Plano Nacional de Segurança Pública e Defesa Social, com estratégias, metas e indicadores (art. 6º, parágrafo único).",
    },
    {
      topico: "PNSPDS",
      subassunto: "Responsabilidade",
      dificuldade: 4,
      raciocinio: "A Lei 13.675 usa “dever do Estado e responsabilidade de todos”.",
      enunciado:
        "Pela Lei 13.675/2018, a segurança pública:",
      alternativas: [
        "é dever exclusivo da União, que a delega aos estados por meio de convênios",
        "é dever do Estado e responsabilidade de todos, nas competências de cada ente",
        "é responsabilidade só dos órgãos listados no art. 144 da Constituição",
        "é dever dos Estados e do DF, cabendo aos Municípios só manter a guarda municipal",
        "é direito do cidadão, sem dever correspondente da sociedade",
      ],
      correta: 1,
      explicacao:
        "A segurança pública é dever do Estado e responsabilidade de todos, compreendendo a União, os Estados, o DF e os Municípios, no âmbito das competências e atribuições legais de cada um (art. 2º). O Susp atua em articulação com a sociedade (art. 1º).",
      explicacaoErradas:
        "Não é “dever exclusivo da União”: envolve os três níveis de governo. Não é responsabilidade “só dos órgãos” do art. 144. Os Municípios participam além da guarda municipal, inclusive com sua própria política (art. 3º). A lei atribui responsabilidade a todos, por isso “sem dever correspondente” erra.",
      pegadinha: "Na CF, art. 144: “dever do Estado, direito e responsabilidade de todos”.",
      conhecimento: "A finalidade do Susp é preservar a ordem pública e a incolumidade das pessoas e do patrimônio (art. 1º).",
    },
    {
      topico: "PNSPDS",
      subassunto: "Competência",
      dificuldade: 4,
      raciocinio: "Art. 3º: cada ente faz a sua política, seguindo as diretrizes da nacional.",
      enunciado:
        "Um município quer criar a sua própria política de segurança pública, com foco em prevenção nos bairros. Pela Lei 13.675/2018:",
      alternativas: [
        "não pode, pois só a União estabelece política de segurança pública",
        "não pode, pois a política municipal depende de lei estadual",
        "pode, sem nenhum vínculo com a política nacional",
        "pode, observadas as diretrizes da política nacional",
        "pode, desde que o Conselho Nacional aprove o texto antes",
      ],
      correta: 3,
      explicacao:
        "Compete à União estabelecer a PNSPDS, e aos Estados, ao DF e aos Municípios estabelecer suas respectivas políticas, observadas as diretrizes da política nacional (art. 3º).",
      explicacaoErradas:
        "Não é “só a União” que estabelece política. A lei não exige “lei estadual” para a política municipal. A política municipal deve observar as diretrizes nacionais, por isso “sem nenhum vínculo” erra. Não há aprovação prévia do Conselho Nacional, que é consultivo.",
      pegadinha: "Cada ente faz a sua política, dentro das diretrizes nacionais.",
      conhecimento: "A lei destaca as situações de emergência e os crimes interestaduais e transnacionais (art. 3º).",
    },
    {
      topico: "Funcionamento",
      subassunto: "Operações combinadas",
      dificuldade: 5,
      raciocinio: "Art. 10, § 3º: planejamento e coordenação conjuntos pelos participantes.",
      enunciado:
        "PRF, Polícia Federal e Polícia Civil fazem uma operação combinada contra uma organização criminosa, com apoio de órgãos de fiscalização não ligados à segurança pública. Pela Lei 13.675/2018, o planejamento e a coordenação da operação cabem:",
      alternativas: [
        "à Polícia Federal, por ser a polícia judiciária da União",
        "ao órgão central do Susp, que comanda as operações",
        "aos participantes, em conjunto",
        "ao Ministério Público, titular da ação penal",
        "ao órgão com maior efetivo empregado na operação",
      ],
      correta: 2,
      explicacao:
        "As operações combinadas podem ser ostensivas, investigativas, de inteligência ou mistas, e contar com órgãos do Susp e outros não ligados diretamente à segurança pública, sobretudo contra organizações criminosas (art. 10, § 2º). O planejamento e a coordenação são exercidos conjuntamente pelos participantes (§ 3º).",
      explicacaoErradas:
        "A lei não dá a coordenação à “Polícia Federal”, ao “órgão central”, ao “Ministério Público” nem ao órgão “com maior efetivo”. O órgão central coordena o Susp como sistema, mas não comanda cada operação.",
      pegadinha: "Operação combinada: coordenação conjunta.",
      conhecimento: "As operações podem contar com o Sistema Brasileiro de Inteligência (Sisbin), nos limites de suas competências.",
    },
    {
      topico: "PNSPDS",
      subassunto: "Meios e instrumentos",
      dificuldade: 4,
      raciocinio: "O Sinesp reúne dados de armas, material genético, digitais e drogas.",
      enunciado:
        "Numa abordagem, um policial rodoviário federal consulta um sistema nacional que reúne informações de segurança pública, prisionais, de rastreabilidade de armas e munições, de material genético, de digitais e de drogas. Esse sistema é:",
      alternativas: [
        "o Pró-Vida, programa de qualidade de vida dos profissionais",
        "o Sievap, sistema de educação e valorização profissional",
        "a Renaesp, rede de altos estudos em segurança pública",
        "o Sinaped, de acompanhamento e avaliação das políticas",
        "o Sinesp, um dos meios e instrumentos da política nacional",
      ],
      correta: 4,
      explicacao:
        "O Sinesp é o Sistema Nacional de Informações de Segurança Pública, Prisionais, de Rastreabilidade de Armas e Munições, de Material Genético, de Digitais e de Drogas (art. 8º, II, b, com redação da Lei 13.756/2018). Integra o Sistema Nacional de Informações e de Gestão de Segurança Pública e Defesa Social.",
      explicacaoErradas:
        "O Pró-Vida cuida da qualidade de vida dos profissionais. O Sievap trata de educação e valorização profissional. A Renaesp é a rede de altos estudos. O Sinaped acompanha e avalia as políticas. Nenhum deles é o banco de informações descrito.",
      pegadinha: "Dados de armas, DNA e digitais: Sinesp.",
      conhecimento: "Também são meios da política o Plano Nacional de Enfrentamento de Homicídios de Jovens e o plano contra a violência contra a mulher (art. 8º, IV e VI).",
    },
    {
      topico: "Conselhos",
      subassunto: "Composição",
      dificuldade: 5,
      raciocinio: "Art. 21: inclui Judiciário, MP, OAB, Defensoria e entidades; § 7º do art. 20: sociedade civil e trabalhadores nos estaduais e municipais.",
      enunciado:
        "Na criação de um Conselho Municipal de Segurança Pública e Defesa Social, discute-se quem deve compô-lo. Está de acordo com a Lei 13.675/2018 incluir:",
      alternativas: [
        "representantes da OAB, da Defensoria e de entidades de profissionais de segurança",
        "só representantes dos órgãos operacionais do Susp que atuam no município",
        "só servidores do Executivo municipal, pois o Conselho é órgão interno da prefeitura",
        "representantes do Judiciário e do Ministério Público, mas nunca da sociedade civil",
        "só representantes eleitos pela população, sem membros indicados por órgãos públicos",
      ],
      correta: 0,
      explicacao:
        "Os Conselhos são compostos por representantes de cada órgão ou entidade do Susp, do Judiciário, do Ministério Público, da OAB, da Defensoria Pública, de entidades da sociedade ligadas à segurança pública e de entidades de profissionais de segurança pública (art. 21). Os estaduais, distrital e municipais contam também com representantes da sociedade civil organizada e dos trabalhadores (art. 20, § 7º).",
      explicacaoErradas:
        "A composição não se limita aos “órgãos operacionais” nem a “servidores do Executivo”. A sociedade civil participa, por isso “nunca da sociedade civil” erra. Os órgãos públicos também têm representantes, ao contrário de “só representantes eleitos pela população”.",
      pegadinha: "Ministério Público e Defensoria não integram o Susp, mas compõem os Conselhos.",
      conhecimento: "Cada conselheiro tem um suplente, que o substitui nas ausências (art. 21, § 2º).",
    },
    {
      topico: "Conselhos",
      subassunto: "Criação",
      dificuldade: 5,
      raciocinio: "Criação por proposta do Executivo ao Legislativo; regulamentação por ato do Executivo.",
      enunciado:
        "Um governador quer instituir o Conselho Estadual de Segurança Pública e Defesa Social. Pela Lei 13.675/2018, o Conselho:",
      alternativas: [
        "é criado por decreto do governador, sem nenhuma participação da Assembleia Legislativa",
        "é criado por proposta do governador à Assembleia e regulamentado por ato do Executivo",
        "é criado por resolução do Conselho Nacional, que também define a composição estadual",
        "é criado por lei de iniciativa de qualquer deputado, sem proposta do governador",
        "é criado automaticamente pela Lei 13.675, sem necessidade de nenhum ato estadual",
      ],
      correta: 1,
      explicacao:
        "Os Conselhos são criados no âmbito de cada ente mediante proposta dos chefes dos Poderes Executivos, encaminhada aos respectivos Poderes Legislativos (art. 20, caput). A organização, o funcionamento e as demais competências são regulamentados por ato do Poder Executivo, nos limites da lei (§ 6º).",
      explicacaoErradas:
        "O “decreto do governador” não basta para criar o Conselho, pois a proposta vai ao Legislativo. O Conselho Nacional não cria os estaduais. A lei fala em proposta do chefe do Executivo, e não de “qualquer deputado”. A Lei 13.675 prevê a criação, mas não cria os Conselhos “automaticamente”.",
      pegadinha: "Cria-se pelo Legislativo, a pedido do Executivo; regulamenta-se por ato do Executivo.",
      conhecimento: "A estrutura formal do Susp se dá pela formação de Conselhos permanentes (art. 19).",
    },
  ],
};
