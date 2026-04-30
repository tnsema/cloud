import Link from "next/link";
import { projects } from "@/data/projects";
import { learningLogs, videos } from "../(public)/content";
import { requireAdmin } from "../lib/auth";
import { logoutAction } from "./actions";

const dashboardCards = [
  {
    label: "Learning Logs",
    value: learningLogs.length,
    href: "/learning",
  },
  {
    label: "Projects",
    value: projects.length,
    href: "/projects",
  },
  {
    label: "Videos",
    value: videos.length,
    href: "/videos",
  },
];

export default async function AdminPage() {
  await requireAdmin();

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-10 text-white">
      <section className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-orbitron text-xs uppercase tracking-[0.3em] text-[color:var(--primary)]">
              Admin Panel
            </p>
            <h1 className="mt-3 font-orbitron text-4xl font-bold">
              Cloud Journal Dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-white/65">
              Private overview for managing the learning logs, projects, videos,
              and roadmap content on the site.
            </p>
          </div>

          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-bold text-white/85 transition hover:bg-white/10"
            >
              Logout
            </button>
          </form>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {dashboardCards.map((card) => (
            <Link
              key={card.label}
              href={card.href}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <p className="text-sm text-white/55">{card.label}</p>
              <p className="mt-4 font-orbitron text-4xl font-bold text-[color:var(--primary)]">
                {card.value}
              </p>
              <p className="mt-4 text-sm text-white/60">View public page</p>
            </Link>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="font-orbitron text-2xl font-bold">Quick Actions</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/learning"
              className="rounded-lg bg-[color:var(--primary)] px-5 py-3 text-sm font-bold text-black"
            >
              Review Learning Logs
            </Link>
            <Link
              href="/projects"
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-bold text-white/85"
            >
              Review Projects
            </Link>
            <Link
              href="/"
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-bold text-white/85"
            >
              View Site
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
