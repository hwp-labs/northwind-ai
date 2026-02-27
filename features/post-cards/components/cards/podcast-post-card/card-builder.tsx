import { MdAdsClick } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { MapPinHouseIcon } from "lucide-react";
//
import { OptionItem } from "@/types";
import { PodcastDto } from "@/lib/supabase/services/podcasts/types";
import { APP } from "@/constants/APP";
import { COPY } from "@/constants/LOCALE";
// 
import { CardBuilderDatetime as Datetime } from "./card-builder-datetime";

const Venue = ({ id }: PodcastDto) => {
  return (
    <section className="flex-col-sc ml-8">
      <div className="text-foreground flex-row-cs ml-4 -rotate-4 gap-2.5 bg-[#071228] px-4 py-2 font-black tracking-wide">
        <MapPinHouseIcon size={16} />
        Twitter_X Spaces
      </div>
      <div className="flex-row-cs -mt-0 -rotate-4 gap-2 bg-[#fb085a] px-4 py-2 text-white">
        <MdAdsClick size={16} />
        <a
          href={`/podcast/${id}`}
          target="_blank"
          className="font-[Raleway] text-xs font-bold tracking-[1px] underline underline-offset-2"
        >
          {APP.domain}/podcast/{id}
        </a>
      </div>
    </section>
  );
};

const Speaker = ({ label, value }: OptionItem) => (
  <li className="flex-row-cs gap-1">
    <span className="flex-row-cs gap-2 bg-black px-1 py-0.5 text-white">
      {label}
      <FaTwitter size={12} />
    </span>
    <a
      href={`https://x.com/${value}`}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold"
      style={{ textShadow: "-1px 1px 1px white" }}
    >
      {value}
    </a>
  </li>
);

const Hero = ({ appName, guestName }: PodcastDto) => (
  <section
    className={guestName ? "mt-10" : "mt-6"}
    style={{
      background:
        "linear-gradient(to right, black, black, rgba(255,255,255,0))",
    }}
  >
    <h1 className="grid text-6xl leading-[45px] font-black text-white uppercase">
      <span className="_text-[#41dbc1]">{appName}</span>
      <span className="_text-[#fb085a]">Design Session</span>
    </h1>
    <div className="text-foreground uppercase_ px-1 py-1 font-[Montserrat] text-[10px] font-medium tracking-wide">
      {COPY.podcastSummaryRichText(appName)}
    </div>
  </section>
);

const PoweredBy = ({ notionUrl }: PodcastDto) => (
  <footer className="absolute right-8 bottom-5 z-1">
    <a
      href={notionUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-row-cs text-foreground _debug gap-2 text-xs font-medium"
    >
      Powered by
      <img src="/images/icon-notion.png" alt="" width={20} /> Notion
    </a>
  </footer>
);

export const CardBuilder = {
  Datetime,
  Venue,
  Speaker,
  Hero,
  PoweredBy,
};
