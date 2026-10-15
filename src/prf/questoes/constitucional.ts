import type { QuestaoPrf } from "../../data/prf";

export const QUESTOES_PRF_CON: QuestaoPrf[] = [
  {
    id: "prf-con-001",
    materia: "con",
    topico: "Constituição: conceito, classificações e princípios fundamentais",
    subassunto: "Classificação da Constituição de 1988",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: classificação quanto à origem, forma, elaboração, estabilidade, conteúdo e extensão",
    enunciado:
      "Em uma aula do curso de formação da PRF sobre teoria da Constituição, o instrutor pediu que os alunos classificassem a Constituição Federal de 1988 segundo os critérios tradicionais da doutrina. Foram apresentadas as seguintes afirmativas:\n\nI. Quanto à origem, é promulgada; quanto à forma, escrita; e, quanto ao modo de elaboração, dogmática.\nII. Por conter cláusulas pétreas, a doutrina majoritária a classifica como semirrígida, já que parte de seu texto não pode ser suprimida.\nIII. Quanto ao conteúdo, é formal, de modo que o art. 242, § 2º, que mantém o Colégio Pedro II na órbita federal, tem a mesma hierarquia das demais normas constitucionais.\nIV. Quanto à extensão, é sintética, a exemplo da Constituição norte-americana, por se concentrar em princípios e na organização do Estado.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II e IV, apenas.", "I e III, apenas.", "I, III e IV, apenas.", "III e IV, apenas."],
    correta: 2,
    explicacao:
      "A afirmativa I está correta: a Constituição de 1988 foi elaborada por Assembleia Nacional Constituinte eleita (promulgada), está reunida em documento único (escrita) e sistematiza as ideias dominantes de um momento histórico (dogmática). A afirmativa III também está: pelo critério formal, tudo o que está no texto tem hierarquia constitucional, ainda que o conteúdo não seja materialmente constitucional, como o art. 242, § 2º. Logo, I e III.",
    explicacaoErradas:
      "A afirmativa II está errada: as cláusulas pétreas não tornam a Constituição semirrígida; ela é rígida, porque a emenda exige processo mais difícil que o da lei (art. 60), e parte da doutrina a chama de super-rígida por causa do núcleo intangível. Semirrígida foi a Carta de 1824, que exigia processo especial só para a matéria constitucional. A afirmativa IV está errada: a Constituição de 1988 é analítica; sintética é a norte-americana. Por isso caem as combinações com II ou IV.",
    pegadinha:
      "A afirmativa II junta duas ideias verdadeiras — a existência de cláusulas pétreas e a classificação quanto à estabilidade — para chegar a um rótulo errado: “semirrígida” descreve a Constituição de 1824, e não a de 1988.",
    conhecimento:
      "Classificação da CF/88 mais cobrada: promulgada, escrita, dogmática, rígida (super-rígida para parte da doutrina), formal, analítica e dirigente. Pelo critério formal, todas as normas do texto têm hierarquia constitucional, ainda que não sejam materialmente constitucionais (art. 242, § 2º).",
    origem: "banco",
  },
  {
    id: "prf-con-002",
    materia: "con",
    topico: "Constituição: conceito, classificações e princípios fundamentais",
    subassunto: "Fundamentos (art. 1º) e objetivos fundamentais (art. 3º)",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: distinguir fundamentos, objetivos e princípios das relações internacionais",
    enunciado:
      "Em uma dinâmica do curso de formação da PRF, cada grupo de alunos deveria associar um fundamento da República Federativa do Brasil (art. 1º da Constituição) a um de seus objetivos fundamentais (art. 3º). Fez a associação corretamente o grupo que indicou",
    alternativas: [
      "a soberania, como fundamento, e a garantia da independência nacional, como objetivo.",
      "o pluralismo político, como fundamento, e a redução das desigualdades regionais, como objetivo.",
      "a dignidade da pessoa humana, como fundamento, e a erradicação das desigualdades regionais, como objetivo.",
      "a garantia do desenvolvimento nacional, como fundamento, e a construção de uma sociedade livre, justa e solidária, como objetivo.",
      "os valores sociais da livre iniciativa, como fundamento, e a busca do pleno emprego, como objetivo.",
    ],
    correta: 1,
    explicacao:
      "O pluralismo político é fundamento da República (art. 1º, V), e reduzir as desigualdades sociais e regionais é objetivo fundamental (art. 3º, III). É a única associação em que os dois elementos estão no dispositivo certo.",
    explicacaoErradas:
      "A garantia da independência nacional é princípio das relações internacionais (art. 4º, I), não objetivo. O art. 3º, III, manda erradicar a pobreza e a marginalização e reduzir as desigualdades; “erradicar as desigualdades” troca os verbos. Garantir o desenvolvimento nacional é objetivo (art. 3º, II), não fundamento. A busca do pleno emprego é princípio da ordem econômica (art. 170, VIII).",
    pegadinha:
      "A troca de verbos do art. 3º, III, é clássica: erradicam-se a pobreza e a marginalização, mas reduzem-se as desigualdades sociais e regionais. E o desenvolvimento nacional aparece como “fundamento” para confundir com o art. 1º.",
    conhecimento:
      "Fundamentos (art. 1º): soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa e pluralismo político. Objetivos (art. 3º), sempre com verbos de ação: construir uma sociedade livre, justa e solidária; garantir o desenvolvimento nacional; erradicar a pobreza e reduzir as desigualdades; promover o bem de todos.",
    origem: "banco",
  },
  {
    id: "prf-con-003",
    materia: "con",
    topico: "Constituição: conceito, classificações e princípios fundamentais",
    subassunto: "Princípios das relações internacionais (art. 4º)",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: princípios do art. 4º e distinção em relação aos fundamentos do art. 1º",
    enunciado:
      "Na preparação de uma comitiva da PRF para um encontro de cooperação policial com países vizinhos, discutiu-se quais princípios regem a República Federativa do Brasil em suas relações internacionais. Considere as afirmativas:\n\nI. A concessão de asilo político figura expressamente entre esses princípios.\nII. A busca da integração dos povos da América Latina, prevista na Constituição, limita-se ao plano econômico, sem alcançar a integração política e cultural.\nIII. A independência nacional e a soberania figuram, ambas, entre os princípios das relações internacionais, ao lado da autodeterminação dos povos.\nIV. O repúdio ao terrorismo e ao racismo e a cooperação entre os povos para o progresso da humanidade são princípios expressos dessas relações.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II e III, apenas.", "I, III e IV, apenas.", "I, II e IV, apenas.", "I e IV, apenas."],
    correta: 4,
    explicacao:
      "A afirmativa I está correta: a concessão de asilo político é princípio expresso (art. 4º, X). A afirmativa IV também está: o repúdio ao terrorismo e ao racismo e a cooperação entre os povos para o progresso da humanidade estão nos incisos VIII e IX. Logo, I e IV.",
    explicacaoErradas:
      "A afirmativa II está errada: o parágrafo único do art. 4º prevê a integração econômica, política, social e cultural dos povos da América Latina, visando à formação de uma comunidade latino-americana de nações. A afirmativa III está errada: a independência nacional está no art. 4º, I, mas a soberania é fundamento da República (art. 1º, I), e não princípio das relações internacionais. Por isso caem as combinações com II ou III.",
    pegadinha:
      "A afirmativa III junta um princípio verdadeiro do art. 4º (independência nacional) a um fundamento do art. 1º (soberania), contando com a proximidade entre as duas ideias.",
    conhecimento:
      "Art. 4º: independência nacional, prevalência dos direitos humanos, autodeterminação dos povos, não intervenção, igualdade entre os Estados, defesa da paz, solução pacífica dos conflitos, repúdio ao terrorismo e ao racismo, cooperação entre os povos e concessão de asilo político. Parágrafo único: integração econômica, política, social e cultural da América Latina.",
    origem: "banco",
  },
  {
    id: "prf-con-004",
    materia: "con",
    topico: "Direitos e deveres individuais e coletivos",
    subassunto: "Inviolabilidade do domicílio (art. 5º, XI)",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: exceções à inviolabilidade do domicílio e conceito constitucional de casa",
    enunciado:
      "Em um curso de atualização para servidores da PRF que apoiam operações conjuntas com outras forças, foram discutidos os limites constitucionais do ingresso em residências e locais de trabalho. Considere as afirmativas:\n\nI. O ingresso forçado em domicílio, à noite e sem mandado judicial, é lícito quando amparado em fundadas razões, justificadas a posteriori, que indiquem flagrante delito no interior da casa, sob pena de responsabilidade do agente e nulidade dos atos praticados.\nII. A ordem judicial de busca domiciliar pode ser cumprida durante a noite se o morador estiver ausente, desde que a diligência seja acompanhada por duas testemunhas.\nIII. O conceito constitucional de casa alcança o compartimento não aberto ao público onde alguém exerce profissão ou atividade, como o escritório de um contador.\nIV. Em caso de desastre, o ingresso sem consentimento do morador só é permitido durante o dia, ao passo que, para prestar socorro, é admitido a qualquer hora.\n\nEstá correto o que se afirma em",
    alternativas: ["I e III, apenas.", "I e II, apenas.", "II e IV, apenas.", "I, III e IV, apenas.", "II, III e IV, apenas."],
    correta: 0,
    explicacao:
      "A afirmativa I reproduz a tese do Tema 280 do STF (RE 603.616): o flagrante autoriza o ingresso a qualquer hora, mas exige fundadas razões, justificadas depois, sob pena de responsabilidade e nulidade. A afirmativa III está correta: o STF estende a proteção do art. 5º, XI, ao compartimento não aberto ao público em que se exerce profissão, como escritórios. Logo, I e III.",
    explicacaoErradas:
      "A afirmativa II está errada: a determinação judicial só pode ser cumprida durante o dia, e a ausência do morador, ainda que com testemunhas, não cria exceção. A afirmativa IV está errada: flagrante delito, desastre e socorro autorizam o ingresso a qualquer hora; só a determinação judicial está limitada ao período diurno. Por isso caem as combinações com II ou IV.",
    pegadinha:
      "A afirmativa IV separa “desastre” de “socorro” para criar uma restrição de horário que o texto não faz: no inciso XI, a cláusula “durante o dia” se liga apenas à determinação judicial.",
    conhecimento:
      "Art. 5º, XI: a casa é asilo inviolável; sem consentimento do morador, só se entra em flagrante delito, desastre ou para prestar socorro (a qualquer hora) ou por determinação judicial (durante o dia). Tema 280: fundadas razões, justificadas a posteriori. O conceito de casa abrange escritórios e quarto de hotel ocupado.",
    origem: "banco",
  },
  {
    id: "prf-con-005",
    materia: "con",
    topico: "Direitos e deveres individuais e coletivos",
    subassunto: "Habeas data: anotação de contestação e interesse de agir",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: cabimento do habeas data para anotação sobre dado verdadeiro e prova da recusa administrativa",
    enunciado:
      "Um servidor da PRF sofreu suspensão disciplinar, registrada corretamente em seus assentamentos funcionais. Ele contesta a penalidade em ação judicial ainda não julgada e quer que a existência dessa discussão conste ao lado do registro, para que quem consulte os dados saiba da pendência. Segundo a Constituição e a lei que disciplina o habeas data, é correto afirmar que",
    alternativas: [
      "pode impetrar habeas data de imediato, pois a garantia constitucional dispensa qualquer pedido prévio na via administrativa.",
      "o habeas data não serve ao caso, pois se destina apenas a conhecer ou retificar dados, e o registro da suspensão é verdadeiro.",
      "cabe habeas data para a anotação, mas a ação exige o recolhimento de custas, pois a gratuidade constitucional alcança só o habeas corpus.",
      "cabe habeas data para anotar a contestação junto ao dado verdadeiro, provada a recusa ou o decurso de mais de quinze dias sem decisão.",
      "cabe habeas data para anotar a contestação, desde que provada a recusa ou o decurso de mais de dez dias sem decisão sobre o pedido.",
    ],
    correta: 3,
    explicacao:
      "A Lei 9.507/1997 prevê o habeas data para anotar, nos assentamentos do interessado, contestação ou explicação sobre dado verdadeiro, mas justificável e sob pendência judicial ou amigável (art. 7º, III, e art. 4º, § 2º). A petição inicial deve provar a recusa da anotação ou o decurso de mais de quinze dias sem decisão (art. 8º, parágrafo único, III).",
    explicacaoErradas:
      "Sem pedido administrativo prévio, falta interesse de agir (art. 8º, parágrafo único, da lei e Súmula 2 do STJ). O habeas data não se limita a conhecer e retificar: a lei prevê a anotação sobre dado verdadeiro. A ação é gratuita (art. 5º, LXXVII, e art. 21 da lei). O prazo de dez dias é o do pedido de acesso às informações; para retificação e anotação, são quinze.",
    pegadinha:
      "Os prazos da lei são diferentes: dez dias para o acesso às informações e quinze para a retificação ou a anotação. Trocar um pelo outro é a armadilha mais fina da questão.",
    conhecimento:
      "Habeas data (art. 5º, LXXII; Lei 9.507/1997): conhecer, retificar e anotar contestação sobre dado verdadeiro sob pendência. Exige recusa administrativa ou decurso de prazo — dez dias para o acesso; quinze para retificação ou anotação. A ação é gratuita (art. 5º, LXXVII).",
    origem: "banco",
  },
  {
    id: "prf-con-006",
    materia: "con",
    topico: "Direitos e deveres individuais e coletivos",
    subassunto: "Direito de reunião e associações (art. 5º, XVI a XXI)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: aviso prévio da reunião, autorização associativa e dissolução de associações",
    enunciado:
      "Uma associação de servidores de órgãos federais convocou, pelas redes sociais e com uma semana de antecedência, ato pacífico e sem armas na calçada em frente a uma sede regional da PRF, sem enviar ofício às autoridades. A respeito do caso e da disciplina constitucional da reunião e das associações, é correto afirmar que",
    alternativas: [
      "o ato dependia de autorização prévia da autoridade de trânsito, por ocupar a calçada de uma via pública urbana.",
      "a associação pode, como substituta processual, ajuizar ação ordinária em nome dos filiados sem autorização expressa deles.",
      "o aviso prévio se cumpre com informação que permita ao poder público zelar pela paz do ato e evitar a frustração de outra reunião.",
      "a associação pode ter as atividades suspensas e ser dissolvida compulsoriamente por decisão judicial liminar, sem trânsito em julgado.",
      "o filiado que discorda da convocação só pode se desligar da associação ao fim do mandato da diretoria que a fez.",
    ],
    correta: 2,
    explicacao:
      "Para o STF (Tema 855, RE 806.339), a exigência de aviso prévio do art. 5º, XVI, é satisfeita com a veiculação de informação que permita ao poder público zelar pelo exercício pacífico da reunião e evitar que ela frustre outra convocada para o mesmo local. A reunião não depende de autorização.",
    explicacaoErradas:
      "A reunião pacífica e sem armas em local aberto ao público independe de autorização (art. 5º, XVI). Na ação ordinária, a associação atua como representante e precisa de autorização expressa dos filiados, individual ou em assembleia (art. 5º, XXI; Tema 82). A suspensão das atividades pode decorrer de decisão judicial, mas a dissolução compulsória exige trânsito em julgado (XIX). Ninguém é obrigado a permanecer associado (XX).",
    pegadinha:
      "A associação parece poder agir sempre como substituta processual; na ação ordinária, porém, ela representa os filiados e depende de autorização expressa, dada individualmente ou em assembleia (Tema 82).",
    conhecimento:
      "Reunião (XVI): pacífica, sem armas, em local aberto ao público, sem autorização, com aviso prévio. Associação (XVII a XXI): plena liberdade para fins lícitos, vedada a de caráter paramilitar; criação sem autorização; suspensão por decisão judicial; dissolução só com trânsito em julgado; representação dos filiados com autorização expressa.",
    origem: "banco",
  },
  {
    id: "prf-con-007",
    materia: "con",
    topico: "Direitos sociais",
    subassunto: "Rol do art. 6º da Constituição",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: distinguir os direitos sociais do art. 6º de direitos previstos na ordem social",
    enunciado:
      "Em uma campanha interna de valorização dos servidores da PRF, a equipe de comunicação quis citar apenas direitos sociais enumerados no caput do art. 6º da Constituição. Atende a essa exigência o conjunto formado exclusivamente por",
    alternativas: [
      "alimentação, transporte, lazer e proteção à maternidade e à infância.",
      "educação, saúde, trabalho, cultura e assistência aos desamparados.",
      "moradia, segurança, previdência social e meio ambiente ecologicamente equilibrado.",
      "lazer, assistência aos desamparados, desporto e transporte.",
      "saúde, alimentação, trabalho e proteção especial à família.",
    ],
    correta: 0,
    explicacao:
      "O caput do art. 6º enumera educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância e assistência aos desamparados. Alimentação (EC 64/2010), transporte (EC 90/2015), lazer e proteção à maternidade e à infância estão todos nesse rol.",
    explicacaoErradas:
      "Cultura (art. 215), meio ambiente ecologicamente equilibrado (art. 225), desporto (art. 217) e a especial proteção à família (art. 226) são protegidos pela Constituição, mas no título da ordem social, fora do rol do art. 6º. Cada um desses conjuntos mistura um elemento estranho a direitos do caput.",
    pegadinha:
      "Todos os elementos estranhos são direitos verdadeiros e conhecidos; a questão cobra a localização exata no art. 6º, e não a existência do direito.",
    conhecimento:
      "Art. 6º: educação, saúde, alimentação (EC 64/2010), trabalho, moradia (EC 26/2000), transporte (EC 90/2015), lazer, segurança, previdência social, proteção à maternidade e à infância e assistência aos desamparados. O parágrafo único (EC 114/2021) trata da renda básica familiar para quem está em situação de vulnerabilidade social.",
    origem: "banco",
  },
  {
    id: "prf-con-008",
    materia: "con",
    topico: "Direitos sociais",
    subassunto: "Direitos dos trabalhadores urbanos e rurais (art. 7º)",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: percentuais, prazos e bases de cálculo do art. 7º",
    enunciado:
      "Uma empresa terceirizada que presta serviços de limpeza e manutenção em unidades da PRF elaborou uma cartilha para orientar seus empregados sobre os direitos previstos no art. 7º da Constituição. Está de acordo com a Constituição a orientação de que",
    alternativas: [
      "a hora extraordinária deve ser remunerada com adicional de, no mínimo, cem por cento sobre o valor da hora normal.",
      "o aviso prévio é proporcional ao tempo de serviço, assegurado o mínimo de quinze dias.",
      "as férias anuais são remuneradas com, pelo menos, metade a mais do que o salário normal.",
      "créditos trabalhistas prescrevem em cinco anos, até o limite de dois anos após a extinção do contrato.",
      "o décimo terceiro salário é calculado pela média das remunerações recebidas no ano, e não pela remuneração integral.",
    ],
    correta: 3,
    explicacao:
      "O art. 7º, XXIX, assegura ação quanto aos créditos resultantes das relações de trabalho, com prazo prescricional de cinco anos para trabalhadores urbanos e rurais, até o limite de dois anos após a extinção do contrato de trabalho.",
    explicacaoErradas:
      "A hora extra tem adicional mínimo de cinquenta por cento (XVI). O aviso prévio proporcional tem mínimo de trinta dias (XXI). As férias são remuneradas com, pelo menos, um terço a mais do que o salário normal (XVII). O décimo terceiro tem por base a remuneração integral ou o valor da aposentadoria (VIII).",
    pegadinha:
      "As orientações erradas trocam apenas um número ou uma base de cálculo; quem memorizou só a existência dos direitos, sem os parâmetros, não consegue separá-las.",
    conhecimento:
      "Números do art. 7º: hora extra com no mínimo 50% (XVI); férias com um terço a mais (XVII); aviso prévio de no mínimo 30 dias (XXI); prescrição de 5 anos, até 2 anos após a extinção do contrato (XXIX); décimo terceiro pela remuneração integral (VIII).",
    origem: "banco",
  },
  {
    id: "prf-con-009",
    materia: "con",
    topico: "Direitos sociais",
    subassunto: "Liberdade sindical (art. 8º)",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: autonomia sindical, unicidade, aposentado filiado e negociação coletiva",
    enunciado:
      "Os vigilantes terceirizados que atuam nas unidades da PRF de uma região discutem a criação de um sindicato próprio. Sobre a disciplina constitucional da organização sindical, considere as afirmativas:\n\nI. A lei não pode exigir autorização do Estado para a fundação do sindicato, ressalvado o registro no órgão competente.\nII. É possível criar dois sindicatos representativos da mesma categoria em partes distintas de um mesmo Município, desde que cada um tenha base territorial própria.\nIII. O aposentado filiado tem direito a votar e ser votado nas organizações sindicais.\nIV. É obrigatória a participação dos sindicatos nas negociações coletivas de trabalho.\n\nEstá correto o que se afirma em",
    alternativas: ["I e III, apenas.", "I, III e IV, apenas.", "II e IV, apenas.", "I, II e III, apenas.", "II, III e IV, apenas."],
    correta: 1,
    explicacao:
      "A afirmativa I está correta: a fundação do sindicato não depende de autorização estatal, ressalvado o registro (art. 8º, I). A III também: o aposentado filiado vota e é votado (VII). A IV também: os sindicatos participam obrigatoriamente das negociações coletivas (VI). Logo, I, III e IV.",
    explicacaoErradas:
      "A afirmativa II está errada: vigora a unicidade sindical, que veda mais de uma organização representativa da mesma categoria na mesma base territorial, e essa base, definida pelos interessados, não pode ser inferior à área de um Município (art. 8º, II). Por isso caem as combinações com II.",
    pegadinha:
      "A afirmativa II soa razoável porque a base territorial é definida pelos próprios interessados; o limite mínimo, porém, é a área de um Município, que não pode ser fracionada.",
    conhecimento:
      "Art. 8º: sem autorização estatal (I); unicidade sindical com base mínima municipal (II); ninguém é obrigado a filiar-se ou a manter-se filiado (V); participação obrigatória nas negociações coletivas (VI); aposentado filiado vota e é votado (VII).",
    origem: "banco",
  },
  {
    id: "prf-con-010",
    materia: "con",
    topico: "Nacionalidade",
    subassunto: "Brasileiros natos (art. 12, I)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: critério territorial e exceção dos pais estrangeiros a serviço de seu país",
    enunciado:
      "Em um treinamento de atendimento ao público em postos da PRF de fronteira, foram apresentados cinco casos hipotéticos. De acordo com a Constituição, é brasileiro nato",
    alternativas: [
      "o nascido em São Paulo, filho de servidores consulares italianos que ali estavam a serviço da Itália.",
      "o estrangeiro residente no Brasil há mais de quinze anos ininterruptos, sem condenação penal, que requereu a nacionalidade.",
      "o angolano com residência por um ano ininterrupto e idoneidade moral que requereu a nacionalidade brasileira.",
      "o nascido na Bolívia, filho de pais bolivianos, que veio morar no Brasil aos dois anos de idade.",
      "o nascido em Manaus, filho de casal alemão que ali estava a serviço do governo da Argentina.",
    ],
    correta: 4,
    explicacao:
      "O critério territorial (art. 12, I, a) só é afastado quando os pais estrangeiros estão a serviço de seu próprio país. Os pais alemães estavam a serviço da Argentina, e não da Alemanha; por isso prevalece a regra geral, e o nascido em Manaus é brasileiro nato.",
    explicacaoErradas:
      "O filho de servidores consulares italianos a serviço da Itália não é nato, porque os pais servem ao próprio país. O estrangeiro com mais de quinze anos de residência e o originário de país de língua portuguesa com um ano de residência podem se naturalizar (art. 12, II), mas serão naturalizados. O nascido na Bolívia de pais bolivianos é estrangeiro, ainda que tenha vindo criança.",
    pegadinha:
      "A exceção do art. 12, I, a, exige serviço ao próprio país dos pais; pais estrangeiros a serviço de um terceiro país não afastam a nacionalidade originária do filho nascido no Brasil.",
    conhecimento:
      "Natos (art. 12, I): nascidos no Brasil, salvo se os pais estrangeiros estiverem a serviço de seu país; nascidos no exterior de pai ou mãe brasileiros a serviço do Brasil; nascidos no exterior de pai ou mãe brasileiros registrados em repartição competente ou que venham a residir no Brasil e optem, após a maioridade.",
    origem: "banco",
  },
  {
    id: "prf-con-011",
    materia: "con",
    topico: "Nacionalidade",
    subassunto: "Cargos privativos de brasileiro nato (art. 12, § 3º)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: rol taxativo dos cargos privativos de brasileiro nato",
    enunciado:
      "Um servidor da PRF, brasileiro naturalizado e bacharel em Direito, estuda as possibilidades de sua carreira pública. A Constituição o impede de",
    alternativas: [
      "ser nomeado Ministro das Relações Exteriores, cargo político que chefia a diplomacia brasileira.",
      "ser nomeado Ministro do Superior Tribunal de Justiça, na vaga destinada aos advogados.",
      "presidir a Câmara dos Deputados, ainda que eleito Deputado Federal pelo voto popular.",
      "ser eleito Governador de Estado, ainda que cumpridos os requisitos de idade e domicílio.",
      "ser nomeado Ministro de Estado da Justiça e Segurança Pública, pasta à qual a PRF se vincula.",
    ],
    correta: 2,
    explicacao:
      "O art. 12, § 3º, reserva a brasileiros natos os cargos de Presidente e Vice-Presidente da República, Presidente da Câmara dos Deputados, Presidente do Senado Federal, Ministro do STF, carreira diplomática, oficial das Forças Armadas e Ministro de Estado da Defesa. O naturalizado pode ser eleito Deputado Federal, mas não pode presidir a Câmara.",
    explicacaoErradas:
      "O rol do § 3º é taxativo. Privativa de nato é a carreira diplomática, não o cargo político de Ministro das Relações Exteriores. O STJ exige apenas brasileiros (art. 104, parágrafo único). Governador e Ministro da Justiça e Segurança Pública não estão no rol, de modo que o naturalizado pode ocupá-los.",
    pegadinha:
      "O cargo de Ministro das Relações Exteriores parece privativo por chefiar a diplomacia, mas o rol só alcança a carreira diplomática; e o mandato de Deputado Federal é acessível ao naturalizado, embora a presidência da Casa não seja.",
    conhecimento:
      "Privativos de nato (art. 12, § 3º): Presidente e Vice-Presidente da República; Presidentes da Câmara e do Senado; Ministro do STF; carreira diplomática; oficial das Forças Armadas; Ministro de Estado da Defesa. A lei não pode criar outras distinções (§ 2º).",
    origem: "banco",
  },
  {
    id: "prf-con-012",
    materia: "con",
    topico: "Nacionalidade",
    subassunto: "Distinções entre natos e naturalizados",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: distinções constitucionais taxativas entre brasileiros natos e naturalizados",
    enunciado:
      "Um servidor administrativo da PRF obteve a naturalização brasileira há seis anos. Considerando as distinções que a Constituição admite entre brasileiros natos e naturalizados, é correto afirmar que ele",
    alternativas: [
      "pode ser alcançado por distinções novas criadas em lei ordinária, desde que razoáveis e motivadas.",
      "ainda não pode ser proprietário de empresa jornalística, reservada a natos e a naturalizados há mais de dez anos.",
      "pode ser eleito pela Câmara dos Deputados para integrar o Conselho da República, como cidadão maior de 35 anos.",
      "não pode votar nem ser votado nas eleições municipais antes de completar dez anos de naturalização.",
      "pode ingressar no oficialato das Forças Armadas, já que essa vedação cessa após cinco anos de naturalização.",
    ],
    correta: 1,
    explicacao:
      "Além dos cargos do art. 12, § 3º, e da extradição (art. 5º, LI), a Constituição distingue o naturalizado no Conselho da República (art. 89, VII) e na propriedade de empresa jornalística e de radiodifusão, privativa de natos ou de naturalizados há mais de dez anos (art. 222). Com seis anos de naturalização, ele ainda não pode ser proprietário de empresa jornalística.",
    explicacaoErradas:
      "A lei não pode criar distinções além das constitucionais (art. 12, § 2º). Os seis cidadãos do Conselho da República devem ser natos (art. 89, VII). Não há restrição ao voto nem à elegibilidade municipal do naturalizado. O oficialato das Forças Armadas é privativo de nato, sem prazo que faça cessar a vedação (art. 12, § 3º, VI).",
    pegadinha:
      "O prazo de dez anos existe, mas só para a propriedade de empresa jornalística e de radiodifusão; transportá-lo para o voto municipal ou criar um prazo de cinco anos para o oficialato é a armadilha.",
    conhecimento:
      "Distinções constitucionais entre natos e naturalizados: cargos do art. 12, § 3º; assento de cidadão no Conselho da República (art. 89, VII); extradição do naturalizado por crime comum anterior à naturalização ou por tráfico (art. 5º, LI); propriedade de empresa jornalística e de radiodifusão (art. 222).",
    origem: "banco",
  },
  {
    id: "prf-con-013",
    materia: "con",
    topico: "Direitos políticos e partidos políticos",
    subassunto: "Alistamento eleitoral e voto obrigatório ou facultativo (art. 14, §§ 1º e 2º)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: capacidade eleitoral ativa, voto facultativo e inalistáveis",
    enunciado:
      "Durante uma ação educativa de cidadania promovida pela PRF em uma rodoviária, quatro pessoas tiraram dúvidas sobre o título de eleitor: Joana, de 17 anos; Pedro, de 72; Lúcio, de 40, analfabeto; e Marcos, de 19, conscrito em serviço militar obrigatório que ainda não se alistou. Segundo a Constituição, é correto afirmar que",
    alternativas: [
      "os quatro podem se alistar, mas só Joana e Pedro têm voto facultativo, sendo obrigatório o voto de Lúcio, maior de dezoito anos.",
      "Lúcio pode votar e ser candidato a vereador, porque a inelegibilidade do analfabeto alcança apenas os cargos do Poder Executivo.",
      "Marcos tem alistamento facultativo enquanto durar o serviço militar e obrigatório depois de concluí-lo.",
      "Joana, Pedro e Lúcio têm alistamento e voto facultativos, e Marcos não pode se alistar durante o serviço militar.",
      "Pedro, por ter mais de setenta anos, perdeu a capacidade eleitoral passiva, embora ainda possa votar.",
    ],
    correta: 3,
    explicacao:
      "O alistamento e o voto são facultativos para os analfabetos, os maiores de setenta anos e os maiores de dezesseis e menores de dezoito anos (art. 14, § 1º, II). Os conscritos, durante o período do serviço militar obrigatório, não podem se alistar como eleitores (§ 2º).",
    explicacaoErradas:
      "Marcos não pode se alistar durante o serviço militar obrigatório, e o voto de Lúcio, analfabeto, é facultativo. O analfabeto é inelegível para qualquer cargo (§ 4º). O conscrito não tem alistamento facultativo: é inalistável enquanto durar o serviço. A idade avançada não retira a elegibilidade; não há idade máxima para concorrer.",
    pegadinha:
      "O analfabeto tem capacidade eleitoral ativa (pode votar, facultativamente), mas não passiva; e o conscrito é inalistável apenas durante o período do serviço militar obrigatório.",
    conhecimento:
      "Art. 14: voto obrigatório para maiores de 18 anos; facultativo para analfabetos, maiores de 70 e jovens de 16 e 17 anos. Inalistáveis: estrangeiros e conscritos durante o serviço militar obrigatório. Inelegíveis: inalistáveis e analfabetos (§ 4º).",
    origem: "banco",
  },
  {
    id: "prf-con-014",
    materia: "con",
    topico: "Direitos políticos e partidos políticos",
    subassunto: "Condições de elegibilidade: idade mínima (art. 14, § 3º, VI)",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: idades mínimas por cargo e momento de aferição",
    enunciado:
      "Cinco servidores da PRF pretendem disputar as próximas eleições. Considerando apenas a idade mínima exigida pela Constituição, aferida na data da posse, preenche esse requisito",
    alternativas: [
      "Rui, que terá 33 anos na data da posse, candidato a Senador.",
      "Lia, que terá 29 anos na data da posse, candidata a Vice-Governadora.",
      "Téo, que terá 20 anos na data da posse, candidato a Prefeito.",
      "Ivo, que terá 34 anos na posse, candidato a Vice-Presidente, pois só o titular precisa ter 35.",
      "Noé, que terá 21 anos na data da posse, candidato a Deputado Estadual.",
    ],
    correta: 4,
    explicacao:
      "A idade mínima é de 21 anos para Deputado Federal, Deputado Estadual ou Distrital, Prefeito, Vice-Prefeito e juiz de paz (art. 14, § 3º, VI, c). Como a aferição se faz na data da posse (Lei 9.504/1997, art. 11, § 2º), Noé cumpre o requisito.",
    explicacaoErradas:
      "Senador exige 35 anos; Governador e Vice-Governador, 30; Prefeito, 21; Presidente e Vice-Presidente, 35, sem distinção entre titular e vice. Rui, Lia, Téo e Ivo ficam abaixo do mínimo de seus cargos.",
    pegadinha:
      "A idade é a mesma para titular e vice em cada cargo; o caso do Vice-Presidente tenta criar uma diferença inexistente, e o de Prefeito usa uma idade só um ano abaixo da exigida.",
    conhecimento:
      "Idades (art. 14, § 3º, VI): 35 anos para Presidente, Vice-Presidente e Senador; 30 para Governador e Vice; 21 para Deputados, Prefeito, Vice-Prefeito e juiz de paz; 18 para Vereador. Aferição na posse, salvo a de 18 anos, verificada na data-limite do pedido de registro.",
    origem: "banco",
  },
  {
    id: "prf-con-015",
    materia: "con",
    topico: "Direitos políticos e partidos políticos",
    subassunto: "Partidos políticos (art. 17)",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: registro, coligações, cláusula de desempenho e financiamento estrangeiro",
    enunciado:
      "Em uma palestra sobre ética e neutralidade política para servidores da PRF, o palestrante abordou o regime constitucional dos partidos políticos. Considere as afirmativas:\n\nI. O partido adquire personalidade jurídica na forma da lei civil e, depois, registra seu estatuto no Tribunal Superior Eleitoral.\nII. São vedadas as coligações nas eleições proporcionais, mas admitidas nas majoritárias.\nIII. O partido que não atinge a cláusula de desempenho perde o registro, e seus parlamentares devem deixar o mandato.\nIV. O recebimento de recursos de entidade ou governo estrangeiros é permitido, desde que declarado na prestação de contas.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "I e III, apenas.", "II e IV, apenas.", "I, II e III, apenas.", "I, III e IV, apenas."],
    correta: 0,
    explicacao:
      "A afirmativa I reproduz o art. 17, § 2º: personalidade jurídica na forma da lei civil e, depois, registro do estatuto no TSE. A afirmativa II reproduz o § 1º, com a redação da EC 97/2017: coligações só nas eleições majoritárias. Logo, I e II.",
    explicacaoErradas:
      "A afirmativa III está errada: o partido que não atinge a cláusula de desempenho perde o acesso ao fundo partidário e à propaganda gratuita no rádio e na televisão (§ 3º), não o registro, e o eleito mantém o mandato, podendo migrar para outro partido (§ 5º). A afirmativa IV está errada: é proibido receber recursos de entidade ou governo estrangeiros (art. 17, II). Por isso caem as combinações com III ou IV.",
    pegadinha:
      "A cláusula de desempenho tem consequência financeira e de propaganda, e não de existência do partido; a afirmativa III exagera o efeito e ainda inventa a perda do mandato.",
    conhecimento:
      "Art. 17: caráter nacional; proibição de recursos estrangeiros; prestação de contas à Justiça Eleitoral; personalidade civil e registro no TSE (§ 2º); coligação vedada nas eleições proporcionais (§ 1º); cláusula de desempenho para fundo partidário e rádio e TV (§ 3º); vedada a organização paramilitar (§ 4º).",
    origem: "banco",
  },
  {
    id: "prf-con-016",
    materia: "con",
    topico: "Organização político-administrativa",
    subassunto: "Competências de Estados, Municípios e Distrito Federal",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: competências dos entes federativos e vedações do Distrito Federal",
    enunciado:
      "Em um seminário sobre cooperação entre a PRF e os entes federativos na gestão de rodovias e serviços urbanos, foram feitas várias afirmações sobre a organização do Estado. Está de acordo com a Constituição a afirmação de que",
    alternativas: [
      "o Distrito Federal pode dividir-se em Municípios por lei distrital, após plebiscito da população interessada.",
      "cabe aos Estados explorar os serviços locais de gás canalizado, vedada a medida provisória em sua regulamentação.",
      "Municípios limítrofes podem instituir regiões metropolitanas por lei complementar municipal aprovada em cada um deles.",
      "cabe aos Estados organizar e prestar, diretamente ou por concessão, o transporte coletivo de caráter local, por ser serviço essencial.",
      "o Distrito Federal acumula apenas as competências legislativas reservadas aos Estados, e não as reservadas aos Municípios.",
    ],
    correta: 1,
    explicacao:
      "O art. 25, § 2º, atribui aos Estados a exploração direta ou mediante concessão dos serviços locais de gás canalizado, na forma da lei, e veda a edição de medida provisória para sua regulamentação.",
    explicacaoErradas:
      "O Distrito Federal não pode ser dividido em Municípios (art. 32, caput) e acumula as competências legislativas reservadas aos Estados e aos Municípios (§ 1º). Regiões metropolitanas são instituídas pelos Estados, por lei complementar estadual (art. 25, § 3º). O transporte coletivo de caráter local é serviço de interesse local, a cargo dos Municípios (art. 30, V).",
    pegadinha:
      "A vedação de medida provisória do art. 25, § 2º, parece estranha ao tema, mas é literal; e o transporte coletivo local, embora essencial, é atribuído pela Constituição aos Municípios, e não aos Estados.",
    conhecimento:
      "Estados: competências remanescentes; gás canalizado, vedada medida provisória; regiões metropolitanas, aglomerações urbanas e microrregiões por lei complementar estadual (art. 25). Municípios: assuntos de interesse local e transporte coletivo local (art. 30). DF: competências legislativas de Estados e Municípios, vedada a divisão em Municípios (art. 32).",
    origem: "banco",
  },
  {
    id: "prf-con-017",
    materia: "con",
    topico: "Organização político-administrativa",
    subassunto: "Territórios Federais (arts. 18, § 2º, e 33)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: natureza jurídica e organização dos Territórios Federais",
    enunciado:
      "Suponha que, após plebiscito e lei complementar, seja criado um Território Federal na Região Norte, cortado por rodovias federais fiscalizadas pela PRF. De acordo com a Constituição, esse Território",
    alternativas: [
      "terá autonomia política equivalente à dos Estados, com Governador eleito diretamente pela população local para mandato de quatro anos.",
      "terá Governador escolhido pela Câmara Territorial entre os seus membros, para mandato de quatro anos, sem participação do Presidente da República.",
      "não poderá ser dividido em Municípios, porque, integrando a União, não comporta entes locais dotados de autonomia.",
      "integrará a União, e as contas de seu Governo serão submetidas ao Congresso Nacional, com parecer prévio do Tribunal de Contas da União.",
      "só terá órgãos judiciários de primeira e segunda instância, membros do Ministério Público e defensores federais se superar quinhentos mil habitantes.",
    ],
    correta: 3,
    explicacao:
      "Os Territórios Federais integram a União (art. 18, § 2º) e não têm autonomia política. As contas do Governo do Território são submetidas ao Congresso Nacional, com parecer prévio do TCU (art. 33, § 2º).",
    explicacaoErradas:
      "O Governador do Território é nomeado pelo Presidente da República após aprovação do Senado (arts. 52, III, c, e 84, XIV), e não eleito. O Território pode ser dividido em Municípios (art. 33, § 1º). Órgãos judiciários de primeira e segunda instância, membros do Ministério Público e defensores públicos federais existem nos Territórios com mais de cem mil habitantes (§ 3º).",
    pegadinha:
      "A Câmara Territorial existe, mas não escolhe o Governador; e o número que dispara a estrutura judiciária é cem mil habitantes, e não quinhentos mil.",
    conhecimento:
      "Territórios (art. 33): integram a União; podem ser divididos em Municípios; contas ao Congresso com parecer do TCU; Governador nomeado pelo Presidente após aprovação do Senado; com mais de cem mil habitantes, há órgãos judiciários, Ministério Público, defensores federais e Câmara Territorial.",
    origem: "banco",
  },
  {
    id: "prf-con-018",
    materia: "con",
    topico: "Organização político-administrativa",
    subassunto: "Criação, incorporação, fusão e desmembramento (art. 18, §§ 3º e 4º)",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: requisitos para a alteração territorial de Estados e Municípios",
    enunciado:
      "Moradores de dois distritos cortados por uma rodovia federal, onde a PRF mantém uma unidade operacional, articulam a emancipação das localidades, e lideranças da região também defendem, a longo prazo, a criação de um novo Estado. Sobre o tema, considere as afirmativas:\n\nI. A criação de Município se faz por lei estadual, dentro do período determinado por lei complementar federal.\nII. A criação depende de consulta prévia, mediante plebiscito, às populações dos Municípios envolvidos, após a divulgação dos Estudos de Viabilidade Municipal, apresentados e publicados na forma da lei.\nIII. Diferentemente da criação e do desmembramento, a incorporação e a fusão de Municípios dispensam o plebiscito.\nIV. Um novo Estado pode ser formado por desmembramento, mediante aprovação da população diretamente interessada, por plebiscito, e do Congresso Nacional, por lei complementar.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "I e III, apenas.", "II, III e IV, apenas.", "I, II e III, apenas.", "I, II e IV, apenas."],
    correta: 4,
    explicacao:
      "As afirmativas I e II reproduzem o art. 18, § 4º: lei estadual, no período fixado por lei complementar federal, e plebiscito das populações dos Municípios envolvidos, após a divulgação dos Estudos de Viabilidade Municipal. A afirmativa IV reproduz o § 3º: plebiscito da população diretamente interessada e lei complementar do Congresso Nacional. Logo, I, II e IV.",
    explicacaoErradas:
      "A afirmativa III está errada: o § 4º submete ao mesmo regime — lei estadual, Estudos de Viabilidade e plebiscito — a criação, a incorporação, a fusão e o desmembramento de Municípios. Por isso caem as combinações com III.",
    pegadinha:
      "A afirmativa III cria uma diferença de regime entre as quatro formas de alteração municipal, que o § 4º trata de modo idêntico.",
    conhecimento:
      "Estados (art. 18, § 3º): plebiscito da população diretamente interessada e lei complementar federal. Municípios (§ 4º): lei estadual, no período fixado por lei complementar federal, Estudos de Viabilidade Municipal divulgados e plebiscito das populações dos Municípios envolvidos.",
    origem: "banco",
  },
  {
    id: "prf-con-019",
    materia: "con",
    topico: "Administração pública e servidores públicos",
    subassunto: "Prazo de validade do concurso e prioridade de convocação (art. 37, III e IV)",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: validade, prorrogação e prioridade dos aprovados em concurso",
    enunciado:
      "Um edital de concurso para Agente Administrativo da PRF fixou prazo de validade de um ano. Sobre esse prazo e seus efeitos, de acordo com a Constituição, é correto afirmar que",
    alternativas: [
      "pode ser prorrogado uma vez, por mais um ano, e, enquanto vigorar, o aprovado terá prioridade sobre novos concursados.",
      "pode ser prorrogado uma única vez, por até dois anos, já que esse é o limite fixado pela Constituição para a prorrogação.",
      "a nomeação feita após o seu término é mera irregularidade, sanável pela posse e pelo exercício do servidor nomeado.",
      "durante o prazo, aprovados em concurso posterior podem ser convocados antes, se tiverem obtido notas mais altas.",
      "admite sucessivas prorrogações, desde que a soma de todos os períodos de validade não ultrapasse dois anos.",
    ],
    correta: 0,
    explicacao:
      "O prazo de validade é de até dois anos, prorrogável uma vez, por igual período (art. 37, III); fixado em um ano, só pode ser prorrogado por mais um. Durante o prazo improrrogável previsto no edital, o aprovado tem prioridade sobre novos concursados (art. 37, IV).",
    explicacaoErradas:
      "A prorrogação é por igual período, e não pelo limite máximo de dois anos, e só pode ocorrer uma vez. A nomeação fora da validade viola o art. 37, III, e o § 2º prevê a nulidade do ato e a punição da autoridade responsável. A prioridade do art. 37, IV, não depende de comparação de notas entre concursos.",
    pegadinha:
      "“Até dois anos” é o teto da validade inicial; a prorrogação, uma única vez, repete o prazo efetivamente fixado no edital, qualquer que seja ele.",
    conhecimento:
      "Concurso (art. 37): validade de até dois anos, prorrogável uma vez, por igual período (III); prioridade do aprovado durante o prazo do edital (IV); nulidade do ato e punição da autoridade em caso de descumprimento (§ 2º).",
    origem: "banco",
  },
  {
    id: "prf-con-020",
    materia: "con",
    topico: "Administração pública e servidores públicos",
    subassunto: "Acumulação de cargos públicos (art. 37, XVI, após a EC 138/2025)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: hipóteses de acumulação lícita na redação atual do art. 37, XVI",
    enunciado:
      "Em uma oficina sobre o regime dos servidores promovida pela área de gestão de pessoas da PRF, o instrutor apresentou três casos, todos com compatibilidade de horários:\n\n• Ana, auxiliar de serviços gerais de uma universidade federal, foi aprovada em concurso para professora da rede estadual de ensino;\n• Beto, técnico em contabilidade de um órgão federal, foi aprovado para o cargo de técnico em edificações de um órgão estadual;\n• Caio, médico de um hospital federal, foi aprovado para o cargo de médico de um hospital municipal.\n\nConsiderando a redação atual do art. 37, XVI, da Constituição,",
    alternativas: [
      "apenas Caio pode acumular, pois a exceção do professor exige que o outro cargo seja técnico ou científico.",
      "Ana e Beto podem acumular, mas Caio não, porque a exceção da saúde não alcança cargos de entes federativos diferentes.",
      "Ana e Caio podem acumular, observado o teto remuneratório, e Beto deverá optar por um dos cargos.",
      "os três podem acumular, porque a EC 138/2025 eliminou as restrições sempre que houver compatibilidade de horários.",
      "nenhum deles pode acumular, porque cargos em entes federativos diferentes exigem dedicação exclusiva.",
    ],
    correta: 2,
    explicacao:
      "Com a EC 138/2025, o art. 37, XVI, b, passou a admitir a acumulação de um cargo de professor com outro de qualquer natureza, havendo compatibilidade de horários; por isso Ana pode acumular. Caio se enquadra na alínea c (dois cargos privativos de profissionais de saúde, com profissões regulamentadas). Dois cargos técnicos não estão entre as exceções, e Beto não pode acumular.",
    explicacaoErradas:
      "A exigência de que o outro cargo fosse técnico ou científico constava da redação anterior da alínea b, alterada pela EC 138/2025. Pertencer a entes federativos diferentes não afasta as exceções nem cria vedações. A emenda não eliminou as restrições: continua vedada a acumulação fora das alíneas a, b e c, e sempre se observa o teto do inciso XI.",
    pegadinha:
      "A redação anterior da alínea b (professor com técnico ou científico) ainda circula em materiais desatualizados; a questão cobra o texto vigente, que ampliou a exceção do professor, mas não a dos demais cargos.",
    conhecimento:
      "Art. 37, XVI (redação da EC 138/2025): com compatibilidade de horários e observado o teto, admite-se acumular dois cargos de professor; um cargo de professor com outro de qualquer natureza; e dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas. A vedação alcança empregos e funções na administração indireta (XVII).",
    origem: "banco",
  },
  {
    id: "prf-con-021",
    materia: "con",
    topico: "Administração pública e servidores públicos",
    subassunto: "Estabilidade, reintegração e recondução (art. 41, § 2º)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: efeitos da invalidação judicial da demissão sobre o servidor e o ocupante da vaga",
    enunciado:
      "Um servidor estável da PRF foi demitido após processo administrativo, e outro servidor, também estável, passou a ocupar o cargo vago. Anos depois, sentença judicial invalidou a demissão. Segundo a Constituição,",
    alternativas: [
      "o servidor demitido será aproveitado em outro cargo de atribuições e vencimentos compatíveis, mantido o ocupante atual.",
      "o ocupante da vaga será exonerado, com direito a indenização, para que o servidor demitido retorne ao cargo.",
      "o servidor demitido terá direito apenas à indenização, pois o cargo já está provido por servidor estável.",
      "o demitido será reintegrado, e o ocupante da vaga, se estável, reconduzido ao cargo de origem, sem direito a indenização.",
      "o ocupante da vaga será posto em disponibilidade com remuneração integral até o seu adequado aproveitamento.",
    ],
    correta: 3,
    explicacao:
      "Pelo art. 41, § 2º, invalidada por sentença judicial a demissão do servidor estável, ele será reintegrado, e o eventual ocupante da vaga, se estável, reconduzido ao cargo de origem, sem direito a indenização, aproveitado em outro cargo ou posto em disponibilidade com remuneração proporcional ao tempo de serviço.",
    explicacaoErradas:
      "A consequência da invalidação é a reintegração do demitido, e não seu aproveitamento em outro cargo nem a mera indenização. O ocupante estável não é exonerado nem indenizado: é reconduzido, aproveitado ou posto em disponibilidade. A disponibilidade se dá com remuneração proporcional ao tempo de serviço, e não integral.",
    pegadinha:
      "A disponibilidade com remuneração integral não existe na Constituição; os §§ 2º e 3º do art. 41 falam sempre em remuneração proporcional ao tempo de serviço.",
    conhecimento:
      "Art. 41: estabilidade após três anos de efetivo exercício, com avaliação especial de desempenho; perda do cargo por sentença transitada em julgado, processo administrativo com ampla defesa ou avaliação periódica de desempenho; reintegração do demitido e recondução do ocupante estável (§ 2º); disponibilidade com remuneração proporcional (§ 3º).",
    origem: "banco",
  },
  {
    id: "prf-con-022",
    materia: "con",
    topico: "Poder Legislativo",
    subassunto: "Composição da Câmara e do Senado (arts. 45 e 46)",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: sistemas eleitorais, número de representantes e renovação do Senado",
    enunciado:
      "Em um curso de formação, um grupo de servidores da PRF preparou um quadro comparativo sobre a composição das Casas do Congresso Nacional. Está de acordo com a Constituição a informação de que",
    alternativas: [
      "o número total de Deputados e a representação por Estado são fixados em lei ordinária, proporcionalmente ao eleitorado de cada unidade.",
      "cada Território Federal elege três Senadores, como os Estados, e quatro Deputados Federais, número fixado na própria Constituição.",
      "os Deputados Federais são eleitos pelo sistema majoritário e os Senadores, pelo proporcional, ambos para mandato de oito anos.",
      "a representação de cada Estado e do Distrito Federal no Senado é renovada sempre pela metade, de quatro em quatro anos.",
      "cada Senador é eleito com dois suplentes, e a renovação do Senado alterna um terço e dois terços a cada quatro anos.",
    ],
    correta: 4,
    explicacao:
      "Cada Senador é eleito com dois suplentes (art. 46, § 3º), e a representação de cada Estado e do Distrito Federal é renovada de quatro em quatro anos, alternadamente, por um e dois terços (§ 2º).",
    explicacaoErradas:
      "O número total de Deputados e a representação por Estado são fixados por lei complementar, proporcionalmente à população, com mínimo de oito e máximo de setenta (art. 45, § 1º). Os Territórios elegem quatro Deputados (§ 2º), mas não Senadores. Deputados são eleitos pelo sistema proporcional, para quatro anos; Senadores, pelo majoritário, para oito. A renovação do Senado alterna um terço e dois terços.",
    pegadinha:
      "As informações erradas trocam elementos de pares bem próximos: lei complementar por ordinária, população por eleitorado, sistema proporcional por majoritário e a renovação alternada por uma divisão em metades.",
    conhecimento:
      "Câmara: representantes do povo, sistema proporcional, número fixado por lei complementar conforme a população (mínimo 8, máximo 70), Territórios com 4. Senado: representantes dos Estados e do DF, sistema majoritário, 3 Senadores por ente, mandato de 8 anos, 2 suplentes, renovação alternada de 1/3 e 2/3.",
    origem: "banco",
  },
  {
    id: "prf-con-023",
    materia: "con",
    topico: "Poder Legislativo",
    subassunto: "Imunidade formal: sustação do processo (art. 53, §§ 3º a 5º)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: iniciativa, quórum e efeitos da sustação da ação penal contra parlamentar",
    enunciado:
      "Em uma aula sobre imunidades parlamentares no curso de formação da PRF, foi apresentado o seguinte caso: o Supremo Tribunal Federal recebeu denúncia contra um Deputado Federal por crime praticado após a diplomação e relacionado ao exercício do mandato. Segundo a Constituição, é correto afirmar que",
    alternativas: [
      "a Câmara, por iniciativa de partido nela representado e pela maioria de seus membros, pode sustar a ação penal.",
      "o recebimento da denúncia dependia de licença prévia da Câmara, concedida pelo voto de dois terços de seus membros.",
      "a sustação pode ser requerida por qualquer cidadão, e a Casa deve apreciá-la no prazo improrrogável de noventa dias.",
      "a sustação do processo, se aprovada, não suspende a prescrição, que continua a correr durante o mandato.",
      "a imunidade material impede o processo por qualquer crime praticado durante o mandato, ainda que alheio a opiniões, palavras e votos.",
    ],
    correta: 0,
    explicacao:
      "Recebida a denúncia por crime ocorrido após a diplomação, o STF dá ciência à Casa, que, por iniciativa de partido político nela representado e pelo voto da maioria de seus membros, pode sustar o andamento da ação até a decisão final (art. 53, § 3º). O pedido é apreciado em quarenta e cinco dias (§ 4º), e a sustação suspende a prescrição enquanto durar o mandato (§ 5º).",
    explicacaoErradas:
      "A licença prévia da Casa para processar parlamentar foi extinta pela EC 35/2001. A iniciativa da sustação é de partido político representado na Casa, e o prazo de apreciação é de quarenta e cinco dias. A sustação suspende a prescrição enquanto durar o mandato. A imunidade material protege opiniões, palavras e votos, e não afasta o processo por crimes comuns.",
    pegadinha:
      "O regime anterior à EC 35/2001 (licença prévia) ainda aparece em materiais antigos; hoje o processo segue, e a Casa só pode sustá-lo depois, por provocação de partido político.",
    conhecimento:
      "Art. 53: imunidade material por opiniões, palavras e votos; prisão só em flagrante de crime inafiançável, com deliberação da Casa por maioria (§ 2º); sustação da ação penal por crime posterior à diplomação, por iniciativa de partido e maioria da Casa (§ 3º), apreciada em 45 dias (§ 4º), com suspensão da prescrição (§ 5º).",
    origem: "banco",
  },
  {
    id: "prf-con-024",
    materia: "con",
    topico: "Poder Legislativo",
    subassunto: "Comissões parlamentares de inquérito: criação e limites (art. 58, § 3º)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: requisitos de criação da CPI, direito da minoria e reserva de jurisdição",
    enunciado:
      "Senadores pretendem instalar comissão parlamentar de inquérito para investigar irregularidades na compra de viaturas e equipamentos destinados a órgãos federais de segurança, entre eles a PRF. Segundo a Constituição e a jurisprudência do STF, essa CPI",
    alternativas: [
      "pode decretar a indisponibilidade dos bens dos investigados, para garantir o futuro ressarcimento ao erário.",
      "será criada a requerimento de um terço dos Senadores, para apurar fato determinado, por prazo certo.",
      "requerida por um terço dos Senadores, ainda dependerá de aprovação do Plenário, por maioria absoluta, para ser instalada.",
      "pode determinar a interceptação telefônica dos investigados, se a medida for aprovada pela maioria absoluta de seus membros.",
      "pode decretar a prisão preventiva de testemunha que, regularmente intimada, deixe de comparecer sem motivo justificado.",
    ],
    correta: 1,
    explicacao:
      "As CPIs são criadas mediante requerimento de um terço dos membros da Casa, para a apuração de fato determinado e por prazo certo, e suas conclusões, se for o caso, são encaminhadas ao Ministério Público (art. 58, § 3º). A compra de viaturas e equipamentos é fato determinado.",
    explicacaoErradas:
      "Preenchidos os requisitos, a criação é direito da minoria parlamentar, e o Plenário não pode condicioná-la a nova votação (STF, MS 24.831). A CPI não pode decretar indisponibilidade de bens, interceptação telefônica nem prisão preventiva, medidas sujeitas à reserva de jurisdição; diante da testemunha faltosa, deve solicitar a intimação ao juiz criminal, na forma do art. 218 do CPP (Lei 1.579/1952, art. 3º, § 1º).",
    pegadinha:
      "A CPI tem poderes de investigação próprios das autoridades judiciais, mas não todos os poderes do juiz; e o requerimento de um terço basta, porque a criação não pode ficar à mercê da maioria.",
    conhecimento:
      "CPI (art. 58, § 3º): requerimento de um terço dos membros, fato determinado e prazo certo; criação como direito da minoria; pode quebrar sigilos bancário, fiscal e de dados telefônicos por decisão fundamentada; não pode decretar prisão (salvo flagrante), interceptação telefônica, busca domiciliar nem indisponibilidade de bens.",
    origem: "banco",
  },
  {
    id: "prf-con-025",
    materia: "con",
    topico: "Poder Executivo",
    subassunto: "Mandato, posse, substituição e ausência do Presidente (arts. 78 a 83)",
    dificuldade: 4,
    raciocinio: "Conceito aplicado: início do mandato, ordem de chamamento à Presidência e licença para ausência",
    enunciado:
      "Em uma aula sobre o Poder Executivo no curso de formação da PRF, foram feitas afirmações sobre o mandato e o exercício da Presidência da República. Está de acordo com a Constituição a afirmação de que",
    alternativas: [
      "impedidos o Presidente e o Vice, o Presidente do Senado é chamado antes do Presidente da Câmara, por presidir o Congresso Nacional.",
      "o Presidente da República pode ausentar-se do País por até trinta dias sem licença do Congresso Nacional.",
      "o mandato presidencial é de quatro anos e tem início em 5 de janeiro do ano seguinte ao da eleição.",
      "o Presidente da Câmara que assume a Presidência na vacância dos dois cargos cumpre o restante do mandato.",
      "a posse do Presidente e do Vice ocorre perante o Tribunal Superior Eleitoral, em sessão solene.",
    ],
    correta: 2,
    explicacao:
      "Com a EC 111/2021, aplicada a partir das eleições de 2026, o art. 82 passou a prever que o mandato do Presidente da República é de quatro anos e tem início em 5 de janeiro do ano seguinte ao de sua eleição.",
    explicacaoErradas:
      "Impedidos o Presidente e o Vice, são chamados sucessivamente os Presidentes da Câmara, do Senado e do STF (art. 80). A ausência do País por mais de quinze dias depende de licença do Congresso (art. 83). O Presidente da Câmara apenas exerce o cargo temporariamente: vagos os dois cargos, faz-se nova eleição (art. 81). A posse ocorre em sessão do Congresso Nacional (art. 78).",
    pegadinha:
      "A data de 1º de janeiro, presente em materiais antigos, foi substituída pela de 5 de janeiro; e a precedência do Presidente da Câmara sobre o do Senado contraria a intuição de que o chefe do Congresso viria primeiro.",
    conhecimento:
      "Executivo federal: mandato de 4 anos, com início em 5 de janeiro (art. 82, EC 111/2021); posse perante o Congresso (art. 78); substituição pelo Vice e, depois, pelos Presidentes da Câmara, do Senado e do STF (art. 80); ausência do País por mais de 15 dias exige licença (art. 83).",
    origem: "banco",
  },
  {
    id: "prf-con-026",
    materia: "con",
    topico: "Poder Executivo",
    subassunto: "Dupla vacância da Presidência (art. 81)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: eleição direta ou indireta conforme o momento da última vaga",
    enunciado:
      "Suponha que o Presidente da República renuncie no início do terceiro ano do mandato e que o Vice-Presidente, que havia assumido o cargo, morra alguns meses depois, ainda no mesmo ano. Segundo a Constituição,",
    alternativas: [
      "o Presidente da Câmara dos Deputados assumirá a Presidência até o fim do período presidencial.",
      "haverá eleição direta noventa dias depois da última vaga, e os eleitos cumprirão novo mandato de quatro anos.",
      "o Congresso Nacional fará a eleição noventa dias depois de aberta a primeira vaga, contada a partir da renúncia.",
      "o Congresso Nacional elegerá Presidente e Vice trinta dias depois da última vaga, para completar o período.",
      "haverá eleição direta trinta dias depois da última vaga, porque a eleição indireta só vale para o último ano do mandato.",
    ],
    correta: 3,
    explicacao:
      "Como as duas vagas se abriram nos últimos dois anos do período presidencial, a eleição para ambos os cargos é feita pelo Congresso Nacional, trinta dias depois da última vaga, na forma da lei (art. 81, § 1º), e os eleitos completam o período dos antecessores (§ 2º).",
    explicacaoErradas:
      "O Presidente da Câmara só exerce a Presidência temporariamente, até a posse dos eleitos. A eleição direta, noventa dias depois da última vaga, é a regra para a vacância nos dois primeiros anos (art. 81, caput). O prazo se conta da última vaga, e não da primeira. Em qualquer caso, os eleitos apenas completam o período, sem novo mandato de quatro anos.",
    pegadinha:
      "A primeira vaga (renúncia) não dispara a eleição, porque o Vice sucede o Presidente; o marco é a última vaga, e o critério é se ela ocorreu na primeira ou na segunda metade do mandato.",
    conhecimento:
      "Dupla vacância (art. 81): nos dois primeiros anos, eleição direta em 90 dias da última vaga; nos dois últimos anos, eleição indireta pelo Congresso em 30 dias; em ambos os casos, os eleitos apenas completam o período dos antecessores.",
    origem: "banco",
  },
  {
    id: "prf-con-027",
    materia: "con",
    topico: "Poder Executivo",
    subassunto: "Atribuições delegáveis do Presidente (art. 84, parágrafo único)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: atribuições delegáveis, destinatários da delegação e limites do decreto autônomo",
    enunciado:
      "Em um estudo sobre a estrutura do Ministério ao qual a PRF se vincula, servidores analisaram as atribuições privativas do Presidente da República. Segundo a Constituição, o Presidente pode",
    alternativas: [
      "delegar ao Ministro da Justiça e Segurança Pública a sanção das leis aprovadas pelo Congresso Nacional.",
      "extinguir por decreto cargos públicos ocupados, desde que a medida não implique aumento de despesa.",
      "delegar aos Ministros de Estado, por inteiro, a competência de prover e de extinguir cargos públicos federais.",
      "delegar a concessão de indulto ao Advogado-Geral da União, mas não aos Ministros de Estado.",
      "delegar ao Advogado-Geral da União a extinção de funções ou cargos públicos vagos, nos limites da delegação.",
    ],
    correta: 4,
    explicacao:
      "O parágrafo único do art. 84 permite delegar aos Ministros de Estado, ao PGR ou ao AGU as atribuições dos incisos VI (decreto sobre organização da administração e extinção de funções ou cargos vagos), XII (indulto e comutação de penas) e XXV, primeira parte (prover cargos públicos federais). A extinção de cargos vagos por decreto (VI, b) pode, portanto, ser delegada ao AGU.",
    explicacaoErradas:
      "A sanção de leis (IV) não é delegável. O decreto do inciso VI, b, só alcança funções ou cargos vagos; os ocupados dependem de lei. Do inciso XXV, apenas a primeira parte — prover cargos — é delegável. O indulto (XII) pode ser delegado aos Ministros de Estado, ao PGR ou ao AGU, sem exclusão dos Ministros.",
    pegadinha:
      "O verbo “extinguir” aparece em dois incisos: no VI, b (cargos vagos, por decreto, delegável) e no XXV (extinção de cargos na forma da lei, não delegável). A questão exige separar os dois.",
    conhecimento:
      "Delegáveis (art. 84, parágrafo único): VI (decreto autônomo), XII (indulto e comutação) e XXV, primeira parte (prover cargos), aos Ministros de Estado, ao PGR e ao AGU. Decreto autônomo: organização da administração sem aumento de despesa nem criação ou extinção de órgãos; extinção de funções ou cargos vagos.",
    origem: "banco",
  },
  {
    id: "prf-con-028",
    materia: "con",
    topico: "Poder Judiciário e CNJ",
    subassunto: "Conselho Nacional de Justiça (arts. 92 e 103-B)",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: natureza, direção, mandato e alcance do controle do CNJ",
    enunciado:
      "Em um curso de formação, servidores da PRF que atuarão na interlocução com órgãos do Judiciário estudaram o Conselho Nacional de Justiça. Considere as afirmativas:\n\nI. O CNJ é órgão do Poder Judiciário, mas não exerce função jurisdicional.\nII. O Conselho é presidido pelo Presidente do Supremo Tribunal Federal, e o Ministro do Superior Tribunal de Justiça exerce a função de Ministro-Corregedor.\nIII. Os conselheiros têm mandato de dois anos, vedada a recondução.\nIV. O CNJ exerce controle administrativo sobre o Supremo Tribunal Federal e seus Ministros.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "I e III, apenas.", "II e IV, apenas.", "I, II e IV, apenas.", "I, III e IV, apenas."],
    correta: 0,
    explicacao:
      "A afirmativa I está correta: o CNJ integra o Poder Judiciário (art. 92, I-A), mas tem atribuições administrativas, financeiras e disciplinares, sem função jurisdicional. A afirmativa II também: o Presidente do STF preside o Conselho (art. 103-B, § 1º), e o Ministro do STJ é o Ministro-Corregedor (§ 5º). Logo, I e II.",
    explicacaoErradas:
      "A afirmativa III está errada: o mandato é de dois anos, admitida uma recondução (art. 103-B, caput). A afirmativa IV está errada: o STF, órgão de cúpula do Judiciário, não se submete ao controle do CNJ (ADI 3.367). Por isso caem as combinações com III ou IV.",
    pegadinha:
      "A afirmativa IV parece lógica, porque o CNJ controla a atuação administrativa do Judiciário; mas o STF está acima do Conselho, cujo Presidente é o próprio Presidente do Supremo.",
    conhecimento:
      "CNJ (art. 103-B): 15 membros, mandato de 2 anos, admitida uma recondução; presidido pelo Presidente do STF; corregedor é o Ministro do STJ; controla a atuação administrativa e financeira do Judiciário e o cumprimento dos deveres funcionais dos juízes; não exerce jurisdição nem controla o STF.",
    origem: "banco",
  },
  {
    id: "prf-con-029",
    materia: "con",
    topico: "Poder Judiciário e CNJ",
    subassunto: "Garantias da magistratura: vitaliciedade e remoção (arts. 93, VIII, e 95)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: aquisição da vitaliciedade, perda do cargo no estágio e remoção por interesse público",
    enunciado:
      "Um juiz federal substituto, com um ano e meio de exercício, atua em vara que julga ações envolvendo a PRF. Sobre as garantias e vedações da magistratura, é correto afirmar que",
    alternativas: [
      "a remoção por interesse público exigirá decisão da maioria absoluta do tribunal ou do CNJ, assegurada a ampla defesa.",
      "ele já é vitalício, pois, no primeiro grau, a vitaliciedade se adquire com a posse dos aprovados em concurso público.",
      "nesse período, ele só perde o cargo por sentença judicial transitada em julgado, assim como o juiz que já é vitalício.",
      "a remoção por interesse público só pode ser decidida pelo CNJ, vedada essa deliberação ao tribunal a que o juiz se vincula.",
      "ele não pode exercer o magistério enquanto não adquirir a vitaliciedade, ainda que haja compatibilidade de horários.",
    ],
    correta: 0,
    explicacao:
      "Pelo art. 93, VIII, o ato de remoção ou de disponibilidade do magistrado por interesse público funda-se em decisão por voto da maioria absoluta do respectivo tribunal ou do CNJ, assegurada a ampla defesa. A regra vale para o juiz vitalício ou não.",
    explicacaoErradas:
      "No primeiro grau, a vitaliciedade só é adquirida após dois anos de exercício (art. 95, I); até lá, a perda do cargo depende de deliberação do tribunal a que o juiz está vinculado, e não de sentença transitada em julgado. O tribunal também pode decidir a remoção, e não só o CNJ. O magistério é a única outra função permitida ao juiz (art. 95, parágrafo único, I), sem condicionamento à vitaliciedade.",
    pegadinha:
      "A competência para a remoção por interesse público é concorrente: tribunal ou CNJ, sempre por maioria absoluta e com ampla defesa; atribuí-la só ao CNJ é a armadilha.",
    conhecimento:
      "Garantias (art. 95): vitaliciedade após 2 anos de exercício no primeiro grau; inamovibilidade, salvo interesse público (art. 93, VIII: maioria absoluta do tribunal ou do CNJ); irredutibilidade de subsídio. Vedações: outro cargo, salvo um de magistério; custas; atividade político-partidária; auxílios; advocacia no juízo de que se afastou antes de 3 anos.",
    origem: "banco",
  },
  {
    id: "prf-con-030",
    materia: "con",
    topico: "Poder Judiciário e CNJ",
    subassunto: "Composição e nomeação dos Ministros do STF e do STJ",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: requisitos e procedimento de nomeação para os tribunais superiores",
    enunciado:
      "Em um estudo sobre a estrutura do Judiciário, servidores da PRF compararam as regras de composição do Supremo Tribunal Federal e do Superior Tribunal de Justiça. Está de acordo com a Constituição a conclusão de que",
    alternativas: [
      "os Ministros do STJ, como os do STF, devem ser brasileiros natos, com mais de trinta e cinco e menos de setenta anos de idade.",
      "os Ministros do STF são nomeados pelo Presidente da República depois de aprovada a escolha pela maioria absoluta do Senado.",
      "o STJ compõe-se de, no máximo, trinta e três Ministros, número que só pode ser alterado por emenda constitucional.",
      "um terço dos Ministros do STF provém dos Tribunais Regionais Federais e um terço, dos Tribunais de Justiça.",
      "a aprovação dos indicados ao STF pelo Senado se dá por maioria simples dos presentes, em votação aberta, após arguição pública.",
    ],
    correta: 1,
    explicacao:
      "Os Ministros do STF são nomeados pelo Presidente da República, depois de aprovada a escolha pela maioria absoluta do Senado Federal (art. 101, parágrafo único), em votação secreta, após arguição pública (art. 52, III, a).",
    explicacaoErradas:
      "O STJ exige brasileiros com mais de trinta e cinco e menos de setenta anos, sem exigir que sejam natos (art. 104, parágrafo único). O STJ tem, no mínimo, trinta e três Ministros. A divisão em terços (TRFs, TJs e advogados e membros do MP) é a do STJ, e não a do STF, cujos Ministros são escolhidos entre cidadãos de notável saber jurídico e reputação ilibada. A aprovação pelo Senado é por maioria absoluta, em voto secreto.",
    pegadinha:
      "As regras do STF e do STJ são parecidas e a questão as cruza: idade e aprovação pela maioria absoluta do Senado valem para os dois, mas a exigência de brasileiro nato é só do STF, e a composição em terços é só do STJ.",
    conhecimento:
      "STF (art. 101): 11 Ministros natos, de 35 a 70 anos, de notável saber jurídico e reputação ilibada, nomeados após aprovação pela maioria absoluta do Senado. STJ (art. 104): no mínimo 33 Ministros, brasileiros de 35 a 70 anos; um terço de juízes dos TRFs, um terço de desembargadores dos TJs e um terço, em partes iguais, de advogados e membros do MP.",
    origem: "banco",
  },
  {
    id: "prf-con-031",
    materia: "con",
    topico: "Funções essenciais à Justiça",
    subassunto: "Chefia do Ministério Público: nomeação e destituição (art. 128, §§ 1º a 4º)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: regras de escolha, recondução e destituição do PGR e dos PGJs",
    enunciado:
      "Em um estudo sobre as funções essenciais à Justiça, servidores da PRF compararam a chefia do Ministério Público da União e a dos Ministérios Públicos dos Estados. Está de acordo com a Constituição a afirmação de que",
    alternativas: [
      "o Procurador-Geral da República é escolhido pelo Presidente em lista tríplice elaborada pelos integrantes da carreira.",
      "a destituição do Procurador-Geral da República, pelo Presidente, exige prévia autorização da maioria absoluta do Senado.",
      "os Procuradores-Gerais de Justiça podem ser reconduzidos sucessivamente, sem limite, enquanto houver confiança do Governador.",
      "a destituição do Procurador-Geral de Justiça antes do fim do mandato cabe ao Governador, por ato discricionário e imediato.",
      "o Procurador-Geral da República é nomeado entre integrantes da carreira maiores de trinta anos, sem aprovação do Senado Federal.",
    ],
    correta: 1,
    explicacao:
      "O art. 128, § 2º, condiciona a destituição do Procurador-Geral da República, por iniciativa do Presidente da República, à prévia autorização da maioria absoluta do Senado Federal.",
    explicacaoErradas:
      "O PGR é nomeado pelo Presidente dentre integrantes da carreira maiores de trinta e cinco anos, após aprovação pela maioria absoluta do Senado, sem lista tríplice (§ 1º); a lista tríplice é a dos Ministérios Públicos dos Estados. Os PGJs têm mandato de dois anos, permitida uma recondução (§ 3º), e sua destituição depende de deliberação da maioria absoluta do Poder Legislativo (§ 4º).",
    pegadinha:
      "A lista tríplice existe, mas na escolha do Procurador-Geral de Justiça; trazê-la para o PGR, e o poder de destituição para o Governador, inverte a lógica de cada esfera.",
    conhecimento:
      "PGR (art. 128, §§ 1º e 2º): integrante da carreira, maior de 35 anos, nomeado pelo Presidente após aprovação da maioria absoluta do Senado; mandato de 2 anos, permitida a recondução; destituição com autorização da maioria absoluta do Senado. PGJ (§§ 3º e 4º): lista tríplice, nomeação pelo Governador, mandato de 2 anos com uma recondução; destituição pela maioria absoluta do Legislativo.",
    origem: "banco",
  },
  {
    id: "prf-con-032",
    materia: "con",
    topico: "Funções essenciais à Justiça",
    subassunto: "Funções institucionais do Ministério Público (art. 129)",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: ação penal pública, legitimação civil concorrente, vedações e requisições",
    enunciado:
      "Durante um curso sobre a atuação integrada entre a PRF e o sistema de justiça, foram examinadas as funções institucionais do Ministério Público. Considere as afirmativas:\n\nI. O Ministério Público promove, privativamente, a ação penal pública, o que não impede a ação privada subsidiária quando a ação pública não é intentada no prazo legal.\nII. A legitimação do Ministério Público para as ações civis previstas no art. 129 não impede a de terceiros, nas mesmas hipóteses, segundo a Constituição e a lei.\nIII. O Ministério Público pode representar judicialmente a União e prestar-lhe consultoria jurídica, quando houver interesse público relevante.\nIV. O Ministério Público pode requisitar diligências investigatórias e a instauração de inquérito policial, indicados os fundamentos jurídicos de suas manifestações.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II e III, apenas.", "I, II e IV, apenas.", "I, III e IV, apenas.", "III e IV, apenas."],
    correta: 2,
    explicacao:
      "A afirmativa I está correta: a ação penal pública é privativa do MP (art. 129, I), ressalvada a ação privada subsidiária (art. 5º, LIX). A afirmativa II reproduz o § 1º do art. 129. A afirmativa IV reproduz o inciso VIII. Logo, I, II e IV.",
    explicacaoErradas:
      "A afirmativa III está errada: o art. 129, IX, permite ao MP exercer outras funções compatíveis com sua finalidade, mas lhe veda a representação judicial e a consultoria jurídica de entidades públicas, atribuições da advocacia pública. Por isso caem as combinações com III.",
    pegadinha:
      "A palavra “privativamente” na afirmativa I parece incompatível com a ação privada subsidiária, mas a própria Constituição prevê as duas regras (art. 129, I, e art. 5º, LIX).",
    conhecimento:
      "Art. 129: ação penal pública (I); inquérito civil e ação civil pública (III); controle externo da atividade policial (VII); requisição de diligências e de inquérito (VIII); vedadas a representação judicial e a consultoria de entidades públicas (IX). Legitimação civil concorrente com terceiros (§ 1º).",
    origem: "banco",
  },
  {
    id: "prf-con-033",
    materia: "con",
    topico: "Funções essenciais à Justiça",
    subassunto: "Advocacia Pública e Defensoria Pública (arts. 131 a 134)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: chefia e atribuições da AGU, representação na dívida ativa e autonomia da Defensoria",
    enunciado:
      "Em um curso sobre a defesa judicial de atos da PRF e a orientação jurídica à população atendida nas rodovias, foram comparadas a Advocacia-Geral da União e a Defensoria Pública. Está de acordo com a Constituição a afirmação de que",
    alternativas: [
      "o Advogado-Geral da União é escolhido entre membros da carreira, com aprovação prévia do Senado Federal.",
      "a consultoria e o assessoramento jurídico do Poder Executivo federal cabem ao Ministério Público Federal.",
      "às Defensorias Públicas Estaduais cabem autonomia funcional e administrativa e a iniciativa da proposta orçamentária.",
      "na execução da dívida ativa tributária, a União é representada pela Consultoria-Geral da União, órgão da Advocacia-Geral.",
      "a Defensoria Pública atua apenas na esfera judicial, cabendo a orientação extrajudicial dos necessitados à advocacia privada.",
    ],
    correta: 2,
    explicacao:
      "O art. 134, § 2º, assegura às Defensorias Públicas Estaduais autonomia funcional e administrativa e a iniciativa de sua proposta orçamentária, dentro dos limites da lei de diretrizes orçamentárias. A EC 74/2013 estendeu essas garantias às Defensorias da União e do Distrito Federal (§ 3º).",
    explicacaoErradas:
      "O Advogado-Geral da União é de livre nomeação pelo Presidente, dentre cidadãos maiores de trinta e cinco anos, de notável saber jurídico e reputação ilibada (art. 131, § 1º). A consultoria e o assessoramento jurídico do Executivo cabem à AGU (art. 131, caput). Na execução da dívida ativa tributária, a União é representada pela Procuradoria-Geral da Fazenda Nacional (§ 3º). A Defensoria atua nas esferas judicial e extrajudicial (art. 134).",
    pegadinha:
      "A representação da União na execução da dívida ativa tributária é atribuída expressamente à Procuradoria-Geral da Fazenda Nacional (art. 131, § 3º), e não à Consultoria-Geral da União.",
    conhecimento:
      "AGU (art. 131): representação judicial e extrajudicial da União e consultoria do Executivo; chefe de livre nomeação, maior de 35 anos; dívida ativa tributária pela PGFN (§ 3º). Defensoria (art. 134): orientação jurídica e defesa dos necessitados, judicial e extrajudicial; autonomia funcional e administrativa e iniciativa orçamentária (§§ 2º e 3º).",
    origem: "banco",
  },
  {
    id: "prf-con-034",
    materia: "con",
    topico: "Direitos e deveres individuais e coletivos",
    subassunto: "Crimes inafiançáveis e imprescritíveis (art. 5º, XLII a XLIV)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: distinção entre inafiançabilidade, imprescritibilidade e vedação de graça e anistia",
    enunciado:
      "Em uma capacitação sobre o atendimento de ocorrências graves em rodovias federais, servidores da PRF revisaram os mandados constitucionais de criminalização do art. 5º. Está de acordo com a Constituição a afirmação de que",
    alternativas: [
      "o terrorismo é crime inafiançável e imprescritível, por atentar diretamente contra a ordem constitucional.",
      "a prática do racismo constitui crime inafiançável, mas prescritível, sujeito à pena de reclusão.",
      "a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático é crime inafiançável e imprescritível.",
      "o tráfico ilícito de entorpecentes é imprescritível, e por ele respondem os mandantes, os executores e os que, podendo evitá-lo, se omitirem.",
      "os crimes hediondos são inafiançáveis e insuscetíveis de graça, mas podem ser objeto de anistia concedida por lei do Congresso.",
    ],
    correta: 2,
    explicacao:
      "O art. 5º, XLIV, define como crime inafiançável e imprescritível a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático. Ao lado do racismo (XLII), é uma das duas hipóteses de imprescritibilidade na Constituição.",
    explicacaoErradas:
      "Terrorismo, tortura, tráfico ilícito de entorpecentes e crimes hediondos são inafiançáveis e insuscetíveis de graça ou anistia, mas não imprescritíveis (XLIII); por eles respondem os mandantes, os executores e os que, podendo evitá-los, se omitirem. O racismo é inafiançável e imprescritível, sujeito à pena de reclusão (XLII). Os hediondos não admitem anistia.",
    pegadinha:
      "A imprescritibilidade é exceção reservada a dois crimes — racismo e ação de grupos armados; os crimes do inciso XLIII, ainda que gravíssimos, prescrevem.",
    conhecimento:
      "Racismo e ação de grupos armados contra a ordem constitucional: inafiançáveis e imprescritíveis (XLII e XLIV). Tortura, tráfico, terrorismo e hediondos: inafiançáveis e insuscetíveis de graça ou anistia (XLIII). Racismo: pena de reclusão.",
    origem: "banco",
  },
  {
    id: "prf-con-035",
    materia: "con",
    topico: "Direitos e deveres individuais e coletivos",
    subassunto: "Mandado de segurança individual e coletivo (art. 5º, LXIX e LXX)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: autoridade equiparada no mandado de segurança e legitimados do mandado de segurança coletivo",
    enunciado:
      "Uma concessionária de rodovia federal, no exercício de atribuição delegada pelo poder concedente, praticou ato que um usuário considera violador de direito líquido e certo, não amparado por habeas corpus nem por habeas data. Sobre os remédios cabíveis, é correto afirmar que",
    alternativas: [
      "não cabe mandado de segurança, porque a concessionária é pessoa jurídica de direito privado, nunca equiparada a autoridade.",
      "partido político com representação em ao menos uma Assembleia Legislativa pode impetrar mandado de segurança coletivo pelos usuários.",
      "o mandado de segurança coletivo impetrado por associação exige autorização expressa dos associados, individual ou em assembleia.",
      "o mandado de segurança coletivo só pode ser impetrado por associação legalmente constituída e em funcionamento há pelo menos dois anos.",
      "cabe mandado de segurança, pois se equipara a autoridade o agente de pessoa jurídica privada no exercício de atribuições do Poder Público.",
    ],
    correta: 4,
    explicacao:
      "O mandado de segurança protege direito líquido e certo, não amparado por habeas corpus ou habeas data, contra ilegalidade ou abuso de autoridade pública ou de agente de pessoa jurídica no exercício de atribuições do Poder Público (art. 5º, LXIX). A Lei 12.016/2009 equipara a autoridade os dirigentes de pessoas jurídicas no exercício dessas atribuições (art. 1º, § 1º) e só exclui os atos de gestão comercial das concessionárias (§ 2º).",
    explicacaoErradas:
      "A natureza privada da concessionária não afasta o mandado de segurança quando ela exerce atribuição do Poder Público. O partido legitimado ao mandado de segurança coletivo precisa ter representação no Congresso Nacional (LXX, a). A associação impetra o coletivo independentemente de autorização dos associados (Súmula 629 do STF), e o requisito temporal é de um ano de funcionamento (LXX, b).",
    pegadinha:
      "A exclusão da Lei 12.016/2009 alcança apenas os atos de gestão comercial das concessionárias; o ato praticado no exercício da atribuição delegada continua sujeito ao mandado de segurança.",
    conhecimento:
      "Mandado de segurança: direito líquido e certo, residual em relação ao habeas corpus e ao habeas data, contra autoridade ou agente de pessoa jurídica no exercício de atribuição pública. Coletivo (LXX): partido com representação no Congresso; sindicato, entidade de classe ou associação em funcionamento há pelo menos um ano, sem necessidade de autorização (Súmula 629).",
    origem: "banco",
  },
  {
    id: "prf-con-036",
    materia: "con",
    topico: "Direitos e deveres individuais e coletivos",
    subassunto: "Liberdade religiosa e recusa de transfusão de sangue (Temas 952 e 1.069 do STF)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: autonomia do paciente capaz, requisitos da recusa e dever do SUS de oferecer alternativas",
    enunciado:
      "Após um acidente em rodovia federal atendido pela PRF, um motorista adulto, capaz e consciente, Testemunha de Jeová, foi levado a um hospital público e recusou, por convicção religiosa, tratamento que envolveria transfusão de sangue. Segundo as teses fixadas pelo STF sobre o tema, é correto afirmar que",
    alternativas: [
      "a recusa é legítima se for inequívoca, livre, informada e esclarecida, e ele faz jus às alternativas disponíveis no SUS.",
      "a recusa só produz efeito se previamente autorizada pelo juiz, a pedido do próprio paciente ou da equipe médica responsável.",
      "o direito à vida é absoluto e prevalece sobre a liberdade religiosa, devendo a equipe médica realizar a transfusão.",
      "a recusa é válida, mas o SUS não tem o dever de oferecer procedimento alternativo, cujo custo corre por conta do paciente.",
      "a recusa só vale se manifestada por escrito no momento do atendimento, sendo ineficazes as diretivas antecipadas de vontade.",
    ],
    correta: 0,
    explicacao:
      "No julgamento dos Temas 952 e 1.069, o STF reconheceu que Testemunhas de Jeová maiores e capazes podem recusar procedimento que envolva transfusão, com base na autonomia individual e na liberdade religiosa, desde que a decisão seja inequívoca, livre, informada e esclarecida — inclusive por diretivas antecipadas de vontade. Em consequência, fazem jus aos procedimentos alternativos disponíveis no SUS, podendo recorrer a tratamento fora do domicílio.",
    explicacaoErradas:
      "As teses não exigem autorização judicial prévia, nem tratam o direito à vida como absoluto diante da escolha do paciente capaz. O SUS deve oferecer os procedimentos alternativos disponíveis, quando houver viabilidade técnico-científica e anuência da equipe médica. A decisão pode ser veiculada por diretivas antecipadas de vontade.",
    pegadinha:
      "As teses protegem a escolha do paciente maior e capaz e atribuem ao sistema público o dever de oferecer as alternativas disponíveis; não se exige ordem judicial nem forma escrita no momento do atendimento.",
    conhecimento:
      "Temas 952 (RE 979.742) e 1.069 (RE 1.212.272), julgados em 2024: recusa por motivo religioso de paciente maior e capaz, condicionada a decisão inequívoca, livre, informada e esclarecida, inclusive por diretivas antecipadas; direito a procedimentos alternativos no SUS, se houver viabilidade técnico-científica e anuência da equipe médica. Havia embargos de declaração pendentes no Tema 952 na última verificação; conferir eventual ajuste da tese.",
    fonte: "Adaptada de questão FGV (prova de origem pendente de verificação)",
    origem: "banco",
  },
  {
    id: "prf-con-037",
    materia: "con",
    topico: "Direitos e deveres individuais e coletivos",
    subassunto: "Tratados de direitos humanos e cláusula de abertura (art. 5º, §§ 2º e 3º)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: hierarquia dos tratados internacionais e efeitos sobre a prisão civil",
    enunciado:
      "Em um curso de direitos humanos aplicados à atividade da PRF, discutiu-se a posição dos tratados internacionais no ordenamento brasileiro. Segundo a Constituição e a jurisprudência do STF, é correto afirmar que",
    alternativas: [
      "todo tratado ratificado pelo Brasil tem hierarquia de emenda constitucional, qualquer que seja o seu tema.",
      "o tratado de direitos humanos equivale à emenda se aprovado, em cada Casa, em dois turnos, por maioria absoluta dos votos.",
      "o tratado de direitos humanos aprovado pelo rito comum tem status de lei ordinária e pode ser revogado por lei posterior.",
      "os direitos e garantias expressos na Constituição não excluem outros decorrentes de tratados de que o Brasil seja parte.",
      "a prisão civil do depositário infiel subsiste, porque o art. 5º, LXVII, prevalece sobre tratados aprovados pelo rito comum.",
    ],
    correta: 3,
    explicacao:
      "O art. 5º, § 2º, é a cláusula de abertura: os direitos e garantias expressos na Constituição não excluem outros decorrentes do regime e dos princípios por ela adotados ou dos tratados internacionais de que o Brasil seja parte.",
    explicacaoErradas:
      "Só os tratados e convenções sobre direitos humanos aprovados, em cada Casa do Congresso, em dois turnos, por três quintos dos votos dos respectivos membros equivalem às emendas (§ 3º). Os de direitos humanos aprovados pelo rito comum têm status supralegal (RE 466.343), acima das leis e abaixo da Constituição. Por isso a prisão civil do depositário infiel tornou-se ilícita (Súmula Vinculante 25).",
    pegadinha:
      "O quórum de três quintos em dois turnos é o mesmo das emendas; trocá-lo por maioria absoluta é a armadilha, assim como rebaixar o tratado comum de direitos humanos a lei ordinária.",
    conhecimento:
      "Hierarquia dos tratados: de direitos humanos com o rito do § 3º = emenda constitucional; de direitos humanos pelo rito comum = supralegal (RE 466.343); demais tratados = lei ordinária. Súmula Vinculante 25: é ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.",
    origem: "banco",
  },
  {
    id: "prf-con-038",
    materia: "con",
    topico: "Poder Legislativo",
    subassunto: "Sanção, veto e promulgação (art. 66)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: prazos do veto, quórum de rejeição e titularidade subsidiária da promulgação",
    enunciado:
      "Um projeto de lei sobre a fiscalização do transporte de cargas em rodovias federais foi aprovado pelo Congresso Nacional e enviado ao Presidente da República. Sobre as etapas seguintes, segundo a Constituição, é correto afirmar que",
    alternativas: [
      "o silêncio do Presidente por quinze dias úteis importa veto tácito, e o projeto é arquivado.",
      "o veto será apreciado em sessão conjunta e só poderá ser rejeitado pelo voto da maioria absoluta dos Deputados e Senadores.",
      "o veto parcial pode recair sobre palavras ou expressões isoladas, desde que não altere o sentido do dispositivo.",
      "vetado o projeto, os motivos serão comunicados ao Presidente do Senado em quarenta e oito horas, e a apreciação do veto será secreta.",
      "rejeitado o veto, se o Presidente não promulgar a lei em quarenta e oito horas, a promulgação caberá ao Presidente do STF.",
    ],
    correta: 1,
    explicacao:
      "O veto é apreciado em sessão conjunta, dentro de trinta dias do recebimento, e só pode ser rejeitado pela maioria absoluta dos Deputados e Senadores (art. 66, § 4º). Desde a EC 76/2013, a votação é aberta.",
    explicacaoErradas:
      "O silêncio por quinze dias úteis importa sanção tácita (§ 3º). O veto parcial abrange texto integral de artigo, parágrafo, inciso ou alínea (§ 2º). A comunicação dos motivos ao Presidente do Senado em quarenta e oito horas está correta (§ 1º), mas a votação secreta foi abolida pela EC 76/2013. Se a lei não for promulgada em quarenta e oito horas, promulga o Presidente do Senado e, se este não o fizer em igual prazo, o Vice-Presidente do Senado (§ 7º).",
    pegadinha:
      "A afirmação sobre a comunicação em quarenta e oito horas é verdadeira até a metade; o acréscimo da votação secreta, vigente antes da EC 76/2013, é o que a torna errada.",
    conhecimento:
      "Art. 66: veto em 15 dias úteis, por inconstitucionalidade ou contrariedade ao interesse público, comunicado em 48 horas ao Presidente do Senado; veto parcial só de texto integral; silêncio = sanção tácita; apreciação em sessão conjunta em 30 dias; rejeição pela maioria absoluta, em votação aberta; promulgação subsidiária pelo Presidente e pelo Vice-Presidente do Senado.",
    origem: "banco",
  },
  {
    id: "prf-con-039",
    materia: "con",
    topico: "Organização político-administrativa",
    subassunto: "Competência concorrente: superveniência de lei federal (art. 24, §§ 3º e 4º)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: competência legislativa plena do Estado e suspensão da eficácia por norma geral superveniente",
    enunciado:
      "Na falta de lei federal sobre normas gerais, um Estado editou lei sobre produção e consumo, exercendo competência legislativa plena. Anos depois, a União editou lei de normas gerais sobre o mesmo tema, com regras contrárias às da lei estadual. Segundo a Constituição, a lei estadual",
    alternativas: [
      "foi revogada pela lei federal e não voltará a viger, ainda que a lei federal seja revogada no futuro.",
      "é inconstitucional desde a origem, porque o Estado não podia legislar sobre o tema antes da União.",
      "continua plenamente eficaz, pois foi editada antes e respeita a autonomia legislativa do Estado.",
      "prevalece sobre a lei federal, que seria inconstitucional por invadir competência já exercida pelo Estado.",
      "tem a eficácia suspensa no que for contrário à lei federal, sem que haja revogação.",
    ],
    correta: 4,
    explicacao:
      "Na falta de normas gerais, os Estados exercem competência legislativa plena (art. 24, § 3º). A superveniência de lei federal sobre normas gerais suspende a eficácia da lei estadual no que lhe for contrário (§ 4º). Não há revogação: se a lei federal deixar de existir, a lei estadual volta a produzir efeitos.",
    explicacaoErradas:
      "Lei federal não revoga lei estadual, porque entre elas não há hierarquia, e sim repartição de competências; por isso a lei estadual pode voltar a ter eficácia. O Estado podia legislar plenamente na ausência de normas gerais, de modo que não há inconstitucionalidade originária. A lei estadual não continua plenamente eficaz nem prevalece, pois as normas gerais cabem à União (art. 24, § 1º).",
    pegadinha:
      "“Suspender a eficácia” não é “revogar”: a lei estadual continua existindo e volta a produzir efeitos se a norma geral federal for retirada do ordenamento.",
    conhecimento:
      "Competência concorrente (art. 24): a União edita normas gerais (§ 1º); os Estados suplementam (§ 2º); na falta de normas gerais, os Estados legislam plenamente (§ 3º); a norma geral federal superveniente suspende a eficácia da lei estadual no que lhe for contrário (§ 4º).",
    fonte: "Adaptada de FGV — 2026 — PC-PI — Oficial Investigador de Polícia",
    origem: "banco",
  },
  {
    id: "prf-con-040",
    materia: "con",
    topico: "Poder Legislativo",
    subassunto: "Sustação de atos normativos do Executivo (art. 49, V)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: controle legislativo do poder regulamentar e espécie normativa adequada",
    enunciado:
      "O Presidente da República editou decreto para regulamentar a fiscalização em rodovias federais, mas o texto criou obrigações para transportadores que a lei regulamentada não previa. Segundo a Constituição, esse decreto pode ser",
    alternativas: [
      "afastado apenas por lei aprovada pelo Congresso Nacional e sancionada pelo próprio Presidente da República.",
      "afastado somente por decisão judicial, porque o Legislativo não controla os atos normativos do Executivo.",
      "sustado pelo Congresso Nacional, por decreto legislativo, por exorbitar do poder regulamentar.",
      "sustado por resolução da Mesa da Câmara dos Deputados, a pedido de qualquer comissão permanente.",
      "sustado por decreto legislativo do Congresso, que só produzirá efeitos depois da sanção presidencial.",
    ],
    correta: 2,
    explicacao:
      "É da competência exclusiva do Congresso Nacional sustar os atos normativos do Poder Executivo que exorbitem do poder regulamentar ou dos limites de delegação legislativa (art. 49, V). As matérias do art. 49 são veiculadas por decreto legislativo, sem sanção presidencial.",
    explicacaoErradas:
      "A sustação não depende de lei nem de sanção: as competências exclusivas do art. 49 dispensam a participação do Presidente. O controle judicial é possível, mas não exclusivo, porque a Constituição prevê o controle político pelo Congresso. A Mesa da Câmara não tem essa competência, que é do Congresso Nacional.",
    pegadinha:
      "O decreto legislativo é a espécie própria das competências exclusivas do Congresso e não passa por sanção; condicionar a sustação à concordância do Presidente esvaziaria o controle.",
    conhecimento:
      "Art. 49, V: o Congresso susta atos normativos do Executivo que exorbitem do poder regulamentar (art. 84, IV) ou dos limites de delegação legislativa (art. 68). Instrumento: decreto legislativo, sem sanção. A sustação retira a eficácia do ato exorbitante.",
    fonte: "Adaptada de FGV — 2026 — PC-PI — Oficial Investigador de Polícia",
    origem: "banco",
  },
  {
    id: "prf-con-041",
    materia: "con",
    topico: "Direitos sociais",
    subassunto: "Proteção ao trabalho do adolescente (art. 7º, XXXIII)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: idades mínimas para trabalho e aprendizagem e vedações de trabalho noturno, perigoso ou insalubre",
    enunciado:
      "Uma empresa que presta serviços de manutenção a postos da PRF pretende contratar adolescentes. De acordo com a Constituição, pode ser contratado",
    alternativas: [
      "um adolescente de 13 anos, como aprendiz, desde que haja autorização escrita dos pais ou responsáveis.",
      "um adolescente de 15 anos, como empregado comum, para trabalho diurno em atividade salubre.",
      "um adolescente de 17 anos, como aprendiz, para trabalho noturno, se houver autorização judicial.",
      "um adolescente de 14 anos, como aprendiz, em atividade diurna que não seja perigosa nem insalubre.",
      "um adolescente de 17 anos, em atividade insalubre, desde que receba o adicional correspondente.",
    ],
    correta: 3,
    explicacao:
      "O art. 7º, XXXIII, proíbe o trabalho noturno, perigoso ou insalubre a menores de dezoito anos e qualquer trabalho a menores de dezesseis, salvo na condição de aprendiz, a partir de quatorze. O adolescente de 14 anos pode ser contratado como aprendiz, em atividade diurna, não perigosa e não insalubre.",
    explicacaoErradas:
      "Antes dos quatorze anos não há contratação, nem como aprendiz, e a autorização dos pais não supre a idade. Aos quinze, só como aprendiz; o contrato comum exige dezesseis anos. O trabalho noturno e o insalubre são vedados a menores de dezoito, e nem a autorização judicial nem o pagamento de adicional afastam a proibição.",
    pegadinha:
      "As idades se combinam com as condições: 14 anos libera só a aprendizagem, 16 libera o trabalho comum, e só aos 18 cessam as vedações de trabalho noturno, perigoso ou insalubre.",
    conhecimento:
      "Art. 7º, XXXIII (EC 20/1998): menores de 16 anos não trabalham, salvo como aprendizes a partir de 14; menores de 18 não fazem trabalho noturno, perigoso ou insalubre. Sequência 14-16-18: aprendizagem, trabalho comum, fim das restrições.",
    fonte: "Adaptada de questão FGV (prova de origem pendente de verificação)",
    origem: "banco",
  },
  {
    id: "prf-con-042",
    materia: "con",
    topico: "Poder Judiciário e CNJ",
    subassunto: "Incidente de deslocamento de competência (art. 109, § 5º)",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: legitimidade, tribunal competente e momento do incidente de deslocamento",
    enunciado:
      "Uma grave violação de direitos humanos ocorreu em conflito agrário às margens de uma rodovia federal, e há risco de que o Brasil descumpra obrigações assumidas em tratados internacionais. Sobre o incidente de deslocamento de competência para a Justiça Federal, é correto afirmar que",
    alternativas: [
      "cabe ao Procurador-Geral da República suscitá-lo perante o STJ, em qualquer fase do inquérito ou do processo judicial.",
      "deve ser suscitado perante o Supremo Tribunal Federal, e somente depois do recebimento da denúncia pela Justiça Estadual.",
      "pode ser suscitado por qualquer cidadão ou entidade de defesa dos direitos humanos, por representação ao Superior Tribunal de Justiça.",
      "depende de declinação de competência feita de ofício pelo juiz estadual, que remete os autos à Justiça Federal da região.",
      "só é admitido depois do trânsito em julgado da sentença da Justiça Estadual, como forma de revisão do julgamento.",
    ],
    correta: 0,
    explicacao:
      "Nas hipóteses de grave violação de direitos humanos, o Procurador-Geral da República, para assegurar o cumprimento de obrigações decorrentes de tratados internacionais de direitos humanos, pode suscitar perante o STJ, em qualquer fase do inquérito ou do processo, o deslocamento de competência para a Justiça Federal (art. 109, § 5º, incluído pela EC 45/2004).",
    explicacaoErradas:
      "O incidente é julgado pelo STJ, e não pelo STF, e cabe em qualquer fase do inquérito ou do processo, sem esperar a denúncia ou o trânsito em julgado. A legitimidade é exclusiva do PGR: cidadãos e entidades não o suscitam diretamente, e o juiz estadual não desloca o feito de ofício.",
    pegadinha:
      "O incidente envolve tratados internacionais, o que leva a pensar no STF; mas a Constituição o atribui ao STJ e concentra a legitimidade no Procurador-Geral da República.",
    conhecimento:
      "IDC (art. 109, V-A e § 5º): grave violação de direitos humanos; risco de descumprimento de tratados; legitimidade exclusiva do PGR; julgamento pelo STJ; cabível em qualquer fase do inquérito ou do processo. O STJ exige ainda a demonstração de que as instâncias locais não têm condições de conduzir o caso.",
    origem: "banco",
  },
  {
    id: "prf-con-043",
    materia: "con",
    topico: "Constituição: conceito, classificações e princípios fundamentais",
    subassunto: "Concepções sociológica, política e jurídica de Constituição",
    dificuldade: 5,
    raciocinio: "Conceito aplicado: identificar as concepções clássicas de Constituição e seus autores a partir das definições",
    enunciado:
      "Em um debate do curso de formação da PRF, três alunos definiram Constituição. Ana: “é a soma dos fatores reais de poder; o texto escrito que não os reflete não passa de uma folha de papel”. Bruno: “é a decisão política fundamental do titular do poder constituinte sobre o modo e a forma de existência do Estado”. Carla: “é norma pura, situada no plano do dever-ser, que retira sua validade da norma fundamental hipotética”. As concepções defendidas por Ana, Bruno e Carla são, respectivamente,",
    alternativas: [
      "política, sociológica e jurídica, ligadas a Schmitt, Lassalle e Kelsen.",
      "sociológica, política e jurídica, ligadas a Lassalle, Schmitt e Kelsen.",
      "sociológica, jurídica e política, ligadas a Lassalle, Kelsen e Schmitt.",
      "jurídica, política e sociológica, ligadas a Kelsen, Schmitt e Lassalle.",
      "sociológica, política e jurídica, ligadas a Lassalle, Kelsen e Schmitt.",
    ],
    correta: 1,
    explicacao:
      "Ana adota a concepção sociológica de Ferdinand Lassalle (a Constituição real é a soma dos fatores reais de poder; a escrita que não os reflete é mera folha de papel). Bruno, a concepção política de Carl Schmitt (decisão política fundamental). Carla, a concepção jurídica de Hans Kelsen (norma pura, fundada na norma fundamental hipotética).",
    explicacaoErradas:
      "As demais respostas trocam a ordem das concepções ou dos autores. “Fatores reais de poder” e “folha de papel” são expressões de Lassalle; “decisão política fundamental”, de Schmitt; “norma fundamental hipotética” e “dever-ser”, de Kelsen.",
    pegadinha:
      "Uma das respostas mantém a ordem certa das concepções, mas inverte os autores das concepções política e jurídica; é preciso conferir os dois elementos de cada par.",
    conhecimento:
      "Concepções de Constituição: sociológica (Lassalle — fatores reais de poder, “folha de papel”); política (Schmitt — decisão política fundamental, com distinção entre Constituição e leis constitucionais); jurídica (Kelsen — norma pura e norma fundamental hipotética). Há ainda a concepção cultural e a da força normativa (Hesse).",
    origem: "banco",
  },
];
