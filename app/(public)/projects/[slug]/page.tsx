import { notFound } from "next/navigation";
import { projects, videos } from "../../content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedVideo = project.videoSlug
    ? videos.find((video) => video.slug === project.videoSlug)
    : undefined;

  return (
    <article className="mx-auto w-full max-w-4xl px-6 py-12">
      <p className="text-sm text-foreground/60">{project.status} · {project.difficulty}</p>
      <h1 className="mt-3 text-4xl font-semibold">{project.title}</h1>
      <p className="mt-4 text-lg text-foreground/70">{project.description}</p>

      <TextSection title="Problem" text={project.problem} />
      <TextSection title="Solution" text={project.solution} />
      <TextSection title="Architecture Overview" text={project.architecture} />

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">AWS Services Used</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span key={service} className="rounded-md bg-foreground/[0.06] px-3 py-1 text-sm">
              {service}
            </span>
          ))}
        </div>
      </section>

      <ListSection title="Steps Taken" items={project.steps} />

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Screenshots</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-black/20 text-sm text-foreground/50 dark:border-white/20">
            Screenshot placeholder
          </div>
          <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-black/20 text-sm text-foreground/50 dark:border-white/20">
            Screenshot placeholder
          </div>
        </div>
      </section>

      <ListSection title="Lessons Learned" items={project.lessons} />

      <section className="mt-8 flex flex-wrap gap-4">
        {project.githubUrl ? <a className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background" href={project.githubUrl}>GitHub Repo</a> : null}
        {project.youtubeUrl ? <a className="rounded-md border border-black/15 px-4 py-2 text-sm font-medium dark:border-white/20" href={project.youtubeUrl}>YouTube Demo</a> : null}
      </section>

      {relatedVideo ? (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">YouTube Demo</h2>
          <div className="mt-4 aspect-video overflow-hidden rounded-md bg-black">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${relatedVideo.youtubeId}`}
              title={relatedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      ) : null}
    </article>
  );
}

function TextSection({ title, text }: { title: string; text: string }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-3 text-foreground/70">{text}</p>
    </section>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
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
