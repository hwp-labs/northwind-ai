"use client";

import { ChangeEvent } from "react";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import { SearchIcon, XIcon } from "lucide-react";
import { IconButton } from "@/components/atoms/icon-button";
import { usePodcastStore } from "@/store/podcastStore";

interface Props {
  placeholder?: string;
}

export const SearchBar = ({ placeholder }: Props) => {
  const search = usePodcastStore((s) => s.search);
  const mutateSearch = usePodcastStore((s) => s.mutateSearch);

  const typing = search.value.trim().length > 0;

  const handleChange = (
    ev: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    mutateSearch({ value: ev.target.value });
  };

  const handleReset = () => {
    mutateSearch({ value: "" });
  };
  //
  return search.show ? (
    <div className="debug_ px-4 pb-4">
      <div className="bg-secondary flex-row-ce h-[48px] flex-1 rounded-full pr-5 pl-5 focus:outline-none">
        <input
          type="text"
          placeholder={placeholder}
          value={search.value}
          onChange={handleChange}
          className="debug_ input-base h-[40px] flex-1"
        />
        <div className="flex-row-cs gap-2.5">
          {typing ? (
            <IconButton
              Icon={XIcon}
              onClick={handleReset}
              title="Clear"
              size={18}
              compact
            />
          ) : (
            <p className="size-[18px]" />
          )}
          <IconButton
            Icon={IconAdjustmentsHorizontal}
            title="Search"
            compact
            color="var(--ring)"
          />
        </div>
      </div>
    </div>
  ) : null;
};
