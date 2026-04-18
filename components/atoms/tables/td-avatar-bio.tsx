import { TableCell } from "@/components/shadcn/ui/table";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { Indicator } from "../indicator";
import { UNKNOWN, HYPHENS } from "@/constants";

interface Props {
  src?: string;
  srcText?: string | number;
  name?: string;
  email?: string;
  textOnly?: boolean;
  showBadge?: boolean;
}

export const TdAvatarBio = ({
  src,
  srcText,
  name,
  email,
  textOnly,
  showBadge,
}: Props) => {
  return (
    <TableCell>
      <div className="flex-center-start gap-2.5">
        <div className="relative">
          {textOnly ? null : (
            <Avatar className="size-8">
              <AvatarImage src={src || undefined} />
              <AvatarFallback>
                {srcText || (name || UNKNOWN).charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          )}
          {showBadge && <Indicator />}
        </div>
        <div className="grid gap-0.5 text-sm leading-tight whitespace-nowrap">
          <span className="_font-medium text-sm">{name || HYPHENS}</span>
          {email ? (
            <span className="text-muted-foreground text-xs">{email}</span>
          ) : null}
        </div>
      </div>
    </TableCell>
  );
};
