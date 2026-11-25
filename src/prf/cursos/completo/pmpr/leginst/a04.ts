import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "leginst-a04",
  resumo: {
    ideia:
      "A Lei 17.169/2012 trocou o antigo soldo com gratificações por um subsídio em parcela única para a PM e o Corpo de Bombeiros do Paraná. A lei diz o que continua a ser pago à parte, quais verbas acabaram, como a carreira sobe de classe e como ficam a reserva, a reforma e a pensão. O STF derrubou partes dela na ADI 5.054.",
    itens: [
      {
        termo: "Subsídio em parcela única (art. 1º)",
        faz: "A remuneração dos militares estaduais é o subsídio da tabela do Anexo I. Não se soma a ele nenhuma gratificação, adicional, abono, prêmio ou outra espécie de remuneração, salvo as verbas do art. 3º.",
      },
      {
        termo: "Ninguém perde (art. 2º)",
        faz: "A troca não pode reduzir remuneração, proventos ou pensão. Quem ganhava mais recebe a diferença de subsídio, como verba provisória, absorvida aos poucos pelo desenvolvimento nos postos e pela implantação dos valores do Anexo I.",
        pista: "O STF (ADI 5.054) derrubou a absorção pelas revisões gerais anuais e a regra que impedia reajustar essa diferença.",
      },
      {
        termo: "O que continua a ser pago (art. 3º)",
        faz: "Gratificação natalina, terço de férias, diária, indenização por morte e acidentes, verba de chefia e da Casa Militar, parcela de ensino nas escolas da polícia, indenização por remoção, ressarcimento por funeral, abono de permanência, diferença de subsídio, diária especial por atividade extrajornada voluntária, função de gestão pública, auxílio-alimentação e bônus pela apreensão de arma de fogo, entre outras.",
      },
      {
        termo: "Teto e incorporação (arts. 3º, 10 e 14)",
        faz: "O subsídio respeita o teto do art. 37, XI, da Constituição Federal, e algumas verbas do art. 3º também entram no teto. As verbas do art. 3º não se incorporam aos proventos da reserva, da reforma nem à pensão.",
      },
      {
        termo: "Indenização por remoção (art. 4º)",
        faz: "É paga ao militar removido, por interesse da Administração ou a pedido, que muda de residência para trabalhar de forma permanente em outro município. Vale uma remuneração mensal e dispensa comprovar os gastos, mas exige provar a mudança de residência.",
        pista: "Só é paga uma vez a cada dois anos, salvo remoção por interesse da Administração justificada pelo Comandante-Geral.",
      },
      {
        termo: "Remoção: quando não paga e quando devolve",
        faz: "Não é paga se o militar não morava na cidade de origem, se não precisa morar no destino, se foi designado depois do curso de formação e ao militar temporário. Quem não se apresenta na nova sede sem justificativa ou pede exoneração antes de 90 dias de exercício devolve tudo em 10 dias úteis.",
      },
      {
        termo: "Ressarcimento por funeral (art. 5º)",
        faz: "Vale um subsídio do posto ou da graduação do militar falecido. Recebe o cônjuge ou companheiro, ou, na falta deles, qualquer pessoa que comprove ter pago as despesas, por requerimento, em parcela única, com atestado de óbito e nota fiscal em nome de quem pede.",
        pista: "Não serve de base para outras vantagens e não é devido na morte do militar temporário.",
      },
      {
        termo: "Carreira em classes (arts. 6º e 7º)",
        faz: "Desde 2024, cada posto ou graduação tem cinco classes. A promoção por classe acontece a cada sete anos de efetivo exercício. Quem é promovido para o posto ou a graduação de cima fica na mesma classe que já tinha.",
        pista: "Progressões e promoções dependem de dinheiro no orçamento e de decreto do Governador publicado no Diário Oficial.",
      },
      {
        termo: "Inativos e promoção (art. 7º, §§ 3º e 6º)",
        faz: "Não há promoção de militar da reserva, reformado ou gerador de pensão, salvo morte em serviço, ato de bravura, ressarcimento por preterição ou quem foi indicado e passou à inatividade antes do decreto. Promoção por classe na inatividade só se o tempo foi cumprido na ativa e a inatividade veio durante o processo, sem efeito retroativo.",
      },
      {
        termo: "Revisão geral anual (art. 9º)",
        faz: "O subsídio tem revisão geral anual nos mesmos moldes e índices dos demais servidores estaduais.",
      },
      {
        termo: "Verbas que acabaram (art. 11)",
        faz: "O subsídio absorveu e extinguiu o soldo, a gratificação adicional por tempo de serviço, a indenização de serviço extraordinário, a ajuda de custo, as operações (verão, safra, escudo), as gratificações de cargo em comissão, o adicional de inatividade e outras. Não pode ser criada vantagem nova com o mesmo fundamento.",
        pista: "O STF julgou inconstitucional a extinção do salário-família (inciso VII): ele é direito do militar pela Constituição do Estado.",
      },
      {
        termo: "Alunos, curso de oficiais e temporários (arts. 12 a 13-A)",
        faz: "O aluno-soldado recebe bolsa-auxílio. A praça aprovada no curso de formação de oficiais continua a receber o subsídio da sua graduação até ser promovida a aspirante a oficial. O militar temporário recebe vencimento, por lei própria.",
      },
      {
        termo: "Reserva, reforma, pensão e FASPM (arts. 14 e 15)",
        faz: "A lei vale também para a reserva, a reforma e os geradores de pensão, conforme o tempo de serviço na data da inatividade. A contribuição ao fundo de saúde dos militares (FASPM) é facultativa: 0,5% do subsídio, mais 0,2% por dependente, até 2%.",
      },
    ],
  },
  questoes: [
    {
      topico: "Subsídio",
      subassunto: "Parcela única",
      dificuldade: 4,
      raciocinio: "Art. 1º e parágrafo único da Lei 17.169/2012: subsídio fixado na tabela do Anexo I, em parcela única, vedado o acréscimo de gratificação, adicional, abono, prêmio ou outra espécie remuneratória de carreira, salvo as verbas do art. 3º. Art. 14: aplica-se também à reserva, reforma e pensão.",
      enunciado: "Pela Lei 17.169/2012, o subsídio dos militares estaduais do Paraná",
      alternativas: [
        "é composto pelo soldo e pelas gratificações por tempo de serviço, que continuam a ser pagas à parte.",
        "é pago em parcela única, mas admite qualquer gratificação criada depois por decreto do Governador.",
        "vale só para os militares da ativa, e os da reserva continuam a receber pelo antigo sistema do soldo.",
        "é fixado em parcela única, sem gratificação, adicional ou prêmio, salvo as verbas do art. 3º da lei.",
        "é fixado pelo Comandante-Geral todo ano, de acordo com o desempenho e o tempo de serviço do militar.",
      ],
      correta: 3,
      explicacao:
        "O parágrafo único do art. 1º fixa o subsídio em parcela única e proíbe somar a ele gratificação, adicional, abono, prêmio ou outra espécie remuneratória de carreira, salvo as verbas listadas no art. 3º.",
      explicacaoErradas:
        "O soldo e a gratificação por tempo de serviço foram extintos (art. 11). Gratificação nova por decreto contraria a parcela única. A lei vale também para a reserva, a reforma e a pensão (art. 14). E o valor está na tabela da lei, não é fixado pelo comandante.",
      pegadinha: "Achar que o subsídio convive com as antigas gratificações do soldo.",
      conhecimento: "A Constituição do Paraná prevê o subsídio da PM e dos bombeiros no art. 45, § 15.",
    },
    {
      topico: "Subsídio",
      subassunto: "Diferença de subsídio e ADI 5.054",
      dificuldade: 5,
      raciocinio: "Art. 2º, § 1º: diferença paga como verba provisória, absorvida pelo desenvolvimento nos postos, implantação dos valores do Anexo I e revisões gerais anuais. ADI 5.054 (STF, 2020): inconstitucionais a expressão \"e revisões gerais anuais de subsídio\" do § 1º, o § 2º do art. 2º e o inciso VII do art. 11.",
      enunciado: "Na passagem para o subsídio, alguns militares passaram a receber a diferença de subsídio (art. 2º da Lei 17.169/2012). Considerando a decisão do STF na ADI 5.054, essa diferença",
      alternativas: [
        "é absorvida aos poucos pelas promoções, pela implantação dos valores do Anexo I e pelas revisões gerais anuais.",
        "é absorvida pelo desenvolvimento nos postos e pela implantação dos valores, não pelas revisões gerais anuais.",
        "foi julgada inconstitucional pelo STF, e os militares tiveram de devolver os valores recebidos a esse título.",
        "passou a ser incorporada ao subsídio de forma definitiva, sem nenhuma possibilidade de absorção no futuro.",
        "não pode ser reduzida nem absorvida, e só deixa de ser paga quando o militar passa para a reserva remunerada.",
      ],
      correta: 1,
      explicacao:
        "O STF declarou inconstitucional a expressão \"e revisões gerais anuais de subsídio\". A diferença continua a ser absorvida pelo desenvolvimento nos postos e pela implantação dos valores do Anexo I, mas não pelas revisões gerais anuais.",
      explicacaoErradas:
        "A absorção pelas revisões gerais caiu no STF. A diferença em si não foi julgada inconstitucional, nem houve devolução. Ela não foi incorporada de vez: continua a ser absorvida pelos outros caminhos. E não fica congelada até a reserva.",
      pegadinha: "Ler o texto antigo do § 1º sem a parte que o STF derrubou.",
      conhecimento: "O STF também derrubou o § 2º do art. 2º, que proibia reajustar a diferença de subsídio.",
    },
    {
      topico: "Subsídio",
      subassunto: "Verbas fora do subsídio",
      dificuldade: 4,
      raciocinio: "Art. 3º, XVI (Lei 21.586/2023): bônus pecuniário pela apreensão de arma de fogo. Art. 11: extintas a gratificação adicional por tempo de serviço (II), a indenização de serviço extraordinário (XVII), a gratificação de tempo integral (XXXIV) e o adicional de inatividade (XXXI).",
      enunciado: "Entre as verbas abaixo, a única que o militar estadual pode receber junto com o subsídio, pelo art. 3º da Lei 17.169/2012, é",
      alternativas: [
        "a gratificação adicional por tempo de serviço, que vinha do antigo regime de soldo.",
        "a indenização por serviço extraordinário, paga quando o militar trabalha além da escala.",
        "o adicional de inatividade, pago ao militar quando ele passa para a reserva remunerada.",
        "a gratificação de tempo integral, paga ao militar que se dedica só à atividade policial.",
        "o bônus pecuniário pela apreensão de arma de fogo, incluído nessa lei no ano de 2023.",
      ],
      correta: 4,
      explicacao:
        "O inciso XVI do art. 3º, incluído em 2023, prevê o bônus pecuniário pela apreensão de arma de fogo entre as verbas que o subsídio não exclui.",
      explicacaoErradas:
        "A gratificação adicional por tempo de serviço, a indenização de serviço extraordinário, o adicional de inatividade e a gratificação de tempo integral estão na lista do art. 11: foram absorvidas e extintas pelo subsídio.",
      pegadinha: "Achar que adicionais antigos sobreviveram à parcela única.",
      conhecimento: "Também ficam fora do subsídio a gratificação natalina, o terço de férias, a diária e o auxílio-alimentação.",
    },
    {
      topico: "Subsídio",
      subassunto: "Salário-família e ADI 5.054",
      dificuldade: 5,
      raciocinio: "Art. 11, VII, listava o salário-família entre as verbas extintas. ADI 5.054: o STF declarou inconstitucional o inciso VII. Constituição do Paraná, art. 45, § 8º, combinado com o art. 34, VI: salário-família é direito do militar estadual.",
      enunciado: "A Lei 17.169/2012 pôs o salário-família entre as verbas extintas pelo subsídio (art. 11, VII). Sobre esse ponto, é correto afirmar que",
      alternativas: [
        "o STF julgou a extinção inconstitucional, e o salário-família é direito do militar pela Constituição do Estado.",
        "o salário-família ficou extinto de vez, porque nenhuma verba pode mais ser paga fora da parcela única do subsídio.",
        "o salário-família continua a ser pago só aos militares da reserva remunerada e aos geradores de pensão.",
        "o STF manteve a extinção, mas permitiu pagar o salário-família como diária especial por atividade voluntária.",
        "o salário-família passou a ser descontado do subsídio, como a contribuição facultativa ao fundo de saúde.",
      ],
      correta: 0,
      explicacao:
        "Na ADI 5.054, o STF declarou inconstitucional o inciso VII do art. 11. O salário-família é direito do militar estadual, porque o art. 45, § 8º, da Constituição do Paraná manda aplicar a ele o art. 34, VI.",
      explicacaoErradas:
        "A parcela única não pode tirar um direito garantido pela Constituição. O direito não ficou só para a reserva e a pensão. O STF não manteve a extinção, e diária especial é outra verba. E o salário-família é pago, não descontado.",
      pegadinha: "Confiar na lista do art. 11 sem saber que o STF tirou o salário-família dela.",
      conhecimento: "Pela Constituição do Paraná, o salário-família é pago por dependente do trabalhador de baixa renda, nos termos da lei.",
    },
    {
      topico: "Indenização por remoção",
      subassunto: "Valor e comprovação",
      dificuldade: 4,
      raciocinio: "Art. 4º: indenização ao militar removido por interesse da Administração ou a pedido que muda de residência habitual para outro município em caráter permanente. § 1º: valor de uma remuneração mensal, dispensado comprovante de gastos. § 2º: exige comprovar a efetiva mudança de residência. § 3º: uma vez a cada dois anos, salvo interesse da Administração justificado. § 4º: não paga se não residia na cidade de origem.",
      enunciado: "Um soldado é removido, a pedido, para outro município e muda de residência para trabalhar ali de forma permanente. Pela Lei 17.169/2012, a indenização por remoção",
      alternativas: [
        "só é paga se ele apresentar as notas fiscais de todos os gastos com combustível e com bagagem.",
        "é paga só na remoção por interesse da Administração, e nunca na que é feita a pedido do militar.",
        "vale uma remuneração mensal, sem comprovar os gastos, mas ele precisa provar a mudança de casa.",
        "pode ser paga várias vezes no mesmo ano, desde que cada remoção seja para uma cidade diferente.",
        "é paga mesmo que ele já não morasse na cidade de origem, bastando que more na cidade de destino.",
      ],
      correta: 2,
      explicacao:
        "O § 1º do art. 4º fixa a indenização em uma remuneração mensal e dispensa comprovar os gastos. O § 2º exige provar a efetiva mudança de residência para o município de destino.",
      explicacaoErradas:
        "Não é preciso nota fiscal dos gastos. A remoção a pedido também dá direito (caput). A indenização só é paga uma vez a cada dois anos, salvo interesse da Administração justificado. E não é paga a quem não morava na cidade de origem (§ 4º).",
      pegadinha: "Confundir a dispensa de comprovar gastos com dispensa de provar a mudança.",
      conhecimento: "Residência é o município onde o militar fica depois da jornada de trabalho, ou seja, onde mora de fato (§ 9º).",
    },
    {
      topico: "Indenização por remoção",
      subassunto: "Exclusões e devolução",
      dificuldade: 5,
      raciocinio: "Art. 4º, § 6º (Lei 22.354/2025): restituição integral em dez dias úteis se, sem justificativa, não se apresentar na nova sede ou pedir exoneração antes de noventa dias de exercício. § 7º: não paga ao designado após o curso de formação. § 10: não devida ao militar temporário (CMT). § 3º: uma vez a cada dois anos.",
      enunciado: "Sobre a indenização por remoção na Lei 17.169/2012, com as mudanças de 2024 e 2025, assinale a afirmação correta.",
      alternativas: [
        "O militar que conclui o curso de formação e é mandado para cidade diferente da sua tem direito a ela.",
        "Quem pede exoneração antes de noventa dias de exercício na nova sede devolve tudo em dez dias úteis.",
        "O militar temporário do Corpo de Militares Temporários a recebe nas mesmas condições do efetivo.",
        "Ela pode ser paga todo ano, sem justificativa, mesmo quando a remoção é feita a pedido do militar.",
        "Quem não se apresenta na nova sede sem justificativa devolve só metade, em noventa dias corridos.",
      ],
      correta: 1,
      explicacao:
        "O § 6º do art. 4º obriga o militar a devolver toda a indenização, em dez dias úteis, se ele pedir exoneração antes de completar noventa dias de exercício na nova sede ou se não se apresentar nela sem justificativa.",
      explicacaoErradas:
        "Quem é designado depois do curso de formação não recebe (§ 7º). O militar temporário não tem direito (§ 10). A indenização só é paga uma vez a cada dois anos, salvo interesse da Administração justificado (§ 3º). E a devolução é integral, em dez dias úteis.",
      pegadinha: "Trocar os prazos: noventa dias de exercício e dez dias úteis para devolver.",
      conhecimento: "Na remoção para acompanhar cônjuge ou companheiro, é preciso provar que o outro não recebeu verba da mesma natureza (§ 5º).",
    },
    {
      topico: "Ressarcimento por funeral",
      subassunto: "Valor e quem recebe",
      dificuldade: 4,
      raciocinio: "Art. 5º: ressarcimento no valor de um subsídio do posto ou graduação. § 1º: cônjuge, companheiro ou, à falta destes, qualquer pessoa que comprove ter suportado as despesas. § 2º: requerimento, parcela única, atestado de óbito e nota fiscal em nome do requerente. § 3º: não é base para outras vantagens. § 4º: não devido para militar temporário.",
      enunciado: "Pela Lei 17.169/2012, o ressarcimento por funeral do militar estadual",
      alternativas: [
        "é pago só ao cônjuge, e nunca a outra pessoa, mesmo que ela comprove ter pagado as despesas.",
        "vale três subsídios do posto ou da graduação e é pago em parcelas mensais à família do militar falecido.",
        "é pago de ofício pela Corporação, sem requerimento, e serve de base para outras vantagens.",
        "vale um subsídio do posto ou graduação e, sem cônjuge ou companheiro, vai a quem pagou o funeral.",
        "é devido também na morte do militar temporário, se ele tiver mais de um ano de serviço prestado.",
      ],
      correta: 3,
      explicacao:
        "O art. 5º fixa o ressarcimento em um subsídio do posto ou da graduação. Pelo § 1º, recebe o cônjuge ou companheiro ou, na falta deles, qualquer pessoa que comprove ter pago as despesas.",
      explicacaoErradas:
        "Na falta de cônjuge ou companheiro, outra pessoa pode receber. O valor é de um subsídio, em parcela única. É preciso requerimento, e o ressarcimento não serve de base para outras vantagens. E não é devido na morte do militar temporário.",
      pegadinha: "Achar que só a família pode receber, quando vale a pessoa que pagou o funeral.",
      conhecimento: "O pedido vai com atestado de óbito, nota fiscal em nome de quem pede e comprovante do traslado, se houver.",
    },
    {
      topico: "Carreira",
      subassunto: "Classes e promoção",
      dificuldade: 5,
      raciocinio: "Art. 6º (Lei 22.187/2024): cinco classes para cada posto ou graduação. Art. 7º, § 2º: na promoção para o posto ou graduação superior, o militar ocupa a mesma classe. § 4º: promoção por classe a cada sete anos de efetivo exercício. O § 5º (progressão a cada dois anos) foi revogado.",
      enunciado: "Um terceiro-sargento está na classe 3 da sua graduação e é promovido a segundo-sargento. Pela Lei 17.169/2012, com a redação de 2024, ele",
      alternativas: [
        "fica na mesma classe 3 da nova graduação, e a promoção por classe ocorre a cada sete anos de exercício.",
        "volta para a classe 1 da nova graduação e só sobe de classe depois de dois anos de efetivo serviço.",
        "passa direto para a classe 5 da nova graduação, que é a última das cinco classes de cada graduação.",
        "fica na mesma classe 3, mas a promoção por classe passa a ocorrer a cada cinco anos de efetivo exercício.",
        "perde as classes, porque elas só existem nos postos dos oficiais, e não nas graduações das praças.",
      ],
      correta: 0,
      explicacao:
        "O § 2º do art. 7º diz que, na promoção para o posto ou a graduação de cima, o militar ocupa a mesma classe. O § 4º fixa a promoção por classe a cada sete anos de efetivo exercício.",
      explicacaoErradas:
        "Ele não volta para a classe 1, e a regra dos dois anos foi revogada. Não há salto para a classe 5. O prazo é de sete anos, não de cinco. E as cinco classes existem em cada posto e em cada graduação (art. 6º).",
      pegadinha: "Usar a regra antiga de progressão a cada dois anos, revogada em 2024.",
      conhecimento: "Progressões e promoções dependem de dinheiro no orçamento e de decreto do Governador no Diário Oficial (art. 7º, § 7º).",
    },
    {
      topico: "Subsídio",
      subassunto: "Teto, revisão e inativos",
      dificuldade: 4,
      raciocinio: "Art. 3º, § 2º: verbas do art. 3º não se incorporam aos proventos. Art. 9º: revisão geral anual nos mesmos moldes e índices dos demais servidores. Art. 10: teto do art. 37, XI, da CF. Art. 14: lei aplicada à reforma, reserva e pensão.",
      enunciado: "Assinale a afirmação de acordo com a Lei 17.169/2012.",
      alternativas: [
        "As verbas do art. 3º, como a diária e o terço de férias, se incorporam aos proventos da reserva remunerada.",
        "O subsídio tem revisão anual própria, com índice maior do que o dos demais servidores do Estado.",
        "O subsídio dos militares não se submete ao teto remuneratório previsto no art. 37, XI, da Constituição.",
        "A lei não se aplica aos militares da reserva remunerada, aos reformados nem aos geradores de pensão.",
        "O subsídio tem uma revisão geral anual, nos mesmos moldes e índices dos demais servidores estaduais.",
      ],
      correta: 4,
      explicacao:
        "O art. 9º diz que o subsídio tem revisão geral anual nos mesmos moldes e índices dos demais servidores estaduais.",
      explicacaoErradas:
        "As verbas do art. 3º não se incorporam aos proventos (§ 2º). Não há índice próprio maior. O subsídio respeita o teto do art. 37, XI (art. 10). E a lei vale também para a reserva, a reforma e a pensão (art. 14).",
      pegadinha: "Achar que as verbas pagas na ativa seguem para a aposentadoria do militar.",
      conhecimento: "Os proventos da reserva, da reforma e da pensão também respeitam o teto do art. 37, XI (art. 14, § 3º).",
    },
    {
      topico: "Carreira",
      subassunto: "Curso de formação de oficiais",
      dificuldade: 5,
      raciocinio: "Art. 13: o militar soldado de 1ª classe, cabo, 3º, 2º e 1º sargento e subtenente aprovado no curso de formação de oficiais continua a perceber o subsídio da sua graduação até ser promovido a aspirante a oficial. Art. 12: bolsa-auxílio é do aluno-soldado. Art. 13-A: militar temporário recebe vencimento.",
      enunciado: "Um cabo da PM é aprovado no curso de formação de oficiais. Pela Lei 17.169/2012, durante o curso, ele",
      alternativas: [
        "passa a receber bolsa-auxílio, no mesmo valor que é pago ao aluno-soldado no curso de formação.",
        "passa a receber o subsídio de aspirante a oficial desde o primeiro dia de aula do curso de oficiais.",
        "continua a receber o subsídio da sua graduação de cabo, até ser promovido a aspirante a oficial.",
        "passa a ser pago na forma de vencimento, como o militar do Corpo de Militares Temporários.",
        "fica sem remuneração, porque o curso de formação de oficiais é tratado como licença para estudo.",
      ],
      correta: 2,
      explicacao:
        "O art. 13 diz que a praça aprovada no curso de formação de oficiais continua a receber o subsídio da sua graduação até ser promovida a aspirante a oficial.",
      explicacaoErradas:
        "A bolsa-auxílio é do aluno-soldado (art. 12). O subsídio de aspirante só vem com a promoção a aspirante. O vencimento é do militar temporário (art. 13-A). E ele não fica sem remuneração.",
      pegadinha: "Achar que, ao virar aluno do curso de oficiais, a praça passa a receber bolsa como o aluno-soldado.",
      conhecimento: "A contribuição ao fundo de saúde dos militares (FASPM) é facultativa: 0,5% do subsídio, mais 0,2% por dependente, até 2% (art. 15).",
    },
  ],
};
