"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "@/components/main-header/nav-link.module.css";

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname.startsWith(href) ? classes.active : undefined}
    >
      {children}
    </Link>
  );
}
