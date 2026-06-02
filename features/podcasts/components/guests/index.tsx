import { ListHeader } from "../list-header";
import { DisplayName } from "./display-name";
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
              <Avatar speaker={item}/>
              <DisplayName guest={item} />
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};
