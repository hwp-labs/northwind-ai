import Image from "next/image";
import clsx from "clsx";
//
import { ListHeader } from "../list-header";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
import { data } from "@/lib/supabase/services/podcasts/data/episodes";
// 
import { EpisodeCta } from "./cta";

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
        {[...data]
          .filter(({ listeners }) => listeners)
          .sort((a, b) => b.id - a.id)
          .map((episode, i) => {
            const item = PodcastHelper.GetPageItem(episode.id);
            return (
              <li
                key={i}
                className={clsx(
                  "flex-row-cb shrink-0 snap-center gap-6 border-b",
                  i < 1 ? "pt-0 pb-4" : "py-4",
                )}
              >
                <figure className="flex-row-cs gap-4">
                  <Image
                    src={item.displayAvatar!}
                    alt=""
                    width={56}
                    height={56}
                    className="size-[56px] rounded-[12px]"
                  />
                  <figcaption className="flex-col-sc gap-1 text-sm">
                    <strong className="border_ line-clamp-2 min-h-[25px] text-white">
                      {item.titleShort || item.titleSeriesText}
                    </strong>
                    <p className="text-muted-foreground text-[12px]">
                      {item.datetimeTextShort}
                    </p>
                  </figcaption>
                </figure>
                <div className="flex-row-cs gap-4">
                  <small className="font-[Montserrat]_ text-muted-foreground text-sm font-medium whitespace-nowrap">
                    {item.listeners} L
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
