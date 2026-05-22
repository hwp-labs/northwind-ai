"use client";

import { ArrowLeftIcon, FunnelIcon, SearchIcon, Settings2Icon, XIcon } from "lucide-react";
//
import { LucideIconButton } from "@/components/atoms/icon-button";
import { usePodcastSearchbarStore } from "@/store/podcastSearchbarStore";
import { Logo } from "@/components/logo";

export const SearchBar = () => {
  const show = usePodcastSearchbarStore((s) => s.show);
  const setShow = usePodcastSearchbarStore((s) => s.setShow);
  const value = usePodcastSearchbarStore((s) => s.value);
  const setValue = usePodcastSearchbarStore((s) => s.setValue);
  const typing = usePodcastSearchbarStore((s) => s.typing);
  //
  return show ? (
    <section className="flex-row-cb h-[60px] border-b px-4">
      <div className="flex-row-cb flex-1 gap-4">
        {/* <LucideIconButton Icon={ArrowLeftIcon} onClick={setShow} title="Back" /> */}
        <Logo iconOnly size={24}/>
        <div className="bg-border flex-row-ce h-[48px] flex-1 rounded-full pr-5 pl-5">
          <input
            type="text"
            placeholder="Discover new episodes"
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
            className="debug_ h-[40px] flex-1 input-reset"
          />
          <div className="flex-row-cs gap-2.5">
            {typing ? (
              <LucideIconButton
                Icon={XIcon}
                onClick={() => setValue("")}
                title="Cancel"
                size={18}
                compact
              />
            ) : (
              <p className="size-[18px]" />
            )}
            <LucideIconButton Icon={SearchIcon} title="Search" compact />
          </div>
        </div>
        <LucideIconButton Icon={Settings2Icon} title="Filter" compact />
      </div>
    </section>
  ) : null;
};
