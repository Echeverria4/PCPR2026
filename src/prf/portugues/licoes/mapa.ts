import type { Licao } from "../tipos";

export const MAPA: Licao = {
  id: "mapa",
  titulo: "Mapa das classes de palavras",
  resumo:
    "As 10 classes, o que cada uma representa e um fluxograma que decide a classe de qualquer palavra pelo **papel que ela tem na frase**.",
  modelo: [
    {
      tipo: "chaves",
      titulo: "6 variáveis (mudam de forma)",
      ramos: [
        { rotulo: "Substantivo", classe: "substantivo", texto: "dá nome", exemplo: "caderno, coragem, Brasil" },
        { rotulo: "Artigo", classe: "artigo", texto: "determina o nome", exemplo: "o, a, um, uma" },
        { rotulo: "Adjetivo", classe: "adjetivo", texto: "caracteriza o nome", exemplo: "estudioso, rodoviário" },
        { rotulo: "Numeral", classe: "numeral", texto: "quantidade exata ou ordem", exemplo: "dois, segundo, dobro" },
        { rotulo: "Pronome", classe: "pronome", texto: "substitui ou acompanha o nome", exemplo: "eu, meu, este, algum" },
        { rotulo: "Verbo", classe: "verbo", texto: "ação, estado ou fenômeno, no tempo", exemplo: "estudar, ser, chover" },
      ],
    },
    {
      tipo: "chaves",
      titulo: "4 invariáveis (forma fixa)",
      ramos: [
        { rotulo: "Advérbio", classe: "adverbio", texto: "circunstância do verbo", exemplo: "ontem, muito, aqui, não" },
        { rotulo: "Preposição", classe: "preposicao", texto: "liga dois termos", exemplo: "de, em, para, com" },
        { rotulo: "Conjunção", classe: "conjuncao", texto: "liga orações", exemplo: "e, mas, porque, embora" },
        { rotulo: "Interjeição", classe: "interjeicao", texto: "emoção numa frase só", exemplo: "Ufa! Psiu! Ai!" },
      ],
    },
    {
      tipo: "texto",
      texto:
        "Morfologia pergunta **o que a palavra é**; sintaxe pergunta **o que ela faz**. A classe sai do uso: a mesma forma pode ser verbo numa frase (eu estudo) e substantivo em outra (o estudo).",
    },
  ],
  secoes: [
    {
      letra: "A",
      blocos: [
        {
          tipo: "texto",
          texto:
            "Classes de palavras (ou classes gramaticais) são os grupos em que a gramática reúne as palavras pela **forma** (se flexionam ou não), pelo **sentido** (o que representam) e pela **função** (o papel na frase). A Nomenclatura Gramatical Brasileira (NGB) reconhece dez.",
        },
        {
          tipo: "comparativo",
          titulo: "Quatro famílias",
          colunas: [
            {
              titulo: "Família do nome",
              classe: "substantivo",
              itens: [
                "**Substantivo**: o núcleo",
                "**Artigo, adjetivo, numeral e pronome adjetivo**: acompanham e concordam com ele",
              ],
            },
            {
              titulo: "Família do verbo",
              classe: "verbo",
              itens: ["**Verbo**: o núcleo do predicado", "**Advérbio**: acrescenta circunstância e não concorda"],
            },
            {
              titulo: "Conectivos",
              classe: "preposicao",
              itens: ["**Preposição**: liga um termo a outro", "**Conjunção**: liga orações ou termos de mesma função"],
            },
            {
              titulo: "À parte",
              classe: "interjeicao",
              itens: ["**Interjeição**: vale por uma frase inteira e não se encaixa na estrutura da oração"],
            },
          ],
        },
        {
          tipo: "grade",
          titulo: "Varia de forma?",
          colunas: ["Varia?", "Flexões"],
          linhas: [
            { rotulo: "Substantivo", valores: ["sim", "gênero, número e grau"] },
            { rotulo: "Artigo", valores: ["sim", "gênero e número"] },
            { rotulo: "Adjetivo", valores: ["sim", "gênero, número e grau"] },
            { rotulo: "Numeral", valores: ["sim", "alguns: dois/duas, primeiro/primeira"] },
            { rotulo: "Pronome", valores: ["sim", "gênero, número e pessoa"] },
            { rotulo: "Verbo", valores: ["sim", "pessoa, número, tempo, modo e voz"] },
            { rotulo: "Advérbio", valores: ["não", "—"] },
            { rotulo: "Preposição", valores: ["não", "—"] },
            { rotulo: "Conjunção", valores: ["não", "—"] },
            { rotulo: "Interjeição", valores: ["não", "—"] },
          ],
          nota: "Alguns advérbios ganham forma afetiva (cedinho, pertinho, muitíssimo). Isso não os torna variáveis: não há concordância.",
        },
      ],
    },
    {
      letra: "B",
      blocos: [
        {
          tipo: "fluxo",
          titulo: "Fluxograma: faça as perguntas nesta ordem",
          passos: [
            {
              pergunta: "É uma exclamação que vale por uma frase inteira, de emoção ou apelo (Ufa!, Psiu!)?",
              sim: "**Interjeição**.",
              classe: "interjeicao",
            },
            {
              pergunta: "Indica ação, estado ou fenômeno e muda com pessoa e tempo (estudo, estudei, estudarei)?",
              sim: "**Verbo**. Se vier com artigo antes (**o** estudo), virou substantivo.",
              classe: "verbo",
            },
            {
              pergunta: "Liga duas palavras, e a segunda completa a primeira (gosto **de** café, livro **na** mesa)?",
              sim: "**Preposição** (sozinha ou unida a artigo ou pronome: na = em + a).",
              classe: "preposicao",
            },
            {
              pergunta: "Liga duas orações, ou dois termos de mesma função (estudei, **mas** errei; Ana **e** Rui)?",
              sim: "**Conjunção**. Se o 'que' puder virar 'o qual', é pronome relativo, não conjunção.",
              classe: "conjuncao",
            },
            {
              pergunta: "Dá nome a ser, coisa, lugar, ideia ou sentimento, e aceita artigo antes (o caderno, a coragem)?",
              sim: "**Substantivo**.",
              classe: "substantivo",
            },
            {
              pergunta: "Indica pessoa do discurso, posse, posição, quantidade vaga ou retoma um nome (eu, meu, este, algum, cujo)?",
              sim: "**Pronome**.",
              classe: "pronome",
            },
            {
              pergunta: "Indica quantidade exata, ordem, multiplicação ou fração (dois, segundo, dobro, metade)?",
              sim: "**Numeral**. O 'um' é numeral quando aceita 'só' ou 'apenas' com sentido de quantidade.",
              classe: "numeral",
            },
            {
              pergunta: "Vem antes do substantivo, só o tornando definido ou indefinido (o, a, os, um, uma)?",
              sim: "**Artigo**.",
              classe: "artigo",
            },
            {
              pergunta: "Atribui qualidade ou característica ao substantivo e concorda com ele (aluno estudioso, alunas estudiosas)?",
              sim: "**Adjetivo**.",
              classe: "adjetivo",
            },
            {
              pergunta: "Modifica verbo, adjetivo ou outro advérbio, indicando tempo, lugar, modo, intensidade, negação (ontem, aqui, muito, não)?",
              sim: "**Advérbio**.",
              classe: "adverbio",
            },
          ],
          senao:
            "Nenhuma serviu? Releia a frase inteira: a classe depende do papel naquela frase, não da palavra isolada. Veja a lição \"Mesma palavra, classes diferentes\".",
        },
        {
          tipo: "perguntas",
          titulo: "Testes rápidos",
          itens: [
            "Dá para pôr **o/a** antes? Candidato a substantivo.",
            "Dá para conjugar (eu ___, ele ___, nós ___)? Verbo.",
            "Muda quando o substantivo vai para o plural ou o feminino? Artigo, adjetivo, numeral ou pronome adjetivo.",
            "Nunca muda e responde **quando? onde? como? quanto?** sobre o verbo? Advérbio.",
          ],
        },
      ],
    },
    {
      letra: "C",
      blocos: [
        {
          tipo: "texto",
          texto:
            "Cada classe tem um papel típico na oração. Conhecê-lo ajuda a confirmar a classificação, mas **classe** (o que a palavra é) e **função sintática** (o que ela faz) são coisas diferentes, e as bancas cobram as duas.",
        },
        {
          tipo: "grade",
          colunas: ["Papel típico na oração"],
          linhas: [
            { rotulo: "Substantivo", valores: ["núcleo de sujeito, objeto, complemento, agente da passiva"] },
            { rotulo: "Artigo, numeral, pronome adjetivo", valores: ["adjunto adnominal"] },
            { rotulo: "Adjetivo", valores: ["adjunto adnominal ou predicativo"] },
            { rotulo: "Pronome substantivo", valores: ["as mesmas funções do substantivo"] },
            { rotulo: "Verbo", valores: ["núcleo do predicado (ou só liga, se for de ligação)"] },
            { rotulo: "Advérbio", valores: ["adjunto adverbial"] },
            { rotulo: "Preposição e conjunção", valores: ["nenhuma: são conectivos"] },
            { rotulo: "Interjeição", valores: ["nenhuma: é uma frase à parte"] },
          ],
        },
      ],
    },
    {
      letra: "D",
      blocos: [
        {
          tipo: "comparativo",
          titulo: "Adjetivo × advérbio",
          colunas: [
            { titulo: "Adjetivo", classe: "adjetivo", itens: ["Ela é **rápida**.", "Eles são **rápidos**.", "Concorda com o substantivo"] },
            { titulo: "Advérbio", classe: "adverbio", itens: ["Ela fala **rápido**.", "Eles falam **rápido**.", "Fica igual: modifica o verbo"] },
          ],
          sintese: "Troque o sujeito para o plural: se a palavra mudar junto, é adjetivo; se ficar igual, é advérbio.",
        },
        {
          tipo: "comparativo",
          titulo: "Pronome adjetivo × pronome substantivo",
          colunas: [
            { titulo: "Acompanha o nome", classe: "pronome", itens: ["**Este** livro é meu.", "**Algum** aluno faltou."] },
            { titulo: "Ocupa o lugar do nome", classe: "pronome", itens: ["**Este** é meu.", "**Alguém** faltou."] },
          ],
          sintese: "A classe continua sendo pronome; o que muda é se ele está ao lado do substantivo ou no lugar dele.",
        },
        {
          tipo: "comparativo",
          titulo: "Preposição × conjunção",
          colunas: [
            { titulo: "Preposição", classe: "preposicao", itens: ["Liga **termos**: casa **de** praia", "O segundo termo fica subordinado ao primeiro"] },
            { titulo: "Conjunção", classe: "conjuncao", itens: ["Liga **orações**: saí **porque** choveu", "Ou termos de mesma função: pão **e** leite"] },
          ],
        },
      ],
    },
    {
      letra: "E",
      blocos: [
        {
          tipo: "frase",
          palavras: [
            ["Meu", "pronome", "pronome possessivo"],
            ["caderno", "substantivo"],
            ["está", "verbo"],
            ["na", "preposicao", "em + a: prep. + artigo"],
            ["mesa", "substantivo"],
            ["."],
          ],
          comentario:
            "**Meu** é pronome possessivo: indica que o caderno pertence à 1ª pessoa, quem fala. Como acompanha o substantivo, é pronome adjetivo. **Na** é a contração da preposição 'em' com o artigo 'a'. 'Estar' aqui indica onde o caderno se encontra, e não uma qualidade dele; por isso costuma ser analisado como verbo intransitivo, com 'na mesa' como adjunto adverbial de lugar.",
        },
        {
          tipo: "frase",
          palavras: [
            ["Eu", "pronome", "pronome pessoal reto"],
            ["estudei", "verbo", "verbo (pret. perfeito)"],
            ["ontem", "adverbio", "advérbio de tempo"],
            ["."],
          ],
          comentario:
            "**Eu** é pronome pessoal do caso reto: representa a própria pessoa que fala e é o sujeito. A terminação '-ei' de 'estudei' já marca a 1ª pessoa do singular, por isso o 'eu' poderia ser omitido.",
        },
        {
          tipo: "frase",
          palavras: [
            ["Estudei", "verbo"],
            ["muito", "adverbio", "advérbio de intensidade"],
            ["ontem", "adverbio", "advérbio de tempo"],
            ["."],
          ],
          comentario:
            "Sem 'eu' escrito, o sujeito é **oculto** (desinencial), reconhecido pela terminação do verbo. **Muito** é advérbio porque modifica o verbo e não varia; em 'muitos livros' concordaria com o substantivo e seria pronome indefinido.",
        },
        {
          tipo: "frase",
          palavras: [
            ["O", "artigo", "artigo definido"],
            ["aluno", "substantivo"],
            ["é", "verbo", "verbo de ligação"],
            ["estudioso", "adjetivo"],
            ["."],
          ],
          comentario:
            "**É** é verbo de ligação: não indica ação, só liga a característica ao sujeito. **Estudioso** é adjetivo (as alunas são estudiosas: concorda) e, depois do verbo de ligação, funciona como predicativo do sujeito.",
        },
        {
          tipo: "frase",
          palavras: [
            ["Estudo", "verbo", "verbo (presente)"],
            ["todos", "pronome", "pronome indefinido"],
            ["os", "artigo", "artigo definido"],
            ["dias", "substantivo"],
            ["."],
          ],
          comentario:
            "Aqui **estudo** é verbo: dá para conjugar (eu estudo, tu estudas) e não há artigo antes. Em '**O estudo** exige método', com o artigo, é substantivo. 'Todos os dias' indica tempo; dentro da expressão, 'todos' é pronome indefinido e 'os' é artigo.",
        },
        {
          tipo: "frase",
          palavras: [
            ["Gosto", "verbo"],
            ["de", "preposicao"],
            ["estudar", "verbo", "verbo (infinitivo)"],
            [","],
            ["mas", "conjuncao", "conjunção adversativa"],
            ["estou", "verbo", "verbo de ligação"],
            ["cansado", "adjetivo", "adjetivo (particípio)"],
            ["."],
          ],
          comentario:
            "**Gosto** é verbo (eu gosto); em 'tenho bom **gosto**' seria substantivo. **De** é preposição exigida pelo verbo: quem gosta, gosta de algo. **Mas** liga duas orações e opõe a segunda à primeira. **Cansado** é particípio com valor de adjetivo e, com 'estou', funciona como predicativo do sujeito.",
        },
        {
          tipo: "exemplos",
          itens: [
            {
              frase: "O **andar** do processo preocupa a equipe.",
              analise: "Verbo no infinitivo precedido de artigo vira substantivo (derivação imprópria): 'o andar'.",
            },
            {
              frase: "Os agentes falaram **baixo** durante a abordagem.",
              analise: "'Baixo' modifica 'falaram' e não concorda com 'agentes': advérbio de modo, não adjetivo.",
              concurso: true,
            },
            {
              frase: "Pedimos **um** relatório, e não três.",
              analise: "O contraste de quantidade (um, e não três) faz de 'um' numeral, não artigo indefinido.",
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
            {
              titulo: "Classificar a palavra fora da frase",
              texto: "'Andar', 'estudo', 'gosto', 'que', 'a', 'muito' mudam de classe conforme o uso. Sempre leia a frase toda antes de classificar.",
            },
            {
              titulo: "Esquecer as locuções",
              texto: "Duas ou mais palavras podem valer por uma classe: 'de repente' (locução adverbial), 'a fim de' (prepositiva), 'visto que' (conjuntiva), 'de ouro' (adjetiva, = áureo).",
            },
            {
              titulo: "Confundir classe com função",
              texto: "'Adjetivo' é classe; 'adjunto adnominal' e 'predicativo' são funções. A banca escreve 'o adjetivo exerce função de...' e troca uma coisa pela outra nas alternativas.",
            },
            {
              titulo: "Particípio: verbo ou adjetivo?",
              texto: "Com auxiliar (tinha cansado, foi aprovado) é verbo. Sem auxiliar, caracterizando um nome (aluno cansado, estou cansado), tem valor de adjetivo.",
            },
          ],
        },
      ],
    },
    {
      letra: "G",
      blocos: [
        {
          tipo: "macete",
          texto: "Invariáveis: **API-C**: Advérbio, Preposição, Interjeição, Conjunção.",
          explicacao: "As outras seis variam. Se a palavra nunca muda de forma, ela está no grupo API-C (ou faz parte de uma locução).",
        },
        {
          tipo: "macete",
          texto: "O nome pede companhia; o verbo pede circunstância.",
          explicacao:
            "Artigo, adjetivo, numeral e pronome adjetivo andam com o substantivo e concordam com ele. O advérbio anda com o verbo e não concorda com nada.",
        },
      ],
    },
    {
      letra: "H",
      blocos: [
        {
          tipo: "passos",
          frase: "Ontem os dois agentes chegaram cedo, mas ninguém os esperava.",
          passos: [
            "Ache os verbos (o que se conjuga): **chegaram** e **esperava**. São duas orações.",
            "Ache o que liga as orações: **mas**, conjunção coordenativa adversativa.",
            "Ache o substantivo (aceita artigo): **agentes**.",
            "Veja quem acompanha o substantivo: **os** (artigo definido) e **dois** (numeral cardinal), ambos concordando com 'agentes'.",
            "Veja o que modifica os verbos: **ontem** e **cedo** são advérbios de tempo.",
            "Sobram **ninguém** (pronome indefinido, sujeito de 'esperava') e o segundo **os** (pronome oblíquo átono, que retoma 'os agentes').",
          ],
          conclusao:
            "advérbio, artigo, numeral, substantivo, verbo, advérbio, conjunção, pronome indefinido, pronome oblíquo, verbo. O mesmo 'os' foi artigo e pronome na mesma frase.",
        },
      ],
    },
    {
      letra: "I",
      blocos: [
        {
          tipo: "lista",
          itens: [
            "10 classes: 6 variáveis (substantivo, artigo, adjetivo, numeral, pronome, verbo) e 4 invariáveis (advérbio, preposição, conjunção, interjeição).",
            "A classe depende do uso na frase, não da palavra isolada.",
            "Artigo, adjetivo, numeral e pronome adjetivo acompanham o substantivo e concordam com ele.",
            "Advérbio modifica verbo, adjetivo ou outro advérbio, e não varia.",
            "Preposição liga termos; conjunção liga orações ou termos de mesma função.",
            "Interjeição é uma frase sozinha, sem função sintática.",
          ],
        },
      ],
    },
  ],
};
