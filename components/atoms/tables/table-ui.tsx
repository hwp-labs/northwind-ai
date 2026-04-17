import { PropsWithChildren } from "react";
//
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/shadcn/ui/table";
import { Badge } from "@/components/shadcn/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { Indicator } from "../indicator";
import { ColorVariantType } from "@/types";
import { UNKNOWN, HYPHENS } from "@/constants";
import { Skeleton } from "@/components/shadcn/ui/skeleton";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>{children}</Table>
    </div>
  );
};

interface HeaderRowProps extends PropsWithChildren {
  isNumbered?: boolean;
  hasAction?: boolean;
}

const HeaderRow = ({ children, isNumbered, hasAction }: HeaderRowProps) => {
  return (
    <TableHeader>
      <TableRow className="bg-muted">
        {isNumbered && (
          <TableHead className="w-[10px]" aria-label="S/N">
            #
          </TableHead>
        )}
        {children}
        {hasAction && (
          <TableHead className="w-[10px]" aria-label="Actions"></TableHead>
        )}
      </TableRow>
    </TableHeader>
  );
};

interface CellAvatarBioProps {
  src?: string;
  srcText?: string | number;
  name?: string;
  email?: string;
  textOnly?: boolean;
  showBadge?: boolean;
}

const CellAvatarBio = ({
  src,
  srcText,
  name,
  email,
  textOnly,
  showBadge,
}: CellAvatarBioProps) => {
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
        <div className="grid gap-0.5 text-sm leading-tight">
          <span className="_font-medium truncate text-sm">
            {name || HYPHENS}
          </span>
          {email ? (
            <span className="text-muted-foreground truncate text-xs">
              {email}
            </span>
          ) : null}
        </div>
      </div>
    </TableCell>
  );
};

interface CellAmountProps extends PropsWithChildren {
  variant?: ColorVariantType;
}

const CellAmount = ({ children, variant }: CellAmountProps) => {
  return <TableCell className={`text-right`}>{children}</TableCell>;
};

const CellBadge = ({ children }: PropsWithChildren) => {
  return (
    <TableCell>
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        {children}
      </Badge>
    </TableCell>
  );
};

const TBodySkeleton = () => {
  return (
    <TableRow>
      <TableCell colSpan={9}>
        <Skeleton className="h-[320px] bg-white/20" />
      </TableCell>
    </TableRow>
  );
};

export const TableUI = {
  Container,
  HeaderRow,
  CellAvatarBio,
  CellAmount,
  CellBadge,
  TBodySkeleton,
};
