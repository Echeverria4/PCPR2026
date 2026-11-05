import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-01",
  resumo: {
    ideia:
      "Som e escrita andam separados. Primeiro descubra quantos sons a palavra tem e onde cai a força da voz; só depois aplique a regra do acento, do hífen ou da letra.",
    itens: [
      {
        termo: "Letra × fonema",
        faz: "Letra é o que se vê; fonema é o som. Dígrafo são duas letras com um som só: ch, lh, nh, rr, ss, qu, gu, am, en.",
        pista: "Com dígrafo, a palavra tem menos sons do que letras. Em “pr” e “bl” cada letra tem som: é encontro consonantal.",
      },
      {
        termo: "Ditongo, tritongo e hiato",
        faz: "Ditongo: vogal e semivogal na mesma sílaba (sé-rie). Tritongo: semivogal, vogal, semivogal (U-ru-guai). Hiato: vogais em sílabas separadas (sa-ú-de).",
        pista: "Em “falam” e “batem”, o m final soa como semivogal: é ditongo nasal. Em “campo”, o m só nasaliza: é dígrafo.",
      },
      {
        termo: "Regras gerais do acento",
        faz: "Proparoxítona: todas levam acento. Oxítona: a, e, o, em, ens. Paroxítona: l, n, r, x, ps, i(s), us, um, ã(s), ão(s) e ditongo.",
        pista: "Monossílabo tônico segue a, e, o: pá, pé, só.",
      },
      {
        termo: "Regra do hiato",
        faz: "I e U tônicos, sozinhos na sílaba ou com s, levam acento: saída, baú, juízes, açaí.",
        pista: "Não levam antes de nh (rainha), quando repetidos (xiita) nem em paroxítona depois de ditongo (feiura). Em oxítona depois de ditongo, o acento fica: Piauí.",
      },
      {
        termo: "Acentos que ficaram e que caíram",
        faz: "Ficaram: pôde, pôr, têm, vêm, mantêm, intervêm. Caíram: ideia, jiboia, heroico, voo, leem, veem, creem, para (verbo), pelo, polo, pera.",
        pista: "Ditongo aberto só leva acento em oxítona e monossílabo: herói, céu, papéis. Em paroxítona, não.",
      },
      {
        termo: "Hífen com prefixo",
        faz: "Letras iguais se separam (micro-ondas, inter-regional). Letras diferentes se juntam (autoestrada, hipermercado). Antes de h, há hífen (super-homem).",
        pista: "Vogal antes de r ou s: a letra dobra (antissocial, contrarregra).",
      },
      {
        termo: "Prefixos com regra própria",
        faz: "Co- não usa hífen: coautor, coobrigado. Ex-, vice-, recém-, sem-, além-, aquém-, pós-, pré- e pró- tônicos usam sempre. Bem- usa quase sempre; mal- usa antes de vogal e h.",
        pista: "Sub- pede hífen antes de b, h e r: sub-base, sub-humano, sub-reitor.",
      },
      {
        termo: "Expressões problemáticas",
        faz: "Por que: pergunta ou “pelo qual”. Por quê: fim de frase. Porque: explicação. Porquê: substantivo. Mal × mau: bem × bom. Há: tempo passado. A: futuro ou distância. Onde: lugar parado. Aonde: movimento.",
        pista: "Acerca de = sobre. Há cerca de = faz aproximadamente.",
      },
    ],
    cuidado:
      "Palavras de tonicidade diferente só dividem a mesma regra no caso do hiato: “juízes” (paroxítona) e “açaí” (oxítona). Terminar igual não basta: “anéis” é oxítona e “imóveis” é paroxítona.",
  },
  questoes: [
    {
      topico: "Fonemas e dígrafos",
      subassunto: "Contagem de letras e fonemas",
      dificuldade: 4,
      raciocinio: "Separar o que é dígrafo (um som) do que é encontro de dois sons, palavra por palavra.",
      enunciado:
        "Um boletim de ocorrência traz as palavras “guincho”, “exceção”, “queixa”, “tombamento” e “carro”. Considerando a pronúncia padrão, assinale a análise correta da relação entre letras e fonemas.",
      alternativas: [
        "“exceção” tem sete letras e sete fonemas, porque “xc” é encontro consonantal.",
        "“tombamento” tem dez letras e nove fonemas, porque só “en” nasaliza a vogal.",
        "“guincho” tem sete letras e quatro fonemas, porque reúne três dígrafos.",
        "“queixa” tem seis letras e seis fonemas, porque “qu” conserva o som do “u”.",
        "“carro” tem cinco letras e cinco fonemas, porque “rr” representa dois sons.",
      ],
      correta: 2,
      explicacao:
        "Em “guincho” há três dígrafos: “gu” (o u não soa), “in” (vogal nasal) e “ch”. As sete letras viram quatro sons: /g/, /ĩ/, /x/ e /u/.",
      explicacaoErradas:
        "“xc” em “exceção” é dígrafo, com som de s, então são seis fonemas. “tombamento” tem dois dígrafos nasais, “om” e “en”: oito fonemas. Em “queixa”, o “u” de “qu” não soa: cinco fonemas. “rr” é dígrafo: “carro” tem quatro fonemas.",
      pegadinha:
        "Achar que m e n depois de vogal sempre têm som próprio. Antes de outra consoante, eles só nasalizam a vogal e formam dígrafo.",
      conhecimento:
        "Dígrafo é uma dupla de letras com um som só. Cada dígrafo faz a palavra ter um fonema a menos do que letras.",
    },
    {
      topico: "Acentuação gráfica",
      subassunto: "Regra do hiato em tonicidades diferentes",
      dificuldade: 5,
      raciocinio: "Classificar cada palavra pela tonicidade e pela terminação antes de comparar as regras.",
      enunciado:
        "Em relatórios de uma equipe de fiscalização aparecem as duplas de palavras abaixo. Assinale a dupla em que as duas palavras recebem acento pela mesma regra.",
      alternativas: [
        "“anéis” e “imóveis”",
        "“também” e “hífen”",
        "“júri” e “juízo”",
        "“refém” e “têm”",
        "“Piauí” e “saída”",
      ],
      correta: 4,
      explicacao:
        "“Piauí” e “saída” têm i tônico em hiato. A regra do hiato vale para oxítonas e paroxítonas, por isso as duas se ligam a ela mesmo com tonicidades diferentes.",
      explicacaoErradas:
        "“anéis” é oxítona com ditongo aberto; “imóveis” é paroxítona terminada em ditongo. “também” é oxítona em “em”; “hífen” é paroxítona em n. “júri” é paroxítona em i; “juízo” segue o hiato. “refém” é oxítona; “têm” tem acento diferencial de plural.",
      pegadinha:
        "Comparar só o fim da palavra. “anéis” e “imóveis” terminam em “eis”, mas a força da voz cai em lugares diferentes.",
      conhecimento:
        "Tonicidades diferentes indicam regras diferentes. A exceção é a regra do hiato, que alcança oxítonas e paroxítonas. “Piauí” mantém o acento, mesmo depois de ditongo, por ser oxítona.",
    },
    {
      topico: "Acentuação gráfica",
      subassunto: "Acentos mantidos e abolidos pela ortografia atual",
      dificuldade: 5,
      raciocinio: "Conferir cada verbo no singular e no plural e lembrar dos acentos que caíram.",
      enunciado:
        "Assinale a frase, retirada de um relatório de operação, que está inteiramente de acordo com a ortografia oficial quanto à acentuação.",
      alternativas: [
        "As equipes que intervêm na pista veem os riscos, e ninguém pôde sair antes do fim.",
        "O radar detém os dados da via, e os postos também detém os registros da semana.",
        "O condutor não crê na multa, e os passageiros crêem que houve erro de leitura.",
        "O heróico resgate na serra durou horas e terminou sem nenhuma vítima em estado grave.",
        "O agente pára o veículo no acostamento e pede os documentos do condutor e do carro.",
      ],
      correta: 0,
      explicacao:
        "“intervêm” está no plural, com circunflexo; “veem” perdeu o acento na ortografia atual; “pôde”, no passado, mantém o acento que o distingue de “pode”.",
      explicacaoErradas:
        "“os postos detém” pede o plural “detêm”. “crêem” perdeu o acento: “creem”. “heróico” é paroxítona com ditongo aberto, sem acento: “heroico”. “pára” perdeu o acento: “para”.",
      pegadinha:
        "“têm” e “vêm” continuam com circunflexo, mas “veem” e “creem” não. A dupla “ee” é outro caso: perdeu o acento.",
      conhecimento:
        "Derivados de ter e vir seguem a marca de número: singular com agudo (detém, intervém), plural com circunflexo (detêm, intervêm).",
    },
    {
      topico: "Emprego do hífen",
      subassunto: "Prefixos com regra própria e compostos",
      dificuldade: 5,
      raciocinio: "Testar cada palavra pela regra do prefixo, sem confiar na aparência.",
      enunciado: "Assinale a sequência em que todas as palavras estão grafadas de acordo com a ortografia oficial.",
      alternativas: [
        "cooperado, sub-secretaria, pan-asiático, mandachuva, malcriado",
        "coobrigado, sub-base, pan-americano, paraquedas, mal-humorado",
        "co-obrigado, sub-reitor, pan-africano, girassol, bem-vindo",
        "coautor, sub-raça, panamericano, pontapé, bem-estar",
        "coerdeiro, sub-bibliotecário, pan-helênico, para-quedas, mal-estar",
      ],
      correta: 1,
      explicacao:
        "“co” nunca usa hífen, mesmo diante de o (“coobrigado”). “sub” pede hífen antes de b. “pan” pede hífen antes de vogal. “paraquedas” perdeu o hífen. “mal” pede hífen antes de h.",
      explicacaoErradas:
        "“sub-secretaria” não existe: “subsecretaria”, porque “sub” só pede hífen antes de b, h e r. “co-obrigado” contraria a regra do “co”. “panamericano” deveria ter hífen. “para-quedas” é a grafia antiga.",
      pegadinha:
        "Aplicar a regra de “letras iguais se separam” ao “co”. Ele é a exceção: junta-se sempre, até com outro o.",
      conhecimento:
        "“sub” segue regra própria: hífen antes de b, h e r. “paraquedas”, “paraquedista”, “mandachuva” e “pontapé” se escrevem juntos porque perderam a noção de composição.",
    },
    {
      topico: "Expressões problemáticas",
      subassunto: "Porquês, há e a, mal e mau, onde e aonde",
      dificuldade: 4,
      raciocinio: "Trocar cada expressão pelo sinônimo que a regra prevê e ver se a frase continua certa.",
      enunciado: "Assinale a frase em que todas as expressões estão empregadas de acordo com a norma-padrão.",
      alternativas: [
        "A equipe sabe o porque da mudança e irá, daqui a dois dias, ao local onde houve o acidente.",
        "O motorista agiu mau ao sair do posto, porque havia óleo na pista e o trecho estava molhado.",
        "Aonde fica o posto em que a ocorrência foi registrada há cerca de três horas nesta manhã?",
        "Ninguém explicou por que o radar falhou; há cerca de dois anos, o aparelho já dava erro.",
        "A nota trata a cerca das mudanças na escala e não diz quando elas entram em vigor na região.",
      ],
      correta: 3,
      explicacao:
        "“por que” equivale a “por qual motivo” na pergunta indireta, e “há cerca de” significa “faz aproximadamente”, indicando tempo passado.",
      explicacaoErradas:
        "“o porque” está substantivado e pede “o porquê”. “agiu mau” pede o advérbio “mal”, o contrário de “bem”. “Aonde fica” não tem movimento e pede “Onde”. “a cerca das mudanças” significa “sobre” e pede “acerca das”.",
      pegadinha:
        "Achar que “por que” só aparece em frase com ponto de interrogação. A pergunta indireta também usa a forma separada.",
      conhecimento:
        "“Aonde” pede verbo de movimento com a preposição a (ir a, chegar a). Sem movimento, usa-se “onde”.",
    },
    {
      topico: "Emprego das letras",
      subassunto: "Grafias que mais caem em prova",
      dificuldade: 4,
      raciocinio: "Ler cada palavra sílaba por sílaba e lembrar da família dela.",
      enunciado: "Assinale a frase de relatório escrita sem nenhum desvio de grafia.",
      alternativas: [
        "Pedimos que os condutores viagem de dia, pois a obra causa lentidão e muitos desvios.",
        "A entidade beneficiente doou coletes, e a ascensão do novo chefe do posto foi rápida.",
        "O condutor quis recorrer, mas a excessão prevista na norma não alcançava aquele caso.",
        "A extensão da fila foi o maior impecilho à vistoria feita na manhã daquele feriado.",
        "A paralisação da via exigiu análise do trecho, e a equipe pôs os cones sem hesitar.",
      ],
      correta: 4,
      explicacao:
        "“paralisação” vem de “paralisar” (com s), “análise” e “pôs” se escrevem com s, e “hesitar”, com h, significa “ficar em dúvida”.",
      explicacaoErradas:
        "“viagem” é substantivo; o verbo, aqui, é “viajem”, com j. “beneficiente” não existe: “beneficente”. “excessão” não existe: “exceção”. “impecilho” não existe: “empecilho”.",
      pegadinha:
        "“viagem” e “viajem” soam iguais. A troca do g pelo j marca a diferença entre o nome e o verbo “viajar”.",
      conhecimento:
        "A família da palavra orienta a letra: “analisar” vem de “análise” e “paralisar” vem de “paralisia”, por isso os dois têm s, e “viajar” mantém o j em todas as formas.",
    },
  ],
};
