"use client";

import { useState } from "react";
import { SearchIcon, XIcon } from "lucide-react";
import { IconButton } from "@/components/atoms/icon-button";

export const SearchBar = () => {
  const [value, setValue] = useState("");
  const typing = value.trim().length > 0;
  //
  return (
    <div className="bg-secondary flex-row-ce h-[48px] flex-1 rounded-full pr-5 pl-5 focus:outline-none">
      <input
        type="text"
        placeholder="Discover new episodes"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        className="debug_ input-base h-[40px] flex-1"
      />
      <div className="flex-row-cs gap-2.5">
        {typing ? (
          <IconButton
            Icon={XIcon}
            onClick={() => setValue("")}
            title="Clear"
            size={18}
            compact
          />
        ) : (
          <p className="size-[18px]" />
        )}
        <IconButton
          Icon={SearchIcon}
          title="Search"
          compact
          color="var(--ring)"
        />
      </div>
    </div>
  );
};
