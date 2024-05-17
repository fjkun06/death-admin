"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ route, label }: { route?: string; label: string }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`nav__link ${
        pathname === (route ?? "/") ? "nav__link--active" : ""
      }`}
      href={route ?? "/"}
    >
      {label}
    </Link>
  );
};

export default NavLink;
