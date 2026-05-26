"use client";

import { IconCaretRightFilled } from "@tabler/icons-react";
import { usePodcastStore } from "@/store/podcastStore";
import { TransformedEpisodeDto } from "@/lib/supabase/services/podcasts/types";

export const HeroCta = ({ episode }: { episode: TransformedEpisodeDto }) => {
  const mutateModal = usePodcastStore((s) => s.mutateModal);
  const handleClick = () => {
    switch (episode.ctaText) {
      case "RSVP":
        mutateModal({ open: true, variant: "rsvp" });
        break;
      default:
        episode.spaceUrl ? window.open(episode.spaceUrl, "_blank") : null;
    }
  };
  //
  return (
    <button
      onClick={handleClick}
      className="text-podcast border-podcast button-base gap-0 rounded-md border-2 bg-white pl-3.5 pr-3 py-1 font-medium ring-2 ring-white uppercase_"
    >
      <strong>{episode.ctaText}</strong>
      <IconCaretRightFilled size={18} strokeWidth={2.5} />
    </button>
  );
};
