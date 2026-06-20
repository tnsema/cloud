"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";

function projectDate(project: (typeof projects)[number]) {
  const date = project.dateCompleted || project.dateStarted;
  return date ? new Date(date).getTime() : 0;
}

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const latestProject = [...projects].sort(
    (a, b) => projectDate(b) - projectDate(a),
  )[0];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const drawingCanvas: HTMLCanvasElement = canvas;
    const context: CanvasRenderingContext2D = ctx;

    let width = 0;
    let height = 0;
    let frame = 0;
    let animationId = 0;
    let particles: Particle[] = [];

    class Particle {
      x = 0;
      y = 0;
      vx = 0;
      vy = 0;
      radius = 0;
      alpha = 0;

      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 12;
        this.vx = (Math.random() - 0.5) * 0.22;
        this.vy = -Math.random() * 0.28 - 0.08;
        this.radius = Math.random() * 1.4 + 0.45;
        this.alpha = Math.random() * 0.28 + 0.08;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.y < -12) this.reset();
      }

      draw() {
        context.save();
        context.globalAlpha = this.alpha;
        context.fillStyle = "#f3d36a";
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    function resize() {
      const scale = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      drawingCanvas.width = width * scale;
      drawingCanvas.height = height * scale;
      drawingCanvas.style.width = `${width}px`;
      drawingCanvas.style.height = `${height}px`;
      context.setTransform(scale, 0, 0, scale, 0, 0);
      particles = Array.from({ length: width < 768 ? 42 : 70 }, () => new Particle());
    }

    function drawGrid() {
      context.save();
      context.strokeStyle = "rgba(243, 211, 106, 0.035)";
      context.lineWidth = 1;

      for (let x = 0; x < width; x += 72) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let y = 0; y < height; y += 72) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      context.restore();
    }

    function drawGlow() {
      const goldGlow = context.createRadialGradient(
        width * 0.72,
        height * 0.36,
        0,
        width * 0.72,
        height * 0.36,
        420,
      );
      goldGlow.addColorStop(0, "rgba(243, 211, 106, 0.12)");
      goldGlow.addColorStop(1, "transparent");
      context.fillStyle = goldGlow;
      context.fillRect(0, 0, width, height);

      const softGlow = context.createRadialGradient(
        width * 0.18,
        height * 0.72,
        0,
        width * 0.18,
        height * 0.72,
        320,
      );
      softGlow.addColorStop(0, "rgba(181, 139, 51, 0.12)");
      softGlow.addColorStop(1, "transparent");
      context.fillStyle = softGlow;
      context.fillRect(0, 0, width, height);
    }

    function drawLines() {
      context.save();
      context.strokeStyle = "rgba(243, 211, 106, 0.08)";
      context.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 86) {
            context.globalAlpha = (1 - distance / 86) * 0.16;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
          }
        }
      }

      context.restore();
    }

    function loop() {
      context.clearRect(0, 0, width, height);
      drawGrid();
      drawGlow();

      if (frame % 2 === 0) particles.forEach((particle) => particle.update());
      particles.forEach((particle) => particle.draw());
      if (frame % 3 === 0) drawLines();

      frame++;
      animationId = requestAnimationFrame(loop);
    }

    resize();
    loop();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F6F1E6] text-[#111111]">
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" />

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-64px)] w-full max-w-6xl items-center gap-12 px-6 py-12 md:grid-cols-[360px_1fr] md:px-8">
        <div className="flex justify-center">
          <div className="hero-photo-wrap">
            <div className="hero-orbit hero-orbit-one">
              <span />
            </div>
            <div className="hero-orbit hero-orbit-two">
              <span />
            </div>

            <div className="hero-ring">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 280 280"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="140"
                  cy="140"
                  r="135"
                  stroke="url(#homeRingGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="8 7"
                  strokeLinecap="round"
                />
                <circle cx="140" cy="5" r="4" fill="#f3d36a" />
                <defs>
                  <linearGradient
                    id="homeRingGradient"
                    x1="0"
                    y1="0"
                    x2="280"
                    y2="280"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#f3d36a" />
                    <stop offset="0.55" stopColor="var(--primary)" />
                    <stop offset="1" stopColor="#f3d36a" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="hero-photo">
                <Image
                  src="/profile.jpg"
                  alt="Thobile Sema"
                  width={240}
                  height={240}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="animate-home-rise max-w-2xl">
          <p className="home-eyebrow">Cloud Engineering Journal</p>

          <h1 className="mt-4 font-orbitron text-4xl font-black leading-tight text-[#111111] sm:text-5xl">
            Thobile <span className="text-[color:var(--primary)]">Sema</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-black/65 sm:text-lg">
            I am learning cloud engineering and cloud security by building AWS
            projects, writing short learning notes, and documenting what I test.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Software Development", "Linux", "Networking", "AWS", "Cloud Computing", "Cyber Security", "Cloud Security"].map((tag) => (
              <span key={tag} className="home-badge">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/learning" className="home-btn-primary">
              Learning
            </Link>
            <Link href="/projects" className="home-btn-secondary">
              Projects
            </Link>
            <Link
              href="/videos#cloud-engineering-journey-intro"
              className="home-btn-secondary"
            >
              Watch Intro Video
            </Link>
          </div>

          {latestProject && (
            <section className="home-project-card mt-9 p-6">
              <p className="home-project-label">Latest Project</p>

              <h2 className="mt-3 font-orbitron text-lg font-bold leading-snug text-[#111111]">
                {latestProject.title}
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-black/60">
                {latestProject.shortDescription}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="home-meta">{latestProject.status}</span>
                <span className="home-meta">{latestProject.difficulty}</span>
              </div>

              <Link
                href={`/projects/${latestProject.slug}`}
                className="mt-5 inline-flex items-center gap-2 font-orbitron text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--primary)] transition hover:gap-3 hover:opacity-80"
              >
                View Project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M7 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </section>
          )}
        </div>
      </section>

      <style>{`
        .hero-photo-wrap {
          position: relative;
          width: 280px;
          height: 280px;
          display: grid;
          place-items: center;
        }

        .hero-ring {
          position: relative;
          width: 280px;
          height: 280px;
          animation: homeSpin 11s linear infinite;
        }

        .hero-photo {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 220px;
          height: 220px;
          overflow: hidden;
          border-radius: 9999px;
          border: 2px solid color-mix(in srgb, var(--primary) 45%, transparent);
          box-shadow:
            0 0 42px rgba(243, 211, 106, 0.16),
            0 0 90px rgba(181, 139, 51, 0.12);
          transform: translate(-50%, -50%);
          animation: homePhotoIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }

        .hero-photo img {
          animation: homeSpinReverse 11s linear infinite;
        }

        .hero-orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 9999px;
          border: 1px dashed rgba(243, 211, 106, 0.18);
        }

        .hero-orbit-one {
          width: 310px;
          height: 310px;
          margin: -155px 0 0 -155px;
          animation: homeSpinReverse 16s linear infinite;
        }

        .hero-orbit-two {
          width: 348px;
          height: 348px;
          margin: -174px 0 0 -174px;
          border-color: rgba(0, 0, 0, 0.1);
          animation: homeSpin 22s linear infinite;
        }

        .hero-orbit span {
          position: absolute;
          left: 50%;
          top: -3px;
          width: 6px;
          height: 6px;
          margin-left: -3px;
          border-radius: 9999px;
          background: #f3d36a;
          box-shadow: 0 0 10px #f3d36a;
        }

        .hero-orbit-two span {
          background: var(--primary);
          box-shadow: 0 0 10px var(--primary);
        }

        .home-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--primary);
        }

        .home-eyebrow::before {
          content: "";
          width: 24px;
          height: 1px;
          background: var(--primary);
        }

        .home-badge,
        .home-meta {
          border: 1px solid color-mix(in srgb, var(--primary) 28%, transparent);
          background: color-mix(in srgb, var(--primary) 10%, transparent);
          color: var(--primary);
          font-family: var(--font-heading);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .home-badge {
          border-radius: 9999px;
          padding: 5px 12px;
        }

        .home-meta {
          border-radius: 3px;
          color: rgba(0, 0, 0, 0.58);
          padding: 4px 10px;
        }

        .home-btn-primary,
        .home-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          border-radius: 4px;
          padding: 0 28px;
          font-family: var(--font-heading);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease,
            color 180ms ease;
        }

        .home-btn-primary {
          background: #f3d36a;
          color: #080808;
          box-shadow: 0 16px 38px rgba(0, 0, 0, 0.16);
        }

        .home-btn-secondary {
          border: 1px solid rgba(0, 0, 0, 0.14);
          color: rgba(0, 0, 0, 0.82);
        }

        .home-btn-primary:hover,
        .home-btn-secondary:hover {
          transform: translateY(-2px);
        }

        .home-btn-primary:hover {
          box-shadow: 0 12px 28px rgba(243, 211, 106, 0.24);
        }

        .home-btn-secondary:hover {
          border-color: color-mix(in srgb, var(--primary) 45%, transparent);
          color: var(--primary);
        }

        .home-project-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.58);
          box-shadow: 0 20px 70px rgba(0, 0, 0, 0.12);
        }

        .home-project-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          opacity: 0.65;
        }

        .home-project-label {
          display: flex;
          align-items: center;
          gap: 9px;
          font-family: var(--font-heading);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--primary);
        }

        .home-project-label::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: var(--primary);
          animation: homePulse 2s ease-in-out infinite;
        }

        .animate-home-rise {
          animation: homeRise 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes homeSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes homeSpinReverse {
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes homePhotoIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.76);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes homeRise {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes homePulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(243, 211, 106, 0.42);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(243, 211, 106, 0);
          }
        }

        @media (max-width: 767px) {
          .hero-photo-wrap {
            width: 230px;
            height: 230px;
          }

          .hero-ring {
            width: 230px;
            height: 230px;
          }

          .hero-photo {
            width: 180px;
            height: 180px;
          }

          .hero-orbit-one {
            width: 250px;
            height: 250px;
            margin: -125px 0 0 -125px;
          }

          .hero-orbit-two {
            width: 280px;
            height: 280px;
            margin: -140px 0 0 -140px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-ring,
          .hero-photo img,
          .hero-orbit,
          .animate-home-rise,
          .home-project-label::before {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
