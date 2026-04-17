import clsx from "clsx";
import { CardBuilder } from "../../card-builder";
//
import {
  Thumbnail,
  DateLocation,
  EventDetails,
  Headline,
  Footer,
} from "./builder";
import { IBlog } from "./interface";
import data from "./data.json";

interface Props {
  page?: number;
}

export const BlogPostCard = ({ page = 1 }: Props) => {
  const i = page - 1;
  const item = (data[i] || data[0]) as IBlog;
  const logoSafe = typeof item.logo === "string" ? [item.logo] : item.logo;

  const src = ["/images/icon-hwp-labs.png"];
  item.event ? src.push("/images/avatar-etugbeh.png") : null;
  logoSafe.map((item) => src.push(`/uploads/logos/${item}`));
  //
  return (
    <>
      <CardBuilder.Header>
        <CardBuilder.AvatarGroup src={src} />
      </CardBuilder.Header>
      <main className="relative flex-1 overflow-hidden">
        <Thumbnail {...item} />
        <article className="bg-background/90 absolute bottom-8 w-full px-8 py-4 font-[Montserrat] text-white">
          <section
            className={clsx(
              "flex-row-cs text-foreground text-sm font-medium",
              item.event ? "gap-4" : "gap-2",
            )}
          >
            {item.event ? (
              <EventDetails {...item} />
            ) : (
              <DateLocation {...item} />
            )}
          </section>
          <Headline {...item} />
          <Footer {...item} />
        </article>
      </main>
    </>
  );
};
