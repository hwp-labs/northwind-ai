import clsx from "clsx";
import { FaGlobeAfrica } from "react-icons/fa";
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
  categories: string[];
  headline: string;
  location: string;
  date: string;
  icons: string[];
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
          <div className="flex-row-cs gap-1 text-sm font-medium">
            <time dateTime={item.date}>{momentUtil.shortDate(item.date)}</time>
            &bull;
            <address>{item.location}</address>
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
              <FaGlobeAfrica className="text-contrast"/>
              <span>{APP.domain}</span>
            </div>
          </section>
        </footer>
      </main>
    </>
  );
};
