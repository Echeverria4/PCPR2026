import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-16",
  resumo: {
    ideia:
      "Este PDF reúne um resumo de toda a matéria e traz o que faltava: compreender e interpretar textos. Compreender é achar o que está escrito. Interpretar é deduzir o que não está escrito, mas pode ser concluído.",
    itens: [
      {
        termo: "Como ler",
        faz: "Leia o texto inteiro. Depois, leia de novo e marque a ideia central de cada parágrafo.",
        pista: "A ideia central costuma estar na introdução e na conclusão.",
      },
      {
        termo: "Recorrência",
        faz: "A resposta está no texto, escrita com outras palavras. Procure a paráfrase, a frase equivalente.",
      },
      {
        termo: "Inferência",
        faz: "A resposta não está escrita. É preciso deduzir com base nas pistas do próprio texto.",
      },
      {
        termo: "Pressuposto",
        faz: "Informação carregada pelas palavras da frase: “parou de fumar” mostra que antes fumava.",
      },
      {
        termo: "Subentendido",
        faz: "Insinuação que depende da situação, e quem fala pode negar: “aqui faz frio” pode ser um pedido para fechar a janela.",
      },
      {
        termo: "Extrapolação",
        faz: "A afirmação vai além do limite do texto e inventa aspectos que ele não trouxe.",
      },
      {
        termo: "Redução",
        faz: "É o contrário da extrapolação: a afirmação retira parte essencial do que foi dito.",
      },
      {
        termo: "Opinião acrescentada",
        faz: "A afirmação repete o texto e junta uma avaliação que o autor não fez.",
      },
      {
        termo: "Contradição",
        faz: "O texto diz uma coisa, e a afirmação diz o contrário ou outra coisa.",
      },
      {
        termo: "Tangenciamento",
        faz: "A afirmação parece ligada ao tema, mas trata de outro assunto.",
      },
    ],
    cuidado:
      "Uma afirmação pode ser verdadeira no mundo e estar errada na questão. Vale o que o texto permite concluir, e não o que você já sabe.",
  },
  questoes: [
    {
      topico: "Inferência",
      subassunto: "Pressuposto marcado por verbo",
      dificuldade: 5,
      raciocinio: "Separar o que “deixou de” obriga a concluir do que só parece provável.",
      enunciado:
        "“O motorista deixou de usar o telefone ao volante depois da terceira multa.” Assinale a informação que o trecho permite concluir com segurança.",
      alternativas: [
        "As três multas foram aplicadas pelo uso do telefone ao volante.",
        "A multa levou o motorista a dirigir com mais atenção na rodovia.",
        "Todo condutor multado três vezes abandona o telefone ao volante.",
        "Antes da terceira multa, o motorista usava o telefone ao volante.",
        "O motorista só mudou de conduta por temer a perda da carteira de habilitação.",
      ],
      correta: 3,
      explicacao:
        "“Deixou de usar” pressupõe que ele usava. Essa informação vem das próprias palavras da frase.",
      explicacaoErradas:
        "O trecho não diz o motivo das multas, a atenção do motorista ou o medo de perder a habilitação. Também não fala de todos os condutores.",
      pegadinha:
        "Concluir que as multas foram por causa do telefone. O trecho sugere essa ligação, mas não a afirma.",
      conhecimento:
        "Verbos como “deixar de”, “parar de” e “continuar” carregam pressupostos.",
    },
    {
      topico: "Inferência",
      subassunto: "Subentendido dependente da situação",
      dificuldade: 4,
      raciocinio: "Perguntar se a ideia está nas palavras ou se nasce da situação.",
      enunciado:
        "O agente chega ao posto meia hora depois do início do plantão, e o chefe comenta: “Que bom que o senhor decidiu aparecer hoje”. Assinale a análise correta da fala.",
      alternativas: [
        "Há uma crítica subentendida, que nasce da situação e que o chefe poderia negar.",
        "Há um pressuposto de que o agente nunca comparece aos plantões do posto.",
        "Há um elogio direto à pontualidade do agente naquele plantão no posto.",
        "Há uma ordem explícita para que o agente chegue mais cedo nos próximos dias.",
        "Há uma informação objetiva sobre a presença do agente no posto, sem nenhuma insinuação.",
      ],
      correta: 0,
      explicacao:
        "As palavras são gentis, mas a situação mostra a crítica ao atraso. O subentendido pode ser negado: o chefe pode dizer que só ficou contente.",
      explicacaoErradas:
        "A frase não permite concluir que ele nunca vem. Não há elogio à pontualidade, porque ele se atrasou. Nenhuma ordem foi dada, e a insinuação existe.",
      pegadinha:
        "Confundir pressuposto com subentendido. O pressuposto está nas palavras; o subentendido depende do contexto.",
      conhecimento:
        "Quem fala não pode negar o pressuposto, mas pode negar o subentendido.",
    },
    {
      topico: "Compreensão de texto",
      subassunto: "Paráfrase e erros típicos",
      dificuldade: 4,
      raciocinio: "Testar cada afirmação contra o limite do texto: nem mais, nem menos.",
      enunciado:
        "“Nas rodovias federais, boa parte das mortes ocorre em colisões frontais, e muitas delas acontecem em trechos de pista simples. Duplicar esses trechos custa caro, mas separar os sentidos do tráfego reduz esse tipo de acidente.” Assinale a afirmação que o texto sustenta.",
      alternativas: [
        "A duplicação de toda pista simples eliminaria as mortes nas rodovias federais.",
        "Separar os sentidos do tráfego reduz as colisões frontais, mesmo com custo alto.",
        "As mortes nas rodovias federais decorrem somente de colisões frontais em pista simples.",
        "O custo da duplicação é baixo diante do número de mortes nas rodovias federais.",
        "As colisões traseiras em pista dupla são mais graves do que as frontais em pista simples.",
      ],
      correta: 1,
      explicacao:
        "A afirmação repete a ideia final com outras palavras: duplicar custa caro, e separar os sentidos reduz esse tipo de acidente.",
      explicacaoErradas:
        "“eliminaria” extrapola: o texto fala em reduzir. “somente” reduz o que foi dito como “boa parte”. “custo baixo” contradiz “custa caro”. As colisões traseiras não são tratadas no texto.",
      pegadinha:
        "Aceitar palavras fortes, como “eliminaria” e “somente”. Elas costumam passar do limite do texto.",
      conhecimento:
        "Questões de recorrência se resolvem com a paráfrase: mesma ideia, outras palavras.",
    },
    {
      topico: "Compreensão de texto",
      subassunto: "Erro por redução",
      dificuldade: 4,
      raciocinio: "Comparar o que foi dito com o que sobrou no resumo.",
      enunciado:
        "“A sonolência e o consumo de álcool estão entre as principais causas de saída de pista.” Alguém resumiu o trecho assim: “O álcool causa as saídas de pista”. Assinale a análise correta do resumo.",
      alternativas: [
        "Há contradição, pois o resumo nega o papel do álcool nas saídas de pista.",
        "Há tangenciamento, pois o resumo trata de outro assunto, muito distante do trecho.",
        "Há redução, pois o resumo suprime parte essencial do que foi dito no trecho.",
        "Há opinião acrescentada, pois o resumo traz uma avaliação sobre o motorista.",
        "Há paráfrase fiel, pois o resumo repete a mesma ideia com outras palavras.",
      ],
      correta: 2,
      explicacao:
        "O resumo tira a sonolência e a ideia de que há outras causas. O que foi dito fica menor do que o original.",
      explicacaoErradas:
        "O resumo não nega o álcool, e o assunto é o mesmo. Ele não avalia ninguém. Não é paráfrase fiel, porque a ideia mudou.",
      pegadinha:
        "Ver que “álcool” está no trecho e achar que o resumo é fiel. A omissão também altera o sentido.",
      conhecimento:
        "Redução é suprimir informação essencial. Extrapolação é o contrário: ir além do que foi dito.",
    },
    {
      topico: "Compreensão de texto",
      subassunto: "Ideia central do parágrafo",
      dificuldade: 4,
      raciocinio: "Procurar a ideia que reúne todas as partes, e não um detalhe.",
      enunciado:
        "“Muitos associam o trabalho do policial rodoviário apenas às multas. A rotina, porém, vai muito além: socorro a vítimas, combate ao tráfico, escolta e educação para o trânsito ocupam boa parte do plantão.” Assinale a ideia central do trecho.",
      alternativas: [
        "O combate ao tráfico é a atividade de maior peso no plantão do policial.",
        "As multas são a parte menos relevante da rotina do policial rodoviário.",
        "A educação para o trânsito toma a maior parte do plantão nas rodovias.",
        "A população despreza o trabalho de socorro feito pelo policial rodoviário federal.",
        "O trabalho do policial é mais amplo do que a imagem ligada apenas às multas.",
      ],
      correta: 4,
      explicacao:
        "O “porém” marca o centro do trecho: a visão comum é limitada, e a rotina vai além das multas.",
      explicacaoErradas:
        "Nenhuma atividade é apontada como a principal. O trecho não diz que as multas são a parte menos relevante. Ele fala em associação, e não em desprezo da população.",
      pegadinha:
        "Escolher um detalhe da lista. Os exemplos sustentam a ideia central, mas não são ela.",
      conhecimento:
        "Depois de “porém”, costuma vir a ideia que o autor quer destacar.",
    },
    {
      topico: "Compreensão de texto",
      subassunto: "Paráfrase de hipótese contrária ao fato",
      dificuldade: 5,
      raciocinio: "Descobrir o que de fato aconteceu com o incêndio e com a equipe.",
      enunciado:
        "“Não fosse a rápida ação da equipe, o incêndio teria alcançado o posto de combustíveis.” Assinale a frase que mantém o sentido do trecho.",
      alternativas: [
        "A equipe demorou a agir, e o incêndio chegou ao posto de combustíveis.",
        "A rápida ação da equipe não impediu que o incêndio alcançasse o posto.",
        "Se a equipe agir rápido, o incêndio não vai alcançar o posto de combustíveis.",
        "O incêndio alcançou o posto de combustíveis, apesar da ação muito rápida da equipe.",
        "A equipe agiu rápido, e por isso o incêndio não alcançou o posto de combustíveis.",
      ],
      correta: 4,
      explicacao:
        "“Não fosse” indica uma hipótese contrária ao fato. A ação ocorreu, e o incêndio não chegou ao posto.",
      explicacaoErradas:
        "Duas frases dizem que o fogo alcançou o posto, e isso é o oposto do trecho. A frase com “Se a equipe agir” transforma um fato passado em uma condição futura.",
      pegadinha:
        "Ler o “Não” do início como negação da ação da equipe. A construção afirma que a ação aconteceu.",
      conhecimento:
        "“Não fosse” e “se não fosse” apresentam o que teria ocorrido, e não o que ocorreu.",
    },
  ],
};
