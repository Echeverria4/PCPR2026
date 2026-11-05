import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "transito-14",
  resumo: {
    ideia:
      "A Resolução 810/2020 define como o agente classifica o dano do veículo acidentado e o que acontece depois: restrição, reparo, baixa ou recurso.",
    itens: [
      {
        termo: "Três categorias",
        faz: "Pequena monta (DPM) ou sem dano, média monta (DMM) e grande monta (DGM).",
      },
      {
        termo: "Conta do monobloco",
        faz: "Some SIM + NA. Até 1 item: pequena. De 2 a 6: média. Acima de 6: grande.",
        pista: "NA é item não avaliado e conta como danificado.",
      },
      {
        termo: "O que se avalia",
        faz: "Danos do acidente, danos do atendimento (resgate, remoção) e danos preexistentes.",
        pista: "Os preexistentes vão também no campo observações.",
      },
      {
        termo: "Prazos",
        faz: "Ofício em até 60 dias do acidente. Restrição em até 10 dias úteis do recebimento.",
      },
      {
        termo: "Restrição",
        faz: "Enquanto durar, o veículo não circula, sob pena do art. 230, VIII, do CTB.",
      },
      {
        termo: "Média monta",
        faz: "Volta a circular com comprovação do reparo, CSV da ITL e vistoria de identificação.",
        pista: "“Sinistrado” ou “DMM” fica até a baixa definitiva.",
      },
      {
        termo: "Grande monta",
        faz: "Veículo irrecuperável: o registro é baixado.",
      },
      {
        termo: "Recurso",
        faz: "Reenquadra na categoria imediatamente inferior, com laudo de engenheiro e ART, em até 90 dias do BAT.",
        pista: "O veículo deve estar como ficou após o acidente.",
      },
      {
        termo: "Transferência",
        faz: "Média ou grande monta: só à seguradora, por sub-rogação. Média monta também pode ir a empresa de compra e venda de sinistrados.",
      },
    ],
    cuidado: "Item NA não some da conta: até prova em contrário, ele vale como dano.",
  },
  questoes: [
    {
      topico: "Classificação",
      subassunto: "Itens NA",
      dificuldade: 5,
      raciocinio: "Some SIM e NA.",
      enunciado:
        "No relatório de avarias de um automóvel com estrutura em monobloco, o policial marca SIM em 4 itens e NA em 3, pois não conseguiu verificar parte da estrutura. Pelo Anexo I da Resolução Contran 810/2020, o dano é",
      alternativas: [
        "de média monta, pois só os 4 itens vistos entram na conta final",
        "de média monta, pois os itens NA só contam depois de nova vistoria",
        "de grande monta, com classificação do veículo como irrecuperável",
        "de pequena monta, até que se prove o dano de cada item marcado com NA",
        "sem classificação, pois todo item NA obriga a refazer o relatório de avarias",
      ],
      correta: 2,
      explicacao: "SIM e NA somam 7 itens, acima de 6. Isso é grande monta, o que também classifica o veículo como irrecuperável.",
      explicacaoErradas:
        "“só os 4 itens vistos” e “depois de nova vistoria” tiram o NA da conta. “até que se prove” inverte a presunção. “refazer o relatório” não está na norma.",
      pegadinha: "Ignorar o NA.",
      conhecimento: "O art. 3º, § 4º, liga essa presunção ao § 2º do art. 1º do CTB, que trata do trânsito seguro.",
    },
    {
      topico: "Procedimento",
      subassunto: "Prazos",
      dificuldade: 4,
      raciocinio: "Sessenta dias conta do acidente. Dez dias úteis conta do recebimento.",
      enunciado:
        "Após um acidente com dano de média monta, os prazos dos arts. 4º e 5º da Resolução Contran 810/2020 para o ofício ao órgão de registro e para a inclusão da restrição são, respectivamente:",
      alternativas: [
        "até 60 dias do acidente e até 10 dias úteis do recebimento",
        "até 10 dias úteis do acidente e até 60 dias do recebimento",
        "até 30 dias do acidente e até 15 dias úteis do recebimento",
        "até 60 dias do acidente e até 15 dias corridos do recebimento",
        "até 90 dias do BAT e até 30 dias úteis contados da notificação do dono",
      ],
      correta: 0,
      explicacao: "O art. 4º dá até 60 dias da data do acidente para o ofício. O art. 5º dá até 10 dias úteis do recebimento para incluir a restrição.",
      explicacaoErradas:
        "“10 dias úteis do acidente” inverte os prazos. “30 dias” e “15 dias” não são desses artigos. “90 dias do BAT” é o prazo do recurso.",
      pegadinha: "Trocar os dois prazos.",
      conhecimento: "Depois da restrição, o proprietário é notificado imediatamente, pelo art. 6º.",
    },
    {
      topico: "Procedimento",
      subassunto: "Restrição",
      dificuldade: 4,
      raciocinio: "Com restrição, não circula.",
      enunciado:
        "A PRF aborda em rodovia um veículo com restrição administrativa ativa por dano de média monta. Pelo art. 5º, § 2º, da Resolução Contran 810/2020, o condutor",
      alternativas: [
        "está regular, pois a restrição só impede a transferência",
        "está regular, se levar o veículo à oficina com aviso escrito do dono",
        "comete crime de trânsito, e o veículo vai a leilão depois de 60 dias",
        "infringe o art. 230, VIII, do CTB, pois a circulação é proibida",
        "está regular, pois a sigla DMM no documento substitui a inspeção exigida",
      ],
      correta: 3,
      explicacao: "Enquanto durar a restrição, a circulação em vias públicas é proibida, sob pena do art. 230, VIII, do CTB.",
      explicacaoErradas:
        "“só impede a transferência” e “aviso escrito” criam exceções. “crime de trânsito” não está no parágrafo. “sigla DMM” só aparece depois do desbloqueio.",
      pegadinha: "Achar que a restrição é só de cadastro.",
      conhecimento: "O art. 230, VIII, trata do veículo sem inspeção de segurança veicular, quando obrigatória.",
    },
    {
      topico: "Média monta",
      subassunto: "Anotação",
      dificuldade: 5,
      raciocinio: "A anotação acompanha o veículo.",
      enunciado:
        "Um veículo com dano de média monta foi reparado e desbloqueado. Três anos depois, é vendido para outra UF. Pelo art. 7º, § 3º, da Resolução Contran 810/2020, a anotação “Sinistrado” ou “DMM”",
      alternativas: [
        "sai do cadastro com a aprovação na vistoria feita para a transferência",
        "sai do cadastro depois de cinco anos sem novo acidente registrado na BIN",
        "fica no documento, mas sai do cadastro quando a UF muda",
        "fica só no cadastro, pois o novo documento sai sem nenhuma observação",
        "permanece no documento e no cadastro até a baixa definitiva",
      ],
      correta: 4,
      explicacao: "O § 3º manda a anotação permanecer no documento e no cadastro da BIN, mesmo após transferências de propriedade, município ou UF, até a baixa definitiva.",
      explicacaoErradas:
        "“sai do cadastro” e “sai do cadastro” não têm base. “cinco anos” é invenção. “fica só no cadastro” contraria o § 4º, que vincula o desbloqueio a novo documento com a informação.",
      pegadinha: "Achar que venda ou reparo apagam o histórico.",
      conhecimento: "O CSV é expedido por Instituição Técnica Licenciada.",
    },
    {
      topico: "Recurso",
      subassunto: "Reenquadramento",
      dificuldade: 5,
      raciocinio: "Só um degrau abaixo, e sem mexer no veículo.",
      enunciado:
        "O dono de um veículo classificado com dano de grande monta, sem nenhum item marcado como NA, quer o reenquadramento direto para pequena monta. Pelo art. 9º da Resolução Contran 810/2020,",
      alternativas: [
        "é possível, desde que o laudo de engenheiro aponte a pequena monta em 90 dias",
        "só cabe pedir a categoria imediatamente inferior, com laudo de engenheiro e ART, em até 90 dias",
        "é possível, e o recurso vai à Jari, que o julga em 30 dias sem exigir nova avaliação técnica do veículo",
        "não cabe recurso, pois o dano de grande monta é irrecuperável por definição",
        "cabe pedir qualquer categoria, desde que o veículo já tenha sido reparado antes",
      ],
      correta: 1,
      explicacao: "O art. 9º só permite o reenquadramento na categoria imediatamente inferior, com laudo de engenheiro, ART, imagens e prazo de 90 dias da lavratura do BAT.",
      explicacaoErradas:
        "“aponte a pequena monta” pula uma categoria. “Jari” não é o órgão do recurso, que vai ao órgão de registro. “não cabe recurso” contraria o caput. “já tenha sido reparado” viola o inciso II: o veículo deve estar como ficou após o acidente.",
      pegadinha: "Reparar antes de recorrer.",
      conhecimento: "O § 6º abre uma exceção para itens NA: com eles, o reenquadramento pode chegar à pequena monta.",
    },
    {
      topico: "Transferência",
      subassunto: "Art. 14",
      dificuldade: 5,
      raciocinio: "Empresa de sinistrados só recebe média monta.",
      enunciado:
        "O dono de um veículo sem seguro, com dano de grande monta, quer vendê-lo a uma empresa cuja atividade principal é a compra e venda de veículos sinistrados. Pelo art. 14 da Resolução Contran 810/2020, ele",
      alternativas: [
        "pode vender, desde que essa seja a atividade principal da empresa",
        "pode vender, desde que o comprador não circule com o veículo na via",
        "não pode, pois essa transferência só alcança o dano de média monta",
        "não pode, salvo depois do desbloqueio e da emissão do CSV pela ITL",
        "pode vender a qualquer pessoa, pois a restrição só impede a circulação",
      ],
      correta: 2,
      explicacao: "O caput só permite a transferência à seguradora, por sub-rogação. O § 1º abre a venda à empresa de sinistrados apenas para a média monta.",
      explicacaoErradas:
        "“atividade principal” e “não circule” são requisitos do caso de média monta. “desbloqueio” e “CSV” também são dessa categoria. “qualquer pessoa” contraria o caput.",
      pegadinha: "Aplicar o § 1º à grande monta.",
      conhecimento: "Pelo art. 14, § 3º, a empresa não pode revender antes de cumprir o art. 7º.",
    },
    {
      topico: "Classificação",
      subassunto: "Veículo transportado",
      dificuldade: 4,
      raciocinio: "Cada veículo registrado é analisado por si.",
      enunciado:
        "Um caminhão-cegonha se acidenta, e os automóveis transportados sofrem avarias. Pelo art. 13 da Resolução Contran 810/2020,",
      alternativas: [
        "um só relatório cobre o conjunto, pois a ocorrência foi única no mesmo BAT",
        "só o caminhão recebe relatório, pois os automóveis não estavam circulando",
        "só os automóveis recebem relatório, pois o caminhão segue a regra própria da carga transportada",
        "o relatório cabe à seguradora, que o envia ao órgão de registro em até 60 dias",
        "cada veículo transportado tem relatório próprio, separado do relatório do transportador",
      ],
      correta: 4,
      explicacao: "O art. 13 exige relatório de avarias individual para cada veículo transportado, independente do relatório do veículo transportador.",
      explicacaoErradas:
        "“um só relatório” e “só o caminhão” contrariam o artigo. “regra própria” não existe. “cabe à seguradora” tira a tarefa da autoridade de trânsito ou de seu agente.",
      pegadinha: "Tratar a carga como um bloco só.",
      conhecimento: "Em combinações de veículos, o art. 2º, § 7º, também manda analisar cada veículo registrado.",
    },
    {
      topico: "Classificação",
      subassunto: "Danos do atendimento",
      dificuldade: 5,
      raciocinio: "O resgate também conta.",
      enunciado:
        "Para retirar uma vítima, a equipe de resgate corta duas colunas de um automóvel. Pelo art. 3º, § 5º, da Resolução Contran 810/2020, esses danos",
      alternativas: [
        "ficam fora da avaliação, pois não vieram da dinâmica do acidente",
        "ficam fora da avaliação e só constam do campo observações",
        "entram na avaliação só com a concordância escrita do proprietário",
        "entram na avaliação, pois os danos do atendimento são considerados",
        "entram pela metade, pois o resgate não é causa direta do sinistro",
      ],
      correta: 3,
      explicacao: "O § 5º, II, manda considerar os danos advindos do atendimento ao acidente, como resgate, remoção e desobstrução da via.",
      explicacaoErradas:
        "“fora da avaliação” contraria o inciso II. “campo observações” é regra adicional dos danos preexistentes. “concordância escrita” e “pela metade” não existem.",
      pegadinha: "Olhar só a batida.",
      conhecimento: "A avaliação deve ser feita, de preferência, depois do socorro e do destombamento, pelo § 7º.",
    },
  ],
};
