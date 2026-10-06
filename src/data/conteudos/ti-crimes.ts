import type { ConteudoTopico } from "../../lib/types";

/** TI — crimes cibernéticos, investigação digital e legislação/ética digital (itens 1.5 e 1.6 do Anexo I). */
export const CONTEUDO_TI_CRIMES: ConteudoTopico[] = [
  {
    materia: "ti",
    topico: "Furto e estelionato por fraude eletrônica (arts. 155, §§4º-B e 4º-C, e 171, §§2º-A e 2º-B, do CP, com as penas da Lei 15.397/2026)",
    texto: `A pergunta-chave é QUEM entrega o valor. No FURTO MEDIANTE FRAUDE a fraude serve para burlar a vigilância e o agente SUBTRAI sem a vítima perceber (cartão clonado, senha capturada por programa malicioso, transferência feita pelo próprio criminoso em app invadido). No ESTELIONATO a vítima, enganada, ENTREGA voluntariamente (faz o Pix ao falso parente, paga o boleto falso, informa o código que libera a conta).

Furto mediante fraude eletrônica (art. 155, §4º-B, do CP): cometido por dispositivo eletrônico ou informático, conectado ou não à rede, com ou sem violação de mecanismo de segurança ou uso de programa malicioso, ou por qualquer meio fraudulento análogo. Pena: reclusão de 4 a 10 anos e multa (Lei 15.397/2026; a Lei 14.155/2021 o criou com 4 a 8). Majorantes do §4º-C, "considerada a relevância do resultado gravoso": I – servidor mantido fora do território nacional, +1/3 a 2/3; II – vítima idosa ou vulnerável, +1/3 ao dobro.

Estelionato (art. 171): caput de 1 a 5 anos (mantido). Fraude eletrônica (§2º-A): 4 a 8 anos, quando a fraude usa informações fornecidas pela vítima ou por terceiro induzido a erro por redes sociais, contatos telefônicos, correio eletrônico fraudulento, duplicação de dispositivo eletrônico ou aplicação de internet, ou meio análogo. §2º-B: servidor fora do país, +1/3 a 2/3. §4º: idoso ou vulnerável, +1/3 ao dobro. Novo §2º, VII (Lei 15.397/2026): cede, gratuita ou onerosamente, conta bancária para que nela transitem recursos de atividade criminosa (a "conta laranja"), com as penas do caput. Fraude com ativos virtuais tem tipo próprio: art. 171-A (Lei 14.478/2022), 4 a 8 anos.

AÇÃO PENAL: a Lei 15.397/2026 (vigência em 04/05/2026) REVOGOU o §5º do art. 171, que exigia representação. Hoje o estelionato é de ação penal pública incondicionada, em qualquer modalidade. O furto sempre foi de ação pública incondicionada.

COMPETÊNCIA (art. 70, §4º, do CPP, incluído pela Lei 14.155/2021): no ESTELIONATO praticado mediante depósito, cheque sem fundos ou com pagamento frustrado, ou transferência de valores, a competência é do DOMICÍLIO DA VÍTIMA; com várias vítimas, firma-se pela prevenção. O dispositivo fala só do art. 171: não o estenda automaticamente ao furto.

Outras mudanças da Lei 15.397/2026: furto simples, 1 a 6 anos; furto qualificado do §4º, 2 a 8; furto de celular, computador, tablet ou dispositivo semelhante (§6º, II), 4 a 10; roubo simples, 6 a 10; roubo de celular ou dispositivo eletrônico é majorante (art. 157, §2º, IX: +1/3 até metade); latrocínio, 24 a 30; receptação, 2 a 6.

Pegadinhas FGV: trocar furto por estelionato no golpe do Pix; manter a pena antiga de 4 a 8 para o §4º-B; dizer que o estelionato ainda depende de representação; aplicar o domicílio da vítima ao furto; esquecer que a majorante do idoso vai até o dobro, e a do servidor estrangeiro só até 2/3.`,
    exemplos: [
      "Golpista se passa pelo filho da vítima no WhatsApp, com foto copiada do perfil, e ela mesma faz um Pix de R$ 5.000: estelionato por fraude eletrônica (art. 171, §2º-A, 4 a 8 anos), ação pública incondicionada, competência do domicílio da vítima.",
      "Criminoso instala aplicativo malicioso no celular de uma aposentada de 70 anos e, de longe, transfere o saldo da conta dela: furto mediante fraude eletrônica (art. 155, §4º-B, 4 a 10 anos) com a majorante do §4º-C, II (+1/3 ao dobro).",
    ],
    curiosidade:
      "A Lei 15.397/2026 tornou o furto mediante fraude eletrônica (4 a 10 anos) mais grave que o estelionato por fraude eletrônica (4 a 8 anos): a FGV adora cobrar essa diferença de penas.",
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "Invasão de dispositivo informático (arts. 154-A e 154-B do CP) e Lei 12.737/2012",
    texto: `A Lei 12.737/2012 ("Lei Carolina Dieckmann", em vigor 120 dias após a publicação) incluiu os arts. 154-A e 154-B no CP, deu nova redação ao art. 266 (interrupção de serviço telemático e de informação de utilidade pública) e equiparou o cartão de crédito ou débito a documento particular (art. 298, parágrafo único). A Lei 14.155/2021 reescreveu o caput e endureceu as penas.

Art. 154-A (redação atual): "Invadir dispositivo informático de uso alheio, conectado ou não à rede de computadores, com o fim de obter, adulterar ou destruir dados ou informações sem autorização expressa ou tácita do usuário do dispositivo ou de instalar vulnerabilidades para obter vantagem ilícita". Pena: reclusão de 1 a 4 anos e multa (antes de 2021 era detenção de 3 meses a 1 ano).

Pontos que caem:
• Não se exige mais a "violação indevida de mecanismo de segurança" (requisito suprimido em 2021): invadir celular sem senha também é crime.
• "De uso alheio": o que importa é quem usa o aparelho, não quem é o dono.
• Crime formal, com dolo específico: consuma-se com a invasão feita com a finalidade de obter, adulterar ou destruir dados ou de instalar vulnerabilidades, mesmo que nada seja copiado. Não há modalidade culposa.
• §1º: mesma pena para quem produz, oferece, distribui, vende ou difunde dispositivo ou programa destinado à invasão (venda de spyware ou de kit de invasão).
• §2º: +1/3 a 2/3 se da invasão resulta prejuízo econômico.
• §3º (qualificadora): se resulta obtenção de conteúdo de comunicações eletrônicas privadas, segredos comerciais ou industriais, informações sigilosas definidas em lei, ou controle remoto não autorizado do dispositivo: reclusão de 2 a 5 anos e multa.
• §4º: no caso do §3º, +1/3 a 2/3 se houver divulgação, comercialização ou transmissão a terceiro dos dados obtidos.
• §5º: +1/3 à metade contra Presidente da República, governadores, prefeitos, Presidente do STF, presidentes da Câmara, do Senado, de Assembleia Legislativa, da Câmara Legislativa do DF ou de Câmara Municipal, ou dirigente máximo da administração direta e indireta.

Ação penal (art. 154-B): pública CONDICIONADA À REPRESENTAÇÃO, salvo se o crime for contra a administração pública direta ou indireta de qualquer dos Poderes ou contra concessionárias de serviços públicos, caso em que é incondicionada.

Consequências processuais: com pena máxima de 4 anos, o caput deixou de ser infração de menor potencial ofensivo; admite suspensão condicional do processo (pena mínima de 1 ano) e, em tese, acordo de não persecução penal. Se o invasor usa os dados para subtrair dinheiro, responde também, ou em absorção conforme o caso, por furto mediante fraude eletrônica (art. 155, §4º-B).

No plano internacional, a Convenção de Budapeste (promulgada pelo Decreto 11.491/2023) prevê o acesso ilegal (art. 2) e o uso indevido de dispositivos (art. 6), correspondentes ao caput e ao §1º do art. 154-A.`,
    exemplos: [
      "Ex-namorado que conhece a senha do celular da vítima entra no aparelho escondido para copiar conversas íntimas: art. 154-A na forma qualificada do §3º (conteúdo de comunicações privadas), com a majorante do §4º se repassar o material; ação mediante representação.",
      "Hacker invade o sistema da Prefeitura de Curitiba e instala um backdoor: art. 154-A, com a majorante do §5º se o alvo for o próprio prefeito; a ação é pública incondicionada, porque a vítima é a administração pública (art. 154-B).",
    ],
    curiosidade:
      "O apelido vem do vazamento de fotos íntimas da atriz Carolina Dieckmann em 2012, obtidas a partir do acesso ao computador dela; o projeto, apresentado em 2011, ganhou velocidade e foi aprovado depois do caso.",
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "Crimes em redes sociais e na internet (honra online, perseguição, violência psicológica com IA, arts. 216-B e 218-C, ECA e art. 266)",
    texto: `Na maioria dos casos a internet é MEIO e causa de AUMENTO DE PENA.

HONRA (calúnia, difamação, injúria): art. 141, III – +1/3 se cometido na presença de várias pessoas ou por meio que facilite a divulgação; art. 141, §2º – pena em TRIPLO se o crime é cometido ou divulgado em quaisquer modalidades das redes sociais da rede mundial de computadores.

PERSEGUIÇÃO / cyberstalking (art. 147-A): perseguir alguém, reiteradamente e por qualquer meio, ameaçando sua integridade física ou psicológica, restringindo sua locomoção ou invadindo sua privacidade. Reclusão de 6 meses a 2 anos e multa; +metade contra criança, adolescente ou idoso, contra mulher por razões da condição de sexo feminino, ou em concurso de 2 ou mais pessoas ou com arma. Ação mediante REPRESENTAÇÃO (§3º).

VIOLÊNCIA PSICOLÓGICA CONTRA A MULHER (art. 147-B): reclusão de 6 meses a 2 anos e multa, se não for crime mais grave. Parágrafo único (Lei 15.123/2025): pena aumentada de METADE se cometida mediante inteligência artificial ou qualquer recurso tecnológico que altere imagem ou som da vítima (deepfake).

INTIMIDADE SEXUAL: art. 216-B – registrar, sem autorização dos participantes, cena de nudez ou ato sexual de caráter íntimo: detenção de 6 meses a 1 ano e multa; o parágrafo único pune a MONTAGEM que inclui a pessoa em cena de nudez ou sexo (deepnude). Art. 218-C – oferecer, trocar, transmitir, vender, publicar ou divulgar cena de estupro ou de estupro de vulnerável, apologia a ele, ou, sem consentimento da vítima, cena de sexo, nudez ou pornografia: reclusão de 4 a 10 anos (redação da Lei 15.280/2025), +1/3 a 2/3 se o agente mantém ou manteve relação íntima de afeto com a vítima ou age por vingança ou humilhação ("pornografia de vingança"). Não há crime em publicação jornalística, científica, cultural ou acadêmica que não identifique a vítima (§2º).

ECA, arts. 240 a 241-E: 240 produzir ou registrar cena de sexo explícito ou pornográfica com criança ou adolescente; 241 vender; 241-A oferecer, trocar, transmitir, publicar ou divulgar, inclusive pela internet; 241-B adquirir, possuir ou ARMAZENAR; 241-C simular participação por montagem; 241-D aliciar, assediar ou constranger criança, por qualquer meio de comunicação, para praticar ato libidinoso (grooming).

OUTROS: intimidação sistemática virtual / cyberbullying (art. 146-A, parágrafo único, Lei 14.811/2024): reclusão de 2 a 4 anos; induzimento ao suicídio ou à automutilação pela rede (art. 122, §4º): pena aumentada até o dobro, e aumentada de metade se o agente é líder, coordenador ou administrador de grupo, comunidade ou rede virtual (§5º); racismo em rede social (Lei 7.716/1989, art. 20, §2º): reclusão de 2 a 5 anos; interromper serviço telemático ou de informação de utilidade pública (art. 266, §1º): reclusão de 2 a 4 anos e multa (Lei 15.397/2026), em dobro em calamidade pública ou com dano a equipamento de telecomunicações.

Pegadinhas: aumento da honra em rede social é o TRIPLO (não o dobro); perseguição exige reiteração e depende de representação; o aumento do art. 147-B por IA é de metade.`,
    exemplos: [
      "Homem cria vídeo falso com IA em que a ex-companheira aparece confessando traições e o envia a ela para controlá-la: violência psicológica (art. 147-B) com aumento de metade do parágrafo único; se publicar montagem de nudez, soma o art. 216-B, parágrafo único.",
      "Usuário publica no Instagram que o vizinho, servidor público, desvia verbas, sabendo ser falso: calúnia com +1/3 (art. 141, II, se em razão das funções) e pena em triplo pelo §2º, por ter sido praticada em rede social.",
    ],
    curiosidade:
      "O triplo do art. 141, §2º, nasceu de veto derrubado: o dispositivo veio no Pacote Anticrime (Lei 13.964/2019), foi vetado e o Congresso restaurou o texto em 2021.",
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "Evidência digital: coleta, preservação, hash, imagem forense e cadeia de custódia (arts. 158-A a 158-F do CPP)",
    texto: `Evidência digital é frágil e volátil. Regra de ouro: preservar o original e trabalhar na CÓPIA, documentando cada passo.

CADEIA DE CUSTÓDIA (CPP, art. 158-A, Pacote Anticrime): conjunto de procedimentos para manter e documentar a história cronológica do vestígio, rastreando posse e manuseio do RECONHECIMENTO ao DESCARTE. Começa com a preservação do local ou com o procedimento policial ou pericial em que se detecta o vestígio (§1º). O agente público que reconhece o elemento como de interesse pericial fica responsável por sua preservação (§2º). Vestígio é todo objeto ou material bruto, visível ou LATENTE (§3º) – dado digital é vestígio latente.

As 10 etapas do art. 158-B, na ordem: reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte. Decore as definições: reconhecimento = distinguir o elemento de potencial interesse; isolamento = evitar alteração do estado das coisas; fixação = descrição detalhada do vestígio como encontrado (fotos, filmagens, croqui); processamento = o exame pericial em si, formalizado em laudo; descarte = liberação, quando pertinente com autorização judicial. Coleta preferencialmente por perito oficial (art. 158-C); é proibido entrar no local isolado ou remover vestígios antes da liberação pelo perito, sob pena de fraude processual (§2º). Recipientes lacrados com numeração individualizada, só abertos pelo perito (art. 158-D). Central de custódia em cada instituto de criminalística (art. 158-E).

TÉCNICA:
• HASH (MD5, SHA-1, SHA-256): resumo de tamanho fixo; qualquer bit alterado muda o resultado. Calcula-se na aquisição e se recalcula depois; valores iguais provam integridade.
• IMAGEM FORENSE: cópia bit a bit de toda a mídia, incluindo espaço não alocado e slack (onde moram arquivos apagados). Copiar e colar arquivos não é espelho.
• BLOQUEADOR DE ESCRITA (write blocker), físico ou lógico: impede que o computador do perito grave qualquer coisa no disco original.
• ORDEM DE VOLATILIDADE (RFC 3227): do mais volátil ao menos – registradores e cache; memória RAM, tabelas de rede e processos; arquivos temporários; disco; logs remotos; mídias de arquivo. Computador ligado: avaliar coleta da RAM (live forensics) antes de desligar, pois ela guarda chaves de criptografia, senhas e conexões ativas.
• CELULAR apreendido: isolar da rede (modo avião ou bolsa de Faraday) para impedir apagamento remoto, registrar estado da tela e bateria e não "navegar" no aparelho.
• Print solto é frágil: prefira extração forense, coleta com hash, URL e data/hora, ou ata notarial.

Jurisprudência do STJ que a FGV usa: acessar mensagens de celular apreendido sem autorização judicial torna a prova ilícita; o espelhamento do WhatsApp Web pela polícia, sem previsão legal, é inválido; e a quebra da cadeia de custódia não gera nulidade automática – o juiz avalia a confiabilidade da prova, mas prova digital sem documentação mínima de integridade tende a ser descartada.`,
    exemplos: [
      "Ao cumprir mandado, o agente encontra o notebook do investigado ligado e desbloqueado: aciona o perito para coletar a memória RAM antes de desligar e registra tudo em fotos; depois o disco é espelhado com bloqueador de escrita e hash SHA-256 anotado no auto.",
      "Investigador liga o celular apreendido e abre o WhatsApp na delegacia, sem ordem judicial, para ler conversas: além de alterar metadados (violando o isolamento), torna a prova ilícita segundo o STJ.",
    ],
    curiosidade:
      "Por causa das colisões já demonstradas no MD5 e no SHA-1, laboratórios forenses costumam registrar mais de um hash (por exemplo, MD5 e SHA-256) para a mesma imagem.",
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "Rastreamento e recuperação de informações (IP, porta lógica, registros de conexão e de aplicação, dados cadastrais, arquivos apagados)",
    texto: `Rastrear um autor na internet é seguir o caminho: CONTEÚDO → PROVEDOR DE APLICAÇÃO → IP + PORTA + DATA/HORA → PROVEDOR DE CONEXÃO → ASSINANTE.

Conceitos do Marco Civil (art. 5º): endereço IP é o código atribuído a um terminal; REGISTRO DE CONEXÃO = data e hora de início e término da conexão, duração e IP utilizado; REGISTRO DE ACESSO A APLICAÇÕES = data e hora de uso de determinada aplicação a partir de determinado IP.

Quem guarda o quê:
• Provedor de CONEXÃO (operadora): guarda os registros de conexão por 1 ANO, sob sigilo (art. 13). É PROIBIDO de guardar registros de acesso a aplicações (art. 14).
• Provedor de APLICAÇÃO constituído como pessoa jurídica, com atividade organizada, profissional e com fins econômicos (rede social, e-mail, marketplace): guarda os registros de acesso por 6 MESES (art. 15).
• Autoridade policial, administrativa ou o MP pode requerer CAUTELARMENTE, sem ordem judicial, que os registros sejam guardados por prazo SUPERIOR; tem 60 DIAS a partir do requerimento para pedir a autorização judicial de acesso (art. 13, §§2º e 3º; art. 15, §2º). O requerimento é sigiloso e perde eficácia se o pedido não for protocolado no prazo ou for indeferido.
• O FORNECIMENTO dos registros exige ORDEM JUDICIAL (arts. 10, §1º, 13, §5º, e 15, §3º). O requerimento ao juiz deve trazer: fundados indícios do ilícito, justificativa motivada da utilidade dos registros e período a que se referem (art. 22).
• DADOS CADASTRAIS (qualificação pessoal, filiação e endereço) podem ser requisitados diretamente pela autoridade com competência legal (art. 10, §3º); o delegado tem esse poder, por exemplo, no art. 15 da Lei 12.850/2013 (organização criminosa).
• CONTEÚDO das comunicações privadas: só com ordem judicial (art. 10, §2º); o fluxo em tempo real é interceptação telemática (Lei 9.296/1996, art. 1º, parágrafo único), com prazo de 15 dias renovável.

PORTA LÓGICA: com o CGNAT, centenas de clientes saem pelo mesmo IP público; sem a porta de origem e o horário exato (com fuso, de preferência UTC), a operadora não identifica o assinante. O STJ já reconheceu o dever dos provedores de fornecer a porta lógica de origem junto com o IP.

Convenção de Budapeste (Decreto 11.491/2023): preservação expedita de dados armazenados por até 90 dias (art. 16) e rede de contato 24/7 para cooperação internacional (art. 35).

RECUPERAÇÃO DE INFORMAÇÕES: apagar um arquivo, em regra, só marca o espaço como livre (exclusão lógica); até ser sobrescrito, ele pode ser recuperado pela tabela do sistema de arquivos ou por "file carving" (busca por assinaturas de cabeçalho). Em SSD, o comando TRIM e a coleta de lixo apagam blocos rapidamente e dificultam a recuperação. Outras fontes: lixeira, arquivos temporários, slack space, backups em nuvem, metadados EXIF (data, aparelho e coordenadas GPS de fotos), histórico do navegador e logs do sistema.`,
    exemplos: [
      "Perfil falso extorque vítima no Instagram: o delegado requer cautelarmente a preservação dos registros, representa ao juiz pelo IP, porta lógica e horário dos acessos (Meta) e, com eles, pede à operadora os dados do assinante daquela conexão.",
      "Investigado formata o pendrive antes da busca: a imagem forense e o file carving recuperam planilhas de contabilidade do tráfico, porque a formatação rápida não sobrescreveu os dados.",
    ],
    curiosidade:
      "IP não identifica pessoa, identifica a conexão: em Wi-Fi aberto ou rede compartilhada, o assinante pode não ser o autor, e a investigação precisa de outros elementos para fechar a autoria.",
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "Inteligência cibernética, deep web e dark web e infiltração virtual de agentes (Lei 12.850, arts. 10-A a 10-D; ECA, art. 190-A)",
    texto: `INTELIGÊNCIA x INVESTIGAÇÃO: inteligência produz CONHECIMENTO para assessorar decisões (antecipar ameaças, mapear facções, orientar operações); investigação produz PROVA de autoria e materialidade para o processo. A inteligência cibernética aplica o ciclo de inteligência (planejamento e direção, coleta, processamento/análise e difusão) ao ciberespaço: monitora fóruns e mercados ilícitos, identifica indicadores de comprometimento (IoC: IPs, domínios, hashes de malware), mapeia infraestrutura de golpes e perfis ligados a facções. Fontes: OSINT (fontes abertas), HUMINT (humanas), SIGINT (sinais), além de bases institucionais. O que é sigiloso por natureza (conteúdo de conversas, registros guardados por provedores) não se obtém por "inteligência": exige ordem judicial.

CAMADAS DA WEB: surface web = indexada por buscadores; deep web = tudo que não é indexado (webmail, intranets, bancos de dados, áreas com login) – a maior parte da internet e em geral lícita; dark web = redes sobrepostas que exigem software específico, como o Tor (roteamento em camadas, endereços .onion), usadas para anonimato e onde ficam mercados ilícitos. Pegadinha: deep web NÃO é sinônimo de dark web. Criptomoedas são pseudônimas, não anônimas: as transações ficam públicas no blockchain e podem ser rastreadas até corretoras que identificam clientes.

INFILTRAÇÃO VIRTUAL – Lei 12.850/2013 (incluída pelo Pacote Anticrime):
• Art. 10-A: agentes de POLÍCIA infiltrados na internet para investigar crimes da lei e conexos, praticados por organização criminosa, demonstrada a necessidade e indicados o alcance das tarefas, os nomes ou apelidos dos investigados e, quando possível, os dados de conexão ou cadastrais.
• Exige autorização judicial; se houver representação do delegado, o juiz ouve o MP antes (§2º); só se as provas não puderem ser produzidas por outros meios (§3º, subsidiariedade).
• Prazo de até 6 MESES, renovável, desde que o total não exceda 720 DIAS (§4º); ao fim, relatório circunstanciado e todos os atos eletrônicos são apresentados ao juiz (§5º).
• Art. 10-B: informações vão direto ao juiz, que zela pelo sigilo. Art. 10-C: não comete crime o policial que oculta sua identidade para colher indícios; responde pelos excessos. Art. 10-D: atos eletrônicos registrados, gravados, armazenados e reunidos em autos apartados, preservando a identidade do agente.
• O §1º define dados de conexão (hora, data, início, término, duração, IP e terminal de origem) e dados cadastrais (nome e endereço do assinante a quem o IP foi atribuído).

INFILTRAÇÃO NO ECA (art. 190-A, Lei 13.441/2017): para os crimes dos arts. 240, 241, 241-A a 241-D do ECA e 154-A, 217-A, 218, 218-A e 218-B do CP; ordem judicial após requerimento do MP ou representação do delegado; prazo de até 90 DIAS, renovável, total máximo de 720 DIAS.

Não confunda: agente infiltrado (autorizado, colhe provas de crime já em curso) x agente provocador (induz o crime; flagrante preparado, crime impossível – Súmula 145 do STF).`,
    exemplos: [
      "Para identificar administradores de um grupo fechado que vende imagens de abuso infantil, o delegado representa pela infiltração virtual do ECA (art. 190-A): o juiz autoriza por 90 dias, renováveis até 720, e o agente usa perfil fictício sem cometer crime (art. 190-C).",
      "Equipe de inteligência monitora, em fóruns abertos e canais públicos, anúncios de venda de dados de servidores públicos e difunde relatório ao delegado; para obter as mensagens privadas dos vendedores, porém, será preciso ordem judicial.",
    ],
    curiosidade:
      "Os prazos se cruzam em prova: infiltração virtual da Lei 12.850 = até 6 meses por vez; do ECA = até 90 dias por vez; nas duas, o teto total é de 720 dias.",
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "Marco Civil da Internet detalhado (princípios, neutralidade, guarda de registros e arts. 19 e 21 após o STF, Temas 533 e 987)",
    texto: `A Lei 12.965/2014 (vacatio de 60 dias) fixa princípios, direitos e deveres do uso da internet no Brasil.

FUNDAMENTO (art. 2º): o RESPEITO À LIBERDADE DE EXPRESSÃO. PRINCÍPIOS (art. 3º): liberdade de expressão; proteção da privacidade; proteção dos dados pessoais, na forma da lei; preservação e garantia da NEUTRALIDADE de rede; estabilidade e segurança; responsabilização dos agentes conforme suas atividades; natureza participativa; liberdade dos modelos de negócio.

DIREITOS DO USUÁRIO (art. 7º): inviolabilidade da intimidade e da vida privada; inviolabilidade e sigilo do FLUXO das comunicações e das comunicações ARMAZENADAS, salvo ordem judicial; não suspensão da conexão, salvo por débito; não fornecimento de dados pessoais a terceiros, salvo consentimento livre, expresso e informado. São nulas as cláusulas que violem o sigilo ou que não ofereçam foro brasileiro (art. 8º).

NEUTRALIDADE (art. 9º): tratar de forma isonômica os pacotes de dados, sem distinção por conteúdo, origem, destino, serviço, terminal ou aplicação; a discriminação só decorre de requisitos técnicos indispensáveis ou da priorização de serviços de emergência (Decreto 8.771/2016).

ALCANCE (art. 11): aplica-se a lei brasileira se ao menos um ato de coleta, armazenamento, guarda ou tratamento ocorrer no Brasil, mesmo por empresa estrangeira que atenda o público brasileiro. Sanções (art. 12): advertência, multa de até 10% do faturamento do grupo no Brasil, suspensão e proibição das atividades.

GUARDA: conexão por 1 ano (art. 13); aplicações por 6 meses (art. 15); fornecimento só com ordem judicial.

RESPONSABILIDADE POR CONTEÚDO DE TERCEIROS: o provedor de CONEXÃO não responde (art. 18). Pelo texto, o provedor de APLICAÇÃO só respondia se descumprisse ORDEM JUDICIAL específica (art. 19), com exceção da nudez ou sexo íntimo divulgados sem autorização, em que basta a NOTIFICAÇÃO do participante (art. 21, responsabilidade subsidiária).

STF, 26/06/2025 (Temas 987 e 533): o art. 19 é PARCIALMENTE INCONSTITUCIONAL. Até lei nova: (1) vale, como regra, o modelo do art. 21 – o provedor responde se, notificado extrajudicialmente, não remover conteúdo que configure crime ou ato ilícito; (2) para CRIMES CONTRA A HONRA continua o art. 19 (ordem judicial), sem prejuízo da remoção por notificação; (3) conteúdo ofensivo já reconhecido por decisão judicial e REPLICADO deve ser removido mediante simples notificação; (4) há PRESUNÇÃO de responsabilidade, independentemente de notificação, em ANÚNCIOS e IMPULSIONAMENTOS PAGOS e em redes artificiais de distribuição (robôs); (5) dever de cuidado: responde por FALHA SISTÊMICA quem não previne ou remove conteúdos graves (atos antidemocráticos, terrorismo, induzimento ao suicídio ou automutilação, discriminação, crimes contra a mulher, crimes sexuais contra vulneráveis e pornografia infantil, tráfico de pessoas); (6) e-mail, reuniões fechadas e mensageria privada seguem o art. 19 nas comunicações interpessoais. Efeitos apenas prospectivos.`,
    exemplos: [
      "Página no Facebook impulsiona, com anúncio pago, falso perfil de loja que aplica golpes: pela tese do STF, há presunção de responsabilidade da plataforma pelo anúncio pago, mesmo sem notificação prévia.",
      "Policial difamado em vídeo no YouTube: por ser crime contra a honra, a responsabilização civil da plataforma continua dependendo de ordem judicial (art. 19), embora ele possa notificar a plataforma pedindo a remoção.",
    ],
    curiosidade:
      "No texto original de 2014, o art. 21 era o único caso em que bastava a notificação do participante, sem ordem judicial; em 2025 o STF transformou esse modelo na regra geral para conteúdos criminosos e ilícitos.",
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "LGPD detalhada (princípios, bases legais, dados sensíveis, direitos do titular, agentes de tratamento, ANPD e sanções)",
    texto: `A Lei 13.709/2018 protege dados pessoais de PESSOA NATURAL (não de pessoa jurídica), em meio físico ou digital, por agentes públicos ou privados.

NÃO SE APLICA (art. 4º): uso particular não econômico por pessoa natural; fins jornalísticos, artísticos ou acadêmicos; fins EXCLUSIVOS de segurança pública, defesa nacional, segurança do Estado ou investigação e repressão de infrações penais (inciso III), regidos por lei específica com medidas proporcionais e estritamente necessárias (§1º). É vedado o tratamento do inciso III por pessoa de direito privado, salvo sob tutela de pessoa jurídica de direito público (§2º), e em nenhum caso a TOTALIDADE do banco pode ser tratada por privado, salvo se tiver capital integralmente público (§4º).

DEFINIÇÕES (art. 5º): dado pessoal = informação de pessoa natural identificável; dado SENSÍVEL = origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou organização religiosa, filosófica ou política, saúde, vida sexual, dado genético ou BIOMÉTRICO; dado anonimizado = não permite identificar o titular por meios razoáveis (não é dado pessoal, art. 12). CONTROLADOR decide sobre o tratamento; OPERADOR trata em nome do controlador; ENCARREGADO é indicado pelo controlador e pelo operador como canal com titulares e ANPD (redação da Lei 15.352/2026).

PRINCÍPIOS (art. 6º, além da boa-fé): finalidade, adequação, necessidade (mínimo necessário), livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação e responsabilização e prestação de contas.

BASES LEGAIS (art. 7º, dez hipóteses): consentimento; obrigação legal ou regulatória; execução de políticas públicas pela administração; pesquisa; contrato; exercício regular de direitos em processo; proteção da vida; tutela da saúde; LEGÍTIMO INTERESSE; proteção do crédito. Consentimento é manifestação livre, informada e inequívoca, para finalidade determinada e revogável, com ônus da prova do controlador. Para dados SENSÍVEIS (art. 11) não há legítimo interesse nem proteção do crédito, mas há a de prevenção à fraude em identificação e autenticação.

DIREITOS DO TITULAR (art. 18): confirmação, acesso, correção, anonimização ou eliminação, portabilidade, informação sobre compartilhamento e revogação do consentimento; revisão de decisões automatizadas (art. 20).

INCIDENTE (art. 48): comunicar à ANPD e ao titular incidente com risco ou dano relevante (3 dias úteis, pelo regulamento da ANPD).

ANPD: desde a Lei 15.352/2026 é a AGÊNCIA Nacional de Proteção de Dados, autarquia de natureza especial vinculada ao Ministério da Justiça e Segurança Pública. SANÇÕES (art. 52): advertência; multa simples de até 2% do faturamento no Brasil, limitada a R$ 50 milhões POR INFRAÇÃO; multa diária; publicização; bloqueio; eliminação; suspensão parcial do banco ou da atividade por até 6 meses, prorrogável; proibição total ou parcial. Órgãos públicos podem sofrer as sanções, MENOS as multas (art. 52, §3º).`,
    exemplos: [
      "Delegacia usa câmeras com reconhecimento facial numa investigação: o tratamento é para repressão de infração penal (art. 4º, III), fora das regras gerais da LGPD, mas deve ser proporcional e estritamente necessário (§1º), e a biometria continua sendo dado sensível.",
      "Site de uma academia exige que o visitante aceite cookies de publicidade para navegar: a coleta de dados não essenciais depende de base legal, em regra o consentimento livre, informado e inequívoco do art. 7º, I, que pode ser revogado a qualquer tempo.",
    ],
    curiosidade:
      "A sigla ANPD foi mantida mesmo com a troca de nome: de Autoridade para Agência Nacional de Proteção de Dados (Lei 15.352/2026).",
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "Sigilo funcional e uso ético da tecnologia e das informações institucionais (arts. 313-A, 313-B e 325 do CP)",
    texto: `O policial tem acesso a bancos de dados sensíveis (antecedentes, mandados, veículos, interceptações). O CP pune o mau uso desse acesso; a FGV adora casos de servidor que "só deu uma olhadinha".

VIOLAÇÃO DE SIGILO FUNCIONAL (art. 325): revelar fato de que tem ciência em razão do cargo e que deva permanecer em segredo, ou facilitar-lhe a revelação. Detenção de 6 meses a 2 anos, OU multa, se o fato não constitui crime mais grave (subsidiário). Equiparados (§1º, Lei 9.983/2000): I – permitir ou facilitar, mediante atribuição, fornecimento e empréstimo de SENHA ou qualquer outra forma, o acesso de pessoas não autorizadas a sistemas ou bancos de dados da Administração; II – utilizar-se, indevidamente, do acesso restrito. Qualificadora (§2º): se resulta dano à Administração ou a outrem, reclusão de 2 a 6 anos e multa. NÃO HÁ FORMA CULPOSA: revelar por descuido é atípico penalmente (pode haver falta disciplinar).

INSERÇÃO DE DADOS FALSOS EM SISTEMA DE INFORMAÇÕES (art. 313-A, "peculato eletrônico"): o funcionário AUTORIZADO insere ou facilita a inserção de dados falsos, altera ou exclui indevidamente dados corretos nos sistemas ou bancos de dados da Administração, com o fim de obter vantagem indevida ou causar dano. Reclusão de 2 a 12 anos e multa.

MODIFICAÇÃO OU ALTERAÇÃO NÃO AUTORIZADA DE SISTEMA (art. 313-B): QUALQUER funcionário modifica ou altera sistema de informações ou programa de informática sem autorização ou solicitação de autoridade competente. Detenção de 3 meses a 2 anos e multa; +1/3 até metade se resulta dano. Diferença: 313-A mexe nos DADOS e exige funcionário autorizado e finalidade especial; 313-B mexe no SISTEMA/PROGRAMA.

Correlatos: divulgar, sem justa causa, informações sigilosas ou reservadas contidas ou não em sistemas da Administração (art. 153, §1º-A, detenção de 1 a 4 anos; ação incondicionada se houver prejuízo à Administração); quebrar segredo de justiça de interceptação (Lei 9.296/1996, art. 10, reclusão de 2 a 4 anos); invasão de sistema por quem não tem credencial (art. 154-A). Vender dados do sistema para quadrilha pode somar corrupção passiva (art. 317).

INFORMAÇÕES INSTITUCIONAIS (Lei 12.527/2011, LAI): graus de sigilo e prazos máximos – ultrassecreta 25 anos, secreta 15, reservada 5; informações pessoais têm acesso restrito por até 100 anos.

USO ÉTICO E RESPONSÁVEL: acesso só com necessidade de conhecer (need to know) e para finalidade do serviço; senha é pessoal e intransferível (todo acesso fica em log com o login do servidor); não inserir dados de investigação, nomes de vítimas ou fotos de presos em ferramentas públicas de IA ou em grupos pessoais de mensagem; não expor presos ou investigados em redes sociais; usar só equipamentos e contas institucionais autorizados; IA é apoio, com revisão humana, sem decisões automáticas que discriminem.`,
    exemplos: [
      "Agente consulta no sistema policial a ficha do novo namorado da filha, sem relação com qualquer investigação: utiliza-se indevidamente do acesso restrito (art. 325, §1º, II); se repassar a informação e causar dano, incide a forma qualificada do §2º.",
      "Escrivão autorizado a operar o sistema de mandados exclui o registro de mandado de prisão de um conhecido em troca de dinheiro: art. 313-A (exclusão indevida de dado correto com fim de vantagem), reclusão de 2 a 12 anos, além de corrupção passiva.",
    ],
    curiosidade:
      "Os arts. 313-A, 313-B e 325, §1º, vieram todos da mesma lei, a 9.983/2000, que também criou o crime de divulgar informação sigilosa de sistema da Administração (art. 153, §1º-A).",
    origem: "oficial",
  },
  {
    materia: "ti",
    topico: "ECA Digital (Lei 15.211/2025): proteção de crianças e adolescentes em ambientes digitais",
    origem: "aposta",
    texto: `O Estatuto Digital da Criança e do Adolescente — o ECA Digital, Lei 15.211, de 17/09/2025 — está em vigor desde 17/03/2026 (data fixada pelo art. 41-A, incluído pela Lei 15.352/2026), ou seja, antes da publicação do edital, o que o coloca dentro da regra do item 25.15. Ele não substitui o ECA (Lei 8.069/1990): cria deveres para os fornecedores de produtos e serviços de tecnologia da informação direcionados a crianças e adolescentes no País ou de acesso provável por eles — redes sociais, jogos eletrônicos, lojas de aplicativos, sistemas operacionais —, independentemente de sua localização, desenvolvimento, fabricação, oferta, comercialização e operação (art. 1º).

Os pontos mais cobráveis são poucos e objetivos. Conteúdo impróprio, inadequado ou proibido para menores de 18 anos, inclusive o material pornográfico, exige medidas eficazes para impedir o acesso, com mecanismos confiáveis de verificação de idade a cada acesso — a autodeclaração de idade é expressamente vedada (art. 9º, §§1º e 2º). As caixas de recompensa (loot boxes) são proibidas nos jogos eletrônicos direcionados a crianças e adolescentes ou de acesso provável por eles (art. 20). Contas de usuários de até 16 anos devem estar vinculadas à conta de um dos responsáveis legais (art. 24). E os fornecedores devem remover e comunicar às autoridades nacionais e internacionais competentes os conteúdos de aparente exploração, abuso sexual, sequestro e aliciamento que detectarem (art. 27) — o ponto que conversa diretamente com a investigação policial.

As sanções são administrativas, aplicadas com devido processo legal, ampla defesa e contraditório, sem prejuízo das sanções cíveis, criminais ou administrativas de outras leis (art. 35): advertência, com prazo de até 30 dias para medidas corretivas; multa simples de até 10% do faturamento do grupo econômico no Brasil no último exercício ou, sem faturamento, de R$ 10 a R$ 1.000 por usuário cadastrado, limitada a R$ 50 milhões por infração; suspensão temporária das atividades; e proibição de exercício das atividades. Atenção: o ECA Digital não cria crimes. As condutas criminosas continuam nos arts. 240 a 241-D do ECA e no Código Penal (por exemplo, o estupro de vulnerável do art. 217-A), e a infiltração virtual de policiais para investigá-las segue o art. 190-A do ECA, sempre com autorização judicial.`,
    exemplos: [
      "Uma plataforma de vídeos adultos passa a pedir apenas que o usuário clique em um botão declarando ter mais de 18 anos: isso descumpre o ECA Digital, que exige mecanismo confiável de verificação de idade a cada acesso e veda a autodeclaração (art. 9º, §1º).",
      "Um jogo online de acesso provável por crianças vende, por dinheiro real, caixas-surpresa com itens aleatórios: a prática é vedada pelo art. 20, e o fornecedor fica sujeito às sanções do art. 35, que vão da advertência à proibição das atividades.",
    ],
  },
  {
    materia: "ti",
    topico: "Criptoativos e fraudes com ativos virtuais (art. 171-A do CP, Lei 14.478/2022)",
    origem: "aposta",
    texto: `Ativo virtual, na definição da Lei 14.478/2022 (art. 3º), é a representação digital de valor que pode ser negociada ou transferida por meios eletrônicos e utilizada para realização de pagamentos ou com propósito de investimento — o caso das criptomoedas, como o bitcoin. Ficam fora do conceito a moeda nacional e as estrangeiras, a moeda eletrônica (Lei 12.865/2013), os pontos e recompensas de programas de fidelidade e as representações de ativos já disciplinadas em lei ou regulamento, como os valores mobiliários e os ativos financeiros. A lei, conhecida como marco legal dos criptoativos, mexeu em três frentes penais.

Primeiro, criou no Código Penal a fraude com a utilização de ativos virtuais, valores mobiliários ou ativos financeiros (art. 171-A): organizar, gerir, ofertar ou distribuir carteiras ou intermediar operações que envolvam esses ativos com o fim de obter vantagem ilícita, em prejuízo alheio, induzindo ou mantendo alguém em erro, mediante artifício, ardil ou qualquer outro meio fraudulento — reclusão de 4 a 8 anos e multa. É um estelionato especial: a estrutura (vantagem ilícita, erro da vítima e meio fraudulento) é a do art. 171, mas o objeto são carteiras e operações com esses ativos. Segundo, na Lei de Lavagem de Dinheiro (Lei 9.613/1998, art. 1º, §4º), a pena passou a ser aumentada de 1/3 a 2/3 quando o crime é cometido de forma reiterada, por intermédio de organização criminosa ou por meio da utilização de ativo virtual. Terceiro, a pessoa jurídica que oferece serviços referentes a operações com ativos virtuais, inclusive intermediação, negociação ou custódia (as corretoras, chamadas de exchanges), foi equiparada a instituição financeira para os crimes contra o Sistema Financeiro Nacional (Lei 7.492/1986, art. 1º, parágrafo único, I-A).

Para a investigação, o ponto técnico é que as transações em blockchain são públicas e rastreáveis, mas pseudônimas: o endereço da carteira não traz o nome do dono, e os registros não podem ser apagados por ninguém. A identificação costuma vir da corretora que converteu o criptoativo em reais, que mantém os dados cadastrais e o histórico de operações do cliente e pode ser obrigada a fornecê-los por ordem judicial. Já a pirâmide financeira (o esquema que só paga os participantes antigos com o dinheiro dos novos) tem tipo próprio na Lei de Economia Popular — obter ou tentar obter ganhos ilícitos em detrimento do povo ou de número indeterminado de pessoas mediante processos fraudulentos como "bola de neve" e "cadeias" (Lei 1.521/1951, art. 2º, IX, detenção de 6 meses a 2 anos e multa) —, e os crimes contra a economia popular são julgados pela Justiça Estadual (Súmula 498 do STF).`,
    exemplos: [
      "Um grupo cria uma falsa plataforma de investimento em criptomoedas, oferece carteiras com rendimento garantido e envia relatórios falsos de lucro enquanto desvia os depósitos: em tese, é a fraude do art. 171-A do CP, com reclusão de 4 a 8 anos e multa.",
      "Na investigação de um golpe pago em bitcoin, a equipe segue o caminho dos valores na blockchain até a carteira de uma corretora que atua no Brasil e pede ao juiz a quebra de sigilo para obter os dados do cliente que converteu o criptoativo em reais.",
    ],
  },
];
