import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-19",
  resumo: {
    ideia:
      "O PDF da aula ensina a Resolução 809/2020, que foi revogada. A regra atual é a Resolução 1.027/2026: registro, licenciamento e transferência de veículos em meio digital.",
    itens: [
      {
        termo: "CRLV-e",
        faz: "Reúne em um só documento digital o CRV e o Certificado de Licenciamento Anual.",
      },
      {
        termo: "Só digital",
        faz: "O novo CRV sai apenas por meio do CRLV-e. A emissão de CRV físico é vedada.",
        pista: "Papel regularmente expedido antes continua válido.",
      },
      {
        termo: "Na fiscalização",
        faz: "O CRLV-e só é exigido se o agente não conseguir acessar os dados pelos sistemas.",
        pista: "Nesse caso, vale digital ou impresso legível e validável pelo QRCode.",
      },
      {
        termo: "Novo CRV",
        faz: "Transferência, mudança de Município, alteração de característica, remarcação de chassi ou motor e mudança de categoria.",
      },
      {
        termo: "Desmaterialização",
        faz: "Inutilização definitiva do CRV físico, por pedido ou automática com a expedição de novo CRV.",
      },
      {
        termo: "Licenciamento",
        faz: "Exige registro regular, ausência de restrições, débitos quitados e recall atendido.",
      },
      {
        termo: "Transferência",
        faz: "Convencional, eletrônica ou eletrônica custodiada.",
        pista: "A vistoria presencial não tira a transferência do modo eletrônico.",
      },
      {
        termo: "ATPV-e",
        faz: "Gerada só pelo órgão máximo federal. Uma ativa por veículo, sem assinatura manuscrita.",
      },
      {
        termo: "Efeito da ATPV-e",
        faz: "Só vale como comunicação de venda depois do registro das assinaturas dos dois no Renavam.",
      },
    ],
    cuidado: "As Resoluções 809/2020, 817/2021 e 999/2023 foram revogadas pela 1.027/2026, de 17/08/2026.",
  },
  questoes: [
    {
      topico: "CRLV-e",
      subassunto: "Fiscalização",
      dificuldade: 4,
      raciocinio: "Primeiro o sistema. O documento só entra se ele falhar.",
      enunciado:
        "Na abordagem, o sistema da PRF funciona e mostra o veículo regular, mas o condutor não consegue abrir o CRLV-e no celular. Pelo art. 2º, § 6º, da Resolução Contran 1.027/2026,",
      alternativas: [
        "a apresentação do CRLV-e não será exigida",
        "cabe autuação por falta de documento de porte obrigatório",
        "o veículo fica retido até que o documento seja apresentado",
        "o condutor deve apresentar cópia impressa em até 30 dias",
        "cabe remoção do veículo, pois o documento é exclusivamente digital",
      ],
      correta: 0,
      explicacao: "O § 6º só exige o CRLV-e quando não for possível acessar as informações do veículo pelos sistemas disponíveis aos agentes.",
      explicacaoErradas:
        "“autuação”, “retido” e “remoção” supõem um dever que o § 6º afasta quando o sistema funciona. “cópia impressa em até 30 dias” não consta da norma.",
      pegadinha: "Exigir o documento com o sistema no ar.",
      conhecimento: "O art. 133, parágrafo único, do CTB traz a mesma lógica de dispensa do porte com acesso ao sistema.",
    },
    {
      topico: "CRLV-e",
      subassunto: "Versão impressa",
      dificuldade: 5,
      raciocinio: "Expedido só em digital não quer dizer que a impressão seja proibida.",
      enunciado:
        "O sistema da viatura está fora do ar, e o condutor entrega uma impressão legível do CRLV-e, com QRCode que pode ser validado. Pelo art. 2º, §§ 3º e 7º, da Resolução Contran 1.027/2026, a impressão",
      alternativas: [
        "é recusada, pois o documento é exclusivamente digital",
        "só vale com firma reconhecida do proprietário do veículo",
        "só vale se o órgão de registro tiver autenticado a cópia",
        "é aceita, pois preserva a legibilidade e a validação pelo QRCode",
        "é aceita por 24 horas, e depois disso o veículo deve ser retido",
      ],
      correta: 3,
      explicacao: "O § 3º trata da expedição exclusivamente digital, sem prejuízo da versão impressa. O § 7º, II, aceita a impressão com legibilidade e validação pelo QRCode.",
      explicacaoErradas:
        "“recusada” confunde expedição com apresentação. “firma reconhecida” e “autenticado” não constam da norma. “24 horas” inventa prazo.",
      pegadinha: "Ler “exclusivamente digital” como proibição de imprimir.",
      conhecimento: "O QRCode é dinâmico e gerado por algoritmo do órgão máximo executivo de trânsito da União.",
    },
    {
      topico: "CRV",
      subassunto: "Documento físico",
      dificuldade: 4,
      raciocinio: "A vedação olha para o futuro. O que foi regularmente expedido fica válido.",
      enunciado:
        "Em 2026, um proprietário tem um CRV em papel, regularmente expedido em 2019, sem desmaterialização. Pelos arts. 4º e 59 da Resolução Contran 1.027/2026, esse documento",
      alternativas: [
        "perdeu a validade em 18/08/2026, data da publicação da norma",
        "permanece válido, mas novos CRV só saem em meio digital",
        "permanece válido, e pode ser reemitido em papel se houver perda",
        "deve ser trocado pelo CRLV-e em até 90 dias",
        "só permanece válido se o veículo tiver sido licenciado em papel",
      ],
      correta: 1,
      explicacao: "O art. 4º veda a emissão física, sem prejuízo dos documentos regularmente expedidos antes. O art. 59 mantém a validade deles.",
      explicacaoErradas:
        "“perdeu a validade” contraria o art. 59. “reemitido em papel” contraria o art. 4º, que alcança a segunda via. “90 dias” é o prazo dos órgãos, no art. 58. “licenciado em papel” não é condição.",
      pegadinha: "Achar que a nova norma invalidou o papel.",
      conhecimento: "O art. 25, I, mantém como comprovante a autorização do verso do CRV físico.",
    },
    {
      topico: "ATPV-e",
      subassunto: "Comunicação de venda",
      dificuldade: 5,
      raciocinio: "Gerar não é formalizar.",
      enunciado:
        "O vendedor gerou a ATPV-e e assinou eletronicamente, mas o comprador ainda não assinou. Dias depois, o veículo é flagrado em infração. Pelo art. 27, § 3º, da Resolução Contran 1.027/2026, a ATPV-e",
      alternativas: [
        "já vale como comunicação de venda, pois o vendedor a assinou",
        "vale como comunicação de venda desde a data em que foi gerada",
        "vale como transferência, mas não como comunicação de venda",
        "só produz efeitos depois da assinatura manuscrita do comprador",
        "ainda não vale como comunicação de venda nem como transferência",
      ],
      correta: 4,
      explicacao: "A ATPV-e só é formalizada depois do registro, no Renavam, das assinaturas eletrônicas do antigo e do novo proprietário. Antes disso, não produz esses efeitos.",
      explicacaoErradas:
        "“o vendedor a assinou” e “data em que foi gerada” ignoram as duas assinaturas. “vale como transferência” também é afastado pelo § 3º. “manuscrita” é vedada pelo art. 28, § 1º.",
      pegadinha: "Considerar suficiente a assinatura do vendedor.",
      conhecimento: "Sem comunicação de venda válida, o art. 134 do CTB mantém a responsabilidade do antigo proprietário.",
    },
    {
      topico: "ATPV-e",
      subassunto: "Regras",
      dificuldade: 4,
      raciocinio: "Uma ATPV-e, assinatura eletrônica e geração federal.",
      enunciado:
        "Dois interessados negociam o mesmo veículo. Sobre a ATPV-e, a Resolução Contran 1.027/2026 estabelece que",
      alternativas: [
        "pode haver uma ativa por comprador, gerada pelo Detran do Estado",
        "vale a assinatura manuscrita, desde que haja firma reconhecida",
        "só pode haver uma ativa por veículo, gerada pelo órgão máximo federal",
        "pode ser gerada pelo tabelião, com assinatura manuscrita das partes",
        "pode haver uma ativa por Estado, se o veículo circular em mais de um",
      ],
      correta: 2,
      explicacao: "O art. 27, § 1º, atribui a geração exclusivamente ao órgão máximo executivo federal. O § 5º admite uma ATPV-e ativa por veículo, e o art. 28, § 1º, veda a assinatura manuscrita.",
      explicacaoErradas:
        "“por comprador” e “por Estado” contrariam o § 5º. “Detran” e “tabelião” erram quem gera. “manuscrita” contraria o art. 28, § 1º.",
      pegadinha: "Levar para a ATPV-e as regras do papel.",
      conhecimento: "Antes da comunicação de venda, o proprietário pode pedir o cancelamento da ATPV-e, pelo art. 29.",
    },
    {
      topico: "Transferência",
      subassunto: "Modalidades",
      dificuldade: 5,
      raciocinio: "A vistoria é ressalvada nas definições.",
      enunciado:
        "Em uma venda, todas as etapas foram digitais, com assinaturas eletrônicas avançadas, exceto a vistoria de identificação veicular, feita presencialmente. Não houve custódia de pagamento. Pelo art. 14 da Resolução Contran 1.027/2026, a modalidade é",
      alternativas: [
        "transferência eletrônica, pois a vistoria é ressalvada na definição",
        "transferência convencional, pois houve etapa presencial no processo",
        "transferência eletrônica custodiada, pois a assinatura foi avançada",
        "transferência convencional, pois a vistoria exclui o meio digital",
        "transferência mista, categoria própria para vistoria presencial",
      ],
      correta: 0,
      explicacao: "Os §§ 1º e 2º ressalvam a vistoria de identificação veicular. Com o resto digital e sem custódia, a modalidade é a eletrônica.",
      explicacaoErradas:
        "“convencional” esquece a ressalva. “custodiada” exige custódia, liquidação financeira e execução simultânea. “mista” não existe: o art. 14 traz três modalidades.",
      pegadinha: "Achar que a vistoria presencial torna a transferência convencional.",
      conhecimento: "Na custodiada, o pagamento do veículo e a quitação dos débitos entram na execução automatizada da operação.",
    },
    {
      topico: "CRV",
      subassunto: "Novo CRV",
      dificuldade: 4,
      raciocinio: "A norma fala em Município, não em endereço.",
      enunciado:
        "Pelo art. 6º da Resolução Contran 1.027/2026, a expedição de novo CRV NÃO é obrigatória quando",
      alternativas: [
        "o proprietário muda de um Município para outro no mesmo Estado",
        "o veículo sofre alteração de qualquer de suas características",
        "o motor do veículo tem a numeração remarcada",
        "o proprietário muda de endereço no mesmo Município",
        "o veículo muda de categoria, de particular para aluguel",
      ],
      correta: 3,
      explicacao: "O art. 6º traz transferência, mudança de Município, alteração de característica, remarcação de chassi ou motor e mudança de categoria. A mudança de rua no mesmo Município fica fora.",
      explicacaoErradas:
        "“outro no mesmo Estado”, “alteração”, “remarcada” e “muda de categoria” são hipóteses dos incisos II a V.",
      pegadinha: "Exigir novo CRV em qualquer mudança de endereço.",
      conhecimento: "O art. 7º pede CLA, ausência de restrições e débitos quitados para a expedição do novo CRV.",
    },
    {
      topico: "CRV",
      subassunto: "Desmaterialização",
      dificuldade: 5,
      raciocinio: "Desmaterializar é inutilizar de vez.",
      enunciado:
        "Pelo art. 8º da Resolução Contran 1.027/2026, a desmaterialização do CRV físico",
      alternativas: [
        "é a guarda do papel em cartório, mantida a validade para transferência",
        "só ocorre por pedido do proprietário, nunca de forma automática",
        "só pode ser pedida ao Detran, vedado o pedido em Tabelionato de Notas",
        "é a digitalização do papel, que segue valendo ao lado do CRLV-e",
        "é a inutilização definitiva do papel, e ocorre ao expedir novo CRV",
      ],
      correta: 4,
      explicacao: "O caput define a desmaterialização como inutilização definitiva, com perda de validade. O § 1º, II, a torna automática com a expedição de novo CRV.",
      explicacaoErradas:
        "“guarda do papel” e “segue valendo” contrariam a perda de validade. “nunca de forma automática” contraria o inciso II. “vedado” contraria o inciso I, que admite Tabelionato de Notas.",
      pegadinha: "Confundir com simples digitalização.",
      conhecimento: "O pedido pode ser feito ao Tabelionato de Notas ou ao órgão executivo do Estado ou do DF do domicílio.",
    },
  ],
};
