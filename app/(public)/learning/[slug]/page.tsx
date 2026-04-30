import Link from "next/link";
import { notFound } from "next/navigation";
import { learningLogs, videos } from "../../content";

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

  const relatedVideo = log.videoSlug
    ? videos.find((video) => video.slug === log.videoSlug)
    : undefined;

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-12">
      <p className="text-sm text-foreground/60">{log.date} · {log.category}</p>
      <h1 className="mt-3 text-4xl font-semibold">{log.title}</h1>

      <Section title="What I Learned" items={log.whatILearned} />
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Why It Matters</h2>
        <p className="mt-3 text-foreground/70">{log.whyItMatters}</p>
      </section>
      <Section title="Mistakes and Challenges" items={log.challenges} />
      <Section title="What I Built/Tested" items={log.builtTested} />

      {relatedVideo ? (
        <section className="mt-8 rounded-lg border border-black/10 p-5 dark:border-white/10">
          <h2 className="text-2xl font-semibold">Related YouTube Video</h2>
          <div className="mt-4 aspect-video overflow-hidden rounded-md bg-black">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${relatedVideo.youtubeId}`}
              title={relatedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <Link className="mt-4 inline-flex text-sm font-medium underline" href={`/videos#${relatedVideo.slug}`}>
            View video details
          </Link>
        </section>
      ) : null}
    </article>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <ul className="mt-3 space-y-2 text-foreground/70">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </section>
  );
}
