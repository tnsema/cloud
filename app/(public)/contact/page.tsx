export default function ContactPage() {
  const email = "thobilesema@gmail.com";
  const phone = "0838133619";

  return (
    <section className="mx-auto flex min-h-[calc(100vh-160px)] w-full max-w-4xl items-center px-6 py-12">
      <div className="w-full rounded-lg border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
        <p className="font-orbitron text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
          Contact
        </p>

        <h1 className="mt-4 font-orbitron text-4xl font-bold leading-tight">
          Let&apos;s Connect
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
          This is the contact space for project questions, cloud learning
          conversations, and collaboration opportunities.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${email}`}
            className="rounded-lg border border-black/10 bg-[var(--primary)]/[0.07] p-5 transition hover:border-[var(--primary)]/40 dark:border-white/10"
          >
            <span className="font-orbitron text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Email
            </span>
            <span className="mt-2 block text-lg font-semibold">{email}</span>
          </a>

          <a
            href={`tel:${phone}`}
            className="rounded-lg border border-black/10 bg-[var(--primary)]/[0.07] p-5 transition hover:border-[var(--primary)]/40 dark:border-white/10"
          >
            <span className="font-orbitron text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Phone
            </span>
            <span className="mt-2 block text-lg font-semibold">{phone}</span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/CV-Thobile-Sema.pdf"
            download
            className="action-link-primary"
          >
            Download CV
          </a>
          <a href="/projects" className="action-link-secondary">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
