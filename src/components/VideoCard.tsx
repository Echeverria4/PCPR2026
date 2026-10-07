import { useState } from "react";
import type { VideoRecurso } from "../lib/types";
import { extrairYoutubeId, youtubeEmbedUrl, youtubeThumbUrl } from "../lib/youtube";

function Player({ video, videoId }: { video: VideoRecurso; videoId: string }) {
  return (
    <iframe
      className="video-embed-frame"
      src={youtubeEmbedUrl(videoId)}
      title={video.titulo}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export function VideoCard({ video }: { video: VideoRecurso }) {
  const [tocando, setTocando] = useState(false);
  const videoId = extrairYoutubeId(video.url);

  return (
    <article className="video-card">
      {videoId ? (
        <div className="video-embed">
          {tocando ? (
            <Player video={video} videoId={videoId} />
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
      <div className="video-canal">
        {video.canal}
        {video.duracao && ` · ${video.duracao}`}
      </div>
      {video.dica && <p className="video-dica">{video.dica}</p>}
      <a className="botao botao-youtube" href={video.url} target="_blank" rel="noopener noreferrer">
        ▶ Assistir no YouTube
      </a>
    </article>
  );
}

/** Versão compacta, usada dentro dos cartões de conteúdo: miniatura ao lado do título; ao tocar, abre o player ali mesmo. */
export function VideoMini({ video }: { video: VideoRecurso }) {
  const [tocando, setTocando] = useState(false);
  const videoId = extrairYoutubeId(video.url);

  return (
    <div className={`video-mini${tocando ? " video-mini-tocando" : ""}`}>
      {videoId && (
        <div className="video-mini-midia">
          {tocando ? (
            <Player video={video} videoId={videoId} />
          ) : (
            <button
              className="video-embed-capa"
              style={{ backgroundImage: `url("${youtubeThumbUrl(videoId)}")` }}
              onClick={() => setTocando(true)}
              aria-label={`Assistir ${video.titulo}`}
            >
              <span className="video-embed-play">▶</span>
              {video.duracao && <span className="video-mini-duracao">{video.duracao}</span>}
            </button>
          )}
        </div>
      )}
      <div className="video-mini-info">
        <div className="video-mini-titulo">{video.titulo}</div>
        <div className="video-canal">
          {video.canal}
          {video.duracao && ` · ${video.duracao}`}
        </div>
        {video.dica && <p className="video-mini-dica">{video.dica}</p>}
        <a className="video-mini-link" href={video.url} target="_blank" rel="noopener noreferrer">
          Abrir no YouTube ↗
        </a>
      </div>
    </div>
  );
}
