import type { SubjectId } from "../lib/types";

// Pontos que as aulas do curso cobrem e que os resumos oficiais não traziam.
// Texto próprio (nada copiado do material); erros conhecidos do material corrigidos.
export interface ComplementoCurso {
  titulo: string;
  texto: string;
  exemplos?: string[];
  aula: string;
}

export const COMPLEMENTOS_CURSO: Partial<Record<SubjectId, ComplementoCurso[]>> = {
  pt: [
    {
      titulo: "Denotação × conotação",
      aula: "Aula 03 — Semântica",
      texto:
        "Denotação é o sentido literal, de dicionário, objetivo. Conotação é o sentido figurado, que nasce do contexto e carrega emoção, juízo ou valor.\n\nTextos técnicos, científicos, jurídicos e notícias tendem à denotação; poemas, crônicas e publicidade exploram a conotação. Quando a FGV pergunta o sentido de uma palavra \"no texto\", leia a frase inteira: o sentido de dicionário pode não ser o usado ali.",
      exemplos: [
        "\"A pedra rolou da encosta\" — pedra no sentido literal (denotação).",
        "\"Ele tem um coração de pedra\" — pedra = insensível (conotação).",
        "\"O preço do combustível subiu\" × \"Aquela vitória subiu à cabeça dele\".",
      ],
    },
    {
      titulo: "Homônimos, parônimos e pares que confundem",
      aula: "Aulas 03 e 04 — Semântica e Ortografia",
      texto:
        "Homônimos têm som e/ou grafia iguais, mas sentidos diferentes. Homógrafos: mesma grafia, som diferente (o colher [ê], verbo × a colher [é], talher). Homófonos: mesmo som, grafia diferente (cela/sela, concerto/conserto, cessão/seção/sessão). Perfeitos: mesma grafia e mesmo som (são, verbo × são, sadio).\n\nParônimos são parecidos, mas não iguais: descrição/discrição, eminente/iminente, ratificar/retificar, flagrante/fragrante, mandato/mandado.\n\nSímbolos de unidades (km, m, kg, h, min, L) são invariáveis: não têm plural nem ponto e ficam separados do número por espaço — 10 km, 2 h, 5 kg. Abreviaturas comuns levam ponto e podem ir ao plural (pág./págs., Sr./Srs.).\n\nDupla grafia aceita: catorze/quatorze, cotidiano/quotidiano, louro/loiro, assobiar/assoviar.",
      exemplos: [
        "\"a fim de\" = finalidade × \"afim\" = afinidade (\"áreas afins\").",
        "\"acerca de\" = sobre × \"há cerca de\" = faz aproximadamente (\"há cerca de dez anos\").",
        "\"senão\" = caso contrário / a não ser × \"se não\" = condição (\"se não chover, vamos\").",
        "\"aonde\" só com verbo de movimento (\"aonde você vai?\") × \"onde\" para lugar fixo.",
        "\"tampouco\" = também não × \"tão pouco\" = muito pouco.",
        "\"ao invés de\" = ao contrário de (só para opostos) × \"em vez de\" = no lugar de (serve sempre).",
      ],
    },
    {
      titulo: "Fatores de textualidade e coesão referencial",
      aula: "Aula 02 — Coesão textual",
      texto:
        "Além da coesão (amarração gramatical das partes) e da coerência (sentido lógico do todo), o curso cobra os demais fatores de textualidade:\n\n• Intencionalidade — o propósito do autor ao produzir o texto.\n• Aceitabilidade — a disposição do leitor de receber aquilo como texto útil e coerente.\n• Situacionalidade — a adequação do texto à situação de comunicação.\n• Informatividade — o grau de novidade: nem tudo previsível, nem tudo novo demais.\n• Intertextualidade — o diálogo com outros textos (citação, paródia, paráfrase, alusão).\n\nNa coesão referencial: anáfora retoma algo que já apareceu; catáfora antecipa algo que ainda vai aparecer; elipse omite um termo que o contexto recupera.",
      exemplos: [
        "Anáfora: \"Os peritos chegaram. Eles isolaram o local.\" (eles → os peritos).",
        "Catáfora: \"Só peço isto: que você revise a lei seca.\" (isto → o que vem depois).",
        "Elipse: \"João foi ao fórum; Maria, à delegacia.\" (omitiu-se \"foi\").",
      ],
    },
    {
      titulo: "Figuras de linguagem que mais confundem",
      aula: "Aula 03 — Semântica",
      texto:
        "Metáfora, metonímia, hipérbole, eufemismo e ironia já estão no resumo oficial. Abaixo, as que o curso acrescenta e que a banca gosta de misturar nas alternativas.",
      exemplos: [
        "Antítese — ideias opostas lado a lado: \"riso e choro no mesmo dia\".",
        "Paradoxo (oxímoro) — opostos fundidos numa ideia aparentemente absurda: \"um silêncio ensurdecedor\".",
        "Catacrese — metáfora gasta, usada por falta de palavra própria: \"pé da mesa\", \"braço da cadeira\".",
        "Sinestesia — mistura de sentidos: \"voz doce\", \"cor gritante\".",
        "Gradação — sequência crescente ou decrescente: \"lutou, sofreu, venceu\".",
        "Silepse — concordância com a ideia, não com a palavra: \"Vossa Excelência está cansado\" (gênero); \"a turma chegou; estavam exaustos\" (número); \"os brasileiros somos otimistas\" (pessoa).",
        "Hipérbato — inversão da ordem direta: \"Ouviram do Ipiranga as margens plácidas…\".",
        "Anacoluto — termo solto, que fica sem função sintática: \"Eu, parece que ninguém me escuta\".",
        "Assíndeto (sem conectivo: \"vim, vi, venci\") × polissíndeto (conectivo repetido: \"e corre, e grita, e chora\").",
        "Aliteração (repetição de consoantes) × assonância (repetição de vogais).",
        "Apóstrofe — chamamento, invocação: \"Deus, ó Deus, onde estás?\".",
        "Perífrase — expressão no lugar do nome: \"a Cidade Maravilhosa\" (Rio), \"o Rei do Futebol\" (Pelé).",
        "Onomatopeia — imita um som: \"tique-taque\", \"toc-toc\".",
        "Prosopopeia (personificação) — dá traços humanos ao que não é humano: \"o vento sussurrava\".",
      ],
    },
    {
      titulo: "Tipos de sujeito",
      aula: "Aula 07 e bônus — Funções sintáticas",
      texto:
        "• Simples (um núcleo) e composto (dois ou mais núcleos).\n• Oculto (desinencial, elíptico): não aparece, mas a terminação do verbo o revela.\n• Indeterminado: existe, mas não se quer ou não se pode identificar. Duas formas: verbo na 3ª pessoa do plural sem referente no texto, ou verbo na 3ª do singular + \"se\" com verbo transitivo indireto, intransitivo ou de ligação.\n• Oracional: o sujeito é uma oração inteira.\n• Inexistente (oração sem sujeito): haver = existir ou tempo passado, fenômenos da natureza, fazer/ser indicando tempo. O verbo fica na 3ª do singular — exceto \"ser\", que concorda com o numeral (\"são duas horas\").\n• Posposto: o sujeito vem depois do verbo, e o verbo concorda com ele mesmo assim.",
      exemplos: [
        "Oculto: \"Saímos cedo.\" (nós).",
        "Indeterminado: \"Roubaram meu carro.\" / \"Precisa-se de agentes.\"",
        "Oracional: \"É necessário [que todos compareçam].\"",
        "Inexistente: \"Há provas suficientes.\" / \"Faz dez anos.\" (nunca \"fazem\") / \"Choveu.\"",
        "Posposto: \"Chegaram as provas do concurso.\" / \"Faltam três dias.\"",
      ],
    },
    {
      titulo: "Predicado, transitividade e predicativo",
      aula: "Aula 07 e bônus — Funções sintáticas",
      texto:
        "• Predicado verbal: o núcleo é um verbo de ação (significativo).\n• Predicado nominal: o núcleo é o predicativo, ligado ao sujeito por verbo de ligação.\n• Predicado verbo-nominal: dois núcleos — um verbo significativo e um predicativo (do sujeito ou do objeto).\n\nAtenção: o predicativo NÃO depende de verbo de ligação. No predicado verbo-nominal ele aparece com verbo de ação (\"chegou cansado\"). Algumas apostilas afirmam o contrário — está errado.\n\nTransitividade: VTD (complemento sem preposição obrigatória), VTI (com preposição), VTDI (os dois), intransitivo (sentido completo).\n\nObjeto direto preposicionado: complemento de VTD que recebe uma preposição não exigida pelo verbo — com nomes de Deus, com pronome oblíquo tônico ou com sentido partitivo.",
      exemplos: [
        "Verbal: \"O perito analisou o local.\"",
        "Nominal: \"O perito estava cansado.\"",
        "Verbo-nominal (predicativo do sujeito): \"O perito chegou cansado.\"",
        "Verbo-nominal (predicativo do objeto): \"O juiz considerou o réu culpado.\"",
        "OD preposicionado: \"Amar a Deus.\" / \"Não convidou a mim.\" / \"Bebeu do vinho.\"",
      ],
    },
    {
      titulo: "\"Se\" apassivador × índice de indeterminação; transformação de voz",
      aula: "Aula 07 e bônus — Funções sintáticas",
      texto:
        "• Partícula apassivadora: VTD (ou VTDI) + se. É voz passiva sintética; o termo é SUJEITO e o verbo concorda com ele.\n• Índice de indeterminação do sujeito: VTI, intransitivo ou de ligação + se. O verbo fica SEMPRE no singular.\n\nTeste rápido: tente passar para a passiva com \"ser\". Se der certo (\"testemunhas são procuradas\"), o \"se\" é apassivador e o verbo concorda.\n\nTransformação de voz (ativa → passiva analítica): o objeto direto vira sujeito, o sujeito vira agente da passiva, e o auxiliar \"ser\" fica no mesmo tempo e modo do verbo original. Só verbos com objeto direto vão para a passiva.",
      exemplos: [
        "\"Vendem-se casas.\" = casas são vendidas (apassivadora, plural).",
        "\"Procuram-se testemunhas.\" (apassivadora, plural).",
        "\"Precisa-se de testemunhas.\" (indeterminação: VTI, singular).",
        "\"Vive-se bem aqui.\" (indeterminação: intransitivo).",
        "\"A polícia prendeu o suspeito\" → \"O suspeito foi preso pela polícia\" (prendeu → foi preso; prenderá → será preso).",
      ],
    },
    {
      titulo: "Orações reduzidas",
      aula: "Aula 08 — Orações",
      texto:
        "Oração reduzida é a subordinada sem conectivo (conjunção ou pronome relativo), com o verbo numa forma nominal: infinitivo, gerúndio ou particípio.\n\nPara classificar, \"desenvolva\": troque a forma nominal por conectivo + verbo conjugado. A FGV costuma perguntar o valor semântico — o mesmo gerúndio pode ser temporal, causal, condicional ou concessivo, conforme o contexto.",
      exemplos: [
        "\"Terminada a perícia, o local foi liberado.\" → Quando a perícia terminou (temporal, reduzida de particípio).",
        "\"Saindo cedo, chegaremos a tempo.\" → Se sairmos cedo (condicional, reduzida de gerúndio).",
        "\"Por estar cansado, saiu cedo.\" → Como estava cansado (causal, reduzida de infinitivo).",
        "\"É preciso estudar todos os dias.\" → É preciso que se estude (substantiva subjetiva, reduzida de infinitivo).",
        "\"Vi homens carregando caixas.\" → que carregavam caixas (adjetiva, reduzida de gerúndio).",
      ],
    },
    {
      titulo: "Colocação pronominal: particípio, futuro, gerúndio e infinitivo",
      aula: "Aula 06 — Pronomes",
      texto:
        "• Particípio nunca recebe pronome depois dele. Na locução com particípio, o pronome fica junto do auxiliar.\n• Futuro do presente e do pretérito não admitem ênclise: sem palavra atrativa, usa-se mesóclise; com atrativo, próclise.\n• Gerúndio pede ênclise; com a preposição \"em\" antes, próclise.\n• Infinitivo não flexionado admite próclise ou ênclise, mesmo com palavra atrativa.\n• Na norma-padrão, não se começa frase com pronome oblíquo átono.",
      exemplos: [
        "\"Tinha-se esforçado\" ou \"Não se tinha esforçado\" — nunca \"tinha esforçado-se\".",
        "\"Far-se-á a perícia.\" / \"Não se fará a perícia.\" — nunca \"fará-se\".",
        "\"Entregando-lhe o laudo, saiu.\" / \"Em se tratando de prova, atenção.\"",
        "\"Para não o ver\" ou \"para não vê-lo\" — as duas estão certas.",
        "\"Me disseram\" (coloquial) → \"Disseram-me\" (norma-padrão).",
      ],
    },
  ],
  ti: [
    {
      titulo: "Modos de transmissão e equipamentos de rede",
      aula: "Aula 09 — Redes de computadores",
      texto:
        "Modos de transmissão:\n• Simplex — um sentido só, sempre (rádio FM, TV aberta).\n• Half-duplex — os dois sentidos, mas um de cada vez (rádio comunicador, \"câmbio\").\n• Full-duplex — os dois sentidos ao mesmo tempo (telefone, chamada de vídeo).\n\nEquipamentos:\n• Modem (modulador/demodulador) — converte o sinal digital do computador no sinal da linha (telefone, cabo, fibra) e vice-versa.\n• Access point (ponto de acesso) — liga os dispositivos sem fio a uma rede cabeada, ampliando o Wi-Fi.\n• Hub — repete o que recebe para todas as portas.\n• Switch — entrega só para a porta de destino (pelo endereço MAC).\n• Roteador — interliga redes diferentes e escolhe o caminho (pelo endereço IP).",
    },
    {
      titulo: "PowerPoint: arquivos, apresentação, slide mestre",
      aula: "Aula 03 — Microsoft PowerPoint",
      texto:
        "Formatos: .pptx (apresentação padrão), .ppsx (abre direto no modo apresentação), .potx (modelo), .ppt (formato antigo, 97-2003). No LibreOffice Impress o padrão é .odp.\n\nAtalhos: F5 inicia do primeiro slide; Shift+F5 inicia do slide atual; Esc encerra; Ctrl+M insere novo slide.\n\nModos de exibição: Normal (edição), Estrutura de Tópicos, Classificação de Slides (miniaturas, bom para reordenar), Anotações, Modo de Leitura e Apresentação de Slides (com o Modo do Apresentador, que mostra notas e o próximo slide só para quem apresenta).\n\nSlide Mestre: o slide-modelo que define layout, fontes, cores, logotipo e espaços reservados de todos os slides — mudou o mestre, mudam todos.\n\nTransição × animação: transição é o efeito na passagem de um slide para outro; animação é o efeito num objeto dentro do slide (entrada, ênfase, saída e trajetória).",
    },
    {
      titulo: "Excel: ordem das operações e referências",
      aula: "Aula 02 — Microsoft Excel",
      texto:
        "Ordem de cálculo: ( ) → sinal negativo → % → ^ → * e / → + e − → & (concatenação) → comparações (=, <, >). Operadores de mesma prioridade são resolvidos da esquerda para a direita.\n\nOperadores de referência: \":\" é intervalo (A1:A4 = A1, A2, A3 e A4); \";\" é união (A1;A4 = só A1 e A4).\n\nReferências:\n• Relativa (A1) — muda quando a fórmula é copiada.\n• Absoluta ($A$1) — não muda.\n• Mista ($A1 trava a coluna; A$1 trava a linha).\nF4 alterna entre elas. Outra planilha: Planilha2!A1 no Excel; no Calc, Planilha2.A1.",
      exemplos: [
        "=2+3*2^2 → 2+3*4 → 14.",
        "=(2+3)*2 → 10. / =10/2*5 → 25 (esquerda para a direita).",
        "No Excel, =-2^2 dá 4: o sinal negativo é aplicado antes da potência.",
        "=SOMA(A1:A3;C1) soma 4 células.",
        "Em B2, =A1*$C$1 copiada para C3 vira =B2*$C$1.",
        "=$A1 copiada uma coluna à direita e uma linha abaixo vira =$A2.",
      ],
    },
  ],
  for: [
    {
      titulo: "Traumatologia: instrumentos e lesões",
      aula: "Aulas 02 e 03 — Traumatologia",
      texto:
        "A classificação mecânica segue o modo de ação do instrumento:\n\n• Perfurante (ponta, pressão num ponto) → lesão punctória: agulha, prego, furador de gelo.\n• Cortante (gume, deslizamento) → lesão incisa: navalha, bisturi. Bordas regulares, mais longa que profunda, com \"cauda\" no fim do corte.\n• Contundente (superfície, pressão ou choque) → lesão contusa: soco, pedra, queda. Escoriação, equimose, hematoma, ferida de bordas irregulares.\n• Perfurocortante (ponta + gume) → lesão perfuroincisa: faca, punhal.\n• Cortocontundente (gume + peso) → lesão cortocontusa: machado, foice, facão, dentes.\n• Perfurocontundente (ponta romba + pressão) → lesão perfurocontusa: projétil de arma de fogo.",
      exemplos: [
        "Faca = perfurocortante. Machado = cortocontundente. Projétil = perfurocontundente.",
        "Navalha só desliza, não perfura: cortante → incisa.",
      ],
    },
    {
      titulo: "Energias físicas e químicas",
      aula: "Aula 06 — Energias físicas e químicas",
      texto:
        "Térmica:\n• Calor localizado: queimaduras de 1º grau (eritema), 2º (bolhas/flictenas), 3º (escara, necrose de toda a pele), 4º (carbonização).\n• Calor difuso: intermação (calor em ambiente fechado e mal ventilado) × insolação (sol, local aberto).\n• Frio: geladuras, da palidez/isquemia do 1º grau até bolhas, necrose e gangrena nos graus seguintes.\n\nElétrica:\n• Eletricidade artificial (industrial) → eletroplessão. Marca elétrica de Jellinek no ponto de entrada: endurecida, acinzentada, indolor.\n• Eletricidade natural (raio) → fulguração quando a vítima sobrevive; fulminação quando morre. Sinal de Lichtenberg: desenho arborescente (ramificado) na pele, de origem vascular, que some em horas (até cerca de 48 h); é próprio da eletricidade natural.\n\nBarométrica (baropatias): mal dos caixões — descompressão rápida de mergulhadores ou trabalhadores em ambiente pressurizado; o nitrogênio forma bolhas no sangue (embolia gasosa). Mal das montanhas — baixa pressão em altitude.\n\nQuímica: cáusticos coagulantes (desidratam e formam escaras secas e duras — em geral ácidos) × liquefacientes (amolecem os tecidos, escaras úmidas — em geral álcalis, como a soda cáustica). Venenos: substâncias que, mesmo em pequena dose, lesam a saúde ou matam. Pistas no cadáver: sangue e livores vermelho-vivos (monóxido de carbono, cianeto); cheiro de amêndoas amargas (cianeto) ou de alho (arsênio, que também retarda a putrefação). Chumbinho (aldicarbe, um carbamato): salivação, suor e lacrimação excessivos, pupilas puntiformes (miose), cogumelo de espuma na boca e no nariz, grânulos escuros no estômago. A confirmação vem sempre do exame toxicológico.",
    },
    {
      titulo: "Tanatologia: tempo de morte e fenômenos cadavéricos",
      aula: "Aula 07 — Tanatologia",
      texto:
        "Cronotanatognose é a estimativa do tempo de morte.\n\nFenômenos abióticos imediatos: perda da consciência, imobilidade, insensibilidade, parada cardiorrespiratória, ausência de reflexos.\n\nFenômenos abióticos consecutivos (mnemônico LAR + desidratação):\n• Livores (hipóstases): manchas nas partes mais baixas do corpo; surgem nas primeiras horas e se fixam por volta de 8 a 12 h.\n• Algor (resfriamento): estimativa aproximada de cerca de 1 °C por hora nas primeiras horas, variando com ambiente, roupa e corpo.\n• Rigor (rigidez), Lei de Nysten — sentido cabeça → pés: mandíbula e nuca (1–2 h), membros superiores (2–4 h), tronco/abdômen (4–6 h), membros inferiores (6–8 h); completa em cerca de 8–12 h; desfaz-se na mesma ordem com a putrefação.\n\nEspasmo cadavérico: rigidez instantânea no momento da morte, que conserva a última posição (ex.: a mão agarrada à arma). Não passa pela fase de flacidez — diferente da rigidez comum, que se instala aos poucos.\n\nPutrefação (mnemônico CECE): Cromática (mancha verde abdominal, em 18–24 h, começando na fossa ilíaca direita; no afogado começa na cabeça e no tórax), Enfisematosa/gasosa (inchaço por gases), Coliquativa (liquefação dos tecidos), Esqueletização.\n\nFenômenos conservadores: mumificação (ambiente quente, seco e ventilado), saponificação ou adipocera (terra úmida e argilosa, pouco arejada), corificação (pele com aspecto de couro, em caixão de zinco ou metal fechado).",
    },
    {
      titulo: "Causa da morte, comoriência e exumação",
      aula: "Aula 07 — Tanatologia",
      texto:
        "Causa médica (o que matou biologicamente: hemorragia, asfixia, choque) × causa jurídica (a circunstância: natural, homicídio, suicídio ou acidente).\n\nMorte natural (doença, idade) × morte violenta (homicídio, suicídio, acidente — vai obrigatoriamente à perícia) × morte suspeita (não se sabe se é natural ou violenta — também vai à perícia). Morte súbita é a inesperada em quem parecia saudável; em regra é natural, mas pode ser tratada como suspeita.\n\nComoriência (CC, art. 8º): se duas ou mais pessoas morrem na mesma ocasião e não se consegue apurar quem morreu primeiro, presume-se que morreram ao mesmo tempo — uma não herda da outra. Premoriência: a perícia prova quem morreu antes; quem sobreviveu, ainda que por instantes, herda e transmite aos seus herdeiros.\n\nCPP: a autópsia é feita pelo menos 6 horas depois do óbito, salvo se os sinais de morte forem evidentes (art. 162); na morte violenta, basta o exame externo quando não houver infração a apurar ou quando as lesões externas já mostrarem a causa (art. 162, parágrafo único). Exumação para exame: dia e hora marcados e auto circunstanciado (art. 163).\n\nVirtópsia: necropsia virtual, não invasiva, por tomografia, ressonância e escaneamento 3D.",
    },
    {
      titulo: "Criminalística: postulados, princípios e laudo",
      aula: "Aulas 07 e 08 — Criminalística",
      texto:
        "Postulados:\n• Perenidade — o que a perícia estabeleceu não muda com o tempo.\n• Independência — a conclusão é a mesma qualquer que seja o instrumento, desde que cientificamente válido.\n• Invariabilidade — o conteúdo do laudo é o mesmo qualquer que seja o perito.\n\nPrincípios:\n• Observação (Locard, intercâmbio) — todo contato deixa marca.\n• Análise — o exame segue método científico, buscando a verdade dos fatos.\n• Interpretação (individualidade, Kirk) — busca as características que tornam o objeto único (ex.: microcomparação balística).\n• Descrição — o laudo descreve o vestígio minuciosamente, em linguagem técnica (como ele é).\n• Documentação — tudo é registrado do local até o tribunal (a história do vestígio: é a base da cadeia de custódia).\n\nVestígio (qualquer material bruto ligado à infração, visível ou latente — CPP, art. 158-A, § 3º) × evidência (o vestígio cuja relação com o fato a análise confirmou) × indício (circunstância provada que permite concluir, por indução, a existência de outra — CPP, art. 239).\n\nLocais de crime: imediato (onde o fato ocorreu), mediato (as adjacências), relacionado (outro local ligado ao crime, sem continuidade com o principal — ex.: onde a arma foi descartada); idôneo/preservado × inidôneo/violado (alterado antes da perícia); interno × externo.\n\nLaudo: prazo de 10 dias, prorrogável em casos excepcionais a pedido dos peritos (CPP, art. 160, parágrafo único). Laudo com omissão, obscuridade ou contradição é complementado ou esclarecido, e pode haver novo exame (art. 181). O juiz não fica preso ao laudo — pode aceitá-lo ou rejeitá-lo, no todo ou em parte (art. 182, sistema liberatório).\n\nPerícias citadas no curso: grafotécnica (autenticidade de escrita e assinatura; comparação de letra — CPP, art. 174) e audiovisual (autenticidade, edição e identificação de locutor em áudio e vídeo). Perfil criminal (profiling): inferir características do autor desconhecido a partir dos vestígios e do modo de agir.",
    },
    {
      titulo: "Criminologia: método, objetos e controle social",
      aula: "Aula 10 — Conceito e métodos da Criminologia",
      texto:
        "Criminologia é ciência empírica e interdisciplinar, do \"ser\": observa a realidade com método indutivo. O Direito Penal é do \"dever ser\" (normativo, dedutivo). A Política Criminal faz a ponte: transforma o saber criminológico em estratégias e propostas de mudança na lei.\n\nObjetos: delito (como fenômeno social, mais amplo que o conceito jurídico), delinquente, vítima e controle social.\n\nControle social informal: família, escola, igreja, trabalho, opinião pública. Controle social formal: as instâncias do Estado — polícia, Ministério Público, Judiciário e sistema prisional.\n\nFunções que o curso lista: diagnóstica (explicar o crime), preventiva (evitá-lo), informativa (subsidiar a política criminal) e avaliativa (medir os resultados das respostas ao crime).",
    },
    {
      titulo: "Escolas penais",
      aula: "Aula 11 — Evolução histórica",
      texto:
        "• Clássica (séc. XVIII–XIX — Beccaria, \"Dos Delitos e das Penas\", 1764; Carrara; Romagnosi): crime é ente jurídico; livre-arbítrio; pena como retribuição proporcional; método dedutivo; foco no fato.\n• Positiva (séc. XIX — método empírico/indutivo, determinismo, foco no criminoso, pena medida pela periculosidade). Três fases: antropológica (Lombroso, \"O Homem Delinquente\", 1876 — criminoso nato, atavismo); sociológica (Ferri — fatores sociais, físicos e individuais; classificou os criminosos em nato, louco, habitual, ocasional e passional); jurídica (Garófalo — cunhou o termo \"Criminologia\", 1885; delito natural, temibilidade).\n• Terza Scuola (Terceira Escola italiana): meio-termo entre clássicos e positivistas; separa imputáveis de inimputáveis.\n• Escola de Política Criminal (Moderna Alemã — von Liszt): pena com finalidade preventiva; \"ciência total do Direito Penal\".\n• Correcionalista (Röder, Dorado Montero): o criminoso é alguém a ser corrigido e tutelado; a pena é um bem para ele.\n• Nova Defesa Social (Marc Ancel): proteger a sociedade ressocializando o condenado, com respeito aos direitos humanos.",
    },
    {
      titulo: "Teorias do consenso",
      aula: "Aulas 11 e 12 — Evolução histórica e Nova Criminologia",
      texto:
        "Consenso × conflito: para as teorias do consenso, a sociedade funciona porque todos compartilham os mesmos valores e o crime é uma disfunção; para as do conflito, a ordem é mantida pela coerção de grupos dominantes.\n\n• Escola de Chicago (ecológica): o crime nasce da desorganização social das grandes cidades; cresce na \"zona de transição\". Desdobramentos: Janelas Quebradas (Wilson e Kelling, 1982 — pequena desordem não reparada atrai desordem maior e crime grave), Tolerância Zero (Nova York, anos 1990) e a teoria dos \"testículos quebrados\" (breaking balls: pressão policial constante sobre infratores conhecidos).\n• Anomia: Durkheim — o crime é normal em toda sociedade; anomia é o enfraquecimento das normas em tempos de crise. Merton — tensão entre metas culturais (sucesso, dinheiro) e meios legítimos; modos de adaptação: conformidade, inovação (aceita a meta, rejeita o meio — típico do crime patrimonial), ritualismo, evasão/retraimento e rebelião.\n• Associação diferencial (Sutherland): o crime é aprendido na convivência, como qualquer comportamento; Sutherland cunhou o \"crime do colarinho branco\".\n• Subcultura delinquente (Albert Cohen): jovens de classe baixa formam grupos com valores opostos aos da classe média; crime não utilitário, malicioso e negativista.",
    },
    {
      titulo: "Teorias do conflito e seus desdobramentos",
      aula: "Aulas 11 e 12 — Evolução histórica e Nova Criminologia",
      texto:
        "• Labelling approach (etiquetamento, reação social — Becker, Lemert, Goffman): o crime não é uma qualidade do ato, mas um rótulo aplicado pelas instâncias de controle. Desviação primária: o primeiro ato, sem identidade criminosa. Desviação secundária: rotulada, a pessoa assume o papel de criminoso e reincide. Propostas (política dos \"Ds\"): descriminalização, diversão (desviar do processo penal), devido processo legal e desinstitucionalização.\n• Criminologia crítica/radical (base marxista — Taylor, Walton e Young; Baratta): o sistema penal protege os interesses da classe dominante e seleciona os mais vulneráveis.\n\nDesdobramentos da crítica:\n• Neorrealismo de esquerda (Young, Lea): leva a sério o crime de rua, cujas principais vítimas são as classes populares.\n• Direito penal mínimo (Baratta, Ferrajoli): o Direito Penal como último recurso.\n• Abolicionismo (Hulsman, Christie, Mathiesen): abolir o sistema penal e resolver os conflitos por outras vias.\n• Garantismo (Ferrajoli): Direito Penal mínimo cercado de garantias processuais e penais.",
    },
    {
      titulo: "Vitimologia: classificações, vitimização e síndromes",
      aula: "Aula 13 — Vitimologia",
      texto:
        "Iter victimae: o percurso da vítima antes, durante e depois do crime — pré-vitimização (fatores de risco e exposição), vitimização (o fato) e pós-vitimização (consequências e tratamento recebido).\n\nClassificações (pegadinha clássica da FGV): Mendelsohn classifica pelo grau de CULPA da vítima (da completamente inocente à unicamente culpada). Hentig classifica pela VULNERABILIDADE (jovens, mulheres, idosos, deficientes mentais, imigrantes, minorias).\n\nVitimização:\n• Primária — o dano causado diretamente pelo crime.\n• Secundária (sobrevitimização) — causada pelas instâncias FORMAIS: polícia, MP, Judiciário (repetição do relato, descaso, exposição). A Lei Maria da Penha (art. 10-A) prevê atendimento especializado e veda inquirições sucessivas sobre o mesmo fato; a Lei 14.321/2022 criou o crime de violência institucional (art. 15-A da Lei de Abuso de Autoridade).\n• Terciária — causada pelo meio INFORMAL: família, amigos, comunidade, mídia (estigma, abandono, exclusão); comum nos crimes sexuais.\n\nHeterovitimização: a vítima culpa a si mesma pelo crime. Princípio da heterorresponsabilidade: a responsabilidade é de quem pratica o crime — serve de freio à culpabilização da vítima. Vitimodogmática: estuda como o comportamento da vítima repercute na responsabilidade do autor (o CP manda considerá-lo na pena-base, art. 59).\n\nSíndromes:\n• Estocolmo — o refém cria vínculo afetivo com o captor.\n• Lima — o inverso: o captor passa a simpatizar com o refém.\n• Londres — em vez de vínculo, hostilidade entre refém e captor; o refém que confronta o sequestrador corre mais risco.\n• Mulher de Potifar — falsa acusação de crime sexual, por vingança ou rejeição.",
    },
    {
      titulo: "Prevenção, modelos de reação e cifras da criminalidade",
      aula: "Aula 14 e Aulão — Prevenção e cifras",
      texto:
        "Prevenção (García-Pablos):\n• Primária — ataca a raiz do problema, para toda a população, a longo prazo: educação, moradia, emprego, saúde.\n• Secundária — atua onde e quando o crime aparece (grupos e áreas de risco), a curto e médio prazo: policiamento ostensivo, iluminação, urbanismo.\n• Terciária — dirigida ao condenado, para evitar a reincidência: execução penal, ressocialização.\n\nModelos de reação ao delito: dissuasório (a punição certa e rápida intimida), ressocializador (intervenção na pessoa do infrator para reinseri-lo) e integrador/restaurativo (reparação do dano e reconciliação entre autor, vítima e comunidade).\n\nFins da pena: prevenção geral negativa (intimidar a sociedade) e positiva (reafirmar a confiança na norma); prevenção especial negativa (neutralizar o condenado) e positiva (ressocializá-lo); teoria mista (retribuição + prevenção), adotada pelo CP no art. 59.\n\nCifras da criminalidade:\n• Negra (oculta) — crimes que nunca chegam ao conhecimento do Estado; é a diferença entre a criminalidade real e a registrada.\n• Dourada — crimes da elite, de colarinho branco (sonegação, corrupção, crimes financeiros) que não aparecem. É a mais cobrada.\n• Cinza — chegam à polícia, mas não viram processo (resolvidos na delegacia, sem representação).\n• Amarela — violência policial não denunciada por medo.\n• Verde — crimes ambientais não revelados.\n• Rosa — crimes de homofobia e transfobia não notificados.",
    },
  ],
  rlm: [
    {
      titulo: "Condicional disfarçada, suficiente × necessária e tautologia",
      aula: "Aulas 04 e 07 — Conectivos e Classificação de proposição composta",
      texto:
        "Formas de dizer \"se p, então q\" sem usar \"se… então\":\n• \"p é condição suficiente para q\" → se p, então q.\n• \"q é condição necessária para p\" → se p, então q.\n• \"Quando p, q\", \"Toda vez que p, q\", \"Caso p, q\", \"p implica q\" → se p, então q.\n• \"p somente se q\" / \"Só p se q\" → se p, então q (o \"somente se\" marca o consequente).\n\nBicondicional (p ↔ q): \"p se e somente se q\" ou \"p é condição necessária e suficiente para q\". É verdadeira quando p e q têm o mesmo valor.\n\"Ou p ou q\" (disjunção exclusiva): verdadeira só quando exatamente uma das duas é verdadeira — é a negação da bicondicional.\n\nClassificação da proposição composta pela última coluna da tabela-verdade:\n• Tautologia — sempre V (ex.: p ∨ ¬p).\n• Contradição — sempre F (ex.: p ∧ ¬p).\n• Contingência — ora V, ora F (a maioria das proposições).",
      exemplos: [
        "\"Ser aprovado é suficiente para ser nomeado\" = Se é aprovado, então é nomeado.",
        "\"Ter CNH é necessário para dirigir\" = Se dirige, então tem CNH (e não o contrário).",
        "\"Só entra quem tem crachá\" = Se entra, então tem crachá.",
        "(p → q) ↔ (¬q → ¬p) é tautologia: a condicional equivale à sua contrapositiva.",
      ],
    },
    {
      titulo: "Lógica de argumentação: validade e falácias",
      aula: "Aula 09 — Lógica de Argumentação",
      texto:
        "Argumento = premissas + conclusão. É válido quando, sendo as premissas verdadeiras, a conclusão é obrigatoriamente verdadeira. A validade depende da FORMA, não de o conteúdo ser verdadeiro no mundo real: há argumento válido com premissa falsa e argumento inválido com tudo verdadeiro.\n\nMétodo prático: considere todas as premissas verdadeiras, comece pela mais simples (proposição simples ou conjunção) e descubra o valor de cada letra; a conclusão tem de sair verdadeira. Para provar que é inválido, basta achar um cenário com premissas V e conclusão F.\n\nFormas válidas:\n• Modus ponens: p → q; p; logo q.\n• Modus tollens: p → q; ¬q; logo ¬p.\n• Silogismo disjuntivo: p ∨ q; ¬p; logo q.\n• Silogismo hipotético: p → q; q → r; logo p → r.\n\nFalácias (formas inválidas):\n• Afirmar o consequente: p → q; q; logo p.\n• Negar o antecedente: p → q; ¬p; logo ¬q.",
      exemplos: [
        "\"Se chove, a rua molha. A rua está molhada. Logo, choveu.\" → inválido (afirma o consequente: alguém pode ter lavado a rua).",
        "\"Se chove, a rua molha. A rua não está molhada. Logo, não choveu.\" → válido (modus tollens).",
        "\"Todo cachorro voa. Rex é cachorro. Logo, Rex voa.\" → válido, mesmo com a premissa falsa.",
      ],
    },
    {
      titulo: "Verdades e mentiras",
      aula: "Aula 13 — Verdades e Mentiras",
      texto:
        "Roteiro:\n1) Anote quem diz o quê.\n2) Procure duas falas contraditórias (uma nega exatamente a outra): exatamente uma delas é verdadeira — isso já consome um \"verdadeiro\" do enunciado.\n3) Sem contradição direta, teste hipóteses: suponha um culpado (ou um mentiroso) e conte quantas falas ficam verdadeiras; a hipótese que bate com o enunciado é a resposta.\n\nCuidado: falas equivalentes (que dizem a mesma coisa) são ambas verdadeiras ou ambas falsas. Quem mente diz o contrário da verdade em tudo, inclusive sobre si mesmo.",
      exemplos: [
        "Um dos três quebrou o vidro e só um diz a verdade. A: \"Foi o B.\" B: \"Não fui eu.\" C: \"Não fui eu.\" A e B se contradizem, então a única verdade está entre eles e C mente: foi o C. Conferindo: A mente (não foi o B) e B diz a verdade — 1 verdade só.",
        "Se supor \"foi o A\" deixa duas falas verdadeiras quando o enunciado diz uma, a hipótese cai.",
      ],
    },
    {
      titulo: "Juros simples (e o contraste com o composto)",
      aula: "Aula 07 — Juros Simples",
      texto:
        "No regime simples, os juros incidem sempre sobre o capital inicial e crescem em progressão aritmética.\n• J = C · i · t\n• M = C + J = C · (1 + i · t)\nRegra de ouro: taxa e tempo na MESMA unidade (taxa mensal com tempo em meses). Taxas proporcionais: 2% a.m. = 24% a.a. no simples (basta multiplicar). Ano comercial = 360 dias; mês comercial = 30 dias.\n\nComposto (juros sobre juros): M = C · (1 + i)^t, em progressão geométrica. Com a mesma taxa: para menos de 1 período, o simples rende MAIS; em exatamente 1 período, rendem igual; acima de 1 período, o composto rende mais.",
      exemplos: [
        "R$ 1.000 a 2% a.m. por 6 meses: J = 1.000 · 0,02 · 6 = R$ 120; M = R$ 1.120.",
        "R$ 500 viraram R$ 600 em 10 meses: J = 100 = 500 · i · 10 → i = 2% a.m.",
        "Em quanto tempo um capital dobra a 5% a.m. (simples)? J = C → C · 0,05 · t = C → t = 20 meses.",
        "36% a.a. por 3 meses: taxa mensal de 3% → J = C · 0,03 · 3 = 9% do capital.",
      ],
    },
    {
      titulo: "Divisibilidade, primos, MMC/MDC, potências e radicais",
      aula: "Aula 02 — Operações Básicas",
      texto:
        "Divisibilidade: por 2 (termina em algarismo par); por 3 (soma dos algarismos divisível por 3); por 4 (os dois últimos algarismos formam múltiplo de 4); por 5 (termina em 0 ou 5); por 6 (divisível por 2 e por 3); por 9 (soma dos algarismos divisível por 9); por 10 (termina em 0).\nPrimo: tem exatamente dois divisores, 1 e ele mesmo. O 2 é o único primo par; o 1 não é primo.\n\nMMC → quando os eventos voltam a coincidir (\"juntos de novo\", \"ao mesmo tempo\"). MDC → quando se divide em partes iguais, do maior tamanho possível, sem sobra. Propriedade: MMC(a, b) · MDC(a, b) = a · b.\n\nPotências: a^m · a^n = a^(m+n); a^m ÷ a^n = a^(m−n); (a^m)^n = a^(m·n); a^0 = 1 (a ≠ 0); a^(−n) = 1/a^n. Base negativa com expoente par dá positivo; com ímpar, negativo. Atenção: −2² = −4, mas (−2)² = 4 (no Excel, =-2^2 dá 4, porque o sinal é aplicado antes).\nRadicais: √(a·b) = √a · √b; a^(m/n) = raiz n-ésima de a^m; racionalização: 1/√2 = √2/2.",
      exemplos: [
        "Dois ônibus saem juntos, um a cada 6 dias e o outro a cada 8: voltam a sair juntos em MMC(6, 8) = 24 dias.",
        "Cortar fitas de 12 m e 18 m em pedaços iguais, os maiores possíveis: MDC(12, 18) = 6 m (2 + 3 = 5 pedaços).",
        "MMC(12, 18) = 36 e MDC = 6 → 36 · 6 = 216 = 12 · 18.",
        "2³ · 2⁴ = 2⁷ = 128; 8^(2/3) = (∛8)² = 4.",
      ],
    },
    {
      titulo: "Conjuntos numéricos, frações e dízimas periódicas",
      aula: "Aulas 01 e 03 — Conjuntos Numéricos e Frações",
      texto:
        "N ⊂ Z ⊂ Q ⊂ R. Racional (Q) é todo número que pode ser escrito como fração de inteiros com denominador diferente de zero: inteiros, decimais exatos e dízimas periódicas. Irracional: decimal infinito e não periódico (√2, π). Reais = racionais + irracionais. N* exclui o zero.\n\nFrações: somar ou subtrair exige o mesmo denominador (use o MMC); multiplicar = numerador × numerador e denominador × denominador; dividir = multiplicar pelo inverso da segunda. \"Fração de fração\" é multiplicação (2/3 de 3/4 = 1/2).\n\nFração geratriz:\n• Dízima simples: o período sobre tantos 9 quantos forem os algarismos do período.\n• Dízima composta: (parte não periódica seguida do período − parte não periódica) sobre tantos 9 quantos forem os algarismos do período, seguidos de tantos 0 quantos forem os da parte não periódica.\n\nIntervalos: colchete voltado para o número [ ] inclui o extremo; voltado para fora ] [ exclui; no infinito, o intervalo é sempre aberto.",
      exemplos: [
        "0,333… = 3/9 = 1/3.",
        "0,1212… = 12/99 = 4/33.",
        "1,2333… = 1 + (23 − 2)/90 = 1 + 21/90 = 111/90 = 37/30.",
        "0,999… = 9/9 = 1 (é exatamente 1, não \"quase 1\").",
        "[2, 5[ = {x ∈ R | 2 ≤ x < 5}.",
      ],
    },
    {
      titulo: "Geometria plana e trigonometria no triângulo retângulo",
      aula: "Aulas 09 e 10 — Geometria Plana e Trigonometria",
      texto:
        "Soma dos ângulos internos de um polígono de n lados: S = (n − 2) · 180°; no polígono regular, cada ângulo = S ÷ n. Triângulo: soma 180°; o ângulo externo é igual à soma dos dois internos não adjacentes.\nTeorema de Tales: retas paralelas cortadas por transversais determinam segmentos proporcionais.\nPitágoras (triângulo retângulo): a² = b² + c² — o quadrado da hipotenusa é a soma dos quadrados dos catetos. Ternos que caem: 3-4-5, 5-12-13, 8-15-17 e seus múltiplos.\n\nÁreas: retângulo b·h; quadrado l²; triângulo b·h/2; paralelogramo b·h; trapézio (B + b)·h/2; losango D·d/2; círculo πr². Comprimento da circunferência: 2πr. Mudança de escala: multiplicar as medidas por k multiplica a área por k².\n\nTrigonometria: seno = cateto oposto ÷ hipotenusa; cosseno = cateto adjacente ÷ hipotenusa; tangente = oposto ÷ adjacente.\n• 30°: sen 1/2, cos √3/2, tg √3/3\n• 45°: sen √2/2, cos √2/2, tg 1\n• 60°: sen √3/2, cos 1/2, tg √3\nsen² x + cos² x = 1; sen x = cos (90° − x).",
      exemplos: [
        "Hexágono: S = 4 · 180° = 720°; se regular, cada ângulo mede 120°.",
        "Escada de 5 m com o pé a 3 m da parede alcança √(25 − 9) = 4 m de altura.",
        "Dobrar o raio de um círculo quadruplica a área (k = 2 → k² = 4).",
        "Rampa de 10 m inclinada a 30° sobe 10 · sen 30° = 5 m.",
      ],
    },
    {
      titulo: "Probabilidade: regra do OU, regra do E e dois dados",
      aula: "Aula 12 — Probabilidade",
      texto:
        "P(A) = casos favoráveis ÷ casos possíveis (todos igualmente prováveis). Sempre 0 ≤ P ≤ 1, e P(não A) = 1 − P(A).\n• OU (união): P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Se os eventos são mutuamente exclusivos (não acontecem juntos), basta somar.\n• E (eventos em sequência): multiplica — P(A e B) = P(A) · P(B) quando são independentes. Sem reposição, o segundo fator muda.\n• \"Pelo menos um\" = 1 − P(nenhum).\n\nDois dados: 6 · 6 = 36 resultados. A soma 7 é a mais provável (6 casos → 1/6); as somas 2 e 12 são as menos prováveis (1/36 cada).",
      exemplos: [
        "Carta de um baralho de 52 que seja de copas OU figura (J, Q, K): 13/52 + 12/52 − 3/52 = 22/52 = 11/26.",
        "Duas moedas: P(duas caras) = 1/2 · 1/2 = 1/4; P(pelo menos uma cara) = 1 − 1/4 = 3/4.",
        "Urna com 3 bolas azuis e 2 vermelhas, duas retiradas sem reposição: P(ambas azuis) = 3/5 · 2/4 = 3/10.",
      ],
    },
  ],
  cont: [
    {
      titulo: "Objeto, aziendas e usuários da informação contábil",
      aula: "Aula 01 — Contabilidade Básica",
      texto:
        "A Contabilidade é uma ciência social aplicada. Seu objeto é o patrimônio das entidades e seu objetivo, fornecer informação útil para a tomada de decisão. Funções: administrativa (controlar o patrimônio) e econômica (apurar o resultado — lucro ou prejuízo).\n\nAzienda: o patrimônio somado à gestão que o administra. Pode ter fins lucrativos (empresas) ou não (associações, fundações, entes públicos). A teoria aziendalista (escola italiana) via a Contabilidade como ciência da administração econômica da azienda.\n\nUsuários: internos (administradores, gestores, sócios que administram) e externos (investidores, credores, fisco, clientes, fornecedores, empregados, sociedade). Pela Estrutura Conceitual (CPC 00), os relatórios contábeis de propósito geral se dirigem aos usuários PRIMÁRIOS: investidores, credores por empréstimo e outros credores, existentes e potenciais, que não podem exigir informações sob medida. A administração e os reguladores também usam esses relatórios, mas não são o público-alvo.",
    },
    {
      titulo: "Ativo, passivo e PL: definições, situações líquidas e goodwill",
      aula: "Aula 02 — Patrimônio e Contas de Resultado",
      texto:
        "Estrutura Conceitual (CPC 00):\n• Ativo — recurso econômico presente CONTROLADO pela entidade, resultante de eventos passados; recurso econômico é um direito com potencial de gerar benefícios econômicos. Importa o controle, não a propriedade jurídica.\n• Passivo — obrigação presente de transferir um recurso econômico, resultante de eventos passados. Três critérios: há uma obrigação; ela é de transferir recurso econômico; e é presente, fruto de evento passado.\n• Patrimônio Líquido — interesse residual nos ativos depois de deduzidos os passivos (PL = A − P). Também chamado de situação líquida ou \"passivo não exigível\".\n\nSituações líquidas: A > P → PL positivo (a mais comum); A = P → PL nulo; A < P → PL negativo (passivo a descoberto). O ativo nunca é negativo.\n\nTeoria da entidade: a empresa é distinta dos sócios (base do princípio da entidade). Teoria do proprietário: o patrimônio é visto como dos sócios.\n\nGoodwill (ágio por expectativa de rentabilidade futura): o que se paga a mais numa aquisição, acima do valor justo dos ativos líquidos identificáveis; não é amortizado, só testado para redução ao valor recuperável (impairment). Pagar menos que o valor justo é compra vantajosa (badwill), reconhecida como ganho.\n\nMensuração: custo histórico (valor da transação, a base mais comum) × valor atual (valor justo, valor em uso, custo corrente).\n\nEncerramento do exercício: as contas de resultado (receitas e despesas) são zeradas contra a Apuração do Resultado do Exercício (ARE); o lucro ou prejuízo vai para o PL. Contas patrimoniais não se encerram — passam para o exercício seguinte.",
      exemplos: [
        "Bens R$ 80 mil + direitos R$ 20 mil; obrigações R$ 120 mil → PL = −R$ 20 mil: passivo a descoberto.",
        "Paga-se R$ 10 milhões por uma empresa cujos ativos líquidos valem R$ 7 milhões a valor justo → goodwill de R$ 3 milhões.",
      ],
    },
    {
      titulo: "Escrituração: partidas dobradas, fatos contábeis e livros",
      aula: "Aula 03 — Escrituração Contábil",
      texto:
        "Fato contábil altera o patrimônio (compra, venda, pagamento) e é escriturado. Ato administrativo não altera (assinar contrato, admitir empregado, prestar aval ou fiança) e não é escriturado — no máximo, em contas de compensação.\n\nMétodo das partidas dobradas (sistematizado por Luca Pacioli em 1494): não há débito sem crédito de igual valor; a soma dos débitos é sempre igual à dos créditos.\nNatureza das contas: devedora (aumenta a débito) — ativo e despesas; credora (aumenta a crédito) — passivo, PL e receitas. Contas retificadoras têm natureza oposta à do grupo (depreciação acumulada, perdas estimadas com créditos de liquidação duvidosa, ações em tesouraria).\n\nFatos contábeis:\n• Permutativos (qualitativos) — trocas entre contas patrimoniais, sem alterar o PL (compra à vista, pagamento de dívida).\n• Modificativos — alteram o PL: aumentativos (receita) ou diminutivos (despesa).\n• Mistos (compostos) — permutação e modificação ao mesmo tempo (recebimento de duplicata com juros ou com desconto).\n\nFórmulas de lançamento: 1ª (1 débito / 1 crédito), 2ª (1 débito / vários créditos), 3ª (vários débitos / 1 crédito), 4ª (vários / vários).\n\nLivros: Diário — registro cronológico de todas as operações (obrigatório); Razão — registro por conta, mostra o saldo de cada uma. Erro se corrige por estorno (lançamento inverso), nunca com rasuras, emendas ou entrelinhas (Código Civil, art. 1.183). O pequeno empresário, como o MEI, é dispensado da escrituração (CC, art. 1.179, §2º).",
      exemplos: [
        "Compra de mercadoria à vista: D – Mercadorias / C – Caixa (permutativo, 1ª fórmula).",
        "Pagamento de aluguel: D – Despesa de aluguel / C – Caixa (modificativo diminutivo).",
        "Recebimento de duplicata de R$ 1.000 com 5% de desconto concedido: D – Caixa 950 e D – Descontos concedidos 50 / C – Duplicatas a receber 1.000 (misto, 3ª fórmula).",
      ],
    },
    {
      titulo: "Perícia contábil, DFC e DVA",
      aula: "Aula 09 — Perícia Contábil",
      texto:
        "Perícia contábil (NBC TP 01): procedimentos técnico-científicos que levam à instância decisória elementos de prova para solucionar o litígio. Espécies: judicial (no processo), extrajudicial (por vontade das partes, fora do Judiciário) e arbitral (no juízo arbitral). Só a exerce o contador registrado no CRC.\n• Laudo pericial contábil — feito pelo perito do juízo, nomeado pelo juiz.\n• Parecer técnico-contábil — feito pelo assistente técnico, contratado pela parte.\n\nDFC — Demonstração dos Fluxos de Caixa (CPC 03 / NBC TG 03): entradas e saídas de caixa e equivalentes de caixa (aplicações de curto prazo, alta liquidez e risco insignificante — em regra, vencimento em até 3 meses). Três atividades: operacionais (o negócio: receber de clientes, pagar fornecedores e salários), de investimento (comprar e vender imobilizado e participações) e de financiamento (tomar e pagar empréstimos, aporte de capital, dividendos pagos). Métodos: direto (mostra recebimentos e pagamentos brutos) e indireto (parte do lucro líquido e ajusta o que não mexe no caixa, como a depreciação). Obrigatória pela Lei 6.404/76, art. 176, IV; a companhia fechada com PL inferior a R$ 2 milhões na data do balanço está dispensada (art. 176, §6º).\n\nDVA — Demonstração do Valor Adicionado (CPC 09 / NBC TG 09): a riqueza gerada pela empresa e como foi distribuída — pessoal; impostos, taxas e contribuições; remuneração de capitais de terceiros (juros, aluguéis); e remuneração de capitais próprios (dividendos, lucros retidos). Inclui o valor adicionado recebido em transferência (equivalência patrimonial, receitas financeiras). Obrigatória para as companhias abertas (art. 176, V).\n\nAtenção: DFC é a norma 03; DVA é a 09 — não troque.",
    },
  ],
  est: [
    {
      titulo: "Média ponderada, dados agrupados e propriedades das medidas",
      aula: "Aulas 03, 07 e 08 — Média, Variância e Desvio Padrão",
      texto:
        "Média ponderada: cada valor multiplicado pelo seu peso, somado e dividido pela soma dos pesos. Em tabela de frequências, o peso de cada valor é a sua frequência. Em dados agrupados por classes, cada classe é representada pelo seu ponto médio ((limite inferior + limite superior) ÷ 2).\n\nPropriedades (caem muito):\n• Somar ou subtrair uma constante k de todos os valores: média, moda e mediana mudam em k; variância e desvio padrão NÃO mudam (a dispersão é a mesma).\n• Multiplicar ou dividir todos os valores por k: média, moda e mediana ficam multiplicadas por k; o desvio padrão, por |k|; a variância, por k².\n• A soma dos desvios em relação à média é sempre zero.\n\nCoeficiente de variação: CV = desvio padrão ÷ média (em geral, em %). É dispersão RELATIVA, sem unidade — serve para comparar conjuntos com médias ou unidades diferentes; o menor CV indica o conjunto mais homogêneo.\n\nTabelas e gráficos: densidade de frequência = frequência da classe ÷ amplitude da classe (usada no histograma quando as classes têm larguras diferentes). Polígono de frequência: linha que une os pontos médios do topo das colunas do histograma.",
      exemplos: [
        "Notas 6 (peso 2) e 9 (peso 3): média = (12 + 27) ÷ 5 = 7,8.",
        "Salários com média R$ 2.000 e desvio R$ 300 recebem +R$ 500 cada: a média vai a R$ 2.500 e o desvio continua R$ 300.",
        "Multiplicar todos os dados por 2: variância 9 vira 36; desvio 3 vira 6.",
        "Turma A: média 50, desvio 5 (CV 10%); turma B: média 20, desvio 4 (CV 20%) → A é mais homogênea.",
      ],
    },
  ],
  pr: [
    {
      titulo: "Relevo e geologia do Paraná",
      aula: "Aula 02 — Geografia física e humana (bloco 01)",
      texto:
        "De leste para oeste, cinco grandes unidades:\n• Planície litorânea — estreita faixa costeira com baías (Paranaguá, Guaratuba), manguezais, restingas e estuários.\n• Serra do Mar — escarpa de rochas cristalinas que separa o litoral do planalto; ali está o Pico Paraná, ponto mais alto da Região Sul (cerca de 1.877 m).\n• Primeiro Planalto (de Curitiba) — sobre o escudo cristalino, de rochas antigas; é a área mais urbanizada (Região Metropolitana de Curitiba).\n• Segundo Planalto (de Ponta Grossa, Campos Gerais) — começa na Escarpa Devoniana e é formado por rochas sedimentares; a erosão diferencial esculpiu os arenitos de Vila Velha.\n• Terceiro Planalto (de Guarapuava) — começa na escarpa da Serra Geral (Serra da Esperança) e ocupa cerca de 2/3 do estado. Formado por derrames de lava basáltica que, decompostos, originaram a terra roxa, muito fértil: base do ciclo do café no Norte e, depois das geadas, da agricultura mecanizada de grãos (soja, milho, trigo).\nOs planaltos se inclinam suavemente para oeste — por isso a maioria dos rios corre para o interior, rumo ao Rio Paraná.",
      exemplos: [
        "Escarpa Devoniana → limite entre o Primeiro e o Segundo Planalto.",
        "Serra Geral / Serra da Esperança → limite entre o Segundo e o Terceiro Planalto.",
        "Terra roxa → basalto decomposto do Terceiro Planalto.",
      ],
    },
    {
      titulo: "Clima e hidrografia",
      aula: "Aula 02 — Geografia física e humana (bloco 02)",
      texto:
        "Clima: predomina o subtropical úmido, com chuvas bem distribuídas e sem estação seca definida — Cfa (verões quentes) nas áreas mais baixas e Cfb (verões amenos) nas mais altas, como Curitiba e o Centro-Sul, onde as geadas são mais frequentes. No inverno, a Massa Polar Atlântica traz frentes frias e geadas; a grande geada de 1975 arrasou os cafezais do Norte. O Norte, mais quente, faz a transição para o clima tropical.\n\nHidrografia: a maior parte dos rios nasce perto do litoral e corre para o interior (oeste/noroeste) até o Rio Paraná. Só a vertente leste da Serra do Mar drena direto para o Atlântico (bacia litorânea). Rios de planalto, com muitas quedas, dão ao estado grande potencial hidrelétrico: a Usina de Itaipu, binacional com o Paraguai, no Rio Paraná, é uma das maiores do mundo em geração.\nPrincipais rios: Iguaçu (o principal do estado e de maior bacia; nasce na região de Curitiba, corre para oeste, faz trechos de divisa com Santa Catarina e com a Argentina e forma as Cataratas do Iguaçu, sobre derrames de basalto); Paranapanema (divisa com São Paulo); Tibagi, Ivaí e Piquiri (afluentes); Paraná (divisa com o Paraguai e o Mato Grosso do Sul).",
    },
    {
      titulo: "Vegetação",
      aula: "Aula 02 — Geografia física e humana (bloco 03)",
      texto:
        "O Paraná está no domínio da Mata Atlântica, hoje reduzida a uma pequena fração da cobertura original pelo desmatamento para café, madeira e grãos. Formações:\n• Floresta Ombrófila Densa — na Serra do Mar e na planície litorânea, muito úmida.\n• Floresta Ombrófila Mista (Mata de Araucárias) — nos planaltos frios do Centro-Sul; a araucária (pinheiro-do-paraná) é símbolo do estado e hoje está ameaçada.\n• Floresta Estacional Semidecidual — no Norte e no Oeste, mais quentes; parte das árvores perde as folhas na estação fria e seca. Foi a mais devastada pela expansão agrícola.\n• Campos naturais — Campos Gerais (Segundo Planalto) e campos de Guarapuava e Palmas.\n• Formações pioneiras — manguezais e restingas no litoral; várzeas nos rios.\nÁreas protegidas de destaque: Parque Nacional do Iguaçu (patrimônio natural da UNESCO) e Parque Estadual de Vila Velha.",
    },
    {
      titulo: "População e cultura paranaense",
      aula: "Aulas 02 (bloco 05) e 03 — População e Cultura paranaense",
      texto:
        "População: o Censo 2022 do IBGE contou cerca de 11,4 milhões de habitantes, com densidade de cerca de 57 hab/km². A mecanização do campo a partir dos anos 1970 (soja e trigo no lugar do café) provocou forte êxodo rural e acelerou a urbanização: hoje a grande maioria vive em cidades, concentrada na Região Metropolitana de Curitiba e nos polos do interior (Londrina, Maringá, Ponta Grossa, Cascavel). Como no resto do país, caem a natalidade e a fecundidade, sobe a expectativa de vida e a população envelhece.\nFormação: povos indígenas (kaingang, guarani, xetá), portugueses, africanos escravizados e imigrantes europeus (poloneses, ucranianos, italianos, alemães) e japoneses; no século XX, paulistas, mineiros e nordestinos ocuparam o Norte, e gaúchos e catarinenses, o Sudoeste e o Oeste.\n\nCultura:\n• Litoral — fandango caiçara (dança de tamancos ao som da viola e do adufo, ligada aos mutirões) e o barreado, prato típico cozido por horas em panela de barro vedada.\n• Campos Gerais — cavalhadas e Festa do Divino, herança do tropeirismo.\n• Artes plásticas — Alfredo Andersen, \"pai da pintura paranaense\"; Guido Viaro e Miguel Bakun (modernismo); Poty Lazzarotto, com painéis em azulejo e concreto espalhados por Curitiba.\n• Literatura — Emiliano Perneta e o Simbolismo (Curitiba, \"capital simbolista\"); Dalton Trevisan, \"o Vampiro de Curitiba\", contista; Helena Kolody (haicais) e Paulo Leminski (poesia que mistura concretismo, cultura pop e haicai).",
    },
  ],
  pen: [
    {
      titulo: "Crimes contra a vida: homicídio, art. 122, infanticídio e aborto",
      aula: "Parte Especial · Aulas 01 e 02 — Crimes Contra a Vida",
      texto:
        "Homicídio (art. 121): simples 6 a 20 anos. Privilegiado (§1º): relevante valor social ou moral, ou domínio de violenta emoção logo em seguida a injusta provocação da vítima → redução de 1/6 a 1/3. Qualificado (§2º, 12 a 30 anos): motivo torpe ou fútil; meio cruel ou de perigo comum (veneno, fogo, explosivo, asfixia, tortura); recurso que dificulta a defesa (traição, emboscada, dissimulação); para assegurar outro crime; contra agente de segurança pública e seus familiares; com arma de uso restrito ou proibido; contra menor de 14 anos. O qualificado-privilegiado só é possível com qualificadora objetiva (meio ou modo) e não é hediondo. Culposo (§3º): admite perdão judicial (§5º). O feminicídio virou crime autônomo (art. 121-A, Lei 14.994/2024, 20 a 40 anos).\n\nInduzimento, instigação ou auxílio a suicídio ou a automutilação (art. 122, Lei 13.968/2019): crime formal — basta a conduta; pena maior se resulta lesão grave/gravíssima ou morte. Aumenta se feito pela internet, rede social ou transmitido em tempo real. Se a vítima é menor de 14 anos ou não tem discernimento: resultando lesão gravíssima, o agente responde por lesão corporal gravíssima (art. 129, §2º); resultando morte, por homicídio.\n\nInfanticídio (art. 123, detenção 2 a 6 anos): a mãe mata o próprio filho, sob influência do estado puerperal, durante o parto ou logo após. Quem ajuda a mãe responde também por infanticídio (o estado puerperal é elementar e se comunica — art. 30).\n\nAborto: autoaborto ou consentimento da gestante (art. 124, detenção 1 a 3); provocado por terceiro sem consentimento (art. 125, reclusão 3 a 10); com consentimento (art. 126, reclusão 1 a 4) — exceção à teoria monista: gestante e terceiro respondem por crimes diferentes. Legal (art. 128, praticado por médico): necessário (não há outro meio de salvar a vida da gestante) e humanitário (gravidez resultante de estupro, com consentimento da gestante). STF (ADPF 54): interromper a gestação de feto anencéfalo não é crime.",
    },
    {
      titulo: "Lesão corporal, periclitação da vida e rixa",
      aula: "Parte Especial · Aulas 03, 04 e 05 — Lesões, Periclitação e Rixa",
      texto:
        "Lesão corporal (art. 129):\n• Leve — detenção 3 meses a 1 ano; ação pública condicionada à representação (Lei 9.099, art. 88), exceto violência doméstica contra a mulher, que é incondicionada (Súmula 542 do STJ).\n• Grave (§1º, 1 a 5 anos) — incapacidade para as ocupações habituais por mais de 30 dias; perigo de vida; debilidade permanente de membro, sentido ou função; aceleração do parto.\n• Gravíssima (§2º, 2 a 8 anos) — incapacidade permanente para o trabalho; enfermidade incurável; perda ou inutilização de membro, sentido ou função; deformidade permanente; aborto.\n• Seguida de morte (§3º, 4 a 12 anos) — crime preterdoloso: dolo na lesão, culpa na morte.\nDica: debilidade (enfraquecimento) = grave; perda ou inutilização = gravíssima. Aceleração do parto = grave; aborto = gravíssima.\n\nPericlitação (crimes de perigo): perigo de contágio venéreo (art. 130) e de moléstia grave (art. 131); perigo para a vida ou saúde de outrem (art. 132); abandono de incapaz (art. 133); exposição ou abandono de recém-nascido para ocultar desonra própria (art. 134); omissão de socorro (art. 135 — pena aumentada de metade se resulta lesão grave e triplicada se resulta morte); exigir cheque-caução ou garantia para atendimento médico de emergência (art. 135-A); maus-tratos (art. 136).\n\nRixa (art. 137): briga generalizada entre pelo menos 3 pessoas, com agressões recíprocas. Se resulta morte ou lesão grave, TODOS os participantes respondem por rixa qualificada — até quem sofreu a lesão grave; quem for identificado como autor da morte ou da lesão responde também por esse crime.",
    },
    {
      titulo: "Crimes contra a honra e contra a liberdade individual",
      aula: "Parte Especial · Aulas 06 e 07 — Honra e Liberdade Individual",
      texto:
        "Honra:\n• Calúnia (art. 138) — imputar falsamente FATO definido como CRIME. Honra objetiva (reputação); consuma-se quando terceiro toma conhecimento. É punível contra os mortos. Admite exceção da verdade, salvo se o crime imputado é de ação privada e o ofendido não foi condenado, se o fato é imputado ao Presidente ou a chefe de governo estrangeiro, ou se o ofendido foi absolvido.\n• Difamação (art. 139) — imputar FATO ofensivo à reputação (não criminoso). Honra objetiva. Exceção da verdade só se o ofendido é funcionário público e a ofensa se refere às suas funções.\n• Injúria (art. 140) — atribuir QUALIDADE negativa, ofendendo a dignidade ou o decoro. Honra subjetiva; consuma-se quando a vítima toma conhecimento; não admite exceção da verdade. Injúria qualificada (§3º): elementos de religião ou condição de pessoa idosa ou com deficiência. A injúria racial passou para a Lei 7.716/89 (art. 2º-A, Lei 14.532/2023) e é imprescritível e inafiançável como o racismo.\n• Retratação (art. 143): antes da sentença, isenta de pena na calúnia e na difamação — não na injúria.\n• Ação penal (art. 145): em regra, privada (queixa). Contra funcionário público em razão das funções: pública condicionada à representação, com legitimidade concorrente do ofendido (Súmula 714 do STF). Contra o Presidente ou chefe de governo estrangeiro: requisição do Ministro da Justiça.\n\nLiberdade individual: constrangimento ilegal (art. 146); ameaça (art. 147, em regra condicionada à representação); perseguição/stalking (art. 147-A, Lei 14.132/2021, condicionada à representação); violência psicológica contra a mulher (art. 147-B); sequestro e cárcere privado (art. 148); redução a condição análoga à de escravo (art. 149); tráfico de pessoas (art. 149-A); violação de domicílio (art. 150 — \"casa\" inclui o compartimento não aberto ao público onde alguém exerce profissão, como o escritório).",
      exemplos: [
        "\"Fulano furtou meu celular\" (falso) → calúnia. \"Fulano chega bêbado ao trabalho\" → difamação. \"Fulano é ladrão\" (sem fato concreto) → injúria.",
      ],
    },
    {
      titulo: "Crimes contra o patrimônio",
      aula: "Parte Especial · Aulas 08 e 09 — Crimes Contra o Patrimônio",
      texto:
        "• Furto (art. 155) — subtrair coisa alheia móvel, sem violência. Energia elétrica equipara-se a coisa móvel. Consuma-se com a inversão da posse, ainda que breve e sem posse mansa e pacífica. Repouso noturno: +1/3 (não se aplica ao furto qualificado — STJ). Privilegiado (§2º): réu primário e coisa de pequeno valor (cerca de 1 salário mínimo). Qualificado (§4º): destruição ou rompimento de obstáculo, abuso de confiança, fraude, escalada, destreza, chave falsa, concurso de duas ou mais pessoas. Furto qualificado-privilegiado é possível se a qualificadora for objetiva (Súmula 511 do STJ). Furto de uso não é crime.\n• Roubo (art. 157) — subtração com violência ou grave ameaça. Próprio: a violência vem antes ou durante; impróprio (§1º): depois de subtrair, para garantir a coisa ou a impunidade. Consuma-se com a inversão da posse (Súmula 582 do STJ). Arma de fogo: +2/3; arma branca: +1/3 até metade; arma de uso restrito ou proibido: pena em dobro. Latrocínio (§3º, II, 20 a 30 anos, hediondo): há latrocínio consumado quando a morte se consuma, ainda que a subtração não se realize (Súmula 610 do STF).\n• Extorsão (art. 158) — constranger alguém a fazer, tolerar ou deixar de fazer algo para obter vantagem; a colaboração da vítima é indispensável. Crime formal (Súmula 96 do STJ). Sequestro-relâmpago: §3º. Extorsão mediante sequestro (art. 159): hediondo.\n• Apropriação indébita (art. 168) — o agente já tinha a posse lícita e passa a agir como dono.\n• Estelionato (art. 171) — obter vantagem ilícita induzindo ou mantendo alguém em erro, por fraude: a vítima entrega a coisa. Depende de representação (§5º), salvo se a vítima for a Administração Pública, criança ou adolescente, pessoa com deficiência mental, maior de 70 anos ou incapaz. Fraude eletrônica: §2º-A.\n• Receptação (art. 180) — dolosa, qualificada (atividade comercial ou industrial) e culposa (§3º).\n• Dano (art. 163).\n\nImunidades: isento de pena quem comete crime patrimonial contra cônjuge (na constância da sociedade conjugal), ascendente ou descendente (art. 181); exige representação se a vítima é cônjuge separado, irmão, ou tio/sobrinho com quem o agente coabita (art. 182). Não valem (art. 183) se houver violência ou grave ameaça, para o terceiro que participa e se a vítima tem 60 anos ou mais.",
      exemplos: [
        "Furto mediante fraude × estelionato: no furto, a fraude distrai a vigilância e o agente subtrai; no estelionato, a vítima, enganada, entrega o bem.",
        "Filho que furta o pai de 60 anos: não há imunidade (art. 183, III).",
      ],
    },
    {
      titulo: "Crimes contra a dignidade sexual",
      aula: "Parte Especial · Aula 10 — Crimes Contra a Dignidade Sexual",
      texto:
        "• Estupro (art. 213, 6 a 10 anos) — constranger alguém, mediante violência ou grave ameaça, a ter conjunção carnal ou a praticar ou permitir outro ato libidinoso. Qualquer pessoa pode ser autor ou vítima. Tipo misto alternativo: conjunção e outro ato libidinoso no mesmo contexto e contra a mesma vítima = crime único.\n• Estupro de vulnerável (art. 217-A, 8 a 15 anos) — conjunção ou ato libidinoso com menor de 14 anos, ou com quem, por enfermidade ou deficiência mental, não tem discernimento, ou não pode oferecer resistência (ex.: embriaguez completa). O consentimento, a experiência sexual anterior ou o relacionamento com o agente são irrelevantes (§5º e Súmula 593 do STJ).\n• Violação sexual mediante fraude (art. 215) — ato sexual obtido por fraude que impede ou dificulta a livre manifestação da vítima.\n• Importunação sexual (art. 215-A, Lei 13.718/2018) — praticar ato libidinoso contra alguém, sem anuência, para satisfazer a própria lascívia ou a de terceiro (ex.: no ônibus). Sem violência ou grave ameaça.\n• Assédio sexual (art. 216-A) — constranger para obter vantagem sexual, prevalecendo-se da condição de superior hierárquico ou da ascendência inerente a emprego, cargo ou função.\n• Registro não autorizado da intimidade sexual (art. 216-B) e divulgação de cena de estupro, de sexo ou de nudez sem consentimento (art. 218-C).\n\nAção penal: pública INCONDICIONADA em todos os crimes contra a liberdade sexual e contra vulneráveis (art. 225, desde a Lei 13.718/2018).",
    },
    {
      titulo: "Administração da Justiça, finanças públicas, licitações e crimes funcionais que confundem",
      aula: "Parte Especial · Aulas 11 a 15 — Administração, Justiça, Finanças e Licitações",
      texto:
        "Funcionais que confundem: concussão (art. 316) = EXIGIR vantagem indevida; corrupção passiva (art. 317) = SOLICITAR, RECEBER ou ACEITAR promessa — privilegiada (§2º) se cede a pedido ou influência de outrem; prevaricação (art. 319) = retardar ou deixar de praticar ato de ofício para satisfazer interesse ou sentimento PESSOAL; condescendência criminosa (art. 320) = por indulgência, não responsabilizar o subordinado; advocacia administrativa (art. 321) = patrocinar interesse privado perante a Administração valendo-se da condição de funcionário. Peculato culposo (art. 312, §3º): reparar o dano antes da sentença irrecorrível extingue a punibilidade; depois, reduz a pena pela metade. Funcionário por equiparação (art. 327, §1º): quem trabalha em entidade paraestatal ou em empresa contratada ou conveniada para atividade típica da Administração.\n\nAdministração da Justiça:\n• Denunciação caluniosa (art. 339) — dar causa a inquérito, processo, PAD ou ação de improbidade contra quem sabe inocente. Comunicação falsa de crime (art. 340) — sem apontar autor. Autoacusação falsa (art. 341).\n• Falso testemunho ou falsa perícia (art. 342) — deixa de ser punível se o agente se retrata antes da sentença no processo em que mentiu. É crime de mão própria, mas admite participação (ex.: advogado que orienta a mentira).\n• Coação no curso do processo (art. 344); exercício arbitrário das próprias razões (art. 345 — \"fazer justiça com as próprias mãos\"); fraude processual (art. 347).\n• Favorecimento pessoal (art. 348) — ajudar o autor de crime a escapar da autoridade; isento de pena se for ascendente, descendente, cônjuge ou irmão do criminoso. Favorecimento real (art. 349) — tornar seguro o proveito do crime. Ingresso de celular em presídio (art. 349-A).\n\nFinanças públicas (arts. 359-A a 359-H, Lei 10.028/2000): operação de crédito sem autorização legal; inscrição em restos a pagar de despesa não empenhada; assumir obrigação nos dois últimos quadrimestres do mandato sem caixa para pagá-la; ordenar despesa não autorizada por lei; aumentar despesa com pessoal nos 180 dias anteriores ao fim do mandato; ofertar títulos públicos sem previsão legal.\n\nLicitações (arts. 337-E a 337-P, inseridos pela Lei 14.133/2021): contratação direta ilegal; frustração do caráter competitivo; patrocínio de contratação indevida; modificação ou pagamento irregular; perturbação do processo licitatório; violação de sigilo; afastamento de licitante; fraude em licitação ou contrato; contratação inidônea; impedimento indevido; omissão grave de dado. A multa não pode ser inferior a 2% do valor do contrato (art. 337-P).",
    },
    {
      titulo: "Teoria do crime: conduta, dolo e culpa, nexo causal e iter criminis",
      aula: "Parte Geral · Aulas 03 e 04 — Teoria do Crime",
      texto:
        "Conceito analítico (tripartido): fato típico + ilícito + culpável. Fato típico = conduta + resultado + nexo causal + tipicidade.\n\nTeorias da conduta: causalista (dolo e culpa na culpabilidade); finalista (Welzel — dolo e culpa na conduta; adotada pelo CP desde 1984); social; funcionalista (Roxin, teleológico/moderado — imputação objetiva; Jakobs, sistêmico/radical — direito penal do inimigo). Tipicidade conglobante (Zaffaroni): não é típico o que outra norma do ordenamento determina ou fomenta.\n\nDolo (art. 18, I): direto (quer o resultado); de 2º grau ou de consequências necessárias (o efeito colateral certo); eventual (assume o risco — \"dane-se\"). Culpa (art. 18, II): imprudência, negligência ou imperícia; consciente (prevê o resultado, mas acredita sinceramente que não acontecerá — \"vai dar certo\") × inconsciente (não prevê o previsível). Crime culposo só se previsto em lei (art. 18, p.ú.); não existe compensação de culpas. Preterdolo: dolo no antecedente e culpa no consequente (lesão seguida de morte; art. 19).\n\nNexo causal (art. 13): teoria da equivalência dos antecedentes (conditio sine qua non). Concausa superveniente relativamente independente que, por si só, produz o resultado rompe o nexo — o agente responde só pelos atos anteriores (ex.: a ambulância que leva a vítima capota). Concausa absolutamente independente (ex.: a vítima morre de envenenamento que outra pessoa causou antes): o agente responde só pelos atos que praticou (ex.: tentativa). Omissão imprópria (§2º): responde pelo resultado o garantidor — quem tem por lei dever de cuidado, proteção ou vigilância; quem assumiu de outra forma a responsabilidade; ou quem criou o risco com seu comportamento anterior.\n\nIter criminis: cogitação (impunível) → preparação (em regra impunível) → execução → consumação → exaurimento (depois da consumação; pode agravar a pena).\n• Tentativa (art. 14, II): pena reduzida de 1/3 a 2/3 — quanto mais perto da consumação, menor a redução. Não admitem tentativa: culposos, preterdolosos, contravenções, omissivos próprios, habituais e unissubsistentes.\n• Desistência voluntária e arrependimento eficaz (art. 15, \"ponte de ouro\"): responde só pelos atos já praticados.\n• Arrependimento posterior (art. 16, \"ponte de prata\"): crime sem violência ou grave ameaça à pessoa, dano reparado ou coisa restituída por ato voluntário até o recebimento da denúncia → redução de 1/3 a 2/3.\n• Crime impossível (art. 17): ineficácia absoluta do meio ou impropriedade absoluta do objeto (teoria objetiva temperada). Vigilância ou câmeras em loja não tornam o furto impossível (Súmula 567 do STJ).",
    },
    {
      titulo: "Excludentes de ilicitude e culpabilidade",
      aula: "Parte Geral · Aulas 05 e 06 — Excludentes de Ilicitude e Culpabilidade",
      texto:
        "Ilicitude (art. 23): estado de necessidade, legítima defesa, estrito cumprimento do dever legal e exercício regular de direito. Em qualquer delas, o excesso doloso ou culposo é punível.\n• Estado de necessidade (art. 24): perigo atual, não provocado voluntariamente pelo agente, inevitável de outro modo, para direito próprio ou alheio. Quem tem o dever legal de enfrentar o perigo (bombeiro, policial) não pode alegá-lo. O CP adota a teoria unitária: se o bem sacrificado vale mais, há só redução de pena (1/3 a 2/3).\n• Legítima defesa (art. 25): agressão injusta, atual ou iminente, a direito seu ou de outrem, repelida com uso moderado dos meios necessários. Também está em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém (p.ú., Lei 13.964/2019). Não cabe legítima defesa real contra legítima defesa real; cabe contra a putativa e contra o excesso (legítima defesa sucessiva).\n• Consentimento do ofendido: causa supralegal, se o bem é disponível e o ofendido é capaz e consente antes ou durante o fato.\n• Ofendículos (cerca elétrica, cacos de vidro): exercício regular de direito quando instalados; legítima defesa preordenada quando funcionam.\n\nCulpabilidade (teoria normativa pura): imputabilidade + potencial consciência da ilicitude + exigibilidade de conduta diversa.\n• Inimputáveis: doença mental ou desenvolvimento mental incompleto ou retardado que tira inteiramente a capacidade de entender ou de se determinar (art. 26 — critério biopsicológico; absolvição imprópria com medida de segurança); semi-imputável (p.ú.): pena reduzida de 1/3 a 2/3 ou medida de segurança (sistema vicariante). Menores de 18 (art. 27 — critério biológico).\n• Emoção e paixão não excluem a imputabilidade (art. 28). Embriaguez voluntária ou culposa não exclui (actio libera in causa); só a completa por caso fortuito ou força maior isenta de pena; a incompleta reduz de 1/3 a 2/3. A preordenada agrava a pena.\n• Inexigibilidade de conduta diversa (art. 22): coação moral irresistível (só o coator responde; a coação FÍSICA irresistível exclui a própria conduta) e obediência a ordem não manifestamente ilegal de superior hierárquico (só o autor da ordem responde).\n• Coculpabilidade (Zaffaroni): parcela de culpa do Estado pela exclusão social do agente; parte da doutrina a admite como atenuante inominada (art. 66); tese não pacífica e pouco aceita nos tribunais.",
    },
    {
      titulo: "Teoria do erro",
      aula: "Parte Geral · Aula 07 — Teoria do Erro",
      texto:
        "Erro de tipo essencial (art. 20): falsa percepção sobre elementar do tipo. Sempre exclui o dolo; se inevitável (escusável), exclui também a culpa; se evitável (inescusável), permite punir por culpa, se houver crime culposo.\n\nDescriminantes putativas (art. 20, §1º): o agente supõe, por erro plenamente justificado, situação de fato que tornaria a ação legítima → isento de pena; se o erro deriva de culpa, responde por crime culposo (\"culpa imprópria\", que admite tentativa). O CP adota a teoria limitada da culpabilidade: erro sobre os pressupostos de fato da excludente = erro de tipo permissivo; erro sobre a existência ou os limites da excludente = erro de proibição indireto.\nErro determinado por terceiro (§2º): responde o terceiro que o provocou.\n\nErros acidentais (não excluem o dolo):\n• Sobre a pessoa (art. 20, §3º) — confunde a vítima: consideram-se as qualidades da vítima pretendida.\n• Na execução / aberratio ictus (art. 73) — erra o golpe e atinge outra pessoa: responde como se tivesse atingido a pretendida; se atinge as duas, concurso formal.\n• Resultado diverso do pretendido / aberratio criminis (art. 74) — atinge bem de natureza diversa (quer quebrar a vitrine e fere alguém): responde pelo resultado a título de culpa, se previsto; se atinge também o pretendido, concurso formal.\n• Sobre o objeto e sobre o nexo causal (aberratio causae).\n\nErro de proibição (art. 21): o desconhecimento da lei é inescusável, mas o erro sobre a ilicitude do fato, se inevitável, isenta de pena (afasta a potencial consciência da ilicitude); se evitável, reduz a pena de 1/6 a 1/3.",
      exemplos: [
        "Leva para casa a mala de outra pessoa achando que é a sua → erro de tipo (falta o \"alheia\" do furto).",
        "Atira em quem pensa ser o pai, mas acerta o vizinho parecido → erro sobre a pessoa: responde com a agravante de crime contra ascendente.",
        "Estrangeiro que acha permitido no Brasil o que é lícito no seu país → erro de proibição.",
      ],
    },
    {
      titulo: "Concurso de pessoas",
      aula: "Parte Geral · Aula 08 — Concurso de Pessoas",
      texto:
        "Requisitos: pluralidade de agentes e de condutas, relevância causal de cada uma, liame subjetivo (vontade de participar da obra comum — não exige acordo prévio) e identidade de infração.\n\nTeoria monista (art. 29): todos respondem pelo mesmo crime, na medida de sua culpabilidade. Exceções pluralistas: aborto com consentimento (gestante no art. 124, terceiro no art. 126); corrupção passiva × ativa; falso testemunho (art. 342) × corrupção de testemunha (art. 343); facilitação de contrabando (art. 318) × contrabando (art. 334-A).\n\nAutoria: teoria restritiva (autor é quem pratica o verbo do tipo) complementada pela teoria do domínio do fato (autor é quem controla a realização do crime — inclui o mandante e a autoria mediata). Autoria mediata: o autor usa outra pessoa como instrumento (inimputável, pessoa em erro, coagido). Autoria colateral: dois agem ao mesmo tempo sem saber um do outro — cada um responde pelo que causou.\n\nParticipação: induzir, instigar ou auxiliar. Pela acessoriedade limitada, o partícipe só é punido se o fato principal for típico e ilícito.\n• Participação de menor importância (§1º): pena reduzida de 1/6 a 1/3 (não vale para o coautor).\n• Cooperação dolosamente distinta (§2º): quem quis participar de crime menos grave responde por ele; a pena aumenta até a metade se o resultado mais grave era previsível.\n• Comunicabilidade (art. 30): as circunstâncias e condições pessoais não se comunicam, salvo quando elementares do crime (ex.: o particular que, sabendo, ajuda o funcionário a desviar bens responde por peculato).\n• Art. 31: ajuste, determinação, instigação e auxílio não são puníveis se o crime não chega, pelo menos, a ser tentado.\nCrimes de mão própria (falso testemunho) não admitem coautoria, só participação.",
    },
    {
      titulo: "Conflito aparente de normas, imunidades e confisco alargado",
      aula: "Parte Geral · Aula 07 — Teoria do Erro (conflito de normas, imunidades e art. 91-A)",
      texto:
        "Conflito aparente de normas (um fato, várias leis aparentemente aplicáveis — só uma incide):\n• Especialidade — a norma especial prevalece sobre a geral (infanticídio × homicídio).\n• Subsidiariedade — a norma primária afasta a subsidiária, que só se aplica na falta da mais grave (expressa: \"se o fato não constitui crime mais grave\").\n• Consunção — o crime-meio é absorvido pelo crime-fim (o falso que se esgota no estelionato é absorvido — Súmula 17 do STJ); inclui antefato e pós-fato impuníveis e a progressão criminosa.\n• Alternatividade — tipo com vários verbos (tráfico de drogas): praticar mais de um no mesmo contexto = crime único.\n\nImunidades: diplomáticas (Convenção de Viena de 1961) — o diplomata não se submete à jurisdição penal brasileira, mas à do seu Estado; os cônsules têm imunidade só pelos atos de ofício. Parlamentares (art. 53 da CF) — material (opiniões, palavras e votos) e formal (prisão e processo).\n\nConfisco alargado (art. 91-A, Lei 13.964/2019): na condenação por infração com pena máxima superior a 6 anos, pode ser decretada a perda dos bens correspondentes à diferença entre o patrimônio do condenado e o que seria compatível com seu rendimento lícito. O MP deve pedi-lo expressamente na denúncia, indicando a diferença apurada; o condenado pode provar a origem lícita.",
    },
  ],
  pp: [
    {
      titulo: "Sistemas processuais, lei processual no tempo e juiz das garantias",
      aula: "Aulas 01 e 04 — Sistemas Processuais e Juiz das Garantias",
      texto:
        "Sistemas processuais:\n• Inquisitivo — acusar, defender e julgar concentrados no juiz; réu como objeto; sigilo; confissão como \"rainha das provas\".\n• Acusatório — funções separadas; juiz imparcial e inerte; contraditório, publicidade e partes em igualdade.\n• Misto (francês) — fase de investigação inquisitiva + fase judicial acusatória.\nO art. 3º-A do CPP (Pacote Anticrime) declara a estrutura acusatória e veda a iniciativa do juiz na investigação e a substituição da atuação probatória da acusação. O STF deu interpretação conforme: o juiz pode, pontualmente e nos limites da lei, determinar diligências para esclarecer dúvida relevante para o mérito.\n\nLei processual: no espaço, territorialidade (art. 1º). No tempo, aplicação imediata, preservados os atos já praticados (art. 2º — tempus regit actum). Normas mistas (com conteúdo penal, como as que tratam de representação ou de extinção da punibilidade) seguem a regra penal: retroagem se benéficas. A lei processual admite interpretação extensiva, aplicação analógica e os princípios gerais de direito (art. 3º).\n\nJuiz das garantias (arts. 3º-B a 3º-F) — o que o STF decidiu (ADIs 6.298, 6.299, 6.300 e 6.305):\n• implantação obrigatória, em 12 meses, prorrogáveis por mais 12;\n• a competência vai até o OFERECIMENTO da denúncia (não até o recebimento, como dizia a lei);\n• não se aplica aos processos de competência originária dos tribunais, do júri, de violência doméstica e familiar e de menor potencial ofensivo;\n• o art. 3º-D (impedimento do juiz que atuou na investigação) foi declarado inconstitucional;\n• os autos da investigação são remetidos ao juiz da instrução (não ficam acautelados na secretaria);\n• a prorrogação da prisão do investigado (3º-B, §2º) pode ser renovada de forma fundamentada, e o fim do prazo não solta o preso automaticamente;\n• arquivamento (art. 28): o MP submete a decisão ao juiz e comunica a vítima, o investigado e a autoridade policial.",
    },
    {
      titulo: "Princípios do processo penal",
      aula: "Aula 02 — Princípios Processuais Penais",
      texto:
        "• Presunção de inocência / não culpabilidade (art. 5º, LVII): ninguém é considerado culpado até o trânsito em julgado; a dúvida favorece o réu (in dubio pro reo). STF (ADCs 43, 44 e 54): não há execução provisória da pena antes do trânsito — a prisão antes disso só como cautelar. Exceção posterior: condenação pelo júri pode ser executada de imediato (STF, Tema 1.068).\n• Nemo tenetur se detegere: ninguém é obrigado a produzir prova contra si. Inclui o direito ao silêncio (art. 5º, LXIII), que não importa confissão nem pode prejudicar a defesa (art. 186, p.ú.), e o direito de não colaborar ativamente (bafômetro, reconstituição, fornecer padrão de escrita). Não abrange atos em que o investigado só tolera a prova (ex.: ser colocado para reconhecimento).\n• Contraditório (informação + possibilidade de reação) e ampla defesa (técnica, indisponível, + autodefesa, disponível). Súmula 523 do STF: a falta de defesa é nulidade absoluta; a deficiência só anula se houver prova de prejuízo.\n• Juiz natural (art. 5º, XXXVII e LIII): juiz competente fixado antes do fato; vedado tribunal de exceção. A doutrina e o STF também reconhecem o promotor natural.\n• Devido processo legal (LIV), publicidade (LX e art. 93, IX), razoável duração do processo (LXXVIII).\n• Inércia (ne procedat iudex ex officio): o juiz não inicia a ação penal.\n• Persuasão racional / livre convencimento motivado (art. 155): o juiz aprecia livremente a prova, mas fundamenta; não pode condenar só com base em elementos do inquérito, salvo provas cautelares, não repetíveis e antecipadas.\n• Busca da verdade (\"verdade real\"): hoje limitada pelas regras do sistema acusatório e pela proibição de provas ilícitas.\n• Duplo grau de jurisdição: não está expresso na CF; vem da Convenção Americana (art. 8.2.h).\n• Favor rei: na dúvida entre interpretações, prevalece a mais favorável ao acusado (ex.: revisão criminal só existe em favor do réu).",
    },
    {
      titulo: "Funções de polícia e inquérito policial",
      aula: "Aulas 05 e 06 — Funções de Polícia e Inquérito Policial",
      texto:
        "Funções de polícia:\n• Administrativa — preventiva, atua sobre bens, direitos e atividades para evitar o dano social (principalmente a PM).\n• Ostensiva — presença visível e fardada para dissuadir (PM; guardas municipais na proteção do patrimônio municipal).\n• Investigativa — apura a autoria e a materialidade das infrações penais.\n• Judiciária — há duas visões: (1) é a mesma coisa que a investigativa e inclui o auxílio ao Judiciário; (2) é só o auxílio ao Judiciário (cumprir mandados, atender requisições). A segunda se apoia na CF, que separa as duas funções da Polícia Federal (art. 144, §1º, I e IV) — e só para a PF diz \"com exclusividade\" (IV). Às polícias civis cabem a polícia judiciária e a apuração das infrações penais, exceto as militares (§4º). A Lei 12.830/2013 trata a investigação criminal conduzida pelo delegado como função de natureza jurídica, essencial e exclusiva de Estado.\n\nInquérito policial — características: escrito (art. 9º); sigiloso (art. 20), mas o defensor tem acesso aos elementos já documentados (SV 14); inquisitivo (sem contraditório pleno); dispensável (a denúncia pode se basear em outras peças); oficioso e oficial; discricionário na condução (art. 14 — o delegado pode indeferir diligências, salvo o exame de corpo de delito, art. 184); indisponível — a autoridade policial não pode arquivá-lo (art. 17); temporário.\n\nNotitia criminis: de cognição imediata (a polícia descobre na rotina), mediata (requerimento da vítima, requisição do MP, representação) ou coercitiva (prisão em flagrante). Delatio criminis: comunicação feita por qualquer pessoa do povo (art. 5º, §3º). Denúncia anônima, sozinha, não autoriza instaurar o IP — só diligências preliminares para verificar se procede.\n\nPrazos para concluir o IP: 10 dias se preso e 30 se solto (art. 10, CPP); Justiça Federal, 15 + 15 dias se preso; Lei de Drogas, 30 dias preso e 90 solto, que podem ser duplicados.\n\nOutros pontos: arquivado o inquérito, a ação só pode ser proposta com provas novas (art. 18 e Súmula 524 do STF); o arquivamento por atipicidade faz coisa julgada material. A incomunicabilidade do preso (art. 21) não foi recepcionada — a CF a proíbe até no estado de defesa (art. 136, §3º, IV). O indiciamento é ato privativo do delegado, fundamentado (Lei 12.830, art. 2º, §6º), e o IP só pode ser avocado ou redistribuído por superior, por despacho fundamentado (§4º).",
    },
    {
      titulo: "Provas em espécie",
      aula: "Aula 07 — Provas",
      texto:
        "Sistemas de valoração: íntima convicção (jurados do júri), prova tarifada (resquícios: exame de corpo de delito obrigatório; estado das pessoas provado pela lei civil — art. 155, p.ú.) e persuasão racional (regra).\n\n• Exame de corpo de delito (art. 158): indispensável quando a infração deixa vestígios, e a confissão não o supre. Prioridade para violência doméstica contra a mulher e violência contra criança, adolescente, idoso ou pessoa com deficiência. Desaparecidos os vestígios, a prova testemunhal pode supri-lo (art. 167). Basta um perito oficial; na falta, duas pessoas idôneas com curso superior (art. 159). O assistente técnico atua depois de admitido pelo juiz e de concluídos os exames.\n• Interrogatório: meio de defesa e de prova; exige defensor (art. 185) e entrevista reservada antes; videoconferência só excepcionalmente; duas partes — sobre a pessoa e sobre os fatos (art. 187); no procedimento comum é o último ato da instrução (art. 400).\n• Confissão: valor relativo, confrontada com as demais provas (art. 197); divisível e retratável (art. 200).\n• Testemunhas: toda pessoa pode testemunhar (art. 202) e presta compromisso de dizer a verdade (art. 203). Podem se recusar o ascendente, o descendente, o afim em linha reta, o cônjuge (ainda que separado), o irmão e o pai, mãe ou filho adotivo — salvo se não houver outro modo de obter a prova (art. 206); esses não prestam compromisso (art. 208). São proibidos de depor os que devem guardar segredo pela função, ministério, ofício ou profissão, salvo se desobrigados pela parte e quiserem depor (art. 207). As partes perguntam diretamente; o juiz complementa (art. 212).\n• Acareação (arts. 229–230): entre acusados, testemunhas e ofendidos, sempre que divergirem sobre fatos relevantes.\n• Reconhecimento de pessoas (art. 226): descrição prévia; colocação ao lado de pessoas parecidas; auto. STJ (HC 598.886/SC): o rito é garantia mínima — sem ele, o reconhecimento é inválido e não sustenta condenação, nem se repetido em juízo; o fotográfico serve só como etapa inicial.\n• Busca domiciliar: casa é asilo inviolável (art. 5º, XI) — entrada sem consentimento só em flagrante, desastre, para prestar socorro ou, durante o dia, por ordem judicial (a Lei de Abuso de Autoridade pune cumprir mandado entre 21h e 5h). STF (Tema 280): a entrada forçada sem mandado é lícita com fundadas razões, justificadas depois, de que há flagrante no local.\n• Busca pessoal: independe de mandado em caso de prisão, de fundada suspeita de arma proibida ou de objetos que constituam corpo de delito, ou durante busca domiciliar (art. 244). STJ: a fundada suspeita exige elementos objetivos — não basta \"atitude suspeita\" ou nervosismo. Mulher é revistada por mulher, se não atrasar a diligência (art. 249). Em escritório de advocacia, só com mandado específico e na presença de representante da OAB.\n• Indício (art. 239): circunstância conhecida e provada que, por indução, permite concluir a existência de outra.",
    },
  ],
  con: [
    {
      titulo: "Direitos sociais",
      aula: "Aula 03 — Direitos Sociais",
      texto:
        "Art. 6º: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância e assistência aos desamparados. O parágrafo único garante renda básica familiar a todo brasileiro em situação de vulnerabilidade social (EC 114/2021).\n\nArt. 7º (pontos mais cobrados): salário mínimo fixado em lei, nacionalmente unificado, vedada a vinculação para qualquer fim (SV 4: não pode servir de indexador de vantagem de servidor ou empregado); irredutibilidade do salário, salvo convenção ou acordo coletivo; jornada de 8 h diárias e 44 semanais; 6 h para turnos ininterruptos de revezamento; repouso semanal remunerado, de preferência aos domingos; hora extra com no mínimo 50% a mais; férias com 1/3 a mais; licença-gestante de 120 dias; aviso prévio proporcional de no mínimo 30 dias; proibição de trabalho noturno, perigoso ou insalubre a menores de 18 e de qualquer trabalho a menores de 16, salvo como aprendiz a partir de 14; prescrição de 5 anos, até 2 anos após o fim do contrato.\n\nArt. 8º: liberdade sindical com unicidade — uma só entidade por categoria na mesma base territorial, nunca menor que um Município; o dirigente sindical não pode ser dispensado desde o registro da candidatura até 1 ano após o fim do mandato, salvo falta grave.\nArt. 9º: direito de greve dos trabalhadores. Servidor civil: greve nos termos de lei específica (art. 37, VII); até lá, aplica-se a lei de greve do setor privado (STF, MIs 670, 708 e 712). Militares: greve proibida (art. 142, §3º, IV). Policiais civis e demais servidores que atuam diretamente na segurança pública: greve vedada sob qualquer forma (STF, Tema 541), com mediação obrigatória do Poder Público.\nArt. 11: empresa com mais de 200 empregados elege um representante dos trabalhadores para tratar com o empregador.",
    },
    {
      titulo: "Direitos políticos",
      aula: "Aula 04 — Direitos Políticos",
      texto:
        "Soberania popular (art. 14): sufrágio universal; voto direto e secreto, com valor igual para todos; plebiscito, referendo e iniciativa popular.\n• Alistamento e voto obrigatórios para maiores de 18; facultativos para analfabetos, maiores de 70 e quem tem entre 16 e 18. Inalistáveis: estrangeiros e conscritos (durante o serviço militar obrigatório).\n• Condições de elegibilidade: nacionalidade brasileira, pleno exercício dos direitos políticos, alistamento, domicílio eleitoral na circunscrição, filiação partidária e idade mínima — 35 (Presidente, Vice e Senador), 30 (Governador e Vice), 21 (Deputado, Prefeito, Vice-Prefeito e juiz de paz), 18 (Vereador).\n• Inelegíveis absolutos: inalistáveis e analfabetos.\n• Reeleição: chefes do Executivo, para um único período subsequente. Para concorrer a outro cargo, renunciam até 6 meses antes do pleito.\n• Inelegibilidade reflexa (§7º): no território de jurisdição do titular, são inelegíveis o cônjuge e os parentes até o 2º grau (consanguíneos, afins ou por adoção) do Presidente, Governador ou Prefeito, salvo se já titulares de mandato e candidatos à reeleição. A dissolução do casamento no curso do mandato não afasta essa inelegibilidade (SV 18).\n• Militar alistável é elegível: com menos de 10 anos de serviço, afasta-se da atividade; com mais de 10, é agregado e, se eleito, passa para a inatividade na diplomação.\n• Ação de impugnação de mandato: até 15 dias após a diplomação, em segredo de justiça.\n\nArt. 15 — é vedada a cassação de direitos políticos; perda ou suspensão só por: cancelamento da naturalização por sentença transitada em julgado; incapacidade civil absoluta; condenação criminal transitada em julgado, enquanto durarem seus efeitos; recusa de cumprir obrigação a todos imposta ou prestação alternativa; improbidade administrativa.\nArt. 16 — anterioridade eleitoral: a lei que altera o processo eleitoral vale desde a publicação, mas não se aplica à eleição que ocorra até 1 ano da sua vigência.\nArt. 17 — partidos: criação livre, caráter nacional, proibição de receber recursos de entidade ou governo estrangeiro e de usar organização paramilitar; registro do estatuto no TSE.",
    },
    {
      titulo: "Nacionalidade",
      aula: "Aula 05 — Nacionalidade",
      texto:
        "Brasileiros natos (art. 12, I):\na) nascidos no Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país;\nb) nascidos no estrangeiro, de pai ou mãe brasileiros, se qualquer deles estiver a serviço do Brasil;\nc) nascidos no estrangeiro, de pai ou mãe brasileiros, registrados em repartição brasileira competente, ou que venham a residir no Brasil e optem, a qualquer tempo depois da maioridade, pela nacionalidade brasileira.\n\nNaturalizados (II): a) na forma da lei — de países de língua portuguesa só se exigem residência por 1 ano ininterrupto e idoneidade moral; b) estrangeiros residentes no Brasil há mais de 15 anos ininterruptos e sem condenação penal, que a requeiram.\nPortugueses com residência permanente, havendo reciprocidade, têm os direitos de brasileiro (§1º, \"quase nacionalidade\").\n\nA lei não pode distinguir natos e naturalizados; só a CF pode (§2º). Diferenças da CF:\n• cargos privativos de nato (§3º): Presidente e Vice; Presidente da Câmara; Presidente do Senado; Ministro do STF; carreira diplomática; oficial das Forças Armadas; Ministro da Defesa;\n• 6 cidadãos natos no Conselho da República (art. 89, VII);\n• empresa jornalística e de radiodifusão: nato ou naturalizado há mais de 10 anos (art. 222);\n• extradição (art. 5º, LI): o nato nunca é extraditado; o naturalizado, só por crime comum praticado antes da naturalização ou por comprovado envolvimento com tráfico de drogas. Estrangeiro não é extraditado por crime político ou de opinião (LII).\n\nPerda da nacionalidade (§4º, redação da EC 131/2023): cancelamento da naturalização por sentença judicial, por fraude no processo de naturalização ou por atentado contra a ordem constitucional e o Estado Democrático; ou pedido expresso do brasileiro, salvo se gerar apatridia. Adquirir outra nacionalidade não causa mais a perda automática, e quem renunciou pode readquiri-la na forma da lei.",
    },
    {
      titulo: "Poder Legislativo: composição, imunidades, CPI e processo legislativo",
      aula: "Aula 09 — Poder Legislativo",
      texto:
        "Composição: Câmara — representantes do povo, eleitos pelo sistema proporcional, de 8 a 70 deputados por estado, mandato de 4 anos. Senado — representantes dos estados e do DF, sistema majoritário, 3 senadores por estado, mandato de 8 anos, com renovação alternada de 1/3 e 2/3 a cada 4 anos; cada senador tem 2 suplentes.\n\nImunidades (art. 53):\n• Material — invioláveis civil e penalmente por suas opiniões, palavras e votos.\n• Foro no STF desde a expedição do diploma.\n• Prisão — só em flagrante de crime inafiançável; os autos vão em 24 h à Casa, que decide sobre a prisão pelo voto da maioria de seus membros.\n• Processo — recebida a denúncia por crime posterior à diplomação, o STF avisa a Casa, que, por iniciativa de partido nela representado e pelo voto da maioria, pode sustar a ação; a prescrição fica suspensa.\n• Não são obrigados a testemunhar sobre informações recebidas em razão do mandato.\n• No estado de sítio, as imunidades só podem ser suspensas pelo voto de 2/3 da Casa (§8º).\nDeputados estaduais têm as mesmas imunidades (art. 27, §1º). Vereadores têm só a material, no exercício do mandato e na circunscrição do Município (art. 29, VIII).\n\nCPI (art. 58, §3º): poderes de investigação próprios das autoridades judiciais; criada a requerimento de 1/3 dos membros, para fato determinado e por prazo certo — é direito da minoria, sem votação em plenário; as conclusões vão ao MP. PODE quebrar sigilo bancário, fiscal e de dados telefônicos (por decisão fundamentada), convocar testemunhas e investigados e requisitar documentos e perícias. NÃO PODE decretar interceptação telefônica, busca domiciliar, prisão (salvo flagrante) ou medidas cautelares como indisponibilidade de bens — são reserva de jurisdição.\n\nProcesso legislativo:\n• Espécies (art. 59): emendas à Constituição, leis complementares, ordinárias e delegadas, medidas provisórias, decretos legislativos e resoluções.\n• EC (art. 60): proposta de 1/3 da Câmara ou do Senado, do Presidente ou de mais da metade das Assembleias Legislativas; 2 turnos em cada Casa, com 3/5 dos votos; promulgada pelas Mesas; não pode ser votada durante intervenção federal, estado de defesa ou estado de sítio; cláusulas pétreas — forma federativa, voto direto, secreto, universal e periódico, separação dos Poderes e direitos e garantias individuais.\n• Lei complementar: maioria absoluta; ordinária: maioria simples.\n• Iniciativa popular: 1% do eleitorado nacional, em pelo menos 5 estados, com no mínimo 0,3% dos eleitores de cada um.\n• Sanção e veto (art. 66): 15 dias úteis; o silêncio é sanção tácita; veto parcial só de texto integral de artigo, parágrafo, inciso ou alínea; o Congresso aprecia o veto em sessão conjunta, em 30 dias, e só o derruba por maioria absoluta.\n• Medida provisória (art. 62): relevância e urgência; vale 60 dias, prorrogáveis uma vez por mais 60; o prazo não corre no recesso; após 45 dias, tranca a pauta da Casa em que estiver. Não pode tratar de nacionalidade, cidadania, direitos políticos, partidos e direito eleitoral; direito penal, processual penal e processual civil; organização do Judiciário e do MP; orçamento (salvo crédito extraordinário); sequestro de bens ou poupança; matéria de lei complementar. A MP rejeitada ou que perdeu a eficácia não pode ser reeditada na mesma sessão legislativa.",
    },
  ],
  adm: [
    {
      titulo: "Organização administrativa",
      aula: "Aula 04 — Organização Administrativa",
      texto:
        "• Centralização: o Estado atua diretamente, por seus órgãos (Administração Direta).\n• Descentralização: a atividade passa a OUTRA pessoa jurídica — por outorga (lei cria a entidade e transfere a titularidade: Administração Indireta) ou por delegação (contrato ou ato transfere só a execução: concessionárias e permissionárias). Não há hierarquia, só controle finalístico (tutela, supervisão ministerial).\n• Desconcentração: distribuição interna de competências dentro da MESMA pessoa jurídica, criando órgãos; há hierarquia.\n• Teoria do órgão (imputação): o ato do agente é atribuído à pessoa jurídica; órgão não tem personalidade jurídica.\n\nAdministração Indireta (art. 37, XIX e XX): autarquia é CRIADA por lei específica; empresa pública, sociedade de economia mista e fundação têm a criação AUTORIZADA por lei específica (lei complementar define as áreas da fundação); a criação de subsidiárias depende de autorização legislativa.\n• Autarquia: pessoa jurídica de direito público para atividade típica de Estado; bens públicos impenhoráveis, precatórios, imunidade tributária recíproca, prazos processuais diferenciados. Agências reguladoras são autarquias em regime especial (dirigentes com mandato fixo). Ex.: INSS, Banco Central.\n• Fundação pública: patrimônio personalizado para um fim social; pode ser de direito público (autarquia fundacional) ou de direito privado.\n• Empresa pública: direito privado, capital 100% público, qualquer forma societária (ex.: Caixa, Correios). Sociedade de economia mista: direito privado, sempre S.A., maioria do capital votante com o Poder Público (ex.: Banco do Brasil, Petrobras). Causas da empresa pública federal vão à Justiça Federal; as da sociedade de economia mista, à Justiça comum estadual (Súmula 556 do STF).\n• Consórcios públicos (Lei 11.107/2005): associação pública (direito público, integra a Indireta de todos os consorciados) ou pessoa jurídica de direito privado.\n\nTerceiro setor (entes de cooperação — NÃO integram a Administração): serviços sociais autônomos (Sistema S — Sesc, Senai…; não precisam fazer concurso público); organizações sociais — OS (Lei 9.637/1998, contrato de gestão); OSCIP (Lei 9.790/1999, termo de parceria); organizações da sociedade civil — OSC (Lei 13.019/2014, termos de colaboração e de fomento e acordo de cooperação).",
    },
    {
      titulo: "Regime jurídico-administrativo e atos: o que mais confunde",
      aula: "Aulas 02, 05 e 06 — Princípios, Atos e Poderes",
      texto:
        "Regime jurídico-administrativo — dois pilares: supremacia do interesse público (prerrogativas, como desapropriar e aplicar sanções) e indisponibilidade do interesse público (sujeições, como concurso e licitação).\nPrincípios implícitos: razoabilidade e proporcionalidade (adequação, necessidade e proporcionalidade em sentido estrito); autotutela (Súmula 473 do STF — anular atos ilegais e revogar inconvenientes, respeitados os direitos adquiridos); motivação; segurança jurídica; continuidade do serviço público.\n\nAtos administrativos:\n• Elementos: competência, finalidade e forma (vinculados) + motivo e objeto (onde mora o mérito, nos atos discricionários).\n• Atributos (PATI): Presunção de legitimidade e veracidade (relativa); Autoexecutoriedade (não está em todos — multa não paga se cobra em juízo); Tipicidade; Imperatividade (impõe obrigação sem concordância — falta nos atos negociais e enunciativos).\n• Teoria dos motivos determinantes: o motivo declarado vincula; se for falso ou inexistente, o ato é nulo, mesmo que a lei nem exigisse motivação (ex.: exoneração de comissionado justificada com fato falso).\n• Abuso de poder (gênero) = excesso de poder (vício de competência: vai além do que pode) + desvio de poder ou de finalidade (vício de finalidade: age dentro da competência, mas para outro fim — ex.: remover servidor para puni-lo).\n• Extinção: anulação (ilegalidade, efeito retroativo, pela Administração ou pelo Judiciário; prazo de 5 anos para atos favoráveis ao destinatário de boa-fé — Lei 9.784, art. 54); revogação (conveniência e oportunidade, sem efeito retroativo, só pela própria Administração; não atinge atos vinculados, consumados ou que geraram direito adquirido); cassação (o beneficiário descumpre as condições); caducidade (lei nova torna o ato incompatível); contraposição (ato posterior com efeito oposto, como a exoneração em relação à nomeação).\n• Convalidação (Lei 9.784, art. 55): só vícios sanáveis, sem lesão ao interesse público nem a terceiros — competência (se não exclusiva) e forma (se não essencial); motivo, objeto e finalidade não se convalidam.\n\nPoder de polícia — ciclo: ordem, consentimento, fiscalização e sanção. STF (Tema 532): a lei pode delegar consentimento, fiscalização e sanção a estatais de capital majoritariamente público que prestem só serviço público próprio do Estado, em regime não concorrencial; a ordem de polícia (normatização) é indelegável.",
    },
    {
      titulo: "Alienação de bens na Lei 14.133/2021",
      aula: "Aula 07 — Lei nº 14.133/21 (Licitações)",
      texto:
        "Regra geral (art. 76): a alienação depende de interesse público justificado e de avaliação prévia.\n\n• Imóveis: exigem autorização legislativa (órgãos da Administração direta, autarquias e fundações) e licitação na modalidade LEILÃO. Há dispensa, entre outros casos, na dação em pagamento, na doação ou venda a outro órgão ou entidade da Administração, na permuta, na investidura e em programas de habitação de interesse social e regularização fundiária.\n• Imóvel adquirido por procedimento judicial ou dação em pagamento (§1º): dispensa a autorização legislativa — basta avaliação prévia e leilão.\n• Móveis: licitação por leilão, dispensada na doação (só para fins de interesse social), na permuta entre órgãos e entidades da Administração, na venda de ações e títulos, na venda de bens produzidos ou comercializados pela própria entidade e na venda de material sem uso a outro órgão da Administração.\n• Na venda de imóvel, quem o ocupa e cumpre as regras do edital tem direito de preferência (art. 77).\n\nLeilão: modalidade para alienar imóveis ou móveis inservíveis ou legalmente apreendidos a quem oferecer o maior lance. Na Lei 14.133, imóvel se vende por leilão — não há mais concorrência para alienação.",
    },
    {
      titulo: "Responsabilidade civil do Estado: teorias e jurisprudência",
      aula: "Aula 08 — Responsabilidade Civil do Estado",
      texto:
        "Evolução: irresponsabilidade (\"o rei não erra\") → teorias civilistas (culpa comum; atos de império × de gestão) → culpa administrativa ou do serviço (faute du service: o serviço não funcionou, funcionou mal ou atrasou — culpa anônima) → risco administrativo (objetiva, admite excludentes) → risco integral (não admite excludentes).\n\nArt. 37, §6º: pessoas jurídicas de direito público e de direito privado prestadoras de serviço público respondem objetivamente pelos danos que seus agentes, nessa qualidade, causarem a terceiros; contra o agente cabe regresso, só com dolo ou culpa.\n• Excludentes no risco administrativo: culpa exclusiva da vítima, caso fortuito ou força maior e fato exclusivo de terceiro; a culpa concorrente reduz a indenização.\n• Risco integral (sem excludentes): dano nuclear, dano ambiental e atentados terroristas ou atos de guerra contra aeronaves brasileiras.\n• Omissão: a posição tradicional exige culpa do serviço (subjetiva); o STF aplica a objetiva quando havia dever específico de agir. Ex.: morte de detento — o Estado responde quando descumpre o dever de proteção do art. 5º, XLIX (Tema 592).\n• Concessionária responde objetivamente também perante terceiros não usuários do serviço (RE 591.874).\n• Dupla garantia (Tema 940): a vítima processa o Estado ou a prestadora, não o agente diretamente.\n• Policial que, de folga, causa dano com a arma da corporação: o Estado responde.\n• Prazo para a vítima: 5 anos.\n• Atos legislativos e judiciais: em regra, não geram indenização. Exceções: lei de efeitos concretos e lei declarada inconstitucional; erro judiciário e prisão além do tempo fixado na sentença (art. 5º, LXXV).",
    },
  ],
  dh: [
    {
      titulo: "Construção histórica, dimensões e características",
      aula: "Aulas 01 e 02 — Processo Histórico e Teoria Geral",
      texto:
        "Marcos: Magna Carta (Inglaterra, 1215 — limita o poder do rei); Petition of Rights (1628), Habeas Corpus Act (1679) e Bill of Rights (1689); Declaração de Direitos da Virgínia e Independência dos EUA (1776); Declaração dos Direitos do Homem e do Cidadão (França, 1789); Constituições do México (1917) e de Weimar (1919), que trouxeram os direitos sociais; Carta da ONU (1945); Declaração Universal (10/12/1948 — resolução da Assembleia Geral, sem força de tratado, mas hoje tida como costume internacional); Pactos Internacionais de 1966 (Direitos Civis e Políticos; Direitos Econômicos, Sociais e Culturais), que com a DUDH formam a Carta Internacional de Direitos Humanos.\n\nDimensões (ou gerações — Karel Vasak, inspiradas no lema da Revolução Francesa):\n• 1ª — liberdade: direitos civis e políticos; exigem abstenção do Estado.\n• 2ª — igualdade: direitos sociais, econômicos e culturais; exigem prestações do Estado.\n• 3ª — fraternidade: direitos difusos (meio ambiente, paz, desenvolvimento, autodeterminação dos povos).\n• 4ª e 5ª — sem consenso (Bobbio: biotecnologia e patrimônio genético; Bonavides: democracia, informação e pluralismo na 4ª, paz na 5ª).\nO termo \"dimensões\" é preferido porque uma não substitui a outra: elas se somam.\n\nCaracterísticas: universalidade; indivisibilidade, interdependência e inter-relação (Declaração de Viena, 1993); inalienabilidade, imprescritibilidade e irrenunciabilidade; historicidade; inerência (pertencem a todos pela simples condição humana); relatividade (não são absolutos e podem ser ponderados); vedação ao retrocesso ou efeito cliquet (o nível de proteção já alcançado não pode ser suprimido); complementaridade.",
    },
    {
      titulo: "ONU: órgãos principais e Conselho de Direitos Humanos",
      aula: "Aula 03 — Direito Internacional dos Direitos Humanos",
      texto:
        "A ONU foi criada pela Carta de São Francisco (1945). Órgãos principais:\n• Assembleia Geral — todos os Estados-membros, um voto cada; em regra faz recomendações.\n• Conselho de Segurança — 15 membros: 5 permanentes com poder de veto (EUA, Rússia, China, Reino Unido e França) e 10 eleitos para mandatos de 2 anos; suas decisões sobre paz e segurança obrigam os Estados.\n• Conselho Econômico e Social (ECOSOC) — 54 membros eleitos pela Assembleia Geral.\n• Conselho de Tutela — suspendeu as atividades em 1994, quando o último território sob tutela (Palau) se tornou independente.\n• Corte Internacional de Justiça — Haia, 15 juízes com mandato de 9 anos; julga litígios entre ESTADOS (não julga pessoas) e emite pareceres consultivos.\n• Secretariado — braço executivo e administrativo, chefiado pelo Secretário-Geral (nomeado pela Assembleia Geral por recomendação do Conselho de Segurança, mandato de 5 anos).\n\nConselho de Direitos Humanos: criado em 2006 para substituir a antiga Comissão; órgão subsidiário da Assembleia Geral, com 47 Estados e sede em Genebra; faz a Revisão Periódica Universal (RPU), que avalia a situação de direitos humanos de todos os Estados-membros. O Alto Comissariado (ACNUDH, 1993) coordena a atuação da ONU na área.\nSistema dos tratados: cada tratado tem um comitê que recebe relatórios periódicos dos Estados e, quando aceito, petições individuais e comunicações entre Estados.\n\nO Tribunal Penal Internacional (Estatuto de Roma, 1998, em Haia) NÃO é órgão da ONU: é organização autônoma, julga INDIVÍDUOS por genocídio, crimes contra a humanidade, crimes de guerra e agressão, e atua de forma complementar às justiças nacionais. O Brasil se submete à sua jurisdição (CF, art. 5º, §4º).",
      exemplos: [
        "Disputa de fronteira entre dois países → Corte Internacional de Justiça. Julgamento de um chefe militar por genocídio → Tribunal Penal Internacional.",
      ],
    },
    {
      titulo: "Minorias, grupos vulneráveis e decisões dos tribunais",
      aula: "Aulas 08 e 09 — Grupos Vulneráveis e Segurança Pública",
      texto:
        "Minorias: grupos numericamente inferiores, em posição não dominante, com identidade étnica, religiosa ou linguística própria que desejam preservar (PIDCP, art. 27). Grupos vulneráveis: estão em desvantagem social, qualquer que seja o seu número — mulheres, crianças, idosos e pessoas com deficiência, por exemplo, podem até ser maioria.\n\nDecisões citadas no curso:\n• STF, ADPF 132 e ADI 4.277 (2011): união estável homoafetiva reconhecida.\n• STF, ADPF 291: não foram recepcionadas as expressões discriminatórias sobre orientação sexual no Código Penal Militar.\n• STF, ADO 26 e MI 4.733 (2019): homofobia e transfobia punidas como racismo (Lei 7.716/89) até que haja lei específica.\n• STF, ADI 5.971: políticas públicas não podem excluir famílias formadas por união homoafetiva.\n• STF, ADPF 467: é inconstitucional excluir a diversidade de gênero e a orientação sexual das políticas de educação (caso de Ipatinga/MG).\n• STF, ADI 5.543 (2020): é inconstitucional restringir a doação de sangue com base na orientação sexual.\n• STF, ADPF 787 (2024): garantias de atendimento à população trans no SUS, inclusive na Declaração de Nascido Vivo dos filhos.\n• STF, ADPF 976: o governo federal deve elaborar plano para uma política nacional voltada à população em situação de rua; a Lei 14.821/2024 (PNTC PopRua) veio cumprir essa decisão.\n• STJ, REsp 2.135.967 (2025): pessoa não binária pode retificar o registro civil para constar gênero neutro.\n\nSegurança pública: as guardas municipais integram o Sistema Único de Segurança Pública (STF, ADPF 995, 2023); a Força Nacional só atua num estado a pedido do governador, em respeito à autonomia federativa (STF, ACO 3.427).\nTratamento de presos: Regras de Mandela (regras mínimas da ONU, revistas em 2015); Regras de Bangkok (mulheres presas); Regras de Tóquio (medidas não privativas de liberdade).",
    },
  ],
};
