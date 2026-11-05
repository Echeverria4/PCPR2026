import type { AulaEscrita } from "../../tipos";

export const AULA: AulaEscrita = {
  aula: "info-11",
  resumo: {
    ideia:
      "Segurança da informação protege dados por princípios básicos. Para cada ataque ou controle, pergunte qual princípio está em jogo.",
    itens: [
      {
        termo: "Confidencialidade",
        faz: "Só quem tem permissão acessa a informação.",
      },
      {
        termo: "Integridade",
        faz: "A informação não é alterada sem autorização.",
      },
      {
        termo: "Disponibilidade",
        faz: "A informação está acessível quando se precisa dela.",
      },
      {
        termo: "Autenticidade",
        faz: "Confirma quem é o autor ou a origem.",
      },
      {
        termo: "Irretratabilidade",
        faz: "O autor não pode negar o que fez. Também se chama não repúdio.",
      },
      {
        termo: "Fatores de autenticação",
        faz: "O que você sabe, o que você tem e o que você é.",
        pista: "Múltiplos fatores exigem tipos diferentes. Senha e PIN são um fator só.",
      },
      {
        termo: "Assinatura digital",
        faz: "Hash cifrado com a chave privada do emissor. Dá integridade, autenticidade e não repúdio.",
      },
      {
        termo: "Sigilo com chaves",
        faz: "Cifra-se com a chave pública do destinatário, e só a chave privada dele abre.",
      },
      {
        termo: "Esteganografia",
        faz: "Oculta o fato de haver mensagem, guardando-a em uma foto, por exemplo.",
      },
      {
        termo: "Substituição e transposição",
        faz: "Substituição troca os símbolos. Transposição muda a ordem deles.",
      },
    ],
    cuidado:
      "Assinatura digital não dá sigilo. A mensagem assinada continua legível, se não for cifrada.",
  },
  questoes: [
    {
      topico: "Princípios",
      subassunto: "Integridade",
      dificuldade: 4,
      raciocinio: "Dado alterado sem autorização fere a integridade.",
      enunciado:
        "Um invasor alterou o valor de uma multa no banco de dados, sem tirar o sistema do ar e sem divulgar nada. O princípio diretamente atingido foi a",
      alternativas: [
        "disponibilidade, pois o dado ficou fora do alcance",
        "confidencialidade, pois o valor da multa era público",
        "irretratabilidade, pois o sistema seguiu no ar",
        "integridade, pois o dado foi alterado sem permissão",
        "autenticidade, pois o site continuou com o mesmo nome",
      ],
      correta: 3,
      explicacao: "Alterar a informação sem autorização atinge a integridade.",
      explicacaoErradas:
        "“disponibilidade” exigiria o sistema fora do ar. “confidencialidade” exigiria acesso indevido a dado sigiloso, que o caso não traz. “irretratabilidade” trata de negar autoria. “autenticidade” trata da origem.",
      pegadinha: "Marcar confidencialidade só porque houve invasão.",
      conhecimento: "Fora do ar: disponibilidade. Alterado: integridade. Vazado: confidencialidade.",
    },
    {
      topico: "Autenticação",
      subassunto: "Múltiplos fatores",
      dificuldade: 5,
      raciocinio: "Contar tipos de fator, e não a quantidade de etapas.",
      enunciado: "Representa autenticação com dois fatores de fato o uso de",
      alternativas: [
        "senha e PIN, pois são duas informações que a pessoa sabe",
        "senha e pergunta secreta, pois são dois conhecimentos dela",
        "senha e token físico, pois une o que se sabe ao que se tem",
        "digital e íris, pois são duas partes do corpo da própria pessoa",
        "crachá e cartão, pois são dois objetos em poder da pessoa",
      ],
      correta: 2,
      explicacao: "Senha é algo que se sabe, e token é algo que se tem. São dois tipos diferentes.",
      explicacaoErradas:
        "“senha e PIN” e “senha e pergunta secreta” são do mesmo tipo: o que se sabe. “digital e íris” são do mesmo tipo: o que se é. “crachá e cartão” são do mesmo tipo: o que se tem.",
      pegadinha: "Contar duas etapas como dois fatores.",
      conhecimento: "Só há múltiplos fatores com tipos diferentes.",
    },
    {
      topico: "Criptografia",
      subassunto: "Assinatura digital",
      dificuldade: 5,
      raciocinio: "Assina-se com a própria chave privada, e ela não esconde o conteúdo.",
      enunciado: "Um documento recebe assinatura digital. Esse mecanismo",
      alternativas: [
        "garante o sigilo, pois cifra o conteúdo com a chave pública",
        "garante o sigilo e usa a chave privada do destinatário",
        "garante a disponibilidade, pois guarda cópia em um servidor",
        "dispensa o hash, pois a chave cifra o documento por inteiro",
        "garante integridade e autoria, mas não garante sigilo",
      ],
      correta: 4,
      explicacao: "O hash é cifrado com a chave privada do emissor. Isso dá integridade, autenticidade e não repúdio.",
      explicacaoErradas:
        "“garante o sigilo” aparece duas vezes e erra nas duas: quem precisa de sigilo cifra o conteúdo. “garante a disponibilidade” não é função da assinatura. “dispensa o hash” erra: o que se cifra é o hash.",
      pegadinha: "Confundir assinar com cifrar.",
      conhecimento: "Assinar: chave privada do emissor. Cifrar para sigilo: chave pública do destinatário.",
    },
    {
      topico: "Criptografia",
      subassunto: "Sigilo com chave pública",
      dificuldade: 5,
      raciocinio: "Só o destinatário deve abrir, então a chave final é a dele.",
      enunciado:
        "Com criptografia assimétrica, Paulo quer enviar a Rita um arquivo que só ela possa abrir. Paulo deve cifrar o arquivo com a chave",
      alternativas: [
        "privada dele, e Rita abre com a própria chave pública",
        "pública dele, e Rita abre com a chave privada de Paulo",
        "pública de Rita, e ela abre com a própria chave privada",
        "privada de Rita, que ela envia a Paulo antes da troca",
        "privada dele, e Rita abre com a chave privada de Rita mesmo",
      ],
      correta: 2,
      explicacao: "O que é cifrado com a chave pública de Rita só abre com a chave privada de Rita.",
      explicacaoErradas:
        "“privada dele” descreve a lógica da assinatura. “pública dele” exigiria entregar a chave privada de Paulo. “privada de Rita” erra: chave privada não é compartilhada.",
      pegadinha: "Usar a chave privada do emissor, que serve para assinar.",
      conhecimento: "Chave privada nunca sai das mãos do dono.",
    },
    {
      topico: "Criptografia",
      subassunto: "Esteganografia",
      dificuldade: 4,
      raciocinio: "O objetivo é que ninguém perceba a mensagem.",
      enunciado:
        "Um grupo escondeu um texto dentro dos pixels de uma foto comum, de modo que a imagem parecesse normal. A técnica usada foi a",
      alternativas: [
        "criptoanálise, que oculta a mensagem dentro da imagem",
        "esteganografia, que oculta a existência da mensagem",
        "transposição, que troca as letras por outros símbolos",
        "substituição, que muda a ordem das letras do texto",
        "assinatura digital, que torna o texto legível só ao dono",
      ],
      correta: 1,
      explicacao: "A esteganografia esconde a existência da mensagem em outro conteúdo.",
      explicacaoErradas:
        "“criptoanálise” busca quebrar cifras. “transposição” muda a ordem das letras. “substituição” troca as letras. “assinatura digital” não torna o texto secreto.",
      pegadinha: "Trocar esteganografia por criptografia. Uma esconde a mensagem, a outra a torna ilegível.",
      conhecimento: "Criptografia: mensagem visível, mas ilegível. Esteganografia: mensagem invisível.",
    },
    {
      topico: "Criptografia",
      subassunto: "Substituição e transposição",
      dificuldade: 4,
      raciocinio: "As mesmas letras, em outra ordem.",
      enunciado: "A palavra RADAR foi cifrada como DARRA, com as mesmas letras em outra posição. Trata-se de cifra de",
      alternativas: [
        "substituição",
        "esteganografia",
        "assinatura",
        "transposição",
        "codificação",
      ],
      correta: 3,
      explicacao: "A transposição mantém as letras e muda a posição delas.",
      explicacaoErradas:
        "“substituição” trocaria as letras por outros símbolos. “esteganografia” ocultaria a mensagem. “assinatura” não é tipo de cifra. “codificação” troca palavras inteiras por códigos.",
      pegadinha: "Marcar substituição sem conferir que as letras são as mesmas.",
      conhecimento: "Mesmas letras em outra ordem: transposição.",
    },
  ],
};
