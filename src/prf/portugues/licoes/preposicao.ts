import type { Licao } from "../tipos";

export const PREPOSICAO: Licao = {
  id: "preposicao",
  titulo: "Preposição",
  classe: "preposicao",
  resumo: "A palavra **invariável** que liga dois termos, deixando um deles **dependente** do outro (o termo regido depende do termo regente).",
  modelo: [
    {
      tipo: "chaves",
      titulo: "Preposição",
      ramos: [
        { rotulo: "Essenciais", classe: "preposicao", texto: "só funcionam como preposição", exemplo: "a, ante, após, até, com, contra, de, desde, em, entre, para, perante, por, sem, sob, sobre, trás" },
        { rotulo: "Acidentais", classe: "preposicao", texto: "palavras de outras classes usadas como preposição", exemplo: "conforme, segundo, durante, mediante, exceto, salvo, como" },
        { rotulo: "Locuções prepositivas", classe: "preposicao", texto: "terminam em preposição", exemplo: "antes de, apesar de, a fim de, em vez de, de acordo com" },
        { rotulo: "Combinação", classe: "preposicao", texto: "a preposição não perde som", exemplo: "a + o = ao; a + onde = aonde" },
        { rotulo: "Contração", classe: "preposicao", texto: "a preposição perde som", exemplo: "de + o = do; em + a = na; a + a = à (crase)" },
      ],
    },
    {
      tipo: "macete",
      texto: "Preposição é **ponte de mão única**: o termo que vem depois dela depende do que vem antes.",
    },
  ],
  secoes: [
    {
      letra: "A",
      blocos: [
        {
          tipo: "texto",
          texto:
            "Preposição é a palavra invariável que liga dois termos, estabelecendo uma relação de **subordinação**: em 'necessidade **de** apoio', 'apoio' completa 'necessidade'. Sozinha não tem função sintática: ela introduz termos que têm função (objeto indireto, complemento nominal, adjunto).",
        },
        {
          tipo: "frase",
          palavras: [
            ["O", "artigo"],
            ["agente", "substantivo"],
            ["de", "preposicao", "liga 'agente' a 'trânsito'"],
            ["trânsito", "substantivo"],
            ["saiu", "verbo"],
            ["com", "preposicao", "companhia"],
            ["o", "artigo"],
            ["colega", "substantivo"],
            ["para", "preposicao", "finalidade"],
            ["a", "artigo"],
            ["vistoria", "substantivo"],
            ["."],
          ],
          comentario: "Cada preposição cria uma relação de sentido diferente: especificação, companhia, finalidade.",
        },
      ],
    },
    {
      letra: "B",
      blocos: [
        {
          tipo: "perguntas",
          itens: [
            "A palavra está **entre dois termos**, ligando-os?",
            "O termo seguinte depende do anterior (verbo que pede 'de', nome que pede 'a')?",
            "É invariável (não flexiona)?",
            "Está colada ao artigo ou pronome (do, na, pelo, àquele, deste)? Então há preposição dentro dela.",
          ],
        },
      ],
    },
    {
      letra: "C",
      blocos: [
        {
          tipo: "grade",
          titulo: "Valores de sentido da preposição 'de'",
          colunas: ["Exemplo"],
          linhas: [
            { rotulo: "Posse", valores: ["a viatura **do** agente"] },
            { rotulo: "Matéria", valores: ["placa **de** metal"] },
            { rotulo: "Origem", valores: ["veio **de** Brasília"] },
            { rotulo: "Causa", valores: ["tremia **de** frio"] },
            { rotulo: "Assunto", valores: ["falou **de** segurança"] },
            { rotulo: "Modo", valores: ["saiu **de** carro / **de** repente"] },
            { rotulo: "Finalidade", valores: ["sala **de** espera"] },
          ],
          nota: "A banca costuma pedir o valor da preposição no contexto: leia o termo inteiro, não a preposição sozinha.",
        },
      ],
    },
    {
      letra: "D",
      blocos: [
        {
          tipo: "comparativo",
          titulo: "Preposição × conjunção",
          colunas: [
            { titulo: "Preposição", classe: "preposicao", itens: ["Liga **termos** (palavras)", "Saiu **para** o plantão.", "Depois dela vem nome ou infinitivo"] },
            { titulo: "Conjunção", classe: "conjuncao", itens: ["Liga **orações** (ou termos coordenados)", "Saiu **para que** o colega descansasse.", "Depois dela vem verbo conjugado"] },
          ],
        },
        {
          tipo: "comparativo",
          titulo: "Em vez de × ao invés de",
          colunas: [
            { titulo: "Em vez de", classe: "preposicao", itens: ["= no lugar de (substituição)", "Viajou de ônibus **em vez de** avião."] },
            { titulo: "Ao invés de", classe: "preposicao", itens: ["= ao contrário de (oposição)", "Subiu **ao invés de** descer."] },
          ],
          sintese: "'Em vez de' serve nos dois casos; 'ao invés de' só quando há ideias opostas.",
        },
      ],
    },
    {
      letra: "E",
      blocos: [
        {
          tipo: "exemplos",
          itens: [
            { frase: "Este é o cargo **a que** aspiro.", analise: "'Aspirar' (= desejar) pede 'a': a preposição vem antes do relativo. 'O cargo que aspiro' fica fora da norma culta." },
            { frase: "Chegou **há** duas horas e sai **daqui a** duas horas.", analise: "'Há' (verbo, tempo passado) × 'a' (preposição, tempo futuro ou distância)." },
            {
              frase: "Saiu **de** madrugada **para** a fronteira **com** a equipe.",
              analise: "A preposição liga termos e marca a relação entre eles: de = tempo; para = destino; com = companhia.",
            },
            {
              frase: "Abriu a porta **com** a chave e saiu **sem** o colete.",
              analise: "'Com' muda de valor: aqui indica instrumento (com a chave), e não companhia. 'Sem' indica ausência.",
            },
            {
              frase: "Está na hora **de a** equipe sair.",
              analise: "Quando o termo depois da preposição é sujeito de infinitivo, a norma pede não contrair: 'de a equipe', 'antes de o prazo acabar'.",
              concurso: true,
            },
            {
              frase: "Agiu **conforme** o regulamento e **segundo** as ordens.",
              analise: "'Conforme' e 'segundo' são preposições acidentais aqui (= de acordo com). Em 'conforme chegavam, eram atendidos', 'conforme' é conjunção.",
              concurso: true,
            },
            {
              frase: "Trabalhou **sob** chuva; o relatório **sobre** o acidente ficou **sobre** a mesa.",
              analise: "Sob = debaixo de; sobre = em cima de ou a respeito de. Em 'sob chuva', o agente está debaixo da chuva.",
              concurso: true,
            },
            {
              frase: "Todos são iguais **perante a** lei, e o motorista recuou **ante o** perigo.",
              analise: "'Perante' e 'ante' já são preposições e não aceitam outra depois: não há crase em 'perante a lei', e 'ante ao perigo' está errado.",
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
            { titulo: "\"Antes do prazo acabar\"", texto: "A norma prefere 'antes de o prazo acabar': 'o prazo' é sujeito de 'acabar' e não se contrai com a preposição." },
            { titulo: "\"A nível de\"", texto: "Evite. Use 'em nível de' (= no âmbito de) ou 'ao nível de' (= à mesma altura): 'ao nível do mar'." },
            { titulo: "Preposição antes do relativo", texto: "'A norma de que precisamos', 'o colega com quem falei', 'a cidade em que moro'. Sem a preposição, há erro de regência." },
            { titulo: "\"Entre eu e você\"", texto: "Depois de preposição, pronome oblíquo tônico: 'entre mim e você'." },
          ],
        },
      ],
    },
    {
      letra: "G",
      blocos: [
        {
          tipo: "macete",
          texto: "Depois da preposição vem **nome**; depois da conjunção vem **verbo conjugado**.",
          explicacao: "Apesar **do** frio (locução prepositiva) × embora **fizesse** frio (conjunção).",
        },
      ],
    },
    {
      letra: "H",
      blocos: [
        {
          tipo: "passos",
          frase: "Apesar da chuva, a equipe de resgate chegou ao local antes de o socorro ser acionado.",
          passos: [
            "**Apesar da**: locução prepositiva 'apesar de' + artigo 'a' (contração 'da'); valor de concessão.",
            "**de** (resgate): liga 'equipe' a 'resgate', formando locução adjetiva.",
            "**ao**: combinação da preposição 'a' (pedida por 'chegar a') com o artigo 'o'.",
            "**antes de o**: locução prepositiva sem contração, porque 'o socorro' é sujeito do infinitivo 'ser acionado'.",
          ],
          conclusao: "quatro preposições ou locuções, cada uma com um valor: concessão, especificação, destino e tempo.",
        },
      ],
    },
    {
      letra: "I",
      blocos: [
        {
          tipo: "lista",
          itens: [
            "Preposição liga termos e torna um dependente do outro; é invariável.",
            "Essenciais (de, em, para...) × acidentais (conforme, segundo, durante) × locuções (antes de, a fim de).",
            "Combinação mantém o som (ao, aonde); contração perde (do, na, à).",
            "Sujeito de infinitivo não se contrai: antes de o prazo acabar.",
            "Em vez de = no lugar de; ao invés de = ao contrário de.",
            "A preposição exigida pelo verbo vai antes do relativo: a que, de que, com quem.",
          ],
        },
      ],
    },
  ],
};
