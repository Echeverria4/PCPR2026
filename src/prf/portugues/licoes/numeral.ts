import type { Licao } from "../tipos";

export const NUMERAL: Licao = {
  id: "numeral",
  titulo: "Numeral",
  classe: "numeral",
  resumo: "A palavra que indica **quantidade exata**, **ordem**, **multiplicação** ou **fração** dos seres.",
  modelo: [
    {
      tipo: "chaves",
      titulo: "Numeral",
      ramos: [
        { rotulo: "Cardinal", classe: "numeral", texto: "quantidade", exemplo: "um, dois, cem, mil" },
        { rotulo: "Ordinal", classe: "numeral", texto: "ordem, posição", exemplo: "primeiro, décimo, centésimo" },
        { rotulo: "Multiplicativo", classe: "numeral", texto: "aumento proporcional", exemplo: "dobro, triplo, quíntuplo" },
        { rotulo: "Fracionário", classe: "numeral", texto: "divisão", exemplo: "metade, terço, um quarto" },
      ],
    },
    {
      tipo: "nota",
      texto: "Coletivos numéricos (dúzia, dezena, par, centena) e a palavra 'ambos' têm classificação divergente entre as gramáticas: uns os tratam como numerais, outros como substantivo e pronome. A banca costuma evitar cobrar esse ponto sem deixar o critério claro.",
    },
  ],
  secoes: [
    {
      letra: "A",
      blocos: [
        {
          tipo: "texto",
          texto:
            "Numeral é a palavra que expressa **número** com precisão: quantos (cardinal), em que posição (ordinal), quantas vezes maior (multiplicativo) ou em quantas partes (fracionário). Quantidade vaga ('alguns', 'muitos', 'vários') é pronome indefinido, não numeral.",
        },
        {
          tipo: "comparativo",
          titulo: "Exato × vago",
          colunas: [
            { titulo: "Numeral", classe: "numeral", itens: ["**três** viaturas", "o **segundo** turno", "o **dobro** do prazo"] },
            { titulo: "Pronome indefinido", classe: "pronome", itens: ["**algumas** viaturas", "**vários** turnos", "**muito** prazo"] },
          ],
        },
      ],
    },
    {
      letra: "B",
      blocos: [
        {
          tipo: "perguntas",
          itens: [
            "A palavra dá um **número preciso**?",
            "Responde a 'quantos?' (cardinal), 'em que lugar?' (ordinal), 'quantas vezes?' (multiplicativo) ou 'que parte?' (fracionário)?",
            "No caso do 'um': cabe 'só' ou 'apenas' antes, com sentido de quantidade? Então é numeral; senão, artigo.",
          ],
        },
      ],
    },
    {
      letra: "C",
      blocos: [
        {
          tipo: "comparativo",
          titulo: "Numeral adjetivo × numeral substantivo",
          colunas: [
            { titulo: "Acompanha o nome", classe: "numeral", itens: ["Recebeu **duas** multas.", "Adjunto adnominal"] },
            { titulo: "No lugar do nome", classe: "numeral", itens: ["**Dois** faltaram.", "**O triplo** foi apreendido.", "Núcleo de sujeito, objeto etc."] },
          ],
        },
      ],
    },
    {
      letra: "D",
      blocos: [
        {
          tipo: "grade",
          titulo: "Ordinal ou cardinal? (leitura de números romanos e de leis)",
          colunas: ["Até o limite", "Depois do limite"],
          linhas: [
            { rotulo: "Reis, papas, séculos, capítulos (depois do nome)", valores: ["ordinal até décimo: Pedro II (segundo), século X (décimo)", "cardinal: século XXI (vinte e um), João XXIII (vinte e três)"] },
            { rotulo: "Artigos de lei (art.)", valores: ["ordinal até o nono: art. 1º (primeiro), art. 9º (nono)", "cardinal a partir do 10: art. 10 (dez), art. 121 (cento e vinte e um)"] },
            { rotulo: "Número antes do nome (ordem)", valores: ["sempre ordinal: III Congresso (terceiro), XX Encontro (vigésimo)", "—"] },
          ],
          nota: "A regra dos artigos de lei vem da Lei Complementar 95/1998 (art. 10, I): numeração ordinal até o nono e cardinal a partir do décimo.",
        },
        {
          tipo: "comparativo",
          titulo: "Numeral × outras classes",
          colunas: [
            { titulo: "É numeral", classe: "numeral", itens: ["Só **um** candidato faltou.", "Ficou em **primeiro** lugar."] },
            { titulo: "Não é numeral", classe: "adverbio", itens: ["**Um** candidato faltou. (artigo)", "**Primeiro**, leia o edital. (advérbio: inicialmente)"] },
          ],
        },
      ],
    },
    {
      letra: "E",
      blocos: [
        {
          tipo: "exemplos",
          itens: [
            { frase: "A equipe apreendeu **o dobro** da carga do ano passado.", analise: "'Dobro' é multiplicativo usado como substantivo (com artigo)." },
            { frase: "Já é **meio-dia e meia**.", analise: "'Meia' é numeral fracionário: concorda com 'hora' subentendida (meio-dia e meia hora)." },
            {
              frase: "Comprou **duzentos gramas** de presunto.",
              analise: "'Grama' (unidade de massa) é masculino; o numeral concorda: duzentos gramas, não 'duzentas'.",
              concurso: true,
            },
            {
              frase: "O art. 10 da lei revogou o art. 9º.",
              analise: "Lê-se 'artigo dez' (cardinal, a partir do 10) e 'artigo nono' (ordinal, até o 9).",
              concurso: true,
            },
          ],
        },
      ],
    },
    {
      letra: "F",
      blocos: [
        {
          tipo: "pegadinhas",
          itens: [
            { titulo: "\"Meio-dia e meio\"", texto: "Errado. O correto é 'meio-dia e meia' (meia hora)." },
            { titulo: "\"Duzentas gramas\"", texto: "Errado quando é peso: 'o grama' é masculino. 'A grama' é a relva." },
            { titulo: "'Primeiro' nem sempre é numeral", texto: "'Primeiro, confira os dados' = inicialmente: advérbio." },
            { titulo: "'Um' artigo × numeral", texto: "Só é numeral se o contexto der ideia de quantidade (um, e não dois; só um)." },
          ],
        },
      ],
    },
    {
      letra: "G",
      blocos: [
        {
          tipo: "macete",
          texto: "Rei e século: ordinal **até o 10**. Artigo de lei: ordinal **até o 9**.",
          explicacao: "Século X = décimo, século XI = onze. Art. 9º = nono, art. 10 = dez.",
        },
      ],
    },
    {
      letra: "H",
      blocos: [
        {
          tipo: "passos",
          frase: "No século XXI, a terceira edição do manual dobrou o número de páginas da primeira.",
          passos: [
            "**XXI** depois de 'século' (acima de 10): cardinal, lê-se 'vinte e um'.",
            "**terceira**: ordinal (posição da edição), concorda com 'edição'.",
            "**dobrou**: é verbo, não numeral (vem do multiplicativo 'dobro', mas aqui se conjuga).",
            "**primeira**: ordinal usado no lugar do nome (= a primeira edição).",
          ],
          conclusao: "três numerais (XXI, terceira, primeira) e um verbo derivado de numeral (dobrou).",
        },
      ],
    },
    {
      letra: "I",
      blocos: [
        {
          tipo: "lista",
          itens: [
            "Cardinal (quantidade), ordinal (ordem), multiplicativo (dobro), fracionário (metade).",
            "Quantidade vaga é pronome indefinido (alguns, vários, muitos).",
            "'Um' é numeral só com sentido de quantidade.",
            "Séculos, reis, papas: ordinal até o décimo. Artigos de lei: ordinal até o nono.",
            "Meio-dia e meia; duzentos gramas.",
          ],
        },
      ],
    },
  ],
};
