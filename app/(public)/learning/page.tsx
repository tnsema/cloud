import Link from "next/link";
import { learningLogs } from "../content";

export default function LearningPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Learning Logs</h1>
      <p className="mt-4 max-w-3xl text-foreground/70">
        Short cloud learning posts about AWS services, hosted apps, networking,
        and security basics. Each log captures what I learned, why it matters,
        mistakes I made, and what I built or tested.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {learningLogs.map((log) => (
          <article key={log.slug} className="rounded-lg border border-black/10 p-5 dark:border-white/10">
            <p className="text-sm text-foreground/60">{log.date} · {log.category}</p>
            <h2 className="mt-3 text-xl font-semibold">{log.title}</h2>
            <p className="mt-3 text-foreground/70">{log.summary}</p>
            <Link className="mt-5 inline-flex rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background" href={`/learning/${log.slug}`}>
              Read More
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
