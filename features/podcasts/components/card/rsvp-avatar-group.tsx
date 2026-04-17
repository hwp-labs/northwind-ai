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
    const p = PodcastHelper.GetPageItem(podcast_id);
    if (p.listeners) {
      setTotal(p.listeners);
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
          src: p?.customTag === "radio-verse"?"/uploads/podcast/icon-bitcoin.png":"/images/avatar-etugbeh.png",
          alt: "@2gbeh",
          text: "E",
        },
        {
          src: p?.customTag === "radio-verse"?"/uploads/podcast/icon-verse.png":"/images/avatar.png",
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
