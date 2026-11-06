import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "con-12",
  resumo: {
    ideia:
      "A ordem social tem como base o primado do trabalho e busca o bem-estar e a justiça sociais. A seguridade reúne saúde, previdência e assistência, com regras de acesso diferentes.",
    itens: [
      {
        termo: "Seguridade",
        faz: "Saúde é para todos. Assistência é para quem precisa. Previdência é para quem contribui.",
      },
      {
        termo: "Custeio",
        faz: "Toda a sociedade financia. Criar ou aumentar benefício exige fonte de custeio total.",
        pista: "Contribuição social espera 90 dias, sem esperar o ano seguinte.",
      },
      {
        termo: "SUS",
        faz: "Rede regionalizada e hierarquizada: descentralização, atendimento integral e participação da comunidade.",
      },
      {
        termo: "Agentes de saúde (EC 140/2026)",
        faz: "Atuação obrigatória e permanente. Contrato temporário ou terceirizado só em emergência em saúde pública.",
      },
      {
        termo: "Saúde privada",
        faz: "Livre à iniciativa privada e complementar ao SUS. Sem auxílio público a quem tem fim lucrativo.",
      },
      {
        termo: "Previdência",
        faz: "Regime geral contributivo e de filiação obrigatória. Idade: 65 anos, homem; 62, mulher. Rural: 60 e 55.",
        pista: "Agente de saúde: 60 e 57, com 25 anos de contribuição e de exercício.",
      },
      {
        termo: "Assistência",
        faz: "Independe de contribuição. Garante um salário mínimo mensal à pessoa com deficiência e ao idoso sem meios de se manter.",
      },
      {
        termo: "Meio ambiente",
        faz: "Bem de uso comum do povo. Quem polui responde nas esferas penal e administrativa e ainda repara o dano.",
        pista: "Alterar ou suprimir espaço protegido só por lei.",
      },
      {
        termo: "Família",
        faz: "Casamento civil, união estável, família de um só dos pais e união homoafetiva recebem proteção.",
        pista: "Filhos têm os mesmos direitos, qualquer que seja a origem.",
      },
    ],
    cuidado:
      "O benefício de um salário mínimo do art. 203, V, é assistência, e não previdência.",
  },
  questoes: [
    {
      topico: "Seguridade social",
      subassunto: "Acesso aos direitos",
      dificuldade: 4,
      raciocinio:
        "Cada área da seguridade tem o seu critério de acesso.",
      enunciado:
        "Uma pessoa desempregada, que nunca contribuiu, foi atendida em hospital público depois de um acidente numa rodovia e não tem meios de se manter. Sobre a seguridade social,",
      alternativas: [
        "todas as áreas exigem contribuição anterior, com exceção do pronto atendimento",
        "a previdência protege todos os que necessitarem, sem exigir contribuição",
        "a saúde é de todos, e somente a previdência exige contribuição",
        "a assistência exige contribuição mínima, e a saúde é paga conforme a renda",
        "a saúde é só de quem contribui",
      ],
      correta: 2,
      explicacao:
        "A saúde é direito de todos (art. 196). A assistência é prestada a quem dela necessitar, independentemente de contribuição (art. 203). A previdência tem caráter contributivo (art. 201).",
      explicacaoErradas:
        "“Todas as áreas exigem contribuição” vale só para a previdência. “Sem exigir contribuição” descreve a assistência. “Contribuição mínima” e “paga conforme a renda” não existem. “Só de quem contribui” nega a saúde universal.",
      pegadinha:
        "Universalidade não quer dizer a mesma regra para as três áreas.",
      conhecimento:
        "A gestão da seguridade é quadripartite: trabalhadores, empregadores, aposentados e Governo (art. 194, VII).",
    },
    {
      topico: "Seguridade social",
      subassunto: "Noventena",
      dificuldade: 5,
      raciocinio:
        "Contribuição social tem uma só espera.",
      enunciado:
        "Uma lei publicada em 1º de dezembro modificou uma contribuição social para a seguridade. Sobre o início da exigência, segundo o art. 195, § 6º,",
      alternativas: [
        "a cobrança só começa em 1º de janeiro do ano seguinte, sem outra espera",
        "a cobrança começa na data da publicação, por ser verba da seguridade",
        "a cobrança respeita as duas regras: o ano seguinte e mais noventa dias",
        "a cobrança começa após trinta dias, salvo se a lei fixar prazo menor",
        "a cobrança espera noventa dias, sem precisar aguardar o ano seguinte",
      ],
      correta: 4,
      explicacao:
        "As contribuições sociais do art. 195 só podem ser exigidas depois de noventa dias da publicação da lei que as instituiu ou modificou. A elas não se aplica a anterioridade do art. 150, III, “b”.",
      explicacaoErradas:
        "“1º de janeiro” aplica a anterioridade anual, afastada pelo § 6º. “Na data da publicação” ignora a noventena. “As duas regras” soma o que a CF separou. “Trinta dias” não existe.",
      pegadinha:
        "Modificar a contribuição também faz contar os noventa dias.",
      conhecimento:
        "Nenhum benefício ou serviço da seguridade pode ser criado, majorado ou estendido sem fonte de custeio total (art. 195, § 5º).",
    },
    {
      topico: "Seguridade social",
      subassunto: "Fontes de custeio",
      dificuldade: 5,
      raciocinio:
        "Procure quem o inciso II deixa de fora.",
      enunciado:
        "Para reforçar o caixa da seguridade, uma lei criou contribuição de 2% sobre as aposentadorias pagas pelo Regime Geral. Essa regra é",
      alternativas: [
        "inválida, pois a CF afasta a contribuição sobre esses benefícios",
        "válida, se a lei respeitar o prazo de noventa dias da publicação",
        "válida, porque o aposentado também integra a sociedade que financia",
        "inválida apenas porque precisava ser criada por uma emenda à CF",
        "válida, se a alíquota for progressiva conforme o valor do benefício",
      ],
      correta: 0,
      explicacao:
        "O art. 195, II, prevê a contribuição do trabalhador e dos demais segurados, sem incidência sobre aposentadoria e pensão do Regime Geral.",
      explicacaoErradas:
        "“Noventa dias” e “alíquota progressiva” não salvam uma base que a CF exclui. “Sociedade que financia” não supera a regra expressa. “Apenas porque precisava” de emenda erra o motivo, que é a vedação do inciso II.",
      pegadinha:
        "A vedação do art. 195, II, fala do Regime Geral. O regime próprio dos servidores tem regra diferente.",
      conhecimento:
        "Outras fontes podem ser criadas por lei, observado o art. 154, I (art. 195, § 4º).",
    },
    {
      topico: "Saúde",
      subassunto: "Agentes de saúde",
      dificuldade: 5,
      raciocinio:
        "Leia a ressalva que a EC 140/2026 trouxe.",
      enunciado:
        "Para cortar gastos, um Município decidiu terceirizar seus agentes de combate às endemias, sem nenhuma emergência em saúde pública. Segundo a CF, após a EC 140/2026, essa decisão é",
      alternativas: [
        "válida, pois cada Município gere o SUS com direção única local",
        "válida, se a empresa contratada tiver fins filantrópicos",
        "inválida, pois esses agentes só podem ser servidores da União",
        "inválida, pois só a emergência em saúde pública permite isso",
        "válida, se o conselho de saúde do Município concordar com ela",
      ],
      correta: 3,
      explicacao:
        "O art. 198, § 4º-A, veda a contratação temporária ou terceirizada desses agentes, salvo emergência em saúde pública, na forma da lei. O inciso IV define a atividade como essencial ao SUS e exclusiva de Estado.",
      explicacaoErradas:
        "“Direção única local” não afasta a vedação. “Fins filantrópicos” é preferência do art. 199, para outro assunto. “Servidores da União” erra: gestores locais admitem por processo seletivo público. “Conselho de saúde” não supre a regra.",
      pegadinha:
        "A admissão desses agentes é por processo seletivo público (art. 198, § 4º).",
      conhecimento:
        "A mesma Emenda trouxe regra própria de aposentadoria para esses agentes.",
    },
    {
      topico: "Saúde",
      subassunto: "Iniciativa privada",
      dificuldade: 5,
      raciocinio:
        "Separe contratar um serviço de dar dinheiro público.",
      enunciado:
        "Um hospital privado com fins lucrativos pediu a um Município uma subvenção para reformar a sede e um contrato para atender pelo SUS. Segundo a CF,",
      alternativas: [
        "os dois pedidos são possíveis, se houver dotação no orçamento",
        "a subvenção é vedada, e o contrato é possível de forma complementar",
        "o contrato é vedado, pois só entidade sem fins lucrativos atua no SUS",
        "os dois pedidos são vedados, pois a saúde é exclusiva do Poder Público",
        "a subvenção é possível, e o contrato depende de autorização do Senado",
      ],
      correta: 1,
      explicacao:
        "O art. 199, § 2º, veda recursos públicos para auxílios ou subvenções a instituições privadas com fins lucrativos. O § 1º permite a participação complementar no SUS, por contrato de direito público ou convênio.",
      explicacaoErradas:
        "“Dotação no orçamento” não afasta a vedação. “Só entidade sem fins lucrativos” transforma preferência em exclusividade. “Exclusiva do Poder Público” contraria o art. 199, caput. “Autorização do Senado” não existe aqui.",
      pegadinha:
        "Entidades filantrópicas e sem fins lucrativos têm preferência, e não exclusividade.",
      conhecimento:
        "É vedado todo tipo de comercialização de órgãos, tecidos, substâncias humanas e sangue (art. 199, § 4º).",
    },
    {
      topico: "Previdência social",
      subassunto: "Filiação",
      dificuldade: 5,
      raciocinio:
        "Separe segurado facultativo de segurado obrigatório.",
      enunciado:
        "Uma servidora efetiva, com regime próprio de previdência, quer pagar o Regime Geral por segurança. À noite, ela também dá aulas em uma escola particular. Sobre esse caso,",
      alternativas: [
        "ela pode ser segurada facultativa do Regime Geral, a seu critério",
        "ela fica fora do Regime Geral, mesmo com o trabalho na escola",
        "ela só entra como segurada obrigatória, pelo trabalho na escola",
        "ela deve deixar o regime próprio para entrar no Regime Geral",
        "ela só entra no Regime Geral se o ente público concordar",
      ],
      correta: 2,
      explicacao:
        "O art. 201, § 5º, veda a filiação como segurado facultativo de quem participa de regime próprio. A atividade privada, porém, gera filiação obrigatória ao Regime Geral em relação a ela.",
      explicacaoErradas:
        "“Segurada facultativa” é justo o que o § 5º veda. “Fica fora” esquece a filiação obrigatória pela atividade privada. “Deixar o regime próprio” e “se o ente público concordar” não são exigidos.",
      pegadinha:
        "A vedação fala do segurado facultativo, e não de quem trabalha também no setor privado.",
      conhecimento:
        "O Regime Geral tem caráter contributivo e filiação obrigatória (art. 201, caput).",
    },
    {
      topico: "Previdência social",
      subassunto: "Idades de aposentadoria",
      dificuldade: 5,
      raciocinio:
        "A EC 140/2026 criou idade própria para uma categoria.",
      enunciado:
        "Uma agente comunitária de saúde tem 58 anos de idade e 25 anos de contribuição e de efetivo exercício na atividade. Quanto ao requisito de idade do Regime Geral, segundo a CF,",
      alternativas: [
        "não o cumpre, pois a idade da mulher é sempre de 62 anos",
        "não o cumpre, pois a regra exige 60 anos para homens e mulheres",
        "não o cumpre, pois a regra própria da categoria exige 30 anos de exercício",
        "cumpre a regra, pois a idade da trabalhadora rural é aplicada a ela",
        "cumpre a regra, pois a idade exigida para ela é de 57 anos",
      ],
      correta: 4,
      explicacao:
        "O art. 201, § 8º-A, incluído pela EC 140/2026, fixa 57 anos para mulher e 60 para homem, com pelo menos 25 anos de contribuição e de efetivo exercício na atividade.",
      explicacaoErradas:
        "“Sempre de 62 anos” esquece a regra própria. “60 anos para homens e mulheres” erra a idade da mulher. “30 anos de exercício” erra o tempo. “Trabalhadora rural” é outra regra, de 55 anos.",
      pegadinha:
        "A regra geral é 65 e 62 anos. A rural é 60 e 55. A do agente é 60 e 57.",
      conhecimento:
        "Nenhum benefício que substitua o rendimento do trabalho do segurado fica abaixo do salário mínimo (art. 201, § 2º).",
    },
    {
      topico: "Assistência social",
      subassunto: "Benefício do art. 203, V",
      dificuldade: 4,
      raciocinio:
        "Veja em qual área da seguridade o benefício está.",
      enunciado:
        "Uma pessoa com deficiência, sem meios de se manter e sem família que possa ajudá-la, nunca contribuiu e pediu ajuda ao Estado. Segundo a CF, ela",
      alternativas: [
        "pode receber um salário mínimo mensal pela assistência social",
        "pode receber meio salário mínimo pela assistência social",
        "só recebe depois de contribuir por quinze anos",
        "pode receber aposentadoria por incapacidade da previdência social",
        "não recebe, pois o benefício se limita às pessoas idosas sem renda",
      ],
      correta: 0,
      explicacao:
        "O art. 203, V, garante um salário mínimo de benefício mensal à pessoa com deficiência e ao idoso que comprovem não ter meios de se manter nem de ser mantidos pela família, conforme a lei.",
      explicacaoErradas:
        "“Meio salário” erra o valor. “Contribuir por quinze anos” contraria o caput do art. 203. “Aposentadoria” é benefício da previdência, que exige contribuição. “Às pessoas idosas” esquece a pessoa com deficiência.",
      pegadinha:
        "Não basta a deficiência ou a idade: é preciso provar a falta de meios.",
      conhecimento:
        "A EC 114/2021 incluiu no art. 203 a redução da vulnerabilidade de famílias em pobreza ou extrema pobreza.",
    },
    {
      topico: "Meio ambiente",
      subassunto: "Espaços protegidos",
      dificuldade: 5,
      raciocinio:
        "Criar e reduzir não têm o mesmo caminho.",
      enunciado:
        "Um decreto criou uma área de proteção ambiental. Anos depois, outro decreto reduziu essa área para liberar uma obra rodoviária. Sobre os dois decretos, segundo o art. 225, § 1º, III,",
      alternativas: [
        "os dois são válidos, porque quem cria pode reduzir pelo mesmo ato",
        "os dois são inválidos, porque criar e reduzir a área exigem lei",
        "o que criou é inválido, e o que reduziu é válido, pois o ato é discricionário",
        "o que criou é válido, e o que reduziu é inválido, pois a redução exige lei",
        "o que reduziu é válido, se a obra for de interesse público federal",
      ],
      correta: 3,
      explicacao:
        "O art. 225, § 1º, III, exige lei para alterar ou suprimir espaços especialmente protegidos. A CF não faz essa exigência para a criação, que pode vir por decreto.",
      explicacaoErradas:
        "“Quem cria pode reduzir” ignora a exigência de lei. “Criar e reduzir exigem lei” vai além do texto. “O que criou é inválido” inverte a regra. “Interesse público federal” não dispensa a lei.",
      pegadinha:
        "A CF fala em alteração e supressão, e não em criação.",
      conhecimento:
        "O estudo prévio de impacto ambiental é exigido para obra potencialmente causadora de significativa degradação, com publicidade (art. 225, § 1º, IV).",
    },
    {
      topico: "Meio ambiente",
      subassunto: "Responsabilidade ambiental",
      dificuldade: 5,
      raciocinio:
        "As esferas se somam, e a pessoa jurídica também responde.",
      enunciado:
        "Na fiscalização em uma rodovia federal, a PRF flagrou o caminhão de uma empresa levando madeira ilegal da Floresta Amazônica. Sobre a responsabilidade pelo dano,",
      alternativas: [
        "só o motorista responde, pois pessoa jurídica não sofre sanção penal",
        "a empresa só responde se pagar a multa e recusar a reparação do dano",
        "a empresa responde penal e administrativamente e repara o dano",
        "a reparação do dano afasta as sanções penais e as administrativas",
        "a empresa só repara o dano civil",
      ],
      correta: 2,
      explicacao:
        "O art. 225, § 3º, sujeita pessoas físicas ou jurídicas a sanções penais e administrativas, independentemente da obrigação de reparar o dano. A Floresta Amazônica é patrimônio nacional (§ 4º).",
      explicacaoErradas:
        "“Só o motorista” e “só repara o dano civil” contrariam a responsabilidade da pessoa jurídica. “Pagar a multa e recusar a reparação” cria condição sem base. “Afasta as sanções” ignora a independência das esferas.",
      pegadinha:
        "O Cerrado e a Caatinga não estão na lista do art. 225, § 4º.",
      conhecimento:
        "Quem explora recursos minerais fica obrigado a recuperar o ambiente degradado, conforme solução técnica exigida pelo órgão público (art. 225, § 2º).",
    },
    {
      topico: "Família",
      subassunto: "Filiação",
      dificuldade: 5,
      raciocinio:
        "O STF não fez um vínculo prevalecer sobre o outro.",
      enunciado:
        "Uma criança foi registrada e criada pelo pai afetivo. Tempos depois, ela descobriu quem é o pai biológico e pediu o reconhecimento do vínculo. Segundo o STF,",
      alternativas: [
        "o vínculo afetivo impede o reconhecimento do biológico",
        "os dois vínculos podem coexistir, com os efeitos próprios de cada um",
        "o vínculo biológico sempre prevalece e apaga o registro do pai afetivo",
        "o vínculo biológico tem só efeitos morais, sem qualquer efeito patrimonial",
        "o pedido depende da concordância do pai que está no registro civil",
      ],
      correta: 1,
      explicacao:
        "No Tema 622, o STF fixou que a paternidade socioafetiva, registrada ou não, não impede o vínculo concomitante baseado na origem biológica, com os efeitos jurídicos próprios.",
      explicacaoErradas:
        "“Impede o reconhecimento” contraria a tese. “Sempre prevalece” também: não há hierarquia entre os vínculos. “Só efeitos morais” retira os efeitos jurídicos. “Concordância do pai” não é requisito.",
      pegadinha:
        "A CF proíbe designações discriminatórias relativas à filiação (art. 227, § 6º).",
      conhecimento:
        "Pais devem assistir, criar e educar os filhos menores. Filhos maiores devem amparar os pais na velhice, carência ou enfermidade (art. 229).",
    },
  ],
};
