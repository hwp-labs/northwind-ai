"use client";

import { IconPlayerPlayFilled, IconHeadphonesOff } from "@tabler/icons-react";
import { TransformedEpisodeDto } from "@/lib/supabase/services/podcasts/types";

export const EpisodeCta = ({ item }: { item: TransformedEpisodeDto }) => {
  return (
    <button
      onClick={() =>
        item.spaceUrl ? window.open(item.spaceUrl, "_blank") : undefined
      }
      className="bg-secondary flex-row-cc size-[40px] rounded-full"
    >
      {[8].includes(item.id) || !item.listeners ? (
        <IconHeadphonesOff size={18} strokeWidth={2.5} />
      ) : (
        <IconPlayerPlayFilled size={18} />
      )}
    </button>
  );
};
