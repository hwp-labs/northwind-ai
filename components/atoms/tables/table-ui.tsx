import { PropsWithChildren } from "react";
import clsx from "clsx";
//
import { Badge } from "@/components/shadcn/ui/badge";
import { Skeleton } from "@/components/shadcn/ui/skeleton";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/shadcn/ui/table";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { Indicator } from "../indicator";
import { UNKNOWN, HYPHENS } from "@/constants";
import { ColorVariantType } from "@/types";
import { BadgeVariantType } from "@/components/shadcn/types";

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

interface CellAmountProps extends PropsWithChildren {
  variant?: ColorVariantType;
}

const CellAmount = ({ children, variant }: CellAmountProps) => {
  return <TableCell className={`text-right`}>{children}</TableCell>;
};

interface CellBadgeProps {
  text?: string | string[] | null;
  variant?: BadgeVariantType;
}

const CellBadge = ({ variant, text }: CellBadgeProps) => {
  const textSafe = text ? (typeof text === "string" ? [text] : text) : [];
  // 
  return (
    <TableCell>
      {text
        ? textSafe.map((text, i) => (
            <Badge key={i} variant={variant} className="m-0.5 px-1.5">
              {text}
            </Badge>
          ))
        : HYPHENS}
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
