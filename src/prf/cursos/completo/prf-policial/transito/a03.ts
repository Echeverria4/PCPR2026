import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-03",
  resumo: {
    ideia:
      "A Lei 14.599/2023 mexeu nas definições do Anexo I, na composição do Contran e no exame toxicológico das categorias C, D e E. Vale decorar prazos e penalidades.",
    itens: [
      {
        termo: "Exame toxicológico",
        faz: "C, D e E comprovam resultado negativo para obter e renovar a CNH. Janela mínima de detecção: 90 dias.",
      },
      {
        termo: "Exame periódico",
        faz: "Menores de 70 anos repetem a cada 2 anos e 6 meses, mesmo com a CNH válida.",
      },
      {
        termo: "Art. 165-B",
        faz: "Dirigir sem o exame: gravíssima, multa de 5 vezes. Reincidência em 12 meses: multa de 10 vezes e suspensão.",
      },
      {
        termo: "Trinta dias",
        faz: "No exame periódico, a infração só se configura após o 30º dia do vencimento.",
      },
      {
        termo: "Resultado positivo",
        faz: "No periódico, suspensão por 3 meses, até novo exame negativo. Há contraprova e recurso, sem efeito suspensivo.",
      },
      {
        termo: "Quadriciclo",
        faz: "4 rodas, até 450 kg para passageiros e até 600 kg para carga.",
      },
      {
        termo: "Veículo automotor",
        faz: "Abrange combustão, elétrico e híbrido, além do ônibus ligado a linha elétrica sem trilhos.",
      },
      {
        termo: "Contran",
        faz: "Presidido pelo ministro ao qual se subordina o órgão máximo executivo. Decide por maioria absoluta.",
      },
    ],
    cuidado: "O dirigente do órgão máximo executivo é o secretário-executivo do Contran, e não o seu presidente.",
  },
  questoes: [
    {
      topico: "Exame toxicológico",
      subassunto: "Prazo do exame periódico",
      dificuldade: 4,
      raciocinio: "O prazo é próprio e não segue a validade da CNH.",
      enunciado:
        "Um condutor da categoria D, de 45 anos, tem CNH válida por mais dois anos. Pelo art. 148-A, § 2º, o novo exame toxicológico",
      alternativas: [
        "só é devido na renovação da CNH, pois acompanha a validade dos outros exames",
        "é exigido a cada 3 anos e 6 meses, para todos os condutores profissionais",
        "vale só para quem exerce atividade remunerada, o que deve ser comprovado",
        "é devido a cada 2 anos e 6 meses, mesmo com a CNH válida",
        "deixa de ser exigido após os 40 anos, por causa da validade maior da CNH",
      ],
      correta: 3,
      explicacao:
        "Condutores das categorias C, D e E com menos de 70 anos fazem novo exame a cada 2 anos e 6 meses, independentemente da validade dos demais exames.",
      explicacaoErradas:
        "“só é devido na renovação” ignora o exame periódico. “3 anos e 6 meses” erra o prazo. “atividade remunerada” não é critério. “após os 40 anos” troca o limite de 70 anos.",
      pegadinha: "Ligar o prazo à validade da CNH.",
      conhecimento: "O exame tem janela de detecção mínima de 90 dias.",
    },
    {
      topico: "Exame toxicológico",
      subassunto: "Art. 165-B",
      dificuldade: 5,
      raciocinio: "O exame periódico tem uma folga de 30 dias.",
      enunciado:
        "O prazo do exame periódico de um condutor da categoria E venceu há 20 dias, e ele é parado dirigindo um caminhão. Pelo parágrafo único do art. 165-B, a infração",
      alternativas: [
        "se configura no dia seguinte ao vencimento do prazo do exame",
        "ainda não se configura, pois exige direção após o 30º dia do vencimento",
        "se configura de imediato, com multa de dez vezes e suspensão do direito de dirigir",
        "exige antes a notificação pessoal do condutor, feita pelo órgão de registro da CNH",
        "depende de resultado positivo em exame feito durante a fiscalização na rodovia",
      ],
      correta: 1,
      explicacao:
        "O parágrafo único diz que, no exame do § 2º, a infração se configura quando o condutor dirige após o trigésimo dia do vencimento do prazo.",
      explicacaoErradas:
        "“dia seguinte” e “de imediato” ignoram os 30 dias. “notificação pessoal” não é condição da infração. “resultado positivo” é a hipótese do art. 165-C.",
      pegadinha: "Esquecer os 30 dias.",
      conhecimento: "O órgão máximo comunica o vencimento com 30 dias de antecedência pelo sistema de notificação eletrônica.",
    },
    {
      topico: "Exame toxicológico",
      subassunto: "Reincidência",
      dificuldade: 4,
      raciocinio: "Doze meses é a janela da reincidência.",
      enunciado:
        "Um condutor é autuado pelo art. 165-B e, oito meses depois, comete a mesma infração. A penalidade da segunda autuação é",
      alternativas: [
        "multa de cinco vezes, pois a reincidência só conta após 24 meses",
        "suspensão do direito de dirigir, sem multa, por ser reincidência",
        "cassação da CNH, efeito certo de toda reincidência gravíssima",
        "multa de duas vezes e apreensão do veículo, pela regra geral do CTB",
        "multa de dez vezes e suspensão do direito de dirigir",
      ],
      correta: 4,
      explicacao: "Reincidência em até 12 meses no art. 165-B gera multa de dez vezes e suspensão do direito de dirigir.",
      explicacaoErradas:
        "“após 24 meses” erra o prazo. “sem multa” apaga a multa. “cassação” não está no artigo. “apreensão do veículo” não existe nesse dispositivo.",
      pegadinha: "Trocar suspensão por cassação.",
      conhecimento: "O art. 165-C prevê a mesma punição para quem dirige com resultado positivo no exame do caput do art. 148-A.",
    },
    {
      topico: "Exame toxicológico",
      subassunto: "Resultado positivo",
      dificuldade: 5,
      raciocinio: "O levantamento da suspensão depende de novo exame.",
      enunciado:
        "O exame toxicológico periódico de um condutor da categoria C dá resultado positivo. Pelo art. 148-A, § 5º, a consequência é a",
      alternativas: [
        "suspensão do direito de dirigir por 3 meses, até novo exame negativo",
        "multa de cinco vezes e cassação imediata da CNH, sem direito a recurso",
        "suspensão por 12 meses, com outras penalidades acessórias cumuladas",
        "advertência por escrito e repetição do exame em 30 dias, sem suspensão",
        "suspensão por 3 meses, que termina sozinha ao fim do prazo, sem novo exame",
      ],
      correta: 0,
      explicacao:
        "O inciso II do § 5º prevê suspensão por 3 meses, com levantamento condicionado a novo exame negativo no Renach e vedação de outras penalidades.",
      explicacaoErradas:
        "“sem direito a recurso” contraria o § 4º, e “cassação” não consta. “12 meses” e “acessórias” contrariam o texto. “advertência” não existe aqui. “termina sozinha” ignora a condição.",
      pegadinha: "Esquecer que o fim da suspensão depende de novo exame.",
      conhecimento: "O § 4º garante contraprova e recurso, sem efeito suspensivo.",
    },
    {
      topico: "Novas definições",
      subassunto: "Quadriciclo",
      dificuldade: 5,
      raciocinio: "O limite muda conforme o uso: passageiros ou carga.",
      enunciado:
        "Um veículo automotor de 4 rodas, com cabine, tem massa em ordem de marcha de 550 kg e serve ao transporte de carga. Pelo Anexo I, ele",
      alternativas: [
        "não é quadriciclo, pois o limite de massa é 450 kg em qualquer uso",
        "é triciclo, porque o limite de massa não varia com o número de rodas",
        "é quadriciclo, pois o limite para carga é de 600 kg",
        "não é quadriciclo, pois esse veículo nunca tem cabine, segundo o Anexo I",
        "é ciclomotor, porque a definição depende só da potência do motor",
      ],
      correta: 2,
      explicacao: "Quadriciclo tem 4 rodas, com ou sem cabine, e massa de até 450 kg para passageiros ou 600 kg para cargas.",
      explicacaoErradas:
        "“450 kg em qualquer uso” esquece o limite de carga. “triciclo” tem 3 rodas. “nunca tem cabine” contraria o Anexo I. “ciclomotor” tem 2 ou 3 rodas.",
      pegadinha: "Decorar só o limite de 450 kg.",
      conhecimento: "Triciclo tem 3 rodas, com ou sem cabine, e não possui as características de ciclomotor.",
    },
    {
      topico: "Novas definições",
      subassunto: "Veículo automotor",
      dificuldade: 5,
      raciocinio: "O art. 96 perdeu a classe “elétrico”.",
      enunciado:
        "Depois da Lei 14.599/2023, quanto à tração, um carro elétrico e um ônibus elétrico ligado a rede aérea, sem trilhos, são classificados como",
      alternativas: [
        "veículos elétricos, classe própria que substituiu a tração automotora",
        "veículos de tração especial, sem registro como automotores no Renavam",
        "automotor o carro e de tração mista o ônibus, por causa da linha elétrica",
        "automotores, conceito que abrange propulsão elétrica e híbrida",
        "reboques, no caso do ônibus, porque a energia vem de fora do veículo",
      ],
      correta: 3,
      explicacao:
        "O Anexo I define veículo automotor com propulsão a combustão, elétrica ou híbrida, incluídos os ligados a linha elétrica sem trilhos. A alínea do art. 96 sobre tração elétrica foi revogada.",
      explicacaoErradas:
        "“classe própria” foi justamente o que saiu do art. 96. “tração especial” e “tração mista” não existem. “reboques” são veículos engatados a outro.",
      pegadinha: "Achar que elétrico ainda é classe separada.",
      conhecimento: "Ônibus elétrico ligado a rede aérea é o caso citado no próprio Anexo I.",
    },
    {
      topico: "Contran",
      subassunto: "Composição e presidência",
      dificuldade: 4,
      raciocinio: "Presidente é ministro. Dirigente do órgão é secretário.",
      enunciado: "Pelo art. 10 do CTB, na redação atual, o Contran",
      alternativas: [
        "é presidido pelo dirigente do órgão máximo executivo de trânsito da União, que vota",
        "é presidido pelo ministro a que se subordina o órgão máximo executivo federal",
        "decide por maioria simples dos ministros presentes à reunião do conselho",
        "tem sede em cada capital, com representação nos Estados e no Distrito Federal",
        "só aceita a presença pessoal dos ministros, sem nenhum tipo de representação",
      ],
      correta: 1,
      explicacao:
        "O § 3º-A dá a presidência ao ministro ao qual se subordina o órgão máximo executivo de trânsito da União. O dirigente desse órgão atua como secretário-executivo.",
      explicacaoErradas:
        "“dirigente” é o secretário-executivo, pelo § 5º. “maioria simples” contraria o § 6º, que exige maioria absoluta. “sede em cada capital” erra: a sede é no Distrito Federal. “presença pessoal” contraria o § 4º.",
      pegadinha: "Trocar presidente por secretário-executivo.",
      conhecimento: "Os ministros podem ser representados por servidores de nível igual ou superior ao CCE 17, ou por oficial-general.",
    },
  ],
};
