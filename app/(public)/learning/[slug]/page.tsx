import Link from "next/link";
import { learningLogs } from "@/data/learning";
import { notFound } from "next/navigation";
import { defaultVideo, videos } from "../../content";

export function generateStaticParams() {
  return learningLogs.map((log) => ({ slug: log.slug }));
}

export default async function LearningLogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const log = learningLogs.find((item) => item.slug === slug);

  if (!log) {
    notFound();
  }

  const relatedVideo = hasText(log.videoSlug)
    ? videos.find((video) => video.slug === log.videoSlug) ?? defaultVideo
    : defaultVideo;

  const topics = cleanStrings(log.keyTopics);
  const tools = cleanStrings(log.toolsUsed);
  const learned = cleanStrings(log.whatILearned);
  const challenges = cleanStrings(log.challenges);
  const mistakes = cleanStrings(log.mistakes);
  const builtTested = cleanStrings(log.builtTested);
  const nextSteps = cleanStrings(log.nextSteps);
  const relatedProjects = cleanStrings(log.relatedProjects);

  return (
    <article className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100 via-sky-50 to-amber-50 px-8 py-12">
        <CloudBlob className="absolute -right-10 -top-5 w-80 text-amber-600 opacity-20" />
        <CloudBlob className="absolute -bottom-4 -left-14 w-64 text-sky-500 opacity-10" />
        <CloudBlob className="absolute left-[32%] top-12 w-48 text-sky-400 opacity-10" />

        <div className="relative">
          <p className="mb-4 flex items-center gap-2 font-[family-name:var(--font-heading)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
            <span className="inline-block h-px w-6 bg-[var(--primary)]" />
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--primary)]" />
            Learning Log Detail
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded px-2 py-0.5 font-[family-name:var(--font-heading)] text-[8px] font-semibold uppercase tracking-widest ${statusClass(log.status)}`}
            >
              {log.status}
            </span>
            <span className="rounded bg-white/70 px-2 py-0.5 font-[family-name:var(--font-heading)] text-[8px] font-semibold uppercase tracking-widest text-black/40">
              {log.difficulty}
            </span>
            <span className="rounded bg-white/70 px-2 py-0.5 font-[family-name:var(--font-heading)] text-[8px] font-semibold uppercase tracking-widest text-black/40">
              {log.category}
            </span>
          </div>

          <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-foreground">
            {log.title}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
            {log.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-8">
            <Stat value={learned.length} label="Lessons" />
            <div className="h-9 w-px bg-[var(--primary)]/20" />
            <Stat value={topics.length} label="Topics" />
            <div className="h-9 w-px bg-[var(--primary)]/20" />
            <Stat value={builtTested.length} label="Tested" />
          </div>
        </div>
      </div>

      <TagSection title="Key Topics" items={topics} />
      <TagSection title="Tools Used" items={tools} />
      <ListSection title="What I Learned" items={learned} />
      <TextSection title="Why It Matters" text={log.whyItMatters} />
      <ListSection title="Mistakes and Challenges" items={challenges} />
      <ListSection title="Mistakes" items={mistakes} />
      <ListSection title="What I Built/Tested" items={builtTested} />
      <ListSection title="Next Steps" items={nextSteps} />

      {relatedProjects.length > 0 ? (
        <section className="detail-section">
          <h2 className="text-2xl font-semibold">Related Projects</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            {relatedProjects.map((projectSlug) => (
              <Link
                key={projectSlug}
                className="rounded-md border border-black/15 px-3 py-2 text-sm font-medium dark:border-white/20"
                href={`/projects/${projectSlug}`}
              >
                {projectSlug}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {relatedVideo && videoEmbedSrc(relatedVideo) ? (
        <section className="detail-section">
          <h2 className="text-2xl font-semibold">Related Video</h2>
          <div className="mt-4 aspect-video overflow-hidden rounded-md bg-black">
            <iframe
              className="h-full w-full"
              src={videoEmbedSrc(relatedVideo)}
              title={relatedVideo.title}
              allow={
                relatedVideo.youtubeId
                  ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  : "encrypted-media; fullscreen"
              }
              allowFullScreen
            />
          </div>
          <Link
            className="mt-4 inline-flex text-sm font-medium underline"
            href={`/videos#${relatedVideo.slug}`}
          >
            View video details
          </Link>
        </section>
      ) : null}
    </article>
  );
}

function TextSection({ title, text }: { title: string; text: string }) {
  if (!hasText(text)) {
    return null;
  }

  return (
    <section className="detail-section">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-3 text-foreground/70">{text}</p>
    </section>
  );
}

function TagSection({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="detail-section">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded border border-[var(--primary)]/20 bg-[var(--primary)]/[0.07] px-2 py-0.5 font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-wide text-[#7a5c1c]"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="detail-section">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <List items={items} />
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-foreground/70">
      {items.map((item) => (
        <li key={item}>- {item}</li>
      ))}
    </ul>
  );
}

function hasText(value: string | undefined) {
  return Boolean(value?.trim());
}

function cleanStrings(items: string[]) {
  return items.filter((item) => hasText(item));
}

function videoEmbedSrc(video: { youtubeId?: string; embedUrl?: string }) {
  if (video.youtubeId) {
    return `https://www.youtube.com/embed/${video.youtubeId}`;
  }

  return video.embedUrl ?? "";
}

function statusClass(status: string) {
  if (status === "Completed") return "bg-emerald-100 text-emerald-700";
  if (status === "In Progress") return "bg-amber-100 text-amber-700";
  return "bg-slate-100 text-slate-500";
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-[family-name:var(--font-heading)] text-2xl font-bold leading-none text-[var(--primary)]">
        {value}
      </span>
      <span className="mt-1 font-[family-name:var(--font-heading)] text-[11px] uppercase tracking-widest text-[var(--text-muted)]">
        {label}
      </span>
    </div>
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
