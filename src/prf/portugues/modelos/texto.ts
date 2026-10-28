import type { ModeloPt } from "../tipos";

const T_INTERP = "Compreensão e interpretação de textos";

export const MODELOS_TEXTO: ModeloPt[] = [
  {
    id: "coesao",
    titulo: "Coesão: referência e conectivos",
    grupo: "aprofundamento",
    gancho: "**Coesão** é a costura visível do texto: pronomes, sinônimos e conectivos. Em prova, duas perguntas resolvem quase tudo: **a quem esse termo se refere?** e **que relação esse conectivo cria?**",
    topicosPrf: [T_INTERP, "Emprego das classes de palavras", "Sintaxe da oração e do período"],
    blocos: [
      {
        tipo: "chaves",
        titulo: "Mecanismos de coesão",
        ramos: [
          { rotulo: "Referencial por pronome", exemplo: "A viatura quebrou. **Ela** foi rebocada." },
          { rotulo: "Referencial por sinônimo ou hiperônimo", exemplo: "Apreenderam o caminhão. **O veículo** estava sem placa." },
          { rotulo: "Elipse", texto: "o termo some, mas é recuperável", exemplo: "Os agentes chegaram e Ø multaram." },
          { rotulo: "Anáfora × catáfora", texto: "retoma o que veio antes × anuncia o que vem depois", exemplo: "Isso preocupa (anáfora). Só peço **isto**: atenção (catáfora)." },
          { rotulo: "Sequencial", texto: "conectivos encadeiam as ideias e marcam a relação entre elas", exemplo: "Choveu; **por isso**, a pista fechou." },
        ],
      },
      {
        tipo: "grade",
        titulo: "Conectivos por relação",
        colunas: ["Conectivos", "Exemplo"],
        linhas: [
          { rotulo: "adição", valores: ["e, nem, além disso, também, não só... mas também", "Multou e apreendeu."] },
          { rotulo: "oposição", valores: ["mas, porém, contudo, todavia, entretanto, no entanto", "Correu, mas não chegou."] },
          { rotulo: "concessão", valores: ["embora, ainda que, mesmo que, apesar de", "Embora corresse, não chegou."] },
          { rotulo: "causa", valores: ["porque, já que, visto que, uma vez que, como (no início)", "Como chovia, adiou."] },
          { rotulo: "consequência", valores: ["(tão, tanto)... que, de modo que", "Choveu tanto que alagou."] },
          { rotulo: "conclusão", valores: ["logo, portanto, por isso, assim, pois (depois do verbo)", "Estudou; passou, pois, na prova."] },
          { rotulo: "condição", valores: ["se, caso, desde que (+ subjuntivo), contanto que", "Caso chova, adie."] },
          { rotulo: "finalidade", valores: ["para que, a fim de que", "Sinalizou para que parassem."] },
          { rotulo: "tempo", valores: ["quando, enquanto, assim que, logo que, mal", "Assim que chegou, assinou."] },
          { rotulo: "conformidade", valores: ["conforme, segundo, consoante, como", "Agiu conforme a norma mandava."] },
          { rotulo: "proporção", valores: ["à medida que, à proporção que", "À medida que avançava, freava."] },
          { rotulo: "reformulação", valores: ["isto é, ou seja, ou melhor", "Infração grave, ou seja, cinco pontos."] },
        ],
      },
      {
        tipo: "comparativo",
        titulo: "Este × esse × aquele no texto",
        colunas: [
          { titulo: "Este", itens: ["o que **ainda vai** ser dito (catáfora)", "entre dois termos, o **mais próximo**"] },
          { titulo: "Esse", itens: ["o que **já foi** dito (anáfora)", "Esse problema, citado acima, persiste."] },
          { titulo: "Aquele", itens: ["entre dois termos, o **mais distante**", "Ana e Rui chegaram: este de carro, aquela a pé."] },
        ],
        sintese: "Em 'Ana e Rui chegaram: este de carro, aquela a pé', 'este' = Rui (o mais próximo) e 'aquela' = Ana (a mais distante).",
      },
      {
        tipo: "passos",
        frase: "Reescreva 'Embora chovesse, a operação seguiu' com 'mas', sem mudar o sentido.",
        passos: [
          "Identifique a relação: concessão (o fato contrário não impediu o principal).",
          "'Mas' é adversativo: mantém a ideia de contraste, mas muda a estrutura.",
          "Ajuste o verbo e a ordem: a concessiva usa subjuntivo (chovesse); a adversativa, indicativo (chovia).",
        ],
        conclusao: "'Chovia, mas a operação seguiu.' O sentido se mantém; a estrutura muda.",
      },
      {
        tipo: "macete",
        texto: "Antes de classificar o conectivo, troque por outro da mesma linha da tabela.",
        explicacao: "Se a frase continua com o mesmo sentido, a relação está certa. Se não cabe, procure em outra linha.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "O agente apreendeu o caminhão. **O veículo** estava sem placa.", analise: "Retomada por hiperônimo: 'veículo' é termo mais geral que 'caminhão'.", concurso: true },
          { frase: "O problema é **este**: faltam viaturas.", analise: "'Este' anuncia o que vem depois: catáfora.", concurso: true },
          { frase: "O agente falou com o motorista, e **ele** ficou nervoso.", analise: "Referência ambígua: 'ele' pode ser o agente ou o motorista. Falha de coesão." },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Pois muda de valor pela posição", texto: "Antes do verbo, explica (Saiu, pois chovia). Depois do verbo, entre vírgulas, conclui (Chovia; saiu, pois, mais cedo)." },
          { titulo: "Desde que tem dois sentidos", texto: "+ subjuntivo = condição (desde que chegue cedo). + indicativo = tempo (desde que chegou, trabalha)." },
          { titulo: "Concessão × oposição", texto: "Ambas contrastam, mas a concessiva fica na oração subordinada (embora...) e a adversativa, na coordenada (mas...)." },
        ],
      },
    ],
  },
  {
    id: "coerencia-intertextualidade",
    titulo: "Coerência e intertextualidade",
    grupo: "aprofundamento",
    gancho: "**Coerência** é o texto fazer sentido e não se contradizer. **Intertextualidade** é um texto conversar com outro: citando, parafraseando, parodiando ou aludindo.",
    topicosPrf: [T_INTERP],
    blocos: [
      {
        tipo: "chaves",
        titulo: "Fatores de coerência",
        ramos: [
          { rotulo: "Não contradição", texto: "uma parte não desmente a outra", exemplo: "erro: 'o trecho estava deserto; os carros buzinavam em fila'" },
          { rotulo: "Continuidade", texto: "o texto mantém o tema", exemplo: "os parágrafos tratam do mesmo assunto" },
          { rotulo: "Progressão", texto: "cada parte acrescenta informação nova", exemplo: "sem repetir a mesma ideia com outras palavras" },
          { rotulo: "Relação com o mundo", texto: "compatível com a realidade ou com o mundo que o texto cria", exemplo: "num texto técnico, dados verificáveis" },
        ],
      },
      {
        tipo: "chaves",
        titulo: "Formas de intertextualidade",
        ramos: [
          { rotulo: "Citação", texto: "reprodução marcada, com aspas e fonte", exemplo: "Como diz a Constituição, 'todos são iguais perante a lei'." },
          { rotulo: "Paráfrase", texto: "mesma ideia, outras palavras", exemplo: "reafirma o sentido do original" },
          { rotulo: "Paródia", texto: "imita a forma para subverter o sentido", exemplo: "humor ou crítica" },
          { rotulo: "Alusão", texto: "referência indireta, que exige repertório", exemplo: "Ele tem a paciência de Jó." },
          { rotulo: "Epígrafe", texto: "trecho no início que antecipa o tema", exemplo: "frase de um autor antes do capítulo" },
          { rotulo: "Pastiche", texto: "imita o estilo, sem intenção de crítica", exemplo: "texto 'à maneira de' um autor" },
        ],
      },
      {
        tipo: "comparativo",
        titulo: "Paráfrase × paródia",
        colunas: [
          { titulo: "Paráfrase", itens: ["**confirma** o original", "muda as palavras, mantém a ideia", "comum em resumos e reescritas"] },
          { titulo: "Paródia", itens: ["**subverte** o original", "mantém a forma reconhecível, muda o sentido", "efeito de humor ou de crítica"] },
        ],
        sintese: "A paráfrase repete a ideia; a paródia vira a ideia do avesso.",
      },
      {
        tipo: "comparativo",
        titulo: "Coesão × coerência",
        colunas: [
          { titulo: "Coesão", itens: ["ligação **na superfície**", "pronomes, conectivos, sinônimos", "pode faltar em texto coerente"] },
          { titulo: "Coerência", itens: ["sentido **no conjunto**", "lógica, não contradição, tema", "pode faltar em texto coeso"] },
        ],
        sintese: "'O carro é vermelho. Vermelho é a cor do sangue. O sangue é vital.' É coeso (as palavras se ligam), mas sem coerência (não há sentido global).",
      },
      {
        tipo: "macete",
        texto: "Coesão costura as frases; coerência dá sentido ao tecido.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "'Minha terra tem palmeiras onde canta o sabiá' → 'Minha terra tem engarrafamentos onde buzina o caminhão'.", analise: "Paródia: mantém a forma do poema de Gonçalves Dias e troca o sentido para criticar a vida urbana.", concurso: true },
          { frase: "'O trecho estava deserto; os carros, parados em fila, buzinavam sem parar.'", analise: "Incoerência: o trecho não pode estar deserto e ter fila de carros ao mesmo tempo.", concurso: true },
          { frase: "'Ele tem a paciência de Jó.'", analise: "Alusão a uma personagem bíblica: exige repertório do leitor." },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Paródia não é só piada", texto: "Pode ter tom sério de crítica social; o traço que define é a inversão do sentido." },
          { titulo: "Explícita × implícita", texto: "Com fonte e aspas, a intertextualidade é explícita; sem marca, implícita, e depende do repertório do leitor." },
          { titulo: "Texto coeso pode ser incoerente", texto: "Conectivo certo não garante sentido: a banca testa os dois separadamente." },
        ],
      },
    ],
  },
  {
    id: "tipos-discurso",
    titulo: "Discurso direto, indireto e indireto livre",
    grupo: "aprofundamento",
    gancho: "**Direto**: a fala do personagem, com travessão ou aspas. **Indireto**: o narrador conta o que foi dito. **Indireto livre**: a voz do personagem se mistura à do narrador, sem aviso.",
    topicosPrf: [T_INTERP, "Pontuação"],
    blocos: [
      {
        tipo: "comparativo",
        titulo: "Os três discursos",
        colunas: [
          { titulo: "Direto", itens: ["reproduz a fala como foi dita", "travessão ou aspas; verbo dicendi (disse, perguntou)", "O agente disse: — Pare o carro."] },
          { titulo: "Indireto", itens: ["o narrador relata a fala", "oração introduzida por 'que' ou 'se'", "O agente disse que parasse o carro."] },
          { titulo: "Indireto livre", itens: ["fala ou pensamento do personagem dentro da narração", "sem travessão nem verbo dicendi", "O motorista olhou o relógio. Como ia explicar o atraso?"] },
        ],
      },
      {
        tipo: "grade",
        titulo: "Transposição do direto para o indireto",
        colunas: ["Direto", "Indireto"],
        linhas: [
          { rotulo: "pessoa", valores: ["eu, nós, meu", "ele, eles, seu"] },
          { rotulo: "presente", valores: ["'Estou cansado.'", "estava cansado"] },
          { rotulo: "pretérito perfeito", valores: ["'Saí cedo.'", "saíra (tinha saído) cedo"] },
          { rotulo: "futuro do presente", valores: ["'Voltarei.'", "voltaria"] },
          { rotulo: "imperativo", valores: ["'Pare o carro!'", "que parasse o carro"] },
          { rotulo: "pergunta", valores: ["'Você viu?'", "perguntou se ele tinha visto"] },
          { rotulo: "tempo e lugar", valores: ["este, aqui, hoje, amanhã", "aquele, ali, naquele dia, no dia seguinte"] },
        ],
      },
      {
        tipo: "passos",
        frase: "O agente disse: — Amanhã eu volto aqui.",
        passos: [
          "Tire o travessão e introduza a fala com 'que'.",
          "Pessoa: eu → ele.",
          "Tempo verbal: o presente com valor de futuro (volto) → futuro do pretérito (voltaria).",
          "Tempo e lugar: amanhã → no dia seguinte; aqui → ali.",
        ],
        conclusao: "O agente disse que no dia seguinte voltaria ali.",
      },
      {
        tipo: "macete",
        texto: "Do direto para o indireto, tudo recua um passo.",
        explicacao: "No tempo (presente → imperfeito; perfeito → mais-que-perfeito; futuro → futuro do pretérito), na pessoa (eu → ele) e no espaço (aqui → ali, este → aquele).",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "O motorista olhou o relógio. Meu Deus, como ia explicar o atraso? Acelerou.", analise: "A pergunta é pensamento do personagem, sem travessão nem verbo dicendi: indireto livre.", concurso: true },
          { frase: "— Você conferiu os documentos? — perguntou o chefe. → O chefe perguntou se ele tinha conferido os documentos.", analise: "Pergunta direta vira oração com 'se'; o perfeito vira mais-que-perfeito composto.", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Indireto livre não tem marca gráfica", texto: "Se aparecer travessão ou aspas, não é indireto livre." },
          { titulo: "Verbo dicendi pode vir depois", texto: "'— Pare! — gritou o agente': o verbo que introduz a fala pode vir no meio ou no fim." },
          { titulo: "Imperativo vira subjuntivo", texto: "'Saia!' → mandou que saísse." },
        ],
      },
    ],
  },
];
