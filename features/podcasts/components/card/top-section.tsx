"use client";

import { PromptBar } from "@/components/molecules/prompt-bar";
import { Hero } from "@/components/molecules/hero";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { TransformedPodcastDto } from "@/lib/supabase/services/podcasts/types";

export const TopSection = ({
  isOngoing,
  isConcluded,
  ...item
}: TransformedPodcastDto) => {
  const isMobile = useIsMobile();
  const __html = isMobile
    ? `${item.richTextLine1} ${item.richTextLine2}`
    : `${item.richTextLine1}<br/>${item.richTextLine2}`;
  //
  return (
    <>
      <PromptBar>
        {/*isOngoing ? "Live: " : "Date: "*/}
        {isMobile ? `${item.dateText} | ${item.timeText}` : item.datetimeText}
        <span>WAT</span>
      </PromptBar>
      <Hero title={<p dangerouslySetInnerHTML={{ __html }} />}>
        {item.isLongTitle ? item.title : `${item.title} ${item.seriesText}`}
      </Hero>
    </>
  );
};
