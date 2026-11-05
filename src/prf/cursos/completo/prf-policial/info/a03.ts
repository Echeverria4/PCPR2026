import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-03",
  resumo: {
    ideia:
      "Internet, intranet e extranet usam as mesmas tecnologias. O que muda é quem pode entrar.",
    itens: [
      {
        termo: "Internet",
        faz: "Rede pública mundial, aberta a qualquer pessoa conectada.",
      },
      {
        termo: "Intranet",
        faz: "Rede privada da organização. Usa TCP/IP, navegador e servidores web, mas com acesso restrito.",
        pista: "Pode funcionar sem ligação com a internet.",
      },
      {
        termo: "Extranet",
        faz: "Extensão da intranet para usuários externos autorizados, como parceiros e fornecedores.",
      },
      {
        termo: "Acesso de fora",
        faz: "Com autorização, é possível entrar em sistemas internos a partir de outro local.",
      },
      {
        termo: "VPN",
        faz: "Usa a infraestrutura da internet e cria um túnel protegido para os dados.",
        pista: "O caminho é público, mas o conteúdo fica protegido.",
      },
    ],
    cuidado:
      "Intranet não é uma rede com tecnologia própria. A diferença em relação à internet é o acesso restrito.",
  },
  questoes: [
    {
      topico: "Extranet",
      subassunto: "Usuário externo autorizado",
      dificuldade: 4,
      raciocinio: "Quem acessa é de fora, mas com permissão, e só em uma parte.",
      enunciado:
        "Uma empresa credenciada acessa, com login e pela internet, uma parte do sistema interno de um órgão para enviar laudos de vistoria. Esse ambiente é um exemplo de",
      alternativas: [
        "intranet, pois todo sistema interno é uma intranet",
        "internet, pois qualquer pessoa pode acessar esse sistema",
        "extranet, pois estende o acesso a parceiros autorizados",
        "rede local, pois o sistema fica no prédio do próprio órgão",
        "nuvem pública, pois o acesso ocorre por meio da internet",
      ],
      correta: 2,
      explicacao: "Extranet é a parte da rede privada aberta a usuários externos autorizados, como parceiros.",
      explicacaoErradas:
        "“intranet” atende o público interno. “internet” é aberta, e aqui há login e credenciamento. “rede local” trata do alcance, e não de quem acessa. “nuvem pública” trata de onde os serviços ficam hospedados.",
      pegadinha: "Ver que há login e concluir que é intranet. Aqui, quem entra é de fora da organização.",
      conhecimento: "Extranet = intranet + acesso controlado para externos.",
    },
    {
      topico: "Intranet",
      subassunto: "Tecnologias usadas",
      dificuldade: 4,
      raciocinio: "O que restringe é o acesso, e não a tecnologia.",
      enunciado: "Sobre a intranet de um órgão público, é correto afirmar que ela",
      alternativas: [
        "exige protocolos próprios, incompatíveis com os da internet",
        "não pode ser acessada por meio de um navegador comum da web",
        "é pública, pois pertence a uma instituição da administração",
        "usa as tecnologias da internet, mas com acesso restrito",
        "só funciona se estiver conectada de forma contínua à internet",
      ],
      correta: 3,
      explicacao: "A intranet usa TCP/IP, navegador e servidores web, como a internet. A diferença é o acesso restrito.",
      explicacaoErradas:
        "“protocolos próprios” e “não pode ser acessada por meio de um navegador” erram: ela usa os mesmos recursos da internet. “é pública” confunde o dono com o tipo de acesso. “só funciona se estiver conectada” erra: ela pode funcionar isolada.",
      pegadinha: "Achar que uma rede privada precisa de tecnologia própria.",
      conhecimento: "Mesma tecnologia, público diferente.",
    },
    {
      topico: "VPN",
      subassunto: "Como funciona",
      dificuldade: 5,
      raciocinio: "A VPN aproveita a rede pública e protege o que passa por ela.",
      enunciado:
        "Uma superintendência quer ligar suas unidades pela internet, sem contratar cabos próprios, mantendo os dados protegidos no caminho. A solução adequada é uma",
      alternativas: [
        "VPN, que cria um túnel protegido sobre a infraestrutura pública",
        "extranet, que dispensa criptografia por usar acesso restrito",
        "intranet, que funciona como cabo físico entre as suas unidades",
        "rede P2P, que oculta os dados de todos os demais computadores",
        "VLAN, que protege os dados que trafegam pela rede da internet",
      ],
      correta: 0,
      explicacao: "A VPN usa a internet como caminho, mas cria um túnel protegido, em geral com criptografia.",
      explicacaoErradas:
        "“extranet” define quem acessa, e não protege o caminho. “intranet” não é um cabo físico. “rede P2P” define papéis entre máquinas e não oculta nada. “VLAN” separa segmentos de uma rede local, e não protege o tráfego pela internet.",
      pegadinha: "Achar que VPN exige linha própria. Ela usa a infraestrutura pública.",
      conhecimento: "VPN: rede privada sobre infraestrutura pública.",
    },
    {
      topico: "Comparação",
      subassunto: "Quem acessa cada rede",
      dificuldade: 4,
      raciocinio: "Pensar em quem está autorizado em cada uma.",
      enunciado: "Quanto ao público de cada rede, a relação correta é",
      alternativas: [
        "internet: só usuários cadastrados; intranet: público em geral",
        "extranet: público em geral; intranet: só parceiros externos",
        "internet: público em geral; extranet: externos autorizados",
        "intranet: externos autorizados; extranet: só os servidores",
        "extranet: só os servidores; internet: só parceiros externos",
      ],
      correta: 2,
      explicacao: "A internet é aberta ao público. A extranet libera parte da rede privada a externos autorizados.",
      explicacaoErradas:
        "“internet: só usuários cadastrados” erra: ela é aberta. “extranet: público em geral” erra: o acesso é autorizado. “intranet: externos autorizados” troca as duas redes. “extranet: só os servidores” descreve a intranet.",
      pegadinha: "Trocar intranet por extranet. O prefixo “extra” indica quem vem de fora.",
      conhecimento: "Internet: todos. Intranet: internos. Extranet: internos e externos autorizados.",
    },
    {
      topico: "Intranet",
      subassunto: "Rede sem internet",
      dificuldade: 5,
      raciocinio: "A intranet depende da rede interna, e não da internet.",
      enunciado:
        "O link de internet de um posto caiu, mas a rede interna continua ligada. O sistema interno está em um servidor do próprio prédio. Nessa situação, os agentes",
      alternativas: [
        "perdem a intranet, pois ela depende sempre da internet",
        "acessam a intranet só por meio de uma VPN, pois o link caiu",
        "podem seguir usando a intranet pela rede interna do posto",
        "passam a usar a extranet, que assume no lugar da intranet",
        "só acessam por cabo coaxial, pois a rede sem fio foi desligada",
      ],
      correta: 2,
      explicacao: "A intranet roda na rede interna. Se o servidor está no prédio, ela continua a funcionar.",
      explicacaoErradas:
        "“perdem a intranet” supõe uma dependência que não existe. “só por meio de uma VPN” erra: a VPN usa a internet, que caiu. “passam a usar a extranet” erra: ela não substitui a intranet. “cabo coaxial” não tem relação com o caso.",
      pegadinha: "Associar navegador a internet. O navegador também abre sistemas internos.",
      conhecimento: "Intranet pode existir sem ligação com a internet.",
    },
    {
      topico: "Acesso remoto",
      subassunto: "Entrar de fora do prédio",
      dificuldade: 5,
      raciocinio: "O acesso de fora é possível, mas precisa ser autorizado e protegido.",
      enunciado:
        "Em viagem, um servidor precisa consultar um sistema disponível apenas na rede interna do órgão, usando a internet do hotel. Esse acesso",
      alternativas: [
        "é impossível, pois a rede interna nunca aceita conexão externa",
        "torna o sistema público para todos os usuários da internet",
        "é possível, se autorizado, e pode usar uma VPN para proteção",
        "exige que o hotel esteja na mesma rede local do próprio órgão",
        "dispensa identificação, pois o servidor já pertence ao órgão",
      ],
      correta: 2,
      explicacao: "Com autorização, é possível entrar em sistemas internos de fora. A VPN protege esse caminho.",
      explicacaoErradas:
        "“é impossível” ignora o acesso remoto autorizado. “torna o sistema público” erra: o acesso segue restrito. “mesma rede local” erra: a VPN liga redes distantes. “dispensa identificação” erra: o controle de acesso continua.",
      pegadinha: "Achar que privado significa acessível só de dentro do prédio.",
      conhecimento: "Restrito quer dizer controlado, e não preso a um local.",
    },
  ],
};
