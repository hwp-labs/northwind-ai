import Image from "next/image";
import {
  IconCalendarEventFilled,
  IconClockHour8Filled,
  IconMapPinFilled,
} from "@tabler/icons-react";
//
import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
//
import { HeroCta } from "./cta";
import { RsvpAvatars } from "./rsvp-avatars";

export const Hero = () => {
  const E = PodcastHelper.GetPageItem(10);
  //
  return (
    <section className="px-4">
      <figure className="debug_ relative h-[200px] overflow-hidden rounded-2xl">
        <Image
          src={`/uploads/podcast/${E.series ? "sony.png" : "halim.png"}`}
          alt=""
          fill
          priority
          className="opacity-40_ object-cover"
        />
        <figcaption
          className="debug_ absolute z-1 grid size-full px-5"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6), rgba(255,255,255,0))",
          }}
        >
          <div className="debug_ flex-col-se w-[250px] flex-1 gap-2">
            <h1 className="font-[Bebas_Neue] text-[26px] leading-[28px] font-medium tracking-[3px]">
              {E.titleSeriesText}
            </h1>
            <div className="flex-row-cs font-[Raleway]_ _font-medium gap-2 text-sm tracking-wide">
              <IconCalendarEventFilled size={18} />
              <span>{E.dateTextShort}</span>
              <IconClockHour8Filled size={18} />
              <time dateTime={E.datetime}>{E.timeText} (WAT)</time>
            </div>
            <div className="flex-row-cs hidden gap-2">
              <IconMapPinFilled size={18} />
              <address className="text-sm">Twitter/X Spaces</address>
            </div>
          </div>
          <div className="flex-row-cb debug_">
            <HeroCta episode={E} />
            <RsvpAvatars id={E.id} />
          </div>
        </figcaption>
      </figure>
      <ul className="flex-row-cc mt-4 hidden gap-2 [&_li>div]:size-2 [&_li>div]:rounded-full">
        <li>
          <div className="bg-border" />
        </li>
        <li>
          <div className="bg-border" />
        </li>
        <li>
          <div className="bg-foreground" />
        </li>
      </ul>
    </section>
  );
};
