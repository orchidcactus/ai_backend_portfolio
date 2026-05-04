"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/50 bg-white/80 backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/80">
      <Container className="flex h-16 items-center justify-end">
        <nav className="flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          <Link href="/ai-engineer" className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">
            AI Engineer
          </Link>
          <Link href="/automation" className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">
            Automation
          </Link>
        </nav>
      </Container>
    </header>
  );
}
