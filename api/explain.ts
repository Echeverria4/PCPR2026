import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getAnthropicClient } from "./_anthropic";
import { SUBJECT_MAP } from "../src/data/subjects";
import type { SubjectId } from "../src/lib/types";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ erro: "Use POST." });
    return;
  }

  const { materia, topico, enunciado, alternativas, correta, pergunta } = (req.body ?? {}) as {
    materia?: string;
    topico?: string;
    enunciado?: string;
    alternativas?: string[];
    correta?: number;
    pergunta?: string;
  };

  if (
    typeof materia !== "string" ||
    !(materia in SUBJECT_MAP) ||
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

  const subject = SUBJECT_MAP[materia as SubjectId];

  let client;
  try {
    client = getAnthropicClient();
  } catch (e) {
    res.status(500).json({ erro: (e as Error).message });
    return;
  }

  const letras = ["A", "B", "C", "D", "E"];
  const listaAlternativas = alternativas.map((alt, i) => `${letras[i]}) ${alt}`).join("\n");

  const prompt = `Você é um professor especialista em "${subject.nome}", preparando um candidato para o concurso de Agente de Polícia Judiciária da PCPR 2026 (banca FGV).

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
