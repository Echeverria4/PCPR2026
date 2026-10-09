import type { QuestaoPrf } from "../../data/prf";

export const QUESTOES_PRF_INFO: QuestaoPrf[] = [
  {
    id: "prf-info-001",
    materia: "info",
    topico: "Editores de texto (Word e Writer)",
    enunciado:
      "Uma agente administrativa redige um ofício alternando entre o Word (Microsoft 365, em português) e o LibreOffice Writer. Com uma palavra selecionada, ela quer aplicar negrito pelo teclado. Que atalhos fazem isso em cada programa?",
    alternativas: [
      "Ctrl+B no Word e Ctrl+N no Writer",
      "Ctrl+B nos dois programas",
      "Ctrl+N no Word e Ctrl+B no Writer",
      "Ctrl+N nos dois programas",
      "Ctrl+G no Word e Ctrl+B no Writer",
    ],
    correta: 2,
    explicacao:
      "No Word em português, Ctrl+N aplica negrito e Ctrl+B salva o arquivo. No Writer valem as letras do inglês: Ctrl+B (bold) aplica negrito e Ctrl+N cria um documento novo. No Word, Ctrl+G alinha o parágrafo à direita.",
    origem: "banco",
  },
  {
    id: "prf-info-002",
    materia: "info",
    topico: "Editores de texto (Word e Writer)",
    enunciado:
      "Num relatório de 60 páginas editado no LibreOffice Writer, um servidor precisa trocar de uma só vez todas as ocorrências da sigla “AIT” pela expressão “auto de infração de trânsito”. Que recurso, com seu atalho padrão, resolve a tarefa?",
    alternativas: [
      "Localizar e substituir, pelo Ctrl+H",
      "Localizar e substituir, pelo Ctrl+U",
      "Barra de pesquisa, pelo Ctrl+F, que troca os termos sozinha",
      "Verificação ortográfica, pelo F7, que troca a sigla pela forma por extenso",
      "Selecionar tudo, pelo Ctrl+A, e digitar a expressão por cima",
    ],
    correta: 0,
    explicacao:
      "No Writer, Ctrl+H abre Localizar e substituir, com o botão Substituir todos. Ctrl+F só abre a barra de pesquisa, Ctrl+U sublinha (é no Word que Ctrl+U abre a substituição), F7 verifica a ortografia e Ctrl+A seleciona o documento inteiro.",
    origem: "banco",
  },
  {
    id: "prf-info-003",
    materia: "info",
    topico: "Editores de texto (Word e Writer)",
    enunciado:
      "Um servidor criou no Word um documento com macros que preenchem automaticamente o cabeçalho dos ofícios da regional. Em que formato ele deve salvar o arquivo para não perder as macros?",
    alternativas: [
      ".docx, o formato padrão, que aceita macros",
      ".dotx, o modelo que guarda macros e estilos",
      ".odt, o formato aberto que o Word usa para macros",
      ".docm, documento habilitado para macros",
      ".pdf, que preserva as macros e a formatação",
    ],
    correta: 3,
    explicacao:
      "Desde o Office 2007, o x no fim da extensão indica arquivo sem macros e o m, com macros: .docm é o documento habilitado para macros. Ao salvar em .docx, o Word avisa que as macros serão removidas; .dotx é modelo sem macros (o modelo com macros é .dotm), .odt é o formato padrão do Writer e o PDF não executa macros.",
    origem: "banco",
  },
  {
    id: "prf-info-004",
    materia: "info",
    topico: "Editores de texto (Word e Writer)",
    enunciado:
      "Um relatório no Word está todo em orientação retrato, mas a página 9 traz uma tabela larga de ocorrências por rodovia e precisa ficar em paisagem. Qual procedimento muda a orientação só dessa página?",
    alternativas: [
      "Inserir uma quebra de página com Ctrl+Enter e mudar a orientação, que passa a valer só para a página nova",
      "Inserir quebras de seção antes e depois da página 9 e aplicar a orientação paisagem só a essa seção",
      "Selecionar a tabela e girar o texto das células em 90 graus, o que vira a página inteira",
      "Mudar a orientação na guia Layout, que o Word aplica apenas à página em que está o cursor",
      "Dividir a página 9 em duas colunas, o que a coloca automaticamente em paisagem",
    ],
    correta: 1,
    explicacao:
      "No Word, orientação, margens, colunas e cabeçalhos valem por seção. Com uma quebra de seção (próxima página) antes e outra depois da tabela, a página 9 vira uma seção própria e pode ficar em paisagem. A quebra de página comum não cria seção, e mudar a orientação num documento de seção única altera todas as páginas.",
    origem: "banco",
  },
  {
    id: "prf-info-005",
    materia: "info",
    topico: "Planilhas eletrônicas (Excel e Calc)",
    enunciado:
      "Na planilha de diárias de uma superintendência, a célula D2 contém =B2*C2*$G$1, em que G1 guarda o valor da diária. Se a fórmula for copiada de D2 para D5, o que aparecerá em D5?",
    alternativas: ["=B2*C2*$G$1", "=B5*C5*$G$4", "=B5*C5*G4", "=E5*F5*$G$1", "=B5*C5*$G$1"],
    correta: 4,
    explicacao:
      "Copiada três linhas para baixo na mesma coluna, a fórmula soma 3 às linhas das referências relativas (B2 vira B5 e C2 vira C5), sem mudar as colunas. O cifrão antes da coluna e da linha prende $G$1, que continua apontando para o valor da diária.",
    origem: "banco",
  },
  {
    id: "prf-info-006",
    materia: "info",
    topico: "Planilhas eletrônicas (Excel e Calc)",
    enunciado:
      "Na aba Viaturas, o intervalo A2:D50 traz a placa na coluna A, o modelo na B, a unidade de lotação na C e a quilometragem na D. Qual fórmula, digitada na mesma aba, devolve a unidade de lotação da viatura cuja placa está em G1, exigindo correspondência exata?",
    alternativas: [
      "=PROCV(G1;A2:D50;2;FALSO)",
      "=PROCV(G1;A2:D50;3;FALSO)",
      "=PROCV(A2:D50;G1;3;FALSO)",
      "=PROCV(G1;A2:D50;3;VERDADEIRO)",
      "=PROCV(G1;B2:D50;3;FALSO)",
    ],
    correta: 1,
    explicacao:
      "O PROCV procura o valor (G1) na primeira coluna da tabela, que deve ser a das placas, e devolve a coluna indicada pelo número: 3 é a terceira coluna do intervalo, a da lotação. FALSO exige correspondência exata; VERDADEIRO aceita valor aproximado e pode trazer a viatura errada.",
    origem: "banco",
  },
  {
    id: "prf-info-007",
    materia: "info",
    topico: "Planilhas eletrônicas (Excel e Calc)",
    enunciado:
      "Na planilha de abastecimento, a célula A1 contém 48,768 litros. Quais resultados dão, respectivamente, =ARRED(A1;1), =TRUNCAR(A1;1) e =INT(A1)?",
    alternativas: ["48,8; 48,8; 49", "48,7; 48,7; 48", "48,8; 48,7; 49", "48,8; 48,7; 48", "48,7; 48,8; 48"],
    correta: 3,
    explicacao:
      "ARRED segue a regra comum de arredondamento: 48,768 com uma casa vira 48,8. TRUNCAR apenas corta as casas excedentes, sem arredondar: 48,7. INT devolve o inteiro igual ou menor que o número: 48. Com número negativo, os dois divergem: INT(-3,2) dá -4, e TRUNCAR(-3,2) dá -3.",
    origem: "banco",
  },
  {
    id: "prf-info-008",
    materia: "info",
    topico: "Planilhas eletrônicas (Excel e Calc)",
    enunciado:
      "No LibreOffice Calc, a aba Resumo precisa somar os valores de B2 a B30 da aba Multas, no mesmo arquivo. Qual fórmula segue a sintaxe padrão do Calc?",
    alternativas: [
      "=SOMA(Multas.B2:B30)",
      "=SOMA(Multas!B2:B30)",
      "=SOMA(Multas;B2:B30)",
      "=SOMA(B2:B30.Multas)",
      "=SOMA(Multas:B2:B30)",
    ],
    correta: 0,
    explicacao:
      "No Calc, a referência a outra planilha usa ponto entre o nome da aba e a célula (Multas.B2:B30); com cifrão antes do nome, como em $Multas.B2, a aba fica fixa. O ponto de exclamação é o separador do Excel (Multas!B2:B30), e o ponto e vírgula separa argumentos.",
    origem: "banco",
  },
  {
    id: "prf-info-009",
    materia: "info",
    topico: "Apresentações (PowerPoint e Impress)",
    enunciado:
      "Durante uma palestra de educação para o trânsito, o instrutor está editando o slide 14 no PowerPoint e quer projetar a apresentação a partir dele, sem voltar ao início. Qual atalho faz isso?",
    alternativas: [
      "F5, que inicia a exibição pelo slide selecionado",
      "Ctrl+Enter, que projeta o slide em edição",
      "Shift+F5, que inicia a exibição pelo slide atual",
      "F7, que abre a apresentação a partir do cursor",
      "Esc, que alterna entre a edição e a apresentação",
    ],
    correta: 2,
    explicacao:
      "F5 sempre começa a apresentação pelo primeiro slide; Shift+F5 começa pelo slide atual, tanto no PowerPoint quanto no Impress. F7 aciona a verificação ortográfica, e Esc encerra a apresentação em andamento.",
    origem: "banco",
  },
  {
    id: "prf-info-010",
    materia: "info",
    topico: "Apresentações (PowerPoint e Impress)",
    enunciado:
      "A seção de comunicação precisa trocar o logotipo e a fonte do rodapé em todos os 45 slides de uma apresentação institucional, inclusive nos que forem criados depois. Qual recurso do PowerPoint faz isso com uma única alteração?",
    alternativas: [
      "Classificação de slides, que aplica a mudança a todos os slides selecionados",
      "Transição aplicada a todos os slides de uma vez",
      "Folheto mestre, que define o visual dos slides projetados",
      "Modo de exibição de leitura, que padroniza o rodapé",
      "Slide mestre, no modo de exibição de mestres",
    ],
    correta: 4,
    explicacao:
      "O slide mestre guarda layouts, fontes, cores e elementos repetidos, como logotipo e rodapé; o que se altera nele vale para todos os slides baseados nele, inclusive os novos. O folheto mestre cuida da impressão de folhetos, a classificação de slides serve para reordenar e organizar, e a transição é o efeito de passagem entre slides.",
    origem: "banco",
  },
  {
    id: "prf-info-011",
    materia: "info",
    topico: "Apresentações (PowerPoint e Impress)",
    enunciado:
      "No LibreOffice Impress, um servidor quer que, dentro do slide sobre a operação de feriado, os ícones das viaturas apareçam um de cada vez, a cada clique. Que recurso ele deve usar?",
    alternativas: [
      "Efeito de animação aplicado a cada ícone",
      "Transição de slides com avanço ao clicar",
      "Slide mestre com os ícones agrupados",
      "Classificador de slides, com um ícone por slide",
      "Ensaio cronometrado com intervalo de um clique",
    ],
    correta: 0,
    explicacao:
      "Animação é o efeito aplicado a um objeto dentro do slide e pode ser disparada a cada clique. Transição é o efeito na passagem de um slide para o outro. O slide mestre padroniza o visual, o classificador mostra miniaturas para reorganizar e o ensaio cronometrado grava o tempo de cada slide.",
    origem: "banco",
  },
  {
    id: "prf-info-012",
    materia: "info",
    topico: "Internet e intranet: conceitos e protocolos",
    enunciado:
      "Um portal de escalas e normas internas, que só abre para servidores conectados à rede do órgão, passa a ser liberado, com login próprio, a uma empresa terceirizada de manutenção de viaturas. Como se classificam o portal original e o acesso dado à empresa, respectivamente?",
    alternativas: [
      "Extranet e intranet",
      "Internet e intranet",
      "Intranet e rede local",
      "Intranet e extranet",
      "Internet e VPN pública",
    ],
    correta: 3,
    explicacao:
      "A intranet usa as tecnologias da internet, como navegador, HTTP e TCP/IP, mas é restrita aos membros da organização. Quando parte dela é aberta, de forma controlada, a um público externo autorizado, como fornecedores e parceiros, forma-se a extranet.",
    origem: "banco",
  },
  {
    id: "prf-info-013",
    materia: "info",
    topico: "Internet e intranet: conceitos e protocolos",
    enunciado:
      "Um notebook recém-ligado à rede de uma delegacia recebe sozinho endereço IP, máscara e gateway. Em seguida, ao digitar www.gov.br, o navegador descobre o IP do servidor do site. Quais protocolos cuidaram dessas duas tarefas, respectivamente?",
    alternativas: ["DNS e DHCP", "DHCP e DNS", "HTTP e FTP", "DHCP e SMTP", "TCP e HTTPS"],
    correta: 1,
    explicacao:
      "O DHCP entrega automaticamente a configuração de rede (endereço IP, máscara, gateway e servidores DNS). O DNS traduz nomes de domínio em endereços IP. HTTP e HTTPS transferem páginas, o FTP transfere arquivos e o SMTP envia e-mails.",
    origem: "banco",
  },
  {
    id: "prf-info-014",
    materia: "info",
    topico: "Internet e intranet: conceitos e protocolos",
    enunciado:
      "Um órgão passa a usar, pelo navegador, um serviço pronto de e-mail, agenda e edição de documentos, sem instalar programas nem manter servidores próprios. Qual modelo de computação em nuvem é esse?",
    alternativas: [
      "IaaS, infraestrutura como serviço",
      "PaaS, plataforma como serviço",
      "Nuvem privada, com servidores próprios",
      "Intranet hospedada na rede local",
      "SaaS, software como serviço",
    ],
    correta: 4,
    explicacao:
      "No SaaS, o fornecedor entrega o software pronto, usado pela internet, e cuida de servidores, atualizações e manutenção; Microsoft 365 e Gmail são exemplos. No PaaS, o cliente recebe uma plataforma para criar e hospedar as próprias aplicações; no IaaS, recebe infraestrutura, como máquinas virtuais, armazenamento e rede.",
    origem: "banco",
  },
  {
    id: "prf-info-015",
    materia: "info",
    topico: "Internet e intranet: conceitos e protocolos",
    enunciado:
      "Numa videoconferência entre a sede e um posto rodoviário, pequenas perdas de pacotes são toleráveis, mas o atraso não. Já um arquivo com autos de infração precisa chegar completo, sem nenhum trecho faltando. Quais protocolos de transporte combinam com cada caso, respectivamente?",
    alternativas: [
      "TCP na videoconferência e UDP no arquivo",
      "UDP nos dois casos, por ser mais rápido",
      "UDP na videoconferência e TCP no arquivo",
      "TCP nos dois casos, por ser mais seguro",
      "IP na videoconferência e DNS no arquivo",
    ],
    correta: 2,
    explicacao:
      "O TCP é orientado à conexão: confirma a entrega, reordena e reenvia o que se perdeu, garantindo o arquivo completo. O UDP dispensa essas verificações, o que o torna mais leve e adequado a voz e vídeo em tempo real, em que reenviar um pacote atrasado não adianta.",
    origem: "banco",
  },
  {
    id: "prf-info-016",
    materia: "info",
    topico: "Navegadores",
    enunciado:
      "Uma servidora abre uma janela InPrivate no Edge para consultar um sistema, baixa o PDF de uma portaria e adiciona a página aos favoritos. O que acontece quando ela fecha essa janela?",
    alternativas: [
      "Histórico e cookies da sessão somem; o PDF baixado e o favorito ficam",
      "O PDF baixado é apagado junto com o histórico, e o favorito é mantido",
      "Nada é apagado, porque o InPrivate só impede o registro no servidor do site",
      "O histórico permanece, mas os cookies e o favorito são apagados",
      "O provedor de internet deixa de ter registro dos sites acessados",
    ],
    correta: 0,
    explicacao:
      "A navegação privada (InPrivate no Edge, anônima no Chrome, privativa no Firefox) apaga, ao fechar a janela, o histórico, os cookies e os dados de formulário daquela sessão. Arquivos baixados e favoritos criados permanecem, e a rede, o provedor e os sites continuam podendo registrar o acesso.",
    origem: "banco",
  },
  {
    id: "prf-info-017",
    materia: "info",
    topico: "Navegadores",
    enunciado:
      "No Chrome, um agente fecha por engano a guia do sistema de ocorrências e quer reabri-la; depois, quer ver a lista de arquivos baixados no dia. Quais atalhos fazem isso, respectivamente?",
    alternativas: [
      "Ctrl+T e Ctrl+H",
      "Ctrl+Shift+N e Ctrl+J",
      "Ctrl+W e Ctrl+Shift+Del",
      "Ctrl+Shift+T e Ctrl+J",
      "Ctrl+Shift+T e Ctrl+D",
    ],
    correta: 3,
    explicacao:
      "Ctrl+Shift+T reabre a última guia fechada e Ctrl+J abre a página de downloads. Ctrl+T abre guia nova, Ctrl+H mostra o histórico, Ctrl+Shift+N abre janela anônima, Ctrl+D adiciona aos favoritos, Ctrl+W fecha a guia e Ctrl+Shift+Del abre a limpeza dos dados de navegação.",
    origem: "banco",
  },
  {
    id: "prf-info-018",
    materia: "info",
    topico: "Navegadores",
    enunciado:
      "Ao abrir um link recebido por mensagem, um servidor vê o cadeado e o endereço começando com https:// na barra do navegador. O que esses sinais garantem?",
    alternativas: [
      "Que o site pertence a um órgão público, porque só sites oficiais usam HTTPS",
      "Que a conexão é criptografada, o que não prova que o site seja legítimo",
      "Que o conteúdo foi verificado pelo navegador e está livre de vírus e golpes",
      "Que nenhum cookie será gravado no computador durante a visita",
      "Que o navegador entrou em modo privativo e não guardará histórico",
    ],
    correta: 1,
    explicacao:
      "O HTTPS e o cadeado indicam que os dados trafegam criptografados (TLS) entre o navegador e o servidor, cujo certificado foi emitido para aquele domínio. Golpistas também obtêm certificados para sites falsos; por isso, é preciso conferir o endereço exato antes de digitar senhas.",
    origem: "banco",
  },
  {
    id: "prf-info-019",
    materia: "info",
    topico: "Correio eletrônico",
    enunciado:
      "Um chefe de seção envia um e-mail a Ana no campo Para, a Bruno em Cc e a Carla em Cco. Bruno clica em Responder a todos. Quem recebe a resposta de Bruno?",
    alternativas: ["O chefe, Ana e Carla", "Só o chefe", "Ana e Carla", "O chefe, Ana, Bruno e Carla", "O chefe e Ana"],
    correta: 4,
    explicacao:
      "Responder a todos envia ao remetente e aos endereços visíveis em Para e Cc, exceto o de quem está respondendo. Quem estava em Cco não aparece para os demais destinatários, por isso Carla fica de fora: Bruno nem sabe que ela recebeu a mensagem original.",
    origem: "banco",
  },
  {
    id: "prf-info-020",
    materia: "info",
    topico: "Correio eletrônico",
    enunciado:
      "Uma servidora lê o e-mail institucional no computador e no celular e quer que as pastas, as mensagens lidas e as apagadas apareçam iguais nos dois aparelhos, com tudo guardado no servidor. Qual protocolo de recebimento ela deve configurar?",
    alternativas: [
      "POP3, que por padrão baixa as mensagens e as tira do servidor",
      "SMTP, que além de enviar sincroniza a caixa de entrada entre os aparelhos",
      "IMAP, que sincroniza as pastas e mantém as mensagens no servidor",
      "FTP, que transfere as pastas de e-mail entre os aparelhos",
      "DHCP, que configura a mesma caixa nos dois aparelhos",
    ],
    correta: 2,
    explicacao:
      "O IMAP mantém as mensagens no servidor e sincroniza pastas e marcações, como lida e apagada, entre todos os aparelhos. O POP3, por padrão, baixa as mensagens para um único dispositivo e as remove do servidor. O SMTP é o protocolo de envio.",
    origem: "banco",
  },
  {
    id: "prf-info-021",
    materia: "info",
    topico: "Correio eletrônico",
    enunciado:
      "Um agente recebe um e-mail com o PDF de um laudo anexado e precisa repassá-lo, com o anexo, ao setor jurídico, que não estava entre os destinatários. Qual comando faz isso sem que ele precise anexar o arquivo de novo?",
    alternativas: [
      "Encaminhar, que leva a mensagem e os anexos a novos destinatários",
      "Responder, incluindo o jurídico no campo Para, o que mantém o anexo",
      "Responder a todos, que repassa o anexo a quem estiver em Cc",
      "Responder, com o jurídico em Cco, para manter o anexo oculto",
      "Marcar a mensagem como lida e movê-la para a pasta do jurídico",
    ],
    correta: 0,
    explicacao:
      "Encaminhar repassa a mensagem a outros destinatários e inclui os anexos. Responder e Responder a todos, por padrão, não levam os anexos da mensagem original. Mover a mensagem para uma pasta só reorganiza a caixa de quem a recebeu.",
    origem: "banco",
  },
  {
    id: "prf-info-022",
    materia: "info",
    topico: "Busca e pesquisa na web",
    enunciado:
      "Um servidor quer encontrar no Google apenas arquivos PDF hospedados em sites do domínio gov.br que contenham a expressão exata “transporte de cargas perigosas”. Qual consulta faz isso?",
    alternativas: [
      "transporte de cargas perigosas site:gov.br filetype:pdf",
      "“transporte de cargas perigosas” -gov.br filetype:pdf",
      "“transporte de cargas perigosas” site:pdf filetype:gov.br",
      "“transporte de cargas perigosas” site:gov.br filetype:pdf",
      "“transporte de cargas perigosas” OR gov.br OR pdf",
    ],
    correta: 3,
    explicacao:
      "As aspas exigem a frase exata, site: limita a busca a um site ou domínio e filetype: restringe o tipo de arquivo. Sem aspas, as palavras podem aparecer separadas; o sinal de menos excluiria o gov.br, e o OR aceitaria qualquer um dos termos.",
    origem: "banco",
  },
  {
    id: "prf-info-023",
    materia: "info",
    topico: "Busca e pesquisa na web",
    enunciado:
      "Uma pesquisa sobre acidentes na BR-116 traz muitos resultados sobre motocicletas, que não interessam ao relatório. Como tirar dos resultados as páginas que mencionam essa palavra?",
    alternativas: [
      "Com o operador OR antes do termo, como em OR motocicleta",
      "Com o sinal de menos colado ao termo, como em -motocicleta",
      "Com aspas em volta do termo, como em “motocicleta”",
      "Com o operador site: antes do termo, como em site:motocicleta",
      "Com o sinal de mais colado ao termo, como em +motocicleta",
    ],
    correta: 1,
    explicacao:
      "O sinal de menos, colado à palavra, exclui as páginas que a contêm. O OR amplia a busca para um termo ou outro, as aspas exigem a palavra ou frase exata e site: restringe a um site ou domínio. O sinal de mais deixou de funcionar como operador no Google em 2011.",
    origem: "banco",
  },
  {
    id: "prf-info-024",
    materia: "info",
    topico: "Busca e pesquisa na web",
    enunciado:
      "Um analista quer páginas que tragam a palavra “cinto” ou a palavra “cadeirinha”, sem exigir as duas no mesmo resultado. Como deve escrever a busca no Google?",
    alternativas: [
      "cinto cadeirinha",
      "“cinto cadeirinha”",
      "cinto -cadeirinha",
      "site:cinto cadeirinha",
      "cinto OR cadeirinha",
    ],
    correta: 4,
    explicacao:
      "O OR, escrito em maiúsculas, aceita páginas com qualquer um dos termos. Sem operador, a busca prioriza páginas com as duas palavras; entre aspas, exige a frase exata; o sinal de menos exclui a palavra seguinte; e site: espera um site ou domínio.",
    origem: "banco",
  },
  {
    id: "prf-info-025",
    materia: "info",
    topico: "Grupos de discussão",
    enunciado:
      "Os agentes administrativos de uma regional criam um grupo em que cada mensagem enviada a um único endereço é redistribuída automaticamente para a caixa de entrada de todos os inscritos. Que ferramenta é essa?",
    alternativas: [
      "Fórum web, que envia cada mensagem como cópia oculta aos membros",
      "Chat, comunicação síncrona que exige todos conectados ao mesmo tempo",
      "Lista de discussão, que distribui por e-mail cada mensagem recebida",
      "Newsgroup, que publica as mensagens apenas na intranet do órgão",
      "Webmail compartilhado, em que todos usam a mesma senha da caixa",
    ],
    correta: 2,
    explicacao:
      "Na lista de discussão, a mensagem enviada ao endereço da lista chega, por e-mail, a todos os inscritos. No fórum, as mensagens ficam numa página web, organizadas por tópicos; o chat é síncrono; e os newsgroups da Usenet circulam por servidores de notícias próprios.",
    origem: "banco",
  },
  {
    id: "prf-info-026",
    materia: "info",
    topico: "Grupos de discussão",
    enunciado:
      "Num fórum interno sobre o uso do sistema de multas, as mensagens só são publicadas depois de aprovadas, e quem chega dias depois consegue ler toda a conversa de cada tópico. Que duas características aparecem nessa descrição?",
    alternativas: [
      "Moderação e comunicação assíncrona",
      "Moderação e comunicação síncrona",
      "Criptografia e comunicação síncrona",
      "Cópia oculta e comunicação assíncrona",
      "Netiqueta e transmissão em tempo real",
    ],
    correta: 0,
    explicacao:
      "A aprovação prévia das mensagens é tarefa do moderador. Como as mensagens ficam guardadas e cada participante lê e responde quando pode, a comunicação é assíncrona; síncrona é a conversa em tempo real, como num chat ou numa videochamada.",
    origem: "banco",
  },
  {
    id: "prf-info-027",
    materia: "info",
    topico: "Sistemas de informação",
    enunciado:
      "Na análise de acidentes de um trecho da BR-116 aparecem: a hora de cada ocorrência registrada no sistema; um gráfico que mostra 60% dos acidentes do trecho entre 18h e 20h; e a conclusão do chefe, apoiada na experiência, de que esse horário exige reforço na fiscalização. Como se classificam esses três elementos, respectivamente?",
    alternativas: [
      "Informação, dado e conhecimento",
      "Dado, conhecimento e informação",
      "Metadado, dado e informação",
      "Dado, informação e conhecimento",
      "Informação, conhecimento e dado",
    ],
    correta: 3,
    explicacao:
      "Dado é o registro bruto, sem contexto, como a hora de cada ocorrência. Informação é o dado organizado e com significado, como a concentração de acidentes num horário. Conhecimento é a informação interpretada pela experiência, que orienta a ação, como a conclusão de reforçar a fiscalização.",
    origem: "banco",
  },
  {
    id: "prf-info-028",
    materia: "info",
    topico: "Sistemas de informação",
    enunciado:
      "Um gestor usa um sistema que, com os dados das operações anteriores, simula o efeito de diferentes distribuições do efetivo sobre o número de acidentes no feriado, testando hipóteses do tipo “e se…?”. Que tipo de sistema de informação é esse?",
    alternativas: [
      "Sistema de processamento de transações (SPT)",
      "Sistema de apoio à decisão (SAD)",
      "Sistema de informação gerencial (SIG)",
      "Sistema integrado de gestão (ERP)",
      "Sistema de automação de escritório",
    ],
    correta: 1,
    explicacao:
      "O SAD apoia decisões pouco estruturadas com modelos e simulações do tipo “e se…?”. O SPT registra as operações do dia a dia, como cada auto lavrado; o SIG resume esses registros em relatórios periódicos para a gerência; e o ERP integra áreas como finanças, pessoal e compras.",
    origem: "banco",
  },
  {
    id: "prf-info-029",
    materia: "info",
    topico: "Sistemas de informação",
    enunciado:
      "Uma foto de acidente anexada a um boletim traz, nas propriedades do arquivo, a data e a hora da captura, o modelo do celular e as coordenadas de GPS. Como se chamam essas informações sobre o próprio arquivo?",
    alternativas: [
      "Cookies, gravados pelo celular para lembrar o usuário",
      "Conhecimento, por resultar da experiência de quem fotografou",
      "Backup, cópia de segurança embutida na imagem",
      "Hash, código que garante o sigilo da imagem",
      "Metadados, dados que descrevem o próprio arquivo",
    ],
    correta: 4,
    explicacao:
      "Metadados são dados sobre dados: descrevem o arquivo, como autor, data de criação, tamanho, aparelho e localização. Nas fotos, costumam seguir o padrão EXIF. Como podem revelar o local exato, merecem cuidado antes de uma imagem ser publicada.",
    origem: "banco",
  },
  {
    id: "prf-info-030",
    materia: "info",
    topico: "Segurança da informação",
    enunciado:
      "Um ataque deixa o sistema de emissão de multas fora do ar por um dia inteiro, sem que nenhum dado seja lido ou alterado. Qual princípio da segurança da informação foi atingido?",
    alternativas: ["Confidencialidade", "Integridade", "Disponibilidade", "Não repúdio", "Autenticidade"],
    correta: 2,
    explicacao:
      "Disponibilidade é a garantia de que a informação e os sistemas estejam acessíveis quando forem necessários; tirar o sistema do ar a atinge diretamente. A confidencialidade seria quebrada por um acesso indevido aos dados, e a integridade, por uma alteração indevida.",
    origem: "banco",
  },
  {
    id: "prf-info-031",
    materia: "info",
    topico: "Segurança da informação",
    enunciado:
      "Um programa malicioso se espalha sozinho pelos computadores de uma regional, enviando cópias de si mesmo pela rede e explorando uma falha do sistema, sem que ninguém precise abrir um arquivo. Que tipo de praga é essa?",
    alternativas: ["Worm", "Vírus de macro", "Cavalo de troia", "Keylogger", "Adware"],
    correta: 0,
    explicacao:
      "O worm se propaga automaticamente pela rede, mandando cópias de si mesmo e explorando vulnerabilidades, sem depender de um arquivo hospedeiro. O vírus precisa se anexar a um arquivo e ser executado; o cavalo de troia se disfarça de programa útil; o keylogger grava o que é digitado; e o adware exibe propaganda.",
    origem: "banco",
  },
  {
    id: "prf-info-032",
    materia: "info",
    topico: "Segurança da informação",
    enunciado:
      "Um servidor assina digitalmente, com seu certificado ICP-Brasil, um relatório enviado por e-mail, sem criptografar o conteúdo. Quais garantias essa assinatura oferece?",
    alternativas: [
      "Sigilo, integridade e disponibilidade do relatório",
      "Sigilo e autenticidade, mas não integridade",
      "Apenas sigilo, porque o conteúdo fica cifrado com a chave pública",
      "Autenticidade, integridade e não repúdio, mas não sigilo",
      "Disponibilidade e não repúdio, mas não autenticidade",
    ],
    correta: 3,
    explicacao:
      "A assinatura digital é gerada com a chave privada do autor e conferida com a chave pública dele: confirma quem assinou (autenticidade), acusa qualquer alteração posterior (integridade) e impede que o autor negue a autoria (não repúdio). Ela não esconde o conteúdo; para ter sigilo, é preciso cifrá-lo.",
    origem: "banco",
  },
  {
    id: "prf-info-033",
    materia: "info",
    topico: "Segurança da informação",
    enunciado:
      "Mesmo digitando corretamente o endereço do banco no navegador, um servidor é levado a uma página falsa, idêntica à verdadeira, porque o serviço de DNS da rede foi adulterado. Que golpe é esse?",
    alternativas: [
      "Phishing por mensagem com link falso",
      "Pharming",
      "Ransomware",
      "Keylogger",
      "Spoofing de remetente de e-mail",
    ],
    correta: 1,
    explicacao:
      "No pharming, o DNS é adulterado (no computador, no roteador ou no servidor) e o endereço correto passa a apontar para um servidor falso. No phishing comum, a vítima é atraída por uma mensagem com link enganoso; aqui, ela digitou o endereço certo. O ransomware sequestra dados e o keylogger grava o que é digitado.",
    origem: "banco",
  },
];
