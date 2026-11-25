import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "leg-a04",
  resumo: {
    ideia:
      "A Lei de Drogas (Lei 11.343/2006) separa o usuário, que recebe medidas educativas e nunca prisão, do traficante, punido com pena alta. A prova cobra essa diferença, as penas de cada crime, os aumentos do art. 40 e as decisões do STF.",
    itens: [
      {
        termo: "O que é droga",
        faz: "Substância capaz de causar dependência que esteja na lista do Poder Executivo federal (Portaria 344/1998 da Anvisa). Sem essa lista, o crime não se completa: é uma norma penal em branco.",
      },
      {
        termo: "Porte para consumo (art. 28)",
        faz: "Comprar, guardar, ter em depósito, transportar ou trazer consigo droga para uso próprio. Penas: advertência, prestação de serviços à comunidade e curso educativo, por no máximo 5 meses (10 meses se reincidente). Nunca há prisão. Prescreve em 2 anos. Cultivar pequena quantidade para uso próprio tem as mesmas medidas.",
        pista: "Para saber se é uso ou tráfico, o juiz olha a natureza e a quantidade da droga, o local, as condições da ação, a vida e os antecedentes da pessoa.",
      },
      {
        termo: "Maconha: decisão do STF (Tema 506)",
        faz: "Portar maconha para uso próprio não é infração penal, mas continua proibido: a droga é apreendida e o juiz aplica advertência e curso educativo, sem efeito penal. Presume-se usuário quem tem até 40 gramas ou 6 plantas-fêmeas, até o Congresso legislar.",
        pista: "A presunção é relativa: com balança, porções embaladas ou contatos de compradores, pode haver flagrante por tráfico mesmo abaixo de 40 gramas, com justificativa detalhada do delegado.",
      },
      {
        termo: "Procedimento do usuário",
        faz: "Não se impõe prisão em flagrante. A pessoa é levada ao juiz ou assume o compromisso de comparecer, e lavra-se termo circunstanciado. O caso vai ao Juizado Especial Criminal, salvo se houver junto um crime dos arts. 33 a 37.",
      },
      {
        termo: "Tráfico (art. 33)",
        faz: "18 verbos (importar, vender, ter em depósito, transportar, trazer consigo, fornecer, ainda que de graça, entre outros). Pena: reclusão de 5 a 15 anos. Na mesma pena: matéria-prima e insumos, cultivo para tráfico, ceder local para o tráfico e vender a policial disfarçado, com indícios de crime anterior.",
      },
      {
        termo: "Induzir e uso compartilhado (art. 33, §§ 2º e 3º)",
        faz: "Induzir, instigar ou auxiliar alguém a usar droga: detenção de 1 a 3 anos. Oferecer droga de vez em quando, sem lucro, a pessoa do seu relacionamento, para usarem juntos: detenção de 6 meses a 1 ano, mais as medidas do art. 28.",
        pista: "Defender a legalização em passeata não é induzir ao uso (STF, ADI 4.274).",
      },
      {
        termo: "Tráfico privilegiado (art. 33, § 4º)",
        faz: "Pena reduzida de 1/6 a 2/3 se o agente for primário, de bons antecedentes, não se dedicar a atividades criminosas nem integrar organização criminosa. Não é crime hediondo e admite troca por penas restritivas de direitos.",
        pista: "A quantidade de droga, sozinha, não basta para negar a redução.",
      },
      {
        termo: "Outros crimes (arts. 34 a 39)",
        faz: "Maquinário para fabricar droga: 3 a 10 anos. Associação para o tráfico, de 2 ou mais pessoas: 3 a 10 anos. Financiar o tráfico: 8 a 20 anos. Informante: 2 a 6 anos. Prescrever droga por culpa: detenção de 6 meses a 2 anos. Conduzir embarcação ou aeronave depois de usar droga: detenção de 6 meses a 3 anos.",
        pista: "Carro sob efeito de droga não é o art. 39: é o crime do art. 306 do CTB.",
      },
      {
        termo: "Aumentos (arts. 40 e 40-A)",
        faz: "Art. 40: de 1/6 a 2/3 nos arts. 33 a 37, se o tráfico for internacional ou entre estados, se o agente usar função pública, se for perto de escola, hospital, presídio ou em transporte público, com violência ou arma, envolvendo criança ou adolescente, ou se o agente financiar o crime. Art. 40-A (2026): pena em dobro se o autor integrar organização criminosa ultraviolenta, grupo paramilitar ou milícia privada.",
        pista: "Para o tráfico entre estados ou para o exterior, basta provar o destino; não é preciso cruzar a divisa ou a fronteira.",
      },
      {
        termo: "Vedações e o que o STF derrubou",
        faz: "O art. 44 diz que tráfico, maquinário, associação, financiamento e informante são inafiançáveis e sem sursis, graça, indulto, anistia e liberdade provisória. O STF derrubou a proibição da liberdade provisória e a da troca por pena restritiva de direitos. Livramento condicional só após 2/3 da pena, e nunca para o reincidente específico.",
      },
      {
        termo: "Investigação",
        faz: "Para o flagrante basta o laudo de constatação, feito por perito oficial ou, na falta, por pessoa idônea. Inquérito: 30 dias com o indiciado preso e 90 dias solto, prazos que o juiz pode duplicar a pedido justificado do delegado, ouvido o MP. Com autorização judicial cabem infiltração de policiais e ação controlada. Tráfico internacional é julgado pela Justiça Federal.",
      },
      {
        termo: "Internação involuntária (art. 23-A)",
        faz: "Sem o consentimento do dependente, a pedido de familiar ou responsável legal ou, na falta deles, de servidor da saúde, da assistência social ou do Sisnad, nunca da segurança pública. Depende de decisão do médico e dura no máximo 90 dias. A família pode pedir o fim a qualquer tempo.",
      },
    ],
  },
  questoes: [
    {
      topico: "Usuário",
      subassunto: "Maconha para uso próprio (Tema 506)",
      dificuldade: 5,
      raciocinio: "Tema 506 do STF: portar maconha para uso próprio não é infração penal, mas é ilícito fora do Direito Penal: apreensão + notificação para ir ao juiz, com advertência e curso educativo, sem efeito penal. Até 40 g ou 6 plantas-fêmeas, presume-se usuário.",
      enunciado: "Numa abordagem, policiais encontram com um jovem 30 gramas de maconha, para consumo próprio, sem balança, embalagens ou outro sinal de venda. Pelo entendimento do STF, o correto é",
      alternativas: [
        "prender o jovem em flagrante pelo crime do art. 28 e levá-lo ao delegado de plantão.",
        "lavrar termo para o crime do art. 28, com pena de prestação de serviços à comunidade.",
        "liberar o jovem e devolver a droga, porque a conduta deixou de ser ilícita no país.",
        "apreender a droga e notificá-lo a ir ao juiz, que aplica medidas sem efeito penal.",
        "autuar o jovem por tráfico, porque a quantidade passa de 25 gramas de maconha.",
      ],
      correta: 3,
      explicacao:
        "No Tema 506, o STF decidiu que portar maconha para uso próprio não é infração penal, mas continua ilícito: a polícia apreende a droga e notifica a pessoa para ir ao juiz, que aplica advertência e curso educativo, sem nenhum efeito penal. Até 40 gramas, presume-se que a pessoa é usuária.",
      explicacaoErradas:
        "O usuário nunca é preso em flagrante. Para a maconha, a decisão fala só em advertência e curso educativo, e a conduta não é mais tratada como crime. A conduta continua ilícita, então a droga é apreendida, não devolvida. E o limite da presunção é de 40 gramas, não 25.",
      pegadinha: "Confundir \"não é crime\" com \"é permitido\": a maconha continua proibida e é apreendida.",
      conhecimento: "Para as outras drogas, o art. 28 continua sendo crime, com as três medidas da lei.",
    },
    {
      topico: "Usuário",
      subassunto: "Presunção relativa",
      dificuldade: 5,
      raciocinio: "A presunção de 40 g é relativa. Com sinais de venda (porções embaladas, balança, contatos de compradores), cabe flagrante por tráfico mesmo abaixo do limite, e o delegado deve justificar em detalhe; o juiz avalia na audiência de custódia.",
      enunciado: "Com uma pessoa são encontrados 20 gramas de maconha divididos em pequenas porções, uma balança de precisão e um celular com mensagens de encomendas. Segundo o STF, nesse caso",
      alternativas: [
        "não cabe prisão, porque a quantidade está abaixo de 40 gramas e o usuário é presumido.",
        "cabe flagrante por tráfico, e o delegado deve justificar em detalhe a decisão.",
        "cabe flagrante por tráfico só se a pessoa confessar a venda diante do delegado.",
        "a presunção de usuário é absoluta e impede qualquer investigação sobre a venda.",
        "cabe só termo circunstanciado, porque o limite de 40 gramas não foi ultrapassado.",
      ],
      correta: 1,
      explicacao:
        "A presunção de usuário até 40 gramas é relativa. Se houver sinais de venda, como porções embaladas, balança e registros de vendas, a polícia pode prender em flagrante por tráfico, e o delegado deve registrar uma justificativa detalhada, sem critérios subjetivos. O juiz confere essas razões na audiência de custódia.",
      explicacaoErradas:
        "Ficar abaixo de 40 gramas não impede o flagrante quando há sinais de venda. A confissão não é exigida. A presunção não é absoluta. E o termo circunstanciado é para o usuário, não para quem mostra sinais de venda.",
      pegadinha: "Achar que abaixo de 40 gramas nunca há tráfico: o limite é só uma presunção.",
      conhecimento: "O contrário também vale: acima de 40 gramas, o juiz pode concluir que a pessoa é usuária, se houver prova.",
    },
    {
      topico: "Tráfico",
      subassunto: "Uso compartilhado",
      dificuldade: 4,
      raciocinio: "Art. 33, § 3º: oferecer droga eventualmente, sem objetivo de lucro, a pessoa de seu relacionamento, para juntos consumirem. Detenção de 6 meses a 1 ano e multa, sem prejuízo das penas do art. 28.",
      enunciado: "Numa festa, Caio oferece, sem cobrar nada, um pouco de cocaína à namorada, para os dois usarem juntos. Foi a primeira vez. Caio responde por",
      alternativas: [
        "tráfico de drogas (art. 33), porque fornecer, ainda que de graça, está entre os verbos.",
        "induzimento ao uso de droga (art. 33, § 2º), com detenção de 1 a 3 anos e multa.",
        "nenhum crime, porque ele não cobrou nada e não teve nenhuma intenção de lucro.",
        "porte para consumo (art. 28), apenas, porque a droga era para o uso dos dois.",
        "oferta para uso conjunto (art. 33, § 3º), com detenção de 6 meses a 1 ano.",
      ],
      correta: 4,
      explicacao:
        "O art. 33, § 3º, prevê crime menor para quem oferece droga de vez em quando, sem lucro, a pessoa do seu relacionamento, para usarem juntos: detenção de 6 meses a 1 ano e multa, sem prejuízo das medidas do art. 28.",
      explicacaoErradas:
        "O § 3º é regra especial e afasta o tráfico do caput, desde que presentes todos os requisitos: oferta eventual, sem lucro, a pessoa do relacionamento, para uso conjunto. O § 2º trata de induzir ou instigar alguém a usar. A falta de lucro não torna o fato atípico. E o art. 28 não cobre o ato de oferecer a outra pessoa.",
      pegadinha: "Ver \"ainda que gratuitamente\" no art. 33 e marcar tráfico.",
      conhecimento: "Se a oferta for habitual ou a pessoa desconhecida, o § 3º não se aplica.",
    },
    {
      topico: "Tráfico",
      subassunto: "Tráfico privilegiado",
      dificuldade: 4,
      raciocinio: "§ 4º: redução de 1/6 a 2/3 para primário, de bons antecedentes, que não se dedique a atividades criminosas nem integre organização criminosa. Não é hediondo (LEP, art. 112, § 5º). A proibição de pena restritiva foi suspensa pelo Senado.",
      enunciado: "Sobre o tráfico privilegiado (art. 33, § 4º, da Lei 11.343/2006), é correto afirmar que",
      alternativas: [
        "não é hediondo e admite a troca da prisão por pena restritiva de direitos.",
        "reduz a pena de 1/3 a 2/3, desde que o agente seja primário e de bons antecedentes.",
        "exige só a primariedade, sem análise de dedicação a atividades criminosas.",
        "é equiparado a hediondo, porque continua sendo uma forma de tráfico de drogas.",
        "proíbe a troca da prisão por pena restritiva de direitos, como diz o texto da lei.",
      ],
      correta: 0,
      explicacao:
        "A Lei de Execução Penal (art. 112, § 5º) diz que o tráfico privilegiado não é hediondo, como já decidira o STF. E a expressão \"vedada a conversão em penas restritivas de direitos\" foi suspensa pelo Senado depois de o STF declará-la inconstitucional.",
      explicacaoErradas:
        "A redução é de 1/6 a 2/3. Além de primário e de bons antecedentes, o agente não pode se dedicar a atividades criminosas nem integrar organização criminosa. Não é hediondo. E a proibição da troca por pena restritiva já não vale, embora a frase ainda apareça no texto.",
      pegadinha: "Trocar a fração da redução (1/6 a 2/3) pela de outros benefícios (1/3 a 2/3).",
      conhecimento: "O art. 41 (colaboração voluntária) é que reduz a pena de 1/3 a 2/3.",
    },
    {
      topico: "Aumentos de pena",
      subassunto: "Transporte público e tráfico entre estados",
      dificuldade: 5,
      raciocinio: "Art. 40, III (transporte público): STF e STJ exigem venda dentro do transporte; só levar a droga não basta. Art. 40, V (entre estados): basta provar o destino em outro estado (Súmula 587 do STJ).",
      enunciado: "Num ônibus de linha interestadual, policiais rodoviários abordam um passageiro que levava 3 kg de cocaína para entregar em outro estado. Ele nada vendeu durante a viagem e foi preso antes de cruzar a divisa. Quanto aos aumentos do art. 40,",
      alternativas: [
        "incidem os dois, o do transporte público e o do tráfico entre estados da Federação.",
        "não incide nenhum, porque não houve venda no ônibus nem a divisa foi cruzada.",
        "incide o do tráfico entre estados, mas não o do transporte público, sem venda ali.",
        "incide só o do transporte público, porque o tráfico entre estados exige cruzar a divisa.",
        "incide o do tráfico internacional, porque a cocaína costuma vir de outros países.",
      ],
      correta: 2,
      explicacao:
        "Para o STF e o STJ, o aumento do transporte público só incide se o agente vender a droga dentro dele; usar o ônibus só para levar a droga não basta. Já o aumento do tráfico entre estados não exige que a divisa seja cruzada: basta provar que a droga ia para outro estado (Súmula 587 do STJ).",
      explicacaoErradas:
        "Sem venda no ônibus, não incide o aumento do transporte público. O tráfico entre estados não exige atravessar a divisa. E o tráfico internacional depende de prova de que a droga veio do exterior ou ia para lá, não de uma suposição sobre a origem da cocaína.",
      pegadinha: "Achar que basta o ônibus para aumentar a pena pelo transporte público.",
      conhecimento: "A Súmula 607 do STJ diz o mesmo para o tráfico internacional: basta provar o destino no exterior.",
    },
    {
      topico: "Aumentos de pena",
      subassunto: "Art. 40-A (2026)",
      dificuldade: 4,
      raciocinio: "Art. 40-A, incluído pela Lei 15.358/2026: penas dos arts. 33 a 37 em dobro se o crime for praticado por integrante de organização criminosa ultraviolenta, grupo paramilitar ou milícia privada, no contexto do marco legal do combate ao crime organizado.",
      enunciado: "Segundo o art. 40-A, incluído na Lei de Drogas em 2026,",
      alternativas: [
        "a pena do usuário (art. 28) passa a ser de detenção quando ele for reincidente.",
        "as penas dos arts. 33 a 37 aumentam de 1/6 a 2/3 se o tráfico for feito com arma.",
        "o tráfico perto de escola passa a ter pena aplicada em dobro, de 10 a 30 anos.",
        "o tráfico feito por funcionário público passa a ter a pena sempre aumentada em 2/3.",
        "as penas dos arts. 33 a 37 dobram se o autor for de milícia ou grupo paramilitar.",
      ],
      correta: 4,
      explicacao:
        "A Lei 15.358/2026, marco legal do combate ao crime organizado, incluiu o art. 40-A: as penas dos arts. 33 a 37 serão aplicadas em dobro se o crime for praticado por integrante de organização criminosa ultraviolenta, grupo paramilitar ou milícia privada.",
      explicacaoErradas:
        "O usuário continua sem pena de prisão. O aumento de 1/6 a 2/3 por arma é o do art. 40, IV, que já existia. O tráfico perto de escola e o do funcionário público continuam no art. 40, com aumento de 1/6 a 2/3.",
      pegadinha: "Confundir o novo art. 40-A (dobro) com os aumentos antigos do art. 40 (1/6 a 2/3).",
      conhecimento: "A mesma lei de 2026 incluiu aumento de 2/3 no Estatuto do Desarmamento para armas ligadas ao tráfico.",
    },
    {
      topico: "Investigação e processo",
      subassunto: "Prazos e laudo",
      dificuldade: 5,
      raciocinio: "Art. 50, § 1º: laudo de constatação basta para o flagrante (perito oficial ou pessoa idônea); § 2º: o mesmo perito pode fazer o definitivo. Art. 51: 30 dias preso, 90 solto; duplicáveis pelo juiz, ouvido o MP, a pedido justificado do delegado.",
      enunciado: "Na investigação de tráfico de drogas, é correto afirmar que",
      alternativas: [
        "o inquérito deve terminar em 10 dias se o indiciado estiver preso, como no CPP.",
        "os prazos de 30 e 90 dias podem ser duplicados pelo juiz, ouvido o MP.",
        "o perito que assina o laudo de constatação fica impedido de fazer o laudo definitivo.",
        "o flagrante só pode ser lavrado depois do laudo definitivo, assinado por dois peritos.",
        "o inquérito com indiciado solto deve terminar em 30 dias, sem chance de prorrogação.",
      ],
      correta: 1,
      explicacao:
        "Pelo art. 51, o inquérito termina em 30 dias com o indiciado preso e em 90 dias solto, e o juiz pode duplicar esses prazos, ouvido o MP, a pedido justificado do delegado.",
      explicacaoErradas:
        "O prazo de 10 dias é o do CPP, não o da Lei de Drogas. O perito do laudo de constatação pode participar do definitivo. Para o flagrante, basta o laudo de constatação, assinado por perito oficial ou, na falta, por pessoa idônea. Solto, o prazo é de 90 dias.",
      pegadinha: "Aplicar os prazos do CPP (10 e 30 dias) à Lei de Drogas.",
      conhecimento: "O laudo de constatação é um exame rápido que indica a natureza e a quantidade da droga.",
    },
    {
      topico: "Outros crimes",
      subassunto: "Conduzir após uso de droga",
      dificuldade: 4,
      raciocinio: "Art. 39 da Lei de Drogas: só embarcação ou aeronave, expondo a dano potencial a segurança de outros; detenção de 6 meses a 3 anos. Veículo automotor em via: art. 306 do CTB.",
      enunciado: "Um motorista dirige um carro na rodovia sob efeito de cocaína, com a capacidade psicomotora alterada. No mesmo dia, um piloto conduz uma lancha depois de usar droga, pondo em perigo os banhistas. Os crimes são, respectivamente,",
      alternativas: [
        "o do art. 39 da Lei de Drogas para os dois, porque ambos usaram droga antes de conduzir.",
        "o do art. 306 do CTB para os dois, porque ambos conduziam veículos com motor.",
        "o do art. 39 para o motorista, e o do art. 306 do CTB para o piloto da lancha.",
        "o do art. 306 do CTB para o motorista, e o do art. 39 da Lei de Drogas para o piloto.",
        "nenhum crime para o piloto, porque a lancha não está sujeita a lei de trânsito.",
      ],
      correta: 3,
      explicacao:
        "O art. 39 da Lei de Drogas trata só de embarcação ou aeronave conduzida depois do uso de droga, expondo outros a perigo: detenção de 6 meses a 3 anos, além da apreensão e da cassação da habilitação. O carro dirigido sob efeito de droga, com a capacidade alterada, é o crime do art. 306 do CTB.",
      explicacaoErradas:
        "O art. 39 não alcança veículo automotor em via terrestre, e o CTB não trata de lancha. Por isso as duas condutas não vão para a mesma lei, nem com os papéis invertidos. E o piloto responde pelo art. 39, mesmo fora das leis de trânsito.",
      pegadinha: "Achar que o art. 39 da Lei de Drogas vale para carro.",
      conhecimento: "O art. 306 do CTB tem pena de detenção de 6 meses a 3 anos, a mesma do art. 39.",
    },
    {
      topico: "Outros crimes",
      subassunto: "Associação para o tráfico",
      dificuldade: 5,
      raciocinio: "Art. 35 diz \"reiteradamente ou não\", mas STF e STJ exigem vínculo estável e permanente. União de uma só vez = concurso de pessoas no tráfico. Associação não é hediondo (STJ).",
      enunciado: "Dois amigos se juntam uma única vez para vender um lote de droga e, feita a venda, se separam, sem plano de continuar. Pelo entendimento dos tribunais superiores, eles respondem por",
      alternativas: [
        "tráfico em concurso de pessoas, mas não associação, que exige vínculo estável.",
        "tráfico e associação para o tráfico, porque a lei diz \"reiteradamente ou não\".",
        "só associação para o tráfico, que absorve o crime de tráfico praticado pelos dois.",
        "tráfico, mas não por associação, porque ela exige no mínimo três pessoas.",
        "organização criminosa, porque houve divisão de tarefas entre os dois amigos.",
      ],
      correta: 0,
      explicacao:
        "Apesar da expressão \"reiteradamente ou não\", STF e STJ exigem, para a associação do art. 35, um vínculo estável e permanente entre os agentes. A união de uma só vez, para um único crime, é só concurso de pessoas no tráfico.",
      explicacaoErradas:
        "Sem estabilidade, não há associação, mesmo com a frase \"reiteradamente ou não\". A associação não absorve o tráfico: quando existe, os crimes se somam. Ela exige só duas pessoas. E a organização criminosa exige quatro ou mais pessoas, estrutura ordenada e estabilidade.",
      pegadinha: "Levar ao pé da letra o \"reiteradamente ou não\" do art. 35.",
      conhecimento: "Para o STJ, a associação para o tráfico não é crime hediondo.",
    },
    {
      topico: "Prevenção e tratamento",
      subassunto: "Internação involuntária",
      dificuldade: 5,
      raciocinio: "Art. 23-A: involuntária = sem consentimento, a pedido de familiar ou responsável legal ou, na falta, de servidor da saúde, da assistência social ou do Sisnad, exceto da segurança pública; decisão do médico; máximo de 90 dias; a família pode pedir o fim a qualquer tempo.",
      enunciado: "Sobre a internação involuntária de dependente de drogas, considere: I. pode ser pedida pelo policial que encontra o dependente na rua, se não houver familiar; II. dura no máximo 90 dias, pelo tempo necessário à desintoxicação; III. deve ser feita depois da decisão formal do médico responsável; IV. a família só pode pedir o fim do tratamento depois de 30 dias. Estão corretos",
      alternativas: [
        "I e II, apenas.",
        "II e IV, apenas.",
        "II e III, apenas.",
        "I, II e III, apenas.",
        "II, III e IV, apenas.",
      ],
      correta: 2,
      explicacao:
        "Pelo art. 23-A, a internação involuntária depende de decisão formal do médico responsável e dura só o tempo necessário à desintoxicação, no máximo 90 dias.",
      explicacaoErradas:
        "O item I está errado: na falta de familiar, o pedido pode vir de servidor da saúde, da assistência social ou do Sisnad, mas a lei exclui expressamente os servidores da segurança pública. O item IV também está errado: a família pode pedir ao médico o fim do tratamento a qualquer tempo.",
      pegadinha: "Achar que o policial pode pedir a internação: a lei exclui a segurança pública.",
      conhecimento: "A internação voluntária, com consentimento, exige declaração escrita da pessoa de que optou por esse tratamento.",
    },
  ],
};
