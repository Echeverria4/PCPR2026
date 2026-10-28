import type { Licao } from "../tipos";

export const CONJUNCAO: Licao = {
  id: "conjuncao",
  titulo: "Conjunção",
  classe: "conjuncao",
  resumo: "A palavra **invariável** que liga **orações** (ou termos de mesma função), criando entre elas uma relação de sentido: adição, oposição, causa, condição, concessão...",
  modelo: [
    {
      tipo: "chaves",
      titulo: "Coordenativas (orações independentes)",
      ramos: [
        { rotulo: "Aditivas", classe: "conjuncao", exemplo: "e, nem, não só... mas também" },
        { rotulo: "Adversativas", classe: "conjuncao", exemplo: "mas, porém, contudo, todavia, entretanto, no entanto" },
        { rotulo: "Alternativas", classe: "conjuncao", exemplo: "ou, ou... ou, ora... ora, quer... quer" },
        { rotulo: "Conclusivas", classe: "conjuncao", exemplo: "logo, portanto, por isso, pois (depois do verbo)" },
        { rotulo: "Explicativas", classe: "conjuncao", exemplo: "que, porque, pois (antes do verbo)" },
      ],
    },
    {
      tipo: "chaves",
      titulo: "Subordinativas (uma oração depende da outra)",
      ramos: [
        { rotulo: "Integrantes", classe: "conjuncao", texto: "iniciam oração substantiva", exemplo: "que, se (Disse que viria. Não sei se virá.)" },
        { rotulo: "Causais", classe: "conjuncao", exemplo: "porque, como (no início), já que, visto que, uma vez que" },
        { rotulo: "Concessivas", classe: "conjuncao", exemplo: "embora, ainda que, mesmo que, conquanto, se bem que" },
        { rotulo: "Condicionais", classe: "conjuncao", exemplo: "se, caso, desde que (+ subjuntivo), contanto que" },
        { rotulo: "Temporais", classe: "conjuncao", exemplo: "quando, enquanto, logo que, assim que, desde que (+ indicativo)" },
        { rotulo: "Finais", classe: "conjuncao", exemplo: "para que, a fim de que" },
        { rotulo: "Consecutivas", classe: "conjuncao", exemplo: "(tão, tanto, tal)... que, de modo que" },
        { rotulo: "Comparativas, conformativas, proporcionais", classe: "conjuncao", exemplo: "como, (mais) que / conforme, segundo, consoante / à medida que, à proporção que" },
      ],
    },
  ],
  secoes: [
    {
      letra: "A",
      blocos: [
        {
          tipo: "texto",
          texto:
            "Conjunção é a palavra invariável que **conecta orações** (Estudei, **mas** não fui bem) ou **termos de mesma função** (agentes **e** servidores). Na **coordenação**, as orações têm sentido próprio; na **subordinação**, uma oração completa ou modifica a outra.",
        },
        {
          tipo: "frase",
          palavras: [
            ["Gosto", "verbo"],
            ["de", "preposicao"],
            ["estudar", "verbo", "infinitivo"],
            [","],
            ["mas", "conjuncao", "adversativa"],
            ["estou", "verbo", "de ligação"],
            ["cansado", "adjetivo"],
            ["."],
          ],
          comentario: "'Mas' liga duas orações independentes e marca oposição: a segunda ideia (cansaço) prevalece.",
        },
      ],
    },
    {
      letra: "B",
      blocos: [
        {
          tipo: "fluxo",
          titulo: "Que tipo de conjunção é?",
          passos: [
            { pergunta: "As orações se sustentam sozinhas se você separá-las com ponto?", sim: "**Coordenativa**: veja a relação (soma, oposição, alternativa, conclusão, explicação).", classe: "conjuncao" },
            { pergunta: "A oração com a conjunção pode ser trocada por 'isso' (Disse **isso**)?", sim: "**Integrante** (que, se): oração substantiva.", classe: "conjuncao" },
            { pergunta: "A oração indica causa, condição, concessão, tempo, fim, consequência...?", sim: "**Subordinativa adverbial**: classifique pela circunstância.", classe: "conjuncao" },
          ],
          senao: "Se o 'que' retoma um nome (troca por 'o qual'), não é conjunção: é pronome relativo.",
        },
      ],
    },
    {
      letra: "C",
      blocos: [
        {
          tipo: "texto",
          texto:
            "A conjunção não tem função sintática: ela é o **conectivo** que revela a relação lógica entre as ideias. Por isso as bancas cobram troca de conectivos: a substituição só é correta se mantiver o **mesmo valor** (mas = porém = contudo) e a correção gramatical (embora pede subjuntivo; apesar de pede nome ou infinitivo).",
        },
        {
          tipo: "grade",
          titulo: "Troca de conectivo: o que muda junto",
          colunas: ["Exemplo"],
          linhas: [
            { rotulo: "Embora / ainda que (+ subjuntivo)", valores: ["**Embora** estivesse cansado, trabalhou."] },
            { rotulo: "Apesar de (+ infinitivo ou nome)", valores: ["**Apesar de** estar cansado / **apesar do** cansaço"] },
            { rotulo: "Mas / porém (+ indicativo)", valores: ["Estava cansado, **mas** trabalhou."] },
          ],
          nota: "Concessiva e adversativa expressam a mesma oposição com estruturas diferentes: trocar uma pela outra exige reescrever o período.",
        },
      ],
    },
    {
      letra: "D",
      blocos: [
        {
          tipo: "comparativo",
          titulo: "Adversativa × concessiva",
          colunas: [
            { titulo: "Adversativa (mas)", classe: "conjuncao", itens: ["Choveu, **mas** a operação continuou.", "A ideia **depois** do 'mas' prevalece", "Coordenação"] },
            { titulo: "Concessiva (embora)", classe: "conjuncao", itens: ["**Embora** chovesse, a operação continuou.", "A oração do 'embora' traz o **obstáculo que perde**", "Subordinação"] },
          ],
          sintese: "Nos dois casos vence 'a operação continuou'. Muda só a estrutura.",
        },
        {
          tipo: "comparativo",
          titulo: "Explicativa × causal",
          colunas: [
            { titulo: "Explicativa", classe: "conjuncao", itens: ["Choveu, **porque** a pista está molhada.", "Justifica a **afirmação** (a pista é o indício)", "Vem depois de vírgula; comum após ordem: Saia, **que** vai chover."] },
            { titulo: "Causal", classe: "conjuncao", itens: ["A pista está molhada **porque** choveu.", "Dá a **causa real** do fato (a chuva vem antes)", "Troca por 'já que', 'visto que'"] },
          ],
          sintese: "Pergunte: a oração diz por que o fato aconteceu (causal) ou por que eu afirmo isso (explicativa)?",
        },
        {
          tipo: "comparativo",
          titulo: "Desde que: tempo × condição",
          colunas: [
            { titulo: "Temporal (+ indicativo)", classe: "conjuncao", itens: ["**Desde que** assumiu, reduziu os acidentes.", "= a partir do momento em que"] },
            { titulo: "Condicional (+ subjuntivo)", classe: "conjuncao", itens: ["Você entra, **desde que** apresente o crachá.", "= contanto que, se"] },
          ],
        },
      ],
    },
    {
      letra: "E",
      blocos: [
        {
          tipo: "exemplos",
          itens: [
            { frase: "Estudou muito; passou, **pois**, na prova.", analise: "'Pois' depois do verbo e entre vírgulas = portanto: conclusiva." },
            { frase: "Passou na prova, **pois** estudou muito.", analise: "'Pois' antes do verbo = porque: explicativa." },
            {
              frase: "**Ou** o motorista paga a multa, **ou** recorre.",
              analise: "Conjunção alternativa: as opções se excluem. Repetida (ou... ou), leva vírgula antes do segundo 'ou'.",
            },
            {
              frase: "**Não só** fiscalizou a carga, **mas também** orientou o motorista.",
              analise: "Aditiva correlativa: soma as duas ações com ênfase (não só... mas também, não só... como também).",
            },
            {
              frase: "Estudou o ano inteiro **e** não passou.",
              analise: "O 'e' pode ter valor adversativo (= mas) quando liga ideias que se contrariam. A banca pergunta o valor no contexto.",
              concurso: true,
            },
            {
              frase: "**Como** a pista estava interditada, os motoristas desviaram **como** o agente orientou.",
              analise: "1º 'como' (no início, = porque): causal. 2º 'como' (= conforme): conformativo. A mesma palavra, dois valores.",
              concurso: true,
            },
            {
              frase: "**À medida que** o prazo se aproximava, a fila crescia. × A pista fechou, **na medida em que** não havia visibilidade.",
              analise: "À medida que = proporção (= conforme, quanto mais). Na medida em que = causa (= porque, tendo em vista que). 'À medida em que' mistura as duas e está errado.",
              concurso: true,
            },
            {
              frase: "Pague a multa, **senão** o carro fica retido. × **Se não** pagar a multa, perderá o desconto.",
              analise: "Junto, 'senão' = caso contrário (ou 'mas sim': não foi o motorista, senão o passageiro). Separado, é a conjunção condicional 'se' + o advérbio 'não': troca por 'caso não' (caso não pague).",
              concurso: true,
            },
            {
              frase: "**Conquanto** fosse tarde, o agente concluiu a vistoria.",
              analise: "Conquanto = embora (concessiva, com subjuntivo). Não confundir com porquanto (= porque, causal ou explicativa).",
              concurso: true,
            },
          ],
        },
      ],
    },
    {
      letra: "F",
      blocos: [
        {
          tipo: "pegadinhas",
          itens: [
            { titulo: "Trocar 'embora' por 'mas' sem reescrever", texto: "'Embora chovesse, continuou' → 'Chovia, mas continuou'. Trocar só a palavra ('Mas chovesse, continuou') quebra a frase." },
            { titulo: "'Se' integrante × condicional", texto: "'Não sei **se** ele vem' (= isso): integrante. '**Se** ele vier, resolve' (= caso): condicional." },
            { titulo: "'Que' consecutivo", texto: "'Correu **tanto que** cansou': o 'que' depois de tão/tanto/tal indica consequência." },
            { titulo: "'Porém' deslocado", texto: "Adversativas (exceto 'mas') podem vir no meio da oração, entre vírgulas: 'O agente, **porém**, não concordou'. O 'mas' fica sempre no início." },
          ],
        },
      ],
    },
    {
      letra: "G",
      blocos: [
        {
          tipo: "macete",
          texto: "Com **mas**, ganha quem vem **depois**; com **embora**, a oração do embora **perde**.",
        },
        {
          tipo: "macete",
          texto: "**Pois** antes do verbo **explica**; depois do verbo, entre vírgulas, **conclui**.",
        },
      ],
    },
    {
      letra: "H",
      blocos: [
        {
          tipo: "passos",
          frase: "Como a pista estava molhada, o agente pediu que os motoristas reduzissem a velocidade, mas alguns não obedeceram.",
          passos: [
            "Ache os conectivos: **como**, **que**, **mas**.",
            "**Como** no início, antes da oração com o motivo: troca por 'porque' / 'já que': **causal** (subordinativa).",
            "**que** (pediu que...): a oração troca por 'isso' (pediu isso): **integrante** (oração substantiva objetiva direta).",
            "**mas**: liga duas orações independentes com oposição: **adversativa** (coordenativa).",
          ],
          conclusao: "três conjunções: causal, integrante e adversativa.",
        },
      ],
    },
    {
      letra: "I",
      blocos: [
        {
          tipo: "lista",
          itens: [
            "Coordenativas: aditivas, adversativas, alternativas, conclusivas e explicativas.",
            "Subordinativas: integrantes (que, se) e adverbiais (causal, concessiva, condicional, temporal, final, consecutiva, comparativa, conformativa, proporcional).",
            "Mas: o que vem depois prevalece. Embora: o obstáculo vencido; pede subjuntivo.",
            "Pois antes do verbo = explicativa; depois, entre vírgulas = conclusiva.",
            "Desde que + indicativo = tempo; + subjuntivo = condição.",
            "'Que' que troca por 'o qual' é pronome relativo, não conjunção.",
          ],
        },
      ],
    },
  ],
};
