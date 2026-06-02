import { AnchorOutbound } from "@/components/atoms/anchor";
import { ListHeader } from "../list-header";
import { Avatar } from "./avatar";
import { PATH } from "@/constants/PATH";
import { data } from "@/lib/podcast/speakers/data";

const transformData = () => {
  const shown = data.filter(({ hide }) => !hide);
  const randomized = [...shown].sort(() => Math.random() - 0.5);
  const top10 = randomized.slice(0, 10);
  return top10;
};

export const Guests = () => {
  const transformedData = transformData();
  //
  return (
    <section className="debug_ max-w-svw">
      <ListHeader className="px-5" path={PATH.podcastGuests}>
        Featured Guests
      </ListHeader>
      <ul className="scrollbar-hide gap-4_ mt-4 flex snap-x snap-mandatory items-end overflow-x-auto scroll-smooth pb-4">
        {transformedData.map((item) => (
          <li key={item.id} className="debug_ max-w-[90px] min-w-[90px]">
            <figure className="debug3_ flex-col-cc flex-shrink-0 snap-center">
              <Avatar speaker={item} />
              <figcaption className="flex-col-cc debug mt-2 cursor-pointer gap-0.5 truncate text-sm font-medium text-white">
                <AnchorOutbound href={item.socials.x}>
                  {item.displayName}
                </AnchorOutbound>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};
