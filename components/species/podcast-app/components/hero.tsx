"use client";

import Image from "next/image";
import {
  IconAlarmPlus,
  IconBell,
  IconBellCheck,
  IconBellRinging,
  IconCalendarEventFilled,
  IconCalendarFilled,
  IconClockHour8Filled,
  IconMapPinFilled,
} from "@tabler/icons-react";
//
import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";
import { useState } from "react";
import {
  AlarmCheckIcon,
  AlarmClockPlusIcon,
  CalendarCheckIcon,
  ChevronRightIcon,
  ConciergeBellIcon,
  UserCheckIcon,
  UserPlusIcon,
  UserStarIcon,
} from "lucide-react";

export const Hero = () => {
  const [rsvp, setRsvp] = useState(false);
  //
  return (
    <section className="px-4">
      <figure className="debug_ relative h-[200px] overflow-hidden rounded-2xl">
        <Image
          src={`/uploads/podcast/${rsvp ? "halim.png" : "sony.png"}`}
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
              Risk Assessment & AI with Tech Bro Wives
            </h1>
            <div className="flex-row-cs font-[Raleway]_ _font-medium gap-2 text-sm tracking-wide">
              <IconCalendarEventFilled size={18} />
              <span>Sun, May 24</span>
              <IconClockHour8Filled size={18} />
              <time dateTime="2026-05-24t20:00:00">8PM</time>
            </div>
            <div className="flex-row-cs hidden gap-2">
              <IconMapPinFilled size={18} />
              <address className="text-sm">Twitter/X Spaces</address>
            </div>
          </div>
          <div className="flex-row-cb debug_">
            <button
              onClick={() => setRsvp((s) => !s)}
              className="bg-white text-podcast px-4 py-1.5 rounded-lg border-2 border-podcast ring-2 ring-white button-base gap-2 font-medium"
            >
              <span>RSVP</span>
              <IconBell size={18} strokeWidth={2.5} />
            </button>
            <AvatarGroup
              count={2}
              className="[&>span]:bg-foreground [&>span]:ring-1.5! [&>span]:ring-[#eee]"
              countClassName="invert"
            >
              {[
                "/images/avatar-etugbeh.png",
                "/uploads/podcast/avatar-polalere.png",
                "/uploads/podcast/avatar-aosawere.png",
              ]
                .slice(0, 3)
                .map((item, i) => (
                  <Avatar key={i}>
                    <AvatarImage src={item} alt="" />
                  </Avatar>
                ))}
            </AvatarGroup>
          </div>
        </figcaption>
      </figure>
      <ul className="flex-row-cc mt-4 gap-2 [&_li>div]:size-2 [&_li>div]:rounded-full">
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
