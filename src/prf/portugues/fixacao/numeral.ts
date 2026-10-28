import type { QuestaoFixacao } from "../tipos";

export const FIX_NUMERAL: QuestaoFixacao[] = [
  {
    id: "pi-numeral-1",
    licao: "numeral",
    nivel: 1,
    enunciado: "Em \"A equipe apreendeu o dobro da carga.\", a palavra \"dobro\" é numeral:",
    alternativas: [
      { t: "cardinal", por: "Cardinal indica quantidade simples (dois, três)." },
      { t: "ordinal", por: "Ordinal indica posição (segundo, terceiro)." },
      { t: "fracionário", por: "Fracionário indica divisão (metade, terço)." },
      { t: "multiplicativo", por: "Correta: indica aumento proporcional (duas vezes a quantidade)." },
      { t: "coletivo numérico", por: "Coletivo numérico seria 'dezena', 'dúzia', 'par'." },
    ],
    correta: 3,
    raciocinio: "Pergunte 'quantas vezes?': dobro, triplo, quíntuplo são multiplicativos. Aqui, com artigo ('o dobro'), o numeral funciona como substantivo.",
  },
  {
    id: "pi-numeral-2",
    licao: "numeral",
    nivel: 2,
    enunciado: "Em qual frase a palavra destacada em maiúsculas é numeral?",
    alternativas: [
      { t: "PRIMEIRO, confira os documentos do veículo.", por: "= inicialmente: advérbio, não posição em uma série." },
      { t: "UM motorista parou no acostamento.", por: "Sem ideia de quantidade, 'um' é artigo indefinido." },
      { t: "Só UM motorista parou no acostamento.", por: "Correta: 'só' reforça a quantidade (um, e não dois): numeral cardinal." },
      { t: "Havia ALGUNS motoristas no acostamento.", por: "Quantidade vaga: pronome indefinido." },
      { t: "Havia MUITOS motoristas no acostamento.", por: "Quantidade imprecisa: pronome indefinido." },
    ],
    correta: 2,
    raciocinio: "Numeral exprime número exato. 'Um' só é numeral quando a frase realça a quantidade; 'alguns' e 'muitos' são indefinidos; 'primeiro' com sentido de 'inicialmente' é advérbio.",
  },
  {
    id: "pi-numeral-3",
    licao: "numeral",
    nivel: 3,
    enunciado: "Qual leitura de numeral está de acordo com a norma-padrão?",
    alternativas: [
      { t: "século XXI = século vigésimo primeiro", por: "Depois do nome e acima de dez, lê-se cardinal: 'século vinte e um'." },
      { t: "art. 10 = artigo décimo", por: "Artigos de lei: ordinal só até o nono; 'art. 10' = 'artigo dez'." },
      { t: "Pedro II = Pedro dois", por: "Reis até o décimo: ordinal, 'Pedro segundo'." },
      { t: "art. 9º = artigo nove", por: "Até o nono, ordinal: 'artigo nono'." },
      { t: "capítulo X = capítulo décimo", por: "Correta: depois do nome, até o dez, lê-se ordinal." },
    ],
    correta: 4,
    raciocinio: "Romanos depois do nome (reis, papas, séculos, capítulos): ordinal até o décimo, cardinal daí em diante. Artigos de lei: ordinal até o nono, cardinal a partir do décimo (LC 95/1998).",
  },
  {
    id: "pi-numeral-4",
    licao: "numeral",
    nivel: 4,
    enunciado: "Qual frase está de acordo com a norma-padrão?",
    alternativas: [
      { t: "Comprou duzentas gramas de queijo para o lanche.", por: "Grama (unidade de massa) é masculino: 'duzentos gramas'." },
      { t: "Chegaram ao posto à uma hora e meio da tarde.", por: "Subentende-se 'meia hora': 'uma hora e meia'." },
      { t: "O plantão terminou ao meio-dia e meia de ontem.", por: "Correta: 'meia' concorda com 'hora', subentendida." },
      { t: "Tomou meio garrafa de água antes da prova.", por: "Junto de substantivo, 'meio' é numeral e concorda: 'meia garrafa'." },
      { t: "Ela estava meia cansada depois do plantão.", por: "Antes de adjetivo, 'meio' é advérbio e não varia: 'meio cansada'." },
    ],
    correta: 2,
    raciocinio: "'Meio' varia como numeral (junto de substantivo: meia garrafa, meio-dia e meia [hora]) e não varia como advérbio (meio cansada). 'O grama' (massa) é masculino.",
  },
];
