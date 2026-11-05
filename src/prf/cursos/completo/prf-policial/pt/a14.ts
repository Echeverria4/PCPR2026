import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-14",
  resumo: {
    ideia:
      "Tipo é o modo de organizar o texto, conforme a finalidade dele. Gênero é a forma que o texto assume no dia a dia. Quase nenhum texto é puro: a pergunta certa é qual tipo predomina.",
    itens: [
      {
        termo: "Narrativo",
        faz: "Conta fatos em sequência, com antes e depois. Verbos no pretérito perfeito.",
        pista: "É como um filme.",
      },
      {
        termo: "Descritivo",
        faz: "Retrata como algo é, sem passagem de tempo. Muitos adjetivos, verbos de ligação e pretérito imperfeito.",
        pista: "É como uma foto.",
      },
      {
        termo: "Injuntivo",
        faz: "Instrui ou ordena o leitor, no imperativo ou no infinitivo. Aparece em leis, contratos, manuais e receitas.",
      },
      {
        termo: "Dissertativo expositivo",
        faz: "Explica um assunto, sem defender uma posição. Verbos no presente e linguagem neutra.",
      },
      {
        termo: "Dissertativo argumentativo",
        faz: "Defende uma tese para convencer o leitor, com operadores argumentativos e modalizadores.",
      },
      {
        termo: "Gênero",
        faz: "Forma concreta do texto: notícia, crônica, receita, relatório. Os tipos são poucos; os gêneros são muitos e surgem com novas situações.",
      },
      {
        termo: "Elementos da narração",
        faz: "Narrador, tempo, lugar, enredo e personagens. O protagonista conduz a ação, e o antagonista se opõe a ele.",
      },
      {
        termo: "Narrador",
        faz: "Em primeira pessoa, participa da história. Em terceira, observa de fora. O onisciente conhece até os pensamentos dos personagens.",
      },
      {
        termo: "Discurso direto",
        faz: "Reproduz as palavras exatas, com verbo de dizer e sinais como travessão, dois-pontos ou aspas.",
      },
      {
        termo: "Discurso indireto",
        faz: "O narrador conta com as palavras dele o que foi dito, em geral com a conjunção “que”.",
      },
      {
        termo: "Indireto livre",
        faz: "A voz do personagem se mistura à do narrador, sem marca que separe uma da outra.",
      },
      {
        termo: "Do direto ao indireto",
        faz: "Eu vira ele; aqui vira ali; hoje vira naquele dia; amanhã vira no dia seguinte. O futuro do presente vira futuro do pretérito.",
      },
      {
        termo: "Modalizador",
        faz: "Palavra que mostra a avaliação de quem escreve: infelizmente, talvez, certamente.",
      },
      {
        termo: "Estrutura da argumentação",
        faz: "Introdução com a tese, desenvolvimento com os argumentos e conclusão. Tópico frasal é o período que resume a ideia do parágrafo.",
      },
      {
        termo: "Como sustentar a tese",
        faz: "Exemplos, dados estatísticos, testemunho de autoridade, contraste, causa e efeito, fato histórico.",
      },
    ],
    cuidado:
      "Um modalizador não transforma exposição em argumentação. O que define o tipo é a finalidade do texto, e não uma palavra isolada.",
  },
  questoes: [
    {
      topico: "Tipos textuais",
      subassunto: "Tipo predominante em trecho misto",
      dificuldade: 4,
      raciocinio: "Perguntar o que move o trecho: a cena parada ou as ações em sequência.",
      enunciado:
        "“Naquela madrugada, a equipe saiu do posto às quatro horas. A neblina cobria a serra, e a pista estava escorregadia. Perto do quilômetro 80, os agentes avistaram a carreta tombada, desviaram o tráfego e chamaram o socorro.” Assinale a análise correta do trecho.",
      alternativas: [
        "Predomina a descrição, pois o trecho retrata a serra sem nenhuma passagem de tempo.",
        "Predomina a exposição, pois os fatos servem apenas para informar dados da rodovia.",
        "Predomina a injunção, pois a equipe segue as ordens do posto em cada etapa do plantão.",
        "Predomina a narração, pois há ações em sequência, com um trecho descritivo inserido.",
        "Predomina a argumentação, pois o relato defende a conduta da equipe naquela madrugada.",
      ],
      correta: 3,
      explicacao:
        "“saiu”, “avistaram”, “desviaram” e “chamaram” formam uma sequência no tempo. A frase sobre a neblina e a pista é uma descrição dentro da narração.",
      explicacaoErradas:
        "A descrição existe, mas é só uma parte, e há passagem de tempo. O trecho não informa dados, não dá ordens ao leitor e não defende nenhuma tese.",
      pegadinha:
        "Marcar descrição por causa da neblina. Um trecho descritivo dentro da história não muda o tipo que predomina.",
      conhecimento:
        "É comum a descrição aparecer dentro da narração. Vale o tipo predominante.",
    },
    {
      topico: "Tipos textuais",
      subassunto: "Injunção com verbos no infinitivo",
      dificuldade: 4,
      raciocinio: "Olhar a finalidade do texto antes da forma do verbo.",
      enunciado:
        "“Reduzir a velocidade. Acender os faróis baixos. Manter distância do veículo à frente.” Assinale a análise correta desse trecho de uma cartilha para motoristas.",
      alternativas: [
        "É injuntivo: o infinitivo impessoal também serve para dar instruções ao leitor.",
        "É narrativo: os verbos indicam ações em sequência, com um antes e um depois.",
        "É descritivo: os verbos retratam o estado do motorista em um momento do dia.",
        "É expositivo: o infinitivo impede que o texto se dirija ao próprio leitor da cartilha.",
        "É argumentativo: cada frase defende uma tese sobre a segurança nas rodovias.",
      ],
      correta: 0,
      explicacao:
        "A finalidade é orientar a conduta de quem lê. A injunção pode vir no imperativo ou no infinitivo, como nas cartilhas e nos manuais.",
      explicacaoErradas:
        "Nenhum fato é contado, e a ordem das frases não marca passagem de tempo. Nada é retratado. O infinitivo não impede a instrução, e as frases não trazem tese.",
      pegadinha:
        "Exigir o imperativo para reconhecer o texto injuntivo. O infinitivo impessoal é um recurso comum nesse tipo.",
      conhecimento:
        "Texto injuntivo ensina, orienta ou obriga o leitor a fazer algo.",
    },
    {
      topico: "Discurso direto e indireto",
      subassunto: "Discurso indireto livre",
      dificuldade: 5,
      raciocinio: "Procurar verbo de dizer, travessão ou aspas. Se não houver, ver de quem é a voz.",
      enunciado:
        "“O agente olhou o relógio e suspirou. Mais duas horas de plantão. Será que a chuva pararia antes do amanhecer? Ajeitou a capa e voltou à pista.” Assinale a análise correta do período “Será que a chuva pararia antes do amanhecer?”.",
      alternativas: [
        "É discurso direto, pois reproduz as palavras exatas do agente, sem alteração.",
        "É discurso indireto, pois a conjunção “que” introduz a fala do agente no relato.",
        "É discurso indireto livre, pois a voz do agente se funde à do narrador, sem marca.",
        "É comentário do narrador, sem nenhuma relação com o pensamento do agente ali.",
        "É citação de autoridade, pois o narrador atribui ao agente uma dúvida sobre o tempo.",
      ],
      correta: 2,
      explicacao:
        "A dúvida é do agente, mas surge no meio da narração, sem verbo de dizer, travessão ou aspas. É a marca do indireto livre.",
      explicacaoErradas:
        "No direto, haveria travessão, aspas ou verbo de dizer, e o verbo estaria em outra forma. O “que” de “Será que” não introduz relato do narrador. O pensamento é do agente, e não há especialista citado.",
      pegadinha:
        "Ver o “que” e concluir que há discurso indireto. No indireto, um verbo de dizer abre a fala, e ele não existe aqui.",
      conhecimento:
        "No indireto livre, a fala ou o pensamento do personagem aparece sem nenhuma marca de separação.",
    },
    {
      topico: "Discurso direto e indireto",
      subassunto: "Passagem do direto ao indireto",
      dificuldade: 4,
      raciocinio: "Ajustar, um por um, o tempo do verbo, o lugar e o tempo da frase.",
      enunciado:
        "“— Eu voltarei aqui amanhã — disse o motorista ao agente.” Assinale a passagem correta para o discurso indireto.",
      alternativas: [
        "O motorista disse ao agente que voltará ali no dia seguinte.",
        "O motorista disse ao agente que voltaria aqui no dia seguinte.",
        "O motorista disse ao agente que voltaria ali amanhã mesmo.",
        "O motorista disse ao agente que voltava ali naquele mesmo dia.",
        "O motorista disse ao agente que voltaria ali no dia seguinte.",
      ],
      correta: 4,
      explicacao:
        "O futuro do presente vira futuro do pretérito (“voltaria”). “Aqui” vira “ali”, e “amanhã” vira “no dia seguinte”.",
      explicacaoErradas:
        "“voltará” mantém o tempo da fala. “aqui” e “amanhã” mantêm as referências de quem falava. “voltava” e “naquele mesmo dia” mudam o tempo do fato.",
      pegadinha:
        "Mudar o verbo e esquecer as palavras de lugar e de tempo. Todas elas dependem do momento da fala.",
      conhecimento:
        "Na passagem para o indireto, mudam a pessoa, o tempo verbal e as palavras que apontam para o lugar e o tempo da fala.",
    },
    {
      topico: "Dissertação",
      subassunto: "Modalizador em texto expositivo",
      dificuldade: 5,
      raciocinio: "Separar a avaliação de uma palavra da finalidade do trecho inteiro.",
      enunciado:
        "“O número de acidentes, infelizmente, subiu 5% no último ano, segundo o boletim do órgão. Os motociclistas respondem por quase metade dos casos.” Assinale a análise correta do trecho.",
      alternativas: [
        "É argumentativo: “infelizmente” basta para transformar o relato em defesa de tese.",
        "É expositivo: “infelizmente” mostra avaliação, mas a finalidade segue sendo informar.",
        "É injuntivo: “infelizmente” pede ao leitor que mude a conduta dele na rodovia federal.",
        "É narrativo: “subiu” mostra que a sequência de fatos é o foco principal da exposição.",
        "É descritivo: “segundo o boletim” retrata a cena sem nenhuma progressão de tempo.",
      ],
      correta: 1,
      explicacao:
        "O trecho apresenta dados, sem defender uma tese. O modalizador deixa ver a avaliação de quem escreve, mas não muda a finalidade.",
      explicacaoErradas:
        "Uma palavra isolada não cria tese. Não há ordem ao leitor. Um verbo no passado não forma sequência de fatos, e a citação da fonte não é uma descrição.",
      pegadinha:
        "Achar que todo sinal de opinião torna o texto argumentativo. O que decide é o objetivo principal.",
      conhecimento:
        "Modalizadores podem aparecer em qualquer tipo. Na exposição, a opinião pode transparecer, sem virar o objetivo do texto.",
    },
    {
      topico: "Gêneros textuais",
      subassunto: "Relação entre tipo e gênero",
      dificuldade: 4,
      raciocinio: "Lembrar que os tipos formam uma lista curta e os gêneros formam uma lista aberta.",
      enunciado: "Assinale a afirmação correta sobre tipos e gêneros textuais.",
      alternativas: [
        "Os gêneros são poucos e fixos, e os tipos surgem conforme as novas situações do dia a dia.",
        "Cada gênero corresponde a um só tipo, e por isso uma crônica nunca inclui descrição.",
        "O tipo depende do suporte, e por isso todo texto publicado em jornal é narrativo.",
        "Os tipos são poucos, e os gêneros são numerosos e surgem conforme novas necessidades.",
        "O manual é gênero do tipo narrativo, porque apresenta os passos em ordem temporal.",
      ],
      correta: 3,
      explicacao:
        "Tipo é o modo de organizar o texto, e são poucos. Gênero é a forma social do texto, e novas formas surgem sempre, como as mensagens de aplicativo.",
      explicacaoErradas:
        "A primeira inverte os conceitos. Um gênero pode reunir vários tipos. O jornal publica textos de vários tipos. O manual orienta o leitor, sem contar uma história.",
      pegadinha:
        "Inverter os conceitos: o tipo é a lista fechada; o gênero é a lista aberta.",
      conhecimento:
        "Um tipo aparece em muitos gêneros, e um gênero pode combinar mais de um tipo.",
    },
    {
      topico: "Dissertação",
      subassunto: "Recursos do desenvolvimento",
      dificuldade: 4,
      raciocinio: "Ver como o segundo período sustenta a ideia do primeiro.",
      enunciado:
        "“Reduzir a velocidade salva vidas. Para a chefe da perícia, com vinte anos de estrada, quase toda colisão grave que ela atendeu teria sido evitada com um pouco mais de cautela.” Assinale o recurso usado no segundo período para sustentar o tópico frasal.",
      alternativas: [
        "Dados estatísticos, com número exato que dá credibilidade à ideia defendida.",
        "Contraste e paralelo, com comparação entre duas realidades do mesmo tema.",
        "Testemunho de autoridade, com a opinião de alguém experiente no assunto.",
        "Citação de fato histórico, com evento do passado ligado ao tema do presente.",
        "Definição, com a apresentação do conceito de velocidade segura na rodovia.",
      ],
      correta: 2,
      explicacao:
        "A ideia do primeiro período recebe o apoio de uma profissional experiente. O peso do argumento vem de quem fala.",
      explicacaoErradas:
        "“vinte anos” informa a experiência, e o período não traz estatística sobre colisões. Não há duas realidades comparadas, evento histórico ou definição de termo.",
      pegadinha:
        "Ver o número “vinte” e marcar dados estatísticos. Esse número qualifica a pessoa, e não prova a ideia.",
      conhecimento:
        "Tópico frasal é o período que resume o parágrafo. Os demais períodos o sustentam.",
    },
  ],
};
