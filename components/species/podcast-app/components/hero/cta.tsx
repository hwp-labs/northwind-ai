"use client";

import { useState } from "react";
import { IconBell, IconHeadphonesFilled } from "@tabler/icons-react";
import { TransformedPodcastDto } from "@/lib/supabase/services/podcasts/types";

export const HeroCta = ({ episode }: { episode: TransformedPodcastDto }) => {
  const [rsvp, setRsvp] = useState(false);
  //
  return (
    <button
      onClick={() =>
        window.open("https://x.com/i/spaces/1mGPaLAgERYJN", "_blank")
      }
      className="text-podcast border-podcast button-base gap-2 rounded-lg border-2 bg-white px-4 py-1.5 font-medium ring-2 ring-white"
    >
      {/* RSVP|Attend|Listen */}
      {/* <IconBell size={18} strokeWidth={2.5} /> */}
      <IconHeadphonesFilled size={18} strokeWidth={2.5} />
      <span>Listen</span>
    </button>
  );
};
