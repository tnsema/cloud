import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { defaultVideo } from "../../content";

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

  const services = cleanStrings(project.cloudServices);
  const tools = cleanStrings(project.toolsUsed);
  const requestFlow = cleanStrings(project.architecture.requestFlow);
  const steps = project.implementationSteps.filter(hasObjectData);
  const screenshots = project.screenshots.filter((screenshot) =>
    hasText(screenshot.image),
  );
  const videos = project.videos.filter(
    (video) => hasText(video.embedUrl) || hasText(video.youtubeUrl),
  );
  const challenges = project.challenges.filter(hasObjectData);
  const mistakes = project.mistakes.filter(hasObjectData);
  const security = project.securityConsiderations.filter(hasObjectData);
  const costs = project.costConsiderations.filter(hasObjectData);
  const lessons = cleanStrings(project.lessonsLearned);
  const improvements = cleanStrings(project.futureImprovements);
  const relatedLogs = cleanStrings(project.relatedLearningLogs);

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
            Cloud Project Detail
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded px-2 py-0.5 font-[family-name:var(--font-heading)] text-[8px] font-semibold uppercase tracking-widest ${statusClass(project.status)}`}
            >
              {project.status}
            </span>
            <span className="rounded bg-white/70 px-2 py-0.5 font-[family-name:var(--font-heading)] text-[8px] font-semibold uppercase tracking-widest text-black/40">
              {project.difficulty}
            </span>
            {hasText(project.category) ? (
              <span className="rounded bg-white/70 px-2 py-0.5 font-[family-name:var(--font-heading)] text-[8px] font-semibold uppercase tracking-widest text-black/40">
                {project.category}
              </span>
            ) : null}
          </div>

          <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-foreground">
            {project.title}
          </h1>

          {hasText(project.shortDescription) ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
              {project.shortDescription}
            </p>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-8">
            <Stat value={services.length} label="Cloud Services" />
            <div className="h-9 w-px bg-[var(--primary)]/20" />
            <Stat value={steps.length} label="Steps" />
            <div className="h-9 w-px bg-[var(--primary)]/20" />
            <Stat value={videos.length} label="Videos" />
          </div>

          {(hasText(project.githubUrl) ||
            hasText(project.youtubePlaylistUrl) ||
            hasText(project.liveDemoUrl)) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {hasText(project.githubUrl) ? (
                <a className="action-link-primary" href={project.githubUrl}>
                  GitHub Repo
                </a>
              ) : null}
              {hasText(project.youtubePlaylistUrl) ? (
                <a className="action-link-secondary" href={project.youtubePlaylistUrl}>
                  YouTube Videos
                </a>
              ) : null}
              {hasText(project.liveDemoUrl) ? (
                <a className="action-link-secondary" href={project.liveDemoUrl}>
                  Live Demo
                </a>
              ) : null}
            </div>
          )}
        </div>
      </div>

      <TextSection title="Problem" text={project.overview.problem} />
      <TextSection title="Solution" text={project.overview.solution} />
      <TextSection title="Goal" text={project.overview.goal} />
      <TextSection title="Target Users" text={project.overview.targetUsers} />

      <TagSection title="Cloud Services Used" items={services} />
      <TagSection title="Tools Used" items={tools} />

      {hasText(project.architecture.description) || requestFlow.length > 0 ? (
        <section className="detail-section">
          <h2 className="text-2xl font-semibold">Architecture Overview</h2>
          {hasText(project.architecture.description) ? (
            <p className="mt-3 text-foreground/70">
              {project.architecture.description}
            </p>
          ) : null}
          {requestFlow.length > 0 ? (
            <List items={requestFlow} />
          ) : null}
        </section>
      ) : null}

      {steps.length > 0 ? (
        <section className="detail-section">
          <h2 className="text-2xl font-semibold">Steps Taken</h2>
          <div className="mt-4 space-y-4">
            {steps.map((step) => (
              <div
                key={step.title || step.description}
                className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-white/5"
              >
                {hasText(step.title) ? (
                  <h3 className="font-semibold">{step.title}</h3>
                ) : null}
                {hasText(step.description) ? (
                  <p className="mt-2 text-foreground/70">{step.description}</p>
                ) : null}
                {cleanStrings(step.commands).length > 0 ? (
                  <pre className="mt-3 overflow-x-auto rounded-md bg-black p-3 text-sm text-white">
                    <code>{cleanStrings(step.commands).join("\n")}</code>
                  </pre>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {screenshots.length > 0 ? (
        <section className="detail-section">
          <h2 className="text-2xl font-semibold">Screenshots</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {screenshots.map((screenshot) => (
              <figure
                key={screenshot.image}
                className="rounded-xl border border-black/10 bg-white p-3 dark:border-white/10 dark:bg-white/5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- Screenshots can be local or external URLs from project data. */}
                <img
                  src={screenshot.image}
                  alt={screenshot.title || "Project screenshot"}
                  className="aspect-video w-full rounded-md object-cover"
                />
                {hasText(screenshot.title) ? (
                  <figcaption className="mt-3 font-medium">
                    {screenshot.title}
                  </figcaption>
                ) : null}
                {hasText(screenshot.description) ? (
                  <p className="mt-1 text-sm text-foreground/70">
                    {screenshot.description}
                  </p>
                ) : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {videos.length > 0 ? (
        <section className="detail-section">
          <h2 className="text-2xl font-semibold">Videos</h2>
          <div className="mt-4 space-y-5">
            {videos.map((video) => (
              <div key={video.title || video.embedUrl || video.youtubeUrl}>
                {hasText(video.embedUrl) ? (
                  <div className="aspect-video overflow-hidden rounded-md bg-black">
                    <iframe
                      className="h-full w-full"
                      src={video.embedUrl}
                      title={video.title || "Project video"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : null}
                {hasText(video.title) ? (
                  <h3 className="mt-3 font-semibold">{video.title}</h3>
                ) : null}
                {hasText(video.description) ? (
                  <p className="mt-2 text-foreground/70">{video.description}</p>
                ) : null}
                {!hasText(video.embedUrl) && hasText(video.youtubeUrl) ? (
                  <a className="mt-2 inline-flex underline" href={video.youtubeUrl}>
                    Watch on YouTube
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : videoEmbedSrc(defaultVideo) ? (
        <section className="detail-section">
          <h2 className="text-2xl font-semibold">Videos</h2>
          <div className="mt-4 space-y-5">
            <div>
              <div className="aspect-video overflow-hidden rounded-md bg-black">
                <iframe
                  className="h-full w-full"
                  src={videoEmbedSrc(defaultVideo)}
                  title={defaultVideo.title}
                  allow="encrypted-media; fullscreen"
                  allowFullScreen
                />
              </div>
              <h3 className="mt-3 font-semibold">{defaultVideo.title}</h3>
              <p className="mt-2 text-foreground/70">
                {defaultVideo.description}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {challenges.length > 0 ? (
        <ObjectListSection
          title="Challenges"
          items={challenges}
          fields={[
            ["Issue", "issue"],
            ["Cause", "cause"],
            ["Solution", "solution"],
            ["Lesson Learned", "lessonLearned"],
          ]}
        />
      ) : null}

      {mistakes.length > 0 ? (
        <ObjectListSection
          title="Mistakes"
          items={mistakes}
          fields={[
            ["Mistake", "mistake"],
            ["Fix", "fix"],
            ["Lesson", "lesson"],
          ]}
        />
      ) : null}

      {security.length > 0 ? (
        <ObjectListSection
          title="Security Considerations"
          items={security}
          fields={[
            ["Topic", "topic"],
            ["Explanation", "explanation"],
            ["Improvement", "improvement"],
          ]}
        />
      ) : null}

      {costs.length > 0 ? (
        <ObjectListSection
          title="Cost Considerations"
          items={costs}
          fields={[
            ["Service", "service"],
            ["Estimated Cost", "estimatedCost"],
            ["Notes", "notes"],
          ]}
        />
      ) : null}

      <ListSection title="Lessons Learned" items={lessons} />
      <ListSection title="Future Improvements" items={improvements} />

      {relatedLogs.length > 0 ? (
        <section className="detail-section">
          <h2 className="text-2xl font-semibold">Related Learning Logs</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            {relatedLogs.map((slug) => (
              <a
                key={slug}
                className="rounded-md border border-black/15 px-3 py-2 text-sm font-medium dark:border-white/20"
                href={`/learning/${slug}`}
              >
                {slug}
              </a>
            ))}
          </div>
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

function ObjectListSection<T extends Record<string, string>>({
  title,
  items,
  fields,
}: {
  title: string;
  items: T[];
  fields: [string, keyof T][];
}) {
  return (
    <section className="detail-section">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-4">
        {items.map((item, index) => (
          <div
            key={`${title}-${index}`}
            className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-white/5"
          >
            {fields.map(([label, key]) =>
              hasText(item[key]) ? (
                <p key={String(key)} className="mt-2 first:mt-0">
                  <span className="font-medium">{label}: </span>
                  <span className="text-foreground/70">{item[key]}</span>
                </p>
              ) : null,
            )}
          </div>
        ))}
      </div>
    </section>
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

function hasObjectData(item: Record<string, unknown>) {
  return Object.values(item).some((value) => {
    if (typeof value === "string") {
      return hasText(value);
    }

    if (Array.isArray(value)) {
      return value.some((entry) =>
        typeof entry === "string" ? hasText(entry) : Boolean(entry),
      );
    }

    return Boolean(value);
  });
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
