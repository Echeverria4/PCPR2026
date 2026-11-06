import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-b-01",
  resumo: {
    ideia:
      "Princípios são o filtro de toda a atuação administrativa: cinco estão escritos no art. 37 da Constituição e os outros decorrem do sistema, como supremacia, indisponibilidade, autotutela e motivação.",
    itens: [
      {
        termo: "Supremacia do interesse público",
        faz: "Sustenta as prerrogativas do Estado. Incide de forma direta quando ele age com poder de império e de forma indireta nos atos de gestão.",
        pista: "Toda prerrogativa precisa de base legal.",
      },
      {
        termo: "Indisponibilidade",
        faz: "O agente administra bem alheio: sem lei, não abre mão de crédito, multa ou patrimônio público.",
      },
      {
        termo: "Eficiência",
        faz: "Entrou no art. 37 pela EC 19/1998. Cobra resultado, mas sempre dentro da legalidade.",
      },
      {
        termo: "Moralidade",
        faz: "Exige honestidade e boa-fé. Ação popular por lesão à moralidade dispensa prova de prejuízo material.",
      },
      {
        termo: "Autotutela x tutela",
        faz: "Autotutela: a própria entidade revê seus atos. Tutela: a direta controla a indireta, sem hierarquia e nos limites da lei.",
      },
      {
        termo: "Motivação",
        faz: "Indica fatos e fundamentos jurídicos. Pode remeter a parecer anterior, que passa a integrar o ato.",
        pista: "É a chamada motivação aliunde.",
      },
      {
        termo: "Especialidade",
        faz: "A entidade da indireta só atua na finalidade fixada pela lei que a criou ou autorizou.",
      },
      {
        termo: "Restrições à legalidade",
        faz: "Medida provisória, estado de defesa e estado de sítio permitem medidas excepcionais, dentro da própria Constituição.",
      },
    ],
    cuidado:
      "Interesse primário é o da coletividade. O secundário é o do Estado como pessoa jurídica e só vale quando coincide com o primário.",
  },
  questoes: [
    {
      topico: "Eficiência",
      subassunto: "Eficiência e legalidade",
      dificuldade: 4,
      raciocinio: "Princípio novo não revoga princípio antigo: os dois se somam.",
      enunciado:
        "Para repor peças de viaturas, a chefia de uma superintendência regional propõe comprar direto de uma loja, fora de qualquer hipótese legal de contratação direta, porque o preço está bom e o prazo seria menor. À luz do princípio da eficiência, essa compra",
      alternativas: [
        "é válida, pois a eficiência, por ser o princípio mais recente do art. 37, prevalece sobre regras mais antigas",
        "é válida se a economia ficar provada depois, já que o bom resultado sana a falta do procedimento legal exigido",
        "é inválida, porque a eficiência se soma à legalidade e não a afasta",
        "é inválida, porque a eficiência só vale na prestação de serviços ao público",
        "depende só de parecer sobre o preço de mercado",
      ],
      correta: 2,
      explicacao:
        "A EC 19/1998 incluiu a eficiência no art. 37, mas ela convive com a legalidade. Buscar resultado não autoriza agir fora da lei.",
      explicacaoErradas:
        "“Prevalece sobre regras mais antigas” inventa uma hierarquia por idade, que não existe entre princípios. “Sana a falta do procedimento” confunde resultado com validade. “Só vale na prestação de serviços” restringe demais: a eficiência alcança também a organização e a gestão interna. “Parecer sobre o preço” não cria hipótese de contratação direta.",
      pegadinha: "Boa intenção e preço bom não substituem a base legal.",
      conhecimento:
        "A doutrina costuma dividir a eficiência em dois planos: o modo de atuar do agente e o modo de organizar a Administração.",
    },
    {
      topico: "Moralidade",
      subassunto: "Ação popular sem prejuízo material",
      dificuldade: 5,
      raciocinio: "Moralidade é bem protegido por si só, não só o dinheiro público.",
      enunciado:
        "Um cidadão ajuíza ação popular contra ato que favoreceu um grupo por motivos pessoais, em ofensa à moralidade administrativa. A defesa alega que o ato não gerou nenhum gasto para os cofres públicos. Segundo o STF, em repercussão geral,",
      alternativas: [
        "a ação é cabível, pois não se exige prova de prejuízo material ao erário",
        "a ação só prossegue se o autor apontar perda financeira, ainda que estimada",
        "a ação é incabível, pois a moralidade só pode ser defendida pelo Ministério Público em ação civil pública",
        "a ação é cabível apenas contra atos de agentes políticos, nunca contra os de servidores de carreira",
        "a ação depende de decisão anterior do Tribunal de Contas reconhecendo a imoralidade do ato questionado",
      ],
      correta: 0,
      explicacao:
        "No Tema 836, o STF fixou que a demonstração de prejuízo material aos cofres públicos não é condição para a ação popular. O art. 5º, LXXIII, da Constituição protege também a moralidade administrativa.",
      explicacaoErradas:
        "“Perda financeira, ainda que estimada” repete a tese rejeitada. “Só pode ser defendida pelo Ministério Público” contraria a legitimidade do cidadão. “Apenas contra atos de agentes políticos” cria limite que a Constituição não traz. “Decisão anterior do Tribunal de Contas” cria condição inexistente.",
      pegadinha: "Lesão à moralidade basta; não precisa haver rombo.",
      conhecimento:
        "Salvo comprovada má-fé, o autor da ação popular fica isento de custas e de ônus da sucumbência.",
    },
    {
      topico: "Tutela",
      subassunto: "Autotutela e tutela",
      dificuldade: 4,
      raciocinio: "Entre pessoas jurídicas distintas não há hierarquia, só vinculação.",
      enunciado:
        "Um ministro pretende reformar, por simples discordância, uma decisão de gestão interna de autarquia vinculada à sua pasta, sem previsão legal para isso. A pretensão",
      alternativas: [
        "é válida, porque a autarquia se subordina ao ministério como qualquer outro órgão da estrutura",
        "é válida, porque a autotutela alcança todos os atos da Administração Pública federal, direta ou indireta",
        "é válida se o dirigente da autarquia concordar",
        "não se sustenta, pois a tutela é finalística e fica nos limites da lei",
        "não se sustenta, pois a autarquia só responde ao Poder Judiciário e ao Tribunal de Contas da União",
      ],
      correta: 3,
      explicacao:
        "A tutela, ou controle finalístico, liga a direta à indireta sem hierarquia. Só existe nos casos e limites da lei. A autotutela é a revisão que a própria entidade faz dos seus atos.",
      explicacaoErradas:
        "“Se subordina ao ministério” trata a autarquia como órgão, e ela é pessoa jurídica própria. “Autotutela alcança todos os atos” confunde os dois institutos. “Se o dirigente concordar” troca a lei pela vontade das partes. “Só responde ao Poder Judiciário e ao Tribunal de Contas” nega a existência da tutela.",
      pegadinha: "Vinculação não é subordinação.",
      conhecimento:
        "Na esfera federal, a tutela também é chamada de supervisão ministerial.",
    },
    {
      topico: "Supremacia",
      subassunto: "Incidência direta e indireta",
      dificuldade: 5,
      raciocinio: "Procure onde o Estado impõe a vontade, em posição vertical.",
      enunciado:
        "A supremacia do interesse público incide de modo direto quando o Estado atua em posição vertical e de modo indireto nos atos de gestão. Das situações abaixo, a incidência direta aparece na",
      alternativas: [
        "locação de um imóvel particular para instalar um posto, contratada sem cláusula especial",
        "abertura de conta em banco público para receber valores de uma unidade administrativa",
        "compra de um veículo usado por entidade estatal, em negócio de direito privado",
        "emissão de cheque para pagar uma despesa regular",
        "requisição de um bem particular diante de iminente perigo público",
      ],
      correta: 4,
      explicacao:
        "A requisição é ato de império: o Estado impõe o uso do bem, com indenização posterior se houver dano (CF, art. 5º, XXV). Nos demais casos o Estado atua em posição próxima à do particular.",
      explicacaoErradas:
        "“Locação de um imóvel”, “abertura de conta”, “compra de um veículo usado” e “emissão de cheque” são atos de gestão ou de direito privado. Neles a supremacia só aparece de modo indireto, sem imposição unilateral ao particular.",
      pegadinha: "Presença do Estado no negócio não significa poder de império.",
      conhecimento:
        "Desapropriação, aplicação de penalidade e poder de polícia são outros exemplos de atuação vertical, sempre com base em lei.",
    },
    {
      topico: "Interesse público",
      subassunto: "Primário e secundário",
      dificuldade: 5,
      raciocinio: "Economizar para o caixa do Estado nem sempre é interesse público.",
      enunciado:
        "Certo ente reconhece internamente que deve uma indenização, mas decide protelar o pagamento por anos com recursos sabidamente sem fundamento, só para preservar o caixa. Na distinção entre interesse primário e secundário, essa conduta",
      alternativas: [
        "realiza o interesse primário, porque toda economia de recursos beneficia a coletividade",
        "expressa um interesse secundário que não prevalece sobre o primário",
        "é protegida pela indisponibilidade, que proíbe pagar qualquer dívida sem sentença judicial transitada em julgado",
        "é irrelevante para o direito, pois interesse do Estado e interesse público são expressões sinônimas",
        "só seria ilegítima se fosse praticada por entidade da Administração indireta",
      ],
      correta: 1,
      explicacao:
        "Interesse primário é o da coletividade. O secundário é o do Estado como pessoa jurídica, como poupar dinheiro. Ele só é legítimo quando coincide com o primário, o que não ocorre ao fugir de dívida reconhecida.",
      explicacaoErradas:
        "“Toda economia de recursos” reduz o interesse público ao caixa. “Proíbe pagar qualquer dívida” distorce a indisponibilidade. “Expressões sinônimas” apaga justamente a distinção. “Administração indireta” traz um limite sem fundamento: a regra vale para toda a Administração.",
      pegadinha: "O interesse do Estado como pessoa jurídica não se confunde com o interesse público.",
      conhecimento:
        "A distinção foi difundida no Brasil a partir da doutrina italiana, com destaque para a obra de Renato Alessi.",
    },
    {
      topico: "Indisponibilidade",
      subassunto: "Disposição de crédito público",
      dificuldade: 4,
      raciocinio: "Quem administra bem alheio precisa de autorização de quem é o dono: a lei.",
      enunciado:
        "Comovido com a situação financeira de um ex-servidor que deve valores à União, um chefe de setor decide perdoar o débito por despacho, sem lei que preveja o perdão. O despacho ofende, de modo mais direto, a",
      alternativas: [
        "especialidade, porque só a autarquia credora poderia decidir sobre a dívida",
        "autotutela, porque a dívida deveria ser cobrada pelo próprio devedor",
        "publicidade",
        "indisponibilidade do interesse público",
        "continuidade do serviço público, porque a cobrança não pode parar, mesmo em casos de comprovada dificuldade",
      ],
      correta: 3,
      explicacao:
        "O agente não é dono do crédito público. Renúncia, perdão ou transação só cabem com autorização legal.",
      explicacaoErradas:
        "“Especialidade” trata da finalidade das entidades da indireta. “Autotutela” é revisão dos próprios atos, e o devedor não cobra a si mesmo. “Publicidade” não é o centro do problema, pois o vício existiria mesmo com o ato publicado. “Continuidade” se refere à prestação de serviços públicos.",
      pegadinha: "Motivo humanitário não supre a falta de lei.",
      conhecimento:
        "A indisponibilidade é a contraface da supremacia: as prerrogativas vêm junto com sujeições.",
    },
    {
      topico: "Motivação",
      subassunto: "Motivação aliunde",
      dificuldade: 4,
      raciocinio: "A Lei 9.784 permite remeter a outro documento do processo.",
      enunciado:
        "Ao decidir um recurso, a autoridade federal escreve apenas “acolho, pelos seus fundamentos, o parecer de fls. 40”. O parecer é completo e analisa os fatos e o direito aplicável. Pela Lei 9.784/1999, a decisão",
      alternativas: [
        "é nula, porque cada decisão precisa repetir por inteiro os seus próprios fundamentos, sem remissão",
        "é válida, e o parecer passa a integrar o ato",
        "é válida só se o parecer tiver sido publicado antes, separadamente, no Diário Oficial da União",
        "é nula, porque a concordância com parecer só cabe em decisões de órgãos colegiados",
        "é válida, porque decisão de recurso dispensa motivação",
      ],
      correta: 1,
      explicacao:
        "O art. 50, § 1º, admite que a motivação consista em concordância com pareceres, informações, decisões ou propostas anteriores, que passam a fazer parte do ato. É a motivação aliunde.",
      explicacaoErradas:
        "“Repetir por inteiro” exige o que a lei dispensa. “Publicado antes” cria requisito inexistente. “Órgãos colegiados” é uma restrição sem base: o § 3º do art. 50 apenas trata da forma de registrar decisões colegiadas e orais. “Dispensa motivação” contraria o art. 50, V.",
      pegadinha: "Motivação aliunde é motivação; o ato não fica sem motivo.",
      conhecimento:
        "Em decisões repetitivas, a lei admite meio mecânico que reproduza os fundamentos, sem prejuízo das garantias dos interessados.",
    },
    {
      topico: "Especialidade",
      subassunto: "Finalidade da entidade",
      dificuldade: 4,
      raciocinio: "Entidade da indireta é criada para um fim certo, definido em lei.",
      enunciado:
        "Autarquia federal criada por lei para pesquisa agropecuária aprova resolução interna pela qual passa a prestar serviço de saúde à população, atividade estranha à sua lei de criação. A resolução ofende o princípio da",
      alternativas: [
        "autotutela, porque a autarquia só pode rever os atos do ministério ao qual está vinculada",
        "impessoalidade, porque qualquer ampliação de atividade favorece pessoas determinadas",
        "continuidade",
        "hierarquia, porque só o ministro pode mudar as atividades administrativas da entidade vinculada",
        "especialidade, porque a finalidade é a fixada em lei",
      ],
      correta: 4,
      explicacao:
        "Pela especialidade, a entidade só persegue o fim definido na lei que a criou ou autorizou. Mudar esse fim exige lei, não resolução.",
      explicacaoErradas:
        "“Rever os atos do ministério” inverte a autotutela. “Favorece pessoas determinadas” não decorre da mudança de atividade. “Continuidade” trata de não interromper serviços. “Só o ministro pode mudar” também está errado: nem ele poderia mudar a finalidade sem lei.",
      pegadinha: "Ato interno não amplia a finalidade legal.",
      conhecimento:
        "A especialidade é estudada sobretudo em relação à Administração indireta, mas alguns autores a estendem aos órgãos.",
    },
    {
      topico: "Legalidade",
      subassunto: "Restrições excepcionais",
      dificuldade: 5,
      raciocinio: "Só a própria Constituição pode abrir exceções à legalidade comum.",
      enunciado:
        "Parte da doutrina aponta situações em que a legalidade sofre restrição excepcional, prevista na própria Constituição, porque a medida produz efeitos antes de haver lei em sentido formal ou com suspensão de garantias. São exemplos dessas situações",
      alternativas: [
        "medida provisória, estado de defesa e estado de sítio",
        "decreto regulamentar, portaria ministerial e instrução normativa",
        "lei delegada, lei complementar e emenda à Constituição",
        "intervenção de ministro em autarquia, requisição de servidor e avocação de competência",
        "súmula administrativa, parecer normativo e resolução de agência reguladora",
      ],
      correta: 0,
      explicacao:
        "A medida provisória tem força de lei antes da aprovação. Estado de defesa e estado de sítio admitem restrições a direitos dentro dos limites constitucionais.",
      explicacaoErradas:
        "“Decreto regulamentar” e “súmula administrativa” ficam abaixo da lei e dela dependem. “Lei delegada” e “emenda” são espécies do processo legislativo, e não restrições à legalidade. “Intervenção de ministro” não é figura constitucional nesse sentido.",
      pegadinha: "Ato infralegal nunca é exceção à legalidade; está sujeito a ela.",
      conhecimento:
        "No estado de sítio, a decretação depende de autorização prévia do Congresso. No de defesa, a apreciação pelo Congresso vem depois.",
    },
  ],
};
