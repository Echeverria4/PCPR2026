import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "leg-a03",
  resumo: {
    ideia:
      "O Estatuto do Desarmamento (Lei 10.826/2003) controla a compra, o registro e o porte de armas e define os crimes com armas de fogo. A prova cobra a diferença entre posse e porte, as penas de cada crime e quais deles são hediondos.",
    itens: [
      {
        termo: "Sinarm",
        faz: "Sistema Nacional de Armas, criado no Ministério da Justiça, no âmbito da Polícia Federal. Cadastra as armas e controla registros e autorizações. As armas das Forças Armadas e as de uso restrito ficam com o Comando do Exército.",
      },
      {
        termo: "Registro × porte",
        faz: "O registro (certificado) autoriza manter a arma dentro de casa ou no local de trabalho, se a pessoa for o titular ou responsável pelo estabelecimento. O porte autoriza andar com a arma fora desses lugares.",
        pista: "Para o STJ, a cabine do caminhão não é casa nem local de trabalho: arma ali é porte.",
      },
      {
        termo: "Compra de arma permitida (arts. 4º e 28)",
        faz: "Declarar a efetiva necessidade e provar idoneidade (certidões negativas, sem inquérito ou processo criminal), ocupação lícita, residência certa, capacidade técnica e aptidão psicológica. Idade mínima: 25 anos, salvo para Forças Armadas, polícias do art. 144, Força Nacional, guardas municipais, ABIN e GSI, polícias legislativas, agentes prisionais e auditores da Receita e do Trabalho.",
        pista: "Vigilante, atirador desportivo e servidor de segurança de tribunal não estão na exceção dos 25 anos.",
      },
      {
        termo: "Porte funcional (art. 6º)",
        faz: "O porte é proibido no país, salvo para quem a lei lista: Forças Armadas; polícias do art. 144, I a V, da CF e Força Nacional; guardas municipais; ABIN e GSI; polícias da Câmara e do Senado; agentes e guardas prisionais, escoltas e guardas portuárias; empresas de segurança e transporte de valores; desportistas; auditores e analistas da Receita e auditores do Trabalho; servidores de segurança de tribunais e do MP.",
      },
      {
        termo: "Posse irregular e omissão de cautela (arts. 12 e 13)",
        faz: "Posse irregular de arma de uso permitido em casa ou no trabalho: detenção de 1 a 3 anos. Omissão de cautela, que deixa menor de 18 anos ou pessoa com deficiência mental pegar a arma: detenção de 1 a 2 anos. Na mesma pena, o dono ou diretor de empresa de segurança ou de transporte de valores que não registra ocorrência e não avisa a Polícia Federal da perda ou furto da arma em 24 horas.",
      },
      {
        termo: "Porte ilegal de uso permitido e disparo (arts. 14 e 15)",
        faz: "Porte ilegal de arma permitida: reclusão de 2 a 4 anos. Disparo em lugar habitado, nas suas adjacências ou em via pública: reclusão de 2 a 4 anos, desde que o tiro não tenha como fim outro crime.",
        pista: "Disparo para matar alguém: fica só a tentativa de homicídio (o art. 15 é subsidiário).",
      },
      {
        termo: "Uso restrito e proibido (art. 16)",
        faz: "Arma de uso restrito: reclusão de 3 a 6 anos. Na mesma pena, quem raspa ou anda com arma de numeração raspada (de qualquer tipo), modifica a arma, tem artefato explosivo ou incendiário, entrega arma, munição ou explosivo a criança ou adolescente, ou recarrega munição sem autorização. Se a arma for de uso proibido: reclusão de 4 a 12 anos, e o crime é hediondo.",
        pista: "Numeração raspada leva ao art. 16 mesmo que a arma seja de uso permitido.",
      },
      {
        termo: "Comércio e tráfico internacional (arts. 17 e 18)",
        faz: "Comércio ilegal em atividade comercial ou industrial, inclusive clandestina e feita em casa: reclusão de 6 a 12 anos. Tráfico internacional (importar, exportar, favorecer a entrada ou saída): reclusão de 8 a 16 anos. Os dois punem também a venda a policial disfarçado, se já havia indícios de crime. Ambos são hediondos.",
      },
      {
        termo: "Aumentos de pena (arts. 19, 20 e 21-A)",
        faz: "Art. 19: metade a mais nos arts. 17 e 18, se a arma for de uso proibido ou restrito. Art. 20: metade a mais nos arts. 14 a 18, se o autor for integrante dos órgãos e empresas dos arts. 6º, 7º e 8º ou reincidente específico. Art. 21-A (desde 2026): 2/3 a mais nos arts. 12, 14 e 16, se o crime estiver ligado ao tráfico de drogas.",
      },
      {
        termo: "O que o STF derrubou",
        faz: "Na ADI 3.112, o STF declarou inconstitucionais a regra de que os arts. 14 e 15 são inafiançáveis e o art. 21, que proibia liberdade provisória nos arts. 16, 17 e 18.",
      },
      {
        termo: "Jurisprudência",
        faz: "Os crimes de posse e porte são de perigo abstrato: arma desmuniciada já configura o crime. Se o laudo provar que a arma é totalmente inapta para disparar, não há crime. Para o STJ, manter em casa arma de uso permitido com registro vencido é só infração administrativa.",
      },
    ],
  },
  questoes: [
    {
      topico: "Posse e porte",
      subassunto: "Arma na cabine do caminhão",
      dificuldade: 5,
      raciocinio: "Art. 12 só vale dentro da residência ou do local de trabalho de que a pessoa é titular ou responsável. Para o STJ, o caminhão não é extensão da casa nem local de trabalho: arma ali é porte (art. 14).",
      enunciado: "Em fiscalização numa rodovia, policiais encontram, na cabine do caminhão que o motorista dirige a trabalho, um revólver de uso permitido registrado em nome dele. O motorista não tem porte. Ele responde por",
      alternativas: [
        "posse irregular (art. 12), porque a cabine do caminhão é o local de trabalho do motorista.",
        "nenhum crime, porque a arma está registrada em nome dele e ele dirige o veículo a trabalho.",
        "porte ilegal de arma de uso permitido (art. 14), porque a cabine não equivale à casa dele.",
        "infração só administrativa, porque o registro permite levar a arma junto em viagens.",
        "porte ilegal de arma de uso restrito (art. 16), porque o transporte foi em rodovia federal.",
      ],
      correta: 2,
      explicacao:
        "O registro só autoriza manter a arma em casa ou no local de trabalho de que a pessoa é titular ou responsável. Para o STJ, o caminhão não é extensão da residência nem local de trabalho para esse fim: levar a arma ali, sem porte, configura o art. 14.",
      explicacaoErradas:
        "A cabine não é tratada como local de trabalho no sentido do art. 12. O registro não substitui o porte. O registro não permite andar com a arma fora de casa. E o revólver é de uso permitido; o lugar da abordagem não muda o tipo da arma.",
      pegadinha: "Achar que o caminhão é o \"local de trabalho\" do motorista e marcar posse irregular.",
      conhecimento: "Posse = arma guardada em casa ou no trabalho. Porte = arma levada fora desses lugares.",
    },
    {
      topico: "Crimes do Estatuto",
      subassunto: "Numeração raspada",
      dificuldade: 4,
      raciocinio: "Art. 16, § 1º, IV: portar, possuir, adquirir, transportar ou fornecer arma com numeração raspada, suprimida ou adulterada, com pena de 3 a 6 anos, seja qual for o tipo da arma.",
      enunciado: "Em busca autorizada pela Justiça, policiais encontram na casa de Pedro uma pistola de uso permitido com a numeração raspada. Pedro responde por",
      alternativas: [
        "porte ilegal de arma de uso permitido (art. 14), com reclusão de 2 a 4 anos.",
        "posse irregular de arma de uso permitido (art. 12), porque a arma estava em casa.",
        "posse de arma de uso proibido (art. 16, § 2º), com reclusão de 4 a 12 anos.",
        "nenhum crime, se provar que comprou a pistola já com a numeração raspada.",
        "crime do art. 16, § 1º, IV, com pena de 3 a 6 anos, mesmo sendo arma permitida.",
      ],
      correta: 4,
      explicacao:
        "O art. 16, § 1º, IV, pune com a pena do art. 16 (reclusão de 3 a 6 anos) quem possui ou porta arma com numeração, marca ou sinal de identificação raspado, suprimido ou adulterado. Não importa se a arma é de uso permitido.",
      explicacaoErradas:
        "Os arts. 12 e 14 cedem lugar à regra especial do § 1º, IV. O § 2º, de 4 a 12 anos, é para arma de uso proibido, o que não é o caso. E possuir a arma raspada já é crime, mesmo que outra pessoa tenha raspado.",
      pegadinha: "Olhar só o tipo da arma (permitida) e esquecer a numeração raspada.",
      conhecimento: "O inciso I do mesmo § 1º pune quem suprime ou altera a marca ou a numeração.",
    },
    {
      topico: "Jurisprudência",
      subassunto: "Registro vencido",
      dificuldade: 5,
      raciocinio: "STJ (Corte Especial): manter em casa arma de uso permitido com registro vencido não é o crime do art. 12; é irregularidade administrativa. Não vale para porte.",
      enunciado: "José mantém em casa, há anos, uma pistola de uso permitido cujo registro venceu e não foi renovado. Segundo o entendimento do STJ, José",
      alternativas: [
        "comete posse irregular (art. 12), porque o registro vencido equivale à falta de registro.",
        "não comete o crime do art. 12, mas sofre medidas administrativas, como a apreensão.",
        "comete porte ilegal (art. 14), porque a arma deixou de estar regular perante o Sinarm.",
        "comete o crime do art. 16, porque a arma sem registro válido passa a ser de uso restrito.",
        "não comete crime algum e pode até sair de casa com a arma até renovar o registro.",
      ],
      correta: 1,
      explicacao:
        "Para o STJ, a posse de arma de uso permitido com registro vencido, dentro de casa, não é crime: a pessoa já mostrou ao Estado que tem a arma, e a falta de renovação é questão administrativa, resolvida com apreensão e multa.",
      explicacaoErradas:
        "O STJ não iguala registro vencido à falta de registro na posse. Arma em casa não é porte. O registro vencido não muda o tipo da arma. E sair de casa com ela seria porte ilegal: o entendimento vale só para a posse.",
      pegadinha: "Estender o entendimento ao porte: com o registro vencido, andar com a arma fora de casa é crime.",
      conhecimento: "O registro é o documento do Sinarm que comprova que a arma está ligada àquela pessoa.",
    },
    {
      topico: "Jurisprudência",
      subassunto: "Perigo abstrato",
      dificuldade: 4,
      raciocinio: "Posse e porte são crimes de perigo abstrato: não exigem perigo real a alguém. Arma desmuniciada configura. Laudo de ineficácia absoluta afasta o crime. Munição sozinha, em regra, configura.",
      enunciado: "Sobre a natureza dos crimes de posse e porte de arma de fogo, é correto afirmar que",
      alternativas: [
        "são de perigo abstrato, e por isso o porte de arma desmuniciada já configura o crime.",
        "exigem perigo concreto, isto é, prova de que alguém ficou exposto a risco real.",
        "não se configuram com arma desmuniciada, porque ela não pode disparar naquele momento.",
        "se configuram mesmo se o laudo provar que a arma é totalmente inapta para disparar.",
        "nunca se configuram com munição sozinha, sem arma, por falta de qualquer perigo.",
      ],
      correta: 0,
      explicacao:
        "STF e STJ entendem que os crimes do Estatuto são de perigo abstrato: a lei presume o risco. Por isso, o porte de arma desmuniciada, ou só de munição, já configura o crime.",
      explicacaoErradas:
        "Não se exige risco real a uma pessoa. A arma desmuniciada pode ser municiada a qualquer momento, e o crime existe. Mas, se o laudo provar a ineficácia absoluta, não há crime, porque a arma não oferece nenhum perigo. A munição isolada, em regra, também configura o crime.",
      pegadinha: "Achar que arma sem bala não é crime: o perigo é presumido pela lei.",
      conhecimento: "Em casos raros, os tribunais aceitam a insignificância para pouquíssima munição sem arma, conforme o caso concreto.",
    },
    {
      topico: "Crimes do Estatuto",
      subassunto: "Disparo de arma de fogo",
      dificuldade: 5,
      raciocinio: "Art. 15: disparo em lugar habitado ou via pública, \"desde que essa conduta não tenha como finalidade a prática de outro crime\". Atirou para matar: tentativa de homicídio absorve o disparo.",
      enunciado: "Rogério, que tem porte regular, atirou em via pública contra um desafeto, querendo matá-lo, mas errou o alvo, e ninguém foi atingido. Rogério responde por",
      alternativas: [
        "disparo de arma de fogo (art. 15) e tentativa de homicídio, somando as penas dos dois.",
        "só disparo de arma de fogo, porque ninguém foi atingido e não houve resultado.",
        "nenhum crime, porque tinha porte regular e o tiro não acertou a vítima.",
        "tentativa de homicídio, e o disparo fica absorvido, porque o art. 15 é subsidiário.",
        "só porte ilegal, porque o porte deixa de valer quando a arma é usada em crime.",
      ],
      correta: 3,
      explicacao:
        "O art. 15 só se aplica se o disparo não tiver como finalidade outro crime. Como Rogério atirou para matar, responde por tentativa de homicídio, e o disparo não é punido à parte.",
      explicacaoErradas:
        "Não há soma, porque o próprio art. 15 se afasta quando o tiro visa outro crime. A falta de resultado não muda a intenção de matar, que gera tentativa. O porte regular não autoriza atirar em ninguém. E o porte era regular: o uso em crime não o torna, por si, porte ilegal.",
      pegadinha: "Somar disparo e tentativa de homicídio, sem ler a ressalva final do art. 15.",
      conhecimento: "Tiros para o alto em via pública, sem querer atingir ninguém, configuram o art. 15.",
    },
    {
      topico: "Crimes do Estatuto",
      subassunto: "Comércio ilegal",
      dificuldade: 5,
      raciocinio: "Art. 17, § 1º: equipara-se à atividade comercial qualquer comércio irregular ou clandestino, inclusive em residência. § 2º: venda a policial disfarçado, com indícios de crime anterior. Pena de 6 a 12 anos; hediondo.",
      enunciado: "Há meses, Leandro vende armas de uso permitido, de forma clandestina, na garagem de casa. Investigado, vendeu uma pistola a um policial disfarçado, quando já havia provas razoáveis das vendas anteriores. Leandro responde por",
      alternativas: [
        "porte ilegal (art. 14), porque não tem loja aberta nem empresa registrada para vender armas.",
        "nenhum crime na venda ao policial, porque houve flagrante preparado pela polícia.",
        "comércio ilegal (art. 17), crime hediondo, ainda que as vendas sejam feitas em casa.",
        "comércio ilegal, com a pena aumentada da metade por serem armas de uso permitido.",
        "tráfico internacional de arma (art. 18), porque vendeu armas de forma habitual.",
      ],
      correta: 2,
      explicacao:
        "O § 1º do art. 17 equipara à atividade comercial qualquer comércio irregular ou clandestino, inclusive o exercido em residência. O § 2º pune a venda a policial disfarçado quando há elementos razoáveis de conduta criminal anterior. Pena de 6 a 12 anos; o crime é hediondo.",
      explicacaoErradas:
        "Não é preciso ter loja, porque a lei alcança o comércio clandestino. A lei prevê expressamente a venda ao agente disfarçado, com indícios prévios, então não se trata de flagrante preparado. O aumento da metade (art. 19) é para armas de uso proibido ou restrito. Não houve entrada nem saída do país.",
      pegadinha: "Achar que a venda ao policial disfarçado é sempre flagrante preparado e, por isso, não é crime.",
      conhecimento: "A figura do agente disfarçado veio com o Pacote Anticrime (Lei 13.964/2019).",
    },
    {
      topico: "Penas e aumentos",
      subassunto: "Art. 21-A (2026)",
      dificuldade: 4,
      raciocinio: "Art. 21-A, incluído em 2026: aumento de 2/3 nos arts. 12, 14 e 16 ligados ao tráfico de drogas. Art. 19: metade nos arts. 17 e 18 com arma proibida ou restrita. Art. 20: metade nos arts. 14 a 18 por integrante dos órgãos ou reincidente específico.",
      enunciado: "O art. 21-A, incluído no Estatuto do Desarmamento em 2026, aumenta de 2/3 a pena",
      alternativas: [
        "dos arts. 12, 14 e 16, quando o crime estiver ligado ao tráfico de drogas.",
        "dos arts. 17 e 18, quando a arma, o acessório ou a munição forem de uso restrito.",
        "de todos os crimes do Estatuto, quando o autor for policial ou guarda prisional.",
        "do disparo de arma de fogo (art. 15), quando ocorrer perto de uma escola.",
        "dos arts. 12 e 13, quando a vítima do descuido for criança ou adolescente.",
      ],
      correta: 0,
      explicacao:
        "A Lei 15.358/2026 incluiu o art. 21-A: nos arts. 12, 14 e 16, a pena aumenta de 2/3 se o crime for praticado em concurso com crime da Lei de Drogas, estiver diretamente ligado ao comércio de drogas ou se a arma foi usada para assegurar a venda.",
      explicacaoErradas:
        "O aumento nos arts. 17 e 18 por arma de uso proibido ou restrito é o do art. 19, de metade. O aumento por ser integrante dos órgãos de segurança é o do art. 20, também de metade, e só para os arts. 14 a 18. Não há aumento específico para disparo perto de escola nem para o descuido com criança.",
      pegadinha: "Trocar as frações: arts. 19 e 20 = metade; art. 21-A = 2/3.",
      conhecimento: "A mesma lei de 2026 criou o marco legal do combate ao crime organizado e o crime de domínio social estruturado.",
    },
    {
      topico: "Registro e aquisição",
      subassunto: "Idade mínima",
      dificuldade: 5,
      raciocinio: "Art. 28: menor de 25 anos não compra arma, salvo integrantes dos incisos I, II, III, V, VI, VII e X do art. 6º. Fora: VIII (segurança privada), IX (desportistas) e XI (tribunais e MP).",
      enunciado: "Pelo art. 28 do Estatuto do Desarmamento, pode adquirir arma de fogo, mesmo tendo menos de 25 anos,",
      alternativas: [
        "o vigilante de empresa de segurança privada, com 22 anos de idade.",
        "o atirador desportivo filiado a clube regular, com 21 anos de idade.",
        "o servidor do Ministério Público em função de segurança, com 24 anos.",
        "o empresário de 24 anos que comprove a efetiva necessidade da arma.",
        "o policial rodoviário federal que tomou posse com 23 anos de idade.",
      ],
      correta: 4,
      explicacao:
        "O art. 28 proíbe a compra por menor de 25 anos, mas ressalva os integrantes dos incisos I, II, III, V, VI, VII e X do art. 6º. O inciso II abrange os órgãos do art. 144, I a V, da Constituição, entre eles a PRF.",
      explicacaoErradas:
        "Os vigilantes de empresas de segurança (inciso VIII), os desportistas (inciso IX) e os servidores de segurança de tribunais e do MP (inciso XI) não estão na ressalva. O particular precisa ter 25 anos, mesmo que prove a efetiva necessidade.",
      pegadinha: "Achar que todo mundo que tem porte pelo art. 6º escapa da idade mínima.",
      conhecimento: "Além da idade, a compra exige idoneidade, ocupação lícita, residência certa, capacidade técnica e aptidão psicológica.",
    },
    {
      topico: "Crimes do Estatuto",
      subassunto: "Omissão de cautela",
      dificuldade: 4,
      raciocinio: "Art. 13: deixar menor de 18 ou pessoa com deficiência mental pegar a arma, detenção de 1 a 2 anos. Parágrafo único: empresa de segurança ou transporte de valores que não registra ocorrência e não avisa a PF em 24 horas.",
      enunciado: "Sobre o crime de omissão de cautela (art. 13 do Estatuto), é correto afirmar que",
      alternativas: [
        "alcança quem deixa a arma ao alcance de pessoa idosa, que dela se apodera em casa.",
        "pune também o dono de empresa de segurança que não avisa a PF do furto em 24 horas.",
        "tem pena de reclusão de 2 a 4 anos, igual à do porte ilegal de arma de uso permitido.",
        "dá à empresa de segurança 48 horas para comunicar o furto da arma à Polícia Federal.",
        "só existe se o menor disparar a arma e ferir alguém com ela dentro da casa.",
      ],
      correta: 1,
      explicacao:
        "O parágrafo único do art. 13 pune, com a mesma pena (detenção de 1 a 2 anos), o proprietário ou diretor responsável de empresa de segurança e transporte de valores que deixa de registrar ocorrência e de comunicar à Polícia Federal a perda, furto, roubo ou extravio de arma, acessório ou munição nas primeiras 24 horas.",
      explicacaoErradas:
        "A lei protege o menor de 18 anos e a pessoa com deficiência mental, não o idoso. A pena é de detenção de 1 a 2 anos. O prazo é de 24 horas. E o crime não exige disparo nem lesão: basta que o menor ou a pessoa com deficiência se apodere da arma.",
      pegadinha: "Trocar 24 por 48 horas ou incluir o idoso entre as pessoas protegidas.",
      conhecimento: "O caput é um crime por descuido (falta de cautela), com pena de detenção.",
    },
    {
      topico: "Penas e aumentos",
      subassunto: "Art. 16 e decisões do STF",
      dificuldade: 5,
      raciocinio: "I: ADI 3.112 derrubou o art. 21. II: art. 16, § 2º, 4 a 12 e hediondo. III: o § 1º, V, pune vender, entregar ou fornecer, ainda que de graça, a criança ou adolescente. IV: caput do art. 16, 3 a 6.",
      enunciado: "Considere: I. o art. 21, que proibia liberdade provisória nos crimes dos arts. 16, 17 e 18, foi declarado inconstitucional pelo STF; II. a posse ou o porte de arma de uso proibido tem pena de 4 a 12 anos e é crime hediondo; III. entregar de graça munição de uso permitido a um adolescente não é crime do Estatuto, porque não houve venda; IV. o porte de arma de uso restrito tem pena de 3 a 6 anos. Estão corretos",
      alternativas: [
        "I e II, apenas.",
        "II e III, apenas.",
        "III e IV, apenas.",
        "I, II e IV, apenas.",
        "II, III e IV, apenas.",
      ],
      correta: 3,
      explicacao:
        "Na ADI 3.112, o STF derrubou a proibição de liberdade provisória do art. 21. O art. 16, § 2º, pune a arma de uso proibido com 4 a 12 anos, e a Lei 8.072/1990 o torna hediondo. O caput do art. 16 tem pena de 3 a 6 anos.",
      explicacaoErradas:
        "O item III está errado: o art. 16, § 1º, V, pune quem vende, entrega ou fornece, ainda que gratuitamente, arma, acessório, munição ou explosivo a criança ou adolescente, com a pena do art. 16.",
      pegadinha: "Ler só \"vender\" e esquecer \"entregar ou fornecer, ainda que gratuitamente\".",
      conhecimento: "Na mesma ação, o STF também derrubou a regra que tornava inafiançáveis o porte ilegal (art. 14) e o disparo (art. 15).",
    },
  ],
};
