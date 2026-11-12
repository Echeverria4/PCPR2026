import type { MapaAula } from "../tipos";

/** Português: um mapa por aula, na ordem do curso. */
export const MAPAS_PT: MapaAula[] = [
  {
    aula: "pt-01",
    centro: { titulo: "Som, acento e hífen", emoji: "🔤", sub: "Fonética e ortografia" },
    desenho: "livro",
    ramos: [
      { rotulo: "Sons", emoji: "🔊", cor: "azul", folhas: ["**Letra** se vê; **fonema** se ouve", "**Dígrafo**: duas letras, um som só (ch, lh, nh)", "**Ditongo** na mesma sílaba; **hiato** separa as vogais"] },
      { rotulo: "Regras gerais", emoji: "✍️", cor: "verde", folhas: ["**Proparoxítona**: todas levam acento", "**Oxítona**: a, e, o, em, ens", "**Paroxítona**: l, n, r, x, i, us, um, ão"] },
      { rotulo: "Regra do hiato", emoji: "🎯", cor: "ouro", folhas: ["I e U tônicos sozinhos: **saída**, **baú**", "Sem acento antes de **nh**: rainha", "Sem acento após ditongo em paroxítona: **feiura**"] },
      { rotulo: "Caiu ou ficou", emoji: "📜", cor: "roxo", folhas: ["Ficaram: **pôde**, pôr, têm, vêm", "Caíram: **ideia**, heroico, voo, leem, para", "Ditongo aberto só acentua em oxítona: **herói**"] },
      { rotulo: "Hífen", emoji: "➖", cor: "laranja", folhas: ["Letras **iguais** separam: micro-ondas", "Letras **diferentes** juntam: autoestrada", "Antes de **h**, hífen: super-homem", "Vogal + r ou s: **dobra** (antissocial)"] },
      { rotulo: "Expressões", emoji: "❓", cor: "rosa", folhas: ["**Por que**: pergunta; **porque**: explicação", "**Por quê**: fim de frase; **porquê**: substantivo", "**Há**: passado; a: futuro ou distância", "**Aonde**: com movimento; onde: lugar parado"] },
    ],
    macete: "Primeiro conte os sons e ache a sílaba forte; só depois aplique a regra do acento ou do hífen.",
    cuidado:
      "Terminar igual não basta: “anéis” é oxítona e “imóveis” é paroxítona. Só o hiato junta tonicidades diferentes: “juízes” e “açaí”.",
  },
  {
    aula: "pt-02",
    centro: { titulo: "Classes de palavras", emoji: "🧩", sub: "A função define a classe" },
    ramos: [
      { rotulo: "Variáveis", emoji: "🔁", cor: "azul", folhas: ["Variam: substantivo, adjetivo, artigo, numeral, pronome, verbo", "Não variam: **advérbio**, preposição, conjunção, interjeição"] },
      { rotulo: "Substantivo", emoji: "🏷️", cor: "verde", folhas: ["Núcleo dos termos; o resto **concorda** com ele", "Com artigo, vira substantivo: **o porquê**"] },
      { rotulo: "Plural composto", emoji: "➕", cor: "ouro", folhas: ["Nome e adjetivo **variam**: quartas-feiras", "Verbo e advérbio **ficam**: beija-flores, alto-falantes", "Com preposição, só o **primeiro**: pés de moleque"] },
      { rotulo: "Adjetivo", emoji: "🎨", cor: "roxo", folhas: ["Composto: só o **último** varia (verde-claras)", "Com substantivo, **nada** varia: amarelo-ouro", "**De relação** não aceita “muito”: nota mensal", "Trocar a ordem muda o sentido: **pobre homem**"] },
      { rotulo: "Advérbio", emoji: "⚙️", cor: "laranja", folhas: ["Modifica verbo, adjetivo ou advérbio; **não varia**", "“Bastantes viaturas”: junto de nome, é **pronome**"] },
      { rotulo: "Denotativas", emoji: "📍", cor: "rosa", folhas: ["**Até**, inclusive: inclusão; só, apenas: exclusão", "Aliás retifica; **eis** designa", "“Foi até o posto”: aqui é **preposição**"] },
    ],
    macete: "Pergunte o que a palavra faz naquela frase: o papel decide a classe, não o costume.",
    cuidado:
      "Evite “o mesmo” no lugar de “ele”: é falha de estilo cobrada em prova. O uso correto retoma um fato: “o mesmo ocorreu com a equipe”.",
  },
  {
    aula: "pt-03",
    centro: { titulo: "Preposição e conjunção", emoji: "🔗", sub: "Que relação a ligação cria?" },
    ramos: [
      { rotulo: "Preposição", emoji: "📌", cor: "azul", folhas: ["**Relacional**: exigida pela palavra (precisar de)", "**Nocional**: traz sentido (porta de madeira)", "“Para” indica finalidade, direção, tempo ou **ponto de vista**"] },
      { rotulo: "Coordenativas", emoji: "⚖️", cor: "verde", folhas: ["**Adversativas**: mas, porém, contudo, todavia, entretanto", "**Conclusivas**: logo, portanto; explicativas: pois, porque", "“Pois” após o verbo, entre vírgulas: **conclui**"] },
      { rotulo: "Causa e concessão", emoji: "🧱", cor: "ouro", folhas: ["**Causa**: porque, visto que, já que, como (início)", "**Concessão**: embora, ainda que, conquanto, mesmo que", "Concessão pede **subjuntivo**: embora tenha chovido"] },
      { rotulo: "Outras relações", emoji: "🧭", cor: "roxo", folhas: ["**Condição**: se, caso, desde que + subjuntivo", "**Tempo**: quando, assim que, desde que + indicativo", "**À medida que**: proporção; **na medida em que**: causa", "**Finalidade**: para que, a fim de que"] },
      { rotulo: "Integrantes", emoji: "🧲", cor: "laranja", folhas: ["**Que** e **se** abrem oração que completa", "Troca por “isso”: é **integrante**"] },
      { rotulo: "Mas × embora", emoji: "🔄", cor: "rosa", folhas: ["“Mas” abre o argumento **mais forte**", "“Embora” vai para o argumento **mais fraco**"] },
    ],
    macete: "Antes da lista decorada, faça a pergunta: que relação de sentido essa ligação cria?",
    cuidado:
      "A mesma palavra muda de valor: “como” é causa, comparação ou conformidade; “desde que” é tempo ou condição. Decida pelo sentido da frase.",
  },
  {
    aula: "pt-04",
    centro: { titulo: "Pronomes", emoji: "👉", sub: "Referência, forma e posição" },
    ramos: [
      { rotulo: "Demonstrativos", emoji: "👆", cor: "azul", folhas: ["No texto, **este** anuncia e **esse** retoma", "Em pares: este, o mais **próximo**; aquele, o distante", "“O” valendo “aquilo” também é **demonstrativo**"] },
      { rotulo: "Relativos", emoji: "🔁", cor: "verde", folhas: ["Preposição do verbo vem **antes**: de que gostamos", "**Cujo**: posse, sem artigo depois, concorda com o possuído", "**Onde** = em que, só para lugar"] },
      { rotulo: "Pessoais", emoji: "🙋", cor: "ouro", folhas: ["**O, a**: objeto direto; **lhe**: objeto indireto", "Entre mim e ti, em **reciprocidade**", "Final r, s, z: **lo**; som nasal: **no**"] },
      { rotulo: "Tratamento", emoji: "🎩", cor: "roxo", folhas: ["**Vossa** fala com a autoridade; **Sua** fala dela", "Verbo e possessivo na **3ª pessoa**", "Adjetivo concorda com o **sexo** da pessoa"] },
      { rotulo: "Colocação", emoji: "🧲", cor: "laranja", folhas: ["Negativa, relativo e subordinativa **atraem** o pronome", "**Proibido** começar período com pronome átono", "Nunca depois de **futuro** ou particípio"] },
      { rotulo: "Indefinidos", emoji: "❔", cor: "rosa", folhas: ["Bastantes provas: **muitas**; provas bastantes: suficientes", "Junto de verbo ou adjetivo, “bastante” **não varia**"] },
    ],
    macete: "Três perguntas: a que termo o pronome se refere, que forma ele toma e onde fica junto do verbo.",
    cuidado:
      "Ache o objeto antes de trocar por pronome: “Encontramos os colegas” vira “Encontramo-los”. “Encontramo-nos” já quer dizer outra coisa.",
  },
  {
    aula: "pt-05",
    centro: { titulo: "Tempos e modos", emoji: "⏳", sub: "Quando e como o fato ocorre" },
    desenho: "relogio",
    ramos: [
      { rotulo: "Modos", emoji: "🎭", cor: "azul", folhas: ["**Indicativo**: fato certo", "**Subjuntivo**: dúvida, hipótese, desejo", "**Imperativo**: ordem, pedido, conselho"] },
      { rotulo: "Pretéritos", emoji: "⏪", cor: "verde", folhas: ["**Perfeito**: fato concluído", "**Imperfeito**: hábito ou ação em curso", "**Mais-que-perfeito**: anterior a outro passado (tombara)"] },
      { rotulo: "Futuros", emoji: "⏩", cor: "ouro", folhas: ["**Futuro do presente**: fato que virá", "**Futuro do pretérito**: hipótese, polidez, dado não confirmado", "Se reduzisse, **evitaria**: correlação certa"] },
      { rotulo: "Formas nominais", emoji: "🧬", cor: "roxo", folhas: ["**Infinitivo** = substantivo; particípio = adjetivo", "**Gerúndio** = advérbio: tempo, causa, modo", "Ter e haver: **aceitado**; ser e estar: **aceito**"] },
      { rotulo: "Irregulares", emoji: "⚠️", cor: "laranja", folhas: ["Quando eu **vir** (ver); quando eu **vier** (vir)", "Derivados seguem a base: **mantiver**, dispuser", "Em -ear ganha **i**: passeio, freiam", "**Reaver** segue haver só onde há v"] },
      { rotulo: "Imperativo", emoji: "📢", cor: "rosa", folhas: ["Afirmativo de tu e vós: presente sem **s**", "Negativo: todo do **presente do subjuntivo**", "Não existe imperativo para **eu**"] },
    ],
    macete: "Troque por “fizer”: se couber, é futuro do subjuntivo (quando eu vir, quando eu fizer).",
    cuidado: "“Requerer” não segue “querer”: requeri, requereu, requeresse. Só o presente muda: requeiro, requeira.",
  },
  {
    aula: "pt-06",
    centro: { titulo: "Vozes verbais", emoji: "🔁", sub: "Quem faz e quem sofre" },
    ramos: [
      { rotulo: "Vozes", emoji: "🎬", cor: "azul", folhas: ["**Ativa**: sujeito pratica; **passiva**: sujeito sofre", "Reflexiva: em si; **recíproca**: uns nos outros", "“Levou um soco”: sentido passivo, voz **ativa**"] },
      { rotulo: "Passiva analítica", emoji: "🏗️", cor: "verde", folhas: ["**Ser + particípio**, que concorda com o sujeito", "Objeto direto vira **sujeito paciente**", "Sem objeto direto, **não há** passiva"] },
      { rotulo: "Passiva sintética", emoji: "⚡", cor: "ouro", folhas: ["Transitivo direto + **se**: fiscalizaram-se os caminhões", "Verbo concorda com o sujeito; sem **agente**"] },
      { rotulo: "Se indeterminador", emoji: "❓", cor: "roxo", folhas: ["Verbo **sem objeto direto** + se", "Fica no **singular**: precisa-se de agentes"] },
      { rotulo: "Correlação", emoji: "🔗", cor: "laranja", folhas: ["Se houvesse chuva, a pista **fecharia**", "Principal no pretérito: determinou que **permanecesse**", "Tempo composto: particípio **não varia**"] },
    ],
    macete: "Na reescrita para a passiva, o tempo do verbo passa inteiro para o “ser”.",
    cuidado: "“Haviam apreendido” vira “havia sido apreendida”, e não “foi apreendida”: a passiva mantém o tempo composto.",
  },
  {
    aula: "pt-07",
    centro: { titulo: "Análise sintática", emoji: "🔬", sub: "Verbo, sujeito, complemento, resto" },
    ramos: [
      { rotulo: "Sujeito", emoji: "👤", cor: "azul", folhas: ["Ponha em **ordem direta** antes de analisar", "Depois do verbo, ainda é **sujeito**: ocorreram acidentes", "**Indeterminado**: 3ª do plural ou verbo + se"] },
      { rotulo: "Sem sujeito", emoji: "🌧️", cor: "verde", folhas: ["**Fenômenos da natureza**: choveu", "**Haver** de existir; fazer de tempo", "Há vagas: **objeto**; existem vagas: sujeito"] },
      { rotulo: "Complementos", emoji: "🎯", cor: "ouro", folhas: ["**Objeto direto**: sem preposição exigida", "**Objeto indireto**: com preposição do verbo", "Preposicionado: com **quem** ou pronome tônico"] },
      { rotulo: "Termos do nome", emoji: "🏷️", cor: "roxo", folhas: ["**Complemento nominal**: alvo (fiscalização da carga)", "**Adjunto adnominal**: agente ou posse (da equipe)", "Nome **concreto**: sempre adjunto adnominal"] },
      { rotulo: "Predicado", emoji: "🧩", cor: "laranja", folhas: ["**Verbal**: o núcleo é o verbo", "**Nominal**: ligação + predicativo", "**Verbo-nominal**: ação + predicativo (saiu cansado)"] },
      { rotulo: "Aposto e vocativo", emoji: "📣", cor: "rosa", folhas: ["**Aposto** explica o termo: Ana, a perita", "**Vocativo** chama o ouvinte, entre vírgulas", "Cidade de Belém: aposto; clima de Belém: **adjunto**"] },
    ],
    macete: "Sempre na mesma ordem: verbo, sujeito, o que completa o verbo e, por último, o resto.",
    cuidado:
      "Termo antes do verbo nem sempre é sujeito, e termo com preposição nem sempre é objeto indireto. Pergunte o que o verbo exige.",
  },
  {
    aula: "pt-08",
    centro: { titulo: "Período composto", emoji: "🧱", sub: "Coordenada ou subordinada?" },
    ramos: [
      { rotulo: "Contar orações", emoji: "🔢", cor: "azul", folhas: ["Cada **verbo** é uma oração; locução conta um", "“Foi… que” de **realce** sai da conta"] },
      { rotulo: "Coordenadas", emoji: "➡️", cor: "verde", folhas: ["**Independentes**: aditiva, adversativa, alternativa", "Também **conclusiva** e explicativa"] },
      { rotulo: "Substantivas", emoji: "📦", cor: "ouro", folhas: ["Valem um substantivo: trocam por **isso**", "Desconfio de que: **objetiva indireta**", "Tenho receio de que: **completiva nominal**"] },
      { rotulo: "Adjetivas", emoji: "🎨", cor: "roxo", folhas: ["Começam por **pronome relativo**", "**Restritiva**, sem vírgula: parte do grupo", "**Explicativa**, com vírgula: o grupo todo"] },
      { rotulo: "Adverbiais", emoji: "🧭", cor: "laranja", folhas: ["Causa, condição, concessão, tempo, **finalidade**", "**Reduzida**: infinitivo, gerúndio ou particípio, sem conectivo", "Ao chegar vira **quando chegar**"] },
      { rotulo: "Se e como", emoji: "🃏", cor: "rosa", folhas: ["**Se**: apassivador, indeterminador, integrante, condicional", "**Como**: causa no início, comparação, conformidade", "Que relativo: troque pelo **antecedente** e analise"] },
    ],
    macete: "Pergunte se a oração vive sozinha (coordenada) ou faz o papel de um termo de outra (subordinada).",
    cuidado:
      "Pôr ou tirar a vírgula da oração adjetiva muda o sentido, mesmo com a frase correta. A prova pergunta qual sentido ficou.",
  },
  {
    aula: "pt-09",
    centro: { titulo: "Vírgula e pontuação", emoji: "✒️", sub: "Ordem direta não tem vírgula" },
    ramos: [
      { rotulo: "Nunca separe", emoji: "🚫", cor: "azul", folhas: ["**Sujeito** do verbo, mesmo se longo", "**Verbo** do complemento", "Nome do seu **complemento**"] },
      { rotulo: "Termo deslocado", emoji: "↪️", cor: "verde", folhas: ["Adjunto **longo** no início: vírgula obrigatória", "Adjunto **curto**, até duas palavras: facultativa", "Isolou no meio? Vírgula **em par**"] },
      { rotulo: "Conjunções", emoji: "🔗", cor: "ouro", folhas: ["**Porém** e portanto deslocados: entre vírgulas", "**Mas** não se desloca: abre a oração", "Vírgula antes do e: **sujeitos diferentes**"] },
      { rotulo: "Termos isolados", emoji: "🧷", cor: "roxo", folhas: ["**Aposto** explicativo e vocativo", "**Adjetiva explicativa** e oração intercalada", "Verbo omitido: a outra, **no trevo**"] },
      { rotulo: "Outros sinais", emoji: "⁉️", cor: "laranja", folhas: ["**Ponto e vírgula**: itens com vírgula, incisos de lei", "**Dois-pontos**: explicação, citação, enumeração", "**Aspas**: citação, ironia, estrangeirismo", "**Parênteses**: dado acessório; travessão: ênfase"] },
    ],
    macete: "Na ordem direta não há vírgula; ela só aparece quando um termo sai do lugar ou se intercala.",
    cuidado:
      "Trocar um sinal por outro só preserva a frase se a relação de sentido continuar a mesma. Faça a troca na cabeça antes de responder.",
  },
  {
    aula: "pt-10",
    centro: { titulo: "Concordância", emoji: "🤝", sub: "Ache o núcleo primeiro" },
    desenho: "balanca",
    ramos: [
      { rotulo: "Regra geral", emoji: "🎯", cor: "azul", folhas: ["Verbo segue o **núcleo**: o ruído dos caminhões perturba", "Mais de **um** fiscal assinou", "Composto antes do verbo: **plural**"] },
      { rotulo: "Haver e fazer", emoji: "🔒", cor: "verde", folhas: ["Existir ou tempo: **singular** (deve haver)", "**Existir** tem sujeito: devem existir barreiras", "Auxiliar concorda: haviam sido **instaladas**"] },
      { rotulo: "Que e quem", emoji: "👥", cor: "ouro", folhas: ["Fui eu **que assinei**", "Fui eu **quem assinou** ou quem assinei"] },
      { rotulo: "Verbo ser", emoji: "🕐", cor: "roxo", folhas: ["Hora e distância: segue o **número**", "Pouco, muito, suficiente: **singular**", "Data: hoje **é** 10 ou hoje **são** 10"] },
      { rotulo: "Concordância nominal", emoji: "🏷️", cor: "laranja", folhas: ["Adjetivo depois: o **mais próximo** ou todos", "Nunca só com o **mais distante**", "Proibido entrada; proibida **a** entrada"] },
      { rotulo: "Variam ou não", emoji: "🔁", cor: "rosa", folhas: ["Variam: **anexo**, quite, obrigado, mesmo, próprio", "Fixos: **em anexo**, menos, azul-marinho", "Meio e bastante variam só **antes de nome**"] },
    ],
    macete: "Primeiro ache o núcleo; depois confira se a frase cai num caso especial.",
    cuidado:
      "“Haver” só fica no singular no sentido de existir ou de tempo passado. Como auxiliar, concorda: “haviam sido instaladas” está certo.",
  },
  {
    aula: "pt-11",
    centro: { titulo: "Regência e crase", emoji: "🧲", sub: "A preposição que se pede" },
    ramos: [
      { rotulo: "Tipos de verbo", emoji: "🔧", cor: "azul", folhas: ["**Direto**: sem preposição; **indireto**: com", "Regências diferentes: entrei **em** casa e **dela** saí", "Preferir uma coisa **a** outra, sem “do que”"] },
      { rotulo: "Dois sentidos", emoji: "🔀", cor: "verde", folhas: ["**Assistir**: ajudar (direto) ou ver (a)", "**Aspirar**: inalar ou desejar (a)", "**Visar**: mirar, rubricar ou ter como objetivo (a)"] },
      { rotulo: "Com relativo", emoji: "🔁", cor: "ouro", folhas: ["Preposição **antes** do relativo: a que aspira", "Informar **alguém de** algo, ou algo a alguém", "Nomes: apto **a**, passível **de**, compatível com"] },
      { rotulo: "Crase", emoji: "➰", cor: "roxo", folhas: ["**Preposição a + artigo a**", "Troque por masculino: deu **ao**? Tem crase", "Volta **da**, vai à; volta de, vai a"] },
      { rotulo: "Crase proibida", emoji: "🚫", cor: "laranja", folhas: ["Antes de **masculino**, verbo, pronome pessoal", "Antes de **uma**, salvo hora exata", "Casa e terra **sem especificação**"] },
      { rotulo: "Obrigatória ou não", emoji: "✅", cor: "rosa", folhas: ["Locução feminina: **à noite**, à medida que", "Hora exata: **à uma hora**", "Facultativa: possessivo, nome de mulher, **até**"] },
    ],
    macete: "Crase só existe se a palavra de antes pede “a” e a de depois aceita o artigo “a”.",
    cuidado: "“Uma” só recebe crase na hora exata: “saiu à uma hora”. Fora da ideia de hora, a forma é “a uma unidade”.",
  },
  {
    aula: "pt-12",
    centro: { titulo: "Coesão e coerência", emoji: "🧵", sub: "Ligação × lógica" },
    desenho: "documento",
    ramos: [
      { rotulo: "Retomar e anunciar", emoji: "⏮️", cor: "azul", folhas: ["**Anáfora** retoma o que veio: isso", "**Catáfora** anuncia o que vem: isto", "**Dêitico**: aqui e amanhã apontam a situação"] },
      { rotulo: "Este, esse, aquele", emoji: "👉", cor: "verde", folhas: ["**Este** anuncia; **esse** retoma", "Em pares: este é o **último** citado", "**Aquele** é o primeiro, o mais distante"] },
      { rotulo: "Outros recursos", emoji: "🧰", cor: "ouro", folhas: ["**Hiperônimo**: a carreta, depois o veículo", "**Nominalização**: fiscalizaram, depois a fiscalização", "**Elipse**: termo omitido que o leitor recupera", "Sigla: **por extenso** primeiro, depois só a sigla"] },
      { rotulo: "Coesão sequencial", emoji: "🔗", cor: "roxo", folhas: ["**Conectivos** mostram oposição, causa, conclusão", "**Justaposição**: sem conectivo, relação implícita"] },
      { rotulo: "Coerência", emoji: "🧠", cor: "laranja", folhas: ["**Lógica** entre ideias e com a realidade", "**Contradição** gera incoerência", "Mudar o sentido **não é** quebrar a coerência"] },
    ],
    macete: "Coesão é a costura do texto; coerência é a lógica. Dá para costurar bem um texto sem sentido.",
    cuidado: "Leia o comando da reescrita: “manter o sentido”, “manter a coerência” e “manter a correção” são pedidos diferentes.",
  },
  {
    aula: "pt-13",
    centro: { titulo: "Sentido das palavras", emoji: "💬", sub: "O contexto decide" },
    ramos: [
      { rotulo: "Denotação e conotação", emoji: "📖", cor: "azul", folhas: ["**Denotação**: sentido do dicionário", "**Conotação**: figurado (uma chuva de críticas)", "**Campo semântico**: radar, multa, placa, pedágio"] },
      { rotulo: "Sinônimos e antônimos", emoji: "🔄", cor: "verde", folhas: ["Sinônimo vale **em certo contexto**", "Antônimo pode nascer na frase: **não grite, respire**", "**Hiperônimo**: veículo; hipônimo: carreta"] },
      { rotulo: "Homônimos", emoji: "🪞", cor: "ouro", folhas: ["**Homógrafos**: mesma grafia (acordo, acordo)", "**Homófonos**: mesmo som (sessão, seção)", "**Perfeitos**: grafia e som iguais (cedo)"] },
      { rotulo: "Parônimos", emoji: "⚠️", cor: "roxo", folhas: ["**Eminente**: elevado; **iminente**: prestes a ocorrer", "**Mandado**: ordem; mandato: procuração"] },
      { rotulo: "Pares de prova", emoji: "🎯", cor: "laranja", folhas: ["**Deferir**: conceder; diferir: adiar", "**Ratificar** confirma; retificar corrige", "**Infligir** pena; infringir a lei", "**Tráfego**: fluxo; tráfico: comércio ilegal"] },
      { rotulo: "Duplo sentido", emoji: "🌀", cor: "rosa", folhas: ["**Polissemia**: vários sentidos de uma palavra", "**Ambiguidade**: dupla leitura da palavra ou da frase", "“Seu” e gerúndio são **causas comuns**"] },
    ],
    macete: "Nunca julgue a palavra sozinha: leia a frase inteira com a troca antes de aceitar.",
    cuidado: "Sinônimo de dicionário pode falhar no texto: “marcar” serve para consulta e para gol, mas “agendar” não serve para gol.",
  },
  {
    aula: "pt-14",
    centro: { titulo: "Tipos de texto", emoji: "📚", sub: "Qual tipo predomina?" },
    desenho: "livro",
    ramos: [
      { rotulo: "Narrar e descrever", emoji: "🎞️", cor: "azul", folhas: ["**Narrativo**: fatos em sequência, como um filme", "**Descritivo**: retrato sem tempo, como uma foto", "Narração: pretérito perfeito; descrição: **imperfeito**"] },
      { rotulo: "Injuntivo", emoji: "📋", cor: "verde", folhas: ["Instrui ou ordena: **imperativo** ou infinitivo", "Leis, contratos, manuais e **receitas**"] },
      { rotulo: "Dissertativo", emoji: "🗣️", cor: "ouro", folhas: ["**Expositivo**: explica sem tomar partido", "**Argumentativo**: defende tese para convencer", "Tese, argumentos, conclusão; **tópico frasal** resume"] },
      { rotulo: "Gênero", emoji: "📰", cor: "roxo", folhas: ["**Gênero**: forma concreta (notícia, crônica, relatório)", "Tipos são **poucos**; gêneros são muitos"] },
      { rotulo: "Discursos", emoji: "💬", cor: "laranja", folhas: ["**Direto**: palavras exatas, com travessão ou aspas", "**Indireto**: o narrador conta, em geral com “que”", "**Indireto livre**: vozes misturadas, sem marca", "Do direto ao indireto: hoje vira **naquele dia**"] },
      { rotulo: "Narrador", emoji: "👁️", cor: "rosa", folhas: ["**1ª pessoa**: participa da história", "**3ª pessoa**: observa de fora", "**Onisciente**: sabe até os pensamentos"] },
    ],
    macete: "Filme é narração, foto é descrição, ordem é injunção; quem explica expõe, quem convence argumenta.",
    cuidado:
      "Um modalizador como “infelizmente” não transforma exposição em argumentação: o tipo depende da finalidade do texto.",
  },
  {
    aula: "pt-15",
    centro: { titulo: "Redação oficial", emoji: "📄", sub: "Manual da Presidência, 3ª edição" },
    desenho: "documento",
    ramos: [
      { rotulo: "Atributos", emoji: "✨", cor: "azul", folhas: ["**Clareza**, precisão, objetividade e concisão", "**Impessoalidade**: fala o serviço público", "Formalidade, padronização e **norma padrão**"] },
      { rotulo: "Tratamento", emoji: "🎩", cor: "verde", folhas: ["Verbo e possessivo na **3ª pessoa**: seu", "**Vossa** com a pessoa; **Sua** sobre ela", "Abolidos: **Digníssimo** e Ilustríssimo; doutor é título"] },
      { rotulo: "Decreto 9.758/2019", emoji: "⚖️", cor: "ouro", folhas: ["Agente público federal: só **senhor**", "Proíbe Vossa Excelência, Vossa Senhoria e **doutor**", "Não vale para autoridade **estrangeira**"] },
      { rotulo: "Vocativo e fecho", emoji: "✉️", cor: "roxo", folhas: ["**Excelentíssimo** só para chefes de Poder", "Demais: **Senhor** + cargo (Senhor Senador)", "**Respeitosamente**: hierarquia superior", "**Atenciosamente**: mesma hierarquia ou inferior"] },
      { rotulo: "Padrão ofício", emoji: "📑", cor: "laranja", folhas: ["Aviso e memorando **viraram ofício**", "Brasília, 5 de março de 2026 com **ponto-final**", "Parágrafos numerados só com **3 ou mais**", "Margens: esquerda **3 cm**, direita 1,5 cm"] },
      { rotulo: "Expedientes", emoji: "📨", cor: "rosa", folhas: ["**Exposição de motivos**: de Ministério à Presidência", "**Mensagem**: Executivo ao Legislativo", "E-mail original só com **certificação digital**"] },
    ],
    macete: "Com agente público federal, o Decreto 9.758 manda usar só “senhor”; o resto segue o Manual.",
    cuidado:
      "Veja qual regra a questão pede. “Segundo o Manual”: vale Vossa Excelência e Vossa Senhoria. “Segundo o Decreto 9.758/2019”, com agente público federal: só “senhor”.",
  },
  {
    aula: "pt-16",
    centro: { titulo: "Compreender e interpretar", emoji: "🔎", sub: "Vale o que o texto permite" },
    desenho: "cerebro",
    ramos: [
      { rotulo: "Como ler", emoji: "👓", cor: "azul", folhas: ["Leia **inteiro**; depois marque a ideia de cada parágrafo", "Ideia central: **introdução** e conclusão"] },
      { rotulo: "Compreender", emoji: "📌", cor: "verde", folhas: ["**Recorrência**: está escrito, com outras palavras", "Procure a **paráfrase**, a frase equivalente"] },
      { rotulo: "Interpretar", emoji: "💡", cor: "ouro", folhas: ["**Inferência**: deduzir pelas pistas do texto", "**Pressuposto**: vem nas palavras (parou de fumar)", "**Subentendido**: insinuação que se pode negar"] },
      { rotulo: "Armadilhas", emoji: "🪤", cor: "roxo", folhas: ["**Extrapolação**: vai além do texto", "**Redução**: corta parte essencial", "**Opinião acrescentada**: avaliação que o autor não fez", "**Tangenciamento**: parece o tema, mas é outro"] },
      { rotulo: "Contradição", emoji: "↔️", cor: "laranja", folhas: ["Diz o **contrário** do texto", "Ou diz **outra coisa** no lugar"] },
    ],
    macete: "Compreender é achar o que está escrito; interpretar é deduzir o que não está, mas pode ser concluído.",
    cuidado:
      "Uma afirmação pode ser verdade no mundo e estar errada na questão: vale o que o texto permite concluir, não o que você já sabe.",
  },
];
