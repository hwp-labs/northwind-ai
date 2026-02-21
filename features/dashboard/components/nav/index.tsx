"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
//
import { DASHBOARD_MENU } from "@/constants/MENU";
import { MenuItem } from "@/types";
import { PATH, PROTECTED_PATH } from "@/constants/PATH";
//
import { useNav } from "./hook";

export const Nav = () => {
  const { totaled } = useNav();
  //
  return (
    <nav className="flex-center-center hidden gap-8 text-sm md:flex">
      {DASHBOARD_MENU.map((item, i) => {
        const props = item as MenuItem;

        if (item.path === PROTECTED_PATH.visitors)
          props.badgeValue = totaled.visitors;

        if (item.path === PROTECTED_PATH.contacts)
          props.badgeValue = totaled.contacts;

        if (item.path === PROTECTED_PATH.industries)
          props.badgeValue = totaled.industries;

        return <NavItem key={i} {...props} />;
      })}
    </nav>
  );
};

const NavItem = ({ Icon, ...item }: MenuItem) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={clsx(
        "text-muted-foreground flex-row-cs gap-2.5 hover:text-white",
        pathname.startsWith(item.path) && "text-white",
      )}
    >
      {Icon ? <Icon size={18} /> : item.label}
      {item.badgeValue ? ` (${item.badgeValue})` : null}
    </Link>
  );
};
