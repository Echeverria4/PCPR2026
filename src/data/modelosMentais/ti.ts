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
      "O Marco Civil da Internet (Lei 12.965/2014) define direitos e deveres na rede — neutralidade, privacidade, guarda de logs. A LGPD regula como dados pessoais podem ser tratados. O art. 154-A do Código Penal tipifica a invasão de dispositivo informático alheio, o crime de \"hackear\" propriamente dito.",
  },
  {
    topico: "Golpes digitais recentes (phishing, engenharia social, golpe do Pix, deepfake em fraude)",
    origem: "aposta",
    gancho: "Todo golpe digital explora pressa ou confiança, nunca só tecnologia",
    modelo:
      "Phishing engana com link ou mensagem falsa; engenharia social manipula a pessoa diretamente se passando por banco, chefe ou parente; o golpe do Pix costuma combinar os dois com urgência artificial; deepfake em fraude usa voz ou vídeo falsificado pra dar credibilidade. O fio comum é sempre criar urgência para pular a desconfiança da vítima.",
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
    origem: "aposta",
    gancho: "Você aluga a infraestrutura, a plataforma pronta ou o aplicativo pronto",
    modelo:
      "IaaS aluga só a infraestrutura — servidor virtual, você cuida do resto. PaaS aluga a plataforma pronta pra rodar seu código, você só programa. SaaS entrega o aplicativo pronto pra usar, como um webmail. Para evidência digital em nuvem, o desafio extra é a jurisdição: o dado pode estar fisicamente hospedado em outro país.",
  },
  {
    topico: "OSINT (investigação em fontes abertas) e coleta de evidência em redes sociais",
    origem: "aposta",
    gancho: "OSINT é investigar só com o que já está público",
    modelo:
      "Open Source Intelligence é coletar e cruzar informação de fontes abertas — redes sociais, registros públicos, buscadores — sem precisar de mandado para dado já público. Na coleta de evidência de rede social, o cuidado técnico central é preservar a prova com hash e timestamp antes que o conteúdo seja apagado ou editado.",
  },
  {
    topico: "LGPD aplicada ao tratamento de dados em investigação criminal (bases legais, exceções de segurança pública)",
    origem: "aposta",
    gancho: "Segurança pública tem tratamento próprio na LGPD, mas não é carta branca",
    modelo:
      "A LGPD geral exige base legal para tratar dado pessoal — consentimento, legítimo interesse, entre outras. Atividades de investigação e segurança pública têm regime diferenciado, mas o dado só pode ser usado dentro da finalidade da investigação, nunca repassado livremente ou além do necessário.",
  },
];
