import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-18",
  resumo: {
    ideia:
      "A Resolução 723/2018, com as mudanças da 844/2021, padroniza o processo de suspensão do direito de dirigir e de cassação da habilitação. O CTB traz os limites, e ela traz o caminho.",
    itens: [
      {
        termo: "Suspensão por pontos",
        faz: "20 pontos com 2 ou mais gravíssimas, 30 com 1 e 40 sem nenhuma, em 12 meses.",
        pista: "Quem exerce atividade remunerada: 40, seja qual for a natureza.",
      },
      {
        termo: "Quem aplica",
        faz: "Pontos e toxicológico: órgão de registro da habilitação. Infração específica desde 12/04/2021: quem aplica a multa.",
      },
      {
        termo: "Pontos que não contam",
        faz: "A infração que prevê suspensão por si só não soma pontos.",
      },
      {
        termo: "Curso preventivo",
        faz: "Atividade remunerada, de 30 a 39 pontos. Concluído, elimina os pontos. Novo pedido só depois de 12 meses.",
        pista: "Não precisa de trânsito em julgado.",
      },
      {
        termo: "Defesa",
        faz: "Prazo não inferior a 30 dias, contados da notificação da instauração.",
        pista: "Notificação devolvida por endereço desatualizado no Renach é válida.",
      },
      {
        termo: "Início do cumprimento",
        faz: "15 dias corridos depois do prazo de recurso, se não houver recurso, ou na entrega do documento físico, se vier antes.",
      },
      {
        termo: "Sem o curso de reciclagem",
        faz: "Acabou o prazo e faltou o curso? Restrição no Renach e, na abordagem, recolhimento do documento físico ou autuação do art. 232.",
      },
      {
        termo: "Cassação",
        faz: "Dirigir suspenso, reincidência em 12 meses nas infrações listadas ou condenação do art. 278-A.",
        pista: "Sem abordagem, não há cassação em infração do proprietário.",
      },
      {
        termo: "Reabilitação",
        faz: "Depois de 2 anos, com todos os exames. No art. 278-A, o prazo é de 5 anos.",
      },
      {
        termo: "Toxicológico positivo",
        faz: "Suspensão de 3 meses, sem curso de reciclagem. Mudar para A ou B não dispensa o novo exame negativo.",
      },
    ],
    cuidado: "O prazo de defesa subiu de 15 para 30 dias: o texto original da 723 está desatualizado.",
  },
  questoes: [
    {
      topico: "Competência",
      subassunto: "Infração específica",
      dificuldade: 5,
      raciocinio: "A regra mudou para infrações a partir de 12/04/2021.",
      enunciado:
        "Em 2026, a PRF autua um condutor por infração para a qual o CTB prevê, de forma específica, a suspensão do direito de dirigir. Pelo art. 5º da Resolução Contran 723/2018, a suspensão será aplicada",
      alternativas: [
        "pelo órgão de registro da habilitação do condutor",
        "pela PRF, órgão responsável pela penalidade de multa",
        "pelo Contran, por ser matéria de abrangência nacional",
        "pela Jari, depois de julgado o recurso do condutor",
        "pelo Cetran do Estado onde a infração foi cometida",
      ],
      correta: 1,
      explicacao: "Para infrações específicas cometidas a partir de 12/04/2021, a suspensão cabe ao órgão ou entidade responsável pela multa, pelo art. 5º, II, “b”.",
      explicacaoErradas:
        "“órgão de registro” aplica a suspensão por pontos, a do toxicológico e a de infrações anteriores. “Contran”, “Jari” e “Cetran” não aplicam essa penalidade.",
      pegadinha: "Usar a regra antiga do órgão de registro.",
      conhecimento: "Pelo art. 27-A, os órgãos autuadores podem fazer convênio com o órgão de registro para cumprir a resolução.",
    },
    {
      topico: "Suspensão por pontos",
      subassunto: "Contagem",
      dificuldade: 5,
      raciocinio: "Infração com suspensão própria não entra na soma.",
      enunciado:
        "Em 12 meses, um condutor sem atividade remunerada cometeu uma gravíssima comum, duas graves, duas médias e uma leve, além de uma infração do art. 165 do CTB, que já prevê suspensão por si só. Pelo art. 3º e pelo art. 7º, § 3º, da Resolução Contran 723/2018, para a suspensão por pontos, há",
      alternativas: [
        "35 pontos e limite de 20, com suspensão",
        "35 pontos e limite de 30, com suspensão",
        "28 pontos e limite de 30, sem suspensão",
        "28 pontos e limite de 20, com suspensão",
        "28 pontos e limite de 40, sem suspensão",
      ],
      correta: 2,
      explicacao: "7 + 5 + 5 + 4 + 4 + 3 = 28 pontos. O art. 165 fica fora da soma, pelo § 3º. Com uma gravíssima na pontuação, o limite é 30.",
      explicacaoErradas:
        "“35 pontos” soma os 7 da infração excluída. “limite de 20” pede duas gravíssimas na pontuação. “limite de 40” vale sem nenhuma gravíssima na pontuação.",
      pegadinha: "Somar a infração que já gera suspensão.",
      conhecimento: "O art. 7º considera as datas do cometimento das infrações para os 12 meses.",
    },
    {
      topico: "Processo",
      subassunto: "Notificação",
      dificuldade: 4,
      raciocinio: "Manter o endereço em dia é dever do condutor.",
      enunciado:
        "A notificação de instauração do processo de suspensão volta ao órgão porque o endereço do condutor está desatualizado no Renach. Pelo art. 10 da Resolução Contran 723/2018, com redação da 844/2021,",
      alternativas: [
        "a notificação é nula, e o processo volta à fase de autuação",
        "a notificação só vale com a assinatura pessoal do condutor",
        "a notificação vale, e a defesa tem prazo mínimo de 15 dias",
        "o processo fica suspenso até o condutor atualizar o cadastro",
        "a notificação vale, e a defesa tem prazo mínimo de 30 dias",
      ],
      correta: 4,
      explicacao: "O § 6º considera válida a notificação devolvida por desatualização do endereço. O § 5º, com a redação da 844/2021, fixa prazo de defesa não inferior a 30 dias.",
      explicacaoErradas:
        "“nula” e “fica suspenso” contrariam o § 6º. “assinatura pessoal” não é exigida: a norma admite remessa postal ou outro meio. “15 dias” é o prazo do texto antigo.",
      pegadinha: "Usar o prazo original da resolução.",
      conhecimento: "A ciência também pode ocorrer no próprio órgão, mediante certidão nos autos.",
    },
    {
      topico: "Curso preventivo",
      subassunto: "Atividade remunerada",
      dificuldade: 5,
      raciocinio: "O pedido cabe de 30 a 39 pontos, mesmo sem decisão final.",
      enunciado:
        "Um motorista profissional, em atividade remunerada, soma 34 pontos em 12 meses, e parte das infrações ainda está em recurso. Pelo art. 9º da Resolução Contran 723/2018, com redação da 844/2021, ele",
      alternativas: [
        "só pode pedir o curso depois do trânsito em julgado das infrações",
        "pode pedir o curso, mesmo sem trânsito em julgado das infrações",
        "não pode pedir o curso, pois ele cabe só com 30 pontos exatos",
        "não pode pedir o curso, pois a soma já passou de 19 pontos",
        "só pode pedir o curso depois de cumprir a suspensão por pontos",
      ],
      correta: 1,
      explicacao: "Os §§ 1º e 2º alcançam quem atinge 30 pontos e não passa de 39. O § 4º dispensa o trânsito em julgado e a pontuação no Renach.",
      explicacaoErradas:
        "“depois do trânsito em julgado” contraria o § 4º. “30 pontos exatos” ignora o § 2º. “19 pontos” era o limite antigo. “depois de cumprir” inverte a função preventiva do curso.",
      pegadinha: "Lembrar dos 14 a 19 pontos do texto original.",
      conhecimento: "Pelo § 5º, novo requerimento só cabe a cada 12 meses, contados da conclusão do último curso.",
    },
    {
      topico: "Processo",
      subassunto: "Início do cumprimento",
      dificuldade: 4,
      raciocinio: "Sem recurso nem entrega, há uma contagem automática.",
      enunciado:
        "Notificado da suspensão, um condutor com CNH digital não recorre à Jari nem entrega documento físico. Pelo art. 16, I, da Resolução Contran 723/2018, o cumprimento da penalidade começa",
      alternativas: [
        "no dia seguinte ao recebimento da notificação da penalidade",
        "no dia em que ele for abordado por um agente de trânsito",
        "15 dias corridos depois do fim do prazo para o recurso",
        "30 dias corridos depois do fim do prazo para o recurso",
        "somente quando houver a entrega de um documento físico",
      ],
      correta: 2,
      explicacao: "O inciso I fixa o início em 15 dias corridos, contados do término do prazo para recurso não interposto, inclusive com documento eletrônico.",
      explicacaoErradas:
        "“recebimento da notificação” e “abordado” não são marcos do artigo. “30 dias” é o mínimo do prazo para entregar ou recorrer, do art. 15, § 1º. “entrega” só antecipa o início, pelo inciso III.",
      pegadinha: "Trocar os 15 dias pelos 30 do art. 15.",
      conhecimento: "A inscrição no Renach traz início e término da penalidade, período em que o condutor deve fazer a reciclagem.",
    },
    {
      topico: "Reciclagem",
      subassunto: "Art. 16, § 4º",
      dificuldade: 5,
      raciocinio: "Acabou o prazo, mas o curso segue pendente.",
      enunciado:
        "Na abordagem, a PRF constata que o condutor já cumpriu o prazo da suspensão, mas não fez o curso de reciclagem. O documento dele é eletrônico. Pelo art. 16, § 4º, da Resolução Contran 723/2018,",
      alternativas: [
        "cabe processo de cassação, pois ele dirigiu durante a suspensão",
        "cabe autuação pelo art. 162, II, do CTB, por dirigir com suspensão",
        "nada cabe, pois o prazo acabou e a suspensão terminou de pleno direito",
        "cabe recolher o documento eletrônico, com bloqueio feito pela própria PRF",
        "cabe autuação pelo art. 232 do CTB, observado o § 4º do art. 270",
      ],
      correta: 4,
      explicacao: "Com documento físico, ele é recolhido. Sem porte ou com documento eletrônico, cabe a autuação do art. 232, observado o art. 270, § 4º, que trata de condutor habilitado no local.",
      explicacaoErradas:
        "“cassação” e “art. 162, II” supõem suspensão em curso, e o prazo já acabou. “nada cabe” ignora o § 3º e o § 4º. “recolher” só vale para documento físico.",
      pegadinha: "Tratar o caso como dirigir suspenso.",
      conhecimento: "Pelo § 3º, a restrição no Renach impede a devolução e a renovação do documento, a 2ª via e a Permissão Internacional para Dirigir.",
    },
    {
      topico: "Cassação",
      subassunto: "Sem abordagem",
      dificuldade: 5,
      raciocinio: "Sem abordagem, nem todo auto prova que ele dirigiu.",
      enunciado:
        "Durante a suspensão, sem abordagem, o proprietário é autuado por infração originalmente de sua responsabilidade. Pelo art. 19, § 1º, IV, da Resolução Contran 723/2018, nessa situação",
      alternativas: [
        "não será instaurado processo de cassação da habilitação",
        "será instaurada a cassação, pois o auto prova o fato",
        "será instaurada a cassação, com defesa só depois da decisão",
        "o proprietário fica impedido de ter veículo por dois anos",
        "será aberto processo novo, de nova suspensão, por 2 a 8 meses",
      ],
      correta: 0,
      explicacao: "O inciso IV afasta a cassação, sem abordagem, nas infrações originalmente do proprietário e nas de estacionamento em que não se precise o início da conduta na suspensão.",
      explicacaoErradas:
        "“o auto prova o fato” não vale aqui: infração do proprietário não mostra quem dirigia. “defesa só depois” contraria o art. 5º. “impedido de ter veículo” e “nova suspensão” não constam do inciso.",
      pegadinha: "Achar que todo auto no período gera cassação.",
      conhecimento: "O inciso V permite a cassação do proprietário que não indica o condutor infrator, pelo art. 257, § 7º, do CTB.",
    },
    {
      topico: "Cassação",
      subassunto: "Reincidência",
      dificuldade: 5,
      raciocinio: "A primeira infração segue inteira. A segunda troca a suspensão pela cassação.",
      enunciado:
        "Um condutor comete a infração do art. 165 do CTB e, oito meses depois, repete a infração. Pelo art. 19, § 2º, da Resolução Contran 723/2018, quanto à infração que configurou a reincidência,",
      alternativas: [
        "aplicam-se suspensão e cassação ao mesmo tempo, somando-se os prazos",
        "só cabe a cassação se a primeira infração tiver decisão definitiva",
        "a reincidência é contada da decisão final, e não da data da infração",
        "a suspensão deixa de ser aplicada, em razão da cassação",
        "a primeira infração perde todas as penalidades aplicadas ao condutor",
      ],
      correta: 3,
      explicacao: "O § 2º, IV, afasta a suspensão na infração que configura a reincidência, em razão da cassação. Pelo inciso III, a primeira infração recebe todas as penalidades.",
      explicacaoErradas:
        "“somando-se os prazos” contraria o inciso IV. “decisão definitiva” e “decisão final” ignoram o inciso II: valem as datas de cometimento. “perde todas as penalidades” contraria o inciso III.",
      pegadinha: "Somar suspensão e cassação.",
      conhecimento: "A lista do art. 263, II, do CTB traz o art. 162, III, e os arts. 163, 164, 165, 173, 174 e 175.",
    },
    {
      topico: "Toxicológico",
      subassunto: "Reclassificação",
      dificuldade: 5,
      raciocinio: "Baixar a categoria não apaga o resultado.",
      enunciado:
        "Um condutor da categoria E tem resultado positivo no exame toxicológico periódico e reclassifica a habilitação para a categoria B. Pelo art. 8º-A da Resolução Contran 723/2018, com redação da 844/2021,",
      alternativas: [
        "a reclassificação encerra o processo, pois a categoria B não faz o exame",
        "a reclassificação não dispensa o resultado negativo em novo exame",
        "a suspensão vira cassação, pois o condutor tentou fugir da penalidade",
        "o levantamento da suspensão passa a depender de reciclagem",
        "o novo exame só pode ser feito depois de encerrado o recurso à Jari",
      ],
      correta: 1,
      explicacao: "O § 6º diz que a reclassificação de C, D ou E para A, B ou AB não dispensa o resultado negativo em novo exame para o levantamento da suspensão.",
      explicacaoErradas:
        "“encerra o processo” contraria o § 6º. “vira cassação” não está na norma. “curso de reciclagem” não é exigido, pelo § 3º. “depois de encerrado” contraria o § 4º: o novo exame cabe a qualquer tempo.",
      pegadinha: "Exigir reciclagem na suspensão do toxicológico.",
      conhecimento: "O recurso e a contraprova não têm efeito suspensivo, pelo art. 148-A, § 4º, do CTB.",
    },
    {
      topico: "Cassação",
      subassunto: "Reabilitação",
      dificuldade: 4,
      raciocinio: "Há um prazo geral e um especial.",
      enunciado:
        "Um condutor usou o veículo para praticar receptação e foi condenado por decisão transitada em julgado, com a habilitação cassada. Pelo art. 20 da Resolução Contran 723/2018 e pelo art. 278-A do CTB, ele pode requerer a habilitação após",
      alternativas: [
        "1 ano, com novo curso de reciclagem",
        "2 anos, pela regra geral da cassação",
        "5 anos, prazo próprio desse caso",
        "8 anos, se não for reincidente",
        "10 anos, por ser crime doloso",
      ],
      correta: 2,
      explicacao: "A regra geral é de 2 anos. O § 2º do art. 20, em linha com o art. 278-A, fixa 5 anos para a cassação judicial por receptação, descaminho ou contrabando.",
      explicacaoErradas:
        "“1 ano”, “8 anos” e “10 anos” não têm base na norma. “2 anos” é o prazo geral, afastado aqui.",
      pegadinha: "Usar os 2 anos da cassação comum.",
      conhecimento: "Decorrido o prazo, o condutor é considerado inabilitado até concluir a reabilitação.",
    },
  ],
};
