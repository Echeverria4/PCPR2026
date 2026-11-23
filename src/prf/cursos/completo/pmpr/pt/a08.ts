import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "pt-a08",
  resumo: {
    ideia:
      "Sintaxe do período simples, parte 2: os termos que acompanham nomes (complemento e adjunto adnominal), os que dão circunstâncias ao verbo (adjunto adverbial) e as vozes verbais (ativa, passiva, reflexiva e recíproca).",
    itens: [
      {
        termo: "Complemento nominal",
        faz: "Completa o sentido de um substantivo, adjetivo ou advérbio e sempre vem com preposição: “o temor do perigo”, “atento às ordens”, “perto da escola”.",
        pista: "Com adjetivo ou advérbio, o termo com preposição é sempre complemento nominal.",
      },
      {
        termo: "Adjunto adnominal",
        faz: "Acompanha o substantivo para especificá-lo e pode sair da frase sem deixar falta: “O melhor garçom do restaurante está de licença”. Artigo, adjetivo, numeral e pronome junto do nome também são adjuntos.",
      },
      {
        termo: "Complemento × adjunto: o teste do papel",
        faz: "Depois de substantivo com “de”: se o termo sofre a ação, é complemento nominal (“a apreensão das armas”: as armas são apreendidas). Se pratica a ação, é adjunto (“a chegada dos peritos”: os peritos chegam).",
        pista: "Posse é sempre adjunto: “o carro do delegado”.",
      },
      {
        termo: "Adjunto adverbial",
        faz: "Dá a circunstância do fato: tempo, lugar, modo, causa, instrumento, finalidade, intensidade. Pode ser palavra (rapidamente, muito) ou locução (à noite, por causa da chuva).",
      },
      {
        termo: "Objeto indireto × adjunto adverbial",
        faz: "O objeto indireto é exigido pelo verbo e pode virar “lhe”: “devolveu o livro à professora” → “devolveu-lhe o livro”. O adjunto pode sair sem deixar falta: “no sábado”.",
      },
      {
        termo: "Vírgula do adjunto adverbial",
        faz: "No fim da frase, não leva vírgula. Deslocado para o começo ou o meio: se é curto, a vírgula é facultativa (“À noite os agentes saíram”); se é longo, recomenda-se a vírgula.",
      },
      {
        termo: "Voz ativa",
        faz: "O sujeito pratica a ação e o paciente é objeto direto: “O pai abraçou o filho”. Só verbo transitivo direto (ou direto e indireto) vai para a passiva.",
      },
      {
        termo: "Passiva analítica",
        faz: "Sujeito paciente + ser, estar ou ficar + particípio + agente com “por” ou “de”: “O filho foi abraçado pelo pai”. O auxiliar concorda em número e pessoa; o particípio, em gênero e número.",
        pista: "Na troca de voz, o tempo se mantém: “recolheu” → “foi recolhido”; “recolhia” → “era recolhido”.",
      },
      {
        termo: "Passiva sintética",
        faz: "Verbo transitivo direto + se (partícula apassivadora). O termo que sofre a ação é o sujeito e o verbo concorda com ele: “Vendem-se apartamentos”. Não aceita agente da passiva.",
      },
      {
        termo: "Passiva sintética × sujeito indeterminado",
        faz: "Passiva: verbo transitivo direto, há sujeito, o verbo concorda (“Alugam-se salas”). Indeterminado: verbo intransitivo ou com preposição, não há sujeito, o verbo fica no singular (“Trata-se de casos graves”).",
      },
      {
        termo: "Reflexiva e recíproca",
        faz: "Reflexiva: um só ser pratica e sofre a ação (“O cozinheiro cortou-se” = a si mesmo). Recíproca: dois ou mais seres agem um sobre o outro (“Os dois acusaram-se” = um ao outro).",
      },
    ],
  },
  questoes: [
    {
      topico: "Termos ligados ao nome",
      subassunto: "Complemento nominal × adjunto adnominal",
      dificuldade: 5,
      raciocinio: "Ver se o termo com “de” sofre a ação do substantivo (complemento) ou a pratica ou indica posse (adjunto).",
      enunciado: "Assinale a frase em que o termo entre aspas é complemento nominal.",
      alternativas: [
        "A chegada “dos peritos” atrasou a liberação da rodovia federal.",
        "A apreensão “das armas” foi anotada no boletim de ocorrência.",
        "O carro “do delegado” ficou retido na oficina por uma semana.",
        "A decisão “da juíza” surpreendeu a defesa e a acusação no caso.",
        "O depoimento “da testemunha” durou mais de duas horas seguidas.",
      ],
      correta: 1,
      explicacao: "As armas são apreendidas: sofrem a ação expressa por “apreensão”. Termo com valor de paciente, ligado a substantivo, é complemento nominal.",
      explicacaoErradas:
        "Os peritos chegam, a juíza decide e a testemunha depõe: os três praticam a ação, então são adjuntos adnominais. “Do delegado” indica posse, que também é adjunto adnominal.",
      pegadinha: "Todos os termos têm a mesma forma (“de” + nome). A diferença está no papel: quem sofre é complemento; quem pratica ou possui é adjunto.",
      conhecimento: "Substantivo derivado de verbo transitivo (apreensão, destruição, execução) costuma pedir complemento nominal com valor de paciente.",
    },
    {
      topico: "Termos ligados ao nome",
      subassunto: "Complemento nominal",
      dificuldade: 5,
      raciocinio: "Ver a que classe pertence a palavra completada: verbo pede objeto; nome pede complemento nominal.",
      enunciado:
        "Analise as afirmativas.\nI. Em “O soldado estava atento às ordens”, o termo “às ordens” é complemento nominal.\nII. Em “O respeito aos idosos é dever de todos”, o termo “aos idosos” é objeto indireto.\nIII. Em “A casa de praia do sargento foi vendida”, os termos “de praia” e “do sargento” são adjuntos adnominais.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I.", "Apenas II.", "Apenas I e II.", "Apenas I e III.", "I, II e III."],
      correta: 3,
      explicacao: "Em I, “às ordens” completa o adjetivo “atento”: complemento nominal. Em III, “de praia” especifica o tipo de casa e “do sargento” indica posse: os dois são adjuntos adnominais.",
      explicacaoErradas:
        "II está errada: “aos idosos” completa o substantivo “respeito”, não um verbo. Por isso é complemento nominal, e não objeto indireto.",
      pegadinha: "“Respeitar aos idosos” teria objeto. “O respeito aos idosos” tem um substantivo, e o termo passa a ser complemento nominal.",
      conhecimento: "Objeto completa verbo; complemento nominal completa substantivo, adjetivo ou advérbio.",
    },
    {
      topico: "Termos ligados ao verbo",
      subassunto: "Objeto indireto × adjunto adverbial",
      dificuldade: 4,
      raciocinio: "Retirar cada termo: o que faz falta ao verbo é complemento; o que sai sem prejuízo é adjunto.",
      enunciado: "Em “O cabo entregou o relatório ao sargento na sexta-feira”, os termos “ao sargento” e “na sexta-feira” são, respectivamente,",
      alternativas: [
        "objeto indireto e adjunto adverbial de tempo.",
        "adjunto adverbial de lugar e adjunto adverbial de tempo.",
        "complemento nominal e adjunto adverbial de tempo.",
        "adjunto adnominal e adjunto adverbial de tempo.",
        "objeto direto preposicionado e objeto indireto.",
      ],
      correta: 0,
      explicacao: "Quem entrega, entrega algo a alguém: “ao sargento” é exigido pelo verbo e vira “lhe” (“entregou-lhe o relatório”). “Na sexta-feira” só dá o tempo e pode sair: adjunto adverbial.",
      explicacaoErradas:
        "“Ao sargento” não indica lugar nem completa um nome. Não é objeto direto, porque o objeto direto já é “o relatório”. E “na sexta-feira” não é exigido pelo verbo, então não é objeto.",
      pegadinha: "Os dois termos têm preposição. Ter preposição não faz de um termo objeto indireto: o que importa é o verbo exigir.",
      conhecimento: "Teste do “lhe”: só o objeto indireto de pessoa pode ser trocado por “lhe”.",
    },
    {
      topico: "Vozes verbais",
      subassunto: "Passiva sintética × sujeito indeterminado",
      dificuldade: 5,
      raciocinio: "Ver se o verbo com “se” é transitivo direto (passiva, com sujeito) ou não (indeterminado).",
      enunciado:
        "Julgue as afirmativas em verdadeiras (V) ou falsas (F).\n( ) Em “Alugam-se salas comerciais”, o “se” é partícula apassivadora e “salas comerciais” é o sujeito.\n( ) Em “Trata-se de casos graves”, o verbo deveria ir ao plural, pois “casos graves” é o sujeito.\n( ) Em “Confia-se nos agentes da corporação”, o sujeito é indeterminado.\n( ) Em “Vendem-se carros pela concessionária”, a passiva sintética está correta com o agente “pela concessionária”.\nA sequência correta, de cima para baixo, é",
      alternativas: ["V, V, F, F.", "F, F, V, V.", "V, F, F, V.", "F, V, V, F.", "V, F, V, F."],
      correta: 4,
      explicacao: "“Alugar” é transitivo direto: “salas comerciais” é o sujeito e o verbo concorda. “Confiar” pede preposição (confiar em): com “se”, o sujeito fica indeterminado. A primeira e a terceira são verdadeiras.",
      explicacaoErradas:
        "“Tratar-se de” pede preposição, não tem sujeito e fica no singular: a segunda é falsa. A passiva sintética não aceita agente; para citar quem vende, usa-se a analítica (“Carros são vendidos pela concessionária”): a quarta é falsa.",
      pegadinha: "“Casos graves” parece sujeito, mas vem depois de preposição. Termo com preposição não é sujeito.",
      conhecimento: "Só a passiva analítica aceita agente da passiva. A sintética esconde quem pratica a ação.",
    },
    {
      topico: "Vozes verbais",
      subassunto: "Ativa → passiva analítica",
      dificuldade: 5,
      raciocinio: "Manter o tempo do verbo original no auxiliar “ser” e fazer o particípio concordar com o novo sujeito.",
      enunciado: "Assinale a passagem correta para a voz passiva analítica da frase “A perícia recolheu os projéteis na cena do crime”.",
      alternativas: [
        "Os projéteis eram recolhidos pela perícia na cena do crime.",
        "Os projéteis tinham sido recolhidos pela perícia na cena do crime.",
        "Os projéteis foram recolhidos pela perícia na cena do crime.",
        "Recolheram-se os projéteis pela perícia na cena do crime.",
        "Os projéteis serão recolhidos pela perícia na cena do crime.",
      ],
      correta: 2,
      explicacao: "“Recolheu” está no pretérito perfeito. Na passiva, o auxiliar fica no mesmo tempo: “foram recolhidos”. O objeto “os projéteis” vira sujeito, e “a perícia” vira agente (“pela perícia”).",
      explicacaoErradas:
        "“Eram recolhidos” corresponde a “recolhia”; “tinham sido recolhidos”, a “recolhera”; “serão recolhidos”, a “recolherá”. A forma com “se” é passiva sintética e não aceita o agente “pela perícia”.",
      pegadinha: "Todas têm sujeito e agente no lugar certo. O erro está no tempo do auxiliar, que muda o sentido.",
      conhecimento: "Na troca de voz, o tempo e o modo do verbo principal passam para o auxiliar “ser”.",
    },
    {
      topico: "Vozes verbais",
      subassunto: "Ativa, passiva, reflexiva e recíproca",
      dificuldade: 4,
      raciocinio: "Contar quantos participantes há e ver quem pratica e quem sofre a ação.",
      enunciado:
        "Associe cada voz verbal ao exemplo.\n1. Ativa\n2. Passiva analítica\n3. Reflexiva\n4. Recíproca\n( ) Os dois suspeitos acusaram-se mutuamente na delegacia.\n( ) O recruta feriu-se ao limpar a arma.\n( ) A viatura foi rebocada pelo guincho até o pátio.\n( ) O guincho rebocou a viatura até o pátio.\nA sequência correta, de cima para baixo, é",
      alternativas: ["4, 3, 2, 1.", "3, 4, 2, 1.", "4, 3, 1, 2.", "3, 4, 1, 2.", "4, 2, 3, 1."],
      correta: 0,
      explicacao: "Os suspeitos acusaram um ao outro: recíproca (4). O recruta feriu a si mesmo: reflexiva (3). A viatura sofre a ação, com “foi rebocada” e agente: passiva analítica (2). O guincho pratica a ação: ativa (1).",
      explicacaoErradas:
        "Trocar reflexiva e recíproca ignora quantos participantes há: um só (a si mesmo) ou dois que agem um sobre o outro. Trocar ativa e passiva ignora quem é o sujeito: quem reboca ou o que é rebocado.",
      pegadinha: "Reflexiva e recíproca usam o mesmo “se”. O teste é encaixar “a si mesmo” ou “um ao outro”.",
      conhecimento: "Recíproca pede sujeito no plural ou composto: “Pedro e Ana abraçaram-se”.",
    },
    {
      topico: "Termos ligados ao verbo",
      subassunto: "Circunstâncias do adjunto adverbial",
      dificuldade: 4,
      raciocinio: "Perguntar ao verbo: por quê? com quê? quando?",
      enunciado: "Em “Por causa da neblina, a rodovia foi interditada com cones durante a madrugada”, os adjuntos adverbiais indicam, na ordem,",
      alternativas: [
        "causa, modo e lugar.",
        "finalidade, instrumento e tempo.",
        "consequência, instrumento e tempo.",
        "causa, instrumento e tempo.",
        "causa, companhia e tempo.",
      ],
      correta: 3,
      explicacao: "Por que interditaram? Por causa da neblina (causa). Com quê? Com cones (instrumento). Quando? Durante a madrugada (tempo).",
      explicacaoErradas:
        "A neblina é o motivo, não a finalidade nem a consequência. Cones são o objeto usado para interditar, não companhia. “Durante a madrugada” marca tempo, não lugar.",
      pegadinha: "“Com” pode indicar companhia (“saiu com o colega”) ou instrumento (“interditou com cones”). Veja se é pessoa que acompanha ou objeto usado.",
      conhecimento: "Causa responde “por quê?”; finalidade responde “para quê?”. A prova costuma trocar uma pela outra.",
    },
    {
      topico: "Termos ligados ao verbo",
      subassunto: "Vírgula e adjunto adverbial",
      dificuldade: 4,
      raciocinio: "Ver onde está o adjunto (no fim ou deslocado) e se é curto ou longo.",
      enunciado:
        "Analise as afirmativas.\nI. Em “À noite os agentes reforçaram a vigilância”, a vírgula depois de “À noite” é facultativa.\nII. Em “Ao longo de toda a noite de sábado os agentes reforçaram a vigilância”, recomenda-se vírgula depois de “sábado”, pois o adjunto deslocado é longo.\nIII. Em “Os agentes reforçaram a vigilância à noite”, é obrigatória a vírgula antes de “à noite”.\nEstá correto o que se afirma em",
      alternativas: ["Apenas I.", "Apenas I e II.", "Apenas II e III.", "Apenas I e III.", "I, II e III."],
      correta: 1,
      explicacao: "Adjunto adverbial curto deslocado para o começo pode vir com ou sem vírgula (I). Quando é longo, a vírgula é recomendada para separar a circunstância do resto da frase (II).",
      explicacaoErradas:
        "III está errada: no fim da frase, na ordem direta, o adjunto adverbial não precisa de vírgula.",
      pegadinha: "A vírgula do adjunto depende da posição. No fim, não se usa; no começo, depende do tamanho.",
      conhecimento: "Ordem direta: sujeito, verbo, complementos e, por último, adjuntos adverbiais. Fora dela, a vírgula entra em cena.",
    },
    {
      topico: "Vozes verbais",
      subassunto: "Concordância na voz passiva",
      dificuldade: 5,
      raciocinio: "Achar o sujeito paciente, muitas vezes depois do verbo, e fazer auxiliar e particípio concordarem com ele.",
      enunciado: "Assinale a frase em que a concordância na voz passiva está de acordo com a norma-padrão.",
      alternativas: [
        "Foram ouvido, ontem à tarde, os três vizinhos da vítima.",
        "Vendeu-se, no leilão, as motos apreendidas no ano passado.",
        "Ficaram retida na barreira duas carretas com carga irregular.",
        "Serão divulgado amanhã os nomes dos aprovados no concurso.",
        "Foi encontrada, no porta-malas, uma caixa com documentos.",
      ],
      correta: 4,
      explicacao: "O sujeito é “uma caixa com documentos” (feminino singular). O auxiliar fica no singular (“foi”) e o particípio no feminino singular (“encontrada”).",
      explicacaoErradas:
        "O certo seria “Foram ouvidos os três vizinhos”, “Venderam-se as motos”, “Ficaram retidas duas carretas” e “Serão divulgados os nomes”. O particípio e o verbo com “se” concordam com o sujeito.",
      pegadinha: "O sujeito vem depois do verbo e afastado por vírgulas. Puxe-o para o começo: “Os três vizinhos foram ouvidos”.",
      conhecimento: "Na passiva analítica, o particípio concorda em gênero e número; na sintética, o verbo concorda com o sujeito.",
    },
    {
      topico: "Vozes verbais",
      subassunto: "Agente da passiva",
      dificuldade: 5,
      raciocinio: "Ver se há voz passiva e se o termo com “por” indica quem praticou a ação.",
      enunciado: "Em qual frase o termo iniciado por “por” (ou “pelo”, “pela”) é agente da passiva?",
      alternativas: [
        "O suspeito passou pela barreira policial sem ser abordado.",
        "O suspeito foi preso por porte ilegal de arma de fogo.",
        "O suspeito foi reconhecido pela vítima na delegacia.",
        "O suspeito trocou o carro roubado por uma moto usada.",
        "O suspeito fugiu do local por medo de ser reconhecido.",
      ],
      correta: 2,
      explicacao: "“Foi reconhecido” é passiva analítica, e a vítima é quem reconheceu. Na ativa, ela vira sujeito: “A vítima reconheceu o suspeito”.",
      explicacaoErradas:
        "“Pela barreira” indica lugar. “Por porte ilegal” e “por medo” indicam causa, mesmo havendo passiva em uma delas. Em “trocou… por uma moto”, o termo indica aquilo que se recebe na troca.",
      pegadinha: "“Foi preso por porte ilegal” tem passiva, mas o porte não prendeu ninguém. Agente é quem pratica a ação.",
      conhecimento: "Teste: passe para a ativa. Se o termo com “por” vira sujeito, é agente da passiva.",
    },
  ],
};
