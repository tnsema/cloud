import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

function projectDate(project: (typeof projects)[number]) {
  const date = project.dateCompleted || project.dateStarted;
  return date ? new Date(date).getTime() : 0;
}

export default function Page() {
  const latestProject = [...projects].sort(
    (a, b) => projectDate(b) - projectDate(a),
  )[0];

  return (
    <main className="bg-[#f8faf9] text-foreground">
      <section className="mx-auto grid min-h-[calc(100vh-64px)] w-full max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div className="mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm">
            <Image
              src="/b&w.jpg"
              alt="Thobile Sema"
              width={520}
              height={620}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="font-orbitron text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Cloud Engineering Journal
          </p>

          <h1 className="mt-4 font-orbitron text-4xl font-bold leading-tight text-black sm:text-5xl">
            Thobile Sema
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--text-muted)]">
            I am learning cloud engineering and cloud security by building AWS
            projects, writing short learning notes, and documenting what I test.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/learning" className="action-link-primary">
              Learning
            </Link>
            <Link href="/projects" className="action-link-secondary">
              Projects
            </Link>
          </div>

          {latestProject && (
            <section className="mt-10 border-t border-black/10 pt-8">
              <p className="font-orbitron text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Latest Project
              </p>

              <h2 className="mt-3 font-orbitron text-2xl font-bold leading-snug text-black">
                {latestProject.title}
              </h2>

              <p className="mt-3 max-w-xl text-base leading-7 text-[var(--text-muted)]">
                {latestProject.shortDescription}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="rounded border border-black/10 bg-white px-3 py-1 font-orbitron text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                  {latestProject.status}
                </span>
                <span className="rounded border border-black/10 bg-white px-3 py-1 font-orbitron text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                  {latestProject.difficulty}
                </span>
              </div>

              <Link
                href={`/projects/${latestProject.slug}`}
                className="mt-6 inline-flex font-orbitron text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)] transition-opacity hover:opacity-75"
              >
                View Project
              </Link>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
