import Image from "next/image";
import {
  IconCalendarEventFilled,
  IconClockHour8Filled,
  IconMapPinFilled,
} from "@tabler/icons-react";
//
import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";
//
import { HeroCta } from "./cta";

export const Hero = () => {
  return (
    <section className="px-4">
      <figure className="debug_ relative h-[200px] overflow-hidden rounded-2xl">
        <Image
          src={`/uploads/podcast/${0 ? "halim.png" : "sony.png"}`}
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
              {/* Risk Assessment & AI with Tech Bro Wives */}
              KPIs of World-Class Software Engineers
            </h1>
            <div className="flex-row-cs font-[Raleway]_ _font-medium gap-2 text-sm tracking-wide">
              <IconCalendarEventFilled size={18} />
              <span>Sun, May 17</span>
              <IconClockHour8Filled size={18} />
              <time dateTime="2026-05-24t20:00:00">8PM (WAT)</time>
            </div>
            <div className="flex-row-cs hidden gap-2">
              <IconMapPinFilled size={18} />
              <address className="text-sm">Twitter/X Spaces</address>
            </div>
          </div>
          <div className="flex-row-cb debug_">
            <HeroCta />
            <AvatarGroup
              count={22 - 3}
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
      <ul className="flex-row-cc mt-4 gap-2 [&_li>div]:size-2 [&_li>div]:rounded-full hidden">
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
