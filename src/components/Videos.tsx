import { useState, type CSSProperties } from "react";
import { SUBJECTS } from "../data/subjects";
import { VIDEOS_GERAL, VIDEOS_POR_MATERIA } from "../data/videos";
import { VIDEOS_POR_TOPICO, VIDEOS_RETA_FINAL, totalVideosTopicos } from "../data/videosTopicos";
import { CONTEUDO_POR_MATERIA } from "../data/conteudos";
import type { SubjectId } from "../lib/types";
import { VideoCard, VideoMini } from "./VideoCard";

export default function Videos() {
  const [materiaSelecionada, setMateriaSelecionada] = useState<SubjectId | null>(null);

  if (!materiaSelecionada) {
    return (
      <>
        <h2 className="secao-titulo">Vídeos para aprofundar</h2>
        <p className="conteudo-intro">
          Aulas e canais gratuitos no YouTube para complementar o treino de questões, organizados
          por matéria. Comece pelos vídeos específicos da PCPR 2026 abaixo.
        </p>

        <h3 className="secao-titulo">Comece por aqui — específicos da PCPR 2026</h3>
        <div className="video-lista">
          {VIDEOS_GERAL.map((v, i) => (
            <VideoCard key={i} video={v} />
          ))}
        </div>

        <h3 className="secao-titulo">Por matéria</h3>
        <div className="materias-grid">
          {SUBJECTS.map((s) => {
            const qtd =
              (VIDEOS_POR_MATERIA[s.id]?.length ?? 0) +
              (VIDEOS_RETA_FINAL[s.id]?.length ?? 0) +
              totalVideosTopicos(s.id);
            return (
              <button
                key={s.id}
                className="materia-card"
                style={{ "--cor-materia": s.cor } as CSSProperties}
                onClick={() => setMateriaSelecionada(s.id)}
                disabled={qtd === 0}
              >
                <div className="materia-nome">{s.nome}</div>
                <div className="materia-meta">
                  <span>{s.peso} questões na prova</span>
                  <span>{qtd > 0 ? `${qtd} vídeo(s)` : "sem indicação ainda"}</span>
                </div>
              </button>
            );
          })}
        </div>
      </>
    );
  }

  const subject = SUBJECTS.find((s) => s.id === materiaSelecionada)!;
  const videos = VIDEOS_POR_MATERIA[materiaSelecionada] ?? [];
  const reta = VIDEOS_RETA_FINAL[materiaSelecionada] ?? [];
  const porTopico = VIDEOS_POR_TOPICO[materiaSelecionada] ?? {};
  const topicos = (CONTEUDO_POR_MATERIA[materiaSelecionada] ?? [])
    .filter((t) => (porTopico[t.topico]?.length ?? 0) > 0)
    .sort((a, b) => Number(a.origem === "aposta") - Number(b.origem === "aposta"));

  return (
    <>
      <button className="botao" onClick={() => setMateriaSelecionada(null)}>
        ← Matérias
      </button>
      <h2
        className="secao-titulo conteudo-materia-titulo"
        style={{ "--cor-materia": subject.cor } as CSSProperties}
      >
        {subject.nome}
      </h2>

      {videos.length === 0 && reta.length === 0 && topicos.length === 0 && (
        <div className="vazio">Nenhum vídeo indicado para esta matéria ainda.</div>
      )}

      {reta.length > 0 && (
        <>
          <h3 className="aposta-subtitulo">🏁 Reta final: revisões PCPR 2026</h3>
          <div className="video-lista">
            {reta.map((v) => (
              <VideoCard key={v.url} video={v} />
            ))}
          </div>
        </>
      )}

      {videos.length > 0 && (
        <>
          {(reta.length > 0 || topicos.length > 0) && (
            <h3 className="aposta-subtitulo">📺 Aulas gerais da matéria</h3>
          )}
          <div className="video-lista">
            {videos.map((v, i) => (
              <VideoCard key={i} video={v} />
            ))}
          </div>
        </>
      )}

      {topicos.length > 0 && (
        <>
          <h3 className="aposta-subtitulo">🎬 Por tópico do conteúdo ({topicos.length})</h3>
          <div className="conteudo-lista">
            {topicos.map((t) => (
              <section key={t.topico} className="conteudo-card">
                <h3 className="conteudo-topico-titulo">
                  {t.origem === "aposta" && <span className="video-topico-aposta">Aposta</span>}
                  {t.topico}
                </h3>
                <div className="video-mini-lista">
                  {porTopico[t.topico].map((v) => (
                    <VideoMini key={v.url} video={v} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </>
      )}
    </>
  );
}
