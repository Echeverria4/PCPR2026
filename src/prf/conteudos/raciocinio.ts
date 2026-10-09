import type { ConteudoPrf } from "../../data/prf";

export const CONTEUDO_PRF_RLM: ConteudoPrf[] = [
  {
    materia: "rlm",
    topico: "Estruturas lógicas",
    texto: `Proposição é toda sentença declarativa à qual se pode atribuir um, e apenas um, valor lógico: verdadeiro (V) ou falso (F). O primeiro passo do raciocínio lógico é separar o que é proposição do que não é.

Não são proposições:
• Frases interrogativas: "Quem está de plantão hoje?"
• Frases exclamativas: "Que congestionamento!"
• Frases imperativas, com ordens ou pedidos: "Apresente os documentos do veículo."
• Sentenças abertas, com sujeito indeterminado ou variável: "Ele é servidor da PRF", "x + 3 = 10". Só viram proposição quando a variável é identificada ou quantificada
• Paradoxos, que não admitem valor lógico coerente: "Esta frase é falsa."

Proposição falsa continua sendo proposição: "O Brasil tem 30 estados" é proposição, com valor F. E não saber o valor de uma frase não a torna aberta: "O Brasil tem mais de 5.000 municípios" é proposição mesmo para quem não conhece o número, porque é possível dizer se é V ou F.

Princípios da lógica clássica:
• Identidade: toda proposição é idêntica a si mesma
• Não contradição: nenhuma proposição é V e F ao mesmo tempo
• Terceiro excluído: toda proposição é V ou F, sem terceira possibilidade

Associações lógicas (lógica das situações): o enunciado dá pistas sobre pessoas, cargos, cidades ou objetos e pede a combinação correta. Método:
• Monte uma tabela de dupla entrada com as categorias
• Marque primeiro as informações diretas e depois as que decorrem delas
• Cada linha e cada coluna têm um único "sim": achado um, os demais da linha e da coluna viram "não"
• Todas as informações necessárias estão no enunciado; se parece faltar dado, falta uma dedução

Verdades e mentiras: quando se sabe quantos dizem a verdade, suponha que cada um deles fala a verdade e confira se o cenário fica coerente. A hipótese que gera contradição é descartada.`,
    exemplos: [
      "\"Brasília é a capital do Brasil\" é proposição verdadeira, \"Salvador é a capital do Brasil\" é proposição falsa e \"Qual é a capital do Brasil?\" não é proposição.",
      "Se, entre três servidores, um atua na seção de multas, outro no arquivo e outro na frota, e Ana não está no arquivo nem na frota, a tabela já põe Ana na seção de multas e tira essa seção dos outros dois.",
    ],
    curiosidade:
      "O paradoxo do mentiroso (\"esta frase é falsa\") é atribuído ao filósofo grego Eubulides de Mileto, do século IV a.C., e até hoje é estudado na lógica.",
  },
  {
    materia: "rlm",
    topico: "Lógica de argumentação",
    texto: `Argumento é um conjunto de proposições em que uma delas, a conclusão, é apresentada como consequência das outras, as premissas.

Validade × verdade:
• Verdade e falsidade são propriedades das proposições; validade é propriedade do argumento
• Argumento válido: é impossível ter todas as premissas verdadeiras e a conclusão falsa. A validade depende só da forma, não do assunto
• Um argumento válido pode ter premissas falsas e conclusão falsa: "Todo peixe voa; o tubarão é peixe; logo, o tubarão voa" é válido
• Um argumento inválido pode ter premissas e conclusão verdadeiras: basta a conclusão não decorrer delas
• Argumento válido com premissas verdadeiras (argumento sólido) tem, necessariamente, conclusão verdadeira

Formas válidas mais cobradas:
• Modus ponens: p → q; p; logo, q
• Modus tollens: p → q; ~q; logo, ~p
• Silogismo hipotético: p → q; q → r; logo, p → r
• Silogismo disjuntivo: p ∨ q; ~p; logo, q
• Dilema construtivo: p → q; r → s; p ∨ r; logo, q ∨ s

Falácias formais (formas inválidas):
• Afirmação do consequente: p → q; q; logo, p
• Negação do antecedente: p → q; ~p; logo, ~q

Como resolver questões de dedução:
• Considere todas as premissas verdadeiras
• Comece pela premissa que já entrega valores lógicos (uma proposição simples ou uma conjunção)
• Propague: com o valor de uma simples, as condicionais e as disjunções vão revelando as demais
• Em cadeias de condicionais, a negação do último consequente volta até o início (modus tollens repetido)

Para testar a validade, tente deixar a conclusão falsa com todas as premissas verdadeiras. Se conseguir, o argumento é inválido; se for impossível, é válido.`,
    exemplos: [
      "\"Se o semáforo está vermelho, o carro para. O carro não parou. Logo, o semáforo não estava vermelho.\" É modus tollens, forma válida.",
      "\"Se o servidor faltou, o ponto ficou em branco. O ponto ficou em branco. Logo, o servidor faltou.\" É afirmação do consequente: o ponto pode estar em branco por falha do sistema.",
    ],
    curiosidade:
      "Os nomes vêm do latim medieval: modus ponens é o \"modo que afirma\", e modus tollens, o \"modo que nega\". As duas formas já eram estudadas pelos estoicos, como Crisipo, no século III a.C.",
  },
  {
    materia: "rlm",
    topico: "Proposições simples e compostas",
    texto: `Proposição simples transmite uma única ideia e não tem conectivo: "O posto fica no km 82", "A viatura está abastecida". O "não" apenas modifica a proposição, sem ligar duas ideias: "A viatura não está abastecida" é a negação de uma proposição simples.

Proposição composta reúne duas ou mais simples ligadas por conectivos. O valor lógico da composta depende só dos valores das simples e do conectivo usado.

Os cinco conectivos:
• Conjunção (∧): "p e q". Também aparece como "mas", "porém", "embora" e "nem" (que equivale a "e não")
• Disjunção inclusiva (∨): "p ou q", e as duas podem ocorrer juntas
• Disjunção exclusiva (⊻): "ou p, ou q", e só uma pode ocorrer
• Condicional (→): "se p, então q". p é o antecedente; q, o consequente
• Bicondicional (↔): "p se, e somente se, q", o mesmo que "p é condição necessária e suficiente para q"

Formas disfarçadas da condicional p → q (em todas, p é o antecedente):
• "q, se p" e "q, caso p": a ordem de escrita não muda quem é o antecedente
• "Quando p, q" e "Sempre que p, q"
• "p implica q"
• "p é condição suficiente para q" e "q é condição necessária para p"
• "p somente se q"
• "Todo p é q", lido como "se é p, então é q"

Verbos subentendidos: "A PRF patrulha a BR-101 e a BR-116" é composta (a PRF patrulha a BR-101 ∧ a PRF patrulha a BR-116), mesmo com um só verbo escrito.

Contagem: o número n de proposições simples distintas define a tabela-verdade, com 2ⁿ linhas. Negar uma simples não cria proposição nova: p e ~p contam como uma só.`,
    exemplos: [
      "\"A multa foi paga, mas o veículo continua retido\" é uma conjunção: o \"mas\" tem o valor lógico do \"e\".",
      "\"O alarme dispara quando a porta do cofre é aberta\" equivale a \"Se a porta do cofre é aberta, então o alarme dispara\": é o \"quando\" que introduz o antecedente.",
    ],
    curiosidade:
      "O latim tinha duas palavras para \"ou\": vel, em geral inclusiva, e aut, que tende ao sentido exclusivo. O símbolo ∨ da disjunção costuma ser associado à inicial de vel.",
  },
  {
    materia: "rlm",
    topico: "Tabelas-verdade",
    texto: `A tabela-verdade lista todas as combinações de valores das proposições simples e mostra o valor da composta em cada uma. Com n proposições simples distintas, são 2ⁿ linhas: 2 simples dão 4 linhas; 3 dão 8; 4 dão 16; 5 dão 32.

Regra de cada conectivo:
• Negação (~p): inverte o valor
• Conjunção (p ∧ q): só é V quando as duas são V
• Disjunção inclusiva (p ∨ q): só é F quando as duas são F
• Disjunção exclusiva (p ⊻ q): é V quando os valores são diferentes
• Condicional (p → q): só é F quando o antecedente é V e o consequente é F. Com antecedente F, é sempre V
• Bicondicional (p ↔ q): é V quando os valores são iguais

Tabela da condicional:
• p V, q V: V
• p V, q F: F
• p F, q V: V
• p F, q F: V

Classificação:
• Tautologia: V em todas as linhas. Ex.: p ∨ ~p; (p ∧ q) → p
• Contradição: F em todas as linhas. Ex.: p ∧ ~p
• Contingência: tem linhas V e linhas F

Montagem: na primeira coluna, metade das linhas é V e metade é F; na seguinte, os blocos têm a metade do tamanho; e assim por diante, até a última, que alterna V e F linha a linha. Resolva primeiro os parênteses e, por último, o conectivo principal.

Atalho de prova: para saber se uma condicional pode ser falsa, procure o único caso que a derruba (antecedente V e consequente F). Se esse caso for impossível, a condicional é tautologia. Toda forma válida de argumento, escrita como "(premissas) → conclusão", é uma tautologia.`,
    exemplos: [
      "Com p: \"o posto está aberto\" (V) e q: \"há fila no posto\" (F), a proposição \"Se o posto está aberto, então há fila\" é F, pois é o único caso V → F.",
      "Se forem verdadeiras \"o servidor está de férias\" e \"o servidor está trabalhando\", a proposição \"Ou o servidor está de férias, ou está trabalhando\" é F, pois a exclusiva exige valores diferentes.",
    ],
    curiosidade:
      "As tabelas-verdade ganharam a forma atual em 1921, em trabalhos independentes de Ludwig Wittgenstein, no Tractatus Logico-Philosophicus, e do matemático Emil Post.",
  },
  {
    materia: "rlm",
    topico: "Equivalências lógicas",
    texto: `Duas proposições são logicamente equivalentes (≡) quando têm a mesma tabela-verdade: o mesmo valor em todas as linhas. Equivalentes dizem a mesma coisa com outras palavras e podem ser trocadas uma pela outra.

Equivalências da condicional (as mais cobradas):
• Contrapositiva: p → q ≡ ~q → ~p (negam-se as duas partes e troca-se a ordem)
• Em disjunção: p → q ≡ ~p ∨ q (nega-se o antecedente, troca-se o "se... então" por "ou" e mantém-se o consequente)
• No caminho inverso: p ∨ q ≡ ~p → q

Não são equivalentes a p → q:
• Recíproca: q → p
• Inversa: ~p → ~q
Recíproca e inversa são equivalentes entre si, mas não à condicional original.

Bicondicional e exclusiva:
• p ↔ q ≡ (p → q) ∧ (q → p)
• p ↔ q ≡ ~p ↔ ~q
• p ⊻ q ≡ ~(p ↔ q) ≡ p ↔ ~q

Equivalências básicas:
• Dupla negação: ~(~p) ≡ p
• Idempotência: p ∧ p ≡ p; p ∨ p ≡ p
• Comutativa: p ∧ q ≡ q ∧ p; p ∨ q ≡ q ∨ p. A condicional não é comutativa
• Distributiva: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r); p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)
• Exportação: (p ∧ q) → r ≡ p → (q → r)

Condição necessária e suficiente: em p → q, p é suficiente para q, e q é necessário para p. Na bicondicional, cada parte é necessária e suficiente para a outra.

Equivalência não é negação: a equivalência mantém o sentido; a negação o inverte. A negação de p → q é p ∧ ~q, tema das leis de De Morgan.`,
    exemplos: [
      "\"Se o relatório foi assinado, o plantão foi encerrado\" equivale a \"Se o plantão não foi encerrado, o relatório não foi assinado\" e a \"O relatório não foi assinado ou o plantão foi encerrado\".",
      "\"O portão abre se, e somente se, o crachá é válido\" equivale a \"Se o portão abre, o crachá é válido, e, se o crachá é válido, o portão abre\".",
    ],
    curiosidade:
      "A contrapositiva sustenta a prova por contraposição, comum na matemática: para demonstrar \"se p, então q\", prova-se que \"se não q, então não p\".",
  },
  {
    materia: "rlm",
    topico: "Leis de De Morgan",
    texto: `As leis de De Morgan ensinam a negar conjunções e disjunções:
• ~(p ∧ q) ≡ ~p ∨ ~q: a negação do "e" é o "ou", negando as duas partes
• ~(p ∨ q) ≡ ~p ∧ ~q: a negação do "ou" é o "e", negando as duas partes

Por que funciona: para derrubar uma conjunção, basta que uma das partes seja falsa; para derrubar uma disjunção, as duas precisam ser falsas.

Negação dos outros conectivos:
• Condicional: ~(p → q) ≡ p ∧ ~q. Mantém-se o antecedente, troca-se por "e" e nega-se o consequente. A negação de uma condicional nunca é outra condicional
• Bicondicional: ~(p ↔ q) ≡ p ⊻ q ≡ (p ∧ ~q) ∨ (~p ∧ q)
• Disjunção exclusiva: ~(p ⊻ q) ≡ p ↔ q
• Dupla negação: ~(~p) ≡ p

Expressões que já trazem a negação:
• "Nem p nem q" ≡ ~p ∧ ~q ≡ ~(p ∨ q)
• "Não é verdade que p e q" ≡ ~p ∨ ~q

Com mais partes, a regra se repete: ~(p ∧ q ∧ r) ≡ ~p ∨ ~q ∨ ~r. Com antecedente composto: ~[(p ∧ q) → r] ≡ p ∧ q ∧ ~r.

Negação das proposições categóricas:
• "Todo A é B" → "Algum A não é B"
• "Nenhum A é B" → "Algum A é B"
• "Algum A é B" → "Nenhum A é B"
• "Algum A não é B" → "Todo A é B"
Pegadinha clássica: a negação de "todo" não é "nenhum".

Negar não é dizer o contrário: a negação de "o pneu está calibrado" é "o pneu não está calibrado", e não "o pneu está furado".`,
    exemplos: [
      "Negação de \"A sala está trancada e o alarme está ligado\": \"A sala não está trancada ou o alarme não está ligado\".",
      "Negação de \"Se a carga é perigosa, o caminhão exibe o painel de segurança\": \"A carga é perigosa e o caminhão não exibe o painel de segurança\".",
    ],
    curiosidade:
      "Augustus De Morgan (1806–1871), que dá nome às leis, foi um matemático britânico nascido na Índia. Regras equivalentes já aparecem em lógicos medievais, como Guilherme de Ockham, no século XIV.",
  },
  {
    materia: "rlm",
    topico: "Diagramas lógicos",
    texto: `As proposições categóricas relacionam dois conjuntos e podem ser desenhadas com diagramas (de Euler ou de Venn):
• "Todo A é B": o círculo A fica inteiro dentro de B (A ⊂ B). Não garante que todo B seja A
• "Nenhum A é B": os círculos não se tocam (conjuntos disjuntos). Equivale a "nenhum B é A"
• "Algum A é B": há pelo menos um elemento na interseção. Equivale a "algum B é A"
• "Algum A não é B": há pelo menos um elemento de A fora de B. Não equivale a "algum B não é A"

"Algum" significa "pelo menos um" e não exclui "todos". Um desenho de "algum A é B" pode mostrar interseção parcial, A dentro de B, B dentro de A ou os dois conjuntos iguais.

Método para checar conclusões:
• Desenhe primeiro as universais ("todo", "nenhum"), que impõem posição fixa
• Depois encaixe as particulares ("algum"), considerando todas as posições possíveis
• A conclusão só é válida se valer em todos os desenhos compatíveis com as premissas. Basta um desenho em que ela falhe para descartá-la

Silogismos válidos frequentes:
• Todo A é B; todo B é C; logo, todo A é C
• Todo A é B; algum C é A; logo, algum C é B
• Nenhum A é B; todo C é A; logo, nenhum C é B
• Nenhum A é B; algum C é A; logo, algum C não é B

Armadilha comum: de "Todo A é B" e "Algum B é C" não se conclui nada sobre A e C, porque os elementos de B que são C podem estar fora de A. Também não se conclui "todo B é A" a partir de "todo A é B".`,
    exemplos: [
      "Se todo radar fixo da rodovia é aferido e nenhum equipamento aferido está fora do prazo, conclui-se que nenhum radar fixo da rodovia está fora do prazo.",
      "\"Algum servidor da unidade é instrutor\" continua verdadeira mesmo que todos os servidores da unidade sejam instrutores, pois \"algum\" quer dizer \"pelo menos um\".",
    ],
    curiosidade:
      "Leonhard Euler usou círculos para representar silogismos em cartas escritas no século XVIII; John Venn propôs, em 1880, diagramas com todas as regiões desenhadas, sombreando as vazias.",
  },
  {
    materia: "rlm",
    topico: "Lógica de primeira ordem",
    texto: `A lógica proposicional trata cada proposição como um bloco. A lógica de primeira ordem, também chamada de lógica de predicados, olha para dentro da frase: separa os objetos (variáveis como x e y), as propriedades e relações (predicados, como P(x): "x é condutor") e os quantificadores.

Quantificadores:
• Universal (∀): "para todo", "qualquer que seja", "cada"
• Existencial (∃): "existe", "algum", "pelo menos um"
• Existencial de unicidade (∃!): "existe um único"

Sentença aberta, como P(x): "x é maior que 5", não tem valor lógico. Vira proposição quando se fixa o valor de x ou quando se usa um quantificador: no conjunto dos naturais, ∃x P(x) é V e ∀x P(x) é F.

O universo (domínio) importa: ∃x (x + 3 = 1) é F nos naturais e V nos inteiros, com x = −2.

Tradução das categóricas:
• Todo A é B: ∀x (A(x) → B(x))
• Algum A é B: ∃x (A(x) ∧ B(x))
• Nenhum A é B: ∀x (A(x) → ~B(x)), ou ~∃x (A(x) ∧ B(x))
• Algum A não é B: ∃x (A(x) ∧ ~B(x))
Regra prática: com o universal, usa-se a condicional; com o existencial, a conjunção.

Negação:
• ~∀x P(x) ≡ ∃x ~P(x)
• ~∃x P(x) ≡ ∀x ~P(x)
• Com dois quantificadores, troca-se cada um e nega-se o predicado: ~∀x ∃y R(x, y) ≡ ∃x ∀y ~R(x, y)

A ordem dos quantificadores muda o sentido: ∀x ∃y é diferente de ∃y ∀x.

Para mostrar que uma universal é falsa, basta um contraexemplo; para mostrar que uma existencial é verdadeira, basta um exemplo.`,
    exemplos: [
      "\"Todo cone do almoxarifado tem faixa refletiva\" cai com um único cone sem faixa: a negação é \"algum cone do almoxarifado não tem faixa refletiva\".",
      "Com P(x, y): \"o servidor x conhece o sistema y\", \"todo servidor conhece algum sistema\" é ∀x ∃y P(x, y), e \"existe um sistema que todo servidor conhece\" é ∃y ∀x P(x, y), que afirma mais.",
    ],
    curiosidade:
      "O símbolo ∃, um E invertido, foi introduzido por Giuseppe Peano no fim do século XIX; o ∀, um A virado, foi adotado por Gerhard Gentzen em 1935, por analogia.",
  },
  {
    materia: "rlm",
    topico: "Princípios de contagem e probabilidade",
    texto: `Princípio fundamental da contagem (PFC): se uma tarefa tem etapas sucessivas e independentes, com m opções na primeira e n na segunda, há m × n maneiras de realizá-la. Se as possibilidades são alternativas que se excluem (faz-se uma coisa ou outra), somam-se.

Fatorial: n! = n × (n − 1) × ... × 1. Por definição, 0! = 1 e 1! = 1.

Agrupamentos:
• Permutação simples: ordena todos os n elementos. Pₙ = n! (anagramas de palavra sem repetição)
• Permutação com repetição: n! dividido pelo fatorial de cada repetição. Anagramas de ARARA: 5!/(3! × 2!) = 10
• Permutação circular: (n − 1)!, para posições em roda
• Arranjo: escolhem-se p de n e a ordem importa (cargos diferentes, pódio, senha). A(n, p) = n!/(n − p)!
• Combinação: escolhem-se p de n e a ordem não importa (comissões, grupos). C(n, p) = n!/[p! × (n − p)!]
• Teste rápido: troque dois escolhidos de lugar. Se o resultado muda, é arranjo; se não muda, é combinação
• C(n, p) = C(n, n − p): escolher 3 de 10 é o mesmo que deixar 7 de fora

Probabilidade, com resultados igualmente prováveis:
• P(A) = casos favoráveis ÷ casos possíveis, de 0 (impossível) a 1 (certo)
• Complementar: P(não A) = 1 − P(A). "Pelo menos um" = 1 − P(nenhum)
• União: P(A ou B) = P(A) + P(B) − P(A e B). Só se soma direto quando os eventos não podem ocorrer juntos
• Interseção: P(A e B) = P(A) × P(B | A), a probabilidade de B sabendo que A ocorreu. Se os eventos são independentes, P(A e B) = P(A) × P(B)
• Sem reposição, a segunda retirada depende da primeira: o total e os casos favoráveis mudam
• Em "um de cada tipo", há mais de uma ordem possível (primeiro A e depois B, ou o contrário)

Alfabeto: desde o Acordo Ortográfico de 1990, em vigor no Brasil desde 2009, são 26 letras, com a volta de K, W e Y.`,
    exemplos: [
      "Escolher, entre 7 servidores, quem dirige e quem acompanha numa viagem dá A(7, 2) = 7 × 6 = 42 maneiras; escolher só a dupla, sem funções, dá C(7, 2) = 21.",
      "Lançada uma moeda três vezes, a probabilidade de sair pelo menos uma cara é 1 − (1/2)³ = 7/8.",
    ],
    curiosidade:
      "A teoria da probabilidade nasceu de cartas trocadas entre Blaise Pascal e Pierre de Fermat em 1654, sobre como dividir o prêmio de um jogo de azar interrompido antes do fim.",
  },
  {
    materia: "rlm",
    topico: "Operações com conjuntos",
    texto: `Conjunto é uma coleção de elementos. Pode ser descrito por enumeração (A = {2, 4, 6}), por propriedade (A = {x | x é par e 0 < x < 8}) ou por diagrama.

Relações:
• Pertinência, entre elemento e conjunto: 4 ∈ A; 5 ∉ A
• Inclusão, entre conjuntos: {2, 4} ⊂ A. O vazio (∅) e o próprio conjunto são subconjuntos de qualquer conjunto
• Um conjunto com n elementos tem 2ⁿ subconjuntos. Ex.: {1, 5, 9} tem 2³ = 8
• A = B quando A ⊂ B e B ⊂ A

Operações:
• União (A ∪ B): elementos que estão em A, em B ou em ambos
• Interseção (A ∩ B): elementos comuns. Se A ∩ B = ∅, os conjuntos são disjuntos
• Diferença (A − B): elementos de A que não estão em B. Se A e B são disjuntos, A − B = A. Em geral, A − B ≠ B − A
• Complementar de A em relação ao universo U: U − A, os elementos de U que estão fora de A
• Diferença simétrica: (A ∪ B) − (A ∩ B), o que está em apenas um dos dois

Contagem com diagramas:
• n(A ∪ B) = n(A) + n(B) − n(A ∩ B)
• n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)
• Preencha o diagrama de dentro para fora: primeiro a interseção de todos, depois as interseções de dois (descontando o centro), por último as partes exclusivas
• "Apenas A" = n(A) − n(A ∩ B); "nenhum" = total − n(A ∪ B)

Conjuntos numéricos: N ⊂ Z ⊂ Q ⊂ R. Racionais são os números que podem ser escritos como fração de inteiros com denominador diferente de zero, incluindo decimais finitos e dízimas periódicas. Irracionais, como √2 e π, têm infinitas casas decimais sem período. R = Q ∪ I, com Q ∩ I = ∅.`,
    exemplos: [
      "Com A = {1, 2, 3, 4} e B = {3, 4, 5}: A ∪ B = {1, 2, 3, 4, 5}, A ∩ B = {3, 4}, A − B = {1, 2} e B − A = {5}.",
      "Numa turma de 50 servidores, 30 fizeram o curso de primeiros socorros, 25 o de libras e 12 os dois: 43 fizeram pelo menos um curso e 7 não fizeram nenhum.",
    ],
    curiosidade:
      "A teoria dos conjuntos foi criada por Georg Cantor no fim do século XIX. Ele mostrou que há infinitos de tamanhos diferentes: o conjunto dos números reais é \"maior\" que o dos naturais.",
  },
  {
    materia: "rlm",
    topico: "Problemas aritméticos, geométricos e matriciais",
    texto: `Aritméticos:
• Fração de uma quantidade: 3/5 de 200 = 200 ÷ 5 × 3 = 120. Atenção a "do total" e "do que restou": no segundo caso, a fração incide sobre a sobra da etapa anterior
• Porcentagem: x% = x/100. Variações sucessivas se multiplicam: alta de 20% seguida de queda de 20% dá 1,2 × 0,8 = 0,96, uma perda de 4%
• Regra de três: grandezas diretamente proporcionais (mais itens, mais custo) ou inversamente proporcionais (mais servidores, menos dias de trabalho)
• MMC: eventos que se repetem e voltam a coincidir (escalas, revisões, rondas). O próximo encontro ocorre após o MMC dos intervalos
• MDC: dividir quantidades em partes iguais, do maior tamanho possível e sem sobra. Vale mmc(a, b) × mdc(a, b) = a × b
• Dízima periódica é racional: 0,333... = 1/3; 0,1555... = (15 − 1)/90 = 7/45

Geométricos:
• Perímetro é a soma dos lados. Áreas: retângulo, b × h; triângulo, (b × h)/2; trapézio, (B + b) × h/2; círculo, πr². Comprimento da circunferência: 2πr
• Teorema de Pitágoras: a² = b² + c², sendo a a hipotenusa. Ternos úteis: 3-4-5, 5-12-13, 6-8-10
• Volume do paralelepípedo: comprimento × largura × altura; 1 m³ = 1.000 litros
• Conversões: 1 km = 1.000 m; 1 m² = 10.000 cm²; 1 hectare = 10.000 m²
• Semelhança: se as medidas lineares são multiplicadas por k, a área fica multiplicada por k² e o volume, por k³

Matriciais:
• Uma matriz m × n tem m linhas e n colunas; aij é o elemento da linha i e da coluna j
• Soma: só entre matrizes de mesma ordem, elemento a elemento
• Produto A × B: exige que o número de colunas de A seja igual ao de linhas de B; (m × n) × (n × p) dá m × p. Em geral, A × B ≠ B × A
• Identidade: 1 na diagonal principal e 0 fora dela. Transposta: troca linhas por colunas
• Determinante de ordem 2: ad − bc. De ordem 3: regra de Sarrus
• Propriedades: fila de zeros, duas filas iguais ou proporcionais, ou uma fila que é combinação linear de outras zeram o determinante; trocar duas filas troca o sinal; det(A × B) = det A × det B; det(kA) = kⁿ × det A, sendo n a ordem
• A matriz quadrada é invertível se, e somente se, o determinante é diferente de zero`,
    exemplos: [
      "Duas viaturas saem juntas do posto às 6h; uma faz ronda a cada 45 minutos e a outra a cada 60. Voltam a sair juntas depois de mmc(45, 60) = 180 minutos, às 9h.",
      "A matriz de linhas (2, 1) e (4, 3) tem determinante 2 × 3 − 1 × 4 = 2; como é diferente de zero, a matriz é invertível.",
    ],
    curiosidade:
      "A palavra \"matriz\" foi usada nesse sentido pela primeira vez por James Joseph Sylvester, em 1850; pouco depois, Arthur Cayley desenvolveu a álgebra das matrizes.",
  },
];
