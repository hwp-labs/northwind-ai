"use client";

import { useEffect, useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
import { getListenersCountAction } from "@/lib/supabase/services/listeners/actions/getListenersAction";

interface Props {
  podcast_id: number;
}

export const RsvpAvatarGroup = ({ podcast_id }: Props) => {
  const item = PodcastHelper.GetPageItem(podcast_id);
  const [total, setTotal] = useState(1);

  const avatars = item.displayAvatars || [
    "/images/icon-hwp.png",
    "/images/avatar-etugbeh.png",
    "/images/avatar.png",
  ];

  const fetcher = async () => {
    if (item.listeners) {
      setTotal(item.listeners);
      return;
    }

    const { data: total } = await getListenersCountAction({
      filterByPodcastId: podcast_id,
    });
    setTotal(total || 1);
  };

  useEffect(() => {
    fetcher();
  }, []);
  //
  return (
    <AvatarGroup count={total + (avatars.length - 3)}>
      {avatars.slice(0, 3).map((item, i) => (
        <Avatar key={i}>
          <AvatarImage src={item} alt="" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      ))}
    </AvatarGroup>
  );
};
