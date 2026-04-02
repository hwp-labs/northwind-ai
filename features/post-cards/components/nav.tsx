"use client";

import Link from "next/link";
import { useQueryParams } from "@/hooks/use-query-params";

export const Nav = () => {
  const { get } = useQueryParams();
  const { tabIndex } = get({ tabIndex: 0 });
  //
  return (
    <nav className="flex-row-cs gap-4 text-sm sm:gap-6">
      {["Default", "Monthly", "FAQs", "Podcast", "Blog"].map((item, i) => (
        <Link
          key={i}
          href={`?tabIndex=${i}`}
          className={
            i === Number(tabIndex) ? "text-white" : "text-muted-foreground"
          }
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};
