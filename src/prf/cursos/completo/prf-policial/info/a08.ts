import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-08",
  resumo: {
    ideia:
      "WhatsApp e Telegram são mensageiros. A diferença que mais cai é onde as mensagens ficam e como elas são protegidas.",
    itens: [
      {
        termo: "Cadastro no WhatsApp",
        faz: "A conta nasce do número de telefone, confirmado por um código.",
      },
      {
        termo: "Aparelhos conectados",
        faz: "O celular principal conecta outros aparelhos. Cada um funciona de forma independente.",
      },
      {
        termo: "Criptografia no WhatsApp",
        faz: "As mensagens têm criptografia de ponta a ponta.",
      },
      {
        termo: "WhatsApp Business",
        faz: "Versão para empresas atenderem clientes.",
      },
      {
        termo: "Telegram na nuvem",
        faz: "As mensagens ficam sincronizadas, e a conta abre em vários aparelhos.",
      },
      {
        termo: "Chat secreto",
        faz: "Conversa do Telegram com criptografia de ponta a ponta, presa aos aparelhos usados.",
      },
      {
        termo: "Grupos e canais",
        faz: "No grupo, os membros conversam. No canal, os administradores transmitem a um público grande.",
      },
      {
        termo: "Nome de usuário",
        faz: "No Telegram, permite ser encontrado sem mostrar o número.",
      },
    ],
    cuidado:
      "No Telegram, a criptografia de ponta a ponta das mensagens fica no chat secreto, e não em toda conversa.",
  },
  questoes: [
    {
      topico: "WhatsApp",
      subassunto: "Confirmação do número",
      dificuldade: 4,
      raciocinio: "A conta é o número, e o número precisa ser provado.",
      enunciado:
        "Ao instalar o WhatsApp em um celular novo, o aplicativo confirma que o número pertence ao usuário por meio de",
      alternativas: [
        "uma senha criada no site do fabricante do aparelho usado",
        "um código enviado ao número, por mensagem ou por ligação",
        "uma foto do documento pessoal, conferida pelo aplicativo",
        "um endereço de e-mail cadastrado na loja de aplicativos",
        "um certificado digital instalado no próprio aparelho novo",
      ],
      correta: 1,
      explicacao: "O aplicativo envia um código ao número informado. O usuário digita o código para confirmar.",
      explicacaoErradas:
        "“uma senha” não é o que confirma o número. “uma foto do documento” não faz parte do cadastro. “um endereço de e-mail” não prova a posse da linha. “um certificado digital” não é exigido.",
      pegadinha: "Achar que a conta depende de login e senha, como um site comum.",
      conhecimento: "O código nunca deve ser passado a terceiros.",
    },
    {
      topico: "WhatsApp",
      subassunto: "Aparelhos conectados",
      dificuldade: 5,
      raciocinio: "Cada aparelho se conecta de forma independente.",
      enunciado:
        "Um agente conectou o WhatsApp ao computador do posto. Depois, o celular principal ficou sem internet por algumas horas. Nessa situação, o computador",
      alternativas: [
        "deixa de funcionar assim que o celular perde a internet",
        "perde a criptografia até que o celular volte a se conectar",
        "passa a ser o aparelho principal da conta, de forma definitiva",
        "só recebe mensagens de texto, sem fotos nem arquivos anexos",
        "segue funcionando, pois cada aparelho se conecta sozinho",
      ],
      correta: 4,
      explicacao: "Cada aparelho conectado funciona de forma independente, com a mesma proteção. O celular principal serve para confirmar o número e conectar aparelhos.",
      explicacaoErradas:
        "“deixa de funcionar” descreve o modelo antigo. “perde a criptografia” erra: a proteção segue igual. “passa a ser o aparelho principal” erra: o papel não muda. “só recebe mensagens de texto” inventa um limite.",
      pegadinha: "Lembrar do modelo antigo, em que o computador dependia do celular ligado.",
      conhecimento: "O celular principal ainda é preciso para conectar novos aparelhos.",
    },
    {
      topico: "WhatsApp",
      subassunto: "Versão para empresas",
      dificuldade: 4,
      raciocinio: "Atendimento ao cliente aponta para a versão comercial.",
      enunciado:
        "Uma pequena empresa de guincho quer perfil comercial e ferramentas para organizar o atendimento aos clientes. A versão adequada é o",
      alternativas: [
        "WhatsApp Business",
        "WhatsApp Web, que é a versão paga para todas as empresas",
        "chat secreto, que separa os clientes por tipo de serviço",
        "canal do Telegram, que é o mesmo produto do WhatsApp",
        "aplicativo comum, que não permite uso por empresas",
      ],
      correta: 0,
      explicacao: "O WhatsApp Business foi feito para empresas gerirem o atendimento aos clientes.",
      explicacaoErradas:
        "“WhatsApp Web” é o acesso pelo navegador. “chat secreto” é recurso do Telegram. “canal do Telegram” é de outro aplicativo. “aplicativo comum” não tem as ferramentas comerciais pedidas.",
      pegadinha: "Confundir o acesso pelo computador com a versão para empresas.",
      conhecimento: "Web é forma de acesso. Business é versão do produto.",
    },
    {
      topico: "Telegram",
      subassunto: "Mensageiro em nuvem",
      dificuldade: 5,
      raciocinio: "As conversas comuns ficam sincronizadas na nuvem.",
      enunciado:
        "Um usuário troca de celular e, ao entrar no Telegram, vê suas conversas comuns no aparelho novo, sem restaurar nenhum backup. Isso ocorre porque o Telegram",
      alternativas: [
        "copia as conversas por cabo para o outro aparelho do usuário",
        "guarda as conversas apenas no chip da linha telefônica usada",
        "mantém as conversas em chats secretos, abertos em todo aparelho",
        "é um mensageiro em nuvem, com sincronização contínua",
        "envia todas as conversas por e-mail ao trocar de aparelho",
      ],
      correta: 3,
      explicacao: "O Telegram guarda as conversas comuns na nuvem e sincroniza os aparelhos.",
      explicacaoErradas:
        "“copia por cabo” e “envia por e-mail” não são o funcionamento do serviço. “apenas no chip” erra: o chip não guarda as conversas. “chats secretos” ficam presos aos aparelhos usados.",
      pegadinha: "Aplicar ao Telegram a lógica de backup do WhatsApp.",
      conhecimento: "Conversa comum: nuvem. Chat secreto: nos aparelhos.",
    },
    {
      topico: "Telegram",
      subassunto: "Chat secreto",
      dificuldade: 5,
      raciocinio: "A proteção de ponta a ponta nas mensagens é do chat secreto.",
      enunciado:
        "Dois agentes querem usar o Telegram com criptografia de ponta a ponta nas mensagens, sem que elas fiquem disponíveis em outros aparelhos da conta. Devem usar",
      alternativas: [
        "um grupo fechado, pois todo grupo do Telegram tem essa proteção",
        "um chat secreto",
        "um canal privado, pois canal só permite mensagens criptografadas",
        "a conversa comum, pois ela é protegida da mesma forma que o chat",
        "a versão web, pois o navegador faz essa criptografia sozinho",
      ],
      correta: 1,
      explicacao: "O chat secreto tem criptografia de ponta a ponta e fica preso aos aparelhos da conversa.",
      explicacaoErradas:
        "“grupo fechado”, “canal privado” e “conversa comum” ficam na nuvem, sem essa proteção de ponta a ponta. “versão web” não cria chat secreto só por usar o navegador.",
      pegadinha: "Achar que toda conversa do Telegram é de ponta a ponta.",
      conhecimento: "No WhatsApp, a proteção é padrão. No Telegram, as mensagens exigem o chat secreto.",
    },
    {
      topico: "Telegram",
      subassunto: "Grupo ou canal",
      dificuldade: 4,
      raciocinio: "Aviso de poucos para muitos, sem conversa, é canal.",
      enunciado:
        "Um órgão quer enviar avisos a um público muito grande pelo Telegram, em que só os administradores publicam e os inscritos apenas leem. O recurso adequado é",
      alternativas: [
        "o chat secreto, que aceita qualquer número de inscritos",
        "o grupo comum, em que os membros nunca podem responder",
        "o nome de usuário, que distribui os avisos automaticamente",
        "o bloqueio de contatos, que limita quem pode ler os avisos",
        "o canal",
      ],
      correta: 4,
      explicacao: "O canal transmite mensagens a um público grande. Em geral, só os administradores publicam.",
      explicacaoErradas:
        "“chat secreto” é conversa entre duas pessoas. “grupo comum” permite que os membros conversem. “nome de usuário” serve para ser encontrado. “bloqueio de contatos” não transmite avisos.",
      pegadinha: "Trocar grupo por canal. Só no grupo os membros conversam.",
      conhecimento: "Grupo: muitos para muitos. Canal: poucos para muitos.",
    },
  ],
};
