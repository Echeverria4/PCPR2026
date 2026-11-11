import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "discursivas-01",
  resumo: {
    ideia:
      "Antes de escrever bem, é preciso ler bem e treinar a mão. A leitura crítica tem cinco capacidades (compreender, analisar, sintetizar, avaliar e aplicar), e o treino da discursiva deve ser manuscrito, com a mesma caneta da prova, porque a apresentação do texto também conta na nota.",
    itens: [
      {
        termo: "Compreensão",
        faz: "Entender o sentido literal: qual é o assunto e qual tese o autor defende.",
      },
      {
        termo: "Análise",
        faz: "Separar o texto em partes e ver as ligações lógicas entre elas.",
      },
      {
        termo: "Síntese",
        faz: "Ficar só com as ideias essenciais e deixar de lado as secundárias.",
        pista: "Síntese = resumir o núcleo.",
      },
      {
        termo: "Avaliação",
        faz: "Fazer um juízo de valor sobre o texto e apontar onde a argumentação é fraca.",
      },
      {
        termo: "Aplicação",
        faz: "Usar o que foi lido para resolver situações parecidas, como um tema de prova.",
      },
      {
        termo: "Site do órgão",
        faz: "Ler todo dia as notícias oficiais da PRF amplia o vocabulário e mantém o candidato atualizado sobre a atuação da instituição.",
      },
      {
        termo: "Escrita à mão",
        faz: "Treina os músculos e a resistência para horas de escrita, ajuda a memorizar e a fixar a gramática. A caligrafia sofre com o nervosismo, e a apresentação pesa na correção.",
      },
      {
        termo: "Caneta",
        faz: "Treinar com caneta esferográfica de corpo transparente, igual à exigida na prova, para não estranhar o material no dia.",
      },
      {
        termo: "Exercício de cópia e paráfrase",
        faz: "Copiar à mão um texto de cerca de 30 linhas sobre o cargo ou reescrevê-lo com palavras próprias (paráfrase), mantendo a ideia central.",
      },
      {
        termo: "Vernáculo",
        faz: "A língua própria do país, no caso o português.",
      },
    ],
    cuidado:
      "Esta aula trata do hábito de treino. As regras formais da folha (tipo de letra, margens, rasuras, título) estão na aula 03.",
  },
  questoes: [
    {
      topico: "Leitura crítica",
      subassunto: "Síntese",
      dificuldade: 5,
      raciocinio: "Reduzir ao essencial e cortar o secundário é síntese.",
      enunciado:
        "Depois de ler no site da PRF uma notícia longa sobre uma operação de feriado, um candidato anota em três linhas só o que é essencial (o objetivo da operação e o resultado) e descarta detalhes como horários e nomes de cidades. Ele exercitou a capacidade de:",
      alternativas: [
        "compreensão, porque apenas identificou o sentido literal do texto e a tese defendida pelo autor",
        "avaliação, porque emitiu um juízo de valor sobre a qualidade dos argumentos usados na notícia",
        "síntese, porque reduziu o texto às ideias essenciais e deixou de lado as informações secundárias",
        "aplicação, porque transferiu o que leu para resolver uma situação semelhante em uma prova discursiva",
        "análise, porque separou o texto em partes e examinou as ligações lógicas entre cada uma delas",
      ],
      correta: 2,
      explicacao:
        "Síntese é selecionar o núcleo do texto e eliminar o que é secundário. Foi o que o candidato fez ao guardar só o objetivo e o resultado da operação.",
      explicacaoErradas:
        "Ele não parou no sentido literal, como diz “compreensão”. Não julgou a qualidade do texto, como diz “avaliação”. Não usou a leitura para outra situação, como diz “aplicação”. E não examinou as ligações lógicas entre as partes, que é a “análise”.",
      pegadinha: "Confundir análise (dividir e relacionar) com síntese (reduzir ao essencial).",
      conhecimento: "As cinco capacidades da leitura crítica: compreensão, análise, síntese, avaliação e aplicação.",
    },
    {
      topico: "Leitura crítica",
      subassunto: "Avaliação",
      dificuldade: 5,
      raciocinio: "Apontar fragilidade do argumento é juízo de valor: avaliação.",
      enunciado:
        "Ao ler um artigo contra as fiscalizações de alcoolemia nas rodovias, um candidato percebe que o autor generaliza a partir de um único caso e não apresenta dados. Ele anota: “o argumento central é frágil”. A capacidade exercida foi a:",
      alternativas: [
        "avaliação, pois julgou o valor do texto e apontou onde a argumentação é frágil",
        "compreensão, pois só reconheceu qual é o assunto e qual é a tese principal do artigo lido",
        "síntese, pois eliminou as ideias secundárias e guardou apenas o núcleo do raciocínio do autor",
        "paráfrase, pois reescreveu o artigo com outras palavras e manteve intacta a ideia central do autor",
        "aplicação, pois usou o conteúdo do artigo para enfrentar uma situação parecida em outro contexto",
      ],
      correta: 0,
      explicacao:
        "Avaliar é fazer um juízo de valor sobre o texto, inclusive apontando seus pontos fracos. Dizer que o argumento é frágil por generalizar um caso isolado é exatamente isso.",
      explicacaoErradas:
        "Ele foi além de reconhecer o assunto e a tese, que seria a “compreensão”. Não resumiu o texto, o que seria a “síntese”. Não reescreveu nada, então não houve “paráfrase”. E não levou o conteúdo para outro contexto, que seria a “aplicação”.",
      pegadinha: "Achar que perceber a tese já é avaliar; avaliar exige julgar a força dos argumentos.",
      conhecimento: "A avaliação é a etapa mais exigente da leitura crítica, porque pede posição sobre o texto.",
    },
    {
      topico: "Escrita manuscrita",
      subassunto: "Por que treinar à mão",
      dificuldade: 4,
      raciocinio: "Resistência física e apresentação contam na prova manuscrita.",
      enunciado:
        "Um candidato à PRF treina suas dissertações apenas digitando no computador e pretende escrever à mão só no dia da prova. Pelas orientações da aula, esse plano é ruim principalmente porque:",
      alternativas: [
        "a banca proíbe que o candidato treine em computador nas semanas anteriores à aplicação da prova",
        "o texto digitado impede o candidato de aprender a norma culta, que só se fixa pela escrita à mão",
        "a caligrafia não entra em nenhum critério de correção, e o treino à mão seria só um hábito antigo",
        "escrever à mão só serve para memorizar a matéria e não tem relação nenhuma com a nota da prova",
        "escrever à mão por horas exige resistência muscular, e a apresentação do texto também pesa na nota",
      ],
      correta: 4,
      explicacao:
        "A aula mostra que a escrita manuscrita treina os músculos e a resistência para horas de prova e que a apresentação conta na correção. Quem só digita chega ao dia da prova sem esse preparo.",
      explicacaoErradas:
        "Não existe regra em que “a banca proíbe” o treino em computador. A escrita à mão ajuda a fixar a gramática, mas não é verdade que o texto digitado “impede o candidato de aprender a norma culta”. A apresentação conta, por isso é falso que a caligrafia “não entra em nenhum critério de correção”. E dizer que escrever à mão “não tem relação nenhuma com a nota” ignora a apresentação.",
      pegadinha: "Reduzir o treino manuscrito à memorização e esquecer o peso da apresentação.",
      conhecimento: "A caligrafia piora com o nervosismo; o treino à mão diminui esse efeito no dia da prova.",
    },
    {
      topico: "Escrita manuscrita",
      subassunto: "Paráfrase",
      dificuldade: 4,
      raciocinio: "Reescrever com outras palavras mantendo a ideia: paráfrase.",
      enunciado:
        "No treino sugerido na aula, o candidato pega um texto de cerca de 30 linhas sobre o cargo de policial rodoviário federal e o reescreve à mão com palavras próprias, sem mudar a ideia central. Essa técnica é a:",
      alternativas: [
        "transcrição, que copia o texto original palavra por palavra para treinar a velocidade da letra",
        "paráfrase, que reformula o texto com outras palavras e preserva a ideia central do original",
        "síntese, que reduz o texto a um terço do tamanho e muda a tese para deixá-la mais atual",
        "citação, que reproduz o trecho entre aspas e indica a fonte para dar autoridade ao argumento",
        "tradução, que passa o texto do vernáculo para outra língua e depois o devolve ao português",
      ],
      correta: 1,
      explicacao:
        "Paráfrase é reformular um texto com outras palavras, mantendo a ideia central. A aula sugere copiar ou parafrasear um texto sobre o cargo como exercício de escrita.",
      explicacaoErradas:
        "A “transcrição” copia palavra por palavra, sem reformular. A síntese reduz o texto, mas não pode mudar a tese, como diz “muda a tese para deixá-la mais atual”. A “citação” reproduz o original entre aspas. A “tradução” muda de língua, o que não é o exercício proposto.",
      pegadinha: "Confundir paráfrase com síntese: a paráfrase não precisa encurtar o texto.",
      conhecimento: "Vernáculo é a língua própria do país; no Brasil, o português.",
    },
    {
      topico: "Leitura crítica",
      subassunto: "Leitura do site do órgão",
      dificuldade: 4,
      raciocinio: "Leitura diária: vocabulário e atualização.",
      enunciado:
        "A aula recomenda que o candidato leia todos os dias as notícias publicadas no site oficial da PRF. O motivo apresentado é que essa leitura:",
      alternativas: [
        "garante que a banca vai copiar, sem nenhuma alteração, uma das notícias do site como texto motivador",
        "dispensa o estudo dos demais temas de segurança pública que costumam ser cobrados nas discursivas",
        "revela com antecedência o padrão de resposta oficial que será usado na correção da prova",
        "amplia o vocabulário e mantém o candidato atualizado sobre a atuação do órgão e seus temas",
        "oferece modelos prontos de dissertação que podem ser decorados e reproduzidos no dia da prova",
      ],
      correta: 3,
      explicacao:
        "A leitura diária do site do órgão serve para ampliar o vocabulário e manter o candidato informado sobre o que a instituição faz, o que ajuda a construir argumentos nas discursivas.",
      explicacaoErradas:
        "Nada indica que a banca “vai copiar, sem nenhuma alteração” uma notícia. A leitura não “dispensa o estudo dos demais temas”. O site não traz o “padrão de resposta oficial” da prova. E notícias não são “modelos prontos de dissertação” para decorar.",
      pegadinha: "Achar que a leitura do site substitui o estudo dos temas.",
      conhecimento: "Notícias oficiais dão dados e exemplos concretos para os parágrafos de desenvolvimento.",
    },
  ],
};
