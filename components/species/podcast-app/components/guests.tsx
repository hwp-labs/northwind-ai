"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ListHeader } from "./list-header";
import { data } from "@/lib/supabase/services/podcasts/data/guests";

export const Guests = () => {
  const [randData, setRandData] = useState(data);
  useEffect(() => {
    setRandData((s) => [...s].sort(() => Math.random() - 0.5));
  }, []);
  //
  return (
    <section className="debug_ max-w-svw">
      <div className="px-5">
        <ListHeader>Featured Guests</ListHeader>
      </div>
      <ul className="scrollbar-hide gap-4_ mt-4 flex snap-x snap-mandatory items-end overflow-x-auto scroll-smooth pb-4">
        {randData.slice(0, 10).map((item, i) => (
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
                    width={20}
                    className="absolute right-0 bottom-0"
                  />
                ) : null}
              </div>
              <figcaption
                className="flex-col-cc debug_ mt-2 cursor-pointer gap-0.5 truncate text-sm"
                onClick={() =>
                  window.open(`https://x.com/${item.socials.x}`, "_blank")
                }
              >
                <strong className="text-white">{item.displayName}</strong>
                {/* <small>{item.username}</small> */}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};
