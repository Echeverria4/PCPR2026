# PCPR 2026 — Quiz de Estudos

Sistema de questões e simulados para o concurso da Polícia Civil do Paraná
(Edital 01/2026, banca FGV, cargo Agente de Polícia Judiciária), cobrindo as
13 matérias do edital. SPA em React + TypeScript, com sync opcional via
Supabase e explicações aprofundadas geradas por IA (Claude).

## Arquitetura

- **Frontend**: Vite + React 18 + TypeScript, sem router (troca de tela via
  state machine simples em `src/App.tsx`).
- **Banco de questões**: arquivos estáticos em `src/data/questions/*.ts`, um
  por matéria, agregados em `src/data/questions/index.ts`. É a fonte de
  verdade principal — funciona mesmo sem Supabase configurado.
- **Progresso do usuário**: `src/lib/storage.ts` grava localmente
  (localStorage) e, se o Supabase estiver configurado e o usuário logado,
  sincroniza tentativas (`attempts`) na nuvem via `src/lib/supabase.ts`.
- **IA (Claude)**: duas funções serverless em `api/`, chamadas pelo
  frontend via `fetch`. A chave da Anthropic nunca é exposta ao navegador.
- **Banco Postgres (Supabase)**: schema em `supabase/migrations/0001_init.sql`
  (tabelas `subjects`, `questions`, `attempts`, com RLS).

## Pré-requisitos

- Node.js 18+
- Uma conta Supabase (opcional — o app funciona 100% localmente sem ela)
- Uma API key da Anthropic com créditos, para habilitar os recursos de IA
  (opcional — o app funciona sem ela, só os botões de IA ficam indisponíveis)

## Configuração

```bash
cd app
npm install
cp .env.example .env
```

Preencha o `.env`:

| Variável | Onde usar | Descrição |
| --- | --- | --- |
| `VITE_SUPABASE_URL` | cliente | URL do projeto Supabase |
| `VITE_SUPABASE_ANON_KEY` | cliente | chave pública (anon) do Supabase |
| `ANTHROPIC_API_KEY` | servidor (`api/*.ts`) | chave da Anthropic — **nunca prefixar com `VITE_`** |
| `SUPABASE_SERVICE_ROLE_KEY` | servidor (seed + `api/generate-questions.ts`) | chave service_role — **nunca prefixar com `VITE_`, nunca commitar** |

Sem `VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY`, o app roda em "modo local":
progresso fica só no navegador, sem login. Sem `ANTHROPIC_API_KEY`, as telas
funcionam normalmente, mas os botões de IA retornam erro ao serem clicados.

## Rodando localmente

```bash
npm run dev       # http://localhost:5173
npm run build     # tsc -b (valida src/ e api/) + vite build
npm run preview   # serve o build de produção localmente
```

## Banco de dados (Supabase)

O schema fica em `supabase/migrations/0001_init.sql`. Para aplicar num
projeto Supabase real:

```bash
npx supabase login          # autenticação interativa — feita uma vez
npx supabase link --project-ref <seu-project-ref>
npx supabase db push
```

> **Pendência conhecida**: `npx supabase login` exige um fluxo interativo no
> navegador — precisa ser rodado manualmente pelo usuário dono da conta
> Supabase antes de aplicar o schema/seed num projeto real. Sem isso, o app
> continua funcionando normalmente em modo local (localStorage), só a
> sincronização entre dispositivos fica indisponível.

Depois de aplicado o schema, popule as tabelas `subjects` e `questions` com
o banco de questões já escrito em TypeScript:

```bash
npm run seed   # lê VITE_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY do .env
```

O seed é idempotente (`upsert` por `id`) — pode ser rodado de novo sempre
que o banco de questões em `src/data/questions/` for expandido.

## Recursos de IA (Claude)

Duas funções serverless em `api/`, usando `@anthropic-ai/sdk` com o modelo
`claude-opus-5`:

- **`api/explain.ts`** — explicação aprofundada de uma questão, com
  streaming (texto chega em tempo real). É o endpoint por trás do botão
  **"Aprofundar com IA"** que aparece no Quiz depois de responder — também
  aceita uma dúvida específica digitada pelo candidato. Já está integrado
  na UI (`src/components/Quiz.tsx`).
- **`api/generate-questions.ts`** — gera novas questões inéditas no estilo
  FGV para uma matéria (e opcionalmente um tópico), com explicação
  justificada. Se `SUPABASE_SERVICE_ROLE_KEY` estiver configurada, as
  questões geradas são persistidas na tabela `questions` (`origem: "ia"`).
  Endpoint funcional, ainda não tem botão na UI — pode ser chamado
  diretamente (ex.: para popular o banco de uma matéria mais fraca):

  ```bash
  curl -X POST http://localhost:5173/api/generate-questions \
    -H "Content-Type: application/json" \
    -d '{"materia": "pp", "quantidade": 5}'
  ```

Ambas as funções leem `ANTHROPIC_API_KEY` só do lado do servidor
(`process.env`, nunca `import.meta.env`) — a chave nunca chega ao bundle
do navegador.

## Deploy (Vercel)

```bash
npx vercel        # primeiro deploy / preview
npx vercel --prod # produção
```

Configure as 4 variáveis de ambiente (tabela acima) no painel do projeto na
Vercel antes do primeiro deploy em produção — `Settings → Environment
Variables`. `vercel.json` já define `buildCommand`, `outputDirectory`,
`framework: vite`, o rewrite de `/api/*` e `maxDuration: 60` para as funções
de IA (o padrão da Vercel, 10s, não é suficiente para gerar questões ou
streamar explicações longas).

## Estrutura de pastas

```text
app/
├── api/                  # funções serverless (Vercel) — IA
├── src/
│   ├── components/       # Layout, Home, Quiz, Result, Auth
│   ├── data/
│   │   ├── questions/    # banco de questões por matéria (pt, ti, for, ...)
│   │   └── subjects.ts   # matérias, pesos, PROVA_MIX, EDITAL_INFO
│   ├── lib/               # types, quizEngine, storage, formatters
│   └── services/          # cliente Supabase
└── supabase/
    ├── migrations/        # schema SQL
    └── seed/               # script que popula subjects + questions
```
