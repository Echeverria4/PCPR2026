import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-a10",
  resumo: {
    ideia:
      "O Writer é o editor de textos do LibreOffice, pacote gratuito e livre. A prova cobra os formatos de arquivo, a proteção com senha, a seleção com o mouse, os atalhos (que não são os do Word em português), as quebras, os estilos, o estilo de página, os campos, o sumário, a tabela com cálculo e a mala direta.",
    itens: [
      {
        termo: "LibreOffice e Writer",
        faz: "Pacote de escritório gratuito e de software livre, mantido pela The Document Foundation. Nasceu em 2010 como um ramo do OpenOffice.org, quando a Oracle comprou a Sun. Em 2011 a Oracle passou o OpenOffice para a Apache (Apache OpenOffice).",
        pista: "No Brasil, o OpenOffice se chamava BrOffice; a comunidade migrou para o LibreOffice.",
      },
      {
        termo: "Formatos",
        faz: "O formato próprio do Writer é o .odt (padrão aberto ODF); o modelo é .ott. Abre e salva .docx, .doc, .rtf, .txt e .html, com possível mudança de formatação. Exporta para PDF e EPUB sem programa extra.",
      },
      {
        termo: "Exportar PDF",
        faz: "Arquivo > Exportar como > Exportar como PDF abre a janela de opções (páginas, qualidade, senha). Exportar diretamente como PDF gera o arquivo na hora, sem essa janela.",
      },
      {
        termo: "Proteção por senha",
        faz: "Na janela Salvar como, marcar Salvar com senha. Senha para abrir (proteção contra leitura): sem ela o arquivo não abre. Senha para editar (proteção contra gravação): abre só para leitura e precisa da senha para alterar. A senha muda em Arquivo > Propriedades > Geral.",
        pista: "A criptografia OpenPGP é outra opção e exige um programa de OpenPGP instalado.",
      },
      {
        termo: "Seleção com o mouse",
        faz: "Dois cliques marcam a palavra, três marcam a frase e quatro marcam o parágrafo. Shift + setas estendem a seleção; Ctrl+A seleciona tudo; Ctrl+Home vai ao início do documento.",
        pista: "No Word, três cliques já marcam o parágrafo.",
      },
      {
        termo: "Atalhos de caractere e alinhamento",
        faz: "Ctrl+B negrito, Ctrl+I itálico, Ctrl+U sublinhado. Ctrl+L à esquerda, Ctrl+E centralizado, Ctrl+R à direita, Ctrl+J justificado.",
        pista: "No Word em português, negrito é Ctrl+N e sublinhado é Ctrl+S.",
      },
      {
        termo: "Atalhos de arquivo e edição",
        faz: "Ctrl+N novo, Ctrl+O abrir, Ctrl+S salvar, Ctrl+Shift+S salvar como, Ctrl+P imprimir, Ctrl+Z desfazer, Ctrl+Y refazer, Ctrl+H localizar e substituir, F7 ortografia.",
      },
      {
        termo: "Quebras",
        faz: "Enter: novo parágrafo. Shift+Enter: quebra de linha no mesmo parágrafo. Ctrl+Enter: quebra de página. Ctrl+Shift+Enter: quebra de coluna. Em Formatar > Parágrafo > Fluxo do texto ficam Manter com o próximo parágrafo e o controle de linhas órfãs e viúvas.",
      },
      {
        termo: "Listas",
        faz: "F12 liga e desliga a lista numerada; Shift+F12 liga e desliga os marcadores. Com a lista ligada, cada Enter cria um novo item; Enter num item vazio encerra a lista.",
      },
      {
        termo: "Estilos",
        faz: "F11 abre o painel Estilos. Ctrl+1, Ctrl+2 e Ctrl+3 aplicam Título 1, 2 e 3; Ctrl+0 aplica Corpo de texto. O modo de preenchimento de formato aplica o estilo escolhido a cada clique.",
      },
      {
        termo: "Estilo de página",
        faz: "Guarda margens, bordas, orientação, cabeçalho, rodapé e o formato do número (por exemplo, algarismos romanos). Mudar o estilo muda todas as páginas que o usam. A quebra de página manual pode trocar o estilo e o número inicial da página seguinte.",
      },
      {
        termo: "Campos",
        faz: "Número de página, data e referência cruzada são campos: aparecem com fundo cinza. Ctrl+F8 liga e desliga esse sombreado; Ctrl+F9 alterna entre o nome do campo e o seu conteúdo.",
      },
      {
        termo: "Sumário",
        faz: "Inserir > Sumário e índice monta o sumário com os parágrafos que usam os estilos de título. Ele não se corrige sozinho: clicar com o botão direito e escolher Atualizar índice.",
      },
      {
        termo: "Tabela e cálculo",
        faz: "Ctrl+F12 insere tabela. Na célula, F2 abre a barra de fórmulas: por exemplo, =sum <A1:A3> soma as três células. São contas simples, longe dos recursos do Calc.",
      },
      {
        termo: "Mala direta",
        faz: "Ferramentas > Assistente de mala direta junta um modelo de carta a uma fonte de dados (planilha ou banco de dados) e gera uma carta para cada registro, trocando nome, endereço e outros dados.",
      },
    ],
  },
  questoes: [
    {
      topico: "Edição",
      subassunto: "Seleção com o mouse",
      dificuldade: 4,
      raciocinio: "No Writer: 2 cliques = palavra, 3 = frase, 4 = parágrafo. O parágrafo com 3 cliques é do Word.",
      enunciado:
        "Um escrivão revisa um boletim no LibreOffice Writer e clica três vezes seguidas sobre uma palavra no meio de um parágrafo de quatro frases. Com a configuração padrão, o Writer seleciona",
      alternativas: [
        "a frase inteira em que a palavra está.",
        "o parágrafo inteiro em que a palavra está, com as quatro frases.",
        "apenas a palavra clicada, junto com o espaço que vem depois dela.",
        "a linha da tela em que a palavra aparece, de uma margem à outra.",
        "o documento inteiro, do mesmo jeito que faz o atalho Ctrl+A.",
      ],
      correta: 0,
      explicacao:
        "No Writer, dois cliques marcam a palavra, três marcam a frase e quatro marcam o parágrafo inteiro.",
      explicacaoErradas:
        "Marcar o parágrafo com três cliques é o comportamento do Word; no Writer o parágrafo pede quatro cliques. A palavra sozinha vem com dois cliques. Nem a linha da tela nem o documento inteiro são marcados por cliques seguidos.",
      pegadinha: "Quem estudou só o Word responde parágrafo.",
      conhecimento: "Ctrl+A seleciona o documento todo; Shift + setas estendem a seleção.",
    },
    {
      topico: "Arquivo",
      subassunto: "Proteção por senha",
      dificuldade: 5,
      raciocinio: "Senha de abrir bloqueia a leitura; senha de editar deixa abrir só para leitura; OpenPGP precisa de programa; senha esquecida não tem atalho.",
      enunciado:
        "Sobre a proteção de documentos no LibreOffice Writer, analise as afirmativas.\nI. Com proteção contra leitura, o arquivo não pode ser aberto sem a senha.\nII. Com proteção contra gravação, o arquivo abre no modo somente leitura e só pode ser alterado com a senha.\nIII. A criptografia OpenPGP exige que um programa de OpenPGP esteja instalado no computador.\nIV. Se a senha de abertura for esquecida, o Writer abre o arquivo em modo de segurança, sem pedir a senha.\nEstão corretas as afirmativas",
      alternativas: ["I e II, apenas.", "II, III e IV, apenas.", "I, II, III e IV.", "I, II e III, apenas.", "I e IV, apenas."],
      correta: 3,
      explicacao:
        "A senha para abrir protege contra leitura e a senha para editar protege contra gravação, deixando o arquivo aberto só para leitura. A opção OpenPGP depende de um programa de OpenPGP instalado. As três primeiras estão certas.",
      explicacaoErradas:
        "A IV é falsa: o arquivo criptografado com senha não pode ser aberto sem ela, e não existe modo que pule a senha. Quem deixa de fora a III ignora a exigência do programa de OpenPGP.",
      pegadinha: "Senha de editar não impede de ler; só impede de alterar.",
      conhecimento: "A senha é marcada em Salvar com senha, na janela Salvar como, e muda em Arquivo > Propriedades > Geral.",
    },
    {
      topico: "Formatação",
      subassunto: "Quebras",
      dificuldade: 4,
      raciocinio: "Ctrl+Enter = página; Shift+Enter = linha; Ctrl+Shift+Enter = coluna.",
      enunciado:
        "Um agente digita um relatório no Writer e quer que o anexo comece no alto de uma nova página, sem apertar Enter várias vezes. O atalho da quebra de página manual é",
      alternativas: [
        "Shift+Enter, que leva o cursor para o alto da página seguinte.",
        "Ctrl+Enter, que empurra o texto seguinte para a próxima página.",
        "Ctrl+Shift+Enter, que cria uma página nova logo depois da atual.",
        "Page Down, que desce o texto do anexo para a página seguinte.",
        "Enter repetido até o fim da folha, que é o único caminho no Writer.",
      ],
      correta: 1,
      explicacao:
        "Ctrl+Enter insere a quebra de página manual: o texto depois do cursor passa para o alto da página seguinte, mesmo que o texto anterior mude de tamanho.",
      explicacaoErradas:
        "Shift+Enter é a quebra de linha, que fica no mesmo parágrafo. Ctrl+Shift+Enter é a quebra de coluna. Page Down só move o cursor pela tela, sem inserir nada. Apertar Enter várias vezes funciona mal, porque qualquer mudança no texto desloca o anexo.",
      pegadinha: "Shift+Enter quebra a linha, não a página.",
      conhecimento: "Em Formatar > Parágrafo > Fluxo do texto, Manter com o próximo parágrafo evita título sozinho no pé da página.",
    },
    {
      topico: "Atalhos",
      subassunto: "Teclas de função",
      dificuldade: 4,
      raciocinio: "F7 ortografia; F11 Estilos; F12 lista numerada; Ctrl+F8 sombreado dos campos.",
      enunciado:
        "Associe cada atalho do LibreOffice Writer à sua função.\n(1) F7\n(2) F11\n(3) F12\n(4) Ctrl+F8\n( ) Abre o painel de Estilos.\n( ) Liga ou desliga a lista numerada.\n( ) Inicia a verificação ortográfica.\n( ) Tira ou põe o fundo cinza dos campos.\nA sequência correta, de cima para baixo, é",
      alternativas: ["3, 2, 1, 4.", "2, 1, 3, 4.", "2, 3, 4, 1.", "1, 3, 2, 4.", "2, 3, 1, 4."],
      correta: 4,
      explicacao:
        "F11 abre os Estilos (2). F12 liga a lista numerada (3). F7 abre a verificação ortográfica (1). Ctrl+F8 alterna o sombreado cinza dos campos (4).",
      explicacaoErradas:
        "As outras sequências trocam F11 com F12, F7 com F12 ou F7 com Ctrl+F8. Shift+F12, e não F12, liga os marcadores.",
      pegadinha: "F12 é numeração; Shift+F12 é marcador.",
      conhecimento: "Ctrl+F9 mostra o nome do campo no lugar do conteúdo.",
    },
    {
      topico: "Sumário",
      subassunto: "Estilos de título",
      dificuldade: 5,
      raciocinio: "Sumário vem dos estilos de título e precisa ser atualizado à mão.",
      enunciado:
        "Julgue as afirmativas sobre o sumário automático no Writer como verdadeiras (V) ou falsas (F).\n( ) O sumário é montado a partir dos parágrafos formatados com os estilos de título, como Título 1 e Título 2.\n( ) Quando o texto de um título muda, o sumário se corrige na mesma hora, sem que seja preciso atualizá-lo.\n( ) Ctrl+1 aplica o estilo Título 1 ao parágrafo, e Ctrl+0 aplica o estilo Corpo de texto.\n( ) Clicar com o botão direito no sumário e escolher Atualizar índice refaz as entradas e os números de página.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, V, V, V.", "V, F, F, V.", "V, F, V, V.", "F, F, V, V.", "V, V, F, V."],
      correta: 2,
      explicacao:
        "O sumário lê os estilos de título, por isso o título digitado em negrito comum não entra. Ctrl+1 e Ctrl+0 aplicam Título 1 e Corpo de texto. Mudanças no texto só aparecem no sumário depois de Atualizar índice.",
      explicacaoErradas:
        "A segunda é falsa: o sumário não se corrige sozinho. Quem marca a terceira como falsa esquece os atalhos de estilo; quem marca a primeira como falsa ignora que tudo depende dos estilos.",
      pegadinha: "Título em negrito e fonte grande, sem o estilo, fica fora do sumário.",
      conhecimento: "Ferramentas > Atualizar > Atualizar tudo também refaz o sumário.",
    },
    {
      topico: "Página",
      subassunto: "Estilo de página",
      dificuldade: 4,
      raciocinio: "Borda e margem do estilo de página valem para todas as páginas que usam aquele estilo.",
      enunciado:
        "Num relatório de 12 páginas, todas com o estilo de página Padrão, o usuário abre Formatar > Estilo de página, põe uma borda em volta da página e muda a margem esquerda para 3 cm. O resultado é que",
      alternativas: [
        "só a página em que o cursor está recebe a borda e a margem nova.",
        "a borda aparece em todas, mas a margem muda só na página atual.",
        "a borda some na impressão, porque é só um guia visual da tela.",
        "as mudanças valem só para as páginas novas, criadas depois da alteração do estilo.",
        "a borda e a nova margem valem para as 12 páginas, que usam o mesmo estilo.",
      ],
      correta: 4,
      explicacao:
        "Margens e bordas da página fazem parte do estilo de página. Como as 12 páginas usam o estilo Padrão, todas recebem a borda e a margem de 3 cm.",
      explicacaoErradas:
        "O estilo não trabalha por página isolada nem só para páginas futuras: tudo que usa o estilo muda junto. A borda da página é impressa; o que não sai na impressão são os limites do texto, que só guiam a tela.",
      pegadinha: "Para ter uma página diferente, é preciso outro estilo de página, aplicado por uma quebra manual.",
      conhecimento: "A quebra manual (Inserir > Mais quebras) pode trocar o estilo da página seguinte e reiniciar a numeração.",
    },
    {
      topico: "Campos",
      subassunto: "Ctrl+F9 e Ctrl+F8",
      dificuldade: 5,
      raciocinio: "Ctrl+F9 troca nome do campo por conteúdo; Ctrl+F8 liga e desliga o sombreado.",
      enunciado:
        "Ao inserir o número da página no rodapé, o usuário vê as palavras Número da página no lugar do número, e o campo aparece com fundo cinza. Para mostrar o número no lugar do nome do campo e, em seguida, tirar o fundo cinza da tela, ele usa, nesta ordem,",
      alternativas: [
        "Ctrl+F9 e, depois, Ctrl+F8.",
        "Ctrl+F8 e, depois, Ctrl+F9.",
        "F9 e, depois, a tecla Ctrl+F12.",
        "Ctrl+F2 e, depois, a tecla F11.",
        "F5 e, depois, a tecla Shift+F12.",
      ],
      correta: 0,
      explicacao:
        "Ctrl+F9 alterna entre o nome do campo e o seu conteúdo, então o número volta a aparecer. Ctrl+F8 liga e desliga o sombreado cinza, que só aparece na tela e não sai na impressão.",
      explicacaoErradas:
        "A ordem invertida tiraria primeiro o cinza e só depois mostraria o número. Ctrl+F12 insere tabela, F11 abre os Estilos, Shift+F12 liga marcadores e F5 abre o Navegador; nenhum deles troca o nome do campo pelo número.",
      pegadinha: "As duas teclas são vizinhas: F8 cuida do cinza, F9 do nome do campo.",
      conhecimento: "O número da página é um campo: muda sozinho em cada página.",
    },
    {
      topico: "Arquivo",
      subassunto: "Formatos e PDF",
      dificuldade: 4,
      raciocinio: ".odt é o formato próprio; exportar PDF e EPUB vem de fábrica; salvar em .docx não apaga o .odt.",
      enunciado:
        "Sobre formatos de arquivo no LibreOffice Writer, analise as afirmativas.\nI. O formato próprio do Writer é o .odt, do padrão aberto ODF.\nII. Exportar diretamente como PDF gera o arquivo sem abrir a janela de opções; Exportar como PDF abre essa janela.\nIII. Salvar uma cópia no formato .docx apaga do disco o arquivo .odt original.\nIV. Além do PDF, o Writer exporta o documento no formato EPUB, de livro digital.\nEstão corretas as afirmativas",
      alternativas: ["I e II, apenas.", "II, III e IV, apenas.", "I, II e IV, apenas.", "I, II e III, apenas.", "I, II, III e IV."],
      correta: 2,
      explicacao:
        "O .odt é o formato próprio. As duas formas de exportar PDF diferem só na janela de opções. A exportação em EPUB vem no próprio Writer.",
      explicacaoErradas:
        "A III é falsa: salvar em outro formato cria um arquivo novo e mantém o .odt no disco. Quem deixa de fora a IV não conhece a exportação em EPUB.",
      pegadinha: "Gerar PDF no Writer não precisa de impressora virtual nem de programa à parte.",
      conhecimento: "Ao salvar em .docx, o Writer avisa que parte da formatação pode não ser mantida.",
    },
    {
      topico: "Ferramentas",
      subassunto: "Mala direta",
      dificuldade: 4,
      raciocinio: "Mesma carta para muitos, mudando só os dados de uma planilha = mala direta.",
      enunciado:
        "Uma seção precisa mandar a mesma carta a 300 pessoas, mudando só o nome e o endereço, que estão numa planilha. No Writer, o recurso feito para isso é",
      alternativas: [
        "a AutoCorreção, que troca o nome a cada página enquanto se digita.",
        "a referência cruzada, que copia cada linha da planilha para uma página nova.",
        "o modo de preenchimento de formato, que aplica o nome em cada carta.",
        "a mala direta, que junta o modelo da carta aos dados da planilha.",
        "o sumário automático, que lista os nomes e endereços no começo.",
      ],
      correta: 3,
      explicacao:
        "A mala direta (Ferramentas > Assistente de mala direta) usa a planilha como fonte de dados e gera uma carta para cada registro, trocando o nome e o endereço.",
      explicacaoErradas:
        "A AutoCorreção corrige palavras ao digitar. A referência cruzada aponta para outra parte do próprio documento. O modo de preenchimento aplica estilos. O sumário lista os títulos do documento.",
      pegadinha: "Referência cruzada liga partes do mesmo texto; não puxa dados de fora.",
      conhecimento: "A fonte de dados pode ser uma planilha ou um banco de dados.",
    },
    {
      topico: "Tabela",
      subassunto: "Cálculo na tabela",
      dificuldade: 5,
      raciocinio: "No Writer, a fórmula usa o nome em inglês e a célula entre < >.",
      enunciado:
        "Numa tabela do Writer, a célula A4 deve mostrar a soma das células A1, A2 e A3. Com o cursor em A4 e a barra de fórmulas aberta com F2, a fórmula no padrão do Writer é",
      alternativas: ["=SOMA(A1:A3)", "=sum <A1:A3>", "=sum (A1;A3)", "=soma [A1:A3]", "sum A1 até A3"],
      correta: 1,
      explicacao:
        "Na tabela do Writer, a fórmula começa com o sinal de igual, usa o operador em inglês e coloca as células entre os sinais de menor e maior: =sum <A1:A3>.",
      explicacaoErradas:
        "=SOMA(A1:A3) é o jeito do Calc em português, não da tabela do Writer. Parênteses com ponto e vírgula, colchetes e a forma escrita por extenso não são aceitos.",
      pegadinha: "Confundir a fórmula da tabela do Writer com a da planilha do Calc.",
      conhecimento: "As contas na tabela do Writer são simples; cálculos pesados ficam para o Calc.",
    },
  ],
};
