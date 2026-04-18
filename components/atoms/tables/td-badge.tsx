import { PropsWithChildren } from "react";
//
import { Badge } from "@/components/shadcn/ui/badge";
import { TableCell } from "@/components/shadcn/ui/table";
import { BadgeVariantType } from "@/components/shadcn/types";
import { HYPHENS } from "@/constants";

interface Props extends PropsWithChildren {
  label?: string | string[] | null;
  variant?: BadgeVariantType;
}

export const TdBadge = ({ children, label, variant }: Props) => {
  const labelSafe = label ? (typeof label === "string" ? [label] : label) : [];

  return (
    <TableCell>
      {children ? (
        <Badge variant={variant} className="m-0.5 px-1.5">
          {children}
        </Badge>
      ) : label ? (
        labelSafe.map((label, i) => (
          <Badge key={i} variant={variant} className="m-0.5 px-1.5">
            {label}
          </Badge>
        ))
      ) : (
        HYPHENS
      )}
    </TableCell>
  );
};
