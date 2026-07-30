-- Adiciona o tempo gasto (em ms) para responder cada questão, usado pela aba
-- "Tempos" para listar o tempo por pergunta de cada matéria.

alter table public.attempts add column if not exists tempo_ms integer;
