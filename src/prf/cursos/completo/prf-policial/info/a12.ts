import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-12",
  resumo: {
    ideia:
      "Malware é todo programa feito para causar dano ou roubar dados. Para separar um do outro, pergunte: precisa de hospedeiro, se espalha sozinho, espia ou abre passagem?",
    itens: [
      {
        termo: "Vírus",
        faz: "Liga-se a um arquivo e depende de ele ser executado.",
      },
      {
        termo: "Tipos de vírus",
        faz: "Boot: age antes do sistema. Macro: age em documentos. Polimórfico: muda de forma. Time bomb: espera uma data.",
      },
      {
        termo: "Worm",
        faz: "Replica-se sozinho, sem hospedeiro, explorando falhas.",
      },
      {
        termo: "Cavalo de troia",
        faz: "Parece um programa útil, mas traz uma função maliciosa escondida.",
      },
      {
        termo: "Ransomware",
        faz: "Cifra ou bloqueia os dados e cobra resgate.",
      },
      {
        termo: "Bot e botnet",
        faz: "Bot é a máquina controlada à distância. Botnet é a rede dessas máquinas.",
      },
      {
        termo: "Spyware e keylogger",
        faz: "Espiam o usuário. O keylogger registra o que é teclado.",
      },
      {
        termo: "Backdoor e rootkit",
        faz: "Backdoor permite a volta do invasor. Rootkit esconde e mantém a presença dele.",
      },
      {
        termo: "Phishing e pharming",
        faz: "Phishing engana com mensagem ou página falsa. Pharming corrompe o DNS.",
      },
      {
        termo: "DoS e DDoS",
        faz: "Tiram um serviço do ar com excesso de pedidos. No DDoS, várias máquinas atacam juntas.",
      },
    ],
    cuidado:
      "Vírus precisa de hospedeiro. Worm não precisa. Essa é a diferença que mais cai.",
  },
  questoes: [
    {
      topico: "Vírus e worm",
      subassunto: "Propagação sem hospedeiro",
      dificuldade: 5,
      raciocinio: "Sem arquivo hospedeiro e sem ação do usuário: worm.",
      enunciado:
        "Um programa malicioso se espalhou pela rede de um órgão explorando uma falha do sistema, sem estar anexado a arquivo e sem que ninguém o executasse. Trata-se de",
      alternativas: [
        "worm, que se replica sozinho e explora falhas na rede do órgão",
        "vírus de macro, que depende de um documento aberto pelo usuário",
        "vírus de boot, que age no setor de carga antes do sistema",
        "cavalo de troia, que precisa ser instalado pelo próprio usuário",
        "keylogger, que se propaga pelo registro das teclas digitadas",
      ],
      correta: 0,
      explicacao: "O worm se replica sozinho, não precisa de hospedeiro e explora vulnerabilidades.",
      explicacaoErradas:
        "“vírus de macro” e “vírus de boot” dependem de hospedeiro. “cavalo de troia” depende de o usuário instalar. “keylogger” registra teclas e não se propaga dessa forma.",
      pegadinha: "Chamar tudo de vírus. O enunciado afasta o hospedeiro e a execução.",
      conhecimento: "Worm consome recursos da rede ao se espalhar.",
    },
    {
      topico: "Códigos maliciosos",
      subassunto: "Ransomware",
      dificuldade: 4,
      raciocinio: "Dados presos e pedido de pagamento.",
      enunciado:
        "Os arquivos de um posto foram cifrados, e uma mensagem na tela exige pagamento para devolver o acesso. Esse ataque é típico de",
      alternativas: [
        "spyware, que cifra os dados para ler o conteúdo depois",
        "phishing, que bloqueia arquivos sem nenhuma ação da vítima",
        "rootkit, que cobra para manter a máquina oculta na rede",
        "hoax, que cifra os arquivos por meio de um boato por e-mail",
        "ransomware, que sequestra os dados e cobra por um resgate",
      ],
      correta: 4,
      explicacao: "O ransomware cifra ou bloqueia os dados e exige pagamento.",
      explicacaoErradas:
        "“spyware” espia, sem sequestrar os dados. “phishing” engana a vítima para obter dados. “rootkit” esconde o invasor. “hoax” é boato.",
      pegadinha: "Achar que pagar garante a volta dos dados. Não há essa garantia.",
      conhecimento: "A melhor defesa é ter cópia de segurança fora da máquina.",
    },
    {
      topico: "Golpes",
      subassunto: "Phishing e pharming",
      dificuldade: 5,
      raciocinio: "Endereço digitado certo e página falsa: o problema está no DNS.",
      enunciado:
        "Um agente digitou corretamente o endereço do banco, mas foi levado a uma página falsa, porque a resolução de nomes tinha sido adulterada. Esse golpe é o",
      alternativas: [
        "phishing, que depende de um link falso enviado à vítima",
        "pharming, que corrompe a resolução de nomes no DNS",
        "hoax, que espalha um boato sem redirecionar o usuário",
        "defacement, que muda a aparência da página verdadeira",
        "força bruta, que testa senhas até acertar a do usuário",
      ],
      correta: 1,
      explicacao: "No pharming, o nome certo leva a um endereço falso, porque o DNS foi corrompido.",
      explicacaoErradas:
        "“phishing” depende de a vítima cair em mensagem ou link. “hoax” é boato. “defacement” altera o site verdadeiro. “força bruta” testa senhas.",
      pegadinha: "Marcar phishing por ver uma página falsa. Aqui, a vítima digitou o endereço certo.",
      conhecimento: "Phishing engana a pessoa. Pharming engana a resolução de nomes.",
    },
    {
      topico: "Códigos maliciosos",
      subassunto: "Rootkit",
      dificuldade: 5,
      raciocinio: "A função central é esconder e continuar presente.",
      enunciado:
        "Depois de invadir um servidor, um atacante instalou um conjunto de programas para esconder seus processos e seguir presente na máquina sem ser notado. Esse conjunto é um",
      alternativas: [
        "exploit, que serve para esconder os processos após a invasão",
        "hoax, que mantém o invasor presente por meio de boatos",
        "adware, que apaga os registros do invasor e mostra anúncios",
        "rootkit, que esconde a presença e assegura o acesso à máquina",
        "keylogger, que oculta os arquivos e registra o que foi teclado",
      ],
      correta: 3,
      explicacao: "O rootkit reúne técnicas para esconder a presença do invasor e assegurar que ela continue.",
      explicacaoErradas:
        "“exploit” aproveita uma falha para entrar. “hoax” é boato. “adware” mostra anúncios. “keylogger” registra teclas.",
      pegadinha: "Trocar rootkit por exploit. Um age depois da invasão, o outro permite entrar.",
      conhecimento: "Exploit abre caminho. Rootkit se esconde. Backdoor garante a volta.",
    },
    {
      topico: "Tipos de vírus",
      subassunto: "Vírus de boot",
      dificuldade: 5,
      raciocinio: "Formatação rápida não reescreve todo o dispositivo.",
      enunciado: "Um pendrive com vírus de boot passou por formatação rápida. Sobre essa situação, é correto afirmar que",
      alternativas: [
        "a formatação rápida não garante a remoção do vírus",
        "o vírus saiu, pois toda formatação limpa o setor de carga",
        "o vírus só age depois que o sistema termina de carregar",
        "esse vírus só infecta documentos com macros do Office",
        "o pendrive não carrega vírus, pois só guarda arquivos",
      ],
      correta: 0,
      explicacao: "O vírus de boot fica no setor de carga, e a formatação rápida não garante a limpeza dele.",
      explicacaoErradas:
        "“toda formatação limpa” erra: a rápida não garante isso. “depois que o sistema termina de carregar” inverte: ele age antes. “documentos com macros” descreve outro tipo. “só guarda arquivos” erra: o pendrive também pode levar vírus.",
      pegadinha: "Confiar na formatação rápida como limpeza completa.",
      conhecimento: "O vírus de boot age antes do sistema operacional.",
    },
    {
      topico: "Tipos de vírus",
      subassunto: "Vírus polimórfico",
      dificuldade: 4,
      raciocinio: "Forma muda, função fica.",
      enunciado:
        "Um vírus altera sua forma a cada infecção, mas mantém a mesma função, o que dificulta a detecção por assinatura. Esse vírus é",
      alternativas: [
        "de macro, que depende de um documento do Office aberto",
        "polimórfico, que muda de forma e mantém a sua função",
        "de boot, que se instala apenas no setor de carga do disco",
        "time bomb, que fica latente até uma data programada",
        "stealth, que se remove da memória por um período curto",
      ],
      correta: 1,
      explicacao: "O vírus polimórfico muda de forma a cada infecção e conserva a mesma função.",
      explicacaoErradas:
        "“de macro” e “de boot” são definidos pelo lugar em que agem. “time bomb” espera uma data. “stealth” tenta se esconder da detecção de outro modo.",
      pegadinha: "Marcar stealth porque o vírus é difícil de achar. A pista é a mudança de forma.",
      conhecimento: "Quem muda de forma exige mais do que comparar assinaturas.",
    },
    {
      topico: "Ataques",
      subassunto: "Botnet e DDoS",
      dificuldade: 5,
      raciocinio: "Muitas máquinas sob comando e um serviço derrubado.",
      enunciado:
        "Milhares de computadores infectados, sob o comando de um atacante, enviam pedidos ao mesmo tempo e derrubam um portal de multas. Esse cenário reúne",
      alternativas: [
        "spyware e hoax, pois a queda vem de um boato na rede",
        "phishing e adware, pois a queda vem de anúncios falsos",
        "keylogger e DoS, pois uma só máquina envia os pedidos",
        "rootkit e pharming, pois o site foi levado a outro DNS",
        "botnet e DDoS, pois várias máquinas atacam em grupo",
      ],
      correta: 4,
      explicacao: "A botnet é a rede de máquinas controladas. O DDoS é o ataque distribuído que tira o serviço do ar.",
      explicacaoErradas:
        "“spyware e hoax” e “phishing e adware” não derrubam serviços por excesso de pedidos. “keylogger e DoS” fala em uma só máquina, contra o enunciado. “rootkit e pharming” não tratam de sobrecarga.",
      pegadinha: "Marcar DoS sem notar que há muitas máquinas.",
      conhecimento: "Esse ataque atinge a disponibilidade.",
    },
  ],
};
