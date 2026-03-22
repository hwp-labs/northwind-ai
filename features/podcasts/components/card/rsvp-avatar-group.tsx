"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { getListenersCountAction } from "@/lib/supabase/services/listeners/actions/getListenersAction";
import { useEffect, useState } from "react";

interface Props {
  podcast_id: number;
}

export const RsvpAvatarGroup = ({ podcast_id }: Props) => {
  const [totalSafe, setTotalSafe] = useState(5);

  async function fetcher() {
    const { data: total } = await getListenersCountAction({ podcast_id });
    setTotalSafe((total || 0) + 5);
  }

  useEffect(() => {
    fetcher();
  }, []);
  //
  return (
    <AvatarGroup count={totalSafe - 3}>
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
