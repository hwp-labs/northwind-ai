import Image from "next/image";
import { IconClockHour8Filled, IconMapPinFilled } from "@tabler/icons-react";
//
import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";

export const Hero = () => {
  return (
    <section className="px-4">
      <figure className="debug_ relative h-[200px] overflow-hidden rounded-2xl">
        <Image
          src="/uploads/podcast/halim.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <figcaption className="debug_ absolute z-1 grid size-full px-5">
          <div className="debug_ flex-col-se flex-1 gap-2">
            <h1 className="font-[Montserrat] text-[24px] leading-[28px] font-semibold">
              Risk Assessment & AI with Tech Bro Wives
            </h1>
            <div className="flex-row-cs gap-2">
              <IconClockHour8Filled size={18} />
              <time
                dateTime="2026-05-24t20:00:00"
                className="font-[Montserrat]_ _font-medium text-sm tracking-wide"
              >
                Sunday, May 24th | 8PM (WAT)
              </time>
            </div>
            <div className="flex-row-cs hidden gap-2">
              <IconMapPinFilled size={18} />
              <address className="text-sm">Twitter/X Spaces</address>
            </div>
          </div>
          <div className="flex-row-cb debug_">
            <button className="bg-podcast rounded-full px-5 py-2 text-sm font-medium">
              RSVP
            </button>
            <AvatarGroup
              count={2}
              className="[&>span]:bg-foreground [&>span]:ring-[#eee]"
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
    </section>
  );
};
