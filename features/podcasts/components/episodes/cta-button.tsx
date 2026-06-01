"use client";

import { TransformedEpisode } from "@/lib/podcast/episodes/utils";
import { IconPlayerPlayFilled, IconHeadphonesOff } from "@tabler/icons-react";

interface Props {
  episode: TransformedEpisode;
}

export const CtaButton = ({ episode }: Props) => {
  const handleClick = () => {
    if (episode.canPlay) window.open(episode.spaceUrl, "_blank");
  };
  //
  return (
    <button
      onClick={handleClick}
      className="bg-secondary flex-row-cc size-[40px] rounded-full"
    >
      {episode.canPlay ? (
        <IconPlayerPlayFilled size={18} />
      ) : (
        <IconHeadphonesOff size={18} strokeWidth={2.5} />
      )}
    </button>
  );
};
