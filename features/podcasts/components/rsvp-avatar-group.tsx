"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { useFetchRsvp } from "@/hooks/use-fetch-rsvp";

export const RsvpAvatarGroup = () => {
  const { avatars, total } = useFetchRsvp();
  //
  return (
    <AvatarGroup count={total}>
      {avatars.map((item, i) => (
        <Avatar key={i}>
          <AvatarImage src={item} alt="" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      ))}
    </AvatarGroup>
  );
};
