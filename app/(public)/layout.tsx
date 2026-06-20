"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

const sidebarLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Learning", href: "/learning" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);
  const close = () => setOpen(false);

  return (
    <>
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

          <Link
            href="/"
            className="font-orbitron text-2xl font-bold tracking-wider"
          >
            THOBILE
          </Link>
        </div>
      </nav>

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

          <div className="mb-8 mt-8 text-center">
            <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-[color:var(--primary)]">
              <Image
                src="/profile.jpg"
                alt="Thobile Sema"
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="font-orbitron text-xl font-bold">Thobile</h3>
            <p className="text-sm text-[color:var(--primary)]">
              Cloud Engineer in Progress
            </p>
          </div>

          <div className="space-y-3">
            {sidebarLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "block rounded-lg px-4 py-3 font-orbitron text-sm font-normal uppercase tracking-[0.12em] transition-colors",
                    isActive
                      ? "bg-[color:var(--primary)] text-black"
                      : "bg-gray-900 text-white hover:bg-gray-800 hover:text-[color:var(--primary)]",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </aside>

      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/50"
          onClick={close}
          aria-label="Close menu overlay"
        />
      )}

      <main>{children}</main>

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
