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
      "A conduta de invadir dispositivo informático alheio, conectado ou não à rede de computadores, mediante violação indevida de mecanismo de segurança, com o fim de obter, adulterar ou destruir dados ou informações, está tipificada no Código Penal, com pena majorada pela Lei nº 14.155/2021, no crime de:",
    alternativas: [
      "Estelionato (art. 171, CP)",
      "Furto mediante fraude eletrônica (art. 155, §4º-B, CP)",
      "Invasão de dispositivo informático (art. 154-A, CP)",
      "Interceptação de comunicações (Lei 9.296/1996)",
      "Falsidade ideológica (art. 299, CP)",
    ],
    correta: 2,
    explicacao:
      "O art. 154-A do CP, incluído pela Lei 12.737/2012 (\"Lei Carolina Dieckmann\") e com penas majoradas pela Lei 14.155/2021, tipifica a invasão de dispositivo informático mediante violação de mecanismo de segurança. A Lei 14.155/2021 também alterou o furto mediante fraude eletrônica (art. 155, §4º-B) e o estelionato por fraude eletrônica (art. 171, §2º-A), ambos com penas de 4 a 8 anos.",
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
      "O TPM (Trusted Platform Module) versão 2.0 é um chip (ou módulo de firmware) dedicado ao armazenamento seguro de chaves criptográficas, usado por recursos como o BitLocker. O Windows 11 exige TPM 2.0 como requisito mínimo oficial de instalação, junto de Secure Boot habilitado.",
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
      "Encontrar meu Dispositivo (Find My Device)",
      "Modo avião",
      "Verificação em duas etapas",
      "Android Auto",
    ],
    correta: 1,
    explicacao:
      "\"Encontrar meu Dispositivo\" permite localizar, tocar, bloquear remotamente e apagar os dados de um Android vinculado à conta Google. Google Play Protect é o verificador de apps nativo contra malware; modo avião apenas desativa rádios de comunicação; verificação em duas etapas é o 2FA para login; Android Auto integra o smartphone ao painel veicular — nenhum desses localiza ou apaga remotamente o aparelho.",
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
      "A Lei 14.155/2021 distinguiu duas situações: no furto mediante fraude eletrônica (art. 155, §4º-B), o agente subtrai o bem sem que a vítima participe conscientemente do ato (ex.: clonagem de cartão, uso de senha obtida ilicitamente); no estelionato eletrônico (art. 171, §2º-A), a vítima é enganada e ela mesma entrega o bem/valor, induzida a erro (ex.: golpe do falso motoboy). Ambos passaram a ter penas de 4 a 8 anos, mais rigorosas. A mesma lei também fixou a competência do estelionato eletrônico no local de domicílio da VÍTIMA (art. 70, §4º, CPP), e não revogou o art. 154-A, que segue vigente.",
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
      "O spear phishing é uma modalidade direcionada e personalizada de phishing, voltada a um alvo específico (pessoa ou organização), construída com informações coletadas previamente por engenharia social, para parecer mais convincente. O phishing genérico em massa é o descrito na alternativa A; ataques por voz e por SMS são, respectivamente, \"vishing\" e \"smishing\" — variações distintas do spear phishing.",
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
];
