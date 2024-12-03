"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 ">
      <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
        Home
      </Link>

      <Link
        className={`link ${pathname === "/psychologists" ? "active" : ""}`}
        href="/psychologists"
      >
        Psychologists
      </Link>
    </nav>
  );
}
