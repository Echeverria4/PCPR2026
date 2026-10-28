import type { Licao } from "../tipos";

export const VERBO: Licao = {
  id: "verbo",
  titulo: "Verbo",
  classe: "verbo",
  resumo: "A palavra que indica **ação**, **estado** ou **fenômeno** situado no tempo. É a classe que mais varia: pessoa, número, tempo, modo e voz.",
  modelo: [
    {
      tipo: "chaves",
      titulo: "Verbo",
      ramos: [
        { rotulo: "Flexões", classe: "verbo", texto: "pessoa, número, tempo, modo, voz", exemplo: "estud-á-va-mos: radical + vogal temática + tempo/modo + pessoa/número" },
        { rotulo: "Modos", classe: "verbo", texto: "indicativo (certeza), subjuntivo (hipótese), imperativo (ordem)", exemplo: "estudo / que eu estude / estude!" },
        { rotulo: "Formas nominais", classe: "verbo", texto: "infinitivo, gerúndio, particípio", exemplo: "estudar, estudando, estudado" },
        { rotulo: "Vozes", classe: "verbo", texto: "ativa, passiva, reflexiva", exemplo: "multou / foi multado, multou-se / feriu-se" },
        { rotulo: "Conjugação", classe: "verbo", texto: "regular, irregular, anômalo, defectivo, abundante", exemplo: "cantar / fazer / ser, ir / falir / aceitado-aceito" },
        { rotulo: "Predicação", classe: "verbo", texto: "intransitivo, transitivo, de ligação", exemplo: "chegou / anotou a placa / é estudioso" },
      ],
    },
    {
      tipo: "macete",
      texto: "Conjugou com **eu, tu, ele**? É verbo. Ganhou artigo? Virou substantivo.",
    },
  ],
  secoes: [
    {
      letra: "A",
      blocos: [
        {
          tipo: "texto",
          texto:
            "Verbo é a palavra que exprime **ação** (fiscalizar), **estado** (estar, permanecer) ou **fenômeno da natureza** (chover), situando-a no **tempo** (presente, pretérito, futuro). É o núcleo do predicado, a não ser que seja de ligação.",
        },
        {
          tipo: "grade",
          titulo: "Tempos do indicativo (estudar, 1ª pessoa)",
          colunas: ["Forma", "Ideia"],
          linhas: [
            { rotulo: "Presente", valores: ["estudo", "agora, hábito ou verdade geral"] },
            { rotulo: "Pretérito perfeito", valores: ["estudei", "fato concluído"] },
            { rotulo: "Pretérito imperfeito", valores: ["estudava", "fato habitual ou em curso no passado"] },
            { rotulo: "Pretérito mais-que-perfeito", valores: ["estudara (tinha estudado)", "passado anterior a outro passado"] },
            { rotulo: "Futuro do presente", valores: ["estudarei", "fato posterior ao momento da fala"] },
            { rotulo: "Futuro do pretérito", valores: ["estudaria", "fato condicionado, hipótese, polidez"] },
          ],
        },
      ],
    },
    {
      letra: "B",
      blocos: [
        {
          tipo: "perguntas",
          itens: [
            "Dá para conjugar (eu ___, ele ___, nós ___)?",
            "Muda de forma com o tempo (estuda, estudou, estudará)?",
            "A frase deixa de ter sentido completo se a palavra sair? Em geral, o verbo é o eixo da oração.",
            "Termina em -ar, -er, -ir, -ndo ou -do? Pode ser forma nominal: veja se há auxiliar antes.",
          ],
        },
        {
          tipo: "comparativo",
          titulo: "Particípio: verbo ou adjetivo?",
          colunas: [
            { titulo: "Verbo", classe: "verbo", itens: ["Com auxiliar: **tinha cansado**, **foi aprovado**", "Faz parte de locução verbal ou voz passiva"] },
            { titulo: "Adjetivo", classe: "adjetivo", itens: ["Sem auxiliar: **agente cansado**, **estou cansado**", "Caracteriza o nome e concorda"] },
          ],
        },
      ],
    },
    {
      letra: "C",
      blocos: [
        {
          tipo: "grade",
          titulo: "Predicação: o que o verbo pede",
          colunas: ["Complemento", "Exemplo"],
          linhas: [
            { rotulo: "Intransitivo", valores: ["nenhum", "O agente **chegou**."] },
            { rotulo: "Transitivo direto", valores: ["objeto sem preposição", "Ele **anotou** a placa."] },
            { rotulo: "Transitivo indireto", valores: ["objeto com preposição", "Ele **precisa** de apoio."] },
            { rotulo: "Transitivo direto e indireto", valores: ["os dois", "Ele **entregou** o ofício ao chefe."] },
            { rotulo: "De ligação", valores: ["predicativo do sujeito", "Ele **está** cansado."] },
          ],
          nota: "A predicação se define na frase: 'O aluno anda' (intransitivo) × 'O aluno anda cansado' (ligação, = está).",
        },
      ],
    },
    {
      letra: "D",
      blocos: [
        {
          tipo: "comparativo",
          titulo: "Verbos impessoais (sem sujeito, sempre na 3ª do singular)",
          colunas: [
            { titulo: "Haver = existir ou tempo decorrido", classe: "verbo", itens: ["**Houve** muitos acidentes.", "**Deve haver** soluções. (o auxiliar também fica no singular)", "**Há** dez anos trabalha aqui."] },
            { titulo: "Fazer (tempo, clima)", classe: "verbo", itens: ["**Faz** dois anos que saiu.", "**Fazia** dias frios.", "Nunca 'fazem dois anos'"] },
            { titulo: "Fenômenos da natureza", classe: "verbo", itens: ["**Choveu** muito.", "**Ventava** forte.", "Em sentido figurado têm sujeito: Choveram críticas."] },
          ],
        },
        {
          tipo: "grade",
          titulo: "Particípio duplo (verbos abundantes)",
          colunas: ["Com ter / haver", "Com ser / estar"],
          linhas: [
            { rotulo: "aceitar", valores: ["tinha aceitado", "foi aceito"] },
            { rotulo: "entregar", valores: ["tinha entregado", "foi entregue"] },
            { rotulo: "eleger", valores: ["tinha elegido", "foi eleito"] },
            { rotulo: "prender", valores: ["tinha prendido", "foi preso"] },
            { rotulo: "pagar, ganhar, gastar", valores: ["tinha pagado ou pago", "foi pago, ganho, gasto"] },
          ],
          nota: "Regra geral: regular com ter/haver; irregular com ser/estar. Pago, ganho e gasto, hoje, aceitam também 'ter'.",
        },
      ],
    },
    {
      letra: "E",
      blocos: [
        {
          tipo: "exemplos",
          itens: [
            { frase: "Se ele **vier**, resolveremos o caso.", analise: "Futuro do subjuntivo de 'vir' é 'vier' (não 'vir'). De 'ver' é 'vir': 'se eu vir o carro'." },
            { frase: "Quando você **puser** a assinatura, o processo segue.", analise: "Futuro do subjuntivo de 'pôr': puser. Derivados também: se ele **mantiver**, se **intervier**, se **propuser**." },
            {
              frase: "**Haviam** muitas pendências no relatório.",
              analise: "Erro: 'haver' = existir é impessoal. Correto: 'Havia muitas pendências'. Com 'existir', o verbo concorda: 'Existiam muitas pendências'.",
              concurso: true,
            },
            {
              frase: "O pagamento **foi efetuado** pela empresa.",
              analise: "Voz passiva analítica: ser + particípio. Na ativa: 'A empresa efetuou o pagamento'. O sujeito da passiva sofre a ação.",
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
            { titulo: "\"Se eu ver\", \"quando ele vir\" (de vir)", texto: "Futuro do subjuntivo: ver → vir (se eu vir); vir → vier (se ele vier)." },
            { titulo: "\"Interviu\", \"manti\"", texto: "Derivados seguem o primitivo: vir → interveio (ele interveio); ter → mantive, deteve, obteve." },
            { titulo: "Verbo defectivo", texto: "Falir, reaver, precaver, abolir não têm todas as formas. 'Eu reavejo' não existe; diga 'eu recupero'. Reaver segue haver só onde haver tem 'v': reouve, reaveria." },
            { titulo: "Voz passiva sintética", texto: "'Vendem-se carros' = carros são vendidos: o verbo concorda com 'carros'. Já 'Precisa-se de agentes' tem sujeito indeterminado (verbo com preposição): fica no singular." },
          ],
        },
        {
          tipo: "nota",
          texto: "O imperativo afirmativo de 'você' vem do subjuntivo: 'faça', 'traga', 'ponha'. O de 'tu' vem do presente do indicativo sem o 's': 'faze', 'traze', 'põe'. Misturar ('faz você') é marca de informalidade.",
        },
      ],
    },
    {
      letra: "G",
      blocos: [
        {
          tipo: "macete",
          texto: "**Ter** pede regular; **ser** pede irregular.",
          explicacao: "Tinha aceitado × foi aceito. Tinha prendido × foi preso.",
        },
        {
          tipo: "macete",
          texto: "Haver no sentido de existir **não tem plural**, nem no auxiliar.",
          explicacao: "Deve haver, pode haver, vai haver problemas.",
        },
      ],
    },
    {
      letra: "H",
      blocos: [
        {
          tipo: "passos",
          frase: "Faz três anos que não há acidentes no trecho que foi duplicado.",
          passos: [
            "Ache os verbos: **faz**, **há**, **foi duplicado** (locução de voz passiva).",
            "**Faz** indica tempo decorrido: impessoal, 3ª do singular (nunca 'fazem').",
            "**Há** = existem: impessoal; 'acidentes' é objeto direto, não sujeito.",
            "**foi duplicado**: ser + particípio = voz passiva analítica; o sujeito é 'que' (o trecho).",
          ],
          conclusao: "dois verbos impessoais (sem sujeito, no singular) e uma locução na voz passiva.",
        },
      ],
    },
    {
      letra: "I",
      blocos: [
        {
          tipo: "lista",
          itens: [
            "Verbo indica ação, estado ou fenômeno no tempo; flexiona em pessoa, número, tempo, modo e voz.",
            "Modos: indicativo, subjuntivo, imperativo. Formas nominais: infinitivo, gerúndio, particípio.",
            "Haver (existir, tempo) e fazer (tempo) são impessoais: 3ª do singular, até no auxiliar.",
            "Abundantes: regular com ter/haver, irregular com ser/estar.",
            "Futuro do subjuntivo: vir (de ver), vier (de vir), puser, mantiver, intervier.",
            "Particípio com auxiliar é verbo; sem auxiliar, adjetivo.",
          ],
        },
      ],
    },
  ],
};
