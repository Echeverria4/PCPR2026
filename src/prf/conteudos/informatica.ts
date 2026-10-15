import type { ConteudoPrf } from "../../data/prf";

export const CONTEUDO_PRF_INFO: ConteudoPrf[] = [
  {
    materia: "info",
    topico: "Editores de texto (Word e Writer)",
    texto: `O Word (Microsoft 365) e o Writer (LibreOffice) fazem as mesmas tarefas, mas vários atalhos mudam de um programa para o outro, e é aí que a prova costuma apertar. No Word em português, muitos atalhos seguem a palavra em português (N de negrito, S de sublinhado); no Writer, valem as letras do inglês (B de bold, U de underline).

Atalhos que mudam:
• Negrito: Ctrl+N no Word; Ctrl+B no Writer
• Sublinhado: Ctrl+S no Word; Ctrl+U no Writer
• Salvar: Ctrl+B no Word; Ctrl+S no Writer
• Novo documento: Ctrl+O no Word; Ctrl+N no Writer
• Abrir: Ctrl+A no Word; Ctrl+O no Writer
• Selecionar tudo: Ctrl+T no Word; Ctrl+A no Writer
• Alinhar à esquerda e à direita: Ctrl+Q e Ctrl+G no Word; Ctrl+L e Ctrl+R no Writer
• Localizar: Ctrl+L no Word (painel Navegação); Ctrl+F no Writer (barra de pesquisa)
• Substituir: Ctrl+U no Word; Ctrl+H no Writer

Atalhos iguais nos dois:
• Ctrl+I itálico, Ctrl+E centralizar, Ctrl+J justificar, Ctrl+P imprimir
• Ctrl+Enter quebra de página, Ctrl+K hiperlink, F7 verificação ortográfica

Seções e páginas:
• No Word, orientação, margens, colunas, cabeçalho e numeração valem por seção
• Para deixar uma só página em paisagem no Word, coloca-se uma quebra de seção antes e outra depois dela
• No Writer, o mesmo efeito vem dos estilos de página: uma quebra manual pode aplicar o estilo Paisagem

Formatos:
• Word: .docx (padrão desde o Office 2007), .docm (com macros) e .dotx (modelo); o antigo .doc ainda abre
• Writer: .odt (padrão ODF) e .ott (modelo); abre e salva .docx
• Os dois exportam para PDF

Complemento (revisão, cabeçalhos por seção e outros recursos):
• Marca-d'água: texto ou imagem esmaecido atrás do conteúdo, repetido em todas as páginas. No Word, guia Design, grupo Plano de Fundo da Página; no Writer, Formatar > Marca-d'água
• Controlar Alterações: Ctrl+Shift+E no Word (guia Revisão) e Ctrl+Shift+C no Writer (Editar > Controlar alterações > Gravar). Cada inserção, exclusão e mudança de formatação fica marcada com autor e data até ser aceita ou rejeitada
• Vincular ao Anterior: a seção nova nasce com cabeçalho e rodapé ligados aos da anterior. Desfazer o vínculo numa seção a separa da anterior, e a seção seguinte, se continuar vinculada, repete o cabeçalho novo
• Substituir com a opção de palavras inteiras (Somente palavras inteiras, no Writer) troca “ato” sem mexer em “contrato” nem em “fato”
• .dotm: modelo do Word com macros, ao lado de .docx, .docm e .dotx
• Coautoria: um arquivo salvo no OneDrive ou no SharePoint pode ser editado por várias pessoas ao mesmo tempo, e o Histórico de Versões permite abrir e restaurar versões anteriores
• PDF/A, versão do PDF própria para arquivamento de longo prazo, não sai por padrão: é preciso marcá-la nas opções da exportação, nos dois programas`,
    exemplos: [
      "Ctrl+B com uma palavra selecionada: no Word, salva o arquivo; no Writer, aplica negrito.",
      "Ctrl+Enter no meio de um relatório leva o texto seguinte para o começo da próxima página, tanto no Word quanto no Writer.",
    ],
    curiosidade:
      "A letra x no fim de .docx, .xlsx e .pptx indica o formato baseado em XML adotado a partir do Office 2007; quando o arquivo guarda macros, ela muda para m, como em .docm e .xlsm.",
  },
  {
    materia: "info",
    topico: "Planilhas eletrônicas (Excel e Calc)",
    texto: `Excel e Calc seguem a mesma lógica: cada célula é identificada pela coluna seguida da linha (B7), e toda fórmula começa com o sinal de igual. Nas versões atuais, os dois têm 1.048.576 linhas e 16.384 colunas (até a coluna XFD).

Operadores e referências:
• Aritméticos: + - * / ^ (potência) e %; o & junta textos
• Dois-pontos indica intervalo (A1:A5, de A1 até A5); ponto e vírgula separa argumentos (A1;A5, A1 e A5)
• A referência relativa (A1) se ajusta quando a fórmula é copiada; o cifrão fixa a coluna, a linha ou as duas ($A1, A$1, $A$1)
• F4 alterna os tipos de referência no Excel; no Calc, Shift+F4
• Outra planilha do arquivo: Multas!B3 no Excel e Multas.B3 no Calc

Funções mais cobradas:
• SOMA, MÉDIA, MÁXIMO, MÍNIMO, MAIOR(intervalo;k) e MENOR(intervalo;k)
• SE(teste;valor_se_verdadeiro;valor_se_falso), com E e OU para combinar condições
• CONT.SE(intervalo;critério) conta; SOMASE(intervalo;critério;intervalo_soma) soma
• PROCV(valor;tabela;coluna;FALSO) procura na primeira coluna da tabela e devolve a coluna pedida; FALSO exige correspondência exata
• ARRED arredonda; TRUNCAR corta as casas sem arredondar; INT devolve o inteiro igual ou menor
• HOJE() traz a data atual; AGORA() traz data e hora

Erros mais vistos no Excel:
• #DIV/0! divisão por zero; #NOME? função ou nome escrito errado
• #REF! referência apagada; #VALOR! tipo de dado errado
• #N/D valor não encontrado, comum no PROCV
• ##### coluna estreita demais para mostrar o número

Complemento (copiar, preencher, somar com critérios e procurar):
• Copiar e colar uma fórmula ajusta as referências relativas ao novo lugar; recortar e colar a move sem alterar nenhuma referência
• A alça de preenchimento, o quadradinho no canto da seleção, copia a fórmula para as células vizinhas com o mesmo ajuste
• Arrastada a partir de uma célula com um número só, a alça repete o valor no Excel (com Ctrl, cria a sequência) e cria a sequência de 1 em 1 no Calc (com Ctrl, repete)
• SOMASE(intervalo;critério;intervalo_soma) põe o intervalo a somar no fim; SOMASES(intervalo_soma;intervalo1;critério1;intervalo2;critério2) o põe no começo e aceita vários critérios ao mesmo tempo
• Com negativos, INT e TRUNCAR divergem: =INT(-2,4) dá -3, e =TRUNCAR(-2,4) dá -2
• Nome de aba com espaço vai entre apóstrofos: ='Frota Leve'!C4 no Excel e ='Frota Leve'.C4 no Calc
• PROCV só procura na primeira coluna da tabela e devolve colunas à direita dela; para trazer um dado de uma coluna à esquerda, usa-se PROCX, nas versões recentes, ou ÍNDICE com CORRESP
• PROCV com VERDADEIRO, ou sem o quarto argumento, faz correspondência aproximada e supõe a primeira coluna em ordem crescente`,
    exemplos: [
      "Com 18 em A1 e 0 em A2, =A1/A2 mostra #DIV/0!; =SE(A2=0;0;A1/A2) evita o erro.",
      "=MAIOR(C2:C40;2) devolve a segunda maior velocidade registrada no intervalo.",
    ],
    curiosidade:
      "Até a versão 7.3, o Calc tinha só 1.024 colunas; desde o LibreOffice 7.4, de 2022, tem 16.384, como o Excel. Apostilas antigas ainda trazem o número velho.",
  },
  {
    materia: "info",
    topico: "Apresentações (PowerPoint e Impress)",
    texto: `PowerPoint e Impress montam apresentações em slides que recebem textos, imagens, vídeos, gráficos e sons. Os dois separam a transição, que é o efeito na passagem de um slide para o outro, da animação, que é o efeito aplicado a um objeto dentro do slide (um título que surge, uma seta que entra a cada clique).

Iniciar e encerrar:
• F5 começa a apresentação pelo primeiro slide, nos dois programas
• Shift+F5 começa pelo slide atual
• Esc encerra a apresentação

Modos de exibição:
• PowerPoint: Normal, Estrutura de Tópicos, Classificação de Slides, Anotações e Modo de Exibição de Leitura
• Impress: Normal, Estrutura de tópicos, Notas e Classificador de slides
• Classificação (ou Classificador) mostra miniaturas de todos os slides; serve para reordenar, duplicar e excluir
• Anotações (Notas, no Impress) guardam o texto de apoio do apresentador, que o público não vê

Mestres:
• O slide mestre guarda layout, fontes, cores e elementos repetidos, como logotipo e rodapé; o que muda nele vale para todos os slides baseados nele, inclusive os novos
• Folheto mestre e anotações mestras controlam a impressão de folhetos e de páginas de anotações

Formatos:
• PowerPoint: .pptx (padrão), .ppsx (abre direto na apresentação) e .potx (modelo)
• Impress: .odp e .otp (modelo)

Complemento (comandos na exibição e organização dos slides):
• Durante a exibição, B deixa a tela preta e W, branca; a mesma tecla devolve o slide. Digitar o número de um slide e pressionar Enter salta direto para ele. Vale nos dois programas
• A formatação aplicada direto num slide prevalece sobre a do mestre; Redefinir (Página Inicial > Slides) devolve os espaços reservados à posição, ao tamanho e à formatação do layout
• Apresentação personalizada: reúne parte dos slides do arquivo, na ordem desejada, para uma plateia específica, sem criar outro arquivo
• Ocultar slide: o slide continua no arquivo e aparece no modo Normal, mas a exibição o pula`,
    exemplos: [
      "Transição: o slide com o mapa da rodovia entra deslizando. Animação: dentro dele, as setas do desvio aparecem uma a uma.",
      "Salva como .ppsx, a apresentação de boas-vindas abre direto em tela cheia no telão do auditório.",
    ],
    curiosidade:
      "No modo do apresentador, o notebook mostra ao palestrante as anotações, o próximo slide e um cronômetro, enquanto o telão exibe só o slide atual.",
  },
  {
    materia: "info",
    topico: "Internet e intranet: conceitos e protocolos",
    texto: `A internet é a rede mundial que interliga redes com a pilha de protocolos TCP/IP. A intranet usa as mesmas tecnologias (navegador, páginas web, e-mail, TCP/IP), mas o acesso é restrito aos membros de uma organização. Quando parte da intranet é aberta, de forma controlada, a um público externo autorizado, como fornecedores e parceiros, tem-se a extranet. Para acessar a intranet de fora, costuma-se usar uma VPN, que cria um túnel criptografado pela internet.

Protocolos que mais caem:
• HTTP transfere páginas web; o HTTPS faz o mesmo com criptografia (TLS)
• DNS traduz nomes de domínio (www.gov.br) em endereços IP
• DHCP entrega automaticamente endereço IP, máscara, gateway e DNS a cada máquina
• TCP faz entrega confiável, com confirmação e reenvio; UDP dispensa essas verificações e é mais leve (voz, vídeo ao vivo, DNS)
• IP endereça e encaminha os pacotes: o IPv4 tem 32 bits (quatro números de 0 a 255) e o IPv6, 128 bits
• FTP transfere arquivos; SMTP, POP3 e IMAP cuidam do e-mail

Abrangência:
• PAN (pessoal, poucos metros), LAN (local, um prédio), MAN (uma cidade) e WAN (países e continentes)

Computação em nuvem:
• SaaS: software pronto, usado pela internet (Microsoft 365, Gmail)
• PaaS: plataforma para desenvolver e hospedar aplicações
• IaaS: infraestrutura sob demanda (máquinas virtuais, armazenamento, rede)

Complemento (modelos de nuvem, portas e endereços):
• Modelos de implantação (NIST): pública, aberta a qualquer cliente do provedor; privada, de uso exclusivo de uma organização, dentro ou fora das instalações dela; comunitária, de uso exclusivo de um grupo de organizações com interesses comuns; híbrida, composta de duas ou mais delas, integradas de modo que dados e aplicações possam passar de uma para outra
• Portas padrão: FTP 20 e 21, SSH 22, Telnet 23, DNS 53, DHCP 67 e 68, HTTP 80 e HTTPS 443
• SSH e Telnet dão acesso remoto a um terminal; o SSH cifra a sessão inteira, e o Telnet trafega tudo sem criptografia, inclusive a senha
• Endereços privados (RFC 1918): 10.0.0.0 a 10.255.255.255, 172.16.0.0 a 172.31.255.255 e 192.168.0.0 a 192.168.255.255. Não são roteados na internet; o roteador faz NAT, e as máquinas da rede saem com o endereço público dele
• Gateway padrão: endereço do roteador que leva os pacotes para fora da rede local. Ele cuida da rota, e o DNS só da tradução de nomes; por isso, uma falha de DNS não impede o acesso direto pelo IP`,
    exemplos: [
      "Em viagem, um servidor conecta a VPN no notebook e passa a acessar os sistemas da intranet como se estivesse na rede interna.",
      "O endereço IPv4 192.168.10.25 tem quatro números de 0 a 255 separados por pontos, 32 bits no total.",
    ],
    curiosidade:
      "O IPv6 surgiu porque os cerca de 4,3 bilhões de endereços do IPv4 (2 elevado a 32) não bastavam para tantos aparelhos conectados.",
  },
  {
    materia: "info",
    topico: "Navegadores",
    texto: `Edge, Chrome e Firefox exibem páginas web e dividem boa parte dos atalhos. O Edge é o navegador padrão do Windows 10 e 11 e usa a mesma base do Chrome (o Chromium); o Internet Explorer foi aposentado em 2022. O Firefox é software livre, mantido pela Mozilla.

Atalhos comuns aos três:
• Ctrl+T abre guia nova; Ctrl+W fecha a guia; Ctrl+Shift+T reabre a última guia fechada
• Ctrl+H histórico; Ctrl+J downloads; Ctrl+D adiciona aos favoritos
• F5 atualiza a página; Ctrl+F localiza um termo nela; F11 tela cheia
• Ctrl+Shift+Del abre a limpeza dos dados de navegação

Navegação privada:
• Janela anônima no Chrome e InPrivate no Edge (Ctrl+Shift+N); janela privativa no Firefox (Ctrl+Shift+P)
• Ao fechar a janela, somem o histórico, os cookies e os dados de formulário daquela sessão
• Downloads e favoritos criados continuam
• Não esconde o acesso da rede do órgão, do provedor nem dos sites visitados

Outros conceitos:
• Cookies: pequenos arquivos que o site grava no navegador para lembrar login, preferências e carrinho
• Cache: cópias de páginas e imagens guardadas para carregar mais rápido
• Cadeado e HTTPS indicam conexão criptografada com o site, não que o site seja confiável

Complemento (recarga, limpeza de dados e leitura do endereço):
• Ctrl+F5 (ou Ctrl+Shift+R) recarrega a página ignorando o cache; o F5 comum pode reaproveitar cópias guardadas
• Na limpeza de dados (Ctrl+Shift+Del), cada item é marcado à parte: histórico, downloads, cookies, cache, senhas e dados de formulário. Apagar o histórico de downloads tira só a lista; o arquivo continua na pasta. Os favoritos não entram nessa limpeza
• O domínio se lê da direita para a esquerda, a partir da extensão: em consulta.exemplo.com.br, o domínio registrado é exemplo.com.br, e consulta é um subdomínio criado por quem o controla
• No HTTPS, a criptografia assimétrica, apoiada no certificado do site, entra só no começo da conexão, para autenticar o servidor e combinar uma chave de sessão; o tráfego segue cifrado com essa chave, de forma simétrica, que é bem mais rápida`,
    exemplos: [
      "Ctrl+Shift+Del no Edge abre a janela para limpar histórico, cookies e cache de um período escolhido.",
      "Um site de notícias que lembra a cidade escolhida na visita anterior faz isso com cookies gravados no navegador.",
    ],
    curiosidade:
      "Navegar em janela anônima não impede que a rede do órgão registre os acessos: a privacidade vale só para o que fica gravado no próprio computador.",
  },
  {
    materia: "info",
    topico: "Correio eletrônico",
    texto: `O e-mail pode ser usado pelo webmail, direto no navegador (Gmail, Outlook na web), ou por um programa cliente instalado (Outlook, Thunderbird), que exige configurar os servidores de envio e de recebimento.

Campos da mensagem:
• Para: destinatários principais
• Cc (com cópia): recebem a mensagem e ficam visíveis para todos
• Cco (com cópia oculta): recebem a mensagem, mas nenhum outro destinatário vê esse endereço
• Assunto e corpo podem ficar em branco; o que não pode faltar é ao menos um destinatário
• Os anexos aparecem com o ícone do clipe

Responder e encaminhar:
• Responder: vai só ao remetente, sem os anexos
• Responder a todos: vai ao remetente e a quem estava em Para e Cc, sem os anexos; quem estava em Cco não recebe, porque o endereço não aparece
• Encaminhar: repassa a mensagem a outras pessoas, com os anexos

Protocolos:
• SMTP: envio, do programa ao servidor e entre servidores
• POP3: recebimento; por padrão, baixa as mensagens para um aparelho e as apaga do servidor
• IMAP: recebimento com sincronização; as mensagens ficam no servidor e aparecem iguais em todos os aparelhos

Complemento (cópia oculta, POP3 e portas):
• Quem recebeu em Cco e usa Responder a todos se expõe: a resposta vai ao remetente e a todos de Para e Cc, que passam a ver esse endereço
• O POP3 pode ser configurado para deixar uma cópia no servidor, mas não sincroniza pastas nem marcações de lida entre aparelhos
• Portas: SMTP 25 entre servidores e 587 (com STARTTLS) ou 465 (com TLS) no envio pelo programa do usuário; POP3 110, ou 995 com TLS; IMAP 143, ou 993 com TLS
• No webmail, o navegador acessa a caixa por HTTP ou HTTPS, sem configurar POP3 nem IMAP`,
    exemplos: [
      "Para avisar 80 condutores sobre uma audiência sem expor o e-mail de um para o outro, coloque todos em Cco.",
      "Um e-mail sem assunto chega normalmente; muitos programas só perguntam se você quer mesmo enviá-lo assim.",
    ],
    curiosidade:
      "O primeiro e-mail entre computadores diferentes foi enviado em 1971 por Ray Tomlinson, que escolheu o @ para separar o nome do usuário do nome da máquina.",
  },
  {
    materia: "info",
    topico: "Busca e pesquisa na web",
    texto: `Os buscadores aceitam operadores que refinam a pesquisa. A busca não diferencia maiúsculas de minúsculas e ignora a maior parte da pontuação, salvo quando ela faz parte de um operador.

Operadores mais cobrados (Google):
• Aspas: "frase exata" traz só páginas com as palavras juntas e naquela ordem
• Sinal de menos colado à palavra: exclui o termo (radar -fixo)
• site: restringe a um site ou domínio (site:gov.br)
• filetype: restringe ao tipo de arquivo (filetype:pdf)
• OR, em maiúsculas: aceita um termo ou outro (multa OR infração)

Como combinar:
• Os operadores podem ser usados juntos: "excesso de velocidade" site:gov.br filetype:pdf
• Não se deixa espaço entre o operador e o termo (site:gov.br, e não site: gov.br)
• Sem operador, a busca prioriza páginas que tenham todas as palavras, em qualquer ordem

Cuidados:
• Aspas podem esconder resultados úteis, porque exigem a frase exatamente como foi digitada
• O sinal de mais deixou de funcionar como operador no Google em 2011
• As ferramentas da página de resultados filtram por período, imagens, notícias e vídeos

Complemento (mais operadores e o que não funciona):
• -site: tira dos resultados um site ou domínio inteiro (concurso -site:exemplo.com.br)
• intitle: exige o termo no título da página; inurl:, no endereço
• Dentro de aspas, o asterisco serve de curinga para uma palavra qualquer: "multa * trânsito"
• Dentro de aspas, o OR perde a função: "multa OR infração" busca a frase com a palavra or no meio
• O Google não tem operador NOT; para excluir, vale o sinal de menos colado ao termo`,
    exemplos: [
      "\"lei seca\" site:gov.br filetype:pdf traz só PDFs de sites do governo com a expressão exata.",
      "pneu recapado -caminhão descarta as páginas que falam de caminhão.",
    ],
    curiosidade:
      "O OR precisa estar em maiúsculas: em minúsculas, o Google trata or como uma palavra comum da busca.",
  },
  {
    materia: "info",
    topico: "Grupos de discussão",
    texto: `Grupos de discussão reúnem pessoas em torno de um assunto para trocar mensagens de forma organizada. Na maior parte das vezes, a comunicação é assíncrona: cada um lê e responde quando pode, e as mensagens ficam guardadas para quem chegar depois.

Formatos:
• Lista de discussão (lista de e-mail): a mensagem enviada ao endereço da lista é redistribuída por e-mail a todos os inscritos; para participar, é preciso se inscrever
• Fórum: funciona numa página web, com as mensagens organizadas em tópicos; quem chega depois lê a conversa inteira
• Newsgroups (Usenet): o modelo mais antigo, com grupos temáticos espalhados por servidores de notícias, que usam o protocolo NNTP
• Chats e mensageiros instantâneos são síncronos: a conversa acontece em tempo real

Papéis e regras:
• O moderador aprova ou recusa mensagens, organiza os tópicos e aplica as regras do grupo
• Netiqueta: não escrever tudo em maiúsculas (soa como grito), manter o assunto do tópico, não mandar spam e tratar todos com respeito
• Grupos podem ser abertos, em que qualquer pessoa entra, ou fechados, com entrada aprovada`,
    exemplos: [
      "Antes de abrir um tópico novo num fórum, vale buscar se a dúvida já foi respondida: repetir perguntas espalha a discussão.",
      "Escrever \"URGENTE, RESPONDAM JÁ\" num grupo fere a netiqueta: tudo em maiúsculas soa como grito.",
    ],
    curiosidade:
      "A Usenet entrou no ar em 1980, cerca de uma década antes da web, e organizava os grupos por nomes hierárquicos, como comp.lang.c (computação, linguagens, C).",
  },
  {
    materia: "info",
    topico: "Sistemas de informação",
    texto: `Um sistema é um conjunto de partes interdependentes que trabalham por um objetivo comum. A Teoria Geral dos Sistemas, do biólogo Ludwig von Bertalanffy, mostra que o todo é diferente da soma das partes e que todo sistema tem entrada, processamento, saída e retroalimentação (feedback). Sistemas abertos trocam informação e energia com o ambiente; o sistema de informação de uma organização é um sistema aberto e reúne pessoas, procedimentos, software, hardware, dados e redes.

Dado, informação e conhecimento:
• Dado: registro bruto, sem contexto (o número 87)
• Informação: dado organizado e com significado (87 km/h num trecho com limite de 60 km/h)
• Conhecimento: informação interpretada pela experiência, que orienta a ação (saber que aquele trecho exige fiscalização à noite)
• Metadados: dados que descrevem outros dados (autor, data de criação, tamanho, localização de uma foto)

Tipos de sistema:
• SPT (processamento de transações): registra as operações do dia a dia, no nível operacional
• SIG (informação gerencial): resume as transações em relatórios periódicos para a gerência
• SAD (apoio à decisão): simula cenários do tipo "e se...?" para decisões pouco estruturadas
• SAE (apoio ao executivo): painéis de indicadores para a alta direção
• ERP (sistema integrado de gestão): reúne finanças, pessoal, compras e outras áreas numa base única`,
    exemplos: [
      "A lista de placas registradas pelos radares num dia é dado; o relatório mensal de excesso de velocidade por trecho já é informação.",
      "Lavrar um auto no sistema é uma transação (SPT); o relatório trimestral de autos por regional é saída típica de um SIG.",
    ],
    curiosidade:
      "Bertalanffy era biólogo: a teoria nasceu do estudo de organismos vivos, que trocam matéria e energia com o ambiente, e só depois chegou à administração e à computação.",
  },
  {
    materia: "info",
    topico: "Segurança da informação",
    texto: `A segurança da informação protege dados em qualquer suporte, digital ou em papel. A base está em três princípios, a tríade CID: confidencialidade, integridade e disponibilidade. As normas ABNT NBR ISO/IEC (a antiga 17799, hoje 27002) acrescentam que autenticidade, responsabilidade, não repúdio e confiabilidade também podem estar envolvidas.

Princípios:
• Confidencialidade: só quem tem autorização acessa
• Integridade: a informação não é alterada indevidamente
• Disponibilidade: a informação está acessível quando é preciso
• Autenticidade: a origem e a identidade são as declaradas
• Não repúdio (irretratabilidade): o autor não consegue negar que praticou o ato

Pragas e golpes:
• Vírus: se anexa a um arquivo ou programa e depende de ele ser executado
• Worm: se propaga sozinho pela rede, mandando cópias de si mesmo
• Cavalo de troia: parece um programa útil, mas executa ações maliciosas escondidas
• Ransomware: torna os dados inacessíveis, em geral com criptografia, e cobra resgate
• Spyware: espiona; o keylogger grava o que é digitado e o screenlogger grava a tela
• Phishing: mensagem ou página falsa que imita uma instituição para roubar dados
• Pharming: adultera o DNS e leva a um site falso mesmo quando o endereço certo é digitado

Defesas:
• Firewall: filtra o tráfego que entra e sai conforme regras; não substitui o antivírus
• Criptografia simétrica usa a mesma chave para cifrar e decifrar; a assimétrica usa um par de chaves, uma pública e uma privada
• Assinatura digital: feita com a chave privada do autor, garante autenticidade, integridade e não repúdio, mas não sigilo
• Backup: cópias periódicas, guardadas fora do equipamento, permitem recuperar os dados depois de um ransomware

Complemento (hash, certificados, cópias e controle de acesso):
• Hash: resumo de tamanho fixo calculado sobre um arquivo ou mensagem; não permite reconstruir o original, e a menor mudança gera outro resumo. Comparar o hash divulgado com o do arquivo recebido confere a integridade, mas não identifica o autor nem esconde o conteúdo
• ICP-Brasil (MP 2.200-2/2001): a AC Raiz, função exercida pelo ITI, emite os certificados das AC do nível seguinte e não pode emitir para o usuário final; a AC emite, renova e revoga certificados; a AR identifica e cadastra o titular e encaminha o pedido à AC
• Certificado A1: arquivo instalado no computador, protegido por senha, com validade de até 1 ano. A3: chave gerada e guardada em token ou cartão, de onde não pode ser exportada, com validade de até 5 anos
• Backup completo copia tudo; o incremental, o que mudou desde o último backup de qualquer tipo; o diferencial, o que mudou desde o último completo. Para restaurar, o incremental exige o completo e todos os incrementais seguintes; o diferencial, o completo e o último diferencial
• Regra 3-2-1: três cópias dos dados, em dois tipos de mídia, uma delas fora do local
• Compactar reduz o tamanho, mas não protege o conteúdo, a menos que se aplique senha com criptografia; criptografar protege, mas não reduz. Arquivos já comprimidos, como JPG e MP3, quase não diminuem
• Vulnerabilidade é a fraqueza; ameaça, o que pode explorá-la; risco, a probabilidade de isso acontecer combinada com o impacto
• Controle de acesso (IAAA): identificação (quem o usuário diz ser), autenticação (a prova disso), autorização (o que ele pode fazer) e auditoria (o registro do que fez)
• Autenticação multifator: fatores de categorias diferentes, entre algo que se sabe (senha, PIN), algo que se tem (token, cartão) e algo que se é (biometria). Dois itens da mesma categoria contam como um fator só
• Segregação de funções: quem executa uma etapa sensível não a aprova. Menor privilégio: só o acesso que a tarefa exige. Revisão periódica: retira os acessos que sobraram depois de mudanças de setor
• Rootkit: esconde a presença do invasor (arquivos, processos, conexões). Backdoor: deixa uma entrada para ele voltar sem passar pela autenticação normal
• Dupla extorsão: o ransomware copia os dados antes de cifrá-los e ameaça publicá-los; o backup devolve a disponibilidade, mas não desfaz o vazamento
• Responsabilidade compartilhada na nuvem: o provedor responde pela infraestrutura; o cliente, pelos próprios dados, contas, permissões e configurações. Quanto mais perto do IaaS, mais coisas ficam com o cliente`,
    exemplos: [
      "Um e-mail com o brasão do órgão pedindo a senha do sistema por meio de um link é phishing: instituições sérias não pedem senha por mensagem.",
      "O vazamento de fichas de servidores fere a confidencialidade; um auto alterado sem registro fere a integridade.",
    ],
    curiosidade:
      "O Morris Worm, de 1988, foi um dos primeiros worms a se espalhar pela internet, atingiu cerca de 10% das máquinas conectadas na época e levou à criação do CERT/CC, nos Estados Unidos.",
  },
];
