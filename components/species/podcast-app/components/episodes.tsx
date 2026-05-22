import Image from "next/image";
import { ListHeader } from "./list-header";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { data } from "@/lib/supabase/services/podcasts/data";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";

export const Episodes = () => {
  return (
    <section className="debug_ max-h-svh">
      <div className="px-5 pb-4">
        <ListHeader>Past Episodes</ListHeader>
      </div>
      <ul
        // className="mt-4_ debug grid h-svh overflow-y-auto px-4"
        className="scrollbar-hide h-[400px] snap-y snap-mandatory  overflow-y-auto scroll-smooth px-4 pb-4"
      >
        {[...data]
          .filter(({ listeners }) => listeners)
          .sort((a, b) => b.id - a.id)
          .map((episode, i) => {
            const item = PodcastHelper.GetPageItem(episode.id);
            return (
              <li
                key={i}
                className="flex-row-cb shrink-0 snap-center gap-6 border-b py-4"
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
                    <strong
                      className="border_ line-clamp-2 min-h-[25px] text-white"
                      dangerouslySetInnerHTML={{
                        __html: [10, 9, 8, 7].includes(item.id)
                          ? item.summaryNobr
                          : item.titleSeriesText,
                      }}
                    />
                    <p className="text-[12px]">{item.datetimeText}</p>
                  </figcaption>
                </figure>
                <div className="flex-row-cs gap-4">
                  <small className="whitespace-nowrap">
                    {item.listeners} L
                  </small>
                  <button className="bg-primary flex-row-cc size-[40px] rounded-full">
                    <IconPlayerPlayFilled size={18} />
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
};
