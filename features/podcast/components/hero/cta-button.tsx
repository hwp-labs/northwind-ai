"use client";

import { IconCaretRightFilled } from "@tabler/icons-react";
import { usePodcastStore } from "@/store/podcastStore";
import { TransformedEpisode } from "@/lib/podcast/episodes/utils";

export const CtaButton = ({ episode }: { episode: TransformedEpisode }) => {
  const setEpisode = usePodcastStore((s) => s.setEpisode);
  const mutateModal = usePodcastStore((s) => s.mutateModal);

  const handleClick = () => {
    switch (episode.ctaText) {
      case "RSVP":
        setEpisode(episode);
        mutateModal({ open: true, variant: "rsvp" });
        break;
      default:
        window.open(episode.virtualLink, "_blank");
    }
  };
  //
  return (
    <button
      onClick={handleClick}
      className="text-qverse border-qverse button-base uppercase_ gap-0 rounded-md border-2 bg-white py-1 pr-3 pl-3.5 font-medium ring-2 ring-white"
    >
      <strong>{episode.ctaText}</strong>
      <IconCaretRightFilled size={18} strokeWidth={2.5} />
    </button>
  );
};
