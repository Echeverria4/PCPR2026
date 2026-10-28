import type { ModeloPt } from "../tipos";

const T_SINTAXE = "Sintaxe da oração e do período";

export const MODELOS_SINTAXE: ModeloPt[] = [
  {
    id: "termos-oracao",
    titulo: "Termos da oração",
    grupo: "nucleo",
    gancho: "Comece pelo **verbo**: pergunte quem faz (sujeito), o quê ou a quem (complementos) e em que circunstância (adjuntos). O resto se pendura nos nomes.",
    topicosPrf: [T_SINTAXE],
    blocos: [
      {
        tipo: "chaves",
        titulo: "Os três andares da oração",
        ramos: [
          { rotulo: "Essenciais", texto: "sujeito e predicado", exemplo: "**O agente** | multou o condutor." },
          { rotulo: "Integrantes", texto: "completam o sentido de verbos e nomes", exemplo: "objeto direto, objeto indireto, complemento nominal, agente da passiva" },
          { rotulo: "Acessórios", texto: "acrescentam informação; podem sair sem quebrar a estrutura", exemplo: "adjunto adnominal, adjunto adverbial, aposto" },
          { rotulo: "Fora da oração", texto: "não se liga a verbo nem a nome", exemplo: "vocativo: **Agente**, venha cá." },
        ],
      },
      {
        tipo: "fluxo",
        titulo: "Que termo é este?",
        passos: [
          { pergunta: "Concorda com o verbo e responde a 'quem?' ou 'o quê?' antes dele?", sim: "**Sujeito**." },
          { pergunta: "Completa o verbo sem preposição obrigatória?", sim: "**Objeto direto**: Vistoriou **o carro**." },
          { pergunta: "Completa o verbo com a preposição que ele exige?", sim: "**Objeto indireto**: Precisa **de reforço**." },
          { pergunta: "Completa, com preposição, um substantivo abstrato, um adjetivo ou um advérbio?", sim: "**Complemento nominal**: respeito **às leis**, favorável **ao réu**." },
          { pergunta: "Atribui estado ou qualidade ao sujeito ou ao objeto, passando pelo verbo?", sim: "**Predicativo**: O agente está **cansado**. Julgaram o réu **culpado**." },
          { pergunta: "Indica tempo, lugar, modo, causa ou outra circunstância do verbo?", sim: "**Adjunto adverbial**: Multou **ontem**, **na BR**." },
          { pergunta: "Acompanha um substantivo, determinando ou caracterizando?", sim: "**Adjunto adnominal**: **o** carro **velho do agente**." },
        ],
        senao: "Explica ou resume um termo: **aposto**. Chama o interlocutor, isolado: **vocativo**.",
      },
      {
        tipo: "grade",
        titulo: "Transitividade do verbo",
        colunas: ["Pede complemento?", "Com preposição?", "Exemplo"],
        linhas: [
          { rotulo: "intransitivo", valores: ["não", "—", "O pneu furou."] },
          { rotulo: "transitivo direto", valores: ["sim", "não", "Multou o motorista."] },
          { rotulo: "transitivo indireto", valores: ["sim", "sim", "Obedeceu às normas."] },
          { rotulo: "direto e indireto", valores: ["sim (dois)", "um sim, outro não", "Entregou o laudo ao juiz."] },
          { rotulo: "de ligação", valores: ["predicativo", "não", "O trecho está interditado."] },
        ],
        nota: "A transitividade depende do uso: 'O agente anda doente' (ligação) × 'O agente anda pela pista' (intransitivo + adjunto adverbial).",
      },
      {
        tipo: "comparativo",
        titulo: "Complemento nominal × adjunto adnominal",
        colunas: [
          { titulo: "Complemento nominal", itens: ["**sofre** a ação do nome (é o alvo)", "liga-se a substantivo abstrato, adjetivo ou advérbio", "a invasão **da casa** (a casa foi invadida)", "favorável **ao réu**"] },
          { titulo: "Adjunto adnominal", itens: ["**pratica** a ação ou indica posse", "liga-se só a substantivo", "a invasão **dos bandidos** (os bandidos invadiram)", "o carro **do agente**"] },
        ],
        sintese: "Com adjetivo ou advérbio, é sempre complemento nominal. Com substantivo abstrato, pergunte: o termo sofre a ação (CN) ou a pratica (AA)?",
      },
      {
        tipo: "lista",
        titulo: "Tipos de predicado",
        itens: [
          "**Verbal**: o núcleo é um verbo de ação (O agente **multou** o condutor).",
          "**Nominal**: verbo de ligação + predicativo; o núcleo é o nome (A pista estava **molhada**).",
          "**Verbo-nominal**: verbo de ação + predicativo; dois núcleos (O agente **chegou cansado**).",
        ],
      },
      {
        tipo: "macete",
        texto: "Adjetivo ou advérbio com complemento: CN, sem dúvida. Substantivo: quem faz é adjunto, quem sofre é complemento.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "A **chegada dos agentes** atrasou.", analise: "'Dos agentes' pratica a ação (os agentes chegaram): adjunto adnominal." },
          { frase: "**Senhor diretor**, o relatório, **documento sigiloso**, está pronto.", analise: "'Senhor diretor' chama o interlocutor (vocativo); 'documento sigiloso' explica 'o relatório' (aposto)." },
          { frase: "O agente **entregou** o relatório **ao chefe**.", analise: "Entregar é transitivo direto e indireto: 'o relatório' é objeto direto (sem preposição) e 'ao chefe' é objeto indireto (com a preposição que o verbo exige)." },
          { frase: "**Ontem**, **na rodovia**, os fiscais trabalharam **com atenção**.", analise: "Adjuntos adverbiais de tempo, lugar e modo: indicam circunstâncias e podem ser deslocados ou retirados sem deixar a frase incompleta." },
          { frase: "A **defesa da pátria** é dever de todos.", analise: "'Da pátria' sofre a ação de defender (a pátria é defendida): complemento nominal.", concurso: true },
          { frase: "Os jurados consideraram **o réu culpado**.", analise: "'O réu' é objeto direto; 'culpado' é predicativo do objeto. O predicado é verbo-nominal.", concurso: true },
          { frase: "O motorista chegou **cansado**.", analise: "Predicado verbo-nominal: 'chegou' é verbo significativo e 'cansado' é predicativo do sujeito. Não é adjunto adverbial: concorda com o sujeito (a motorista chegou cansada).", concurso: true },
          { frase: "A **crítica do jornalista** foi dura, mas a **crítica ao jornalista** foi injusta.", analise: "'Do jornalista': ele critica (agente) → adjunto adnominal. 'Ao jornalista': ele é criticado (paciente) → complemento nominal. Pergunte quem pratica e quem sofre a ação.", concurso: true },
          { frase: "O agente estava **certo da infração** e **orgulhoso do trabalho**.", analise: "Complemento nominal: completa, com preposição, o sentido de um adjetivo (certo de, orgulhoso de). Adjunto adnominal só se liga a substantivo; ligado a adjetivo ou advérbio, o complemento é nominal.", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Objeto direto preposicionado", texto: "'Amar a Deus', 'Feriu a si mesmo': a preposição aparece, mas o verbo é transitivo direto." },
          { titulo: "Objeto pleonástico", texto: "'O relatório, entreguei-o ontem': o objeto aparece duas vezes, para dar ênfase." },
          { titulo: "Lugar com verbo de movimento", texto: "Em 'Mora em Brasília' e 'Foi à sede', a maioria das bancas chama o termo de adjunto adverbial; algumas gramáticas, de complemento circunstancial." },
          { titulo: "Predicativo não é adjunto", texto: "'O agente **cansado** saiu' (adjunto: qual agente) × 'O agente saiu **cansado**' (predicativo: como estava ao sair)." },
        ],
      },
    ],
  },
  {
    id: "tipos-sujeito",
    titulo: "Tipos de sujeito e oração sem sujeito",
    grupo: "nucleo",
    gancho: "Pergunte ao verbo **quem?**: a resposta está na frase (simples ou composto), na terminação do verbo (oculto), em ninguém sabe quem (indeterminado) ou em lugar nenhum (oração sem sujeito).",
    topicosPrf: [T_SINTAXE, "Concordância nominal e verbal"],
    blocos: [
      {
        tipo: "chaves",
        titulo: "Classificação do sujeito",
        ramos: [
          { rotulo: "Simples", texto: "um núcleo", exemplo: "**O agente** multou." },
          { rotulo: "Composto", texto: "dois ou mais núcleos", exemplo: "**O agente e o inspetor** multaram." },
          { rotulo: "Oculto (desinencial)", texto: "a terminação do verbo revela", exemplo: "Multamos o carro (nós)." },
          { rotulo: "Indeterminado", texto: "existe, mas não se identifica", exemplo: "Roubaram a placa. Precisa-se de agentes." },
          { rotulo: "Oração sem sujeito", texto: "verbo impessoal, sempre na 3ª pessoa do singular", exemplo: "Choveu. Havia falhas. Faz dois anos." },
        ],
      },
      {
        tipo: "fluxo",
        titulo: "Classificando",
        passos: [
          { pergunta: "O verbo é fenômeno da natureza, haver (= existir, tempo), fazer (tempo) ou ser/estar (tempo, clima)?", sim: "**Oração sem sujeito**: verbo no singular (exceto 'ser' com horas e datas: São dez horas)." },
          { pergunta: "A resposta a 'quem?' aparece na frase?", sim: "**Simples** (um núcleo) ou **composto** (mais de um)." },
          { pergunta: "A terminação do verbo mostra a pessoa (eu, tu, nós, vós)?", sim: "**Oculto**." },
          { pergunta: "Verbo na 3ª do plural sem referente, ou verbo sem objeto direto + se?", sim: "**Indeterminado**: Disseram que... / Trata-se de... / Vive-se bem." },
        ],
        senao: "Verbo transitivo direto + se? É **voz passiva sintética**: o termo é o sujeito e o verbo concorda com ele (Vendem-se casas).",
      },
      {
        tipo: "comparativo",
        titulo: "SE indeterminador × SE apassivador",
        colunas: [
          { titulo: "Índice de indeterminação", itens: ["verbo intransitivo, transitivo indireto ou de ligação", "verbo sempre no singular", "Precisa-se **de** agentes. Trata-se **de** casos graves."] },
          { titulo: "Partícula apassivadora", itens: ["verbo transitivo direto", "verbo concorda com o sujeito", "Vend**em**-se casas. Exig**em**-se documentos."] },
        ],
        sintese: "Teste da passiva analítica: se der (casas são vendidas), o SE é apassivador e o verbo concorda.",
      },
      {
        tipo: "grade",
        titulo: "Impessoais e pessoais parecidos",
        colunas: ["Fica no singular?", "Exemplo"],
        linhas: [
          { rotulo: "haver (= existir)", valores: ["sim", "Havia muitos carros na pista."] },
          { rotulo: "haver (tempo)", valores: ["sim", "Há dois anos não chove aqui."] },
          { rotulo: "fazer (tempo, clima)", valores: ["sim", "Faz dez dias. Fez 40 graus."] },
          { rotulo: "existir, ocorrer", valores: ["não", "Existiam muitos carros. Ocorreram acidentes."] },
          { rotulo: "ser (horas, datas)", valores: ["não", "São duas horas. É uma hora."] },
        ],
        nota: "Na locução, o auxiliar do impessoal também fica no singular: 'Deve haver falhas', 'Vai fazer dois anos'.",
      },
      {
        tipo: "macete",
        texto: "Haver = existir fica parado; existir anda com o sujeito.",
        explicacao: "Houve acidentes (singular) × Ocorreram acidentes (plural). O auxiliar acompanha: deve haver × devem existir.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "**Precisa-se** de motoristas experientes.", analise: "'Precisar de' é transitivo indireto: SE indeterminador, verbo no singular." },
          { frase: "**Disseram** que a pista seria liberada.", analise: "3ª do plural sem referente: sujeito indeterminado." },
          { frase: "**Choveu** muito durante a madrugada.", analise: "Fenômeno da natureza: oração sem sujeito, verbo impessoal na 3ª pessoa do singular." },
          { frase: "**Estudamos** a lei antes da prova.", analise: "Sujeito oculto (desinencial): a terminação -mos revela 'nós', mesmo sem a palavra na frase." },
          { frase: "**Houve** muitos acidentes no feriado.", analise: "Haver = ocorrer: impessoal, oração sem sujeito; 'muitos acidentes' é objeto direto.", concurso: true },
          { frase: "**Deve haver** soluções × **Devem existir** soluções.", analise: "Com haver, o auxiliar fica no singular; com existir, concorda com 'soluções' (sujeito).", concurso: true },
          { frase: "**Faz** dez anos que a ponte caiu.", analise: "Fazer indicando tempo decorrido é impessoal: oração sem sujeito, singular obrigatório ('Fazem dez anos' está errado). 'Dez anos' é objeto direto.", concurso: true },
          { frase: "Na rodovia, **trabalha-se** dia e noite; **consertam-se** buracos toda semana.", analise: "Trabalha-se: verbo intransitivo + se → sujeito indeterminado, verbo no singular. Consertam-se buracos: verbo transitivo direto + se → voz passiva sintética; 'buracos' é o sujeito e o verbo concorda com ele.", concurso: true },
          { frase: "**São** dez horas; **é** uma hora; **é** meio-dia.", analise: "Ser indicando hora, data ou distância forma oração sem sujeito, mas concorda com o numeral. É a exceção entre os verbos impessoais.", concurso: true },
          { frase: "**Alguém** bateu à porta do posto.", analise: "Sujeito simples: 'alguém' é pronome indefinido e está expresso. Indeterminado é quando não há termo nenhum que represente quem age.", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Sujeito depois do verbo", texto: "'Chegaram os laudos': o sujeito é 'os laudos', mesmo posposto. O verbo concorda." },
          { titulo: "Sujeito oracional", texto: "'É necessário que todos compareçam': a oração é o sujeito; o verbo da principal fica no singular." },
          { titulo: "3ª do plural com referente", texto: "'Os agentes chegaram e multaram': o sujeito de 'multaram' é oculto (eles = os agentes), não indeterminado." },
          { titulo: "Haver auxiliar é pessoal", texto: "'Os agentes haviam saído' (= tinham saído): aqui haver é auxiliar e concorda." },
        ],
      },
    ],
  },
  {
    id: "periodo-composto",
    titulo: "Período composto: coordenação, subordinação e orações reduzidas",
    grupo: "nucleo",
    gancho: "**Coordenadas são vizinhas, subordinadas são peças**: a subordinada ocupa o lugar de um termo da outra oração (sujeito, objeto, adjunto).",
    topicosPrf: [T_SINTAXE, "Pontuação"],
    blocos: [
      {
        tipo: "chaves",
        titulo: "A subordinada vale por um termo",
        ramos: [
          { rotulo: "Substantiva (= isso)", texto: "subjetiva, objetiva direta, objetiva indireta, completiva nominal, predicativa, apositiva", exemplo: "Espero **que venham** (espero isso)." },
          { rotulo: "Adjetiva (= adjetivo)", texto: "começa por relativo; restritiva sem vírgula, explicativa com vírgula", exemplo: "O laudo **que chegou** está errado." },
          { rotulo: "Adverbial (= advérbio)", texto: "causal, consecutiva, comparativa, conformativa, concessiva, condicional, final, proporcional, temporal", exemplo: "**Embora chovesse**, a blitz seguiu." },
        ],
      },
      {
        tipo: "fluxo",
        titulo: "Que oração é esta?",
        passos: [
          { pergunta: "Dá para trocar a oração inteira por 'isso'?", sim: "**Substantiva**: veja a função de 'isso' (sujeito, objeto, complemento nominal...)." },
          { pergunta: "Começa por pronome relativo (que = o qual, quem, cujo, onde) e se refere a um nome anterior?", sim: "**Adjetiva**: entre vírgulas, explicativa; sem vírgulas, restritiva." },
          { pergunta: "Indica causa, condição, tempo, concessão ou outra circunstância da outra oração?", sim: "**Adverbial**: classifique pela circunstância." },
        ],
        senao: "As orações se sustentam sozinhas: **coordenação**, assindética (sem conjunção) ou sindética (aditiva, adversativa, alternativa, conclusiva, explicativa).",
      },
      {
        tipo: "comparativo",
        titulo: "Adjetiva restritiva × explicativa",
        colunas: [
          { titulo: "Restritiva (sem vírgula)", itens: ["limita o grupo: só uma parte", "Os agentes **que estavam de plantão** foram chamados.", "= apenas os de plantão foram chamados"] },
          { titulo: "Explicativa (entre vírgulas)", itens: ["generaliza: vale para todos", "Os agentes, **que estavam de plantão**, foram chamados.", "= todos estavam de plantão"] },
        ],
        sintese: "Pôr ou tirar as vírgulas muda o sentido: é a questão clássica de reescrita.",
      },
      {
        tipo: "grade",
        titulo: "Substantivas: a função de 'isso'",
        colunas: ["Função", "Exemplo"],
        linhas: [
          { rotulo: "subjetiva", valores: ["sujeito", "É preciso que todos venham."] },
          { rotulo: "objetiva direta", valores: ["objeto direto", "Espero que venham."] },
          { rotulo: "objetiva indireta", valores: ["objeto indireto", "Lembre-se de que o prazo acaba hoje."] },
          { rotulo: "completiva nominal", valores: ["complemento nominal", "Tenho certeza de que virão."] },
          { rotulo: "predicativa", valores: ["predicativo", "O problema é que faltam viaturas."] },
          { rotulo: "apositiva", valores: ["aposto", "Só peço isto: que cheguem cedo."] },
        ],
      },
      {
        tipo: "lista",
        titulo: "Orações reduzidas",
        itens: [
          "Não têm conectivo e o verbo fica no **infinitivo**, no **gerúndio** ou no **particípio**.",
          "**Ao chegar**, assinou o termo (= quando chegou: temporal reduzida de infinitivo).",
          "**Terminada a vistoria**, liberou o carro (= quando a vistoria terminou: temporal reduzida de particípio).",
          "**Sendo grave a falha**, interditou o trecho (= como a falha era grave: causal reduzida de gerúndio).",
          "Para classificar, **desenvolva**: troque pela forma com conjunção e verbo conjugado.",
        ],
      },
      {
        tipo: "macete",
        texto: "Isso → substantiva. O qual → adjetiva. Circunstância → adverbial.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "O condutor **que foi multado** recorreu.", analise: "Restringe: só o condutor multado. Adjetiva restritiva, sem vírgulas." },
          { frase: "Choveu **tanto que a pista alagou**.", analise: "'Tanto... que': consecutiva. A consecutiva traz intensificador na principal." },
          { frase: "O motorista freou, **mas** o carro derrapou.", analise: "Coordenada sindética adversativa: 'mas' liga duas orações independentes com ideia de oposição." },
          { frase: "Saiu cedo, **pois** tinha plantão.", analise: "Coordenada sindética explicativa: 'pois' antes do verbo justifica o que se disse antes." },
          { frase: "**Embora** chovesse, a operação continuou.", analise: "Subordinada adverbial concessiva: admite um fato contrário que não impede o principal (= apesar de chover). Pede subjuntivo." },
          { frase: "É provável **que chova à tarde**.", analise: "Isso é provável: a oração é o sujeito (subjetiva). O verbo 'é' fica no singular.", concurso: true },
          { frase: "**Mal o sinal abriu**, os carros avançaram.", analise: "'Mal' = assim que: oração adverbial temporal.", concurso: true },
          { frase: "Os agentes **que estavam de folga** foram convocados. × Os agentes, **que estavam de folga**, foram convocados.", analise: "Sem vírgulas, adjetiva restritiva: só os que estavam de folga foram convocados. Com vírgulas, explicativa: todos estavam de folga e todos foram convocados.", concurso: true },
          { frase: "**Terminada a vistoria**, o caminhão foi liberado.", analise: "Oração reduzida de particípio, adverbial temporal (= quando a vistoria terminou). A reduzida não tem conjunção e o verbo vem em forma nominal.", concurso: true },
          { frase: "A notícia **de que a ponte caiu** assustou; a notícia **que recebemos** era falsa.", analise: "'De que a ponte caiu' completa o nome 'notícia' (substantiva completiva nominal: é o conteúdo da notícia). 'Que recebemos' é adjetiva: 'que' é pronome relativo (= a qual) e funciona como objeto de 'recebemos'.", concurso: true },
          { frase: "Tenho certeza **de que** a ponte será reaberta.", analise: "Completiva nominal: 'certeza' pede a preposição 'de' (certeza de algo). Tirar o 'de' ('Tenho certeza que') é erro de regência na norma-padrão.", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Que integrante × que relativo", texto: "Troque por 'o qual': deu certo, é relativo (adjetiva). Troque a oração por 'isso': deu certo, é integrante (substantiva)." },
          { titulo: "Período misto", texto: "Coordenação e subordinação podem aparecer juntas: 'Saiu cedo e disse que voltaria'." },
          { titulo: "A principal não vem sempre antes", texto: "'Quando o sinal abriu, os carros avançaram': a principal é a segunda oração." },
          { titulo: "Como causal × como conformativo", texto: "'Como chovia, adiou' (= porque: causal). 'Agiu como mandava a norma' (= conforme: conformativa)." },
        ],
      },
    ],
  },
  {
    id: "vozes-verbais",
    titulo: "Vozes verbais e transposição para a passiva",
    grupo: "nucleo",
    gancho: "**Ativa**: o sujeito faz. **Passiva**: o sujeito sofre. **Reflexiva**: faz e sofre. Na transposição, o objeto direto vira sujeito e o **tempo verbal não muda**.",
    topicosPrf: [T_SINTAXE, "Emprego das classes de palavras"],
    blocos: [
      {
        tipo: "chaves",
        titulo: "As vozes",
        ramos: [
          { rotulo: "Ativa", exemplo: "O agente multou o condutor." },
          { rotulo: "Passiva analítica", texto: "ser + particípio, com agente da passiva", exemplo: "O condutor foi multado pelo agente." },
          { rotulo: "Passiva sintética", texto: "verbo transitivo direto + se", exemplo: "Multaram-se os condutores. Vendem-se casas." },
          { rotulo: "Reflexiva", texto: "o sujeito age sobre si mesmo", exemplo: "O agente se feriu." },
          { rotulo: "Recíproca", texto: "um ao outro; sujeito plural", exemplo: "Os agentes se cumprimentaram." },
        ],
      },
      {
        tipo: "passos",
        frase: "Os fiscais vistoriavam os caminhões.",
        passos: [
          "Ache o objeto direto: 'os caminhões'. Só verbo transitivo direto (ou direto e indireto) admite passiva.",
          "O objeto direto vira sujeito: 'Os caminhões...'.",
          "O verbo vira 'ser' + particípio, no mesmo tempo do original: vistoriavam (imperfeito) → eram vistoriados.",
          "O antigo sujeito vira agente da passiva: 'pelos fiscais'.",
        ],
        conclusao: "Os caminhões eram vistoriados pelos fiscais. Na sintética: Vistoriavam-se os caminhões.",
      },
      {
        tipo: "grade",
        titulo: "O tempo passa para o auxiliar 'ser'",
        colunas: ["Ativa", "Passiva analítica"],
        linhas: [
          { rotulo: "presente", valores: ["vistoria", "é vistoriado"] },
          { rotulo: "pretérito perfeito", valores: ["vistoriou", "foi vistoriado"] },
          { rotulo: "pretérito imperfeito", valores: ["vistoriava", "era vistoriado"] },
          { rotulo: "mais-que-perfeito", valores: ["vistoriara / tinha vistoriado", "fora / tinha sido vistoriado"] },
          { rotulo: "futuro do presente", valores: ["vistoriará", "será vistoriado"] },
          { rotulo: "futuro do pretérito", valores: ["vistoriaria", "seria vistoriado"] },
          { rotulo: "locução", valores: ["vai vistoriar", "vai ser vistoriado"] },
        ],
        nota: "Erros de prova: mudar o tempo na transposição ou esquecer que o particípio concorda com o novo sujeito (as cargas foram vistoriadas).",
      },
      {
        tipo: "comparativo",
        titulo: "Três usos do SE com verbo",
        colunas: [
          { titulo: "Reflexivo", itens: ["= a si mesmo", "O agente se feriu."] },
          { titulo: "Recíproco", itens: ["= um ao outro", "Os condutores se ofenderam."] },
          { titulo: "Parte do verbo", itens: ["verbo pronominal, sem 'a si mesmo'", "Ele se queixou. Arrependeu-se."] },
        ],
        sintese: "Só há voz reflexiva quando dá para acrescentar 'a si mesmo' ou 'um ao outro'.",
      },
      {
        tipo: "macete",
        texto: "Na passiva analítica, o 'ser' guarda o tempo e o particípio concorda com o sujeito.",
      },
      {
        tipo: "exemplos",
        itens: [
          { frase: "Os condutores **se ofenderam** mutuamente.", analise: "Recíproca: um ofendeu o outro." },
          { frase: "O agente **multou** o motorista. → O motorista **foi multado** pelo agente.", analise: "Ativa → passiva analítica: o objeto direto vira sujeito, o sujeito vira agente da passiva e o verbo passa a ser + particípio, no mesmo tempo (multou → foi multado)." },
          { frase: "O agente **se protegeu** com o colete.", analise: "Voz reflexiva: o sujeito pratica e sofre a ação (protegeu a si mesmo)." },
          { frase: "**Analisaram-se** os recursos.", analise: "= Os recursos foram analisados: passiva sintética, verbo no plural.", concurso: true },
          { frase: "O relatório **tinha sido entregue** pelo agente.", analise: "Na ativa: 'O agente tinha entregado o relatório' (mais-que-perfeito composto, nos dois casos).", concurso: true },
          { frase: "Os documentos **serão analisados** pela comissão. → A comissão **analisará** os documentos.", analise: "Passiva → ativa: o agente da passiva volta a ser sujeito e o tempo se mantém (serão analisados, futuro do presente → analisará).", concurso: true },
          { frase: "**Obedece-se** às normas; **cumprem-se** as normas.", analise: "Obedecer é transitivo indireto (obedecer a): o 'se' indetermina o sujeito e o verbo fica no singular. Cumprir é transitivo direto: voz passiva sintética, 'as normas' é sujeito e o verbo vai ao plural.", concurso: true },
          { frase: "Os feridos **foram assistidos** pela equipe médica.", analise: "Correto: no sentido de ajudar, assistir é transitivo direto e aceita a passiva. No sentido de ver, é transitivo indireto (assistir ao jogo), e a gramática tradicional condena 'o jogo foi assistido'.", concurso: true },
        ],
      },
      {
        tipo: "pegadinhas",
        itens: [
          { titulo: "Transitivo indireto não forma passiva", texto: "Precisar de, gostar de, assistir a (= ver) não vão para a passiva; com 'se', o SE é indeterminador: Assiste-se ao jogo." },
          { titulo: "Agente da passiva pode faltar", texto: "'O carro foi apreendido': passiva analítica sem agente expresso." },
          { titulo: "Ser + particípio nem sempre é passiva", texto: "'Ele é casado' indica estado: 'casado' é predicativo, não há ação sofrida." },
        ],
      },
    ],
  },
];
