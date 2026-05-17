import { Fragment } from "react";
import clsx from "clsx";
import { FaCalendarDay, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";
//
import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";
import { Logo } from "@/components/logo";
import { Badge } from "@/components/shadcn/ui/badge";
import { momentUtil } from "@/utils/moment-util";
import { APP } from "@/constants/APP";
//
import { IBlog } from "./interface";

const Header = ({ src }: { src: string[] }) => {
  return (
    <header
      className={clsx(
        "flex-row-cb h-[58px] bg-white px-8",
        "border-b border-gray-200",
      )}
    >
      <Logo />
      <AvatarGroup className="[&>span]:bg-foreground [&>span]:ring-[#eee]">
        {src.map((item, i) => (
          <Avatar key={i}>
            <AvatarImage src={item} alt="" />
          </Avatar>
        ))}
      </AvatarGroup>
    </header>
  );
};

const Thumbnail = ({ thumbnail, classNames }: IBlog) => (
  <img
    src={`/uploads/blog/${thumbnail}`}
    alt=""
    width={640}
    className={clsx("absolute inset-0 size-full object-cover", classNames?.img)}
  />
);

const DateLocation = ({ date, location }: IBlog) => (
  <>
    <FaCalendarDay className="text-white" />
    <time dateTime={date}>{momentUtil.shortDate(date)}</time>
    <FaMapMarkerAlt className="text-white" />
    <address>{location}</address>
  </>
);

const EventDetails = ({ date }: IBlog) => (
  <>
    <div className="flex-row-cs gap-2">
      <FaCalendarDay className="text-white" />
      {1 ? momentUtil.podcastDate(date) : "TONIGHT 🦊"}
    </div>
    <div className="flex-row-cs gap-2">
      <FaClock className="text-white" />
      {momentUtil.podcastTime(date)} (WAT)
    </div>
    <div className="flex-row-cs gap-2">
      <FaMapMarkerAlt className="text-white" /> Twitter/X Spaces
    </div>
  </>
);

const Headline = ({ classNames, headline }: IBlog) => (
  <h1
    className={clsx(
      "mt-2 font-[Raleway] text-[20px] font-bold",
      classNames?.h1,
    )}
  >
    {headline}
  </h1>
);

const Footer = ({ categories, url }: IBlog) => (
  <footer className="flex-row-cb mt-4">
    <div className="flex-row-cs gap-2">
      {categories.map((v, i) => (
        <Fragment key={i}>
          {v.startsWith("#") ? (
            <div className="flex-row-cs gap-1 border-r border-gray-500 pr-2">
              <small className="mr-1 hidden font-[Montserrat] font-semibold">
                Host
              </small>
              <Badge variant="secondary">{v.replace("#", "")}</Badge>
            </div>
          ) : (
            <Badge variant="secondary">{v}</Badge>
          )}
        </Fragment>
      ))}
    </div>
    <div className="flex-row-cs gap-1.5 text-xs font-medium tracking-wide">
      <MdAdsClick className="text-[15px] text-[#e05c1a]" />
      <span>{url || APP.domain}</span>
    </div>
  </footer>
);

export const Builder = {
  Header,
  Thumbnail,
  DateLocation,
  EventDetails,
  Headline,
  Footer,
};
