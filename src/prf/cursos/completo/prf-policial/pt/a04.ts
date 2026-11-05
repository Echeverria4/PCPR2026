import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-04",
  resumo: {
    ideia:
      "Pronome acompanha ou substitui um nome. Nas provas, importam três coisas: a que termo ele se refere, que forma ele assume e onde ele fica em relação ao verbo.",
    itens: [
      {
        termo: "Substantivo × adjetivo",
        faz: "Pronome adjetivo acompanha o nome (estes livros). Pronome substantivo fica no lugar dele (aqueles são meus).",
      },
      {
        termo: "Indefinidos",
        faz: "Antes do nome, “certo” e “bastante” são indefinidos. Depois do nome, são adjetivos: bastantes provas (muitas) × provas bastantes (suficientes).",
        pista: "“Bastante” junto de verbo ou adjetivo é advérbio e não varia.",
      },
      {
        termo: "Demonstrativos",
        faz: "No texto, “este” anuncia e “esse” retoma. Em pares, “este” aponta o termo mais próximo, e “aquele”, o mais distante. No tempo, “este” é o período em curso.",
        pista: "“O”, “a”, “os” e “as” são demonstrativos quando equivalem a “aquele” ou “aquilo”.",
      },
      {
        termo: "Relativos",
        faz: "“Que” e “o qual” retomam pessoa ou coisa. “Quem” retoma pessoa e vem com preposição. “O qual” desfaz ambiguidade, porque varia em gênero e número.",
        pista: "A preposição pedida pelo verbo vem antes do relativo: o livro de que gostamos.",
      },
      {
        termo: "Cujo",
        faz: "Indica posse, fica entre dois substantivos, concorda com o possuído e não aceita artigo depois.",
      },
      {
        termo: "Onde e aonde",
        faz: "“Onde” indica lugar e equivale a “em que”. “Aonde” pede verbo com a preposição “a”. Para tempo, situação ou norma, use “em que”.",
      },
      {
        termo: "Tratamento",
        faz: "Vossa Excelência para falar com a autoridade; Sua Excelência para falar dela. Verbo e possessivo ficam na 3ª pessoa; o adjetivo concorda com o sexo da pessoa.",
      },
      {
        termo: "Pessoais",
        faz: "Reto é sujeito. “O” e “a” são objeto direto; “lhe” é objeto indireto. Depois de “entre”, em reciprocidade, vêm “mim” e “ti”.",
        pista: "Verbo em r, s ou z pede lo e la. Verbo em som nasal pede no e na.",
      },
      {
        termo: "Colocação",
        faz: "Palavra negativa, advérbio, pronome relativo e conjunção subordinativa atraem o pronome para antes do verbo.",
        pista: "Proibido: começar período com pronome átono e pôr pronome depois de futuro ou particípio.",
      },
      {
        termo: "Locução verbal",
        faz: "O pronome aceita três posições (antes, no meio ou depois), se nenhuma regra for violada. No meio, sem hífen, ele se liga ao verbo principal.",
      },
    ],
    cuidado:
      "Para trocar complemento por pronome, ache antes o objeto. “Encontramos os agentes” vira “Encontramo-los”. “Encontramo-nos” quer dizer outra coisa.",
  },
  questoes: [
    {
      topico: "Pronomes relativos",
      subassunto: "Preposição antes de “cujo”",
      dificuldade: 5,
      raciocinio: "Montar a oração com o substantivo no lugar do pronome para achar a preposição: confiou na versão.",
      enunciado: "Assinale a frase em que o pronome “cujo” está empregado de acordo com a norma-padrão.",
      alternativas: [
        "O motorista em cuja versão a perícia confiou foi liberado após a oitiva.",
        "O motorista cuja a versão foi aceita pela perícia foi liberado após a oitiva.",
        "O motorista cuja versão a perícia confiou foi liberado logo após a oitiva.",
        "O motorista cujo a perícia ouviu a versão foi liberado após a oitiva.",
        "O motorista de cuja versão a perícia aceitou foi liberado após a oitiva.",
      ],
      correta: 0,
      explicacao:
        "Quem confia confia em algo: a preposição “em” vem antes de “cuja”. O pronome fica entre o possuidor (motorista) e o possuído (versão), sem artigo.",
      explicacaoErradas:
        "“cuja a versão” traz artigo depois do pronome. “cuja versão a perícia confiou” perdeu a preposição pedida por “confiar”. “cujo a perícia” não tem o substantivo possuído logo depois do pronome. “de cuja versão” usa preposição que “aceitar” não pede.",
      pegadinha:
        "Olhar só para o “cujo” e esquecer o verbo da oração: é ele que decide se entra preposição antes do pronome.",
      conhecimento:
        "“Cujo” indica posse, concorda com o possuído, vem entre dois substantivos e não aceita artigo depois.",
    },
    {
      topico: "Pronomes relativos",
      subassunto: "“Onde” e “aonde”",
      dificuldade: 4,
      raciocinio: "Perguntar se o antecedente é lugar e se o verbo pede “em” ou “a”.",
      enunciado: "Assinale a frase em que o emprego de “onde” ou “aonde” obedece à norma-padrão.",
      alternativas: [
        "A norma onde o agente se baseou foi revogada logo no início deste ano.",
        "O posto aonde a equipe trabalha fica perto do km 40 da rodovia.",
        "O período onde o trecho ficou fechado durou quase duas semanas.",
        "O posto aonde a equipe foi enviada fica perto do km 40 da rodovia.",
        "A situação onde o condutor recusa o teste gera autuação na hora.",
      ],
      correta: 3,
      explicacao:
        "Quem é enviado é enviado a um lugar. Com verbo que pede a preposição “a”, usa-se “aonde”.",
      explicacaoErradas:
        "“A norma onde” e “A situação onde” não indicam lugar físico: o certo é “em que” ou “na qual”. “O período onde” indica tempo e também pede “em que”. “aonde a equipe trabalha” erra porque quem trabalha trabalha em algum lugar: o certo é “onde”.",
      pegadinha:
        "Trocar “onde” por “aonde” só para soar mais formal. “Aonde” depende de um verbo que peça a preposição “a”.",
      conhecimento:
        "“Onde” equivale a “em que” e indica lugar. “Aonde” indica destino, e “donde” indica procedência.",
    },
    {
      topico: "Pronomes demonstrativos",
      subassunto: "Anáfora, catáfora e pares de termos",
      dificuldade: 4,
      raciocinio: "Ver se a informação referida já apareceu ou ainda vai aparecer.",
      enunciado:
        "Assinale a frase em que o demonstrativo contraria a regra tradicional de referência dentro do texto.",
      alternativas: [
        "A frenagem foi tardia: essa foi a conclusão apresentada no laudo.",
        "Essa foi a conclusão apresentada no laudo: a frenagem foi tardia.",
        "Esta foi a conclusão apresentada no laudo: a frenagem foi tardia.",
        "O laudo citou pista e pneu; este estava gasto, e aquela, molhada.",
        "Neste mês, o laudo apresentou a conclusão sobre a frenagem tardia.",
      ],
      correta: 1,
      explicacao:
        "A conclusão ainda vai ser dita, então o pronome anuncia o que vem depois. Para isso, a regra tradicional pede “esta”.",
      explicacaoErradas:
        "“essa foi a conclusão”, depois dos dois-pontos, retoma o que já foi dito. “Esta foi a conclusão” anuncia o que vem a seguir. “este” retoma o termo mais próximo (pneu), e “aquela”, o mais distante (pista). “Neste mês” indica o tempo em curso.",
      pegadinha:
        "Comparar as frases só pela forma. As palavras são quase iguais: muda a posição do pronome em relação à informação.",
      conhecimento:
        "Regra tradicional: “este” anuncia e “esse” retoma. Em pares, “este” aponta o mais próximo, e “aquele”, o mais distante.",
    },
    {
      topico: "Colocação pronominal",
      subassunto: "Pronome na locução verbal",
      dificuldade: 5,
      raciocinio: "Procurar a palavra atrativa e ver se o hífen põe o pronome depois do auxiliar.",
      enunciado: "Assinale a frase em que a colocação do pronome na locução verbal viola a norma-padrão.",
      alternativas: [
        "O agente estava-lhe explicando os motivos da autuação.",
        "O agente não lhe estava explicando os motivos da autuação.",
        "O agente não estava-lhe explicando os motivos da autuação.",
        "O agente não estava lhe explicando os motivos da autuação.",
        "O agente estava explicando-lhe os motivos da autuação.",
      ],
      correta: 2,
      explicacao:
        "O “não” atrai o pronome. Com hífen depois do auxiliar, o pronome fica em ênclise diante de palavra atrativa, e isso a norma-padrão não aceita.",
      explicacaoErradas:
        "“não lhe estava” põe o pronome antes do auxiliar, como a palavra negativa pede. “não estava lhe explicando” deixa o pronome sem hífen, antes do verbo principal. “estava-lhe explicando” e “estava explicando-lhe” não têm palavra atrativa, e por isso a ênclise é livre.",
      pegadinha:
        "Achar que o pronome no meio da locução é sempre erro. O que decide é o hífen: com palavra atrativa, ele prende o pronome ao auxiliar.",
      conhecimento:
        "Em locução verbal, as regras de atração continuam valendo. Sem hífen, o pronome no meio fica antes do verbo principal, uso aceito nas gramáticas brasileiras mais recentes.",
    },
    {
      topico: "Pronomes pessoais",
      subassunto: "Troca do objeto por pronome oblíquo",
      dificuldade: 4,
      raciocinio: "Ver como o verbo termina e se o complemento tem preposição.",
      enunciado:
        "Assinale a opção em que a troca do complemento pelo pronome oblíquo respeita a norma-padrão e mantém o sentido da frase.",
      alternativas: [
        "“Encontramos os agentes na barreira” virou “Encontramo-nos na barreira”.",
        "“O perito refez o cálculo da frenagem” virou “O perito refê-lo”.",
        "“Os fiscais viram a placa da carreta” virou “Os fiscais viram-a”.",
        "“A equipe repõe os cones da pista” virou “A equipe repõe-os”.",
        "“Vão ouvir as testemunhas do fato” virou “Vão ouvir-lhes”.",
      ],
      correta: 1,
      explicacao:
        "“Refez” termina em “z”: a letra cai, e o pronome vira “lo”. A forma fica oxítona terminada em “e” e recebe acento: “refê-lo”.",
      explicacaoErradas:
        "“Encontramo-nos” muda o sentido, porque indica que o próprio grupo se encontrou; o certo é “Encontramo-los”. “viram-a” e “repõe-os” terminam em som nasal e pedem “viram-na” e “repõe-nos”. “ouvir-lhes” usa pronome de objeto indireto; o certo é “ouvi-las”.",
      pegadinha:
        "Cortar o “s” de “Encontramos” e usar “nos”. Esse corte serve ao pronome “nos”; para retomar “os agentes”, o pronome é “os”, que vira “los”.",
      conhecimento:
        "Verbo terminado em r, s ou z: o pronome vira lo, la, los, las. Verbo terminado em som nasal: vira no, na, nos, nas.",
    },
    {
      topico: "Pronomes pessoais",
      subassunto: "Reto, oblíquo tônico e “com nós”",
      dificuldade: 4,
      raciocinio: "Ver se o pronome é sujeito de um verbo ou se vem regido de preposição.",
      enunciado: "Assinale a frase em que o pronome pessoal está empregado de acordo com a norma-padrão.",
      alternativas: [
        "Não pairam dúvidas entre mim e ti sobre a escala do fim de semana.",
        "Entre eu e o chefe do posto nunca houve dúvida alguma sobre a escala.",
        "O chefe deixou o laudo para mim revisar antes da audiência.",
        "A escala do feriado foi definida conosco dois na sexta-feira.",
        "Encontrei ele perto do km 30 depois de duas horas de busca.",
      ],
      correta: 0,
      explicacao:
        "Depois de “entre”, em relação de reciprocidade, usam-se os oblíquos tônicos: entre mim e ti.",
      explicacaoErradas:
        "“Entre eu e o chefe” deveria ser “Entre mim e o chefe”. “para mim revisar” pede “para eu revisar”, porque o pronome é sujeito do infinitivo. “conosco dois” deve ser “com nós dois”. “Encontrei ele” usa pronome reto como objeto direto: “Encontrei-o”.",
      pegadinha:
        "Fugir de “mim” em toda frase. Em “entre mim e ti”, o pronome não é sujeito. Já em “entre eu sair e você ficar”, o “eu” é sujeito de “sair” e fica certo.",
      conhecimento:
        "Pronome reto funciona como sujeito, e oblíquo tônico vem depois de preposição. Diante de numeral, usa-se “com nós”, e não “conosco”.",
    },
    {
      topico: "Pronomes de tratamento",
      subassunto: "“Vossa” e “Sua”, concordância",
      dificuldade: 4,
      raciocinio: "Ver se o texto fala com a autoridade ou dela, e conferir verbo, possessivo e adjetivo.",
      enunciado:
        "Em ofício dirigido diretamente a um ministro de Estado, assinale o trecho correto quanto ao pronome de tratamento.",
      alternativas: [
        "Sua Excelência deve indicar seu representante até sexta-feira.",
        "Vossa Excelência deve indicar vosso representante até sexta-feira.",
        "Vossa Excelência deveis indicar seu representante até sexta-feira.",
        "Vossa Excelência deve indicar seu representante até sexta-feira.",
        "Vossa Excelência está convidada a indicar seu representante até sexta.",
      ],
      correta: 3,
      explicacao:
        "Quem fala diretamente com a autoridade usa “Vossa Excelência”. O verbo e o possessivo ficam na 3ª pessoa.",
      explicacaoErradas:
        "“Sua Excelência” serve para falar da autoridade, e não com ela. “vosso” e “deveis” estão na 2ª pessoa do plural. “convidada” concordou com a palavra “Excelência”, mas o adjetivo concorda com o sexo da pessoa.",
      pegadinha:
        "“Vossa” parece pedir “vosso”. A forma de tratamento se dirige à pessoa com quem se fala, mas verbo e pronomes ficam na 3ª pessoa.",
      conhecimento:
        "Vossa: falando com a autoridade. Sua: falando sobre ela. Adjetivos e particípios concordam com a pessoa, e não com a palavra “Excelência”.",
    },
  ],
};
