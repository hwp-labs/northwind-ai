"use client";

import { PropsWithChildren, useState } from "react";
import { Trash2Icon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { useToast } from "@/hooks/use-toast";
import { deleteAction } from "@/lib/supabase/services/base/actions/deleteAction";

interface Props extends PropsWithChildren {
  path: string;
  table: string;
  ids?: number[];
}

export const DeleteMultipleWidget = ({ path, table, ids = [] }: Props) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleDeleteMultiple = async () => {
    if (!ids.length) {
      toast.error("No rows selected");
      return;
    }

    if (confirm("Delete selected?")) {
      setLoading(true);

      const { data, error } = await deleteAction({
        path,
        table,
        id: ids,
      });

      if (error) toast.error(error);
      if (data) toast.success(`${data} rows deleted!`);

      setLoading(false);
    }
  };
  //
  return (
    <Button
      variant={"destructive"}
      size={"icon"}
      onClick={handleDeleteMultiple}
    >
      {loading ? <Spinner /> : <Trash2Icon />}
    </Button>
  );
};
