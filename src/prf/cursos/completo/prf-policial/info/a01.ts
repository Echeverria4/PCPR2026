import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-01",
  resumo: {
    ideia:
      "Rede é um conjunto de terminais, equipamentos e meios de transmissão que trocam dados. Esta aula classifica redes pelo sentido do sinal, pelo meio, pelo alcance e pelo desenho.",
    itens: [
      {
        termo: "Tipo de ligação",
        faz: "Ponto a ponto usa um enlace só entre dois nós. Ponto-multiponto divide o enlace entre vários.",
      },
      {
        termo: "Sentido do sinal",
        faz: "Simplex: um sentido só. Half-duplex: os dois, um de cada vez. Full-duplex: os dois ao mesmo tempo.",
      },
      {
        termo: "Destino",
        faz: "Unicast vai para um. Multicast vai para um grupo. Broadcast vai para todos.",
      },
      {
        termo: "Cabo coaxial",
        faz: "É resistente, mas não é imune à interferência.",
      },
      {
        termo: "Par trançado",
        faz: "Tem 4 pares e usa conector RJ-45. STP tem blindagem, e UTP não tem.",
        pista: "O trançado reduz a interferência, mas não a elimina.",
      },
      {
        termo: "Fibra óptica",
        faz: "Usa luz e é imune à interferência eletromagnética.",
        pista: "Monomodo: um caminho, mais alcance. Multimodo: vários caminhos, menos alcance.",
      },
      {
        termo: "Alcance",
        faz: "PAN: poucos metros. LAN: um local. MAN: uma cidade. WAN: países e continentes.",
      },
      {
        termo: "Arquitetura",
        faz: "Cliente/servidor tem papéis fixos. Ponto a ponto (P2P) não tem hierarquia.",
      },
      {
        termo: "Topologias",
        faz: "Barramento: um cabo comum. Anel: círculo. Estrela: nó central. Malha: ligações diretas entre as estações.",
      },
    ],
    cuidado:
      "Topologia física é o desenho dos cabos. Topologia lógica é o caminho dos dados. Elas podem ser diferentes na mesma rede.",
  },
  questoes: [
    {
      topico: "Sentido da transmissão",
      subassunto: "Simplex, half-duplex e full-duplex",
      dificuldade: 4,
      raciocinio: "Em cada caso, ver se há volta e se ela ocorre ao mesmo tempo.",
      enunciado:
        "Três sistemas de uma rodovia funcionam assim: um painel de mensagens só recebe dados da central; no rádio das viaturas, só um fala por vez; na ligação telefônica, os dois falam ao mesmo tempo. Esses modos são, nessa ordem,",
      alternativas: [
        "half-duplex, simplex e full-duplex",
        "simplex, full-duplex e half-duplex",
        "simplex, half-duplex e full-duplex",
        "full-duplex, half-duplex e simplex",
        "half-duplex nos três, pois todos usam o mesmo canal",
      ],
      correta: 2,
      explicacao:
        "O painel só recebe: simplex. O rádio vai e volta, um de cada vez: half-duplex. O telefone vai e volta ao mesmo tempo: full-duplex.",
      explicacaoErradas:
        "“half-duplex, simplex e full-duplex” troca o painel e o rádio. “simplex, full-duplex e half-duplex” troca o rádio e o telefone. “full-duplex, half-duplex e simplex” inverte a ordem. “half-duplex nos três” ignora que o painel não responde e que o telefone não alterna.",
      pegadinha: "Achar que o rádio é full-duplex porque há conversa. Nele, quem fala não ouve.",
      conhecimento: "Half-duplex tem os dois sentidos, mas nunca ao mesmo tempo.",
    },
    {
      topico: "Meios de transmissão",
      subassunto: "Fibra monomodo e multimodo",
      dificuldade: 5,
      raciocinio: "Distância grande e interferência forte apontam para a fibra de um caminho só.",
      enunciado:
        "Dois prédios a 30 km um do outro serão ligados por um meio guiado, com alta taxa de dados, em uma área de forte interferência eletromagnética. A escolha mais adequada é",
      alternativas: [
        "fibra monomodo, por usar um único caminho de luz",
        "fibra multimodo, pois vários caminhos dão mais alcance",
        "par trançado UTP, pois o trançado elimina a interferência",
        "cabo coaxial, por ser imune à interferência eletromagnética",
        "par trançado STP, pois a blindagem garante dezenas de km",
      ],
      correta: 0,
      explicacao:
        "A fibra é imune à interferência eletromagnética. A monomodo tem um só caminho de luz e alcança distâncias e taxas maiores.",
      explicacaoErradas:
        "“fibra multimodo” inverte a regra: ela serve a distâncias menores. “par trançado UTP” não tem blindagem, e o trançado só reduz a interferência. “cabo coaxial” é resistente, mas não é imune. “par trançado STP” tem blindagem, mas não alcança dezenas de quilômetros.",
      pegadinha: "Pensar que mais caminhos de luz significam mais alcance. É o contrário.",
      conhecimento: "Monomodo é comum em WANs. Multimodo é comum em LANs.",
    },
    {
      topico: "Topologias",
      subassunto: "Física e lógica",
      dificuldade: 5,
      raciocinio: "Separar o desenho dos cabos do caminho que o sinal faz.",
      enunciado:
        "Em um posto, cada computador tem um cabo próprio até um concentrador central, e esse concentrador repete todo sinal recebido para todas as portas. A topologia dessa rede é",
      alternativas: [
        "física em barramento e lógica em estrela",
        "física e lógica em estrela, pois há nó central",
        "física em anel e lógica em barramento",
        "física em estrela e lógica em barramento",
        "física em malha e lógica em anel, por haver várias portas",
      ],
      correta: 3,
      explicacao:
        "Os cabos vão a um ponto central: estrela física. O sinal chega a todos, como em um cabo comum: barramento lógico.",
      explicacaoErradas:
        "“física em barramento e lógica em estrela” inverte as duas. “física e lógica em estrela” ignora que o sinal vai para todas as portas. “física em anel” não descreve cabos que vão a um centro. “física em malha” exigiria ligações diretas entre as estações.",
      pegadinha: "Olhar só o desenho dos cabos. O enunciado também descreve o caminho do sinal.",
      conhecimento: "Topologia física é o layout. Topologia lógica é o fluxo dos dados.",
    },
    {
      topico: "Topologias",
      subassunto: "Enlaces na malha completa",
      dificuldade: 5,
      raciocinio: "Cada par de postos tem um enlace: n · (n − 1) ÷ 2.",
      enunciado:
        "Seis postos serão ligados em malha completa, cada um com enlace dedicado para cada um dos outros. O número de enlaces necessários é",
      alternativas: ["30", "15", "6", "5", "36"],
      correta: 1,
      explicacao: "Cada enlace atende um par de postos: 6 · 5 ÷ 2 = 15.",
      explicacaoErradas:
        "“30” conta cada enlace duas vezes. “6” é o número de enlaces de um anel. “5” é o de uma estrela com um posto no centro. “36” multiplica 6 por 6, ligando cada posto a ele mesmo.",
      pegadinha: "Esquecer de dividir por 2. O enlace de A até B é o mesmo de B até A.",
      conhecimento: "Malha completa com n nós: n · (n − 1) ÷ 2 enlaces.",
    },
    {
      topico: "Classificação por alcance",
      subassunto: "PAN, MAN e WAN",
      dificuldade: 4,
      raciocinio: "Ordenar pelo tamanho da área que cada rede cobre.",
      enunciado:
        "Um agente liga um fone sem fio ao celular. A sede de um órgão liga suas unidades dentro de uma região metropolitana. O mesmo órgão liga superintendências de estados diferentes. Essas redes são, nessa ordem,",
      alternativas: [
        "LAN, MAN e WAN",
        "PAN, LAN e WAN",
        "PAN, LAN e MAN",
        "LAN, WAN e MAN",
        "PAN, MAN e WAN",
      ],
      correta: 4,
      explicacao:
        "Fone e celular: poucos metros, PAN. Unidades em uma mesma região urbana: MAN. Estados diferentes: WAN.",
      explicacaoErradas:
        "“LAN, MAN e WAN” exagera o alcance do fone. “PAN, LAN e WAN” reduz a região metropolitana a um único local. “PAN, LAN e MAN” reduz as duas últimas redes. “LAN, WAN e MAN” inverte as duas últimas.",
      pegadinha: "Chamar de LAN tudo o que é da mesma instituição. O que define é a área coberta.",
      conhecimento: "A sequência é PAN, LAN, MAN e WAN, da menor para a maior.",
    },
    {
      topico: "Arquitetura de rede",
      subassunto: "Ponto a ponto e cliente/servidor",
      dificuldade: 4,
      raciocinio: "Em P2P, não há papel fixo.",
      enunciado: "Sobre uma rede de arquitetura ponto a ponto (P2P), é correto afirmar que",
      alternativas: [
        "um servidor central autentica as máquinas e guarda os arquivos",
        "cada máquina pode oferecer e usar recursos, sem hierarquia fixa",
        "as máquinas só podem atuar como clientes de um servidor dedicado",
        "ela exige um link dedicado entre cada par de máquinas da rede",
        "ela só existe em redes locais, com máquinas no mesmo cabo físico",
      ],
      correta: 1,
      explicacao: "Em P2P, as máquinas têm o mesmo nível. Qualquer uma pode ser cliente ou servidora.",
      explicacaoErradas:
        "“um servidor central” e “só podem atuar como clientes” descrevem o modelo cliente/servidor. “link dedicado entre cada par” confunde arquitetura com topologia em malha. “só existe em redes locais” erra: P2P funciona pela internet.",
      pegadinha: "Confundir a arquitetura P2P com a ligação ponto a ponto. Uma é papel, a outra é enlace.",
      conhecimento: "Cliente/servidor tem papéis fixos. P2P não tem.",
    },
  ],
};
