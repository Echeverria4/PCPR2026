import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-09",
  resumo: {
    ideia:
      "O navegador é o programa cliente que pede as páginas aos servidores e as mostra. O que mais cai: partes da URL, navegação privativa, cache, cookies e atalhos.",
    itens: [
      {
        termo: "HTTP e HTML",
        faz: "HTTP é o protocolo que transporta a página. HTML é a linguagem em que ela é escrita.",
      },
      {
        termo: "URL",
        faz: "É o endereço do recurso: protocolo, domínio e caminho.",
        pista: "Em https://www.gov.br/prf, https é o protocolo, www.gov.br é o domínio e /prf é o caminho.",
      },
      {
        termo: "HTTPS e cadeado",
        faz: "Mostram que a conexão é criptografada. Não provam que o site é honesto.",
      },
      {
        termo: "Navegação privativa",
        faz: "Não guarda histórico, cookies e dados de formulário depois que a janela é fechada.",
        pista: "Downloads e favoritos continuam salvos, e o provedor ainda vê o acesso.",
      },
      {
        termo: "Cache",
        faz: "Cópias locais de partes das páginas, para abrir mais rápido.",
      },
      {
        termo: "Cookies",
        faz: "Pequenos arquivos de texto que guardam preferências e dados de sessão.",
      },
      {
        termo: "Atalhos de consulta",
        faz: "Ctrl+H: histórico. Ctrl+J: downloads. Ctrl+D: favoritar a página.",
      },
      {
        termo: "Atalhos de guia",
        faz: "Ctrl+T: nova guia. Ctrl+W: fecha a guia. Ctrl+Shift+T: reabre a guia fechada.",
      },
      {
        termo: "Outros atalhos",
        faz: "F5: atualiza. F11: tela cheia. Alt+Home: vai à página inicial.",
      },
    ],
    cuidado:
      "Privativa protege contra quem usa o mesmo computador depois. Ela não deixa ninguém anônimo na rede.",
  },
  questoes: [
    {
      topico: "Endereços",
      subassunto: "Partes da URL",
      dificuldade: 4,
      raciocinio: "Protocolo vem antes das barras, domínio depois, caminho no final.",
      enunciado: "Em https://www.gov.br/prf/servicos, os trechos https, www.gov.br e /prf/servicos são, nessa ordem,",
      alternativas: [
        "domínio, protocolo e caminho",
        "caminho, domínio e protocolo",
        "protocolo, domínio e caminho",
        "protocolo, caminho e domínio",
        "servidor, protocolo e arquivo",
      ],
      correta: 2,
      explicacao: "https é o protocolo, www.gov.br é o domínio, e /prf/servicos é o caminho dentro do site.",
      explicacaoErradas:
        "“domínio, protocolo e caminho” e “caminho, domínio e protocolo” trocam a função do https. “protocolo, caminho e domínio” inverte os dois últimos. “servidor, protocolo e arquivo” chama o https de servidor.",
      pegadinha: "Achar que tudo depois de https é domínio.",
      conhecimento: "O domínio termina na primeira barra depois das duas barras do protocolo.",
    },
    {
      topico: "Privacidade",
      subassunto: "Navegação privativa",
      dificuldade: 5,
      raciocinio: "A proteção vale para o computador, e não para a rede.",
      enunciado:
        "Em uma janela privativa, um agente acessou um site, baixou um PDF e adicionou o site aos favoritos. Depois, fechou a janela. Nesse caso,",
      alternativas: [
        "o PDF e o favorito somem, e o provedor deixa de ver o acesso",
        "o acesso fica no histórico, mas o PDF é apagado do computador",
        "o favorito some, mas o PDF fica, e o site não vê o endereço IP",
        "o PDF e o favorito ficam, e o provedor ainda pode ver o acesso",
        "nada fica salvo, e nem o site nem o provedor veem o acesso feito",
      ],
      correta: 3,
      explicacao: "O modo privativo não guarda histórico local. Arquivos baixados e favoritos permanecem, e a rede segue vendo o tráfego.",
      explicacaoErradas:
        "“o PDF e o favorito somem” erra nos dois e na visão do provedor. “o acesso fica no histórico” inverte o efeito do modo. “o site não vê o endereço IP” erra: o site precisa dele para responder. “nada fica salvo” ignora o arquivo baixado.",
      pegadinha: "Tratar a navegação privativa como anonimato.",
      conhecimento: "O modo privativo limpa rastros locais, mas não esconde o tráfego.",
    },
    {
      topico: "Privacidade",
      subassunto: "Cache e cookies",
      dificuldade: 4,
      raciocinio: "Um acelera a página, o outro lembra de você.",
      enunciado:
        "Ao voltar a um portal, as imagens abrem mais rápido e o site lembra do idioma escolhido. Esses dois efeitos vêm, nessa ordem,",
      alternativas: [
        "dos cookies e do cache do navegador",
        "do histórico e dos favoritos salvos",
        "do cache e dos cookies do navegador",
        "do DNS e do protocolo HTTP da página",
        "dos favoritos e do histórico da sessão",
      ],
      correta: 2,
      explicacao: "O cache guarda cópias locais para abrir mais rápido. Os cookies guardam preferências e dados de sessão.",
      explicacaoErradas:
        "“dos cookies e do cache” inverte a ordem. “do histórico e dos favoritos” e “dos favoritos e do histórico” não guardam imagens nem preferências. “do DNS e do protocolo HTTP” trata de endereço e de transporte.",
      pegadinha: "Inverter os termos. Cookie é texto pequeno, e não cópia da página.",
      conhecimento: "Limpar cookies pode encerrar sessões abertas nos sites.",
    },
    {
      topico: "Atalhos",
      subassunto: "Teclas de consulta",
      dificuldade: 4,
      raciocinio: "H de histórico. J de downloads. D de favoritar.",
      enunciado: "No Chrome e no Edge, os atalhos que abrem o histórico, abrem os downloads e favoritam a página são, nessa ordem,",
      alternativas: [
        "Ctrl+J, Ctrl+H e Ctrl+D",
        "Ctrl+D, Ctrl+J e Ctrl+H",
        "Ctrl+H, Ctrl+D e Ctrl+J",
        "Ctrl+T, Ctrl+J e Ctrl+D",
        "Ctrl+H, Ctrl+J e Ctrl+D",
      ],
      correta: 4,
      explicacao: "Ctrl+H abre o histórico, Ctrl+J abre os downloads, e Ctrl+D favorita a página.",
      explicacaoErradas:
        "“Ctrl+J, Ctrl+H e Ctrl+D” inverte os dois primeiros. “Ctrl+D, Ctrl+J e Ctrl+H” inverte o primeiro e o último. “Ctrl+H, Ctrl+D e Ctrl+J” inverte os dois últimos. “Ctrl+T, Ctrl+J e Ctrl+D” começa com nova guia.",
      pegadinha: "Trocar Ctrl+J e Ctrl+D, porque os dois guardam algo.",
      conhecimento: "Downloads: Ctrl+J. Favoritos: Ctrl+D.",
    },
    {
      topico: "Atalhos",
      subassunto: "Reabrir guia",
      dificuldade: 4,
      raciocinio: "T abre guia. Com Shift, ela volta.",
      enunciado: "Uma guia com um formulário de consulta foi fechada por engano. Para reabri-la, o atalho adequado é",
      alternativas: ["Ctrl+T", "Ctrl+W", "Ctrl+Shift+T", "Ctrl+Shift+N", "Alt+Home"],
      correta: 2,
      explicacao: "Ctrl+Shift+T reabre a última guia fechada.",
      explicacaoErradas:
        "“Ctrl+T” abre guia nova e vazia. “Ctrl+W” fecha a guia atual. “Ctrl+Shift+N” abre uma janela privativa no Chrome e no Edge. “Alt+Home” vai à página inicial.",
      pegadinha: "Marcar Ctrl+T, que abre uma guia em branco.",
      conhecimento: "O atalho pode ser repetido para reabrir guias anteriores.",
    },
    {
      topico: "Segurança na navegação",
      subassunto: "HTTPS e cadeado",
      dificuldade: 5,
      raciocinio: "Criptografia protege o caminho, e não a intenção do site.",
      enunciado:
        "Um servidor recebe um link para pagar uma multa, e a página abre com cadeado e HTTPS. Sobre esse sinal, é correto afirmar que",
      alternativas: [
        "prova que o site pertence a um órgão público do governo federal",
        "impede que o site receba dados pessoais informados pelo usuário",
        "garante que o conteúdo da página foi conferido pelo navegador",
        "indica conexão criptografada, mas o site ainda pode ser falso",
        "dispensa a conferência do endereço, pois o golpe fica bloqueado",
      ],
      correta: 3,
      explicacao: "O HTTPS criptografa a comunicação entre navegador e site. Um site falso também pode usar HTTPS.",
      explicacaoErradas:
        "“prova que o site pertence” erra: o cadeado não diz quem é o dono legítimo. “impede que o site receba dados” erra: os dados chegam ao site. “conteúdo conferido” erra: o navegador não atesta o conteúdo. “dispensa a conferência” é o erro que o golpe explora.",
      pegadinha: "Ler o cadeado como selo de confiança.",
      conhecimento: "Sempre confira o domínio, além do cadeado.",
    },
  ],
};
