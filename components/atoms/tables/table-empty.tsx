"use client";

import { useRouter } from "next/navigation";
import { FaUserSecret } from "react-icons/fa6";
import { RefreshCcwIcon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { TableCell, TableRow } from "@/components/shadcn/ui/table";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/shadcn/ui/empty";

interface Props {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}

export const TableEmpty = ({ title, description, action }: Props) => {
  const router = useRouter();
  //
  return (
    <TableRow>
      <TableCell colSpan={9}>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FaUserSecret size={14} />
            </EmptyMedia>
            <EmptyTitle>{title || "No data found"}</EmptyTitle>
            <EmptyDescription>
              {description || (
                <>
                  The requested resource appears to be empty.
                  <br />
                  Please try again later or contact support.
                </>
              )}
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent className="flex-row-sc gap-2">
            {action || (
              <Button variant="default" onClick={() => router.refresh()}>
                <RefreshCcwIcon />
                Refresh
              </Button>
            )}
          </EmptyContent>
        </Empty>
      </TableCell>
    </TableRow>
  );
};
