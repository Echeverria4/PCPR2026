import type { ModeloPt } from "../tipos";

const T_CONC = "Concordância nominal e verbal";
const T_REG = "Regência nominal e verbal";
const T_CRASE = "Emprego do sinal indicativo de crase";

export const MODELOS_CONCORDANCIA_REGENCIA: ModeloPt[] = [
  {
    id: "concordancia-verbal",
    titulo: "Concordância verbal",
    grupo: "nucleo",
    gancho: "**Ache o sujeito de verdade** (mesmo depois do verbo ou longe dele) e faça o verbo concordar com o núcleo. As regras especiais são as exceções.",
    topicosPrf: [T_CONC],
    blocos: [
      {
        tipo: "fluxo",
        titulo: "Com quem o verbo concorda?",
        passos: [
          { pergunta: "O verbo é impessoal (haver = existir, fazer = tempo decorrido)?", sim: "**Singular**: Havia falhas. Faz dois anos." },
          { pergunta: "Tem SE junto do verbo?", sim: "Transitivo direto: **concorda com o sujeito** (Vendem-se casas). Transitivo indireto: **singular** (Precisa-se de agentes)." },
          { pergunta: "O sujeito é composto e vem antes do verbo?", sim: "**Plural**: O agente e o inspetor chegaram." },
          { pergunta: "O sujeito é composto e vem depois do verbo?", sim: "**Plural ou com o mais próximo**: Chegaram (chegou) o agente e o inspetor." },
          { pergunta: "O sujeito é 'a maioria de', 'grande parte de' + plural?", sim: "**Singular ou plural**: A maioria dos agentes chegou (chegaram)." },
        ],
        senao: "**Concorda com o núcleo** do sujeito simples, mesmo distante ou posposto.",
      },
      {
        tipo: "grade",
        titulo: "Casos especiais",
        colunas: ["Concordância", "Exemplo"],
        linhas: [
          { rotulo: "mais de um", valores: ["singular (plural se houver reciprocidade)", "Mais de um agente faltou."] },
          { rotulo: "cerca de, perto de + número", valores: ["com o número", "Cerca de vinte agentes chegaram."] },
          { rotulo: "porcentagem", valores: ["com o número ou com o termo seguinte", "1% dos agentes faltou (faltaram)."] },
          { rotulo: "um dos que", valores: ["plural (preferível)", "Foi um dos que mais ajudaram."] },
          { rotulo: "que (relativo)", valores: ["com o antecedente", "Fui eu que assinei."] },
          { rotulo: "quem", valores: ["3ª do singular ou com o antecedente", "Fui eu quem assinou (assinei)."] },
          { rotulo: "nome próprio no plural", valores: ["com artigo: plural", "Os Estados Unidos aprovaram a lei."] },
          { rotulo: "núcleos ligados por 'ou'", valores: ["exclusão: singular; sem exclusão: plural", "Ana ou Rui será o chefe. O frio ou o calor prejudicam a pista."] },
          { rotulo: "dar, bater, soar + horas", valores: ["com o número de horas", "Deram três horas no relógio."] },
        ],
      },
      {
        tipo: "comparativo",
        titulo: "O verbo ser",
        colunas: [
          { titulo: "Concorda com o predicativo", itens: ["sujeito 'tudo, isto, aquilo, o que'", "Tudo **são** flores. O que falta **são** viaturas.", "horas e datas: **São** dez horas."] },
          { titulo: "Concorda com a pessoa", itens: ["quando um dos termos é pronome pessoal", "O responsável **sou** eu.", "O chefe **és** tu."] },
          { titulo: "Fica no singular", itens: ["quantidade, preço, distância", "Dez quilômetros **é** muito.", "Cem reais **é** pouco."] },
        ],
        sintese: "O verbo ser é o único que costuma olhar para o predicativo: em prova, leia os dois lados dele.",
      },
      {
        tipo: "macete",
        texto: "Ponha o sujeito antes do verbo e a concordância aparece.",
        explicacao: "'Faltam, ainda, três laudos' → 'Três laudos ainda faltam'. 'Existe, nos autos, provas' → 'Provas existem nos autos': o certo é 'existem'.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "**Faltam** três dias para o fim do prazo.", analise: "Sujeito posposto: 'três dias'. Verbo no plural.", concurso: true },
          { frase: "A análise dos documentos enviados pelos agentes **foi** concluída.", analise: "O núcleo do sujeito é 'análise'; 'documentos' e 'agentes' estão em adjuntos e não mandam no verbo.", concurso: true },
          { frase: "**Mais de um** agente **faltou** ao plantão.", analise: "'Mais de um' pede singular." },
          { frase: "Os **Estados Unidos aprovaram** o acordo.", analise: "Nome próprio plural com artigo: verbo no plural." },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Sujeito com 'com'", texto: "'O agente com o inspetor fizeram a vistoria' (ideia de soma: plural). Com vírgulas, o 'com' vira adjunto: 'O agente, com o inspetor, fez a vistoria'." },
          { titulo: "Haver auxiliar concorda", texto: "'Os laudos haviam chegado' (= tinham chegado): aqui haver não é impessoal." },
          { titulo: "Infinitivo com sujeito próprio", texto: "'É preciso os agentes chegarem cedo': o infinitivo concorda com 'os agentes'." },
          { titulo: "Sujeito oracional", texto: "'Ainda faltam assinar dois termos' está errado: o sujeito é 'assinar dois termos' (oração), e o verbo fica no singular: falta assinar." },
        ],
      },
    ],
  },
  {
    id: "concordancia-nominal",
    titulo: "Concordância nominal",
    grupo: "nucleo",
    gancho: "Artigo, adjetivo, pronome e numeral **acompanham o substantivo**. Com vários substantivos, o adjetivo **depois** vai ao plural ou concorda com o mais próximo; **antes**, concorda com o mais próximo.",
    topicosPrf: [T_CONC],
    blocos: [
      {
        tipo: "chaves",
        titulo: "Um adjetivo, vários substantivos",
        ramos: [
          { rotulo: "Adjetivo depois", texto: "plural (o masculino prevalece) ou com o mais próximo", exemplo: "Comprou carro e moto novos (nova)." },
          { rotulo: "Adjetivo antes", texto: "com o mais próximo", exemplo: "Comprou nova moto e carro." },
          { rotulo: "Predicativo do sujeito composto", texto: "plural", exemplo: "O carro e a moto estão novos." },
          { rotulo: "Um substantivo, vários adjetivos", texto: "substantivo no plural, ou repete o artigo", exemplo: "as línguas inglesa e francesa / a língua inglesa e a francesa" },
        ],
      },
      {
        tipo: "grade",
        titulo: "Varia ou não varia?",
        colunas: ["Varia?", "Exemplo"],
        linhas: [
          { rotulo: "anexo, incluso, quite, obrigado", valores: ["sim", "Seguem anexas as cópias. Estão quites. Muito obrigada, disse ela."] },
          { rotulo: "em anexo", valores: ["não", "Seguem em anexo as cópias."] },
          { rotulo: "mesmo, próprio (= em pessoa)", valores: ["sim", "Elas mesmas assinaram."] },
          { rotulo: "meio (= metade)", valores: ["sim", "meia hora, meio-dia e meia"] },
          { rotulo: "meio (= um pouco)", valores: ["não", "Ela ficou meio cansada."] },
          { rotulo: "bastante (= muitos)", valores: ["sim", "bastantes motivos"] },
          { rotulo: "bastante (antes de adjetivo)", valores: ["não", "bastante preocupadas"] },
          { rotulo: "menos", valores: ["não", "menos pessoas (nunca 'menas')"] },
          { rotulo: "caro, barato (com verbo)", valores: ["não", "As peças custaram caro."] },
        ],
        nota: "Regra por trás: junto de substantivo, a palavra é adjetiva e concorda; junto de verbo ou adjetivo, é advérbio e fica invariável.",
      },
      {
        tipo: "comparativo",
        titulo: "É proibido entrada × é proibida a entrada",
        colunas: [
          { titulo: "Sem determinante", itens: ["o adjetivo fica no masculino singular", "É proibido entrada.", "Água é bom para a saúde."] },
          { titulo: "Com determinante", itens: ["o adjetivo concorda com o substantivo", "É proibida a entrada.", "A água é boa para a saúde."] },
        ],
        sintese: "Vale para é bom, é necessário, é proibido, é permitido: o artigo decide.",
      },
      {
        tipo: "macete",
        texto: "Tem artigo, concorda; sem artigo, fica neutro.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "Seguem **anexos** os relatórios e **anexa** a planilha.", analise: "Anexo é adjetivo: concorda com cada substantivo.", concurso: true },
          { frase: "A pista e o acostamento estavam **molhados**.", analise: "Predicativo de sujeito composto com gêneros diferentes: masculino plural." },
          { frase: "Comprou camisas **azul-escuras** e ternos **cinza**.", analise: "Adjetivo composto: só o último elemento varia. Cor indicada por substantivo (cinza, vinho, creme) fica invariável.", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Em anexo é invariável", texto: "'Segue em anexo a planilha', 'Seguem em anexo as cópias': a locução não varia." },
          { titulo: "Obrigado concorda com quem fala", texto: "Mulher diz 'obrigada'; grupo de homens diz 'obrigados'." },
          { titulo: "Azul-marinho e azul-celeste", texto: "São exceções invariáveis: ternos azul-marinho, fardas azul-celeste." },
          { titulo: "Possível com 'o mais'", texto: "'Casos o mais graves possível' (o singular acompanha 'o') × 'os casos mais graves possíveis' (o plural acompanha 'os')." },
        ],
      },
    ],
  },
  {
    id: "regencia",
    titulo: "Regência verbal e nominal",
    grupo: "nucleo",
    gancho: "**Pergunte ao verbo (ou ao nome) o que ele pede**: complemento direto, preposição (qual?) ou um sentido diferente para cada regência.",
    topicosPrf: [T_REG],
    blocos: [
      {
        tipo: "grade",
        titulo: "Verbos que a banca adora",
        colunas: ["Sentido", "Regência", "Exemplo"],
        linhas: [
          { rotulo: "assistir", valores: ["ver, presenciar", "a", "Assistimos ao treinamento."] },
          { rotulo: "assistir", valores: ["dar assistência", "direto", "O médico assistiu o ferido."] },
          { rotulo: "assistir", valores: ["caber (direito)", "a", "Esse direito assiste ao réu."] },
          { rotulo: "aspirar", valores: ["desejar", "a", "Aspira ao cargo."] },
          { rotulo: "aspirar", valores: ["inalar", "direto", "Aspirou a fumaça."] },
          { rotulo: "visar", valores: ["mirar; dar visto", "direto", "Visou o alvo. Visou o cheque."] },
          { rotulo: "visar", valores: ["ter como objetivo", "a (o uso direto é aceito por parte das gramáticas)", "A medida visa à segurança."] },
          { rotulo: "implicar", valores: ["acarretar", "direto", "A falha implica multa."] },
          { rotulo: "chegar, ir", valores: ["movimento", "a", "Chegou ao posto. Foi à sede."] },
          { rotulo: "preferir", valores: ["querer mais", "uma coisa a outra", "Prefiro café a chá."] },
          { rotulo: "obedecer", valores: ["cumprir", "a", "Obedeça às normas."] },
          { rotulo: "pagar, perdoar", valores: ["coisa / pessoa", "direto / a", "Pagou a multa ao órgão."] },
          { rotulo: "esquecer, lembrar", valores: ["sem pronome / com pronome", "direto / de", "Esqueci o prazo. Esqueci-me do prazo."] },
          { rotulo: "proceder", valores: ["realizar", "a", "Procedeu à vistoria."] },
        ],
      },
      {
        tipo: "lista",
        titulo: "Regência nominal: nomes que pedem preposição",
        itens: [
          "acessível **a**, apto **a / para**, avesso **a**, contrário **a**, favorável **a**, preferível **a**",
          "ansioso **por / para**, compatível **com**, residente **em**, situado **em**, suspeito **de**",
          "obediência **a**, respeito **a / por / com**, devoção **a / por**, aversão **a / por**",
          "O nome costuma herdar a regência do verbo da família: obedecer a → obediência a; aspirar a → aspiração a.",
        ],
      },
      {
        tipo: "passos",
        frase: "Este é o cargo ___ todos aspiram.",
        passos: [
          "Isole a oração do relativo e ponha o antecedente no lugar dele: 'todos aspiram ___ o cargo'.",
          "Pergunte ao verbo: aspirar (= desejar) pede 'a' — aspirar a algo.",
          "Leve a preposição para antes do relativo: 'a que' (ou 'ao qual').",
        ],
        conclusao: "Este é o cargo a que todos aspiram. O mesmo vale para 'a norma de que precisamos', 'o colega com quem falei', 'o caso em que pensei'.",
      },
      {
        tipo: "macete",
        texto: "Preferir não aceita 'mais' nem 'do que': prefiro isto a aquilo.",
        explicacao: "O próprio verbo já tem a ideia de 'mais'. 'Prefiro mais café do que chá' é duplamente errado.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "A nova regra **implica** gastos adicionais.", analise: "Implicar (= acarretar) é transitivo direto: 'implica em gastos' foge da norma-padrão.", concurso: true },
          { frase: "Ele **esqueceu o** prazo / Ele **se esqueceu do** prazo.", analise: "Sem pronome, direto; com pronome, 'de'. 'Esqueceu do prazo' mistura as duas formas.", concurso: true },
          { frase: "Os agentes **chegaram ao** posto às 7h.", analise: "Verbo de movimento pede 'a': 'chegaram no posto' é coloquial." },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "'Lhe' só para objeto indireto de pessoa", texto: "'Assisti-lhe' não serve para 'ver': o certo é 'assisti a ele'. Com 'ver', 'convidar', 'encontrar': o, a." },
          { titulo: "Obedecer admite passiva", texto: "Mesmo sendo transitivo indireto, a tradição aceita 'As normas foram obedecidas'." },
          { titulo: "Implicar com", texto: "No sentido de antipatizar, implicar pede 'com': 'Ele implica com o colega'." },
          { titulo: "Namorar é direto", texto: "'Namora a vizinha', não 'namora com a vizinha'." },
        ],
      },
    ],
  },
  {
    id: "crase",
    titulo: "Crase",
    grupo: "nucleo",
    gancho: "**Crase = a + a**: só existe quando algo antes pede a preposição 'a' **e** a palavra depois aceita o artigo 'a'. Troque por um masculino: se aparecer 'ao', há crase.",
    topicosPrf: [T_CRASE, T_REG],
    blocos: [
      {
        tipo: "fluxo",
        titulo: "Tem crase?",
        passos: [
          { pergunta: "A palavra seguinte é masculina, verbo, pronome que não aceita artigo (ela, esta, você, Vossa Excelência) ou é plural com o 'a' no singular?", sim: "**Sem crase**: a pé, a partir de, a ela, a Vossa Senhoria, referiu-se a normas." },
          { pergunta: "Trocando a palavra feminina por uma masculina, aparece 'ao'?", sim: "**Crase**: Fui à sede (fui ao posto)." },
          { pergunta: "É locução feminina adverbial, prepositiva ou conjuntiva?", sim: "**Crase**: às vezes, à noite, à custa de, à medida que." },
          { pergunta: "Indica hora exata?", sim: "**Crase**: às 10h, à uma hora, das 8h às 18h." },
        ],
        senao: "Sem 'ao' na troca, não há crase: Vi a sede (vi o posto).",
      },
      {
        tipo: "chaves",
        titulo: "Os três casos",
        ramos: [
          { rotulo: "Proibida", texto: "antes de masculino, verbo, pronome pessoal e de tratamento, palavra repetida e 'a' + plural", exemplo: "a cavalo, a partir de, a ela, frente a frente, a normas" },
          { rotulo: "Obrigatória", texto: "regente pede 'a' e o termo aceita 'a'; horas; locuções femininas; 'à moda de'", exemplo: "à sede, às 9h, à noite, bife à milanesa, àquele (a + aquele)" },
          { rotulo: "Facultativa", texto: "nome próprio feminino de pessoa, possessivo feminino singular, depois de 'até'", exemplo: "à (a) Maria, à (a) minha sala, até à (a) porta" },
        ],
      },
      {
        tipo: "grade",
        titulo: "Teste do masculino",
        colunas: ["Troca", "Crase?"],
        linhas: [
          { rotulo: "Fui __ sede.", valores: ["Fui ao posto.", "sim"] },
          { rotulo: "Vi __ sede.", valores: ["Vi o posto.", "não"] },
          { rotulo: "Obedeça __ normas.", valores: ["Obedeça aos decretos.", "sim"] },
          { rotulo: "Vou __ Brasília.", valores: ["Volto de Brasília.", "não"] },
          { rotulo: "Vou __ Bahia.", valores: ["Volto da Bahia.", "sim"] },
          { rotulo: "Refiro-me __ aquele caso.", valores: ["a + aquele", "sim"] },
        ],
        nota: "Para lugar, troque 'ir' por 'voltar': volto da → há artigo → crase; volto de → sem artigo → sem crase.",
      },
      {
        tipo: "macete",
        texto: "Vou a, volto da: crase há. Vou a, volto de: crase pra quê?",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "Os agentes chegaram **às** 7h e saíram **à** noite.", analise: "Hora exata e locução adverbial feminina: crase nas duas.", concurso: true },
          { frase: "Entregou o relatório **a** Vossa Excelência.", analise: "Pronome de tratamento não aceita artigo: sem crase." },
          { frase: "Refiro-me **àquela** norma, não **a** esta.", analise: "Referir-se a + aquela = àquela. 'Esta' não aceita artigo: só preposição.", concurso: true },
          { frase: "Foi **a** uma reunião e voltou **à** uma hora.", analise: "Artigo indefinido 'uma': sem crase. 'Uma' indicando hora: com crase." },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Distância e terra indeterminadas", texto: "'Curso a distância', 'Desceu a terra' (do navio): sem crase. Determinadas: 'à distância de 50 metros', 'Voltou à terra natal'." },
          { titulo: "Casa sem determinante", texto: "'Voltou a casa' (o próprio lar): sem crase. 'Voltou à casa dos pais': com crase." },
          { titulo: "'A' no singular + plural", texto: "'Fez referência a normas': só preposição. 'Fez referência às normas': preposição + artigo plural." },
          { titulo: "Desde e entre não fazem par com 'às'", texto: "'Desde as 8h', 'entre as 8h e as 10h': já há outra preposição. 'Das 8h às 10h' casa 'de' com 'a'." },
        ],
      },
    ],
  },
];
