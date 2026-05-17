import clsx from "clsx";
import { Builder as B } from "./builder";
import { IBlog } from "./interface";
import data from "./data.json";

interface Props {
  page?: number;
}

export const BlogPostCard = ({ page = 1 }: Props) => {
  const i = page - 1;
  const item = (data[i] || data[0]) as IBlog;
  const logoSafe = typeof item.logo === "string" ? [item.logo] : item.logo;

  const src: string[] = item.event ? [] : ["/images/icon-hwp.png"];
  logoSafe.map((item) =>
    src.push(item.startsWith("/") ? item : `/uploads/logos/${item}`),
  );
  //
  return (
    <>
      <B.Header src={src} />
      <main className="relative flex-1 overflow-hidden">
        <B.Thumbnail {...item} />
        <article
          className="_bg-background/90 absolute bottom-8 w-full px-8 py-4 font-[Montserrat] text-white"
          style={{
            background:
              "linear-gradient(to right, black, black, rgba(255,255,255,0))",
          }}
        >
          <section
            className={clsx(
              "flex-row-cs text-foreground text-sm font-medium",
              item.event ? "gap-4" : "gap-2",
            )}
          >
            {item.event ? (
              <B.EventDetails {...item} />
            ) : (
              <B.DateLocation {...item} />
            )}
          </section>
          <B.Headline {...item} />
          <B.Footer {...item} />
        </article>
      </main>
    </>
  );
};
