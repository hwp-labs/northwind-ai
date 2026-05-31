"use client";

import Image from "next/image";
import { TransformedEpisodeDto } from "@/lib/supabase/services/podcasts/types";
import { usePodcastStore } from "@/store/podcastStore";

export const Thumbnail = ({ item }: { item: TransformedEpisodeDto }) => {
  const setEpisode = usePodcastStore((s) => s.setEpisode);
  const mutateModal = usePodcastStore((s) => s.mutateModal);

  const handleClick = () => {
    if (item.canPlay) {
      setEpisode(item);
      mutateModal({ open: true, variant: "preview" });
    }
  };
  //
  return (
    <Image
      src={item.displayAvatar!}
      alt=""
      width={56}
      height={56}
      className="size-[56px] rounded-[12px]"
      onClick={handleClick}
    />
  );
};
