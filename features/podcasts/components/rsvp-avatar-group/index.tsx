"use client";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/shadcn/ui/avatar";
import { AvatarGroup } from "@/components/atoms/avatar-builder";
//
import { useRsvpAvatarGroup } from "./hook";

interface Props {
  podcast_id: number;
}

export const RsvpAvatarGroup = ({ podcast_id }: Props) => {
  const { total, avatars } = useRsvpAvatarGroup(podcast_id);
  //
  return (
    <AvatarGroup count={total}>
      {[
        {
          src: "/images/icon-hwp-labs.png",
          alt: "H",
        },
        ...avatars,
      ].map((item, i) => (
        <Avatar key={i}>
          <AvatarImage src={item.src} alt="" />
          <AvatarFallback>{item.alt}</AvatarFallback>
        </Avatar>
      ))}
    </AvatarGroup>
  );
};
