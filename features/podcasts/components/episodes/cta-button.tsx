"use client";

import { IconPlayerPlayFilled, IconPlayerPlay } from "@tabler/icons-react";
import { usePodcastStore } from "@/store/podcastStore";
import { TransformedEpisode } from "@/lib/podcast/episodes/utils";

interface Props {
  episode: TransformedEpisode;
}

export const CtaButton = ({ episode }: Props) => {
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
    <button onClick={handleClick} className="flex-row-cs gap-4">
      <div className="text-muted-foreground text-sm font-medium whitespace-nowrap">
        {episode.listeners ? <>{episode.listeners}x</> : "RSVP"}
      </div>
      <div className="list-cta-btn size-[40px]">
        {episode.canPlay ? (
          <IconPlayerPlayFilled size={18} />
        ) : (
          <IconPlayerPlay size={18} strokeWidth={2.5} />
        )}
      </div>
    </button>
  );
};
