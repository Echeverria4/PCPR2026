import type { Question } from "../../lib/types";

/**
 * TI — bloco de segurança da informação, crimes cibernéticos, investigação digital e
 * legislação digital (Anexo I, itens 1.4 a 1.6). Separado de ti.ts só para permitir
 * edição em paralelo; o índice junta os dois arquivos na mesma matéria "ti".
 * IDs deste arquivo: ti-201 em diante.
 */
export const QUESTOES_TI_SEGURANCA: Question[] = [
  // ───────────── 1.4 Segurança da informação e segurança cibernética ─────────────
  {
    id: "ti-201",
    materia: "ti",
    topico: "Pilares da segurança da informação e gestão de riscos (vulnerabilidade, ameaça, risco)",
    enunciado:
      "Em auditoria no sistema de controle de bens apreendidos de uma delegacia, a corregedoria constatou que a quantidade de entorpecente registrada em um auto de apreensão havia sido reduzida de 12 kg para 2 kg, três dias depois do registro original. O sistema exige login individual e grava, para cada alteração, o usuário, a data, a hora e o endereço da estação, o que permitiu identificar o servidor responsável.\n\nNo caso, os atributos da segurança da informação, respectivamente, violado pela alteração e que permitiu a identificação do autor são",
    alternativas: [
      "a confidencialidade e a autenticidade.",
      "a disponibilidade e o não repúdio.",
      "a integridade e a rastreabilidade.",
      "a integridade e a confidencialidade.",
      "a autenticidade e a disponibilidade.",
    ],
    correta: 2,
    explicacao:
      "A alteração indevida do conteúdo de um registro viola a integridade, que é a garantia de que a informação não seja modificada sem autorização. A identificação de quem fez o quê, quando e de onde, a partir dos logs individuais, é a rastreabilidade (accountability). Não houve acesso indevido a conteúdo sigiloso, por isso não se trata de quebra da confidencialidade; o sistema continuou acessível, logo a disponibilidade não foi atingida. O não repúdio exigiria prova criptográfica de autoria, como a assinatura digital, e não apenas o registro de log.",
    origem: "banco",
  },
  {
    id: "ti-202",
    materia: "ti",
    topico: "Pilares da segurança da informação e gestão de riscos (vulnerabilidade, ameaça, risco)",
    enunciado:
      "No relatório de análise de riscos de uma Polícia Civil, a equipe de TI registrou os seguintes elementos:\n\nI. O servidor que hospeda o sistema de boletins de ocorrência usa uma versão de sistema operacional que não recebe mais atualizações de segurança do fabricante.\nII. Grupos criminosos que atuam com ransomware vêm explorando falhas dessa versão em órgãos públicos.\nIII. Estimou-se alta probabilidade de ataque e impacto grave, com paralisação do plantão e vazamento de inquéritos.\n\nOs elementos I, II e III correspondem, respectivamente, a",
    alternativas: [
      "ameaça, vulnerabilidade e incidente.",
      "risco, ameaça e vulnerabilidade.",
      "vulnerabilidade, risco e impacto.",
      "incidente, ameaça e vulnerabilidade.",
      "vulnerabilidade, ameaça e risco.",
    ],
    correta: 4,
    explicacao:
      "Vulnerabilidade é a fraqueza do ativo ou do controle (sistema sem correções de segurança), que existe ainda que ninguém a explore. Ameaça é o agente ou evento capaz de explorar essa fraqueza (o grupo de ransomware). Risco é a combinação da probabilidade de a ameaça explorar a vulnerabilidade com o impacto resultante, exatamente o que descreve o item III. Não há incidente, porque nada ainda comprometeu a confidencialidade, a integridade ou a disponibilidade; e impacto é apenas um dos componentes do risco, não o seu sinônimo.",
    origem: "banco",
  },
  {
    id: "ti-203",
    materia: "ti",
    topico: "Malware e ransomware: tipos, vetores e técnicas de evasão",
    enunciado:
      "Em uma mesma semana, o setor de informática de uma delegacia registrou dois episódios. No primeiro, um programa malicioso se espalhou sozinho por dezenas de computadores da rede interna, explorando uma falha não corrigida do sistema operacional, sem que nenhum servidor abrisse arquivo algum. No segundo, um escrivão baixou e instalou um suposto “leitor de PDF gratuito” que, além de abrir documentos, passou a enviar a terceiros os arquivos da pasta de inquéritos; o programa não se copiou para outras máquinas.\n\nA diferença entre os dois códigos maliciosos está corretamente descrita em:",
    alternativas: [
      "o primeiro é um worm, que se replica automaticamente e se espalha pela rede; o segundo é um cavalo de Troia, instalado pelo próprio usuário por parecer um programa legítimo.",
      "o primeiro é um vírus, que precisa de um arquivo hospedeiro para se espalhar; o segundo é um worm, que depende da execução pelo usuário.",
      "o primeiro é um cavalo de Troia, que é autônomo e se replica sozinho; o segundo é um worm, que depende de um programa legítimo para agir.",
      "o primeiro é um rootkit, que serve para esconder a presença do invasor; o segundo é um ransomware, que cifra os dados para pedir resgate.",
      "o primeiro é um adware, que não causa danos diretos; o segundo é um vírus, que é exclusivamente destrutivo.",
    ],
    correta: 0,
    explicacao:
      "Worm é programa autônomo que se propaga sozinho pela rede, explorando vulnerabilidades, sem hospedeiro e sem ação do usuário, como no primeiro episódio. Cavalo de Troia (trojan) aparenta ser legítimo, é instalado pela própria vítima enganada e não se autorreplica, como o falso leitor de PDF que exfiltrava arquivos. Vírus depende de hospedeiro e de execução, o que não ocorreu no primeiro caso; trojan não se replica; rootkit esconde o invasor e ransomware cifra dados, condutas que não foram descritas; adware exibe propaganda.",
    origem: "banco",
    fonte: "FGV · PC-MG 2025 · Investigador (adaptada)",
  },
  {
    id: "ti-204",
    materia: "ti",
    topico: "Engenharia social e variantes de phishing (spear phishing, whaling, smishing, vishing, pharming)",
    enunciado:
      "Uma investigadora recebeu, no e-mail pessoal, mensagem com o título “Atualize seu cadastro hoje para evitar o bloqueio da conta”. O link levava a uma página idêntica à do seu banco, na qual ela digitou agência, conta e senha. Dois dias depois, notou transferências que não havia feito. A perícia não encontrou nenhum programa malicioso instalado no computador usado.\n\nO ataque sofrido pela investigadora classifica-se como",
    alternativas: [
      "ransomware, porque a mensagem ameaçava bloquear o acesso à conta da vítima.",
      "negação de serviço (DoS), porque o acesso indevido prejudicou o serviço bancário da vítima.",
      "pharming, porque a vítima foi levada a uma página falsa idêntica à verdadeira.",
      "phishing, porque o criminoso usou uma mensagem fraudulenta, em nome de instituição confiável, para induzir a vítima a entregar as credenciais.",
      "worm, porque o código malicioso se propagou do e-mail para a conta bancária sem ação da vítima.",
    ],
    correta: 3,
    explicacao:
      "Phishing é a fraude de engenharia social em que uma comunicação falsa, em nome de instituição confiável, induz a vítima a fornecer credenciais, como no caso. Ransomware é malware que cifra ou bloqueia dados para exigir resgate, e a mensagem apenas simulava um bloqueio; DoS ataca a disponibilidade de um serviço; worm é malware que se replica sozinho, e nenhum código foi instalado. No pharming a vítima digita o endereço correto e é desviada pela adulteração da resolução de nomes (DNS); aqui ela clicou em link enganoso, o que caracteriza o phishing.",
    origem: "banco",
    fonte: "FGV · PC-MG 2025 · Investigador (adaptada)",
  },
  {
    id: "ti-205",
    materia: "ti",
    topico: "Criptografia, hash e certificado digital ICP-Brasil (A1 e A3)",
    enunciado:
      "Um delegado precisa enviar a um promotor de justiça, pela internet, o relatório de uma investigação sigilosa, e quer garantir que somente o promotor consiga ler o conteúdo. Ambos possuem pares de chaves de criptografia assimétrica, e as chaves públicas são conhecidas.\n\nPara alcançar esse objetivo, o delegado deve cifrar o relatório com",
    alternativas: [
      "a sua própria chave privada, de modo que somente o promotor consiga decifrá-lo.",
      "a chave pública do promotor, de modo que somente o promotor consiga decifrá-lo com a chave privada dele.",
      "a sua própria chave pública, para que o promotor o decifre com a chave privada dele.",
      "a chave privada do promotor, para que somente o promotor o decifre com a chave pública dele.",
      "uma chave simétrica escolhida pelo promotor e divulgada por e-mail, para que ambos tenham a mesma chave.",
    ],
    correta: 1,
    explicacao:
      "Na criptografia assimétrica, o sigilo se obtém cifrando com a chave pública do destinatário: apenas a chave privada correspondente, que só o destinatário possui, decifra a mensagem. Cifrar com a própria chave privada não dá sigilo, porque qualquer pessoa decifra com a chave pública do remetente (é o mecanismo da assinatura). A chave pública do remetente só é aberta pela privada do próprio remetente, e o delegado não tem acesso à chave privada do promotor. Enviar uma chave simétrica por e-mail aberto compromete o segredo dela.",
    origem: "banco",
    fonte: "FGV · PC-MG 2025 · Investigador (adaptada)",
  },
  {
    id: "ti-206",
    materia: "ti",
    topico: "Controle de acesso, autenticação multifator, logs e auditoria",
    enunciado:
      "A Polícia Civil vai exigir autenticação multifator (MFA) no acesso ao sistema de inteligência. A equipe de TI avaliou as seguintes combinações:\n\nI. Senha pessoal e PIN de quatro dígitos.\nII. Senha pessoal e código de seis dígitos gerado por aplicativo autenticador no celular funcional.\nIII. Cartão inteligente com certificado digital e leitura da impressão digital.\nIV. Senha pessoal e resposta a uma pergunta secreta cadastrada pelo usuário.\n\nConfiguram autenticação multifator apenas as combinações",
    alternativas: [
      "I e IV.",
      "II e IV.",
      "II e III.",
      "I, II e III.",
      "II, III e IV.",
    ],
    correta: 2,
    explicacao:
      "Autenticação multifator exige fatores de categorias diferentes: algo que o usuário sabe (senha, PIN, resposta secreta), algo que tem (celular com autenticador, token, cartão) e algo que é (biometria). A combinação II reúne saber e ter; a III, ter (cartão com certificado) e ser (digital). As combinações I e IV juntam dois elementos da mesma categoria (algo que se sabe) e continuam sendo autenticação de fator único, ainda que com duas etapas.",
    origem: "banco",
  },
  {
    id: "ti-207",
    materia: "ti",
    topico: "Controle de acesso, autenticação multifator, logs e auditoria",
    enunciado:
      "Ao chegar ao plantão, um agente digita sua matrícula na tela do sistema de boletins (1); em seguida, informa a senha e aprova uma notificação no celular funcional (2); o sistema libera apenas os menus de consulta e registro previstos para o perfil de agente, bloqueando a homologação de boletins, que é exclusiva do delegado (3); por fim, cada consulta feita por ele é gravada com data, hora e estação de trabalho (4).\n\nAs etapas 1, 2, 3 e 4 correspondem, respectivamente, a",
    alternativas: [
      "autenticação, identificação, auditoria e autorização.",
      "identificação, autorização, autenticação e auditoria.",
      "autorização, autenticação, identificação e registro.",
      "identificação, autenticação, auditoria e autorização.",
      "identificação, autenticação, autorização e registro para auditoria.",
    ],
    correta: 4,
    explicacao:
      "Informar a matrícula é declarar uma identidade (identificação); comprovar essa identidade com senha e segundo fator é a autenticação; conceder somente as permissões do perfil de agente é a autorização, aqui no modelo de controle baseado em papéis (RBAC), com menor privilégio; gravar o que foi feito alimenta a trilha de auditoria (accounting). A autenticação sempre precede a autorização, e a identificação precede a autenticação, o que afasta as demais sequências.",
    origem: "banco",
  },
  {
    id: "ti-208",
    materia: "ti",
    topico: "Controle de acesso, autenticação multifator, logs e auditoria",
    enunciado:
      "Após o vazamento do endereço de uma testemunha protegida, a corregedoria consultou os logs do sistema de consultas e descobriu que a pesquisa foi feita às 3h12 pela conta “plantao02”, usada por todos os servidores daquele turno, com senha anotada em um papel ao lado do monitor. Além disso, o relógio daquela estação estava 40 minutos adiantado.\n\nA medida que corrige, ao mesmo tempo, as duas falhas que impediram a identificação do responsável é",
    alternativas: [
      "criar contas individuais e intransferíveis para cada servidor e sincronizar os relógios das estações com um servidor de tempo (NTP).",
      "trocar a senha da conta “plantao02” a cada turno e afixá-la em local menos visível.",
      "criptografar o banco de dados de testemunhas com chave simétrica compartilhada pelo plantão.",
      "manter a conta coletiva, mas exigir que cada consulta seja anotada em livro de papel com a assinatura do servidor.",
      "aumentar o tempo de retenção dos logs de 90 para 365 dias.",
    ],
    correta: 0,
    explicacao:
      "Conta genérica compartilhada elimina a rastreabilidade, porque o log mostra a conta, mas não a pessoa; relógio dessincronizado impede a correlação confiável dos eventos com outras fontes, como escalas e câmeras. Contas individuais e sincronização por NTP resolvem as duas falhas. Trocar a senha da conta coletiva mantém o compartilhamento; cifrar o banco protege a confidencialidade, mas não identifica quem consultou; o livro de papel depende da boa-fé de quem anota; e ampliar a retenção apenas guarda por mais tempo um registro que continua sem apontar o autor.",
    origem: "banco",
  },
  {
    id: "ti-209",
    materia: "ti",
    topico: "Criptografia, hash e certificado digital ICP-Brasil (A1 e A3)",
    enunciado:
      "Na extração dos dados de um pen drive apreendido, o perito gerou a imagem forense do dispositivo e calculou o hash SHA-256 do arquivo de imagem, que registrou no laudo. Meses depois, a defesa alegou adulteração. A imagem, que havia sido renomeada e copiada para outro servidor, teve o hash recalculado, com resultado idêntico ao do laudo.\n\nSobre a situação, é correto afirmar que",
    alternativas: [
      "o valor idêntico prova que o perito foi o autor da imagem, pois o hash funciona como assinatura digital.",
      "o hash deveria ter mudado, porque a renomeação e a cópia para outro servidor alteram o resumo calculado.",
      "o hash SHA-256 permite reconstruir o conteúdo original da imagem, caso o arquivo venha a ser corrompido.",
      "o valor idêntico demonstra que o conteúdo da imagem não foi alterado, já que o hash depende apenas do conteúdo, e não do nome do arquivo ou do local onde está gravado.",
      "o hash garante também a confidencialidade da imagem, pois o arquivo passa a ficar cifrado após o cálculo.",
    ],
    correta: 3,
    explicacao:
      "Hash é função de mão única que gera um resumo de tamanho fixo a partir do conteúdo: qualquer alteração de um único bit muda o resultado, ao passo que renomear ou copiar o arquivo não o altera. Por isso o valor idêntico comprova a integridade, o que ampara a cadeia de custódia (arts. 158-A a 158-F do CPP). O hash sozinho não identifica o autor (isso exige assinatura com chave privada), não permite reconstruir o arquivo e não cifra nada: o conteúdo continua legível.",
    origem: "banco",
  },
  {
    id: "ti-210",
    materia: "ti",
    topico: "Criptografia, hash e certificado digital ICP-Brasil (A1 e A3)",
    enunciado:
      "Um delegado assina digitalmente, com seu certificado ICP-Brasil, uma representação por busca e apreensão em formato PDF e a envia ao juízo pelo sistema eletrônico, sem cifrar o arquivo. Sobre esse documento, analise as afirmativas:\n\nI. A assinatura foi gerada com a chave privada do delegado e pode ser verificada por qualquer pessoa com a chave pública contida no certificado dele.\nII. Qualquer alteração no PDF após a assinatura será detectada na verificação, o que garante a integridade.\nIII. Como foi assinado digitalmente, o conteúdo da representação fica ilegível para quem não tiver a chave privada do juiz.\n\nEstá correto o que se afirma em",
    alternativas: [
      "I, apenas.",
      "I e II, apenas.",
      "II e III, apenas.",
      "I e III, apenas.",
      "I, II e III.",
    ],
    correta: 1,
    explicacao:
      "A assinatura digital é o hash do documento cifrado com a chave privada do signatário; a verificação se faz com a chave pública do certificado (I correta). Como o hash é recalculado na verificação, qualquer modificação posterior é detectada (II correta). A assinatura garante autenticidade, integridade e não repúdio, mas não confidencialidade: o documento assinado continua legível. O sigilo só existiria se o arquivo também fosse cifrado com a chave pública do destinatário (III errada).",
    origem: "banco",
  },
  {
    id: "ti-211",
    materia: "ti",
    topico: "Criptografia, hash e certificado digital ICP-Brasil (A1 e A3)",
    enunciado:
      "Em uma delegacia, o escrivão usa certificado digital ICP-Brasil do tipo A1, instalado no notebook funcional, e o delegado usa certificado do tipo A3, gravado em token USB. Numa sexta-feira, o notebook do escrivão foi furtado de dentro da viatura.\n\nSobre os dois tipos de certificado e a providência adequada, é correto afirmar que",
    alternativas: [
      "o A1 tem validade de até cinco anos e, por estar em arquivo, não pode ser usado por terceiros sem o token do titular, de modo que basta aguardar o vencimento.",
      "o A3 pode ser copiado livremente para vários computadores, o que o torna mais vulnerável que o A1 em caso de furto.",
      "no A1 as chaves ficam em arquivo no computador, o que exige a revogação imediata do certificado do escrivão; no A3, a chave privada é gerada e guardada no token ou cartão e não pode ser exportada.",
      "o A1 e o A3 diferem apenas no prazo de validade, sendo ambos armazenados em hardware criptográfico.",
      "a revogação é desnecessária, porque o furto do equipamento faz o certificado perder automaticamente a validade jurídica.",
    ],
    correta: 2,
    explicacao:
      "No certificado A1, o par de chaves fica em arquivo no computador (validade de até um ano); quem obtiver o arquivo e sua senha pode assinar em nome do titular, por isso o furto exige pedir a revogação, que faz o certificado constar da lista de revogados. No A3, a chave privada é gerada e mantida em hardware criptográfico (token ou cartão inteligente) e não pode ser exportada. O A1 não depende de token; o A3 não é copiável; a diferença não é só de prazo; e o furto não invalida o certificado automaticamente: é preciso revogá-lo.",
    origem: "banco",
  },
  {
    id: "ti-212",
    materia: "ti",
    topico: "Criptografia, hash e certificado digital ICP-Brasil (A1 e A3)",
    enunciado:
      "Em treinamento sobre assinatura de documentos no inquérito eletrônico, o instrutor fez afirmações sobre a Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil), instituída pela Medida Provisória 2.200-2/2001.\n\nAssinale a afirmação correta.",
    alternativas: [
      "A autoridade de registro (AR) é a entidade que emite e assina os certificados dos usuários finais, cabendo à autoridade certificadora apenas arquivá-los.",
      "A AC Raiz, função exercida pelo ITI, emite diretamente os certificados dos servidores públicos, dispensando autoridades intermediárias.",
      "As declarações constantes de documento assinado com certificado ICP-Brasil têm presunção absoluta de veracidade, sendo vedado às partes admitir outro meio de comprovação de autoria e integridade.",
      "Pela Lei 14.063/2020, a assinatura eletrônica avançada é a única que exige certificado digital emitido pela ICP-Brasil.",
      "A AR identifica e cadastra o solicitante e encaminha a solicitação à autoridade certificadora (AC), que emite o certificado; à AC Raiz é vedado emitir certificados para o usuário final.",
    ],
    correta: 4,
    explicacao:
      "Pela MP 2.200-2/2001, a AR identifica e cadastra os usuários e encaminha as solicitações às ACs (art. 7º), que emitem, expedem, distribuem, revogam e gerenciam os certificados (art. 6º); a AC Raiz, exercida pelo ITI, credencia e certifica as ACs e é proibida de emitir certificados para o usuário final (art. 5º, parágrafo único). As declarações em documento com certificado ICP-Brasil presumem-se verdadeiras em relação aos signatários (art. 10, §1º), mas o §2º admite outros meios de comprovação aceitos pelas partes. Na Lei 14.063/2020, quem exige certificado ICP-Brasil é a assinatura qualificada, não a avançada.",
    origem: "banco",
  },
  {
    id: "ti-213",
    materia: "ti",
    topico: "Criptografia, hash e certificado digital ICP-Brasil (A1 e A3)",
    enunciado:
      "Antes de enviar a outra unidade, por e-mail, o arquivo .zip com relatórios em texto (.txt) e fotos (.jpg) de uma investigação, um agente discutiu com colegas a diferença entre compactar e criptografar arquivos. Foram feitas as seguintes afirmativas:\n\nI. Todo arquivo criptografado está necessariamente compactado, e vice-versa.\nII. A compactação usualmente explora a repetição de trechos e padrões presentes no arquivo.\nIII. Arquivos de texto (.txt) costumam alcançar bons índices de compactação em comparação com outros tipos de arquivo, como imagens JPEG, que já são comprimidas.\n\nEstá correto o que se afirma em",
    alternativas: [
      "II e III, apenas.",
      "I, apenas.",
      "II, apenas.",
      "III, apenas.",
      "I, II e III.",
    ],
    correta: 0,
    explicacao:
      "Compactar reduz o tamanho eliminando redundâncias (repetição de trechos e padrões), enquanto criptografar torna o conteúdo ininteligível para quem não tem a chave: são operações independentes, e um arquivo pode ser cifrado sem ser compactado, ou compactado sem ser cifrado (I errada; compactar não é proteger o sigilo). Texto puro tem muita redundância e se compacta bem, ao contrário de formatos já comprimidos, como JPEG (II e III corretas).",
    origem: "banco",
    fonte: "FGV · PC-RJ 2022 · Investigador (adaptada)",
  },
  {
    id: "ti-214",
    materia: "ti",
    topico: "Criptografia, hash e certificado digital ICP-Brasil (A1 e A3)",
    enunciado:
      "Uma Polícia Civil vai implantar um sistema central que assina digitalmente, em grande volume, os laudos e certidões emitidos pelas unidades, e precisa decidir onde gerar e guardar as chaves criptográficas usadas nessas assinaturas.\n\nSobre os dispositivos de hardware de segurança, assinale a afirmativa correta.",
    alternativas: [
      "O token criptográfico e o cartão inteligente comunicam-se com os leitores exclusivamente por radiofrequência ou bluetooth, porque o contato físico com o equipamento é vedado por razões de segurança.",
      "O disco com autocriptografia (SED) depende de um programa instalado no sistema operacional que cifra os arquivos um a um, de modo que os dados ficam desprotegidos se o disco for retirado do computador.",
      "As câmeras corporais convertem as imagens coloridas em monocromáticas para economizar espaço e, por isso, dispensam o cálculo de hash na preservação das gravações.",
      "Os módulos de segurança de hardware (HSM) são dispositivos físicos, robustos e seguros, projetados para gerar e proteger chaves criptográficas usadas para cifrar e decifrar dados e para criar assinaturas digitais.",
      "Os coletores de dados portáteis (rugged devices) são dispositivos que tornam qualquer arquivo neles gravado automaticamente assinado com certificado ICP-Brasil.",
    ],
    correta: 3,
    explicacao:
      "O HSM (Hardware Security Module) é o equipamento físico, resistente a violação, que gera, guarda e usa chaves criptográficas sem expô-las, e é a solução típica para assinaturas em larga escala em autoridades certificadoras, bancos e órgãos públicos. Tokens e cartões inteligentes usam, em regra, conexão USB ou leitor de contato; o SED cifra os dados no próprio hardware do disco, justamente para protegê-los quando o disco é removido; câmeras corporais não transformam as imagens em monocromáticas nem dispensam o hash; coletores portáteis não assinam arquivos automaticamente.",
    origem: "banco",
    fonte: "FGV · PC-PI 2025 · Oficial Investigador (adaptada)",
  },
  {
    id: "ti-215",
    materia: "ti",
    topico: "Backup e recuperação de dados como controle de segurança (RPO, RTO, cópia imutável)",
    enunciado:
      "O servidor de arquivos de uma delegacia tem a seguinte rotina: backup completo no domingo, às 22h, e backup incremental de segunda a quinta-feira, às 22h. Na sexta-feira, às 10h, o disco principal queimou, e os dados precisam ser restaurados até a situação de quinta-feira, às 22h.\n\nConsiderando a rotina adotada, a restauração exigirá",
    alternativas: [
      "apenas o backup completo de domingo e o incremental de quinta-feira.",
      "o backup completo de domingo e os incrementais de segunda, terça, quarta e quinta-feira, aplicados nessa ordem.",
      "apenas o incremental de quinta-feira, pois ele acumula todas as alterações feitas desde domingo.",
      "apenas o backup completo de domingo, porque os incrementais registram só os arquivos excluídos.",
      "o backup completo de domingo e o incremental de segunda-feira, que é o mais completo da série.",
    ],
    correta: 1,
    explicacao:
      "O backup incremental copia apenas o que mudou desde o último backup de qualquer tipo; por isso, cada incremental contém só as alterações daquele dia, e a restauração exige o completo mais todos os incrementais posteriores, em sequência. A combinação completo + último backup só basta na rotina diferencial, em que cada cópia acumula tudo o que mudou desde o último completo. O incremental de quinta, sozinho, tem apenas as mudanças de quinta; o completo de domingo, sozinho, perde quatro dias de trabalho.",
    origem: "banco",
  },
  {
    id: "ti-216",
    materia: "ti",
    topico: "Backup e recuperação de dados como controle de segurança (RPO, RTO, cópia imutável)",
    enunciado:
      "Ao analisar o relatório da ferramenta de backup do cartório, o agente notou que, depois do backup completo de domingo, as cópias noturnas tiveram 1,5 GB na segunda-feira, 3 GB na terça e 4,5 GB na quarta, embora a quantidade de arquivos alterados a cada dia tenha sido praticamente a mesma, cerca de 1,5 GB. Ele verificou também que o atributo de arquivamento dos arquivos copiados permanecia marcado depois de cada cópia noturna.\n\nO comportamento observado é característico do backup",
    alternativas: [
      "incremental, que copia apenas o que mudou desde o último backup de qualquer tipo e desmarca o atributo de arquivamento.",
      "completo, que copia todos os arquivos e desmarca o atributo de arquivamento.",
      "diferencial, que copia tudo o que mudou desde o último backup completo e não desmarca o atributo de arquivamento.",
      "de cópia (copy), que copia somente os arquivos alterados no dia e desmarca o atributo de arquivamento.",
      "espelhado (RAID 1), que duplica em tempo real os dados de um disco em outro.",
    ],
    correta: 2,
    explicacao:
      "O diferencial copia tudo o que mudou desde o último completo e não desmarca o atributo (bit) de arquivamento; por isso cada cópia recopia as alterações dos dias anteriores e cresce progressivamente, como no relatório. O incremental desmarca o bit e teria cerca de 1,5 GB por dia; o completo copia tudo e também desmarca o bit; o backup de cópia copia todos os arquivos selecionados sem alterar o bit; RAID 1 é redundância de disco, não rotina de backup.",
    origem: "banco",
  },
  {
    id: "ti-217",
    materia: "ti",
    topico: "Backup e recuperação de dados como controle de segurança (RPO, RTO, cópia imutável)",
    enunciado:
      "O plano de continuidade do sistema de boletins de ocorrência fixa RPO (Recovery Point Objective) de 2 horas e RTO (Recovery Time Objective) de 4 horas. Em um dia de pane, a última cópia íntegra dos dados era das 11h; o sistema saiu do ar às 14h e voltou a funcionar, com os dados restaurados daquela cópia, às 17h30.\n\nCom base nessas informações, é correto afirmar que",
    alternativas: [
      "o RPO e o RTO foram cumpridos, pois o sistema voltou a funcionar no mesmo dia.",
      "o RPO foi cumprido, porque a cópia das 11h era íntegra, e o RTO foi descumprido, porque a restauração levou mais de 2 horas.",
      "o RPO e o RTO foram descumpridos, pois a parada durou mais de 2 horas.",
      "o RTO foi descumprido, porque se perderam 3 horas de dados, e o RPO foi cumprido, porque o sistema voltou em menos de 4 horas.",
      "o RPO foi descumprido, porque se perderam 3 horas de dados, acima do máximo de 2 horas, e o RTO foi cumprido, porque o serviço voltou em 3 horas e 30 minutos, dentro do limite de 4 horas.",
    ],
    correta: 4,
    explicacao:
      "O RPO mede a perda máxima de dados aceitável, olhando para trás a partir da pane: entre a cópia das 11h e a parada das 14h perderam-se 3 horas de registros, acima das 2 horas toleradas. O RTO mede o tempo máximo para restabelecer o serviço: das 14h às 17h30 passaram-se 3 horas e 30 minutos, dentro das 4 horas. As demais alternativas trocam as definições (perda de dados é RPO; tempo de parada é RTO) ou aplicam o limite de um indicador ao outro.",
    origem: "banco",
  },
  {
    id: "ti-218",
    materia: "ti",
    topico: "Backup e recuperação de dados como controle de segurança (RPO, RTO, cópia imutável)",
    enunciado:
      "Um ransomware invadiu a rede de um cartório usando a senha do administrador de domínio, cifrou o servidor de arquivos e, em seguida, também cifrou as cópias de segurança que estavam acessíveis com aquela credencial.\n\nEntre as soluções de cópia a seguir, a que mais provavelmente teria sobrevivido ao ataque é",
    alternativas: [
      "a cópia imutável, mantida em armazenamento isolado com credenciais próprias, que não pode ser alterada nem apagada durante o período de retenção, nem mesmo pelo administrador.",
      "o espelhamento dos discos do servidor em RAID 1, que duplica cada gravação em tempo real.",
      "a pasta do servidor sincronizada com um serviço de nuvem, sem histórico de versões, que replica imediatamente cada alteração.",
      "o disco externo USB conectado permanentemente ao servidor e mapeado como unidade de rede.",
      "os snapshots gravados no próprio servidor de arquivos e administrados com a conta de administrador de domínio.",
    ],
    correta: 0,
    explicacao:
      "Contra ransomware valem cópias offline ou isoladas (air gap) e imutáveis (WORM), com credenciais separadas, dentro da regra 3-2-1 (três cópias, duas mídias, uma fora do local). RAID 1 protege contra falha de disco, mas replica na hora a cifragem; a sincronização sem versões copia para a nuvem os arquivos já cifrados; o disco sempre conectado e os snapshots controlados pela credencial comprometida ficam ao alcance do invasor e caem junto.",
    origem: "banco",
  },
  {
    id: "ti-219",
    materia: "ti",
    topico: "Backup e recuperação de dados como controle de segurança (RPO, RTO, cópia imutável)",
    enunciado:
      "Em uma busca, foram apreendidos um notebook com disco rígido magnético (HD) e outro com SSD. O investigado afirmou ter apagado “tudo” na véspera. Sobre a possibilidade de recuperar os dados, analise as afirmativas:\n\nI. No HD, arquivos excluídos, mesmo com a lixeira esvaziada, em regra podem ser recuperados por ferramentas forenses enquanto o espaço que ocupavam não for sobrescrito.\nII. A formatação rápida apaga definitivamente o conteúdo da unidade, tornando inútil qualquer tentativa de recuperação.\nIII. No SSD, o comando TRIM e a coleta de lixo podem apagar de forma autônoma blocos marcados como livres, o que reduz a chance de recuperação e recomenda rapidez na preservação.\n\nEstá correto o que se afirma em",
    alternativas: [
      "I, apenas.",
      "II, apenas.",
      "I e II, apenas.",
      "I e III, apenas.",
      "II e III, apenas.",
    ],
    correta: 3,
    explicacao:
      "Excluir um arquivo, em regra, só marca o espaço como livre; o conteúdo permanece até ser sobrescrito e pode ser recuperado, inclusive por carving (I correta). A formatação rápida recria a estrutura do sistema de arquivos sem apagar o conteúdo; destruição efetiva exige sobrescrita completa (wipe) ou destruição física (II errada). Nos SSDs, o TRIM e a coleta de lixo limpam blocos de forma autônoma, o que reduz a chance de recuperação com o tempo (III correta).",
    origem: "banco",
  },
  {
    id: "ti-220",
    materia: "ti",
    topico: "Malware e ransomware: tipos, vetores e técnicas de evasão",
    enunciado:
      "Ao analisar o código malicioso encontrado no computador de uma vítima de fraude bancária, o perito observou que o programa usava técnicas para não ser detectado pelo antivírus instalado.\n\nAssinale a opção que descreve corretamente uma técnica usada por vírus para escapar dos programas antivírus.",
    alternativas: [
      "Antiemulação, na qual o vírus modifica o endereço de entrada de um executável, desviando a execução para outra parte do código.",
      "Tunelamento (tunneling), na qual o vírus rastreia o código das funções da API do sistema operacional que utiliza, para garantir que a execução chegue ao destino real sem passar pelo monitoramento do antivírus.",
      "Retrovírus, técnica que consiste apenas em dificultar a análise estática e dinâmica do código por pesquisadores, sem interferir no antivírus.",
      "Blindagem (armoring), em que o vírus localiza e encerra os processos do antivírus e do firewall residentes na memória e impede que reiniciem.",
      "Evasão (avoidance), que corresponde ao conjunto de ferramentas usado para esconder rastros da invasão e manter acesso privilegiado, também chamado de botnet.",
    ],
    correta: 1,
    explicacao:
      "No tunelamento, o vírus segue o código das funções da API do sistema até o destino real, passando por baixo dos ganchos instalados pelo antivírus; se detecta interceptação, desvia o controle para burlar o monitoramento. As demais trocam as definições: antiemulação é perceber que roda em emulador ou sandbox e não executar a carga; dificultar a análise estática e dinâmica é a blindagem (armoring); atacar e desativar o próprio antivírus é o que faz o retrovírus; e o conjunto de ferramentas para esconder a invasão é o rootkit, não a botnet, que é uma rede de máquinas controladas remotamente.",
    origem: "banco",
    fonte: "FGV · PC-PI 2025 · Oficial Investigador (adaptada)",
  },
  {
    id: "ti-221",
    materia: "ti",
    topico: "Malware e ransomware: tipos, vetores e técnicas de evasão",
    enunciado:
      "No laudo sobre o computador de um servidor que teve a conta do sistema policial usada por terceiros, o perito descreveu três componentes maliciosos:\n\nI. Um programa que registrava cada tecla digitada e enviava o conteúdo, a cada hora, para um endereço externo.\nII. Um conjunto de ferramentas que modificava o sistema operacional para ocultar os processos e arquivos do invasor e manter o seu acesso privilegiado.\nIII. Um módulo que fazia a máquina receber comandos de um servidor remoto, junto com milhares de outros computadores infectados, para disparar ataques de negação de serviço distribuída.\n\nOs componentes I, II e III são, respectivamente,",
    alternativas: [
      "screenlogger, rootkit e worm.",
      "keylogger, adware e ransomware.",
      "keylogger, rootkit e bot integrante de uma botnet.",
      "adware, cavalo de Troia e bot integrante de uma botnet.",
      "spyware, backdoor e worm.",
    ],
    correta: 2,
    explicacao:
      "Keylogger é o spyware que captura as teclas digitadas (o screenlogger captura a tela). Rootkit é o conjunto de ferramentas destinado a esconder a presença do invasor e manter acesso privilegiado; o backdoor apenas garante a porta de retorno. Bot é a máquina controlada remotamente, e o conjunto delas forma a botnet, usada em DDoS e spam. Worm se replica sozinho pela rede, adware exibe propaganda e ransomware sequestra dados, comportamentos não descritos no laudo.",
    origem: "banco",
  },
  {
    id: "ti-222",
    materia: "ti",
    topico: "Malware e ransomware: tipos, vetores e técnicas de evasão",
    enunciado:
      "Um grupo criminoso copiou a base de dados de contribuintes de uma prefeitura, cifrou em seguida todos os servidores e deixou nota exigindo pagamento em criptoativos, sob ameaça de publicar os dados copiados. A Polícia Civil foi acionada. Sobre o caso, analise as afirmativas:\n\nI. O ataque atingiu a disponibilidade, pela cifragem dos servidores, e a confidencialidade, pela cópia dos dados com ameaça de divulgação, caracterizando a chamada dupla extorsão.\nII. O pagamento do resgate garante a entrega da chave e a exclusão definitiva dos dados copiados, razão pela qual é a medida mais eficaz de contenção.\nIII. Antes de formatar as máquinas, devem-se isolá-las da rede e preservar a nota de resgate, os logs e, se possível, a memória, como evidências.\n\nEstá correto o que se afirma em",
    alternativas: [
      "I, apenas.",
      "II, apenas.",
      "I e II, apenas.",
      "II e III, apenas.",
      "I e III, apenas.",
    ],
    correta: 4,
    explicacao:
      "Na dupla extorsão, o grupo copia os dados antes de cifrá-los: a cifragem atinge a disponibilidade e a ameaça de publicação atinge a confidencialidade (I correta). O pagamento não garante a devolução nem a exclusão dos dados, e financia a atividade criminosa; contenção é isolar o que foi afetado (II errada). Na resposta a incidentes, isolar as máquinas e preservar evidências (nota, logs, memória, imagens) vem antes de erradicar e restaurar a partir de backup íntegro, pois formatar antes destrói a prova (III correta).",
    origem: "banco",
  },
  {
    id: "ti-223",
    materia: "ti",
    topico: "Malware e ransomware: tipos, vetores e técnicas de evasão",
    enunciado:
      "Uma aposentada registrou ocorrência relatando que recebeu, por aplicativo de mensagens, um arquivo APK apresentado como “atualização obrigatória de segurança” do seu banco. Ao instalá-lo, o aplicativo pediu a permissão de acessibilidade, que ela concedeu. Horas depois, foram feitas transferências pelo aplicativo do banco no próprio celular, sem que ela tocasse na tela. O código não se propagou para outros aparelhos.\n\nO código malicioso e o vetor de infecção estão corretamente identificados em:",
    alternativas: [
      "cavalo de Troia bancário, instalado pela própria vítima a partir de fonte fora da loja oficial, que abusa do serviço de acessibilidade para ler a tela e operar o aplicativo do banco.",
      "worm, que explorou falha do sistema operacional para se instalar sem qualquer ação da vítima.",
      "ransomware, que cifrou os dados do celular e efetuou as transferências como forma de resgate.",
      "pharming, que alterou o servidor de nomes de domínio usado pelo aplicativo do banco.",
      "adware, que exibiu propaganda falsa do banco e induziu a vítima a fazer as transferências.",
    ],
    correta: 0,
    explicacao:
      "O programa se apresentou como legítimo, foi instalado pela própria vítima a partir de um APK recebido por mensagem (fora da loja oficial) e não se replicou: são características do cavalo de Troia, aqui um trojan bancário, que abusa do serviço de acessibilidade para ler a tela e operar o aplicativo. Worm dispensa ação do usuário e se espalha sozinho; ransomware cifra dados para pedir resgate; pharming adultera a resolução de nomes; adware só exibe propaganda e não executa transações.",
    origem: "banco",
  },
  {
    id: "ti-224",
    materia: "ti",
    topico: "Engenharia social e variantes de phishing (spear phishing, whaling, smishing, vishing, pharming)",
    enunciado:
      "O delegado-geral de uma Polícia Civil recebeu e-mail que imitava o padrão visual da Secretaria de Segurança, tratava-o pelo nome e cargo, mencionava uma reunião que ele de fato tivera na semana anterior e pedia que abrisse, com urgência, o anexo “Minuta_Decreto_Reestruturacao.pdf.exe”. Mensagens semelhantes não foram enviadas a nenhum outro servidor.\n\nA técnica empregada pelo criminoso é denominada",
    alternativas: [
      "smishing, porque o golpe foi aplicado por mensagem eletrônica dirigida a uma única pessoa.",
      "phishing em massa, porque a mensagem genérica foi disparada a milhares de destinatários indistintos.",
      "pharming, porque a vítima foi conduzida a um anexo falso por adulteração do DNS.",
      "whaling, modalidade de spear phishing dirigida a ocupante do alto escalão, com mensagem personalizada a partir de dados levantados sobre o alvo.",
      "vishing, porque o criminoso se fez passar por autoridade para pressionar a vítima.",
    ],
    correta: 3,
    explicacao:
      "Whaling é o spear phishing contra o alto escalão (“peixe grande”): a mensagem é dirigida a um alvo específico e personalizada com informações coletadas antes, como nome, cargo e uma reunião real. Smishing é o phishing por SMS, e vishing, por voz; a mensagem não foi disparada em massa, nem houve adulteração de DNS, típica do pharming. Note ainda a dupla extensão “.pdf.exe”, sinal clássico de executável disfarçado de documento.",
    origem: "banco",
  },
  {
    id: "ti-225",
    materia: "ti",
    topico: "Engenharia social e variantes de phishing (spear phishing, whaling, smishing, vishing, pharming)",
    enunciado:
      "Servidores de uma delegacia passaram a relatar que, ao digitar corretamente no navegador o endereço do banco em que recebem o salário, eram levados a uma página falsa, quase idêntica à verdadeira. Nenhum deles havia clicado em links recebidos por e-mail ou mensagem. A perícia constatou que o arquivo hosts das estações havia sido alterado, associando o nome do banco ao endereço IP de um servidor controlado pelos criminosos.\n\nO ataque descrito é o",
    alternativas: [
      "spear phishing, pois a mensagem enganosa foi personalizada para os servidores daquela delegacia.",
      "pharming, pois o desvio para o site falso decorre da adulteração da resolução de nomes, sem depender de link enganoso.",
      "typosquatting, pois os criminosos registraram um domínio com grafia parecida com a do banco.",
      "smishing, pois as credenciais foram capturadas por mensagens de texto.",
      "cross-site scripting, pois o código malicioso foi inserido diretamente no site legítimo do banco.",
    ],
    correta: 1,
    explicacao:
      "No pharming a vítima digita o endereço correto, mas a resolução do nome é adulterada (arquivo hosts modificado, envenenamento de cache DNS ou roteador com DNS trocado) e ela é levada ao site falso; não depende de clique em link. Não houve mensagem personalizada (spear phishing) nem SMS (smishing); typosquatting exploraria erro de digitação em domínio parecido, mas os servidores digitavam o endereço certo; e o site legítimo não foi alterado, o que afasta o cross-site scripting.",
    origem: "banco",
  },
  {
    id: "ti-226",
    materia: "ti",
    topico: "Engenharia social e variantes de phishing (spear phishing, whaling, smishing, vishing, pharming)",
    enunciado:
      "Em exercício de segurança contratado por uma Polícia Civil, a equipe de teste registrou três situações:\n\nI. Um falso técnico de manutenção, carregando uma caixa, entrou na área restrita da sala de servidores logo atrás de um policial que abriu a porta com o próprio crachá.\nII. Pen drives com a etiqueta “Promoções 2026 – confidencial” foram deixados no estacionamento; três deles foram conectados a computadores da rede.\nIII. No balcão de atendimento, um membro da equipe observou de perto a senha digitada por um escrivão.\n\nAs técnicas de engenharia social empregadas em I, II e III são, respectivamente,",
    alternativas: [
      "baiting, tailgating e shoulder surfing.",
      "pretexting, dumpster diving e tailgating.",
      "tailgating, baiting e shoulder surfing.",
      "shoulder surfing, quid pro quo e baiting.",
      "tailgating, quid pro quo e dumpster diving.",
    ],
    correta: 2,
    explicacao:
      "Tailgating (ou piggybacking) é entrar em área restrita aproveitando o acesso de pessoa autorizada. Baiting é deixar uma isca, como o pen drive com etiqueta atraente, para que a vítima a use por curiosidade. Shoulder surfing é espiar, por cima do ombro, a senha ou a informação digitada. Quid pro quo é oferecer um benefício (como suporte técnico) em troca de acesso; dumpster diving é vasculhar o lixo; pretexting é montar uma história falsa para obter a informação.",
    origem: "banco",
  },
  {
    id: "ti-227",
    materia: "ti",
    topico: "Engenharia social e variantes de phishing (spear phishing, whaling, smishing, vishing, pharming)",
    enunciado:
      "Em junho de 2026, foram registradas duas ocorrências em uma delegacia.\n\nCaso A: a vítima recebeu SMS em nome do seu banco, acessou o link e digitou senha e código de segurança; com esses dados, o criminoso entrou na conta e transferiu, ele mesmo, R$ 8.000 para outra conta.\nCaso B: a vítima recebeu, por aplicativo de mensagens, contato de alguém que se passava por seu sobrinho e, enganada, fez ela mesma um Pix de R$ 3.000 para a conta indicada.\n\nConsiderando o Código Penal com a redação dada pela Lei 15.397/2026, analise as afirmativas:\n\nI. No caso A, há furto mediante fraude eletrônica (art. 155, §4º-B), punido com reclusão de 4 a 10 anos e multa.\nII. No caso B, há estelionato na forma de fraude eletrônica (art. 171, §2º-A), punido com reclusão de 4 a 8 anos e multa.\nIII. No caso B, a instauração da ação penal depende de representação da vítima.\n\nEstá correto o que se afirma em",
    alternativas: [
      "I, apenas.",
      "II, apenas.",
      "III, apenas.",
      "I e III, apenas.",
      "I e II, apenas.",
    ],
    correta: 4,
    explicacao:
      "No caso A, a fraude (smishing) serviu para capturar as credenciais, e a subtração foi feita pelo próprio criminoso, sem nova participação da vítima: é furto mediante fraude eletrônica, art. 155, §4º-B, do CP, com pena de 4 a 10 anos desde a Lei 15.397/2026 (I correta). No caso B, a própria vítima, induzida a erro, entregou o valor: é estelionato por fraude eletrônica, art. 171, §2º-A, com pena de 4 a 8 anos (II correta). A Lei 15.397/2026 revogou o §5º do art. 171, que exigia representação; o estelionato passou a ser de ação penal pública incondicionada (III errada).",
    origem: "banco",
  },
  {
    id: "ti-228",
    materia: "ti",
    topico: "Segurança em redes, dispositivos móveis e nuvem (responsabilidade compartilhada, zero trust)",
    enunciado:
      "No projeto da nova rede de uma delegacia regional, foram definidos três requisitos:\n\nI. Um equipamento instalado em linha com o tráfego, capaz de identificar padrões de ataque e bloqueá-los automaticamente.\nII. Uma zona intermediária, separada da rede interna, onde ficarão os servidores acessíveis pela internet, como o portal de denúncias.\nIII. Um sensor que apenas monitore cópias do tráfego e gere alertas para a equipe, sem interferir na comunicação.\n\nOs requisitos I, II e III são atendidos, respectivamente, por",
    alternativas: [
      "IPS, DMZ e IDS.",
      "IDS, VPN e IPS.",
      "IDS, DMZ e IPS.",
      "proxy, VLAN e firewall de aplicação.",
      "IPS, VPN e antivírus.",
    ],
    correta: 0,
    explicacao:
      "O IPS (sistema de prevenção de intrusão) fica em linha e bloqueia o tráfego malicioso; o IDS (sistema de detecção de intrusão) analisa o tráfego, normalmente uma cópia dele, e apenas alerta. A DMZ é a zona desmilitarizada onde ficam os serviços expostos à internet, isolados da rede interna. A VPN cria túnel cifrado para acesso remoto, e não uma zona para servidores públicos; proxy, VLAN e antivírus têm outras funções e não correspondem aos requisitos descritos.",
    origem: "banco",
  },
  {
    id: "ti-229",
    materia: "ti",
    topico: "Segurança em redes, dispositivos móveis e nuvem (responsabilidade compartilhada, zero trust)",
    enunciado:
      "Uma delegacia usa um serviço de e-mail e armazenamento contratado na modalidade SaaS. Um investigador compartilhou a pasta de laudos com a opção “qualquer pessoa com o link”, e o link acabou circulando em um grupo de mensagens, o que causou vazamento. O provedor demonstrou que sua infraestrutura não sofreu nenhuma invasão.\n\nÀ luz do modelo de responsabilidade compartilhada da computação em nuvem, é correto afirmar que",
    alternativas: [
      "em SaaS toda a segurança é transferida ao provedor, inclusive a configuração de permissões, de modo que o vazamento é falha exclusiva dele.",
      "a responsabilidade pelos dados só seria do cliente se o serviço fosse contratado na modalidade IaaS.",
      "o vazamento decorre de falha física do datacenter, que é responsabilidade compartilhada em partes iguais entre cliente e provedor.",
      "o provedor responde pela segurança da nuvem (datacenter, hardware, rede e plataforma), mas o cliente continua responsável pela segurança na nuvem, como os dados, as contas e as permissões de compartilhamento; a falha foi de configuração do cliente.",
      "a falha seria evitada com uma VPN, que impede o compartilhamento de links por usuários autorizados.",
    ],
    correta: 3,
    explicacao:
      "No modelo de responsabilidade compartilhada, o provedor cuida da segurança da nuvem (instalações, hardware, rede física, virtualização e, em SaaS, a própria aplicação), e o cliente cuida da segurança na nuvem: dados, identidades, acessos e configurações. Quanto mais gerenciado o serviço, mais o provedor assume, mas, mesmo em SaaS, dados e permissões continuam com o cliente. Por isso a pasta pública é falha de configuração do cliente, causa mais comum de vazamentos em nuvem. A VPN protege o trajeto, não controla o compartilhamento de links.",
    origem: "banco",
  },
  {
    id: "ti-230",
    materia: "ti",
    topico: "Segurança em redes, dispositivos móveis e nuvem (responsabilidade compartilhada, zero trust)",
    enunciado:
      "Um invasor obteve a senha da VPN de um servidor em teletrabalho e, uma vez conectado, conseguiu acessar livremente o sistema de inquéritos, o banco de mandados e o servidor de arquivos, porque a rede interna tratava como confiável todo equipamento que estivesse dentro dela. Para evitar que isso se repita, a equipe propôs adotar a arquitetura zero trust.\n\nEssa arquitetura caracteriza-se por",
    alternativas: [
      "reforçar o perímetro com um firewall mais robusto, mantendo acesso irrestrito a quem já estiver autenticado na rede interna.",
      "não presumir confiança em usuário ou dispositivo pelo simples fato de estar dentro da rede, verificando identidade, estado do dispositivo e contexto a cada acesso, com menor privilégio e microssegmentação.",
      "bloquear definitivamente todo acesso remoto e proibir o uso de serviços em nuvem pelos servidores.",
      "substituir a autenticação multifator por login único (SSO), para reduzir o número de senhas.",
      "transferir o servidor de arquivos para a DMZ, para que os acessos externos não passem pela rede interna.",
    ],
    correta: 1,
    explicacao:
      "Zero trust parte da premissa “nunca confie, sempre verifique”: estar dentro da rede não dá confiança; cada acesso a cada recurso é avaliado por identidade (com MFA), estado do dispositivo e contexto, com menor privilégio e microssegmentação, o que impede o movimento lateral do invasor. Reforçar o perímetro mantém a confiança implícita que causou o problema; zero trust não proíbe o trabalho remoto nem a nuvem, que justamente motivaram o modelo; SSO sem MFA concentra o risco; e colocar o servidor de arquivos na DMZ o exporia mais.",
    origem: "banco",
  },
  {
    id: "ti-231",
    materia: "ti",
    topico: "Segurança em redes, dispositivos móveis e nuvem (responsabilidade compartilhada, zero trust)",
    enunciado:
      "A Polícia Civil vai distribuir celulares funcionais aos agentes de investigação e elaborou orientações de segurança. Analise as afirmativas:\n\nI. Fazer root no Android ou jailbreak no iOS remove proteções do sistema e amplia a superfície de ataque, razão pela qual deve ser vedado nos aparelhos funcionais.\nII. Com um antivírus instalado, aplicativos baixados de sites ou recebidos por mensagem, fora da loja oficial, passam a ser tão seguros quanto os da loja.\nIII. Uma solução de gerenciamento de dispositivos móveis (MDM) permite aplicar políticas, separar o perfil funcional do pessoal e apagar remotamente os dados de um aparelho perdido ou furtado.\n\nEstá correto o que se afirma em",
    alternativas: [
      "I, apenas.",
      "II, apenas.",
      "I e III, apenas.",
      "II e III, apenas.",
      "I, II e III.",
    ],
    correta: 2,
    explicacao:
      "Root e jailbreak quebram o isolamento entre aplicativos e as restrições do fabricante, facilitando a instalação de malware com privilégios elevados (I correta). Antivírus não elimina o risco de aplicativos de fontes não oficiais, principal vetor de trojans bancários para celular; a orientação é instalar apenas da loja oficial e revisar permissões (II errada). O MDM aplica políticas centralizadas, separa perfis e permite localizar, bloquear e apagar remotamente o aparelho (III correta).",
    origem: "banco",
  },
  {
    id: "ti-232",
    materia: "ti",
    topico: "Políticas de segurança e resposta a incidentes (PSI, fases do NIST, art. 48 da LGPD)",
    enunciado:
      "Na revisão dos documentos de segurança de uma Polícia Civil, foram identificados:\n\nDocumento 1: aprovado pelo Delegado-Geral, estabelece as diretrizes gerais de proteção da informação na instituição, os papéis e responsabilidades e as sanções pelo descumprimento.\nDocumento 2: determina que as senhas tenham no mínimo 12 caracteres, sejam trocadas após suspeita de comprometimento e não sejam reutilizadas em serviços pessoais.\nDocumento 3: descreve, passo a passo, como o técnico deve restaurar o servidor de boletins a partir da cópia de segurança.\n\nOs documentos 1, 2 e 3 correspondem, respectivamente, a",
    alternativas: [
      "norma, política e procedimento.",
      "procedimento, norma e política.",
      "política, procedimento e norma.",
      "termo de responsabilidade, política e plano de continuidade.",
      "política de segurança da informação, norma e procedimento.",
    ],
    correta: 4,
    explicacao:
      "A Política de Segurança da Informação (PSI) é o documento de alto nível, aprovado pela alta direção, com diretrizes, papéis, responsabilidades e sanções. As normas detalham regras obrigatórias para um tema específico (o que fazer), como a de senhas. Os procedimentos descrevem como executar uma tarefa, passo a passo, como a restauração do backup. As demais alternativas invertem essa hierarquia; termo de responsabilidade é o compromisso assinado pelo usuário, e não a diretriz institucional.",
    origem: "banco",
  },
  {
    id: "ti-233",
    materia: "ti",
    topico: "Políticas de segurança e resposta a incidentes (PSI, fases do NIST, art. 48 da LGPD)",
    enunciado:
      "Às 8h, vários computadores do cartório de uma delegacia exibiram nota de resgate. A equipe de resposta a incidentes confirmou tratar-se de ransomware, identificou as seis estações e o servidor afetados e classificou o incidente como grave. O chefe do setor de informática quer formatar tudo imediatamente para retomar o atendimento.\n\nSegundo o ciclo clássico de resposta a incidentes do NIST (SP 800-61, revisão 2), concluídas a detecção e a análise, a providência seguinte adequada é",
    alternativas: [
      "conter o incidente, isolando da rede as máquinas afetadas para impedir a propagação e preservando evidências, como a nota de resgate, os logs e a memória, antes da erradicação e da recuperação.",
      "restaurar imediatamente o backup sobre as máquinas afetadas, ainda conectadas à rede, para reduzir o tempo de parada.",
      "realizar a reunião de lições aprendidas e encerrar o incidente, já que a causa foi identificada.",
      "formatar todos os computadores da delegacia, inclusive os não afetados, para garantir a erradicação completa.",
      "elaborar a política de segurança da informação, que é a primeira fase do ciclo e ainda não havia sido aprovada.",
    ],
    correta: 0,
    explicacao:
      "O ciclo do NIST tem preparação; detecção e análise; contenção, erradicação e recuperação; e atividade pós-incidente (lições aprendidas). Após confirmar e delimitar o incidente, vem a contenção: isolar o que foi atingido, para impedir a propagação, preservando as evidências. Restaurar sobre máquinas ainda infectadas e conectadas expõe o backup; formatar antes de preservar destrói a prova e, sem conhecer a causa, não garante a erradicação; lições aprendidas vêm ao final; e a política é elaborada na preparação, antes do incidente.",
    origem: "banco",
  },
  {
    id: "ti-234",
    materia: "ti",
    topico: "Políticas de segurança e resposta a incidentes (PSI, fases do NIST, art. 48 da LGPD)",
    enunciado:
      "Uma loja de comércio eletrônico registrou ocorrência na delegacia de crimes cibernéticos: um invasor copiou a base com nome, CPF, endereço e dados de cartão de crédito de 40 mil clientes. A loja trata esses dados para as próprias finalidades e contratou outra empresa apenas para hospedar o sistema.\n\nDe acordo com o art. 48 da Lei 13.709/2018 (LGPD) e com a regulamentação da Agência Nacional de Proteção de Dados (ANPD), é correto afirmar que",
    alternativas: [
      "a comunicação cabe à empresa de hospedagem, na condição de operadora, e deve ser feita somente à ANPD, no prazo de 72 horas.",
      "a comunicação só é devida depois da conclusão do inquérito policial, para não prejudicar a investigação.",
      "qualquer incidente de segurança, ainda que sem risco ou dano relevante aos titulares, deve ser comunicado aos titulares no prazo de 24 horas.",
      "a loja, como controladora, deve comunicar o incidente à ANPD e aos titulares, por poder acarretar risco ou dano relevante; a lei fala em prazo razoável definido pela autoridade, e o regulamento da ANPD fixou 3 dias úteis.",
      "basta comunicar os titulares por e-mail, porque a ANPD só deve ser informada quando houver dados pessoais sensíveis.",
    ],
    correta: 3,
    explicacao:
      "O art. 48 da LGPD impõe ao controlador (quem decide sobre o tratamento, aqui a loja) comunicar à autoridade nacional e ao titular o incidente de segurança que possa acarretar risco ou dano relevante aos titulares, como o vazamento de CPF e dados de cartão. O §1º fala em prazo razoável, conforme definido pela autoridade, e a Resolução CD/ANPD 15/2024 fixou 3 dias úteis. As 72 horas são do regulamento europeu (GDPR); o dever não depende do fim do inquérito, não alcança incidentes sem risco relevante e abrange a ANPD mesmo quando não há dados sensíveis.",
    origem: "banco",
  },
  {
    id: "ti-235",
    materia: "ti",
    topico: "Políticas de segurança e resposta a incidentes (PSI, fases do NIST, art. 48 da LGPD)",
    enunciado:
      "Um hospital sofreu incidente com dados de pacientes e preparou a comunicação à ANPD. Sobre o tema, à luz do art. 48 da LGPD, analise as afirmativas:\n\nI. A comunicação deve mencionar, no mínimo, a natureza dos dados afetados, as informações sobre os titulares envolvidos, as medidas técnicas e de segurança utilizadas, os riscos relacionados ao incidente, os motivos da demora, se a comunicação não for imediata, e as medidas adotadas ou a adotar para reverter ou mitigar os efeitos.\nII. A ANPD verificará a gravidade do incidente e poderá determinar ao controlador providências como a ampla divulgação do fato em meios de comunicação e medidas para reverter ou mitigar os efeitos.\nIII. O fato de os dados afetados estarem cifrados, e portanto ininteligíveis para terceiros, é irrelevante no juízo de gravidade feito pela ANPD.\n\nEstá correto o que se afirma em",
    alternativas: [
      "I, apenas.",
      "I e II, apenas.",
      "II e III, apenas.",
      "I e III, apenas.",
      "I, II e III.",
    ],
    correta: 1,
    explicacao:
      "O item I reproduz o conteúdo mínimo do art. 48, §1º, incisos I a VI, da LGPD, e o item II reproduz o §2º, que autoriza a ANPD a determinar ampla divulgação do fato e medidas de mitigação. O item III contraria o §3º: no juízo de gravidade será avaliada a comprovação de medidas técnicas que tornem os dados ininteligíveis para terceiros não autorizados, como a criptografia. Por isso a cifragem dos dados em repouso, exigência coerente com o dever de segurança do art. 46, reduz a gravidade do vazamento.",
    origem: "banco",
  },
  {
    id: "ti-236",
    materia: "ti",
    topico: "Controle de acesso, autenticação multifator, logs e auditoria",
    enunciado:
      "Uma auditoria nos acessos ao sistema de uma Polícia Civil apontou três falhas:\n\nI. O mesmo servidor cadastra os veículos apreendidos e também homologa a sua liberação aos proprietários.\nII. Um estagiário do cartório recebeu perfil de administrador do sistema “para não precisar pedir ajuda”.\nIII. Um investigador removido há seis meses para outra unidade continua com acesso aos inquéritos da unidade anterior.\n\nOs princípios de controle de acesso desrespeitados em I, II e III são, respectivamente,",
    alternativas: [
      "menor privilégio, segregação de funções e não repúdio.",
      "necessidade de conhecer, autenticação multifator e segregação de funções.",
      "segregação de funções, menor privilégio e revisão periódica com revogação dos acessos de quem mudou de função.",
      "controle obrigatório (MAC), controle discricionário (DAC) e rastreabilidade.",
      "segregação de funções, disponibilidade e autenticidade.",
    ],
    correta: 2,
    explicacao:
      "Segregação de funções impede que uma só pessoa execute etapas incompatíveis de um mesmo processo, como cadastrar e aprovar a liberação, o que facilita fraudes (I). Menor privilégio significa conceder apenas as permissões necessárias à tarefa, o que um perfil de administrador para estagiário desrespeita (II). A revisão periódica dos acessos, com revogação imediata quando o servidor muda de função ou de lotação, foi descumprida em III, também em ofensa à necessidade de conhecer. As demais alternativas trocam os princípios ou citam atributos (disponibilidade, autenticidade, não repúdio) que não descrevem as falhas.",
    origem: "banco",
  },
  {
    id: "ti-237",
    materia: "ti",
    topico: "Criptografia, hash e certificado digital ICP-Brasil (A1 e A3)",
    enunciado:
      "Ao acessar o sistema de processo eletrônico do tribunal, um escrivão observou o cadeado e o prefixo https na barra de endereços do navegador e perguntou ao colega da TI o que isso garante.\n\nA explicação correta sobre o funcionamento do HTTPS (protocolo TLS) é:",
    alternativas: [
      "a conexão usa criptografia assimétrica e o certificado digital do servidor para autenticá-lo e combinar uma chave de sessão simétrica, que cifra os dados trafegados; o cadeado indica canal cifrado, e não que o site seja honesto.",
      "o cadeado garante que o site é legítimo e livre de fraude, pois só órgãos públicos e bancos podem obter certificados digitais.",
      "a conexão usa somente criptografia simétrica, com uma chave fixa publicada pelo servidor, porque a criptografia assimétrica é lenta demais para a internet.",
      "o HTTPS cifra os arquivos armazenados no servidor do tribunal, protegendo-os mesmo depois de terem sido baixados no computador do usuário.",
      "o HTTPS dispensa certificado digital, pois a autenticação do servidor é feita pelo endereço IP exibido no cadeado.",
    ],
    correta: 0,
    explicacao:
      "O TLS é um esquema híbrido: na negociação, usa criptografia assimétrica e o certificado do servidor (emitido por autoridade certificadora) para autenticá-lo e estabelecer uma chave de sessão simétrica, que, por ser rápida, cifra o tráfego. O cadeado mostra que o canal está cifrado e que o certificado é válido para aquele domínio, mas sites fraudulentos também obtêm certificados, por isso ele não prova honestidade. O HTTPS protege os dados em trânsito, não os arquivos armazenados, e depende de certificado digital.",
    origem: "banco",
  },
  {
    id: "ti-238",
    materia: "ti",
    topico: "Controle de acesso, autenticação multifator, logs e auditoria",
    enunciado:
      "Depois que um invasor com privilégios de administrador apagou os registros de eventos de um servidor para esconder a exclusão de documentos de um inquérito, a Polícia Civil revisou sua política de logs. Analise as afirmativas:\n\nI. Uma solução de SIEM centraliza e correlaciona os logs de diversas fontes (servidores, firewall, sistemas), permitindo detectar padrões de ataque que não aparecem em um registro isolado.\nII. Enviar os logs, em tempo real, para um servidor central protegido, com armazenamento que impeça alteração ou exclusão, dificulta que o invasor apague os vestígios no equipamento atacado.\nIII. Para preservar a privacidade, a auditoria dos logs deve ser feita exclusivamente pelo próprio usuário cujas ações foram registradas.\n\nEstá correto o que se afirma em",
    alternativas: [
      "I, apenas.",
      "II, apenas.",
      "II e III, apenas.",
      "I e II, apenas.",
      "I, II e III.",
    ],
    correta: 3,
    explicacao:
      "O SIEM (gerenciamento de informações e eventos de segurança) coleta, centraliza e correlaciona registros de várias fontes, revelando ataques que um log isolado não mostra (I correta). Logs que ficam só no equipamento atacado podem ser apagados por quem obtém privilégio de administrador; a remessa imediata a repositório central, em mídia que não permita sobrescrita, preserva a trilha e a rastreabilidade (II correta). Auditoria é exame independente dos registros: deixá-la a cargo do próprio auditado anula sua finalidade (III errada).",
    origem: "banco",
  },
  {
    id: "ti-239",
    materia: "ti",
    topico: "Engenharia social e variantes de phishing (spear phishing, whaling, smishing, vishing, pharming)",
    enunciado:
      "Vários servidores receberam e-mail cujo remetente aparecia como “corregedoria” do domínio oficial da Polícia Civil, pedindo que preenchessem um formulário com login e senha. A análise do cabeçalho mostrou que a mensagem partira de um servidor de e-mail estranho à instituição, que apenas falsificou o endereço do remetente.\n\nA técnica de falsificação do remetente e o conjunto de controles que permite ao servidor de destino verificar se o emissor está autorizado a enviar e-mails em nome daquele domínio são, respectivamente,",
    alternativas: [
      "pharming, e o uso de VPN pelos servidores.",
      "spoofing de e-mail, e os mecanismos SPF, DKIM e DMARC.",
      "typosquatting, e a criptografia simétrica das caixas postais.",
      "spoofing de e-mail, e o backup diário das caixas postais.",
      "rootkit, e o sistema de prevenção de intrusão (IPS).",
    ],
    correta: 1,
    explicacao:
      "Spoofing é a falsificação da origem da comunicação, aqui o endereço do remetente, e costuma servir ao phishing. SPF indica quais servidores podem enviar e-mails pelo domínio, DKIM assina digitalmente a mensagem pelo domínio de origem e DMARC define o que fazer com mensagens que falham nessas verificações. VPN, backup e criptografia das caixas não verificam a autenticidade do remetente; pharming adultera a resolução de nomes; typosquatting registra domínio parecido, mas aqui o domínio exibido era o oficial; rootkit é malware que oculta o invasor.",
    origem: "banco",
  },
  {
    id: "ti-240",
    materia: "ti",
    topico: "Pilares da segurança da informação e gestão de riscos (vulnerabilidade, ameaça, risco)",
    enunciado:
      "O comitê de segurança da informação de uma Polícia Civil tomou quatro decisões sobre riscos identificados:\n\nI. Contratar seguro contra incidentes cibernéticos para cobrir custos de recuperação.\nII. Desativar o antigo portal de consulta de antecedentes pela internet, que não pode mais ser corrigido, deixando de oferecer o serviço.\nIII. Implantar autenticação multifator e atualização automática nos sistemas internos.\nIV. Manter em uso uma impressora antiga sem conexão externa, registrando formalmente que o risco residual é baixo e foi assumido.\n\nAs decisões I, II, III e IV correspondem, respectivamente, às estratégias de tratamento de risco de",
    alternativas: [
      "mitigar, evitar, transferir e aceitar.",
      "aceitar, mitigar, evitar e transferir.",
      "transferir, mitigar, evitar e aceitar.",
      "evitar, transferir, aceitar e mitigar.",
      "transferir, evitar, mitigar e aceitar.",
    ],
    correta: 4,
    explicacao:
      "Transferir é repassar a terceiro as consequências financeiras do risco, como no seguro (I). Evitar é eliminar a atividade que gera o risco, desativando o portal sem correção (II). Mitigar é reduzir a probabilidade ou o impacto com controles, como MFA e atualização (III). Aceitar é assumir de forma consciente e documentada o risco residual (IV). As demais alternativas embaralham essas quatro estratégias clássicas da gestão de riscos (nas normas ISO, transferir aparece também como compartilhar, e aceitar, como reter o risco).",
    origem: "banco",
  },
];
