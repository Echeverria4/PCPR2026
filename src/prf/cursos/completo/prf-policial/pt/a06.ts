import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-06",
  resumo: {
    ideia:
      "Os verbos de um período precisam combinar no tempo, e a voz mostra se o sujeito faz ou sofre a ação. Quase toda questão pede reescrita sem mudar o tempo nem o sentido.",
    itens: [
      {
        termo: "Correlação básica",
        faz: "Se houver chuva, a pista fechará. Se houvesse chuva, a pista fecharia. Caso haja chuva, a pista fechará.",
        pista: "Principal no pretérito pede a subordinada no pretérito: determinou que permanecesse.",
      },
      {
        termo: "Tempo composto",
        faz: "Ter ou haver + particípio, na voz ativa. O particípio não varia: elas têm fiscalizado.",
      },
      {
        termo: "Locução passiva",
        faz: "Ser + particípio. O particípio concorda com o sujeito: as rodovias foram fiscalizadas.",
      },
      {
        termo: "Vozes",
        faz: "Ativa: o sujeito pratica. Passiva: o sujeito sofre. Reflexiva: pratica em si mesmo. Recíproca: uns nos outros.",
        pista: "“Levou um soco” tem sentido passivo, mas a voz é ativa.",
      },
      {
        termo: "Ativa para passiva",
        faz: "O objeto direto vira sujeito paciente, o sujeito vira agente da passiva, e o tempo do verbo se mantém no “ser”.",
        pista: "Sem objeto direto não há passiva.",
      },
      {
        termo: "Passiva sintética",
        faz: "Verbo transitivo direto + “se”: fiscalizaram-se os caminhões. O verbo concorda com o sujeito, e o agente não aparece.",
      },
      {
        termo: "“Se” indeterminador",
        faz: "Com verbo sem objeto direto, o “se” indetermina o sujeito e mantém o verbo no singular: precisa-se de agentes.",
      },
    ],
    cuidado:
      "Reescrita na passiva preserva o tempo: “haviam apreendido” vira “havia sido apreendida”, e não “foi apreendida”.",
  },
  questoes: [
    {
      topico: "Vozes verbais",
      subassunto: "Voz passiva analítica com tempo composto",
      dificuldade: 4,
      raciocinio: "Manter o tempo do auxiliar, pôr “sido” e fazer o particípio concordar com o novo sujeito.",
      enunciado:
        "“Os agentes haviam apreendido a carga antes da chegada do fiscal.” Assinale a transposição correta para a voz passiva analítica.",
      alternativas: [
        "A carga havia sido apreendida pelos agentes antes da chegada do fiscal.",
        "A carga foi apreendida pelos agentes logo antes da chegada do fiscal.",
        "A carga haviam sido apreendida pelos agentes antes da chegada do fiscal.",
        "A carga estava sendo apreendida pelos agentes antes da chegada do fiscal.",
        "A carga tinha sido apreendido pelos agentes antes da chegada do fiscal.",
      ],
      correta: 0,
      explicacao:
        "O objeto “a carga” vira sujeito, “os agentes” vira agente da passiva, e o mais-que-perfeito composto se mantém: “havia sido apreendida”.",
      explicacaoErradas:
        "“foi apreendida” e “estava sendo apreendida” mudam o tempo. “haviam sido” concorda com o antigo sujeito. “apreendido” não concorda com “carga”.",
      pegadinha:
        "Aceitar “foi apreendida” porque o sentido geral parece igual. Na transposição, o tempo verbal precisa ser mantido.",
      conhecimento:
        "Na passiva analítica, o auxiliar “ser” assume o tempo do verbo da ativa, e o principal vai para o particípio.",
    },
    {
      topico: "Vozes verbais",
      subassunto: "“Se” apassivador",
      dificuldade: 4,
      raciocinio: "Verificar se o verbo é transitivo direto e se a frase aceita a forma com “ser”.",
      enunciado: "Assinale a frase em que o “se” é pronome apassivador.",
      alternativas: [
        "Precisa-se de agentes nos postos da fronteira durante todo o feriado.",
        "Fiscalizaram-se os caminhões de carga perigosa durante o feriado.",
        "Trata-se de carga perigosa, segundo a nota emitida no feriado.",
        "Os motoristas se cumprimentaram na saída da balança no feriado.",
        "O condutor se feriu ao descer da cabine do caminhão no feriado.",
      ],
      correta: 1,
      explicacao:
        "“Fiscalizar” é transitivo direto, e a frase equivale a “os caminhões foram fiscalizados”. “Os caminhões” é o sujeito paciente.",
      explicacaoErradas:
        "“Precisa-se de” e “Trata-se de” têm verbo com preposição: o “se” indetermina o sujeito. “se cumprimentaram” indica ação recíproca. “se feriu” indica ação do sujeito em si mesmo.",
      pegadinha:
        "Ver o “se” depois do verbo e chamar tudo de passiva. Sem objeto direto, não há passiva.",
      conhecimento:
        "Teste do “se” apassivador: a frase pode virar “ser + particípio” sem mudar o sentido.",
    },
    {
      topico: "Vozes verbais",
      subassunto: "Passiva sintética com palavra negativa",
      dificuldade: 5,
      raciocinio: "Conferir tempo, concordância com o sujeito paciente e colocação do pronome.",
      enunciado:
        "“Os veículos não foram liberados pela fiscalização até o fim da tarde.” Assinale a reescrita correta na voz passiva sintética, sem o agente.",
      alternativas: [
        "Não se liberaram os veículos até o fim da tarde.",
        "Não liberaram-se os veículos até o fim da tarde.",
        "Não se liberou os veículos até o fim da tarde.",
        "Não se liberam os veículos até o fim da tarde.",
        "Os veículos não se liberavam até o fim da tarde.",
      ],
      correta: 0,
      explicacao:
        "O pretérito perfeito se mantém, o verbo concorda com “os veículos”, e o “não” atrai o pronome: “Não se liberaram”.",
      explicacaoErradas:
        "“Não liberaram-se” erra a colocação. “se liberou” não concorda com o sujeito paciente. “se liberam” passa para o presente, e “se liberavam”, para o imperfeito.",
      pegadinha:
        "Resolver só a concordância. A troca envolve três pontos ao mesmo tempo: tempo, número e posição do pronome.",
      conhecimento:
        "Na passiva sintética, “os veículos” continua sujeito, mesmo depois do verbo, e por isso o verbo vai ao plural.",
    },
    {
      topico: "Correlação verbal",
      subassunto: "Articulação de tempos e modos",
      dificuldade: 4,
      raciocinio: "Comparar cada frase com as correlações clássicas e ver se o tempo de referência é o mesmo.",
      enunciado: "Assinale a frase em que há articulação adequada entre tempos e modos verbais.",
      alternativas: [
        "Se a equipe puder, encerraria a operação antes do pôr do sol.",
        "Caso a ponte resistisse, o comboio passará sem precisar de desvio.",
        "O chefe determinou que a equipe permaneça no posto até ontem.",
        "Se a fiscalização fosse reforçada, o número de acidentes cairia.",
        "Quando a chuva parar, a equipe teria reaberto a pista da serra.",
      ],
      correta: 3,
      explicacao:
        "O imperfeito do subjuntivo combina com o futuro do pretérito: “fosse reforçada” e “cairia”.",
      explicacaoErradas:
        "“puder” pede “encerrará”. “resistisse” pede “passaria”. “determinou”, no pretérito, pede “permanecesse”. “parar”, no futuro do subjuntivo, pede “reabrirá” ou “terá reaberto”.",
      pegadinha:
        "Avaliar cada verbo isoladamente. Todos estão bem flexionados: o erro está na combinação entre eles.",
      conhecimento:
        "Futuro do subjuntivo combina com futuro do presente. Imperfeito do subjuntivo combina com futuro do pretérito.",
    },
    {
      topico: "Correlação verbal",
      subassunto: "Tempo composto e locução passiva",
      dificuldade: 4,
      raciocinio: "Separar o “ter” de tempo composto, com particípio fixo, do “ser” da passiva, com particípio variável.",
      enunciado: "Assinale a frase correta quanto ao emprego do particípio e do verbo auxiliar.",
      alternativas: [
        "As equipes têm fiscalizadas as rodovias nos feriados prolongados.",
        "As rodovias têm sido fiscalizado pelas equipes nos feriados.",
        "As equipes têm fiscalizado as rodovias nos feriados prolongados.",
        "As rodovias tem sido fiscalizadas pelas equipes nos feriados.",
        "As rodovias têm sidas fiscalizadas pelas equipes nos feriados.",
      ],
      correta: 2,
      explicacao:
        "No tempo composto da voz ativa, o particípio não varia: “têm fiscalizado”.",
      explicacaoErradas:
        "“têm fiscalizadas” flexiona o particípio do tempo composto. “têm sido fiscalizado” não concorda com “rodovias”. “tem” pede acento no plural. “sidas” não existe: “sido” fica invariável.",
      pegadinha:
        "Aplicar a concordância da passiva ao tempo composto. Só o particípio ligado ao “ser” concorda com o sujeito.",
      conhecimento:
        "Voz ativa: elas têm fiscalizado. Voz passiva: elas têm sido fiscalizadas.",
    },
    {
      topico: "Vozes verbais",
      subassunto: "Quando a passiva é impossível",
      dificuldade: 4,
      raciocinio: "Procurar o verbo sem objeto direto.",
      enunciado:
        "Assinale a frase que não pode passar para a voz passiva, por não ter objeto direto.",
      alternativas: [
        "O perito examinou o veículo avariado na sede do posto da rodovia federal.",
        "A chuva interditou a pista lateral durante a manhã de sábado.",
        "Os fiscais desconfiaram do laudo apresentado pela transportadora.",
        "A concessionária recuperou o acostamento em apenas duas semanas.",
        "O motorista recebeu a notificação da autuação no início da tarde.",
      ],
      correta: 2,
      explicacao:
        "Quem desconfia desconfia de algo: “do laudo” é objeto indireto. Sem objeto direto, não há sujeito para a passiva.",
      explicacaoErradas:
        "“o veículo”, “a pista lateral”, “o acostamento” e “a notificação” são objetos diretos e viram sujeito: o veículo foi examinado, a pista foi interditada, o acostamento foi recuperado, a notificação foi recebida.",
      pegadinha:
        "Procurar um complemento qualquer. A passiva depende de um complemento sem preposição.",
      conhecimento:
        "A transposição para a passiva depende de verbo transitivo direto ou de verbo com objeto direto e indireto.",
    },
  ],
};
