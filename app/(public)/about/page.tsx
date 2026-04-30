const focusAreas = [
  "AWS",
  "Linux",
  "Networking",
  "Cloud Security",
  "Automation",
  "Monitoring",
];

const journeyCards = [
  {
    title: "Purpose",
    text: "This site documents my move from software development into cloud engineering through learning logs, projects, architecture notes, mistakes, and demos.",
  },
  {
    title: "Current Direction",
    text: "I am building practical foundations in AWS, Linux, networking, deployment, automation, and cloud security by testing small ideas in real labs.",
  },
  {
    title: "Long-Term Goal",
    text: "The path is Cloud Engineer to Cloud Security Engineer: understand how cloud systems are built, then learn how to secure and monitor them properly.",
  },
];

export default function AboutPage() {
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
            About Me
          </p>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-foreground">
            Cloud <span className="text-[var(--primary)]">Engineer</span>
            <br />
            in Progress
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
            I am documenting the journey from software development into cloud
            engineering and cloud security, one lab, service, and lesson at a
            time.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-8">
            <Stat value={focusAreas.length} label="Focus Areas" />
            <div className="h-9 w-px bg-[var(--primary)]/20" />
            <Stat value={3} label="Journey Stages" />
            <div className="h-9 w-px bg-[var(--primary)]/20" />
            <Stat value={1} label="Goal" />
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {journeyCards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-black/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
          >
            <p className="font-[family-name:var(--font-heading)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              {card.title}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              {card.text}
            </p>
          </article>
        ))}
      </div>

      <section className="mt-6 rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold">
          Current Focus
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="rounded border border-[var(--primary)]/20 bg-[var(--primary)]/[0.07] px-2 py-0.5 font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-wide text-[#7a5c1c]"
            >
              {area}
            </span>
          ))}
        </div>
      </section>
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
