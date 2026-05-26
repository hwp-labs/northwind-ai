"use client";

import { PromptBar } from "@/components/molecules/prompt-bar";
import { Hero } from "@/components/molecules/hero";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { TransformedEpisodeDto } from "@/lib/supabase/services/podcasts/types";

export const PromptBarHero = ({
  isOngoing,
  isConcluded,
  ...item
}: TransformedEpisodeDto) => {
  const isMobile = useIsMobile();
  //
  return (
    <>
      <PromptBar>
        {isMobile ? null : isOngoing ? "Live: " : "Date: "}
        {isMobile ? `${item.dateText} | ${item.timeText}` : item.datetimeText}
        <span>WAT</span>
      </PromptBar>
      <Hero
        title={<p dangerouslySetInnerHTML={{ __html: item.summaryNobr }} />}
      >
        {item.titleSeriesText}
      </Hero>
    </>
  );
};
