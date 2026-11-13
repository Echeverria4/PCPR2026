import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getAnthropicClient } from "./_anthropic.js";
import { SUBJECT_MAP } from "../src/data/subjects.js";
import { PRF_MATERIAS } from "../src/data/prf.js";
import { MATERIAS_PRF_POLICIAL } from "../src/prf/cursos/completo/prf-policial/materias.js";
import type { SubjectId } from "../src/lib/types";

/** Para quem a IA explica, por curso. Sem curso no pedido, vale a PCPR. */
const CONTEXTO_PCPR = "o concurso de Agente de Polícia Judiciária da PCPR 2026 (banca FGV)";
const CONTEXTO_PRF =
  "o concurso de Agente Administrativo da Polícia Rodoviária Federal (PRF), de nível médio, ainda sem edital nem banca definida (o último edital, de 2014, foi da FUNCAB). Use a legislação em vigor";

const CONTEXTO_PRF_POLICIAL =
  "o concurso de Policial Rodoviário Federal (PRF), de nível superior, ainda sem edital nem banca definida. Use a legislação em vigor";

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
  const policial = curso === "prf-policial";
  const nomeMateria =
    typeof materia !== "string"
      ? undefined
      : policial
        ? MATERIAS_PRF_POLICIAL.get(materia)
        : prf
          ? PRF_MATERIAS.find((m) => m.id === materia)?.nome
          : materia in SUBJECT_MAP
            ? SUBJECT_MAP[materia as SubjectId].nome
            : undefined;

  if (
    !nomeMateria ||
    typeof enunciado !== "string" ||
    !Array.isArray(alternativas) ||
    (alternativas.length !== 5 && alternativas.length !== 2) ||
    typeof correta !== "number" ||
    correta < 0 ||
    correta >= alternativas.length ||
    typeof pergunta !== "string" ||
    !pergunta.trim() ||
    pergunta.length > 600
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

  // Duas alternativas = item de julgamento (Certo/Errado), no modelo da Cebraspe.
  const certoErrado = alternativas.length === 2;
  const letras = ["A", "B", "C", "D", "E"];
  const listaAlternativas = certoErrado
    ? "Julgue o item como Certo ou Errado."
    : alternativas.map((alt, i) => `${letras[i]}) ${alt}`).join("\n");
  const gabarito = certoErrado ? `Gabarito: ${correta === 0 ? "Certo" : "Errado"}.` : `Gabarito: alternativa ${letras[correta]}.`;

  const prompt = `Você é um professor especialista em "${nomeMateria}", preparando um candidato para ${policial ? CONTEXTO_PRF_POLICIAL : prf ? CONTEXTO_PRF : CONTEXTO_PCPR}.

${certoErrado ? "Item" : "Questão"}${topico ? ` (tópico: ${topico})` : ""}:
${enunciado}

${listaAlternativas}

${gabarito}

O candidato tem esta dúvida específica sobre a questão: "${pergunta.trim()}". Responda diretamente a ela, em poucos parágrafos curtos.

Seja rigoroso, cite fontes reais (nunca invente lei ou súmula) e escreva em português do Brasil, de forma didática e direta.`;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("X-Accel-Buffering", "no");

  try {
    // Sonnet, com esforço baixo (resposta de dúvida, não ensaio) e reserva automática
    // de outro modelo no servidor se o Sonnet estiver indisponível.
    const stream = client.beta.messages.stream({
      model: "claude-sonnet-5-5",
      max_tokens: 2000,
      output_config: { effort: "low" },
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
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
