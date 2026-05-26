"use client";

import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";
import { useFetchRsvp } from "@/hooks/use-fetch-rsvp";

export const RsvpAvatars = ({ id }: { id: number }) => {
  const { avatars, total } = useFetchRsvp(id);
  //
  return (
    <AvatarGroup
      count={total}
      className="[&>span]:bg-foreground [&>span]:ring-1.5! [&>span]:ring-[#eee]"
      countClassName="invert"
    >
      {avatars.map((item, i) => (
        <Avatar key={i}>
          <AvatarImage src={item} alt="" />
        </Avatar>
      ))}
    </AvatarGroup>
  );
};
