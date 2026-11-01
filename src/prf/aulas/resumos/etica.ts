import type { ResumoAula } from "./tipos";

export const ETICA: Record<string, ResumoAula> = {
  "etica-01": {
    ideia:
      "Moral é o conjunto de regras de conduta de um grupo numa época; ética é a reflexão sobre essas regras e sobre o que é agir bem.",
    itens: [
      {
        termo: "Moral",
        faz: "Regras e costumes aceitos por um grupo; muda com a cultura e com o tempo.",
        pista: "É prática e particular: responde “como devo agir aqui?”.",
      },
      {
        termo: "Ética",
        faz: "Reflexão crítica sobre a moral, em busca de princípios que valham para todos.",
        pista: "É teórica e universal: pergunta “por que essa regra é certa?”.",
      },
      {
        termo: "Origem das palavras",
        faz: "Ética vem do grego ethos (caráter, modo de ser); moral vem do latim mores (costumes).",
      },
      {
        termo: "Ética × Direito",
        faz: "O Direito é imposto pelo Estado e tem sanção externa (multa, prisão); a moral depende da consciência e da reprovação social.",
        pista: "Nem tudo que é legal é moral: “nem tudo que é lícito é honesto”.",
      },
      {
        termo: "Autonomia × heteronomia",
        faz: "Agir por convicção própria (autonomia) ou só por imposição de fora (heteronomia).",
        pista: "A ética valoriza a autonomia: fazer o certo mesmo sem ninguém fiscalizando.",
      },
    ],
    cuidado:
      "A banca troca as definições: moral é a prática do grupo, particular e mutável; ética é a reflexão, com pretensão universal.",
  },
  "etica-02": {
    ideia:
      "Princípios são as bases gerais que orientam a conduta; valores são o que se considera importante; a ética une os dois na hora de decidir.",
    itens: [
      {
        termo: "Princípios",
        faz: "Ideias gerais e estáveis que servem de base para as regras (dignidade, honestidade, justiça).",
        pista: "As regras concretas nascem deles.",
      },
      {
        termo: "Valores",
        faz: "Qualidades que uma pessoa ou sociedade considera desejáveis (verdade, respeito, solidariedade).",
        pista: "O peso de cada valor pode mudar com a cultura e a época.",
      },
      {
        termo: "Virtude (Aristóteles)",
        faz: "Disposição firme para agir bem, construída pelo hábito; é o meio-termo entre dois excessos.",
        pista: "Coragem é o meio-termo entre covardia e imprudência.",
      },
      {
        termo: "Dever (Kant)",
        faz: "Agir por dever, seguindo uma regra que poderia valer para todos (imperativo categórico).",
        pista: "Trate as pessoas sempre como fim, nunca só como meio.",
      },
      {
        termo: "Consequências (utilitarismo)",
        faz: "A ação certa é a que produz o maior bem para o maior número de pessoas.",
        pista: "Julga a ação pelo resultado, não pela intenção.",
      },
    ],
    cuidado:
      "Princípio é mais amplo e estável que valor: o princípio é a base; o valor é aquilo que se estima.",
  },
  "etica-03": {
    ideia:
      "Cidadania é ter direitos e deveres e participar da vida pública; a democracia só funciona com ética de governantes e de cidadãos.",
    itens: [
      {
        termo: "Cidadania",
        faz: "Conjunto de direitos civis, políticos e sociais e de deveres de quem pertence ao Estado.",
        pista: "Não é só votar: inclui cumprir a lei, fiscalizar e participar.",
      },
      {
        termo: "Democracia",
        faz: "Todo poder emana do povo, que o exerce por representantes eleitos ou diretamente (CF, art. 1º, parágrafo único).",
        pista: "Participação direta: plebiscito, referendo e iniciativa popular.",
      },
      {
        termo: "Tipos de direitos",
        faz: "Civis (liberdade e igualdade perante a lei), políticos (votar e ser votado) e sociais (saúde, educação, trabalho).",
      },
      {
        termo: "Controle social",
        faz: "A sociedade acompanha e fiscaliza a gestão pública: conselhos, ouvidorias, audiências públicas.",
        pista: "A transparência e a Lei de Acesso à Informação tornam esse controle possível.",
      },
      {
        termo: "Ética democrática",
        faz: "Respeito à diversidade, ao diálogo e ao interesse público acima do interesse particular.",
      },
    ],
    cuidado:
      "Cidadania não se resume ao voto: a alternativa que reduz cidadania a direitos políticos costuma estar errada.",
  },
  "etica-04": {
    ideia:
      "Quem exerce função pública age em nome do interesse coletivo: a conduta ética é um dever, não um favor.",
    itens: [
      {
        termo: "Função pública",
        faz: "Atribuição exercida em nome do Estado por qualquer agente público, mesmo temporário ou sem remuneração.",
        pista: "Agente público é conceito amplo: servidor, empregado público, estagiário, mesário…",
      },
      {
        termo: "Interesse público",
        faz: "O agente busca o bem comum, nunca vantagem para si ou para outros.",
        pista: "Conflito de interesses: quando um interesse privado pode influenciar a decisão pública.",
      },
      {
        termo: "Princípios do art. 37 (LIMPE)",
        faz: "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
        pista: "Moralidade: não basta ser legal, tem de ser honesto.",
      },
      {
        termo: "Improbidade",
        faz: "Ato desonesto que gera enriquecimento ilícito, prejuízo aos cofres públicos ou ofensa aos princípios (Lei 8.429/1992).",
        pista: "Desde a reforma de 2021, só há improbidade com dolo (intenção).",
      },
      {
        termo: "Transparência",
        faz: "Agir às claras, prestar contas e dar acesso à informação; o sigilo é exceção.",
      },
    ],
    cuidado:
      "A ética do servidor vale também fora do serviço: a conduta na vida privada pode melhorar ou piorar o seu conceito na vida funcional.",
  },
  "etica-05": {
    ideia:
      "O Código de Ética do servidor civil do Executivo federal (Decreto 1.171/1994) traz regras deontológicas, deveres, vedações e as Comissões de Ética.",
    itens: [
      {
        termo: "Regras deontológicas",
        faz: "Dignidade, decoro, zelo, eficácia e consciência dos princípios morais guiam o servidor.",
        pista: "A moralidade não se limita a distinguir o bem do mal: o fim é sempre o bem comum.",
      },
      {
        termo: "Deveres",
        faz: "Ser rápido, cortês, assíduo e leal; tratar bem o usuário; comunicar ao superior atos contrários ao interesse público.",
        pista: "Deixar alguém esperando sem motivo é atitude contra a ética.",
      },
      {
        termo: "Vedações",
        faz: "Usar o cargo para obter favores, receber presente ou vantagem para cumprir o dever, retirar documentos sem autorização.",
      },
      {
        termo: "Servidor, para o Código",
        faz: "Todo aquele que presta serviço ao Estado, mesmo de forma transitória e sem remuneração.",
      },
      {
        termo: "Pena",
        faz: "A Comissão de Ética aplica só a censura, com parecer fundamentado e ciência do faltoso.",
        pista: "Advertência, suspensão e demissão vêm da Lei 8.112/1990, não do Código.",
      },
    ],
    cuidado: "A única pena do Código de Ética é a censura; a banca costuma trocá-la por advertência ou suspensão.",
  },
  "etica-06": {
    ideia:
      "O Decreto 6.029/2007 criou o Sistema de Gestão da Ética do Poder Executivo Federal, que liga a Comissão de Ética Pública às comissões de cada órgão.",
    itens: [
      {
        termo: "Quem integra o Sistema",
        faz: "A Comissão de Ética Pública (CEP), as Comissões de Ética do Decreto 1.171/1994 e as demais comissões e equivalentes.",
      },
      {
        termo: "CEP",
        faz: "Sete brasileiros de idoneidade moral e reputação ilibada, designados pelo Presidente da República, com mandato de 3 anos e uma recondução.",
        pista: "Coordena, avalia e supervisiona o Sistema; o presidente da CEP tem voto de qualidade.",
      },
      {
        termo: "Comissão de cada órgão",
        faz: "Três membros titulares e três suplentes, do quadro permanente, com mandatos de 3 anos não coincidentes.",
      },
      {
        termo: "Processo ético",
        faz: "Aberto de ofício ou por denúncia fundamentada, com direito de defesa; fica “reservado” até ser concluído.",
      },
      {
        termo: "Sem remuneração",
        faz: "O trabalho nas comissões não é pago: conta como prestação de relevante serviço público.",
      },
    ],
    cuidado:
      "Os números caem na prova: CEP com 7 membros designados pelo Presidente da República; comissão do órgão com 3 titulares e 3 suplentes.",
  },
};
