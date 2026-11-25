import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "leg-a11",
  resumo: {
    ideia:
      "Lei seca é o texto da lei como está escrito. Nesta aula ficam os detalhes que a prova cobra ao pé da letra: penas, prazos e palavras-chave de cada lei do edital, já com as mudanças até 2026.",
    itens: [
      {
        termo: "Hediondos (Lei 8.072, arts. 2º e 3º)",
        faz: "Crimes hediondos, tortura, tráfico e terrorismo não têm anistia, graça, indulto nem fiança. Na sentença, o juiz decide de forma fundamentada se o réu pode apelar em liberdade. Prisão temporária: 30 dias, prorrogáveis por mais 30 em caso de extrema e comprovada necessidade. A União mantém presídios de segurança máxima para condenados de alta periculosidade.",
      },
      {
        termo: "Drogas: financiar, informar e prescrever (Lei 11.343, arts. 36 a 38)",
        faz: "Financiar ou custear o tráfico: reclusão de 8 a 20 anos. Colaborar como informante com grupo de tráfico: reclusão de 2 a 6 anos. Prescrever ou ministrar droga por culpa, sem necessidade ou em dose excessiva: detenção de 6 meses a 2 anos, e o juiz avisa o conselho da profissão.",
        pista: "O informante que já faz parte da associação responde pelo art. 35, não pelo art. 37.",
      },
      {
        termo: "Crimes no procedimento (Lei 12.850, arts. 18 a 21)",
        faz: "Revelar a identidade, fotografar ou filmar o colaborador sem autorização prévia por escrito: 1 a 3 anos. Acusar falsamente um inocente a pretexto de colaborar: 1 a 4 anos. Quebrar o sigilo de ação controlada ou infiltração: 1 a 4 anos. Recusar ou omitir dados requisitados pelo juiz, MP ou delegado: 6 meses a 2 anos.",
      },
      {
        termo: "Preso exibido e agente sem nome (Lei 13.869, arts. 13 e 16)",
        faz: "Constranger o preso, com violência, grave ameaça ou redução da resistência, a se exibir à curiosidade pública, a passar por situação vexatória ou a produzir prova contra si ou contra outro: detenção de 1 a 4 anos, mais a pena da violência. Deixar de se identificar ou se identificar com nome falso ao preso na captura: 6 meses a 2 anos.",
        pista: "Todo crime da lei exige a finalidade de prejudicar, beneficiar ou agir por capricho ou satisfação pessoal (art. 1º, § 1º).",
      },
      {
        termo: "Pessoa idosa: omissão e abandono (Lei 10.741, arts. 97 e 98)",
        faz: "Deixar de socorrer pessoa idosa em perigo, quando possível sem risco pessoal: detenção de 6 meses a 1 ano; a pena aumenta de metade se resulta lesão grave e é triplicada se resulta morte. Abandonar a pessoa idosa em hospital ou casa de longa permanência, ou não prover suas necessidades básicas quando obrigado: detenção de 6 meses a 3 anos.",
      },
      {
        termo: "Nazismo e símbolos (Lei 7.716, art. 20, § 1º)",
        faz: "Fabricar, vender, distribuir ou divulgar símbolos, emblemas, ornamentos, distintivos ou propaganda com a cruz suástica ou gamada, para divulgar o nazismo: reclusão de 2 a 5 anos e multa. O art. 20 básico (praticar, induzir ou incitar a discriminação) tem reclusão de 1 a 3 anos.",
        pista: "Se o crime for pela imprensa ou pela internet, o juiz pode mandar recolher o material e tirar páginas do ar, até antes do inquérito.",
      },
      {
        termo: "Formas de violência (Lei 11.340, art. 7º)",
        faz: "Física (ofende o corpo ou a saúde), psicológica (dano emocional, controle, humilhação, vigilância), sexual (relação forçada, impedir contraceptivo, forçar casamento, gravidez ou aborto), patrimonial (reter, subtrair ou destruir bens, documentos e instrumentos de trabalho), moral (calúnia, difamação ou injúria) e, desde 2026, vicária (atingir pessoas próximas para ferir a mulher).",
      },
      {
        termo: "Bebida a menores (ECA, art. 243)",
        faz: "Vender, fornecer, servir, ministrar ou entregar, mesmo de graça, bebida alcoólica a criança ou adolescente: detenção de 2 a 4 anos e multa, se não for crime mais grave. Desde a Lei 13.106/2015 é crime do ECA, e a antiga contravenção penal foi revogada.",
      },
      {
        termo: "Corrupção de menores (ECA, art. 244-B)",
        faz: "Corromper ou facilitar a corrupção de menor de 18 anos, praticando infração penal com ele ou induzindo-o a praticá-la: reclusão de 1 a 4 anos. Vale também por meio eletrônico. A pena aumenta de um terço se a infração for hedionda.",
        pista: "Súmula 500 do STJ: o crime é formal e não depende de prova de que o menor foi de fato corrompido.",
      },
      {
        termo: "Trabalho e igualdade racial (Lei 12.288, arts. 39 e 44)",
        faz: "O poder público promove igualdade de oportunidades no trabalho para a população negra, inclusive nas contratações do setor público, e incentiva medidas parecidas nas empresas. Desde 2023, os registros administrativos de órgãos públicos e de empregadores privados têm campo para o grupo étnico-racial do trabalhador, pela autoclassificação. Filmes e programas de TV devem dar oportunidades de emprego a atores, figurantes e técnicos negros.",
      },
    ],
  },
  questoes: [
    {
      topico: "Lei de Drogas",
      subassunto: "Financiador e informante",
      dificuldade: 5,
      raciocinio: "Art. 36 da Lei 11.343: financiar ou custear os crimes dos arts. 33, caput e § 1º, e 34, reclusão de 8 a 20 anos. Art. 37: colaborar como informante com grupo, organização ou associação destinados a esses crimes, reclusão de 2 a 6 anos. O informante que integra a associação responde pelo art. 35.",
      enunciado: "Um empresário paga, mês a mês, a compra das drogas que um grupo revende. Um vizinho, que não integra o grupo, avisa os traficantes sempre que vê viaturas chegando. Pela Lei 11.343/2006,",
      alternativas: [
        "os dois respondem por associação para o tráfico, com a mesma pena, por ajudarem o grupo.",
        "o empresário é partícipe do tráfico do art. 33, e o vizinho só comete contravenção penal.",
        "o empresário responde pelo art. 36 (8 a 20 anos), e o vizinho pelo art. 37 (2 a 6 anos).",
        "o empresário responde pelo art. 37 (2 a 6 anos), e o vizinho pelo art. 36 (8 a 20 anos).",
        "o vizinho só responde se receber dinheiro, pois o art. 37 exige que o informante lucre.",
      ],
      correta: 2,
      explicacao:
        "Quem financia ou custeia o tráfico comete o crime próprio do art. 36, com reclusão de 8 a 20 anos, pena maior que a do próprio tráfico. Quem colabora como informante com o grupo, sem fazer parte dele, comete o art. 37, com reclusão de 2 a 6 anos.",
      explicacaoErradas:
        "Não há associação, porque o vizinho não integra o grupo e o empresário tem crime próprio. Financiar não é simples participação no art. 33. As penas trocadas invertem os artigos. E o art. 37 não exige lucro: basta colaborar como informante.",
      pegadinha: "Trocar as penas do financiador e do informante.",
      conhecimento: "Prescrever ou ministrar droga por culpa, sem necessidade do paciente, é o art. 38, com detenção de 6 meses a 2 anos.",
    },
    {
      topico: "Organizações criminosas",
      subassunto: "Crimes no procedimento",
      dificuldade: 4,
      raciocinio: "Lei 12.850: art. 18, revelar identidade, fotografar ou filmar o colaborador sem autorização prévia por escrito, 1 a 3 anos; art. 19, imputação falsa sob pretexto de colaboração, 1 a 4; art. 20, descumprir sigilo de ação controlada e infiltração, 1 a 4; art. 21, recusar dados requisitados por juiz, MP ou delegado, 6 meses a 2 anos.",
      enunciado: "Sobre os crimes ligados à investigação previstos na Lei 12.850/2013, é correto afirmar que",
      alternativas: [
        "quebrar o sigilo de uma ação controlada é punido com detenção de 6 meses a 2 anos.",
        "acusar um inocente a pretexto de colaborar só é crime se ele chegar a ser denunciado.",
        "recusar dados cadastrais pedidos pelo delegado é atípico, pois só o juiz pode requisitar.",
        "filmar o colaborador só é crime se as imagens forem divulgadas depois na internet.",
        "revelar a identidade do colaborador sem autorização prévia e escrita dá de 1 a 3 anos.",
      ],
      correta: 4,
      explicacao:
        "O art. 18 pune com reclusão de 1 a 3 anos e multa quem revela a identidade, fotografa ou filma o colaborador sem a autorização prévia dele, por escrito.",
      explicacaoErradas:
        "Quebrar o sigilo da ação controlada ou da infiltração dá reclusão de 1 a 4 anos (art. 20). A falsa acusação do art. 19 não depende de denúncia. Juiz, MP e delegado podem requisitar dados, e a recusa é crime (art. 21). E filmar sem autorização já é crime, sem precisar divulgar.",
      pegadinha: "Achar que só o juiz pode requisitar dados cadastrais.",
      conhecimento: "Quem se apossa, divulga ou usa de forma indevida os dados cadastrais recebe a mesma pena do art. 21.",
    },
    {
      topico: "Abuso de autoridade",
      subassunto: "Preso exibido à imprensa",
      dificuldade: 4,
      raciocinio: "Art. 13, I, da Lei 13.869: constranger o preso, com violência, grave ameaça ou redução da capacidade de resistência, a exibir-se ou ter o corpo exibido à curiosidade pública, detenção de 1 a 4 anos e multa, sem prejuízo da pena da violência. Art. 1º, § 1º: finalidade específica, inclusive mero capricho ou satisfação pessoal.",
      enunciado: "Para aparecer no noticiário, um policial ameaça agredir um preso se ele não posar algemado para as câmeras na porta da delegacia. O preso, com medo, obedece. Pela Lei 13.869/2019, o policial",
      alternativas: [
        "comete o crime do art. 13 (1 a 4 anos), movido por satisfação pessoal.",
        "não comete crime, porque o preso obedeceu e consentiu com a exposição.",
        "comete só infração disciplinar, já que a lei não trata da exposição de presos.",
        "comete o crime do art. 16, por não ter se identificado ao preso na captura.",
        "comete abuso só se a imagem for publicada, pois antes disso não há resultado.",
      ],
      correta: 0,
      explicacao:
        "O art. 13, I, pune quem constrange o preso, com grave ameaça, a se exibir à curiosidade pública: detenção de 1 a 4 anos e multa. A vontade de aparecer no noticiário é satisfação pessoal, uma das finalidades do art. 1º, § 1º.",
      explicacaoErradas:
        "Quem obedece com medo de agressão não consente de verdade. A lei trata do tema no art. 13. O art. 16 é sobre deixar de se identificar, o que não aparece no caso. E o crime se completa com o constrangimento, sem esperar a publicação.",
      pegadinha: "Achar que a obediência do preso vale como consentimento.",
      conhecimento: "Deixar de se identificar ou se identificar falsamente ao preso na captura é o art. 16, com detenção de 6 meses a 2 anos.",
    },
    {
      topico: "Estatuto da Pessoa Idosa",
      subassunto: "Omissão e abandono",
      dificuldade: 5,
      raciocinio: "Lei 10.741: art. 97, deixar de prestar assistência à pessoa idosa em perigo, quando possível sem risco pessoal, detenção de 6 meses a 1 ano e multa; parágrafo único, aumento de metade se resulta lesão grave e triplicada se resulta morte. Art. 98: abandonar em hospital ou entidade de longa permanência, detenção de 6 meses a 3 anos e multa.",
      enunciado: "Sobre os crimes dos arts. 97 e 98 do Estatuto da Pessoa Idosa, é correto afirmar que",
      alternativas: [
        "abandonar a pessoa idosa em hospital tem reclusão de 2 a 5 anos e multa.",
        "na omissão de socorro, a pena é aumentada de metade se resulta a morte.",
        "o abandono em hospital só é crime se a pessoa idosa sofrer lesão grave.",
        "abandono: 6 meses a 3 anos; omissão com morte: pena triplicada.",
        "a omissão é crime mesmo que ajudar trouxesse risco pessoal.",
      ],
      correta: 3,
      explicacao:
        "Abandonar a pessoa idosa em hospital, casa de saúde ou entidade de longa permanência dá detenção de 6 meses a 3 anos e multa (art. 98). Na omissão de socorro (art. 97), a pena aumenta de metade se resulta lesão grave e é triplicada se resulta morte.",
      explicacaoErradas:
        "A pena do abandono é detenção, não reclusão de 2 a 5. O aumento de metade é para lesão grave; com morte, a pena triplica. O abandono não depende de resultado. E a omissão só é crime quando era possível ajudar sem risco pessoal.",
      pegadinha: "Trocar o aumento de metade (lesão grave) pelo triplo (morte).",
      conhecimento: "Desde a Lei 15.163/2025, a Lei 9.099 não se aplica aos crimes do Estatuto (art. 94, parágrafo único).",
    },
    {
      topico: "Racismo",
      subassunto: "Símbolos do nazismo",
      dificuldade: 4,
      raciocinio: "Art. 20, § 1º, da Lei 7.716: fabricar, comercializar, distribuir ou veicular símbolos, emblemas, ornamentos, distintivos ou propaganda com a cruz suástica ou gamada, para fins de divulgação do nazismo, reclusão de 2 a 5 anos e multa. O caput do art. 20 tem reclusão de 1 a 3 anos.",
      enunciado: "Um comerciante fabrica e vende, em sua loja, camisetas com a cruz suástica para divulgar o nazismo. Pela Lei 7.716/1989, ele",
      alternativas: [
        "não comete crime, porque a venda de roupas é protegida pela liberdade de expressão.",
        "comete o crime do art. 20, § 1º, com reclusão de 2 a 5 anos e multa.",
        "comete o crime básico do art. 20, com reclusão de 1 a 3 anos e multa, apenas.",
        "só comete crime se divulgar as camisetas em redes sociais ou na imprensa.",
        "comete contravenção penal, pois a lei pune apenas ofensas a pessoas certas.",
      ],
      correta: 1,
      explicacao:
        "Fabricar, vender, distribuir ou divulgar símbolos com a cruz suástica para divulgar o nazismo é a figura própria do art. 20, § 1º, com reclusão de 2 a 5 anos e multa.",
      explicacaoErradas:
        "A liberdade de expressão não cobre a divulgação do nazismo. Não é o caput do art. 20, porque há figura específica, com pena maior. A internet não é exigida: vender na loja basta. E é crime, não contravenção, voltado a toda a coletividade.",
      pegadinha: "Aplicar a pena do caput do art. 20 em vez da pena do § 1º.",
      conhecimento: "Nos crimes pela imprensa ou pela internet, o juiz pode mandar recolher o material e tirar páginas do ar, até antes do inquérito (art. 20, § 3º).",
    },
    {
      topico: "Maria da Penha",
      subassunto: "Formas de violência",
      dificuldade: 4,
      raciocinio: "Art. 7º da Lei 11.340: IV violência patrimonial, retenção, subtração ou destruição de objetos, instrumentos de trabalho, documentos pessoais, bens e valores; V violência moral, calúnia, difamação ou injúria.",
      enunciado: "Depois da separação, o ex-companheiro retém os documentos pessoais e as ferramentas de trabalho da mulher e passa a contar aos vizinhos, falsamente, que ela furtou dinheiro dele. Pelo art. 7º da Lei 11.340/2006, as formas de violência são",
      alternativas: [
        "física e psicológica, porque houve ofensa à saúde da mulher.",
        "sexual e moral, porque a mentira atinge a intimidade da mulher.",
        "apenas psicológica, pois a lei não trata de bens nem documentos.",
        "patrimonial, pela retenção dos bens, e moral, pela calúnia.",
        "patrimonial e vicária, pois os vizinhos também foram atingidos.",
      ],
      correta: 3,
      explicacao:
        "Reter documentos pessoais e instrumentos de trabalho é violência patrimonial (art. 7º, IV). Atribuir falsamente a ela um furto é calúnia, que a lei chama de violência moral (art. 7º, V).",
      explicacaoErradas:
        "Não houve agressão ao corpo nem conduta sexual. A lei trata de bens e documentos no inciso IV. E a violência vicária é a praticada contra pessoas próximas para atingir a mulher, não o simples fato de os vizinhos ouvirem a mentira.",
      pegadinha: "Achar que reter documentos é só violência psicológica.",
      conhecimento: "A violência moral reúne calúnia, difamação e injúria.",
    },
    {
      topico: "ECA",
      subassunto: "Bebida alcoólica",
      dificuldade: 4,
      raciocinio: "Art. 243 do ECA (Lei 13.106/2015): vender, fornecer, servir, ministrar ou entregar, ainda que gratuitamente, bebida alcoólica a criança ou adolescente, detenção de 2 a 4 anos e multa, se o fato não constitui crime mais grave. A mesma lei revogou o inciso I do art. 63 da Lei das Contravenções Penais.",
      enunciado: "O dono de um bar serve cerveja, de graça, a um adolescente de 16 anos que comemora o aniversário. Pela lei atual, o dono do bar",
      alternativas: [
        "comete o crime do art. 243 do ECA, com detenção de 2 a 4 anos e multa.",
        "comete a contravenção penal de servir bebida a menor, com prisão simples.",
        "não comete crime, porque não cobrou nada e o art. 243 exige a venda.",
        "só comete crime se a bebida for servida a criança, menor de 12 anos.",
        "comete só infração administrativa, punida com multa ao estabelecimento.",
      ],
      correta: 0,
      explicacao:
        "O art. 243 pune quem vende, fornece, serve, ministra ou entrega bebida alcoólica a criança ou adolescente, mesmo de graça: detenção de 2 a 4 anos e multa, se não houver crime mais grave.",
      explicacaoErradas:
        "A contravenção de servir bebida a menor foi revogada pela Lei 13.106/2015, que passou a conduta para o ECA. O crime vale mesmo sem cobrança, para criança ou adolescente. E a multa ao estabelecimento não afasta o crime.",
      pegadinha: "Achar que ainda é contravenção ou que só a venda é crime.",
      conhecimento: "O art. 243 também pune entregar, sem justa causa, outros produtos que possam causar dependência física ou psíquica.",
    },
    {
      topico: "ECA",
      subassunto: "Corrupção de menores",
      dificuldade: 5,
      raciocinio: "Art. 244-B do ECA: corromper ou facilitar a corrupção de menor de 18 anos, com ele praticando infração penal, reclusão de 1 a 4 anos; § 2º: aumento de um terço se a infração estiver no rol do art. 1º da Lei 8.072. Súmula 500 do STJ: crime formal. Roubo com emprego de arma de fogo é hediondo (Lei 8.072, art. 1º, II, b).",
      enunciado: "Um adulto pratica roubo com emprego de arma de fogo junto com um adolescente de 17 anos que já tinha outras passagens. A defesa diz que não há corrupção de menores, porque o rapaz já era corrompido. Pelo ECA e pelo STJ,",
      alternativas: [
        "não há crime, pois a corrupção exige prova de que o menor mudou de conduta.",
        "há crime, mas só se o adolescente tivesse menos de 14 anos na data do fato.",
        "há crime formal de corrupção de menores, com pena aumentada de um terço.",
        "há crime, com pena aumentada de metade por ter havido arma de fogo no roubo.",
        "há crime só se o adulto tivesse usado meio eletrônico para atrair o rapaz.",
      ],
      correta: 2,
      explicacao:
        "Pela Súmula 500 do STJ, a corrupção de menores é crime formal: não precisa provar que o adolescente foi de fato corrompido. Como o roubo com arma de fogo é hediondo, a pena do art. 244-B aumenta de um terço (§ 2º).",
      explicacaoErradas:
        "Passagens anteriores não afastam o crime. A lei protege todo menor de 18 anos. O aumento é de um terço, ligado ao crime hediondo, não de metade. E o meio eletrônico é só uma forma a mais de praticar o crime (§ 1º).",
      pegadinha: "Achar que o menor já envolvido em crimes não pode mais ser corrompido.",
      conhecimento: "Desde 2024, o pai, a mãe ou o responsável que, de propósito, não comunica o desaparecimento do filho comete crime (art. 244-C).",
    },
    {
      topico: "Crimes hediondos",
      subassunto: "Arts. 2º e 3º",
      dificuldade: 4,
      raciocinio: "Lei 8.072: art. 2º, I e II (sem anistia, graça, indulto e fiança para hediondos, tortura, tráfico e terrorismo); § 3º (juiz decide fundamentadamente se o réu apela em liberdade); § 4º (temporária de 30 dias, prorrogável por igual período); art. 3º (presídios federais de segurança máxima).",
      enunciado: "Analise as afirmativas sobre a Lei 8.072/1990.\nI. A União manterá presídios de segurança máxima para condenados de alta periculosidade cuja permanência em presídio estadual ponha em risco a ordem pública.\nII. Na sentença condenatória, o juiz decidirá, de forma fundamentada, se o réu poderá apelar em liberdade.\nIII. A prisão temporária nesses crimes dura 30 dias, prorrogáveis por igual período em caso de extrema e comprovada necessidade.\nIV. O terrorismo fica fora das vedações do art. 2º, porque tem lei própria.\nEstão corretas",
      alternativas: [
        "I e III, apenas.",
        "II, III e IV, apenas.",
        "I, II, III e IV.",
        "III e IV, apenas.",
        "I, II e III, apenas.",
      ],
      correta: 4,
      explicacao:
        "A I repete o art. 3º. A II repete o art. 2º, § 3º. A III repete o art. 2º, § 4º: 30 dias, prorrogáveis por mais 30 em caso de extrema e comprovada necessidade.",
      explicacaoErradas:
        "A IV erra: o terrorismo está expressamente no art. 2º, junto com hediondos, tortura e tráfico, sem anistia, graça, indulto nem fiança.",
      pegadinha: "Esquecer que o terrorismo está entre os crimes do art. 2º.",
      conhecimento: "Hediondos e equiparados não admitem fiança, mas admitem liberdade provisória sem fiança, conforme o STF.",
    },
    {
      topico: "Igualdade racial",
      subassunto: "Trabalho",
      dificuldade: 5,
      raciocinio: "Lei 12.288: art. 39, caput (igualdade de oportunidades no trabalho, contratações do setor público e incentivo às empresas privadas); § 8º (Lei 14.553/2023: registros administrativos de órgãos públicos e empregadores privados com campo do segmento étnico-racial, por autoclassificação); art. 44 (oportunidades para atores, figurantes e técnicos negros).",
      enunciado: "Sobre o trabalho no Estatuto da Igualdade Racial (Lei 12.288/2010), é correto afirmar que",
      alternativas: [
        "o empregador define a cor ou a raça do trabalhador nos registros, pela sua avaliação.",
        "registros de trabalho públicos e privados têm campo de raça, por autoclassificação.",
        "o campo de raça nos registros só existe no serviço público, nunca no emprego privado.",
        "as empresas privadas são obrigadas por lei a reservar cotas fixas para negros.",
        "a TV deve reservar metade dos papéis em filmes e programas para atores negros.",
      ],
      correta: 1,
      explicacao:
        "Desde a Lei 14.553/2023, o art. 39, § 8º, manda que os registros administrativos de órgãos públicos, de empregadores privados e de seus trabalhadores tenham campo para o grupo étnico-racial, usando a autoclassificação do próprio trabalhador.",
      explicacaoErradas:
        "Quem se classifica é o trabalhador, não o empregador. O campo vale também para o emprego privado. Para as empresas, o art. 39 fala em incentivo, não em cota obrigatória. E o art. 44 pede oportunidades de emprego para negros na TV e no cinema, sem percentual.",
      pegadinha: "Achar que o empregador é quem classifica a cor do trabalhador.",
      conhecimento: "O poder público também deve dar acesso ao crédito para a pequena produção, com ações afirmativas para mulheres negras (art. 39, § 5º).",
    },
  ],
};
