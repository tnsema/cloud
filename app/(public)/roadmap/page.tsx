import { roadmap } from "../content";

export default function RoadmapPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Roadmap</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {roadmap.map((group) => (
          <section key={group.title} className="rounded-lg border border-black/10 p-5 dark:border-white/10">
            <h2 className="text-xl font-semibold">{group.title}</h2>
            <ul className="mt-4 space-y-2 text-foreground/70">
              {group.items.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
