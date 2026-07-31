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
      "Desde a alteração promovida pela Lei nº 13.964/2019 (Pacote Anticrime), a ação penal no crime de estelionato (art. 171, caput, do CP) passou a ser, em regra:",
    alternativas: [
      "Pública incondicionada, em qualquer hipótese",
      "Privada exclusiva",
      "Pública condicionada à representação do ofendido",
      "Popular",
      "Pública incondicionada apenas se a vítima for idosa",
    ],
    correta: 2,
    explicacao:
      "O art. 171, §5º, do CP, incluído pelo Pacote Anticrime, tornou a ação penal do estelionato, em regra, pública condicionada à representação da vítima, ressalvadas exceções (como quando a vítima é a Administração Pública, criança/adolescente ou pessoa com deficiência mental, ou nos casos de estelionato eletrônico contra idoso/vulnerável, que seguem regra diversa).",
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
      "O art. 28 da Lei 11.343/2006 (posse de drogas para consumo pessoal) não comina pena privativa de liberdade, prevendo apenas advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa de comparecimento a programa/curso — ao contrário do tráfico (art. 33), que prevê reclusão de 5 a 15 anos.",
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
    topico: "Feminicídio — qualificadora, e Lei Maria da Penha na prática",
    enunciado:
      "O feminicídio, incluído no Código Penal pela Lei 13.104/2015, é tecnicamente classificado como:",
    alternativas: [
      "Crime autônomo, distinto do homicídio, com tipo penal próprio no art. 121-A.",
      "Qualificadora do homicídio (art. 121, §2º-A), aplicável quando o crime é cometido contra mulher por razões da condição de sexo feminino.",
      "Causa de diminuição de pena aplicável ao homicídio simples.",
      "Contravenção penal, sujeita apenas a pena de multa.",
      "Circunstância atenuante, considerada apenas na dosimetria da pena.",
    ],
    correta: 1,
    explicacao:
      "O feminicídio é qualificadora do homicídio (art. 121, §2º-A, do CP), incluída pela Lei 13.104/2015, aplicável quando o crime é cometido contra mulher por razões da condição de sexo feminino — o que se configura em violência doméstica e familiar ou em menosprezo/discriminação à condição de mulher — e não um tipo penal autônomo, causa de diminuição, contravenção ou atenuante.",
    origem: "banco",
  },
  {
    id: "pen-022",
    materia: "pen",
    topico: "Feminicídio — qualificadora, e Lei Maria da Penha na prática",
    enunciado:
      "A Lei Maria da Penha (Lei 11.340/2006), no que diz respeito à criação de novos tipos penais, deve ser corretamente compreendida como uma lei que:",
    alternativas: [
      "Cria diversos tipos penais inéditos de violência doméstica, substituindo o Código Penal nessa matéria.",
      "Não tipifica crimes novos: cria mecanismos de proteção à mulher em situação de violência doméstica e familiar, como as medidas protetivas de urgência.",
      "Aplica-se exclusivamente a violência física, excluindo violência psicológica, sexual, patrimonial e moral.",
      "Somente pode ser aplicada mediante representação da vítima, em qualquer hipótese de violência.",
      "Revogou expressamente o crime de feminicídio, substituindo-o por medida protetiva.",
    ],
    correta: 1,
    explicacao:
      "A Lei Maria da Penha não tipifica crimes novos: cria mecanismos de proteção à mulher em situação de violência doméstica e familiar, como as medidas protetivas de urgência (afastamento do agressor do lar, proibição de aproximação e contato), os Juizados especializados, e reconhece cinco formas de violência (física, psicológica, sexual, patrimonial e moral) — indo muito além da violência física.",
    origem: "banco",
  },
  {
    id: "pen-023",
    materia: "pen",
    topico: "Crimes cibernéticos no Código Penal (invasão de dispositivo — art. 154-A)",
    enunciado:
      "O crime de invasão de dispositivo informático alheio, tipificado no art. 154-A do Código Penal pela Lei 12.737/2012 (\"Lei Carolina Dieckmann\"), exige, para sua caracterização:",
    alternativas: [
      "Que o dispositivo esteja necessariamente conectado à internet no momento da invasão.",
      "A violação indevida de mecanismo de segurança, com o fim de obter, adulterar ou destruir dados/informações sem autorização do titular, ou instalar vulnerabilidades para obter vantagem ilícita.",
      "Que a invasão resulte, obrigatoriamente, em prejuízo econômico comprovado à vítima.",
      "Autorização judicial prévia para sua investigação, mesmo em flagrante.",
      "Que o agente seja necessariamente funcionário da empresa proprietária do dispositivo.",
    ],
    correta: 1,
    explicacao:
      "O art. 154-A do CP tipifica a invasão de dispositivo informático alheio, conectado ou não à rede, mediante violação indevida de mecanismo de segurança, com o fim de obter, adulterar ou destruir dados/informações sem autorização do titular, ou instalar vulnerabilidades para obter vantagem ilícita — o prejuízo econômico é apenas causa de aumento de pena, não elemento essencial do tipo, e a conexão à internet não é requisito.",
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
];
