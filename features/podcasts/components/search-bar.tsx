"use client";

import { ArrowLeftIcon, FunnelIcon, SearchIcon, XIcon } from "lucide-react";
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
        <LucideIconButton Icon={ArrowLeftIcon} onClick={setShow} />
        <div className="bg-muted flex-row-ce h-[48px] flex-1 gap-2 rounded-full pr-2 pl-5">
          <input
            type="text"
            placeholder="Search episodes, guests..."
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
            className="debug_ flex-1"
          />
          <div className="flex-row-cs">
            {typing && (
              <XIcon onClick={() => setValue("")} size={18} strokeWidth={2.5} />
            )}
            <LucideIconButton Icon={SearchIcon} />
          </div>
        </div>
        <LucideIconButton Icon={FunnelIcon} />
      </div>
    </section>
  ) : null;
};
