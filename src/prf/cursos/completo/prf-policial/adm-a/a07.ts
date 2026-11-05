import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "adm-a-07",
  resumo: {
    ideia:
      "A Lei 14.133/2021 é a norma geral de licitações. A aula mostra quem ela alcança, seus princípios e objetivos, quem conduz a disputa, as cinco modalidades e os critérios de julgamento.",
    itens: [
      {
        termo: "Quem se submete",
        faz: "Administração direta, autárquica e fundacional de todos os entes, além do Legislativo e do Judiciário na função administrativa.",
        pista: "As estatais seguem a Lei 13.303/2016, ressalvado o art. 178.",
      },
      {
        termo: "Princípios novos",
        faz: "Além dos clássicos, a lei cita planejamento, transparência, segregação de funções, competitividade, celeridade e economicidade.",
      },
      {
        termo: "Objetivos (art. 11)",
        faz: "Resultado mais vantajoso, inclusive no ciclo de vida, isonomia e justa competição, evitar sobrepreço e superfaturamento, incentivar inovação e desenvolvimento sustentável.",
      },
      {
        termo: "Agente de contratação",
        faz: "Conduz a licitação até a homologação. É servidor efetivo ou empregado público dos quadros permanentes.",
      },
      {
        termo: "Comissão de contratação",
        faz: "Pode substituir o agente em bens ou serviços especiais. Tem ao menos 3 membros e responde de forma solidária.",
        pista: "Quem divergiu de forma fundamentada e registrou em ata fica de fora.",
      },
      {
        termo: "Modalidades",
        faz: "Pregão, concorrência, concurso, leilão e diálogo competitivo. É vedado criar outras ou combiná-las.",
        pista: "Convite e tomada de preços não existem mais.",
      },
      {
        termo: "Pregão",
        faz: "Bens e serviços comuns. Julga por menor preço ou maior desconto.",
        pista: "Não serve para obra nem para serviço técnico intelectual.",
      },
      {
        termo: "Concorrência",
        faz: "Bens e serviços especiais, obras e serviços de engenharia. Usa o mesmo rito do pregão.",
      },
      {
        termo: "Concurso e leilão",
        faz: "Concurso: trabalho técnico, científico ou artístico, com prêmio. Leilão: alienação, pelo maior lance.",
      },
      {
        termo: "Diálogo competitivo",
        faz: "Para inovação ou objeto que a Administração não sabe especificar. Dá ao menos 25 dias úteis para manifestar interesse.",
      },
    ],
    cuidado: "No art. 7º a escolha de servidor efetivo é preferencial. No agente de contratação (art. 8º) ela é obrigatória.",
  },
  questoes: [
    {
      topico: "Âmbito da lei",
      subassunto: "Estatais",
      dificuldade: 4,
      raciocinio: "Estatal tem lei própria. A Lei 14.133 só entra pelo art. 178.",
      enunciado:
        "Uma empresa pública federal abre disputa para comprar pneus para seus veículos. Quanto à norma que rege essa contratação, aplica-se",
      alternativas: [
        "a Lei 13.303/2016, pois as estatais têm regime licitatório próprio",
        "a Lei 14.133/2021, pois ela alcança toda a Administração indireta",
        "a Lei 8.666/1993, ainda em vigor para as empresas estatais",
        "só o regulamento interno, sem nenhuma lei sobre o tema",
        "o direito privado puro, pois a empresa atua no mercado",
      ],
      correta: 0,
      explicacao: "O art. 1º, § 1º, da Lei 14.133 deixa fora as empresas públicas, as sociedades de economia mista e suas subsidiárias, regidas pela Lei 13.303/2016, ressalvado o art. 178 (crimes).",
      explicacaoErradas:
        "“toda a Administração indireta” esquece a exclusão das estatais. “Lei 8.666/1993” foi revogada. “regulamento interno” existe, mas abaixo da lei. “direito privado puro” ignora o art. 173, § 1º, III, da CF.",
      pegadinha: "Ler “Administração indireta” e incluir as estatais.",
      conhecimento: "Pela lei, autarquias e fundações públicas seguem a Lei 14.133.",
    },
    {
      topico: "Princípios",
      subassunto: "Segregação de funções",
      dificuldade: 5,
      raciocinio: "Quem faz não deve ser quem confere, nas funções de risco.",
      enunciado:
        "Em contratação de alto risco, o mesmo servidor faz a pesquisa de preços, julga as propostas e fiscaliza o contrato. A prática afronta diretamente, nos termos da Lei 14.133,",
      alternativas: [
        "o princípio da competitividade, pois restringe os licitantes",
        "o princípio do julgamento objetivo, que afasta a pesquisa",
        "o princípio da celeridade, pois concentra todo o trabalho",
        "o princípio do planejamento, pois falta plano de contratação",
        "a segregação de funções, que impede acumular áreas de risco",
      ],
      correta: 4,
      explicacao: "O art. 7º, § 1º, veda designar o mesmo agente para funções mais suscetíveis a riscos, para reduzir a chance de erro e de fraude.",
      explicacaoErradas:
        "“competitividade” trata da disputa entre licitantes. “julgamento objetivo” trata do critério do edital. “celeridade” liga-se ao tempo, e a concentração nem atrasaria. “planejamento” não é a falha descrita.",
      pegadinha: "Pensar que acumular tarefas é só problema de organização.",
      conhecimento: "A segregação de funções aparece no art. 5º como princípio expresso.",
    },
    {
      topico: "Objetivos",
      subassunto: "Ciclo de vida",
      dificuldade: 4,
      raciocinio: "Menor dispêndio não é só o menor preço de compra.",
      enunciado:
        "Numa licitação de viaturas, o edital considera também consumo, manutenção e reposição, com critérios mensuráveis. Essa previsão, pela Lei 14.133,",
      alternativas: [
        "é vedada, pois o julgamento por menor preço só olha o valor da nota",
        "é admitida, pois o menor dispêndio pode considerar o ciclo de vida",
        "exige o critério de técnica e preço, em qualquer caso",
        "só seria possível em diálogo competitivo, por ser inovação",
        "depende de autorização prévia do Tribunal de Contas",
      ],
      correta: 1,
      explicacao: "O art. 34, § 1º, permite considerar custos indiretos ligados ao ciclo de vida, se forem objetivamente mensuráveis. O art. 11, I, inclui o ciclo de vida no objetivo de contratar melhor.",
      explicacaoErradas:
        "“só olha o valor da nota” contraria o art. 34. “técnica e preço” não é exigência para isso. “diálogo competitivo” não tem relação com o caso. “autorização prévia” não está prevista.",
      pegadinha: "Reduzir o menor preço ao valor nominal da proposta.",
      conhecimento: "Essa consideração depende de regulamento e de critério objetivo.",
    },
    {
      topico: "Agentes",
      subassunto: "Agente de contratação",
      dificuldade: 5,
      raciocinio: "Art. 7º: preferencialmente. Art. 8º: entre efetivos ou empregados dos quadros permanentes.",
      enunciado:
        "A autoridade designa como agente de contratação um servidor ocupante apenas de cargo em comissão, com ótima formação na área. Pela Lei 14.133, a designação é",
      alternativas: [
        "válida, pois a lei só pede servidor efetivo como preferência",
        "válida, desde que ele tenha curso de licitações reconhecido",
        "válida, se a equipe de apoio for formada por servidores efetivos",
        "inválida, pois o cargo em comissão impede toda atuação em licitação",
        "inválida, pois exige servidor efetivo ou empregado permanente",
      ],
      correta: 4,
      explicacao: "O art. 8º diz que o agente de contratação é designado entre servidores efetivos ou empregados públicos dos quadros permanentes.",
      explicacaoErradas:
        "“como preferência” é a regra geral do art. 7º, e não a do agente de contratação. “curso” e “equipe de apoio” não suprem o requisito. “toda atuação” exagera, pois a vedação é só para essa função.",
      pegadinha: "Levar o “preferencialmente” do art. 7º para o art. 8º.",
      conhecimento: "No pregão, o agente responsável pela condução se chama pregoeiro.",
    },
    {
      topico: "Agentes",
      subassunto: "Comissão de contratação",
      dificuldade: 5,
      raciocinio: "Comissão responde junto, salvo quem divergiu e registrou.",
      enunciado:
        "Uma comissão de contratação de três membros aprova por maioria um ato irregular. O membro vencido registrou em ata sua divergência, com fundamentos. Pela Lei 14.133, a responsabilidade é",
      alternativas: [
        "solidária entre os membros, salvo quem divergiu em ata",
        "individual de cada membro, na medida da sua conduta",
        "apenas do presidente, por ser ele quem conduz a sessão",
        "solidária entre todos, sem nenhuma ressalva possível",
        "apenas da autoridade que homologou a licitação irregular",
      ],
      correta: 0,
      explicacao: "Pelo art. 8º, § 2º, os membros da comissão respondem solidariamente, salvo aquele com posição divergente fundamentada e registrada em ata.",
      explicacaoErradas:
        "“individual” é a regra do agente de contratação. “presidente” e “autoridade” não concentram a responsabilidade. “sem nenhuma ressalva” esquece o voto vencido registrado.",
      pegadinha: "Trocar a responsabilidade individual do agente pela solidária da comissão.",
      conhecimento: "A comissão tem no mínimo 3 membros e pode substituir o agente em bens ou serviços especiais.",
    },
    {
      topico: "Modalidades",
      subassunto: "Pregão e concorrência",
      dificuldade: 4,
      raciocinio: "Obra nunca vai a pregão. Serviço comum de engenharia pode ir.",
      enunciado:
        "O órgão quer construir um posto de fiscalização novo e, em outra disputa, contratar manutenção rotineira e padronizada de telhados, classificada como serviço comum de engenharia. Pela Lei 14.133,",
      alternativas: [
        "as duas disputas exigem concorrência, pois há engenharia",
        "as duas disputas admitem pregão, pelo baixo valor",
        "a obra vai a concurso, e a manutenção vai a leilão",
        "a obra exige concorrência, e a manutenção admite pregão",
        "a obra admite pregão, e a manutenção exige diálogo competitivo",
      ],
      correta: 3,
      explicacao: "O art. 29, parágrafo único, afasta o pregão de obras e de serviços de engenharia, exceto os serviços comuns de engenharia do art. 6º, XXI, “a”.",
      explicacaoErradas:
        "“exigem concorrência” esquece a exceção do serviço comum. “baixo valor” não define modalidade. “concurso” e “leilão” têm outro objeto. “obra admite pregão” contraria a lei.",
      pegadinha: "Achar que toda engenharia afasta o pregão.",
      conhecimento: "A modalidade agora depende do objeto, e não do valor.",
    },
    {
      topico: "Modalidades",
      subassunto: "Diálogo competitivo",
      dificuldade: 5,
      raciocinio: "A Administração sabe a necessidade, mas não a solução.",
      enunciado:
        "A PRF precisa de um sistema inovador para detectar cargas ocultas, e nenhuma solução do mercado atende sem adaptação. A especificação precisa ainda não é possível. A modalidade indicada e uma regra dela são",
      alternativas: [
        "pregão, com disputa de lances em sessão pública eletrônica",
        "diálogo competitivo, com prazo mínimo de 25 dias úteis",
        "concurso, com prêmio ao autor do melhor trabalho técnico",
        "concorrência, com prazo curto para resposta das empresas",
        "leilão, com seleção da empresa que der o maior lance",
      ],
      correta: 1,
      explicacao: "O art. 32 prevê o diálogo para inovação tecnológica ou técnica, necessidade de adaptar soluções do mercado e impossibilidade de definir especificações com precisão. O § 1º, I, fixa ao menos 25 dias úteis.",
      explicacaoErradas:
        "“pregão” pede padrão definido de forma objetiva. “concurso” escolhe trabalho técnico ou artístico pronto. “concorrência” parte de objeto já especificado. “leilão” serve para alienar.",
      pegadinha: "Usar concorrência só porque o objeto é complexo.",
      conhecimento: "Depois dos diálogos, abre-se fase competitiva com propostas sobre a solução escolhida.",
    },
    {
      topico: "Critérios de julgamento",
      subassunto: "Leilão",
      dificuldade: 5,
      raciocinio: "Quem vende pelo maior lance pode escolher leiloeiro pelo maior desconto na comissão.",
      enunciado:
        "A União vai alienar veículos legalmente apreendidos e opta por usar leiloeiro oficial. Pela Lei 14.133, o leiloeiro será selecionado",
      alternativas: [
        "por sorteio entre os inscritos na junta comercial",
        "por concorrência, com critério de melhor técnica",
        "por credenciamento ou pregão, com o maior desconto",
        "por livre escolha da autoridade, sem nenhum processo",
        "por leilão, com o critério de maior lance pelo serviço",
      ],
      correta: 2,
      explicacao: "O art. 31, § 1º, manda selecionar o leiloeiro por credenciamento ou por pregão, com critério de maior desconto para as comissões.",
      explicacaoErradas:
        "“sorteio” e “livre escolha” não constam da lei. “melhor técnica” não é o critério previsto. “maior lance” é critério do leilão de bens, e não da escolha do leiloeiro.",
      pegadinha: "Levar o maior lance para a seleção do leiloeiro.",
      conhecimento: "O leilão também pode ser feito por servidor designado.",
    },
  ],
};
