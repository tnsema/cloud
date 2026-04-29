"use client";

import { useMemo, useState } from "react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const year = useMemo(() => new Date().getFullYear(), []);
  const close = () => setOpen(false);
  const toggle = (key: string) => setActive((p) => (p === key ? null : key));

  const dropdowns = useMemo(
    () => [
      {
        key: "about",
        title: "About Me",
        items: [
          { label: "Overview", href: "/about" },
          { label: "Roadmap", href: "/roadmap" },
        ],
      },
      {
        key: "learning",
        title: "Learning",
        items: [
          { label: "Learning Logs", href: "/learning" },
          { label: "Videos", href: "/videos" },
        ],
      },
      {
        key: "projects",
        title: "Projects",
        items: [
          { label: "Cloud Projects", href: "/projects" },
          { label: "Project Videos", href: "/videos" },
        ],
      },
    ],
    [],
  );

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-black text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-[color:var(--primary)] hover:opacity-90"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
          <h1 className="font-orbitron text-2xl font-bold tracking-wider">
            THOBILE
          </h1>
        </div>
      </nav>

      {/* Left Overlay Menu */}
      <aside
        className={[
          "fixed left-0 top-0 z-50 h-full w-80 bg-black text-white shadow-2xl",
          "transform transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="relative h-full overflow-y-auto p-6">
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 text-[color:var(--primary)] hover:opacity-90"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>

          {/* Profile */}
          <div className="mb-8 mt-8 text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[#b58b33] text-3xl font-bold text-black">
              T
            </div>
            <h3 className="font-orbitron text-xl font-bold">Thobile</h3>
            <p className="text-sm text-[color:var(--primary)]">
              Cloud Engineer in Progress
            </p>
          </div>

          {/* Menu Items */}
          <div className="space-y-4">
            {dropdowns.map((d) => {
              const isOpen = active === d.key;
              return (
                <div key={d.key}>
                  <button
                    type="button"
                    onClick={() => toggle(d.key)}
                    className="flex w-full items-center justify-between rounded-lg bg-gray-900 px-4 py-3 text-left transition-colors hover:bg-gray-800"
                  >
                    <span>{d.title}</span>
                    <ChevronIcon
                      className={[
                        "text-[color:var(--primary)] transition-transform",
                        isOpen ? "rotate-180" : "rotate-0",
                      ].join(" ")}
                    />
                  </button>

                  <div
                    className={[
                      "overflow-hidden pl-4 transition-all duration-300",
                      isOpen ? "max-h-52" : "max-h-0",
                    ].join(" ")}
                  >
                    {d.items.map((it) => (
                      <a
                        key={it.label}
                        href={it.href}
                        onClick={close}
                        className="block px-4 py-2 transition-colors hover:text-[color:var(--primary)]"
                      >
                        {it.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}

            <a
              href="/roadmap"
              onClick={close}
              className="block rounded-lg bg-gray-900 px-4 py-3 transition-colors hover:bg-gray-800"
            >
              Roadmap
            </a>

            <a
              href="/about"
              onClick={close}
              className="block rounded-lg bg-gray-900 px-4 py-3 transition-colors hover:bg-gray-800"
            >
              Contact Me
            </a>
          </div>
        </div>
      </aside>

      {/* Overlay Background */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-black px-6 py-8 text-white md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p className="font-orbitron text-lg">Thobile</p>

          <p className="text-gray-400">
            © {year} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ChevronIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
