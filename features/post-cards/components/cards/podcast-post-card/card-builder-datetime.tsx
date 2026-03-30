"use client";

import { useState } from "react";
import { CalendarClockIcon } from "lucide-react";
import clsx from "clsx";
// 
import { TransformedPodcastDto } from "@/lib/supabase/services/podcasts/types";

export const CardBuilderDatetime = ({ dateText, timeText }: TransformedPodcastDto) => {
  const [tonight, setTonight] = useState(false);
  //
  return (
    <section
      className={clsx("flex-row-cs gap-0 text-sm", tonight ? "ml-4" : "ml-3")}
    >
      <span
        className="text-foreground flex-row-cs ml-2 -rotate-4 cursor-default gap-2 bg-[#071228] px-2 py-2 font-black tracking-wide"
        onClick={() => setTonight((prev) => !prev)}
      >
        <CalendarClockIcon size={16} />
        {tonight ? "Tonight bro.. 👀" : dateText}
      </span>
      <span className="bg-foreground -mt-4 -rotate-4 px-2 py-2 font-black tracking-wide text-[#071228]">
        {timeText}
        <span className="text-xs tracking-normal"> / WAT</span>
      </span>
    </section>
  );
};
