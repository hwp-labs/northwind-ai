import { Metadata } from "next";
//
import { TableBody, TableHead } from "@/components/shadcn/ui/table";
import { TableUI } from "@/components/atoms/tables/table-ui";
import { SeedInHouzEmails } from "@/components/species/seed-portal/ui/seed-inhouz-emails";

export const metadata: Metadata = {
  title: "Seed Portal",
};

export default async function SeedPortalPage() {
  return (
    <main className="grid gap-4">
      <TableUI.Container>
        <TableUI.HeaderRow hasAction>
          <TableHead>Description</TableHead>
          <TableHead>Data Info</TableHead>
        </TableUI.HeaderRow>
        <TableBody>
          <SeedInHouzEmails />
        </TableBody>
      </TableUI.Container>
    </main>
  );
}
