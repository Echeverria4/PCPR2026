import type { QuestaoPrf } from "../../data/prf";

export const QUESTOES_PRF_RLM: QuestaoPrf[] = [
  {
    id: "prf-rlm-001",
    materia: "rlm",
    topico: "Estruturas lógicas",
    subassunto: "Proposição × sentença aberta, paradoxo e frase imperativa",
    dificuldade: 4,
    raciocinio: "Classificação: testar cada frase quanto a ser declarativa e admitir um único valor lógico, V ou F.",
    enunciado:
      "Durante uma operação na rodovia, um agente anotou as frases abaixo.\n\nI. “A velocidade registrada pelo radar foi superior a 110 km/h.”\nII. “Esta frase é falsa.”\nIII. “x + 20 > 100.”\nIV. “Algum veículo da fila está com o licenciamento atrasado.”\nV. “Apresente o documento do veículo.”\nVI. “Se a carga estiver solta, o caminhão será retido.”\nVII. “Ela estava sem cinto de segurança.”\n\nSão proposições lógicas apenas as frases",
    alternativas: ["I e IV.", "I, II, IV e VI.", "I, IV e VI.", "I, IV, VI e VII.", "I, II, III, IV e VI."],
    correta: 2,
    explicacao:
      "Proposição é a sentença declarativa que admite um, e só um, valor lógico. A I é declarativa e pode ser conferida no registro do radar. A IV, mesmo com o quantificador “algum”, afirma algo sobre os veículos da fila e é verdadeira ou falsa. A VI é uma proposição composta, uma condicional, e também tem valor lógico definido. São proposições, portanto, apenas I, IV e VI.",
    explicacaoErradas:
      "A II é um paradoxo: se for verdadeira, é falsa, e se for falsa, é verdadeira, então não admite valor lógico. A III é uma sentença aberta, cujo valor depende de x. A V é imperativa: ordens não são verdadeiras nem falsas. A VII também é sentença aberta, porque “ela” não identifica ninguém. A combinação com só I e IV esquece a condicional VI; as demais incluem o paradoxo, a sentença com variável ou a frase com pronome indeterminado.",
    pegadinha:
      "A frase VII parece uma afirmação comum sobre um fato, mas o pronome “ela” funciona como variável: sem saber a quem se refere, não há como dizer se é verdadeira ou falsa. Já a IV, com “algum”, é proposição, porque o quantificador fecha a sentença.",
    conhecimento:
      "Conceito de proposição (sentença declarativa com um único valor lógico); princípios da não contradição e do terceiro excluído; sentenças abertas, paradoxos e frases imperativas, interrogativas e exclamativas; proposição quantificada.",
    origem: "banco",
  },
  {
    id: "prf-rlm-002",
    materia: "rlm",
    topico: "Estruturas lógicas",
    subassunto: "Verdades e mentiras sob duas hipóteses diferentes",
    dificuldade: 5,
    raciocinio: "Dedução: testar cada servidor como responsável, contar as declarações verdadeiras e confrontar a contagem com cada hipótese.",
    enunciado:
      "Um documento sumiu do malote de uma unidade administrativa, e sabe-se que apenas um de quatro servidores o retirou. Questionados, eles declararam:\n\nAna: “Foi Breno.”\nBreno: “Foi Davi.”\nCaio: “Não fui eu.”\nDavi: “Breno está mentindo.”\n\nConsidere, separadamente, duas hipóteses: (1) apenas um dos quatro disse a verdade; (2) apenas um dos quatro mentiu. Quem retirou o documento foi, respectivamente, nas hipóteses (1) e (2),",
    alternativas: ["Caio e Breno.", "Caio, nas duas hipóteses.", "Breno e Caio.", "Breno, nas duas hipóteses.", "Davi e Breno."],
    correta: 0,
    explicacao:
      "Testando cada responsável: se foi Ana, há duas verdades (Caio e Davi); se foi Breno, três verdades, e só Breno mente; se foi Caio, apenas Davi diz a verdade; se foi Davi, há duas verdades (Breno e Caio). Na hipótese (1), de uma só verdade, o único caso possível é o de Caio; na hipótese (2), de uma só mentira, o de Breno. A resposta é Caio e Breno, nessa ordem.",
    explicacaoErradas:
      "“Breno e Caio” inverte a ordem das hipóteses: Breno só é o responsável quando há uma única mentira. “Caio, nas duas hipóteses” e “Breno, nas duas hipóteses” ignoram que cada hipótese leva a um responsável diferente: com Caio há três mentiras, e com Breno, três verdades. “Davi e Breno” falha na primeira hipótese: se fosse Davi, Breno e Caio diriam a verdade, e haveria duas verdades, não uma.",
    pegadinha:
      "A declaração de Davi depende da de Breno: “Breno está mentindo” é verdadeira sempre que o responsável não é Davi. Quem trata as quatro falas como independentes erra a contagem de verdades em cada caso.",
    conhecimento:
      "Problemas de verdades e mentiras: método de testar cada hipótese de responsável e contar as declarações verdadeiras; declarações que se referem a outras declarações; unicidade da solução.",
    origem: "banco",
  },
  {
    id: "prf-rlm-003",
    materia: "rlm",
    topico: "Lógica de argumentação",
    subassunto: "Modus tollens em cadeia com consequente disjuntivo",
    dificuldade: 4,
    raciocinio: "Dedução: partir das premissas simples e aplicar o modus tollens em cadeia, de P2 para P1.",
    enunciado:
      "Considere verdadeiras as premissas a seguir.\n\nP1: “Se o caminhão estava com excesso de peso, então foi retido no posto ou a carga foi remanejada.”\nP2: “Se a carga foi remanejada, então o motorista assinou o termo.”\nP3: “O motorista não assinou o termo.”\nP4: “O caminhão não foi retido no posto.”\n\nA partir dessas premissas, conclui-se corretamente que",
    alternativas: [
      "o caminhão estava com excesso de peso, mas a carga não foi remanejada.",
      "nada se pode concluir sobre o excesso de peso, pois a carga não foi remanejada.",
      "o caminhão não estava com excesso de peso, mas a carga foi remanejada.",
      "o caminhão estava com excesso de peso, e o motorista não assinou o termo.",
      "o caminhão não estava com excesso de peso, e a carga não foi remanejada.",
    ],
    correta: 4,
    explicacao:
      "Comece pelas premissas simples. Por P3, o motorista não assinou o termo; em P2, negar o consequente obriga a negar o antecedente (modus tollens): a carga não foi remanejada. Com P4, o caminhão também não foi retido, e o consequente de P1 (“foi retido ou a carga foi remanejada”) fica falso. Pelo modus tollens em P1, o caminhão não estava com excesso de peso. Conclui-se que não havia excesso de peso e que a carga não foi remanejada.",
    explicacaoErradas:
      "Afirmar que havia excesso de peso, com ou sem a menção ao termo não assinado, contraria P1: o excesso exigiria retenção ou remanejamento, e nenhum dos dois ocorreu. Dizer que a carga foi remanejada contraria P2 e P3, porque o remanejamento levaria à assinatura do termo. E não é verdade que nada se possa concluir sobre o excesso de peso: a disjunção do consequente de P1 ficou inteiramente falsa, o que permite negar o antecedente.",
    pegadinha:
      "O consequente de P1 é uma disjunção; para negar o antecedente pelo modus tollens, as duas partes precisam ser falsas. Quem só observa que o caminhão não foi retido, sem usar P2 e P3, acha que a conclusão fica em aberto.",
    conhecimento:
      "Modus tollens (p → q, ~q ⊢ ~p); negação da disjunção (~(p ∨ q) ≡ ~p ∧ ~q); dedução em cadeia a partir das premissas simples.",
    origem: "banco",
  },
  {
    id: "prf-rlm-004",
    materia: "rlm",
    topico: "Lógica de argumentação",
    subassunto: "Validade × verdade, argumento sólido e afirmação do consequente",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: separar a validade (forma) da verdade (conteúdo) e testar cada afirmação.",
    enunciado:
      "Considere o argumento: “Todo veículo oficial é blindado. A motocicleta do posto é um veículo oficial. Logo, a motocicleta do posto é blindada.” Sabe-se que nem todo veículo oficial é blindado e que a motocicleta do posto é um veículo oficial sem blindagem. Sobre esse argumento e sobre a validade de argumentos em geral, avalie as afirmativas a seguir.\n\nI. O argumento é válido, embora sua conclusão seja falsa.\nII. Como a forma do argumento é válida, sua conclusão é necessariamente verdadeira.\nIII. Um argumento válido cujas premissas sejam todas verdadeiras não pode ter conclusão falsa.\nIV. Se a conclusão de um argumento é verdadeira, então o argumento é válido.\nV. Trocando a segunda premissa por “A motocicleta do posto é blindada” e a conclusão por “a motocicleta do posto é um veículo oficial”, o argumento continua válido.\n\nEstá correto o que se afirma em",
    alternativas: ["I, apenas.", "I e III, apenas.", "I, III e V, apenas.", "III e IV, apenas.", "II, III e V, apenas."],
    correta: 1,
    explicacao:
      "Validade é questão de forma: se as premissas forem verdadeiras, a conclusão não pode ser falsa. O argumento tem forma válida (todo A é B; x é A; logo, x é B), mas a primeira premissa é falsa, e por isso a conclusão pode ser falsa, como de fato é: a afirmativa I está correta. A III é a própria definição de argumento válido; se, além de válido, as premissas forem verdadeiras, o argumento é sólido. Estão corretas apenas I e III.",
    explicacaoErradas:
      "A II está errada: a forma válida só garante a conclusão quando as premissas são verdadeiras, e aqui a primeira é falsa. A IV também: um argumento inválido pode ter conclusão verdadeira por acaso, porque a validade não depende do valor da conclusão. A V está errada porque a troca produz a falácia da afirmação do consequente: ser blindada não obriga a motocicleta a ser veículo oficial, já que a primeira premissa não diz que só os oficiais são blindados.",
    pegadinha:
      "O argumento parece “errado” porque a conclusão é falsa, e a tendência é chamá-lo de inválido. Mas a falha está numa premissa, não na forma: é um argumento válido e não sólido.",
    conhecimento:
      "Validade × verdade; argumento sólido (válido e com premissas verdadeiras); silogismo categórico; falácia da afirmação do consequente; conclusão verdadeira não prova validade.",
    origem: "banco",
  },
  {
    id: "prf-rlm-005",
    materia: "rlm",
    topico: "Lógica de argumentação",
    subassunto: "Modus tollens × afirmação do consequente e negação do antecedente",
    dificuldade: 4,
    raciocinio: "Classificação: reduzir cada raciocínio à sua forma lógica e identificar as falácias formais.",
    enunciado: "Assinale o argumento válido.",
    alternativas: [
      "O caminhão é liberado somente se a nota fiscal confere. A nota confere. Logo, o caminhão é liberado.",
      "Se o radar está aferido, a multa é válida. O radar não está aferido. Logo, a multa não é válida.",
      "Todo condutor multado foi abordado. Renata não foi multada. Logo, Renata não foi abordada.",
      "O condutor é liberado somente se apresenta a CNH. Ele não a apresentou. Logo, não foi liberado.",
      "O motorista estava cansado ou distraído. Estava cansado. Logo, não estava distraído.",
    ],
    correta: 3,
    explicacao:
      "“p somente se q” equivale a “se p, então q”. Assim, “o condutor é liberado somente se apresenta a CNH” é l → c. Com ~c (ele não apresentou a CNH), o modus tollens dá ~l: não foi liberado. É o único argumento válido.",
    explicacaoErradas:
      "No raciocínio da nota fiscal, “somente se” também vira condicional (liberado → nota confere), e concluir o antecedente a partir do consequente é a falácia da afirmação do consequente. No do radar, negar o antecedente não autoriza negar o consequente (falácia da negação do antecedente). No da Renata, a forma categórica comete o mesmo erro: quem não foi multado pode ter sido abordado. No do motorista, o “ou” é inclusivo, e confirmar uma das partes não exclui a outra.",
    pegadinha:
      "O argumento da nota fiscal e o do condutor têm a mesma estrutura de “somente se”. A diferença está na segunda premissa: afirmar o consequente é falácia; negá-lo é modus tollens.",
    conhecimento:
      "Formas válidas (modus ponens, modus tollens, silogismos hipotético e disjuntivo) e falácias formais (afirmação do consequente, negação do antecedente, afirmação de um disjunto na disjunção inclusiva); tradução de “somente se”.",
    origem: "banco",
  },
  {
    id: "prf-rlm-006",
    materia: "rlm",
    topico: "Proposições simples e compostas",
    subassunto: "Contagem de proposições simples distintas e conectivo principal",
    dificuldade: 4,
    raciocinio: "Classificação: identificar as proposições simples distintas, tratando a negação como modificadora, e localizar o conectivo de maior alcance.",
    enunciado:
      "Considere a proposição: “Se o condutor não usava cinto ou não portava a CNH, então foi autuado; e, se foi autuado, não usava cinto.” Nessa proposição, há",
    alternativas: [
      "três proposições simples distintas, e o conectivo principal é a conjunção.",
      "cinco proposições simples distintas, e o conectivo principal é a condicional.",
      "três proposições simples distintas, e o conectivo principal é a condicional.",
      "quatro proposições simples distintas, e o conectivo principal é a conjunção.",
      "cinco proposições simples distintas, e o conectivo principal é a conjunção.",
    ],
    correta: 0,
    explicacao:
      "As proposições simples são três: “o condutor usava cinto” (c), “o condutor portava a CNH” (h) e “o condutor foi autuado” (a). As negações não criam proposições novas, e c e a se repetem. A estrutura é [(~c ∨ ~h) → a] ∧ [a → ~c]: o “e” que une as duas condicionais, depois do ponto e vírgula, é o conectivo de maior alcance, ou seja, o principal é a conjunção.",
    explicacaoErradas:
      "Contar cinco proposições é somar as ocorrências (c, h, a, a, c) em vez das proposições distintas; contar quatro é tratar “não usava cinto” como proposição diferente de “usava cinto”, mas a negação apenas modifica a proposição existente. Apontar a condicional como conectivo principal confunde os conectivos internos de cada parte com o que une as duas partes.",
    pegadinha:
      "A frase começa com “se…, então”, o que leva a tomar a condicional como conectivo principal. Mas o ponto e vírgula seguido de “e” une duas condicionais completas, e é essa conjunção que comanda a proposição inteira.",
    conhecimento:
      "Proposições simples e compostas; negação como modificador (não cria proposição nova); contagem de proposições distintas; conectivo principal (de maior alcance) e papel da pontuação na delimitação do escopo.",
    origem: "banco",
  },
  {
    id: "prf-rlm-007",
    materia: "rlm",
    topico: "Proposições simples e compostas",
    subassunto: "Simbolização de “somente se” com “nem” no consequente",
    dificuldade: 4,
    raciocinio: "Tradução simbólica: converter “somente se” em condicional e o “nem” em conjunção de negações.",
    enunciado:
      "Considere as proposições p: “o veículo é liberado”, q: “há multa vencida” e r: “há restrição judicial”. A sentença “O veículo é liberado somente se não há multa vencida nem restrição judicial” é corretamente simbolizada por",
    alternativas: ["(~q ∧ ~r) → p.", "~p → ~(~q ∧ ~r).", "p → (~q ∧ ~r).", "p → (~q ∨ ~r).", "p ↔ ~(q ∨ r)."],
    correta: 2,
    explicacao:
      "Em “p somente se X”, X é condição necessária para p, e a forma é p → X. Aqui, X é “não há multa vencida nem restrição judicial”: o “nem” nega as duas proposições e as une por conjunção, ~q ∧ ~r. A tradução correta é p → (~q ∧ ~r).",
    explicacaoErradas:
      "(~q ∧ ~r) → p inverte a condicional e trata a condição necessária como suficiente; ~p → ~(~q ∧ ~r) é a contrapositiva dessa inversão e erra pelo mesmo motivo. p → (~q ∨ ~r) troca o “nem” por “ou”, admitindo a liberação com uma das pendências. p ↔ ~(q ∨ r) tem a parte direita certa, pois ~(q ∨ r) ≡ ~q ∧ ~r, mas o bicondicional acrescenta a volta, que a frase não afirma: estar sem pendências não garante a liberação.",
    pegadinha:
      "A fórmula com bicondicional parece a mais completa, porque ~(q ∨ r) é exatamente “nem q, nem r”. O erro está no conectivo: “somente se” expressa só a ida.",
    conhecimento:
      "Condicional disfarçada: “p somente se q” ≡ p → q (condição necessária); “nem… nem” como conjunção de negações; De Morgan: ~(q ∨ r) ≡ ~q ∧ ~r; condicional × bicondicional.",
    origem: "banco",
  },
  {
    id: "prf-rlm-008",
    materia: "rlm",
    topico: "Proposições simples e compostas",
    subassunto: "Conectivos disfarçados: “mas”, “ou… ou” e “quando”",
    dificuldade: 4,
    raciocinio: "Classificação: identificar o conectivo de cada frase, inclusive os disfarçados na linguagem comum.",
    enunciado:
      "Em relação à classificação das proposições, marque V para a afirmativa verdadeira e F para a falsa.\n\n( ) “O agente lavrou o auto e recolheu o documento” é composta, por ser uma conjunção.\n( ) “O condutor estava cansado, mas seguiu viagem” é simples, porque “mas” não é conectivo lógico.\n( ) “Ou o ônibus parte às 8h, ou parte às 9h” é uma disjunção inclusiva.\n( ) “Quando chove, a pista fica escorregadia” é composta, com estrutura de condicional.\n\nAs afirmativas são, respectivamente,",
    alternativas: ["V – V – F – V.", "F – F – V – V.", "V – F – V – F.", "V – V – V – F.", "V – F – F – V."],
    correta: 4,
    explicacao:
      "A primeira é verdadeira: o “e” une duas proposições numa conjunção. A segunda é falsa: “mas” tem valor lógico de conjunção (o condutor estava cansado e seguiu viagem), então a frase é composta. A terceira é falsa: “ou… ou” indica disjunção exclusiva, verdadeira só quando exatamente uma das partes é verdadeira. A quarta é verdadeira: “quando chove, a pista fica escorregadia” equivale a “se chove, então a pista fica escorregadia”. Sequência: V – F – F – V.",
    explicacaoErradas:
      "As sequências que marcam a segunda como verdadeira aceitam que “mas” não seja conectivo, quando ele equivale ao “e”. As que marcam a terceira como verdadeira tratam o “ou… ou” como disjunção inclusiva. E as que marcam a quarta como falsa não reconhecem o “quando” como condicional disfarçada.",
    pegadinha:
      "“Mas” traz uma ideia de oposição que, na língua portuguesa, o distingue do “e”; na lógica, porém, os dois têm a mesma tabela-verdade. A oposição é de sentido, não de valor lógico.",
    conhecimento:
      "Conectivos e suas variações na linguagem natural: “mas”, “porém” e “embora” (conjunção); “ou… ou” (disjunção exclusiva); “quando” e “sempre que” (condicional).",
    origem: "banco",
  },
  {
    id: "prf-rlm-009",
    materia: "rlm",
    topico: "Tabelas-verdade",
    subassunto: "Número de linhas e linhas falsas de uma condicional composta",
    dificuldade: 4,
    raciocinio: "Cálculo: contar as proposições simples distintas (2ⁿ linhas) e procurar as combinações que tornam a condicional falsa.",
    enunciado:
      "Considere a proposição: “Se o radar registrou o excesso e o condutor não recorreu, então a multa foi paga ou o condutor recorreu.” A tabela-verdade dessa proposição tem",
    alternativas: [
      "16 linhas, sendo falsa em apenas uma delas.",
      "8 linhas, sendo falsa em apenas uma delas.",
      "8 linhas, sendo falsa em três delas.",
      "16 linhas, sendo falsa em duas delas.",
      "8 linhas, sendo verdadeira em apenas uma delas.",
    ],
    correta: 1,
    explicacao:
      "As proposições simples distintas são três: “o radar registrou o excesso”, “o condutor recorreu” e “a multa foi paga”; a negação de “recorreu” não conta como nova. São 2³ = 8 linhas. A condicional só é falsa com antecedente V e consequente F: o radar registrou, o condutor não recorreu e o consequente (“a multa foi paga ou o condutor recorreu”) é falso, o que exige multa não paga. Há uma única linha assim: a proposição é falsa em apenas uma das 8 linhas.",
    explicacaoErradas:
      "Dezesseis linhas viriam de contar “recorreu” duas vezes, como se a negação criasse proposição nova. Três linhas falsas, ou duas, resultam de esquecer que o antecedente já fixa “não recorreu”, o que deixa a disjunção dependendo só da multa. E dizer que a proposição é verdadeira em apenas uma linha inverte o resultado: ela é falsa em uma e verdadeira em sete.",
    pegadinha:
      "A proposição “o condutor recorreu” aparece negada no antecedente e afirmada no consequente. Quem a conta duas vezes chega a 16 linhas; quem esquece o vínculo entre as duas ocorrências erra o número de linhas falsas.",
    conhecimento:
      "Número de linhas da tabela-verdade (2ⁿ, com n proposições simples distintas); condição de falsidade da condicional (V → F); disjunção falsa só com as duas partes falsas.",
    origem: "banco",
  },
  {
    id: "prf-rlm-010",
    materia: "rlm",
    topico: "Tabelas-verdade",
    subassunto: "Valor lógico de compostas a partir de valores dados",
    dificuldade: 4,
    raciocinio: "Cálculo: substituir os valores lógicos dados e avaliar cada proposição composta pelo seu conectivo principal.",
    enunciado:
      "Considere verdadeira a proposição “O ônibus estava lotado” e falsas as proposições “O motorista tinha autorização” e “A viagem foi interrompida”. Nessas condições, é verdadeira a proposição:",
    alternativas: [
      "Se o ônibus estava lotado ou o motorista tinha autorização, então a viagem foi interrompida.",
      "O ônibus estava lotado e, se o motorista não tinha autorização, a viagem foi interrompida.",
      "O ônibus estava lotado se, e somente se, o motorista tinha autorização ou a viagem foi interrompida.",
      "Não é verdade que o ônibus estava lotado e a viagem foi interrompida.",
      "Ou o ônibus estava lotado, ou não é verdade que o motorista tinha autorização.",
    ],
    correta: 3,
    explicacao:
      "Com lotado = V, autorização = F e interrompida = F: a conjunção “o ônibus estava lotado e a viagem foi interrompida” é V ∧ F = F, e a negação dessa conjunção é verdadeira. Por isso, “Não é verdade que o ônibus estava lotado e a viagem foi interrompida” é a proposição verdadeira.",
    explicacaoErradas:
      "A condicional com “lotado ou autorização” no antecedente tem antecedente V e consequente F, logo é falsa. A conjunção “lotado e, se não tinha autorização, a viagem foi interrompida” é falsa porque a condicional interna (V → F) é falsa. O bicondicional compara V com a disjunção “autorização ou interrompida”, que é F, e por isso é falso. A disjunção exclusiva “ou lotado, ou não é verdade que tinha autorização” une duas proposições verdadeiras, o que a torna falsa.",
    pegadinha:
      "Na disjunção exclusiva, a parte “não é verdade que o motorista tinha autorização” é verdadeira, porque nega uma proposição falsa. Quem esquece a negação acha que uma parte é V e a outra F e marca a exclusiva como verdadeira.",
    conhecimento:
      "Tabelas-verdade dos conectivos (conjunção, disjunção inclusiva e exclusiva, condicional e bicondicional); valor lógico da negação; cálculo de proposições compostas a partir de valores dados.",
    origem: "banco",
  },
  {
    id: "prf-rlm-011",
    materia: "rlm",
    topico: "Tabelas-verdade",
    subassunto: "Tautologia, contradição e contingência sem montar a tabela",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: para cada fórmula, procurar uma linha que a torne falsa (ou verdadeira) em vez de montar a tabela inteira.",
    enunciado:
      "Sendo p e q proposições simples, avalie as afirmativas a seguir.\n\nI. A proposição (p ∧ q) → (p ∨ q) é uma tautologia.\nII. A proposição (p → q) ∨ (q → p) é uma tautologia.\nIII. A proposição (p ∨ q) → (p ∧ q) é uma contingência.\nIV. A proposição (p → q) ∧ (p ∧ ~q) é uma contingência.\n\nEstá correto o que se afirma em",
    alternativas: ["I e II, apenas.", "I e III, apenas.", "II, III e IV, apenas.", "I, apenas.", "I, II e III, apenas."],
    correta: 4,
    explicacao:
      "I: a condicional só seria falsa com p ∧ q verdadeira e p ∨ q falsa, o que é impossível; é tautologia. II: para p → q ser falsa, é preciso p = V e q = F, e então q → p é verdadeira; as duas nunca são falsas juntas, e a disjunção é tautologia. III: com p = V e q = F, a fórmula é falsa; com p = q = V, verdadeira; é contingência. Estão corretas I, II e III.",
    explicacaoErradas:
      "A IV está errada: p ∧ ~q é exatamente a negação de p → q, e a conjunção de uma proposição com a sua negação é falsa em todas as linhas — uma contradição, não uma contingência. Por isso as combinações que incluem a IV estão erradas, e as que deixam de fora a II ou a III omitem afirmativas verdadeiras.",
    pegadinha:
      "A II parece contingência porque cada condicional, isolada, pode ser falsa. Mas elas falham em linhas diferentes, e a disjunção das duas fica verdadeira em todas.",
    conhecimento:
      "Tautologia, contradição e contingência; método da prova por absurdo (procurar a linha que falsifica a fórmula); ~(p → q) ≡ p ∧ ~q.",
    origem: "banco",
  },
  {
    id: "prf-rlm-012",
    materia: "rlm",
    topico: "Equivalências lógicas",
    subassunto: "Condicional com antecedente composto em forma de disjunção",
    dificuldade: 4,
    raciocinio: "Equivalência: aplicar p → q ≡ ~p ∨ q e, em seguida, De Morgan no antecedente composto.",
    enunciado:
      "Uma proposição logicamente equivalente a “Se o tacógrafo foi adulterado e o motorista excedeu a jornada, então o veículo é retido” é:",
    alternativas: [
      "O tacógrafo não foi adulterado e o motorista não excedeu a jornada, ou o veículo é retido.",
      "O tacógrafo não foi adulterado, ou o motorista não excedeu a jornada, ou o veículo é retido.",
      "Se o veículo é retido, então o tacógrafo foi adulterado e o motorista excedeu a jornada.",
      "Se o tacógrafo foi adulterado, então o motorista excedeu a jornada e o veículo é retido.",
      "O tacógrafo foi adulterado, o motorista excedeu a jornada e o veículo não é retido.",
    ],
    correta: 1,
    explicacao:
      "A condicional p → q equivale a ~p ∨ q. Aqui, p é “o tacógrafo foi adulterado e o motorista excedeu a jornada”; pela lei de De Morgan, ~p é “o tacógrafo não foi adulterado ou o motorista não excedeu a jornada”. Somando o consequente, fica: “O tacógrafo não foi adulterado, ou o motorista não excedeu a jornada, ou o veículo é retido”.",
    explicacaoErradas:
      "A versão com “não foi adulterado e não excedeu” nega a conjunção mantendo o “e”, erro clássico de De Morgan. A que começa por “se o veículo é retido” é a recíproca, que não equivale à original. A que distribui o consequente (“se foi adulterado, então excedeu a jornada e o veículo é retido”) muda a estrutura e também não é equivalente. E a frase que afirma as duas infrações e diz que o veículo não é retido é a negação da condicional.",
    pegadinha:
      "A versão com “não foi adulterado e não excedeu a jornada” tem quase as mesmas palavras da certa; a diferença é o “e” que deveria virar “ou” ao negar a conjunção do antecedente.",
    conhecimento:
      "Equivalência p → q ≡ ~p ∨ q; De Morgan (~(p ∧ q) ≡ ~p ∨ ~q); recíproca × contrapositiva; negação da condicional (p ∧ ~q).",
    origem: "banco",
  },
  {
    id: "prf-rlm-013",
    materia: "rlm",
    topico: "Equivalências lógicas",
    subassunto: "Condição necessária composta e contrapositiva",
    dificuldade: 5,
    raciocinio: "Equivalência: traduzir a condição necessária como consequente da condicional e aplicar a contrapositiva com De Morgan.",
    enunciado:
      "Considere a afirmação: “Não ter multa vencida e estar com o licenciamento em dia é condição necessária para que o veículo seja liberado.” Uma proposição logicamente equivalente a essa afirmação é:",
    alternativas: [
      "Se o veículo tem multa vencida ou não está com o licenciamento em dia, então ele não é liberado.",
      "Se o veículo não tem multa vencida e está com o licenciamento em dia, então ele é liberado.",
      "Se o veículo tem multa vencida e não está com o licenciamento em dia, então ele não é liberado.",
      "O veículo é liberado se, e somente se, não tem multa vencida e está com o licenciamento em dia.",
      "Se o veículo não é liberado, então tem multa vencida ou não está com o licenciamento em dia.",
    ],
    correta: 0,
    explicacao:
      "Se X é condição necessária para Y, então Y → X. Aqui: “se o veículo é liberado, então não tem multa vencida e está com o licenciamento em dia”, ou l → (~m ∧ d). A contrapositiva nega e inverte os dois lados: ~(~m ∧ d) → ~l. Por De Morgan, ~(~m ∧ d) ≡ m ∨ ~d. Resultado: “Se o veículo tem multa vencida ou não está com o licenciamento em dia, então ele não é liberado”.",
    explicacaoErradas:
      "“Se não tem multa vencida e está com o licenciamento em dia, então é liberado” toma a condição necessária como suficiente (é a recíproca), e “se não é liberado, então tem multa vencida ou não está em dia” é a contrapositiva dessa recíproca, com o mesmo defeito. A versão com “tem multa vencida e não está em dia” erra o De Morgan, mantendo o “e”. O bicondicional acrescenta a volta, que a afirmação não contém.",
    pegadinha:
      "As condicionais que terminam em “não é liberado” e em “não está com o licenciamento em dia” usam as mesmas palavras em ordens diferentes. Só a que parte das pendências (multa ou licenciamento atrasado) para a não liberação é a contrapositiva da original.",
    conhecimento:
      "Condição necessária e suficiente (a necessária é o consequente); contrapositiva (p → q ≡ ~q → ~p); recíproca e inversa; De Morgan na negação da conjunção.",
    origem: "banco",
  },
  {
    id: "prf-rlm-014",
    materia: "rlm",
    topico: "Equivalências lógicas",
    subassunto: "Contrapositiva, inversa e exportação de condicional composta",
    dificuldade: 5,
    raciocinio: "Equivalência: testar cada proposição contra a contrapositiva e a exportação da condicional com antecedente composto.",
    enunciado:
      "Considere a proposição: “Se o motorista estava cansado e dirigia à noite, então fez uma parada no posto.” Marque V para a proposição logicamente equivalente a ela e F para a que não é equivalente.\n\n( ) “Se o motorista não fez uma parada no posto, então não estava cansado ou não dirigia à noite.”\n( ) “Se o motorista estava cansado, então, se dirigia à noite, fez uma parada no posto.”\n( ) “Se o motorista não estava cansado ou não dirigia à noite, então não fez uma parada no posto.”\n( ) “Se o motorista não fez uma parada no posto, então não estava cansado e não dirigia à noite.”\n\nA sequência correta é",
    alternativas: ["V – F – F – V.", "V – V – F – V.", "F – V – V – F.", "V – V – F – F.", "V – F – V – F."],
    correta: 3,
    explicacao:
      "A primeira é a contrapositiva: nega o consequente, nega o antecedente com De Morgan (“não estava cansado ou não dirigia à noite”) e inverte a ordem; é equivalente. A segunda aplica a exportação, (p ∧ q) → r ≡ p → (q → r), também equivalente. Sequência: V – V – F – F.",
    explicacaoErradas:
      "A terceira é a inversa: nega os dois lados sem trocar a ordem e por isso não equivale à original (o motorista descansado pode ter parado mesmo assim). A quarta parece a contrapositiva, mas nega a conjunção mantendo o “e”: exige mais do que a negação do antecedente. As sequências que marcam a terceira ou a quarta como equivalentes estão erradas, e as que rejeitam a segunda ignoram a exportação.",
    pegadinha:
      "A segunda frase, com uma condicional dentro da outra, parece estranha e costuma ser marcada como F. Mas a exportação garante que “se cansado e à noite, então parou” e “se cansado, então, se à noite, parou” dizem exatamente o mesmo.",
    conhecimento:
      "Contrapositiva com antecedente composto (De Morgan); inversa e recíproca, não equivalentes; exportação: (p ∧ q) → r ≡ p → (q → r).",
    origem: "banco",
  },
  {
    id: "prf-rlm-015",
    materia: "rlm",
    topico: "Leis de De Morgan",
    subassunto: "Negação de disjunção com conjunção interna",
    dificuldade: 5,
    raciocinio: "Negação: aplicar De Morgan duas vezes, primeiro na disjunção principal e depois na conjunção interna.",
    enunciado: "A negação da proposição “O caminhão foi pesado, ou a carga foi conferida e lacrada” é:",
    alternativas: [
      "O caminhão não foi pesado, ou a carga não foi conferida e não foi lacrada.",
      "O caminhão não foi pesado, e a carga não foi conferida e não foi lacrada.",
      "O caminhão não foi pesado, e a carga não foi conferida ou não foi lacrada.",
      "Se o caminhão não foi pesado, então a carga não foi conferida ou não foi lacrada.",
      "O caminhão não foi pesado, ou a carga não foi conferida ou não foi lacrada.",
    ],
    correta: 2,
    explicacao:
      "A proposição é p ∨ (q ∧ r), com o “ou” como conectivo principal. Negar a disjunção dá ~p ∧ ~(q ∧ r); negar a conjunção interna dá ~q ∨ ~r. Resultado: “O caminhão não foi pesado, e a carga não foi conferida ou não foi lacrada”.",
    explicacaoErradas:
      "Manter o “ou” principal, com ou sem o “e” interno, é negar só as proposições simples sem trocar os conectivos. Trocar o conectivo principal e manter o “e” interno (“não foi conferida e não foi lacrada”) aplica De Morgan só pela metade. A forma condicional, “se não foi pesado, então…”, equivale a uma disjunção (p ∨ ~q ∨ ~r), e a negação de uma disjunção precisa ser uma conjunção.",
    pegadinha:
      "A negação certa e a que mantém o “ou” principal usam as mesmas palavras, com “e” e “ou” em posições trocadas. É preciso trocar os dois conectivos, o externo e o interno.",
    conhecimento:
      "Leis de De Morgan: ~(p ∨ q) ≡ ~p ∧ ~q e ~(p ∧ q) ≡ ~p ∨ ~q; negação de proposição com conectivos aninhados.",
    origem: "banco",
  },
  {
    id: "prf-rlm-016",
    materia: "rlm",
    topico: "Leis de De Morgan",
    subassunto: "Negação de condicional com consequente composto",
    dificuldade: 5,
    raciocinio: "Negação: usar ~(p → q) ≡ p ∧ ~q e aplicar De Morgan ao consequente composto.",
    enunciado:
      "A negação da proposição “Se a viatura passou pela revisão, então os freios foram trocados e o óleo foi substituído” é:",
    alternativas: [
      "A viatura não passou pela revisão, e os freios não foram trocados ou o óleo não foi substituído.",
      "A viatura passou pela revisão, e os freios não foram trocados, e o óleo também não foi substituído.",
      "Se a viatura não passou pela revisão, então os freios não foram trocados ou o óleo não foi substituído.",
      "A viatura passou pela revisão, e os freios não foram trocados ou o óleo não foi substituído.",
      "Se os freios não foram trocados ou o óleo não foi substituído, então a viatura não passou pela revisão.",
    ],
    correta: 3,
    explicacao:
      "A negação de p → q é p ∧ ~q: mantém-se o antecedente e nega-se o consequente. O consequente é a conjunção “os freios foram trocados e o óleo foi substituído”, cuja negação, por De Morgan, é “os freios não foram trocados ou o óleo não foi substituído”. Resultado: “A viatura passou pela revisão, e os freios não foram trocados ou o óleo não foi substituído”.",
    explicacaoErradas:
      "Negar também o antecedente (“a viatura não passou pela revisão…”) é o erro mais comum: a negação da condicional afirma o antecedente. Manter o “e” no consequente nega a conjunção pela metade. A condicional que começa com “se a viatura não passou” é a inversa, e a que parte dos freios e do óleo para a revisão é a contrapositiva, equivalente à original; a negação de uma condicional nunca é outra condicional.",
    pegadinha:
      "A contrapositiva aparece entre as respostas porque o candidato associa “negar” a “inverter e negar”. Ela, porém, diz o mesmo que a original. A negação é sempre uma conjunção: antecedente verdadeiro e consequente falso.",
    conhecimento:
      "Negação da condicional: ~(p → q) ≡ p ∧ ~q; De Morgan no consequente composto; distinção entre negação, contrapositiva (equivalente) e inversa.",
    origem: "banco",
  },
  {
    id: "prf-rlm-017",
    materia: "rlm",
    topico: "Leis de De Morgan",
    subassunto: "“Não é verdade que se… então” com “nem” no antecedente",
    dificuldade: 5,
    raciocinio: "Negação: reconhecer a negação de uma condicional e traduzir o “nem” do antecedente como conjunção de negações.",
    enunciado:
      "Uma proposição logicamente equivalente a “Não é verdade que, se o condutor não usava cinto nem portava a CNH, então foi autuado” é:",
    alternativas: [
      "O condutor não usava cinto, não portava a CNH e não foi autuado.",
      "O condutor usava cinto ou portava a CNH, e não foi autuado.",
      "Se o condutor usava cinto ou portava a CNH, então não foi autuado.",
      "O condutor não usava cinto ou não portava a CNH, e não foi autuado.",
      "O condutor não usava cinto, não portava a CNH e foi autuado.",
    ],
    correta: 0,
    explicacao:
      "“Não é verdade que (se A, então B)” equivale a A ∧ ~B. O antecedente A, “não usava cinto nem portava a CNH”, é ~c ∧ ~h; o consequente negado é “não foi autuado”. Resultado: “O condutor não usava cinto, não portava a CNH e não foi autuado”.",
    explicacaoErradas:
      "As frases que começam com “usava cinto ou portava a CNH” negam o antecedente, mas a negação da condicional o mantém intacto; uma delas ainda o transforma em nova condicional. A que diz “não usava cinto ou não portava a CNH” troca o “nem” (que é “e não”) por “ou”. A que termina em “e foi autuado” esquece de negar o consequente.",
    pegadinha:
      "O “não é verdade que” no início leva a aplicar De Morgan ao antecedente, como se fosse ele o negado. Mas o que se nega é a condicional inteira, e a regra é manter o antecedente e negar o consequente.",
    conhecimento:
      "~(p → q) ≡ p ∧ ~q; “nem” como conjunção de negações (~p ∧ ~q); alcance da expressão “não é verdade que”.",
    origem: "banco",
  },
  {
    id: "prf-rlm-018",
    materia: "rlm",
    topico: "Diagramas lógicos",
    subassunto: "Conclusões necessárias × possíveis com três categóricas",
    dificuldade: 5,
    raciocinio: "Diagramas: desenhar os conjuntos (ônibus dentro de curso; curso disjunto de cassados) e marcar o caminhoneiro garantido pela segunda premissa.",
    enunciado:
      "Considere verdadeiras as premissas a seguir.\n\nP1: “Todo motorista de ônibus interestadual tem curso de transporte coletivo.”\nP2: “Algum caminhoneiro dirige ônibus interestadual.”\nP3: “Nenhum motorista com curso de transporte coletivo teve a CNH cassada.”\n\nAvalie as afirmativas a seguir.\n\nI. Algum caminhoneiro tem curso de transporte coletivo.\nII. Nenhum motorista de ônibus interestadual teve a CNH cassada.\nIII. Algum caminhoneiro teve a CNH cassada.\nIV. Algum caminhoneiro não teve a CNH cassada.\n\nDecorre necessariamente das premissas o que se afirma em",
    alternativas: ["I e II, apenas.", "I, II e III, apenas.", "I, II e IV, apenas.", "II e IV, apenas.", "I e IV, apenas."],
    correta: 2,
    explicacao:
      "O conjunto dos motoristas de ônibus interestadual está dentro do conjunto dos que têm curso, e este não toca o dos que tiveram a CNH cassada. O caminhoneiro que dirige ônibus interestadual está, então, no conjunto dos que têm curso (I) e fora do conjunto dos cassados (IV). E nenhum motorista de ônibus pode ter a CNH cassada, pois todos estão no conjunto que não se cruza com o dos cassados (II). Decorrem I, II e IV.",
    explicacaoErradas:
      "A III não decorre: as premissas nada dizem sobre os caminhoneiros que não dirigem ônibus, e o diagrama admite que nenhum caminhoneiro tenha a CNH cassada. Ela é possível, mas não necessária. As combinações que a incluem estão erradas, e as que deixam de fora a I, a II ou a IV omitem conclusões garantidas.",
    pegadinha:
      "A III e a IV parecem contraditórias, e o candidato tende a escolher uma delas por exclusão. Na verdade, “algum caminhoneiro não teve a CNH cassada” está garantida; “algum teve” apenas pode ocorrer.",
    conhecimento:
      "Representação de proposições categóricas (todo, algum, nenhum) em diagramas de Venn; diferença entre conclusão necessária e conclusão possível.",
    origem: "banco",
  },
  {
    id: "prf-rlm-019",
    materia: "rlm",
    topico: "Diagramas lógicos",
    subassunto: "Particular negativa e conversão inválida",
    dificuldade: 5,
    raciocinio: "Diagramas: localizar o importado apreendido, garantido pela segunda premissa, em relação aos que circulam e aos blindados.",
    enunciado:
      "Considere verdadeiras as afirmações “Nenhum veículo apreendido circula pela rodovia”, “Algum veículo importado está apreendido” e “Todo veículo blindado circula pela rodovia”. Conclui-se corretamente que",
    alternativas: [
      "nenhum veículo importado é blindado.",
      "algum veículo blindado é importado.",
      "algum veículo importado circula pela rodovia.",
      "algum veículo blindado não é importado.",
      "algum veículo importado não é blindado.",
    ],
    correta: 4,
    explicacao:
      "O importado apreendido está fora do conjunto dos que circulam pela rodovia (primeira afirmação). Como todos os blindados estão dentro desse conjunto (terceira afirmação), esse importado também está fora do conjunto dos blindados. Logo, algum veículo importado não é blindado.",
    explicacaoErradas:
      "“Nenhum importado é blindado” e “algum blindado é importado” são situações possíveis, mas não obrigatórias: os importados não apreendidos podem ou não ser blindados. “Algum importado circula pela rodovia” também depende desses importados não apreendidos, sobre os quais nada se sabe. E “algum blindado não é importado” inverte os termos: do fato de algum importado não ser blindado não se tira nada sobre os blindados.",
    pegadinha:
      "“Algum blindado não é importado” e “algum importado não é blindado” têm as mesmas palavras. A particular negativa não admite a conversão simples: trocar sujeito e predicado muda o sentido.",
    conhecimento:
      "Silogismos com proposições categóricas (A, E, I, O); diagramas de Venn; conversão válida (E e I) e inválida (A e O); conclusão necessária × possível.",
    origem: "banco",
  },
  {
    id: "prf-rlm-020",
    materia: "rlm",
    topico: "Lógica de primeira ordem",
    subassunto: "Tradução de universais, existenciais e “nenhum” com predicados",
    dificuldade: 5,
    raciocinio: "Tradução simbólica: associar o universal à condicional e o existencial à conjunção, conferindo a ordem dos predicados.",
    enunciado:
      "Considere os predicados V(x): “x é veículo de carga”, T(x): “x tem tacógrafo” e R(x): “x foi retido”, com x percorrendo os veículos fiscalizados em uma operação. Marque V para a tradução correta e F para a incorreta.\n\n( ) “Todo veículo de carga tem tacógrafo”: ∀x (V(x) → T(x)).\n( ) “Algum veículo de carga tem tacógrafo”: ∃x (V(x) → T(x)).\n( ) “Nenhum veículo de carga sem tacógrafo foi retido”: ~∃x (V(x) ∧ ~T(x) ∧ R(x)).\n( ) “Todo veículo retido é de carga”: ∀x (V(x) → R(x)).\n\nA sequência correta é",
    alternativas: ["V – V – V – F.", "V – F – V – F.", "V – F – F – F.", "F – F – V – V.", "V – V – F – F."],
    correta: 1,
    explicacao:
      "A primeira está correta: o universal afirmativo vira ∀x (V(x) → T(x)). A terceira também: “nenhum veículo de carga sem tacógrafo foi retido” nega a existência de um x que seja de carga, sem tacógrafo e retido. Sequência: V – F – V – F.",
    explicacaoErradas:
      "A segunda está errada: o existencial pede conjunção, ∃x (V(x) ∧ T(x)). Com a condicional, basta existir um veículo que não seja de carga para a fórmula ficar verdadeira, o que não traduz a frase. A quarta inverte os predicados: “todo veículo retido é de carga” é ∀x (R(x) → V(x)); a fórmula dada diz que todo veículo de carga foi retido.",
    pegadinha:
      "A segunda tradução copia a estrutura da primeira, trocando só o quantificador. Parece natural, mas ∃x (V(x) → T(x)) é verdadeira até num pátio sem nenhum veículo de carga com tacógrafo.",
    conhecimento:
      "Tradução para a lógica de primeira ordem: ∀ com condicional, ∃ com conjunção; negação do existencial; ordem dos predicados no universal.",
    origem: "banco",
  },
  {
    id: "prf-rlm-021",
    materia: "rlm",
    topico: "Lógica de primeira ordem",
    subassunto: "Negação de proposição com dois quantificadores e disjunção",
    dificuldade: 5,
    raciocinio: "Negação: trocar cada quantificador (∃ por ∀ e ∀ por ∃) e negar a disjunção interna por De Morgan.",
    enunciado: "A negação da proposição “Existe um posto da rodovia em que todo servidor fala inglês ou espanhol” é:",
    alternativas: [
      "Em nenhum posto da rodovia há servidor que fale inglês ou espanhol.",
      "Em todo posto da rodovia, algum servidor não fala inglês nem espanhol.",
      "Existe um posto da rodovia em que nenhum servidor fala inglês ou espanhol.",
      "Em todo posto da rodovia, algum servidor não fala inglês ou não fala espanhol.",
      "Existe um posto da rodovia em que algum servidor não fala inglês nem espanhol.",
    ],
    correta: 1,
    explicacao:
      "A proposição diz que existe um posto em que, para todo servidor, ele fala inglês ou espanhol. Na negação, “existe” vira “todo”, “todo” vira “existe” e a parte final é negada: em todo posto existe um servidor para o qual é falso que fala inglês ou espanhol. Por De Morgan, ele não fala inglês e não fala espanhol, ou seja, não fala inglês nem espanhol.",
    explicacaoErradas:
      "“Em nenhum posto há servidor que fale inglês ou espanhol” exagera: a negação exige, em cada posto, só um servidor que não fale nenhuma das duas línguas, e não que todos deixem de falá-las. As versões que começam com “existe um posto” conservam o primeiro quantificador, quando a negação de “existe” é “todo”. A versão “não fala inglês ou não fala espanhol” erra o De Morgan: negar “inglês ou espanhol” dá “não fala inglês e não fala espanhol”.",
    pegadinha:
      "A versão com “não fala inglês ou não fala espanhol” troca os dois quantificadores corretamente e erra só no conectivo final. Ela seria satisfeita por um servidor que fala inglês e não fala espanhol, e esse servidor não contraria a proposição original.",
    conhecimento:
      "Negação de quantificadores: ~∃x P(x) ≡ ∀x ~P(x) e ~∀x P(x) ≡ ∃x ~P(x); quantificadores aninhados; De Morgan na disjunção (~(p ∨ q) ≡ ~p ∧ ~q).",
    origem: "banco",
  },
  {
    id: "prf-rlm-022",
    materia: "rlm",
    topico: "Princípios de contagem e probabilidade",
    subassunto: "Princípio multiplicativo com restrições diferentes por posição",
    dificuldade: 4,
    raciocinio: "Cálculo: aplicar o princípio multiplicativo posição por posição, respeitando a restrição de cada uma.",
    enunciado:
      "No padrão Mercosul, as placas de automóveis têm sete caracteres na sequência letra, letra, letra, algarismo, letra, algarismo, algarismo, com 26 letras e 10 algarismos disponíveis. Para um lote especial, decidiu-se que as três primeiras letras seriam distintas entre si, que a quarta letra poderia ser qualquer uma, inclusive repetida, que os algarismos poderiam se repetir e que o último algarismo seria par. A quantidade de placas possíveis nesse lote é",
    alternativas: [
      "26⁴ × 10² × 5.",
      "26 × 25 × 24 × 23 × 10 × 9 × 5.",
      "26 × 25 × 24 × 23 × 10² × 5.",
      "26 × 25 × 24 × 26 × 10³.",
      "26 × 25 × 24 × 26 × 10² × 5.",
    ],
    correta: 4,
    explicacao:
      "Posição por posição: as três primeiras letras, distintas, dão 26 × 25 × 24; o primeiro algarismo, 10; a quarta letra, livre, 26; o segundo algarismo, 10; o último, par, 5 (0, 2, 4, 6 ou 8). Pelo princípio multiplicativo, o total é 26 × 25 × 24 × 26 × 10² × 5.",
    explicacaoErradas:
      "26⁴ × 10² × 5 deixa as três primeiras letras se repetirem. As versões com o fator 23 tratam a quarta letra como se também tivesse de ser diferente das anteriores, e uma delas ainda proíbe a repetição dos algarismos (10 × 9). A versão com 10³ esquece que o último algarismo só pode ser par.",
    pegadinha:
      "A quarta letra vem depois de um algarismo e não entra na restrição das três primeiras. Quem lê “letras distintas” como regra para todas as letras da placa chega ao fator 23.",
    conhecimento:
      "Princípio fundamental da contagem (multiplicativo); arranjos com e sem repetição; restrições por posição; algarismos pares (5 de 10).",
    origem: "banco",
  },
  {
    id: "prf-rlm-023",
    materia: "rlm",
    topico: "Princípios de contagem e probabilidade",
    subassunto: "Combinações com exigência de grupo e par incompatível",
    dificuldade: 5,
    raciocinio: "Cálculo: separar os casos pela composição da equipe (1 + 3, 2 + 2, 3 + 1) e descontar, em cada um, as equipes com os dois policiais incompatíveis.",
    enunciado:
      "Uma equipe de fiscalização de 4 pessoas será formada a partir de 5 policiais e 4 agentes administrativos, com pelo menos um integrante de cada grupo. Dois dos policiais trabalham em turnos incompatíveis e não podem integrar a mesma equipe. O número de equipes diferentes que podem ser formadas é",
    alternativas: ["120.", "99.", "105.", "102.", "126."],
    correta: 3,
    explicacao:
      "Por composição: 1 policial e 3 agentes, 5 × 4 = 20; 2 policiais e 2 agentes, (10 − 1) × 6 = 54, descontada a dupla incompatível; 3 policiais e 1 agente, (10 − 3) × 4 = 28, descontados os trios que contêm a dupla. Total: 20 + 54 + 28 = 102. Pelo complementar: há 120 equipes com pelo menos um integrante de cada grupo, e 18 delas reúnem a dupla incompatível (12 com mais um policial e um agente, 6 com dois agentes); 120 − 18 = 102.",
    explicacaoErradas:
      "126 é C(9, 4), sem nenhuma restrição; 120 aplica a exigência de um integrante de cada grupo, mas esquece a incompatibilidade. 105 desconta de 126 as 21 equipes com a dupla, mas não exige um integrante de cada grupo. 99 desconta as mesmas 21 de 120 e, com isso, tira de novo as 3 equipes só de policiais que contêm a dupla e já tinham saído da conta.",
    pegadinha:
      "Ao descontar as equipes com a dupla incompatível, só contam as que ainda estavam no total: as 3 equipes formadas apenas por policiais, com a dupla, já tinham sido excluídas pela exigência de um agente.",
    conhecimento:
      "Combinação simples C(n, p); princípio aditivo por casos; contagem pelo complementar; dupla contagem ao combinar restrições.",
    origem: "banco",
  },
  {
    id: "prf-rlm-024",
    materia: "rlm",
    topico: "Princípios de contagem e probabilidade",
    subassunto: "Exatamente um em sorteio sem reposição",
    dificuldade: 5,
    raciocinio: "Cálculo: contar os casos favoráveis por combinação (1 vencido e 2 em dia) e dividir pelo total de trios possíveis.",
    enunciado:
      "Um posto tem 10 etilômetros, dos quais 3 estão com a aferição vencida. Para uma operação, sorteiam-se 3 aparelhos, sem reposição. A probabilidade de que exatamente um dos aparelhos sorteados esteja com a aferição vencida é",
    alternativas: ["21/40.", "7/40.", "17/24.", "441/1.000.", "7/24."],
    correta: 0,
    explicacao:
      "Os trios possíveis são C(10, 3) = 120. Os favoráveis têm 1 dos 3 vencidos e 2 dos 7 em dia: 3 × C(7, 2) = 3 × 21 = 63. A probabilidade é 63/120 = 21/40. Pelo caminho sequencial, uma ordem dá (3/10) × (7/9) × (6/8) = 7/40, e o aparelho vencido pode sair em qualquer das 3 posições: 3 × 7/40 = 21/40.",
    explicacaoErradas:
      "7/40 é a probabilidade de uma única ordem (o vencido no primeiro sorteio), sem multiplicar pelas 3 posições. 17/24 é a probabilidade de pelo menos um vencido (1 − 35/120), e 7/24, a de nenhum (35/120). 441/1.000 seria a resposta com reposição (3 × 0,3 × 0,7²), mas o sorteio é sem reposição.",
    pegadinha:
      "No cálculo sequencial, a conta de uma única ordem parece completa. Quem esquece que o aparelho vencido pode sair no primeiro, no segundo ou no terceiro sorteio fica com 7/40.",
    conhecimento:
      "Probabilidade clássica (casos favoráveis sobre possíveis); combinações; sorteio sem reposição × com reposição; evento complementar.",
    origem: "banco",
  },
  {
    id: "prf-rlm-025",
    materia: "rlm",
    topico: "Operações com conjuntos",
    subassunto: "Três conjuntos com “exatamente duas” e “as três”",
    dificuldade: 5,
    raciocinio: "Cálculo: somar as cardinalidades, descontar as contagens repetidas de quem está em dois ou três conjuntos e obter a união.",
    enunciado:
      "Em uma operação, 200 veículos foram fiscalizados. Desses, 48 tinham pneus irregulares, 35 tinham faróis irregulares e 27 estavam com o licenciamento atrasado. Sabe-se ainda que 14 veículos tinham exatamente duas dessas irregularidades e que 4 tinham as três. O número de veículos fiscalizados sem nenhuma dessas irregularidades foi",
    alternativas: ["100.", "108.", "112.", "104.", "90."],
    correta: 2,
    explicacao:
      "A soma 48 + 35 + 27 = 110 conta uma vez quem tem só uma irregularidade, duas vezes quem tem exatamente duas e três vezes quem tem as três. Assim, 110 = x + 2 × 14 + 3 × 4, e x = 70 veículos com uma só irregularidade. A união tem 70 + 14 + 4 = 88 veículos, e os sem nenhuma irregularidade são 200 − 88 = 112.",
    explicacaoErradas:
      "100 aplica a inclusão-exclusão com 14 no lugar da soma das interseções duas a duas (união 110 − 14 + 4 = 100), mas essas interseções somam 14 + 3 × 4 = 26, porque cada veículo com as três irregularidades está nas três. 108 desconta os 14 e os 4 uma vez só (união 92); 104 desconta só os 14 (união 96); 90 é 200 − 110, sem descontar repetição nenhuma.",
    pegadinha:
      "“Exatamente duas” não é a soma das interseções duas a duas: esta inclui, três vezes, os veículos com as três irregularidades. Por isso o 14 não pode entrar direto na fórmula da inclusão-exclusão.",
    conhecimento:
      "Inclusão-exclusão para três conjuntos; “exatamente duas” × “pelo menos duas” × interseções duas a duas; diagrama de Venn por regiões; complementar em relação ao universo.",
    origem: "banco",
  },
  {
    id: "prf-rlm-026",
    materia: "rlm",
    topico: "Operações com conjuntos",
    subassunto: "Diferença simétrica e diferença de conjuntos definidos por propriedade",
    dificuldade: 4,
    raciocinio: "Cálculo: listar os elementos de A, B e C, montar a diferença simétrica e retirar dela os primos.",
    enunciado:
      "Considere o universo U = {1, 2, 3, …, 15} e os conjuntos A, dos números pares de U; B, dos múltiplos de 3 em U; e C, dos números primos de U. O conjunto [(A − B) ∪ (B − A)] − C é",
    alternativas: [
      "{4, 8, 9, 10, 14, 15}.",
      "{4, 6, 8, 9, 10, 12, 14, 15}.",
      "{2, 3, 4, 8, 9, 10, 14, 15}.",
      "{6, 12}.",
      "{4, 8, 10, 14}.",
    ],
    correta: 0,
    explicacao:
      "A = {2, 4, 6, 8, 10, 12, 14}, B = {3, 6, 9, 12, 15} e C = {2, 3, 5, 7, 11, 13}. A − B = {2, 4, 8, 10, 14} e B − A = {3, 9, 15}; a união das duas, que é a diferença simétrica, dá {2, 3, 4, 8, 9, 10, 14, 15}. Retirando os primos (2 e 3), sobra {4, 8, 9, 10, 14, 15}.",
    explicacaoErradas:
      "{4, 6, 8, 9, 10, 12, 14, 15} usa a união A ∪ B em vez da diferença simétrica e mantém 6 e 12, que estão nos dois conjuntos. {2, 3, 4, 8, 9, 10, 14, 15} é a diferença simétrica sem a retirada dos primos. {6, 12} é a interseção, justamente a parte que a diferença simétrica exclui. {4, 8, 10, 14} fica só com A − B e esquece os ímpares múltiplos de 3.",
    pegadinha:
      "O 6 e o 12 são pares e múltiplos de 3 ao mesmo tempo, por isso ficam fora da diferença simétrica; já o 2 e o 3 entram nela e só saem por serem primos.",
    conhecimento:
      "Operações com conjuntos: união, interseção, diferença (A − B) e diferença simétrica [(A − B) ∪ (B − A)]; conjuntos definidos por propriedade; números primos, pares e múltiplos.",
    origem: "banco",
  },
  {
    id: "prf-rlm-027",
    materia: "rlm",
    topico: "Operações com conjuntos",
    subassunto: "Pertinência × inclusão com conjuntos de conjuntos e vazio",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: listar os quatro elementos de M e aplicar ∈ a elementos e ⊂ a conjuntos formados por elementos de M.",
    enunciado:
      "Considere o conjunto M = {2, {3}, {2, 5}, ∅} e avalie as afirmativas a seguir.\n\nI. {2} ⊂ M.\nII. {3} ∈ M e 3 ∉ M.\nIII. {2, 5} ⊂ M.\nIV. ∅ ∈ M e ∅ ⊂ M.\nV. M tem 8 subconjuntos.\n\nEstá correto o que se afirma em",
    alternativas: [
      "I e II, apenas.",
      "II, III e IV, apenas.",
      "I, II, III e IV, apenas.",
      "I, II e IV, apenas.",
      "II e V, apenas.",
    ],
    correta: 3,
    explicacao:
      "M tem quatro elementos: 2, {3}, {2, 5} e ∅. I: {2} ⊂ M, porque seu único elemento, 2, pertence a M. II: {3} é elemento de M, mas 3, sozinho, não é. IV: ∅ aparece entre os elementos de M (∅ ∈ M) e, como todo conjunto, é também subconjunto de M (∅ ⊂ M). Estão corretas I, II e IV.",
    explicacaoErradas:
      "A III está errada: {2, 5} é elemento de M ({2, 5} ∈ M), mas não subconjunto, porque 5 não pertence a M. A V também: com 4 elementos, M tem 2⁴ = 16 subconjuntos. As combinações que incluem a III ou a V estão erradas, e as que deixam de fora a I ou a IV omitem afirmativas verdadeiras.",
    pegadinha:
      "O conjunto {2, 5} aparece escrito dentro de M e por isso parece estar “contido” nele. Mas estar listado como elemento é pertinência (∈); a inclusão (⊂) exigiria que 2 e 5 fossem, cada um, elementos de M.",
    conhecimento:
      "Pertinência (elemento–conjunto) × inclusão (conjunto–conjunto); conjunto vazio como subconjunto de todo conjunto; conjunto das partes (2ⁿ subconjuntos).",
    origem: "banco",
  },
  {
    id: "prf-rlm-028",
    materia: "rlm",
    topico: "Problemas aritméticos, geométricos e matriciais",
    subassunto: "Frações sucessivas sobre o que resta",
    dificuldade: 4,
    raciocinio: "Cálculo: multiplicar as frações que permanecem com a equipe em cada etapa (3/4, 1/3 e 60%) e igualar ao que sobrou.",
    enunciado:
      "Uma equipe saiu da base com certa quantidade de cones de sinalização. No primeiro ponto de bloqueio, deixou 1/4 dos cones; no segundo, 2/3 do que restou; no terceiro, 40% do que ainda havia. Ao voltar, a equipe tinha 54 cones. A quantidade de cones com que a equipe saiu da base era",
    alternativas: ["216.", "540.", "360.", "1.080.", "270."],
    correta: 2,
    explicacao:
      "Depois do primeiro ponto, restam 3/4 dos cones; depois do segundo, 1/3 desses 3/4, ou seja, 1/4 do total; depois do terceiro, 60% de 1/4, que é 0,15 do total. Assim, 0,15x = 54 e x = 360. Conferindo: 360 → 270 → 90 → 54.",
    explicacaoErradas:
      "216 ignora o terceiro ponto (x/4 = 54). 540 trata os 40% como a parte que ficou com a equipe, e não como a deixada (0,4 × x/4 = 54). 1.080 aplica os 2/3 do segundo ponto sobre o total, e não sobre o que restou. 270 esquece o primeiro ponto (0,6 × x/3 = 54).",
    pegadinha:
      "Cada fração incide sobre o que restou da etapa anterior, não sobre o total. E o enunciado informa o que foi deixado em cada ponto, enquanto a conta precisa do que permaneceu com a equipe.",
    conhecimento:
      "Frações e porcentagens sucessivas; fração do restante; equação do primeiro grau; conferência pelo caminho inverso.",
    origem: "banco",
  },
  {
    id: "prf-rlm-029",
    materia: "rlm",
    topico: "Problemas aritméticos, geométricos e matriciais",
    subassunto: "Deslocamento resultante e teorema de Pitágoras",
    dificuldade: 4,
    raciocinio: "Cálculo: somar os trechos do desvio, achar o deslocamento resultante em cada direção e aplicar o teorema de Pitágoras.",
    enunciado:
      "Por causa de uma obra, uma viatura que ia do ponto A ao ponto D precisou fazer um desvio: percorreu 800 m para o norte, depois 1.200 m para o leste e, por fim, 300 m para o sul, chegando a D. A diferença entre a distância percorrida no desvio e a distância em linha reta de A até D é",
    alternativas: ["1.300 m.", "1.000 m.", "600 m.", "2.300 m.", "1.100 m."],
    correta: 1,
    explicacao:
      "No desvio, a viatura percorreu 800 + 1.200 + 300 = 2.300 m. O deslocamento resultante é de 500 m para o norte (800 − 300) e 1.200 m para o leste. A distância em linha reta é √(500² + 1.200²) = √1.690.000 = 1.300 m, e a diferença é 2.300 − 1.300 = 1.000 m.",
    explicacaoErradas:
      "1.300 m é a distância em linha reta, não a diferença pedida, e 2.300 m é o percurso total do desvio. 600 m compara o desvio com o caminho em L de 500 m + 1.200 m (1.700 m), e não com a linha reta. 1.100 m desconta só o trecho para o leste.",
    pegadinha:
      "Os 300 m para o sul anulam parte dos 800 m para o norte: o triângulo retângulo tem catetos de 500 m e 1.200 m, e não de 800 m e 1.200 m.",
    conhecimento:
      "Teorema de Pitágoras; terno pitagórico 5, 12, 13; deslocamento resultante × distância percorrida.",
    origem: "banco",
  },
  {
    id: "prf-rlm-030",
    materia: "rlm",
    topico: "Problemas aritméticos, geométricos e matriciais",
    subassunto: "Existência e ordem do produto de matrizes; determinante de kM",
    dificuldade: 5,
    raciocinio: "Análise de afirmativas: conferir, em cada produto, se o número de colunas de um fator é igual ao de linhas do seguinte, e aplicar det(kM) = kⁿ · det(M).",
    enunciado:
      "Considere as matrizes A, de ordem 3 × 2; B, de ordem 2 × 4; e C, de ordem 4 × 3. Avalie as afirmativas a seguir.\n\nI. O produto A × B × C é uma matriz de ordem 3 × 3.\nII. O produto C × A é uma matriz de ordem 4 × 2.\nIII. O produto B × A está definido.\nIV. Sendo M = A × B × C, tem-se det(2M) = 8 · det(M).\nV. O produto B × C × A é uma matriz de ordem 2 × 2.\n\nEstá correto o que se afirma em",
    alternativas: [
      "I e II, apenas.",
      "I, II, III e IV, apenas.",
      "I, IV e V, apenas.",
      "II, III e V, apenas.",
      "I, II, IV e V, apenas.",
    ],
    correta: 4,
    explicacao:
      "O produto X × Y existe quando o número de colunas de X é igual ao de linhas de Y, e o resultado tem as linhas de X e as colunas de Y. I: (3 × 2)(2 × 4)(4 × 3) dá 3 × 3. II: (4 × 3)(3 × 2) dá 4 × 2. IV: M é quadrada de ordem 3, e multiplicar uma matriz de ordem n por k multiplica o determinante por kⁿ: det(2M) = 2³ · det(M) = 8 · det(M). V: (2 × 4)(4 × 3)(3 × 2) dá 2 × 2. Estão corretas I, II, IV e V.",
    explicacaoErradas:
      "A III está errada: B tem 4 colunas e A tem 3 linhas, então B × A não está definido (já A × B existe, o que mostra que a ordem dos fatores importa). As combinações que incluem a III estão erradas, e as que deixam de fora a II, a IV ou a V omitem afirmativas verdadeiras.",
    pegadinha:
      "Na IV, a tentação é achar que det(2M) = 2 · det(M). O fator 2 multiplica as três linhas da matriz, e cada linha multiplicada por 2 dobra o determinante: 2 × 2 × 2 = 8.",
    conhecimento:
      "Multiplicação de matrizes (condição de existência e ordem do produto); não comutatividade; det(kM) = kⁿ · det(M) para matriz de ordem n.",
    origem: "banco",
  },
  // Complemento (14/10/2026): 031–036 adaptadas do banco do outro curso do app e 037–039 escritas para a PRF, nos tópicos do programa.
  {
    id: "prf-rlm-031",
    materia: "rlm",
    topico: "Tabelas-verdade",
    subassunto: "Condicional falsa e verdade por antecedente falso",
    dificuldade: 5,
    raciocinio: "Cálculo: da condicional falsa, extrair antecedente V e consequente F e avaliar cada proposição com esses valores.",
    enunciado:
      "Sabe-se que é falsa a proposição “Se o laudo foi concluído, então o veículo foi liberado”. Nessas condições, é necessariamente verdadeira a proposição:",
    alternativas: [
      "O laudo não foi concluído ou o veículo foi liberado.",
      "O laudo foi concluído se, e somente se, o veículo foi liberado.",
      "Se o veículo foi liberado, então o laudo não foi concluído.",
      "Ou o laudo foi concluído, ou o veículo não foi liberado.",
      "O laudo foi concluído e o veículo foi liberado.",
    ],
    correta: 2,
    explicacao:
      "Uma condicional só é falsa quando o antecedente é verdadeiro e o consequente é falso. Logo, o laudo foi concluído e o veículo não foi liberado. Em “Se o veículo foi liberado, então o laudo não foi concluído”, o antecedente é falso, e uma condicional com antecedente falso é verdadeira, qualquer que seja o consequente.",
    explicacaoErradas:
      "“O laudo não foi concluído ou o veículo foi liberado” tem a forma ~p ∨ q, equivalente à própria condicional dada, e por isso é falsa. O bicondicional liga uma proposição verdadeira a uma falsa e é falso. A disjunção exclusiva “ou o laudo foi concluído, ou o veículo não foi liberado” une duas proposições verdadeiras, o que a torna falsa. E a conjunção “o laudo foi concluído e o veículo foi liberado” tem uma parte falsa.",
    pegadinha:
      "A condicional certa tem consequente falso (“o laudo não foi concluído”) e por isso parece falsa. Mas o antecedente dela também é falso, e F → F é verdadeira: a verdade vem do antecedente, não do consequente.",
    conhecimento:
      "Tabela-verdade da condicional (só V → F é falsa); negação da condicional (p ∧ ~q); p → q ≡ ~p ∨ q; disjunção exclusiva e bicondicional.",
    fonte: "Adaptada de questão FGV (prova de origem pendente de verificação)",
    origem: "banco",
  },
  {
    id: "prf-rlm-032",
    materia: "rlm",
    topico: "Equivalências lógicas",
    subassunto: "Contrapositiva com consequente composto e distribuição da condicional",
    dificuldade: 5,
    raciocinio: "Equivalência: testar cada proposição contra a contrapositiva com De Morgan e contra a distribuição p → (q ∧ r) ≡ (p → q) ∧ (p → r).",
    enunciado:
      "Considere a norma: “Se o caminhão transporta produto perigoso, então exibe o painel de segurança e porta o kit de emergência.” Avalie se cada proposição a seguir é logicamente equivalente a essa norma.\n\nI. “Se o caminhão não exibe o painel de segurança ou não porta o kit de emergência, então não transporta produto perigoso.”\nII. “Se o caminhão transporta produto perigoso, então exibe o painel de segurança; e, se transporta produto perigoso, então porta o kit de emergência.”\nIII. “Se o caminhão não exibe o painel de segurança e não porta o kit de emergência, então não transporta produto perigoso.”\nIV. “Se o caminhão exibe o painel de segurança e porta o kit de emergência, então transporta produto perigoso.”\n\nSão logicamente equivalentes à norma as proposições",
    alternativas: ["I e II, apenas.", "I, apenas.", "I e III, apenas.", "I, II e III, apenas.", "II e IV, apenas."],
    correta: 0,
    explicacao:
      "A norma é p → (q ∧ r). A I é a contrapositiva: nega o consequente por De Morgan (“não exibe o painel ou não porta o kit”), nega o antecedente e inverte a ordem; é equivalente. A II separa a norma em duas condicionais com o mesmo antecedente: (p → q) ∧ (p → r) ≡ p → (q ∧ r), também equivalente. São equivalentes I e II, apenas.",
    explicacaoErradas:
      "A III parece a contrapositiva, mas mantém o “e” ao negar o consequente. Ela equivale a p → (q ∨ r), regra mais fraca que a norma, cumprida até por um caminhão com produto perigoso que exibe o painel e não porta o kit. A IV é a recíproca: inverte o sentido da condicional e não equivale à norma. As combinações com a III ou a IV estão erradas, e a que traz só a I omite a II.",
    pegadinha:
      "A II, com a mesma condição repetida em duas condicionais, parece apenas “mais longa” e costuma ser descartada. Mas dizer que o caminhão com produto perigoso exibe o painel e, também, que porta o kit é exatamente o que a norma exige.",
    conhecimento:
      "Contrapositiva (p → q ≡ ~q → ~p) com consequente composto e De Morgan; distribuição: p → (q ∧ r) ≡ (p → q) ∧ (p → r); recíproca não equivalente.",
    fonte: "Adaptada de questão FGV (prova de origem pendente de verificação)",
    origem: "banco",
  },
  {
    id: "prf-rlm-033",
    materia: "rlm",
    topico: "Lógica de argumentação",
    subassunto: "Modus tollens com “nem” no antecedente e no consequente",
    dificuldade: 4,
    raciocinio: "Dedução: usar P2 para tornar falso o consequente de P1, negar o antecedente por modus tollens e concluir com P3.",
    enunciado:
      "Considere verdadeiras as premissas a seguir.\n\nP1: “Se o motorista não apresentou a nota fiscal, nem o manifesto de carga, então o caminhão não foi liberado, nem seguiu viagem.”\nP2: “O caminhão seguiu viagem.”\nP3: “O motorista não apresentou o manifesto de carga.”\n\nA partir dessas premissas, conclui-se corretamente que",
    alternativas: [
      "o motorista não apresentou a nota fiscal.",
      "o caminhão foi liberado e seguiu viagem.",
      "nada se pode concluir sobre a nota fiscal.",
      "o motorista apresentou a nota fiscal.",
      "o motorista apresentou a nota fiscal, e o caminhão foi liberado.",
    ],
    correta: 3,
    explicacao:
      "O consequente de P1, “o caminhão não foi liberado, nem seguiu viagem”, é uma conjunção de negações; como o caminhão seguiu viagem (P2), ele é falso. Pelo modus tollens, o antecedente também é falso: não é verdade que o motorista deixou de apresentar os dois documentos, ou seja, apresentou a nota fiscal ou o manifesto. Como não apresentou o manifesto (P3), apresentou a nota fiscal.",
    explicacaoErradas:
      "Afirmar que ele não apresentou a nota fiscal contraria a dedução, e dizer que nada se pode concluir sobre ela ignora o modus tollens. Sobre a liberação, nada se conclui: a conjunção do consequente já fica falsa porque o caminhão seguiu viagem, e ele pode ter sido liberado ou não. Por isso, “o caminhão foi liberado e seguiu viagem” e a conclusão que junta a nota fiscal à liberação vão além das premissas.",
    pegadinha:
      "Negar “o caminhão não foi liberado, nem seguiu viagem” não dá “foi liberado e seguiu viagem”, e sim “foi liberado ou seguiu viagem”. Como o caminhão seguiu viagem, essa disjunção já está satisfeita, e a liberação fica indeterminada.",
    conhecimento:
      "“Nem” como conjunção de negações; negação da conjunção (De Morgan); modus tollens; silogismo disjuntivo (p ∨ q, ~q ⊢ p).",
    fonte: "Adaptada de questão FGV (prova de origem pendente de verificação)",
    origem: "banco",
  },
  {
    id: "prf-rlm-034",
    materia: "rlm",
    topico: "Estruturas lógicas",
    subassunto: "Associação entre pessoas, destinos e veículos",
    dificuldade: 4,
    raciocinio: "Dedução: montar o quadro pessoa × destino × veículo, começar pela pista mais restritiva (a de Bento) e propagar as exclusões.",
    enunciado:
      "Três agentes administrativos, Amaro, Bento e Cícero, levaram material de expediente a três unidades da PRF: a superintendência, uma delegacia e uma unidade operacional. Cada um foi a uma unidade diferente, dirigindo um veículo diferente: uma van, um furgão e uma caminhonete. Sabe-se que:\n\n• Amaro não foi à superintendência;\n• Bento não foi à unidade operacional e não dirigia a van nem o furgão;\n• quem dirigia o furgão foi à superintendência.\n\nÉ correto afirmar que",
    alternativas: [
      "Amaro foi à delegacia, dirigindo a van.",
      "Amaro foi à unidade operacional, dirigindo a van.",
      "Bento foi à delegacia, dirigindo o furgão.",
      "Cícero foi à unidade operacional, dirigindo o furgão.",
      "Cícero foi à superintendência, dirigindo a caminhonete.",
    ],
    correta: 1,
    explicacao:
      "Bento não dirigia a van nem o furgão: dirigia a caminhonete. Quem dirigia o furgão foi à superintendência, onde Amaro não foi; então Amaro ficou com a van, e o furgão ficou com Cícero, que foi à superintendência. Bento não foi à unidade operacional nem à superintendência: foi à delegacia. Sobra a unidade operacional para Amaro, que foi até lá dirigindo a van.",
    explicacaoErradas:
      "Cada resposta errada acerta um dado e erra o outro. Amaro dirigia a van, mas foi à unidade operacional, e não à delegacia. Bento foi à delegacia, mas dirigindo a caminhonete, e não o furgão. Cícero dirigia o furgão, mas foi à superintendência, e não à unidade operacional; e foi à superintendência com o furgão, e não com a caminhonete.",
    pegadinha:
      "A pista do furgão não cita ninguém pelo nome e costuma ficar para o fim. É ela que, combinada com “Amaro não foi à superintendência”, decide quem dirigia a van.",
    conhecimento:
      "Problemas de associação: quadro lógico de dupla entrada, exclusões e propagação; pistas que ligam duas categorias sem citar a pessoa.",
    fonte: "Adaptada de questão FGV (prova de origem pendente de verificação)",
    origem: "banco",
  },
  {
    id: "prf-rlm-035",
    materia: "rlm",
    topico: "Estruturas lógicas",
    subassunto: "Apenas uma afirmação verdadeira: teste de hipóteses",
    dificuldade: 5,
    raciocinio: "Dedução: supor, uma de cada vez, que cada afirmação é a única verdadeira e descartar as hipóteses que levam a contradição.",
    enunciado:
      "Em uma unidade administrativa, as servidoras Elisa, Lívia e Carla foram designadas, cada uma, para um setor diferente: protocolo, almoxarifado e arquivo. Das afirmações a seguir, apenas uma é verdadeira.\n\nI. Lívia ficou com o protocolo.\nII. Carla não ficou com o almoxarifado.\nIII. Lívia não ficou com o arquivo.\n\nCom base nessas informações, é correto afirmar que",
    alternativas: [
      "Lívia ficou com o protocolo.",
      "Carla ficou com o almoxarifado.",
      "Elisa ficou com o protocolo.",
      "Lívia ficou com o almoxarifado.",
      "Lívia ficou com o arquivo.",
    ],
    correta: 4,
    explicacao:
      "Se a I fosse a verdadeira, a III seria falsa e Lívia teria ficado com o arquivo, o que contradiz a I. Se a III fosse a verdadeira, a I seria falsa e Lívia, sem o protocolo e sem o arquivo, ficaria com o almoxarifado; mas a II falsa põe Carla no almoxarifado, outra contradição. Resta a II como verdadeira: com I e III falsas, Lívia fica com o arquivo; Carla, fora do almoxarifado, com o protocolo; e Elisa, com o almoxarifado.",
    explicacaoErradas:
      "“Lívia ficou com o protocolo” é a própria afirmação I, que é falsa, e o almoxarifado só aparece para Lívia na hipótese em que a III é a verdadeira, que leva a contradição. Carla não ficou com o almoxarifado, porque a II é a verdadeira: ficou com o protocolo, e por isso Elisa também não ficou com ele.",
    pegadinha:
      "A afirmação I, a única sem negação, parece a verdadeira, e muita gente começa e termina por ela. Mas, se ela fosse verdadeira, a III teria de ser falsa, e as duas juntas colocariam Lívia em dois setores.",
    conhecimento:
      "Problemas com “apenas uma afirmação verdadeira”: teste de hipóteses por contradição; negação das afirmações falsas; associação por exclusão.",
    fonte: "Adaptada de questão FGV (prova de origem pendente de verificação)",
    origem: "banco",
  },
  {
    id: "prf-rlm-036",
    materia: "rlm",
    topico: "Problemas aritméticos, geométricos e matriciais",
    subassunto: "Calendário: “há dois dias”, “daqui a cinco dias” e véspera",
    dificuldade: 4,
    raciocinio: "Cálculo: fixar o dia da fala a partir da véspera do domingo, voltar ao dia de hoje e avançar dois dias.",
    enunciado:
      "Há dois dias, o coordenador de uma equipe disse: “Daqui a cinco dias será a véspera do início da operação.” Sabendo que a operação começa em um domingo, o dia da semana depois de amanhã será",
    alternativas: ["sexta-feira.", "quarta-feira.", "sábado.", "quinta-feira.", "segunda-feira."],
    correta: 0,
    explicacao:
      "A véspera de um domingo é um sábado. A fala foi feita há dois dias, e os cinco dias contam a partir dela: o dia da fala é sábado menos 5, ou seja, segunda-feira. Hoje é dois dias depois da fala, quarta-feira, e depois de amanhã será sexta-feira.",
    explicacaoErradas:
      "Quarta-feira resulta de tratar a fala como se fosse de hoje (hoje + 5 = sábado leva a segunda, e depois de amanhã a quarta). Sábado vem de ignorar a véspera (fala + 5 = domingo). Quinta-feira, de ignorar as duas coisas ao mesmo tempo. Segunda-feira, de voltar dois dias em vez de avançar, como se a fala ainda fosse acontecer.",
    pegadinha:
      "São três referências diferentes: o dia da fala, o dia de hoje e o dia pedido. Quem conta os cinco dias a partir de hoje, e não da fala, erra por dois dias.",
    conhecimento:
      "Problemas de calendário: ciclo de 7 dias, contagem para a frente e para trás, “véspera” (dia anterior) e expressões como “há dois dias” e “depois de amanhã”.",
    fonte: "Adaptada de questão FGV (prova de origem pendente de verificação)",
    origem: "banco",
  },
  {
    id: "prf-rlm-037",
    materia: "rlm",
    topico: "Diagramas lógicos",
    subassunto: "“Todo A é B” e “algum B é C”: nada se conclui entre A e C",
    dificuldade: 5,
    raciocinio: "Diagramas: desenhar A dentro de B, marcar C cruzando B e verificar se C precisa tocar A.",
    enunciado:
      "Considere verdadeiras as afirmações “Todo motorista de carreta tem curso de direção defensiva” e “Algum motorista com curso de direção defensiva já foi autuado por excesso de velocidade”. Com base apenas nessas afirmações, é correto concluir que",
    alternativas: [
      "algum motorista de carreta já foi autuado por excesso de velocidade.",
      "nenhum motorista de carreta foi autuado por excesso de velocidade.",
      "todo motorista que já foi autuado por excesso de velocidade tem curso de direção defensiva.",
      "algum motorista autuado por excesso de velocidade tem curso de direção defensiva.",
      "algum motorista com curso de direção defensiva não foi autuado por excesso de velocidade.",
    ],
    correta: 3,
    explicacao:
      "Os motoristas de carreta estão dentro do conjunto dos que têm curso de direção defensiva, e o conjunto dos autuados cruza o dos que têm curso. Esse cruzamento pode ficar fora do conjunto dos motoristas de carreta, e por isso nada se conclui sobre eles. O que se garante é a conversão da segunda afirmação: se algum motorista com curso foi autuado, algum autuado tem curso.",
    explicacaoErradas:
      "“Algum motorista de carreta já foi autuado” e “nenhum motorista de carreta foi autuado” descrevem situações possíveis, mas nenhuma é obrigatória: o diagrama admite as duas. “Algum motorista com curso não foi autuado” não decorre de “algum motorista com curso foi autuado”: o “algum” só garante que existe um caso, e todos os que têm curso podem ter sido autuados. “Todo motorista que já foi autuado tem curso” generaliza a segunda afirmação, que só fala de algum.",
    pegadinha:
      "O motorista de carreta tem curso, e algum motorista com curso foi autuado: a cadeia parece levar ao motorista de carreta autuado. Mas o termo comum (“ter curso”) não está tomado em toda a sua extensão em nenhuma das afirmações, e o silogismo não fecha.",
    conhecimento:
      "Silogismo categórico e termo médio não distribuído; conversão simples da particular afirmativa (algum B é C ≡ algum C é B); conclusão necessária × possível em diagramas.",
    origem: "banco",
  },
  {
    id: "prf-rlm-038",
    materia: "rlm",
    topico: "Problemas aritméticos, geométricos e matriciais",
    subassunto: "Variações percentuais sucessivas",
    dificuldade: 4,
    raciocinio: "Cálculo: transformar cada variação em fator multiplicativo (1,25; 0,80; 1,10) e multiplicar os fatores.",
    enunciado:
      "Em uma rodovia federal, o fluxo médio de veículos em um feriado foi 25% maior que o de um dia comum. No feriado seguinte, o fluxo foi 20% menor que o do primeiro feriado e, no terceiro, 10% maior que o do segundo. Em relação ao fluxo de um dia comum, o fluxo do terceiro feriado foi",
    alternativas: ["15% maior.", "10% maior.", "12,5% maior.", "15,5% maior.", "igual ao de um dia comum."],
    correta: 1,
    explicacao:
      "Variações sucessivas se multiplicam: aumento de 25% é fator 1,25; redução de 20%, fator 0,80; aumento de 10%, fator 1,10. O produto é 1,25 × 0,80 × 1,10 = 1,00 × 1,10 = 1,10, ou seja, o fluxo do terceiro feriado foi 10% maior que o de um dia comum.",
    explicacaoErradas:
      "15% maior soma as porcentagens (25 − 20 + 10), como se todas incidissem sobre o dia comum. 15,5% maior aplica os −20% sobre o dia comum, e não sobre o primeiro feriado (1,05 × 1,10). 12,5% maior junta antes as duas últimas variações como −10% (1,25 × 0,90), mas −20% seguido de +10% dá fator 0,88. “Igual ao de um dia comum” para no segundo feriado (1,25 × 0,80 = 1) e esquece o terceiro.",
    pegadinha:
      "O aumento de 25% seguido da redução de 20% volta exatamente ao valor inicial, o que dá a impressão de que as variações se compensam pela soma. Elas se compensam pelo produto (1,25 × 0,80 = 1), e é o produto que vale em todas as etapas.",
    conhecimento:
      "Porcentagem como fator multiplicativo; aumentos e descontos sucessivos; por que porcentagens sucessivas não se somam.",
    origem: "banco",
  },
  {
    id: "prf-rlm-039",
    materia: "rlm",
    topico: "Princípios de contagem e probabilidade",
    subassunto: "Probabilidade da união com um evento contido no outro",
    dificuldade: 5,
    raciocinio: "Cálculo: perceber que o produto ímpar exige dois resultados ímpares, o que já torna a soma par, e aplicar a probabilidade da união.",
    enunciado:
      "Dois dados comuns e honestos, com faces numeradas de 1 a 6, são lançados ao mesmo tempo. A probabilidade de que a soma dos resultados seja par ou o produto dos resultados seja ímpar é",
    alternativas: ["3/4.", "5/8.", "4/7.", "1/4.", "1/2."],
    correta: 4,
    explicacao:
      "São 36 resultados igualmente prováveis. O produto é ímpar só quando os dois dados dão ímpar (3 × 3 = 9 casos), e nesse caso a soma é sempre par. Assim, o evento “produto ímpar” está contido em “soma par”, e a união é o próprio evento “soma par”: 18 casos (9 com dois ímpares e 9 com dois pares). P = 18/36 = 1/2.",
    explicacaoErradas:
      "3/4 soma 1/2 e 1/4 sem descontar a interseção, que é o próprio evento “produto ímpar”. 5/8 desconta a interseção como se os eventos fossem independentes (1/2 × 1/4 = 1/8), mas eles não são: 1/2 + 1/4 − 1/4 = 1/2. 1/4 troca o “ou” pelo “e”. 4/7 conta os 21 pares não ordenados como se fossem igualmente prováveis.",
    pegadinha:
      "A fórmula P(A ∪ B) = P(A) + P(B) − P(A ∩ B) é lembrada, mas a interseção costuma ser calculada como produto das probabilidades. Aqui a interseção é o próprio “produto ímpar”, porque todo par de ímpares tem soma par.",
    conhecimento:
      "Espaço amostral de dois dados (36 resultados ordenados); probabilidade da união; eventos dependentes e evento contido em outro; paridade da soma e do produto.",
    origem: "banco",
  },
];
