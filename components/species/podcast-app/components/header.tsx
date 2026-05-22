"use client";

import { useState } from "react";
import { ChartCandlestickIcon, ChartPieIcon, SearchIcon } from "lucide-react";
//
import { Logo } from "@/components/logo";
import { LucideIconButton } from "@/components/atoms/icon-button";
import { usePodcastSearchbarStore } from "@/store/podcastSearchbarStore";

export const Header = () => {
  const show = usePodcastSearchbarStore((s) => s.show);
  const setShow = usePodcastSearchbarStore((s) => s.setShow);
  const [chartIcon, setChartIcon] = useState(true);
  //
  return show ? null : (
    <header className="flex-row-cb debug_ h-[60px] border-b pl-4 pr-2">
      <div className="flex-row-cs gap-2.5">
        <Logo iconOnly />
        <strong className="font-[Bebas_Neue] text-lg tracking-wider">
          Podcast
        </strong>
      </div>
      <div className="flex-row-cs _gap-8">
        <LucideIconButton Icon={SearchIcon} onClick={setShow} title="Search" />
        <LucideIconButton
          Icon={chartIcon ? ChartPieIcon : ChartCandlestickIcon}
          onClick={() => setChartIcon((s) => !s)}
          title="Analytics"
        />
      </div>
    </header>
  );
};
