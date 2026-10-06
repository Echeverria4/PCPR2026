import type { ModeloMental } from "../../lib/types";

export const MODELOS_MENTAIS_TI: ModeloMental[] = [
  {
    topico: "Fundamentos de hardware e software, BIOS/UEFI, backup",
    origem: "oficial",
    gancho: "Hardware é o corpo, software é a mente, BIOS é o primeiro reflexo ao acordar",
    modelo:
      "Hardware é tudo que você toca (CPU, RAM, disco); software é a instrução que roda nele. BIOS/UEFI é o firmware que \"acorda\" a máquina antes do sistema operacional carregar, checando os componentes. Backup é o seguro contra perda: a regra prática cobrada é a 3-2-1 — 3 cópias, 2 mídias diferentes, 1 fora do local.",
  },
  {
    topico: "Sistemas operacionais e aplicativos (Windows 11, Office, Android/iOS)",
    origem: "oficial",
    gancho: "O SO é o gerente do prédio; o aplicativo é o inquilino",
    modelo:
      "O sistema operacional gerencia recursos (memória, processos, arquivos) e dá acesso a eles pros aplicativos, que só \"moram\" por cima dele. Windows 11, Office e Android/iOS são cobrados no nível de \"o que cada tela ou atalho faz\" — vale decorar os atalhos e menus de configuração mais comuns de cada um.",
  },
  {
    topico: "Internet, redes, TCP/IP, DNS, VPN, firewall",
    origem: "oficial",
    gancho: "DNS é a lista telefônica, VPN é o túnel, firewall é o segurança da porta",
    modelo:
      "TCP/IP é o conjunto de regras que faz os pacotes de dados chegarem ao destino certo. DNS traduz nome de site em endereço IP — a lista telefônica da internet. VPN cria um túnel criptografado entre você e a rede de destino. Firewall filtra o que entra e sai, como um segurança de porta com lista de quem pode passar.",
  },
  {
    topico: "Segurança da informação (CID, criptografia, assinatura digital, hash)",
    origem: "oficial",
    gancho: "CID é o tripé: Confidencialidade, Integridade, Disponibilidade",
    modelo:
      "Confidencialidade é só quem pode ver vê; integridade é não foi alterado; disponibilidade é está acessível quando precisa. Criptografia protege o conteúdo, transformando-o em código ilegível sem a chave; hash gera uma \"impressão digital\" fixa do arquivo pra provar que não mudou; assinatura digital combina hash com chave privada pra provar autoria e integridade juntas.",
  },
  {
    topico: "Crimes cibernéticos e investigação digital",
    origem: "oficial",
    gancho: "Todo crime digital deixa rastro; investigar é seguir o log",
    modelo:
      "Cada ação digital deixa uma pegada — IP, timestamp, metadados, logs de acesso. A investigação digital é reconstruir a linha do tempo desses rastros preservando a cadeia de custódia; sem isso, a prova cai mesmo quando o crime é óbvio.",
  },
  {
    topico: "Legislação digital (Marco Civil, LGPD, art. 154-A do CP)",
    origem: "oficial",
    gancho: "Marco Civil é a Constituição da internet; LGPD protege o dado; art. 154-A pune quem invade",
    modelo:
      "O Marco Civil da Internet (Lei 12.965/2014) define direitos e deveres na rede — neutralidade, privacidade, guarda de logs. A LGPD regula como dados pessoais podem ser tratados. O art. 154-A do Código Penal tipifica a invasão de dispositivo informático de uso alheio, o crime de \"hackear\" propriamente dito — e, desde a Lei 14.155/2021, não exige mais violação de mecanismo de segurança (celular sem senha também conta).",
  },
  {
    topico: "Golpes digitais recentes (phishing, engenharia social, golpe do Pix, deepfake em fraude)",
    origem: "oficial",
    gancho: "Todo golpe digital explora pressa ou confiança, nunca só tecnologia",
    modelo:
      "Phishing engana com link ou mensagem falsa; engenharia social manipula a pessoa diretamente se passando por banco, chefe ou parente; o golpe do Pix costuma combinar os dois com urgência artificial; deepfake em fraude usa voz ou vídeo falsificado pra dar credibilidade. O fio comum é sempre criar urgência para pular a desconfiança da vítima. No Penal: se a vítima enganada entrega o dinheiro, é estelionato por fraude eletrônica (art. 171, §2º-A, 4 a 8 anos); se o golpista subtrai sem ela perceber, é furto mediante fraude eletrônica (art. 155, §4º-B, 4 a 10 anos pela Lei 15.397/2026).",
  },
  {
    topico: "Inteligência artificial aplicada à investigação e riscos (viés algorítmico, deepfake como prova)",
    origem: "aposta",
    gancho: "IA ajuda a investigar, mas também pode ser usada pra enganar a investigação",
    modelo:
      "Do lado bom, IA cruza dados e reconhece padrões em grande volume de evidência. Do lado do risco, viés algorítmico pode reproduzir preconceito presente nos dados de treino, e deepfake pode ser usado como prova falsa — por isso a perícia digital precisa validar a origem do material, não só o conteúdo.",
  },
  {
    topico: "Computação em nuvem (IaaS, PaaS, SaaS) e armazenamento de evidências digitais",
    origem: "oficial",
    gancho: "Você aluga a infraestrutura, a plataforma pronta ou o aplicativo pronto",
    modelo:
      "IaaS aluga só a infraestrutura — servidor virtual, você cuida do resto. PaaS aluga a plataforma pronta pra rodar seu código, você só programa. SaaS entrega o aplicativo pronto pra usar, como um webmail. Para evidência digital em nuvem, o desafio extra é a jurisdição: o dado pode estar fisicamente hospedado em outro país.",
  },
  {
    topico: "OSINT (investigação em fontes abertas) e coleta de evidência em redes sociais",
    origem: "oficial",
    gancho: "OSINT é investigar só com o que já está público",
    modelo:
      "Open Source Intelligence é coletar e cruzar informação de fontes abertas — redes sociais, registros públicos, buscadores — sem precisar de mandado para o que é realmente público. Perfil fechado, grupo privado e dados guardados por provedores não são fonte aberta: exigem ordem judicial ou infiltração virtual autorizada (Lei 12.850, art. 10-A; ECA, art. 190-A). Na coleta de evidência de rede social, o cuidado técnico central é preservar a prova com hash e timestamp antes que o conteúdo seja apagado ou editado.",
  },
  {
    topico: "LGPD aplicada ao tratamento de dados em investigação criminal (bases legais, exceções de segurança pública)",
    origem: "oficial",
    gancho: "Segurança pública tem tratamento próprio na LGPD, mas não é carta branca",
    modelo:
      "A LGPD geral exige base legal para tratar dado pessoal — consentimento, legítimo interesse, entre outras. Atividades de investigação e segurança pública ficam fora da LGPD (art. 4º, III) e vão para lei específica, que deve respeitar devido processo legal, proporcionalidade e os direitos do titular (§1º), mas o dado só pode ser usado dentro da finalidade da investigação, nunca repassado livremente ou além do necessário.",
  },
  {
    topico: "Hardware, memórias e armazenamento (RAM, ROM, SSD, NVMe), periféricos, drivers e firmware",
    origem: "oficial",
    gancho: "RAM é a mesa de trabalho, SSD é o arquivo, firmware é o instinto do aparelho",
    modelo:
      "A RAM é rápida, mas volátil: some quando a energia acaba, e por isso a perícia coleta a memória com a máquina ainda ligada. HD e SSD são o arquivo permanente — o SSD, sem peças móveis e ainda mais rápido com NVMe, é o padrão atual (M.2 é só o formato). Driver é o tradutor instalado no sistema para cada hardware; firmware é o software que mora dentro do próprio aparelho e só deve ser atualizado com arquivo do fabricante.",
  },
  {
    topico: "Windows 11: atalhos, Explorador de Arquivos, configurações, contas, segurança e atualização",
    origem: "oficial",
    gancho: "Win+L antes de levantar; conta padrão no dia a dia; BitLocker para o furto",
    modelo:
      "Atalhos que caem: Windows + L bloqueia, Windows + E abre o Explorador, Windows + V mostra o histórico da área de transferência, Windows + Shift + S recorta a tela e Ctrl + Shift + Esc abre o Gerenciador de Tarefas. Shift + Delete e arquivos de pen drive não passam pela Lixeira. A segurança vem em camadas: conta padrão com UAC, Defender e SmartScreen, BitLocker apoiado no TPM 2.0 e Windows Update em dia.",
  },
  {
    topico: "Planilhas eletrônicas (Excel e Calc): fórmulas, funções, referências e classificação",
    origem: "oficial",
    gancho: "O cifrão é a âncora: o que tem $ não se mexe na cópia",
    modelo:
      "Ao copiar uma fórmula, desloque as referências relativas pelo mesmo número de linhas e colunas e mantenha o que tem cifrão: $A$1 fixa tudo, $A1 só a coluna e A$1 só a linha. PROCV procura o valor na primeira coluna do intervalo e devolve a coluna pedida, com 0 (ou FALSO) no fim para busca exata. Em português, o ponto e vírgula separa argumentos e os dois-pontos indicam intervalo: SOMA(A1:A10) não é SOMA(A1;A10).",
  },
  {
    topico: "Editores de texto (Word e Writer): formatação, seções, revisão e recursos de edição",
    origem: "oficial",
    gancho: "Seção muda a página; Controlar Alterações guarda o rastro; marca-d'água carimba o fundo",
    modelo:
      "Precisou de orientação, margens, numeração ou cabeçalho diferentes no mesmo documento, pense em quebra de seção — a quebra de página só começa outra página. Para registrar cada mudança e aceitá-la ou rejeitá-la depois, use Controlar Alterações (comentário é só observação). Texto esmaecido em todas as páginas é marca-d'água (guia Design), e o Writer salva em .odt, abre .docx e exporta PDF direto.",
  },
  {
    topico: "Navegadores e correio eletrônico (cookies, cache, navegação privativa, SMTP, POP3, IMAP, Cc/Cco)",
    origem: "oficial",
    gancho: "Navegador guarda rastros locais; o e-mail sai por SMTP e chega por IMAP ou POP3",
    modelo:
      "Limpar os dados de navegação não apaga o arquivo baixado, e a janela anônima não esconde o IP do provedor nem dos sites. SMTP envia; IMAP mantém as mensagens no servidor e sincroniza vários aparelhos; POP3 baixa para um só. Para e Cc todos veem, e o Cco só o remetente conhece — por isso o “Responder a todos” dos demais não alcança quem estava em cópia oculta.",
  },
  {
    topico: "Internet, intranet e extranet; IPv4/IPv6, portas e protocolos (HTTP/HTTPS, FTP, SSH, DHCP, NAT, proxy)",
    origem: "oficial",
    gancho: "Intranet é a casa, extranet é a porta para visitas cadastradas, VPN é o túnel para quem está fora",
    modelo:
      "Intranet usa as tecnologias da internet com acesso restrito; extranet abre parte dela a parceiros autenticados; a VPN leva quem está fora à rede interna em túnel criptografado. IPv4 tem 32 bits em decimal, IPv6 tem 128 bits em hexadecimal. Com NAT e CGNAT, identificar uma conexão exige IP, porta lógica de origem, data, hora e fuso — e as portas para decorar são 80 (HTTP), 443 (HTTPS), 22 (SSH), 53 (DNS) e 25 (SMTP).",
  },
  {
    topico: "Redes sociais, plataformas digitais, registros eletrônicos (logs) e metadados",
    origem: "oficial",
    gancho: "O log diz quando e de onde houve conexão; o metadado diz como o arquivo nasceu",
    modelo:
      "O log traz IP, porta, horário (em regra em UTC), método, código de status e user-agent: converta o fuso antes de qualquer pedido. Metadados — EXIF da foto, autor do documento, cabeçalho do e-mail — ajudam a montar a linha do tempo, mas podem ser apagados ou forjados. Ambos apontam conexões e aparelhos, não pessoas: corrobore sempre.",
  },
  {
    topico: "Dispositivos móveis (Android e iOS): permissões, atualizações, backup e localização",
    origem: "oficial",
    gancho: "Menor privilégio: o app só recebe o que precisa, e o dono pode tirar a qualquer hora",
    modelo:
      "Cada app fica isolado e só usa câmera, localização, contatos ou SMS com permissão, que pode ser revogada nas configurações. APK de fora da loja exige autorizar a instalação de apps desconhecidos, e a acessibilidade é a permissão preferida dos golpistas. Para aparelho perdido, o Find Hub (antigo Encontre Meu Dispositivo) no Android e o Buscar no iPhone localizam, bloqueiam e apagam à distância.",
  },
  {
    topico: "Microsoft 365, Google Workspace e compartilhamento de arquivos em nuvem (permissões, links e versões)",
    origem: "oficial",
    gancho: "Na nuvem, quem acessa é definido por papel e por link",
    modelo:
      "Leitor vê, Comentarista comenta e Editor altera; o acesso Restrito protege mesmo se o link vazar, e “Qualquer pessoa com o link” abre o arquivo a quem o tiver. A nuvem traz coautoria, salvamento automático e histórico de versões. O histórico restaura conteúdo alterado; a Lixeira só recupera arquivos excluídos.",
  },
  {
    topico: "Lógica de programação, aplicações web (HTML, CSS, JavaScript), bancos de dados (SQL) e APIs",
    origem: "oficial",
    gancho: "HTML é o esqueleto, CSS a roupa, JavaScript o movimento; SQL pergunta ao banco e a API faz sistemas conversarem",
    modelo:
      "Em algoritmos, faça o teste de mesa, anotando cada variável passo a passo. No formulário, action diz para onde os dados vão e post os manda no corpo da requisição (get os expõe na URL). Em SQL, WHERE filtra linhas e HAVING filtra grupos; na API REST, GET consulta, POST cria, PUT ou PATCH alteram e DELETE exclui, com respostas em JSON e códigos como 200 e 404.",
  },
];
