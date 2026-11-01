import type { ResumoAula } from "./tipos";

export const PT: Record<string, ResumoAula> = {
  "pt-01": {
    ideia:
      "Compreender é achar o que o texto diz; interpretar é concluir a partir dele, sem ir além do que ele permite.",
    itens: [
      {
        termo: "Compreensão",
        faz: "Localiza a informação que está escrita no texto (explícita).",
        pista: "O enunciado diz “segundo o texto”, “o autor afirma”, “de acordo com o texto”.",
      },
      {
        termo: "Interpretação",
        faz: "Tira uma conclusão do que está nas entrelinhas (implícito), sempre apoiada no texto.",
        pista: "O enunciado diz “infere-se”, “depreende-se”, “conclui-se”, “o texto sugere”.",
      },
      {
        termo: "Ideia central",
        faz: "É o assunto ou a tese que o texto todo desenvolve.",
        pista: "Costuma aparecer no 1º parágrafo e voltar na conclusão.",
      },
      {
        termo: "Pressuposto",
        faz: "Informação garantida por uma palavra do próprio texto.",
        pista: "“Ele parou de fumar” garante que fumava antes. Palavras como “ainda”, “já”, “voltou a” carregam pressupostos.",
      },
      {
        termo: "Retomada (coesão)",
        faz: "Pronomes e sinônimos retomam termos já ditos e costuram o texto.",
        pista: "Pergunte “a quem se refere este ‘ele’, ‘isso’, ‘o qual’?” e volte ao trecho anterior.",
      },
    ],
    cuidado:
      "As alternativas erradas costumam extrapolar (ir além do texto), reduzir (pegar só uma parte) ou contradizer o texto. A certa nunca depende de conhecimento de fora.",
  },
  "pt-02": {
    ideia:
      "Tipo textual é o jeito como o texto se organiza por dentro. Para reconhecer, veja o que predomina: contar, mostrar, defender, explicar ou instruir.",
    itens: [
      {
        termo: "Narrativo",
        faz: "Conta fatos em sequência, com personagens, tempo e lugar: algo acontece e muda do começo ao fim.",
        pista: "Verbos de ação no passado (“chegou”, “saiu”) e marcas de tempo (“depois”, “naquela noite”).",
      },
      {
        termo: "Descritivo",
        faz: "Mostra como é um ser, um objeto, um lugar ou uma cena, como uma fotografia em palavras.",
        pista: "Muitos adjetivos e verbos de estado (ser, estar, parecer, ter); o tempo fica parado, nada acontece.",
      },
      {
        termo: "Dissertativo-argumentativo",
        faz: "Defende um ponto de vista (a tese) e tenta convencer o leitor com argumentos.",
        pista: "Há opinião a defender e conectivos de causa e conclusão (“pois”, “portanto”, “logo”).",
      },
      {
        termo: "Expositivo",
        faz: "Explica ou informa um assunto, sem tentar convencer ninguém.",
        pista: "Definições, dados e explicações em tom neutro, quase sempre no presente; não há tese em disputa.",
      },
      {
        termo: "Injuntivo (instrucional)",
        faz: "Orienta o leitor a fazer algo, passo a passo.",
        pista: "Verbos no imperativo ou no infinitivo (“clique”, “misture”, “apresentar o documento”), como em receitas, manuais e regulamentos.",
      },
    ],
    cuidado:
      "Tipo não é gênero. Gênero é o formato do texto no dia a dia (notícia, receita, edital, carta); um mesmo gênero mistura tipos, e vale o que predomina.",
  },
  "pt-03": {
    ideia: "Ortografia é a escrita certa das palavras; na prova caem as letras de mesmo som e o uso do hífen.",
    itens: [
      {
        termo: "S ou Z",
        faz: "-ês/-esa indicam origem ou título (português, princesa); -ez/-eza formam nomes a partir de adjetivos (rapidez, beleza).",
        pista: "Veio de um adjetivo? Rico → riqueza, com z.",
      },
      {
        termo: "Ç ou SS",
        faz: "A família da palavra decide: deter → detenção; agredir → agressão; ceder → cessão; omitir → omissão.",
        pista: "Lembre de um verbo da mesma família antes de escrever.",
      },
      {
        termo: "G ou J",
        faz: "-agem, -igem, -ugem levam g (viagem, vertigem, ferrugem); verbos em -jar mantêm o j (viajar → que eles viajem).",
        pista: "“A viagem” é substantivo; “que eles viajem” é verbo.",
      },
      {
        termo: "X ou CH",
        faz: "Depois de ditongo vem x (caixa, peixe) e depois de “en-” inicial também (enxada, enxergar).",
        pista: "Exceção: palavra que vem de outra com ch mantém o ch (encher, de cheio).",
      },
      {
        termo: "Os porquês",
        faz: "Por que (pergunta, “pelo qual”), por quê (no fim da frase), porque (explicação), porquê (substantivo, com artigo).",
        pista: "Dá para trocar por “pelo qual” ou “por qual motivo”? Então é separado.",
      },
    ],
    cuidado:
      "Hífen: prefixo terminado em vogal + palavra com r ou s dobra a letra e junta (antirrugas, contrassenso); vogais iguais separam (micro-ondas); com h, sempre hífen (anti-higiênico).",
  },
  "pt-04": {
    ideia: "O acento depende de qual sílaba é a mais forte (tônica) e de como a palavra termina.",
    itens: [
      {
        termo: "Oxítonas (última sílaba forte)",
        faz: "Levam acento as terminadas em a(s), e(s), o(s), em e ens.",
        pista: "sofá, café, avô, também, parabéns; já “caju” e “tatu” não (terminam em u).",
      },
      {
        termo: "Paroxítonas (penúltima)",
        faz: "São a maioria e só levam acento em terminações como l, n, r, x, ps, ã(s), ão(s), i(s), us, um e ditongo.",
        pista: "fácil, hífen, caráter, tórax, bíceps, órfã, órgão, júri, vírus, álbum, história.",
      },
      {
        termo: "Proparoxítonas (antepenúltima)",
        faz: "Todas levam acento.",
        pista: "lâmpada, médico, público, rápido.",
      },
      {
        termo: "Hiato com i ou u",
        faz: "O i e o u fortes que ficam sozinhos na sílaba (ou com s) levam acento.",
        pista: "saída, saúde, baú, país; mas “rainha” não (vem nh depois) e “juiz” não (o z fica na sílaba).",
      },
      {
        termo: "Novo Acordo",
        faz: "Caiu o acento de ei e oi abertos nas paroxítonas (ideia, heroico), de “êe” e “ôo” (creem, voo) e o trema (frequente).",
        pista: "“Herói” e “papéis” mantêm o acento: são oxítonas.",
      },
    ],
    cuidado:
      "Acentos que diferenciam e ficaram: pôde (passado) × pode (presente), pôr (verbo) × por (preposição), têm e vêm (eles) × tem e vem (ele).",
  },
  "pt-05": {
    ideia:
      "São 10 classes de palavras; a prova cobra o papel que a palavra faz na frase, e ela pode mudar de classe conforme o uso.",
    itens: [
      {
        termo: "Substantivo",
        faz: "Dá nome a seres, coisas, ações e ideias.",
        pista: "Aceita artigo antes: em “o correr da vida”, o verbo virou substantivo.",
      },
      {
        termo: "Adjetivo",
        faz: "Caracteriza o substantivo e concorda com ele.",
        pista: "A posição pode mudar o sentido: “homem grande” (alto) × “grande homem” (importante).",
      },
      {
        termo: "Advérbio",
        faz: "Modifica o verbo, o adjetivo ou outro advérbio (tempo, lugar, modo, intensidade) e não varia.",
        pista: "“Elas estavam meio cansadas”: meio = um pouco, fica no masculino singular.",
      },
      {
        termo: "Pronome",
        faz: "Substitui ou acompanha o nome; o relativo (que, o qual, cujo, onde) retoma um termo anterior.",
        pista: "“Cujo” indica posse e não aceita artigo depois: “o autor cujo livro li”.",
      },
      {
        termo: "Conjunção",
        faz: "Liga orações e mostra a relação entre elas: adição, oposição, causa, conclusão, condição…",
        pista: "Troque por outra do mesmo grupo: “mas” = “porém”, “contudo”, “todavia” (oposição).",
      },
    ],
    cuidado:
      "O “que” muda de classe: é pronome relativo quando dá para trocar por “o qual” e conjunção integrante quando dá para trocar por “isso”.",
  },
  "pt-06": {
    ideia:
      "Crase é a junção da preposição “a” com o artigo “a” (ou com “aquele”, “aquela”), marcada pelo acento grave: à.",
    itens: [
      {
        termo: "A regra",
        faz: "Precisa de duas coisas: uma palavra que exige a preposição “a” e uma palavra feminina que aceita o artigo “a”.",
        pista: "Troque por uma palavra masculina: se virar “ao”, tem crase (vou à praia → vou ao clube).",
      },
      {
        termo: "Proibida",
        faz: "Antes de palavra masculina, de verbo, da maioria dos pronomes e entre palavras repetidas.",
        pista: "a pé, a partir de, a ela, a você, cara a cara.",
      },
      {
        termo: "Obrigatória",
        faz: "Na indicação de horas e nas expressões femininas de tempo, modo e lugar.",
        pista: "às 10h, à noite, às pressas, à medida que, à custa de.",
      },
      {
        termo: "Facultativa",
        faz: "Antes de pronome possessivo feminino, de nome de mulher e depois de “até”.",
        pista: "Entreguei a/à sua irmã; fui até a/à porta.",
      },
      {
        termo: "Nomes de lugar",
        faz: "Use o teste do “volto da”: se volta “da”, tem crase; se volta “de”, não tem.",
        pista: "Vou à Bahia (volto da Bahia); vou a Brasília (volto de Brasília).",
      },
    ],
    cuidado:
      "Com a ideia de “à moda de” subentendida, há crase até antes de masculino: bife à milanesa, gol à Pelé.",
  },
  "pt-07": {
    ideia: "Sintaxe estuda a função de cada termo na frase e como as orações se ligam no período.",
    itens: [
      {
        termo: "Sujeito e predicado",
        faz: "Sujeito é de quem se fala e concorda com o verbo; predicado é o que se diz dele.",
        pista: "Pergunte ao verbo “quem?” ou “o quê?”. O sujeito pode vir depois: “Chegaram as provas”.",
      },
      {
        termo: "Objeto direto e indireto",
        faz: "Completam o verbo: o direto sem preposição, o indireto com preposição exigida pelo verbo.",
        pista: "Quem compra, compra algo (direto); quem precisa, precisa de algo (indireto).",
      },
      {
        termo: "Adjuntos",
        faz: "O adverbial indica circunstância (tempo, lugar, modo); o adnominal acompanha o substantivo.",
        pista: "Se sair da frase e ela continuar completa, é adjunto, não complemento.",
      },
      {
        termo: "Coordenação",
        faz: "Orações independentes, lado a lado, ligadas por e, mas, ou, logo, pois.",
        pista: "Cada oração faz sentido sozinha.",
      },
      {
        termo: "Subordinação",
        faz: "Uma oração exerce função na outra: substantiva (vale um nome), adjetiva (vale um adjetivo) ou adverbial (causa, condição, concessão…).",
        pista: "Adjetiva explicativa vem entre vírgulas; a restritiva vem sem vírgula.",
      },
    ],
    cuidado:
      "Sujeito não vem com preposição contraída: escreve-se “é hora de os alunos saírem”, e não “dos alunos saírem”.",
  },
  "pt-08": {
    ideia:
      "A vírgula separa termos deslocados, intercalados ou de mesma função, e nunca separa termos que se ligam direto.",
    itens: [
      {
        termo: "Vírgula proibida",
        faz: "Entre sujeito e verbo, entre verbo e complemento e entre nome e complemento.",
        pista: "“Os candidatos aprovados, serão chamados” está errado: tire a vírgula.",
      },
      {
        termo: "Vírgula obrigatória",
        faz: "Separa itens de enumeração, aposto, vocativo, expressões como “isto é” e trechos intercalados.",
        pista: "Se o trecho pode sair sem quebrar a frase, ele vai entre vírgulas.",
      },
      {
        termo: "Adjunto deslocado",
        faz: "Circunstância no início ou no meio da frase: curta, a vírgula é opcional; longa, use.",
        pista: "“Ontem saí cedo” e “Ontem, saí cedo” estão certas.",
      },
      {
        termo: "Conjunções",
        faz: "Vírgula antes de “mas” e “pois” (explicação); “porém”, “contudo” e “portanto” fora do início ficam entre vírgulas.",
        pista: "Com “e” ligando sujeitos diferentes, a vírgula é aceita: “Ele estudou, e a irmã trabalhou”.",
      },
      {
        termo: "Outros sinais",
        faz: "Ponto e vírgula separa partes longas; dois-pontos anunciam explicação, citação ou lista; travessão destaca.",
        pista: "Dois-pontos equivalem a “isto é” ou “a saber”.",
      },
    ],
    cuidado:
      "A vírgula muda o sentido: “Os agentes que fizeram o curso foram promovidos” (só alguns) × “Os agentes, que fizeram o curso, foram promovidos” (todos).",
  },
  "pt-09": {
    ideia:
      "Concordância é o ajuste entre os termos: o verbo com o sujeito (verbal) e o adjetivo com o substantivo (nominal).",
    itens: [
      {
        termo: "Regra geral",
        faz: "O verbo concorda com o núcleo do sujeito, antes ou depois dele.",
        pista: "Ache o núcleo e ignore o resto: “A lista de candidatos foi divulgada”.",
      },
      {
        termo: "Haver e fazer",
        faz: "Com sentido de existir ou de tempo passado, ficam no singular, e o auxiliar também.",
        pista: "Havia muitos erros; faz dez anos; deve haver soluções.",
      },
      {
        termo: "Verbo com “se”",
        faz: "Com verbo que pede objeto direto, o “se” é de voz passiva e o verbo concorda: vendem-se casas.",
        pista: "Dá para dizer “casas são vendidas”? Plural. Com preposição (“precisa-se de”), fica no singular.",
      },
      {
        termo: "Concordância nominal",
        faz: "O adjetivo concorda com o substantivo; antes de vários, concorda com o mais próximo.",
        pista: "“Seguem anexas as cópias” (anexo varia); “em anexo” não varia.",
      },
      {
        termo: "Palavras que não variam",
        faz: "“Menos” e “alerta” não variam; “meio” como advérbio também não.",
        pista: "“É proibido entrada” (sem artigo) × “É proibida a entrada” (com artigo).",
      },
    ],
    cuidado:
      "“Mesmo”, “próprio”, “quite”, “obrigado” e “bastante” no sentido de muitos variam: “elas mesmas”, “bastantes provas”.",
  },
  "pt-10": {
    ideia:
      "Regência é a ligação entre um verbo ou um nome e o seu complemento, com ou sem preposição; muda o sentido e explica a crase.",
    itens: [
      {
        termo: "Assistir",
        faz: "Com sentido de ver, pede “a” (assistir ao jogo); com sentido de ajudar, pode ser direto (assistir o paciente).",
        pista: "Ver: “assisti a ele”, nunca “assisti-o”.",
      },
      {
        termo: "Implicar",
        faz: "Com sentido de acarretar, é direto: a decisão implica gastos.",
        pista: "“Implicar em” é uso informal e costuma ser cobrado como erro.",
      },
      {
        termo: "Preferir",
        faz: "Prefere-se uma coisa a outra, sem “mais” e sem “do que”.",
        pista: "“Prefiro estudar a dormir.”",
      },
      {
        termo: "Pedem “a”",
        faz: "Obedecer, visar (ter como objetivo), aspirar (desejar) e os verbos de movimento: ir, chegar, voltar.",
        pista: "Obedecer às regras; aspirar ao cargo; chegar ao local. Mas aspirar o ar (inalar) é direto.",
      },
      {
        termo: "Regência nominal",
        faz: "Nomes também pedem preposição: acessível a, apto a, compatível com, contrário a, residente em.",
        pista: "“Residente na rua X”, e não “à rua X”.",
      },
    ],
    cuidado:
      "Quando o verbo pede “a” e vem palavra feminina com artigo, nasce a crase: “Refiro-me à prova”, “Obedeço às normas”.",
  },
  "pt-11": {
    ideia: "Semântica estuda o sentido das palavras e como ele muda com o contexto.",
    itens: [
      {
        termo: "Sinônimos e antônimos",
        faz: "Palavras de sentido parecido ou oposto naquele contexto.",
        pista: "Na prova, troque no trecho: o sentido e a correção precisam continuar iguais.",
      },
      {
        termo: "Homônimos",
        faz: "Mesmo som (ou mesma escrita) e sentidos diferentes.",
        pista: "Sessão (reunião, tempo), seção (setor, divisão), cessão (ato de ceder).",
      },
      {
        termo: "Parônimos",
        faz: "Palavras parecidas, mas não iguais, com sentidos diferentes.",
        pista: "Iminente (prestes a acontecer) × eminente (importante); descrição × discrição.",
      },
      {
        termo: "Denotação e conotação",
        faz: "Denotação é o sentido literal, de dicionário; conotação é o sentido figurado.",
        pista: "“Coração de pedra” é conotação.",
      },
      {
        termo: "Ambiguidade",
        faz: "Frase com duas leituras possíveis, quase sempre por termos mal colocados.",
        pista: "“O guarda viu o motorista com o binóculo”: quem estava com o binóculo?",
      },
    ],
    cuidado: "“Ao invés de” é “ao contrário de”; “em vez de” é “no lugar de”. Não são sempre trocáveis.",
  },
  "pt-12": {
    ideia:
      "Redação oficial é a escrita dos órgãos públicos: impessoal, clara, concisa, formal e na norma-padrão, seguindo o Manual de Redação da Presidência da República.",
    itens: [
      {
        termo: "Atributos",
        faz: "Clareza, precisão, objetividade, concisão, coesão, coerência, impessoalidade e formalidade.",
        pista: "Sem gíria, sem opinião pessoal e sem palavras de efeito.",
      },
      {
        termo: "Padrão ofício",
        faz: "Desde a 3ª edição do Manual, ofício, aviso e memorando viraram um só documento: o ofício.",
        pista: "Questão que trata memorando como documento à parte usa a regra antiga.",
      },
      {
        termo: "Vossa Excelência × Vossa Senhoria",
        faz: "Excelência para as altas autoridades dos Poderes; Senhoria para as demais autoridades e para os particulares.",
        pista: "“Excelentíssimo Senhor” só no vocativo dos chefes de Poder; para os demais, “Senhor” + cargo.",
      },
      {
        termo: "Concordância com o tratamento",
        faz: "O verbo e os pronomes ficam na 3ª pessoa; o adjetivo concorda com o sexo da pessoa.",
        pista: "“Vossa Excelência está convidado” (homem); nunca “vosso”.",
      },
      {
        termo: "Fechos",
        faz: "“Respeitosamente” para autoridade superior; “Atenciosamente” para mesma hierarquia ou inferior.",
        pista: "“Digníssimo” e “Ilustríssimo” não se usam mais.",
      },
    ],
    cuidado:
      "“Doutor” não é forma de tratamento: só se usa para quem tem doutorado.",
  },
};
