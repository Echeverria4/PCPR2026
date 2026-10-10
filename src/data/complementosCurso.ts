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
};
