import Link from "next/link";
//
import { PaginationUI } from "@/components/atoms/tables/pagination-ui";
import { PROTECTED_PATH } from "@/constants/PATH";

interface Props {
  selected?: number;
  total?: number;
}

export const Toolbar = ({ selected = 0, total = 0 }: Props) => {
  return (
    <section className="flex-row-cb gap-2.5">
      <PaginationUI.Container>
        {/* <PaginationUI.SizeSelector /> */}
        <PaginationUI.SelectedRowsCaption selected={selected} total={total} />
        {/* <PaginationPageSelector /> */}
      </PaginationUI.Container>
      <div className="flex-row-cs gap-2.5">
        {[
          { label: "Reset", path: PROTECTED_PATH.visitors },
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
      </div>
    </section>
  );
};
