import Link from "next/link";
import { projects } from "@/data/projects";
import { learningLogs, videos } from "./content";

export default function Page() {
  const focus = [
    "AWS core services",
    "Linux for cloud workloads",
    "Cloud networking",
    "Cloud security labs",
  ];
  const latestLog = learningLogs[0];
  const latestProject = projects[0];
  const latestVideo = videos[0];

  return (
    <main>
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/heroVid.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Base overlays */}
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-emerald-900/20 mix-blend-screen" />

        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.9)_100%)]" />

        {/* Subtle scanline + noise */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay hero-grain" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.06)_50%,transparent_100%)] animate-scan" />

        {/* Soft glow blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#F3D36A]/12 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 rounded-full bg-white p-1 shadow-2xl">
            <div
              aria-label="Thobile Sema"
              className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#F3D36A] to-[#b58b33] font-orbitron text-3xl font-bold text-black"
            >
              T
            </div>
          </div>

          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Cloud Engineering Journal
          </p>

          <h1 className="mt-4 font-orbitron text-5xl font-extrabold tracking-wide text-[#F3D36A] drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)] sm:text-6xl md:text-7xl">
            Thobile Sema
          </h1>

          <p className="mt-4 font-orbitron text-xl tracking-wide text-[#F3D36A]/90 sm:text-2xl">
            Software development → cloud engineering → cloud security
          </p>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            Documenting my journey from software development into cloud
            engineering and cloud security. This site collects AWS labs, Linux
            notes, networking practice, cloud projects, and the lessons learned
            while building real infrastructure.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {focus.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/learning"
              className="group rounded-full bg-[#F3D36A] px-10 py-4 font-orbitron text-sm font-bold text-black shadow-[0_20px_60px_rgba(0,0,0,0.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_30px_80px_rgba(0,0,0,0.65)]"
            >
              <span className="inline-flex items-center gap-2">
                View Learning Logs
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-orbitron text-sm font-bold text-white/90 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_18px_50px_rgba(0,0,0,0.5)]"
            >
              View Projects
            </Link>

            <Link
              href="/roadmap"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-orbitron text-sm font-bold text-white/90 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_18px_50px_rgba(0,0,0,0.5)]"
            >
              Roadmap
            </Link>

            <Link
              href="/videos"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-orbitron text-sm font-bold text-white/90 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_18px_50px_rgba(0,0,0,0.5)]"
            >
              Watch Videos
            </Link>
          </div>

          <div className="mt-10 grid w-full max-w-5xl gap-4 text-left md:grid-cols-3">
            <Link
              href={`/learning/${latestLog.slug}`}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <p className="font-orbitron text-xs tracking-[0.25em] text-[#F3D36A]">
                LATEST LOG
              </p>
              <h3 className="mt-2 font-orbitron text-lg font-bold text-white">
                {latestLog.title}
              </h3>
              <p className="mt-2 text-sm text-white/75">{latestLog.summary}</p>
            </Link>

            <Link
              href={`/projects/${latestProject.slug}`}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <p className="font-orbitron text-xs tracking-[0.25em] text-[#F3D36A]">
                CLOUD PROJECT
              </p>
              <h3 className="mt-2 font-orbitron text-lg font-bold text-white">
                {latestProject.title}
              </h3>
                <p className="mt-2 text-sm text-white/75">
                {latestProject.shortDescription}
              </p>
            </Link>

            <Link
              href="/videos"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
            <p className="font-orbitron text-xs tracking-[0.25em] text-[#F3D36A]">
                LATEST VIDEO
            </p>
            <h3 className="mt-2 font-orbitron text-lg font-bold text-white">
                {latestVideo.title}
            </h3>
            <p className="mt-2 text-sm text-white/75">
                {latestVideo.description}
            </p>
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/55">
            <span>Explore</span>
            <span className="inline-block h-6 w-[2px] bg-white/20 relative overflow-hidden rounded-full">
              <span className="absolute top-0 left-0 h-3 w-full bg-[#F3D36A] animate-scroll-line" />
            </span>
          </div>
        </div>
      </section>

      {/* Minimal CSS helpers (only if you don’t already have them) */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-20%); }
          100% { transform: translateY(120%); }
        }
        .animate-scan { animation: scan 6s linear infinite; }

        @keyframes scrollLine {
          0% { transform: translateY(-100%); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(250%); opacity: 0; }
        }
        .animate-scroll-line { animation: scrollLine 1.6s ease-in-out infinite; }
      `}</style>
    </main>
  );
}
