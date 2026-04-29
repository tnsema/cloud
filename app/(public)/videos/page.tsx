import Link from "next/link";
import { videos } from "../content";

export default function VideosPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold">YouTube Videos</h1>
      <div className="mt-8 grid gap-6">
        {videos.map((video) => (
          <article id={video.slug} key={video.slug} className="grid gap-5 rounded-lg border border-black/10 p-5 dark:border-white/10 lg:grid-cols-[1fr_0.8fr]">
            <div className="aspect-video overflow-hidden rounded-md bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{video.title}</h2>
              <p className="mt-3 text-foreground/70">{video.description}</p>
              <p className="mt-5 text-sm text-foreground/60">Related</p>
              <Link className="mt-1 inline-flex font-medium underline" href={video.relatedHref}>
                {video.relatedLabel}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
