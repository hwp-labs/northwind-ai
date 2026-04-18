import { Fragment } from "react";
import { MoreVerticalIcon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { TableCell } from "@/components/shadcn/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { OptionItem } from "@/types";

type MenuType = OptionItem & { separator?: boolean };

interface Props {
  menu: MenuType[];
  onChange: (value: string, item?: MenuType) => void;
}

export const TdAction = ({
  menu,
  onChange = () => undefined,
}: Props) => {
  return (
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
          {menu.map((item, i) => {
            return (
              <Fragment key={i}>
                {item.separator && <DropdownMenuSeparator />}
                <DropdownMenuItem
                  disabled={item.disabled}
                  onSelect={() => onChange(item.value, item)}
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
