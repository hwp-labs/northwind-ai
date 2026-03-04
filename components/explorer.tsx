"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FolderIcon, FolderOpenIcon } from "lucide-react";
//
import { Button } from "./shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { type PathType, PATH, PROTECTED_PATH } from "@/constants/PATH";

const paths = { ...PATH, ...PROTECTED_PATH };

export const Explorer = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleClick = (path: PathType) =>
    router.push(typeof path === "string" ? path : path(1));
  //
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          title="Explore"
          aria-label="Explore"
          className="fixed bottom-5 left-16 z-[99] shadow-lg transition-colors"
        >
          {open ? <FolderOpenIcon size={14} /> : <FolderIcon size={14} />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="" align="end">
        {Object.entries(paths).map(([name, path]) => (
          <DropdownMenuItem key={name} onSelect={() => handleClick(path)}>
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
