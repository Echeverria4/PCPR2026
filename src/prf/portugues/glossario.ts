export interface TermoGlossario {
  termo: string;
  definicao: string;
}

/** Termos que aparecem nas lições e nos enunciados de prova, em ordem alfabética. */
export const GLOSSARIO: TermoGlossario[] = [
  { termo: "Adjunto adnominal", definicao: "Função do termo que acompanha um substantivo, determinando-o ou caracterizando-o: artigo, adjetivo, numeral, pronome adjetivo ou locução adjetiva (o **novo** agente **da base**)." },
  { termo: "Adjunto adverbial", definicao: "Função do termo que acrescenta uma circunstância ao verbo, ao adjetivo ou ao advérbio: tempo, lugar, modo, causa, intensidade (chegou **cedo**, **na rodovia**)." },
  { termo: "Antecedente", definicao: "O termo que o pronome relativo retoma: em 'o relatório **que** chegou', o antecedente de 'que' é 'relatório'." },
  { termo: "Aposto", definicao: "Termo que explica, resume ou especifica outro, em geral entre vírgulas: 'Brasília, **a capital**, recebeu o evento'." },
  { termo: "Complemento nominal", definicao: "Termo, sempre com preposição, que completa o sentido de um substantivo abstrato, adjetivo ou advérbio: 'respeito **às leis**', 'favorável **ao acordo**'." },
  { termo: "Concordância", definicao: "Ajuste de gênero e número (concordância nominal) ou de pessoa e número (concordância verbal) entre palavras que se relacionam." },
  { termo: "Conectivo", definicao: "Palavra que liga termos ou orações e não tem função sintática própria: preposições, conjunções e, com papel duplo, os pronomes relativos." },
  { termo: "Contração e combinação", definicao: "União da preposição com outra palavra. Na **contração** há perda de som (de + o = do; em + a = na); na **combinação** não há (a + o = ao)." },
  { termo: "Derivação imprópria", definicao: "Mudança de classe sem mudar a forma da palavra: o verbo vira substantivo com artigo (o **andar**), o adjetivo vira advérbio (falou **alto**)." },
  { termo: "Desinência", definicao: "Terminação que indica a flexão: '-s' de plural, '-a' de feminino, '-mos' de 1ª pessoa do plural (estuda**mos**)." },
  { termo: "Flexão", definicao: "Variação de forma para indicar gênero, número, pessoa, tempo, modo. As classes variáveis flexionam; as invariáveis, não." },
  { termo: "Forma nominal", definicao: "As três formas do verbo que podem funcionar como nomes: infinitivo (estudar), gerúndio (estudando) e particípio (estudado)." },
  { termo: "Locução", definicao: "Grupo de palavras com valor de uma só classe: adjetiva (de ouro = áureo), adverbial (de repente), prepositiva (a fim de), conjuntiva (visto que), verbal (vou estudar)." },
  { termo: "Modalizador", definicao: "Palavra ou expressão que revela a atitude de quem fala diante do que diz: certeza (certamente), dúvida (talvez), obrigação (deve), avaliação (felizmente)." },
  { termo: "Morfologia", definicao: "Parte da gramática que estuda a palavra isolada: estrutura, formação, flexão e classe." },
  { termo: "NGB", definicao: "Nomenclatura Gramatical Brasileira (1959): a lista oficial de termos e classificações que as gramáticas escolares e as bancas seguem." },
  { termo: "Núcleo", definicao: "A palavra principal de um termo: em 'a nova frota da base', o núcleo é 'frota'." },
  { termo: "Objeto direto e indireto", definicao: "Complementos do verbo transitivo: o direto vem sem preposição obrigatória (anotou **a placa**); o indireto, com ela (precisa **de apoio**)." },
  { termo: "Oração", definicao: "Enunciado organizado em torno de um verbo (ou locução verbal). Cada verbo marca, em regra, uma oração." },
  { termo: "Período", definicao: "Frase com uma oração (período simples) ou mais (período composto), da maiúscula ao ponto." },
  { termo: "Predicativo", definicao: "Termo que atribui característica ou estado ao sujeito ou ao objeto: 'O aluno é **estudioso**'; 'Julgaram o réu **culpado**'." },
  { termo: "Pronome adjetivo e pronome substantivo", definicao: "O pronome adjetivo acompanha o nome (**este** livro); o substantivo ocupa o lugar dele (**este** é meu)." },
  { termo: "Radical", definicao: "A parte da palavra que carrega o significado básico e se repete na família: **pedr**a, **pedr**eiro, **pedr**egulho." },
  { termo: "Regência", definicao: "Relação entre um termo que exige complemento (regente) e o complemento (regido), com ou sem preposição: 'assistir **ao** jogo', 'obedecer **às** regras'." },
  { termo: "Sintaxe", definicao: "Parte da gramática que estuda a função das palavras na frase e a relação entre termos e orações." },
  { termo: "Sujeito oculto (desinencial)", definicao: "Sujeito que não aparece escrito, mas é identificado pela desinência do verbo: '**Estudei** ontem' (eu)." },
  { termo: "Termo regente e termo regido", definicao: "O regente exige o complemento ('obediente'); o regido o completa ('às normas'). A preposição costuma ser escolhida pelo regente." },
  { termo: "Transitividade", definicao: "Se o verbo exige complemento: intransitivo (não exige), transitivo direto (sem preposição), indireto (com preposição) ou direto e indireto (os dois)." },
  { termo: "Verbo de ligação", definicao: "Verbo que não indica ação: liga o sujeito a uma característica ou estado (ser, estar, parecer, permanecer, ficar, continuar, andar com sentido de estar)." },
];
