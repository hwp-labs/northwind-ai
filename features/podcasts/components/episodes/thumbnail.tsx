"use client";

import Image from "next/image";
import { usePodcastStore } from "@/store/podcastStore";
import { TransformedEpisode } from "@/lib/podcast/episodes/utils";

interface Props {
  episode: TransformedEpisode;
}

export const Thumbnail = ({ episode }: Props) => {
  const setEpisode = usePodcastStore((s) => s.setEpisode);
  const mutateModal = usePodcastStore((s) => s.mutateModal);

  const handleClick = () => {
    setEpisode(episode);
    
    switch (episode.ctaText) {
      case "RSVP":
        mutateModal({ open: true, variant: "rsvp" });
        break;
      default:
        mutateModal({ open: true, variant: "preview" });
    }
  };
  //
  return (
    <Image
      src={episode.thumbnail}
      alt=""
      width={56}
      height={56}
      className="size-[56px] rounded-[12px]"
      onClick={handleClick}
    />
  );
};
