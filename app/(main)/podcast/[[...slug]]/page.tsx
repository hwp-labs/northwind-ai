import { Metadata } from "next";
import { SquareArrowOutUpRightIcon, CalendarClockIcon } from "lucide-react";
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import clsx from "clsx";
//
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { PageParams } from "@/types";
import { CUR_DATE } from "@/constants";
import { COPY } from "@/constants/LOCALE";
//
import { PodcastItem } from "@/features/post-cards/components/cards/podcast-post-card/types";
import { ListenerFormWidget } from "@/components/widgets/listener-form-widget";
import data from "@/features/post-cards/components/cards/podcast-post-card/data.json";

export const metadata: Metadata = {
  title: "Podcast",
};

export default async function PodcastPage({ params }: PageParams<string[]>) {
  const paramsAsync = await params;
  const id = Number(paramsAsync?.slug?.[0] || 1);
  const i = id - 1;
  const item = (data[i] || data[0]) as PodcastItem;
  //
  return (
    <main className="flex-centered min-h-[80svh]">
      <div className="mx-auto mb-16 max-w-lg overflow-hidden rounded-4xl lg:rounded-2xl bg-[#9b63fa] shadow-2xl">
        <div className="grid gap-6 p-8">
          <Header {...item} />
          <hgroup className="grid gap-2">
            <h1 className="grid text-4xl leading-[35px] font-black text-white uppercase">
              {item.appName} Design Session
            </h1>
            <p className="text-foreground _font-[Montserrat] text-sm font-medium tracking-wide">
              {COPY.podcastSummary.replaceAll("%", item.appName)}
            </p>
          </hgroup>
        </div>
        <section className="px-8">
          <ListenerFormWidget />
        </section>
        <footer className="flex-row-cb gap-2 bg-[#8c5ae1] px-8 py-5 text-sm">
          <Host />
          <Joined />
        </footer>
      </div>
    </main>
  );
}

const Header = ({ date, dateText, timeText, spaceUrl }: PodcastItem) => {
  const isToday = CUR_DATE === date;
  //
  return (
    <header className="flex-row-cb debug_ font-[Poppins] text-sm font-medium text-white">
      {/* LEFT */}
      <section className="flex-row-cs gap-2">
        <div className="relative">
          {isToday ? (
            <FaMicrophoneAlt size={20} />
          ) : (
            <FaMicrophoneAltSlash size={20} />
          )}
          <div
            className={clsx(
              "absolute top-0 right-0 size-2 rounded-full",
              isToday ? "bg-emerald-500" : "bg-rose-500",
            )}
          ></div>
        </div>
        <p className="tracking-wide_">{isToday ? "Ongoing" : "Upcoming"}</p>
      </section>
      {/* RIGHT */}
      <section>
        {isToday ? (
          <a
            href={spaceUrl || "#"}
            title="Join"
            target="_blank"
            rel="noopener noreferrer"
            className="_debug ml-auto"
          >
            <SquareArrowOutUpRightIcon size={16} strokeWidth={3} />
          </a>
        ) : (
          <span className="flex-row-cs gap-2">
            <CalendarClockIcon size={18} />
            {`${dateText} | ${timeText}`}
          </span>
        )}
      </section>
    </header>
  );
};

const Host = () => {
  return (
    <figure className="flex-row-cs gap-2">
      <img
        src="/images/photo-etugbeh.png"
        alt=""
        className="size-[32px] rounded-full ring-2 ring-white"
      />
      <figcaption className="flex-row-cs gap-1.5 font-medium">
        @2gbeh
        <span className="rounded bg-[#ae8aea] px-1.5 py-0.5 text-xs font-normal">
          Host
        </span>
      </figcaption>
    </figure>
  );
};

const Joined = () => {
  return (
    <figure className="flex-row-cs gap-2">
      <AvatarGroup count={2}>
        {[
          {
            src: "/images/icon-hwp-labs.png",
            alt: "@HWP_Labs",
            text: "HL",
          },
          {
            src: "/icon.png",
            alt: "@northwind_ai",
            text: "NA",
          },
          {
            src: "/images/avatar.png",
            alt: "@2gbeh",
            text: "ET",
          },
        ].map((item, i) => (
          <Avatar key={i}>
            <AvatarImage src={item.src} alt={item.alt} />
            <AvatarFallback>{item.text}</AvatarFallback>
          </Avatar>
        ))}
      </AvatarGroup>
      <figcaption className="font-medium">5 Joined</figcaption>
    </figure>
  );
};
