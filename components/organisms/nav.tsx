"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
//
import { MENU } from "@/constants/MENU";

export const Nav = () => {
  const pathname = usePathname();
  //
  return (
    <nav className="flex-center-center hidden gap-8 md:flex text-sm">
      {MENU.map((item, i) => {
        const active =
          item.path === "/"
            ? pathname === item.path
            : pathname.startsWith(item.path);
        //
        return (
          <Link
            key={i}
            href={item.path}
            className={clsx(
              "text-muted-foreground hover:text-white",
              active && "text-white",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
