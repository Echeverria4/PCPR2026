import { useState, type CSSProperties } from "react";
import { SUBJECTS } from "../data/subjects";
import { VIDEOS_GERAL, VIDEOS_POR_MATERIA } from "../data/videos";
import type { SubjectId, VideoRecurso } from "../lib/types";
import { extrairYoutubeId, youtubeEmbedUrl, youtubeThumbUrl } from "../lib/youtube";

function VideoCard({ video }: { video: VideoRecurso }) {
  const [tocando, setTocando] = useState(false);
  const videoId = extrairYoutubeId(video.url);

  return (
    <article className="video-card">
      {videoId ? (
        <div className="video-embed">
          {tocando ? (
            <iframe
              className="video-embed-frame"
              src={youtubeEmbedUrl(videoId)}
              title={video.titulo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              className="video-embed-capa"
              style={{ backgroundImage: `url("${youtubeThumbUrl(videoId)}")` }}
              onClick={() => setTocando(true)}
              aria-label={`Assistir ${video.titulo}`}
            >
              <span className="video-embed-play">▶</span>
            </button>
          )}
        </div>
      ) : null}
      <h3 className="video-titulo">{video.titulo}</h3>
      <div className="video-canal">{video.canal}</div>
      {video.dica && <p className="video-dica">{video.dica}</p>}
      <a className="botao botao-youtube" href={video.url} target="_blank" rel="noopener noreferrer">
        ▶ Assistir no YouTube
      </a>
    </article>
  );
}

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
            const qtd = VIDEOS_POR_MATERIA[s.id]?.length ?? 0;
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

      {videos.length === 0 ? (
        <div className="vazio">Nenhum vídeo indicado para esta matéria ainda.</div>
      ) : (
        <div className="video-lista">
          {videos.map((v, i) => (
            <VideoCard key={i} video={v} />
          ))}
        </div>
      )}
    </>
  );
}
