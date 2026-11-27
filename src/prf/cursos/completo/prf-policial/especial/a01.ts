import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "especial-01",
  resumo: {
    ideia:
      "A Lei 9.605/1998 pune quem mata, caça, transporta ou vende fauna sem autorização, quem destrói flora, polui, funciona sem licença, picha ou atrapalha a fiscalização. Pessoa jurídica também responde. Na rodovia, o que mais aparece é transporte: animais, pescado, madeira, carvão e produtos perigosos.",
    itens: [
      {
        parte: "1. Quem responde e como se pune",
        termo: "Quem responde",
        faz: "Quem de qualquer forma concorre para o crime responde na medida da sua culpa. Diretor, administrador, gerente, auditor ou preposto de empresa também responde se sabia do crime de outra pessoa, podia evitá-lo e não evitou (art. 2º).",
      },
      {
        termo: "Pessoa jurídica",
        faz: "A empresa responde no campo administrativo, civil e penal quando o crime vem de decisão do seu representante ou órgão colegiado, no interesse ou em benefício dela (art. 3º). Isso não livra as pessoas físicas autoras ou partícipes (parágrafo único).",
        pista: "A Constituição prevê essa responsabilidade no art. 225, § 3º.",
      },
      {
        termo: "Desconsideração",
        faz: "O juiz pode desconsiderar a pessoa jurídica sempre que ela for obstáculo para ressarcir o dano ao meio ambiente (art. 4º).",
      },
      {
        termo: "Penas restritivas",
        faz: "Substituem a prisão em crime culposo ou com pena aplicada menor que 4 anos, se as circunstâncias indicarem que basta (art. 7º). São: serviços à comunidade, interdição temporária de direitos, suspensão de atividades, prestação pecuniária e recolhimento domiciliar (art. 8º).",
        pista: "A interdição é temporária: 5 anos no crime doloso e 3 no culposo (art. 10). Não existe interdição permanente.",
      },
      {
        termo: "Prestação pecuniária",
        faz: "Dinheiro pago à vítima ou a entidade com fim social, de 1 a 360 salários mínimos. O valor é descontado de uma futura indenização civil (art. 12).",
      },
      {
        termo: "Atenuantes e agravantes",
        faz: "Atenuam: pouca instrução, reparar o dano por vontade própria, avisar antes do perigo e colaborar com a fiscalização (art. 14). Agravam, entre outras: reincidência ambiental, buscar lucro, agir à noite, em domingo ou feriado, em seca ou inundação, em defeso, com método cruel ou com ajuda de funcionário público (art. 15).",
      },
      {
        termo: "Sursis e multa",
        faz: "A suspensão condicional da pena cabe em condenação de até 3 anos (art. 16). A multa segue o Código Penal; se ficar ineficaz mesmo no máximo, pode ser aumentada até 3 vezes, conforme a vantagem obtida (art. 18).",
      },
      {
        termo: "Perícia e reparação",
        faz: "A perícia do dano, sempre que possível, fixa o prejuízo para fiança e multa, e pode ser feita já no inquérito. Perícia do inquérito civil ou do juízo cível pode ser usada no processo penal, com contraditório (art. 19). A sentença fixa, quando possível, o valor mínimo da reparação (art. 20).",
      },
      {
        termo: "Penas da empresa",
        faz: "Multa, restritivas de direitos e serviços à comunidade, isoladas ou juntas (art. 21). Restritivas: suspensão de atividades, interdição de estabelecimento e proibição de contratar com o poder público, por até 10 anos (art. 22). Serviços: custear projetos ambientais, recuperar áreas, manter espaços públicos e contribuir com entidades (art. 23).",
      },
      {
        termo: "Empresa de fachada",
        faz: "Empresa criada ou usada principalmente para permitir, facilitar ou esconder crime ambiental tem liquidação forçada. O patrimônio vira instrumento do crime e vai para o Fundo Penitenciário Nacional (art. 24).",
      },
      {
        parte: "2. Apreensão e processo",
        termo: "Apreensão",
        faz: "Constatada a infração, produtos e instrumentos são apreendidos, com auto (art. 25). Animais voltam de preferência ao habitat; se não der, vão para zoológico ou entidade com técnico responsável. Perecíveis e madeira são avaliados e doados. Produtos da fauna não perecíveis são destruídos ou doados. Instrumentos são vendidos, descaracterizados por reciclagem.",
        pista: "Até a entrega, o órgão que apreendeu cuida do bem-estar dos animais no transporte e na guarda (§ 2º).",
      },
      {
        termo: "Ação penal",
        faz: "Em todos os crimes desta lei, a ação é pública incondicionada (art. 26).",
      },
      {
        termo: "Transação ambiental",
        faz: "No crime de menor potencial ofensivo, a transação penal só pode ser proposta depois da composição do dano ambiental, salvo se for comprovadamente impossível (art. 27).",
      },
      {
        termo: "Suspensão do processo",
        faz: "A lei manda aplicar o art. 89 da Lei 9.099 aos seus crimes de menor potencial ofensivo, com uma diferença: a extinção da punibilidade depende de laudo que comprove a reparação do dano. Se a reparação não estiver completa, o prazo é prorrogado até o máximo mais 1 ano, com a prescrição suspensa (art. 28).",
      },
      {
        parte: "3. Crimes contra a fauna",
        termo: "Fauna silvestre",
        faz: "Matar, perseguir, caçar, apanhar ou utilizar espécime silvestre, nativo ou em rota migratória, sem autorização ou em desacordo com ela: detenção de 6 meses a 1 ano e multa (art. 29).",
        pista: "Guarda doméstica de espécie não ameaçada: o juiz pode deixar de aplicar a pena (§ 2º).",
      },
      {
        termo: "Mesmas penas",
        faz: "Responde igual quem impede a procriação da fauna, destrói ninho, abrigo ou criadouro natural, e quem vende, compra, guarda, tem em cativeiro ou transporta ovos, larvas, espécimes ou produtos deles sem autorização ou vindos de criadouro não autorizado (art. 29, § 1º).",
        pista: "Transportar ave silvestre sem autorização na rodovia é o caso típico do inciso III.",
      },
      {
        termo: "O que é silvestre",
        faz: "Toda espécie nativa, migratória ou outra, aquática ou terrestre, que passe todo ou parte do ciclo de vida no território ou nas águas brasileiras (art. 29, § 3º).",
      },
      {
        termo: "Aumentos na caça",
        faz: "De metade: espécie rara ou ameaçada (mesmo que só no local), período proibido à caça, noite, abuso de licença, unidade de conservação e meios de destruição em massa. Até o triplo: caça profissional (art. 29, §§ 4º e 5º).",
        pista: "O art. 29 não se aplica à pesca (§ 6º).",
      },
      {
        termo: "Peles e espécie de fora",
        faz: "Exportar peles e couros de anfíbios e répteis em bruto sem autorização: reclusão de 1 a 3 anos (art. 30). Introduzir animal no país sem parecer técnico oficial favorável e licença: detenção de 3 meses a 1 ano (art. 31).",
      },
      {
        termo: "Maus-tratos",
        faz: "Abusar, maltratar, ferir ou mutilar animal silvestre, doméstico ou domesticado, nativo ou exótico: detenção de 3 meses a 1 ano e multa. Cão ou gato: reclusão de 2 a 5 anos, multa e proibição da guarda (§ 1º-A). Morte do animal: mais 1/6 a 1/3 (art. 32, § 2º).",
        pista: "Experiência dolorosa ou cruel em animal vivo, mesmo para ensino ou ciência, quando há alternativa, tem a mesma pena (§ 1º).",
      },
      {
        termo: "Novas formas de maus-tratos",
        faz: "Tatuagem ou piercing estético em cão ou gato, feito ou permitido, tem a pena de cão e gato (§ 1º-B, Lei 15.150/2025). Provocar desastre ambiental que prejudique a vida, a saúde ou o bem-estar de animais silvestres ou domésticos também é maus-tratos (§ 1º-C, Lei 15.355/2026).",
      },
      {
        termo: "Fauna aquática",
        faz: "Matar peixes e outros animais aquáticos por lançamento de efluentes ou materiais em rios, lagos, açudes, baías ou águas brasileiras: detenção de 1 a 3 anos, ou multa, ou ambas (art. 33). Também: degradar viveiros públicos, explorar algas e invertebrados sem licença e lançar detritos ou fundear sobre bancos de moluscos ou corais marcados em carta náutica.",
      },
      {
        parte: "4. Pesca e abate permitido",
        termo: "Pesca",
        faz: "Pescar em período proibido ou em lugar interditado: detenção de 1 a 3 anos, ou multa, ou ambas (art. 34). Responde igual quem pesca espécie protegida ou abaixo do tamanho, pesca acima da quantidade ou com aparelho proibido, e quem transporta, vende ou industrializa o pescado da pesca proibida.",
      },
      {
        termo: "Pesca com explosivo",
        faz: "Pescar com explosivo, substância que tenha efeito parecido na água, substância tóxica ou outro meio proibido: reclusão de 1 a 5 anos (art. 35).",
      },
      {
        termo: "O que é pesca",
        faz: "Todo ato que tenta retirar, coletar, apanhar ou capturar peixes, crustáceos, moluscos ou vegetais aquáticos, com ou sem valor econômico. Espécies ameaçadas das listas oficiais ficam fora desse conceito (art. 36).",
        pista: "Basta tentar: o ato tendente a capturar já é pesca.",
      },
      {
        termo: "Insignificância na pesca",
        faz: "O STJ já aplicou a insignificância a quem pescou um único peixe de forma irregular e o devolveu vivo, sem espécie ameaçada e sem sinal de atividade profissional. Nos crimes ambientais, a análise é sempre caso a caso.",
      },
      {
        termo: "Abate que não é crime",
        faz: "Abater animal não é crime: para matar a fome do agente ou da família (estado de necessidade); para proteger lavoura, pomar ou rebanho de animal predador, com autorização expressa; ou quando o órgão competente declarou o animal nocivo (art. 37).",
      },
      {
        parte: "5. Crimes contra a flora",
        termo: "Preservação permanente",
        faz: "Destruir ou danificar floresta de preservação permanente, mesmo em formação, ou usá-la contra as normas: detenção de 1 a 3 anos, ou multa, ou ambas (art. 38). Cortar árvores nela sem permissão: mesma pena (art. 39).",
        pista: "O art. 38 tem forma culposa, com a pena reduzida à metade. Cortar com autorização não é crime.",
      },
      {
        termo: "Mata Atlântica",
        faz: "Destruir ou danificar vegetação primária ou secundária, em estágio médio ou avançado de regeneração, do bioma Mata Atlântica: detenção de 1 a 3 anos, ou multa, ou ambas. Culposo: pena pela metade (art. 38-A).",
      },
      {
        termo: "Unidades de conservação",
        faz: "Causar dano direto ou indireto a unidade de conservação: reclusão de 1 a 5 anos; culposo, pela metade (art. 40). Proteção integral: estações ecológicas, reservas biológicas, parques, monumentos naturais e refúgios de vida silvestre. Uso sustentável: APAs, florestas nacionais, reservas extrativistas, de fauna e particulares, entre outras.",
        pista: "Dano a espécie ameaçada dentro da unidade é agravante. Entrar na unidade levando instrumento de caça ou de exploração florestal sem licença também é crime (art. 52).",
      },
      {
        termo: "Incêndio",
        faz: "Provocar incêndio em floresta ou em demais formas de vegetação: reclusão de 2 a 4 anos e multa. Culposo: detenção de 6 meses a 1 ano e multa (art. 41).",
      },
      {
        termo: "Balões",
        faz: "Fabricar, vender, transportar ou soltar balões que possam provocar incêndio em florestas e outras vegetações, em áreas urbanas ou em qualquer assentamento humano: detenção de 1 a 3 anos, ou multa, ou ambas (art. 42).",
        pista: "Basta o balão poder causar incêndio: não precisa que o fogo aconteça.",
      },
      {
        termo: "Minerais",
        faz: "Extrair pedra, areia, cal ou outro mineral de floresta pública ou de preservação permanente sem autorização: detenção de 6 meses a 1 ano e multa (art. 44).",
      },
      {
        termo: "Madeira de lei",
        faz: "Cortar ou transformar em carvão madeira de lei, assim classificada pelo poder público, contra as determinações legais, para qualquer exploração: reclusão de 1 a 2 anos e multa (art. 45).",
      },
      {
        termo: "Madeira e carvão",
        faz: "Receber ou comprar madeira, lenha ou carvão para comércio ou indústria sem exigir a licença do vendedor e a via que acompanha o produto: detenção de 6 meses a 1 ano e multa (art. 46). Responde igual quem vende, guarda, tem em depósito ou transporta sem licença válida para todo o tempo da viagem ou do armazenamento (parágrafo único).",
        pista: "É o crime da carga de madeira ou carvão parada na fiscalização sem documento válido.",
      },
      {
        termo: "Regeneração",
        faz: "Impedir ou dificultar a regeneração natural de florestas e outras vegetações: detenção de 6 meses a 1 ano e multa (art. 48). Para o STJ, a área não precisa ser de preservação permanente.",
        pista: "Se a pessoa só queria construir em solo não edificável, o art. 64 absorve o art. 48.",
      },
      {
        termo: "Plantas ornamentais",
        faz: "Destruir, danificar ou maltratar planta de ornamentação de logradouro público ou de propriedade privada alheia: detenção de 3 meses a 1 ano, ou multa, ou ambas. Culposo: 1 a 6 meses, ou multa (art. 49).",
        pista: "Desde a Lei 15.299/2025, não é crime podar ou cortar árvore com risco de acidente atestado por profissional se o órgão ambiental não responder ao pedido em 45 dias (§ 2º).",
      },
      {
        termo: "Florestas e dunas",
        faz: "Destruir ou danificar florestas nativas ou plantadas, ou vegetação que fixa dunas ou protege mangues, objeto de especial preservação: detenção de 3 meses a 1 ano e multa (art. 50).",
      },
      {
        termo: "Floresta em terra pública",
        faz: "Desmatar, explorar ou degradar floresta em terra pública ou devoluta sem autorização: reclusão de 2 a 4 anos e multa. Acima de 1.000 hectares, mais 1 ano por milhar de hectares (art. 50-A).",
        pista: "Não é crime se necessário à subsistência imediata do agente ou da família (§ 1º).",
      },
      {
        termo: "Motosserra",
        faz: "Vender motosserra ou usá-la em florestas e outras vegetações sem licença ou registro: detenção de 3 meses a 1 ano e multa (art. 51).",
      },
      {
        termo: "Aumentos na flora",
        faz: "Mais 1/6 a 1/3 se o fato diminui águas naturais, causa erosão ou muda o clima, ou se é cometido na queda das sementes, na formação da vegetação, contra espécie rara ou ameaçada, em seca ou inundação, ou à noite, em domingo ou feriado (art. 53).",
      },
      {
        parte: "6. Poluição e outros crimes",
        termo: "Poluição",
        faz: "Causar poluição de qualquer tipo em nível que cause ou possa causar dano à saúde humana, mortandade de animais ou destruição significativa da flora: reclusão de 1 a 4 anos e multa. Culposo: detenção de 6 meses a 1 ano (art. 54).",
        pista: "Basta o risco de dano à saúde. Poluição sonora também entra, e o STJ não exige mais perícia se houver outras provas.",
      },
      {
        termo: "Poluição qualificada",
        faz: "Reclusão de 1 a 5 anos se a poluição torna a área imprópria para morar, obriga a retirar moradores, interrompe o abastecimento de água, impede o uso das praias ou vem de lançamento de resíduos ou óleo contra as normas (art. 54, § 2º).",
        pista: "Mesma pena para quem não adota medida de precaução exigida pela autoridade diante de risco de dano grave ou irreversível (§ 3º).",
      },
      {
        termo: "Mineração",
        faz: "Pesquisar, lavrar ou extrair minério sem autorização, ou em desacordo com ela: detenção de 6 meses a 1 ano e multa. Responde igual quem não recupera a área explorada (art. 55).",
      },
      {
        termo: "Produto perigoso",
        faz: "Produzir, vender, transportar, guardar ou usar produto tóxico, perigoso ou nocivo contra as exigências das leis ou regulamentos: reclusão de 1 a 4 anos e multa (art. 56). Também quem abandona esses produtos e quem dá destino errado a resíduo perigoso. Nuclear ou radioativo: mais 1/6 a 1/3. Culposo: detenção de 6 meses a 1 ano.",
        pista: "É crime de perigo abstrato. Para o STJ, transportar produto perigoso contra as regras da ANTT (Resolução 420/2004) já configura o crime, sem perícia (REsp 1.439.150).",
      },
      {
        termo: "Resultado mais grave",
        faz: "Nos crimes dolosos desta seção, a pena aumenta: 1/6 a 1/3 se o dano à flora ou ao ambiente é irreversível; 1/3 até a metade se há lesão grave em alguém; até o dobro se alguém morre (art. 58). Só vale se não houver crime mais grave.",
      },
      {
        termo: "Sem licença",
        faz: "Construir, reformar, ampliar, instalar ou fazer funcionar obra ou atividade potencialmente poluidora sem licença ambiental, ou contra as normas: detenção de 6 meses a 2 anos, ou multa, ou ambas. Até o dobro se o licenciamento exigir estudo prévio de impacto ambiental (art. 60, Lei 15.190/2025).",
      },
      {
        termo: "Pragas e doenças",
        faz: "Espalhar doença, praga ou espécie que possa causar dano à agricultura, pecuária, fauna, flora ou ecossistemas: reclusão de 1 a 4 anos e multa (art. 61).",
        pista: "Esse artigo substituiu o caput do art. 259 do Código Penal. A forma culposa do art. 259 continua no CP.",
      },
      {
        parte: "7. Cidade e patrimônio cultural",
        termo: "Bem protegido",
        faz: "Destruir, inutilizar ou deteriorar bem especialmente protegido, ou arquivo, museu, biblioteca ou instalação científica protegida: reclusão de 1 a 3 anos e multa. Culposo: detenção de 6 meses a 1 ano (art. 62).",
      },
      {
        termo: "Alterar local protegido",
        faz: "Mudar o aspecto ou a estrutura de edificação ou local protegido por seu valor paisagístico, histórico, cultural, religioso ou outro, sem autorização: reclusão de 1 a 3 anos e multa (art. 63).",
      },
      {
        termo: "Solo não edificável",
        faz: "Construir em solo não edificável, ou no entorno, protegido por seu valor paisagístico, ecológico, histórico ou outro, sem autorização: detenção de 6 meses a 1 ano e multa (art. 64).",
      },
      {
        termo: "Pichação",
        faz: "Pichar ou sujar de outro modo edificação ou monumento urbano: detenção de 3 meses a 1 ano e multa. Em monumento ou coisa tombada: 6 meses a 1 ano (art. 65).",
        pista: "Grafite não é crime se feito para valorizar o bem, com consentimento do dono (ou locatário) ou, no bem público, com autorização do órgão (§ 2º).",
      },
      {
        parte: "8. Crimes contra a administração ambiental",
        termo: "Informação falsa do servidor",
        faz: "Funcionário público que afirma algo falso ou enganoso, omite a verdade ou esconde dados técnicos em autorização ou licenciamento ambiental: reclusão de 1 a 3 anos e multa (art. 66).",
      },
      {
        termo: "Licença ilegal",
        faz: "Funcionário público que concede, de forma dolosa, licença, autorização ou permissão que sabe estar contra as normas ambientais: detenção de 1 a 3 anos e multa (art. 67, Lei 15.190/2025).",
        pista: "A forma culposa do art. 67 foi revogada em 2025. Hoje só existe a dolosa.",
      },
      {
        termo: "Dever ambiental",
        faz: "Quem tem dever legal ou de contrato e deixa de cumprir obrigação de relevante interesse ambiental: detenção de 1 a 3 anos e multa. Culposo: 3 meses a 1 ano (art. 68).",
      },
      {
        termo: "Administração ambiental",
        faz: "Obstar ou dificultar a fiscalização ambiental do poder público: detenção de 1 a 3 anos e multa (art. 69). Elaborar ou apresentar estudo, laudo ou relatório falso ou enganoso, mesmo por omissão, no licenciamento ou em outro procedimento: reclusão de 3 a 6 anos e multa (art. 69-A).",
        pista: "O art. 69-A tem forma culposa (detenção de 1 a 3 anos) e aumento de 1/3 a 2/3 se houver dano significativo ao ambiente.",
      },
    ],
    cuidado:
      "Muitos materiais estão desatualizados. Desde a Lei 15.190/2025, o art. 60 tem pena de 6 meses a 2 anos (até o dobro com estudo de impacto) e o art. 67 só pune a forma dolosa. O art. 41 fala em incêndio “em floresta ou em demais formas de vegetação” (Lei 14.944/2024). O art. 32 ganhou tatuagem e piercing em cão e gato (2025) e desastre ambiental (2026).",
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
