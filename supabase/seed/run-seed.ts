import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
import { SUBJECTS } from "../../src/data/subjects";
import { BANCO } from "../../src/data/questions";

const url = process.env.VITE_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceRoleKey) {
  console.error(
    "Faltam variáveis de ambiente: defina VITE_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY em .env ou .env.local antes de rodar `npm run seed`.",
  );
  process.exit(1);
}

const admin = createClient(url, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function main() {
  console.log(`Enviando ${SUBJECTS.length} matérias...`);
  const { error: erroSubjects } = await admin.from("subjects").upsert(
    SUBJECTS.map((s) => ({
      id: s.id,
      nome: s.nome,
      peso: s.peso,
      cor: s.cor,
      topicos: s.topicos,
    })),
  );
  if (erroSubjects) {
    console.error("Falha ao gravar subjects:", erroSubjects.message);
    process.exit(1);
  }

  console.log(`Enviando ${BANCO.length} questões...`);
  const { error: erroQuestions } = await admin.from("questions").upsert(
    BANCO.map((q) => ({
      id: q.id,
      materia: q.materia,
      topico: q.topico,
      enunciado: q.enunciado,
      alternativas: q.alternativas,
      correta: q.correta,
      explicacao: q.explicacao,
      origem: q.origem ?? "banco",
    })),
  );
  if (erroQuestions) {
    console.error("Falha ao gravar questions:", erroQuestions.message);
    process.exit(1);
  }

  console.log("Seed concluído com sucesso.");
}

main();
