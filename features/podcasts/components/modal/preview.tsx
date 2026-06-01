"use client";

import Image from "next/image";
import { IconHeadphonesFilled } from "@tabler/icons-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { Topic } from "../topic";
import { Datetime } from "../datetime";
import { OpayWidget } from "../opay-widget";
import { usePodcastStore } from "@/store/podcastStore";

interface Props {
  onClose?: () => void;
}

export const Preview = ({ onClose = () => undefined }: Props) => {
  const episode = usePodcastStore((s) => s.episode);
  const handlePlay = () => {
    episode?.canPlay ? window.open(episode.spaceUrl, "_blank") : undefined;
    onClose();
  };
  //
  return episode ? (
    <div className="grid w-full gap-4 px-4 pb-8">
      <figure className="flex-col-cc gap-4">
        <Image
          src={episode.thumbnail}
          alt=""
          width={56}
          height={56}
          className="size-[56px] rounded-[12px]"
        />
        <figcaption className="flex-col-cc gap-1">
          <Topic topic={episode.topic} variant="preview" />
          <Datetime episode={episode} />
        </figcaption>
      </figure>
      <div className="mt-4 grid gap-4">
        <Button variant="primary" onClick={handlePlay}>
          <IconHeadphonesFilled size={18} strokeWidth={2.5} />
          Play Recording
        </Button>
      </div>
      <OpayWidget variant="link" />
    </div>
  ) : null;
};
