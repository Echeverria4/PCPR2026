import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "etica-05",
  resumo: {
    ideia:
      "O Decreto 9.203/2017 trata da governança pública: como avaliar, direcionar e monitorar a gestão para que o Estado entregue resultado à sociedade.",
    itens: [
      {
        termo: "Alcance",
        faz: "Administração federal direta, autárquica e fundacional.",
        pista: "Empresas estatais não estão na lista do decreto.",
      },
      {
        termo: "Governança pública",
        faz: "Mecanismos usados para avaliar, direcionar e monitorar a gestão.",
      },
      {
        termo: "Valor público",
        faz: "Produtos e resultados que respondem de forma efetiva e útil às necessidades de interesse público.",
      },
      {
        termo: "Alta administração",
        faz: "O topo do órgão, responsável por manter a governança e a gestão de riscos.",
      },
      {
        termo: "Gestão de riscos",
        faz: "Processo permanente que identifica, avalia e gerencia eventos, dando segurança razoável sobre os objetivos.",
      },
      {
        termo: "Princípios",
        faz: "Capacidade de resposta, integridade, confiabilidade, melhoria regulatória, prestação de contas e responsabilidade, e transparência.",
        pista: "São seis.",
      },
      {
        termo: "Diretrizes",
        faz: "Orientam o procedimento: buscar resultado, simplificar, decidir por evidências e pesar custos e benefícios.",
      },
      {
        termo: "Prevenção",
        faz: "Os controles internos privilegiam a prevenção antes dos processos sancionadores.",
      },
    ],
    cuidado:
      "Gestão de riscos dá segurança razoável, e não garantia absoluta. Desconfie de “elimina todos os riscos”.",
  },
  questoes: [
    {
      topico: "Governança pública",
      subassunto: "Alcance",
      dificuldade: 4,
      raciocinio: "O decreto lista só três partes da administração federal.",
      enunciado: "O Decreto 9.203/2017 dispõe sobre a política de governança da administração pública federal",
      alternativas: [
        "direta, autárquica e fundacional",
        "direta e indireta, com todas as estatais",
        "direta, apenas nos Ministérios e na Casa Civil",
        "dos três Poderes, sem exceção",
        "de todos os entes da Federação",
      ],
      correta: 0,
      explicacao: "O art. 1º fala em administração federal direta, autárquica e fundacional.",
      explicacaoErradas:
        "“com todas as estatais” amplia demais. “apenas nos Ministérios” reduz demais. “dos três Poderes” e “todos os entes” extrapolam o Poder Executivo Federal.",
      pegadinha: "Trocar por “direta e indireta”, como nos códigos de ética.",
      conhecimento: "A PRF, como órgão da administração direta, está no alcance do decreto.",
    },
    {
      topico: "Governança pública",
      subassunto: "Conceito",
      dificuldade: 4,
      raciocinio: "Decore os três verbos da definição.",
      enunciado: "Pelo Decreto 9.203/2017, os mecanismos de governança são postos em prática para",
      alternativas: [
        "punir, corrigir e indenizar os agentes da gestão",
        "licitar, contratar e fiscalizar os serviços da gestão",
        "avaliar, direcionar e monitorar a gestão",
        "planejar, executar e arquivar os atos da gestão",
        "auditar, julgar e sancionar os gestores",
      ],
      correta: 2,
      explicacao:
        "Governança pública é o conjunto de mecanismos postos em prática para avaliar, direcionar e monitorar a gestão, com vistas a políticas públicas e serviços de interesse da sociedade.",
      explicacaoErradas:
        "“punir, corrigir” e “auditar, julgar” tratam de controle sancionador. “licitar, contratar” trata de gestão de contratos. “planejar, executar” descreve o próprio trabalho da gestão.",
      pegadinha: "Confundir governança com gestão.",
      conhecimento: "Governança dirige e acompanha. Gestão executa.",
    },
    {
      topico: "Governança pública",
      subassunto: "Valor público",
      dificuldade: 5,
      raciocinio: "Valor público se mede por resultado útil, e não por atividade.",
      enunciado:
        "A PRF cria um painel de acidentes e, com base nele, reforça trechos críticos, o que reduz as mortes em uma rodovia. Para o Decreto 9.203/2017, a redução das mortes é exemplo de",
      alternativas: [
        "alta administração, pois resulta de uma decisão tomada no topo do órgão",
        "gestão de riscos, pois toda redução de acidente é mero controle",
        "melhoria regulatória, pois os trechos críticos mudaram de norma",
        "prestação de contas, pois o número foi publicado no painel",
        "valor público, pois é resultado útil que responde a demanda social",
      ],
      correta: 4,
      explicacao:
        "Valor público são produtos e resultados que dão resposta efetiva e útil a necessidades de interesse público e modificam aspectos da sociedade.",
      explicacaoErradas:
        "“alta administração” é um grupo de pessoas. “gestão de riscos” é processo, e não o resultado. “melhoria regulatória” exigiria mudança de norma. “prestação de contas” seria a divulgação, e não a queda das mortes.",
      pegadinha: "Confundir o meio com o resultado entregue.",
      conhecimento: "Valor público pode ser gerado, preservado ou entregue.",
    },
    {
      topico: "Gestão de riscos",
      subassunto: "Conceito",
      dificuldade: 5,
      raciocinio: "Três marcas: permanente, ligada ao topo, segurança razoável.",
      enunciado: "Sobre a gestão de riscos no Decreto 9.203/2017, é correto dizer que é um processo",
      alternativas: [
        "eventual, aberto depois de cada falha, para apontar culpados",
        "permanente, que fornece segurança razoável quanto aos objetivos",
        "permanente, que garante de forma absoluta os objetivos do órgão",
        "conduzido só pela auditoria, sem relação com a alta administração",
        "eventual, próprio da área financeira e dos contratos do órgão",
      ],
      correta: 1,
      explicacao:
        "É processo permanente, estabelecido, direcionado e monitorado pela alta administração, que identifica, avalia e gerencia eventos e fornece segurança razoável.",
      explicacaoErradas:
        "“eventual” contraria a natureza permanente. “de forma absoluta” troca o razoável pelo absoluto. “só pela auditoria” ignora a alta administração. “área financeira” limita sem base.",
      pegadinha: "Trocar “segurança razoável” por garantia total.",
      conhecimento: "Riscos são eventos potenciais que podem afetar a organização.",
    },
    {
      topico: "Princípios e diretrizes",
      subassunto: "Princípios",
      dificuldade: 5,
      raciocinio: "A lista tem seis princípios. Procure o intruso.",
      enunciado: "Não é princípio da governança pública, conforme o Decreto 9.203/2017,",
      alternativas: [
        "a capacidade de resposta",
        "a melhoria regulatória",
        "a confiabilidade",
        "a eficiência",
        "a integridade",
      ],
      correta: 3,
      explicacao:
        "A eficiência é princípio da Administração na Constituição, mas não está na lista do art. 3º do decreto, que tem seis princípios próprios da governança.",
      explicacaoErradas:
        "“capacidade de resposta”, “melhoria regulatória”, “confiabilidade” e “integridade” estão na lista do art. 3º, ao lado de prestação de contas e responsabilidade e de transparência.",
      pegadinha: "Levar para o decreto a lista de princípios do art. 37 da Constituição.",
      conhecimento: "Princípios são a base. Diretrizes orientam o procedimento.",
    },
    {
      topico: "Princípios e diretrizes",
      subassunto: "Diretrizes",
      dificuldade: 5,
      raciocinio: "Controle interno prefere prevenir a punir.",
      enunciado:
        "Um órgão federal adota controles internos baseados em riscos. Segundo as diretrizes do Decreto 9.203/2017, esses controles devem privilegiar",
      alternativas: [
        "a abertura de processo sancionador em cada desvio encontrado",
        "o sigilo das decisões, para reduzir a pressão sobre os gestores",
        "as ações de prevenção antes dos processos sancionadores",
        "a repetição dos fluxos atuais, para garantir estabilidade",
        "as auditorias externas no lugar das rotinas internas de controle",
      ],
      correta: 2,
      explicacao: "A diretriz fala em controles fundamentados na gestão de risco, com prioridade para a prevenção antes do processo sancionador.",
      explicacaoErradas:
        "“processo sancionador em cada desvio” inverte a ordem. “sigilo das decisões” contraria a transparência. “repetição dos fluxos” contraria a modernização. “auditorias externas” não substitui controle interno.",
      pegadinha: "Achar que controle forte é o que pune mais.",
      conhecimento: "As diretrizes também pedem decisão orientada por evidências.",
    },
    {
      topico: "Princípios e diretrizes",
      subassunto: "Custos e benefícios",
      dificuldade: 4,
      raciocinio: "Antes de criar a política, avalie a proposta.",
      enunciado:
        "Antes de conceder um incentivo fiscal novo, a equipe calcula quanto ele custará e o que deve render. Isso está de acordo com a diretriz de",
      alternativas: [
        "aferir, sempre que possível, os custos e benefícios das propostas",
        "editar atos normativos só depois de consulta pública obrigatória",
        "definir formalmente as funções e as competências de cada estrutura",
        "incorporar padrões elevados de conduta pela alta administração",
        "promover a comunicação aberta, voluntária e transparente dos atos",
      ],
      correta: 0,
      explicacao:
        "Uma das diretrizes manda avaliar as propostas de políticas públicas e de incentivos fiscais e aferir, sempre que possível, custos e benefícios.",
      explicacaoErradas:
        "“consulta pública obrigatória” erra, pois a consulta é “sempre que conveniente”. “funções e as competências” trata de organização. “padrões elevados de conduta” trata de comportamento. “comunicação aberta” trata de transparência.",
      pegadinha: "Marcar uma diretriz verdadeira que não responde ao caso.",
      conhecimento: "Boas práticas regulatórias e simplificação também são diretrizes.",
    },
    {
      topico: "Princípios e diretrizes",
      subassunto: "Papel da alta administração",
      dificuldade: 5,
      raciocinio: "O decreto põe a responsabilidade no topo do órgão.",
      enunciado:
        "Uma superintendência quer saber a quem cabe implementar e manter os mecanismos de governança no órgão. Pelo Decreto 9.203/2017, cabe",
      alternativas: [
        "aos servidores recém-empossados, por rodízio entre as áreas",
        "aos órgãos de controle externo, como o Tribunal de Contas",
        "às comissões de ética, que fazem a gestão de riscos do órgão",
        "à alta administração do próprio órgão ou da própria entidade",
        "às ouvidorias, pois recebem a demanda direta dos cidadãos",
      ],
      correta: 3,
      explicacao:
        "Cabe à alta administração implementar e manter mecanismos, instâncias e práticas de governança, de acordo com os princípios e as diretrizes do decreto.",
      explicacaoErradas:
        "“servidores recém-empossados” e “ouvidorias” não têm esse papel. “controle externo” fiscaliza de fora. “comissões de ética” cuidam da conduta, e não da governança do órgão.",
      pegadinha: "Atribuir ao controle o papel de quem dirige.",
      conhecimento: "A alta administração também mantém o sistema de gestão de riscos e controles internos.",
    },
  ],
};
