import type { Question } from "../../lib/types";

export const QUESTOES_TI: Question[] = [
  {
    id: "ti-001",
    materia: "ti",
    topico: "Segurança da informação",
    enunciado:
      "O princípio de segurança da informação que garante que uma informação não seja alterada de forma indevida ou não autorizada durante seu ciclo de vida é a:",
    alternativas: [
      "Confidencialidade",
      "Integridade",
      "Disponibilidade",
      "Autenticidade",
      "Irretratabilidade",
    ],
    correta: 1,
    explicacao:
      "Integridade é o princípio que assegura que os dados permaneçam completos e inalterados, exceto por modificações autorizadas. Confidencialidade protege contra acesso não autorizado; disponibilidade garante acesso quando necessário; autenticidade garante a identidade da origem; irretratabilidade (não repúdio) impede que o autor negue a autoria de uma ação.",
    origem: "banco",
  },
  {
    id: "ti-002",
    materia: "ti",
    topico: "Malware e ataques cibernéticos",
    enunciado:
      "Um tipo de malware que criptografa os arquivos da vítima e exige pagamento de resgate para restaurar o acesso é conhecido como:",
    alternativas: ["Spyware", "Ransomware", "Adware", "Worm", "Trojan bancário"],
    correta: 1,
    explicacao:
      "Ransomware é o malware que sequestra dados por criptografia e exige resgate (\"ransom\") para liberar o acesso. Spyware coleta informações sem consentimento; adware exibe propaganda indesejada; worm se autorreplica pela rede; trojan bancário rouba credenciais financeiras.",
    origem: "banco",
  },
  {
    id: "ti-003",
    materia: "ti",
    topico: "LGPD",
    enunciado:
      "Segundo a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), dados sobre origem racial ou étnica, convicção religiosa e dados genéticos ou biométricos, quando vinculados a uma pessoa natural, são classificados como:",
    alternativas: [
      "Dados pessoais comuns",
      "Dados anonimizados",
      "Dados públicos",
      "Dados pessoais sensíveis",
      "Dados de titular incapaz",
    ],
    correta: 3,
    explicacao:
      "A LGPD (art. 5º, II) define como \"dados pessoais sensíveis\" aqueles sobre origem racial/étnica, convicção religiosa, opinião política, filiação sindical, dados de saúde ou vida sexual, e dados genéticos ou biométricos, sujeitos a tratamento mais restritivo.",
    origem: "banco",
  },
  {
    id: "ti-004",
    materia: "ti",
    topico: "Redes de computadores",
    enunciado:
      "O protocolo responsável por traduzir nomes de domínio (como \"pcpr.pr.gov.br\") em endereços IP na internet é o:",
    alternativas: ["HTTP", "DNS", "SMTP", "FTP", "DHCP"],
    correta: 1,
    explicacao:
      "DNS (Domain Name System) converte nomes de domínio legíveis por humanos em endereços IP. HTTP transfere páginas web; SMTP envia e-mails; FTP transfere arquivos; DHCP atribui endereços IP dinamicamente aos dispositivos de rede.",
    origem: "banco",
  },
  {
    id: "ti-005",
    materia: "ti",
    topico: "Criptografia básica",
    enunciado:
      "Na criptografia assimétrica, para enviar uma mensagem sigilosa que somente o destinatário possa ler, o remetente deve cifrar a mensagem com:",
    alternativas: [
      "A chave privada do remetente",
      "A chave pública do remetente",
      "A chave pública do destinatário",
      "Uma chave simétrica compartilhada previamente por telefone",
      "A chave privada do destinatário",
    ],
    correta: 2,
    explicacao:
      "Na criptografia assimétrica, o que é cifrado com a chave pública de alguém só pode ser decifrado com a respectiva chave privada, que só o destinatário possui. Assim, o remetente cifra com a chave pública do destinatário para garantir sigilo.",
    origem: "banco",
  },
  {
    id: "ti-006",
    materia: "ti",
    topico: "Computação forense digital",
    enunciado:
      "No contexto da perícia forense computacional, a etapa que consiste em preservar a integridade dos dados originais, geralmente por meio de cópia bit a bit (imagem forense) do dispositivo, denomina-se:",
    alternativas: [
      "Análise de metadados",
      "Aquisição de dados",
      "Triagem digital",
      "Cadeia de custódia documental",
      "Engenharia reversa",
    ],
    correta: 1,
    explicacao:
      "A aquisição de dados é a fase em que se cria uma cópia forense (imagem bit a bit) do dispositivo original, preservando-o intacto e garantindo que a análise subsequente seja feita sobre a cópia, sem alterar a evidência original.",
    origem: "banco",
  },
  {
    id: "ti-007",
    materia: "ti",
    topico: "Sistemas operacionais",
    enunciado:
      "No Windows, o recurso que permite restaurar arquivos apagados acidentalmente antes do esvaziamento definitivo é:",
    alternativas: [
      "Prompt de Comando",
      "Lixeira",
      "Gerenciador de Tarefas",
      "Painel de Controle",
      "Editor de Registro",
    ],
    correta: 1,
    explicacao:
      "A Lixeira do Windows armazena temporariamente arquivos excluídos, permitindo sua restauração até que seja esvaziada ou até que o espaço seja necessário para novos arquivos.",
    origem: "banco",
  },
  {
    id: "ti-008",
    materia: "ti",
    topico: "Ataques cibernéticos",
    enunciado:
      "Um ataque em que o criminoso se passa por uma instituição confiável (como um banco) para induzir a vítima a fornecer senhas ou dados bancários, geralmente por e-mail ou site falso, é denominado:",
    alternativas: ["DDoS", "Phishing", "Man-in-the-middle", "Brute force", "SQL Injection"],
    correta: 1,
    explicacao:
      "Phishing é a fraude por engenharia social em que o atacante se passa por entidade confiável para obter dados sensíveis da vítima. DDoS sobrecarrega um serviço; man-in-the-middle intercepta comunicação entre duas partes; brute force testa combinações de senha exaustivamente; SQL Injection explora falhas em consultas de banco de dados.",
    origem: "banco",
  },
  {
    id: "ti-009",
    materia: "ti",
    topico: "Segurança da informação",
    enunciado:
      "A autenticação de dois fatores (2FA) aumenta a segurança de um login por exigir:",
    alternativas: [
      "Duas senhas diferentes cadastradas pelo mesmo usuário",
      "A combinação de dois elementos de categorias distintas, como algo que o usuário sabe (senha) e algo que possui (token/celular)",
      "O uso obrigatório de biometria facial e digital simultaneamente",
      "Duas tentativas de login antes do bloqueio da conta",
      "O cadastro de dois usuários distintos para a mesma conta",
    ],
    correta: 1,
    explicacao:
      "2FA combina dois fatores de autenticação de categorias diferentes — algo que o usuário sabe (senha), algo que possui (token, celular, aplicativo autenticador) ou algo que é (biometria) — dificultando o acesso mesmo que a senha seja comprometida.",
    origem: "banco",
  },
  {
    id: "ti-010",
    materia: "ti",
    topico: "Armazenamento em nuvem",
    enunciado:
      "Uma vantagem típica do armazenamento em nuvem (cloud storage) em relação ao armazenamento apenas local é:",
    alternativas: [
      "Eliminação total da necessidade de qualquer conexão à internet",
      "Acesso aos arquivos a partir de múltiplos dispositivos, com backup gerenciado pelo provedor do serviço",
      "Garantia absoluta contra qualquer tipo de vazamento de dados",
      "Dispensa de políticas de controle de acesso",
      "Impossibilidade de sincronização entre dispositivos",
    ],
    correta: 1,
    explicacao:
      "O armazenamento em nuvem permite acessar arquivos de qualquer dispositivo conectado à internet, com sincronização e backup gerenciados pelo provedor — reduzindo o risco de perda por falha de um único dispositivo local. Não elimina a necessidade de internet nem garante segurança absoluta.",
    origem: "banco",
  },
  {
    id: "ti-011",
    materia: "ti",
    topico: "Segurança da informação",
    enunciado:
      "A assinatura digital, baseada em criptografia assimétrica e certificação digital, garante ao documento eletrônico as propriedades de autenticidade, integridade e não repúdio (irretratabilidade). Ela NÃO garante, por si só, a propriedade de:",
    alternativas: ["Autenticidade", "Integridade", "Confidencialidade", "Não repúdio", "Irretratabilidade"],
    correta: 2,
    explicacao:
      "A assinatura digital comprova quem assinou (autenticidade), que o conteúdo não foi alterado (integridade) e impede que o autor negue a autoria (não repúdio/irretratabilidade) — mas não torna o conteúdo sigiloso. Para garantir confidencialidade, é necessário também cifrar o documento, o que é uma operação distinta da assinatura.",
    origem: "banco",
  },
  {
    id: "ti-012",
    materia: "ti",
    topico: "Legislação digital",
    enunciado:
      "Segundo o Marco Civil da Internet (Lei nº 12.965/2014), os prazos mínimos de guarda dos registros de conexão e dos registros de acesso a aplicações de internet, pelos respectivos provedores, são de:",
    alternativas: [
      "6 meses para registros de conexão e 1 ano para registros de aplicação",
      "1 ano para registros de conexão e 6 meses para registros de aplicação",
      "1 ano para ambos os tipos de registro",
      "2 anos para registros de conexão e 1 ano para registros de aplicação",
      "6 meses para ambos os tipos de registro",
    ],
    correta: 1,
    explicacao:
      "O Marco Civil da Internet exige que provedores de conexão guardem os registros de conexão pelo prazo de 1 ano (art. 13), e que provedores de aplicação guardem os registros de acesso a aplicações pelo prazo de 6 meses (art. 15) — prazos mínimos, frequentemente cobrados de forma literal em prova.",
    origem: "banco",
  },
  {
    id: "ti-013",
    materia: "ti",
    topico: "Crimes cibernéticos",
    enunciado:
      "A conduta de invadir dispositivo informático de uso alheio, conectado ou não à rede de computadores, com o fim de obter, adulterar ou destruir dados ou informações sem autorização expressa ou tácita do usuário do dispositivo, ou de instalar vulnerabilidades para obter vantagem ilícita, está tipificada no Código Penal, com redação e pena alteradas pela Lei nº 14.155/2021, no crime de:",
    alternativas: [
      "Estelionato (art. 171, CP)",
      "Furto mediante fraude eletrônica (art. 155, §4º-B, CP)",
      "Invasão de dispositivo informático (art. 154-A, CP)",
      "Interceptação de comunicações (Lei 9.296/1996)",
      "Falsidade ideológica (art. 299, CP)",
    ],
    correta: 2,
    explicacao:
      "O art. 154-A do CP, incluído pela Lei 12.737/2012 (“Lei Carolina Dieckmann”), teve a redação e a pena alteradas pela Lei 14.155/2021: o tipo passou a falar em dispositivo “de uso alheio” e deixou de exigir a antiga “violação indevida de mecanismo de segurança” — basta a invasão sem autorização expressa ou tácita do usuário —, e a pena passou a ser de reclusão de 1 a 4 anos e multa. A mesma lei criou o furto mediante fraude eletrônica (art. 155, §4º-B) e o estelionato por fraude eletrônica (art. 171, §2º-A), ambos criados com reclusão de 4 a 8 anos e multa (hoje, após a Lei 15.397/2026, o furto mediante fraude eletrônica tem reclusão de 4 a 10 anos e multa, e a fraude eletrônica do art. 171, §2º-A, continua com 4 a 8), crimes que pressupõem subtração ou obtenção de vantagem patrimonial. Interceptação de comunicações sem autorização judicial é crime do art. 10 da Lei 9.296/1996 e falsidade ideológica (art. 299 do CP) é inserir declaração falsa em documento — condutas diferentes da invasão descrita.",
    origem: "banco",
  },
  {
    id: "ti-014",
    materia: "ti",
    topico: "Backup e continuidade",
    enunciado:
      "Entre os tipos de backup, aquele que copia apenas os arquivos alterados desde o último backup completo (não considerando backups incrementais intermediários) é o backup:",
    alternativas: ["Incremental", "Diferencial", "Completo (full)", "Espelhado (mirror)", "Snapshot"],
    correta: 1,
    explicacao:
      "O backup diferencial copia tudo o que mudou desde o último backup completo, sem depender de backups intermediários — para restaurar, basta o último completo mais o último diferencial. Já o backup incremental copia apenas o que mudou desde o último backup de qualquer tipo (completo ou incremental anterior), exigindo toda a cadeia para restauração completa, o que o torna mais rápido para gerar, porém mais lento para restaurar.",
    origem: "banco",
  },
  {
    id: "ti-015",
    materia: "ti",
    topico: "Fundamentos de hardware e software",
    enunciado:
      "Sobre BIOS e UEFI, firmwares responsáveis por inicializar o hardware do computador antes do carregamento do sistema operacional, é correto afirmar que:",
    alternativas: [
      "UEFI é uma evolução da BIOS, oferecendo suporte a discos maiores que 2 TB (via esquema de partição GPT), inicialização mais rápida e interface gráfica, entre outras vantagens.",
      "BIOS e UEFI são sinônimos completamente intercambiáveis, sem diferenças técnicas relevantes.",
      "A BIOS oferece suporte nativo a discos com esquema GPT, enquanto a UEFI está limitada ao esquema MBR.",
      "O Secure Boot é um recurso exclusivo da BIOS legada, não disponível na UEFI.",
      "A UEFI não pode ser utilizada em computadores com processadores de 64 bits.",
    ],
    correta: 0,
    explicacao:
      "A UEFI (Unified Extensible Firmware Interface) substitui/evolui a BIOS tradicional, trazendo suporte ao esquema de partição GPT (permitindo volumes maiores que 2,2 TB, limite do MBR usado pela BIOS legada), inicialização mais rápida, interface gráfica com suporte a mouse, e o recurso Secure Boot — que impede a execução de bootloaders não assinados/maliciosos e é próprio da UEFI, não da BIOS legada.",
    origem: "banco",
  },
  {
    id: "ti-016",
    materia: "ti",
    topico: "Sistemas operacionais",
    enunciado:
      "No Windows 11, o requisito de segurança de hardware exigido oficialmente para a instalação do sistema, responsável por armazenar de forma segura chaves criptográficas, é o:",
    alternativas: [
      "TPM 2.0 (Trusted Platform Module)",
      "DirectX 12 Ultimate",
      "RAID 0 por hardware",
      "BitLocker To Go",
      "Windows Defender SmartScreen",
    ],
    correta: 0,
    explicacao:
      "O TPM (Trusted Platform Module) versão 2.0 é um chip (ou módulo de firmware) dedicado ao armazenamento seguro de chaves criptográficas, usado por recursos como o BitLocker. O Windows 11 exige TPM 2.0 como requisito mínimo oficial, junto de firmware UEFI compatível com Inicialização Segura (Secure Boot), processador de 64 bits com 2 ou mais núcleos, 4 GB de RAM e 64 GB de armazenamento. Não se exige DirectX 12 Ultimate (basta placa compatível com DirectX 12 e driver WDDM 2.0); RAID 0 não é requisito; BitLocker To Go é a criptografia de unidades removíveis; e o SmartScreen é um filtro contra sites e downloads maliciosos — nenhum deles é o módulo de hardware que guarda chaves.",
    origem: "banco",
  },
  {
    id: "ti-017",
    materia: "ti",
    topico: "Sistemas operacionais e aplicativos",
    enunciado:
      "No Microsoft Excel, a função que retorna a soma dos valores de um intervalo que atendem a um único critério especificado é:",
    alternativas: ["SOMA()", "SOMASE()", "PROCV()", "CONT.SE()", "SE()"],
    correta: 1,
    explicacao:
      "SOMASE(intervalo; critério; [intervalo_soma]) soma apenas os valores que atendem a uma condição especificada. SOMA() soma tudo, sem condição; PROCV() busca um valor em uma tabela; CONT.SE() conta (não soma) os itens que atendem a um critério; SE() é uma função lógica condicional simples, sem somar intervalos.",
    origem: "banco",
  },
  {
    id: "ti-018",
    materia: "ti",
    topico: "Sistemas operacionais e aplicativos",
    enunciado:
      "Em dispositivos móveis Android, o recurso que permite localizar, bloquear remotamente ou apagar os dados de um aparelho perdido ou furtado, mediante vinculação a uma conta Google, denomina-se:",
    alternativas: [
      "Google Play Protect",
      "Encontre Meu Dispositivo (Find My Device, rebatizado de Find Hub)",
      "Modo avião",
      "Verificação em duas etapas",
      "Android Auto",
    ],
    correta: 1,
    explicacao:
      "O “Encontre Meu Dispositivo” (Find My Device), que o Google rebatizou de Find Hub em 2025, permite localizar, tocar um som, bloquear remotamente e apagar os dados de um Android vinculado à conta Google. Google Play Protect é o verificador de apps nativo contra malware; modo avião apenas desativa rádios de comunicação; verificação em duas etapas é o 2FA para login; Android Auto integra o smartphone ao painel veicular — nenhum desses localiza ou apaga remotamente o aparelho.",
    origem: "banco",
  },
  {
    id: "ti-019",
    materia: "ti",
    topico: "Redes de computadores",
    enunciado: "Sobre o modelo TCP/IP, é correto afirmar que:",
    alternativas: [
      "O TCP (Transmission Control Protocol) é orientado a conexão, garantindo entrega ordenada e confiável dos pacotes, enquanto o UDP (User Datagram Protocol) não garante entrega nem ordem, mas é mais rápido, sendo usado em aplicações como streaming e VoIP.",
      "TCP e UDP são idênticos, diferindo apenas no nome.",
      "UDP garante entrega confiável e ordenada, ao contrário do TCP.",
      "O endereço IP identifica exclusivamente o hardware físico da placa de rede, sendo sinônimo de endereço MAC.",
      "TCP é usado exclusivamente para streaming de vídeo em tempo real, por sua velocidade superior.",
    ],
    correta: 0,
    explicacao:
      "O TCP estabelece conexão (handshake de três vias), confirma o recebimento de pacotes e reordena/retransmite quando necessário — ideal para dados que exigem integridade (e-mail, transferência de arquivos, navegação web). O UDP não estabelece conexão nem garante entrega/ordem, priorizando velocidade — usado em streaming, jogos online e VoIP. O endereço IP (lógico, camada de rede) é diferente do endereço MAC (físico, camada de enlace).",
    origem: "banco",
  },
  {
    id: "ti-020",
    materia: "ti",
    topico: "Redes de computadores",
    enunciado: "Uma VPN (Virtual Private Network) tem como principal função:",
    alternativas: [
      "Aumentar permanentemente a velocidade de conexão à internet.",
      "Criar um túnel criptografado entre o dispositivo do usuário e um servidor remoto, ocultando o tráfego de terceiros na rede e podendo mascarar o endereço IP de origem.",
      "Eliminar totalmente a necessidade de autenticação em sistemas corporativos.",
      "Substituir o uso de antivírus no dispositivo.",
      "Impedir qualquer tipo de rastreamento por parte do próprio provedor de VPN.",
    ],
    correta: 1,
    explicacao:
      "A VPN cria um túnel criptografado entre o dispositivo e um servidor remoto, protegendo o tráfego contra interceptação em redes não confiáveis (ex.: Wi-Fi público) e podendo ocultar o IP real de origem perante os sites acessados. Não aumenta velocidade de conexão (pode até reduzi-la), não substitui autenticação nem antivírus, e não impede o próprio provedor de VPN de registrar o tráfego, caso ele mantenha logs.",
    origem: "banco",
  },
  {
    id: "ti-021",
    materia: "ti",
    topico: "Redes de computadores",
    enunciado: "A principal função de um firewall em uma rede de computadores é:",
    alternativas: [
      "Detectar e remover vírus já instalados no sistema.",
      "Filtrar o tráfego de rede com base em regras predefinidas, permitindo ou bloqueando conexões conforme critérios como origem, destino e porta.",
      "Criptografar todos os arquivos armazenados localmente.",
      "Realizar backup automático dos dados da rede.",
      "Traduzir nomes de domínio em endereços IP.",
    ],
    correta: 1,
    explicacao:
      "O firewall é um dispositivo/software que filtra o tráfego de rede segundo regras (endereço IP, porta, protocolo), permitindo ou bloqueando conexões — atuando como barreira entre redes confiáveis e não confiáveis. Não remove vírus (função de antivírus), não criptografa arquivos, não faz backup e não resolve nomes de domínio (função do DNS).",
    origem: "banco",
  },
  {
    id: "ti-022",
    materia: "ti",
    topico: "Segurança da informação",
    enunciado:
      "Uma função hash criptográfica, aplicada a um arquivo para fins de perícia digital, tem como propriedade fundamental:",
    alternativas: [
      "Permitir reconstruir o arquivo original a partir do valor hash gerado.",
      "Gerar, a partir de qualquer entrada, uma saída de tamanho fixo que funciona como uma \"impressão digital\" do arquivo — qualquer alteração mínima no arquivo original produz um hash completamente diferente.",
      "Criptografar o arquivo de forma reversível mediante uma chave secreta.",
      "Comprimir o arquivo, reduzindo seu tamanho para economia de armazenamento.",
      "Adicionar uma marca d'água visível ao arquivo para fins de identificação.",
    ],
    correta: 1,
    explicacao:
      "Funções hash (como SHA-256, usadas na cadeia de custódia digital) são unidirecionais — não é possível reconstruir a entrada a partir da saída — e produzem saída de tamanho fixo; o chamado \"efeito avalanche\" garante que qualquer alteração mínima no arquivo gere um hash totalmente diferente. Por isso hashes são usados para comprovar que uma evidência digital não foi alterada, comparando o valor antes e depois da análise pericial.",
    origem: "banco",
  },
  {
    id: "ti-023",
    materia: "ti",
    topico: "Segurança da informação",
    enunciado:
      "A tríade CID (ou CIA, na sigla em inglês), pilar central da segurança da informação, é formada pelos princípios de:",
    alternativas: [
      "Confidencialidade, Integridade e Disponibilidade",
      "Confiança, Identificação e Disponibilidade",
      "Confidencialidade, Identidade e Durabilidade",
      "Criptografia, Integridade e Detecção",
      "Confidencialidade, Interoperabilidade e Disponibilidade",
    ],
    correta: 0,
    explicacao:
      "A tríade CID reúne confidencialidade (acesso restrito a quem é autorizado), integridade (dados completos e não alterados indevidamente) e disponibilidade (acesso garantido quando necessário) — os três pilares fundamentais sobre os quais se apoiam praticamente todos os controles de segurança da informação.",
    origem: "banco",
  },
  {
    id: "ti-024",
    materia: "ti",
    topico: "Crimes cibernéticos",
    enunciado:
      "Sobre as alterações trazidas pela Lei nº 14.155/2021 aos crimes patrimoniais eletrônicos no Código Penal, é correto afirmar que:",
    alternativas: [
      "Criou-se uma forma qualificada de furto (art. 155, §4º-B) para a subtração de valores mediante fraude eletrônica, como a clonagem de cartão ou uso indevido de senha, sem que a vítima seja induzida a erro voluntariamente.",
      "O estelionato eletrônico (art. 171, §2º-A) e o furto qualificado por fraude eletrônica são exatamente a mesma conduta, apenas com nomes distintos.",
      "A Lei 14.155/2021 revogou o crime de invasão de dispositivo informático (art. 154-A).",
      "A Lei 14.155/2021 reduziu as penas dos crimes patrimoniais cometidos por meio eletrônico.",
      "A competência para julgar estelionato eletrônico é sempre do local de domicílio do réu, nunca da vítima.",
    ],
    correta: 0,
    explicacao:
      "A Lei 14.155/2021 distinguiu duas situações: no furto mediante fraude eletrônica (art. 155, §4º-B), o agente subtrai o bem sem que a vítima participe conscientemente do ato (ex.: clonagem de cartão, uso de senha obtida ilicitamente); no estelionato eletrônico (art. 171, §2º-A), a vítima é enganada e ela mesma entrega o bem/valor, induzida a erro (ex.: golpe do falso motoboy). Ambos foram criados com reclusão de 4 a 8 anos e multa, penas mais rigorosas que as das figuras comuns; depois, a Lei 15.397/2026 elevou a do furto mediante fraude eletrônica para reclusão de 4 a 10 anos e multa, e a fraude eletrônica do art. 171, §2º-A, continua com 4 a 8 anos (a mesma lei de 2026 revogou o §5º do art. 171, e o estelionato passou a ser crime de ação penal pública incondicionada). A mesma lei incluiu o §4º no art. 70 do CPP: no estelionato (art. 171) praticado mediante depósito, emissão de cheque sem fundos ou com pagamento frustrado, ou mediante transferência de valores (como o Pix), a competência é do local do domicílio da VÍTIMA — e, havendo várias vítimas, firma-se pela prevenção —, nunca a regra fixa do domicílio do réu. Por fim, a lei não revogou o art. 154-A: apenas alterou sua redação e aumentou a pena.",
    origem: "banco",
  },
  {
    id: "ti-025",
    materia: "ti",
    topico: "Crimes cibernéticos",
    enunciado:
      "Assinale a alternativa que descreve corretamente a variação do phishing conhecida como \"spear phishing\":",
    alternativas: [
      "Ataque de phishing genérico, disparado em massa para milhões de destinatários aleatórios, sem qualquer personalização.",
      "Ataque de phishing direcionado a uma vítima ou organização específica, elaborado com informações pessoais coletadas previamente para aumentar a credibilidade do golpe.",
      "Golpe realizado exclusivamente por chamada de voz (ligação telefônica).",
      "Golpe realizado exclusivamente por mensagem de texto SMS.",
      "Ataque que explora exclusivamente vulnerabilidades de hardware.",
    ],
    correta: 1,
    explicacao:
      "O spear phishing é uma modalidade direcionada e personalizada de phishing, voltada a um alvo específico (pessoa ou organização), construída com informações coletadas previamente por engenharia social, para parecer mais convincente. O disparo genérico em massa, sem personalização, é o phishing comum (não direcionado); ataques por voz e por SMS são, respectivamente, \"vishing\" e \"smishing\" — variações distintas do spear phishing.",
    origem: "banco",
  },
  {
    id: "ti-026",
    materia: "ti",
    topico: "Backup e continuidade",
    enunciado:
      "A chamada \"regra 3-2-1\" de backup, amplamente recomendada em políticas de continuidade de negócios, recomenda:",
    alternativas: [
      "Manter 3 cópias dos dados, em 2 tipos de mídia diferentes, com 1 cópia armazenada fora do local (off-site).",
      "Realizar backup 3 vezes ao dia, em 2 servidores, durante 1 mês.",
      "Utilizar exatamente 3 senhas, 2 firewalls e 1 antivírus.",
      "Manter os dados por 3 anos, com 2 formatos de arquivo e 1 responsável técnico.",
      "Fazer 3 tentativas de restauração antes de declarar o backup corrompido.",
    ],
    correta: 0,
    explicacao:
      "A regra 3-2-1 recomenda manter ao menos 3 cópias dos dados (1 original + 2 backups), armazenadas em 2 tipos de mídia diferentes (ex.: disco local e nuvem), com pelo menos 1 cópia fora do local físico principal (off-site) — reduzindo o risco de perda total por desastre, furto ou falha localizada.",
    origem: "banco",
  },
  {
    id: "ti-027",
    materia: "ti",
    topico: "Redes de computadores",
    enunciado: "Sobre os protocolos de endereçamento IP, é correto afirmar que:",
    alternativas: [
      "O IPv6 foi criado para substituir o IPv4, ampliando drasticamente o espaço de endereços disponíveis, já que o IPv4 (endereços de 32 bits) está praticamente esgotado.",
      "O IPv4 utiliza endereços de 128 bits, enquanto o IPv6 utiliza 32 bits.",
      "IPv4 e IPv6 são totalmente incompatíveis e não podem coexistir na mesma rede, sob nenhuma circunstância.",
      "O protocolo DHCP é responsável por criptografar o tráfego de rede.",
      "Um endereço IP privado (como 192.168.0.1) pode ser roteado diretamente pela internet pública sem qualquer tradução.",
    ],
    correta: 0,
    explicacao:
      "O IPv4 usa endereços de 32 bits (cerca de 4,3 bilhões de combinações, já praticamente esgotadas); o IPv6 usa 128 bits, ampliando exponencialmente o espaço de endereçamento. Ambos podem coexistir por mecanismos de dual-stack/tunelamento. O DHCP atribui endereços IP automaticamente, mas não criptografa tráfego. Endereços IP privados (faixas reservadas, como 192.168.x.x) não são roteáveis diretamente na internet pública — exigem NAT (Network Address Translation) para tradução.",
    origem: "banco",
  },
  {
    id: "ti-028",
    materia: "ti",
    topico: "Sistemas operacionais e aplicativos",
    enunciado:
      "No Microsoft Word, o recurso que permite padronizar automaticamente a numeração de títulos e gerar um índice (sumário) atualizável com base nos estilos de título aplicados ao texto é:",
    alternativas: [
      "Marcadores e numeração manual",
      "Estilos de título combinados com Sumário automático (aba Referências)",
      "Caixa de texto vinculada",
      "Modo de exibição de leitura",
      "Verificador ortográfico",
    ],
    correta: 1,
    explicacao:
      "Ao aplicar estilos de título (Título 1, Título 2 etc.) ao texto, o Word permite inserir um Sumário automático (aba Referências), que gera e atualiza a numeração e a lista de tópicos automaticamente conforme o documento é editado — diferentemente da numeração manual, que não se atualiza sozinha quando o conteúdo muda.",
    origem: "banco",
  },
  {
    id: "ti-029",
    materia: "ti",
    topico: "Golpes digitais recentes (phishing, engenharia social, golpe do Pix, deepfake em fraude)",
    enunciado:
      "Uma vítima recebe uma ligação em que a voz, muito semelhante à de um familiar, pede com urgência uma transferência via Pix, alegando estar em uma emergência. Posteriormente, verifica-se que a voz foi gerada artificialmente para simular a do familiar. Esse golpe caracteriza o uso de:",
    alternativas: [
      "Phishing tradicional por e-mail.",
      "Deepfake de áudio (voz clonada por IA) associado a engenharia social.",
      "Smishing, golpe realizado exclusivamente por SMS.",
      "Ataque de força bruta a senhas bancárias.",
      "Man-in-the-middle em rede Wi-Fi pública.",
    ],
    correta: 1,
    explicacao:
      "O caso descreve um deepfake de áudio: a voz do familiar é clonada por inteligência artificial para simular autenticidade, combinada com engenharia social (exploração da urgência e da confiança da vítima) para induzir a transferência via Pix. Não há e-mail (phishing tradicional) nem SMS (smishing) envolvidos, tampouco quebra de senha por tentativa e erro (força bruta) ou interceptação de tráfego de rede (man-in-the-middle).",
    origem: "banco",
  },
  {
    id: "ti-030",
    materia: "ti",
    topico: "Golpes digitais recentes (phishing, engenharia social, golpe do Pix, deepfake em fraude)",
    enunciado:
      "A técnica de manipulação psicológica que explora urgência, medo ou confiança da vítima, servindo de base conceitual para golpes como phishing, vishing e o golpe do WhatsApp clonado, é denominada:",
    alternativas: [
      "Engenharia reversa.",
      "Engenharia social.",
      "Criptoanálise.",
      "Pentest (teste de invasão).",
      "Sniffing de pacotes.",
    ],
    correta: 1,
    explicacao:
      "Engenharia social é a técnica-base de manipulação psicológica que explora emoções como urgência, medo ou confiança para induzir a vítima a agir contra seus próprios interesses (fornecer dados, fazer transferências), sustentando golpes como phishing, vishing e clonagem de WhatsApp. Engenharia reversa e criptoanálise são técnicas de análise de sistemas/códigos; pentest é teste autorizado de segurança; sniffing é interceptação técnica de pacotes de rede — nenhum desses é o conceito de manipulação psicológica descrito.",
    origem: "banco",
  },
  {
    id: "ti-031",
    materia: "ti",
    topico: "Inteligência artificial aplicada à investigação e riscos (viés algorítmico, deepfake como prova)",
    enunciado:
      "Um sistema de reconhecimento facial usado por uma corporação policial apresenta taxa de falsos positivos significativamente maior para determinado grupo demográfico do que para outros, em razão da composição dos dados usados em seu treinamento. Esse fenômeno é conhecido como:",
    alternativas: [
      "Overfitting do modelo.",
      "Viés algorítmico.",
      "Ataque adversarial.",
      "Latência de processamento.",
      "Criptografia assimétrica.",
    ],
    correta: 1,
    explicacao:
      "Viés algorítmico ocorre quando um sistema de IA reproduz ou amplifica preconceitos presentes nos dados usados em seu treinamento, gerando resultados desproporcionalmente incorretos (como falsos positivos) para determinados grupos — risco central no uso de reconhecimento facial em segurança pública. Overfitting é um problema técnico de generalização do modelo; ataque adversarial é manipulação proposital da entrada para enganar o modelo; latência e criptografia são conceitos de desempenho e segurança de dados, não relacionados ao viés descrito.",
    origem: "banco",
  },
  {
    id: "ti-032",
    materia: "ti",
    topico: "Inteligência artificial aplicada à investigação e riscos (viés algorítmico, deepfake como prova)",
    enunciado:
      "Diante da apresentação de um vídeo como prova em um inquérito, havendo suspeita de que o conteúdo tenha sido manipulado por inteligência artificial (deepfake), o procedimento tecnicamente correto é:",
    alternativas: [
      "Aceitar o vídeo automaticamente, pois toda gravação digital tem presunção de autenticidade.",
      "Descartar o vídeo automaticamente, pois todo conteúdo digital é passível de manipulação.",
      "Submeter o vídeo a perícia técnica especializada para atestar sua autenticidade antes de sua valoração como prova.",
      "Substituir o vídeo por depoimento testemunhal, que tem valor probatório superior.",
      "Publicar o vídeo em redes sociais para verificação coletiva por usuários.",
    ],
    correta: 2,
    explicacao:
      "A fragilidade de conteúdo digital potencialmente gerado ou manipulado por IA exige perícia técnica especializada, capaz de atestar (ou não) a autenticidade do material antes de sua valoração como prova em processo penal — não cabe presunção automática de autenticidade nem descarte automático, tampouco substituição por outro meio de prova sem análise técnica, ou verificação por terceiros fora da cadeia formal de perícia.",
    origem: "banco",
  },
  {
    id: "ti-033",
    materia: "ti",
    topico: "Computação em nuvem (IaaS, PaaS, SaaS) e armazenamento de evidências digitais",
    enunciado:
      "Um provedor de nuvem que entrega ao cliente apenas a infraestrutura virtual básica (servidores, armazenamento, rede), deixando a cargo do próprio cliente a instalação e o gerenciamento do sistema operacional e das aplicações, está oferecendo o modelo de serviço:",
    alternativas: [
      "SaaS (Software as a Service).",
      "PaaS (Platform as a Service).",
      "IaaS (Infrastructure as a Service).",
      "DaaS (Desktop as a Service).",
      "BaaS (Backend as a Service).",
    ],
    correta: 2,
    explicacao:
      "IaaS (Infrastructure as a Service) entrega apenas a infraestrutura virtual básica — servidores, armazenamento e rede —, cabendo ao cliente instalar e gerenciar o sistema operacional e as aplicações. PaaS já entrega uma plataforma pronta (sistema operacional e ferramentas), poupando esse gerenciamento; SaaS entrega o software pronto para uso final, sem qualquer gestão de infraestrutura ou plataforma pelo cliente.",
    origem: "banco",
  },
  {
    id: "ti-034",
    materia: "ti",
    topico: "Computação em nuvem (IaaS, PaaS, SaaS) e armazenamento de evidências digitais",
    enunciado:
      "Quando evidências digitais de um crime (e-mails, backups, mensagens) estão armazenadas em servidores de computação em nuvem, um desafio jurídico-técnico adicional em relação a dispositivos físicos apreendidos é:",
    alternativas: [
      "A impossibilidade técnica de qualquer acesso a dados hospedados remotamente.",
      "A questão da jurisdição do provedor e a necessidade de ordem judicial específica para acesso a dados hospedados fora do dispositivo físico apreendido.",
      "A ausência total de necessidade de cadeia de custódia para provas digitais em nuvem.",
      "A obrigatoriedade de destruição dos dados após 24 horas da apreensão do dispositivo.",
      "A exclusividade de acesso aos dados apenas pelo próprio usuário titular da conta.",
    ],
    correta: 1,
    explicacao:
      "Dados hospedados em nuvem levantam a questão da jurisdição do provedor (que pode estar sediado em outro país ou estado) e a necessidade de ordem judicial específica para autorizar o acesso a esses dados, distinta da simples apreensão física do dispositivo do investigado. A cadeia de custódia continua plenamente exigível para provas digitais em nuvem, o acesso remoto é tecnicamente possível mediante os procedimentos legais cabíveis, e não há regra de destruição automática de dados em 24 horas.",
    origem: "banco",
  },
  {
    id: "ti-035",
    materia: "ti",
    topico: "OSINT (investigação em fontes abertas) e coleta de evidência em redes sociais",
    enunciado:
      "A coleta e análise de informações disponíveis publicamente (redes sociais, registros públicos, metadados de imagens) para fins de investigação, sem necessidade de quebra de sigilo ou autorização judicial, é conhecida pela sigla:",
    alternativas: [
      "SIGINT (Signals Intelligence).",
      "HUMINT (Human Intelligence).",
      "OSINT (Open Source Intelligence).",
      "GEOINT (Geospatial Intelligence).",
      "IMINT (Imagery Intelligence).",
    ],
    correta: 2,
    explicacao:
      "OSINT (Open Source Intelligence) é a coleta e análise de informações disponíveis publicamente, sem necessidade de autorização judicial, já que os dados já são abertos ao público — usada na investigação policial para localizar suspeitos, mapear redes de relacionamento e verificar álibis. SIGINT refere-se à interceptação de sinais/comunicações, HUMINT à inteligência obtida por fontes humanas, GEOINT à análise de dados geoespaciais e IMINT à análise de imagens — categorias distintas de inteligência, não baseadas em fontes abertas.",
    origem: "banco",
  },
  {
    id: "ti-036",
    materia: "ti",
    topico: "OSINT (investigação em fontes abertas) e coleta de evidência em redes sociais",
    enunciado:
      "Ao coletar uma publicação em rede social como possível evidência em uma investigação, o cuidado técnico mais adequado para preservar sua integridade probatória, prevenindo alegação de que o conteúdo foi editado ou apagado, é:",
    alternativas: [
      "Memorizar o conteúdo e relatá-lo de próprio punho no relatório final.",
      "Compartilhar a publicação na própria conta oficial do órgão investigativo.",
      "Capturar o conteúdo por meio de captura de tela com metadados preservados, ata notarial ou ferramentas de hash que garantam integridade.",
      "Aguardar que a própria plataforma social forneça, espontaneamente, uma cópia autenticada do conteúdo.",
      "Solicitar à vítima que descreva verbalmente o que viu na publicação.",
    ],
    correta: 2,
    explicacao:
      "A preservação técnica adequada de conteúdo de redes sociais como evidência envolve captura de tela com metadados, ata notarial ou ferramentas de hash que atestem a integridade do arquivo capturado — já que publicações podem ser editadas ou apagadas a qualquer momento. Memorização e relato verbal não preservam o conteúdo original; compartilhar publicamente pode até prejudicar a investigação; e depender de fornecimento espontâneo pela plataforma não é procedimento técnico controlado pela própria investigação.",
    origem: "banco",
  },
  {
    id: "ti-037",
    materia: "ti",
    topico: "LGPD aplicada ao tratamento de dados em investigação criminal (bases legais, exceções de segurança pública)",
    enunciado:
      "Em relação à aplicação da Lei Geral de Proteção de Dados (Lei 13.709/2018) às atividades de investigação e repressão de infrações penais, é correto afirmar que:",
    alternativas: [
      "A LGPD se aplica integralmente a essas atividades, sem qualquer exceção.",
      "A LGPD exclui expressamente de suas regras gerais o tratamento de dados para fins exclusivos de segurança pública e investigação penal, remetendo-o a legislação específica.",
      "A LGPD proíbe totalmente o tratamento de dados pessoais por autoridades policiais, mesmo com autorização judicial.",
      "A LGPD só se aplica a empresas privadas, nunca a órgãos públicos de qualquer natureza.",
      "A LGPD substituiu integralmente o Código de Processo Penal nas questões de prova digital.",
    ],
    correta: 1,
    explicacao:
      "A LGPD prevê expressamente que suas regras gerais não se aplicam ao tratamento de dados pessoais realizado para fins exclusivos de segurança pública, defesa nacional, segurança do Estado ou investigação e repressão de infrações penais, remetendo essas atividades a legislação específica (ainda pendente de regulamentação mais detalhada) — o que não significa ausência total de limites, já que princípios como finalidade, necessidade e proporcionalidade continuam orientando a atuação estatal.",
    origem: "banco",
  },
  {
    id: "ti-038",
    materia: "ti",
    topico: "LGPD aplicada ao tratamento de dados em investigação criminal (bases legais, exceções de segurança pública)",
    enunciado:
      "Ainda que a LGPD exclua de suas regras gerais o tratamento de dados para fins de investigação penal, a atuação da autoridade policial nesse tratamento permanece limitada, entre outros, pelo princípio de que o dado só pode ser tratado:",
    alternativas: [
      "Por qualquer servidor público, independentemente de vínculo com a investigação.",
      "De forma genérica e ilimitada, sempre que houver qualquer investigação em curso no órgão.",
      "Por órgão específico, de forma proporcional e para finalidade determinada relacionada à investigação.",
      "Apenas mediante pagamento de taxa ao titular dos dados.",
      "Exclusivamente por ordem direta do Poder Legislativo.",
    ],
    correta: 2,
    explicacao:
      "Mesmo fora do alcance das regras gerais da LGPD, o tratamento de dados para fins de segurança pública e investigação penal deve ser realizado por órgão específico, de forma proporcional e nunca de modo genérico ou ilimitado — os princípios de finalidade, necessidade e proporcionalidade continuam orientando essa atuação estatal, equilibrando o direito à privacidade do investigado com a efetividade da persecução penal.",
    origem: "banco",
  },
  {
    id: "ti-039",
    materia: "ti",
    topico: "Hardware, memórias e armazenamento (RAM, ROM, SSD, NVMe), periféricos, drivers e firmware",
    enunciado:
      "Um núcleo de inteligência vai trocar os computadores usados na análise de vídeos de câmeras de segurança. A especificação de compra prevê processador de 8 núcleos, 32 GB de memória RAM DDR5 e uma unidade de armazenamento SSD NVMe de 1 TB no formato M.2. Um servidor questionou se a troca do antigo HD SATA de 7.200 rpm pelo SSD faria diferença no trabalho.\n\nSobre esses componentes, é correto afirmar que:",
    alternativas: [
      "a memória RAM de 32 GB guarda de forma permanente os arquivos das análises, mesmo com o computador desligado, o que dispensaria a unidade SSD.",
      "NVMe é um tipo de memória ROM gravada na fábrica, usada apenas para armazenar o firmware da placa-mãe.",
      "o HD de 7.200 rpm tende a ser mais rápido que o SSD, porque a rotação dos pratos supera a velocidade do barramento PCI Express.",
      "o SSD não tem partes mecânicas móveis e, ao usar o protocolo NVMe sobre o barramento PCI Express, alcança taxas de transferência e tempos de acesso muito superiores aos de um HD SATA de pratos magnéticos.",
      "o formato M.2 indica que a unidade é necessariamente um HD de 2,5 polegadas conectado por cabo SATA.",
    ],
    correta: 3,
    explicacao:
      "O SSD (unidade de estado sólido) grava os dados em memória flash, sem pratos nem cabeça de leitura; quando usa o protocolo NVMe sobre PCI Express — comum no formato M.2 —, chega a vários gigabytes por segundo, enquanto um HD mecânico SATA fica na casa de 100 a 200 MB/s e ainda sofre a latência da rotação e do braço de leitura. A RAM é memória de trabalho volátil: perde o conteúdo ao desligar e não substitui o armazenamento permanente. NVMe é um protocolo de comunicação de unidades de armazenamento, não memória ROM de firmware. M.2 é só um formato físico de encaixe, que pode receber SSD SATA ou NVMe — não é HD de 2,5 polegadas.",
    origem: "banco",
  },
  {
    id: "ti-040",
    materia: "ti",
    topico: "Hardware, memórias e armazenamento (RAM, ROM, SSD, NVMe), periféricos, drivers e firmware",
    enunciado:
      "Ao cumprir um mandado de busca, uma equipe encontra um notebook ligado, com um programa de mensagens aberto. O perito que acompanha a diligência pede que a máquina não seja desligada antes da coleta dos dados da memória.\n\nSobre os tipos de memória do computador, analise as afirmativas.\n\nI. A memória RAM é volátil: seu conteúdo (processos em execução, chaves de sessão, trechos de conversas abertas) se perde quando a energia é cortada.\nII. A memória ROM, onde fica gravado o firmware da placa-mãe, é volátil e precisa ser regravada a cada inicialização.\nIII. A memória virtual (arquivo de paginação) usa parte do armazenamento secundário (HD ou SSD) para complementar a RAM quando ela se esgota.\n\nEstá correto o que se afirma em:",
    alternativas: [
      "Apenas I.",
      "Apenas I e III.",
      "Apenas II e III.",
      "Apenas III.",
      "I, II e III.",
    ],
    correta: 1,
    explicacao:
      "I está correta: a RAM é volátil, e por isso a perícia coleta a memória (dump de RAM) com o equipamento ligado — processos abertos, chaves de criptografia e conversas carregadas desaparecem no desligamento. II está errada: a ROM (e a memória flash que guarda o firmware da placa-mãe, a BIOS/UEFI) é não volátil — mantém o conteúdo sem energia e não é regravada a cada inicialização. III está correta: a memória virtual usa um arquivo no disco (no Windows, o pagefile.sys) para estender a RAM, ao custo de desempenho, já que o disco é muito mais lento que a memória principal.",
    origem: "banco",
  },
  {
    id: "ti-041",
    materia: "ti",
    topico: "Fundamentos de hardware e software, BIOS/UEFI, backup",
    enunciado:
      "Ao tentar atualizar para o Windows 11 um computador do cartório da delegacia, o técnico recebeu o aviso de que o equipamento não atende aos requisitos mínimos. Na configuração do firmware, constatou que a placa-mãe tem suporte a UEFI e a TPM 2.0, mas está operando em modo legado (CSM/BIOS), com o TPM desativado, e que o disco do sistema usa o esquema de partição MBR.\n\nA providência tecnicamente adequada para viabilizar a atualização é:",
    alternativas: [
      "instalar um driver de vídeo mais recente, pois o TPM e a Inicialização Segura são ativados pelo próprio Windows 11 depois da instalação.",
      "trocar o SSD por um HD mecânico de maior capacidade, já que a Inicialização Segura depende de disco com pratos magnéticos.",
      "manter o modo legado e o esquema MBR, pois a Inicialização Segura (Secure Boot) é recurso exclusivo da BIOS antiga.",
      "ampliar a memória RAM para 64 GB, requisito que dispensa a exigência do TPM 2.0.",
      "converter o disco do sistema para GPT, configurar o firmware para inicializar em modo UEFI (desativando o CSM), habilitar o TPM 2.0 e deixar a máquina apta à Inicialização Segura.",
    ],
    correta: 4,
    explicacao:
      "Os requisitos oficiais do Windows 11 incluem firmware UEFI compatível com Inicialização Segura e TPM 2.0, além de processador de 64 bits com 2 ou mais núcleos, 4 GB de RAM e 64 GB de armazenamento. A Inicialização Segura só funciona com o firmware em modo UEFI, e o boot UEFI do disco do sistema exige partição GPT — a Microsoft oferece a ferramenta MBR2GPT para converter sem apagar os dados. O TPM, quando presente na placa ou no processador (fTPM/PTT), é habilitado na configuração do firmware, e não por driver de vídeo; RAM extra não substitui o TPM; e o Secure Boot é recurso da UEFI, não da BIOS legada, seja o disco SSD ou HD.",
    origem: "banco",
  },
  {
    id: "ti-042",
    materia: "ti",
    topico: "Hardware, memórias e armazenamento (RAM, ROM, SSD, NVMe), periféricos, drivers e firmware",
    enunciado:
      "Na sala de identificação, um leitor biométrico novo foi conectado à porta USB de um computador com Windows 11, mas aparece no Gerenciador de Dispositivos com um alerta amarelo, como “dispositivo desconhecido”. Dias depois, o fabricante do leitor publicou uma atualização que corrige falhas no software gravado na memória interna do próprio aparelho.\n\nO componente que está faltando no computador e o tipo de atualização publicada pelo fabricante são, respectivamente:",
    alternativas: [
      "o driver do dispositivo, e uma atualização de firmware.",
      "o firmware do dispositivo, e uma atualização de driver.",
      "a BIOS do leitor, e uma atualização do sistema operacional.",
      "o barramento PCI Express, e uma atualização da memória RAM.",
      "um aplicativo de escritório, e uma atualização de antivírus.",
    ],
    correta: 0,
    explicacao:
      "Driver é o software instalado no sistema operacional que permite ao Windows se comunicar com um hardware específico; sem ele, o Gerenciador de Dispositivos mostra o equipamento como desconhecido, com o alerta amarelo. Firmware é o software gravado na memória não volátil do próprio dispositivo (leitor, roteador, SSD, impressora, placa-mãe), que o controla em baixo nível — corrigir falhas nesse código interno é atualizar o firmware. A BIOS/UEFI é o firmware da placa-mãe, não do leitor; barramento e RAM são hardware; e aplicativos de escritório ou antivírus nada têm a ver com o reconhecimento do periférico.",
    origem: "banco",
  },
  {
    id: "ti-043",
    materia: "ti",
    topico: "Fundamentos de hardware e software, BIOS/UEFI, backup",
    enunciado:
      "O cartório de uma delegacia adota a seguinte rotina de cópias de segurança do servidor de arquivos: backup completo no domingo à noite e backup incremental ao fim do expediente, de segunda a sábado. Na quinta-feira, às 15h, o disco do servidor falhou definitivamente.\n\nPara recuperar os dados no estado mais recente possível, o técnico deverá restaurar:",
    alternativas: [
      "apenas o backup completo de domingo, pois os incrementais guardam somente os arquivos que não foram modificados.",
      "apenas o incremental de quarta-feira, que acumula todas as alterações feitas desde domingo.",
      "o backup completo de domingo e, em seguida, os incrementais de segunda, terça e quarta-feira, nessa ordem.",
      "o backup completo de domingo e somente o incremental de quarta-feira.",
      "os incrementais de segunda a quarta-feira, dispensando o completo de domingo.",
    ],
    correta: 2,
    explicacao:
      "O backup incremental copia apenas o que mudou desde o último backup de qualquer tipo; por isso cada incremental depende do anterior, e a restauração exige o último completo mais toda a cadeia de incrementais, na ordem (domingo, segunda, terça e quarta). O que foi alterado na quinta-feira até as 15h se perde, porque ainda não havia sido copiado. Restaurar o completo e só o último arquivo da semana seria correto se a rotina usasse backups diferenciais, que acumulam tudo o que mudou desde o último completo — mais lentos de gerar e maiores, porém mais rápidos de restaurar.",
    origem: "banco",
  },
  {
    id: "ti-044",
    materia: "ti",
    topico: "Windows 11: atalhos, Explorador de Arquivos, configurações, contas, segurança e atualização",
    enunciado:
      "Um agente que redige um relatório no Windows 11 precisa, em sequência: (1) capturar apenas uma área da tela em que aparece a conversa de um suspeito; (2) colar um trecho que havia copiado alguns minutos antes, escolhendo-o no histórico da área de transferência; e (3) bloquear a sessão ao se levantar da mesa.\n\nOs atalhos de teclado que executam essas ações, na ordem, são:",
    alternativas: [
      "Ctrl + Print Screen; Ctrl + Shift + V; Ctrl + Alt + Del.",
      "Windows + Shift + S; Windows + V; Windows + L.",
      "Windows + S; Windows + C; Windows + D.",
      "Alt + Print Screen; Ctrl + V; Windows + M.",
      "Windows + Shift + S; Ctrl + Z; Windows + E.",
    ],
    correta: 1,
    explicacao:
      "Windows + Shift + S abre a Ferramenta de Captura para recortar uma área (retângulo, janela, tela inteira ou forma livre); Windows + V abre o histórico da área de transferência (que precisa estar ativado em Configurações > Sistema > Área de transferência — o próprio atalho oferece a ativação); Windows + L bloqueia a sessão na hora. Ctrl + Alt + Del abre a tela de opções de segurança, da qual ainda seria preciso escolher Bloquear; Windows + S abre a pesquisa e Windows + D mostra a área de trabalho; Alt + Print Screen copia só a janela ativa e Ctrl + V cola apenas o último item copiado; Windows + M minimiza as janelas; Ctrl + Z desfaz a última ação e Windows + E abre o Explorador de Arquivos.",
    origem: "banco",
  },
  {
    id: "ti-045",
    materia: "ti",
    topico: "Windows 11: atalhos, Explorador de Arquivos, configurações, contas, segurança e atualização",
    enunciado:
      "Um escrivão excluiu três arquivos no Windows 11: o primeiro, com a tecla Delete, da pasta Documentos do disco local C:; o segundo, também com Delete, de um pen drive; e o terceiro, com as teclas Shift + Delete, da pasta Downloads. Logo depois, percebeu o engano e abriu a Lixeira.\n\nConsiderando a configuração padrão do sistema, ele encontrará na Lixeira:",
    alternativas: [
      "os três arquivos, pois toda exclusão feita no Windows passa pela Lixeira.",
      "apenas o arquivo do pen drive e o apagado com Shift + Delete.",
      "apenas o arquivo apagado com Shift + Delete, que fica guardado em uma área especial da Lixeira.",
      "nenhum dos três, pois a Lixeira só recebe arquivos excluídos de unidades de rede.",
      "apenas o arquivo excluído da pasta Documentos.",
    ],
    correta: 4,
    explicacao:
      "Por padrão, a Lixeira recebe os itens excluídos com Delete das unidades internas do computador (como o C:), permitindo restaurá-los ao local de origem. Shift + Delete exclui permanentemente, sem passar pela Lixeira (o Windows pede confirmação), e arquivos apagados de pen drives, cartões de memória e pastas de rede também não vão para a Lixeira — o sistema avisa que a exclusão será permanente. Isso não quer dizer que os dados sumiram do meio físico: ferramentas forenses podem recuperar arquivos excluídos enquanto o espaço não for sobrescrito (em SSDs, o comando TRIM pode inviabilizar essa recuperação).",
    origem: "banco",
  },
  {
    id: "ti-046",
    materia: "ti",
    topico: "Windows 11: atalhos, Explorador de Arquivos, configurações, contas, segurança e atualização",
    enunciado:
      "A Corregedoria recomendou medidas para os notebooks usados em campo, que rodam Windows 11 Pro e podem ser furtados durante diligências:\n\nI. Ativar o BitLocker na unidade do sistema, que criptografa o volume inteiro e, com o TPM, impede a leitura dos dados se o SSD for retirado e ligado em outra máquina.\nII. Usar no dia a dia uma conta de usuário padrão, e não de administrador, para que instalações e alterações de sistema exijam credenciais de administrador no Controle de Conta de Usuário (UAC).\nIII. Manter o Microsoft Defender Antivírus ativo, porque ele substitui a criptografia de disco caso o equipamento seja furtado.\n\nEstá correto o que se afirma em:",
    alternativas: [
      "Apenas I.",
      "Apenas III.",
      "Apenas I e II.",
      "Apenas II e III.",
      "I, II e III.",
    ],
    correta: 2,
    explicacao:
      "I está correta: o BitLocker (edições Pro, Enterprise e Education; a edição Home oferece, em equipamentos compatíveis, a “Criptografia do dispositivo”) criptografa o volume e protege a chave com o TPM, de modo que o disco retirado e ligado em outro computador não pode ser lido sem a chave de recuperação. II está correta: com conta padrão, ações administrativas disparam o Controle de Conta de Usuário (UAC), que pede credenciais de administrador, limitando o estrago de um malware ou de um uso indevido. III está errada: o Microsoft Defender Antivírus detecta e bloqueia ameaças, mas não protege os dados gravados se o equipamento for furtado — essa é a função da criptografia de disco.",
    origem: "banco",
  },
  {
    id: "ti-047",
    materia: "ti",
    topico: "Windows 11: atalhos, Explorador de Arquivos, configurações, contas, segurança e atualização",
    enunciado:
      "Um investigador recebeu por e-mail um link para baixar um “atualizador automático de drivers” que prometia deixar o notebook funcional mais rápido. Ao executar o arquivo baixado, o Windows 11 exibiu a tela “O Windows protegeu o computador”, informando que o aplicativo não é reconhecido.\n\nSobre a situação e a atualização segura do sistema, assinale a afirmativa correta.",
    alternativas: [
      "O aviso foi emitido pelo BitLocker, que bloqueia qualquer programa não assinado gravado no disco criptografado.",
      "A tela indica que o firmware UEFI detectou um driver malicioso e apagou o arquivo automaticamente.",
      "O Windows Update não distribui drivers; por isso, utilitários de terceiros recebidos por e-mail são o meio recomendado para atualizá-los.",
      "O aviso foi gerado pelo Microsoft Defender SmartScreen, que avalia a reputação de arquivos e sites; drivers e correções devem ser obtidos pelo Windows Update (inclusive em Atualizações opcionais) ou no site oficial do fabricante.",
      "Pausar o Windows Update por tempo indeterminado é a forma mais segura de impedir a instalação de programas maliciosos.",
    ],
    correta: 3,
    explicacao:
      "A tela “O Windows protegeu o computador” é do Microsoft Defender SmartScreen, que bloqueia a execução de aplicativos desconhecidos ou de má reputação baixados da internet. Drivers e correções de segurança devem vir de fontes confiáveis: o Windows Update (que também distribui drivers, em Opções avançadas > Atualizações opcionais) ou o site do fabricante — “otimizadores” recebidos por e-mail são vetor clássico de malware. O BitLocker criptografa discos e não avalia programas; o firmware UEFI não apaga arquivos baixados; e, no Windows 11, as atualizações só podem ser pausadas por algumas semanas — mantê-las em dia é justamente o que corrige as vulnerabilidades.",
    origem: "banco",
  },
  {
    id: "ti-048",
    materia: "ti",
    topico: "Planilhas eletrônicas (Excel e Calc): fórmulas, funções, referências e classificação",
    enunciado:
      "Na planilha de controle de apreensões de uma delegacia, elaborada no Microsoft Excel, as células A1, B1, A2 e B2 contêm, respectivamente, os valores 2, 3, 4 e 1. A célula C1 contém a fórmula =A1+B1 e a célula C2, a fórmula =A2+B2. As demais células da planilha estão vazias.\n\nO agente selecionou o intervalo C1:C2, copiou-o (Ctrl+C), selecionou o intervalo D1:F4 e colou (Ctrl+V).\n\nOs valores exibidos nas células F1, F2 e F3 serão, respectivamente:",
    alternativas: [
      "5; 5; 5.",
      "13; 11; 0.",
      "21; 17; 21.",
      "21; 17; 0.",
      "8; 6; 0.",
    ],
    correta: 3,
    explicacao:
      "As fórmulas usam referências relativas, que se ajustam ao destino: copiada uma coluna à direita, =A1+B1 vira =B1+C1; duas colunas, =C1+D1; três, =D1+E1. Como o destino (4 linhas por 3 colunas) é múltiplo da origem (2 linhas por 1 coluna), o Excel repete o bloco copiado: as linhas 3 e 4 recebem as mesmas fórmulas, deslocadas, apontando para células vazias. Assim: D1 = B1+C1 = 3+5 = 8; E1 = C1+D1 = 5+8 = 13; F1 = D1+E1 = 8+13 = 21. D2 = B2+C2 = 1+5 = 6; E2 = C2+D2 = 5+6 = 11; F2 = D2+E2 = 6+11 = 17. F3 = D3+E3 vale 0, porque essa cadeia se apoia em B3 e C3, vazias. “5; 5; 5” seria o resultado se as referências fossem absolutas e não se ajustassem; “13; 11; 0” são os valores da coluna E; “8; 6; 0”, os da coluna D; e “21; 17; 21” supõe, sem razão, que a linha 3 repetiria o resultado da linha 1. No LibreOffice Calc as referências relativas se comportam da mesma forma.",
    origem: "banco",
    fonte: "FGV · PC-AM 2022 · Investigador (adaptada)",
  },
  {
    id: "ti-049",
    materia: "ti",
    topico: "Planilhas eletrônicas (Excel e Calc): fórmulas, funções, referências e classificação",
    enunciado:
      "Para projetar o número de procedimentos instaurados mês a mês, um investigador digitou, em uma planilha do Excel, o valor 3 na célula A1 e o valor 4 na célula B1. Em A2, inseriu a fórmula =A1+$B$1 e, em seguida, usando a alça de preenchimento, copiou essa fórmula para as células A3 até A50.\n\nO valor exibido na célula A40 será:",
    alternativas: [
      "7.",
      "163.",
      "155.",
      "160.",
      "159.",
    ],
    correta: 4,
    explicacao:
      "A referência A1 é relativa e acompanha a cópia (em A3 vira A2, em A4 vira A3, e assim por diante), enquanto $B$1 é absoluta e continua apontando sempre para o valor 4. Cada célula vale, então, a anterior mais 4, numa progressão aritmética: An = 3 + 4 × (n − 1). Para A40: 3 + 4 × 39 = 159. O valor 7 é apenas o de A2 (e seria o de todas as células se a fórmula não se ajustasse); 163 é o valor de A41; 155, o de A39; e 160 resulta de multiplicar 4 por 40, esquecendo o valor inicial. Comparação útil: se a fórmula fosse =A1+B1, sem cifrões, a referência a B1 também andaria (B2, B3...), apontando para células vazias, e todas as células de A3 em diante repetiriam o valor 7.",
    origem: "banco",
    fonte: "FGV · PC-RJ 2022 · Investigador (adaptada)",
  },
  {
    id: "ti-050",
    materia: "ti",
    topico: "Planilhas eletrônicas (Excel e Calc): fórmulas, funções, referências e classificação",
    enunciado:
      "Em uma planilha de apoio ao cartório, as células F6, F7 e F8 contêm os códigos de natureza de ocorrência R157, F155 e E171, e as células G6, G7 e G8 contêm, respectivamente, as descrições Roubo, Furto e Estelionato. O escrivão quer que a célula A12 exiba automaticamente a descrição correspondente ao código que for digitado na célula A11.\n\nA fórmula que atende a esse objetivo, no Microsoft Excel em português, é:",
    alternativas: [
      "=PROCV(A11;F6:G8;2;0)",
      "=PROCH(A11;F6:G8;2;0)",
      "=PROCV(F6:G8;A11;2;0)",
      "=PROCV(A11;F6:G8;1;0)",
      "=PROCV(A11;G6:G8;2;0)",
    ],
    correta: 0,
    explicacao:
      "PROCV procura o valor de A11 na primeira coluna do intervalo F6:G8 (os códigos) e devolve o conteúdo da coluna de índice 2 (as descrições) na mesma linha; o último argumento 0 (ou FALSO) exige correspondência exata, indispensável quando se buscam códigos. PROCH faz a busca na primeira linha do intervalo, para tabelas dispostas na horizontal; a ordem dos argumentos é valor procurado, matriz, índice da coluna e tipo de correspondência, de modo que inverter o valor e a matriz é erro; o índice 1 devolveria o próprio código digitado; e o intervalo G6:G8 tem uma só coluna, por isso pedir a coluna 2 gera o erro #REF!. Nas versões atuais do Excel, a mesma busca pode ser feita com =PROCX(A11;F6:F8;G6:G8), e o LibreOffice Calc em português também usa PROCV.",
    origem: "banco",
    fonte: "FGV · PC-RN 2021 · Agente (adaptada)",
  },
  {
    id: "ti-051",
    materia: "ti",
    topico: "Editores de texto (Word e Writer): formatação, seções, revisão e recursos de edição",
    enunciado:
      "Um escrivão prepara no Microsoft Word o relatório final de um inquérito volumoso. O documento deve ter capa sem número de página, corpo em orientação retrato, um anexo com uma tabela larga em orientação paisagem e, em cada parte do relatório, um cabeçalho próprio, diferente dos demais.\n\nO recurso que permite aplicar essas configurações distintas de página a trechos do mesmo documento é:",
    alternativas: [
      "a quebra de página, que inicia uma nova página e permite mudar a orientação só a partir dela.",
      "o pincel de formatação, que copia a orientação de uma página para outra.",
      "a quebra de coluna, que divide o documento em blocos com cabeçalhos independentes.",
      "a quebra de seção, que divide o documento em partes com orientação, margens, numeração e cabeçalho e rodapé próprios.",
      "a referência cruzada, que vincula cada cabeçalho ao título da parte correspondente.",
    ],
    correta: 3,
    explicacao:
      "No Word, cada seção pode ter orientação, margens, colunas, numeração de páginas e cabeçalho e rodapé próprios; as quebras de seção (Layout > Quebras: Próxima Página, Contínua, Página Par ou Página Ímpar) separam essas partes, e basta desmarcar “Vincular ao Anterior” no cabeçalho para que ele deixe de repetir o da seção anterior. A quebra de página só leva o texto para a página seguinte: sem seções, a mudança de orientação vale para a seção inteira — num documento de seção única, para tudo (quando se aplica a orientação apenas ao “texto selecionado”, é o próprio Word que insere quebras de seção). O pincel de formatação copia formatação de caracteres e parágrafos, não de página; a quebra de coluna só move o texto para a coluna seguinte; e a referência cruzada insere remissões a títulos, figuras ou tabelas, sem alterar o layout. No LibreOffice Writer, o mesmo resultado se obtém com quebras manuais que aplicam estilos de página diferentes.",
    origem: "banco",
    fonte: "FGV · PC-RN 2021 · Agente (adaptada)",
  },
  {
    id: "ti-052",
    materia: "ti",
    topico: "Editores de texto (Word e Writer): formatação, seções, revisão e recursos de edição",
    enunciado:
      "Antes de enviar ao delegado a versão preliminar de um relatório de investigação, elaborada no Word do Microsoft 365, o agente quer que a palavra MINUTA apareça em diagonal, em cor clara, ao fundo do texto de todas as páginas, sem precisar inseri-la manualmente página por página.\n\nO recurso adequado e sua localização padrão são:",
    alternativas: [
      "Bordas de Página, no grupo Parágrafo da guia Página Inicial.",
      "Cor da Página, na guia Revisão, que imprime o texto digitado como plano de fundo.",
      "WordArt, na guia Inserir, que replica automaticamente o objeto em todas as páginas.",
      "Controlar Alterações, na guia Revisão, que marca o documento como versão preliminar.",
      "Marca-d'água, no grupo Plano de Fundo da Página da guia Design.",
    ],
    correta: 4,
    explicacao:
      "A marca-d'água (guia Design, grupo Plano de Fundo da Página) insere um texto ou uma imagem esmaecidos atrás do conteúdo de todas as páginas; além de modelos prontos, como CONFIDENCIAL e NÃO COPIAR, a opção de marca-d'água personalizada permite digitar MINUTA, escolher fonte, cor semitransparente e layout diagonal. Como o Word a ancora no cabeçalho, ela se repete em todas as páginas sem retrabalho. Bordas de Página apenas contornam as páginas; Cor da Página muda a cor de fundo e fica na guia Design, não na Revisão; um WordArt é objeto isolado, que não se replica nas demais páginas; e Controlar Alterações registra as modificações do texto, sem marcar visualmente o documento como minuta. No LibreOffice Writer, o recurso equivalente fica em Formatar > Marca-d'água.",
    origem: "banco",
    fonte: "FGV · PC-PI 2025 · Oficial Investigador (adaptada)",
  },
  {
    id: "ti-053",
    materia: "ti",
    topico: "Editores de texto (Word e Writer): formatação, seções, revisão e recursos de edição",
    enunciado:
      "O delegado vai revisar, no Microsoft Word, a minuta de uma representação por prisão preventiva redigida pelo investigador. Ele quer que todas as inclusões, exclusões e mudanças de formatação que fizer fiquem destacadas no texto, identificadas com seu nome, para que o investigador depois decida aceitar ou rejeitar cada uma delas.\n\nAntes de começar a revisão, o delegado deve ativar o recurso:",
    alternativas: [
      "Novo Comentário, da guia Revisão, que registra automaticamente as edições feitas no texto.",
      "Comparar, da guia Revisão, que grava cada alteração enquanto o documento é digitado.",
      "Controlar Alterações, da guia Revisão.",
      "Restringir Edição, da guia Revisão, que transforma cada exclusão em comentário.",
      "Pincel de Formatação, da guia Página Inicial, que destaca as mudanças de formatação.",
    ],
    correta: 2,
    explicacao:
      "Controlar Alterações (guia Revisão; atalho Ctrl+Shift+E) passa a marcar cada inclusão, exclusão e mudança de formatação com cor e com o nome do revisor; depois, quem recebe o documento usa Aceitar e Rejeitar, uma a uma ou todas de uma vez. Comentários são observações à margem e não registram as edições; Comparar confronta duas versões já prontas e gera um documento com as diferenças, sem gravar a revisão enquanto ela é feita; Restringir Edição limita o que os outros podem alterar (podendo até obrigar o uso do controle de alterações), mas não converte exclusões em comentários; e o Pincel de Formatação apenas copia a formatação de um trecho para outro. No LibreOffice Writer, o equivalente é Editar > Rastrear alterações > Gravar (Ctrl+Shift+C); no Google Docs, o modo Sugestão.",
    origem: "banco",
    fonte: "FGV · PC-RJ 2022 · Investigador (adaptada)",
  },
  {
    id: "ti-054",
    materia: "ti",
    topico: "Navegadores e correio eletrônico (cookies, cache, navegação privativa, SMTP, POP3, IMAP, Cc/Cco)",
    enunciado:
      "Um delegado enviou um e-mail institucional com o endereço do escrivão no campo Para, o do investigador no campo Cc e o da corregedoria no campo Cco.\n\nConsiderando o funcionamento padrão dos programas e serviços de correio eletrônico, é correto afirmar que:",
    alternativas: [
      "o investigador não consegue ver que o escrivão recebeu a mensagem, porque quem está em Cc só vê o próprio endereço.",
      "se o escrivão usar a opção Responder a todos, sua resposta também chegará à corregedoria.",
      "o escrivão e o investigador sabem que a corregedoria recebeu a mensagem, mas não conseguem ver o endereço dela.",
      "a corregedoria sabe que o escrivão e o investigador receberam a mensagem, mas nenhum dos dois sabe que ela também a recebeu.",
      "o campo Cco criptografa a cópia enviada à corregedoria, que só pode ser lida com a chave privada do remetente.",
    ],
    correta: 3,
    explicacao:
      "Os endereços dos campos Para e Cc ficam visíveis a todos os destinatários, inclusive a quem recebe em cópia oculta; já os endereços do Cco (cópia carbono oculta) não aparecem para ninguém além do remetente. Por isso, a corregedoria vê que escrivão e investigador receberam a mensagem, mas eles não sabem da cópia oculta — nem mesmo que ela existe. Quem está em Cc vê normalmente o destinatário principal; o Responder a todos de quem estava em Para ou Cc não alcança o destinatário oculto, cujo endereço não consta da mensagem que receberam; e o Cco não tem relação com criptografia — sigilo do conteúdo exige recursos como S/MIME ou PGP. Atenção: se a própria corregedoria clicar em Responder a todos, revelará aos demais que recebeu a mensagem.",
    origem: "banco",
    fonte: "FGV · PC-RJ 2022 · Investigador (adaptada)",
  },
  {
    id: "ti-055",
    materia: "ti",
    topico: "Navegadores e correio eletrônico (cookies, cache, navegação privativa, SMTP, POP3, IMAP, Cc/Cco)",
    enunciado:
      "Depois de usar um computador compartilhado do plantão para pesquisar dados de um investigado, um agente abriu no Google Chrome a opção de limpar (excluir) dados de navegação, escolheu o intervalo “Todo o período” e marcou histórico de navegação, histórico de download, cookies e outros dados do site e imagens e arquivos armazenados em cache.\n\nApós a limpeza, continuará no computador:",
    alternativas: [
      "a lista de sites visitados, que só pode ser apagada pela página Histórico.",
      "o conteúdo do cache, que é preservado para acelerar as próximas visitas.",
      "os cookies de sessão dos sites acessados, que só expiram após 30 dias.",
      "a lista de arquivos baixados exibida na página de downloads do navegador.",
      "o arquivo baixado durante a pesquisa, que permanece na pasta de downloads.",
    ],
    correta: 4,
    explicacao:
      "A limpeza de dados de navegação do Chrome apaga registros mantidos pelo próprio navegador — histórico de navegação, lista de downloads (histórico de download), cookies e dados de sites, imagens e arquivos em cache e, se marcados, senhas e dados de preenchimento automático —, mas não exclui os arquivos efetivamente baixados: eles continuam na pasta Downloads (ou onde foram salvos) e precisam ser apagados à parte. Por isso, histórico, cache, cookies e lista de downloads deixam de existir. Os cookies de sessão, aliás, são justamente os que expiram quando o navegador é fechado. Do ponto de vista investigativo, limpar o navegador também não apaga registros externos, como os logs do provedor de conexão e dos sites acessados.",
    origem: "banco",
    fonte: "FGV · PC-RN 2021 · Agente (adaptada)",
  },
  {
    id: "ti-056",
    materia: "ti",
    topico: "Navegadores e correio eletrônico (cookies, cache, navegação privativa, SMTP, POP3, IMAP, Cc/Cco)",
    enunciado:
      "Para reduzir o rastreamento dos servidores que consultam redes sociais e portais de notícias durante investigações, a equipe de TI de uma delegacia estudou como os navegadores tratam os cookies, especialmente os cookies de terceiros, gravados por domínios diferentes do site que está sendo visitado.\n\nSobre o tema, assinale a afirmativa correta.",
    alternativas: [
      "No Mozilla Firefox, a Proteção Total contra Cookies mantém um “pote” separado de cookies para cada site visitado, impedindo que cookies de terceiros acompanhem o usuário de um site para outro.",
      "Cookies são programas executáveis que o site instala no computador e, por isso, são bloqueados pelo antivírus por padrão.",
      "Cookies de terceiros são gravados pelo próprio domínio exibido na barra de endereços e servem apenas para manter o login.",
      "A navegação privativa (anônima) impede que o provedor de conexão e os sites visitados identifiquem o endereço IP do usuário.",
      "Excluir o cache do navegador apaga automaticamente todos os cookies, pois ambos ficam armazenados no mesmo arquivo.",
    ],
    correta: 0,
    explicacao:
      "Desde 2022 a Proteção Total contra Cookies (Total Cookie Protection) vem ativada por padrão no Firefox: cada site recebe seu próprio “pote de cookies” (cookie jar), de modo que um rastreador embutido em vários sites não consegue ler, em um, o cookie gravado em outro. Cookies são pequenos arquivos de texto com dados (identificador de sessão, preferências), não programas executáveis. Cookies de terceiros vêm de domínios diferentes do site visitado — anúncios, botões de redes sociais, scripts de análise — e são os usados no rastreamento entre sites. A navegação privativa apenas deixa de guardar histórico, cookies e dados de formulário no aparelho ao fim da sessão; o IP continua visível ao provedor e aos sites. E cache (cópias de páginas, imagens e scripts) e cookies são dados distintos, com opções separadas de exclusão.",
    origem: "banco",
    fonte: "FGV · PC-PI 2025 · Oficial Investigador (adaptada)",
  },
  {
    id: "ti-057",
    materia: "ti",
    topico: "Internet, intranet e extranet; IPv4/IPv6, portas e protocolos (HTTP/HTTPS, FTP, SSH, DHCP, NAT, proxy)",
    enunciado:
      "Em resposta a um ofício, uma operadora informou que a conexão investigada utilizou o endereço 2804:14c:65a1:8b00::1f. Na reunião da equipe, discutiu-se a transição do protocolo IPv4 para o IPv6, motivada sobretudo pelo esgotamento dos endereços IPv4 disponíveis.\n\nNo contexto dos protocolos IPv4 e IPv6, assinale a afirmativa correta.",
    alternativas: [
      "O IPv4 utiliza endereços de 64 bits, enquanto o IPv6 utiliza endereços de 128 bits.",
      "O IPv6 elimina completamente o NAT e, com ele, a necessidade de firewalls na rede.",
      "O endereço informado pela operadora é IPv4, escrito em notação hexadecimal compactada.",
      "O IPv6 foi projetado com suporte nativo a recursos de segurança (IPsec) e de mobilidade, que no IPv4 são acréscimos opcionais.",
      "O IPv6 oferece apenas quatro vezes mais endereços que o IPv4, já que seu endereço tem o quádruplo do tamanho.",
    ],
    correta: 3,
    explicacao:
      "O IPv6 usa endereços de 128 bits, escritos em oito grupos hexadecimais separados por dois-pontos (grupos de zeros consecutivos podem ser abreviados por “::”, como no endereço do enunciado), e foi concebido com suporte nativo ao IPsec e à mobilidade, recursos que no IPv4 dependem de implementações adicionais. O IPv4 tem 32 bits, não 64, e é escrito em quatro números decimais separados por pontos (por exemplo, 189.45.10.7). Com 128 bits, o espaço do IPv6 é 2 elevado a 96 vezes maior que o do IPv4 — e não apenas quatro vezes, já que cada bit a mais dobra a quantidade de endereços. O IPv6 reduz a necessidade de NAT, mas não elimina o firewall: com endereços públicos para cada dispositivo, a filtragem continua indispensável. Na investigação, o IPv6 tende a facilitar a individualização da conexão, ao passo que, no IPv4, o compartilhamento de endereços (CGNAT) exige também a porta lógica de origem.",
    origem: "banco",
    fonte: "FGV · PC-MG 2025 · Investigador (adaptada)",
  },
  {
    id: "ti-058",
    materia: "ti",
    topico: "Internet, intranet e extranet; IPv4/IPv6, portas e protocolos (HTTP/HTTPS, FTP, SSH, DHCP, NAT, proxy)",
    enunciado:
      "Na reforma de uma delegacia, a equipe de TI precisa decidir como conectar as estações da sala de análise, que transferem diariamente grandes volumes de vídeo, e os notebooks dos agentes, que circulam por todo o prédio. As opções são a rede cabeada (Ethernet) e a rede sem fio (Wi-Fi).\n\nSobre as características dessas redes, assinale a afirmativa correta.",
    alternativas: [
      "Redes sem fio são imunes a interferências de outros equipamentos e de paredes, o que as torna mais estáveis que as cabeadas.",
      "A rede cabeada dispensa endereçamento IP, pois cada estação é identificada apenas pelo cabo em que está ligada.",
      "Uma rede Wi-Fi protegida com WPA3 transmite os dados sem usar ondas de rádio, o que impede sua captação fora do prédio.",
      "Redes sem fio oferecem, em regra, maior largura de banda e menor latência que as cabeadas, motivo pelo qual são as recomendadas para servidores.",
      "Redes cabeadas tendem a oferecer mais estabilidade, maior largura de banda efetiva e mais segurança física, enquanto as redes sem fio priorizam a mobilidade.",
    ],
    correta: 4,
    explicacao:
      "O cabo (par trançado ou fibra) oferece conexão estável, com pouca interferência, baixa latência e alta taxa efetiva, e só é alcançado por quem tem acesso físico à infraestrutura — por isso é o indicado para as estações de análise de vídeo e para servidores. O Wi-Fi traz mobilidade e instalação simples, mas usa um meio compartilhado, sujeito a interferência de outros equipamentos, à distância e a obstáculos como paredes, e seu sinal pode ser captado fora do prédio; a criptografia WPA2/WPA3 protege o conteúdo transmitido, mas a transmissão continua sendo feita por ondas de rádio. Nas duas redes, as estações precisam de endereço IP para se comunicar, normalmente atribuído por DHCP.",
    origem: "banco",
    fonte: "FGV · PC-MG 2025 · Investigador (adaptada)",
  },
  {
    id: "ti-059",
    materia: "ti",
    topico: "Internet, intranet e extranet; IPv4/IPv6, portas e protocolos (HTTP/HTTPS, FTP, SSH, DHCP, NAT, proxy)",
    enunciado:
      "Ao analisar os registros do firewall de uma delegacia, o perito encontrou conexões relacionadas aos protocolos listados a seguir.\n\n1. HTTPS\n2. SSH\n3. DNS\n4. DHCP\n\nRelacione cada protocolo à sua função.\n\n( ) Atribui automaticamente endereço IP, máscara, gateway e servidores DNS aos dispositivos que entram na rede.\n( ) Traduz nomes de domínio em endereços IP, usando normalmente a porta 53.\n( ) Permite acesso remoto seguro, por linha de comando, a outro computador, usando normalmente a porta 22.\n( ) Transfere páginas web com criptografia TLS, usando normalmente a porta 443.\n\nA sequência correta, de cima para baixo, é:",
    alternativas: [
      "1, 3, 2, 4.",
      "4, 2, 3, 1.",
      "4, 3, 2, 1.",
      "3, 4, 1, 2.",
      "2, 3, 4, 1.",
    ],
    correta: 2,
    explicacao:
      "DHCP (portas UDP 67 e 68) entrega automaticamente IP, máscara, gateway e DNS a quem entra na rede; DNS (porta 53) resolve nomes de domínio em endereços IP; SSH (porta 22) dá acesso remoto criptografado por linha de comando, substituindo o antigo Telnet (porta 23), que trafegava em texto claro; e HTTPS (porta 443) é o HTTP protegido por TLS — o HTTP sem criptografia usa a porta 80. Logo, a sequência é 4, 3, 2, 1. Outras portas clássicas: 20 e 21 (FTP), 25 (SMTP), 110 (POP3), 143 (IMAP) e 3389 (área de trabalho remota do Windows, o RDP). Saber que serviço cada porta costuma indicar ajuda a interpretar registros de firewall e de servidores.",
    origem: "banco",
  },
  {
    id: "ti-060",
    materia: "ti",
    topico: "Internet, intranet e extranet; IPv4/IPv6, portas e protocolos (HTTP/HTTPS, FTP, SSH, DHCP, NAT, proxy)",
    enunciado:
      "A Polícia Civil mantém um portal com sistemas de consulta, manuais e formulários, acessível apenas aos seus servidores pela rede interna das unidades e baseado nos mesmos protocolos e tecnologias da internet (TCP/IP, HTTP/HTTPS e navegador). Uma parte desse portal foi liberada, mediante login e senha, para que servidores do Ministério Público e do Poder Judiciário consultem pela internet os laudos de seu interesse. Já os delegados em viagem precisam acessar o portal interno completo a partir de redes externas.\n\nSobre essa estrutura, assinale a afirmativa correta.",
    alternativas: [
      "O portal interno não pode ser considerado intranet, porque utiliza os mesmos protocolos da internet.",
      "A parte liberada ao Ministério Público e ao Judiciário passou a integrar a internet pública, acessível a qualquer pessoa.",
      "Para acessar o portal interno de fora da rede, basta que o delegado use a navegação privativa, que criptografa a conexão.",
      "O portal interno é uma intranet; a parte liberada aos parceiros autorizados funciona como extranet; e o acesso dos delegados em viagem pode ser feito por VPN.",
      "Intranet e extranet exigem cabeamento físico exclusivo, sem qualquer conexão com a internet.",
    ],
    correta: 3,
    explicacao:
      "Intranet é a rede privada de uma organização que usa as mesmas tecnologias da internet (TCP/IP, HTTP, navegadores, e-mail), com acesso restrito aos seus membros — usar os protocolos da internet é justamente sua característica, e não algo que a descaracterize. Extranet é a extensão controlada da intranet a usuários externos autorizados (parceiros, fornecedores, outros órgãos), com autenticação, e não se confunde com a internet pública, aberta a todos. O acesso de fora costuma usar VPN, que autentica o usuário e cria um túnel criptografado, pela internet, até a rede interna. A navegação privativa só evita que histórico e cookies fiquem gravados no aparelho, sem criptografar o tráfego nem dar acesso à rede interna; e intranets e extranets podem trafegar — e geralmente trafegam — pela infraestrutura da internet, protegidas por firewall, autenticação e criptografia.",
    origem: "banco",
  },
  {
    id: "ti-061",
    materia: "ti",
    topico: "Redes sociais, plataformas digitais, registros eletrônicos (logs) e metadados",
    enunciado:
      "Na investigação de ameaças feitas por um perfil em rede social, a plataforma informou que o último acesso ocorreu a partir do IP 177.32.140.18, em 12/03/2026, às 14h32min10s (horário de Brasília). Ao receber a ordem judicial com esses dados, o provedor de conexão respondeu que, naquele momento, o endereço era compartilhado simultaneamente por centenas de clientes, por meio da técnica CGNAT (NAT em escala de operadora).\n\nPara individualizar o assinante responsável pela conexão, o dado adicional a ser obtido junto à plataforma é:",
    alternativas: [
      "o endereço MAC do celular usado no acesso, que acompanha o pacote até o servidor da plataforma.",
      "o nome do servidor DNS configurado no aparelho do usuário.",
      "o tipo de navegador e de sistema operacional (user-agent), que identifica o assinante de forma única.",
      "nenhum outro dado, pois um IP público, associado a data e hora, sempre corresponde a um único assinante.",
      "a porta lógica de origem da conexão, a ser combinada com o IP, a data, o horário e o fuso horário do acesso.",
    ],
    correta: 4,
    explicacao:
      "Com o CGNAT, o provedor de conexão faz um único IP público ser usado ao mesmo tempo por muitos clientes, distinguindo-os pela porta lógica de origem; assim, só a combinação IP + porta + data + hora (com fuso horário) permite apontar o assinante. Por isso os pedidos às plataformas devem incluir a porta de origem, dado que o STJ já reconheceu dever ser fornecido pelos provedores de aplicação. O endereço MAC identifica a placa de rede apenas dentro da rede local e não ultrapassa o primeiro roteador; o servidor DNS e o user-agent (navegador e sistema) são comuns a milhões de usuários e servem, no máximo, como indícios complementares; e, no cenário de compartilhamento descrito, IP com data e hora não basta para individualizar ninguém.",
    origem: "banco",
  },
  {
    id: "ti-062",
    materia: "ti",
    topico: "Redes sociais, plataformas digitais, registros eletrônicos (logs) e metadados",
    enunciado:
      "Uma vítima de extorsão entregou à polícia a foto que recebeu do autor, salva no próprio celular a partir do arquivo original, enviado como documento. Ao examinar as propriedades do arquivo JPEG, o agente encontrou dados EXIF com data e hora da captura, marca e modelo do aparelho e coordenadas de GPS.\n\nSobre esses metadados, assinale a afirmativa correta.",
    alternativas: [
      "Indicam quando, com que aparelho e onde a foto teria sido captada, mas podem ser removidos ou alterados e, por isso, devem ser corroborados por outras provas.",
      "São parte visível da imagem e, por isso, aparecem impressos no canto da foto quando ela é aberta em qualquer visualizador.",
      "Não podem ser alterados depois da captura, de modo que bastam, sozinhos, para provar o local e o horário do fato.",
      "Indicam sempre a data e a hora em que a foto foi enviada pela internet, e não as da captura.",
      "São preservados por todas as redes sociais e aplicativos de mensagem, inclusive quando a imagem é enviada comprimida, como foto comum.",
    ],
    correta: 0,
    explicacao:
      "Metadados são “dados sobre dados”: no padrão EXIF, a câmera ou o celular grava no arquivo a data e a hora da captura (segundo o relógio do aparelho), a marca e o modelo, configurações da câmera e, se a localização estiver ativada, as coordenadas de GPS. Eles não aparecem na imagem — são vistos nas propriedades do arquivo ou em ferramentas próprias — e podem ser apagados ou editados com programas simples, razão pela qual funcionam como indício a ser confirmado por outros elementos (registros da plataforma, perícia, testemunhas). Muitas redes sociais e aplicativos de mensagem removem ou reduzem os metadados ao comprimir a foto enviada como imagem comum, o que torna valioso obter o arquivo original. E a data do EXIF é a da captura registrada pelo aparelho, não a do envio.",
    origem: "banco",
  },
  {
    id: "ti-063",
    materia: "ti",
    topico: "Redes sociais, plataformas digitais, registros eletrônicos (logs) e metadados",
    enunciado:
      "Em resposta a uma requisição judicial, o administrador de um site de comércio eletrônico entregou o seguinte registro (log) do servidor web, referente a um acesso à conta usada em uma fraude:\n\n177.32.140.18 - - [12/Mar/2026:17:32:10 +0000] 'POST /login HTTP/1.1' 200 512 'Mozilla/5.0 (Linux; Android 14)'\n\nSabendo que o horário de Brasília corresponde a UTC−3, sem horário de verão, assinale a afirmativa correta sobre o registro.",
    alternativas: [
      "O código 200 indica que o servidor recusou a requisição de login, por erro de senha.",
      "O endereço 177.32.140.18 pertence a uma faixa reservada a redes privadas e, por isso, não pode ser rastreado.",
      "O acesso ocorreu às 17h32min10s no horário de Brasília, pois o servidor registra sempre o horário local do usuário.",
      "O acesso ocorreu às 14h32min10s no horário de Brasília, por uma requisição POST à página de login, processada com o código 200, a partir de um navegador em Android.",
      "O registro identifica, por si só, a pessoa que digitou a senha, dispensando outras diligências.",
    ],
    correta: 3,
    explicacao:
      "O indicador +0000 mostra que o servidor gravou o horário em UTC; subtraindo 3 horas, chega-se a 14h32min10s em Brasília — converter o fuso é passo obrigatório antes de pedir dados ao provedor de conexão, pois um erro de horas aponta outro usuário. “POST /login” é o envio dos dados do formulário de login; o código de status 200 indica que a requisição HTTP foi processada com sucesso (erros do cliente começam por 4, como 401 e 404; erros do servidor, por 5) — o que, sozinho, não prova que a senha estava correta, ponto a esclarecer com o administrador do site; e o user-agent informa navegador e sistema, aqui um Android 14. O IP 177.32.140.18 é público: as faixas privadas são 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16. Por fim, o log identifica uma conexão, não uma pessoa: é preciso obter do provedor de conexão o assinante (com IP, porta, data e hora) e reunir outros elementos que liguem o acesso a alguém.",
    origem: "banco",
  },
  {
    id: "ti-064",
    materia: "ti",
    topico: "Dispositivos móveis (Android e iOS): permissões, atualizações, backup e localização",
    enunciado:
      "Ao revisar os celulares funcionais, a equipe de TI notou que um aplicativo de lanterna, instalado em um aparelho Android, tinha permissão para acessar contatos, SMS, microfone e localização precisa o tempo todo.\n\nSobre a gestão de permissões em dispositivos móveis, assinale a afirmativa correta.",
    alternativas: [
      "Permissões concedidas a um aplicativo no Android só podem ser revogadas com a desinstalação do aplicativo.",
      "No iOS, os aplicativos recebem acesso automático à localização e ao microfone, sem que o usuário seja consultado.",
      "Permitir a localização “apenas durante o uso do app” equivale a liberá-la o tempo todo, pois o sistema não distingue o primeiro do segundo plano.",
      "O gerenciador de permissões do Android serve apenas para consultar quais aplicativos usam cada recurso, sem permitir alterações.",
      "O usuário pode revogar cada permissão a qualquer momento nas configurações do sistema e, nas versões recentes do Android, liberar a localização só durante o uso do app.",
    ],
    correta: 4,
    explicacao:
      "Desde o Android 6, as permissões sensíveis são pedidas durante o uso e podem ser revistas a qualquer momento em Configurações > Apps (ou no Gerenciador de permissões), por aplicativo ou por recurso — sem desinstalar nada. A partir do Android 10 é possível permitir a localização só enquanto o app está em uso (o sistema distingue primeiro e segundo plano), e o Android 11 trouxe a permissão “só desta vez” e a remoção automática das permissões de apps não usados por alguns meses. No iOS, o acesso à localização, ao microfone, à câmera, aos contatos e às fotos também depende de autorização expressa, gerenciada em Ajustes > Privacidade e Segurança. O princípio é o do menor privilégio: uma lanterna não precisa de contatos, SMS nem microfone — pedido desproporcional é sinal clássico de aplicativo abusivo ou malicioso.",
    origem: "banco",
  },
  {
    id: "ti-065",
    materia: "ti",
    topico: "Dispositivos móveis (Android e iOS): permissões, atualizações, backup e localização",
    enunciado:
      "Em um golpe investigado pela delegacia, as vítimas recebiam por mensagem um link para baixar a “nova versão do aplicativo do banco”, um arquivo APK hospedado fora da Play Store. Depois de instalado, o aplicativo pedia a permissão de acessibilidade e passava a controlar a tela do aparelho.\n\nSobre a instalação e a segurança de aplicativos em celulares Android, assinale a afirmativa correta.",
    alternativas: [
      "O Android bloqueia de forma absoluta a instalação de arquivos APK obtidos fora da Play Store, sem possibilidade de autorização pelo usuário.",
      "Aplicativos instalados fora da loja oficial recebem automaticamente todas as permissões, sem nenhum aviso ao usuário.",
      "Para instalar um APK baixado fora da Play Store, o usuário precisa autorizar o aplicativo de origem a “instalar apps desconhecidos”, e o Google Play Protect pode verificar o app e alertar ou bloquear os nocivos.",
      "A permissão de acessibilidade se limita a aumentar o tamanho da fonte e não permite ler nem controlar o conteúdo exibido na tela.",
      "Manter o sistema desatualizado reduz o risco de golpes, pois as atualizações de segurança costumam reativar permissões revogadas.",
    ],
    correta: 2,
    explicacao:
      "No Android, a instalação de APKs fora da Play Store (sideloading) é possível, mas exige que o usuário conceda ao aplicativo usado para abrir o arquivo (navegador, gerenciador de arquivos, mensageiro) a permissão especial “Instalar apps desconhecidos” — sem ela, o sistema bloqueia a instalação. O Google Play Protect analisa os apps instalados, inclusive os de fora da loja, e pode alertar, desativar ou bloquear os nocivos. Os serviços de acessibilidade existem para auxiliar pessoas com deficiência, mas permitem ler a tela e executar toques em nome do usuário — por isso são o alvo preferido dos trojans bancários e só devem ser liberados a aplicativos confiáveis. As demais permissões continuam sujeitas a pedido do app e autorização do usuário, mesmo fora da loja, e as atualizações do sistema corrigem vulnerabilidades, em vez de reativar permissões.",
    origem: "banco",
  },
  {
    id: "ti-066",
    materia: "ti",
    topico: "Microsoft 365, Google Workspace e compartilhamento de arquivos em nuvem (permissões, links e versões)",
    enunciado:
      "Uma delegada compartilhou no Google Drive institucional a planilha de diligências de uma operação. Ela quer que: (1) dois agentes possam alterar a planilha; (2) o promotor apenas inclua observações, sem modificar o conteúdo; (3) ninguém além das pessoas adicionadas consiga abrir o arquivo, mesmo que o link vaze; e (4) seja possível consultar e restaurar o estado da planilha em dias anteriores.\n\nAs configurações que atendem a esses objetivos são:",
    alternativas: [
      "agentes como Leitores; promotor como Editor; acesso geral “Qualquer pessoa com o link”; e restauração pela Lixeira do Drive.",
      "agentes como Editores; promotor como Leitor; acesso geral “Qualquer pessoa com o link”; e restauração pelo histórico do navegador.",
      "agentes como Proprietários; promotor como Comentarista; acesso geral “Qualquer pessoa com o link”; e restauração pelo cache do navegador.",
      "agentes como Editores; promotor como Comentarista; acesso geral “Restrito”; e restauração pelo Histórico de versões.",
      "agentes como Comentaristas; promotor como Editor; acesso geral “Restrito”; e restauração por cópias manuais gravadas semanalmente em pen drive.",
    ],
    correta: 3,
    explicacao:
      "No Google Drive, o Editor altera o conteúdo (e, por padrão, pode compartilhar); o Comentarista vê e insere comentários e sugestões, sem editar; o Leitor apenas visualiza. Com o acesso geral “Restrito”, só abrem o arquivo as pessoas adicionadas, ainda que o link chegue a terceiros — já “Qualquer pessoa com o link” libera o acesso a quem o tiver. Planilhas, documentos e apresentações Google guardam o Histórico de versões (Arquivo > Histórico de versões), que mostra quem alterou o quê e quando e permite restaurar uma versão anterior ou nomear versões importantes. A Lixeira recupera arquivos excluídos, não estados anteriores do conteúdo; histórico e cache do navegador nada têm a ver com as versões do arquivo; e cópias manuais semanais perderiam as alterações dos dias intermediários. O proprietário ainda pode impedir que editores mudem o compartilhamento e que leitores e comentaristas baixem, imprimam ou copiem o arquivo.",
    origem: "banco",
  },
  {
    id: "ti-067",
    materia: "ti",
    topico: "Microsoft 365, Google Workspace e compartilhamento de arquivos em nuvem (permissões, links e versões)",
    enunciado:
      "Três escrivães precisam redigir, ao mesmo tempo, partes diferentes do relatório de uma operação no Word do Microsoft 365. Um deles sugeriu enviar o arquivo por e-mail a cada colega e depois juntar as versões; outro propôs salvar o documento no OneDrive institucional (ou em uma biblioteca do SharePoint) e compartilhá-lo com os demais.\n\nSobre a segunda proposta, assinale a afirmativa correta.",
    alternativas: [
      "A coautoria só funciona se os três usarem o mesmo computador, alternando o login no Word.",
      "O Salvamento Automático do Word funciona da mesma forma para arquivos gravados apenas em um pen drive.",
      "Ao ser salvo no OneDrive, o documento deixa de poder ser aberto no Word instalado no computador, só no navegador.",
      "O compartilhamento pelo OneDrive impede o uso de comentários e do controle de alterações no documento.",
      "Com o arquivo no OneDrive ou no SharePoint, os três podem editá-lo ao mesmo tempo (coautoria), com salvamento automático e histórico de versões.",
    ],
    correta: 4,
    explicacao:
      "Quando o documento está armazenado no OneDrive ou no SharePoint, o Microsoft 365 permite a coautoria: várias pessoas editam ao mesmo tempo, no aplicativo instalado ou no navegador, vendo quem está trabalhando em cada trecho, e o Salvamento Automático grava as mudanças continuamente — recurso que depende justamente de o arquivo estar na nuvem, e não em pen drive ou pasta local. O histórico de versões permite consultar e restaurar estados anteriores, e comentários, @menções e controle de alterações continuam disponíveis. Trocar arquivos por e-mail gera cópias divergentes e trabalho manual de consolidação. No Google Workspace, o equivalente é editar o arquivo no Google Docs, também com edição simultânea e histórico de versões.",
    origem: "banco",
  },
  {
    id: "ti-068",
    materia: "ti",
    topico: "Computação em nuvem (IaaS, PaaS, SaaS) e armazenamento de evidências digitais",
    enunciado:
      "Um estado estuda onde hospedar o novo sistema de gestão de inquéritos. A proposta técnica prevê manter em datacenter próprio, de uso exclusivo da Polícia Civil, as bases com dados sigilosos de investigações e usar os recursos de um provedor de nuvem aberto ao mercado para o portal de serviços ao cidadão, sujeito a picos de acesso, com integração entre os dois ambientes. Cogitou-se, ainda, como alternativa, compartilhar uma infraestrutura com as polícias de outros estados, que têm requisitos de segurança semelhantes.\n\nSegundo os modelos de implantação de nuvem, a proposta técnica e a alternativa cogitada correspondem, respectivamente, a:",
    alternativas: [
      "nuvem híbrida e nuvem comunitária.",
      "nuvem pública e nuvem privada.",
      "nuvem privada e nuvem pública.",
      "nuvem comunitária e nuvem híbrida.",
      "software como serviço (SaaS) e plataforma como serviço (PaaS).",
    ],
    correta: 0,
    explicacao:
      "Pelos modelos de implantação consagrados pelo NIST, a nuvem privada é de uso exclusivo de uma organização; a pública é oferecida ao público em geral por um provedor; a comunitária é compartilhada por organizações com interesses e requisitos comuns, como polícias de diferentes estados; e a híbrida combina duas ou mais dessas nuvens, integradas, permitindo, por exemplo, manter dados sensíveis na privada e usar a pública para absorver picos de demanda. Assim, a proposta técnica é de nuvem híbrida e a alternativa, de nuvem comunitária. SaaS e PaaS (ao lado do IaaS) são modelos de serviço — dizem o que se contrata: aplicativo pronto, plataforma ou infraestrutura —, e não modelos de implantação, que dizem a quem a nuvem se destina e como é compartilhada.",
    origem: "banco",
  },
  {
    id: "ti-069",
    materia: "ti",
    topico: "Lógica de programação, aplicações web (HTML, CSS, JavaScript), bancos de dados (SQL) e APIs",
    enunciado:
      "Durante um curso de análise de dados, os agentes receberam o algoritmo a seguir, escrito em pseudocódigo.\n\nx ← 0\npara i de 1 até 5 faça\n    se (i mod 2 = 0) então\n        x ← x + i\n    senão\n        x ← x − 1\n    fim se\nfim para\nescreva(x)\n\nConsiderando que “mod” retorna o resto da divisão inteira, o valor exibido ao final da execução é:",
    alternativas: [
      "−3.",
      "0.",
      "6.",
      "3.",
      "9.",
    ],
    correta: 3,
    explicacao:
      "Acompanhando cada repetição (teste de mesa): i = 1 é ímpar, então x = 0 − 1 = −1; i = 2 é par, x = −1 + 2 = 1; i = 3, ímpar, x = 1 − 1 = 0; i = 4, par, x = 0 + 4 = 4; i = 5, ímpar, x = 4 − 1 = 3. O comando escreva(x) só é executado depois do fim do laço e exibe 3. O valor 6 seria a simples soma dos pares (2 + 4), esquecendo os decrementos; 9 é a soma dos ímpares (1 + 3 + 5); −3 corresponde a contar só os três decrementos; e 0 é o valor de x ao fim da terceira repetição. O teste de mesa — anotar o valor de cada variável a cada passo — é o caminho seguro nesse tipo de questão.",
    origem: "banco",
  },
  {
    id: "ti-070",
    materia: "ti",
    topico: "Lógica de programação, aplicações web (HTML, CSS, JavaScript), bancos de dados (SQL) e APIs",
    enunciado:
      "Ao analisar uma página falsa que imitava o site de um banco, um agente exibiu o código-fonte e encontrou o trecho a seguir.\n\n<form action='https://coleta-dados.exemplo.net/recebe.php' method='post'>\n  <input type='text' name='cpf'>\n  <input type='password' name='senha'>\n  <button type='submit'>Entrar</button>\n</form>\n\nSobre esse trecho, assinale a afirmativa correta.",
    alternativas: [
      "O atributo type='password' criptografa a senha no computador da vítima antes do envio, o que impede sua leitura pelo destinatário.",
      "Como o método é post, os dados digitados aparecem na barra de endereços, anexados ao final da URL.",
      "O trecho é escrito em JavaScript e é executado no servidor do banco verdadeiro, que repassa os dados ao golpista.",
      "O atributo name define o texto que a vítima vê escrito ao lado de cada campo do formulário.",
      "Ao clicar em Entrar, o navegador envia o CPF e a senha digitados, por requisição HTTP POST, ao endereço indicado em action, ainda que este seja de outro domínio.",
    ],
    correta: 4,
    explicacao:
      "O trecho é HTML, a linguagem de marcação que estrutura a página: o elemento form reúne os campos, e o atributo action indica para onde os dados serão enviados — aqui, um servidor do golpista, diferente do domínio exibido —, enquanto method='post' faz o navegador mandá-los no corpo de uma requisição HTTP POST. O type='password' apenas oculta os caracteres na tela, sem criptografar nada; a proteção do tráfego depende do HTTPS, e mesmo com HTTPS os dados chegam legíveis ao servidor de destino. É no método GET que os campos aparecem na URL. Não há JavaScript nem participação do banco verdadeiro: o HTML é interpretado pelo navegador da vítima. E o atributo name é o nome técnico do campo, usado no envio (cpf=...&senha=...); o texto visível vem de rótulos (label) ou do placeholder. Examinar o action de um formulário falso ajuda a identificar o servidor que recebe os dados das vítimas.",
    origem: "banco",
  },
  {
    id: "ti-071",
    materia: "ti",
    topico: "Lógica de programação, aplicações web (HTML, CSS, JavaScript), bancos de dados (SQL) e APIs",
    enunciado:
      "O banco de dados de ocorrências de uma delegacia tem a tabela OCORRENCIA, com as colunas id (chave primária), tipo, bairro e data_fato. Um analista executou a seguinte consulta:\n\nSELECT bairro, COUNT(*) AS total\nFROM OCORRENCIA\nWHERE tipo = 'ROUBO'\nGROUP BY bairro\nHAVING COUNT(*) > 10\nORDER BY total DESC;\n\nO resultado dessa consulta é:",
    alternativas: [
      "a lista de todas as ocorrências de roubo, uma por linha, com o bairro e a data do fato, das mais recentes para as mais antigas.",
      "o número total de ocorrências de qualquer tipo em cada bairro, exibindo apenas os bairros com mais de 10 registros.",
      "os bairros com mais de 10 ocorrências de roubo, cada um com a respectiva quantidade, do bairro com mais roubos para o com menos.",
      "os bairros com até 10 ocorrências de roubo, em ordem alfabética crescente.",
      "a exclusão, da tabela, dos registros de roubo dos bairros com mais de 10 ocorrências, ordenados por quantidade.",
    ],
    correta: 2,
    explicacao:
      "A consulta é lida em etapas: WHERE filtra as linhas antes do agrupamento (só as do tipo ROUBO); GROUP BY reúne essas linhas por bairro; COUNT(*) conta quantas há em cada grupo; HAVING filtra os grupos já formados (só os com mais de 10); e ORDER BY total DESC ordena do maior para o menor. O resultado tem uma linha por bairro, e não por ocorrência; os outros tipos de crime foram excluídos pelo WHERE; o operador > 10 elimina justamente os bairros com até 10; e SELECT apenas consulta — apagar registros exigiria o comando DELETE. Diferença clássica em prova: WHERE filtra linhas; HAVING filtra grupos.",
    origem: "banco",
  },
  {
    id: "ti-072",
    materia: "ti",
    topico: "Lógica de programação, aplicações web (HTML, CSS, JavaScript), bancos de dados (SQL) e APIs",
    enunciado:
      "O banco de dados que integra inquéritos, boletins de ocorrência, laudos periciais e antecedentes criminais de uma Polícia Civil segue a arquitetura de três níveis do padrão ANSI/SPARC (externo, conceitual e interno). Para melhorar o desempenho, a equipe de TI transferiu as tabelas para novos discos, reorganizou os arquivos de dados e criou índices, sem alterar as tabelas, os relacionamentos nem os sistemas de consulta usados nas delegacias, que continuaram funcionando normalmente.\n\nNa arquitetura ANSI/SPARC, essa situação ilustra a:",
    alternativas: [
      "independência lógica de dados, que permite alterar o esquema conceitual sem afetar o armazenamento físico.",
      "normalização, que elimina redundâncias decompondo as tabelas em relações menores.",
      "integridade referencial, que impede chaves estrangeiras sem correspondência na tabela referenciada.",
      "independência física de dados, que permite modificar a estrutura de armazenamento sem impacto sobre o esquema conceitual.",
      "fragmentação horizontal, que distribui os registros entre servidores alterando o esquema externo de cada usuário.",
    ],
    correta: 3,
    explicacao:
      "A arquitetura ANSI/SPARC separa três níveis: o externo (as visões de cada grupo de usuários e aplicações), o conceitual (a descrição lógica de todo o banco — tabelas, atributos, relacionamentos e restrições) e o interno (como os dados são fisicamente armazenados — arquivos, índices, discos). Independência física é poder mudar o nível interno sem alterar o conceitual — exatamente o caso de trocar discos, reorganizar arquivos e criar índices sem mexer nas tabelas nem nos sistemas. Independência lógica é poder mudar o esquema conceitual (por exemplo, acrescentar uma tabela ou coluna) sem afetar as visões externas, e não diz respeito ao armazenamento físico. Normalização e integridade referencial são temas de projeto e de restrições do modelo relacional, que não descrevem a mudança narrada; e a fragmentação horizontal, própria de bancos distribuídos, divide registros entre locais justamente sem que os usuários precisem perceber.",
    origem: "banco",
    fonte: "FGV · PC-PI 2025 · Oficial Investigador (adaptada)",
  },
  {
    id: "ti-073",
    materia: "ti",
    topico: "Lógica de programação, aplicações web (HTML, CSS, JavaScript), bancos de dados (SQL) e APIs",
    enunciado:
      "Um sistema da Polícia Civil passou a consultar a situação de veículos por meio de uma API REST disponibilizada pelo órgão de trânsito. A documentação informa que a requisição GET https://api.transito.exemplo/v1/veiculos/ABC1D23, enviada com um token de acesso no cabeçalho Authorization, devolve os dados do veículo em formato JSON.\n\nSobre esse tipo de integração, assinale a afirmativa correta.",
    alternativas: [
      "Uma API REST é um banco de dados instalado no computador do usuário, que dispensa comunicação pela rede.",
      "O método GET é usado para apagar o recurso indicado na URL, e a resposta em JSON confirma a exclusão.",
      "O formato JSON é uma linguagem de programação que só pode ser lida por sistemas escritos em JavaScript.",
      "O código de status 404 na resposta significaria que a consulta foi concluída com sucesso e que o veículo não tem restrições.",
      "A API expõe recursos por endereços (endpoints) acessados via HTTP: o GET consulta o veículo, o token autentica o sistema solicitante e a resposta vem em JSON.",
    ],
    correta: 4,
    explicacao:
      "APIs (interfaces de programação de aplicações) permitem que sistemas conversem entre si; no estilo REST, cada recurso tem um endereço (endpoint) e é manipulado pelos métodos do HTTP: GET consulta, POST cria, PUT ou PATCH alteram e DELETE exclui. O token no cabeçalho Authorization identifica e autoriza o sistema que faz a chamada, o que permite controlar e registrar quem consultou o quê. JSON (JavaScript Object Notation) é um formato de dados em texto, organizado em pares nome-valor, que, apesar do nome, é lido por praticamente qualquer linguagem. Os códigos de status indicam o resultado: 200 é sucesso; 401, falta de autenticação válida; 403, acesso negado; 404, recurso não encontrado; 500, erro no servidor. A API roda em um servidor e é acessada pela rede — não é um banco de dados local.",
    origem: "banco",
  },
  {
    id: "ti-074",
    materia: "ti",
    topico: "Sistemas operacionais e aplicativos (Windows 11, Office, Android/iOS)",
    enunciado:
      "Os computadores e celulares apreendidos em uma operação usavam diferentes sistemas operacionais: Windows 11, Android e iOS. Em uma aula sobre o tema, o instrutor pediu que os agentes identificassem as atribuições típicas de um sistema operacional.\n\nNÃO é atribuição de um sistema operacional como o Windows 11 o gerenciamento:",
    alternativas: [
      "das caixas postais de correio eletrônico dos usuários.",
      "da memória principal, distribuída entre os programas em execução.",
      "dos processos e tarefas em execução, inclusive de sua prioridade no uso do processador.",
      "dos sistemas de arquivos e do acesso aos discos.",
      "dos dispositivos de entrada e saída, como impressoras e scanners, por meio de drivers.",
    ],
    correta: 0,
    explicacao:
      "O sistema operacional gerencia os recursos do equipamento e serve de intermediário entre o hardware e os aplicativos: escalona processos e tarefas no processador, distribui e protege a memória, organiza os sistemas de arquivos (NTFS no Windows; ext4 ou F2FS no Android; APFS no iOS) e controla os dispositivos de entrada e saída por meio de drivers. Já a gestão de caixas postais de e-mail é função dos aplicativos clientes (Outlook, Thunderbird, aplicativo do Gmail) e dos servidores de correio do provedor, que rodam sobre o sistema operacional, mas não integram suas atribuições essenciais.",
    origem: "banco",
    fonte: "FGV · PC-RN 2021 · Agente (adaptada)",
  },
  {
    id: "ti-075",
    materia: "ti",
    topico: "Windows 11: atalhos, Explorador de Arquivos, configurações, contas, segurança e atualização",
    enunciado:
      "O computador do cartório ficou lento durante a gravação de oitivas. Para descobrir qual recurso do equipamento estava sobrecarregado, o escrivão abriu o Gerenciador de Tarefas do Windows 11 pelo atalho Ctrl+Shift+Esc e acessou a seção Desempenho.\n\nA lista que contém apenas recursos cuja utilização pode ser acompanhada nessa seção é:",
    alternativas: [
      "Arquivos, CPU, Energia e Firewall.",
      "Arquivos, CPU, Lixeira e Memória virtual.",
      "Disco, Firewall, Ethernet e Memória.",
      "Disco, Ethernet, Memória e Impressão.",
      "CPU, Memória, Disco e Ethernet (ou Wi-Fi).",
    ],
    correta: 4,
    explicacao:
      "A seção Desempenho do Gerenciador de Tarefas mostra, em gráficos em tempo real, a utilização da CPU, da memória, de cada disco, dos adaptadores de rede (Ethernet ou Wi-Fi) e da GPU, quando houver. Firewall, Lixeira, impressão e “arquivos” não são recursos monitorados ali: o firewall é configurado na Segurança do Windows; as filas de impressão ficam em Impressoras e scanners; e a Lixeira é uma pasta do sistema. Na seção Processos é possível ver qual programa consome cada recurso e, se necessário, usar Finalizar tarefa; e o Monitor de Recursos, que pode ser aberto a partir da própria seção Desempenho, traz detalhes adicionais.",
    origem: "banco",
    fonte: "FGV · PC-RN 2021 · Agente (adaptada)",
  },
  {
    id: "ti-076",
    materia: "ti",
    topico: "Navegadores e correio eletrônico (cookies, cache, navegação privativa, SMTP, POP3, IMAP, Cc/Cco)",
    enunciado:
      "Um investigador configurou a conta de e-mail institucional em três dispositivos: o computador da delegacia, o notebook funcional e o celular. Ele quer que as mensagens permaneçam no servidor e apareçam sincronizadas em todos os aparelhos, inclusive as pastas criadas e a marcação de lidas e não lidas. O técnico explicou, ainda, qual protocolo é usado no envio das mensagens.\n\nAs escolhas tecnicamente corretas para o recebimento e para o envio são, respectivamente:",
    alternativas: [
      "POP3, que mantém pastas e marcações sincronizadas no servidor; e IMAP, para o envio.",
      "SMTP, para o recebimento sincronizado; e POP3, para o envio.",
      "HTTP, que substitui todos os protocolos de correio eletrônico; e FTP, para o envio dos anexos.",
      "POP3, configurado para apagar as mensagens do servidor após o download; e SMTP, para o envio.",
      "IMAP, que acessa e sincroniza as mensagens e pastas mantidas no servidor; e SMTP, para o envio.",
    ],
    correta: 4,
    explicacao:
      "O IMAP trabalha com as mensagens guardadas no servidor: pastas, lidas e não lidas e exclusões ficam sincronizadas em todos os dispositivos que acessam a conta. O POP3 foi concebido para baixar as mensagens para um único aparelho, normalmente apagando-as do servidor (há a opção de deixar cópia, mas sem sincronizar pastas e marcações) — por isso não atende a quem usa vários dispositivos. O envio, tanto do cliente para o servidor quanto entre servidores de correio, é feito pelo SMTP; POP3 e IMAP são protocolos de recebimento. O webmail é acessado pelo navegador via HTTP/HTTPS, mas os servidores continuam usando SMTP entre si, e o FTP é protocolo de transferência de arquivos, sem papel no envio de e-mails. Portas usuais: SMTP 25 ou 587, POP3 110 (995 com TLS) e IMAP 143 (993 com TLS).",
    origem: "banco",
  },
  {
    id: "ti-077",
    materia: "ti",
    topico: "Editores de texto (Word e Writer): formatação, seções, revisão e recursos de edição",
    enunciado:
      "Os computadores do cartório de uma delegacia usam o LibreOffice, mas o órgão recebe e envia documentos para instituições que usam o Microsoft 365. Um escrivão precisa: (1) abrir no Writer um ofício recebido em .docx; (2) devolver a resposta em formato editável compatível com o Word; e (3) encaminhar ao juízo a versão final em formato não editável, que preserve a aparência do documento em qualquer computador.\n\nSobre esses procedimentos, assinale a afirmativa correta.",
    alternativas: [
      "O Writer não abre arquivos .docx, que exigem a instalação do Microsoft Word.",
      "O formato padrão do Writer é o .doc, o mesmo adotado por padrão no Word das versões atuais.",
      "Para gerar PDF a partir do Writer, é indispensável instalar uma impressora virtual de terceiros.",
      "O Writer abre o .docx, salva no formato padrão ODF (.odt) ou, pela opção Salvar como, em .docx, e exporta diretamente para PDF.",
      "Arquivos .odt só podem ser abertos no LibreOffice, pois o formato ODF é proprietário.",
    ],
    correta: 3,
    explicacao:
      "O formato padrão do LibreOffice é o OpenDocument (ODF), padrão aberto e normatizado (ISO/IEC 26300): .odt no Writer, .ods no Calc e .odp no Impress. O Writer abre e salva documentos do Word (.docx e o antigo .doc) — ao salvar fora do ODF, apenas avisa sobre possíveis perdas de formatação — e exporta diretamente para PDF (Arquivo > Exportar como PDF), sem programas adicionais. O Word atual usa por padrão o .docx (o .doc é o formato das versões até 2003) e também abre e salva .odt. Por ser aberto, o ODF pode ser lido por diferentes programas, inclusive o Microsoft 365 e o Google Docs. O PDF preserva a aparência do documento em qualquer equipamento e é o formato usual para versões finais.",
    origem: "banco",
  },
];
