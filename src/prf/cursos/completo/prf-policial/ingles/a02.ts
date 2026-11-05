import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "ingles-02",
  resumo: {
    ideia:
      "Para ler bem, é preciso reconhecer as peças da frase. A aula mostra a ordem das palavras, os substantivos, os artigos, os pronomes e as preposições.",
    itens: [
      {
        termo: "Ordem da frase",
        faz: "Sujeito, verbo e complemento. Em perguntas, o verbo pode vir antes do sujeito.",
      },
      {
        termo: "Adjetivo",
        faz: "Vem antes do substantivo e não vai para o plural.",
        pista: "Em “road safety campaign”, leia de trás para a frente: campanha de segurança viária.",
      },
      {
        termo: "Incontáveis",
        faz: "Não têm plural nem aceitam a ou an: advice, information, equipment.",
      },
      {
        termo: "Caso genitivo",
        faz: "O 's indica posse: the driver's license, a habilitação do motorista.",
      },
      {
        termo: "A e an",
        faz: "A escolha segue o som, e não a letra: an hour, a university.",
      },
      {
        termo: "Any",
        faz: "Na negativa é “nenhum”. Na afirmativa é “qualquer”.",
      },
      {
        termo: "Possessivos",
        faz: "My, his e her vêm antes do substantivo. Mine, his e hers ficam sozinhos.",
      },
      {
        termo: "Reflexivos",
        faz: "Myself, himself, herself: a ação volta para quem a pratica.",
      },
      {
        termo: "Preposições",
        faz: "At para ponto e hora, on para dia e via, in para mês e lugar fechado. Despite é “apesar de”.",
      },
    ],
    cuidado: "O possessivo concorda com o dono, nunca com a coisa. O carro de Ana é her car, mesmo com “carro” no masculino.",
  },
  questoes: [
    {
      topico: "Substantivos",
      subassunto: "Substantivo como modificador",
      dificuldade: 4,
      raciocinio: "O núcleo é a última palavra.",
      enunciado: "Num texto sobre uma ação da PRF, a expressão “highway safety campaign” significa",
      alternativas: [
        "segurança da campanha feita na rodovia",
        "rodovia da campanha de segurança",
        "campanha rodoviária que é segura",
        "rodovia segura em campanha",
        "campanha de segurança rodoviária",
      ],
      correta: 4,
      explicacao: "Em inglês, o que modifica vem antes. O núcleo é campaign, e highway safety diz de que campanha se trata.",
      explicacaoErradas:
        "“segurança da campanha” e “rodovia da campanha” começam pelo núcleo errado. “que é segura” e “rodovia segura” tomam safety por adjetivo, e a palavra é substantivo.",
      pegadinha: "Traduzir na ordem em que as palavras aparecem.",
      conhecimento: "Ler de trás para a frente resolve a maioria dessas sequências.",
    },
    {
      topico: "Substantivos",
      subassunto: "Incontáveis",
      dificuldade: 4,
      raciocinio: "Advice não aceita plural nem artigo indefinido.",
      enunciado: "Está correta, quanto ao uso do substantivo, a frase",
      alternativas: [
        "The officer gave the driver an advice about the tires.",
        "The officer gave the driver many advices about it.",
        "The officer gave the driver some useful advice.",
        "The officer gave the two drivers two advices today.",
        "The officer gave the driver a few advice on the trip.",
      ],
      correta: 2,
      explicacao: "Advice é incontável. Não vai para o plural nem aceita an. Para contar, diz-se a piece of advice.",
      explicacaoErradas:
        "“an advice” usa artigo indefinido. “many advices” e “two advices” usam plural. “a few advice” traz quantificador de contáveis.",
      pegadinha: "Pluralizar como “conselhos”, que é contável em português.",
      conhecimento: "Information e equipment seguem a mesma regra.",
    },
    {
      topico: "Artigos",
      subassunto: "A e an",
      dificuldade: 5,
      raciocinio: "Olhe o som inicial, e não a letra.",
      enunciado:
        "Complete: “The patrol stopped ___ hour later, near ___ university, after ___ honest driver reported ___ one-way road was blocked.”",
      alternativas: ["a, a, an, an", "an, an, a, an", "an, a, an, a", "a, an, an, a", "an, an, an, a"],
      correta: 2,
      explicacao:
        "Hour e honest começam com som de vogal, pois o h é mudo: an. University e one-way começam com som de consoante: a.",
      explicacaoErradas:
        "“a, a, an, an” erra hour e one-way. “an, an, a, an” erra as três últimas. “a, an, an, a” erra hour e university. “an, an, an, a” erra university.",
      pegadinha: "Decidir pela letra inicial, e não pelo som.",
      conhecimento: "Um European officer pede a, porque o som inicial é de consoante.",
    },
    {
      topico: "Pronomes",
      subassunto: "Possessivos",
      dificuldade: 5,
      raciocinio: "Pergunte quem é o dono em cada caso.",
      enunciado:
        "Em “The agent returned the license to Ana, and she put it in her wallet. Then he checked the truck and its documents.”, os termos “her” e “its” retomam, nessa ordem,",
      alternativas: ["agente e licença", "Ana e documentos", "licença e carteira", "Ana e caminhão", "carteira e agente"],
      correta: 3,
      explicacao: "Her wallet é a carteira de Ana. Its documents são os documentos do caminhão. Its se usa para coisas.",
      explicacaoErradas:
        "“agente e licença” erra os dois donos. “Ana e documentos” toma a coisa possuída pelo dono. “licença e carteira” e “carteira e agente” apontam para objetos ou para a pessoa errada.",
      pegadinha: "Ligar o possessivo à coisa possuída.",
      conhecimento: "Its é possessivo. It's é a forma curta de it is.",
    },
    {
      topico: "Pronomes",
      subassunto: "Some e any",
      dificuldade: 4,
      raciocinio: "A frase é negativa ou afirmativa?",
      enunciado:
        "Nas frases “The officers did not find any drugs in the car.” e “Any driver can ask for a copy of the report.”, “any” significa, nessa ordem,",
      alternativas: [
        "nenhuma e qualquer",
        "alguma e nenhum",
        "qualquer e nenhum",
        "muita e cada um dos",
        "alguma e todo e qualquer um",
      ],
      correta: 0,
      explicacao: "Na negativa, any vale “nenhum”. Na afirmativa, vale “qualquer”.",
      explicacaoErradas:
        "“alguma e nenhum” e “qualquer e nenhum” erram a segunda frase. “muita e cada um dos” não traduz any. “alguma e todo e qualquer um” erra a negativa.",
      pegadinha: "Traduzir any sempre por “algum”.",
      conhecimento: "Em perguntas, any costuma ser “algum”: Do you have any questions?",
    },
    {
      topico: "Preposições",
      subassunto: "In, on e at",
      dificuldade: 5,
      raciocinio: "Ponto e hora, via e dia.",
      enunciado: "Complete: “The checkpoint is ___ BR-116, ___ km 300, and the shift starts ___ 7 a.m. ___ Monday.”",
      alternativas: ["in, on, on, at", "on, at, at, on", "at, in, in, in", "on, in, in, on", "in, at, at, in"],
      correta: 1,
      explicacao: "On para via e dia. At para ponto exato e para hora.",
      explicacaoErradas:
        "“in, on, on, at” troca as regras. “at, in, in, in” erra as quatro. “on, in, in, on” erra o ponto e a hora. “in, at, at, in” erra a via e o dia.",
      pegadinha: "Usar in para tudo, como “em” no português.",
      conhecimento: "In vale para meses, anos e lugares fechados: in May, in 2026.",
    },
    {
      topico: "Preposições",
      subassunto: "Despite",
      dificuldade: 5,
      raciocinio: "Despite introduz um obstáculo que não impediu o fato.",
      enunciado: "A frase “Despite the heavy rain, the patrol finished the operation on time.” mantém o sentido em",
      alternativas: [
        "Because it rained heavily, the patrol finished on time.",
        "Since the rain was heavy, the patrol finished on time.",
        "If it rains heavily, the patrol will finish on time.",
        "Although it rained, the patrol did not finish on time at all.",
        "Although it rained heavily, the patrol finished on time.",
      ],
      correta: 4,
      explicacao: "Despite é “apesar de”. Although faz o mesmo papel, com um verbo depois: a chuva não impediu o fim da operação.",
      explicacaoErradas:
        "“Because” e “Since” apontam causa. “If” traz condição. “did not finish” nega o fato da frase original.",
      pegadinha: "Trocar concessão por causa.",
      conhecimento: "In spite of equivale a despite. Os dois vêm seguidos de substantivo ou de -ing.",
    },
  ],
};
