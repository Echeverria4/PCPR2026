import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "ingles-09",
  resumo: {
    ideia:
      "Segundo treino de leitura. Os textos são curtos e informativos, e as questões testam dado, comparação, título e vocabulário.",
    itens: [
      {
        termo: "Dados e números",
        faz: "Percent, one in four e about pedem atenção. Confira a base de cada número.",
      },
      {
        termo: "O que o texto não diz",
        faz: "Se o texto informa que algo não foi medido, nenhuma conclusão sobre isso é segura.",
      },
      {
        termo: "Comparações",
        faz: "Better than, as much as e more than mostram qual lado ganha. Ache os dois lados.",
      },
      {
        termo: "Título",
        faz: "Precisa cobrir o texto inteiro, sem ficar em um detalhe nem ir além dele.",
      },
      {
        termo: "Modais no texto",
        faz: "May permite ou indica chance. Must not proíbe. Should recomenda.",
      },
      {
        termo: "Vocabulário do sono",
        faz: "Nap é cochilo, doze off é cochilar, drowsy é sonolento, e tired é cansado.",
      },
    ],
    cuidado: "“Not all” não é “none”. Dizer que nem todos sentem algo não significa que ninguém sente.",
  },
  questoes: [
    {
      topico: "Interpretação",
      subassunto: "Comparação",
      dificuldade: 4,
      raciocinio: "Ache os dois lados de better than.",
      enunciado:
        "Texto: “Many drivers believe that coffee or an open window can keep them awake. These tricks may help for a few minutes, but only sleep removes tiredness. A short nap of 20 minutes is a better choice than another cup of coffee.” Segundo o texto,",
      alternativas: [
        "café e janela aberta acabam de vez com o cansaço do motorista",
        "o motorista deve evitar cochilos de 20 minutos durante a viagem",
        "um cochilo curto é melhor escolha do que mais um café",
        "a janela aberta ajuda mais do que um cochilo de 20 minutos",
        "os truques nunca ajudam, nem por alguns minutos, ao volante",
      ],
      correta: 2,
      explicacao: "O texto diz que só o sono tira o cansaço e que o cochilo curto é melhor do que outro café.",
      explicacaoErradas:
        "“acabam de vez” contraria for a few minutes. “evitar cochilos” inverte o conselho. “ajuda mais” inverte a comparação. “nunca ajudam” contraria may help.",
      pegadinha: "Concluir que os truques não têm efeito algum.",
      conhecimento: "Awake é acordado. Asleep é dormindo.",
    },
    {
      topico: "Vocabulário em contexto",
      subassunto: "Termos do sono",
      dificuldade: 4,
      raciocinio: "Doze off é verbo frasal.",
      enunciado: "Em “Truck drivers who doze off at the wheel put everyone on the road at risk.”, “doze off” significa",
      alternativas: ["dirigem à noite", "cochilam", "bebem", "falam ao celular", "correm demais"],
      correta: 1,
      explicacao: "Doze off é cochilar sem querer, às vezes por poucos segundos. At the wheel é ao volante.",
      explicacaoErradas:
        "“dirigem à noite”, “bebem”, “falam ao celular” e “correm demais” são outros riscos, sem relação com o verbo.",
      pegadinha: "Ler doze como dozen, dúzia.",
      conhecimento: "Fall asleep é pegar no sono.",
    },
    {
      topico: "Interpretação",
      subassunto: "Sentido de not all",
      dificuldade: 5,
      raciocinio: "Not all exclui uma parte, e não todos.",
      enunciado:
        "Texto: “Not all tired drivers feel sleepy. Some feel only irritated or distracted, which makes the danger harder to notice.” Conclui-se que",
      alternativas: [
        "o cansaço sem sono pode esconder o risco do próprio motorista",
        "todo motorista irritado ao volante está cansado e deve parar",
        "nenhum motorista cansado sente sono ao volante em viagem longa",
        "motorista distraído corre menos perigo do que o sonolento",
        "quem sente sono percebe o perigo com mais rapidez na rodovia",
      ],
      correta: 0,
      explicacao: "Parte dos cansados só fica irritada ou distraída, e isso torna o perigo mais difícil de notar.",
      explicacaoErradas:
        "“nenhum” troca not all por none. “todo motorista irritado” inverte a relação. “corre menos perigo” e “com mais rapidez” não estão no texto.",
      pegadinha: "Ler not all como none.",
      conhecimento: "Which, depois de vírgula, pode retomar a ideia inteira da oração anterior.",
    },
    {
      topico: "Interpretação",
      subassunto: "Dados numéricos",
      dificuldade: 5,
      raciocinio: "Calcule a segunda parte sobre o grupo certo.",
      enunciado:
        "Texto: “In a survey of 1,000 truck drivers, 40 percent said they had driven while sleepy in the last month. Of those, one in four said they had nearly crashed. The survey did not ask how many hours they had slept.” Com base no texto,",
      alternativas: [
        "250 dos entrevistados bateram o caminhão no mês anterior",
        "400 relataram sono ao volante, e cerca de 100 quase bateram",
        "400 dormiram menos de quatro horas antes de pegar a estrada",
        "100 dos 1.000 entrevistados relataram sono ao volante no mês",
        "o sono ao volante atingiu um em cada quatro dos 1.000 ouvidos",
      ],
      correta: 1,
      explicacao: "40% de 1.000 são 400. Um em cada quatro desses 400 são 100. Quase bater não é bater.",
      explicacaoErradas:
        "“250” aplica one in four sobre os 1.000 e troca nearly crashed por bater. “menos de quatro horas” contraria did not ask. “100 dos 1.000” usa o número errado para o sono. “um em cada quatro dos 1.000” erra a base.",
      pegadinha: "Aplicar a fração ao total, e não ao grupo.",
      conhecimento: "Nearly e almost indicam que o fato não chegou a acontecer.",
    },
    {
      topico: "Modais no texto",
      subassunto: "Permissão e proibição",
      dificuldade: 4,
      raciocinio: "May e must not têm forças diferentes.",
      enunciado:
        "Texto: “Under the company's new policy, drivers may take a nap in the cabin, but they must not sleep in the fuel area.” Pela regra,",
      alternativas: [
        "cochilar na cabine é obrigatório, e dormir no pátio é recomendado",
        "o cochilo na cabine é permitido, e dormir no abastecimento é proibido",
        "cochilar na cabine é proibido, e dormir no abastecimento é permitido",
        "o cochilo e o sono são vedados em toda a área da empresa",
        "o motorista é aconselhado a dormir na área de combustíveis",
      ],
      correta: 1,
      explicacao: "May dá permissão. Must not proíbe. Fuel area é a área de combustível.",
      explicacaoErradas:
        "“obrigatório” pede must. “proibido” e “permitido” trocados invertem a regra. “vedados em toda a área” exagera. “aconselhado” contraria must not.",
      pegadinha: "Ler may como obrigação.",
      conhecimento: "Under, antes de policy ou law, é “de acordo com”.",
    },
    {
      topico: "Interpretação",
      subassunto: "Título do texto",
      dificuldade: 5,
      raciocinio: "O “even so” mostra a virada do texto.",
      enunciado:
        "Texto: “Sleepy drivers react more slowly, make worse decisions and often do not remember the last few kilometers. Even so, most of them think they are in control.” O melhor título para o texto é",
      alternativas: [
        "How to Remember Every Kilometer of Your Long Trip",
        "Why Slow Drivers Make Better Decisions on the Road",
        "The False Confidence of Sleepy Drivers",
        "Sleepy Drivers Are Always Aware of the Danger Ahead",
        "The Best Roads for Drivers Who Want to Stay in Control",
      ],
      correta: 2,
      explicacao: "O texto lista as falhas de quem dirige com sono e fecha dizendo que, mesmo assim, a maioria se acha no controle.",
      explicacaoErradas:
        "“How to Remember” fica em um detalhe. “Why Slow Drivers” lê react more slowly como dirigir devagar. “Always Aware” contraria o texto. “The Best Roads” traz outro assunto.",
      pegadinha: "Escolher um título que cobre só uma frase.",
      conhecimento: "Even so é “mesmo assim”.",
    },
  ],
};
