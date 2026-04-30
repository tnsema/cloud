"use client";

import { useMemo, useState } from "react";
import { companies, companyCategories, companyDifficulties } from "@/data/companies";

type CategoryFilter = "all" | (typeof companyCategories)[number];
type DifficultyFilter = "all" | (typeof companyDifficulties)[number];
type FriendlyFilter = "all" | "entry-level";

export default function CompaniesPage() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("all");
  const [friendly, setFriendly] = useState<FriendlyFilter>("all");

  const filtered = useMemo(
    () =>
      companies.filter((company) => {
        const matchesCategory =
          category === "all" || company.category === category;
        const matchesDifficulty =
          difficulty === "all" || company.difficulty === difficulty;
        const matchesFriendly =
          friendly === "all" || company.entryLevelFriendly;

        return matchesCategory && matchesDifficulty && matchesFriendly;
      }),
    [category, difficulty, friendly],
  );

  const remoteCount = companies.filter((company) => company.remote).length;
  const entryLevelCount = companies.filter(
    (company) => company.entryLevelFriendly,
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
            Cloud Career Targets
          </p>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-foreground">
            Companies <span className="text-[var(--primary)]">to Apply</span>
            <br />For
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
            A focused list of companies to target during the cloud engineering
            and cloud security journey, grouped by relevance, difficulty, and
            entry-level friendliness.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-8">
            <Stat value={companies.length} label="Companies" />
            <div className="h-9 w-px bg-[var(--primary)]/20" />
            <Stat value={entryLevelCount} label="Entry Friendly" />
            <div className="h-9 w-px bg-[var(--primary)]/20" />
            <Stat value={remoteCount} label="Remote" />
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
          {companyCategories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={difficulty}
          onChange={(event) =>
            setDifficulty(event.target.value as DifficultyFilter)
          }
          className="rounded-full border border-black/10 bg-transparent px-4 py-1 font-[family-name:var(--font-heading)] text-[9px] uppercase tracking-[0.1em] text-[var(--text-muted)] outline-none transition-all hover:border-[var(--primary)] dark:border-white/10"
        >
          <option value="all">All Difficulty</option>
          {companyDifficulties.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() =>
            setFriendly((current) =>
              current === "entry-level" ? "all" : "entry-level",
            )
          }
          className={`rounded-full border px-4 py-1 font-[family-name:var(--font-heading)] text-[9px] uppercase tracking-[0.1em] transition-all ${
            friendly === "entry-level"
              ? "border-[var(--primary)] bg-[var(--primary)] text-white"
              : "border-black/10 text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] dark:border-white/10"
          }`}
        >
          Entry Level Friendly
        </button>

        <span className="ml-auto rounded-full bg-[var(--primary)]/10 px-3 py-1 font-[family-name:var(--font-heading)] text-[9px] text-[var(--primary)]">
          {filtered.length} shown
        </span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {filtered.length === 0 ? (
          <p className="col-span-full py-16 text-center font-[family-name:var(--font-heading)] text-xs uppercase tracking-widest text-[var(--text-muted)]">
            No companies match this filter
          </p>
        ) : (
          filtered.map((company) => (
            <article
              key={company.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative overflow-hidden bg-gradient-to-r from-sky-100 to-sky-50 px-5 py-4">
                <span className="pointer-events-none absolute -bottom-5 -right-3 h-10 w-20 rounded-full bg-white/60" />
                <span className="pointer-events-none absolute -bottom-3 right-5 h-7 w-12 rounded-full bg-white/40" />

                <div className="flex items-center gap-2">
                  <span
                    className={`rounded px-2 py-0.5 font-[family-name:var(--font-heading)] text-[8px] font-semibold uppercase tracking-widest ${difficultyClass(company.difficulty)}`}
                  >
                    {company.difficulty}
                  </span>
                  {company.entryLevelFriendly ? (
                    <span className="rounded bg-white/70 px-2 py-0.5 font-[family-name:var(--font-heading)] text-[8px] font-semibold uppercase tracking-widest text-emerald-700">
                      Entry Friendly
                    </span>
                  ) : null}
                  {company.remote ? (
                    <span className="ml-auto rounded bg-white/70 px-2 py-0.5 font-[family-name:var(--font-heading)] text-[8px] font-semibold uppercase tracking-widest text-sky-700">
                      Remote
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-[9px] uppercase tracking-[0.16em] text-[var(--primary)]">
                    {company.category}
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-heading)] text-lg font-semibold leading-snug text-foreground">
                    {company.name}
                  </h2>
                </div>

                {hasText(company.description) ? (
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                    {company.description}
                  </p>
                ) : null}

                {hasText(company.whyApply) ? (
                  <p className="rounded-xl border border-[var(--primary)]/15 bg-[var(--primary)]/[0.05] p-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    <span className="font-semibold text-foreground">
                      Why apply:{" "}
                    </span>
                    {company.whyApply}
                  </p>
                ) : null}

                <div className="flex flex-wrap gap-1.5">
                  {cleanStrings(company.technologies).map((technology) => (
                    <span
                      key={technology}
                      className="rounded border border-[var(--primary)]/20 bg-[var(--primary)]/[0.07] px-2 py-0.5 font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-wide text-[#7a5c1c]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <p className="mt-auto text-xs text-[var(--text-muted)]">
                  {company.size} · {company.location}
                </p>
              </div>

              {hasText(company.careersUrl) ? (
                <div className="flex border-t border-black/[0.07] dark:border-white/10">
                  <a
                    href={company.careersUrl}
                    className="flex-1 py-2.5 text-center font-[family-name:var(--font-heading)] text-[9px] font-semibold uppercase tracking-widest text-[var(--primary)] transition-colors hover:bg-[var(--primary)]/[0.06]"
                  >
                    Careers Page
                  </a>
                </div>
              ) : null}
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

function difficultyClass(difficulty: string) {
  if (difficulty === "Easy") return "bg-emerald-100 text-emerald-700";
  if (difficulty === "Medium") return "bg-amber-100 text-amber-700";
  return "bg-rose-100 text-rose-700";
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
