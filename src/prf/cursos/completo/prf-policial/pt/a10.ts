import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-10",
  resumo: {
    ideia:
      "Concordar é fazer o verbo seguir o sujeito e fazer as palavras seguirem o substantivo. Primeiro ache o núcleo. Depois veja se a frase cai em um caso especial.",
    itens: [
      {
        termo: "Regra geral",
        faz: "O verbo concorda com o núcleo do sujeito, mesmo longe dele: o ruído dos caminhões perturba.",
        pista: "Ignore o que vem depois do “de”: o núcleo é “ruído”.",
      },
      {
        termo: "Parte de um todo",
        faz: "“A metade dos condutores” aceita singular ou plural. “20% da frota” segue o número ou o termo. “Os 20%” pede plural.",
        pista: "Artigo antes do número: o verbo segue o número.",
      },
      {
        termo: "Mais de um, menos de dois",
        faz: "O verbo segue o numeral: mais de um fiscal assinou; menos de dois fiscais assinaram.",
      },
      {
        termo: "Haver e fazer sem sujeito",
        faz: "“Haver” no sentido de existir e “fazer” de tempo ficam no singular, e passam isso ao auxiliar: deve haver, deve fazer.",
        pista: "“Existir” tem sujeito: devem existir barreiras.",
      },
      {
        termo: "“Que” e “quem”",
        faz: "Depois de “que”, o verbo segue o termo anterior: fui eu que assinei. Depois de “quem”: fui eu quem assinou, ou quem assinei.",
      },
      {
        termo: "Sujeito composto",
        faz: "Antes do verbo, plural. Depois do verbo, plural ou o núcleo mais próximo. Com “eu”, primeira pessoa do plural.",
      },
      {
        termo: "Núcleos com “ou”",
        faz: "Se os dois podem praticar a ação, ou se são opostos, plural. Se um exclui o outro, corrige o outro ou é sinônimo dele, singular.",
        pista: "O “nem” antes do verbo segue a mesma lógica.",
      },
      {
        termo: "Verbo “ser”",
        faz: "Hora e distância: segue o número. Quantidade com “pouco”, “muito” ou “suficiente”: singular. “Tudo”, “isso”: de preferência o predicativo.",
        pista: "Em data, os dois: hoje é 10, hoje são 10.",
      },
      {
        termo: "Adjetivo com dois substantivos",
        faz: "Depois deles: concorda com o mais próximo ou com todos. Antes deles: com o mais próximo.",
        pista: "Só com o mais distante, nunca.",
      },
      {
        termo: "Adjetivo composto",
        faz: "Só o último elemento varia: técnico-administrativas. Se houver substantivo na composição, não varia: coletes amarelo-limão.",
        pista: "Sempre fixos: azul-marinho, azul-celeste, zero-quilômetro.",
      },
      {
        termo: "Palavras que variam ou não",
        faz: "Anexo, incluso, quite, obrigado, mesmo e próprio variam. “Em anexo” e “menos” não. “Meio” e “bastante” variam só antes de substantivo.",
      },
      {
        termo: "É proibido, é necessário",
        faz: "Sem artigo, ficam fixos: é proibido entrada. Com artigo, concordam: é proibida a entrada.",
      },
    ],
    cuidado:
      "“Haviam sido instaladas” está certo: “haver” só fica fixo no sentido de existir ou de tempo passado. Como auxiliar, ele concorda com o sujeito.",
  },
  questoes: [
    {
      topico: "Concordância verbal",
      subassunto: "“Haver” impessoal e “haver” auxiliar",
      dificuldade: 5,
      raciocinio:
        "Descobrir o papel do “haver” e do “fazer” em cada frase: se o verbo não tem sujeito, ele e o auxiliar ficam no singular.",
      enunciado: "Assinale a frase correta quanto à concordância verbal.",
      alternativas: [
        "Devem haver novas barreiras na rodovia durante o feriado prolongado.",
        "Deve existir novas barreiras na rodovia durante o feriado prolongado.",
        "Faziam três anos que não havia barreiras na rodovia durante o feriado.",
        "Haviam sido instaladas novas barreiras na rodovia durante o feriado.",
        "Houveram muitas barreiras novas na rodovia durante o feriado prolongado.",
      ],
      correta: 3,
      explicacao:
        "Nessa frase, “haver” é apenas auxiliar de “instalar”. Ele concorda com o sujeito “novas barreiras”, que vem depois do verbo.",
      explicacaoErradas:
        "“Devem haver” e “Houveram” usam “haver” no sentido de existir, que não tem sujeito: o certo é “Deve haver” e “Houve”. “Deve existir” tem sujeito no plural: “Devem existir”. “Faziam” indica tempo passado e fica no singular: “Fazia três anos”.",
      pegadinha:
        "Decorar que “haver” nunca vai ao plural. A regra vale para o sentido de existir, não para o auxiliar de tempo composto.",
      conhecimento:
        "“Haver” de existir e “fazer” de tempo não têm sujeito, e esse singular passa para o auxiliar da locução: deve haver, vai fazer.",
    },
    {
      topico: "Concordância verbal",
      subassunto: "“Mais de um”, partitivos e porcentagem",
      dificuldade: 4,
      raciocinio: "Separar os casos em que há duas formas possíveis do caso em que só existe uma.",
      enunciado: "Assinale a frase com desvio de concordância verbal.",
      alternativas: [
        "Mais de um fiscal assinaram o auto de infração naquela tarde.",
        "Menos de dois fiscais assinaram o auto de infração naquela tarde.",
        "A metade dos condutores autuados recorreram da multa aplicada.",
        "Os 20% da frota apreendida voltaram às ruas depois da vistoria.",
        "Dois terços da carga ficaram retidos no pátio da fiscalização.",
      ],
      correta: 0,
      explicacao:
        "Com “mais de um”, o verbo segue o numeral e fica no singular: “Mais de um fiscal assinou”.",
      explicacaoErradas:
        "“Menos de dois” leva o verbo ao plural. “A metade dos condutores” aceita singular ou plural. “Os 20%” tem artigo antes do número, e o verbo segue o número. “Dois terços” segue o numerador da fração.",
      pegadinha:
        "Achar que “mais de um” indica pluralidade e pede plural. A ideia é de mais de uma pessoa, mas a forma segue o numeral.",
      conhecimento:
        "Verbo com expressão de quantidade: olhe o numeral. Se o numeral é “um”, singular; se é “dois” ou mais, plural.",
    },
    {
      topico: "Concordância verbal",
      subassunto: "Concordância com “que” e com “quem”",
      dificuldade: 4,
      raciocinio: "Identificar o antecedente do “que” e lembrar a regra própria do “quem”.",
      enunciado: "Assinale a frase em que a concordância do verbo está de acordo com a norma-padrão.",
      alternativas: [
        "Foram os agentes da equipe noturna que liberou o trecho da serra.",
        "Fui eu que assinou o termo de apreensão na saída do posto.",
        "Fomos nós que conferiu a carga antes da chegada do fiscal.",
        "És tu que fiscalizou toda a carga do comboio durante a madrugada.",
        "Fui eu quem assinou o termo de apreensão na saída do posto.",
      ],
      correta: 4,
      explicacao:
        "Depois de “quem”, o verbo pode ficar na terceira pessoa do singular: “Fui eu quem assinou”. Também é aceita a forma “quem assinei”.",
      explicacaoErradas:
        "Depois de “que”, o verbo segue o termo anterior: “agentes que liberaram”, “eu que assinei”, “nós que conferimos” e “tu que fiscalizaste”.",
      pegadinha:
        "Tratar “que” e “quem” como iguais. A troca de uma letra muda a regra: “eu que assinou” erra, “eu quem assinou” acerta.",
      conhecimento:
        "O “que” relativo assume a pessoa do antecedente. O “quem” aceita a terceira pessoa do singular, a forma preferida, ou o antecedente.",
    },
    {
      topico: "Concordância verbal",
      subassunto: "Sujeito composto ligado por “ou”",
      dificuldade: 5,
      raciocinio: "Em cada frase, perguntar se os dois núcleos podem praticar a ação ao mesmo tempo.",
      enunciado: "Assinale a frase com desvio de concordância, considerando o sentido do “ou”.",
      alternativas: [
        "A chuva ou a neblina reduzem a visibilidade da pista na serra.",
        "Rogério ou Marcos serão o novo chefe do posto da fronteira.",
        "O chefe, ou melhor, o supervisor assinou a escala da operação.",
        "O calor ou o frio castigam os agentes em qualquer barreira do país.",
        "Nem a chuva nem a neblina impediram a abertura da operação.",
      ],
      correta: 1,
      explicacao:
        "Só um dos dois será o novo chefe: o “ou” exclui, e o verbo fica no singular: “Rogério ou Marcos será”.",
      explicacaoErradas:
        "“A chuva ou a neblina” podem agir juntas, e por isso o plural serve. “ou melhor” corrige o termo anterior e deixa o verbo no singular. “O calor ou o frio” são opostos e pedem plural. “Nem” antes do verbo admite o plural.",
      pegadinha:
        "Olhar só para os dois núcleos e aceitar o plural. O que decide é o sentido: o cargo só tem um ocupante.",
      conhecimento:
        "“Ou” que soma ou une opostos: plural. “Ou” que exclui, corrige ou liga sinônimos: singular.",
    },
    {
      topico: "Concordância verbal",
      subassunto: "Verbo “ser”",
      dificuldade: 4,
      raciocinio: "Classificar cada frase: hora, distância, quantidade, pronome “tudo” ou pergunta.",
      enunciado:
        "Assinale a frase em desacordo com a norma-padrão quanto à concordância do verbo “ser”.",
      alternativas: [
        "Da barreira até o posto são quinze quilômetros de pista simples.",
        "Cem litros de combustível é pouco para concluir a viagem da equipe.",
        "Já é duas horas, e a equipe do plantão ainda não deixou o posto.",
        "Nem tudo são falhas no relatório que a equipe entregou ontem.",
        "Quem foram os agentes escalados para o posto nesta semana?",
      ],
      correta: 2,
      explicacao: "Na indicação de horas, o verbo “ser” segue o número: “Já são duas horas”.",
      explicacaoErradas:
        "Distância também segue o número: “são quinze quilômetros”. Quantidade com “pouco” fica no singular: “é pouco”. Com “tudo”, o verbo prefere o predicativo: “são falhas”. Com “quem” interrogativo, segue o predicativo: “foram os agentes”.",
      pegadinha:
        "Estranhar “Cem litros é pouco” e marcar essa frase. Aqui o número é visto como um total, e “pouco” leva o verbo ao singular.",
      conhecimento:
        "O verbo “ser” é a exceção da regra geral: em vários casos, concorda com o predicativo, e não com o sujeito.",
    },
    {
      topico: "Concordância nominal",
      subassunto: "Palavras que variam e palavras fixas",
      dificuldade: 4,
      raciocinio: "Decidir em cada frase se a palavra acompanha um substantivo ou se modifica adjetivo ou verbo.",
      enunciado: "Assinale a frase correta quanto à concordância nominal.",
      alternativas: [
        "Seguem anexo as cópias dos laudos da perícia feita no local do acidente.",
        "É proibido a entrada de pessoas estranhas no pátio do posto.",
        "A motorista ficou meia preocupada com a fiscalização da carga.",
        "Havia bastante viaturas no pátio quando a operação terminou.",
        "Os condutores estão quites com as multas, e as agentes ficaram sós.",
      ],
      correta: 4,
      explicacao:
        "“Quites” concorda com “condutores”, e “sós”, no sentido de sozinhas, concorda com “agentes”.",
      explicacaoErradas:
        "“anexo” concorda com “cópias”: “anexas”. Com artigo, a forma é “É proibida a entrada”. “meia” modifica um adjetivo e fica fixa: “meio preocupada”. “bastante” acompanha substantivo e varia: “bastantes viaturas”.",
      pegadinha:
        "Achar que “sós” e “quites” são exageros. As duas palavras variam, enquanto “só” no sentido de apenas fica fixo.",
      conhecimento:
        "Uma mesma palavra pode ser advérbio, que não varia, ou adjetivo e pronome, que variam. A classe decide.",
    },
    {
      topico: "Concordância nominal",
      subassunto: "Flexão do adjetivo composto",
      dificuldade: 5,
      raciocinio: "Ver se há substantivo na composição e, se não houver, flexionar só o último elemento.",
      enunciado: "Assinale a frase correta quanto à flexão do adjetivo composto.",
      alternativas: [
        "As viaturas azul-marinho cruzaram as pistas da serra pela manhã.",
        "As equipes técnicas-administrativas reuniram-se no posto pela manhã.",
        "Os uniformes verdes-escuros chegaram à sede do posto pela manhã.",
        "Os coletes amarelos-limão foram entregues à equipe logo pela manhã.",
        "Os veículos zero-quilômetros foram vistoriados no posto pela manhã.",
      ],
      correta: 0,
      explicacao: "“Azul-marinho” é invariável: não muda em gênero nem em número.",
      explicacaoErradas:
        "Em adjetivo composto, só o último elemento varia: “técnico-administrativas” e “verde-escuros”. Com substantivo na composição, nada varia: “amarelo-limão”. “Zero-quilômetro” também é invariável.",
      pegadinha:
        "Estranhar “viaturas azul-marinho” e procurar uma forma no plural. Nesse caso, a forma sem flexão é a correta.",
      conhecimento:
        "Adjetivo + adjetivo: varia só o último. Adjetivo + substantivo: nada varia.",
    },
    {
      topico: "Concordância nominal",
      subassunto: "Adjetivo ligado a dois ou mais substantivos",
      dificuldade: 4,
      raciocinio: "Localizar o adjetivo e conferir se ele concorda com o substantivo mais próximo ou com todos.",
      enunciado: "Assinale a frase com desvio de concordância nominal.",
      alternativas: [
        "A equipe vistoriou o reboque e a carga danificados na colisão.",
        "A equipe vistoriou a carga e o reboque danificada na colisão.",
        "A equipe recebeu novo manual e normas de segurança do órgão.",
        "Estavam apreendidos a carga e o reboque no pátio do posto.",
        "A equipe apreendeu documentos e placas falsas durante a operação.",
      ],
      correta: 1,
      explicacao:
        "O adjetivo depois dos substantivos concorda com o mais próximo ou com todos. Aqui ele concorda só com o mais distante, “carga”: o certo é “danificado” ou “danificados”.",
      explicacaoErradas:
        "“danificados” concorda com os dois substantivos. “novo” vem antes e concorda com o mais próximo. “apreendidos” é predicativo no plural, ligado aos dois. “falsas” concorda com o mais próximo.",
      pegadinha:
        "Marcar “placas falsas” achando que os documentos ficaram de fora. A concordância com o mais próximo é aceita.",
      conhecimento:
        "Adjetivo depois: mais próximo ou todos. Adjetivo antes: mais próximo. Concordar só com o mais distante é erro.",
    },
  ],
};
