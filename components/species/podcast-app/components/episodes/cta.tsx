"use client";

import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { TransformedPodcastDto } from "@/lib/supabase/services/podcasts/types";

export const EpisodeCta = ({ item }: { item: TransformedPodcastDto }) => {
  return (
    <button
      onClick={() =>
        item.spaceUrl ? window.open(item.spaceUrl, "_blank") : undefined
      }
      className="bg-secondary flex-row-cc size-[40px] rounded-full"
    >
      <IconPlayerPlayFilled size={18} />
    </button>
  );
};
