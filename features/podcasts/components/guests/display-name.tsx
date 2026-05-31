"use client";

import { PodcastGuestDto } from "@/lib/podcast/speakers/data";

export const DisplayName = ({ guest }: { guest: PodcastGuestDto }) => {
  const handleClick = (username: string) => {
    window.open(`https://x.com/${username}`, "_blank");
  };
  //
  return (
    <figcaption
      className="flex-col-cc debug_ mt-2 cursor-pointer gap-0.5 truncate text-sm font-medium text-white"
      onClick={() => handleClick(guest.socials.x)}
    >
      {guest.displayName}
    </figcaption>
  );
};
