import type { QuestaoPrf } from "../../data/prf";

export const QUESTOES_PRF_INFO: QuestaoPrf[] = [
  {
    id: "prf-info-001",
    materia: "info",
    topico: "Editores de texto (Word e Writer)",
    subassunto: "Atalhos do Word em português e do Writer",
    dificuldade: 5,
    raciocinio: "Tradução de atalhos entre programas: identificar o efeito de cada tecla e comparar o resultado final",
    enunciado:
      "Uma agente administrativa revisa dois ofícios. No LibreOffice Writer, ela pressiona, em sequência, Ctrl+A, Ctrl+L e Ctrl+S. Depois, no Word do Microsoft 365 em português, com outro arquivo aberto, pressiona Ctrl+T, Ctrl+Q e Ctrl+B. Considerando os atalhos padrão de cada programa, o resultado das duas sequências foi",
    alternativas: [
      "no Writer, texto alinhado à esquerda e sublinhado; no Word, alinhado à esquerda e em negrito.",
      "nos dois, texto alinhado à esquerda, mas só no Writer o arquivo foi salvo.",
      "nos dois, todo o texto alinhado à esquerda e o arquivo salvo.",
      "no Writer, a busca foi aberta e o arquivo, salvo; no Word, o texto ficou alinhado à direita.",
      "nos dois, todo o texto selecionado e alinhado à esquerda, sem salvar o arquivo.",
    ],
    correta: 2,
    explicacao:
      "No Writer valem as letras do inglês: Ctrl+A seleciona tudo (all), Ctrl+L alinha à esquerda (left) e Ctrl+S salva (save). No Word em português, as mesmas ações usam outras teclas: Ctrl+T seleciona tudo, Ctrl+Q alinha à esquerda e Ctrl+B salva. As teclas são diferentes, mas o efeito das duas sequências é idêntico: todo o texto alinhado à esquerda e o arquivo salvo.",
    explicacaoErradas:
      "Sublinhar é Ctrl+U no Writer e Ctrl+S no Word; negrito é Ctrl+B no Writer e Ctrl+N no Word. Quem lê o Ctrl+S do Writer ou o Ctrl+B do Word com o hábito do outro programa vê sublinhado ou negrito onde houve gravação do arquivo. A busca é Ctrl+F no Writer (Ctrl+L é a do Word), e alinhar à direita é Ctrl+R no Writer e Ctrl+G no Word, teclas que não aparecem nas sequências. E os dois arquivos foram salvos.",
    pegadinha:
      "As duas sequências têm teclas diferentes e o mesmo efeito. A armadilha é ler o Ctrl+S do Writer ou o Ctrl+B do Word com a cabeça no outro programa e enxergar sublinhado ou negrito onde houve só a gravação do arquivo.",
    conhecimento:
      "Word em português × Writer: selecionar tudo Ctrl+T × Ctrl+A; negrito Ctrl+N × Ctrl+B; sublinhado Ctrl+S × Ctrl+U; salvar Ctrl+B × Ctrl+S; alinhar à esquerda Ctrl+Q × Ctrl+L; direita Ctrl+G × Ctrl+R; centralizar Ctrl+E e justificar Ctrl+J nos dois; localizar Ctrl+L × Ctrl+F; substituir Ctrl+U × Ctrl+H.",
    origem: "banco",
  },
  {
    id: "prf-info-002",
    materia: "info",
    topico: "Editores de texto (Word e Writer)",
    subassunto: "Localizar e substituir com palavras inteiras",
    dificuldade: 4,
    raciocinio: "Análise de procedimento: prever o efeito de cada opção da substituição sobre palavras parecidas",
    enunciado:
      "Num relatório de 60 páginas editado no LibreOffice Writer, um servidor precisa trocar a sigla “PRE” pela expressão “Polícia Rodoviária Estadual”. O texto, porém, também traz as palavras “PREFEITURA” e “prestação”, que não podem ser alteradas. O procedimento que resolve a tarefa de uma só vez é",
    alternativas: [
      "Ctrl+H, com Somente palavras inteiras marcada, e Substituir todos.",
      "Ctrl+H, com Diferenciar maiúsculas e minúsculas marcada, e Substituir todos.",
      "Ctrl+F, que substitui a sigla apenas onde ela aparece como palavra isolada.",
      "Ctrl+U, com Somente palavras inteiras marcada, e Substituir todos.",
      "Ctrl+H, com Expressões regulares desmarcada, que já ignora trechos de palavras.",
    ],
    correta: 0,
    explicacao:
      "Com a opção Somente palavras inteiras, o Writer só troca “PRE” quando a sigla aparece isolada, e deixa intactas “PREFEITURA” e “prestação”, em que essas letras são apenas o começo de uma palavra maior. No Writer, Ctrl+H abre Localizar e substituir, e o botão Substituir todos faz a troca no documento inteiro de uma só vez.",
    explicacaoErradas:
      "Diferenciar maiúsculas e minúsculas protege “prestação”, escrita em minúsculas, mas não “PREFEITURA”, que começa com as mesmas três letras maiúsculas e seria corrompida. No Writer, Ctrl+F só abre a barra de pesquisa, que não substitui nada, e Ctrl+U sublinha o texto; é no Word que Ctrl+U abre a substituição. Deixar Expressões regulares desmarcada não impede a troca dentro de palavras maiores: a busca comum encontra o trecho em qualquer posição.",
    pegadinha:
      "A opção de diferenciar maiúsculas parece suficiente, porque resolve “prestação”. Mas “PREFEITURA” também começa com “PRE” em maiúsculas, e só a busca por palavras inteiras protege as duas.",
    conhecimento:
      "Substituir: Ctrl+H no Writer e Ctrl+U no Word. Localizar: Ctrl+F no Writer e Ctrl+L no Word. Opções úteis: palavras inteiras (não pega trechos de palavras maiores), diferenciar maiúsculas e minúsculas, expressões regulares (padrões de texto) e busca por formatação ou estilo.",
    origem: "banco",
  },
  {
    id: "prf-info-003",
    materia: "info",
    topico: "Editores de texto (Word e Writer)",
    subassunto: "Formatos de documento e de modelo com macros",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: distinguir documento e modelo, com e sem macros, pelas extensões",
    enunciado:
      "A seção de pessoal de uma superintendência da PRF mantém um ofício-padrão com macros que preenchem automaticamente o nome e a matrícula do servidor. Sobre os formatos do Word envolvidos nessa rotina, considere as afirmativas:\n\nI. O documento do Word habilitado para macros é salvo com a extensão .docm.\nII. O modelo .dotx guarda estilos e textos-padrão, além das macros gravadas nele.\nIII. Se o arquivo com macros for salvo como .docx, as macros não são mantidas, e o Word avisa disso antes de gravar.\nIV. Um modelo com macros, usado como base para novos ofícios, é salvo com a extensão .dotm.\n\nEstá correto o que se afirma em",
    alternativas: ["I e III, apenas.", "II e IV, apenas.", "I, II e III, apenas.", "I, III e IV, apenas.", "I, II, III e IV."],
    correta: 3,
    explicacao:
      "I: .docm é o documento do Word habilitado para macros. III: ao salvar como .docx, formato que não comporta macros, o Word avisa que o projeto VBA não será mantido e pede confirmação; se o usuário prosseguir, as macros se perdem. IV: o modelo com macros é o .dotm, que serve de base para novos documentos. Logo, I, III e IV.",
    explicacaoErradas:
      "II está errada: o .dotx é modelo sem macros; guarda estilos, formatação e textos-padrão, mas não o código VBA, que exige o .dotm. Por isso caem as combinações com II, inclusive a que reúne todas as afirmativas, e a que deixa de fora a IV, que está certa.",
    pegadinha:
      "A letra “m” é a marca das macros: .docm e .dotm. O .dotx parece completo por ser modelo, mas o “x” indica formato sem macros, tanto no documento quanto no modelo.",
    conhecimento:
      "Word: .docx (documento), .docm (documento com macros), .dotx (modelo), .dotm (modelo com macros) e .doc (formato antigo, 97-2003). Writer: .odt (documento) e .ott (modelo), no padrão ODF. O modelo abre como documento novo, sem alterar o arquivo original.",
    origem: "banco",
  },
  {
    id: "prf-info-004",
    materia: "info",
    topico: "Editores de texto (Word e Writer)",
    subassunto: "Seções e cabeçalhos vinculados no Word",
    dificuldade: 5,
    raciocinio: "Análise de procedimento: prever o efeito do vínculo entre seções antes de editar o cabeçalho",
    enunciado:
      "Para deixar em paisagem só o anexo que fica no meio de um relatório, um servidor inseriu no Word quebras de seção do tipo Próxima página antes e depois dele. Ao digitar no cabeçalho do anexo “Anexo I – Ocorrências por rodovia”, o cabeçalho de todo o relatório mudou junto, e ele desfez a alteração. Para que o novo texto apareça só no cabeçalho do anexo, ele deve, antes de digitá-lo de novo,",
    alternativas: [
      "substituir as quebras de seção por quebras de página, que separam os cabeçalhos.",
      "desativar Vincular ao Anterior no cabeçalho do anexo e no da seção seguinte.",
      "desativar Vincular ao Anterior apenas no cabeçalho do anexo, o que já isola as demais seções.",
      "marcar Primeira Página Diferente no anexo, que desfaz o vínculo com o cabeçalho do relatório.",
      "aplicar ao texto do anexo um estilo próprio, que passa a controlar o cabeçalho da seção.",
    ],
    correta: 1,
    explicacao:
      "Cada seção nova nasce com o cabeçalho vinculado ao da seção anterior, e por isso a edição se espalhou. Com o anexo no meio, o relatório tem três seções: a do anexo está ligada à primeira, e a seguinte está ligada à do anexo. É preciso desativar Vincular ao Anterior (guia Cabeçalho e Rodapé) no anexo e também na seção que vem depois dele; só assim o novo texto fica restrito ao anexo, e o fim do relatório mantém o cabeçalho original.",
    explicacaoErradas:
      "Desvincular só o anexo não basta: a seção seguinte continua ligada a ele e passaria a exibir “Anexo I”. A quebra de página não cria seção, então não separa cabeçalhos e ainda impediria a orientação paisagem só no anexo. Primeira Página Diferente cria um cabeçalho próprio para a primeira página da seção, mas não desfaz o vínculo entre seções. Estilo de parágrafo formata o texto e não controla o conteúdo do cabeçalho.",
    pegadinha:
      "Desativar o vínculo só no anexo parece resolver, mas a seção seguinte continua ligada ao anexo e herdaria o novo cabeçalho. Com o anexo no meio do documento, são dois vínculos a desfazer.",
    conhecimento:
      "Quebra de seção (Layout > Quebras) permite orientação, margens, colunas, numeração e cabeçalhos próprios em cada trecho. Toda seção nova começa com Vincular ao Anterior ativado; desativá-lo torna o cabeçalho independente da seção anterior, mas não da seguinte. No Writer, o equivalente é usar estilos de página diferentes.",
    origem: "banco",
  },
  {
    id: "prf-info-005",
    materia: "info",
    topico: "Planilhas eletrônicas (Excel e Calc)",
    subassunto: "Copiar × recortar fórmulas com referência absoluta",
    dificuldade: 5,
    raciocinio: "Cálculo de referências: aplicar o deslocamento ao copiar e reconhecer que recortar não ajusta a fórmula",
    enunciado:
      "Em uma planilha de diárias do Excel, a célula D2 contém =B2*C2*$G$1. Um servidor copia D2 e cola em D5. Em seguida, recorta D2 e cola em F8. As fórmulas que ficam em D5 e em F8 são",
    alternativas: [
      "=B5*C5*$G$1 em D5 e =D8*E8*$G$1 em F8",
      "=B5*C5*$G$4 em D5 e =B2*C2*$G$1 em F8",
      "=B2*C2*$G$1 em D5 e =D8*E8*$G$1 em F8",
      "=B5*C5*$G$1 em D5 e =D8*E8*$G$7 em F8",
      "=B5*C5*$G$1 em D5 e =B2*C2*$G$1 em F8",
    ],
    correta: 4,
    explicacao:
      "Ao copiar D2 para D5, o deslocamento é de três linhas e nenhuma coluna: B2 e C2 viram B5 e C5, e $G$1, absoluta, não muda. Ao recortar e colar, a fórmula é movida sem ajuste nenhum, e F8 recebe =B2*C2*$G$1, que continua apontando para as mesmas células.",
    explicacaoErradas:
      "=D8*E8*$G$1 seria o resultado de copiar D2 para F8 (deslocamento de duas colunas e seis linhas), e não de recortar. $G$4 e $G$7 tratam como relativa uma referência travada nas duas partes pelos cifrões. Manter =B2*C2*$G$1 em D5 ignora que a cópia ajusta as referências relativas.",
    pegadinha:
      "A conta do deslocamento só vale para a cópia. Quem aplica o mesmo raciocínio ao recorte chega a =D8*E8*$G$1, que parece correta por manter o $G$1, mas o recorte não altera nenhuma referência.",
    conhecimento:
      "Copiar e colar ajusta as referências relativas pelo deslocamento de linhas e colunas; as partes com $ ficam fixas ($A$1 total, $A1 só a coluna, A$1 só a linha). Recortar e colar move a fórmula sem alterá-la, e as fórmulas que apontavam para a célula movida passam a apontar para o novo endereço.",
    origem: "banco",
  },
  {
    id: "prf-info-006",
    materia: "info",
    topico: "Planilhas eletrônicas (Excel e Calc)",
    subassunto: "PROCV: coluna de busca, #N/D e correspondência aproximada",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: argumentos do PROCV, erro sem correspondência e limite da coluna de busca",
    enunciado:
      "Na aba Viaturas de uma planilha do Excel, o intervalo A2:D50 traz, para cada veículo, a placa (coluna A), o modelo (coluna B), a lotação (coluna C) e a quilometragem (coluna D). A placa procurada está digitada em G1. Considere as afirmativas:\n\nI. =PROCV(G1;A2:D50;3;FALSO) devolve a lotação da viatura cuja placa está em G1.\nII. Se a placa de G1 não constar da coluna A, a fórmula da afirmativa I devolve o erro #N/D.\nIII. Para obter a placa a partir do modelo digitado em H1, basta usar =PROCV(H1;A2:D50;1;FALSO).\nIV. Com VERDADEIRO no último argumento, o resultado só é confiável se a coluna A estiver em ordem crescente.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "I, II e IV, apenas.", "II e III, apenas.", "I, III e IV, apenas.", "I, II, III e IV."],
    correta: 1,
    explicacao:
      "I: o PROCV procura G1 na primeira coluna do intervalo, a A, e devolve a terceira, a C (lotação); FALSO exige correspondência exata. II: sem correspondência exata, o resultado é #N/D. IV: com VERDADEIRO (correspondência aproximada), o Excel supõe a primeira coluna em ordem crescente; fora dessa ordem, o resultado pode sair errado sem aviso. Logo, I, II e IV.",
    explicacaoErradas:
      "III está errada: o PROCV só procura na primeira coluna do intervalo, que é a das placas; o modelo de H1 seria procurado entre as placas, e o resultado seria #N/D ou um valor sem sentido. Para buscar à esquerda da coluna pesquisada, usa-se PROCX ou ÍNDICE com CORRESP. Por isso caem as combinações com III, e a que deixa de fora a IV, que está certa.",
    pegadinha:
      "A afirmativa III parece natural, porque o índice 1 aponta para a coluna das placas. Mas o PROCV nunca procura em outra coluna que não a primeira do intervalo, e o modelo não está nela.",
    conhecimento:
      "PROCV(valor; intervalo; nº da coluna; [procurar_intervalo]): procura só na 1ª coluna e devolve a coluna indicada; FALSO = exata (#N/D se não achar); VERDADEIRO ou omitido = aproximada, com a 1ª coluna em ordem crescente. Busca à esquerda: PROCX ou ÍNDICE+CORRESP. No Calc, a função também se chama PROCV.",
    origem: "banco",
  },
  {
    id: "prf-info-007",
    materia: "info",
    topico: "Planilhas eletrônicas (Excel e Calc)",
    subassunto: "ARRED, TRUNCAR e INT com número negativo",
    dificuldade: 5,
    raciocinio: "Cálculo: aplicar arredondamento, corte e inteiro inferior a um valor negativo",
    enunciado:
      "Em uma planilha de controle de combustível, a célula A1 mostra a diferença entre o consumo previsto e o realizado de uma viatura: -48,768 litros. Os resultados de =ARRED(A1;1), =TRUNCAR(A1;1) e =INT(A1) são, respectivamente,",
    alternativas: ["-48,8; -48,8; -48", "-48,7; -48,7; -49", "-48,8; -48,7; -48", "-48,8; -48,7; -49", "-48,7; -48,8; -49"],
    correta: 3,
    explicacao:
      "ARRED arredonda pela regra comum: -48,768 com uma casa decimal vira -48,8. TRUNCAR só corta as casas excedentes, sem arredondar: -48,7. INT devolve o inteiro imediatamente inferior, isto é, desce na reta numérica; para um número negativo com parte decimal, isso dá -49, e não -48.",
    explicacaoErradas:
      "-48,7 para o ARRED ignora que o 6 da segunda casa arredonda a primeira para cima, em valor absoluto. -48,8 para o TRUNCAR trata o corte como arredondamento. -48 para o INT seria o resultado de TRUNCAR(A1;0), que apenas descarta os decimais; o INT desce para o inteiro menor.",
    pegadinha:
      "Com números positivos, INT e TRUNCAR dão o mesmo resultado, e é isso que leva ao -48. Com negativos, INT vai para o inteiro menor (-49), enquanto TRUNCAR só descarta os decimais.",
    conhecimento:
      "ARRED(número; casas): regra comum, com o 5 arredondando para longe do zero; casas negativas arredondam à esquerda da vírgula (ARRED(1234;-2) = 1200). TRUNCAR(número; casas): corta sem arredondar. INT(número): inteiro menor ou igual (INT(-5,1) = -6). ARREDONDAR.PARA.CIMA e ARREDONDAR.PARA.BAIXO se afastam ou se aproximam do zero.",
    origem: "banco",
  },
  {
    id: "prf-info-008",
    materia: "info",
    topico: "Planilhas eletrônicas (Excel e Calc)",
    subassunto: "Referência a outra aba no Excel e no Calc",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: sintaxe de referência entre abas em cada programa",
    enunciado:
      "Uma planilha de controle de autuações tem uma aba chamada Autos, com valores em B2:B30, e outra chamada Autos 2026, com valores no mesmo intervalo. Considere as afirmativas sobre fórmulas digitadas em outra aba do mesmo arquivo:\n\nI. No LibreOffice Calc, =SOMA(Autos.B2:B30) soma os valores da aba Autos.\nII. No Excel, a mesma fórmula da afirmativa I é aceita, porque o ponto é separador comum aos dois programas.\nIII. No Excel, =SOMA('Autos 2026'!B2:B30) soma os valores da aba Autos 2026, cujo nome tem espaço.\nIV. No Calc, o nome da aba e o intervalo são separados por ponto e vírgula, como em =SOMA(Autos;B2:B30).\n\nEstá correto o que se afirma em",
    alternativas: ["I e III, apenas.", "I e II, apenas.", "II e IV, apenas.", "I, II e III, apenas.", "III e IV, apenas."],
    correta: 0,
    explicacao:
      "I: no Calc, aba e célula se separam por ponto, e =SOMA(Autos.B2:B30) é válida. III: no Excel, o separador é o ponto de exclamação, e o nome de aba com espaço vai entre apóstrofos: =SOMA('Autos 2026'!B2:B30). Logo, I e III.",
    explicacaoErradas:
      "II está errada: o Excel não aceita o ponto como separador entre aba e célula; o dele é o ponto de exclamação (Autos!B2:B30). IV está errada: o ponto e vírgula separa argumentos da função, e não a aba da célula; nessa fórmula, Autos seria lido como um nome definido, e B2:B30 como intervalo da própria aba. Caem, assim, as combinações com II ou IV.",
    pegadinha:
      "Os dois programas usam separadores diferentes: ponto no Calc, exclamação no Excel. A afirmativa II tenta convencer de que o ponto vale nos dois, e a IV troca o separador da referência pelo separador de argumentos.",
    conhecimento:
      "Outra aba: Excel Aba!A1; Calc Aba.A1 (exibido como $Aba.A1). Nome com espaço: Excel 'Aba 1'!A1; Calc 'Aba 1'.A1. Outro arquivo no Excel: [Frota.xlsx]Aba!A1. O ponto e vírgula separa argumentos nas versões em português.",
    origem: "banco",
  },
  {
    id: "prf-info-009",
    materia: "info",
    topico: "Apresentações (PowerPoint e Impress)",
    subassunto: "Comandos durante a exibição de slides",
    dificuldade: 5,
    raciocinio: "Sequência de comandos: início pelo slide atual, tela preta e salto direto durante a exibição",
    enunciado:
      "Durante um treinamento sobre fiscalização de transporte de cargas, um servidor edita no PowerPoint o slide 14 de uma apresentação de 40 slides. Ele quer iniciar a exibição a partir desse slide; depois, escurecer totalmente a tela enquanto responde a perguntas; por fim, saltar direto ao slide 30. A sequência de comandos que faz isso é",
    alternativas: [
      "F5; tecla B; digitar 30 e pressionar Enter",
      "Shift+F5; tecla W; digitar 30 e pressionar Enter",
      "Shift+F5; tecla B; digitar 30 e pressionar Enter",
      "F5; tecla W; Page Down até o slide 30",
      "Shift+F5; tecla Esc; digitar 30 e pressionar Enter",
    ],
    correta: 2,
    explicacao:
      "Shift+F5 inicia a exibição a partir do slide atual (F5 começa do primeiro). Durante a exibição, a tecla B deixa a tela preta, e a mesma tecla a restaura. Digitar o número do slide e pressionar Enter salta direto para ele. O Impress aceita essas mesmas teclas.",
    explicacaoErradas:
      "F5 começa pelo primeiro slide, e não pelo atual. A tecla W deixa a tela branca, e não preta. Esc encerra a exibição, em vez de escurecer a tela. Page Down avança um slide por vez, sem o salto direto pedido.",
    pegadinha:
      "B de black, W de white: as duas escondem o slide, mas só a B escurece a tela. E o salto direto não exige menu: basta digitar o número do slide e pressionar Enter.",
    conhecimento:
      "Na exibição: F5 começa do início e Shift+F5, do slide atual; B = tela preta; W = tela branca; número + Enter = vai ao slide; Esc encerra; N, Enter, espaço ou seta avançam; P, Backspace ou seta voltam. No Impress, as mesmas teclas.",
    origem: "banco",
  },
  {
    id: "prf-info-010",
    materia: "info",
    topico: "Apresentações (PowerPoint e Impress)",
    subassunto: "Slide mestre e formatação manual",
    dificuldade: 5,
    raciocinio: "Diagnóstico de situação: precedência entre a formatação direta do slide e o slide mestre",
    enunciado:
      "No PowerPoint, uma servidora trocou a fonte e a cor do rodapé no slide mestre de uma apresentação institucional. Todos os slides exibiram o novo rodapé, menos o 7 e o 12, nos quais um colega, semanas antes, havia selecionado o texto do rodapé e aplicado outra fonte pela guia Página Inicial. O que explica o resultado?",
    alternativas: [
      "O mestre só vale para slides criados depois; os antigos precisam de novo mestre.",
      "Os slides 7 e 12 estão ocultos, e o mestre não altera slides ocultos na exibição.",
      "O folheto mestre controla o rodapé; a mudança deveria ter sido feita nele.",
      "A alteração só vale ao reabrir o arquivo; basta salvar, fechar e abrir de novo.",
      "A formatação direta desses slides prevalece; Redefinir os faz seguir o mestre.",
    ],
    correta: 4,
    explicacao:
      "A formatação aplicada diretamente a um slide prevalece sobre a do mestre. Por isso, a fonte que o colega escolheu pela guia Página Inicial continua no rodapé dos slides 7 e 12. O comando Redefinir (Página Inicial > Slides) devolve os espaços reservados à formatação do layout e do mestre.",
    explicacaoErradas:
      "O mestre alcança também os slides já existentes, tanto que os demais foram atualizados. Slide oculto deixa de aparecer na exibição, mas continua seguindo o mestre na edição. O folheto mestre formata só a impressão de folhetos, e não os slides. Não é preciso reabrir o arquivo: a mudança no mestre aparece na hora.",
    pegadinha:
      "Como o mestre atualizou o resto da apresentação, parece haver defeito nos slides 7 e 12. A causa é a formatação aplicada à mão, que sempre vence a do mestre até que o slide seja redefinido.",
    conhecimento:
      "Hierarquia: mestre > layouts > slides; a formatação direta no slide prevalece. Redefinir (Página Inicial > Slides) volta ao layout. O folheto mestre e o mestre de anotações valem só para impressão. No Impress: Exibir > Slide mestre.",
    origem: "banco",
  },
  {
    id: "prf-info-011",
    materia: "info",
    topico: "Apresentações (PowerPoint e Impress)",
    subassunto: "Apresentação personalizada no Impress",
    dificuldade: 4,
    raciocinio: "Escolha de recurso: exibir um subconjunto de slides em outra ordem sem alterar a apresentação original",
    enunciado:
      "Um instrutor montou no LibreOffice Impress uma apresentação de 40 slides sobre atendimento a acidentes. Para a turma da manhã, ele quer exibir só 12 desses slides, numa ordem diferente da original; para a turma da tarde, a apresentação inteira, na ordem normal. Sem duplicar o arquivo, o recurso adequado é",
    alternativas: [
      "uma apresentação personalizada, com os 12 slides na ordem desejada.",
      "ocultar os 28 slides restantes, que voltam sozinhos na turma da tarde.",
      "reordenar no Classificador de slides e desfazer depois da primeira turma.",
      "um slide mestre só com os 12 slides que a turma da manhã verá.",
      "transições automáticas que pulam os slides não selecionados.",
    ],
    correta: 0,
    explicacao:
      "A apresentação personalizada guarda, dentro do mesmo arquivo, uma lista própria de slides, em qualquer ordem. A turma da manhã vê os 12 escolhidos na sequência definida, e a da tarde assiste à apresentação completa, sem nenhuma alteração no original. No Impress, fica em Apresentação de slides > Apresentação de slides personalizada.",
    explicacaoErradas:
      "Ocultar slides não muda a ordem dos que sobram, e os ocultos não voltam sozinhos: seria preciso reexibi-los antes da turma da tarde. Reordenar no Classificador altera o arquivo original e obriga a refazer tudo a cada turma. O slide mestre define formatação e layout, e não quais slides são exibidos. Transições controlam o efeito e o tempo da passagem entre slides; não escolhem quais aparecem.",
    pegadinha:
      "Ocultar slides parece resolver, porque esconde os 28 que sobram. Mas não muda a ordem dos 12 restantes e exige reexibir tudo depois; a apresentação personalizada faz as duas coisas sem tocar no original.",
    conhecimento:
      "Apresentação personalizada: lista nomeada de slides, em qualquer ordem, no mesmo arquivo (PowerPoint: Apresentação de Slides > Apresentação de Slides Personalizada). Ocultar slide: ele continua no arquivo, mas é pulado na exibição. Classificador de slides: visão em miniaturas, própria para reordenar.",
    origem: "banco",
  },
  {
    id: "prf-info-012",
    materia: "info",
    topico: "Internet e intranet: conceitos e protocolos",
    subassunto: "Intranet, extranet e acesso remoto",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: classificar a rede pelo público com acesso e separar cifragem de controle de acesso",
    enunciado:
      "Uma superintendência da PRF mantém um portal de escalas acessível apenas pela rede interna do órgão, com páginas servidas por HTTPS. Parte do portal foi liberada, mediante login, a uma empresa terceirizada de manutenção de viaturas. Considere as afirmativas:\n\nI. Restrito à rede interna e baseado nas mesmas tecnologias da internet, o portal caracteriza uma intranet.\nII. Ao liberar parte do portal à empresa terceirizada, ele passa a integrar a internet pública, acessível a qualquer pessoa.\nIII. Um servidor em home office pode acessar o portal por meio de uma VPN, que cria um túnel criptografado até a rede do órgão.\nIV. Por usar HTTPS, o portal dispensa controle de acesso por login, já que a conexão é cifrada.\n\nEstá correto o que se afirma em",
    alternativas: ["I, apenas.", "I e II, apenas.", "II e IV, apenas.", "I e III, apenas.", "I, III e IV, apenas."],
    correta: 3,
    explicacao:
      "I: intranet é a rede privada do órgão construída com as tecnologias da internet (TCP/IP, páginas web, navegador), com acesso restrito ao público interno. III: a VPN cria um túnel criptografado pela internet até a rede do órgão, e o servidor remoto passa a usar os recursos internos como se estivesse lá. Logo, I e III.",
    explicacaoErradas:
      "II está errada: liberar parte da intranet a parceiros externos, mediante autenticação, caracteriza uma extranet; o conteúdo continua restrito aos autorizados, e não aberto a qualquer pessoa. IV está errada: o HTTPS cifra o tráfego entre navegador e servidor, mas não decide quem pode ver o conteúdo; o controle de acesso continua necessário. Caem as combinações com II ou IV, e a que deixa de fora a III, que está certa.",
    pegadinha:
      "Dar acesso a quem está fora da rede não torna o portal público: com login e restrito a parceiros, é extranet. E cifrar a conexão não substitui saber quem pode entrar.",
    conhecimento:
      "Internet: rede pública mundial. Intranet: rede privada com as tecnologias da internet, para o público interno. Extranet: parte da intranet aberta a parceiros externos autorizados (fornecedores, outros órgãos), com autenticação. VPN: túnel criptografado sobre a internet que estende a rede interna a usuários remotos.",
    origem: "banco",
  },
  {
    id: "prf-info-013",
    materia: "info",
    topico: "Internet e intranet: conceitos e protocolos",
    subassunto: "Gateway padrão e DNS na solução de falhas",
    dificuldade: 5,
    raciocinio: "Diagnóstico de situação: usar o teste pelo endereço IP para separar falha de rota e falha de resolução de nomes",
    enunciado:
      "No setor administrativo de uma delegacia da PRF, dois computadores apresentam falhas. O primeiro imprime na impressora da sala e abre as pastas compartilhadas do servidor local, mas não alcança nenhum site da internet, nem digitando diretamente o endereço IP de um site conhecido. O segundo abre o portal de um órgão quando se digita o endereço IP do servidor, mas não quando se digita o nome do site. As causas mais prováveis das falhas no primeiro e no segundo computador são, respectivamente,",
    alternativas: [
      "falha na resolução de nomes (DNS); gateway padrão ausente ou errado.",
      "gateway padrão ausente ou errado; falha na resolução de nomes (DNS).",
      "cabo de rede desconectado; servidor DHCP fora do ar.",
      "servidor DHCP fora do ar; bloqueio de cookies no navegador.",
      "gateway padrão ausente ou errado; conflito de endereço IP na rede.",
    ],
    correta: 1,
    explicacao:
      "O primeiro computador se comunica com a rede local (impressora e pastas), mas não sai dela nem pelo IP. Quem encaminha os pacotes para fora da rede local é o gateway padrão, que deve estar ausente ou errado. O segundo chega ao servidor pelo IP, então a rota funciona; falha só a tradução do nome em endereço, que é papel do DNS.",
    explicacaoErradas:
      "Inverter as causas não fecha: com o DNS em falha, o primeiro computador ainda abriria sites pelo IP, e um gateway errado impediria o segundo de chegar ao servidor pelo IP. Cabo desconectado tiraria o primeiro também da rede local, e ele não imprimiria nem abriria as pastas. DHCP fora do ar não explica nenhum dos dois quadros, porque ambos se comunicam por IP. Cookies não participam da resolução de nomes, e conflito de IP gera falhas intermitentes na própria rede local, não o padrão de funcionar pelo IP e falhar pelo nome.",
    pegadinha:
      "Os dois computadores “não acessam a internet”, e é tentador culpar o DNS nos dois casos. O teste pelo IP separa as falhas: quem falha até pelo IP não tem saída da rede (gateway); quem só falha pelo nome tem problema de resolução (DNS).",
    conhecimento:
      "Configuração IP: endereço, máscara (define a rede local), gateway padrão (roteador de saída da rede local) e servidores DNS (traduzem nomes em endereços). Diagnóstico: ping no IP externo testa a rota; ping no nome testa também o DNS; ipconfig /all mostra a configuração no Windows; nslookup consulta o DNS.",
    origem: "banco",
  },
  {
    id: "prf-info-014",
    materia: "info",
    topico: "Internet e intranet: conceitos e protocolos",
    subassunto: "Modelos de serviço: SaaS, PaaS e IaaS",
    dificuldade: 4,
    raciocinio: "Associação: identificar o que o cliente administra em cada modelo de serviço",
    enunciado:
      "Um órgão federal contratou três serviços de computação em nuvem. Relacione cada modelo de serviço à situação correspondente.\n\n1. SaaS (software como serviço)\n2. PaaS (plataforma como serviço)\n3. IaaS (infraestrutura como serviço)\n\n( ) O órgão aluga máquinas virtuais e armazenamento e instala nelas o sistema operacional e os programas de que precisa.\n( ) A equipe de TI desenvolve e publica o sistema de agendamento de vistorias num ambiente pronto, sem administrar servidores nem sistema operacional.\n( ) Os servidores usam e-mail e editor de textos pelo navegador, com atualizações feitas pelo fornecedor.\n\nA relação correta, na ordem apresentada, é",
    alternativas: ["1, 2, 3.", "2, 3, 1.", "3, 1, 2.", "2, 1, 3.", "3, 2, 1."],
    correta: 4,
    explicacao:
      "No IaaS, o fornecedor entrega a infraestrutura (máquinas virtuais, rede, armazenamento), e o cliente cuida do sistema operacional e dos programas: 3. No PaaS, o fornecedor entrega também o ambiente de execução e desenvolvimento, e o cliente só cuida da aplicação e dos dados: 2. No SaaS, o cliente usa o programa pronto, e o fornecedor cuida do resto: 1. Sequência: 3, 2, 1.",
    explicacaoErradas:
      "As demais sequências trocam os modelos entre si. Chamar de SaaS o aluguel de máquinas ignora que o órgão instala o sistema operacional, tarefa típica de quem contrata IaaS. Chamar de IaaS o ambiente pronto para publicar o sistema ignora que o órgão não administra servidores nem sistema operacional. E o e-mail pelo navegador, atualizado pelo fornecedor, é o exemplo clássico de software como serviço.",
    pegadinha:
      "O critério é o que fica com o cliente: no IaaS, do sistema operacional para cima; no PaaS, só a aplicação e os dados; no SaaS, apenas o uso. Desenvolver um sistema não torna o serviço IaaS se o ambiente vem pronto.",
    conhecimento:
      "IaaS: infraestrutura virtual (máquinas virtuais, discos, redes); o cliente gerencia sistema operacional, programas e dados. PaaS: plataforma para desenvolver e executar aplicações; o cliente gerencia código e dados. SaaS: aplicação pronta pelo navegador ou aplicativo (webmail, suítes de escritório on-line); o cliente só usa e configura.",
    origem: "banco",
  },
  {
    id: "prf-info-015",
    materia: "info",
    topico: "Internet e intranet: conceitos e protocolos",
    subassunto: "TCP e UDP: confiabilidade e usos",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: garantias de cada protocolo de transporte e aplicações típicas",
    enunciado:
      "A sede regional da PRF faz videoconferências diárias com uma unidade operacional e, pelo mesmo link, envia arquivos de autos de infração ao servidor central. Sobre os protocolos de transporte envolvidos, considere as afirmativas:\n\nI. O TCP estabelece conexão antes de transmitir, confirma o recebimento e reenvia os segmentos perdidos, o que o torna adequado ao envio dos arquivos de autos.\nII. O UDP garante a entrega de todos os pacotes, mas não a ordem em que eles chegam ao destino.\nIII. Na videoconferência, o UDP costuma ser preferido, porque um pacote atrasado já não serve, e a retransmissão só aumentaria a latência.\nIV. As consultas comuns ao DNS usam, em regra, o UDP, na porta 53.\n\nEstá correto o que se afirma em",
    alternativas: ["I e III, apenas.", "II e IV, apenas.", "I, III e IV, apenas.", "I, II e III, apenas.", "II, III e IV, apenas."],
    correta: 2,
    explicacao:
      "I: o TCP é orientado à conexão, com confirmação, retransmissão e ordenação, o que garante que o arquivo chegue íntegro. III: em voz e vídeo em tempo real, um pacote atrasado já não serve, e esperar a retransmissão travaria a conversa; por isso se usa o UDP. IV: as consultas comuns ao DNS são pequenas e usam o UDP na porta 53, recorrendo ao TCP em casos específicos. Logo, I, III e IV.",
    explicacaoErradas:
      "II está errada: o UDP não garante a entrega nem a ordem; ele envia os datagramas sem conexão e sem confirmação, e a eventual correção fica a cargo da aplicação. Caem as combinações com II, e a que deixa de fora a IV, que está certa.",
    pegadinha:
      "A afirmativa II concede ao UDP metade das garantias do TCP, o que soa razoável. Mas o UDP não oferece nenhuma delas: nem entrega, nem ordem, nem controle de fluxo.",
    conhecimento:
      "TCP: orientado à conexão (three-way handshake), confiável, ordenado, com controle de fluxo e de congestionamento; usado em e-mail (SMTP, IMAP, POP3), FTP, SSH e, em regra, na web. UDP: sem conexão nem confirmação, mais leve; usado em voz e vídeo em tempo real, DNS e DHCP.",
    origem: "banco",
  },
  {
    id: "prf-info-016",
    materia: "info",
    topico: "Navegadores",
    subassunto: "Cache, cookies e recarga forçada",
    dificuldade: 4,
    raciocinio: "Diagnóstico de situação: separar a cópia local da página dos dados que mantêm a sessão",
    enunciado:
      "O setor de comunicação avisou que a página de escalas do portal interno foi atualizada, mas o navegador de um servidor continua exibindo a versão antiga, embora um colega veja a nova em outro computador. O servidor quer ver a atualização sem perder as sessões abertas nos sistemas em que está conectado. A medida adequada é",
    alternativas: [
      "recarregar com Ctrl+F5 ou limpar só o cache, mantendo os cookies.",
      "apagar os cookies, que guardam as cópias das páginas já visitadas.",
      "abrir a página em janela anônima, que passa a valer para as guias comuns.",
      "pressionar F5, que sempre baixa a página inteira de novo do servidor.",
      "limpar o histórico, que guarda o conteúdo das páginas para exibição.",
    ],
    correta: 0,
    explicacao:
      "O navegador guarda no cache cópias de páginas, imagens e scripts para carregá-las mais rápido, e pode continuar exibindo a versão antiga. Ctrl+F5 (ou Ctrl+Shift+R) recarrega a página ignorando o cache, e limpar só as imagens e arquivos em cache tem o mesmo efeito para todas as páginas. Os cookies, que mantêm as sessões abertas, ficam intactos.",
    explicacaoErradas:
      "Cookies não guardam cópias de páginas: guardam dados do site, como a identificação da sessão, e apagá-los derrubaria os logins sem resolver o problema. A janela anônima não altera o que as guias comuns exibem. F5 recarrega a página, mas pode reaproveitar o que está em cache, e por isso nem sempre traz a versão nova. O histórico é só a lista de endereços visitados, sem o conteúdo das páginas.",
    pegadinha:
      "Cache e cookies costumam ser apagados juntos, e daí vem a confusão. O cache guarda cópias de páginas; os cookies guardam dados do site, como a sessão. Para ver a versão nova sem sair dos sistemas, só o cache precisa ir embora.",
    conhecimento:
      "Cache: cópias locais de páginas, imagens e scripts. Cookies: pequenos arquivos com dados do site (sessão, preferências). Histórico: lista de endereços visitados. F5 recarrega; Ctrl+F5 ou Ctrl+Shift+R recarregam ignorando o cache. A limpeza seletiva fica em Configurações > Privacidade (Ctrl+Shift+Del).",
    origem: "banco",
  },
  {
    id: "prf-info-017",
    materia: "info",
    topico: "Navegadores",
    subassunto: "Atalhos de guias, histórico, downloads e favoritos",
    dificuldade: 4,
    raciocinio: "Associação: atalhos de teclado comuns ao Chrome e ao Edge",
    enunciado:
      "Um servidor que pesquisa normas de trânsito no Google Chrome e no Microsoft Edge usa atalhos de teclado comuns aos dois navegadores. Relacione cada atalho à sua função.\n\n1. Ctrl+Shift+T\n2. Ctrl+J\n3. Ctrl+H\n4. Ctrl+D\n\n( ) Adiciona a página atual aos favoritos.\n( ) Reabre a última guia fechada.\n( ) Abre a lista de downloads.\n( ) Abre o histórico de navegação.\n\nA relação correta, na ordem apresentada, é",
    alternativas: ["1, 4, 2, 3.", "4, 1, 3, 2.", "2, 1, 4, 3.", "4, 1, 2, 3.", "4, 2, 1, 3."],
    correta: 3,
    explicacao:
      "Ctrl+D adiciona a página aos favoritos (4); Ctrl+Shift+T reabre a última guia fechada e, repetido, reabre as anteriores (1); Ctrl+J abre os downloads (2); Ctrl+H abre o histórico (3). Sequência: 4, 1, 2, 3.",
    explicacaoErradas:
      "As demais sequências trocam downloads e histórico entre o J e o H, ou atribuem aos favoritos e à guia fechada os atalhos errados. Ctrl+J costuma ser confundido com o histórico, mas abre os downloads; Ctrl+H é o histórico (history).",
    pegadinha:
      "H de history ajuda a fixar o histórico; o J dos downloads não tem associação óbvia e é o que mais se troca. E Ctrl+Shift+T desfaz o fechamento de guias, em vez de abrir uma guia nova, que é Ctrl+T.",
    conhecimento:
      "Chrome e Edge: Ctrl+T nova guia; Ctrl+W fecha a guia; Ctrl+Shift+T reabre a fechada; Ctrl+N nova janela; Ctrl+Tab próxima guia; Ctrl+D favoritar; Ctrl+H histórico; Ctrl+J downloads; Ctrl+L ou F6 seleciona a barra de endereços; Ctrl+F localiza na página; Ctrl+0 volta o zoom a 100%.",
    origem: "banco",
  },
  {
    id: "prf-info-018",
    materia: "info",
    topico: "Navegadores",
    subassunto: "HTTPS e TLS: certificado e chave de sessão",
    dificuldade: 5,
    raciocinio: "Análise conceitual: papel do certificado e da chave de sessão numa conexão protegida",
    enunciado:
      "Ao acessar pelo navegador o sistema de gestão de diárias, um servidor observa o endereço iniciado por https:// e o cadeado na barra de endereços. Sobre o funcionamento dessa conexão, protegida pelo protocolo TLS, é correto afirmar que",
    alternativas: [
      "toda a sessão é cifrada com a chave privada do servidor, que o navegador decifra com a pública.",
      "o certificado autentica o servidor, e uma chave de sessão simétrica cifra os dados trafegados.",
      "a chave pública do usuário cifra os dados, e só o servidor os decifra com a chave dele.",
      "o cadeado indica que o site foi verificado e está livre de vírus e de páginas falsas.",
      "o navegador compacta e assina cada pacote, garantindo sigilo sem uso de criptografia.",
    ],
    correta: 1,
    explicacao:
      "No HTTPS, o servidor apresenta um certificado digital, que o navegador confere para autenticar o site. Nessa negociação inicial, a criptografia assimétrica serve para autenticar e para combinar uma chave de sessão; daí em diante, os dados trafegam cifrados por essa chave simétrica, muito mais rápida para grandes volumes.",
    explicacaoErradas:
      "A sessão não é cifrada com a chave privada do servidor: depois da negociação, todo o tráfego usa a chave de sessão simétrica. Em regra, o usuário nem tem certificado próprio nessa conexão, então não há chave pública dele envolvida. O cadeado não atesta ausência de vírus nem a honestidade do site, e páginas falsas também podem usar HTTPS. E não existe sigilo sem criptografia: compactar e assinar não esconde o conteúdo.",
    pegadinha:
      "O cadeado garante que a conexão é cifrada e que o certificado do servidor foi validado, não que o site seja confiável. E a criptografia assimétrica atua só no começo da conexão; o tráfego em si usa chave simétrica.",
    conhecimento:
      "TLS (sucessor do SSL): o servidor envia o certificado, emitido por uma autoridade certificadora; o navegador valida a cadeia; as partes combinam uma chave de sessão simétrica, que cifra o tráfego. HTTPS usa a porta 443. Garante sigilo e integridade do tráfego e autenticação do servidor, mas não a honestidade do conteúdo.",
    origem: "banco",
  },
  {
    id: "prf-info-019",
    materia: "info",
    topico: "Correio eletrônico",
    subassunto: "Resposta a todos por destinatário em Cco",
    dificuldade: 5,
    raciocinio: "Diagnóstico de situação: quem recebe a resposta e o que ela revela sobre a cópia oculta",
    enunciado:
      "Um chefe de seção enviou um e-mail sobre a escala do feriado com Ana no campo Para, Bruno no campo Cc e Carla no campo Cco. Carla, sem perceber que estava em cópia oculta, clicou em Responder a todos e enviou um comentário. Considerando o funcionamento padrão dos programas de correio, o que acontece?",
    alternativas: [
      "A resposta vai só ao chefe, porque quem está em Cco não pode responder a todos.",
      "A resposta vai ao chefe, a Ana e a Bruno, mas o endereço de Carla segue oculto.",
      "O programa bloqueia o envio, porque Carla não consta dos destinatários visíveis.",
      "A resposta vai ao chefe e a Ana, porque os de Cc não recebem respostas de Cco.",
      "A resposta vai ao chefe, a Ana e a Bruno, que descobrem que Carla a recebeu.",
    ],
    correta: 4,
    explicacao:
      "Quem está em Cco recebe a mensagem com os campos Para e Cc visíveis. Ao clicar em Responder a todos, Carla responde ao remetente e a todos os que aparecem nesses campos: o chefe, Ana e Bruno. Como a resposta sai em nome dela, todos descobrem que ela tinha recebido o e-mail original, e a cópia oculta perde o efeito.",
    explicacaoErradas:
      "Nada impede quem está em Cco de usar Responder a todos, e o programa não bloqueia o envio. O endereço de Carla não fica oculto, porque ela é a remetente da resposta. E quem está em Cc recebe a resposta normalmente, como qualquer destinatário visível.",
    pegadinha:
      "O sigilo do Cco vale só para a mensagem original. Se quem estava oculto responde a todos, a própria resposta o revela, porque sai com o endereço dele no campo De.",
    conhecimento:
      "Para: destinatários principais; Cc: cópia visível a todos; Cco: cópia oculta, que os demais não veem. Responder vai só ao remetente; Responder a todos vai ao remetente e aos de Para e Cc; Encaminhar envia a mensagem, com os anexos, a novos destinatários. Quem está em Cco não vê os outros destinatários ocultos.",
    origem: "banco",
  },
  {
    id: "prf-info-020",
    materia: "info",
    topico: "Correio eletrônico",
    subassunto: "IMAP, POP3 com cópia no servidor e SMTP",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: onde ficam as mensagens em cada protocolo e qual deles envia",
    enunciado:
      "Um servidor configura a mesma conta de e-mail institucional no computador da sala e no celular e quer que as pastas, as mensagens lidas e as movidas fiquem iguais nos dois aparelhos. Considere as afirmativas:\n\nI. O IMAP atende ao objetivo, porque as mensagens e as pastas permanecem no servidor e são sincronizadas entre os aparelhos.\nII. No funcionamento tradicional do POP3, as mensagens são baixadas para o aparelho e removidas do servidor, e o celular deixa de ver o que já foi baixado no computador.\nIII. Mesmo com o POP3, é possível manter uma cópia das mensagens no servidor, mas pastas e marcações de lida continuam sem sincronia entre os aparelhos.\nIV. Com o IMAP configurado, o envio de mensagens também passa a ser feito por ele, o que dispensa o SMTP.\n\nEstá correto o que se afirma em",
    alternativas: ["I e IV, apenas.", "I e II, apenas.", "I, II e III, apenas.", "II, III e IV, apenas.", "I, II, III e IV."],
    correta: 2,
    explicacao:
      "I: no IMAP, as mensagens ficam no servidor, e cada aparelho mostra o mesmo estado (pastas, lidas, movidas). II: no funcionamento tradicional do POP3, a mensagem é baixada e apagada do servidor, e o outro aparelho já não a encontra. III: o POP3 pode deixar uma cópia no servidor, mas não sincroniza pastas nem marcações. Logo, I, II e III.",
    explicacaoErradas:
      "IV está errada: IMAP e POP3 servem só para receber, isto é, para acessar a caixa de entrada; o envio é sempre feito pelo SMTP. Caem as combinações com IV, e a que deixa de fora a III, que está certa.",
    pegadinha:
      "Deixar cópia no servidor faz o POP3 parecer equivalente ao IMAP. Não é: a cópia evita que a mensagem suma, mas cada aparelho continua com as próprias pastas e marcações.",
    conhecimento:
      "SMTP: envio (porta 25 entre servidores; 587 com STARTTLS e 465 com TLS para o cliente). POP3: recebimento com download (110; 995 com TLS). IMAP: acesso sincronizado no servidor (143; 993 com TLS). Webmail usa HTTP/HTTPS no navegador.",
    origem: "banco",
  },
  {
    id: "prf-info-021",
    materia: "info",
    topico: "Correio eletrônico",
    subassunto: "Encaminhar, responder e cópia oculta",
    dificuldade: 4,
    raciocinio: "Escolha de procedimento: o que cada comando leva da mensagem original e quem vê cada destinatário",
    enunciado:
      "Um servidor recebeu, de uma empresa contratada, um e-mail com a planilha de medição de um contrato em anexo. Ele precisa enviar a planilha ao setor jurídico, que vai analisá-la, e responder à empresa confirmando o recebimento. A chefia deve receber a confirmação enviada à empresa, mas a empresa não pode saber disso. A forma correta de proceder é",
    alternativas: [
      "Encaminhar ao jurídico e Responder ao remetente, com a chefia em Cco.",
      "Responder a todos, com o jurídico em Para e a chefia em Cc.",
      "Encaminhar ao jurídico e ao remetente, com a chefia em Cc.",
      "Responder ao remetente, com o jurídico e a chefia em Cco.",
      "Encaminhar ao jurídico e Responder a todos, deixando a chefia em Cc.",
    ],
    correta: 0,
    explicacao:
      "Encaminhar envia a mensagem, com os anexos, a novos destinatários: é assim que a planilha chega ao jurídico. Responder ao remetente basta para confirmar o recebimento, sem devolver o anexo. Com a chefia em Cco nessa resposta, ela recebe a confirmação sem que a empresa veja o endereço dela.",
    explicacaoErradas:
      "Responder, ao remetente ou a todos, não reenvia os anexos da mensagem original: o jurídico, posto em Para ou em Cco numa resposta, receberia o texto sem a planilha. E a chefia em Cc fica visível à empresa, o que contraria a exigência de sigilo, seja numa resposta, seja num encaminhamento.",
    pegadinha:
      "Pôr o jurídico na própria resposta parece resolver tudo de uma vez. Mas Responder não leva o anexo; só o Encaminhar entrega a planilha, e a chefia só fica invisível à empresa em Cco.",
    conhecimento:
      "Responder: só ao remetente, sem os anexos originais. Responder a todos: ao remetente e aos de Para e Cc, também sem os anexos. Encaminhar: a novos destinatários, com os anexos. Cco esconde o destinatário dos demais. O assunto ganha o prefixo Re: na resposta e Enc: (ou Fwd:) no encaminhamento.",
    origem: "banco",
  },
  {
    id: "prf-info-022",
    materia: "info",
    topico: "Busca e pesquisa na web",
    subassunto: "Sintaxe dos operadores de busca",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: efeito de espaços, maiúsculas e operadores em consultas do Google",
    enunciado:
      "Um servidor pesquisa no Google normas sobre fiscalização de cargas. Sobre as consultas que ele digitou, considere as afirmativas:\n\nI. Na consulta resolução site: gov.br, com espaço depois dos dois-pontos, a busca continua restrita ao domínio gov.br.\nII. Na consulta radar or fixo, com “or” em minúsculas, o Google não o reconhece como operador e o trata como palavra comum.\nIII. Na consulta pesagem -rodoviária, ficam de fora os resultados que contêm a palavra “rodoviária”.\nIV. Na consulta “excesso de peso” filetype:xls, a expressão entre aspas é procurada apenas no título das planilhas.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "I e IV, apenas.", "II, III e IV, apenas.", "II e III, apenas.", "III, apenas."],
    correta: 3,
    explicacao:
      "II: o OR só funciona em maiúsculas; em minúsculas, o Google o trata como palavra comum da busca. III: o hífen colado à palavra exclui os resultados que a contêm. Logo, II e III.",
    explicacaoErradas:
      "I está errada: o operador precisa vir colado ao termo; com espaço depois dos dois-pontos, o Google lê site: e gov.br como palavras soltas, e a busca não fica restrita ao domínio. IV está errada: filetype: limita o tipo de arquivo, e a expressão é procurada no conteúdo, e não só no título; para o título, usa-se intitle:. Caem as combinações com I ou IV, e a que deixa de fora a II, que está certa.",
    pegadinha:
      "Um espaço desfaz o operador: site: gov.br vira busca por palavras soltas. E filetype: escolhe o formato do arquivo, sem nenhum efeito sobre onde o termo aparece dentro dele.",
    conhecimento:
      "Operadores do Google, sempre colados ao termo: “ ” frase exata; - exclui; OR (em maiúsculas) aceita um termo ou outro; site: domínio ou site; filetype: tipo de arquivo (pdf, xls, docx); intitle: palavra no título; inurl: palavra no endereço; * curinga dentro de frase.",
    origem: "banco",
  },
  {
    id: "prf-info-023",
    materia: "info",
    topico: "Busca e pesquisa na web",
    subassunto: "Exclusão de um site com -site:",
    dificuldade: 5,
    raciocinio: "Montagem de consulta: posição do hífen em relação ao operador site:",
    enunciado:
      "Um servidor pesquisa no Google informações sobre o recall de airbags de um modelo de viatura, mas os primeiros resultados vêm todos de um fórum, forum.exemplo.com.br, que ele quer descartar. A consulta que traz os resultados sobre o assunto, excluindo apenas as páginas desse fórum, é",
    alternativas: [
      "recall airbag site:-forum.exemplo.com.br",
      "recall airbag -site:forum.exemplo.com.br",
      "recall airbag - site:forum.exemplo.com.br",
      "recall airbag NOT site:forum.exemplo.com.br",
      "recall airbag OR -forum.exemplo.com.br",
    ],
    correta: 1,
    explicacao:
      "O hífen colado antes do operador site: inverte o efeito dele: -site:forum.exemplo.com.br exclui dos resultados todas as páginas desse domínio, e os termos recall e airbag continuam sendo pesquisados no resto da web.",
    explicacaoErradas:
      "Com o hífen depois dos dois-pontos, o operador passa a procurar um domínio “-forum…”, inexistente, e não exclui nada. Com espaço entre o hífen e o operador, o hífen fica solto, e site: restringe a busca justamente ao fórum. O Google não reconhece NOT como operador, e o site: que vem depois também restringe a busca ao fórum. Sem o operador site:, o hífen exclui só as páginas que contêm aquele texto, e o OR ainda amplia a busca em vez de filtrá-la.",
    pegadinha:
      "O hífen precisa vir colado e antes do operador: -site:. Em outra posição, ou separado por espaço, ele não exclui o domínio, e duas das variações chegam a restringir a busca ao próprio fórum.",
    conhecimento:
      "Exclusão no Google: -palavra exclui um termo; -site:dominio exclui um site inteiro; -“frase” exclui uma frase. Os operadores vêm colados ao termo, sem espaço. O Google não usa NOT; a exclusão é feita só pelo hífen.",
    origem: "banco",
  },
  {
    id: "prf-info-024",
    materia: "info",
    topico: "Busca e pesquisa na web",
    subassunto: "OR combinado com aspas e site:",
    dificuldade: 4,
    raciocinio: "Montagem de consulta: combinar frase exata, alternância entre termos e restrição de domínio",
    enunciado:
      "Para preparar uma campanha educativa, um servidor quer encontrar, apenas em sites do governo com domínio gov.br, páginas que tratem da expressão exata “cinto de segurança” ou da expressão exata “cadeirinha infantil”, bastando uma das duas. A consulta adequada no Google é",
    alternativas: [
      "“cinto de segurança OR cadeirinha infantil” site:gov.br",
      "“cinto de segurança” or “cadeirinha infantil” site:gov.br",
      "“cinto de segurança” OR “cadeirinha infantil” -site:gov.br",
      "“cinto de segurança” “cadeirinha infantil” site:gov.br",
      "“cinto de segurança” OR “cadeirinha infantil” site:gov.br",
    ],
    correta: 4,
    explicacao:
      "Cada expressão vai entre aspas, para ser buscada na forma exata; o OR, em maiúsculas e fora das aspas, aceita páginas com uma ou outra; e site:gov.br, colado, restringe os resultados ao domínio do governo.",
    explicacaoErradas:
      "Com o OR dentro das aspas, a busca procura a frase inteira “cinto de segurança OR cadeirinha infantil”, palavra por palavra. Com “or” em minúsculas, o Google não aplica o operador. O hífen antes de site: exclui o domínio, em vez de restringir a busca a ele. Sem o OR, as duas expressões passam a ser exigidas na mesma página.",
    pegadinha:
      "As consultas diferem por detalhes: o OR fora das aspas e em maiúsculas, e o site: sem hífen. Um único desvio muda o resultado: frase inexistente, operador ignorado, domínio excluído ou exigência das duas expressões ao mesmo tempo.",
    conhecimento:
      "Combinação de operadores: “frase exata” OR “outra frase” site:dominio. Sem OR, todos os termos são exigidos. O OR só funciona em maiúsculas. Os operadores vêm colados ao termo, e o hífen antes de site: ou de filetype: inverte o efeito deles.",
    origem: "banco",
  },
  {
    id: "prf-info-025",
    materia: "info",
    topico: "Grupos de discussão",
    subassunto: "Lista de discussão, fórum e moderação",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: funcionamento, moderação e sincronia dos grupos de discussão",
    enunciado:
      "A área de capacitação de uma superintendência criou dois grupos para troca de experiências entre servidores: uma lista de discussão por e-mail e um fórum na intranet. Considere as afirmativas:\n\nI. Na lista de discussão, a mensagem enviada ao endereço da lista é distribuída aos assinantes, que a recebem na própria caixa de correio.\nII. No fórum, as mensagens ficam organizadas em tópicos numa página, e o participante as lê quando acessa o sistema.\nIII. Nos dois grupos, um moderador pode aprovar as mensagens antes que sejam publicadas ou distribuídas.\nIV. A lista de discussão é uma forma de comunicação síncrona, porque todos os assinantes recebem a mensagem ao mesmo tempo.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II e IV, apenas.", "I, II e III, apenas.", "I, III e IV, apenas.", "I, II, III e IV."],
    correta: 2,
    explicacao:
      "I: na lista, quem escreve envia ao endereço da lista, e o servidor de listas replica a mensagem para a caixa de cada assinante. II: no fórum, as mensagens ficam num site, organizadas por tópicos, e cada um as lê quando acessa. III: listas e fóruns podem ser moderados, com aprovação prévia das mensagens. Logo, I, II e III.",
    explicacaoErradas:
      "IV está errada: receber ao mesmo tempo não torna a comunicação síncrona. A lista é assíncrona, porque cada assinante lê e responde quando quiser, sem precisar estar conectado no mesmo momento que os outros. Caem as combinações com IV, e a que deixa de fora a III, que está certa.",
    pegadinha:
      "Sincronia não depende de quando a mensagem chega, e sim de os participantes precisarem estar conectados ao mesmo tempo. Lista e fórum são assíncronos; chat e videoconferência são síncronos.",
    conhecimento:
      "Lista de discussão: mensagens distribuídas por e-mail aos assinantes. Fórum: mensagens publicadas em página web, por tópicos, com histórico consultável. Ambos são assíncronos e podem ter moderação. Síncronos: chat e videoconferência. Netiqueta: regras de boa conduta nesses grupos.",
    origem: "banco",
  },
  {
    id: "prf-info-026",
    materia: "info",
    topico: "Grupos de discussão",
    subassunto: "Moderação, netiqueta e sincronia",
    dificuldade: 4,
    raciocinio: "Associação: separar a conduta dos participantes, o controle do grupo e o tipo de comunicação",
    enunciado:
      "Na rotina de um grupo de discussão sobre capacitação, foram observadas as situações abaixo. Relacione cada conceito à situação correspondente.\n\n1. Moderação\n2. Comunicação assíncrona\n3. Comunicação síncrona\n4. Netiqueta\n\n( ) Os participantes evitam correntes, propagandas e textos em maiúsculas, por respeito aos demais.\n( ) Um servidor entra no fórum uma semana depois da abertura de um tópico, lê as mensagens e responde.\n( ) Um responsável aprova cada mensagem antes que ela seja publicada no fórum.\n( ) Os participantes marcam uma videochamada e discutem o tema com todos conectados ao mesmo tempo.\n\nA relação correta, na ordem apresentada, é",
    alternativas: ["4, 2, 1, 3.", "4, 3, 1, 2.", "1, 2, 4, 3.", "4, 2, 3, 1.", "1, 3, 4, 2."],
    correta: 0,
    explicacao:
      "Evitar correntes, propagandas e maiúsculas, que equivalem a gritar, é regra de netiqueta: 4. Ler e responder dias depois, sem que os outros estejam conectados, é comunicação assíncrona: 2. Aprovar cada mensagem antes da publicação é moderação: 1. Conversar com todos conectados ao mesmo tempo é comunicação síncrona: 3. Sequência: 4, 2, 1, 3.",
    explicacaoErradas:
      "As demais sequências trocam síncrona e assíncrona, ou confundem netiqueta com moderação. A netiqueta é a conduta dos próprios participantes; a moderação é o controle feito por um responsável, que aprova ou remove mensagens.",
    pegadinha:
      "Netiqueta e moderação andam juntas, mas não se confundem: a primeira é o comportamento esperado de cada participante; a segunda, o controle exercido por quem administra o grupo.",
    conhecimento:
      "Netiqueta: evitar maiúsculas, correntes, spam e mensagens fora do tema; citar só o necessário ao responder. Moderação: prévia (aprovação antes da publicação) ou posterior (remoção). Assíncrona: fórum, lista, e-mail. Síncrona: chat, videoconferência.",
    origem: "banco",
  },
  {
    id: "prf-info-027",
    materia: "info",
    topico: "Sistemas de informação",
    subassunto: "Dado, informação e conhecimento",
    dificuldade: 4,
    raciocinio: "Classificação: grau de processamento e de interpretação de cada elemento",
    enunciado:
      "Para planejar a fiscalização num trecho da BR-116, a chefia de uma delegacia analisou os seguintes elementos:\n\nI. A lista com a hora de cada acidente registrado no trecho no último ano.\nII. Um gráfico mostrando que 60% desses acidentes ocorreram entre 18h e 20h.\nIII. A conclusão do chefe, apoiada na experiência de outras operações, de que reforçar o policiamento nesse horário reduz os acidentes.\nIV. A média de acidentes por dia da semana, calculada pelo sistema a partir da lista.\n\nNa hierarquia dado, informação e conhecimento, os elementos I, II, III e IV correspondem, respectivamente, a",
    alternativas: [
      "dado, informação, conhecimento e dado.",
      "informação, dado, conhecimento e informação.",
      "dado, conhecimento, informação e informação.",
      "dado, informação, conhecimento e informação.",
      "dado, informação, informação e conhecimento.",
    ],
    correta: 3,
    explicacao:
      "I: a lista de horas, sem tratamento, é dado bruto. II: o gráfico organiza os dados e revela um padrão, o que é informação. III: a conclusão, que interpreta a informação à luz da experiência e orienta a ação, é conhecimento. IV: a média calculada a partir da lista é dado processado, com significado: informação. Sequência: dado, informação, conhecimento e informação.",
    explicacaoErradas:
      "Tratar a média como dado ignora que ela resulta do processamento da lista, e por isso já é informação. Chamar a lista de informação, ou o gráfico de conhecimento, inverte os graus de processamento. E a conclusão do chefe não é mera informação: ela interpreta o padrão e orienta a ação, enquanto a média calculada pelo sistema não vira conhecimento só por ser elaborada.",
    pegadinha:
      "O processamento automático não transforma informação em conhecimento. A média calculada pelo sistema continua sendo informação; o conhecimento surge quando alguém interpreta o padrão e o aplica a uma decisão.",
    conhecimento:
      "Dado: registro bruto, sem contexto (horários, placas, valores). Informação: dado organizado ou processado, com significado (totais, médias, gráficos, relatórios). Conhecimento: informação interpretada e aplicada, com experiência e julgamento, que orienta decisões.",
    origem: "banco",
  },
  {
    id: "prf-info-028",
    materia: "info",
    topico: "Sistemas de informação",
    subassunto: "SPT, SIG, SAD e SAE",
    dificuldade: 4,
    raciocinio: "Associação: nível organizacional e forma de uso de cada tipo de sistema",
    enunciado:
      "Na gestão da frota e do efetivo de um órgão federal, são usados quatro tipos de sistema de informação. Relacione cada tipo à situação correspondente.\n\n1. Sistema de processamento de transações (SPT)\n2. Sistema de informação gerencial (SIG)\n3. Sistema de apoio à decisão (SAD)\n4. Sistema de apoio ao executivo (SAE)\n\n( ) Um painel resume, para a direção-geral, indicadores nacionais e tendências de vários anos, com gráficos e alertas.\n( ) A chefia simula, com perguntas do tipo “e se…?”, o efetivo necessário em diferentes cenários de movimento num feriado prolongado.\n( ) Cada abastecimento de viatura é registrado no momento em que ocorre, com placa, data, litros e valor.\n( ) As chefias recebem toda semana um relatório padronizado com o consumo de combustível por unidade.\n\nA relação correta, na ordem apresentada, é",
    alternativas: ["4, 1, 3, 2.", "4, 3, 1, 2.", "3, 4, 1, 2.", "4, 3, 2, 1.", "2, 3, 1, 4."],
    correta: 1,
    explicacao:
      "O painel com indicadores e tendências para a alta direção é o SAE: 4. A simulação de cenários “e se…?” para uma decisão pouco estruturada é o SAD: 3. O registro de cada abastecimento, no momento em que ocorre, é o SPT: 1. O relatório padronizado e periódico às chefias é o SIG: 2. Sequência: 4, 3, 1, 2.",
    explicacaoErradas:
      "As demais sequências trocam SAD e SAE, ou SPT e SIG. O SIG não registra cada operação: ele resume os dados do SPT em relatórios periódicos. E o SAE, voltado à alta direção, mostra indicadores consolidados, enquanto o SAD permite simular alternativas para uma decisão específica.",
    pegadinha:
      "SAD e SAE servem à decisão, mas em níveis e formatos diferentes: o SAD simula cenários (“e se…?”); o SAE resume indicadores para a cúpula. E o relatório semanal padronizado é típico do SIG, e não do SPT, que só registra as operações.",
    conhecimento:
      "Nível operacional: SPT (registra as transações do dia a dia). Nível tático: SIG (relatórios periódicos e padronizados a partir do SPT) e SAD (modelos e simulações para decisões semiestruturadas). Nível estratégico: SAE ou SIE (painéis com indicadores consolidados e tendências para a alta direção).",
    origem: "banco",
  },
  {
    id: "prf-info-029",
    materia: "info",
    topico: "Sistemas de informação",
    subassunto: "Teoria Geral dos Sistemas: retroalimentação e sistema aberto",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: elementos do sistema, retroalimentação e classificação em aberto ou fechado",
    enunciado:
      "Um sistema de gestão de frota recebe dados de abastecimento e de quilometragem das viaturas, processa essas informações e gera relatórios de consumo para as chefias. Com base na Teoria Geral dos Sistemas, considere as afirmativas:\n\nI. Os dados de abastecimento e de quilometragem são entradas, e os relatórios de consumo são saídas do sistema.\nII. Por trocar dados com o ambiente, esse sistema é classificado como fechado.\nIII. Quando a chefia usa os relatórios para mudar as rotas e, com isso, o consumo registrado se altera, há retroalimentação.\nIV. O sistema é parte de um sistema maior, a gestão do órgão, e pode ser decomposto em subsistemas.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II e III, apenas.", "I, II e III, apenas.", "III e IV, apenas.", "I, III e IV, apenas."],
    correta: 4,
    explicacao:
      "I: o sistema recebe dados do ambiente (entradas), processa-os e entrega relatórios (saídas). III: quando a saída volta a influenciar a entrada, ajustando o funcionamento do sistema, há retroalimentação. IV: todo sistema integra um suprassistema e pode ser dividido em subsistemas, como cadastro, abastecimento e relatórios. Logo, I, III e IV.",
    explicacaoErradas:
      "II está errada: o sistema que troca dados, energia ou matéria com o ambiente é aberto; o fechado é o que não mantém trocas com o ambiente. Caem as combinações com II, e a que deixa de fora a I, que está certa.",
    pegadinha:
      "A troca com o ambiente define o sistema aberto, e não o fechado. A afirmativa II inverte o conceito, apoiada justamente no traço que caracteriza os sistemas abertos.",
    conhecimento:
      "Elementos de um sistema: entrada, processamento, saída e retroalimentação. Sistema aberto troca com o ambiente (organizações, sistemas de informação); fechado, não. Hierarquia: subsistema, sistema, suprassistema. Homeostase: equilíbrio dinâmico mantido pela retroalimentação; entropia: tendência à desorganização.",
    origem: "banco",
  },
  {
    id: "prf-info-030",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Princípios da segurança em eventos concretos",
    dificuldade: 4,
    raciocinio: "Associação: identificar o único princípio atingido em cada incidente",
    enunciado:
      "Relacione cada princípio de segurança da informação ao incidente em que ele foi violado ou posto em risco.\n\n1. Confidencialidade\n2. Integridade\n3. Disponibilidade\n4. Não repúdio\n\n( ) O sistema de multas ficou fora do ar durante um dia inteiro, sem que nenhum dado fosse lido ou alterado.\n( ) Uma servidora nega ter aprovado uma despesa no sistema, e o registro não permite provar que foi ela.\n( ) O valor de uma diária foi alterado no sistema sem autorização.\n( ) Uma planilha com a escala sigilosa de uma operação foi lida por quem não tinha permissão.\n\nA relação correta, na ordem apresentada, é",
    alternativas: ["3, 2, 4, 1.", "4, 3, 2, 1.", "3, 4, 2, 1.", "3, 4, 1, 2.", "2, 4, 3, 1."],
    correta: 2,
    explicacao:
      "Sistema fora do ar, sem leitura nem alteração, afeta a disponibilidade: 3. Não conseguir provar a autoria de uma aprovação que a servidora nega é falha de não repúdio: 4. Alteração indevida de um valor viola a integridade: 2. Leitura por quem não tinha permissão viola a confidencialidade: 1. Sequência: 3, 4, 2, 1.",
    explicacaoErradas:
      "As demais sequências trocam integridade e confidencialidade, ou confundem o não repúdio com outro princípio. Ler sem permissão não altera nada, por isso não fere a integridade; alterar sem autorização fere a integridade, mesmo que ninguém tenha lido nada sigiloso.",
    pegadinha:
      "Cada incidente afeta um único princípio, e o enunciado isola os efeitos: o sistema fora do ar não teve dados lidos nem alterados, e a planilha foi apenas lida. Ler é confidencialidade; alterar é integridade.",
    conhecimento:
      "Confidencialidade: só quem tem permissão acessa. Integridade: a informação não é alterada indevidamente. Disponibilidade: está acessível quando necessária. Autenticidade: a origem é confirmada. Não repúdio (irretratabilidade): o autor não pode negar a autoria, o que se garante com assinatura digital e registros confiáveis.",
    origem: "banco",
  },
  {
    id: "prf-info-031",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Worm: propagação e diferença para o vírus",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: forma de propagação, efeitos e contenção de um código autônomo",
    enunciado:
      "Um código malicioso passou a se espalhar sozinho pelos computadores de uma superintendência, explorando uma falha não corrigida do sistema operacional, sem que ninguém abrisse arquivos ou clicasse em links. Durante o incidente, a rede ficou lenta. Considere as afirmativas:\n\nI. O comportamento descrito é característico de um worm, que se propaga enviando cópias de si mesmo pela rede.\nII. Como ocorre com o vírus, o worm precisa se anexar a um arquivo hospedeiro e depende de que o usuário execute esse arquivo para se propagar.\nIII. A lentidão da rede pode decorrer do próprio volume de cópias enviadas pelo código, que consome a capacidade de transmissão.\nIV. Aplicar a atualização de segurança que corrige a falha explorada ajuda a conter a propagação.\n\nEstá correto o que se afirma em",
    alternativas: ["I, III e IV, apenas.", "I e III, apenas.", "I, II e III, apenas.", "II e III, apenas.", "I, II, III e IV."],
    correta: 0,
    explicacao:
      "I: o worm é autônomo e se propaga sozinho, explorando vulnerabilidades e enviando cópias de si mesmo pela rede. III: a replicação em massa consome banda, e a lentidão é um sintoma típico. IV: corrigir a falha explorada fecha a porta de entrada e ajuda a conter a propagação. Logo, I, III e IV.",
    explicacaoErradas:
      "II está errada: quem precisa de arquivo hospedeiro e da execução pelo usuário é o vírus; o worm é um programa independente, que não se anexa a outros arquivos e se espalha sem ação humana. Caem as combinações com II, e a que deixa de fora a IV, que está certa.",
    pegadinha:
      "Vírus e worm são confundidos porque ambos se replicam. A diferença está em como se espalham: o vírus depende de hospedeiro e de execução; o worm se propaga sozinho, explorando falhas.",
    conhecimento:
      "Vírus: infecta arquivos ou programas e depende de execução para se propagar. Worm: programa autônomo que se replica pela rede, explorando vulnerabilidades, e consome recursos. Cavalo de troia: parece legítimo e esconde uma função maliciosa, sem se replicar. Defesa: atualizações de segurança e antivírus atualizado.",
    origem: "banco",
  },
  {
    id: "prf-info-032",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Assinatura digital: chaves e garantias",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: como a assinatura é gerada e conferida, e o que ela garante",
    enunciado:
      "Uma servidora assinou digitalmente, com certificado ICP-Brasil, um ofício enviado a outro órgão. Sobre a assinatura digital, considere as afirmativas:\n\nI. A assinatura é gerada com a chave privada da servidora, e o destinatário a confere com a chave pública dela, contida no certificado.\nII. Se o ofício for alterado depois de assinado, mesmo numa vírgula, a verificação da assinatura falha.\nIII. A assinatura digital torna o conteúdo do ofício sigiloso, de modo que só o destinatário consegue lê-lo.\nIV. A assinatura garante a integridade e a autenticidade do ofício, mas não impede que a servidora negue depois tê-lo assinado.\n\nEstá correto o que se afirma em",
    alternativas: ["I, II e III, apenas.", "II e IV, apenas.", "I, III e IV, apenas.", "I e II, apenas.", "II, apenas."],
    correta: 3,
    explicacao:
      "I: a assinatura é gerada com a chave privada da titular e verificada com a chave pública correspondente, que está no certificado. II: a verificação compara o resumo (hash) do documento recebido com o que foi assinado; qualquer alteração muda o resumo, e a assinatura deixa de conferir. Logo, I e II.",
    explicacaoErradas:
      "III está errada: a assinatura não cifra o conteúdo, e o ofício continua legível; o sigilo depende de criptografar o documento, procedimento distinto da assinatura. IV está errada: a assinatura digital válida garante o não repúdio, e a titular não pode negar a autoria. Caem as combinações com III ou IV, e a que deixa de fora a I, que está certa.",
    pegadinha:
      "Assinar não é cifrar. A assinatura garante autoria, integridade e não repúdio, mas o documento assinado continua legível por qualquer um que o receba.",
    conhecimento:
      "Assinatura digital: resumo (hash) do documento cifrado com a chave privada do signatário e verificado com a chave pública dele. Garante autenticidade, integridade e não repúdio, mas não confidencialidade. O certificado digital vincula a chave pública ao titular e é emitido por uma autoridade certificadora.",
    origem: "banco",
  },
  {
    id: "prf-info-033",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Pharming por DNS adulterado no roteador",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: identificar o golpe pelo ponto da comunicação que foi adulterado",
    enunciado:
      "Um servidor digita corretamente, no navegador do computador de casa, o endereço do banco em que recebe o salário, mas é levado a uma página falsa, idêntica à verdadeira. A investigação mostrou que o roteador doméstico, ainda com a senha de fábrica, teve o servidor DNS alterado por um invasor. Considere as afirmativas:\n\nI. O golpe é um caso de pharming, em que a resolução do nome é desviada para um endereço controlado pelo criminoso.\nII. O golpe teria sido evitado se o servidor conferisse com cuidado os links recebidos por e-mail antes de clicar.\nIII. Os outros aparelhos conectados ao mesmo roteador também podem ser desviados para a página falsa.\nIV. Instalar um antivírus no computador resolve o problema, porque a alteração foi feita nele.\n\nEstá correto o que se afirma em",
    alternativas: ["I, II e III, apenas.", "I e III, apenas.", "II e IV, apenas.", "I, apenas.", "I, III e IV, apenas."],
    correta: 1,
    explicacao:
      "I: no pharming, o usuário digita o endereço certo, mas a tradução do nome é adulterada e aponta para um servidor do criminoso; aqui, o desvio veio do DNS configurado no roteador. III: o roteador entrega essa configuração a todos os aparelhos da rede, que também podem ser desviados. Logo, I e III.",
    explicacaoErradas:
      "II está errada: o servidor não clicou em link nenhum, digitou o endereço correto. Conferir links ajuda contra golpes por mensagem, não contra desvio na resolução de nomes. IV está errada: a alteração foi feita no roteador, e não no computador; o antivírus não corrige a configuração do aparelho. A defesa é corrigir o DNS do roteador e trocar a senha de administração dele. Caem as combinações com II ou IV, e a que deixa de fora a III, que está certa.",
    pegadinha:
      "No pharming, a vítima faz tudo certo: digita o endereço verdadeiro. Por isso, cuidados com links não protegem, e o problema está fora do computador, na configuração de rede.",
    conhecimento:
      "Pharming: desvio da resolução de nomes (DNS adulterado no roteador ou no computador, arquivo hosts alterado) para levar a vítima a um site falso mesmo com o endereço digitado corretamente. Defesas: trocar a senha de fábrica do roteador, manter o firmware atualizado, conferir o certificado do site e usar autenticação forte.",
    origem: "banco",
  },
  {
    id: "prf-info-034",
    materia: "info",
    topico: "Editores de texto (Word e Writer)",
    subassunto: "Marca-d'água no Word",
    dificuldade: 4,
    raciocinio: "Escolha de recurso: localizar no Word o comando que insere um aviso ao fundo de todas as páginas",
    enunciado:
      "Um servidor prepara no Word do Microsoft 365 a minuta de uma portaria e quer que a palavra “RASCUNHO” apareça em diagonal, clara e ao fundo do texto, em todas as páginas, sem interferir na digitação. O recurso adequado é",
    alternativas: [
      "Bordas de Página, no grupo Parágrafo da guia Página Inicial.",
      "Marca-d'água, no grupo Plano de Fundo da Página da guia Design.",
      "Cor da Página, na guia Revisão, que imprime o texto ao fundo.",
      "WordArt, na guia Inserir, que replica o objeto em todas as páginas.",
      "Controlar Alterações, na guia Revisão, que marca a versão preliminar.",
    ],
    correta: 1,
    explicacao:
      "A marca-d'água insere um texto ou imagem esmaecido atrás do conteúdo, repetido em todas as páginas, sem atrapalhar a edição. No Word do Microsoft 365, fica na guia Design, grupo Plano de Fundo da Página, com modelos prontos, como “RASCUNHO”, e a opção personalizada, com texto, fonte, cor e layout diagonal. No Writer, fica em Formatar > Marca-d'água.",
    explicacaoErradas:
      "Bordas de Página emoldura as páginas e fica na guia Design, e não no grupo Parágrafo. Cor da Página muda o fundo e também não fica na guia Revisão. O WordArt insere um objeto de texto decorativo só onde é colocado, sem se repetir nas demais páginas. Controlar Alterações registra as edições feitas no texto e não insere nenhum aviso ao fundo.",
    pegadinha:
      "Cor da Página e Bordas de Página estão no mesmo grupo da marca-d'água, e por isso parecem equivalentes. Só a marca-d'água coloca um texto esmaecido ao fundo, repetido em todas as páginas.",
    conhecimento:
      "Guia Design > Plano de Fundo da Página: Marca-d'água, Cor da Página e Bordas de Página. Marca-d'água personalizada: texto ou imagem, com fonte, tamanho, cor, semitransparência e layout diagonal ou horizontal. No Writer: Formatar > Marca-d'água.",
    fonte: "Adaptada de FGV — 2026 — PC-PI — Oficial Investigador de Polícia",
    origem: "banco",
  },
  {
    id: "prf-info-035",
    materia: "info",
    topico: "Editores de texto (Word e Writer)",
    subassunto: "Controlar Alterações e revisão",
    dificuldade: 4,
    raciocinio: "Escolha de recurso: registrar cada edição com a autoria para aceitação ou rejeição posterior",
    enunciado:
      "Três servidores vão revisar, um depois do outro, o mesmo relatório no Word. A chefia quer que cada inserção, exclusão e mudança de formatação fique marcada no texto, com o nome de quem a fez, para depois aceitar ou rejeitar cada uma. O recurso a ser ativado antes da revisão é",
    alternativas: [
      "Novo Comentário, da guia Revisão, que registra as edições feitas no texto.",
      "Comparar, da guia Revisão, que grava cada alteração enquanto se digita.",
      "Restringir Edição, da guia Revisão, que transforma exclusões em comentários.",
      "Controlar Alterações, da guia Revisão, que marca cada mudança com a autoria.",
      "Pincel de Formatação, da guia Página Inicial, que destaca as mudanças de estilo.",
    ],
    correta: 3,
    explicacao:
      "Com Controlar Alterações ativado (guia Revisão; atalho Ctrl+Shift+E), o Word marca cada inserção, exclusão e mudança de formatação, com o nome do autor e a data. Ao final, a chefia percorre as marcas e aceita ou rejeita cada uma. No Writer, o recurso fica em Editar > Controlar alterações > Gravar (Ctrl+Shift+C).",
    explicacaoErradas:
      "Comentário é uma anotação à margem e não registra as edições feitas no texto. Comparar confronta duas versões já prontas e gera um documento com as diferenças, sem gravar nada durante a digitação. Restringir Edição limita o que se pode alterar, sem transformar exclusões em comentários. O Pincel de Formatação copia a formatação de um trecho para outro e não destaca mudanças.",
    pegadinha:
      "Comparar também mostra diferenças, e por isso parece servir. Mas ele trabalha depois, com duas versões prontas; só o Controlar Alterações registra cada mudança no momento em que é feita, com a autoria.",
    conhecimento:
      "Guia Revisão do Word: Controlar Alterações (Ctrl+Shift+E), Aceitar, Rejeitar, Novo Comentário, Comparar e Restringir Edição. No Writer: Editar > Controlar alterações > Gravar (Ctrl+Shift+C), e Gerenciar, para aceitar ou rejeitar.",
    fonte: "Adaptada de FGV — 2022 — PC-RJ — Investigador Policial",
    origem: "banco",
  },
  {
    id: "prf-info-036",
    materia: "info",
    topico: "Editores de texto (Word e Writer)",
    subassunto: "Formatos ODF, .docx e exportação para PDF",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: formato nativo do Writer, compatibilidade com o Word e opções de exportação",
    enunciado:
      "Uma unidade da PRF usa o LibreOffice Writer, e outra, o Word do Microsoft 365. Sobre a troca de documentos entre elas e o arquivamento desses documentos, considere as afirmativas:\n\nI. O Writer salva por padrão no formato .odt, do padrão aberto ODF.\nII. O Writer pode salvar um documento no formato .docx, para que a outra unidade o abra no Word.\nIII. O Writer exporta o documento para PDF sem precisar de programa adicional.\nIV. Todo PDF exportado pelo Writer sai automaticamente no padrão PDF/A, próprio para arquivamento de longo prazo, sem que seja preciso marcar nada na exportação.\n\nEstá correto o que se afirma em",
    alternativas: ["I, II e III, apenas.", "I e III, apenas.", "II e IV, apenas.", "I, III e IV, apenas.", "II e III, apenas."],
    correta: 0,
    explicacao:
      "I: o formato nativo do Writer é o .odt, do padrão aberto ODF. II: pelo Salvar como, o Writer grava em .docx, que o Word abre normalmente, ainda que formatações complexas possam variar. III: Arquivo > Exportar como PDF gera o PDF direto, sem programa adicional. Logo, I, II e III.",
    explicacaoErradas:
      "IV está errada: o PDF/A é uma opção que se marca na janela de exportação; sem ela, o arquivo sai como PDF comum. Caem as combinações com IV, e as que deixam de fora a I ou a II, que estão certas.",
    pegadinha:
      "Exportar para PDF é nativo no Writer, mas o PDF/A, voltado ao arquivamento, depende de marcar a opção na exportação. A afirmativa IV transforma uma opção em comportamento automático.",
    conhecimento:
      "Writer: .odt (documento) e .ott (modelo), no padrão ODF; salva também em .docx, .doc e .rtf. Exportar como PDF fica no menu Arquivo, com opções como PDF/A, senha e marcadores. O Word também abre e salva arquivos .odt.",
    origem: "banco",
  },
  {
    id: "prf-info-037",
    materia: "info",
    topico: "Editores de texto (Word e Writer)",
    subassunto: "Coautoria e histórico de versões no Microsoft 365",
    dificuldade: 4,
    raciocinio: "Análise de cenário: efeitos de manter o documento na nuvem e compartilhá-lo para edição",
    enunciado:
      "Três servidores precisam redigir juntos, em prazo curto, o relatório anual de uma superintendência. Duas propostas foram feitas: na primeira, cada um edita uma cópia do arquivo e a envia por e-mail ao coordenador, que junta as partes; na segunda, o documento fica salvo no OneDrive ou no SharePoint do órgão e é compartilhado com os três, que o abrem no Word do Microsoft 365. Adotada a segunda proposta, é correto afirmar que",
    alternativas: [
      "cada servidor edita uma cópia própria, que o Word mescla sozinho quando o arquivo é fechado.",
      "só um servidor edita por vez, e os demais ficam com o arquivo bloqueado para leitura.",
      "a edição simultânea exige que todos usem o Word instalado, e não o Word para a web.",
      "o salvamento automático impede recuperar versões anteriores do documento.",
      "os três podem editar juntos, com salvamento automático e histórico de versões.",
    ],
    correta: 4,
    explicacao:
      "Com o arquivo no OneDrive ou no SharePoint, o Word permite a coautoria: várias pessoas editam ao mesmo tempo, vendo onde cada uma está trabalhando. O salvamento automático grava as alterações continuamente, e o histórico de versões permite consultar e restaurar versões anteriores.",
    explicacaoErradas:
      "Não há cópias separadas a mesclar: todos trabalham no mesmo arquivo, na nuvem. O bloqueio para edição de um por vez é comportamento de arquivos abertos em pastas de rede comuns, e não da coautoria. A edição simultânea funciona tanto no Word instalado quanto no Word para a web. E o salvamento automático não apaga o passado: o histórico guarda as versões anteriores, que podem ser restauradas.",
    pegadinha:
      "O salvamento automático parece arriscado, como se cada gravação apagasse a anterior. Na nuvem, ocorre o contrário: o histórico de versões guarda os estados anteriores, que podem ser restaurados.",
    conhecimento:
      "Coautoria no Microsoft 365: arquivo no OneDrive ou SharePoint, compartilhado com permissão de edição; edição simultânea no Word instalado, na web ou no celular; salvamento automático; histórico de versões (Arquivo > Informações > Histórico de Versões); comentários com menção (@nome).",
    origem: "banco",
  },
  {
    id: "prf-info-038",
    materia: "info",
    topico: "Planilhas eletrônicas (Excel e Calc)",
    subassunto: "Alça de preenchimento com referência absoluta",
    dificuldade: 5,
    raciocinio: "Cálculo de referências: reconhecer a progressão gerada pela fórmula arrastada e contar as somas",
    enunciado:
      "Numa planilha do Excel, a célula A1 contém o valor 5, e a célula B1, o valor 3. Na célula A2, foi digitada a fórmula =A1+$B$1. Em seguida, a alça de preenchimento de A2 foi arrastada até a célula A50. O valor exibido em A50 é",
    alternativas: ["8.", "149.", "152.", "155.", "150."],
    correta: 2,
    explicacao:
      "Ao arrastar, a referência relativa A1 acompanha o deslocamento e passa a apontar sempre para a célula de cima, enquanto $B$1 fica fixa. Assim, cada célula soma 3 à anterior: A2 = 8, A3 = 11, e assim por diante. De A1 a A50 há 49 somas de 3: 5 + 3 × 49 = 152.",
    explicacaoErradas:
      "8 seria o resultado se a referência à célula de cima também fosse absoluta, repetindo o valor de A2 em todas as linhas. 149 é o valor de A49, uma linha antes, e 155 o de A51, uma linha depois: são erros de contagem das somas. 150 corresponde a 3 × 50, ignorando o valor inicial de A1 e contando uma soma a mais.",
    pegadinha:
      "A conta exige contar quantas vezes o 3 foi somado: de A2 até A50 são 49 células, e não 50. Errar a contagem por uma linha leva aos valores vizinhos, que estão entre as respostas oferecidas.",
    conhecimento:
      "Alça de preenchimento: copia a fórmula para as células vizinhas, ajustando as referências relativas e mantendo as absolutas ($). Uma fórmula do tipo “célula de cima + constante” gera uma progressão aritmética: valor na linha n = valor inicial + razão × (n − 1). O duplo clique na alça preenche até o fim da coluna vizinha.",
    fonte: "Adaptada de FGV — 2022 — PC-RJ — Investigador Policial",
    origem: "banco",
  },
  {
    id: "prf-info-039",
    materia: "info",
    topico: "Planilhas eletrônicas (Excel e Calc)",
    subassunto: "Colagem de bloco em intervalo maior",
    dificuldade: 5,
    raciocinio: "Cálculo de referências: ajustar as fórmulas a cada posição do bloco repetido e encadear os resultados",
    enunciado:
      "Na planilha de controle de autuações de uma unidade da PRF, elaborada no Excel, as células A1, B1, A2 e B2 contêm, respectivamente, os valores 1, 4, 3 e 2. A célula C1 contém a fórmula =A1+B1, e a célula C2, a fórmula =A2+B2. As demais células da planilha estão vazias. Um servidor selecionou o intervalo C1:C2, copiou-o (Ctrl+C), selecionou o intervalo D1:F4 e colou (Ctrl+V). Os valores exibidos nas células F1, F2 e F3 são, respectivamente,",
    alternativas: ["23; 19; 0.", "5; 5; 5.", "14; 12; 0.", "23; 19; 23.", "9; 7; 0."],
    correta: 0,
    explicacao:
      "As referências são relativas e se ajustam ao destino: uma coluna à direita, =A1+B1 vira =B1+C1; duas, =C1+D1; três, =D1+E1. Como o destino (4 linhas por 3 colunas) tem dimensões múltiplas das da origem (2 linhas por 1 coluna), o Excel repete o bloco, e as linhas 3 e 4 recebem as mesmas fórmulas, deslocadas. D1 = 4 + 5 = 9; E1 = 5 + 9 = 14; F1 = 9 + 14 = 23. D2 = 2 + 5 = 7; E2 = 5 + 7 = 12; F2 = 7 + 12 = 19. F3 = D3 + E3 vale 0, porque essa cadeia se apoia em B3 e C3, vazias.",
    explicacaoErradas:
      "“5; 5; 5” supõe referências absolutas, que não se ajustariam. “14; 12; 0” são os valores da coluna E, e “9; 7; 0”, os da coluna D: erros no deslocamento. “23; 19; 23” supõe que a linha 3 repetiria o resultado da linha 1, mas a fórmula repetida aponta para células vazias da linha 3.",
    pegadinha:
      "A colagem num intervalo maior repete o bloco copiado, mas não repete os resultados: as fórmulas das linhas 3 e 4 são deslocadas e passam a apontar para células vazias, o que zera F3.",
    conhecimento:
      "Colar um bloco num intervalo cujas dimensões são múltiplas das da origem repete o bloco, ajustando as referências relativas a cada posição. Referências absolutas ($A$1) não se ajustam. O Calc se comporta da mesma forma.",
    fonte: "Adaptada de FGV — 2022 — PC-AM — Investigador de Polícia",
    origem: "banco",
  },
  {
    id: "prf-info-040",
    materia: "info",
    topico: "Planilhas eletrônicas (Excel e Calc)",
    subassunto: "SOMASE × SOMASES: ordem dos argumentos",
    dificuldade: 5,
    raciocinio: "Montagem de fórmula: ordem dos argumentos na soma com vários critérios",
    enunciado:
      "Uma planilha do Excel registra, em A2:A200, a unidade que pagou cada diária; em B2:B200, o mês do pagamento; e em C2:C200, o valor pago. A unidade desejada está digitada em F1, e o mês, em G1. A fórmula que soma os valores pagos pela unidade de F1 no mês de G1 é",
    alternativas: [
      "=SOMASE(A2:A200;F1;C2:C200;B2:B200;G1)",
      "=SOMASES(A2:A200;F1;B2:B200;G1;C2:C200)",
      "=SOMASE(C2:C200;A2:A200;F1;B2:B200;G1)",
      "=SOMASES(C2:C200;A2:A200;F1;B2:B200;G1)",
      "=CONT.SES(C2:C200;A2:A200;F1;B2:B200;G1)",
    ],
    correta: 3,
    explicacao:
      "Na SOMASES, o intervalo a somar vem primeiro, seguido dos pares de intervalo de critério e critério: =SOMASES(C2:C200;A2:A200;F1;B2:B200;G1). Somam-se os valores de C nas linhas em que A é igual a F1 e B é igual a G1.",
    explicacaoErradas:
      "A SOMASE aceita um só critério, na ordem intervalo, critério e intervalo a somar, e não admite os argumentos extras. A SOMASES com o intervalo de soma no fim toma A2:A200 como intervalo a somar e desalinha os pares seguintes, o que gera erro. A CONT.SES conta linhas, em vez de somar, e só aceita pares de intervalo e critério.",
    pegadinha:
      "SOMASE e SOMASES invertem a posição do intervalo a somar: na SOMASE ele vem por último; na SOMASES, primeiro. Quem leva o hábito de uma função para a outra desalinha todos os argumentos.",
    conhecimento:
      "SOMASE(intervalo; critério; [intervalo_soma]). SOMASES(intervalo_soma; intervalo_critério1; critério1; [intervalo_critério2; critério2]…). CONT.SE(intervalo; critério) e CONT.SES(intervalo1; critério1; …) contam. MÉDIASES segue a ordem da SOMASES.",
    origem: "banco",
  },
  {
    id: "prf-info-041",
    materia: "info",
    topico: "Internet e intranet: conceitos e protocolos",
    subassunto: "Modelos de implantação de nuvem",
    dificuldade: 4,
    raciocinio: "Classificação: identificar o modelo de implantação pelo público atendido e pela integração de ambientes",
    enunciado:
      "Um órgão federal mantém os sistemas que tratam dados sigilosos numa infraestrutura de nuvem operada só para ele, em datacenter próprio, e usa uma nuvem pública para os sistemas de atendimento ao cidadão, integrando os dois ambientes de modo que dados e aplicações possam transitar entre eles. Em outro projeto, vários órgãos de segurança pública, com requisitos comuns de segurança e conformidade, passaram a compartilhar uma infraestrutura de nuvem provisionada para uso exclusivo desse grupo. Pela classificação do NIST, os dois cenários correspondem, respectivamente, a",
    alternativas: [
      "nuvem privada e nuvem pública.",
      "nuvem pública e nuvem híbrida.",
      "nuvem comunitária e nuvem privada.",
      "nuvem híbrida e nuvem pública.",
      "nuvem híbrida e nuvem comunitária.",
    ],
    correta: 4,
    explicacao:
      "No primeiro cenário, uma nuvem privada, operada só para o órgão, e uma nuvem pública são integradas, com portabilidade de dados e aplicações: é a nuvem híbrida. No segundo, a infraestrutura é provisionada para uso exclusivo de um grupo de organizações com interesses comuns: é a nuvem comunitária.",
    explicacaoErradas:
      "O primeiro cenário não é só privado nem só público, nem comunitário: atende a um único órgão e integra dois modelos diferentes. O segundo não é público, porque a infraestrutura é exclusiva de um grupo, nem privado, porque atende a vários órgãos, e não a uma só organização.",
    pegadinha:
      "Nuvem privada e nuvem comunitária são confundidas porque ambas são restritas. A privada atende a uma só organização; a comunitária, a um grupo de organizações com interesses comuns, como requisitos de segurança e conformidade.",
    conhecimento:
      "Modelos de implantação (NIST SP 800-145): privada (uma só organização), comunitária (grupo com interesses comuns), pública (público em geral) e híbrida (duas ou mais infraestruturas distintas, integradas, com portabilidade de dados e aplicações). Modelos de serviço: IaaS, PaaS e SaaS.",
    origem: "banco",
  },
  {
    id: "prf-info-042",
    materia: "info",
    topico: "Internet e intranet: conceitos e protocolos",
    subassunto: "Funções e portas padrão dos protocolos",
    dificuldade: 4,
    raciocinio: "Associação: função, segurança e porta padrão de cada protocolo",
    enunciado:
      "A equipe de TI de uma superintendência documentou os protocolos usados na rede. Associe cada protocolo à respectiva descrição.\n\n1. SSH\n2. Telnet\n3. DNS\n4. DHCP\n\n( ) Converte nomes de domínio em endereços IP e atende, por padrão, na porta 53.\n( ) Dá acesso remoto a um terminal, com toda a sessão cifrada, por padrão na porta 22.\n( ) Configura automaticamente endereço IP, máscara, gateway e servidores de nomes dos computadores que entram na rede.\n( ) Dá acesso remoto a um terminal, por padrão na porta 23, transmitindo inclusive a senha sem criptografia.\n\nA sequência correta, de cima para baixo, é",
    alternativas: ["3, 2, 4, 1.", "3, 1, 4, 2.", "4, 1, 3, 2.", "4, 2, 3, 1.", "3, 1, 2, 4."],
    correta: 1,
    explicacao:
      "O DNS converte nomes em endereços IP (porta 53). O SSH dá acesso remoto a um terminal com toda a sessão cifrada (porta 22). O DHCP configura automaticamente os computadores que entram na rede. O Telnet também dá acesso remoto a terminal, mas sem criptografia, nem mesmo da senha (porta 23). A sequência é 3, 1, 4, 2.",
    explicacaoErradas:
      "As sequências que trocam 1 e 2 confundem SSH e Telnet: os dois abrem um terminal remoto, mas só o SSH cifra a sessão. As que trocam 3 e 4 confundem DNS e DHCP: o DHCP apenas informa ao computador qual servidor DNS usar. E “3, 1, 2, 4” atribui ao Telnet a configuração automática da rede, e ao DHCP, o acesso remoto.",
    pegadinha:
      "SSH e Telnet parecem fazer a mesma coisa: abrir um terminal remoto. A diferença está na segurança: o Telnet trafega tudo em texto claro, e por isso foi substituído pelo SSH.",
    conhecimento:
      "Portas padrão: FTP 20/21, SSH 22, Telnet 23, SMTP 25 (587 para envio autenticado), DNS 53, DHCP 67/68 (UDP), HTTP 80, POP3 110, IMAP 143, HTTPS 443, IMAPS 993 e POP3S 995.",
    origem: "banco",
  },
  {
    id: "prf-info-043",
    materia: "info",
    topico: "Internet e intranet: conceitos e protocolos",
    subassunto: "Endereços IPv4 privados e públicos",
    dificuldade: 5,
    raciocinio: "Classificação: conferir cada endereço contra as faixas reservadas às redes privadas",
    enunciado:
      "Ao inventariar os equipamentos de uma superintendência, a equipe de TI encontrou os endereços IPv4 192.168.0.15, 10.20.30.40, 177.45.20.8 e 172.40.10.3. Segundo as faixas reservadas às redes privadas pela RFC 1918, é correto afirmar que",
    alternativas: [
      "todos são privados, porque endereços iniciados por 1 são reservados às redes internas.",
      "172.40.10.3 é privado, porque toda a faixa iniciada por 172 é reservada a redes internas.",
      "192.168.0.15 e 10.20.30.40 são privados; 177.45.20.8 e 172.40.10.3 são públicos.",
      "só 10.20.30.40 é privado, porque a faixa 192.168 é exclusiva de roteadores domésticos.",
      "177.45.20.8 é privado, porque são privados os endereços com primeiro número maior que 127.",
    ],
    correta: 2,
    explicacao:
      "A RFC 1918 reserva às redes privadas as faixas de 10.0.0.0 a 10.255.255.255, de 172.16.0.0 a 172.31.255.255 e de 192.168.0.0 a 192.168.255.255. Assim, 192.168.0.15 e 10.20.30.40 são privados. Já 172.40.10.3 fica fora da faixa de 172.16 a 172.31, e 177.45.20.8 não pertence a nenhuma das faixas: ambos são públicos.",
    explicacaoErradas:
      "Não existe regra que torne privados os endereços iniciados por 1: 177.45.20.8 é público. Só parte da faixa iniciada por 172 é privada, de 172.16 a 172.31, e 172.40 fica fora. A faixa 192.168 é privada e pode ser usada em qualquer rede interna, não só em roteadores domésticos. E ter o primeiro número maior que 127 não torna o endereço privado.",
    pegadinha:
      "O 172 engana: só é privada a faixa de 172.16.0.0 a 172.31.255.255. Um endereço como 172.40.10.3 começa igual, mas é público.",
    conhecimento:
      "Faixas privadas (RFC 1918): 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16. Não são roteadas na internet; o NAT do roteador traduz os endereços privados para o público. 127.0.0.1 é o endereço de loopback (localhost). O IPv4 tem 32 bits, em quatro octetos de 0 a 255.",
    origem: "banco",
  },
  {
    id: "prf-info-044",
    materia: "info",
    topico: "Navegadores",
    subassunto: "Limpeza de dados de navegação",
    dificuldade: 4,
    raciocinio: "Diagnóstico de situação: separar o que o navegador registra do que o usuário salvou no disco",
    enunciado:
      "Num computador compartilhado de uma unidade da PRF, um servidor consultou pelo Google Chrome o portal de um concurso e baixou o edital em PDF. Ao terminar, abriu a limpeza de dados de navegação, escolheu o intervalo “Todo o período” e marcou histórico de navegação, histórico de downloads, cookies e outros dados do site, e imagens e arquivos armazenados em cache. Após a limpeza, permanece no computador",
    alternativas: [
      "a lista de sites visitados, que só se apaga pela página Histórico.",
      "o conteúdo do cache, preservado para acelerar as próximas visitas.",
      "os cookies do portal, que só se apagam ao desinstalar o navegador.",
      "a lista de arquivos baixados exibida na página de downloads.",
      "o arquivo baixado durante a consulta, na pasta de downloads.",
    ],
    correta: 4,
    explicacao:
      "A limpeza de dados de navegação apaga registros que o próprio navegador guarda, como histórico, lista de downloads, cookies e cache, mas não mexe nos arquivos que o usuário salvou. O PDF do edital continua na pasta de downloads e precisa ser apagado à parte, pelo gerenciador de arquivos.",
    explicacaoErradas:
      "O histórico de navegação estava marcado e foi apagado; a página Histórico é só outro caminho para isso. O cache e os cookies também estavam marcados e foram excluídos, sem precisar desinstalar nada. E apagar o histórico de downloads limpa a lista exibida no navegador, mas não o arquivo.",
    pegadinha:
      "“Histórico de downloads” soa como se apagasse os downloads. Ele apaga só a lista que o navegador mostra; o arquivo baixado continua no disco.",
    conhecimento:
      "Limpeza de dados no Chrome (Ctrl+Shift+Del): histórico de navegação, histórico de downloads, cookies e outros dados do site, imagens e arquivos em cache, senhas, preenchimento automático e configurações de sites, com escolha do intervalo de tempo. Favoritos e arquivos baixados não são apagados.",
    fonte: "Adaptada de FGV — 2021 — PC-RN — Agente de Polícia Civil",
    origem: "banco",
  },
  {
    id: "prf-info-045",
    materia: "info",
    topico: "Navegadores",
    subassunto: "Leitura do domínio em links falsos",
    dificuldade: 5,
    raciocinio: "Leitura de endereço: localizar o domínio registrado no nome do servidor",
    enunciado:
      "Uma mensagem recebida por um servidor pede a atualização do cadastro funcional e traz o link https://www.gov.br.validacao-cadastro.com/login?ref=sistema. Analisando apenas o endereço, é correto afirmar que",
    alternativas: [
      "o domínio registrado é validacao-cadastro.com, e www.gov.br é só um subdomínio dele.",
      "o domínio registrado é gov.br, e validacao-cadastro.com é um serviço hospedado nele.",
      "o endereço é oficial, porque contém www.gov.br e usa o protocolo https.",
      "o domínio registrado é www.gov.br, e validacao-cadastro.com é o nome do servidor dele.",
      "o endereço é seguro, porque o parâmetro ref=sistema confirma a origem oficial do link.",
    ],
    correta: 0,
    explicacao:
      "O nome do servidor é www.gov.br.validacao-cadastro.com. Dentro dele, o domínio se lê da direita para a esquerda: .com é o domínio de topo, e validacao-cadastro.com, o domínio registrado. Tudo o que vem à esquerda dele, como www.gov.br, é subdomínio, criado livremente por quem controla validacao-cadastro.com.",
    explicacaoErradas:
      "gov.br e www.gov.br não são o domínio registrado, porque não fecham o nome do servidor; aqui aparecem só como parte do subdomínio, e validacao-cadastro.com não pertence ao gov.br. Conter “www.gov.br” não torna o endereço oficial, e o https só indica conexão cifrada, já que qualquer domínio pode obter certificado. O parâmetro ref=sistema é texto escolhido por quem montou o link e não comprova origem nenhuma.",
    pegadinha:
      "O golpe aposta na leitura da esquerda para a direita: quem vê “www.gov.br” logo no início acha que o site é do governo. Mas quem controla o endereço é o domínio que fecha o nome do servidor.",
    conhecimento:
      "Nome do servidor: subdomínios + domínio registrado + domínio de topo, lido da direita para a esquerda. No Brasil, há categorias sob o .br, como .gov.br e .com.br; um site do governo termina em .gov.br. O cadeado e o https indicam conexão cifrada, não legitimidade do site.",
    origem: "banco",
  },
  {
    id: "prf-info-046",
    materia: "info",
    topico: "Correio eletrônico",
    subassunto: "Visibilidade dos campos Para, Cc e Cco",
    dificuldade: 4,
    raciocinio: "Diagnóstico de situação: o que cada destinatário vê conforme o campo em que foi incluído",
    enunciado:
      "Um inspetor enviou um e-mail institucional com o endereço do chefe no campo Para, o de um agente no campo Cc e o da corregedoria no campo Cco. Considerando o funcionamento padrão dos programas de correio eletrônico, é correto afirmar que",
    alternativas: [
      "o agente não vê que o chefe recebeu a mensagem, porque quem está em Cc só vê o próprio endereço.",
      "se o chefe usar Responder a todos, a resposta dele também chegará à corregedoria.",
      "o chefe e o agente sabem que a corregedoria recebeu a mensagem, mas não veem o endereço dela.",
      "a corregedoria sabe que o chefe e o agente receberam a mensagem, mas nenhum dos dois sabe dela.",
      "o campo Cco cifra a cópia da corregedoria, que só ela consegue abrir.",
    ],
    correta: 3,
    explicacao:
      "Os endereços de Para e de Cc ficam visíveis a todos os destinatários, inclusive a quem recebe em cópia oculta; por isso, a corregedoria sabe que o chefe e o agente receberam a mensagem. Já o endereço em Cco não aparece para mais ninguém além do remetente, e os demais nem sabem que houve cópia oculta.",
    explicacaoErradas:
      "Quem está em Cc vê normalmente os endereços de Para e de Cc. O Responder a todos de quem está em Para ou Cc alcança só os endereços visíveis, e a corregedoria fica de fora. O Cco não informa aos demais que houve cópia oculta, e não cifra nada: apenas omite o endereço.",
    pegadinha:
      "A ocultação do Cco é de mão única: quem está oculto vê todos os outros, mas ninguém o vê. Por isso a resposta a todos de quem está em Para ou Cc não chega à cópia oculta.",
    conhecimento:
      "Para: destinatários principais. Cc: cópia visível a todos. Cco: cópia oculta, que não aparece para os demais. Quem está em Cco vê os campos Para e Cc. Sigilo do conteúdo exige criptografia, recurso distinto dos campos de destinatário.",
    fonte: "Adaptada de FGV — 2022 — PC-RJ — Investigador Policial",
    origem: "banco",
  },
  {
    id: "prf-info-047",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Hash e integridade de arquivos",
    dificuldade: 4,
    raciocinio: "Análise de cenário: o que entra no cálculo do hash e o que ele prova",
    enunciado:
      "Para preservar a integridade de um vídeo de fiscalização, um policial calculou o hash SHA-256 do arquivo e anotou o valor no relatório. Meses depois, o arquivo foi renomeado e transferido para outra pasta do servidor, e um novo cálculo do hash deu exatamente o mesmo valor. Disso se conclui que",
    alternativas: [
      "o hash idêntico prova o sigilo do vídeo, porque o arquivo ficou cifrado pelo SHA-256.",
      "o conteúdo não mudou, porque o hash depende só do conteúdo, não do nome nem do local.",
      "o hash deveria mudar ao renomear o arquivo, então o resultado indica erro no cálculo.",
      "o valor do hash permite reconstruir o vídeo original, caso o arquivo se perca.",
      "o hash comprova quem gravou o vídeo, porque é gerado com a chave privada do autor.",
    ],
    correta: 1,
    explicacao:
      "O hash é calculado sobre o conteúdo do arquivo; nome, datas e pasta ficam no sistema de arquivos e não entram na conta. Como o valor bateu, o conteúdo é o mesmo, bit a bit: qualquer alteração, por menor que fosse, mudaria o resultado.",
    explicacaoErradas:
      "O hash não cifra o arquivo nem dá sigilo: o vídeo continua legível. Renomear ou mover não altera o conteúdo, e o mesmo hash é o resultado esperado, não um erro. O hash é uma função de mão única: do resumo não se reconstrói o arquivo. E o hash comum não usa chave nenhuma nem identifica quem gravou; a autoria se comprova com assinatura digital.",
    pegadinha:
      "O nome do arquivo parece fazer parte dele, mas fica registrado no sistema de arquivos. Renomear e mover não mudam o hash; só a alteração do conteúdo muda.",
    conhecimento:
      "Hash (resumo criptográfico): função de mão única que gera um valor de tamanho fixo (SHA-256: 256 bits) a partir de qualquer conteúdo; mudanças mínimas alteram todo o resultado. Usos: integridade de arquivos, cadeia de custódia, armazenamento de senhas e base da assinatura digital. MD5 e SHA-1 são considerados inseguros.",
    origem: "banco",
  },
  {
    id: "prf-info-048",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Certificados A1 e A3",
    dificuldade: 4,
    raciocinio: "Análise de cenário: onde fica a chave privada em cada tipo de certificado e o que o furto exige",
    enunciado:
      "Uma servidora assina documentos com um certificado digital do tipo A1, instalado no notebook funcional, e a chefe dela usa um certificado do tipo A3, num token criptográfico. O notebook da servidora foi furtado. Sobre a situação, é correto afirmar que",
    alternativas: [
      "o A1 fica num token e vale por até cinco anos, e o A3 fica em arquivo no computador.",
      "como o A1 tem senha, o furto não exige providência, já que a chave não pode ser usada.",
      "o A1 deve ser revogado, porque a chave fica em arquivo; a do A3 não sai do token.",
      "o A3 permite copiar a chave privada para outro computador, e o A1 a guarda em hardware.",
      "o furto exige revogar também o A3 da chefe, porque os dois usam a mesma cadeia da ICP.",
    ],
    correta: 2,
    explicacao:
      "No A1, o certificado e a chave privada ficam num arquivo instalado no computador, protegido por senha. Com o furto, quem tiver o arquivo pode tentar quebrar a senha e assinar como a servidora; por isso, ela deve pedir a revogação, que inclui o certificado na lista de certificados revogados (LCR). No A3, a chave é gerada e guardada no token ou cartão e não pode ser exportada.",
    explicacaoErradas:
      "As mídias estão invertidas: o A1 fica em arquivo e vale até 1 ano; o A3, em token ou cartão, até 5 anos. A senha do arquivo reduz o risco, mas não o elimina, e a revogação continua necessária. A chave do A3 não pode ser copiada para outro computador. E o furto do notebook não afeta o A3 da chefe: cada certificado tem chave própria, e compartilhar a cadeia de certificação não compromete os demais.",
    pegadinha:
      "A senha do A1 dá falsa segurança: o arquivo pode ser copiado e atacado à vontade fora do computador. Havendo dúvida sobre a guarda da chave privada, revoga-se o certificado.",
    conhecimento:
      "ICP-Brasil: A1 (arquivo no computador, validade de até 1 ano, chave exportável, com cópia de segurança) e A3 (token ou cartão criptográfico, validade de até 5 anos, chave não exportável). Perda, furto ou suspeita de comprometimento exigem revogação, publicada na LCR.",
    origem: "banco",
  },
  {
    id: "prf-info-049",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "ICP-Brasil: AC Raiz, AC e AR",
    dificuldade: 5,
    raciocinio: "Análise de afirmações: papéis da AC Raiz, das AC e das AR, e valor jurídico da assinatura",
    enunciado:
      "Uma superintendência vai providenciar certificados digitais para os servidores que assinam documentos, no âmbito da Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil), instituída pela Medida Provisória nº 2.200-2/2001. Sobre essa infraestrutura, é correto afirmar que",
    alternativas: [
      "a autoridade de registro emite e assina os certificados, e a certificadora apenas os arquiva.",
      "a AC Raiz, função do ITI, emite direto os certificados dos servidores, sem intermediárias.",
      "documento assinado com certificado ICP-Brasil tem presunção absoluta de veracidade.",
      "pela Lei 14.063/2020, a assinatura avançada é a única que exige certificado ICP-Brasil.",
      "a AR identifica o solicitante e encaminha o pedido à AC, que emite o certificado.",
    ],
    correta: 4,
    explicacao:
      "Pela MP 2.200-2/2001, a autoridade de registro (AR), vinculada a uma AC, identifica e cadastra o usuário e encaminha a solicitação (art. 7º); a autoridade certificadora (AC) emite, revoga e gerencia os certificados e publica a lista de certificados revogados (art. 6º).",
    explicacaoErradas:
      "Quem emite e assina os certificados é a AC, e não a AR. A AC Raiz, função exercida pelo ITI, certifica as AC do nível seguinte, e a MP proíbe que ela emita certificados para o usuário final (art. 5º, parágrafo único). A presunção de veracidade das declarações em relação aos signatários é relativa, e não absoluta (art. 10, § 1º). E, pela Lei 14.063/2020, a assinatura que exige certificado ICP-Brasil é a qualificada, e não a avançada.",
    pegadinha:
      "AR e AC são confundidas porque o usuário só lida com a AR. Ela confere a identidade e encaminha o pedido, mas quem emite e assina o certificado é a AC.",
    conhecimento:
      "Cadeia da ICP-Brasil: Comitê Gestor (políticas), AC Raiz (ITI; certifica só as AC do nível seguinte), AC (emitem e revogam certificados e publicam a LCR) e AR (identificam e cadastram usuários). Lei 14.063/2020: assinaturas simples, avançada e qualificada; só a qualificada usa certificado ICP-Brasil.",
    origem: "banco",
  },
  {
    id: "prf-info-050",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Backup diferencial: identificação e restauração",
    dificuldade: 5,
    raciocinio: "Diagnóstico de situação: reconhecer o tipo de cópia pelo tamanho e definir o conjunto de restauração",
    enunciado:
      "O servidor de arquivos de uma superintendência recebe cópia completa todo domingo, e a rotina altera, a cada dia útil, cerca de 1,5 GB de arquivos diferentes dos alterados nos dias anteriores. Nas noites de segunda, terça e quarta, as cópias tiveram 1,5 GB, 3 GB e 4,5 GB, respectivamente. Na quinta-feira, às 10h, o disco falhou. O tipo de cópia feita durante a semana e o conjunto mínimo para restaurar os dados até a noite de quarta são",
    alternativas: [
      "diferencial; o completo de domingo e a cópia de quarta.",
      "incremental; o completo de domingo e as cópias de segunda a quarta.",
      "diferencial; o completo de domingo e as cópias de segunda a quarta.",
      "incremental; só a cópia de quarta, que já reúne toda a semana.",
      "completo; só a cópia de quarta, que substitui as anteriores.",
    ],
    correta: 0,
    explicacao:
      "Cada cópia cresceu 1,5 GB em relação à anterior, porque reuniu tudo o que mudou desde o completo de domingo: é o comportamento do backup diferencial. Para restaurar, bastam o completo e a última diferencial, a de quarta, que já contém as mudanças de segunda e terça.",
    explicacaoErradas:
      "Na incremental, cada cópia levaria só o que mudou desde a anterior, cerca de 1,5 GB por noite, e a restauração exigiria o completo e todas as incrementais, sem que a última bastasse sozinha. Com cópias diferenciais, as de segunda e terça são dispensáveis. E cópias completas teriam o tamanho de todos os dados, não só o das alterações.",
    pegadinha:
      "O tamanho crescente das cópias é a pista: a diferencial acumula tudo desde o último completo. Por isso, restaurar exige só duas peças, ainda que a cópia de cada noite seja maior.",
    conhecimento:
      "Completo: copia tudo e marca os arquivos como copiados. Incremental: copia o que mudou desde o último backup de qualquer tipo e marca; restauração = completo + todas as incrementais. Diferencial: copia o que mudou desde o último completo, sem marcar; restauração = completo + última diferencial.",
    origem: "banco",
  },
  {
    id: "prf-info-051",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Backup incremental e regra 3-2-1",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: restauração com incrementais, comparação de custos e boas práticas de guarda",
    enunciado:
      "Uma unidade da PRF reviu a política de cópias de segurança do sistema de controle da frota. Considere as afirmativas:\n\nI. Com cópia completa no domingo e incrementais nos demais dias, restaurar a situação registrada na cópia de quinta-feira exige o completo e todas as incrementais, de segunda a quinta.\nII. Cada execução da cópia incremental gasta mais espaço e mais tempo do que a da diferencial, porque copia de novo tudo o que mudou desde o completo.\nIII. Pela regra 3-2-1, mantêm-se três cópias dos dados, em pelo menos dois tipos de mídia, com uma delas fora do local.\nIV. Uma cópia de segurança só deve ser considerada confiável depois de testada por meio de restauração.\n\nEstá correto o que se afirma em",
    alternativas: ["I e III, apenas.", "II, III e IV, apenas.", "I, II e III, apenas.", "I, III e IV, apenas.", "III e IV, apenas."],
    correta: 3,
    explicacao:
      "I: na incremental, cada cópia depende da anterior, e a restauração exige o completo e toda a cadeia de incrementais. III: a regra 3-2-1 pede três cópias, em dois tipos de mídia, uma fora do local. IV: só a restauração de teste comprova que a cópia pode ser recuperada. Logo, I, III e IV.",
    explicacaoErradas:
      "II está errada: quem copia tudo o que mudou desde o completo é a diferencial; a incremental copia só o que mudou desde a última cópia, e por isso cada execução é menor e mais rápida. Caem as combinações com II, e as que deixam de fora a I ou a IV, que estão certas.",
    pegadinha:
      "A incremental economiza na hora de copiar e cobra na hora de restaurar: cada execução é pequena, mas a recuperação exige a cadeia inteira. Com a diferencial, a lógica se inverte.",
    conhecimento:
      "Incremental: cópias menores e mais rápidas, restauração mais longa (completo + todas as incrementais). Diferencial: cópias que crescem até o próximo completo, restauração com duas peças. Regra 3-2-1: três cópias, duas mídias, uma fora do local; versões atuais acrescentam uma cópia offline ou imutável.",
    origem: "banco",
  },
  {
    id: "prf-info-052",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Compactação × criptografia",
    dificuldade: 4,
    raciocinio: "Análise de afirmativas: o que a compactação faz e o que depende de criptografia",
    enunciado:
      "Um servidor precisa enviar a outra unidade uma pasta com relatórios em PDF, planilhas e vídeos de fiscalização em MP4, e pensa em compactá-la antes do envio. Considere as afirmativas:\n\nI. A compactação em formatos como o ZIP reduz o espaço ocupado eliminando redundâncias, e os arquivos voltam idênticos ao serem extraídos.\nII. Os vídeos em MP4, por já serem comprimidos, tendem a diminuir pouco na compactação.\nIII. A compactação, por si só, protege o conteúdo, porque o pacote deixa de ser legível sem o programa que o criou.\nIV. Alguns compactadores permitem definir senha e cifrar o conteúdo do pacote, e nesse caso a proteção vem da criptografia, e não da compactação.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "I, II e IV, apenas.", "I, II e III, apenas.", "II, III e IV, apenas.", "I, II, III e IV."],
    correta: 1,
    explicacao:
      "I: a compactação do ZIP é sem perda: elimina redundâncias, e a extração devolve os arquivos idênticos. II: vídeos em MP4 já tiveram as redundâncias retiradas na própria codificação e quase não diminuem. IV: a senha que cifra o pacote é criptografia, recurso adicional ao da compactação. Logo, I, II e IV.",
    explicacaoErradas:
      "III está errada: os formatos de compactação são conhecidos, e qualquer programa compatível abre o pacote; sem criptografia, não há proteção. Caem as combinações com III, e a que deixa de fora a IV, que está certa.",
    pegadinha:
      "O pacote compactado parece ilegível quando aberto num editor de texto, o que dá a impressão de proteção. Mas qualquer descompactador o restaura: compactar não é cifrar.",
    conhecimento:
      "Compactação sem perda (ZIP, RAR, 7z) devolve o arquivo idêntico; a compressão com perda (JPEG, MP3, MP4) descarta informação e é usada em mídia. A senha num pacote ZIP, RAR ou 7z pode cifrar o conteúdo (AES), e o 7z e o RAR podem cifrar também os nomes dos arquivos.",
    fonte: "Adaptada de FGV — 2022 — PC-RJ — Investigador Policial",
    origem: "banco",
  },
  {
    id: "prf-info-053",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Vulnerabilidade, ameaça e risco",
    dificuldade: 4,
    raciocinio: "Classificação: distinguir a fraqueza, o agente que pode explorá-la e a medida do risco",
    enunciado:
      "Num diagnóstico de segurança de uma superintendência, constatou-se: (1) os computadores da recepção estão com o sistema operacional sem atualizações há meses; (2) há uma campanha ativa de criminosos explorando justamente essa falha em órgãos públicos; (3) a equipe estimou a probabilidade de a falha ser explorada ali e o impacto que isso teria sobre o atendimento. Os elementos (1), (2) e (3) correspondem, respectivamente, a",
    alternativas: [
      "ameaça, vulnerabilidade e risco.",
      "risco, ameaça e vulnerabilidade.",
      "vulnerabilidade, risco e ameaça.",
      "ameaça, risco e vulnerabilidade.",
      "vulnerabilidade, ameaça e risco.",
    ],
    correta: 4,
    explicacao:
      "A falta de atualizações é uma fraqueza do ativo: vulnerabilidade. A campanha dos criminosos é a causa potencial de um incidente, capaz de explorar a fraqueza: ameaça. A combinação da probabilidade de a ameaça explorar a vulnerabilidade com o impacto resultante é o risco.",
    explicacaoErradas:
      "As demais sequências trocam os papéis. A falha do sistema não é ameaça nem risco, mas a fraqueza a ser explorada; a campanha criminosa não é vulnerabilidade nem risco, mas o agente que pode explorá-la; e a estimativa de probabilidade e impacto não é ameaça nem vulnerabilidade, mas a medida do risco.",
    pegadinha:
      "A vulnerabilidade está no ativo, e a ameaça vem de fora. O risco não é nenhum dos dois: é a medida, em probabilidade e impacto, de a ameaça explorar a vulnerabilidade.",
    conhecimento:
      "Ativo: o que tem valor para a organização. Vulnerabilidade: fraqueza do ativo ou de um controle. Ameaça: causa potencial de um incidente indesejado. Risco: combinação da probabilidade de a ameaça explorar a vulnerabilidade com o impacto resultante.",
    origem: "banco",
  },
  {
    id: "prf-info-054",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Identificação, autenticação, autorização e auditoria",
    dificuldade: 4,
    raciocinio: "Associação: etapas do controle de acesso na ordem em que ocorrem",
    enunciado:
      "Ao acessar o sistema de gestão de multas, um servidor (1) informa a matrícula; (2) digita a senha; (3) vê apenas os menus liberados para o perfil dele; e (4) tem cada consulta gravada com data, hora e matrícula. As etapas (1), (2), (3) e (4) correspondem, respectivamente, a",
    alternativas: [
      "autenticação, identificação, autorização e registro para auditoria.",
      "identificação, autorização, autenticação e registro para auditoria.",
      "identificação, autenticação, autorização e registro para auditoria.",
      "identificação, autenticação, registro para auditoria e autorização.",
      "autorização, autenticação, identificação e registro para auditoria.",
    ],
    correta: 2,
    explicacao:
      "Informar a matrícula é declarar quem se é: identificação. A senha comprova essa identidade: autenticação. Ver só os menus do perfil é receber as permissões correspondentes: autorização. Gravar cada consulta com data, hora e matrícula gera o registro que permite a auditoria e a responsabilização.",
    explicacaoErradas:
      "As outras sequências invertem etapas: a matrícula apenas declara a identidade e não a comprova; a senha comprova a identidade e não concede permissões; os menus liberados resultam das permissões, e não de registro; e a gravação das consultas é registro, não autorização.",
    pegadinha:
      "Identificar e autenticar são confundidos porque acontecem na mesma tela. Identificar é declarar quem se é; autenticar é provar essa declaração.",
    conhecimento:
      "Controle de acesso (IAAA): identificação (declarar a identidade), autenticação (comprová-la), autorização (conceder permissões conforme o perfil) e auditoria ou responsabilização (registrar as ações para rastreá-las). A autorização sempre vem depois da autenticação.",
    origem: "banco",
  },
  {
    id: "prf-info-055",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Autenticação multifator: categorias de fatores",
    dificuldade: 4,
    raciocinio: "Classificação: identificar a categoria de cada fator e conferir se as combinações misturam categorias",
    enunciado:
      "O setor de TI estuda formas de reforçar o acesso ao sistema de gestão de pessoal e listou quatro combinações:\n\nI. Senha e um PIN de seis dígitos.\nII. Senha e um código gerado por um token físico entregue ao servidor.\nIII. Cartão com certificado digital e leitura da impressão digital.\nIV. Senha e resposta a uma pergunta secreta.\n\nConfiguram autenticação multifator apenas as combinações",
    alternativas: ["II e III.", "I e IV.", "II e IV.", "I, II e III.", "II, III e IV."],
    correta: 0,
    explicacao:
      "A autenticação multifator exige fatores de categorias diferentes: algo que se sabe, algo que se tem e algo que se é. II combina senha (sabe) e token (tem); III combina cartão com certificado (tem) e impressão digital (é). Logo, II e III.",
    explicacaoErradas:
      "I e IV usam dois elementos da mesma categoria, algo que se sabe: senha e PIN, senha e pergunta secreta. Somar dois segredos não torna a autenticação multifator. Por isso caem as combinações que incluem I ou IV.",
    pegadinha:
      "Duas etapas não significam dois fatores. Senha seguida de PIN ou de pergunta secreta são duas provas da mesma categoria, e um único vazamento do que se sabe pode entregar as duas.",
    conhecimento:
      "Categorias de fatores: conhecimento (senha, PIN, pergunta secreta), posse (token, cartão inteligente, certificado em mídia física) e inerência (biometria: impressão digital, face, íris). Multifator: ao menos dois fatores de categorias diferentes.",
    origem: "banco",
  },
  {
    id: "prf-info-056",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Segregação de funções, menor privilégio e revisão de acessos",
    dificuldade: 5,
    raciocinio: "Associação: identificar o controle de acesso aplicado em cada medida",
    enunciado:
      "No sistema de controle de um pátio de veículos recolhidos, a auditoria interna recomendou três medidas: (1) o servidor que registra a entrada de um veículo não pode ser o mesmo que autoriza a liberação dele; (2) cada servidor recebe só as permissões indispensáveis às próprias tarefas; (3) a cada semestre, a chefia confere as contas ativas e retira os acessos de quem mudou de setor ou deixou o órgão. As medidas (1), (2) e (3) correspondem, respectivamente, a",
    alternativas: [
      "menor privilégio, segregação de funções e necessidade de conhecer.",
      "segregação de funções, não repúdio e menor privilégio.",
      "não repúdio, menor privilégio e revisão periódica dos acessos.",
      "segregação de funções, menor privilégio e revisão periódica dos acessos.",
      "menor privilégio, revisão periódica dos acessos e segregação de funções.",
    ],
    correta: 3,
    explicacao:
      "Separar quem registra a entrada de quem autoriza a saída impede que uma só pessoa conclua sozinha uma operação sensível: segregação de funções. Dar só as permissões indispensáveis é o menor privilégio. Conferir periodicamente as contas e retirar acessos que já não se justificam é a revisão periódica dos acessos, que evita o acúmulo de permissões.",
    explicacaoErradas:
      "A primeira medida divide uma operação entre pessoas diferentes; não é menor privilégio, que limita as permissões de cada um, nem não repúdio, que impede negar a autoria de um ato. A segunda limita permissões e não é segregação, não repúdio nem revisão. A terceira atua ao longo do tempo, retirando acessos que perderam a razão de existir, o que não se confunde com necessidade de conhecer, menor privilégio ou segregação.",
    pegadinha:
      "Menor privilégio e revisão de acessos andam juntos, mas não se confundem: o primeiro define o que cada um recebe; a revisão corrige, com o tempo, os acessos que sobraram depois de mudanças de setor ou desligamentos.",
    conhecimento:
      "Segregação de funções: etapas críticas divididas entre pessoas diferentes, contra fraude e erro. Menor privilégio: só as permissões indispensáveis. Necessidade de conhecer: acesso só às informações exigidas pela tarefa. Revisão periódica: recertificação das contas e retirada de acessos excedentes.",
    origem: "banco",
  },
  {
    id: "prf-info-057",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Keylogger, rootkit e backdoor",
    dificuldade: 4,
    raciocinio: "Associação: identificar o código malicioso pela função descrita",
    enunciado:
      "Na análise de um computador invadido, foram encontrados três componentes maliciosos:\n\nI. Um programa que registrava as teclas digitadas e as enviava a um servidor externo.\nII. Um conjunto de programas que escondia os arquivos e processos do invasor, inclusive do antivírus.\nIII. Um programa que permitia ao invasor voltar ao computador quando quisesse, sem passar pela autenticação normal.\n\nOs componentes I, II e III são, respectivamente,",
    alternativas: [
      "screenlogger, rootkit e backdoor.",
      "keylogger, rootkit e backdoor.",
      "keylogger, worm e cavalo de troia.",
      "spyware, vírus e worm.",
      "adware, backdoor e cavalo de troia.",
    ],
    correta: 1,
    explicacao:
      "O programa que captura as teclas digitadas é o keylogger. O conjunto de programas que esconde a presença do invasor, inclusive de ferramentas de segurança, é o rootkit. O programa que garante o retorno do invasor sem a autenticação normal é o backdoor.",
    explicacaoErradas:
      "O screenlogger captura imagens da tela ou a região clicada, e não as teclas. O worm se propaga sozinho pela rede, sem a função de esconder o invasor. O cavalo de troia se disfarça de programa legítimo para ser instalado e não é definido pelo acesso de retorno. Spyware é o gênero amplo dos programas espiões, o vírus infecta arquivos, e o adware exibe propaganda.",
    pegadinha:
      "Keylogger e screenlogger são parentes: os dois espionam, mas o primeiro grava o teclado, e o segundo, a tela e os cliques, o que serve para burlar teclados virtuais.",
    conhecimento:
      "Spyware: monitora a atividade e envia dados (keylogger, screenlogger, adware). Rootkit: esconde a presença do invasor e de outros códigos. Backdoor: garante o retorno do invasor. Cavalo de troia: programa aparentemente legítimo com função maliciosa oculta.",
    origem: "banco",
  },
  {
    id: "prf-info-058",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Ransomware com dupla extorsão",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: o que a cópia de segurança resolve num ataque com cópia prévia dos dados",
    enunciado:
      "Os servidores de arquivos de um órgão tiveram os dados cifrados por um ransomware, e os criminosos exigiram pagamento para entregar a chave. Dias antes, eles haviam copiado documentos sigilosos e ameaçaram publicá-los se não fossem pagos. Considere as afirmativas:\n\nI. O caso configura dupla extorsão: além de cifrar os dados, os criminosos ameaçam divulgar o que copiaram.\nII. Uma cópia de segurança recente e íntegra resolve todo o incidente, porque elimina a necessidade do pagamento e afasta o risco da divulgação.\nIII. Cópias de segurança mantidas conectadas à rede podem ser cifradas no mesmo ataque, o que justifica manter uma cópia desconectada ou imutável.\nIV. Pagar o resgate não garante a entrega da chave nem impede a divulgação dos dados copiados.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "II, III e IV, apenas.", "I, II e III, apenas.", "III e IV, apenas.", "I, III e IV, apenas."],
    correta: 4,
    explicacao:
      "I: na dupla extorsão, o criminoso cifra os dados e, antes, os copia, para ameaçar publicá-los. III: cópias acessíveis pela rede podem ser alcançadas pelo mesmo ataque, e por isso se recomenda uma cópia desconectada ou imutável. IV: pagar não garante nada: o criminoso pode não entregar a chave e manter a ameaça. Logo, I, III e IV.",
    explicacaoErradas:
      "II está errada: a cópia de segurança recupera os dados cifrados, mas não desfaz a cópia que os criminosos já levaram, e a ameaça de divulgação continua. Caem as combinações com II, e a que deixa de fora a I, que está certa.",
    pegadinha:
      "A cópia de segurança é a melhor defesa contra a cifragem, e por isso parece resolver tudo. Na dupla extorsão, porém, os dados já saíram do órgão, e nenhuma restauração desfaz o vazamento.",
    conhecimento:
      "Ransomware: cifra os dados e exige resgate para entregar a chave. Dupla extorsão: os dados são copiados antes da cifragem, e a publicação vira ameaça adicional. Prevenção: atualizações, cópias desconectadas ou imutáveis e testadas, menor privilégio e autenticação multifator.",
    origem: "banco",
  },
  {
    id: "prf-info-059",
    materia: "info",
    topico: "Segurança da informação",
    subassunto: "Responsabilidade compartilhada em nuvem",
    dificuldade: 4,
    raciocinio: "Diagnóstico de situação: delimitar o que cabe ao provedor e o que cabe ao cliente no SaaS",
    enunciado:
      "Um órgão usa uma suíte de escritório em nuvem, contratada como software como serviço (SaaS). Um servidor compartilhou por link público, acessível a qualquer pessoa, uma planilha com dados funcionais de servidores, e o link circulou fora do órgão. Pelo modelo de responsabilidade compartilhada, é correto afirmar que",
    alternativas: [
      "no SaaS, toda a segurança cabe ao provedor, que responde pelo vazamento do link.",
      "o provedor responde pelas permissões de compartilhamento, e o cliente, pela rede física.",
      "o provedor cuida da infraestrutura; dados, contas e permissões cabem ao órgão.",
      "a responsabilidade só se divide no IaaS; no SaaS, o cliente responde por tudo.",
      "o provedor responde pelo vazamento, porque deveria bloquear links de acesso público.",
    ],
    correta: 2,
    explicacao:
      "No modelo de responsabilidade compartilhada, o provedor protege a infraestrutura que opera (instalações, rede, servidores e, no SaaS, o próprio aplicativo), e o cliente responde pelos dados que coloca, pelas contas e pelas permissões de acesso, em qualquer modelo de serviço. O link público foi uma permissão concedida por um usuário do próprio órgão.",
    explicacaoErradas:
      "Nem no SaaS a segurança cabe toda ao provedor: dados, contas e permissões continuam com o cliente. A rede física é do provedor, e as permissões de compartilhamento, do cliente, e não o contrário. A divisão existe em todos os modelos, IaaS, PaaS e SaaS, mudando só a fronteira. E o link público é um recurso legítimo, ativado pelo usuário; configurá-lo cabe ao órgão, e não ao provedor.",
    pegadinha:
      "No SaaS, o provedor cuida de quase tudo, e daí vem a ideia de que responde por tudo. Mas quem decide com quem compartilhar um arquivo é sempre o cliente.",
    conhecimento:
      "Responsabilidade compartilhada: o provedor cuida da segurança da nuvem (instalações, hardware, rede, virtualização); o cliente, da segurança na nuvem (dados, identidades, acessos e configurações). No IaaS, o cliente cuida também do sistema operacional e dos aplicativos; no PaaS, dos aplicativos; no SaaS, de dados, contas e permissões.",
    origem: "banco",
  },
];
