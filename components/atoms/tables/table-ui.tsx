import { PropsWithChildren } from "react";
//
import { Skeleton } from "@/components/shadcn/ui/skeleton";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/shadcn/ui/table";
import { ColorVariantType } from "@/types";

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

const ThAmount = ({ children }: PropsWithChildren) => {
  return <TableHead className="text-right">{children}</TableHead>;
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
interface TdAmountProps extends PropsWithChildren {
  variant?: ColorVariantType;
}

const TdAmount = ({ children, variant }: TdAmountProps) => {
  return <TableCell className="text-right">{children}</TableCell>;
};
interface UrlProps {
  label: string;
  value?: string | null;
  icon?: React.ReactNode;
}

const Url = ({ label, value, icon }: UrlProps) => {
  return (
    <a href={value || "#"} className="debug_ flex-row-cs m-1 gap-1.5">
      {icon}
      <span className="_underline-offset-2 underline">{label}</span>
    </a>
  );
};

export const TableUI = {
  Container,
  HeaderRow,
  ThAmount,
  TBodySkeleton,
  TdAmount,
  Url,
};
