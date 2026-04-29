import Link from "next/link";

const navItems = [
  { href: "/learning", label: "Learning" },
  { href: "/projects", label: "Projects" },
  { href: "/videos", label: "Videos" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="border-b border-black/10 bg-background/95 dark:border-white/10">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-lg font-semibold">
          Cloud Journey
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/70">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
