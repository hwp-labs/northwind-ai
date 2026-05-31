import clsx from "clsx";
import { ListHeader } from "../list-header";
import { Topic } from "../topic";
import { Datetime } from "../datetime";
import { Thumbnail } from "./thumbnail";
import { EpisodeCta } from "./cta";
import { EpisodeHelper } from "@/lib/podcast/episodes/helper";
import { data } from "@/lib/podcast/episodes/data";

export const Episodes = () => {
  return (
    <section className="debug_ max-h-svh">
      <div className="px-5 pb-4">
        <ListHeader>Episodes</ListHeader>
      </div>
      <ul
        // className="mt-4_ debug grid h-svh overflow-y-auto px-4"
        className="scrollbar-hide h-[400px] snap-y snap-mandatory overflow-y-auto scroll-smooth px-4 pb-4"
      >
        {data.map((episode, i) => {
          const item = EpisodeHelper.GetItemById(episode.id);
          return (
            <li
              key={i}
              className={clsx(
                "flex-row-cb shrink-0 snap-center gap-6 border-b",
                i < 1 ? "pt-0 pb-4" : "py-4",
              )}
            >
              <figure className="flex-row-cs gap-4">
                <Thumbnail item={item} />
                <figcaption className="flex-col-sc gap-1 text-sm">
                  <Topic topic={item.safeTopic} variant="list" />
                  <Datetime episode={item} variant="text" />
                </figcaption>
              </figure>
              <div className="flex-row-cs gap-4">
                <small className="font-f2_ text-muted-foreground text-sm font-medium whitespace-nowrap">
                  {item.listeners ? <>{item.listeners}x</> : "TBA"}
                </small>
                <EpisodeCta item={item} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
