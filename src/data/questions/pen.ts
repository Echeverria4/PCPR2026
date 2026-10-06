import type { Question } from "../../lib/types";

export const QUESTOES_PEN: Question[] = [
  {
    id: "pen-001",
    materia: "pen",
    topico: "Teoria geral do crime",
    enunciado:
      "Segundo a teoria finalista da ação, adotada predominantemente pelo Código Penal brasileiro, o crime é conceituado como fato:",
    alternativas: [
      "Apenas típico",
      "Típico e antijurídico (ilícito), sendo a culpabilidade mero pressuposto de aplicação da pena",
      "Típico, antijurídico e culpável",
      "Apenas culpável",
      "Antijurídico e punível, independentemente de tipicidade",
    ],
    correta: 1,
    explicacao:
      "Para a teoria finalista, majoritária na doutrina e jurisprudência brasileiras, o crime é fato típico e antijurídico (conceito bipartido); a culpabilidade é pressuposto para a aplicação da pena, e não elemento do crime, embora seja indispensável para a punição do agente.",
    origem: "banco",
  },
  {
    id: "pen-002",
    materia: "pen",
    topico: "Aplicação da pena",
    enunciado:
      "O sistema adotado pelo Código Penal brasileiro para a fixação da pena privativa de liberdade, dividido em três fases (pena-base, circunstâncias agravantes/atenuantes e causas de aumento/diminuição), é conhecido como:",
    alternativas: [
      "Sistema bifásico",
      "Sistema Nelson Hungria (trifásico)",
      "Sistema unifásico",
      "Sistema de penas fixas",
      "Sistema da pena única",
    ],
    correta: 1,
    explicacao:
      "O critério trifásico, também chamado de sistema Nelson Hungria (art. 68 do CP), fixa a pena em três etapas sucessivas: 1ª) pena-base, conforme as circunstâncias judiciais do art. 59; 2ª) aplicação das agravantes e atenuantes; 3ª) aplicação das causas de aumento e diminuição de pena.",
    origem: "banco",
  },
  {
    id: "pen-003",
    materia: "pen",
    topico: "Crimes contra o patrimônio",
    enunciado:
      "A subtração de coisa alheia móvel, para si ou para outrem, mediante grave ameaça ou violência à pessoa, ou depois de havê-la, por qualquer meio, reduzido à impossibilidade de resistência, configura o crime de:",
    alternativas: ["Furto simples", "Furto qualificado", "Roubo", "Extorsão", "Apropriação indébita"],
    correta: 2,
    explicacao:
      "O roubo (art. 157 do CP) diferencia-se do furto justamente pelo emprego de violência ou grave ameaça à pessoa, ou pela redução da vítima à impossibilidade de resistência, elementos ausentes no furto (subtração sem violência).",
    origem: "banco",
  },
  {
    id: "pen-004",
    materia: "pen",
    topico: "Crimes contra a pessoa",
    enunciado:
      "Matar alguém sob o domínio de violenta emoção, logo em seguida a injusta provocação da vítima, é circunstância que, no homicídio, configura:",
    alternativas: [
      "Qualificadora, aumentando a pena",
      "Causa de diminuição de pena (privilégio)",
      "Excludente de ilicitude",
      "Excludente de culpabilidade",
      "Circunstância irrelevante para a pena",
    ],
    correta: 1,
    explicacao:
      "O art. 121, §1º, do CP prevê o homicídio privilegiado quando o agente comete o crime impelido por motivo de relevante valor social ou moral, ou sob domínio de violenta emoção, logo em seguida a injusta provocação da vítima — hipótese que permite a redução da pena de 1/6 a 1/3.",
    origem: "banco",
  },
  {
    id: "pen-005",
    materia: "pen",
    topico: "Excludentes de ilicitude",
    enunciado:
      "Age em legítima defesa quem, usando moderadamente dos meios necessários, repele:",
    alternativas: [
      "Qualquer ameaça futura e incerta",
      "Injusta agressão, atual ou iminente, a direito seu ou de outrem",
      "Agressão já cessada, como forma de vingança",
      "Agressão lícita praticada por agente do Estado no exercício regular de direito",
      "Provocação verbal, sem qualquer agressão física ou iminência dela",
    ],
    correta: 1,
    explicacao:
      "Conforme o art. 25 do CP, a legítima defesa exige agressão injusta, atual ou iminente, a direito próprio ou de terceiro, repelida com uso moderado dos meios necessários. Agressão futura/incerta ou já cessada não autoriza a excludente, que se converteria em vingança.",
    origem: "banco",
  },
  {
    id: "pen-006",
    materia: "pen",
    topico: "Crimes contra a administração pública",
    enunciado:
      "O funcionário público que solicita, para si ou para outrem, direta ou indiretamente, vantagem indevida, em razão da função, ainda que fora dela ou antes de assumi-la, comete o crime de:",
    alternativas: ["Peculato", "Concussão", "Corrupção passiva", "Prevaricação", "Excesso de exação"],
    correta: 2,
    explicacao:
      "Corrupção passiva (art. 317 do CP) consiste em solicitar ou receber, para si ou para outrem, direta ou indiretamente, vantagem indevida em razão da função. Difere da concussão (art. 316), que envolve exigir a vantagem (mediante intimidação, ainda que implícita), e do peculato, que envolve apropriação de bem que o funcionário tem em razão do cargo.",
    origem: "banco",
  },
  {
    id: "pen-007",
    materia: "pen",
    topico: "Teoria geral do crime",
    enunciado:
      "A tentativa, prevista no art. 14, II, do Código Penal, caracteriza-se quando o agente:",
    alternativas: [
      "Consuma integralmente o crime planejado",
      "Inicia a execução do crime, mas este não se consuma por circunstâncias alheias à sua vontade",
      "Desiste voluntariamente de iniciar a execução do crime",
      "Apenas planeja mentalmente o crime, sem iniciar atos executórios",
      "Impede, voluntariamente, que o resultado se produza após já tê-lo produzido",
    ],
    correta: 1,
    explicacao:
      "A tentativa ocorre quando, iniciada a execução, o crime não se consuma por circunstâncias alheias à vontade do agente (art. 14, II, CP). A mera cogitação (ideação) não é punível; se o agente desiste voluntariamente antes de esgotar os meios executórios, aplica-se a desistência voluntária (art. 15), que responde apenas pelos atos já praticados.",
    origem: "banco",
  },
  {
    id: "pen-008",
    materia: "pen",
    topico: "Tempo e lugar do crime",
    enunciado:
      "Quanto ao tempo e ao lugar do crime, o Código Penal brasileiro adota, respectivamente, as teorias da:",
    alternativas: [
      "Atividade (tempo) e da ubiquidade (lugar)",
      "Ubiquidade (tempo) e do resultado (lugar)",
      "Resultado (tempo) e da atividade (lugar)",
      "Atividade (tempo e lugar, ambos)",
      "Ubiquidade (tempo e lugar, ambos)",
    ],
    correta: 0,
    explicacao:
      "O art. 4º do CP adota a teoria da atividade para o tempo do crime (considera-se praticado no momento da ação/omissão, ainda que outro seja o momento do resultado). Já o art. 6º adota a teoria da ubiquidade (mista) para o lugar do crime (considera-se praticado tanto onde ocorreu a ação/omissão quanto onde se produziu ou deveria produzir-se o resultado).",
    origem: "banco",
  },
  {
    id: "pen-009",
    materia: "pen",
    topico: "Crimes contra o patrimônio",
    enunciado:
      "O latrocínio (roubo seguido de morte, art. 157, §3º, II, do CP), embora envolva a morte da vítima, é classificado juridicamente como crime contra:",
    alternativas: [
      "A vida, sendo julgado pelo Tribunal do Júri",
      "O patrimônio, sendo julgado por juiz singular (Súmula 603 do STF)",
      "A pessoa e o patrimônio, em concurso formal",
      "A fé pública",
      "A dignidade sexual",
    ],
    correta: 1,
    explicacao:
      "Apesar do resultado morte, o latrocínio é crime contra o patrimônio (está tipificado no art. 157, que trata do roubo), e não crime doloso contra a vida — por isso não é julgado pelo Tribunal do Júri, e sim por juiz singular, conforme pacificado na Súmula 603 do STF.",
    origem: "banco",
  },
  {
    id: "pen-010",
    materia: "pen",
    topico: "Crimes contra o patrimônio",
    enunciado:
      "Com a Lei nº 15.397/2026, a ação penal no crime de estelionato (art. 171 do CP) passou a ser, em regra:",
    alternativas: [
      "Pública condicionada à representação do ofendido, como previa o §5º incluído pelo Pacote Anticrime.",
      "Pública incondicionada, pois a Lei 15.397/2026 revogou o §5º do art. 171.",
      "Privada exclusiva, mediante queixa-crime.",
      "Pública condicionada à requisição do Ministro da Justiça.",
      "Pública incondicionada apenas quando a vítima for a Administração Pública.",
    ],
    correta: 1,
    explicacao:
      "O Pacote Anticrime (Lei 13.964/2019) havia incluído o §5º no art. 171, tornando a ação penal do estelionato condicionada à representação, com exceções (Administração Pública, criança ou adolescente, pessoa com deficiência mental, maior de 70 anos ou incapaz). A Lei 15.397/2026 (de 30/04/2026, publicada no DOU de 04/05/2026, com vigência imediata) revogou o §5º: a ação voltou a ser pública incondicionada em todos os casos. A mesma lei aumentou as penas de furto, roubo, estelionato e receptação, elevou a fraude eletrônica (§2º-A) para 4 a 8 anos e criou a figura da cessão de conta bancária para crimes, a \"conta laranja\" (art. 171, §2º, VII).",
    origem: "banco",
  },
  {
    id: "pen-011",
    materia: "pen",
    topico: "Lei Maria da Penha",
    enunciado:
      "Segundo entendimento pacificado na Súmula 542 do STJ, a ação penal nos crimes de lesão corporal, mesmo de natureza leve, praticados em contexto de violência doméstica e familiar contra a mulher (Lei nº 11.340/2006), é:",
    alternativas: [
      "Privada",
      "Pública condicionada à representação da vítima",
      "Pública incondicionada",
      "Dependente de autorização do juizado especial criminal",
      "Extinta por composição civil dos danos",
    ],
    correta: 2,
    explicacao:
      "A Súmula 542 do STJ pacificou que a ação penal em casos de lesão corporal praticada com violência doméstica e familiar contra a mulher é pública incondicionada, independentemente da vontade da vítima em representar contra o agressor.",
    origem: "banco",
  },
  {
    id: "pen-012",
    materia: "pen",
    topico: "Lei de Drogas",
    enunciado:
      "Na Lei de Drogas (Lei nº 11.343/2006), a conduta de adquirir, guardar, ter em depósito, transportar ou trazer consigo drogas para consumo pessoal está tipificada no art. 28, ao passo que a mesma conduta destinada ao comércio, com o especial fim de traficar, configura o crime do art. 33 (tráfico de drogas). A principal diferença de tratamento entre as duas condutas é que o art. 28:",
    alternativas: [
      "Prevê pena privativa de liberdade, assim como o art. 33.",
      "Não prevê pena privativa de liberdade, sendo cominadas apenas penas alternativas, como advertência, prestação de serviços à comunidade e medida educativa.",
      "É crime hediondo, ao contrário do art. 33.",
      "É de menor potencial ofensivo apenas se o agente for reincidente.",
      "Depende de representação da vítima para ser processado.",
    ],
    correta: 1,
    explicacao:
      "O art. 28 da Lei 11.343/2006 (posse de drogas para consumo pessoal) não comina pena privativa de liberdade, prevendo apenas advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa de comparecimento a programa/curso — ao contrário do tráfico (art. 33), que prevê reclusão de 5 a 15 anos. Atenção: no RE 635.659 (Tema 506, 2024), o STF decidiu que portar maconha para uso pessoal não é crime, e sim ilícito administrativo sem efeitos penais, presumindo-se usuário quem tiver até 40 g ou 6 plantas fêmeas, até que o Congresso legisle. Para as demais drogas, o art. 28 continua sendo crime.",
    origem: "banco",
  },
  {
    id: "pen-013",
    materia: "pen",
    topico: "Lei de Drogas",
    enunciado:
      "O tráfico privilegiado de drogas, previsto no art. 33, §4º, da Lei nº 11.343/2006 — cabível ao agente primário, de bons antecedentes, que não se dedique às atividades criminosas nem integre organização criminosa —, segundo entendimento do Supremo Tribunal Federal:",
    alternativas: [
      "É equiparado a hediondo, sujeitando-se a todas as restrições da Lei 8.072/1990.",
      "Não é equiparado a crime hediondo, podendo o juiz reduzir a pena de 1/6 a 2/3.",
      "Extingue automaticamente a punibilidade do agente.",
      "Só se aplica a estrangeiros em situação irregular no país.",
      "Converte o crime de tráfico em contravenção penal.",
    ],
    correta: 1,
    explicacao:
      "O STF (HC 118.533) firmou entendimento de que o tráfico privilegiado (art. 33, §4º) não é crime equiparado a hediondo, afastando as restrições mais severas da Lei 8.072/1990 — sendo permitida a redução de pena de 1/6 a 2/3 quando presentes os requisitos legais (primariedade, bons antecedentes, não dedicação a atividades criminosas, não integração a organização criminosa).",
    origem: "banco",
  },
  {
    id: "pen-014",
    materia: "pen",
    topico: "Estatuto do Desarmamento",
    enunciado:
      "No Estatuto do Desarmamento (Lei nº 10.826/2003), a distinção entre \"posse\" e \"porte\" ilegal de arma de fogo está relacionada, fundamentalmente, ao local em que a arma é encontrada com o agente:",
    alternativas: [
      "Posse refere-se a manter a arma fora de casa; porte, dentro de casa ou local de trabalho.",
      "Posse refere-se a manter a arma no interior de residência ou local de trabalho, sob sua responsabilidade; porte refere-se a transportar ou trazer consigo a arma fora desses locais.",
      "Não há distinção prática entre os dois crimes, sendo sinônimos.",
      "Posse é sempre crime mais grave que porte.",
      "Apenas o porte de arma é crime; a posse irregular é mera infração administrativa.",
    ],
    correta: 1,
    explicacao:
      "A posse irregular de arma de fogo (art. 12, uso permitido) refere-se a manter a arma no interior de residência ou dependência desta, ou no local de trabalho; o porte ilegal (art. 14, uso permitido, ou art. 16, uso restrito/proibido) refere-se a transportar ou trazer consigo a arma fora desses locais, sendo, em regra, crime de maior gravidade que a posse irregular.",
    origem: "banco",
  },
  {
    id: "pen-015",
    materia: "pen",
    topico: "Lei de Organizações Criminosas",
    enunciado: "Segundo o art. 1º, §1º, da Lei nº 12.850/2013, considera-se organização criminosa a associação de:",
    alternativas: [
      "2 (duas) ou mais pessoas, estruturalmente ordenada, para o cometimento de qualquer infração penal, independentemente da pena cominada.",
      "4 (quatro) ou mais pessoas, estruturalmente ordenada e caracterizada pela divisão de tarefas, para obter, direta ou indiretamente, vantagem de qualquer natureza, mediante a prática de infrações penais cujas penas máximas sejam superiores a 4 anos, ou que sejam de caráter transnacional.",
      "Exclusivamente pessoas jurídicas, para fins de fraude fiscal.",
      "10 (dez) ou mais pessoas, sem necessidade de estrutura organizacional.",
      "Qualquer grupo de pessoas que tenham cometido, ao menos uma vez, crime em concurso.",
    ],
    correta: 1,
    explicacao:
      "O art. 1º, §1º, da Lei 12.850/2013 exige, cumulativamente: associação de 4 ou mais pessoas; estrutura ordenada e divisão de tarefas, ainda que informalmente; objetivo de obter vantagem de qualquer natureza; e prática de infrações penais com pena máxima superior a 4 anos, ou de caráter transnacional (hipótese que dispensa o patamar de pena).",
    origem: "banco",
  },
  {
    id: "pen-016",
    materia: "pen",
    topico: "Crimes contra a pessoa",
    enunciado:
      "Desde a edição da Lei nº 14.994/2024, o feminicídio — morte de mulher por razões da condição de sexo feminino — deixou de ser tratado apenas como qualificadora do homicídio e passou a constituir:",
    alternativas: [
      "Contravenção penal autônoma.",
      "Tipo penal autônomo, previsto no art. 121-A do Código Penal.",
      "Causa de aumento de pena aplicável a qualquer crime contra a pessoa.",
      "Crime de menor potencial ofensivo.",
      "Mera agravante genérica, sem tipificação própria.",
    ],
    correta: 1,
    explicacao:
      "A Lei 14.994/2024 alterou o tratamento legal do feminicídio, criando o tipo penal autônomo do art. 121-A do Código Penal — antes disso, o feminicídio era tratado apenas como qualificadora do homicídio (art. 121, §2º, VI), sem tipificação própria e independente.",
    origem: "banco",
  },
  {
    id: "pen-017",
    materia: "pen",
    topico: "Crimes contra a administração pública",
    enunciado:
      "No crime de peculato culposo (art. 312, §2º, do Código Penal), praticado pelo funcionário público que concorre culposamente para o crime de outrem, a reparação do dano, se precede à sentença irrecorrível, produz o seguinte efeito:",
    alternativas: [
      "Não produz qualquer efeito jurídico sobre a punibilidade.",
      "Extingue a punibilidade do agente.",
      "Apenas reduz a pena pela metade, sem extinguir a punibilidade.",
      "Converte automaticamente o crime em improbidade administrativa.",
      "Só produz efeito se a reparação for feita antes do recebimento da denúncia.",
    ],
    correta: 1,
    explicacao:
      "O art. 312, §3º, do CP estabelece que, no peculato culposo, a reparação do dano, se precede à sentença irrecorrível, extingue a punibilidade; se lhe é posterior, reduz a pena imposta à metade — regra específica que não se aplica ao peculato doloso.",
    origem: "banco",
  },
  {
    id: "pen-018",
    materia: "pen",
    topico: "Crimes hediondos (Lei 8.072/1990)",
    enunciado:
      "Os crimes hediondos e os a eles equiparados (tráfico de drogas, tortura e terrorismo), segundo a Lei nº 8.072/1990, são insuscetíveis de anistia, graça, indulto e fiança. Não obstante a vedação à fiança, a jurisprudência dos tribunais superiores admite que o acusado por crime hediondo:",
    alternativas: [
      "Nunca pode responder ao processo em liberdade, ainda que preencha os requisitos gerais.",
      "Pode obter liberdade provisória sem fiança, quando ausentes os requisitos da prisão preventiva (art. 312 do CPP), pois a vedação legal recai apenas sobre a fiança, não sobre a liberdade provisória em si.",
      "Só pode ser solto após o trânsito em julgado de sentença absolutória.",
      "Deve obrigatoriamente pagar fiança em valor máximo previsto em lei.",
      "Perde automaticamente o direito ao contraditório e à ampla defesa.",
    ],
    correta: 1,
    explicacao:
      "Embora a Lei 8.072/1990 vede a fiança para crimes hediondos e equiparados, essa vedação não se confunde com a vedação à liberdade provisória: se ausentes os requisitos que autorizariam a prisão preventiva (art. 312 do CPP), o acusado pode obter liberdade provisória sem fiança — distinção consolidada na jurisprudência do STF e do STJ.",
    origem: "banco",
  },
  {
    id: "pen-019",
    materia: "pen",
    topico: "Crimes hediondos (Lei 8.072/90) — rol e efeitos da hediondez",
    enunciado:
      "O rol de crimes hediondos previsto na Lei 8.072/1990 é considerado, pela doutrina e jurisprudência majoritárias, um rol:",
    alternativas: [
      "Exemplificativo, podendo o juiz reconhecer outros crimes como hediondos por analogia, em razão de sua gravidade concreta.",
      "Taxativo (numerus clausus): um crime só é hediondo se estiver expressamente listado ou equiparado por lei.",
      "Meramente indicativo, sem qualquer efeito prático sobre o regime de cumprimento de pena.",
      "Aberto, a ser complementado por resolução do CNJ conforme a gravidade do caso.",
      "Aplicável apenas a réus reincidentes, não a réus primários.",
    ],
    correta: 1,
    explicacao:
      "O rol de crimes hediondos é taxativo (numerus clausus): um crime só é hediondo se estiver expressamente listado ou equiparado por lei, não bastando ser grave aos olhos do intérprete — não há espaço para reconhecimento por analogia, tampouco complementação por resolução do CNJ.",
    origem: "banco",
  },
  {
    id: "pen-020",
    materia: "pen",
    topico: "Crimes hediondos (Lei 8.072/90) — rol e efeitos da hediondez",
    enunciado:
      "Entre os crimes que, embora não constem literalmente do rol de crimes hediondos, são a eles equiparados por força de lei, para todos os efeitos legais, estão:",
    alternativas: [
      "Furto qualificado e estelionato.",
      "Tortura, tráfico de drogas e terrorismo.",
      "Lesão corporal culposa e ameaça.",
      "Injúria e difamação qualificadas.",
      "Receptação simples e apropriação indébita.",
    ],
    correta: 1,
    explicacao:
      "A Lei 8.072/90 equipara a tortura, o tráfico de drogas e o terrorismo aos crimes hediondos para efeitos legais, ainda que tecnicamente não constem do rol taxativo original — recebendo, assim, as mesmas consequências penais mais severas (regime, progressão, vedação à fiança).",
    origem: "banco",
  },
  {
    id: "pen-021",
    materia: "pen",
    topico: "Feminicídio (art. 121-A do CP) e Lei Maria da Penha na prática",
    enunciado:
      "Sobre o feminicídio, à luz da legislação em vigor, é correto afirmar que:",
    alternativas: [
      "É crime autônomo (art. 121-A do CP), com pena de reclusão de 20 a 40 anos, e figura no rol de crimes hediondos.",
      "Continua sendo qualificadora do homicídio (art. 121, §2º, VI, do CP), com pena de 12 a 30 anos, como previa a Lei 13.104/2015.",
      "Configura-se sempre que a vítima for mulher, independentemente de a morte decorrer de violência doméstica ou de menosprezo à condição de mulher.",
      "Por ser crime autônomo, deixou de ser hediondo, já que o rol da Lei 8.072/1990 só abrange as formas qualificadas do homicídio.",
      "É julgado pelo juiz singular, e não pelo Tribunal do Júri, por estar fora do capítulo dos crimes contra a vida.",
    ],
    correta: 0,
    explicacao:
      "Desde a Lei 14.994/2024 (Pacote Antifeminicídio), o feminicídio é crime autônomo, tipificado no art. 121-A do CP, com pena de reclusão de 20 a 40 anos — deixou de ser a qualificadora do art. 121, §2º, VI, criada pela Lei 13.104/2015. Continua no capítulo dos crimes contra a vida (logo, é julgado pelo Tribunal do Júri) e é hediondo (art. 1º, I-B, da Lei 8.072/1990). Exige razões da condição do sexo feminino — violência doméstica e familiar ou menosprezo/discriminação à condição de mulher (art. 121-A, §1º): não basta a vítima ser mulher.",
    origem: "banco",
  },
  {
    id: "pen-022",
    materia: "pen",
    topico: "Feminicídio (art. 121-A do CP) e Lei Maria da Penha na prática",
    enunciado:
      "A Lei Maria da Penha (Lei 11.340/2006), quanto à matéria penal, deve ser corretamente compreendida como uma lei que:",
    alternativas: [
      "Cria diversos tipos penais inéditos de violência doméstica, substituindo o Código Penal nessa matéria.",
      "Prevê sobretudo mecanismos de proteção, como as medidas protetivas de urgência, mas tipifica um crime próprio: o descumprimento de decisão que defere medida protetiva (art. 24-A).",
      "Aplica-se exclusivamente à violência física, excluindo violência psicológica, sexual, patrimonial e moral.",
      "Não contém nenhum tipo penal, de modo que o descumprimento de medida protetiva configura apenas o crime de desobediência (art. 330 do CP).",
      "Revogou expressamente o crime de feminicídio, substituindo-o por medida protetiva.",
    ],
    correta: 1,
    explicacao:
      "A Lei Maria da Penha é, sobretudo, uma lei de proteção: reconhece cinco formas de violência (física, psicológica, sexual, patrimonial e moral) e cria as medidas protetivas de urgência e os juizados especializados. Mas tipifica um crime próprio: descumprir decisão judicial que defere medida protetiva (art. 24-A, incluído pela Lei 13.641/2018), hoje punido com reclusão de 2 a 5 anos e multa (Lei 14.994/2024). No flagrante, só o juiz pode conceder fiança (§2º), e a pena aumenta de 1/3 até a metade se o agressor violar as áreas de exclusão ou a tornozeleira (§4º, Lei 15.383/2026). O tipo foi criado justamente porque o STJ entendia que o descumprimento não configurava o crime de desobediência.",
    origem: "banco",
  },
  {
    id: "pen-023",
    materia: "pen",
    topico: "Crimes cibernéticos no Código Penal (invasão de dispositivo — art. 154-A)",
    enunciado:
      "Segundo a redação atual do art. 154-A do Código Penal (dada pela Lei 14.155/2021), o crime de invasão de dispositivo informático:",
    alternativas: [
      "Exige que o dispositivo esteja conectado à internet no momento da invasão.",
      "Dispensa a violação de mecanismo de segurança: basta invadir dispositivo de uso alheio com o fim de obter, adulterar ou destruir dados sem autorização do usuário, ou de instalar vulnerabilidades para obter vantagem ilícita.",
      "Só se consuma se houver violação indevida de mecanismo de segurança, como senha ou biometria.",
      "Exige prejuízo econômico comprovado, sem o qual o fato é atípico.",
      "É punido com detenção, de 3 meses a 1 ano, sendo infração de menor potencial ofensivo em qualquer modalidade.",
    ],
    correta: 1,
    explicacao:
      "A Lei 14.155/2021 reescreveu o art. 154-A: retirou a exigência de \"violação indevida de mecanismo de segurança\", passou a falar em dispositivo \"de uso alheio\" e elevou a pena para reclusão de 1 a 4 anos e multa (antes, detenção de 3 meses a 1 ano). O prejuízo econômico é só causa de aumento (§2º, de 1/3 a 2/3), e a obtenção de comunicações privadas, segredos ou informações sigilosas, ou o controle remoto do aparelho, qualifica o crime (§3º, 2 a 5 anos). O dispositivo pode estar \"conectado ou não\" à rede.",
    origem: "banco",
  },
  {
    id: "pen-024",
    materia: "pen",
    topico: "Crimes cibernéticos no Código Penal (invasão de dispositivo — art. 154-A)",
    enunciado:
      "Quanto à ação penal cabível no crime de invasão de dispositivo informático (art. 154-A do CP), a regra geral é a de que se trata de ação penal:",
    alternativas: [
      "Pública incondicionada, em qualquer hipótese.",
      "Pública condicionada à representação, salvo se cometida contra a administração pública.",
      "Privada, cabendo exclusivamente à vítima o oferecimento da queixa-crime.",
      "Pública condicionada à requisição do Ministro da Justiça.",
      "Pública incondicionada apenas quando há prejuízo econômico comprovado.",
    ],
    correta: 1,
    explicacao:
      "O crime do art. 154-A do CP é, em regra, de ação penal pública condicionada à representação, salvo se cometido contra a administração pública direta ou indireta de qualquer dos Poderes, ou contra empresas concessionárias de serviços públicos, hipóteses em que a ação penal passa a ser pública incondicionada.",
    origem: "banco",
  },
  {
    id: "pen-025",
    materia: "pen",
    topico: "Excludentes de ilicitude (legítima defesa, estrito cumprimento do dever legal) aplicadas à atuação policial",
    enunciado:
      "Para a caracterização da legítima defesa (art. 25 do CP) na atuação policial em confronto armado, são requisitos indispensáveis:",
    alternativas: [
      "Agressão injusta, atual ou iminente, a direito próprio ou alheio, repelida com meios necessários e uso moderado desses meios.",
      "Ordem expressa e prévia do superior hierárquico, autorizando o uso da força letal.",
      "Comprovação posterior de que o agredido efetivamente portava arma de fogo.",
      "Autorização judicial concedida antes do confronto.",
      "Que a agressão tenha cessado no momento da reação do policial.",
    ],
    correta: 0,
    explicacao:
      "A legítima defesa exige agressão injusta, atual ou iminente (não cessada, nem meramente hipotética futura), a direito próprio ou alheio, repelida com meios necessários e uso moderado desses meios — requisitos que, na atuação policial, costumam ser escrutinados com rigor em casos de confronto armado, sem depender de ordem superior prévia ou autorização judicial.",
    origem: "banco",
  },
  {
    id: "pen-026",
    materia: "pen",
    topico: "Excludentes de ilicitude (legítima defesa, estrito cumprimento do dever legal) aplicadas à atuação policial",
    enunciado:
      "A excludente de ilicitude do estrito cumprimento do dever legal, aplicável a agentes públicos no exercício regular de suas funções, tem como elemento central o fato de que o cumprimento deve ser:",
    alternativas: [
      "Discricionário, cabendo ao agente decidir livremente os limites de sua atuação, sem parâmetro legal.",
      "\"Estrito\" — dentro dos limites legais e regulamentares —, e não uma extrapolação da função, sendo o excesso, doloso ou culposo, punível e capaz de retirar a proteção legal.",
      "Baseado exclusivamente na boa-fé subjetiva do agente, independentemente de proporcionalidade.",
      "Aplicável apenas a agentes de alta patente hierárquica, nunca a agentes de execução direta.",
      "Restrito a situações de flagrante delito, não se aplicando ao cumprimento de mandados judiciais.",
    ],
    correta: 1,
    explicacao:
      "A chave da excludente é que o cumprimento seja \"estrito\" — dentro dos limites legais e regulamentares — e não uma extrapolação da função, como a aplicação proporcional da força para deter um suspeito ou executar um mandado. O excesso, doloso ou culposo, é punível e retira a proteção legal, daí a importância prática do tema para quem atua diretamente em situações de uso da força.",
    origem: "banco",
  },
  {
    id: "pen-027",
    materia: "pen",
    topico: "Lei de Organizações Criminosas",
    enunciado:
      "Carlos, que não integra nenhum grupo criminoso, oferece dinheiro a um integrante de uma associação criminosa para que ele incendeie o carro de um desafeto. Pela redação dada ao art. 288 do Código Penal pela Lei 15.245/2025, Carlos:",
    alternativas: [
      "incorre na pena da associação criminosa, sem prejuízo da pena correspondente ao crime contratado.",
      "só responde como partícipe do crime de dano ou incêndio, porque não integra a associação.",
      "responde por associação criminosa apenas se o incêndio chegar a ser consumado.",
      "não pratica crime enquanto o incêndio não for ao menos tentado, porque o simples ajuste não é punível.",
      "passa a integrar a organização criminosa e responde pelo art. 2º da Lei 12.850/2013.",
    ],
    correta: 0,
    explicacao:
      "Art. 288, §2º, do CP (Lei 15.245/2025): incorre na pena da associação criminosa (reclusão de 1 a 3 anos) quem, de qualquer modo, solicita ou contrata o cometimento de crime a integrante de associação criminosa, independentemente da pena do crime solicitado ou contratado. É disposição expressa que afasta a regra do art. 31 do CP (o ajuste e a instigação não são puníveis se o crime não chega a ser tentado). A mesma lei renumerou o antigo parágrafo único como §1º: a pena aumenta até a metade se a associação é armada ou se há participação de criança ou adolescente.",
    origem: "banco",
    fonte: "Código Penal, art. 288, §2º (Lei 15.245/2025)",
  },
  {
    id: "pen-028",
    materia: "pen",
    topico: "Lei de Organizações Criminosas",
    enunciado:
      "O líder de uma facção, preso preventivamente, ordena a um comparsa que ameace de morte uma testemunha de processo contra a organização criminosa, para que ela não deponha. A ameaça é feita. À luz do art. 21-A da Lei 12.850/2013, incluído pela Lei 15.245/2025, é correto afirmar que:",
    alternativas: [
      "há crime de obstrução de ações contra o crime organizado, punido com reclusão de 4 a 12 anos e multa, somado à pena da ameaça, e o líder, como preso provisório, deve ser recolhido a estabelecimento penal federal de segurança máxima.",
      "o tipo só protege agentes públicos, e a intimidação de testemunha configura apenas coação no curso do processo (art. 344 do CP).",
      "a pena da obstrução absorve a da ameaça, por ser esta o meio de execução daquela.",
      "o crime exige que a violência seja efetivamente praticada, e a simples ordem de ameaçar é atípica.",
      "o condenado pode iniciar a pena em qualquer regime e estabelecimento, pelas regras gerais do art. 33 do CP.",
    ],
    correta: 0,
    explicacao:
      "Art. 21-A da Lei 12.850 (Lei 15.245/2025): solicitar, mediante promessa ou concessão de vantagem, ou ordenar a alguém violência ou grave ameaça contra agente público, advogado, defensor dativo, jurado, testemunha, colaborador ou perito, para impedir, embaraçar ou retaliar processo ou investigação de crimes de organização criminosa (ou a aprovação de medida contra o crime organizado). Pena de reclusão de 4 a 12 anos e multa. O §1º estende a proteção ao cônjuge, companheiro, filho e parentes até o 3º grau; pelo §2º, tentada ou consumada a violência ou ameaça, soma-se a pena do crime correspondente; pelo §3º, o condenado inicia a pena em presídio federal de segurança máxima; e pelo §4º, o preso provisório é recolhido lá.",
    origem: "banco",
    fonte: "Lei 12.850/2013, art. 21-A (Lei 15.245/2025)",
  },
  {
    id: "pen-029",
    materia: "pen",
    topico: "Lei de Organizações Criminosas",
    enunciado:
      "Dois integrantes de uma organização criminosa combinam matar o delegado que conduz a investigação contra o grupo, para paralisá-la. Antes de qualquer ato de execução, são presos. Pela Lei 12.850/2013, com a redação da Lei 15.245/2025:",
    alternativas: [
      "respondem pelo crime de conspiração para obstrução de ações contra o crime organizado, com reclusão de 4 a 12 anos e multa, ainda que não tenha havido ato de execução.",
      "não respondem por esse fato, porque o ajuste não é punível se o crime não chega a ser tentado.",
      "respondem por tentativa de homicídio qualificado, pois o ajuste já é início de execução.",
      "só haveria crime se o ajuste reunisse ao menos quatro pessoas, número mínimo de uma organização criminosa.",
      "respondem apenas por associação criminosa (art. 288 do CP), que absorve o ajuste.",
    ],
    correta: 0,
    explicacao:
      "Art. 21-B da Lei 12.850 (Lei 15.245/2025): ajustarem-se duas ou mais pessoas para a prática de violência ou grave ameaça contra agente público, advogado, defensor dativo, jurado, testemunha, colaborador ou perito, com o fim de impedir, embaraçar ou retaliar processo ou investigação de crimes de organização criminosa. A pena é a mesma do art. 21-A (reclusão de 4 a 12 anos e multa), com início do cumprimento em presídio federal de segurança máxima. Basta o ajuste de duas pessoas: é exceção expressa ao art. 31 do CP. A mesma lei tornou subsidiário o crime de embaraçar investigação de organização criminosa (art. 2º, §1º: “se o fato não constituir crime mais grave”).",
    origem: "banco",
    fonte: "Lei 12.850/2013, art. 21-B (Lei 15.245/2025)",
  },
  {
    id: "pen-030",
    materia: "pen",
    topico: "Execução penal (Lei 7.210/1984)",
    enunciado:
      "Depois da Lei 14.843/2024 (Lei Sargento PM Dias) e da derrubada do veto presidencial, a saída temporária sem vigilância direta, prevista no art. 122 da Lei de Execução Penal para o condenado em regime semiaberto:",
    alternativas: [
      "ficou restrita à frequência a curso profissionalizante ou de instrução de ensino médio ou superior, e é vedada ao condenado por crime hediondo ou com violência ou grave ameaça contra pessoa.",
      "continua cabível para visita à família e para atividades de retorno ao convívio social, até cinco vezes por ano.",
      "foi extinta inclusive para estudo, restando apenas o trabalho externo sem vigilância.",
      "passou a ser concedida pelo diretor do estabelecimento, sem decisão do juiz da execução.",
      "só é vedada ao condenado por crime hediondo com resultado morte, mantida para os demais crimes violentos.",
    ],
    correta: 0,
    explicacao:
      "Art. 122 da LEP: a Lei 14.843/2024 revogou os incisos I (visita à família) e III (atividades que concorram para o retorno ao convívio social); o veto à revogação da visita à família foi derrubado pelo Congresso. Restou o inciso II, a frequência a curso supletivo profissionalizante ou de instrução de ensino médio ou superior, pelo tempo necessário às atividades discentes (§3º). Pelo §2º, o condenado por crime hediondo ou com violência ou grave ameaça contra pessoa não tem saída temporária nem trabalho externo sem vigilância direta. A autorização continua sendo dada por ato motivado do juiz da execução (art. 123).",
    origem: "banco",
    fonte: "Lei 7.210/1984, art. 122 (Lei 14.843/2024)",
  },
  {
    id: "pen-031",
    materia: "pen",
    topico: "Execução penal (Lei 7.210/1984)",
    enunciado:
      "Sobre a progressão de regime na Lei de Execução Penal, com as alterações das Leis 14.843/2024, 15.280/2025 e 15.402/2026, é correto afirmar que:",
    alternativas: [
      "em todos os casos, a progressão exige boa conduta carcerária e os resultados do exame criminológico, e o condenado por crime contra a dignidade sexual só progride se o exame indicar que ele não voltará a cometer crimes da mesma natureza.",
      "o exame criminológico continua facultativo, cabendo ao juiz exigi-lo apenas em decisão fundamentada nas peculiaridades do caso.",
      "o primário condenado por crime cometido com violência ou grave ameaça progride após cumprir 1/6 da pena, como nos demais crimes comuns.",
      "o reincidente em crime sem violência ou grave ameaça precisa cumprir 30% da pena para progredir.",
      "para crimes hediondos praticados depois de 25/03/2026, o primário progride após cumprir 40% da pena.",
    ],
    correta: 0,
    explicacao:
      "Art. 112, §1º, da LEP (Lei 14.843/2024): em todos os casos, a progressão exige boa conduta carcerária, comprovada pelo diretor, e os resultados do exame criminológico. Art. 119-A (Lei 15.280/2025): o condenado por crime contra a dignidade sexual só vai para regime mais benéfico, ou recebe benefício de saída, se o exame indicar que não voltará a cometer crimes da mesma natureza; e o art. 146-E impõe monitoração eletrônica em toda saída do condenado por feminicídio ou crime sexual. As frações do caput (Lei 15.402/2026) são 1/6 como regra, 25% para o primário em crime com violência ou grave ameaça, 30% para o reincidente nesse crime e 20% para o reincidente nos demais. Para hediondos, a Lei 15.358/2026 fixou 70%, 75%, 80% e 85%, só para fatos a partir de 25/03/2026.",
    origem: "banco",
    fonte: "Lei 7.210/1984, arts. 112, 119-A e 146-E (Leis 14.843/2024, 15.280/2025 e 15.402/2026)",
  },
  {
    id: "pen-032",
    materia: "pen",
    topico: "Execução penal (Lei 7.210/1984)",
    enunciado:
      "Com a Lei 15.407/2026, o procedimento de inclusão do preso no regime disciplinar diferenciado (RDD) passou a prever que:",
    alternativas: [
      "o juiz decide liminarmente e profere a decisão final em até 15 dias, após a manifestação do Ministério Público e da defesa, e a falta dessas manifestações não impede a decisão.",
      "o juiz só pode decidir depois de ouvir o Ministério Público e a defesa, ainda que isso ultrapasse o prazo legal.",
      "a inclusão é determinada pelo diretor do estabelecimento, cabendo ao juiz apenas homologá-la em 10 dias.",
      "a inclusão independe de decisão judicial quando o preso integrar organização criminosa.",
      "o pedido de inclusão só pode ser feito pelo Ministério Público, nunca pela autoridade administrativa.",
    ],
    correta: 0,
    explicacao:
      "Art. 54 da LEP: a inclusão no RDD depende de prévio e fundamentado despacho do juiz competente (caput), a partir de requerimento circunstanciado do diretor do estabelecimento ou de outra autoridade administrativa (§1º). Pela Lei 15.407/2026, o juiz decide liminarmente e profere a decisão final em até 15 dias, após a manifestação do MP e da defesa (§2º), e a ausência dessas manifestações não impede a decisão, respeitado o prazo (§3º).",
    origem: "banco",
    fonte: "Lei 7.210/1984, art. 54, §§2º e 3º (Lei 15.407/2026)",
  },
  {
    id: "pen-033",
    materia: "pen",
    topico: "Extinção da punibilidade e prescrição",
    enunciado:
      "Paulo, com 19 anos na data do fato, ocorrido em 2026, é condenado por estupro (art. 213 do CP) praticado contra uma mulher. Pelas regras introduzidas pela Lei 15.160/2025 no Código Penal:",
    alternativas: [
      "não se aplicam a redução pela metade do prazo prescricional nem a atenuante da menoridade relativa, porque o crime envolve violência sexual contra a mulher.",
      "o prazo prescricional cai pela metade, porque o agente era menor de 21 anos ao tempo do crime.",
      "aplica-se a atenuante da menoridade relativa, mas não a redução do prazo prescricional.",
      "aplica-se a redução do prazo prescricional, mas não a atenuante da menoridade relativa.",
      "a exceção só alcança o agente maior de 70 anos na data da sentença, e não o menor de 21 anos.",
    ],
    correta: 0,
    explicacao:
      "Lei 15.160/2025 (3/7/2025): o art. 65, I, do CP (atenuante de ser o agente menor de 21 anos na data do fato ou maior de 70 na data da sentença) e o art. 115 (prazos de prescrição reduzidos pela metade nas mesmas hipóteses) passaram a ter a ressalva “salvo se o crime envolver violência sexual contra a mulher”. As duas exceções valem para os dois extremos de idade. Por ser mais gravosa, a regra só alcança fatos posteriores à sua vigência.",
    origem: "banco",
    fonte: "Código Penal, arts. 65, I, e 115 (Lei 15.160/2025)",
  },
  {
    id: "pen-034",
    materia: "pen",
    topico: "Extinção da punibilidade e prescrição",
    enunciado:
      "Sobre a prescrição e as causas de extinção da punibilidade no Código Penal, é correto afirmar que:",
    alternativas: [
      "antes do trânsito em julgado, a prescrição regula-se pelo máximo da pena privativa de liberdade cominada, e o recebimento da denúncia ou da queixa interrompe o seu curso.",
      "a prescrição da pretensão punitiva regula-se pela pena mínima cominada ao crime.",
      "o crime cuja pena máxima é inferior a 1 ano prescreve em 2 anos.",
      "o oferecimento da denúncia pelo Ministério Público interrompe a prescrição.",
      "o perdão do ofendido extingue a punibilidade nos crimes de ação privada, ainda que recusado pelo querelado.",
    ],
    correta: 0,
    explicacao:
      "Art. 109 do CP: antes do trânsito em julgado, regula-se pelo máximo da pena cominada: 20 anos (máximo superior a 12), 16 (acima de 8 até 12), 12 (acima de 4 até 8), 8 (acima de 2 até 4), 4 (de 1 até 2) e 3 anos (máximo inferior a 1 ano, Lei 12.234/2010). Art. 117: interrompem a prescrição o recebimento da denúncia ou queixa, a pronúncia, a decisão que a confirma, a publicação de sentença ou acórdão condenatórios recorríveis, o início ou continuação do cumprimento da pena e a reincidência. Art. 107: extinguem a punibilidade a morte do agente, a anistia, graça ou indulto, a abolitio criminis, a prescrição, decadência ou perempção, a renúncia ou o perdão aceito nos crimes de ação privada, a retratação e o perdão judicial.",
    origem: "banco",
    fonte: "Código Penal, arts. 107, 109 e 117",
  },
  {
    id: "pen-035",
    materia: "pen",
    topico: "Concurso de pessoas e concurso de crimes",
    enunciado:
      "Ana e Bruno combinam furtar uma casa. Sem que Ana soubesse, Bruno leva uma arma e, surpreendido pelo morador, o ameaça para garantir a fuga com os bens. Ana, que vigiava a rua, não previa nem podia prever a violência. Pelo Código Penal:",
    alternativas: [
      "Ana responde pelo furto, porque quis participar de crime menos grave, e sua pena só seria aumentada até a metade se o resultado mais grave fosse previsível.",
      "Ana responde por roubo, porque no concurso de pessoas todos respondem sempre pelo mesmo crime.",
      "Ana responde por roubo, com a pena diminuída de 1/6 a 1/3 pela participação de menor importância.",
      "Ana não responde por crime algum, porque não praticou o núcleo do tipo.",
      "Ana responde por furto com a pena aumentada até a metade, ainda que o resultado mais grave fosse imprevisível.",
    ],
    correta: 0,
    explicacao:
      "Art. 29 do CP: quem concorre para o crime incide nas penas a ele cominadas, na medida de sua culpabilidade (teoria monista). O §1º permite diminuir a pena de 1/6 a 1/3 na participação de menor importância. O §2º trata da cooperação dolosamente distinta: quem quis participar de crime menos grave recebe a pena deste, aumentada até a metade se o resultado mais grave era previsível. O art. 30 diz que não se comunicam as circunstâncias e condições de caráter pessoal, salvo quando elementares do crime. O art. 31 diz que o ajuste, a instigação e o auxílio não são puníveis se o crime não chega a ser tentado, salvo disposição expressa em contrário.",
    origem: "banco",
    fonte: "Código Penal, arts. 29 a 31",
  },
  {
    id: "pen-036",
    materia: "pen",
    topico: "Concurso de pessoas e concurso de crimes",
    enunciado:
      "Na mesma noite e com o mesmo modo de execução, um agente furta três carros estacionados na mesma rua, de três donos diferentes. Pelo Código Penal, aplica-se:",
    alternativas: [
      "a pena de um só dos furtos, aumentada de 1/6 a 2/3, pela continuidade delitiva.",
      "a soma das penas dos três furtos, pelo concurso material.",
      "a pena de um só furto, aumentada de 1/6 até a metade, pelo concurso formal.",
      "a pena de um só furto, aumentada até o triplo, por serem vítimas diferentes.",
      "a pena de um só furto, sem aumento, porque crimes da mesma espécie se fundem num só.",
    ],
    correta: 0,
    explicacao:
      "Art. 71 do CP (crime continuado): mais de uma ação, crimes da mesma espécie e condições semelhantes de tempo, lugar e modo de execução levam à pena de um só crime, aumentada de 1/6 a 2/3. O aumento até o triplo (parágrafo único) só cabe em crimes dolosos contra vítimas diferentes cometidos com violência ou grave ameaça, o que não é o caso do furto. O concurso material (art. 69) soma as penas quando não há continuidade. O concurso formal (art. 70) exige uma só ação ou omissão: aplica-se a pena mais grave aumentada de 1/6 até a metade, ou as penas se somam se houver desígnios autônomos.",
    origem: "banco",
    fonte: "Código Penal, arts. 69 a 71",
  },
  {
    id: "pen-037",
    materia: "pen",
    topico: "Teoria geral do crime",
    enunciado:
      "Um funcionário de uma loja furta R$ 2.000 do caixa. Uma semana depois, arrependido e por iniciativa própria, devolve todo o valor antes de oferecida a denúncia. Para esse caso, o Código Penal prevê:",
    alternativas: [
      "o arrependimento posterior, que reduz a pena de um a dois terços, por se tratar de crime sem violência ou grave ameaça com dano reparado até o recebimento da denúncia.",
      "o arrependimento eficaz, que afasta a punição pelo furto, porque o agente impediu o resultado.",
      "a desistência voluntária, e o agente responde só pelos atos já praticados.",
      "a extinção da punibilidade, porque a reparação do dano antes da denúncia apaga o crime patrimonial.",
      "o crime impossível, porque a vítima não teve prejuízo ao final.",
    ],
    correta: 0,
    explicacao:
      "Art. 16 do CP (arrependimento posterior): nos crimes sem violência ou grave ameaça à pessoa, reparado o dano ou restituída a coisa até o recebimento da denúncia ou queixa, por ato voluntário, a pena é reduzida de um a dois terços. O furto já estava consumado, então não há desistência voluntária nem arrependimento eficaz (art. 15), que exigem que o agente abandone a execução ou impeça o resultado. O crime impossível (art. 17) pressupõe ineficácia absoluta do meio ou impropriedade absoluta do objeto.",
    origem: "banco",
    fonte: "Código Penal, arts. 15 a 17",
  },
  {
    id: "pen-038",
    materia: "pen",
    topico: "Crimes contra a dignidade sexual",
    enunciado:
      "Um homem de 30 anos mantém relação sexual com uma adolescente de 13 anos, que afirma ter consentido e já ter tido relações sexuais antes. Com as Leis 15.280/2025 e 15.353/2026, é correto afirmar que:",
    alternativas: [
      "há estupro de vulnerável, punido com reclusão de 10 a 18 anos, e a presunção de vulnerabilidade é absoluta, sem relativização pelo consentimento ou pela experiência sexual da vítima.",
      "há estupro de vulnerável, punido com reclusão de 8 a 15 anos, mas o consentimento da vítima com experiência sexual anterior afasta o crime.",
      "o fato é atípico, porque houve consentimento e a vítima tinha mais de 12 anos.",
      "há apenas importunação sexual (art. 215-A), porque não houve violência nem grave ameaça.",
      "a presunção de vulnerabilidade é relativa e pode ser afastada pelo juiz conforme o caso concreto.",
    ],
    correta: 0,
    explicacao:
      "Art. 217-A do CP: ter conjunção carnal ou praticar ato libidinoso com menor de 14 anos. A Lei 15.280/2025 elevou a pena para reclusão de 10 a 18 anos (antes, 8 a 15), 12 a 24 com lesão grave e 20 a 40 com morte. A Lei 15.353/2026 incluiu o §4º-A (“é absoluta a presunção de vulnerabilidade da vítima e inadmissível sua relativização”) e reescreveu o §5º: a pena vale independentemente do consentimento, da experiência sexual, de relações anteriores ou de gravidez. A ação é pública incondicionada (art. 225). A Lei 15.280 também elevou as penas dos arts. 218 (6 a 14), 218-A (5 a 12), 218-B (7 a 16) e 218-C (4 a 10).",
    origem: "banco",
    fonte: "Código Penal, art. 217-A (Leis 15.280/2025 e 15.353/2026)",
  },
  {
    id: "pen-039",
    materia: "pen",
    topico: "Crimes contra a dignidade sexual",
    enunciado:
      "Sobre os processos por crimes contra a dignidade sexual, com a Lei 15.035/2024, é correto afirmar que:",
    alternativas: [
      "embora corram em segredo de justiça, a partir da condenação em primeira instância por crimes como estupro e estupro de vulnerável ficam públicos o nome completo, o CPF e a tipificação do réu, salvo decisão fundamentada do juiz pelo sigilo.",
      "os dados do réu só se tornam públicos após o trânsito em julgado da condenação.",
      "a publicidade alcança todos os crimes do título, inclusive a importunação sexual e o assédio sexual.",
      "se o réu for absolvido em grau recursal, os dados continuam públicos, por já terem sido divulgados.",
      "a publicidade dos dados substitui a monitoração eletrônica do condenado.",
    ],
    correta: 0,
    explicacao:
      "Art. 234-B do CP: os processos por crimes contra a dignidade sexual correm em segredo de justiça. A Lei 15.035/2024 incluiu o §1º: a consulta processual torna públicos o nome completo, o CPF e a tipificação do réu a partir da condenação em primeira instância pelos arts. 213, 216-B, 217-A, 218-B, 227, 228, 229 e 230, com os dados da pena, salvo decisão fundamentada pelo sigilo. Absolvido em recurso, o sigilo é restabelecido (§2º). O condenado passa a ser monitorado por dispositivo eletrônico (§3º).",
    origem: "banco",
    fonte: "Código Penal, art. 234-B (Lei 15.035/2024)",
  },
  {
    id: "pen-040",
    materia: "pen",
    topico: "Crimes contra a saúde pública",
    enunciado:
      "Um homem sem formação em medicina veterinária atende animais numa clínica clandestina e cobra pelos serviços. Um dos animais morre em razão do procedimento. Com a Lei 15.425/2026, ele:",
    alternativas: [
      "pratica exercício ilegal da profissão (art. 282 do CP), com multa pelo fim de lucro, e responde também pelo crime de maus-tratos a animais do art. 32 da Lei 9.605/1998.",
      "não pratica o crime do art. 282, que alcança apenas médico, dentista e farmacêutico.",
      "pratica charlatanismo (art. 283), porque inculcou cura por meio secreto.",
      "responde só pelo crime ambiental, que absorve o exercício ilegal da profissão.",
      "só comete o crime do art. 282 se agir a título gratuito, porque a cobrança configura estelionato.",
    ],
    correta: 0,
    explicacao:
      "Art. 282 do CP (Lei 15.425/2026): exercer, ainda que a título gratuito, a profissão de médico, médico veterinário, dentista ou farmacêutico sem autorização legal ou excedendo os limites. Pena de detenção de 6 meses a 2 anos, mais multa se houver fim de lucro (§1º). Se resulta lesão grave ou gravíssima, o agente responde também pelo art. 129, §§1º e 2º (§2º); se resulta morte, pelo homicídio (§3º); se resulta lesão ou morte de animal, pelo art. 32 da Lei 9.605/1998 (§4º). Também pratica o crime quem exerce a profissão durante a suspensão ou após o cancelamento do registro (§5º).",
    origem: "banco",
    fonte: "Código Penal, art. 282 (Lei 15.425/2026)",
  },
  {
    id: "pen-041",
    materia: "pen",
    topico: "Crimes contra a fé pública",
    enunciado:
      "Um servidor de cartório insere, numa certidão pública verdadeira e formalmente perfeita, declaração falsa sobre fato juridicamente relevante, prevalecendo-se do cargo. A conduta configura:",
    alternativas: [
      "falsidade ideológica (art. 299 do CP), com a pena aumentada da sexta parte, porque o documento é formalmente verdadeiro e o falso está no conteúdo.",
      "falsificação de documento público (art. 297), porque houve alteração material do documento.",
      "falsidade ideológica sem aumento de pena, porque a condição de funcionário já é elementar do tipo.",
      "uso de documento falso (art. 304), já que o servidor não falsificou o papel.",
      "falsificação de documento particular (art. 298), porque a certidão foi emitida por serventia extrajudicial.",
    ],
    correta: 0,
    explicacao:
      "Na falsidade material (arts. 297 e 298), o agente falsifica ou altera a forma do documento. Na falsidade ideológica (art. 299), o documento é formalmente verdadeiro, mas o agente omite declaração que devia constar ou insere declaração falsa, para prejudicar direito, criar obrigação ou alterar a verdade sobre fato juridicamente relevante: reclusão de 1 a 5 anos se o documento é público. Pelo parágrafo único, a pena aumenta da sexta parte se o agente é funcionário público e se prevalece do cargo, ou se a falsificação é de assentamento de registro civil. A falsificação de documento público (art. 297) tem reclusão de 2 a 6 anos e multa.",
    origem: "banco",
    fonte: "Código Penal, arts. 297 a 299",
  },
  {
    id: "pen-042",
    materia: "pen",
    topico: "Crimes de trânsito (Lei 9.503/1997)",
    enunciado:
      "Um motorista sob influência de álcool atropela e mata um pedestre. Sobre o tratamento penal do caso no Código de Trânsito Brasileiro, é correto afirmar que:",
    alternativas: [
      "responde por homicídio culposo na direção de veículo com a forma do §3º do art. 302, punida com reclusão de 5 a 8 anos, e não tem a pena substituída por restritiva de direitos pela regra do crime culposo.",
      "responde por homicídio culposo simples, com detenção de 2 a 4 anos, aumentada de 1/3 à metade pela embriaguez.",
      "o crime de trânsito com morte é doloso por definição legal e vai ao Tribunal do Júri.",
      "o homicídio culposo de trânsito admite transação penal e composição civil dos danos.",
      "a embriaguez só pode ser considerada se comprovada por exame de sangue.",
    ],
    correta: 0,
    explicacao:
      "Art. 302 do CTB: homicídio culposo na direção de veículo, detenção de 2 a 4 anos e suspensão ou proibição da habilitação; o §1º aumenta de 1/3 à metade se o agente não tem habilitação, age na faixa ou calçada, deixa de prestar socorro ou conduz veículo de passageiros (a embriaguez não está nessa lista). O §3º (Lei 13.546/2017): sob influência de álcool ou substância psicoativa, reclusão de 5 a 8 anos. O art. 312-B (Lei 14.071/2020) afasta, para o art. 302, §3º, e o art. 303, §2º, a regra do art. 44, I, do CP que permite a substituição em qualquer crime culposo. O art. 301 dispensa flagrante e fiança ao condutor que presta pronto e integral socorro à vítima. O art. 291, §1º, só admite os institutos da Lei 9.099 na lesão culposa, e nunca se o condutor estava embriagado, em racha ou a mais de 50 km/h acima do limite.",
    origem: "banco",
    fonte: "Lei 9.503/1997 (CTB), arts. 291, 301, 302 e 312-B",
  },
  {
    id: "pen-043",
    materia: "pen",
    topico: "Crimes de trânsito (Lei 9.503/1997)",
    enunciado:
      "Sobre o crime de conduzir veículo com a capacidade psicomotora alterada pelo álcool (art. 306 do CTB), é correto afirmar que:",
    alternativas: [
      "a alteração pode ser constatada por concentração igual ou superior a 6 decigramas de álcool por litro de sangue ou 0,3 miligrama por litro de ar alveolar, ou por sinais de alteração, admitindo-se como prova vídeo, testemunhas e exame clínico.",
      "o crime só se prova por etilômetro ou exame de sangue, e a recusa do condutor torna a conduta atípica.",
      "qualquer concentração de álcool no sangue, por menor que seja, configura o crime.",
      "a pena é de reclusão de 2 a 4 anos, sem suspensão da habilitação.",
      "o crime só se consuma se o condutor causar dano efetivo a alguém.",
    ],
    correta: 0,
    explicacao:
      "Art. 306 do CTB: detenção de 6 meses a 3 anos, multa e suspensão ou proibição da habilitação. O §1º diz que a conduta se constata por concentração igual ou superior a 6 dg de álcool por litro de sangue ou 0,3 mg por litro de ar alveolar, ou por sinais de alteração da capacidade psicomotora definidos pelo Contran. O §2º admite teste de alcoolemia ou toxicológico, exame clínico, perícia, vídeo, prova testemunhal e outros meios, com direito à contraprova. A tolerância zero vale para a infração administrativa, não para o crime. É crime de perigo abstrato: não exige dano.",
    origem: "banco",
    fonte: "Lei 9.503/1997 (CTB), art. 306",
  },
  {
    id: "pen-044",
    materia: "pen",
    topico: "Crimes contra a ordem tributária (Lei 8.137/1990)",
    enunciado:
      "Sobre os crimes contra a ordem tributária previstos na Lei 8.137/1990, é correto afirmar que:",
    alternativas: [
      "os crimes materiais do art. 1º, incisos I a IV, só se tipificam depois do lançamento definitivo do tributo, conforme a Súmula Vinculante 24 do STF.",
      "a supressão de tributo mediante declaração falsa consuma-se com a simples entrega da declaração, ainda que nenhum tributo deixe de ser pago.",
      "os crimes do art. 1º são punidos com detenção de 6 meses a 2 anos e são de menor potencial ofensivo.",
      "deixar de recolher, no prazo legal, tributo descontado ou cobrado de terceiro é mero inadimplemento, nunca crime.",
      "negar nota fiscal de venda efetivamente realizada é só infração administrativa.",
    ],
    correta: 0,
    explicacao:
      "Art. 1º da Lei 8.137: suprimir ou reduzir tributo mediante omissão de informação ou declaração falsa, fraude à fiscalização, falsificação de nota fiscal, uso de documento falso ou negativa de nota fiscal (incisos I a V). Pena de reclusão de 2 a 5 anos e multa. Pela Súmula Vinculante 24, os crimes materiais dos incisos I a IV não se tipificam antes do lançamento definitivo do tributo. O art. 2º traz crimes formais, punidos com detenção de 6 meses a 2 anos e multa, como deixar de recolher tributo descontado ou cobrado de terceiro (inciso II). O STF (RHC 163.334) entende que o contribuinte que, de forma contumaz e com dolo de apropriação, deixa de recolher o ICMS cobrado do adquirente pratica esse crime.",
    origem: "banco",
    fonte: "Lei 8.137/1990, arts. 1º e 2º; Súmula Vinculante 24 do STF",
  },
  {
    id: "pen-045",
    materia: "pen",
    topico: "Estatuto da OAB (Lei 8.906/1994): aspectos penais",
    enunciado:
      "À luz dos aspectos penais do Estatuto da Advocacia (Lei 8.906/1994), é correto afirmar que:",
    alternativas: [
      "o advogado só pode ser preso em flagrante, por motivo ligado ao exercício da profissão, em caso de crime inafiançável, com a presença de representante da OAB na lavratura do auto.",
      "o crime de violar prerrogativa do advogado (art. 7º-B) é punido com detenção de 3 meses a 1 ano e é de menor potencial ofensivo.",
      "o advogado preso preventivamente vai para cela comum, porque a sala de Estado-Maior só é assegurada após a condenação definitiva.",
      "o delegado pode determinar busca no escritório de advocacia, em caso de urgência, sem ordem judicial.",
      "a busca no escritório pode se basear apenas nas declarações de um colaborador premiado.",
    ],
    correta: 0,
    explicacao:
      "Art. 7º, §3º, do Estatuto: o advogado só pode ser preso em flagrante, por motivo de exercício da profissão, em crime inafiançável, observado o inciso IV (presença de representante da OAB, sob pena de nulidade). Pelo inciso V, antes do trânsito em julgado, só pode ser recolhido em sala de Estado-Maior ou, na falta, em prisão domiciliar. A busca no escritório exige decisão judicial motivada, mandado específico e presença da OAB (§6º) e não pode se fundar só em declarações de colaborador sem confirmação (§6º-B, Lei 14.365/2022). O art. 7º-B (Lei 13.869/2019) pune a violação das prerrogativas dos incisos II, III, IV e V com detenção de 2 a 4 anos e multa, pena elevada pela Lei 14.365/2022.",
    origem: "banco",
    fonte: "Lei 8.906/1994, art. 7º, V, §§3º, 6º e 6º-B, e art. 7º-B",
  },
  {
    id: "pen-046",
    materia: "pen",
    topico: "Lei Maria da Penha",
    enunciado:
      "A Lei 15.280/2025 incluiu no Código Penal o art. 338-A, que pune quem descumpre decisão judicial que defere medidas protetivas de urgência. Sobre esse crime, é correto afirmar que:",
    alternativas: [
      "é punido com reclusão de 2 a 5 anos e multa, independe da competência civil ou criminal do juiz que deferiu as medidas e, no flagrante, só o juiz pode conceder fiança.",
      "só se configura se a decisão descumprida tiver sido proferida por juiz criminal.",
      "a fiança pode ser arbitrada pelo delegado, por ser crime com pena máxima de até 4 anos.",
      "só abrange as medidas protetivas da Lei Maria da Penha, das quais é cópia.",
      "afasta a aplicação de outras sanções cabíveis, como a prisão preventiva.",
    ],
    correta: 0,
    explicacao:
      "Art. 338-A do CP (Lei 15.280/2025): descumprir decisão judicial que defere medidas protetivas de urgência. Pena de reclusão de 2 a 5 anos e multa. O crime independe da competência civil ou criminal do juiz que deferiu as medidas (§1º); no flagrante, só a autoridade judicial pode conceder fiança (§2º); e não exclui outras sanções (§3º). É regra geral, que alcança, por exemplo, as novas medidas protetivas para vítimas de crimes contra a dignidade sexual (art. 350-A do CPP). Para as medidas da Maria da Penha, continua o crime específico do art. 24-A da Lei 11.340, com a mesma pena.",
    origem: "banco",
    fonte: "Código Penal, art. 338-A (Lei 15.280/2025)",
  },
  {
    id: "pen-047",
    materia: "pen",
    topico: "Lei Maria da Penha",
    enunciado:
      "Um homem ameaça de morte a ex-companheira, por mensagem, num contexto de violência doméstica e familiar. Pelo art. 147 do Código Penal, com a redação da Lei 14.994/2024:",
    alternativas: [
      "a pena é aplicada em dobro e a ação penal é pública incondicionada, porque o crime foi cometido contra a mulher por razões da condição do sexo feminino.",
      "a ação penal depende de representação da vítima, como em toda ameaça.",
      "a ação penal é privada, mediante queixa, por ofender a honra da vítima.",
      "a ameaça fica absorvida pelo crime de descumprimento de medida protetiva, ainda que não haja medida deferida.",
      "a pena é aumentada de um terço, mas a ação continua condicionada à representação.",
    ],
    correta: 0,
    explicacao:
      "Art. 147 do CP: ameaça, detenção de 1 a 6 meses ou multa. A Lei 14.994/2024 incluiu o §1º (pena em dobro se o crime é cometido contra a mulher por razões da condição do sexo feminino, nos termos do art. 121-A, §1º, que abrange a violência doméstica e familiar) e o §2º (“somente se procede mediante representação, exceto na hipótese prevista no §1º”). Logo, a ameaça de gênero é de ação pública incondicionada. A perseguição (art. 147-A) continua dependendo de representação (§3º); nesse caso, se houver violência doméstica, o prazo de decadência é de 12 meses (Lei 15.438/2026).",
    origem: "banco",
    fonte: "Código Penal, art. 147, §§1º e 2º (Lei 14.994/2024)",
  },
];
