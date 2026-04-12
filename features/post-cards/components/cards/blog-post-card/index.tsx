import clsx from "clsx";
import {
  FaCalendarDay,
  FaClock,
  FaTwitter,
  FaGlobeAfrica,
} from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";
//
import { Badge } from "@/components/shadcn/ui/badge";
import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";
import { momentUtil } from "@/utils/moment-util";
import { APP } from "@/constants/APP";
//
import { CardBuilder } from "../../card-builder";
import data from "./data.json";

interface Data {
  classNames?: { img?: string; h1?: string };
  thumbnail: string;
  headline: string;
  location: string;
  date: string;
  icons: string[];
  categories: string[];
  series?: string;
}

interface Props {
  page?: number;
}

export const BlogPostCard = ({ page = 1 }: Props) => {
  const i = page - 1;
  const item = (data[i] || data[0]) as Data;
  //
  return (
    <>
      <CardBuilder.Header>
        <AvatarGroup className="[&>span]:bg-foreground [&>span]:ring-[#eee]">
          <Avatar>
            <AvatarImage src="/images/icon-hwp-labs.png" alt="" />
          </Avatar>
          {item.icons.map((item, i) => (
            <Avatar key={i}>
              <AvatarImage src={`/uploads/blog/${item}`} alt="" />
            </Avatar>
          ))}
          {item.series ? (
            <Avatar>
              <AvatarImage src="/images/avatar-etugbeh.png" alt="" />
            </Avatar>
          ) : null}
        </AvatarGroup>
      </CardBuilder.Header>
      <main className="relative flex-1 overflow-hidden">
        <img
          src={`/uploads/blog/${item.thumbnail}`}
          alt=""
          width={640}
          className={clsx(
            "absolute inset-0 size-full object-cover",
            item.classNames?.img,
          )}
        />
        <footer className="bg-background/90 absolute bottom-8 w-full px-8 py-4 font-[Montserrat] text-white">
          <div
            className={clsx(
              "flex-row-cs text-foreground text-sm font-medium",
              item.series ? "gap-4" : "gap-2",
            )}
          >
            {item.series ? (
              <>
                <div className="flex-row-cs gap-2">
                  <FaCalendarDay className="text-white" />
                </div>
                {momentUtil.podcastDate(item.date)}
                <div className="flex-row-cs gap-2">
                  <FaClock className="text-white" />
                  {momentUtil.podcastTime(item.date)} (WAT)
                </div>
                <div className="flex-row-cs gap-2">
                  <FaTwitter className="text-white" /> Twitter/X Spaces
                </div>
              </>
            ) : (
              <>
                <time dateTime={item.date}>
                  {momentUtil.shortDate(item.date)}
                </time>
                &bull;
                <address>{item.location}</address>
              </>
            )}
          </div>
          <h1
            className={clsx(
              "mt-2 font-[Raleway] text-[20px] font-bold",
              item.classNames?.h1,
            )}
          >
            {item.headline}
          </h1>
          <section className="flex-row-cb mt-4">
            <div className="flex-row-cs gap-2">
              {item.categories.map((v, i) => (
                <Badge key={i} variant="secondary">
                  {v}
                </Badge>
              ))}
            </div>
            <div className="flex-row-cs gap-1.5 text-xs font-medium tracking-wide">
              <MdAdsClick className="text-[15px] text-[#e05c1a]" />
              <span>{item.series || APP.domain}</span>
            </div>
          </section>
        </footer>
      </main>
    </>
  );
};
