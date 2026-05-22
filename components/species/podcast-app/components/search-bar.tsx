"use client";

import { ArrowLeftIcon, FunnelIcon, SearchIcon, XIcon } from "lucide-react";
// 
import { LucideIconButton } from "@/components/atoms/icon-button";
import { usePodcastSearchbarStore } from "@/store/podcastSearchbarStore";

export const SearchBar = () => {
  const show = usePodcastSearchbarStore((s) => s.show);
  const setShow = usePodcastSearchbarStore((s) => s.setShow);
  const value = usePodcastSearchbarStore((s) => s.value);
  const setValue = usePodcastSearchbarStore((s) => s.setValue);
  const typing = usePodcastSearchbarStore((s) => s.typing);
  //
  return show ? (
    <section className="px-4">
      <div className="flex-row-cb gap-2">
        <LucideIconButton Icon={ArrowLeftIcon} onClick={setShow} title="Back" />
        <div className="bg-border flex-row-ce h-[48px] flex-1 gap-2 rounded-full pr-5 pl-5">
          <input
            type="text"
            placeholder="Search episodes, guests..."
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
            className="debug_ flex-1"
          />
          <div className="flex-row-cs gap-2.5">
            {typing && (
              <LucideIconButton
                Icon={XIcon}
                onClick={() => setValue("")}
                title="Cancel"
                size={18}
                compact
              />
            )}
            <LucideIconButton Icon={SearchIcon} title="Search" compact />
          </div>
        </div>
        <LucideIconButton Icon={FunnelIcon} title="Filter" />
      </div>
    </section>
  ) : null;
};
