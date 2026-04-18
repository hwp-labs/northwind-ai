import { MdAdsClick } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import clsx from "clsx";
//
import { AnchorOutbound } from "@/components/atoms/anchor";
import {
  PodcastDto,
  TransformedPodcastDto,
  PodcastCustomTagEnum,
} from "@/lib/supabase/services/podcasts/types";
import { OptionItem } from "@/types";
import { APP } from "@/constants/APP";
//
import { CardBuilderDatetime as Datetime } from "./card-builder-datetime";

const Venue = ({ id }: PodcastDto) => {
  return (
    <section className="flex-col-sc ml-8">
      <div className="text-foreground flex-row-cs ml-7 -rotate-4 gap-2 bg-[#071228] px-4 py-2 text-sm font-black tracking-wide">
        <FaMapMarkerAlt size={14} />
        Twitter_X Spaces
      </div>
      <div className="flex-row-cs -mt-0 -rotate-4 gap-2 bg-[#fb085a] px-4 py-2 text-white">
        <MdAdsClick size={16} />
        <a
          href={`/podcast/${id}`}
          target="_blank"
          className="_underline font-[Raleway] text-xs font-bold tracking-[1px] underline-offset-2"
        >
          {APP.domain}/podcast/{id}
        </a>
      </div>
    </section>
  );
};

const Speakers = (item: TransformedPodcastDto) => {
  if (!item.guestUsername) return null;

  if (typeof item.guestUsername === "string")
    return (
      <ul className="flex-row-cc debug_ mt-6 mb-6 w-[320px] -rotate-4 gap-8 text-sm">
        <Speaker label="host" value="@2gbeh" />
        <Speaker label="guest" value={item.guestUsername} />
      </ul>
    );

  return item.customTag === PodcastCustomTagEnum.VERSE_RADIO ? (
    <div className="debug_ mt-4 mb-4 w-[320px] -rotate-0 text-sm">
      <Speaker label="host" value={item.guestUsername[0]} invert />
      <ul className="mt-4 grid grid-cols-2 gap-2">
        {item.guestUsername.map((item, i) =>
          i > 0 ? <Speaker key={item} label="guest" value={item} /> : null,
        )}
      </ul>
    </div>
  ) : null;
};

const Speaker = ({
  label,
  value,
  invert,
}: OptionItem & { invert?: boolean }) => (
  <li className="flex-row-cs flex-col gap-1">
    <span
      className={clsx(
        "flex-row-cs gap-2 bg-black px-1 py-0.5 text-white",
        invert && "invert",
      )}
    >
      {label}
      <FaTwitter size={12} />
    </span>
    <AnchorOutbound
      href={`https://x.com/${value.replace("@", "")}`}
      className="font-semibold"
      style={{ textShadow: "-1px 1px 1px white" }}
    >
      {value}
    </AnchorOutbound>
  </li>
);

const Hero = (item: TransformedPodcastDto) => {
  const isVerseRadio = item.customTag === PodcastCustomTagEnum.VERSE_RADIO;
  //
  return (
    <section
      style={{
        background:
          "linear-gradient(to right, black, black, rgba(255,255,255,0))",
      }}
    >
      <h1
        className={clsx(
          "uppercase_ grid text-[58px] leading-[45px] font-black text-white uppercase",
          isVerseRadio && "px-4 py-2 text-[28px]! leading-[35px]! capitalize!",
        )}
      >
        <span className="_text-[#41dbc1]">
          {isVerseRadio ? item.richTextLine1 : item.title}
        </span>
        <span className="_text-[#fb085a]">
          {!item.isLongTitle && item.seriesText}
        </span>
      </h1>
      <div
        className={clsx(
          "text-foreground uppercase_ px-1 py-1 font-[Montserrat] text-sm font-medium tracking-wide",
          isVerseRadio && "hidden",
        )}
      >
        <p dangerouslySetInnerHTML={{ __html: item.richTextLine1 }} />
        <p dangerouslySetInnerHTML={{ __html: item.richTextLine2 }} />
      </div>
    </section>
  );
};

const PoweredBy = ({ notionUrl, customTag }: PodcastDto) => (
  <footer className="absolute right-8 bottom-5 z-1">
    <AnchorOutbound
      href={notionUrl || "#"}
      className="flex-row-cs text-foreground _debug gap-2 text-xs font-medium"
    >
      {customTag === PodcastCustomTagEnum.VERSE_RADIO ? (
        <>
          Official Token of
          <img src="/uploads/logos/bitcoin.png" alt="" width={20} /> Bitcoin
        </>
      ) : (
        <>
          Powered by
          <img src="/uploads/logos/notion.png" alt="" width={20} /> Notion
        </>
      )}
    </AnchorOutbound>
  </footer>
);

export const CardBuilder = {
  Datetime,
  Venue,
  Speakers,
  Hero,
  PoweredBy,
};
