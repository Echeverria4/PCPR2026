import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-02",
  resumo: {
    ideia:
      "Direitos fundamentais são os bens que a Constituição protege, e garantias são os instrumentos que os defendem. A aula mostra como esses direitos surgiram, quais são as suas características e até onde vão.",
    itens: [
      {
        termo: "1ª geração",
        faz: "Direitos civis e políticos. Valor: liberdade. O Estado, em regra, se abstém.",
      },
      {
        termo: "2ª geração",
        faz: "Direitos sociais, econômicos e culturais. Valor: igualdade. O Estado presta.",
      },
      {
        termo: "3ª geração",
        faz: "Direitos difusos e coletivos, como o meio ambiente. Valor: fraternidade.",
        pista: "Liberdade, igualdade, fraternidade: a ordem do lema francês.",
      },
      {
        termo: "Status de Jellinek",
        faz: "Passivo (obrigação), negativo (liberdade), positivo (exigir prestação) e ativo (participar do poder).",
      },
      {
        termo: "Relatividade",
        faz: "Nenhum direito é absoluto. No conflito, há harmonização, sem sacrificar um por inteiro.",
      },
      {
        termo: "Irrenunciabilidade",
        faz: "O titular não abre mão do direito, embora possa deixar de exercê-lo ou limitá-lo num caso concreto.",
      },
      {
        termo: "Limites dos limites",
        faz: "A lei pode restringir um direito, mas precisa preservar o núcleo essencial dele.",
      },
      {
        termo: "Eficácia vertical e horizontal",
        faz: "Vertical: entre Estado e pessoa. Horizontal: entre particulares.",
      },
      {
        termo: "Dupla dimensão",
        faz: "Subjetiva: direito que se exige do Estado. Objetiva: valor que se irradia por todo o ordenamento.",
      },
      {
        termo: "Titulares",
        faz: "Pessoas físicas, pessoas jurídicas e o próprio Estado. Estrangeiros também, residentes ou não.",
      },
    ],
    cuidado:
      "Direito de 1ª geração não significa só abstenção: proteger a propriedade, por exemplo, também pede atuação do Estado.",
  },
  questoes: [
    {
      topico: "Gerações dos direitos",
      subassunto: "Valor de cada geração",
      dificuldade: 4,
      raciocinio:
        "Siga o lema francês: liberdade, igualdade, fraternidade.",
      enunciado:
        "Um grupo de estudo classificou três direitos: o voto, o atendimento público de saúde e o meio ambiente equilibrado. Pela doutrina majoritária das gerações, esses direitos pertencem, nessa ordem, à",
      alternativas: [
        "2ª, à 1ª e à 3ª gerações, pois o voto é um direito social",
        "1ª, à 3ª e à 2ª gerações, pois a saúde é um direito difuso",
        "3ª, à 2ª e à 1ª gerações, numa escala do coletivo ao individual",
        "1ª, à 2ª e à 3ª gerações, seguindo liberdade, igualdade e fraternidade",
        "1ª, à 1ª e à 2ª gerações, pois o Estado só se abstém nos dois primeiros",
      ],
      correta: 3,
      explicacao:
        "O voto é direito político, de 1ª geração. A saúde é direito social, de 2ª geração. O meio ambiente é direito difuso, de 3ª geração.",
      explicacaoErradas:
        "“O voto é um direito social” erra, pois ele é político. “A saúde é um direito difuso” confunde prestação com interesse difuso. “Do coletivo ao individual” inverte a sequência histórica. “Só se abstém” ignora que a saúde exige prestação.",
      pegadinha:
        "Direitos políticos ficam com os civis, na 1ª geração, e não com os sociais.",
      conhecimento:
        "Parte da doutrina fala em 4ª geração, ligada à democracia e à informação, e em 5ª, ligada à paz.",
    },
    {
      topico: "Gerações dos direitos",
      subassunto: "Prestações nos direitos de 1ª geração",
      dificuldade: 5,
      raciocinio:
        "A regra é a abstenção, mas o direito ainda precisa de proteção.",
      enunciado:
        "Um candidato diz que direitos de 1ª geração só exigem que o Estado não interfira. Ao tratar da propriedade, porém, a doutrina lembra que o Estado também deve proteger esse direito contra agressões. Por isso, é certo afirmar que os direitos de 1ª geração",
      alternativas: [
        "deixam de ser liberdades quando exigem qualquer atuação do Estado",
        "são direitos de defesa, mas podem implicar prestações do Estado",
        "passam à 2ª geração sempre que o Estado precisa agir por eles",
        "são apenas normas programáticas, que dependem de lei para valer",
        "não geram dever algum ao poder público, nem o de proteção",
      ],
      correta: 1,
      explicacao:
        "Os direitos de 1ª geração são, em regra, liberdades negativas. Isso não exclui deveres de atuação: segurança, Judiciário e polícia existem também para proteger a propriedade e a liberdade.",
      explicacaoErradas:
        "“Deixam de ser liberdades” e “passam à 2ª geração” tratam a atuação do Estado como mudança de natureza, o que não ocorre. “Normas programáticas” é a marca de boa parte dos direitos de 2ª geração. “Nem o de proteção” contraria a própria ideia do enunciado.",
      pegadinha:
        "A geração se define pelo valor-fonte, e não pela existência de algum custo para o Estado.",
      conhecimento:
        "Os direitos de 2ª geração são, em sua maioria, normas programáticas e pedem políticas públicas.",
    },
    {
      topico: "Direitos e garantias",
      subassunto: "Diferença entre os dois",
      dificuldade: 4,
      raciocinio:
        "Pergunte: isto é o bem protegido ou a ferramenta que o protege?",
      enunciado:
        "A liberdade de locomoção e o habeas corpus aparecem no art. 5º da CF. Ao separar direitos de garantias, é certo dizer que",
      alternativas: [
        "os dois são garantias, pois estão no mesmo artigo da CF",
        "a liberdade é garantia, e o habeas corpus é o direito protegido",
        "os dois são direitos, pois a CF não faz distinção entre os termos",
        "só o habeas corpus é fundamental, por ser ação do cidadão",
        "a liberdade é o direito, e o habeas corpus é a garantia dela",
      ],
      correta: 4,
      explicacao:
        "Direitos são os bens protegidos, como vida, liberdade e propriedade. Garantias são instrumentos que protegem esses bens. O habeas corpus é uma garantia da liberdade de locomoção.",
      explicacaoErradas:
        "“Os dois são garantias” e “os dois são direitos” apagam a distinção que a doutrina faz, inclusive no título do capítulo. “A liberdade é garantia” inverte os papéis. “Só o habeas corpus é fundamental” deixa de fora o próprio direito.",
      pegadinha:
        "Estar no mesmo artigo não muda a natureza de cada um.",
      conhecimento:
        "Para Ruy Barbosa, as disposições declaratórias imprimem existência aos direitos, e as assecuratórias os defendem.",
    },
    {
      topico: "Direitos e garantias",
      subassunto: "Teoria dos status",
      dificuldade: 5,
      raciocinio:
        "Passivo obedece, negativo se livra, positivo exige, ativo participa.",
      enunciado:
        "Na teoria de Jellinek, quatro situações aparecem: um eleitor vota, um cidadão exige atendimento em hospital público, uma pessoa escolhe seu culto sem interferência, e um mesário é convocado à força. A sequência correta de status é",
      alternativas: [
        "ativo, positivo, negativo e passivo",
        "positivo, ativo, passivo e negativo",
        "ativo, negativo, positivo e passivo",
        "negativo, positivo, ativo e passivo",
        "passivo, positivo, negativo e ativo",
      ],
      correta: 0,
      explicacao:
        "Votar é participar do poder: status ativo. Exigir uma prestação do Estado é status positivo. Agir sem interferência é status negativo. Cumprir uma obrigação imposta pelo Estado é status passivo.",
      explicacaoErradas:
        "“Positivo, ativo” troca o voto com a prestação. “Ativo, negativo, positivo” troca a prestação com a liberdade. “Negativo, positivo, ativo” põe o voto no lugar errado. “Passivo” no início trata o voto como obrigação sujeita ao Estado, e não como participação.",
      pegadinha:
        "O nome “negativo” não é ruim: significa liberdade diante do Estado.",
      conhecimento:
        "A teoria serve de base à classificação trialista: direitos de defesa, a prestações e de participação.",
    },
    {
      topico: "Características",
      subassunto: "Relatividade e harmonização",
      dificuldade: 5,
      raciocinio:
        "Colisão de direitos não tem vencedor total.",
      enunciado:
        "Um jornal publicou dados da vida privada de um servidor em reportagem de interesse público. O servidor alega que a intimidade vale mais do que a liberdade de imprensa. Pela característica da relatividade, o juiz deve",
      alternativas: [
        "aplicar sempre a intimidade, por ser direito ligado à pessoa",
        "aplicar sempre a imprensa, pois a censura é vedada de forma absoluta",
        "harmonizar os dois direitos, sem sacrificar por inteiro um deles",
        "extinguir o processo, pois direito fundamental não entra em conflito",
        "pedir a edição de lei que estabeleça a hierarquia entre os direitos",
      ],
      correta: 2,
      explicacao:
        "Nenhum direito fundamental é absoluto. No conflito, aplica-se a concordância prática: o juiz pondera no caso concreto e reduz o menos possível cada direito.",
      explicacaoErradas:
        "“Aplicar sempre a intimidade” e “aplicar sempre a imprensa” criam uma hierarquia prévia que não existe. “Não entra em conflito” nega algo comum na prática. “Lei que estabeleça a hierarquia” contraria a unidade da Constituição.",
      pegadinha:
        "Ponderar não significa anular: os dois direitos seguem válidos depois do caso.",
      conhecimento:
        "A relatividade é a característica mais cobrada: até a vida admite a exceção da pena de morte em guerra declarada.",
    },
    {
      topico: "Características",
      subassunto: "Irrenunciabilidade e autolimitação",
      dificuldade: 5,
      raciocinio:
        "Não exercer é diferente de renunciar para sempre.",
      enunciado:
        "Uma pessoa aceita ser filmada 24 horas por dia em programa de TV, por três meses. Depois, um contrato tenta fazê-la abrir mão da intimidade para o resto da vida. Quanto à irrenunciabilidade dos direitos fundamentais,",
      alternativas: [
        "os dois atos são nulos, pois não se admite limitar nenhum exercício",
        "os dois atos valem, pois quem tem o direito pode dispor dele à vontade",
        "só o segundo vale, por ter sido feito em contrato escrito",
        "a limitação temporária é admitida, mas a renúncia definitiva não",
        "a intimidade fica fora dessa regra, por ser um direito patrimonial",
      ],
      correta: 3,
      explicacao:
        "O titular não pode dispor do direito, embora possa deixar de exercê-lo. Admite-se a autolimitação voluntária do exercício em caso concreto, como a exposição temporária em programa de TV.",
      explicacaoErradas:
        "“Não se admite limitar nenhum exercício” esquece a autolimitação. “Dispor dele à vontade” contraria a irrenunciabilidade. “Contrato escrito” não muda a regra. “Direito patrimonial” erra a natureza da intimidade.",
      pegadinha:
        "Autolimitação tem caso concreto e tempo. Renúncia pretende ser geral e definitiva.",
      conhecimento:
        "A doutrina cita ainda historicidade, universalidade, inalienabilidade e imprescritibilidade.",
    },
    {
      topico: "Limites e eficácia",
      subassunto: "Teorias interna e externa",
      dificuldade: 5,
      raciocinio:
        "A teoria externa olha primeiro o direito e depois a restrição que vem de fora.",
      enunciado:
        "Sobre os limites dos direitos fundamentais, a teoria que serve de base à ideia de “limites dos limites” entende que",
      alternativas: [
        "a teoria externa vê a restrição vinda de fora, e o núcleo é apurado no caso",
        "a teoria interna vê a restrição vinda de fora, e o núcleo depende do caso",
        "a teoria externa nega que exista qualquer núcleo essencial a ser protegido",
        "a teoria interna admite que a lei atinja por completo o núcleo do direito",
        "as duas teorias tratam o núcleo como algo que a lei pode eliminar",
      ],
      correta: 0,
      explicacao:
        "Para a teoria externa, ou relativa, os limites vêm de fatores externos ao direito, e o núcleo essencial é definido diante do caso concreto. A teoria dos limites dos limites incorpora esses pressupostos.",
      explicacaoErradas:
        "“A teoria interna vê a restrição vinda de fora” troca as teorias: nela o limite é interno ao direito, e o núcleo não depende do caso. “Nega que exista” erra, pois a externa protege o núcleo. “Atinja por completo” e “pode eliminar” contrariam as duas teorias.",
      pegadinha:
        "As duas teorias protegem o núcleo. Elas diferem em como ele é definido.",
      conhecimento:
        "A CF não prevê a teoria dos limites dos limites de forma expressa, mas o dever de proteger o núcleo é reconhecido como implícito.",
    },
    {
      topico: "Limites e eficácia",
      subassunto: "Eficácia horizontal",
      dificuldade: 5,
      raciocinio:
        "Direito fundamental também vale entre particulares.",
      enunciado:
        "Uma associação privada expulsou um sócio sem lhe dar direito de defesa. A diretoria alega que a CF só vincula o Estado. Segundo o STF,",
      alternativas: [
        "a associação decide livremente, por ser pessoa jurídica de direito privado",
        "só cabe indenização em dinheiro, nunca a anulação do ato da diretoria",
        "a defesa só seria exigível se a associação recebesse verbas públicas",
        "os direitos fundamentais se aplicam às relações entre particulares",
        "a CF só se aplica depois que o Congresso regular o caso das associações",
      ],
      correta: 3,
      explicacao:
        "A eficácia horizontal aplica os direitos fundamentais às relações privadas. No RE 201.819, o STF manteve a anulação da exclusão de sócio feita sem ampla defesa.",
      explicacaoErradas:
        "“Decide livremente” ignora a eficácia horizontal. “Só cabe indenização” limita a tutela sem base. “Verbas públicas” cria uma condição que não entrou na tese. “Depois que o Congresso regular” exigiria lei prévia, o que contraria o art. 5º, § 1º.",
      pegadinha:
        "Autonomia privada existe, mas não afasta o direito fundamental.",
      conhecimento:
        "A teoria da eficácia indireta exige a mediação de cláusulas gerais do direito privado. A direta dispensa essa mediação.",
    },
    {
      topico: "Limites e eficácia",
      subassunto: "Titulares",
      dificuldade: 4,
      raciocinio:
        "O art. 5º fala em residentes, mas a interpretação vai além.",
      enunciado:
        "Um turista estrangeiro, sem residência no Brasil, foi preso de modo ilegal numa viagem pela rodovia. A defesa estuda os direitos fundamentais do preso. Segundo a doutrina e o STF, ele",
      alternativas: [
        "só teria direitos fundamentais se morasse no país",
        "depende de autorização do consulado para buscar a Justiça",
        "é titular desses direitos e pode usar o habeas corpus",
        "tem direitos, mas o habeas corpus é exclusivo do brasileiro",
        "fica sujeito apenas às leis do seu país de origem",
      ],
      correta: 2,
      explicacao:
        "Embora o caput do art. 5º mencione estrangeiros residentes, a interpretação alcança também os não residentes em território nacional. O habeas corpus pode ser impetrado por qualquer pessoa.",
      explicacaoErradas:
        "“Se morasse no país” lê o caput ao pé da letra. “Autorização do consulado” cria uma barreira sem base. “Exclusivo do brasileiro” contraria a legitimidade universal do habeas corpus. “Leis do seu país” ignora a soberania e a lei brasileira.",
      pegadinha:
        "Alguns direitos têm titular específico: votar, por exemplo, não é para estrangeiro.",
      conhecimento:
        "Pessoas jurídicas e até o Estado são titulares de direitos compatíveis com a natureza deles.",
    },
    {
      topico: "Limites e eficácia",
      subassunto: "Direitos fora do art. 5º",
      dificuldade: 5,
      raciocinio:
        "O catálogo do art. 5º é aberto.",
      enunciado:
        "Uma emenda tenta abolir a anterioridade tributária, regra que está no art. 150 da CF. Alguém alega que a emenda vale, porque a regra não fica no art. 5º. Segundo o STF,",
      alternativas: [
        "a emenda vale, pois só o art. 5º tem proteção de cláusula pétrea",
        "a emenda vale, pois matéria tributária é tema próprio do Congresso",
        "a emenda só vale se houver referendo popular depois da promulgação",
        "a regra é garantia individual, então a emenda é inconstitucional",
        "a regra é protegida apenas para quem já pagou aquele tributo",
      ],
      correta: 3,
      explicacao:
        "Na ADI 939, o STF entendeu que a anterioridade tributária é garantia individual do contribuinte. O art. 5º, § 2º, mostra que o catálogo é aberto, e a proteção do art. 60, § 4º, IV, alcança direitos fora do art. 5º.",
      explicacaoErradas:
        "“Só o art. 5º” ignora o § 2º. “Tema próprio do Congresso” não vence a cláusula pétrea. “Referendo popular” não está no rito da emenda. “Quem já pagou” reduz uma garantia geral.",
      pegadinha:
        "A localização no texto não decide se o direito é fundamental.",
      conhecimento:
        "A doutrina reconhece direitos fundamentais espalhados pela CF, além dos previstos em tratados.",
    },
  ],
};
