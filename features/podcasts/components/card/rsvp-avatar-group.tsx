"use client";

import { useEffect, useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { getListenersCountAction } from "@/lib/supabase/services/listeners/actions/getListenersAction";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";

interface Props {
  podcast_id: number;
}

export const RsvpAvatarGroup = ({ podcast_id }: Props) => {
  const [total, setTotal] = useState(1);

  async function fetcher() {
    const listeners = PodcastHelper.GetPageItem(podcast_id).listeners;
    if (listeners) {
      setTotal(listeners);
    } else {
      const { data: total } = await getListenersCountAction({ podcast_id });
      setTotal(total || 1);
    }
  }

  useEffect(() => {
    fetcher();
  }, []);
  //
  return (
    <AvatarGroup count={total}>
      {[
        {
          src: "/images/icon-hwp-labs.png",
          alt: "@HWP_Labs",
          text: "H",
        },
        {
          src: "/images/avatar-etugbeh.png",
          alt: "@2gbeh",
          text: "E",
        },
        {
          src: "/images/avatar.png",
          alt: "",
          text: "A",
        },
      ].map((item, i) => (
        <Avatar key={i}>
          <AvatarImage src={item.src} alt={item.alt} />
          <AvatarFallback>{item.text}</AvatarFallback>
        </Avatar>
      ))}
    </AvatarGroup>
  );
};
