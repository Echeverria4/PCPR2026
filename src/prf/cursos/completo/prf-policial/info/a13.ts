import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-13",
  resumo: {
    ideia:
      "O antimalware procura e remove ameaças. O firewall controla o tráfego entre redes. Um não substitui o outro.",
    itens: [
      {
        termo: "Detecção por assinatura",
        faz: "Compara os arquivos com uma base de ameaças conhecidas. Precisa de atualização.",
      },
      {
        termo: "Detecção heurística",
        faz: "Analisa a estrutura e as características do código. Alcança ameaças ainda desconhecidas.",
      },
      {
        termo: "Detecção por comportamento",
        faz: "Observa o que o programa faz enquanto roda.",
      },
      {
        termo: "Antispyware",
        faz: "Foca em programas que espiam o usuário.",
      },
      {
        termo: "Antispam",
        faz: "Filtra mensagens indesejadas e costuma precisar de um período de treinamento.",
      },
      {
        termo: "Firewall",
        faz: "Pode ser software, hardware ou os dois. Regula o tráfego conforme regras.",
      },
      {
        termo: "Filtro de pacotes",
        faz: "Decide por dados como endereço, porta e protocolo.",
      },
      {
        termo: "Firewall pessoal",
        faz: "Protege uma máquina. Exemplos: Firewall do Windows e IPTables, no Linux.",
      },
    ],
    cuidado:
      "O que respeita as regras do firewall passa normalmente, mesmo que traga um arquivo infectado.",
  },
  questoes: [
    {
      topico: "Antimalware",
      subassunto: "Detecção heurística",
      dificuldade: 5,
      raciocinio: "Ameaça fora da base exige analisar o próprio código.",
      enunciado:
        "Um antivírus bloqueou um arquivo novo, ainda ausente da base de ameaças, porque a estrutura do código parecia maliciosa. O método usado foi o de detecção",
      alternativas: [
        "por assinatura, que compara o arquivo com a base conhecida",
        "por quarentena, que apaga todo programa novo instalado",
        "por firewall, que analisa só os pacotes que entram na rede",
        "heurística, que analisa a estrutura e os traços do código",
        "por backup, que compara o arquivo com a sua última cópia",
      ],
      correta: 3,
      explicacao: "A heurística examina a estrutura e as características do código, e assim alcança ameaças desconhecidas.",
      explicacaoErradas:
        "“por assinatura” depende da base, e o arquivo não está nela. “por quarentena” não é método de detecção. “por firewall” trata de tráfego. “por backup” não é método de antivírus.",
      pegadinha: "Achar que antivírus só encontra o que já está na base.",
      conhecimento: "Assinatura: o conhecido. Heurística: o suspeito.",
    },
    {
      topico: "Firewall",
      subassunto: "Firewall e antivírus",
      dificuldade: 5,
      raciocinio: "O firewall olha o tráfego, e não o conteúdo do anexo aberto.",
      enunciado:
        "Com o firewall ligado, um servidor abre um anexo infectado, recebido por um e-mail que as regras permitem. Nessa situação,",
      alternativas: [
        "o firewall não impede a infecção, pois não faz o papel do antivírus",
        "o firewall remove o vírus, pois analisa todo arquivo aberto na máquina",
        "a infecção é impossível, pois o firewall bloqueia todo tipo de anexo",
        "o e-mail é apagado, pois o firewall lê o conteúdo de toda mensagem",
        "o antivírus deixa de ser preciso, pois o firewall faz o papel dos dois",
      ],
      correta: 0,
      explicacao: "O tráfego respeitou as regras e passou. Firewall não substitui antivírus.",
      explicacaoErradas:
        "“remove o vírus” é papel do antivírus. “bloqueia todo tipo de anexo” e “lê o conteúdo de toda mensagem” atribuem ao firewall o que ele não faz. “faz o papel dos dois” nega a diferença entre as ferramentas.",
      pegadinha: "Achar que firewall ligado protege contra tudo.",
      conhecimento: "As duas proteções se somam.",
    },
    {
      topico: "Firewall",
      subassunto: "Formas de firewall",
      dificuldade: 4,
      raciocinio: "Desconfiar de “só” e “todo”.",
      enunciado: "Sobre firewall, é correto afirmar que",
      alternativas: [
        "só existe como equipamento físico, instalado entre as redes",
        "só existe como programa, instalado no computador do usuário",
        "bloqueia todo o tráfego, inclusive o que está dentro das regras",
        "só funciona na internet, e nunca entre duas redes internas",
        "pode ser software, hardware ou uma combinação dos dois tipos",
      ],
      correta: 4,
      explicacao: "O firewall pode ser programa, equipamento ou a soma dos dois.",
      explicacaoErradas:
        "“só existe como equipamento” e “só existe como programa” limitam o conceito. “bloqueia todo o tráfego” ignora as regras. “só funciona na internet” erra: ele regula o tráfego entre redes em geral.",
      pegadinha: "Pensar no firewall apenas como programa do Windows.",
      conhecimento: "O que não viola as regras segue normalmente.",
    },
    {
      topico: "Antimalware",
      subassunto: "Antispam",
      dificuldade: 4,
      raciocinio: "O filtro aprende com as correções.",
      enunciado:
        "Um filtro antispam começa marcando mensagens legítimas como lixo e melhora conforme o usuário corrige as marcações. Isso ocorre porque",
      alternativas: [
        "o filtro está infectado e precisa ser reinstalado pelo usuário",
        "esses filtros costumam precisar de um período de treinamento",
        "o antispam bloqueia por padrão toda mensagem que tenha link",
        "o provedor apaga as mensagens que ficam um dia sem leitura",
        "o antispam só avalia o endereço IP de quem recebe a mensagem",
      ],
      correta: 1,
      explicacao: "Muitos filtros aprendem o que é ou não spam, e por isso precisam de um período de treinamento.",
      explicacaoErradas:
        "“está infectado” não explica o aprendizado. “bloqueia por padrão” inventa uma regra. “o provedor apaga” não trata de filtro. “só avalia o endereço IP” limita o funcionamento.",
      pegadinha: "Achar que erro no início indica defeito no filtro.",
      conhecimento: "Marcar o que é spam, e o que não é, ajuda o filtro.",
    },
    {
      topico: "Antimalware",
      subassunto: "Base de assinaturas",
      dificuldade: 4,
      raciocinio: "Sem atualização, a base não conhece as ameaças novas.",
      enunciado:
        "Um antivírus que usa apenas detecção por assinatura está com a base desatualizada há meses. O maior risco nesse caso é",
      alternativas: [
        "apagar arquivos legítimos, pois toda base antiga faz isso",
        "bloquear a internet, pois o firewall depende dessa base",
        "não reconhecer as ameaças surgidas depois da última base",
        "perder as ameaças antigas, pois a base antiga fica vazia",
        "reduzir a velocidade, sem nenhum efeito sobre a proteção",
      ],
      correta: 2,
      explicacao: "A assinatura só reconhece o que está na base. O que surgiu depois passa sem alerta.",
      explicacaoErradas:
        "“apagar arquivos legítimos” não decorre da base antiga. “bloquear a internet” liga coisas sem relação. “perder as ameaças antigas” erra: elas seguem na base. “sem nenhum efeito” nega o risco.",
      pegadinha: "Achar que antivírus instalado basta, mesmo sem atualização.",
      conhecimento: "Base atualizada é parte da proteção.",
    },
    {
      topico: "Firewall",
      subassunto: "Filtro de pacotes",
      dificuldade: 5,
      raciocinio: "Regra por porta: lembrar qual serviço usa a porta 23.",
      enunciado:
        "Em um firewall com filtro de pacotes, o administrador bloqueou a entrada pela porta 23. O efeito dessa regra é",
      alternativas: [
        "barrar as conexões Telnet vindas de fora para a rede interna",
        "barrar conexões SSH, pois a porta 23 é a padrão desse protocolo",
        "apagar os vírus recebidos pela porta de e-mail da rede interna",
        "impedir o envio de e-mails, pois a porta 23 é a padrão do SMTP",
        "bloquear as páginas web, pois a porta 23 é a padrão do HTTP",
      ],
      correta: 0,
      explicacao: "A porta 23 é a padrão do Telnet. O filtro decide com base em dados como a porta.",
      explicacaoErradas:
        "“conexões SSH” usam a porta 22. “apagar os vírus” não é função do filtro. “SMTP” usa as portas 25 ou 587. “HTTP” usa a porta 80.",
      pegadinha: "Trocar as portas 22 e 23.",
      conhecimento: "Filtro de pacotes olha endereço, porta e protocolo.",
    },
  ],
};
