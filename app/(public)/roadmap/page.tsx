import { roadmap } from "@/data/roadmap";

export default function RoadmapPage() {
  const totalTopics = roadmap.reduce(
    (areaTotal, area) =>
      areaTotal +
      area.topics.reduce(
        (topicTotal, topic) => topicTotal + topic.items.length,
        0,
      ),
    0,
  );
  const completedTopics = roadmap.reduce(
    (areaTotal, area) =>
      areaTotal +
      area.topics.reduce(
        (topicTotal, topic) =>
          topicTotal + topic.items.filter((item) => item.completed).length,
        0,
      ),
    0,
  );

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100 via-sky-50 to-amber-50 px-8 py-12">
        <CloudBlob className="absolute -right-10 -top-5 w-80 text-amber-600 opacity-20" />
        <CloudBlob className="absolute -bottom-4 -left-14 w-64 text-sky-500 opacity-10" />
        <CloudBlob className="absolute left-[30%] top-10 w-48 text-sky-400 opacity-10" />

        <div className="relative">
          <p className="mb-4 flex items-center gap-2 font-[family-name:var(--font-heading)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
            <span className="inline-block h-px w-6 bg-[var(--primary)]" />
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--primary)]" />
            Cloud Learning Roadmap
          </p>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-foreground">
            Cloud <span className="text-[var(--primary)]">Roadmap</span>
            <br />& Progress
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
            A flexible set of cloud learning areas, from Linux foundations to
            cloud security, with each topic tracked as complete or still in
            progress.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-8">
            <Stat value={roadmap.length} label="Areas" />
            <div className="h-9 w-px bg-[var(--primary)]/20" />
            <Stat value={totalTopics} label="Topics" />
            <div className="h-9 w-px bg-[var(--primary)]/20" />
            <Stat value={completedTopics} label="Completed" />
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {roadmap.map((area) => {
          const areaItems = area.topics.flatMap((topic) => topic.items);
          const areaCompleted = areaItems.filter((item) => item.completed).length;

          return (
            <section
              key={area.id}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative overflow-hidden bg-gradient-to-r from-sky-100 to-sky-50 px-5 py-4">
                <span className="pointer-events-none absolute -bottom-5 -right-3 h-10 w-20 rounded-full bg-white/60" />
                <span className="pointer-events-none absolute -bottom-3 right-5 h-7 w-12 rounded-full bg-white/40" />

                <p className="font-[family-name:var(--font-heading)] text-[9px] uppercase tracking-wide text-black/30">
                  {areaCompleted}/{areaItems.length} complete
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-heading)] text-lg font-semibold leading-snug text-foreground">
                  {area.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {area.description}
                </p>
              </div>

              <div className="space-y-5 px-5 py-5">
                {area.topics.map((topic) => (
                  <div key={topic.title}>
                    <h3 className="font-[family-name:var(--font-heading)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--primary)]">
                      {topic.title}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {topic.items.map((item) => (
                        <li
                          key={item.title}
                          className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-muted)]"
                        >
                          <span
                            aria-hidden="true"
                            className={[
                              "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border",
                              item.completed
                                ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                                : "border-black/20 bg-transparent dark:border-white/20",
                            ].join(" ")}
                          >
                            {item.completed ? (
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="m5 12 4 4L19 6"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                />
                              </svg>
                            ) : null}
                          </span>
                          <span>{item.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
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
