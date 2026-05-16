"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const navTabs = [
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
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
          <Link
            href="/"
            className="font-orbitron text-2xl font-bold tracking-wider text-white"
          >
            THOBILE
          </Link>

          <div className="-mx-2 flex gap-1 overflow-x-auto px-2 pb-1 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
            {navTabs.map((tab) => {
              const isActive =
                tab.href === "/"
                  ? pathname === "/"
                  : pathname === tab.href || pathname.startsWith(`${tab.href}/`);

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "shrink-0 rounded px-3 py-2 font-orbitron text-[10px] font-bold uppercase tracking-[0.14em] transition",
                    isActive
                      ? "bg-[var(--primary)] text-black"
                      : "text-white/70 hover:bg-white/10 hover:text-[var(--primary)]",
                  ].join(" ")}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

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
