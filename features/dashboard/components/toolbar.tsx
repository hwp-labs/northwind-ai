"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2Icon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { PaginationUI } from "@/components/atoms/tables/pagination-ui";
import { useToast } from "@/hooks/use-toast";
import { deleteAction } from "@/lib/supabase/services/base/actions/deleteAction";
import { PROTECTED_PATH } from "@/constants/PATH";
import { TABLE } from "@/lib/supabase/services/visitors/types";

interface Props {
  selected?: number;
  total?: number;
  filteredIds?: number[];
}

export const Toolbar = ({
  selected = 0,
  total = 0,
  filteredIds = [],
}: Props) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleDeleteMultiple = async () => {
    if (!filteredIds.length) {
      toast.error(`No rows selected`);
      return;
    }

    if (confirm(`Confirm delete selected?`)) {
      setLoading(true);

      const { data, error } = await deleteAction({
        path: PROTECTED_PATH.visitors,
        table: TABLE,
        id: filteredIds,
      });

      if (error) toast.error(error);
      if (data) toast.success(`${data} rows deleted successfully`);

      setLoading(false);
    }
  };
  //
  return (
    <section className="flex-row-cb gap-2.5">
      <PaginationUI.Container>
        {/* <PaginationUI.SizeSelector /> */}
        <PaginationUI.SelectedRowsCaption selected={selected} total={total} />
        {/* <PaginationPageSelector /> */}
      </PaginationUI.Container>
      <div className="flex-row-cs gap-2.5">
        {[
          { label: "All", path: PROTECTED_PATH.visitors },
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
        {/* DELETE */}
        {filteredIds.length ? (
          <Button
            variant={"destructive"}
            size={"icon"}
            onClick={handleDeleteMultiple}
          >
            {loading ? <Spinner /> : <Trash2Icon />}
          </Button>
        ) : null}
      </div>
    </section>
  );
};
