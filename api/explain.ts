import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getAnthropicClient } from "./_anthropic";
import { SUBJECT_MAP } from "../src/data/subjects";
import { PRF_MATERIAS } from "../src/data/prf";
import type { SubjectId } from "../src/lib/types";

/** Para quem a IA explica, por curso. Sem curso no pedido, vale a PCPR. */
const CONTEXTO_PCPR = "o concurso de Agente de Polícia Judiciária da PCPR 2026 (banca FGV)";
const CONTEXTO_PRF =
  "o concurso de Agente Administrativo da Polícia Rodoviária Federal (PRF), de nível médio, ainda sem edital nem banca definida (o último edital, de 2014, foi da FUNCAB). Use a legislação em vigor";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ erro: "Use POST." });
    return;
  }

  const { curso, materia, topico, enunciado, alternativas, correta, pergunta } = (req.body ?? {}) as {
    curso?: string;
    materia?: string;
    topico?: string;
    enunciado?: string;
    alternativas?: string[];
    correta?: number;
    pergunta?: string;
  };

  const prf = curso === "prf-adm";
  const nomeMateria =
    typeof materia !== "string"
      ? undefined
      : prf
        ? PRF_MATERIAS.find((m) => m.id === materia)?.nome
        : materia in SUBJECT_MAP
          ? SUBJECT_MAP[materia as SubjectId].nome
          : undefined;

  if (
    !nomeMateria ||
    typeof enunciado !== "string" ||
    !Array.isArray(alternativas) ||
    alternativas.length !== 5 ||
    typeof correta !== "number" ||
    correta < 0 ||
    correta > 4
  ) {
    res.status(400).json({ erro: "Corpo da requisição inválido." });
    return;
  }

  let client;
  try {
    client = getAnthropicClient();
  } catch (e) {
    res.status(500).json({ erro: (e as Error).message });
    return;
  }

  const letras = ["A", "B", "C", "D", "E"];
  const listaAlternativas = alternativas.map((alt, i) => `${letras[i]}) ${alt}`).join("\n");

  const prompt = `Você é um professor especialista em "${nomeMateria}", preparando um candidato para ${prf ? CONTEXTO_PRF : CONTEXTO_PCPR}.

Questão${topico ? ` (tópico: ${topico})` : ""}:
${enunciado}

${listaAlternativas}

Gabarito: alternativa ${letras[correta]}.

${
  typeof pergunta === "string" && pergunta.trim()
    ? `O candidato tem esta dúvida específica sobre a questão: "${pergunta.trim()}". Responda diretamente a ela.`
    : "Explique em profundidade por que o gabarito está correto e por que cada uma das outras alternativas está errada, citando a base legal, súmula ou conceito técnico aplicável sempre que existir."
}

Seja rigoroso, cite fontes reais (nunca invente lei ou súmula) e escreva em português do Brasil, de forma didática e direta.`;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("X-Accel-Buffering", "no");

  try {
    const stream = client.messages.stream({
      model: "claude-opus-5",
      max_tokens: 4000,
      thinking: { type: "adaptive" },
      messages: [{ role: "user", content: prompt }],
    });

    stream.on("text", (delta) => {
      res.write(delta);
    });

    await stream.finalMessage();
    res.end();
  } catch (e) {
    console.error(e);
    if (!res.headersSent) {
      res.status(500).json({ erro: "Falha ao gerar explicação." });
    } else {
      res.end();
    }
  }
}
