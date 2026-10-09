import type { QuestaoPrf } from "../../data/prf";

export const QUESTOES_PRF_RLM: QuestaoPrf[] = [
  {
    id: "prf-rlm-001",
    materia: "rlm",
    topico: "Estruturas lógicas",
    enunciado:
      "Durante uma fiscalização, foram ditas as seguintes frases: “Desligue o motor.”; “O caminhão parado no acostamento excedeu o peso permitido.”; “Quantos passageiros estão no ônibus?”; “Ele dirigia sem habilitação.”; “A placa do veículo está ilegível.”; “Que fila enorme!”. Quantas dessas frases são proposições?",
    alternativas: [
      "Uma: apenas a frase sobre o peso do caminhão.",
      "Três: as frases sobre o peso do caminhão, a placa ilegível e quem dirigia sem habilitação.",
      "Duas: as frases sobre o peso do caminhão e a placa ilegível.",
      "Quatro: todas, exceto a pergunta e a exclamação.",
      "Cinco: todas, exceto a pergunta sobre os passageiros.",
    ],
    correta: 2,
    explicacao:
      "Proposição é a frase declarativa à qual se pode atribuir V ou F. A ordem (“Desligue o motor.”), a pergunta e a exclamação não são proposições, e “Ele dirigia sem habilitação” é sentença aberta, pois o sujeito “ele” não está identificado. Sobram as frases sobre o peso do caminhão e a placa ilegível.",
    origem: "banco",
  },
  {
    id: "prf-rlm-002",
    materia: "rlm",
    topico: "Estruturas lógicas",
    enunciado:
      "Três servidores da PRF, Davi, Elisa e Fábio, trabalham em postos diferentes, nos km 12, 47 e 90 de uma rodovia, e cada um usa um veículo diferente: caminhonete, sedã ou motocicleta. Sabe-se que Fábio trabalha no km 47, que Elisa não trabalha no km 12, que quem trabalha no km 90 usa a caminhonete e que Davi não usa o sedã. Com base nessas informações, é correto afirmar que",
    alternativas: [
      "Davi trabalha no km 12 e usa a motocicleta.",
      "Elisa trabalha no km 90 e usa o sedã.",
      "Fábio trabalha no km 47 e usa a caminhonete.",
      "Davi trabalha no km 12 e usa a caminhonete.",
      "Fábio trabalha no km 47 e usa a motocicleta.",
    ],
    correta: 0,
    explicacao:
      "Fábio está no km 47. Como Elisa não está no km 12, ela fica no km 90 e, por isso, usa a caminhonete; sobra o km 12 para Davi. Davi não usa o sedã, e a caminhonete já é de Elisa, então ele usa a motocicleta, e o sedã fica com Fábio.",
    origem: "banco",
  },
  {
    id: "prf-rlm-003",
    materia: "rlm",
    topico: "Lógica de argumentação",
    enunciado:
      "Considere verdadeiras as premissas: “Se o caminhão estava com excesso de peso, então foi retido no posto”; “Se o caminhão foi retido no posto, então a carga foi remanejada”; “A carga não foi remanejada”. A partir delas, conclui-se corretamente que",
    alternativas: [
      "O caminhão estava com excesso de peso, mas não foi retido no posto.",
      "O caminhão foi retido no posto, mas não estava com excesso de peso.",
      "O caminhão estava com excesso de peso, mas a carga não foi remanejada.",
      "O caminhão estava com excesso de peso e foi retido no posto.",
      "O caminhão não foi retido no posto nem estava com excesso de peso.",
    ],
    correta: 4,
    explicacao:
      "Pela terceira premissa, a carga não foi remanejada; pelo modus tollens na segunda, o caminhão não foi retido; aplicando de novo o modus tollens na primeira, ele não estava com excesso de peso. Numa cadeia de condicionais, negar o último consequente faz a negação voltar até o início.",
    origem: "banco",
  },
  {
    id: "prf-rlm-004",
    materia: "rlm",
    topico: "Lógica de argumentação",
    enunciado:
      "Considere o argumento: “Todo veículo oficial é blindado. A motocicleta do posto é um veículo oficial. Logo, a motocicleta do posto é blindada.” Sobre esse argumento, é correto afirmar que ele é",
    alternativas: [
      "inválido, porque a primeira premissa é falsa.",
      "válido, embora a primeira premissa e a conclusão sejam falsas.",
      "inválido, porque a conclusão não decorre logicamente das premissas apresentadas.",
      "válido somente se todas as premissas e a conclusão forem verdadeiras.",
      "inválido, porque a conclusão é falsa.",
    ],
    correta: 1,
    explicacao:
      "A forma “Todo A é B; C é A; logo, C é B” é válida: se as premissas fossem verdadeiras, a conclusão também seria. A validade depende só da forma. Aqui a primeira premissa é falsa (nem todo veículo oficial é blindado) e a conclusão também, mas isso não torna o argumento inválido.",
    origem: "banco",
  },
  {
    id: "prf-rlm-005",
    materia: "rlm",
    topico: "Lógica de argumentação",
    enunciado: "Assinale o argumento válido.",
    alternativas: [
      "Se chove, a pista fica escorregadia. A pista está escorregadia. Logo, choveu.",
      "Se o radar está ligado, os motoristas reduzem a velocidade. O radar está desligado. Logo, os motoristas não reduzem a velocidade.",
      "Todo motorista multado foi abordado. Renata foi abordada. Logo, Renata foi multada.",
      "O comboio seguiu pela BR-040 ou pela BR-116. Ele não seguiu pela BR-040. Logo, seguiu pela BR-116.",
      "O motorista estava cansado ou distraído. Ele estava cansado. Logo, não estava distraído.",
    ],
    correta: 3,
    explicacao:
      "É o silogismo disjuntivo: se ao menos uma das rotas foi usada e uma delas está descartada, sobra a outra. Os demais são falácias: afirmar o consequente (pista escorregadia), negar o antecedente (radar desligado), concluir que quem foi abordado foi multado e, numa disjunção inclusiva, negar uma parte só porque a outra ocorreu.",
    origem: "banco",
  },
  {
    id: "prf-rlm-006",
    materia: "rlm",
    topico: "Proposições simples e compostas",
    enunciado:
      "A proposição “Se o motorista estava acima da velocidade ou sem cinto, então foi autuado e recebeu orientação” é formada por",
    alternativas: [
      "quatro proposições simples, e o conectivo principal é a condicional.",
      "quatro proposições simples, e o conectivo principal é a conjunção.",
      "três proposições simples, e o conectivo principal é a condicional.",
      "cinco proposições simples, e o conectivo principal é a conjunção.",
      "duas proposições simples, e o conectivo principal é a disjunção.",
    ],
    correta: 0,
    explicacao:
      "As proposições simples são: o motorista estava acima da velocidade; estava sem cinto; foi autuado; recebeu orientação. Sujeito e verbo subentendidos não reduzem a contagem. A estrutura é (p ∨ q) → (r ∧ s), e o “se... então” que liga os dois blocos é o conectivo principal.",
    origem: "banco",
  },
  {
    id: "prf-rlm-007",
    materia: "rlm",
    topico: "Proposições simples e compostas",
    enunciado:
      "Sejam p: “o veículo é liberado” e q: “o licenciamento está em dia”. A proposição “O veículo é liberado somente se o licenciamento está em dia” é representada simbolicamente por",
    alternativas: [
      "q → p.",
      "p ↔ q.",
      "p → q.",
      "~p → ~q.",
      "p ∧ q.",
    ],
    correta: 2,
    explicacao:
      "“p somente se q” significa que p só ocorre quando q ocorre: q é condição necessária para p, o que se escreve p → q. A recíproca q → p corresponderia a “o veículo é liberado se o licenciamento está em dia”, e a bicondicional exigiria a expressão “se, e somente se”.",
    origem: "banco",
  },
  {
    id: "prf-rlm-008",
    materia: "rlm",
    topico: "Proposições simples e compostas",
    enunciado: "Assinale a proposição simples.",
    alternativas: [
      "O agente lavrou o auto de infração e recolheu o documento.",
      "Se o farol está queimado, o condutor é notificado.",
      "Ou o ônibus parte às 8h, ou parte às 9h.",
      "O condutor estava cansado, mas seguiu viagem.",
      "O motorista não respeitou a sinalização do trecho em obras.",
    ],
    correta: 4,
    explicacao:
      "Proposição simples traz uma só ideia, sem conectivo. O “não” apenas nega essa ideia, sem ligar duas proposições. As demais são compostas: conjunção (“e”, e também “mas”, que tem valor de “e”), condicional (“se...”, com o “então” subentendido) e disjunção exclusiva (“ou... ou”).",
    origem: "banco",
  },
  {
    id: "prf-rlm-009",
    materia: "rlm",
    topico: "Tabelas-verdade",
    enunciado:
      "Quantas linhas tem a tabela-verdade da proposição “Se o radar registrou o excesso e o condutor não recorreu, então a multa foi paga ou o radar não registrou o excesso”?",
    alternativas: [
      "16 linhas.",
      "8 linhas.",
      "32 linhas.",
      "6 linhas.",
      "4 linhas.",
    ],
    correta: 1,
    explicacao:
      "Só contam as proposições simples distintas: o radar registrou o excesso, o condutor recorreu e a multa foi paga. As negações (“não recorreu”, “não registrou”) reaproveitam as mesmas proposições. Com 3 proposições simples, a tabela tem 2³ = 8 linhas.",
    origem: "banco",
  },
  {
    id: "prf-rlm-010",
    materia: "rlm",
    topico: "Tabelas-verdade",
    enunciado:
      "Sabe-se que é verdadeira a proposição “o ônibus estava lotado” e que são falsas as proposições “o motorista tinha autorização” e “a viagem foi interrompida”. Nessas condições, é verdadeira a proposição",
    alternativas: [
      "Se o ônibus estava lotado, então a viagem foi interrompida.",
      "O ônibus estava lotado e o motorista tinha autorização.",
      "O ônibus estava lotado se, e somente se, a viagem foi interrompida.",
      "Se o motorista tinha autorização, então a viagem foi interrompida.",
      "Ou o ônibus estava lotado, ou o motorista não tinha autorização.",
    ],
    correta: 3,
    explicacao:
      "A condicional com antecedente falso é sempre verdadeira: F → F = V. As demais são falsas: V → F é o único caso que derruba a condicional; a conjunção com uma parte falsa é falsa; a bicondicional V ↔ F é falsa; e a disjunção exclusiva com as duas partes verdadeiras (ônibus lotado; motorista sem autorização) também é falsa.",
    origem: "banco",
  },
  {
    id: "prf-rlm-011",
    materia: "rlm",
    topico: "Tabelas-verdade",
    enunciado: "Assinale a proposição que é uma tautologia.",
    alternativas: [
      "(p ∨ q) → (p ∧ q).",
      "(p → q) ∧ (p ∧ ~q).",
      "(p ↔ q) → (p ∧ q).",
      "(p ∨ q) ∧ (~p ∧ ~q).",
      "(p ∧ q) → (p ∨ q).",
    ],
    correta: 4,
    explicacao:
      "A condicional só é falsa com antecedente V e consequente F. Se p ∧ q é V, então p e q são V, e p ∨ q também é V: o caso que derrubaria a condicional não existe. (p ∨ q) → (p ∧ q) falha com p V e q F, e (p ↔ q) → (p ∧ q) falha com p e q falsas; as outras duas são contradições.",
    origem: "banco",
  },
  {
    id: "prf-rlm-012",
    materia: "rlm",
    topico: "Equivalências lógicas",
    enunciado:
      "Uma proposição logicamente equivalente a “Se o tacógrafo foi adulterado, então o motorista é autuado” é",
    alternativas: [
      "Se o motorista é autuado, então o tacógrafo foi adulterado.",
      "O tacógrafo não foi adulterado ou o motorista é autuado.",
      "Se o tacógrafo não foi adulterado, então o motorista não é autuado.",
      "O tacógrafo foi adulterado e o motorista não é autuado.",
      "Se o motorista não é autuado, então o tacógrafo foi adulterado.",
    ],
    correta: 1,
    explicacao:
      "Pela equivalência p → q ≡ ~p ∨ q, nega-se o antecedente, troca-se o “se... então” por “ou” e mantém-se o consequente. A recíproca e a inversa não equivalem à condicional original, e “o tacógrafo foi adulterado e o motorista não é autuado” é a negação dela.",
    origem: "banco",
  },
  {
    id: "prf-rlm-013",
    materia: "rlm",
    topico: "Equivalências lógicas",
    enunciado:
      "A proposição “Estar com o licenciamento vencido é condição suficiente para que o veículo seja removido ao pátio” é equivalente a",
    alternativas: [
      "Se o licenciamento está vencido, então o veículo é removido ao pátio.",
      "Se o veículo é removido ao pátio, então o licenciamento está vencido.",
      "O veículo é removido ao pátio somente se o licenciamento está vencido.",
      "O licenciamento está vencido se, e somente se, o veículo é removido ao pátio.",
      "O licenciamento está vencido e o veículo é removido ao pátio.",
    ],
    correta: 0,
    explicacao:
      "Em p → q, p é condição suficiente para q, e q é condição necessária para p. Assim, “licenciamento vencido é suficiente para a remoção” equivale a “se o licenciamento está vencido, o veículo é removido”. “Se é removido, está vencido” e “é removido somente se está vencido” invertem os papéis, e a bicondicional afirma mais do que o enunciado.",
    origem: "banco",
  },
  {
    id: "prf-rlm-014",
    materia: "rlm",
    topico: "Equivalências lógicas",
    enunciado:
      "Considere a proposição “Se o motorista estava cansado e dirigia à noite, então fez uma parada no posto”. Uma proposição logicamente equivalente a ela é",
    alternativas: [
      "Se o motorista não fez uma parada no posto, então não estava cansado e não dirigia à noite.",
      "Se o motorista fez uma parada no posto, então estava cansado e dirigia à noite.",
      "Se o motorista não estava cansado ou não dirigia à noite, então não fez uma parada no posto.",
      "Se o motorista não fez uma parada no posto, então não estava cansado ou não dirigia à noite.",
      "O motorista estava cansado e dirigia à noite e, mesmo assim, não fez nenhuma parada no posto.",
    ],
    correta: 3,
    explicacao:
      "A contrapositiva nega as duas partes e inverte a ordem: ~s → ~(c ∧ n). Pela lei de De Morgan, ~(c ∧ n) é “não estava cansado ou não dirigia à noite”. Trocar esse “ou” por “e” é erro comum; a recíproca e a inversa não são equivalentes; e a frase com “mesmo assim, não fez nenhuma parada” é a negação da proposição.",
    origem: "banco",
  },
  {
    id: "prf-rlm-015",
    materia: "rlm",
    topico: "Leis de De Morgan",
    enunciado:
      "A negação de “O caminhão está com a lona rasgada e a carga está mal amarrada” é",
    alternativas: [
      "O caminhão não está com a lona rasgada e a carga não está mal amarrada.",
      "O caminhão está com a lona rasgada ou a carga não está mal amarrada.",
      "O caminhão não está com a lona rasgada ou a carga não está mal amarrada.",
      "Se o caminhão não está com a lona rasgada, então a carga não está mal amarrada.",
      "O caminhão não está com a lona rasgada e a carga está mal amarrada.",
    ],
    correta: 2,
    explicacao:
      "Pela lei de De Morgan, ~(p ∧ q) ≡ ~p ∨ ~q: troca-se o “e” por “ou” e negam-se as duas partes. Negar as duas e manter o “e” é o erro mais comum. Basta que uma das partes seja falsa para a conjunção original ser falsa, e é isso que o “ou” da negação expressa.",
    origem: "banco",
  },
  {
    id: "prf-rlm-016",
    materia: "rlm",
    topico: "Leis de De Morgan",
    enunciado:
      "A negação de “Se a viatura passou pela revisão, então os freios foram trocados” é",
    alternativas: [
      "Se a viatura não passou pela revisão, então os freios não foram trocados.",
      "A viatura não passou pela revisão e os freios foram trocados.",
      "Se os freios não foram trocados, então a viatura não passou pela revisão.",
      "A viatura passou pela revisão e os freios não foram trocados.",
      "A viatura não passou pela revisão ou os freios foram trocados.",
    ],
    correta: 3,
    explicacao:
      "A negação da condicional sai de De Morgan: p → q ≡ ~p ∨ q, e ~(~p ∨ q) ≡ p ∧ ~q. Na prática, mantém-se o antecedente, troca-se por “e” e nega-se o consequente. “A viatura não passou pela revisão ou os freios foram trocados” e “se os freios não foram trocados, a viatura não passou pela revisão” são equivalentes à original, e não sua negação.",
    origem: "banco",
  },
  {
    id: "prf-rlm-017",
    materia: "rlm",
    topico: "Leis de De Morgan",
    enunciado:
      "A negação da proposição “O condutor não usava cinto nem portava a CNH” é",
    alternativas: [
      "O condutor usava cinto ou portava a CNH.",
      "O condutor usava cinto e portava a CNH.",
      "O condutor não usava cinto ou não portava a CNH.",
      "O condutor usava cinto, mas não portava a CNH.",
      "Se o condutor usava cinto, então portava a CNH.",
    ],
    correta: 0,
    explicacao:
      "“Não usava cinto nem portava a CNH” é a conjunção ~c ∧ ~h. Pela lei de De Morgan, ~(~c ∧ ~h) ≡ c ∨ h: o “e” vira “ou” e cada negação desaparece. Basta que uma das duas situações não se confirme para a frase original deixar de valer.",
    origem: "banco",
  },
  {
    id: "prf-rlm-018",
    materia: "rlm",
    topico: "Diagramas lógicos",
    enunciado:
      "Considere verdadeiras as proposições “Todo motorista de ônibus interestadual tem curso de transporte coletivo” e “Algum motorista de ônibus interestadual é caminhoneiro”. Com base nelas, conclui-se corretamente que",
    alternativas: [
      "todo caminhoneiro tem curso de transporte coletivo.",
      "nenhum caminhoneiro tem curso de transporte coletivo.",
      "algum caminhoneiro tem curso de transporte coletivo.",
      "todo motorista com curso de transporte coletivo dirige ônibus interestadual.",
      "algum motorista de ônibus interestadual não tem curso de transporte coletivo.",
    ],
    correta: 2,
    explicacao:
      "O círculo dos motoristas de ônibus interestadual fica dentro do círculo de quem tem o curso. Os que também são caminhoneiros estão, portanto, dentro desse círculo: algum caminhoneiro tem o curso. Nada garante que todos os caminhoneiros o tenham, nem que todo dono do curso dirija ônibus interestadual.",
    origem: "banco",
  },
  {
    id: "prf-rlm-019",
    materia: "rlm",
    topico: "Diagramas lógicos",
    enunciado:
      "Admita como verdadeiras as proposições “Nenhum veículo apreendido circula pela rodovia” e “Algum veículo importado está apreendido”. Com base nelas, é necessariamente verdadeiro que",
    alternativas: [
      "nenhum veículo importado circula pela rodovia.",
      "todo veículo apreendido é importado.",
      "algum veículo importado circula pela rodovia.",
      "algum veículo apreendido circula pela rodovia.",
      "algum veículo importado não circula pela rodovia.",
    ],
    correta: 4,
    explicacao:
      "Os apreendidos e os que circulam são conjuntos disjuntos. Os importados apreendidos ficam, então, fora do conjunto dos que circulam: algum importado não circula. Não se pode afirmar que nenhum importado circula nem que algum circula: os importados não apreendidos podem ou não estar na rodovia.",
    origem: "banco",
  },
  {
    id: "prf-rlm-020",
    materia: "rlm",
    topico: "Lógica de primeira ordem",
    enunciado:
      "Considere os predicados V(x): “x é veículo de carga” e T(x): “x tem tacógrafo”. A sentença “Todo veículo de carga tem tacógrafo” é representada corretamente por",
    alternativas: [
      "∀x (V(x) ∧ T(x)).",
      "∀x (V(x) → T(x)).",
      "∃x (V(x) ∧ ~T(x)).",
      "∀x (T(x) → V(x)).",
      "~∃x (V(x) ∧ T(x)).",
    ],
    correta: 1,
    explicacao:
      "Com o quantificador universal usa-se a condicional: para todo x, se x é veículo de carga, então x tem tacógrafo. ∀x (V(x) ∧ T(x)) diria que tudo no universo é veículo de carga com tacógrafo; ∃x (V(x) ∧ ~T(x)) é a negação da frase; ∀x (T(x) → V(x)) inverte a condicional; e ~∃x (V(x) ∧ T(x)) diz que nenhum veículo de carga tem tacógrafo.",
    origem: "banco",
  },
  {
    id: "prf-rlm-021",
    materia: "rlm",
    topico: "Lógica de primeira ordem",
    enunciado:
      "A negação de “Em todo posto da rodovia há pelo menos um servidor que fala inglês” é",
    alternativas: [
      "Em nenhum posto da rodovia há servidor que fala inglês.",
      "Há pelo menos um posto da rodovia em que nenhum servidor fala inglês.",
      "Em todo posto da rodovia há pelo menos um servidor que não fala inglês.",
      "Há pelo menos um posto da rodovia com algum servidor que não fala inglês.",
      "Há pelo menos um posto da rodovia em que todos os servidores falam inglês.",
    ],
    correta: 1,
    explicacao:
      "A frase tem a forma ∀x ∃y P(x, y): para todo posto, existe um servidor que fala inglês. Na negação, cada quantificador troca de tipo e o predicado é negado, ∃x ∀y ~P(x, y): existe um posto em que nenhum servidor fala inglês. Dizer que em nenhum posto alguém fala inglês afirma mais do que a negação exige.",
    origem: "banco",
  },
  {
    id: "prf-rlm-022",
    materia: "rlm",
    topico: "Princípios de contagem e probabilidade",
    enunciado:
      "As placas no padrão Mercosul usadas no Brasil seguem o formato LLLNLNN, em que cada L é escolhido entre as 26 letras do alfabeto e cada N, entre os 10 algarismos, com repetição permitida. O total de placas possíveis nesse formato é",
    alternativas: [
      "26³ × 10⁴.",
      "26 × 25 × 24 × 23 × 10 × 9 × 8.",
      "36⁷.",
      "4 × 26 + 3 × 10.",
      "26⁴ × 10³.",
    ],
    correta: 4,
    explicacao:
      "Pelo princípio fundamental da contagem, multiplicam-se as possibilidades de cada posição: são 4 posições de letra, com 26 opções cada, e 3 de algarismo, com 10 opções cada, o que dá 26⁴ × 10³ = 456.976.000 placas. O produto 26 × 25 × 24 × 23 × 10 × 9 × 8 valeria só se a repetição fosse proibida.",
    origem: "banco",
  },
  {
    id: "prf-rlm-023",
    materia: "rlm",
    topico: "Princípios de contagem e probabilidade",
    enunciado:
      "Uma equipe de 4 servidores será formada a partir de um grupo de 5 policiais e 3 agentes administrativos, sem distinção de funções dentro da equipe. Se a equipe deve ter pelo menos um agente administrativo, o número de equipes diferentes é",
    alternativas: [
      "70.",
      "105.",
      "30.",
      "65.",
      "1.680.",
    ],
    correta: 3,
    explicacao:
      "A ordem não importa, então são combinações. Sem restrição, há C(8, 4) = 70 equipes; dessas, C(5, 4) = 5 têm só policiais. Logo, 70 − 5 = 65 equipes têm ao menos um agente administrativo. Escolher primeiro 1 agente e depois 3 pessoas quaisquer (3 × 35 = 105) conta a mesma equipe mais de uma vez.",
    origem: "banco",
  },
  {
    id: "prf-rlm-024",
    materia: "rlm",
    topico: "Princípios de contagem e probabilidade",
    enunciado:
      "Num lote de 10 etilômetros, 3 estão com a verificação periódica vencida. Sorteando-se 2 aparelhos ao acaso, sem reposição, a probabilidade de os dois estarem com a verificação em dia é",
    alternativas: [
      "7/15.",
      "49/100.",
      "1/15.",
      "8/15.",
      "7/10.",
    ],
    correta: 0,
    explicacao:
      "Sem reposição, a segunda retirada depende da primeira: a chance de o primeiro aparelho estar em dia é 7/10 e, depois, a de o segundo também estar é 6/9. O produto dá 42/90 = 7/15. O valor 49/100 valeria com reposição, e 8/15 é a probabilidade do evento complementar, pelo menos um aparelho vencido.",
    origem: "banco",
  },
  {
    id: "prf-rlm-025",
    materia: "rlm",
    topico: "Operações com conjuntos",
    enunciado:
      "Numa operação, foram fiscalizados 200 veículos: 40 tinham pneus em mau estado, 30 tinham faróis com defeito e 25 estavam com o licenciamento atrasado. Desses, 10 tinham problema nos pneus e nos faróis, 8 nos pneus e no licenciamento, 6 nos faróis e no licenciamento, e 3 tinham as três irregularidades. Quantos veículos apresentaram pelo menos uma dessas irregularidades?",
    alternativas: [
      "95.",
      "71.",
      "74.",
      "126.",
      "68.",
    ],
    correta: 2,
    explicacao:
      "Pela fórmula da união de três conjuntos: 40 + 30 + 25 − 10 − 8 − 6 + 3 = 74. As interseções de dois são descontadas porque foram contadas duas vezes, e a interseção tripla volta a ser somada porque, ao descontar os pares, foi retirada uma vez a mais. Os outros 126 veículos não tinham nenhuma das três irregularidades.",
    origem: "banco",
  },
  {
    id: "prf-rlm-026",
    materia: "rlm",
    topico: "Operações com conjuntos",
    enunciado:
      "Considere o conjunto universo U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, o conjunto A dos números pares de U e o conjunto B dos múltiplos de 3 de U. O complementar de A ∪ B em relação a U é",
    alternativas: [
      "{1, 5, 7}.",
      "{6}.",
      "{1, 3, 5, 7, 9}.",
      "{2, 4, 8, 10}.",
      "{1, 2, 4, 5, 7, 8, 10}.",
    ],
    correta: 0,
    explicacao:
      "A = {2, 4, 6, 8, 10} e B = {3, 6, 9}, logo A ∪ B = {2, 3, 4, 6, 8, 9, 10}. O complementar reúne os elementos de U fora dessa união: {1, 5, 7}. {6} é a interseção A ∩ B, {2, 4, 8, 10} é A − B, {1, 3, 5, 7, 9} é o complementar só de A e {1, 2, 4, 5, 7, 8, 10}, o complementar só de B.",
    origem: "banco",
  },
  {
    id: "prf-rlm-027",
    materia: "rlm",
    topico: "Operações com conjuntos",
    enunciado: "Considere o conjunto M = {2, {3}, 5}. É correto afirmar que",
    alternativas: [
      "3 ∈ M.",
      "{2, 5} ∈ M.",
      "M tem exatamente 6 subconjuntos.",
      "{3} ∈ M e {{3}} ⊂ M.",
      "∅ ∈ M.",
    ],
    correta: 3,
    explicacao:
      "Os elementos de M são 2, o conjunto {3} e 5. Por isso, {3} ∈ M, e o conjunto que tem {3} como único elemento, {{3}}, está contido em M. O número 3 sozinho não é elemento de M; {2, 5} é subconjunto (⊂), não elemento; o vazio está contido em M, mas não pertence a ele; e, com 3 elementos, M tem 2³ = 8 subconjuntos.",
    origem: "banco",
  },
  {
    id: "prf-rlm-028",
    materia: "rlm",
    topico: "Problemas aritméticos, geométricos e matriciais",
    enunciado:
      "Um comboio de ajuda humanitária partiu com 360 cestas básicas. No primeiro ponto de apoio, entregou 1/4 das cestas e, no segundo, 2/3 das que restaram. Quantas cestas sobraram depois dessas duas entregas?",
    alternativas: [
      "30.",
      "180.",
      "90.",
      "120.",
      "210.",
    ],
    correta: 2,
    explicacao:
      "No primeiro ponto saíram 360 ÷ 4 = 90 cestas, restando 270. No segundo, saíram 2/3 de 270 = 180, restando 90. O erro mais comum é aplicar os 2/3 sobre o total (240), o que deixaria só 30 cestas: a segunda fração incide sobre o que restou, não sobre a carga inicial.",
    origem: "banco",
  },
  {
    id: "prf-rlm-029",
    materia: "rlm",
    topico: "Problemas aritméticos, geométricos e matriciais",
    enunciado:
      "Para contornar uma obra, os veículos deixam a rodovia no ponto A, seguem 600 m em linha reta até o ponto B, fazem uma curva de 90° e percorrem mais 800 m em linha reta até o ponto C, onde voltam à rodovia. Se o trecho da rodovia entre A e C é reto, quantos metros o desvio tem a mais que esse trecho?",
    alternativas: [
      "1.000 m.",
      "400 m.",
      "200 m.",
      "1.400 m.",
      "600 m.",
    ],
    correta: 1,
    explicacao:
      "O trecho reto AC é a hipotenusa do triângulo retângulo de catetos 600 m e 800 m: AC² = 360.000 + 640.000 = 1.000.000, logo AC = 1.000 m. O desvio mede 600 + 800 = 1.400 m, ou seja, 400 m a mais que o trecho reto da rodovia.",
    origem: "banco",
  },
  {
    id: "prf-rlm-030",
    materia: "rlm",
    topico: "Problemas aritméticos, geométricos e matriciais",
    enunciado:
      "Sejam A uma matriz 3 × 2, B uma matriz 2 × 4 e C uma matriz 4 × 3. Sobre o produto A × B × C, é correto afirmar que ele",
    alternativas: [
      "não está definido, pois A e C têm números de linhas diferentes.",
      "está definido e resulta numa matriz 2 × 4.",
      "está definido e resulta numa matriz 4 × 4.",
      "não está definido, pois B não é uma matriz quadrada.",
      "está definido e resulta numa matriz 3 × 3.",
    ],
    correta: 4,
    explicacao:
      "O produto exige que o número de colunas da primeira matriz seja igual ao de linhas da segunda. A × B: (3 × 2)(2 × 4) dá 3 × 4; depois, (3 × 4)(4 × 3) dá 3 × 3. O resultado tem as linhas de A e as colunas de C, e não é preciso que as matrizes sejam quadradas nem que A e C tenham o mesmo número de linhas.",
    origem: "banco",
  },
];
