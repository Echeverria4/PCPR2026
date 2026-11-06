import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-b-12",
  resumo: {
    ideia:
      "Controlar é conferir se a Administração age dentro da lei. Ela controla a si mesma, o Legislativo a controla com olhar político e financeiro, e o Judiciário confere a legalidade quando provocado.",
    itens: [
      {
        termo: "Administrativo",
        faz: "A própria Administração revê seus atos, por hierarquia ou por supervisão das entidades. Olha legalidade e mérito.",
        pista: "Age de ofício ou a pedido.",
      },
      {
        termo: "Recursos",
        faz: "Reconsideração vai à mesma autoridade. Hierárquico próprio vai ao superior. Hierárquico impróprio vai a órgão fora da hierarquia e depende de lei.",
      },
      {
        termo: "Legislativo político",
        faz: "O Congresso pode questionar até o mérito, sem revogar o ato do Executivo. Usa convocação de Ministro e pedidos de informação.",
      },
      {
        termo: "CPI",
        faz: "Pede 1/3 dos membros, fato determinado e prazo certo. Investiga e manda as conclusões ao Ministério Público.",
        pista: "Apura, mas não condena.",
      },
      {
        termo: "Tribunal de Contas",
        faz: "Auxilia o Legislativo no controle financeiro. Suas decisões de débito ou multa valem como título executivo.",
      },
      {
        termo: "Judicial",
        faz: "Confere legalidade dos atos administrativos de todos os Poderes, sem entrar no mérito do ato válido.",
      },
      {
        termo: "Inafastabilidade",
        faz: "Lesão ou ameaça a direito chega ao Judiciário, sem esgotar a via administrativa, salvo exceções.",
        pista: "O ato político também não escapa se ferir direito.",
      },
      {
        termo: "Mandado de segurança",
        faz: "Protege direito líquido e certo em 120 dias. Pode ser preventivo, mas não serve para cobrar valores do passado.",
      },
    ],
    cuidado:
      "Questionar o mérito não é revogar: quem revoga um ato é a própria Administração que o editou.",
  },
  questoes: [
    {
      topico: "Administrativo",
      subassunto: "Recurso hierárquico impróprio",
      dificuldade: 4,
      raciocinio:
        "Autarquia é vinculada ao Ministério, não subordinada a ele.",
      enunciado:
        "O dirigente de uma autarquia federal negou o pedido de uma empresa, que agora quer recorrer ao Ministério ao qual a autarquia está vinculada. Esse recurso",
      alternativas: [
        "é hierárquico impróprio e só cabe se houver previsão legal expressa",
        "é hierárquico próprio e cabe mesmo sem previsão legal",
        "é pedido de reconsideração, dirigido à própria autoridade que decidiu",
        "é vedado, pois a autarquia não tem nenhuma ligação com o Ministério",
        "é hierárquico impróprio e depende de depósito prévio de 30%",
      ],
      correta: 0,
      explicacao:
        "Não há hierarquia entre a autarquia e o Ministério, só vinculação. Por isso o recurso é impróprio, e ele só existe quando a lei o prevê de forma expressa.",
      explicacaoErradas:
        "“Hierárquico próprio” pressupõe hierarquia, que não há. “Reconsideração” vai à mesma autoridade, e não ao Ministério. “Nenhuma ligação” ignora a vinculação. “Depósito prévio” é exigência inconstitucional (SV 21).",
      pegadinha:
        "O próprio dispensa previsão expressa. O impróprio depende dela.",
      conhecimento:
        "O recurso hierárquico próprio decorre da própria hierarquia, por isso cabe mesmo sem lei específica.",
    },
    {
      topico: "Legislativo político",
      subassunto: "Mérito do ato",
      dificuldade: 5,
      raciocinio:
        "Controle político pode olhar a conveniência, mas o ato segue sendo do Executivo.",
      enunciado:
        "Uma comissão do Congresso concluiu que um ato discricionário do Executivo, embora legal, foi inconveniente para o país. Quanto ao controle político sobre esse ato, a comissão",
      alternativas: [
        "não pode examinar o mérito, pois ele cabe só à Administração",
        "pode revogar o ato, pois o controle legislativo alcança o mérito",
        "pode questionar o mérito, mas não tem poder de revogar o ato",
        "só pode agir se for provocada por quem foi atingido pelo ato",
        "pode anular o ato por inconveniência e avisar o Tribunal de Contas",
      ],
      correta: 2,
      explicacao:
        "O controle legislativo é político e pode discutir a conveniência da decisão, por isso vai além da legalidade. Mesmo assim, a revogação de um ato cabe à Administração que o editou. O Legislativo age de ofício.",
      explicacaoErradas:
        "“Não pode examinar” descreve o limite do Judiciário, não o do Legislativo. “Pode revogar” dá ao Legislativo um poder que ele não tem. “Só pode agir se for provocada” ignora a atuação de ofício. “Anular por inconveniência” confunde anulação, que é por ilegalidade, com revogação.",
      pegadinha:
        "Quem controla o mérito não precisa ser quem revoga.",
      conhecimento:
        "O Judiciário faz o contrário: não questiona o mérito do ato válido, mas pode anular o ato ilegal.",
    },
    {
      topico: "CPI",
      subassunto: "Requisitos",
      dificuldade: 4,
      raciocinio:
        "São três requisitos no art. 58, § 3º.",
      enunciado:
        "Deputados querem investigar contratos de manutenção de rodovias federais por meio de uma CPI na Câmara. Para a criação dessa comissão, a CF exige",
      alternativas: [
        "aprovação da maioria absoluta do Plenário e fato determinado",
        "requerimento de 1/3 dos membros, sem prazo até o fim da apuração",
        "requerimento de 1/2 dos membros, fato certo e prazo de 120 dias",
        "requerimento de 1/3 dos membros, fato determinado e prazo certo",
        "requerimento de 1/3 dos membros e denúncia do Ministério Público",
      ],
      correta: 3,
      explicacao:
        "O art. 58, § 3º, pede requerimento de um terço dos membros, apuração de fato determinado e prazo certo. As conclusões, se for o caso, vão ao Ministério Público.",
      explicacaoErradas:
        "“Maioria absoluta do Plenário” não é exigida, pois a CPI nasce do requerimento da minoria. “Sem prazo” contraria o prazo certo. “1/2 dos membros” muda a fração. “Denúncia do Ministério Público” inverte a ordem: as conclusões é que seguem para ele.",
      pegadinha:
        "A CPI protege a minoria: um terço basta, sem voto da maioria.",
      conhecimento:
        "A CPI tem poderes de investigação próprios de autoridade judicial, mas não condena ninguém.",
    },
    {
      topico: "Legislativo político",
      subassunto: "Convocação de Ministro",
      dificuldade: 5,
      raciocinio:
        "O art. 50 fala em cada Casa e em qualquer de suas Comissões.",
      enunciado:
        "Uma comissão do Senado convocou o Ministro da Justiça para prestar informações, em pessoa, sobre assunto já definido, e ele faltou sem justificativa. Segundo a CF, essa ausência",
      alternativas: [
        "não gera sanção, porque só o Plenário pode convocar Ministro",
        "importa crime de responsabilidade, mesmo com a convocação por comissão",
        "só gera crime de responsabilidade se for a segunda falta seguida",
        "gera apenas multa, aplicada pelo Tribunal de Contas da União",
        "importa crime comum de desobediência, julgado pelo Supremo Tribunal Federal",
      ],
      correta: 1,
      explicacao:
        "Pelo art. 50 da CF, a Câmara, o Senado ou qualquer de suas Comissões podem convocar Ministro de Estado para prestar informações, em pessoa, sobre assunto previamente determinado. A ausência sem justificação adequada importa crime de responsabilidade.",
      explicacaoErradas:
        "“Só o Plenário” ignora as Comissões. “Segunda falta” cria uma condição inexistente. “Apenas multa” não é a sanção prevista. “Crime comum de desobediência” troca a natureza do crime.",
      pegadinha:
        "A convocação por comissão tem o mesmo peso da feita pela Casa.",
      conhecimento:
        "O § 2º do art. 50 trata dos pedidos escritos: recusa, atraso de 30 dias ou informação falsa também são crime de responsabilidade.",
    },
    {
      topico: "Tribunal de Contas",
      subassunto: "Execução da multa",
      dificuldade: 5,
      raciocinio:
        "O dinheiro segue para quem sofreu o dano ao erário.",
      enunciado:
        "O Tribunal de Contas de um estado multou um ex-prefeito por dano ao erário municipal. A decisão vale como título executivo. Segundo o STF, a execução desse crédito cabe",
      alternativas: [
        "ao próprio Tribunal de Contas, por sua procuradoria",
        "ao Ministério Público que atua junto ao Tribunal",
        "ao estado a que pertence o Tribunal de Contas",
        "à União, pelo interesse nacional no controle",
        "somente ao município que sofreu o dano ao erário",
      ],
      correta: 4,
      explicacao:
        "No Tema 642 (RE 1.003.433), o STF fixou que o município prejudicado é o legitimado para executar a multa aplicada por Tribunal de Contas estadual a agente municipal, por dano ao erário municipal.",
      explicacaoErradas:
        "“Próprio Tribunal” e “Ministério Público” não executam suas decisões: isso cabe ao ente credor. “Estado” não sofreu o dano. “União” não tem relação com esse crédito.",
      pegadinha:
        "O tribunal é estadual, mas o crédito é do município lesado.",
      conhecimento:
        "O art. 71, § 3º, da CF dá eficácia de título executivo às decisões que imputem débito ou multa.",
    },
    {
      topico: "Mandado de segurança",
      subassunto: "Valores do passado",
      dificuldade: 4,
      raciocinio:
        "O mandado de segurança olha para a frente a partir da impetração.",
      enunciado:
        "Um servidor impetrou mandado de segurança contra o corte ilegal de uma gratificação e pediu também os valores de 3 anos antes da impetração. O juiz concedeu a ordem. Quanto a esses valores,",
      alternativas: [
        "o MS não substitui a ação de cobrança, e o passado segue por outra via",
        "o MS alcança todo o período, porque a ilegalidade é a mesma",
        "o MS paga até 5 anos antes da impetração, pela regra da prescrição",
        "a ordem não alcança nem as parcelas vencidas depois da impetração",
        "os valores antigos ficam perdidos, pois o MS encerra o direito de cobrá-los",
      ],
      correta: 0,
      explicacao:
        "A Súmula 269 do STF diz que o mandado de segurança não substitui a ação de cobrança. A Súmula 271 diz que ele não produz efeitos patrimoniais sobre período anterior, que deve ser buscado na via administrativa ou em ação própria.",
      explicacaoErradas:
        "“Todo o período” e “até 5 anos” ignoram a Súmula 271. “Nem as parcelas após a impetração” exagera, pois essas parcelas são alcançadas. “Ficam perdidos” também é falso: os valores seguem cobráveis por outra via.",
      pegadinha:
        "Não cobrar pelo mandado não quer dizer perder o direito.",
      conhecimento:
        "O prazo para impetrar é de 120 dias (art. 23 da Lei 12.016/2009).",
    },
    {
      topico: "Inafastabilidade",
      subassunto: "Exceção à via direta",
      dificuldade: 5,
      raciocinio:
        "Lembre da ação que só existe depois de uma negativa da autoridade.",
      enunciado:
        "Em regra, quem se sente lesado pela Administração vai ao Judiciário sem esgotar a via administrativa. Entre as medidas abaixo, a que depende de recusa prévia da autoridade é",
      alternativas: [
        "a indenização pelo dano em uma viatura",
        "a ação civil pública por dano ambiental na rodovia",
        "a ação popular contra contrato lesivo ao patrimônio público",
        "o habeas data, que pressupõe a recusa de dar a informação",
        "a anulatória de multa de trânsito já aplicada",
      ],
      correta: 3,
      explicacao:
        "A Súmula 2 do STJ diz que não cabe habeas data se não houve recusa de informações pela autoridade administrativa. Sem a negativa, falta interesse de agir.",
      explicacaoErradas:
        "“Indenização” e “anulatória de multa” seguem a regra do acesso direto. “Ação civil pública” e “ação popular” também não dependem de pedido prévio à Administração.",
      pegadinha:
        "A exceção não nega o acesso ao Judiciário: ela só exige uma recusa antes.",
      conhecimento:
        "Outras exceções lembradas pela doutrina: justiça desportiva (art. 217, § 1º, da CF), reclamação contra súmula vinculante e, em regra, benefício do INSS (Tema 350).",
    },
    {
      topico: "Judicial",
      subassunto: "Alcance do controle",
      dificuldade: 4,
      raciocinio:
        "O art. 5º, XXXV, não abre exceção pelo Poder nem pelo nome do ato.",
      enunciado:
        "Um servidor de um tribunal foi punido por ato do presidente da própria Corte, e um grupo de cidadãos teve direito individual lesado por um ato político do Presidente da República. Sobre o controle judicial desses atos,",
      alternativas: [
        "só o primeiro cabe, pois ato político é imune ao Judiciário",
        "só o segundo cabe, pois tribunal não pratica ato administrativo",
        "os dois cabem, pois nenhuma lesão a direito escapa do Judiciário",
        "nenhum cabe, porque cada Poder controla só a si",
        "os dois cabem, mas só depois de esgotar toda a via administrativa",
      ],
      correta: 2,
      explicacao:
        "O Brasil adota a jurisdição única, e o Judiciário controla atos administrativos de todos os Poderes, incluídos os dele. O ato político também não fica de fora se ferir direito, pelo art. 5º, XXXV.",
      explicacaoErradas:
        "“Imune ao Judiciário” ignora o art. 5º, XXXV. “Não pratica ato administrativo” esquece a função atípica dos tribunais. “Só a si” nega o sistema de freios. “Esgotar toda a via” cria condição que, em regra, não existe.",
      pegadinha:
        "O nome “ato político” não impede o controle quando há lesão a direito.",
      conhecimento:
        "O Judiciário confere a legalidade, sem trocar a decisão de mérito pela sua.",
    },
  ],
};
