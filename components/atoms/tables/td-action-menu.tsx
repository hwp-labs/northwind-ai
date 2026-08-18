"use client";

import { Fragment, useState } from "react";
import { MoreVerticalIcon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { TableCell } from "@/components/shadcn/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { OptionItem } from "@/types";
import { PrimaryKeyType } from "@/lib/supabase/services/base/types";
import { deleteAction } from "@/lib/supabase/services/base/actions/deleteAction";

type MenuType = OptionItem & {
  onClick?: (value: string, item?: MenuType) => Promise<void>;
  separator?: boolean;
};

interface Props {
  path: string;
  table: string;
  id: PrimaryKeyType;
  actions?: MenuType[];
  canShow?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;
}

export const TdActionMenu = ({
  path,
  table,
  id,
  actions = [],
  canShow,
  canEdit,
  canDelete,
}: Props) => {
  const menu: MenuType[] = [];
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  canShow && menu.push({ label: "Details", value: "show" });
  canEdit && menu.push({ label: "Edit", value: "edit" });
  canDelete && menu.push({ label: "Delete", value: "delete" });

  const handleClick = async (value: string, item?: MenuType) => {
    if (value !== "delete") return;

    if (confirm("Confirm delete?")) {
      setLoading(true);

      const { data, error } = await deleteAction({ path, table, id });

      if (error) toast.error(error);
      else if (data) toast.success(`Row ID ${id} deleted!`);

      setLoading(false);
    }
  };

  //
  return loading ? (
    <TableCell className="debug_ min-w-[40px]">
      <Spinner />
    </TableCell>
  ) : (
    <TableCell className="w-[10px]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="text-muted-foreground data-[state=open]:bg-muted flex size-8"
          >
            <MoreVerticalIcon />
            <span className="sr-only">Action</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          {[...menu, ...actions].map((item, i) => {
            return (
              <Fragment key={i}>
                {item.separator && <DropdownMenuSeparator />}
                <DropdownMenuItem
                  disabled={item.disabled}
                  onSelect={() =>
                    item.onClick
                      ? item.onClick(item.value, item)
                      : handleClick(item.value, item)
                  }
                >
                  {item.label}
                </DropdownMenuItem>
              </Fragment>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </TableCell>
  );
};
