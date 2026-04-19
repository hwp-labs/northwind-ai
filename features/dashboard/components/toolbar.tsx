import { PropsWithChildren } from "react";
import Link from "next/link";
// 
import { PaginationUI } from "@/components/atoms/tables/pagination-ui";

interface Props extends PropsWithChildren {
  path: string;
  total?: number;
  selected?: number;
}

export const Toolbar = ({ children, path, total = 0, selected = 0 }: Props) => {
  return (
    <section className="flex-row-cb gap-2.5">
      <PaginationUI.Container>
        {/* <PaginationUI.SizeSelector /> */}
        <PaginationUI.SelectedRowsCaption selected={selected} total={total} />
        {/* <PaginationPageSelector /> */}
      </PaginationUI.Container>
      <div className="flex-row-cs gap-2.5">
        {[
          { label: "All", path },
          { label: "Filtered", path: "?filtered=true" },
        ].map((item, i) => (
          <Link
            key={i}
            href={item.path}
            className="bg-secondary text-secondary-foreground rounded-md px-3 py-2 text-xs font-medium shadow"
          >
            {item.label}
          </Link>
        ))}
        {children}
      </div>
    </section>
  );
};
