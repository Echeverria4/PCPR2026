-- Guarda o modo da sessão (materia, prova, revisao, treino-alvo) em que a
-- tentativa foi respondida. Usado para excluir respostas de "Revisão dos
-- errados" do cálculo de % de acerto por matéria (essas questões já eram
-- erros conhecidos — contá-las de novo infla o percentual artificialmente).

alter table public.attempts add column if not exists modo text;
