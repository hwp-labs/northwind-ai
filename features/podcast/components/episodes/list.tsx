"use client";

import clsx from "clsx";
import { Topic } from "../topic";
import { Datetime } from "../datetime";
import { Thumbnail } from "./thumbnail";
import { CtaButton } from "./cta-button";
import { usePodcastStore } from "@/store/podcastStore";
import { transformEpisode } from "@/lib/podcast/episodes/utils";
import { iSearch } from "@/utils";
import { data } from "@/lib/podcast/episodes/data";

export const List = () => {
  const search = usePodcastStore((s) => s.search);
  //
  return (
    <ul className="scroll-smooth">
      {data.map((item, i) => {
        const episode = transformEpisode(item.id);
        //
        return iSearch(episode.topic, search.value) ? (
          <li
            key={item.id}
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
            <CtaButton episode={episode} />
          </li>
        ) : null;
      })}
    </ul>
  );
};
