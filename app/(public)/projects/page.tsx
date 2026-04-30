"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";

type FilterStatus = "all" | "Completed" | "In Progress" | "Planned";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterStatus>("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);

  const totalComplete = projects.filter((p) => p.status === "Completed").length;
  const allServices = new Set(
    projects.flatMap((p) => cleanStrings(p.cloudServices))
  );

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      {/* ── Sky hero header ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100 via-sky-50 to-amber-50 px-8 py-12">
        {/* Cloud decorations */}
        <CloudBlob className="absolute -right-10 -top-5 w-80 text-amber-600 opacity-20" />
        <CloudBlob className="absolute -bottom-4 -left-14 w-64 text-sky-500 opacity-10" />
        <CloudBlob className="absolute left-[30%] top-10 w-48 text-sky-400 opacity-10" />

        {/* Eyebrow */}
        <p className="mb-4 flex items-center gap-2 font-[family-name:var(--font-heading)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
          <span className="inline-block h-px w-6 bg-[var(--primary)]" />
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--primary)]" />
          Cloud Infrastructure Journal
        </p>

        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-foreground">
          Cloud <span className="text-[var(--primary)]">Projects</span>
          <br />& Deployments
        </h1>

        <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
          An active log of cloud builds, architecture labs, and hosted
          apps—tracking services, implementation notes, challenges, and live
          deployments.
        </p>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap items-center gap-8">
          <Stat value={projects.length} label="Projects" />
          <div className="h-9 w-px bg-[var(--primary)]/20" />
          <Stat value={totalComplete} label="Complete" />
          <div className="h-9 w-px bg-[var(--primary)]/20" />
          <Stat value={allServices.size} label="Cloud Services" />
        </div>
      </div>

      {/* ── Filter bar ── */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="mr-1 font-[family-name:var(--font-heading)] text-[9px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
          Filter
        </span>
        {(["all", "Completed", "In Progress", "Planned"] as FilterStatus[]).map(
          (f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1 font-[family-name:var(--font-heading)] text-[9px] uppercase tracking-[0.1em] transition-all ${
                filter === f
                  ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                  : "border-black/10 text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] dark:border-white/10"
              }`}
            >
              {f === "all" ? "All" : f}
            </button>
          )
        )}
        <span className="ml-auto rounded-full bg-[var(--primary)]/10 px-3 py-1 font-[family-name:var(--font-heading)] text-[9px] text-[var(--primary)]">
          {filtered.length} shown
        </span>
      </div>

      {/* ── Cards grid ── */}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {filtered.length === 0 ? (
          <p className="col-span-full py-16 text-center font-[family-name:var(--font-heading)] text-xs uppercase tracking-widest text-[var(--text-muted)]">
            No projects match this filter
          </p>
        ) : (
          filtered.map((project) => {
            const services = cleanStrings(project.cloudServices);
            const tags = cleanStrings(project.tags);

            return (
              <article
                key={project.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                {/* Altitude strip */}
                <div className="relative overflow-hidden bg-gradient-to-r from-sky-100 to-sky-50 px-5 py-4">
                  <span className="pointer-events-none absolute -bottom-5 -right-3 h-10 w-20 rounded-full bg-white/60" />
                  <span className="pointer-events-none absolute -bottom-3 right-5 h-7 w-12 rounded-full bg-white/40" />

                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded px-2 py-0.5 font-[family-name:var(--font-heading)] text-[8px] font-semibold uppercase tracking-widest ${statusClass(project.status)}`}
                    >
                      {project.status}
                    </span>
                    <span className="ml-auto font-[family-name:var(--font-heading)] text-[9px] uppercase tracking-wide text-black/30 dark:text-white/30">
                      {project.difficulty}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                  <h2 className="font-[family-name:var(--font-heading)] text-sm font-semibold leading-snug text-foreground">
                    {project.title}
                  </h2>

                  {hasText(project.shortDescription) && (
                    <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                      {project.shortDescription}
                    </p>
                  )}

                  {services.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {services.map((s) => (
                        <span
                          key={s}
                          className="rounded border border-[var(--primary)]/20 bg-[var(--primary)]/[0.07] px-2 py-0.5 font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-wide text-[#7a5c1c]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-black/10 px-2.5 py-0.5 text-xs text-[var(--text-muted)] dark:border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Link strip */}
                <div className="flex divide-x divide-black/[0.07] border-t border-black/[0.07] dark:divide-white/10 dark:border-white/10">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 py-2.5 text-center font-[family-name:var(--font-heading)] text-[9px] font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-[var(--primary)]/[0.06]"
                  >
                    View Project
                  </Link>
                  {hasText(project.githubUrl) && (
                    <a
                      href={project.githubUrl}
                      className="flex-1 py-2.5 text-center font-[family-name:var(--font-heading)] text-[9px] font-semibold uppercase tracking-widest text-[var(--primary)] transition-colors hover:bg-[var(--primary)]/[0.06]"
                    >
                      GitHub
                    </a>
                  )}
                  {hasText(project.youtubePlaylistUrl) && (
                    <a
                      href={project.youtubePlaylistUrl}
                      className="flex-1 py-2.5 text-center font-[family-name:var(--font-heading)] text-[9px] font-semibold uppercase tracking-widest text-[var(--primary)] transition-colors hover:bg-[var(--primary)]/[0.06]"
                    >
                      YouTube
                    </a>
                  )}
                  {hasText(project.liveDemoUrl) && (
                    <a
                      href={project.liveDemoUrl}
                      className="flex-1 py-2.5 text-center font-[family-name:var(--font-heading)] text-[9px] font-semibold uppercase tracking-widest text-[var(--primary)] transition-colors hover:bg-[var(--primary)]/[0.06]"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function hasText(value: string | undefined) {
  return Boolean(value?.trim());
}

function cleanStrings(items: string[]) {
  return items.filter((item) => hasText(item));
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

// ── Cloud SVG blob ─────────────────────────────────────────────────────────────

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
