import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";
import { momentUtil } from "@/utils/moment-util";
import { APP } from "@/constants/APP";
//
import { CardBuilder } from "../../card-builder";
import data from "./data.json";

interface Data {
  icons: string[];
  thumbnail: string;
  headline: string;
  location: string;
  date: string;
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
          className="absolute inset-0 size-full object-cover"
        />
        <footer className="bg-background/90 absolute bottom-8 w-full px-8 py-6 font-[Montserrat] text-white">
          <div className="flex-row-cs gap-1 text-sm font-medium">
            <time dateTime={item.date}>{momentUtil.shortDate(item.date)}</time>
            &bull;
            <address>{item.location}</address>
          </div>
          <p className="tracking-wide_ mt-2 font-[Raleway] text-[20px] font-bold">
            {item.headline}
          </p>
          <p className="mt-4 space-x-2 text-xs font-medium tracking-wide">
            <span className="text-contrast">&gt;_</span>
            <span>{APP.domain}</span>
          </p>
        </footer>
      </main>
    </>
  );
};
