import type { ExemploResolvido } from "../../../../aulas/resumos/tipos";

/** Exemplos resolvidos de RLM, aulas 01 a 10. Problemas próprios do app, em cenários da PRF. */
export const EXEMPLOS_RLM_1: Record<string, ExemploResolvido[]> = {
  "rlm-01": [
    {
      titulo: "União de três conjuntos",
      formula: "n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)",
      legenda: "n( ) é quantos elementos há. ∪ é “ou” (a união) e ∩ é “e” (a interseção).",
      problema:
        "Numa operação, 50 condutores foram autuados por velocidade, 40 por falta de cinto e 30 por uso de celular. Foram 15 por velocidade e cinto, 10 por velocidade e celular, 8 por cinto e celular, e 5 pelas três infrações. Quantos condutores foram autuados?",
      passos: [
        {
          faz: "Some os três grupos. Quem tem duas infrações entrou duas vezes nessa soma.",
          conta: "50 + 40 + 30 = 120",
        },
        {
          faz: "Tire as interseções de dois em dois, para não contar ninguém em dobro.",
          conta: "120 − 15 − 10 − 8 = 87",
        },
        {
          faz: "Devolva a interseção tripla. Quem tem as três entrou 3 vezes e saiu 3 vezes, então sumiu da conta.",
          conta: "87 + 5 = 92",
        },
        {
          faz: "Confira pelo diagrama, começando do centro: só velocidade 30, só cinto 22, só celular 17, exatamente duas infrações 10 + 5 + 3, e as três 5.",
          conta: "30 + 22 + 17 + 10 + 5 + 3 + 5 = 92",
        },
      ],
      resposta: "92 condutores.",
    },
  ],
  "rlm-03": [
    {
      titulo: "Diferença de dois quadrados",
      formula: "a² − b² = (a + b) · (a − b)",
      problema:
        "Um pátio de retenção quadrado tem 102 m de lado, e outro tem 98 m. Quantos metros quadrados o maior tem a mais?",
      passos: [
        {
          faz: "Reconheça o formato: é uma diferença de dois quadrados, com a = 102 e b = 98.",
          conta: "102² − 98²",
        },
        {
          faz: "Troque pelo produto da soma pela diferença. Assim não é preciso elevar nada ao quadrado.",
          conta: "(102 + 98) · (102 − 98)",
        },
        { faz: "Faça a conta.", conta: "200 · 4 = 800" },
      ],
      resposta: "800 m² a mais (confira: 10.404 − 9.604 = 800).",
    },
    {
      titulo: "Quadrado da soma",
      formula: "(a + b)² = a² + 2ab + b²",
      problema:
        "Um pátio quadrado tinha x metros de lado e ganhou 3 m em cada lado. Quanto a área aumentou?",
      passos: [
        { faz: "Escreva a área nova: o lado passou a ser x + 3.", conta: "Área nova = (x + 3)²" },
        {
          faz: "Desenvolva com a fórmula. O termo do meio, 2ab, é o que mais se esquece.",
          conta: "(x + 3)² = x² + 2 · x · 3 + 3² = x² + 6x + 9",
        },
        { faz: "Aumento é a área nova menos a antiga (x²).", conta: "x² + 6x + 9 − x² = 6x + 9" },
      ],
      resposta: "Aumentou 6x + 9 m², e não só 9 m²: o termo 6x não some.",
    },
  ],
  "rlm-05": [
    {
      titulo: "Divisão inversamente proporcional",
      formula: "Parte = (total ÷ soma dos pesos) · peso. Na inversa, cada peso vira o inverso: 1 ÷ peso.",
      problema:
        "Uma verba de R$ 2.600 para manutenção será dividida entre três delegacias, em partes inversamente proporcionais à nota de conservação das viaturas: 2, 3 e 4. Quanto recebe cada uma?",
      passos: [
        { faz: "Inversa: troque cada peso pelo seu inverso. Quem tem nota menor recebe mais.", conta: "1/2, 1/3 e 1/4" },
        {
          faz: "Tire as frações: multiplique todas pelo MMC de 2, 3 e 4, que é 12. A proporção não muda.",
          conta: "12/2 = 6, 12/3 = 4 e 12/4 = 3",
        },
        { faz: "Some os pesos novos e veja quanto vale cada parte.", conta: "6 + 4 + 3 = 13 → 2.600 ÷ 13 = 200" },
        { faz: "Multiplique cada peso pelo valor da parte.", conta: "6 · 200 = 1.200; 4 · 200 = 800; 3 · 200 = 600" },
      ],
      resposta: "R$ 1.200, R$ 800 e R$ 600 (confira: a soma dá 2.600).",
    },
  ],
  "rlm-06": [
    {
      titulo: "Regra de três composta",
      formula: "x = valor conhecido · cada razão. Grandeza direta entra como está; grandeza inversa entra invertida.",
      problema:
        "6 agentes, trabalhando 8 horas por dia, conferem 480 documentos em 5 dias. Em quantos dias 4 agentes, trabalhando 6 horas por dia, conferem 720 documentos?",
      passos: [
        {
          faz: "Compare cada grandeza com os dias, uma de cada vez. Mais documentos pedem mais dias: é direta.",
          conta: "Documentos: 720/480 (direta, entra como está)",
        },
        {
          faz: "Menos agentes pedem mais dias, e menos horas por dia também: as duas são inversas.",
          conta: "Agentes: 6/4. Horas: 8/6 (inversas, entram invertidas)",
        },
        { faz: "Monte: multiplique os 5 dias por todas as razões.", conta: "x = 5 · (6/4) · (8/6) · (720/480)" },
        { faz: "Simplifique antes de multiplicar.", conta: "(6/4) · (8/6) = 8/4 = 2; 720/480 = 1,5 → x = 5 · 2 · 1,5 = 15" },
      ],
      resposta: "15 dias.",
    },
  ],
  "rlm-07": [
    {
      titulo: "Aumentos e descontos seguidos",
      formula: "Valor final = valor inicial · fator₁ · fator₂",
      legenda: "Aumento de p%: fator 1 + p/100. Desconto de p%: fator 1 − p/100.",
      problema:
        "Num trecho, as autuações subiram 20% em um ano e caíram 20% no ano seguinte. O total voltou ao que era?",
      passos: [
        { faz: "Transforme cada taxa em fator.", conta: "+20% → 1,20; −20% → 0,80" },
        { faz: "Multiplique os fatores. Taxas seguidas não se somam.", conta: "1,20 · 0,80 = 0,96" },
        { faz: "Leia o fator final: 0,96 é 96% do valor do início.", conta: "1 − 0,96 = 0,04 = 4%" },
      ],
      resposta: "Não. O total ficou 4% abaixo do início.",
    },
    {
      titulo: "Voltar ao valor antigo",
      formula: "Valor antigo = valor novo ÷ fator",
      problema: "Depois de um reajuste de 25%, uma taxa passou a R$ 500. Quanto ela era antes?",
      passos: [
        { faz: "Ache o fator do reajuste.", conta: "+25% → 1,25" },
        { faz: "Para desfazer um aumento, divida pelo fator.", conta: "500 ÷ 1,25 = 400" },
        {
          faz: "Confira e veja a pegadinha: tirar 25% de 500 dá 375, que está errado, porque os 25% foram calculados sobre o valor antigo.",
          conta: "400 · 1,25 = 500",
        },
      ],
      resposta: "R$ 400.",
    },
  ],
  "rlm-08": [
    {
      titulo: "Equação do 2º grau (Bhaskara)",
      formula: "ax² + bx + c = 0 → Δ = b² − 4ac e x = (−b ± √Δ) ÷ 2a",
      legenda: "a, b e c são os números que acompanham x², x e o termo sozinho.",
      problema:
        "Um pátio retangular tem 96 m² de área, e o comprimento tem 4 m a mais que a largura. Qual é a largura?",
      passos: [
        {
          faz: "Dê nome ao que não se sabe: largura x, comprimento x + 4. Área é largura vezes comprimento.",
          conta: "x · (x + 4) = 96 → x² + 4x − 96 = 0 (a = 1, b = 4, c = −96)",
        },
        { faz: "Calcule o delta. Cuidado com o sinal de c.", conta: "Δ = 4² − 4 · 1 · (−96) = 16 + 384 = 400" },
        { faz: "Aplique a fórmula, com a raiz do delta.", conta: "x = (−4 ± √400) ÷ 2 = (−4 ± 20) ÷ 2" },
        {
          faz: "Ache as duas raízes. Medida não pode ser negativa, então fica a positiva.",
          conta: "x = 16 ÷ 2 = 8 ou x = −24 ÷ 2 = −12",
        },
        { faz: "Confira: 8 de largura e 12 de comprimento.", conta: "8 · 12 = 96 ✓" },
      ],
      resposta: "8 m de largura (e 12 m de comprimento).",
    },
  ],
  "rlm-10": [
    {
      titulo: "Função do 1º grau a partir de dois pontos",
      formula: "f(x) = ax + b, com a = (y₂ − y₁) ÷ (x₂ − x₁)",
      legenda: "a é quanto o valor muda por unidade (por km). b é a parte fixa.",
      problema:
        "A remoção de um veículo ao pátio custa uma taxa fixa mais um valor por km. Por 10 km, paga-se R$ 180; por 25 km, R$ 300. Quanto custa uma remoção de 40 km?",
      passos: [
        { faz: "Escreva os dois pontos (km; preço).", conta: "(10; 180) e (25; 300)" },
        { faz: "Ache o valor por km (o a).", conta: "a = (300 − 180) ÷ (25 − 10) = 120 ÷ 15 = 8" },
        { faz: "Ache a taxa fixa (o b) com um dos pontos.", conta: "180 = 8 · 10 + b → b = 180 − 80 = 100" },
        { faz: "Monte a função e use x = 40.", conta: "f(x) = 8x + 100 → f(40) = 320 + 100 = 420" },
      ],
      resposta: "R$ 420.",
    },
  ],
};
