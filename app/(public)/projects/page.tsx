import Link from "next/link";
import { projects } from "../content";

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Cloud Projects</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="rounded-lg border border-black/10 p-5 dark:border-white/10">
            <p className="text-sm text-foreground/60">{project.status} · {project.difficulty}</p>
            <h2 className="mt-3 text-xl font-semibold">{project.title}</h2>
            <p className="mt-3 text-foreground/70">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span key={service} className="rounded-md bg-foreground/[0.06] px-3 py-1 text-sm">
                  {service}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
              <Link className="underline" href={`/projects/${project.slug}`}>
                View Project
              </Link>
              {project.githubUrl ? <a className="underline" href={project.githubUrl}>GitHub</a> : null}
              {project.youtubeUrl ? <a className="underline" href={project.youtubeUrl}>YouTube Demo</a> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
