import Link from "next/link";
import { videos } from "../content";

export default function VideosPage() {
  const availableVideos = videos.filter(
    (video) => video.youtubeId || video.embedUrl || video.externalUrl,
  );

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100 via-sky-50 to-amber-50 px-8 py-12">
        <CloudBlob className="absolute -right-10 -top-5 w-80 text-amber-600 opacity-20" />
        <CloudBlob className="absolute -bottom-4 -left-14 w-64 text-sky-500 opacity-10" />

        <p className="mb-4 flex items-center gap-2 font-[family-name:var(--font-heading)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
          <span className="inline-block h-px w-6 bg-[var(--primary)]" />
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--primary)]" />
          Video Library
        </p>

        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-foreground">
          Cloud <span className="text-[var(--primary)]">Videos</span>
        </h1>

        <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
          Intro videos, walkthroughs, and supporting clips connected to my
          learning notes and cloud projects.
        </p>
      </div>

      <div className="mt-8 grid gap-6">
        {availableVideos.map((video) => (
          <article
            id={video.slug}
            key={video.slug}
            className="grid gap-5 rounded-2xl border border-black/10 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1fr_0.8fr]"
          >
            {video.youtubeId || video.embedUrl ? (
              <div className="aspect-video overflow-hidden rounded-xl bg-black">
                <iframe
                  className="h-full w-full"
                  src={
                    video.youtubeId
                      ? `https://www.youtube.com/embed/${video.youtubeId}`
                      : video.embedUrl
                  }
                  title={video.title}
                  allow={
                    video.youtubeId
                      ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      : "encrypted-media; fullscreen"
                  }
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex aspect-video flex-col items-center justify-center rounded-xl bg-gradient-to-br from-black to-neutral-800 p-6 text-center text-white">
                <p className="font-[family-name:var(--font-heading)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  {video.provider} Video
                </p>
                <h2 className="mt-3 max-w-sm font-[family-name:var(--font-heading)] text-2xl font-bold">
                  {video.title}
                </h2>
                {video.externalUrl ? (
                  <a
                    className="mt-6 rounded bg-[var(--primary)] px-5 py-3 font-[family-name:var(--font-heading)] text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:opacity-90"
                    href={video.externalUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Watch Video
                  </a>
                ) : null}
              </div>
            )}

            <div>
              <span className="rounded border border-[var(--primary)]/20 bg-[var(--primary)]/[0.07] px-2 py-0.5 font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-wide text-[#7a5c1c]">
                {video.provider}
              </span>
              <h2 className="mt-4 text-2xl font-semibold">{video.title}</h2>
              <p className="mt-3 text-foreground/70">{video.description}</p>
              <p className="mt-5 text-sm text-foreground/60">Related</p>
              <Link
                className="mt-1 inline-flex font-medium underline"
                href={video.relatedHref}
              >
                {video.relatedLabel}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CloudBlob({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 340 160"
      fill="currentColor"
      aria-hidden="true"
    >
      <ellipse cx="170" cy="110" rx="150" ry="50" />
      <ellipse cx="100" cy="90" rx="90" ry="60" />
      <ellipse cx="210" cy="80" rx="100" ry="65" />
      <ellipse cx="270" cy="100" rx="70" ry="45" />
    </svg>
  );
}
