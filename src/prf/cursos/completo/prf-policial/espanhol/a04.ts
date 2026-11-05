import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-04",
  resumo: {
    ideia:
      "O espanhol só tem duas contrações, al e del. O resto fica separado, e isso muda a leitura de quem está acostumado com no, pela e dele.",
    itens: [
      {
        termo: "Al",
        faz: "A + el: voy al puesto.",
      },
      {
        termo: "Del",
        faz: "De + el: la placa del camión.",
      },
      {
        termo: "Sem junção",
        faz: "En el, en la, por el, con el. O português junta, e o espanhol, não.",
      },
      {
        termo: "Com pronome",
        faz: "De él e a él ficam separados, porque él não é artigo.",
      },
      {
        termo: "Nome próprio",
        faz: "Se o el faz parte do nome, não há contração: a El Salvador.",
      },
      {
        termo: "Al + infinitivo",
        faz: "Tem valor de tempo: al llegar é “quando chegou” ou “ao chegar”.",
      },
      {
        termo: "Vocabulário de economia",
        faz: "Impuesto é imposto, presupuesto é orçamento, recaudación é arrecadação, sueldo é salário.",
      },
    ],
    cuidado: "Presupuesto não é pressuposto. Em textos de economia, é orçamento.",
  },
  questoes: [
    {
      topico: "Contrações",
      subassunto: "Al e del",
      dificuldade: 4,
      raciocinio: "A contração é obrigatória com o artigo el.",
      enunciado: "Quanto às contrações, está correta a frase",
      alternativas: [
        "El conductor de el camión volvió a el puesto.",
        "El conductor del camión volvió ao puesto.",
        "El conductor del camión volvió al puesto.",
        "El conductor do camión volvió al puesto.",
        "El conductor de lo camión volvió a lo puesto.",
      ],
      correta: 2,
      explicacao: "De + el vira del, e a + el vira al. As duas contrações são obrigatórias.",
      explicacaoErradas:
        "“de el” e “a el” deixam de contrair. “ao” e “do” são formas do português. “de lo” e “a lo” usam o neutro antes de substantivo.",
      pegadinha: "Copiar ao e do do português.",
      conhecimento: "Puesto, aqui, é o posto.",
    },
    {
      topico: "Contrações",
      subassunto: "Nome próprio",
      dificuldade: 5,
      raciocinio: "O artigo é parte do nome?",
      enunciado: "Com nome próprio que traz o artigo, está correta a frase",
      alternativas: [
        "El agente viajó al Salvador y leyó el artículo del País.",
        "El agente viajó al Salvador y leyó el artículo de El País.",
        "El agente viajó a lo Salvador y leyó el artículo de lo País ayer.",
        "El agente viajó a El Salvador y leyó el artículo del País.",
        "El agente viajó a El Salvador y leyó el artículo de El País.",
      ],
      correta: 4,
      explicacao: "Quando o El faz parte do nome, ele fica com maiúscula e não se une à preposição.",
      explicacaoErradas:
        "“al Salvador” e “del País” contraem um artigo que é parte do nome. “a lo” e “de lo” usam o neutro antes de nome.",
      pegadinha: "Contrair por hábito.",
      conhecimento: "O mesmo ocorre com nomes de jornais, de obras e de lugares.",
    },
    {
      topico: "Contrações",
      subassunto: "Pronome él",
      dificuldade: 5,
      raciocinio: "O acento mostra o pronome.",
      enunciado: "Complete, usando “de + él” (pronome) e “de + el” (artigo): “El coche es ___, no ___ jefe.”",
      alternativas: ["de él, del", "del, de él", "del, del", "de él, de él", "de el, del"],
      correta: 0,
      explicacao: "Com o pronome él, não há contração: de él. Com o artigo el, a contração é obrigatória: del jefe.",
      explicacaoErradas:
        "“del, de él” inverte as formas. “del, del” contrai o pronome. “de él, de él” deixa o artigo com acento. “de el” tira o acento do pronome.",
      pegadinha: "Levar para o espanhol o “dele” do português.",
      conhecimento: "Él com acento é pronome, e el sem acento é artigo.",
    },
    {
      topico: "Contrações",
      subassunto: "Tradução",
      dificuldade: 4,
      raciocinio: "Só al e del se juntam.",
      enunciado: "A tradução correta de “O agente passou pela ponte e parou na cabine.” é",
      alternativas: [
        "El agente pasó pelo puente y paró na cabina.",
        "El agente pasó pela puente y paró en la cabina.",
        "El agente pasó por la puente y paró en el cabina.",
        "El agente pasó por el puente y paró en la cabina.",
        "El agente pasó por el puente y paró en lo cabina del peaje.",
      ],
      correta: 3,
      explicacao: "Pela vira por + artigo, e na vira en + artigo. Puente é masculino, então fica por el puente.",
      explicacaoErradas:
        "“pelo” e “pela” não existem nessa função, e “na” é forma do português. “por la puente” erra o gênero. “en lo cabina” usa o neutro antes de substantivo.",
      pegadinha: "Manter o gênero do português em ponte.",
      conhecimento: "Peaje é pedágio.",
    },
    {
      topico: "Leitura",
      subassunto: "Texto de economia",
      dificuldade: 5,
      raciocinio: "Siga o caminho do custo no texto.",
      enunciado:
        "Texto: “El gobierno subió el impuesto sobre los combustibles para cubrir el déficit del presupuesto. La recaudación creció, pero las empresas de transporte trasladaron el costo al precio de los fletes.” Segundo o texto,",
      alternativas: [
        "o imposto caiu, e as empresas baixaram o preço dos fretes",
        "a arrecadação subiu, e o custo chegou ao preço dos fretes",
        "as empresas pagaram o imposto sem repassar nada a ninguém",
        "o déficit do orçamento acabou logo depois do novo imposto",
        "o governo cortou gastos e manteve o imposto dos combustíveis",
      ],
      correta: 1,
      explicacao: "A arrecadação cresceu, e as empresas repassaram o custo para o frete. Trasladar é transferir.",
      explicacaoErradas:
        "“o imposto caiu” contraria subió. “sem repassar” contraria trasladaron. “acabou” vai além do texto. “cortou gastos” não aparece.",
      pegadinha: "Concluir que o déficit acabou porque a arrecadação cresceu.",
      conhecimento: "Flete é frete, e subir, com objeto, é aumentar.",
    },
    {
      topico: "Vocabulário",
      subassunto: "Termos de economia",
      dificuldade: 4,
      raciocinio: "As duas palavras enganam pela aparência.",
      enunciado: "Na frase “El déficit del presupuesto obligó a recortar los sueldos.”, “presupuesto” e “sueldos” significam, nessa ordem,",
      alternativas: [
        "pressuposto e soldas",
        "imposto e dívidas",
        "pressuposto e salários",
        "orçamento e soldas de metal",
        "orçamento e salários",
      ],
      correta: 4,
      explicacao: "Presupuesto é orçamento, e sueldo é salário. Recortar é cortar ou reduzir.",
      explicacaoErradas:
        "“pressuposto” traduz pela aparência. “soldas” lê sueldo como solda. “imposto” seria impuesto, e “dívidas” seria deudas.",
      pegadinha: "Traduzir presupuesto por pressuposto.",
      conhecimento: "Deuda é dívida.",
    },
    {
      topico: "Contrações",
      subassunto: "Al + infinitivo",
      dificuldade: 5,
      raciocinio: "Troque por “quando” e teste.",
      enunciado: "Em “Al llegar a la aduana, el dueño del camión pagó la tasa.”, “al llegar” tem valor de",
      alternativas: [
        "lugar: no ponto de chegada",
        "condição: se chegar à alfândega",
        "tempo: quando chegou à alfândega",
        "causa: porque chegou atrasado à alfândega",
        "finalidade: para chegar até a alfândega",
      ],
      correta: 2,
      explicacao: "Al + infinitivo indica o momento: ao chegar, quando chegou.",
      explicacaoErradas:
        "“lugar” lê al como artigo de um substantivo. “condição” pediria si. “causa” pediria porque. “finalidade” pediria para.",
      pegadinha: "Achar que al só aparece antes de substantivo.",
      conhecimento: "Tasa, aqui, é a taxa cobrada.",
    },
  ],
};
