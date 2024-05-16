"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink() {
  const pathname = usePathname();

  return (
    <div>
      <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
        Home
      </Link>

      <Link
        className={`link ${pathname === "/impreessum" ? "active" : ""}`}
        href="/impreessum"
      >
        Impreessum
      </Link>
    </div>
  );
}
