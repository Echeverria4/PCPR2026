import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-a11",
  resumo: {
    ideia:
      "O Calc é a planilha eletrônica do LibreOffice. A prova cobra a estrutura (planilhas, linhas, colunas e células), as fórmulas e a ordem das contas, as referências relativas, absolutas e mistas, a alça de preenchimento, as funções mais comuns, os erros e os atalhos, que em vários pontos diferem do Excel.",
    itens: [
      {
        termo: "Calc e formatos",
        faz: "Planilha eletrônica livre e gratuita do LibreOffice. O formato próprio é o .ods (modelo .ots). Abre e salva .xlsx, .xls e .csv e exporta para PDF.",
      },
      {
        termo: "Estrutura",
        faz: "Um arquivo tem várias planilhas, com as guias na parte de baixo. Colunas têm letras, linhas têm números, e a célula é o cruzamento das duas (A1). A Caixa de nome mostra a célula ativa; a barra de status mostra a soma e a média do que está selecionado.",
      },
      {
        termo: "Navegação e seleção",
        faz: "Enter desce, Tab vai para a direita, Shift+Tab para a esquerda. Ctrl+Home vai para A1; Ctrl+End vai para a última célula usada. Ctrl+Page Down e Ctrl+Page Up trocam de planilha. Shift+clique marca uma faixa; Ctrl+clique marca células soltas. F2 edita a célula.",
      },
      {
        termo: "Fórmulas e operadores",
        faz: "A fórmula começa com =. Operadores: + − * / ^ (potência) e % (porcentagem); & junta textos; = <> > < >= <= comparam e devolvem VERDADEIRO ou FALSO.",
        pista: "Ordem: parênteses, potência, multiplicação e divisão, soma e subtração. Na mesma prioridade, da esquerda para a direita.",
      },
      {
        termo: "Dois-pontos e ponto e vírgula",
        faz: "Dois-pontos quer dizer até: A1:A3 são A1, A2 e A3. Ponto e vírgula quer dizer e: A1;A3 são só A1 e A3. O ponto e vírgula também separa os argumentos da função.",
      },
      {
        termo: "Referências",
        faz: "Relativa (A1): muda ao copiar a fórmula. Absoluta ($A$1): não muda. Mista: $A1 prende a coluna; A$1 prende a linha. Ao copiar, só a parte sem $ anda junto com o deslocamento.",
        pista: "No Calc, Shift+F4 alterna os tipos durante a edição; no Excel é F4.",
      },
      {
        termo: "Outra planilha e outro arquivo",
        faz: "Outra planilha do mesmo arquivo: =Janeiro.B3, com ponto. Outro arquivo: o caminho entre aspas simples, o sinal # e a planilha, como ='file:///C:/dados/frota.ods'#$Planilha1.A1.",
        pista: "O Excel usa o ponto de exclamação: =Janeiro!B3.",
      },
      {
        termo: "Alça de preenchimento",
        faz: "O quadradinho no canto da seleção. Arrastar copia a fórmula ajustando as referências relativas. Um número sozinho arrastado vira sequência de 1 em 1; com Ctrl, o número é só copiado. Texto com número no fim (Turno1) aumenta; dias e meses seguem a lista.",
        pista: "No Excel é o contrário: o número sozinho é copiado e o Ctrl faz a sequência.",
      },
      {
        termo: "Funções básicas",
        faz: "SOMA, MÉDIA, MÁXIMO, MÍNIMO, MAIOR(intervalo;k), MENOR(intervalo;k), MED (mediana), MODO, MULT, ARRED, RAIZ e FATORIAL (corta as casas decimais: FATORIAL(3,8) dá 6). O acento faz parte do nome: MEDIA sem acento dá erro.",
        pista: "MÉDIA ignora texto e célula vazia, mas o zero entra na conta.",
      },
      {
        termo: "Contar e somar com condição",
        faz: "CONT.NÚM conta números. CONT.VALORES conta as células não vazias. CONTAR.VAZIO conta as vazias. CONT.SE(intervalo;critério) conta o que atende. SOMASE(intervalo;critério;intervalo da soma) soma só o que atende.",
      },
      {
        termo: "Função SE",
        faz: "=SE(teste;valor se verdadeiro;valor se falso). Pode ter outro SE dentro para mais de duas saídas. Texto vai entre aspas.",
      },
      {
        termo: "Procura e texto",
        faz: "PROCV(valor;matriz;coluna;0) procura na primeira coluna e devolve a coluna pedida da mesma linha; PROCH faz o mesmo na horizontal. O 0 (ou FALSO) exige valor exato. ESQUERDA e DIREITA tiram caracteres das pontas; PROCURAR acha a posição de um texto e diferencia maiúsculas; CONCAT junta textos. HOJE() dá a data; AGORA(), data e hora.",
      },
      {
        termo: "Erros",
        faz: "### coluna estreita demais. #DIV/0! divisão por zero ou por célula vazia. #NOME? nome de função ou texto não reconhecido. #REF! referência a célula que não existe mais. #VALOR! tipo de dado errado. Err:502 argumento inválido, como RAIZ(−16). Err:522 referência circular. #N/D valor não disponível, comum no PROCV que não acha.",
      },
      {
        termo: "Atalhos e recursos",
        faz: "Ctrl+1 abre Formatar células. F7 ortografia, F11 Estilos (no Calc, estilos de célula e de página), F9 recalcula. Inserir > Gráfico; Dados > Ordenar e AutoFiltro; Exibir > Congelar linhas e colunas; Formatar > Condicional.",
      },
    ],
  },
  questoes: [
    {
      topico: "Referências",
      subassunto: "Referência mista",
      dificuldade: 5,
      raciocinio: "De C2 para D5: +1 coluna e +3 linhas. A$2 → B$2 (linha presa). $B1 → $B4 (coluna presa).",
      enunciado:
        "No Calc, a célula C2 contém =A$2*$B1. A fórmula é copiada de C2 e colada em D5. Em D5, a fórmula passa a ser",
      alternativas: ["=A$5*$C1", "=B$5*$B1", "=B$2*$C4", "=B$2*$B4", "=A$2*$B4"],
      correta: 3,
      explicacao:
        "A cópia anda uma coluna para a direita e três linhas para baixo. Em A$2, a coluna é livre e vira B; a linha está presa e fica 2. Em $B1, a coluna está presa e fica B; a linha é livre e vai de 1 para 4. Resultado: =B$2*$B4.",
      explicacaoErradas:
        "As outras mexem justamente no que o $ prende (a linha 2 ou a coluna B) ou deixam de mexer no que está livre (a coluna A ou a linha 1).",
      pegadinha: "O $ prende só o que vem logo depois dele: a letra ou o número.",
      conhecimento: "Shift+F4 alterna entre relativa, absoluta e mista enquanto se edita a fórmula no Calc.",
    },
    {
      topico: "Preenchimento",
      subassunto: "Alça de preenchimento",
      dificuldade: 5,
      raciocinio: "No Calc, número sozinho arrastado vira sequência de 1 em 1; com Ctrl, copia.",
      enunciado:
        "Em A1 de uma planilha do Calc está o número 7. O usuário seleciona só A1 e arrasta a alça de preenchimento até A4, sem segurar nenhuma tecla. Com a configuração padrão, A2, A3 e A4 ficam com",
      alternativas: ["8, 9 e 10.", "7, 7 e 7.", "14, 21 e 28.", "7, 8 e 9.", "6, 5 e 4."],
      correta: 0,
      explicacao:
        "No Calc, arrastar uma célula com um número sozinho cria uma sequência que sobe de 1 em 1: 8, 9 e 10. Para só copiar o 7, segura-se Ctrl ao arrastar.",
      explicacaoErradas:
        "Repetir 7, 7 e 7 é o que o Excel faz sem tecla, ou o Calc com Ctrl. Somar de 7 em 7 exigiria duas células de exemplo, como 7 e 14. Começar a sequência em 7 repetiria a célula de origem. Descer de 1 em 1 pediria exemplos que diminuem, como 7 e 6.",
      pegadinha: "Calc e Excel fazem o contrário com o número sozinho.",
      conhecimento: "Com duas células selecionadas (por exemplo, 5 e 10), a alça segue o mesmo passo: 15, 20...",
    },
    {
      topico: "Erros",
      subassunto: "Mensagens de erro",
      dificuldade: 4,
      raciocinio: "Nome de função errado = #NOME?; coluna estreita = ###; célula excluída = #REF!; divisão por vazia = #DIV/0!.",
      enunciado:
        "Associe cada mensagem do Calc à situação que a provoca.\n(1) ###\n(2) #DIV/0!\n(3) #NOME?\n(4) #REF!\n( ) A função foi digitada como =SOMMA(A1:A3).\n( ) O número é largo demais para a coluna.\n( ) A fórmula apontava para uma linha que foi excluída.\n( ) A fórmula divide um valor por uma célula vazia.\nA sequência correta, de cima para baixo, é",
      alternativas: ["1, 3, 4, 2.", "3, 1, 2, 4.", "3, 4, 1, 2.", "4, 1, 3, 2.", "3, 1, 4, 2."],
      correta: 4,
      explicacao:
        "Nome de função que não existe gera #NOME? (3). Coluna estreita mostra ### (1). Linha excluída deixa a referência inválida: #REF! (4). Célula vazia vale zero na divisão: #DIV/0! (2).",
      explicacaoErradas:
        "As outras sequências trocam #REF! com #DIV/0!, ### com #NOME? ou ### com #REF!.",
      pegadinha: "Célula vazia na divisão conta como zero e dá #DIV/0!.",
      conhecimento: "O ### some quando a coluna é alargada; o valor nunca esteve errado.",
    },
    {
      topico: "Funções",
      subassunto: "Contagem e média",
      dificuldade: 5,
      raciocinio: "CONT.NÚM só números (zero entra); CONT.VALORES tudo que não é vazio; MÉDIA ignora texto e vazio; zero não é vazio.",
      enunciado:
        "No Calc, A1 tem 10, A2 tem o texto PRF, A3 está vazia, A4 tem 0 e A5 tem 6. Analise as afirmativas.\nI. =CONT.NÚM(A1:A5) retorna 3.\nII. =CONT.VALORES(A1:A5) retorna 4.\nIII. =MÉDIA(A1:A5) retorna 3,2, porque o texto e a célula vazia contam como zero.\nIV. =CONTAR.VAZIO(A1:A5) retorna 1.\nEstão corretas as afirmativas",
      alternativas: ["I e II, apenas.", "I, II e IV, apenas.", "II, III e IV, apenas.", "I, II, III e IV.", "I e IV, apenas."],
      correta: 1,
      explicacao:
        "Os números são 10, 0 e 6: CONT.NÚM dá 3. As células não vazias são 10, PRF, 0 e 6: CONT.VALORES dá 4. Só A3 está vazia: CONTAR.VAZIO dá 1.",
      explicacaoErradas:
        "A III é falsa: MÉDIA deixa de fora o texto e a célula vazia e divide 16 por 3, o que dá cerca de 5,33. Quem tira a IV confunde o zero com célula vazia.",
      pegadinha: "Zero é número: entra na média e não é célula vazia.",
      conhecimento: "CONT.SE(intervalo;critério) conta só as células que atendem a uma condição.",
    },
    {
      topico: "Referências",
      subassunto: "Outra planilha",
      dificuldade: 4,
      raciocinio: "No Calc, planilha e célula são separadas por ponto; o ! é do Excel.",
      enunciado:
        "No Calc, a célula A1 da planilha Resumo deve mostrar o valor da célula B3 da planilha Janeiro, do mesmo arquivo. Na forma que o Calc usa por padrão, a fórmula é",
      alternativas: ["=Janeiro!B3", "=Janeiro:B3", "=Janeiro.B3", "=B3(Janeiro)", "=Janeiro;B3"],
      correta: 2,
      explicacao:
        "Na sintaxe padrão do Calc, o nome da planilha vem antes da célula, separado por ponto: =Janeiro.B3. Com $ antes do nome ($Janeiro.B3), a planilha fica fixa ao copiar.",
      explicacaoErradas:
        "O ponto de exclamação é a forma do Excel. Dois-pontos indicam intervalo, e ponto e vírgula separa argumentos. Nome da planilha entre parênteses não existe.",
      pegadinha: "Quem estudou só o Excel marca o ponto de exclamação.",
      conhecimento: "Para outro arquivo, entra o caminho entre aspas simples e o sinal #, como 'file:///C:/dados/frota.ods'#$Planilha1.A1.",
    },
    {
      topico: "Atalhos",
      subassunto: "Navegação e edição",
      dificuldade: 4,
      raciocinio: "Ctrl+Home = A1; Ctrl+Page Down = próxima planilha; Shift+F4 = tipo de referência; F2 edita, F7 é ortografia.",
      enunciado:
        "Julgue as afirmativas sobre atalhos do Calc, com a configuração padrão, como verdadeiras (V) ou falsas (F).\n( ) Ctrl+Home leva o cursor para a célula A1.\n( ) Ctrl+Page Down passa para a planilha seguinte do arquivo.\n( ) Shift+F4 alterna a referência entre relativa, absoluta e mista enquanto se edita a fórmula.\n( ) F2 abre a verificação ortográfica da planilha.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, V, V, F.", "V, F, V, F.", "V, V, F, V.", "F, V, V, F.", "V, V, V, V."],
      correta: 0,
      explicacao:
        "Ctrl+Home vai para A1. Ctrl+Page Down troca para a planilha seguinte, e Ctrl+Page Up para a anterior. Shift+F4 alterna os tipos de referência. A última é falsa: F2 entra no modo de edição da célula.",
      explicacaoErradas:
        "A verificação ortográfica é F7. Quem marca a terceira como falsa pensa no F4 do Excel; quem marca a segunda confunde com Page Down sozinho, que só desce uma tela.",
      pegadinha: "No Calc a referência alterna com Shift+F4, não com F4.",
      conhecimento: "Ctrl+End leva à última célula usada da planilha.",
    },
    {
      topico: "Funções",
      subassunto: "PROCV",
      dificuldade: 5,
      raciocinio: "PROCV procura na 1ª coluna, devolve a coluna de número indicado; o 0 exige valor exato.",
      enunciado:
        "No Calc, a faixa A2:C6 tem matrícula (coluna A), nome (coluna B) e lotação (coluna C) de cinco policiais. A fórmula =PROCV(1045;A2:C6;3;0) devolve",
      alternativas: [
        "o nome do policial da linha em que a coluna A tem 1045, só com valor igual.",
        "o conteúdo da terceira linha da faixa, seja qual for a matrícula que estiver nela.",
        "a lotação mais próxima de 1045, mesmo que nenhuma matrícula seja igual a esse valor.",
        "a lotação da linha em que a coluna A tem 1045, só se o valor for exatamente igual.",
        "o número 1045, caso ele apareça em qualquer lugar da coluna C da faixa pesquisada.",
      ],
      correta: 3,
      explicacao:
        "O PROCV procura 1045 na primeira coluna da faixa (A), vai até a terceira coluna da faixa (C, a lotação) na mesma linha e devolve o que está lá. O 0 no fim exige valor exatamente igual; se não houver, o resultado é #N/D.",
      explicacaoErradas:
        "O nome está na segunda coluna, não na terceira. O 3 é o número da coluna, não da linha. Aproximar o valor é o que acontece com 1 (ou VERDADEIRO) no último argumento. O PROCV procura sempre na primeira coluna, não na coluna C.",
      pegadinha: "O índice conta colunas da faixa, começando em 1 na coluna da procura.",
      conhecimento: "PROCH faz a mesma busca na horizontal, procurando na primeira linha.",
    },
    {
      topico: "Fórmulas",
      subassunto: "Ordem das contas",
      dificuldade: 5,
      raciocinio: "Potência antes de subtração; * e / da esquerda para a direita; ; = e, : = até.",
      enunciado:
        "Sobre fórmulas no Calc, analise as afirmativas.\nI. =2+3*4 resulta em 14.\nII. =10-2^2 resulta em 64.\nIII. =10/2*5 resulta em 25, porque divisão e multiplicação são feitas da esquerda para a direita.\nIV. =SOMA(A1;A3) soma só A1 e A3, e =SOMA(A1:A3) soma A1, A2 e A3.\nEstão corretas as afirmativas",
      alternativas: ["I e III, apenas.", "II, III e IV, apenas.", "I, III e IV, apenas.", "I, II e IV, apenas.", "I, II, III e IV."],
      correta: 2,
      explicacao:
        "Em I, a multiplicação vem antes: 2 + 12 = 14. Em III, 10/2 = 5 e 5*5 = 25. Em IV, o ponto e vírgula junta células soltas e os dois-pontos pegam a faixa inteira.",
      explicacaoErradas:
        "A II é falsa: a potência vem antes da subtração, então 10 − 4 = 6. O 64 sairia só com parênteses, =(10-2)^2. Quem tira a III faz a multiplicação primeiro e chega a 1.",
      pegadinha: "Multiplicação não vem antes da divisão: as duas seguem da esquerda para a direita.",
      conhecimento: "O & junta textos: =\"PRF\"&\"2027\" mostra PRF2027.",
    },
    {
      topico: "Funções",
      subassunto: "SE",
      dificuldade: 4,
      raciocinio: "5 não é >= 7: vai para o SE de dentro; 5 >= 5 é verdadeiro.",
      enunciado:
        "No Calc, B2 contém =SE(A2>=7;\"Apto\";SE(A2>=5;\"Recuperação\";\"Inapto\")). Se A2 tem o número 5, B2 mostra",
      alternativas: ["Apto.", "Inapto.", "#NOME?, por haver dois SE na mesma fórmula.", "FALSO.", "Recuperação."],
      correta: 4,
      explicacao:
        "O primeiro teste (5 >= 7) é falso, então o Calc vai para o SE de dentro. Lá, 5 >= 5 é verdadeiro, e a célula mostra Recuperação.",
      explicacaoErradas:
        "Apto exigiria 7 ou mais. Inapto só viria com menos de 5. SE dentro de SE é permitido e não dá erro. FALSO apareceria só se faltasse o valor para o caso falso.",
      pegadinha: "Maior ou igual inclui o próprio 5.",
      conhecimento: "Texto dentro da fórmula vai entre aspas; número, não.",
    },
    {
      topico: "Funções",
      subassunto: "SOMASE",
      dificuldade: 5,
      raciocinio: "SOMASE(onde testar;critério;o que somar). CONT.SE só conta.",
      enunciado:
        "No Calc, A2:A5 tem as unidades Norte, Sul, Norte e Leste, e B2:B5 tem as ocorrências 3, 5, 4 e 2. A fórmula que soma só as ocorrências da unidade Norte, dando 7, é",
      alternativas: [
        "=CONT.SE(A2:A5;\"Norte\")",
        "=SOMASE(A2:A5;\"Norte\";B2:B5)",
        "=SOMASE(B2:B5;\"Norte\";A2:A5)",
        "=SOMA(A2:A5;\"Norte\";B2:B5)",
        "=SE(A2:A5=\"Norte\";SOMA(B2:B5))",
      ],
      correta: 1,
      explicacao:
        "O SOMASE testa o critério na primeira faixa (as unidades em A), e soma as células correspondentes da terceira faixa (as ocorrências em B): 3 + 4 = 7.",
      explicacaoErradas:
        "CONT.SE só conta quantas vezes Norte aparece e dá 2. Trocar as faixas faz o teste nas ocorrências, onde não há Norte. SOMA não aceita critério. O SE com SOMA(B2:B5) somaria tudo, sem filtrar.",
      pegadinha: "A primeira faixa do SOMASE é onde se procura; a última é o que se soma.",
      conhecimento: "CONT.SE(A2:A5;\"Norte\") daria 2: conta, não soma.",
    },
  ],
};
