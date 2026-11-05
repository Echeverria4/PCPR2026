import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-05",
  resumo: {
    ideia:
      "O verbo diz quando o fato ocorre e como quem fala o enxerga: certo, duvidoso ou como ordem. A prova cobra o valor de cada tempo e os verbos que fogem do modelo.",
    itens: [
      {
        termo: "Modos",
        faz: "Indicativo: fato tido como certo. Subjuntivo: dúvida, hipótese ou desejo. Imperativo: ordem, pedido ou conselho.",
      },
      {
        termo: "Pretéritos",
        faz: "Perfeito: fato concluído. Imperfeito: hábito ou ação em curso no passado. Mais-que-perfeito: fato anterior a outro já passado (“a carreta já tombara”).",
      },
      {
        termo: "Futuros",
        faz: "Futuro do presente: fato que virá. Futuro do pretérito: fato posterior a outro passado, pedido polido, hipótese ou informação não confirmada (“estaria sem cinto”).",
      },
      {
        termo: "Correlação",
        faz: "Se reduzir, evitará. Se reduzisse, evitaria. Se tivesse reduzido, teria evitado.",
        pista: "Conjunção subordinativa costuma levar o verbo para o subjuntivo.",
      },
      {
        termo: "Imperativo",
        faz: "Afirmativo de “tu” e “vós”: presente do indicativo sem o “s”. Os demais vêm do presente do subjuntivo. O negativo vem todo do presente do subjuntivo.",
        pista: "Não existe imperativo para “eu”.",
      },
      {
        termo: "Formas nominais",
        faz: "O infinitivo age como substantivo; o particípio, como adjetivo; o gerúndio, como advérbio. O gerúndio pode indicar tempo, causa, condição, concessão ou modo.",
        pista: "Infinitivo no singular não é sempre impessoal: “É importante ele estudar”.",
      },
      {
        termo: "Particípios duplos",
        faz: "Com ter e haver, use a forma regular: tinha aceitado. Com ser e estar, a irregular: foi aceito, foi entregue, foram acesos.",
        pista: "“Chego” e “trago” não são particípios: o certo é “chegado” e “trazido”.",
      },
      {
        termo: "Ver, vir, ter e pôr",
        faz: "Quando eu vir (ver), quando eu vier (vir). Derivados seguem o verbo base: intervier, retiver, dispuser, mantiver.",
        pista: "Troque por “fizer”: se couber, é futuro do subjuntivo.",
      },
      {
        termo: "Verbos em -ear e -iar",
        faz: "Em -ear ganham “i” nas formas fortes: passeio, freiam. Em -iar são regulares, menos mediar, ansiar, remediar, incendiar e odiar.",
      },
      {
        termo: "Defectivos",
        faz: "Reaver e precaver não têm “eu” no presente. “Reaver” segue “haver” onde há “v”: reouve, reouvermos. “Precaver” é regular: precaveu.",
      },
      {
        termo: "Vicário",
        faz: "“Fazer” ou “ser” substitui outro verbo para evitar repetição: “Podia ter multado, mas não o fez”.",
      },
    ],
    cuidado:
      "“Requerer” não deriva de “querer”: requeri, requereu, requeresse. Só o presente muda: requeiro, requeira.",
  },
  questoes: [
    {
      topico: "Tempos e modos",
      subassunto: "Correlação entre subjuntivo e futuro do pretérito",
      dificuldade: 4,
      raciocinio: "Fato já ocorrido pede a forma composta nos dois verbos.",
      enunciado:
        "“Se o condutor ______ a velocidade antes da curva, o tombamento não ______.” Assinale a opção que preenche as lacunas com correlação adequada, tratando o fato como algo que já aconteceu.",
      alternativas: [
        "reduzisse / terá ocorrido",
        "tivesse reduzido / teria ocorrido",
        "tivesse reduzido / terá ocorrido",
        "houver reduzido / teria ocorrido",
        "reduziu / ocorreria amanhã",
      ],
      correta: 1,
      explicacao:
        "Fato passado que não aconteceu pede o mais-que-perfeito composto do subjuntivo com o futuro do pretérito composto: “tivesse reduzido” e “teria ocorrido”.",
      explicacaoErradas:
        "“terá ocorrido” é futuro do presente composto e não combina com hipótese irreal. “houver reduzido” é futuro do subjuntivo e olha para frente. “reduziu” afirma o fato no indicativo, e “amanhã” contraria o fato passado.",
      pegadinha:
        "Olhar apenas a primeira lacuna. As duas formas precisam combinar entre si.",
      conhecimento:
        "Se reduzir, evitará. Se reduzisse, evitaria. Se tivesse reduzido, teria evitado.",
    },
    {
      topico: "Verbos traiçoeiros",
      subassunto: "Reaver e precaver",
      dificuldade: 5,
      raciocinio: "Lembrar que “reaver” acompanha “haver” e que “precaver” não deriva de “ver” nem de “vir”.",
      enunciado: "Assinale a frase em que não há erro de flexão verbal.",
      alternativas: [
        "O proprietário reouve o veículo depois de quitar as despesas de remoção.",
        "O proprietário reaveu o veículo logo depois de quitar as despesas de remoção.",
        "É preciso que a empresa se precavenha contra novas fraudes nas notas.",
        "Quando reavermos o veículo, faremos a vistoria com a equipe do posto.",
        "A transportadora se precaviu contra novas fraudes nas notas de carga.",
      ],
      correta: 0,
      explicacao:
        "“Reaver” segue “haver” nas formas em que há “v”: houve, reouve. A forma “reouve” está certa.",
      explicacaoErradas:
        "“reaveu” e “reavermos” tratam o verbo como regular; o certo é “reouve” e “reouvermos”. “precavenha” não existe, porque o verbo não tem presente do subjuntivo. “precaviu” deveria ser “precaveu”.",
      pegadinha:
        "Conjugar “precaver” como “ver” ou “vir”. Ele é regular nas formas que existem: precaveu, precavesse.",
      conhecimento:
        "Reaver e precaver são defectivos: no presente do indicativo, só têm “nós” e “vós”.",
    },
    {
      topico: "Verbos traiçoeiros",
      subassunto: "Futuro do subjuntivo de ver, vir, ter e pôr",
      dificuldade: 4,
      raciocinio: "Trocar o verbo por “fizer” para reconhecer o futuro do subjuntivo e conjugar o derivado pelo verbo base.",
      enunciado: "Assinale a frase em que a forma verbal está de acordo com a norma-padrão.",
      alternativas: [
        "Quando o fiscal ver a carga irregular, ele deverá lavrar o auto de infração.",
        "Se a chefia intervir a tempo, a escala de feriado será mantida no posto.",
        "Se o condutor se dispor a colaborar, a vistoria terminará mais depressa.",
        "Caso a equipe reter o veículo, o condutor receberá logo o comprovante.",
        "Quando o fiscal vir a carga irregular, deverá lavrar o auto de infração.",
      ],
      correta: 4,
      explicacao:
        "“Vir” é o futuro do subjuntivo de “ver”: quando eu vir, quando ele vir.",
      explicacaoErradas:
        "“ver” está no infinitivo no lugar do futuro do subjuntivo. “intervir” deveria ser “intervier”, como “vier”. “dispor” deveria ser “dispuser”, como “puser”. “reter” deveria ser “retiver”, como “tiver”.",
      pegadinha:
        "Corrigir “vir” para “ver” achando que a frase traz o verbo errado. Depois de “quando”, com sentido de futuro, “ver” vira “vir”.",
      conhecimento:
        "Derivados seguem o verbo base. Quem conhece “vier”, “tiver” e “puser” acerta “intervier”, “retiver” e “dispuser”.",
    },
    {
      topico: "Modo imperativo",
      subassunto: "Uniformidade do tratamento com “tu”",
      dificuldade: 5,
      raciocinio: "Montar cada forma: afirmativo de “tu” vem do indicativo sem “s”; negativo, do subjuntivo.",
      enunciado:
        "Assinale a orientação em que todas as formas do imperativo estão corretas e mantêm o tratamento com “tu”.",
      alternativas: [
        "Reduz a velocidade, mantém a distância e não ultrapassa pela direita.",
        "Reduza a velocidade, mantenha a distância e não ultrapasses pela direita.",
        "Reduz a velocidade, mantenha a distância e não ultrapasses pela direita.",
        "Reduz a velocidade, mantém a distância e não ultrapasses pela direita.",
        "Reduzas a velocidade, mantenhas a distância e não ultrapasses pela direita.",
      ],
      correta: 3,
      explicacao:
        "No afirmativo de “tu”, tira-se o “s” do presente do indicativo: reduzes vira “reduz” ou “reduze”, e manténs vira “mantém”. No negativo, vale o presente do subjuntivo: “não ultrapasses”.",
      explicacaoErradas:
        "“não ultrapassa” usa a forma do afirmativo em frase negativa. “Reduza” e “mantenha” pertencem ao tratamento com “você”. “Reduzas” e “mantenhas” usam o subjuntivo no afirmativo de “tu”.",
      pegadinha:
        "Achar que a mesma forma serve no afirmativo e no negativo. Para “tu”, elas são diferentes.",
      conhecimento:
        "Verbos em -zir e -zer aceitam duas formas no imperativo de “tu”: conduz ou conduze, faz ou faze.",
    },
    {
      topico: "Formas nominais",
      subassunto: "Particípios duplos e formas inexistentes",
      dificuldade: 4,
      raciocinio: "Ver o auxiliar: ter e haver pedem a forma regular; ser e estar, a irregular.",
      enunciado: "Assinale a frase em que o particípio está empregado de acordo com a norma-padrão.",
      alternativas: [
        "O motorista havia chego ao posto antes da abertura da balança da via.",
        "O laudo foi entregado à chefia antes da abertura da audiência.",
        "A equipe tinha trago o bafômetro antes da abertura da barreira.",
        "Os faróis foram acendidos antes da abertura da passagem pelo túnel.",
        "O agente tinha aceitado a escala antes da abertura do novo posto.",
      ],
      correta: 4,
      explicacao:
        "Com o auxiliar “ter”, usa-se o particípio regular: “tinha aceitado”.",
      explicacaoErradas:
        "“chego” e “trago” não são particípios: o certo é “chegado” e “trazido”. “foi entregado” deveria ser “foi entregue”, e “foram acendidos” deveria ser “foram acesos”, porque o auxiliar “ser” pede a forma irregular.",
      pegadinha:
        "Pensar que a forma terminada em “-do” é sempre a culta. Com “ser” e “estar”, ela costuma estar errada nos verbos abundantes.",
      conhecimento:
        "Voz ativa, com ter e haver: forma regular. Voz passiva, com ser e estar: forma irregular.",
    },
    {
      topico: "Formas nominais",
      subassunto: "Valores do gerúndio",
      dificuldade: 4,
      raciocinio: "Trocar o gerúndio por uma oração com conjunção: se, quando, porque, embora.",
      enunciado: "Assinale a frase em que a oração de gerúndio tem valor de condição.",
      alternativas: [
        "Respeitando o limite da via, o condutor não sofre autuação por radar.",
        "Chegando ao posto da rodovia, o agente conferiu a escala da semana.",
        "Perdendo a aderência na curva, o carro atravessou a pista contrária.",
        "Mesmo respeitando o limite da via, o condutor sofreu uma autuação.",
        "O agente sinalizou a pista, acenando com a lanterna para os motoristas.",
      ],
      correta: 0,
      explicacao:
        "A oração equivale a “se respeitar o limite da via”: a falta de autuação depende dessa condição.",
      explicacaoErradas:
        "“Chegando ao posto” indica tempo (quando chegou). “Perdendo a aderência” indica causa (porque perdeu). “Mesmo respeitando” indica concessão (embora tenha respeitado). “acenando com a lanterna” indica modo.",
      pegadinha:
        "Comparar a primeira frase com a quarta. O “mesmo” muda tudo: transforma a condição em obstáculo que não impediu o fato.",
      conhecimento:
        "O gerúndio não tem conjunção, e o valor sai do contexto. O teste é reescrever a oração com uma conjunção.",
    },
    {
      topico: "Tempos e modos",
      subassunto: "Futuro do pretérito em informação não confirmada",
      dificuldade: 4,
      raciocinio: "Observar a expressão “segundo testemunhas” e o compromisso de quem escreve com o fato.",
      enunciado:
        "“Segundo testemunhas, o motorista estaria sem o cinto no momento da colisão.” No trecho, o futuro do pretérito “estaria” indica",
      alternativas: [
        "fato passado que o redator já confirmou antes de publicar a notícia.",
        "hipótese que depende de condição expressa na oração anterior.",
        "pedido polido de quem redige a notícia às testemunhas do caso.",
        "informação atribuída a terceiros, sem confirmação de quem a redige.",
        "ação posterior ao momento em que as testemunhas deram o relato.",
      ],
      correta: 3,
      explicacao:
        "A forma “estaria” mostra que o redator atribui o fato às testemunhas e não se compromete com ele.",
      explicacaoErradas:
        "Com fato confirmado, o texto diria “estava”. Não há oração condicional no trecho. Nada ali é pedido, e o relato trata de um momento anterior ao depoimento, e não posterior.",
      pegadinha:
        "Ver “futuro” no nome do tempo e concluir que a ação é posterior. Nesse uso, o tempo marca distanciamento de quem escreve.",
      conhecimento:
        "O futuro do pretérito indica fato posterior a outro passado, polidez, hipótese e informação não confirmada.",
    },
  ],
};
