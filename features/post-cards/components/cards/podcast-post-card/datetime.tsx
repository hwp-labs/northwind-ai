"use client";

import { PropsWithChildren, useState } from "react";
import { CalendarClockIcon } from "lucide-react";
import clsx from "clsx";
//
import { TransformedEpisodeDto } from "@/lib/supabase/services/podcasts/types";

interface Props extends PropsWithChildren {
  podcast: TransformedEpisodeDto;
}

export const Datetime = ({ podcast }: Props) => {
  const [tonight, setTonight] = useState(false);
  //
  return (
    <div className={clsx("flex-row-cs text-sm", tonight ? "ml-6" : "ml-4")}>
      <span
        className="text-foreground flex-row-cs bg-podcast ml-2 -rotate-3 cursor-default gap-2 px-2 py-2 font-black tracking-wide"
        onClick={() => setTonight((s) => !s)}
      >
        <CalendarClockIcon size={16} />
        {tonight ? "Tonight bro.. 👀" : podcast.dateText}
      </span>
      <span className="bg-foreground text-podcast -mt-4 -rotate-3 p-2 font-black tracking-wide">
        {podcast.timeText}
        <span className="text-[12px] font-medium tracking-normal"> WAT</span>
      </span>
    </div>
  );
};
