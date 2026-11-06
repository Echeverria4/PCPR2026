import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-b-14",
  resumo: {
    ideia:
      "A aula de revisão passa por todo o curso em forma de esquema. O resumo abaixo guarda os pontos que ligam uma aula à outra e os que mais se confundem.",
    itens: [
      {
        termo: "Princípios",
        faz: "Explícitos do art. 37: legalidade, impessoalidade, moralidade, publicidade e eficiência. Os implícitos completam a lista.",
      },
      {
        termo: "Entidades políticas e administrativas",
        faz: "União, estados, DF e municípios têm autonomia política. Autarquias e fundações só se autoadministram.",
      },
      {
        termo: "Terceiro setor",
        faz: "Fica fora da Administração. A OS firma contrato de gestão, e a OSCIP firma termo de parceria.",
        pista: "Sistema S também é paraestatal.",
      },
      {
        termo: "Poderes",
        faz: "Vinculado, discricionário, hierárquico, disciplinar, regulamentar e de polícia. Abuso se divide em excesso e desvio.",
      },
      {
        termo: "Atos",
        faz: "Competência, finalidade, forma, motivo e objeto. Mérito fica em motivo e objeto do ato discricionário.",
      },
      {
        termo: "Agentes",
        faz: "Concurso, acumulação, teto, estabilidade e os direitos e deveres da Lei 8.112.",
        pista: "Desvio de função dá as diferenças, nunca o cargo.",
      },
      {
        termo: "Licitações",
        faz: "Lei 14.133: fases, modalidades, critérios de julgamento e contratação direta.",
      },
      {
        termo: "Responsabilidade e controle",
        faz: "Estado paga sem culpa e cobra do agente com dolo ou culpa. A Administração, o Legislativo e o Judiciário controlam.",
      },
      {
        termo: "LAI",
        faz: "A publicidade é a regra, e o sigilo é a exceção.",
      },
    ],
    cuidado:
      "Nos esquemas de revisão, repare nos pares que se confundem: contrato de gestão x termo de parceria, autonomia x autoadministração.",
  },
  questoes: [
    {
      topico: "Terceiro setor",
      subassunto: "Sistema S",
      dificuldade: 5,
      raciocinio:
        "Dinheiro público exige contas. Natureza privada dispensa o concurso.",
      enunciado:
        "Uma entidade do Sistema S, mantida por contribuições compulsórias, abriu seleção de pessoal sem concurso público. O Ministério Público questiona a contratação e a prestação de contas. Segundo o STF e a CF, a entidade",
      alternativas: [
        "não precisa de concurso, mas presta contas ao TCU pelos recursos",
        "precisa de concurso, mas não presta contas ao TCU",
        "precisa de concurso e presta contas, pois integra a Administração indireta",
        "não precisa de concurso nem presta contas, pois é entidade privada",
        "só precisa de concurso para os cargos de direção da entidade",
      ],
      correta: 0,
      explicacao:
        "No Tema 569 (RE 789.874), o STF decidiu que os serviços sociais autônomos do Sistema S não precisam fazer concurso público. Como recebem contribuições compulsórias, prestam contas ao TCU pelos recursos.",
      explicacaoErradas:
        "“Precisa de concurso” contraria o Tema 569. “Integra a Administração indireta” é falso, pois a entidade é privada e paraestatal. “Nem presta contas” ignora a origem pública do dinheiro. “Cargos de direção” cria uma exceção sem base.",
      pegadinha:
        "Prestar contas ao TCU não torna a entidade parte da Administração.",
      conhecimento:
        "O art. 70, parágrafo único, da CF manda prestar contas quem utiliza ou administra dinheiro público, mesmo sendo pessoa privada.",
    },
    {
      topico: "Terceiro setor",
      subassunto: "OS e OSCIP",
      dificuldade: 4,
      raciocinio:
        "Cada qualificação tem o seu instrumento: guarde os dois pares.",
      enunciado:
        "Duas entidades privadas sem fins lucrativos querem firmar vínculo com a União: uma qualificada como OS, e a outra como OSCIP. Segundo as leis próprias,",
      alternativas: [
        "a OS firma termo de parceria, e a OSCIP firma contrato de gestão",
        "as duas firmam contrato de gestão e integram a Administração",
        "as duas firmam termo de parceria e dependem de licitação",
        "a OS firma contrato de gestão, e a OSCIP firma termo de parceria",
        "a OS firma convênio com concurso, e a OSCIP não firma vínculo",
      ],
      correta: 3,
      explicacao:
        "A Lei 9.637/1998 prevê o contrato de gestão para a OS. A Lei 9.790/1999 prevê o termo de parceria para a OSCIP. As duas ficam fora da Administração.",
      explicacaoErradas:
        "“A OS firma termo de parceria” inverte os instrumentos. “Integram a Administração” é falso, pois elas são do terceiro setor. “As duas firmam termo de parceria” esquece o contrato de gestão da OS. “Não firma vínculo” esvazia a OSCIP.",
      pegadinha:
        "Agência executiva também tem contrato de gestão, mas é entidade da Administração.",
      conhecimento:
        "Na ADI 1.923, o STF validou o modelo das OS, desde que a escolha e os contratos sigam procedimento público e impessoal.",
    },
    {
      topico: "Entidades políticas e administrativas",
      subassunto: "Autonomia x autoadministração",
      dificuldade: 4,
      raciocinio:
        "Quem faz as próprias leis tem autonomia política.",
      enunciado:
        "Uma autarquia federal e um município têm personalidade jurídica própria. A diferença central entre essas pessoas é que",
      alternativas: [
        "os dois têm autonomia política, e só muda a área em que cada um atua",
        "o município tem autonomia política, e a autarquia só se autoadministra",
        "a autarquia legisla sobre sua atividade, e o município só administra seus bens",
        "a autarquia integra a Administração direta da União",
        "o município é entidade paraestatal, ligada ao terceiro setor",
      ],
      correta: 1,
      explicacao:
        "O município é entidade política: legisla, se auto-organiza e tem governo próprio. A autarquia é entidade administrativa: só se autoadministra, nos limites da lei que a criou.",
      explicacaoErradas:
        "“Os dois têm autonomia política” iguala o que é diferente. “A autarquia legisla” inverte os papéis. “Administração direta” é falso, pois a autarquia é da indireta. “Paraestatal” descreve o terceiro setor, não o município.",
      pegadinha:
        "Personalidade jurídica própria todos têm: o que muda é a autonomia política.",
      conhecimento:
        "A autarquia nasce por lei e fica vinculada ao ente que a criou, sem hierarquia.",
    },
    {
      topico: "Responsabilidade e controle",
      subassunto: "Regresso e sucessores",
      dificuldade: 5,
      raciocinio:
        "A obrigação de reparar passa aos sucessores, mas com um teto.",
      enunciado:
        "Por culpa, um PRF danificou um veículo particular. A União pagou a indenização, e o servidor morreu antes da ação de regresso. Segundo a Lei 8.112, essa cobrança",
      alternativas: [
        "se extingue com a morte, pois a responsabilidade é pessoal",
        "segue contra os sucessores, que respondem com todo o patrimônio próprio",
        "segue só contra quem recebe pensão, sem nenhum limite de valor",
        "passa ao chefe que autorizou a viagem em que o dano ocorreu",
        "pode seguir contra os sucessores, até o limite da herança recebida",
      ],
      correta: 4,
      explicacao:
        "Pelo art. 122, § 2º, o servidor responde perante a Fazenda em ação regressiva. Pelo § 3º, a obrigação de reparar o dano se estende aos sucessores e contra eles será executada, até o limite do valor da herança recebida.",
      explicacaoErradas:
        "“Se extingue com a morte” confunde a reparação com a pena, que é pessoal. “Todo o patrimônio próprio” ignora o teto. “Quem recebe pensão” troca herança por benefício. “Chefe que autorizou” transfere a dívida sem base.",
      pegadinha:
        "A pena não passa da pessoa. A obrigação de reparar passa, com limite.",
      conhecimento:
        "O mesmo limite aparece no art. 5º, XLV, da CF, para a reparação do dano e o perdimento de bens.",
    },
    {
      topico: "Agentes",
      subassunto: "Desvio de função",
      dificuldade: 4,
      raciocinio:
        "O trabalho feito é pago, mas o cargo exige concurso.",
      enunciado:
        "Um técnico administrativo exerce, há 3 anos e por ordem da chefia, as funções de um cargo superior, de remuneração maior. Ele pede o reenquadramento no novo cargo e as diferenças de salário. Segundo o STJ e a CF, ele",
      alternativas: [
        "não tem direito a nada, pois o desvio de função é ilícito",
        "tem direito ao reenquadramento, pelo tempo já trabalhado",
        "tem direito às diferenças salariais, mas não ao novo cargo",
        "tem direito ao novo cargo e às diferenças, após 2 anos de exercício",
        "tem direito só a indenização por dano moral, paga pelo chefe",
      ],
      correta: 2,
      explicacao:
        "A Súmula 378 do STJ garante as diferenças salariais a quem teve o desvio de função reconhecido, para evitar enriquecimento sem causa do Estado. O cargo, porém, só vem por concurso (art. 37, II, da CF).",
      explicacaoErradas:
        "“Não tem direito a nada” deixaria o Estado lucrar com o trabalho. “Reenquadramento” e “novo cargo” contrariam o concurso público. “Dano moral pago pelo chefe” não é o que a súmula garante.",
      pegadinha:
        "Pagar a diferença não é o mesmo que dar o cargo.",
      conhecimento:
        "A SV 43 proíbe que o servidor passe, sem concurso, a cargo que não integra a carreira em que entrou.",
    },
    {
      topico: "Agentes",
      subassunto: "Art. 126-A da Lei 8.112",
      dificuldade: 5,
      raciocinio:
        "A lei protege quem comunica um crime, mesmo fora da linha do chefe.",
      enunciado:
        "No exercício do cargo, um servidor da PRF soube de crime que envolve o próprio chefe. Em vez de informar a ele, comunicou o fato a outra autoridade competente. O chefe quer puni-lo por quebra da hierarquia. Segundo a Lei 8.112,",
      alternativas: [
        "ele não pode ser responsabilizado, pois a lei protege essa comunicação",
        "ele só fica protegido se o crime for confirmado em sentença",
        "ele responde por quebra de hierarquia, por ter ido a outra autoridade",
        "ele responde, mas só na esfera administrativa",
        "ele só poderia falar com o chefe, pelo sigilo do cargo",
      ],
      correta: 0,
      explicacao:
        "O art. 126-A diz que nenhum servidor será responsabilizado civil, penal ou administrativamente por informar a autoridade superior ou, se houver suspeita de envolvimento dela, outra autoridade competente sobre crime ou improbidade de que tenha conhecimento.",
      explicacaoErradas:
        "“Confirmado em sentença” cria uma condição que a lei não traz. “Quebra de hierarquia” e “só na esfera administrativa” ignoram a proteção nas três esferas. “Só poderia falar com o chefe” desfaz a saída que o artigo criou.",
      pegadinha:
        "A saída existe justamente para quando o chefe é o suspeito.",
      conhecimento:
        "O art. 116, VI, manda levar irregularidades ao superior e, se ele estiver envolvido, a outra autoridade competente.",
    },
  ],
};
