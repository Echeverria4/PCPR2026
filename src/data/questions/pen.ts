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
  {
    id: "pen-048",
    materia: "pen",
    topico: "Crimes de perigo contra a pessoa (periclitação da vida e da saúde)",
    enunciado:
      "Pessoa contaminada por moléstia venérea, sabendo da própria condição, mantém relação sexual com parceiro sem revelar o fato, sem a intenção de transmitir a doença. Sobre o crime de perigo de contágio venéreo (art. 130 do CP), é correto afirmar que",
    alternativas: [
      "consuma-se com a prática da relação sexual ou do ato libidinoso, independentemente de o parceiro ter sido efetivamente contaminado, pois se trata de crime formal de perigo abstrato.",
      "só se configura se o parceiro for efetivamente contaminado pela moléstia, pois se trata de crime material que exige resultado de dano.",
      "exige representação do ofendido apenas na forma qualificada do §1º, sendo a forma simples de ação penal pública incondicionada.",
      "é afastado se o parceiro consentir em manter a relação mesmo sabendo do risco, já que a incolumidade física é bem jurídico disponível nesse contexto.",
      "não se configura caso o agente apenas suspeite, sem ter certeza, de estar contaminado, pois a lei exige conhecimento inequívoco e não a mera possibilidade de saber.",
    ],
    correta: 0,
    explicacao:
      "O crime é de perigo abstrato (basta o ato libidinoso, independentemente de contágio efetivo) e formal. A ação penal depende de representação em qualquer modalidade (§2º, sem distinção entre caput e forma qualificada). O bem jurídico é indisponível, sendo irrelevante o consentimento. O dolo pode ser direto (sabe) ou eventual (deve saber), de modo que a mera suspeita não verificada já basta.",
    origem: "banco",
    fonte: "Código Penal, art. 130",
  },
  {
    id: "pen-049",
    materia: "pen",
    topico: "Crimes de perigo contra a pessoa (periclitação da vida e da saúde)",
    enunciado:
      "Sobre o crime de perigo de contágio de moléstia grave (art. 131 do CP), assinale a alternativa correta:",
    alternativas: [
      "O crime exige fim especial de agir (transmitir moléstia grave) e não admite dolo eventual, de modo que o agente que, sem essa finalidade específica, apenas assume o risco de contaminar outrem responde por lesão corporal ou homicídio, conforme o resultado.",
      "Admite a modalidade culposa, bastando que o agente negligentemente deixe de tomar precauções contra o contágio, ainda que não tenha qualquer finalidade de transmitir a doença, equiparando-se nesse ponto ao tratamento dado à generalidade dos crimes contra a vida e a saúde.",
      "É crime de perigo abstrato, dispensando a demonstração de que o ato praticado pelo agente era efetivamente capaz de gerar o contágio da moléstia grave.",
      "A ação penal depende de representação do ofendido, haja vista a gravidade do bem jurídico tutelado e a necessidade de preservar a intimidade da vítima contaminada.",
      "Pressupõe crime próprio, pois só pode ser praticado por profissional da saúde que tenha conhecimento técnico sobre a transmissibilidade da moléstia de que é portador.",
    ],
    correta: 0,
    explicacao:
      "O art. 131 exige o fim específico de transmitir moléstia grave, não admitindo dolo eventual nem modalidade culposa. É crime de perigo concreto (exige demonstração da capacidade de contágio do ato) e de forma livre (crime comum, não próprio), com ação penal pública incondicionada.",
    origem: "banco",
    fonte: "Código Penal, art. 131",
  },
  {
    id: "pen-050",
    materia: "pen",
    topico: "Crimes de perigo contra a pessoa (periclitação da vida e da saúde)",
    enunciado:
      "Em crime de abandono de incapaz (art. 133 do CP) praticado contra vítima maior de 60 anos, a majorante específica do §3º, III, do art. 133",
    alternativas: [
      "incide no lugar da agravante genérica de crime contra idoso prevista no art. 61, II, 'h', do CP, que fica afastada para evitar a dupla valoração do mesmo fator pelo mesmo motivo (bis in idem).",
      "incide cumulativamente com a agravante genérica do art. 61, II, 'h', do CP, já que se trata de circunstâncias de natureza distinta e compatíveis entre si.",
      "somente se aplica se o agente for também parente da vítima, pois a lei exige a presença conjunta das duas condições previstas no §3º do art. 133.",
      "substitui a qualificadora do §2º (resultado morte), não podendo as duas majorantes serem aplicadas ao mesmo fato concreto.",
      "pode ser aplicada mesmo que o abandono não gere qualquer perigo concreto à vida ou à saúde da vítima, bastando a mera condição etária da pessoa idosa para configurar a majorante, independentemente das circunstâncias do caso concreto.",
    ],
    correta: 0,
    explicacao:
      "A majorante do art. 133, §3º, III (vítima maior de 60 anos) afasta a agravante genérica do art. 61, II, 'h', do CP, para não punir duas vezes o mesmo fator. As hipóteses do §3º (lugar ermo, parentesco, idade) são autônomas entre si, e o crime permanece de perigo concreto, exigindo risco real à vida ou à saúde do incapaz.",
    origem: "banco",
    fonte: "Código Penal, art. 133, §3º",
  },
  {
    id: "pen-051",
    materia: "pen",
    topico: "Crimes de perigo contra a pessoa (periclitação da vida e da saúde)",
    enunciado:
      "Sobre o crime de omissão de socorro (art. 135 do CP), é correto afirmar que",
    alternativas: [
      "o dever de pedir o socorro da autoridade pública é subsidiário ao de prestar assistência direta, de modo que só se pode exigir o acionamento de terceiros quando a assistência direta implicar risco pessoal ao agente.",
      "admite a modalidade culposa, caso o agente deixe de perceber, por simples descuido, que a vítima se encontrava em situação de abandono ou de grave e iminente perigo.",
      "exige que o agente tenha dado causa à situação de perigo em que a vítima se encontra, não se aplicando a quem apenas presencia, sem qualquer participação, o desamparo de terceiro em via pública.",
      "deixa de se consumar caso a própria vítima, de forma válida, recuse a assistência oferecida pelo agente, ainda que o risco físico ao ofendido permaneça iminente.",
      "admite a tentativa, por se tratar de crime omissivo que se desenvolve ao longo de um período, permitindo o fracionamento dos atos de execução entre o início e o fim da omissão.",
    ],
    correta: 0,
    explicacao:
      "É crime omissivo puro (não admite tentativa) e de perigo abstrato, sem modalidade culposa. É irrelevante quem causou a situação de perigo. A recusa do ofendido só afasta o crime se gerar impossibilidade absoluta de socorro; caso contrário, a omissão persiste.",
    origem: "banco",
    fonte: "Código Penal, art. 135",
  },
  {
    id: "pen-052",
    materia: "pen",
    topico: "Crimes de perigo contra a pessoa (periclitação da vida e da saúde)",
    enunciado:
      "Comparando os crimes de maus-tratos (art. 136 do CP) e tortura-castigo (art. 1º, II, da Lei 9.455/1997), é correto afirmar que",
    alternativas: [
      "maus-tratos é crime de perigo, cometido com finalidade de educação, ensino, tratamento ou custódia, enquanto a tortura-castigo é crime de dano, que causa intenso sofrimento físico ou mental com intenção de torturar.",
      "ambos exigem, necessariamente, a existência de vínculo de parentesco entre autor e vítima, distinguindo-se apenas pela intensidade da violência empregada em cada caso.",
      "maus-tratos é crime de dano e a tortura-castigo é crime de perigo, já que a tortura pressupõe apenas a ameaça de sofrimento, sem a efetiva produção de lesão à vítima.",
      "a modalidade qualificada do art. 136 pela lesão corporal leve subsiste de forma autônoma, somando-se à pena do crime de maus-tratos simples, sem qualquer absorção.",
      "a privação de alimentação ou de cuidados indispensáveis configura o crime de maus-tratos independentemente de reiteração, bastando um único episódio isolado e de curta duração de privação parcial.",
    ],
    correta: 0,
    explicacao:
      "Maus-tratos (crime de perigo) exige finalidade de educação, ensino, tratamento ou custódia; tortura-castigo (crime de dano) exige intensa produção de sofrimento com intenção de torturar. A lesão corporal leve fica absorvida pelo crime de maus-tratos, e a privação de alimentos ou cuidados exige habitualidade, não bastando episódio isolado.",
    origem: "banco",
    fonte: "Código Penal, art. 136; Lei 9.455/1997, art. 1º, II",
  },
  {
    id: "pen-053",
    materia: "pen",
    topico: "Rixa (art. 137 do CP)",
    enunciado:
      "Durante um combate tumultuário entre quatro pessoas, em que não é possível individualizar as agressões, um dos participantes sofre lesão corporal de natureza grave, mas não se consegue identificar quem a causou. Sobre a responsabilidade penal nesse cenário de rixa (art. 137 do CP), é correto afirmar que",
    alternativas: [
      "todos os participantes respondem pela rixa qualificada do parágrafo único do art. 137, pois o resultado mais grave é imputado a título de culpa a quem participou do combate, caracterizando crime preterdoloso.",
      "nenhum dos participantes pode ser responsabilizado, pois a impossibilidade de identificar o autor da lesão grave gera a atipicidade de toda a conduta, inclusive da rixa simples já praticada.",
      "todos respondem por lesão corporal grave em concurso formal com a rixa simples, já que o resultado mais gravoso se comunica automaticamente a todo o grupo a título de dolo.",
      "apenas o participante que iniciou o confronto responde pela forma qualificada, sendo os demais responsabilizados somente pela rixa simples do caput.",
      "a situação exige a instauração de inquérito específico contra cada participante individualmente, sob pena de nulidade da ação penal por ausência de individualização da conduta.",
    ],
    correta: 0,
    explicacao:
      "Quando o autor da lesão grave ou morte não é identificado, todos os partícipes da rixa respondem pela forma qualificada do parágrafo único do art. 137, a título de culpa (preterdolo). Se o autor for identificado, ele responde por homicídio/lesão grave em concurso com a rixa simples, evitando bis in idem.",
    origem: "banco",
    fonte: "Código Penal, art. 137, parágrafo único",
  },
  {
    id: "pen-054",
    materia: "pen",
    topico: "Rixa (art. 137 do CP)",
    enunciado:
      "Sobre o crime de rixa (art. 137 do CP), é correto afirmar que",
    alternativas: [
      "é admissível tanto a rixa ex improviso (surgida de repente) quanto a rixa ex proposito (previamente combinada), e a competência para julgamento é, em regra, do Juizado Especial Criminal, dada a pena máxima não superior a dois anos.",
      "só se configura quando o confronto é súbito e não planejado, de modo que confrontos previamente combinados entre grupos rivais caracterizam outro delito, e não a rixa propriamente dita, ainda que travados corpo a corpo entre três ou mais pessoas.",
      "admite a modalidade culposa, bastando que o agente se envolva, por imprudência, em uma confusão generalizada sem a intenção de agredir os demais participantes.",
      "é crime de perigo abstrato, dispensando a demonstração de risco real à vida ou à saúde dos contendores ou de terceiros presentes no local do confronto.",
      "a simples ocorrência de vias de fato entre os rixosos é absorvida pela rixa em qualquer hipótese, ainda que se verifiquem lesões corporais leves durante o confronto.",
    ],
    correta: 0,
    explicacao:
      "A doutrina dominante admite tanto a rixa ex improviso quanto a ex proposito (combinada, como entre gangues rivais). É crime de perigo concreto (exige risco real), doloso (sem modalidade culposa), e a rixa absorve vias de fato, mas, havendo lesões leves, há concurso de crimes.",
    origem: "banco",
    fonte: "Código Penal, art. 137",
  },
  {
    id: "pen-055",
    materia: "pen",
    topico: "Crimes contra a honra (calúnia, difamação e injúria)",
    enunciado:
      "Sobre a exceção da verdade no crime de calúnia (art. 138, §3º, do CP), é correto afirmar que",
    alternativas: [
      "não é admitida se o fato imputado constituir crime de ação privada e o ofendido não tiver sido condenado por sentença irrecorrível, nem se o ofendido tiver sido absolvido do crime imputado por sentença irrecorrível.",
      "é sempre admitida, independentemente da natureza do crime imputado ou do resultado do processo em que a vítima da calúnia eventualmente responda.",
      "somente pode ser arguida pelo querelado após o trânsito em julgado da ação penal de calúnia, nunca durante a instrução do próprio processo por calúnia.",
      "é vedada apenas quando o fato imputado for crime de ação pública incondicionada, sendo livremente admitida nos demais casos, inclusive quanto a crimes de ação privada.",
      "aplica-se apenas à calúnia contra os mortos, prevista no §2º do art. 138, não se estendendo às demais hipóteses de imputação falsa de crime a pessoa viva, ainda que o ofendido também não tenha sido condenado por sentença irrecorrível.",
    ],
    correta: 0,
    explicacao:
      "O §3º do art. 138 veda a exceção da verdade em três hipóteses: crime de ação privada sem condenação irrecorrível do ofendido, imputação ao Presidente da República ou chefe de governo estrangeiro, e ofendido absolvido por sentença irrecorrível do crime imputado.",
    origem: "banco",
    fonte: "Código Penal, art. 138, §3º",
  },
  {
    id: "pen-056",
    materia: "pen",
    topico: "Crimes contra a honra (calúnia, difamação e injúria)",
    enunciado:
      "Quanto à exceção da verdade na difamação (art. 139, parágrafo único, do CP), ao contrário da calúnia, é correto afirmar que",
    alternativas: [
      "como regra não é admitida, já que mesmo fatos verdadeiros podem ofender a reputação, sendo a única exceção a hipótese de o ofendido ser funcionário público e a ofensa se referir ao exercício de suas funções.",
      "é admitida em qualquer hipótese, bastando que o autor da difamação comprove a veracidade do fato ofensivo imputado à reputação da vítima.",
      "é vedada em qualquer hipótese, inclusive quando o ofendido for funcionário público e a ofensa versar sobre o exercício de suas funções.",
      "depende de autorização judicial prévia, concedida em procedimento cautelar específico, sempre que o querelado pretender comprovar a veracidade da ofensa imputada ao querelante no processo por difamação.",
      "só é admitida quando o querelante for pessoa jurídica, haja vista a inexistência, nesse caso, de honra subjetiva a ser tutelada pela norma penal.",
    ],
    correta: 0,
    explicacao:
      "Na difamação, a veracidade do fato não afasta a tipicidade, pois o que se protege é a reputação social. A única exceção da verdade admitida é quando o ofendido for funcionário público e a ofensa se referir ao exercício de suas funções, visando fiscalizar a administração pública.",
    origem: "banco",
    fonte: "Código Penal, art. 139, parágrafo único",
  },
  {
    id: "pen-057",
    materia: "pen",
    topico: "Crimes contra a honra (calúnia, difamação e injúria)",
    enunciado:
      "Sobre as modalidades do crime de injúria (art. 140 do CP), é correto afirmar que",
    alternativas: [
      "a injúria real, quando da violência resultar lesão corporal, tem a ação penal alterada para pública incondicionada, enquanto a injúria preconceituosa do §3º é processada mediante representação do ofendido.",
      "tanto a injúria real quanto a injúria preconceituosa são sempre processadas mediante queixa-crime privada, independentemente de resultar ou não lesão corporal da violência empregada.",
      "a injúria preconceituosa do §3º abrange elementos de raça, cor e etnia, que permanecem tipificados nesse dispositivo mesmo após a criação do art. 140-A do CP.",
      "o perdão judicial previsto no §1º é cabível apenas na modalidade preconceituosa, não se aplicando à injúria simples do caput em nenhuma hipótese.",
      "a pessoa jurídica pode figurar como sujeito passivo da injúria, já que, tal como a pessoa física, é titular de honra subjetiva tutelada pelo tipo penal.",
    ],
    correta: 0,
    explicacao:
      "Se da violência da injúria real resultar lesão corporal, a ação passa a ser pública incondicionada; a injúria preconceituosa (religião, idoso, pessoa com deficiência) é pública condicionada à representação. Raça, cor e etnia migraram para o art. 140-A. O perdão judicial do §1º é cabível na injúria simples do caput, e a pessoa jurídica não possui honra subjetiva.",
    origem: "banco",
    fonte: "Código Penal, art. 140",
  },
  {
    id: "pen-058",
    materia: "pen",
    topico: "Crimes contra a honra (calúnia, difamação e injúria)",
    enunciado:
      "Sobre a retratação nos crimes contra a honra (art. 143 do CP), é correto afirmar que",
    alternativas: [
      "é cabível apenas na calúnia e na difamação, pois nesses crimes se busca restaurar a honra objetiva da vítima perante a sociedade, o que não se aplica à injúria, que tutela a honra subjetiva.",
      "é cabível nos três crimes contra a honra, inclusive na injúria, desde que realizada de forma cabal e antes da publicação da sentença condenatória.",
      "pode ser realizada em qualquer momento do processo, inclusive após o trânsito em julgado da sentença condenatória, sem qualquer efeito sobre a dosimetria da pena.",
      "exige, obrigatoriamente, a concordância expressa do ofendido para produzir qualquer efeito jurídico sobre a punibilidade do querelado retratante.",
      "quando a ofensa foi praticada por meio de comunicação social, deve necessariamente ocorrer pelos mesmos meios em que a ofensa foi veiculada, independentemente da vontade do ofendido.",
    ],
    correta: 0,
    explicacao:
      "A retratação cabal, até a publicação da sentença, isenta de pena apenas na calúnia e na difamação (honra objetiva); não se aplica à injúria (honra subjetiva), em que uma retratação poderia até agravar a humilhação. Se por meio de comunicação, a retratação pelo mesmo veículo ocorre se assim o ofendido desejar.",
    origem: "banco",
    fonte: "Código Penal, art. 143",
  },
  {
    id: "pen-059",
    materia: "pen",
    topico: "Crimes contra a honra (calúnia, difamação e injúria)",
    enunciado:
      "Sobre as causas de exclusão de injúria e difamação previstas no art. 142 do CP, é correto afirmar que",
    alternativas: [
      "a imunidade judiciária da ofensa irrogada em juízo não se estende à calúnia, e, nos casos dos incisos I e III, quem der publicidade à ofensa originalmente protegida responde por crime próprio e autônomo.",
      "abrangem também o crime de calúnia, desde que a ofensa tenha sido proferida pela parte ou por seu procurador no curso da discussão da causa em juízo.",
      "a imunidade do inciso I protege igualmente o magistrado por ofensas que ele próprio profira no exercício da função, em razão do dever de conduzir o processo.",
      "a opinião desfavorável da crítica literária, artística ou científica só é excluída de punibilidade se o crítico obtiver anuência prévia do autor da obra criticada.",
      "o parágrafo único do art. 142 afasta a responsabilidade de quem dá publicidade à ofensa acobertada pela imunidade, desde que o faça sem conhecimento do teor exato das palavras originalmente proferidas.",
    ],
    correta: 0,
    explicacao:
      "O art. 142 exclui a punibilidade apenas de injúria e difamação, nunca de calúnia. O juiz não goza da imunidade judiciária, devendo manter a urbanidade. A crítica literária/artística/científica dispensa anuência do criticado, bastando ausência de animus injuriandi. Pelo parágrafo único, quem dá publicidade à ofensa protegida responde por crime próprio.",
    origem: "banco",
    fonte: "Código Penal, art. 142",
  },
  {
    id: "pen-060",
    materia: "pen",
    topico: "Crimes contra a administração da justiça",
    enunciado:
      "Um atleta, após chegar atrasado a uma competição internacional, comunica à polícia civil ter sofrido um assalto durante a madrugada. Posteriormente, apura-se que o roubo não ocorreu e que a comunicação teve como único objetivo justificar o atraso, sem que o atleta tenha atribuído o crime a qualquer pessoa determinada. Essa conduta configura o crime de",
    alternativas: [
      "comunicação falsa de crime (art. 340 do Código Penal), pois o agente provoca a ação da autoridade comunicando a ocorrência de crime que sabe não se ter verificado, sem imputá-lo a ninguém.",
      "denunciação caluniosa (art. 339 do Código Penal), já que a comunicação à autoridade policial de um crime inexistente atribui a responsabilidade por esse fato a uma pessoa certa e determinada.",
      "calúnia (art. 138 do Código Penal), uma vez que a falsa imputação de um crime, ainda que feita à própria autoridade policial e não a um terceiro particular, já caracteriza esse delito contra a honra.",
      "autoacusação falsa (art. 341 do Código Penal), pois o agente se atribuiu, perante a autoridade, a prática de um crime que, na realidade, nunca chegou a ocorrer.",
      "falso testemunho (art. 342 do Código Penal), já que a declaração falsa foi prestada perante autoridade pública no âmbito de um procedimento formalmente instaurado.",
    ],
    correta: 0,
    explicacao:
      "A comunicação falsa de crime (art. 340) exige apenas que o agente comunique a ocorrência de crime que sabe não se ter verificado, sem imputá-lo a alguém. Se houvesse imputação a pessoa certa, seria denunciação caluniosa (art. 339); se o próprio agente se acusasse, seria autoacusação falsa (art. 341).",
    origem: "banco",
    fonte: "Adaptada de FGV — 2024 — PC-SC — Psicólogo Policial Civil",
  },
  {
    id: "pen-061",
    materia: "pen",
    topico: "Crimes contra a administração da justiça",
    enunciado:
      "Comparando o favorecimento pessoal (art. 348 do CP) e o favorecimento real (art. 349 do CP), é correto afirmar que",
    alternativas: [
      "no favorecimento pessoal, o agente auxilia o próprio autor do crime a subtrair-se à ação da autoridade pública, ao passo que no favorecimento real o auxílio se destina a tornar seguro o proveito do crime, e não a pessoa do criminoso.",
      "ambos exigem que o auxílio seja prestado por ascendente, descendente, cônjuge ou irmão do criminoso, sendo essa relação de parentesco elementar típica em ambos os crimes.",
      "o favorecimento real pressupõe que o auxiliador tenha participado como coautor do crime antecedente, distinguindo-se do favorecimento pessoal justamente por essa coautoria.",
      "o favorecimento pessoal somente se configura se o crime antecedente for punido com pena de detenção, não se aplicando quando a pena cominada for de reclusão.",
      "a isenção de pena ao auxiliador ascendente, descendente, cônjuge ou irmão do criminoso aplica-se tanto ao favorecimento pessoal quanto ao favorecimento real, por disposição expressa e idêntica do art. 349 do CP.",
    ],
    correta: 0,
    explicacao:
      "O favorecimento pessoal (art. 348) pune auxiliar o criminoso a escapar da autoridade; o favorecimento real (art. 349) pune auxiliar a tornar seguro o proveito do crime, exigindo expressamente que o auxiliador esteja fora dos casos de coautoria. A isenção de pena para parentes próximos só existe no art. 348, e este exige crime antecedente punido com reclusão.",
    origem: "banco",
    fonte: "Código Penal, arts. 348 e 349",
  },
  {
    id: "pen-062",
    materia: "pen",
    topico: "Crimes contra a administração da justiça",
    enunciado:
      "Sobre o crime de exploração de prestígio (art. 357 do CP), é correto afirmar que",
    alternativas: [
      "configura-se quando o agente solicita ou recebe vantagem a pretexto de influir em autoridade ou auxiliar da justiça, sem efetivamente possuir a influência alegada; se a influência for real e o pedido for feito em nome da autoridade, ambos respondem por corrupção passiva.",
      "exige que o agente efetivamente possua a influência alegada sobre a autoridade, distinguindo-se, por esse motivo, do crime de tráfico de influência, que pressupõe influência inexistente.",
      "só se consuma quando a autoridade sobre a qual se alega influência pratica o ato pretendido pelo solicitante, não bastando a mera solicitação ou recebimento da vantagem.",
      "admite como sujeito passivo exclusivamente o juiz, não abrangendo jurado, membro do Ministério Público, funcionário de justiça, perito, tradutor, intérprete ou testemunha.",
      "pressupõe que o pagamento seja feito diretamente à autoridade supostamente influenciável, sendo atípica a conduta quando o valor é entregue apenas ao intermediário que alega ter a influência sobre o juiz, o jurado ou o membro do Ministério Público mencionado.",
    ],
    correta: 0,
    explicacao:
      "No art. 357, o agente é um charlatão que alega influência que não possui — se a influência fosse real e o pedido feito em nome da autoridade, ambos responderiam por corrupção passiva. O crime se consuma com a mera solicitação ou recebimento, sem exigir ato da autoridade, e abrange como sujeito passivo juiz, jurado, MP, funcionário de justiça, perito, tradutor, intérprete ou testemunha.",
    origem: "banco",
    fonte: "Código Penal, art. 357",
  },
  {
    id: "pen-063",
    materia: "pen",
    topico: "Crimes contra a administração da justiça",
    enunciado:
      "Sobre o crime de fraude processual (art. 347 do CP), é correto afirmar que",
    alternativas: [
      "consiste em inovar artificiosamente o estado de lugar, de coisa ou de pessoa, na pendência de processo civil ou administrativo, com o fim de induzir a erro o juiz ou o perito, exigindo, portanto, que a inovação ocorra antes da decisão a ser influenciada.",
      "somente se configura quando a inovação artificiosa do estado de lugar, de coisa ou de pessoa ocorre na pendência de processo penal, e não de processo civil ou administrativo.",
      "dispensa qualquer finalidade específica do agente, bastando a mera alteração do local, da coisa ou da pessoa, ainda que não haja processo em curso no momento da conduta.",
      "exige que o juiz ou o perito tenham sido efetivamente induzidos a erro pela inovação artificiosa, sendo atípica a conduta se a fraude for descoberta antes de produzir qualquer efeito sobre a decisão a ser proferida no processo em curso.",
      "pode ser praticada em qualquer momento, inclusive após o trânsito em julgado da sentença, desde que a inovação vise à reforma da decisão em eventual ação rescisória.",
    ],
    correta: 0,
    explicacao:
      "O art. 347 exige expressamente a pendência de processo civil ou administrativo (não penal), o fim específico de induzir a erro o juiz ou o perito, e que a inovação ocorra antes da decisão a ser influenciada. É crime formal, que não exige o efetivo induzimento a erro.",
    origem: "banco",
    fonte: "Código Penal, art. 347",
  },
  {
    id: "pen-064",
    materia: "pen",
    topico: "Crimes contra as finanças públicas",
    enunciado:
      "Sobre o crime de contratação de operação de crédito (art. 359-A do CP), é correto afirmar que",
    alternativas: [
      "a conduta abrange tanto a operação de crédito interna quanto a externa realizada sem prévia autorização legislativa, incidindo na mesma pena quem ordena, autoriza ou realiza a operação com inobservância de limite, condição ou montante fixado em lei ou em resolução do Senado Federal.",
      "restringe-se às operações de crédito externas, não se aplicando a operações de crédito internas realizadas sem autorização legislativa prévia pelo gestor público.",
      "foi revogado pela Lei 14.133/2021 e deixou de ser crime, passando a figurar apenas como infração administrativa sujeita a sanções do Tribunal de Contas competente.",
      "pune apenas o agente público que ordena a operação de crédito, não se estendendo a quem meramente a autoriza ou efetivamente a realiza no caso concreto.",
      "exige que o montante da dívida consolidada ultrapasse o limite legal máximo, não bastando a ausência de prévia autorização legislativa para a configuração do crime, já que o caput do art. 359-A pressupõe sempre a presença cumulativa dos dois requisitos previstos no parágrafo único do dispositivo.",
    ],
    correta: 0,
    explicacao:
      "O art. 359-A abrange operação de crédito interna ou externa sem prévia autorização legislativa (caput), e o parágrafo único pune, com a mesma pena, quem desrespeita limite ou montante fixado em lei/resolução do Senado — hipóteses autônomas, não cumulativas.",
    origem: "banco",
    fonte: "Questão de treino do curso, adaptada (Código Penal, art. 359-A)",
  },
  {
    id: "pen-065",
    materia: "pen",
    topico: "Crimes em licitações e contratos administrativos (Lei 14.133/2021)",
    enunciado:
      "Sobre o crime de contratação direta ilegal (art. 337-E do CP), a jurisprudência do STJ exige, para sua configuração,",
    alternativas: [
      "a demonstração do dolo específico de causar dano ao erário e a efetiva ocorrência de prejuízo aos cofres públicos, não bastando a mera ausência de formalidades na contratação direta.",
      "apenas a demonstração objetiva de que a contratação ocorreu fora das hipóteses legais de dispensa ou inexigibilidade, independentemente de qualquer finalidade específica do agente.",
      "a comprovação de que o agente público obteve vantagem pessoal direta com a contratação irregular, ainda que não haja qualquer prejuízo aos cofres públicos envolvidos.",
      "unicamente a instauração de procedimento administrativo pelo Tribunal de Contas competente, sendo prescindível qualquer apuração do elemento subjetivo do agente contratante.",
      "a produção de laudo pericial contábil prévio, sem o qual a ação penal é considerada inepta por ausência de justa causa para o oferecimento da denúncia.",
    ],
    correta: 0,
    explicacao:
      "O STJ (AgRg no REsp 2085991) exige, para o art. 337-E, dolo específico de causar dano ao erário e prejuízo efetivo aos cofres públicos — é crime material, e a mera ausência de formalidades, sem esses elementos, não basta para a condenação.",
    origem: "banco",
    fonte: "Código Penal, art. 337-E (Lei 14.133/2021); STJ, AgRg no REsp 2085991/2023",
  },
  {
    id: "pen-066",
    materia: "pen",
    topico: "Crimes em licitações e contratos administrativos (Lei 14.133/2021)",
    enunciado:
      "Sobre o crime de frustração do caráter competitivo de licitação (art. 337-F do CP), conhecido como 'cartel em licitações', é correto afirmar que, segundo a Súmula 645 do STJ,",
    alternativas: [
      "trata-se de crime formal, cuja consumação prescinde da comprovação do prejuízo ao erário ou da efetiva obtenção de vantagem pelos agentes envolvidos no conluio.",
      "trata-se de crime material, que somente se consuma com a comprovação de prejuízo efetivo aos cofres públicos decorrente da fraude ao caráter competitivo do certame.",
      "exige a adjudicação efetiva do objeto licitado a uma das empresas participantes do conluio, sendo atípica a conduta se a licitação for anulada antes da assinatura do contrato.",
      "dispensa qualquer intuito de obter vantagem decorrente da adjudicação do objeto licitado, bastando a mera combinação de preços entre os licitantes concorrentes.",
      "somente se configura mediante prova documental do ajuste entre os licitantes, não sendo admissível a demonstração do conluio por meio de prova indiciária ou circunstancial.",
    ],
    correta: 0,
    explicacao:
      "A Súmula 645/STJ fixa que o crime de fraude à licitação é formal, e sua consumação prescinde da comprovação do prejuízo ou da obtenção de vantagem — dano ao erário é mero exaurimento, relevante só para a dosimetria.",
    origem: "banco",
    fonte: "Código Penal, art. 337-F (Lei 14.133/2021); Súmula 645 do STJ",
  },
  {
    id: "pen-067",
    materia: "pen",
    topico: "Crimes em licitações e contratos administrativos (Lei 14.133/2021)",
    enunciado:
      "Sobre o crime de afastamento de licitante (art. 337-K do CP), o STJ, no REsp 1839150, firmou entendimento de que",
    alternativas: [
      "a configuração do crime não exige que o agente tenha êxito em seu intento, sendo suficiente a mera tentativa de afastar o concorrente por fraude ou oferecimento de vantagem para a consumação do delito.",
      "o crime somente se consuma quando o licitante efetivamente desiste de participar do certame em razão da fraude, violência, grave ameaça ou vantagem oferecida pelo agente responsável.",
      "pune apenas quem oferece a vantagem ou emprega a violência, não havendo previsão legal para responsabilizar o licitante que aceita a vantagem e desiste de licitar.",
      "exige, para a configuração do delito, que o licitante afastado tenha efetivamente comprovado prejuízo financeiro concreto decorrente de sua retirada do certame.",
      "não admite a modalidade por grave ameaça, estando essa forma de coação já absorvida, nesse tipo penal, pelo crime autônomo de constrangimento ilegal.",
    ],
    correta: 0,
    explicacao:
      "O STJ (REsp 1839150) entende que a mera tentativa de afastar licitante por fraude ou oferecimento de vantagem já consuma o crime, não exigindo êxito. O parágrafo único do art. 337-K ainda pune, na mesma pena, o próprio licitante que se abstém ou desiste em razão da vantagem.",
    origem: "banco",
    fonte: "Código Penal, art. 337-K (Lei 14.133/2021); STJ, REsp 1839150",
  },
  {
    id: "pen-068",
    materia: "pen",
    topico: "Crimes em licitações e contratos administrativos (Lei 14.133/2021)",
    enunciado:
      "Sobre o crime de contratação inidônea (art. 337-M do CP), é correto afirmar que",
    alternativas: [
      "admitir à licitação empresa ou profissional declarado inidôneo configura o crime do caput, com pena de reclusão de um a três anos, enquanto celebrar contrato com o inidôneo configura o crime do §1º, mais grave, com pena de reclusão de três a seis anos.",
      "prevê a mesma pena para admitir empresa inidônea à licitação e para efetivamente celebrar contrato com ela, já que ambas as condutas causam idêntico risco à Administração Pública.",
      "só responde pelo crime o gestor público que admite a empresa inidônea à licitação, não havendo previsão legal para punir a própria empresa ou profissional que participa do certame apesar da sanção.",
      "exige que a declaração de inidoneidade tenha sido proferida por órgão do Poder Judiciário, não se aplicando quando a sanção decorrer de decisão do Tribunal de Contas ou de procedimento administrativo conduzido pelo próprio órgão contratante.",
      "deixa de se configurar se a empresa declarada inidônea obtiver, posteriormente, decisão judicial suspendendo os efeitos da sanção, ainda que a contratação tenha ocorrido antes dessa suspensão.",
    ],
    correta: 0,
    explicacao:
      "O art. 337-M pune, no caput, admitir à licitação empresa inidônea (reclusão de 1 a 3 anos) e, no §1º, celebrar contrato com ela (reclusão de 3 a 6 anos, mais grave). O §2º estende a mesma lógica à própria empresa/profissional que participa ou contrata apesar da sanção, que pode ser declarada por TCU ou procedimento administrativo (CEIS), não exigindo decisão judicial.",
    origem: "banco",
    fonte: "Código Penal, art. 337-M (Lei 14.133/2021)",
  },
];
