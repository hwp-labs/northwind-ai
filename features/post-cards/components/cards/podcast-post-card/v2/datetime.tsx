"use client";

import { PropsWithChildren, useState } from "react";
import { CalendarClockIcon } from "lucide-react";
import clsx from "clsx";
//
import { momentUtil } from "@/utils/moment-util";
import { PodcastV2 } from "@/lib/supabase/services/podcasts/data-v2";

interface Props extends PropsWithChildren {
  podcast?: PodcastV2;
}

export const Datetime = ({ podcast }: Props) => {
  const dateText = momentUtil.podcastDate(podcast?.datetime);
  const timeText = momentUtil.podcastTime(podcast?.datetime);
  const [tonight, setTonight] = useState(false);
  //
  return (
    <div
      className={clsx("flex-row-cs gap-0 text-sm", tonight ? "ml-6" : "ml-3")}
    >
      <span
        className="text-foreground flex-row-cs ml-2 -rotate-3 cursor-default gap-2 bg-[#071228] px-2 py-2 font-black tracking-wide"
        onClick={() => setTonight((s) => !s)}
      >
        <CalendarClockIcon size={16} />
        {tonight ? "Tonight bro.. 👀" : dateText}
      </span>
      <span className="bg-foreground -mt-4 -rotate-3 px-2 py-2 font-black tracking-wide text-[#071228]">
        {timeText}
        <span className="text-[12px] font-medium tracking-normal"> WAT</span>
      </span>
    </div>
  );
};
