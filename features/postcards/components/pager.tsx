"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { useQueryParams } from "@/hooks/use-query-params";

export const Pager = () => {
  const query = useQueryParams();
  const { page } = query.get({ page: 0 });
  const handleChange = (page: string) =>
    page === "0" ? query.remove("page") : query.add({ page });
  //
  return (
    <Select value={page} onValueChange={handleChange}>
      <SelectTrigger className="max-w-24 bg-transparent">
        <SelectValue placeholder="Page" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={String(0)}>Reset</SelectItem>
        {Array.from({ length: 12 }).map((_, i) => {
          const j = i + 1;
          //
          return (
            <SelectItem key={i} value={String(j)}>
              Page {j}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
