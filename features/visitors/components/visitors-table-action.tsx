"use client";

import { useState } from "react";
import { TdAction } from "@/components/atoms/tables/td-action";
import { useToast } from "@/hooks/use-toast";
import { deleteAction } from "@/lib/supabase/services/base/actions/deleteAction";
import { PrimaryKeyType } from "@/lib/supabase/services/base/types";
import { TABLE } from "@/lib/supabase/services/visitors/types";
import { PATH, PROTECTED_PATH } from "@/constants/PATH";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { TableCell } from "@/components/shadcn/ui/table";

export const VisitorsTableAction = ({ id }: { id: PrimaryKeyType }) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleAction = async (value: string) => {
    if (value !== "delete") return;

    if (confirm(`Confirm delete?`)) {
      setLoading(true);

      const { data, error } = await deleteAction({
        path: PROTECTED_PATH.industries,
        table: TABLE,
        id,
      });

      if (error) toast.error(error);
      if (data) toast.success(`Row id ${id} deleted successfully`);

      setLoading(false);
    }
  };
  //
  return loading ? (
    <TableCell className="debug_ min-w-[40px]">
      <Spinner />
    </TableCell>
  ) : (
    <TdAction
      onChange={handleAction}
      menu={[
        { label: "Delete", value: "delete" },
        // { label: "Receipt", value: "Receipt", disabled: true },
        // { label: "Edit", value: "Edit" },
        // {
        //   label: "Duplicate",
        //   value: "Duplicate",
        //   separator: true,
        // },
      ]}
    />
  );
};
