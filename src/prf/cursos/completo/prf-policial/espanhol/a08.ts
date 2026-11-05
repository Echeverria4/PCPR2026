import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "espanhol-08",
  resumo: {
    ideia:
      "Adjetivo qualifica e concorda com o substantivo. O que mais cai é o encurtamento antes do nome, a mudança de sentido pela posição e as formas de comparar.",
    itens: [
      {
        termo: "Feminino",
        faz: "-o vira -a. Final -or, -án, -ín e -ón recebe -a: trabajadora, alemana. Nacionalidade em consoante também: española.",
      },
      {
        termo: "Invariáveis",
        faz: "Feliz, cortés, joven, azul e as formas em -e ficam iguais no feminino.",
      },
      {
        termo: "Apócope",
        faz: "Antes de masculino singular, bueno, malo, primero, tercero, alguno e ninguno encurtam: buen, mal, primer, tercer, algún, ningún.",
      },
      {
        termo: "Gran e cualquier",
        faz: "Encurtam antes de masculino e de feminino: gran persona, cualquier moto.",
      },
      {
        termo: "Posição",
        faz: "Antes do nome, pode mudar o sentido: una pobre mujer é infeliz, una mujer pobre não tem dinheiro.",
      },
      {
        termo: "Comparar",
        faz: "Más… que, menos… que, tan… como, tanto… como.",
      },
      {
        termo: "Irregulares",
        faz: "Mejor, peor, mayor, menor. Mayor também indica quem tem mais idade.",
      },
      {
        termo: "Superlativo",
        faz: "-ísimo ou muy: rapidísimo, muy rápido. Nunca os dois juntos.",
      },
    ],
    cuidado: "Com substantivo, o certo é tanto, que concorda. Com adjetivo e advérbio, o certo é tan.",
  },
  questoes: [
    {
      topico: "Apócope",
      subassunto: "Buen e gran",
      dificuldade: 4,
      raciocinio: "Gran vale para os dois gêneros.",
      enunciado: "Complete: “Es un ___ conductor y una ___ persona.”",
      alternativas: ["bueno, grande", "buen, grande", "buen, gran", "bueno, gran", "buena, grande"],
      correta: 2,
      explicacao: "Antes de masculino singular, bueno vira buen. Grande vira gran antes de masculino e de feminino singular.",
      explicacaoErradas:
        "“bueno” antes do nome não encurta. “grande” antes de persona também não. “buena” erra o gênero de conductor.",
      pegadinha: "Pensar que gran só vale para masculino.",
      conhecimento: "Depois do nome, a forma completa volta: un conductor bueno.",
    },
    {
      topico: "Apócope",
      subassunto: "Primer e tercer",
      dificuldade: 5,
      raciocinio: "Só encurta antes de substantivo masculino singular.",
      enunciado: "Sobre o encurtamento de primero e tercero, segue a norma a frase",
      alternativas: [
        "El primero puesto está antes de la primer curva, y el tercer, después.",
        "El primer puesto está antes de la primer curva, y el tercero, después.",
        "El primer puesto está antes de la primera curva, y el tercer, después.",
        "El primero puesto está antes de la primera curva, y el tercero, después.",
        "El primer puesto está antes de la primera curva, y el tercero, después.",
      ],
      correta: 4,
      explicacao: "Primer vem antes de puesto. Curva é feminina, então fica primera. Sem substantivo depois, fica el tercero.",
      explicacaoErradas:
        "“El primero puesto” não encurta quando deveria. “la primer curva” encurta antes de feminino. “el tercer, después” encurta sem substantivo.",
      pegadinha: "Encurtar sempre.",
      conhecimento: "Alguno e ninguno seguem a mesma ideia: ningún camión, ninguna moto.",
    },
    {
      topico: "Posição do adjetivo",
      subassunto: "Viejo amigo",
      dificuldade: 5,
      raciocinio: "Antes do nome, a qualidade muda.",
      enunciado: "Em “El jefe es un viejo amigo del conductor.”, entende-se que",
      alternativas: [
        "o chefe e o motorista são amigos há muito tempo",
        "o amigo do motorista é uma pessoa de idade avançada",
        "o motorista tem um chefe mais velho do que ele",
        "o chefe já foi amigo do motorista e não é mais",
        "a amizade entre os dois é recente e muito forte no trabalho",
      ],
      correta: 0,
      explicacao: "Antes do nome, viejo indica uma amizade antiga. Un amigo viejo seria um amigo idoso.",
      explicacaoErradas:
        "“idade avançada” é o sentido de amigo viejo. “mais velho do que ele” cria comparação. “não é mais” e “recente” contrariam a frase.",
      pegadinha: "Ler a idade da pessoa.",
      conhecimento: "Pobre, grande e nuevo também mudam de sentido com a posição.",
    },
    {
      topico: "Posição do adjetivo",
      subassunto: "Gran e grande",
      dificuldade: 5,
      raciocinio: "Antes do nome é valor. Depois é tamanho.",
      enunciado: "Em “Fue un gran agente, aunque no era un hombre grande.”, entende-se que ele",
      alternativas: [
        "era grande de corpo, mas tinha pouco valor como agente",
        "foi um agente de valor, mas não tinha corpo grande",
        "foi um agente alto, mas sem força para o serviço na estrada",
        "ficou muito tempo na função, mas não chegou a ser velho",
        "foi um agente de valor, mas não era uma pessoa importante",
      ],
      correta: 1,
      explicacao: "Gran, antes do nome, indica valor. Grande, depois do nome, indica tamanho.",
      explicacaoErradas:
        "“grande de corpo” inverte os sentidos. “agente alto” lê gran como tamanho. “muito tempo” não está na frase. “pessoa importante” dá ao segundo adjetivo o valor do primeiro.",
      pegadinha: "Dar o mesmo sentido às duas formas.",
      conhecimento: "Una gran ciudad é importante. Una ciudad grande é extensa.",
    },
    {
      topico: "Comparação",
      subassunto: "Tanto e tan",
      dificuldade: 5,
      raciocinio: "Olhe a classe da palavra depois da lacuna.",
      enunciado: "Complete: “Este camión lleva ___ carga ___ el otro, pero no es ___ pesado.”",
      alternativas: ["tan, como, tanto", "tanto, que, tan", "tan, que, tan", "tanta, como, tan", "tanta, que, tanto"],
      correta: 3,
      explicacao: "Tanta concorda com carga, que é substantivo. A igualdade pede como. Tan vem antes do adjetivo pesado.",
      explicacaoErradas:
        "“tan” antes de carga usa a forma do adjetivo. “tanto” não concorda com carga. “que” serve para más e menos, e não para a igualdade.",
      pegadinha: "Usar que em comparação de igualdade.",
      conhecimento: "Tanto, sozinho, vem depois de verbo: corre tanto como tú.",
    },
    {
      topico: "Gênero do adjetivo",
      subassunto: "Feminino e invariáveis",
      dificuldade: 4,
      raciocinio: "Cada adjetivo segue uma regra.",
      enunciado: "O feminino correto de “un agente español, trabajador y cortés” é",
      alternativas: [
        "una agente españoa, trabajadora y cortesa",
        "una agente española, trabajadore y cortesa",
        "una agente español, trabajador y cortés",
        "una agente española, trabajador y cortesa de verdad",
        "una agente española, trabajadora y cortés",
      ],
      correta: 4,
      explicacao: "Española e trabajadora recebem -a. Cortés não muda no feminino.",
      explicacaoErradas:
        "“españoa” não existe. “trabajadore” inventa uma forma. “español” e “trabajador” deixam de concordar. “cortesa” aplica a regra da nacionalidade a um adjetivo invariável.",
      pegadinha: "Tratar cortés como francés.",
      conhecimento: "Agente não muda: el agente, la agente.",
    },
    {
      topico: "Comparação",
      subassunto: "Superlativo",
      dificuldade: 4,
      raciocinio: "Muy e -ísimo não andam juntos.",
      enunciado: "Sobre o superlativo, segue a norma a frase",
      alternativas: [
        "El tramo es muy malísimo y la subida es muy larguísima.",
        "El tramo es muy malísimo y la subida es muy larga.",
        "El tramo es malísimo y la subida es muy larga.",
        "El tramo es malísimo y la subida es muy larguísima.",
        "El tramo es más malísimo y la subida es más larguísima de todas.",
      ],
      correta: 2,
      explicacao: "A forma -ísimo já carrega a intensidade, e não aceita muy nem más. Muy larga está certo.",
      explicacaoErradas:
        "“muy malísimo” e “muy larguísima” dobram a intensidade. “más malísimo” e “más larguísima” repetem o erro com más.",
      pegadinha: "Reforçar o que já está no grau máximo.",
      conhecimento: "Larga, em espanhol, é comprida.",
    },
    {
      topico: "Apócope",
      subassunto: "Cualquier",
      dificuldade: 5,
      raciocinio: "Antes ou depois do nome?",
      enunciado: "Complete: “___ camión puede pasar, pero no una moto ___.”",
      alternativas: [
        "Cualquier, cualquiera",
        "Cualquiera, cualquier",
        "Cualquier, cualquier",
        "Cualquiera, cualquiera",
        "Cualesquier, cualquiera",
      ],
      correta: 0,
      explicacao: "Antes do substantivo, masculino ou feminino, a forma é cualquier. Depois, é cualquiera.",
      explicacaoErradas:
        "“Cualquiera” antes de camión não encurta. “cualquier” depois de moto encurta sem nome a seguir. “Cualesquier” é forma de plural.",
      pegadinha: "Pensar que a forma muda com o gênero.",
      conhecimento: "O plural, pouco usado, é cualesquiera.",
    },
  ],
};
