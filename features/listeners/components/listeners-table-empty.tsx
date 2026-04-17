"use client";

import { useRouter } from "next/navigation";
import { FaUserSecret } from "react-icons/fa6";
import { RefreshCcwIcon, Router } from "lucide-react";
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

export const ListenersTableEmpty = () => {
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
            <EmptyTitle>No data found</EmptyTitle>
            <EmptyDescription>
              The requested resource appears to be empty.
              <br />
              Please try again later or contact support.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent className="flex-row-sc gap-2">
            <Button variant="default" onClick={() => router.refresh()}>
              <RefreshCcwIcon />
              Refresh
            </Button>
          </EmptyContent>
        </Empty>
      </TableCell>
    </TableRow>
  );
};
