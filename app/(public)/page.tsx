import Link from "next/link";
import { learningLogs, projects, videos } from "./content";

const focusAreas = ["AWS", "Linux", "Networking", "Cloud Security"];

export default function Home() {
  const latestLogs = learningLogs.slice(0, 3);
  const latestProjects = projects.slice(0, 3);
  const latestVideo = videos[0];

  return (
    <div>
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-foreground/60">
              Cloud engineering journal
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Building cloud skills in public, one lab at a time.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/70">
              Documenting my journey from software development into cloud
              engineering and cloud security.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background" href="/learning">
                View Learning Logs
              </Link>
              <Link className="rounded-md border border-black/15 px-5 py-3 text-sm font-medium dark:border-white/20" href="/projects">
                View Projects
              </Link>
              <Link className="rounded-md border border-black/15 px-5 py-3 text-sm font-medium dark:border-white/20" href="/videos">
                Watch Videos
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-black/10 p-6 dark:border-white/10">
            <h2 className="text-lg font-semibold">Current focus</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {focusAreas.map((area) => (
                <div key={area} className="rounded-md bg-foreground/[0.04] p-4">
                  <p className="font-medium">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 lg:grid-cols-3">
        <div>
          <h2 className="text-2xl font-semibold">Latest learning logs</h2>
          <div className="mt-5 space-y-4">
            {latestLogs.map((log) => (
              <Link key={log.slug} href={`/learning/${log.slug}`} className="block rounded-lg border border-black/10 p-4 hover:bg-foreground/[0.03] dark:border-white/10">
                <p className="text-sm text-foreground/60">{log.date} · {log.category}</p>
                <h3 className="mt-2 font-semibold">{log.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{log.summary}</p>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Latest projects</h2>
          <div className="mt-5 space-y-4">
            {latestProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="block rounded-lg border border-black/10 p-4 hover:bg-foreground/[0.03] dark:border-white/10">
                <p className="text-sm text-foreground/60">{project.status} · {project.difficulty}</p>
                <h3 className="mt-2 font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{project.description}</p>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Latest YouTube video</h2>
          <div className="mt-5 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="aspect-video overflow-hidden rounded-md bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${latestVideo.youtubeId}`}
                title={latestVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h3 className="mt-4 font-semibold">{latestVideo.title}</h3>
            <p className="mt-2 text-sm text-foreground/70">{latestVideo.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
