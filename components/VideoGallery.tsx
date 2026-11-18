import { galleryVideos } from '@/lib/site';

export default function VideoGallery() {
  return <div className="gallery-video-grid">
    {galleryVideos.map(video => <figure className="gallery-video-card" key={video.src}>
      <video autoPlay muted loop controls playsInline preload="metadata" width={360} height={640} aria-label={video.title}>
        <source src={video.src} type="video/mp4" />
        Your browser does not support this video. <a href={video.src}>Open {video.title.toLowerCase()}</a>.
      </video>
      <figcaption>{video.title}</figcaption>
    </figure>)}
  </div>;
}
