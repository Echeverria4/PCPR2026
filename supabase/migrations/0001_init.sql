-- Operação PCPR 2026 — schema inicial
-- Tabelas: subjects (matérias do edital), questions (banco de questões,
-- incluindo as geradas por IA), attempts (histórico de respostas por usuário).
-- Todas as tabelas têm RLS habilitado; escrita em subjects/questions é feita
-- apenas via service_role (seed script ou função serverless), nunca pelo cliente.

create table if not exists public.subjects (
  id text primary key,
  nome text not null,
  peso int not null,
  cor text not null,
  topicos jsonb not null default '[]'::jsonb
);

create table if not exists public.questions (
  id text primary key,
  materia text not null references public.subjects(id) on update cascade,
  topico text not null,
  enunciado text not null,
  alternativas jsonb not null,
  correta smallint not null check (correta between 0 and 4),
  explicacao text not null,
  origem text not null default 'banco' check (origem in ('banco', 'ia')),
  criado_em timestamptz not null default now(),
  constraint alternativas_tem_5 check (jsonb_array_length(alternativas) = 5)
);

create index if not exists idx_questions_materia on public.questions (materia);

create table if not exists public.attempts (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id text not null,
  materia text not null references public.subjects(id) on update cascade,
  acertou boolean not null,
  respondida_em timestamptz not null default now()
);

create index if not exists idx_attempts_user on public.attempts (user_id);
create index if not exists idx_attempts_user_materia on public.attempts (user_id, materia);

alter table public.subjects enable row level security;
alter table public.questions enable row level security;
alter table public.attempts enable row level security;

-- Leitura pública (conteúdo de estudo, não sensível). Escrita: só service_role
-- (usado pelo seed script e pelas funções serverless), que ignora RLS por padrão.
drop policy if exists "subjects leitura publica" on public.subjects;
create policy "subjects leitura publica" on public.subjects
  for select using (true);

drop policy if exists "questions leitura publica" on public.questions;
create policy "questions leitura publica" on public.questions
  for select using (true);

-- attempts é dado pessoal: cada usuário só enxerga e grava as próprias respostas.
drop policy if exists "attempts select proprio" on public.attempts;
create policy "attempts select proprio" on public.attempts
  for select using (auth.uid() = user_id);

drop policy if exists "attempts insert proprio" on public.attempts;
create policy "attempts insert proprio" on public.attempts
  for insert with check (auth.uid() = user_id);

drop policy if exists "attempts delete proprio" on public.attempts;
create policy "attempts delete proprio" on public.attempts
  for delete using (auth.uid() = user_id);
