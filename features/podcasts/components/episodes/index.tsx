import clsx from "clsx";
import { ListHeader } from "../list-header";
import { Topic } from "../topic";
import { Datetime } from "../datetime";
import { Thumbnail } from "./thumbnail";
import { Listeners } from "./listeners";
import { CtaButton } from "./cta-button";
import { transformEpisode } from "@/lib/podcast/episodes/utils";
import { PATH } from "@/constants/PATH";
import { data } from "@/lib/podcast/episodes/data";

export const Episodes = () => {
  return (
    <section className="debug_ max-h-svh">
      <ListHeader className="px-5 pb-4" path={PATH.podcastEpisodes}>
        Episodes
      </ListHeader>
      <ul
        // className="mt-4_ debug grid h-svh overflow-y-auto px-4"
        className="scrollbar-hide h-[400px] snap-y snap-mandatory overflow-y-auto scroll-smooth px-4 pb-4"
      >
        {data.map((item, i) => {
          const episode = transformEpisode(item.id);
          //
          return (
            <li
              key={i}
              className={clsx(
                "flex-row-cb shrink-0 snap-center gap-6 border-b",
                i < 1 ? "pt-0 pb-4" : "py-4",
              )}
            >
              <figure className="flex-row-cs gap-4">
                <Thumbnail episode={episode} />
                <figcaption className="flex-col-sc gap-1">
                  <Topic topic={episode.topic} variant="list" />
                  <Datetime episode={episode} variant="text" />
                </figcaption>
              </figure>
              <div className="flex-row-cs gap-4">
                <Listeners value={episode.listeners} />
                <CtaButton episode={episode} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
