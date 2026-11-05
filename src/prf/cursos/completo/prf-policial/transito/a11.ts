import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-11",
  resumo: {
    ideia:
      "A Resolução Contran 1.031/2026 revogou a 432/2013 e passou a regular a fiscalização de álcool e outras substâncias. O PDF do curso ainda ensina a norma antiga.",
    itens: [
      {
        termo: "Fiscalização",
        faz: "Qualquer condutor pode ser fiscalizado, mesmo sem sinais. Em sinistro, sempre que possível.",
      },
      {
        termo: "Meios",
        faz: "Álcool: etilômetro ou sinais. Outra substância: aparelho próprio ou sinais. O etilômetro serve só para álcool.",
      },
      {
        termo: "Teste passivo",
        faz: "É triagem, sem obrigação. Só indica e não fundamenta autuação.",
      },
      {
        termo: "Infração, art. 8º",
        faz: "Etilômetro a partir de 0,05 mg/L medidos, teste positivo de outra substância ou sinais.",
        pista: "O limite regulamentado é sempre 0,00.",
      },
      {
        termo: "Crime, art. 9º",
        faz: "Etilômetro a partir de 0,34 mg/L medidos, que viram 0,30 no valor considerado. Também teste positivo, sinais, sangue de 6 dg/L, exame clínico e laboratório.",
      },
      {
        termo: "Sinais",
        faz: "Pelo menos dois, em conjunto, descritos no auto ou em termo específico.",
      },
      {
        termo: "Recusa",
        faz: "Sem dois sinais: art. 165-A. Com dois sinais: art. 165, sem prejuízo do crime. O condutor não escolhe o meio.",
      },
      {
        termo: "Veículo",
        faz: "Retido até vir condutor habilitado, também fiscalizado. Sem ele, vai ao depósito mediante recibo.",
      },
      {
        termo: "CNH",
        faz: "O agente não recolhe o documento de habilitação nessas infrações.",
      },
    ],
    cuidado: "Em óbito por sinistro, o exame de sangue ou laboratorial é obrigatório para a perícia oficial.",
  },
  questoes: [
    {
      topico: "Etilômetro",
      subassunto: "Infração e crime",
      dificuldade: 5,
      raciocinio: "A tabela parte da medição realizada: 0,05 e 0,34.",
      enunciado:
        "Três condutores sopram um etilômetro regular, sem sinais de alteração, com medições de 0,04, 0,20 e 0,34 mg/L. Pelos arts. 8º e 9º da Resolução Contran 1.031/2026, os resultados indicam, nessa ordem,",
      alternativas: [
        "infração, infração e crime",
        "nada, crime e crime",
        "infração, crime e crime",
        "nada, infração e crime",
        "nada, infração e infração",
      ],
      correta: 3,
      explicacao: "Abaixo de 0,05 mg/L medidos não há caracterização por etilômetro. De 0,05 a 0,33 há infração. A partir de 0,34, valor considerado de 0,30, há crime, sem afastar a infração.",
      explicacaoErradas:
        "“infração, infração” trata 0,04 como infração. “crime e crime” põe 0,20 no crime. “infração e infração” deixa 0,34 fora do crime.",
      pegadinha: "Comparar a medição com 0,30 sem usar a tabela.",
      conhecimento: "O erro máximo admissível abaixo de 0,40 mg/L é de 0,032 mg/L, e o Anexo I traz o valor considerado de cada medição.",
    },
    {
      topico: "Recusa",
      subassunto: "Dois sinais",
      dificuldade: 5,
      raciocinio: "Conte os sinais antes de escolher o artigo.",
      enunciado:
        "Um condutor recusa o etilômetro, e a equipe nota apenas odor de álcool no hálito. Pelo art. 8º da Resolução Contran 1.031/2026, aplica-se",
      alternativas: [
        "o art. 165-A, pois não há dois sinais presentes",
        "o art. 165, pois o odor de álcool já caracteriza a alteração psicomotora do condutor",
        "o art. 306, pois a recusa somada ao odor de álcool é suficiente para o crime no local",
        "nenhum artigo, pois a recusa é direito do condutor e não gera penalidade administrativa",
        "o art. 165 e o art. 306, sem prejuízo do art. 165-A, por serem três condutas diferentes",
      ],
      correta: 0,
      explicacao: "O § 1º aplica o art. 165-A a quem recusa sem pelo menos dois sinais. Com dois sinais, o § 2º aplica o art. 165, sem prejuízo do crime.",
      explicacaoErradas:
        "“art. 165” e “art. 306” exigiriam pelo menos dois sinais. “nenhum artigo” contraria o § 1º. “três condutas diferentes” soma artigos que se excluem nesse caso.",
      pegadinha: "Contar um sinal como se bastasse.",
      conhecimento: "O art. 165-A traz as mesmas penalidades do art. 165: gravíssima, multa de 10 vezes e suspensão por 12 meses.",
    },
    {
      topico: "Recusa",
      subassunto: "Escolha do meio",
      dificuldade: 4,
      raciocinio: "O procedimento oferecido é o que conta.",
      enunciado:
        "Na fiscalização, o agente oferece o etilômetro. O condutor nega o sopro e pede que seja feito um exame de sangue no lugar dele. Pelo art. 8º, § 3º, da Resolução Contran 1.031/2026,",
      alternativas: [
        "não há recusa, pois ele se dispôs a fazer outro procedimento de valor superior",
        "o agente é obrigado a levar o condutor ao hospital para o exame que foi pedido",
        "há recusa, pois o condutor não escolhe o meio de verificação",
        "só há recusa se ele também negar o exame clínico feito por um médico perito",
        "o auto fica suspenso até a conclusão do exame de sangue feito em laboratório",
      ],
      correta: 2,
      explicacao: "A recusa é a negativa ao procedimento de verificação oferecido, e o condutor não escolhe o meio.",
      explicacaoErradas:
        "“não há recusa” e “obrigado a levar” dão ao condutor uma escolha que a norma não dá. “exame clínico” e “auto fica suspenso” criam condições inexistentes.",
      pegadinha: "Pensar que o pedido de exame de sangue afasta a recusa.",
      conhecimento: "Sangue, exame clínico e laboratório são meios suplementares do art. 9º, a critério da autoridade policial.",
    },
    {
      topico: "Procedimentos",
      subassunto: "Teste passivo",
      dificuldade: 4,
      raciocinio: "Pré-teste só faz triagem.",
      enunciado:
        "Em uma operação, o aparelho de teste passivo indica presença de álcool perto da boca de um condutor. Pelo art. 4º da Resolução Contran 1.031/2026, esse resultado",
      alternativas: [
        "basta para a autuação pelo art. 165, pois o aparelho é homologado pelo Inmetro",
        "obriga o condutor a fazer o exame de sangue, sob pena de prisão em flagrante",
        "vale como sinal de alteração, somando-se a outro sinal para a autuação do condutor",
        "pode ser descontado do erro máximo do etilômetro no auto que venha a ser lavrado",
        "só serve de indicativo e não fundamenta autuação",
      ],
      correta: 4,
      explicacao: "O pré-teste ou teste passivo é triagem, não tem caráter obrigatório, é só indicativo e não fundamenta autuação.",
      explicacaoErradas:
        "“basta para a autuação” contraria o artigo. “prisão em flagrante” não é efeito do teste. “vale como sinal” não está no Anexo II. “descontado do erro máximo” não faz sentido na norma.",
      pegadinha: "Usar a triagem como prova.",
      conhecimento: "Depois da triagem, a fiscalização segue pelo etilômetro, pelo aparelho de outras substâncias ou pelos sinais.",
    },
    {
      topico: "Sinais",
      subassunto: "Art. 7º",
      dificuldade: 4,
      raciocinio: "Quantidade e registro são exigidos.",
      enunciado:
        "Para caracterizar a infração por sinais de alteração da capacidade psicomotora, sem teste, o art. 7º da Resolução Contran 1.031/2026 exige",
      alternativas: [
        "um sinal, desde que seja o odor de álcool, com registro em vídeo",
        "pelo menos dois sinais, em conjunto, descritos no auto ou em termo específico",
        "pelo menos três sinais do Anexo II, cada um atestado por agente diferente na via",
        "laudo de médico perito que confirme os sinais descritos pelo agente de trânsito",
        "a confissão do condutor sobre o consumo, assinada na presença de duas testemunhas",
      ],
      correta: 1,
      explicacao: "O § 1º exige pelo menos dois sinais em conjunto, e o § 2º manda descrevê-los no auto ou em termo específico.",
      explicacaoErradas:
        "“um sinal” e “três sinais” erram a quantidade. “laudo de médico” e “confissão do condutor” não são exigências do artigo.",
      pegadinha: "Exigir médico para sinais.",
      conhecimento: "O Anexo II reúne sinais de aparência, atitude, orientação, memória e capacidade motora e verbal.",
    },
    {
      topico: "Procedimentos",
      subassunto: "Outras substâncias",
      dificuldade: 5,
      raciocinio: "Etilômetro só mede álcool.",
      enunciado:
        "Um condutor com fala alterada e dificuldade de equilíbrio sopra o etilômetro, que marca 0,00 mg/L. A equipe suspeita de outra substância psicoativa. Pela Resolução Contran 1.031/2026,",
      alternativas: [
        "a fiscalização acaba, pois o etilômetro negativo afasta os sinais",
        "o condutor deve soprar de novo, até que o etilômetro registre outra substância",
        "só um exame de laboratório, feito no mesmo dia, pode comprovar a outra substância",
        "ainda cabem aparelho próprio ou sinais, pois o etilômetro só detecta álcool",
        "o caso vira art. 165-A, porque o condutor deixou de apontar a substância usada",
      ],
      correta: 3,
      explicacao: "O art. 3º, §§ 2º e 3º, separa os meios: outra substância pede aparelho de verificação de presença ou sinais, e o etilômetro é só para álcool.",
      explicacaoErradas:
        "“fiscalização acaba” esquece os sinais. “soprar de novo” atribui ao etilômetro outra função. “só um exame” contraria o art. 3º, § 2º. “deixou de apontar” não é recusa.",
      pegadinha: "Tratar 0,00 como fim da apuração.",
      conhecimento: "O aparelho deve ser certificado no SBAC por organismo acreditado pelo Inmetro, segundo o art. 6º.",
    },
    {
      topico: "Procedimentos",
      subassunto: "Reteste",
      dificuldade: 5,
      raciocinio: "O reteste é exceção.",
      enunciado:
        "Pelo art. 5º, § 2º, da Resolução Contran 1.031/2026, o reteste no etilômetro",
      alternativas: [
        "só é necessário se o resultado válido ficar prejudicado por motivo técnico ou operacional",
        "é direito do condutor sempre que ele discordar do valor mostrado no visor do aparelho",
        "é obrigatório em toda medição acima de 0,34 mg/L, para evitar a prisão por erro do aparelho",
        "substitui o desconto do erro máximo, quando as duas medições tiverem o mesmo valor",
        "deve ser feito em outro aparelho, por agente diferente, depois de 15 minutos da primeira",
      ],
      correta: 0,
      explicacao: "O reteste só é necessário quando o resultado válido for prejudicado por motivo técnico ou operacional, inclusive para afastar álcool no trato respiratório superior.",
      explicacaoErradas:
        "“direito do condutor” e “obrigatório em toda medição” ampliam a regra. “substitui o desconto” contraria o § 1º. “outro aparelho” e “15 minutos” não constam do parágrafo.",
      pegadinha: "Achar que o condutor pode exigir novo sopro.",
      conhecimento: "O parágrafo observa, quando aplicável, o jejum da regulamentação metrológica.",
    },
    {
      topico: "Veículo",
      subassunto: "Art. 11",
      dificuldade: 5,
      raciocinio: "A segunda autuação fecha a porta do novo condutor.",
      enunciado:
        "Autuado pelo art. 165, um condutor deixa o veículo com um amigo habilitado. Logo depois, a equipe o flagra de novo ao volante e configura outra vez a infração. Pelo art. 11, §§ 3º e 4º, da Resolução Contran 1.031/2026,",
      alternativas: [
        "basta apresentar um terceiro condutor habilitado, que levará o veículo do local",
        "o amigo responde só por infração leve, pois quem dirigiu foi o condutor autuado",
        "o veículo é devolvido ao dono depois do pagamento das duas multas lavradas no dia",
        "o amigo não responde, pois não houve lesão nem perigo concreto nessa devolução",
        "o veículo vai ao depósito, e o amigo pode responder pelos arts. 166 e 310",
      ],
      correta: 4,
      explicacao: "O § 4º manda recolher ao depósito sem a possibilidade de outro condutor. O § 3º liga a devolução ao art. 166 e ao crime do art. 310.",
      explicacaoErradas:
        "“terceiro condutor” contraria o § 4º. “infração leve” e “não responde” contrariam o § 3º. “pagamento das duas multas” não está no artigo.",
      pegadinha: "Repetir a regra da primeira abordagem.",
      conhecimento: "Quem recebe o veículo deve ser orientado sobre a responsabilidade a partir da entrega.",
    },
    {
      topico: "Medidas",
      subassunto: "Documento de habilitação",
      dificuldade: 5,
      raciocinio: "Compare com o texto da medida no CTB.",
      enunciado:
        "Na autuação pelo art. 165 do CTB em uma fiscalização, o que dispõe o art. 12 da Resolução Contran 1.031/2026 sobre o documento de habilitação?",
      alternativas: [
        "O agente recolhe o documento e o envia ao órgão de trânsito em até 48 horas",
        "O agente recolhe o documento somente quando a CNH estiver no formato físico",
        "O agente não o recolhe, e a suspensão segue regulamentação específica",
        "O agente recolhe o documento e o devolve só depois de cumprida a suspensão",
        "O agente retém o documento até a chegada de um condutor habilitado no local",
      ],
      correta: 2,
      explicacao: "O art. 12 diz que o agente não promove o recolhimento do documento nessas infrações. Quanto à suspensão, aplica-se o procedimento da regulamentação específica.",
      explicacaoErradas:
        "“recolhe o documento” aparece em três opções e contraria o artigo. “retém o documento” confunde com a retenção do veículo.",
      pegadinha: "Decorar só a medida administrativa do art. 165.",
      conhecimento: "A retenção do veículo continua, nos termos do art. 11.",
    },
    {
      topico: "Auto de infração",
      subassunto: "Art. 10",
      dificuldade: 4,
      raciocinio: "Separe medição de valor considerado.",
      enunciado:
        "Para o auto de infração do art. 165 baseado em etilômetro, o art. 10 da Resolução Contran 1.031/2026 exige, entre outros dados,",
      alternativas: [
        "só a medição realizada, pois o valor considerado é calculado depois pelo órgão",
        "a medição, o valor considerado e a identificação do aparelho e do teste",
        "o limite regulamentado de 0,30 mg/L e a assinatura de duas testemunhas no local",
        "a descrição de dois sinais, ainda que o teste do etilômetro tenha dado positivo",
        "a data da próxima verificação do aparelho e a medição de um segundo teste feito",
      ],
      correta: 1,
      explicacao: "O inciso I pede marca, modelo, série ou número patrimonial, número do teste, medição e valor considerado. O limite regulamentado pode ser dispensado, pois é sempre 0,00.",
      explicacaoErradas:
        "“só a medição” ignora o valor considerado. “0,30 mg/L” não é o limite da infração. “dois sinais” é outro meio. “segundo teste” não é exigência do inciso.",
      pegadinha: "Trocar o limite da infração pelo do crime.",
      conhecimento: "No caso de aparelho para outras substâncias, o auto traz marca, modelo, identificação e o tipo de substância detectada.",
    },
    {
      topico: "Sinistros",
      subassunto: "Óbito",
      dificuldade: 4,
      raciocinio: "O art. 13 cuida da perícia oficial.",
      enunciado:
        "Em sinistro de trânsito com óbito, o art. 13 da Resolução Contran 1.031/2026 determina que, para fins da perícia oficial,",
      alternativas: [
        "é obrigatório exame de sangue ou laboratorial para detectar álcool ou substância",
        "o exame depende da autorização da família, por proteção de dados da pessoa morta",
        "o etilômetro é aplicado em todos os ocupantes do veículo, mesmo os que não dirigiam",
        "o exame só é feito se o condutor tiver sido autuado antes pelos arts. 165 ou 165-A",
        "o resultado do exame fica sob sigilo total, sem uso em nenhuma política de segurança",
      ],
      correta: 0,
      explicacao: "O art. 13 torna obrigatório o exame de sangue ou outro exame laboratorial. As informações subsidiam políticas públicas de segurança viária, observada a LGPD.",
      explicacaoErradas:
        "“autorização da família”, “todos os ocupantes” e “autuado antes” não constam do artigo. “sigilo total” contraria o parágrafo único.",
      pegadinha: "Ler o artigo como regra de autuação.",
      conhecimento: "Em sinistro com ou sem vítimas, a fiscalização deve ocorrer sempre que possível, pelo art. 2º, § 2º.",
    },
  ],
};
