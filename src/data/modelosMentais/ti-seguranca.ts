import type { ModeloMental } from "../../lib/types";

/** TI — modelos mentais dos tópicos de conteudos/ti-seguranca.ts (mesmas strings de tópico). */
export const MODELOS_MENTAIS_TI_SEGURANCA: ModeloMental[] = [
  {
    topico: "Pilares da segurança da informação e gestão de riscos (vulnerabilidade, ameaça, risco)",
    origem: "oficial",
    gancho: "A janela aberta é a vulnerabilidade, o ladrão é a ameaça, a chance de ele entrar e o estrago são o risco",
    modelo:
      "Pergunte o que foi atingido: vazou (confidencialidade), foi alterado (integridade), parou (disponibilidade), veio de quem diz ser (autenticidade) ou dá para saber quem fez (rastreabilidade); não repúdio é o autor não poder negar, o que exige assinatura digital. Vulnerabilidade é fraqueza do ativo e existe mesmo sem ataque; ameaça é quem ou o que pode explorá-la; risco é probabilidade x impacto. O risco se mitiga, transfere, evita ou aceita.",
  },
  {
    topico: "Controle de acesso, autenticação multifator, logs e auditoria",
    origem: "oficial",
    gancho: "Crachá, catraca e câmera: quem é você, onde pode entrar, o que fez lá dentro",
    modelo:
      "Identificar é dizer quem é; autenticar é provar; autorizar é receber as permissões; auditar é conferir depois o que foi feito. MFA só existe com fatores de categorias diferentes (sei, tenho, sou): senha + PIN é fator único. Menor privilégio e RBAC dão a cada função só o necessário. Log só serve como prova se for de conta individual, com relógio sincronizado e protegido contra alteração: conta compartilhada mata a rastreabilidade.",
  },
  {
    topico: "Criptografia, hash e certificado digital ICP-Brasil (A1 e A3)",
    origem: "oficial",
    gancho: "Sigilo: tranco com o cadeado do destinatário. Assinatura: carimbo com a minha chave",
    modelo:
      "Para sigilo, cifra-se com a chave pública do destinatário e só a privada dele abre; para assinar, usa-se a própria chave privada e todos conferem com a pública. Hash é impressão digital do conteúdo: prova integridade, não esconde nada, não se reverte e não muda se o arquivo for só renomeado. Certificado digital liga a chave pública a uma pessoa: A1 fica em arquivo no computador (até 1 ano); A3 guarda a chave privada em token ou cartão, sem exportação. A AR identifica o solicitante; a AC emite.",
  },
  {
    topico: "Backup e recuperação de dados como controle de segurança (RPO, RTO, cópia imutável)",
    origem: "oficial",
    gancho: "RPO olha para trás (quanto dado posso perder); RTO olha para frente (em quanto tempo volto)",
    modelo:
      "Incremental copia o que mudou desde o último backup de qualquer tipo (rápido para copiar, lento para restaurar); diferencial, desde o último completo (restaura com completo + último diferencial). RPO de 4 horas exige cópias pelo menos a cada 4 horas; RTO é o prazo para religar o serviço. Contra ransomware vale cópia offline ou imutável e a regra 3-2-1; sincronização em nuvem, RAID e HD sempre conectado não são backup seguro. Backup que nunca foi testado não é garantia.",
  },
  {
    topico: "Malware e ransomware: tipos, vetores e técnicas de evasão",
    origem: "oficial",
    gancho: "Vírus pega carona, worm anda sozinho, cavalo de Troia é convidado para entrar",
    modelo:
      "Vírus precisa de hospedeiro e de execução; worm se replica sozinho pela rede; trojan finge ser legítimo, é instalado pela vítima e não se replica. Spyware espiona (keylogger, screenlogger), rootkit esconde o invasor, backdoor garante a volta, bot transforma a máquina em soldado da botnet. Ransomware sequestra dados e hoje também os copia para extorquir em dobro: isola-se, preserva-se a evidência e restaura-se do backup. Para fugir do antivírus: polimorfismo, tunelamento, blindagem, retrovírus e antiemulação.",
  },
  {
    topico: "Engenharia social e variantes de phishing (spear phishing, whaling, smishing, vishing, pharming)",
    origem: "oficial",
    gancho: "O golpe ataca a pessoa, não a máquina: pressa, medo e autoridade são as ferramentas",
    modelo:
      "Phishing é isca em massa; spear phishing é isca sob medida para um alvo; whaling é spear phishing no chefe. O canal dá o nome: smishing (SMS), vishing (voz), quishing (QR code). Pharming dispensa o link falso: a vítima digita o endereço certo e cai no site falso porque o DNS foi adulterado. No penal, se a vítima enganada transfere, é fraude eletrônica do art. 171, §2º-A; se o criminoso subtrai sozinho com a senha capturada, é furto do art. 155, §4º-B.",
  },
  {
    topico: "Segurança em redes, dispositivos móveis e nuvem (responsabilidade compartilhada, zero trust)",
    origem: "oficial",
    gancho: "IDS é o alarme, IPS é o segurança que barra; na nuvem, o provedor cuida do prédio e você da sua sala",
    modelo:
      "Firewall filtra por regra, IDS detecta e avisa, IPS bloqueia em linha, VPN protege só o trajeto e DMZ isola os servidores expostos. Zero trust não confia em ninguém por estar dentro da rede: verifica identidade, dispositivo e contexto a cada acesso. Na nuvem, o provedor responde pela segurança da nuvem e o cliente pela segurança na nuvem (dados, contas, permissões), mesmo em SaaS: link público mal configurado é falha do cliente.",
  },
  {
    topico: "Políticas de segurança e resposta a incidentes (PSI, fases do NIST, art. 48 da LGPD)",
    origem: "oficial",
    gancho: "Prepara, detecta, contém, erradica, recupera e aprende; e não formate antes de preservar a prova",
    modelo:
      "A PSI é a diretriz aprovada pela alta direção, detalhada por normas e procedimentos. No incidente, segue-se o ciclo do NIST: preparação, detecção e análise, contenção, erradicação, recuperação e lições aprendidas, preservando memória, logs e imagens antes de limpar. Se houver dado pessoal com risco ou dano relevante, o controlador comunica a ANPD e o titular (art. 48 da LGPD), em prazo que o regulamento da ANPD fixou em 3 dias úteis, e não 72 horas.",
  },
];
