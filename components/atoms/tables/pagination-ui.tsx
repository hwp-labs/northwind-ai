import { PropsWithChildren } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { Label } from "@/components/shadcn/ui/label";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex-row-cb px-4">{children}</div>
  );
};

interface SelectedRowsCaptionProps {
  selected?: number;
  total?: number;
}

const SelectedRowsCaption = ({ selected = 1, total = 10 }: SelectedRowsCaptionProps) => {
  return (
    <div className="hidden text-sm text-muted-foreground lg:flex">
      {selected} of {total} row(s) selected.
    </div>
  );
};

const PAGE_SIZES = [10, 25, 50, 75, 100];

interface SizeSelectorProps {
  defaultValue?: (typeof PAGE_SIZES)[number];
}

const SizeSelector = ({ defaultValue = 10 }: SizeSelectorProps) => {
  return (
    <div className="hidden items-center gap-2 lg:flex">
      <Label htmlFor="rows-per-page" className="text-sm text-muted-foreground">
        Rows per page
      </Label>
      <Select defaultValue={String(defaultValue)}>
        <SelectTrigger className="w-20" id="rows-per-page">
          <SelectValue placeholder="Page Size" />
        </SelectTrigger>
        <SelectContent side="top">
          {PAGE_SIZES.map((item) => (
            <SelectItem key={item} value={String(item)}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export const PaginationUI = {
  Container,
  SelectedRowsCaption,
  SizeSelector,
};
