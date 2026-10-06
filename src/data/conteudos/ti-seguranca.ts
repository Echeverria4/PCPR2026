import type { ConteudoTopico } from "../../lib/types";

/** TI — tópicos de segurança/crimes cibernéticos/legislação digital (itens 1.4 a 1.6 do Anexo I). */
export const CONTEUDO_TI_SEGURANCA: ConteudoTopico[] = [
  // ───────────── 1.4 Segurança da informação e segurança cibernética ─────────────
  {
    materia: "ti",
    topico: "Pilares da segurança da informação e gestão de riscos (vulnerabilidade, ameaça, risco)",
    texto: `O item 1.4 do edital lista cinco atributos da informação. Confidencialidade: só quem tem autorização tem acesso (o vazamento de um inquérito sigiloso quebra a confidencialidade). Integridade: a informação não é alterada de forma indevida, por fraude ou por erro; verifica-se com hash e assinatura digital. Disponibilidade: a informação e os sistemas estão acessíveis quando o usuário autorizado precisa (negação de serviço e ransomware atacam a disponibilidade). Esses três formam a tríade CID. Autenticidade: garante que a origem é quem diz ser (o e-mail veio mesmo do delegado?). Rastreabilidade: permite reconstituir quem fez o quê, quando e de onde, por meio de logs e trilhas de auditoria. Ligado à autenticidade está o não repúdio (irretratabilidade): o autor não consegue negar a autoria, o que se obtém com assinatura digital baseada em certificado.

Gestão de riscos tem um vocabulário que a banca gosta de trocar. Ativo é o que tem valor (dados, sistemas, pessoas, reputação). Vulnerabilidade é a fraqueza do ativo ou do controle (sistema sem atualização, senha fraca, acesso remoto exposto); existe mesmo que ninguém a explore. Ameaça é a causa potencial de um incidente, o agente ou evento capaz de explorar a vulnerabilidade (grupo criminoso, malware, enchente). Risco é a combinação da probabilidade de a ameaça explorar a vulnerabilidade com o impacto resultante (risco = probabilidade x impacto). Incidente é o evento que efetivamente compromete confidencialidade, integridade ou disponibilidade. Exploit é o código que aproveita a falha; vulnerabilidade de dia zero (zero-day) é a que ainda não tem correção do fabricante.

Tratamento do risco: mitigar (aplicar controles, como atualização e MFA), transferir (seguro, contrato), evitar (deixar de executar a atividade arriscada) ou aceitar (assumir de forma consciente o risco residual). Controles podem ser físicos (sala-cofre, catraca), técnicos (firewall, criptografia, controle de acesso) ou administrativos (política, treinamento, termo de responsabilidade); quanto ao efeito, preventivos, detectivos ou corretivos. Defesa em profundidade é sobrepor camadas para que a falha de uma não exponha o ativo. Referências: ABNT NBR ISO/IEC 27001 (requisitos do sistema de gestão de segurança da informação, certificável) e 27002 (guia de controles).

Pegadinhas da FGV: vulnerabilidade não é ameaça (a fraqueza é do ativo; a ameaça é quem ou o que pode explorá-la); risco não é sinônimo de ameaça; criptografia protege a confidencialidade, mas não a disponibilidade; hash revela que houve alteração, mas não impede a alteração nem identifica o autor.`,
    exemplos: [
      "O servidor de boletins da delegacia roda um sistema operacional sem suporte do fabricante (vulnerabilidade); grupos de ransomware exploram falhas dessa versão (ameaça); a alta chance de ataque somada ao estrago de parar o plantão e vazar inquéritos compõe o risco, que se reduz migrando o sistema (mitigação).",
      "Um servidor altera no sistema a quantidade de droga apreendida para acobertar desvio: houve violação da integridade; como o sistema grava log individual com usuário, data e hora de cada alteração, a rastreabilidade permite à corregedoria identificar o autor.",
    ],
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "Controle de acesso, autenticação multifator, logs e auditoria",
    texto: `Controle de acesso responde a três perguntas, na sequência conhecida como AAA: autenticação (quem é você e como prova?), autorização (o que pode fazer?) e auditoria ou accounting (o que fez?). Identificar é declarar uma identidade (login, matrícula); autenticar é comprovar essa identidade; autorizar é conceder as permissões do perfil. A autenticação vem antes da autorização.

Fatores de autenticação: algo que você sabe (senha, PIN, resposta secreta), algo que você tem (token, celular com aplicativo autenticador, cartão inteligente, crachá) e algo que você é (biometria: digital, face, íris, voz). Autenticação multifator (MFA) exige fatores de categorias DIFERENTES: senha + código do aplicativo é MFA; senha + PIN continua sendo fator único, pois ambos são algo que você sabe. Código por SMS é o segundo fator mais frágil, porque a linha pode ser desviada por SIM swap; aplicativos autenticadores (TOTP) e chaves de segurança FIDO2 (passkeys) resistem melhor ao phishing. Single sign-on (SSO) dá acesso a vários sistemas com um único login: é cômodo, mas concentra o risco na credencial principal, por isso deve vir com MFA.

Modelos de controle: DAC (discricionário: o dono do recurso decide quem acessa, como no compartilhamento de pastas), MAC (obrigatório: rótulos de classificação definidos pela organização, não pelo usuário), RBAC (baseado em papéis: permissões ligadas à função, como escrivão ou delegado) e ABAC (por atributos, como horário e local). Princípios: menor privilégio (só o necessário para a tarefa), necessidade de conhecer, segregação de funções (quem cadastra não aprova) e revisão periódica dos acessos, com bloqueio imediato de quem mudou de função ou deixou o órgão.

Logs são registros cronológicos de eventos (login, falha de senha, consulta, alteração, exclusão). Para servirem à auditoria e como prova precisam de: conta individual (conta genérica compartilhada destrói a rastreabilidade), relógio sincronizado (NTP, com fuso registrado), proteção contra alteração (envio a servidor central, em mídia que não permita sobrescrita) e retenção adequada. Um SIEM centraliza e correlaciona logs de várias fontes para detectar incidentes. Auditoria é o exame independente desses registros para verificar conformidade e apurar responsabilidades; a trilha de auditoria sustenta a rastreabilidade e o não repúdio.

Pegadinhas: biometria não é infalível (há falsa aceitação e falsa rejeição); MFA reduz, mas não elimina, o risco de phishing em tempo real; senha forte não substitui o segundo fator; duas senhas não são dois fatores.`,
    exemplos: [
      "Para entrar no sistema de inteligência, o agente digita a senha e aprova uma notificação no aplicativo do celular funcional: são fatores de categorias diferentes (algo que sabe + algo que tem), portanto há autenticação multifator.",
      "Após o vazamento do endereço de uma testemunha, a corregedoria analisa os logs do sistema de consultas e descobre que os plantonistas usavam a mesma conta “plantao”: o log mostra o horário da consulta, mas não aponta o servidor, porque a conta compartilhada eliminou a rastreabilidade.",
    ],
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "Criptografia, hash e certificado digital ICP-Brasil (A1 e A3)",
    texto: `Criptografia simétrica usa a mesma chave para cifrar e decifrar (AES, 3DES): é rápida, mas exige canal seguro para combinar a chave. Criptografia assimétrica usa um par de chaves relacionadas, uma pública e uma privada (RSA, curvas elípticas). Regra de ouro: para SIGILO, cifra-se com a chave PÚBLICA do destinatário, e só a privada dele decifra; para ASSINATURA, o remetente usa a própria chave PRIVADA, e qualquer pessoa confere com a pública dele. No HTTPS (TLS) o sistema é híbrido: a parte assimétrica autentica o servidor e combina uma chave de sessão simétrica, que cifra os dados.

Hash é função de mão única que gera um resumo de tamanho fixo (SHA-256: 256 bits) a partir de qualquer entrada; a menor alteração muda todo o resumo (efeito avalanche) e não é possível reconstruir o arquivo a partir dele. O hash depende só do conteúdo: renomear o arquivo ou copiá-lo para outra mídia não o altera. Hash prova integridade; sozinho não dá sigilo nem autoria. MD5 e SHA-1 têm colisões práticas conhecidas; na perícia prefere-se SHA-256.

Assinatura digital é o hash do documento cifrado com a chave privada do signatário. Garante autenticidade, integridade e não repúdio, mas NÃO confidencialidade: o documento assinado continua legível. Para ter sigilo e autoria ao mesmo tempo, assina-se com a própria chave privada e cifra-se com a pública do destinatário. Certificado digital é o documento eletrônico, emitido por autoridade certificadora (AC), que vincula uma chave pública a uma pessoa ou entidade. A ICP-Brasil foi instituída pela MP 2.200-2/2001, com o ITI como AC Raiz (que credencia as ACs e não emite certificado para o usuário final); a AC emite, renova e revoga os certificados; a AR (autoridade de registro) é a interface com o usuário, que identifica o solicitante e valida os documentos, mas não emite o certificado; declarações em documentos eletrônicos com certificado ICP-Brasil presumem-se verdadeiras em relação aos signatários (art. 10, §1º), sem impedir outros meios de comprovação admitidos pelas partes (§2º). A Lei 14.063/2020 classifica a assinatura eletrônica em simples, avançada e qualificada; só a qualificada usa certificado ICP-Brasil.

No certificado A1, o par de chaves fica em arquivo no computador (validade de até 1 ano); no A3, a chave privada é gerada e guardada em hardware criptográfico (token USB ou cartão inteligente) e não pode ser exportada. HSM (Hardware Security Module) é o equipamento físico e robusto que gera e protege chaves criptográficas em larga escala, usado por ACs, bancos e sistemas de assinatura. Certificado comprometido deve ser revogado (lista de certificados revogados ou consulta OCSP).

Pegadinhas: cifrar com a própria chave privada não dá sigilo (qualquer um decifra com a pública); assinatura digital não é assinatura escaneada; o cadeado do HTTPS indica canal cifrado, não site honesto; compactar não é cifrar.`,
    exemplos: [
      "O delegado precisa mandar ao juiz, por e-mail, a planilha de uma interceptação: assina o arquivo com a própria chave privada (o juiz confere autoria e integridade com a chave pública do delegado) e o cifra com a chave pública do juiz, para que só a chave privada do magistrado consiga abri-lo.",
      "O perito calcula o SHA-256 da imagem forense de um pen drive e o registra no laudo; meses depois, a defesa alega adulteração, e o hash é recalculado sobre a mesma imagem, agora renomeada e copiada para outro servidor: o valor idêntico demonstra que o conteúdo não mudou.",
    ],
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "Backup e recuperação de dados como controle de segurança (RPO, RTO, cópia imutável)",
    texto: `No item 1.4, backup aparece como CONTROLE DE SEGURANÇA: é o que garante disponibilidade e recuperação depois de falha de hardware, erro humano, furto do equipamento ou ataque. Revisão dos tipos: completo (copia tudo); incremental (copia o que mudou desde o último backup de qualquer tipo: rápido de fazer, mas a restauração exige o completo e todos os incrementais em sequência); diferencial (copia o que mudou desde o último completo: cresce a cada dia, mas restaura com o completo e o último diferencial). No Windows, o atributo (bit) de arquivamento marca o arquivo alterado: o completo e o incremental o desmarcam depois da cópia; o diferencial NÃO o desmarca, e por isso cada diferencial recopia tudo o que mudou desde o último completo. Backup de cópia (copy) copia tudo sem mexer no bit, sem interferir na rotina.

Dois indicadores orientam a política. RPO (Recovery Point Objective) é a perda máxima de dados aceitável, medida em tempo: RPO de 4 horas exige cópias pelo menos a cada 4 horas. RTO (Recovery Time Objective) é o tempo máximo aceitável para restabelecer o serviço após a parada. Reduzir o RPO exige cópias mais frequentes ou replicação; reduzir o RTO exige restauração mais rápida (redundância, ambiente reserva, procedimento treinado). A FGV costuma inverter as definições: RPO olha para trás (até que ponto volto), RTO olha para frente (em quanto tempo volto).

Ransomware moderno procura e cifra também as cópias acessíveis pela rede. Por isso: regra 3-2-1 (três cópias, duas mídias diferentes, uma fora do local); cópia offline ou isolada (air gap); cópia imutável (WORM: não pode ser alterada nem apagada durante a retenção, nem pelo administrador); versionamento; credenciais exclusivas para o sistema de backup. Sincronização em nuvem NÃO é backup: arquivo apagado ou cifrado no computador é replicado; só o histórico de versões permite voltar. RAID também não é backup: protege contra falha de disco, não contra exclusão nem ransomware. O backup deve ser cifrado (para não virar fonte de vazamento) e testado periodicamente: cópia nunca restaurada é expectativa, não garantia.

Recuperação de dados em sentido forense: excluir um arquivo, em regra, só marca o espaço como livre; o conteúdo permanece até ser sobrescrito e pode ser recuperado por ferramentas forenses, inclusive por carving (busca de assinaturas de arquivos no espaço não alocado). Em SSDs, o comando TRIM e a coleta de lixo apagam blocos de forma autônoma, reduzindo essa chance; por isso a apreensão e a imagem forense devem ser rápidas. Formatação rápida não apaga o conteúdo; sobrescrita completa (wipe) e destruição física, sim.

Pegadinhas: backup incremental não é o de restauração mais rápida; disco externo sempre conectado cai junto no ataque; sincronizar não é fazer cópia de segurança.`,
    exemplos: [
      "A política do sistema de boletins fixa RPO de 4 horas e RTO de 2 horas: é preciso haver cópia dos dados pelo menos a cada 4 horas e conseguir religar o sistema em até 2 horas depois da pane; um backup único no fim do dia não cumpre o RPO, ainda que a restauração seja rápida.",
      "Um ransomware cifra o servidor de arquivos de uma delegacia e também o HD externo que ficava ligado a ele; a única cópia que sobrevive é a imutável, guardada em nuvem com retenção de 30 dias, que nem o administrador consegue apagar antes do prazo.",
    ],
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "Malware e ransomware: tipos, vetores e técnicas de evasão",
    texto: `Malware é qualquer software malicioso. Os tipos mais cobrados: vírus (insere-se em arquivo ou programa hospedeiro e depende da execução dele para agir e se propagar); worm (programa autônomo que se replica sozinho pela rede explorando vulnerabilidades, sem hospedeiro e sem ação do usuário); cavalo de Troia (trojan: aparenta ser legítimo, é instalado pela própria vítima enganada e não se autorreplica); spyware (espiona e envia dados; keylogger captura o que é digitado e screenlogger, a tela); adware (propaganda); backdoor (porta para o retorno do invasor); bot (máquina controlada remotamente; o conjunto é a botnet, usada em DDoS e spam); rootkit (ferramentas para esconder a presença do invasor e manter acesso privilegiado); RAT (trojan de acesso remoto); fileless (age na memória e em ferramentas legítimas, como o PowerShell, sem gravar executável no disco).

Ransomware cifra os arquivos ou bloqueia o sistema e exige resgate, em geral em criptoativos. Hoje predomina a dupla extorsão: antes de cifrar, o grupo copia os dados e ameaça publicá-los, o que atinge também a confidencialidade. No modelo RaaS (ransomware como serviço), desenvolvedores alugam a ferramenta a afiliados. Pagar não garante a devolução nem a exclusão dos dados copiados; a conduta correta é isolar as máquinas, preservar evidências (nota de resgate, logs, memória), acionar a equipe de resposta e restaurar de backup íntegro.

Vetores: anexo ou link em e-mail, software pirata, pen drive, aplicativo instalado fora da loja oficial (APK), vulnerabilidade sem correção, acesso remoto (RDP) exposto com senha fraca. Trojans bancários para celular abusam do serviço de acessibilidade para ler a tela e operar o aplicativo do banco.

Técnicas para escapar do antivírus (cobradas pela FGV em 2025): polimorfismo (o código se recifra a cada cópia, mudando a assinatura) e metamorfismo (o código se reescreve); ofuscação e empacotamento; tunelamento (o vírus segue o código das funções da API do sistema até o destino real, passando por baixo dos ganchos de monitoramento do antivírus); armoring ou blindagem (dificulta a análise estática e dinâmica, com antidepuração); retrovírus (ataca o próprio antivírus, desativando-o ou apagando suas definições); antiemulação (percebe que roda em emulador ou sandbox e não executa a carga). Defesa: detecção por assinatura, heurística e comportamento, sandbox e EDR.

Pegadinhas: worm não precisa de hospedeiro nem de clique; trojan não se replica; rootkit esconde, não necessariamente destrói; phishing é golpe de engenharia social, não malware.`,
    exemplos: [
      "Vítimas de golpe bancário instalaram um aplicativo de “atualização de segurança” recebido por mensagem; ele pedia a permissão de acessibilidade e depois fazia transferências sozinho: é um cavalo de Troia bancário, instalado pela própria vítima enganada.",
      "Uma prefeitura tem os servidores cifrados e recebe nota exigindo criptoativos, com ameaça de publicar dados de contribuintes copiados antes do ataque: é ransomware com dupla extorsão; a orientação é isolar as máquinas, preservar logs e a nota de resgate como evidência e restaurar a partir de cópia íntegra.",
    ],
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "Engenharia social e variantes de phishing (spear phishing, whaling, smishing, vishing, pharming)",
    texto: `Engenharia social explora confiança, pressa, medo, autoridade ou curiosidade para que a própria vítima entregue informações ou execute ações (clicar, instalar, transferir). Não depende de falha técnica: o elo explorado é o humano. Técnicas: pretexting (história montada, como o falso funcionário do banco ou o falso policial), baiting (isca, como pen drive deixado no estacionamento), quid pro quo (falso suporte técnico que oferece ajuda em troca de acesso), tailgating (entrar atrás de alguém autorizado em área restrita), shoulder surfing (espiar a senha digitada) e dumpster diving (vasculhar o lixo).

Phishing é a fraude por comunicação falsa, em nome de pessoa ou instituição confiável, para capturar credenciais ou instalar malware. Variantes por alvo: spear phishing (dirigido a pessoa ou grupo específico, com dados personalizados coletados antes); whaling (spear phishing contra o alto escalão); BEC ou fraude do CEO (e-mail que imita ou parte de conta corporativa comprometida pedindo pagamento urgente). Variantes por canal: smishing (SMS), vishing (voz, inclusive sintetizada por IA) e quishing (QR code). Pharming é diferente: a vítima digita o endereço CORRETO, mas é levada ao site falso porque a resolução de nomes foi adulterada (envenenamento de cache DNS, arquivo hosts alterado, roteador com DNS trocado); não depende de link enganoso. Spoofing é a falsificação da origem (remetente de e-mail, número de telefone, IP) e costuma servir ao phishing. Typosquatting é o registro de domínio parecido com o verdadeiro para captar erros de digitação.

Sinais de alerta: urgência artificial, ameaça de bloqueio, domínio com erro sutil, pedido de senha ou código por mensagem, link encurtado, anexo inesperado. Defesas: treinamento e simulações, MFA resistente a phishing, filtros de e-mail com SPF, DKIM e DMARC (que verificam se o servidor pode enviar em nome do domínio), conferir o endereço e confirmar pedidos por outro canal.

Reflexo penal: se a vítima enganada faz ela mesma a transferência (Pix ao falso parente, boleto falso), há estelionato por fraude eletrônica (art. 171, §2º-A, do CP, reclusão de 4 a 8 anos; a redação dada pela Lei 15.397/2026 menciona redes sociais, contatos telefônicos, e-mail fraudulento e duplicação de dispositivo eletrônico ou aplicação de internet); se o golpe só captura a senha e o criminoso subtrai os valores sem nova participação da vítima, há furto mediante fraude eletrônica (art. 155, §4º-B, 4 a 10 anos).

Pegadinhas: pharming não depende de clique em link falso; whaling é espécie de spear phishing; phishing é técnica de engenharia social, não vírus.`,
    exemplos: [
      "Um investigador recebe e-mail com seu nome, sua lotação e o número de um inquérito real, pedindo que acesse o “novo portal da corregedoria” para assinar um termo: é spear phishing, pois a mensagem foi personalizada com dados levantados antes sobre o alvo.",
      "Moradores de um bairro digitavam corretamente o endereço do banco e mesmo assim caíam em página falsa; a perícia constatou que os roteadores domésticos, com senha de fábrica, tinham o DNS trocado para um servidor do grupo: é pharming, e não phishing por link.",
    ],
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "Segurança em redes, dispositivos móveis e nuvem (responsabilidade compartilhada, zero trust)",
    texto: `Segurança em redes trabalha em camadas. Firewall filtra o tráfego por regras (endereço, porta, protocolo; os de nova geração inspecionam também a aplicação). IDS detecta e alerta; IPS fica em linha e bloqueia. DMZ é a zona intermediária onde ficam os servidores expostos à internet (site, e-mail), separados da rede interna. Segmentação (VLANs) impede que a invasão de uma estação alcance o servidor de inquéritos. VPN cria túnel cifrado sobre a internet: protege o trajeto, não a máquina já infectada na ponta. No Wi-Fi, usar WPA2 ou WPA3 (WEP é obsoleto), desativar o WPS e separar a rede de visitantes. Redes abertas facilitam o ataque do intermediário (man-in-the-middle) e o ponto de acesso falso (evil twin), que copia o nome da rede legítima.

Zero trust (confiança zero) parte da premissa de que nenhum usuário ou dispositivo é confiável só por estar dentro da rede: cada acesso é verificado por identidade, estado do dispositivo e contexto, com menor privilégio e microssegmentação. É a resposta ao trabalho remoto e à nuvem, que dissolveram o perímetro.

Dispositivos: manter sistema e aplicativos atualizados (correções de segurança fecham vulnerabilidades já exploradas), instalar só de lojas oficiais, revisar permissões, criptografar o armazenamento (BitLocker no Windows; criptografia nativa no Android e no iOS), usar bloqueio de tela, localização e apagamento remotos. Root (Android) e jailbreak (iOS) removem proteções do sistema e ampliam a superfície de ataque. Em órgãos públicos, o MDM (gerenciamento de dispositivos móveis) aplica políticas, separa perfil funcional e pessoal e apaga remotamente o aparelho perdido.

Nuvem: no modelo de responsabilidade compartilhada, o provedor responde pela segurança DA nuvem (datacenter, hardware, rede física, virtualização) e o cliente pela segurança NA nuvem (dados, contas, permissões, configurações). Quanto mais gerenciado o serviço, mais o provedor assume: em IaaS o cliente cuida do sistema operacional e das aplicações; em SaaS, basicamente dos dados, dos usuários e dos acessos, mas nunca deixa de responder por eles. A principal causa de vazamento em nuvem é a configuração incorreta do cliente (pasta ou bucket público, chave de acesso exposta), não falha do provedor. Controles: MFA, gestão de identidades (IAM), criptografia em trânsito e em repouso, logs de acesso e cópia fora do mesmo provedor.

Pegadinhas: VPN não é antivírus; firewall não bloqueia phishing; IDS só alerta; em SaaS os dados continuam sob responsabilidade do cliente.`,
    exemplos: [
      "Uma delegacia deixa a pasta de laudos na nuvem compartilhada como “qualquer pessoa com o link”; o link circula em um grupo e os laudos vazam: pelo modelo de responsabilidade compartilhada, a falha é do cliente (configuração de acesso), e não do provedor.",
      "Em diligência, um agente conecta o notebook funcional a uma rede Wi-Fi aberta com o mesmo nome da rede do shopping; era um ponto de acesso falso (evil twin) que capturava o tráfego: usar a VPN institucional e evitar redes abertas teria reduzido o risco.",
    ],
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "Políticas de segurança e resposta a incidentes (PSI, fases do NIST, art. 48 da LGPD)",
    texto: `A Política de Segurança da Informação (PSI) é o documento de alto nível, aprovado pela alta direção, que define diretrizes, papéis, responsabilidades e sanções; é detalhada por normas (o que fazer, como a norma de senhas) e procedimentos (como fazer, passo a passo). Elementos usuais: classificação da informação, uso aceitável de e-mail, internet e dispositivos, controle de acesso, backup, mesa limpa e tela limpa, termo de responsabilidade, conscientização e gestão de incidentes. Política sem divulgação, treinamento e revisão periódica não protege. Na esfera federal, o Decreto 9.637/2018 instituiu a Política Nacional de Segurança da Informação e o Decreto 11.856/2023, a Política Nacional de Cibersegurança. Prevenção inclui atualização, hardening (desativar serviços desnecessários, trocar senhas padrão), MFA, backup testado, monitoramento de logs e testes de invasão autorizados.

Resposta a incidentes segue um ciclo. No modelo clássico do NIST (SP 800-61, revisão 2, de 2012), que é o que as bancas cobram: (1) preparação (equipe, contatos, ferramentas, plano); (2) detecção e análise (confirmar o incidente, definir escopo e gravidade); (3) contenção, erradicação e recuperação (isolar o que foi afetado, remover a causa, como malware e contas criadas pelo invasor, e restaurar de fonte íntegra, monitorando); (4) atividade pós-incidente (lições aprendidas e ajuste de controles). Muitas apostilas usam o modelo do SANS, que desdobra o ciclo em seis etapas (preparação, identificação, contenção, erradicação, recuperação, lições aprendidas); a revisão 3 do SP 800-61 (2025) passou a organizar o tema pelas funções do NIST CSF 2.0 (governar, identificar, proteger, detectar, responder, recuperar), sem mudar a lógica. As equipes especializadas são chamadas CSIRT ou ETIR. Do ponto de vista policial, antes de desligar ou formatar é preciso preservar evidências (memória, logs, imagens dos discos, nota de resgate), documentar cada ação e registrar a ocorrência quando houver crime.

Incidente com dados pessoais atrai o art. 48 da LGPD: o CONTROLADOR deve comunicar à autoridade nacional e ao titular a ocorrência de incidente de segurança que possa acarretar risco ou dano relevante aos titulares. A lei fala em prazo razoável, conforme definido pela autoridade; o regulamento da ANPD (Resolução CD/ANPD 15/2024) fixou 3 dias úteis. A comunicação menciona, no mínimo: natureza dos dados afetados, titulares envolvidos, medidas técnicas e de segurança utilizadas, riscos, motivos da demora (se não foi imediata) e medidas adotadas para reverter ou mitigar os efeitos (§1º). A autoridade pode determinar ampla divulgação do fato e medidas de mitigação (§2º) e considera se os dados ficaram ininteligíveis para terceiros, por exemplo por criptografia (§3º). O art. 46 obriga os agentes a adotar medidas de segurança técnicas e administrativas, desde a concepção do produto ou serviço.

Pegadinhas: formatar antes de coletar evidências destrói a prova; a LGPD não fixa 72 horas (prazo do regulamento europeu); só incidente que possa acarretar risco ou dano relevante exige comunicação.`,
    exemplos: [
      "No início do plantão, vários computadores exibem nota de resgate e a TI quer formatar tudo para “voltar a funcionar”: o correto é isolar as máquinas da rede (contenção), preservar memória, logs e a nota como evidência, e só então erradicar a ameaça e restaurar a partir do backup íntegro.",
      "Uma clínica descobre que um invasor copiou a base de prontuários: como são dados de saúde (sensíveis) e há risco relevante aos pacientes, o controlador deve comunicar a ANPD e os titulares, descrevendo os dados afetados, os riscos e as medidas adotadas (art. 48 da LGPD).",
    ],
    origem: "oficial",
  },
];
