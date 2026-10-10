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
};
