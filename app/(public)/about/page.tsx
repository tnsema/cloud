export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">About</h1>
      <div className="mt-6 space-y-5 text-lg text-foreground/70">
        <p>
          This site documents my move from software development into cloud
          engineering. It is a place to collect learning logs, cloud projects,
          architecture notes, mistakes, demos, and the small decisions that turn
          theory into practical skill.
        </p>
        <p>
          The long-term goal is clear: Cloud Engineer to Cloud Security
          Engineer. That means building strong AWS, Linux, networking,
          deployment, automation, and security foundations before moving into
          deeper monitoring, detection, incident response, and secure cloud
          architecture work.
        </p>
      </div>
    </section>
  );
}
