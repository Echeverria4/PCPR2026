import type { ModeloMental } from "../../lib/types";

export const MODELOS_MENTAIS_RLM: ModeloMental[] = [
  {
    topico: "Lógica proposicional e tabelas-verdade",
    origem: "oficial",
    gancho: "Cada conectivo tem uma regra fixa para virar V ou F",
    modelo:
      "\"E\" (conjunção) só é verdadeiro se ambos forem verdadeiros; \"OU\" (disjunção) é verdadeiro se pelo menos um for; \"SE...ENTÃO\" (condicional) só é falso quando o antecedente é verdadeiro e o consequente é falso — essa última é a mais cobrada e a mais confundida em prova.",
  },
  {
    topico: "Equivalências e negação de condicionais e quantificadores",
    origem: "oficial",
    gancho: "Negar \"se A então B\" não é \"se A então não B\" — é \"A e não B\"",
    modelo:
      "A negação do condicional transforma a implicação em conjunção: A é verdadeiro E B é falso. Negar \"todo\" vira \"existe pelo menos um que não\"; negar \"existe algum\" vira \"nenhum\" — trocar o quantificador e negar o que vem depois, nessa ordem.",
  },
  {
    topico: "Teoria dos conjuntos",
    origem: "oficial",
    gancho: "União soma tudo, interseção só o comum, diferença tira o que se repete",
    modelo:
      "|A∪B| = |A| + |B| − |A∩B| é a fórmula-base para questões com diagrama de Venn e dois ou três conjuntos — decorar essa fórmula, e sua versão com três conjuntos, resolve a maioria das questões de conjunto com números.",
  },
  {
    topico: "Porcentagem, razão e proporção",
    origem: "oficial",
    gancho: "Porcentagem é só uma razão disfarçada com denominador 100",
    modelo:
      "Razão compara duas grandezas (a para b); proporção é a igualdade entre duas razões (a/b = c/d, resolvida por multiplicação cruzada); porcentagem é um caso particular de razão em que o denominador é sempre 100 — pensar assim evita decorar fórmula específica para cada tipo de questão.",
  },
  {
    topico: "Contagem e probabilidade básica",
    origem: "oficial",
    gancho: "Contagem responde quantas formas; probabilidade divide favoráveis por possíveis",
    modelo:
      "O princípio multiplicativo — multiplicar o número de opções em cada etapa independente — é a base da contagem. Probabilidade básica é sempre casos favoráveis dividido por casos possíveis: depois de contar corretamente com o princípio multiplicativo, o cálculo de probabilidade fica direto.",
  },
  {
    topico: "Sequências lógicas e sequências numéricas",
    origem: "aposta",
    gancho: "Toda sequência tem um padrão escondido — ache a regra antes de adivinhar o próximo número",
    modelo:
      "Pode ser aritmética (soma constante), geométrica (multiplicação constante), ou um padrão mais criativo (alternância, posição, figura). Testar a diferença entre termos consecutivos e a razão entre termos consecutivos são os dois primeiros testes a fazer sempre.",
  },
  {
    topico: "Princípios de contagem: arranjo, combinação e permutação simples",
    origem: "aposta",
    gancho: "Pergunte: a ordem importa? Se sim, é arranjo ou permutação; se não, é combinação",
    modelo:
      "Permutação organiza todos os elementos em ordem, fatorial simples; arranjo escolhe e ordena parte dos elementos; combinação escolhe sem se importar com a ordem. A pergunta \"trocar a ordem gera um resultado diferente?\" decide qual fórmula usar.",
  },
  {
    topico: "Diagramas lógicos (conjuntos, Venn) aplicados a problemas com dados do enunciado",
    origem: "aposta",
    gancho: "Desenhe o diagrama antes de tentar montar equação",
    modelo:
      "Questões da FGV costumam dar números soltos no enunciado, como \"40 pessoas gostam de X, 25 de Y, 10 de ambos\" — desenhar o diagrama de Venn e preencher de dentro para fora (interseção primeiro, depois as partes exclusivas) evita o erro de contar a interseção duas vezes.",
  },
];
