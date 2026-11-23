import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-a09",
  resumo: {
    ideia:
      "Segurança da informação é proteger os dados para que só quem pode os veja, ninguém os altere sem permissão e eles estejam lá quando forem precisos. A prova cobra os princípios, firewall, IDS e IPS, os tipos de backup, a criptografia com chaves, a assinatura e o certificado digital, as pragas (malwares) e os golpes e ataques.",
    itens: [
      {
        termo: "Princípios",
        faz: "Confidencialidade: só quem tem autorização acessa. Integridade: o dado não foi alterado. Disponibilidade: o dado e o sistema estão acessíveis quando precisa. Autenticidade: a origem é quem diz ser. Não repúdio: o autor não pode negar que fez.",
        pista: "Sigla para lembrar: CIDA, mais o não repúdio.",
      },
      {
        termo: "Política de segurança",
        faz: "Define direitos, deveres e punições de cada um no uso dos recursos. Mesa limpa e tela limpa: não deixar papéis, pendrives e tela aberta à vista quando sair do lugar.",
      },
      {
        termo: "Senhas",
        faz: "Frases longas, com números e símbolos, diferentes em cada serviço. Evitar datas, nomes e sequências. A verificação em duas etapas acrescenta um segundo fator, como um código no celular.",
      },
      {
        termo: "Controles físicos e lógicos",
        faz: "Físicos: portas, catracas, cadeados, guardas, leitor biométrico na porta. Lógicos: feitos por programas, como senhas, criptografia, firewall e antivírus.",
      },
      {
        termo: "Firewall",
        faz: "Filtra o que entra e sai da rede conforme regras. Filtro de pacotes: olha cada pacote isolado (endereço e porta). Com controle de estado (stateful): acompanha a conexão do começo ao fim.",
        pista: "Firewall não substitui o antivírus.",
      },
      {
        termo: "IDS e IPS",
        faz: "IDS (sistema de detecção de intrusão): monitora e avisa, sem bloquear. IPS (sistema de prevenção de intrusão): detecta e também bloqueia.",
      },
      {
        termo: "Backup",
        faz: "Completo (normal): copia tudo e marca os arquivos como copiados. Incremental: copia o que mudou desde o último backup de qualquer tipo e marca. Diferencial: copia o que mudou desde o último completo e não marca.",
        pista: "Para restaurar: completo + todos os incrementais; ou completo + só o último diferencial.",
      },
      {
        termo: "Criptografia simétrica",
        faz: "Uma única chave cifra e decifra; as duas pontas precisam combinar essa chave antes. É rápida. Exemplos: AES, 3DES, Blowfish.",
      },
      {
        termo: "Criptografia assimétrica",
        faz: "Par de chaves: a pública pode ser dada a todos; a privada fica só com o dono. Para sigilo, cifra-se com a chave pública do destinatário, e só a privada dele decifra. Exemplo: RSA.",
      },
      {
        termo: "Assinatura digital",
        faz: "O remetente assina com a própria chave privada, e qualquer um confere com a chave pública dele. Garante autenticidade, integridade e não repúdio; sozinha, não dá sigilo.",
      },
      {
        termo: "Certificado digital",
        faz: "Documento eletrônico que liga uma chave pública a uma pessoa ou empresa, emitido por uma autoridade certificadora. No Brasil, a ICP-Brasil foi criada pela MP 2.200-2/2001. Tipo A: assinatura. Tipo S: sigilo. Tipo T: carimbo do tempo.",
      },
      {
        termo: "Malwares",
        faz: "Vírus: precisa de um arquivo hospedeiro e de ser executado. Worm: se espalha sozinho pela rede explorando falhas. Bot: worm que obedece ao invasor a distância; vários formam uma botnet. Cavalo de Troia: parece útil e esconde ações maliciosas. Ransomware: sequestra os dados e pede resgate.",
      },
      {
        termo: "Espiões e portas dos fundos",
        faz: "Spyware espiona: keylogger grava as teclas, screenlogger grava a tela e os cliques, adware mostra propaganda. Backdoor deixa uma entrada para o invasor voltar. Rootkit esconde a presença do invasor.",
      },
      {
        termo: "Golpes",
        faz: "Engenharia social: enganar a pessoa para ela entregar dados. Phishing: mensagem ou site falso que imita banco ou órgão. Pharming: altera o DNS e leva a vítima ao site falso mesmo digitando o endereço certo. Hoax: boato alarmante.",
      },
      {
        termo: "Ataques",
        faz: "DoS: tira o serviço do ar; no DDoS, muitos computadores atacam juntos. Força bruta: tentativa e erro de senhas. Sniffing: interceptar o tráfego. Spoofing: falsificar o remetente. Defacement: pichar a página do site. Spam: e-mail em massa não pedido.",
      },
    ],
  },
  questoes: [
    {
      topico: "Princípios",
      subassunto: "CIDA",
      dificuldade: 4,
      raciocinio: "Fora do ar = disponibilidade; alterado = integridade; lido sem permissão = confidencialidade; origem falsa = autenticidade.",
      enunciado:
        "Associe cada princípio de segurança à situação que o desrespeita.\n(1) Confidencialidade\n(2) Integridade\n(3) Disponibilidade\n(4) Autenticidade\n( ) O sistema de ocorrências fica fora do ar durante o plantão.\n( ) Um relatório é alterado no caminho entre o remetente e o destinatário.\n( ) Um servidor sem autorização lê os dados de uma investigação.\n( ) Uma mensagem parece ter sido enviada pelo chefe, mas veio de outra pessoa.\nA sequência correta, de cima para baixo, é",
      alternativas: ["2, 3, 1, 4.", "3, 2, 1, 4.", "3, 1, 2, 4.", "1, 2, 3, 4.", "3, 2, 4, 1."],
      correta: 1,
      explicacao:
        "Sistema fora do ar fere a disponibilidade (3). Relatório alterado fere a integridade (2). Leitura sem autorização fere a confidencialidade (1). Remetente falso fere a autenticidade (4).",
      explicacaoErradas:
        "As outras sequências trocam integridade com disponibilidade, integridade com confidencialidade ou confidencialidade com autenticidade.",
      pegadinha: "Ler sem permissão não altera nada: é confidencialidade, não integridade.",
      conhecimento: "O não repúdio impede que o autor negue ter enviado a mensagem.",
    },
    {
      topico: "Backup",
      subassunto: "Diferencial",
      dificuldade: 5,
      raciocinio: "Diferencial guarda tudo que mudou desde o último completo; basta o completo e o último diferencial.",
      enunciado:
        "Um órgão faz backup completo no domingo e backup diferencial toda noite, de segunda a sexta. Na sexta de manhã, antes do backup da noite, o disco do servidor queima. Para recuperar os dados até a noite de quinta, são necessários",
      alternativas: [
        "o completo de domingo e todos os diferenciais, da segunda até a quinta-feira.",
        "apenas o diferencial de quinta, que já contém todos os arquivos do servidor.",
        "apenas o completo de domingo, porque o diferencial não marca os arquivos.",
        "o diferencial de segunda e o de quinta, sem precisar do backup completo.",
        "o completo de domingo e apenas o diferencial feito na noite de quinta-feira.",
      ],
      correta: 4,
      explicacao:
        "Como o diferencial não marca os arquivos, cada um copia tudo o que mudou desde o completo. O de quinta já tem as mudanças de segunda a quinta; junto com o completo de domingo, recupera tudo.",
      explicacaoErradas:
        "Precisar de todos os backups da semana é o caso do incremental. O diferencial não tem os arquivos que não mudaram desde domingo, por isso o completo é necessário. Só o completo perderia a semana inteira. O de segunda é dispensável.",
      pegadinha: "Incremental pede todos; diferencial pede só o último.",
      conhecimento: "O incremental é o mais rápido de fazer, mas o mais trabalhoso de restaurar.",
    },
    {
      topico: "Criptografia",
      subassunto: "Assimétrica e sigilo",
      dificuldade: 5,
      raciocinio: "Sigilo = cifrar com a pública do destinatário; só a privada dele abre.",
      enunciado:
        "Ana quer mandar a Bruno uma mensagem que só ele consiga ler, usando criptografia assimétrica. Ana deve cifrar a mensagem com",
      alternativas: [
        "a própria chave privada; só a chave pública de Ana consegue decifrá-la.",
        "a própria chave pública; só a chave privada de Bruno consegue decifrá-la.",
        "a chave pública de Bruno; só a chave privada de Bruno consegue decifrá-la.",
        "a chave privada de Bruno, que Ana recebe junto com o certificado digital dele.",
        "uma chave única combinada antes, que serve para cifrar e para decifrar.",
      ],
      correta: 2,
      explicacao:
        "Na assimétrica, o que uma chave do par cifra só a outra decifra. Cifrando com a chave pública de Bruno, só a privada dele, que ninguém mais tem, abre a mensagem.",
      explicacaoErradas:
        "Cifrar com a própria privada é assinar: qualquer um com a pública de Ana lê. A pública de Ana não forma par com a privada de Bruno. A chave privada nunca é entregue a outra pessoa. Chave única combinada é criptografia simétrica.",
      pegadinha: "Assinar usa a privada de quem manda; dar sigilo usa a pública de quem recebe.",
      conhecimento: "A chave pública vai dentro do certificado digital; a privada fica só com o dono.",
    },
    {
      topico: "Criptografia",
      subassunto: "Assinatura digital",
      dificuldade: 5,
      raciocinio: "Assinatura = autenticidade, integridade e não repúdio; não é sigilo.",
      enunciado: "A assinatura digital, feita com a chave privada do remetente, garante",
      alternativas: [
        "autenticidade, integridade e não repúdio, mas, sozinha, não garante o sigilo.",
        "confidencialidade e disponibilidade, porque cifra a mensagem para o destinatário.",
        "apenas a confidencialidade, já que só o destinatário tem a chave pública do autor.",
        "a integridade, mas não a autoria, porque qualquer pessoa pode fazer a assinatura.",
        "o sigilo do conteúdo, desde que o destinatário use a própria chave privada.",
      ],
      correta: 0,
      explicacao:
        "Quem confere a assinatura com a chave pública do remetente sabe quem assinou (autenticidade), que nada mudou (integridade) e que o autor não pode negar (não repúdio). O conteúdo, porém, continua legível.",
      explicacaoErradas:
        "A assinatura não cifra para o destinatário nem cuida de disponibilidade. A chave pública é de todos, não só do destinatário. Só o dono da chave privada consegue assinar, por isso a autoria é garantida. O sigilo exige cifrar com a chave pública do destinatário.",
      pegadinha: "Documento assinado não é documento secreto.",
      conhecimento: "Para ter sigilo e assinatura, assina-se e depois cifra-se para o destinatário.",
    },
    {
      topico: "Malwares",
      subassunto: "Tipos",
      dificuldade: 4,
      raciocinio: "Parece útil = cavalo de Troia; pede resgate = ransomware; grava teclas = keylogger; se espalha sozinho = worm.",
      enunciado:
        "Associe cada praga à sua descrição.\n(1) Worm\n(2) Cavalo de Troia\n(3) Ransomware\n(4) Keylogger\n( ) Parece um programa útil, como um jogo, mas faz ações maliciosas escondidas.\n( ) Criptografa os arquivos da vítima e pede pagamento para devolvê-los.\n( ) Grava as teclas digitadas, como senhas e números de cartão.\n( ) Espalha-se sozinho pela rede, explorando falhas, sem precisar de outro arquivo.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 3, 4, 2.", "2, 4, 3, 1.", "3, 2, 4, 1.", "2, 3, 4, 1.", "2, 3, 1, 4."],
      correta: 3,
      explicacao:
        "Parece útil e esconde o ataque: cavalo de Troia (2). Sequestra os arquivos: ransomware (3). Grava teclas: keylogger (4). Espalha-se sozinho: worm (1).",
      explicacaoErradas:
        "As outras sequências trocam o ransomware com o keylogger, o worm com o cavalo de Troia ou o worm com o keylogger.",
      pegadinha: "O vírus precisa de um arquivo hospedeiro; o worm não.",
      conhecimento: "Keylogger é um tipo de spyware, programa que espiona o usuário.",
    },
    {
      topico: "Golpes",
      subassunto: "Pharming",
      dificuldade: 5,
      raciocinio: "Endereço certo e site falso, por alteração de DNS = pharming.",
      enunciado:
        "Um usuário digita corretamente o endereço do site do banco, mas é levado a uma página falsa idêntica, porque criminosos alteraram a tradução do nome do site no DNS. Esse golpe é chamado de",
      alternativas: ["phishing.", "hoax.", "spoofing.", "pharming.", "defacement."],
      correta: 3,
      explicacao:
        "No pharming, o DNS é envenenado: o nome certo passa a apontar para o IP do site falso, e a vítima não percebe porque digitou o endereço verdadeiro.",
      explicacaoErradas:
        "No phishing, a vítima clica num link ou abre uma mensagem falsa. Hoax é boato. Spoofing é falsificar o remetente de um e-mail. Defacement é pichar a página verdadeira do site.",
      pegadinha: "Se a vítima digitou o endereço certo e mesmo assim caiu no falso, é pharming.",
      conhecimento: "Conferir o cadeado e o certificado do site ajuda a perceber a página falsa.",
    },
    {
      topico: "Defesa",
      subassunto: "Firewall, IDS e IPS",
      dificuldade: 5,
      raciocinio: "IDS avisa, IPS bloqueia; firewall não dispensa antivírus.",
      enunciado:
        "Julgue as afirmativas como verdadeiras (V) ou falsas (F).\n( ) O IDS monitora o tráfego e avisa sobre tentativas de intrusão, mas não as bloqueia.\n( ) O IPS, além de detectar, pode bloquear o tráfego suspeito.\n( ) O firewall com controle de estado acompanha a conexão inteira, e não só cada pacote isolado.\n( ) Com o firewall ligado, o antivírus fica dispensável, pois o firewall barra todos os malwares.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, V, V, F.", "V, F, V, F.", "F, V, V, F.", "V, V, F, V.", "V, V, V, V."],
      correta: 0,
      explicacao:
        "IDS detecta e avisa (V). IPS detecta e bloqueia (V). O stateful acompanha o estado da conexão (V). A última é falsa: o firewall filtra o tráfego pelas regras, mas não examina cada arquivo atrás de pragas.",
      explicacaoErradas:
        "Marcar V na última trata o firewall como antivírus. Marcar F na primeira ou na segunda troca os papéis de IDS e IPS. Marcar F na terceira nega o que define o firewall com controle de estado.",
      pegadinha: "Detecção (IDS) só avisa; prevenção (IPS) age.",
      conhecimento: "O Windows já vem com firewall e antivírus próprios.",
    },
    {
      topico: "Ataques",
      subassunto: "DoS, DDoS, força bruta e sniffing",
      dificuldade: 4,
      raciocinio: "Pichar a página é defacement, não sniffing.",
      enunciado:
        "Sobre ataques, analise as afirmativas.\nI – O objetivo do DoS é deixar o serviço indisponível, não necessariamente invadir ou roubar dados.\nII – No DDoS, muitos computadores, muitas vezes de uma botnet, atacam ao mesmo tempo.\nIII – A força bruta tenta descobrir a senha por tentativa e erro.\nIV – Sniffing é a troca do conteúdo de uma página na web, como uma pichação.\nEstão corretas as afirmativas",
      alternativas: ["I e II, apenas.", "II, III e IV, apenas.", "I, II e III, apenas.", "I, II e IV, apenas.", "I, II, III e IV."],
      correta: 2,
      explicacao:
        "DoS derruba o serviço (I). DDoS usa muitas máquinas ao mesmo tempo (II). Força bruta testa senhas até acertar (III).",
      explicacaoErradas:
        "A IV está errada: pichar a página é defacement; sniffing é interceptar e inspecionar o tráfego da rede. Quem marca só I e II deixa de fora a força bruta.",
      pegadinha: "Sniffing \"fareja\" o tráfego; não muda nada na página.",
      conhecimento: "Bloquear a conta depois de várias senhas erradas dificulta a força bruta.",
    },
    {
      topico: "Certificação digital",
      subassunto: "ICP-Brasil e tipos",
      dificuldade: 5,
      raciocinio: "ICP-Brasil = MP 2.200-2/2001; A assina, S dá sigilo, T é carimbo do tempo.",
      enunciado: "Sobre a certificação digital no Brasil, assinale a alternativa correta.",
      alternativas: [
        "O certificado tipo S serve para assinar documentos, e o tipo A serve só para dar sigilo.",
        "O certificado digital mostra a chave privada do titular, para que todos confiram a assinatura.",
        "A ICP-Brasil foi criada pela Lei Geral de Proteção de Dados, de 2018, que trata das assinaturas digitais.",
        "O carimbo do tempo garante que o documento está cifrado e não pode ser lido por terceiros.",
        "A ICP-Brasil foi criada por medida provisória de 2001, e o tipo T funciona como carimbo do tempo.",
      ],
      correta: 4,
      explicacao:
        "A MP 2.200-2/2001 instituiu a ICP-Brasil e deu validade jurídica aos documentos assinados com certificados dela. O tipo T é o carimbo do tempo, que prova que um documento existia em certa data e hora.",
      explicacaoErradas:
        "O tipo A é o de assinatura e o S, o de sigilo. O certificado traz a chave pública, nunca a privada. A LGPD (Lei 13.709/2018) trata de dados pessoais, não criou a ICP-Brasil. O carimbo do tempo marca data e hora; não cifra o documento.",
      pegadinha: "A de assinatura, S de sigilo, T de tempo.",
      conhecimento: "A autoridade certificadora é quem emite o certificado e garante quem é o titular.",
    },
    {
      topico: "Boas práticas",
      subassunto: "Senhas",
      dificuldade: 4,
      raciocinio: "Senha boa é longa, variada e diferente em cada serviço.",
      enunciado: "Segundo as boas práticas de segurança, a forma mais segura de criar e cuidar das senhas é",
      alternativas: [
        "usar a data de nascimento com símbolos no fim, fácil de lembrar e difícil de adivinhar.",
        "usar uma frase longa, com números e símbolos, e uma senha diferente em cada serviço.",
        "usar a mesma senha forte em todos os serviços, para não ter de anotá-la em lugar algum.",
        "trocar só a última letra da senha antiga a cada mês, mantendo o resto para não esquecer.",
        "anotar as senhas num papel colado no monitor, desde que a sala tenha controle de acesso.",
      ],
      correta: 1,
      explicacao:
        "Frases longas com números e símbolos são difíceis de adivinhar e fáceis de lembrar. Usar uma senha por serviço evita que um vazamento abra todas as contas.",
      explicacaoErradas:
        "Datas pessoais são das primeiras tentativas dos criminosos. A mesma senha em tudo faz um vazamento abrir todas as contas. Mudar só um caractere é fácil de prever. Papel no monitor desrespeita a política de mesa limpa.",
      pegadinha: "Senha \"forte\" repetida em vários sites deixa de ser segura.",
      conhecimento: "Um gerenciador de senhas ajuda a ter uma senha diferente em cada serviço.",
    },
  ],
};
