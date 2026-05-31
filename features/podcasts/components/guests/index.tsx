import Image from "next/image";
import { ListHeader } from "../list-header";
import { DisplayName } from "./display-name";
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
      <div className="px-5">
        <ListHeader>Featured Guests</ListHeader>
      </div>
      <ul className="scrollbar-hide gap-4_ mt-4 flex snap-x snap-mandatory items-end overflow-x-auto scroll-smooth pb-4">
        {transformedData.map((item, i) => (
          <li key={i} className="debug_ max-w-[90px] min-w-[90px]">
            <figure className="debug3_ flex-col-cc flex-shrink-0 snap-center">
              <div className="relative">
                <Image
                  src={item.avatar}
                  alt=""
                  width={56}
                  height={56}
                  className="border-outline size-[56px] rounded-full border-2"
                />
                {item.location?.flag ? (
                  <img
                    src={item.location.flag}
                    alt=""
                    width={24}
                    className="absolute right-0 bottom-0"
                  />
                ) : null}
              </div>
              <DisplayName guest={item}/>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};
