import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-04",
  resumo: {
    ideia:
      "Computação em nuvem é usar recursos de TI pela rede, sob demanda, em vez de manter tudo em máquinas próprias.",
    itens: [
      {
        termo: "IaaS",
        faz: "Entrega infraestrutura: processamento, armazenamento e rede. O cliente cuida do sistema e dos programas.",
      },
      {
        termo: "PaaS",
        faz: "Entrega uma plataforma pronta para desenvolver, testar e publicar aplicações.",
      },
      {
        termo: "SaaS",
        faz: "Entrega o programa pronto, usado pela rede. Exemplo: e-mail pelo navegador.",
      },
      {
        termo: "Elasticidade rápida",
        faz: "Aloca e libera recursos de forma automática, conforme a demanda muda.",
      },
      {
        termo: "Escalabilidade",
        faz: "Vertical: fortalecer um servidor. Horizontal: acrescentar servidores.",
        pista: "Escalabilidade olha o crescimento planejado. Elasticidade olha a variação repentina.",
      },
      {
        termo: "Pool de recursos",
        faz: "Recursos agrupados atendem vários clientes, de forma compartilhada.",
      },
      {
        termo: "Serviço medido",
        faz: "O uso é medido, e paga-se pelo que foi consumido.",
      },
      {
        termo: "Modelos de implantação",
        faz: "Pública: aberta. Privada: de uma organização. Comunitária: de um grupo com interesses comuns. Híbrida: combina modelos.",
      },
      {
        termo: "Virtualização",
        faz: "Permite rodar vários sistemas operacionais, isolados entre si, no mesmo equipamento.",
      },
    ],
    cuidado:
      "Dispensar servidores próprios é vantagem da nuvem. Depender da rede é o limite dela.",
  },
  questoes: [
    {
      topico: "Modelos de serviço",
      subassunto: "IaaS, PaaS e SaaS",
      dificuldade: 4,
      raciocinio: "Quanto mais pronto o serviço, mais perto do SaaS.",
      enunciado:
        "Um órgão usa e-mail pelo navegador, sem instalar nada. Uma equipe usa um ambiente pronto para desenvolver e testar um sistema. Outra contrata servidores virtuais e escolhe o sistema operacional. Esses serviços são, nessa ordem,",
      alternativas: [
        "IaaS, PaaS e SaaS",
        "PaaS, IaaS e SaaS",
        "SaaS, IaaS e PaaS",
        "IaaS nos três casos, pois tudo roda em servidor remoto",
        "SaaS, PaaS e IaaS",
      ],
      correta: 4,
      explicacao:
        "E-mail pronto: SaaS. Ambiente para desenvolver: PaaS. Servidores configuráveis: IaaS.",
      explicacaoErradas:
        "“IaaS, PaaS e SaaS” inverte a ordem. “PaaS, IaaS e SaaS” e “SaaS, IaaS e PaaS” trocam dois modelos. “IaaS nos três casos” ignora o que é entregue ao cliente em cada serviço.",
      pegadinha: "Achar que desenvolvimento é SaaS. Quem atende quem desenvolve é o PaaS.",
      conhecimento: "IaaS: infraestrutura. PaaS: plataforma. SaaS: programa.",
    },
    {
      topico: "Características da nuvem",
      subassunto: "Elasticidade rápida",
      dificuldade: 5,
      raciocinio: "Pico imprevisível e ajuste automático apontam para a elasticidade.",
      enunciado:
        "O site de consulta de multas recebe um pico imprevisível de acessos. O sistema aumenta os recursos sozinho e os reduz quando o movimento volta ao normal. Essa característica é a",
      alternativas: [
        "elasticidade rápida, que aloca e libera recursos sozinha",
        "escalabilidade vertical, que dá mais memória ao servidor atual",
        "escalabilidade horizontal, planejada antes do período de pico",
        "pool de recursos, que dá a cada cliente um servidor exclusivo",
        "serviço medido, que bloqueia o site ao atingir o limite de uso",
      ],
      correta: 0,
      explicacao: "Elasticidade é ajustar os recursos de forma automática, para mais e para menos, conforme a demanda.",
      explicacaoErradas:
        "“escalabilidade vertical” e “escalabilidade horizontal” tratam do crescimento planejado. “pool de recursos” é compartilhado, e não exclusivo. “serviço medido” mede o uso e não bloqueia o site.",
      pegadinha: "Tratar elasticidade e escalabilidade como sinônimos.",
      conhecimento: "Elasticidade responde a variações repentinas, de forma automática.",
    },
    {
      topico: "Características da nuvem",
      subassunto: "Escalabilidade vertical e horizontal",
      dificuldade: 4,
      raciocinio: "Fortalecer a máquina é vertical. Somar máquinas é horizontal.",
      enunciado:
        "Uma equipe aumentou a memória de um servidor e, depois, acrescentou mais dois servidores ao sistema. Essas ações são, nessa ordem, escalabilidade",
      alternativas: [
        "horizontal e vertical",
        "vertical e horizontal",
        "vertical nos dois casos",
        "horizontal nos dois casos",
        "elástica nos dois casos",
      ],
      correta: 1,
      explicacao: "Aumentar a capacidade de um servidor é escalar na vertical. Acrescentar servidores é escalar na horizontal.",
      explicacaoErradas:
        "“horizontal e vertical” inverte os termos. “vertical nos dois casos” e “horizontal nos dois casos” ignoram que as ações são diferentes. “elástica nos dois casos” erra, pois não houve ajuste automático.",
      pegadinha: "Inverter os termos. Vertical sobe a potência da mesma máquina.",
      conhecimento: "Vertical: mais força. Horizontal: mais máquinas.",
    },
    {
      topico: "Modelos de implantação",
      subassunto: "Nuvem comunitária",
      dificuldade: 4,
      raciocinio: "Vários órgãos com requisitos comuns dividem a mesma estrutura.",
      enunciado:
        "Órgãos federais de segurança, com requisitos iguais de sigilo, dividem uma mesma infraestrutura de nuvem, fechada ao público. Esse modelo de implantação é o de nuvem",
      alternativas: ["pública", "privada", "híbrida", "comunitária", "distribuída"],
      correta: 3,
      explicacao: "A nuvem comunitária é dividida por organizações com interesses ou requisitos comuns.",
      explicacaoErradas:
        "“pública” é aberta ao público em geral. “privada” atende uma só organização. “híbrida” combina dois modelos. “distribuída” não é um modelo de implantação.",
      pegadinha: "Marcar privada porque o acesso é fechado. Aqui, são várias organizações.",
      conhecimento: "São quatro modelos: pública, privada, comunitária e híbrida.",
    },
    {
      topico: "Características da nuvem",
      subassunto: "Serviço medido",
      dificuldade: 4,
      raciocinio: "Pagar pelo consumo exige medir o consumo.",
      enunciado:
        "Um provedor registra o armazenamento e o processamento usados por cada cliente, e a fatura acompanha esse consumo. A característica da nuvem presente nesse caso é",
      alternativas: [
        "autosserviço sob demanda",
        "amplo acesso à rede",
        "agrupamento de recursos",
        "elasticidade rápida",
        "serviço medido",
      ],
      correta: 4,
      explicacao: "O serviço medido controla o uso dos recursos e permite pagar pelo que foi consumido.",
      explicacaoErradas:
        "“autosserviço sob demanda” é o cliente contratar recursos sozinho. “amplo acesso à rede” é usar vários tipos de aparelho. “agrupamento de recursos” é compartilhar a estrutura. “elasticidade rápida” é ajustar os recursos à demanda.",
      pegadinha: "Marcar elasticidade por lembrar de pagar conforme o uso. A medição é outra característica.",
      conhecimento: "Pay-per-use: paga-se apenas pelo que se usa.",
    },
    {
      topico: "Virtualização",
      subassunto: "Vários sistemas no mesmo equipamento",
      dificuldade: 4,
      raciocinio: "Sistemas isolados dividindo o mesmo hardware.",
      enunciado:
        "Um único servidor físico roda, ao mesmo tempo, Windows e Linux, isolados entre si, cada um com seu próprio sistema. A técnica usada é a",
      alternativas: ["virtualização", "escalabilidade", "criptografia", "compressão", "sincronização"],
      correta: 0,
      explicacao: "A virtualização permite que um hardware execute vários sistemas operacionais de forma simultânea e isolada.",
      explicacaoErradas:
        "“escalabilidade” trata de crescer em capacidade. “criptografia” protege dados. “compressão” reduz o tamanho de arquivos. “sincronização” mantém dados iguais em lugares diferentes.",
      pegadinha: "Achar que são precisos dois computadores para ter dois sistemas.",
      conhecimento: "A virtualização é uma das bases da computação em nuvem.",
    },
    {
      topico: "Vantagens e limites",
      subassunto: "Uso em um órgão público",
      dificuldade: 5,
      raciocinio: "A nuvem tira a máquina do prédio, mas passa a depender da rede.",
      enunciado: "Ao levar um sistema para a nuvem, um órgão público",
      alternativas: [
        "deixa de se preocupar com a segurança dos próprios dados",
        "dispensa servidores próprios, mas depende do acesso à rede",
        "precisa comprar com antecedência toda a capacidade de pico",
        "passa a usar os recursos para um único problema específico",
        "fica impedido de acessar o sistema por celulares e tablets",
      ],
      correta: 1,
      explicacao: "Não é preciso manter estrutura própria de servidores. Em troca, o acesso depende da rede.",
      explicacaoErradas:
        "“deixa de se preocupar” erra: a segurança segue sendo responsabilidade também do órgão. “comprar com antecedência” contraria o uso sob demanda. “único problema” erra: a nuvem serve a usos variados. “impedido de acessar” contraria o amplo acesso à rede.",
      pegadinha: "Ver a nuvem como solução sem limites. Sem rede, o acesso para.",
      conhecimento: "A estrutura muda de lugar, mas a responsabilidade pelos dados continua.",
    },
  ],
};
