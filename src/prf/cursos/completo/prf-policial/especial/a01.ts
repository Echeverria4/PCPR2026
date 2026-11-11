import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "especial-01",
  resumo: {
    ideia:
      "A Lei 9.605/1998 pune quem mata, caça, transporta ou vende fauna sem autorização, quem destrói flora, polui ou funciona sem licença. Na rodovia, o que mais aparece é transporte: animais, pescado, madeira e produtos perigosos.",
    itens: [
      {
        termo: "Apreensão",
        faz: "Animais voltam de preferência ao habitat. Perecíveis e madeira são avaliados e doados. Instrumentos são vendidos, descaracterizados por reciclagem (art. 25).",
      },
      {
        termo: "Fauna silvestre",
        faz: "Matar, caçar, apanhar ou utilizar sem autorização. Quem transporta, vende ou guarda espécime sem autorização responde igual (art. 29, § 1º, III).",
        pista: "Guarda doméstica de espécie não ameaçada: o juiz pode deixar de aplicar a pena.",
      },
      {
        termo: "Aumentos na caça",
        faz: "De metade: espécie ameaçada, período proibido, noite, abuso de licença, unidade de conservação, destruição em massa. Até o triplo: caça profissional (art. 29, §§ 4º e 5º).",
      },
      {
        termo: "Maus-tratos",
        faz: "Regra: detenção de 3 meses a 1 ano. Cão ou gato: reclusão de 2 a 5 anos, multa e proibição da guarda. Morte do animal: mais 1/6 a 1/3 (art. 32).",
        pista: "Desde 2025, tatuagem e piercing estéticos em cão e gato também; desde 2026, desastre ambiental que prejudique animais.",
      },
      {
        termo: "Pesca",
        faz: "Pescar em período ou lugar proibido. Quem transporta ou vende o pescado da pesca proibida responde igual (art. 34).",
        pista: "O art. 29 (caça) não se aplica à pesca.",
      },
      {
        termo: "Abate que não é crime",
        faz: "Para matar a fome do agente ou da família; para proteger lavoura ou rebanho, com autorização; animal nocivo assim declarado pelo órgão (art. 37).",
      },
      {
        termo: "Incêndio",
        faz: "Provocar incêndio em floresta ou em qualquer outra forma de vegetação: reclusão de 2 a 4 anos. Culposo: detenção (art. 41).",
      },
      {
        termo: "Balões",
        faz: "Fabricar, vender, transportar ou soltar balões que possam provocar incêndio (art. 42).",
      },
      {
        termo: "Madeira e carvão",
        faz: "Transportar ou guardar sem licença válida para todo o tempo da viagem ou do armazenamento (art. 46, parágrafo único).",
      },
      {
        termo: "Produto perigoso",
        faz: "Transportar, guardar ou usar produto tóxico em desacordo com as normas; abandoná-lo também é crime. Nuclear ou radioativo: mais 1/6 a 1/3 (art. 56).",
      },
      {
        termo: "Sem licença",
        faz: "Fazer funcionar atividade poluidora sem licença: detenção de 6 meses a 2 anos, ou multa. Até o dobro se exigir estudo de impacto ambiental (art. 60).",
      },
      {
        termo: "Administração ambiental",
        faz: "Obstar a fiscalização ambiental (art. 69). Apresentar laudo ou estudo falso ou enganoso no licenciamento (art. 69-A).",
      },
    ],
    cuidado:
      "Materiais antigos falam em incêndio “em mata ou floresta”. Desde a Lei 14.944/2024, o art. 41 diz “em floresta ou em demais formas de vegetação”.",
  },
  questoes: [
    {
      topico: "Crimes contra a fauna",
      subassunto: "Transporte de espécime silvestre",
      dificuldade: 4,
      raciocinio: "O § 1º do art. 29 equipara condutas de quem não caçou.",
      enunciado:
        "Numa fiscalização de ônibus interestadual, a PRF encontra com um passageiro seis aves silvestres nativas, vindas de criadouro não autorizado, que ele levaria para vender. Ele afirma que não as capturou. Segundo a Lei 9.605/1998, ele",
      alternativas: [
        "não comete crime, pois o art. 29 só pune quem mata ou caça",
        "comete receptação, pois as aves foram tiradas da natureza por outro",
        "comete crime de caça na forma do caput, pois o transporte é caça",
        "comete crime, pois transportar espécime sem autorização é equiparado",
        "comete só infração administrativa, punida com multa pelo órgão ambiental",
      ],
      correta: 3,
      explicacao:
        "O art. 29, § 1º, III, pune com as mesmas penas do caput quem vende, expõe à venda, guarda, tem em cativeiro ou transporta espécimes da fauna silvestre provenientes de criadouros não autorizados ou sem a devida autorização. Não é preciso ter capturado as aves.",
      explicacaoErradas:
        "“Só pune quem mata ou caça” esquece as figuras equiparadas do § 1º. “Receptação” cede à lei especial. “Na forma do caput” erra: o transporte está no § 1º, III, com as mesmas penas. “Só infração administrativa” ignora o crime, que convive com a multa do órgão.",
      pegadinha: "Quem não capturou também responde, se transporta ou vende.",
      conhecimento:
        "A pena é de detenção de 6 meses a 1 ano e multa: infração de menor potencial ofensivo, que segue a Lei 9.099/1995.",
    },
    {
      topico: "Crimes contra a fauna",
      subassunto: "Guarda doméstica",
      dificuldade: 4,
      raciocinio: "A lei dá ao juiz uma saída para a guarda doméstica.",
      enunciado:
        "Numa abordagem, uma família leva no carro um papagaio criado em casa há dez anos, sem autorização. A espécie não está ameaçada de extinção. Quanto a esse fato, segundo a Lei 9.605/1998,",
      alternativas: [
        "é atípico, pois a guarda doméstica antiga torna a ave doméstica",
        "o juiz pode deixar de aplicar a pena, conforme as circunstâncias",
        "a autoridade policial pode deixar de registrar o fato na ocorrência",
        "a pena é aumentada de metade, por ser ave tirada da natureza",
        "a punibilidade se extingue com a entrega espontânea da ave",
      ],
      correta: 1,
      explicacao:
        "O art. 29, § 2º, diz que, no caso de guarda doméstica de espécie silvestre não considerada ameaçada de extinção, pode o juiz, considerando as circunstâncias, deixar de aplicar a pena. O fato continua típico: é o juiz quem decide.",
      explicacaoErradas:
        "“Atípico” erra: o tempo de convivência não muda a natureza silvestre da ave. “A autoridade policial pode deixar de registrar” transfere ao policial uma decisão do juiz. “Aumentada de metade” vale para espécie ameaçada, não para esta. “Entrega espontânea” não extingue a punibilidade por si.",
      pegadinha: "Quem perdoa é o juiz, não o policial.",
      conhecimento:
        "São silvestres as espécies nativas, migratórias e outras que tenham todo ou parte do ciclo de vida no território brasileiro (art. 29, § 3º).",
    },
    {
      topico: "Crimes contra a fauna",
      subassunto: "Causas de aumento",
      dificuldade: 5,
      raciocinio: "Cada artigo da lei tem sua própria fração de aumento.",
      enunciado:
        "Dois homens são flagrados caçando tatus durante a noite, em período proibido à caça, sem autorização. Não são caçadores profissionais. Segundo o art. 29 da Lei 9.605/1998, a pena",
      alternativas: [
        "é aumentada de um sexto a um terço, pela caça à noite",
        "é aumentada até o triplo, pelo período proibido",
        "é aumentada de metade, pela noite e pelo período proibido",
        "é dobrada, por serem duas as circunstâncias de aumento",
        "não tem aumento, pois as circunstâncias são comuns na caça",
      ],
      correta: 2,
      explicacao:
        "O art. 29, § 4º, aumenta a pena de metade se o crime é praticado, entre outras hipóteses, em período proibido à caça ou durante a noite. O aumento até o triplo do § 5º é só para a caça profissional.",
      explicacaoErradas:
        "“Um sexto a um terço” é a fração dos crimes contra a flora (art. 53) e da morte do animal nos maus-tratos. “Até o triplo” é da caça profissional. “Dobrada” cria uma soma que a lei não prevê. “Não tem aumento” contraria o § 4º.",
      pegadinha: "Noite e período proibido estão no mesmo parágrafo, com a mesma fração.",
      conhecimento:
        "Também aumentam a pena de metade: espécie rara ou ameaçada, abuso de licença, unidade de conservação e métodos de destruição em massa.",
    },
    {
      topico: "Crimes contra a fauna",
      subassunto: "Transporte de pescado proibido",
      dificuldade: 5,
      raciocinio: "A pesca tem artigo próprio, e o art. 29 a exclui.",
      enunciado:
        "Um caminhão frigorífico é parado na rodovia com peixes de espécie protegida, de tamanho inferior ao permitido, pescados em período de defeso. O motorista só fazia o transporte. Segundo a Lei 9.605/1998, ele",
      alternativas: [
        "responde pelo art. 29, pois peixe é espécime da fauna silvestre",
        "não responde, pois só quem pesca pratica o crime do art. 34",
        "responde pelo crime de pesca, que também pune quem transporta",
        "responde por receptação, pois recebeu produto de crime alheio",
        "só responde se tiver participado da pesca, como coautor",
      ],
      correta: 2,
      explicacao:
        "O art. 34, parágrafo único, III, pune com as mesmas penas quem transporta, comercializa, beneficia ou industrializa espécimes provenientes da coleta, apanha e pesca proibidas. O art. 29, § 6º, diz que as regras da caça não se aplicam aos atos de pesca.",
      explicacaoErradas:
        "“Pelo art. 29” esbarra no § 6º, que exclui a pesca. “Só quem pesca” esquece o inciso III. “Receptação” cede à lei especial. “Como coautor” é desnecessário: o transporte é crime autônomo.",
      pegadinha: "Peixe é fauna, mas a pesca tem regime próprio.",
      conhecimento:
        "A pena do art. 34 é de detenção de 1 a 3 anos ou multa, ou ambas cumulativamente.",
    },
    {
      topico: "Crimes contra a flora",
      subassunto: "Madeira sem licença válida",
      dificuldade: 4,
      raciocinio: "A licença tem que acompanhar a carga do começo ao fim.",
      enunciado:
        "Um caminhão com carga de madeira nativa é fiscalizado. O motorista apresenta a licença da carga, emitida pela autoridade competente, mas o prazo de validade venceu dois dias antes, no meio da viagem. Segundo a Lei 9.605/1998,",
      alternativas: [
        "há crime, pois a licença deve valer por todo o tempo da viagem",
        "não há crime, pois a licença existiu e foi dada pela autoridade",
        "há só infração administrativa, pois o crime exige falta de licença",
        "há crime só para quem comprou a madeira sem exigir a licença",
        "há crime só se a madeira vier de área de preservação permanente",
      ],
      correta: 0,
      explicacao:
        "O art. 46, parágrafo único, pune quem vende, tem em depósito, transporta ou guarda madeira, lenha, carvão e outros produtos de origem vegetal sem licença válida para todo o tempo da viagem ou do armazenamento.",
      explicacaoErradas:
        "“A licença existiu” ignora a exigência de validade por toda a viagem. “Só infração administrativa” contraria o parágrafo único. “Só para quem comprou” é a figura do caput, que convive com a do transportador. “Área de preservação permanente” não é exigida no art. 46.",
      pegadinha: "Licença vencida no caminho equivale a não ter licença.",
      conhecimento:
        "O caput pune quem recebe ou adquire esses produtos para fins comerciais sem exigir a licença do vendedor e a via que acompanha o produto.",
    },
    {
      topico: "Crimes contra a flora",
      subassunto: "Incêndio em vegetação",
      dificuldade: 5,
      raciocinio: "A redação do art. 41 mudou em 2024.",
      enunciado:
        "Um homem ateia fogo, de propósito, à vegetação de cerrado na faixa de domínio de uma rodovia. Não é floresta nem área de preservação permanente. Pelo texto atual da Lei 9.605/1998, ele",
      alternativas: [
        "não responde pelo art. 41, que só fala em mata ou floresta",
        "responde pelo art. 41 só se a área for de preservação permanente",
        "responde pelo art. 41, que alcança qualquer forma de vegetação",
        "responde só pelo crime de dano do Código Penal, por ser bem público",
        "responde pelo art. 41 na forma culposa, por faltar dano à floresta",
      ],
      correta: 2,
      explicacao:
        "Desde a Lei 14.944/2024, o caput do art. 41 pune quem provoca incêndio em floresta ou em demais formas de vegetação, com reclusão de 2 a 4 anos e multa. A antiga redação falava em mata ou floresta.",
      explicacaoErradas:
        "“Mata ou floresta” é a redação revogada. “Preservação permanente” não é exigida. “Dano do Código Penal” cede à lei ambiental. “Culposa” não combina com quem ateia fogo de propósito.",
      pegadinha: "Livros anteriores a 2024 ainda trazem “mata ou floresta”.",
      conhecimento:
        "Se o incêndio for culposo, a pena é de detenção de 6 meses a 1 ano e multa (art. 41, parágrafo único).",
    },
    {
      topico: "Crimes contra a flora",
      subassunto: "Balões",
      dificuldade: 4,
      raciocinio: "O tipo tem vários verbos, e soltar é só um deles.",
      enunciado:
        "Na véspera de uma festa junina, a PRF encontra num carro dez balões de papel com bucha, que o motorista levaria para soltar numa cidade próxima. Ele ainda não soltou nenhum. Segundo a Lei 9.605/1998,",
      alternativas: [
        "não há crime, pois o art. 42 exige que o balão seja solto",
        "não há crime, pois o art. 42 exige incêndio efetivo na vegetação",
        "há só contravenção penal, pois não há dano ao meio ambiente",
        "há crime, pois transportar o balão já é uma conduta típica",
        "há crime tentado, pois a soltura não chegou a ocorrer",
      ],
      correta: 3,
      explicacao:
        "O art. 42 pune quem fabrica, vende, transporta ou solta balões que possam provocar incêndios nas florestas e demais formas de vegetação, em áreas urbanas ou em qualquer tipo de assentamento humano. Transportar já consuma o crime.",
      explicacaoErradas:
        "“Exige que o balão seja solto” ignora os outros verbos. “Incêndio efetivo” erra: basta o balão poder provocá-lo. “Contravenção” não é o enquadramento. “Tentado” erra: o transporte é conduta consumada.",
      pegadinha: "Basta o balão poder provocar incêndio.",
      conhecimento:
        "A pena é de detenção de 1 a 3 anos ou multa, ou ambas cumulativamente.",
    },
    {
      topico: "Poluição",
      subassunto: "Abandono de produto perigoso",
      dificuldade: 5,
      raciocinio: "O § 1º do art. 56 equipara condutas ao transporte irregular.",
      enunciado:
        "Para fugir da fiscalização, o motorista de um caminhão descarrega e deixa à beira da rodovia tambores de agrotóxico, produto tóxico, e segue viagem. Segundo a Lei 9.605/1998, ele",
      alternativas: [
        "responde só por infração de trânsito, pois não houve poluição",
        "responde só se o produto vazar e causar dano à saúde humana",
        "responde por crime culposo, pois quis apenas fugir da fiscalização",
        "responde por desobediência, pois evitou a ordem da fiscalização",
        "responde pelas penas do art. 56, pois abandonar o produto é crime",
      ],
      correta: 4,
      explicacao:
        "O art. 56, § 1º, I, pune com as mesmas penas do caput, reclusão de 1 a 4 anos e multa, quem abandona produto ou substância tóxica, perigosa ou nociva, ou a utiliza em desacordo com as normas ambientais ou de segurança.",
      explicacaoErradas:
        "“Só infração de trânsito” ignora o crime ambiental. “Se o produto vazar” cria um resultado que a lei não exige. “Culposo” erra: abandonar foi escolha dele. “Desobediência” não descreve o abandono do produto.",
      pegadinha: "O crime não depende de vazamento nem de dano.",
      conhecimento:
        "Se o produto for nuclear ou radioativo, a pena aumenta de 1/6 a 1/3; se o crime for culposo, é de detenção de 6 meses a 1 ano (art. 56, §§ 2º e 3º).",
    },
    {
      topico: "Crimes contra a fauna",
      subassunto: "Maus-tratos a cão",
      dificuldade: 5,
      raciocinio: "Cão e gato têm pena própria, mais grave.",
      enunciado:
        "A PRF encontra no porta-malas fechado de um carro, sob sol forte, quatro cães sem água; um deles está morto. Comprovados os maus-tratos, a pena prevista na Lei 9.605/1998 é de",
      alternativas: [
        "detenção de 3 meses a 1 ano, com aumento de metade pela morte",
        "reclusão de 2 a 5 anos, multa e proibição da guarda, mais 1/6 a 1/3",
        "reclusão de 2 a 5 anos e multa, sem nenhum aumento pela morte do animal",
        "detenção de 3 meses a 1 ano e multa, pois cão é animal doméstico",
        "reclusão de 1 a 4 anos e multa, dobrada pela morte do animal",
      ],
      correta: 1,
      explicacao:
        "O art. 32, § 1º-A, fixa, para cão ou gato, reclusão de 2 a 5 anos, multa e proibição da guarda. O § 2º aumenta a pena de 1/6 a 1/3 se ocorre a morte do animal.",
      explicacaoErradas:
        "“Detenção de 3 meses a 1 ano” é a pena geral do caput, não a de cão ou gato. “Sem aumento pela morte” esquece o § 2º. “Aumento de metade” e “dobrada” usam frações que o art. 32 não prevê. “Reclusão de 1 a 4 anos” não é a pena da lei.",
      pegadinha: "O caput vale para os demais animais; cão e gato têm pena própria.",
      conhecimento:
        "Desde a Lei 15.150/2025, a lei também pune quem faz ou permite tatuagem e piercing estéticos em cães e gatos (art. 32, § 1º-B).",
    },
    {
      topico: "Apreensão",
      subassunto: "Destino dos bens apreendidos",
      dificuldade: 4,
      raciocinio: "Cada tipo de bem tem um destino na lei.",
      enunciado:
        "Numa operação, são apreendidos papagaios saudáveis, madeira serrada e uma motosserra usada no crime. Segundo o art. 25 da Lei 9.605/1998, em regra,",
      alternativas: [
        "as aves vão a leilão, a madeira é destruída e a motosserra é doada",
        "as aves ficam com o infrator, como depositário fiel, até a sentença final",
        "as aves vão ao habitat, a madeira é doada e a motosserra é vendida",
        "as aves são destruídas por razão sanitária e a madeira, leiloada",
        "a madeira e a motosserra são destruídas, e as aves vão a zoológico",
      ],
      correta: 2,
      explicacao:
        "O art. 25 manda libertar os animais prioritariamente em seu habitat (ou entregá-los a zoológicos e entidades se isso for inviável), avaliar e doar produtos perecíveis e madeiras a instituições científicas, hospitalares, penais e beneficentes, e vender os instrumentos, garantida a descaracterização por reciclagem.",
      explicacaoErradas:
        "“Leilão”, “destruída” e “doada” trocam os destinos da lei. “Depositário” não é a regra do art. 25. “Destruídas por razão sanitária” confunde: a razão sanitária só desvia os animais do habitat para zoológicos.",
      pegadinha: "Zoológico só entra quando a volta ao habitat é inviável.",
      conhecimento:
        "Produtos e subprodutos da fauna não perecíveis são destruídos ou doados a instituições científicas, culturais ou educacionais (art. 25, § 4º).",
    },
    {
      topico: "Crimes contra a fauna",
      subassunto: "Abate que não é crime",
      dificuldade: 4,
      raciocinio: "Cada hipótese do art. 37 tem sua condição.",
      enunciado:
        "Segundo o art. 37 da Lei 9.605/1998, não é crime o abate de animal silvestre quando feito",
      alternativas: [
        "para proteger lavoura, ainda que sem autorização da autoridade",
        "para matar a fome do agente ou de sua família, em necessidade",
        "por ser o animal nocivo, segundo a opinião do próprio agricultor",
        "para venda da carne, se o agente for pessoa de baixa renda",
        "em qualquer caso, se o animal não estiver ameaçado de extinção",
      ],
      correta: 1,
      explicacao:
        "O art. 37 afasta o crime quando o abate é feito em estado de necessidade, para saciar a fome do agente ou de sua família; para proteger lavouras, pomares e rebanhos, desde que legal e expressamente autorizado; ou por ser nocivo o animal, desde que assim caracterizado pelo órgão competente.",
      explicacaoErradas:
        "“Ainda que sem autorização” contraria a exigência do inciso II. “Opinião do próprio agricultor” erra: quem caracteriza o animal nocivo é o órgão competente. “Venda da carne” não está na lei. “Em qualquer caso” esvazia o art. 29.",
      pegadinha: "Fome sim; venda não.",
      conhecimento:
        "O inciso III do art. 37 foi vetado.",
    },
    {
      topico: "Outros crimes ambientais",
      subassunto: "Atividade sem licença",
      dificuldade: 5,
      raciocinio: "A Lei 15.190/2025 mudou a pena do art. 60.",
      enunciado:
        "A PRF constata, às margens da rodovia, um posto de combustível funcionando sem a licença ambiental exigida. Pelo texto atual do art. 60 da Lei 9.605/1998, a pena é de",
      alternativas: [
        "detenção de 1 a 6 meses, ou multa, ou ambas cumulativamente",
        "reclusão de 1 a 4 anos e multa, como no crime de poluição do art. 54",
        "detenção de 6 meses a 2 anos, ou multa, ou ambas, cumulativamente",
        "só multa administrativa, pois a falta de licença não é crime",
        "reclusão de 2 a 4 anos, dobrada se houver dano ao meio ambiente",
      ],
      correta: 2,
      explicacao:
        "Com a Lei 15.190/2025, o art. 60 passou a prever detenção de 6 meses a 2 anos, ou multa, ou ambas cumulativamente. O parágrafo único aumenta a pena até o dobro se o licenciamento estiver sujeito a Estudo Prévio de Impacto Ambiental.",
      explicacaoErradas:
        "“De 1 a 6 meses” é a pena antiga. “Como no crime de poluição do art. 54” confunde dois crimes. “Só multa administrativa” ignora o tipo penal. “Dobrada se houver dano” erra a causa: o dobro depende do estudo de impacto, não de dano.",
      pegadinha: "Materiais anteriores a 2025 trazem a pena de 1 a 6 meses.",
      conhecimento:
        "Obstar ou dificultar a fiscalização ambiental é crime próprio do art. 69, com detenção de 1 a 3 anos e multa.",
    },
  ],
};
