import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-a01",
  resumo: {
    ideia:
      "Hardware é a parte física do computador; software são os programas. A prova cobra os tipos de software e de licença, as peças da placa-mãe, as memórias (qual é rápida, qual guarda sem energia), o armazenamento e os periféricos. O segredo é saber o papel de cada peça e onde ela fica na hierarquia de memória.",
    itens: [
      {
        termo: "Tipos de software",
        faz: "Básico: faz a máquina funcionar (sistema operacional). Aplicativo: faz a tarefa do usuário (editor de texto, navegador). Utilitário: cuida da máquina e dos arquivos (antivírus, compactador, desfragmentador).",
      },
      {
        termo: "Software livre",
        faz: "Tem 4 liberdades, numeradas de 0 a 3: 0 executar para qualquer fim; 1 estudar e modificar; 2 redistribuir cópias; 3 distribuir versões modificadas. Para estudar e modificar, é preciso ter o código-fonte.",
        pista: "Livre não quer dizer grátis: software livre pode ser vendido.",
      },
      {
        termo: "GPL e copyleft",
        faz: "A GPL é a licença livre mais conhecida. Pelo copyleft, quem distribui uma versão modificada tem de manter a mesma licença livre.",
      },
      {
        termo: "Outras licenças",
        faz: "Proprietário: o código é fechado e o uso segue as regras do dono. Freeware: grátis, mas pode ter código fechado. Shareware: uso de teste, por tempo limitado ou com recursos reduzidos.",
      },
      {
        termo: "Gerações dos computadores",
        faz: "1ª válvulas; 2ª transistores; 3ª circuitos integrados; 4ª microprocessadores com integração em altíssima escala (VLSI).",
      },
      {
        termo: "Placa-mãe e chipset",
        faz: "A placa-mãe liga todas as peças. O chipset controla a comunicação: no modelo clássico, a ponte norte liga o processador à memória e ao vídeo; a ponte sul cuida dos dispositivos mais lentos.",
        pista: "On-board: vem na própria placa-mãe. Off-board: placa à parte, encaixada num slot.",
      },
      {
        termo: "ROM, BIOS e UEFI",
        faz: "ROM guarda sem energia (não volátil). Firmware é o programa gravado de fábrica num aparelho. A BIOS testa o hardware ao ligar e inicia o sistema; a UEFI é a sucessora, com inicialização segura e discos GPT acima de 2 TB.",
        pista: "EEPROM e memória flash podem ser apagadas e regravadas eletricamente.",
      },
      {
        termo: "RAM: DRAM e SRAM",
        faz: "A RAM é volátil: perde tudo sem energia. DRAM guarda o bit em capacitor e precisa de recarga (refresh); é a memória principal. SRAM usa transistores (flip-flop), é mais rápida e mais cara; é a cache.",
      },
      {
        termo: "Memória virtual",
        faz: "Quando a RAM enche, o sistema usa parte do disco como se fosse RAM. O computador continua funcionando, mas fica mais lento.",
      },
      {
        termo: "Hierarquia de memória",
        faz: "Da mais rápida para a mais lenta: registradores, cache, RAM, armazenamento (SSD, HD). Quanto mais perto do processador, mais rápida, menor e mais cara por bit.",
      },
      {
        termo: "Armazenamento",
        faz: "HD: discos magnéticos que giram, com peças móveis. SSD: memória flash, sem peças móveis, mais rápido e resistente. SSD NVMe usa o barramento PCI Express e é mais rápido que o SSD SATA.",
      },
      {
        termo: "Processador",
        faz: "Unidade de controle (comanda), unidade lógica e aritmética (calcula) e registradores (guardam o que está em uso). O clock é medido em GHz. RISC: poucas instruções simples (ARM, celulares). CISC: muitas instruções complexas (x86 dos PCs).",
      },
      {
        termo: "Periféricos",
        faz: "Entrada: teclado, mouse, scanner, microfone. Saída: monitor, impressora, projetor, caixa de som. Entrada e saída: tela sensível ao toque, pen drive, multifuncional.",
        pista: "Driver é o programa que ensina o sistema a usar o aparelho.",
      },
      {
        termo: "Bits e bytes",
        faz: "Bit é o 0 ou 1; byte são 8 bits. Cada unidade vale 1.024 da anterior: KB, MB, GB, TB. Velocidade de internet vem em bits por segundo; tamanho de arquivo, em bytes.",
      },
      {
        termo: "Energia",
        faz: "Nobreak (UPS): bateria que mantém o computador ligado quando falta luz. Filtro de linha: protege contra picos e ruídos, mas não segura a falta de energia.",
      },
    ],
  },
  questoes: [
    {
      topico: "Licenças de software",
      subassunto: "Software livre e GPL",
      dificuldade: 4,
      raciocinio: "Lembrar as 4 liberdades e que livre não quer dizer grátis.",
      enunciado:
        "Sobre o software livre, analise as afirmativas.\nI – A liberdade 0 é a de executar o programa para qualquer propósito.\nII – O acesso ao código-fonte é condição para as liberdades de estudar e de modificar o programa.\nIII – Um software livre não pode ser vendido; as cópias devem ser distribuídas de graça.\nIV – Pela GPL, quem distribui uma versão modificada do programa deve mantê-la sob a mesma licença.\nEstão corretas as afirmativas",
      alternativas: ["I e II, apenas.", "I, II e IV, apenas.", "II, III e IV, apenas.", "I, III e IV, apenas.", "I, II, III e IV."],
      correta: 1,
      explicacao:
        "A liberdade 0 é executar para qualquer fim (I). Estudar e modificar exigem o código-fonte (II). A GPL tem copyleft: a versão modificada segue com a mesma licença (IV).",
      explicacaoErradas:
        "A afirmativa III está errada: liberdade não tem a ver com preço, e software livre pode ser vendido. As sequências que deixam a IV de fora esquecem o copyleft.",
      pegadinha: "Livre é sobre liberdade de uso, não sobre ser gratuito.",
      conhecimento: "Freeware é grátis, mas pode ter código fechado; logo, nem todo software gratuito é livre.",
    },
    {
      topico: "Memórias",
      subassunto: "DRAM e SRAM",
      dificuldade: 5,
      raciocinio: "Capacitor com recarga é DRAM; transistores sem recarga é SRAM, a mais rápida.",
      enunciado:
        "Um técnico compara dois tipos de memória volátil. O primeiro guarda cada bit em um capacitor, que perde a carga e precisa ser recarregado (refresh) muitas vezes por segundo. O segundo guarda cada bit em um circuito de transistores (flip-flop) e não precisa de recarga. Sobre eles, é correto afirmar que",
      alternativas: [
        "o primeiro é a SRAM, mais rápida e cara, usada como memória principal.",
        "o segundo é a DRAM, usada na cache por caber mais bits no mesmo espaço.",
        "os dois guardam os dados sem energia, pois o refresh dispensa a fonte.",
        "o segundo é a SRAM, mais rápida e mais cara, típica da memória cache.",
        "o primeiro é a DRAM, mais rápida que a SRAM por não usar transistores.",
      ],
      correta: 3,
      explicacao:
        "Capacitor com recarga é a DRAM, usada na memória principal. Transistores sem recarga é a SRAM, mais rápida e mais cara, por isso usada na cache.",
      explicacaoErradas:
        "Trocar os nomes inverte os papéis: a DRAM é a principal, e a SRAM é a cache. As duas são voláteis, perdem os dados sem energia. A DRAM é mais lenta, justamente por causa da recarga.",
      pegadinha: "Refresh não é guardar sem energia; é a recarga que a DRAM precisa enquanto está ligada.",
      conhecimento: "A DRAM cabe mais bits no mesmo espaço e custa menos; por isso é usada em grande quantidade.",
    },
    {
      topico: "Memórias",
      subassunto: "Memória virtual",
      dificuldade: 4,
      raciocinio: "Usar o disco como extensão da RAM ajuda a não travar, mas deixa tudo mais lento.",
      enunciado:
        "Com muitos programas abertos, um computador fica lento e o disco trabalha sem parar. O sistema está usando parte do armazenamento como se fosse memória RAM. Esse recurso e a sua consequência são:",
      alternativas: [
        "memória virtual; o desempenho cai, pois o disco é mais lento que a RAM.",
        "memória cache; o desempenho cai, pois a cache passa a ficar no disco.",
        "memória virtual; o desempenho sobe, pois o disco tem mais espaço livre.",
        "memória ROM; o sistema grava os programas abertos dentro do firmware.",
        "memória cache; o disco passa a trabalhar na mesma velocidade do processador.",
      ],
      correta: 0,
      explicacao:
        "É a memória virtual: quando a RAM enche, o sistema usa parte do disco como extensão dela. Como o disco é bem mais lento que a RAM, o computador fica lento.",
      explicacaoErradas:
        "A cache fica no processador, não no disco, e é mais rápida que a RAM. Mais espaço não quer dizer mais velocidade. A ROM não recebe programas abertos durante o uso.",
      pegadinha: "Memória virtual evita que os programas fechem por falta de RAM, mas não acelera nada.",
      conhecimento: "No Windows, a memória virtual usa o arquivo de paginação; no Linux, a área de troca (swap).",
    },
    {
      topico: "Memórias",
      subassunto: "ROM, firmware, BIOS e UEFI",
      dificuldade: 5,
      raciocinio: "Ligar cada termo ao seu papel: chip regravável, programa de fábrica, inicialização antiga e nova.",
      enunciado:
        "Associe cada termo à sua descrição.\n(1) BIOS\n(2) UEFI\n(3) EEPROM\n(4) Firmware\n( ) Memória não volátil que pode ser apagada e regravada eletricamente, sem retirar o chip da placa.\n( ) Programa gravado de fábrica em um aparelho para controlar o hardware dele.\n( ) Sucessora do sistema de inicialização antigo, com inicialização segura e suporte a discos GPT acima de 2 TB.\n( ) Programa básico antigo que testa o hardware ao ligar e inicia o carregamento do sistema.\nA sequência correta, de cima para baixo, é",
      alternativas: ["4, 3, 2, 1.", "3, 4, 1, 2.", "4, 3, 1, 2.", "2, 4, 3, 1.", "3, 4, 2, 1."],
      correta: 4,
      explicacao:
        "Apagar e regravar eletricamente: EEPROM (3). Programa de fábrica do aparelho: firmware (4). Inicialização segura e GPT: UEFI (2). Teste ao ligar no modelo antigo: BIOS (1).",
      explicacaoErradas:
        "As outras sequências trocam EEPROM com firmware (o chip com o programa que vai dentro dele) ou a BIOS com a UEFI (a antiga com a nova).",
      pegadinha: "Firmware é o programa; EEPROM e flash são o tipo de chip onde ele pode ficar gravado.",
      conhecimento: "O teste do hardware ao ligar se chama POST (autoteste de inicialização).",
    },
    {
      topico: "Armazenamento",
      subassunto: "HD, SSD e NVMe",
      dificuldade: 4,
      raciocinio: "Separar o que tem peça móvel (HD) do que é memória flash (SSD) e lembrar a ligação do NVMe.",
      enunciado: "Sobre os dispositivos de armazenamento, assinale a alternativa correta.",
      alternativas: [
        "O SSD guarda os dados em discos magnéticos que giram, mas sem cabeça de leitura.",
        "O NVMe é um tipo de HD que usa a ligação SATA para dobrar a velocidade do disco.",
        "O SSD NVMe se liga pelo PCI Express e por isso é mais rápido que o SSD SATA.",
        "O HD resiste melhor a quedas que o SSD, porque não tem nenhuma peça móvel.",
        "O SSD é volátil como a RAM e perde os dados quando o computador desliga.",
      ],
      correta: 2,
      explicacao:
        "O NVMe usa o barramento PCI Express, bem mais rápido que a ligação SATA. Por isso um SSD NVMe supera um SSD SATA.",
      explicacaoErradas:
        "Disco magnético que gira é o HD, não o SSD. NVMe não é HD nem usa SATA. Quem tem peças móveis é o HD, por isso ele sofre mais com quedas. O SSD não é volátil: guarda os dados sem energia.",
      pegadinha: "SSD e RAM são chips de memória, mas só a RAM perde os dados ao desligar.",
      conhecimento: "O SSD usa memória flash, a mesma família do pen drive.",
    },
    {
      topico: "História do computador",
      subassunto: "Gerações",
      dificuldade: 4,
      raciocinio: "Válvula, transistor, circuito integrado e microprocessador, nessa ordem.",
      enunciado:
        "Associe cada geração de computadores à tecnologia que a marcou.\n(1) Primeira geração\n(2) Segunda geração\n(3) Terceira geração\n(4) Quarta geração\n( ) Circuitos integrados\n( ) Válvulas\n( ) Microprocessadores com integração em altíssima escala (VLSI)\n( ) Transistores\nA sequência correta, de cima para baixo, é",
      alternativas: ["3, 1, 2, 4.", "1, 3, 4, 2.", "3, 1, 4, 2.", "2, 1, 4, 3.", "3, 2, 4, 1."],
      correta: 2,
      explicacao:
        "Circuitos integrados: 3ª geração. Válvulas: 1ª. Microprocessadores VLSI: 4ª. Transistores: 2ª. Sequência 3, 1, 4, 2.",
      explicacaoErradas:
        "As outras sequências trocam transistores com circuitos integrados, ou põem as válvulas fora da primeira geração.",
      pegadinha: "Transistor vem antes do circuito integrado: o circuito integrado junta muitos transistores num só chip.",
      conhecimento: "Os computadores de válvulas ocupavam salas inteiras e esquentavam muito.",
    },
    {
      topico: "Software",
      subassunto: "Tipos de software e de licença",
      dificuldade: 4,
      raciocinio: "Separar utilitário de aplicativo e não confundir gratuito com livre.",
      enunciado:
        "Julgue as afirmativas como verdadeiras (V) ou falsas (F).\n( ) Antivírus e compactadores de arquivos são exemplos de software utilitário.\n( ) Todo software proprietário é pago, e todo software gratuito é livre.\n( ) Um freeware pode ser usado de graça, ainda que seu código-fonte seja fechado.\n( ) Um shareware pode ser usado como teste, por tempo limitado ou com recursos reduzidos.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, F, F, V.", "V, V, V, F.", "F, F, V, V.", "V, F, V, F.", "V, F, V, V."],
      correta: 4,
      explicacao:
        "Antivírus e compactador cuidam da máquina e dos arquivos: utilitários (V). Freeware é grátis e pode ter código fechado (V). Shareware é a versão de teste (V).",
      explicacaoErradas:
        "A segunda afirmativa é falsa: há proprietário gratuito (o freeware) e há software livre vendido. As sequências que marcam F no freeware ou no shareware erram a definição deles.",
      pegadinha: "Preço e liberdade são coisas diferentes: grátis não quer dizer livre.",
      conhecimento: "Software de domínio público não tem dono de direitos autorais e pode ser usado sem restrição.",
    },
    {
      topico: "Bits e bytes",
      subassunto: "Velocidade e tamanho",
      dificuldade: 5,
      raciocinio: "Passar o arquivo de bytes para bits (× 8) antes de dividir pela velocidade.",
      enunciado:
        "Uma conexão transmite, de forma constante, 80 megabits por segundo. O tempo mínimo para baixar um arquivo de 600 megabytes, sem contar perdas, é de",
      alternativas: ["7,5 segundos.", "1 minuto.", "60 minutos.", "7,5 minutos.", "0,9 segundo."],
      correta: 1,
      explicacao: "600 megabytes × 8 = 4.800 megabits. 4.800 ÷ 80 = 60 segundos, isto é, 1 minuto.",
      explicacaoErradas:
        "7,5 segundos divide 600 por 80 sem passar bytes para bits. 60 minutos lê os 60 segundos como minutos. 7,5 minutos junta os dois erros. 0,9 segundo divide por 8 em vez de multiplicar.",
      pegadinha: "Internet se mede em bits (b minúsculo); arquivo, em bytes (B maiúsculo). Um byte tem 8 bits.",
      conhecimento: "Mbps é megabit por segundo; MB/s é megabyte por segundo, 8 vezes maior.",
    },
    {
      topico: "Placa-mãe",
      subassunto: "Chipset, on-board e off-board",
      dificuldade: 5,
      raciocinio: "Ponte norte para o que é rápido, ponte sul para o que é lento; on-board vem na placa.",
      enunciado: "Sobre a placa-mãe e seus componentes, assinale a alternativa correta.",
      alternativas: [
        "No modelo clássico, a ponte norte liga o processador à memória e ao vídeo, e a ponte sul atende aos dispositivos lentos.",
        "Um componente off-board vem soldado na própria placa-mãe e costuma usar recursos do processador e da memória RAM.",
        "O chipset é o programa gravado na memória ROM que testa as peças e inicia o carregamento do sistema operacional.",
        "No modelo clássico, a ponte sul liga o processador diretamente à memória RAM, por ser a ligação mais rápida de toda a placa.",
        "As placas on-board são encaixadas nos slots de expansão, como acontece com uma placa de vídeo dedicada e potente.",
      ],
      correta: 0,
      explicacao:
        "A ponte norte cuida do que exige velocidade (processador, memória, vídeo). A ponte sul cuida dos dispositivos mais lentos, como portas e discos.",
      explicacaoErradas:
        "Soldado na placa é on-board; off-board é a placa à parte, encaixada num slot. O chipset é um conjunto de chips, não um programa (quem testa as peças é a BIOS ou a UEFI). A ponte sul é a dos dispositivos lentos.",
      pegadinha: "Norte é o lado rápido, perto do processador; sul é o lado lento.",
      conhecimento: "Nos processadores atuais, boa parte do papel da ponte norte foi para dentro do próprio processador.",
    },
    {
      topico: "Periféricos",
      subassunto: "Entrada, saída e entrada e saída",
      dificuldade: 4,
      raciocinio: "Perguntar se o aparelho manda dados para o computador, recebe dele ou faz os dois.",
      enunciado:
        "Classifique os periféricos.\n(1) Entrada\n(2) Saída\n(3) Entrada e saída\n( ) Tela sensível ao toque\n( ) Scanner\n( ) Projetor\n( ) Pen drive\n( ) Microfone\nA sequência correta, de cima para baixo, é",
      alternativas: ["3, 1, 2, 2, 1.", "1, 1, 2, 3, 1.", "3, 2, 2, 3, 1.", "3, 1, 2, 3, 1.", "3, 1, 3, 3, 2."],
      correta: 3,
      explicacao:
        "A tela sensível ao toque mostra a imagem e recebe o toque (3). O scanner manda a imagem para o computador (1). O projetor só mostra (2). O pen drive grava e lê (3). O microfone manda o som (1).",
      explicacaoErradas:
        "As outras sequências tratam a tela de toque como só entrada, o scanner como saída, o pen drive como só saída ou o microfone como saída.",
      pegadinha: "Scanner parece impressora, mas faz o caminho inverso: leva o papel para dentro do computador.",
      conhecimento: "A multifuncional (impressora com scanner) também é de entrada e saída.",
    },
  ],
};
