"use client";

import { useMemo, useState } from "react";
import { roleCategories, rolePriorities, roles } from "@/data/roles";

type CategoryFilter = "all" | (typeof roleCategories)[number];
type PriorityFilter = "all" | (typeof rolePriorities)[number];

export default function RolesPage() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [priority, setPriority] = useState<PriorityFilter>("all");

  const filtered = useMemo(
    () =>
      roles.filter((role) => {
        const matchesCategory = category === "all" || role.category === category;
        const matchesPriority = priority === "all" || role.priority === priority;

        return matchesCategory && matchesPriority;
      }),
    [category, priority],
  );

  const highPriorityCount = roles.filter(
    (role) => role.priority === "High" || role.priority === "Very High",
  ).length;
  const entryLevelCount = roles.filter((role) =>
    role.level.toLowerCase().includes("entry"),
  ).length;

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
            Cloud Career Roles
          </p>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-foreground">
            Roles <span className="text-[var(--primary)]">to Target</span>
            <br />on the Journey
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
            A practical list of cloud, infrastructure, DevOps, support, and
            security roles to apply for while moving toward cloud security
            engineering.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-8">
            <Stat value={roles.length} label="Roles" />
            <div className="h-9 w-px bg-[var(--primary)]/20" />
            <Stat value={highPriorityCount} label="High Priority" />
            <div className="h-9 w-px bg-[var(--primary)]/20" />
            <Stat value={entryLevelCount} label="Entry Level" />
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="mr-1 font-[family-name:var(--font-heading)] text-[9px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
          Filter
        </span>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value as CategoryFilter)}
          className="rounded-full border border-black/10 bg-transparent px-4 py-1 font-[family-name:var(--font-heading)] text-[9px] uppercase tracking-[0.1em] text-[var(--text-muted)] outline-none transition-all hover:border-[var(--primary)] dark:border-white/10"
        >
          <option value="all">All Categories</option>
          {roleCategories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={priority}
          onChange={(event) => setPriority(event.target.value as PriorityFilter)}
          className="rounded-full border border-black/10 bg-transparent px-4 py-1 font-[family-name:var(--font-heading)] text-[9px] uppercase tracking-[0.1em] text-[var(--text-muted)] outline-none transition-all hover:border-[var(--primary)] dark:border-white/10"
        >
          <option value="all">All Priorities</option>
          {rolePriorities.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <span className="ml-auto rounded-full bg-[var(--primary)]/10 px-3 py-1 font-[family-name:var(--font-heading)] text-[9px] text-[var(--primary)]">
          {filtered.length} shown
        </span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {filtered.length === 0 ? (
          <p className="col-span-full py-16 text-center font-[family-name:var(--font-heading)] text-xs uppercase tracking-widest text-[var(--text-muted)]">
            No roles match this filter
          </p>
        ) : (
          filtered.map((role) => (
            <article
              key={role.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative overflow-hidden bg-gradient-to-r from-sky-100 to-sky-50 px-5 py-4">
                <span className="pointer-events-none absolute -bottom-5 -right-3 h-10 w-20 rounded-full bg-white/60" />
                <span className="pointer-events-none absolute -bottom-3 right-5 h-7 w-12 rounded-full bg-white/40" />

                <div className="flex items-center gap-2">
                  <span
                    className={`rounded px-2 py-0.5 font-[family-name:var(--font-heading)] text-[8px] font-semibold uppercase tracking-widest ${priorityClass(role.priority)}`}
                  >
                    {role.priority}
                  </span>
                  <span className="ml-auto rounded bg-white/70 px-2 py-0.5 font-[family-name:var(--font-heading)] text-[8px] font-semibold uppercase tracking-widest text-black/40">
                    {role.level}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 px-5 py-5">
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-[9px] uppercase tracking-[0.16em] text-[var(--primary)]">
                    {role.category}
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-heading)] text-lg font-semibold leading-snug text-foreground">
                    {role.title}
                  </h2>
                </div>

                {hasText(role.description) ? (
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                    {role.description}
                  </p>
                ) : null}

                {hasText(role.whyTarget) ? (
                  <p className="rounded-xl border border-[var(--primary)]/15 bg-[var(--primary)]/[0.05] p-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    <span className="font-semibold text-foreground">
                      Why target:{" "}
                    </span>
                    {role.whyTarget}
                  </p>
                ) : null}

                {cleanStrings(role.skills).length > 0 ? (
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--primary)]">
                      Skills
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {cleanStrings(role.skills).map((skill) => (
                        <span
                          key={skill}
                          className="rounded border border-[var(--primary)]/20 bg-[var(--primary)]/[0.07] px-2 py-0.5 font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-wide text-[#7a5c1c]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {cleanStrings(role.responsibilities).length > 0 ? (
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--primary)]">
                      Responsibilities
                    </h3>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                      {cleanStrings(role.responsibilities).map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </article>
          ))
        )}
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

function priorityClass(priority: string) {
  if (priority === "Very High") return "bg-emerald-100 text-emerald-700";
  if (priority === "High") return "bg-sky-100 text-sky-700";
  if (priority === "Future Goal") return "bg-violet-100 text-violet-700";
  if (priority === "Backup") return "bg-slate-100 text-slate-500";
  return "bg-amber-100 text-amber-700";
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
