"use client";

import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { TableCell, TableRow } from "@/components/shadcn/ui/table";
import { TdBadge } from "@/components/atoms/tables/td-badge";
// 
import { ActionType, useSeedInHouzEmails } from "./hook";
import { seed } from "./seed";

interface Migration {
  about: string;
  data: object;
  actions: Record<string, () => Promise<void>>;
}

export const SeedInHouzEmails = () => {
  const { actionName, loading, handleCommitRsvp, handleRollbackRsvp } =
    useSeedInHouzEmails();
  //
  const renderButton = async (
    label: ActionType,
    action: () => Promise<void>,
  ) => (
    <Button onClick={action} variant="secondary" disabled={loading}>
      {loading && actionName === label ? <Spinner /> : null}
      {label}
    </Button>
  );

  return (
    <TableRow>
      <TableCell className="whitespace-nowrap">
        Seed Inhouz Cloud Email Chain
      </TableCell>
      <TdBadge label={`${seed.length} emails`} variant="secondary" />
      <TableCell className="flex gap-2 whitespace-nowrap">
        {renderButton("Commit", handleCommitRsvp)}
        {renderButton("Rollback", handleRollbackRsvp)}
      </TableCell>
    </TableRow>
  );
};
