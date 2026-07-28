import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import { getAnthropicClient } from "./_anthropic";
import { SUBJECT_MAP } from "../src/data/subjects";
import type { SubjectId, Question } from "../src/lib/types";

const MAX_QUANTIDADE = 8;

interface QuestaoGerada {
  topico: string;
  enunciado: string;
  alternativas: string[];
  correta: number;
  explicacao: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ erro: "Use POST." });
    return;
  }

  const { materia, topico, quantidade } = (req.body ?? {}) as {
    materia?: string;
    topico?: string;
    quantidade?: number;
  };

  if (typeof materia !== "string" || !(materia in SUBJECT_MAP)) {
    res.status(400).json({ erro: "Campo 'materia' inválido ou ausente." });
    return;
  }

  const materiaId = materia as SubjectId;
  const subject = SUBJECT_MAP[materiaId];
  const n = Math.min(Math.max(Number(quantidade) || 5, 1), MAX_QUANTIDADE);

  let client;
  try {
    client = getAnthropicClient();
  } catch (e) {
    res.status(500).json({ erro: (e as Error).message });
    return;
  }

  const prompt = `Você é um examinador especialista da banca FGV, redigindo questões de múltipla escolha para o concurso de Agente de Polícia Judiciária da Polícia Civil do Paraná (PCPR 2026).

Gere exatamente ${n} questões inéditas de "${subject.nome}"${topico ? `, focadas no tópico "${topico}"` : ""}.

Regras obrigatórias:
- Estilo FGV: enunciado objetivo, muitas vezes com um caso curto ou afirmação técnica, sem pegadinha por ambiguidade barata.
- Baseie-se em fatos jurídicos/técnicos REAIS e verificáveis (leis, súmulas, jurisprudência, conceitos técnicos corretos). Nunca invente artigo de lei, número de súmula ou dado técnico.
- Cada questão deve ter exatamente 5 alternativas, apenas 1 correta, sem "todas as anteriores" nem "nenhuma das anteriores".
- A explicação deve justificar a resposta correta e indicar por que as demais estão erradas, citando a base legal/técnica quando houver.
- Português do Brasil, sem erros de acentuação.

Responda APENAS com um array JSON válido (sem markdown, sem texto antes ou depois), no formato exato:
[
  {
    "topico": "string curta",
    "enunciado": "string",
    "alternativas": ["string", "string", "string", "string", "string"],
    "correta": 0,
    "explicacao": "string"
  }
]`;

  try {
    const response = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 8000,
      thinking: { type: "adaptive" },
      output_config: { effort: "high" },
      messages: [{ role: "user", content: prompt }],
    });

    let texto = "";
    for (const block of response.content) {
      if (block.type === "text") {
        texto += block.text;
      }
    }

    if (!texto.trim()) {
      res.status(502).json({ erro: "A IA não retornou texto." });
      return;
    }

    const bruto = texto
      .trim()
      .replace(/^```(json)?\s*/i, "")
      .replace(/```\s*$/i, "");

    const geradas = JSON.parse(bruto) as QuestaoGerada[];

    const questoes: Question[] = geradas
      .filter((q) => Array.isArray(q.alternativas) && q.alternativas.length === 5)
      .map((q, idx) => ({
        id: `${materiaId}-ia-${Date.now()}-${idx}`,
        materia: materiaId,
        topico: q.topico,
        enunciado: q.enunciado,
        alternativas: q.alternativas as [string, string, string, string, string],
        correta: Math.min(Math.max(Math.round(q.correta), 0), 4) as 0 | 1 | 2 | 3 | 4,
        explicacao: q.explicacao,
        origem: "ia" as const,
      }));

    if (questoes.length === 0) {
      res.status(502).json({ erro: "A IA não retornou questões em formato válido." });
      return;
    }

    await persistirNoSupabase(questoes);

    res.status(200).json({ questions: questoes });
  } catch (e) {
    console.error(e);
    res.status(500).json({ erro: "Falha ao gerar questões." });
  }
}

async function persistirNoSupabase(questoes: Question[]) {
  const url = process.env.VITE_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) return;

  const admin = createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { error } = await admin.from("questions").upsert(
    questoes.map((q) => ({
      id: q.id,
      materia: q.materia,
      topico: q.topico,
      enunciado: q.enunciado,
      alternativas: q.alternativas,
      correta: q.correta,
      explicacao: q.explicacao,
      origem: q.origem ?? "ia",
    })),
  );

  if (error) {
    console.error("Falha ao persistir questões geradas no Supabase:", error.message);
  }
}
