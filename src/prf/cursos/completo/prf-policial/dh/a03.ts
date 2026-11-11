import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "dh-03",
  resumo: {
    ideia:
      "Tratado de direitos humanos só obriga o Brasil internamente depois de assinado, aprovado pelo Congresso, ratificado e promulgado. Depois disso, vale acima das leis (supralegal) ou, se aprovado pelo rito do art. 5º, § 3º, como emenda constitucional, e serve de parâmetro para o controle de convencionalidade.",
    itens: [
      {
        termo: "Tratado",
        faz: "Acordo internacional escrito entre Estados (ou organizações internacionais), regido pelo Direito Internacional, qualquer que seja o nome. As regras gerais estão na Convenção de Viena sobre o Direito dos Tratados (1969), promulgada no Brasil pelo Decreto 7.030/2009.",
      },
      {
        termo: "Aplicação no tempo e no espaço",
        faz: "Em regra o tratado não alcança fatos anteriores à sua vigência (art. 28), salvo intenção diferente que dele se evidencie. Obriga cada parte em todo o seu território (art. 29).",
      },
      {
        termo: "Tratados sucessivos",
        faz: "Mesmas partes nos dois: o anterior só vale no que for compatível com o posterior. Partes diferentes: entre um Estado que está nos dois e outro que está só em um, vale o tratado de que ambos são partes (art. 30).",
      },
      {
        termo: "Interpretação",
        faz: "De boa-fé, pelo sentido comum dos termos, no contexto (texto, preâmbulo e anexos) e à luz do objeto e da finalidade (art. 31). Meios suplementares: trabalhos preparatórios e circunstâncias da conclusão, quando o sentido fica ambíguo ou absurdo (art. 32).",
        pista: "Em várias línguas autênticas, todas fazem igualmente fé, salvo previsão de uma prevalecer (art. 33).",
      },
      {
        termo: "Pro homine",
        faz: "Entre normas de direitos humanos, aplica-se a mais favorável à pessoa: a que amplia o direito ou admite menos restrições.",
      },
      {
        termo: "Incorporação",
        faz: "1) Assinatura pelo Presidente (art. 84, VIII, competência privativa). 2) Aprovação pelo Congresso por decreto legislativo (art. 49, I). 3) Ratificação e depósito: obriga no plano internacional. 4) Promulgação por decreto presidencial: dá execução interna.",
        pista: "Duas vontades: Executivo e Legislativo.",
      },
      {
        termo: "Hierarquia (duplo estatuto)",
        faz: "Tratado de direitos humanos aprovado pelo rito comum é supralegal: abaixo da Constituição, acima das leis (STF, RE 466.343). Aprovado em cada Casa, em dois turnos, por três quintos, equivale a emenda (§ 3º). Os demais tratados valem como lei ordinária.",
      },
      {
        termo: "Depositário infiel",
        faz: "A Convenção Americana só admite prisão civil por dívida alimentar. Por ser supralegal, paralisa as leis que permitiam a prisão do depositário: Súmula Vinculante 25.",
      },
      {
        termo: "Tratados com força de emenda",
        faz: "Convenção sobre os Direitos das Pessoas com Deficiência e seu Protocolo Facultativo (Decreto 6.949/2009), Tratado de Marraqueche (Decreto 9.522/2018) e Convenção Interamericana contra o Racismo (Decreto 10.932/2022).",
      },
      {
        termo: "Convenções da OIT",
        faz: "Direitos do trabalho são direitos humanos: pelo rito comum, as convenções ficam supralegais; pelo rito do § 3º, equivalem a emenda.",
      },
      {
        termo: "Controle de convencionalidade",
        faz: "Compatibilizar o direito interno com os tratados de direitos humanos. Internacional: pelas cortes internacionais, de forma subsidiária. Difuso: qualquer juiz, até de ofício, com qualquer tratado de direitos humanos. Concentrado: no STF, segundo a doutrina, só com os tratados do § 3º.",
      },
    ],
    cuidado:
      "O § 2º do art. 5º (catálogo aberto aos tratados) é texto original de 1988; a EC 45/2004 trouxe o § 3º. E a corte do sistema regional é a Corte Interamericana de Direitos Humanos.",
  },
  questoes: [
    {
      topico: "Tratados Internacionais",
      subassunto: "Aplicação no tempo",
      dificuldade: 4,
      raciocinio: "Viena, art. 28: irretroatividade, salvo intenção diferente.",
      enunciado:
        "Pela Convenção de Viena sobre o Direito dos Tratados, um tratado de direitos humanos que entra em vigor para o Brasil, em regra:",
      alternativas: [
        "alcança todos os fatos anteriores, por ser norma de proteção da pessoa",
        "não obriga a parte quanto a fatos anteriores à sua vigência, salvo intenção diferente que dele se evidencie",
        "só vale para os fatos anteriores, para reparar violações já ocorridas no país",
        "alcança os fatos anteriores só se o Congresso aprovar por três quintos em dois turnos, em cada Casa, o texto do tratado",
        "só passa a valer cinco anos depois do depósito, para permitir a adaptação do país",
      ],
      correta: 1,
      explicacao:
        "Pelo art. 28 da Convenção de Viena, salvo intenção diferente que se evidencie do tratado, suas disposições não obrigam a parte quanto a ato ou fato anterior à sua entrada em vigor. A regra é a irretroatividade.",
      explicacaoErradas:
        "O tratado não “alcança todos os fatos anteriores” só por proteger a pessoa. Também não vale “só para os fatos anteriores”. O quórum de três quintos define a hierarquia, não a retroatividade. Não existe prazo geral de “cinco anos depois do depósito”.",
      pegadinha: "Confundir o rito do § 3º com efeito retroativo.",
      conhecimento: "A Convenção de Viena de 1969 foi promulgada no Brasil pelo Decreto 7.030/2009.",
    },
    {
      topico: "Tratados Internacionais",
      subassunto: "Tratados sucessivos",
      dificuldade: 5,
      raciocinio: "Partes diferentes: rege o tratado de que os dois são partes.",
      enunciado:
        "O Brasil é parte dos tratados X (mais antigo) e Y (mais recente), sobre o mesmo assunto. Outro Estado é parte só do tratado X. Pela Convenção de Viena, nas relações entre os dois países sobre esse assunto, aplica-se:",
      alternativas: [
        "o tratado Y, porque o tratado mais recente sempre revoga o mais antigo",
        "nenhum dos dois, porque falta tratado comum assinado depois do mais recente",
        "os dois ao mesmo tempo, prevalecendo em cada ponto a regra escolhida pelo Brasil",
        "o tratado X, porque é o tratado de que os dois Estados são partes",
        "o tratado Y, porque o Brasil é obrigado a aplicá-lo em todo o seu território",
      ],
      correta: 3,
      explicacao:
        "Quando as partes do tratado posterior não incluem todas as do anterior, nas relações entre um Estado parte dos dois e outro parte de só um, rege o tratado de que ambos são partes (art. 30, 4, b).",
      explicacaoErradas:
        "O mais recente não “sempre revoga” o anterior: isso só vale, em parte, quando as partes são as mesmas. Há tratado comum, o X. Não há escolha unilateral “pelo Brasil”. A aplicação “em todo o seu território” é regra do art. 29, que não resolve o conflito entre tratados.",
      pegadinha: "Aplicar o critério cronológico sem olhar quem é parte.",
      conhecimento: "Se as partes forem as mesmas nos dois tratados, o anterior só se aplica no que for compatível com o posterior (art. 30, 3).",
    },
    {
      topico: "Tratados Internacionais",
      subassunto: "Interpretação",
      dificuldade: 5,
      raciocinio: "Meios suplementares (art. 32): trabalhos preparatórios e circunstâncias da conclusão.",
      enunciado:
        "Aplicada a regra geral de interpretação, um dispositivo de tratado continua ambíguo. Pela Convenção de Viena, o intérprete pode então recorrer, como meios suplementares, aos:",
      alternativas: [
        "trabalhos preparatórios do tratado e às circunstâncias de sua conclusão",
        "pareceres do Ministério das Relações Exteriores, que vinculam os juízes brasileiros",
        "costumes internos do Estado que primeiro assinou o tratado",
        "votos dos parlamentares que aprovaram o decreto legislativo",
        "textos traduzidos que não foram autenticados pelas partes",
      ],
      correta: 0,
      explicacao:
        "O art. 32 permite recorrer aos trabalhos preparatórios e às circunstâncias da conclusão para confirmar o sentido ou determiná-lo quando ele fica ambíguo, obscuro ou leva a resultado absurdo ou desarrazoado.",
      explicacaoErradas:
        "Os “pareceres do Ministério das Relações Exteriores” não são meio de interpretação previsto e não vinculam juízes. Os “costumes internos do Estado” e os “votos dos parlamentares” são atos internos. Texto traduzido não autenticado só é autêntico se o tratado previr ou as partes concordarem (art. 33, 2).",
      pegadinha: "Achar que a interpretação do tratado segue fontes internas de um só país.",
      conhecimento: "A regra geral manda interpretar de boa-fé, pelo sentido comum dos termos, no contexto e à luz do objeto e da finalidade (art. 31).",
    },
    {
      topico: "Tratados Internacionais",
      subassunto: "Interpretação",
      dificuldade: 4,
      raciocinio: "Contexto = texto + preâmbulo + anexos.",
      enunciado:
        "Pela regra geral de interpretação da Convenção de Viena, o contexto de um tratado compreende, além do texto:",
      alternativas: [
        "só os artigos numerados, sem preâmbulo, que não tem força jurídica alguma",
        "as leis internas de cada parte sobre o mesmo assunto",
        "as decisões dos tribunais nacionais que já aplicaram o tratado",
        "os discursos feitos pelos chefes de Estado na assinatura",
        "seu preâmbulo e anexos, além dos acordos feitos entre todas as partes",
      ],
      correta: 4,
      explicacao:
        "Para interpretar, o contexto compreende, além do texto, o preâmbulo e os anexos, bem como os acordos e instrumentos relativos ao tratado feitos em conexão com sua conclusão (art. 31, 2).",
      explicacaoErradas:
        "O preâmbulo faz parte do contexto, ao contrário de “sem preâmbulo”. As “leis internas de cada parte”, as “decisões dos tribunais nacionais” e os “discursos feitos pelos chefes de Estado” não estão no contexto do art. 31, 2.",
      pegadinha: "Excluir o preâmbulo da interpretação.",
      conhecimento: "Também se consideram os acordos e a prática posteriores das partes sobre a interpretação (art. 31, 3).",
    },
    {
      topico: "Tratados Internacionais",
      subassunto: "Pro homine",
      dificuldade: 4,
      raciocinio: "Entre normas de direitos humanos, a mais favorável à pessoa.",
      enunciado:
        "Uma lei interna e um tratado de direitos humanos tratam da mesma garantia de um preso, e o tratado é mais amplo. Pelo princípio pro homine, o intérprete deve:",
      alternativas: [
        "aplicar a lei interna, por ser mais recente, pelo critério cronológico",
        "aplicar a lei interna, por ser mais específica, pelo critério da especialidade",
        "aplicar a norma mais favorável à pessoa, que amplia o exercício do direito",
        "suspender o caso até que o Congresso diga qual das normas vale",
        "aplicar sempre o tratado, mesmo que ele restrinja mais o direito",
      ],
      correta: 2,
      explicacao:
        "O princípio pro homine manda aplicar, no conflito ou na interpretação, a norma mais favorável à pessoa: a que garante mais amplamente o direito ou admite menos restrições.",
      explicacaoErradas:
        "Os critérios “cronológico” e “da especialidade” cedem, em direitos humanos, à norma mais favorável. Não se “suspende o caso” à espera do Congresso. E o tratado não prevalece “mesmo que ele restrinja mais o direito”: vale o mais protetivo, seja qual for a fonte.",
      pegadinha: "Achar que o tratado sempre vence a lei interna.",
      conhecimento: "As normas de direitos humanos se complementam, em vez de se excluírem.",
    },
    {
      topico: "Tratados Internacionais",
      subassunto: "Incorporação",
      dificuldade: 5,
      raciocinio: "Ratificação/depósito = plano internacional; decreto de promulgação = execução interna.",
      enunciado:
        "Sobre a incorporação de um tratado de direitos humanos ao direito brasileiro, é correto afirmar que:",
      alternativas: [
        "a ratificação e o depósito obrigam o Brasil no plano internacional, e o decreto presidencial de promulgação dá execução interna ao tratado",
        "basta a assinatura do Presidente para que o tratado obrigue o Brasil internamente, sem participação do Congresso Nacional em nenhuma das fases",
        "a aprovação do Congresso é feita por lei ordinária sancionada, que já transforma o tratado em norma interna vigente",
        "o Congresso Nacional ratifica e deposita o tratado, cabendo ao Presidente apenas aprovar o texto por decreto legislativo",
        "o tratado de direitos humanos dispensa a aprovação do Congresso, porque não gera encargos ao patrimônio nacional",
      ],
      correta: 0,
      explicacao:
        "Depois da assinatura pelo Presidente e da aprovação do Congresso por decreto legislativo, vêm a ratificação e o depósito, que vinculam o Brasil internacionalmente, e a promulgação por decreto presidencial, que dá execução interna.",
      explicacaoErradas:
        "A “assinatura do Presidente” não basta: há referendo do Congresso (art. 84, VIII). A aprovação é por “decreto legislativo”, não por “lei ordinária sancionada”. Quem ratifica e deposita é o Executivo, não o “Congresso Nacional”. E o tratado de direitos humanos não dispensa a aprovação: costuma gerar compromissos gravosos.",
      pegadinha: "Trocar os papéis do Presidente e do Congresso.",
      conhecimento: "Compete exclusivamente ao Congresso resolver definitivamente sobre tratados que acarretem encargos ou compromissos gravosos ao patrimônio nacional (art. 49, I).",
    },
    {
      topico: "Tratados Internacionais",
      subassunto: "Hierarquia",
      dificuldade: 5,
      raciocinio: "Duplo estatuto: DH comum = supralegal; § 3º = emenda; outros = lei.",
      enunciado:
        "Pela jurisprudência do STF sobre a hierarquia dos tratados no Brasil, é correto afirmar que:",
      alternativas: [
        "todos os tratados de direitos humanos são supraconstitucionais e prevalecem sobre a Constituição",
        "todos os tratados, de qualquer tema, ficam acima das leis, desde que promulgados por decreto",
        "os tratados de direitos humanos anteriores à EC 45/2004 equivalem automaticamente a emendas",
        "tratado de direitos humanos pelo rito comum é supralegal, e o aprovado pelo rito do § 3º equivale a emenda",
        "os tratados de direitos humanos têm a mesma hierarquia das leis ordinárias, como sempre decidiu o STF desde 1988",
      ],
      correta: 3,
      explicacao:
        "No RE 466.343, o STF firmou o duplo estatuto: tratados de direitos humanos aprovados pelo rito comum, antes ou depois da EC 45/2004, são supralegais; os aprovados pelo rito do art. 5º, § 3º, equivalem a emendas. Os demais tratados valem como lei ordinária.",
      explicacaoErradas:
        "O STF não adota a tese “supraconstitucional”. Tratados de outros temas não ficam “acima das leis”. Os “anteriores à EC 45/2004” não viram emenda automaticamente: são supralegais. A paridade com “leis ordinárias” era a posição antiga, superada em 2008.",
      pegadinha: "Achar que a Convenção Americana, de 1992, virou emenda com a EC 45/2004.",
      conhecimento: "Cabe recurso extraordinário contra decisão que declarar a inconstitucionalidade de tratado ou lei federal (art. 102, III, b).",
    },
    {
      topico: "Tratados Internacionais",
      subassunto: "Depositário infiel",
      dificuldade: 4,
      raciocinio: "SV 25: ilícita a prisão do depositário infiel, qualquer modalidade.",
      enunciado:
        "A Constituição ainda menciona a prisão civil do depositário infiel (art. 5º, LXVII). Mesmo assim, ela não é mais possível no Brasil porque:",
      alternativas: [
        "uma emenda constitucional retirou essa hipótese do texto do art. 5º, LXVII",
        "a Convenção Americana, com status supralegal, paralisou as leis que a permitiam",
        "o Congresso aprovou a Convenção Americana pelo rito das emendas, em dois turnos em cada Casa",
        "a prisão civil só é possível em crimes de trânsito, e não em dívidas civis",
        "o STF declarou inconstitucional o próprio texto originário da Constituição",
      ],
      correta: 1,
      explicacao:
        "A Convenção Americana só admite prisão civil por dívida alimentar. Como é supralegal, ela fica acima das leis que regulavam a prisão do depositário infiel e as paralisa. Daí a Súmula Vinculante 25: é ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.",
      explicacaoErradas:
        "Nenhuma “emenda constitucional retirou” o trecho: ele continua no texto. A Convenção Americana não foi aprovada “pelo rito das emendas”. Prisão civil não tem relação com “crimes de trânsito”. O STF não declara inconstitucional “texto originário da Constituição”.",
      pegadinha: "Achar que o texto do inciso LXVII mudou.",
      conhecimento: "A prisão civil do devedor de alimentos continua possível.",
    },
    {
      topico: "Tratados Internacionais",
      subassunto: "Tratados com força de emenda",
      dificuldade: 4,
      raciocinio: "CDPD: primeiro tratado aprovado pelo rito do § 3º.",
      enunciado:
        "Entre os tratados abaixo, foi aprovado pelo rito do art. 5º, § 3º, da Constituição e, por isso, equivale a emenda constitucional:",
      alternativas: [
        "a Convenção Americana sobre Direitos Humanos, promulgada em 1992",
        "o Pacto Internacional sobre Direitos Civis e Políticos, de 1966",
        "a Declaração Universal dos Direitos Humanos, de 1948",
        "o Estatuto de Roma do Tribunal Penal Internacional",
        "a Convenção sobre os Direitos das Pessoas com Deficiência",
      ],
      correta: 4,
      explicacao:
        "A Convenção sobre os Direitos das Pessoas com Deficiência e seu Protocolo Facultativo foram aprovados pelo rito do § 3º e promulgados pelo Decreto 6.949/2009. Também equivalem a emenda o Tratado de Marraqueche e a Convenção Interamericana contra o Racismo.",
      explicacaoErradas:
        "A “Convenção Americana” e o “Pacto Internacional sobre Direitos Civis e Políticos” foram aprovados pelo rito comum: são supralegais. A “Declaração Universal” é resolução da Assembleia Geral, não tratado. O “Estatuto de Roma” não passou pelo rito do § 3º.",
      pegadinha: "Achar que o tratado mais famoso é o que tem força de emenda.",
      conhecimento: "O Tratado de Marraqueche facilita o acesso a obras publicadas às pessoas cegas ou com deficiência visual.",
    },
    {
      topico: "Tratados Internacionais",
      subassunto: "Hierarquia",
      dificuldade: 5,
      raciocinio: "Supralegal: perde para a CF, vence a lei.",
      enunciado:
        "Um tratado de direitos humanos aprovado pelo rito comum entra em conflito com uma lei ordinária posterior e, em outro ponto, com a Constituição. Pela posição do STF:",
      alternativas: [
        "a lei posterior revoga o tratado, e o tratado prevalece sobre a Constituição",
        "o tratado vence os dois conflitos, por proteger a dignidade da pessoa",
        "o tratado prevalece sobre a lei, mas a Constituição prevalece sobre ele",
        "a Constituição e a lei prevalecem sobre o tratado, que tem força de decreto",
        "os conflitos só podem ser resolvidos pela Corte Interamericana",
      ],
      correta: 2,
      explicacao:
        "Sendo supralegal, o tratado fica acima das leis, inclusive das posteriores, que não o revogam. Mas fica abaixo da Constituição, que prevalece no conflito.",
      explicacaoErradas:
        "A “lei posterior” não revoga norma supralegal, e o tratado não “prevalece sobre a Constituição”. Ele não vence “os dois conflitos”. Não tem força de “decreto”. E os juízes brasileiros resolvem esses conflitos, sem depender da “Corte Interamericana”.",
      pegadinha: "Aplicar o critério cronológico a normas de hierarquias diferentes.",
      conhecimento: "Supralegal: abaixo da Constituição e acima da legislação infraconstitucional.",
    },
    {
      topico: "Tratados Internacionais",
      subassunto: "Convenções da OIT",
      dificuldade: 4,
      raciocinio: "Direitos do trabalho = direitos humanos.",
      enunciado:
        "Uma convenção da OIT sobre trabalho forçado, aprovada pelo Congresso pelo rito comum, tem no Brasil hierarquia:",
      alternativas: [
        "de lei ordinária, porque convenção trabalhista não trata de direitos humanos",
        "supralegal, porque direitos do trabalho são espécie de direitos humanos",
        "de emenda constitucional, porque toda convenção da OIT tem esse status",
        "inferior a decreto, porque depende de regulamentação do Ministério",
        "supraconstitucional, porque a OIT é organização da ONU",
      ],
      correta: 1,
      explicacao:
        "Os direitos do trabalho são direitos humanos. Assim, convenção da OIT aprovada pelo rito comum é supralegal; se aprovada pelo rito do § 3º, equivaleria a emenda.",
      explicacaoErradas:
        "Convenção trabalhista trata, sim, de direitos humanos, ao contrário de “não trata”. Nem “toda convenção da OIT” tem força de emenda: depende do rito. Não fica “inferior a decreto”. E vínculo com a ONU não a torna “supraconstitucional”.",
      pegadinha: "Separar direito do trabalho de direitos humanos.",
      conhecimento: "Tratado e convenção são usados como sinônimos nas provas.",
    },
    {
      topico: "Tratados Internacionais",
      subassunto: "Controle de convencionalidade",
      dificuldade: 5,
      raciocinio: "Difuso: qualquer juiz, de ofício, qualquer tratado de DH.",
      enunciado:
        "Num processo comum, um juiz federal deixa de aplicar uma lei por ser incompatível com a Convenção Americana, aprovada pelo rito comum. Sobre o controle de convencionalidade, é correto afirmar que:",
      alternativas: [
        "o juiz pode fazê-lo no caso concreto, até de ofício, com qualquer tratado de direitos humanos incorporado",
        "o controle só pode ser feito pela Corte Interamericana, e o juiz brasileiro deve esperar a decisão dela no caso",
        "só o STF pode fazê-lo, e apenas em ação direta, com tratados aprovados pelo rito das emendas",
        "o controle só é possível com tratados equivalentes a emendas, nunca com tratados supralegais",
        "o juiz só pode fazê-lo se uma das partes pedir, pois o controle de ofício é proibido",
      ],
      correta: 0,
      explicacao:
        "No controle difuso de convencionalidade, qualquer juiz ou tribunal, provocado ou de ofício, verifica a compatibilidade da lei com os tratados de direitos humanos incorporados, sejam supralegais ou equivalentes a emendas.",
      explicacaoErradas:
        "O controle internacional pela “Corte Interamericana” é subsidiário, e o juiz não precisa esperá-lo. A forma concentrada no STF não exclui a difusa. Os tratados “supralegais” também servem de parâmetro no controle difuso. E o controle pode ser feito “de ofício”.",
      pegadinha: "Achar que só o STF faz controle de convencionalidade.",
      conhecimento: "Para a doutrina, o controle concentrado de convencionalidade usa só os tratados do § 3º como parâmetro.",
    },
    {
      topico: "Tratados Internacionais",
      subassunto: "Controle de convencionalidade",
      dificuldade: 4,
      raciocinio: "Controle internacional = subsidiário.",
      enunciado:
        "Sobre o controle de convencionalidade exercido por tribunais internacionais em relação ao Brasil, é correto afirmar que:",
      alternativas: [
        "é feito pela Corte Interamericana de Justiça, órgão da ONU sediado em Genebra",
        "é o primeiro caminho, e o juiz brasileiro só atua depois que a corte internacional decide o caso",
        "impede que juízes brasileiros apliquem tratados antes de uma condenação do país",
        "é subsidiário e se destaca, no sistema regional, na Corte Interamericana de Direitos Humanos",
        "só pode ser exercido se o Presidente da República autorizar cada processo",
      ],
      correta: 3,
      explicacao:
        "O controle internacional é complementar: atua quando os mecanismos internos não bastam. No sistema regional, destaca-se a Corte Interamericana de Direitos Humanos, que verifica a compatibilidade do direito interno com a Convenção Americana.",
      explicacaoErradas:
        "Não existe “Corte Interamericana de Justiça”: a corte é de Direitos Humanos e pertence à OEA, com sede em San José. O controle internacional não é “o primeiro caminho”. Juízes brasileiros aplicam tratados sem esperar “uma condenação do país”. E não há autorização do “Presidente da República” para cada processo.",
      pegadinha: "Inverter a ordem: o interno vem antes do internacional.",
      conhecimento: "O Brasil integra o sistema global (ONU) e o regional (OEA) de proteção.",
    },
  ],
};
